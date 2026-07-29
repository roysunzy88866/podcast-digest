#!/usr/bin/env node
// C13a · 首页生成:照原型设计稿出真页面 → content/index.md。
//
// 设计稿 = `设计稿/index.html` + `设计稿/style.css`(577 行)。
// 结构照抄设计稿:顶栏(站名+最新/最热)→ 三栏 shell(左主题 / 中日期流 / 右自动区)。
// 样式全部在 assets/styles/custom.scss(项目铁律:唯一视觉定制入口),本文件只出结构。
//
// 上一版(C10)首页主体是 ```base 代码块(bases-page 插件构建期渲染),本轮实证推翻:
// 构建期烘焙、筛选写死、读者侧点不动,千集不成立。
//
// 依据的 🔒 拍板(需求共创/UI交互重做-2026-07-25.md):
//   #1 站名=跨国深谈 / #9 搜索与主题入口不降级 / #11 按日期分组 / #13 保留三栏
//   #14 图谱降级(首页不给图谱入口)/ #20 卡片配图按长宽比分流 / 第八批 #1 顶栏不吸顶
//   右栏「只放机器自动能算的东西,零人工编辑」(设计稿撤回了「人工手挑」那条 📌)
//
// 卡片数据来源(全部已有,本文件不新造):
//   标题 render.mjs 的 displayTitle(C5.1 fallback 链)/ 金句 digest.quotes[0].zh
//   嘉宾 meta.guest_name / meta.guest_title(C12 产出,缺则按 C13a 场景3 降级)
//   大类 render.mjs 的 episodeCategories(人工映射>生成端,同源)/ 封面 meta.cover_image(🔒 #20)
import { writeFileSync, mkdirSync, realpathSync, readFileSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadAllEpisodes } from "./build-entities.mjs";
import { displayTitle, episodeCategories } from "./render.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** 封面是否真在磁盘上(不信 meta 的声明,理由见 thumb) */
export const coverOnDisk = (id) => existsSync(join(ROOT, "data/episodes", id, "cover.jpg"));

/** 词表大类(有序,呈现顺序=词表登记顺序) */
export function taxonomyCategories() {
  const tax = JSON.parse(readFileSync(join(ROOT, "data/tag-taxonomy.json"), "utf8"));
  return Object.keys(tax.vocabulary ?? {});
}

/**
 * 本集大类。**真相源是 render.mjs 的 episodeCategories()**(人工映射 > 生成端
 * entities.categories > 未分类)—— 别再自己读一份人工映射:那样会漏掉新集,
 * 因为新集的大类是生成端算好的,只在 entities/frontmatter 里,不在人工映射表里
 * (实测漏了 5/40 集,卡片没 chip、兜底块空白)。
 * 「未分类」不上卡:它是响亮兜底值,verify-c5 词表闸会在上线前拦住。
 */
export function categoriesOf(episode) {
  return episodeCategories(episode.meta, episode.entities).filter((c) => c !== "未分类");
}

export const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** 集数降序 + 同数按名字,保证同一批数据每次输出一致(可复现) */
const byCountThenName = (a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]), "zh");

/**
 * C13f ·「点一条内容开新标签页」(用户 2026-07-27 明选)。
 * ⚠️ 只写 `target="_blank"` 不够:Quartz 的 SPA 路由(spa.inline.ts getOpts)判 _blank 时
 * 读的是**事件目标本身**的属性 —— 点在 <a> 里的子元素(如卡片标题里的文本节点被包过一层)
 * 就漏判,链接会被路由接管、在当前页换掉。`data-router-ignore` 查的是 `closest('a').dataset`,
 * 无论点到哪个子元素都可靠 → 两个一起写才真在新标签页开。
 */
const NEWTAB = ` target="_blank" rel="noopener" data-router-ignore`;

/** 公司 logo 的文件名(用户手动往 assets/logos/ 里喂图,见 assets/logos/README.md) */
export const logoSlug = (name) => String(name).trim().toLowerCase().replace(/\s+/g, "-");

