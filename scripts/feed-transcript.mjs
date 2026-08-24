// C28 · RSS 自带官方转写稿(ADR 0024)· 纯函数层
//
// 为什么有这个文件:22 个源里 19 个走语音转写,一集 100 分钟要烧 2.8h CPU(项目自测 0.59x 实时),
// 叠加「同时只允许一个跑批」+「单批 6h 上限」→ 产量绝对上限约 8 集/天、实际 2–4 集。
// 而扫 feed 发现三个已配源本来就把官方稿挂在 `<podcast:transcript>` 里 —— 我们在给
// 自带稿子的播客重新听一遍。用 feed 稿把这类集从小时级降到秒级。
//
// 输出统一成本项目的稿格式:扁平数组 [{start, end, speaker, text}](与线上现有集一致;
// 逐词 words 非必需 —— 2026-singju-openclaw 那集就没有、照样过全部闸门)。
// speaker 一律留空字符串:feed 稿基本不带说话人,而「说话人匹配」早已降为软提醒
// (ADR 0013 / drift #26),不影响发布;硬拦的「引语逐字命中转写稿」照旧生效。

/** C36 前只认带时间轴的字幕格式;C36 起 text/html、text/plain 当兜底档(它们的稿也自带时间点,见下) */
const JSON_TYPES = new Set(["application/json"]);
const SRT_TYPES = new Set(["application/x-subrip", "application/srt", "text/srt"]);
const VTT_TYPES = new Set(["text/vtt", "application/x-subtitle-vtt"]);
const HTML_TYPES = new Set(["text/html", "application/xhtml+xml"]);
const PLAIN_TYPES = new Set(["text/plain"]);

/**
 * 从一集的多个 <podcast:transcript> 里挑最优的一个。
 * 优先级:JSON(常带逐词时间戳,信息最全)> SRT/VTT(段级时间轴)> HTML(说话人结构 + 稀疏时间点)
 * > 纯文本(段头时间点)。返回 { url, kind },没有可用的 → null(调用方回落 ASR)。
 */
export function pickFeedTranscript(list) {
  const rows = (list ?? []).filter((r) => r && r.url);
  // 所有认得的 MIME:用来判断某个 type 是「认得的」还是「马虎填的」
  const KNOWN = new Set([...JSON_TYPES, ...SRT_TYPES, ...VTT_TYPES, ...HTML_TYPES, ...PLAIN_TYPES]);
  const byKind = (kind, types, ext = kind) =>
    rows.find((r) => {
      const t = String(r.type || "").toLowerCase().split(";")[0].trim();
      if (types.has(t)) return true;
      // 有些源 type 写得马虎(空、或 "unknown" 这类没意义的值)→ 退一步看扩展名。
      // 判据是「这个 type 我认不认得」,不是「有没有填」(GLM 001[4]:原来写成 !t,
      // 于是 type="unknown" + a.srt 会被漏掉、白烧一次 2.8h ASR)。
      return !KNOWN.has(t) && new RegExp(`\\.${ext}(\\?|$)`, "i").test(r.url);
    });
  const json = byKind("json", JSON_TYPES);
  if (json) return { url: json.url, kind: "json" };
  const srt = byKind("srt", SRT_TYPES);
  if (srt) return { url: srt.url, kind: "srt" };
  const vtt = byKind("vtt", VTT_TYPES);
  if (vtt) return { url: vtt.url, kind: "vtt" };
  const html = byKind("html", HTML_TYPES, "html?");
  if (html) return { url: html.url, kind: "html" };
  const plain = byKind("plain", PLAIN_TYPES, "txt");
  if (plain) return { url: plain.url, kind: "plain" };
  return null;
}

/**
 * 「稳有稿」判据 —— 只认字幕格式(json/srt/vtt)。给**预算估价**和**有稿优先排序**用:
 * html/plain 下载前无法确认有没有时间点(2026-08-24 实测 devtools 的 txt 通篇没有、
 * changelog 多数集也没有),若按「有稿(便宜)」估价选进来、结果解析失败回落 2.8h ASR,
 * 会把单班时间预算炸穿。故这两处保守按 ASR 价算;处理时仍先试 html/plain(秒级,失败照旧回落),
 * 实际快了省下的预算自然留给后面的候选。
 */
export function hasTimedFeedTranscript(list) {
  const p = pickFeedTranscript(list);
  return !!p && (p.kind === "json" || p.kind === "srt" || p.kind === "vtt");
}

