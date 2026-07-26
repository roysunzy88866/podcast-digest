#!/usr/bin/env node
// C13a · 首页生成:照原型设计稿出真页面 → content/index.md。
//
// 设计稿 = `需求共创/原型/index.html` + `需求共创/原型/style.css`(577 行)。
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
    `<div class="t"><a class="internal" href="./${esc(meta.id)}">${esc(displayTitle(meta))}</a></div>`,
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
  return `<div class="pd-left">
    <div class="sh">全部主题</div>
    <a class="cl${active ? "" : " on"}" href="${active ? ".." : "."}/"><span>全部</span><i>${episodes.length}</i></a>
    ${rows}
    <div class="about"><b>关于本站</b>每周把几集英文播客变成能读的中文精华,每句都能回到原话。</div>
  </div>`;
}

/**
 * 右栏:全部由机器算(设计稿撤回了「人工手挑」)——
 * 按公司(实体里 type=company 的出现集数,≥3 集)/ 按播客(meta.podcast)/ 随便看看。
 */
function rightRail(episodes) {
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
  const coRows = bigCo
    .slice(0, 8)
    .map(([c, k]) => `<a class="rr internal" href="./entities/${encodeURIComponent(c)}"><span>${esc(c)}</span><span>${k} 集</span></a>`)
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

  // 「随便看一集」:构建期确定性挑一集(不能用随机数,否则每次构建 diff 都变)
  const ids = episodes.map((e) => e.meta.id).sort();
  const pick = ids[Math.floor(ids.length / 2)];

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
    ${pick ? `<div class="blk">
      <div class="sh">随便看看</div>
      <a class="rr internal" href="./${esc(pick)}"><span>随便看一集</span><span></span></a>
    </div>` : ""}
  </div>`;
}

/** 手机端摊开区(🔒 #9 搜索与主题不降级;层级纠偏:排序弱于分类) */
function mobileHome(episodes, catsOf, vocabulary) {
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
    <div class="mhv"><span class="on">最新</span><span class="soon">最热</span></div>
    <div class="mhc"><a class="internal" href="./">全部<i>${episodes.length}</i></a>${chips}</div>
  </div>`;
}

/** 顶栏。「最热」= 必读页,归 C13c 才生成 → 本片先出不可点的占位,不留死链。
 *  右侧 .pd-acts 是空槽,由脚本把 Quartz 的搜索/深浅色/阅读模式搬进来(见 scriptBlock)。 */
const topBar = () => `<header class="pd-top"><div class="pd-topin">
    <a class="b" href="./">跨国深谈</a>
    <nav class="pd-nav"><a class="cur" href="./">最新</a><span class="soon" title="必读页归 C13c">最热</span></nav>
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

const scriptBlock = () => squashBlankLines(`<script>
(function(){
  // 把 Quartz 侧栏里的搜索/深浅色/阅读模式搬进顶栏,再由 custom.scss 藏掉空壳侧栏。
  // 搬节点而不是重写一套:这三个组件的行为(搜索索引、主题记忆)全在 Quartz 自己手里,
  // 复刻一份必然走样。🔒 #9 搜索不许降级 / 🔒 #2 亮暗双模式必须留。
  function adopt(){
    var acts=document.querySelector('.pd .pd-acts'); if(!acts) return;
    ['.search','.darkmode','.readermode'].forEach(function(sel){
      var el=document.querySelector('#quartz-body > .sidebar '+sel) || document.querySelector('.sidebar '+sel);
      if(el && el.parentElement!==acts) acts.appendChild(el);
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
  function init(){
    adopt();
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
