// C2 机器闸门 · 金句三联校验(US-11 / tech-debt D6)
// 三联 = ① 引语逐字命中转写稿(去标点比词流)② 时间戳区间包含 ③ 说话人匹配
// fixture 全部从**真转写稿**派生,不手造,保证测的是真基准。
import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  norm,
  buildWordStream,
  parseTs,
  findSpan,
  checkQuote,
  gateEpisode,
} from "../scripts/gate.mjs";

const DIR = "data/episodes/2026-07-08-latent-space-modal";
const transcript = JSON.parse(readFileSync(`${DIR}/transcript.en.json`, "utf8"));
const meta = JSON.parse(readFileSync(`${DIR}/meta.json`, "utf8"));
const speakerMap: Record<string, string> = meta.speaker_map;

let stream: any[];
let ctx: any;

beforeAll(() => {
  stream = buildWordStream(transcript);
  ctx = { stream, speakerMap };
});

// 从词流里切一段**同一说话人**的连续词,拼成一条"真金句"
function realRun(minLen = 10): { a: number; b: number; speaker: string } {
  for (let i = 200; i < stream.length - minLen; i++) {
    const sp = stream[i].speaker;
    let j = i;
    while (j < stream.length && stream[j].speaker === sp) j++;
    if (j - i >= minLen) return { a: i, b: i + minLen, speaker: sp };
  }
  throw new Error("找不到同说话人连续词");
}

function quoteFromRun(a: number, b: number, over: Partial<any> = {}) {
  const slice = stream.slice(a, b);
  return {
    text: slice.map((w) => w.raw).join(" "),
    timestamp: (slice[0].start + slice[slice.length - 1].end) / 2, // 区间内
    speaker: speakerMap[slice[0].speaker],
    ...over,
  };
}

describe("norm / 归一化(去标点比词流)", () => {
  it("大小写、标点、多空格归一;加句号改逗号不算差异", () => {
    expect(norm("We're here, with Akshat.")).toEqual(norm("we re here with akshat"));
    expect(norm("100,000 sandboxes!")).toEqual(["100", "000", "sandboxes"]);
  });
});

describe("parseTs / 时间戳解析", () => {
  it("秒数、mm:ss、hh:mm:ss 都能解", () => {
    expect(parseTs(65)).toBe(65);
    expect(parseTs("01:05")).toBe(65);
    expect(parseTs("1:01:05")).toBe(3665);
  });
});

describe("buildWordStream", () => {
  it("展平出逐词流,带 norm/start/end/speaker", () => {
    expect(stream.length).toBeGreaterThan(9000);
    expect(stream[0]).toHaveProperty("norm");
    expect(stream[0]).toHaveProperty("start");
    expect(stream[0]).toHaveProperty("speaker");
  });
});

describe("三联校验 · 真金句应全过", () => {
  it("真转写稿里连续同说话人片段 → verbatim+timestamp+speaker 全绿", () => {
    const { a, b } = realRun(12);
    const r = checkQuote(quoteFromRun(a, b), ctx);
    expect(r.verbatim).toBe(true);
    expect(r.timestamp).toBe(true);
    expect(r.speaker).toBe(true);
    expect(r.pass).toBe(true);
  });
});

