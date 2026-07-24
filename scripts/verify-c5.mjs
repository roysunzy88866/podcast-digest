#!/usr/bin/env node
// C5/C10 验收(列表页)· 机器可覆盖的部分(视图页签切换/已读压暗/图谱观感靠用户亲手点)。
// 2026-07-24 首页改版后口径(需求共创/首页交互改版.md):
//   ① 首页含 base 代码块(只筛 type=episode)+ 三视图(最新卡片/全部表格/按主题看板)全部日期倒序
//   ② 8 大类速览行齐全(词表驱动)
//   ③ 词表闸:每个集页 frontmatter 的 tags/category 都在 8 大类词表内(163 细标签不许回流)
//   ④ 0 死链:每集有 samples/<id>.md;实体页全部 unlisted(不进图谱/搜索)
//   ⑤ 搜索索引含中文(若已 build)
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadAllEpisodes } from "./build-entities.mjs";
import { renderList, taxonomyCategories } from "./build-list.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
let ok = true;
const fail = (m) => ((ok = false), console.error("❌ " + m));
const pass = (m) => console.log("✅ " + m);

const episodes = loadAllEpisodes(join(root, "data/episodes"));
if (!episodes.length) fail("data/episodes 无集 → 列表页演示不出来(先灌集)");

const md = renderList(episodes);
const cats = taxonomyCategories();

// ① base 代码块 + 三视图 + 全部日期倒序
if (md.includes("```base") && md.includes('note.type == "episode"')) pass("首页含 base 代码块,只筛 type=episode");
else fail("首页缺 base 代码块或 type 筛选");
for (const v of ["name: 最新", "name: 全部", "name: 按主题"]) {
  if (md.includes(v)) pass(`视图页签:${v.replace("name: ", "")}`);
  else fail(`缺视图:${v}`);
}
const descSorts = md.match(/property: note\.date\n\s+direction: DESC/g)?.length ?? 0;
if (descSorts === 3) pass("三视图全部按日期倒序");
else fail(`日期倒序 sort 只有 ${descSorts}/3 处`);

// ② 8 大类速览行
const missCat = cats.filter((c) => !md.includes(`#${c}</a>`));
if (cats.length === 8 && !missCat.length) pass("8 大类速览行齐全(词表驱动)");
else fail(`大类速览缺:${missCat.join("、") || `词表数=${cats.length}≠8`}`);

// ③ 词表闸:集页 frontmatter tags/category ⊆ 词表(细标签不许回流 frontmatter)
const vocabSet = new Set(cats);
let tagViolations = 0;
for (const ep of episodes) {
  const p = join(root, "samples", `${ep.meta.id}.md`);
  if (!existsSync(p)) continue; // 死链在 ④ 报
  const fm = readFileSync(p, "utf8").split("\n---")[0];
  const tags = [...fm.matchAll(/^ {2}- (.+)$/gm)].map((m) => m[1]).filter((t) => !t.startsWith('"[[')); // tags 列表项(排除 guests 等双链数组,它们是行内数组不匹配此形)
  const cat = fm.match(/^category: (.+)$/m)?.[1]?.replace(/^"|"$/g, "");
  for (const t of tags) if (!vocabSet.has(t)) (tagViolations++, fail(`集[${ep.meta.id}] tag「${t}」不在 8 大类词表`));
  if (!cat || !vocabSet.has(cat)) (tagViolations++, fail(`集[${ep.meta.id}] category「${cat}」缺失或不在词表`));
}
if (!tagViolations) pass(`词表闸:${episodes.length} 集 tags/category 全部在 8 大类内`);

// ④ 0 死链 + 实体页全部 unlisted
let dead = 0;
for (const ep of episodes) {
  if (!existsSync(join(root, "samples", `${ep.meta.id}.md`))) (dead++, fail(`死链:samples/${ep.meta.id}.md 不存在`));
}
if (!dead) pass(`0 死链(${episodes.length} 集都有集页)`);
const entDir = join(root, "samples/entities");
if (existsSync(entDir)) {
  const entFiles = readdirSync(entDir).filter((f) => f.endsWith(".md"));
  const notUnlisted = entFiles.filter((f) => !readFileSync(join(entDir, f), "utf8").split("\n---")[0].includes("unlisted: true"));
  if (!notUnlisted.length) pass(`实体页 ${entFiles.length} 个全部 unlisted(不进图谱/搜索,直链照访)`);
  else fail(`实体页未 unlisted:${notUnlisted.slice(0, 5).join("、")}${notUnlisted.length > 5 ? "…" : ""}`);
}

// ⑤ 搜索索引含中文(若已 build)
const idx = join(root, "site/public/static/contentIndex.json");
if (existsSync(idx)) {
  if (/[一-鿿]/.test(readFileSync(idx, "utf8"))) pass("搜索索引含中文(US-3)");
  else fail("搜索索引无中文 → 中文搜索会失效");
} else {
  console.log("ℹ️ 未 build(site/public 无索引)→ 跳过搜索索引检查");
}

if (!ok) {
  console.error("\n❌ C5/C10 验收未过。");
  process.exit(1);
}
console.log("\n✅ C5/C10 验收通过(机器可覆盖部分)。视图切换/已读压暗/图谱观感靠用户亲手点验。");
