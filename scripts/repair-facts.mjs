#!/usr/bin/env node
// C3 · 事实层定点重写回路(闸门拦住 → 把失败原因喂回去 → **只重写那一段**)
//
// ── 为什么要有这个(本轮实测教训,不是设计洁癖)──
// 原来的修法是「改 prompt → 整篇重摇 → 祈祷全过」。实测**不收敛**:集2 连摇三轮,
// 每轮堵掉上一类、又冒出**新的**一两条(移花接木 → Ghodsi 补姓氏 → 2024 推年份),
// 每轮烧约 2 元,而且**把用户验收过的文本整篇换掉**(集1 一次重摇丢了 Modal 的定义、
// 推理拐点、唯一的观点交锋)。整篇重摇 = 老虎机。
//
// 定点重写 = 只把「闸门指出的那一段」交给模型改,其余**一个字不动**。
// 这也是 C7 上云后无人值守时**唯一能 work 的架构**:那时没人盯着重摇。
//
// ── 三条不变量(每条都是本项目栽过的坑)──
//  ① **先校验后写**:补丁必须先在内存里过闸门,过了才落盘。
//     (C2 教训:condense 先写后校验 → 坏稿冲掉好稿、非幂等。GLM 20260717-011)
//  ② **不许因为怕被拦就少讲**:补丁**字数不得显著缩水**,否则模型会学会「删掉就不会被拦」。
//     (本轮实测:prompt 里写了「换个写法不是删掉」,GLM 照样删 —— 光靠 prompt 劝不住,得机器卡。)
//  ③ **整篇复检**:补丁不能只看「这条失败没了」,还要看**没冒出新的失败**。
//     (本轮实测:每轮重摇都冒新编造 —— 局部修同理会。)
import { readFileSync, writeFileSync, realpathSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { gateFacts } from "./gate-facts.mjs";

const MAX_ROUNDS = 4; // 每段最多重写几次(超了就交人,不无限烧钱)
const MIN_KEEP_RATIO = 0.75; // 补丁不得短于原段的 75%(不变量②)

function glmAsk(system, input, maxTokens = 1200, timeoutMs = 120000) {
  return new Promise((res, rej) => {
    const p = spawn("glm-ask", ["--system", system, "--max-tokens", String(maxTokens)], { stdio: ["pipe", "pipe", "pipe"] });
    let out = "", err = "", done = false;
    const timer = setTimeout(() => { if (done) return; done = true; p.kill("SIGKILL"); rej(new Error(`glm-ask 超时 ${timeoutMs}ms`)); }, timeoutMs);
    const finish = (fn, v) => { if (done) return; done = true; clearTimeout(timer); fn(v); };
    p.stdout.on("data", (d) => (out += d));
    p.stderr.on("data", (d) => (err += d));
    p.on("error", (e) => finish(rej, e));
    p.on("close", (c) => (c === 0 ? finish(res, out) : finish(rej, new Error(`glm-ask exit ${c}: ${err}`))));
    p.stdin.on("error", (e) => finish(rej, e));
    try { p.stdin.write(input); p.stdin.end(); } catch (e) { finish(rej, e); }
  });
}

/** 把正文切成段(空行分隔);返回 [{text, start, end}] 便于原地替换 */
export function splitParagraphs(md) {
  const out = [];
  let i = 0;
  for (const part of String(md).split(/\n{2,}/)) {
    const start = String(md).indexOf(part, i);
    out.push({ text: part, start, end: start + part.length });
    i = start + part.length;
  }
  return out;
}

/** 一条失败落在哪一段里(靠闸门给的 ctx / raw / name 定位) */
export function locateFailure(f, paras) {
  const needle = f.ctx?.trim() || f.raw || f.name || "";
  if (!needle) return -1;
  // ctx 是闸门截的上下文片段,可能跨段;取它最有辨识度的一截去找
  for (const probe of [needle, f.raw, f.name].filter(Boolean)) {
    const i = paras.findIndex((p) => p.text.includes(String(probe)));
    if (i >= 0) return i;
  }
  return -1;
}

/** 从转写稿捞该段附近的原文证据(给模型看「原文到底说了什么」,而不是让它凭空猜) */
function evidenceFor(para, transcript, translation) {
  const tss = [...para.text.matchAll(/(\d{1,2}):(\d{2})/g)].map((m) => Number(m[1]) * 60 + Number(m[2]));
  if (!tss.length) return "(该段没有内联时间戳,无法定位原文;请仅依据下方规则处理)";
  const lo = Math.min(...tss) - 20, hi = Math.max(...tss) + 20;
  const lines = [];
  for (let i = 0; i < transcript.length; i++) {
    const s = transcript[i];
    if (s.end < lo || s.start > hi) continue;
    const zh = translation?.[i]?.zh ?? "";
    lines.push(`[${Math.floor(s.start / 60)}:${String(Math.floor(s.start % 60)).padStart(2, "0")}] ${(s.text || "").trim()}${zh ? `  /  ${zh}` : ""}`);
  }
  return lines.slice(0, 60).join("\n") || "(该时间段在转写稿里没捞到内容)";
}

const SYSTEM = `你是中文播客精华的**定点校对员**。给你一段正文、闸门指出的问题、以及这一段对应的原文(英文转写稿+中文全译)。

你的任务:**只修问题指出的地方,别的一个字不许动。**

## 红线
1. **不许编造**:正文里的专名和数字必须在原文里真出现过。原文没有的:
   - 是模型的世界知识(如某公司的全称、某人的姓氏、某个年份)→ **移进 \`> 【背景】\` 引用块**,或**换成原文真说过的说法**。
   - 例:原文只说「Ali」→ 正文不许写「Ali Ghodsi」;要么写「Ali」,要么写 \`> 【背景】Ali 指 Databricks CEO Ali Ghodsi\`。
   - 例:原文只说「a year before ChatGPT came out」→ 不许推算成「2021-2022 年」;就写「在 ChatGPT 发布前一年」。
2. **🚫 但绝不许因为怕被拦就删内容**。这一条和红线 1 同等重要。
   - 该讲的事照讲,只是**换个有出处的说法**。
   - **删掉整句/整段 = 不合格**,比留着问题更糟。你的输出长度应与原段相当。
   - 一句话:要你**别编**,不是要你**别说**。
3. 时间戳 \`[mm:ss 说话人]\`:说话人必须是那一刻**真正在说话的人**(见下方原文)。标错了就改对,别删掉时间戳。

## 输出
**只输出修好的这一段 markdown 正文**,不要解释、不要前后缀、不要代码围栏。`;

/**
 * 收不收这个补丁 —— **三条不变量的判据都在这里**(抽成纯函数才测得到;
 * 埋在 GLM 调用里的逻辑没法做变异验证,那正是 C2「防假绿单测自己就是假绿」的翻版)。
 *
 * @param paraText 原段落
 * @param patch    模型给的补丁
 * @param targeted 本次要修的失败项(闸门给的)
 * @param afterFailures 打上补丁后**整篇**重跑闸门的结果
 * @param beforeFailures 打补丁前整篇的失败
 */
export function judgePatch({ paraText, patch, targeted, afterFailures, beforeFailures, minKeepRatio = MIN_KEEP_RATIO }) {
  const key = (f) => String(f.raw ?? f.name ?? f.reason);
  // ⚠️ 这条 guard 我删过一次、又被打脸加回来 —— 教训比代码值钱:
  // 变异验证说「补丁为空 → 拒收」是死代码(空串必然也缩水、被下面先拦),我就按「简到极致」删了。
  // 但 GLM 20260717-018[2] 实测 `judgePatch({patch: null})` → **TypeError 直接炸穿**。
  // ⇒ **「变异验证说它是死代码」只意味着「对我测试用的那些输入是死的」,不等于对所有输入都死。**
  // fail-closed:判不了就是不过,不许把异常抛上去。
  if (typeof patch !== "string" || !patch.trim()) return { accept: false, reason: "补丁为空或非字符串 → 拒收(判不了 = 不过)" };

  // 不变量②b:长度卡点拦不住**等长垃圾**(GLM 018[3] 实测:`'A'.repeat(n)` 长度达标 → 被收下,
  // 而闸门对「没有专名也没有数字的乱码」无话可说 → 正文被静默换成垃圾还报全过)。
  // 真实触发路径不是模型发癫,是 **glm-ask 输出被 maxTokens 截断** → 半句话、但长度够。
  if (!/[。!?」』)】]\s*$/.test(patch)) return { accept: false, reason: "补丁结尾不是完整句(疑被截断)→ 拒收" };
  if (!/[一-龥]/.test(patch)) return { accept: false, reason: "补丁不含中文 → 拒收(疑乱码/截断)" };

  // 不变量②:不许靠删内容过关
  if (patch.length < paraText.length * minKeepRatio)
    return { accept: false, reason: `补丁缩水 ${paraText.length}→${patch.length} 字(<${Math.round(minKeepRatio * 100)}%)→ 拒收(不许靠删内容过关)` };
  // 原问题必须真被修掉
  const stillThere = afterFailures.filter((nf) => targeted.some((f) => key(f) === key(nf)));
  if (stillThere.length) return { accept: false, reason: `补丁没修掉原问题(${stillThere.map(key).join(",")})→ 回滚` };
  // 不变量③:不许修好旧的、带出新的
  const brandNew = afterFailures.filter((nf) => !beforeFailures.some((f) => key(f) === key(nf)));
  if (brandNew.length) return { accept: false, reason: `补丁修好了旧的、却带出新问题(${brandNew.map(key).join(",")})→ 回滚` };
  return { accept: true, reason: `已修:${targeted.map(key).join(", ")}(${paraText.length}→${patch.length} 字)` };
}

