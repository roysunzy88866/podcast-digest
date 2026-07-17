#!/usr/bin/env node
// C3 机器闸门 · D17(专名/数字回原文比对)+ D8(正文内联时间戳校验)
//
// 补的是 C2 静默丢掉的那一层:需求共识 ④ 第 1 级机器闸门明写
// 「数字/日期/人名/机构名/专名 确定性回原文比对(新增,零成本零幻觉)」。
// 与 C3 的实体识别同源(都要先认出专名),故一起做。
//
// ── 口径(drift #11,[standard-change: 用户授权 2026-07-17])──
//   硬拦:专名(人名/机构名/技术名) + 能归一化的确定数字(阿拉伯数字 ↔ 英文数字词 ten→10)
//   提醒:模糊量词(数十亿/几个百分点)—— 本就不是确定数字,逐字比对不适用 → 进待核清单,不卡提交
//   逃生:误报走人工复核放行 + 留痕(照 C2 Scenario 4a 既有做法),放行不改硬判定本身
//
// ── 真相源 = 转写稿 ∪ meta 有出处字段 ∪ 别名表 ──
//   为什么不只是转写稿:集 2 实测,转写稿里只有名(Matei/Reynolds)没有姓,
//   「Zaharia」「Xin」只出现在集标题(meta.title_en,取自 Substack API)。
//   只拿转写稿当真相源 → 会把正确的姓氏误判成编造。meta 那些字段同样有出处,同属真相。
//
// ── 两条诚实边界(不吹) ──
//   ① 【背景】块**不做** D17 比对:它是共识明定、且对读者明确标注的「AI 补充背景」,
//      内容本就来自模型世界知识(HTAP 全称/第二系统综合征),拿转写稿比对是范畴错误。
//      代价:【背景】是 D17 够不着的洞,靠「对读者标注 + 事后可查」兜(项目哲学:事后可查＞事前拦截)。
//      但 D8 **照查**【背景】里的时间戳——时间戳是「他在这一刻说过」的断言,与块类型无关。
//   ② D17 只证「这个名字/数字在原文出现过」,证不了「这句话是这个人说的/没被断章取义」。
//      D19 只被**部分收窄**(D8 抓得住「挂错说话人」那类),不宣称闭合;D15/D16 口径不变。
import { readFileSync, realpathSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { norm, buildWordStream, parseTs } from "./gate.mjs";

/** 【背景】= 共识明定的 AI 补充块(对读者已标注)→ D17 不比对它。整行剥掉。 */
export function stripBackground(md) {
  return String(md)
    .split("\n")
    .filter((line) => !line.includes("【背景】"))
    .join("\n");
}

const NUM_WORDS = {
  zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
  ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16,
  seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50,
  sixty: 60, seventy: 70, eighty: 80, ninety: 90,
};
const SCALES = { hundred: 100, thousand: 1000, million: 1e6, billion: 1e9 };

/** 一串英文数字词 → 数值("a hundred"→100, "twenty five"→25, "five hundred thousand"→500000) */
function composeNumberRun(words) {
  let total = 0;
  let current = 0;
  let seen = false;
  for (const w of words) {
    if (NUM_WORDS[w] != null) {
      current += NUM_WORDS[w];
      seen = true;
    } else if (w === "hundred") {
      current = (current || 1) * 100;
      seen = true;
    } else if (SCALES[w]) {
      total += (current || 1) * SCALES[w];
      current = 0;
      seen = true;
    }
  }
  return seen ? total + current : null;
}

/** 从一段英文文本收集「出现过的数字」:阿拉伯数字 + 英文数字词(单个值 + 相邻组合值) */
function collectNumbers(text, into) {
  // 阿拉伯数字(含千分位逗号与小数)
  for (const m of String(text).matchAll(/\d[\d,]*(?:\.\d+)?/g)) {
    const v = Number(m[0].replace(/,/g, "").replace(/\.$/, ""));
    if (Number.isFinite(v)) into.add(v);
  }
  // 英文数字词
  const toks = String(text).toLowerCase().split(/[^a-z]+/).filter(Boolean);
  let run = [];
  const flush = () => {
    if (run.length) {
      const v = composeNumberRun(run);
      if (v != null) into.add(v);
      run = [];
    }
  };
  for (const t of toks) {
    if (NUM_WORDS[t] != null || SCALES[t] || t === "a" || t === "and") {
      // 单个词自身的值也算「原文出现过」(ten→10、hundred→100)
      if (NUM_WORDS[t] != null) into.add(NUM_WORDS[t]);
      if (SCALES[t]) into.add(SCALES[t]);
      if (t === "a" || t === "and") {
        if (!run.length) continue; // 别让孤立的 a/and 起头
      }
      run.push(t);
    } else flush();
  }
  flush();
}

/**
 * 建事实索引 = 真相源的机器可查形式。
 * 返回 { tokens:Set<string 小写词>, numbers:Set<number>, stream, speakerMap, aliases, maxEnd }
 */
export function buildFactIndex(transcript, meta, aliases) {
  const tokens = new Set();
  const numbers = new Set();

  const texts = [];
  for (const seg of transcript) texts.push(seg.text ?? "");

  // meta 里**有出处**的字段同属真相源(集标题来自 Substack API;guests/guest_titles 由标题派生)
  if (meta?.title_en) texts.push(meta.title_en);
  for (const g of meta?.guests ?? []) texts.push(g);
  for (const [k, v] of Object.entries(meta?.guest_titles ?? {})) texts.push(`${k} ${v}`);
  if (meta?.podcast) texts.push(meta.podcast);
  for (const name of Object.values(meta?.speaker_map ?? {})) texts.push(String(name));

  for (const t of texts) {
    for (const w of norm(t)) tokens.add(w);
    collectNumbers(t, numbers);
  }

  const stream = buildWordStream(transcript);
  const maxEnd = stream.length ? Math.max(...stream.map((w) => w.end)) : 0;

  return { tokens, numbers, stream, speakerMap: meta?.speaker_map ?? {}, aliases: aliases ?? { entities: [] }, maxEnd };
}

/** 某个书写形式是否在真相源里出现过(多词形式要求每个词都在) */
function formHits(form, tokens) {
  const ws = norm(form);
  if (!ws.length) return false; // 纯中文形式(norm 后为空)→ 只能靠别名表的 en 形式回比
  return ws.every((w) => tokens.has(w));
}

/**
 * D17 · 专名回原文(硬拦)。
 * name 命中真相源即过;若 name 属于别名表某实体,则该实体**任一书写形式**命中即过
 * (正文写正确名 Modal,而转写稿只有误写 Modo → 靠别名表召回,不误杀)。
 */
export function checkProperNoun(name, ctx) {
  const entity = (ctx.aliases?.entities ?? []).find((e) =>
    [e.name, e.file, ...(e.forms ?? [])].filter(Boolean).some((f) => String(f).toLowerCase() === String(name).toLowerCase()),
  );
  const forms = entity ? [...new Set([entity.name, ...(entity.forms ?? [])].filter(Boolean))] : [name];
  for (const f of forms) {
    if (formHits(f, ctx.tokens)) return { pass: true, matchedForm: f, entity: entity?.id ?? null };
  }
  return {
    pass: false,
    matchedForm: null,
    entity: entity?.id ?? null,
    reason: entity
      ? `别名表实体「${entity.id}」的任何书写形式都未在真相源出现(疑编造)`
      : `专名「${name}」未在真相源出现,且不在别名表(疑编造)`,
  };
}

/** 从中文正文里挑拉丁串(专名候选);纯数字不算 */
export function extractLatinTokens(md) {
  return [...new Set([...String(md).matchAll(/[A-Za-z][A-Za-z0-9.+_-]*/g)].map((m) => m[0].replace(/[.]+$/, "")))].filter(Boolean);
}

/** 模糊量词:不是确定数字,逐字比对不适用 → 提醒层(drift #11) */
const VAGUE_RE = /(数[十百千万亿]+[余多]?[亿万千百]*|几[十百千万亿个成倍]+|好几[个十百]|数以[百千万亿]+计|大约|左右|上下|接近|将近|多个|若干|一些|不少|大量|海量)/g;

export function findVagueQuantifiers(md) {
  const out = [];
  for (const m of String(md).matchAll(VAGUE_RE)) {
    out.push({ raw: m[0], ctx: String(md).slice(Math.max(0, m.index - 12), m.index + m[0].length + 12).replace(/\n/g, " ") });
  }
  return out;
}

/**
 * 抽正文里的**确定数字**(阿拉伯数字)。
 * 已知边界:中文数字写法(十万/数十亿)不在此列 —— drift #11 授权的硬拦范围是
 * 「阿拉伯数字/年份 ↔ 英文数字词」;中文数字形式未覆盖,登记为债不静默。
 */
export function extractDigestNumbers(md) {
  const out = [];
  const text = String(md);
  for (const m of text.matchAll(/\d[\d,]*(?:\.\d+)?/g)) {
    const raw = m[0].replace(/[.,]+$/, "");
    const v = Number(raw.replace(/,/g, ""));
    if (!Number.isFinite(v)) continue;
    out.push({ value: v, raw, ctx: text.slice(Math.max(0, m.index - 14), m.index + raw.length + 14).replace(/\n/g, " ") });
  }
  return out;
}

/** 时间戳里的这些不是「事实数字」,是溯源坐标(D8 单独查)→ D17 数字比对要先剔掉 */
export function stripTimestamps(md) {
  return String(md).replace(/\[[^\]]*\d{1,2}:\d{2}[^\]]*\]/g, " ");
}

