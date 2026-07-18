// C5 · 列表页(单集卡流 + 标签 + 排序 + 空站)真业务测试。只调被测函数。
import { describe, it, expect } from "vitest";
import { cardData, renderList } from "../scripts/build-list.mjs";

// 造一集(默认全字段;可覆盖 meta/digest/entities)
const ep = (over: any = {}) => ({
  meta: {
    id: "2026-07-08-x",
    title_zh: "标题X",
    podcast: "Latent Space",
    date: "2026-07-08",
    source_url: "https://x.example",
    guests: ["Foo"],
    guest_titles: { Foo: "CTO" },
    ...over.meta,
  },
  digest: { tldr: "一句话精华。", tags: ["智能体", "沙箱"], ...over.digest },
  entities: over.entities ?? null,
});

describe("cardData · 卡片字段抽取(可溯源到 meta/digest)", () => {
  it("★ 从 meta/digest 抽齐 US-1 数据契约字段", () => {
    const c = cardData(ep());
    expect(c.slug).toBe("2026-07-08-x");
    expect(c.title).toBe("标题X");
    expect(c.quote).toBe("一句话精华。"); // 一句精华语录=TLDR
    expect(c.date).toBe("2026-07-08");
    expect(c.podcast).toBe("Latent Space");
    expect(c.tags).toEqual(["智能体", "沙箱"]);
  });
  it("★ 有 entities:嘉宾取 primary guest、身份取 guest_titles、tags 优先 entities.tags", () => {
    const c = cardData(
      ep({
        meta: { id: "e", title_zh: "t", date: "2026-01-01", podcast: "p", guest_titles: { "Akshat Bubna": "Modal CTO" } },
        entities: { entities: [{ type: "person", role: "guest", primary: true, name: "Akshat Bubna" }], tags: ["a"] },
      }),
    );
    expect(c.guest).toBe("Akshat Bubna");
    expect(c.guestTitle).toBe("Modal CTO");
    expect(c.tags).toEqual(["a"]); // entities.tags 优先于 digest.tags
  });
  it("★ 无 entities → 嘉宾回退 meta.guests(向后兼容)", () => {
    expect(cardData(ep({ entities: null })).guest).toBe("Foo");
  });
});

describe("renderList · 列表页 markdown", () => {
  it("★ 卡数 == 集数,且按发布日期倒序(US-1)", () => {
    const md = renderList([
      ep({ meta: { id: "old", date: "2026-01-01", title_zh: "旧", podcast: "p" } }),
      ep({ meta: { id: "new", date: "2026-09-09", title_zh: "新", podcast: "p" } }),
    ]);
    expect((md.match(/class="ep-card"/g) || []).length).toBe(2);
    const order = [...md.matchAll(/data-slug="([^"]+)"/g)].map((m) => m[1]);
    expect(order).toEqual(["new", "old"]); // 倒序:新在前
  });
  it("★ 空站 → 友好空状态,无 ep-card(US-1a 异常)", () => {
    const md = renderList([]);
    expect(md).toContain("还没有内容");
    expect(md).not.toContain('class="ep-card"');
  });
  it("★ 标签条含全部 tag 并集(US-2 筛选候选)", () => {
    const md = renderList([
      ep({ digest: { tldr: "t", tags: ["A"] } }),
      ep({ meta: { id: "y", date: "2026-02-02", title_zh: "t", podcast: "p" }, digest: { tldr: "t", tags: ["B"] } }),
    ]);
    expect(md).toContain('data-tag="A"');
    expect(md).toContain('data-tag="B"');
  });
  it("★ 卡片含 US-1 数据契约字段 + href 指向本集", () => {
    const md = renderList([ep()]);
    expect(md).toContain("标题X");
    expect(md).toContain("一句话精华。");
    expect(md).toContain("Latent Space");
    expect(md).toContain("2026-07-08");
    expect(md).toContain('href="/2026-07-08-x"');
  });
  it("★★ 已读压暗存盘用 [...read] 而非 [].slice.call(Set)(F1 回归守卫)", () => {
    // read 是 Set;[].slice.call(Set) 恒返回 [] → 每次点卡擦掉已读历史、永不压暗(审计 F1 逮到)。
    const md = renderList([ep()]);
    expect(md).toContain("JSON.stringify([...read])");
    expect(md).not.toContain("[].slice.call(read)");
  });

  it("★ HTML 转义:标题含 < & 不破结构", () => {
    const md = renderList([ep({ meta: { id: "z", date: "2026-03-03", title_zh: "A<b>&C", podcast: "p" } })]);
    expect(md).toContain("A&lt;b&gt;&amp;C");
    expect(md).not.toContain("A<b>&C");
  });
});
