import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import {
  pickFeedTranscript,
  parseWhisperJson,
  parseSrt,
  srtTimeToSec,
  parseFeedTranscript,
  isOnTopic,
} from "../scripts/feed-transcript.mjs";
import { parseFeed, passesTopicFilter, selectBackfill, selectBackfillBackward } from "../scripts/run-pipeline.mjs";

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

describe("C28 · 挑稿子:带时间轴的才要,纯文本一律不要", () => {
  it("★★★ JSON 优先于 SRT(信息最全)", () => {
    const got = pickFeedTranscript([
      { url: "https://x/t.srt", type: "application/x-subrip" },
      { url: "https://x/t.json", type: "application/json" },
    ]);
    expect(got).toEqual({ url: "https://x/t.json", kind: "json" });
  });
  it("★★★ 纯文本(无时间戳)→ 不要,返回 null 让调用方回落 ASR(WorkOS 就是这种)", () => {
    expect(pickFeedTranscript([{ url: "https://x/transcript.txt", type: "text/plain" }])).toBeNull();
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
  it("★★★ 但认得的 text/plain 仍然要拒(别被扩展名兜底反手放进来)", () => {
    expect(pickFeedTranscript([{ url: "https://x/transcript.txt", type: "text/plain" }])).toBeNull();
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
  it("★★★ 每天自动跑的倒序补历史同样有稿优先,且同档内仍是「紧挨边界先补」", () => {
    const picks = selectBackfillBackward(items as any, {
      n: 2, beforeISO: "2026-09-01T00:00:00.000Z", existingIds: [], source: src, libraryTitles: [],
    });
    // 没稿的 08-12/08-05 更靠近边界 —— 纯日期倒序会挑中它们,故这条断言本身就隔离了变量
    expect(picks.every((p: any) => pickFeedTranscript(p.transcripts))).toBe(true);
    // 同档(都有稿)内不得打乱原有倒序语义(GLM 003[1]:原来只断言有稿,乱序也不会红)
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
