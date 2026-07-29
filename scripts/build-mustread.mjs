// C13c · 必读页生成:构建时按 🔒 拍板 #19 自算,零人工。
// 口径真相 = 设计稿/_决策存档/must-read-rules.html:
//   A「话说得最狠的」= 判官全票率 = votes"3/3" 数 ÷ 金句总候选数(kept+dropped 都算分母;
//     逆向核实:06-14 Pincus 集 18/19=95%,与设计稿页面分毫一致)
//   C「读完还有地方可去」= 枢纽度 = 这一集挂着多少个「全站 ≥3 集在讲」的实体
//   硬闸:同一播客源在 8 集里不超过一半(4);两组去重,C 组顺位递补。
// 页面结构照抄 设计稿/must-read.html(mrtop + 两组 mrh + grid),卡片复用首页同一套 card()。
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { loadAllEpisodes } from "./build-entities.mjs";
import { card, leftRail, categoriesOf, taxonomyCategories, topBar, scriptBlock } from "./build-list.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/** 口径 A:全票率。分母 = 金句总候选(kept+dropped);无候选 rate=0 不除零。 */
export function unanimityRate(report) {
  const all = [...(report?.kept ?? []), ...(report?.dropped ?? [])];
  const num = all.filter((q) => q?.votes === "3/3").length;
  const den = all.length;
  return { num, den, rate: den ? num / den : 0 };
}

/** 实体全站频次:出现于几集(同集重复只算一次)。 */
export function entityFreq(episodes) {
  const freq = new Map();
  for (const ep of episodes) {
    const ids = new Set((ep.entities?.entities ?? []).map((e) => e.id));
    for (const id of ids) freq.set(id, (freq.get(id) ?? 0) + 1);
  }
  return freq;
}

/** 口径 C:枢纽度 = 挂着多少个全站 ≥3 集在讲的实体。 */
export function hubCount(ep, freq) {
  const ids = new Set((ep.entities?.entities ?? []).map((e) => e.id));
  return [...ids].filter((id) => (freq.get(id) ?? 0) >= 3).length;
}

const SOURCE_CAP = 4; // 同源不超一半(8 集的一半)

/**
 * 选集:A 组前 4 + C 组前 4。去重(两榜都进只留 A,C 顺位递补);
 * 同源全局计数 ≤4;同分按 id 升序 → 输入顺序无关,构建可复现。
 */
export function pickMustread(episodes, { aOf, cOf }) {
  const byScore = (score) => (x, y) => score(y) - score(x) || (x.meta.id < y.meta.id ? -1 : 1);
  const picked = new Set();
  const perSource = new Map();
  const take = (sorted, n) => {
    const out = [];
    for (const ep of sorted) {
      if (out.length >= n) break;
      const src = ep.meta.podcast ?? "";
      if (picked.has(ep.meta.id)) continue;
      if ((perSource.get(src) ?? 0) >= SOURCE_CAP) continue;
      picked.add(ep.meta.id);
      perSource.set(src, (perSource.get(src) ?? 0) + 1);
      out.push(ep);
    }
    return out;
  };
  return {
    a: take([...episodes].sort(byScore(aOf)), 4),
    c: take([...episodes].sort(byScore(cOf)), 4),
  };
}

/** 整页(frontmatter + HTML)。aOf/cOf/hasCover 可注入,测试只测本函数。 */
export function renderMustread(episodes, { aOf, cOf, hasCover }) {
  const { a, c } = pickMustread(episodes, { aOf, cOf });
  const rail = leftRail(episodes, categoriesOf, taxonomyCategories(), null);
  const grid = (eps) =>
    `<div class="grid">${eps.map((ep) => card(ep, categoriesOf(ep), hasCover)).join("")}</div>`;

  return `---
title: "必读"
---

<div class="pd">
  ${topBar("mustread")}
  <div class="pd-shell two">
  ${rail}
  <div class="pd-mid">
    <div class="pd-mrtop">
      <h1 class="pt">必读</h1>
      <p>没有编辑,这一栏是机器每次构建时自己算出来的 —— 两条口径各挑一半,并且限制同一个播客源不超过一半,免得整栏都来自同一档节目。</p>
    </div>
    <div class="pd-mrh"><b>话说得最狠的</b><span>判官全票率最高 —— 抽出的金句里,三位判官全票通过的比例</span></div>
    ${grid(a)}
    <div class="pd-mrh"><b>读完还有地方可去</b><span>枢纽度最高 —— 挂着最多「全站至少 3 集都在讲」的话题</span></div>
    ${grid(c)}
  </div>
  </div>
</div>
${scriptBlock()}
`;
}

function isMain() {
  try {
    return process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
}

if (isMain()) {
  // 只算已发布集(有集页):必读不许指向还没上站的半成品
  const episodes = loadAllEpisodes(join(ROOT, "data/episodes")).filter((ep) =>
    existsSync(join(ROOT, "samples", `${ep.meta.id}.md`)),
  );
  const freq = entityFreq(episodes);
  const rateOf = new Map(
    episodes.map((ep) => {
      const p = join(ROOT, "data/episodes", ep.meta.id, "judge-report.json");
      return [ep.meta.id, existsSync(p) ? unanimityRate(JSON.parse(readFileSync(p, "utf8"))).rate : 0];
    }),
  );
  const html = renderMustread(episodes, {
    aOf: (ep) => rateOf.get(ep.meta.id) ?? 0,
    cOf: (ep) => hubCount(ep, freq),
    hasCover: (id) => existsSync(join(ROOT, "data/episodes", id, "cover.jpg")),
  });
  const outIdx = process.argv.indexOf("--out");
  const out = outIdx >= 0 && process.argv[outIdx + 1] ? process.argv[outIdx + 1] : join(ROOT, "site/content/must-read.md");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log(`✅ 必读页 → ${out}(A 组 4 + C 组 4,同源 ≤${SOURCE_CAP})`);
}
