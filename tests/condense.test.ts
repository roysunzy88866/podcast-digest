// condense 的 JSON 提取容错(C7b lab E2E 逼出:GLM 把长 digest_md 的真换行直接塞进 JSON 字符串→控制字符非法)
import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { escapeCtrlInStrings, extractJson, parseSections, stripRangeStamps } from "../scripts/condense.mjs";

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
  it("串内未转义的裸双引号 → 转义(前瞻:引号后非 ,}]: 即判为串内)", () => {
    // GLM 把 `他说"好"就走` 直接塞进字符串,裸引号会撑崩边界 → 只有跟着 } 的才算闭合
    const bad = '{"a":"他说"好"就走"}';
    const fixed = escapeCtrlInStrings(bad);
    expect(() => JSON.parse(fixed)).not.toThrow();
    expect(JSON.parse(fixed).a).toBe('他说"好"就走');
  });
  it("\\n\\r\\t 之外的控制字符也转义(U+0000-1F)", () => {
    const bad = '{"a":"x' + String.fromCharCode(0) + 'y' + String.fromCharCode(0x1f) + 'z"}'; // 裸控制字符 0x00/0x1F → 非法 JSON
    const fixed = escapeCtrlInStrings(bad);
    expect(() => JSON.parse(fixed)).not.toThrow();
    expect(JSON.parse(fixed).a).toBe('x' + String.fromCharCode(0) + 'y' + String.fromCharCode(0x1f) + 'z');
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

// ── 2026-08-15 根治:GLM 分段纯文本输出 → parseSections(避免大段 markdown 塞 JSON 被撑坏)──
describe("parseSections（分隔符分段,不塞 JSON）", () => {
  const sample = `===标题===
Block 的 AI 变革
===导语===
CTO 谈重组与智能体。
===正文===
许多人认为代码质量是关键,但二者"毫无关系" [01:29 Dhanji]。

## 本集带走
- 决策者自己先用起来
===金句===
01:29 | Dhanji Prasanna
EN | A lot of engineers think "code quality" matters.
ZH | 很多人认为"代码质量"重要。

85:51 | Dhanji
EN | The internet was a promise.
ZH | 互联网是一个承诺。
===END===`;

  it("四段解析出对象,digest_md 保留裸引号/[标注]/换行/## 本集带走 原样", () => {
    const o = parseSections(sample)!;
    expect(o.title_zh).toBe("Block 的 AI 变革");
    expect(o.tldr).toBe("CTO 谈重组与智能体。");
    expect(o.digest_md).toContain('"毫无关系"');
    expect(o.digest_md).toContain("[01:29 Dhanji]");
    expect(o.digest_md).toContain("## 本集带走");
  });

  it("金句每条三行 → {timestamp,speaker,en,zh};英文内的裸引号照留", () => {
    const o = parseSections(sample)!;
    expect(o.quotes).toHaveLength(2);
    expect(o.quotes[0]).toEqual({ timestamp: "01:29", speaker: "Dhanji Prasanna", en: 'A lot of engineers think "code quality" matters.', zh: '很多人认为"代码质量"重要。' });
    expect(o.quotes[1].timestamp).toBe("85:51");
  });

  it("★★★ 程序化 JSON.stringify 往返成功(下游 digest.json 合法,内层引号由 JS 正确转义)", () => {
    const o = parseSections(sample)!;
    const back = JSON.parse(JSON.stringify(o));
    expect(back.quotes[0].en).toContain('"code quality"');
    expect(back.digest_md).toContain('"毫无关系"');
  });

  it("缺段(没有 ===金句===) → null;非分段格式(JSON)→ null(交 extractJson 兜底)", () => {
    expect(parseSections("===标题===\nX\n===导语===\nY\n===正文===\nZ\n===END===")).toBeNull();
    expect(parseSections('{"title_zh":"x"}')).toBeNull();
  });

  it("容错:GLM 偶尔包一层 ``` 围栏也能剥", () => {
    const o = parseSections("```\n" + sample + "\n```");
    expect(o?.title_zh).toBe("Block 的 AI 变革");
  });
});

// ── C15 · 文稿规范升级:开场钩子 + 口语导览 + 口语收尾(docs/user-stories.md「C15」,2026-07-30 用户拍板)──
// 机器只卡客观项(标签字样/书面自称/工程备注/带走小节缺失);「钩子好不好」主观项不机器卡。
// ADR 0020「实质优先」:带走「列表腔」原也卡,已放开 —— 带走=可带走的几条具体要点,允许列表。
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
  it("★ 「本集带走」现允许要点列表(ADR 0020 放开列表腔);整节缺失 → 仍拦", () => {
    const listy = okMd.replace(/最后收个尾[\s\S]*$/, "- 新模型一出先敢删\n- 给目标给护栏\n- 编排一群智能体");
    expect(styleErrs(listy)).toEqual([]);
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

describe("drift #83 · 分隔符收尾容错(===正文## 这类笔误不再整篇作废)", () => {
  const dir = new URL("./fixtures/condense-bad-sep/", import.meta.url);
  const files = readdirSync(dir).filter((f) => f.endsWith(".txt"));
  it("★★★ 三个真实坏样本(近 8 班 14 次浓缩失败全是这一种)全部完整解析:标题/导语/正文/金句齐", () => {
    expect(files.length).toBeGreaterThanOrEqual(5); // 09-05 追加 2 个(EN| 前缀缺失 / ===正文---)
    for (const f of files) {
      const r = parseSections(readFileSync(new URL(f, dir), "utf8"));
      expect(r, f).not.toBeNull();
      expect(r!.title_zh.length, f).toBeGreaterThan(5);
      expect(r!.tldr.length, f).toBeGreaterThan(20);
      expect(r!.digest_md.length, f).toBeGreaterThan(3000);
      expect(r!.quotes.length, f).toBeGreaterThanOrEqual(15);
    }
  });
  it("★★ 只放宽收尾:段名错了仍不认(不硬猜)", () => {
    expect(parseSections("===标题===\nT\n===导语===\nL\n===正文===\nB\n===金句===\n\n===END===")).not.toBeNull();
    expect(parseSections("===标题===\nT\n===导语===\nL\n===内容===\nB\n===金句===\n\n===END===")).toBeNull(); // 「内容」≠「正文」
  });
});

describe("drift #87 · 正文剥掉「无说话人的时间戳区间」(用户报「末尾为什么有数字」)", () => {
  it("★★★ 真实线上案例:句末的 [00:50-03:41] 剥掉,句子干净收尾", () => {
    expect(stripRangeStamps("定价是每百万输入 token 10 美元、输出 50 美元 [00:50-03:41]。")).toBe("定价是每百万输入 token 10 美元、输出 50 美元。");
  });
  it("★★★ 多区间、半角/全角破折号都吃掉", () => {
    expect(stripRangeStamps("SaaS 的救星可能就是这个 [09:10-12:41, 28:51-29:24]。")).toBe("SaaS 的救星可能就是这个。");
    expect(stripRangeStamps("他这么说 [38:58–40:56]。")).toBe("他这么说。"); // en dash
  });
  it("★★★ 规范标注 [mm:ss 说话人] 绝不能被误删(它是可核对的断言,gate-facts D8 要用)", () => {
    const keep = "开车等红灯还得盯着笔记本 [06:25 Reynold Xin]。";
    expect(stripRangeStamps(keep)).toBe(keep);
    expect(stripRangeStamps("[00:00 主持人] 开场")).toBe("[00:00 主持人] 开场");
  });
  it("★★★ 裸时间戳 [06:26] 也剥(用户 2026-09-04 拍板「一并清掉」,30 集 644 处已清)", () => {
    expect(stripRangeStamps("他写下一份「AI 宣言」[06:26]。")).toBe("他写下一份「AI 宣言」。");
    expect(stripRangeStamps("彼此几乎不交流 [09:43]。")).toBe("彼此几乎不交流。");
  });
  it("★★★ 方括号里只要有说话人就整体保留 —— 判据是「有没有说话人」,不是「有没有时间戳」", () => {
    expect(stripRangeStamps("见 [注1] 说明")).toBe("见 [注1] 说明");
    expect(stripRangeStamps("[12:28 Conway] 说")).toBe("[12:28 Conway] 说");
  });
  it("★★ 括号内不跨行(GLM 020[1]:原用 \\s 会跨行匹配,比实际见过的形态宽)", () => {
    expect(stripRangeStamps("a [06:26\n] b")).toBe("a [06:26\n] b");
  });
  it("★ 空/无标记输入原样返回", () => {
    expect(stripRangeStamps("")).toBe("");
    expect(stripRangeStamps("干净正文,没有任何标记。")).toBe("干净正文,没有任何标记。");
  });
  it("★★★ 接线:parseSections 出口就已剥干净(不能只有函数没接上)", () => {
    const r = parseSections("===标题===\nT\n===导语===\nL\n===正文===\n定价 50 美元 [00:50-03:41]。\n===金句===\n\n===END===");
    expect(r!.digest_md).toBe("定价 50 美元。");
  });
});

describe("drift #93 · 金句 EN| 前缀缺失 + ===正文--- 分隔符(关思考后首班 2 集整篇作废)", () => {
  const dir = new URL("./fixtures/condense-bad-sep/", import.meta.url);
  it("★★★ 真实样本:pg 那集 28 块金句全无 EN| 前缀 → 原判 0 条;容错后 28 条、validate 全过", () => {
    const r = parseSections(readFileSync(new URL("sample4-2026-09-04-pg-product-loops-no-EN-prefix.txt", dir), "utf8"));
    expect(r).not.toBeNull();
    expect(r!.quotes.length).toBe(28);
    expect(r!.quotes[0].en.startsWith("For me, the difference is an agent")).toBe(true);
    expect(r!.quotes[0].speaker).toBe("Tyler Folkman");
  });
  it("★★★ 真实样本:indepth 那集 ===正文--- + 无 EN| → 容错后 20 条金句、正文完整", () => {
    const r = parseSections(readFileSync(new URL("sample5-2026-07-24-indepth-gamma-dash-sep-no-EN.txt", dir), "utf8"));
    expect(r).not.toBeNull();
    expect(r!.quotes.length).toBe(20);
    expect(r!.digest_md.length).toBeGreaterThan(3000);
  });
  it("★★ 容错只在「块里恰好剩一条候选行」时启用;多出两条不猜(宁可丢这一条金句)", () => {
    const raw = "===标题===\nT\n===导语===\nL\n===正文===\n" + "x".repeat(400) + "\n===金句===\n01:00 | A\nline one\nline two\nZH | 中\n\n02:00 | B\nonly line\nZH | 文\n===END===";
    const r = parseSections(raw)!;
    expect(r.quotes.length).toBe(1);
    expect(r.quotes[0].en).toBe("only line");
  });
});
