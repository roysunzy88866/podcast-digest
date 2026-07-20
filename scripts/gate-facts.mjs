#!/usr/bin/env node
// C3 机器闸门 · D17(专名/数字回原文比对)+ D8(正文内联时间戳校验)
//
// 补的是 C2 静默丢掉的那一层:需求共识 ④ 第 1 级机器闸门明写
// 「数字/日期/人名/机构名/专名 确定性回原文比对(新增,零成本零幻觉)」。
// 与 C3 的实体识别同源(都要先认出专名),故一起做。
//
// ── 口径(drift #11,[standard-change: 用户授权 2026-07-17])──
//   硬拦:专名(人名/机构名/技术名) + 能归一化的确定数字(阿拉伯数字 ↔ 英文数字词 ten→10)
//   提醒:模糊量词(数十亿/几个百分点)—— 本就不是确定数字,逐字比对不适用 → 进待核清单,不卡提交
//   逃生:误报走人工复核放行 + 留痕(照 C2 Scenario 4a 既有做法),放行不改硬判定本身
//
// ── 真相源 = 转写稿 ∪ meta 有出处字段 ∪ 别名表 ──
//   为什么不只是转写稿:集 2 实测,转写稿里只有名(Matei/Reynolds)没有姓,
//   「Zaharia」「Xin」只出现在集标题(meta.title_en,取自 Substack API)。
//   只拿转写稿当真相源 → 会把正确的姓氏误判成编造。meta 那些字段同样有出处,同属真相。
//
// ── 两条诚实边界(不吹) ──
//   ① 【背景】块**不做** D17 比对:它是共识明定、且对读者明确标注的「AI 补充背景」,
//      内容本就来自模型世界知识(HTAP 全称/第二系统综合征),拿转写稿比对是范畴错误。
//      代价:【背景】是 D17 够不着的洞,靠「对读者标注 + 事后可查」兜(项目哲学:事后可查＞事前拦截)。
//      但 D8 **照查**【背景】里的时间戳——时间戳是「他在这一刻说过」的断言,与块类型无关。
//   ② D17 只证「这个名字/数字在原文出现过」,证不了「这句话是这个人说的/没被断章取义」。
//      D19 只被**部分收窄**(D8 抓得住「挂错说话人」那类),不宣称闭合;D15/D16 口径不变。
import { readFileSync, realpathSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { norm, normName, buildWordStream, parseTs } from "./gate.mjs";

/**
 * 【背景】= 共识明定的 AI 补充块(对读者已标注)→ D17 不比对它。整行剥掉。
 *
 * ⚠️ 必须**只认行首标记**(允许 markdown 引用前缀 `>` 与空白),不能用 `includes('【背景】')`:
 * 首版就是 includes,被 GLM 检查员 20260717-014[1] 逮到 —— 实测
 * 「我们讨论了【背景】知识,并虚构了公司 Snowflake」整行被剥光,**该行所有编造全部逃过 D17**。
 * 即:只要把「【背景】」四个字插进任意一行,那行就免检 —— 等于给 D17 开了个后门。
 * 现在只剥「整行就是一个【背景】块」的行,行中间提到这四个字的正文照查。
 */
const BACKGROUND_LINE_RE = /^\s*(?:>+\s*)*(?:[-*+]\s*)?【背景】/;
/** 引用块的后续行(`> …`)—— markdown 引用块跨行完全合法,prompt 说的也是「用 > 【背景】… 引用**块**包裹」 */
const QUOTE_CONT_RE = /^\s*>+/;

/**
 * 剥掉【背景】**块**(不只是【背景】那一行)。
 *
 * ⚠️ 首版只剥行首命中的那一行,与 D26 声明的「【背景】**块**免检」名实不符,两头都错:
 *   · 误报:多行引用块的第 2 行(`> Snowflake 和 Oracle 都试过`)照样被 D17 拦 → 冤枉
 *   · 漏检:反过来说,块内第 2 行的编造**能**被拦,第 1 行的却免检 —— 判据取决于换行位置,荒谬
 * 现在:从【背景】行起,把紧随其后的引用续行一并视为同一块。
 * 非引用块形式的裸行【背景】仍只剥该行(无法界定它到哪结束 —— 这是格式约束,prompt 已要求用 > 包裹)。
 */
export function stripBackground(md) {
  const lines = String(md).split("\n");
  const out = [];
  let inBg = false;
  for (const line of lines) {
    if (BACKGROUND_LINE_RE.test(line)) {
      inBg = QUOTE_CONT_RE.test(line); // 只有引用块形式才继续吃后续行
      continue;
    }
    if (inBg) {
      if (QUOTE_CONT_RE.test(line)) continue; // 同一个引用块的后续行 → 一并免检
      inBg = false;
    }
    out.push(line);
  }
  return out.join("\n");
}

const NUM_WORDS = {
  zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
  ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16,
  seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50,
  sixty: 60, seventy: 70, eighty: 80, ninety: 90,
};
const SCALES = { hundred: 100, thousand: 1000, million: 1e6, billion: 1e9 };

/** 一串英文数字词 → 数值("a hundred"→100, "twenty five"→25, "five hundred thousand"→500000) */
function composeNumberRun(words) {
  let total = 0;
  let current = 0;
  let seen = false;
  for (const w of words) {
    if (NUM_WORDS[w] != null) {
      current += NUM_WORDS[w];
      seen = true;
    } else if (w === "hundred") {
      current = (current || 1) * 100;
      seen = true;
    } else if (SCALES[w]) {
      total += (current || 1) * SCALES[w];
      current = 0;
      seen = true;
    }
  }
  return seen ? total + current : null;
}

/**
 * 年份口语 → 数值:"twenty twenty two"→2022 / "twenty twenty"→2020 / "nineteen ninety nine"→1999。
 *
 * ⚠️ **这一项是 drift #11 的 `[standard-change: 用户授权]` 里点名要求的**
 * (原文:「阿拉伯数字/年份 ↔ 英文数字词 ten→10、**twenty twenty two→2022**」),
 * 而首版 `composeNumberRun` 是纯加法(20+20+2=**42**),**静默没做**。
 * 独立审计逐条核标准时抓出。这与 C2 静默丢掉 D17 是同一种错 —— 而 D17 正是本片要还的债。
 * 方向上原本是 fail-safe(会误报不会漏放),但「用户授权的标准里点名的一项没实现」不该靠运气兜:
 * 集1 转写稿恰好没有口语年份,所以没咬到。
 */
function composeYearRun(words) {
  if (words.length < 2) return null;
  const head = NUM_WORDS[words[0]];
  if (head !== 19 && head !== 20) return null;
  const rest = composeNumberRun(words.slice(1));
  if (rest == null || rest < 0 || rest > 99) return null;
  return head * 100 + rest;
}

/** 从一段英文文本收集「出现过的数字」:阿拉伯数字 + 英文数字词(单个值 + 相邻组合值 + 年份口语) */
function collectNumbers(text, into) {
  // 阿拉伯数字(含千分位逗号与小数)
  for (const m of String(text).matchAll(/\d[\d,]*(?:\.\d+)?/g)) {
    const v = Number(m[0].replace(/,/g, "").replace(/\.$/, ""));
    if (Number.isFinite(v)) into.add(v);
  }
  // 英文数字词
  const toks = String(text).toLowerCase().split(/[^a-z]+/).filter(Boolean);
  let run = [];
  const flush = () => {
    if (run.length) {
      const v = composeNumberRun(run);
      if (v != null) into.add(v);
      const y = composeYearRun(run); // drift #11 点名要求:twenty twenty two → 2022
      if (y != null) into.add(y);
      run = [];
    }
  };
  for (const t of toks) {
    if (NUM_WORDS[t] != null || SCALES[t] || t === "a" || t === "and") {
      // 单个词自身的值也算「原文出现过」(ten→10、hundred→100)
      if (NUM_WORDS[t] != null) into.add(NUM_WORDS[t]);
      if (SCALES[t]) into.add(SCALES[t]);
      if (t === "a" || t === "and") {
        if (!run.length) continue; // 别让孤立的 a/and 起头
      }
      run.push(t);
    } else flush();
  }
  flush();
}

/**
 * 建事实索引 = 真相源的机器可查形式。
 * 返回 { tokens:Set<string 小写词>, numbers:Set<number>, stream, speakerMap, aliases, maxEnd }
 */
export function buildFactIndex(transcript, meta, aliases) {
  const tokens = new Set();
  const numbers = new Set();

  const texts = [];
  for (const seg of transcript) texts.push(seg.text ?? "");

  // meta 里**有出处**的字段同属真相源(集标题来自 Substack API;guests/guest_titles 由标题派生)
  if (meta?.title_en) texts.push(meta.title_en);
  for (const g of meta?.guests ?? []) texts.push(g);
  for (const [k, v] of Object.entries(meta?.guest_titles ?? {})) texts.push(`${k} ${v}`);
  if (meta?.podcast) texts.push(meta.podcast);
  for (const name of Object.values(meta?.speaker_map ?? {})) texts.push(String(name));

  // concats = 相邻词拼接(标准变更·用户授权 2026-07-20,D46):
  //   转写稿把「OpenAI」记成「open AI」两词时,单词形式对不上 → 把相邻 2/3 词的拼接也当真相源,
  //   让「open AI ↔ OpenAI」同实体不同空格能命中。只放"稿里真相邻出现过的拼接"(≥5 长),不放全新编造名。
  const concats = new Set();
  for (const t of texts) {
    const ws = norm(t);
    for (const w of ws) tokens.add(w);
    // 门槛 ≥6:砍掉「a+long=along」这类短常用词拼接噪音,同时保留 openai(6)/github(6)(GLM 20260720-006[2])
    for (let i = 0; i < ws.length; i++) {
      if (ws[i + 1]) {
        const two = ws[i] + ws[i + 1];
        if (two.length >= 6) concats.add(two);
        if (ws[i + 2]) {
          const three = two + ws[i + 2];
          if (three.length >= 6) concats.add(three);
        }
      }
    }
    collectNumbers(t, numbers);
  }

  const stream = buildWordStream(transcript);
  const maxEnd = stream.length ? Math.max(...stream.map((w) => w.end)) : 0;

  return { tokens, numbers, concats, stream, speakerMap: meta?.speaker_map ?? {}, aliases: aliases ?? { entities: [] }, maxEnd };
}

/** 单个归一化词是否命中真相源。含「版本化实体」容错(标准变更·用户授权 2026-07-19):
 *  导读写 AlphaFold、转写稿是 AlphaFold3 → 只剥尾部数字、且词长 ≥5 才放行(短词不放行,防「Sam⊆Samsung」误放)。
 *  编造一个真相源里根本没有的全新名字,仍会被挡(它不是任何真词的"去掉尾数字"形)。 */
function tokenHit(w, tokens, concats) {
  if (tokens.has(w)) return true;
  // 相邻词拼接容错(标准变更·用户授权 2026-07-20,D46):OpenAI ⇄ 稿里的 open AI
  // ≥5 长度守卫(防御性,与下方版本化容错一致;concats 上游已 ≥6,此处再兜一层防未来误用,GLM 006[3])
  if (concats && w.length >= 5 && concats.has(w)) return true;
  // 复数-s 容错(标准变更·用户授权):导读 GAN ⇄ 转写稿 GANs、flag ⇄ flags(加/去尾 s 不放行全新编造名)
  if (w.length >= 3 && (tokens.has(w + "s") || (w.endsWith("s") && tokens.has(w.slice(0, -1))))) return true;
  if (w.length < 5) return false;
  for (const t of tokens) {
    if (t.length > w.length && t.startsWith(w) && /^\d+$/.test(t.slice(w.length))) return true; // 真词 = 导读词+数字(AlphaFold3)
    if (t.length >= 5 && w.length > t.length && w.startsWith(t) && /^\d+$/.test(w.slice(t.length))) return true; // 导读词 = 真词+数字
  }
  return false;
}

/** 某个书写形式是否在真相源里出现过(多词形式要求每个词都在) */
function formHits(form, tokens, concats) {
  const ws = norm(form);
  if (!ws.length) return false; // 纯中文形式(norm 后为空)→ 只能靠别名表的 en 形式回比
  if (ws.every((w) => tokenHit(w, tokens, concats))) return true;
  // 反向拼接(标准变更·用户授权 2026-07-20,D46):导读「open AI」多词 ⇄ 稿里「OpenAI」单词
  if (ws.length > 1) {
    const joined = ws.join("");
    if (joined.length >= 5 && tokenHit(joined, tokens, concats)) return true;
  }
  return false;
}

/**
 * D17 · 专名回原文(硬拦)。
 * name 命中真相源即过;若 name 属于别名表某实体,则该实体**任一书写形式**命中即过
 * (正文写正确名 Modal,而转写稿只有误写 Modo → 靠别名表召回,不误杀)。
 */
export function checkProperNoun(name, ctx) {
  const entity = (ctx.aliases?.entities ?? []).find((e) =>
    [e.name, e.file, ...(e.forms ?? [])].filter(Boolean).some((f) => String(f).toLowerCase() === String(name).toLowerCase()),
  );
  const forms = entity ? [...new Set([entity.name, ...(entity.forms ?? [])].filter(Boolean))] : [name];
  for (const f of forms) {
    if (formHits(f, ctx.tokens, ctx.concats)) return { pass: true, matchedForm: f, entity: entity?.id ?? null };
  }
  return {
    pass: false,
    matchedForm: null,
    entity: entity?.id ?? null,
    reason: entity
      ? `别名表实体「${entity.id}」的任何书写形式都未在真相源出现(疑编造)`
      : `专名「${name}」未在真相源出现,且不在别名表(疑编造)`,
  };
}

/**
 * 中文写法的公司/产品名字典 —— **D17 的中文侧**。
 *
 * ⚠️ 为什么必须有:首版 `extractLatinTokens` 只捞 `[A-Za-z]`,**D17 从头到尾没见过一个中文专名**。
 * 对抗审计一枪打穿:`Snowflake`→拦,而「雪花」→**压根没进检查**;`Oracle`→拦,「甲骨文」→溜过。
 * prompt 里被我点名封杀的反例「跨云(AWS/GCP/Azure)」,改写成「跨云(亚马逊云/谷歌云/微软云)」就完全免检。
 * **而读者读的正是中文那一侧** —— 等于闸门守在了没人走的门上。
 *
 * ⚠️ **这一层的固有天花板(诚实交底,别当它是全覆盖)**:中文没有大小写,
 * 「哪个中文子串是专名」无法用确定性字符串法穷举。所以本字典是**白名单式**的:
 * 认得出的中文专名(字典 + 别名表里的中文 form)才回原文比对;
 * **字典外的中文编造名(如模型现编一个「星尘智算」)仍然抓不到** → 见 D27。
 * 配套两条:①prompt 强制外企/产品首现带原文(「甲骨文(Oracle)」)→ 落进拉丁侧硬拦
 *          ②新名字进字典/别名表由人复核
 */
const CN_ENTITY_DICT = [
  // 云 / 基础设施
  ["甲骨文", "Oracle"], ["雪花", "Snowflake"], ["谷歌云", "Google Cloud"], ["谷歌", "Google"],
  ["亚马逊云", "AWS"], ["亚马逊", "Amazon"], ["微软云", "Azure"], ["微软", "Microsoft"],
  ["阿里云", "Alibaba Cloud"], ["阿里巴巴", "Alibaba"], ["腾讯云", "Tencent Cloud"], ["腾讯", "Tencent"],
  ["百度", "Baidu"], ["华为", "Huawei"], ["字节跳动", "ByteDance"],
  // 芯片 / 硬件
  ["英伟达", "Nvidia"], ["英特尔", "Intel"], ["超微", "AMD"], ["苹果", "Apple"],
  // 模型 / AI 公司
  ["深度求索", "DeepSeek"], ["通义千问", "Qwen"], ["文心一言", "Ernie"], ["智谱", "Zhipu"],
  ["月之暗面", "Moonshot"], ["元宇宙", "Meta"], ["脸书", "Facebook"], ["推特", "Twitter"],
  ["英伟达显卡", "Nvidia"], ["开放人工智能", "OpenAI"], ["人择", "Anthropic"],
  // 数据 / 数据库
  ["数砖", "Databricks"], ["雪花公司", "Snowflake"], ["帕兰提尔", "Palantir"],
];

/**
 * 抽中文专名候选:字典命中 + 别名表里登记的中文 form 命中。
 * 返回的是「书写形式」,交给 checkProperNoun 回原文比对(经别名表/字典映射到英文形式)。
 */
export function extractChineseNouns(md, aliases) {
  const text = String(md);
  const found = new Set();
  for (const [cn] of CN_ENTITY_DICT) if (text.includes(cn)) found.add(cn);
  for (const e of aliases?.entities ?? [])
    for (const f of [e.name, e.file, ...(e.forms ?? [])].filter(Boolean))
      if (/[一-龥]/.test(String(f)) && text.includes(String(f))) found.add(String(f));
  // 长名优先:命中「谷歌云」就不再单报「谷歌」(避免同一处报两遍)
  const list = [...found].sort((a, b) => b.length - a.length);
  return list.filter((x) => !list.some((y) => y !== x && y.length > x.length && y.includes(x) && text.split(x).length === text.split(y).length));
}

/** 中文专名 → 它对应的英文书写形式(供回原文比对);字典优先,再看别名表 */
export function cnToSourceForms(cn, aliases) {
  const hit = CN_ENTITY_DICT.find(([c]) => c === cn);
  const out = hit ? [hit[1]] : [];
  for (const e of aliases?.entities ?? [])
    if ([e.name, e.file, ...(e.forms ?? [])].filter(Boolean).some((f) => String(f) === cn))
      out.push(...[e.name, ...(e.forms ?? [])].filter(Boolean).map(String));
  return [...new Set(out)];
}

/** 从中文正文里挑拉丁串(专名候选);纯数字不算 */
export function extractLatinTokens(md) {
  return [...new Set([...String(md).matchAll(/[A-Za-z][A-Za-z0-9.+_-]*/g)].map((m) => m[0].replace(/[.]+$/, "")))].filter(Boolean);
}

/** 模糊量词:不是确定数字,逐字比对不适用 → 提醒层(drift #11) */
const VAGUE_RE = /(数[十百千万亿]+[余多]?[亿万千百]*|几[十百千万亿个成倍]+|好几[个十百]|数以[百千万亿]+计|大约|左右|上下|接近|将近|多个|若干|一些|不少|大量|海量)/g;

export function findVagueQuantifiers(md) {
  const out = [];
  for (const m of String(md).matchAll(VAGUE_RE)) {
    out.push({ raw: m[0], ctx: String(md).slice(Math.max(0, m.index - 12), m.index + m[0].length + 12).replace(/\n/g, " ") });
  }
  return out;
}

/**
 * 抽正文里的**确定数字**(阿拉伯数字)。
 * 已知边界:中文数字写法(十万/数十亿)不在此列 —— drift #11 授权的硬拦范围是
 * 「阿拉伯数字/年份 ↔ 英文数字词」;中文数字形式未覆盖,登记为债不静默。
 */
export function extractDigestNumbers(md) {
  const out = [];
  const text = String(md);
  // 中文单位万/亿:导读「16万」既可能对应转写稿的 160000(缩放值),也可能只有阿拉伯前缀 16 能对上
  //   (中文数字形式非硬覆盖,drift #11)→ 缩放值或原值**任一命中即过**(标准变更·用户授权)。
  for (const m of text.matchAll(/(\d[\d,]*(?:\.\d+)?)\s*([万亿])?/g)) {
    const raw = m[1].replace(/[.,]+$/, "");
    const base = Number(raw.replace(/,/g, ""));
    if (!Number.isFinite(base)) continue;
    const scale = m[2] === "万" ? 1e4 : m[2] === "亿" ? 1e8 : 1;
    const values = scale === 1 ? [base] : [base * scale, base]; // 缩放值 + 原值,任一命中即过
    out.push({ value: values[0], values, raw: raw + (m[2] || ""), ctx: text.slice(Math.max(0, m.index - 14), m.index + m[0].length + 14).replace(/\n/g, " ") });
  }
  return out;
}

/**
 * 时间戳的分秒是**溯源坐标不是事实数字**(D8 单独查)→ D17 数字比对前剔掉。
 *
 * ⚠️ 只剥**时间本身**,绝不剥整个括号。首版剥的是整块 `\[[^\]]*\d{1,2}:\d{2}[^\]]*\]`,
 * 被对抗审计一枪打穿:`[详见 Snowflake 与 Oracle 的 12:34 联合报告,估值 9999 亿美元]`
 * → 整块进免检区 → 里面编造的公司名和数字**全部隐形**。
 * 现在同样这行输入,Snowflake/Oracle/9999 都会照常送去 D17 硬拦。
 */
export function stripTimestamps(md) {
  return String(md).replace(/\d{1,2}:\d{2}(?::\d{2})?/g, " ");
}

/**
 * 中文数字成语里的数字**不是对本集的事实断言**,是固定词组的一部分 → 不参与 D17 硬拦。
 * 与 drift #11「模糊量词只提醒」同理(该裁决授权的硬拦范围是「确定数字」)。
 * 真实案例:集2 正文「7×24 小时值守」——转写稿里 on-call/around the clock/twenty four 全无,
 * 原话是「an operational team that's going to sit there」+「lose all your data at night」,
 * GLM 用的是中文习语。硬拦它 = 逼稿子不许说人话,且必然天天误报 → 闸门沦为摆设。
 */
export function stripNumericIdioms(md) {
  return String(md).replace(/7\s*[×x*]\s*24|24\s*[×x*]\s*7|24\/7/g, " ");
}

/**
 * 「时间戳型标注」的**唯一定义** —— D17 与 D8 必须共用它,否则裂缝里的东西两边都不查。
 *
 * ⚠️ 首版是两条各写各的正则:`stripTimestamps` 认「括号里任意位置有 mm:ss」(→D17 免检),
 * `parseInlineTimestamps` 要求「mm:ss 必须在开头」(→D8 才查)。对抗审计当场打穿:
 * `[Akshat Bubna 00:10-00:19]`(名字和时间调个顺序)= **同时满足 D17 免检 + D8 不解析** → 隐形。
 * 而那正是测试里「攻击C·移花接木」那条。另:D8 只认 ASCII 方括号,中文稿写 `【00:15 X】`
 * 或 `(00:17 X)` 极其自然 → 也隐形。
 * 现在:括号形态(`[] 【】 ()`)与时间位置**都不再影响是否被检查**。
 */
const TS_BRACKET_RE = /[[【(（]([^\]】)）\n]*\d{1,2}:\d{2}[^\]】)）\n]*)[\]】)）]/g;

