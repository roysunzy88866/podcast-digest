#!/usr/bin/env node
// C4 Scenario 1 · 精华 → 音频(剥 markdown + 分段 + TTS 合成 + ffmpeg 拼接)。
// TTS 引擎:edge-tts 免费默认(晓晓声,drift #13)+ Azure F0 fallback。项目自持,未走全局配音 skill。
//
// 本模块只把已过 C2/C3 闸门的中文精华「配音」,不重新生成任何内容。
// 纯逻辑(剥格式/分段/hash/SSML/args)与副作用(Azure HTTP / ffmpeg / 写文件)分层:
//   · 纯函数可单测、可变异验证;
//   · 副作用包一层可注入的薄壳(synthesizeEpisode 的 deps),测试注入假实现,不烧额度不跑二进制。
//
// ⚠️ key 用户自持(.env 的 AZURE_SPEECH_KEY/AZURE_SPEECH_REGION),绝不进仓库/代码。
//    缺 key/region → fail-closed 抛错,绝不假装合成成功(本项目铁律:执行不靠自述)。
import { readFileSync, writeFileSync, existsSync, statSync, mkdtempSync, mkdirSync, rmSync, realpathSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";
import { spawn } from "node:child_process";
import { createHash } from "node:crypto";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const DEFAULT_VOICE = "zh-CN-XiaoxiaoNeural"; // 晓晓(2026-07-18 用户拍板默认声)
// 默认引擎 = edge-tts(白嫖 Edge「大声朗读」的微软云端神经语音,免 key;drift #13)。
// CLI 路径:项目 .venv/bin/edge-tts;可用 EDGE_TTS_BIN 覆盖。
export const EDGE_TTS_BIN = process.env.EDGE_TTS_BIN || resolve(ROOT, ".venv/bin/edge-tts");
export const AZURE_MP3_FORMAT = "audio-24khz-48kbitrate-mono-mp3"; // Azure fallback 的 mp3 输出格式

// ────────────────────────────────────────────────────────────────────────────
// 1) 剥 markdown → 可朗读的纯中文文本
// ────────────────────────────────────────────────────────────────────────────

/**
 * 把 digest 的 tldr+digest_md 剥成适合 TTS 朗读的纯文本。
 * 去掉一切「读出来会变噪音」的标记,保留可读文字(含术语解释括号)。
 *
 * 处理项(C4 Scenario 1c:不能读出「方括号井号脱字符」):
 *   · `#`/`##`… 标题标记 → 去标记留标题文字
 *   · `[[file|显示名]]` / `[[显示名]]` → 只留显示名;`![[..]]` 嵌入整体去掉
 *   · 行内时间戳坐标 `[00:34-02:17 说话人]` / `【..】` → 整体去掉(是溯源坐标,非朗读内容)
 *   · `[文字](链接)` → 只留文字
 *   · 行末 `^块ID`、`> [!info]`/callout 标记、`>` 引用前缀 → 去掉(【背景】等中文文字保留)
 *   · `**加粗**`/`*斜体*`/`__x__`/`_x_`、行内代码 `` `x` `` → 去标记留文字
 *   · 表格管道符 `|` → 顿号停顿;`|---|` 分隔行整行去掉
 * 术语解释半角/全角括号(不含 mm:ss)一律保留 —— 它们是给听众听的正文。
 */
export function stripMarkdownForTTS(md) {
  let s = String(md ?? "").replace(/\r\n?/g, "\n");

  // 块引用嵌入 ![[集#^块|别名]] —— 整体去掉(digest_md 一般没有;防御性)
  s = s.replace(/!\[\[[^\]]*\]\]/g, "");
  // 双链 [[file|显示名]] / [[显示名]] —— 只留显示名(管道后段;无管道即整体)
  s = s.replace(/\[\[([^\]]+)\]\]/g, (_, inner) => {
    const parts = String(inner).split("|");
    return parts[parts.length - 1].trim();
  });
  // 行内时间戳坐标(方括号 / 全角括号 / 含 mm:ss 的圆括号)→ 整体去掉
  s = s.replace(/[[【]([^\]】\n]*\d{1,2}:\d{2}[^\]】\n]*)[\]】]/g, "");
  s = s.replace(/[（(]([^）)\n]*\d{1,2}:\d{2}[^）)\n]*)[）)]/g, "");
  // markdown 链接 [文字](链接) → 只留文字(时间戳已去,不会误伤)
  s = s.replace(/\[([^\]\n]+)\]\([^)\n]*\)/g, "$1");

  // 行首标记:表格分隔行 / 引用前缀 / callout 类型标记 / 标题标记
  s = s
    .split("\n")
    .map((line) => {
      if (/^\s*\|?[\s:|-]*-[\s:|-]*\|[\s:|-]*$/.test(line)) return ""; // |---|:--:| 分隔行
      let L = line.replace(/^\s*>+\s?/, ""); // 引用前缀(可多层)
      L = L.replace(/^\s*\[![^\]]*\]\s*/, ""); // callout [!info] 标记
      L = L.replace(/^\s*#{1,6}\s*/, ""); // 标题 #（留文字）
      return L;
    })
    .join("\n");

  // 行末块 ID ^q1
  s = s.replace(/[ \t]*\^[A-Za-z0-9][A-Za-z0-9_-]*(?=\s*$)/gm, "");
  // 加粗/斜体 / 下划线强调(下划线避开 snake_case)
  s = s.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*\n]+)\*/g, "$1");
  s = s.replace(/(?<![A-Za-z0-9_])__([^_\n]+)__(?![A-Za-z0-9_])/g, "$1");
  s = s.replace(/(?<![A-Za-z0-9_])_([^_\n]+)_(?![A-Za-z0-9_])/g, "$1");
  // 行内代码 `x` → x
  s = s.replace(/`([^`\n]+)`/g, "$1");
  // 表格管道符 → 顿号停顿
  s = s
    .split("\n")
    .map((line) =>
      line.includes("|")
        ? line.replace(/^\s*\|/, "").replace(/\|\s*$/, "").replace(/\s*\|\s*/g, "、")
        : line,
    )
    .join("\n");

  // 收尾:去 CJK 标点前空白、压多空格、去行尾空白、压 3+ 空行
  s = s.replace(/[ \t]+([，。、；：！？）】」』])/g, "$1");
  s = s.replace(/[ \t]{2,}/g, " ");
  s = s
    .split("\n")
    .map((l) => l.replace(/[ \t]+$/, ""))
    .join("\n");
  s = s.replace(/\n{3,}/g, "\n\n").trim();
  return s;
}

// ────────────────────────────────────────────────────────────────────────────
// 2) 分段:≤max 字符,绝不从句子中间硬截断,拼回去 == 原文
// ────────────────────────────────────────────────────────────────────────────

/** 在每个 boundary 命中处「其后」切分,保留分隔符本身(拼接必然还原原串) */
function splitAfter(str, re) {
  const parts = [];
  let last = 0;
  for (const m of str.matchAll(re)) {
    const end = m.index + m[0].length;
    parts.push(str.slice(last, end));
    last = end;
  }
  if (last < str.length) parts.push(str.slice(last));
  return parts.filter((p) => p.length > 0);
}

// 由粗到细:段落 → 句末标点 → 换行 → 从句停顿(超长句安全网,超出规格但 fail-safe)
const CHUNK_BOUNDARIES = [/\n{2,}/g, /[。！？!?…]+/g, /\n/g, /[，,、；;：:]/g];

/** 递归切到每个原子 ≤max;自然边界用尽仍超长 → 硬切(保 ≤max 与无损两条硬约束) */
function splitLossless(s, max, level = 0) {
  if (s.length <= max) return [s];
  if (level >= CHUNK_BOUNDARIES.length) {
    // 现实语料到不了这里(句子远短于 3000);仅防病态无标点长串,保证 ≤max 不外溢到 Azure
    const out = [];
    for (let i = 0; i < s.length; i += max) out.push(s.slice(i, i + max));
    return out;
  }
  const out = [];
  for (const p of splitAfter(s, CHUNK_BOUNDARIES[level])) {
    if (p.length <= max) out.push(p);
    else out.push(...splitLossless(p, max, level + 1));
  }
  return out;
}

/**
 * 把文本切成每块 ≤max 字符的数组。
 * 保证:① 每块 ≤max ② chunks.join("") === 原文(无丢字无重复)③ 优先按段落/句末切,不硬断句子。
 */
export function chunkForSynthesis(text, max = 3000) {
  const s = String(text ?? "");
  const M = Math.max(1, Math.floor(max));
  if (!s) return [];
  if (s.length <= M) return [s];
  const atoms = splitLossless(s, M);
  const chunks = [];
  let cur = "";
  for (const a of atoms) {
    if (cur.length && cur.length + a.length > M) {
      chunks.push(cur);
      cur = a;
    } else cur += a;
  }
  if (cur.length) chunks.push(cur);
  return chunks;
}

// ────────────────────────────────────────────────────────────────────────────
// 3) 合成单块 —— 默认 edge-tts(免 key);Azure 为可插拔 fallback(drift #13)。都 fail-closed。
// ────────────────────────────────────────────────────────────────────────────

/**
 * 【默认引擎】用 edge-tts CLI 合成单块中文 → 写到 outPath(mp3)。**免 key**(白嫖 Edge 大声朗读)。
 * 非官方接口:进程非 0 / 产物空 → 抛错,不留半条冒充成功(fail-closed,依用户文档「必须失败兜底」)。
 * spawnImpl 可注入让测试 mock,不真跑 edge-tts。
 */
export async function synthesizeChunk(text, { voice = DEFAULT_VOICE, outPath, bin = EDGE_TTS_BIN, spawnImpl = spawn, rate } = {}) {
  const t = String(text ?? "");
  if (!t.trim()) throw new Error("[tts] 待合成文本为空(fail-closed)");
  if (!outPath) throw new Error("[tts] synthesizeChunk 缺 outPath(fail-closed)");
  const args = ["--voice", voice, "--text", t, "--write-media", outPath];
  if (rate) args.push("--rate", rate);
  await new Promise((res, rej) => {
    const p = spawnImpl(bin, args, { stdio: ["ignore", "ignore", "pipe"] });
    let err = "";
    p.stderr?.on?.("data", (d) => (err += String(d)));
    p.on("error", (e) => rej(new Error(`[tts] edge-tts 启动失败(装了吗?${bin}):${e.message}`)));
    p.on("close", (c) => (c === 0 ? res() : rej(new Error(`[tts] edge-tts exit ${c}: ${String(err).slice(-300)}`))));
  });
  if (!existsSync(outPath) || statSync(outPath).size === 0)
    throw new Error(`[tts] edge-tts 产物空/缺:${outPath}(fail-closed,非官方接口须兜底)`);
  return outPath;
}

export function xmlEscape(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** SSML:<speak xml:lang><voice name>…</voice></speak>,文本 XML 转义 */
export function buildSsml(text, voice = DEFAULT_VOICE, lang = "zh-CN") {
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${lang}"><voice name="${voice}">${xmlEscape(
    text,
  )}</voice></speak>`;
}

