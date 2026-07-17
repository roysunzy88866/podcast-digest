// C3 · 定点重写回路的真业务测试
//
// 为什么测 judgePatch 而不是整个 repairFacts:三条不变量的**判据**全在 judgePatch 里(纯函数)。
// repairFacts 要调 GLM(非确定性、要花钱),不适合进 vitest 门 —— 但它的判断力已经抽出来了,
// 这里测的就是「收不收这个补丁」这个真决定。整链真跑的证据在 docs/c3-定点重写回路.md。
import { describe, it, expect } from "vitest";
import { splitParagraphs, locateFailure, judgePatch } from "../scripts/repair-facts.mjs";

describe("splitParagraphs · 定位要原地替换的段", () => {
  it("按空行切段,并给出可原地替换的偏移", () => {
    const md = "第一段。\n\n第二段有问题 2024。\n\n第三段。";
    const ps = splitParagraphs(md);
    expect(ps).toHaveLength(3);
    expect(ps[1].text).toContain("2024");
    // 偏移必须能精确切回原文(整篇不动、只换这一段的前提)
    expect(md.slice(ps[1].start, ps[1].end)).toBe(ps[1].text);
  });

  it("★ 用偏移替换某段,其余段一字不动", () => {
    const md = "第一段。\n\n第二段有问题 2024。\n\n第三段。";
    const ps = splitParagraphs(md);
    const out = md.slice(0, ps[1].start) + "第二段改好了。" + md.slice(ps[1].end);
    expect(out).toBe("第一段。\n\n第二段改好了。\n\n第三段。");
  });
});

describe("locateFailure · 闸门的失败落在哪一段", () => {
  const paras = splitParagraphs("讲了 Kubernetes。\n\n在 2024 年的峰会之后。\n\n又讲了别的。");
  it("靠 ctx 定位", () => {
    expect(locateFailure({ ctx: "在 2024 年的峰会", raw: "2024" }, paras)).toBe(1);
  });
  it("ctx 定位不到时退回 raw", () => {
    expect(locateFailure({ ctx: "对不上的上下文", raw: "2024" }, paras)).toBe(1);
  });
  it("★ 定位不到就返回 -1(交人处理,不硬猜段落乱改)", () => {
    expect(locateFailure({ ctx: "根本不存在", raw: "9999" }, paras)).toBe(-1);
  });
});

describe("judgePatch · 三条不变量(每条都是本项目栽过的坑)", () => {
  const para = "在 2024 年的 Data AI Summit 之后,两位创始人复盘了近期发布。".repeat(2);
  const target = [{ kind: "D17-数字", raw: "2024", reason: "数字 2024 未在真相源出现" }];

  it("补丁修掉了原问题、没带出新问题、长度相当 → 收", () => {
    const patch = "在 Data AI Summit 期间,两位创始人复盘了近期发布。".repeat(2);
    const v = judgePatch({ paraText: para, patch, targeted: target, afterFailures: [], beforeFailures: target });
    expect(v.accept).toBe(true);
  });

  it("★ 不变量②:靠删内容过关 → 拒收(实测教训:prompt 里劝过『换写法不是删掉』,模型照样删)", () => {
    const v = judgePatch({ paraText: para, patch: "两位创始人复盘了发布。", targeted: target, afterFailures: [], beforeFailures: target });
    expect(v.accept).toBe(false);
    expect(v.reason).toMatch(/缩水|删/);
  });

  it("★ 原问题没修掉 → 拒收(不能因为『跑过一轮』就算数)", () => {
    const patch = "在 2024 年的 Data AI Summit 期间,两位创始人复盘了近期发布。".repeat(2);
    const v = judgePatch({ paraText: para, patch, targeted: target, afterFailures: target, beforeFailures: target });
    expect(v.accept).toBe(false);
    expect(v.reason).toMatch(/没修掉/);
  });

  it("★ 不变量③:修好旧的、却带出新的 → 拒收(整篇重摇三轮的教训:每轮都冒新编造)", () => {
    const patch = "在 Data AI Summit 期间,Ali Ghodsi 和两位创始人复盘了近期发布。".repeat(2);
    const brandNew = [{ kind: "D17-专名", name: "Ghodsi", reason: "专名 Ghodsi 未在真相源出现" }];
    const v = judgePatch({ paraText: para, patch, targeted: target, afterFailures: brandNew, beforeFailures: target });
    expect(v.accept).toBe(false);
    expect(v.reason).toMatch(/带出新问题/);
  });

  it("★ 别处本来就有、与本段无关的失败 → 不算「带出新问题」,不误杀本段补丁", () => {
    const patch = "在 Data AI Summit 期间,两位创始人复盘了近期发布。".repeat(2);
    const elsewhere = [{ kind: "D17-专名", name: "PB", reason: "别的段落的老问题" }];
    const v = judgePatch({
      paraText: para, patch, targeted: target,
      afterFailures: elsewhere,
      beforeFailures: [...target, ...elsewhere], // 修之前就有
    });
    expect(v.accept).toBe(true);
  });

  it("空补丁 → 拒收(由不变量②兜住:空必然也缩水)", () => {
    // 曾单独写过一条「补丁为空」判定,变异验证证实是死代码(空补丁必然先被缩水检查拦下)→ 已删。
    // 这条测试保留:它钉的是**行为**(空补丁进不去),不是某一行实现。
    expect(judgePatch({ paraText: para, patch: "   ", targeted: target, afterFailures: [], beforeFailures: target }).accept).toBe(false);
  });
});
