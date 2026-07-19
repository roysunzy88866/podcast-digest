// C7b 无人值守 · 说话人真名推断(drift #23,补人工填 speaker_map 的自动化缺口)
// 拿转写稿开场 + RSS 标题(常含嘉宾名)让 GLM 推 SPEAKER_XX→真名(人工本来就干这个、开场通常报名),
// 【关键】再机器校:推出的每个名字必须在转写稿/标题里真出现过(grounding),否则丢弃 —— 防 GLM 编造人名。
// 不裸信 GLM(守"防失真机器闸门不许砍")。过校的写进 meta.speaker_map + title_en。
//
// 用法:node scripts/infer-speakers.mjs <集目录> [标题]
//   标题优先取参(编排器从 RSS 传);无则读 meta.title_en。
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// ── 纯逻辑(可单测)────────────────────────────────────────

/** 从标题抽候选人名:latent.space 标题惯例「主题 — Name1 & Name2, Org」。取破折号后、按 &/,/and 切,去机构后缀。 */
export function candidateNamesFromTitle(title) {
  if (!title) return [];
  // 取最后一个破折号(— / – / -)之后的部分(嘉宾名区)
  const tail = title.split(/\s[—–-]\s/).slice(1).join(" — ");
  const region = tail || title;
  return region
    .split(/\s*(?:&|,|、|\band\b)\s*/i)
    .map((s) => s.trim())
    .filter((s) => s && /[A-Za-z一-龥]/.test(s))
    // 去掉明显的机构/无关尾巴(全大写缩写、含 Inc/Labs/Sciences 等的整段当机构丢)
    .filter((s) => !/\b(Inc|Labs?|Sciences?|AI|Institute|University|Corp|Ltd)\b$/i.test(s.trim()))
    .map((s) => s.replace(/[.。]+$/, "").trim())
    // 真人名一般 ≤4 词;更长的多是句子/主题残段,不当名字(grounding 前先去噪)
    .filter((s) => s.split(/\s+/).length <= 4)
    .slice(0, 8);
}

/** 把文本归一化成小写、去多余空白 —— 供 grounding 子串比对。 */
function norm(s) {
  return String(s || "").toLowerCase().replace(/\s+/g, " ").trim();
}

/**
 * grounding 机器校:GLM 推出的每个名字必须在转写稿或标题里真出现过(防编造)。
 * 名字命中判据:整名子串命中,或所有名字词(≥2 字母)都在文本里出现(容错中间名/顺序)。
 * @returns { valid: {LABEL: name}, rejected: [{label, name, why}] }
 */
export function validateMap(rawMap, { transcriptText, title }) {
  const hay = norm(transcriptText + " " + (title || ""));
  const valid = {};
  const rejected = [];
  for (const [label, name] of Object.entries(rawMap || {})) {
    const n = String(name || "").trim();
    if (!n) { rejected.push({ label, name, why: "空名" }); continue; }
    const nn = norm(n);
    const whole = hay.includes(nn);
    const tokens = nn.split(" ").filter((t) => t.replace(/[^a-z一-龥]/g, "").length >= 2);
    const allTokens = tokens.length > 0 && tokens.every((t) => hay.includes(t));
    if (whole || allTokens) valid[label] = n;
    else rejected.push({ label, name: n, why: "名字在转写稿/标题里查无出处(疑编造)" });
  }
  return { valid, rejected };
}

/** 开场文本(前 N 段的 SPEAKER+英文),给 GLM 判"谁是谁";控制长度省 token。 */
export function openingText(transcript, { segs = 80 } = {}) {
  // 原始转写稿英文在 s.text(en/zh 是 translate 之后才有);两者都兜。
  return transcript
    .slice(0, segs)
    .map((s) => `[${s.speaker || "?"}] ${s.text ?? s.en ?? ""}`.trimEnd())
    .join("\n")
    .slice(0, 6000);
}

// ── 副作用层 ──────────────────────────────────────────────