/**
 * 中文数字成语里的数字**不是对本集的事实断言**,是固定词组的一部分 → 不参与 D17 硬拦。
 * 与 drift #11「模糊量词只提醒」同理(该裁决授权的硬拦范围是「确定数字」)。
 * 真实案例:集2 正文「7×24 小时值守」——转写稿里 on-call/around the clock/twenty four 全无,
 * 原话是「an operational team that's going to sit there」+「lose all your data at night」,
 * GLM 用的是中文习语。硬拦它 = 逼稿子不许说人话,且必然天天误报 → 闸门沦为摆设。
 */
export function stripNumericIdioms(md) {
  return String(md).replace(/7\s*[×x*]\s*24|24\s*[×x*]\s*7|24\/7/g, " ");
}

/**
 * 解析正文内联时间戳。真实形状(取自真 digest,非臆测):
 *   [00:34-02:17 Akshat Bubna] / [10:03-10:34 swyx / Akshat Bubna] / [37:57-38:47] / [48:34 Akshat Bubna]
 */
export function parseInlineTimestamps(md) {
  const out = [];
  for (const m of String(md).matchAll(/\[\s*(\d{1,2}:\d{2}(?::\d{2})?)\s*(?:[-–—]\s*(\d{1,2}:\d{2}(?::\d{2})?))?\s*([^\]]*)\]/g)) {
    const start = parseTs(m[1]);
    const end = m[2] ? parseTs(m[2]) : start;
    const who = (m[3] || "").trim();
    const speakers = who ? who.split("/").map((s) => s.trim()).filter(Boolean) : [];
    out.push({ raw: m[0], start, end, speakers });
  }
  return out;
}

