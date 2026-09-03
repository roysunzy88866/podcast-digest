#!/usr/bin/env node
// C17 · Mac mini 订阅巡航(ADR 0018):把演讲发现从「人工点名」变「订阅自动巡航」。
// 跑在 Mac mini(住宅 IP,常开),只做「发现 → 品味判官 → 下载+上传+落种子 → 推仓」;
// 一切内容处理(转写/翻译/浓缩/TTS)仍全云端 —— push 后 cron 例行班次自动接管(ADR 0018.5)。
//
// 订阅=数据:data/talk-subscriptions.json(4 频道 + 过滤规则 + 判官提示;增删改只动 JSON)。
// 发现双通道:频道 XML feed 优先;非 200/解析零条(2026-07 起大面积 404/500,实测 4 频道 3 个 500)
//   → 自动切 /videos 页 HTML 备胎(ytInitialData/lockupViewModel,调研已验通)。
// 防钓鱼(ADR 0018.6):凡按 handle 解析 channelId,必校验页面 title 含配置频道名(实证 @BloombergOriginals 是山寨)。
// 三层去重:pipeline-state 演讲账本 / data/talks-seed 已有种子 / 巡航日志终态记录。
// 品味判官:GLM 读 标题+简介+时长,按 需求共创/内容品味档案.md(运行时读,活文档)判 对味/不对味+一句理由;
//   逐条留痕 data/talks-seed/patrol-log.jsonl(随仓提交,人工可复核纠偏);拿不准判不对味并说明,人工可从日志捞回。
//   引擎默认 glm-5.2(付费档,每条成本分级别,ADR 0018.4;PATROL_JUDGE_MODEL 可换)。
// 网络:Mac mini 直连;代理不写死(seed-talk 的开发机默认 7877 由 SEED_TALK_PROXY 显式覆写掉;
//   本脚本自身 fetch 需代理时用 NODE_USE_ENV_PROXY=1 + HTTPS_PROXY,见 docs/macmini-巡航安装.md)。
// 收尾:git add 只收 data/talks-seed → commit → pull --rebase → push(重试 3 次,仍败响亮留痕+退出非零,绝不硬推)。
//
// 用法(Mac mini launchd 定时,或人工):
//   node scripts/patrol-talks.mjs                  # 完整巡航(发现→判官→落种→推仓)
//   node scripts/patrol-talks.mjs --discover-only  # 烟测:只发现+去重+预过滤,打印结果;不判官不下载不动 git
//   node scripts/patrol-talks.mjs --judge-sample 5 # 烟测:发现后真判官 ≤5 条并打印;不下载不写日志不动 git
//   node scripts/patrol-talks.mjs --limit 3        # 本轮最多落种 3 条(首跑积压太多时手动分批)
//
// 纯逻辑(解析/过滤/去重/判定)全部导出供单测;副作用只在 main()。
import { readFileSync, existsSync, readdirSync, appendFileSync, mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { xmlUnescape } from "./build-feed.mjs"; // isMain 守卫,import 无副作用
import { JUDGE_MAX_TOKENS } from "./taste-judge.mjs"; // 单一真相:两个判官共用一个 token 预算(drift #82:两处各写一份必然再次跑偏)

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SUBS_FILE = join(ROOT, "data/talk-subscriptions.json");
const STATE_FILE = join(ROOT, "data/pipeline-state.json");
const SEED_DIR = join(ROOT, "data/talks-seed");
const PATROL_LOG = join(SEED_DIR, "patrol-log.jsonl");
const TASTE_FILE = join(ROOT, "需求共创/内容品味档案.md");
const JUDGE_MODEL = process.env.PATROL_JUDGE_MODEL || "glm-5.2"; // 付费档:判错=白烧下载/转写钱,量小(周5-10条)成本分级别
const BROWSER_HEADERS = {
  // 与 run-pipeline 同款浏览器 UA(裸 UA 可能被挡);Accept-Language 钉英文,防本地化改 title 影响防钓鱼校验
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
  "Accept-Language": "en",
  Accept: "*/*",
};

// ── 纯逻辑(可单测,无副作用)──────────────────────────────

/** 订阅清单载入+校验:每条必有 name + (channelId | handle)。坏配置响亮抛,不巡个寂寞。 */
export function loadSubscriptions(file = SUBS_FILE) {
  const raw = JSON.parse(readFileSync(file, "utf8"));
  const subs = raw?.subscriptions;
  if (!Array.isArray(subs) || !subs.length) throw new Error(`订阅清单空/形状不对:${file}`);
  for (const s of subs) {
    if (!s.name || (!s.channelId && !s.handle)) throw new Error(`订阅条目缺 name 或 channelId/handle:${JSON.stringify(s)}`);
    s.filters = s.filters ?? {};
  }
  return subs;
}

/** 发现通道①:频道 XML feed(Atom)→ [{videoId,title,publishedAt,description}]。不是 feed 时解析出 0 条,由调用方切备胎。 */
export function parseChannelFeed(xml) {
  const entries = [];
  const re = /<entry>([\s\S]*?)<\/entry>/g;
  let m;
  while ((m = re.exec(String(xml ?? "")))) {
    const body = m[1];
    const pick = (r) => (body.match(r) || [])[1]?.trim() ?? "";
    const videoId = pick(/<yt:videoId>([\s\S]*?)<\/yt:videoId>/);
    if (!videoId) continue;
    entries.push({
      videoId,
      title: xmlUnescape(pick(/<title>([\s\S]*?)<\/title>/)),
      publishedAt: pick(/<published>([\s\S]*?)<\/published>/),
      description: xmlUnescape(pick(/<media:description>([\s\S]*?)<\/media:description>/)),
      durationSec: null, // feed 不带时长,富化(yt-dlp 元数据)后补
    });
  }
  return entries;
}

/** 角标时长文本("1:10:22"/"9:05")→ 秒;解析不了 = null(不编造,LIVE/首映等角标不是时长)。 */
export function parseDurationText(s) {
  const t = String(s ?? "").trim();
  if (!/^\d+(:\d{2})+$/.test(t)) return null;
  return t.split(":").map(Number).reduce((acc, n) => acc * 60 + n, 0);
}

/**
 * 发现通道②(备胎):频道 /videos 页 HTML → ytInitialData 里深挖 lockupViewModel(2026-07 实抓结构:
 * contentId + contentType=LOCKUP_CONTENT_TYPE_VIDEO + metadata.lockupMetadataViewModel.title.content +
 * 角标 thumbnailBadgeViewModel.text 是时长)。备胎失败必须响亮抛 —— 静默当零条 = 频道悄悄失明。
 */
export function parseVideosPage(html) {
  const m = String(html ?? "").match(/var ytInitialData\s*=\s*(\{[\s\S]*?\});/);
  if (!m) throw new Error("videos 页备胎解析失败:找不到 ytInitialData(consent 墙/结构变了,需人工看)");
  let data;
  try {
    data = JSON.parse(m[1]);
  } catch (e) {
    throw new Error(`videos 页备胎解析失败:ytInitialData 不是合法 JSON(${e.message})`);
  }
  const lockups = [];
  (function walk(o) {
    if (!o || typeof o !== "object") return;
    if (o.lockupViewModel) lockups.push(o.lockupViewModel);
    for (const v of Object.values(o)) walk(v);
  })(data);
  const out = new Map();
  for (const l of lockups) {
    if (!l?.contentId || !String(l.contentType ?? "").includes("VIDEO")) continue;
    let durationSec = null;
    (function findBadge(o) {
      if (durationSec !== null || !o || typeof o !== "object") return;
      if (o.thumbnailBadgeViewModel?.text) {
        const d = parseDurationText(o.thumbnailBadgeViewModel.text);
        if (d !== null) { durationSec = d; return; }
      }
      for (const v of Object.values(o)) findBadge(v);
    })(l.contentImage);
    out.set(l.contentId, {
      videoId: l.contentId,
      title: l.metadata?.lockupMetadataViewModel?.title?.content ?? "",
      publishedAt: "", // /videos 页只有相对时间("7 days ago"),不猜;绝对日期由 seed-talk 的 yt-dlp 元数据补
      description: "", // 同上,判官需要时走富化
      durationSec,
    });
  }
  if (!out.size) throw new Error("videos 页备胎解析失败:ytInitialData 里挖不到任何视频 lockup(结构变了,需人工看)");
  return [...out.values()];
}

/** handle 页 → {channelId, pageTitle}。抠不出 channelId 响亮抛(不猜)。 */
export function extractChannelInfo(html) {
  const h = String(html ?? "");
  const channelId =
    (h.match(/"externalId":"(UC[\w-]+)"/) || [])[1] ??
    (h.match(/rel="canonical" href="https:\/\/www\.youtube\.com\/channel\/(UC[\w-]+)"/) || [])[1];
  if (!channelId) throw new Error("handle 页抠不出 channelId(结构变了/不是频道页)");
  return { channelId, pageTitle: (h.match(/<title>([^<]*)<\/title>/) || [])[1] ?? "" };
}

/** 防钓鱼(ADR 0018.6):handle 解析出的页面 title 必须含配置里的频道名(不区分大小写)。 */
export function verifyChannelTitle(pageTitle, expectedName) {
  return String(pageTitle ?? "").toLowerCase().includes(String(expectedName ?? "").toLowerCase());
}

/** 机器预过滤(规则=数据):返回跳过理由或 null。时长未知不按 minDurationSec 误杀(富化后再判)。 */
export function prefilterSkip(video, filters = {}) {
  const title = String(video?.title ?? "").toLowerCase();
  if (Array.isArray(filters.titleMustInclude) && filters.titleMustInclude.length) {
    if (!filters.titleMustInclude.some((k) => title.includes(String(k).toLowerCase())))
      return `标题不含必需关键词(${filters.titleMustInclude.join("/")})`;
  }
  if (filters.minDurationSec && video?.durationSec != null && video.durationSec < filters.minDurationSec)
    return `时长 ${video.durationSec}s < 下限 ${filters.minDurationSec}s`;
  return null;
}

// 巡航日志终态动作:出现即不再重看该 videoId;可重试动作(judge-failed/seed-failed/meta-failed)不算终态。
const TERMINAL_ACTIONS = new Set(["prefilter-skip", "rejected", "seeded"]);

/** patrol-log.jsonl 行 → Map(videoId → 最后一条 action)。坏行跳过不炸(日志是追加型,允许历史杂音)。 */
export function indexPatrolLog(lines) {
  const idx = new Map();
  for (const line of lines ?? []) {
    try {
      const e = JSON.parse(line);
      if (!e?.videoId || !e?.action) continue;
      // 终态粘性(GLM 20260731-008[6]):同 videoId 一旦有终态,后来的非终态行(如手工补跑失败)不许把它冲掉
      if (TERMINAL_ACTIONS.has(idx.get(e.videoId)) && !TERMINAL_ACTIONS.has(e.action)) continue;
      idx.set(e.videoId, e.action);
    } catch {
      /* 非 JSON 行(损坏/手工注释)不算数 */
    }
  }
  return idx;
}

/** 三层去重:账本 / 已有种子目录 / 巡航日志终态。命中返回是哪层(留痕用),没命中 null。 */
export function dedupSkip(videoId, { ledger, seededIds, logIndex }) {
  if (ledger?.[videoId]) return "ledger";
  if (seededIds?.has(videoId)) return "seeded";
  if (TERMINAL_ACTIONS.has(logIndex?.get(videoId))) return "patrol-log";
  return null;
}

/** 判官原始输出 → {verdict, reason} | null(闲话/代码块里抠 JSON;缺字段/词不对=null,绝不瞎猜放行)。 */
export function parseVerdict(raw) {
  const m = String(raw ?? "").match(/\{[^{}]*"verdict"[^{}]*\}/);
  if (!m) return null;
  try {
    const o = JSON.parse(m[0]);
    if ((o.verdict === "对味" || o.verdict === "不对味") && typeof o.reason === "string")
      return { verdict: o.verdict, reason: o.reason };
  } catch {
    /* fallthrough */
  }
  return null;
}

/** 只有明确「对味」才放行下载(变异哨:这里改宽 = 判官形同虚设,tests/patrol-talks.test.ts 会红)。 */
export function judgeAllows(verdict) {
  return verdict?.verdict === "对味";
}

/** .env 极简解析(KEY=VALUE,#注释,可带双引号);只给 patrol 自己用,不引依赖。 */
export function parseDotEnv(text) {
  const out = {};
  for (const line of String(text ?? "").split("\n")) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!m || line.trim().startsWith("#")) continue;
    let v = m[2];
    if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
    out[m[1]] = v;
  }
  return out;
}

