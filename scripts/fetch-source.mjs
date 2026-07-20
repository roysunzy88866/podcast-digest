#!/usr/bin/env node
// C2 步骤 ① · 取源(Scenario 1):集页 → 官方文字稿 + mp3 直链 → data/episodes/<id>/
//
// 补债:C2 首版这一步是**人肉 curl** 的,Gherkin 明写「[系统]**脚本**从该集页/RSS 取」、
// DoD #1 却标了 ✅ —— C2 交付物审计抓出「整步无脚本、不可复现、下一集没法复跑」。本脚本补上。
//
// 用法:node scripts/fetch-source.mjs <集页URL> <集id>
//   例:node scripts/fetch-source.mjs https://www.latent.space/p/modal2026 2026-07-08-latent-space-modal
//
// Scenario 1a [异常]:取不到官方文字稿 → **停 + 报 + exit 1**,绝不退化为「手编转写稿」冒充。
// 说明:Substack 把官方 aligned 转写稿(含说话人+逐词时间戳)放在集页内嵌的**签名 CloudFront URL**,
//       签名会过期 → 每次现取现用,不存 URL 只存内容。
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [pageUrl, epId] = process.argv.slice(2);

if (!pageUrl || !epId) {
  console.error("用法: node scripts/fetch-source.mjs <集页URL> <集id>");
  console.error("例:  node scripts/fetch-source.mjs https://www.latent.space/p/modal2026 2026-07-08-latent-space-modal");
  process.exit(2);
}

const die = (msg) => {
  console.error(`❌ ${msg}`);
  console.error("   Scenario 1a:取不到官方文字稿就**停**,不退化为手编转写稿冒充。");
  console.error("   若是网络/代理问题:检查 HTTP(S)_PROXY;若该集确实没有官方稿 → 需走云端 ASR 兜底(尚未实现,见 tech-debt)。");
  process.exit(1);
};

async function get(url, what) {
  let res;
  try {
    res = await fetch(url, { redirect: "follow" });
  } catch (e) {
    die(`取${what}失败(网络):${e.message}`);
  }
  if (!res.ok) die(`取${what}失败:HTTP ${res.status}`);
  return res;
}

console.log(`① 取集页:${pageUrl}`);
const html = await (await get(pageUrl, "集页")).text();
console.log(`   集页 ${html.length} 字节`);

// 还原 JSON-in-HTML 的转义,再提取签名 URL
const txt = html.replace(/\\\//g, "/").replace(/\\u0026/g, "&").replace(/&amp;/g, "&");

const postId = (txt.match(/"id":(\d+),"type":"podcast"/) || txt.match(/post\/(\d+)\//) || [])[1];
if (!postId) die("集页里找不到 post id(Substack 页面结构可能变了)");
console.log(`② post id = ${postId}`);

// aligned transcription.json(含说话人+逐词时间戳);排除 unaligned
const tUrls = [...txt.matchAll(new RegExp(`https://[^"\\\\ ]*post/${postId}/[^"\\\\ ]*?/transcription\\.json\\?[^"\\\\ ]*`, "g"))]
  .map((m) => m[0])
  .filter((u) => !u.includes("unaligned"));
if (!tUrls.length) die(`集页里找不到官方文字稿(post ${postId} 的 transcription.json 签名URL)`);
const tUrl = tUrls.sort((a, b) => b.length - a.length)[0];
console.log(`③ 官方文字稿签名URL 已定位(${tUrl.length} 字符,含时效签名,不入库)`);

const transcript = await (await get(tUrl, "官方文字稿")).json();
if (!Array.isArray(transcript) || !transcript.length) die("官方文字稿为空或格式异常");
const withWords = transcript.filter((s) => Array.isArray(s.words) && s.words.length).length;
if (withWords !== transcript.length)
  console.warn(`⚠️ ${transcript.length - withWords}/${transcript.length} 段缺逐词数据(闸门的说话人/时间戳精度会降级)`);

// mp3 直链(C2 不下载 21MB 音频,只记直链;音频是 C4 的活)
const mp3 = (txt.match(new RegExp(`https://api\\.substack\\.com/api/v1/audio/upload/[0-9a-f-]+/src`)) || [])[0] || null;

// 说话人诊断标签统计(SPEAKER_xx → 真名的映射需要人来定,机器猜不出谁是谁)。
// 词级 speaker 缺失时回退段级(与 gate.mjs `w.speaker ?? seg.speaker` 一致)——
// 有的 Substack 源(如 Lenny's)aligned json 只在段级带 SPEAKER_x,词级为空,不回退会误报「无说话人」。
const spk = new Map();
for (const s of transcript) for (const w of s.words || []) {
  const label = w.speaker ?? s.speaker ?? "unknown";
  spk.set(label, (spk.get(label) || 0) + 1);
}
const speakers = [...spk.entries()].sort((a, b) => b[1] - a[1]);

const outDir = join(ROOT, "data/episodes", epId);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "transcript.en.json"), JSON.stringify(transcript));

const duration = transcript[transcript.length - 1].end;
const metaPath = join(outDir, "meta.json");
const prev = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, "utf8")) : {};
const meta = {
  ...prev,
  id: epId,
  source_url: pageUrl,
  substack_post_id: Number(postId),
  audio_mp3: mp3,
  duration_sec: duration,
  transcript_source: "Substack 官方 aligned transcription.json(说话人标注+逐词时间戳);由 scripts/fetch-source.mjs 取",
  transcript_segments: transcript.length,
};
writeFileSync(metaPath, JSON.stringify(meta, null, 2));

console.log(`\n✅ 取源完成 → data/episodes/${epId}/`);
console.log(`   transcript.en.json: ${transcript.length} 段, 时长 ${Math.floor(duration / 60)}:${String(Math.floor(duration % 60)).padStart(2, "0")}`);
console.log(`   mp3 直链: ${mp3 ? "已记录" : "⚠️ 未找到"}`);
console.log(`\n   检出说话人(发言词数):`);
for (const [label, n] of speakers) console.log(`     ${label}: ${n} 词${meta.speaker_map?.[label] ? ` → ${meta.speaker_map[label]}` : ""}`);

// speaker_map 机器定不了(谁是谁要人听/读开场)。缺了就明说,别让下游闸门拿 SPEAKER_01 当人名比对
const missing = speakers.map(([l]) => l).filter((l) => !meta.speaker_map?.[l]);
if (missing.length) {
  console.log(`\n⚠️ meta.json 还缺 speaker_map(${missing.join(", ")} → 真名)。`);
  console.log(`   这一步机器定不了(谁是谁要人读开场判断),请人填进 meta.json 的 speaker_map 再跑后续。`);
  console.log(`   机器闸门的「说话人匹配」依赖它;不填的话该集的说话人校验会一律不过(fail-closed)。`);
}
