// C13a · 首页骨架换血:Bases 三视图 → 真卡片流。真业务测试,只调被测函数。
//
// [standard-change: 用户 2026-07-26 明文授权]
// 本文件原为 C10「Bases 三视图」的测试(断言 ```base 代码块 / cards+table+board 三视图)。
// 用户 🔒 拍板把原型设计移植进真站(需求共创/UI交互重做-2026-07-25.md),Bases 骨架被本轮
// 实证推翻(构建期烘焙、筛选写死、读者侧点不动,千集不成立)→ 那些断言连同实现一起退役,
// 换成 C13a 已二次确认的 Gherkin(docs/user-stories.md C13a,四个场景)。
// 保留的老守卫:8 大类词表读取、已读压暗 pd-read(F1 回归)、首页隐藏框架自动日期。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { renderList, taxonomyCategories } from "../scripts/build-list.mjs";

// 样式按项目铁律全在 custom.scss(唯一视觉定制入口)→ 视觉规格的断言查那个文件,
// 结构的断言查 renderList 的输出。设计稿 = 需求共创/原型/style.css。
const scss = readFileSync(new URL("../assets/styles/custom.scss", import.meta.url), "utf8");

/** 造一集。renderList 真读这些字段,所以测试数据必须长得像真 meta/digest。 */
const ep = (over: any = {}) => ({
  meta: {
    id: "2026-07-19-x-netflix",
    date: "2026-07-19",
    title_zh: "Netflix 产品负责人谈 AI 时代",
    podcast: "Lenny's Podcast",
    guest_name: "Elizabeth Stone",
    guest_title: "Netflix 产品负责人",
    cover_image: { file: "cover.jpg", aspect: 1.0 },
    ...over.meta,
  },
  digest: {
    tldr: "一句话精华。",
    quotes: [{ zh: "可能是一个智能体编写了代码,而这并不是我的背景。", en: "So it can be that an agent wrote the code.", timestamp: "06:02" }],
    ...over.digest,
  },
  entities: over.entities ?? null,
});

/** 测试自带大类映射(不依赖 data/tag-taxonomy.json 里恰好有这个 slug) */
const cats = { "2026-07-19-x-netflix": ["组织与领导力", "职业与个人成长"] };
/** 封面存在性默认查磁盘;测试集是造的,注入「都在」 */
const opts = { categoriesBySlug: cats, hasCover: () => true };

/** 取出某集那张卡的 HTML(断言「卡里不含 X」时必须只看这张卡,不能看全页) */
function cardOf(md: string, slug: string): string {
  const i = md.indexOf(`data-slug="${slug}"`);
  if (i < 0) throw new Error(`没找到 ${slug} 的卡`);
  const start = md.lastIndexOf("<div class=\"card", i);
  const end = md.indexOf("</div><!--/card-->", i);
  if (end < 0) throw new Error("卡片缺 <!--/card--> 收尾标记(断言取不到边界)");
  return md.slice(start, end);
}

describe("taxonomyCategories · 词表读取(C10 保留)", () => {
  it("★ 8 个大类,顺序=词表登记顺序,含用户拍板的主题", () => {
    const c = taxonomyCategories();
    expect(c.length).toBe(8);
    expect(c).toContain("智能体");
    expect(c).toContain("创业与行业");
  });
});

