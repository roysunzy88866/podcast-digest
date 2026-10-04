// C41 · 精华可读性 v2 机器修(ADR 0027,2026-10-04 用户「需求通过」):人名统一 / 清普通英文 / 拆长句,不许带出新事实层失败。
import { describe, it, expect } from "vitest";
import { mkdtempSync, writeFileSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { strayWords, sentenceIssues, fixNameVariants, officialNames, acceptRewrite, polish, LONG_SENT_HAN } from "../scripts/polish-zh.mjs";

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
    const r = polish(dir, { log: () => {}, ask: () => new Map([[0, "联邦资金被砍了 5% 的预算。"]]) });
    expect(r.changed).toBe(true);
    const d = JSON.parse(readFileSync(join(dir, "digest.json"), "utf8"));
    expect(d.digest_md).toBe("联邦资金被砍了 5% 的预算。");
    expect(d.title_zh).toBe("Jennifer Ferro 谈公共媒体");
  });
  it("★★★ 改写塞进原文没有的英文专名 → 改写就地拒收,正文原样(GLM 008[3])", () => {
    const md = "联邦 funding 被砍了 5% 的预算。";
    const dir = fixture(md);
    polish(dir, { log: () => {}, ask: () => new Map([[0, "联邦资金被 Zorptron 砍了 5% 的预算。"]]) });
    expect(JSON.parse(readFileSync(join(dir, "digest.json"), "utf8")).digest_md).toBe(md);
  });
  it("★★★ 改完复检冒出新事实层失败 → 整批回滚(人名统一也一起撤),稿子原样", () => {
    const md = "联邦 funding 被砍了 5% 的预算。";
    const dir = fixture(md);
    const orig = readFileSync(join(dir, "digest.json"), "utf8");
    let n = 0;
    const gate = () => (n++ === 0 ? { pass: true, failures: [] } : { pass: false, failures: [{ raw: "新冒出来的" }] });
    const r = polish(dir, { log: () => {}, ask: () => new Map([[0, "联邦资金被砍了 5% 的预算。"]]), gate });
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