/** 单块 Azure F0 合成终结点 */
export function ttsEndpoint(region) {
  return `https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`;
}

/**
 * 【fallback 引擎】Azure Speech F0 REST 合成单块 → 返回 mp3 字节(Buffer)。
 * edge-tts 挂了才用(drift #13)。需 key/region(用户自持)。HTTP 结构按 Azure 规范。
 * key/region 缺失 → 抛清晰错误(fail-closed)。非 2xx / 空响应 → 抛错,不产半条冒充成功。
 * 注:返回字节;要接进 synthesizeEpisode(outPath 接口)时用 deps.synth 包一层写文件。
 */
export async function synthesizeChunkAzure(
  text,
  { voice = DEFAULT_VOICE, key, region, outputFormat = AZURE_MP3_FORMAT, fetchImpl = globalThis.fetch } = {},
) {
  if (!key) throw new Error("[tts] 缺 AZURE_SPEECH_KEY —— 没有 key 绝不假装合成(fail-closed)");
  if (!region) throw new Error("[tts] 缺 AZURE_SPEECH_REGION —— 无法定位终结点(fail-closed)");
  if (typeof fetchImpl !== "function") throw new Error("[tts] fetchImpl 不可用");
  const t = String(text ?? "");
  if (!t.trim()) throw new Error("[tts] 待合成文本为空(fail-closed)");

  const res = await fetchImpl(ttsEndpoint(region), {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": key,
      "Content-Type": "application/ssml+xml",
      "X-Microsoft-OutputFormat": outputFormat,
      "User-Agent": "podcast-digest-tts",
    },
    body: buildSsml(t, voice),
  });

  if (!res || !res.ok) {
    const status = res?.status ?? "?";
    let detail = "";
    try {
      detail = res && typeof res.text === "function" ? await res.text() : "";
    } catch {
      /* 读不出错误体不影响主报错 */
    }
    throw new Error(
      `[tts] Azure 合成失败 HTTP ${status} ${res?.statusText ?? ""}${detail ? " · " + String(detail).slice(0, 200) : ""}`.trim(),
    );
  }
  const bytes = Buffer.from(await res.arrayBuffer());
  if (!bytes.length) throw new Error("[tts] Azure 返回空音频(fail-closed:不产半条冒充成功)");
  return bytes;
}

