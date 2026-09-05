// C38 · 口播稿(voice_script)生成 + 三道机器闸门。
// 副作用(GLM 调用)走注入 ask,假实现只记账 —— 绝不真跑、绝不烧钱。
import { describe, it, expect } from "vitest";
import {
  taErrs,
  speechErrs,
  distortErrs,
  baseErrs,
  scriptErrs,
  endingErrs,
  buildInput,
  buildRef,
  generateWithRetry,
} from "../scripts/voice-script.mjs";

// 一段干净口播稿(纯口语、少「他」、无结构杂物、专名/数字都在下面的 digest 里,长度≥300过 baseErrs)
const goodScript = `九成五的智能体项目卡在试点、上不了生产。为什么？不是不够聪明，是没人敢放行。

这一期咱们就聊这件事：真正缺的不是造智能体的能力，而是管住智能体的能力。讲这个的是 TrustWise 的创始人，十年前把 IBM 那台 Watson 从主卧室那么大的机器，压缩到披萨盒大小，推向市场。三年前看到所有人都在堆更大的模型，却没人管模型的行为，于是有了这家公司。

那现成的软件为什么管不了？安全软件防的是外人，可智能体是新的内部威胁；治理软件只写规矩、不在运行时执行；可观测性软件只告诉你出了事，拦不住。所以控制得拉到动手那一刻，不是几周前的文档，也不是几小时后的日志。

最后一句你记住就行：没有控制的智能，是不可部署的。`;

const digestMd = `TrustWise 的创始人谈到，95% 的智能体项目卡在试点。他把 IBM 的 Watson 从主卧室大小压到披萨盒大小 [21:01 X]。核心是控制智能体，不是构建智能体。安全软件、内部威胁、治理软件、可观测性、运行时、可部署、文档、日志、模型的行为都在正文里。`;

describe("C38 闸门① · 数「他」", () => {
  it("★ 好稿(省主语、少他)过", () => {
    expect(taErrs(goodScript)).toEqual([]);
  });
  it("★★★ 「他」超过上限 → 打回", () => {
    const errs = taErrs("他来了。他走了。他又来。他还说。他觉得。他认为。他强调。他补充。");
    expect(errs.some((e) => e.includes("「他」用了"))).toBe(true);
  });
  it("★★★ 连续两句以「他」开头 → 打回(即使总数不超)", () => {
    const errs = taErrs("这是好的一句。他来了。他走了。剩下都正常。");
    expect(errs.some((e) => e.includes("连续两句"))).toBe(true);
  });
  it("★ 「他们」「其他」不算刺耳的那个「他」,不误判", () => {
    expect(taErrs("智能体他们互相通信，其他系统也一样，他们又发明了语言。")).toEqual([]);
  });
});

describe("C38 闸门② · 防漏念(结构杂物不进音频)", () => {
  it("★ 纯口语正文过", () => {
    expect(speechErrs(goodScript)).toEqual([]);
  });
  it("★★★ markdown 标题 → 拦", () => {
    expect(speechErrs("## 为什么信任是大事\n正文。").some((e) => e.includes("标题"))).toBe(true);
  });
  it("★★★ 时间戳坐标 → 拦", () => {
    expect(speechErrs("他说了这句 [12:34 张三]。").some((e) => e.includes("时间戳"))).toBe(true);
  });
  it("★★★ 结构标签词(开场：/收尾：) → 拦", () => {
    expect(speechErrs("开场：欢迎收听。").some((e) => e.includes("结构标签"))).toBe(true);
    expect(speechErrs("收尾：就到这里。").some((e) => e.includes("结构标签"))).toBe(true);
  });
  it("★★ 双链 / 列表符号 / 加粗 / 块ID → 拦", () => {
    expect(speechErrs("看 [[某集|别名]]。").length).toBeGreaterThan(0);
    expect(speechErrs("- 第一点\n- 第二点").length).toBeGreaterThan(0);
    expect(speechErrs("这是**重点**。").length).toBeGreaterThan(0);
    expect(speechErrs("这句 ^abc123 是块。").length).toBeGreaterThan(0);
  });
});

describe("C38 闸门③ · 防失真(专名/数字不许超出原精华)", () => {
  it("★ 专名/数字都在原精华里 → 过", () => {
    expect(distortErrs(goodScript, digestMd)).toEqual([]);
  });
  it("★★★ 凭空新增实体形状专名(TrustWiseXY) → 拦", () => {
    expect(distortErrs("今天聊 FakeCorpXYZ 这家公司。", digestMd).some((e) => e.includes("FakeCorpXYZ"))).toBe(true);
  });
  it("★★★ 凭空新增阿拉伯数字 → 拦", () => {
    expect(distortErrs("他们融了 77777 万美元。", digestMd).some((e) => e.includes("77777"))).toBe(true);
  });
  it("★ 全大写缩写/全小写外来词按 gate-facts 口径不硬拦(与主闸同口径,不误杀)", () => {
    // GPTX 全大写=soft;mockup 全小写=soft —— 都不进硬拦
    expect(distortErrs("用了 GPTX 和 mockup 工具。", digestMd)).toEqual([]);
  });
});