/**
 * D8 · 校验一条内联时间戳(硬拦):
 *   ① 区间必须真实存在于转写稿(编造的区间 / 落在静音空档 → 拦)
 *   ② 标注了说话人时,判据 = **主说话人口径**(与 user-stories C3 Scenario 5② 的
 *      「该区间主说话人 == 标注的说话人」一致):
 *        · 每个被标注的人都必须在区间内真讲过话(≥minWords)→ 抓「把话安到没开口的人头上」(移花接木)
 *        · 区间的**主说话人**(词数最多者)必须在标注里 → 抓「只标次要插话者、隐去真正占场的人」
 *
 * 为什么不是「集合完全相等」:首版这么写,拿真数据一跑 23 条时间戳挂 13 条,
 * 全是「标注 Akshat / 实际 swyx + Akshat」—— 长区间里主持人一句「Yeah」就把整段判挂。
 * 那比我自己的 Gherkin 还严,且会把闸门变成天天误报→天天人工放行→摆设。
 * 改成主说话人口径后,D19 那类攻击(把主持人的话挂给嘉宾)照样拦得住:那种情况下
 * 被标注的嘉宾在区间内 0 词,过不了第一条。
 * 噪声容忍:区间内发言 <2 词的人不计入「真讲过话」(对齐 gate.mjs 的 crossRun<2 口径)。
 */
