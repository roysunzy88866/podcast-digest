#!/usr/bin/env node
// 每集金句必过三联闸门,否则 exit 1。供 pre-commit 强制(tech-debt D6)。
//
// 防假绿(依 GLM 20260717-012 [1][2],与 gate.mjs「空数组恒真」同一类洞):
//   · **缺失≠通过**:已发布的集页(samples/*.md)必须有对应 data/episodes/<id>/digest.json;
//     删掉 digest 就想让闸门「没东西可查→放行」= 删文件冒充通过,必须拦。
//   · 单集解析/校验抛异常 → 记为该集不过并继续查其它集,最后 exit 1;不让异常炸穿成栈回溯。
import { readdirSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { gateEpisode } from "./gate.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const base = join(ROOT, "data/episodes");
const samplesDir = join(ROOT, "samples");

const ls = (d, f) => (existsSync(d) ? readdirSync(d, { withFileTypes: true }).filter(f) : []);

// 已发布集页(内容源)
const publishedIds = ls(samplesDir, (e) => e.isFile() && e.name.endsWith(".md")).map((e) =>
  e.name.replace(/\.md$/, ""),
);
// 有 digest 的集
const gatedIds = ls(base, (e) => e.isDirectory() && existsSync(join(base, e.name, "digest.json"))).map(
  (e) => e.name,
);

let bad = 0;

// ① 缺失≠通过:发布了却没 digest → 闸门无从校验 → 拦
for (const id of publishedIds) {
  if (!gatedIds.includes(id)) {
    console.error(`[机器闸门门] ❌ ${id}: 已发布集页 samples/${id}.md 却找不到 data/episodes/${id}/digest.json`);
    console.error(`              → 闸门无从校验该集金句。缺文件不等于通过(防「删文件冒充放行」)。`);
    bad++;
  }
}

// ② 逐集跑三联
for (const id of gatedIds) {
  let g;
  try {
    g = gateEpisode(join(base, id));
  } catch (e) {
    console.error(`[机器闸门门] ❌ ${id}: 闸门执行失败(digest/transcript 损坏?):${e.message}`);
    bad++;
    continue;
  }
  if (g.allPass) {
    console.log(`[机器闸门门] ✅ ${id}: ${g.passed}/${g.total} 金句过三联`);
  } else {
    bad++;
    console.error(`[机器闸门门] ❌ ${id}: 仅 ${g.passed}/${g.total} 过三联${g.total === 0 ? "(0 条金句=没兑现 US-11)" : ",失真金句:"}`);
    g.results.forEach((r, i) => {
      if (!r.pass)
        console.error(
          `   #${i + 1} 逐字${r.verbatim ? "✓" : "✗"} 时间戳${r.timestamp ? "✓" : "✗"} 说话人${r.speaker ? "✓" : "✗"}  「${String(r.quote).slice(0, 60)}」`,
        );
    });
  }
}

if (!publishedIds.length && !gatedIds.length) {
  console.log("[机器闸门门] 尚无集页也无 digest,无可校验(全新仓库)");
  process.exit(0);
}
if (bad) {
  console.error(`[机器闸门门] ${bad} 集未过 → 阻止提交。修金句(judge/repair/重浓缩)或补齐 digest 再提交。`);
  process.exit(1);
}
console.log(`[机器闸门门] ${gatedIds.length} 集金句全过三联 ✅`);
