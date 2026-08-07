/* ══════════════════════════════════════════════════════════════════
   手机端首页/必读页的摊开区(用户批注:搜索、筛选、最新/最热都要拿出来,
   别塞进 ☰)。搜索复用 search.js 的索引与 runSearch,不另写一套检索。
   桌面完全不显示(CSS 里 .mhome 只在 <1024 出现)。
   ══════════════════════════════════════════════════════════════════ */
(function () {
  var q = document.getElementById('mhq'), box = document.getElementById('mhres');
  if (!q || !box) return;
  var tried = false;        // 索引只补取一次 —— 取回来还是没有就安静收手,绝不反复重试

  function ready() {
    // ⚠️ search.js 里是 `let IDX`(脚本级绑定),**不是 window.IDX** —— 用 window.IDX 判断
    // 永远为假,会让「没好就重试」变成无限递归,直接把页面卡死(踩过)。
    return typeof runSearch === 'function' && typeof IDX !== 'undefined' && IDX;
  }

  function draw() {
    var kw = q.value.trim();
    if (!kw) { box.innerHTML = ''; box.classList.remove('open'); return; }
    if (!ready()) {                                   // 索引还没到 → 补取一次就够
      // ⚠️ 这里第一版写成「取回来把标志位清掉再 draw」,等于每轮都能重新触发,
      //    索引若始终取不到就无限自我调用,页面直接卡死(headless 跑出来的,别再犯)。
      if (!tried && typeof loadIdx === 'function') { tried = true; loadIdx().then(draw); }
      return;
    }
    // 每组各留名额,不让「标题」一组把额度吃光 ——
    // 金句能被单独搜到是本站的差异化点(见需求文档),被挤掉就白做了。
    var r = runSearch(kw), h = '', c = 0, LIMIT = 6, PER = 2;
    if (!r.n) { box.innerHTML = '<div class="sg">没有匹配</div>'; box.classList.add('open'); return; }
    r.groups.forEach(function (g) {
      var name = g[0], items = g[1], k = 0;
      if (c >= LIMIT) return;                    // 名额用完就别再出组标题了 ——
      var body = '';                             // 否则「金句」「正文」会顶着空标题出现(实测见过)
      items.forEach(function (x) {
        if (c >= LIMIT || k >= PER) return;
        c++; k++;
        body += '<a class="si" href="ep-' + x.e.id + '.html"><div class="a">' +
                (name === '标题' ? x.s : x.e.t) + '</div>' +
                (name !== '标题' ? '<div class="b">' + x.s + '</div>' : '') + '</a>';
      });
      if (body) h += '<div class="sg">' + name + '</div>' + body;
    });
    h += '<a class="more" href="search.html?q=' + encodeURIComponent(kw) + '">查看全部 ' + r.n + ' 条 →</a>';
    box.innerHTML = h; box.classList.add('open');
  }

  q.addEventListener('focus', function () { if (typeof loadIdx === 'function') loadIdx(); }, { once: true });
  q.addEventListener('input', draw);
  q.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && q.value.trim()) location.href = 'search.html?q=' + encodeURIComponent(q.value.trim());
    if (e.key === 'Escape') { q.value = ''; draw(); q.blur(); }
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.msov')) { box.classList.remove('open'); }
  });

  // 搜索浮层开关(批注 2026-08-07:搜索收进右上角图标,点开才弹浮层+键盘,不再一进页面就杵着容易误触)
  var msov = document.getElementById('msov'),
      msopen = document.getElementById('msopen'),
      msclose = document.getElementById('msclose');
  if (msov && msopen) {
    msopen.addEventListener('click', function () {
      msov.classList.add('open');
      setTimeout(function () { q.focus(); }, 50);   // 用户主动点了才聚焦弹键盘
    });
    var shut = function () { msov.classList.remove('open'); q.value = ''; draw(); q.blur(); };
    if (msclose) msclose.addEventListener('click', shut);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && msov.classList.contains('open')) shut();
    });
  }
})();
