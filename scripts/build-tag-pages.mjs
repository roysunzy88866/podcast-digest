#!/usr/bin/env node
// C13b · 大类页生成:8 个大类各一页,带三轴筛选 + 排序 → site/content/tags/<大类>.md
//
// 设计稿 = `设计稿/cat-*.html` + `设计稿/filter.js`。
// **筛选逻辑照搬 filter.js**(它已经把三轴单选/跨轴取交集/条数重算/排序稳定都写对了),
// 本文件只负责把真数据摆成它要的形状。样式在 assets/styles/custom.scss。
//
// 为什么落在 `tags/<大类>` 而不是新造路径:
//   `tag-page` 插件的 generate() 里有 existingTagSlugs —— 已经存在同 slug 的真内容文件时
//   它就不再产虚拟页(见 site/.quartz/plugins/tag-page/src/pageType.ts)。而该页型的
//   TagContent 组件会渲染页面自身内容(它自带的列表在下面,custom.scss 里已藏掉)。
//   → 卡片 chip / 左栏 / 手机横滑条现有的 ./tags/<大类> 链接一个都不用改。
//
// 三轴(设计稿 data-axis):cat=同时属于另一个大类 / pod=来自哪个播客 / year=时间(按年)
// 排序(设计稿 .sortbar):最新 / 最早 / 最长
import { writeFileSync, mkdirSync, realpathSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadAllEpisodes } from "./build-entities.mjs";
import { displayTitle } from "./render.mjs";
import { card, categoriesOf, taxonomyCategories, esc, coverOnDisk, leftRail, topBar, rightRail, scriptBlock } from "./build-list.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const yearOf = (meta) => String(meta.date ?? "").slice(0, 4);

/** 某条轴上每个取值的条数(不含本轴的筛选,与 filter.js 的 match(r, axis) 同口径) */
function axisCounts(episodes, catsOf, axis, self) {
  const n = new Map();
  const bump = (v) => v && n.set(v, (n.get(v) ?? 0) + 1);
  for (const ep of episodes) {
    if (axis === "cat") for (const c of catsOf(ep)) { if (c !== self) bump(c); }
    else if (axis === "pod") bump(ep.meta.podcast);
    else bump(yearOf(ep.meta));
  }
  return [...n.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]), "zh"));
}

const axisRow = (label, axis, counts, suffix = "") =>
  counts.length
    ? `<div class="frow"><span class="k">${label}</span>${counts
        .map(
          ([v, k]) =>
            `<button class="fx" data-axis="${axis}" data-val="${esc(v)}">${esc(v)}${suffix} <b>${k}</b></button>`,
        )
        .join("")}</div>`
    : "";

/**
 * 一个大类页。
 * @param cat 大类名
 * @param episodes 属于该大类的集(已筛)
 * @param opts.allEpisodes 全库集(左栏条数用;缺省退回本大类的集)
 */