// ── 副作用层 ────────────────────────────────────────────

const nowISO = () => new Date().toISOString();

/** .env(用户自持 key,gitignore)载入 process.env,不覆盖已有。 */
function loadDotEnv() {
  const p = join(ROOT, ".env");
  if (!existsSync(p)) return;
  const env = parseDotEnv(readFileSync(p, "utf8"));
  for (const [k, v] of Object.entries(env)) if (!(k in process.env)) process.env[k] = v;
}

/** 巡航日志:逐事件即时追加(随仓提交;中途崩了已写的不丢)。 */
function logEvent(entry) {
  mkdirSync(SEED_DIR, { recursive: true });
  appendFileSync(PATROL_LOG, JSON.stringify({ ts: nowISO(), ...entry }) + "\n");
}

function sh(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { cwd: ROOT, encoding: "utf8", ...opts });
  if (r.error?.code === "ENOENT") throw new Error(`本机没装 ${cmd}(巡航需要 node/git/yt-dlp/gh/python3)`);
  return r;
}

function shOrThrow(cmd, args, opts = {}) {
  const r = sh(cmd, args, opts);
  if (r.status !== 0) throw new Error(`${cmd} ${args[0] ?? ""} 失败(exit ${r.status}):${(r.stderr || r.stdout || "").slice(-400)}`);
  return r;
}

