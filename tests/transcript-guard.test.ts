import { describe, it, expect } from "vitest";
import { checkTranscriptBelongs, durationTolerance } from "../scripts/transcript-guard.mjs";

// drift #59 回归钉:抓错别集的转写稿必须被拦住。
// 真实数据来自 2026-08-17 实测:
//   08-05 code-review-bot 官方 1454s / 自己的转写 1452s(该过)
//   playbook              官方 5446s / 自己的转写 5444s(该过)
//   08-10 claude-code     官方 2588s,却被喂了 code-review-bot 的 1452s 稿(该拦 —— 当初就是这条漏了)

describe("归属闸门 · 该放行的", () => {
  it("★★★ 自己的稿:差几秒照过(08-05 实测 1454 vs 1452)", () => {
    expect(checkTranscriptBelongs(1452, 1454).ok).toBe(true);
  });
  it("★★★ 长集自己的稿也过(playbook 实测 5446 vs 5444)", () => {
    expect(checkTranscriptBelongs(5444, 5446).ok).toBe(true);
  });
  it("★★ 片头片尾差异在容差内(90 分钟集差 100 秒)", () => {
    expect(checkTranscriptBelongs(5400 - 100, 5400).ok).toBe(true);
  });
});

describe("归属闸门 · 该拦下的(drift #59 血案本身)", () => {
  it("★★★ 08-10 集拿到 08-05 的稿 → 必须拦(官方 2588s vs 稿 1452s)", () => {
    const r = checkTranscriptBelongs(1452, 2588);
    expect(r.ok).toBe(false);
    expect(Math.round(r.drift!)).toBe(1136);
  });
  it("★★★ 那 4 集共用一份稿的每一对错配都拦得住", () => {
    // 被污染的稿固定是 1452s;这几集官方时长各不相同
    for (const realDuration of [2588, 3600, 5446]) {
      expect(checkTranscriptBelongs(1452, realDuration).ok).toBe(false);
    }
  });
  it("★★ 短集拿到长稿也拦(反向错配)", () => {
    expect(checkTranscriptBelongs(5444, 1454).ok).toBe(false);
  });
});

describe("归属闸门 · 边界与降级", () => {
  it("★★★ 缺时长时标 skipped(不假装通过,由调用方打提醒)", () => {
    expect(checkTranscriptBelongs(1452, 0)).toMatchObject({ ok: true, skipped: true });
    expect(checkTranscriptBelongs(0, 2588)).toMatchObject({ ok: true, skipped: true });
  });
  it("★★ 容差 = 120s 与 5% 取大者", () => {
    expect(durationTolerance(600)).toBe(120); // 10 分钟集 → 取 120s 下限
    expect(durationTolerance(5000)).toBe(250); // 83 分钟集 → 取 5%
  });
  it("★★ 恰好踩在容差线上算过,超一点就拦", () => {
    expect(checkTranscriptBelongs(3600 - 180, 3600).ok).toBe(true); // 3600*5%=180
    expect(checkTranscriptBelongs(3600 - 181, 3600).ok).toBe(false);
  });
});
