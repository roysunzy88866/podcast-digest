// C19 · 正文按句分段(US-4/US-11)的真业务测试。
// 纪律:只调被测函数;每条能变异验证。分段是「集页正文排版」,渲染前对 bodyMd 生效。
import { describe, it, expect } from "vitest";
import { segmentBody } from "../scripts/render.mjs";

const sentCount = (s: string) => (s.match(/[。！？…!?]/g) || []).length;
const paras = (s: string) => s.split(/\n{2,}/).filter((p) => p.trim());

describe("segmentBody · C19 正文按句分段", () => {
  it("长段(5 句)按每 2-3 句拆成多段,每段句数在 2-3", () => {
    const md = "第一句话在这里。第二句话在这里。第三句话在这里。第四句话在这里。第五句话在这里。";
    const out = segmentBody(md);
    const ps = paras(out);
    expect(ps.length).toBeGreaterThan(1); // 被拆开
    ps.forEach((p) => {
      expect(sentCount(p)).toBeGreaterThanOrEqual(2);
      expect(sentCount(p)).toBeLessThanOrEqual(3);
    });
    // 拆分不丢字:去掉换行后与原文一致
    expect(out.replace(/\n+/g, "")).toBe(md);
  });

  it("短段(≤3 句)原样不动(尊重 GLM 已分好的段)", () => {
    expect(segmentBody("只有一句话。")).toBe("只有一句话。");
    expect(segmentBody("第一句。第二句。")).toBe("第一句。第二句。");
    expect(segmentBody("第一句。第二句。第三句。")).toBe("第一句。第二句。第三句。");
  });

  it("pd-ts 回原文按钮:不被截断,且跟随它所在的句子(不落到下一段开头)", () => {
    const btn = '<button class="pd-ts" data-t="00:04" data-who="X" data-en="Hello. World! Right?" aria-label="回原文"></button>';
    const md = `第一句在这。${btn}第二句在这。第三句在这。第四句在这。`;
    const out = segmentBody(md);
    expect(out).toContain(btn); // 按钮整体完好
    // button 里 data-en 的英文 . ! ? 不被当中文句末 → 中文 4 句正好切成 2 段(2+2);
    // 若 button 内标点被误当句末,段数会变(此断言即变异守卫)
    expect(paras(out).length).toBe(2);
    // button 跟在「第一句。」后面,不会成为某段的开头
    expect(out).not.toMatch(/(^|\n\n)\s*<button/);
    expect(out.replace(/\n+/g, "")).toBe(md); // 不丢字
  });

  it("pd-ts 按钮 data-en 含 > 号也不被截断(GLM 005[1] 加固:用 </button> 整体跳过)", () => {
    const btn = '<button class="pd-ts" data-en="a > b and c > d. Yes!" aria-label="回原文"></button>';
    const md = `甲句子在这。${btn}乙句子在这。丙句子在这。丁句子在这。`;
    const out = segmentBody(md);
    expect(out).toContain(btn); // 含 > 的 button 整体完好
    expect(out.replace(/\n+/g, "")).toBe(md); // 不丢字
    expect(paras(out).length).toBe(2); // 中文 4 句→2 段;button 内 > 和 . ! 不干扰
  });

  it("[[双链]] 不被从中间截断", () => {
    const md = "这集讲[[智能体]]的底层。又聊到[[沙箱]]的痛点。第三点很关键。第四点也重要。";
    const out = segmentBody(md);
    expect(out).toContain("[[智能体]]");
    expect(out).toContain("[[沙箱]]");
    expect(out.replace(/\n+/g, "")).toBe(md);
  });

  it("行内代码里的句点不被当句末(不误切)", () => {
    const md = "先跑 `a.b.c.d` 命令。然后看结果。接着调参。最后收工。";
    const out = segmentBody(md);
    expect(out).toContain("`a.b.c.d`");
    expect(sentCount(out)).toBe(4); // 代码里的 . 不计
  });

  it("不动结构块:标题 / 引用块(callout) / 列表 / 表格 / HTML 块 / 代码围栏", () => {
    const md = [
      "## 小节标题在这里。它有句号。",
      "> [!info] 关联\n> 一行。两行。三行。四行。",
      "- 列表项一句。两句。三句。四句。",
      "| 表 | 头 |\n| - | - |",
      '<div class="pd-exit">块内容。很多。句子。在此。</div>',
      "```\n代码。多行。在此。这里。\n```",
    ].join("\n\n");
    const out = segmentBody(md);
    expect(out).toContain("## 小节标题在这里。它有句号。"); // 标题整行不拆
    expect(out).toContain("> [!info] 关联\n> 一行。两行。三行。四行。"); // 引用块不拆
    expect(out).toContain("- 列表项一句。两句。三句。四句。"); // 列表不拆
    expect(out).toContain('<div class="pd-exit">块内容。很多。句子。在此。</div>'); // HTML 块不拆
    expect(out).toContain("```\n代码。多行。在此。这里。\n```"); // 代码围栏不拆
  });

  it("多个正文长段:各自独立分段,段间原有空行保持", () => {
    const p1 = "甲一。甲二。甲三。甲四。";
    const p2 = "乙一。乙二。乙三。乙四。";
    const out = segmentBody(`${p1}\n\n${p2}`);
    // 两个长段各被拆成 2 段 → 共 4 段
    expect(paras(out).length).toBe(4);
    expect(out.replace(/\n+/g, "")).toBe(p1 + p2);
  });
});

