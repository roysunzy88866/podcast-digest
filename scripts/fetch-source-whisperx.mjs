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

// 下载音频用的浏览器 UA(与 run-pipeline.mjs:90 同款,drift #28):Substack 对裸 node 请求 403。
// 此前这条路只服务 Megaphone/Simplecast/Anchor(不挑 UA),drift #61 把 Lenny's 兜底也接了进来才暴露。
export const BROWSER_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
};

/** C30:下载候选序——中转站(Mac mini 代抓的 Release asset)优先,原直链兜底;没有中转就只有原直链。
 *  中转站 404(没搬到/Mac mini 不在线)自然落到原直链 = 行为与没有 C30 时一致。 */
export function audioUrlCandidates(audioUrl, relayUrl) {
  return relayUrl ? [relayUrl, audioUrl] : [audioUrl];
}

// 模型档 [standard-change: 用户 2026-09-04 拍板「直接换快档」,drift #84;取代 2026-07-24 的 large-v3/medium 两档]:
// 病根实证:large-v3 CPU int8 稳定 2.0× 实时(近 8 班 10 次全在 1.91–2.04×),每班 300 分里转写 2 集就吃掉 ~185 分(60%),
// 产量上限被它钉死在 2–3 集/班。large-v3-turbo(解码层 32→4)同 large-v2 档精度、快数倍;流水线装的是最新 whisperx
// (3.8.6,faster-whisper ≥1.2.0,turbo 在列)。所有时长统一用 turbo —— 它本就比原来给长集的 medium 更快更准,不再分档。
// 首班实测系数后再调 TRANSCRIBE_RATIO(先留 1.9 保守估,宁可少排一集,不撞 5.5h 超时丢产物)。
export const WHISPERX_MODEL = "large-v3-turbo";
export const WHISPERX_FALLBACK_MODEL = "large-v3"; // 快档加载失败(版本不认/权重拉不下)→ 回落原档,别让一整班零产出
export function pickWhisperxModel(_durationSec) {
  return WHISPERX_MODEL;
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

/**
 * ASR 词表 → whisperX --initial_prompt(偏置 AI 专名拼写,不新增内容、不放松闸门)。
 * 病根:LLaMA/vLLM/Harrison Chase 等真专名被听岔,不在转写稿逐字出现 → 事实层闸门 D17 误判「编造」拦下。
 * 灌进 initial_prompt 让模型倾向拼对 → 真专名进转写稿、闸门自然过(治本,非放松校验)。词表见 prompts/asr-vocab.txt。
 * 缺文件/空 → 返回 ""(退化为无 prompt,绝不阻断转写)。
 */
const ASR_VOCAB_PATH = join(ROOT, "prompts/asr-vocab.txt");
const ASR_PROMPT_MAX = 1000; // whisper initial_prompt 只吃 ~224 token;截断=既省无用尾巴又防 spawnSync ARG_MAX(E2BIG)
export function asrInitialPrompt(path = ASR_VOCAB_PATH) {
  try {
    if (!existsSync(path)) return "";
    const text = readFileSync(path, "utf8")
      .replace(/^\uFEFF/, "")                       // 剥 UTF-8 BOM(误存带 BOM 时防首词损坏,GLM 012[4])
      .split("\n")
      .map((l) => l.trim())                         // 逐行清洗:去 CRLF 的 \r、行首尾空格(防脏字符进 prompt)
      .filter((l) => l && !l.startsWith("#"))        // 剔空行与整行注释
      .join(" ")
      .trim();
    return text.slice(0, ASR_PROMPT_MAX);           // 上限保险(词表 ASCII,slice 不切多字节)
  } catch (e) {
    console.error(`⚠️ ASR 词表载入异常,退化为无 prompt(不阻断转写):${e?.message ?? e}`); // GLM 012[1]:非 ENOENT 故障不静默吞
    return "";
  }
}

/** 全程模式:按候选序下载音频(C30:中转站优先、原直链兜底)→ 跑 whisperx CLI(runner 需已装)→ 返回其 JSON 输出。fail-closed。 */
async function runWhisperx(audioUrls, durationSec) {
  if (!process.env.HF_TOKEN) throw new Error("缺 HF_TOKEN env(pyannote 分离要,fail-closed)");
  const model = pickWhisperxModel(durationSec);
  const work = mkdtempSync(join(tmpdir(), "whisperx-"));
  try {
    const audioFile = join(work, "episode.mp3");
    console.log(`── 下载音频(${Math.round(durationSec / 60)} 分)…`);
    // 带浏览器 UA:Substack 对裸 node 请求 403(drift #28 同款;run 31986907759 实证——
    // 兜底改走 whisperX 后,Lenny's 的 api.substack.com 音频直链在 runner 上 403)。
    // 原本只有 Megaphone/Simplecast/Anchor 那些源走这条路、它们不挑 UA,所以一直没暴露。
    // 抛错开头必须保持「音频下载失败」——run-pipeline 靠它识别该登记待搬运(isAudioDownloadFail,C30)。
    let picked = null;
    const errs = [];
    for (const u of audioUrls) {
      try {
        const res = await fetch(u, { redirect: "follow", headers: BROWSER_HEADERS });
        if (!res.ok) {
          errs.push(`HTTP ${res.status}(URL: ${u.slice(0, 80)}…)`);
          continue;
        }
        await pipeline(Readable.fromWeb(res.body), createWriteStream(audioFile));
        picked = u;
        break;
      } catch (e) {
        errs.push(`${String(e?.message ?? e).slice(0, 120)}(URL: ${u.slice(0, 80)}…)`);
      }
    }
    if (!picked) throw new Error(`音频下载失败 ${errs.join(";再试 ")}`);
    if (audioUrls.length > 1)
      console.log(picked === audioUrls[0] ? "── 📦 中转站音频命中(audio-relay)" : "── 📦 中转站未命中 → 已用原直链");
    const initialPrompt = asrInitialPrompt();
    const t0 = Date.now();
    // drift #84:先快档;快档失败(模型名不认/权重拉不下)→ 回落原档再试一次,响亮留痕。原档也失败才算真失败。
    const tries = model === WHISPERX_FALLBACK_MODEL ? [model] : [model, WHISPERX_FALLBACK_MODEL];
    let r;
    for (const m of tries) {
      console.log(`── whisperX 转写(model=${m},CPU int8 + 内置 VAD + pyannote 分离${initialPrompt ? " + AI 专名词表偏置" : ""})…`);
      r = spawnSync(
        "whisperx",
        [audioFile, "--model", m, "--compute_type", "int8", "--language", "en", "--threads", "4",
         ...(initialPrompt ? ["--initial_prompt", initialPrompt] : []),
         "--diarize", "--hf_token", process.env.HF_TOKEN, "--output_dir", work, "--output_format", "json"],
        { stdio: "inherit" },
      );
      if (r.status === 0) break;
      console.error(`   ⚠️ whisperx(model=${m})失败 exit ${r.status ?? "?"}${r.error ? `,${r.error.message}` : ""}${m !== tries.at(-1) ? " → 回落 " + WHISPERX_FALLBACK_MODEL + " 再试(drift #84)" : ""}`);
    }
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
  const relayUrl = flagVal("--relay-url"); // C30:中转站直链(run-pipeline 只对已登记待搬运的集传)
  if (!dirArg || (!wxPath && !transcribe) || (transcribe && !audioUrl)) {
    console.error("用法:node scripts/fetch-source-whisperx.mjs <episodeDir> --wx <whisperx.json> [--audio-url <url>]");
    console.error("     node scripts/fetch-source-whisperx.mjs <episodeDir> --transcribe --audio-url <url> [--duration <秒>] [--relay-url <中转站url>]");
    process.exit(2);
  }
  const dir = resolve(ROOT, dirArg);
  const wx = transcribe
    ? await runWhisperx(audioUrlCandidates(audioUrl, relayUrl), Number(flagVal("--duration")) || 0)
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
