// C6 Scenario 4 · 关联闸门(死链)真业务测试。变异验证:相关集缺页必被拦。
import { describe, it, expect } from "vitest";
import { gateRelations } from "../scripts/gate-relations.mjs";

const P = (id, type, role, name, primary = true) => ({ id, type, role, name, file: name, primary, evidence: [] });
// epA、epB 共享 primary 概念 agent → 互为相关
const epA = { meta: { id: "A", title_zh: "A", date: "2026-02-01" }, digest: { quotes: [] }, entities: { entities: [P("agent", "concept", "concept", "智能体")] } };
const epB = { meta: { id: "B", title_zh: "B", date: "2026-01-01" }, digest: { quotes: [] }, entities: { entities: [P("agent", "concept", "concept", "智能体")] } };
const EPS = [epA, epB];

describe("gateRelations · 相关单集死链(US-7)", () => {
  it("★ 相关集都有页 → 过", () => {
    const r = gateRelations(EPS, () => true);
    expect(r.pass).toBe(true);
    expect(r.failures).toEqual([]);
  });

  it("★ 相关集缺页 → 拦(死链·变异守卫):A 相关到 B,但 B 无页", () => {
    const r = gateRelations(EPS, (id) => id === "A"); // 只有 A 有页
    expect(r.pass).toBe(false);
    expect(r.failures.some((f) => f.kind === "相关单集死链" && f.epId === "A" && f.reason.includes("B"))).toBe(true);
  });

  it("★ 只查已发布集:未发布集(无页)不查它自己的相关区", () => {
    const r = gateRelations(EPS, (id) => id === "B"); // 只有 B 有页
    expect(r.pass).toBe(false);
    expect(r.failures.every((f) => f.epId === "B")).toBe(true); // A 未发布被跳过,只有 B 报(B 相关到无页的 A)
  });
});