/**
 * 解析正文内联时间戳。真实形状(取自真 digest,非臆测):
 *   [00:34-02:17 Akshat Bubna] / [10:03-10:34 swyx / Akshat Bubna] / [37:57-38:47] / [48:34 Akshat Bubna]
 * 加固后额外覆盖:时间不在开头(`[Akshat 00:10-00:19]`)、全角括号(`【00:15 X】`)。
 */
export function parseInlineTimestamps(md) {
  const out = [];
  for (const m of String(md).matchAll(TS_BRACKET_RE)) {
    const inner = m[1];
    const times = [...inner.matchAll(/\d{1,2}:\d{2}(?::\d{2})?/g)].map((x) => x[0]);
    const start = parseTs(times[0]);
    const end = times[1] ? parseTs(times[1]) : start;
    // 说话人 = 括号里刨去时间与连接符后剩下的。刨不干净 → 后面 D8 会因「此人没讲话」拦下(fail-closed)
    const who = inner
      .replace(/\d{1,2}:\d{2}(?::\d{2})?/g, " ")
      .replace(/[-–—~至]/g, " ")
      .trim();
    const speakers = who ? who.split(/[/、]/).map((s) => s.trim()).filter(Boolean) : [];
    out.push({ raw: m[0], start, end, speakers });
  }
  return out;
}

