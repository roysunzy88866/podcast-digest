// C7b 无人值守 · 编排器(Scenario 2)
// RSS 去重 → 只向前看的新访谈集(drift #22:历史 backlog 不碰)→ 逐集跑完整链 → 全局重建 → gate-all 全过才算成。
// 现有单步脚本各吃 <集目录>/扫全库;本编排器只负责「挑新集 + 按序驱动 + 失败不污染」,不重写各步逻辑。
//
// 用法:
//   node scripts/run-pipeline.mjs --seed     # 设站基线:把当前 feed 最新集时间记为 cutoff,不处理任何集
//   node scripts/run-pipeline.mjs            # 正常跑:处理 cutoff 之后的新访谈集
//   node scripts/run-pipeline.mjs --dry-run  # 只打印会处理哪些集,不真跑(省钱、CI 干验)
//
// 纯逻辑(parseFeed/isInterview/deriveId/selectNew)导出供单测;副作用在 main()。
import { readFileSync, existsSync, readdirSync, writeFileSync, mkdirSync, renameSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { xmlUnescape } from "./build-feed.mjs"; // C9:Simplecast 标题/URL 不走 CDATA,带 &apos;/&amp; 实体(有 isMain 守卫,import 无副作用)

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// C8/C9 · 源清单(品味校准后只抓 🟢 高对味源,真相源 需求共创/内容品味档案.md v1)。
// 每个源:{ key(id 前缀), name(卡片显示), feedUrl, archiveFile?(补历史), asr?(无官方稿源的转写路线) }。
// 已退役(停抓,内容品味档案.md):Latent Space(🟡 混杂:AINews 水贴 + 模型发布 → 砍)。
// 待接(非本切片):Y Combinator(YouTube 抓取坎);How I AI 不用接(集子经 Lenny's feed 分发,已覆盖)。
export const SOURCES = [
  // feedUrl = www RSS(最近 20 条,云 runner 200):日常 cron 只向前看够用。
  // archiveFile = 本机备好的全历史列表(drift #28):**--backfill 补历史读它**。
  //   为何 vendored:api.substack 全 353 集 RSS 对 runner 403 封 IP;www archive JSON 只返文本 newsletter、无播客集。
  //   两条云端路都拿不到播客历史 → 本机 curl(走代理 200)拉 353 集列表存进仓,runner 读列表 + 逐集抓集页(集页 runner 可达)。
  //   刷新:本机重跑 tools/refresh-archive(或 curl api.substack RSS→parseFeed→写此文件)。历史集不变,新集靠 cron 走 www RSS。
  { key: "lennys", name: "Lenny's Podcast", feedUrl: "https://www.lennysnewsletter.com/feed", archiveFile: "data/lennys-podcast-archive.json" },
  // C9:a16z 无官方稿(单集页实测 0 处 transcript)→ asr:"whisperx"(processEpisode 直走 whisperX,
  // 免费 Actions runner 转写,P1 已核验 run 30075152246)。只向前看,历史回填由用户点名(品味边界,Gherkin Scenario 3)。
  { key: "a16z", name: "The a16z Show", feedUrl: "https://feeds.simplecast.com/JGE3yC0V", asr: "whisperx" },
  // C10 · 第一梯队六源(2026-07-24 用户拍板,真相源 需求共创/调研-新源候选-2026-07-24.md;feed 均实探验证):
  // pg = Substack 官方稿(P1 真取验同构:1742 段/词级时间戳 100%),零转写费,同 lennys 路线。
  // feedUrl 用 www(播客帖带 audio enclosure,实探 2026-07-24)——api.substack 域 403 封 runner IP(drift #28 教训),不用。
  { key: "pg", name: "Product Growth Podcast", feedUrl: "https://www.news.aakashg.com/feed" },
  // 以下五源无官方稿 → whisperX。trainingdata/bigtech 的 item link 是主页(Megaphone 通例)→ deriveId 标题回退。
  { key: "yc", name: "Y Combinator Startup Podcast", feedUrl: "https://anchor.fm/s/8c1524bc/podcast/rss", asr: "whisperx" },
  { key: "mad", name: "The MAD Podcast", feedUrl: "https://anchor.fm/s/f2ee4948/podcast/rss", asr: "whisperx" },
  { key: "trainingdata", name: "Training Data", feedUrl: "https://feeds.megaphone.fm/trainingdata", asr: "whisperx" },
  { key: "bigtech", name: "Big Technology Podcast", feedUrl: "https://feeds.megaphone.fm/LI3617121267", asr: "whisperx" },
  { key: "aia16z", name: "AI + a16z", feedUrl: "https://feeds.simplecast.com/Hb_IuXOo", asr: "whisperx" },
  // C16 · 演讲精选通道(ADR 0017):无 feed、manual=只在显式 --talks/点名时跑(cron 零影响)。
  // 种子由本机 scripts/seed-talk.mjs 落 data/talks-seed/<videoId>/seed.json(音频经 Release asset 送云,
  // enclosure 即公开直链)→ 这里读种子、三层去重后走与播客集完全同一 processEpisode 链。无 cutoff 概念。
  { key: "talks", name: "精选演讲", seedDir: "data/talks-seed", asr: "whisperx", manual: true },
];

// 带浏览器 UA:Substack 对裸 node 请求可能 403(drift #28)
const BROWSER_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
  Accept: "*/*",
};

export const STATE_FILE = join(ROOT, "data/pipeline-state.json");
const EPISODES_DIR = join(ROOT, "data/episodes");
const SKIPPED_DIR = join(ROOT, "data/skipped"); // 隔离区:自动跑出失真、闸门拦下的集(不删、留人工看,不发布不重跑,drift #24)

// ── 纯逻辑(可单测,无副作用)──────────────────────────────

/** C5.1:从 RSS item + 源清单派生 meta 显示字段(title_en/podcast/date)。取源后写进 meta.json。 */
export function sourceMetaFields(item, source) {
  return {
    title_en: item.title,
    podcast: source.name ?? source.key,
    date: String(item.pubDateISO || "").slice(0, 10),
    // 官方单集图直链(可能为空;cover.mjs 负责取图与缩放)
    ...(item.imageUrl ? { cover_official_url: item.imageUrl } : {}),
  };
}

/** itunes:duration("HH:MM:SS" / "MM:SS" / 纯秒数)→ 秒;解析不了=0(不编造)。 */
export function parseItunesDuration(s) {
  if (!s) return 0;
  const parts = String(s).trim().split(":").map(Number);
  if (parts.some((n) => !Number.isFinite(n))) return 0;
  return parts.reduce((acc, n) => acc * 60 + n, 0);
}

