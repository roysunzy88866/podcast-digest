#!/usr/bin/env node
// 组装集页 markdown(meta + digest + entities → samples/<id>.md)
//
// **本模块是集页的唯一渲染真相**:gate-all.mjs 会用 renderEpisode() 重渲染并与 samples/<id>.md
// 逐字比对 —— 集页必须是「过闸门的产物渲染出来的结果」,手改/陈旧一律拦。
//
// C3 升级(Scenario 3):
//   · frontmatter 类型化属性(guests/companies/concepts,值为 [[双链]]) + host=null 不打印 "null"
//   · 顶部「关联区」按角色分行(嘉宾/主持/公司/概念/来源),每个 [[链到实体页]]
//   · 正文首现处给 primary 实体补 [[双链]](只链有页的,依 #9;【背景】块不链)
//   · 每条金句挂 ^块ID(实体页靠它精确嵌入,P1 已验 Quartz 支持)
//   · entities 缺省 → 退化为 C2 版式(向后兼容,不崩)
import { readFileSync, writeFileSync, existsSync, realpathSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const mmss = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

const asArr = (entities) => (Array.isArray(entities) ? entities : entities?.entities ?? []);

// YAML 标量安全:含 : # " 引号/首尾空白等会破 frontmatter 结构的字符时,加引号并转义
//（GLM 20260718-001[1]:标题若含「X: Y」这种冒号会截断 YAML;当前两集标题无此字符,属防未来)
function yamlScalar(s) {
  const str = String(s ?? "");
  return /[:#"'\[\]{}|>&*!?,%@`]|^[\s-]|\s$/.test(str)
    ? `"${str.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`
    : str;
}
const escapeRegExp = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const isAscii = (s) => /^[\x00-\x7F]+$/.test(s);

/** 金句块 ID:稳定、确定、只含字母数字(实体页 ![[集#^块ID]] 靠它精确嵌入) */
export function blockId(index) {
  return `q${index + 1}`;
}

// C10 · 8 大类受控词表(data/tag-taxonomy.json,2026-07-24 用户拍板):
// frontmatter tags=大类(1-2,首位=主类 category);自由细标签退出 frontmatter,降级为页底关键词。
let _taxonomy;
function taxonomy() {
  if (!_taxonomy) _taxonomy = JSON.parse(readFileSync(resolve(ROOT, "data/tag-taxonomy.json"), "utf8"));
  return _taxonomy;
}

/** 本集大类:人工映射表(纠偏覆盖层)> 生成端 entities.categories(过词表)> 未分类 */
export function episodeCategories(meta, entities = null) {
  const tax = taxonomy();
  const manual = tax.episodes?.[meta.id];
  if (Array.isArray(manual) && manual.length) return manual.slice(0, 2);
  const vocab = new Set(Object.keys(tax.vocabulary ?? {}));
  const gen = (entities?.categories ?? []).filter((c) => vocab.has(c));
  if (gen.length) return gen.slice(0, 2);
  // 兜底不许静默(GLM 20260724-010[2]):落「未分类」会污染看板分组,响亮警告;verify-c5 词表闸会把它拦在上线前
  console.error(`⚠️ [taxonomy] ${meta.id} 无人工映射且 entities.categories 无词表内值 → 落「未分类」(verify-c5 会拦)`);
  return ["未分类"];
}

// 首页卡片封面色条(Bases cards 的 image 属性支持纯色):按播客定色,未知播客用中性灰
const PODCAST_COLORS = { "Lenny's Podcast": "#6366f1", "Latent Space": "#0e7490", "a16z Podcast": "#ea580c" };
export const coverColor = (podcast) => PODCAST_COLORS[podcast] ?? "#64748b";

/** 只收 primary、按角色分组(US-6:详情页关联区要「按角色分行」,不是一排无差别标签) */
export function groupByRole(entities) {
  const prim = asArr(entities).filter((e) => e.primary);
  const pick = (pred) => prim.filter(pred).map((e) => ({ id: e.id, name: e.name, file: e.file, role: e.role }));
  return {
    host: pick((e) => e.type === "person" && e.role === "host"),
    guests: pick((e) => e.type === "person" && e.role === "guest"),
    cohosts: pick((e) => e.type === "person" && e.role === "cohost"),
    companies: pick((e) => e.type === "company"),
    concepts: pick((e) => e.type === "concept"),
  };
}

/** 关联区:按角色分行,每个实体链到它的页(链 file 名,不是显示名 —— 实体页文件名=file) */
export function renderRelations(entities, meta) {
  const g = groupByRole(entities);
  const link = (x) => `[[${x.file}]]`;
  const rows = [];
  // C13h 照设计稿 ep-*.html「这一集涉及」:三行 人物/公司/概念,标签是灰药丸(样式在 custom.scss
  // 的 .pd-rel strong),不带冒号。嘉宾在前(读者更关心)、主持/联合主持并进人物行,按 file 去重。
  const people = [...new Map([...g.guests, ...g.host, ...g.cohosts].map((x) => [x.file, x])).values()];
  if (people.length) rows.push(`> **人物** ${people.map(link).join(" · ")}`);
  if (g.companies.length) rows.push(`> **公司** ${g.companies.map(link).join(" · ")}`);
  if (g.concepts.length) rows.push(`> **概念** ${g.concepts.map(link).join(" · ")}`);
  if (meta?.source_url) rows.push(`> **来源** [${meta.podcast}](${meta.source_url})`);
  return `> [!info] 关联\n${rows.join("\n>\n")}`;
}

/**
 * C6 · 关联区③「相关单集」(US-7):列相关集 + 注明关联原因(同嘉宾/同概念/同公司)+ 点跳。
 * related = build-entities.relatedEpisodes() 的结果(每条含 shared:{guests,companies,concepts})。
 * 空/无 → 返回 ""(整段不渲染,Scenario 1a:不留空框)。
 */
export function renderRelatedEpisodes(related, cats = []) {
  if (!related || !related.length) return "";
  const DIM = { guests: "同嘉宾", companies: "同公司", concepts: "同概念" };
  // US-7 P0 锁定「关联原因具体到实体名」(C6 Scenario 1/1b)。设计稿那两张卡只画了标题,
  // 但那是锁定验收条,不许悄悄丢 —— 收成标题下面一行小灰字。
  const line = (r) => {
    const reasons = ["guests", "companies", "concepts"]
      .filter((k) => r.shared?.[k]?.length)
      .map((k) => `${DIM[k]}:${r.shared[k].map((x) => x.name).join("、")}`);
    return `- [[${r.epId}|${r.epTitle}]] —— ${reasons.join(" · ")}`;
  };
  const main = (cats ?? []).filter((c) => c && c !== "未分类")[0] ?? null;
  const same = main ? related.filter((r) => (r.epCats ?? []).includes(main)) : [];
  const sameIds = new Set(same.map((r) => r.epId));
  const other = related.filter((r) => !sameIds.has(r.epId));
  // ⚠️ `<div>` 单独成行 + 空行:CommonMark 里空行会结束 HTML 块,后面的 markdown 照常处理 ——
  //    [[双链]] 必须交给 markdown 渲染(包进原样 HTML 里就失效了,关联框踩过这个坑)。
  const card = (title, items) =>
    items.length ? `<div class="pd-ex">\n\n**${title}**\n\n${items.slice(0, 3).map(line).join("\n")}\n\n</div>` : "";
  const cards = [card(main ? `顺着「${main}」挖下去` : "顺着这条线挖下去", same), card("换个口味", other)].filter(Boolean);
  if (!cards.length) return "";
  return `${secLabel("接着看")}\n\n<div class="pd-exit">\n${cards.join("\n")}\n</div>`;
}

/** 分区小标签(设计稿 .sec:12px 灰色字距标签 + 一句灰色说明)。用 div 不用 h2 —— h2 会挤进右栏目录、还带锚点链图标。 */
export function secLabel(title, note = null) {
  return `<div class="pd-sec">${title}${note ? ` <span>${note}</span>` : ""}</div>`;
}

/** 一句话摘要(设计稿 .tldr:灰底圆角框 + 红色小标签「一句话」),不再是「## 一句话 TLDR」大标题 */
export function renderTldr(digest) {
  const t = String(digest?.tldr ?? "").trim();
  return t ? `<div class="pd-tldr"><b>一句话</b>${t}</div>` : "";
}

/**
 * 集页顶栏(设计稿 header.top)。外面那层 `.pd` 是为了直接吃首页那套顶栏样式,不再抄一份。
 * `.pd-acts` 是空槽 —— 搜索/深浅色由脚本把 Quartz 自己的组件**搬**进来(🔒 #9 搜索不许降级 /
 * 🔒 #2 亮暗双模式必须留);复刻一份必然走样。分享/收藏归 C13b,本片不放。
 * 手机上站名与导航让位,只留「← 本集标题」一行(设计稿 .mtitle)。
 */
/** HTML 文本转义(顶栏标题走它;render 的其它地方原本没有,这里就近定义) */
const escHtml = (x) =>
  String(x ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

/**
 * 通用站点顶栏(集页与实体页共用)。放在 render.mjs 是为了避开循环依赖:
 * build-list → build-entities → render,所以 build-entities 只能从 render 这边拿。
 * @param mtitle 手机端「← 标题」的文字(二级页都要);空则不出这一节
 */
export function renderSiteTopBar(mtitle = "") {
  return (
    `<div class="pd"><header class="pd-top"><div class="pd-topin">` +
    `<a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a>` +
    `<nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav>` +
    `<a class="pd-back" href="/">← 返回</a>` +
    (mtitle ? `<a class="pd-mtitle" href="/">←<span>${escHtml(mtitle)}</span></a>` : "") +
    `<div class="pd-acts">` +
    `<button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button>` +
    `<button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button>` +
    `</div>` +
    `</div></header></div>`
  );
}

export function renderTopBar(meta) {
  return (
    `<div class="pd"><header class="pd-top"><div class="pd-topin">` +
    `<a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a>` +
    `<nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav>` +
    `<a class="pd-back" href="/">← 返回</a>` +
    `<a class="pd-mtitle" href="/">←<span>${displayTitle(meta)}</span></a>` +
    `<div class="pd-acts">` +
    `<button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button>` +
    `<button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button>` +
    `</div>` +
    `</div></header></div>`
  );
}

/** C4 · 详情页音频播放器(US-5)。音频缺失/加载失败 → 浏览器原生降级为不可用态,不卡死页面(Scenario 2a)。 */
/**
 * 集页 meta 行(设计稿 .mt,第八批 #2「详情页顶部只留两层:标题 + 一条统一灰度 meta」)。
 * 内容:日期 · 播客 · 时长 · 大类。大类链到大类页,其余是纯文本。
 * 缺字段就整段略过,不留孤立的分隔点(与卡片降级同一口径)。
 */
export function renderEpisodeMeta(meta) {
  // C13f 第十二批 #4/#5:大类链接从 meta 行拿掉(用户在设计稿上标了两次「去掉这个信息」)。
  // ⚠️ 连带后果已向用户交底:详情页从此没有「本集属于哪个大类」的入口(右栏「这一集涉及」
  // 是人物/公司/概念,不是大类)。用户明选,如需回来再走共识。
  const dur = meta.duration_sec ? mmss(meta.duration_sec) : null;
  const parts = [displayDate(meta), meta.podcast, dur].filter(Boolean);
  return parts.length ? `<div class="pd-mt">${parts.join(" · ")}</div>` : "";
}

/**
 * 把正文里的「关联」框搬进右栏,改标题为「这一集涉及」(设计稿 .shell.det 右栏)。
 * **搬节点,不重写一份** —— 框里的 [[双链]] 是实体页反链的来源(CLAUDE.md 铁律),
 * 用原样 HTML 包住它会让 markdown 不处理、双链失效;所以只能渲染完再搬。
 * 设计稿自己也是这个手法(m-detail.js 克隆右栏块到页尾)。
 * JS 关掉时它留在正文里,内容不丢。
 * ⚠️ 脚本内一个空行都不能有:Markdown 原样 HTML 块遇空行即结束,后面缩进行会被
 *    当代码块吃掉(大类页踩过,GLM 20260726-024[1])。
 */
export function renderSidebarScript() {
  return `<script>
(function(){
  function move(){
    var side=document.querySelector('.right.sidebar'); if(!side) return;
    var box=null;
    var all=document.querySelectorAll('article blockquote[data-callout]');
    for(var i=0;i<all.length;i++){
      if(all[i].closest('.mrel')) continue;   // C13d:页尾手机克隆块不许被当成正文关联框搬走(实测被搬空过)
      var t=all[i].querySelector('.callout-title-inner');
      if(t&&t.textContent.trim().indexOf('关联')===0){ box=all[i]; break; }
    }
    if(!box) return;
    if(box.closest('.right.sidebar')) return;
    var wrap=document.createElement('div');
    wrap.className='pd-rel';
    var h=document.createElement('h3'); h.textContent='这一集涉及';
    wrap.appendChild(h); wrap.appendChild(box);
    var toc=side.querySelector('.toc');
    if(toc&&toc.parentElement) toc.parentElement.insertBefore(wrap, toc.nextSibling);
    else side.appendChild(wrap);
  }
  // C13f 第九批 #3:深浅色不再待在顶栏 —— 首页搬进左栏,集页没有左栏,搬到右栏末尾。
  // 仍是**搬节点不重写**(🔒 #2 亮暗双模式的行为在 Quartz 手里),搬前比 parentElement 保幂等。
  function adopt(){
    var acts=document.querySelector('.pd-top .pd-acts');
    function grab(sel,host){
      if(!host) return;
      var el=document.querySelector('#quartz-body > .sidebar '+sel) || document.querySelector('.sidebar '+sel);
      if(el && el.parentElement!==host) host.appendChild(el);
    }
    ['.search','.readermode'].forEach(function(sel){ grab(sel,acts); });
    // 深浅色进右栏末尾 —— 但右栏在窄屏可能不显示,槽跟着一起没了。
    // 只在槽真的看得见时才搬进去,看不见就退回顶栏(🔒 #2:任何屏宽都得有入口)。
    var side=document.querySelector('.right.sidebar'), slot=null;
    if(side){
      slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      // 同上:槽是空的(:empty → display:none),要判**右栏**看不看得见
      if(!(side.offsetWidth || side.offsetHeight || side.getClientRects().length)) slot=null;
    }
    grab('.darkmode', slot || acts);
  }
  function graph(){
    var art=document.querySelector('article'); if(!art) return;
    var g=document.querySelector('.right.sidebar .graph'); if(!g) return;
    var box=document.createElement('div'); box.className='pd-graph';
    box.appendChild(g); art.appendChild(box);
  }
  function topbar(){
    var bar=document.querySelector('article .pd'); if(!bar) return;
    var qb=document.getElementById('quartz-body'); if(!qb||!qb.parentElement) return;
    qb.parentElement.insertBefore(bar, qb);
  }
  // C13f:相关单集区(.pd-ex / .pd-exit)里的单集链接也在新标签页开,与首页卡片同口径。
  // 它们是 markdown 双链、由 Quartz 渲染成 <a>,只能渲染完再打标记。
  // ⚠️ 这段注释会原样进页面 —— 别在这里写那个区块的中文标题,
  //    render-related 有一条守卫在断言「不传 related 时整页不出现那四个字」。
  // data-router-ignore 是关键:Quartz SPA 判 _blank 只看事件目标本身,点到子元素会漏。
  function newtab(){
    document.querySelectorAll('.pd-ex a, .pd-exit a').forEach(function(a){
      if(a.target==='_blank') return;
      if(a.host && a.host!==location.host) return;   // 站外链接不归这条口径管
      a.target='_blank'; a.rel='noopener'; a.dataset.routerIgnore='';
    });
  }
  // 站名 logo 缺文件时摘掉 <img>,露出底下的引号标记(与首页同一条口径)
  function logos(){
    document.querySelectorAll('.pd .mk img').forEach(function(im){
      if(im.__lg) return; im.__lg=1;
      var kill=function(){ if(im.parentElement) im.remove(); };
      if(im.complete && im.naturalWidth===0){ kill(); return; }
      im.addEventListener('error', kill, {once:true});
    });
  }
  // C13h 分享/收藏(移植 设计稿/actions.js):分享=系统面板,失败(非用户取消)退回复制;
  // 收藏=localStorage(键 pd-favs,按路径),再点取消;toast 轻提示。SPA:委托绑定一次,每次 nav 恢复实心态。
  function toast(msg){
    var t=document.createElement('div'); t.className='toast'; t.textContent=msg;
    document.body.appendChild(t);
    requestAnimationFrame(function(){ t.classList.add('in'); });
    setTimeout(function(){ t.classList.remove('in'); setTimeout(function(){ t.remove(); },250); },1600);
  }
  function favs(){ try{ return JSON.parse(localStorage.getItem('pd-favs')||'{}'); }catch(e){ return {}; } }
  function favSync(){
    var b=document.querySelector('.ico[data-act="fav"]'); if(!b) return;
    b.classList.toggle('on', !!favs()[location.pathname]);
  }
  function doCopy(){
    if(!navigator.clipboard){ toast('请手动复制地址栏链接'); return; }
    navigator.clipboard.writeText(location.href).then(
      function(){ toast('链接已复制'); }, function(){ toast('复制失败,请手动复制地址栏'); });
  }
  if(!window.__pdActs){ window.__pdActs=1;
    document.addEventListener('click', function(ev){
      var b=ev.target.closest && ev.target.closest('.ico[data-act]'); if(!b) return;
      if(b.dataset.act==='share'){
        var h1=document.querySelector('article h1');
        var title=h1?h1.textContent.trim():document.title;
        if(navigator.share){
          navigator.share({title:title,url:location.href}).catch(function(e){
            if(!e || e.name!=='AbortError') doCopy();   // 用户自己取消→不打扰;真调不通→退回复制
          });
        } else doCopy();
      } else if(b.dataset.act==='fav'){
        var o=favs(); var k=location.pathname;
        if(o[k]) delete o[k]; else o[k]=1;
        localStorage.setItem('pd-favs', JSON.stringify(o));
        b.classList.toggle('on', !!o[k]);
        toast(o[k] ? ('已收藏 · 共 '+Object.keys(o).length+' 集') : '已取消收藏');
      }
    });
  }
  // C13d:mtoc 的 document/window 级监听只绑一次;回调每次现查当前 .mtoc(SPA 换页旧节点自然失联,不泄漏)
  function mtocScroll(){
    var bar=document.querySelector('.mtoc'); if(!bar||!bar.__items) return;
    var items=bar.__items, panel=bar.querySelector('.mtm'), label=bar.querySelector('.mtl'), prog=bar.querySelector('.mtbar');
    var off=bar.offsetHeight+24, idx=-1;
    for(var i=0;i<items.length;i++){
      if(items[i].el.getBoundingClientRect().top<=off) idx=i; else break;
    }
    if(window.scrollY>=document.body.scrollHeight-window.innerHeight-2) idx=items.length-1;
    if(idx!==bar.__cur){
      bar.__cur=idx;
      label.textContent=idx<0?'':items[idx].label;
      bar.classList.toggle('at', idx>=0);
      panel.querySelectorAll('a').forEach(function(a,i){ a.classList.toggle('on', i===idx); });
    }
    var max=document.body.scrollHeight-window.innerHeight;
    prog.style.width=(max>0?Math.min(100,Math.max(0,window.scrollY/max*100)):0)+'%';
  }
  if(!window.__pdMtocEvts){ window.__pdMtocEvts=1;
    var mtocTick=false;
    window.addEventListener('scroll', function(){
      if(!mtocTick){ mtocTick=true; requestAnimationFrame(function(){ mtocScroll(); mtocTick=false; }); }
    }, {passive:true});
    document.addEventListener('click', function(e){
      var bar=document.querySelector('.mtoc.open');
      if(bar && !e.target.closest('.mtoc')){ bar.classList.remove('open'); var t=bar.querySelector('.mtt'); if(t) t.setAttribute('aria-expanded','false'); }
    });
  }
  // C13d 手机端(移植 设计稿/m-detail.js;真站差异:顶栏不吸顶 → 吸顶条 top:0、跳转偏移只算条高;
  // 无人物页 → 去掉 chip 形态分支;小节 = article 里带 id 的 h2,与桌面右栏目录同源)
  function mtoc(){
    var art=document.querySelector('article'); if(!art) return;
    if(art.querySelector('.mtoc')) return;               // SPA nav 后 DOM 是新的;同页重跑不重复建
    // 小节收集照设计稿口径:标题(真站是 h3 正文小节 + h2 收尾节)+ 组标 .pd-sec(金句区与相关区的组标;
    // ⚠️ 本注释会原样进页面,守卫测试断言「无相关集时页面不出现那个区块的中文标题」——别在这里写它),
    // 无 id 就发一个,再按文档序排 —— 设计稿当年也是 h2 + .sec 混收
    var items=[];
    [].forEach.call(art.querySelectorAll('h2[id], h3[id]'), function(h){
      items.push({el:h,label:h.textContent.trim()});
    });
    [].forEach.call(art.querySelectorAll('.pd-sec'), function(sec,i){
      if(!sec.id) sec.id='pdsec'+i;
      var t=(sec.firstChild && sec.firstChild.nodeType===3 ? sec.firstChild.textContent : sec.textContent).trim();
      items.push({el:sec,label:t});
    });
    if(items.length<2) return;
    items.sort(function(a,b){ return a.el.compareDocumentPosition(b.el) & 4 ? -1 : 1; });
    // 不用 innerHTML(守卫测试拦它防「搬节点」被偷换成重写)—— 这里全是自造新壳,逐个 createElement
    function el(tag,cls,txt){ var e=document.createElement(tag); if(cls)e.className=cls; if(txt)e.textContent=txt; return e; }
    var bar=el('div','mtoc');
    var toggle=el('button','mtt'); toggle.type='button'; toggle.setAttribute('aria-expanded','false');
    var mtk=el('span','mtk','目录'), label=el('span','mtl'), caret=el('i','','⌄');
    toggle.appendChild(mtk); toggle.appendChild(label); toggle.appendChild(caret);
    var panel=el('div','mtm'), prog=el('span','mtbar');
    bar.appendChild(toggle); bar.appendChild(panel); bar.appendChild(prog);
    items.forEach(function(it,i){
      var a=document.createElement('a'); a.href='#'+it.el.id; a.dataset.i=i; a.textContent=it.label;
      panel.appendChild(a);
    });
    // 就地插在第一节之前 → 滚到这里才吸顶(第一屏留给标题/播放条/钩子)
    items[0].el.parentElement.insertBefore(bar, items[0].el);
    bar.__items=items; bar.__cur=-1;   // 状态挂节点上:单例监听每次现查当前条,旧节点随 SPA 换页自然失联
    toggle.addEventListener('click', function(){
      var open=bar.classList.toggle('open'); toggle.setAttribute('aria-expanded', open?'true':'false');
    });   // toggle/panel 的监听挂在自家节点上,随节点销毁,不泄漏
    panel.addEventListener('click', function(e){
      var a=e.target.closest('a'); if(!a) return;
      e.preventDefault();
      var it=items[+a.dataset.i];
      window.scrollTo({top:it.el.getBoundingClientRect().top+window.scrollY-bar.offsetHeight-8, behavior:'smooth'});
      bar.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
    });
    mtocScroll();
    // 页尾「这一集涉及」:克隆右栏里的关联框**本体**(同源不漂移;目录已被吸顶条取代不克隆)。
    // 不克隆 .pd-rel 外壳 —— 实测撞过一次空壳(壳先建、框后搬,克隆到只有标题的半成品);
    // 直接选框本身 + 「必须真有链接」守卫,拿不到内容宁可不出块。
    var box=document.querySelector('.right.sidebar .pd-rel blockquote[data-callout]');
    if(box && box.querySelector('a') && !art.querySelector('.mrel')){
      var wrap=el('div','mrel');
      wrap.appendChild(el('h3','','这一集涉及'));
      wrap.appendChild(box.cloneNode(true));
      art.appendChild(wrap);
    }
  }
  // C13j 补遗:实体页关联药丸集数徽标(设计稿 .chp b)。数据 = 页内 script.pd-epn(构建期与 phero 同源);
  // 从**当前页 DOM** 现读 —— SPA 换页不重跑新页内联脚本,闭包里的旧数据会漏配新页(实测),读 DOM 才与页同步。
  // ③ 的药丸段 = 「标题→说明段→链接段」的第二个 p(与 custom.scss 药丸选择器同口径);④ 在 .pd-peers 里,天然不吃徽标。
  function chips(){
    var el=document.querySelector('article script.pd-epn'); if(!el) return;
    var d; try{ d=JSON.parse(el.textContent); }catch(e){ return; }
    var as=document.querySelectorAll('article h2 + p + p > a.internal');
    for(var i=0;i<as.length;i++){
      var a=as[i]; if(a.querySelector('b')) continue;
      var n=d[(a.textContent||'').trim()];
      if(n){ var b=document.createElement('b'); b.textContent=n+' 集'; a.appendChild(b); }
    }
  }
  // C13j 补遗:右栏目录第四节改叫「④ 同主题的人」(设计稿右栏叫法比正文小节标题短;
  // ⚠️ 本注释会原样进页面,别在这里写正文那个小节的中文标题 —— 守卫测试在拿它查空壳);非实体页无 ④,天然 no-op
  function tocPeers(){
    var links=document.querySelectorAll('.toc a');
    for(var i=0;i<links.length;i++){
      var t=(links[i].textContent||'').trim();
      if(t.indexOf('④')===0 && t!=='④ 同主题的人') links[i].textContent='④ 同主题的人';
    }
  }
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); }
  document.addEventListener('nav', all);
  // 跨断点缩放:右栏出现/消失后,深浅色开关要搬到当前看得见的位置去
  var rt; addEventListener('resize', function(){ clearTimeout(rt); rt=setTimeout(adopt, 150); });
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', all); else all();
})();
</script>`.replace(/\n\s*\n/g, "\n");
}

/**
 * 开篇钩子(设计稿 .hook,第八批 #2「钩子收声」版):一句斜体带引号的金句 + 出处。
 * 取 digest.quotes[0] —— 与卡片同一条,读者从卡片点进来时是接得上的。
 * 引号由样式生成(与卡片同口径),内容里不写标点。无金句就整块不渲染。
 */
export function renderHook(digest, meta) {
  const q = digest?.quotes?.[0];
  if (!q?.zh) return "";
  const who = [q.speaker, meta?.no_timestamps ? null : q.timestamp].filter(Boolean).join(" · ");
  return `<div class="pd-hook"><div class="z">${String(q.zh).trim()}</div>${who ? `<div class="a">${who}</div>` : ""}</div>`;
}

/**
 * C13d-1 ·「回原文是小圆点,不是方括号」(设计稿 .ts / .orig)。
 * 导读正文里的出处标注 `[03:53 Elizabeth Stone]` → 一个 ↩ 小圆点,点开**就地**展开英文原话。
 *
 * 英文原话逐字取自 transcript.en.json(与防失真闸门同一份底料),**取不到就原样留方括号** ——
 * 宁可丑一点,也不出一个点开什么都没有的空按钮,更不许让模型现编原话。
 */
const HTML_ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
const attrEscape = (s) => String(s).replace(/[&<>"]/g, (c) => HTML_ESC[c]);
// 出处里的说话人可能已被 linkPrimaryEntities 补成双链([03:53 [[Lenny|Lenny]]]),data-who 要读文不要语法
const plainText = (s) => String(s).replace(/\[\[([^\]|]*)\|([^\]]*)\]\]/g, "$2").replace(/\[\[([^\]]*)\]\]/g, "$1").trim();
const secOf = (t) => {
  const m = /^(\d{1,2}):(\d{2})$/.exec(String(t)); // 分钟可超 59(64:09 是第 64 分钟)
  return m ? Number(m[1]) * 60 + Number(m[2]) : null;
};

/** 转写稿里盖住 sec 的那一段 + 顺着往下接的段(接够 160 字符即止,最多 3 段);盖不住返回 null */
export function originalAt(transcript, sec) {
  const segs = Array.isArray(transcript) ? transcript : null;
  if (!segs?.length || sec == null) return null;
  let i = -1;
  for (let k = 0; k < segs.length; k++) if (Number(segs[k].start) <= sec) i = k;
  // 出处标 00:00/00:04 这类落在片头静音里的(第一段还没开口)→ 取开场第一段:那就是那个时刻的原话
  if (i < 0) return sec < Number(segs[0].start) ? textFrom(segs, 0) : null;
  const limit = segs[i + 1] ? Number(segs[i + 1].start) : Number(segs[i].end); // 段间静音仍算这一段
  if (!(sec < limit)) return null;
  return textFrom(segs, i);
}

/** 从第 i 段起顺着往下接,接够 160 字符即止、最多 3 段(一句残句看不懂,一整章又太长) */
function textFrom(segs, i) {
  const out = [];
  let n = 0;
  for (let k = i; k < segs.length && k < i + 3 && n < 160; k++) {
    const t = String(segs[k].text ?? "").trim();
    if (!t) continue;
    out.push(t);
    n += t.length;
  }
  return out.length ? out.join(" ") : null;
}

export function renderOrigRefs(md, transcript, meta) {
  if (meta?.no_timestamps) return String(md); // 无时间戳源:没有时间点可回,上游已把方括号换成(说话人)
  // 说话人段允许含 [[双链]](补链可能先跑过);`[06:02]` 这种没有说话人的不匹配(那是金句署名)
  return String(md).replace(/\[(\d{1,2}:\d{2})\s+((?:[^[\]]|\[\[[^\]]*\]\])+?)\]/g, (whole, t, who) => {
    const en = originalAt(transcript, secOf(t));
    if (!en) return whole;
    return `<button class="pd-ts" data-t="${attrEscape(t)}" data-who="${attrEscape(plainText(who))}" data-en="${attrEscape(en)}" aria-label="回原文"></button>`;
  });
}

/**
 * ↩ 的行为:点开在按钮后面就地插一块英文原话,再点收起。
 * ⚠️ 与右栏脚本同一条规矩:脚本内一个空行都不能有(Markdown 原样 HTML 块遇空行即结束)。
 */
export function renderOrigScript() {
  return `<script>
(function(){
  function bind(){
    document.querySelectorAll('button.pd-ts').forEach(function(b){
      if(b.dataset.bound) return;
      b.dataset.bound='1';
      b.addEventListener('click',function(){
        var n=b.nextElementSibling;
        if(n&&n.classList.contains('pd-orig')){ n.remove(); return; }
        var d=document.createElement('div');
        d.className='pd-orig';
        var h=document.createElement('b');
        h.textContent='英文原话 '+(b.dataset.t||'')+(b.dataset.who?' · '+b.dataset.who:'');
        d.appendChild(h);
        d.appendChild(document.createElement('br'));
        d.appendChild(document.createTextNode(b.dataset.en||''));
        b.after(d);
      });
    });
  }
  document.addEventListener('nav', bind);
  bind();
})();
</script>`.replace(/\n\s*\n/g, "\n");
}

/**
 * C13d-3 · 嘉宾署名行(设计稿 .byl)。用户 2026-07-27 拍板:放「嘉宾名 · 职位」。
 * 数据来自 C12 入库的 guest_name / guest_title(人名 98% / 职位 93%)——所以降级是常态:
 * 只有人名就只印人名(**不留孤立的「·」**),两个都没有整行不渲染(设计稿 .byl:empty 同口径)。
 */
export function renderByline(meta) {
  const parts = [meta?.guest_name, meta?.guest_title].map((x) => String(x ?? "").trim()).filter(Boolean);
  if (!parts.length) return "";
  const [name, title] = parts.length === 2 ? parts : [parts[0], null];
  // 转义:人名/职位是 GLM 从转写稿抽的,理论上能带进 HTML(GLM 20260727-004[1] 提的注入面)。
  // ⚠️ 同类问题在 h1 标题 / meta 行等处也存在(既有写法),已登记 tech-debt,不在本片顺手改。
  return `<div class="pd-byl"><b>${attrEscape(name)}</b>${title ? ` · ${attrEscape(title)}` : ""}</div>`;
}

export function renderAudioPlayer(meta) {
  // C13d-1(ADR 0015,用户 2026-07-26 明文确认):播放条**紧贴标题**、撑满宽。
  // C13d-3(用户 2026-07-27 拍板):外观照设计稿 .play(圆形 ▶ / 听中文精华 / N 分钟 · AI 合成朗读 /
  // 进度条 / 时间),但**底下接真 audio** —— 播停拖时间全接线(renderPlayerScript),不做假条。
  // 时长不在这里写死:源播客时长 ≠ 中文精华音频时长,总时长由 loadedmetadata 从音频真身取。
  return (
    `<div class="pd-play">` +
    `<button class="pb" type="button" aria-label="播放">▶</button>` +
    `<span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span>` +
    `<span class="bar"><i></i></span>` +
    `<span class="tm">00:00</span>` +
    `<audio preload="metadata" src="/audio/${meta.id}.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio>` +
    `</div>`
  );
}

/**
 * 播放条行为:播 / 停 / 拖动跳转 / 时间跟着走 / 加载失败降级。
 * ⚠️ 同一条规矩:脚本内一个空行都不能有(Markdown 原样 HTML 块遇空行即结束)。
 */
export function renderPlayerScript() {
  return `<script>
(function(){
  function fmt(s){
    if(!isFinite(s)||s<0) s=0;
    var m=Math.floor(s/60), x=Math.floor(s%60);
    return (m<10?'0':'')+m+':'+(x<10?'0':'')+x;
  }
  function wire(box){
    if(box.dataset.wired) return; box.dataset.wired='1';
    var a=box.querySelector('audio'), pb=box.querySelector('.pb'),
        bar=box.querySelector('.bar'), fill=box.querySelector('.bar > i'),
        tm=box.querySelector('.tm'), t2=box.querySelector('.t2');
    if(!a||!pb||!bar||!fill||!tm) return;
    var total=0;
    function paint(){
      var cur=a.currentTime||0;
      fill.style.width=(total?(cur/total*100):0)+'%';
      tm.textContent=fmt(cur)+(total?' / '+fmt(total):'');
    }
    a.addEventListener('loadedmetadata',function(){
      total=a.duration||0;
      if(total&&t2) t2.textContent=Math.round(total/60)+' 分钟 · AI 合成朗读';
      paint();
    });
    a.addEventListener('timeupdate',paint);
    a.addEventListener('play',function(){ pb.textContent='❚❚'; pb.setAttribute('aria-label','暂停'); });
    a.addEventListener('pause',function(){ pb.textContent='▶'; pb.setAttribute('aria-label','播放'); });
    a.addEventListener('ended',function(){ pb.textContent='▶'; });
    pb.addEventListener('click',function(){ if(a.paused) a.play(); else a.pause(); });
    function seek(ev){
      if(!total) return;
      if(ev.clientX==null) return;
      var r=bar.getBoundingClientRect();
      var x=Math.min(Math.max(ev.clientX-r.left,0),r.width);
      a.currentTime=(x/r.width)*total;
      paint();
    }
    bar.addEventListener('pointerdown',function(ev){
      seek(ev);
      function mv(e){ seek(e); }
      function up(){ document.removeEventListener('pointermove',mv); document.removeEventListener('pointerup',up); }
      document.addEventListener('pointermove',mv); document.addEventListener('pointerup',up);
    });
    a.addEventListener('error',function(){
      box.classList.add('pd-play-dead');
      box.textContent='本集中文精华音频还没生成好,稍后再来听。';
    });
  }
  function all(){ document.querySelectorAll('.pd-play').forEach(wire); }
  document.addEventListener('nav', all);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', all); else all();
})();
</script>`.replace(/\n\s*\n/g, "\n");
}

// 不补链的行:【背景】块 / 引用续行(AI 补充,非本集实体讨论)/ 标题行(链进标题会毁锚点、Quartz 渲染差)
const BACKGROUND_LINE_RE = /^\s*(?:>+\s*)*(?:[-*+]\s*)?【背景】/;
const QUOTE_LINE_RE = /^\s*>+/;
const HEADING_LINE_RE = /^\s*#/;

/**
 * 正文首现处给 primary 实体补 [[file|原词]] 双链(保留原读文)。
 * 只链 primary(有页,#9);每个实体只链一次(首现);【背景】/引用行跳过。
 * file 名按长度降序,先长后短,避免短名先吃掉长名的子串。
 */
// 补链禁区:① 已插入的 [[…]] 双链区间(短名不许匹配进长名的链接内部,防畸形嵌套 [[[[…]] / [[…[[…]])
// ② HTML 标签内部(`<button … data-en="…">`)—— 回原文按钮把英文原话搬进了属性,那里的词
//    只是引文、不是本集正文讨论,补链进去会把属性撑烂(data-en="the [[动荡期|storming phase]]")。
function linkSpans(L) {
  const spans = [];
  for (const re of [/\[\[.*?\]\]/g, /<[^>]*>/g]) {
    let m;
    while ((m = re.exec(L))) spans.push([m.index, m.index + m[0].length]);
  }
  return spans;
}

/** t 在 L 中首个**落在已插入双链之外**的位置(ASCII 走词边界,中文按子串);无则 -1 */
function firstIdxOutsideLinks(L, t) {
  const spans = linkSpans(L);
  const inSpan = (i) => spans.some(([s, e]) => i >= s && i < e);
  if (isAscii(t)) {
    const re = new RegExp(`(?<![A-Za-z0-9])${escapeRegExp(t)}(?![A-Za-z0-9])`, "g");
    let m;
    while ((m = re.exec(L))) if (!inSpan(m.index)) return m.index;
    return -1;
  }
  let from = 0, idx;
  while ((idx = L.indexOf(t, from)) >= 0) {
    if (!inSpan(idx)) return idx;
    from = idx + 1;
  }
  return -1;
}

export function linkPrimaryEntities(md, entities) {
  // find=正文里真出现的词(本集原词 sourceForm,权威化前的写法);target=链接目标页(聚合权威 file)。
  // 无权威化(sourceForm 缺省)时 find===target → 输出 [[t|t]] 与历史逐字节一致。
  const targets = asArr(entities)
    .filter((e) => e.primary && e.file)
    .map((e) => ({ find: String(e.sourceForm ?? e.file), target: String(e.file) }))
    .sort((a, b) => b.find.length - a.find.length);
  const linked = new Set();
  return String(md)
    .split("\n")
    .map((line) => {
      if (BACKGROUND_LINE_RE.test(line) || QUOTE_LINE_RE.test(line) || HEADING_LINE_RE.test(line)) return line;
      let L = line;
      for (const t of targets) {
        if (linked.has(t.find)) continue;
        // 先长后短仍会让短名命中长名链接内部(如 [[智能体编码]] 里的「智能体」)→ 必须避开已插链接区,
        // 否则产出 [[[[智能体]] / [[编码[[智能体]] 畸形双链(backfill=40 弄脏 ~11 集的根因)。
        const idx = firstIdxOutsideLinks(L, t.find);
        if (idx < 0) continue;
        L = L.slice(0, idx) + `[[${t.target}|${t.find}]]` + L.slice(idx + t.find.length);
        linked.add(t.find);
      }
      return L;
    })
    .join("\n");
}

/** frontmatter:类型化属性 + host=null 绝不打印 */
// C5.1 fallback 链:title_zh(云端浓缩生成)→ title_en(RSS 原标题)→ id;date 缺 → id 前缀(YYYY-MM-DD)。
// Lenny's 存量集 title_zh/date 全空,此前页面渲染出 "# undefined" / "date: undefined"。
export const displayTitle = (meta) => meta.title_zh ?? meta.title_en ?? meta.id;
export const displayDate = (meta) => meta.date ?? (String(meta.id).match(/^\d{4}-\d{2}-\d{2}/)?.[0] ?? "");

function renderFrontmatter(meta, digest, entities) {
  const lines = [
    "---",
    `title: ${yamlScalar(displayTitle(meta))}`,
    `podcast: ${yamlScalar(meta.podcast)}`,
    `date: ${displayDate(meta)}`,
    `source_url: ${meta.source_url}`,
  ];
  // duration_sec 缺(如第三方稿源)→ 整行不写,首页卡片该栏自动隐藏(不许渲染出 NaN:NaN)
  if (Number.isFinite(meta.duration_sec)) lines.push(`duration: "${mmss(meta.duration_sec)}"`);
  // C10:type 供首页 Bases 视图筛选(只收集页);cover 供卡片色条;description 供卡片简介
  lines.push("type: episode", `cover: "${coverColor(meta.podcast)}"`);
  // 每集配图:cover.mjs 取下来的官方图,部署时拷进 public/covers/<id>.jpg(见 deploy-site.sh)。
  // 与上面的 cover 色值分开两个字段 —— cover 是卡片色条,image 是真图片,别混用。
  if (meta.cover_image?.file) lines.push(`image: "/covers/${meta.id}.jpg"`);
  if (digest.tldr) lines.push(`description: ${yamlScalar(digest.tldr)}`);
  if (meta.host) lines.push(`host: "[[${meta.host}]]"`); // 无 host → 整行不写(不打印 null)
  if (entities) {
    const g = groupByRole(entities);
    const wl = (arr) => arr.map((x) => `"[[${x.file}]]"`).join(", ");
    if (g.guests.length) lines.push(`guests: [${wl(g.guests)}]`);
    if (g.cohosts.length) lines.push(`cohosts: [${wl(g.cohosts)}]`);
    if (g.companies.length) lines.push(`companies: [${wl(g.companies)}]`);
    if (g.concepts.length) lines.push(`concepts: [${wl(g.concepts)}]`);
  } else {
    // 向后兼容(无 entities):C2 的纯文本 guests
    const guestsLine = (meta.guests || [])
      .map((x) => (meta.guest_titles?.[x] ? `${x} (${meta.guest_titles[x]})` : x))
      .join("、");
    if (guestsLine) lines.push(`guests: ${guestsLine}`);
  }
  // C10:tags=大类词表(进图谱/首页/标签页);category=主类(看板分组);细标签不再进 frontmatter
  const cats = episodeCategories(meta, entities);
  lines.push(`category: ${yamlScalar(cats[0])}`);
  lines.push("tags:", ...cats.map((t) => `  - ${t}`));
  lines.push("---");
  return lines.join("\n");
}

/** meta + digest(+ entities)→ 集页 markdown(纯函数;gate-all 复用它做「重渲染比对」) */
export function renderEpisode(meta, digest, entities = null, related = null, transcript = null) {
  const dur = mmss(meta.duration_sec);
  const fm = renderFrontmatter(meta, digest, entities);
  const relatedSection = renderRelatedEpisodes(related, episodeCategories(meta, entities)); // C6 关联区③(空则 "")

  // 顶部:有 entities → 关联区(按角色分行);否则 C2 info callout(host=null 时不打印主持)
  const guestsLine = (meta.guests || [])
    .map((g) => (meta.guest_titles?.[g] ? `${g} (${meta.guest_titles[g]})` : g))
    .join("、");
  const top = entities
    ? renderRelations(entities, meta)
    : `> [!info] 本集\n> ${meta.podcast} · 嘉宾 ${guestsLine}${meta.host ? ` · 主持 ${meta.host}` : ""} · ${displayDate(meta)} · ${dur}\n> 来源:${meta.source_url}`;

  let digestMd = String(digest.digest_md);
  // 无时间戳源:剥掉导读内联占位时间戳,说话人用中文括号(避开方括号与 [[双链]] 冲突,防三重括号畸形)
  // [00:55 X] → (X)(标准变更·用户授权)
  if (meta.no_timestamps) digestMd = digestMd.replace(/\s*\[\d{1,2}:\d{2}\s+([^\]]+)\]/g, "（$1）");
  // ⚠️ 顺序:先收 ↩ 再补双链。反过来的话,出处里的说话人会先被补成 [[双链]],↩ 一收就把那个链吃掉;
  //    而补链已被教会跳过 HTML 标签内部,所以英文原话里的词不会被误链(linkSpans 第二条禁区)。
  digestMd = renderOrigRefs(digestMd, transcript, meta);
  const bodyMd = entities ? linkPrimaryEntities(digestMd, entities) : digestMd;

  const quoteBlocks = (digest.quotes || [])
    .map(
      // ⚠️ 三行必须合成**一个** blockquote 段落(行尾两空格=硬换行),^块ID 才能覆盖**整条**金句。
      // 若用空 `>` 分隔成多段,Quartz 块嵌入只拉到 ^ID 所在那一段(署名行)→ 金句正文全丢
      // (独立审计 2026-07-18 实测逮到:实体页金句墙只剩「—— 某人 [时间]」没正文;且闸门/测试都放过了)。
      // P1 风格 fixture 已实证:无空 `>` 分隔 + 行尾两空格 → 嵌入含正文且保留视觉换行。
      // 无时间戳源(第三方稿,如 SingjuPost):署名标「来自原文」而非占位时间戳(标准变更·用户授权)
      // C13h 设计稿 .qr:中文句 = 斜体普惠体带 CSS 引号(.qz),署名行 = 11.5px 浅灰(.qm)。
      // span 只是样式挂点,金句文字逐字不动(硬闸「引语逐字命中转写稿」对的是 digest,不受影响)。
      (q, i) =>
        `> <span class="qz">${String(q.zh).trim()}</span>  \n> *${String(q.en).trim()}*  \n> <span class="qm">—— ${String(q.speaker)} · ${meta.no_timestamps ? "来自原文" : `[${String(q.timestamp)}]`}</span> ^${blockId(i)}`,
    )
    .join("\n\n");

  // C10:自由细标签降级为页底关键词(纯文本,不带 #,不进图谱/首页/标签页)
  const keywords = (entities?.tags ?? (Array.isArray(digest.tags) ? digest.tags : [])).filter(Boolean);
  const keywordsLine = keywords.length ? `\n*本集关键词:${keywords.join(" · ")}*\n` : "";

  const body = `
${renderTopBar(meta)}

# ${displayTitle(meta)}

${renderByline(meta)}

${renderEpisodeMeta(meta)}

${renderAudioPlayer(meta)}

${renderHook(digest, meta)}

${top}

${renderTldr(digest)}

${bodyMd.trim()}

${secLabel("全部金句", `${(digest.quotes || []).length} 条(中英对照,已过机器闸门)`)}

${quoteBlocks}${relatedSection ? `\n\n${relatedSection}` : ""}
${keywordsLine}
${renderSidebarScript()}

${renderOrigScript()}

${renderPlayerScript()}
`;
  return fm + "\n" + body;
}