/**
 * D8 · 校验一条内联时间戳(硬拦):
 *   ① 区间必须真实存在于转写稿(编造的区间 / 落在静音空档 → 拦)
 *   ② 标注了说话人时,判据 = **主说话人口径**(与 user-stories C3 Scenario 5② 的
 *      「该区间主说话人 == 标注的说话人」一致):
 *        · 每个被标注的人都必须在区间内真讲过话(≥minWords)→ 抓「把话安到没开口的人头上」(移花接木)
 *        · 区间的**主说话人**(词数最多者)必须在标注里 → 抓「只标次要插话者、隐去真正占场的人」
 *
 * 为什么不是「集合完全相等」:首版这么写,拿真数据一跑 23 条时间戳挂 13 条,
 * 全是「标注 Akshat / 实际 swyx + Akshat」—— 长区间里主持人一句「Yeah」就把整段判挂。
 * 那比我自己的 Gherkin 还严,且会把闸门变成天天误报→天天人工放行→摆设。
 * 改成主说话人口径后,D19 那类攻击(把主持人的话挂给嘉宾)照样拦得住:那种情况下
 * 被标注的嘉宾在区间内 0 词,过不了第一条。
 * 噪声容忍:区间内发言 <2 词的人不计入「真讲过话」(对齐 gate.mjs 的 crossRun<2 口径)。
 */