// ────────────────────────────────────────────────────────────────────────────
// 4) ffmpeg 拼接参数(纯函数,便于测试;不真跑)
// ────────────────────────────────────────────────────────────────────────────

/** 拼接多个 mp3 片段的 ffmpeg 参数数组(concat 协议 + copy,同格式不重编码) */
export function ffmpegConcatArgs(partPaths, outPath) {
  if (!Array.isArray(partPaths) || partPaths.length === 0)
    throw new Error("[tts] ffmpegConcatArgs 需要至少一个输入片段");
  if (!outPath) throw new Error("[tts] ffmpegConcatArgs 缺输出路径");
  return ["-y", "-i", `concat:${partPaths.join("|")}`, "-acodec", "copy", outPath];
}

// ────────────────────────────────────────────────────────────────────────────
// 5) 源文本 hash(缓存幂等 + gate 陈旧检测)
// ────────────────────────────────────────────────────────────────────────────

/** 音频源文本 = tldr + digest_md(与合成输入同源,便于 hash 一致) */
export function sourceText(digest) {
  return String(digest?.tldr ?? "") + "\n\n" + String(digest?.digest_md ?? "");
}

/** 对 tldr+digest_md 求 sha256(缓存幂等 + gate-audio 陈旧检测用) */
export function sourceHash(digest) {
  return createHash("sha256").update(sourceText(digest), "utf8").digest("hex");
}

