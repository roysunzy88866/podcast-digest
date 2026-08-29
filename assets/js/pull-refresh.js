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
 * ⑤ **touchmove 按需挂载**(2026-08-29 用户「独立 App 特别卡顿」):在 document 上常驻一个
 *    非被动(passive:false)touchmove,会让浏览器每次滚动都得先等 JS 跑完才能滚(怕你 preventDefault),
 *    整页失去线程滚动快路径 → standalone 下明显卡(这脚本只在 standalone 跑,正好对上「浏览器不卡、
 *    独立 App 卡」)。改成**只在「顶部起手」那一刻**才 addEventListener 挂上、手势结束/一往上滑就摘掉,
 *    其余时刻页面滚动一律走浏览器快路径,不再被拖慢。UX 不变(顶部下拉刷新照旧)。
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
  var startY = 0, dist = 0, tracking = false, refreshing = false, bar = null, moveOn = false;

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

  // ⑤ 非被动 touchmove 只在下拉手势期间存在:顶部起手时挂上,松手/一往上滑就摘掉。
  //    平时(读文章滚页)document 上没有非被动 touchmove → 浏览器线程滚动快路径不被剥夺。
  function onMove(e) {
    if (!tracking || refreshing || !e.touches || !e.touches.length) return;
    var dy = e.touches[0].clientY - startY;
    if (dy <= 0 || !atTop()) {
      // 往上滑 / 已经不在顶部 → 交还给页面正常滚动,并立刻摘掉非被动监听恢复快路径
      if (dist > 0) hide();
      tracking = false;
      dist = 0;
      detachMove();
      return;
    }
    // 只在「顶部往下拉」这一段拦下默认行为,免得和 iOS 的橡皮筋抢
    if (e.cancelable) e.preventDefault();
    dist = Math.min(MAX, dy * DAMP);
    show(dist, false);
  }
  function attachMove() {
    if (moveOn) return;
    doc.addEventListener("touchmove", onMove, { passive: false });
    moveOn = true;
  }
  function detachMove() {
    if (!moveOn) return;
    doc.removeEventListener("touchmove", onMove, { passive: false });
    moveOn = false;
  }

  doc.addEventListener(
    "touchstart",
    function (e) {
      if (refreshing || !atTop() || overlayOpen() || !e.touches || e.touches.length !== 1) {
        tracking = false;
        detachMove(); // 条件不满足就别留着非被动监听
        return;
      }
      startY = e.touches[0].clientY;
      dist = 0;
      tracking = true;
      attachMove(); // ← 唯一挂载点:仅「顶部起手」这一刻
    },
    { passive: true },
  );

  doc.addEventListener(
    "touchend",
    function () {
      detachMove();
      if (!tracking || refreshing) return;
      tracking = false;
      if (dist >= TRIGGER) doRefresh();
      else hide();
      dist = 0;
    },
    { passive: true },
  );

  doc.addEventListener(
    "touchcancel",
    function () {
      detachMove();
      tracking = false;
      if (dist > 0) hide();
      dist = 0;
    },
    { passive: true },
  );
})();