/**
 * Whisper 家族的 JSON 稿 → 本项目稿格式。
 * 实测 DOAC(Flightcast)的形状:{ text, word_count, segments:[{start,end,text,words:[…]}], vtt, … }。
 * 兼容三种常见容器:裸数组 / {segments} / {results}。
 */
export function parseWhisperJson(obj) {
  const segs = Array.isArray(obj) ? obj : (obj?.segments ?? obj?.results ?? null);
  if (!Array.isArray(segs) || !segs.length) return null;
  const out = [];
  for (const s of segs) {
    if (!s || typeof s !== "object") continue;
    const text = String(s.text ?? "").trim();
    const start = Number(s.start);
    const end = Number(s.end);
    if (!text || !Number.isFinite(start) || !Number.isFinite(end)) continue;
    // speaker:JSON 稿偶尔带(字段名不统一),没有就留空 —— 说话人是软提醒层
    const speaker = String(s.speaker ?? s.speaker_label ?? "").trim();
    out.push({ start, end, speaker, text });
  }
  return out.length ? out : null;
}

/** "00:01:02,500" / "00:01:02.500" / "01:02.5" → 秒 */
export function srtTimeToSec(str) {
  const m = String(str).trim().match(/^(?:(\d+):)?(\d{1,2}):(\d{1,2})(?:[.,](\d{1,3}))?$/);
  if (!m) return null;
  const [, h, mm, ss, ms] = m;
  const v = Number(h || 0) * 3600 + Number(mm) * 60 + Number(ss) + Number((ms || "0").padEnd(3, "0")) / 1000;
  return Number.isFinite(v) ? v : null;
}

/**
 * SRT / WebVTT → 本项目稿格式。两者结构够像,一个解析器吃下:
 * 按空行切块,每块里找 `时间 --> 时间` 那一行,其后的行拼成文本(去掉序号行、VTT 的 WEBVTT 头与 NOTE 块)。
 */
export function parseSrt(text) {
  const src = String(text ?? "").replace(/\r\n?/g, "\n");
  const out = [];
  for (const rawBlock of src.split(/\n{2,}/)) {
    const block = rawBlock.trim();
    if (!block || /^WEBVTT/i.test(block) || /^NOTE\b/i.test(block)) continue;
    const lines = block.split("\n");
    const tsIdx = lines.findIndex((l) => l.includes("-->"));
    if (tsIdx < 0) continue;
    const [a, b] = lines[tsIdx].split("-->");
    const start = srtTimeToSec((a || "").trim());
    // VTT 的时间行末尾可能带定位参数(align:start 之类)→ 只取第一个 token
    const end = srtTimeToSec((b || "").trim().split(/\s+/)[0]);
    if (start == null || end == null) continue;
    const body = lines
      .slice(tsIdx + 1)
      .join(" ")
      // 去掉 VTT 的内联标签(<v Speaker>、<c.colorE5E5E5> 等)
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (!body) continue;
    out.push({ start, end, speaker: "", text: body });
  }
  return out.length ? out : null;
}

// ── C36 · text/plain + text/html 官方稿(2026-08-24 用户二确开工;Gherkin 见 user-stories C36)──
//
// 2026-08-24 实抓真稿确认形状:
// · transistor 系(workos/rework/devtools 的 transcript.txt):段头「人名  (00:02):」,时间点密。
// · changelog(/podcast/<n>/transcript 网页):<cite>人名:</cite> + <p>\[00:00\] 正文</p>,
//   时间点稀(实测 114 个说话块只有 10 个点,末点 80:41)。
// 时间点稀的处理:段起点用「上一个真时间点」携带;**稿末时间 = 最后真时间点 + 其后词数 ÷ 2.5 词/秒**
// (≈150 词/分的常态语速)。只估尾巴不估全稿 —— 不估的话归属闸门拿末段时间比官方时长会误拦正确稿
// (容差 max(120s, 5%),尾巴估算误差远小于它);通篇一个时间点都没有 → null 回落 ASR,闸门绝不降级。

const WORDS_PER_SEC = 2.5;
const countWords = (t) => String(t).split(/\s+/).filter(Boolean).length;

