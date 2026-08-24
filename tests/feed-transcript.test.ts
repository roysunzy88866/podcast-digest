import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import {
  pickFeedTranscript,
  parseWhisperJson,
  parseSrt,
  srtTimeToSec,
  parseFeedTranscript,
  parseStampedText,
  parseTranscriptHtml,
  hasTimedFeedTranscript,
  isOnTopic,
} from "../scripts/feed-transcript.mjs";
import { transcriptDuration } from "../scripts/fetch-source-feed.mjs";
import { parseFeed, passesTopicFilter, selectBackfill, selectBackfillRecent, BACKFILL_SINCE } from "../scripts/run-pipeline.mjs";

// C28 · RSS 自带官方转写稿(Gherkin 见 docs/user-stories.md C28 / ADR 0024)
//
// 由来:22 源里 19 源走语音转写,一集 100 分钟烧 2.8h CPU(项目自测 0.59x 实时),
// 叠加「同时只允许一个跑批」+「6h 上限」→ 产量天花板 2–4 集/天。而扫 feed 实测发现
// Beyond Coding(206/263,SRT)、DOAC(139/871,Whisper JSON)、WorkOS(28/31,纯文本)
// 本来就把官方稿挂在 <podcast:transcript> 里 —— 等于在给自带稿子的播客重新听一遍。
//
// fixture 说明:结构照真实样本(SRT 序号/时间行/多行文本/内联标签、Whisper JSON 的
// segments+words),**文字全部自撰** —— 不把第三方播客的转写稿内容 check 进仓库(版权红线)。
// 解析器对真实数据的验证是本机一次性实跑:Beyond Coding SRT 出 351 段(末段 1075s)、
// DOAC JSON 出 1765 段(末段 7848s),记在 ADR 0024。

const fx = (n: string) => readFileSync(new URL(`./fixtures/feed-transcript-sample.${n}`, import.meta.url), "utf8");

describe("C28 · 挑稿子:按信息量排优先级(C36 起纯文本/网页当兜底,不再一刀拒)", () => {
  it("★★★ JSON 优先于 SRT(信息最全)", () => {
    const got = pickFeedTranscript([
      { url: "https://x/t.srt", type: "application/x-subrip" },
      { url: "https://x/t.json", type: "application/json" },
    ]);
    expect(got).toEqual({ url: "https://x/t.json", kind: "json" });
  });
  it("★★★ 只有纯文本时也要(C36 规格变更,用户 2026-08-24 二确:transistor 系纯文本自带时间点)", () => {
    expect(pickFeedTranscript([{ url: "https://x/transcript.txt", type: "text/plain" }])).toEqual({
      url: "https://x/transcript.txt",
      kind: "plain",
    });
  });
  it("★★★ 空/缺 url → null,不返回半截对象", () => {
    expect(pickFeedTranscript([])).toBeNull();
    expect(pickFeedTranscript(undefined as any)).toBeNull();
    expect(pickFeedTranscript([{ type: "application/json" } as any])).toBeNull();
  });
  it("★★ type 带 charset 参数照样认(application/json; charset=utf-8)", () => {
    expect(pickFeedTranscript([{ url: "https://x/t.json", type: "application/json; charset=utf-8" }])?.kind).toBe("json");
  });
  it("★★ type 缺失时退一步看扩展名", () => {
    expect(pickFeedTranscript([{ url: "https://x/a/transcript.srt", type: "" }])?.kind).toBe("srt");
  });
  it("★★★ type 填了没意义的值(unknown)也走扩展名兜底(GLM 001[4]:原判据是「有没填」→ 会白烧一次 ASR)", () => {
    expect(pickFeedTranscript([{ url: "https://x/a.srt", type: "unknown" }])?.kind).toBe("srt");
    expect(pickFeedTranscript([{ url: "https://x/a.json", type: "binary/octet-stream" }])?.kind).toBe("json");
  });
  it("★★★ 认得的 text/plain 不许冒充字幕格式 —— 哪怕 URL 挂着 .srt 后缀,也只按 plain 收(才真碰到兜底分支)", () => {
    // 独立审计 2026-08-18:原 fixture 用 transcript.txt,扩展名根本不是 srt/json/vtt,
    // 压根走不到「KNOWN 里的 type 不许走扩展名兜底」那条分支 → 破坏 KNOWN 集合测试也不红 = 空转。
    // C36 起 plain 是合法兜底档,但仍绝不能被扩展名抬进 srt/json 档(会用错解析器)。
    expect(pickFeedTranscript([{ url: "https://x/a.srt", type: "text/plain" }])?.kind).toBe("plain");
    expect(pickFeedTranscript([{ url: "https://x/a.json", type: "text/plain" }])?.kind).toBe("plain");
  });
});

