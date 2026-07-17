#!/usr/bin/env node
// C2 步骤 ④.5 · 金句修复(可复现,非手改)
// 设计:GLM 只负责「把词抄对」;一旦逐字命中转写稿,时间戳+说话人一律从**转写稿真相派生**
//       (比 GLM 猜的更准、更诚实)。轻度前后多词自动裁剪回逐字;跨说话人/救不回 → 丢弃记账。
// 前置:digest.json(GLM 浓缩产物)。产物:digest.json 覆盖(仅金句被规整)+ repair-report.json。
// 之后必须再跑 gate.mjs 独立确认(本步不自证)。
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { buildWordStream, norm, findAllSpans, spanSpeaker, parseTs } from "./gate.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = process.argv[2] || "data/episodes/2026-07-08-latent-space-modal";
const MIN_KEEP = 6;
const MAX_TRIM = 1; // 前后各最多裁剪几个词(只救 GLM 边界多加的单个词如 "it's";多词偏差宁丢不救,依 GLM 20260717-008 [1][2])
const SPEAKER_FRAC = 0.8;

const transcript = JSON.parse(readFileSync(resolve(ROOT, DIR, "transcript.en.json"), "utf8"));
const meta = JSON.parse(readFileSync(resolve(ROOT, DIR, "meta.json"), "utf8"));
const digest = JSON.parse(readFileSync(resolve(ROOT, DIR, "digest.json"), "utf8"));
const stream = buildWordStream(transcript);
const speakerMap = meta.speaker_map;
const mmss = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

// 在 GLM 的 en 串上,尝试前后裁剪 ≤MAX_TRIM 词,找到逐字命中转写稿的最小裁剪版本
function matchWithTrim(enText) {
  const words = enText.trim().split(/\s+/);
  const cands = [];
  for (let lead = 0; lead <= MAX_TRIM; lead++) {
    for (let trail = 0; trail <= MAX_TRIM; trail++) {
      const sub = words.slice(lead, words.length - trail);
      if (sub.length < 6) continue;
      const text = sub.join(" ");
      const qn = norm(text);
      const spans = findAllSpans(qn, stream);
      if (spans.length) cands.push({ text, spans, trim: lead + trail, len: sub.length });
    }
  }
  if (!cands.length) return null;
  // 优先裁得最少,其次留得最长
  cands.sort((a, b) => a.trim - b.trim || b.len - a.len);
  return cands[0];
}

const report = { kept: [], dropped: [] };
const fixed = [];
for (const [i, q] of (digest.quotes || []).entries()) {
  const en0 = (q.en ?? q.text ?? "").trim();
  const m = matchWithTrim(en0);
  if (!m) {
    report.dropped.push({ i: i + 1, reason: "逐字命中不了(裁剪后仍无)", en: en0 });
    continue;
  }
  // 多处出现 → 选离 GLM 标注时间戳最近的一处
  const glmTs = parseTs(q.timestamp);
  const pick = m.spans
    .map((s) => ({ s, start: stream[s.i].start }))
    .sort((a, b) => Math.abs(a.start - (glmTs || a.start)) - Math.abs(b.start - (glmTs || b.start)))[0].s;
  const { label, frac } = spanSpeaker(stream, pick.i, pick.j);
  // 非主说话人连续 ≥2 词 → 真跨说话人拼接(容忍单词 diarization 噪声),依 GLM 20260717-008 [4]
  let run = 0,
    maxRun = 0;
  for (let k = pick.i; k <= pick.j; k++) {
    if (stream[k].speaker !== label) {
      run++;
      if (run > maxRun) maxRun = run;
    } else run = 0;
  }
  if (frac < SPEAKER_FRAC || maxRun >= 2) {
    report.dropped.push({ i: i + 1, reason: `命中片段跨说话人(占比${frac.toFixed(2)}/连续他人${maxRun}词,疑拼接)`, en: en0 });
    continue;
  }
  const trueSpeaker = speakerMap[label] || label;
  const start = stream[pick.i].start;
  fixed.push({
    en: m.text, // 逐字命中的(可能轻裁)英文
    zh: q.zh,
    timestamp: mmss(start), // 真相派生:命中片段首词时刻
    speaker: trueSpeaker, // 真相派生:命中片段主说话人
  });
  report.kept.push({
    i: i + 1,
    timestamp: mmss(start),
    speaker: trueSpeaker,
    trimmed: m.text !== en0,
    tsWas: q.timestamp,
    spkWas: q.speaker,
  });
}

console.log(`修复:${digest.quotes.length} 条 → 保留 ${fixed.length}, 丢弃 ${report.dropped.length}`);
for (const d of report.dropped) console.log(`  丢 #${d.i}: ${d.reason}\n     「${d.en}」`);
for (const k of report.kept.filter((k) => k.trimmed || k.tsWas !== k.timestamp || k.spkWas !== k.speaker))
  console.log(`  规整 #${k.i}: ts ${k.tsWas}→${k.timestamp}  spk ${k.spkWas}→${k.speaker}${k.trimmed ? "  (裁剪)" : ""}`);

digest.quotes = fixed;
writeFileSync(resolve(ROOT, DIR, "digest.json"), JSON.stringify(digest, null, 2));
writeFileSync(resolve(ROOT, DIR, "repair-report.json"), JSON.stringify(report, null, 2));

if (fixed.length < MIN_KEEP) {
  console.error(`❌ 保留金句 ${fixed.length} < ${MIN_KEEP},本集金句质量不足,不发布`);
  process.exit(1);
}
console.log(`✅ digest.json 金句已规整为 ${fixed.length} 条(时间戳/说话人已锚定转写稿真相)。请再跑 gate.mjs 独立确认。`);