/** 单条内联时间戳允许的最大跨度(秒)。真实 digest 里的区间都在 2 分钟内;5 分钟已很宽松。 */
export const MAX_SPAN_SEC = 300;

export function checkInlineTimestamp(t, ctx, { minWords = 2, pointGrace = 5 } = {}) {
  if (!Number.isFinite(t.start) || !Number.isFinite(t.end)) return { pass: false, reason: "时间戳解析失败" };
  // 负向区间([19:00-10:00 X]):实测本就会被后续检查拦下(GLM 20260717-014[3] 说的「绕过」不成立),
  // 但拦下的理由会是莫名其妙的「说话人不对」。显式判掉,让报错说人话。
  if (t.end < t.start) return { pass: false, reason: `时间戳区间倒置(${t.start}s > ${t.end}s)` };
  if (t.start < 0) return { pass: false, reason: `时间戳为负(${t.start}s)` };
  // 注:原先这里还有 `t.start > ctx.maxEnd` 一项,加了下面的 end 校验后它是**死代码**
  // (end >= start,start 超范围必然 end 也超)。变异验证证实删掉它测试全绿 → 按「简到极致」去掉,
  // 不留一条永远走不到、却让人以为有保护的分支。
  // ⚠️ 首版只校验 start,不校验 end,区间长度也无上限 → 对抗审计打穿:
  //   `[00:00-99:59 嘉宾]` **恒过**,因为全集主说话人恰恰就是嘉宾。
  //   而 D8/D19 声称要抓的正是「把主持人的话安到嘉宾头上」—— 挂上全集区间就全放行。
  //   **区间越宽,断言越弱,却越容易过** = 判据方向反了。
  if (t.end > ctx.maxEnd + 1) return { pass: false, reason: `区间终点超出转写稿范围(0~${ctx.maxEnd.toFixed(1)}s)` };
  if (t.end - t.start > MAX_SPAN_SEC)
    return {
      pass: false,
      reason: `区间过宽(${Math.round(t.end - t.start)}s > 上限 ${MAX_SPAN_SEC}s):宽区间等于不指明出处,且能靠「全集主说话人=嘉宾」蒙混过主说话人判据`,
    };

  // ── 单点 vs 区间:两种断言强度不同,判据也不同(拿真数据校正过两轮)──
  // **区间** [a-b X] = 「这段话在 a~b 之间、由 X 说」→ 强断言 → 用主说话人口径(见下)。
  // **单点** [t X]   = 「X 大概在 t 附近说了这个」→ 本就是粗略坐标,要求 X 在**某一瞬间**占主导
  //   是过度解读。故:给 ±pointGrace 窗,且**只查「X 真在这附近开口」**,不要求占主导。
  //
  // 为什么这么定(两条真实误报逼出来的,都不是编造):
  //   · 集2 [06:25 Reynold]:Reynold 确实讲了这段(『I was driving...』『Whenever I hit the red light』),
  //     但 06:25=385s 正好压在主持人插话(382~386s)的尾巴上,Reynold 386s 才接回去 —— 归属对、时间戳偏 1s。
  //   · 集1 [50:24 Akshat]:Akshat 原话就在 3020~3036s(『a completely custom model architecture...』),
  //     可 ±1.5s 窄窗里**逐词 diarization 把个别词标成了 swyx** → 误判主说话人。
  // 代价(诚实交底):单点时间戳的 D8 因此**弱于**区间——凭空把话安给一个「附近确实开过口」的人,
  //   单点形式抓不住。区间形式仍是强判定。这是精度换误报率:窄窗会让闸门天天误报→天天放行→摆设。
  const isPoint = t.end - t.start < 1;
  const lo = isPoint ? t.start - pointGrace : t.start;
  const hi = isPoint ? t.end + pointGrace : t.end;

  const words = ctx.stream.filter((w) => w.start < hi + 0.001 && w.end > lo - 0.001);
  if (!words.length) return { pass: false, reason: "该区间在转写稿里没有任何词(疑编造区间)" };

  if (!t.speakers.length) return { pass: true, actual: [] }; // 无说话人标注 → 只校验区间真实性

  const counts = new Map();
  for (const w of words) {
    const nm = ctx.speakerMap[w.speaker] ?? w.speaker;
    counts.set(nm, (counts.get(nm) || 0) + 1);
  }
  const ranked = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  const actual = ranked.filter(([, n]) => n >= minWords).map(([nm]) => nm);
  const dominant = ranked[0]?.[0] ?? null;

  // 说话人从硬拦降为软提醒(🔒 标准变更·用户授权 2026-07-19):导读内联署名对不上不再拦发布,
  //   降为「待核」(speakerSoft),进提醒清单;区间真实性(有没有词/是否越界/过宽)仍硬拦。
  //   代价用户知情接受:偶发张冠李戴可能上公网。见 ADR 0013 / 需求共识「防失真三联」留痕。
  // ① 被标注的人必须真讲过话(名字比对走 normName:折叠音标/连字符,修 D37 误报)
  const phantom = t.speakers.filter((s) => !actual.some((a) => normName(a) === normName(s)));
  if (phantom.length)
    return {
      pass: true,
      speakerSoft: `说话人存疑:标注「${phantom.join(" / ")}」在该区间内没讲话(实际是「${actual.join(" / ") || "(无)"}」)`,
      actual,
      dominant,
    };

  // ② 主说话人不能被隐去 —— **只对区间生效**(单点是粗略坐标,见上方说明)
  if (!isPoint && dominant && !t.speakers.some((s) => normName(s) === normName(dominant)))
    return {
      pass: true,
      speakerSoft: `说话人存疑:该区间主说话人是「${dominant}」,却只标了「${t.speakers.join(" / ")}」`,
      actual,
      dominant,
    };

  return { pass: true, actual, dominant };
}

