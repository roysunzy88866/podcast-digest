// C7b/C8 编排器 · 纯逻辑真业务测试(只调被测函数、不重抄逻辑、可变异)
// 守:RSS 解析 / 过滤 ainews+无音频 / 派 id 按源(C8 去 latent-space 硬编码)/ cutoff 去重「只向前看」(drift #22)。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { parseFeed, isInterview, deriveId, selectNew, selectBackfill, selectBackfillRecent, selectBackfillGlobal, dedupeCandidatesByTitle, backfillCandidates, backfillStockWarning, countsTowardDailyTarget, episodeDate, hasTimeBudget, estimateEpisodeMin, JOB_BUDGET_MIN, TRANSCRIBE_RATIO, POST_CHAIN_MIN, UNKNOWN_DURATION_MIN, bjDay, BACKFILL_SINCE, DAILY_TARGET, SOURCES, needsReseed, appendSkip, advanceCutoffGuarded, cacheBustFeedUrl, BACKFILL_FEED_KEYS } from "../scripts/run-pipeline.mjs";

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

// C10 Scenario 2:Megaphone 类源(Training Data/Big Technology)item link 是主页,无集页 URL(D44⑤ 同款)
describe("deriveId · 无 URL slug 时标题回退(C10 Megaphone 源)", () => {
  const TD = { key: "trainingdata", name: "Training Data" };
  const base = { pubDateISO: "2026-07-21T10:00:00.000Z", hasAudio: true, link: "https://www.sequoiacap.com/" };
  it("★ link 是主页 → 用标题派生 slug(小写+非字母数字转连字符+截40+去尾),不再撞 'episode'", () => {
    const id = deriveId({ ...base, title: "Factory's Matan Grinberg: The Coming 'Dark Factory'" }, TD);
    expect(id).toMatch(/^2026-07-21-trainingdata-factory/);
    expect(id).not.toContain("episode");
  });
  it("★ 同日两集不同标题 → 不同 id(id 撞车就是 D44⑤ 的病)", () => {
    const a = deriveId({ ...base, title: "Why Hardware-Software Co-Design Is AI's Real 100x" }, TD);
    const b = deriveId({ ...base, title: "LIVE: Jensen Huang" }, TD);
    expect(a).not.toBe(b);
  });
  it("URL 里有 slug 时仍优先 URL(现有源行为不变)", () => {
    const id = deriveId({ ...base, link: "https://x.com/p/real-slug", title: "Some Title" }, TD);
    expect(id).toBe("2026-07-21-trainingdata-real-slug");
  });
  it("标题也空 → 'episode' 兜底(不炸)", () => {
    expect(deriveId({ ...base, title: "" }, TD)).toBe("2026-07-21-trainingdata-episode");
  });
  it("★ 全非 ASCII 标题(slug 被吃成空)→ 标题哈希兜底,同日不同题仍不同 id(GLM 011[2])", () => {
    const a = deriveId({ ...base, title: "对话格雷厄姆" }, TD);
    const b = deriveId({ ...base, title: "与黄仁勋对谈" }, TD);
    expect(a).not.toBe(b);
    expect(a).toMatch(/^2026-07-21-trainingdata-[0-9a-f]{8}$/);
    expect(deriveId({ ...base, title: "对话格雷厄姆" }, TD)).toBe(a); // 确定性:同题同 id(重跑去重靠它)
  });
});