async function fetchText(url) {
  const res = await fetch(url, { redirect: "follow", headers: BROWSER_HEADERS });
  return { ok: res.ok, status: res.status, text: res.ok ? await res.text() : "" };
}

/** 订阅条目 → channelId。有 channelId 直用;只有 handle 时解析并防钓鱼校验(ADR 0018.6),不过校验响亮抛。 */
async function resolveChannelId(sub) {
  if (sub.channelId) return sub.channelId;
  const url = `https://www.youtube.com/@${String(sub.handle).replace(/^@/, "")}`;
  const { ok, status, text } = await fetchText(url);
  if (!ok) throw new Error(`handle 页取不到(HTTP ${status}):${url}`);
  const { channelId, pageTitle } = extractChannelInfo(text);
  if (!verifyChannelTitle(pageTitle, sub.name))
    throw new Error(`防钓鱼拦截:@${sub.handle} 页面 title「${pageTitle}」不含配置频道名「${sub.name}」——疑似山寨频道,拒用(ADR 0018.6)`);
  console.log(`   handle @${sub.handle} → ${channelId}(title 校验过:${pageTitle})`);
  return channelId;
}

/** 发现:feed 优先,非 200/零条自动切 /videos 页备胎。返回 {via, entries};两条都败往上抛。 */
async function discoverChannel(channelId) {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  const feed = await fetchText(feedUrl);
  if (feed.ok) {
    const entries = parseChannelFeed(feed.text);
    if (entries.length) return { via: "feed", entries };
  }
  console.log(`   feed 不可用(HTTP ${feed.status}${feed.ok ? "/零条" : ""})→ 切 /videos 页备胎`);
  const page = await fetchText(`https://www.youtube.com/channel/${channelId}/videos?hl=en`);
  if (!page.ok) throw new Error(`feed(HTTP ${feed.status})与 /videos 页(HTTP ${page.status})双双取不到`);
  return { via: "videos-page", entries: parseVideosPage(page.text) };
}