/**
 * 嘉宾行(C13a 场景3 降级):
 *   人名+职位 → 「人名 · 职位」;只有一个 → 只显示它,不留孤立的「·」;都没有 → 整行不渲染。
 */
function whoRow(meta) {
  const name = (meta.guest_name ?? "").trim();
  const role = (meta.guest_title ?? "").trim();
  if (!name && !role) return "";
  if (name && role) return `<div class="who">${esc(name)}<span class="role"> · ${esc(role)}</span></div>`;
  if (name) return `<div class="who">${esc(name)}</div>`;
  return `<div class="who"><span class="role">${esc(role)}</span></div>`;
}

/**
 * 缩略图。有封面 → 真图(🔒 #20:近方图 0.9–1.15 打 face 裁到脸,宽图中心裁不加变换);
 * 无封面 → 主题色兜底块(预期行为,不是 bug)。长宽比缺失时不打 face:宁可中心裁,不赌。
 */
function thumb(meta, primaryCat, hasCover) {
  const cover = meta.cover_image;
  // ⚠️ 只信「文件真在」,不信 meta 的声明:实测 47 条 cover_image 里 4 条没有对应的
  // cover.jpg(配图那条线留下的数据不一致,已记 tech-debt)。只信 meta 会渲染出裂图,
  // 而缺图本来就有设计好的去处 —— 主题色兜底块。
  if (cover && hasCover(meta.id)) {
    const a = typeof cover.aspect === "number" ? cover.aspect : null;
    const face = a !== null && a >= 0.9 && a <= 1.15 ? ` class="face"` : "";
    return `<div class="th fr"><img${face} src="/covers/${esc(meta.id)}.jpg" alt=""></div>`;
  }
  return `<div class="th fb"><span>${esc(primaryCat ?? "")}</span></div>`;
}

/**
 * 一张集卡。首页与大类页共用同一套标记 —— 设计稿里 `.card` 与 `.list .row` 两个类名
 * 长得一模一样(手搓原型的产物),复用 `.card` 出的画面相同,但只需要一套 CSS。
 * @param extraAttrs 额外的 data-*(大类页的三轴筛选靠它们过滤,见 build-tag-pages.mjs)
 */
export function card(episode, cats, hasCover, extraAttrs = "") {
  const { meta, digest } = episode;
  const quote = digest?.quotes?.[0]?.zh?.trim();
  const primary = cats[0];
  const chips = cats.length
    ? `<div class="tags">${cats
        .map((c) => `<a class="chip internal" data-cat="${esc(c)}" href="./tags/${encodeURIComponent(c)}">${esc(c)}</a>`)
        .join("")}</div>`
    : "";

  return [
    `<div class="card" data-slug="${esc(meta.id)}"${primary ? ` data-cat="${esc(primary)}"` : ""}${extraAttrs}>`,
    `<div class="tx">`,
    `<div class="t"><a class="internal"${NEWTAB} href="./${esc(meta.id)}">${esc(displayTitle(meta))}</a></div>`,
    quote ? `<div class="q">${esc(quote)}</div>` : "",
    whoRow(meta),
    chips,
    `</div>`,
    thumb(meta, primary, hasCover),
    `</div><!--/card-->`,
  ]
    .filter(Boolean)
    .join("");
}

/**
 * 左栏:主题导航(设计稿是主题名 + 条数)。条数只数真会渲染的集。
 * 首页与大类页共用(设计稿 .shell / .shell.two 都带左栏)。
 * @param active 当前所在大类;首页传 null → 高亮「全部」
 */