describe("C28 · SRT / VTT 解析", () => {
  it("★★★ SRT → 段数组,时间转秒,多行文本拼一起", () => {
    const segs = parseSrt(fx("srt"))!;
    expect(segs.length).toBe(4); // 5 块里有 1 块没时间行 → 跳过
    expect(segs[0].start).toBeCloseTo(0.04, 3);
    expect(segs[0].end).toBeCloseTo(3.24, 3);
    expect(segs[1].text).toContain("wraps across two lines"); // 两行拼成一句
  });
  it("★★★ 内联标签被剥掉(<v Host> / <c.xxx>),不污染正文", () => {
    const segs = parseSrt(fx("srt"))!;
    const withTag = segs.find((s) => s.text.includes("Inline tags"))!;
    expect(withTag.text).not.toContain("<v");
    expect(withTag.start).toBeCloseTo(62.5, 1); // 00:01:02,500
  });
  it("★★★ VTT:跳过 WEBVTT 头与 NOTE 块,时间行带定位参数也能解析", () => {
    const segs = parseSrt(fx("vtt"))!;
    expect(segs.length).toBe(2);
    expect(segs[0].end).toBeCloseTo(4.5, 2); // align:start position:0% 被忽略
    expect(segs[1].text).not.toContain("<c.");
  });
  it("★★ 时间格式:含/不含小时、逗号/点分隔都认;垃圾串返回 null", () => {
    expect(srtTimeToSec("00:01:02,500")).toBeCloseTo(62.5, 3);
    expect(srtTimeToSec("01:02.5")).toBeCloseTo(62.5, 3);
    expect(srtTimeToSec("garbage")).toBeNull();
  });
  it("★★ 解析不出内容 → null(绝不返回空数组冒充成功)", () => {
    expect(parseSrt("")).toBeNull();
    expect(parseSrt("no timestamps at all")).toBeNull();
  });
});

describe("C28 · Whisper 家族 JSON 解析", () => {
  it("★★★ {segments:[…]} → 本项目稿格式 {start,end,speaker,text}", () => {
    const segs = parseWhisperJson(JSON.parse(fx("json")))!;
    expect(segs.length).toBe(6);
    expect(Object.keys(segs[0]).sort()).toEqual(["end", "speaker", "start", "text"]);
    expect(segs[0].speaker).toBe(""); // feed 稿不带说话人 → 留空(说话人已是软提醒层)
    expect(segs[5].end).toBeGreaterThan(segs[0].start);
  });
  it("★★★ 裸数组 / {results} 两种容器也吃(不同源包法不同)", () => {
    const seg = [{ start: 0, end: 1, text: "hi" }];
    expect(parseWhisperJson(seg)!.length).toBe(1);
    expect(parseWhisperJson({ results: seg } as any)!.length).toBe(1);
  });
  it("★★★ 缺时间/空文本的段被丢掉;全都不合格 → null", () => {
    expect(parseWhisperJson({ segments: [{ start: 0, end: 1, text: "  " }, { text: "no time" }] } as any)).toBeNull();
    expect(parseWhisperJson({ segments: [] } as any)).toBeNull();
    expect(parseWhisperJson(null as any)).toBeNull();
  });
  it("★★ 坏 JSON 不炸,返回 null 让调用方回落", () => {
    expect(parseFeedTranscript("json", "{not json")).toBeNull();
    expect(parseFeedTranscript("txt" as any, "whatever")).toBeNull();
  });
});

