#!/usr/bin/env node
// W1(2026-09-03 用户「好好整理内容的来源」)· 源清单报告(只读,不改任何行为)。
// 把散在代码/账本里的源信息汇成一张表,给用户审源用:
//   每个 RSS 源:key / 名称 / feed 主机 / 转写路线 / 过滤 / 是否进补历史池 / cutoff / 最新发布日 / 最新入库日 /
//   已发布数 / 半成品 / 停车 / 隔离数(按理由前缀)。另列 YouTube 订阅频道(data/talk-subscriptions.json)。
// 用法:node scripts/report-sources.mjs [> docs/源清单-YYYY-MM-DD.md]
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { SOURCES, BACKFILL_FEED_KEYS, STATE_FILE, sourceForId, REVIVE_CAP } from "./run-pipeline.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const hostOf = (u) => { try { return new URL(u).host; } catch { return "—"; } };
/** 隔离理由归类:取「:」「(」之前的短语当类别(账本里的 reason 都是「类别:细节」体) */
export const reasonKind = (reason) => String(reason ?? "").split(/[:(（]/)[0].trim() || "其他";

/** 纯逻辑:每源一行。episodes = [{ id, meta, hasDigest, hasPage }];state = pipeline-state;resolve = id→source(默认 sourceForId)。 */
export function sourceRegistryRows({ sources, backfillKeys = [], state = {}, episodes = [], resolve: resolveSrc = sourceForId }) {
  const acc = new Map(sources.map((s) => [s.key, { published: 0, half: 0, reviving: 0, parked: 0, skipped: {}, newestDate: null, newestAdded: null }]));
  const bump = (cur, v) => (v && (!cur || v > cur) ? v : cur);
  for (const ep of episodes) {
    const r = acc.get(resolveSrc(ep.id)?.key);
    if (!r) continue;
    if (ep.hasDigest && ep.hasPage) r.published += 1;
    else if (!ep.hasDigest) r.half += 1;
    else if ((state.revive?.[ep.id] ?? 0) >= REVIVE_CAP) r.parked += 1;
    else r.reviving += 1; // 有 digest 无集页、连败未满 → 待补活(GLM 015[2]:不能凭空消失,三桶之和要对得上目录)
    r.newestDate = bump(r.newestDate, String(ep.meta?.date ?? "").slice(0, 10));
    r.newestAdded = bump(r.newestAdded, String(ep.meta?.added ?? "").slice(0, 10));
  }
  for (const s of state.skipped ?? []) {
    const r = acc.get(resolveSrc(s.id)?.key);
    if (!r) continue;
    const k = reasonKind(s.reason);
    r.skipped[k] = (r.skipped[k] ?? 0) + 1;
  }
  return sources.map((s) => {
    const r = acc.get(s.key);
    return {
      key: s.key,
      name: s.name,
      host: hostOf(s.feedUrl),
      route: s.manual ? "manual(种子)" : s.asr ? `ASR(${s.asr})` : "官方稿/feed",
      filters: [s.topicFilter ? "topicFilter" : "", s.archiveFile ? "archiveFile" : ""].filter(Boolean).join("+") || "—",
      inBackfill: !!(s.archiveFile || backfillKeys.includes(s.key)),
      cutoff: /^\d{4}-\d{2}-\d{2}/.test(String(state.cutoffs?.[s.key] ?? "")) ? String(state.cutoffs[s.key]).slice(0, 10) : "—", // 非 ISO 一律「—」(GLM 015[5])
      newestDate: r.newestDate ?? "—",
      newestAdded: r.newestAdded ?? "—",
      published: r.published,
      half: r.half,
      reviving: r.reviving,
      parked: r.parked,
      skipped: Object.entries(r.skipped).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}×${v}`).join(" ") || "—",
    };
  });
}

/** 账本里有 cutoff、SOURCES 里却没有的 key(源已退役/改名但账本没清)—— 报告要点名,别让它们悄悄躺着。 */
export function orphanCutoffs(sources, state = {}) {
  const keys = new Set(sources.map((s) => s.key));
  return Object.keys(state.cutoffs ?? {}).filter((k) => !keys.has(k)).sort();
}

export function toMarkdown(rows, talkSubs = [], { today = new Date().toISOString().slice(0, 10), orphans = [] } = {}) {
  const head = "| key | 名称 | feed 主机 | 路线 | 过滤 | 补历史池 | cutoff | 最新发布 | 最新入库 | 已发布 | 半成品 | 待补活 | 停车 | 隔离(按理由) |";
  const sep = "|---|---|---|---|---|---|---|---|---|---:|---:|---:|---:|---|";
  const lines = rows.map((r) => `| ${r.key} | ${r.name} | ${r.host} | ${r.route} | ${r.filters} | ${r.inBackfill ? "✓" : "—"} | ${r.cutoff} | ${r.newestDate} | ${r.newestAdded} | ${r.published} | ${r.half} | ${r.reviving} | ${r.parked} | ${r.skipped} |`);
  const subs = talkSubs.map((c) => `| ${c.key} | ${c.name} | ${c.channelId ?? c.handle ?? "—"} | ${(c.filters?.titleMustInclude ?? []).join("/") || "—"} | ${c.filters?.minDurationSec ?? "—"} | ${String(c.filters?.judgeHint ?? "").slice(0, 60)}${String(c.filters?.judgeHint ?? "").length > 60 ? "…" : ""} |`);
  return [
    `# 内容源清单 · ${today}(自动生成,只读)`, "",
    `> 数据来源:scripts/run-pipeline.mjs SOURCES/BACKFILL_FEED_KEYS · data/pipeline-state.json · data/episodes · samples。`,
    `> 「半成品」= 目录有但无 digest;「待补活」= 有 digest 无集页、连败 < ${REVIVE_CAP};「停车」= 连败 ≥ ${REVIVE_CAP};「隔离」= skipped 账本按理由前缀计数。`, "",
    `## RSS 播客源(${rows.length})`, "", head, sep, ...lines, "",
    ...(orphans.length ? [`> ⚠️ 账本里有 cutoff 但 SOURCES 里已无此源(已退役/改名,账本未清):${orphans.join("、")}`, ""] : []),
    `## YouTube 订阅频道(${talkSubs.length};data/talk-subscriptions.json)`, "",
    "| key | 名称 | channelId | 标题必含 | 最短秒 | 判官提示 |", "|---|---|---|---|---:|---|", ...subs, "",
  ].join("\n");
}

function isMain() {
  try { return process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url); } catch { return false; }
}

if (isMain()) {
  const epDir = join(ROOT, "data/episodes");
  const episodes = existsSync(epDir) ? readdirSync(epDir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => {
    const dir = join(epDir, d.name);
    let meta = null;
    try { meta = JSON.parse(readFileSync(join(dir, "meta.json"), "utf8")); } catch { /* 无/坏 meta 也要计数 */ }
    return { id: d.name, meta, hasDigest: existsSync(join(dir, "digest.json")), hasPage: existsSync(join(ROOT, "samples", `${d.name}.md`)) };
  }) : [];
  let state = {};
  try { if (existsSync(STATE_FILE)) state = JSON.parse(readFileSync(STATE_FILE, "utf8")); } catch (e) { console.error(`⚠️ pipeline-state 读不了(${e.message}),cutoff/隔离列按空账本出`); } // GLM 015[1]
  let talkSubs = [];
  try { talkSubs = JSON.parse(readFileSync(join(ROOT, "data/talk-subscriptions.json"), "utf8")).subscriptions ?? []; } catch { /* 无订阅表照出报告 */ }
  process.stdout.write(toMarkdown(sourceRegistryRows({ sources: SOURCES, backfillKeys: BACKFILL_FEED_KEYS, state, episodes }), talkSubs, { orphans: orphanCutoffs(SOURCES, state) }));
}
