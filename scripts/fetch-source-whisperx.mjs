#!/usr/bin/env node
// C9 · whisperX ASR 进料口:whisperX --diarize 的 JSON 输出 → transcript.en.json(与 Substack
// 官方 aligned 稿同构:段{start,end,text,speaker,words[{word,start,end,score}]}),后链零改动。
//
// 两种模式:
//   转换(spike 用,whisperx 已由 workflow 跑完):
//     node scripts/fetch-source-whisperx.mjs <episodeDir> --wx <whisperx输出.json> [--audio-url <enclosure直链>]
//   全程(C9 接线,processEpisode 调;CI runner 需已装 whisperx + HF_TOKEN env):
//     node scripts/fetch-source-whisperx.mjs <episodeDir> --transcribe --audio-url <enclosure直链> [--duration <秒>]
//
// 说话人分离 = pyannote community-1(whisperX 内置,需 HF_TOKEN + 用户已接受模型条款);
// VAD = whisperX 自带(铁律「ASR 前必 VAD」由此满足)。P1 已过:user-stories C9,run 30075152246。
import { readFileSync, writeFileSync, existsSync, mkdirSync, createWriteStream, rmSync, mkdtempSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { tmpdir } from "node:os";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// 模型档(用户 2026-07-24 拍板):large-v3 默认(质量优先),>100 分钟降 medium 保时长余量。
// 锚 P1 实测:large-v3 0.59x 实时 → 100 分钟 ≈2.8h;job 上限 6h,再长不留余量。时长未知→large-v3。
const LONG_EPISODE_SEC = 100 * 60;
export function pickWhisperxModel(durationSec) {
  return durationSec > LONG_EPISODE_SEC ? "medium" : "large-v3";
}

/**
 * whisperX JSON → 官方稿同构段数组。fail-closed:无段即抛,不产空稿冒充转写。
 * 词缺 start/end(whisperX 对纯数字/符号词的已知行为)→ 只保留词文本,不编造时间(防失真地基)。
 */
export function convertWhisperx(wx) {
  const segs = wx?.segments;
  if (!Array.isArray(segs) || !segs.length) throw new Error("whisperX 输出无 segments(空稿/格式异常),拒绝产出转写");
  return segs.map((s) => ({
    start: s.start,
    end: s.end,
    text: String(s.text ?? "").trim(),
    speaker: s.speaker ?? "unknown",
    words: (s.words ?? []).map((w) => {
      const out = { word: w.word };
      if (typeof w.start === "number") out.start = w.start;
      if (typeof w.end === "number") out.end = w.end;
      if (typeof w.score === "number") out.score = w.score;
      return out;
    }),
  }));
}

/** 时长 = 各段 end/start 的最大数值(末段 end 可能缺——GLM 20260724-004[2],不许 duration 变 undefined)。 */
export function transcriptDuration(transcript) {
  let max = 0;
  for (const s of transcript) for (const v of [s.end, s.start]) if (typeof v === "number" && v > max) max = v;
  return max;
}

/** 全程模式:下载 enclosure 音频 → 跑 whisperx CLI(runner 需已装)→ 返回其 JSON 输出。fail-closed。 */
async function runWhisperx(audioUrl, durationSec) {
  if (!process.env.HF_TOKEN) throw new Error("缺 HF_TOKEN env(pyannote 分离要,fail-closed)");
  const model = pickWhisperxModel(durationSec);
  const work = mkdtempSync(join(tmpdir(), "whisperx-"));
  try {
    const audioFile = join(work, "episode.mp3");
    console.log(`── 下载音频(${Math.round(durationSec / 60)} 分)…`);
    const res = await fetch(audioUrl, { redirect: "follow" });
    if (!res.ok) throw new Error(`音频下载失败 HTTP ${res.status}`);
    await pipeline(Readable.fromWeb(res.body), createWriteStream(audioFile));
    console.log(`── whisperX 转写(model=${model},CPU int8 + 内置 VAD + pyannote 分离)…`);
    const t0 = Date.now();
    const r = spawnSync(
      "whisperx",
      [audioFile, "--model", model, "--compute_type", "int8", "--language", "en", "--threads", "4",
       "--diarize", "--hf_token", process.env.HF_TOKEN, "--output_dir", work, "--output_format", "json"],
      { stdio: "inherit" },
    );
    if (r.status !== 0) throw new Error(`whisperx 失败(exit ${r.status ?? "?"}${r.error ? `,${r.error.message}` : ""});runner 装了 whisperx 吗?`);
    console.log(`── whisperX 完成,耗时 ${Math.round((Date.now() - t0) / 60000)} 分`);
    return JSON.parse(readFileSync(join(work, "episode.json"), "utf8"));
  } finally {
    rmSync(work, { recursive: true, force: true }); // 源音频/中间产物不留(大文件,且绝不入仓)
  }
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const argv = process.argv.slice(2);
  const dirArg = argv[0] && !argv[0].startsWith("--") ? argv[0] : null;
  const flagVal = (name) => (argv.indexOf(name) >= 0 ? argv[argv.indexOf(name) + 1] : null);
  const transcribe = argv.includes("--transcribe");
  const wxPath = flagVal("--wx");
  const audioUrl = flagVal("--audio-url");
  if (!dirArg || (!wxPath && !transcribe) || (transcribe && !audioUrl)) {
    console.error("用法:node scripts/fetch-source-whisperx.mjs <episodeDir> --wx <whisperx.json> [--audio-url <url>]");
    console.error("     node scripts/fetch-source-whisperx.mjs <episodeDir> --transcribe --audio-url <url> [--duration <秒>]");
    process.exit(2);
  }
  const dir = resolve(ROOT, dirArg);
  const wx = transcribe
    ? await runWhisperx(audioUrl, Number(flagVal("--duration")) || 0)
    : JSON.parse(readFileSync(wxPath, "utf8"));
  const transcript = convertWhisperx(wx);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "transcript.en.json"), JSON.stringify(transcript));

  const metaPath = join(dir, "meta.json");
  const prev = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, "utf8")) : {};
  const duration = transcriptDuration(transcript);
  const meta = {
    ...prev,
    id: prev.id ?? dirArg.split("/").pop(),
    audio_mp3: audioUrl ?? prev.audio_mp3 ?? null,
    duration_sec: duration,
    transcript_source: "whisperX ASR(词级对齐+pyannote 说话人分离+内置 VAD);由 scripts/fetch-source-whisperx.mjs 转换",
    transcript_segments: transcript.length,
    asr: true,
  };
  writeFileSync(metaPath, JSON.stringify(meta, null, 2));

  const spk = new Set(transcript.map((s) => s.speaker));
  console.log(`✅ ASR 转写 → ${dirArg}:${transcript.length} 段,时长 ${Math.floor(duration / 60)} 分,说话人标签 ${[...spk].join("/")}`);
  console.log("   ⚠️ speaker_map(SPEAKER_xx→真名)由 infer-speakers 推断+grounding 校验,同官方稿链路。");
}
