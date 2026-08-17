// C28 · 用 feed 自带的官方转写稿取源(ADR 0024)· IO 层
//
// 用法: node scripts/fetch-source-feed.mjs <episodeDir> --url <转写稿URL> --kind <json|srt|vtt> [--audio-url <直链>]
//
// 与 fetch-source-whisperx.mjs 平行的一条**便宜通道**:那条要烧 2.8h CPU 听一遍,
// 这条几秒下载完 —— 前提是播客把稿子挂在 RSS 的 <podcast:transcript> 里。
// 写出的文件与 whisperX 路线完全一致(transcript.en.json + meta.json 的时长/来源字段),
// 所以下游(浓缩、归属闸门、事实层闸门)一行都不用改。fail-closed:解析不出来就非零退出,
// 让 run-pipeline 回落 ASR(不静默产出空稿)。

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parseFeedTranscript } from "./feed-transcript.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// 与 run-pipeline.mjs:90 / fetch-source-whisperx 同款浏览器 UA(drift #28/#62:某些 CDN 对裸 node 请求 403)
const BROWSER_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
};

/** 稿子末段的结束时间 = 本集时长(与 whisperx 路线同口径,供归属闸门比对官方时长) */
export function transcriptDuration(transcript) {
  return transcript.reduce((mx, s) => Math.max(mx, Number(s.end) || 0), 0);
}

export async function fetchFeedTranscript(dirArg, { url, kind, audioUrl }) {
  const dir = join(ROOT, dirArg);
  // 超时是硬要求(GLM 001[2]):CDN 若挂起(不响应也不断开),node 的 fetch 没有默认超时 →
  // 会白占 GitHub Actions 那 6h 上限、卡死整条流水线。这里 60s 断掉,抛错交上层回落 ASR。
  const res = await fetch(url, { redirect: "follow", headers: BROWSER_HEADERS, signal: AbortSignal.timeout(60_000) });
  if (!res.ok) throw new Error(`转写稿下载失败 HTTP ${res.status}(${String(url).slice(0, 90)}…)`);
  const raw = await res.text();
  const transcript = parseFeedTranscript(kind, raw);
  if (!transcript) throw new Error(`转写稿解析不出内容(kind=${kind},${raw.length} 字节)—— 不产空稿,交回落 ASR`);

  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "transcript.en.json"), JSON.stringify(transcript));

  const metaPath = join(dir, "meta.json");
  // meta.json 坏了(并发写坏/半成品)不该把这一集推回 2.8h 的 ASR —— 拿默认值继续(GLM 001[1])。
  // 这里只影响「沿用旧字段」,id/时长/来源都是下面重算的,丢旧字段无害。
  let prev = {};
  if (existsSync(metaPath)) {
    try {
      prev = JSON.parse(readFileSync(metaPath, "utf8"));
    } catch {
      console.log("   ⚠️ 已有 meta.json 解析不了 → 按空白起(不因此回落 ASR)");
    }
  }
  const duration = transcriptDuration(transcript);
  const meta = {
    ...prev,
    id: prev.id ?? dirArg.split("/").pop(),
    audio_mp3: audioUrl ?? prev.audio_mp3 ?? null,
    duration_sec: duration,
    transcript_source: `节目方随 RSS 发布的官方转写稿(<podcast:transcript> ${kind});由 scripts/fetch-source-feed.mjs 转换`,
    transcript_segments: transcript.length,
    // 不标 asr:true —— 这是节目方的官方稿,不是我们听出来的
    feed_transcript_url: url,
  };
  writeFileSync(metaPath, JSON.stringify(meta, null, 2));
  console.log(
    `✅ feed 官方稿 → ${dirArg}:${transcript.length} 段,时长 ${Math.floor(duration / 60)} 分(省掉一次 ASR)`,
  );
  return transcript;
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const argv = process.argv.slice(2);
  const flag = (n) => {
    const i = argv.indexOf(n);
    return i >= 0 ? argv[i + 1] : null;
  };
  const dirArg = argv[0];
  const url = flag("--url");
  const kind = flag("--kind");
  if (!dirArg || !url || !kind) {
    console.error("用法: node scripts/fetch-source-feed.mjs <episodeDir> --url <转写稿URL> --kind <json|srt|vtt> [--audio-url <直链>]");
    process.exit(2);
  }
  fetchFeedTranscript(dirArg, { url, kind, audioUrl: flag("--audio-url") }).catch((e) => {
    console.error(`⛔ ${e.message}`);
    process.exit(1);
  });
}
