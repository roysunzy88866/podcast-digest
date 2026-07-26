/* ══════════════════════════════════════════════════════════════════
   大类页的三轴筛选 + 排序(用户批注 #1/#2/#3:原来那排按钮是死的)
   —— 三条轴:同时属于(另一个大类)/ 来自(播客源)/ 时间(年)
      每条轴单选,再点一下取消;跨轴之间是「且」。
      纯前端切 class,零请求 —— 全部条目本来就在 HTML 里(Maggie Appleton 那套)。
      每次筛完,另外两条轴的条数按当前结果重算(Longform 那套「每项带条数」)。
   ══════════════════════════════════════════════════════════════════ */
(function () {
  var list = document.querySelector('.list');
  var bar = document.querySelector('.sortbar');
  if (!list || !bar) return;
  var rows = [].slice.call(list.querySelectorAll('.row'));
  if (!rows.length) return;

  var TOTAL = rows.length;
  var pick = { cat: null, pod: null, year: null };   // 每条轴当前选中值
  var sort = 'new';

  function valOf(r, axis) {
    if (axis === 'cat') return (r.dataset.cats || '').split('|');
    if (axis === 'pod') return [r.dataset.pod || ''];
    return [r.dataset.year || ''];
  }
  // 只按「除 axis 之外的其它轴」过滤 —— 用来算某条轴各项的剩余条数
  function match(r, skip) {
    return ['cat', 'pod', 'year'].every(function (a) {
      return a === skip || !pick[a] || valOf(r, a).indexOf(pick[a]) >= 0;
    });
  }

  function apply() {
    var shown = 0;
    rows.forEach(function (r) {
      var ok = match(r, null);
      r.style.display = ok ? '' : 'none';
      if (ok) shown++;
    });

    // 各轴按钮:重算条数,0 条的置灰(不隐藏 —— 让人看得见「这条路走不通」)
    document.querySelectorAll('.fx[data-axis]').forEach(function (b) {
      var axis = b.dataset.axis, val = b.dataset.val;
      var n = rows.filter(function (r) { return match(r, axis) && valOf(r, axis).indexOf(val) >= 0; }).length;
      var c = b.querySelector('b'); if (c) c.textContent = n;
      b.classList.toggle('on', pick[axis] === val);
      b.classList.toggle('zero', n === 0 && pick[axis] !== val);
    });

    // 排序:直接搬 DOM 顺序
    var vis = rows.filter(function (r) { return r.style.display !== 'none'; });
    // 相等时必须返回 0(同一天有多集是常态) —— 返回 ±1 等于同时断言 a>b 和 b>a,
    // 比较函数不自洽,反复排序时顺序可能漂。相等就按标题兜底,保证每次结果一样。
    vis.sort(function (a, b) {
      var d = sort === 'long'
        ? (+b.dataset.dur || 0) - (+a.dataset.dur || 0)
        : (sort === 'old' ? 1 : -1) * ((a.dataset.date || '') < (b.dataset.date || '') ? -1
            : (a.dataset.date || '') > (b.dataset.date || '') ? 1 : 0);
      if (d) return d;
      var ta = (a.querySelector('.t') || {}).textContent || '', tb = (b.querySelector('.t') || {}).textContent || '';
      return ta < tb ? -1 : ta > tb ? 1 : 0;
    });
    vis.forEach(function (r) { list.appendChild(r); });

    // 状态行:用户要求不写「排序」「未筛选」这两个词
    var on = Object.keys(pick).filter(function (k) { return pick[k]; });
    document.querySelectorAll('.sortbar .so').forEach(function (a) {
      a.classList.toggle('on', a.dataset.sort === sort);
    });
    var st = document.getElementById('fstate');
    if (st) st.innerHTML = on.length
      ? '筛出 <b>' + shown + '</b> 集 / 共 ' + TOTAL + ' 集 <button class="clr" id="fclr">清除</button>'
      : '<b>' + TOTAL + '</b> 集';
    var clr = document.getElementById('fclr');
    if (clr) clr.onclick = function () { pick = { cat: null, pod: null, year: null }; apply(); };
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('.fx[data-axis]');
    if (b) {
      e.preventDefault();
      if (b.classList.contains('zero')) return;
      var a = b.dataset.axis;
      pick[a] = (pick[a] === b.dataset.val) ? null : b.dataset.val;   // 再点一下取消
      return apply();
    }
    var s = e.target.closest('.sortbar .so');
    if (s) { e.preventDefault(); sort = s.dataset.sort; apply(); }
  });

  apply();
})();