describe("C10 · SOURCES 第一梯队六源(2026-07-24 用户拍板)", () => {
  it("★ 各源路线标记对:pg 走官方稿(无 asr),whisperx 源标对;aia16z 已停用", () => {
    const by = Object.fromEntries(SOURCES.map((s) => [s.key, s]));
    expect(by.pg?.asr).toBeUndefined(); // Substack 官方稿,同 lennys
    for (const k of ["yc", "mad", "trainingdata", "bigtech"]) {
      expect(by[k]?.asr).toBe("whisperx");
    }
    // aia16z 2026-08-17 停用(drift #59):与 a16z 推同一档播客,实测两组集撞车
    expect(by.aia16z).toBeUndefined();
    expect(by.pg?.feedUrl).toContain("news.aakashg.com"); // www feed:api.substack 域 403 封 runner(drift #28),不用
  });
  it("★ Megaphone 源新集 item 无 <link>(实探)→ 有标题+音频即算访谈,不整源漏抓", () => {
    expect(isInterview({ title: "LIVE: Jensen Huang", link: "", pubDateISO: "2026-07-21T09:00:00.000Z", hasAudio: true })).toBe(true);
    expect(isInterview({ title: "", link: "", pubDateISO: "2026-07-21T09:00:00.000Z", hasAudio: true })).toBe(false); // 双缺仍拒
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
  it("★ 2026-08-09 扩 3 源(AI & I / No Priors / The Peel):齐、feedUrl 对、均 whisperX(无平台官方稿)", () => {
    const by = Object.fromEntries(SOURCES.map((s) => [s.key, s]));
    expect(by.aiandi?.feedUrl).toBe("https://feeds.transistor.fm/how-do-you-use-chatgpt");
    expect(by.nopriors?.feedUrl).toBe("https://feeds.megaphone.fm/nopriors");
    expect(by.thepeel?.feedUrl).toBe("https://anchor.fm/s/e231a4ec/podcast/rss");
    for (const k of ["aiandi", "nopriors", "thepeel"]) expect(by[k]?.asr).toBe("whisperx");
  });
  it("★ 2026-08-16 先接两源(Beyond Coding / Founders):齐、feedUrl 对、均 whisperX、非 Substack", () => {
    const by = Object.fromEntries(SOURCES.map((s) => [s.key, s]));
    expect(by.beyondcoding?.feedUrl).toBe("https://anchor.fm/s/5bb57eac/podcast/rss");
    expect(by.founders?.feedUrl).toBe("https://feeds.megaphone.fm/DSLLC6297708582");
    for (const k of ["beyondcoding", "founders"]) {
      expect(by[k]?.asr).toBe("whisperx"); // 无平台官方稿
      expect(by[k]?.feedUrl).not.toContain("substack"); // 非 Substack,不撞 drift #55 陈旧坑
    }
  });
  it("★ 2026-08-16 逐个确认再接两源(Dwarkesh / Diary of a CEO,drift #58)", () => {
    const by = Object.fromEntries(SOURCES.map((s) => [s.key, s]));
    // Dwarkesh:Substack 官方稿(集页 84 处 transcription)→ 无 asr、走官方稿(集长 2-4h,whisperX 会拖垮 runner)
    expect(by.dwarkesh?.feedUrl).toBe("https://www.dwarkesh.com/feed");
    expect(by.dwarkesh?.asr).toBeUndefined();
    // doac:Flightcast 非 Substack、无官方稿 → whisperX
    expect(by.doac?.feedUrl).toContain("flightcast.com");
    expect(by.doac?.asr).toBe("whisperx");
  });
  it("★ 补历史池(drift #58):含题材贴的深 feed 源;排除 founders/doac/pg/lennys(避免偏题集凑 5/日或 Substack 浅 feed)", () => {
    expect(BACKFILL_FEED_KEYS).toContain("a16z");
    expect(BACKFILL_FEED_KEYS).toContain("beyondcoding");
    // 排除项:泛/偏题/Substack 浅
    for (const k of ["founders", "doac", "pg", "lennys", "dwarkesh"]) expect(BACKFILL_FEED_KEYS).not.toContain(k);
    // 池内的 key 都是真实存在的源
    const keys = new Set(SOURCES.map((s) => s.key));
    for (const k of BACKFILL_FEED_KEYS) expect(keys.has(k)).toBe(true);
  });
  it("★ 2026-08-16 用户逐个确认再接六源(drift #58):齐、feedUrl 对、均 whisperX", () => {
    const by = Object.fromEntries(SOURCES.map((s) => [s.key, s]));
    const expected = {
      deepmind: "feeds.simplecast.com/JT6pbPkg",
      twentyvc: "rss.libsyn.com/shows/61840",
      cogrev: "feeds.megaphone.fm/RINTP3108857801",
      knowledge: "theknowledgeproject.libsyn.com",
      pragmatic: "newsletter.pragmaticengineer.com",
      workos: "crossing-the-enterprise-chasm",
    };
    for (const [k, frag] of Object.entries(expected)) {
      expect(by[k]?.feedUrl).toContain(frag);
      expect(by[k]?.asr).toBe("whisperx");
    }
    // 进补历史池:deepmind/cogrev/twentyvc/workos;不进:knowledge(商业泛)/pragmatic(Substack浅)
    for (const k of ["deepmind", "cogrev", "twentyvc", "workos"]) expect(BACKFILL_FEED_KEYS).toContain(k);
    for (const k of ["knowledge", "pragmatic"]) expect(BACKFILL_FEED_KEYS).not.toContain(k);
  });
  it("每个源都带 key + 取料口(feed 源必有 feedUrl;C16 种子驱动源必有 seedDir,二者互斥)", () => {
    for (const s of SOURCES) {
      expect(s.key).toBeTruthy();
      if (s.seedDir) expect(s.feedUrl).toBeUndefined(); // 种子驱动(talks):无 feed/cutoff 概念
      else expect(s.feedUrl).toMatch(/^https?:\/\//);
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

describe("advanceCutoffGuarded · cutoff 只进不退(drift #54:lennys 被 backfill 退回冻死漏集)", () => {
  it("★★★ advanced 早于现 cutoff → 保留现值(拦下回退)", () => {
    // 实锤场景:cutoff 已到 08-10,一次 backfill 读 archive 算出 07-19 → 不许退回
    expect(advanceCutoffGuarded("2026-08-10T12:01:44.000Z", "2026-07-19T12:31:21.000Z")).toBe("2026-08-10T12:01:44.000Z");
  });
  it("★★★ advanced 晚于现 cutoff → 正常前进", () => {
    expect(advanceCutoffGuarded("2026-08-10T12:01:44.000Z", "2026-08-15T17:01:13.000Z")).toBe("2026-08-15T17:01:13.000Z");
  });
  it("★ 首次(无 prev)→ 直接用 advanced", () => {
    expect(advanceCutoffGuarded(undefined, "2026-08-11T00:00:00.000Z")).toBe("2026-08-11T00:00:00.000Z");
  });
  it("★ advanced 缺失 → 不动现值(收尾理论上有值,防御)", () => {
    expect(advanceCutoffGuarded("2026-08-10T12:01:44.000Z", undefined)).toBe("2026-08-10T12:01:44.000Z");
  });
  it("★ 相等 → 保持不变", () => {
    expect(advanceCutoffGuarded("2026-08-10T12:01:44.000Z", "2026-08-10T12:01:44.000Z")).toBe("2026-08-10T12:01:44.000Z");
  });
});

describe("cacheBustFeedUrl · 加一次性暗号绕开 CDN 陈旧 feed(drift #55:runner 抓到停在旧日期的副本漏集断更)", () => {
  it("★ 裸 URL → 附上 _cb 参数", () => {
    const out = cacheBustFeedUrl("https://www.lennysnewsletter.com/feed", 123);
    expect(out).toBe("https://www.lennysnewsletter.com/feed?_cb=123");
  });
  it("★ 已有查询参数 → 保留原参数、只追加 _cb", () => {
    const out = cacheBustFeedUrl("https://feeds.simplecast.com/x?foo=bar", 999);
    expect(out).toContain("foo=bar");
    expect(out).toContain("_cb=999");
  });
  it("★ 不同 nonce → 不同 URL(保证每轮 CDN miss、回源取新)", () => {
    const a = cacheBustFeedUrl("https://www.lennysnewsletter.com/feed", 1);
    const b = cacheBustFeedUrl("https://www.lennysnewsletter.com/feed", 2);
    expect(a).not.toBe(b);
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

describe("selectBackfillRecent · C31 补历史只补 2026、最新优先(替代原「越挖越老」策略)", () => {
  // 归档 fixture:三条 2026 访谈 + 一条无音频(isInterview 排掉)+ 一条 2025 老集(年份下限排掉)
  const ARCH = [
    { title: "Growth loops that scale", link: "https://www.lennysnewsletter.com/p/growth-loops", pubDateISO: "2026-06-01T10:00:00.000Z", hasAudio: true },
    { title: "Building AI agents in production", link: "https://www.lennysnewsletter.com/p/ai-agents-prod", pubDateISO: "2026-05-15T10:00:00.000Z", hasAudio: true },
    { title: "The craft of design systems", link: "https://www.lennysnewsletter.com/p/design-systems", pubDateISO: "2026-04-10T10:00:00.000Z", hasAudio: true },
    { title: "No audio teaser", link: "https://www.lennysnewsletter.com/p/teaser", pubDateISO: "2026-05-20T10:00:00.000Z", hasAudio: false },
    { title: "Old but gold 2025", link: "https://www.lennysnewsletter.com/p/old-2025", pubDateISO: "2025-12-18T10:00:00.000Z", hasAudio: true },
  ];
  const SINCE = BACKFILL_SINCE;

  it("★★★ 只补 2026 及以后,最新优先(2025 老集一条都不许进——用户 2026-08-19 明令)", () => {
    const picks = selectBackfillRecent(ARCH, { n: 5, sinceISO: SINCE, existingIds: [], source: LENNYS });
    expect(picks.map((p) => p.pubDateISO)).toEqual([
      "2026-06-01T10:00:00.000Z",
      "2026-05-15T10:00:00.000Z",
      "2026-04-10T10:00:00.000Z",
    ]);
    expect(picks.some((p) => p.pubDateISO < "2026")).toBe(false);
  });

  it("★★★ 年份下限就是 2026-01-01(改它=改用户拍板的口径)", () => {
    expect(BACKFILL_SINCE.slice(0, 10)).toBe("2026-01-01");
  });

  it("★★ 候选池不随「库内最旧」后退(旧策略的病根:补一集边界退一格,必然越挖越老)", () => {
    // 库里已有 06-01(最旧=06-01)。旧策略只会挑比 06-01 更旧的;新策略照样把 05-15 当最新候选挑出,
    // 且永远不会因为补过老集就把年份下限往前挪。
    const seenId = deriveId(ARCH[0], LENNYS);
    const picks = selectBackfillRecent(ARCH, { n: 1, sinceISO: SINCE, existingIds: [seenId], source: LENNYS });
    expect(picks.map((p) => p.pubDateISO)).toEqual(["2026-05-15T10:00:00.000Z"]);
  });

  it("n 限制:只取最新的 n 集", () => {
    const picks = selectBackfillRecent(ARCH, { n: 1, sinceISO: SINCE, existingIds: [], source: LENNYS });
    expect(picks.map((p) => p.pubDateISO)).toEqual(["2026-06-01T10:00:00.000Z"]);
  });

  it("★ ID 去重:已在库/已隔离的集不重复补", () => {
    const seenId = deriveId(ARCH[0], LENNYS);
    const picks = selectBackfillRecent(ARCH, { n: 5, sinceISO: SINCE, existingIds: [seenId], source: LENNYS });
    expect(picks.map((p) => p.pubDateISO)).toEqual([
      "2026-05-15T10:00:00.000Z",
      "2026-04-10T10:00:00.000Z",
    ]);
  });

  it("★ 跨源标题查重:疑似跨源重复直接跳过(不补,ADR 0021 从简)", () => {
    const picks = selectBackfillRecent(ARCH, {
      n: 5, sinceISO: SINCE, existingIds: [], source: LENNYS,
      libraryTitles: ["Building AI agents in production"],
    });
    expect(picks.map((p) => p.pubDateISO)).toEqual([
      "2026-06-01T10:00:00.000Z",
      "2026-04-10T10:00:00.000Z",
    ]);
  });

  it("backfillCandidates 给的是全池(存量盘点用),不截断", () => {
    const pool = backfillCandidates(ARCH, { sinceISO: SINCE, existingIds: [], source: LENNYS });
    expect(pool).toHaveLength(3);
  });

  it("DAILY_TARGET 是 8(软目标;5→8 = 2026-08-18 用户拍板·standard-change,C28 便宜通道后产能腾出)", () => {
    expect(DAILY_TARGET).toBe(8);
  });
});

describe("countsTowardDailyTarget · C31b 只算 2026 内容(老集不许占配额)", () => {
  const TODAY = "2026-08-19";
  it("★★★ 今天入库的 2026 集算(这才是用户要的产出)", () => {
    expect(countsTowardDailyTarget("2026-08-17-lennys-x", { added: TODAY }, TODAY)).toBe(true);
  });
  it("★★★ 今天入库的 2025 老集**不算** —— 实证:9 条老集把 10/8 顶满,新规则第一天一条没补", () => {
    expect(countsTowardDailyTarget("2025-06-08-lennys-inside-mercado-libre", { added: TODAY }, TODAY)).toBe(false);
    expect(countsTowardDailyTarget("2025-12-31-lennys-x", { added: TODAY }, TODAY)).toBe(false);
  });
  it("★★ 年份边界与 BACKFILL_SINCE 同源(2026-01-01 起算)", () => {
    expect(countsTowardDailyTarget("2026-01-01-a16z-x", { added: TODAY }, TODAY)).toBe(true);
    expect(countsTowardDailyTarget("2025-12-31-a16z-x", { added: TODAY }, TODAY)).toBe(false);
  });
  it("★ 不是今天入库的一概不算(哪年的都一样)", () => {
    expect(countsTowardDailyTarget("2026-08-17-lennys-x", { added: "2026-08-18" }, TODAY)).toBe(false);
  });
  it("★★★ 非日期开头的手工 id 回落 meta.date,不靠字典序巧合(GLM 034[1]:库里真有 2026-singju-…)", () => {
    // 「2026-singj」>= 「2026-01-01」恰好为真,纯属 's'>'0';换成字母开头就会误判成算入
    expect(episodeDate("2026-singju-openclaw-80apps", { date: "2026-07-14" })).toBe("2026-07-14");
    expect(countsTowardDailyTarget("2026-singju-openclaw-80apps", { added: TODAY, date: "2026-07-14" }, TODAY)).toBe(true);
    expect(countsTowardDailyTarget("2025-singju-x", { added: TODAY, date: "2025-07-14" }, TODAY)).toBe(false);
  });
  it("★★★ 判不出日期 → 不算入(fail-closed;原实现对字母开头 id 会误判成算入)", () => {
    expect(episodeDate("abc-singju-x", {})).toBe(null);
    expect(countsTowardDailyTarget("abc-singju-x", { added: TODAY }, TODAY)).toBe(false);
    expect(countsTowardDailyTarget("", { added: TODAY }, TODAY)).toBe(false);
  });
  it("★ id 前缀是合法日期时优先用它(与 meta.date 冲突也认 id,与库内目录名一致)", () => {
    expect(episodeDate("2026-08-17-lennys-x", { date: "2020-01-01" })).toBe("2026-08-17");
  });
  it("meta 缺 added / 空 meta 不炸也不算", () => {
    expect(countsTowardDailyTarget("2026-08-17-lennys-x", {}, TODAY)).toBe(false);
    expect(countsTowardDailyTarget("2026-08-17-lennys-x", null, TODAY)).toBe(false);
  });
});

describe("estimateEpisodeMin / hasTimeBudget · C32 按音频时长估时(固定估值害我被杀过一次)", () => {
  it("★★★ 复现 2026-08-21 血案:已跑 194 分、要开 85 分音频的集 —— 旧的固定 100 分估值放行,新逻辑必须拒绝", () => {
    expect(194 + 100 <= 300).toBe(true);                                    // 旧逻辑「合规」地放行了
    expect(hasTimeBudget(194, estimateEpisodeMin(85 * 60, true))).toBe(false); // 新逻辑拒绝(实跑要 150+ 分,会撞 5.5h 上限)
  });
  it("★★★ feed 不给时长 → 按最坏算,绝不乐观(pragmatic 那集就是「0 分」,实跑 185 分转写)", () => {
    expect(estimateEpisodeMin(0, true)).toBe(UNKNOWN_DURATION_MIN);
    expect(estimateEpisodeMin(undefined, true)).toBe(UNKNOWN_DURATION_MIN);
    expect(estimateEpisodeMin(0, true)).toBeGreaterThanOrEqual(185); // 至少覆盖实测那次
  });
  it("★★★ 估时随音频时长增长(这正是固定值缺的那条)", () => {
    const short = estimateEpisodeMin(30 * 60, true);
    const long = estimateEpisodeMin(120 * 60, true);
    expect(long).toBeGreaterThan(short * 2);
  });
  it("★★ 转写倍率不低于实测(185 分 ÷ ≈100 分音频);低估=又被杀", () => {
    expect(TRANSCRIBE_RATIO).toBeGreaterThanOrEqual(1.8);
    expect(estimateEpisodeMin(100 * 60, true)).toBeGreaterThanOrEqual(185);
  });
  it("★★ 有现成稿的集只算后链(C28 便宜通道不该被估时误伤成「来不及」)", () => {
    expect(estimateEpisodeMin(120 * 60, false)).toBe(POST_CHAIN_MIN);
    expect(hasTimeBudget(250, estimateEpisodeMin(120 * 60, false))).toBe(true); // 已跑 250 分仍能补一集便宜的
  });
  it("★★ 预算留在平台上限内(workflow timeout 330;预算 300 + 回仓收尾)", () => {
    expect(JOB_BUDGET_MIN).toBeLessThanOrEqual(330);
    expect(360 - JOB_BUDGET_MIN).toBeGreaterThanOrEqual(30);
  });
  it("★★★ 三处耗时循环都装了守卫,且都传了 item/source/id(id 用来查本地转写缓存)", () => {
    const src = readFileSync(new URL("../scripts/run-pipeline.mjs", import.meta.url), "utf8");
    expect(src).toContain('outOfTimeBudget("新集", item, source, deriveId(item, source))');
    expect(src).toContain('outOfTimeBudget("补历史", item, source, id)');
    expect(src).toContain('outOfTimeBudget("补活", item, source, id)');
  });
  it("★★★ 本地已有转写稿就按「无需转写」估 —— 补活的集全都有稿,不看这条会把补活整个拒掉", () => {
    const src = readFileSync(new URL("../scripts/run-pipeline.mjs", import.meta.url), "utf8");
    const fn = src.slice(src.indexOf("function outOfTimeBudget("), src.indexOf("\n}", src.indexOf("function outOfTimeBudget(")));
    expect(fn).toContain('transcript.en.json');
    expect(fn).toContain("const needsAsr = !cached");
  });
  it("★★★ 超时停手时,没做的集必须登记 retry —— 否则 cutoff 推过它们、永久抓不到", () => {
    const src = readFileSync(new URL("../scripts/run-pipeline.mjs", import.meta.url), "utf8");
    const start = src.indexOf('if (outOfTimeBudget("新集"');
    const guard = src.slice(start, src.indexOf("const id = deriveId(item, source);", start));
    expect(guard).toContain("picks.slice(idx)");
    expect(guard).toContain("retry: true");
  });
});

describe("bjDay · C31 一律按北京时间切日(读者在北京)", () => {
  const at = (iso: string) => bjDay(Date.parse(iso));
  it("★★★ UTC 16:00 起就算北京的第二天(旧的 UTC 口径要等到 UTC 00:00 = 北京 08:00)", () => {
    expect(at("2026-08-19T15:59:59Z")).toBe("2026-08-19");
    expect(at("2026-08-19T16:00:00Z")).toBe("2026-08-20"); // 北京 00:00 换日
  });
  it("★★★ 用户清晨看站那一刻,系统的「今天」与他一致", () => {
    expect(at("2026-08-19T00:30:00Z")).toBe("2026-08-19"); // 北京 08:30
    expect(at("2026-08-18T23:00:00Z")).toBe("2026-08-19"); // 北京 07:00 —— 旧口径这里还算 08-18
  });
  it("与 workers/pv-counter 的 bjDay 同口径(UTC+8 后取日期段)", () => {
    expect(bjDay(Date.parse("2026-01-01T16:00:00Z"))).toBe("2026-01-02");
  });
});

describe("backfillStockWarning · C31 存量见底要响亮说", () => {
  it("★★★ 池子低于 3 日量 → 告警,且点明剩多少、够几天", () => {
    const w = backfillStockWarning(20, 8);
    expect(w).toContain("::warning::");
    expect(w).toContain("20 集");
    expect(w).toContain("2 天");
  });
  it("★★ 告警要求用户拍板,绝不自称会自动改口径(悄悄补更早年份=用户明令禁止)", () => {
    expect(backfillStockWarning(5, 8)).toContain("用户拍板");
  });
  it("存量充足时不吵(475 集那种)", () => {
    expect(backfillStockWarning(475, 8)).toBe(null);
    expect(backfillStockWarning(25, 8)).toBe(null); // 恰好 >3 日量
  });
  it("边界:恰好 3 日量要告警(临界不许静默)", () => {
    expect(backfillStockWarning(24, 8)).not.toBe(null);
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

// ══ C14 · 半成品自动补活(纯逻辑层;fs 扫描在编排器,这里守选集/计数/换算规则)══
import { selectRevive, noteReviveFail, clearRevive, sourceForId, reviveItemFromMeta, REVIVE_CAP } from "../scripts/run-pipeline.mjs";

describe("C14 selectRevive:谁有补活资格", () => {
  const base = { published: new Set(["done-ep"]), skippedIds: new Set(["bad-ep"]), failCounts: {} };

  it("★ 有 digest 无集页 → 入选;已发布 → 不选;隔离账本里的 → 绝不选", () => {
    const r = selectRevive(["stray-ep", "done-ep", "bad-ep"], base);
    expect(r.revive).toEqual(["stray-ep"]);
  });

  it("★ 连败满 3 次 → 停手进 parked,不再入选", () => {
    const r = selectRevive(["stray-ep"], { ...base, failCounts: { "stray-ep": REVIVE_CAP } });
    expect(r.revive).toEqual([]);
    expect(r.parked).toEqual(["stray-ep"]);
  });

  it("★ 败 2 次还有资格(上限是 3 不是 2)", () => {
    const r = selectRevive(["stray-ep"], { ...base, failCounts: { "stray-ep": REVIVE_CAP - 1 } });
    expect(r.revive).toEqual(["stray-ep"]);
  });
});

describe("C14 计数:败++、成功清零", () => {
  it("★ noteReviveFail 累加并落进 state;clearRevive 清干净", () => {
    const state: any = { cutoffs: {}, skipped: [] };
    expect(noteReviveFail(state, "ep")).toBe(1);
    expect(noteReviveFail(state, "ep")).toBe(2);
    expect(state.revive.ep).toBe(2);
    clearRevive(state, "ep");
    expect(state.revive?.ep).toBeUndefined();
  });
});

// ── 内容审查拦截([1301])= 确定性终态,非转瞬(2026-08-08 用户「放弃敏感集」)──
import { isContentBlocked, noteBlockFail, clearBlocked, BLOCK_CAP, run } from "../scripts/run-pipeline.mjs";

describe("isContentBlocked · 只认 GLM [1301] 内容审查,别的失败不误判", () => {
  const real =
    'glm-ask exit 1: [HTTP 400] {"type":"error","error":{"code":"1301","message":"[1301][系统检测到输入或生成内容可能包含不安全或敏感内容，请您避免输入易产生敏感内容的提示语，感谢您的配合。][20260808223434ae43735b62a042f9]"}}';
  // run() 实际抛出的形状:通用「步骤失败」壳 + 子进程 stderr 尾部(上一版漏了后半截 → 新路径不触发,云端实证)
  const wrapped = `步骤失败(exit 1): node scripts/translate.mjs data/episodes/xxx\n${real}`;
  it("★ 真 [1301] 错误串 → true(带方括号 或 带引号 或 中文原话任一命中)", () => {
    expect(isContentBlocked(real)).toBe(true);
    expect(isContentBlocked('code":"1301"')).toBe(true);
    expect(isContentBlocked("系统检测到输入或生成内容可能包含不安全或敏感内容")).toBe(true);
  });
  it("★ run() 包裹后的完整 message(壳+stderr 尾)仍命中 —— 正是上一版漏掉、致新路径不触发的那层", () => {
    expect(isContentBlocked(wrapped)).toBe(true);
  });
  it("★ 转瞬/别的失败 → false(网络抖动、非零退出、空)", () => {
    expect(isContentBlocked("glm-ask exit 1: fetch failed")).toBe(false);
    expect(isContentBlocked("步骤失败(exit 1): node scripts/condense.mjs")).toBe(false);
    expect(isContentBlocked(undefined)).toBe(false);
  });
  it("★ 词界防误配:1301 只出现在 hex request_id 里(前后是十六进制字符)→ 不算内容审查", () => {
    expect(isContentBlocked('request_id":"2026080816421301abcdef"')).toBe(false);
  });
});

describe("内容审查连拦计数:BLOCK_CAP 次宽限后 park;成功清零", () => {
  it("★ noteBlockFail 累加落 state.blocked;到 BLOCK_CAP 触发 park;clearBlocked 清干净", () => {
    const state: any = { cutoffs: {}, skipped: [] };
    expect(BLOCK_CAP).toBe(2);
    expect(noteBlockFail(state, "ep")).toBe(1); // 第 1 次:宽限,retry
    expect(noteBlockFail(state, "ep")).toBe(2); // 第 2 次:达 BLOCK_CAP → 终态 park
    expect(state.blocked.ep).toBe(BLOCK_CAP);
    clearBlocked(state, "ep");
    expect(state.blocked?.ep).toBeUndefined();
  });
});

describe("run() 端到端:子进程 stderr 尾部并进抛错 message(2026-08-08 云端实证补漏)", () => {
  it("★ 子进程写 [1301] 到 stderr 后非零退出 → run 抛错含 [1301] → isContentBlocked 认得出", () => {
    const child =
      "process.stderr.write('glm-ask exit 1: [HTTP 400] [1301] 系统检测到输入或生成内容可能包含不安全或敏感内容'); process.exit(1);";
    let msg = "";
    try {
      run("node", ["-e", child]);
    } catch (e: any) {
      msg = e.message;
    }
    expect(msg).toContain("步骤失败(exit 1)"); // 通用壳还在
    expect(isContentBlocked(msg)).toBe(true); // ← 上一版这里为 false(stderr 丢了),新路径才不触发
  });
  it("★ 子进程普通失败(stderr 无 [1301])→ isContentBlocked 为 false,不误判成内容审查", () => {
    let msg = "";
    try {
      run("node", ["-e", "process.stderr.write('fetch failed: ECONNRESET'); process.exit(1);"]);
    } catch (e: any) {
      msg = e.message;
    }
    expect(msg).toContain("步骤失败(exit 1)");
    expect(isContentBlocked(msg)).toBe(false);
  });
});

describe("C14 sourceForId / reviveItemFromMeta:从存量重建处理入参", () => {
  it("★ id 里的源段落能对回 SOURCES(yc/pg/lennys);对不上返回 null 不猜", () => {
    expect(sourceForId("2026-07-27-yc-jensen-huang-the-mindset")?.key).toBe("yc");
    expect(sourceForId("2026-07-28-pg-how-to-build-your-first-eval")?.key).toBe("pg");
    expect(sourceForId("2026-07-26-lennys-anthropics-first")?.key).toBe("lennys");
    expect(sourceForId("2026-07-01-nosuch-source-ep")).toBeNull();
  });

  it("★ 伪 item 从 meta 逐字段来,不编造(date → pubDateISO 保持同一天)", () => {
    const it_ = reviveItemFromMeta({ title_en: "T", date: "2026-07-27", duration_sec: 1930 });
    expect(it_.title).toBe("T");
    expect(it_.pubDateISO.slice(0, 10)).toBe("2026-07-27");
    expect(it_.durationSec).toBe(1930);
    expect(it_.link).toBe("");
  });
});

// ══ C14 修:补活不许被「新集处理成功」绑架 ══
// 2026-07-29 实账(run 30446551961):跑新集时撞 GLM `fetch failed` → 编排器整体退出 →
// **补活环节根本没轮到**。而网络抖动正是产生掉队集的原因本身 —— 安全网被它要防的故障关在门外。
import { runAllSources } from "../scripts/run-pipeline.mjs";

describe("C14 runAllSources:单源失败不吞掉其它源与补活,但整轮仍响亮失败", () => {
  const okSrc = { key: "ok" };
  const badSrc = { key: "bad" };

  it("★ 一个源抛错 → 其余源照跑,错误被收集(不冒泡打断)", async () => {
    const ran: string[] = [];
    const r = await runAllSources([badSrc, okSrc], async (s) => {
      ran.push(s.key);
      if (s.key === "bad") throw new Error("fetch failed");
      return { clean: 2, skipped: 1 };
    });
    expect(ran).toEqual(["bad", "ok"]);
    expect(r.clean).toBe(2);
    expect(r.skipped).toBe(1);
    expect(r.errors.map((e: any) => e.key)).toEqual(["bad"]);
  });

  it("★ 全成功时 errors 为空(不误报)", async () => {
    const r = await runAllSources([okSrc], async () => ({ clean: 1, skipped: 0 }));
    expect(r.errors).toEqual([]);
  });

  it("★ 错误对象带得动源名与原因(日志要点得出名字,不是笼统一句失败)", async () => {
    const r = await runAllSources([badSrc], async () => {
      throw new Error("GLM 抽实体连试 4 次");
    });
    expect(r.errors[0].key).toBe("bad");
    expect(String(r.errors[0].message)).toContain("GLM");
  });
});

describe("C14 runAllSources:失败原因永远看得见(GLM 20260730-001[1] 坐实项)", () => {
  it("★ 抛的不是 Error(字符串/null)也要有可读原因,不许打出 undefined", async () => {
    const r1 = await runAllSources([{ key: "a" }], async () => { throw "GLM down"; });
    expect(r1.errors[0].message).toBe("GLM down");
    const r2 = await runAllSources([{ key: "b" }], async () => { throw null; });
    expect(r2.errors[0].message).toBe("null");
  });
});

describe("drift #61 · 官方稿失败的兜底必须是「能真跑」的那条", () => {
  const src = readFileSync(new URL("../scripts/run-pipeline.mjs", import.meta.url), "utf8");
  // 血案:兜底原先指向 fetch-source-asr(AssemblyAI,需 ASSEMBLYAI_API_KEY),云端从未配过该 secret
  // → run 31985507669 实证两集全挂在「⛔ 缺 ASSEMBLYAI_API_KEY」。兜底存在但跑不了 = 等于没有。
  // 不用「从标记起截 N 个字符」的窗口断言 —— 中间插几行注释就会假红(项目里 GLM 030[1] 踩过同一个坑,
  // GLM 006[2] 再次点名)。C30 后三个兜底点收进统一入口 runAsr:先断言兜底分支第一个调用就是 runAsr,
  // 再对 runAsr 函数体做原来那组「调的是哪个脚本/参数是真值」断言 —— 守的不变量一条没少。
  const afterMark = src.slice(src.indexOf("官方稿取源失败"));
  // 函数体截到顶格 "\n}",不用固定字符窗口(GLM 030[1]/020[6] 同型坑)
  const asrStart = src.indexOf("function runAsr(");
  const runAsrBody = src.slice(asrStart, src.indexOf("\n}", asrStart) + 2);
  const runInAsr = runAsrBody.match(/run\(\s*"node",\s*\[([^\]]*)\]/);

  it("★★★ 兜底分支进统一 ASR 入口 runAsr(不是别的什么)", () => {
    const firstCall = afterMark.match(/\b(run|runAsr|runOk)\(/);
    expect(firstCall?.[1]).toBe("runAsr");
  });
  it("★★★ runAsr 走 whisperX(免费、Actions 上产线在跑),不走要密钥的 AssemblyAI", () => {
    expect(runInAsr).not.toBeNull();
    const args = runInAsr![1];
    expect(args).toContain("scripts/fetch-source-whisperx.mjs");
    expect(args).not.toContain("fetch-source-asr.mjs");
  });
  it("★★★ 时长参数是真值不是硬编码(GLM 006[3]:原断言只查旗标,换成写死的 999 也照样绿)", () => {
    const args = runInAsr![1];
    expect(args).toContain("String(item.durationSec || 0)");
    expect(args).toContain("item.enclosureUrl");
  });
  it("★★ runAsr 调用参数与 whisperx 源那条现成路线一致(dir + --transcribe + --audio-url + --duration)", () => {
    const args = runInAsr![1];
    for (const flag of ["dir", '"--transcribe"', '"--audio-url"', '"--duration"']) expect(args).toContain(flag);
  });
  it("★★ 无 enclosure 直链仍 fail-closed(不静默跳过)", () => {
    const tail = src.slice(src.indexOf("官方稿取源失败"), src.indexOf("官方稿取源失败") + 900);
    expect(tail).toMatch(/if \(!item\.enclosureUrl\) throw new Error/);
  });
});
