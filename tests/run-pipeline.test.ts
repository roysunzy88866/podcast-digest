// C7b/C8 编排器 · 纯逻辑真业务测试(只调被测函数、不重抄逻辑、可变异)
// 守:RSS 解析 / 过滤 ainews+无音频 / 派 id 按源(C8 去 latent-space 硬编码)/ cutoff 去重「只向前看」(drift #22)。
import { describe, it, expect } from "vitest";
import { parseFeed, isInterview, deriveId, selectNew, selectBackfill, SOURCES, needsReseed, appendSkip } from "../scripts/run-pipeline.mjs";

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

// C9 · Simplecast(a16z)feed 形状:link 是 /episodes/<slug>(无 /p/,D44⑤)、enclosure url 带 &amp; 转义、itunes:duration。
const SIMPLECAST_FEED = `<?xml version="1.0"?><rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"><channel>
<item>
  <guid isPermaLink="false">492cb9ec</guid>
  <title>Building the Physical AI Stack: a16z&apos;s View | Travis Kalanick on TBPN</title>
  <pubDate>Thu, 23 Jul 2026 10:00:00 +0000</pubDate>
  <link>https://a16z.simplecast.com/episodes/building-the-physical-ai-stack-travis-kalanick-on-tbpn-pij0lvRd</link>
  <enclosure length="22157799" type="audio/mpeg" url="https://x.simplecastaudio.com/e/audio/128/default.mp3?aid=rss_feed&amp;feed=JGE3yC0V"/>
  <itunes:duration>00:23:04</itunes:duration>
</item>
</channel></rss>`;
const A16Z = { key: "a16z", name: "The a16z Show" };

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

// C9 D44⑤:Simplecast(a16z)URL 无 /p/ → slug 抠取按源适配;enclosure 直链 + 时长供 ASR 路线用
describe("parseFeed · Simplecast 形状(C9)", () => {
  const items = parseFeed(SIMPLECAST_FEED);
  it("★ enclosureUrl 抓出且 &amp; 反转义成真 URL(ASR 下载要直链)", () => {
    expect(items[0].enclosureUrl).toBe("https://x.simplecastaudio.com/e/audio/128/default.mp3?aid=rss_feed&feed=JGE3yC0V");
  });
  it("★ itunes:duration(HH:MM:SS)→ durationSec(选 whisperX 模型档要)", () => {
    expect(items[0].durationSec).toBe(23 * 60 + 4);
  });
  it("★ 非 CDATA 标题的 XML 实体反转义(Simplecast 通例;&apos; 不许原样上卡片)", () => {
    expect(items[0].title).toBe("Building the Physical AI Stack: a16z's View | Travis Kalanick on TBPN");
  });
  it("无 itunes:duration 的 item(Substack 通例)durationSec=0,不编造", () => {
    expect(parseFeed(FEED)[0].durationSec).toBe(0);
  });
});

