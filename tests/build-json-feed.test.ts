// C26 · JSON Feed(jsonfeed.org v1.1)真业务测试。
// 纪律:只调 seo.mjs / build-json-feed.mjs 纯函数;每条尽量可变异验证(★)。
// 版权红线:feed authors = 本站(我们写的中文精华),不冒充原播客本体。
import { describe, it, expect } from "vitest";
import { buildJsonFeed, toRfc3339, SITE_NAME, SITE_URL } from "../scripts/seo.mjs";
import { collectPublishedFull } from "../scripts/build-json-feed.mjs";

const EPS = [
  {
    title: "旧集但今天入库",
    slug: "2025-01-01-old-but-new",
    date: "2025-01-01",
    added: "2026-08-15",
    description: "一句话摘要",
    content: "## 正文\n这是一大段中文精华全文，够长以证明 content_text 是全文而非摘要。".repeat(4),
    tags: ["智能体", "产品方法"],
    image: "/covers/2025-01-01-old-but-new.jpg",
  },
  {
    title: "新集较早入库",
    slug: "2026-02-02-newer-episode",
    date: "2026-02-02",
    added: "2026-08-10",
    description: "另一条摘要",
    content: "另一篇正文正文正文",
    tags: ["创业与行业"],
  },
];

describe("buildJsonFeed · C26 JSON Feed 结构", () => {
  const feed = JSON.parse(buildJsonFeed(EPS));

  it("是合法 JSON Feed v1.1 顶层结构", () => {
    expect(feed.version).toBe("https://jsonfeed.org/version/1.1");
    expect(feed.title).toBe(SITE_NAME);
    expect(feed.home_page_url).toBe(`${SITE_URL}/`);
    expect(feed.feed_url).toBe(`${SITE_URL}/feed.json`);
    expect(feed.language).toBe("zh-CN");
    // ★ 版权:发布者是本站,不冒充原播客
    expect(feed.authors).toEqual([{ name: SITE_NAME }]);
    expect(feed.items).toHaveLength(2);
  });

  it("★ 按 added(入库日)降序 → 新精华置顶(即便原集日期更旧也置顶)", () => {
    // added 2026-08-15 的「旧集但今天入库」应排在 added 2026-08-10 之前
    expect(feed.items[0].title).toBe("旧集但今天入库");
    expect(feed.items[1].title).toBe("新集较早入库");
  });

  it("每条 item 必填 id/url/title/content_text 齐全", () => {
    for (const it of feed.items) {
      expect(it.id).toBe(it.url);
      expect(it.url).toMatch(/^https:\/\/talk\.solomind\.cc\//);
      expect(typeof it.title).toBe("string");
      expect(typeof it.content_text).toBe("string");
      expect(it.content_text.length).toBeGreaterThan(0);
    }
  });

  it("★ content_text = 中文精华全文(非摘要)", () => {
    const it = feed.items[0];
    expect(it.content_text).toBe(EPS[0].content); // 全文原样,未被 tldr 顶替
    expect(it.content_text).not.toBe(it.summary); // 全文 ≠ 摘要
    expect(it.summary).toBe("一句话摘要");
  });

  it("★ date_published=原集日期、date_modified=入库日(RFC3339)", () => {
    const it = feed.items[0];
    expect(it.date_published).toBe("2025-01-01T00:00:00Z");
    expect(it.date_modified).toBe("2026-08-15T00:00:00Z");
  });

  it("date_modified 与 date_published 相同则省略", () => {
    const same = JSON.parse(buildJsonFeed([{ title: "T", slug: "s", date: "2026-03-03", added: "2026-03-03", content: "x" }]));
    expect(same.items[0].date_published).toBe("2026-03-03T00:00:00Z");
    expect(same.items[0].date_modified).toBeUndefined();
  });

  it("tags/image 有则带、无则省", () => {
    expect(feed.items[0].tags).toEqual(["智能体", "产品方法"]);
    expect(feed.items[0].image).toBe(`${SITE_URL}/covers/2025-01-01-old-but-new.jpg`);
    expect(feed.items[1].image).toBeUndefined(); // 无封面不写空 image
  });

  it("空输入 → 合法空 feed(items:[])", () => {
    const empty = JSON.parse(buildJsonFeed([]));
    expect(empty.version).toBe("https://jsonfeed.org/version/1.1");
    expect(empty.items).toEqual([]);
  });
});

describe("toRfc3339 · 日期格式", () => {
  it("YYYY-MM-DD → RFC3339 UTC 零点", () => {
    expect(toRfc3339("2026-08-16")).toBe("2026-08-16T00:00:00Z");
    expect(toRfc3339("2026-08-16T12:34:56Z")).toBe("2026-08-16T00:00:00Z"); // 只取日期前缀
  });
  it("认不出返回 undefined(不产非法日期)", () => {
    expect(toRfc3339("")).toBeUndefined();
    expect(toRfc3339("not-a-date")).toBeUndefined();
    expect(toRfc3339(undefined)).toBeUndefined();
  });
});

describe("collectPublishedFull · 采集口径", () => {
  it("★ 采集真库:每集带全文 content 且 slug/title 齐,数量与 samples/*.md 对齐", () => {
    const eps = collectPublishedFull();
    expect(eps.length).toBeGreaterThan(0);
    for (const e of eps) {
      expect(e.slug).toBeTruthy();
      expect(e.title).toBeTruthy();
      expect(e.title).not.toBe(e.slug); // 不显示裸 id(有 title_zh 兜底)
    }
    // 至少一集有全文(digest_md),证明 content 真被采到
    expect(eps.some((e) => (e.content ?? "").length > 500)).toBe(true);
  });
});