describe("C28 · parseFeed 抽出 <podcast:transcript>", () => {
  const xml = `<rss><channel>
    <item><title>A</title><link>https://x/a</link><pubDate>Mon, 11 Aug 2026 10:00:00 GMT</pubDate>
      <enclosure url="https://x/a.mp3" type="audio/mpeg"/>
      <podcast:transcript url="https://x/a.srt" type="application/x-subrip"/>
      <podcast:transcript url="https://x/a.json" type="application/json" language="en" rel="captions"/>
    </item>
    <item><title>B</title><link>https://x/b</link><pubDate>Mon, 11 Aug 2026 10:00:00 GMT</pubDate>
      <enclosure url="https://x/b.mp3" type="audio/mpeg"/>
    </item>
  </channel></rss>`;

  it("★★★ 一集挂多条稿 → 全收,交 pickFeedTranscript 挑(这里应挑到 JSON)", () => {
    const items = parseFeed(xml);
    expect(items[0].transcripts).toHaveLength(2);
    expect(pickFeedTranscript(items[0].transcripts)?.kind).toBe("json");
  });
  it("★★★ 没挂稿的集 → 空数组(不是 undefined),挑出来是 null → 回落 ASR", () => {
    const items = parseFeed(xml);
    expect(items[1].transcripts).toEqual([]);
    expect(pickFeedTranscript(items[1].transcripts)).toBeNull();
  });
});

describe("C28 · 题材筛选(用户:DOAC 只收商业/科技的)", () => {
  it("★★★ 商业/科技标题过;健康/心理/名人类不过", () => {
    expect(isOnTopic("How this founder scaled revenue to $100M")).toBe(true);
    expect(isOnTopic("The truth about AI agents at work")).toBe(true);
    expect(isOnTopic("The sleep expert: how to fix your circadian rhythm")).toBe(false);
    expect(isOnTopic("My childhood, my trauma, and finding peace")).toBe(false);
  });
  it("★★★ 按词边界比,不被 said/chair 里的 ai 误命中", () => {
    expect(isOnTopic("He said what he said about the chair")).toBe(false);
    expect(isOnTopic("A.I. is changing everything")).toBe(true);
  });
  it("★★★ 只对标了 topicFilter 的源生效,别的源一律放行(不影响既有 21 源)", () => {
    const item = { title: "The sleep expert on circadian rhythm" } as any;
    expect(passesTopicFilter(item, { key: "doac", topicFilter: true } as any)).toBe(false);
    expect(passesTopicFilter(item, { key: "lennys" } as any)).toBe(true);
  });
  it("★★ 空标题判不准 → 跳过(少发 ≪ 发离题)", () => {
    expect(isOnTopic("")).toBe(false);
    expect(isOnTopic(undefined as any)).toBe(false);
  });
});

