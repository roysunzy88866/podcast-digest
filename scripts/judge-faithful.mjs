#!/usr/bin/env node
// C2 · 防失真闸门 **第 2 级:GLM 忠实度判官**(需求共识 ④ 🔒 第 7 轮,C2 首版漏做,本轮补)
//
// 为什么需要它(C2 交付物审计实测的两个洞,第 1 级机器闸门**结构上**堵不住):
//   ① **中文侧零校验**:机器闸门只比对英文逐字。把 zh 换成与原意相反的编造译文 → 三联全绿。
//      而中文正是读者读的那一侧。
//   ② **断章取义**:掐掉紧邻在前的否定词,余下片段仍是同一说话人的逐字连续子串 → 三联全绿,
//      但意思反转。逐字匹配天然抓不住「真话被截歪」。
//
// 设计恪守 🔒(需求共识 ④ 第 2 级 + 第 7 轮):
//   · **只做二元判定**(是/否),不打分 —— 调研:二元 87%,打分仅 38-58%
//   · **点对点喂**一条,不给排序、不给别的候选(防位置/相对比较偏见)
//   · **只提醒、不自动毙**(🔒 用户 2026-07-17 拍板,基于本脚本实测证据):
//     免费档判官**两次跑否决的是不同的 3 条**(5 条好金句随机毙 3 条),否决不可复现≈随机。
//     除了共识已知的 TNR<25%(抓不出失真),它**误杀率同样高**。当硬否决用会毁稿。
//     故降级为**提醒层**:照跑、结果落 faithful-report.json 供人看,**绝不改 digest.json**。
//     这也回归项目自定的防失真哲学:「事后可查 ＞ 事前拦截」——真防线是第 1 级机器闸门 + 完整存档。
//     ⚠️ 诚实边界:中文侧因此**仍无机器硬拦**(见 tech-debt),本层只是一双多出来的、会看走眼的眼睛。
//   · **同语言判定**(🔒 需求共识 ④ 第 2 级原文:「这句被**中文全译**支撑吗?是/否 —— 点对点喂全译片段」)
//     ⚠️ 首版我建成「中文 vs 英文」比对,是**错的规格**,实测两个后果:
//        ① 扔掉了共识特意设计的同语言优势(GLM 中文强项对口);
//        ② 与 drift-log #3 直接打架 —— 中文按规矩纠了转写错(如转写稿误作 "except lengths",
//           中文写「接受长度」),判官拿中文跟**错的英文**比,就判「不忠实」→ 误杀。
//     正确做法:拿**精华里的中文**去跟**中文全译**(同一时间窗)比,问「被全译支撑吗」。
//   · **引擎 = 免费档**(🔒 第 7 轮「判官用免费档」);免费档 1 QPS + 常 529,故串行 + 退避重试。
//     ⚠️ 免费档不可达时**不许静默换成 GLM-5.2 充数**(那是 🔒 的写稿引擎,换=自己判自己),
//        而是按三态报 ⛔ 并 exit 2,由人决定。
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { buildWordStream, norm, findAllSpans, parseTs } from "./gate.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = process.argv[2] || "data/episodes/2026-07-08-latent-space-modal";
const JUDGE_MODEL = process.env.JUDGE_MODEL || "glm-4.7-flash"; // 🔒 判官=免费档
const CONTEXT_SEGS = 3; // 断章取义判定给前后各几段上下文
const MAX_RETRY = 5;

const transcript = JSON.parse(readFileSync(resolve(ROOT, DIR, "transcript.en.json"), "utf8"));
const digest = JSON.parse(readFileSync(resolve(ROOT, DIR, "digest.json"), "utf8"));
// 中文全译=同语言判定的事实基准(🔒 需求共识:「点对点喂全译片段」)
const translation = JSON.parse(readFileSync(resolve(ROOT, DIR, "translation.zh.json"), "utf8"));
const stream = buildWordStream(transcript);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function glmAsk(system, input, maxTokens = 16, timeoutMs = 90000) {
  return new Promise((res, rej) => {
    const p = spawn("glm-ask", ["--model", JUDGE_MODEL, "--system", system, "--max-tokens", String(maxTokens)], {
      stdio: ["pipe", "pipe", "pipe"],
    });
    let out = "", err = "", done = false;
    const timer = setTimeout(() => {
      if (done) return;
      done = true;
      p.kill("SIGKILL");
      rej(new Error(`判官超时 ${timeoutMs}ms`));
    }, timeoutMs);
    const fin = (fn, v) => { if (done) return; done = true; clearTimeout(timer); fn(v); };
    p.stdout.on("data", (d) => (out += d));
    p.stderr.on("data", (d) => (err += d));
    p.on("error", (e) => fin(rej, e));
    p.on("close", (c) => (c === 0 ? fin(res, out) : fin(rej, new Error(`exit ${c}: ${err.slice(0, 120)}`))));
    p.stdin.on("error", (e) => fin(rej, e));
    try { p.stdin.write(input); p.stdin.end(); } catch (e) { fin(rej, e); }
  });
}

