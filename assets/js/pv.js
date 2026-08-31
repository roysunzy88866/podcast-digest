/* C27 · 访问计数客户端(2026-08-16 用户拍板:真实 PV,不加工)。
   口径 = 每次页面浏览计 1 次(首屏 + 每次 SPA 换页各 1)。
   2026-08-31 修「进页面即报」:旧版要等 Quartz 'nav'(<body> 末尾才派发)或 2.5s 兜底才上报,
   从分享链接点进来的手机读者常在这之前就滑走 → 整批漏数(实证:服务器端历史 PV 远多于此计数器)。
   现在:① 脚本一执行(本文件内联在 <head>,尽早)就 POST /hit 计一次;
        ② Quartz 初次加载也补派一次 'nav'——那一发与 ① 同页,不再计数,只 GET /stats 把数字显示出来
           (此刻 DOM 已就绪、.pd-pv 存在);之后每次软换页才各 POST /hit 一次(维持每页 1 次口径);
        ③ bfcache(浏览器返回/前进恢复):脚本不重跑、'nav' 不再派 → 用 pageshow(persisted)补计一次。
   首页左栏「关于本站」下方若有 .pd-pv 容器则填「累计访问 N · 今日 N」;服务不可达 → 全程静默、站点零影响。 */
(function () {
  var API = "https://pd-pv.roysunzy.workers.dev";
  // 「今日」展示倍数(用户 2026-08-17 要求 ×9「好看一点」,2026-08-31 重申保留)。
  // 只作用于展示:接口回传的 today/counted/baseline 全是真实数,curl .../stats 永远看到原始值。
  var TODAY_DISPLAY_X = 9;
  function fill(d) {
    // today 也必须校验类型:乘法会把缺字段从「静默不显示」变成「今日 NaN」露在页面上(GLM 011[1])
    if (!d || typeof d.total !== "number" || typeof d.today !== "number") return;
    var el = document.querySelector(".pd-pv");
    if (!el) return;
    var today = d.today * TODAY_DISPLAY_X;
    el.textContent = "累计访问 " + d.total.toLocaleString() + " · 今日 " + today.toLocaleString();
    el.hidden = false;
  }
  // POST /hit:计一次并顺手回填显示。keepalive 让「刚发出就离页」的秒退请求仍能送达。
  function hit() {
    try {
      fetch(API + "/hit", { method: "POST", keepalive: true })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(fill)
        .catch(function () {});
    } catch (e) {}
  }
  // GET /stats:只读,只回填显示、不计数(初次加载 DOM 就绪后用它显示数字,避免与 ① 重复计数)。
  function show() {
    try {
      fetch(API + "/stats")
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(fill)
        .catch(function () {});
    } catch (e) {}
  }
  // ① 一进页面立刻计一次(尽早发,捞回 beacon 还没发就滑走的秒退读者)。
  hit();
  // ② 初次 'nav' 与 ① 同页 → 不再计数、只显示;之后每次软换页各计一次。
  var firstNav = true;
  document.addEventListener("nav", function () {
    if (firstNav) {
      firstNav = false;
      show();
      return;
    }
    hit();
  });
  // ③ bfcache 恢复才计:普通加载 persisted=false(① 已计过,不重复),返回/前进恢复 persisted=true 补一次。
  window.addEventListener("pageshow", function (e) {
    if (e && e.persisted) hit();
  });
})();
