/* ══════════════════════════════════════════════════════════════════
   网页批注(只在原型里用,不属于站点本身)
   —— 点右下角「批注」进入标注模式 → 点页面上任何东西 → 写一句要改什么 → 保存。
      批注同时存两处:① 浏览器本地(刷新不丢)② POST 回本地服务写进
      /tmp/uiproto-comments.jsonl —— 这样 Claude 直接读文件就行,你不用复制粘贴。
      服务没跑起来时自动降级:只存本地,面板里可一键复制全部。
   ══════════════════════════════════════════════════════════════════ */
(function () {
  var KEY = 'proto-comments';
  var page = location.pathname.split('/').pop() || 'index.html';
  var mode = false;

  /* ── 元素定位:存一条能重新找回来的路径 ── */
  function pathOf(el) {
    var parts = [];
    while (el && el.nodeType === 1 && el !== document.body && parts.length < 6) {
      var p = el.parentNode, i = 1, sib = el;
      while ((sib = sib.previousElementSibling)) if (sib.tagName === el.tagName) i++;
      parts.unshift(el.tagName.toLowerCase() + (el.className && typeof el.className === 'string'
        ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.') : '') + ':nth-of-type(' + i + ')');
      el = p;
    }
    return parts.join(' > ');
  }
  function load() { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; } }
  function save(list) { localStorage.setItem(KEY, JSON.stringify(list)); }

  /* ── 界面 ── */
  var css = document.createElement('style');
  css.textContent = [
    '#cmBtn{position:fixed;right:16px;bottom:16px;z-index:99990;font:14px/1 -apple-system,"PingFang SC",sans-serif;',
    ' background:#1e1e1e;color:#fff;border:0;border-radius:22px;padding:12px 16px;cursor:pointer;box-shadow:0 4px 16px #00000033}',
    '#cmBtn.on{background:#b8443c}',
    '#cmBtn b{background:#b8443c;color:#fff;border-radius:9px;padding:1px 7px;margin-left:7px;font-size:12px}',
    '#cmBtn.on b{background:#fff;color:#b8443c}',
    'body.cm-on *{cursor:crosshair!important}',
    '.cm-hi{outline:2px solid #b8443c!important;outline-offset:1px;background:#b8443c0d!important}',
    '.cm-pin{position:absolute;z-index:99980;width:22px;height:22px;border-radius:50%;background:#b8443c;color:#fff;',
    ' font:600 12px/22px -apple-system,sans-serif;text-align:center;cursor:pointer;box-shadow:0 2px 8px #00000040;',
    ' transform:translate(-50%,-50%)}',
    '.cm-pin.lost{background:#8a8a8e}',   /* 元素已不在(页面改过)→ 位置只是近似 */
    '#cmPop{position:absolute;z-index:99995;width:300px;background:#fff;border-radius:10px;box-shadow:0 10px 34px #00000030;',
    ' padding:12px;font:14px/1.6 -apple-system,"PingFang SC",sans-serif}',
    '#cmPop .q{font-size:11.5px;color:#8a8a8e;margin-bottom:7px;max-height:34px;overflow:hidden}',
    '#cmPop textarea{width:100%;height:74px;font:inherit;font-size:13.5px;padding:8px;border:1px solid #dcdcde;',
    ' border-radius:7px;outline:0;resize:vertical}',
    '#cmPop textarea:focus{border-color:#b8443c}',
    '#cmPop .row{display:flex;gap:8px;margin-top:8px}',
    '#cmPop button{font:inherit;font-size:13px;padding:7px 13px;border-radius:7px;border:1px solid #dcdcde;background:#fff;cursor:pointer}',
    '#cmPop .ok{background:#b8443c;border-color:#b8443c;color:#fff}',
    '#cmPanel{position:fixed;right:16px;bottom:64px;z-index:99991;width:340px;max-height:62vh;overflow-y:auto;',
    ' background:#fff;border-radius:12px;box-shadow:0 10px 34px #00000028;padding:12px;display:none;',
    ' font:14px/1.6 -apple-system,"PingFang SC",sans-serif}',
    '#cmPanel.open{display:block}',
    '#cmPanel h4{margin:0 0 8px;font-size:13px;display:flex;align-items:center}',
    '#cmPanel h4 span{margin-left:auto;font-weight:400;font-size:12px;color:#8a8a8e}',
    '#cmPanel .it{border-top:1px solid #f0f0f3;padding:9px 0;font-size:13px}',
    '#cmPanel .it i{font-style:normal;color:#b8443c;font-weight:600;margin-right:5px}',
    '#cmPanel .it em{font-style:normal;display:block;font-size:11.5px;color:#a0a0a4;margin-top:3px}',
    '#cmPanel .it button{float:right;border:0;background:none;color:#c0c0c4;cursor:pointer;font-size:15px}',
    '#cmPanel .acts{display:flex;gap:8px;margin-top:10px}',
    '#cmPanel .acts button{flex:1;font:inherit;font-size:12.5px;padding:7px;border-radius:7px;border:1px solid #dcdcde;background:#fff;cursor:pointer}',
    '#cmSt{font-size:11.5px;color:#a0a0a4;margin-top:8px}'
  ].join('');
  document.head.appendChild(css);

  var btn = document.createElement('button');
  btn.id = 'cmBtn'; btn.innerHTML = '💬 批注 <b>0</b>';
  var panel = document.createElement('div'); panel.id = 'cmPanel';
  document.body.appendChild(btn); document.body.appendChild(panel);

  /* ── 落盘:优先回传本地服务(Claude 直接读),失败就只留本地 ── */
  var online = true;
  function push(c) {
    fetch('/_comment', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(c) })
      .then(function (r) { online = r.ok; draw(); })
      .catch(function () { online = false; draw(); });
  }

  function pins() {
    [].forEach.call(document.querySelectorAll('.cm-pin'), function (p) { p.remove(); });
    load().filter(function (c) { return c.page === page; }).forEach(function (c, i) {
      var el = null; try { el = document.querySelector(c.path); } catch (e) {}
      var d = document.createElement('div'); d.className = 'cm-pin'; d.textContent = c.n;
      d.title = c.text;
      var top = c.y, left = c.x;
      if (el) { var r = el.getBoundingClientRect(); top = r.top + window.scrollY + Math.min(14, r.height / 2); left = r.left + window.scrollX + 12; }
      // ⚠️ 找不回元素时会退回「标注时的坐标」—— 若那是在电脑上标的(x 可能 1180),
      //    放到手机上就把页面撑宽、出现横向滚动(实测撑到 1191px / 视口 375)。一律夹回视口内。
      var vw = document.documentElement.clientWidth;
      left = Math.max(6, Math.min(left, vw - 28));
      d.style.top = top + 'px'; d.style.left = left + 'px';
      if (!el) d.classList.add('lost');           // 元素已不在(页面改过)——给个提示,别当成精确位置
      d.onclick = function (ev) { ev.stopPropagation(); panel.classList.add('open'); };
      document.body.appendChild(d);
    });
  }
  function draw() {
    var all = load();
    btn.querySelector('b').textContent = all.length;
    var mine = all.filter(function (c) { return c.page === page; });
    panel.innerHTML = '<h4>批注 <span>' + all.length + ' 条(本页 ' + mine.length + ')</span></h4>' +
      (all.length ? all.map(function (c) {
        return '<div class="it"><button data-del="' + c.id + '">×</button><i>#' + c.n + '</i>' + esc(c.text) +
          '<em>' + esc(c.page) + ' · ' + esc((c.target || '').slice(0, 42)) + '</em></div>';
      }).join('') : '<div class="it" style="color:#a0a0a4">还没有批注。点右下角「批注」,再点页面上任何地方。</div>') +
      '<div class="acts"><button id="cmCopy">复制全部</button><button id="cmClear">清空</button></div>' +
      '<div id="cmSt">' + (online ? '✅ 已自动回传,Claude 直接能读' : '⚠️ 回传不通(服务没跑?),只存在本机 —— 用「复制全部」发给 Claude') + '</div>';
    pins();
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>]/g, function (m) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[m]; }); }

  panel.addEventListener('click', function (e) {
    var d = e.target.getAttribute && e.target.getAttribute('data-del');
    if (d) { save(load().filter(function (c) { return c.id !== d; })); draw(); return; }
    if (e.target.id === 'cmClear') { if (confirm('清空全部批注?')) { save([]); draw(); } }
    if (e.target.id === 'cmCopy') {
      var t = load().map(function (c) { return '#' + c.n + ' [' + c.page + '] 「' + (c.target || '').slice(0, 40) + '」\n   → ' + c.text; }).join('\n');
      navigator.clipboard.writeText(t); e.target.textContent = '已复制 ✓';
      setTimeout(function () { e.target.textContent = '复制全部'; }, 1400);
    }
  });

  btn.onclick = function () {
    if (mode) { stop(); panel.classList.toggle('open'); }
    else { mode = true; btn.classList.add('on'); document.body.classList.add('cm-on'); panel.classList.remove('open'); }
  };
  function stop() { mode = false; btn.classList.remove('on'); document.body.classList.remove('cm-on'); clearHi(); }
  var hi = null;
  function clearHi() { if (hi) { hi.classList.remove('cm-hi'); hi = null; } }

  document.addEventListener('mouseover', function (e) {
    if (!mode || e.target.closest('#cmBtn,#cmPanel,#cmPop,.cm-pin')) return;
    clearHi(); hi = e.target; hi.classList.add('cm-hi');
  }, true);

  document.addEventListener('click', function (e) {
    if (!mode || e.target.closest('#cmBtn,#cmPanel,#cmPop,.cm-pin')) return;
    e.preventDefault(); e.stopPropagation();      // 标注模式下不触发页面本身的跳转
    var el = e.target;
    // 图标现在是内联 SVG:点上去 e.target 会是 <circle>/<path>,记下来就是「circle」这种没意义的词。
    // 往上落到它所属的按钮/链接,批注里才看得出你点的是「分享」还是「收藏」。
    if (el.ownerSVGElement || el.tagName.toLowerCase() === 'svg') el = el.closest('button,a') || el;
    var old = document.getElementById('cmPop'); if (old) old.remove();
    var pop = document.createElement('div'); pop.id = 'cmPop';
    var label = (el.textContent || '').trim() || el.getAttribute('title') || el.tagName;
    pop.innerHTML = '<div class="q">你点的是:「' + esc(label.slice(0, 46)) + '」</div>' +
      '<textarea placeholder="这里要改成什么?例如:这行字太小 / 这块删掉 / 图挪到左边"></textarea>' +
      '<div class="row"><button class="ok">保存</button><button class="no">取消</button></div>';
    document.body.appendChild(pop);
    var x = e.pageX, y = e.pageY;
    pop.style.left = Math.min(x, window.scrollX + window.innerWidth - 320) + 'px';
    pop.style.top = Math.min(y + 10, window.scrollY + window.innerHeight - 190) + 'px';
    var ta = pop.querySelector('textarea'); ta.focus();
    pop.querySelector('.no').onclick = function () { pop.remove(); stop(); };
    pop.querySelector('.ok').onclick = function () {
      var v = ta.value.trim(); if (!v) { ta.focus(); return; }
      var all = load();
      var c = { id: String(Date.now()) + String(Math.round(performance.now())), n: all.length + 1, page: page,
                path: pathOf(el), target: label.slice(0, 80),
                x: x, y: y, w: window.innerWidth, text: v, at: new Date().toISOString() };
      all.push(c); save(all); push(c); pop.remove(); stop(); draw(); panel.classList.add('open');
    };
    ta.addEventListener('keydown', function (ev) {
      if ((ev.metaKey || ev.ctrlKey) && ev.key === 'Enter') pop.querySelector('.ok').click();
      if (ev.key === 'Escape') { pop.remove(); stop(); }
    });
  }, true);

  // 起来时问一次服务在不在,决定面板上提示哪种状态
  fetch('/_comments').then(function (r) { online = r.ok; }).catch(function () { online = false; }).then(draw);
  window.addEventListener('resize', pins);
})();
