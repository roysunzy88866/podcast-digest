// C16 · talks 源(演讲精选通道)纯逻辑测试。
// 守:cron 零影响(默认排除 manual 源)/ videoId 账本去重(ADR 0017 第 1 层)/
//     标题模糊比对待裁不自动丢(第 2 层)/ 演讲不套 isInterview / id = <date>-talks-<slug>。
import { describe, it, expect } from "vitest";
import {
  SOURCES,
  activeSources,
  normalizeTitle,
  findTitleDuplicate,
  talkItemFromSeed,
  selectTalks,
  resolveTalksCap,
  deriveId,
  sourceForId,
  pendingTalkVideoIds,
} from "../scripts/run-pipeline.mjs";

const TALKS = SOURCES.find((s) => s.key === "talks");

// 镜像 seed-talk.mjs 落的 seed.json 形状
const seed = (over = {}) => ({
  videoId: "xUnRQ9vLXxo",
  url: "https://www.youtube.com/watch?v=xUnRQ9vLXxo",
  title: "Everything we knew about software has changed — Theo Browne",
  channel: "AI Engineer",
  uploader: "AI Engineer",
  upload_date: "2026-07-08",
  duration_sec: 998,
  audio_file: "xUnRQ9vLXxo.m4a",
  audio_asset_url: "https://github.com/o/r/releases/download/talks-seed/xUnRQ9vLXxo.m4a",
  ...over,
});

describe("SOURCES talks 源配置", () => {
  it("存在且形状对:manual + whisperx + seedDir,无 feedUrl", () => {
    expect(TALKS).toBeTruthy();
    expect(TALKS.manual).toBe(true);
    expect(TALKS.asr).toBe("whisperx");
    expect(TALKS.seedDir).toBe("data/talks-seed");
    expect(TALKS.feedUrl).toBeUndefined();
  });
  it("sourceForId 认得 talks 集 id(补活链路可用)", () => {
    expect(sourceForId("2026-07-08-talks-everything-we-knew")?.key).toBe("talks");
  });
});

// C17 · ADR 0018.5(授权演进,注明出处):C16 原口径「cron 零影响=默认永远排除 manual 源」
// 收窄为「无待处理种子时零影响」——有待处理种子(autoTalks)时 talks 源自动进场,去掉人工点火。
describe("activeSources(ADR 0018.5:无种子时 cron 原样;有待处理种子自动进场)", () => {
  it("默认且无待处理种子:排除 manual 源,与 C16 行为一字不差", () => {
    const keys = activeSources(SOURCES, {}).map((s) => s.key);
    expect(keys).not.toContain("talks");
    expect(keys).toContain("lennys"); // 其余源原样
  });
  it("默认但有待处理种子(autoTalks):talks 自动进场,播客源照跑", () => {
    const keys = activeSources(SOURCES, { autoTalks: true }).map((s) => s.key);
    expect(keys).toContain("talks");
    expect(keys).toContain("lennys");
    expect(keys.indexOf("talks")).toBe(keys.length - 1); // talks 殿后:播客新集优先
  });
  it("pendingTalkVideoIds:种子里不在演讲账本的才算待处理", () => {
    expect(pendingTalkVideoIds(["a", "b", "c"], { b: "2026-07-08-talks-x" })).toEqual(["a", "c"]);
    expect(pendingTalkVideoIds([], {})).toEqual([]);
  });
  it("--talks 只跑 manual 源", () => {
    const keys = activeSources(SOURCES, { talks: true }).map((s) => s.key);
    expect(keys).toEqual(["talks"]);
  });
  it("--source talks 点名也能选中", () => {
    const keys = activeSources(SOURCES, { onlyKey: "talks" }).map((s) => s.key);
    expect(keys).toEqual(["talks"]);
  });
  it("--source 点名普通源不受影响", () => {
    expect(activeSources(SOURCES, { onlyKey: "lennys" }).map((s) => s.key)).toEqual(["lennys"]);
  });
});

