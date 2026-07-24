#!/usr/bin/env node
// C6 · 集页构建:每集跨集算好 relatedEpisodes → renderEpisode(带相关单集)→ 写 samples/<id>.md。
//
// **renderAllEpisodes 是集页的跨集渲染真相**:写库(本 CLI)与 gate-all 重渲染比对**共用它**
// → 相关单集(关联区③)的一致性由现有「重渲染逐字比对」闸门自动防漂移(手改/陈旧一律拦)。
// 放独立文件避免 render.mjs ↔ build-entities.mjs 循环依赖(build-entities 已 import render 的 blockId)。
import { writeFileSync, readFileSync, realpathSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { renderEpisode, samplePath } from "./render.mjs";
import { loadAllEpisodes, relatedEpisodes, aggregate } from "./build-entities.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * 跨集渲染所有集页 → Map<id, markdown>。
 * 每集的相关单集(US-7)= relatedEpisodes(该集, 全集);渲染进集页底部。
 * 只在**加载到的集之间**互相关联 → 相关单集链接的集必有页(由本函数一并渲染),不造死链。
 *
 * 权威名统一(drift #32 死链根因):实体页由 aggregate 按「别名表 > 首见」定一个权威 file 产页,
 * 而集页正文/frontmatter 原来用**本集自己的 file** → 同 id 跨集写法不同(Co-work vs Co-Work)时,
 * 后见集的双链指向不存在的页 = 死链。此处把每集实体先归一到聚合权威名(同一 aggregate,天然同源):
 * 链接目标/frontmatter 用权威 file;正文**查找词保留本集原词**(sourceForm,不然正文里找不到)。
 * 无漂移时输出与单集渲染逐字节一致(不扰动已上线集)。
 */
export function renderAllEpisodes(episodes, aliasById) {
  if (!aliasById) {
    // 缺省从仓库读别名表 —— 写库 CLI 与 gate-all 重渲染比对共用本函数,必须同一份数据源
    try {
      const a = JSON.parse(readFileSync(resolve(ROOT, "data/aliases.json"), "utf8"));
      aliasById = new Map((a.entities ?? []).map((e) => [e.id, e]));
    } catch (e) {
      // 别名表读不到 → 退化为纯首见权威(写库/gate-all 同走此分支,同源性不破);响一声不静默(GLM 20260724-001[3])
      console.warn(`⚠️ renderAllEpisodes:读 data/aliases.json 失败(${e.message})→ 权威名退化为纯首见`);
      aliasById = new Map();
    }
  }
  const canon = new Map(aggregate(episodes, aliasById).map((a) => [a.id, { file: a.file, name: a.name }]));
  const canonize = (ents) =>
    !ents ? ents : {
      ...ents,
      entities: (ents.entities ?? []).map((e) => {
        const c = e.id ? canon.get(e.id) : null;
        if (!c || c.file === e.file) return e;
        return { ...e, file: c.file, name: c.name, sourceForm: e.file };
      }),
    };
  const out = new Map();
  for (const ep of episodes) {
    const related = relatedEpisodes(ep.meta.id, episodes);
    out.set(ep.meta.id, renderEpisode(ep.meta, ep.digest, canonize(ep.entities), related));
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