/** 段草稿 [{speaker, stamp|null, text}] → 本项目稿格式(共用装配:携带起点 + 词数估尾)。
 *  硬前提:**至少一半的段带真时间点**。2026-08-24 真稿实测:changelog 672/671 整篇 0 点、
 *  673 只有 10 点/114 块且末点只到官方时长 82% 处(片尾另有内容)→ 稀点稿的稿末怎么估都不可靠,
 *  归属闸门(容差 max(120s,5%))必误拦;与其把估算塞给闸门,不如判「没有可用时间轴」回落 ASR。 */
function stanzasToSegments(stanzas) {
  const rows = stanzas.filter((s) => s.text);
  if (!rows.length || !rows.some((s) => s.stamp != null)) return null;
  if (rows.filter((s) => s.stamp != null).length < rows.length / 2) return null;
  // 时间点必须单调不减 —— 回跳的稿时间轴不可信(会产负时长段、把稿末时长算小让归属闸门误拦),
  // 宁可回落 ASR(GLM 010[4])
  let prev = -1;
  for (const r of rows) {
    if (r.stamp == null) continue;
    if (r.stamp < prev) return null;
    prev = r.stamp;
  }
  let carry = 0;
  const segs = rows.map((r) => ({
    start: r.stamp != null ? (carry = r.stamp) : carry,
    end: 0,
    speaker: r.speaker || "",
    text: r.text,
  }));
  let lastStampIdx = 0;
  rows.forEach((r, i) => {
    if (r.stamp != null) lastStampIdx = i;
  });
  const tailWords = segs.slice(lastStampIdx).reduce((n, s) => n + countWords(s.text), 0);
  const finalEnd = segs[lastStampIdx].start + tailWords / WORDS_PER_SEC;
  let next = finalEnd;
  for (let i = segs.length - 1; i >= 0; i--) {
    segs[i].end = i >= lastStampIdx ? finalEnd : next;
    if (rows[i].stamp != null) next = rows[i].stamp;
  }
  return segs;
}

/** "&#39;" 这类 HTML 实体 → 字符(只处理真稿里出现的常见几种,不引依赖)。
 *  超范围码点(>0x10FFFF)换 �,不许抛(GLM 010[1]:畸形实体曾让 RangeError 炸出纯函数)。 */
