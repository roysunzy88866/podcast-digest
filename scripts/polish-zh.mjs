#!/usr/bin/env node
// C41 · 精华可读性 v2 机器修(ADR 0027,2026-10-04 用户「需求通过」):
//   ① 统一人名拼写(同名不同姓拼写 → 以节目官方标题/嘉宾信息为准,机械替换)
//   ② 正文普通英文单词 → 中文 ③ 超 60 字的长句 → 拆短(②③ 交 GLM 只改被标出的句子)
// 开关:READABLE_V2=1 才动(用户「先看 2 期前后对照,认可后才对新内容生效」);没开 = 原样退出 0。
// 守门:改动后整篇复检事实层,**不许冒出新失败**,否则整批回滚;任何异常都退出 0(best-effort,不阻塞发布)。
//
// 用法:node scripts/polish-zh.mjs <集目录>
import { readFileSync, writeFileSync, existsSync, realpathSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { gateFacts } from "./gate-facts.mjs";
import { visibleHanCount } from "./render.mjs";

export const LONG_SENT_HAN = 60;
// 中文科技写作里约定俗成保留英文的小写词(实测近 73 集高频)——不当「夹杂」
export const JARGON_OK = new Set([
  "token", "tokens", "harness", "diff", "bug", "bugs", "slop", "evals", "eval", "issue", "issues", "prompt", "prompts",
  "skill", "skills", "flag", "flags", "vibe", "coding", "hook", "hooks", "markdown", "webhook", "webhooks", "schema",
  "checkpoint", "cron", "loop", "linter", "embedding", "embeddings", "rollout", "top-k", "runbook", "transformer",
  "agentic", "pre-seed", "seed", "alpha", "beta", "demo", "app", "apps", "api", "saas", "ide", "repo", "commit", "pr",
  "json", "yaml", "sql", "cli", "sdk", "mcp", "rag", "gpu", "cpu", "llm", "ai", "app store", "pull", "request",
]);

const MASK = /\[\[[^\]]*\]\]|<button[\s\S]*?<\/button>|<[^>]+>|`[^`]*`|[[【(（][^\]】)）\n]*\d{1,2}:\d{2}[^\]】)）\n]*[\]】)）]/g;

/** 句中普通英文小写词(≥3 字母、不在 JARGON_OK;双链/按钮/代码/时间戳内的不算)。 */
export function strayWords(text) {
  const t = String(text).replace(MASK, " ");
  return (t.match(/(?<![A-Za-z0-9])[a-z][a-z-]{2,}(?![A-Za-z0-9])/g) ?? []).filter((w) => !JARGON_OK.has(w));
}

/** 正文里的句子(跳过标题/引用块【背景】/表格/代码围栏行),带原文偏移。 */
export function bodySentences(md) {
  const out = [];
  const text = String(md);
  let off = 0;
  let fence = false;
  for (const line of text.split("\n")) {
    const start = off;
    off += line.length + 1;
    if (/^\s*(```|~~~)/.test(line)) { fence = !fence; continue; }
    if (fence || !line.trim() || /^\s*(#{1,6}\s|>|\|)/.test(line)) continue;
    const re = /[^。！？!?]+[。！？!?]?[」』”’）)]*/g;
    let m;
    while ((m = re.exec(line))) {
      const s = m[0];
      if (!s.trim()) continue;
      const lead = s.length - s.trimStart().length;
      out.push({ start: start + m.index + lead, end: start + m.index + s.length, text: s.trim() });
    }
  }
  return out;
}

/** 标出有问题的句子:夹杂普通英文 / 可见汉字超 LONG_SENT_HAN。 */
export function sentenceIssues(md) {
  return bodySentences(md)
    .map((s) => ({ ...s, stray: strayWords(s.text), long: visibleHanCount(s.text) > LONG_SENT_HAN }))
    .filter((s) => s.stray.length || s.long);
}

export function lev(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}

