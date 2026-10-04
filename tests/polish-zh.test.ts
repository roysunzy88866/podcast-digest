// C41 · 精华可读性 v2 机器修(ADR 0027,2026-10-04 用户「需求通过」):人名统一 / 清普通英文 / 拆长句,不许带出新事实层失败。
import { describe, it, expect } from "vitest";
import { mkdtempSync, writeFileSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { strayWords, sentenceIssues, fixNameVariants, officialNames, acceptRewrite, polish, LONG_SENT_HAN, applyEmphasis, sections, EMPH_MAX, parseEmphasis, stripBodyBold, stripShortQuotes, acceptEdit, plainEdit, normalizeEdit, editVerdict, addHeadings, parseHeadings, headingOk, HEAD_SPLIT_HAN } from "../scripts/polish-zh.mjs";
import { visibleHanCount as visibleHan } from "../scripts/render.mjs";

describe("C41 · 标出问题句", () => {
  it("★★★ 普通英文词被标出;约定俗成的技术词、双链/按钮/时间戳里的英文不算", () => {
    expect(strayWords("当受众迁移、联邦 funding 被砍,触达 truly 没有媒体的人。")).toEqual(["funding", "truly"]);
    expect(strayWords("用 token 计费,写 prompt 调 harness。")).toEqual([]);
    expect(strayWords('提到[[Open source|开源]]。<button data-en="it was truly great">↩</button>[12:03 Jennifer Ferro]')).toEqual([]);
  });
  it("★★ 超 60 字的句子标「过长」;标题/【背景】引用块不查", () => {
    const long = "甲".repeat(LONG_SENT_HAN + 1) + "。";
    const md = `## 标题 funding\n\n> 【背景】truly 背景\n\n${long}短句。`;
    const is = sentenceIssues(md);
    expect(is).toHaveLength(1);
    expect(is[0].long).toBe(true);
  });
});

describe("C41 · 人名统一(真案例:KCRW 集标题写 Farrow、官方是 Ferro)", () => {
  const official = officialNames({ title_en: "Don't Be Boring: KCRW's Jennifer Ferro on public media", guests: ["Jennifer Ferro"], host: "Jeff Berman" });
  it("★★★ 名相同、姓差 1–2 个字母 → 改成官方拼写", () => {
    const r = fixNameVariants("KCRW 台长 Jennifer Farrow 说……Jennifer Farrow 又说", official);
    expect(r.text).toBe("KCRW 台长 Jennifer Ferro 说……Jennifer Ferro 又说");
    expect(r.replaced).toHaveLength(2);
  });
  it("★★★ 名不同的不碰(Marc / Mark 是两个人);姓差太多的不碰", () => {
    const off = officialNames({ title_en: "Mark Smith on AI" });
    expect(fixNameVariants("Marc Smith 和 Mark Jones", off).text).toBe("Marc Smith 和 Mark Jones");
  });
});

describe("C41 · 改写收不收", () => {
  it("★★★ 收:英文改中文、意思与标记都在", () => {
    expect(acceptRewrite("联邦 funding 被砍了 5% 的预算。", "联邦资金被砍了 5% 的预算。")).toBe(true);
  });
  it("★★★ 不收:丢了双链/时间戳、改了数字、内容缩水、问题没改善", () => {
    expect(acceptRewrite("提到[[KCRW]]的 funding 被砍。", "提到它的资金被砍。")).toBe(false);
    expect(acceptRewrite("联邦 funding 被砍了 5% 的预算。", "联邦资金被砍了 6% 的预算。")).toBe(false);
    expect(acceptRewrite("联邦 funding 被砍了一大截预算,电台很难过。", "资金砍了。")).toBe(false);
    expect(acceptRewrite("联邦 funding 被砍。", "联邦 funding 被砍掉了。")).toBe(false);
  });
});

describe("C41 · polish 整链(假改写器):不许带出新事实层失败", () => {
  const mkWords = (text: string, t0: number) => text.split(" ").map((w, i) => ({ word: w, start: t0 + i, end: t0 + i + 1, speaker: "SPEAKER_00" }));
  function fixture(md: string) {
    const dir = mkdtempSync(join(tmpdir(), "pd-polish-"));
    const t = "federal funding was cut by 5 percent for KCRW";
    writeFileSync(join(dir, "transcript.en.json"), JSON.stringify([{ text: t, start: 0, end: 9, words: mkWords(t, 0) }]));
    writeFileSync(join(dir, "meta.json"), JSON.stringify({ id: "x", title_en: "KCRW's Jennifer Ferro on media", guests: ["Jennifer Ferro"], speaker_map: { SPEAKER_00: "Jennifer Ferro" } }));
    writeFileSync(join(dir, "digest.json"), JSON.stringify({ tldr: "t", title_zh: "Jennifer Farrow 谈公共媒体", digest_md: md, quotes: [] }));
    return dir;
  }
  it("★★★ 正常改写落盘:英文改中文 + 标题人名统一", () => {
    const dir = fixture("联邦 funding 被砍了 5% 的预算。");
    const r = polish(dir, { log: () => {}, pickEmphasis: () => [], edit: (t: string) => t, heads: () => [], ask: () => new Map([[0, "联邦资金被砍了 5% 的预算。"]]) });
    expect(r.changed).toBe(true);
    const d = JSON.parse(readFileSync(join(dir, "digest.json"), "utf8"));
    expect(d.digest_md).toBe("联邦资金被砍了 5% 的预算。");
    expect(d.title_zh).toBe("Jennifer Ferro 谈公共媒体");
  });
  it("★★★ 改写塞进原文没有的英文专名 → 改写就地拒收,正文原样(GLM 008[3])", () => {
    const md = "联邦 funding 被砍了 5% 的预算。";
    const dir = fixture(md);
    polish(dir, { log: () => {}, pickEmphasis: () => [], edit: (t: string) => t, heads: () => [], ask: () => new Map([[0, "联邦资金被 Zorptron 砍了 5% 的预算。"]]) });
    expect(JSON.parse(readFileSync(join(dir, "digest.json"), "utf8")).digest_md).toBe(md);
  });
  it("★★★ 改完复检冒出新事实层失败 → 整批回滚(人名统一也一起撤),稿子原样", () => {
    const md = "联邦 funding 被砍了 5% 的预算。";
    const dir = fixture(md);
    const orig = readFileSync(join(dir, "digest.json"), "utf8");
    let n = 0;
    const gate = () => (n++ === 0 ? { pass: true, failures: [] } : { pass: false, failures: [{ raw: "新冒出来的" }] });
    const r = polish(dir, { log: () => {}, pickEmphasis: () => [], edit: (t: string) => t, heads: () => [], ask: () => new Map([[0, "联邦资金被砍了 5% 的预算。"]]), gate });
    expect(r.rolledBack).toBe(true);
    expect(readFileSync(join(dir, "digest.json"), "utf8")).toBe(orig);
  });
});

describe("C41 · GLM 20261004-008 复核补的三条", () => {
  it("★★★ [1] 短姓不动(Li/Wu、Wang/Yang);两个姓都 ≥5 字母才容 2 处差异", () => {
    expect(fixNameVariants("San Li 说", [["San", "Wu"]]).text).toBe("San Li 说");
    expect(fixNameVariants("Tao Yang 说", [["Tao", "Wang"]]).text).toBe("Tao Yang 说");
    expect(fixNameVariants("Jennifer Farrow 说", [["Jennifer", "Ferro"]]).text).toBe("Jennifer Ferro 说");
  });
  it("★★★ [2] 官方人名只取嘉宾/主持,不从标题抽(防「The Logic」当人名)", () => {
    expect(officialNames({ title_en: "The Logic Show with Jennifer Ferro", guests: [] })).toEqual([]);
    expect(officialNames({ title_en: "x", guests: ["Jennifer Ferro"] })).toEqual([["Jennifer", "Ferro"]]);
  });
  it("★★★ [3] 改写换了英文专名(换人/换公司)→ 不收", () => {
    expect(acceptRewrite("Sam 说 funding 被砍。", "Tom 说资金被砍。")).toBe(false);
  });
});

describe("C41 · 重点标注(用户 2026-10-04:重点结论加粗、重点问题下划线,不用太多)", () => {
  const md = "开场一句话。为什么现成的办法不行?因为太慢。\n\n## 第一节\n资金断了,整个行业怎么办?一批基金会凑出了过桥基金,给电台两年缓冲。\n\n## 本集带走\n- 要点甲";
  it("★★★ 结论加 **、问题加 ==;正文一个字不变(去掉标记后与原文逐字相同)", () => {
    const r = applyEmphasis(md, [{ sec: 0, kind: "问题", text: "为什么现成的办法不行?" }, { sec: 1, kind: "结论", text: "一批基金会凑出了过桥基金" }]);
    expect(r.md).toContain("==为什么现成的办法不行==?");
    expect(r.md).toContain("**一批基金会凑出了过桥基金**");
    expect(r.md.replace(/\*\*|==/g, "")).toBe(md);
  });
  it("★★★ 不合格的片段一律丢:不是原文 / 超 40 字 / 跨句 / 在「本集带走」/ 同节第二个", () => {
    const r = applyEmphasis(md, [
      { sec: 1, kind: "结论", text: "原文里没有这句话" },
      { sec: 1, kind: "结论", text: "甲".repeat(41) },
      { sec: 0, kind: "结论", text: "开场一句话。为什么" },
      { sec: 2, kind: "结论", text: "要点甲" },
      { sec: 1, kind: "问题", text: "整个行业怎么办" },
      { sec: 1, kind: "问题", text: "资金断了" },
    ]);
    expect(r.applied).toEqual([{ sec: 1, kind: "问题", text: "整个行业怎么办" }]);
  });
  it("★★★ 全篇封顶:结论、问题各最多 6 处", () => {
    const many = Array.from({ length: 9 }, (_, i) => `## 节${i}\n这一节的核心判断是第${i}条结论很重要。`).join("\n\n");
    const picks = Array.from({ length: 9 }, (_, i) => ({ sec: i + 1, kind: "结论", text: `这一节的核心判断是第${i}条结论很重要` }));
    expect(EMPH_MAX).toBe(6);
    expect(applyEmphasis(many, picks).applied).toHaveLength(6);
  });
  it("★★ 不碰双链/时间戳/已有标记", () => {
    const m2 = "## 节\n他说[[英伟达]]很强[12:03 黄仁勋],**已有加粗**在这。";
    expect(applyEmphasis(m2, [{ sec: 1, kind: "结论", text: "他说[[英伟达]]很强" }, { sec: 1, kind: "问题", text: "已有加粗" }]).applied).toEqual([]);
  });
  it("★★ 小节切分:开场算第 0 节", () => {
    expect(sections(md).map((s) => s.title)).toEqual(["开场", "第一节", "本集带走"]);
  });
});

describe("C41 · 重点标注:样张实证的两个坑", () => {
  const md = "开场一句。\n\n## 资金\n失去联邦资金反而有一种解脱感,不必再当政治皮球。\n\n## 社区\n重点已经从制作媒体,转变为真正建设社区。";
  it("★★★ 模型摘出全角「,」、原文是半角「,」→ 照样认,标记加在原文上", () => {
    const r = applyEmphasis(md, [{ sec: 2, kind: "结论", text: "重点已经从制作媒体，转变为真正建设社区" }]);
    expect(r.md).toContain("**重点已经从制作媒体,转变为真正建设社区**。");
    expect(r.md.replace(/\*\*/g, "")).toBe(md);
  });
  it("★★★ 模型报错节号 → 全文唯一出现时以真实所在那节为准", () => {
    const r = applyEmphasis(md, [{ sec: 0, kind: "结论", text: "失去联邦资金反而有一种解脱感" }]);
    expect(r.applied).toEqual([{ sec: 1, kind: "结论", text: "失去联邦资金反而有一种解脱感" }]);
  });
});

describe("C41 · 重点标注:解析模型输出(云端实证吐全角冒号 → 0 处命中)", () => {
  it("★★★ 半角「:」与全角「：」都认,片段两头引号去掉,杂行忽略", () => {
    const out = "好的,如下:\n[[1]] 结论:社区比收听率重要\n[[2]] 问题：她会接吗？\n[[3]] 结论：「宁少勿多」\n乱七八糟";
    expect(parseEmphasis(out)).toEqual([
      { sec: 1, kind: "结论", text: "社区比收听率重要" },
      { sec: 2, kind: "问题", text: "她会接吗？" },
      { sec: 3, kind: "结论", text: "宁少勿多" },
    ]);
  });
});

describe("C41 · 正文里浓缩模型自加的加粗先清掉(样张实证)", () => {
  it("★★★ 正文加粗去掉、「本集带走」列表加粗保留;只删标记不改字", () => {
    const md = "开场**自己加的**一句。\n\n## 一节\n这里也有**一处**。\n\n## 本集带走\n- **要点**:说明";
    const out = stripBodyBold(md);
    expect(out).toBe("开场自己加的一句。\n\n## 一节\n这里也有一处。\n\n## 本集带走\n- **要点**:说明");
  });
});

describe("C41 · 重点标注:引号不成对的片段不标(样张实证)", () => {
  it("★★ 只框住半边引号 → 丢;引号成对 → 收", () => {
    const md = "## 节\n他说「不去操纵这些评估」是他用铁腕管的事情之一,「宁少勿多」很重要。";
    expect(applyEmphasis(md, [{ sec: 1, kind: "结论", text: "不去操纵这些评估」是他用铁腕管的事情之一" }]).applied).toEqual([]);
    expect(applyEmphasis(md, [{ sec: 1, kind: "结论", text: "「宁少勿多」很重要" }]).applied).toHaveLength(1);
  });
});

describe("C41 · 引号只给原话(用户 2026-10-04:「」用得太多看着怪)", () => {
  it("★★★ 包着短词/概念的引号去掉;整句原话(带句读)的引号留;只删符号不改字", () => {
    const md = "Jev 优化的是「每美元智能」,他说「拒绝显然是一个类型错误」。还有『过桥基金』。";
    const out = stripShortQuotes(md);
    expect(out).toBe("Jev 优化的是每美元智能,他说「拒绝显然是一个类型错误」。还有过桥基金。");
    expect(out.replace(/[「」『』]/g, "")).toBe(md.replace(/[「」『』]/g, ""));
  });
});

describe("C41 · 编辑通读(用户 2026-10-04:整体写得晦涩,比喻看不懂)", () => {
  const FILL = "公共媒体这些年面对的处境越来越难,受众在流失,资金也在减少,但她依然相信内容本身的力量。";
  const orig = FILL + "她说「我们尽量偏向巧克力蛋糕那边。」KCRW 只占 5% 的预算[12:03 Jennifer Ferro],[[NPR]]也一样。";
  it("★★★ 收:比喻讲清、加〔解释〕,原话/时间戳/双链/数字/专名都在", () => {
    const patch = FILL + "公共媒体常被当成有营养但没人爱吃的西兰花。所以她说「我们尽量偏向巧克力蛋糕那边。」也就是做让人想看的内容。KCRW〔洛杉矶的一家公共电台〕只占 5% 的预算[12:03 Jennifer Ferro],[[NPR]]也一样。";
    expect(acceptEdit(orig, patch)).toBe(true);
  });
  it("★★★ 不收:改了原话 / 丢了时间戳 / 动了数字 / 新加了专名 / 篇幅暴涨", () => {
    expect(acceptEdit(orig, orig.replace("巧克力蛋糕那边。", "巧克力那边。"))).toBe(false);
    expect(acceptEdit(orig, orig.replace("[12:03 Jennifer Ferro]", ""))).toBe(false); // 2 个标注只剩 1 个 < 80%
    expect(acceptEdit(orig, orig.replace("[12:03 Jennifer Ferro]", "[12:09 Jennifer Ferro]"))).toBe(false); // 新标注不许
    expect(acceptEdit(orig, orig.replace("5%", "6%"))).toBe(false); // 新加数字 6
    expect(acceptEdit(orig, orig.replace("5% 的", "很少的"))).toBe(true); // 删个别数字可以(不是编造)
    expect(acceptEdit(orig, orig + "Netflix 也这样。")).toBe(false);
    expect(acceptEdit(orig, orig + "补".repeat(200))).toBe(false); // 上限 ×1.8+80
  });
  it("★★★ 逐节改写:某节复检冒新事实层失败 → 只退回那一节,其它节保留", () => {
    const md = "开场一句话讲的是公共媒体的生存问题和她的看法。\n\n## 一节\n第一节原文在讲资金被砍以后电台怎么活下去的问题。\n\n## 二节\n第二节原文在讲社区比收听率更重要的道理和例子。";
    let cur = md;
    const gate = () => ({ failures: cur.includes("坏改写") ? [{ raw: "新失败" }] : [] });
    const edit = (t: string) => (t.startsWith("第一节") ? t + "坏改写" : t + "也就是说更好懂了");
    const r = plainEdit(md, { dir: "x", gate, edit, write: (m: string) => (cur = m) });
    expect(r.edited).toBe(2);
    expect(r.md).not.toContain("坏改写");
    expect(r.md).toContain("第二节原文在讲社区比收听率更重要的道理和例子。也就是说更好懂了");
    expect(r.md).toContain("开场一句话讲的是公共媒体的生存问题和她的看法。也就是说更好懂了");
  });
});

describe("C41 · 编辑通读归正与放宽(样张实证的假违规)", () => {
  const orig = "公共媒体这些年面对的处境越来越难,受众在流失。她说「智能会更像一个数据库,而不是一个同事。」OpenAI 也这么看。";
  it("★★★ 原话里被插了〔解释〕/全角半角标点不同 → 换回原话原样", () => {
    const patch = "公共媒体很难。她说「智能会更像一个数据库〔存数据、按要求取用的系统〕，而不是一个同事。」OpenAI 也这么看,受众在流失,处境越来越难。";
    expect(normalizeEdit(orig, patch)).toContain("「智能会更像一个数据库,而不是一个同事。」");
    expect(acceptEdit(orig, patch)).toBe(true);
  });
  it("★★★ 原稿已有的词被加了 [[链接]] → 去掉链接符号,不算新加标注", () => {
    expect(normalizeEdit(orig, orig.replace("OpenAI 也", "[[OpenAI]] 也"))).toBe(orig);
  });
  it("★★ 全篇别处/节目信息里有的名字、AI 这类常见缩写不算新加专名;真新的照拦", () => {
    const p2 = orig + "Diogo 和 AI 都同意。";
    expect(editVerdict(orig, p2, new Set(["Diogo"]))).toBe("ok");
    expect(editVerdict(orig, orig + "Zorptron 不同意。", new Set(["Diogo"]))).toMatch(/新加了专名:Zorptron/);
  });
  it("★★ 真改了原话 → 不归正,守门退回", () => {
    expect(acceptEdit(orig, orig.replace("而不是一个同事", "而不是同事"))).toBe(false);
  });
});

describe("C41 · 补小标题(用户 2026-10-05:「小标题太少了,阅读没有目标感」)", () => {
  const P = (n: number, tag: string) => `${tag}`.padEnd(4, "甲") + "公共媒体的处境越来越难受众在流失资金也在减少".repeat(n) + "。";
  const body = [P(5, "一段"), P(5, "二段"), P(5, "三段"), P(5, "四段")].join("\n\n"); // 每段约 115 汉字,合计 >450
  const md = `开场钩子讲这一集聊什么。\n\n## 资金被砍以后\n\n${body}\n\n## 本集带走\n\n- 一条`;
  it("★★★ 长节在模型挑的段前插 ## 小标题,正文一字不动", () => {
    const r = addHeadings(md, { propose: () => [{ k: 2, title: "资金断了反而是解脱?" }] });
    expect(r.added).toBe(1);
    expect(r.md).toContain(`${P(5, "二段")}\n\n## 资金断了反而是解脱?\n\n${P(5, "三段")}`);
    expect(r.md.replace("## 资金断了反而是解脱?\n\n", "")).toBe(md);
  });
  it("★★★ 不收:第 0 段前切 / 切出来太碎 / 标题带新数字或新专名 / 标题太长", () => {
    expect(addHeadings(md, { propose: () => [{ k: 0, title: "开头" }] }).added).toBe(0);
    expect(addHeadings(md, { propose: () => [{ k: 3, title: "第四段" }, { k: 1, title: "第二段" }, { k: 2, title: "第三段" }] }).added).toBe(3); // 每段约 114 字 ≥100,都收
    const md2 = md.replace(P(5, "二段"), "短短一句。\n\n" + P(5, "二段"));
    expect(addHeadings(md2, { propose: () => [{ k: 1, title: "短句前" }, { k: 2, title: "短句后" }] }).added).toBe(1); // 第二刀切出的小节只有 4 个字,太碎不收
    expect(headingOk("砍了 30% 预算", body)).toBe(false);
    expect(headingOk("Netflix 也这样", body)).toBe(false);
    expect(headingOk("这是一个非常非常非常非常非常长的小标题啊", body)).toBe(false);
    expect(headingOk("「原话」做标题", body)).toBe(false);
  });
  it("★★ 短节不切、本集带走不切;模型调不通就跳过", () => {
    const short = "开场。\n\n## 一节\n\n第一节只有一句话。\n\n## 本集带走\n\n- 一条";
    expect(addHeadings(short, { propose: () => [{ k: 1, title: "不该出现" }] }).added).toBe(0);
    expect(addHeadings(md, { propose: () => { throw new Error("x"); } }).added).toBe(0);
    expect(visibleHan(body)).toBeGreaterThan(HEAD_SPLIT_HAN);
  });
  it("★★ 解析模型输出:半角/全角竖线、冒号、[3] 写法、标题前带 ## 都认", () => {
    expect(parseHeadings("2|为什么不拒绝用户\n[3]｜数据比算力重要\n4：## 三个原语")).toEqual([
      { k: 2, title: "为什么不拒绝用户" }, { k: 3, title: "数据比算力重要" }, { k: 4, title: "三个原语" }]);
  });
});

describe("C41 · 编辑通读:模型抄回输入标签(样张实证 KCRW 冒出「# 这一节」小标题)", () => {
  const orig = "公共媒体这些年面对的处境越来越难,受众在流失,资金也在减少。";
  it("★★★ 「【这一节】」/「# 这一节」行删掉;改写里新加别的标题行 → 退回", () => {
    expect(normalizeEdit(orig, "【这一节】\n" + orig)).toBe(orig);
    expect(normalizeEdit(orig, "# 这一节\n\n" + orig)).toBe("\n" + orig);
    expect(editVerdict(orig, "## 新标题\n" + orig)).toMatch(/新加了标题行/);
  });
});
