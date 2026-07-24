#!/usr/bin/env node
// C5 · 列表页(首页)生成:单集卡流 + 标签条 + 已读压暗 → content/index.md(US-1/2/3)。
//
// 走集页同款「生成 markdown(内嵌 HTML)→ Quartz 套外壳渲染」模式(不动 Quartz 组件系统)。
// 卡片字段全来自 data/episodes 的 meta/digest(可溯源);排序=发布日期倒序。
// 首页由 Quartz 套上顶栏(搜索框=US-3 各页可达)。标签筛选/已读压暗=内联脚本(客户端 localStorage)。
import { writeFileSync, mkdirSync, realpathSync, existsSync, readFileSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadAllEpisodes } from "./build-entities.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const entArr = (ep) => (Array.isArray(ep.entities) ? ep.entities : ep.entities?.entities ?? []);

/** 每集抽 US-1 数据契约字段(可溯源到 meta/digest)。 */
export function cardData(ep) {
  const { meta, digest } = ep;
  const guestEnts = entArr(ep).filter((e) => e.type === "person" && e.role === "guest" && e.primary);
  const guest = guestEnts.length ? guestEnts.map((g) => g.name).join("、") : (meta.guests || []).join("、");
  // 身份一句话:优先第一位嘉宾在 guest_titles 里的头衔
  const firstGuest = guestEnts[0]?.name ?? (meta.guests || [])[0];
  const guestTitle = (firstGuest && meta.guest_titles?.[firstGuest]) || "";
  const tags = (ep.entities?.tags ?? digest.tags ?? []).filter(Boolean);
  return {
    slug: meta.id,
    // C5.1:fallback 链 title_zh→title_en→id(Lenny's 集 title_zh 未生成前先显示英文原标题,不显示文件名)
    title: meta.title_zh ?? meta.title_en ?? meta.id,
    guest,
    guestTitle,
    quote: digest.tldr ?? "", // 一句精华语录=TLDR(一句话精华、总在;金句脱离上下文看不懂,D14)
    podcast: meta.podcast ?? "",
    source_url: meta.source_url ?? "",
    // date 缺 → 从 id 前缀取(id 恒以 YYYY-MM-DD 开头;老集 meta 没写 date)
    date: meta.date ?? (String(meta.id).match(/^\d{4}-\d{2}-\d{2}/)?.[0] ?? ""),
    tags,
  };
}

/**
 * C5.1 标签归并:① 别名表(变体→正主,人工登记 data/tag-aliases.json)② 空格变体自动归并
 * (去空格后相同 → 出现次数最多的形式当正主,平票取 zh 排序靠前)。返回 tag→正主 的映射函数。
 */
export function tagCanonicalizer(cards, aliases = {}) {
  const resolve1 = (t) => aliases[String(t).trim()] ?? String(t).trim();
  const counts = new Map(); // 过别名表后的形式 → 出现次数
  for (const c of cards) for (const t of c.tags) {
    const r = resolve1(t);
    counts.set(r, (counts.get(r) || 0) + 1);
  }
  const byKey = new Map(); // 去空格 key → 正主形式
  for (const [form, n] of counts) {
    const k = form.replace(/\s+/g, "");
    const cur = byKey.get(k);
    if (!cur || n > cur.n || (n === cur.n && form.localeCompare(cur.form, "zh") < 0)) byKey.set(k, { form, n });
  }
  return (t) => byKey.get(resolve1(t).replace(/\s+/g, ""))?.form ?? resolve1(t);
}

