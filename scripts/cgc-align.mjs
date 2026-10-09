// C43 · 跨国串门对齐(2026-10-09 用户:「他抓取内容源转出来的东西,我觉得都是我想要的东西……给自己定一个目标:
// 让每天每期的内容都能跟他对齐」)。只拿它的**选题单**(每期简介写明「本期我们克隆了:节目 · 原标题」),
// 回到英文原节目自己做;不碰它的中文成品(版权 + 对克隆翻译再浓缩 = 双重失真,调研-同类产品摸底.md §8.5)。
// 本文件只放纯逻辑(可单测);抓 feed / 处理集在 run-pipeline.mjs 的 alignPass。

export const CGC_FEED = "https://feed.xyzfm.space/r8t44lmvu99m"; // Apple 目录查得(2026-10-09),小宇宙 pid 670f3da40d2f24f28978736f
export const CGC_WINDOW_DAYS = 14; // 只对齐它最近 14 天上的期(更早的不追)
export const CGC_MAX_MIN = 240; // 超 4 小时(多集混剪/整套讲座)不对齐:放不进一班,也不是单期访谈

const unxml = (s) => String(s ?? "")
  .replace(/<!\[CDATA\[|\]\]>/g, "")
  .replace(/<[^>]+>/g, " ")
  .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));

/** itunes:duration(秒数 或 h:mm:ss)→ 分钟 */
export function durMin(s) {
  const t = String(s ?? "").trim();
  if (/^\d+$/.test(t)) return Math.round(Number(t) / 60);
  const p = t.split(":").map(Number);
  if (p.some((x) => !Number.isFinite(x))) return 0;
  return Math.round(p.reduce((a, x) => a * 60 + x, 0) / 60);
}

/** 它的 RSS → [{guid, pubISO, title, show, origTitle, durMin}]。简介里「克隆了:节目 · 原标题 原内容更新时间:…」;
 *  早期格式没有「 · 」分隔(如「知名播客 Founders Podcast Li Lu and …」)→ show 留空,原标题取整串。 */
export function parseCgcFeed(xml) {
  const out = [];
  for (const it of String(xml).match(/<item>[\s\S]*?<\/item>/g) ?? []) {
    const tag = (n) => (it.match(new RegExp(`<${n}[^>]*>([\\s\\S]*?)</${n}>`)) ?? [])[1] ?? "";
    const desc = unxml(tag("description")).replace(/\s+/g, " ");
    const m = desc.match(/克隆了[:\uFF1A]\s*(.+?)\s*原内容更新时间/);
    const raw = (m?.[1] ?? "").replace(/^知名[^ ]*播客\s*/, "").replace(/[《》。]/g, " ").trim();
    const [show, origTitle] = raw.includes(" · ") ? raw.split(" · ").map((x) => x.trim()) : ["", raw];
    // 原内容更新时间:2026-10-06 / Mon, 14 Sep 2026 / 2019 年(只到年 → 不当日期用)
    const od = (desc.match(/原内容更新时间[:\uFF1A]\s*(\d{4}-\d{2}-\d{2}|\w{3}, \d{1,2} \w{3} \d{4})/) ?? [])[1];
    const odt = od ? new Date(/^\d{4}-/.test(od) ? `${od}T12:00:00Z` : `${od} 12:00:00 GMT`) : null;
    const pub = new Date(tag("pubDate"));
    out.push({
      guid: unxml(tag("guid")).trim() || unxml(tag("title")).trim(),
      pubISO: Number.isNaN(+pub) ? "" : pub.toISOString(),
      title: unxml(tag("title")).trim(),
      show,
      origTitle,
      origISO: odt && !Number.isNaN(+odt) ? odt.toISOString() : "",
      durMin: durMin(tag("itunes:duration")),
      desc: jevDesc(desc),
    });
  }
  return out;
}

/** 简介 → 给 Jev 看的材料:去文字稿链接、去时间戳目录,留导语 + 「精彩内容」,1500 字封顶。 */
function jevDesc(d) {
  const t = d.replace(/文字稿[:\uFF1A]\s*\S+/g, "");
  return `${t.split("⏱️")[0]} ${t.split("🌟")[1] ?? ""}`.replace(/\s+/g, " ").trim().slice(0, 1500);
}

