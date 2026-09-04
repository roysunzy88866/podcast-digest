// ── drift #44 · 编排器开工必刷 origin/main 最新 ──────────────────────────
// 病根:actions/checkout 检出的是 github.sha = run **创建时刻**钉死的快照;并发组排队几小时的 run
// 执行时,前一班回仓 push 的账本(cutoff/skipped/talkVideoIds)不在检出里 → 旧账本判「活没干过」,
// 已完成的集/演讲被重烧(run 30624243940 实账:双烧两条演讲转写+浓缩,撞 6h runner 上限被杀)。
// 修:checkout 之后、跑编排器之前,强制 git fetch + reset --hard 到 origin/main。
// 款式照 tests/run-pipeline-audio.test.ts(workflow 字符串断言先例)。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

describe("drift #44 · pipeline.yml 开工刷新步(堵排队旧快照重烧钱洞)", () => {
  const y = readFileSync(new URL("../.github/workflows/pipeline.yml", import.meta.url), "utf8");

  it("★★★ checkout 之后、跑编排器之前,有 fetch+reset 到 origin/main 的刷新步", () => {
    const iCheckout = y.indexOf("actions/checkout@v4");
    const iFetch = y.indexOf("git fetch origin main");
    const iReset = y.indexOf("git reset --hard origin/main");
    const iOrchestrator = y.indexOf("run-pipeline.mjs"); // 编排器首次出现(seed 分支)
    expect(iCheckout).toBeGreaterThan(-1);
    expect(iFetch).toBeGreaterThan(iCheckout); // 刷新在 checkout 之后
    expect(iReset).toBeGreaterThan(iFetch); // 先 fetch 再 reset
    expect(iOrchestrator).toBeGreaterThan(iReset); // 编排器(所有入口)都在刷新之后 → 读到的账本必为最新
  });

  it("★★ 凭证前提不许被拆:checkout 不关 persist-credentials(刷新步 fetch 与回仓步 push 都靠它)", () => {
    expect(y).not.toContain("persist-credentials: false");
  });

  it("★ 刷新步锚定 drift #44(将来动它先去 drift-log 看裁决)", () => {
    expect(y).toContain("drift #44");
  });
});

describe("W2 · 判官留痕文件随仓提交 + 进 artifact(否则随 runner 丢)", () => {
  const y = readFileSync(new URL("../.github/workflows/pipeline.yml", import.meta.url), "utf8");
  it("★★★ 回仓步单独一行 add judge-log(缺文件时不许拖垮既有那句 git add)", () => {
    expect(y).toMatch(/\[ -f data\/judge-log\.jsonl \] && git add data\/judge-log\.jsonl \|\| true/);
    expect(y).toContain("git add data/episodes data/pipeline-state.json samples 2>/dev/null || true"); // 原句不动
  });
  it("★★ 产物 artifact 含 judge-log", () => {
    const i = y.indexOf("pipeline-products-");
    expect(y.slice(i, i + 400)).toContain("data/judge-log.jsonl");
  });
});

describe("drift #88 · 浓缩绝不能钉 glm-5.3(2026-08-15 已冷测证伪:长稿吐坏 JSON;2026-09-04 实跑复现零产出)", () => {
  const y = readFileSync(new URL("../.github/workflows/pipeline.yml", import.meta.url), "utf8");
  it("★★★ 编排器 env 里不许出现 CONDENSE_MODEL: glm-5.3 —— 钉过一次,首班 3 集 ×3 次全格式解析失败", () => {
    expect(y).not.toMatch(/CONDENSE_MODEL:\s*glm-5\.3\s*$/m);
  });
  it("★★ 撤回原因留在 workflow 里,防下次又被「ADR 说浓缩=5.3」勾回去", () => {
    expect(y).toContain("drift #88");
    expect(y).toContain("已证伪");
  });
});
