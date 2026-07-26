/* ══════════════════════════════════════════════════════════════════
   手机端 · 详情页(单集页 / 人物页)独立组件
   —— 桌面右栏在 <1024 是 display:none,手机上等于没有目录、没有「这一集涉及」。
      本文件把这两样按手机的方式重做:
        ① 吸顶折叠目录(.mtoc):正文开始处就地出现 → 滚动后吸顶,
           收起态一行显示「当前小节」,点开是全部小节 + 全部金句 + 接着看
        ② 阅读进度:吸顶条底部 2px 红线(9600px 的长页在手机上需要进度感)
        ③ 桌面右栏剩下的块(这一集涉及 / 回到)克隆到页尾 —— 与桌面同源不漂移
      桌面完全不受影响(CSS 里 .mtoc 只在 <1024 显示,克隆块同理)
   ══════════════════════════════════════════════════════════════════ */
(function () {
  var mid = document.querySelector('.shell.det .mid');
  if (!mid) return;                       // 只在详情页跑

  /* ── 1. 收集小节 ────────────────────────────────────────────── */
  var items = [];
  mid.querySelectorAll('h2[id]').forEach(function (h) {
    items.push({ el: h, label: h.textContent.trim() });
  });
  mid.querySelectorAll('.sec').forEach(function (s, i) {
    if (!s.id) s.id = 'sec' + i;
    // .sec 里第一段文字才是标题,后面 <span> 是条数说明
    var label = (s.firstChild && s.firstChild.nodeType === 3 ? s.firstChild.textContent : s.textContent).trim();
    items.push({ el: s, label: label });
  });
  if (items.length < 2) return;
  items.sort(function (a, b) { return a.el.compareDocumentPosition(b.el) & 4 ? -1 : 1; });

  /* ── 2. 造吸顶条 ────────────────────────────────────────────────
     两种形态,按页面性质分:
       · 单集页 = 长文 6~7 个中文长标题 → 折叠下拉(收起态显示当前小节)
       · 人物页 = 固定 4 个短标题       → 横向 chip 条(一下点到,不用先展开) */
  var chipMode = !!document.querySelector('.phero');
  var bar = document.createElement('div');
  bar.className = 'mtoc' + (chipMode ? ' chips2' : '');
  bar.innerHTML = chipMode
    ? '<div class="mtc"></div><span class="mtbar"></span>'
    : '<button class="mtt" type="button" aria-expanded="false">' +
        '<span class="mtk">目录</span><span class="mtl"></span><i>⌄</i>' +
      '</button><div class="mtm"></div><span class="mtbar"></span>';
  var panel = bar.querySelector(chipMode ? '.mtc' : '.mtm'),
      label = bar.querySelector('.mtl'),
      toggle = bar.querySelector('.mtt'),
      prog = bar.querySelector('.mtbar');

  items.forEach(function (it, i) {
    var a = document.createElement('a');
    a.href = '#' + it.el.id;
    a.dataset.i = i;
    // chip 条上去掉 ①②③④ 编号(条上位置本身就是顺序)
    a.textContent = chipMode ? it.label.replace(/^[①②③④⑤⑥⑦⑧⑨]\s*/, '') : it.label;
    panel.appendChild(a);
  });

  // 就地插在正文第一节之前 → 滚到这里才吸顶(第一屏留给标题/音频/金句钩子)
  mid.insertBefore(bar, items[0].el);

  // 吸顶高度 = 顶栏实测高度(顶栏本身是 sticky top:0,不能写死)
  // 变量只写在本组件元素上,不写 :root —— 避免以后 Quartz 那边有同名全局 token 打架
  function stick() {
    var t = document.querySelector('.top');
    bar.style.setProperty('--stick', (t ? t.offsetHeight : 78) + 'px');
  }
  stick();
  window.addEventListener('resize', stick);

  /* ── 3. 展开 / 收起(chip 条没有展开态)───────────────────────── */
  function close() {
    if (!toggle) return;
    bar.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = bar.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (bar.classList.contains('open') && !e.target.closest('.mtoc')) close();
    });
  }

  // 点条目:自己算偏移量(顶栏 + 吸顶条都会挡住锚点)
  panel.addEventListener('click', function (e) {
    var a = e.target.closest('a'); if (!a) return;
    e.preventDefault();
    var it = items[+a.dataset.i];
    var off = (document.querySelector('.top') || {}).offsetHeight || 0;
    window.scrollTo({ top: it.el.getBoundingClientRect().top + window.scrollY - off - bar.offsetHeight - 8, behavior: 'smooth' });
    close();
  });

  /* ── 4. 滚动高亮 + 进度(与桌面右栏目录同一行为)──────────────── */
  var cur = -1, tick = false, dragging = false;
  if (chipMode) {
    panel.addEventListener('touchstart', function () { dragging = true; }, { passive: true });
    panel.addEventListener('touchend', function () { dragging = false; }, { passive: true });
    panel.addEventListener('touchcancel', function () { dragging = false; }, { passive: true });
  }
  function onScroll() {
    // 判定线要比「点目录跳过去的落点」再低一点,否则跳完当前项还高亮上一节
    var off = ((document.querySelector('.top') || {}).offsetHeight || 0) + bar.offsetHeight + 24;
    var idx = -1;
    for (var i = 0; i < items.length; i++) {
      if (items[i].el.getBoundingClientRect().top <= off) idx = i; else break;
    }
    // 短页(人物页只有 2 屏)最后几节永远滚不到判定线以上 → 最后一节的 chip 永远不会亮。
    // 到底了就认最后一节。
    if (window.scrollY >= document.body.scrollHeight - window.innerHeight - 2) idx = items.length - 1;
    if (idx !== cur) {
      cur = idx;
      if (label) label.textContent = idx < 0 ? '' : items[idx].label;
      bar.classList.toggle('at', idx >= 0);
      panel.querySelectorAll('a').forEach(function (a, i) {
        a.classList.toggle('on', i === idx);
        // chip 条:当前项滚进可视范围(4 个 chip 一屏放不下)。
        // ⚠️ 两个前提:① 手指正按着 chip 条时不许动(否则和用户抢方向盘)
        //             ② 当前项本来就看得见就别动(无谓的 smooth 滚动会抖)
        if (!chipMode || i !== idx || dragging) return;
        var vis = a.offsetLeft >= panel.scrollLeft && a.offsetLeft + a.offsetWidth <= panel.scrollLeft + panel.clientWidth;
        if (!vis) panel.scrollTo({ left: Math.max(0, a.offsetLeft - 16), behavior: 'smooth' });
      });
    }
    var max = document.body.scrollHeight - window.innerHeight;
    prog.style.width = (max > 0 ? Math.min(100, Math.max(0, window.scrollY / max * 100)) : 0) + '%';
    tick = false;
  }
  window.addEventListener('scroll', function () {
    if (!tick) { tick = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ── 5. 桌面右栏剩下的块 → 克隆到页尾(第一块是目录,已由吸顶条取代)── */
  var right = document.querySelector('.shell.det .right');
  if (right) {
    // 按标题认「目录块」跳过(吸顶条已取代它),不要按位置 slice(1) ——
    // 以后右栏加块、换顺序,按位置会静默吞掉别的内容
    var blks = [].slice.call(right.querySelectorAll('.blk')).filter(function (b) {
      var h = b.querySelector('.sh');
      return !(h && /目录|导航/.test(h.textContent));
    });
    if (blks.length) {
      var wrap = document.createElement('div');
      wrap.className = 'mrel';
      blks.forEach(function (b) { wrap.appendChild(b.cloneNode(true)); });
      mid.appendChild(wrap);
    }
  }
})();