describe("三联校验 · 四类失真应被拦", () => {
  it("① 拼接:跨插话拼两段非相邻发言 → verbatim 挂(核心防线,试跑 4/12 同类)", () => {
    // 找 X(spk) / X+1(异spk) / X+2(spk) 结构,拼 X 尾 + X+2 头,跳过中间插话
    let spliced: any = null;
    for (let i = 300; i < stream.length - 40; i++) {
      const sp = stream[i].speaker;
      // i..i+5 同 sp
      if (!stream.slice(i, i + 6).every((w) => w.speaker === sp)) continue;
      // 之后出现异说话人
      let k = i + 6;
      while (k < stream.length && stream[k].speaker === sp) k++;
      if (k >= stream.length) continue;
      const other = stream[k].speaker;
      // 异说话人之后再回到 sp
      let m = k;
      while (m < stream.length && stream[m].speaker === other) m++;
      if (m >= stream.length - 6 || stream[m].speaker !== sp) continue;
      const head = stream.slice(i, i + 6).map((w) => w.raw).join(" ");
      const tail = stream.slice(m, m + 6).map((w) => w.raw).join(" ");
      spliced = {
        text: head + " " + tail, // 中间跨过了 other 的插话
        timestamp: stream[i].start,
        speaker: speakerMap[sp],
      };
      break;
    }
    expect(spliced, "应能构造拼接样本").not.toBeNull();
    const r = checkQuote(spliced, ctx);
    expect(r.verbatim).toBe(false);
    expect(r.pass).toBe(false);
  });

  it("② 时间戳错:真引语但时间戳标到别处 → timestamp 挂", () => {
    const { a, b } = realRun(12);
    const r = checkQuote(quoteFromRun(a, b, { timestamp: stream[a].start + 600 }), ctx);
    expect(r.verbatim).toBe(true);
    expect(r.timestamp).toBe(false);
    expect(r.pass).toBe(false);
  });

  it("③ 说话人错:真引语但张冠李戴 → speaker 挂", () => {
    const { a, b, speaker } = realRun(12);
    // 换一个和真说话人不同的名字
    const wrong = Object.values(speakerMap).find((n) => n !== speakerMap[speaker])!;
    const r = checkQuote(quoteFromRun(a, b, { speaker: wrong }), ctx);
    expect(r.verbatim).toBe(true);
    expect(r.speaker).toBe(false);
    expect(r.pass).toBe(false);
  });

  it("④ 编造:原文根本没有的句子 → verbatim 挂", () => {
    const r = checkQuote(
      {
        text: "Kubernetes is just not designed for this fabricated sentence that never appears",
        timestamp: 40,
        speaker: "Akshat Bubna",
      },
      ctx,
    );
    expect(r.verbatim).toBe(false);
    expect(r.pass).toBe(false);
  });
});

describe("防假绿 · 空金句不许算通过(C2 交付物审计:原测试是同义反复,不保护被测代码)", () => {
  // ⚠️ 教训:原版在测试里把 gateEpisode 的判定式**重抄一遍**再断言,等于测自己写的表达式——
  // 把 gate.mjs 的修复回退掉,测试照样全绿。真测试必须**调用被测函数本身**。
  it("gateEpisode 对 0 条金句必须 allPass=false(真调 gateEpisode,回退修复即挂)", () => {
    const dir = mkdtempSync(join(tmpdir(), "gate-empty-"));
    writeFileSync(join(dir, "transcript.en.json"), JSON.stringify(transcript));
    writeFileSync(join(dir, "meta.json"), JSON.stringify(meta));
    writeFileSync(join(dir, "digest.json"), JSON.stringify({ tldr: "x", digest_md: "y", quotes: [] }));
    const g = gateEpisode(dir);
    expect(g.total).toBe(0);
    expect(g.allPass).toBe(false); // 没金句 = 没兑现 US-11,不许算通过
    rmSync(dir, { recursive: true, force: true });
  });

  it("gateEpisode 对真金句仍 allPass=true(证明上一条不是靠一律判否蒙混)", () => {
    const { a, b } = realRun(12);
    const q = quoteFromRun(a, b);
    const dir = mkdtempSync(join(tmpdir(), "gate-ok-"));
    writeFileSync(join(dir, "transcript.en.json"), JSON.stringify(transcript));
    writeFileSync(join(dir, "meta.json"), JSON.stringify(meta));
    writeFileSync(
      join(dir, "digest.json"),
      JSON.stringify({ tldr: "x", digest_md: "y", quotes: [{ en: q.text, zh: "译文", timestamp: q.timestamp, speaker: q.speaker }] }),
    );
    const g = gateEpisode(dir);
    expect(g.total).toBe(1);
    expect(g.allPass).toBe(true);
    rmSync(dir, { recursive: true, force: true });
  });

  it("gateEpisode 对编造金句必须 allPass=false", () => {
    const dir = mkdtempSync(join(tmpdir(), "gate-fake-"));
    writeFileSync(join(dir, "transcript.en.json"), JSON.stringify(transcript));
    writeFileSync(join(dir, "meta.json"), JSON.stringify(meta));
    writeFileSync(
      join(dir, "digest.json"),
      JSON.stringify({
        tldr: "x",
        digest_md: "y",
        quotes: [{ en: "We have always known internally that Kubernetes was a total mistake", zh: "编造", timestamp: "12:00", speaker: "Akshat Bubna" }],
      }),
    );
    const g = gateEpisode(dir);
    expect(g.allPass).toBe(false);
    rmSync(dir, { recursive: true, force: true });
  });
});

