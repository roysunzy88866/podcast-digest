// C41 · 精华可读性 v2 机器修(ADR 0027,2026-10-04 用户「需求通过」):人名统一 / 清普通英文 / 拆长句,不许带出新事实层失败。
import { describe, it, expect } from "vitest";
import { mkdtempSync, writeFileSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { strayWords, sentenceIssues, fixNameVariants, officialNames, acceptRewrite, polish, LONG_SENT_HAN, applyEmphasis, sections, EMPH_MAX, parseEmphasis, stripBodyBold } from "../scripts/polish-zh.mjs";

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
    const r = polish(dir, { log: () => {}, pickEmphasis: () => [], ask: () => new Map([[0, "联邦资金被砍了 5% 的预算。"]]) });
    expect(r.changed).toBe(true);
    const d = JSON.parse(readFileSync(join(dir, "digest.json"), "utf8"));
    expect(d.digest_md).toBe("联邦资金被砍了 5% 的预算。");
    expect(d.title_zh).toBe("Jennifer Ferro 谈公共媒体");
  });
  it("★★★ 改写塞进原文没有的英文专名 → 改写就地拒收,正文原样(GLM 008[3])", () => {
    const md = "联邦 funding 被砍了 5% 的预算。";
    const dir = fixture(md);
    polish(dir, { log: () => {}, pickEmphasis: () => [], ask: () => new Map([[0, "联邦资金被 Zorptron 砍了 5% 的预算。"]]) });
    expect(JSON.parse(readFileSync(join(dir, "digest.json"), "utf8")).digest_md).toBe(md);
  });
  it("★★★ 改完复检冒出新事实层失败 → 整批回滚(人名统一也一起撤),稿子原样", () => {
    const md = "联邦 funding 被砍了 5% 的预算。";
    const dir = fixture(md);
    const orig = readFileSync(join(dir, "digest.json"), "utf8");
    let n = 0;
    const gate = () => (n++ === 0 ? { pass: true, failures: [] } : { pass: false, failures: [{ raw: "新冒出来的" }] });
    const r = polish(dir, { log: () => {}, pickEmphasis: () => [], ask: () => new Map([[0, "联邦资金被砍了 5% 的预算。"]]), gate });
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
