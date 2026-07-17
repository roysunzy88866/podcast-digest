#!/usr/bin/env node
// C2 步骤 ③ · GLM-5.2 浓缩成导读式精华(输出 digest.json)
// 输入=双语对齐稿(中文供理解、英文供逐字摘金句、时间戳+说话人供溯源)。
// 长上下文整读,一次调用。产物 digest.json 交机器闸门(gate.mjs)逐条卡。
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = process.argv[2] || "data/episodes/2026-07-08-latent-space-modal";
const MAX_RETRY = 3;

const tr = JSON.parse(readFileSync(resolve(ROOT, DIR, "translation.zh.json"), "utf8"));
const SYS =
  readFileSync(resolve(ROOT, "prompts/condense.md"), "utf8") +
  "\n\n---\n术语表:\n" +
  readFileSync(resolve(ROOT, "prompts/glossary.md"), "utf8");

const mmss = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
// 双语对齐输入:每段 [mm:ss 说话人] 英文 ‖ 中文
const bilingual = tr.map((s) => `[${mmss(s.start)} ${s.speaker}] ${s.en} ‖ ${s.zh}`).join("\n");
const INPUT = `以下是本集完整双语对齐转写稿(每段:[时间戳 说话人] 英文 ‖ 中文)。整读后按 system 要求浓缩输出 JSON。\n\n${bilingual}`;

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
    p.on("close", (c) => (c === 0 ? res(out) : rej(new Error(`glm-ask exit ${c}: ${err}`))));
    p.stdin.write(input);
    p.stdin.end();
  });
}

function extractJson(text) {
  let t = text.trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) t = fence[1].trim();
  const a = t.indexOf("{");
  const b = t.lastIndexOf("}");
  if (a < 0 || b < 0) return null;
  try {
    return JSON.parse(t.slice(a, b + 1));
  } catch {
    return null;
  }
}

const cacheFile = resolve(ROOT, DIR, ".digest-raw.txt");
let obj = null;
if (process.env.FORCE !== "1" && existsSync(cacheFile)) {
  obj = extractJson(readFileSync(cacheFile, "utf8"));
  if (obj) console.log("(用 .digest-raw.txt 缓存)");
}
for (let attempt = 0; attempt <= MAX_RETRY && !obj; attempt++) {
  console.log(`浓缩:GLM-5.2 整读 ${tr.length} 段双语稿… (第 ${attempt + 1} 次)`);
  const raw = await glmAsk(SYS, INPUT);
  writeFileSync(cacheFile, raw);
  obj = extractJson(raw);
  if (!obj && attempt === MAX_RETRY) {
    console.error("❌ 浓缩输出非合法 JSON,已存 .digest-raw.txt,人工看");
    process.exit(1);
  }
  if (!obj) console.error("  输出非 JSON,重试");
}

// 基本校验
const errs = [];
if (!obj.tldr) errs.push("缺 tldr");
if (!obj.digest_md || obj.digest_md.length < 300) errs.push("digest_md 太短或缺");
if (!Array.isArray(obj.quotes) || obj.quotes.length < 4) errs.push("quotes 少于 4 条");
for (const [i, q] of (obj.quotes || []).entries()) {
  for (const k of ["en", "zh", "timestamp", "speaker"]) if (!q[k]) errs.push(`quote#${i + 1} 缺 ${k}`);
}
writeFileSync(resolve(ROOT, DIR, "digest.json"), JSON.stringify(obj, null, 2));
console.log(`✅ digest.json: tldr(${obj.tldr?.length}字) digest_md(${obj.digest_md?.length}字) quotes(${obj.quotes?.length}条)`);
if (errs.length) {
  console.error("⚠️ 结构问题:", errs.join(" / "));
  process.exit(1);
}