/** 我们自己模板/通用写法带进来的拉丁串,不是从转写稿派生的专名 → 不参与 D17 */
// 通用缩写/角色词:非"对本集的事实断言",逐字回比只会误报 → 不参与 D17(标准变更·用户授权 2026-07-19)
const TOKEN_ALLOWLIST = new Set(["tldr", "ai", "id", "md", "url", "http", "https",
  "cto", "ceo", "cfo", "coo", "cmo", "vp", "hr", "pr", "api", "gpu", "cpu", "tpu", "llm", "llms",
  "sdk", "saas", "paas", "ui", "ux", "os", "io", "ml", "nlp", "rl", "rag", "kpi", "roi", "ip", "qa",
  "demo", "app", "apps", "beta", "alpha", "mvp", "cli", "gui", "sql", "css", "html", "json", "yaml"]);

/**
 * D17/D8 的核心比对逻辑,抽成单一组合 —— **digest_md 与实体 how_described 共用它**
 * (Scenario 5 ①:实体属性里的专名/数字也要回原文比对)。抽出来是为了「谁改都一处改」,
 * 不让两处各抄一份 strip/check 顺序、日后漂移。behavior 与原 gateFacts 内联版逐字等价
 * (由 gate-facts.test.ts 现有 69 测试 + 变异验证背书)。
 * @param md 完整待检文本(D8 时间戳查全文,含【背景】)
 * @returns { nounResults, numResults, tsResults, vague, failures }
 */
