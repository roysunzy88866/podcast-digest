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

  it("★ 同一轮修多段:必须倒序改,否则偏移失效会把正文切烂(GLM 018[1] 判 save)", () => {
    // 这个 bug 差点被我交出去:集2 只有一段有问题,跑通了就以为对了。
    const md = "第一段有问题 2024。\n\n第二段也有问题 9999。\n\n第三段没事。";
    const ps = splitParagraphs(md);
    const patches = new Map([[0, "第一段修好。"], [1, "第二段修好。"]]);

    // ❌ 正序:改完段0 后 md 变短,段1 的旧偏移失效 → 切烂
    let bad = md;
    for (const [i, p] of [...patches].sort((a, b) => a[0] - b[0])) bad = bad.slice(0, ps[i].start) + p + bad.slice(ps[i].end);
    expect(bad).not.toBe("第一段修好。\n\n第二段修好。\n\n第三段没事。"); // 实测会得到「第二段也有问第二段修好。事。」

    // ✅ 倒序:改后面的段不影响前面段的偏移
    let good = md;
    for (const [i, p] of [...patches].sort((a, b) => b[0] - a[0])) good = good.slice(0, ps[i].start) + p + good.slice(ps[i].end);
    expect(good).toBe("第一段修好。\n\n第二段修好。\n\n第三段没事。");
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

  it("空补丁 → 拒收", () => {
    expect(judgePatch({ paraText: para, patch: "   ", targeted: target, afterFailures: [], beforeFailures: target }).accept).toBe(false);
  });

  it("★ null/非字符串补丁 → 拒收而不是抛异常炸穿(GLM 018[2])", () => {
    // 我曾按变异验证的结论把这条 guard 当死代码删掉 → GLM 实测 judgePatch({patch:null}) 直接 TypeError。
    // 教训:「变异验证说它是死代码」只等于「对我测试用的输入是死的」,不等于对所有输入都死。
    for (const bad of [null, undefined, 123, {}]) {
      expect(() => judgePatch({ paraText: para, patch: bad as any, targeted: target, afterFailures: [], beforeFailures: target })).not.toThrow();
      expect(judgePatch({ paraText: para, patch: bad as any, targeted: target, afterFailures: [], beforeFailures: target }).accept).toBe(false);
    }
  });

  it("★ 等长垃圾 / 被截断的半句话 → 拒收(GLM 018[3]:长度卡点拦不住这个)", () => {
    // 真实触发路径不是模型发癫,是 glm-ask 输出被 maxTokens 截断 → 半句话但长度够。
    // 而闸门对「没有专名也没有数字的乱码」无话可说 → 会静默把正文换成垃圾还报全过。
    const garbage = "A".repeat(para.length);
    expect(judgePatch({ paraText: para, patch: garbage, targeted: target, afterFailures: [], beforeFailures: target }).accept).toBe(false);
    const truncated = "在 Data AI Summit 期间,两位创始人复盘了近期发布,他们提到".repeat(2); // 没有句末标点
    expect(judgePatch({ paraText: para, patch: truncated, targeted: target, afterFailures: [], beforeFailures: target }).accept).toBe(false);
  });

  it("★ 标题段不该被截断检查误杀(GLM 019[1] 实测:集1 有 10 个标题段)", () => {
    // 首版把「结尾必须是句号类标点」写死 → 标题段(`## 从Kubernetes的痛点…`)本就不带标点
    // → 补丁**永远被拒收**、回路修不动。而标题里的 Kubernetes/LLM 正是 D17 会点名的专名。
    // 集2 的失败恰好落在散文段,所以这个 bug 没咬到我 —— 又一次「样本太窄就以为对了」。
    const heading = "## 从 Kubernetes 的痛点到无服务器计算";
    const v = judgePatch({
      paraText: heading, patch: "## 从 Kubernetes 的痛点到弹性计算",
      targeted: target, afterFailures: [], beforeFailures: target,
    });
    expect(v.accept).toBe(true);
  });

  it("★ 但原段以完整句收尾时,补丁没收尾 → 仍要拦(判据=跟原段比结构,不是放弃检查)", () => {
    const prose = "他们讲了智能体的事,而且讲得很细。".repeat(3);
    const v = judgePatch({
      paraText: prose, patch: "他们讲了智能体的事,而且讲得很细,还提到".repeat(3),
      targeted: target, afterFailures: [], beforeFailures: target,
    });
    expect(v.accept).toBe(false);
    expect(v.reason).toMatch(/截断/);
  });
});
