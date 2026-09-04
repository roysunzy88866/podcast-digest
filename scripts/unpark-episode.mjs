#!/usr/bin/env node
// 捞回「停车」的集(unpublish-episode.mjs 的逆操作)。2026-09-04 首用:practicalai / productpodcast
// 因转瞬失败连败 3 次被停车,而转写(已付费)还在 git 历史里。
//
// 什么是停车:一集连续 3 班在浓缩/翻译处失败 → 挪进隔离区 data/skipped + 记进 skipped 账本,
// 不再自动重试(免每班重烧钱)。账本 id 进 seen,所以光恢复文件没用,**必须同时删账本条目**。
//
// 捞回 = 两件事:
//   ① 从 git 历史恢复 data/episodes/<id>/(转写/译文/meta/封面;不含 .digest-raw.bad.txt 这类坏产物)
//   ② 从 pipeline-state.json 的 skipped 账本删掉该条 → 重新可被选中;半成品无 digest.json,
//      故不算「已完成」,下一班会重新处理并**复用已有转写稿**(不重烧 ASR)。
//
// 用法:node scripts/unpark-episode.mjs --id <id> --from <git-ref> [--apply]
//   --from 是含该集文件的提交(如 882fbc122^)。默认 dry-run。
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { STATE_FILE, updateLedgerOverrides } from "./run-pipeline.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
// 不恢复的文件(GLM 009[1]):
//  · .digest-raw.bad.txt —— 坏浓缩稿,恢复了只会混淆人工排查
//  · digest.json —— **关键**:有它就被 completedIds() 算作「已完成」,反而不会被重跑,捞回等于白做。
//    停车集正常不该有 digest(它们就是卡在浓缩/翻译之前),但历史里万一有陈稿也绝不能带回来。
const JUNK = [".digest-raw.bad.txt", "digest.json"];

/** 纯逻辑:从 `git ls-tree` 的文件清单算出要恢复哪些、跳过哪些。 */
export function unparkFiles(treeLines, { junk = JUNK } = {}) {
  const all = String(treeLines ?? "").split("\n").map((s) => s.trim()).filter(Boolean);
  const keep = all.filter((p) => !junk.some((j) => p.endsWith(j)));
  return { keep, skipped: all.filter((p) => !keep.includes(p)) };
}

/** 纯逻辑:从账本删掉该 id(返回新账本 + 是否真删到)。删不到要响亮说 —— 说明它本就不在账本里,
 *  那这次「捞回」多半找错了集,别让人以为捞成功了。 */
export function dropSkipEntry(skipped, id) {
  const before = (skipped ?? []).length;
  const next = (skipped ?? []).filter((s) => s.id !== id);
  return { skipped: next, removed: before - next.length };
}

function isMain() {
  try { return process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url); } catch { return false; }
}

if (isMain()) {
  const args = process.argv.slice(2);
  const val = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
  const id = val("--id"); const from = val("--from"); const apply = args.includes("--apply");
  if (!id || !from) { console.error('用法:node scripts/unpark-episode.mjs --id <id> --from <git-ref> [--apply]'); process.exit(2); }
  const ls = spawnSync("git", ["ls-tree", "--name-only", "-r", from, `data/episodes/${id}/`], { encoding: "utf8", cwd: ROOT });
  // git 本身失败(ref 不存在等)要把真错误抛出来,别吞成「没有文件」误导人(GLM 009[2])
  if (ls.error || ls.status !== 0) { console.error(`❌ git ls-tree 失败:${ls.error?.message ?? ls.stderr?.trim()}`); process.exit(1); }
  const { keep, skipped: junked } = unparkFiles(ls.stdout);
  if (!keep.length) { console.error(`❌ ${from} 里没有 data/episodes/${id}/ 的文件(ref 或 id 不对?)`); process.exit(1); }
  const state = JSON.parse(readFileSync(STATE_FILE, "utf8"));
  const { skipped: nextSkipped, removed } = dropSkipEntry(state.skipped, id);
  console.log(`捞回计划 ${id}:`);
  console.log(`  ① 从 ${from} 恢复 ${keep.length} 个文件:`); keep.forEach((f) => console.log(`       ${f.split("/").pop()}`));
  if (junked.length) console.log(`     (跳过坏产物:${junked.map((f) => f.split("/").pop()).join(", ")})`);
  console.log(`  ② 删账本条目:${removed ? "✓ 1 条" : "✗ 账本里没有这一条(它本就不在停车状态?先核对 id)"}`);
  console.log(`  ③ 无 digest.json → 下一班当半成品重跑,复用已有转写稿(不重烧 ASR)`);
  if (!apply) { console.log("(dry-run:未动任何东西;加 --apply 执行)"); process.exit(0); }
  if (!removed) { console.error("❌ 账本里没这一条,拒绝执行 —— 光恢复文件不删账本 = 捞不回来,多半是 id 找错了。"); process.exit(1); }
  // 注:git checkout <ref> -- <paths> 会顺带把这些文件放进暂存区(这里是想要的:捞回后就要提交)。
  // 代价是工作区若有同名未暂存改动会被覆盖 —— 停车集在本机通常根本不存在,可接受(GLM 009[3])。
  const co = spawnSync("git", ["checkout", from, "--", ...keep], { encoding: "utf8", cwd: ROOT });
  if (co.status !== 0) { console.error(`❌ git checkout 失败:${co.stderr}`); process.exit(1); }
  // drift #90:**先**记 overrides.forget(它才是冲不掉的那份),再改 state —— 光改 state 会被云端回仓冲掉(09-04 实账)
  updateLedgerOverrides((ov) => { if (!ov.forget.includes(id)) ov.forget.push(id); ov.skip = ov.skip.filter((e) => e.id !== id); });
  state.skipped = nextSkipped;
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2) + "\n");
  console.log(`✅ 已捞回 ${id}(文件已恢复、overrides.forget 已记、账本条目已删)`);
  console.log("➡️  必须 commit + push:data/ledger-overrides.json + data/pipeline-state.json + data/episodes/<id>/ —— 没推上去,云端下一班看不见这次裁决。");
}
