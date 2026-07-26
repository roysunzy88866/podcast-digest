/* ══════════════════════════════════════════════════════════════════
   单集页/人物页的「分享」与「收藏」(用户批注:☰ 那个位置应该放这两个,
   电脑端同步做)。两端同一套按钮,行为按设备能力分:
     分享 —— 手机有系统分享面板就调它,没有就复制链接
     收藏 —— 存在本机(localStorage),再点取消
   ⚠️ 原型阶段:收藏只存本机,没有账号也没有跨设备同步;
      「收藏夹」页面还没做(见文档待办),所以这里只做标记与计数。
   ══════════════════════════════════════════════════════════════════ */
(function () {
  var KEY = 'proto-favs';
  var page = location.pathname.split('/').pop() || 'index.html';
  var titleEl = document.querySelector('h1.pt, .phero h1');
  var title = titleEl ? titleEl.textContent.trim() : document.title;

  function load() { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; } }
  function save(o) { localStorage.setItem(KEY, JSON.stringify(o)); }

  function toast(msg) {
    var t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('in'); });
    setTimeout(function () { t.classList.remove('in'); setTimeout(function () { t.remove(); }, 250); }, 1600);
  }

  function copy() {                              // 电脑,或系统面板用不了时:复制链接
    var url = location.href;
    if (!navigator.clipboard) { toast('请手动复制地址栏链接'); return; }
    navigator.clipboard.writeText(url).then(
      function () { toast('链接已复制'); },
      function () { toast('复制失败,请手动复制地址栏'); });
  }

  function share() {
    if (navigator.share) {                       // 手机:系统分享面板(微信/备忘录/AirDrop 都在里面)
      navigator.share({ title: title, url: location.href }).catch(function (e) {
        // 用户自己点了取消 → 什么都不做;其它失败(桌面上有这个接口但调不通)→ 退回复制,
        // 否则点了分享毫无反应,看起来就是按钮坏了。
        if (!e || e.name !== 'AbortError') copy();
      });
      return;
    }
    copy();
  }

  function paint() {
    var on = !!load()[page];
    [].forEach.call(document.querySelectorAll('[data-act="fav"]'), function (b) {
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.title = on ? '取消收藏' : '收藏';
    });
  }

  function fav() {
    var o = load();
    if (o[page]) { delete o[page]; save(o); paint(); toast('已取消收藏'); return; }
    o[page] = { t: title, at: new Date().toISOString() };
    save(o); paint();
    toast('已收藏 · 共 ' + Object.keys(o).length + ' 集');
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]');
    if (!b) return;
    e.preventDefault();
    if (b.dataset.act === 'share') share();
    if (b.dataset.act === 'fav') fav();
  });
  paint();
})();