describe("C38 · baseErrs 长度", () => {
  it("★ 太短 → 拦;太长 → 拦", () => {
    expect(baseErrs("太短了").some((e) => e.includes("太短"))).toBe(true);
    expect(baseErrs("字".repeat(3001)).some((e) => e.includes("太长"))).toBe(true);
  });
});

describe("C38 · GLM 20260829-001 采纳修复(防回归)", () => {
  it("★★★ [001-1] 「他们」开头的连续句不算刺耳的连续「他」(不误报)", () => {
    expect(taErrs("他说了A。他们又说B。").some((e) => e.includes("连续两句"))).toBe(false);
    // 真·单数他连续仍要报
    expect(taErrs("这句好。他来了。他走了。").some((e) => e.includes("连续两句"))).toBe(true);
  });
  it("★★★ [001-2] 专名整词比对:凭空造的短专名恰是原精华里长专名的子串,不许被放行", () => {
    expect(distortErrs("Trust 很厉害。", "TrustWise 很厉害。").some((e) => e.includes("Trust"))).toBe(true);
    expect(distortErrs("TrustWise 很厉害。", "TrustWise 很厉害。")).toEqual([]); // 整词命中才算过
  });
  it("★★★ [001-3] 参照含金句素材:金句里有而正文没有的专名不算编造(避免无谓打回)", () => {
    const ref = buildRef({ digest_md: "正文里没有那个词", quotes: [{ zh: "FooBar 很牛", en: "FooBar is great" }] });
    expect(distortErrs("今天聊 FooBar。", ref)).toEqual([]);
  });
  it("★★ [001-4] markdown 水平分隔线(--- / *** / ___)→ 拦", () => {
    expect(speechErrs("上一段。\n---\n下一段。").some((e) => e.includes("水平"))).toBe(true);
    expect(speechErrs("上一段。\n***\n下一段。").some((e) => e.includes("水平"))).toBe(true);
  });
});

describe("C38 · buildInput", () => {
  it("★ 输入含精华正文 + 金句素材", () => {
    const inp = buildInput({ title_zh: "标题", tldr: "一句话", digest_md: "正文内容XYZ", quotes: [{ zh: "金句一号" }] });
    expect(inp).toContain("正文内容XYZ");
    expect(inp).toContain("金句一号");
  });
});

describe("C38 · generateWithRetry(DI 假 GLM,不烧钱)", () => {
  it("★★★ 首次就过 → 返回稿,只调一次 GLM", async () => {
    let calls = 0;
    const ask = async () => { calls++; return goodScript; };
    const r = await generateWithRetry({ sys: "S", digest: { digest_md: digestMd }, ask, log: () => {}, warn: () => {} });
    expect(r).toBe(goodScript);
    expect(calls).toBe(1);
  });
  it("★★★ 前几次坏、后面好 → 重试直到过;nudge 把原因喂回去", async () => {
    const outs = ["## 带标题的坏稿，还很短", goodScript];
    let i = 0; const seen: string[] = [];
    const ask = async (_sys: string, input: string) => { seen.push(input); return outs[i++]; };
    const r = await generateWithRetry({ sys: "S", digest: { digest_md: digestMd }, ask, saveBad: () => {}, log: () => {}, warn: () => {} });
    expect(r).toBe(goodScript);
    expect(seen.length).toBe(2);
    expect(seen[1]).toContain("被机器闸门打回"); // 第二次输入带 nudge
  });
  it("★★★ 一直不过 → 返回 null(不拿坏稿冲掉,tts 回落念 digest_md)", async () => {
    const ask = async () => "## 永远带标题的坏稿";
    const r = await generateWithRetry({ sys: "S", digest: { digest_md: digestMd }, ask, maxRetry: 2, saveBad: () => {}, log: () => {}, warn: () => {} });
    expect(r).toBeNull();
  });
});

describe("C38 闸门④ · 结尾必须落地(用户 2026-09-05「没有结尾」)", () => {
  const body = "这是一段足够长的口播稿正文,讲清了今天是谁、聊什么问题、来龙去脉,现在到收尾了。";
  it("★★★ 陈述句收尾(。!」』)放行", () => {
    expect(endingErrs(body + "记住这一句就够了。")).toEqual([]);
    expect(endingErrs(body + "这就是他想说的!")).toEqual([]);
    expect(endingErrs(body + "用他的原话说,「答案早就写在数据里」。")).toEqual([]);
  });
  it("★★★ 反问句/问句收尾 → 拦(听着像没说完)", () => {
    const e = endingErrs(body + "而这到底意味着什么呢?");
    expect(e.length).toBe(1);
    expect(e[0]).toContain("问句");
  });
  it("★★★ 戛然而止(无句末标点)→ 拦", () => {
    expect(endingErrs(body + "然后就没有然后了").length).toBe(1);
    expect(endingErrs(body + "还有个细节,").length).toBe(1);
  });
  it("★★ 太短交 baseErrs 管,结尾闸门不重复报", () => {
    expect(endingErrs("短")).toEqual([]);
    expect(endingErrs("")).toEqual([]);
  });
  it("★★ 并入 scriptErrs(不接上 = 摆设)", () => {
    const ref = "";
    expect(scriptErrs(body + "留个悬念,你说呢?", ref).some((x) => x.includes("问句"))).toBe(true);
    expect(scriptErrs(body + "落在这句话上。", ref).some((x) => x.includes("问句") || x.includes("戛然"))).toBe(false);
  });
});
