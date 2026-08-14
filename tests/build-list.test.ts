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
import { renderList, taxonomyCategories, scriptBlock } from "../scripts/build-list.mjs";

// 样式按项目铁律全在 custom.scss(唯一视觉定制入口)→ 视觉规格的断言查那个文件,
// 结构的断言查 renderList 的输出。设计稿 = 设计稿/style.css。
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

  // [standard-change: 用户 2026-07-27 明文「把今天的设计稿写成代码」] 标题链接现在还带
  // target=_blank / data-router-ignore(C13f「点一条内容开新标签页」)→ 断言放宽到「有 internal
  // 且 href 对」,不再钉死属性顺序;新标签页那几个属性由 C13f 自己的用例守。
  it("★ 标题上卡,且是能点进集页的站内链接(Quartz SPA 认 internal)", () => {
    expect(card).toContain("Netflix 产品负责人谈 AI 时代");
    expect(card).toMatch(/<a class="[^"]*internal[^"]*"[^>]*href="\.\/2026-07-19-x-netflix"/);
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

describe("入库时间排序(用户 2026-08-09:最新按 added 入库日分组,不是内容原始日期)", () => {
  const o = { categoriesBySlug: {}, hasCover: () => true };

  it("★ 有 added → 组标用 added(入库日),不用 meta.date(内容日)", () => {
    const md = renderList([ep({ meta: { id: "talk-x", date: "2026-06-05", added: "2026-08-09" } })], o);
    expect(md).toContain('<div class="dateh">2026-08-09</div>');
    expect(md).not.toContain('<div class="dateh">2026-06-05</div>');
  });

  it("★★ 旧视频今天入库 → 冒到顶部,压过内容更新但入库更早的集(正是本次要解的病)", () => {
    const freshTalk = ep({ meta: { id: "fresh", date: "2026-06-01", added: "2026-08-09" } }); // 旧 YouTube 视频,今天入库
    const olderAdded = ep({ meta: { id: "older", date: "2026-08-08", added: "2026-08-08" } }); // 内容更新,但昨天入库
    const md = renderList([olderAdded, freshTalk], o);
    expect(md.indexOf("2026-08-09")).toBeLessThan(md.indexOf("2026-08-08"));
    expect(md.indexOf('data-slug="fresh"')).toBeLessThan(md.indexOf('data-slug="older"'));
  });

  it("★ 缺 added 回落 meta.date(存量集没回填也不塌)", () => {
    const md = renderList([ep({ meta: { id: "legacy", date: "2026-07-19", added: undefined } })], o);
    expect(md).toContain('<div class="dateh">2026-07-19</div>');
  });

  it("★ added 是完整时间戳时只取前 10 位日期段分组", () => {
    const md = renderList([ep({ meta: { id: "ts", date: "2026-06-01", added: "2026-08-09T14:30:00.000Z" } })], o);
    expect(md).toContain('<div class="dateh">2026-08-09</div>');
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

  // [standard-change: 用户 2026-07-27 设计稿第十批 #1/#2] 原口径是「标题/金句各锁死 2 行」
  // (靠 min-height 撑出等高)。用户实际看到 1 行的稿子下面白空一截,明说「空隙应该是自适应的」
  // → 新口径 = 按实际行数长、只在超上限时截断(标题 ≤2、金句 ≤3),等高改由 .card 的
  // min-height 保证(缩略图那侧不塌)。等高断言移交 C13f 的用例。
  it("★★ 标题 ≤2 行、金句 ≤3 行,不再靠锁死高度撑等高(设计稿第十批 #1/#2)", () => {
    expect((scss.match(/-webkit-line-clamp:\s*2/g) || []).length).toBeGreaterThanOrEqual(1);
    expect((scss.match(/-webkit-line-clamp:\s*3/g) || []).length).toBeGreaterThanOrEqual(1);
    expect(scss).toMatch(/\.card \{[\s\S]*?min-height:\s*calc\(105px \+ 80px\)/);
  });

  // [standard-change: 用户 2026-07-27 设计稿第十一批 #1] padding 由 `40px 0` 变 `40px 20px`
  // (hover 别贴脸,左右各留呼吸再用负 margin 抵回)→ 上下 40 不变,断言改看上下值。
  it("★★ 卡片关键尺寸照设计稿抄,没被我改数(140×105 图 / gap 48 / 上下 padding 40)", () => {
    expect(scss).toMatch(/width:\s*140px/);
    expect(scss).toMatch(/height:\s*105px/);
    expect(scss).toMatch(/gap:\s*48px/);
    expect(scss).toMatch(/\.card \{[\s\S]*?padding:\s*40px 20px/);
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

describe("顶栏 · pd-acts 不得被 Markdown 当成缩进代码块(空 mtitle 回归)", () => {
  // 线上曾在站名旁漏出一段 <pre><code>&lt;div class="pd-acts"&gt; —— 首页/必读页 mtitle 为空时,
  // 原 topBar 那行塌成「只有缩进空格的空行」,截断 HTML 块,后面缩进 4 空格的 pd-acts 被当代码块。
  // 连带:.pd-acts 不再是真元素 → 搬 Quartz 搜索/深浅色的 adopt() 取不到 → 搜索浮层样式失效。
  const md = renderList([ep()], opts);
  it("★★ topBar 拼成单行:pd-topin 与 pd-acts 同一行(空行截断 → 代码块的根因被焊死)", () => {
    const line = md.split("\n").find((l) => l.includes("pd-topin"));
    expect(line).toBeDefined();
    expect(line).toContain('<div class="pd-acts"></div>');
  });
  it("★★ 首页 md 里绝无「缩进 4+ 空格 + 裸 pd-acts」的行(即被当代码块的那个形态)", () => {
    expect(md).not.toMatch(/\n {4,}<div class="pd-acts">/);
    expect(md).not.toContain("&lt;div class=&quot;pd-acts&quot;");
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

  // [standard-change: 用户 2026-07-27 设计稿第九批 #3] 深浅色从顶栏挪进左栏 →
  // 顶栏槽只搬搜索(阅读模式 2026-08-01 用户拍板摘掉),深浅色搬进 .pd-themesw。搬节点不重写(🔒 #9/#2)。
  it("★★ 顶栏留了 .pd-acts 空槽,脚本把搜索搬进来;阅读模式不搬(🔒 #9/#2 不许降级)", () => {
    expect(md).toContain('<div class="pd-acts"></div>');
    expect(md).toMatch(/\['\.search'\]\.forEach/);
    expect(md).not.toContain(".readermode");
    expect(md).toContain("grab('.darkmode', sw || acts)");
    expect(md).toMatch(/host\.appendChild\(el\)/);
  });

  it("★★ 搬运是幂等的(SPA 每次 nav 都会重跑,不能把节点搬丢或搬重)", () => {
    expect(md).toMatch(/el\.parentElement!==host/);
    expect(md).toContain("document.addEventListener('nav', init)");
  });

  it("★★ 首页把框架栅格压成单列、两侧栏整块藏掉(否则三栏被挤变形)", () => {
    expect(scss).toMatch(/body\[data-slug="index"\][\s\S]*grid-template-columns:\s*1fr/);
    expect(scss).toMatch(/body\[data-slug="index"\][\s\S]*\.left\.sidebar,\s*\n?\s*\.right\.sidebar\s*\{\s*display:\s*none/);
  });
});

describe("C13a · 日期组标兜底不许出垃圾字符串(GLM 20260726-024[2] 蹭到的潜在洞)", () => {
  it("★★ 缺 date 且 id 前缀不是日期 → 组标是「日期未知」,不是 id 的前 10 个字符", () => {
    const md = renderList([ep({ meta: { id: "2026-singju-openclaw-80apps", date: undefined } })], {
      categoriesBySlug: {},
      hasCover: () => false,
    });
    expect(md).toContain('<div class="dateh">日期未知</div>');
    expect(md).not.toContain("2026-singj<");
  });

  it("★ 缺 date 但 id 前缀是日期 → 仍用 id 前缀当组标(老行为不变)", () => {
    const md = renderList([ep({ meta: { id: "2026-07-19-x-netflix", date: undefined } })], {
      categoriesBySlug: {},
      hasCover: () => false,
    });
    expect(md).toContain('<div class="dateh">2026-07-19</div>');
  });
});

// [standard-change: 用户 2026-08-08 明文授权 · ADR 0019] 手机端搜索由「摊开的真输入框」
// 改为「顶栏右上角图标 → Quartz 原生全屏搜索」(覆盖 🔒 US-3 的手机形态,搜索能力不降级)。
// 原「摊开搜索 / 下拉覆写 / wireSearch 转发」的守卫连同实现一起退役,换成下面的图标形态守卫。
describe("手机端搜索改右上角图标(ADR 0019 覆盖 🔒 US-3 手机形态)", () => {
  const md = renderList([ep()], opts);

  it("★★ 手机首页不再有摊开的大搜索框(.mhs / .mhq 都拿掉了)", () => {
    expect(md).not.toContain('class="mhs"');
    expect(md).not.toContain('class="mhq"');
  });

  it("★★ 首页/必读页把 Quartz 原生搜索按钮放成右上角图标(点开=Quartz 全屏搜索,索引不降级)", () => {
    // 更具体的选择器把全局的 display:none 顶掉,只在这两页显式放出来
    expect(scss).toMatch(/body\[data-slug="index"\] \.pd \.pd-acts \.search \.search-button[\s\S]*?width: 40px/);
    expect(scss).toMatch(/body\[data-slug="must-read"\] \.pd \.pd-acts \.search \.search-button/);
  });

  it("★★ 只藏顶栏那个搜索按钮,不许藏整个 .search(结果浮层是它的子节点,会被连坐)", () => {
    // 实测过的坑:藏 .pd-acts .search 时,结果在 DOM 里、active 也加上了,屏幕上却什么都没有
    expect(scss).toMatch(/\.pd-acts \.search \.search-button \{ display: none/);
    expect(scss).not.toMatch(/\.pd-acts \.search \{ display: none/);
    expect(scss).not.toMatch(/\.pd-acts \.darkmode \{ display: none/);
  });

  it("★★ 退役旧的「摊开框下拉」覆写:不再藏 Quartz 原生模态自己的输入框(否则全屏搜索没法打字)", () => {
    expect(scss).not.toMatch(/\.search-container \.search-bar \{ display: none/);
    expect(scss).not.toMatch(/\.search-container \.search-space \{[\s\S]*?margin-top: 118px/);
  });

  it("★★ 退役 wireSearch 转发脚本(摊开框没了,改点原生图标开全屏搜索)", () => {
    expect(md).not.toContain("function wireSearch");
    expect(md).not.toContain("function forward()");
  });
});

describe("C13a · 首页内联脚本也不许含空行(同一个 Markdown 陷阱)", () => {
  it("★★★ 首页脚本区零空行(现在是侥幸没有,加测试焊死)", () => {
    const md = renderList([ep()], opts);
    const script = md.slice(md.indexOf("<script>"));
    expect(script).not.toMatch(/\n\s*\n/);
  });
});

// ══════════════════════════════════════════════════════════════════════════
// C13f · PC 端第九–十三批批注落地(2026-07-27)
// Gherkin:docs/user-stories.md「C13f」13 个场景。设计稿真相源 = 设计稿/style.css
// 第九–十三批段落。二次确认豁免见 drift #36(用户明示「一直执行」)。
// ══════════════════════════════════════════════════════════════════════════

describe("C13f · 顶栏与两侧栏对齐,且只剩一条必要的线", () => {
  const md = renderList([ep()], opts);

  it("★★ 顶栏与三栏共用同一套宽度变量(不再各写各的 max-width,否则对不齐)", () => {
    // 变量必须挂 :root —— 写在 .pd 里会把详情页 body 上那套窄值覆盖掉(实测差 198px)
    expect(scss).toMatch(/:root \{\s*--pd-shellw:\s*1180px;\s*--pd-railw:\s*290px;/);
    // 顶栏内容宽 = shell 宽,左右内边距归零 → 两者边缘同一条竖线
    expect(scss).toMatch(/\.pd-topin \{[\s\S]*?max-width:\s*var\(--pd-shellw\)/);
    expect(scss).toMatch(/\.pd-topin \{[\s\S]*?padding:\s*12px 0/);
  });

  it("★★ 顶栏底下没有通栏分割线(第十一批 #3:顶上三条线太密)", () => {
    expect(scss).toMatch(/\.pd-top \{[\s\S]*?border-bottom:\s*0/);
  });

  it("★★ 站名前面有 logo 位,缺图不裂(onerror 摘掉 img → 退回引号标记)", () => {
    expect(md).toContain('<span class="mk">');
    expect(md).toContain('src="/logos/site.png"');
    // 兜底不走行内 onerror(SPA 换页会冲掉那一轮结果),走共用脚本、每次 nav 重跑
    expect(md).toContain("querySelectorAll('.pd .lg img, .pd .mk img')");
    expect(md).toContain("im.complete && im.naturalWidth===0");
    expect(scss).toMatch(/\.mk:has\(img\):before \{\s*content:\s*none/); // 有图就撤掉兜底引号
  });

  it("★★ 站名是衬线字(与正文黑体拉开层级,第十一批 #2)", () => {
    const b = scss.slice(scss.indexOf(".pd-top .b {"));
    expect(b.slice(0, 400)).toMatch(/Songti SC|serif/);
  });
});

describe("C13f · 搜索是长条框且跟右栏对齐(外观改,搜索本身不降级)", () => {
  it("★★ 长条框宽度 = 右栏内容宽(--pd-railw 减去右栏左内边距 24px)", () => {
    expect(scss).toMatch(/\.pd-acts \.search-button \{[\s\S]*?width:\s*calc\(var\(--pd-railw\) - var\(--pd-railpad\)\)/);
  });

  it("★★★ 不许自建搜索:仍然是搬 Quartz 的 .search 节点(🔒 #9 + C13a 定的手法)", () => {
    const md = renderList([ep()], opts);
    expect(md).toContain("'.search'");
    expect(md).not.toContain("search-index.json"); // 原型那套自建索引不许混进来
  });
});

describe("C13f · 中栏拉宽,两侧栏往两边推(第九批 #1)", () => {
  it("★★ 桌面 210 / 680 / 290,整体 1180", () => {
    expect(scss).toMatch(/\.pd-shell \{[\s\S]*?grid-template-columns:\s*210px minmax\(0, 680px\) 290px/);
    expect(scss).toMatch(/\.pd-shell \{[\s\S]*?max-width:\s*var\(--pd-shellw\)/);
  });

  it("★★ 窄电脑(1024–1279)172 / 556 / 240,整体 968 —— 968 < 1024,不会顶出横向滚动", () => {
    expect(scss).toMatch(/@media \(max-width: 1279px\) \{[\s\S]*?grid-template-columns:\s*172px minmax\(0, 556px\) 240px/);
    expect(scss).toMatch(/@media \(max-width: 1279px\) \{\s*:root \{ --pd-shellw: 968px/);
  });
});

describe("C13f · 日期分组标题说人话(今天 / 昨天 / 日期)", () => {
  const md = renderList([ep()], opts);

  it("★★ 构建期仍写死日期原文(它是可复现产物),今天/昨天在读者浏览器里换", () => {
    expect(md).toContain('<div class="dateh">2026-07-19</div>');
    expect(md).toContain("'今天'");
    expect(md).toContain("'昨天'");
  });

  it("★★★ 只认整日期,不许把「2026-07-1」这种前缀也换掉(比较用完整字符串)", () => {
    expect(md).toMatch(/querySelectorAll\('\.pd \.dateh'\)/);
    expect(md).toMatch(/textContent\.trim\(\)/);
    expect(md).toContain("if(map[t])"); // 整串命中才换,不做 startsWith
  });
});

describe("C13f · 卡片文字按实际行数长(第十批 #1/#2)", () => {
  it("★★★ 标题与金句都不再锁死最小高度(1 行的稿子下面不许留空一截)", () => {
    const t = scss.slice(scss.indexOf(".card .t {"), scss.indexOf(".card .t a"));
    const q = scss.slice(scss.indexOf(".card .q {"), scss.indexOf(".card .q:before"));
    expect(t).not.toMatch(/min-height/);
    expect(q).not.toMatch(/min-height/);
  });

  it("★★ 标题 ≤2 行、金句 ≤3 行,超出才截断", () => {
    const t = scss.slice(scss.indexOf(".card .t {"), scss.indexOf(".card .t a"));
    const q = scss.slice(scss.indexOf(".card .q {"), scss.indexOf(".card .q:before"));
    expect(t).toMatch(/-webkit-line-clamp:\s*2/);
    expect(q).toMatch(/-webkit-line-clamp:\s*3/);
  });

  it("★★ 卡片自己仍有最小高度(缩略图那侧不塌)", () => {
    expect(scss).toMatch(/\.card \{[\s\S]*?min-height:\s*calc\(105px \+ 80px\)/);
  });
});

describe("C13f · hover 不贴脸(第十一批 #1)", () => {
  it("★★★ 左右各 20px 呼吸,用负 margin 抵回去 → 版面位置一个像素不动", () => {
    const c = scss.slice(scss.indexOf(".card {"), scss.indexOf(".grid > .card:last-child"));
    expect(c).toMatch(/padding:\s*40px 20px/);
    expect(c).toMatch(/margin:\s*0 -20px/);
  });

  it("★★ hover 是整卡清晰响应(用户 2026-08-14 改:不再是只有标题变红):底色 --B2 + 轻投影浮起 + 分隔线让位", () => {
    // C13f 第十一批#1 原做「柔和底色 --B1、不要描边投影」,但 --B1(#f7f7f9)离白只差 8/255 几乎看不出,
    // 视觉上只剩标题红 → 用户 2026-08-14 明文要「hover 是整个卡片」。底色提到 --B2 + 设计稿(style.css:96)
    // 那款轻投影(0 2px 12px/0.06,不是当年压在文字边上的硬描边),border-bottom 让位免得高亮被切开。
    const h = scss.slice(scss.indexOf(".card:hover {"), scss.indexOf(".card:hover .t"));
    expect(h).toMatch(/background:\s*var\(--B2\)/);
    expect(h).toMatch(/box-shadow:\s*0 2px 12px/);
    expect(h).toMatch(/border-bottom-color:\s*transparent/);
  });

  it("★★★ 窄屏收到 12px —— 手机端 .pd-mid 左右内边距只有 16px,-20px 会顶出屏幕", () => {
    expect(scss).toMatch(/@media \(max-width: 1023px\) \{[\s\S]*?\.card \{[\s\S]*?margin:\s*0 -12px/);
  });
});

describe("C13f · 署名行里公司的份量略高于人名(第十二批 #2)", () => {
  it("★★ 人名常规字重中灰、公司职位更深更重(原来正好反着)", () => {
    const w = scss.slice(scss.indexOf(".card .who {"), scss.indexOf(".card .tags {"));
    expect(w).toMatch(/color:\s*var\(--B6\)/);
    expect(w).toMatch(/\.role \{[\s\S]*?color:\s*var\(--B7\)/);
    expect(w).toMatch(/\.role \{[\s\S]*?font-weight:\s*500/);
  });
});

describe("C13f · 右栏按公司是带 logo 的卡片(第十批 #4)", () => {
  const withCo = ep({
    entities: { entities: [{ type: "company", file: "Anthropic", name: "Anthropic" }] },
  });
  // 「≥3 集」是上线口径 → 造 3 集同公司才会出现在按公司里
  const three = [0, 1, 2].map((i) =>
    ep({
      meta: { ...withCo.meta, id: `2026-07-1${i}-x`, date: `2026-07-1${i}` },
      entities: withCo.entities,
    }),
  );
  const md = renderList(three, {
    categoriesBySlug: Object.fromEntries(three.map((e) => [e.meta.id, ["组织与领导力"]])),
    hasCover: () => true,
  });

  it("★★ 每一条是卡片:logo 位 + 公司名 + 集数", () => {
    expect(md).toMatch(/<a class="cc[^"]*"[^>]*>/);
    expect(md).toContain('class="lg"');
    expect(md).toContain('class="nm"');
    expect(md).toContain('class="ct"');
  });

  it("★★★ 有 logo 用图、没有退回首字母,不出裂图(用户要手动喂图,缺是常态)", () => {
    expect(md).toContain('src="/logos/anthropic.png"');
    expect(md).toContain('data-n="A"'); // 首字母底板一直画着,图失败就摘掉 <img> 露出它
    expect(md).toContain("im.addEventListener('error', kill, {once:true})");
    expect(md).not.toContain('loading="lazy"'); // 28px 的小图懒加载只会拖慢兜底出现
    expect(scss).toMatch(/\.cc \.lg:before \{\s*content:\s*attr\(data-n\)/);
  });

  it("★★ 右栏不再有「随便看看」这一块(第十批 #5)", () => {
    expect(md).not.toContain("随便看看");
    expect(md).not.toContain("随便看一集");
  });
});

describe("C13f · 右栏跟着页面一起滚,左栏仍吸顶(第十批 #3)", () => {
  it("★★ 右栏取消吸顶,连带取消「最高一屏 + 内部滚动」(那是为吸顶服务的)", () => {
    // .pd-right 出现三次(padding / 行为 / 手机隐藏),要看的是「行为」那一块
    expect(scss).toMatch(/\.pd-right \{\s*position:\s*static;\s*max-height:\s*none;\s*overflow-y:\s*visible/);
  });

  it("★★ 左栏仍是 sticky(上一轮批注定的,本片不动)", () => {
    expect(scss).toMatch(/\.pd-left \{[\s\S]*?position:\s*sticky/);
  });
});

describe("C13f · 深浅色开关从顶栏挪进左栏(第九批 #3)", () => {
  const md = renderList([ep()], opts);

  it("★★★ 深浅色搬进左栏、坐在「关于本站」上面;搜索/阅读模式仍留顶栏", () => {
    const left = md.slice(md.indexOf('class="pd-left"'), md.indexOf('class="pd-mid"'));
    expect(left.indexOf('class="pd-themesw"')).toBeGreaterThan(-1);
    expect(left.indexOf('class="pd-themesw"')).toBeLessThan(left.indexOf('class="about"'));
    expect(md).toContain("grab('.darkmode', sw || acts)");
    expect(md).toMatch(/\['\.search'\]\.forEach/);
    expect(md).not.toContain(".readermode");
    // 搬节点不重写:🔒 #2 亮暗双模式的行为在 Quartz 手里
    expect(md).not.toMatch(/localStorage\.setItem\('theme'/);
  });

  it("★★ 搬运幂等(SPA 每次 nav 都重跑,不能搬丢或搬重)", () => {
    expect(md).toMatch(/parentElement!==/);
  });

  it("★★ 左栏那一行有文字标签「深色模式」,不是光秃秃一个图标", () => {
    expect(scss).toMatch(/\.pd-themesw/);
  });
});

describe("C13f · 点一条内容开新标签页", () => {
  const md = renderList([ep()], opts);

  it("★★★ 单集链接带 target=_blank + data-router-ignore —— 只写 target 会被 Quartz SPA 拦下", () => {
    // spa.inline.ts 的 target=_blank 判定只看事件目标本身,点到 <a> 里的子元素就漏;
    // data-router-ignore 查的是 closest('a').dataset,任何子元素点下去都可靠。
    const card = cardOf(md, "2026-07-19-x-netflix");
    expect(card).toMatch(/<a[^>]*target="_blank"[^>]*>/);
    expect(card).toMatch(/data-router-ignore/);
    expect(card).toMatch(/rel="noopener"/);
  });

  it("★★ 左右栏的主题 / 公司 / 播客导航不加,仍在当前窗口跳", () => {
    const left = md.slice(md.indexOf('class="pd-left"'), md.indexOf('class="pd-mid"'));
    expect(left).not.toContain("_blank");
  });
});

describe("C13f · 搜索框必须贴顶栏最右(否则跟右栏对不齐)", () => {
  it("★★★ 用 order 把 .search 排到 .pd-acts 最后 —— 阅读模式图标在它后面会把它左推 28px", () => {
    expect(scss).toMatch(/\.pd-acts \.search \{[^}]*order:\s*2/);
    expect(scss).toMatch(/\.pd-acts \.search \{[^}]*margin-left:\s*auto/);
  });
});

describe("C13f · 站名 logo 不许被 flex 算成宽度 0", () => {
  it("★★★ .mk:has(img) img 的高度写死像素,不用 100%(百分比会绕成循环,实测宽度塌成 0)", () => {
    const r = scss.slice(scss.indexOf(".mk:has(img) img"));
    expect(r.slice(0, 200)).toMatch(/height:\s*28px/);
    expect(r.slice(0, 200)).not.toMatch(/height:\s*100%/);
  });
});

describe("C13f · 深色模式那一行:图标与文字不许重叠", () => {
  it("★★★ 不用 flex 排 —— Quartz 的两个图标是绝对定位的,flex 排不到,文字会压在图标上", () => {
    const r = scss.slice(scss.indexOf(".pd-themesw .darkmode {"));
    expect(r.slice(0, 420)).toMatch(/position:\s*relative/);
    expect(r.slice(0, 420)).not.toMatch(/display:\s*flex/);
    expect(r.slice(0, 420)).toMatch(/padding:[^;]*40px/); // 左边给图标让位
  });
});

describe("C13f · 深浅色开关任何屏宽都得有入口(🔒 #2 回归防护)", () => {
  const md = renderList([ep()], opts);

  it("★★★ 左栏在窄屏是整块 display:none —— 槽看不见时必须退回顶栏,不能连开关一起消失", () => {
    // 判可见性要看槽的父容器 —— 槽自己是空的、被 :empty 藏着,量自己永远是 0
    expect(md).toContain("shown(slots[i].parentElement)");
    expect(md).not.toContain("slots[i].offsetParent");
    expect(md).toContain("grab('.darkmode', sw || acts)");
    // 兜底目标必须是顶栏那个槽(它在窄屏是显示的)
    expect(scss).not.toMatch(/@media \(max-width: 1023px\)[\s\S]*?\.pd-acts \{[^}]*display:\s*none/);
  });

  it("★★ 跨断点缩放要把开关搬到当前看得见的位置(SPA 只在 nav 重跑,resize 不会)", () => {
    expect(md).toMatch(/addEventListener\('resize'/);
    expect(md).toContain("setTimeout(adopt, 150)");
  });
});

describe("C13f · 站名 logo 不许被 Quartz 的 content-visibility 算成宽度 0", () => {
  it("★★★ Quartz base 给所有 img 设了 content-visibility:auto,这里必须显式改回 visible", () => {
    const r = scss.slice(scss.indexOf(".mk:has(img) img {"));
    expect(r.slice(0, 500)).toMatch(/content-visibility:\s*visible/);
  });
});

describe("C13f · 公司 logo 底衬不许硬编码白(暗色下会是白方块)", () => {
  it("★★ .cc .lg img 的底色走变量,不写死 #fff", () => {
    const r = scss.slice(scss.indexOf(".cc .lg img"));
    expect(r.slice(0, 200)).toMatch(/background:\s*var\(--B0\)/);
    expect(r.slice(0, 200)).not.toMatch(/background:\s*#fff/);
  });
});

// ── C24 · 卡片无限滚动(软加载)· scriptBlock 里的 io 模块结构守卫 ──
// 行为已在本地 build 浏览器实测(初批 24 / 大类页筛选重分批 / 首页+大类页手机返回还原);
// 这里钉住关键机制不被后续改动悄悄拆掉(滚动露出因无头浏览器 IntersectionObserver 不 fire,
// 逻辑靠初始/还原多值实测覆盖,observer 是标准写法)。
describe("C24 · 卡片无限滚动 · io 模块结构", () => {
  const sb = scriptBlock();

  it("★★★ 折叠靠 .io-fold 类(不是删节点/不占 style.display)—— 与大类页 filter 的 display 分层不打架", () => {
    expect(sb).toContain("classList.toggle('io-fold'");
    // 只对「超出当前批」的卡加类:i>=ioState.shown
    expect(sb).toMatch(/classList\.toggle\('io-fold',\s*i>=ioState\.shown\)/);
  });

  it("★★★ 初始一批 = IO_BATCH=24;哨兵 + IntersectionObserver 滚到底递增", () => {
    expect(sb).toContain("IO_BATCH=24");
    expect(sb).toContain("io-sentinel");
    expect(sb).toContain("IntersectionObserver");
    expect(sb).toMatch(/ioState\.shown\+=IO_BATCH/);
    // 哨兵始终移到容器末尾(filter 会 appendChild 重排卡)
    expect(sb).toContain("c.appendChild(s)");
  });

  it("★★★ 暴露 window.__ioRecompute 供大类页 filter 筛后重新分批", () => {
    expect(sb).toContain("window.__ioRecompute=ioRecompute");
  });

  it("★★★ 首页日期头联动:整组卡都折叠时,日期头也折叠(不留光杆空日期头)", () => {
    // 对每个 .dateh 看它后面那组 .grid 有没有露出的卡,没有就折叠头
    expect(sb).toContain(".dateh");
    expect(sb).toMatch(/h\.classList\.toggle\('io-fold',\s*!any\)/);
  });

  it("★★★ 手机端离页存位 / 返回还原:sessionStorage 'ioret:' 键,且存位仅限窄屏", () => {
    expect(sb).toContain("ioret:");
    // 存位守窄屏(PC 开新标签天然不需)
    expect(sb).toMatch(/matchMedia\('\(max-width:1023px\)'\)/);
    // 还原后清键(一次性)
    expect(sb).toContain("sessionStorage.removeItem('ioret:'");
  });

  it("★★★ 双重 init 不打回第一批:同路径保留 ioLastShown(治「脚本直调 + Quartz nav 各跑一次」)", () => {
    // ioInitialShown 里有「同路径且上次露出>一批 → 沿用」的分支
    expect(sb).toMatch(/ioLastPath===location\.pathname\s*&&\s*ioLastShown>IO_BATCH/);
    // 同节点再 init 只重算、不重置
    expect(sb).toMatch(/ioState\.c===c\)\s*\{\s*ioApply\(\);\s*return;/);
  });

  it("★★ 太老的浏览器(无 IntersectionObserver)不折叠 = 全显示(优雅降级)", () => {
    expect(sb).toMatch(/if\(!\('IntersectionObserver' in window\)\)\s*return/);
  });

  it("★★★ 无 JS 全显示:renderList 静态产物里卡片不带 io-fold 类(SEO 不降级)", () => {
    const md = renderList([ep(), ep({ meta: { id: "b", date: "2026-06-01" } })]);
    expect(md).not.toMatch(/class="[^"]*\bio-fold\b/);
  });
});

describe("C24 · custom.scss 折叠规则", () => {
  it("★★★ .io-fold(卡与日期头)display:none;.io-sentinel 存在", () => {
    const r = scss.slice(scss.indexOf("io-fold"));
    expect(r.slice(0, 160)).toMatch(/\.card\.io-fold[\s\S]*display:\s*none/);
    expect(r).toMatch(/\.dateh\.io-fold/);
    expect(scss).toContain(".io-sentinel");
  });
});
