// C17 · Mac mini 订阅巡航(ADR 0018)纯逻辑测试。
// 守:发现双通道(feed / videos 页备胎)解析、防钓鱼校验(ADR 0018.6)、三层去重、
//     机器预过滤(规则=数据)、判官放行判定(拦截改放行必须红)、巡航日志终态判定。
// fixture 全部来自真实响应(2026-07-31 本机代理实拉:AI Engineer feed 200 / Axios videos 页 / @axios 页)。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parseChannelFeed, parseVideosPage, parseDurationText, prefilterSkip, indexPatrolLog, dedupSkip, parseVerdict, judgeAllows, extractChannelInfo, verifyChannelTitle, parseDotEnv, loadSubscriptions, fetchText, FETCH_RETRY, uploadDay, ageDays, SH_MAX_BUFFER } from "../scripts/patrol-talks.mjs";

const FIX = resolve(dirname(fileURLToPath(import.meta.url)), "fixtures");
const feedXml = readFileSync(resolve(FIX, "yt-channel-feed.xml"), "utf8");
const videosHtml = readFileSync(resolve(FIX, "yt-videos-page.html"), "utf8");
const handleHtml = readFileSync(resolve(FIX, "yt-handle-page.html"), "utf8");

describe("订阅配置(规则是数据)", () => {
  const subs = loadSubscriptions();
  it("9 频道齐且 channel_id 对(2026-08-31 Anthropic / 09-09 YC / 09-10 Sequoia+Greylock / 09-12 Cursor)", () => {
    expect(subs.map((s) => s.name).sort()).toEqual(["AI Engineer", "Anthropic", "Axios", "Cursor", "Greylock", "LangChain", "Sequoia Capital", "Stripe", "Y Combinator"]);
    const byName = Object.fromEntries(subs.map((s) => [s.name, s]));
    expect(byName["AI Engineer"].channelId).toBe("UCLKPca3kwwd-B59HNr-_lvA");
    expect(byName["Axios"].channelId).toBe("UCfU4-ArXuSX0tpyApyklMAg");
    expect(byName["LangChain"].channelId).toBe("UCC-lyoTfSrcJzA1ab3APAgw");
    expect(byName["Stripe"].channelId).toBe("UCM1guA1E-RHLO2OyfQPOkEQ");
    expect(byName["Anthropic"].channelId).toBe("UCrDwWp7EBBv4NwvScIpBDOA"); // 官方频道,Mastering Claude Code 起
    // 2026-09-09 用户「Y Combinator: why the harness matters… 别的平台都抓到了,为啥你没有」→ 实证该集只发 YouTube、
    // 不进 YC 播客 RSS;同期 YouTube 15 条 vs 播客 7 条,10 条独占。故订 YC 频道专捞这半边。
    expect(byName["Y Combinator"].channelId).toBe("UCcefcZRL2oaA_uBNeo5UOWg");
    expect(byName["Y Combinator"].filters.minDurationSec).toBe(900); // 滤掉 Demo Day/招募公告类短片
    // 2026-09-10 用户「确实内容少,那就加源」→ 实测后加:Sequoia 有只发 YouTube 的 17-29 分钟短访谈系列(6 条库里全无);
    // Greylock 完全不在源表,近 60 天 7 条 35-58 分钟企业 agent 案例。
    expect(byName["Sequoia Capital"].channelId).toBe("UCWrF0oN6unbXrWsTN7RctTw");
    expect(byName["Greylock"].channelId).toBe("UCZ7x7yDBbEFCGztD8BYvRhA");
    expect(byName["Sequoia Capital"].filters.minDurationSec).toBe(900); // 滤掉 <15 分钟预告片(GLM 001[1]:原漏钉)
    expect(byName["Greylock"].filters.minDurationSec).toBe(1200); // 滤掉 5-12 分钟招聘/融资短片
    // 2026-09-12 用户夜间委托「自己干」:Cursor 频道 09-03 一次发 5 条 54-65 分钟 AI 编程实操深讲,与 Anthropic 频道同类
    expect(byName["Cursor"].channelId).toBe("UC6YYHJzM6PhZ2Yey9BQiUaw");
    expect(byName["Cursor"].filters.minDurationSec).toBe(1500); // 滤掉 1-3 分钟产品短片与 15 分钟 Compile 短讲
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
    expect(src).toMatch(/import \{[^}]*\bJUDGE_MAX_TOKENS\b[^}]*\} from "\.\/taste-judge\.mjs"/); // 同一行可多导入别的常量(drift #104 加了 JUDGE_FRESHNESS_DAYS)
    expect(src).not.toMatch(/"--max-tokens", *"200"/);
  });
});

