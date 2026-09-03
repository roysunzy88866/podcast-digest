// C17 · Mac mini 订阅巡航(ADR 0018)纯逻辑测试。
// 守:发现双通道(feed / videos 页备胎)解析、防钓鱼校验(ADR 0018.6)、三层去重、
//     机器预过滤(规则=数据)、判官放行判定(拦截改放行必须红)、巡航日志终态判定。
// fixture 全部来自真实响应(2026-07-31 本机代理实拉:AI Engineer feed 200 / Axios videos 页 / @axios 页)。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  parseChannelFeed,
  parseVideosPage,
  parseDurationText,
  prefilterSkip,
  indexPatrolLog,
  dedupSkip,
  parseVerdict,
  judgeAllows,
  extractChannelInfo,
  verifyChannelTitle,
  parseDotEnv,
  loadSubscriptions,
} from "../scripts/patrol-talks.mjs";

const FIX = resolve(dirname(fileURLToPath(import.meta.url)), "fixtures");
const feedXml = readFileSync(resolve(FIX, "yt-channel-feed.xml"), "utf8");
const videosHtml = readFileSync(resolve(FIX, "yt-videos-page.html"), "utf8");
const handleHtml = readFileSync(resolve(FIX, "yt-handle-page.html"), "utf8");

describe("订阅配置(规则是数据)", () => {
  const subs = loadSubscriptions();
  it("5 频道齐且 channel_id 对(含 2026-08-31 用户点名加的 Anthropic)", () => {
    expect(subs.map((s) => s.name).sort()).toEqual(["AI Engineer", "Anthropic", "Axios", "LangChain", "Stripe"]);
    const byName = Object.fromEntries(subs.map((s) => [s.name, s]));
    expect(byName["AI Engineer"].channelId).toBe("UCLKPca3kwwd-B59HNr-_lvA");
    expect(byName["Axios"].channelId).toBe("UCfU4-ArXuSX0tpyApyklMAg");
    expect(byName["LangChain"].channelId).toBe("UCC-lyoTfSrcJzA1ab3APAgw");
    expect(byName["Stripe"].channelId).toBe("UCM1guA1E-RHLO2OyfQPOkEQ");
    expect(byName["Anthropic"].channelId).toBe("UCrDwWp7EBBv4NwvScIpBDOA"); // 官方频道,Mastering Claude Code 起
  });
  it("过滤规则以数据形式存在:Axios 标题必含 / LangChain 时长下限 / 各家 judgeHint", () => {
    const byName = Object.fromEntries(subs.map((s) => [s.name, s]));
    expect(byName["Axios"].filters.titleMustInclude).toContain("full interview");
    expect(byName["LangChain"].filters.minDurationSec).toBe(600);
    expect(byName["Anthropic"].filters.minDurationSec).toBe(300); // 滤掉几十秒到两三分钟的功能短片(GLM 027[3])
    for (const s of subs) expect(String(s.filters.judgeHint ?? "").length).toBeGreaterThan(10);
  });
});

describe("发现通道 ① 频道 XML feed 解析(真实 AI Engineer feed 片段)", () => {
  it("解析出 videoId/标题/发布时间/简介", () => {
    const entries = parseChannelFeed(feedXml);
    expect(entries).toHaveLength(3);
    expect(entries[0].videoId).toBe("AVMr9PMINyo");
    expect(entries[0].title).toContain("MiniMax");
    expect(entries[0].publishedAt).toMatch(/^2026-07-31/);
    expect(typeof entries[0].description).toBe("string");
  });
  it("不是 feed 的响应(HTML 错误页)→ 解析出 0 条,调用方据此切备胎", () => {
    expect(parseChannelFeed("<html><body>Error 500</body></html>")).toHaveLength(0);
  });
});