export function checkInlineTimestamp(t, ctx, { minWords = 2, tsGrace = 1.5 } = {}) {
  if (!Number.isFinite(t.start) || !Number.isFinite(t.end)) return { pass: false, reason: "时间戳解析失败" };
  if (t.start < 0 || t.start > ctx.maxEnd) return { pass: false, reason: `区间超出转写稿范围(0~${ctx.maxEnd.toFixed(1)}s)` };

  // 单点时间戳(如 [48:34 X])跨度≈一个词,直接比对必然判不出主说话人 → 给 tsGrace 宽限窗,
  // 与 gate.mjs 金句时间戳的既有口径(tsGrace=1.5)一致,不另立一套。
  // 真实案例:集1 [48:34 Akshat] 指的是 Akshat 的回答,而 48:34.0 那一刻主持人的问句
  // 「...what happened?」还差 0.12s 才说完,Akshat 0.76s 后才开口 —— 这是边界毛刺,不是编造。
  const isPoint = t.end - t.start < 1;
  const lo = isPoint ? t.start - tsGrace : t.start;
  const hi = isPoint ? t.end + tsGrace : t.end;

  const words = ctx.stream.filter((w) => w.start < hi + 0.001 && w.end > lo - 0.001);
  if (!words.length) return { pass: false, reason: "该区间在转写稿里没有任何词(疑编造区间)" };

  if (!t.speakers.length) return { pass: true, actual: [] }; // 无说话人标注 → 只校验区间真实性

  const counts = new Map();
  for (const w of words) {
    const nm = ctx.speakerMap[w.speaker] ?? w.speaker;
    counts.set(nm, (counts.get(nm) || 0) + 1);
  }
  const ranked = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  const actual = ranked.filter(([, n]) => n >= minWords).map(([nm]) => nm);
  const dominant = ranked[0]?.[0] ?? null;

  // ① 被标注的人必须真讲过话
  const phantom = t.speakers.filter((s) => !actual.includes(s));
  if (phantom.length)
    return {
      pass: false,
      reason: `说话人不符:标注「${phantom.join(" / ")}」在该区间内没讲话(实际是「${actual.join(" / ") || "(无)"}」)`,
      actual,
      dominant,
    };

  // ② 主说话人不能被隐去
  if (dominant && !t.speakers.includes(dominant))
    return {
      pass: false,
      reason: `说话人不符:该区间主说话人是「${dominant}」,却只标了「${t.speakers.join(" / ")}」`,
      actual,
      dominant,
    };

  return { pass: true, actual, dominant };
}

/** 我们自己模板/通用写法带进来的拉丁串,不是从转写稿派生的专名 → 不参与 D17 */
const TOKEN_ALLOWLIST = new Set(["tldr", "ai", "id", "md", "url", "http", "https"]);