describe("C13a 场景1 · 卡片承载判断所需的信息", () => {
  const md = renderList([ep()], opts);
  const card = cardOf(md, "2026-07-19-x-netflix");

  it("★★ Bases 痕迹清零:无 base 代码块、无 .bases-* 类名(DoD#3 的 grep 就是这条)", () => {
    expect(md).not.toContain("```base");
    expect(md).not.toContain("bases-");
  });

  it("★ 标题上卡,且是能点进集页的站内链接(Quartz SPA 认 internal)", () => {
    expect(card).toContain("Netflix 产品负责人谈 AI 时代");
    expect(card).toMatch(/<a class="[^"]*internal[^"]*" href="\.\/2026-07-19-x-netflix"/);
  });

  it("★ 一句金句原话上卡(取 digest.quotes[0].zh)", () => {
    expect(card).toContain("可能是一个智能体编写了代码");
  });

  it("★ 嘉宾行「人名 · 职位」", () => {
    expect(card).toContain("Elizabeth Stone");
    expect(card).toContain("Netflix 产品负责人");
    expect(card).toMatch(/class="who"/);
  });

  it("★ 大类标签上卡(两个大类两个 chip,各链到对应大类页)", () => {
    expect((card.match(/class="chip[^"]*"/g) || []).length).toBe(2);
    expect(card).toContain("组织与领导力");
    expect(card).toContain("职业与个人成长");
  });

  it("★ 封面上卡(有 cover_image → 真图,路径与 render.mjs 的 image: 同源)", () => {
    expect(card).toContain('src="/covers/2026-07-19-x-netflix.jpg"');
  });

  it("★ 按日期分组,组标是日期", () => {
    expect(md).toContain('<div class="dateh">2026-07-19</div>');
    expect(md.indexOf('class="dateh"')).toBeLessThan(md.indexOf('class="card'));
  });

  it("★ 多个日期 → 组按日期倒序,新的在前", () => {
    const two = renderList([ep(), ep({ meta: { id: "old", date: "2026-01-01" } })], opts);
    expect(two.indexOf("2026-07-19")).toBeLessThan(two.indexOf("2026-01-01"));
  });

  it("★ 同一天多集进同一组(一个 dateh 下两张卡)", () => {
    const same = renderList([ep(), ep({ meta: { id: "same-day", date: "2026-07-19" } })], opts);
    expect((same.match(/class="dateh"/g) || []).length).toBe(1);
    expect((same.match(/class="card/g) || []).length).toBe(2);
  });
});

describe("C13a 场景2 · 金句与嘉宾的呈现规格", () => {
  const md = renderList([ep()], opts);
  const card = cardOf(md, "2026-07-19-x-netflix");

  it("★★ 弯引号由样式生成、不写进内容(内容里一个弯引号都不许有)", () => {
    expect(card).not.toContain("“");
    expect(card).not.toContain("”");
    expect(scss).toMatch(/\.card \.q:before\s*\{\s*content:\s*"\\201C"/);
    expect(scss).toMatch(/\.card \.q:after\s*\{\s*content:\s*"\\201D"/);
  });

  it("★ 金句斜体(设计稿 L211/L361)", () => {
    expect(scss).toMatch(/font-style:\s*italic/);
  });

  it("★★ 嘉宾行不显示播客名(卡片范围内不出现 Lenny's Podcast)", () => {
    expect(card).not.toContain("Lenny's Podcast");
  });

  it("★★ 标题锁 2 行、金句锁 2 行(同宽下等高的实现前提;设计稿 L182/L183)", () => {
    expect((scss.match(/-webkit-line-clamp:\s*2/g) || []).length).toBeGreaterThanOrEqual(2);
    expect(scss).toMatch(/min-height:\s*2\.9em/); // 标题 2 行
    expect(scss).toMatch(/min-height:\s*3\.32em/); // 金句 2 行
  });

  it("★★ 卡片关键尺寸照设计稿抄,没被我改数(140×105 图 / gap 48 / padding 40)", () => {
    expect(scss).toMatch(/width:\s*140px/);
    expect(scss).toMatch(/height:\s*105px/);
    expect(scss).toMatch(/gap:\s*48px/);
    expect(scss).toMatch(/padding:\s*40px 0/);
  });

  it("★ 大类色不写内联 hex(暗色主题下才不塌:颜色走 custom.scss 的 --c-* 变量)", () => {
    expect(card).not.toMatch(/style="[^"]*#[0-9a-fA-F]{6}/);
    expect(card).toMatch(/data-cat="组织与领导力"/);
  });
});

describe("C13a 场景3 · 字段缺了也不难看(降级)", () => {
  it("★★ 有人名无职位 → 只显示人名,不出现孤立的「·」", () => {
    const md = renderList([ep({ meta: { guest_title: "" } })], opts);
    const card = cardOf(md, "2026-07-19-x-netflix");
    expect(card).toContain("Elizabeth Stone");
    expect(card).not.toContain("·");
  });

  it("★★ 无人名有职位 → 只显示职位,不出现孤立的「·」", () => {
    const md = renderList([ep({ meta: { guest_name: "" } })], opts);
    const card = cardOf(md, "2026-07-19-x-netflix");
    expect(card).toContain("Netflix 产品负责人");
    expect(card).not.toContain("·");
  });

  it("★★ 人名职位全空 → 整行不渲染,不留空行", () => {
    const md = renderList([ep({ meta: { guest_name: "", guest_title: "" } })], opts);
    const card = cardOf(md, "2026-07-19-x-netflix");
    expect(card).not.toContain('class="who"');
  });

  it("★★ 缺封面 → 主题色兜底块(不是碎图,不是空框)", () => {
    const md = renderList([ep({ meta: { cover_image: null } })], opts);
    const card = cardOf(md, "2026-07-19-x-netflix");
    expect(card).not.toContain("<img");
    expect(card).toMatch(/class="th fb"/);
    expect(card).toContain("组织与领导力"); // 兜底块写大类名
  });

  it("★ 降级卡与正常卡结构同高:.tx 与 .th 两块都在,标题/金句锁行不变", () => {
    const md = renderList([ep({ meta: { guest_name: "", guest_title: "", cover_image: null } })], opts);
    const card = cardOf(md, "2026-07-19-x-netflix");
    expect(card).toContain('class="tx"');
    expect(card).toMatch(/class="th/);
  });

  it("★ 无大类映射 → 不出 chip,也不崩", () => {
    const md = renderList([ep()], { ...opts, categoriesBySlug: {} });
    const card = cardOf(md, "2026-07-19-x-netflix");
    expect(card).not.toContain('class="chip');
    expect(card).toContain("Netflix 产品负责人谈 AI 时代");
  });

  it("★ 无金句 → 金句行不渲染,不留空引号", () => {
    const md = renderList([ep({ digest: { quotes: [] } })], opts);
    const card = cardOf(md, "2026-07-19-x-netflix");
    expect(card).not.toContain('class="q"');
  });

  it("★ 标题缺 title_zh → 走 C5.1 fallback 链(title_en → id),不出 undefined", () => {
    const md = renderList([ep({ meta: { title_zh: undefined, title_en: "The English Title" } })], opts);
    expect(md).toContain("The English Title");
    expect(md).not.toContain("undefined");
  });
});

describe("C13a 场景4 · 空站不塌", () => {
  it("★ 空站 → 友好空状态,无卡片", () => {
    const md = renderList([], opts);
    expect(md).toContain("还没有内容");
    expect(md).not.toContain('class="card');
    expect(md).not.toContain("```base");
  });
});

describe("C13a · 老守卫不许在换血中丢", () => {
  const md = renderList([ep()], opts);

  it("★★ 已读压暗保留:localStorage 键沿用 pd-read(老已读史不丢),存盘用 [...read](F1 回归守卫)", () => {
    expect(md).toContain("'pd-read'");
    expect(md).toContain("[...read]");
    expect(md).not.toContain("[].slice.call(read)");
  });

  it("★ 首页隐藏框架自动标题栏/自动日期(错误 Aug 2023 根除)", () => {
    expect(scss).toMatch(/body\[data-slug="index"\][\s\S]*\.page-header\s*\{\s*display:\s*none/);
  });

  it("★ 主题入口仍齐全:左栏 8 条 + 手机横滑条 8 条(词表驱动,🔒 #9 不降级)", () => {
    for (const c of taxonomyCategories()) expect(md).toContain(`${c}</span>`);
    expect((md.match(/class="cl internal"/g) || []).length).toBe(8);
    expect((md.match(/<div class="mhc">[\s\S]*?<\/div>/)?.[0].match(/<i>/g) || []).length).toBe(9); // 全部 + 8 大类
  });

  it("★ 无 163 标签墙残留", () => {
    expect(md).not.toContain("ep-tagbar");
    expect(md).not.toContain("更多标签");
  });
});

describe("C13a · 🔒 #20 卡片配图裁法(数据侧分流,视觉验收归 C13d)", () => {
  it("★ 近方图(0.9–1.15)打 face 类 → CSS 裁到脸", () => {
    const md = renderList([ep({ meta: { cover_image: { file: "cover.jpg", aspect: 1.0 } } })], opts);
    expect(cardOf(md, "2026-07-19-x-netflix")).toContain('class="face"');
  });

  it("★ 宽图(>1.15)不打 face 类 → 中心裁,不加变换", () => {
    const md = renderList([ep({ meta: { cover_image: { file: "cover.jpg", aspect: 1.778 } } })], opts);
    expect(cardOf(md, "2026-07-19-x-netflix")).not.toContain('class="face"');
  });

  it("★ 长宽比缺失 → 不打 face(宁可中心裁,不赌)", () => {
    const md = renderList([ep({ meta: { cover_image: { file: "cover.jpg" } } })], opts);
    expect(cardOf(md, "2026-07-19-x-netflix")).not.toContain('class="face"');
  });
});

describe("C13a · 封面以「文件真在」为准,不信 meta 的声明", () => {
  it("★★ meta 有 cover_image 但磁盘无 cover.jpg → 走兜底块,不出裂图(实测 47 声称 / 43 真有)", () => {
    const md = renderList([ep()], { categoriesBySlug: cats, hasCover: () => false });
    const card = cardOf(md, "2026-07-19-x-netflix");
    expect(card).not.toContain("<img");
    expect(card).toMatch(/class="th fb"/);
  });

  it("★ 默认口径就是查磁盘(不传 hasCover 时,造的测试集查不到 → 兜底块)", () => {
    const md = renderList([ep()], { categoriesBySlug: cats });
    expect(cardOf(md, "2026-07-19-x-netflix")).not.toContain("<img");
  });
});

describe("C13a · Quartz 骨架摘干净(首页独占版面,但不连坐搜索/深浅色)", () => {
  const md = renderList([ep()], opts);

  it("★★ 顶栏留了 .pd-acts 空槽,脚本把搜索/深浅色/阅读模式搬进来(🔒 #9/#2 不许降级)", () => {
    expect(md).toContain('<div class="pd-acts"></div>');
    expect(md).toContain("'.search','.darkmode','.readermode'");
    expect(md).toMatch(/acts\.appendChild\(el\)/);
  });

  it("★★ 搬运是幂等的(SPA 每次 nav 都会重跑,不能把节点搬丢或搬重)", () => {
    expect(md).toMatch(/el\.parentElement!==acts/);
    expect(md).toContain("document.addEventListener('nav', init)");
  });

  it("★★ 首页把框架栅格压成单列、两侧栏整块藏掉(否则三栏被挤变形)", () => {
    expect(scss).toMatch(/body\[data-slug="index"\][\s\S]*grid-template-columns:\s*1fr/);
    expect(scss).toMatch(/body\[data-slug="index"\][\s\S]*\.left\.sidebar,\s*\n?\s*\.right\.sidebar\s*\{\s*display:\s*none/);
  });
});
