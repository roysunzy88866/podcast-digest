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

function glmAsk(system, input, maxTokens = 8000) {
  return new Promise((res, rej) => {
    const p = spawn("glm-ask", ["--system", system, "--max-tokens", String(maxTokens)], {
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

async function translateChunk(segs, ci) {
  const cacheFile = resolve(cacheDir, `chunk-${String(ci).padStart(3, "0")}.txt`);
  const idxs = segs.map((s) => s._i);
  const input = segs.map((s) => `[[${s._i}]] ${s.text.trim()}`).join("\n");
  let raw = existsSync(cacheFile) ? readFileSync(cacheFile, "utf8") : null;
  for (let attempt = 0; attempt <= MAX_RETRY && !raw; attempt++) {
    const got = await glmAsk(SYS, input);
    const m = parseNumbered(got);
    const missing = idxs.filter((i) => !m.has(i) || !m.get(i));
    if (missing.length === 0) {
      raw = got;
      writeFileSync(cacheFile, raw);
    } else if (attempt === MAX_RETRY) {
      throw new Error(`chunk ${ci} 缺译 ${missing.length} 条(第${idxs[0]}起): ${missing.slice(0, 5)}`);
    } else {
      process.stderr.write(`  chunk ${ci} 缺 ${missing.length} 条,重试 ${attempt + 1}\n`);
    }
  }
  const m = parseNumbered(raw);
  const miss = idxs.filter((i) => !m.has(i) || !m.get(i));
  if (miss.length) throw new Error(`chunk ${ci} 缓存缺译 ${miss.length} 条,删缓存重跑`);
  return segs.map((s) => ({ _i: s._i, zh: m.get(s._i).trim() }));
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

console.log(`全译:${segs.length} 段 → ${chunks.length} 块 × 并行 ${CONCURRENCY}(GLM-5.2)`);
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