// ────────────────────────────────────────────────────────────────────────────
// 6) 编排:strip → chunk → 逐块合成 → ffmpeg 拼接 → audio.mp3 + audio.meta.json(带缓存)
// ────────────────────────────────────────────────────────────────────────────

/** 纯规划(无副作用):算出待合成文本、分块、hash —— 可单测 */
export function planEpisodeAudio(digest, { voice = DEFAULT_VOICE, max = 3000 } = {}) {
  const text = stripMarkdownForTTS(sourceText(digest));
  const chunks = chunkForSynthesis(text, max);
  return { text, chunks, hash: sourceHash(digest), voice, chunkCount: chunks.length };
}

/** 真跑 ffmpeg 拼接(副作用,默认薄壳) */
export function runFfmpegConcat(partPaths, outPath) {
  return new Promise((res, rej) => {
    const p = spawn("ffmpeg", ffmpegConcatArgs(partPaths, outPath), { stdio: ["ignore", "ignore", "pipe"] });
    let err = "";
    p.stderr.on("data", (d) => (err += d));
    p.on("error", rej);
    p.on("close", (c) => (c === 0 ? res(outPath) : rej(new Error(`ffmpeg concat exit ${c}: ${err.slice(-300)}`))));
  });
}

/** ffprobe 读时长(秒);读不了 → reject(gate-audio 复用为默认 probe) */
export function ffprobeDuration(path) {
  return new Promise((res, rej) => {
    const p = spawn(
      "ffprobe",
      ["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", path],
      { stdio: ["ignore", "pipe", "pipe"] },
    );
    let out = "",
      err = "";
    p.stdout.on("data", (d) => (out += d));
    p.stderr.on("data", (d) => (err += d));
    p.on("error", rej);
    p.on("close", (c) => {
      const v = parseFloat(String(out).trim());
      if (c === 0 && Number.isFinite(v)) res(v);
      else rej(new Error(`ffprobe 读不了 ${path}: exit ${c} ${err.slice(-200)}`));
    });
  });
}

const defaultDeps = {
  join,
  resolveEpisodeDir: (id) => resolve(ROOT, "data/episodes", id),
  exists: (p) => existsSync(p),
  readFile: (p) => readFileSync(p, "utf8"),
  writeFile: (p, s) => writeFileSync(p, s),
  writeBytes: (p, b) => writeFileSync(p, b),
  ensureDir: (d) => mkdirSync(d, { recursive: true }),
  mkdtemp: (pfx) => mkdtempSync(join(tmpdir(), pfx)),
  rmrf: (d) => rmSync(d, { recursive: true, force: true }),
  synth: (text, o) => synthesizeChunk(text, o),
  concat: (parts, out) => runFfmpegConcat(parts, out),
  probe: (p) => ffprobeDuration(p),
  now: () => new Date().toISOString(),
};

