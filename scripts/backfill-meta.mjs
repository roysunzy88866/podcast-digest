#!/usr/bin/env node
// C5.1 · 存量集 meta 显示字段一次性补齐(幂等,可反复跑):
//   podcast 缺 → 按 id 里的源段推(-lennys- → Lenny's Podcast 等,SOURCES 之外的老源用内置表)
//   date 缺 → id 前缀(YYYY-MM-DD)
//   title_en 缺 → vendored 存档(data/lennys-podcast-archive.json)按 source_url 匹配
// 只补空缺、不覆盖已有值;不碰 GLM(title_zh 由云端浓缩生成,不在此)。
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { SOURCES } from "./run-pipeline.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// 老源(已退役/特例)不在 SOURCES 里,显示名在此钉死
const LEGACY = { "latent-space": "Latent Space", singju: "SingjuPost 转录" };

export function podcastFromId(id) {
  for (const s of SOURCES) if (id.includes(`-${s.key}-`)) return s.name ?? s.key;
  for (const [seg, name] of Object.entries(LEGACY)) if (id.includes(`-${seg}-`)) return name;
  return null;
}

function main() {
  const archiveFile = join(ROOT, "data/lennys-podcast-archive.json");
  const archive = existsSync(archiveFile) ? JSON.parse(readFileSync(archiveFile, "utf8")) : [];
  const byLink = new Map(archive.map((it) => [it.link, it]));

  const base = join(ROOT, "data/episodes");
  let patched = 0;
  for (const d of readdirSync(base, { withFileTypes: true })) {
    if (!d.isDirectory()) continue;
    const metaPath = join(base, d.name, "meta.json");
    if (!existsSync(metaPath)) continue;
    const meta = JSON.parse(readFileSync(metaPath, "utf8"));
    const next = { ...meta };
    if (!next.podcast) next.podcast = podcastFromId(d.name) ?? next.podcast;
    if (!next.date) next.date = (d.name.match(/^\d{4}-\d{2}-\d{2}/) || [])[0] ?? next.date;
    if (!next.title_en && byLink.get(next.source_url)) next.title_en = byLink.get(next.source_url).title;
    if (JSON.stringify(next) !== JSON.stringify(meta)) {
      writeFileSync(metaPath, JSON.stringify(next, null, 2));
      patched++;
      console.log(`✅ ${d.name}: podcast=${next.podcast ?? "∅"} date=${next.date ?? "∅"} title_en=${next.title_en ? "有" : "∅"}`);
    }
  }
  console.log(`\n补齐 ${patched} 集(其余已齐,未动)。`);
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) main();