// 2026-10-09 用户:「把跨国串门挑选过的内容一律做 jev 分类,把 ai 相关的都收了」。
// Jev(只做选择题的极速模型,_手册/jev-决策模型.md)看它的标题 + 中文简介判「跟 AI 关系多大」;主讲/重要话题之一 = 收,基本不讲 = 不对齐。
// 实测它近 60 天 95 期:主讲 55 / 重要话题之一 14 / 基本不讲 26,跑两遍逐条一致。
export const JEV_AI_QUESTION = {
  ai: {
    type: "choice",
    instructions: "这期播客的内容跟人工智能(AI)关系有多大?只按这期实际讨论的内容判断。",
    criteria: {
      main: "整期主要在讲 AI:AI 模型/产品/公司/研究,用 AI 做事,或 AI 对行业、工作、社会的影响",
      part: "AI 是这期的重要话题之一,有专门的段落展开讨论,但不是全部",
      none: "基本不讲 AI,或只是顺带提一两句",
    },
  },
};
export const jevState = (e) => `标题:${e.title}\n简介:${e.desc ?? ""}`;
/** Jev 的回答 → 收不收(主讲 / 重要话题之一都收)。 */
export const jevIsAi = (answers) => ["main", "part"].includes(answers?.ai?.choice);

/** 合集/整套讲座/超长 → 不对齐(不是单期访谈,也放不进一班)。 */
export function isCompilation(e) {
  return e.durMin > CGC_MAX_MIN || /混剪|合集|Complete Series|\d+-part|全集/i.test(`${e.title} ${e.origTitle}`);
}

const words = (s) => String(s ?? "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().split(" ").filter((w) => w.length > 1);

/** 标题相似度:重合词 / 较短一方的词数(原标题常被截断或加后缀)。 */
export function titleSim(a, b) {
  const A = new Set(words(a)), B = new Set(words(b));
  if (!A.size || !B.size) return 0;
  let n = 0;
  for (const w of A) if (B.has(w)) n++;
  return n / Math.min(A.size, B.size);
}

/** 在一串条目里找原标题对应的那期(相似度 ≥min 取最高;原标题不到 3 个词不比 —— 「Interconnects AI」这种是节目名不是标题,
 *  会把任何带这俩词的集都认成它(实测误配到 Latent Space 一期);都不够返回 null,不猜)。 */
export function findByTitle(items, origTitle, key = (x) => x.title, min = 0.6) {
  if (words(origTitle).length < 3) return null;
  let best = null, bs = 0;
  for (const x of items ?? []) {
    const s = titleSim(origTitle, key(x));
    if (s > bs) { bs = s; best = x; }
  }
  return bs >= min ? best : null;
}

/** 两个日期相差几天(任一缺 → Infinity) */
export function dayGap(a, b) {
  const x = Date.parse(a), y = Date.parse(b);
  return Number.isNaN(x) || Number.isNaN(y) ? Infinity : Math.abs(x - y) / 864e5;
}

/** 已订源里按「原内容更新时间」找:它常用 YouTube 版标题,和播客 feed 标题不同(实测 Knowledge Project / Latent Space)
 *  → 原日期 ±2 天内该源恰好只有一期,就认它;有两期以上就不猜。 */
export function findByDate(items, origISO) {
  const near = (items ?? []).filter((x) => dayGap(x.pubDateISO, origISO) <= 2);
  return near.length === 1 ? near[0] : null;
}

/** 节目名 → 我们已订的源(名字互相包含即算;太短的名字不比)。 */
export function ourSourceFor(show, sources) {
  const n = words(show).filter((w) => w !== "the").join(" ");
  if (n.length < 4) return null;
  return sources.find((s) => {
    const a = words(s.name).filter((w) => w !== "the").join(" ");
    return a.length >= 4 && (n.includes(a) || a.includes(n));
  }) ?? null;
}

/** 动态源的 key:cgc- + 节目名缩写(稳定、可从 id 反查回源) */
export function cgcKey(show) {
  return ("cgc-" + words(show).join("-")).slice(0, 24).replace(/-+$/, "");
}
