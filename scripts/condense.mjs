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