export function leftRail(episodes, catsOf, vocabulary, active = null) {
  const n = {};
  for (const c of vocabulary) n[c] = 0;
  for (const ep of episodes) for (const c of catsOf(ep)) if (c in n) n[c]++;
  const rows = Object.entries(n)
    .sort(byCountThenName)
    .map(
      ([c, k]) =>
        `<a class="cl${c === active ? " on" : ""} internal" href="${active ? "." : "./tags"}/${encodeURIComponent(c)}"><span>${esc(c)}</span><i>${k}</i></a>`,
    )
    .join("\n    ");
  // C13f #3:深浅色开关从顶栏挪进左栏,坐在「关于本站」上面。这里只留空槽 ——
  // 真开关是 Quartz 的 .darkmode 节点,由 scriptBlock 搬进来(🔒 #2 亮暗双模式的行为
  // 在 Quartz 手里,复刻一份必然走样,同 🔒 #9 搜索那条的手法)。
  return `<div class="pd-left">
    <div class="sh">全部主题</div>
    <a class="cl${active ? "" : " on"}" href="${active ? ".." : "."}/"><span>全部</span><i>${episodes.length}</i></a>
    ${rows}
    <div class="pd-themesw"></div>
    <div class="about"><b>关于本站</b>每周把几集英文播客变成能读的中文精华,每句都能回到原话。</div>
  </div>`;
}

/**
 * 右栏:全部由机器算(设计稿撤回了「人工手挑」)——
 * 按公司(实体里 type=company 的出现集数,≥3 集)/ 按播客(meta.podcast)/ 随便看看。
 */
export function rightRail(episodes) {
  const companies = {};
  for (const ep of episodes) {
    const seen = new Set();
    for (const e of ep.entities?.entities ?? []) {
      if (e.type !== "company") continue;
      const name = e.file ?? e.name;
      if (!name || seen.has(name)) continue;
      seen.add(name);
      companies[name] = (companies[name] ?? 0) + 1;
    }
  }
  const bigCo = Object.entries(companies).filter(([, k]) => k >= 3).sort(byCountThenName);
  // C13f #4:一条 = 一张卡(logo 位 / 公司名 / 集数)。
  // logo 用户手动喂进 assets/logos/<公司名小写>.png(部署时拷进 public/logos)——
  // **缺是常态**,所以底板永远先画首字母,图加载失败就把 <img> 摘掉、露出底板,不留裂图。
  const coRows = bigCo
    .slice(0, 8)
    .map(
      ([c, k]) =>
        `<a class="cc internal" href="./entities/${encodeURIComponent(c)}">` +
        `<span class="lg" data-n="${esc(String(c).trim().slice(0, 1).toUpperCase())}">` +
        `<img src="/logos/${esc(logoSlug(c))}.png" alt=""></span>` +
        `<span class="nm">${esc(c)}</span><span class="ct">${k} 集</span></a>`,
    )
    .join("\n      ");

  const pods = {};
  for (const ep of episodes) {
    const p = ep.meta.podcast;
    if (p) pods[p] = (pods[p] ?? 0) + 1;
  }
  const podRows = Object.entries(pods)
    .sort(byCountThenName)
    .map(([p, k]) => `<a class="rr" href="./tags/${encodeURIComponent(p)}"><span>${esc(p)}</span><span>${k} 集</span></a>`)
    .join("\n      ");

  // C13f #5:「随便看看」整块删掉(用户 2026-07-27 明说「删掉这个功能」)。
  return `<div class="pd-right">
    ${bigCo.length ? `<div class="blk">
      <div class="sh">按公司</div>
      ${coRows}
      ${bigCo.length > 8 ? `<a class="rr more2" href="./tags"><span>全部 ${bigCo.length} 家(≥3 集)…</span><span></span></a>` : ""}
    </div>` : ""}
    <div class="blk">
      <div class="sh">按播客</div>
      ${podRows}
    </div>
  </div>`;
}

