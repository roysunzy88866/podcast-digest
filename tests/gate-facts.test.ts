// C3 · D17(专名/数字回原文)+ D8(正文内联时间戳)闸门的真业务测试
//
// 纪律(C2 交付物审计教训:「防假绿单测自己就是假绿」——它没调被测代码,把逻辑在测试里重抄一遍,
// 回退实现照样全绿):本文件**只调被测函数**,不重抄任何判定逻辑;每条都能做变异验证
// (故意回退 gate-facts.mjs 的实现 → 测试必须挂)。
import { describe, it, expect } from "vitest";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  stripBackground,
  buildFactIndex,
  extractLatinTokens,
  extractDigestNumbers,
  findVagueQuantifiers,
  parseInlineTimestamps,
  checkInlineTimestamp,
  checkProperNoun,
  checkProse,
  gateFacts,
} from "../scripts/gate-facts.mjs";

// ── 最小转写稿 fixture:2 说话人、逐词时间戳 ──
const mkWords = (text: string, t0: number, speaker: string) =>
  text.split(" ").map((w, i) => ({ word: w, start: t0 + i, end: t0 + i + 1, speaker }));

const TRANSCRIPT = [
  { text: "Modo is a cloud platform with 2023 revenue", start: 0, end: 8, words: mkWords("Modo is a cloud platform with 2023 revenue", 0, "SPEAKER_00") },
  { text: "we saw ten times growth and a hundred customers", start: 10, end: 19, words: mkWords("we saw ten times growth and a hundred customers", 10, "SPEAKER_01") },
  { text: "Kubernetes was too hard to use", start: 20, end: 26, words: mkWords("Kubernetes was too hard to use", 20, "SPEAKER_00") },
  // 远端一段:把 maxEnd 撑到 ~610s,才测得了「区间长度上限(300s)」——
  // 否则 fixture 只有 26s,任何超宽区间都先被「超出转写稿范围」拦下,长度上限那条永远走不到(假绿)。
  { text: "and later we talked about pricing again", start: 600, end: 610, words: mkWords("and later we talked about pricing again", 600, "SPEAKER_00") },
];

// 注意 fixture 的隔离性:title_en/guest_titles 里**故意不含 "Modal"、不含 "agent"**。
// 否则真相源会从 meta 直接命中,「靠别名表召回误写形式」和「概念未出现即拦」两条就测不到真东西
// (首版 fixture 就踩了这个:title_en 写了 Modal → matchedForm 直接是 Modal,别名召回路径根本没走)。
// 「Acme」**只**出现在 title_en(guests/guest_titles/转写稿都没有)——用来钉死
// 「meta.title_en 也是真相源」这条独立成立。变异验证实测:没有它时,拿掉 title_en
// 照样全绿(因为 guests 里也有 Bubna),该路径根本没被测到。
// 这镜像集 2 的真实情况:转写稿只有名(Matei/Reynolds),姓「Zaharia/Xin」只在集标题里。
const META = {
  speaker_map: { SPEAKER_00: "Akshat Bubna", SPEAKER_01: "主持人" },
  title_en: "Why infrastructure must evolve — Akshat Bubna, Acme",
  guests: ["Akshat Bubna"],
  guest_titles: { "Akshat Bubna": "CTO" },
};

const ALIASES = {
  entities: [
    { id: "modal", type: "company", name: "Modal", file: "Modal", forms: ["Modal", "Modo", "moto"] },
    { id: "agent", type: "concept", name: "智能体 (Agent)", file: "智能体", forms: ["智能体", "agent", "agents"] },
    // ★ **多词 form** —— 必须有,否则 formHits 的 every/some 差别一条测试都碰不到。
    // 真别名表有 9 个多词 form(Modal Labs / Latent Space / Alien Space / chat gpt / CI CD…),
    // 而首版 fixture 的 forms 全是单词 → 独立变异验证实测:把 every 改成 some,33 条测试照样全绿(假绿)。
    // some 一旦生效,「Alien Space」只要原文出现过 "space" 就放行 —— 而 space 是极常见词。
    // 关键:form 里**一个词在原文、一个不在**("cloud" 在,"alien" 不在)——只有这样
    // every/some 才会给出不同答案。若两个词都不在,every 和 some 都判不过,变异照样存活。
    { id: "alien-cloud", type: "company", name: "Alien Cloud", file: "Alien Cloud", forms: ["Alien Cloud"] },
  ],
};

const ctx = () => buildFactIndex(TRANSCRIPT, META, ALIASES);

describe("stripBackground · 【背景】是声明过的 AI 补充,D17 不比对它(D8 仍要比对)", () => {
  it("剥掉【背景】整块,保留其余正文", () => {
    const md = "嘉宾说 Modal 很好。\n【背景】HTAP 是数据库界的圣杯,OLTP 与 OLAP 各有取舍。\n然后他说 Kubernetes 难用。";
    const out = stripBackground(md);
    expect(out).toContain("Modal");
    expect(out).toContain("Kubernetes");
    expect(out).not.toContain("HTAP");
    expect(out).not.toContain("OLTP");
  });

  it("没有【背景】时原样返回", () => {
    expect(stripBackground("纯正文 Modal")).toContain("Modal");
  });

  it("★ 行中间提到「【背景】」四个字的正文,不许整行免检(GLM 20260717-014[1] 逮到的真后门)", () => {
    // 首版用 includes('【背景】') → 这一行被整行剥光,行内的编造全部逃过 D17。
    // 即:只要把这四个字插进任意一行,那行就免检 = D17 的后门。
    const md = "我们讨论了【背景】知识,并虚构了公司 Snowflake";
    expect(stripBackground(md)).toContain("Snowflake");
  });

  it("★ 真正的【背景】块(行首,含 markdown 引用前缀)仍要剥掉", () => {
    expect(stripBackground("> 【背景】HTAP 是圣杯")).not.toContain("HTAP");
    expect(stripBackground("【背景】HTAP 是圣杯")).not.toContain("HTAP");
    expect(stripBackground("  >> 【背景】HTAP 是圣杯")).not.toContain("HTAP");
  });
});