export function checkProse(md, ctx, aliases) {
  // D17 作用域:去【背景】(声明过的 AI 补充)、去时间戳坐标、去数字成语(都不是对本集的事实断言)
  const body = stripNumericIdioms(stripTimestamps(stripBackground(md)));

  // ① D17 专名(硬拦)—— 拉丁侧 + 中文侧
  // 跳单/双字母(G、H 之类数学记号/首字母,无法当专名核实,只会误报)+ 通用缩写白名单(标准变更·用户授权)
  const nouns = extractLatinTokens(body).filter((t) => t.length >= 3 && !TOKEN_ALLOWLIST.has(t.toLowerCase()));
  const nounResults = nouns.map((n) => ({ name: n, ...checkProperNoun(n, ctx) }));
  for (const cn of extractChineseNouns(body, aliases)) {
    const forms = cnToSourceForms(cn, aliases);
    if (!forms.length) {
      nounResults.push({ name: cn, pass: false, matchedForm: null, reason: `中文专名「${cn}」既不在别名表、也无对应英文形式可回原文比对(判不了 = 不过)` });
      continue;
    }
    const hit = forms.find((f) => checkProperNoun(f, ctx).pass);
    nounResults.push(
      hit
        ? { name: cn, pass: true, matchedForm: hit }
        : { name: cn, pass: false, matchedForm: null, reason: `中文专名「${cn}」(对应 ${forms.join("/")})未在真相源出现(疑编造)` },
    );
  }

  // ② D17 确定数字(硬拦)
  const numResults = extractDigestNumbers(body).map((n) => {
    const hit = (n.values ?? [n.value]).some((v) => ctx.numbers.has(v));
    return { ...n, pass: hit, reason: hit ? null : `数字 ${n.raw} 未在真相源出现(疑编造)` };
  });

  // ③ D8 内联时间戳(硬拦)—— 作用域是完整正文,含【背景】
  const tsResults = parseInlineTimestamps(md).map((t) => ({ ...t, ...checkInlineTimestamp(t, ctx) }));

  // ④ 模糊量词(提醒层,不卡提交)
  const vague = findVagueQuantifiers(body);
  // ⑤ 说话人存疑(D8 软提醒·标准变更用户授权):pass:true 已不进 failures,单列待核
  const speakerWarn = tsResults.filter((r) => r.speakerSoft).map((r) => ({ kind: "D8-说话人(软)", ...r }));

  const failures = [
    ...nounResults.filter((r) => !r.pass).map((r) => ({ kind: "D17-专名", ...r })),
    ...numResults.filter((r) => !r.pass).map((r) => ({ kind: "D17-数字", ...r })),
    ...tsResults.filter((r) => !r.pass).map((r) => ({ kind: "D8-时间戳", ...r })),
  ];
  return { nounResults, numResults, tsResults, vague, speakerWarn, failures };
}

