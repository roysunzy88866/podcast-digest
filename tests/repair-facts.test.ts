// C3 · 定点重写回路的真业务测试
//
// 为什么测 judgePatch 而不是整个 repairFacts:三条不变量的**判据**全在 judgePatch 里(纯函数)。
// repairFacts 要调 GLM(非确定性、要花钱),不适合进 vitest 门 —— 但它的判断力已经抽出来了,
// 这里测的就是「收不收这个补丁」这个真决定。整链真跑的证据在 docs/c3-定点重写回路.md。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { splitParagraphs, locateFailure, judgePatch, locateFailureOffset, cutSentenceAt, repairFacts, CUT_MAX_FAILURES } from "../scripts/repair-facts.mjs";

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

// ── change 2B(用户批「单点处理」方案):实体 how_described 分支 + 密度熔断 ──
import { splitEntityFailures, censorEntityDescriptions, DENSITY_FUSE } from "../scripts/repair-facts.mjs";

describe("splitEntityFailures · 把实体 how_described 失败从导读失败里分出来", () => {
  const fs = [
    { kind: "D17-数字", raw: "190亿", reason: "实体「Anthropic」how_described:数字 190亿 未在真相源出现(疑编造)" },
    { kind: "D17-专名", name: "Snowflake", reason: "专名「Snowflake」未在真相源出现,且不在别名表(疑编造)" },
    { kind: "D17-专名", name: "Excel", reason: "实体「Zynga」how_described:专名「Excel」未在真相源出现(疑编造)" },
  ];
  it("实体失败按实体名聚合,导读失败原样留下", () => {
    const { entity, prose } = splitEntityFailures(fs);
    expect([...entity.keys()].sort()).toEqual(["Anthropic", "Zynga"]);
    expect(entity.get("Anthropic")).toHaveLength(1);
    expect(prose).toHaveLength(1);
    expect(prose[0].name).toBe("Snowflake");
  });
  it("空输入不崩", () => {
    const { entity, prose } = splitEntityFailures([]);
    expect(entity.size).toBe(0);
    expect(prose).toEqual([]);
  });
});

describe("censorEntityDescriptions · 切除兜底:清空还失真的 how_described(drift #7:该栏不显示)", () => {
  it("指名实体的 how_described 清空,其它实体一字不动;返回切了几个", () => {
    const ents = { entities: [
      { id: "anthropic", name: "Anthropic", file: "Anthropic", how_described: "估值 190亿 的公司" },
      { id: "modal", name: "Modal", file: "Modal", how_described: "跑智能体的云平台" },
    ]};
    const n = censorEntityDescriptions(ents, ["Anthropic"]);
    expect(n).toBe(1);
    expect(ents.entities[0].how_described).toBe("");
    expect(ents.entities[1].how_described).toBe("跑智能体的云平台"); // 无关实体不动
  });
  it("名字没命中 → 切 0 个,不误伤", () => {
    const ents = { entities: [{ id: "modal", name: "Modal", file: "Modal", how_described: "云平台" }] };
    expect(censorEntityDescriptions(ents, ["不存在"])).toBe(0);
    expect(ents.entities[0].how_described).toBe("云平台");
  });
});

describe("密度熔断 · 失真太密=稿子不可信,不修直接交隔离", () => {
  it("阈值导出且为合理值(真数据锚:06-14 六处轻失真该修;>阈值该熔断)", () => {
    expect(DENSITY_FUSE).toBeGreaterThanOrEqual(7); // 6 处的 06-14 必须能进修复
    expect(DENSITY_FUSE).toBeLessThanOrEqual(12);   // 别形同虚设
  });
});

