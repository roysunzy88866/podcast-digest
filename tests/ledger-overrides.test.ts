// drift #90 · 账本覆盖层:手工裁决(捞回/下架)写进 data/ledger-overrides.json,编排器每次加载叠加 → 云端回仓冲不掉。
// 病根实证:09-03 冲掉 2 条跨源重复下架;09-04 冲掉 productpodcast 捞回(文件在、账本又说停车 → 永远不被重选)。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { applyLedgerOverrides, LEDGER_OVERRIDES_FILE } from "../scripts/run-pipeline.mjs";

const ID = "2026-09-02-productpodcast-anthropic-member-of-technical-staff-on-l";

describe("applyLedgerOverrides · 纯逻辑", () => {
  it("★★★ forget:从 skipped 剔掉该 id,并清转瞬/补活/审查计数(捞回后从零开始)", () => {
    const st: any = { skipped: [{ id: ID, reason: "停车" }, { id: "other", reason: "x" }], transient: { [ID]: 3 }, revive: { [ID]: 2 }, blocked: { [ID]: 1 } };
    applyLedgerOverrides(st, { forget: [ID] });
    expect(st.skipped.map((s: any) => s.id)).toEqual(["other"]);
    expect(st.transient[ID]).toBeUndefined();
    expect(st.revive[ID]).toBeUndefined();
    expect(st.blocked[ID]).toBeUndefined();
  });
  it("★★★ skip:保证条目在(下架被冲掉后每班自动补回),同 id 不重复", () => {
    const st: any = { skipped: [] };
    const e = { id: "2026-06-09-howiai-fable-5", reason: "人工下架", title: "t", pubDate: "" };
    applyLedgerOverrides(st, { skip: [e] });
    applyLedgerOverrides(st, { skip: [e] });
    expect(st.skipped).toHaveLength(1);
    expect(st.skipped[0].reason).toBe("人工下架");
  });
  it("★★ forget 优先于 skip(先下架再捞回 = 捞回)", () => {
    const st: any = { skipped: [] };
    applyLedgerOverrides(st, { skip: [{ id: ID, reason: "x" }], forget: [ID] });
    expect(st.skipped).toHaveLength(0);
  });
  it("★ 无 overrides / 坏形状 → 原样返回不炸;坏元素(非字符串 id)静默跳过(GLM 028[7])", () => {
    const st: any = { skipped: [{ id: "a" }] };
    expect(applyLedgerOverrides(st, null).skipped).toHaveLength(1);
    expect(applyLedgerOverrides(st, { forget: "oops", skip: 42 } as any).skipped).toHaveLength(1);
    expect(applyLedgerOverrides(st, { forget: [123, null], skip: ["rawid", { id: 7 }] } as any).skipped).toHaveLength(1);
  });
  it("★★★ overrides 文件损坏必须响亮告警而非静默当没有(否则所有手工裁决无声失效,同 drift #82 病)", () => {
    const rp = readFileSync(new URL("../scripts/run-pipeline.mjs", import.meta.url), "utf8");
    const body = rp.slice(rp.indexOf("function readLedgerOverrides("), rp.indexOf("export function updateLedgerOverrides("));
    expect(body).toContain("console.error(");
    expect(body).toContain("所有手工裁决未叠加");
  });
});

describe("接线锚:每处都真的接上了", () => {
  const rp = readFileSync(new URL("../scripts/run-pipeline.mjs", import.meta.url), "utf8");
  const y = readFileSync(new URL("../.github/workflows/pipeline.yml", import.meta.url), "utf8");
  it("★★★ readState 加载账本后叠加 overrides(不接上 = 纯摆设),且打 grep 锚点日志", () => {
    expect(rp).toMatch(/return applyLedgerOverrides\(base, ov\)/);
    expect(rp).toContain("账本覆盖层已叠加(drift #90)");
  });
  it("★★★ overrides 文件**不在**云端回仓的 git add 路径里 —— 在了就又会被 -X theirs 冲掉", () => {
    const addLines = y.split("\n").filter((l) => /^\s*git add /.test(l));
    expect(addLines.length).toBeGreaterThan(0);
    for (const l of addLines) expect(l).not.toContain("ledger-overrides");
    expect(LEDGER_OVERRIDES_FILE.endsWith("data/ledger-overrides.json")).toBe(true);
  });
  it("★★ unpark 写 forget、unpublish 写 skip(两把手工刀都走覆盖层)", () => {
    expect(readFileSync(new URL("../scripts/unpark-episode.mjs", import.meta.url), "utf8")).toContain("ov.forget.push(id)");
    expect(readFileSync(new URL("../scripts/unpublish-episode.mjs", import.meta.url), "utf8")).toContain("ov.skip.push(plan.entry)");
  });
});
