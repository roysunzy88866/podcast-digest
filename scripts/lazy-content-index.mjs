// 搜索索引「按需加载」(2026-08-29 用户:「点击进入详情页特别卡,要等 1-5 秒」)。
//
// 真因(实测):Quartz 核心 renderPage.tsx 往**每个页面** <head> 内联一行
//   const fetchData = fetch("/static/contentIndex.json").then(data => data.json())
// 这是**立即执行**的:一打开页面就开始下 contentIndex.json —— 线上实测 **gzip 2.24MB / 解压 7.8MB**
// (详情页 HTML 自己才 33KB,相差 67 倍),下完还要在主线程 JSON.parse 7.8MB(手机上是秒级卡死)。
// 而实测**详情页里 `fetchData` 只出现 1 次 = 声明它自己,没有任何代码消费它**(搜索浮层的代码按需才加载)。
// 于是每次进页面都白下 2.24MB + 白解析 7.8MB,抢带宽 + 卡主线程 → 点进详情页要等 1-5 秒。
//
// 修法:把它换成**惰性 thenable** —— 谁真的 await/then 它(打开搜索时)才发起请求,并把结果缓存;
// 没人用就一个字节都不下。对消费方完全透明(await / .then / .catch / .finally / Promise.all 都照常),
// 故搜索功能不变,只是索引改成「打开搜索那一刻才下」。
//
// 为什么单独成模块:patch-site.mjs 一 import 就会执行打补丁(有副作用),测试没法安全 import;
// 把「锚点串 + 替换串 + 可运行脚本」抽出来,patch-site 与测试共用同一真相,测的就是线上真跑的那段。

/** 生成内联到页面的惰性取数脚本。url 传 '${contentIndexPath}' 时即 renderPage.tsx 模板串里的原样插值。
 *  失败不缓存(GLM 067[3]):原版每次整页加载都会重新 fetch,刷新即重试;惰性版若把失败也缓存住,
 *  同一页内再打开搜索就永远拿不到索引。故 catch 里把缓存清空再抛,下次使用可重试。 */
export const lazyFetchScript = (url) =>
  `const fetchData = (() => { let p = null; const g = () => (p = p || fetch("${url}").then((d) => d.json()).catch((e) => { p = null; throw e; })); return { then: (a, b) => g().then(a, b), catch: (a) => g().catch(a), finally: (a) => g().finally(a) }; })()`;

/** 上游 renderPage.tsx 里的原始行(锚点)。找不到 = patch-site 硬错,不静默漂移。 */
export const EAGER_LINE =
  'const contentIndexScript = `const fetchData = fetch("${contentIndexPath}").then(data => data.json())`';

/** 替换成的惰性版本(仍是 renderPage.tsx 的模板串,${contentIndexPath} 保持由上游插值)。 */
export const LAZY_LINE = "const contentIndexScript = `" + lazyFetchScript("${contentIndexPath}") + "`";
