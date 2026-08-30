// 不知道嘉宾名时显示「嘉宾」而非 "Unknown"(用户 2026-08-31)。
import { describe, it, expect } from "vitest";
import { displaySpeaker } from "../scripts/render.mjs";

describe("displaySpeaker · 占位说话人 → 嘉宾", () => {
  it("★★★ Unknown / unknown / SPEAKER_00 / spk_1 等占位 → 嘉宾", () => {
    for (const s of ["Unknown", "unknown", "SPEAKER_00", "speaker_12", "SPK-3", "unknown-speaker"]) {
      expect(displaySpeaker(s)).toBe("嘉宾");
    }
  });
  it("★★★ 真名原样返回(不误伤)", () => {
    for (const s of ["Lenny", "Elizabeth Stone", "Ben Horowitz", "黄仁勋"]) {
      expect(displaySpeaker(s)).toBe(s);
    }
  });
  it("★★★ 空串/空白 → 空串(正文裸时间戳不塞占位)", () => {
    expect(displaySpeaker("")).toBe("");
    expect(displaySpeaker("   ")).toBe("");
    expect(displaySpeaker(null as any)).toBe("");
    expect(displaySpeaker(undefined as any)).toBe("");
  });
  it("★★ 含数字的真名不被当占位误杀(如 3Blue1Brown、GPT-4 团队里的人名保守处理)", () => {
    expect(displaySpeaker("Speaker Deck")).toBe("Speaker Deck"); // 不是 SPEAKER_nn 形状
  });
});

describe("displaySpeaker · 空格分隔变体也算占位(GLM 003[1])", () => {
  it("★★ 'SPEAKER 01' / 'unknown speaker' / 'spk 3'(空格)→ 嘉宾", () => {
    for (const s of ["SPEAKER 01", "unknown speaker", "spk 3", "Unknown Speaker"]) {
      expect(displaySpeaker(s)).toBe("嘉宾");
    }
  });
});