export function cardHtml(c) {
  const tagAttr = c.tags.map((t) => esc(t)).join("|");
  const guestLine = c.guest
    ? `<div class="ep-guest">${esc(c.guest)}${c.guestTitle ? ` <span class="ep-guest-title">· ${esc(c.guestTitle)}</span>` : ""}</div>`
    : "";
  const html = `  <a class="ep-card" href="/${esc(c.slug)}" data-slug="${esc(c.slug)}" data-tags="${tagAttr}">
    <div class="ep-cover" aria-hidden="true"><span>${esc(c.podcast || "播客")}</span></div>
    <div class="ep-body">
      <div class="ep-metaline"><span class="ep-src">${esc(c.podcast)}</span><span class="ep-date">${esc(c.date)}</span></div>
      <div class="ep-title">${esc(c.title)}</div>
      ${guestLine}
      <p class="ep-quote">${esc(c.quote)}</p>
      <div class="ep-tags">${c.tags.map((t) => `<span class="ep-tag">#${esc(t)}</span>`).join("")}</div>
    </div>
  </a>`;
  // ⚠️ 空白行必须滤掉:markdown 把空行当「HTML 块结束」,后半张卡按 4 空格缩进转成代码块、
  // 原样吐 HTML 源码(线上 22/27 卡破损根因——guestLine 为空时正好留下一个纯空白行)。
  return html.split("\n").filter((l) => l.trim() !== "").join("\n");
}

const TAGBAR_TOP = 15; // 首屏标签数;其余收进「更多标签」(C5.1 用户拍板:121 个标签墙 → 收敛)

/** 全部集 → 列表页 markdown(含内嵌 HTML/样式/脚本)。空站 → 友好空状态(US-1a)。 */
export function renderList(episodes, tagAliases = {}) {
  const cards = episodes.map(cardData).sort((a, b) => String(b.date).localeCompare(String(a.date))); // 发布日期倒序
  // C5.1 标签归并:卡上与标签栏统一用正主形式(变体不漏集)
  const canon = tagCanonicalizer(cards, tagAliases);
  for (const c of cards) c.tags = [...new Set(c.tags.map(canon))];
  const tagCount = new Map();
  for (const c of cards) for (const t of new Set(c.tags)) tagCount.set(t, (tagCount.get(t) || 0) + 1);
  // 按集数倒序(高频在前),平票按 zh 排序
  const allTags = [...tagCount.keys()].sort((a, b) => tagCount.get(b) - tagCount.get(a) || a.localeCompare(b, "zh"));

  const fm = `---\ntitle: 英文播客中文精华\n---\n`;

  if (!cards.length) {
    // US-1a 空站:友好空状态,不是空白页
    return `${fm}
<div class="ep-list-root">
  <div class="ep-empty-site">还没有内容,订阅源更新后会自动出现。</div>
</div>
${STYLE}
`;
  }

  const btn = (t) => `<button class="ep-tagbtn" data-tag="${esc(t)}" type="button">#${esc(t)}</button>`;
  const topTags = allTags.slice(0, TAGBAR_TOP);
  const restTags = allTags.slice(TAGBAR_TOP);
  const tagbar =
    `<div class="ep-tagbar" role="toolbar" aria-label="标签筛选">` +
    topTags.map(btn).join("") +
    (restTags.length ? `<button class="ep-tagmore" type="button">更多标签 ▾</button>` : "") +
    `</div>` +
    (restTags.length ? `\n  <div class="ep-tagbar ep-tagbar-more" hidden>${restTags.map(btn).join("")}</div>` : "");

  const clearbar = `<div class="ep-clear" hidden>筛选:<b class="ep-clear-tag"></b><button type="button" class="ep-clear-btn">✕ 清除</button></div>`;
  const cardsHtml = `<div class="ep-cards">\n${cards.map(cardHtml).join("\n")}\n</div>`;
  const emptyFilter = `<div class="ep-empty" hidden>没有匹配的集 · <button type="button" class="ep-clear-btn2">清除筛选</button></div>`;

  return `${fm}
<div class="ep-list-root" data-count="${cards.length}">
  ${tagbar}
  ${clearbar}
  ${emptyFilter}
  ${cardsHtml}
</div>
${STYLE}
${SCRIPT}
`;
}

const STYLE = `<style>
.ep-list-root{max-width:none}
.ep-tagbar{display:flex;flex-wrap:wrap;gap:.4rem;margin:.2rem 0 1rem}
.ep-tagbtn{font-size:.8rem;padding:.25rem .7rem;border-radius:999px;border:1px solid var(--lightgray);background:var(--light);color:var(--darkgray);cursor:pointer;transition:all .15s}
.ep-tagbtn:hover{border-color:var(--secondary);color:var(--secondary)}
.ep-tagbtn.active{background:var(--secondary);color:var(--light);border-color:var(--secondary)}
.ep-tagmore{font-size:.8rem;padding:.25rem .7rem;border-radius:999px;border:1px dashed var(--lightgray);background:transparent;color:var(--gray);cursor:pointer}
.ep-tagmore:hover{border-color:var(--secondary);color:var(--secondary)}
.ep-tagbar-more{margin-top:-.6rem}
.ep-clear{display:flex;align-items:center;gap:.5rem;margin:-.4rem 0 1rem;font-size:.85rem;color:var(--gray)}
.ep-clear[hidden],.ep-empty[hidden]{display:none!important}
.ep-clear b{color:var(--secondary)}
.ep-clear-btn,.ep-clear-btn2{font-size:.8rem;padding:.15rem .6rem;border-radius:6px;border:1px solid var(--lightgray);background:var(--light);color:var(--darkgray);cursor:pointer}
.ep-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:1.1rem}
.ep-card{display:flex;flex-direction:column;border:1px solid var(--lightgray);border-radius:12px;overflow:hidden;background:var(--light);text-decoration:none!important;color:inherit;transition:transform .15s,box-shadow .15s,border-color .15s}
.ep-card:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,.10);border-color:var(--secondary)}
.ep-card.ep-read{opacity:.55}
.ep-card.ep-read:hover{opacity:.85}
.ep-cover{height:96px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--secondary),var(--tertiary));color:#fff}
.ep-cover span{font-weight:700;font-size:1.05rem;letter-spacing:.02em;opacity:.95}
.ep-body{padding:.85rem 1rem 1rem;display:flex;flex-direction:column;gap:.4rem}
.ep-metaline{display:flex;justify-content:space-between;font-size:.72rem;color:var(--gray)}
.ep-title{font-weight:700;font-size:1.02rem;line-height:1.35;color:var(--dark)}
.ep-guest{font-size:.82rem;color:var(--darkgray)}
.ep-guest-title{color:var(--gray)}
.ep-quote{margin:.15rem 0 0;font-size:.9rem;line-height:1.55;color:var(--darkgray);display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.ep-tags{display:flex;flex-wrap:wrap;gap:.3rem;margin-top:.2rem}
.ep-tag{font-size:.7rem;color:var(--gray);background:var(--lightgray);padding:.08rem .5rem;border-radius:999px}
.ep-empty,.ep-empty-site{padding:2rem;text-align:center;color:var(--gray);border:1px dashed var(--lightgray);border-radius:12px}
</style>`;

