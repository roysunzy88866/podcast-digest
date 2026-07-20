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

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// C8 · 源清单(品味校准后只抓 🟢 高对味源,真相源 需求共创/内容品味档案.md v1)。
// 每个源:{ key(id 前缀 + 状态), feedUrl }。都是 Substack 播客(现有 fetch-source.mjs 直接吃:
// 官方 transcription.json 逐词时间戳 + 段级说话人,不烧 ASR)。
// 已退役(停抓,内容品味档案.md):Latent Space(🟡 混杂:AINews 水贴 + 模型发布 → 砍)。
// 待接(下一步,非本切片):a16z / How I AI(非 Substack、无官方稿 → 需 ASR 决策);Y Combinator(YouTube 抓取坎)。
export const SOURCES = [
  // www 自定义域名 feed(最近 20 条):云 runner 可达(200)。日常 cron 只向前看,20 条够。
  // ⚠️ 历史 backlog 进料口未解决:api.substack(353 集)对云 runner 返 403(封数据中心 IP,drift #28,UA 也没救);
  //    补历史需另找 runner 可达的全历史源(www /api/v1/archive 适配器?待验),见 drift #28。
  { key: "lennys", feedUrl: "https://www.lennysnewsletter.com/feed" },
];

export const STATE_FILE = join(ROOT, "data/pipeline-state.json");
const EPISODES_DIR = join(ROOT, "data/episodes");
const SKIPPED_DIR = join(ROOT, "data/skipped"); // 隔离区:自动跑出失真、闸门拦下的集(不删、留人工看,不发布不重跑,drift #24)

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

/**
 * 派集 id = <YYYY-MM-DD>-<source.key>-<slug>(slug 取 URL /p/ 段,截断防超长)。无人值守用内部标识,不必人工雅致。
 * C8:前缀取 source.key(去 latent-space 硬编码)。缺 source 直接抛,不静默派 undefined 前缀。
 */
