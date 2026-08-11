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

/**
 * C15 口语体机器卡点(2026-07-30 用户拍板,Gherkin 见 docs/user-stories.md「C15」)。
 * 只卡客观可判的:标签字样 / 书面自称 / 工程备注 / 带走小节缺失 / 开头是标题;
 * (带走「列表腔」原也卡,ADR 0020「实质优先」起放开 —— 带走=可带走的几条具体要点,允许列表)
 * 「钩子好不好」这类主观项不机器卡(判官与用户耳朵管)。
 * 只挂在**新浓缩**的重试循环上,缓存复用路径不挂——C15 只对新浓缩生效,C14 补活吃缓存不重烧钱。
 * 规则全部对着 57 集存量实证定(【】标记只有【背景】一种/「本文将…」6 集/正文「转写稿」4 集/带走列表腔 55 集)。
 */
export function styleErrs(md) {
  const errs = [];
  if (!md) return errs;
  // ① 结构标签:digest_md 里唯一允许的【】标记是【背景】(钩子/导览/收尾都是自然段落,不带标签)
  for (const m of new Set(md.match(/【(?!背景】)[^】\n]{1,16}】/g) || [])) {
    errs.push(`正文不许出现${m}这类标签字样,钩子/导览/收尾都写成自然段落(唯一允许的标记是【背景】)`);
  }
  // ② 书面自称(负向环视挡住「文本文件/日本文化/篇幅」这类误伤,存量 pg-eval 集实测有「文本文件」)
  if (/(?<![文日])本文|本篇(?!幅)/.test(md)) errs.push("不许书面自称「本文/本篇」——这是念出来的稿子,改说「这一集/接下来」");
  // ③ 工程备注不进正文(【背景】引用块里的不算:剥掉 > 行再查)
  const plain = md.split("\n").filter((l) => !/^\s*>/.test(l)).join("\n");
  if (/转写稿|误写为/.test(plain)) errs.push("「转写稿/误写为」这类工程备注不进正文;真怕读者困惑就放进 > 【背景】 块");
  // ④ 收尾:「## 本集带走」必在;内容形态不限(要点列表或连贯段皆可)
  //    [standard-change: 用户授权 2026-08-11 · ADR 0020] 原「不许列表腔」已放开:实质优先下,
  //    带走 = 可带走的几条具体要点,列表反而更清爽;质量(是否空话)交判官与用户眼睛,不机器卡。
  const sec = md.match(/^##\s*本集带走[^\n]*\n?([\s\S]*?)(?=^#|(?![\s\S]))/m);
  if (!sec) errs.push("缺「## 本集带走」收尾小节");
  // ⑤ 第一段必须是开场钩子正文,不能上来就是小节标题
  if (/^\s*#/.test(md)) errs.push("digest_md 不能以小节标题开头,第一段必须是开场钩子");
  return errs;
}

/** 结构校验(抽成函数:重试循环要用它,不能只在循环外算一次) */
export function validate(o) {
  const errs = [];
  if (!o || typeof o !== "object") return ["不是对象"];
  if (!o.title_zh) errs.push("缺 title_zh"); // C5.1:中文标题随浓缩生成(标题是创作不设逐字闸门)
  if (!o.tldr) errs.push("缺 tldr");
  if (!o.digest_md || o.digest_md.length < 300) errs.push("digest_md 太短或缺");
  if (!Array.isArray(o.quotes) || o.quotes.length < 4) errs.push("quotes 少于 4 条");
  for (const [i, q] of (o.quotes || []).entries()) {
    for (const k of ["en", "zh", "timestamp", "speaker"]) if (!q?.[k]) errs.push(`quote#${i + 1} 缺 ${k}`);
  }
  return errs;
}

/**
 * 重试循环(C15 抽函数):重试时把上一次被打回的原因**原话**附到输入末尾(nudge)。
 * 照 extract-guest.mjs / extract-entities.mjs 的 nudge 先例平移;系统提示词/正文/次数一字不动,
 * 第 1 次 nudge=""(input+"" 与裸 input 逐字一致)。ask 可注入(测试喂假 GLM,绝不真烧钱)。
 * 校验 = validate(结构) + styleErrs(C15 口语体):结构合格但口语体不合格照样打回。
 * 试满仍不合格 → 返回 null,exit 1 仍在 main(不拿坏稿冲掉仓库里的好稿)。
 */
export async function condenseWithRetry({ sys, input, ask, maxRetry = MAX_RETRY, saveGood, saveBad, log = console.log, warn = console.error, label = "" }) {
  let obj = null, nudge = "";
  for (let attempt = 0; attempt <= maxRetry && !obj; attempt++) {
    log(`浓缩:GLM-5.2 整读${label}… (第 ${attempt + 1} 次)`);
    const raw = await ask(sys, input + nudge);
    const cand = extractJson(raw);
    const errs = cand ? [...validate(cand), ...styleErrs(cand.digest_md)] : ["非合法 JSON"];
    if (errs.length === 0) { obj = cand; saveGood?.(raw); break; }
    saveBad?.(raw);
    nudge = `\n\n【上一次你的输出被机器闸门打回,原因:${errs.join(";")}。请照规则修正后重出:规则一条不放宽,只输出修正后的那一个 JSON 对象。】`;
    warn(`  第 ${attempt + 1} 次输出不合格(${errs.join(" / ")})${attempt < maxRetry ? ",重试" : ""}`);
  }
  return obj;
}

// ── 先校验后写(与 judge-quotes / repair-quotes 同一纪律;C2 交付物审计:本脚本此前是唯一没照做的)──
//   此前三重毛病(审计给了干净复现):
//   ① writeFileSync(digest.json) 在校验之前 → 坏输出把仓库里的好稿冲掉才 exit 1
//   ② 缓存也在校验前落盘 → 重跑走缓存分支吃回同一份坏输出,不 FORCE=1 永不自愈,还误导排障
//     (看起来「GLM 一直坏」,其实 GLM 正常、坏的只有缓存)
//   ③ 重试条件是 `!obj`,「合法 JSON 但结构不合格」根本不重试 → MAX_RETRY 对最常见失败模式是摆设
async function main() {
  const tr = JSON.parse(readFileSync(resolve(ROOT, DIR, "translation.zh.json"), "utf8"));
  // C10:ASR 源(meta.asr=true)附加选句特别规矩——逐字稿口语毛边会拖垮金句候选池(两集实证被判官毙穿)
  const metaPath0 = resolve(ROOT, DIR, "meta.json");
  const isAsr = existsSync(metaPath0) && JSON.parse(readFileSync(metaPath0, "utf8")).asr === true;
  const SYS =
    readFileSync(resolve(ROOT, "prompts/condense.md"), "utf8") +
    (isAsr ? "\n\n---\n" + readFileSync(resolve(ROOT, "prompts/condense-asr.md"), "utf8") : "") +
    "\n\n---\n术语表:\n" +
    readFileSync(resolve(ROOT, "prompts/glossary.md"), "utf8");
  // 双语对齐输入:每段 [mm:ss 说话人] 英文 ‖ 中文
  const bilingual = tr.map((s) => `[${mmss(s.start)} ${s.speaker}] ${s.en} ‖ ${s.zh}`).join("\n");
  const INPUT = `以下是本集完整双语对齐转写稿(每段:[时间戳 说话人] 英文 ‖ 中文)。整读后按 system 要求浓缩输出 JSON。\n\n${bilingual}`;

  const cacheFile = resolve(ROOT, DIR, ".digest-raw.txt");
  const badCacheFile = resolve(ROOT, DIR, ".digest-raw.bad.txt");
  let obj = null;

  // 缓存只在**校验通过**时才认;缓存里是坏内容 → 当没有,重新跑。
  // 缓存路径只查 validate 不查 styleErrs:C15 口语体只对**新浓缩**生效(Gherkin「存量集不自动回刷」),
  // C14 补活吃缓存不重烧钱——老缓存老腔调照用,回刷另拍。
  if (process.env.FORCE !== "1" && existsSync(cacheFile)) {
    const cached = extractJson(readFileSync(cacheFile, "utf8"));
    if (cached && validate(cached).length === 0) {
      obj = cached;
      console.log("(用 .digest-raw.txt 缓存)");
    } else if (cached) {
      console.error("⚠️ 缓存内容结构不合格 → 忽略缓存重新跑(不吃毒缓存)");
    }
  }

  if (!obj) {
    obj = await condenseWithRetry({
      sys: SYS,
      input: INPUT,
      ask: glmAsk,
      label: ` ${tr.length} 段双语稿`,
      saveGood: (raw) => writeFileSync(cacheFile, raw), // ← 只缓存合格产物
      saveBad: (raw) => writeFileSync(badCacheFile, raw), // 坏输出单独留档排障,**不参与缓存命中**
    });
  }

  if (!obj) {
    console.error(`❌ 浓缩连试 ${MAX_RETRY + 1} 次仍不合格。坏输出存 .digest-raw.bad.txt 供人看。`);
    console.error(`   digest.json **未改动**(不拿坏稿冲掉仓库里的好稿)。`);
    process.exit(1);
  }

  // 到这里必定已通过校验,才写、才敢打 ✅
  writeFileSync(resolve(ROOT, DIR, "digest.json"), JSON.stringify(obj, null, 2));
  // C5.1:中文标题写回 meta.title_zh(列表卡/集页/feed 的显示标题;refresh 翻新存量同样走这里)
  const metaPath = resolve(ROOT, DIR, "meta.json");
  if (obj.title_zh && existsSync(metaPath)) {
    const meta = JSON.parse(readFileSync(metaPath, "utf8"));
    if (meta.title_zh !== obj.title_zh) writeFileSync(metaPath, JSON.stringify({ ...meta, title_zh: obj.title_zh }, null, 2));
  }
  console.log(`✅ digest.json: title_zh(${obj.title_zh}) tldr(${obj.tldr.length}字) digest_md(${obj.digest_md.length}字) quotes(${obj.quotes.length}条)`);
}

function isMain() {
  try { return process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url); } catch { return false; }
}
if (isMain()) main();