/** 子进程代理口径:不写死 7877;有环境代理就透传,没有就显式关掉 seed-talk 的开发机默认。 */
function childProxyEnv() {
  return {
    ...process.env,
    SEED_TALK_PROXY: process.env.SEED_TALK_PROXY ?? process.env.https_proxy ?? process.env.HTTPS_PROXY ?? "",
  };
}

/** 富化:yt-dlp 元数据(--no-download,不烧流量)补 简介/时长——feed 无时长、videos 页无简介,判官两样都要。 */
function enrichVideo(video) {
  const r = shOrThrow("yt-dlp", ["--no-download", "--no-playlist", "--dump-single-json",
    `https://www.youtube.com/watch?v=${video.videoId}`], { env: childProxyEnv() });
  const j = JSON.parse(r.stdout);
  return {
    ...video,
    title: video.title || j.title || "",
    description: video.description || j.description || "",
    durationSec: video.durationSec ?? j.duration ?? null,
    publishedAt: video.publishedAt || String(j.upload_date ?? ""),
  };
}

/** 品味判官:GLM 读 标题+简介+时长,按品味档案(运行时读,活文档)+ 频道提示判。返回原始输出文本。 */
function askJudge(video, sub) {
  // 长度保险(GLM 20260731-008[4]):品味档案是活文档,失控膨胀会把判官上下文撑爆成持续 judge-failed;
  // 截断响亮警告(档案现 ~4KB,20KB=5 倍余量,截到=该瘦身了)
  let taste = readFileSync(TASTE_FILE, "utf8");
  if (taste.length > 20000) {
    console.error(`   ⚠️ 品味档案超 20KB(${taste.length}),截断喂判官——档案该瘦身了`);
    taste = taste.slice(0, 20000);
  }
  const system = [
    "你是「英文播客中文精华知识库」的选题品味判官。下面是品味档案(唯一判断依据,活文档):",
    "────────────────────────",
    taste,
    "────────────────────────",
    `本频道(${sub.name})特有提示:${sub.filters.judgeHint ?? "无"}`,
    '只输出一行 JSON:{"verdict":"对味"|"不对味","reason":"一句话理由"}。',
    '拿不准深浅/边界时判「不对味」,reason 以「拿不准:」开头 —— 巡航日志有人工复核,宁可漏勿错下。',
  ].join("\n");
  const input = [
    `频道:${sub.name}`,
    `标题:${video.title}`,
    `时长:${video.durationSec != null ? Math.round(video.durationSec / 60) + " 分钟" : "未知"}`,
    `简介:${String(video.description ?? "").slice(0, 1200) || "(无)"}`,
  ].join("\n");
  // 仓库自带 tools/glm-ask(key 读 ZHIPU_API_KEY env 或 ~/.config/zhipu/api_key;.env 已由 loadDotEnv 注入)
  // token 预算与 taste-judge 共用同一常量(drift #82:原写死 200 会把 JSON 截断成认不出 → 判官全线失效)
  const r = sh("python3", [join(ROOT, "tools/glm-ask"), "--model", JUDGE_MODEL, "--system", system, "--max-tokens", String(JUDGE_MAX_TOKENS), input]);
  if (r.status !== 0) throw new Error(`glm-ask exit ${r.status}:${(r.stderr || "").slice(-200)}`);
  return r.stdout;
}