/** 校验一集的事实层:D17 专名 + D17 数字 + D8 时间戳 */
export function gateFacts(dir, { aliasesPath } = {}) {
  const transcript = JSON.parse(readFileSync(resolve(dir, "transcript.en.json"), "utf8"));
  const meta = JSON.parse(readFileSync(resolve(dir, "meta.json"), "utf8"));
  const digest = JSON.parse(readFileSync(resolve(dir, "digest.json"), "utf8"));
  let aliases = { entities: [] };
  try {
    aliases = JSON.parse(readFileSync(aliasesPath ?? resolve(dir, "../../aliases.json"), "utf8"));
  } catch {
    /* 别名表还没有 → 空表(此时正确名会因转写错而误报,故别名表是 C3 的必需件) */
  }

  const ctx = buildFactIndex(transcript, meta, aliases);

  // ── 防假绿:「没东西可查」≠「查过了没问题」(fail-closed)──
  // ⚠️ 本项目已经在同一个模式上打过两次补丁:gate.mjs「0 条金句 ≠ 通过」(GLM 011[8])、
  //    gate-all.mjs「缺失 ≠ 通过」(GLM 012)。**gate-facts 自己漏了第三次**:
  //    对抗审计实测,把 digest_md 删掉或把字段名打成 digestMd →「专名 0/0、数字 0/0、时间戳 0/0 → ✅ 全过」,
  //    因为 `pass: failures.length === 0` 在零检查项时**恒真**。
  //    这直接违反本文件自己声明的「判不了 = 不过」。
  if (!Object.prototype.hasOwnProperty.call(digest, "digest_md"))
    return { id: meta.id, nouns: [], numbers: [], timestamps: [], vague: [], pass: false, failures: [{ kind: "结构", reason: "digest.json 缺 digest_md 字段 —— 判不了 = 不过,绝不当「无事发生」放行" }] };
  const md = String(digest.digest_md ?? "");
  if (!md.trim())
    return { id: meta.id, nouns: [], numbers: [], timestamps: [], vague: [], pass: false, failures: [{ kind: "结构", reason: "digest_md 为空 —— 判不了 = 不过" }] };

  // 核心比对(与实体 how_described 共用同一份组合,防漂移)
  const { nounResults, numResults, tsResults, vague, speakerWarn, failures } = checkProse(md, ctx, aliases);

  return {
    id: meta.id,
    nouns: nounResults,
    numbers: numResults,
    timestamps: tsResults,
    vague,
    speakerWarn,
    failures,
    pass: failures.length === 0,
  };
}

