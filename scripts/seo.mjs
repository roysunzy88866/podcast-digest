// scripts/seo.mjs — C22 · SEO 元信息 + 结构化数据的纯函数(可单测)。
// 纪律:不 import render/build-*(防循环依赖),调用方从 meta/digest/entities 摘好规范化输入再喂进来。
// 版权红线:集页按「我们的中文精华摘要」建模成文章类(BlogPosting),用 isBasedOn 诚实指向原播客单集,
//          publisher/author = 本站,**绝不标 PodcastEpisode/PodcastSeries(那是冒充原播客本体)**。
// schema 铁律:字段只从页面可见内容来、缺就不写(宁缺毋滥;残缺/泛化 schema 会被判「声称与实际不符」)。

export const SITE_NAME = "跨国深谈";
export const SITE_URL = "https://talk.solomind.cc";
export const SITE_DESC = "把英文播客与演讲里最值钱的观点,提炼成几分钟读完的中文精华。";
export const DEFAULT_OG_IMAGE = "/index-og-image.webp"; // 无源封面时的兜底社交图(站点默认)

const stripTrailing = (u) => String(u).replace(/\/+$/, "");

/** 规范 URL:baseUrl + slug;index/空 → 站点根(带尾 /);去多余斜杠。 */
export function canonicalUrl(baseUrl, slug) {
  const base = stripTrailing(baseUrl);
  const s = String(slug ?? "").replace(/^\/+|\/+$/g, "");
  if (!s || s === "index") return base + "/";
  return `${base}/${s}`;
}

/**
 * 集页社交图:有源封面 → /covers/<id>.jpg;无 → 站点默认图。**返回绝对 URL**。
 * 关键:og-image 插件对「相对」socialImage 会硬加 /static/ 前缀(→ /static/#64748b 那种坏图),
 * 只有绝对 URL 才被原样使用;coalesceAliases 顺序 [socialImage,image,cover] 里 socialImage 优先级最高。
 */
export function socialImagePath(meta, { baseUrl = SITE_URL, defaultImage = DEFAULT_OG_IMAGE } = {}) {
  const rel = meta?.cover_image?.file ? `/covers/${meta.id}.jpg` : defaultImage;
  return /^https?:/i.test(rel) ? rel : `${stripTrailing(baseUrl)}${rel.startsWith("/") ? "" : "/"}${rel}`;
}

/** 相对路径补成绝对 URL(已是 http(s) 则原样)。 */
function absUrl(baseUrl, p) {
  if (!p) return undefined;
  if (/^https?:/i.test(p)) return p;
  return `${stripTrailing(baseUrl)}${p.startsWith("/") ? "" : "/"}${p}`;
}

/**
 * 集页结构化数据:@graph = [BlogPosting(我们的中文精华) + BreadcrumbList]。
 * 入参已规范化:{ title, description?, date?, slug, image?, sourceUrl?, people?, companies?, concepts?, category? }
 *   people/companies/concepts = 中文显示名数组(调用方从 groupByRole 摘,host 并进 people)。
 */
export function episodeJsonLd(ep, { baseUrl = SITE_URL, siteName = SITE_NAME } = {}) {
  const {
    title, description, date, slug, image, sourceUrl,
    people = [], companies = [], concepts = [], category,
  } = ep;
  const url = canonicalUrl(baseUrl, slug);
  const about = [
    ...people.map((n) => ({ "@type": "Person", name: n })),
    ...companies.map((n) => ({ "@type": "Organization", name: n })),
    ...concepts.map((n) => ({ "@type": "Thing", name: n })),
  ];
  const img = absUrl(baseUrl, image);
  const post = {
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    headline: title,
    inLanguage: "zh-CN",
    url,
    mainEntityOfPage: url,
    ...(description ? { description } : {}),
    ...(date ? { datePublished: date } : {}),
    author: { "@type": "Organization", name: siteName },
    publisher: { "@type": "Organization", name: siteName },
    ...(img ? { image: img } : {}),
    ...(sourceUrl ? { isBasedOn: sourceUrl } : {}), // 诚实标注:本文是对该原播客单集的中文精华
    ...(about.length ? { about } : {}),
    ...(category ? { articleSection: category } : {}),
  };
  const crumbs = [
    { name: siteName, url: canonicalUrl(baseUrl, "") },
    ...(category ? [{ name: category, url: canonicalUrl(baseUrl, `tags/${category}`) }] : []),
    { name: title, url },
  ];
  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.url })),
  };
  return { "@context": "https://schema.org", "@graph": [post, breadcrumb] };
}

/** 首页结构化数据:WebSite。 */
export function websiteJsonLd({ baseUrl = SITE_URL, siteName = SITE_NAME, siteDesc = SITE_DESC } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: canonicalUrl(baseUrl, ""),
    description: siteDesc,
    inLanguage: "zh-CN",
  };
}

/**
 * llms.txt(llmstxt.org 约定):# 站名 + > 简介 + ## 分节 markdown 链接列表。
 * 只列传入的已发布集 → 与内容自动同步(调用方喂 loadAllEpisodes 摘出的 {title,slug,date,description?})。
 */
export function buildLlmsTxt(episodes, { baseUrl = SITE_URL, siteName = SITE_NAME, siteDesc = SITE_DESC } = {}) {
  const sorted = [...episodes].sort((a, b) => String(b.date ?? "").localeCompare(String(a.date ?? "")));
  const clip = (s, n = 100) => {
    const t = String(s).replace(/\s+/g, " ").trim();
    return t.length > n ? t.slice(0, n) + "…" : t;
  };
  const lines = [`# ${siteName}`, "", `> ${siteDesc}`, "", "## 精华集", ""];
  for (const e of sorted) {
    const desc = e.description ? `: ${clip(e.description)}` : "";
    lines.push(`- [${e.title}](${canonicalUrl(baseUrl, e.slug)})${desc}`);
  }
  lines.push("");
  return lines.join("\n");
}