describe("buildFactIndex · 真相源 = 转写稿 ∪ meta 有出处字段 ∪ 别名表", () => {
  it("转写稿里的词进索引", () => {
    expect(ctx().tokens.has("kubernetes")).toBe(true);
    expect(ctx().tokens.has("modo")).toBe(true);
  });

  it("★ meta.title_en 里的姓氏进索引(转写稿只有名,姓只在标题里 —— 集2 真实情况)", () => {
    // 转写稿从没出现 "Bubna",但集标题有 → 它有出处,不算编造
    expect(TRANSCRIPT.map((s) => s.text).join(" ")).not.toContain("Bubna");
    expect(ctx().tokens.has("bubna")).toBe(true);
  });

  it("★ 只靠 title_en 供给的专名也算有出处(钉死 title_en 这条路径本身)", () => {
    // Acme 不在转写稿、不在 guests、不在 guest_titles —— 唯一出处就是 title_en
    expect(TRANSCRIPT.map((s) => s.text).join(" ")).not.toContain("Acme");
    expect(META.guests.join()).not.toContain("Acme");
    expect(checkProperNoun("Acme", ctx()).pass).toBe(true);
  });

  it("阿拉伯数字进数字集", () => {
    expect(ctx().numbers.has(2023)).toBe(true);
  });

  it("★ 英文数字词归一化后进数字集(ten→10, hundred→100)", () => {
    expect(ctx().numbers.has(10)).toBe(true);
    expect(ctx().numbers.has(100)).toBe(true);
  });

  it("★ 年份口语归一化 twenty twenty two→2022(drift #11 授权标准里点名的一项)", () => {
    // 这一项 `[standard-change: 用户授权]` 白纸黑字写了,首版却**静默没做**:
    // composeNumberRun 是纯加法 → 20+20+2 = 42。独立审计逐条核标准时抓出。
    // 与 C2 静默丢掉 D17 同一种错 —— 而 D17 正是本片要还的债。
    // 注意别把两个年份写进同一句:`and` 会把它们连成**一个** run
    // (20+20+2+19+90+9=140 → >99 → 不认年份)。分句才测得到。
    const t = [
      { text: "it was twenty twenty two back then", start: 0, end: 6, words: mkWords("it was twenty twenty two back then", 0, "SPEAKER_00") },
      { text: "nineteen ninety nine was different", start: 10, end: 15, words: mkWords("nineteen ninety nine was different", 10, "SPEAKER_00") },
    ];
    const c = buildFactIndex(t, META, ALIASES);
    expect(c.numbers.has(2022)).toBe(true);
    expect(c.numbers.has(1999)).toBe(true);
  });
});

describe("checkProperNoun · D17 专名回原文(硬拦)", () => {
  it("命中转写稿 → 过", () => {
    expect(checkProperNoun("Kubernetes", ctx()).pass).toBe(true);
  });

  it("★ 经别名表的转写错形式命中 → 过(正文写正确名 Modal,转写稿只有误写 Modo)", () => {
    expect(TRANSCRIPT.map((s) => s.text).join(" ")).not.toContain("Modal");
    const r = checkProperNoun("Modal", ctx());
    expect(r.pass).toBe(true);
    expect(r.matchedForm).toBe("Modo"); // 靠别名表的误写形式召回
  });

  it("★ 凭空编造的公司名 → 拦(D17 的主职责)", () => {
    const r = checkProperNoun("Snowflake", ctx());
    expect(r.pass).toBe(false);
  });

  it("★ 多词 form 必须**每个词**都在原文出现,不能有一个就算(钉死 formHits 的 every)", () => {
    // fixture 转写稿有 "cloud"、没有 "alien" → 「Alien Cloud」正好一半命中。
    // every(正确):alien 不在 → 拦。some(变异):cloud 在 → 放行。这才测得出差别。
    const c = ctx();
    expect(c.tokens.has("cloud")).toBe(true);
    expect(c.tokens.has("alien")).toBe(false);
    expect(checkProperNoun("Alien Cloud", c).pass).toBe(false);
  });

  it("概念的中文名经别名表 en 形式回原文(智能体→agent)", () => {
    // fixture 转写稿没有 agent → 智能体也应判不过(证明它走的是真比对,不是无脑放行)
    expect(checkProperNoun("智能体", ctx()).pass).toBe(false);
  });
});