describe("normalizeTitle / findTitleDuplicate(去重第 2 层)", () => {
  it("归一化:大小写/标点/多空格拉平", () => {
    expect(normalizeTitle("The Mindset That Built NVIDIA!")).toBe(normalizeTitle("the mindset,  that built nvidia"));
  });
  it("完全同题(归一化后)判重", () => {
    expect(findTitleDuplicate("The Mindset That Built NVIDIA", ["The Mindset that built NVIDIA."])).toBeTruthy();
  });
  it("互为包含判重(YT 版带前后缀 ≈ RSS 版同集)", () => {
    const lib = ["Jensen Huang: The Mindset That Built NVIDIA | Y Combinator"];
    expect(findTitleDuplicate("The Mindset That Built NVIDIA", lib)).toBe(lib[0]);
  });
  it("短串包含不误伤(有最短长度守卫)", () => {
    expect(findTitleDuplicate("AI", ["The AI Show — full episode"])).toBe(null);
  });
  it("不同题不误报", () => {
    expect(findTitleDuplicate("Every company should have a Brain", ["The Golden Age of AI Engineering"])).toBe(null);
  });
});

describe("talkItemFromSeed + deriveId(id = <upload日期>-talks-<slug>)", () => {
  it("item 字段逐一来自种子,enclosure = Release asset 直链", () => {
    const it_ = talkItemFromSeed(seed());
    expect(it_.title).toContain("Everything we knew");
    expect(it_.pubDateISO).toBe("2026-07-08T00:00:00.000Z");
    expect(it_.hasAudio).toBe(true);
    expect(it_.enclosureUrl).toBe(seed().audio_asset_url);
    expect(it_.durationSec).toBe(998);
  });
  it("id 前缀 <date>-talks-,slug 从标题派生(YouTube link 无集页 slug)", () => {
    const id = deriveId(talkItemFromSeed(seed()), TALKS);
    expect(id.startsWith("2026-07-08-talks-everything-we-knew-about-software")).toBe(true);
  });
});

describe("selectTalks(选种 + 三层去重)", () => {
  const base = { existingIds: [], videoLedger: {}, libraryTitles: [], source: TALKS };

  it("正常种子入选,按上传日期旧→新排序", () => {
    const s1 = seed(); // 07-08
    const s2 = seed({ videoId: "pMggiOb18tc", title: "The Golden Age of AI Engineering", upload_date: "2026-07-09", url: "https://www.youtube.com/watch?v=pMggiOb18tc" });
    const { picks } = selectTalks([s2, s1], base);
    expect(picks.map((p) => p.videoId)).toEqual(["xUnRQ9vLXxo", "pMggiOb18tc"]);
    expect(picks[0].id.startsWith("2026-07-08-talks-")).toBe(true);
    expect(picks[0].item.enclosureUrl).toContain("/releases/download/");
  });

  it("videoId 已在账本 → 绝不再选(去重第 1 层;防重烧钱)", () => {
    const { picks, done } = selectTalks([seed()], { ...base, videoLedger: { xUnRQ9vLXxo: "2026-07-08-talks-everything" } });
    expect(picks).toHaveLength(0);
    expect(done).toContain("xUnRQ9vLXxo");
  });

  it("派生 id 已在 existingIds(已完成/已隔离)→ 不再选", () => {
    const id = deriveId(talkItemFromSeed(seed()), TALKS);
    const { picks } = selectTalks([seed()], { ...base, existingIds: [id] });
    expect(picks).toHaveLength(0);
  });

  it("标题疑似重复 → 进 held 待裁,不入 picks、不自动丢弃(种子去留归人)", () => {
    const lib = ["Jensen Huang: The Mindset That Built NVIDIA | Y Combinator"];
    const dup = seed({ videoId: "I4B37S1dyQQ", title: "The Mindset That Built NVIDIA", url: "https://www.youtube.com/watch?v=I4B37S1dyQQ" });
    const { picks, held } = selectTalks([dup], { ...base, libraryTitles: lib });
    expect(picks).toHaveLength(0);
    // 待裁必须显式出现在 held(响亮报),静默吞掉 = 自动处理 = 违 ADR 0017 第 2 层
    expect(held).toHaveLength(1);
    expect(held[0].videoId).toBe("I4B37S1dyQQ");
    expect(held[0].matchedTitle).toBe(lib[0]);
  });

  it("坏种子(缺 videoId/upload_date)响亮抛,不静默跳", () => {
    expect(() => selectTalks([seed({ videoId: undefined })], base)).toThrow();
    expect(() => selectTalks([seed({ upload_date: undefined })], base)).toThrow();
  });

  it("演讲不套 isInterview:无 RSS link 形状照样入选(噪音过滤按源放行)", () => {
    // link 是 YouTube watch URL(slugFromLink 抠不出),且无 feed item 字段——仍应被选中
    const { picks } = selectTalks([seed()], base);
    expect(picks).toHaveLength(1);
  });
});