export function renderTagPage(cat, episodes, opts = {}) {
  const catsOf = opts.categoriesOf ?? categoriesOf;
  const hasCover = opts.hasCover ?? coverOnDisk;
  // 左栏与首页同一份实现(设计稿 .shell.two = 左导航 + 加宽中栏),当前大类高亮
  const rail = leftRail(opts.allEpisodes ?? episodes, catsOf, taxonomyCategories(), cat);
  const fm = `---\ntitle: ${JSON.stringify(cat)}\n---\n`;

  if (!episodes.length) {
    return `${fm}
<div class="pd">
  ${topBar("cat")}
  <div class="pd-shell">
  ${rail}
  <div class="pd-mid">
    <div class="hero"><h1><span class="dot" data-cat="${esc(cat)}"></span>${esc(cat)}</h1></div>
    <div class="ep-empty-site">这个主题还没有集。</div>
  </div>
  ${rightRail(opts.allEpisodes ?? episodes)}
  </div>
</div>
${scriptBlock()}
`;
  }

  // 每行带三轴要用的 data-*(cat 可多值,用 | 分隔,与 filter.js 的 valOf 一致)
  const rows = episodes
    .slice()
    .sort((a, b) => (a.meta.date < b.meta.date ? 1 : a.meta.date > b.meta.date ? -1 : 0))
    .map((ep) => {
      const cats = catsOf(ep);
      const attrs =
        ` data-cats="${esc(cats.join("|"))}"` +
        ` data-pod="${esc(ep.meta.podcast ?? "")}"` +
        ` data-year="${esc(yearOf(ep.meta))}"` +
        ` data-date="${esc(ep.meta.date ?? "")}"` +
        ` data-dur="${Number(ep.meta.duration_sec) || 0}"`;
      return card(ep, cats, hasCover, attrs);
    })
    .join("\n");

  const axes = [
    axisRow("同时属于", "cat", axisCounts(episodes, catsOf, "cat", cat)),
    axisRow("来自", "pod", axisCounts(episodes, catsOf, "pod")),
    axisRow("时间", "year", axisCounts(episodes, catsOf, "year"), " 年"),
  ]
    .filter(Boolean)
    .join("\n  ");

  return `${fm}
<div class="pd">
  ${topBar("cat")}
  <div class="pd-shell">
  ${rail}
  <div class="pd-mid">
    <div class="hero"><h1><span class="dot" data-cat="${esc(cat)}"></span>${esc(cat)} <span class="cnt">${episodes.length} 集</span></h1></div>
  ${axes}
    <div class="sortbar">
      <a class="so on" href="#" data-sort="new">最新</a>
      <a class="so" href="#" data-sort="old">最早</a>
      <a class="so" href="#" data-sort="long">最长</a>
      <span class="sep">|</span>
      <span id="fstate"></span>
    </div>
    <div class="list">
${rows}
    </div>
  </div>
  ${rightRail(opts.allEpisodes ?? episodes)}
  </div>
</div>
${filterScript()}
${scriptBlock()}
`;
}

/**
 * ⚠️⚠️ 内联脚本里**一个空行都不能有**(GLM 20260726-024[1] 提的机制,实测被它咬中)。
 * Markdown 的原样 HTML 块遇到空行就结束 —— 空行之后那些 4 空格缩进的行会被当成
 * 「缩进代码块」渲染成 <pre><code>,剩下的变 <p>,于是 <script> 里的 JS 不再是脚本内容,
 * 整段静默失效(现象:点筛选屏幕毫无反应,控制台也不报错)。
 * 首页那个脚本能活纯属侥幸 —— 它恰好没有空行。这里用 squashBlankLines 把它焊死。
 */
const squashBlankLines = (s) => s.replace(/\n\s*\n/g, "\n");

