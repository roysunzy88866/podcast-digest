#!/usr/bin/env node
// C3 Scenario 4 · 实体页聚合(自建,ADR 0008)→ samples/entities/<file>.md
//
// **生成期聚合**(不依赖任何第三方插件做运行期查询):读所有集的 entities.json + digest,
// 按 id 跨集归并 → 每个「在任一集里是 primary」的实体出一页(建页门槛 #9)。
// 一套模板三种实体:
//   · 头部:类型 + 又名 + 数字(出现 N 集 · 金句 M 条 · 关联 K 个)
//   · 集里怎么说它(#7):每集的 how_described + 回原集(带时间戳);没有则整栏不显示
//   · 金句墙(🔒 第 24 轮):人物页=他本人说的;公司/概念页=提到它的金句。![[集#^块]] 嵌入(P1 已验)
//   · 出现在这些集:列所有相关集 + 角色(嘉宾/被提及)
//   · 关联实体:常一起出现的、且**有页的**实体(避免死链)
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, realpathSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { norm } from "./gate.mjs";
import { blockId } from "./render.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const TYPE_CN = { person: "人物", company: "公司", concept: "概念" };
const mmss = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

/** 词边界匹配:needle(归一化词序列)作为连续子序列出现在 hay(归一化词序列)里 */
function containsSeq(hay, needle) {
  if (!needle.length) return false;
  if (needle.length === 1) return hay.includes(needle[0]);
  for (let i = 0; i + needle.length <= hay.length; i++) {
    let ok = true;
    for (let j = 0; j < needle.length; j++) if (hay[i + j] !== needle[j]) { ok = false; break; }
    if (ok) return true;
  }
  return false;
}

/**
 * 跨集按 id 归并。episodes = [{meta, digest, entities}]。aliasById 供又名/金句召回。
 * 只产出「在任一集里是 primary」的实体(建页门槛 #9)。
 */
export function aggregate(episodes, aliasById = new Map()) {
  const byId = new Map();
  for (const ep of episodes) {
    const meta = ep.meta, ents = ep.entities?.entities ?? [];
    for (const e of ents) {
      if (!byId.has(e.id)) {
        byId.set(e.id, { id: e.id, type: e.type, name: e.name, file: e.file, role: e.role, appearances: [] });
      }
      const agg = byId.get(e.id);
      // 显示名/文件名:别名表优先(跨集统一),否则用首次见到的
      const alias = aliasById.get(e.id);
      if (alias) { agg.name = alias.name; agg.file = alias.file; }
      agg.appearances.push({
        epId: meta.id,
        epTitle: meta.title_zh ?? meta.id,
        epDate: meta.date,
        role: e.role,
        primary: !!e.primary,
        how_described: e.how_described ?? "",
        firstTs: e.evidence?.[0]?.t?.[0] ?? null,
      });
    }
  }
  // 建页门槛:任一集 primary
  return [...byId.values()].filter((a) => a.appearances.some((x) => x.primary));
}

/**
 * 实体的金句(🔒 第 24 轮):
 *   · 人物页 = 该人本人说的金句(speaker == name)
 *   · 公司/概念页 = 提到它的金句(entity 任一书写形式词边界命中 quote.en)
 * 返回 [{epId, block, q}](block = ^块ID,供 ![[epId#^block]] 嵌入)。
 */
export function quotesFor(agg, episodes, aliasById = new Map()) {
  const out = [];
  const alias = aliasById.get(agg.id);
  const forms = (alias ? [alias.name, ...(alias.forms ?? [])] : [agg.name, agg.file])
    .map((f) => norm(f))
    .filter((ws) => ws.length);
  for (const ep of episodes) {
    const quotes = ep.digest?.quotes ?? [];
    for (let i = 0; i < quotes.length; i++) {
      const q = quotes[i];
      let hit = false;
      if (agg.type === "person") hit = q.speaker === agg.name;
      else hit = forms.some((fw) => containsSeq(norm(q.en), fw));
      if (hit) out.push({ epId: ep.meta.id, block: blockId(i), q });
    }
  }
  return out;
}

/**
 * 常一起出现的实体 id(同集共现计数),只保留**有页的**(pageIds),排除自己。
 * 排序:①共现次数降序(跨集共现的排前)②**同次数内按集 round-robin 交错**——
 * 否则平票按加载序,先加载的那一集会独占 top-N,把另一集的共现实体(哪怕很相关)全挤掉
 * (独立审计 2026-07-18 实测:智能体的关联全是 Databricks 实体,Modal 的 Akshat 等 18 个被隐去)。
 */
export function related(agg, episodes, pageIds) {
  const info = new Map(); // id -> { count, eps:Set }
  const myEps = new Set(agg.appearances.map((a) => a.epId));
  for (const ep of episodes) {
    if (!myEps.has(ep.meta.id)) continue;
    for (const e of ep.entities?.entities ?? []) {
      if (e.id === agg.id || !pageIds.has(e.id)) continue;
      if (!info.has(e.id)) info.set(e.id, { count: 0, eps: new Set() });
      const x = info.get(e.id);
      x.count++;
      x.eps.add(ep.meta.id);
    }
  }
  // 组内 round-robin:给每条按「(次数, 代表集)」桶内序号,序号小的先 → 各集第 1 个交错、再第 2 个
  const perBucket = new Map();
  const items = [...info.entries()].map(([id, x]) => {
    const ep = [...x.eps].sort()[0];
    const key = `${x.count}|${ep}`;
    const idx = perBucket.get(key) ?? 0;
    perBucket.set(key, idx + 1);
    return { id, count: x.count, ep, idx };
  });
  items.sort((a, b) => b.count - a.count || a.idx - b.idx || a.ep.localeCompare(b.ep));
  return items.map((i) => i.id);
}