describe("drift #96 · 取 feed 要扛住代理抽风(实测 mihomo 会几分钟内 200→000→200)", () => {
  const noSleep = () => Promise.resolve();
  it("★★★ 连接层失败会重试,中途成功即返回(一次抽风不该让整个频道当轮归零)", async () => {
    let n = 0;
    const fetchImpl = async () => {
      if (++n < 3) throw new Error("fetch failed");
      return { ok: true, status: 200, text: async () => "<feed/>" };
    };
    const r = await fetchText("https://x/y", { fetchImpl, sleep: noSleep });
    expect(r).toEqual({ ok: true, status: 200, text: "<feed/>" });
    expect(n).toBe(3);
  });
  it("★★★ 连败到上限 → 抛错并点明「代理抽风」,不静默当成没内容", async () => {
    let n = 0;
    const fetchImpl = async () => { n++; throw new Error("fetch failed"); };
    await expect(fetchText("https://x/y", { fetchImpl, sleep: noSleep })).rejects.toThrow(/代理抽风/);
    expect(n).toBe(FETCH_RETRY + 1); // 首试 + 重试次数
  });
  it("★★★ HTTP 状态码**不**重试:404 是频道配错,重试无意义且拖慢整轮", async () => {
    let n = 0;
    const fetchImpl = async () => { n++; return { ok: false, status: 404, text: async () => "" }; };
    const r = await fetchText("https://x/y", { fetchImpl, sleep: noSleep });
    expect(r.status).toBe(404);
    expect(n).toBe(1);
  });
  it("★★ 退避是递增的(别把抽风窗口里的重试挤在同一瞬间)", async () => {
    const waits: number[] = [];
    const fetchImpl = async () => { throw new Error("fetch failed"); };
    await fetchText("https://x/y", { fetchImpl, sleep: async (ms: number) => { waits.push(ms); }, backoffMs: 1000 }).catch(() => {});
    expect(waits).toEqual([1000, 2000, 3000]);
  });
});