/** 校验一集的事实层:D17 专名 + D17 数字 + D8 时间戳 */
export function gateFacts(dir, { aliasesPath } = {}) {
  const transcript = JSON.parse(readFileSync(resolve(dir, "transcript.en.json"), "utf8"));
  const meta = JSON.parse(readFileSync(resolve(dir, "meta.json"), "utf8"));
  const digest = JSON.parse(readFileSync(resolve(dir, "digest.json"), "utf8"));
  let aliases = { entities: [] };
  try {
    aliases = JSON.parse(readFileSync(aliasesPath ?? resolve(dir, "../../aliases.json"), "utf8"));
  } catch {
    /* 别名表还没有 → 空表(此时正确名会因转写错而误报,故别名表是 C3 的必需件) */
  }

  const ctx = buildFactIndex(transcript, meta, aliases);
  const md = String(digest.digest_md ?? "");
  // D17 作用域:去【背景】(声明过的 AI 补充)、去时间戳坐标、去数字成语(都不是对本集的事实断言)
  const body = stripNumericIdioms(stripTimestamps(stripBackground(md)));

  // ① D17 专名(硬拦)
  const nouns = extractLatinTokens(body).filter((t) => !TOKEN_ALLOWLIST.has(t.toLowerCase()));
  const nounResults = nouns.map((n) => ({ name: n, ...checkProperNoun(n, ctx) }));

  // ② D17 确定数字(硬拦)
  const numResults = extractDigestNumbers(body).map((n) => ({
    ...n,
    pass: ctx.numbers.has(n.value),
    reason: ctx.numbers.has(n.value) ? null : `数字 ${n.raw} 未在真相源出现(疑编造)`,
  }));

  // ③ D8 内联时间戳(硬拦)—— 作用域是**完整正文**,含【背景】
  const tsResults = parseInlineTimestamps(md).map((t) => ({ ...t, ...checkInlineTimestamp(t, ctx) }));

  // ④ 模糊量词(提醒层,不卡提交)
  const vague = findVagueQuantifiers(body);

  const failures = [
    ...nounResults.filter((r) => !r.pass).map((r) => ({ kind: "D17-专名", ...r })),
    ...numResults.filter((r) => !r.pass).map((r) => ({ kind: "D17-数字", ...r })),
    ...tsResults.filter((r) => !r.pass).map((r) => ({ kind: "D8-时间戳", ...r })),
  ];

  return {
    id: meta.id,
    nouns: nounResults,
    numbers: numResults,
    timestamps: tsResults,
    vague,
    failures,
    pass: failures.length === 0,
  };
}

// ── CLI:node scripts/gate-facts.mjs <episodeDir> ──
const isMain = (() => {
  try {
    return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
})();
if (isMain) {
  const dir = process.argv[2];
  if (!dir) {
    console.error("用法: node scripts/gate-facts.mjs <data/episodes/xxx 目录>");
    process.exit(2);
  }
  const r = gateFacts(dir);
  console.log(`── ${r.id} · 事实层闸门(D17 专名/数字 + D8 时间戳)──`);
  console.log(`  专名 ${r.nouns.filter((x) => x.pass).length}/${r.nouns.length} 回原文命中`);
  console.log(`  数字 ${r.numbers.filter((x) => x.pass).length}/${r.numbers.length} 回原文命中`);
  console.log(`  时间戳 ${r.timestamps.filter((x) => x.pass).length}/${r.timestamps.length} 区间+说话人相符`);
  if (r.vague.length) {
    console.log(`\n  ⚠️ 待核清单(模糊量词,提醒不拦 · drift #11):`);
    for (const v of r.vague.slice(0, 10)) console.log(`     「${v.raw}」… ${v.ctx}`);
  }
  if (!r.pass) {
    console.error(`\n❌ 事实层闸门未过(${r.failures.length} 条):`);
    for (const f of r.failures) console.error(`   [${f.kind}] ${f.reason ?? ""}\n      ${f.ctx ?? f.raw ?? f.name ?? ""}`);
    process.exit(1);
  }
  console.log("\n✅ 事实层闸门全过");
}