// 免费档 1 QPS + 常 529 → 串行 + 指数退避
let unreachable = 0;
async function ask(system, input) {
  for (let i = 0; i < MAX_RETRY; i++) {
    try {
      const raw = String(await glmAsk(system, input)).trim();
      if (/529|overloaded|访问量过大/.test(raw)) throw new Error("529 过载");
      return raw;
    } catch (e) {
      if (i === MAX_RETRY - 1) { unreachable++; return null; }
      await sleep(1500 * Math.pow(2, i)); // 1.5s,3s,6s,12s
    }
  }
  return null;
}

// 「否」优先(「不是/不忠实」含「是」字);只认干净短答,其余当判不出
function parseYesNo(raw) {
  if (raw == null) return null;
  const c = raw.replace(/[\s。.!!,,]/g, "");
  if (/^(否|不是|不忠实|不忠)/.test(c)) return false;
  if (/^是的?$/.test(c)) return true;
  if (/不忠实|不是|不符|歪曲|反转/.test(c)) return false;
  if (/^忠实/.test(c)) return true;
  return null; // 判不出
}

// 🔒 同语言判定:拿精华里的中文,跟**中文全译**(真相派生层)比,问「被全译支撑吗」。
// 不拿中文跟英文比 —— 那样中文按 drift #3 纠正的转写错会被误判成「不忠实」。
const SYS_FAITHFUL = `你是**忠实度判官**,只做二元判定。
给你一段**中文全译**(从访谈原文逐字翻译来的,是事实基准),和一句**精华里引用的中文**。
判断:**这句精华中文,是否被这段全译支撑?**
不被支撑 = 说了全译里根本没有的信息 / 删掉了关键的否定词或前提,导致意思反转 / 歪曲原意 / 借题发挥。
以下情况**算被支撑,不要判否**:
· 措辞不同但意思一致(全译生硬、精华通顺);
· 把明显的转写错别字改对(如全译写「模型/Modo」实为品牌 Modal、「除了长度」实为「接受长度」)——这是允许的纠错;
· 精华只截取了全译的一部分,但截取部分意思没被歪曲。
**只输出一个字:是(被支撑) 或 否(不被支撑)。不要解释。**`;

const SYS_OUTOFCONTEXT = `你是**断章取义判官**,只做二元判定。
给你一段访谈原文上下文,以及从中**截取**出来的一个片段(逐字截取,没改字)。
判断:**这样截取,是否让原意被反转或严重误导?**
典型的断章取义 = 截取时掐掉了紧邻的否定词/转折/前提条件,使片段单独读起来意思与说话人本意相反或严重走样。
片段只是缺少背景、需要读者自己补常识 —— **不算**断章取义(那是另一回事)。
**只输出一个字:是(被断章取义了) 或 否(截取没有歪曲原意)。不要解释。**`;

/** 定位金句在转写稿里的段区间(逐字命中,第 1 级闸门已保证命中) */
function segRange(q) {
  const spans = findAllSpans(norm(q.en), stream);
  if (!spans.length) return null;
  const ts = parseTs(q.timestamp);
  const pick = spans
    .map((s) => ({ s, start: stream[s.i].start }))
    .sort((a, b) => Math.abs(a.start - (ts || a.start)) - Math.abs(b.start - (ts || b.start)))[0].s;
  return { lo: stream[pick.i].seg, hi: stream[pick.j].seg };
}