/** 一个实体 → 一页 markdown。pageById: id→{file,name} 供关联区链名。 */
export function renderEntityPage(agg, quotes, relatedIds, pageById, aliasById = new Map()) {
  const alias = aliasById.get(agg.id);
  const aliasNames = alias ? (alias.forms ?? []).filter((f) => f !== agg.name && f !== agg.file) : [];
  const roleCn = (r) => ({ host: "主持", guest: "嘉宾", cohost: "联合主持", company: "被讨论公司", concept: "概念" })[r] ?? r;

  const fm = [
    "---",
    `title: ${agg.name}`,
    `entity_type: ${TYPE_CN[agg.type] ?? agg.type}`,
    ...(aliasNames.length ? [`aliases: [${aliasNames.map((a) => `"${a}"`).join(", ")}]`] : []),
    "---",
  ].join("\n");

  const nEp = new Set(agg.appearances.map((a) => a.epId)).size;
  const header = `> [!info] ${TYPE_CN[agg.type] ?? agg.type}${aliasNames.length ? ` · 又名 ${aliasNames.join(" / ")}` : ""}\n> 出现在 ${nEp} 集 · 金句 ${quotes.length} 条 · 关联 ${relatedIds.length} 个`;

  // 集里怎么说它(#7):只列有 how_described 的集;没有则整栏不显示
  const described = agg.appearances.filter((a) => a.how_described);
  const descSection = described.length
    ? `## 集里怎么说它\n\n${described
        .map((a) => `- **[[${a.epId}|《${a.epTitle}》]]**${a.firstTs != null ? `(${mmss(a.firstTs)}起)` : ""}:${a.how_described}`)
        .join("\n")}`
    : "";

  // 金句墙:块嵌入(P1 验过,自带「回原集」);空则不显示(4b)
  const quoteSection = quotes.length
    ? `## 金句\n\n${quotes.map((x) => `![[${x.epId}#^${x.block}]]`).join("\n\n")}`
    : "";

  // 出现在这些集:每集 + 角色
  const epSection = `## 出现在这些集\n\n${agg.appearances
    .map((a) => `- [[${a.epId}|《${a.epTitle}》]] — 作为${roleCn(a.role)}${a.primary ? "" : "(提及)"}`)
    .join("\n")}`;

  // 关联实体:有页的,链 file 名
  const relSection = relatedIds.length
    ? `## 关联实体\n\n${relatedIds.map((id) => `[[${pageById.get(id)?.file ?? id}]]`).join(" · ")}`
    : "";

  const body = [`# ${agg.name}`, header, descSection, quoteSection, epSection, relSection]
    .filter(Boolean)
    .join("\n\n");
  return `${fm}\n\n${body}\n`;
}

/**
 * 全量聚合 → Map<file, markdown>。**CLI 与产物一致性闸门共用它**(闸门重算=拿这份跟仓库逐字比,
 * 对不上即手改/陈旧 → 拦)。关联区上限 10 也收在这里,保证「写出来的」和「闸门重算的」同源。
 */
export function buildAllPages(episodes, aliasById = new Map()) {
  const aggs = aggregate(episodes, aliasById);
  const pageIds = new Set(aggs.map((a) => a.id));
  const pageById = new Map(aggs.map((a) => [a.id, { file: a.file, name: a.name }]));
  const out = new Map();
  for (const agg of aggs) {
    const quotes = quotesFor(agg, episodes, aliasById);
    const rel = related(agg, episodes, pageIds).slice(0, 10);
    out.set(agg.file, renderEntityPage(agg, quotes, rel, pageById, aliasById));
  }
  return out;
}

// ────────────────────────── CLI ──────────────────────────
export function loadAllEpisodes(base) {
  const eps = [];
  for (const d of readdirSync(base, { withFileTypes: true })) {
    if (!d.isDirectory()) continue;
    const dir = join(base, d.name);
    if (!existsSync(join(dir, "entities.json"))) continue;
    eps.push({
      meta: JSON.parse(readFileSync(join(dir, "meta.json"), "utf8")),
      digest: JSON.parse(readFileSync(join(dir, "digest.json"), "utf8")),
      entities: JSON.parse(readFileSync(join(dir, "entities.json"), "utf8")),
    });
  }
  return eps;
}

function main() {
  const base = resolve(ROOT, "data/episodes");
  const aliases = JSON.parse(readFileSync(resolve(ROOT, "data/aliases.json"), "utf8"));
  const aliasById = new Map((aliases.entities ?? []).map((e) => [e.id, e]));
  const episodes = loadAllEpisodes(base);

  const pages = buildAllPages(episodes, aliasById);
  const outDir = resolve(ROOT, "samples/entities");
  mkdirSync(outDir, { recursive: true });
  for (const [file, md] of pages) writeFileSync(join(outDir, `${file}.md`), md);

  const aggs = aggregate(episodes, aliasById);
  const multi = aggs.filter((a) => new Set(a.appearances.map((x) => x.epId)).size > 1);
  console.log(`✅ 生成 ${pages.size} 个实体页 → samples/entities/`);
  console.log(`   跨 ≥2 集的实体(聚合真起作用):${multi.map((a) => a.name).join(" · ") || "(无)"}`);
}

const isMain = (() => {
  try { return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url); } catch { return false; }
})();
if (isMain) main();