/** 解析播客 RSS(Substack/Simplecast 同构)→ [{title, link, pubDateISO, hasAudio, enclosureUrl, durationSec}]。只用正则,不引 XML 依赖。*/
export function parseFeed(xml) {
  const items = [];
  const itemRe = /<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/g; // 容忍带属性/命名空间的 <item ...>
  let m;
  while ((m = itemRe.exec(xml))) {
    const body = m[1];
    const pick = (re) => (body.match(re) || [])[1]?.trim() ?? "";
    // Simplecast(a16z)的 title/link 不走 CDATA、带 XML 实体(&apos; 等)→ 统一反转义(CDATA 内容无实体,过一遍无害)
    const title = xmlUnescape(pick(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/));
    const link = xmlUnescape(pick(/<link>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/link>/));
    const pubDate = pick(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const hasAudio = /<enclosure[^>]*type=["']audio/i.test(body);
    // C9 ASR 路线要音频直链
    const enclosureUrl = xmlUnescape(pick(/<enclosure[^>]*url=["']([^"']+)["']/));
    // 单集封面(拍板 #15):8 源中只有 Lenny's / Training Data / YC 三源真有一集一张;
    // 其余源要么没有、要么整季共用同一张节目封面。这里只负责抓,取不到就没有。
    const imageUrl = xmlUnescape(pick(/<itunes:image[^>]*href=["']([^"']+)["']/));
    const d = pubDate ? new Date(pubDate) : null;
    items.push({
      title,
      link,
      pubDateISO: d && !isNaN(+d) ? d.toISOString() : "",
      hasAudio,
      enclosureUrl,
      imageUrl,
      durationSec: parseItunesDuration(pick(/<itunes:duration>([\s\S]*?)<\/itunes:duration>/)),
    });
  }
  return items;
}

/** 集 URL → slug。按源适配(D44⑤):Substack=/p/<slug>,Simplecast=/episodes/<slug>。抠不出=空串。 */
export function slugFromLink(link) {
  return ((link || "").match(/\/(?:p|episodes)\/([^/?#]+)/) || [])[1] || "";
}

/** 是不是要处理的真访谈集?排掉每日 AI 快讯(ainews-…)+ 必须有音频 enclosure。
 *  C10:link 可缺(Megaphone 源新集 item 无 <link>,trainingdata/bigtech 实探)——标题在即可,id 由标题回退派生。 */
export function isInterview(item) {
  if (!item.link && !item.title) return false;
  if (!item.pubDateISO) return false;
  if (!item.hasAudio) return false;
  if (/^ainews-/i.test(slugFromLink(item.link))) return false;
  return true;
}

/**
 * 派集 id = <YYYY-MM-DD>-<source.key>-<slug>(slug 按源从 URL 抠,截断防超长)。无人值守用内部标识,不必人工雅致。
 * C8:前缀取 source.key(去 latent-space 硬编码)。缺 source 直接抛,不静默派 undefined 前缀。
 */
export function deriveId(item, source) {
  if (!source?.key) throw new Error("deriveId 需要 source.key(C8 多源:id 前缀按源)");
  const date = item.pubDateISO ? item.pubDateISO.slice(0, 10) : "unknown-date";
  // C10:Megaphone 类源(trainingdata/bigtech)item link 是主页、无集页 slug → 回退标题派生(D44⑤ 同款病防复发)
  const titleSlug = String(item.title ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  let slug = slugFromLink(item.link) || titleSlug || "";
  slug = slug.toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 40).replace(/^-+|-+$/g, "");
  // 全非 ASCII 标题会被上面吃成空串 → 同日集全撞 "episode"、后来者被 seen 静默跳过(GLM 011[2])。
  // 有标题就用标题哈希兜底(确定性,同题同 id 保重跑去重);真全空才 "episode"。
  if (!slug) slug = item.title ? createHash("sha256").update(String(item.title)).digest("hex").slice(0, 8) : "episode";
  return `${date}-${source.key}-${slug}`;
}

/**
 * 挑出这次要处理的新集:是访谈 + pubDate 严格晚于 cutoff + 不在已处理集里。按时间升序(旧→新)。
 * @param items parseFeed 结果
 * @param sinceISO cutoff(只处理晚于它的);空串=无基线(为安全返回空,逼先 --seed)
 * @param existingIds 已存在的 data/episodes/<id> 集合
 * @param source 当前源(派 id 用其 key)
 */
export function selectNew(items, { sinceISO, existingIds, source }) {
  if (!sinceISO) return []; // 无基线不敢跑全 backlog(drift #22),先 --seed
  const seen = new Set(existingIds);
  return items
    .filter(isInterview)
    .filter((it) => it.pubDateISO > sinceISO)
    .filter((it) => !seen.has(deriveId(it, source)))
    .sort((a, b) => a.pubDateISO.localeCompare(b.pubDateISO));
}

/**
 * C8 一次性回填:取最近 N 集访谈(排 ainews/无音频、去已处理),按旧→新排序供逐集处理。
 * **有意 override「只向前看」(drift #22)**——仅用于评估批(--backfill),日常 cron 仍走 selectNew。
 */
export function selectBackfill(items, { n, existingIds, source }) {
  const seen = new Set(existingIds);
  return items
    .filter(isInterview)
    .filter((it) => !seen.has(deriveId(it, source)))
    .sort((a, b) => b.pubDateISO.localeCompare(a.pubDateISO)) // 最新在前 → 取 top N
    .slice(0, n)
    .sort((a, b) => a.pubDateISO.localeCompare(b.pubDateISO)); // 处理按旧→新(与 selectNew 一致)
}

// ── C16 · talks 源纯逻辑(演讲精选通道,ADR 0017)──────────

/**
 * 本轮要跑哪些源。C17 · ADR 0018.5(授权演进,C16 原「cron 永远排除 manual」口径收窄):
 * 默认(cron/正常班次)排除 manual 源,**但有待处理种子(autoTalks)时 talks 源自动进场**——
 * Mac mini 订阅巡航推种子后不再须人工点火 talks=true;无种子时与 C16 行为一字不差。
 * talks 殿后(SOURCES 里本就排最后):播客新集优先。--talks/--source 显式入口保留(人工批次)。
 * cron 行为的机器保证仍收在这一个函数里,别散到调用点。
 */
export function activeSources(all, { onlyKey, talks, autoTalks } = {}) {
  if (onlyKey) return all.filter((s) => s.key === onlyKey);
  if (talks) return all.filter((s) => s.manual);
  return all.filter((s) => !s.manual || (autoTalks && s.seedDir));
}

/** ADR 0018.5:种子区里「videoId 不在演讲账本」的才算待处理(处理过的种子留在仓里,不算)。 */
export function pendingTalkVideoIds(seedVideoIds, ledger) {
  return (seedVideoIds ?? []).filter((v) => !(ledger ?? {})[v]);
}

/** 标题归一化:小写、非字母数字拉平成单空格(中英标点/破折号/引号全吃)。 */
export function normalizeTitle(s) {
  return String(s ?? "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

// 包含判重的最短长度守卫:归一化后短于它的串不做包含比对(防「ai」之类误伤一切)。
const TITLE_CONTAIN_MIN = 12;

/**
 * 去重第 2 层(ADR 0017):种子标题 vs 库内已完成集 title_en。归一化后相同、或互为包含(带守卫)= 疑似重复。
 * 只报「疑似」,裁决归人——调用方必须响亮报待裁并跳过,绝不自动丢弃。返回命中的库内标题或 null。
 */
export function findTitleDuplicate(title, libraryTitles) {
  const t = normalizeTitle(title);
  if (!t) return null;
  for (const lib of libraryTitles ?? []) {
    const l = normalizeTitle(lib);
    if (!l) continue;
    if (l === t) return lib;
    const [short, long] = t.length <= l.length ? [t, l] : [l, t];
    if (short.length >= TITLE_CONTAIN_MIN && long.includes(short)) return lib;
  }
  return null;
}

/** seed.json → processEpisode 入参 item(enclosure = Release asset 公开直链,whisperX 链零改动)。 */
export function talkItemFromSeed(seed) {
  return {
    title: seed.title,
    link: seed.url ?? "",
    pubDateISO: `${seed.upload_date}T00:00:00.000Z`,
    hasAudio: true,
    enclosureUrl: seed.audio_asset_url ?? null,
    durationSec: seed.duration_sec ?? 0,
  };
}

// 2026-07-31 调度员保险丝(drift #36 口径):每班次演讲种子上限。C17 巡航首轮可能一次落几十条
// 种子,每条 whisperX 转写 20-100 分钟,全塞一班必撞 GitHub runner 6h 上限、run 被杀留一堆半成品。
// 默认写死 3 当保险丝;TALKS_BATCH_CAP 环境变量(workflow talks_cap 输入喂进来)可显式覆写。
const TALKS_BATCH_CAP_DEFAULT = 3;

/**
 * 解析每班种子上限:空/未设 → 默认 3;正整数 → 取值;非法响亮抛(不静默降级,照 backfill 口径)。
 * 只认十进制数字串(与 workflow shell 校验 ^[1-9][0-9]*$ 同一口径;Number() 会放行 1e2/0x10,GLM 20260731-009[3])。
 */
export function resolveTalksCap(raw) {
  if (raw === undefined || raw === null || String(raw).trim() === "") return TALKS_BATCH_CAP_DEFAULT;
  if (!/^[1-9][0-9]*$/.test(String(raw).trim())) throw new Error(`TALKS_BATCH_CAP 非法(需正整数):「${raw}」`);
  return Number(String(raw).trim());
}

/**
 * 终态必记账(修 run 30608504888 lance 漏写):talks 集在 talks 批转瞬失败后,可被同轮/后续
 * 补活链救活上站——补活链原来只清连败账、不写演讲 videoId 账本 → 第 1 层去重对该集永久失效
 * (下轮 selectTalks 因 id 已在 completedIds 判 done,同样不补记)。
 * 此函数 = 演讲账本记账的唯一口径:seedDir 源的集到达终态(成功/失真隔离)时,
 * 按种子反查 videoId 记入 state.talkVideoIds。非 seedDir 源 / 反查不到种子 → 不动,返回 null。
 */
export function recordTalkTerminal(state, id, source, seeds) {
  if (!source?.seedDir) return null;
  const hit = (seeds ?? []).find((s) => deriveId(talkItemFromSeed(s), source) === id);
  if (!hit) return null;
  state.talkVideoIds = state.talkVideoIds ?? {};
  state.talkVideoIds[hit.videoId] = id;
  return hit.videoId;
}

/**
 * 选种(演讲不是访谈,不套 isInterview;无 cutoff——种子存在即待处理,终态靠账本):
 *   第 1 层 videoId 账本(videoLedger:处理成功/隔离终态都记)→ done,绝不再选;
 *   派生 id 撞 existingIds(已完成/已隔离)→ 同样终态跳过;
 *   第 2 层 标题模糊比对 → held 待裁(调用方响亮报,种子原样保留,去留归人);
 *   坏种子(缺 videoId/upload_date)响亮抛,不静默跳;
 *   每班限流(2026-07-31 保险丝):按 upload_date 旧→新(同日按 videoId,顺序确定)取前 cap 条,
 *   超出的进 deferred——种子原样留在种子区、不记账,下一班 autoTalks 自然再进场接着吃。
 * @returns {{picks:[{videoId,id,item,seed}], held:[{videoId,title,matchedTitle,id}], done:string[], deferred:[{videoId,id,item,seed}]}}
 */
export function selectTalks(seeds, { existingIds, videoLedger, libraryTitles, source, cap = resolveTalksCap(process.env.TALKS_BATCH_CAP) }) {
  const seen = new Set(existingIds ?? []);
  const ledger = videoLedger ?? {};
  const picks = [];
  const held = [];
  const done = [];
  for (const seed of seeds ?? []) {
    if (!seed?.videoId) throw new Error(`坏种子:缺 videoId(${JSON.stringify(seed?.title ?? seed)})`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(seed.upload_date ?? "")))
      throw new Error(`坏种子 ${seed.videoId}:upload_date 异常「${seed.upload_date}」(需 YYYY-MM-DD)`);
    const item = talkItemFromSeed(seed);
    const id = deriveId(item, source);
    if (ledger[seed.videoId] || seen.has(id)) {
      done.push(seed.videoId);
      continue;
    }
    const matchedTitle = findTitleDuplicate(seed.title, libraryTitles);
    if (matchedTitle) {
      held.push({ videoId: seed.videoId, title: seed.title, matchedTitle, id });
      continue;
    }
    picks.push({ videoId: seed.videoId, id, item, seed });
  }
  // 同日 tiebreak 用普通比较不用 localeCompare:后者受运行时 locale 影响,跨机器确定性存疑(GLM 20260731-009[5])
  picks.sort(
    (a, b) =>
      a.item.pubDateISO.localeCompare(b.item.pubDateISO) ||
      (String(a.videoId) < String(b.videoId) ? -1 : String(a.videoId) > String(b.videoId) ? 1 : 0),
  );
  const deferred = picks.splice(cap); // 超上限的留后班(splice 就地截断 picks 前 cap 条)
  return { picks, held, done, deferred };
}

/**
 * C8 防呆(GLM 20260720-001[1]):单标量 cutoff 不绑源,换源后旧 cutoff(旧源时间线)对新源无意义,
 * 直接跑会把新源该时间后的**存量旧集**当新集批量处理(烧钱 + 可能发一堆旧集)。
 * 有 cutoff 但不是当前源的 → 逼先 --seed 重设基线。机器拦,不靠人记得(D44④ 从操作规程升级为闸门)。
 */
/**
 * 把一条隔离记录并入持久账本(同 id 只留最新一条:防账本膨胀 + 防同集重录,GLM #5)。
 * 纯函数、就地改 state.skipped;调用方每隔离一集即刻落盘(bug c:原来只在 main 末尾写一次,
 * 中途崩溃/末尾 gate 挂 → 前面已隔离的集全没记账 → 下次重跑当没见过、重新处理重扣钱)。
 */
export function appendSkip(state, entry) {
  state.skipped = (state.skipped ?? []).filter((s) => s.id !== entry.id);
  state.skipped.push(entry);
  return state;
}

// C9 D44①:cutoff 按源(state.cutoffs[key]);该源无基线即逼 seed。
// 覆盖旧「换源防呆」(GLM 20260720-001[1]):别的源的 cutoff 结构上不可能再被当成自己的;
// 也并入旧「无基线拒跑全 backlog」(drift #22)。
export function needsReseed(state, sourceKey) {
  return !state?.cutoffs?.[sourceKey];
}

/** 旧单 cutoff state → v2 按源 cutoffs,无损迁移(cutoffSource 空的更旧版本丢 cutoff 不猜源,保守逼 seed)。 */
export function migrateState(raw) {
  if (!raw || typeof raw !== "object") return { cutoffs: {}, skipped: [] };
  const { sincePubDate, cutoffSource, cutoffs, skipped, ...rest } = raw;
  const out = { ...rest, cutoffs: { ...(cutoffs ?? {}) }, skipped: skipped ?? [] };
  if (sincePubDate && cutoffSource && !out.cutoffs[cutoffSource]) out.cutoffs[cutoffSource] = sincePubDate;
  return out;
}

/** seed 只补缺的源:已有基线绝不顶掉(重复 seed 会把「基线后未处理的集」跳过去=静默丢集)。 */
export function applySeed(state, sourceKey, newestISO) {
  state.cutoffs = state.cutoffs ?? {};
  if (state.cutoffs[sourceKey]) return false;
  state.cutoffs[sourceKey] = newestISO;
  return true;
}

// ── 副作用层 ────────────────────────────────────────────

function readState() {
  if (!existsSync(STATE_FILE)) return migrateState(null);
  try {
    return migrateState(JSON.parse(readFileSync(STATE_FILE, "utf8")));
  } catch {
    return migrateState(null);
  }
}

function writeState(s) {
  mkdirSync(dirname(STATE_FILE), { recursive: true });
  writeFileSync(STATE_FILE, JSON.stringify(s, null, 2) + "\n");
}

/** 已完成集 = data/episodes 有 digest.json(per-集链完成标志)。半成品(取源/翻译到一半失败)不算,下次重试复用缓存(GLM #4)。 */
function completedIds() {
  if (!existsSync(EPISODES_DIR)) return [];
  return readdirSync(EPISODES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(EPISODES_DIR, d.name, "digest.json")))
    .map((d) => d.name);
}

async function fetchFeed(feedUrl) {
  const res = await fetch(feedUrl, { redirect: "follow", headers: BROWSER_HEADERS });
  if (!res.ok) throw new Error(`取 RSS 失败 HTTP ${res.status}: ${feedUrl}`);
  return await res.text();
}

/** 补历史:读本机备好的全历史列表(vendored,drift #28)→ items[](同 parseFeed 结构)。 */
function readArchiveItems(archiveFile) {
  const path = resolve(ROOT, archiveFile);
  if (!existsSync(path)) throw new Error(`补历史列表不存在:${archiveFile}(本机 curl api.substack RSS→parseFeed 生成后提交)`);
  let items;
  try {
    items = JSON.parse(readFileSync(path, "utf8"));
  } catch (e) {
    throw new Error(`补历史列表 ${archiveFile} 解析失败(坏 JSON?):${e.message}`);
  }
  if (!Array.isArray(items)) throw new Error(`补历史列表 ${archiveFile} 不是数组(应为 parseFeed 输出的 item[])`);
  console.log(`   读补历史列表 ${archiveFile}:${items.length} 条(访谈 ${items.filter(isInterview).length})`);
  return items;
}

/** 顺跑一个外部脚本;非 0 退出即抛(fail-fast,坏集不继续污染)。 */
export function run(cmd, args, opts = {}) {
  console.log(`   $ ${cmd} ${args.join(" ")}`);
  // stderr 改捕获(stdout 仍 inherit,主进度实时流):失败时把子进程 stderr 尾部并进抛错 message,
  // 让上层 isContentBlocked 认出 glm-ask 的 [1301] 内容审查 —— 否则错误串只有通用「步骤失败」壳,识别不到。
  // 2026-08-08 云端实证(run 31263975093):原 stdio:"inherit" 下 [1301] 只到控制台、进不了 e.message,
  // 内容审查新路径从不触发、演讲仍死锁 —— 本地单测只喂原始 [1301] 串测不出这层,故补此修 + run() 端到端测试。
  // maxBuffer 放大到 512MB:whisperX/ffmpeg 长 stderr 进度防 ENOBUFS 杀子进程。
  // stdio/encoding/maxBuffer 刻意放 ...opts 之后:内容审查捕获的正确性依赖 stderr=pipe,不许被调用方 opts 覆盖掉
  // (GLM 20260808-006[1] 防御性加固;当前无调用传 opts,纯保险)。
  const r = spawnSync(cmd, args, { cwd: ROOT, ...opts, stdio: ["inherit", "inherit", "pipe"], encoding: "utf8", maxBuffer: 512 * 1024 * 1024 });
  if (r.stderr) process.stderr.write(r.stderr); // 补回 inherit 的可见性(captured 后不再自动显示)
  if (r.status !== 0) throw new Error(`步骤失败(exit ${r.status}): ${cmd} ${args.join(" ")}\n${(r.stderr ?? "").slice(-4000)}`);
}

/** 跑外部脚本,返回是否 0 退出(不抛,用于逐集验证的 skip 判定)。 */
function runOk(cmd, args) {
  console.log(`   $ ${cmd} ${args.join(" ")}`);
  return spawnSync(cmd, args, { cwd: ROOT, stdio: "inherit" }).status === 0;
}

// ══ C14 · 半成品自动补活 ══
// 病根(实证):completedIds 只看「有 digest」→ backfill 跳过;refresh 只翻「有集页」→ 也不碰;
// cron 只向前看(cutoff 已越过)。三条链对「有 digest 无集页」的掉队集互相让位,谁都不管。
// 修法:每轮末尾扫这类目录重走后半链(缓存全复用,不重烧钱);连败 REVIVE_CAP 次停手待人工。

export const REVIVE_CAP = 3;

/** 补活选集(纯逻辑):有 digest 无集页、不在隔离账本、连败没满上限。 */
export function selectRevive(ids, { published, skippedIds, failCounts }) {
  const eligible = ids.filter((id) => !published.has(id) && !skippedIds.has(id));
  return {
    revive: eligible.filter((id) => (failCounts[id] ?? 0) < REVIVE_CAP),
    parked: eligible.filter((id) => (failCounts[id] ?? 0) >= REVIVE_CAP),
  };
}

/** 补活失败记账(成功用 clearRevive 清零;计数落 state 持久化,跨班次生效)。 */
export function noteReviveFail(state, id) {
  state.revive = state.revive ?? {};
  state.revive[id] = (state.revive[id] ?? 0) + 1;
  return state.revive[id];
}

export function clearRevive(state, id) {
  if (state.revive) delete state.revive[id];
}

// ══ 内容审查拦截(GLM [1301])= 确定性终态,非转瞬 ══
// 病根:GLM(智谱)对军事/中美对抗/AI 末日等敏感话题返回 [1301] 拒绝处理,translate/infer-speakers 抛错。
// 原来当「转瞬失败」无限重试 → 演讲永远重选那几条(死锁,饿死后面纯技术演讲)、RSS cutoff 冻结(每跑重烧同一集翻译)。
// 修法(用户 2026-08-08 明选「放弃敏感集」):识别 [1301] → 给 BLOCK_CAP 次宽限(防概率性误拦一次就丢集)后判终态,
//   挪 skipped 账本 + 演讲记 videoId 出队 + RSS 放行 cutoff 推进。被放弃的敏感集落 data/skipped,人工可见可捞。
export const BLOCK_CAP = 2;

/** GLM 内容审查签名:错误串里带方括号 [1301] 或引号 "1301"(JSON 的 code/message 字段),或智谱敏感内容拒答中文原话。
 *  定长正则(无量词/无嵌套 → 无回溯);要求 1301 紧贴 ["[] … ["]] 分隔符,故 hex request_id 里裸露的 1301 不误配
 *  (实测 1301feed / beef1301dead 均 false;GLM 20260808-004[1][2] 反例已跑过)。 */
export function isContentBlocked(errMsg) {
  const s = String(errMsg ?? "");
  return /["\[]1301["\]]/.test(s) || s.includes("系统检测到输入或生成内容");
}

/** 内容审查连拦记账(park 前给 BLOCK_CAP 次宽限;计数落 state 持久化,跨班次生效,同 noteReviveFail 口径)。返回累计次数。 */
export function noteBlockFail(state, id) {
  state.blocked = state.blocked ?? {};
  state.blocked[id] = (state.blocked[id] ?? 0) + 1;
  return state.blocked[id];
}

export function clearBlocked(state, id) {
  if (state.blocked) delete state.blocked[id];
}

/** id 第 11 位起的源段落 ↔ SOURCES.key(id = YYYY-MM-DD-<key>-<slug>)。对不上返回 null 不猜。 */
export function sourceForId(id) {
  const rest = String(id).slice(11); // 跳过 "YYYY-MM-DD-"
  return SOURCES.find((s) => rest === s.key || rest.startsWith(`${s.key}-`)) ?? null;
}

/** 从存量 meta 重建 processEpisode 的入参 item(逐字段来,不编造;转写稿已在,取源会被跳过)。 */
export function reviveItemFromMeta(meta) {
  return {
    title: meta.title_en ?? meta.id ?? "",
    link: "",
    enclosureUrl: null,
    durationSec: meta.duration_sec ?? 0,
    pubDateISO: meta.date ? `${meta.date}T00:00:00.000Z` : "",
  };
}

/**
 * 单个新集的 per-集链(取源→推说话人→翻译→浓缩→判官→规整→抽实体→出稿→配音),末尾**逐集验证**。
 * 产出步骤 fail-fast(抛=转瞬失败,留半成品下次重试);验证(gate 金句三联 + gate-facts 导读事实)fail=失真 → 返回 {ok:false} 交 main 隔离。
 * 返回 {ok, reason}。
 */
function processEpisode(item, id, source) {
  const dir = join("data/episodes", id);
  console.log(`\n▶ 处理新集 ${id}\n   ${item.title}\n   ${item.link}`);
  // ① 取源:whisperx 源(a16z,无官方稿)直走 whisperX ASR(C9,不空跑 fetch-source);
  //    其余源官方稿优先,失败走 AssemblyAI 兜底(drift #14,需 ASSEMBLYAI_API_KEY)
  if (source?.asr === "whisperx") {
    if (existsSync(join(ROOT, dir, "transcript.en.json"))) {
      // 半成品重试复用已有转写稿(设计初衷「留半成品下次重试复用缓存」;不跳过=每次重烧 60-80 分钟 ASR,C10 实证)
      console.log("   复用已有转写稿(半成品重试,跳过 whisperX)");
    } else {
      if (!item.enclosureUrl) throw new Error(`集 ${id} 无 enclosure 直链,whisperX 路线走不了(fail-closed)`);
      run("node", ["scripts/fetch-source-whisperx.mjs", dir, "--transcribe", "--audio-url", item.enclosureUrl, "--duration", String(item.durationSec || 0)]);
    }
  } else if (existsSync(join(ROOT, dir, "transcript.en.json"))) {
    // C14:官方稿源同享「半成品重试复用转写稿」(补活的存量集没有 item.link,取源本也没必要重跑)
    console.log("   复用已有转写稿(半成品重试,跳过取源)");
  } else {
    const fs = spawnSync("node", ["scripts/fetch-source.mjs", item.link, id], { cwd: ROOT, stdio: "inherit" });
    if (fs.status !== 0) {
      console.log("   官方稿取源失败 → 尝试 ASR 兜底(fetch-source-asr)");
      // 修潜伏参数错(C9 顺手,此路径从未真走过):CLI 约定是 <audio_url> <out_dir>,原来传的是集页 URL + 裸 id
      if (!item.enclosureUrl) throw new Error(`集 ${id} 无 enclosure 直链,ASR 兜底走不了(fail-closed)`);
      run("node", ["scripts/fetch-source-asr.mjs", item.enclosureUrl, dir]);
    }
  }
  // C5.1 Scenario 3:显示字段随取源写进 meta(title_en/podcast/date;列表卡与集页要用,此前从没人写 → 首页裸文件名)
  if (source) {
    const metaPath = join(ROOT, dir, "meta.json");
    const meta = { ...JSON.parse(readFileSync(metaPath, "utf8")), ...sourceMetaFields(item, source) };
    // 入库日(用户 2026-08-09:「最新」按加进站的时间排,让新处理的旧日期演讲冒到顶部)。
    // 首次处理时钉一次、之后不覆盖(重跑/refresh 不改),UTC 日期段与 meta.date 同格式好分组。
    if (!meta.added) meta.added = new Date().toISOString().slice(0, 10);
    writeFileSync(metaPath, JSON.stringify(meta, null, 2));
  }
  // 无人值守补人工缺口:GLM 推说话人真名 + grounding 机器校(drift #23),传 RSS 标题当候选名源
  run("node", ["scripts/infer-speakers.mjs", dir, item.title]);
  run("node", ["scripts/translate.mjs", dir]);
  run("node", ["scripts/condense.mjs", dir]);
  run("node", ["scripts/judge-quotes.mjs", dir]);
  run("node", ["scripts/repair-quotes.mjs", dir]); // 规整金句 snap 回逐字/派生时间戳说话人、救不回的丢(C2 步骤④.5)
  run("node", ["scripts/extract-entities.mjs", dir]);

  // 逐集验证(防失真闸门)在出稿/配音**之前** —— 失真集不写集页/音频,隔离时无孤儿产物。
  // gate(金句三联)+ gate-facts(导读事实层)都只读 digest,不需渲染产物。失败=GLM 真失真→交 main 隔离(skip+通知,drift #24)
  console.log(`\n   ── 逐集验证 ${id}(出稿前)──`);
  if (!runOk("node", ["scripts/gate.mjs", dir])) return { ok: false, reason: "金句三联闸门未过(疑拼接/编造/张冠李戴)" };
  if (!runOk("node", ["scripts/gate-facts.mjs", dir])) {
    // change 2B(用户批「单点处理」):失真句先定点救(重写/切除,密度超限自动熔断),救完重验;仍不过才隔离。
    // 一处边角失真不再杀整集——通过标准一分没降(重验仍是同一道闸门)。
    console.log(`   事实层未过 → 定点重写回路(repair-facts:失真句单点救,救不动才隔离)`);
    runOk("node", ["scripts/repair-facts.mjs", dir]); // 修没修好都以下一行重验为准
    if (!runOk("node", ["scripts/gate-facts.mjs", dir]))
      return { ok: false, reason: "导读/实体事实层未过(定点重写后仍未过,或密度熔断)" };
  }

  // C12:嘉宾姓名+职位落 meta(卡片第三行「人名 · 公司职位」的数据源)。放在闸门之后:
  // 职位要回本集中文稿逐字命中,而 repair-facts 可能刚改过 digest —— 抽早了会拿被改掉的措辞去对。
  // 抽不到只留空、不阻塞发布(脚本自己 exit 0)。
  run("node", ["scripts/extract-guest.mjs", dir]);
  run("node", ["scripts/render.mjs", dir]); // 验证过了才出集页
  run("node", ["scripts/tts.mjs", dir]);    // 才配音
  return { ok: true };
}

/** 补齐所有集的音频(audio.mp3 gitignore、CI 检出不带 → 现场补合成;edge-tts 免费)。gate-audio 要集集有音频。
 *  ⚠️ 不在这里判「音频文件在不在」(C15 刀① 连带,与 deploy-site.sh 同款教训 GLM 20260727-002[2]):
 *  云端缓存会取回旧音频,「在就跳过」会挡住 tts 的指纹陈旧检测 → gate-audio「音频陈旧」硬红堵死整线。
 *  正确姿势:有 digest 的集一律交给 tts.mjs,由它按源文本 sha256 自判 —— 没变秒跳(幂等),变了重合成。 */
function ensureAllAudio() {
  if (!existsSync(EPISODES_DIR)) return;
  for (const d of readdirSync(EPISODES_DIR, { withFileTypes: true })) {
    if (!d.isDirectory()) continue;
    const dir = join("data/episodes", d.name);
    if (existsSync(join(ROOT, dir, "digest.json"))) {
      run("node", ["scripts/tts.mjs", dir]); // 缓存命中时它自己打「跳过」,不重复计费
    }
  }
}

/** 全库重建(处理完新集后一次):补齐音频→跨集聚合→出集页→列表→feed→站点 build。gate-all 由 main 收尾。 */
function rebuildAll() {
  console.log("\n▶ 全库重建");
  ensureAllAudio();
  // 每集配图:把集页 og:image 取下来缩存。幂等(图在不重做)、增量(只补缺的)、零 API 调用。
  // 取不到图不该拖垮整条流水线 → runOk 不抛。
  runOk("node", ["scripts/cover.mjs"]);
  run("node", ["scripts/build-entities.mjs"]);
  run("node", ["scripts/build-pages.mjs"]);
  run("node", ["scripts/build-list.mjs"]);
  run("node", ["scripts/build-feed.mjs", "--out", "feed.xml"]);
}

async function main() {
  const argv = process.argv.slice(2);
  const flags = new Set(argv);
  // --backfill N:一次性回填最近 N 集(评估批,override 只向前看)
  const bfIdx = argv.indexOf("--backfill");
  const backfillN = bfIdx >= 0 ? Number(argv[bfIdx + 1]) : 0;
  if (bfIdx >= 0 && (!Number.isInteger(backfillN) || backfillN <= 0)) {
    console.error("⛔ --backfill 需正整数,如 `--backfill 5`。");
    process.exit(2);
  }

  // C9 D44①:多源按源循环 + 按源 cutoff。--source <key> 可点名只跑一个源;
  // --backfill 在多源时必须 --source 点名(防「回填」笼统砸到所有源批量烧钱)。
  // C16:--talks 只跑 manual 源(演讲种子批)。
  // C17 · ADR 0018.5:cron 例行班次发现「有待处理种子」(Mac mini 巡航推上来的)时 talks 源自动进场;
  //   无待处理种子时默认行为与 C16 一字不差(排除 manual)。相应测试 tests/run-pipeline-talks.test.ts 已同步注明出处。
  const srcIdx = argv.indexOf("--source");
  const onlyKey = srcIdx >= 0 ? argv[srcIdx + 1] : null;
  const stateForAuto = readState();
  const talksSeedDir = SOURCES.find((s) => s.seedDir)?.seedDir;
  const seedVideoIds = talksSeedDir && existsSync(join(ROOT, talksSeedDir))
    ? readdirSync(join(ROOT, talksSeedDir), { withFileTypes: true })
        .filter((d) => d.isDirectory() && existsSync(join(ROOT, talksSeedDir, d.name, "seed.json")))
        .map((d) => d.name)
    : [];
  const pendingTalks = pendingTalkVideoIds(seedVideoIds, stateForAuto.talkVideoIds);
  if (pendingTalks.length) console.log(`🎤 检测到 ${pendingTalks.length} 条待处理演讲种子 → talks 源自动进场(ADR 0018.5)`);
  const sources = activeSources(SOURCES, { onlyKey, talks: flags.has("--talks"), autoTalks: pendingTalks.length > 0 });
  if (onlyKey && !sources.length) {
    console.error(`⛔ 未知源「${onlyKey}」。可选:${SOURCES.map((s) => s.key).join(", ")}`);
    process.exit(2);
  }
  // C17:多源守卫放前——autoTalks 进场后「--backfill 无 --source」会先撞 seedDir 守卫,报错会误导
  if (backfillN > 0 && SOURCES.length > 1 && !onlyKey) {
    console.error("⛔ 多源配置下 --backfill 必须配 --source <key> 点名回填哪个源(防笼统批量烧钱)。");
    process.exit(2);
  }
  if (backfillN > 0 && sources.some((s) => s.seedDir)) {
    console.error("⛔ talks 源无回填概念(种子存在即待处理),--backfill 不适用。");
    process.exit(2);
  }

  // --ensure-audio:只补齐已发布集缺失音频(CI 检出不带 gitignore 音频;refresh 分支回滚集在
  // runner 上没音频,gate-audio 必挂 —— refresh=all 首跑 18 条实测)。不取源不处理内容。
  if (flags.has("--ensure-audio")) {
    ensureAllAudio();
    return;
  }

  const state = stateForAuto; // C17:autoTalks 检测已读过同一份,中间无写,复用防两份漂移

  if (flags.has("--seed")) {
    // 设基线:cutoff = 该源 feed 最新访谈集时间 → 之后只处理更新的(历史 backlog 不碰,drift #22)。
    // 只补缺的源:已有基线绝不顶掉(重复 seed = 把基线后未处理的集静默跳过,不许)。
    for (const source of sources) {
      if (source.seedDir) {
        console.log(`ℹ️ ${source.key} 是种子驱动源(无 feed/cutoff 概念),--seed 不适用,跳过。`);
        continue;
      }
      const items = parseFeed(await fetchFeed(source.feedUrl));
      const newest = items.filter(isInterview).map((i) => i.pubDateISO).sort().at(-1) || new Date().toISOString();
      if (applySeed(state, source.key, newest)) console.log(`✅ 已设 ${source.key} 基线 cutoff = ${newest}(晚于它的访谈集才会被处理)。`);
      else console.log(`ℹ️ ${source.key} 已有基线 ${state.cutoffs[source.key]},不动(seed 只补缺)。`);
    }
    writeState(state);
    return;
  }

  const dryRun = flags.has("--dry-run");
  const sourceRun = await runAllSources(sources, (source) =>
    processSource(source, state, { backfillN, dryRun }),
  );
  let totalClean = sourceRun.clean;
  let totalSkipped = sourceRun.skipped;

  // C14:补活掉队半成品(有 digest 无集页)。放在正常班次之后:新集优先。
  // **无论上面的源成没成都要跑** —— 它是安全网,不能被自己要防的故障挡在门外(run 30446551961 血账)。
  {
    const r = revivePass(state, { onlyKey, dryRun });
    totalClean += r.clean;
    totalSkipped += r.skipped;
  }

  if (totalClean > 0) {
    rebuildAll();
    console.log("\n▶ gate-all(全闸门,全过才允许发布)");
    run("node", ["scripts/gate-all.mjs"]); // 干净集应全过;仍挂=兜底 fail-safe(不部署)
    console.log(`\n✅ ${totalClean} 干净集过 gate-all,可发布;skip ${totalSkipped} 集。`);
  } else {
    console.log("\n✅ 无干净可发的新集(全被隔离/无新集)。不部署,线上保持上一版。");
  }

  // 源失败在这里才致命:让 run 红(GitHub 自动发告警邮件),但发布与账本已各就各位、补活已跑过
  if (sourceRun.errors.length) {
    const names = sourceRun.errors.map((e) => `${e.key}(${e.message})`).join("; ");
    throw new Error(`${sourceRun.errors.length} 个源本轮失败:${names}`);
  }
}

/**
 * C14 修(2026-07-29 实账 run 30446551961):逐源跑,**单源抛错不打断其余源、也不打断补活**,
 * 错误收集起来在收尾处响亮报出并让整轮非零退出。
 * 病根:补活是安全网,却被「新集处理必须成功」绑架 —— 而网络抖动(GLM fetch failed)
 * 正是产生掉队集的原因本身,等于让故障把自己的解药关在门外。
 * @param runOne 注入的单源处理函数(生产传 processSource 的包装)
 */
export async function runAllSources(sources, runOne) {
  let clean = 0;
  let skipped = 0;
  const errors = [];
  for (const source of sources) {
    try {
      const r = await runOne(source);
      clean += r.clean;
      skipped += r.skipped;
    } catch (e) {
      // 响亮但不致命:本源这轮作废,其余源与补活照常。
      // ⚠️ 不写 e.message —— 抛的不是 Error 时(库里 throw 字符串/null)会打出「失败:undefined」,
      // 那正好把这段代码存在的意义(让失败看得见)抹掉(GLM 20260730-001[1] 实证)。
      const why = String(e?.message ?? e);
      console.error(`::error::源 ${source.key} 本轮失败(其余源与补活继续):${why}`);
      errors.push({ key: source.key, message: why });
    }
  }
  return { clean, skipped, errors };
}

/** 读种子区全部 seed.json(无目录 → []);talks 批与补活链共用同一读法。 */
function readTalkSeeds(source) {
  const seedRoot = join(ROOT, source.seedDir);
  if (!existsSync(seedRoot)) return [];
  return readdirSync(seedRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(seedRoot, d.name, "seed.json")))
    .map((d) => JSON.parse(readFileSync(join(seedRoot, d.name, "seed.json"), "utf8")));
}

/**
 * 把一集固化为终态隔离(内容审查放弃专用,与失真隔离同一套动作):
 * 挪 data/skipped(半成品目录若在)+ 落 skip 账本(持久去重+通知)+ talks 集记 videoId 出队 + 清连拦账。
 * recordTalkTerminal 对非 seedDir 源自返回 null(RSS 无害)。调用方随后照常 writeState/推进 cutoff。
 */
function parkSkipped(state, id, item, source, reason) {
  const from = join(EPISODES_DIR, id);
  if (existsSync(from)) {
    mkdirSync(SKIPPED_DIR, { recursive: true });
    const to = join(SKIPPED_DIR, id);
    if (existsSync(to)) rmSync(to, { recursive: true, force: true });
    renameSync(from, to);
    writeFileSync(join(to, "skip-reason.txt"), `${reason}\n${item.title}\n${item.link ?? ""}\n`);
  }
  appendSkip(state, { id, reason, title: item.title, pubDate: item.pubDateISO });
  recordTalkTerminal(state, id, source, source.seedDir ? readTalkSeeds(source) : []);
  clearBlocked(state, id);
  writeState(state);
}

/**
 * C14 补活一轮:扫「有 digest 无集页」的掉队集,重走后半链。闸门与新集完全同一道;
 * 失真照隔离,转瞬失败记连败账(REVIVE_CAP 次停手待人工)。返回 {clean, skipped} 计数。
 * 终态(成功/隔离)若是 talks 集 → 必补记演讲 videoId 账本(recordTalkTerminal,lance 漏写修)。
 */
function revivePass(state, { onlyKey, dryRun }) {
  // 已发布的过滤交给 selectRevive 本人(GLM 20260729-003[3]:在这儿预过滤会把防线架空成死代码)
  const ids = completedIds();
  const scoped = onlyKey ? ids.filter((id) => sourceForId(id)?.key === onlyKey) : ids;
  const { revive, parked } = selectRevive(scoped, {
    published: new Set(ids.filter((id) => existsSync(join(ROOT, "samples", `${id}.md`)))),
    skippedIds: new Set((state.skipped ?? []).map((s) => s.id)),
    failCounts: state.revive ?? {},
  });
  parked.forEach((id) => console.error(`🅿️ 补活停手(连败 ${state.revive?.[id]} 次,需人工;清 state.revive 恢复资格):${id}`));
  if (!revive.length) {
    if (!parked.length) console.log("\n✅ 补活:无掉队半成品。");
    return { clean: 0, skipped: 0 };
  }
  console.log(`\n══ 补活:${revive.length} 个掉队半成品(有 digest 无集页):`);
  revive.forEach((id) => console.log(`   - ${id}(已败 ${state.revive?.[id] ?? 0} 次)`));
  if (dryRun) {
    console.log("（--dry-run:仅列出,不真跑)");
    return { clean: 0, skipped: 0 };
  }

  let clean = 0;
  let skipped = 0;
  for (const id of revive) {
    const source = sourceForId(id);
    if (!source) {
      console.error(`   ⚠️ ${id} 对不上任何已配置源(不猜,跳过;需人工看)`);
      continue;
    }
    const item = reviveItemFromMeta(JSON.parse(readFileSync(join(EPISODES_DIR, id, "meta.json"), "utf8")));
    let res;
    try {
      res = processEpisode(item, id, source);
    } catch (e) {
      const n = noteReviveFail(state, id);
      writeState(state); // 即刻落盘:后续崩了也不丢连败账(同 appendSkip 口径)
      console.error(`   ⚠️ ${id} 补活又转瞬失败(第 ${n}/${REVIVE_CAP} 次):${e.message}`);
      skipped += 1;
      continue;
    }
    if (res.ok) {
      clearRevive(state, id);
      const vid = recordTalkTerminal(state, id, source, source.seedDir ? readTalkSeeds(source) : []);
      if (vid) console.log(`   🧾 演讲账本补记 ${vid} → ${id}(补活终态必记,防 lance 类漏写)`);
      writeState(state);
      clean += 1;
      console.log(`   ✅ ${id} 补活成功(连败账已清零)`);
    } else {
      // 失真被拦 → 与正常班次同一套隔离(挪 skipped + 账本),补活不放水也不特殊
      mkdirSync(SKIPPED_DIR, { recursive: true });
      const to = join(SKIPPED_DIR, id);
      if (existsSync(to)) rmSync(to, { recursive: true, force: true });
      renameSync(join(EPISODES_DIR, id), to);
      writeFileSync(join(to, "skip-reason.txt"), `${res.reason}\n${item.title}\n(补活重验被拦)\n`);
      clearRevive(state, id);
      appendSkip(state, { id, reason: `补活重验被拦:${res.reason}`, title: item.title, pubDate: item.pubDateISO });
      recordTalkTerminal(state, id, source, source.seedDir ? readTalkSeeds(source) : []); // 隔离也是终态:talks 集必记账
      writeState(state);
      skipped += 1;
      console.log(`   ⛔ ${id} 补活重验被拦,隔离:${res.reason}`);
    }
  }
  console.log(`🔔 补活收账:成功 ${clean} / 失败或隔离 ${skipped} / 停手 ${parked.length}`);
  return { clean, skipped };
}

/**
 * C16 · talks 源一轮:读种子区 → 三层去重(videoId 账本 / seen / 标题待裁)→ 逐条走完全同一 processEpisode 链。
 * 无 cutoff(种子存在即待处理);终态(成功/失真隔离)记 videoId 进 state.talkVideoIds,转瞬失败不记、下次重试。
 * 标题疑似重复 = 响亮报「待裁」并跳过:种子原样保留、不进隔离账本、不记 videoId——去留由人裁(ADR 0017 第 2 层)。
 */
function processTalksSource(source, state, { dryRun }) {
  console.log(`\n══ 源:${source.key}(种子区 ${source.seedDir})`);
  const seeds = readTalkSeeds(source);
  if (!seeds.length) {
    console.log(`✅ ${source.key} 无种子(本机 scripts/seed-talk.mjs 落种后 commit 触发)。`);
    return { clean: 0, skipped: 0 };
  }
  // 库内标题 = 已完成集(有 digest)的 meta.title_en——比「已发布」更宽,半成品也算库内,防窗口期重投
  const completed = completedIds();
  const libraryTitles = completed
    .map((id) => {
      try {
        return JSON.parse(readFileSync(join(EPISODES_DIR, id, "meta.json"), "utf8")).title_en ?? "";
      } catch {
        return "";
      }
    })
    .filter(Boolean);
  const cap = resolveTalksCap(process.env.TALKS_BATCH_CAP); // 解析一次,选种与日志共用(GLM 20260731-009[2])
  const { picks, held, done, deferred } = selectTalks(seeds, {
    existingIds: [...completed, ...state.skipped.map((s) => s.id)],
    videoLedger: state.talkVideoIds ?? {},
    libraryTitles,
    source,
    cap,
  });
  console.log(`种子 ${seeds.length} 条:待处理 ${picks.length} / 待裁 ${held.length} / 已终态 ${done.length}${deferred.length ? ` / 限流留后班 ${deferred.length}` : ""}`);
  // 2026-07-31 保险丝:每班上限(默认 3,TALKS_BATCH_CAP/workflow talks_cap 覆写)。超出的种子原样留在
  // 种子区、不记账 → 下一班 autoTalks 自动再进场接着吃,直到吃完。响亮报数,别让人以为种子丢了。
  if (deferred.length) {
    console.log(`🧯 每班种子限流(上限 ${cap},防撞 runner 6h 上限):本班吃 ${picks.length} 条,还剩 ${deferred.length} 条留后班:`);
    deferred.forEach((d) => console.log(`   ⏭ ${d.id}  (${d.item.pubDateISO})  ${d.item.title}`));
  }
  // 🔔 待裁响亮报(::error 让 CI run 页一眼可见);种子不动、不记账,下轮仍会报,直到人工删种子或确认非重复
  for (const h of held) {
    console.error(`::error::⛔ 待裁(疑似重复,未处理):${h.videoId}「${h.title}」≈ 库内「${h.matchedTitle}」。人工裁决:确认重复→删 ${source.seedDir}/${h.videoId};确认不同集→改库内该集或此种子标题后重跑。`);
  }
  picks.forEach((p) => console.log(`   - ${p.id}  (${p.item.pubDateISO})  ${p.item.title}`));
  if (!picks.length) {
    if (held.length) throw new Error(`talks 全部 ${held.length} 条种子待裁,零处理(见上方 ::error)`);
    return { clean: 0, skipped: 0 };
  }
  if (dryRun) {
    console.log("（--dry-run:仅列出,不真跑)");
    return { clean: 0, skipped: 0 };
  }

  const cleanIds = [];
  const skipped = [];
  for (const { videoId, id, item } of picks) {
    if (!item.enclosureUrl) {
      // 种子落了但音频没上传(--no-upload 后忘了补传)→ 转瞬失败语义:响亮报、不记账、补传后重跑即处理
      console.error(`   ⚠️ ${id} 种子缺 audio_asset_url(音频未上传 Release?)→ 跳过,本机补传后重跑`);
      skipped.push({ id, reason: "种子缺 audio_asset_url(音频未上传)", retry: true });
      continue;
    }
    let res;
    try {
      res = processEpisode(item, id, source);
    } catch (e) {
      // 内容审查([1301])= 确定性拒绝,非转瞬:BLOCK_CAP 次宽限后判终态,挪 skipped + 记 videoId 出队
      // (否则死锁:这几条永远重选、饿死后面纯技术演讲——正是本次要修的病)。
      if (isContentBlocked(e.message)) {
        const n = noteBlockFail(state, id);
        if (n >= BLOCK_CAP) {
          const reason = `内容审查拦下([1301] GLM 拒译敏感内容,连拦 ${n} 次已放弃)`;
          parkSkipped(state, id, item, source, reason);
          skipped.push({ id, reason, retry: false });
          console.log(`   ⛔ ${id} 内容审查放弃,出队:${reason}`);
        } else {
          writeState(state); // 连拦账即刻落盘,跨班次累计
          console.error(`   ⚠️ ${id} 内容审查拦下(第 ${n}/${BLOCK_CAP} 次,再试一轮):${e.message}`);
          skipped.push({ id, reason: `内容审查拦下(第 ${n}/${BLOCK_CAP} 次)`, retry: true });
        }
        continue;
      }
      console.error(`   ⚠️ ${id} 处理中断(转瞬失败,留半成品下次重试):${e.message}`);
      skipped.push({ id, reason: `处理中断(转瞬失败,下次重试):${e.message}`, retry: true });
      continue; // 不记 videoId:非终态,下轮重选
    }
    // 终态才记 videoId 账本(去重第 1 层;成功与失真隔离都算终态,绝不再自动重跑重扣钱)
    state.talkVideoIds = state.talkVideoIds ?? {};
    state.talkVideoIds[videoId] = id;
    if (res.ok) {
      cleanIds.push(id);
      clearBlocked(state, id); // 曾被拦但这轮过了 → 清连拦账,不留陈旧计数
      writeState(state);
    } else {
      mkdirSync(SKIPPED_DIR, { recursive: true });
      const to = join(SKIPPED_DIR, id);
      if (existsSync(to)) rmSync(to, { recursive: true, force: true });
      renameSync(join(EPISODES_DIR, id), to);
      writeFileSync(join(to, "skip-reason.txt"), `${res.reason}\n${item.title}\n${item.link}\n`);
      skipped.push({ id, reason: res.reason, retry: false });
      appendSkip(state, { id, reason: res.reason, title: item.title, pubDate: item.pubDateISO });
      writeState(state); // 即刻落盘(同播客源口径,bug c)
      console.log(`   ⛔ ${id} 隔离:${res.reason}`);
    }
  }

  if (skipped.length) {
    console.log(`\n🔔 通知:${source.key} 本批 ${skipped.length} 条未发布:`);
    skipped.forEach((s) => console.log(`   - ${s.id} — ${s.reason}${s.retry ? "" : "(隔离 data/skipped,待人工看)"}`));
  }
  writeState(state);
  return { clean: cleanIds.length, skipped: skipped.length };
}

/** 单源一轮:取 feed→选新集→逐集处理→按源推进 cutoff。返回 {clean, skipped} 计数。 */
async function processSource(source, state, { backfillN, dryRun }) {
  if (source.seedDir) return processTalksSource(source, state, { dryRun }); // C16:种子驱动源走自己的选集,处理链同一套
  console.log(`\n══ 源:${source.key}(${source.feedUrl})`);

  // 补历史(--backfill)读本机备好的全历史列表;日常/cron 走 RSS(最近 20,只向前看够用,drift #28)
  let items;
  if (backfillN > 0 && source.archiveFile) {
    console.log(`补历史:读全历史列表 ${source.archiveFile}`);
    items = readArchiveItems(source.archiveFile);
  } else {
    if (backfillN > 0) console.log(`⚠️ 源 ${source.key} 无 archiveFile → 回填只能从 RSS(最近 20 条)选,够不着更早历史(GLM 009[3])`);
    items = parseFeed(await fetchFeed(source.feedUrl));
  }
  const interviews = items.filter(isInterview);
  console.log(`共 ${items.length} 条,访谈 ${interviews.length} 条(排掉 ainews/无音频)`);

  // 已见 = 已完成(有 digest)+ 已隔离(账本,持久化去重,别再自动重跑失真集)。每源现算(前一源可能新增完成集)。
  const seen = [...completedIds(), ...state.skipped.map((s) => s.id)];

  let picks;
  if (backfillN > 0) {
    // 回填评估批:取最近 N 集(override 只向前看)。跑完在收尾处推进 cutoff 到 feed 最新 → 之后 cron 仍只向前看。
    picks = selectBackfill(items, { n: backfillN, existingIds: seen, source });
    console.log(`🔁 回填模式:取最近 ${backfillN} 集,实得 ${picks.length}:`);
  } else {
    // 防呆:该源无基线 → 跳过该源(响亮报警),不砸别的源的日常 cron;拒绝无边界跑全 backlog(drift #22)。
    if (needsReseed(state, source.key)) {
      console.error(`⛔ 源 ${source.key} 无基线 cutoff → 本源跳过。先 \`node scripts/run-pipeline.mjs --seed --source ${source.key}\` 设基线。`);
      return { clean: 0, skipped: 0 };
    }
    picks = selectNew(items, { sinceISO: state.cutoffs[source.key], existingIds: seen, source });
    console.log(`cutoff=${state.cutoffs[source.key]};待处理新集 ${picks.length}:`);
  }
  picks.forEach((p) => console.log(`   - ${deriveId(p, source)}  (${p.pubDateISO})  ${p.title}`));
  // 批内 id 撞车响亮告警(独立审计 2026-07-24):同日同源 slug 前 40 字符全同会撞,后来者被 seen 静默吞——静默丢集违背响亮 fail 纪律
  const dupIds = picks.map((p) => deriveId(p, source)).filter((id, i, a) => a.indexOf(id) !== i);
  if (dupIds.length) console.error(`⚠️ 本批 id 撞车(同名集将被去重跳过、不处理):${[...new Set(dupIds)].join(", ")} —— 需人工看是否真同集`);

  if (!picks.length) {
    console.log(`✅ ${source.key} 无新集。`);
    return { clean: 0, skipped: 0 };
  }
  if (dryRun) {
    console.log("（--dry-run:仅列出,不真跑)");
    return { clean: 0, skipped: 0 };
  }

  // 逐集处理:干净集入发布,失真集隔离(skip+通知,drift #24),转瞬失败留半成品下次重试。
  const clean = [];
  const skipped = [];
  for (const item of picks) {
    const id = deriveId(item, source);
    let res;
    try {
      res = processEpisode(item, id, source);
    } catch (e) {
      // 内容审查([1301])= 确定性拒绝:BLOCK_CAP 次宽限后判终态(retry:false),让 cutoff 能安全推进过它
      // ——否则这集每跑重烧一次翻译、cutoff 永远冻在它前面(a16z 实证)。
      if (isContentBlocked(e.message)) {
        const n = noteBlockFail(state, id);
        if (n >= BLOCK_CAP) {
          const reason = `内容审查拦下([1301] GLM 拒译敏感内容,连拦 ${n} 次已放弃)`;
          parkSkipped(state, id, item, source, reason);
          skipped.push({ id, reason, retry: false }); // retry:false → 收尾处 cutoff 推进过它,不再冻结/重烧
          console.log(`   ⛔ ${id} 内容审查放弃:${reason}`);
        } else {
          writeState(state);
          console.error(`   ⚠️ ${id} 内容审查拦下(第 ${n}/${BLOCK_CAP} 次,再试一轮):${e.message}`);
          skipped.push({ id, reason: `内容审查拦下(第 ${n}/${BLOCK_CAP} 次)`, retry: true });
        }
        continue;
      }
      console.error(`   ⚠️ ${id} 处理中断(转瞬失败,留半成品下次重试):${e.message}`);
      skipped.push({ id, reason: `处理中断(转瞬失败,下次重试):${e.message}`, retry: true });
      continue;
    }
    if (res.ok) {
      clean.push(item);
      clearBlocked(state, id); // 曾被拦但这轮过了 → 清连拦账
    } else {
      // 失真被拦 → 隔离到 data/skipped(不发、不删、不自动重跑)。此时还没出集页/音频,无孤儿。
      mkdirSync(SKIPPED_DIR, { recursive: true });
      const to = join(SKIPPED_DIR, id);
      if (existsSync(to)) rmSync(to, { recursive: true, force: true });
      renameSync(join(EPISODES_DIR, id), to);
      writeFileSync(join(to, "skip-reason.txt"), `${res.reason}\n${item.title}\n${item.link}\n`);
      skipped.push({ id, reason: res.reason, retry: false });
      // 持久账本(去重+通知)+ 即刻落盘:每隔离一集立刻 writeState,后续步骤(gate-all 等)崩了也不丢账(bug c)。
      // cutoff 不在此推进(仍只在收尾无 retry 时安全推进),这里只固化「这集已隔离、别再重跑重扣钱」。
      appendSkip(state, { id, reason: res.reason, title: item.title, pubDate: item.pubDateISO });
      writeState(state);
      console.log(`   ⛔ ${id} 隔离:${res.reason}`);
    }
  }

  // 🔔 通知(CI 转成告警/邮件):本批 skip 了哪些
  if (skipped.length) {
    console.log(`\n🔔 通知:${source.key} 本批 ${skipped.length} 集未发布:`);
    skipped.forEach((s) => console.log(`   - ${s.id} — ${s.reason}${s.retry ? "" : "(隔离 data/skipped,待人工看)"}`));
  }

  // cutoff(按源):无「转瞬失败待重试」的集时,推进到本批最新(干净集+隔离集都是终态,靠 seen 去重不重跑);
  // 有转瞬失败则不推进,好让它下次被重新选中重试(半成品不在 seen)。
  if (!skipped.some((s) => s.retry)) {
    // 回填后 cutoff 推到 feed 最新访谈(不只本批最新)→ 之后 cron 只向前看不重扣;selectNew 的 seen 去重再兜一层
    const newestFeed = interviews.map((i) => i.pubDateISO).sort().at(-1);
    const newestPick = picks.map((p) => p.pubDateISO).sort().at(-1);
    state.cutoffs[source.key] = backfillN > 0 ? (newestFeed > newestPick ? newestFeed : newestPick) : newestPick;
    console.log(`${source.key} cutoff 推进到 ${state.cutoffs[source.key]}。`);
  }
  writeState(state); // 始终落盘:持久化 skipped 账本(即便 cutoff 没推进)
  return { clean: clean.length, skipped: skipped.length };
}

function isMain() {
  try {
    return process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
}

if (isMain()) {
  main().catch((e) => {
    console.error(`\n❌ 编排器失败:${e.message}`);
    process.exit(1);
  });
}