/** 同语言基准:该金句所在时间窗的**中文全译**片段(🔒「点对点喂全译片段」) */
function zhTranslationFor(q, pad = 0) {
  const r = segRange(q);
  if (!r) return null;
  const lo = Math.max(0, r.lo - pad);
  const hi = Math.min(translation.length - 1, r.hi + pad);
  return translation.slice(lo, hi + 1).map((s) => s.zh).join("");
}

/** 断章取义判定用:英文原文上下文(前后各 CONTEXT_SEGS 段) */
function contextFor(q) {
  const r = segRange(q);
  if (!r) return null;
  const lo = Math.max(0, r.lo - CONTEXT_SEGS);
  const hi = Math.min(transcript.length - 1, r.hi + CONTEXT_SEGS);
  return transcript.slice(lo, hi + 1).map((s) => s.text.trim()).join(" ");
}

// 提醒层:只产报告,不动 digest.json
const report = {
  model: JUDGE_MODEL,
  role: "提醒层(不自动删金句)——用户 2026-07-17 拍板:免费档判官否决不可复现≈随机,当硬否决会毁稿",
  flagged: [],
  clean: [],
  undecided: [],
  unreachable: 0,
};

for (const [i, q] of (digest.quotes || []).entries()) {
  const label = `#${i + 1} [${q.timestamp}]`;
  // ① 同语言忠实度:精华中文 vs 中文全译片段(🔒)。给 1 段余量,防金句正好压在段边界
  const zhBase = zhTranslationFor(q, 1);
  const a = zhBase
    ? parseYesNo(
        await ask(
          SYS_FAITHFUL,
          `中文全译(事实基准):\n${zhBase}\n\n精华里引用的中文:\n${q.zh}\n\n这句精华中文被全译支撑吗?只答 是 或 否。`,
        ),
      )
    : null;
  // ② 断章取义
  const ctx = contextFor(q);
  const b = ctx
    ? parseYesNo(await ask(SYS_OUTOFCONTEXT, `原文上下文:\n${ctx}\n\n被截取的片段:\n${q.en}\n\n这样截取是否让原意被反转或严重误导?只答 是 或 否。`))
    : null;

  const flagFaithful = a === false;
  const flagContext = b === true;
  if (flagFaithful || flagContext) {
    const why = [flagFaithful ? "中文可能不被全译支撑" : null, flagContext ? "可能断章取义" : null]
      .filter(Boolean)
      .join(" + ");
    console.log(`  ⚠️ ${label} 判官提醒:${why}(**不自动删**,请人看)`);
    report.flagged.push({ i: i + 1, timestamp: q.timestamp, why, zh: q.zh.slice(0, 60) });
  } else {
    console.log(`  ✓ ${label} 判官无异议(忠实=${a ?? "判不出"} / 断章=${b ?? "判不出"})`);
    report.clean.push({ i: i + 1, timestamp: q.timestamp, faithful: a, out_of_context: b });
  }
  if (a === null && b === null) report.undecided.push({ i: i + 1, timestamp: q.timestamp });
}

report.unreachable = unreachable;
writeFileSync(resolve(ROOT, DIR, "faithful-report.json"), JSON.stringify(report, null, 2));

// 三态诚实:免费档全程不可达 → ⛔ 没跑,不静默放行也不换模型充数
if (unreachable && !report.clean.length && !report.flagged.length) {
  console.error(`\n⛔ 判官(${JUDGE_MODEL},免费档)全程不可达(529/超时 ×${unreachable})。`);
  console.error(`   **没有换 GLM-5.2 充数**(那是写稿引擎,换=自己判自己,违反 🔒 第 7 轮)。`);
  console.error(`   第 2 级判官本次=⛔ 没跑。digest.json 本就不由本层改动。`);
  process.exit(2);
}

console.log(
  `\n📋 第 2 级判官(${JUDGE_MODEL} · **提醒层,未改动 digest.json**):` +
    `${report.flagged.length} 条被提醒 / ${report.clean.length} 条无异议 / 判不出 ${report.undecided.length}` +
    (unreachable ? ` / ⚠️ ${unreachable} 次调用不可达` : ""),
);
if (report.flagged.length) {
  console.log(`   → 被提醒的金句**没有被删**,请人看 faithful-report.json 自行判断。`);
  console.log(`   → 提醒仅供参考:实测本判官否决不可复现(两次跑毙的是不同的条目),会看走眼。`);
}
