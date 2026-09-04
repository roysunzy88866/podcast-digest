#!/usr/bin/env node
// 人工下架一集(用户点名)。2026-09-03 首用:6 月的《Claude Fable 5 测评》被每日顶量当「今天的」补进来,
// 已被 Fable 5.1 取代、明显过时 → 用户拍板下架(其余补历史老集保留)。
//
// 做三件事(与流水线自动隔离 parkSkipped 同一口径):
//   ① data/episodes/<id> → data/skipped/<id>(不删、留人工看;data/skipped 已 gitignore,对仓库=删除,内容仍在 git 历史)
//   ② 删 samples/<id>.md(集页源;建站只 cp samples/*.md,删了就不再出页)
//   ③ pipeline-state.json 的 skipped 账本记一条 —— **必须**:账本 id 进 seen,顶量/新集路径才不会把它再捞回来
// 之后照 refresh 分支重建(build-entities → build-pages → build-list → build-tag-pages → build-mustread → build-feed)再部署。
//
// 用法:node scripts/unpublish-episode.mjs --id <id> --reason "<为什么>" [--apply]
//   默认 dry-run 只打印计划;--apply 才真动。对公开站不可逆,先看清再 --apply。
import { existsSync, readFileSync, writeFileSync, mkdirSync, renameSync, rmSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { appendSkip, STATE_FILE, updateLedgerOverrides } from "./run-pipeline.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** 纯逻辑:算出要动的路径与账本条目(不碰磁盘,可单测)。pubDate 取 meta.date(feed 原始发布日),没有就留空串。 */
export function unpublishPlan(id, meta, { root = ROOT, reason } = {}) {
  if (!id || !reason) throw new Error("[unpublish] 需要 id 与 reason");
  const date = String(meta?.date ?? "").slice(0, 10);
  const pubDate = /^\d{4}-\d{2}-\d{2}$/.test(date) ? `${date}T00:00:00.000Z` : "";
  const title = String(meta?.title_en ?? meta?.title_zh ?? id);
  return {
    id,
    from: join(root, "data/episodes", id),
    to: join(root, "data/skipped", id),
    sample: join(root, "samples", `${id}.md`),
    entry: { id, reason, title, pubDate },
    skipReasonText: `${reason}\n${title}\n${meta?.source_url ?? ""}\n`,
  };
}

/** 副作用:按计划挪目录、删集页、记账(就地改 state,调用方负责落盘)。重复执行不炸、账本不重复(appendSkip 同 id 只留一条)。 */
export function applyUnpublish(plan, state) {
  // 三处都不存在 = 多半是 id 拼错:响亮拒绝,别把不存在的集写进账本(GLM 008[1])
  if (!existsSync(plan.from) && !existsSync(plan.to) && !existsSync(plan.sample)) {
    throw new Error(`[unpublish] 找不到 ${plan.id}(data/episodes、data/skipped、samples 都没有;id 拼错?)`);
  }
  if (existsSync(plan.from)) {
    mkdirSync(dirname(plan.to), { recursive: true });
    if (existsSync(plan.to)) rmSync(plan.to, { recursive: true, force: true });
    renameSync(plan.from, plan.to);
  }
  // 上次若在写 skip-reason 前中断,这里补上(GLM 008[1])
  if (existsSync(plan.to) && !existsSync(join(plan.to, "skip-reason.txt"))) writeFileSync(join(plan.to, "skip-reason.txt"), plan.skipReasonText);
  if (existsSync(plan.sample)) rmSync(plan.sample);
  appendSkip(state, plan.entry);
  return state;
}

function isMain() {
  try { return process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url); } catch { return false; }
}

if (isMain()) {
  const args = process.argv.slice(2);
  const val = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
  const id = val("--id");
  const reason = val("--reason");
  const apply = args.includes("--apply");
  if (!id || !reason) { console.error("用法:node scripts/unpublish-episode.mjs --id <id> --reason \"<为什么>\" [--apply]"); process.exit(2); }
  const metaPath = join(ROOT, "data/episodes", id, "meta.json");
  const meta = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, "utf8")) : null;
  const plan = unpublishPlan(id, meta, { reason });
  console.log(`下架计划 ${id}:`);
  console.log(`  ① 挪目录 ${existsSync(plan.from) ? "✓" : "(不存在,跳过)"} ${plan.from} → ${plan.to}`);
  console.log(`  ② 删集页 ${existsSync(plan.sample) ? "✓" : "(不存在,跳过)"} ${plan.sample}`);
  console.log(`  ③ 记账   ${JSON.stringify(plan.entry)}`);
  if (!apply) { console.log("(dry-run:未动任何东西;加 --apply 执行)"); process.exit(0); }
  const state = JSON.parse(readFileSync(STATE_FILE, "utf8"));
  // drift #90:**先**记 overrides.skip(冲不掉的那份),再动文件和 state —— 09-03 两条跨源重复下架就是被回仓冲掉过
  updateLedgerOverrides((ov) => { ov.forget = ov.forget.filter((x) => x !== plan.entry.id); if (!ov.skip.some((e) => e.id === plan.entry.id)) ov.skip.push(plan.entry); });
  applyUnpublish(plan, state);
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2) + "\n");
  console.log("➡️  必须 commit + push:data/ledger-overrides.json + data/pipeline-state.json(+ 删除的集目录/集页)—— 没推上去,云端下一班看不见这次裁决。");
  console.log(`✅ 已下架 ${id}(账本已记;接着跑重建链 + 部署)`);
  // ⚠️ 2026-09-03 实账:云端跑批回仓用 `git pull --rebase -X theirs`,**它修改过的 pipeline-state.json 以 run 版为准**
  //    → 跑批期间手工加的账本条目会被冲掉(那次两条「跨源重复」丢了,靠事后核对才发现)。
  console.log("⚠️ 若此刻云端跑批(C7b)正在跑,它回仓时会用自己的 pipeline-state 覆盖:跑批结束后请复核 origin 账本仍含本条,必要时重跑本命令(幂等)。");
}
