// C12 · 自动品味判官 · 纯逻辑真业务测试(只调被测函数,不重抄逻辑,可变异)
// 守的四件事(Gherkin C12):
//   ① 判定解析 fail-safe——**任何解析不出的输入都不许变成 publish**(Scenario 1/6)
//   ② 提示词点对点——一次只含一集,不给别的候选(防相对比较偏见,承 judge-quotes 的设计)
//   ③ 简介抽取——description / itunes:summary 取长者,剥 HTML 与实体
//   ④ 账本幂等——同 id 不重复堆积(承 appendSkip 的 GLM #5 教训)
import { describe, it, expect } from "vitest";
import { pickDescription, parseVerdict, buildJudgePrompt, appendPending, JUDGE_MAX_DESC } from "../scripts/judge-taste.mjs";
import { parseFeed } from "../scripts/run-pipeline.mjs";

const TASTE_DOC = "# 内容品味档案\n## ✅ 要\nAI 编程 / agent 实操\n## ❌ 不要\n大模型发布 / 跑分评测";

describe("pickDescription · 简介抽取", () => {
  it("description 与 itunes:summary 取更长的那个", () => {
    expect(pickDescription({ description: "短", itunesSummary: "长很多的一段简介文字" })).toBe("长很多的一段简介文字");
    expect(pickDescription({ description: "长很多的一段简介文字", itunesSummary: "短" })).toBe("长很多的一段简介文字");
  });

  it("剥掉 HTML 标签与实体,压平空白(真 feed 里简介是 <p> 包的 HTML)", () => {
    const raw = "<p>Ranjan Roy is back for our <b>weekly&nbsp;discussion</b> of\n\n  the latest tech news.</p>";
    expect(pickDescription({ description: raw, itunesSummary: "" })).toBe("Ranjan Roy is back for our weekly discussion of the latest tech news.");
  });

  it("两个都空 → 空串(不编造,由调用方决定怎么办)", () => {
    expect(pickDescription({ description: "", itunesSummary: "" })).toBe("");
    expect(pickDescription({})).toBe("");
  });

  it("超长简介截断并显式标注(控提示词成本,但不静默丢内容)", () => {
    const long = "a".repeat(JUDGE_MAX_DESC + 500);
    const out = pickDescription({ description: long, itunesSummary: "" });
    expect(out.length).toBeLessThanOrEqual(JUDGE_MAX_DESC + 20);
    expect(out).toMatch(/…\(已截断\)$/);
  });
});

describe("parseVerdict · 判定解析(fail-safe:解析不出绝不放行)", () => {
  it("正常 JSON 三档照收", () => {
    expect(parseVerdict('{"verdict":"publish","reason":"AI 编程实操","matched":"✅ AI 编程"}')).toEqual({
      verdict: "publish", reason: "AI 编程实操", matched: "✅ AI 编程",
    });
    expect(parseVerdict('{"verdict":"skip","reason":"跑分评测"}').verdict).toBe("skip");
    expect(parseVerdict('{"verdict":"undecided","reason":"深浅拿不准"}').verdict).toBe("undecided");
  });

  it("GLM 爱套的代码围栏 / 前后废话要能扒掉", () => {
    expect(parseVerdict('```json\n{"verdict":"skip","reason":"新闻回顾体"}\n```').verdict).toBe("skip");
    expect(parseVerdict('好的,我的判断是:\n{"verdict":"skip","reason":"新闻回顾体"}\n希望有帮助').verdict).toBe("skip");
  });

  it("大小写与空白容错", () => {
    expect(parseVerdict('{"verdict":"  SKIP  ","reason":"x"}').verdict).toBe("skip");
    expect(parseVerdict('{"verdict":"Publish","reason":"x"}').verdict).toBe("publish");
  });

  it("🔒 非法判定值 → undecided,绝不当 publish(Scenario 1)", () => {
    for (const bad of ['{"verdict":"yes","reason":"x"}', '{"verdict":"发布","reason":"x"}', '{"verdict":"","reason":"x"}', '{"reason":"忘了给 verdict"}']) {
      const r = parseVerdict(bad);
      expect(r.verdict).toBe("undecided");
      expect(r.reason).toMatch(/非法|缺/);
    }
  });

  it("🔒 完全解析不了 / 空 / 非字符串 → undecided(Scenario 6:判官坏了不许静默放行)", () => {
    for (const bad of ["这不是 JSON", "", null, undefined, 42, "{坏掉的 JSON"]) {
      expect(parseVerdict(bad as any).verdict).toBe("undecided");
    }
  });

  it("🔒 任何输入都不可能解析出 publish 以外的第四档", () => {
    const fuzz = ['{"verdict":"skip"}', "{}", "null", '{"verdict":null}', '{"verdict":["publish"]}'];
    for (const f of fuzz) expect(["publish", "skip", "undecided"]).toContain(parseVerdict(f).verdict);
  });
});

