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
    const d = pubDate ? new Date(pubDate) : null;
    items.push({
      title,
      link,
      pubDateISO: d && !isNaN(+d) ? d.toISOString() : "",
      hasAudio,
      enclosureUrl,
      durationSec: parseItunesDuration(pick(/<itunes:duration>([\s\S]*?)<\/itunes:duration>/)),
    });
  }
  return items;
}

/** 集 URL → slug。按源适配(D44⑤):Substack=/p/<slug>,Simplecast=/episodes/<slug>。抠不出=空串。 */
export function slugFromLink(link) {
  return ((link || "").match(/\/(?:p|episodes)\/([^/?#]+)/) || [])[1] || "";
}

/** 是不是要处理的真访谈集?排掉每日 AI 快讯(ainews-…,天天发、会天天烧钱)+ 必须有音频 enclosure。 */
export function isInterview(item) {
  if (!item.link || !item.pubDateISO) return false;
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
  let slug = slugFromLink(item.link) || "episode";
  slug = slug.toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 40).replace(/-+$/, "");
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
function run(cmd, args, opts = {}) {
  console.log(`   $ ${cmd} ${args.join(" ")}`);
  const r = spawnSync(cmd, args, { cwd: ROOT, stdio: "inherit", ...opts });
  if (r.status !== 0) throw new Error(`步骤失败(exit ${r.status}): ${cmd} ${args.join(" ")}`);
}

/** 跑外部脚本,返回是否 0 退出(不抛,用于逐集验证的 skip 判定)。 */
function runOk(cmd, args) {
  console.log(`   $ ${cmd} ${args.join(" ")}`);
  return spawnSync(cmd, args, { cwd: ROOT, stdio: "inherit" }).status === 0;
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
    if (!item.enclosureUrl) throw new Error(`集 ${id} 无 enclosure 直链,whisperX 路线走不了(fail-closed)`);
    run("node", ["scripts/fetch-source-whisperx.mjs", dir, "--transcribe", "--audio-url", item.enclosureUrl, "--duration", String(item.durationSec || 0)]);
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

  run("node", ["scripts/render.mjs", dir]); // 验证过了才出集页
  run("node", ["scripts/tts.mjs", dir]);    // 才配音
  return { ok: true };
}

/** 补齐所有已发布集的音频(audio.mp3 gitignore、CI 检出不带 → 缺的现场补合成;edge-tts 免费)。gate-audio 要集集有音频。 */
function ensureAllAudio() {
  if (!existsSync(EPISODES_DIR)) return;
  for (const d of readdirSync(EPISODES_DIR, { withFileTypes: true })) {
    if (!d.isDirectory()) continue;
    const dir = join("data/episodes", d.name);
    if (existsSync(join(ROOT, dir, "digest.json")) && !existsSync(join(ROOT, dir, "audio.mp3"))) {
      console.log(`   补音频:${d.name}`);
      run("node", ["scripts/tts.mjs", dir]);
    }
  }
}

/** 全库重建(处理完新集后一次):补齐音频→跨集聚合→出集页→列表→feed→站点 build。gate-all 由 main 收尾。 */
function rebuildAll() {
  console.log("\n▶ 全库重建");
  ensureAllAudio();
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
  const srcIdx = argv.indexOf("--source");
  const onlyKey = srcIdx >= 0 ? argv[srcIdx + 1] : null;
  const sources = onlyKey ? SOURCES.filter((s) => s.key === onlyKey) : SOURCES;
  if (onlyKey && !sources.length) {
    console.error(`⛔ 未知源「${onlyKey}」。可选:${SOURCES.map((s) => s.key).join(", ")}`);
    process.exit(2);
  }
  if (backfillN > 0 && SOURCES.length > 1 && !onlyKey) {
    console.error("⛔ 多源配置下 --backfill 必须配 --source <key> 点名回填哪个源(防笼统批量烧钱)。");
    process.exit(2);
  }

  // --ensure-audio:只补齐已发布集缺失音频(CI 检出不带 gitignore 音频;refresh 分支回滚集在
  // runner 上没音频,gate-audio 必挂 —— refresh=all 首跑 18 条实测)。不取源不处理内容。
  if (flags.has("--ensure-audio")) {
    ensureAllAudio();
    return;
  }

  const state = readState();

  if (flags.has("--seed")) {
    // 设基线:cutoff = 该源 feed 最新访谈集时间 → 之后只处理更新的(历史 backlog 不碰,drift #22)。
    // 只补缺的源:已有基线绝不顶掉(重复 seed = 把基线后未处理的集静默跳过,不许)。
    for (const source of sources) {
      const items = parseFeed(await fetchFeed(source.feedUrl));
      const newest = items.filter(isInterview).map((i) => i.pubDateISO).sort().at(-1) || new Date().toISOString();
      if (applySeed(state, source.key, newest)) console.log(`✅ 已设 ${source.key} 基线 cutoff = ${newest}(晚于它的访谈集才会被处理)。`);
      else console.log(`ℹ️ ${source.key} 已有基线 ${state.cutoffs[source.key]},不动(seed 只补缺)。`);
    }
    writeState(state);
    return;
  }

  let totalClean = 0;
  let totalSkipped = 0;
  for (const source of sources) {
    const r = await processSource(source, state, { backfillN, dryRun: flags.has("--dry-run") });
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
}

/** 单源一轮:取 feed→选新集→逐集处理→按源推进 cutoff。返回 {clean, skipped} 计数。 */
async function processSource(source, state, { backfillN, dryRun }) {
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
      console.error(`   ⚠️ ${id} 处理中断(转瞬失败,留半成品下次重试):${e.message}`);
      skipped.push({ id, reason: `处理中断(转瞬失败,下次重试):${e.message}`, retry: true });
      continue;
    }
    if (res.ok) {
      clean.push(item);
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