describe("三联校验 · 跨说话人拼接 80/20 边界(GLM 20260717-008 [4] 硬化)", () => {
  const miniMap = { S1: "Alice", S2: "Bob" };
  const seg = (words: any[], speaker: string) => ({
    start: words[0][1],
    end: words[words.length - 1][2],
    text: words.map((w) => w[0]).join(" "),
    words: words.map(([word, start, end]: any) => ({ word, start, end, speaker })),
  });

  it("主说话人占比达标(9/11≈0.82>0.8)但混入他人连续 2 词 → 说话人挂(抓 80/20 拼接)", () => {
    const A = Array.from({ length: 9 }, (_, k) => [`w${k}`, k, k + 1]);
    const B = [["x9", 9, 10], ["x10", 10, 11]];
    const s = buildWordStream([seg(A, "S1"), seg(B, "S2")]);
    const q = { en: [...A, ...B].map((w) => w[0]).join(" "), timestamp: 0.5, speaker: "Alice" };
    const r = checkQuote(q, { stream: s, speakerMap: miniMap });
    expect(r.verbatim).toBe(true); // 两段相邻,逐字连续
    expect(r.speaker).toBe(false); // 但跨说话人连续 2 词 → 挂
    expect(r.pass).toBe(false);
  });

  it("孤立单个 diarization 误标词(连续 1 词)→ 容忍,不误杀真金句", () => {
    const words = Array.from({ length: 9 }, (_, k) => [`w${k}`, k, k + 1]);
    const s = buildWordStream([
      {
        start: 0,
        end: 9,
        text: words.map((w) => w[0]).join(" "),
        words: words.map(([word, start, end]: any, k: number) => ({
          word,
          start,
          end,
          speaker: k === 4 ? "S2" : "S1",
        })),
      },
    ]);
    const q = { en: words.map((w) => w[0]).join(" "), timestamp: 4, speaker: "Alice" };
    const r = checkQuote(q, { stream: s, speakerMap: miniMap });
    expect(r.verbatim).toBe(true);
    expect(r.speaker).toBe(true); // run=1 容忍
    expect(r.pass).toBe(true);
  });
});

// normName · 人名归一化(D37 修复,标准变更·用户 2026-07-19 授权)
import { normName } from "../scripts/gate.mjs";
describe("normName · 折叠音标+连字符,修 D37 名字误报", () => {
  it("音标+连字符 vs 去音标+空格 = 同一人", () => {
    expect(normName("Rafa Gómez-Bombarelli")).toBe(normName("Rafa Gomez Bombarelli"));
    expect(normName("Rafa Gómez-Bombarelli")).toBe("rafa gomez bombarelli");
  });
  it("不同名不会被误并", () => {
    expect(normName("Rafa")).not.toBe(normName("Rafael"));
    expect(normName("Andy Beam")).not.toBe(normName("Andy Bean"));
  });
  it("大小写/多余空白归一", () => {
    expect(normName("  ANDY   beam ")).toBe("andy beam");
  });
});
