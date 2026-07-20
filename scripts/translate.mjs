#!/usr/bin/env node
// C2 步骤 ②.5 · GLM-5.2 逐字全译(云端存档层)
// 分段并行调 glm-ask,带编号回填,逐段缓存(省额度、可复现)。
// 照搬原文错误(drift #3),保时间戳+说话人。产物 = translation.zh.json。
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = process.argv[2] || "data/episodes/2026-07-08-latent-space-modal";
const CHUNK = Number(process.env.CHUNK || 50);
const CONCURRENCY = Number(process.env.CONCURRENCY || 5);
const MAX_RETRY = 3;

const transcript = JSON.parse(readFileSync(resolve(ROOT, DIR, "transcript.en.json"), "utf8"));
const meta = JSON.parse(readFileSync(resolve(ROOT, DIR, "meta.json"), "utf8"));
const speakerMap = meta.speaker_map;
const SYS =
  readFileSync(resolve(ROOT, "prompts/translate.md"), "utf8") +
  "\n\n---\n注入术语表:\n" +
  readFileSync(resolve(ROOT, "prompts/glossary.md"), "utf8");

const cacheDir = resolve(ROOT, DIR, ".translate-cache");
mkdirSync(cacheDir, { recursive: true });

function segSpeaker(seg) {
  const c = new Map();
  for (const w of seg.words || []) c.set(w.speaker, (c.get(w.speaker) || 0) + 1);
  let best = seg.speaker,
    n = -1;
  for (const [k, v] of c) if (v > n) (best = k), (n = v);
  return speakerMap[best] || best || "Unknown";
}

// 限速:相邻调用最小间隔(压瞬时 RPM,避免瞬时打爆速率限制)。串行"取号"保证并发下也间隔。
const MIN_GAP_MS = Number(process.env.GLM_MIN_GAP_MS || 700);
const MAX_429_RETRY = Number(process.env.GLM_429_RETRY || 5);
let _gate = Promise.resolve();
function ticket() {
  const p = _gate.then(() => new Promise((r) => setTimeout(r, MIN_GAP_MS)));
  _gate = p.catch(() => {});
  return p;
}
const isRateLimit = (msg) => /\b429\b|rate_limit|1302|控制请求频率/.test(String(msg));

// 翻译模型:默认 GLM-4.6(体力活便宜档;整理/浓缩仍用 GLM-5.2)。
// 🔒 标准变更·用户授权 2026-07-19:translate 从 GLM-5.2 改 GLM-4.6 —— 双语对齐下 condense 读英文交叉核对,
//   保真关键项(金句英文逐字/金句中文由5.2重译/专名数字回英文核)不依赖翻译模型;实测质量持平(gray-swan 对比)。
//   同时把调用大头挪出 GLM-5.2 → 根治 429。GLM-4-Flash 实测太弱(漏段挂)已淘汰。见 ADR 0013 / 需求共识留痕。
const TRANSLATE_MODEL = process.env.TRANSLATE_MODEL || "glm-4.6";
function glmAskOnce(system, input, maxTokens) {
  return new Promise((res, rej) => {
    const args = ["--system", system, "--max-tokens", String(maxTokens)];
    if (TRANSLATE_MODEL) args.unshift("--model", TRANSLATE_MODEL);
    const p = spawn("glm-ask", args, {
      stdio: ["pipe", "pipe", "pipe"],
    });
    let out = "",
      err = "";
    p.stdout.on("data", (d) => (out += d));
    p.stderr.on("data", (d) => (err += d));
    p.on("error", rej);
    p.on("close", (code) => (code === 0 ? res(out) : rej(new Error(`glm-ask exit ${code}: ${err}`))));
    p.stdin.write(input);
    p.stdin.end();
  });
}

// 带限速 + 429 指数退避的调用(不动模型/保真:仍是 GLM-5.2,只是调得斯文)
async function glmAsk(system, input, maxTokens = 8000) {
  for (let attempt = 0; ; attempt++) {
    await ticket();
    try {
      return await glmAskOnce(system, input, maxTokens);
    } catch (e) {
      if (isRateLimit(e.message) && attempt < MAX_429_RETRY) {
        const wait = Math.min(60000, 4000 * 2 ** attempt); // 4s→8→16→32→60s
        process.stderr.write(`  ⏳ 429 限流,退避 ${wait / 1000}s 重试(${attempt + 1}/${MAX_429_RETRY})\n`);
        await new Promise((r) => setTimeout(r, wait));
        continue;
      }
      throw e;
    }
  }
}