describe("D17 降误报(ADR 0013 · standard-change 2026-07-19):版本号/复数/缩写/单双字母/万亿单位", () => {
  // 专用 fixture:转写稿含 AlphaFold3 / GANs / Samsung / 160,000,专门钉边界
  const T = [
    {
      text: "we discussed AlphaFold3 and GANs and Samsung with 160,000 stars",
      start: 0,
      end: 12,
      words: mkWords("we discussed AlphaFold3 and GANs and Samsung with 160,000 stars", 0, "S0"),
    },
  ];
  const M = { speaker_map: { S0: "X" }, title_en: "", guests: [] };
  const c = () => buildFactIndex(T, M, { entities: [] });

  it("版本化实体:导读「AlphaFold」⊆ 转写稿「AlphaFold3」→ 放行(剥尾数字,≥5)", () => {
    expect(checkProperNoun("AlphaFold", c()).pass).toBe(true);
  });
  it("★ 边界:「Sam」⊄「Samsung」→ 仍拦(<5 不进版本化容错,防前缀泄漏)", () => {
    expect(checkProperNoun("Sam", c()).pass).toBe(false);
  });
  it("★ 边界:「Samsun」是「Samsung」字母前缀(尾非数字)→ 仍拦(只剥尾部纯数字才放行)", () => {
    expect(checkProperNoun("Samsun", c()).pass).toBe(false);
  });
  it("★ 边界:凭空编造、转写稿根本没有的名(「Fabricated」)→ 仍拦(降误报不破挡编造)", () => {
    expect(checkProperNoun("Fabricated", c()).pass).toBe(false);
  });
  it("★ 边界:短版本化实体<5 不召回(导读「GPT」,转写稿「GPT4」)→ 仍拦(安全侧宁缺毋滥·GLM 20260719-023[3])", () => {
    const t = [{ text: "we love GPT4 and o1 models", start: 0, end: 6, words: mkWords("we love GPT4 and o1 models", 0, "S0") }];
    const cc = buildFactIndex(t, M, { entities: [] });
    expect(checkProperNoun("GPT", cc).pass).toBe(false); // GPT 长度 3 < 5,不进版本化容错(短前缀不放行)
  });
  it("复数-s:导读「GAN」⇄ 转写稿「GANs」→ 放行", () => {
    expect(checkProperNoun("GAN", c()).pass).toBe(true);
  });
  it("通用缩写白名单 + 单双字母:CTO/G 不参与 D17,不因「未在原文」误报", () => {
    // CTO 在白名单、G 长度<3 → 都不进 nounResults;转写稿里也确实没有它们
    const r = checkProse("本集嘉宾是 CTO,谈了 G 参数与 API 设计", c(), { entities: [] });
    expect(r.failures.some((f: any) => f.kind === "D17-专名" && ["CTO", "G", "API"].includes(f.name))).toBe(false);
  });
  it("★ 白名单不越界:非白名单的编造专名(「Zorptron」)仍被 D17 拦", () => {
    const r = checkProse("本集提到了 Zorptron 这家公司", c(), { entities: [] });
    expect(r.failures.some((f: any) => f.kind === "D17-专名" && f.name === "Zorptron")).toBe(true);
  });
  // 相邻词拼接容错(standard-change 2026-07-20,D46):转写稿把 OpenAI 记成「open AI」两词 → 单词形式对不上,误报
  describe("★ 拼接容错:OpenAI ⇄ 稿里「open AI」(D46 降误报)", () => {
    const spaced = () =>
      buildFactIndex([{ text: "we tried open AI and open source models", start: 0, end: 6, words: mkWords("we tried open AI and open source models", 0, "S0") }], M, { entities: [] });
    const joined = () =>
      buildFactIndex([{ text: "OpenAI shipped a new model", start: 0, end: 5, words: mkWords("OpenAI shipped a new model", 0, "S0") }], M, { entities: [] });
    it("稿=「open AI」→ 导读单词「OpenAI」放行", () => {
      expect(checkProperNoun("OpenAI", spaced()).pass).toBe(true);
    });
    it("反向:稿=「OpenAI」→ 导读多词「open AI」放行", () => {
      expect(checkProperNoun("open AI", joined()).pass).toBe(true);
    });
    it("★ 不破挡编造:稿无「Zorptron」,拼接也拼不出 → 仍拦", () => {
      expect(checkProperNoun("Zorptron", spaced()).pass).toBe(false);
      expect(checkProperNoun("Zorptron", joined()).pass).toBe(false);
    });
    it("★ 短拼接<5 不进容错:防噪音(稿「a to」拼「ato」不放行随意 3 字母名)", () => {
      const c2 = buildFactIndex([{ text: "go a to b quickly", start: 0, end: 5, words: mkWords("go a to b quickly", 0, "S0") }], M, { entities: [] });
      expect(checkProperNoun("ato", c2).pass).toBe(false);
    });
  });
  it("中文万亿单位:导读「16万」= 160000(转写稿有 160,000)→ 命中;values 同时保原值 16(宽松)", () => {
    const n = extractDigestNumbers("GitHub 冲到 16万 颗星").find((x) => x.raw === "16万");
    expect(n?.values).toContain(160000);
    expect(n?.values).toContain(16);
  });
  it("★ 万单位不误放:导读「99万」缩放值 990000 与原值 99 都不在转写稿 → checkProse 应拦", () => {
    const r = checkProse("号称服务了 99万 用户", c(), { entities: [] });
    expect(r.failures.some((f: any) => f.kind === "D17-数字" && f.raw === "99万")).toBe(true);
  });
});