const safeCp = (n) => (Number.isFinite(n) && n >= 0 && n <= 0x10ffff ? String.fromCodePoint(n) : "�");
function decodeEntities(s) {
  return String(s)
    .replace(/&#(\d+);/g, (_, n) => safeCp(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => safeCp(parseInt(n, 16)))
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

// 正文里的时间点标记:changelog 写作 \[80:41\](markdown 转义漏出来的),也兼容不带反斜杠的
const INLINE_STAMP = /\\?\[((?:\d{1,2}:)?\d{1,3}:\d{2})\\?\]/;

/**
 * transistor 系纯文本稿 → 本项目稿格式。
 * 段头独占一行:「人名  (00:02):」/「人名 (1:02:03):」;其后各行(含空行隔开的续段)都归这个段头。
 */
export function parseStampedText(text) {
  const HEADER = /^(.{0,80}?)\s*\(((?:\d{1,2}:)?\d{1,3}:\d{2})\)\s*:\s*$/;
  const stanzas = [];
  let cur = null;
  for (const line of String(text ?? "").replace(/\r\n?/g, "\n").split("\n")) {
    const m = line.match(HEADER);
    if (m) {
      cur = { speaker: m[1].trim(), stamp: srtTimeToSec(m[2]), text: "" };
      stanzas.push(cur);
      continue;
    }
    const t = line.trim();
    if (!t) continue;
    if (!cur) {
      cur = { speaker: "", stamp: null, text: "" };
      stanzas.push(cur);
    }
    cur.text = cur.text ? `${cur.text} ${t}` : t;
  }
  return stanzasToSegments(stanzas);
}

/**
 * 网页稿 → 本项目稿格式。两种真实形状:
 * · changelog:<cite>人名:</cite> + <p>\[mm:ss\] 正文</p>——cite 开新段,<p> 里第一个时间点当段起点。
 * · buzzsprout(rework):没有 <cite>,正文里是「人名 (00:00):<br>话<br><br>人名 (00:54):<br>…」
 *   —— <br>/<p> 换成换行、剥标签解实体后,就是 transistor 同款段头格式,直接复用 parseStampedText。
 * 只读 <body>(有的话),<head>/<title> 的字不进正文。时间点覆盖不足的稿由 stanzasToSegments 判 null。
 */
export function parseTranscriptHtml(html) {
  let src = String(html ?? "");
  const body = src.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (body) src = body[1];
  // <script>/<style> 连内容一起剥 —— 光剥标签会把脚本文本混进正文(GLM 010[2] 加固);
  // 第二刀剥「没闭合的」(截断/畸形 HTML):按 HTML 解析规则,未闭合 script 之后到文末都算脚本,
  // 不剥的话脚本文本可能被段头解析成带伪时间点的假段(GLM 011[1] 实证)
  src = src.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, " ").replace(/<(script|style)[^>]*>[\s\S]*$/i, " ");
  if (!/<cite[\s>]/i.test(src)) {
    const text = decodeEntities(
      src.replace(/<br\s*\/?>/gi, "\n").replace(/<\/?p[^>]*>/gi, "\n").replace(/<[^>]*>/g, " "),
    );
    return parseStampedText(text);
  }
  const stanzas = [];
  let cur = null;
  for (const m of src.matchAll(/<cite[^>]*>([\s\S]*?)<\/cite>|<p[^>]*>([\s\S]*?)<\/p>/gi)) {
    if (m[1] != null) {
      const speaker = decodeEntities(m[1].replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim().replace(/:$/, "");
      cur = { speaker, stamp: null, text: "" };
      stanzas.push(cur);
      continue;
    }
    let p = m[2];
    if (!cur) {
      cur = { speaker: "", stamp: null, text: "" };
      stanzas.push(cur);
    }
    const stamp = p.match(INLINE_STAMP);
    if (stamp && cur.stamp == null) cur.stamp = srtTimeToSec(stamp[1]);
    p = decodeEntities(p.replace(new RegExp(INLINE_STAMP.source, "g"), " ").replace(/<[^>]*>/g, " "))
      .replace(/\s+/g, " ")
      .trim();
    if (!p) continue;
    cur.text = cur.text ? `${cur.text} ${p}` : p;
  }
  return stanzasToSegments(stanzas);
}

/** 按格式分派:拿到的原始内容 → 本项目稿格式(解析不出来返回 null,调用方回落 ASR) */
export function parseFeedTranscript(kind, raw) {
  if (kind === "json") {
    let obj;
    try {
      obj = JSON.parse(raw);
    } catch {
      return null;
    }
    return parseWhisperJson(obj);
  }
  if (kind === "srt" || kind === "vtt") return parseSrt(raw);
  if (kind === "html") return parseTranscriptHtml(raw);
  if (kind === "plain") return parseStampedText(raw);
  return null;
}

// ── 题材筛选(用户 2026-08-17:「两个都开,但 DOAC 只收商业/科技的」)──
// DOAC 什么都聊(健康/心理/名人),与本站「英文深谈精华」的定位只有一部分重合。
// 做法:标了 topicFilter 的源,标题必须命中商业/科技词表才进库。
// **已知取舍(登记不静默)**:纯关键词判不了全部情况 —— 判不准就跳过(少发 ≪ 发离题内容),
// 漏放的可日后人工点名补。与 ADR 0021「离题老集只能人工事后踢」同一口径。
const TOPIC_WORDS = [
  // 商业 / 公司 / 钱
  "business", "company", "startup", "founder", "co-founder", "ceo", "cto", "entrepreneur",
  "revenue", "profit", "billion", "million", "investor", "investing", "venture", "vc",
  "marketing", "sales", "brand", "pricing", "growth", "scale", "scaling", "strategy",
  "hiring", "leadership", "management", "negotiation", "wealth", "money", "finance",
  "economy", "market", "industry", "customers", "product",
  // 科技 / AI
  "ai", "a.i.", "artificial intelligence", "tech", "technology", "software", "engineer",
  "engineering", "data", "algorithm", "robot", "automation", "agent", "agents", "llm",
  "chatgpt", "openai", "google", "apple", "meta", "amazon", "microsoft", "nvidia",
  "crypto", "bitcoin", "cyber", "internet", "app", "platform", "startup",
];

/** 标题是否命中商业/科技题材(按词边界比,避免 "ai" 命中 "said"/"chair") */
export function isOnTopic(title) {
  const t = String(title ?? "").toLowerCase();
  if (!t.trim()) return false;
  return TOPIC_WORDS.some((w) => {
    const esc = w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(^|[^a-z0-9])${esc}([^a-z0-9]|$)`, "i").test(t);
  });
}