// 三轴筛选 + 排序。逐条对应设计稿 filter.js —— 那份已经把这几件难的做对了:
//   ① 每条轴单选、再点一下取消 ② 跨轴取交集 ③ 算某条轴的条数时**跳过自己那条轴**
//   ④ 0 条置灰但不隐藏(让人看得见「这条路走不通」)⑤ 排序比较函数相等必须返回 0
const filterScript = () => squashBlankLines(`<script>
(function(){
  // ⚠️ 不缓存 DOM 节点、不把标记写在元素上。
  // 踩过的坑:内联脚本在解析时就跑,但框架随后会**水合并重建这段 DOM** ——
  // 写在旧节点上的初始化标记连同闭包里捕获的那批 .card 一起变成脱离文档的孤儿,
  // 于是「点了筛选屏幕不动」(实测:13 张卡怎么点都还是 13)。
  // 所以:状态只放闭包变量,节点每次现查;click 用文档级委托,只绑一次。
  var pick={cat:null,pod:null,year:null}, sort='new';
  var listOf=function(){ return document.querySelector('.pd .list'); };
  var rowsOf=function(){
    var l=listOf(); return l?[].slice.call(l.querySelectorAll('.card[data-slug]')):[];
  };

  function init(){
    function valOf(r,axis){
      if(axis==='cat') return (r.dataset.cats||'').split('|');
      if(axis==='pod') return [r.dataset.pod||''];
      return [r.dataset.year||''];
    }
    // 只按「除 axis 之外的其它轴」过滤 —— 用来算某条轴各项的剩余条数
    function match(r,skip){
      return ['cat','pod','year'].every(function(a){
        return a===skip || !pick[a] || valOf(r,a).indexOf(pick[a])>=0;
      });
    }
    function apply(){
      var rows=rowsOf(), list=listOf();
      if(!list||!rows.length) return;
      var TOTAL=rows.length, shown=0;
      rows.forEach(function(r){
        var ok=match(r,null);
        r.style.display=ok?'':'none';
        if(ok) shown++;
      });
      [].slice.call(document.querySelectorAll('.pd .fx[data-axis]')).forEach(function(b){
        var axis=b.dataset.axis, val=b.dataset.val;
        var n=rows.filter(function(r){ return match(r,axis) && valOf(r,axis).indexOf(val)>=0; }).length;
        var c=b.querySelector('b'); if(c) c.textContent=n;
        b.classList.toggle('on', pick[axis]===val);
        b.classList.toggle('zero', n===0 && pick[axis]!==val);
      });
      // 排序:直接搬 DOM 顺序。相等必须返回 0(同一天多集是常态)——
      // 返回 ±1 等于同时断言 a>b 和 b>a,比较函数不自洽,反复排序顺序会漂。
      var vis=rows.filter(function(r){ return r.style.display!=='none'; });
      vis.sort(function(a,b){
        var d = sort==='long'
          ? (+b.dataset.dur||0)-(+a.dataset.dur||0)
          : (sort==='old'?1:-1)*((a.dataset.date||'')<(b.dataset.date||'')?-1:(a.dataset.date||'')>(b.dataset.date||'')?1:0);
        if(d) return d;
        var ta=(a.querySelector('.t')||{}).textContent||'', tb=(b.querySelector('.t')||{}).textContent||'';
        return ta<tb?-1:ta>tb?1:0;
      });
      vis.forEach(function(r){ list.appendChild(r); });

      [].slice.call(document.querySelectorAll('.pd .sortbar .so')).forEach(function(a){
        a.classList.toggle('on', a.dataset.sort===sort);
      });
      // 状态行:用户要求不出现「排序」「未筛选」这两个词
      var on=Object.keys(pick).filter(function(k){ return pick[k]; });
      var st=document.getElementById('fstate');
      if(st) st.innerHTML = on.length
        ? '筛出 <b>'+shown+'</b> 集 / 共 '+TOTAL+' 集 <button class="clr" id="fclr">清除</button>'
        : '<b>'+TOTAL+'</b> 集';
      var clr=document.getElementById('fclr');
      if(clr) clr.onclick=function(){ pick={cat:null,pod:null,year:null}; apply(); };
    }

    apply();
  }

  // 文档级委托:只绑一次(window 上打标),绑在 document 上不受水合重建影响
  if(!window.__pdFltBound){
    window.__pdFltBound=1;
    document.addEventListener('click', function(e){
      if(!listOf()) return;                        // 不在大类页就别管
      var b=e.target.closest('.pd .fx[data-axis]');
      if(b){
        e.preventDefault();
        if(b.classList.contains('zero')) return;   // 0 条的点不动
        var a=b.dataset.axis;
        pick[a]=(pick[a]===b.dataset.val)?null:b.dataset.val;   // 再点一下取消
        return init();
      }
      var s=e.target.closest('.pd .sortbar .so');
      if(s){ e.preventDefault(); sort=s.dataset.sort; init(); }
    });
  }
  // Quartz 是 SPA:换页后内联脚本不重跑 → 挂 nav(每次导航含首载都会触发)
  document.addEventListener('nav', init);
  init();
})();
</script>`);

// ── CLI:node scripts/build-tag-pages.mjs [--out <dir>] ──(默认写 site/content/tags/)──
const isMain = (() => {
  try {
    return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
})();

if (isMain) {
  const outIdx = process.argv.indexOf("--out");
  const outDir = outIdx >= 0 && process.argv[outIdx + 1] ? process.argv[outIdx + 1] : join(ROOT, "site/content/tags");
  const episodes = loadAllEpisodes(join(ROOT, "data/episodes"));
  mkdirSync(outDir, { recursive: true });
  let n = 0;
  for (const cat of taxonomyCategories()) {
    const mine = episodes.filter((ep) => categoriesOf(ep).includes(cat));
    writeFileSync(join(outDir, `${cat}.md`), renderTagPage(cat, mine, { allEpisodes: episodes }));
    n++;
    console.log(`   ${cat}:${mine.length} 集`);
  }
  console.log(`✅ 大类页(三轴筛选)→ ${outDir}(${n} 个大类)`);
}
