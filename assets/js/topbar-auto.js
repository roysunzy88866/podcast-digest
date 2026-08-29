/* 详情页顶栏「沉浸式」自动隐藏(2026-08-30 用户:「详情页里向上滑动或者点一下屏幕,
 * 应该出现顶部的返回按钮和收藏等 bar 的区域」)。
 *
 * 现状(实测):.pd-top 是 sticky、**一直占着顶部 62px**。用户要的是读的时候让位、
 * 需要时召回 —— 即 iOS Safari 那套:向下读 → 顶栏滑走;向上滑或点一下屏幕 → 顶栏回来。
 *
 * 设计要点(为什么这么写):
 * ① **只手机 + 只详情页**:桌面屏幕大、顶栏不碍事(用户明选桌面不动);首页/大类页顶栏本就 static。
 * ② **只加一个 class,动画交给 CSS**:JS 不碰样式数值,便于配 prefers-reduced-motion 与后续调参。
 * ③ **滚动监听必须 passive + rAF 节流**:本项目刚因「非被动 touchmove」栽过整页滚动卡顿,
 *    这里只读 scrollY、绝不 preventDefault,且每帧最多算一次。
 * ④ **靠近顶部永远显示**:回到文章开头时顶栏必须在,否则「返回」就没了。
 * ⑤ **弹层开着时不隐藏**:收藏/订阅/搜索浮层打开时顶栏跟着乱跳很难受。
 * ⑥ **SPA 换页重置**:Quartz 换页不重载,状态要归零,否则新页面可能一进去就是隐藏态。
 */
(function () {
  var W = typeof window !== "undefined" ? window : null;
  if (!W || !W.document) return;

  var doc = W.document;
  var HIDE_CLASS = "pd-tophide";
  var SHOW_AT = 60; // 距顶 60px 内一律显示(文章开头必须能看到「返回」)
  var DEADZONE = 6; // 小于这个位移不理会,防手指微抖导致顶栏闪烁
  var lastY = 0;
  var ticking = false;

  function isPhone() {
    try {
      return W.matchMedia && W.matchMedia("(max-width: 1023px)").matches;
    } catch (e) {
      return false;
    }
  }
  /** 只在详情页接管(有播放条 = 集页;与 CSS 的 body:has(.pd-play) 同一判据) */
  function onDetail() {
    return !!doc.querySelector(".pd-play");
  }
  /** 弹层(收藏/订阅/搜索)开着时不隐藏 —— 与 pull-refresh.js 同一组判据 */
  function overlayOpen() {
    return !!doc.querySelector(".pd-favov, .pd-subov, .search-container.active");
  }
  function scrollTop() {
    return W.scrollY || W.pageYOffset || (doc.documentElement && doc.documentElement.scrollTop) || 0;
  }
  function show() {
    if (doc.body) doc.body.classList.remove(HIDE_CLASS);
  }
  function hide() {
    if (doc.body) doc.body.classList.add(HIDE_CLASS);
  }

  function apply() {
    ticking = false;
    if (!isPhone() || !onDetail()) {
      // 桌面/非详情页:永远常驻。⚠️ 仍要更新基准(GLM 20260830-004[4]):否则从首页滚很远再进详情页时,
      // 第一次滚动会拿陈旧的 lastY 算方向,可能一进去就误判成「向下读」而把顶栏藏掉。
      lastY = scrollTop();
      return show();
    }
    var y = scrollTop();
    if (y < 0) y = 0; // iOS 橡皮筋会给负值
    var dy = y - lastY;
    if (y <= SHOW_AT) {
      show(); // 顶部区域:永远显示
    } else if (Math.abs(dy) >= DEADZONE) {
      if (dy > 0 && !overlayOpen()) hide(); // 向下读 → 让位
      else if (dy < 0) show(); // 向上滑 → 召回
    }
    lastY = y;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    W.requestAnimationFrame ? W.requestAnimationFrame(apply) : apply();
  }

  doc.addEventListener("scroll", onScroll, { passive: true });
  // 视口变化后立刻复查(GLM 20260830-007[1]):手机态把顶栏藏掉后,若**不再滚动**就转屏/拉宽到桌面,
  // pd-tophide 会一直挂着 → 桌面顶栏保持隐藏直到下次滚动。apply() 里 !isPhone() 会 show(),这里只需触发它。
  W.addEventListener("resize", onScroll, { passive: true });
  W.addEventListener("orientationchange", onScroll, { passive: true });
  // 点一下屏幕就召回(用户明确要的第二种触发)。click 不参与滚动合成,不影响滚动性能。
  // 不写 {passive:true}:click 本就不支持这个选项(会被静默忽略),写上去只会误导后来人
  // 以为这里也有滚动性能考量(GLM 20260830-006[3])。
  doc.addEventListener("click", show);
  // SPA 换页:状态归零,免得新页面一进去就是隐藏态
  doc.addEventListener("nav", function () {
    lastY = scrollTop();
    show();
  });

  lastY = scrollTop();
})();
