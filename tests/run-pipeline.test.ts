// C7b/C8 编排器 · 纯逻辑真业务测试(只调被测函数、不重抄逻辑、可变异)
// 守:RSS 解析 / 过滤 ainews+无音频 / 派 id 按源(C8 去 latent-space 硬编码)/ cutoff 去重「只向前看」(drift #22)。
import { describe, it, expect } from "vitest";
import { parseFeed, isInterview, deriveId, selectNew, selectBackfill, SOURCES, needsReseed } from "../scripts/run-pipeline.mjs";

// 镜像 Substack 播客 feed 形状:CDATA 标题、enclosure 音频、ainews 每日快讯混入。
// (URL 用 /p/slug 是 Substack 通例;Lenny's / Latent 同构)
const FEED = `<?xml version="1.0"?><rss><channel>
<item>
  <title><![CDATA[Netflix CPTO on AI — Elizabeth Stone]]></title>
  <link>https://www.lennysnewsletter.com/p/netflix-cpto-on-ai-and-the-future</link>
  <pubDate>Thu, 16 Jul 2026 13:30:44 GMT</pubDate>
  <enclosure url="https://x/a.mp3" length="1" type="audio/mpeg"/>
</item>
<item>
  <title><![CDATA[AINews daily]]></title>
  <link>https://www.latent.space/p/ainews-kimi-k3-28t-a50b-the-largest</link>
  <pubDate>Fri, 17 Jul 2026 01:46:36 GMT</pubDate>
  <enclosure url="https://x/b.mp3" length="1" type="audio/mpeg"/>
</item>
<item>
  <title><![CDATA[How I run coding agents — Alessio]]></title>
  <link>https://www.lennysnewsletter.com/p/how-i-run-coding-agents</link>
  <pubDate>Wed, 08 Jul 2026 10:00:00 GMT</pubDate>
  <enclosure url="https://x/c.mp3" length="1" type="audio/mpeg"/>
</item>
<item>
  <title><![CDATA[Text-only recap no audio]]></title>
  <link>https://www.lennysnewsletter.com/p/text-recap</link>
  <pubDate>Tue, 14 Jul 2026 23:21:21 GMT</pubDate>
</item>
</channel></rss>`;

// C8 首个绿源 = Lenny's(测试用轻量 stub,只需 key)
const LENNYS = { key: "lennys", feedUrl: "https://api.substack.com/feed/podcast/10845.rss" };

describe("parseFeed", () => {
  const items = parseFeed(FEED);
  it("解析出全部 item 与字段", () => {
    expect(items).toHaveLength(4);
    expect(items[0].title).toContain("Netflix CPTO");
    expect(items[0].link).toBe("https://www.lennysnewsletter.com/p/netflix-cpto-on-ai-and-the-future");
    expect(items[0].pubDateISO).toBe("2026-07-16T13:30:44.000Z");
    expect(items[0].hasAudio).toBe(true);
  });
  it("无 enclosure 的 item hasAudio=false", () => {
    expect(items[3].hasAudio).toBe(false);
  });
});

describe("isInterview", () => {
  const items = parseFeed(FEED);
  it("真访谈(有音频、非 ainews)= true", () => {
    expect(isInterview(items[0])).toBe(true);
  });
  it("排掉 ainews 每日快讯(即便有音频)", () => {
    expect(isInterview(items[1])).toBe(false);
  });
  it("排掉无音频的文本帖", () => {
    expect(isInterview(items[3])).toBe(false);
  });
});