// 2026-07-31 调度员保险丝(drift #36 口径):C17 巡航首轮可能一次落几十条种子,
// 每条 whisperX 20-100 分钟,全塞一班必撞 GitHub runner 6h 上限 → 每班限流,超出的原样留后班。
describe("selectTalks 每班限流保险丝(默认 3,防撞 runner 6h)", () => {
  const base = { existingIds: [], videoLedger: {}, libraryTitles: [], source: TALKS };
  const many = (n: number) =>
    Array.from({ length: n }, (_, i) =>
      seed({
        videoId: `vid-${String(i).padStart(3, "0")}`,
        title: `Completely distinct talk number ${i} about topic ${i}`,
        upload_date: `2026-07-${String(i + 1).padStart(2, "0")}`,
        url: `https://www.youtube.com/watch?v=vid-${String(i).padStart(3, "0")}`,
      }),
    );

  it("超上限:本班只吃 cap 条(最旧优先),其余进 deferred 原样留后班", () => {
    const { picks, deferred } = selectTalks(many(5), { ...base, cap: 3 });
    expect(picks.map((p) => p.videoId)).toEqual(["vid-000", "vid-001", "vid-002"]);
    expect(deferred.map((d) => d.videoId)).toEqual(["vid-003", "vid-004"]);
  });

  it("不传 cap 也有保险丝:默认值 3 写死在代码里", () => {
    const { picks, deferred } = selectTalks(many(5), base);
    expect(picks).toHaveLength(3);
    expect(deferred).toHaveLength(2);
  });

  it("未超上限:全吃,deferred 为空(既有小批行为不变)", () => {
    const { picks, deferred } = selectTalks(many(2), base);
    expect(picks).toHaveLength(2);
    expect(deferred).toEqual([]);
  });

  it("TALKS_BATCH_CAP 环境变量可覆写默认(workflow 输入走它)", () => {
    process.env.TALKS_BATCH_CAP = "5";
    try {
      const { picks, deferred } = selectTalks(many(5), base);
      expect(picks).toHaveLength(5);
      expect(deferred).toEqual([]);
    } finally {
      delete process.env.TALKS_BATCH_CAP;
    }
  });

  it("同日种子顺序确定:同 upload_date 按 videoId 排,与读入顺序无关", () => {
    const a = seed({ videoId: "aaa-same-day", title: "Alpha talk on determinism only", url: "https://www.youtube.com/watch?v=aaa-same-day" });
    const b = seed({ videoId: "bbb-same-day", title: "Beta talk on ordering guarantees", url: "https://www.youtube.com/watch?v=bbb-same-day" });
    const fwd = selectTalks([a, b], { ...base, cap: 1 });
    const rev = selectTalks([b, a], { ...base, cap: 1 });
    expect(fwd.picks.map((p) => p.videoId)).toEqual(rev.picks.map((p) => p.videoId));
    expect(fwd.deferred.map((d) => d.videoId)).toEqual(rev.deferred.map((d) => d.videoId));
    expect(fwd.picks[0].videoId).toBe("aaa-same-day");
  });

  it("resolveTalksCap:空/未设→默认 3;正整数→取值;非法(0/负/非数字)响亮抛", () => {
    expect(resolveTalksCap(undefined)).toBe(3);
    expect(resolveTalksCap("")).toBe(3);
    expect(resolveTalksCap("7")).toBe(7);
    expect(() => resolveTalksCap("0")).toThrow();
    expect(() => resolveTalksCap("-2")).toThrow();
    expect(() => resolveTalksCap("abc")).toThrow();
    expect(() => resolveTalksCap("2.5")).toThrow();
    // 只认十进制数字串,与 workflow shell 校验同口径(GLM 20260731-009[3]:Number() 会放行这些)
    expect(() => resolveTalksCap("1e2")).toThrow();
    expect(() => resolveTalksCap("0x10")).toThrow();
    expect(() => resolveTalksCap("08")).toThrow();
  });
});