export function loadEpisode(dir) {
  const meta = JSON.parse(readFileSync(resolve(dir, "meta.json"), "utf8"));
  const digest = JSON.parse(readFileSync(resolve(dir, "digest.json"), "utf8"));
  let entities = null;
  const ep = resolve(dir, "entities.json");
  if (existsSync(ep)) entities = JSON.parse(readFileSync(ep, "utf8"));
  // C13d-1 ↩ 回原文要的英文原话底料。缺了不报错:老集/无稿源只是回不了原文,不该拦住整页渲染。
  let transcript = null;
  const tp = resolve(dir, "transcript.en.json");
  if (existsSync(tp)) {
    try {
      transcript = JSON.parse(readFileSync(tp, "utf8"));
    } catch {
      transcript = null;
    }
  }
  return { meta, digest, entities, transcript };
}

/** 集页在仓库里的路径(已提交内容源;bootstrap-site.sh 由此灌进 site/content) */
export function samplePath(id) {
  return join(ROOT, "samples", `${id}.md`);
}

// ── CLI ──(realpathSync/fileURLToPath 稳健写法;本仓库路径含中文,不能用 `file://${argv[1]}`)
const isMain = (() => {
  try {
    return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
})();

if (isMain) {
  const DIR = process.argv[2] || "data/episodes/2026-07-08-latent-space-modal";
  const { meta, digest, entities, transcript } = loadEpisode(resolve(ROOT, DIR));
  const md = renderEpisode(meta, digest, entities, null, transcript);
  writeFileSync(samplePath(meta.id), md);
  console.log(`✅ 已写 samples/${meta.id}.md (${md.length} 字符, ${digest.quotes?.length ?? 0} 金句, entities ${entities ? "有" : "无"})`);
}