/** git 收尾:只动 data/talks-seed;commit → pull --rebase → push,3 次仍败响亮留痕+非零退出,绝不硬推。 */
function gitFinalize() {
  if (!sh("git", ["status", "--porcelain", "data/talks-seed"]).stdout.trim()) {
    console.log("\n收尾:data/talks-seed 无改动,不提交。");
    return true;
  }
  shOrThrow("git", ["add", "data/talks-seed"]);
  // Mac mini 是干净 clone、不装本仓 hooks(gate-all 的音频欠账在任何本地 checkout 必红,drift #38 口径);普通 commit 即可
  shOrThrow("git", ["commit", "-m", "[C7 🤖] 订阅巡航:自动发现+品味判官留痕+种子入仓 (US-4, US-11)"]);
  for (let i = 1; i <= 3; i++) {
    const pull = sh("git", ["pull", "--rebase", "origin", "main"]);
    if (pull.status === 0 && sh("git", ["push", "origin", "HEAD:main"]).status === 0) {
      console.log("收尾:已推仓(cron 例行班次将自动接管种子,ADR 0018.5)。");
      return true;
    }
    sh("git", ["rebase", "--abort"]);
    console.error(`收尾 push 第 ${i} 次失败,5s 后重试`);
    spawnSync("sleep", ["5"]);
  }
  logEvent({ action: "push-failed", videoId: null, error: "pull --rebase + push 连败 3 次;种子已在本地提交,下轮巡航随新提交重推" });
  console.error("::error::收尾 push 连败 3 次——种子在本地不丢,但云端看不到;下轮重试,必要时人工介入");
  return false;
}