// B(Scenario 5d-B,2026-08-23 standard-change):生僻专名末轮软化兜底。GLM 部分测不了(e2e 已真跑验证),
// 这里锚住「兜底逻辑存在」——只对 D17-专名 触发、密度熔断内、复用 judgePatch 验收、允许软化系统提示 —— 防被静默删掉。
describe("B · 专名末轮软化兜底(源码锚,防静默删除)", () => {
  const src = readFileSync(new URL("../scripts/repair-facts.mjs", import.meta.url), "utf8");
  it("★ 有独立的软化系统提示(允许去名,与常规 SYSTEM「别删」区分)", () => {
    expect(src).toContain("SOFTEN_NOUN_SYSTEM");
    expect(src).toMatch(/换成不指名的自然说法/);
  });
  it("★★ 兜底只对 D17-专名 触发、且在密度熔断阈值内(不给密度熔断的集放水)", () => {
    expect(src).toMatch(/filter\(\(f\) => f\.kind === "D17-专名"\)/);
    expect(src).toMatch(/cur\.failures\.length <= DENSITY_FUSE/);
  });
  it("★★ 软化补丁仍走 judgePatch 验收(目标名真去掉、不带新问题、不许删整段)", () => {
    // 兜底段落里必须调 judgePatch —— 否则软化=无验收的裸改,可能删内容蒙混
    const block = src.slice(src.indexOf("末轮兜底"));
    expect(block).toContain("judgePatch(");
    expect(block).toContain("softenedNouns");
  });
});

// ── Scenario 5d-D([standard-change: 用户授权 2026-09-24「a」]):修不动的零星一两处 → 删掉那一句/小标题 ──
describe("5d-D · locateFailureOffset / cutSentenceAt(删哪一句)", () => {
  const md = "## 引子\n\n正文第一句。他只给 0.2 分的小修正，还觉得慷慨。[117:03 Diogo Almeida] 后面一句保留。\n\n## 可靠性的几个 9:让智能像数据库查询一样\n\n- 列表项唯一一句 0.3。\n- 另一项。";
  it("★★★ 小标题里的失败 → 删整行小标题,别的一个字不动(真案例:Jev 集「可靠性的几个 9」)", () => {
    const at = locateFailureOffset(md, { raw: "9", ctx: "]。  ## 可靠性的几个 9:让智能像数据库查询一样" });
    const r = cutSentenceAt(md, at)!;
    expect(r.cut).toBe("## 可靠性的几个 9:让智能像数据库查询一样");
    expect(r.md).toBe("## 引子\n\n正文第一句。他只给 0.2 分的小修正，还觉得慷慨。[117:03 Diogo Almeida] 后面一句保留。\n\n- 列表项唯一一句 0.3。\n- 另一项。");
  });
  it("★★★ 句中失败 → 只删那一句(连同紧跟的时间戳),前后句保留", () => {
    const at = locateFailureOffset(md, { raw: "0.2", ctx: "正文第一句。他只给 0.2 分的小修正，还觉" });
    const r = cutSentenceAt(md, at)!;
    expect(r.cut).toBe("他只给 0.2 分的小修正，还觉得慷慨。[117:03 Diogo Almeida]");
    expect(r.md).toContain("正文第一句。后面一句保留。");
  });
  it("★★ 列表项删空 → 整行去掉,不留孤零零的「- 」", () => {
    const r = cutSentenceAt(md, locateFailureOffset(md, { raw: "0.3", ctx: "- 列表项唯一一句 0.3。 - 另一项" }))!;
    expect(r.md.endsWith("## 可靠性的几个 9:让智能像数据库查询一样\n\n- 另一项。")).toBe(true);
  });
  it("★★★ 定位不唯一 → -1(宁可隔离也不删错地方);超长 → null(防整段当一句删)", () => {
    expect(locateFailureOffset("a 9 b 9 c", { raw: "9" })).toBe(-1);
    expect(cutSentenceAt("x".repeat(400) + "9。", 400)).toBe(null);
  });
});