describe("extractDigestNumbers / findVagueQuantifiers · drift #11 授权口径", () => {
  it("抽出阿拉伯数字(含年份/量词后缀)", () => {
    const ns = extractDigestNumbers("2023 年营收增长 10 倍,拿下 100 个客户").map((x) => x.value);
    expect(ns).toContain(2023);
    expect(ns).toContain(10);
    expect(ns).toContain(100);
  });

  it("★ 模糊量词不进硬拦集(它们不是确定数字,逐字比对不适用)", () => {
    const ns = extractDigestNumbers("估值数十亿美元,只提升几个百分点").map((x) => x.value);
    expect(ns).toHaveLength(0);
  });

  it("★ 模糊量词进「待核清单」提醒层", () => {
    const v = findVagueQuantifiers("估值数十亿美元,只提升几个百分点");
    expect(v.length).toBeGreaterThan(0);
    expect(v.map((x) => x.raw).join()).toMatch(/数十亿|几个/);
  });
});

describe("parseInlineTimestamps · 4 种真实形状(取自真 digest,不是我猜的)", () => {
  const md = "甲 [00:34-02:17 Akshat Bubna] 乙 [10:03-10:34 swyx / Akshat Bubna] 丙 [37:57-38:47] 丁 [48:34 Akshat Bubna]";
  const ts = parseInlineTimestamps(md);

  it("四种都能解析", () => expect(ts).toHaveLength(4));
  it("区间 + 单说话人", () => {
    expect(ts[0].start).toBe(34);
    expect(ts[0].end).toBe(137);
    expect(ts[0].speakers).toEqual(["Akshat Bubna"]);
  });
  it("区间 + 双说话人(斜杠分隔)", () => {
    expect(ts[1].speakers).toEqual(["swyx", "Akshat Bubna"]);
  });
  it("区间 + 无说话人", () => expect(ts[2].speakers).toEqual([]));
  it("单点 + 说话人(start==end)", () => {
    expect(ts[3].start).toBe(48 * 60 + 34);
    expect(ts[3].end).toBe(48 * 60 + 34);
  });
});

