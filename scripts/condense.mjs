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

const mmss = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

// maxTokens 16000:长集浓缩输出较大,给足余量防截断(短集到不了上限,无影响)。
function glmAsk(system, input, maxTokens = 16000) {
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

/**
 * 把 JSON 字符串**字面量内部**的裸控制字符(换行/回车/Tab)转义。
 * GLM 输出长多行字符串(digest_md)时常把真换行直接塞进字符串 → "Bad control character"(长集 lab E2E 逼出)。
 * 只在 in-string 且非转义态时替换,结构空白不动。
 */
export function escapeCtrlInStrings(s) {
  let out = "", inStr = false, esc = false;
  for (const ch of s) {
    if (esc) { out += ch; esc = false; continue; }
    if (ch === "\\") { out += ch; esc = true; continue; }
    if (ch === '"') { inStr = !inStr; out += ch; continue; }
    if (inStr && ch === "\n") { out += "\\n"; continue; }
    if (inStr && ch === "\r") { out += "\\r"; continue; }
    if (inStr && ch === "\t") { out += "\\t"; continue; }
    out += ch;
  }
  return out;
}

export function extractJson(text) {
  let t = text.trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) t = fence[1].trim();
  const a = t.indexOf("{");
  const b = t.lastIndexOf("}");
  if (a < 0 || b < 0) return null;
  const slice = t.slice(a, b + 1);
  try {
    return JSON.parse(slice);
  } catch {
    // 兜底:GLM 常在长字符串里塞裸换行 → 转义后重试
    try {
      return JSON.parse(escapeCtrlInStrings(slice));
    } catch {
      return null;
    }
  }
}

/** 结构校验(抽成函数:重试循环要用它,不能只在循环外算一次) */
function validate(o) {
  const errs = [];
  if (!o || typeof o !== "object") return ["不是对象"];
  if (!o.tldr) errs.push("缺 tldr");
  if (!o.digest_md || o.digest_md.length < 300) errs.push("digest_md 太短或缺");
  if (!Array.isArray(o.quotes) || o.quotes.length < 4) errs.push("quotes 少于 4 条");
  for (const [i, q] of (o.quotes || []).entries()) {
    for (const k of ["en", "zh", "timestamp", "speaker"]) if (!q?.[k]) errs.push(`quote#${i + 1} 缺 ${k}`);
  }
  return errs;
}

// ── 先校验后写(与 judge-quotes / repair-quotes 同一纪律;C2 交付物审计:本脚本此前是唯一没照做的)──
//   此前三重毛病(审计给了干净复现):
//   ① writeFileSync(digest.json) 在校验之前 → 坏输出把仓库里的好稿冲掉才 exit 1
//   ② 缓存也在校验前落盘 → 重跑走缓存分支吃回同一份坏输出,不 FORCE=1 永不自愈,还误导排障
//     (看起来「GLM 一直坏」,其实 GLM 正常、坏的只有缓存)
//   ③ 重试条件是 `!obj`,「合法 JSON 但结构不合格」根本不重试 → MAX_RETRY 对最常见失败模式是摆设
async function main() {
  const tr = JSON.parse(readFileSync(resolve(ROOT, DIR, "translation.zh.json"), "utf8"));
  const SYS =
    readFileSync(resolve(ROOT, "prompts/condense.md"), "utf8") +
    "\n\n---\n术语表:\n" +
    readFileSync(resolve(ROOT, "prompts/glossary.md"), "utf8");
  // 双语对齐输入:每段 [mm:ss 说话人] 英文 ‖ 中文
  const bilingual = tr.map((s) => `[${mmss(s.start)} ${s.speaker}] ${s.en} ‖ ${s.zh}`).join("\n");
  const INPUT = `以下是本集完整双语对齐转写稿(每段:[时间戳 说话人] 英文 ‖ 中文)。整读后按 system 要求浓缩输出 JSON。\n\n${bilingual}`;

  const cacheFile = resolve(ROOT, DIR, ".digest-raw.txt");
  const badCacheFile = resolve(ROOT, DIR, ".digest-raw.bad.txt");
  let obj = null;

  // 缓存只在**校验通过**时才认;缓存里是坏内容 → 当没有,重新跑
  if (process.env.FORCE !== "1" && existsSync(cacheFile)) {
    const cached = extractJson(readFileSync(cacheFile, "utf8"));
    if (cached && validate(cached).length === 0) {
      obj = cached;
      console.log("(用 .digest-raw.txt 缓存)");
    } else if (cached) {
      console.error("⚠️ 缓存内容结构不合格 → 忽略缓存重新跑(不吃毒缓存)");
    }
  }

  for (let attempt = 0; attempt <= MAX_RETRY && !obj; attempt++) {
    console.log(`浓缩:GLM-5.2 整读 ${tr.length} 段双语稿… (第 ${attempt + 1} 次)`);
    const raw = await glmAsk(SYS, INPUT);
    const cand = extractJson(raw);
    const errs = cand ? validate(cand) : ["非合法 JSON"];
    if (errs.length === 0) {
      obj = cand;
      writeFileSync(cacheFile, raw); // ← 只缓存合格产物
      break;
    }
    writeFileSync(badCacheFile, raw); // 坏输出单独留档排障,**不参与缓存命中**
    console.error(`  第 ${attempt + 1} 次输出不合格(${errs.join(" / ")})${attempt < MAX_RETRY ? ",重试" : ""}`);
  }

  if (!obj) {
    console.error(`❌ 浓缩连试 ${MAX_RETRY + 1} 次仍不合格。坏输出存 .digest-raw.bad.txt 供人看。`);
    console.error(`   digest.json **未改动**(不拿坏稿冲掉仓库里的好稿)。`);
    process.exit(1);
  }

  // 到这里必定已通过校验,才写、才敢打 ✅
  writeFileSync(resolve(ROOT, DIR, "digest.json"), JSON.stringify(obj, null, 2));
  console.log(`✅ digest.json: tldr(${obj.tldr.length}字) digest_md(${obj.digest_md.length}字) quotes(${obj.quotes.length}条)`);
}

function isMain() {
  try { return process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url); } catch { return false; }
}
if (isMain()) main();
