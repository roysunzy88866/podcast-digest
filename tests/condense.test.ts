// condense 的 JSON 提取容错(C7b lab E2E 逼出:GLM 把长 digest_md 的真换行直接塞进 JSON 字符串→控制字符非法)
import { describe, it, expect } from "vitest";
import { escapeCtrlInStrings, extractJson } from "../scripts/condense.mjs";

describe("escapeCtrlInStrings", () => {
  it("转义字符串内的裸换行/Tab,结构空白不动", () => {
    const bad = '{\n  "a": "行1\n行2\t制表"\n}';
    const fixed = escapeCtrlInStrings(bad);
    expect(fixed).toBe('{\n  "a": "行1\\n行2\\t制表"\n}');
    expect(() => JSON.parse(fixed)).not.toThrow();
    expect(JSON.parse(fixed).a).toBe("行1\n行2\t制表");
  });
  it("已转义的 \\n 不被二次转义", () => {
    const ok = '{"a":"已经\\n转义"}';
    expect(escapeCtrlInStrings(ok)).toBe(ok);
  });
});

describe("extractJson", () => {
  it("字符串里有裸换行(真实 GLM 毛病)→ 兜底转义后能解析", () => {
    const raw = '{\n  "tldr": "摘要",\n  "digest_md": "第一段\n\n> 【背景】第二段",\n  "quotes": []\n}';
    const o = extractJson(raw);
    expect(o).not.toBeNull();
    expect(o.digest_md).toContain("第一段");
    expect(o.digest_md).toContain("第二段");
  });
  it("剥 ```json fence", () => {
    expect(extractJson('```json\n{"a":1}\n```')).toEqual({ a: 1 });
  });
  it("干净 JSON 直接过", () => {
    expect(extractJson('{"a":1,"b":"x"}')).toEqual({ a: 1, b: "x" });
  });
  it("彻底不是 JSON → null", () => {
    expect(extractJson("这里没有大括号")).toBeNull();
  });
});

// ── C15 · 文稿规范升级:开场钩子 + 口语导览 + 口语收尾(docs/user-stories.md「C15」,2026-07-30 用户拍板)──
// 机器只卡客观项(标签字样/书面自称/工程备注/带走列表腔);「钩子好不好」主观项不机器卡。
// 存量实证(57 集):「本文将…」6 集、正文工程备注「转写稿/误写为」4 集、带走列表腔 55 集、【】标记只有【背景】一种。
import { styleErrs, condenseWithRetry } from "../scripts/condense.mjs";

const okMd = [
  "把 10 万行代码换一种语言重写,顶尖工程师要一年——他只用了 11 天。说这话的人是嘉宾本人。",
  "",
  "这一集他讲了三件事:模型强在哪、怎么放手让它干、人该干什么。",
  "",
  "## 第一节",
  "正文" + "字".repeat(300) + "。",
  "",
  "> 【背景】AI 补的背景块照旧允许,里面的转写稿纠正说明也允许。",
  "",
  "## 本集带走",
  "最后收个尾,这一集值得带走的是三句话。第一,新模型一出先敢删。第二,给目标给护栏然后放手。第三,真正的杠杆是编排一群智能体。",
].join("\n");

