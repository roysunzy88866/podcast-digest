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
import { SITE_NAME, SITE_DESC, websiteJsonLd } from "./seo.mjs"; // C22:首页 description + WebSite JSON-LD

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

/** 手机端一级页导航条(主题横滑药丸)。搜索不在这里:见下方 #2 注记。 */
export function mobileHome(episodes, catsOf, vocabulary) {
  const n = {};
  for (const c of vocabulary) n[c] = 0;
  for (const ep of episodes) for (const c of catsOf(ep)) if (c in n) n[c]++;
  const chips = Object.entries(n)
    .sort(byCountThenName)
    .map(([c, k]) => `<a class="internal" href="./tags/${encodeURIComponent(c)}">${esc(c)}<i>${k}</i></a>`)
    .join("");
  // 用户批注 2026-08-08 · 手机端:
  //   #2 搜索改右上角图标(覆盖 🔒 US-3「搜索=摊开输入框」,见 docs/adr/0019)→ 去掉这条摊开的大搜索框;
  //      改由顶栏 Quartz 原生搜索按钮承担(custom.scss 手机端把 .pd-acts .search-button 放成图标)。
  //   #5 去掉「最新/最热」切换(用户明文去掉必读=最热的主页逻辑)→ 删 .mhv,手机首页就按时间/最新排。
  return `<div class="pd-mhome">
    <div class="mhc"><a class="internal" href="./">全部<i>${episodes.length}</i></a>${chips}</div>
  </div>`;
}

/** 顶栏。「最热」= 必读页(C13c,build-mustread.mjs 每次构建自算)。
 *  active 决定哪个 nav 高亮(设计稿 must-read.html 顶栏是 最热 带 cur);
 *  右侧 .pd-acts 是空槽,由脚本把 Quartz 的搜索/深浅色/阅读模式搬进来(见 scriptBlock)。 */
// ⚠️ 必须拼成单行、不许有内部换行:首页/必读页 mtitle 为空时,原来那行会塌成「只有缩进
// 空格的空行」,Markdown 的原样 HTML 块遇空行即结束,之后缩进 4 空格的 <div class="pd-acts">
// 就被当成缩进代码块渲染成 <pre><code>…</code></pre>(线上顶栏站名旁真漏出过一段 div 代码)。
// 这一塌还连累了搬 Quartz 搜索/深浅色的 adopt()——.pd-acts 变成文本节点后 querySelector 取不到,
// 搜索浮层样式失效、深浅色搬不进去。scriptBlock 早用 squashBlankLines 焊过同一个坑,topBar 漏了。
export const topBar = (active = "home", mtitle = "") =>
  `<header class="pd-top"><div class="pd-topin">` +
  `<a class="b" href="./"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a>` +
  // 用户 2026-08-15:删掉 PC 端「最新/最热」入口(手机端本就 display:none)。active 参数保留签名不破坏调用方。
  (mtitle ? `<a class="pd-mtitle internal" href="./">←<span>${esc(mtitle)}</span></a>` : "") +
  `<div class="pd-acts"></div>` +
  `</div></header>`;

/**
 * 全部集 → 首页 markdown。空站 → 友好空状态(US-1a / C13a 场景4)。
 * @param episodes loadAllEpisodes() 的产物
 * @param opts.categoriesBySlug 大类映射(默认读 data/tag-taxonomy.json;测试可注入)
 * @param opts.hasCover (id)=>bool 封面文件是否真存在(默认查磁盘;测试可注入)
 */
