// C13b · 大类页三轴筛选。真业务测试,只调被测函数。
// 行为真相 = docs/user-stories.md C13b 前三个场景(已二次确认);
// 设计稿 = 需求共创/原型/cat-*.html + filter.js(筛选逻辑照搬,数值不自己发明)。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { renderTagPage } from "../scripts/build-tag-pages.mjs";

const scss = readFileSync(new URL("../assets/styles/custom.scss", import.meta.url), "utf8");

/** 造一集 */
const ep = (id: string, over: any = {}) => ({
  meta: {
    id,
    date: over.date ?? "2026-07-19",
    title_zh: over.title ?? `标题-${id}`,
    podcast: over.podcast ?? "Lenny's Podcast",
    duration_sec: over.dur === null ? undefined : (over.dur ?? 3600),
    guest_name: "某人",
    cover_image: null,
  },
  digest: { quotes: [{ zh: "一句金句。" }] },
  entities: null,
});

/** 大类映射由测试注入(不依赖真词表数据) */
const catsBy = (map: Record<string, string[]>) => (e: any) => map[e.meta.id] ?? [];

const 组织 = "组织与领导力";
const 产品 = "产品方法";

const fixture = () => {
  const eps = [
    ep("a", { podcast: "Lenny's Podcast", date: "2026-07-19", dur: 7200 }),
    ep("b", { podcast: "Latent Space", date: "2026-03-01", dur: 1800 }),
    ep("c", { podcast: "Lenny's Podcast", date: "2025-12-07", dur: 3600 }),
  ];
  const map = { a: [组织, 产品], b: [组织], c: [组织] };
  return { eps, opts: { categoriesOf: catsBy(map), hasCover: () => false } };
};

