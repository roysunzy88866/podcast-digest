#!/usr/bin/env node
// C12 · 自动品味判官(还 D44③)——读「标题 + 简介」对照 `需求共创/内容品味档案.md`,判 发布/跳过/待裁。
//
// 为什么现在做(D44③ 的触发条件真的发生了):
//   D44③ 原文「靠『源已被筛成高对味』省掉判官…**等真出现『绿源里漏进不对味集』再做 per-集判官**」。
//   2026-07-25:bigtech 周五**新闻回顾体**自动上线 voice.solomind.cc。该源一周 2-3 集混着
//   「访谈」与「每周新闻讨论」两种形态,**源级预筛切不开** → 触发条件成立。
//
// 三条设计约束(承项目既有教训,别改坏):
//   ① **跑在转写之前**——只需标题+简介。判掉一集省 ~2h whisperX + 整条付费链(用户 2026-07-25 交底未否)。
//   ② **付费档 GLM-4.6**——输入仅几百 token(≈¥0.005/集)。免费档实测在判断类任务上否决不可复现≈随机
//      (见 judge-faithful.mjs 头注 / D15),不为省 ¥5 冒险。
//   ③ **点对点喂**——一次一集、不给别的候选(承 judge-quotes 的防位置/相对比较偏见设计)。
//
// 🔒 fail-safe 是本文件的命根子:**任何解析不出、判官挂了、返回非法值的情况,一律 undecided(待裁),
//    绝不静默放行成 publish、也绝不静默杀成 skip**。判官坏掉时系统应该停下来问人,不是替人做主。
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const TASTE_FILE = resolve(ROOT, "需求共创/内容品味档案.md");
const SYS_FILE = resolve(ROOT, "prompts/judge-taste.md");

/** 简介截断上限(字符)。真 feed 实测简介 562-3107 字符,2000 足够判定又不让提示词失控。 */
export const JUDGE_MAX_DESC = 2000;

const VERDICTS = new Set(["publish", "skip", "undecided"]);

/** undecided 的统一出口:所有拿不准/出错都从这里走,保证结构一致。 */
function undecided(reason) {
  return { verdict: "undecided", reason, matched: null };
}

/**
 * 从 RSS item 抽判官要的简介:description 与 itunes:summary 取更长者,剥 HTML 标签与实体、压平空白。
 * 两个都空 → 空串(不编造;由调用方决定怎么处理)。超长截断并**显式标注**(不静默丢内容)。
 */
