#!/usr/bin/env node
// C2 步骤 ③.5 · 金句判官(二元筛选,只管「精不精彩」不管「真不真」)
// 设计依据:调研-裁判可靠性.md —— LLM 二元判定 87%,打分仅 38-58%。
//   故:点对点喂一条、只问「是/否」、不给排序不给打分不给别的候选(防位置/相对比较偏见)。
// 真伪由 gate.mjs 三联独立把关,本步不碰真伪。
//
// ⚠️ 已知局限(C2 交付物审计点名,此处照实写,不拿共识给自己背书):
//   1. **这是 glm-5.2 在判 glm-5.2 自己写的稿**(本脚本不传 --model,glm-ask 默认 glm-5.2=写稿引擎)。
//      不是「同家族」,是**同一个模型自己判自己**。需求共识里那句「家族级 self-preference 可接受」
//      是在 🔒「判官=免费档(另一个模型)」前提下给的,**不构成对同模型自判的授权**。
//      为何仍这么跑:金句「精不精彩」是本片新增角色(用户 2026-07-17 提的标准),不在 🔒 覆盖范围;
//      而免费档实测在**忠实度**判定上否决不可复现≈随机(见 judge-faithful.mjs),不适合当质量判官。
//      → 已记 tech-debt,等用户拍板是否换判官引擎/走共识修改流程。
//   2. 对冲手段只有「默认判否 + 一票否决 + 尺度校准正反例」,**压不掉同模型自判的根本偏置**。
//   3. few-shot 正例取自本集 → 在本集上证不了判官有独立判断力(循环),真检验在 C5 灌 50 集。
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = process.argv[2] || "data/episodes/2026-07-08-latent-space-modal";
const CONCURRENCY = 3; // 每条 ×VOTES 票并发,别把并发乘爆
const MIN_KEEP = 3; // 4→3 [standard-change: 用户授权 2026-07-24]:whisperX 逐字稿口语毛边拖低候选池,两集实证 16→3/15→3 被 4 地板毙穿;留 3 条的质量经人工抽检在线
const VOTES = 3; // 每条判几票
// 一票否决:3 票全「是」才留。依据=需求共识第 7 轮 🔒「判官降级为只投否决票的小角色」,
// 且用户金句标准是「宁缺毋滥/宁可错杀」。实测 20 条候选里 19 条全票一致(13×0/3、6×3/3),
// 唯一 2/3 的边缘句(「世界上最后的两种语言」)正是拎出来看不懂的那条 → 该毙。
const MAJORITY = VOTES;

const digest = JSON.parse(readFileSync(resolve(ROOT, DIR, "digest.json"), "utf8"));
const SYS = readFileSync(resolve(ROOT, "prompts/judge-quote.md"), "utf8");

// 带超时:glm-ask 挂死(等网络)不得让整条流水线无限 pending 且无告警(GLM 20260717-011 [10])
function glmAsk(system, input, maxTokens = 16, timeoutMs = 60000) {
  return new Promise((res, rej) => {
    const p = spawn("glm-ask", ["--system", system, "--max-tokens", String(maxTokens)], {
      stdio: ["pipe", "pipe", "pipe"],
    });
    let out = "", err = "", done = false;
    const timer = setTimeout(() => {
      if (done) return;
      done = true;
      p.kill("SIGKILL");
      rej(new Error(`glm-ask 超时 ${timeoutMs}ms`));
    }, timeoutMs);
    const finish = (fn, v) => { if (done) return; done = true; clearTimeout(timer); fn(v); };
    p.stdout.on("data", (d) => (out += d));
    p.stderr.on("data", (d) => (err += d));
    p.on("error", (e) => finish(rej, e));
    p.on("close", (c) => (c === 0 ? finish(res, out) : finish(rej, new Error(`glm-ask exit ${c}: ${err}`))));
    // stdin 的 EPIPE(子进程已死/被 SIGKILL)是**异步 error 事件**,没监听会成 uncaught → 炸穿全流程,
    // 与「异常降级为否」纪律相悖(GLM 20260717-012 [7])
    p.stdin.on("error", (e) => finish(rej, e));
    try {
      p.stdin.write(input);
      p.stdin.end();
    } catch (e) {
      finish(rej, e);
    }
  });
}

