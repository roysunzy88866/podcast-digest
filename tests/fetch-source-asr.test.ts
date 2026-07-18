// D22 · ASR 进料口:AssemblyAI → transcript.en.json 转换 + fetchAsr 的真业务测试。
// 纪律:只调被测函数、不重抄逻辑;fetchAsr 注入 mock 不真烧额度。
import { describe, it, expect } from "vitest";
import { asrToTranscript, defaultSpeakerMap, speakerEvidence, fetchAsr } from "../scripts/fetch-source-asr.mjs";

// AssemblyAI 结果形状(ms 时间戳、A/B 说话人、confidence)
const AAI = {
  words: [{ text: "x" }],
  utterances: [
    { speaker: "A", start: 4300, end: 9100, text: "We're here with Akshat.", words: [
      { text: "We're", start: 4300, end: 4419, confidence: 0.8, speaker: "A" },
      { text: "here", start: 4459, end: 4659, confidence: 0.9, speaker: "A" },
    ] },
    { speaker: "B", start: 10600, end: 11400, text: "Thank you.", words: [
      { text: "Thank", start: 10600, end: 10800, confidence: 0.95, speaker: "B" },
    ] },
    { speaker: "A", start: 11400, end: 14100, text: "Congrats.", words: [{ text: "Congrats", start: 11400, end: 14100, confidence: 0.88, speaker: "A" }] },
  ],
};

describe("defaultSpeakerMap · A/B/C → SPEAKER_xx(按字母序)", () => {
  it("★ A→SPEAKER_01、B→SPEAKER_02", () => {
    expect(defaultSpeakerMap(AAI)).toEqual({ A: "SPEAKER_01", B: "SPEAKER_02" });
  });
});

describe("asrToTranscript · AssemblyAI → 流水线 transcript.en.json 格式", () => {
  const t = asrToTranscript(AAI);
  it("★ 段数=utterances 数;时间戳 ms→秒", () => {
    expect(t.length).toBe(3);
    expect(t[0].start).toBeCloseTo(4.3);
    expect(t[0].end).toBeCloseTo(9.1);
  });
  it("★ 逐词:word 带前导空格、秒时间戳、score、SPEAKER_xx(与官方稿同形)", () => {
    expect(t[0].speaker).toBe("SPEAKER_01");
    expect(t[0].text).toBe("We're here with Akshat.");
    expect(t[0].words[0]).toMatchObject({ word: " We're", speaker: "SPEAKER_01", score: 0.8 });
    expect(t[0].words[0].start).toBeCloseTo(4.3);
  });
  it("★ 说话人映射一致(B→SPEAKER_02,段与词都是)", () => {
    expect(t[1].speaker).toBe("SPEAKER_02");
    expect(t[1].words[0].speaker).toBe("SPEAKER_02");
  });
  it("★ 每段齐全 gate 吃的字段(start/end/text/speaker + words[{word,start,end,speaker}])", () => {
    for (const seg of t) {
      for (const k of ["start", "end", "text", "speaker", "words"]) expect(seg).toHaveProperty(k);
      for (const w of seg.words) for (const k of ["word", "start", "end", "speaker"]) expect(w).toHaveProperty(k);
    }
  });
  it("★ 传自定义 speakerMap 覆盖默认", () => {
    const t2 = asrToTranscript(AAI, { A: "SPEAKER_09" });
    expect(t2[0].speaker).toBe("SPEAKER_09");
  });
});

describe("speakerEvidence · 发言量 + 开场,供用户点头分真名", () => {
  it("★ 每说话人段数 + 开场首句", () => {
    const ev = speakerEvidence(AAI);
    expect(ev.SPEAKER_01.segs).toBe(2); // A 两段
    expect(ev.SPEAKER_02.segs).toBe(1);
    expect(ev.SPEAKER_01.firstText).toContain("Akshat");
  });
});

describe("fetchAsr · fail-closed + 注入 fetchImpl(不真烧额度)", () => {
  it("★ 缺 key → 抛错(fail-closed)", async () => {
    await expect(fetchAsr("http://x", {})).rejects.toThrow(/ASSEMBLYAI_API_KEY/);
  });
  it("★ 缺 url → 抛错", async () => {
    await expect(fetchAsr("", { key: "k" })).rejects.toThrow(/audio_url/);
  });
  it("★ 提交 → 轮询 → completed", async () => {
    let calls = 0;
    const fake = async (_url: string, opts: any) => {
      calls++;
      if (opts?.method === "POST") return { ok: true, json: async () => ({ id: "t1", status: "queued" }) };
      return { ok: true, json: async () => ({ status: calls > 2 ? "completed" : "processing", utterances: [] }) };
    };
    const r = await fetchAsr("http://x", { key: "k", fetchImpl: fake as any, pollMs: 1 });
    expect(r.status).toBe("completed");
  });
  it("★ 转写 error → 抛错(fail-closed,不静默)", async () => {
    const fake = async (_url: string, opts: any) =>
      opts?.method === "POST" ? { ok: true, json: async () => ({ id: "t1" }) } : { ok: true, json: async () => ({ status: "error", error: "bad audio" }) };
    await expect(fetchAsr("http://x", { key: "k", fetchImpl: fake as any, pollMs: 1 })).rejects.toThrow(/bad audio/);
  });
  it("★ 非 2xx(401/500)→ 清晰 fail-closed 错误,不炸成不可读异常(依 GLM 20260718-011)", async () => {
    const fake = async () => ({ ok: false, status: 401, json: async () => ({}) });
    await expect(fetchAsr("http://x", { key: "k", fetchImpl: fake as any, pollMs: 1 })).rejects.toThrow(/HTTP 401/);
  });
});