describe("checkInlineTimestamp · D8(硬拦)+ 部分收窄 D19", () => {
  const c = ctx();

  it("区间真实 + 说话人对 → 过", () => {
    // 0-8s 是 SPEAKER_00 = Akshat Bubna
    expect(checkInlineTimestamp({ start: 0, end: 8, speakers: ["Akshat Bubna"], raw: "x" }, c).pass).toBe(true);
  });

  // 标准变更·用户授权 2026-07-19(ADR 0013):D8 说话人从硬拦降为软提醒 —— 仍检测到(speakerSoft 有值),
  // 但 pass:true 不拦发布。测试口径同步:验"检测到 + 不拦"。区间真实性(超范围/无词)仍硬拦、不变。
  it("★ 移花接木:区间真实但把别人的话挂在嘉宾名下 → 检测到(speakerSoft)但软·不拦", () => {
    // 10-19s 实际是 SPEAKER_01 = 主持人,却标成 Akshat Bubna
    const r = checkInlineTimestamp({ start: 10, end: 19, speakers: ["Akshat Bubna"], raw: "x" }, c);
    expect(r.pass).toBe(true); // 软化后不拦
    expect(r.speakerSoft).toMatch(/说话人/); // 但仍检测到张冠李戴,进待核
  });

  it("★ 区间超出转写稿范围(编造时间戳)→ 拦", () => {
    const r = checkInlineTimestamp({ start: 9000, end: 9100, speakers: ["Akshat Bubna"], raw: "x" }, c);
    expect(r.pass).toBe(false);
    // ⚠️ 断言必须钉死「超出范围」这一条判定本身。原写 /区间|范围/ **太松**:
    // 独立变异验证实测,删掉被测的那一行后,报错变成「该**区间**在转写稿里没有任何词」——
    // 照样含「区间」二字 → 测试照样绿。测试名字写着钉这一行,实际钉不住(假绿)。
    expect(r.reason).toMatch(/超出转写稿范围/);
  });

  it("★ 单点时间戳:靠宽限窗判「被标注者真在附近开口」(跨度≈一个词,不宽限则永远判不出)", () => {
    // 8s 处:第1段(Akshat)刚在 8s 收尾,单点直接比对只够碰到 1 个词 → 达不到 minWords。
    // 宽限窗后能看清这一带 Akshat 真开过口 → 过。真实案例见 gate-facts.mjs 注释(集1 [48:34]/[50:24]、集2 [06:25])。
    const r = checkInlineTimestamp({ start: 8, end: 8, speakers: ["Akshat Bubna"], raw: "x" }, c);
    expect(r.pass).toBe(true);
  });

  it("★ 单点不要求瞬时占主导(否则旁人一句插话/逐词噪声就误判)", () => {
    // 10~19s 主说话人是主持人,但 Akshat 在 ±5s 窗内(0~8s)真开过口 → 单点形式放行。
    // 这是**有意为之的弱化**:单点 [t X] 只断言「X 大概在 t 附近说过」,不断言「t 那一刻 X 占主导」。
    // 代价已在 gate-facts.mjs 与 docs 交底:单点形式的 D8 弱于区间形式。
    const r = checkInlineTimestamp({ start: 11, end: 11, speakers: ["Akshat Bubna"], raw: "x" }, c);
    expect(r.pass).toBe(true);
  });

  it("★ 但单点仍要拦「被标注者附近根本没开口」(移花接木的硬核心不放过)", () => {
    // 20~26s 只有 Akshat;把话安给附近完全没开口的主持人 → 拦
    const r = checkInlineTimestamp({ start: 24, end: 24, speakers: ["主持人"], raw: "x" }, c);
    expect(r.pass).toBe(true); // 软化后不拦(ADR 0013)
    expect(r.speakerSoft).toMatch(/没讲话|说话人/); // 仍检测到附近没开口
  });

  it("★ 区间形式仍是强判定:主说话人被隐去照拦(弱化只限单点)", () => {
    const r = checkInlineTimestamp({ start: 0, end: 19, speakers: ["Akshat Bubna"], raw: "x" }, c);
    expect(r.pass).toBe(true); // 软化后不拦(ADR 0013)
    expect(r.speakerSoft).toMatch(/主说话人/); // 仍检测到主说话人被隐去
  });

  it("★ 区间在范围内、落在静音空档、且没标说话人 → 仍要拦(「区间内无词」这条判定的唯一守区)", () => {
    // fixture 里 8s~10s 是空档(第1段词到 8s 止,第2段词从 10s 起);用区间(跨度≥1s)故不吃宽限窗。
    // 为什么必须**不标说话人**:标了说话人时,「假区间」会被后面的 phantom 检查顺带拦下,
    // 「区间内无词」这条判定并不承重 —— 变异验证实测确认过:删掉它,标了说话人的用例照样绿。
    // 只有「没标说话人」这条路径才真正依赖它:否则一个凭空编造、没人认领的区间会被直接放行。
    const r = checkInlineTimestamp({ start: 8.2, end: 9.8, speakers: [], raw: "x" }, c);
    expect(r.pass).toBe(false);
    expect(r.reason).toMatch(/没有任何词|编造区间/);
  });

  it("无说话人标注的区间:只校验区间真实性,不校验说话人", () => {
    expect(checkInlineTimestamp({ start: 0, end: 8, speakers: [], raw: "x" }, c).pass).toBe(true);
  });

  it("跨说话人区间标注双说话人 → 过", () => {
    const r = checkInlineTimestamp({ start: 0, end: 19, speakers: ["Akshat Bubna", "主持人"], raw: "x" }, c);
    expect(r.pass).toBe(true);
  });

  // ↓ 主说话人口径(Gherkin 5②)。首版写成「集合完全相等」,真数据 23 条挂 13 条,
  //   全是长区间里主持人一句「Yeah」→ 整段判挂。那会让闸门天天误报→天天放行→沦为摆设。
  //   放宽的同时必须钉死:D19 那类攻击不能因此漏网。
  it("★ 放宽后仍要拦:主说话人被隐去(只标次要插话者)→ 拦", () => {
    // 0~19s 里主持人 9 词 > Akshat 8 词 → 主说话人是主持人,却只标 Akshat
    const r = checkInlineTimestamp({ start: 0, end: 19, speakers: ["Akshat Bubna"], raw: "x" }, c);
    expect(r.pass).toBe(true); // 软化后不拦(ADR 0013)
    expect(r.speakerSoft).toMatch(/主说话人/); // 仍检测到主说话人被隐去
  });

  it("★ 放宽的正当性:长区间里的次要插话者未被标注 → 不该误报", () => {
    // 造一个「Akshat 占绝大多数 + 主持人插一句」的区间:标注主说话人即可,不必列全
    const stream = [
      ...Array.from({ length: 20 }, (_, i) => ({ norm: "w", raw: "w", start: i, end: i + 1, speaker: "SPEAKER_00", seg: 0 })),
      { norm: "yeah", raw: "yeah", start: 20, end: 21, speaker: "SPEAKER_01", seg: 1 },
      { norm: "right", raw: "right", start: 21, end: 22, speaker: "SPEAKER_01", seg: 1 },
      ...Array.from({ length: 20 }, (_, i) => ({ norm: "w", raw: "w", start: 22 + i, end: 23 + i, speaker: "SPEAKER_00", seg: 2 })),
    ];
    const c2 = { ...c, stream, maxEnd: 42 };
    const r = checkInlineTimestamp({ start: 0, end: 42, speakers: ["Akshat Bubna"], raw: "x" }, c2);
    expect(r.pass).toBe(true);
    expect(r.dominant).toBe("Akshat Bubna");
  });
});

describe("extractLatinTokens · 从中文正文里挑拉丁串", () => {
  it("挑出专名,跳过纯数字", () => {
    const t = extractLatinTokens("Modal 用 Kubernetes,2023 年增长");
    expect(t).toContain("Modal");
    expect(t).toContain("Kubernetes");
    expect(t.join()).not.toMatch(/2023/);
  });
});