// C41 · 精华可读性 v2(ADR 0027,2026-10-04 用户「需求通过」):新集按长度切(每段 ≤50 汉字),存量照旧
import { visibleHanCount, READABLE_V2_AFTER, PARA_MAX_HAN, renderEpisode } from "../scripts/render.mjs";
import { readdirSync, readFileSync as rf, existsSync as ex } from "node:fs";
describe("C41 · 新集每段 ≤50 汉字", () => {
  const LONG = "这一集是主持人在洛杉矶对话嘉宾——她执掌着一家洛杉矶传奇公共广播电台，约一百四十名员工，不久前还兼任了全国公共广播董事会主席。聊的是一件事：当受众迁移、联邦资金被砍、算法被寡头控制，一家公共媒体靠什么活下去，还活得有影响力。转折靠热爱加一点运气。她是忠实听众。";
  it("★★★ 长度模式:每段可见汉字 ≤50;一字不增不减(只重排段落边界)", () => {
    const out = segmentBody(LONG, { maxChars: PARA_MAX_HAN });
    const paras = out.split("\n\n");
    expect(paras.length).toBeGreaterThan(1);
    // 每段 ≤50 字;超的只能是「切不开的单句」(2026-10-04 起 —— 不再当分句点)
    for (const p of paras) expect(visibleHanCount(p) <= 50 || (p.match(/[。！？]/g) ?? []).length <= 1).toBe(true);
    expect(paras.join("")).toBe(LONG);
  });
  it("★★ 单句超 50 字在 ;: 处再切;—— 与逗号处不切,切不开就单句成段", () => {
    const s = "甲".repeat(30) + "；" + "乙".repeat(30) + "。";
    expect(segmentBody(s, { maxChars: 50 }).split("\n\n")).toEqual(["甲".repeat(30) + "；", "乙".repeat(30) + "。"]);
    const dash = "甲".repeat(30) + "——" + "乙".repeat(30) + "。";
    expect(segmentBody(dash, { maxChars: 50 })).toBe(dash);
    const noCut = "丙".repeat(40) + "，" + "丁".repeat(40) + "。";
    expect(segmentBody(noCut, { maxChars: 50 })).toBe(noCut);
  });
  it("★★ 回原文按钮里的英文、双链的目标名不计入字数", () => {
    expect(visibleHanCount('他说了一句话。<button class="pd-ts" data-en="中文不该在这里">↩</button>')).toBe(6);
    expect(visibleHanCount("提到[[英伟达公司|英伟达]]。")).toBe(5);
  });
  it("★★★ 按入库日分流:added ≤ 2026-10-04 走旧切法(存量不动),之后走长度切", () => {
    expect(READABLE_V2_AFTER).toBe("2026-10-04");
    const meta = (added: string) => ({ id: "x", title_en: "t", podcast: "p", added, date: "2026-10-01", duration_sec: 60, guests: [], source_url: "u" });
    const digest = { tldr: "t", digest_md: LONG, quotes: [] };
    const oldPage = renderEpisode(meta("2026-10-04") as any, digest as any);
    const newPage = renderEpisode(meta("2026-10-05") as any, digest as any);
    expect(oldPage).toContain(segmentBody(LONG));
    expect(newPage).toContain(segmentBody(LONG, { maxChars: 50 }));
    expect(oldPage).not.toBe(newPage);
  });
  it("★★★ 真存量:samples 里 2026-10-04 及以前入库的集,重渲染分段与改动前一致(抽 20 集比对正文段)", () => {
    const root = decodeURIComponent(new URL("..", import.meta.url).pathname);
    const ids = readdirSync(root + "data/episodes").filter((id) => ex(`${root}data/episodes/${id}/digest.json`) && ex(`${root}samples/${id}.md`)).slice(-20);
    for (const id of ids) {
      const meta = JSON.parse(rf(`${root}data/episodes/${id}/meta.json`, "utf8"));
      if (String(meta.added ?? "") > READABLE_V2_AFTER) continue;
      const md = JSON.parse(rf(`${root}data/episodes/${id}/digest.json`, "utf8")).digest_md;
      expect(segmentBody(md, String(meta.added ?? "") > READABLE_V2_AFTER ? { maxChars: 50 } : {})).toBe(segmentBody(md));
    }
  });
});

describe("C41 · 小标题下紧跟正文(无空行)也要切(样张实证 Jev 集)", () => {
  const body = "这是第一句很长的正文内容用来凑字数。".repeat(5);
  const md = `## 小标题\n${body}`;
  it("★★★ 新集长度模式:标题与正文拆开,正文照样每段 ≤50 字", () => {
    const out = segmentBody(md, { maxChars: 50 });
    const [head, ...rest] = out.split("\n\n");
    expect(head).toBe("## 小标题");
    expect(rest.length).toBeGreaterThan(1);
    for (const p of rest) expect(visibleHanCount(p)).toBeLessThanOrEqual(50);
  });
  it("★★★ 存量(旧模式):这种块原样不动(老页面逐字不变)", () => {
    expect(segmentBody(md)).toBe(md);
  });
});

describe("C41 · 新集分段:收引号不落到下一段开头,破折号处不切(样张实证)", () => {
  it("★★★ 「……。」的 」跟着前一句;「——」不再当分句点", () => {
    const md = "发现漏判时，补一个问题就行。「这就像没有 ML 的 ML。」确定性反而被他称为错误的北极星——他主张鲁棒性。";
    const paras = segmentBody(md, { maxChars: 20 }).split("\n\n");
    expect(paras.some((p) => p.startsWith("」"))).toBe(false);
    expect(paras.some((p) => /——$/.test(p.trim()))).toBe(false);
    expect(paras.join("")).toBe(md);
  });
});
