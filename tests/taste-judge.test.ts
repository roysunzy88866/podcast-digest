// C34 · 选题品味判官(播客线)纯逻辑测试。
// 血案:题材筛选只对 1 个源生效且靠关键词 → 一集「222 纳米杀菌灯」做完全链才被用户发现,
// 白烧 192 分钟转写。品味规则本就写在档案里,代码却没读它。
// 铁律:测试不碰 glm-ask、不读网络(副作用只在 judgeEpisodeTaste 的 spawnSync 里)。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { parseVerdict, judgeAllows, shouldProcess, judgeInput, TASTE_JUDGE_MODEL } from "../scripts/taste-judge.mjs";

describe("parseVerdict", () => {
  it("认得出规范输出", () => {
    expect(parseVerdict('{"verdict":"对味","reason":"AI 智能体深挖"}')).toEqual({ verdict: "对味", reason: "AI 智能体深挖" });
  });
  it("★ 前后有噪音(模型爱加解释)也能抠出来", () => {
    expect(parseVerdict('好的,判断如下:\n{"verdict":"不对味","reason":"公共卫生硬件"}\n希望有帮助')?.verdict).toBe("不对味");
  });
  it("坏 JSON / 空 / 非法 verdict → null(交调用方按判不出处理)", () => {
    expect(parseVerdict("{verdict: 对味}")).toBe(null);
    expect(parseVerdict("")).toBe(null);
    expect(parseVerdict(null)).toBe(null);
    expect(parseVerdict('{"verdict":"也许","reason":"x"}')).toBe(null);
  });
});

describe("shouldProcess · 失败策略刻意不对称", () => {
  it("★★★ 明确「不对味」→ 拒绝(这正是本功能的意义:222 纳米光那类不该做)", () => {
    const r = shouldProcess({ verdict: "不对味", reason: "杀菌灯属公共卫生硬件,非 AI/创业" });
    expect(r.ok).toBe(false);
    expect(r.why).toContain("杀菌灯");
  });
  it("★★★ 判官调不通 → **放行**,不让基础设施故障把全站产出掐成零", () => {
    expect(shouldProcess(null, true).ok).toBe(true);
  });
  it("★★★ 输出认不出 → 放行(同上;偏题仍有人工点名下架兜底)", () => {
    expect(shouldProcess(null, false).ok).toBe(true);
  });
  it("明确「对味」→ 放行,并带上理由", () => {
    const r = shouldProcess({ verdict: "对味", reason: "智能体工程深挖" });
    expect(r.ok).toBe(true);
    expect(r.why).toBe("智能体工程深挖");
  });
  it("judgeAllows 只认「对味」二字", () => {
    expect(judgeAllows({ verdict: "对味", reason: "" })).toBe(true);
    expect(judgeAllows({ verdict: "不对味", reason: "" })).toBe(false);
    expect(judgeAllows(null)).toBe(false);
  });
});

describe("judgeInput · 喂给判官的信息不许静默丢", () => {
  it("★ 标题/播客名/时长都在(丢了判官就是瞎判)", () => {
    const s = judgeInput({ title: "Let There Be Germicidal Light", durationSec: 95 * 60 }, { name: "The Cognitive Revolution" });
    expect(s).toContain("Germicidal");
    expect(s).toContain("The Cognitive Revolution");
    expect(s).toContain("95 分钟");
  });
  it("缺字段不炸(时长未知照样能判题材)", () => {
    expect(judgeInput({ title: "X" }, { key: "a16z" })).toContain("未知");
    expect(() => judgeInput(null, null)).not.toThrow();
  });
});

describe("接线源码锚 · 两条路都要判(删掉任一处都会红)", () => {
  const src = readFileSync(new URL("../scripts/run-pipeline.mjs", import.meta.url), "utf8");
  it("★★★ 新集与补历史都在处理前判题材", () => {
    expect((src.match(/judgeEpisodeTaste\(item, source\)/g) ?? []).length).toBe(2);
  });
  it("★★★ 新集判掉的记终态 retry:false —— 否则 cutoff 卡住、每班重判重花钱", () => {
    // 定位到「有 skipped 数组」的那处(新集路径);补历史用计数器、不涉及 cutoff,无需 retry 字段
    const i = src.indexOf("skipped.push({ id, reason: `题材不对味");
    expect(i).toBeGreaterThan(0);
    expect(src.slice(i, i + 120)).toContain("retry: false");
  });
  it("★★ 判官用免费档(判题材这种粗粒度问题不该常驻付费)", () => {
    expect(TASTE_JUDGE_MODEL).toContain("flash");
  });
});