export function renderList(episodes, opts = {}) {
  // C22:首页 frontmatter 补真 description(此前空 → Quartz 拿导航计数当简介)+ WebSite JSON-LD
  // description 用 JSON.stringify 生成 YAML 安全的引号标量(YAML 是 JSON 超集;防 SITE_DESC 未来含引号/冒号破 YAML,GLM 20260811-001[1])
  const fm = `---\ntitle: ${SITE_NAME}\ndescription: ${JSON.stringify(SITE_DESC)}\njsonLd: |\n  ${JSON.stringify(websiteJsonLd())}\n---\n`;
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
  // 用户 2026-08-09:「最新」按**入库时间**(内容真正被加进站的日期)分组/排序,而不是原视频/播客发布日。
  // 病根:演讲带的是 YouTube 原视频旧日期,处理好入库时按内容日排会埋在列表中间、顶部不动 → 用户以为「没新增」。
  // 入库日 = meta.added(run-pipeline 首次处理时钉一次;backfill-added.mjs 给存量集回填 git 首提日);
  // 缺 added 的回落 meta.date(过渡期自然收敛)。added 若是完整时间戳,只取前 10 位日期段。
  const dateKey = (meta) => {
    const raw = meta.added || meta.date;
    if (raw) {
      const d = String(raw).slice(0, 10);
      if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
    }
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
    // 2026-08-15 用户条3:搜索 + 深浅色都进顶栏(撤 C13f #3「深色进左栏」);
    // 顺序 分享/收藏/深色/搜索 由 custom.scss order 排(首页无分享/收藏,即 深色/搜索)。
    // 阅读模式仍不并入。搬节点不重写(🔒#2 亮暗行为归 Quartz)。
    ['.darkmode', '.search'].forEach(function(sel){ grab(sel,acts); });
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
  // 用户批注 2026-08-08 · 手机端 #2(覆盖 🔒 US-3,见 docs/adr/0019):手机搜索改右上角图标 →
  //   去掉摊开的 .mhs 输入框后,不再需要「把键入转发给 Quartz 搜索」的 wireSearch;
  //   顶栏 Quartz 原生搜索按钮点开就是它自带的全屏搜索模态(中文索引不降级)。桌面不受影响。
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
  // 手机端点卡片应「跳页面」而不是开新浏览器窗口(issue：桌面故意 target=_blank 开新标签,
  // 手机上开新窗既反直觉、回来后原页面又粘着 hover 态)。窄屏时把标题链接的 _blank/router-ignore
  // 摘掉 → 交回 Quartz SPA 路由做站内导航。只摘不加,桌面不受影响。
  function mobileLinks(){
    if(!matchMedia('(max-width:1023px)').matches) return;
    document.querySelectorAll('.pd .card a[target="_blank"]').forEach(function(a){
      a.removeAttribute('target'); a.removeAttribute('rel'); a.removeAttribute('data-router-ignore');
    });
  }
  // ── C24 无限滚动(软加载)· 首页 + 大类页共用 ──
  // 静态站无后端 → 卡全烤在 HTML(SEO 不降级),脚本只控「折叠 / 露出」。
  // 与大类页筛选分层:filter 用 inline style.display 隐藏被筛掉的、这里用 .io-fold 类折叠超批的,
  // 任一命中即不显示、互不覆盖(filter.apply 末尾回调 window.__ioRecompute 按筛选结果重新分批)。
  var IO_BATCH=24, ioState=null, ioLastShown=0, ioLastPath='';
  function ioContainer(){ return document.querySelector('.pd .list') || document.querySelector('.pd .pd-mid'); }
  function ioEligible(c){
    return [].slice.call(c.querySelectorAll('.card[data-slug]')).filter(function(el){ return el.style.display!=='none'; });
  }
  function ioSentinel(c){
    var s=c.querySelector('.io-sentinel');
    if(!s){ s=document.createElement('div'); s.className='io-sentinel'; }
    c.appendChild(s);
    return s;
  }
  function ioApply(){
    var c=ioContainer(); if(!c||!ioState) return;
    var cards=ioEligible(c);
    ioState.total=cards.length;
    cards.forEach(function(el,i){ el.classList.toggle('io-fold', i>=ioState.shown); });
    [].slice.call(c.querySelectorAll('.dateh')).forEach(function(h){
      var g=h.nextElementSibling, any=false;
      if(g && g.classList && g.classList.contains('grid')){
        any=[].slice.call(g.querySelectorAll('.card[data-slug]')).some(function(el){
          return !el.classList.contains('io-fold') && el.style.display!=='none';
        });
      }
      h.classList.toggle('io-fold', !any);
    });
    var s=ioSentinel(c);
    s.style.display = ioState.shown>=ioState.total ? 'none' : '';
    ioLastShown=ioState.shown; ioLastPath=location.pathname;
  }
  // 新建容器时的初始批次:还原键(手机从详情返回)> 同路径保留 > 默认一批。
  // 「同路径保留」治双重 init:一次页面加载里 init 被调两次(脚本末尾直调 + Quartz 'nav'),
  // 第二次拿到的常是 Quartz 换页后的**新** .list/.pd-mid 节点(ioState.c 守卫失效)——
  // 靠 ioLastShown 跨这两次存活,第二次 setup 沿用第一次算出的批次,不打回第一批、不重复消费还原键。
  function ioInitialShown(){
    try{
      var raw=sessionStorage.getItem('ioret:'+location.pathname);
      if(raw){
        sessionStorage.removeItem('ioret:'+location.pathname);
        var st=JSON.parse(raw);
        if(st && st.shown) return { shown:Math.max(IO_BATCH, st.shown|0), y:st.y||0 };
      }
    }catch(e){}
    if(ioLastPath===location.pathname && ioLastShown>IO_BATCH) return { shown:ioLastShown, y:null };
    return { shown:IO_BATCH, y:null };
  }
  function ioSetup(c){
    if(ioState && ioState.obs) ioState.obs.disconnect();
    var s=ioSentinel(c), obs=null;
    try{
      obs=new IntersectionObserver(function(es){
        es.forEach(function(e){
          if(e.isIntersecting && ioState && ioState.shown<ioState.total){ ioState.shown+=IO_BATCH; ioApply(); }
        });
      }, { rootMargin:'400px 0px' });
      obs.observe(s);
    }catch(e){}
    var it=ioInitialShown();
    ioState={ c:c, shown:it.shown, total:0, obs:obs, sentinel:s };
    return it.y;
  }
  function ioRecompute(reset){
    var c=ioContainer(); if(!c) return;
    var y=null;
    if(!ioState || ioState.c!==c) y=ioSetup(c);
    if(reset) ioState.shown=IO_BATCH;
    ioApply();
    // 大类页的手机返回还原走的是 filter → __ioRecompute(false) → ioSetup 这条路(键在这里被消费、
    // 返回滚动位 y)。若这里不还原滚动,大类页返回就只还批次、不还滚动位。用户操作(reset)不还原滚动。
    if(y!=null && !reset){ var yy=y; requestAnimationFrame(function(){ window.scrollTo(0,yy); }); }
  }
  // 手机端(同标签 SPA)离页存位、返回还原一次;PC 点详情开新标签、原页不动,天然不需
  function ioSaveReturn(){
    try{
      if(!ioState || !matchMedia('(max-width:1023px)').matches) return;
      sessionStorage.setItem('ioret:'+location.pathname, JSON.stringify({ shown:ioState.shown, y:window.scrollY||window.pageYOffset||0 }));
    }catch(e){}
  }
  function ioInit(){
    var c=ioContainer(); if(!c) return;
    if(!('IntersectionObserver' in window)) return;
    // 同一次加载里 init 会被调两次(脚本末尾直调 + Quartz 'nav');若是同一节点直接重算即可。
    // 换了节点(SPA 导到新页,或 Quartz 换页重建)才 fresh setup —— 初始批次由 ioInitialShown 决定
    // (还原键 / 同路径保留 / 默认),y!=null 时还原滚动位。
    if(ioState && ioState.c===c){ ioApply(); return; }
    var y=ioSetup(c);
    ioApply();
    if(y!=null){ var yy=y; requestAnimationFrame(function(){ window.scrollTo(0,yy); }); }
  }
  window.__ioRecompute=ioRecompute;
  function init(){
    adopt();
    dateh();
    logos();
    mobileLinks();
    ioInit();
    var root=document.querySelector('.pd'); if(!root||root.__epInit) return; root.__epInit=1;
    // 已读压暗(客户端 localStorage;键沿用 pd-read,老已读史不丢)
    var KEY='pd-read', read;
    try{ read=new Set(JSON.parse(localStorage.getItem(KEY)||'[]')); }catch(e){ read=new Set(); }
    [].slice.call(root.querySelectorAll('.card[data-slug]')).forEach(function(c){
      var slug=c.dataset.slug; if(!slug) return;
      if(read.has(slug)) c.classList.add('ep-read');
      c.addEventListener('click', function(){ ioSaveReturn(); read.add(slug); try{localStorage.setItem(KEY, JSON.stringify([...read]));}catch(e){} });
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
