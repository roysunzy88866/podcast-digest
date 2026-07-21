#!/usr/bin/env node
// C3 Scenario 2 · 实体抽取 → 每集 entities.json
//
// 分工(这是本脚本的核心设计,别改乱):
//   · 人物 = 从 meta 派生(guests/host/cohosts,用户点头过的权威)——**不问 GLM**。
//     让 GLM 抽人名等于给编造开门(它有前科),而 speaker_map/guests 本就是真相源。
//   · 公司/概念 = GLM 判断哪些重要、写「集里怎么说它」、打 tags —— 这是它擅长且闸门够得着的活。
//   · 每个实体的 evidence(时间戳 + 原文片段)= **代码从转写稿检索**,GLM 给的一律不采信
//     (C2 教训:GLM 猜的时间戳不准;时间戳必须从真相源派生)。
//   · 实体名必须回原文命中(直接 / 经别名表 en/误写形式)——命中不了 = GLM 凭空造 → 进 rejected,不进产物。
//     命中判据**直接复用 gate-facts.checkProperNoun**(与闸门同源,由构造保证抽取器与闸门口径一致)。
//
// 概念为什么必须带原文 name_en:中文没有大小写、norm 后无拉丁词,「智能体」这类中文名
//   无法回英文稿比对 → 靠 name_en(agent)在英文稿命中。这是硬契约,不是可选项。
import { readFileSync, writeFileSync, existsSync, realpathSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { norm } from "./gate.mjs";
import { buildFactIndex, checkProperNoun } from "./gate-facts.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// ── slug:实体 id;跨集靠它聚合,故必须稳定、只由英文名决定 ──
export function slugify(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const isChinese = (s) => /[一-龥]/.test(String(s ?? ""));

/**
 * 人物实体从 meta 派生(权威),带角色。**不碰 speaker_map 的角色名**(「主持人」不是名字)。
 * host=null(姓名无法确定,用户明示不录入)→ 不产出主持人实体,更不许 null/undefined 名字。
 */
export function personEntitiesFromMeta(meta) {
  const out = [];
  const push = (name, role) => {
    if (!name || /^(undefined|null)$/i.test(String(name).trim())) return;
    out.push({
      id: slugify(name),
      type: "person",
      role,
      name: String(name),
      file: String(name),
      primary: true,
      source: "meta",
    });
  };
  if (meta?.host) push(meta.host, "host"); // null/"" → 跳过(集2 无主持人姓名)
  for (const g of meta?.guests ?? []) push(g, "guest");
  for (const c of meta?.cohosts ?? []) push(c, "cohost");
  return out;
}

/**
 * 实体名回原文命中 + 归一化到别名表 id。返回 { pass, id, matchedForm, reason }。
 * 薄封装 checkProperNoun(把 .entity 语义暴露为 .id),命中口径与 D17 闸门**同源**。
 */
export function resolveEntity(name, ctx) {
  const r = checkProperNoun(name, ctx);
  return { pass: r.pass, id: r.entity ?? null, matchedForm: r.matchedForm ?? null, reason: r.reason ?? null };
}

/** 归一化 token 序列 needle 是否作为连续子序列出现在 hay 里(单词/多词都按词边界,子串不算命中) */
function containsSeq(hay, needle) {
  if (!needle.length) return false;
  if (needle.length === 1) return hay.includes(needle[0]);
  for (let i = 0; i + needle.length <= hay.length; i++) {
    let ok = true;
    for (let j = 0; j < needle.length; j++) if (hay[i + j] !== needle[j]) { ok = false; break; }
    if (ok) return true;
  }
  return false;
}

function segSpeaker(seg) {
  const counts = {};
  for (const w of seg.words ?? []) if (w.speaker) counts[w.speaker] = (counts[w.speaker] ?? 0) + 1;
  let best = null, bn = -1;
  for (const [s, n] of Object.entries(counts)) if (n > bn) { bn = n; best = s; }
  return best ?? seg.speaker ?? null;
}

/**
 * 从转写稿检索证据:任一 form(英文/误写形式;纯中文 form norm 后为空,自动跳过)
 * 以**词边界**出现在某段 → 记该段真时间戳 + 真原文。按段序,一段至多一条。
 */
export function collectEvidence(forms, transcript) {
  const normForms = (forms ?? []).map((f) => norm(f)).filter((ws) => ws.length);
  const out = [];
  for (let si = 0; si < (transcript?.length ?? 0); si++) {
    const seg = transcript[si];
    const words = norm(seg.text ?? "");
    if (normForms.some((fw) => containsSeq(words, fw))) {
      out.push({ seg: si, t: [seg.start, seg.end], quote: seg.text ?? "", speaker: segSpeaker(seg) });
    }
  }
  return out;
}

/** 英文技术缩写(SaaS/CLI/API/SDK/LLM…):2–6 个字母、含 ≥2 个大写。GLM 时译时不译最易漂,默认保英文。 */
export function isAcronym(s) {
  const t = String(s ?? "");
  return /^[A-Za-z]{2,6}$/.test(t) && (t.replace(/[^A-Z]/g, "").length >= 2);
}

/** 概念/公司/人物的展示名与文件名(裁决 #10:概念双语标题+中文文件名;人名/公司名用原文)。
 *  pinnedZh = 钉死译名表(glossary)给的中文:有则盖掉 GLM 每集现译,跨集统一防漂移(bug b)。
 *  英文缩写(isAcronym)默认保英文,从根上不漂——除非 glossary 显式给了中文钉(治本)。 */
function labelFor(type, nameZh, nameEn, pinnedZh) {
  if (type === "concept" && isAcronym(nameEn) && !(pinnedZh && isChinese(pinnedZh))) {
    return { name: nameEn, file: nameEn };
  }
  const zh = pinnedZh || nameZh;
  if (type === "concept" && zh && zh !== nameEn && isChinese(zh)) {
    return { name: `${zh} (${nameEn})`, file: zh };
  }
  return { name: nameEn, file: nameEn };
}

/**
 * 解析 glossary.md → Map(slug(英文) → 钉死名),供概念页文件名钉死、跨集不漂(bug b):
 *   ·「统一中文译名」表 → 值=中文(labelFor 用双语标题、文件名=中文)
 *   ·「保留英文不译」段(· 分隔) → 值=英文本身(labelFor 见非中文值 → 概念页也保英文,如 vibe coding)
 * 值含斜杠(如「突发性 / 突发的」)取首个;英文的括注(如 Kubernetes(K8s))剥掉。
 */
export function parseGlossaryPins(md) {
  const pins = new Map();
  const put = (en, name) => {
    const id = slugify(en);
    if (id && name && !pins.has(id)) pins.set(id, name);
  };
  const sections = String(md ?? "").split(/^##\s+/m);
  // 统一中文译名表:en → 中文
  const zhSec = sections.find((s) => s.startsWith("统一中文译名"));
  for (const line of zhSec?.split("\n") ?? []) {
    const m = line.match(/^\|([^|]+)\|([^|]+)\|/);
    if (!m) continue;
    const en = m[1].trim();
    const zh = m[2].trim().split(/\s*\/\s*/)[0].trim();
    if (!en || en === "英文" || /^-+$/.test(en) || !isChinese(zh)) continue; // 跳表头/分隔/非中文值
    put(en, zh);
  }
  // 保留英文不译段:概念页也保英文(值非中文 → labelFor 落到 nameEn 分支)。
  // 多行/单行都容错:去掉标题行后按 · 连接再切(GLM 20260721-001[3]:防日后改成一词一行时粘连)。
  const enSec = sections.find((s) => s.startsWith("保留英文不译"));
  for (const tok of (enSec?.split("\n").slice(1).join("·") ?? "").split("·")) {
    const t = tok.replace(/[(（][^)）]*[)）]/g, "").trim(); // 去括注 Kubernetes(K8s)→Kubernetes
    if (t && !t.startsWith("#")) put(t, t);
  }
  return pins;
}

/**
 * 装配(纯函数,不调 GLM):meta 人物 + GLM 公司/概念 → 一份 entities.json。
 * GLM 实体逐个回原文校验:命中不了 或 集内无出处 → 进 rejected;通过的补真 evidence、按 id 归一去重。
 */
export function buildEntities({ meta, transcript, aliases, glmOut, glossary }) {
  const ctx = buildFactIndex(transcript, meta, aliases);
  const aliasById = new Map((aliases?.entities ?? []).map((e) => [e.id, e]));
  // 钉死译名表:接受 Map(id→中文) 或普通对象;缺省=空(退回 GLM 现译,保持旧行为)
  const glossaryPins = glossary instanceof Map ? glossary : new Map(Object.entries(glossary ?? {}));

  const entities = [];
  const rejected = [];
  const seen = new Map(); // id → index in entities(2a 归一化去重)

  // 人物(meta 权威):补上「本集提到他名字」的证据,但不因无证据而剔除(他们是权威来源)
  for (const p of personEntitiesFromMeta(meta)) {
    p.evidence = collectEvidence([p.name], transcript);
    entities.push(p);
    seen.set(p.id, entities.length - 1);
  }

  // 公司/概念(GLM 提议,逐个硬校验)
  for (const g of glmOut?.entities ?? []) {
    const nameEn = g.name_en;
    const nameZh = g.name_zh ?? g.name_en;
    const res = resolveEntity(nameEn, ctx);
    if (!res.pass) {
      rejected.push({ name: nameEn, reason: res.reason ?? "未在真相源命中(疑编造)" });
      continue;
    }
    const id = res.id ?? slugify(nameEn);
    const alias = aliasById.get(id);
    // 证据取自转写稿:别名表已登记则用其全部书写形式(含误写),否则用 name_en
    const forms = alias ? [alias.name, ...(alias.forms ?? [])] : [nameEn];
    const evidence = collectEvidence(forms, transcript);
    if (evidence.length === 0) {
      // 命中真相源(可能只在集标题/别名表)但**集内无出处** → 「集里怎么说它」无从回溯,不建页
      rejected.push({ name: nameEn, reason: "命中真相源但本集正文无出处(疑只在标题/别名表出现)" });
      continue;
    }
    // 别名表已登记 → 用它(最权威,带 forms/误写);否则概念查钉死译名表,再退回 GLM 现译
    const label = alias
      ? { name: alias.name, file: alias.file }
      : labelFor(g.type, nameZh, nameEn, glossaryPins.get(id));
    const ent = {
      id,
      type: g.type,
      role: g.role,
      name: label.name,
      file: label.file,
      primary: !!g.primary,
      how_described: g.how_described ?? "",
      source: "glm",
      evidence, // ← 只认代码检索出来的;GLM 的 g.evidence 一律丢弃
    };
    if (seen.has(id)) {
      // 2a:同一 id 已存在 → 合并(保留更「主要」的,证据取并集),不裂成两条
      const prev = entities[seen.get(id)];
      prev.primary = prev.primary || ent.primary;
      if (!prev.how_described && ent.how_described) prev.how_described = ent.how_described;
      continue;
    }
    entities.push(ent);
    seen.set(id, entities.length - 1);
  }

  return {
    episode_id: meta?.id ?? null,
    podcast: meta?.podcast ?? null,
    date: meta?.date ?? null,
    tags: glmOut?.tags ?? [],
    entities,
    rejected,
  };
}

/** 结构校验(重试循环要用):tags 3-5 个、entities 非空、每个实体五字段齐全(含硬契约 name_en) */
export function validateExtract(o) {
  if (!o || typeof o !== "object") return ["不是对象"];
  const errs = [];
  if (!Array.isArray(o.tags) || o.tags.length < 3 || o.tags.length > 5) errs.push("tags 必须 3-5 个");
  if (!Array.isArray(o.entities) || o.entities.length < 1) errs.push("entities 为空");
  for (const [i, e] of (o.entities ?? []).entries()) {
    for (const k of ["name_zh", "name_en", "type", "role", "how_described"]) {
      if (!e?.[k]) errs.push(`entity#${i + 1} 缺 ${k}`);
    }
  }
  return errs;
}

// ────────────────────────────── CLI(与 condense.mjs 同一纪律:先校验后写、毒缓存隔离)──────────────────────────────
// 超时兜底:C7 无人值守时,glm-ask 挂死会永久冻住整条 cron(GLM 20260717-021[3] 判 real)。
// 注:condense.mjs 的同款 glmAsk 也无超时 → 已登记 tech-debt 一起修,不在本片外科范围内散改。
const GLM_TIMEOUT_MS = Number(process.env.GLM_TIMEOUT_MS ?? 180000);
function glmAsk(system, input, maxTokens = 8000) {
  return new Promise((res, rej) => {
    const p = spawn("glm-ask", ["--system", system, "--max-tokens", String(maxTokens)], { stdio: ["pipe", "pipe", "pipe"] });
    let out = "", err = "", done = false;
    const finish = (fn, arg) => { if (done) return; done = true; clearTimeout(timer); fn(arg); };
    const timer = setTimeout(() => { p.kill("SIGKILL"); finish(rej, new Error(`glm-ask 超时 ${GLM_TIMEOUT_MS}ms`)); }, GLM_TIMEOUT_MS);
    p.stdout.on("data", (d) => (out += d));
    p.stderr.on("data", (d) => (err += d));
    p.on("error", (e) => finish(rej, e));
    p.on("close", (c) => (c === 0 ? finish(res, out) : finish(rej, new Error(`glm-ask exit ${c}: ${err}`))));
    // 子进程若先挂,stdin.write 会抛 EPIPE → 挂到 error 事件处理,不炸成 unhandledRejection
    p.stdin.on("error", (e) => finish(rej, e));
    p.stdin.write(input);
    p.stdin.end();
  });
}

function extractJson(text) {
  let t = String(text).trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) t = fence[1].trim();
  const a = t.indexOf("{"), b = t.lastIndexOf("}");
  if (a < 0 || b < 0) return null;
  try { return JSON.parse(t.slice(a, b + 1)); } catch { return null; }
}

async function main() {
  const DIR = process.argv[2] || "data/episodes/2026-07-08-latent-space-modal";
  const dir = resolve(ROOT, DIR);
  const meta = JSON.parse(readFileSync(resolve(dir, "meta.json"), "utf8"));
  const transcript = JSON.parse(readFileSync(resolve(dir, "transcript.en.json"), "utf8"));
  const translation = JSON.parse(readFileSync(resolve(dir, "translation.zh.json"), "utf8"));
  const digest = JSON.parse(readFileSync(resolve(dir, "digest.json"), "utf8"));
  const aliases = JSON.parse(readFileSync(resolve(ROOT, "data/aliases.json"), "utf8"));

  const glossaryMd = readFileSync(resolve(ROOT, "prompts/glossary.md"), "utf8");
  const glossaryPins = parseGlossaryPins(glossaryMd); // 概念页中文名钉死表(bug b)
  const SYS = readFileSync(resolve(ROOT, "prompts/extract-entities.md"), "utf8") +
    "\n\n---\n术语表(统一译名):\n" + glossaryMd;

  const mmss = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  const bilingual = translation.map((s) => `[${mmss(s.start)} ${s.speaker}] ${s.en} ‖ ${s.zh}`).join("\n");
  const INPUT = [
    `本集精华导读(供你判断哪些公司/概念是「本集真讨论过的主要实体」):\n${digest.digest_md}`,
    `\n已知人物(勿重复输出,人物由系统从 meta 派生):host=${meta.host ?? "(无姓名)"} guests=${(meta.guests ?? []).join("、")} cohosts=${(meta.cohosts ?? []).join("、")}`,
    `\n以下是完整双语对齐稿(每段:[时间戳 说话人] 英文 ‖ 中文):\n${bilingual}`,
  ].join("\n");

  const cacheFile = resolve(dir, ".entities-raw.txt");
  const badCacheFile = resolve(dir, ".entities-raw.bad.txt");
  let glmOut = null;

  if (process.env.FORCE !== "1" && existsSync(cacheFile)) {
    const cached = extractJson(readFileSync(cacheFile, "utf8"));
    if (cached && validateExtract(cached).length === 0) { glmOut = cached; console.log("(用 .entities-raw.txt 缓存)"); }
    else if (cached) console.error("⚠️ 缓存结构不合格 → 忽略缓存重跑");
  }

  const MAX_RETRY = 3;
  for (let attempt = 0; attempt <= MAX_RETRY && !glmOut; attempt++) {
    console.log(`抽实体:GLM-5.2 整读 ${translation.length} 段… (第 ${attempt + 1} 次)`);
    const raw = await glmAsk(SYS, INPUT);
    const cand = extractJson(raw);
    const errs = cand ? validateExtract(cand) : ["非合法 JSON"];
    if (errs.length === 0) { glmOut = cand; writeFileSync(cacheFile, raw); break; }
    writeFileSync(badCacheFile, raw);
    console.error(`  第 ${attempt + 1} 次不合格(${errs.join(" / ")})${attempt < MAX_RETRY ? ",重试" : ""}`);
  }
  if (!glmOut) {
    console.error(`❌ 抽实体连试 ${MAX_RETRY + 1} 次仍不合格。坏输出存 .entities-raw.bad.txt。entities.json 未改动。`);
    process.exit(1);
  }

  const out = buildEntities({ meta, transcript, aliases, glmOut, glossary: glossaryPins });
  writeFileSync(resolve(dir, "entities.json"), JSON.stringify(out, null, 2));
  const persons = out.entities.filter((e) => e.type === "person").length;
  const primary = out.entities.filter((e) => e.primary).length;
  console.log(`✅ entities.json: ${out.entities.length} 实体(${persons} 人物 / ${primary} 主要)、tags ${out.tags.length} 个、rejected ${out.rejected.length} 条`);
  if (out.rejected.length) for (const r of out.rejected) console.log(`   ⤷ 拦下 GLM 实体「${r.name}」:${r.reason}`);
}

// 仅作为脚本直接运行时才跑 CLI(被测试 import 时不跑)。
// ⚠️ 用 realpathSync/fileURLToPath 双向归一,**不能**写 `import.meta.url === \`file://${process.argv[1]}\``:
//   本仓库路径含中文「视频」,import.meta.url 会百分号编码(X%E8%A7%86%E9%A2%91)、argv[1] 不会 →
//   两者永不相等 → CLI 静默不跑、exit 0 冒充成功(GLM 检查员 20260717-021[4] 实测逮到,判 save)。
//   render.mjs 用的就是这个稳健写法,对照实测它能正确进 main、本脚本旧写法不能。
const isMain = (() => {
  try {
    return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
})();

if (isMain) {
  main().catch((e) => { console.error(e); process.exit(1); });
}
