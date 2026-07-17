#!/usr/bin/env node
// 遍历 data/episodes/*/ 中已产出 digest.json 的集,逐集跑机器闸门(三联)。
// 任一集任一金句不过 → exit 1。供 pre-commit 强制(tech-debt D6:防失真硬门进提交闸)。
import { readdirSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { gateEpisode } from "./gate.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const base = join(ROOT, "data/episodes");
if (!existsSync(base)) {
  console.log("[机器闸门门] 无 data/episodes,跳过");
  process.exit(0);
}
const dirs = readdirSync(base, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(base, d.name, "digest.json")))
  .map((d) => d.name);

if (!dirs.length) {
  console.log("[机器闸门门] 暂无带 digest.json 的集,跳过");
  process.exit(0);
}

let bad = 0;
for (const name of dirs) {
  const g = gateEpisode(join(base, name));
  if (g.allPass) {
    console.log(`[机器闸门门] ✅ ${name}: ${g.passed}/${g.total} 金句过三联`);
  } else {
    bad++;
    console.error(`[机器闸门门] ❌ ${name}: 仅 ${g.passed}/${g.total} 过三联,失真金句:`);
    g.results.forEach((r, i) => {
      if (!r.pass) console.error(`   #${i + 1} 逐字${r.verbatim ? "✓" : "✗"} 时间戳${r.timestamp ? "✓" : "✗"} 说话人${r.speaker ? "✓" : "✗"}  「${String(r.quote).slice(0, 60)}」`);
    });
  }
}
if (bad) {
  console.error(`[机器闸门门] ${bad} 集含失真金句 → 阻止提交。修金句(scripts/repair-quotes.mjs / 重浓缩)再提交。`);
  process.exit(1);
}
console.log("[机器闸门门] 全部集金句过三联 ✅");