describe("5d-D · repairFacts 整链(假 glm-ask:模型修不动 → 末轮删句 → 整篇复检全过)", () => {
  const mkWords = (text: string, t0: number) => text.split(" ").map((w, i) => ({ word: w, start: t0 + i, end: t0 + i + 1, speaker: "SPEAKER_00" }));
  async function fixture(digestMd: string) {
    const { mkdtempSync, writeFileSync, chmodSync } = await import("node:fs");
    const { tmpdir } = await import("node:os");
    const { join } = await import("node:path");
    const dir = mkdtempSync(join(tmpdir(), "pd-cut-"));
    const t = "the platform had revenue in 2023";
    writeFileSync(join(dir, "transcript.en.json"), JSON.stringify([{ text: t, start: 0, end: 6, words: mkWords(t, 0) }]));
    writeFileSync(join(dir, "meta.json"), JSON.stringify({ id: "x", title_en: "x", speaker_map: { SPEAKER_00: "嘉宾" } }));
    writeFileSync(join(dir, "digest.json"), JSON.stringify({ tldr: "t", digest_md: digestMd, quotes: [] }));
    const aliasesPath = join(dir, "aliases.json");
    writeFileSync(aliasesPath, JSON.stringify({ entities: [] }));
    const bin = join(dir, "bin");
    (await import("node:fs")).mkdirSync(bin);
    writeFileSync(join(bin, "glm-ask"), "#!/bin/sh\nexit 1\n"); // 模型永远修不动
    chmodSync(join(bin, "glm-ask"), 0o755);
    return { dir, aliasesPath, bin };
  }
  async function run(md: string) {
    const f = await fixture(md);
    const oldPath = process.env.PATH;
    process.env.PATH = `${f.bin}:${oldPath}`;
    try {
      const logs: string[] = [];
      const r = await repairFacts(f.dir, { aliasesPath: f.aliasesPath, log: (s: string) => logs.push(s) });
      const saved = JSON.parse(readFileSync(`${f.dir}/digest.json`, "utf8")).digest_md;
      return { r, logs, saved };
    } finally {
      process.env.PATH = oldPath;
    }
  }
  it("★★★ 只剩 1 处(小标题里编造的 77)→ 删掉那行小标题,整篇过闸,日志记下删了什么", async () => {
    const { r, logs, saved } = await run("## 可靠性要到 77 分\n\n平台在 2023 年有收入。");
    expect(r.pass).toBe(true);
    expect(saved).toBe("平台在 2023 年有收入。");
    expect(logs.some((l) => l.includes("✂ 删句") && l.includes("## 可靠性要到 77 分"))).toBe(true);
  });
  it("★★★ 剩余超过上限 → 不删,照旧不过(交隔离)", async () => {
    const md = Array.from({ length: CUT_MAX_FAILURES + 1 }, (_, i) => `第 ${i} 句有编造的 ${81 + i} 个数。`).join("\n\n") + "\n\n平台在 2023 年有收入。";
    const { r, saved } = await run(md);
    expect(r.pass).toBe(false);
    expect(saved).toBe(md);
  });
});

describe("5d-D · GLM 20260924-001 复核补的两条", () => {
  it("★★★ [1] 前文有三连空行,同篇删两处 → 第二处仍删对句子(只收拾删除处的空行,不挪前文偏移)", () => {
    const md = "开头句。\n\n\n\n甲句有 77 个。乙句保留。\n\n中间段。\n\n丙句有 88 个。丁句保留。";
    const a2 = locateFailureOffset(md, { raw: "88" }), a1 = locateFailureOffset(md, { raw: "77" });
    const r2 = cutSentenceAt(md, a2)!;
    const r1 = cutSentenceAt(r2.md, a1)!;
    expect(r1.cut).toBe("甲句有 77 个。");
    expect(r2.md).toContain("开头句。\n\n\n\n甲句有 77 个。"); // 第一刀(删 88)没动前文 → 77 的偏移仍有效
    expect(r1.md).toBe("开头句。\n\n乙句保留。\n\n中间段。\n\n丁句保留。"); // 第二刀的删除处顺手收拾空行
  });
  it("★★ [3] 落在表格行 → 不删(返回 null,照旧隔离),免得删坏表结构", () => {
    const md = "| 指标 | 值 |\n|---|---|\n| 可靠性 | 77 |";
    expect(cutSentenceAt(md, md.indexOf("77"))).toBe(null);
  });
});