describe("C8 · SOURCES 源清单(品味校准后只留绿源)", () => {
  it("含 Lenny's 且已去掉 Latent Space", () => {
    const keys = SOURCES.map((s) => s.key);
    expect(keys).toContain("lennys");
    expect(keys).not.toContain("latent-space");
  });
  it("每个源都带 key + feedUrl", () => {
    for (const s of SOURCES) {
      expect(s.key).toBeTruthy();
      expect(s.feedUrl).toMatch(/^https?:\/\//);
    }
  });
  it("source.key 是简单 slug(GLM 001[2]:防 key 含 - / . 撞乱 id 结构)", () => {
    for (const s of SOURCES) expect(s.key).toMatch(/^[a-z0-9]+$/);
  });
});

describe("needsReseed · 换源防呆(GLM 20260720-001[1])", () => {
  it("cutoff 属于当前源 → 不用重设", () => {
    expect(needsReseed({ sincePubDate: "2026-07-16T00:00:00.000Z", cutoffSource: "lennys" }, "lennys")).toBe(false);
  });
  it("cutoff 属于别的源(换源了)→ 逼重设", () => {
    expect(needsReseed({ sincePubDate: "2026-07-16T00:00:00.000Z", cutoffSource: "latent-space" }, "lennys")).toBe(true);
  });
  it("旧版 state 无 cutoffSource 但有 cutoff → 也逼重设(保守)", () => {
    expect(needsReseed({ sincePubDate: "2026-07-16T00:00:00.000Z", cutoffSource: "" }, "lennys")).toBe(true);
  });
  it("还没基线(无 cutoff)→ 不拦(交给 --seed 流程)", () => {
    expect(needsReseed({ sincePubDate: "", cutoffSource: "" }, "lennys")).toBe(false);
  });
});

describe("deriveId · 按源前缀(C8 去 latent-space 硬编码)", () => {
  const items = parseFeed(FEED);
  it("前缀取 source.key,不再写死 latent-space", () => {
    expect(deriveId(items[0], LENNYS)).toBe("2026-07-16-lennys-netflix-cpto-on-ai-and-the-future");
    expect(deriveId(items[2], LENNYS)).toBe("2026-07-08-lennys-how-i-run-coding-agents");
  });
  it("换个源 key,前缀跟着变(证明非硬编码)", () => {
    expect(deriveId(items[2], { key: "a16z" })).toBe("2026-07-08-a16z-how-i-run-coding-agents");
  });
  it("缺 source 直接报错,不静默派出 undefined 前缀", () => {
    expect(() => deriveId(items[0])).toThrow();
  });
});

describe("selectNew · 只向前看 + 去重(drift #22),按源派 id", () => {
  const items = parseFeed(FEED);
  it("无基线一律返回空(拒绝无边界跑 backlog)", () => {
    expect(selectNew(items, { sinceISO: "", existingIds: [], source: LENNYS })).toEqual([]);
  });
  it("只取严格晚于 cutoff 的访谈,升序", () => {
    // cutoff = coding-agents(07-08)之后 → 只剩 Netflix(07-16),ainews 被 isInterview 排掉
    const picks = selectNew(items, { sinceISO: "2026-07-08T10:00:00.000Z", existingIds: [], source: LENNYS });
    expect(picks.map((p) => deriveId(p, LENNYS))).toEqual(["2026-07-16-lennys-netflix-cpto-on-ai-and-the-future"]);
  });
  it("已处理过的集(existingIds)被去重掉", () => {
    const picks = selectNew(items, {
      sinceISO: "2026-07-01T00:00:00.000Z",
      existingIds: ["2026-07-16-lennys-netflix-cpto-on-ai-and-the-future"],
      source: LENNYS,
    });
    // Netflix 已处理 → 排掉;coding-agents(07-08)晚于 cutoff 且未处理 → 入选
    expect(picks.map((p) => deriveId(p, LENNYS))).toEqual(["2026-07-08-lennys-how-i-run-coding-agents"]);
  });
  it("cutoff 晚于所有集 → 空(无新集)", () => {
    expect(selectNew(items, { sinceISO: "2026-08-01T00:00:00.000Z", existingIds: [], source: LENNYS })).toEqual([]);
  });
});

describe("selectBackfill · 一次性回填最近 N 集(C8 评估批,override 只向前看)", () => {
  const items = parseFeed(FEED);
  it("取最近 N 集访谈(排 ainews/无音频),按旧→新给处理顺序", () => {
    // 访谈只有 Netflix(07-16)、coding-agents(07-08);n=5 全取,升序
    const picks = selectBackfill(items, { n: 5, existingIds: [], source: LENNYS });
    expect(picks.map((p) => deriveId(p, LENNYS))).toEqual([
      "2026-07-08-lennys-how-i-run-coding-agents",
      "2026-07-16-lennys-netflix-cpto-on-ai-and-the-future",
    ]);
  });
  it("n 小于可选数 → 只取最新的 n 集", () => {
    const picks = selectBackfill(items, { n: 1, existingIds: [], source: LENNYS });
    expect(picks.map((p) => deriveId(p, LENNYS))).toEqual(["2026-07-16-lennys-netflix-cpto-on-ai-and-the-future"]);
  });
  it("已处理过的集被去重(不重复烧钱)", () => {
    const picks = selectBackfill(items, {
      n: 5,
      existingIds: ["2026-07-16-lennys-netflix-cpto-on-ai-and-the-future"],
      source: LENNYS,
    });
    expect(picks.map((p) => deriveId(p, LENNYS))).toEqual(["2026-07-08-lennys-how-i-run-coding-agents"]);
  });
});
