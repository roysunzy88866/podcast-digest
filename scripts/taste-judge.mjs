#!/usr/bin/env node
// C34 · 选题品味判官(播客线)· 2026-08-21 用户拍板「拿到标题就判一次」。
//
// 病根实证:题材筛选此前只对 doac 一个源生效、且靠关键词表。The Cognitive Revolution 主打 AI
// 但也聊别的,一集「222 纳米杀菌灯」就这么畅通无阻地做完上站 —— 烧了 192 分钟转写 + 全链,
// 产出一篇用户明确不要的内容(品味档案里「AI+生物/科研应用」「与 AI 无关的工程」本就是 ❌)。
// 规则写在文档里,代码却没读它。
//
// 修法:在**开始处理之前**用标题+时长过一次判官(依据 = 需求共创/内容品味档案.md,活文档)。
// 判一条的成本是一次小模型调用,比事后返工便宜几个数量级;判掉一条还省下 2-4 小时转写。
//
// 与演讲巡航的判官(patrol-talks.mjs)同口径但独立实现:那个跑在 Mac mini 上、正在服役,
// 不动它以免波及;两边未来可收敛成一份(收敛前改 prompt 记得两处同步)。
import { readFileSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const TASTE_FILE = join(ROOT, "需求共创/内容品味档案.md");
// 判官档位 [standard-change: 用户授权 2026-08-22「用你现在用的 GLM 档位」]:原免费档 glm-4.7-flash
// 在 00:30 班被 1305「访问量过大」整班顶回(4/4 失败,fail-open 放行=把关裸奔)→ 改用写稿同档付费 glm-4.6
// (与 translate 同模型;判标题一集几百 token,月费角钱级;过载不再靠运气)。
export const TASTE_JUDGE_MODEL = process.env.TASTE_JUDGE_MODEL || "glm-4.6";
const TASTE_MAX = 20000; // 活文档失控膨胀会撑爆上下文(同 patrol 口径)
// W3(2026-09-03 用户拍板「内容来源与审核整理」):判官此前拿不到发布日 → 86 天前的 Fable 5 测评畅通无阻。
// 时效性题材(模型发布/评测/要闻/榜单/活动)超过 N 天判过时;常青内容(访谈/方法论/公司故事)不看日期。env 只认非负整数。
export const JUDGE_FRESHNESS_DAYS = /^\d+$/.test(String(process.env.JUDGE_FRESHNESS_DAYS ?? "").trim()) ? Number(process.env.JUDGE_FRESHNESS_DAYS) : 14;

// ── 纯逻辑(可单测)──────────────────────────────────────

/** GLM 输出 → {verdict, reason};认不出返回 null(交由调用方按「判不出」处理)。 */
export function parseVerdict(raw) {
  const text = String(raw ?? "").trim();
  const shape = (o) =>
    (o?.verdict === "对味" || o?.verdict === "不对味") && typeof o?.reason === "string"
      ? { verdict: o.verdict, reason: o.reason }
      : null;
  // 先整体 parse(reason 含花括号时正则会漏,GLM 038[3]),再退回抠单层 JSON(模型爱加前后解释)
  try {
    const whole = shape(JSON.parse(text));
    if (whole) return whole;
  } catch { /* fallthrough */ }
  const m = text.match(/\{[^{}]*"verdict"[^{}]*\}/);
  if (!m) return null;
  try {
    return shape(JSON.parse(m[0]));
  } catch {
    return null;
  }
}

/** 只有明确「对味」才放行。判不出(null)按放行处理 —— 见 shouldProcess 的失败策略说明。 */
export function judgeAllows(verdict) {
  return verdict?.verdict === "对味";
}

/** 该不该处理这一集。
 *  ⚠️ 失败策略刻意不对称:
 *   · 判官**明确说不对味** → 拒绝(这正是本功能的意义:少发 ≪ 发离题)。
 *   · 判官**调不通/输出认不出**(网络挂、配额尽、返回坏 JSON)→ **放行**并告警。
 *     理由:那是基础设施故障,不是内容判断;fail-closed 会让判官一挂就全站零产出,
 *     用「宁可漏勿错」的名义制造更大的事故。偏题内容仍有事后人工点名下架兜底。 */
export function shouldProcess(verdict, judgeFailed = false) {
  if (judgeFailed) return { ok: true, why: "判官调不通 → 放行(基础设施故障不该阻断内容)" };
  if (!verdict) return { ok: true, why: "判官输出认不出 → 放行(同上)" };
  return judgeAllows(verdict)
    ? { ok: true, why: verdict.reason }
    : { ok: false, why: verdict.reason };
}

/** 发布日距今几天(按日历日,两头都取日期段;算不出 → null)。 */
export function ageDays(pubDateISO, todayISO) {
  const p = Date.parse(`${String(pubDateISO ?? "").slice(0, 10)}T00:00:00.000Z`);
  const t = Date.parse(`${String(todayISO ?? "").slice(0, 10)}T00:00:00.000Z`);
  if (!Number.isFinite(p) || !Number.isFinite(t)) return null;
  return Math.max(0, Math.round((t - p) / 86400e3));
}

/** W2(2026-09-03):判官留痕条目 —— 放行与拒绝都记(此前只记拒绝,过审的集查无对证;Fable 5 那集就没有任何判官记录)。
 *  result = judgeEpisodeTaste 的返回 {ok, why, verdict}。判官调不通/认不出时 verdict 为 null → 标 judgeFailed,便于事后分清「判官放的」还是「故障放的」。 */
export function judgeLogEntry({ id, source, item, todayISO, path, result, model = TASTE_JUDGE_MODEL, now = new Date() }) {
  const v = result?.verdict?.verdict ?? null;
  return {
    ts: now.toISOString(),
    id,
    source: source?.key ?? null,
    title: String(item?.title ?? ""),
    pubDate: item?.pubDateISO ?? null,
    ageDays: ageDays(item?.pubDateISO, todayISO),
    path, // "new" 新集 | "topup" 补历史
    verdict: v ?? (result?.ok ? "放行(判官调不通/认不出)" : "不对味"),
    reason: String(result?.why ?? ""),
    judgeFailed: v == null,
    model,
  };
}

/** 喂给判官的输入(标题+时长+源名+发布日)。抽出来是为了可测:改字段不会静默丢信息。 */
export function judgeInput(item, source, { todayISO } = {}) {
  const age = ageDays(item?.pubDateISO, todayISO);
  const pub = /^\d{4}-\d{2}-\d{2}/.test(String(item?.pubDateISO ?? "")) ? String(item.pubDateISO).slice(0, 10) : "";
  return [
    `播客:${source?.name ?? source?.key ?? "未知"}`,
    `标题:${item?.title ?? ""}`,
    `时长:${Number(item?.durationSec) > 0 ? Math.round(item.durationSec / 60) + " 分钟" : "未知"}`,
    pub && age != null ? `发布日:${pub}(距今 ${age} 天)` : "发布日:未知",
  ].join("\n");
}

// ── 副作用层 ────────────────────────────────────────────

function tasteDoc() {
  if (!existsSync(TASTE_FILE)) return null;
  let t = readFileSync(TASTE_FILE, "utf8");
  if (t.length > TASTE_MAX) {
    console.error(`   ⚠️ 品味档案超 ${TASTE_MAX} 字符(${t.length}),截断喂判官 —— 该瘦身了`);
    t = t.slice(0, TASTE_MAX);
  }
  return t;
}

/** 判一集。返回 {ok, why, verdict}。绝不抛 —— 判官出任何问题都退化为放行(见 shouldProcess)。 */
export function judgeEpisodeTaste(item, source, opts = {}) {
  const taste = tasteDoc();
  if (!taste) return { ...shouldProcess(null, true), verdict: null };
  const system = [
    "你是「英文播客中文精华知识库」的选题品味判官。下面是品味档案(唯一判断依据,活文档):",
    "────────────────────────",
    taste,
    "────────────────────────",
    '只输出一行 JSON:{"verdict":"对味"|"不对味","reason":"一句话理由"}。',
    "只看题材是否落在档案的收录范围内 —— 不评价内容质量、不猜测未公开信息。",
    `时效规则:输入含「发布日(距今 N 天)」。若题材属时效性内容(模型发布/评测/版本对比/本周要闻/榜单/活动预告)且距今超过 ${JUDGE_FRESHNESS_DAYS} 天(档案若写了别的天数,以此处为准)→ 判「不对味」,reason 以「过时:」开头。人物访谈、方法论、公司/创始人故事、产业格局等常青内容不受发布日影响。`,
    '拿不准时判「不对味」,reason 以「拿不准:」开头(少发 ≪ 发离题;漏掉的可人工点名补)。',
  ].join("\n");
  // timeout 必设(GLM 038[6]):glm-ask 网络挂起时没有它整条流水线同步卡死;
  // 超时后 status=null ≠ 0 → 自然落进「调不通 → 放行」分支,符合设计。
  const r = spawnSync("python3", [join(ROOT, "tools/glm-ask"), "--model", TASTE_JUDGE_MODEL,
    "--system", system, "--max-tokens", "200", judgeInput(item, source, opts)],
    { cwd: ROOT, encoding: "utf8", maxBuffer: 8 * 1024 * 1024, timeout: 90_000 });
  if (r.status !== 0) {
    console.error(`   ⚠️ 品味判官调不通(exit ${r.status}):${(r.stderr || "").slice(-160)}`);
    return { ...shouldProcess(null, true), verdict: null };
  }
  const verdict = parseVerdict(r.stdout);
  return { ...shouldProcess(verdict, false), verdict };
}
