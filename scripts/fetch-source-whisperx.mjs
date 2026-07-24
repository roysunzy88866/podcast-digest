#!/usr/bin/env node
// C9 · whisperX ASR 进料口:whisperX --diarize 的 JSON 输出 → transcript.en.json(与 Substack
// 官方 aligned 稿同构:段{start,end,text,speaker,words[{word,start,end,score}]}),后链零改动。
//
// 用法(CI 里 whisperx 已由 workflow 跑完,本脚本只做转换+落盘):
//   node scripts/fetch-source-whisperx.mjs <episodeDir> --wx <whisperx输出.json> [--audio-url <enclosure直链>]
//
// 说话人分离 = pyannote(whisperX 内置,需 HF_TOKEN);VAD = whisperX 自带(铁律「ASR 前必 VAD」由此满足)。
// P1(user-stories C9 Scenario 0)未过前,本脚本不接进 processEpisode 自动链。
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

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

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const [dirArg] = process.argv.slice(2).filter((a) => !a.startsWith("--"));
  const wxIdx = process.argv.indexOf("--wx");
  const urlIdx = process.argv.indexOf("--audio-url");
  if (!dirArg || wxIdx < 0) {
    console.error("用法:node scripts/fetch-source-whisperx.mjs <episodeDir> --wx <whisperx.json> [--audio-url <url>]");
    process.exit(2);
  }
  const dir = resolve(ROOT, dirArg);
  const wx = JSON.parse(readFileSync(process.argv[wxIdx + 1], "utf8"));
  const transcript = convertWhisperx(wx);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "transcript.en.json"), JSON.stringify(transcript));

  const metaPath = join(dir, "meta.json");
  const prev = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, "utf8")) : {};
  const duration = transcript[transcript.length - 1].end;
  const meta = {
    ...prev,
    id: prev.id ?? dirArg.split("/").pop(),
    audio_mp3: urlIdx >= 0 ? process.argv[urlIdx + 1] : prev.audio_mp3 ?? null,
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