// ── C28b · 有稿优先(drift #67)──
// 血账:Beyond Coding 263 集里 206 集有稿,**但最新 6 集恰好都没有** → 原来「一律取最新 N 集」
// 精准挑中 6 集全要 2.8h 转写的,run 32045583875 跑了 4h45m、注定撞 6h 上限白费。
// 用户要的是「有稿子的读稿子,没稿子的抓语音,让云端不闲着」→ 排序改成有稿优先。
describe("C28b · 选集把有稿的排前面(便宜的先吃,剩下时间才喂转写)", () => {
  const it_ = (date: string, hasT: boolean) => ({
    title: `Episode ${date}`,
    link: `https://x/${date}`,
    pubDateISO: `${date}T00:00:00.000Z`,
    hasAudio: true,
    enclosureUrl: `https://x/${date}.mp3`,
    transcripts: hasT ? [{ url: `https://x/${date}.srt`, type: "application/x-subrip" }] : [],
    durationSec: 3600,
  });
  // 最新的两集没稿(照 Beyond Coding 实况),更旧的两集有稿
  const items = [it_("2026-08-12", false), it_("2026-08-05", false), it_("2026-07-29", true), it_("2026-07-22", true)];
  const src = { key: "beyondcoding", name: "BC", feedUrl: "https://x/rss", asr: "whisperx" } as any;

  it("★★★ backfill 取 2 集 → 拿到的是那两集有稿的(不是最新那两集没稿的)", () => {
    const picks = selectBackfill(items as any, { n: 2, existingIds: [], source: src });
    expect(picks.map((p: any) => p.pubDateISO.slice(0, 10))).toEqual(["2026-07-22", "2026-07-29"]); // 处理序旧→新
    expect(picks.every((p: any) => pickFeedTranscript(p.transcripts))).toBe(true);
  });
  it("★★★ 每天自动跑的补历史(C31 新策略)同样有稿优先,且同档内仍按日期新→旧", () => {
    const picks = selectBackfillRecent(items as any, {
      n: 2, sinceISO: BACKFILL_SINCE, existingIds: [], source: src, libraryTitles: [],
    });
    // 没稿的 08-12/08-05 更新 —— 纯日期倒序会挑中它们,故这条断言本身就隔离了变量
    expect(picks.every((p: any) => pickFeedTranscript(p.transcripts))).toBe(true);
    // 同档(都有稿)内不得打乱日期语义(GLM 003[1]:原来只断言有稿,乱序也不会红)
    expect(picks.map((p: any) => p.pubDateISO.slice(0, 10))).toEqual(["2026-07-29", "2026-07-22"]);
  });
  it("★★★ 稿子不够时照旧补没稿的(不能因为挑食就少产出)", () => {
    const picks = selectBackfill(items as any, { n: 4, existingIds: [], source: src });
    expect(picks).toHaveLength(4); // 4 集全要,有稿的排前面但没稿的照样进
  });
  it("★★ 同为有稿(或同为无稿)时,仍按原有的日期序", () => {
    const allT = [it_("2026-07-22", true), it_("2026-07-29", true), it_("2026-08-05", true)];
    const picks = selectBackfill(allT as any, { n: 2, existingIds: [], source: src });
    // 同档内最新在前 → 取 08-05 与 07-29,处理序再排旧→新
    expect(picks.map((p: any) => p.pubDateISO.slice(0, 10))).toEqual(["2026-07-29", "2026-08-05"]);
  });
  it("★★★ 题材筛选也进了补历史路径(DOAC 补历史不该捞健康/名人集)", () => {
    const doac = { key: "doac", name: "DOAC", feedUrl: "https://x/rss", asr: "whisperx", topicFilter: true } as any;
    const mixed = [
      { ...it_("2026-08-01", true), title: "The sleep expert on circadian rhythm" },
      { ...it_("2026-07-01", true), title: "How this founder scaled revenue" },
    ];
    const picks = selectBackfill(mixed as any, { n: 2, existingIds: [], source: doac });
    expect(picks).toHaveLength(1);
    expect(picks[0].title).toContain("founder");
  });
});

// 独立审计 2026-08-18:transcriptDuration 零测试覆盖(改成恒返回 0 也全绿)。
// 它算的是写进 meta 的集时长 —— 归属闸门拿官方时长跟它比,写错=拿错稿也可能蒙混。
describe("C28 · transcriptDuration(写进 meta 的集时长,归属闸门要用)", () => {
  it("★★★ 取末段 end 作为时长(不是段数、不是 0)", () => {
    expect(transcriptDuration([
      { start: 0, end: 3.2, speaker: "", text: "a" },
      { start: 3.2, end: 907.5, speaker: "", text: "b" },
    ])).toBeCloseTo(907.5, 2);
  });
  it("★★★ 段序乱了也取最大 end(别假设输入有序)", () => {
    expect(transcriptDuration([
      { start: 100, end: 200, speaker: "", text: "b" },
      { start: 0, end: 50, speaker: "", text: "a" },
    ])).toBe(200);
  });
  it("★★ 空稿 → 0(不炸)", () => {
    expect(transcriptDuration([])).toBe(0);
  });
});

