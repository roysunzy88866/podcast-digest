// C7b 说话人推断 · 纯逻辑真业务测试(drift #23)。重点守 grounding 防编造:GLM 给的名字必须在转写稿/标题真出现。
import { describe, it, expect } from "vitest";
import { candidateNamesFromTitle, validateMap, openingText } from "../scripts/infer-speakers.mjs";

describe("candidateNamesFromTitle", () => {
  it("latent.space 惯例「主题 — Name1 & Name2, Org」抽出人名、去机构", () => {
    const t = "🔬 The Lab of the Future Should Feel Like a Data Center — Andy Beam & Rafa Gómez-Bombarelli, Lila Sciences";
    const names = candidateNamesFromTitle(t);
    expect(names).toContain("Andy Beam");
    expect(names).toContain("Rafa Gómez-Bombarelli");
    expect(names).not.toContain("Lila Sciences"); // 机构后缀被丢
  });
  it("无破折号的句子标题不把整句当人名(≤4 词过滤)", () => {
    expect(candidateNamesFromTitle("Why AI Infrastructure must evolve")).toEqual([]);
  });
  it("空标题 → 空", () => {
    expect(candidateNamesFromTitle("")).toEqual([]);
  });
});

describe("validateMap · grounding 防编造(核心)", () => {
  const transcriptText = "We're here with Akshat Bubna, founder of Modal, together with Vibhu.";
  const title = "Modal interview — Akshat Bubna";
  it("名字在转写稿里真出现 → 保留", () => {
    const { valid } = validateMap({ SPEAKER_02: "Akshat Bubna", SPEAKER_00: "Vibhu" }, { transcriptText, title });
    expect(valid).toEqual({ SPEAKER_02: "Akshat Bubna", SPEAKER_00: "Vibhu" });
  });
  it("名字查无出处(GLM 编造)→ 丢弃", () => {
    const { valid, rejected } = validateMap({ SPEAKER_01: "Elon Musk" }, { transcriptText, title });
    expect(valid).toEqual({});
    expect(rejected[0].label).toBe("SPEAKER_01");
    expect(rejected[0].why).toMatch(/查无出处/);
  });
  it("整名不连续但各词都命中(中间名/顺序容错)→ 保留", () => {
    const { valid } = validateMap({ SPEAKER_02: "Akshat Bubna" }, { transcriptText: "Akshat, aka Bubna, said", title: "" });
    expect(valid.SPEAKER_02).toBe("Akshat Bubna");
  });
  it("空名丢弃", () => {
    const { valid, rejected } = validateMap({ SPEAKER_00: "" }, { transcriptText, title });
    expect(valid).toEqual({});
    expect(rejected[0].why).toMatch(/空名/);
  });
});

describe("openingText", () => {
  it("取前 N 段拼 SPEAKER+en,截断控长", () => {
    const tr = Array.from({ length: 60 }, (_, i) => ({ speaker: `SPEAKER_0${i % 2}`, en: `line ${i}` }));
    const out = openingText(tr, { segs: 10 });
    expect(out.split("\n")).toHaveLength(10);
    expect(out).toContain("[SPEAKER_00] line 0");
    expect(out).not.toContain("line 20");
  });
});
