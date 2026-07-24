#!/usr/bin/env node
// C10 · 列表页(首页)生成:Quartz 原生 Bases 三视图(最新卡片/全部表格/按主题看板)→ content/index.md。
//
// 2026-07-24 用户拍板的首页改版(需求共创/首页交互改版.md):不再手搓卡片墙/标签条,
// 首页主体 = ```base 代码块(bases-page 插件构建时渲染,视图页签客户端可切);
// 标签体系 = 8 大类受控词表(data/tag-taxonomy.json),163 个自由细标签退出首页。
// 已读压暗保留(内联脚本 + localStorage,键沿用 pd-read 不丢用户已读史)。
import { writeFileSync, mkdirSync, realpathSync, readFileSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadAllEpisodes } from "./build-entities.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** 词表大类(有序,呈现顺序=词表登记顺序) */
export function taxonomyCategories() {
  const tax = JSON.parse(readFileSync(join(ROOT, "data/tag-taxonomy.json"), "utf8"));
  return Object.keys(tax.vocabulary ?? {});
}

/**
 * 全部集 → 首页 markdown。空站 → 友好空状态(US-1a)。
 * episodes 仅用于空站判断与集数注释;数据本身由 Bases 在构建期从集页 frontmatter 现查。
 */
export function renderList(episodes) {
  const fm = `---\ntitle: 英文播客中文精华\n---\n`;

  if (!episodes.length) {
    // US-1a 空站:友好空状态,不是空白页
    return `${fm}
<div class="ep-list-root">
  <div class="ep-empty-site">还没有内容,订阅源更新后会自动出现。</div>
</div>
${STYLE}
`;
  }

  // 8 大类速览:双链到各大类标签页;也让首页局部图谱有节点可画(集↔大类网见全局图谱)
  const cats = taxonomyCategories();
  const catRow = cats.map((c) => `<a class="home-cat internal" href="./tags/${encodeURIComponent(c)}">#${c}</a>`).join("\n  ");

  // ⚠️ base 代码块是 YAML(bases-page 构建时渲染):filters 只收 type=episode 的集页;
  // 三视图页签 = 最新(卡片)/全部(表格,可点列头排序)/按主题(按主类分组看板)。
  const baseBlock = `\`\`\`base
filters:
  and:
    - 'note.type == "episode"'
properties:
  note.date:
    displayName: 日期
  note.podcast:
    displayName: 播客
  note.duration:
    displayName: 时长
  note.description:
    displayName: 简介
  note.category:
    displayName: 主题
  title:
    displayName: 标题
views:
  - type: cards
    name: 最新
    image: note.cover
    imageAspectRatio: 7
    cardSize: 300
    sort:
      - property: note.date
        direction: DESC
      - property: file.name
        direction: ASC
    order:
      - note.date
      - note.podcast
      - note.duration
      - note.description
  - type: table
    name: 全部
    sort:
      - property: note.date
        direction: DESC
      - property: file.name
        direction: ASC
    order:
      - title
      - note.date
      - note.podcast
      - note.duration
      - note.category
  - type: board
    name: 按主题
    groupBy:
      property: note.category
    sort:
      - property: note.date
        direction: DESC
      - property: file.name
        direction: ASC
    order:
      - note.date
      - note.podcast
\`\`\``;

  return `${fm}
<div class="home-cats">
  ${catRow}
</div>

${baseBlock}

${STYLE}
${SCRIPT}
`;
}

const STYLE = `<style>
/* 首页专属(样式随本页内容走,SPA 换页即卸载):框架自动日期/阅读时长对首页无意义,隐藏 */
.page-header .content-meta{display:none}
.home-cats{display:flex;flex-wrap:wrap;gap:.4rem;margin:.2rem 0 1rem}
.home-cat{font-size:.85rem;padding:.25rem .75rem;border-radius:999px;border:1px solid var(--lightgray);background:var(--light);color:var(--darkgray);text-decoration:none!important}
.home-cat:hover{border-color:var(--secondary);color:var(--secondary)}
.bases-card-label{white-space:nowrap}
.bases-card.ep-read{opacity:.55}
.bases-card.ep-read:hover{opacity:.85}
.ep-empty-site{padding:2rem;text-align:center;color:var(--gray);border:1px dashed var(--lightgray);border-radius:12px}
</style>`;

const SCRIPT = `<script>
(function(){
  function init(){
    var root=document.querySelector('.bases-view-container'); if(!root||root.__epInit) return; root.__epInit=1;
    // 已读压暗(客户端 localStorage;键沿用 pd-read,老已读史不丢)
    var KEY='pd-read', read;
    try{ read=new Set(JSON.parse(localStorage.getItem(KEY)||'[]')); }catch(e){ read=new Set(); }
    var cards=[].slice.call(root.querySelectorAll('.bases-card'));
    cards.forEach(function(c){
      var slug=c.dataset.slug; if(!slug) return;
      if(read.has(slug)) c.classList.add('ep-read');
      c.addEventListener('click', function(){ read.add(slug); try{localStorage.setItem(KEY, JSON.stringify([...read]));}catch(e){} });
    });
  }
  // Quartz 是 SPA:内联脚本换页后不重跑 → 挂 nav 事件(每次导航含首载都会触发)
  document.addEventListener('nav', init);
  init();
})();
</script>`;

// ── CLI:node scripts/build-list.mjs [--out <path>] ──(默认写 site/content/index.md)──
const isMain = (() => {
  try {
    return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
})();

if (isMain) {
  const outIdx = process.argv.indexOf("--out");
  const out = outIdx >= 0 && process.argv[outIdx + 1] ? process.argv[outIdx + 1] : join(ROOT, "site/content/index.md");
  const episodes = loadAllEpisodes(join(ROOT, "data/episodes"));
  const md = renderList(episodes);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, md);
  console.log(`✅ 列表页(Bases 三视图)→ ${out}(${episodes.length} 集,8 大类)`);
}
