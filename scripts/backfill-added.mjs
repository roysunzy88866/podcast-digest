#!/usr/bin/env node
// 一次性回填:给存量集 meta.json 补 `added`(入库日 = 该集 meta.json 首次进 git 的提交日)。
// 背景(用户 2026-08-09):「最新」列表改按**入库时间**分组/排序(见 build-list.mjs 的 dateKey),
//   否则演讲带 YouTube 原视频旧日期、处理好入库时埋在列表中间、顶部不动 → 用户以为「没新增」。
//   新集由 run-pipeline 首次处理时自钉 added;存量集没有,靠本脚本回填出历史入库序。
// 幂等:已有 added 的跳过;可反复跑。取 git 首个 --diff-filter=A(首次 add)的提交日 %cs(YYYY-MM-DD)。
import { readdirSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";

const ROOT = process.cwd();
const EPISODES = join(ROOT, "data/episodes");

/** 该文件首次进 git 的提交日(YYYY-MM-DD);git log 新→旧,最后一行=最早那次 add。取不到返回 null。 */
function firstAddDate(relPath) {
  try {
    const out = execFileSync("git", ["log", "--diff-filter=A", "--format=%cs", "--", relPath], {
      cwd: ROOT,
      encoding: "utf8",
    }).trim();
    const lines = out.split("\n").filter(Boolean);
    const first = lines.at(-1);
    return first && /^\d{4}-\d{2}-\d{2}$/.test(first) ? first : null;
  } catch {
    return null;
  }
}

let set = 0;
let skip = 0;
let miss = 0;
// 按名排序:readdir 顺序不保证 → 排一下让日志计数可复现(GLM 20260809-001[4])
const dirs = readdirSync(EPISODES, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();
for (const name of dirs) {
  const metaPath = join(EPISODES, name, "meta.json");
  if (!existsSync(metaPath)) continue;
  const raw = readFileSync(metaPath, "utf8");
  const meta = JSON.parse(raw);
  if (meta.added) {
    skip++;
    continue;
  }
  // 首选该集 meta.json 的首提日;取不到回落 meta.date(至少不比现状差)
  const added = firstAddDate(`data/episodes/${name}/meta.json`) || (meta.date ? String(meta.date).slice(0, 10) : null);
  if (!added) {
    miss++;
    console.warn(`⚠️ ${name}:无 git 首提日也无 meta.date,跳过(不猜)`);
    continue;
  }
  meta.added = added;
  // 保留原文件的尾换行状态,只加 added 一行、不动其余格式(外科手术;GLM 20260809-001[1])
  const trailingNL = raw.endsWith("\n") ? "\n" : "";
  writeFileSync(metaPath, JSON.stringify(meta, null, 2) + trailingNL);
  set++;
}
console.log(`✅ backfill-added:补 ${set} 集 / 已有跳过 ${skip} / 无日期 ${miss}`);