// ── gateFacts 端到端:真调被测代码 + 临时目录喂 fixture ──
// 为什么必须有这一层:上面那些是**零件测试**。变异验证实测证明,只有零件测试时,
// 把 gateFacts 里的数字判定改成 `pass: true`(放行一切编造数字)→ 24 个测试照样全绿 = 假绿。
// 零件对 ≠ 闸门真拦得住。以下每条都是「造一次真攻击,断言它被拦」。
describe("gateFacts · 端到端拦截(每条 = 一次真攻击)", () => {
  const writeEp = (name: string, digestMd: string, quotes: any[] = []) => {
    const dir = mkdtempSync(join(tmpdir(), `c3-facts-${name}-`));
    writeFileSync(join(dir, "transcript.en.json"), JSON.stringify(TRANSCRIPT));
    writeFileSync(join(dir, "meta.json"), JSON.stringify({ ...META, id: name }));
    writeFileSync(join(dir, "digest.json"), JSON.stringify({ tldr: "t", digest_md: digestMd, quotes }));
    const ap = join(dir, "aliases.json");
    writeFileSync(ap, JSON.stringify(ALIASES));
    return { dir, aliasesPath: ap };
  };

  it("干净正文(专名/数字/时间戳都有出处)→ 过", () => {
    const { dir, aliasesPath } = writeEp("clean", "嘉宾讲了 Kubernetes 太难用 [00:20-00:26 Akshat Bubna],还提到 2023 年的事。");
    const r = gateFacts(dir, { aliasesPath });
    expect(r.pass).toBe(true);
  });

  // change 2(用户 AskUserQuestion 选「坏集只隔离」):实体 how_described 事实层从批级挪到逐集,
  // 一条实体描述编造数字/专名 → 本集当场不过(→ 被 main 隔离),不漏到批级实体层连坐整批。
  // 镜像 run 29801188491:04-05 的 Anthropic「190亿」无出处,却一条挡下全批。
  it("★ change 2:实体 how_described 编造数字 → 逐集 gate-facts 拦(不连坐全批)", () => {
    const { dir, aliasesPath } = writeEp("entfact", "嘉宾讲了 Kubernetes 太难用 [00:20-00:26 Akshat Bubna]。"); // 导读干净
    writeFileSync(join(dir, "entities.json"), JSON.stringify({
      entities: [{ id: "modal", name: "Modal", file: "Modal", type: "company", how_described: "估值 8888 亿的公司" }],
    }));
    const r = gateFacts(dir, { aliasesPath });
    expect(r.pass).toBe(false);
    expect(r.failures.some((f: any) => f.kind === "D17-数字" && /Modal/.test(f.reason ?? ""))).toBe(true);
  });
  it("★ 实体 how_described 干净 → 不误拦", () => {
    const { dir, aliasesPath } = writeEp("entok", "嘉宾讲了 Kubernetes 太难用 [00:20-00:26 Akshat Bubna]。");
    writeFileSync(join(dir, "entities.json"), JSON.stringify({
      entities: [{ id: "kubernetes", name: "Kubernetes", file: "Kubernetes", type: "concept", how_described: "被说太难用" }],
    }));
    expect(gateFacts(dir, { aliasesPath }).pass).toBe(true);
  });
  it("★ 无 entities.json(C2 期)→ 不因缺件报错,仍按导读判", () => {
    const { dir, aliasesPath } = writeEp("noent", "嘉宾讲了 Kubernetes 太难用 [00:20-00:26 Akshat Bubna]。");
    expect(() => gateFacts(dir, { aliasesPath })).not.toThrow();
    expect(gateFacts(dir, { aliasesPath }).pass).toBe(true);
  });

  it("★ 攻击A:正文塞进一个转写稿里根本没有的公司名 → 拦", () => {
    const { dir, aliasesPath } = writeEp("noun", "嘉宾说他们要和 Snowflake 竞争。");
    const r = gateFacts(dir, { aliasesPath });
    expect(r.pass).toBe(false);
    expect(r.failures.some((f: any) => f.kind === "D17-专名" && f.name === "Snowflake")).toBe(true);
  });

  it("★ 攻击B:正文编造一个原文没有的数字 → 拦(变异验证抓到的缺口,补此条)", () => {
    const { dir, aliasesPath } = writeEp("num", "嘉宾说他们服务了 7777 个客户。");
    const r = gateFacts(dir, { aliasesPath });
    expect(r.pass).toBe(false);
    expect(r.failures.some((f: any) => f.kind === "D17-数字" && f.raw === "7777")).toBe(true);
  });

  // 标准变更·用户授权 2026-07-19(ADR 0013):移花接木(真时间戳+错说话人=张冠李戴)从硬拦降为软提醒 →
  //   仍检测到(进 speakerWarn 待核),但不拦发布。用户明文接受"偶发张冠李戴可能上公网"。
  //   ⚠️ 编造/不存在的时间戳区间(攻击D、洞2b)仍是区间真实性硬拦,不变。
  it("★ 攻击C:移花接木——把主持人说的话挂到嘉宾名下(真时间戳)→ 检测到(speakerWarn)但软·不拦", () => {
    // 10~19s 实际是 SPEAKER_01=主持人
    const { dir, aliasesPath } = writeEp("d19", "嘉宾提出了这个洞见 [00:10-00:19 Akshat Bubna]。");
    const r = gateFacts(dir, { aliasesPath });
    expect(r.pass).toBe(true); // 软化后不拦
    expect(r.speakerWarn.length).toBeGreaterThan(0); // 但仍检测到张冠李戴,进待核
  });

  it("★ 攻击D:编造时间戳(区间根本不存在)→ 拦", () => {
    const { dir, aliasesPath } = writeEp("ts", "他后来说 [99:00-99:30 Akshat Bubna]。");
    const r = gateFacts(dir, { aliasesPath });
    expect(r.pass).toBe(false);
    expect(r.failures.some((f: any) => f.kind === "D8-时间戳")).toBe(true);
  });

  it("★ 端到端复现 GLM 20260717-014[1]:靠行内插「【背景】」免检 → 必须仍被拦", () => {
    const { dir, aliasesPath } = writeEp("bgbypass", "我们讨论了【背景】知识,并虚构了公司 Snowflake。");
    const r = gateFacts(dir, { aliasesPath });
    expect(r.pass).toBe(false);
    expect(r.failures.some((f: any) => f.name === "Snowflake")).toBe(true);
  });

  it("★ 【背景】里的外部知识不被 D17 误杀,但其中的时间戳仍被 D8 校验", () => {
    // Snowflake 在【背景】里 → D17 放行(声明过的 AI 补充);但同块里的假时间戳仍要拦
    const ok = writeEp("bg1", "【背景】Snowflake 是另一家数据公司,HTAP 是圣杯。");
    expect(gateFacts(ok.dir, { aliasesPath: ok.aliasesPath }).pass).toBe(true);

    const bad = writeEp("bg2", "【背景】Snowflake 是另一家数据公司 [99:00-99:30 Akshat Bubna]。");
    const r = gateFacts(bad.dir, { aliasesPath: bad.aliasesPath });
    expect(r.pass).toBe(false);
    expect(r.failures.every((f: any) => f.kind === "D8-时间戳")).toBe(true); // 只因时间戳挂,不因 Snowflake
  });

  // ── 以下每条 = 独立对抗审计打穿过的一个洞,修完钉死,防回归 ──
  it("★ 洞1 中文专名:写「雪花」不能比写「Snowflake」更容易过(读者读的正是中文侧)", () => {
    const en = writeEp("cn-en", "他们要和 Snowflake 竞争。");
    expect(gateFacts(en.dir, { aliasesPath: en.aliasesPath }).pass).toBe(false);
    // 修前:中文专名压根不进抽取器 → 专名 0/0 → ✅ 全过
    const cn = writeEp("cn-cn", "他们要和雪花与甲骨文竞争,英伟达也参与了融资。");
    expect(gateFacts(cn.dir, { aliasesPath: cn.aliasesPath }).pass).toBe(false);
  });

  it("★ 洞2a 时间戳不在括号开头 → 不能因此对 D8 隐形", () => {
    // 修前:stripTimestamps 认「括号里任意位置有 mm:ss」就整块剥掉(D17 免检),
    // 而 parseInlineTimestamps 要求 mm:ss 在开头才解析(D8 不查)→ 裂缝里两边都不查。
    // 10~19s 实际是主持人。
    const { dir, aliasesPath } = writeEp("ts-order", "嘉宾提出了这个洞见 [Akshat Bubna 00:10-00:19]。");
    const r = gateFacts(dir, { aliasesPath });
    // 洞2a 的核心是"时间戳不能因括号顺序对 D8 隐形"—— 现 D8 说话人软化,验它仍被 D8 看见(进 speakerWarn)
    expect(r.speakerWarn.length).toBeGreaterThan(0);
  });

  it("★ 洞2b 括号里藏的编造不能随时间戳一起进免检区", () => {
    // 修前:整个括号被剥光 → 里面的 Snowflake 和 9999 全部隐形
    const { dir, aliasesPath } = writeEp("ts-hide", "详见 [详见 Snowflake 的 12:34 联合报告,估值 9999 亿美元]。");
    const r = gateFacts(dir, { aliasesPath });
    expect(r.pass).toBe(false);
    expect(r.failures.some((f: any) => f.name === "Snowflake" || f.raw === "9999")).toBe(true);
  });

  it("★ 洞2c 全角括号的时间戳也要被 D8 看见(中文稿里【】极自然)", () => {
    const { dir, aliasesPath } = writeEp("ts-cjk", "嘉宾提出了这个洞见【00:10-00:19 Akshat Bubna】。");
    const r = gateFacts(dir, { aliasesPath });
    // 洞2c 的核心是"全角括号时间戳也要被 D8 看见"—— 现 D8 说话人软化,验它仍被看见(进 speakerWarn)
    expect(r.speakerWarn.length).toBeGreaterThan(0);
  });

  it("★ 洞3 宽区间不能用来蒙混:全集主说话人恰恰是嘉宾", () => {
    // 修前:只校验 start、区间长度无上限 → [00:00-99:59 嘉宾] 恒过,
    // 而 D8/D19 声称要抓的正是「把主持人的话安到嘉宾头上」
    const { dir, aliasesPath } = writeEp("ts-wide", "他说了这个 [00:00-99:59 Akshat Bubna]。");
    expect(gateFacts(dir, { aliasesPath }).pass).toBe(false);
  });

  it("★ 洞3b 区间长度上限本身要生效(区间在范围内、但宽到 8 分钟)", () => {
    // 与洞3 不同:这条**没有超出转写稿范围**(fixture maxEnd≈610s),只有「长度上限」这一条能拦它。
    // 变异验证实测:没有这条时,拆掉长度上限 → 测试照样全绿(洞3 被「超范围」提前拦下了)。
    // 语义:00:00-08:00 标 Akshat —— 区间里主持人也讲了,但嘉宾是主说话人 → 唯一该拦它的理由就是「太宽=等于没指明出处」。
    const { dir, aliasesPath } = writeEp("ts-span", "他说了这个 [00:00-08:00 Akshat Bubna]。");
    const r = gateFacts(dir, { aliasesPath });
    expect(r.pass).toBe(false);
    expect(r.failures.some((f: any) => /区间过宽/.test(f.reason ?? ""))).toBe(true);
  });

  it("★ 洞6b fail-closed 的承重那道:digest_md 存在但为空/非字符串", () => {
    // 变异验证发现:hasOwnProperty 那道其实被 !md.trim() 兜住了(两道都 fail-closed,后者承重)。
    // 这条专钉承重那道,免得以为有两层保护、实际只有一层。
    const dir = mkdtempSync(join(tmpdir(), "c3-emptymd-"));
    writeFileSync(join(dir, "transcript.en.json"), JSON.stringify(TRANSCRIPT));
    writeFileSync(join(dir, "meta.json"), JSON.stringify(META));
    const ap = join(dir, "aliases.json");
    writeFileSync(ap, JSON.stringify(ALIASES));
    for (const bad of ["", "   ", null]) {
      writeFileSync(join(dir, "digest.json"), JSON.stringify({ tldr: "t", digest_md: bad, quotes: [] }));
      expect(gateFacts(dir, { aliasesPath: ap }).pass).toBe(false);
    }
  });

  it("★ 洞6 fail-closed:没东西可查 ≠ 查过了没问题", () => {
    // 修前:digest_md 缺失/字段名打错 → 0 个检查项 → failures.length===0 恒真 → ✅ 全过
    // 本项目已在 gate.mjs / gate-all.mjs 上打过两次同样的补丁,gate-facts 自己漏了第三次
    const dir = mkdtempSync(join(tmpdir(), "c3-noscope-"));
    writeFileSync(join(dir, "transcript.en.json"), JSON.stringify(TRANSCRIPT));
    writeFileSync(join(dir, "meta.json"), JSON.stringify(META));
    const ap = join(dir, "aliases.json");
    writeFileSync(ap, JSON.stringify(ALIASES));

    writeFileSync(join(dir, "digest.json"), JSON.stringify({ tldr: "t", quotes: [] })); // 缺 digest_md
    expect(gateFacts(dir, { aliasesPath: ap }).pass).toBe(false);

    writeFileSync(join(dir, "digest.json"), JSON.stringify({ tldr: "t", digestMd: "Snowflake 7777", quotes: [] })); // 字段名打错
    expect(gateFacts(dir, { aliasesPath: ap }).pass).toBe(false);

    writeFileSync(join(dir, "digest.json"), JSON.stringify({ tldr: "t", digest_md: "   ", quotes: [] })); // 空正文
    expect(gateFacts(dir, { aliasesPath: ap }).pass).toBe(false);
  });

  it("★ 多行【背景】引用块:整块免检,不是只免第一行", () => {
    // 修前只剥行首命中的那一行 → 与 D26 声明的「【背景】块免检」名实不符,且判据取决于换行位置
    const { dir, aliasesPath } = writeEp("bg-multi", "> 【背景】HTAP 是数据库界的圣杯。\n> Snowflake 和 Oracle 都试过,都没做成。\n嘉宾讲了 Kubernetes。");
    expect(gateFacts(dir, { aliasesPath }).pass).toBe(true);
  });

  it("★ 时间戳里的分秒数字不该被当成「编造的事实数字」(防自伤误报)", () => {
    // [00:20-00:26] 里的 20/26 不在转写稿数字集里,但它们是溯源坐标不是事实数字
    const { dir, aliasesPath } = writeEp("tsnum", "他讲了 Kubernetes [00:20-00:26 Akshat Bubna]。");
    expect(gateFacts(dir, { aliasesPath }).pass).toBe(true);
  });

  it("★ 数字成语(7×24)不该被当成事实数字(集2 真实误报,drift #11 同理)", () => {
    const { dir, aliasesPath } = writeEp("idiom", "那种要 7×24 小时值守的运维服务才是专有商业化的范畴。");
    expect(gateFacts(dir, { aliasesPath }).pass).toBe(true);
  });

  it("★ 但成语豁免不能扩大化:成语之外的编造数字照拦", () => {
    const { dir, aliasesPath } = writeEp("idiom2", "要 7×24 小时值守,他们有 7777 个客户。");
    const r = gateFacts(dir, { aliasesPath });
    expect(r.pass).toBe(false);
    expect(r.failures.some((f: any) => f.raw === "7777")).toBe(true);
  });
});