// drift #69(独立审计 2026-08-18 逮到,我引入的):有稿优先会让补历史**一口气跳到很老的一集**。
// C31 换策略后候选池固定(未入库 ∩ ≥ 年份下限)、不再有会后退的边界,但窗口仍要留:
// 无窗口地全表挑有稿的 → 为省钱一路挑到年份下限附近的老集,与用户要的「最新优先」相悖。
describe("drift #69 · 有稿优先必须限制在最新的一个窗口内(否则一路挑到很老的集)", () => {
  const mk = (date: string, hasT: boolean) => ({
    title: `Ep ${date}`, link: `https://x/${date}`, pubDateISO: `${date}T00:00:00.000Z`,
    hasAudio: true, enclosureUrl: `https://x/${date}.mp3`,
    transcripts: hasT ? [{ url: `https://x/${date}.srt`, type: "application/x-subrip" }] : [],
    durationSec: 3600,
  });
  const src = { key: "beyondcoding", name: "BC", feedUrl: "https://x/rss", asr: "whisperx" } as any;
  const pick = (items: any[], n: number) =>
    selectBackfillRecent(items as any, {
      n, sinceISO: BACKFILL_SINCE, existingIds: [], source: src, libraryTitles: [],
    });

  // 12 集倒序;只有很老的那集(第 10 个)有稿
  const farAway = [
    mk("2026-08-20", false), mk("2026-08-13", false), mk("2026-08-06", false), mk("2026-07-30", false),
    mk("2026-07-23", false), mk("2026-07-16", false), mk("2026-07-09", false), mk("2026-07-02", false),
    mk("2026-06-25", false), mk("2026-06-18", true), mk("2026-06-11", false), mk("2026-06-04", false),
  ];

  it("★★★ 有稿的那集远在窗口之外 → 不许跳过去(否则中间 9 集被永久落下)", () => {
    const picks = pick(farAway, 1); // n=1 → 窗口 4 集
    expect(picks[0].pubDateISO.slice(0, 10)).toBe("2026-08-20"); // 老实补紧挨边界的那集
    expect(picks[0].pubDateISO.slice(0, 10)).not.toBe("2026-06-18");
  });

  it("★★★ 有稿的集落在窗口内 → 照旧优先(护栏不能把便宜通道废掉)", () => {
    const inWindow = [...farAway];
    inWindow[2] = mk("2026-08-06", true); // 第 3 个,在 n=1 的 4 集窗口内
    const picks = pick(inWindow, 1);
    expect(picks[0].pubDateISO.slice(0, 10)).toBe("2026-08-06");
  });

  it("★★ 窗口随 n 放大(n 大时能看得更远,但仍有界)", () => {
    const picks = pick(farAway, 3); // n=3 → 窗口 12 → 有稿那集进得来
    expect(picks.map((p: any) => p.pubDateISO.slice(0, 10))).toContain("2026-06-18");
  });
});

// ── C36 · text/plain + text/html 官方稿摄取(Gherkin 见 docs/user-stories.md C36)──
//
// 2026-08-24 实抓真稿确认两种格式的形状(fixture 文字全部自撰,同 C28 版权口径):
// · transistor 系(workos/rework/devtools):段头「人名  (00:02):」,时间点密(41 个/25 分钟集)
// · changelog:<cite>人名:</cite> + <p>\[00:00\] 正文</p>,时间点稀(10 个/114 个说话块,末点 80:41)
// 时间点稀 → 段起点用「上一个真时间点」携带;稿末时间 = 最后真时间点 + 其后词数按 2.5 词/秒估
// (否则归属闸门拿末段时间比官方时长会误拦正确稿;估的是尾巴不是全稿,误差远小于容差 max(120s,5%))。