// ── CLI:node scripts/gate-facts.mjs <episodeDir> ──
const isMain = (() => {
  try {
    return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
})();
if (isMain) {
  const dir = process.argv[2];
  if (!dir) {
    console.error("用法: node scripts/gate-facts.mjs <data/episodes/xxx 目录>");
    process.exit(2);
  }
  const r = gateFacts(dir);
  console.log(`── ${r.id} · 事实层闸门(D17 专名/数字 + D8 时间戳)──`);
  console.log(`  专名 ${r.nouns.filter((x) => x.pass).length}/${r.nouns.length} 回原文命中`);
  console.log(`  数字 ${r.numbers.filter((x) => x.pass).length}/${r.numbers.length} 回原文命中`);
  console.log(`  时间戳 ${r.timestamps.filter((x) => x.pass).length}/${r.timestamps.length} 区间+说话人相符`);
  if (r.vague.length) {
    console.log(`\n  ⚠️ 待核清单(模糊量词,提醒不拦 · drift #11):`);
    for (const v of r.vague.slice(0, 10)) console.log(`     「${v.raw}」… ${v.ctx}`);
  }
  if (r.speakerWarn?.length) {
    console.log(`\n  ⚠️ 待核·说话人(软提醒,不拦 · 标准变更用户授权):`);
    for (const s of r.speakerWarn) console.log(`     [${s.raw}] ${s.speakerSoft}`);
  }
  if (!r.pass) {
    console.error(`\n❌ 事实层闸门未过(${r.failures.length} 条):`);
    for (const f of r.failures) console.error(`   [${f.kind}] ${f.reason ?? ""}\n      ${f.ctx ?? f.raw ?? f.name ?? ""}`);
    process.exit(1);
  }
  console.log("\n✅ 事实层闸门全过");
}