/** 官方人名(名 + 姓):只取嘉宾/主持字段(GLM 20261004-008[2]:标题里「The Logic」这类会被误抽成人名)。 */
export function officialNames(meta) {
  const src = [...(meta?.guests ?? []), meta?.host, ...(meta?.cohosts ?? [])].filter(Boolean).join(" ; ");
  const out = new Map();
  for (const m of src.matchAll(/\b([A-Z][a-z]+)\s+([A-Z][A-Za-z'-]{2,})\b/g)) if (!out.has(`${m[1]} ${m[2]}`)) out.set(`${m[1]} ${m[2]}`, [m[1], m[2]]);
  return [...out.values()];
}

/** 同名(名完全相同)、姓只差 1–2 个字母 → 改成官方拼写。名不同不碰(Marc / Mark 是两个人)。 */
export function fixNameVariants(text, official) {
  let out = String(text ?? "");
  const replaced = [];
  for (const [first, last] of official) {
    out = out.replace(new RegExp(`\\b${first}\\s+([A-Z][A-Za-z'-]{2,})\\b`, "g"), (all, l2) => {
      // GLM 008[1]:短姓极易误配(Li/Wu、Wang/Yang)→ 两个姓都 ≥5 字母才动(容 2 处差异,覆盖真案例 Farrow/Ferro);更短一律不动
      const maxD = Math.min(last.length, l2.length) >= 5 ? 2 : 0;
      if (l2 === last || maxD === 0 || lev(l2.toLowerCase(), last.toLowerCase()) > maxD) return all;
      replaced.push([`${first} ${l2}`, `${first} ${last}`]);
      return `${first} ${last}`;
    });
  }
  return { text: out, replaced };
}

/** 一句改写收不收:受保护片段原样在、数字不增不减、信息量不明显缩水、问题确有改善。 */
export function acceptRewrite(orig, patch) {
  if (typeof patch !== "string" || !patch.trim()) return false;
  for (const keep of String(orig).match(MASK) ?? []) if (!patch.includes(keep)) return false;
  const nums = (s) => (String(s).replace(MASK, " ").match(/\d+(?:\.\d+)?/g) ?? []).sort().join(",");
  if (nums(orig) !== nums(patch)) return false;
  if (visibleHanCount(patch) < visibleHanCount(orig) * 0.85) return false;
  // GLM 008[3]:英文专名(大写开头的词)前后必须一致 —— 防改写悄悄换人/换公司
  const caps = (s) => (String(s).replace(MASK, " ").match(/\b[A-Z][A-Za-z0-9'-]*\b/g) ?? []).sort().join(",");
  if (caps(orig) !== caps(patch)) return false;
  const longest = (s) => Math.max(0, ...bodySentences(s).map((x) => visibleHanCount(x.text)));
  return strayWords(patch).length < strayWords(orig).length || (visibleHanCount(orig) > LONG_SENT_HAN && longest(patch) < visibleHanCount(orig));
}

// ══ 重点标注(2026-10-04 用户:「重点结论」加粗、「重点问题」下划线,不用太多)══
// 模型只负责从每节原文里**一字不差摘出**片段;加不加、加在哪由程序卡:逐字出自该节、≤40 字、不含句中断点、
// 不碰双链/时间戳/已有标记;每节结论 ≤1、问题 ≤1,全篇各 ≤6。正文一个字不改(防失真闸门不受影响)。
// 下划线写作 ==…==(Quartz 渲染为 .text-highlight,custom.scss 改成主题色下划线)。
export const EMPH_MAX = 6;
export const EMPH_MAX_HAN = 40;
const TAKEAWAY = /本集带走/;

/** 正文按 ## 小节切:[{i, title, start, end}](start/end = 该节正文在 md 里的范围;开场算第 0 节)。 */
export function sections(md) {
  const text = String(md);
  const heads = [...text.matchAll(/^## (.*)$/gm)];
  const out = [{ i: 0, title: "开场", start: 0, end: heads.length ? heads[0].index : text.length }];
  heads.forEach((h, k) => out.push({ i: k + 1, title: h[1].trim(), start: h.index + h[0].length, end: k + 1 < heads.length ? heads[k + 1].index : text.length }));
  return out;
}

// 全角/半角标点一一对照(长度不变 → 偏移可直接回原文):样张实证模型摘出「，」而原文是「,」
const PUNCT = { "，": ",", "：": ":", "？": "?", "！": "!", "；": ";", "（": "(", "）": ")", "“": "\"", "”": "\"" };
const normPunct = (s) => String(s).replace(/[，：？！；（）“”]/g, (c) => PUNCT[c]);

/** 包着短词的引号去掉(用户 2026-10-04:「」用得太多看着怪;引号只留给整句原话)。
 *  判据:引号里 ≤8 个汉字、且没有句读标点(,。!?;:)→ 是名词/概念不是原话 → 去引号。只删符号不改字。 */
export function stripShortQuotes(md) {
  return String(md).replace(/[「『]([^「」『』\n]{1,16})[」』]/g, (all, inner) => {
    const han = (inner.match(/[\u4e00-\u9fff]/g) ?? []).length;
    return han <= 8 && !/[,，。!！?？;；:：]/.test(inner) ? inner : all;
  });
}

/** 去掉正文里浓缩模型自己加的加粗(「本集带走」列表的加粗是格式,保留)—— 加粗只留给程序控量的「重点结论」。只删标记不改字。 */
export function stripBodyBold(md) {
  let out = String(md);
  for (const sec of [...sections(out)].reverse()) {
    if (TAKEAWAY.test(sec.title)) continue;
    out = out.slice(0, sec.start) + out.slice(sec.start, sec.end).replace(/\*\*([^*\n]+?)\*\*/g, "$1") + out.slice(sec.end);
  }
  return out;
}

/** 把模型摘出的片段机械地加上标记;不合格的片段直接丢。返回 {md, applied:[{sec,kind,text}]}。 */
export function applyEmphasis(md, picks) {
  const secs = sections(md);
  const text = String(md);
  const ntext = normPunct(text);
  const protectedSpans = [...text.matchAll(/\[\[[^\]]*\]\]|\*\*[^*]+\*\*|==[^=\n]+==|[[【(（][^\]】)）\n]*\d{1,2}:\d{2}[^\]】)）\n]*[\]】)）]/g)].map((m) => [m.index, m.index + m[0].length]);
  const used = { 结论: 0, 问题: 0 };
  const perSec = new Set();
  const ins = [];
  for (const p of picks ?? []) {
    const kind = p.kind === "问题" ? "问题" : p.kind === "结论" ? "结论" : null;
    const frag = normPunct(String(p.text ?? "").trim()).replace(/[。！？!?…；;：:，,、\s]+$/u, "");
    const han = (frag.match(/[\u4e00-\u9fff]/g) ?? []).length;
    if (!kind || used[kind] >= EMPH_MAX || han < 4 || han > EMPH_MAX_HAN || /[。！？!?；;*=\[\]\n]|——/.test(frag)) continue;
    // 引号要成对(样张实证:「**不去操纵这些评估」是他…**」只框住半边引号,读着像断了)
    const cnt = (re) => (frag.match(re) ?? []).length;
    if (cnt(/「/g) !== cnt(/」/g) || cnt(/“/g) !== cnt(/”/g) || cnt(/"/g) % 2) continue;
    // 先在模型说的那一节找;找不到而全文恰好出现一次 → 以它真实所在的那一节为准(样张实证模型会报错节号)
    let sec = secs.find((x) => x.i === p.sec);
    let at = sec ? ntext.indexOf(frag, sec.start) : -1;
    if (!(at >= 0 && at + frag.length <= sec.end)) {
      const first = ntext.indexOf(frag);
      at = first >= 0 && ntext.indexOf(frag, first + 1) < 0 ? first : -1;
      sec = at >= 0 ? secs.find((x) => at >= x.start && at < x.end) : null;
    }
    if (at < 0 || !sec || TAKEAWAY.test(sec.title) || perSec.has(`${sec.i}:${kind}`)) continue;
    const end = at + frag.length;
    if (protectedSpans.some(([a, b]) => at < b && end > a) || ins.some((x) => at < x.end && end > x.at)) continue;
    used[kind]++;
    perSec.add(`${sec.i}:${kind}`);
    ins.push({ at, end, mark: kind === "结论" ? "**" : "==", sec: sec.i, kind, text: text.slice(at, end) });
  }
  let out = text;
  for (const x of [...ins].sort((a, b) => b.at - a.at)) out = out.slice(0, x.at) + x.mark + out.slice(x.at, x.end) + x.mark + out.slice(x.end);
  return { md: out, applied: ins.map(({ sec, kind, text: t }) => ({ sec, kind, text: t })) };
}

const EMPH_SYSTEM = `下面是一篇中文精华,按小节编号。请为每一节挑出:
- 「结论」:这一节最核心的一个判断或结论(只挑真正的重点;没有就不挑);
- 「问题」:这一节要回答的那个关键问题(正文里以问句出现的才挑;没有就不挑)。
要求:必须从该节正文里一字不差地摘一句或半句,不超过 40 字;不改字、不加字;全篇加起来结论不超过 6 处、问题不超过 6 处,宁少勿多。「本集带走」那节不用挑。
输出:每行一条,格式「[[节号]] 结论:摘出的原文」或「[[节号]] 问题:摘出的原文」。只输出这些行。`;

function glmEmphasis(md) {
  const secs = sections(md);
  const input = secs.map((x) => `[[${x.i}]] ${x.title}\n${String(md).slice(x.start, x.end).trim()}`).join("\n\n");
  const r = spawnSync("glm-ask", ["--system", EMPH_SYSTEM, "--max-tokens", "2000", input], { encoding: "utf8", timeout: 120000, maxBuffer: 8 * 1024 * 1024 });
  if (r.status !== 0) throw new Error(`glm-ask exit ${r.status}: ${(r.stderr || "").slice(0, 160)}`);
  return parseEmphasis(r.stdout);
}

/** 解析模型输出「[[节号]] 结论/问题:片段」(半角/全角冒号都认;片段两头的引号去掉)。 */
export function parseEmphasis(stdout) {
  const picks = [];
  for (const line of String(stdout).split("\n")) {
    const g = line.match(/^\s*\[\[(\d+)\]\]\s*(结论|问题)\s*[:：]\s*(.+?)\s*$/); // 半角/全角冒号都认(云端模型吐全角,样张实证 0 处命中)
    if (g) picks.push({ sec: Number(g[1]), kind: g[2], text: g[3].replace(/^[「“"]|[」”"]$/g, "") });
  }
  return picks;
}

const SYSTEM = `你是中文科技编辑。下面每条是一篇中文精华正文里的一句话,括号里标了问题:
- 「英文」:句中普通英文单词改成中文(人名、公司名、产品名、约定俗成的技术词如 token/API 照留英文);
- 「过长」:这句超过 60 字,拆成两三个短句,每句 40 字左右。
红线:意思、事实、数字、人名专名一个都不许变,不许增删信息;句中 [[双链]]、<button…>…</button>、[mm:ss 说话人] 这类标记原样保留不动。
输出:每条一行,格式「[[编号]] 改好的句子」。只输出这些行,不要解释。`;

function glm(input) {
  const r = spawnSync("glm-ask", ["--system", SYSTEM, "--max-tokens", "4000", input], { encoding: "utf8", timeout: 120000, maxBuffer: 8 * 1024 * 1024 });
  if (r.status !== 0) throw new Error(`glm-ask exit ${r.status}: ${(r.stderr || "").slice(0, 160)}`);
  const m = new Map();
  for (const line of String(r.stdout).split("\n")) {
    const g = line.match(/^\s*\[\[(\d+)\]\]\s?(.*)$/);
    if (g) m.set(Number(g[1]), g[2].trim());
  }
  return m;
}

export function polish(dir, { log = console.log, ask = glm, gate = gateFacts, pickEmphasis = glmEmphasis } = {}) {
  const dPath = resolve(dir, "digest.json");
  const digest = JSON.parse(readFileSync(dPath, "utf8"));
  const meta = existsSync(resolve(dir, "meta.json")) ? JSON.parse(readFileSync(resolve(dir, "meta.json"), "utf8")) : {};
  const before = gate(dir);
  const beforeKeys = new Set(before.failures.map((f) => String(f.raw ?? f.name ?? f.reason)));

  // ① 人名统一(正文 + 标题 + 摘要)
  const official = officialNames(meta);
  const names = [];
  const next = { ...digest };
  for (const k of ["digest_md", "title_zh", "tldr"]) {
    const r = fixNameVariants(next[k], official);
    next[k] = r.text;
    names.push(...r.replaced);
  }
  for (const [a, b] of names) log(`  ✎ 人名统一:${a} → ${b}`);

  // ②③ 夹杂英文 / 长句 → GLM 只改被标出的句子
  let md = String(next.digest_md ?? "");
  const issues = sentenceIssues(md);
  const done = [];
  for (let k = 0; k < issues.length; k += 20) {
    const batch = issues.slice(k, k + 20);
    let got;
    try {
      got = ask(batch.map((x, i) => `[[${i}]] (${[x.stray.length ? `英文:${x.stray.join("/")}` : "", x.long ? "过长" : ""].filter(Boolean).join(";")}) ${x.text}`).join("\n"));
    } catch (e) { log(`  ✗ 改写调 GLM 失败:${e.message}`); break; }
    let back = 0;
    batch.forEach((x, i) => { const p = got.get(i); if (p) back++; if (acceptRewrite(x.text, p)) done.push({ ...x, patch: p }); });
    log(`  改写批 ${k / 20 + 1}:标出 ${batch.length} 句,模型返回 ${back} 句`); // GLM 008[5]:分清「没返回」与「拒收」
  }
  for (const x of [...done].sort((a, b) => b.start - a.start)) md = md.slice(0, x.start) + x.patch + md.slice(x.end);

  // ④ 重点标注(只加标记不改字)
  let emph = [];
  try {
    md = stripShortQuotes(stripBodyBold(md)); // 样张实证:浓缩模型会自己在正文加粗、给名词乱加引号 → 先清掉
    const r = applyEmphasis(md, pickEmphasis(md));
    md = r.md;
    emph = r.applied;
    log(`  ✎ 重点标注:加粗 ${emph.filter((x) => x.kind === "结论").length} 处,下划线 ${emph.filter((x) => x.kind === "问题").length} 处`);
  } catch (e) { log(`  ✗ 重点标注调 GLM 失败(跳过):${e.message}`); }
  next.digest_md = md;

  if (!names.length && !done.length && !emph.length) { log(`  可读性修:无需改动(标出 ${issues.length} 句,改写 0 句被接受)`); return { changed: false }; }
  // 守门:事实层不许冒出新失败,否则整批回滚
  writeFileSync(dPath, JSON.stringify(next));
  const after = gate(dir);
  const fresh = after.failures.filter((f) => !beforeKeys.has(String(f.raw ?? f.name ?? f.reason)));
  if (fresh.length) {
    writeFileSync(dPath, JSON.stringify(digest));
    log(`  ✗ 可读性修带出 ${fresh.length} 条新事实层失败 → 整批回滚`);
    return { changed: false, rolledBack: true };
  }
  log(`  ✓ 可读性修:人名统一 ${names.length} 处,改写 ${done.length}/${issues.length} 句,重点标注 ${emph.length} 处`);
  return { changed: true, names, rewrites: done.length, flagged: issues.length, emphasis: emph };
}

const isMain = (() => { try { return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url); } catch { return false; } })();
if (isMain) {
  const dir = process.argv[2];
  if (!dir) { console.error("用法: node scripts/polish-zh.mjs <集目录>"); process.exit(2); }
  if (process.env.READABLE_V2 !== "1") { console.log("可读性修:READABLE_V2 未开(等用户看样张认可),跳过"); process.exit(0); }
  try { polish(resolve(dir)); } catch (e) { console.error(`⚠️ 可读性修异常(不阻塞发布):${e.message}`); }
  process.exit(0);
}