describe("发现通道 ② /videos 页 HTML 备胎(真实 Axios 页 lockupViewModel)", () => {
  it("解析出 videoId/标题/时长(角标)", () => {
    const vids = parseVideosPage(videosHtml);
    expect(vids.length).toBe(3);
    const jensen = vids.find((v) => v.videoId === "fr1IQspixmM");
    expect(jensen).toBeTruthy();
    expect(jensen!.title).toContain("Jensen Huang");
    expect(jensen!.durationSec).toBe(1 * 3600 + 10 * 60 + 22); // 角标 "1:10:22"
  });
  it("页面里没有 ytInitialData → 响亮抛(备胎失败不能静默当零条)", () => {
    expect(() => parseVideosPage("<html><body>consent wall</body></html>")).toThrow();
  });
  it("有 ytInitialData 但解析不出任何 lockup → 响亮抛(结构变了要人知道)", () => {
    const html = '<script>var ytInitialData = {"contents":{}};</script>';
    expect(() => parseVideosPage(html)).toThrow();
  });
});

describe("parseDurationText(角标时长)", () => {
  it("H:MM:SS / M:SS", () => {
    expect(parseDurationText("1:10:22")).toBe(4222);
    expect(parseDurationText("9:05")).toBe(545);
  });
  it("解析不了 = null(不编造)", () => {
    expect(parseDurationText("LIVE")).toBe(null);
    expect(parseDurationText("")).toBe(null);
    expect(parseDurationText(undefined)).toBe(null);
  });
});

describe("机器预过滤(规则=数据,prefilterSkip 返回理由或 null)", () => {
  it("Axios 规则:标题不含 full interview → 滤", () => {
    const f = { titleMustInclude: ["full interview"] };
    expect(prefilterSkip({ title: "Jensen Huang says the AI doomers have it wrong" }, f)).toMatch(/full interview/);
    expect(prefilterSkip({ title: "Full Interview: Jensen Huang on AI" }, f)).toBe(null);
  });
  it("LangChain 规则:短于 minDurationSec → 滤;时长未知不误杀(等富化后再判)", () => {
    const f = { minDurationSec: 600 };
    expect(prefilterSkip({ title: "Quick demo", durationSec: 240 }, f)).toMatch(/时长/);
    expect(prefilterSkip({ title: "Long talk", durationSec: 1800 }, f)).toBe(null);
    expect(prefilterSkip({ title: "Unknown duration", durationSec: null }, f)).toBe(null);
  });
  it("无规则频道全放行(过滤交品味判官)", () => {
    expect(prefilterSkip({ title: "anything" }, {})).toBe(null);
  });
});

describe("三层去重(dedupSkip;删掉任何一层必须红)", () => {
  const logIndex = indexPatrolLog([
    JSON.stringify({ videoId: "reject1", action: "rejected" }),
    JSON.stringify({ videoId: "pre1", action: "prefilter-skip" }),
    JSON.stringify({ videoId: "seeded1", action: "seeded" }),
    JSON.stringify({ videoId: "retry1", action: "seed-failed" }),
    JSON.stringify({ videoId: "retry2", action: "judge-failed" }),
    "not-json-garbage-line",
  ]);
  it("pipeline-state 演讲账本命中 → 跳过", () => {
    expect(dedupSkip("v1", { ledger: { v1: "2026-07-08-talks-x" }, seededIds: new Set(), logIndex })).toBe("ledger");
  });
  it("种子目录已存在 → 跳过", () => {
    expect(dedupSkip("v2", { ledger: {}, seededIds: new Set(["v2"]), logIndex })).toBe("seeded");
  });
  it("巡航日志终态(不对味/预过滤/已落种)→ 跳过不重判", () => {
    for (const vid of ["reject1", "pre1", "seeded1"]) {
      expect(dedupSkip(vid, { ledger: {}, seededIds: new Set(), logIndex })).toBe("patrol-log");
    }
  });
  it("巡航日志可重试记录(judge-failed/seed-failed)不算终态 → 下轮重试", () => {
    expect(dedupSkip("retry1", { ledger: {}, seededIds: new Set(), logIndex })).toBe(null);
    expect(dedupSkip("retry2", { ledger: {}, seededIds: new Set(), logIndex })).toBe(null);
  });
  it("同 videoId 先失败后终态,以最后一条为准", () => {
    const idx = indexPatrolLog([
      JSON.stringify({ videoId: "v", action: "judge-failed" }),
      JSON.stringify({ videoId: "v", action: "rejected" }),
    ]);
    expect(dedupSkip("v", { ledger: {}, seededIds: new Set(), logIndex: idx })).toBe("patrol-log");
  });
  it("终态粘性:终态之后的非终态行不许冲掉终态(GLM 20260731-008[6] 防腐)", () => {
    const idx = indexPatrolLog([
      JSON.stringify({ videoId: "v", action: "rejected" }),
      JSON.stringify({ videoId: "v", action: "judge-failed" }), // 手工补跑失败之类的杂音
    ]);
    expect(dedupSkip("v", { ledger: {}, seededIds: new Set(), logIndex: idx })).toBe("patrol-log");
  });
  it("全新 videoId → 不跳过", () => {
    expect(dedupSkip("fresh", { ledger: {}, seededIds: new Set(), logIndex })).toBe(null);
  });
});