const SCRIPT = `<script>
(function(){
  function init(){
    const root=document.querySelector('.ep-list-root'); if(!root||root.__epInit) return; root.__epInit=1;
    const cards=[].slice.call(root.querySelectorAll('.ep-card'));
    const empty=root.querySelector('.ep-empty');
    const clearBar=root.querySelector('.ep-clear');
    const clearTag=root.querySelector('.ep-clear-tag');
    // 已读压暗(客户端 localStorage)
    const KEY='pd-read';
    let read; try{ read=new Set(JSON.parse(localStorage.getItem(KEY)||'[]')); }catch(e){ read=new Set(); }
    cards.forEach(function(c){ if(read.has(c.dataset.slug)) c.classList.add('ep-read'); });
    cards.forEach(function(c){ c.addEventListener('click', function(){ read.add(c.dataset.slug); try{localStorage.setItem(KEY, JSON.stringify([...read]));}catch(e){} }); }); // [...read]:read 是 Set,[].slice.call(Set) 恒返回 [](擦掉历史,F1)
    // 标签筛选(US-2:点标签收窄 + 可清除 + 无结果提示)
    let active=null;
    const btns=[].slice.call(root.querySelectorAll('.ep-tagbtn'));
    function apply(){
      let shown=0;
      cards.forEach(function(c){
        const tags=(c.dataset.tags||'').split('|');
        const ok=!active||tags.indexOf(active)>=0;
        c.style.display=ok?'':'none'; if(ok) shown++;
      });
      if(clearBar) clearBar.hidden=!active;
      if(clearTag) clearTag.textContent=active?('#'+active):'';
      if(empty) empty.hidden=shown>0;
      btns.forEach(function(b){ b.classList.toggle('active', b.dataset.tag===active); });
    }
    btns.forEach(function(b){ b.addEventListener('click', function(){ active=(active===b.dataset.tag)?null:b.dataset.tag; apply(); }); });
    [].slice.call(root.querySelectorAll('.ep-clear-btn,.ep-clear-btn2')).forEach(function(b){ b.addEventListener('click', function(){ active=null; apply(); }); });
    // C5.1 「更多标签」折叠(首屏只显示 TOP15)
    const moreBtn=root.querySelector('.ep-tagmore'), moreBar=root.querySelector('.ep-tagbar-more');
    if(moreBtn&&moreBar) moreBtn.addEventListener('click', function(){ moreBar.hidden=!moreBar.hidden; moreBtn.textContent=moreBar.hidden?'更多标签 ▾':'收起 ▴'; });
  }
  // Quartz 是 SPA:内联脚本换页后不重跑 → 挂 nav 事件(每次导航含首载都会触发),换页回首页也重新绑定
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
  // 标签别名表(近义变体→正主,人工登记;没有就空表)
  const aliasFile = join(ROOT, "data/tag-aliases.json");
  const tagAliases = existsSync(aliasFile) ? JSON.parse(readFileSync(aliasFile, "utf8")) : {};
  const md = renderList(episodes, tagAliases);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, md);
  console.log(`✅ 列表页 → ${out}(${episodes.length} 张卡,发布日期倒序)`);
}