// ── 终态必记账(修 run 30608504888 lance 漏写)────────────────────────────
// 实账:lance 集(9QebvrrY3KY)在 talks 批 judge-quotes 转瞬失败(不记账,合理),
// 同轮补活链 processEpisode 成功、上站发布——但补活链只清连败账,不写演讲 videoId 账本
// → 第 1 层去重对它永久失效(下轮 selectTalks 又因 id 在 completedIds 判 done,也不补记)。
// 修:终态记账收进 recordTalkTerminal(纯函数),补活链两个终态分支(成功/隔离)都必须调它。
import { readFileSync } from "node:fs";
import { recordTalkTerminal } from "../scripts/run-pipeline.mjs";

describe("recordTalkTerminal:talks 集补活到终态必记 videoId 账本", () => {
  // 复现 lance 场景:种子在仓、集已成、账本无此 videoId
  const lanceSeed = seed({
    videoId: "9QebvrrY3KY",
    url: "https://www.youtube.com/watch?v=9QebvrrY3KY",
    title: "Claude for Long-Horizon Tasks — Lance Martin, Anthropic",
    upload_date: "2026-07-22",
  });
  const lanceId = deriveId(talkItemFromSeed(lanceSeed), TALKS);

  it("★★★ lance 场景:按种子反查 videoId,写入 state.talkVideoIds 并返回之", () => {
    const state = { talkVideoIds: { xUnRQ9vLXxo: "2026-07-08-talks-everything" } };
    expect(recordTalkTerminal(state, lanceId, TALKS, [seed(), lanceSeed])).toBe("9QebvrrY3KY");
    expect(state.talkVideoIds["9QebvrrY3KY"]).toBe(lanceId);
    expect(state.talkVideoIds.xUnRQ9vLXxo).toBe("2026-07-08-talks-everything"); // 旧账不动
  });

  it("state 缺 talkVideoIds 字段也能记(初始化,不炸)", () => {
    const state = {};
    expect(recordTalkTerminal(state, lanceId, TALKS, [lanceSeed])).toBe("9QebvrrY3KY");
    expect(state.talkVideoIds["9QebvrrY3KY"]).toBe(lanceId);
  });

  it("非 seedDir 源(普通播客)→ no-op 返回 null,账本不动", () => {
    const state = { talkVideoIds: {} };
    const lennys = SOURCES.find((s) => s.key === "lennys");
    expect(recordTalkTerminal(state, "2026-07-08-lennys-x", lennys, [lanceSeed])).toBeNull();
    expect(state.talkVideoIds).toEqual({});
  });

  it("id 对不上任何种子(种子被人工删)→ 返回 null,不瞎记", () => {
    const state = { talkVideoIds: {} };
    expect(recordTalkTerminal(state, "2026-01-01-talks-nonexistent", TALKS, [lanceSeed])).toBeNull();
    expect(state.talkVideoIds).toEqual({});
  });
});

describe("补活链两个终态分支必须调 recordTalkTerminal(源码锚,变异一刀=去掉接线→红)", () => {
  const src = readFileSync(new URL("../scripts/run-pipeline.mjs", import.meta.url), "utf8");
  // revivePass 函数体:从声明起到下一个顶格 "\n}" 止(同 run-pipeline-audio.test.ts 锚法)
  const start = src.indexOf("function revivePass");
  const body = src.slice(start, src.indexOf("\n}", start));

  it("★★★ revivePass 函数还在,且成功/隔离两个终态分支各有一次 recordTalkTerminal 调用", () => {
    expect(body.length).toBeGreaterThan(100); // 防重命名后断言空转
    const calls = body.split("recordTalkTerminal(").length - 1;
    expect(calls).toBeGreaterThanOrEqual(2); // res.ok 成功分支 + 失真隔离分支,各一
  });

  it("★ talks 批本体(processTalksSource)终态记账仍在(不许修补活时把原点拆了)", () => {
    const s2 = src.indexOf("function processTalksSource");
    const b2 = src.slice(s2, src.indexOf("\n}", s2));
    expect(b2).toContain("state.talkVideoIds[videoId] = id");
  });
});