const TRANSISTOR_FX = `Ada Vendor  (00:02):
Welcome to a made up show about made up things. I am your host speaking entirely fictional words for this fixture.

This second paragraph has no header line, so it belongs to the same speaker and the same stanza.

Beau Guest (01:15):
Thanks for having me. This reply is also fabricated for the test.

Ada Vendor  (1:02:03):
A stamp with hours must parse too. one two three four five six seven eight nine ten
`;

const CHANGELOG_FX = `<!DOCTYPE html>
<html>
<head><title>Transcript for Fixture #1</title></head>
<body>
    <cite>Ada Vendor:</cite>
    <p>\\[00:00\\] It&#39;s a fabricated opening with an entity to decode &amp; strip.</p>

    <cite>Beau Guest:</cite>
    <p>No stamp on this block, so its start carries the previous stamp.</p>

    <cite>Ada Vendor:</cite>
    <p>\\[02:30\\] Final block. one two three four five six seven eight nine ten <em>tagged</em> words.</p>
</body>
</html>`;

describe("C36 · 挑稿优先级:字幕格式 > html > plain(文本只当兜底)", () => {
  it("★★★ 有 VTT 就不用 html/plain", () => {
    const got = pickFeedTranscript([
      { url: "https://x/t", type: "text/html" },
      { url: "https://x/t.vtt", type: "text/vtt" },
      { url: "https://x/t.txt", type: "text/plain" },
    ]);
    expect(got?.kind).toBe("vtt");
  });
  it("★★★ html 优先于 plain(带说话人结构,信息多一档)", () => {
    const got = pickFeedTranscript([
      { url: "https://x/t.txt", type: "text/plain" },
      { url: "https://x/transcript", type: "text/html" },
    ]);
    expect(got).toEqual({ url: "https://x/transcript", kind: "html" });
  });
  it("★★ 马虎 type + .txt 扩展名 → 按 plain 兜底(同 GLM 001[4] 的扩展名兜底口径)", () => {
    expect(pickFeedTranscript([{ url: "https://x/transcript.txt", type: "unknown" }])?.kind).toBe("plain");
  });
});

describe("C36 · transistor 纯文本解析(workos/rework/devtools)", () => {
  it("★★★ 段头「人名 (mm:ss):」→ {start,end,speaker,text};无头段并入上一段", () => {
    const segs = parseStampedText(TRANSISTOR_FX)!;
    expect(segs.length).toBe(3);
    expect(segs[0]).toMatchObject({ start: 2, end: 75, speaker: "Ada Vendor" });
    expect(segs[0].text).toContain("second paragraph has no header");
    expect(segs[1]).toMatchObject({ start: 75, speaker: "Beau Guest" });
    expect(segs[1].end).toBeCloseTo(3723, 0); // = 下一段头 1:02:03
  });
  it("★★★ 带小时的段头 (1:02:03) 解析成 3723 秒;末段 end = 末点 + 词数/2.5 估算(归属闸门要用)", () => {
    const segs = parseStampedText(TRANSISTOR_FX)!;
    const last = segs[segs.length - 1];
    expect(last.start).toBe(3723);
    // 末段 17 词 / 2.5 词秒 = 6.8s
    expect(last.end).toBeCloseTo(3723 + 17 / 2.5, 1);
    expect(last.end).toBeGreaterThan(last.start);
  });
  it("★★★ 通篇没有时间点 → null(回落 ASR,归属闸门永远有末段时间可判)", () => {
    expect(parseStampedText("Just prose.\n\nNo stamps anywhere in this text.")).toBeNull();
    expect(parseStampedText("")).toBeNull();
  });
});

