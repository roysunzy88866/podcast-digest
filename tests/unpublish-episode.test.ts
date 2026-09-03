// 人工下架一集(2026-09-03 用户拍板下架过时的 Fable 5 测评)。
// 守:计划纯函数的路径/账本形状;真跑 applyUnpublish 于临时目录:挪目录、删集页、记账、可重复执行不重复记账。
import { describe, it, expect } from "vitest";
import { mkdtempSync, mkdirSync, writeFileSync, existsSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { unpublishPlan, applyUnpublish } from "../scripts/unpublish-episode.mjs";

const ID = "2026-06-09-howiai-claude-fable-5-review-what-the-new-mytho";
const META = { id: ID, title_en: "Claude Fable 5 review", date: "2026-06-09", added: "2026-09-03", source_url: "https://x/y" };
const REASON = "人工下架:时效性内容已过时";

describe("unpublishPlan · 纯计划", () => {
  it("★★★ 路径落在 data/episodes → data/skipped,集页在 samples;账本条目带 pubDate(原发布日)与 reason", () => {
    const p = unpublishPlan(ID, META, { root: "/r", reason: REASON });
    expect(p.from).toBe(`/r/data/episodes/${ID}`);
    expect(p.to).toBe(`/r/data/skipped/${ID}`);
    expect(p.sample).toBe(`/r/samples/${ID}.md`);
    expect(p.entry).toEqual({ id: ID, reason: REASON, title: "Claude Fable 5 review", pubDate: "2026-06-09T00:00:00.000Z" });
    expect(p.skipReasonText).toContain(REASON);
  });
  it("★ 没 meta 也能出计划(标题回落 id、pubDate 空串),缺 id/reason 则抛", () => {
    const p = unpublishPlan(ID, null, { root: "/r", reason: REASON });
    expect(p.entry.title).toBe(ID);
    expect(p.entry.pubDate).toBe("");
    expect(() => unpublishPlan(ID, META, { root: "/r" } as any)).toThrow();
  });
});

describe("applyUnpublish · 临时目录真跑", () => {
  function fixture() {
    const root = mkdtempSync(join(tmpdir(), "pd-unpub-"));
    mkdirSync(join(root, "data/episodes", ID), { recursive: true });
    writeFileSync(join(root, "data/episodes", ID, "meta.json"), JSON.stringify(META));
    mkdirSync(join(root, "samples"), { recursive: true });
    writeFileSync(join(root, "samples", `${ID}.md`), "# page");
    return root;
  }
  it("★★★ 挪目录 + 写 skip-reason + 删集页 + 记账(账本 id 进 seen,顶量不会再捞回)", () => {
    const root = fixture();
    const state: any = { skipped: [] };
    applyUnpublish(unpublishPlan(ID, META, { root, reason: REASON }), state);
    expect(existsSync(join(root, "data/episodes", ID))).toBe(false);
    expect(existsSync(join(root, "data/skipped", ID, "meta.json"))).toBe(true);
    expect(readFileSync(join(root, "data/skipped", ID, "skip-reason.txt"), "utf8")).toContain(REASON);
    expect(existsSync(join(root, "samples", `${ID}.md`))).toBe(false);
    expect(state.skipped).toHaveLength(1);
    expect(state.skipped[0].id).toBe(ID);
  });
  it("★★ 重复执行不炸、账本不重复(同 id 只留一条)", () => {
    const root = fixture();
    const state: any = { skipped: [{ id: ID, reason: "旧条目" }] };
    const plan = unpublishPlan(ID, META, { root, reason: REASON });
    applyUnpublish(plan, state);
    applyUnpublish(plan, state);
    expect(state.skipped).toHaveLength(1);
    expect(state.skipped[0].reason).toBe(REASON);
  });
  it("★★★ id 拼错(三处都不存在)→ 抛错且账本不写(GLM 008[1]:不把不存在的集写进 seen)", () => {
    const root = fixture();
    const state: any = { skipped: [] };
    expect(() => applyUnpublish(unpublishPlan("2026-01-01-typo-id", META, { root, reason: REASON }), state)).toThrow(/找不到/);
    expect(state.skipped).toHaveLength(0);
  });
  it("★★ 上次挪完目录但没写 skip-reason 就中断 → 重跑补上 skip-reason(GLM 008[1])", () => {
    const root = fixture();
    const plan = unpublishPlan(ID, META, { root, reason: REASON });
    mkdirSync(plan.to, { recursive: true });
    rmSync(plan.from, { recursive: true, force: true });
    applyUnpublish(plan, { skipped: [] } as any);
    expect(existsSync(join(plan.to, "skip-reason.txt"))).toBe(true);
  });
});
