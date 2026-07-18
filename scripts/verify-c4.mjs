#!/usr/bin/env node
// C4 验收(US-5 音频:精华 TTS + 详情页播放器 + 私有播客 feed)· 一站式校验。
//   ① 音频层闸门:每发布集有音频/时长/源一致/enclosure 真实(fail-closed)
//   ② 播放器真渲染进集页 HTML(<audio controls> + src 指向本集音频)
//   ③ 音频资源真在 site/public/audio/<id>.mp3(浏览器能加载)
//   ④ feed.xml 结构合规:每有音频的集都有 <enclosure>(指真实文件)+ <itunes:duration>
// 前置:先 build(音频资源灌进 site/public/audio)+ 生成 feed.xml。
import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { gateAudio } from "./gate-audio.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "site/public");
const base = join(root, "data/episodes");
const samplesDir = join(root, "samples");
let ok = true;
const fail = (m) => ((ok = false), console.error("❌ " + m));
const pass = (m) => console.log("✅ " + m);
const esc = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const publishedIds = existsSync(samplesDir)
  ? readdirSync(samplesDir).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""))
  : [];

// ① 音频层闸门
const feedEnclosures = publishedIds
  .map((id) => ({ id, path: join(base, id, "audio.mp3") }))
  .filter((e) => existsSync(e.path));
const au = await gateAudio(publishedIds, { base, feedEnclosures });
if (au.ok) pass(`音频层闸门:${publishedIds.length} 集音频存在/时长/源一致/enclosure 真实`);
else {
  fail(`音频层闸门未过(${au.failures.length} 条):`);
  for (const f of au.failures.slice(0, 8)) console.error(`     [${f.kind}] ${f.id} — ${f.reason}`);
}

// ② 播放器渲染 + ③ 音频资源可加载
let anyAudio = false;
for (const id of publishedIds) {
  if (!existsSync(join(base, id, "audio.mp3"))) continue;
  anyAudio = true;
  const html = join(pub, `${id}.html`);
  if (!existsSync(html)) {
    fail(`集页产物不存在:${id}.html(先 build)`);
    continue;
  }
  const h = readFileSync(html, "utf8");
  if (/<audio[^>]*controls/.test(h)) pass(`${id}:播放器 <audio controls> 渲染`);
  else fail(`${id}:播放器没渲染进 HTML`);
  if (new RegExp(`audio/${esc(id)}\\.mp3`).test(h)) pass(`${id}:播放器 src 指向本集音频`);
  else fail(`${id}:播放器 src 没指向本集音频`);
  const asset = join(pub, "audio", `${id}.mp3`);
  if (existsSync(asset) && statSync(asset).size > 0) pass(`${id}:音频资源在 public(${(statSync(asset).size / 1e6).toFixed(1)}MB,浏览器可加载)`);
  else fail(`${id}:音频资源缺/空 site/public/audio/${id}.mp3(先 build 时灌音频)`);
}
if (!anyAudio) fail("没有任何集有音频 → US-5 演示不出来(先 node scripts/tts.mjs <ep>)");

// ④ feed.xml 结构
const feedPath = join(root, "feed.xml");
if (!existsSync(feedPath)) {
  fail("feed.xml 不存在(先 node scripts/build-feed.mjs --out feed.xml)");
} else {
  const xml = readFileSync(feedPath, "utf8");
  if (xml.includes("<rss") && xml.includes('xmlns:itunes')) pass("feed.xml:RSS 2.0 + iTunes 命名空间");
  else fail("feed.xml:结构不合规");
  for (const id of publishedIds) {
    if (!existsSync(join(base, id, "audio.mp3"))) continue;
    // [GLM 20260718-010·2] 防假绿:该集 id 必须出现在**自己的 <enclosure url>** 里(不是全局散串碰巧都在)
    const hasEnc = new RegExp(`<enclosure url="[^"]*${esc(id)}[^"]*"`).test(xml);
    if (hasEnc && xml.includes("itunes:duration")) pass(`feed:${id} 有 enclosure(指向本集)+ itunes:duration`);
    else fail(`feed:${id} 缺指向本集的 enclosure 或 duration`);
  }
}

if (!ok) {
  console.error("\n❌ C4 验收未过。");
  process.exit(1);
}
console.log("\n✅ C4 验收通过:音频层闸门 + 播放器渲染 + 音频资源可加载 + feed 结构合规。");
