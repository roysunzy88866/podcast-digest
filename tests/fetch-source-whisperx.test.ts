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
