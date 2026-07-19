#!/usr/bin/env node
// C2 机器闸门 · 金句三联校验(US-11 / tech-debt D6)
//
// 唯一不会说谎的一层:纯字符串/时间/说话人比对,零 LLM、零幻觉。
// 三联(全过才算合格金句):
//   ① 引语逐字命中转写稿  —— 金句英文词流是转写稿词流的**连续**子串(去标点比词流)
//                            连续性正是抓「拼接」的关键:跨插话拼接的句子不连续 → 挂
//   ② 时间戳区间包含      —— 金句标注时间戳落在命中片段的 [首词start, 末词end] 内
//   ③ 说话人匹配          —— 命中片段主说话人映射名 == 金句标注说话人(抓张冠李戴)
//
// 基准 = data/episodes/<id>/transcript.en.json(官方稿,真相锚)。
// 注:闸门保的是「命中转写稿」,不是「命中原话」——官方稿本身会错(drift #3),
//     那层靠英文原稿永久存档 + 事后可查兜,闸门不宣称零失真。
import { readFileSync, realpathSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

/** 去标点、转小写、按词流拆(「加句号/改逗号」不算差异,同试跑判定口径) */
export function norm(text) {
  return String(text)
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // 折叠音标(é→e ó→o):否则 ó 被当非 a-z 替成空格,"gómez"→"g mez" 断词
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

/**
 * 人名归一化比较键(标准变更 · 用户 2026-07-19 授权):折叠音标 + 连字符/标点统一为空格 + 小写。
 * 修 D37 误报:"Rafa Gomez-Bombarelli"(导读/GLM 去音标)对不上 "Rafa Gómez-Bombarelli"(speaker_map)=同一人。
 * 不会误并不同名(Rafa≠Rafael);仅消除音标/连字符/大小写造成的假不匹配。
 */
export function normName(s) {
  return String(s ?? "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/** 转写稿 → 逐词流:每个归一化 token 携带 start/end/speaker(逐词级,最精确) */
export function buildWordStream(transcript) {
  const stream = [];
  for (let si = 0; si < transcript.length; si++) {
    const seg = transcript[si];
    const words = Array.isArray(seg.words) && seg.words.length ? seg.words : null;
    if (words) {
      for (const w of words) {
        const toks = norm(w.word);
        for (const t of toks) {
          stream.push({
            norm: t,
            raw: String(w.word).trim(),
            start: w.start,
            end: w.end,
            speaker: w.speaker ?? seg.speaker ?? null,
            seg: si,
          });
        }
      }
    } else {
      // 兜底:某段无逐词数据 → 按段均分时间(本项目当前数据不会走到这)
      const toks = norm(seg.text);
      const dur = (seg.end - seg.start) / Math.max(toks.length, 1);
      toks.forEach((t, k) =>
        stream.push({
          norm: t,
          raw: t,
          start: seg.start + k * dur,
          end: seg.start + (k + 1) * dur,
          speaker: seg.speaker ?? null,
          seg: si,
        }),
      );
    }
  }
  return stream;
}

/** 时间戳解析:秒数 / "mm:ss" / "hh:mm:ss" */
export function parseTs(ts) {
  if (typeof ts === "number") return ts;
  const s = String(ts).trim();
  if (/^\d+(\.\d+)?$/.test(s)) return Number(s);
  const p = s.split(":").map(Number);
  if (p.some((n) => Number.isNaN(n))) return NaN;
  if (p.length === 2) return p[0] * 60 + p[1];
  if (p.length === 3) return p[0] * 3600 + p[1] * 60 + p[2];
  return NaN;
}

/** 在词流里找 qNorm 的**所有连续**命中(可能重复出现) */
export function findAllSpans(qNorm, stream) {
  const spans = [];
  const n = stream.length;
  const m = qNorm.length;
  if (m === 0 || m > n) return spans;
  for (let i = 0; i + m <= n; i++) {
    let ok = true;
    for (let j = 0; j < m; j++) {
      if (stream[i + j].norm !== qNorm[j]) {
        ok = false;
        break;
      }
    }
    if (ok) spans.push({ i, j: i + m - 1 });
  }
  return spans;
}

/** 在词流里找 qNorm 的**连续**命中(返回首个);找不到 = 拼接/编造 */
export function findSpan(qNorm, stream) {
  return findAllSpans(qNorm, stream)[0] || null;
}

/** 一段命中片段的主说话人(标签, 占比) */
export function spanSpeaker(stream, i, j) {
  const c = new Map();
  for (let k = i; k <= j; k++) c.set(stream[k].speaker, (c.get(stream[k].speaker) || 0) + 1);
  let label = null,
    n = -1;
  for (const [kk, v] of c) if (v > n) (label = kk), (n = v);
  return { label, frac: n / (j - i + 1) };
}

function mode(arr) {
  const c = new Map();
  for (const x of arr) c.set(x, (c.get(x) || 0) + 1);
  let best = null,
    bestN = -1;
  for (const [k, v] of c) if (v > bestN) (best = k), (bestN = v);
  return { label: best, frac: bestN / arr.length };
}

/**
 * 三联校验一条金句。
 * quote = { en(英文逐字,过闸门用), timestamp(秒或mm:ss), speaker(真名) }
 *         (兼容 text 字段名;数字用 digest.json 的 en/zh/timestamp/speaker)
 * opts  = { stream, speakerMap, tsGrace(边界宽限秒,默认1.5), speakerFrac(主说话人占比阈值,默认0.8) }
 */
export function checkQuote(quote, { stream, speakerMap, tsGrace = 1.5, speakerFrac = 0.8 }) {
  // 容错:单条金句为 null/缺字段时不许抛异常炸穿 gateEpisode/gate-all(GLM 20260717-012 [6]);
  // fail-closed —— 判不了就是不过。
  const enText = quote?.en ?? quote?.text ?? "";
  const r = {
    quote: enText,
    verbatim: false,
    timestamp: false,
    speaker: false,
    pass: false,
    detail: {},
  };
  const qNorm = norm(enText);
  if (!qNorm.length) {
    r.detail.reason = "金句为空/缺 en 字段(判不了 → 不过)";
    return r;
  }
  const span = findSpan(qNorm, stream);
  if (!span) {
    r.detail.reason = "逐字未命中转写稿连续片段(疑拼接/编造)";
    return r;
  }
  r.verbatim = true;
  const words = stream.slice(span.i, span.j + 1);
  const start = words[0].start;
  const end = words[words.length - 1].end;
  r.detail.span = { start: +start.toFixed(2), end: +end.toFixed(2) };

  // ② 时间戳区间包含
  const ts = parseTs(quote.timestamp);
  r.timestamp = Number.isFinite(ts) && ts >= start - tsGrace && ts <= end + tsGrace;
  if (!r.timestamp) r.detail.timestamp = { got: ts, expect: [r.detail.span.start, r.detail.span.end] };

  // ③ 说话人匹配(主说话人映射名;跨说话人 → 挂)
  //   frac 占比 + 「非主说话人连续 ≥2 词即判跨说话人拼接」双重(后者抓 80/20 边界,
  //   容忍单词 diarization 噪声;依 GLM 20260717-008 [4])
  const labels = words.map((w) => w.speaker);
  const { label, frac } = mode(labels);
  const majName = speakerMap[label] || label;
  let run = 0,
    crossRun = 0;
  for (const l of labels) {
    if (l !== label) {
      run++;
      if (run > crossRun) crossRun = run;
    } else run = 0;
  }
  r.speaker = frac >= speakerFrac && crossRun < 2 && normName(majName) === normName(quote.speaker);
  if (!r.speaker)
    r.detail.speaker = { got: quote.speaker, expect: majName, frac: +frac.toFixed(2), crossRun };

  r.pass = r.verbatim && r.timestamp && r.speaker;
  return r;
}

/** 校验一集:读 transcript.en.json + meta.json + digest.json 的 quotes[] */
export function gateEpisode(dir) {
  const transcript = JSON.parse(readFileSync(resolve(dir, "transcript.en.json"), "utf8"));
  const meta = JSON.parse(readFileSync(resolve(dir, "meta.json"), "utf8"));
  const digest = JSON.parse(readFileSync(resolve(dir, "digest.json"), "utf8"));
  const stream = buildWordStream(transcript);
  const ctx = { stream, speakerMap: meta.speaker_map };
  const quotes = digest.quotes || [];
  const results = quotes.map((q) => checkQuote(q, ctx));
  const passed = results.filter((r) => r.pass).length;
  // 防假绿:0 条金句 ≠ 通过(passed===results.length 在空数组时恒真 → 无金句的稿子会「全过」)。
  // 依 GLM 20260717-011 [8] 顺藤发现。金句是 US-11 的兑现物,一条都没有就是没兑现。
  const allPass = results.length > 0 && passed === results.length;
  return { total: results.length, passed, allPass, results };
}

// ── CLI:node scripts/gate.mjs <episodeDir> ── 任一金句不过则 exit 1 ──
// 主入口判断用 realpath 对比(路径含中文时 import.meta.url 会 percent-encode,不能字符串拼 file://)
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
    console.error("用法: node scripts/gate.mjs <data/episodes/xxx 目录>");
    process.exit(2);
  }
  const { total, passed, allPass, results } = gateEpisode(dir);
  const T = ["①逐字", "②时间戳", "③说话人"];
  results.forEach((r, i) => {
    const marks = [r.verbatim, r.timestamp, r.speaker].map((x, k) => `${T[k]}${x ? "✅" : "❌"}`);
    console.log(`${r.pass ? "✅" : "❌"} 金句#${i + 1} ${marks.join(" ")}`);
    if (!r.pass) console.log(`   ${JSON.stringify(r.detail, null, 0)}\n   「${r.quote}」`);
  });
  console.log(`\n金句 ${passed}/${total} 过三联闸门`);
  if (!allPass) {
    console.error("❌ 机器闸门未过:存在失真金句,禁止发布");
    process.exit(1);
  }
  console.log("✅ 机器闸门全过");
}
