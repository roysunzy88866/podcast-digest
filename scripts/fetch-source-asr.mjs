#!/usr/bin/env node
// D22 进料口:无官方稿的集 → AssemblyAI ASR(含说话人分离 + 逐词时间戳)→ 现有流水线吃的 transcript.en.json。
//
// 纯转换(asrToTranscript/defaultSpeakerMap/speakerEvidence)可单测;AssemblyAI HTTP(fetchAsr)可注入 fetchImpl。
// key 用户自持,从 env 读(运行时注入,不落盘、不回显)。fail-closed。
// P1 已验(docs/d22-p1-assemblyai核验证据.md):国内直连、分离准、质量对得上官方稿、无幻觉 → 无需 VAD。
import { writeFileSync, mkdirSync, realpathSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const AAI = "https://api.assemblyai.com/v2/transcript";

/** AssemblyAI 说话人标签(A/B/C…)→ WhisperX 风格 SPEAKER_xx(按字母序 A→01、B→02…),与官方稿同格式 */
export function defaultSpeakerMap(assembly) {
  const labels = [...new Set((assembly.utterances || []).map((u) => u.speaker))].filter((x) => x != null).sort();
  const m = {};
  labels.forEach((l, i) => (m[l] = `SPEAKER_${String(i + 1).padStart(2, "0")}`));
  return m;
}

/** AssemblyAI 结果 → transcript.en.json(段数组:start/end 秒、text、words[{word,start,end,score,speaker}]、speaker) */
export function asrToTranscript(assembly, speakerMap = null) {
  const map = speakerMap || defaultSpeakerMap(assembly);
  return (assembly.utterances || []).map((u) => {
    const spk = map[u.speaker] ?? u.speaker ?? null;
    return {
      start: (u.start ?? 0) / 1000,
      end: (u.end ?? 0) / 1000,
      text: u.text ?? "",
      words: (u.words || []).map((w) => ({
        word: " " + (w.text ?? ""), // WhisperX 逐词带前导空格,与官方稿同形
        start: (w.start ?? 0) / 1000,
        end: (w.end ?? 0) / 1000,
        score: w.confidence ?? null,
        speaker: map[w.speaker] ?? spk,
      })),
      speaker: spk,
    };
  });
}

/** 每个说话人的证据(发言段数 + 开场首句),供用户点头分配真名(机器定不了谁是谁,同 C2) */
export function speakerEvidence(assembly, speakerMap = null) {
  const map = speakerMap || defaultSpeakerMap(assembly);
  const by = {};
  for (const u of assembly.utterances || []) {
    const s = map[u.speaker] ?? u.speaker;
    if (s == null) continue; // [GLM·5] 跳过无说话人标签的段,不污染证据
    by[s] ??= { segs: 0, firstStart: (u.start ?? 0) / 1000, firstText: (u.text ?? "").slice(0, 140) };
    by[s].segs++;
  }
  return by;
}

/** 调 AssemblyAI 转写(含说话人分离)。fetchImpl/pollMs 可注入;缺 key/url fail-closed;转写 error 抛错不静默 */
export async function fetchAsr(audioUrl, { key, fetchImpl = globalThis.fetch, pollMs = 8000, maxPolls = 60 } = {}) {
  if (!key) throw new Error("[asr] 缺 ASSEMBLYAI_API_KEY(fail-closed)");
  if (!audioUrl) throw new Error("[asr] 缺 audio_url(fail-closed)");
  const H = { authorization: String(key).trim(), "content-type": "application/json" }; // [GLM·6] trim 防尾部换行致静默 401
  // [GLM·1/2] 先查 ok,非 2xx / 非 JSON 都给清晰业务错误(不让 500 HTML 页把 .json() 炸成不可读异常)
  const asJson = async (res, what) => {
    if (!res || !res.ok) throw new Error(`[asr] ${what} HTTP ${res?.status ?? "?"}(fail-closed,查 key/网络)`);
    try {
      return await res.json();
    } catch {
      throw new Error(`[asr] ${what} 响应非 JSON(fail-closed)`);
    }
  };
  const sub = await asJson(
    await fetchImpl(AAI, { method: "POST", headers: H, body: JSON.stringify({ audio_url: audioUrl, speaker_labels: true, language_code: "en" }) }),
    "提交",
  );
  if (!sub || !sub.id) throw new Error(`[asr] 提交失败:${JSON.stringify(sub).slice(0, 200)}`);
  for (let i = 0; i < maxPolls; i++) {
    await new Promise((s) => setTimeout(s, pollMs));
    const r = await asJson(await fetchImpl(`${AAI}/${sub.id}`, { headers: H }), "轮询");
    if (r.status === "completed") return r;
    if (r.status === "error") throw new Error(`[asr] 转写出错:${r.error}`);
  }
  throw new Error("[asr] 轮询超时(fail-closed)");
}

// CLI: node scripts/fetch-source-asr.mjs <audio_url> <out_dir>
const isMain = (() => {
  try {
    return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
})();
if (isMain) {
  const [audioUrl, outDir] = process.argv.slice(2);
  if (!audioUrl || !outDir) {
    console.error("用法:node scripts/fetch-source-asr.mjs <audio_url> <out_dir>");
    process.exit(2);
  }
  const key = process.env.ASSEMBLYAI_API_KEY;
  if (!key) {
    console.error("⛔ 缺 ASSEMBLYAI_API_KEY(运行时注入,不落盘;从你的 Assembly.md 现读)");
    process.exit(2);
  }
  console.log("── ASR 转写中(AssemblyAI,含说话人分离)──");
  const r = await fetchAsr(audioUrl, { key });
  const map = defaultSpeakerMap(r);
  const transcript = asrToTranscript(r, map);
  const dir = resolve(ROOT, outDir);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "transcript.en.json"), JSON.stringify(transcript));
  const ev = speakerEvidence(r, map);
  writeFileSync(join(dir, "asr-speaker-evidence.json"), JSON.stringify(ev, null, 2));
  console.log(`✅ transcript.en.json:${transcript.length} 段、${(r.words || []).length} 词 → ${outDir}`);
  console.log("── 说话人证据(机器定不了真名,请据此点头分配 speaker_map)──");
  for (const [s, e] of Object.entries(ev)) console.log(`  ${s}: ${e.segs} 段 · 开场[${e.firstStart | 0}s] "${e.firstText}"`);
  console.log("→ 把真名填进 meta.json 的 speaker_map,再跑 translate → condense → gate。");
}
