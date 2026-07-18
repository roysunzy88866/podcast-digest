#!/usr/bin/env node
// C6 · 集页构建:每集跨集算好 relatedEpisodes → renderEpisode(带相关单集)→ 写 samples/<id>.md。
//
// **renderAllEpisodes 是集页的跨集渲染真相**:写库(本 CLI)与 gate-all 重渲染比对**共用它**
// → 相关单集(关联区③)的一致性由现有「重渲染逐字比对」闸门自动防漂移(手改/陈旧一律拦)。
// 放独立文件避免 render.mjs ↔ build-entities.mjs 循环依赖(build-entities 已 import render 的 blockId)。
import { writeFileSync, realpathSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { renderEpisode, samplePath } from "./render.mjs";
import { loadAllEpisodes, relatedEpisodes } from "./build-entities.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * 跨集渲染所有集页 → Map<id, markdown>。
 * 每集的相关单集(US-7)= relatedEpisodes(该集, 全集);渲染进集页底部。
 * 只在**加载到的集之间**互相关联 → 相关单集链接的集必有页(由本函数一并渲染),不造死链。
 */
export function renderAllEpisodes(episodes) {
  const out = new Map();
  for (const ep of episodes) {
    const related = relatedEpisodes(ep.meta.id, episodes);
    out.set(ep.meta.id, renderEpisode(ep.meta, ep.digest, ep.entities, related));
  }
  return out;
}

// ── CLI:渲染全部集页写进 samples/(替代逐集 render.mjs;相关单集需跨集,必须一次全渲染)──
const isMain = (() => {
  try {
    return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
})();

if (isMain) {
  const episodes = loadAllEpisodes(join(ROOT, "data/episodes"));
  const pages = renderAllEpisodes(episodes);
  for (const [id, md] of pages) writeFileSync(samplePath(id), md);
  const withRel = episodes.filter((ep) => relatedEpisodes(ep.meta.id, episodes).length).length;
  console.log(`✅ 渲染 ${pages.size} 个集页(${withRel} 个含相关单集)→ samples/`);
}