export function pickDescription(item = {}) {
  // 已知限(GLM 20260725-006[4],判 noise 不修):正则剥标签遇到属性里含 ">" 的脏 HTML(如 <a href="a>b">)
  // 会多吃一截文本。真 feed 简介都是托管商机器生成的规范 HTML,且最坏后果只是判官少看几个字 →
  // 由 undecided 兜底。为此引 XML 解析器属过度设计,不做。
  const clean = (s) =>
    String(s ?? "")
      .replace(/<[^>]+>/g, " ")            // 真 feed 的简介是 <p> 包的 HTML
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#0?39;|&apos;|&#8217;/g, "'")
      .replace(/&[a-zA-Z#0-9]+;/g, " ")     // 其余实体当空白,别留半截乱码给判官
      .replace(/\s+/g, " ")
      .trim();
  const a = clean(item.description);
  const b = clean(item.itunesSummary);
  const picked = a.length >= b.length ? a : b;
  return picked.length > JUDGE_MAX_DESC ? `${picked.slice(0, JUDGE_MAX_DESC)}…(已截断)` : picked;
}

/**
 * 解析判官返回 → {verdict, reason, matched}。
 * 🔒 fail-safe:围栏/前后废话能扒掉;非法值、缺字段、解析失败、非字符串 —— **全部落 undecided**。
 * 结构上不可能返回三档之外的第四种值。
 */
export function parseVerdict(raw) {
  if (typeof raw !== "string" || !raw.trim()) return undecided("判官返回空或非字符串");
  const stripped = raw.replace(/```(?:json)?/gi, " ");
  const m = stripped.match(/\{[\s\S]*\}/);          // 前后废话里捞第一个 JSON 块
  if (!m) return undecided(`判官返回无法解析:${raw.slice(0, 120)}`);
  let obj;
  try {
    obj = JSON.parse(m[0]);
  } catch {
    return undecided(`判官返回无法解析:${raw.slice(0, 120)}`);
  }
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return undecided(`判官返回无法解析:${raw.slice(0, 120)}`);
  if (typeof obj.verdict !== "string") return undecided(`判官返回缺 verdict 字段:${raw.slice(0, 120)}`);
  const v = obj.verdict.trim().toLowerCase();
  if (!VERDICTS.has(v)) return undecided(`判官返回非法判定值「${obj.verdict}」`);
  return {
    verdict: v,
    reason: typeof obj.reason === "string" && obj.reason.trim() ? obj.reason.trim() : "(判官未给理由)",
    matched: typeof obj.matched === "string" && obj.matched.trim() ? obj.matched.trim() : null,
  };
}

/**
 * 组判官输入:品味档案全文 + **本集**标题 + **本集**简介。
 * 🔒 一次只含一集——不给别的候选,防相对比较/位置偏见(承 judge-quotes)。
 */
export function buildJudgePrompt(tasteDoc, item) {
  const desc = item.description !== undefined || item.itunesSummary !== undefined ? pickDescription(item) : "";
  return [
    "【品味档案(判断依据,以下为全文)】",
    String(tasteDoc ?? "").trim(),
    "",
    "【本集标题】",
    String(item?.title ?? "").trim() || "(无标题)",
    "",
    "【本集简介】",
    desc || "(本集无简介——请只凭标题判断;信息不足就判 undecided,不要猜)",
  ].join("\n");
}

/** 把一条待裁记录并入账本(同 id 只留最新一条:防膨胀 + 防同集重录,承 appendSkip 的 GLM #5)。 */
export function appendPending(state, entry) {
  state.pending_review = (state.pending_review ?? []).filter((s) => s.id !== entry.id);
  state.pending_review.push(entry);
  return state;
}

// ── 副作用区(调 GLM / 读写文件)────────────────────────────

/** 带超时调 glm-ask(挂死不得让流水线无限 pending 且无告警,承 judge-quotes 的 GLM 20260717-011[10])。 */
function glmAsk(system, input, { model = "glm-4.6", maxTokens = 300, timeoutMs = 60000 } = {}) {
  return new Promise((res, rej) => {
    const p = spawn("glm-ask", ["--model", model, "--system", system, "--max-tokens", String(maxTokens)], {
      stdio: ["pipe", "pipe", "pipe"],
    });
    let out = "", err = "", done = false;
    const timer = setTimeout(() => {
      if (done) return;
      done = true;
      p.kill("SIGKILL");
      rej(new Error(`glm-ask 超时 ${timeoutMs}ms`));
    }, timeoutMs);
    p.stdout.on("data", (d) => (out += d));
    p.stderr.on("data", (d) => (err += d));
    p.on("error", (e) => { if (!done) { done = true; clearTimeout(timer); rej(e); } });
    p.on("close", (code) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      code === 0 ? res(out.trim()) : rej(new Error(`glm-ask exit ${code}: ${err.slice(0, 200)}`));
    });
    p.stdin.end(input);
  });
}

export function loadTasteDoc() {
  return readFileSync(TASTE_FILE, "utf8");
}

/**
 * 判一集。**永不抛**——判官不可用一律落 undecided(Scenario 6:判官坏了不许静默放行,也不许静默杀)。
 * @returns {Promise<{verdict, reason, matched}>}
 */
export async function judgeOne(item, { tasteDoc, sys, model } = {}) {
  const doc = tasteDoc ?? loadTasteDoc();
  const system = sys ?? readFileSync(SYS_FILE, "utf8");
  try {
    const raw = await glmAsk(system, buildJudgePrompt(doc, item), { model });
    return parseVerdict(raw);
  } catch (e) {
    return undecided(`判官不可用:${e.message}`);
  }
}

// ── CLI:--audit 存量重判(只读、只出报告、不动站)────────────────

const AUDIT_OUT = resolve(ROOT, "data/taste-audit.json");

/** 从已完成集目录还原判官输入(title_en + 原 RSS 简介)。取不到简介的照实标注,不编造。 */
export function loadEpisodeForAudit(dir) {
  const metaPath = join(dir, "meta.json");
  if (!existsSync(metaPath)) return null;
  const meta = JSON.parse(readFileSync(metaPath, "utf8"));
  return {
    id: meta.id ?? dir.split("/").pop(),
    title: meta.title_en ?? meta.title ?? "",
    description: meta.description ?? meta.summary ?? "",
    itunesSummary: meta.itunes_summary ?? "",
    podcast: meta.podcast ?? "",
  };
}

async function mainAudit() {
  const epsDir = resolve(ROOT, "data/episodes");
  const dirs = readdirSync(epsDir).filter((d) => existsSync(join(epsDir, d, "meta.json"))).sort();
  const tasteDoc = loadTasteDoc();
  const sys = readFileSync(SYS_FILE, "utf8");
  console.log(`── C12 存量重判(--audit):${dirs.length} 集 · 只读不动站 ──`);
  const rows = [];
  for (const d of dirs) {
    const ep = loadEpisodeForAudit(join(epsDir, d));
    if (!ep) continue;
    const r = await judgeOne(ep, { tasteDoc, sys });
    rows.push({ id: ep.id, podcast: ep.podcast, title: ep.title, hasDesc: Boolean(pickDescription(ep)), ...r });
    const mark = r.verdict === "publish" ? "✅" : r.verdict === "skip" ? "❌" : "🔶";
    console.log(`  ${mark} ${r.verdict.padEnd(9)} ${ep.id.slice(0, 52).padEnd(54)} ${r.reason.slice(0, 60)}`);
  }
  const tally = rows.reduce((a, r) => ((a[r.verdict] = (a[r.verdict] ?? 0) + 1), a), {});
  writeFileSync(AUDIT_OUT, JSON.stringify({ at: new Date().toISOString(), tally, rows }, null, 2));
  console.log(`\n汇总:${JSON.stringify(tally)} → 报告落 data/taste-audit.json`);
  console.log("⚠️ 本模式不修改任何已发布内容、不触发部署(用户 2026-07-25 拍板「只出报告不动站」)。");
  const noDesc = rows.filter((r) => !r.hasDesc).length;
  if (noDesc) console.log(`⚠️ 其中 ${noDesc} 集缺简介(判官只凭标题判,可信度低)——这是存量 meta 没存 RSS 简介的历史局限,不是判官的错。`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  if (process.argv.includes("--audit")) {
    mainAudit().catch((e) => { console.error("❌ audit 失败:", e.message); process.exit(1); });
  } else {
    console.error("用法:node scripts/judge-taste.mjs --audit   (逐集判官接在编排器里,不单独 CLI 调用)");
    process.exit(2);
  }
}