// 投一票。**任何异常都降级为「否」,绝不抛出杀死全流程**(GLM 20260717-011 [2]);
// 这也是「默认判否」纪律的一致延伸:判不了 = 不够格,而不是崩掉。
async function vote(zh, en) {
  const input = `这句话:「${zh}」\n(英文原话:${en})\n\n够格当本集金句吗?只答「是」或「否」。`;
  for (let attempt = 0; attempt < 3; attempt++) {
    let raw;
    try {
      raw = String(await glmAsk(SYS, input)).trim();
    } catch (e) {
      if (attempt === 2) return { yes: false, raw: `(调用失败,按否:${e.message.slice(0, 30)})` };
      continue; // 抖动 → 重试
    }
    // 解析纪律(GLM 20260717-012 [4] + 自测回归):
    //   · 松散 /是/ 会放水:「是有点意思,但不够格」含「是」却语义为否。
    //   · 但只认单字「是」又矫枉过正:模型常答「是的」,实测把留存从 6 砍到 4,好句被误杀。
    //   故:①明确否定词优先命中 ②只认**干净短肯定**(是/是的)③其余(长句/模糊)重试→默认否。
    const clean = raw.replace(/[\s。.!!,,]/g, "");
    if (/否|不是|不够|算不上|不合适|不行|谈不上/.test(clean)) return { yes: false, raw };
    if (/^是的?$/.test(clean)) return { yes: true, raw };
    // 答非所问 / 「是…但…」这类长句 → 重试;仍不行按默认否
  }
  return { yes: false, raw: "(未给出干净的是/否,按默认否)" };
}

// 多票制:同一条判 VOTES 次,≥MAJORITY 票「是」才留。
// 为什么:实测同样候选、同一判官,两次跑结果不同(6 vs 7 条)——LLM 判官有随机性,
// 单票会让边缘句忽进忽出、质量随机波动。多数票把随机性压下去(项目既有的对抗多票模式)。
async function judge(q) {
  const zh = q?.zh ?? "";
  const en = q?.en ?? q?.text ?? "";
  if (!zh && !en) return { keep: false, yes: 0, raw: "(候选缺 zh/en,按否)" };
  const votes = await Promise.all(Array.from({ length: VOTES }, () => vote(zh, en)));
  const yes = votes.filter((v) => v.yes).length;
  return { keep: yes >= MAJORITY, yes, raw: votes.map((v) => (v.yes ? "是" : "否")).join("") };
}

async function pool(items, worker, n) {
  const out = new Array(items.length);
  let idx = 0;
  await Promise.all(
    Array.from({ length: Math.min(n, items.length) }, async () => {
      while (idx < items.length) {
        const k = idx++;
        out[k] = await worker(items[k], k);
      }
    }),
  );
  return out;
}

// 幂等:候选原件存 quotes_candidates,重跑始终从**原始候选**筛,不会二次过滤越筛越少
// (GLM 20260717-011 [3])
const cands = digest.quotes_candidates || digest.quotes || [];
console.log(`判官:逐条二元复筛 ${cands.length} 条候选 × ${VOTES} 票(≥${MAJORITY} 票「是」才留,默认判否)…`);
const verdicts = await pool(cands, judge, CONCURRENCY);

const kept = [];
const report = { kept: [], dropped: [] };
cands.forEach((q, i) => {
  const v = verdicts[i];
  const row = { zh: (q.zh ?? "").slice(0, 60), timestamp: q.timestamp, votes: `${v.yes}/${VOTES}`, raw: v.raw };
  if (v.keep) { kept.push(q); report.kept.push(row); }
  else report.dropped.push(row);
});

console.log(`\n判官结果:${cands.length} 条候选 → 留 ${kept.length}, 打掉 ${report.dropped.length}`);
for (const d of report.dropped) console.log(`  ✗ [${d.timestamp}] (${d.votes}) ${d.zh}`);
console.log("");
for (const k of report.kept) console.log(`  ✓ [${k.timestamp}] (${k.votes}) ${k.zh}`);

// 报告先落盘(排障用),但 digest.json **先校验后写**:
// 不合格就别把 digest.json 改成残缺态(否则重跑从残缺再筛,候选永久丢失,GLM 20260717-011 [3])
writeFileSync(resolve(ROOT, DIR, "judge-report.json"), JSON.stringify(report, null, 2));

if (kept.length < MIN_KEEP) {
  console.error(`\n❌ 判官只留下 ${kept.length} 条(<${MIN_KEEP})。本集金句质量不足,或判官过严。`);
  console.error(`   digest.json **未改动**(保住原始候选);排障看 judge-report.json。`);
  process.exit(1);
}

digest.quotes_candidates = cands; // 留档原始候选,保证重跑幂等
digest.quotes = kept;
writeFileSync(resolve(ROOT, DIR, "digest.json"), JSON.stringify(digest, null, 2));
console.log(`\n✅ digest.json 金句已复筛为 ${kept.length} 条(原始 ${cands.length} 条候选留档 quotes_candidates)。下一步:repair-quotes → gate。`);
