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

/** 带时间轴的格式才要(纯文本没时间戳 → D8 时间戳闸门无从判定,宁可回落 ASR) */
const JSON_TYPES = new Set(["application/json"]);
const SRT_TYPES = new Set(["application/x-subrip", "application/srt", "text/srt"]);
const VTT_TYPES = new Set(["text/vtt", "application/x-subtitle-vtt"]);

/**
 * 从一集的多个 <podcast:transcript> 里挑最优的一个。
 * 优先级:JSON(常带逐词时间戳,信息最全)> SRT/VTT(段级时间轴,够用)> 一律不要纯文本。
 * 返回 { url, kind: "json"|"srt"|"vtt" },没有可用的 → null(调用方回落 ASR)。
 */
export function pickFeedTranscript(list) {
  const rows = (list ?? []).filter((r) => r && r.url);
  // 所有认得的 MIME:用来判断某个 type 是「认得的」还是「马虎填的」
  const KNOWN = new Set([...JSON_TYPES, ...SRT_TYPES, ...VTT_TYPES, "text/plain"]);
  const byKind = (kind, types) =>
    rows.find((r) => {
      const t = String(r.type || "").toLowerCase().split(";")[0].trim();
      if (types.has(t)) return true;
      // 有些源 type 写得马虎(空、或 "unknown" 这类没意义的值)→ 退一步看扩展名。
      // 判据是「这个 type 我认不认得」,不是「有没有填」(GLM 001[4]:原来写成 !t,
      // 于是 type="unknown" + a.srt 会被漏掉、白烧一次 2.8h ASR)。
      return !KNOWN.has(t) && new RegExp(`\\.${kind}(\\?|$)`, "i").test(r.url);
    });
  const json = byKind("json", JSON_TYPES);
  if (json) return { url: json.url, kind: "json" };
  const srt = byKind("srt", SRT_TYPES);
  if (srt) return { url: srt.url, kind: "srt" };
  const vtt = byKind("vtt", VTT_TYPES);
  if (vtt) return { url: vtt.url, kind: "vtt" };
  return null;
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