const SYSTEM =
  "你是转写稿说话人识别助手。给你一段播客开场(每行前是 SPEAKER_XX 标签)和候选人名(标题里点名的嘉宾,他们几乎一定在说话人里)。" +
  "逐一判断每个 SPEAKER_XX 对应哪个真名:主持人常自报'I'm X'/'this is X',嘉宾常被介绍'here with Y'/'joined by Z';" +
  "候选嘉宾名要尽量各归到一个 label。名字必须是开场文本或候选名里出现过的,真拿不准的 label 才留空不放。" +
  "只输出 JSON 对象 {\"SPEAKER_00\":\"真名\",...},不要解释。";

function inferWithGLM(prompt) {
  const r = spawnSync("glm-ask", ["--system", SYSTEM, "--max-tokens", "500", prompt], {
    cwd: ROOT,
    encoding: "utf8",
  });
  if (r.status !== 0) throw new Error(`glm-ask 失败(exit ${r.status}): ${r.stderr}`);
  const m = r.stdout.match(/\{[\s\S]*\}/);
  if (!m) throw new Error(`GLM 未返回 JSON:${r.stdout.slice(0, 200)}`);
  return JSON.parse(m[0]);
}

function main() {
  const [dirArg, titleArg] = process.argv.slice(2);
  if (!dirArg) { console.error("用法: node scripts/infer-speakers.mjs <集目录> [标题]"); process.exit(1); }
  const dir = resolve(ROOT, dirArg);
  const transcript = JSON.parse(readFileSync(join(dir, "transcript.en.json"), "utf8"));
  const metaPath = join(dir, "meta.json");
  const meta = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, "utf8")) : {};
  const title = titleArg || meta.title_en || "";

  const labels = [...new Set(transcript.flatMap((s) => (s.words || []).map((w) => w.speaker)).filter(Boolean))];
  const cands = candidateNamesFromTitle(title);
  const opening = openingText(transcript);
  const prompt =
    `【标题】${title}\n【候选人名(从标题抽)】${cands.join(", ") || "(无)"}\n` +
    `【说话人标签】${labels.join(", ")}\n【开场转写】\n${opening}\n\n` +
    `把每个 SPEAKER_XX 映射到真名,只输出 JSON。`;

  console.log(`▶ 推断说话人:${labels.length} 个标签,候选名 [${cands.join(", ")}]`);
  const raw = inferWithGLM(prompt);
  const transcriptText = transcript.map((s) => s.text ?? s.en ?? "").join(" ");
  const { valid, rejected } = validateMap(raw, { transcriptText, title });

  for (const r of rejected) console.log(`   ⚠️ 丢弃 ${r.label} → "${r.name}"(${r.why})`);
  console.log(`   ✅ grounding 过:${JSON.stringify(valid)}`);

  meta.title_en = meta.title_en || title;
  meta.speaker_map = { ...(meta.speaker_map || {}), ...valid };
  meta.speaker_map_source = "GLM 推断 + grounding 机器校(drift #23,自动);名字均在转写稿/标题命中";
  // 从已 grounded 的名字派生 guests/host(extract-entities 抽人物实体要用):
  // 标题点名的嘉宾里被映射上的 = guests;其余被映射的名字 = 主持/联合主持。都已过 grounding。
  if (!meta.guests || !meta.guests.length) {
    const mapped = [...new Set(Object.values(valid))];
    const candNorm = cands.map((c) => norm(c));
    meta.guests = mapped.filter((n) => candNorm.some((c) => norm(n).includes(c) || c.includes(norm(n))));
    meta.host = meta.host || mapped.find((n) => !meta.guests.includes(n)) || null;
    meta.cohosts = mapped.filter((n) => n !== meta.host && !meta.guests.includes(n));
  }
  writeFileSync(metaPath, JSON.stringify(meta, null, 2));

  const unmapped = labels.filter((l) => !meta.speaker_map[l]);
  if (unmapped.length) console.log(`   ⚠️ 仍未命名(grounding 没过/GLM 没给):${unmapped.join(", ")} → 下游用标签,金句归属会标签化`);
}

function isMain() {
  try { return process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url); } catch { return false; }
}
if (isMain()) {
  try { main(); } catch (e) { console.error(`❌ infer-speakers 失败:${e.message}`); process.exit(1); }
}
