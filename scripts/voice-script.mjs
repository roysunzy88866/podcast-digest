#!/usr/bin/env node
// C38 步骤 · 把已定稿中文精华(digest)改写成"讲给你听"的音频口播稿(voice_script)。
// 网页文字不变;这稿单独给耳朵。产物写回 digest.json 的 voice_script 字段,交 tts.mjs 配音。
// 三道机器闸门(纯函数,可测):①数「他」②防漏念(结构杂物不进音频)③防失真(专名/数字不许超出原精华)。
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { extractLatinTokens, classifyLatinToken, extractDigestNumbers } from "./gate-facts.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = process.argv[2] || "";
const MAX_RETRY = 3;

// ── 闸门①:数「他」—— 中文口播里连着「他…他…」念着别扭;总数超标或连续两句他开头 → 打回 ──
export function taErrs(script, { maxTa = 6 } = {}) {
  const errs = [];
  const s = String(script ?? "");
  // 单数第三人称「他」,排除「他们」(they)/「其他」(other)——那不是刺耳的那个「他」
  const taCount = (s.match(/他/g) || []).length - (s.match(/他们/g) || []).length - (s.match(/其他/g) || []).length;
  if (taCount > maxTa) errs.push(`「他」用了 ${taCount} 次(上限 ${maxTa}),念着别扭——多数句子省主语、偶尔点名字`);
  const sents = s.split(/[。！？!?\n]+/).map((x) => x.trim()).filter(Boolean);
  const taLed = (x) => /^他(?!们)/.test(x); // 单数「他」开头,排除「他们」(GLM 001[1]:他们不算刺耳的那个他)
  for (let i = 0; i + 1 < sents.length; i++) {
    if (taLed(sents[i]) && taLed(sents[i + 1])) { errs.push("有连续两句都以「他」开头,至少改写一句"); break; }
  }
  return errs;
}