describe("styleErrs · C15 口语体机器卡点", () => {
  it("★ 合格口语稿(钩子段开头 + 背景块 + 口语收尾)→ 无错", () => {
    expect(styleErrs(okMd)).toEqual([]);
  });
  it("★ 【开场钩子】类标签字样 → 拦(【背景】是唯一放行的标记,不误伤)", () => {
    expect(styleErrs("【开场钩子】" + okMd).join()).toContain("标签");
    expect(styleErrs(okMd.replace("## 第一节", "【导览】\n\n## 第一节")).join()).toContain("标签");
  });
  it("★ 书面自称「本文/本篇」→ 拦", () => {
    expect(styleErrs(okMd.replace("这一集他讲了三件事", "本文将拆解三件事")).join()).toContain("本文");
    expect(styleErrs(okMd.replace("这一集他讲了三件事", "本篇梳理了三条主线")).join()).toContain("本文");
  });
  it("「文本文件/日本文化/篇幅」不误伤(存量 pg-eval 集实测有「文本文件」)", () => {
    const md = okMd.replace("正文", "在代表人类基因组的文本文件中,以及日本文化里,这本篇幅很长的书。正文");
    expect(styleErrs(md)).toEqual([]);
  });
  it("★ 正文工程备注(转写稿中误写为 X)→ 拦;放【背景】引用块里 → 放行", () => {
    const md = okMd.replace("正文", "工具名在本集转写稿中常被语音识别误写为 Cloud Code。正文");
    expect(styleErrs(md).join()).toContain("工程备注");
    expect(styleErrs(okMd)).toEqual([]); // okMd 的背景块里就带着「转写稿」字样,不拦
  });
  it("★ 「本集带走」编号列表腔 → 拦;整节缺失 → 拦", () => {
    const listy = okMd.replace(/最后收个尾[\s\S]*$/, "1. 新模型一出先敢删\n2. 给目标给护栏\n3. 编排一群智能体");
    expect(styleErrs(listy).join()).toContain("列表");
    const missing = okMd.replace(/## 本集带走[\s\S]*$/, "");
    expect(styleErrs(missing).join()).toContain("本集带走");
  });
  it("digest_md 上来就是小节标题(没有钩子段)→ 拦", () => {
    expect(styleErrs("## 第一节\n" + okMd.slice(okMd.indexOf("正文"))).join()).toContain("钩子");
  });
});

describe("condenseWithRetry · 打回原因回喂(extract-guest/extract-entities nudge 先例平移)", () => {
  const mkDigest = (md: string) => ({
    title_zh: "标题",
    tldr: "一句话",
    digest_md: md,
    quotes: [1, 2, 3, 4].map((i) => ({ en: "e", zh: "z", timestamp: "0:0" + i, speaker: "s" })),
  });
  const SYS = "SYS-PROMPT";
  const INPUT = "INPUT-RAW";
  const silent = { log: () => {}, warn: () => {} };

  it("★ 第一次调用无 nudge:system 与输入都与裸串逐字一致", async () => {
    const calls: { sys: string; input: string }[] = [];
    const ask = async (sys: string, input: string) => (calls.push({ sys, input }), JSON.stringify(mkDigest(okMd)));
    const out = await condenseWithRetry({ sys: SYS, input: INPUT, ask, ...silent });
    expect(calls.length).toBe(1);
    expect(calls[0].sys).toBe(SYS);
    expect(calls[0].input).toBe(INPUT);
    expect(out).toEqual(mkDigest(okMd));
  });
  it("★ 结构合格但口语体不合格(本文自称)→ 照样打回,重试输入带 errs 原话,SYS 一字不改", async () => {
    const calls: { sys: string; input: string }[] = [];
    let n = 0;
    const bad = mkDigest(okMd.replace("这一集他讲了三件事", "本文将拆解三件事"));
    const ask = async (sys: string, input: string) => (calls.push({ sys, input }), JSON.stringify(n++ === 0 ? bad : mkDigest(okMd)));
    const out = await condenseWithRetry({ sys: SYS, input: INPUT, ask, ...silent });
    expect(calls.length).toBe(2);
    expect(calls[1].sys).toBe(SYS);
    expect(calls[1].input.startsWith(INPUT)).toBe(true);
    expect(calls[1].input).toContain("本文"); // 打回原因**原话**回喂
    expect(calls[1].input).toContain("机器闸门打回");
    expect(out).toEqual(mkDigest(okMd));
  });
  it("★ 试满 4 次(MAX_RETRY=3 不变)仍不合格 → null,坏输出每次存档、好档不碰", async () => {
    let asks = 0, bads = 0, goods = 0;
    const out = await condenseWithRetry({
      sys: SYS, input: INPUT,
      ask: async () => (asks++, JSON.stringify({ tldr: "只有这个" })),
      saveGood: () => goods++, saveBad: () => bads++, ...silent,
    });
    expect(out).toBe(null);
    expect(asks).toBe(4);
    expect(bads).toBe(4);
    expect(goods).toBe(0);
  });
  it("首次合格 → saveGood 收到原始 raw(缓存链路不变)", async () => {
    let good: string | null = null;
    const raw = JSON.stringify(mkDigest(okMd));
    const out = await condenseWithRetry({ sys: SYS, input: INPUT, ask: async () => raw, saveGood: (r: string) => (good = r), ...silent });
    expect(out).toEqual(mkDigest(okMd));
    expect(good).toBe(raw);
  });
});

describe("validate · C5.1 Scenario 5:浓缩产物必须带 title_zh(中文标题)", () => {
  it("★ 缺 title_zh → 结构不合格(逼 GLM 重试,不留空标题)", async () => {
    const { validate } = await import("../scripts/condense.mjs");
    const ok = {
      title_zh: "标题",
      tldr: "一句话",
      digest_md: "x".repeat(300),
      quotes: [1, 2, 3, 4].map((i) => ({ en: "e", zh: "z", timestamp: "0:0" + i, speaker: "s" })),
    };
    expect(validate(ok)).toEqual([]);
    const { title_zh, ...noTitle } = ok;
    expect(validate(noTitle).join()).toContain("title_zh");
  });
});