// 解析 [[n]] 译文(容忍多行译文:非[[开头的行并入上一条)
function parseNumbered(text) {
  const map = new Map();
  let cur = null;
  for (const line of text.split("\n")) {
    const m = line.match(/^\s*\[\[(\d+)\]\]\s?(.*)$/);
    if (m) {
      cur = Number(m[1]);
      map.set(cur, m[2]);
    } else if (cur !== null && line.trim()) {
      map.set(cur, (map.get(cur) + " " + line.trim()).trim());
    }
  }
  return map;
}

// D45 修:GLM-4.6 对整块 50 段一次编号时会稳定漏掉几段。多轮累积——**每轮只补发还缺的段**
// (小批量 GLM 几乎必全返回),而非每次重发整块(重发整块会重复漏同样的段)。缓存存合并后的 idx→zh。
const REFILL_ROUNDS = MAX_RETRY + 3; // 首轮全发 + 若干轮只补缺
async function translateChunk(segs, ci) {
  const cacheFile = resolve(cacheDir, `chunk-${String(ci).padStart(3, "0")}.json`);
  const byText = new Map(segs.map((s) => [s._i, s.text.trim()]));
  const acc = new Map(); // idx -> zh(跨轮累积)
  if (existsSync(cacheFile)) {
    try {
      for (const [k, v] of Object.entries(JSON.parse(readFileSync(cacheFile, "utf8")))) acc.set(Number(k), v);
    } catch {
      /* 缓存损坏/旧格式 → 当空,重译(GLM 005[2]) */
    }
  }
  // 英文本身为空的段:无可译,直接置空(否则会被永远当"缺译")。
  // 解决判据 = acc.has(i):有真译文 or 空英文置了 ""。未解决 = 没这个 key。
  for (const [i, txt] of byText) if (!txt) acc.set(i, "");

  const writeCache = () => {
    const o = {};
    for (const [k, v] of acc) o[k] = v;
    writeFileSync(cacheFile, JSON.stringify(o));
  };
  const stillMissing = () => segs.map((s) => s._i).filter((i) => !acc.has(i));
  let missing = stillMissing();
  for (let round = 0; round < REFILL_ROUNDS && missing.length; round++) {
    const input = missing.map((i) => `[[${i}]] ${byText.get(i)}`).join("\n");
    const got = await glmAsk(SYS, input);
    const m = parseNumbered(got);
    for (const i of missing) {
      const v = m.get(i);
      if (v && v.trim()) acc.set(i, v.trim());
    }
    writeCache(); // 每轮落盘:进程中断也不丢已译段(GLM 005[5])
    missing = stillMissing();
    if (missing.length) process.stderr.write(`  chunk ${ci} 仍缺 ${missing.length} 条,只补发缺段(第 ${round + 1} 轮)\n`);
  }
  if (missing.length) throw new Error(`chunk ${ci} 多轮补译仍缺 ${missing.length} 条(第${missing[0]}起): ${missing.slice(0, 5)}`);
  return segs.map((s) => ({ _i: s._i, zh: acc.get(s._i) ?? "" }));
}

async function pool(items, worker, n) {
  const out = new Array(items.length);
  let idx = 0;
  await Promise.all(
    Array.from({ length: Math.min(n, items.length) }, async () => {
      while (idx < items.length) {
        const k = idx++;
        out[k] = await worker(items[k], k);
      }
    }),
  );
  return out;
}

const segs = transcript.map((s, i) => ({ ...s, _i: i }));
const chunks = [];
for (let i = 0; i < segs.length; i += CHUNK) chunks.push(segs.slice(i, i + CHUNK));

console.log(`全译:${segs.length} 段 → ${chunks.length} 块 × 并行 ${CONCURRENCY}(${TRANSLATE_MODEL || "glm-5.2"})`);
const t0 = Date.now();
const results = await pool(chunks, translateChunk, CONCURRENCY);
const zhByIdx = new Map();
for (const arr of results) for (const r of arr) zhByIdx.set(r._i, r.zh);

const out = transcript.map((s, i) => ({
  seg: i,
  start: s.start,
  end: s.end,
  speaker: segSpeaker(s),
  en: s.text.trim(),
  zh: zhByIdx.get(i) || "",
}));
const empties = out.filter((o) => !o.zh).length;
writeFileSync(resolve(ROOT, DIR, "translation.zh.json"), JSON.stringify(out, null, 1));
console.log(
  `✅ translation.zh.json: ${out.length} 段, 空译 ${empties}, 用时 ${((Date.now() - t0) / 1000).toFixed(1)}s`,
);
if (empties) process.exit(1);
