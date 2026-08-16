/* C27 · 访问计数客户端(2026-08-16 用户拍板:真实 PV,不加工)。
   每次页面浏览 POST /hit 计一次(Quartz 每页含 SPA 换页都发 'nav',首发+换页各 1 = PV 口径);
   首页左栏「关于本站」下方若有 .pd-pv 容器,用 /hit 响应顺手填「累计访问 N · 今日 N」。
   计数服务不可达 → 全程静默(容器保持 hidden),站点任何功能零影响(用户验收标准 3)。 */
(function () {
  var API = "https://pd-pv.roysunzy.workers.dev";
  var navSeen = false;
  function fill(d) {
    if (!d || typeof d.total !== "number") return;
    var el = document.querySelector(".pd-pv");
    if (!el) return;
    el.textContent = "累计访问 " + d.total.toLocaleString() + " · 今日 " + d.today.toLocaleString();
    el.hidden = false;
  }
  function hit() {
    try {
      fetch(API + "/hit", { method: "POST", keepalive: true })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(fill)
        .catch(function () {});
    } catch (e) {}
  }
  document.addEventListener("nav", function () { navSeen = true; hit(); });
  // 兜底:万一某页没触发 'nav'(SPA 脚本缺席),迟到补记一次;有 nav 就不重复
  setTimeout(function () { if (!navSeen) hit(); }, 2500);
})();
