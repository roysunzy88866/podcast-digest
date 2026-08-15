/* PC 搜索历史 —— 叠加在 Quartz 原生搜索浮层上(2026-08-15 用户拍板,参考少数派)。
 *
 * 🔒#9 不换引擎:检索仍全走 Quartz;本脚本只在浮层里多渲染一块「搜索历史 + 清除」,
 * 只读写 localStorage['pd-search-hist'],绝不触碰 Quartz 的检索逻辑。
 * 事件全用 document 委托 → 对 Quartz SPA 换页天然免疫,无需监听 nav 重绑。
 *
 * DOM(Quartz):.search > .search-container.active > .search-space > input.search-bar + .search-layout
 * 注入:.pd-shist 插在 input 之后;空查询时显示,输入后隐藏(交回 Quartz 结果)。
 */
(function () {
  var KEY = "pd-search-hist",
    MAX = 8, // 最多记 8 条
    MINLEN = 2; // 少于 2 字符不记(避免噪音)
  var SUGGEST = ["智能体", "护城河", "Anthropic", "增长"]; // 无历史时的兜底推荐词

  function load() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY) || "[]");
      return Array.isArray(v) ? v : [];
    } catch (e) {
      return [];
    }
  }
  function save(list) {
    try {
      localStorage.setItem(KEY, JSON.stringify(list.slice(0, MAX)));
    } catch (e) {}
  }
  function record(term) {
    term = (term || "").trim();
    if (term.length < MINLEN) return;
    var list = load().filter(function (t) {
      return t !== term;
    });
    list.unshift(term);
    save(list);
  }
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function ensureHist(space) {
    var h = space.querySelector(".pd-shist");
    if (h) return h;
    h = document.createElement("div");
    h.className = "pd-shist";
    var bar = space.querySelector(".search-bar");
    if (bar && bar.nextSibling) space.insertBefore(h, bar.nextSibling);
    else space.appendChild(h);
    return h;
  }

  function renderHist(h) {
    var list = load(),
      isHist = list.length > 0;
    var terms = isHist ? list : SUGGEST;
    var head = isHist
      ? '<div class="pd-shist-hd"><span>搜索历史</span>' +
        '<button class="pd-shist-clr" title="清除历史" aria-label="清除搜索历史">' +
        '<svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M4 6h12M8 6V4.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V6M6.5 6l.6 9a1 1 0 0 0 1 .9h3.8a1 1 0 0 0 1-.9l.6-9"/></svg></button></div>'
      : '<div class="pd-shist-hd"><span>试试</span></div>';
    var tags =
      '<div class="pd-shist-tags">' +
      terms
        .map(function (t) {
          return "<b>" + esc(t) + "</b>";
        })
        .join("") +
      "</div>";
    h.innerHTML = head + tags;
  }

  function toggle(space) {
    var bar = space.querySelector(".search-bar"),
      h = space.querySelector(".pd-shist");
    if (!h) return;
    h.style.display = bar && bar.value.trim() ? "none" : "block";
  }

  // 打开浮层 / 聚焦输入框 → 渲染历史并按空/非空显隐(涵盖点按钮和 Cmd+K 两种打开方式)
  document.addEventListener("focusin", function (e) {
    var bar = e.target.closest && e.target.closest(".search-bar");
    if (!bar) return;
    var space = bar.closest(".search-space");
    if (!space) return;
    renderHist(ensureHist(space));
    toggle(space);
  });

  // 输入:仅切换历史显隐(不在此记录——打字停顿会把「人工」这类半截词污染进历史,GLM 20260815-022[高]。
  // 历史只在「真有效搜索」时记:点结果卡 或 按 Enter,见下方)。
  document.addEventListener("input", function (e) {
    var bar = e.target.closest && e.target.closest(".search-bar");
    if (!bar) return;
    var space = bar.closest(".search-space");
    if (space) toggle(space);
  });

  // 按 Enter = 用户确定要搜这个词 → 记录(有效搜索)。
  // 用捕获阶段:Quartz 的 searchBar keydown 会 hideSearch + 导航(冒泡阶段),
  // 等冒泡到 document 时 bar.value 已被清 → 必须抢在它之前(capture)拿完好的值。
  document.addEventListener(
    "keydown",
    function (e) {
      if (e.key !== "Enter") return;
      var bar = e.target.closest && e.target.closest(".search-bar");
      if (bar) record(bar.value);
    },
    true,
  );

  // 点结果卡记录、清除、药丸——同样用捕获阶段,抢在 Quartz onResultsClick(hideSearch)之前。
  document.addEventListener(
    "click",
    function (e) {
      var t = e.target;
      // 清除历史
      var clr = t.closest && t.closest(".pd-shist-clr");
      if (clr) {
        e.preventDefault();
        save([]);
        var s1 = clr.closest(".search-space");
        if (s1) {
          var h1 = s1.querySelector(".pd-shist");
          if (h1) {
            renderHist(h1);
            toggle(s1);
          }
        }
        return;
      }
      // 点历史/推荐药丸 → 填入搜索框并触发 Quartz 检索
      var pill = t.closest && t.closest(".pd-shist-tags b");
      if (pill) {
        var s2 = pill.closest(".search-space"),
          bar2 = s2 && s2.querySelector(".search-bar");
        if (bar2) {
          bar2.value = pill.textContent;
          record(bar2.value); // 点药丸 = 又一次有效搜索,置顶
          bar2.focus();
          // Quartz 搜索框监听 "input"(search.inline.ts:504)→ 触发它自己检索
          bar2.dispatchEvent(new Event("input", { bubbles: true }));
        }
        return;
      }
      // 点结果卡 → 记录当前搜索词(视为一次有效搜索)
      var card = t.closest && t.closest(".result-card");
      if (card && !card.classList.contains("no-match")) {
        var s3 = card.closest(".search-space"),
          bar3 = s3 && s3.querySelector(".search-bar");
        if (bar3) record(bar3.value);
      }
    },
    true,
  );
})();