describe("isInterview / deriveId · Simplecast URL 按源适配(C9 D44⑤)", () => {
  const items = parseFeed(SIMPLECAST_FEED);
  it("★ /episodes/<slug> 的集是访谈(不再因无 /p/ 被 slug 空串误判)", () => {
    expect(isInterview(items[0])).toBe(true);
  });
  it("★ deriveId 从 /episodes/ 抠 slug,不退化成 'episode' 撞 id", () => {
    // slug 小写化 + 截 40 字符 + 去尾部连字符(现有规则不变)
    expect(deriveId(items[0], A16Z)).toBe("2026-07-23-a16z-building-the-physical-ai-stack-travis-ka");
  });
  it("两集不同 slug 派不同 id(D44⑤ 的病:全撞 'episode')", () => {
    const other = { ...items[0], link: "https://a16z.simplecast.com/episodes/sriram-krishnan-on-open-source-1yfA3ln5" };
    expect(deriveId(other, A16Z)).not.toBe(deriveId(items[0], A16Z));
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
  it("★ C9:含 a16z(Simplecast feed + whisperX ASR 路线标记)", () => {
    const a16z = SOURCES.find((s) => s.key === "a16z");
    expect(a16z).toBeTruthy();
    expect(a16z.feedUrl).toBe("https://feeds.simplecast.com/JGE3yC0V");
    expect(a16z.asr).toBe("whisperx"); // processEpisode 据此直走 ASR(a16z 实测无官方稿,不空跑 fetch-source)
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

// C9 D44①:state 从全局单 cutoff 重构为按源 cutoffs;needsReseed 语义收敛为「该源无基线即逼 seed」
// (旧「换源防呆」GLM 20260720-001[1] 被它覆盖:别的源的 cutoff 不再可能被当成自己的)。
describe("needsReseed · 按源基线防呆(C9 重构,覆盖旧换源防呆)", () => {
  it("该源有 cutoff → 不用重设", () => {
    expect(needsReseed({ cutoffs: { lennys: "2026-07-16T00:00:00.000Z" } }, "lennys")).toBe(false);
  });
  it("只有别的源的 cutoff → 该源仍逼 seed(旧换源场景,不串号)", () => {
    expect(needsReseed({ cutoffs: { "latent-space": "2026-07-16T00:00:00.000Z" } }, "lennys")).toBe(true);
  });
  it("空 state → 逼 seed(无基线拒跑全 backlog,drift #22 并入此判)", () => {
    expect(needsReseed({ cutoffs: {} }, "lennys")).toBe(true);
    expect(needsReseed({}, "lennys")).toBe(true);
  });
});

describe("migrateState · 旧单 cutoff state 无损升级(C9 D44①)", () => {
  it("★ 旧格式 {sincePubDate, cutoffSource} → cutoffs 按源,skipped 保留", async () => {
    const { migrateState } = await import("../scripts/run-pipeline.mjs");
    const old = { sincePubDate: "2026-07-22T12:03:38.000Z", cutoffSource: "lennys", skipped: [{ id: "x" }] };
    const s = migrateState(old);
    expect(s.cutoffs).toEqual({ lennys: "2026-07-22T12:03:38.000Z" });
    expect(s.skipped).toEqual([{ id: "x" }]);
    expect(s.sincePubDate).toBeUndefined(); // 旧字段不残留(防双真相源)
    expect(s.cutoffSource).toBeUndefined();
  });
  it("★ 已是 v2 → 原样通过;空/损坏 → 安全默认", async () => {
    const { migrateState } = await import("../scripts/run-pipeline.mjs");
    const v2 = { cutoffs: { lennys: "t1", a16z: "t2" }, skipped: [] };
    expect(migrateState(v2)).toEqual(v2);
    expect(migrateState({})).toEqual({ cutoffs: {}, skipped: [] });
    expect(migrateState(null)).toEqual({ cutoffs: {}, skipped: [] });
  });
  it("旧格式但 cutoffSource 空(更旧版本)→ cutoff 丢弃不猜源(保守,逼 seed)", async () => {
    const { migrateState } = await import("../scripts/run-pipeline.mjs");
    expect(migrateState({ sincePubDate: "t", cutoffSource: "", skipped: [] }).cutoffs).toEqual({});
  });
});

describe("applySeed · seed 只补缺的源,不动已有基线(C9:重复 seed 不许把未处理集跳过去)", () => {
  it("★ 缺 → 设新基线并返回 true;已有 → 不动返回 false", async () => {
    const { applySeed } = await import("../scripts/run-pipeline.mjs");
    const state = { cutoffs: { lennys: "old" }, skipped: [] };
    expect(applySeed(state, "a16z", "2026-07-24T00:00:00.000Z")).toBe(true);
    expect(state.cutoffs.a16z).toBe("2026-07-24T00:00:00.000Z");
    expect(applySeed(state, "lennys", "2026-07-24T00:00:00.000Z")).toBe(false);
    expect(state.cutoffs.lennys).toBe("old"); // 已有基线绝不被 seed 顶掉
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

// bug c:隔离账本中途丢账修复的单元(账本去重 helper;每集即刻落盘由调用方保证,见 run-pipeline main 内 writeState)
describe("appendSkip · 隔离账本去重", () => {
  it("同 id 重录只留最新一条,不裂成两条(防账本膨胀 + 重扣钱)", () => {
    const st = { skipped: [] };
    appendSkip(st, { id: "e1", reason: "旧原因", title: "T1" });
    appendSkip(st, { id: "e2", reason: "别的" });
    appendSkip(st, { id: "e1", reason: "新原因" }); // 同 id → 覆盖不追加
    expect(st.skipped).toHaveLength(2);
    expect(st.skipped.find((s) => s.id === "e1").reason).toBe("新原因");
  });
  it("state.skipped 缺省(undefined)也不崩", () => {
    const st = {};
    appendSkip(st, { id: "e1", reason: "x" });
    expect(st.skipped).toHaveLength(1);
  });
});

describe("sourceMetaFields · 新集 meta 补齐(C5.1 Scenario 3:title_en/podcast/date 随取源写入)", () => {
  it("★ 从 RSS item + 源清单派生显示字段", async () => {
    const { sourceMetaFields } = await import("../scripts/run-pipeline.mjs");
    const f = sourceMetaFields(
      { title: "Netflix CPTO on AI | Elizabeth Stone", pubDateISO: "2026-07-19T12:31:21.000Z" },
      { key: "lennys", name: "Lenny's Podcast" },
    );
    expect(f).toEqual({ title_en: "Netflix CPTO on AI | Elizabeth Stone", podcast: "Lenny's Podcast", date: "2026-07-19" });
  });
  it("★ SOURCES 每个源都带显示名(卡片来源栏要用)", async () => {
    const { SOURCES } = await import("../scripts/run-pipeline.mjs");
    for (const s of SOURCES) expect(typeof s.name).toBe("string");
  });
});