export function deriveId(item, source) {
  if (!source?.key) throw new Error("deriveId 需要 source.key(C8 多源:id 前缀按源)");
  const date = item.pubDateISO ? item.pubDateISO.slice(0, 10) : "unknown-date";
  let slug = (item.link.match(/\/p\/([^/?#]+)/) || [])[1] || "episode";
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
export function needsReseed(state, sourceKey) {
  return !!state.sincePubDate && state.cutoffSource !== sourceKey;
}

// ── 副作用层 ────────────────────────────────────────────

function readState() {
  const dflt = { sincePubDate: "", skipped: [], cutoffSource: "" };
  if (!existsSync(STATE_FILE)) return dflt;
  try {
    return { ...dflt, ...JSON.parse(readFileSync(STATE_FILE, "utf8")) };
  } catch {
    return dflt;
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
  // 带浏览器 UA + Accept:api.substack.com 对无 UA/裸 node 请求返 403(挡 bot/数据中心;drift #28)
  const res = await fetch(feedUrl, {
    redirect: "follow",
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
      Accept: "application/rss+xml, application/xml, text/xml, */*",
    },
  });
  if (!res.ok) throw new Error(`取 RSS 失败 HTTP ${res.status}: ${feedUrl}`);
  return await res.text();
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
  run("node", ["scripts/repair-quotes.mjs", dir]); // 规整金句 snap 回逐字/派生时间戳说话人、救不回的丢(C2 步骤④.5)
  run("node", ["scripts/extract-entities.mjs", dir]);

  // 逐集验证(防失真闸门)在出稿/配音**之前** —— 失真集不写集页/音频,隔离时无孤儿产物。
  // gate(金句三联)+ gate-facts(导读事实层)都只读 digest,不需渲染产物。失败=GLM 真失真→交 main 隔离(skip+通知,drift #24)
  console.log(`\n   ── 逐集验证 ${id}(出稿前)──`);
  if (!runOk("node", ["scripts/gate.mjs", dir])) return { ok: false, reason: "金句三联闸门未过(疑拼接/编造/张冠李戴)" };
  if (!runOk("node", ["scripts/gate-facts.mjs", dir])) return { ok: false, reason: "导读事实层未过(专名/数字无出处 或 内联时间戳张冠李戴)" };

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

  // C8:多源骨架。本切片先只接 1 个 active 源(Lenny's),单 cutoff 够用;
  // 按源独立 cutoff 留到第 2 个源落地时重构 state(tech-debt),此处硬守只 1 源,防静默串号。
  if (SOURCES.length !== 1) {
    console.error(`⛔ 当前只支持单 active 源(现 ${SOURCES.length} 个)。多源需先把 state.sincePubDate 改成按源 cutoff(见 tech-debt)。`);
    process.exit(2);
  }
  const source = SOURCES[0];
  console.log(`源:${source.key}(${source.feedUrl})`);

  const feed = await fetchFeed(source.feedUrl);
  const items = parseFeed(feed);
  const interviews = items.filter(isInterview);
  console.log(`RSS ${items.length} 条,访谈 ${interviews.length} 条(排掉 ainews/无音频)`);

  const state = readState();

  if (flags.has("--seed")) {
    // 设站基线:cutoff = 当前 feed 最新访谈集时间 → 之后只处理更新的(历史 backlog 不碰,drift #22)
    const newest = interviews.map((i) => i.pubDateISO).sort().at(-1) || new Date().toISOString();
    writeState({ ...state, sincePubDate: newest, cutoffSource: source.key });
    console.log(`✅ 已设 ${source.key} 基线 cutoff = ${newest}(晚于它的访谈集才会被处理);未处理任何集。`);
    return;
  }

  // 已见 = 已完成(有 digest)+ 已隔离(账本,持久化去重,别再自动重跑失真集)
  const seen = [...completedIds(), ...state.skipped.map((s) => s.id)];

  let picks;
  if (backfillN > 0) {
    // 回填评估批:取最近 N 集(override 只向前看)。跑完在收尾处推进 cutoff 到 feed 最新 → 之后 cron 仍只向前看。
    picks = selectBackfill(items, { n: backfillN, existingIds: seen, source });
    console.log(`🔁 回填模式:取最近 ${backfillN} 集,实得 ${picks.length}:`);
  } else {
    // 防呆(GLM 20260720-001[1]):cutoff 属于别的源(换源了)→ 拒绝跑,逼先 --seed,防批量拉新源存量旧集
    if (needsReseed(state, source.key)) {
      console.error(`⛔ 现有 cutoff 属于源「${state.cutoffSource || "(未知/旧版)"}」,当前源是「${source.key}」。`);
      console.error(`   换源后旧 cutoff 无意义,直接跑会把 ${source.key} 的存量旧集当新集批量处理(烧钱/发旧集)。`);
      console.error(`   先跑 \`node scripts/run-pipeline.mjs --seed\` 为 ${source.key} 重设基线。`);
      process.exit(2);
    }
    if (!state.sincePubDate) {
      console.error("⛔ 无基线(data/pipeline-state.json 缺 sincePubDate)。先跑 `--seed` 设站基线,拒绝无边界跑全 backlog。");
      process.exit(2);
    }
    picks = selectNew(items, { sinceISO: state.sincePubDate, existingIds: seen, source });
    console.log(`cutoff=${state.sincePubDate};待处理新集 ${picks.length}:`);
  }
  picks.forEach((p) => console.log(`   - ${deriveId(p, source)}  (${p.pubDateISO})  ${p.title}`));

  if (!picks.length) {
    console.log("✅ 无新集,干净退出(不空跑不报错)。");
    return;
  }
  if (flags.has("--dry-run")) {
    console.log("（--dry-run:仅列出,不真跑)");
    return;
  }

  // 逐集处理:干净集入发布,失真集隔离(skip+通知,drift #24),转瞬失败留半成品下次重试。
  const clean = [];
  const skipped = [];
  for (const item of picks) {
    const id = deriveId(item, source);
    let res;
    try {
      res = processEpisode(item, id);
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
      // 持久账本(去重+通知):同 id 只留一条(理论上 seen 已挡重跑,防御性去重防账本膨胀,GLM #5)
      state.skipped = state.skipped.filter((s) => s.id !== id);
      state.skipped.push({ id, reason: res.reason, title: item.title, pubDate: item.pubDateISO });
      console.log(`   ⛔ ${id} 隔离:${res.reason}`);
    }
  }

  // 🔔 通知(CI 转成告警/邮件):本批 skip 了哪些
  if (skipped.length) {
    console.log(`\n🔔 通知:本批 ${skipped.length} 集未发布:`);
    skipped.forEach((s) => console.log(`   - ${s.id} — ${s.reason}${s.retry ? "" : "(隔离 data/skipped,待人工看)"}`));
  }

  if (clean.length) {
    rebuildAll();
    console.log("\n▶ gate-all(全闸门,全过才允许发布)");
    run("node", ["scripts/gate-all.mjs"]); // 干净集应全过;仍挂=兜底 fail-safe(不部署)
    console.log(`\n✅ ${clean.length} 干净集过 gate-all,可发布;skip ${skipped.length} 集。`);
  } else {
    console.log("\n✅ 无干净可发的新集(全被隔离/无新集)。不部署,线上保持上一版。");
  }

  // cutoff:无「转瞬失败待重试」的集时,推进到本批最新(干净集+隔离集都是终态,靠 seen 去重不重跑);
  // 有转瞬失败则不推进,好让它下次被重新选中重试(半成品不在 seen)。
  if (!skipped.some((s) => s.retry)) {
    // 回填后 cutoff 推到 feed 最新访谈(不只本批最新)→ 之后 cron 只向前看不重扣;selectNew 的 seen 去重再兜一层
    const newestFeed = interviews.map((i) => i.pubDateISO).sort().at(-1);
    const newestPick = picks.map((p) => p.pubDateISO).sort().at(-1);
    state.sincePubDate = backfillN > 0 ? (newestFeed > newestPick ? newestFeed : newestPick) : newestPick;
    console.log(`cutoff 推进到 ${state.sincePubDate}。`);
  }
  state.cutoffSource = source.key; // 始终标定 cutoff 归属源(回填/正常都设,满足 needsReseed 防呆)
  writeState(state); // 始终落盘:持久化 skipped 账本(即便 cutoff 没推进)
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
