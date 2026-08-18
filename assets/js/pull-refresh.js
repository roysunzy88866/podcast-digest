/* C29 · 下拉刷新(只给「从主屏启动的应用模式」)
 *
 * 由来:用户 2026-08-18「我是添加了 iPhone 的 APP 应用,所以不是在浏览器里打开的,
 * 浏览器里是有下拉刷新的」—— iOS 从主屏启动的 web app 没有地址栏、没有刷新按钮,
 * **系统的下拉刷新在这个模式下也不存在**,于是想看新内容只能杀掉进程重开。
 *
 * 设计要点(为什么这么写):
 * ① **只在应用模式启用**:Safari 里系统自带下拉刷新,我们一介入就是两套手势打架 ——
 *    索性只在 standalone 下接管,浏览器里一行都不跑(gate 见 isStandalone)。
 * ② **刷新 = 整页重载**:站是静态的,HTML 的缓存头是 max-age=0 + must-revalidate
 *    (本机 curl 实证),所以普通重载就会跟服务器核一遍、拿到新集,不需要任何缓存绕过花招。
 * ③ **必须清掉「返回还原位置」的记忆**:首页/大类页有无限滚动,离页时会把
 *    `ioret:<路径>`(批次 + 滚动位)存进 sessionStorage,回来时还原。而下拉刷新的语义是
 *    「回顶部看最新」,不清掉就会刷完还原到半路,看着像没刷新。
 * ④ 只在**滚到最顶** + **没有弹层**时接管,且只拦「向下拉」那一段,别的手势一概不碰。
 */
(function () {
  var W = typeof window !== "undefined" ? window : null;
  if (!W || !W.document) return;

  /** 应用模式判定:iOS 老口径 navigator.standalone;标准口径 display-mode 媒体查询 */
  function isStandalone() {
    try {
      if (W.navigator && W.navigator.standalone === true) return true;
      return !!(W.matchMedia && W.matchMedia("(display-mode: standalone)").matches);
    } catch (e) {
      return false;
    }
  }
  if (!isStandalone()) return; // ← 浏览器里到此为止,系统自带的照用

  var doc = W.document;
  var TRIGGER = 70; // 拉过这么远松手才刷新
  var MAX = 120; // 最多跟到这么远(再拉也不动,给个到头的手感)
  var DAMP = 0.5; // 阻尼:手指走 2px 指示器走 1px,像原生那样越拉越沉
  var startY = 0, dist = 0, tracking = false, refreshing = false, bar = null;

  function scrollTop() {
    return W.scrollY || W.pageYOffset || (doc.documentElement && doc.documentElement.scrollTop) || 0;
  }
  function atTop() {
    return scrollTop() <= 0;
  }
  /** 弹层(我的收藏/订阅/搜索)开着时不接管 —— 那里面有自己的滚动 */
  function overlayOpen() {
    return !!doc.querySelector(".pd-favov, .pd-subov, .search-container.active");
  }
  function el() {
    if (bar && bar.parentNode) return bar;
    bar = doc.createElement("div");
    bar.className = "pd-ptr";
    bar.setAttribute("aria-hidden", "true");
    bar.innerHTML = '<i class="pd-ptr-s"></i>';
    doc.body.appendChild(bar);
    return bar;
  }
  function show(d, spinning) {
    var b = el();
    b.style.transform = "translateY(" + d + "px)";
    b.style.opacity = String(Math.min(1, d / TRIGGER));
    if (b.classList) {
      b.classList.toggle("pd-ptr-go", d >= TRIGGER);
      b.classList.toggle("pd-ptr-run", !!spinning);
    }
  }
  function hide() {
    if (!bar) return;
    bar.style.transition = "transform .22s ease, opacity .22s ease";
    bar.style.transform = "translateY(0)";
    bar.style.opacity = "0";
    if (bar.classList) bar.classList.remove("pd-ptr-go", "pd-ptr-run");
    W.setTimeout(function () {
      if (bar) bar.style.transition = "";
    }, 240);
  }
  function doRefresh() {
    refreshing = true;
    show(TRIGGER, true);
    // ③ 刷新 = 回顶部看最新 → 清掉无限滚动的「返回还原」记忆,否则刷完还原到半路
    try {
      sessionStorage.removeItem("ioret:" + location.pathname);
    } catch (e) {}
    W.setTimeout(function () {
      location.reload();
    }, 160); // 让转圈露一下脸,不然刷太快像没反应
  }

  doc.addEventListener(
    "touchstart",
    function (e) {
      if (refreshing || !atTop() || overlayOpen() || !e.touches || e.touches.length !== 1) {
        tracking = false;
        return;
      }
      startY = e.touches[0].clientY;
      dist = 0;
      tracking = true;
    },
    { passive: true },
  );

  doc.addEventListener(
    "touchmove",
    function (e) {
      if (!tracking || refreshing) return;
      var dy = e.touches[0].clientY - startY;
      if (dy <= 0 || !atTop()) {
        // 往上滑 / 已经不在顶部 → 交还给页面正常滚动
        if (dist > 0) hide();
        tracking = false;
        dist = 0;
        return;
      }
      // 只在「顶部往下拉」这一段拦下默认行为,免得和 iOS 的橡皮筋抢
      if (e.cancelable) e.preventDefault();
      dist = Math.min(MAX, dy * DAMP);
      show(dist, false);
    },
    { passive: false },
  );

  doc.addEventListener(
    "touchend",
    function () {
      if (!tracking || refreshing) return;
      tracking = false;
      if (dist >= TRIGGER) doRefresh();
      else hide();
      dist = 0;
    },
    { passive: true },
  );
})();