describe("buildJudgePrompt · 点对点喂,一次只一集", () => {
  const item = { title: "How I run coding agents", description: "Alessio explains his agent setup." };

  it("品味档案全文 + 本集标题 + 本集简介都在", () => {
    const p = buildJudgePrompt(TASTE_DOC, item);
    expect(p).toContain("AI 编程 / agent 实操");
    expect(p).toContain("大模型发布 / 跑分评测");
    expect(p).toContain("How I run coding agents");
    expect(p).toContain("Alessio explains his agent setup.");
  });

  it("🔒 提示词里只出现一集(不给别的候选做相对比较,承 judge-quotes 防偏见设计)", () => {
    const p = buildJudgePrompt(TASTE_DOC, item);
    expect(p.match(/【本集标题】/g)?.length).toBe(1);
    expect(p.match(/【本集简介】/g)?.length).toBe(1);
  });

  it("简介为空也要能出提示词,并显式告诉判官「没有简介」(免得它拿空白当线索瞎判)", () => {
    const p = buildJudgePrompt(TASTE_DOC, { title: "No desc episode", description: "" });
    expect(p).toContain("No desc episode");
    expect(p).toMatch(/无简介|没有简介/);
  });
});

describe("appendPending · 待裁账本幂等", () => {
  it("同 id 重复登记只留最新一条(防账本膨胀,承 appendSkip 的 GLM #5)", () => {
    const state: any = {};
    appendPending(state, { id: "a", title: "T", reason: "第一次" });
    appendPending(state, { id: "a", title: "T", reason: "第二次" });
    appendPending(state, { id: "b", title: "U", reason: "别的集" });
    expect(state.pending_review).toHaveLength(2);
    expect(state.pending_review.find((x: any) => x.id === "a").reason).toBe("第二次");
  });

  it("state 上原有字段不被踩(cutoffs/skipped 照旧)", () => {
    const state: any = { cutoffs: { lennys: "2026-01-01" }, skipped: [{ id: "z" }] };
    appendPending(state, { id: "a", title: "T", reason: "r" });
    expect(state.cutoffs.lennys).toBe("2026-01-01");
    expect(state.skipped).toHaveLength(1);
  });
});

describe("parseFeed · 判官要的简介字段(C12 新增,不能破坏既有字段)", () => {
  const FEED = `<?xml version="1.0"?><rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"><channel>
<item>
  <title><![CDATA[Weekly news roundup]]></title>
  <link>https://x/p/weekly</link>
  <pubDate>Fri, 24 Jul 2026 21:33:00 GMT</pubDate>
  <description><![CDATA[<p>Ranjan Roy is back for our weekly discussion of the latest tech news.</p>]]></description>
  <enclosure url="https://x/a.mp3" length="1" type="audio/mpeg"/>
</item>
<item>
  <title><![CDATA[Real interview]]></title>
  <link>https://x/p/interview</link>
  <pubDate>Wed, 22 Jul 2026 10:00:00 GMT</pubDate>
  <itunes:summary>A long form conversation with a founder about building agents.</itunes:summary>
  <enclosure url="https://x/b.mp3" length="1" type="audio/mpeg"/>
</item>
</channel></rss>`;

  it("description 与 itunes:summary 都被带出来", () => {
    const items = parseFeed(FEED);
    expect(items[0].description).toContain("weekly discussion of the latest tech news");
    expect(items[1].itunesSummary).toContain("long form conversation");
  });

  it("既有字段不受影响(title/link/pubDateISO/hasAudio)", () => {
    const items = parseFeed(FEED);
    expect(items[0].title).toBe("Weekly news roundup");
    expect(items[0].link).toBe("https://x/p/weekly");
    expect(items[0].hasAudio).toBe(true);
    expect(items[0].pubDateISO).toBe("2026-07-24T21:33:00.000Z");
  });
});