describe("C13b 场景1 · 三轴筛选就地生效", () => {
  const { eps, opts } = fixture();
  const md = renderTagPage(组织, eps, opts);

  it("★★ 三条轴齐全:同时属于 / 来自 / 时间", () => {
    expect(md).toContain('<span class="k">同时属于</span>');
    expect(md).toContain('<span class="k">来自</span>');
    expect(md).toContain('<span class="k">时间</span>');
    expect(md).toMatch(/data-axis="cat"/);
    expect(md).toMatch(/data-axis="pod"/);
    expect(md).toMatch(/data-axis="year"/);
  });

  it("★★ 每项带条数,且条数算的是真数据(Lenny's 2 集 / Latent Space 1 集)", () => {
    // esc() 只转义 & < > ",单引号原样 → data-val="Lenny's Podcast"
    expect(md).toContain(`data-val="Lenny's Podcast">Lenny's Podcast <b>2</b>`);
    expect(md).toContain('data-val="Latent Space">Latent Space <b>1</b>');
  });

  it("★★ 时间轴按年分桶,带「年」字(2026 两集 / 2025 一集)", () => {
    expect(md).toMatch(/data-axis="year" data-val="2026">2026 年 <b>2<\/b>/);
    expect(md).toMatch(/data-axis="year" data-val="2025">2025 年 <b>1<\/b>/);
  });

  it("★★ 本大类不出现在「同时属于」轴里(点自己毫无意义)", () => {
    const catAxis = md.match(/<span class="k">同时属于<\/span>.*?<\/div>/s)?.[0] ?? "";
    expect(catAxis).toContain(产品);
    expect(catAxis).not.toContain(组织);
  });

  it("★★ 每行带三轴过滤要用的 data-*(cat 多值用 | 分隔,与 filter.js 的 valOf 同口径)", () => {
    expect(md).toContain(`data-cats="${组织}|${产品}"`);
    expect(md).toMatch(/data-pod="Lenny&#39;s Podcast"|data-pod="Lenny's Podcast"/);
    expect(md).toContain('data-year="2026"');
    expect(md).toContain('data-date="2026-07-19"');
    expect(md).toContain('data-dur="7200"');
  });

  it("★★ 状态行按结果重算并给「清除」;未筛选时只报总数", () => {
    expect(md).toContain("筛出 <b>'+shown+'</b> 集 / 共 '+TOTAL+' 集");
    expect(md).toContain('id="fclr">清除');
    expect(md).toMatch(/'<b>'\+TOTAL\+'<\/b> 集'/);
  });

  it("★★ 0 条的置灰但不隐藏,而且点不动", () => {
    expect(md).toMatch(/classList\.toggle\('zero', n===0/);
    expect(md).toContain("if(b.classList.contains('zero')) return;");
    // 用 [^}]* 把匹配锁在同一个规则块内 —— 用 [\s\S]*? 会一路匹配到文件后面
    // 手机端那条 .frow{display:none},负向断言会假报警(踩过)
    expect(scss).toMatch(/\.fx\.zero \{[^}]*opacity/);
    expect(scss).not.toMatch(/\.fx\.zero \{[^}]*display: none/);
  });

  it("★★ 算某条轴的条数时跳过自己那条轴(否则选中项自己会变 1)", () => {
    expect(md).toContain("match(r,axis)");
    expect(md).toMatch(/return a===skip \|\| !pick\[a\]/);
  });

  it("★★ 再点一次同一项即取消该轴", () => {
    expect(md).toMatch(/pick\[a\]=\(pick\[a\]===b\.dataset\.val\)\?null:b\.dataset\.val/);
  });

  it("★★ 跨轴取交集(三轴 every,不是 some)", () => {
    expect(md).toContain("['cat','pod','year'].every(");
  });
});

describe("C13b 场景2 · 「同时属于」是就地再筛,不是跳走", () => {
  const { eps, opts } = fixture();
  const md = renderTagPage(组织, eps, opts);

  it("★★ 轴上的项是 button 而不是链接(点了不会导航)", () => {
    const catAxis = md.match(/<span class="k">同时属于<\/span>.*?<\/div>/s)?.[0] ?? "";
    expect(catAxis).toMatch(/<button class="fx"/);
    expect(catAxis).not.toMatch(/<a /);
  });

  it("★ 点击处理里 preventDefault,靠切 display 就地过滤,不改 location", () => {
    expect(md).toContain("e.preventDefault()");
    expect(md).toMatch(/r\.style\.display=ok\?'':'none'/);
    expect(md).not.toContain("location.href");
  });
});

describe("C13b 场景3 · 排序稳定", () => {
  const { eps, opts } = fixture();
  const md = renderTagPage(组织, eps, opts);

  it("★★ 比较函数相等返回 0,再按标题兜底(反复点结果一致)", () => {
    expect(md).toMatch(/return ta<tb\?-1:ta>tb\?1:0/);
    expect(md).toMatch(/\(a\.dataset\.date\|\|''\)>\(b\.dataset\.date\|\|''\)\?1:0/);
  });

  it("★ 三个排序项照设计稿:最新 / 最早 / 最长", () => {
    expect(md).toMatch(/data-sort="new">最新/);
    expect(md).toMatch(/data-sort="old">最早/);
    expect(md).toMatch(/data-sort="long">最长/);
  });

  it("★ 「最长」按 duration_sec 降序;缺时长的集当 0(落末尾,不崩)", () => {
    expect(md).toMatch(/\(\+b\.dataset\.dur\|\|0\)-\(\+a\.dataset\.dur\|\|0\)/);
    const noDur = renderTagPage(组织, [ep("z", { dur: null })], opts);
    expect(noDur).toContain('data-dur="0"');
  });
});

describe("C13b · 页面骨架与降级", () => {
  const { eps, opts } = fixture();

  it("★ 页头是「大类名 + N 集」,色点走 data-cat 不写内联 hex(暗色不塌)", () => {
    const md = renderTagPage(组织, eps, opts);
    expect(md).toMatch(new RegExp(`<span class="dot" data-cat="${组织}"></span>${组织} <span class="cnt">3 集`));
    expect(md).not.toMatch(/class="dot"[^>]*#[0-9a-fA-F]{6}/);
  });

  it("★ 每集一张卡,复用首页那套卡片标记(一套 CSS 管两处)", () => {
    const md = renderTagPage(组织, eps, opts);
    expect((md.match(/class="card"/g) || []).length).toBe(3);
    expect(md).toContain('class="tx"');
  });

  it("★ 空大类 → 友好空状态,不出筛选轴与空列表", () => {
    const md = renderTagPage("增长与销售", [], opts);
    expect(md).toContain("这个主题还没有集");
    expect(md).not.toContain('data-axis="cat"');
    expect(md).not.toContain('class="card"');
  });

  it("★ 只有一个来源/一个年份时,那条轴仍然出(条数就是全部,不误导)", () => {
    const one = [ep("only", { podcast: "Lenny's Podcast", date: "2026-01-01" })];
    const md = renderTagPage(组织, one, { categoriesOf: catsBy({ only: [组织] }), hasCover: () => false });
    expect(md).toMatch(/data-axis="pod"/);
    expect(md).toMatch(/data-axis="year"/);
    // 该集没有第二个大类 → 「同时属于」轴整条不出(没有可点的项)
    expect(md).not.toContain('<span class="k">同时属于</span>');
  });

  it("★★ 不缓存 DOM 节点、不把标记写在元素上(框架水合会重建这段 DOM)", () => {
    const md = renderTagPage(组织, eps, opts);
    // 踩过的坑:标记写在 .list 上 + 闭包捕获 .card → 水合后全变孤儿,点了屏幕不动
    expect(md).not.toMatch(/list\.__flt/);
    expect(md).toContain("var rows=rowsOf(), list=listOf();");
    expect(md).toMatch(/rowsOf=function\(\)/);
  });

  it("★★ click 用文档级委托且只绑一次(绑在 document 上不受重建影响)", () => {
    const md = renderTagPage(组织, eps, opts);
    expect(md).toContain("window.__pdFltBound");
    expect(md).toContain("document.addEventListener('click'");
    expect(md).toContain("document.addEventListener('nav', init)");
  });

  it("★ 委托监听器在非大类页要自己让路(全站只有大类页有 .pd .list)", () => {
    const md = renderTagPage(组织, eps, opts);
    expect(md).toMatch(/if\(!listOf\(\)\) return;/);
  });
});

describe("C13b · 大类页样式(设计稿数值照抄)", () => {
  it("★ 三轴按钮 .fx / 选中态 .fx.on / 排序行 .sortbar 都在 custom.scss 里", () => {
    expect(scss).toMatch(/\.fx \{/);
    expect(scss).toMatch(/\.fx\.on \{/);
    expect(scss).toMatch(/\.sortbar \{/);
  });

  it("★★ Quartz tag-page 自带的那个列表藏掉(否则我们的列表下面还挂一份)", () => {
    expect(scss).toMatch(/\.page-listing \{ display: none/);
  });

  it("★★ 手机端不显示筛选轴(🔒 筛选属「坐下来精读」场景),排序行保留", () => {
    expect(scss).toMatch(/\.frow \{ display: none/);
  });
});

describe("C13b · 大类页也有左栏(设计稿 .shell.two = 左导航 + 加宽中栏)", () => {
  const { eps, opts } = fixture();
  const md = renderTagPage(组织, eps, { ...opts, allEpisodes: eps });

  it("★★ 左栏在,且当前大类高亮(否则 .pd-mid 会落进 200px 那一列,标题被挤成一字一行)", () => {
    expect(md).toContain('class="pd-left"');
    expect(md).toMatch(new RegExp(`class="cl on internal"[^>]*><span>${组织}</span>`));
  });

  it("★★ 大类页在二级目录,左栏链接要能从 tags/ 里跳对(../ 回首页、./ 到同级大类)", () => {
    expect(md).toContain('href="../"');             // 全部 → 回首页
    expect(md).toMatch(/href="\.\/[^"]*"><span>产品方法/); // 同级大类
  });

  it("★ 左栏条数用全库口径(allEpisodes),不是本大类的子集", () => {
    const wide = renderTagPage(组织, eps.slice(0, 1), { ...opts, allEpisodes: eps });
    expect(wide).toMatch(new RegExp(`<span>${组织}</span><i>3</i>`));
  });
});

describe("C13b · 内联脚本不许含空行(Markdown 会把它切成代码块,整段静默失效)", () => {
  const { eps, opts } = fixture();

  it("★★★ 脚本区一个空行都没有(GLM 20260726-024[1] 的机制,实测被咬中)", () => {
    const md = renderTagPage(组织, eps, opts);
    const script = md.slice(md.indexOf("<script>"));
    expect(script).not.toMatch(/\n\s*\n/);
  });

  it("★★ 空大类页也不带脚本以外的空行陷阱(它没有脚本,但结构要完整)", () => {
    const md = renderTagPage("增长与销售", [], opts);
    expect(md).toContain('class="pd-left"');
    expect(md).toContain("这个主题还没有集");
  });
});