/** 手机端摊开区(🔒 #9 搜索与主题不降级;层级纠偏:排序弱于分类) */
export function mobileHome(episodes, catsOf, vocabulary, active = "new") {
  const n = {};
  for (const c of vocabulary) n[c] = 0;
  for (const ep of episodes) for (const c of catsOf(ep)) if (c in n) n[c]++;
  const chips = Object.entries(n)
    .sort(byCountThenName)
    .map(([c, k]) => `<a class="internal" href="./tags/${encodeURIComponent(c)}">${esc(c)}<i>${k}</i></a>`)
    .join("");
  // 🔒 #9:搜索是**摊开的真输入框**,不是小图标。占位文案照设计稿。
  // 检索本身转发给 Quartz 的搜索(复用它的中文索引,见 scriptBlock 的 wireSearch)。
  return `<div class="pd-mhome">
    <div class="mhs"><input class="mhq" type="search" autocomplete="off" placeholder="搜标题 / 金句 / 正文 / 人名" aria-label="搜索标题、金句、正文、人名"></div>
    <div class="mhv">${active === "new" ? `<span class="on">最新</span><a class="internal" href="./must-read">最热</a>` : `<a class="internal" href="./">最新</a><span class="on">最热</span>`}</div>
    <div class="mhc"><a class="internal" href="./">全部<i>${episodes.length}</i></a>${chips}</div>
  </div>`;
}

/** 顶栏。「最热」= 必读页(C13c,build-mustread.mjs 每次构建自算)。
 *  active 决定哪个 nav 高亮(设计稿 must-read.html 顶栏是 最热 带 cur);
 *  右侧 .pd-acts 是空槽,由脚本把 Quartz 的搜索/深浅色/阅读模式搬进来(见 scriptBlock)。 */
export const topBar = (active = "home", mtitle = "") => `<header class="pd-top"><div class="pd-topin">
    <a class="b" href="./"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a>
    <nav class="pd-nav"><a${active === "home" ? ' class="cur"' : ' class="internal"'} href="./">最新</a><a${active === "mustread" ? ' class="cur internal"' : ' class="internal"'} href="./must-read">最热</a></nav>
    ${mtitle ? `<a class="pd-mtitle internal" href="./">←<span>${esc(mtitle)}</span></a>` : ""}
    <div class="pd-acts"></div>
  </div></header>`;

/**
 * 全部集 → 首页 markdown。空站 → 友好空状态(US-1a / C13a 场景4)。
 * @param episodes loadAllEpisodes() 的产物
 * @param opts.categoriesBySlug 大类映射(默认读 data/tag-taxonomy.json;测试可注入)
 * @param opts.hasCover (id)=>bool 封面文件是否真存在(默认查磁盘;测试可注入)
 */
export function renderList(episodes, opts = {}) {
  const fm = `---\ntitle: 跨国深谈\n---\n`;
  // 测试可注入 categoriesBySlug;生产走 render.mjs 的权威函数(同源,不另立一套)
  const catsOf = opts.categoriesBySlug
    ? (ep) => opts.categoriesBySlug[ep.meta.id] ?? []
    : categoriesOf;
  const vocabulary = taxonomyCategories();
  // 默认以磁盘为准;测试可注入
  const hasCover = opts.hasCover ?? coverOnDisk;

  if (!episodes.length) {
    return `${fm}
<div class="pd">
  ${topBar()}
  <div class="ep-empty-site">还没有内容,订阅源更新后会自动出现。</div>
</div>
${scriptBlock()}
`;
  }

  // 按日期分组、日期倒序;同日多集按标题兜底(可复现)
  // 组标兜底:date 缺了就从 id 前缀取,但**必须真长得像日期**才用 —— 否则会把 id 的前
  // 10 个字符当日期显示出来(实测 `2026-singju-openclaw-80apps` 这类 id 会切出「2026-singj」)。
  // 今天没露是因为 40 集 meta.date 都在;不钉住就是等着以后出个垃圾组标。
  const dateKey = (meta) => {
    if (meta.date) return String(meta.date);
    const head = String(meta.id ?? "").slice(0, 10);
    return /^\d{4}-\d{2}-\d{2}$/.test(head) ? head : "日期未知";
  };
  const byDate = new Map();
  for (const ep of episodes) {
    const d = dateKey(ep.meta);
    if (!byDate.has(d)) byDate.set(d, []);
    byDate.get(d).push(ep);
  }
  const groups = [...byDate.entries()]
    .sort((a, b) => (a[0] < b[0] ? 1 : a[0] > b[0] ? -1 : 0))
    .map(([date, eps]) => {
      const cards = eps
        .slice()
        .sort((x, y) => String(displayTitle(x.meta)).localeCompare(String(displayTitle(y.meta)), "zh"))
        .map((ep) => card(ep, catsOf(ep), hasCover))
        .join("\n");
      return `<div class="dateh">${esc(date)}</div>\n<div class="grid">\n${cards}\n</div>`;
    })
    .join("\n");

  return `${fm}
<div class="pd">
  ${topBar()}
  ${mobileHome(episodes, catsOf, vocabulary)}
  <div class="pd-shell">
  ${leftRail(episodes, catsOf, vocabulary)}
  <div class="pd-mid">
${groups}
  </div>
  ${rightRail(episodes)}
  </div>
</div>
${scriptBlock()}
`;
}