describe("数值双语匹配:digit+量级词(19 billion)↔ 中文（190亿）—— 救翻译型误判", () => {
  it("★ 转写稿「19 billion」索引应含 1.9e10(=190亿),现在缺 = 误判根因", () => {
    const idx = buildFactIndex([{ text: "Anthropic went from 1 billion to 19 billion in revenue", start: 0, end: 5, words: [] }], {}, { entities: [] });
    expect(idx.numbers.has(19e9)).toBe(true); // 19 billion → 1.9e10
    expect(idx.numbers.has(1.7e6)).toBe(false); // 无关值不该在
  });
  it("★ 1.7 million → 1.7e6(= 170万)", () => {
    const idx = buildFactIndex([{ text: "they had 1.7 million users", start: 0, end: 3, words: [] }], {}, { entities: [] });
    expect(idx.numbers.has(1.7e6)).toBe(true);
  });
  it("★ 端到端:digest「190亿」对上转写稿「19 billion」→ 不判编造(救回 04-05 类)", () => {
    const ctx = buildFactIndex([{ text: "revenue grew to 19 billion dollars this year", start: 0, end: 4, words: [] }], {}, { entities: [] });
    const { failures } = checkProse("公司今年收入达到 190亿 美元。", ctx, { entities: [] });
    expect(failures.some((f: any) => f.kind === "D17-数字")).toBe(false);
  });
  it("★ 真编的数字仍拦:转写稿无任何对应量级 → 190亿 照样判编造", () => {
    const ctx = buildFactIndex([{ text: "we had a good year with modest growth", start: 0, end: 4, words: [] }], {}, { entities: [] });
    const { failures } = checkProse("公司今年收入达到 190亿 美元。", ctx, { entities: [] });
    expect(failures.some((f: any) => f.kind === "D17-数字")).toBe(true);
  });
});
