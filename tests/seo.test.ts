// C22 · SEO 元信息 + 结构化数据(US-1/US-2)的真业务测试。
// 纪律:只调 seo.mjs 纯函数;每条能变异验证。
// 版权红线:集页 JSON-LD 必须是「我们的中文精华」文章类(BlogPosting),用 isBasedOn 指原播客,绝不冒充原播客本体(PodcastEpisode)。
import { describe, it, expect } from "vitest";
import {
  canonicalUrl,
  socialImagePath,
  episodeJsonLd,
  websiteJsonLd,
  buildLlmsTxt,
  SITE_NAME,
  SITE_URL,
} from "../scripts/seo.mjs";

describe("canonicalUrl · C22 规范 URL", () => {
  it("普通 slug → baseUrl/slug", () => {
    expect(canonicalUrl("https://talk.solomind.cc", "2026-01-01-foo")).toBe(
      "https://talk.solomind.cc/2026-01-01-foo",
    );
  });
  it("index / 空 → 站点根", () => {
    expect(canonicalUrl("https://talk.solomind.cc", "index")).toBe("https://talk.solomind.cc/");
    expect(canonicalUrl("https://talk.solomind.cc", "")).toBe("https://talk.solomind.cc/");
  });
  it("去掉多余斜杠(baseUrl 尾 / 与 slug 首尾 /)", () => {
    expect(canonicalUrl("https://talk.solomind.cc/", "/a/b/")).toBe("https://talk.solomind.cc/a/b");
  });
});

describe("socialImagePath · C22 集页社交图(绝对 URL 防 /static/ 前缀坑)", () => {
  it("有源封面 → 绝对 /covers/<id>.jpg", () => {
    expect(socialImagePath({ id: "ep1", cover_image: { file: "x.jpg" } })).toBe(
      `${SITE_URL}/covers/ep1.jpg`,
    );
  });
  it("无源封面 → 站点默认图(不落到 cover 色值)", () => {
    const got = socialImagePath({ id: "ep2" });
    expect(got).not.toContain("#"); // 不再是 /static/#64748b 那种颜色占位
    expect(got).toMatch(/^https:\/\//); // 必须绝对(相对会被插件加 /static/ 前缀)
    expect(got).toMatch(/\.(webp|jpg|png)$/);
  });
});

const SAMPLE = {
  title: "别迷信大上下文",
  description: "拆解认证考试的五大反模式。",
  date: "2026-08-08",
  slug: "2026-08-08-talks-cca-exam",
  image: "/covers/2026-08-08-talks-cca-exam.jpg",
  sourceUrl: "https://youtube.com/watch?v=abc",
  people: ["张三", "李四"],
  companies: ["Anthropic"],
  concepts: ["上下文溢出"],
  category: "AI 编程",
};

describe("episodeJsonLd · C22 集页结构化数据(守版权红线)", () => {
  const ld = episodeJsonLd(SAMPLE);
  const graph = ld["@graph"];
  const post = graph.find((n: any) => n["@type"] === "BlogPosting");
  const crumb = graph.find((n: any) => n["@type"] === "BreadcrumbList");

  it("@context = schema.org 且 @graph 含 BlogPosting + BreadcrumbList", () => {
    expect(ld["@context"]).toBe("https://schema.org");
    expect(post).toBeTruthy();
    expect(crumb).toBeTruthy();
  });
  it("是文章类,绝不标 PodcastEpisode(版权红线)", () => {
    const types = graph.map((n: any) => n["@type"]);
    expect(types).not.toContain("PodcastEpisode");
    expect(types).not.toContain("PodcastSeries");
    expect(post["@type"]).toBe("BlogPosting");
  });
  it("headline/description/date/语言/规范 URL 来自入参", () => {
    expect(post.headline).toBe(SAMPLE.title);
    expect(post.description).toBe(SAMPLE.description);
    expect(post.datePublished).toBe(SAMPLE.date);
    expect(post.inLanguage).toBe("zh-CN");
    expect(post.mainEntityOfPage).toBe(`${SITE_URL}/${SAMPLE.slug}`);
  });
  it("作者/发布者 = 本站(是我们的二次创作,不是原播客)", () => {
    expect(post.author.name).toBe(SITE_NAME);
    expect(post.publisher.name).toBe(SITE_NAME);
  });
  it("isBasedOn 指原播客单集(诚实标注衍生来源)", () => {
    expect(post.isBasedOn).toBe(SAMPLE.sourceUrl);
  });
  it("about 收录人物/公司/概念名(Person/Organization/Thing)", () => {
    const names = post.about.map((a: any) => a.name);
    expect(names).toContain("张三");
    expect(names).toContain("Anthropic");
    expect(names).toContain("上下文溢出");
    const zhang = post.about.find((a: any) => a.name === "张三");
    expect(zhang["@type"]).toBe("Person");
    expect(post.about.find((a: any) => a.name === "Anthropic")["@type"]).toBe("Organization");
  });
  it("image 补成绝对 URL", () => {
    expect(post.image).toBe(`${SITE_URL}${SAMPLE.image}`);
  });
  it("面包屑:站点 → 大类 → 本集,position 递增,item 是规范 URL", () => {
    const items = crumb.itemListElement;
    expect(items.map((i: any) => i.position)).toEqual([1, 2, 3]);
    expect(items[0].name).toBe(SITE_NAME);
    expect(items[1].name).toBe(SAMPLE.category);
    expect(items[1].item).toBe(`${SITE_URL}/tags/${SAMPLE.category}`);
    expect(items[2].item).toBe(`${SITE_URL}/${SAMPLE.slug}`);
  });
  it("无源封面/无来源时不硬塞字段(宁缺毋滥)", () => {
    const bare = episodeJsonLd({ title: "T", slug: "s", date: "2026-01-01" });
    const bp = bare["@graph"].find((n: any) => n["@type"] === "BlogPosting");
    expect(bp.image).toBeUndefined();
    expect(bp.isBasedOn).toBeUndefined();
    expect(bp.about).toBeUndefined();
  });
});

describe("websiteJsonLd · C22 首页", () => {
  it("@type WebSite + name + url", () => {
    const ld = websiteJsonLd();
    expect(ld["@type"]).toBe("WebSite");
    expect(ld.name).toBe(SITE_NAME);
    expect(ld.url).toBe(`${SITE_URL}/`);
    expect(ld.inLanguage).toBe("zh-CN");
  });
});

describe("buildLlmsTxt · C22 自动生成且与内容同步", () => {
  const eps = [
    { title: "旧集", slug: "2026-01-01-a", date: "2026-01-01", description: "甲。" },
    { title: "新集", slug: "2026-08-01-b", date: "2026-08-01", description: "乙。" },
  ];
  const txt = buildLlmsTxt(eps);

  it("H1 站名 + blockquote 简介", () => {
    expect(txt).toMatch(new RegExp(`^# ${SITE_NAME}`));
    expect(txt).toMatch(/\n> .+/);
  });
  it("每集一条 markdown 链接,指规范 URL", () => {
    expect(txt).toContain(`[新集](${SITE_URL}/2026-08-01-b)`);
    expect(txt).toContain(`[旧集](${SITE_URL}/2026-01-01-a)`);
  });
  it("按日期新→旧排(新集在前)", () => {
    expect(txt.indexOf("新集")).toBeLessThan(txt.indexOf("旧集"));
  });
  it("与内容同步:少喂一集就少一条链接", () => {
    const one = buildLlmsTxt([eps[0]]);
    expect(one).toContain("旧集");
    expect(one).not.toContain("新集");
  });
});