describe("品味判官输出解析与放行判定(拦截改放行必须红)", () => {
  it("标准 JSON 输出解析", () => {
    expect(parseVerdict('{"verdict":"对味","reason":"创始人访谈,产业格局"}')).toEqual({
      verdict: "对味",
      reason: "创始人访谈,产业格局",
    });
  });
  it("裹在闲话/代码块里的 JSON 也能抠出来", () => {
    const raw = '好的,判定如下:\n```json\n{"verdict":"不对味","reason":"基准测评类"}\n```';
    expect(parseVerdict(raw)).toEqual({ verdict: "不对味", reason: "基准测评类" });
  });
  it("非法/缺字段输出 → null(调用方记 judge-failed,绝不瞎猜放行)", () => {
    expect(parseVerdict("我觉得挺好的")).toBe(null);
    expect(parseVerdict('{"reason":"没给判定"}')).toBe(null);
    expect(parseVerdict('{"verdict":"也许对味","reason":"x"}')).toBe(null);
  });
  it("只有「对味」放行;不对味/null 都拦", () => {
    expect(judgeAllows({ verdict: "对味", reason: "r" })).toBe(true);
    expect(judgeAllows({ verdict: "不对味", reason: "r" })).toBe(false);
    expect(judgeAllows(null)).toBe(false);
  });
});

describe("handle 解析防钓鱼(ADR 0018.6;真实 @axios 页片段)", () => {
  it("从 handle 页抠出 channelId 与页面 title", () => {
    const info = extractChannelInfo(handleHtml);
    expect(info.channelId).toBe("UCfU4-ArXuSX0tpyApyklMAg");
    expect(info.pageTitle).toContain("Axios");
  });
  it("页面 title 含配置频道名 → 通过;不含(山寨频道)→ 拒绝", () => {
    expect(verifyChannelTitle("Axios - YouTube", "Axios")).toBe(true);
    // 实证场景:@BloombergOriginals 是山寨,页面 title 对不上 Bloomberg 官方名
    expect(verifyChannelTitle("Best Crypto Clips - YouTube", "Bloomberg")).toBe(false);
  });
  it("抠不出 channelId → 响亮抛(不猜)", () => {
    expect(() => extractChannelInfo("<html><title>x</title></html>")).toThrow();
  });
});

describe("parseDotEnv(.env 载入,key 用户自持不进仓)", () => {
  it("KEY=VALUE 解析,跳过注释与空行,不覆盖已有 env", () => {
    const env = parseDotEnv('# c\nZHIPU_API_KEY=abc123\nEMPTY=\nQUOTED="q v"\n');
    expect(env.ZHIPU_API_KEY).toBe("abc123");
    expect(env.QUOTED).toBe("q v");
    expect("EMPTY" in env).toBe(true);
  });
});

describe("drift #82 · 演讲巡航判官同一 token 预算 bug", () => {
  it("★★★ max-tokens 已从 200 提到 800(200 会截断 JSON → 判官静默全放,off-taste 演讲照样落种)", () => {
    const src = readFileSync(resolve(FIX, "..", "..", "scripts", "patrol-talks.mjs"), "utf8");
    // 与 taste-judge 共用同一常量,不再各写一份(GLM 006[1]:双份真相必然再次跑偏)
    expect(src).toContain('String(JUDGE_MAX_TOKENS)');
    expect(src).toMatch(/import \{ JUDGE_MAX_TOKENS \} from "\.\/taste-judge\.mjs"/);
    expect(src).not.toMatch(/"--max-tokens", *"200"/);
  });
});
