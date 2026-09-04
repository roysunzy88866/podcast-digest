// C9 · whisperX 输出 → transcript.en.json 同构转换器(纯函数,fixture 不真跑 ASR)。
// 契约:输出与 Substack aligned 官方稿同构(段{start,end,text,speaker,words[{word,start,end,score}]}),
// 后链(infer-speakers→translate→gate)零改动照走。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
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

// 模型档 [standard-change: 用户 2026-09-04 拍板「直接换快档」,drift #84]:large-v3 2.0× 实时把产量钉死在 2–3 集/班,
// 全时长统一 large-v3-turbo;快档失败回落 large-v3(别让一整班零产出)。
describe("pickWhisperxModel · drift #84 全时长统一快档 + 回落保险", () => {
  it("★★★ 任何时长都是 large-v3-turbo(不再分 medium 档:turbo 本就比 medium 快且准)", async () => {
    const { pickWhisperxModel, WHISPERX_MODEL } = await import("../scripts/fetch-source-whisperx.mjs");
    expect(WHISPERX_MODEL).toBe("large-v3-turbo");
    for (const sec of [0, 45 * 60, 100 * 60, 100 * 60 + 1, 180 * 60, undefined as any]) expect(pickWhisperxModel(sec)).toBe("large-v3-turbo");
  });
  it("★★ 源码锚:快档失败必回落 large-v3 再试一次并响亮留痕(快档名不认 ≠ 整班零产出)", async () => {
    const { WHISPERX_FALLBACK_MODEL } = await import("../scripts/fetch-source-whisperx.mjs");
    expect(WHISPERX_FALLBACK_MODEL).toBe("large-v3");
    const src = readFileSync(new URL("../scripts/fetch-source-whisperx.mjs", import.meta.url), "utf8");
    expect(src).toMatch(/const tries = model === WHISPERX_FALLBACK_MODEL \? \[model\] : \[model, WHISPERX_FALLBACK_MODEL\]/);
    expect(src).toContain('回落 " + WHISPERX_FALLBACK_MODEL + " 再试');
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

// ASR 词表 → whisperX --initial_prompt(治本:偏置 AI 专名拼写,不放松事实层闸门)。
// 起因:Jensen×LangChain 反复卡 D17——Harrison Chase/LLaMA/vLLM 等真专名被听岔、不在转写稿逐字出现被误判「编造」。
describe("asrInitialPrompt · AI 专名词表载入(治本,不放松闸门)", () => {
  it("★ 真词表非空,且含卡过 Jensen 的那批真专名(Harrison Chase/Llama/vLLM/NIM/Nemotron/Claude/OpenStack)", async () => {
    const { asrInitialPrompt } = await import("../scripts/fetch-source-whisperx.mjs");
    const p = asrInitialPrompt();
    expect(p.length).toBeGreaterThan(0);
    for (const term of ["Harrison Chase", "Llama", "vLLM", "NIM", "Nemotron", "Claude", "OpenStack"]) {
      expect(p).toContain(term);
    }
  });
  it("★ 注释行(# 开头)剔除,不进 prompt(按注释内容判,不禁正文用 #,GLM 012[3]:留 C# 等词余地)", async () => {
    const { asrInitialPrompt } = await import("../scripts/fetch-source-whisperx.mjs");
    const p = asrInitialPrompt();
    expect(p.startsWith("#")).toBe(false);
    expect(p).not.toContain("病根"); // 真词表注释行里的字样——出现即说明注释没剔干净
    expect(p).not.toContain("whisperX --initial_prompt 词表");
  });
  it("词表缺失 → 返回空串(退化为无 prompt,绝不抛错阻断转写)", async () => {
    const { asrInitialPrompt } = await import("../scripts/fetch-source-whisperx.mjs");
    expect(asrInitialPrompt("/nonexistent/asr-vocab-xyz.txt")).toBe("");
  });
  it("词表存在但全是注释/空行 → 返回空串(GLM 20260807-011[4]:fail-safe 全覆盖)", async () => {
    const { asrInitialPrompt } = await import("../scripts/fetch-source-whisperx.mjs");
    const { writeFileSync, rmSync, mkdtempSync } = await import("node:fs");
    const { tmpdir } = await import("node:os");
    const { join } = await import("node:path");
    const d = mkdtempSync(join(tmpdir(), "asrvocab-"));
    const f = join(d, "asr-vocab.txt");
    try {
      writeFileSync(f, "# only a comment\n\n  \n#另一行注释\n"); // 含 CRLF 无关的纯注释+空白
      expect(asrInitialPrompt(f)).toBe("");
    } finally {
      rmSync(d, { recursive: true, force: true });
    }
  });
  it("多行含行尾空格/回车 → 逐行清洗后无脏字符(GLM 20260807-011[3])", async () => {
    const { asrInitialPrompt } = await import("../scripts/fetch-source-whisperx.mjs");
    const { writeFileSync, rmSync, mkdtempSync } = await import("node:fs");
    const { tmpdir } = await import("node:os");
    const { join } = await import("node:path");
    const d = mkdtempSync(join(tmpdir(), "asrvocab-"));
    const f = join(d, "asr-vocab.txt");
    try {
      writeFileSync(f, "# c\r\nLlama, vLLM  \r\nHarrison Chase\r\n");
      const p = asrInitialPrompt(f);
      expect(p).not.toContain("\r");
      expect(p).toBe("Llama, vLLM Harrison Chase");
    } finally {
      rmSync(d, { recursive: true, force: true });
    }
  });
});