/**
 * 编排入口:一集 digest → data/episodes/<id>/audio.mp3 + audio.meta.json。
 *   缓存/幂等:meta 里 source hash 未变且音频还在 → 跳过合成(防重复计费)。
 *   副作用全走可注入的 deps 薄壳,测试注入假实现验证编排与缓存,不烧额度、不跑二进制。
 */
export async function synthesizeEpisode(
  digest,
  { id, outDir, voice = DEFAULT_VOICE, key, region, fetchImpl = globalThis.fetch, force = false, max = 3000, deps = {} } = {},
) {
  const io = { ...defaultDeps, ...deps };
  const dir = outDir ?? io.resolveEpisodeDir(id);
  const audioPath = io.join(dir, "audio.mp3");
  const metaPath = io.join(dir, "audio.meta.json");
  const plan = planEpisodeAudio(digest, { voice, max });

  // 缓存命中:源未变 + 音频在 → 跳过(幂等,防重复计费)
  if (!force && io.exists(audioPath) && io.exists(metaPath)) {
    let prev = null;
    try {
      prev = JSON.parse(io.readFile(metaPath));
    } catch {
      prev = null;
    }
    if (prev && prev.source_sha256 === plan.hash) return { skipped: true, reason: "cache-hit", audioPath, metaPath, meta: prev };
  }

  if (!plan.chunks.length) throw new Error(`[tts] ${id}: 精华为空,无可合成(fail-closed)`);

  const tmp = io.mkdtemp("tts-");
  const parts = [];
  try {
    for (let i = 0; i < plan.chunks.length; i++) {
      const p = io.join(tmp, `part-${String(i).padStart(4, "0")}.mp3`);
      await io.synth(plan.chunks[i], { voice, outPath: p }); // edge-tts 直接写 outPath
      parts.push(p);
    }
    io.ensureDir(dir);
    await io.concat(parts, audioPath);
  } finally {
    io.rmrf(tmp);
  }

  const duration = await io.probe(audioPath);
  if (!(duration > 0)) throw new Error(`[tts] ${id}: 合成后时长 ${duration}(异常,疑空壳,fail-closed)`);

  const meta = {
    id,
    voice,
    engine: "edge-tts",
    chunk_count: plan.chunkCount,
    duration_sec: duration,
    source_sha256: plan.hash,
    format: "mp3-24khz-48kbps-mono",
    generated_at: io.now(),
  };
  io.writeFile(metaPath, JSON.stringify(meta, null, 2));
  return { skipped: false, audioPath, metaPath, meta, chunkCount: plan.chunkCount };
}

// ── CLI:node scripts/tts.mjs <data/episodes/xxx> ──(路径含中文,用 realpath 稳健判主入口)
const isMain = (() => {
  try {
    return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
})();
if (isMain) {
  const dir = process.argv[2] || "data/episodes/2026-07-08-latent-space-modal";
  const abs = resolve(ROOT, dir);
  const id = abs.split("/").pop();
  const digest = JSON.parse(readFileSync(join(abs, "digest.json"), "utf8"));
  const plan = planEpisodeAudio(digest);
  console.log(`── ${id} · TTS 规划(edge-tts,免 key)──`);
  console.log(`  剥后文本 ${plan.text.length} 字 → ${plan.chunkCount} 块;声音 ${plan.voice}`);
  if (!existsSync(EDGE_TTS_BIN)) {
    console.error(`⛔ 未合成:找不到 edge-tts(${EDGE_TTS_BIN})。装:python3 -m venv .venv && .venv/bin/pip install edge-tts;或设 EDGE_TTS_BIN。`);
    process.exit(2);
  }
  const r = await synthesizeEpisode(digest, { id, outDir: abs });
  console.log(
    r.skipped
      ? `✅ 缓存命中(源未变),跳过合成:${r.audioPath}`
      : `✅ 已合成 ${r.audioPath}(${r.meta.duration_sec.toFixed(1)}s, ${r.chunkCount} 块)`,
  );
}
