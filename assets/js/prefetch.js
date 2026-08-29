/* 按下即预取(2026-08-29 用户:「每次进入详情页/主页都会卡一下、白一下」的治本第二刀)
 *
 * 手指按下到真正跳转之间有 ~100-300ms(touchstart → touchend → click → SPA 取页)。
 * 这段时间白白空着,不如提前把下一页的 HTML 取回来暖进浏览器缓存,点下去就少等一截。
 *
 * 设计要点(为什么这么写):
 * ① **监听器必须 passive**:同一天刚修过「非被动 touchmove 拖慢整页滚动」的坑(pull-refresh.js),
 *    这里只读不拦,一律 {passive:true},绝不重蹈覆辙。
 * ② **用 fetch 不用 <link rel=prefetch>**:Safari 对 rel=prefetch 支持不可靠,fetch 到处都能用,
 *    同样把响应暖进 HTTP 缓存。**诚实的预期**:站点 HTML 是 max-age=0 + must-revalidate,
 *    所以真跳转时浏览器仍会回源核对一次(304),省下的是正文传输那一段、不是全部往返;
 *    这一刀的大头收益在「关掉 Explorer 的 2.24MB」那边,这里是锦上添花。
 * ③ **限量 + 去重**:首页整屏都是链接,手指按着滚动也会触发 touchstart → 用 seen 去重、
 *    每页最多 MAX 条,避免在流量上乱花;SPA 换页(nav 事件)后额度重置。
 * ④ 只预取**同源、非当前页、普通**链接;下载链接/新窗口/带 target 的一律不碰。
 */
(function () {
  var W = typeof window !== "undefined" ? window : null;
  if (!W || !W.document || typeof W.fetch !== "function") return;

  var doc = W.document;
  var MAX = 8; // 每页预取上限(HTML 压缩后约 33KB/页,8 条 ≈ 260KB 封顶)
  var seen = Object.create(null); // URL → 1,已取过不再取(跨换页保留,避免来回横跳重复取)
  var used = 0;

  /** 取出这个链接可预取的绝对地址;不该预取则返回 null */
  function targetOf(a) {
    if (!a || !a.getAttribute || !a.getAttribute("href")) return null;
    if (a.hasAttribute("download") || (a.target && a.target !== "_self")) return null;
    try {
      var u = new URL(a.href, W.location.href);
      if (u.origin !== W.location.origin) return null; // 站外不碰
      // 去掉 #锚点:同一页不同锚点是同一份 HTML
      var href = u.origin + u.pathname + u.search;
      // 当前页不必取(含纯锚点跳转)。⚠️ 必须连 ?query 一起比(GLM 071[1]):
      // 只比 pathname 的话,「同路径不同参数」的站内链接会被误判成当前页而白白不预取。
      var here = W.location.origin + W.location.pathname + (W.location.search || "");
      if (href === here) return null;
      return href;
    } catch (e) {
      return null;
    }
  }

  function warm(href) {
    if (!href || seen[href] || used >= MAX) return;
    seen[href] = 1;
    used++;
    try {
      // credentials 同源即可;失败一律吞掉 —— 预取是纯优化,不该产生任何用户可见后果。
      // ⚠️ 失败后**刻意不重试**(GLM 071[2] 提到,这里明写而非留白):预取失败的唯一后果是
      // 「这一页没提前暖上」,用户点进去照常正常加载;为它加重试/退避只会把纯优化路径写复杂。
      W.fetch(href, { credentials: "same-origin" }).catch(function () {});
    } catch (e) {
      /* 无害 */
    }
  }

  function onDown(e) {
    var t = e && e.target;
    if (!t || !t.closest) return;
    warm(targetOf(t.closest("a[href]")));
  }

  doc.addEventListener("touchstart", onDown, { passive: true });
  doc.addEventListener("mousedown", onDown, { passive: true }); // 桌面端顺带受益
  // SPA 换页后额度重置(seen 保留:同一 URL 没必要取第二次)
  doc.addEventListener("nav", function () {
    used = 0;
  });
})();