async function main() {
  const argv = process.argv.slice(2);
  const flags = new Set(argv);
  const num = (name, dflt) => {
    const i = argv.indexOf(name);
    return i >= 0 ? Number(argv[i + 1]) || dflt : dflt;
  };
  const discoverOnly = flags.has("--discover-only");
  const judgeSample = num("--judge-sample", 0);
  const seedLimit = num("--limit", 0);
  const smoke = discoverOnly || judgeSample > 0; // 烟测模式:不写日志不落种不动 git

  loadDotEnv();
  const subs = loadSubscriptions();

  if (!smoke) {
    // 上轮崩溃/败推可能留下未提交的日志/种子改动 —— 脏工作区会让 pull --rebase 拒跑,
    // 不收拾就是每轮开局必败的死循环(GLM 20260731-008[3] 触发的邻近真洞):先收进一个提交再同步
    if (sh("git", ["status", "--porcelain", "data/talks-seed"]).stdout.trim()) {
      console.log("开局:发现上轮遗留的种子/日志改动,先补提交再同步");
      shOrThrow("git", ["add", "data/talks-seed"]);
      shOrThrow("git", ["commit", "-m", "[C7 🤖] 订阅巡航:上轮遗留种子/日志补提交 (US-4, US-11)"]);
    }
    // 开局先同步:云端处理完会推进演讲账本(pipeline-state.json),陈旧账本 = 白判重下
    const pull = sh("git", ["pull", "--rebase", "origin", "main"]);
    if (pull.status !== 0) {
      sh("git", ["rebase", "--abort"]);
      logEvent({ action: "git-pull-failed", videoId: null, error: (pull.stderr || "").slice(-300) });
      console.error("::error::开局 git pull --rebase 失败,账本可能陈旧,本轮中止(留痕已写)");
      process.exit(1);
    }
  }

  const ledger = (() => {
    try {
      return JSON.parse(readFileSync(STATE_FILE, "utf8")).talkVideoIds ?? {};
    } catch {
      return {};
    }
  })();
  const seededIds = new Set(
    !existsSync(SEED_DIR)
      ? []
      : readdirSync(SEED_DIR, { withFileTypes: true })
          .filter((d) => d.isDirectory() && existsSync(join(SEED_DIR, d.name, "seed.json")))
          .map((d) => d.name),
  );
  const logIndex = indexPatrolLog(existsSync(PATROL_LOG) ? readFileSync(PATROL_LOG, "utf8").split("\n").filter(Boolean) : []);

  // ── 发现 + 去重 + 预过滤 ──
  const candidates = [];
  const account = { discovered: 0, deduped: 0, prefiltered: 0, rejected: 0, seeded: 0, failed: 0 };
  for (const sub of subs) {
    console.log(`\n══ 频道:${sub.name}`);
    let via, entries;
    try {
      const channelId = await resolveChannelId(sub);
      ({ via, entries } = await discoverChannel(channelId));
    } catch (e) {
      console.error(`   ❌ 发现失败:${e.message}`);
      if (!smoke) logEvent({ action: "discover-error", channel: sub.key, videoId: null, error: e.message });
      account.failed++;
      continue;
    }
    console.log(`   通道=${via},拿到 ${entries.length} 条`);
    account.discovered += entries.length;
    for (const video of entries) {
      const dup = dedupSkip(video.videoId, { ledger, seededIds, logIndex });
      if (dup) {
        account.deduped++;
        continue; // 终态早已留痕/记账,静默跳过,日志不刷屏
      }
      const pre = prefilterSkip(video, sub.filters);
      if (pre) {
        console.log(`   ⏭ 预过滤:${video.videoId}「${video.title}」——${pre}`);
        if (!smoke) logEvent({ action: "prefilter-skip", channel: sub.key, videoId: video.videoId, title: video.title, reason: pre });
        account.prefiltered++;
        continue;
      }
      candidates.push({ sub, video });
    }
  }
  console.log(`\n发现收账:新发现 ${account.discovered} / 去重跳过 ${account.deduped} / 预过滤 ${account.prefiltered} / 待判官 ${candidates.length}`);
  if (discoverOnly) {
    candidates.forEach(({ sub, video }) =>
      console.log(`   → [${sub.key}] ${video.videoId}  ${video.durationSec != null ? Math.round(video.durationSec / 60) + "min" : "?min"}  ${video.title}`),
    );
    console.log("(--discover-only:到此为止,不判官不下载不动 git)");
    return;
  }

  // ── 判官 + 落种 ──
  let judged = 0;
  for (const { sub, video } of candidates) {
    if (judgeSample > 0 && judged >= judgeSample) break;
    if (seedLimit > 0 && account.seeded >= seedLimit) {
      console.log(`   （--limit ${seedLimit} 已满,余下 ${candidates.length - judged} 条留下轮)`);
      break;
    }
    let full = video;
    try {
      if (!full.description || full.durationSec == null) full = enrichVideo(full);
    } catch (e) {
      console.error(`   ⚠️ ${video.videoId} 元数据富化失败(可重试):${e.message.slice(0, 200)}`);
      if (!smoke) logEvent({ action: "meta-failed", channel: sub.key, videoId: video.videoId, title: video.title, error: e.message.slice(0, 300) });
      account.failed++;
      continue;
    }
    const pre = prefilterSkip(full, sub.filters); // 富化补齐时长后,minDurationSec 才真正判得了
    if (pre) {
      console.log(`   ⏭ 预过滤(富化后):${full.videoId}「${full.title}」——${pre}`);
      if (!smoke) logEvent({ action: "prefilter-skip", channel: sub.key, videoId: full.videoId, title: full.title, reason: pre });
      account.prefiltered++;
      continue;
    }
    let verdict = null;
    try {
      verdict = parseVerdict(askJudge(full, sub));
    } catch (e) {
      verdict = null;
      console.error(`   ⚠️ ${full.videoId} 判官调用失败:${e.message.slice(0, 200)}`);
    }
    judged++;
    if (!verdict) {
      if (!smoke) logEvent({ action: "judge-failed", channel: sub.key, videoId: full.videoId, title: full.title, error: "判官不可达或输出解析不出(可重试)" });
      account.failed++;
      continue;
    }
    const mins = full.durationSec != null ? Math.round(full.durationSec / 60) : null;
    console.log(`   ⚖️ [${sub.key}] ${full.videoId}(${mins ?? "?"}min)「${full.title}」→ ${verdict.verdict}:${verdict.reason}`);
    if (judgeSample > 0) continue; // 烟测:只看判定,不留痕不下载
    if (!judgeAllows(verdict)) {
      logEvent({ action: "rejected", channel: sub.key, videoId: full.videoId, title: full.title, durationSec: full.durationSec, verdict: verdict.verdict, reason: verdict.reason });
      account.rejected++;
      continue;
    }
    // 对味 → 复用既有 seed-talk(下载最佳音频 + 上传 Release asset + 落 seed.json;其内部幂等/账本判重照旧)
    console.log(`   ⬇️ 对味,调 seed-talk 落种…`);
    const r = sh("node", [join(ROOT, "scripts/seed-talk.mjs"), `https://www.youtube.com/watch?v=${full.videoId}`],
      { env: childProxyEnv(), stdio: ["ignore", "inherit", "inherit"] });
    const seedPath = join(SEED_DIR, full.videoId, "seed.json");
    const seedOk = r.status === 0 && existsSync(seedPath) && JSON.parse(readFileSync(seedPath, "utf8")).audio_asset_url;
    if (seedOk) {
      logEvent({ action: "seeded", channel: sub.key, videoId: full.videoId, title: full.title, durationSec: full.durationSec, verdict: verdict.verdict, reason: verdict.reason });
      account.seeded++;
    } else {
      logEvent({ action: "seed-failed", channel: sub.key, videoId: full.videoId, title: full.title, verdict: verdict.verdict, reason: verdict.reason, error: `seed-talk exit ${r.status}/种子未就绪(可重试)` });
      account.failed++;
    }
  }

  console.log(`\n══ 巡航收账:落种 ${account.seeded} / 不对味 ${account.rejected} / 预过滤 ${account.prefiltered} / 失败可重试 ${account.failed} / 去重 ${account.deduped}`);
  if (judgeSample > 0) {
    console.log("(--judge-sample:只判不落种不留痕不动 git)");
    return;
  }

  const pushed = gitFinalize();
  if (!pushed || account.failed > 0) process.exit(1); // 响亮:launchd 日志里非零一眼可见;种子/日志已尽量保全
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  main().catch((e) => {
    console.error(`\n❌ 巡航失败:${e.message}`);
    try {
      logEvent({ action: "patrol-crashed", videoId: null, error: String(e?.message ?? e).slice(0, 300) });
    } catch {
      /* 日志都写不了就只剩 stderr 了 */
    }
    process.exit(1);
  });
}