describe("C36 · changelog 网页稿解析", () => {
  it("★★★ <cite>+<p> → 段;实体解码(&#39;→');标签剥掉;\\[mm:ss\\] 时间点从正文摘除", () => {
    const segs = parseTranscriptHtml(CHANGELOG_FX)!;
    expect(segs.length).toBe(3);
    expect(segs[0]).toMatchObject({ start: 0, speaker: "Ada Vendor" });
    expect(segs[0].text).toContain("It's a fabricated opening");
    expect(segs[0].text).toContain("decode & strip");
    expect(segs[0].text).not.toMatch(/\[00:00\]|&#39;|&amp;/);
    expect(segs[2].text).toContain("tagged words");
    expect(segs[2].text).not.toContain("<em>");
  });
  it("★★★ 时间点稀:无点的块 start 携带上一个真时间点;end = 下一个真时间点", () => {
    const segs = parseTranscriptHtml(CHANGELOG_FX)!;
    expect(segs[1].start).toBe(0); // 携带
    expect(segs[1].end).toBe(150); // 下一个真时间点 02:30
    expect(segs[2].start).toBe(150);
  });
  it("★★★ 末段 end 用词数估(150 词/分),稿末时间不至于停在最后一个稀疏时间点上", () => {
    const segs = parseTranscriptHtml(CHANGELOG_FX)!;
    const last = segs[segs.length - 1];
    // 末段正文 14 词(Final block. one…ten tagged words.)/ 2.5 词秒 = 5.6s
    expect(last.end).toBeCloseTo(150 + 14 / 2.5, 1);
  });
  it("★★★ <head>/<title> 的字不许漏进正文;通篇无时间点 → null", () => {
    const segs = parseTranscriptHtml(CHANGELOG_FX)!;
    expect(segs.map((s) => s.text).join(" ")).not.toContain("Transcript for Fixture");
    expect(parseTranscriptHtml("<body><cite>A:</cite><p>no stamps</p></body>")).toBeNull();
  });
  it("★★★ 时间点覆盖不足一半的稿 → null 回落 ASR(2026-08-24 真稿实测:changelog 672/671 零点、673 仅 10点/114块且末点只到时长 82%,估稿末必被归属闸门误拦——与其塞估算给闸门不如老实回落)", () => {
    const sparse = `<body>
      <cite>A:</cite><p>\\[00:10\\] only the first block has a stamp.</p>
      <cite>B:</cite><p>second block, no stamp.</p>
      <cite>A:</cite><p>third block, no stamp.</p>
      <cite>B:</cite><p>fourth block, no stamp either.</p>
    </body>`;
    expect(parseTranscriptHtml(sparse)).toBeNull();
  });
  it("★★★ GLM 010 采纳三条:①畸形实体不抛 ②时间点回跳 → null 回落 ③<script>/<style> 连内容剥掉", () => {
    // ① 超范围码点曾让 RangeError 从纯函数炸出去(违反「解析失败返回 null」契约)
    expect(() =>
      parseTranscriptHtml("<body><cite>A:</cite><p>[00:10] x &#1114112; y</p><cite>B:</cite><p>[00:20] z</p></body>"),
    ).not.toThrow();
    // ② 回跳稿会产负时长段、稿末时长算小 → 归属闸门误拦正确稿,不如老实回落 ASR
    expect(parseStampedText("A (10:00):\nxx yy\n\nB (00:05):\nzz ww")).toBeNull();
    // ③ 光剥标签会把脚本文本混进正文
    const withScript = `<body><p>Kim (00:00):<br>Real words here.<br><br>Jay (00:54):<br>More real words.</p><script>var junk = "evil (99:88):";</script></body>`;
    const segs = parseTranscriptHtml(withScript)!;
    expect(segs.map((s) => s.text).join(" ")).not.toContain("junk");
    expect(segs.length).toBe(2);
  });
  it("★★★ GLM 011[1]:未闭合的 <script>(截断页)也要连内容剥到文末 —— 否则脚本文本会被段头解析成带伪时间点的假段", () => {
    const truncated = `<body><p>Kim (00:00):<br>Real words.<br><br>Jay (00:54):<br>Reply words.</p><script>var junk = 1;\nFake (01:30):\ninjected junk line`;
    const segs = parseTranscriptHtml(truncated)!;
    expect(segs.length).toBe(2);
    expect(segs.map((s) => s.text + s.speaker).join(" ")).not.toMatch(/junk|Fake/);
  });
  it("★★★ buzzsprout 形状(rework):无 <cite>,正文「人名 (00:00):<br>话」→ 转行后复用段头解析,密点直接可用", () => {
    const bz = `<body><p><!--block-->Kim (00:00):<br>Welcome to a fabricated show about nothing real at all.<br><br>Jay (00:54):<br>Sure. This is also made up text for the fixture only.</p></body>`;
    const segs = parseTranscriptHtml(bz)!;
    expect(segs.length).toBe(2);
    expect(segs[0]).toMatchObject({ start: 0, end: 54, speaker: "Kim" });
    expect(segs[1].speaker).toBe("Jay");
    expect(segs[1].start).toBe(54);
    expect(segs[1].text).not.toContain("<br>");
  });
});

describe("C36 · parseFeedTranscript 分派 + 现有格式零改动锚", () => {
  it("★★★ kind=plain/html 走新解析器", () => {
    expect(parseFeedTranscript("plain", TRANSISTOR_FX)?.length).toBe(3);
    expect(parseFeedTranscript("html", CHANGELOG_FX)?.length).toBe(3);
  });
  it("★★★ 解析不出 → null(调用方回落 ASR,行为与 C28 逐字一致)", () => {
    expect(parseFeedTranscript("plain", "no stamps")).toBeNull();
    expect(parseFeedTranscript("html", "<p>no stamps</p>")).toBeNull();
  });
  it("★★ 源码锚:srt/vtt/json 分派一行未动(C36 DoD①「现有格式路径零改动」)", () => {
    const src = readFileSync(new URL("../scripts/feed-transcript.mjs", import.meta.url), "utf8");
    expect(src).toContain('if (kind === "srt" || kind === "vtt") return parseSrt(raw);');
  });
});

describe("C36 · 预算/排序只认字幕格式为「稳有稿」(html/plain 下载前不知有没有时间点,防炸预算)", () => {
  it("★★★ hasTimedFeedTranscript:json/srt/vtt 算稳,html/plain 不算", () => {
    expect(hasTimedFeedTranscript([{ url: "https://x/t.srt", type: "application/x-subrip" }])).toBe(true);
    expect(hasTimedFeedTranscript([{ url: "https://x/t", type: "text/html" }])).toBe(false);
    expect(hasTimedFeedTranscript([{ url: "https://x/t.txt", type: "text/plain" }])).toBe(false);
    expect(hasTimedFeedTranscript([])).toBe(false);
  });
  it("★★★ 排序:只有 html 稿的集不许按「便宜」插队 —— 与无稿集同档按日期排(devtools 的 txt 若插队会烧 2.8h ASR 炸预算)", () => {
    const mk = (d: string, transcripts: any[]) => ({
      title: `Ep ${d}`, link: `https://x/${d}`, pubDateISO: `${d}T00:00:00.000Z`,
      hasAudio: true, enclosureUrl: `https://x/${d}.mp3`, transcripts, durationSec: 3600,
    }) as any;
    const items = [
      mk("2026-08-20", [{ url: "https://x/a", type: "text/html" }]), // 最新但只有 html 稿
      mk("2026-08-19", [{ url: "https://x/b.srt", type: "application/x-subrip" }]), // 字幕稿
      mk("2026-08-18", []),
    ];
    const got = selectBackfillRecent(items, {
      n: 2, sinceISO: BACKFILL_SINCE, existingIds: [], source: { key: "s", asr: "whisperx" } as any, libraryTitles: [],
    });
    // 字幕稿排第一(稳便宜);html 稿按日期与无稿同权
    expect(got[0].pubDateISO.slice(0, 10)).toBe("2026-08-19");
    expect(got[1].pubDateISO.slice(0, 10)).toBe("2026-08-20");
  });
});
