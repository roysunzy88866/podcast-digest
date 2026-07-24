// C9 · whisperX 输出 → transcript.en.json 同构转换器(纯函数,fixture 不真跑 ASR)。
// 契约:输出与 Substack aligned 官方稿同构(段{start,end,text,speaker,words[{word,start,end,score}]}),
// 后链(infer-speakers→translate→gate)零改动照走。
import { describe, it, expect } from "vitest";
import { convertWhisperx } from "../scripts/fetch-source-whisperx.mjs";

// 真实 whisperX --diarize 输出的最小代表(字段名照官方:segments[].words[].word/start/end/score/speaker)
const WX = {
  segments: [
    {
      start: 0.031,
      end: 2.5,
      text: " Welcome to the show, Travis.",
      speaker: "SPEAKER_00",
      words: [
        { word: "Welcome", start: 0.031, end: 0.35, score: 0.9, speaker: "SPEAKER_00" },
        { word: "to", start: 0.4, end: 0.5, score: 0.99, speaker: "SPEAKER_00" },
        { word: "the", start: 0.55, end: 0.65, score: 0.98, speaker: "SPEAKER_00" },
        { word: "show,", start: 0.7, end: 1.0, score: 0.97, speaker: "SPEAKER_00" },
        { word: "Travis.", start: 1.1, end: 1.6, score: 0.95, speaker: "SPEAKER_00" },
      ],
    },
    {
      start: 2.8,
      end: 4.0,
      text: " Great to be here.",
      speaker: "SPEAKER_01",
      // whisperX 对纯数字/符号词可能不给 start/end(官方已知行为)
      words: [{ word: "Great" }, { word: "to", start: 3.0, end: 3.1, score: 0.9 }, { word: "be" }, { word: "here.", start: 3.5, end: 3.9, score: 0.8 }],
    },
  ],
};

describe("convertWhisperx · whisperX JSON → 官方稿同构", () => {
  it("★ 段结构同构:start/end/text/speaker/words 齐全,text 去首空格", () => {
    const t = convertWhisperx(WX);
    expect(t.length).toBe(2);
    expect(Object.keys(t[0]).sort()).toEqual(["end", "speaker", "start", "text", "words"]);
    expect(t[0].text).toBe("Welcome to the show, Travis.");
    expect(t[0].speaker).toBe("SPEAKER_00");
    expect(t[0].words.length).toBe(5);
    expect(t[0].words[0]).toEqual({ word: "Welcome", start: 0.031, end: 0.35, score: 0.9 });
  });
  it("★ 词缺 start/end(whisperX 数字词已知行为)→ 保留词文本,时间字段省略不编造", () => {
    const t = convertWhisperx(WX);
    const great = t[1].words[0];
    expect(great.word).toBe("Great");
    expect("start" in great).toBe(false); // 不硬造时间戳(防失真地基:宁缺勿编)
  });
  it("★ 段级说话人保留(gate 的 w.speaker ?? seg.speaker 回退依赖它)", () => {
    const t = convertWhisperx(WX);
    expect(t[1].speaker).toBe("SPEAKER_01");
  });
  it("空输入/无 segments → 抛错(fail-closed,不产空稿冒充转写)", () => {
    expect(() => convertWhisperx({})).toThrow();
    expect(() => convertWhisperx({ segments: [] })).toThrow();
  });
});

// C9 接线 · 模型档(用户 2026-07-24 拍板):large-v3 默认(质量优先),超长集(>100 分钟)降 medium 保时长余量。
// 锚 P1 实测(run 30075152246):large-v3 0.59x 实时 → 100 分钟集 ≈2.8h,再长贴 6h job 上限太近。
describe("pickWhisperxModel · 按时长选模型档(C9)", () => {
  it("★ 默认 large-v3;>100 分钟降 medium", async () => {
    const { pickWhisperxModel } = await import("../scripts/fetch-source-whisperx.mjs");
    expect(pickWhisperxModel(45 * 60)).toBe("large-v3");
    expect(pickWhisperxModel(100 * 60)).toBe("large-v3"); // 边界:恰好 100 分钟仍 large-v3
    expect(pickWhisperxModel(100 * 60 + 1)).toBe("medium");
  });
  it("时长未知(0/缺失)→ large-v3(播客单集不至于撞 6h 上限,质量优先)", async () => {
    const { pickWhisperxModel } = await import("../scripts/fetch-source-whisperx.mjs");
    expect(pickWhisperxModel(0)).toBe("large-v3");
    expect(pickWhisperxModel(undefined)).toBe("large-v3");
  });
});

describe("transcriptDuration · 末段 end 缺不产 undefined(GLM 20260724-004[2])", () => {
  it("★ 取各段 end/start 最大数值;end 缺回退 start;全缺=0", async () => {
    const { transcriptDuration } = await import("../scripts/fetch-source-whisperx.mjs");
    expect(transcriptDuration([{ start: 0, end: 10 }, { start: 11, end: undefined }])).toBe(11);
    expect(transcriptDuration([{ start: 0, end: 10 }, { start: 11, end: 12.5 }])).toBe(12.5);
    expect(transcriptDuration([{ text: "x" }])).toBe(0);
  });
});
