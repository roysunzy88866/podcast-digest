#!/usr/bin/env node
// C10/C11 · site/ 构建定制补丁(site/ 是 gitignore 构建区,每次从上游模板重建 →
// 一切定制必须收在这里,bootstrap-site.sh 与 pipeline.yml 在 plugin install 之后、build 之前调用)。
//
// C10 三刀(2026-07-24 用户拍板,需求共创/首页交互改版.md):
//   ① enablePopovers → false(全站关悬浮预览弹框)
//   ② pageTitle → 跨国深谈(🔒 设计稿拍板 #1;原为「英文播客中文精华」——那是说明书不是名字)
//   ③ bases-page 插件 → 关掉(原为「默认视图=cards」;C13a 移植后首页不出 base 代码块)
// C11 视觉改版(2026-07-25 用户拍板,需求共创/视觉调研-播客UI.md §七 · 方向 A 少数派风):
//   ④ 主题色 = 设计稿 token 亮暗双套(C13g:与 custom.scss 的 --B0..--B8 / --pd-accent 同源,
//      站上只留一套配色;原 7-25「暖红」那套已撤,见 docs/user-stories.md C13g)
//   ⑤ 默认浅色:Head 注入种子脚本(首访无记忆→light;用户切换仍记忆)
//   ⑥ 注入 custom.scss(普惠体标题/卡片色带/金句风格)+ 自托管普惠体子集字体
//
// 铁律:替换目标找不到 = 硬错退出(上游模板漂移必须被看见,绝不静默跳过)。
import { readFileSync, writeFileSync, copyFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const cfgPath = process.argv[2] || resolve(ROOT, "site/quartz.config.yaml");
const SITE = dirname(cfgPath);

let cfg = readFileSync(cfgPath, "utf8");

/** 在字符串 s 上精确替换一次;找不到硬错(防上游默认值变了补丁静默失效) */
function replaceOnce(s, from, to, why) {
  if (!s.includes(from)) {
    console.error(`✗ patch-site:找不到「${why}」的替换锚点 —— 上游模板可能变了,人工核对后再跑。`);
    process.exit(1);
  }
  console.log(`  ✔ ${why}`);
  return s.replace(from, to);
}
const patch = (from, to, why) => { cfg = replaceOnce(cfg, from, to, why); };

/** 补丁另一个文件(Head.tsx 等) */
function patchFile(path, from, to, why) {
  const s = readFileSync(path, "utf8");
  writeFileSync(path, replaceOnce(s, from, to, why));
}

// ── C10 三刀 ──
patch("enablePopovers: true", "enablePopovers: false", "全站关闭悬浮预览弹框");
// C13d-1:框架自带文案中文化(右栏「目录/反链/图谱」小标题、日期格式)。
// Quartz 自带 zh-CN 词条,不用自己翻也不用改 fork。
patch("locale: en-US", "locale: zh-CN", "界面语言 zh-CN(右栏小标题与日期中文化)");
patch("pageTitle: Quartz 5", "pageTitle: 跨国深谈", "站名(🔒 拍板 #1 跨国深谈)");
// C13a(2026-07-26 用户 🔒 拍板移植原型):首页不再出 base 代码块 → 这个上游默认插件
// 对本站已无用武之地,关掉它(不下架:它是 `create -t default` 自带的,锚点留着,
// 上游哪天挪走了照旧硬错让我们看见)。原先这里是把默认视图改成 cards。
patch(
  `  - source: github:quartz-community/bases-page
    enabled: true
    options: {}`,
  `  - source: github:quartz-community/bases-page
    enabled: false
    options: {}`,
  "关掉 bases-page 插件(C13a 首页改真卡片流,不再渲染 base 代码块)",
);

// ── C18 两刀(2026-08-09 用户 AskUserQuestion 拍板)──
// ① 全站彻底去掉知识图谱(节点关系图):用户「全站彻底去掉」。知识关联仍靠正文双链 + 「关联」栏,不受影响。
patch(
  `  - source: github:quartz-community/graph
    enabled: true`,
  `  - source: github:quartz-community/graph
    enabled: false`,
  "关掉知识图谱 graph(C18 用户拍板全站去关系图)",
);
// ② 整个默认页脚去掉:用户「整个默认页脚去掉」——不再显示 Created with Quartz + GitHub/Discord 外链。
//    MIT 许可允许(页面归属非强制,仓库 LICENSE 版权声明仍保留)。
patch(
  `  - source: github:quartz-community/footer
    enabled: true`,
  `  - source: github:quartz-community/footer
    enabled: false`,
  "关掉默认页脚 footer(C18 用户拍板去 Quartz 归属 + GitHub/Discord 外链)",
);

// ── C11 ④ 主题色:暖红亮暗双套(少数派暖调中性 + 红 accent)──
patch(
  `      lightMode:
        light: "#faf8f8"
        lightgray: "#e5e5e5"
        gray: "#b8b8b8"
        darkgray: "#4e4e4e"
        dark: "#2b2b2b"
        secondary: "#284b63"
        tertiary: "#84a59d"
        highlight: rgba(143, 159, 169, 0.15)
        textHighlight: "#fff23688"`,
  `      lightMode:
        light: "#fff"
        lightgray: "#e4e4e5"
        gray: "#acaeb3"
        darkgray: "#252525"
        dark: "#000"
        secondary: "#b8443c"
        tertiary: "#96362f"
        highlight: rgba(184, 68, 60, 0.10)
        textHighlight: "#fff2a8aa"`,
  "亮色主题(设计稿 token)",
);
patch(
  `      darkMode:
        light: "#161618"
        lightgray: "#393639"
        gray: "#646464"
        darkgray: "#d4d4d4"
        dark: "#ebebec"
        secondary: "#7b97aa"
        tertiary: "#84a59d"
        highlight: rgba(143, 159, 169, 0.15)
        textHighlight: "#b3aa0288"`,
  `      darkMode:
        light: "#1c1b1a"
        lightgray: "#3a3837"
        gray: "#77757a"
        darkgray: "#cfcdcb"
        dark: "#f2f0ef"
        secondary: "#e0776a"
        tertiary: "#eb9184"
        highlight: rgba(224, 119, 106, 0.14)
        textHighlight: "#b3aa0288"`,
  "深色主题(设计稿 token · 反推那套)",
);

writeFileSync(cfgPath, cfg);
console.log(`✅ patch-site:配置补丁已打进 ${cfgPath}`);

// ── C11 ⑤ 默认浅色:Head 首子节点注入种子脚本(在框架主题 prescript 之前跑)──
// 2026-08-16 用户「打开网站默认还是黑夜」:原脚本只管「从没存过 theme」的新访客,
// 老访客早年跟系统深色存下的 'dark' 会一直黑 → 加 pd-light-1 一次性迁移(所有人重置回白天一次,
// 之后手动切深色照旧记住)。顺带补 theme-color meta(手机状态栏时间/电量那条的底色,
// 此前从没告诉过浏览器 → iOS 直开显黑;随 saved-theme 切换同步)。
//
// 2026-08-17 用户「手机端启动的时候还是黑夜模式,没修掉」→ 挖出**真凶**(drift #64):
// 上面那套只在页面解析时跑一次,而 Quartz 的 prescript 注册了
//   matchMedia('(prefers-color-scheme: dark)').addEventListener('change', l)
// 且 l = t => { saved-theme = t.matches?'dark':'light'; localStorage.setItem('theme', 同值) }
// —— 它不只改属性、**还把 localStorage 一起写成系统色**。手机从后台切回/重新启动时这个
// change 事件正好触发 → 我们设的白天被吃掉并持久化成 dark。桌面浏览器里静态测永远测不到。
// 修法(不碰 Quartz 编译产物,bootstrap 每次 plugin install --latest 会覆盖 fork):
//   ① 只有**用户亲手点过深浅开关**才算显式选择(记 pd-theme-choice),否则一律白天;
//   ② MutationObserver 盯 saved-theme,任何与显式选择不符的改动(=系统监听器干的)当场revert
//      并把 localStorage 改回来。用户点开关时我们在捕获阶段先记下新值,故不会跟用户自己打架。
patchFile(
  resolve(SITE, "quartz/components/Head.tsx"),
  `    return (
      <head>
        <title>{title}</title>`,
  `    return (
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: \`try{var pdK='pd-theme-choice';if(!localStorage.getItem('pd-light-1')){localStorage.setItem('pd-light-1','1');localStorage.removeItem(pdK);localStorage.setItem('theme','light')}var pdM=document.createElement('meta');pdM.name='theme-color';var pdWant=function(){return localStorage.getItem(pdK)==='dark'?'dark':'light'};var pdEnforce=function(){var w=pdWant();if(document.documentElement.getAttribute('saved-theme')!==w){document.documentElement.setAttribute('saved-theme',w)}if(localStorage.getItem('theme')!==w){localStorage.setItem('theme',w)}pdM.content=w==='dark'?'#1c1b1a':'#fff'};document.addEventListener('click',function(e){var t=e.target&&e.target.closest&&e.target.closest('.darkmode');if(!t){return}localStorage.setItem(pdK,document.documentElement.getAttribute('saved-theme')==='dark'?'light':'dark')},true);pdEnforce();document.head.appendChild(pdM);new MutationObserver(pdEnforce).observe(document.documentElement,{attributes:true,attributeFilter:['saved-theme']})}catch(e){}\`,
          }}
        />
        <title>{title}</title>`,
  "默认浅色种子脚本(Head)",
);

// ── C22 · SEO:canonical + JSON-LD + og:type=article(集页)──
// 复用 Head 已算好的 socialUrl(本页 URL);jsonLd 由 render.mjs(集页)/ build-list.mjs(首页)按页写进 frontmatter。
// 锚点 = 上游原始 og:title/og:type 两行,上游若挪 replaceOnce 会硬报错。
patchFile(
  resolve(SITE, "quartz/components/Head.tsx"),
  `        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />`,
  `        <meta property="og:title" content={title} />
        <meta property="og:type" content={(fileData.frontmatter as any)?.type === "episode" ? "article" : "website"} />
        {/* C22 · SEO:canonical(复用本页 URL)*/}
        <link rel="canonical" href={socialUrl} />
        {/* C26 · feed 自发现:RSS 阅读器/Agent 粘站点 URL 即自动找到 feed(json 全文 / xml 播客)*/}
        <link rel="alternate" type="application/feed+json" title="跨国深谈 · 中文精华全文" href="/feed.json" />
        <link rel="alternate" type="application/rss+xml" title="英文播客中文精华 · 播客配音" href="/feed.xml" />
        {/* C22 · SEO:结构化数据(frontmatter.jsonLd 由 render/build-list 按页写好,YAML 字面块承接单行 JSON)*/}
        {(fileData.frontmatter as any)?.jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: String((fileData.frontmatter as any).jsonLd) }}
          />
        )}`,
  "SEO:canonical + JSON-LD + og:type=article(Head)",
);

// ── C11 ⑥ 注入自定义样式 + 自托管普惠体子集 ──
copyFileSync(resolve(ROOT, "assets/styles/custom.scss"), resolve(SITE, "quartz/styles/custom.scss"));
console.log("  ✔ custom.scss → site/quartz/styles/");

// ── PC 搜索历史(2026-08-15 用户拍板,参考少数派)──
// 叠加在 Quartz 原生搜索浮层上的「搜索历史 + 清除」层(🔒#9 不换检索引擎)。
// 全站 Head 内联一次即可:脚本用 document 事件委托,对 Quartz SPA 换页天然免疫。
// JSON.stringify 安全转义脚本源码,注入 <title> 之后(不与默认浅色种子脚本的锚点冲突)。
{
  const searchHistJs = readFileSync(resolve(ROOT, "assets/js/search-history.js"), "utf8");
  // C27 访问计数(2026-08-16 用户拍板):同通道全站注入,计数在所有页、展示只在有 .pd-pv 容器的首页
  const pvJs = readFileSync(resolve(ROOT, "assets/js/pv.js"), "utf8");
  patchFile(
    resolve(SITE, "quartz/components/Head.tsx"),
    `<title>{title}</title>`,
    `<title>{title}</title>
        <script dangerouslySetInnerHTML={{ __html: ${JSON.stringify(searchHistJs)} }} />
        <script dangerouslySetInnerHTML={{ __html: ${JSON.stringify(pvJs)} }} />`,
    "PC 搜索历史 + PV 计数脚本(Head 全站注入)",
  );
}
mkdirSync(resolve(SITE, "quartz/static/fonts"), { recursive: true });
copyFileSync(
  resolve(ROOT, "assets/fonts/AlibabaPuHuiTi-subset.woff2"),
  resolve(SITE, "quartz/static/fonts/AlibabaPuHuiTi-subset.woff2"),
);
console.log("  ✔ 普惠体子集 → site/quartz/static/fonts/");
console.log(`✅ patch-site:C11 视觉定制(主题色/默认浅色/样式/字体)已就位`);
