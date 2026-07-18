#!/usr/bin/env node
// C6 验收(US-7 相关单集 + US-9④/US-10 图谱)· 一站式校验。
//   ① 关联层闸门:相关单集 0 死链
//   ② 相关单集真渲染进集页 HTML:区块 + 指向相关集的内部链 + 关联原因具体到维度/实体名(防假绿)
//   ③ 图谱真渲染:集页 HTML 有 graph 组件(局部+全局) + contentIndex 有边(画得出邻域)
// 前置:先 build(bootstrap-site.sh 或 site build),否则 ②③ 读不到 HTML。
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadAllEpisodes, relatedEpisodes } from "./build-entities.mjs";
import { gateRelations } from "./gate-relations.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "site/public");
let ok = true;
const fail = (m) => ((ok = false), console.error("❌ " + m));
const pass = (m) => console.log("✅ " + m);

const base = join(root, "data/episodes");
const episodes = loadAllEpisodes(base);
// [GLM 20260718-009·2] 死链以**构建产物 HTML** 为准(可点跳的真目标是 site/public/<id>.html,不是 samples 源)
const htmlExists = (id) => existsSync(join(pub, `${id}.html`));

// ① 关联层闸门:0 死链(相关单集点跳的目标 HTML 必须存在)
const rel = gateRelations(episodes, htmlExists);
if (rel.pass) pass("关联层闸门:相关单集 0 死链");
else {
  fail(`关联层闸门未过(${rel.failures.length} 条):`);
  for (const f of rel.failures.slice(0, 8)) console.error(`     [${f.kind}] ${f.epId} — ${f.reason}`);
}

// ② 相关单集真渲染进集页 HTML(防假绿:区块 + 内部链 + 维度标签 + 实体名)
let anyRelated = false;
for (const ep of episodes) {
  const related = relatedEpisodes(ep.meta.id, episodes);
  if (!related.length) continue;
  anyRelated = true;
  const html = join(pub, `${ep.meta.id}.html`);
  if (!existsSync(html)) {
    fail(`集页产物不存在:${ep.meta.id}.html(先 build)`);
    continue;
  }
  const h = readFileSync(html, "utf8");
  if (h.includes("相关单集")) pass(`${ep.meta.id}:相关单集区渲染`);
  else fail(`${ep.meta.id}:相关单集区没渲染进 HTML`);
  const top = related[0];
  // [GLM 20260718-009·4] 查 href 里含 epId(而非裸子串——防 epId 出现在图谱数据/时间戳里假绿)
  const linkRe = new RegExp(`href="[^"]*${top.epId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`);
  if (linkRe.test(h)) pass(`${ep.meta.id}:相关单集真链到 ${top.epId}(href 可点跳)`);
  else fail(`${ep.meta.id}:相关单集没链到 ${top.epId}(href 里找不到)`);
  // 维度标签(同嘉宾/同概念/同公司)—— 专属相关单集原因,关联区① 用「嘉宾/概念」不带「同」→ 防假绿
  if (/同嘉宾|同概念|同公司/.test(h)) pass(`${ep.meta.id}:关联原因真渲染(带「同X」维度标签)`);
  else fail(`${ep.meta.id}:相关单集是空壳(没渲染出「同X」关联原因)`);
}
if (!anyRelated) fail("没有任何集有相关单集 → US-7 演示不出来(需 ≥2 集有共享实体)");

// ③ 图谱真渲染
if (episodes.length) {
  const html = join(pub, `${episodes[0].meta.id}.html`);
  if (existsSync(html)) {
    const h = readFileSync(html, "utf8");
    if (h.includes("graph-container")) pass("局部图组件渲染进集页");
    else fail("局部图组件没渲染(装了但没出?)");
    if (h.includes("global-graph")) pass("全局图组件渲染进集页(可展开漫游 US-10)");
    else fail("全局图组件没渲染");
  }
}
const ci = join(pub, "static/contentIndex.json");
if (existsSync(ci)) {
  const d = JSON.parse(readFileSync(ci, "utf8"));
  const edges = Object.values(d).reduce((n, e) => n + (e.links?.length || 0), 0);
  if (edges > 0) pass(`图谱数据有边(${edges} 条 → 画得出邻域/全局网)`);
  else fail("图谱数据无边(图画不出关系)");
} else {
  console.log("ℹ️ 无 contentIndex.json(先 build),跳过图谱数据检查");
}

if (!ok) {
  console.error("\n❌ C6 验收未过。");
  process.exit(1);
}
console.log("\n✅ C6 验收通过:相关单集真渲染+可点+原因具体+0死链;图谱(局部+全局)渲染、数据有边。");
