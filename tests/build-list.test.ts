// C10 · 列表页(Bases 三视图首页)真业务测试。只调被测函数。
// 2026-07-24 首页改版(需求共创/首页交互改版.md):手搓卡片墙/标签条退役,
// 首页 = 8 大类速览 + ```base 代码块(最新卡片/全部表格/按主题看板)+ 已读压暗脚本。
import { describe, it, expect } from "vitest";
import { renderList, taxonomyCategories } from "../scripts/build-list.mjs";

// 造一集(renderList 只用集数判空;数据由 Bases 构建期从 frontmatter 现查)
const ep = (over: any = {}) => ({
  meta: { id: "2026-07-08-x", ...over.meta },
  digest: { tldr: "一句话精华。", ...over.digest },
  entities: over.entities ?? null,
});

describe("taxonomyCategories · 词表读取", () => {
  it("★ 8 个大类,顺序=词表登记顺序,含用户拍板的主题", () => {
    const cats = taxonomyCategories();
    expect(cats.length).toBe(8);
    expect(cats).toContain("智能体");
    expect(cats).toContain("创业与行业");
  });
});

describe("renderList · 首页 markdown(Bases 三视图)", () => {
  const md = renderList([ep()]);

  it("★ 含 base 代码块,且只筛 type=episode 的集页", () => {
    expect(md).toContain("```base");
    expect(md).toContain('note.type == "episode"');
  });

  it("★ 三个视图页签:最新(卡片)/全部(表格)/按主题(看板)", () => {
    expect(md).toMatch(/type: cards\n\s+name: 最新/);
    expect(md).toMatch(/type: table\n\s+name: 全部/);
    expect(md).toMatch(/type: board\n\s+name: 按主题/);
  });

  it("★ 三个视图全部按日期倒序(sort date DESC 出现 3 次)", () => {
    expect(md.match(/property: note\.date\n\s+direction: DESC/g)?.length).toBe(3);
  });

  it("★ 卡片视图带字段:日期/播客/时长/简介 + 封面色条(cover)", () => {
    expect(md).toContain("image: note.cover");
    for (const k of ["note.date", "note.podcast", "note.duration", "note.description"]) expect(md).toContain(k);
  });

  it("★ 看板按主类分组(note.category)", () => {
    expect(md).toMatch(/groupBy:\n\s+property: note\.category/);
  });

  it("★ 8 大类速览行:每个大类一个链接,链到标签页", () => {
    for (const c of taxonomyCategories()) expect(md).toContain(`#${c}</a>`);
    expect((md.match(/class="home-cat internal"/g) || []).length).toBe(8);
  });

  it("★ 无 163 标签墙残留:不再有旧标签条/更多标签折叠", () => {
    expect(md).not.toContain("ep-tagbar");
    expect(md).not.toContain("更多标签");
  });

  it("★★ 已读压暗保留:localStorage 键沿用 pd-read(老已读史不丢),存盘用 [...read](F1 回归守卫)", () => {
    expect(md).toContain("'pd-read'");
    expect(md).toContain("[...read]");
    expect(md).not.toContain("[].slice.call(read)");
  });

  it("★ 首页隐藏框架自动日期/阅读时长(错误 Aug 2023 根除)", () => {
    expect(md).toContain(".content-meta{display:none}");
  });
});

describe("renderList · 空站(US-1a 异常)", () => {
  it("★ 空站 → 友好空状态,无 base 代码块", () => {
    const md = renderList([]);
    expect(md).toContain("还没有内容");
    expect(md).not.toContain("```base");
  });
});