describe("drift #104 · 演讲巡航补上 60 天新鲜窗口(Greylock 灌进 4–28 个月前的老片)", () => {
  const T = { todayISO: "2026-09-17" };
  it("★★★ 真实案例:Fermat 那集 yt-dlp 上传日 20240516(854 天前)→ 拦下", () => {
    expect(prefilterSkip({ title: "Fermat CEO Rishabh Jain on Reinventing Distribution", publishedAt: "20240516" }, {}, T)).toMatch(/854 天前.*60 天/);
  });
  it("★★★ 新鲜的放行:频道 feed 的 ISO 日期 10 天前", () => {
    expect(prefilterSkip({ title: "x", publishedAt: "2026-09-07T15:00:00+00:00" }, {}, T)).toBe(null);
  });
  it("★★★ 边界与播客补历史同口径:恰好 60 天放行、61 天拦", () => {
    expect(prefilterSkip({ title: "x", publishedAt: "2026-07-19" }, {}, T)).toBe(null);
    expect(prefilterSkip({ title: "x", publishedAt: "2026-07-18" }, {}, T)).toMatch(/61 天前/);
  });
  it("★★ 日期未知(/videos 页富化前给空串)不拦 —— 富化后第二次预过滤拿到 upload_date 再判", () => {
    expect(prefilterSkip({ title: "x", publishedAt: "" }, {}, T)).toBe(null);
    expect(ageDays("", "2026-09-17")).toBe(null);
  });
  it("★★ 两种日期格式都认:yt-dlp 的 8 位数字、feed 的 ISO", () => {
    expect(uploadDay("20260903")).toBe("2026-09-03");
    expect(uploadDay("2026-09-03T15:00:00+00:00")).toBe("2026-09-03");
    expect(uploadDay("7 days ago")).toBe(null);
  });
  it("★★★ 单一真相:窗口天数从播客那边导入,时效规则天数从播客判官导入,不各写一份", () => {
    const src = readFileSync(resolve(FIX, "..", "..", "scripts", "patrol-talks.mjs"), "utf8");
    expect(src).toMatch(/import \{[^}]*\bBACKFILL_MAX_AGE_DAYS\b[^}]*\} from "\.\/run-pipeline\.mjs"/);
    expect(src).toMatch(/JUDGE_FRESHNESS_DAYS \} from "\.\/taste-judge\.mjs"/);
    expect(src).not.toMatch(/maxAgeDays = 60\b/);
    expect(src).toMatch(/ageDays\(publishedAt, todayISO = bjDay\(\)\)/); // 北京日期,不用 UTC(GLM 001[2])
  });
  it("★★★ 判官拿得到上传日、也有时效规则(原来日志里全是「上传?」,规则无从生效)", () => {
    const src = readFileSync(resolve(FIX, "..", "..", "scripts", "patrol-talks.mjs"), "utf8");
    expect(src).toContain("上传日:${uploadDay(video.publishedAt)");
    expect(src).toContain("时效规则:输入含「上传日(距今 N 天)」");
  });
  it("★★ 原有过滤不受影响:标题关键词与时长下限照旧", () => {
    expect(prefilterSkip({ title: "Quick demo", durationSec: 240, publishedAt: "2026-09-10" }, { minDurationSec: 600 }, T)).toMatch(/时长/);
  });
});

describe("drift #105 · yt-dlp 大元数据不许被 1MB 默认上限掐死", () => {
  const scripts = resolve(FIX, "..", "..", "scripts");
  it("★★★ 上限够装 12MB 输出(实测 LangChain×TypeSafe 访谈元数据 11.7MB);默认 1MB 确实会掐死", async () => {
    const { spawnSync } = await import("node:child_process");
    const big = ["-e", "process.stdout.write('x'.repeat(12*1024*1024))"];
    const dflt = spawnSync(process.execPath, big, { encoding: "utf8" });
    expect(dflt.status).toBe(null);
    expect(dflt.error?.code).toBe("ENOBUFS");
    const ok = spawnSync(process.execPath, big, { encoding: "utf8", maxBuffer: SH_MAX_BUFFER });
    expect(ok.status).toBe(0);
    expect(ok.stdout.length).toBe(12 * 1024 * 1024);
  });
  it("★★★ 两处 sh() 都带上 maxBuffer(巡航富化 + 种子元数据都跑 --dump-single-json)", () => {
    const patrol = readFileSync(resolve(scripts, "patrol-talks.mjs"), "utf8");
    const seed = readFileSync(resolve(scripts, "seed-talk.mjs"), "utf8");
    expect(patrol).toMatch(/function sh\(cmd, args, opts = \{\}\) \{\n\s+const r = spawnSync\([^\n]*maxBuffer: SH_MAX_BUFFER/);
    expect(seed).toMatch(/function sh\(cmd, args, opts = \{\}\) \{\n\s+const r = spawnSync\([^\n]*maxBuffer: 64 \* 1024 \* 1024/);
  });
  it("★ 报错带上 error code(以后再被掐,日志直接写 ENOBUFS,不再只剩 exit null)", () => {
    for (const f of ["patrol-talks.mjs", "seed-talk.mjs"]) {
      expect(readFileSync(resolve(scripts, f), "utf8")).toContain("${r.error ? ` ${r.error.code}` : \"\"}");
    }
  });
});