/**
 * ⚠️ 内联脚本里**一个空行都不能有**:Markdown 的原样 HTML 块遇空行即结束,
 * 之后 4 空格缩进的行会被当成缩进代码块 → <script> 里的 JS 不再是脚本内容,
 * 整段静默失效(大类页实测踩中,GLM 20260726-024[1] 的机制)。这里主动焊死。
 */
const squashBlankLines = (s) => s.replace(/\n\s*\n/g, "\n");

export const scriptBlock = () => squashBlankLines(`<script>
(function(){
  // 把 Quartz 侧栏里的搜索/深浅色/阅读模式搬进顶栏,再由 custom.scss 藏掉空壳侧栏。
  // 搬节点而不是重写一套:这三个组件的行为(搜索索引、主题记忆)全在 Quartz 自己手里,
  // 复刻一份必然走样。🔒 #9 搜索不许降级 / 🔒 #2 亮暗双模式必须留。
  // C13f #3:深浅色不再待在顶栏,搬进左栏「关于本站」上面那个空槽;搜索与阅读模式仍在顶栏。
  // 找节点仍是「先侧栏、再全站」,搬之前比 parentElement 保证幂等(SPA 每次 nav 都会重跑)。
  function adopt(){
    var acts=document.querySelector('.pd .pd-acts');
    function grab(sel,host){
      if(!host) return;
      var el=document.querySelector('#quartz-body > .sidebar '+sel) || document.querySelector('.sidebar '+sel)
             || document.querySelector(sel);
      if(el && el.parentElement!==host) host.appendChild(el);
    }
    ['.search','.readermode'].forEach(function(sel){ grab(sel,acts); });
    // 深浅色进左栏 —— 但**左栏在窄屏是整块 display:none 的**,槽跟着一起没了。
    // 所以只在槽真的看得见时才搬进去,看不见就退回顶栏(= 本片之前的位置)。
    // 🔒 #2 亮暗双模式任何屏宽都必须有入口,不许因为版面改动而消失。
    // ⚠️ 判「看不看得见」要看**槽的父容器**,不能看槽自己:槽一开始是空的,
    // .pd-themesw:empty 那条 display:none 让它自己永远量出 0 → 一判就是「看不见」,
    // 于是桌面端也会错误地退回顶栏(自己给自己下的套,实测逮到)。
    function shown(el){ return !!(el && (el.offsetWidth || el.offsetHeight || el.getClientRects().length)); }
    var slots=[].slice.call(document.querySelectorAll('.pd .pd-themesw'));
    var sw=null;
    for(var i=0;i<slots.length;i++){ if(shown(slots[i].parentElement)){ sw=slots[i]; break; } }
    grab('.darkmode', sw || acts);
  }
  // C13f #1:日期组标说人话。构建期只能写死日期原文(产物要可复现),
  // 「今天/昨天」是**读者的**今天 → 只能在浏览器里换。整串相等才换,不做前缀匹配。
  function dateh(){
    var p=function(n){ return String(n).padStart(2,'0'); };
    var k=function(d){ return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate()); };
    var now=new Date(), y=new Date(); y.setDate(y.getDate()-1);
    var map={}; map[k(now)]='今天'; map[k(y)]='昨天';
    document.querySelectorAll('.pd .dateh').forEach(function(el){
      var t=el.textContent.trim();
      if(map[t]) el.textContent=map[t];
    });
  }
  // 手机端摊开的搜索框(🔒 #9)。检索不自己实现:把键入转发给 Quartz 的搜索 ——
  // 索引、中文分词、结果预览全在它手里(verify-c5 就是在校验那个索引含中文)。
  // 机制:.search-container 加 active 就开浮层;往 .search-bar 塞值并派发 input 即触发检索。
  // 刻意不走它的 showSearch 入口:那个入口会把焦点抢到 Quartz 自己的输入框,用户得换框继续打字。
  function wireSearch(){
    var box=document.querySelector('.pd .mhq'); if(!box||box.__wired) return; box.__wired=1;
    function forward(){
      var bar=document.querySelector('.search .search-bar');
      var panel=document.querySelector('.search .search-container');
      if(!bar||!panel) return;
      var q=box.value;
      if(!q.trim()){ panel.classList.remove('active'); bar.value=''; bar.dispatchEvent(new Event('input')); return; }
      panel.classList.add('active');
      bar.value=q;
      bar.dispatchEvent(new Event('input'));
    }
    box.addEventListener('input', forward);
    // 也挂 focus/click:Quartz 的浮层可以「点空白处关掉」,关掉后我的框里还留着查询词。
    // 只挂 input 的话,用户再点输入框不会把结果调回来 —— 看着自己的词却没有结果、
    // 又没法靠继续打字恢复(GLM 20260726-025[4] 逼出来的死角,实测证实)。
    box.addEventListener('focus', forward);
    box.addEventListener('click', forward);
  }
  // logo 是用户手喂的,**缺是常态** → 图取不到就把 <img> 摘掉,露出底下画好的兜底
  // (公司卡是首字母,站名是引号标记)。不用行内 onerror:Quartz 是 SPA,整页 innerHTML
  // 换过之后行内处理器那一轮的结果会被冲掉;这里每次 nav 重跑,还能补上「已经失败过」的那些。
  function logos(){
    document.querySelectorAll('.pd .lg img, .pd .mk img').forEach(function(im){
      if(im.__lg) return; im.__lg=1;
      var kill=function(){ if(im.parentElement) im.remove(); };
      if(im.complete && im.naturalWidth===0){ kill(); return; }
      im.addEventListener('error', kill, {once:true});
    });
  }
  function init(){
    adopt();
    dateh();
    logos();
    wireSearch();
    var root=document.querySelector('.pd'); if(!root||root.__epInit) return; root.__epInit=1;
    // 已读压暗(客户端 localStorage;键沿用 pd-read,老已读史不丢)
    var KEY='pd-read', read;
    try{ read=new Set(JSON.parse(localStorage.getItem(KEY)||'[]')); }catch(e){ read=new Set(); }
    [].slice.call(root.querySelectorAll('.card[data-slug]')).forEach(function(c){
      var slug=c.dataset.slug; if(!slug) return;
      if(read.has(slug)) c.classList.add('ep-read');
      c.addEventListener('click', function(){ read.add(slug); try{localStorage.setItem(KEY, JSON.stringify([...read]));}catch(e){} });
    });
  }
  // Quartz 是 SPA:内联脚本换页后不重跑 → 挂 nav 事件(每次导航含首载都会触发)
  document.addEventListener('nav', init);
  // 跨断点缩放:左栏出现/消失后,深浅色开关要搬到当前看得见的那个位置去
  var rt; addEventListener('resize', function(){ clearTimeout(rt); rt=setTimeout(adopt, 150); });
  init();
})();
</script>`);

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
  console.log(`✅ 首页(原型三栏 + 日期流卡片)→ ${out}(${episodes.length} 集,8 大类)`);
}