// ── 闸门②:防漏念 —— 口播稿必须是纯口语正文,不许有任何会被 TTS 念出来的结构杂物 ──
export function speechErrs(script) {
  const errs = [];
  const s = String(script ?? "");
  if (/(^|\n)\s*#{1,6}\s/.test(s)) errs.push("含 markdown 标题(#)");
  if (/\[\[|\]\]/.test(s)) errs.push("含双链 [[ ]]");
  if (/(^|\n)\s*[-*>]\s/.test(s)) errs.push("含列表/引用符号(- * >)");
  if (/\*\*/.test(s)) errs.push("含加粗 **");
  if (/`|={3,}|\^[0-9A-Za-z]/.test(s)) errs.push("含代码符/分隔符(===)/块ID(^)");
  if (/(^|\n)\s*[-*_]{3,}\s*(\n|$)/.test(s)) errs.push("含水平分隔线(--- / *** / ___)"); // GLM 001[4]
  // 时间戳/说话人坐标(方括号或括号里含 mm:ss)
  if (/[[【（(][^\]】）)\n]*\d{1,2}:\d{2}[^\]】）)\n]*[\]】）)]/.test(s)) errs.push("含 [时间戳] 溯源坐标");
  // 结构标签词(行首 + 冒号,如「开场：」「收尾：」)
  if (/(^|\n)\s*(开场白?|正文|收尾|小标题|钩子|导语)\s*[:：]/.test(s)) errs.push("含结构标签词(开场/收尾等)");
  return errs;
}

// ── 参照文本:口播稿的事实来源 = 精华正文 + 喂给 GLM 的金句素材(zh+en)──
//   金句也是本集、也过了 gate(en 逐字来自转写稿)→ 里面的专名同样合法,不该被判编造(GLM 001[3])。
export function buildRef(digest) {
  const q = (digest?.quotes || []).flatMap((x) => [x?.zh, x?.en]).filter(Boolean).join("\n");
  return `${String(digest?.digest_md ?? "")}\n${q}`;
}

// ── 闸门③:防失真 —— 口播稿的专名/阿拉伯数字都必须在参照(精华+金句)里出现过 ──
//   digest 已过 gate-facts(对齐转写稿硬核过);口播只是把它讲好听,专名/数字 ⊆ 参照 ⇒ 不可能编造。
//   只查「实体形状」专名(大小写混合,如 TrustWise/OpenAI,凭空造公司/人的形状),与 gate-facts 同口径。
//   专名用**整词**比对(不是子串):否则口播里凭空造的「Trust」会被「TrustWise」的子串放行(GLM 001[2])。
export function distortErrs(script, ref) {
  const errs = [];
  const srcTokens = new Set(extractLatinTokens(ref).map((x) => x.toLowerCase()));
  for (const t of extractLatinTokens(script)) {
    if (classifyLatinToken(t) !== "hard") continue; // 全小写外来词/全大写缩写按 gate-facts 口径不硬拦
    if (!srcTokens.has(t.toLowerCase())) errs.push(`专名「${t}」原精华里没有(疑新增/编造)`);
  }
  const srcNums = new Set(extractDigestNumbers(ref).flatMap((n) => n.values));
  for (const n of extractDigestNumbers(script)) {
    if (!n.values.some((v) => srcNums.has(v))) errs.push(`数字「${n.raw}」原精华里没有`);
  }
  return errs;
}

// ── 结构/长度基本校验 + 三闸合一 ──
export function baseErrs(script) {
  const errs = [];
  const s = String(script ?? "").trim();
  if (s.length < 300) errs.push("口播稿太短(<300 字),不像讲透了一条线");
  if (s.length > 3000) errs.push("口播稿太长(>3000 字),口播该更挑重点");
  return errs;
}

export function scriptErrs(script, ref) {
  return [...baseErrs(script), ...taErrs(script), ...speechErrs(script), ...distortErrs(script, ref)];
}

// ── 组织给 GLM 的输入(digest 正文 + 金句素材,都是已定稿的干净料)──
export function buildInput(digest) {
  const quotesZh = (digest.quotes || []).slice(0, 6).map((q, i) => `${i + 1}. ${q.zh}`).filter(Boolean).join("\n");
  return `【本集标题】${digest.title_zh || ""}
【本集一句话】${digest.tldr || ""}

【本集精华正文】
${digest.digest_md || ""}

【可用作收尾的金句素材(照抄或改写都行,只准用这里/正文里出现过的事实)】
${quotesZh}

请照 system 的要求,把上面这篇精华改写成一段"讲给你听"的口播稿。只输出口播稿正文,不要任何前言后语。`;
}

// ── 生成 + 重试(照 condense 的 nudge 先例;ask 可注入,测试喂假 GLM 绝不烧钱)──
export async function generateWithRetry({ sys, digest, ask, maxRetry = MAX_RETRY, saveBad, log = console.log, warn = console.error }) {
  const input = buildInput(digest);
  const ref = buildRef(digest); // 参照 = 精华 + 金句素材(GLM 001[3])
  let script = null, nudge = "";
  for (let attempt = 0; attempt <= maxRetry && script == null; attempt++) {
    log(`口播稿:GLM 改写… (第 ${attempt + 1} 次)`);
    const raw = (await ask(sys, input + nudge)) ?? "";
    const cand = String(raw).trim();
    const errs = scriptErrs(cand, ref);
    if (errs.length === 0) { script = cand; break; }
    saveBad?.(cand);
    nudge = `\n\n【上一次输出被机器闸门打回,原因:${errs.join(";")}。只输出修正后的口播稿正文,规则一条不放宽,尤其少用「他」、不许出现任何 markdown/标题/时间戳/结构标签。】`;
    warn(`  第 ${attempt + 1} 次不合格(${errs.join(" / ")})${attempt < maxRetry ? ",重试" : ""}`);
  }
  return script;
}

function glmAsk(system, input, maxTokens = 4000) {
  return new Promise((res, rej) => {
    const model = process.env.VOICE_SCRIPT_MODEL; // 不设=走 glm-ask 默认(付费档 glm-5.3,写稿铁律)
    const args = [...(model ? ["--model", model] : []), "--system", system, "--max-tokens", String(maxTokens)];
    const p = spawn("glm-ask", args, { stdio: ["pipe", "pipe", "pipe"] });
    let out = "", err = "";
    p.stdout.on("data", (d) => (out += d));
    p.stderr.on("data", (d) => (err += d));
    p.on("error", rej);
    p.on("close", (c) => (c === 0 ? res(out) : rej(new Error(`glm-ask exit ${c}: ${err}`))));
    p.stdin.write(input); p.stdin.end();
  });
}

async function main() {
  if (!DIR) { console.error("用法:node scripts/voice-script.mjs data/episodes/<id>"); process.exit(2); }
  const digestPath = resolve(ROOT, DIR, "digest.json");
  if (!existsSync(digestPath)) { console.error(`⛔ ${DIR} 无 digest.json(口播稿只对已定稿集)`); process.exit(2); }
  const digest = JSON.parse(readFileSync(digestPath, "utf8"));
  const sys = readFileSync(resolve(ROOT, "prompts/voice-script.md"), "utf8");
  const ref = buildRef(digest);
  const cacheFile = resolve(ROOT, DIR, ".voice-raw.txt");
  const badCacheFile = resolve(ROOT, DIR, ".voice-raw.bad.txt");

  // 幂等:digest 里已有**合格**口播稿(且非 FORCE)→ 跳过不重烧(GLM 001[7]:缓存 gitignore,
  //   云端只有 digest.json;没这道会每轮重生成不同稿+白重合成音频)。refresh 重浓缩后传 FORCE=1 强制重生成。
  if (process.env.FORCE !== "1" && digest.voice_script && scriptErrs(String(digest.voice_script).trim(), ref).length === 0) {
    console.log("(digest 已有合格 voice_script,跳过不重烧)");
    return;
  }
  // 缓存只在通过闸门时才认(照 condense:坏缓存当没有,不 FORCE 也自愈)
  if (process.env.FORCE !== "1" && existsSync(cacheFile)) {
    const cached = readFileSync(cacheFile, "utf8").trim();
    if (scriptErrs(cached, ref).length === 0) {
      digest.voice_script = cached;
      writeFileSync(digestPath, JSON.stringify(digest, null, 2) + "\n");
      console.log("(用 .voice-raw.txt 缓存)");
      return;
    }
  }

  const script = await generateWithRetry({
    sys, digest, ask: glmAsk,
    saveBad: (raw) => writeFileSync(badCacheFile, raw),
  });
  if (script == null) {
    console.error("⛔ 口播稿多次生成均未过闸门 → 不写(tts 回落念 digest_md,不堵发布)");
    process.exit(1);
  }
  writeFileSync(cacheFile, script);
  digest.voice_script = script;
  writeFileSync(digestPath, JSON.stringify(digest, null, 2) + "\n");
  console.log(`✅ 口播稿已写入 digest.voice_script(${script.length} 字)`);
}

const isMain = (() => {
  try { return process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url); } catch { return false; }
})();
if (isMain) main().catch((e) => { console.error(e); process.exit(1); });
