#!/usr/bin/env node
// C5 验收(US-1/2/3 列表页)· 机器可覆盖的部分(前端交互=筛选/搜索/已读压暗靠用户亲手点)。
//   ① 单集卡数 == 集数 + 字段齐(标题/来源/日期,每张可溯源到某集)
//   ② 排序=发布日期倒序
//   ③ 标签条含全部 tag 并集(US-2 筛选的候选)
//   ④ 0 死链:每张卡 href 的 slug 有对应 samples/<slug>.md
//   ⑤ 搜索索引含中文(若已 build;P1 已浏览器实测中文搜索真能用)
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadAllEpisodes } from "./build-entities.mjs";
import { renderList, cardData } from "./build-list.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
let ok = true;
const fail = (m) => ((ok = false), console.error("❌ " + m));
const pass = (m) => console.log("✅ " + m);

const episodes = loadAllEpisodes(join(root, "data/episodes"));
if (!episodes.length) fail("data/episodes 无集 → 列表页演示不出来(先灌集)");

const md = renderList(episodes);
const cards = episodes.map(cardData);

// ① 卡数 == 集数 + 字段齐
const cardCount = (md.match(/class="ep-card"/g) || []).length;
if (cardCount === episodes.length) pass(`单集卡 ${cardCount} 张 == 集数 ${episodes.length}`);
else fail(`卡数 ${cardCount} ≠ 集数 ${episodes.length}`);
for (const c of cards) {
  if (c.title && c.date && c.podcast) pass(`卡[${c.slug}]字段齐(标题/来源/日期)`);
  else fail(`卡[${c.slug}]缺字段:title=${!!c.title} date=${!!c.date} podcast=${!!c.podcast}`);
}

// ② 排序=发布日期倒序(md 里卡片出现顺序 == 日期降序)
const orderInMd = [...md.matchAll(/data-slug="([^"]+)"/g)].map((m) => m[1]);
const expected = [...cards].sort((a, b) => String(b.date).localeCompare(String(a.date))).map((c) => c.slug);
if (JSON.stringify(orderInMd) === JSON.stringify(expected)) pass("排序=发布日期倒序");
else fail(`排序不对:实际 ${orderInMd.join(",")} vs 期望 ${expected.join(",")}`);

// ③ 标签条含全部 tag 并集
const allTags = [...new Set(cards.flatMap((c) => c.tags))];
const missing = allTags.filter((t) => !md.includes(`data-tag="${t}"`));
if (!missing.length) pass(`标签条含全部 ${allTags.length} 个 tag(US-2 筛选候选)`);
else fail(`标签条漏 tag:${missing.join("、")}`);

// ④ 0 死链:每张卡 href slug 有对应 samples/<slug>.md
const samplesDir = join(root, "samples");
let dead = 0;
for (const c of cards) {
  if (!existsSync(join(samplesDir, `${c.slug}.md`))) {
    fail(`卡[${c.slug}]死链:samples/${c.slug}.md 不存在`);
    dead++;
  }
}
if (!dead) pass(`0 死链(${cards.length} 张卡都链到真实集页)`);

// ⑤ 搜索索引含中文(若已 build)
const idx = join(root, "site/public/static/contentIndex.json");
if (existsSync(idx)) {
  if (/[一-鿿]/.test(readFileSync(idx, "utf8"))) pass("搜索索引含中文(标题/正文进索引,US-3)");
  else fail("搜索索引无中文 → 中文搜索会失效");
} else {
  console.log("ℹ️ 未 build(site/public 无索引)→ 跳过搜索索引检查(P1 已浏览器实测中文搜索,docs/c5-p1-中文搜索核验证据.md)");
}

if (!ok) {
  console.error("\n❌ C5 验收未过。");
  process.exit(1);
}
console.log(
  "\n✅ C5 验收通过(机器可覆盖部分):卡片字段/排序/标签条/0 死链/搜索索引中文。前端交互(标签筛选/搜索/已读压暗)靠用户亲手点验。",
);
