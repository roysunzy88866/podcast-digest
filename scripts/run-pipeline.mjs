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
import { readFileSync, existsSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const FEED_URL = "https://www.latent.space/feed";
export const STATE_FILE = join(ROOT, "data/pipeline-state.json");
const EPISODES_DIR = join(ROOT, "data/episodes");

// ── 纯逻辑(可单测,无副作用)──────────────────────────────

/** 解析 Substack 播客 RSS → [{title, link, pubDateISO, hasAudio}]。只用正则,不引 XML 依赖(feed 结构稳、CDATA 好切)。*/
export function parseFeed(xml) {
  const items = [];
  const itemRe = /<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/g; // 容忍带属性/命名空间的 <item ...>
  let m;
  while ((m = itemRe.exec(xml))) {
    const body = m[1];
    const pick = (re) => (body.match(re) || [])[1]?.trim() ?? "";
    const title = pick(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/);
    const link = pick(/<link>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/link>/);
    const pubDate = pick(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const hasAudio = /<enclosure[^>]*type=["']audio/i.test(body);
    const d = pubDate ? new Date(pubDate) : null;
    items.push({
      title,
      link,
      pubDateISO: d && !isNaN(+d) ? d.toISOString() : "",
      hasAudio,
    });
  }
  return items;
}

/** 是不是要处理的真访谈集?排掉每日 AI 快讯(/p/ainews-…,天天发、会天天烧钱)+ 必须有音频 enclosure。 */
export function isInterview(item) {
  if (!item.link || !item.pubDateISO) return false;
  if (!item.hasAudio) return false;
  const slug = (item.link.match(/\/p\/([^/?#]+)/) || [])[1] || "";
  if (/^ainews-/i.test(slug)) return false;
  return true;
}

/** 派集 id = <YYYY-MM-DD>-latent-space-<slug>(slug 取 URL /p/ 段,截断防超长)。无人值守用内部标识,不必人工雅致。 */
export function deriveId(item) {
  const date = item.pubDateISO ? item.pubDateISO.slice(0, 10) : "unknown-date";
  let slug = (item.link.match(/\/p\/([^/?#]+)/) || [])[1] || "episode";
  slug = slug.toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 40).replace(/-+$/, "");
  return `${date}-latent-space-${slug}`;
}

/**
 * 挑出这次要处理的新集:是访谈 + pubDate 严格晚于 cutoff + 不在已处理集里。按时间升序(旧→新)。
 * @param items parseFeed 结果
 * @param sinceISO cutoff(只处理晚于它的);空串=无基线(为安全返回空,逼先 --seed)
 * @param existingIds 已存在的 data/episodes/<id> 集合
 */
export function selectNew(items, { sinceISO, existingIds }) {
  if (!sinceISO) return []; // 无基线不敢跑全 backlog(drift #22),先 --seed
  const seen = new Set(existingIds);
  return items
    .filter(isInterview)
    .filter((it) => it.pubDateISO > sinceISO)
    .filter((it) => !seen.has(deriveId(it)))
    .sort((a, b) => a.pubDateISO.localeCompare(b.pubDateISO));
}

// ── 副作用层 ────────────────────────────────────────────

function readState() {
  if (!existsSync(STATE_FILE)) return { sincePubDate: "" };
  try {
    return JSON.parse(readFileSync(STATE_FILE, "utf8"));
  } catch {
    return { sincePubDate: "" };
  }
}

function writeState(s) {
  mkdirSync(dirname(STATE_FILE), { recursive: true });
  writeFileSync(STATE_FILE, JSON.stringify(s, null, 2) + "\n");
}

/** 已「完成」的集 = 有 digest.json(per-集链的完成标志)。半成品目录(取源/翻译到一半失败)不算,下次会重试并复用缓存(GLM #4)。 */
function existingIds() {
  if (!existsSync(EPISODES_DIR)) return [];
  return readdirSync(EPISODES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(EPISODES_DIR, d.name, "digest.json")))
    .map((d) => d.name);
}

async function fetchFeed() {
  const res = await fetch(FEED_URL, { redirect: "follow" });
  if (!res.ok) throw new Error(`取 RSS 失败 HTTP ${res.status}: ${FEED_URL}`);
  return await res.text();
}

/** 顺跑一个外部脚本;非 0 退出即抛(fail-fast,坏集不继续污染)。 */
function run(cmd, args, opts = {}) {
  console.log(`   $ ${cmd} ${args.join(" ")}`);
  const r = spawnSync(cmd, args, { cwd: ROOT, stdio: "inherit", ...opts });
  if (r.status !== 0) throw new Error(`步骤失败(exit ${r.status}): ${cmd} ${args.join(" ")}`);
}

/** 单个新集的 per-集链(取源→翻译→浓缩→判官→事实闸门→抽实体→出稿→配音)。fail-fast。 */
function processEpisode(item, id) {
  const dir = join("data/episodes", id);
  console.log(`\n▶ 处理新集 ${id}\n   ${item.title}\n   ${item.link}`);
  // ① 取源:官方稿优先;无稿走 ASR 兜底(drift #14,需 ASSEMBLYAI_API_KEY)
  const fs = spawnSync("node", ["scripts/fetch-source.mjs", item.link, id], { cwd: ROOT, stdio: "inherit" });
  if (fs.status !== 0) {
    console.log("   官方稿取源失败 → 尝试 ASR 兜底(fetch-source-asr)");
    run("node", ["scripts/fetch-source-asr.mjs", item.link, id]);
  }
  // 无人值守补人工缺口:GLM 推说话人真名 + grounding 机器校(drift #23),传 RSS 标题当候选名源
  run("node", ["scripts/infer-speakers.mjs", dir, item.title]);
  run("node", ["scripts/translate.mjs", dir]);
  run("node", ["scripts/condense.mjs", dir]);
  run("node", ["scripts/judge-quotes.mjs", dir]);
  run("node", ["scripts/repair-quotes.mjs", dir]); // 规整金句 snap 回逐字/派生时间戳说话人、救不回的丢(C2 步骤④.5,原编排漏了→gate 挂失真)
  run("node", ["scripts/gate.mjs", dir]);
  run("node", ["scripts/extract-entities.mjs", dir]);
  run("node", ["scripts/render.mjs", dir]);
  run("node", ["scripts/tts.mjs", dir]);
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
  const flags = new Set(process.argv.slice(2));
  const feed = await fetchFeed();
  const items = parseFeed(feed);
  const interviews = items.filter(isInterview);
  console.log(`RSS ${items.length} 条,访谈 ${interviews.length} 条(排掉 ainews/无音频)`);

  if (flags.has("--seed")) {
    // 设站基线:cutoff = 当前 feed 最新访谈集时间 → 之后只处理更新的(历史 backlog 不碰,drift #22)
    const newest = interviews.map((i) => i.pubDateISO).sort().at(-1) || new Date().toISOString();
    writeState({ sincePubDate: newest });
    console.log(`✅ 已设基线 cutoff = ${newest}(晚于它的访谈集才会被处理);未处理任何集。`);
    return;
  }

  const { sincePubDate } = readState();
  const picks = selectNew(items, { sinceISO: sincePubDate, existingIds: existingIds() });
  if (!sincePubDate) {
    console.error("⛔ 无基线(data/pipeline-state.json 缺 sincePubDate)。先跑 `--seed` 设站基线,拒绝无边界跑全 backlog。");
    process.exit(2);
  }
  console.log(`cutoff=${sincePubDate};待处理新集 ${picks.length}:`);
  picks.forEach((p) => console.log(`   - ${deriveId(p)}  (${p.pubDateISO})  ${p.title}`));

  if (!picks.length) {
    console.log("✅ 无新集,干净退出(不空跑不报错)。");
    return;
  }
  if (flags.has("--dry-run")) {
    console.log("（--dry-run:仅列出,不真跑)");
    return;
  }

  for (const item of picks) processEpisode(item, deriveId(item));
  rebuildAll();

  console.log("\n▶ gate-all(全闸门,全过才允许发布)");
  run("node", ["scripts/gate-all.mjs"]);

  // 处理成功 → 推进 cutoff 到本批最新,写状态(供 CI commit 回仓,去重持久化)
  const newestPicked = picks.map((p) => p.pubDateISO).sort().at(-1);
  writeState({ sincePubDate: newestPicked });
  console.log(`\n✅ 本批 ${picks.length} 集全过 gate-all;cutoff 推进到 ${newestPicked}。可发布。`);
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
