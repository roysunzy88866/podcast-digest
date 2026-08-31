// gate-all --deploy 部署模式(用户 2026-08-31「内容断供很要命/我服了」· standard-change)。
//
// 病根实证:实体/关联层无隔离,一条 [[swyx]] 死链(链到缺页,纯装饰)就把全站 239 集内容全扣在仓库
// (金句 0❌、事实层自隔离,唯一拦点是 1 条死链)。--deploy 下**死链降警告、不拦上站**;
// 事实/金句/音频/实体页一致性 仍硬拦(防失真一分不松)。
//
// 放行边界靠 isDeadLinkKind 精确白名单(不是 startsWith 前缀)—— 这里**行为测试**它,
// 前缀漏洞(GLM 008[2])、关联层整体放行漏洞(GLM 008[1])都由它守住;再补最薄的源码形状钉住接线。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { isDeadLinkKind, DEAD_LINK_KINDS } from "../scripts/deadlink-kinds.mjs";

describe("死链白名单 · 精确匹配(部署放行的唯一一类)", () => {
  it("★★★ 三类真死链放行:实体死链 / 死链-块 / 关联相关单集死链", () => {
    expect(isDeadLinkKind("死链")).toBe(true);
    expect(isDeadLinkKind("死链-块")).toBe(true);
    expect(isDeadLinkKind("相关单集死链")).toBe(true);
  });

  it("★★★ 失真/一致性类**绝不**放行(防失真闸门不被误放)", () => {
    expect(isDeadLinkKind("实体页缺失")).toBe(false);
    expect(isDeadLinkKind("实体页不一致")).toBe(false);
    expect(isDeadLinkKind("结构")).toBe(false);
    expect(isDeadLinkKind("译名漂移")).toBe(false);
  });

  it("★★★ 前缀漏洞已堵(GLM 008[2]):以「死链」开头的假想非装饰性 kind 不被放行", () => {
    // startsWith 会误放这个;精确 Set 不会
    expect(isDeadLinkKind("死链-失真")).toBe(false);
    expect(isDeadLinkKind("死链导致内容缺失")).toBe(false);
  });

  it("★★ 白名单就这 3 类,扩围必须显式改这里(白名单是安全边界)", () => {
    expect([...DEAD_LINK_KINDS].sort()).toEqual(["死链", "死链-块", "相关单集死链"].sort());
  });
});

describe("契约 · 白名单必须覆盖上游真实产出的死链 kind(GLM 010[1]:字符串耦合漂了就静默失效)", () => {
  // 上游 gate 改了 kind 命名(改字/大小写/空格),白名单就对不上 → --deploy 退回全拦、内容又断供。
  // 这里把「上游确实在产这些 kind」+「白名单确实收了它们」一起钉死,任一漂移即红。
  const gateEnt = readFileSync(new URL("../scripts/gate-entities.mjs", import.meta.url), "utf8");
  const gateRel = readFileSync(new URL("../scripts/gate-relations.mjs", import.meta.url), "utf8");

  it("★★★ 实体层的死链 kind(死链 / 死链-块)既在上游源里、也在白名单里", () => {
    for (const k of ["死链", "死链-块"]) {
      expect(gateEnt.includes(`kind: "${k}"`)).toBe(true); // 上游确实产这个 kind
      expect(isDeadLinkKind(k)).toBe(true); // 白名单确实放行它
    }
  });
  it("★★★ 关联层的死链 kind(相关单集死链)既在上游源里、也在白名单里", () => {
    expect(gateRel.includes('kind: "相关单集死链"')).toBe(true);
    expect(isDeadLinkKind("相关单集死链")).toBe(true);
  });
  it("★★★ 实体层的**非**死链失败 kind 存在且不在白名单(否则失真会被误放行)", () => {
    // 这几类是 gate-entities 真实产出的「该拦」失败;必须不被 isDeadLinkKind 放行
    for (const k of ["实体页缺失", "实体页不一致", "结构"]) {
      expect(gateEnt.includes(`kind: "${k}"`)).toBe(true);
      expect(isDeadLinkKind(k)).toBe(false);
    }
  });
});

describe("gate-all 接线 · 两层都走 isDeadLinkKind、只在 DEPLOY_MODE 放行", () => {
  const gateAll = readFileSync(new URL("../scripts/gate-all.mjs", import.meta.url), "utf8");
  it("★★★ --deploy 开关存在;两层放行都用 isDeadLinkKind(非前缀),非死链仍走 fatal 分支", () => {
    expect(gateAll).toMatch(/DEPLOY_MODE\s*=\s*process\.argv\.includes\("--deploy"\)/);
    expect((gateAll.match(/isDeadLinkKind\(f\.kind\)/g) || []).length).toBeGreaterThanOrEqual(4);
    expect(gateAll).not.toMatch(/startsWith\("死链"\)/);
    expect(gateAll).toMatch(/DEPLOY_MODE \? others : r\.failures/);
    expect(gateAll).toMatch(/DEPLOY_MODE \? otherR : rel\.failures/);
  });
});
