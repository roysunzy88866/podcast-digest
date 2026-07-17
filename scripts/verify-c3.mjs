#!/usr/bin/env node
// C3 验收(US-6 类型化关联区 + US-8 实体页溯源 + US-9 跨集聚合)· 一站式校验。
//   ① 实体层闸门全过(死链 + 产物一致性 + 属性事实层)
//   ② 跨集聚合是真的:至少一个实体的页真汇总到 ≥2 集(#8 唯一验收点),读 site/public 的实体页 HTML
//   ③ 实体页是真 Quartz 产物且金句墙块嵌入渲染成 transclude(P1 契约落地)
//   ④ 集页升级落地:关联区按角色分行(内部链) + 金句挂块 ID
//   ⑤ host=null 集页不打印 null/undefined
// 前置:先 build(bootstrap-site.sh 或 site 里 build),否则 ② ③ 读不到 HTML。
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { gateEntities } from "./gate-entities.mjs";
import { loadAllEpisodes, aggregate, quotesFor } from "./build-entities.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "site/public");
let ok = true;
const fail = (m) => ((ok = false), console.error("❌ " + m));
const pass = (m) => console.log("✅ " + m);

// ① 实体层闸门
const g = gateEntities();
if (g.pass) pass(`实体层闸门:${g.counts.entities} 实体页,死链/一致性/属性事实层全绿`);
else {
  fail(`实体层闸门未过(${g.failures.length} 条):`);
  for (const f of g.failures.slice(0, 8)) console.error(`     [${f.kind}] ${f.file ?? ""} — ${f.reason ?? ""}`);
}

// ② 跨集聚合是真的(#8):从数据算出跨 ≥2 集的实体,再去 HTML 里核实那一页真汇总了两集
const base = join(root, "data/episodes");
const aliases = JSON.parse(readFileSync(join(root, "data/aliases.json"), "utf8"));
const aliasById = new Map((aliases.entities ?? []).map((e) => [e.id, e]));
const episodes = loadAllEpisodes(base);
const aggs = aggregate(episodes, aliasById);
const multi = aggs.filter((a) => new Set(a.appearances.map((x) => x.epId)).size >= 2);
if (!multi.length) {
  fail("没有任何实体跨 ≥2 集 → #8 聚合演示不出来(灌集 2 白灌)");
} else {
  pass(`跨集实体 ${multi.length} 个:${multi.map((a) => a.name).join(" · ")}`);
  // 挑一个跨集实体,去它的 HTML 页核实真汇总了两集的标题
  const probe = multi[0];
  const html = join(pub, "entities", `${probe.file}.html`);
  if (!existsSync(html)) {
    fail(`跨集实体页产物不存在:${html}(先 build)`);
  } else {
    const h = readFileSync(html, "utf8");
    const realQuartz = h.includes("<article") && h.length > 2000;
    if (realQuartz) pass(`「${probe.name}」是真 Quartz 产物(${h.length}B)`);
    else fail(`「${probe.name}」页不像真 Quartz 产物`);
    // ③ 金句墙块嵌入渲染成 transclude(P1 契约)
    if (h.includes('class="transclude"') || h.includes("transclude")) pass("金句墙:块嵌入渲染成 transclude(回原集链白送)");
    else fail("金句墙:没渲染出 transclude(块嵌入契约没落地)");
    // ③b **金句墙真含金句正文**——不只是 transclude 标签存在(2026-07-18 审计逮到:块 ID 放署名行 →
    //    嵌入只拉到「—— 某人 [时间]」、金句正文全丢,却过了闸门和 171 测试。此检查专防这类空壳复辟)
    const qs = quotesFor(probe, episodes, aliasById);
    if (qs.length) {
      const zh = String(qs[0].q.zh).replace(/[^一-龥]/g, "").slice(0, 8); // 取纯中文片段避开标点转义
      if (zh && h.includes(zh)) pass(`金句墙真含金句正文(嵌到「${zh}…」)`);
      else fail(`金句墙是空壳:transclude 在但金句正文「${zh}」没渲染进页(块 ID 没覆盖正文?)`);
    } else {
      console.log(`ℹ️「${probe.name}」无匹配金句,跳过金句正文检查`);
    }
    // 真汇总两集:两集标题都出现在这一页(出现在这些集)
    const titles = probe.appearances.map((a) => String(a.epTitle).slice(0, 8));
    const bothIn = titles.every((t) => h.includes(t));
    if (bothIn) pass(`「${probe.name}」页真汇总 ${titles.length} 集(标题都在)`);
    else fail(`「${probe.name}」页没汇总全部相关集(缺:${titles.filter((t) => !h.includes(t)).join("、")})`);
  }
}

// ④ 集页升级落地:关联区 + 块 ID(读集页 HTML)
for (const ep of episodes) {
  const html = join(pub, `${ep.meta.id}.html`);
  if (!existsSync(html)) { fail(`集页产物不存在:${ep.meta.id}.html`); continue; }
  const h = readFileSync(html, "utf8");
  // 关联区:角色标签 + 内部链(Quartz 把 [[X]] 渲染成 <a ... class="internal">)
  const hasRelation = /关联|嘉宾|概念/.test(h) && h.includes("internal");
  if (hasRelation) pass(`${ep.meta.id}:关联区渲染(角色标签 + 内部链)`);
  else fail(`${ep.meta.id}:关联区没渲染出来`);
  // ⑤ host=null 的集页不打印 null/undefined
  if (ep.meta.host == null) {
    if (/主持[：:][^<]*null/.test(h) || h.includes("undefined")) fail(`${ep.meta.id}:host=null 却渲染出 null/undefined`);
    else pass(`${ep.meta.id}:host=null 处理干净(无 null/undefined)`);
  }
}

if (!ok) {
  console.error("\n❌ C3 验收未过。");
  process.exit(1);
}
console.log("\n✅ C3 验收通过:跨集聚合真汇总 + 实体页块嵌入渲染 + 集页关联区升级 + 实体层闸门全绿。");