/** 一集的事实层定点修复 */
export async function repairFacts(dir, { aliasesPath, log = () => {} } = {}) {
  const dPath = resolve(dir, "digest.json");
  const digest = JSON.parse(readFileSync(dPath, "utf8"));
  const transcript = JSON.parse(readFileSync(resolve(dir, "transcript.en.json"), "utf8"));
  let translation = null;
  try { translation = JSON.parse(readFileSync(resolve(dir, "translation.zh.json"), "utf8")); } catch { /* 可选 */ }

  const opts = aliasesPath ? { aliasesPath } : {};
  let md = String(digest.digest_md ?? "");
  const before = gateFacts(dir, opts);
  // 早退也必须返回**完整**结构:漏了 pass/origLen/finalLen → CLI 打印 "undefined → undefined"
  // 且 `if (!r.pass)` 判成失败 → **「本来就全过」被报成 exit 1**。自测时当场撞上。
  if (before.pass) {
    log("事实层本来就全过,无需修复");
    return { changed: false, fixed: [], remaining: [], pass: true, origLen: md.length, finalLen: md.length };
  }

  log(`事实层 ${before.failures.length} 条未过 → 定点重写(整篇不动,只改命中的段)`);

  const fixed = [];
  const writeTmp = (text) => writeFileSync(dPath, JSON.stringify({ ...digest, digest_md: text }));
  const orig = md;

  for (let round = 1; round <= MAX_ROUNDS; round++) {
    // 每轮都**重新**跑闸门:上一轮的补丁可能带出新问题(不变量③)
    writeTmp(md);
    const r = gateFacts(dir, opts);
    if (r.pass) { log(`✅ 第 ${round - 1} 轮后事实层全过`); break; }

    const paras = splitParagraphs(md);
    // 按段聚合失败:同一段里的多条一次性修掉,少调几次 GLM
    const byPara = new Map();
    for (const f of r.failures) {
      const i = locateFailure(f, paras);
      if (i < 0) continue;
      if (!byPara.has(i)) byPara.set(i, []);
      byPara.get(i).push(f);
    }
    if (!byPara.size) { log(`⚠️ ${r.failures.length} 条失败定位不到具体段落 → 交人处理,不硬猜`); break; }

    let anyPatched = false;
    // ⚠️ **必须按段号从大到小改**(GLM 20260717-018[1],判 save —— 它逮到一个我会交出去的真 bug)。
    // `paras` 的 start/end 偏移是在本轮开头按当时的 md 算的。一旦某段被补丁改了长度,
    // **排在它后面的段的偏移就全部失效** → 用旧偏移去 splice 会把正文切坏。
    // 实测(两段都有问题时):
    //   原文 "第一段有问题 2024。\n\n第二段也有问题 9999。\n\n第三段没事。"
    //   先修段0 → 再用旧偏移修段1 → "第一段修好。\n\n第二段也有问第二段修好。事。"  ← 正文被切烂
    // 集2 只有一段有问题,所以这个 bug 没咬到我 —— 正是那种「跑通了就以为对了」的坑。
    // 倒序改:改后面的段不影响前面段的偏移,偏移永远有效。
    for (const [idx, fs] of [...byPara.entries()].sort((a, b) => b[0] - a[0])) {
      const para = paras[idx];
      const problems = fs.map((f) => `- [${f.kind}] ${f.reason}`).join("\n");
      const ev = evidenceFor(para, transcript, translation);
      const input = `## 闸门指出的问题\n${problems}\n\n## 这一段的原文(英文转写稿 / 中文全译)\n${ev}\n\n## 待修的正文段落\n${para.text}`;

      let patch;
      try { patch = (await glmAsk(SYSTEM, input)).trim().replace(/^```[a-z]*\n?|\n?```$/g, "").trim(); }
      catch (e) { log(`  ✗ 段 ${idx} 调 GLM 失败:${e.message}`); continue; }

      // 不变量①:先校验后写 —— 补丁先在**临时落盘**上过闸门,判定通过才认;不通过立刻回滚。
      // (C2 教训:condense 先写后校验 → 坏稿冲掉好稿、非幂等。GLM 20260717-011)
      const candidate = md.slice(0, para.start) + patch + md.slice(para.end);
      writeTmp(candidate);
      const after = gateFacts(dir, opts);
      const verdict = judgePatch({ paraText: para.text, patch, targeted: fs, afterFailures: after.failures, beforeFailures: r.failures });

      if (!verdict.accept) { log(`  ✗ 段 ${idx} ${verdict.reason}`); writeTmp(md); continue; }

      md = candidate;
      anyPatched = true;
      fixed.push({ para: idx, problems: fs.map((f) => f.raw ?? f.name), before: para.text.length, after: patch.length });
      log(`  ✓ 段 ${idx} ${verdict.reason}`);
    }
    if (!anyPatched) { log(`⚠️ 第 ${round} 轮一处也没修成 → 停,交人处理(不无限重试烧钱)`); break; }
  }

  writeTmp(md);
  const final = gateFacts(dir, opts);
  if (!final.pass) writeFileSync(dPath, JSON.stringify({ ...digest, digest_md: md })); // 保留已修的部分,失败项交人
  return { changed: md !== orig, fixed, remaining: final.failures, pass: final.pass, origLen: orig.length, finalLen: md.length };
}

const isMain = (() => { try { return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url); } catch { return false; } })();
if (isMain) {
  const dir = process.argv[2];
  if (!dir) { console.error("用法: node scripts/repair-facts.mjs <data/episodes/xxx 目录>"); process.exit(2); }
  const r = await repairFacts(dir, { log: (s) => console.log(s) });
  console.log(`\n正文 ${r.origLen} → ${r.finalLen} 字;修好 ${r.fixed.length} 段`);
  if (!r.pass) {
    console.error(`\n❌ 仍有 ${r.remaining.length} 条未过,定点重写解决不了 → 交人:`);
    for (const f of r.remaining) console.error(`   [${f.kind}] ${f.reason}\n      ${f.ctx ?? f.raw ?? f.name ?? ""}`);
    process.exit(1);
  }
  console.log("✅ 事实层全过");
}
