#!/usr/bin/env node
// C4 Scenario 3 · 私有播客 feed(RSS 2.0 + iTunes 命名空间)。
//
// 纯函数手写字符串生成,不引 XML 库(简到极致 + 不加依赖)。
// 每集一 <item>,挂 <enclosure> + 标题 + 精华简介(取 tldr)+ itunes:duration。
// ⚠️ 无音频的集不进 feed(不挂空 enclosure,Scenario 3a);所有文本 XML 正确转义。
import { readFileSync, existsSync, statSync, readdirSync, realpathSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// 站点公开地址(C7a:去 R2,音频随 Pages 静态 /audio/<id>.mp3,drift #18)。
// 与 site/quartz.config.yaml 的 baseUrl 保持一致;env SITE_URL 可覆盖(换新域名时)。
export const SITE_URL = String(process.env.SITE_URL || "https://listen.hearagain.space").replace(/\/+$/, "");

export function xmlEscape(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// RFC-822 日期。**固定英文星期/月份 + UTC**,不用 toLocaleString(随机器 locale 变,会产出非法 pubDate)。
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function toRfc822(d) {
  const date = d instanceof Date ? d : new Date(d);
  if (Number.isNaN(date.getTime())) throw new Error(`[feed] 无法解析日期:${d}`);
  const p2 = (n) => String(n).padStart(2, "0");
  return `${DAYS[date.getUTCDay()]}, ${p2(date.getUTCDate())} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()} ${p2(
    date.getUTCHours(),
  )}:${p2(date.getUTCMinutes())}:${p2(date.getUTCSeconds())} GMT`;
}

/** 秒 → HH:MM:SS(<1h 则 MM:SS),供 <itunes:duration> */
export function formatDuration(sec) {
  const s = Math.max(0, Math.round(Number(sec) || 0));
  const p2 = (n) => String(n).padStart(2, "0");
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = s % 60;
  return h > 0 ? `${h}:${p2(m)}:${p2(ss)}` : `${p2(m)}:${p2(ss)}`;
}

/** 一集是否具备进 feed 的条件:有音频 URL + 字节数 > 0 + 时长 > 0(否则不挂空 enclosure) */
export function hasAudio(ep) {
  return !!(ep && ep.audioUrl && Number(ep.audioLength) > 0 && Number(ep.durationSec) > 0);
}

/** 单集 <item>。ep = { id, title, description, pubDate, audioUrl, audioLength, durationSec, guid?, link? } */
export function buildItem(ep) {
  const rows = [
    "    <item>",
    `      <title>${xmlEscape(ep.title)}</title>`,
    `      <description>${xmlEscape(ep.description ?? "")}</description>`,
    `      <pubDate>${toRfc822(ep.pubDate)}</pubDate>`,
    `      <guid isPermaLink="false">${xmlEscape(ep.guid ?? ep.id ?? ep.audioUrl)}</guid>`,
    `      <enclosure url="${xmlEscape(ep.audioUrl)}" length="${Math.round(Number(ep.audioLength))}" type="audio/mpeg" />`,
    `      <itunes:duration>${formatDuration(ep.durationSec)}</itunes:duration>`,
  ];
  if (ep.link) rows.push(`      <link>${xmlEscape(ep.link)}</link>`);
  rows.push("    </item>");
  return rows.join("\n");
}

/**
 * 生成完整 feed.xml 字符串。
 * @param episodes 集数组;**无音频的集自动剔除**(hasAudio 过滤)。
 * @param siteMeta { title, link, description, language, author }
 */
export function buildFeedXml(episodes, siteMeta = {}) {
  const meta = {
    title: siteMeta.title ?? "英文播客中文精华",
    link: siteMeta.link ?? "",
    description: siteMeta.description ?? "英文科技播客的中文精华配音",
    language: siteMeta.language ?? "zh-CN",
    author: siteMeta.author ?? "",
  };
  const items = (episodes ?? []).filter(hasAudio).map(buildItem).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${xmlEscape(meta.title)}</title>
    <link>${xmlEscape(meta.link)}</link>
    <description>${xmlEscape(meta.description)}</description>
    <language>${xmlEscape(meta.language)}</language>
    <itunes:author>${xmlEscape(meta.author)}</itunes:author>
${items}
  </channel>
</rss>
`;
}

// ── 反向:从已生成的 feed.xml 读回 enclosure,供音频闸门 ④ 核实「feed 写的每条音频都真实存在」──
export function xmlUnescape(s) {
  return String(s ?? "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&"); // &amp; 最后还原,避免二次解码
}

/** 从 feed.xml 全文解析出所有 <enclosure url="X"> 的 url(已 XML 反转义)。 */
export function parseFeedEnclosureUrls(feedXml) {
  const urls = [];
  const re = /<enclosure\b[^>]*?\burl="([^"]*)"/g;
  let m;
  while ((m = re.exec(String(feedXml ?? ""))) !== null) urls.push(xmlUnescape(m[1]));
  return urls;
}

/**
 * 读 feed.xml,把每个 enclosure url 映射成 { id, path } 供 gateAudio ④ 核实真实存在。
 * ⚠️ 绝不在此过滤「文件是否存在」——死链正是要交给闸门去逮的;如实把 feed 写了什么全交出去。
 *    (三处调用点曾从集 id 重构路径再 filter(existsSync),先滤掉死链再检查,④ 永不触发=D35。)
 * 三类 url:
 *   - 相对路径(旧本地模式):resolve(root, url)。
 *   - 公开 URL `…/audio/<id>.mp3`(C7a Pages 静态,drift #18):反解回 data/episodes/<id>/audio.mp3
 *     → 闸门在 pre-commit 就能逮「feed 挂了站点里没有的音频」;真·可达(200)由部署后 curl 验(D34)。
 *   - 认不出的 http(s) url(非 /audio/<id>.mp3):path=null → 交闸门判「查不了≠通过」
 *     (**fail-closed,绝不静默跳过**——旧版「http(s) 跳过」在 enclosure 全变公开 URL 后会架空 ④=D35 同款)。
 * @param feedXml feed.xml 全文
 * @param root 仓库根,相对路径 / 公开 URL 反解均据此解析
 */
export function feedEnclosuresFromXml(feedXml, { root }) {
  return parseFeedEnclosureUrls(feedXml)
    .filter(Boolean)
    .map((u) => {
      if (/^https?:\/\//i.test(u)) {
        const m = u.match(/\/audio\/([^/?#]+)\.mp3(?:[?#]|$)/i);
        return { id: u, path: m ? resolve(root, "data/episodes", m[1], "audio.mp3") : null };
      }
      return { id: u, path: resolve(root, u) };
    });
}

// ── CLI:从 data/episodes 收集有音频的集,输出 feed.xml 到 stdout(或 --out 路径)──
// C7a(drift #18):enclosure url = SITE_URL/audio/<id>.mp3(Pages 静态公开地址,播客 App 可订)。
// gate-audio ④ 把该 url 反解回 data/episodes/<id>/audio.mp3 核本地音频真实存在;真·可达(200)部署后 curl 验。
const isMain = (() => {
  try {
    return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
})();
if (isMain) {
  const base = join(ROOT, "data/episodes");
  const samplesDir = join(ROOT, "samples");
  const published = existsSync(samplesDir)
    ? readdirSync(samplesDir)
        .filter((f) => f.endsWith(".md"))
        .map((f) => f.replace(/\.md$/, ""))
    : [];
  const episodes = [];
  for (const id of published) {
    const dir = join(base, id);
    const audio = join(dir, "audio.mp3");
    const metaP = join(dir, "meta.json");
    const audioMetaP = join(dir, "audio.meta.json");
    const digestP = join(dir, "digest.json");
    if (!existsSync(audio) || !existsSync(audioMetaP)) continue; // 无音频不进 feed
    const meta = existsSync(metaP) ? JSON.parse(readFileSync(metaP, "utf8")) : {};
    const audioMeta = JSON.parse(readFileSync(audioMetaP, "utf8"));
    const digest = existsSync(digestP) ? JSON.parse(readFileSync(digestP, "utf8")) : {};
    episodes.push({
      id,
      title: meta.title_zh ?? id,
      description: digest.tldr ?? "",
      pubDate: meta.date ?? audioMeta.generated_at ?? new Date().toISOString(),
      audioUrl: `${SITE_URL}/audio/${id}.mp3`, // C7a Pages 静态公开 URL(drift #18);gate ④ 反解回本地核存在
      audioLength: existsSync(audio) ? statSync(audio).size : 0,
      durationSec: audioMeta.duration_sec ?? 0,
      link: meta.source_url,
    });
  }
  const xml = buildFeedXml(episodes, { title: "英文播客中文精华", link: SITE_URL, description: "英文科技播客的中文精华配音(纯中文短音频)" });
  const outIdx = process.argv.indexOf("--out");
  if (outIdx >= 0 && process.argv[outIdx + 1]) {
    const { writeFileSync } = await import("node:fs");
    writeFileSync(process.argv[outIdx + 1], xml);
    console.log(`✅ feed.xml 写入 ${process.argv[outIdx + 1]}(${episodes.length} 集有音频)`);
  } else {
    process.stdout.write(xml);
  }
}
