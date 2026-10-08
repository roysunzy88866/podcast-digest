// C43 · 跨国串门对齐(用户 2026-10-09:「让每天每期的内容都能跟他对齐」)
import { describe, it, expect } from "vitest";
import { parseCgcFeed, isCompilation, titleSim, findByTitle, findByDate, ourSourceFor, cgcKey, durMin } from "../scripts/cgc-align.mjs";
import { resolveCgc, activeSources, talkItemFromSeed, sourceForId, SOURCES } from "../scripts/run-pipeline.mjs";
import { pickCgcVideo } from "../scripts/patrol-talks.mjs";

const item = (title: string, desc: string, dur = "3600", pub = "Wed, 07 Oct 2026 07:19:16 GMT") =>
  `<item><title><![CDATA[${title}]]></title><guid>g-${title}</guid><pubDate>${pub}</pubDate><itunes:duration>${dur}</itunes:duration><description><![CDATA[<p>📝 本期播客简介 本期我们克隆了：${desc}</p>]]></description></item>`;

describe("C43 · 读它的选题单(简介里「克隆了:节目 · 原标题 原内容更新时间:…」)", () => {
  it("★★★ 新格式拆出节目名/原标题/原日期;老格式「知名播客 X …」整串当原标题;时长换分钟", () => {
    const xml = item("#757.ChatGPT 负责人", "Lenny's Podcast · OpenAI’s Head of ChatGPT: We’re entering a new era 原内容更新时间：2026-10-04 正文") +
      item("#747. 扎克伯格", "Colossus Magazine · Mark Zuckerberg 原内容更新时间：Mon, 14 Sep 2026 正文", "01:49:30") +
      item("#677. 老格式", "知名播客 Founders Podcast Li Lu and Charlie Munger 原内容更新时间：2019 年");
    const [a, b, c] = parseCgcFeed(xml);
    expect([a.show, a.origTitle, a.origISO.slice(0, 10), a.durMin]).toEqual(["Lenny's Podcast", "OpenAI’s Head of ChatGPT: We’re entering a new era", "2026-10-04", 60]);
    expect([b.show, b.origISO.slice(0, 10), b.durMin]).toEqual(["Colossus Magazine", "2026-09-14", 110]);
    expect([c.show, c.origTitle, c.origISO]).toEqual(["", "Founders Podcast Li Lu and Charlie Munger", ""]);
    expect(durMin("5400")).toBe(90);
  });
  it("★★★ 混剪/整套讲座/超 4 小时不对齐", () => {
    expect(isCompilation({ title: "Huberman 多集混剪", origTitle: "", durMin: 120 })).toBe(true);
    expect(isCompilation({ title: "x", origTitle: "How to Think About Science — Complete 24-part Series", durMin: 60 })).toBe(true);
    expect(isCompilation({ title: "费曼", origTitle: "x", durMin: 334 })).toBe(true);
    expect(isCompilation({ title: "Acquired", origTitle: "Rolex", durMin: 273 })).toBe(true);
    expect(isCompilation({ title: "Lenny", origTitle: "x", durMin: 80 })).toBe(false);
  });
});

describe("C43 · 找原集:不猜(实测两个误配:短标题「Interconnects AI」、另一场 Ray Dalio)", () => {
  const items = [
    { title: "The RLVR Revolution — with Nathan Lambert (AI2, Interconnects)", pubDateISO: "2026-09-20T00:00:00Z" },
    { title: "Bill Ackman: The Biggest Fight of His Life", pubDateISO: "2026-09-29T08:00:00Z" },
  ];
  it("★★★ 原标题不到 3 个词不按标题比;标题像就认", () => {
    expect(findByTitle(items, "Interconnects AI")).toBeNull();
    expect(findByTitle(items, "Bill Ackman: The Biggest Fight of His Life (full)")).toBe(items[1]);
  });
  it("★★★ 它用 YouTube 标题、feed 是播客标题 → 原日期 ±2 天该源只有一期就认;两期以上不猜", () => {
    expect(findByDate(items, "2026-09-29T12:00:00Z")).toBe(items[1]);
    expect(findByDate([...items, { title: "x", pubDateISO: "2026-09-30T00:00:00Z" }], "2026-09-29T12:00:00Z")).toBeNull();
  });
  it("★★ 节目名对我们的源:忽略 the / Podcast 后缀;太短不比", () => {
    const src = [{ key: "iltb", name: "Invest Like the Best" }, { key: "knowledge", name: "The Knowledge Project" }];
    expect(ourSourceFor("Invest Like The Best", src)?.key).toBe("iltb");
    expect(ourSourceFor("The Knowledge Project Podcast", src)?.key).toBe("knowledge");
    expect(ourSourceFor("", src)).toBeNull();
    expect(cgcKey("All-In with Chamath, Jason, Sacks & Friedberg")).toBe("cgc-all-in-with-chamath");
  });
});

describe("C43 · resolveCgc:找到 → 交处理;找不到 → YouTube;没查成 → 下班再试(不能当没有)", () => {
  const our = { key: "knowledge", name: "The Knowledge Project", feedUrl: "u" };
  const e = { show: "The Knowledge Project Podcast", origTitle: "Bill Ackman: People are Going to Lose a Lot of Money", origISO: "2026-09-29T12:00:00Z", durMin: 67, title: "#748" };
  const feedItem = { title: "Bill Ackman: The Biggest Fight of His Life", pubDateISO: "2026-09-29T08:00:00Z" };
  it("★★★ 已订源按日期找到 → 用我们的源", async () => {
    const r = await resolveCgc(e, { sources: [our], getFeed: async () => [feedItem], apple: async () => null });
    expect(r?.pair?.source.key).toBe("knowledge");
  });
  it("★★★ 我们的 feed 没抓下来 / 目录没查成 → null(下班再试),不判成「去 YouTube」", async () => {
    expect(await resolveCgc(e, { sources: [our], getFeed: async () => null, apple: async () => null })).toBeNull();
    expect(await resolveCgc({ ...e, show: "Ezra" }, { sources: [our], getFeed: async () => [], apple: async () => undefined })).toBeNull();
  });
  it("★★★ 没订的节目在目录里找到 → 新对齐源;目录也没有 → YouTube;合集 → 终态", async () => {
    const hit = { trackName: "Mark Zuckerberg", collectionName: "Colossus Magazine", feedUrl: "f", episodeUrl: "a.mp3", releaseDate: "2026-09-14T10:00:00Z", trackTimeMillis: 6960000 };
    const r = await resolveCgc({ ...e, show: "Colossus Magazine", origTitle: "Mark Zuckerberg" }, { sources: [our], getFeed: async () => [], apple: async () => hit });
    expect(r?.pair?.source).toMatchObject({ key: "cgc-colossus-magazine", alignOnly: true, isNew: true, asr: "whisperx" });
    expect(r?.pair?.item).toMatchObject({ enclosureUrl: "a.mp3", durationSec: 6960 });
    expect(await resolveCgc({ ...e, show: "Matt Pocock" }, { sources: [our], getFeed: async () => [], apple: async () => null })).toEqual({ youtube: true });
    expect((await resolveCgc({ ...e, durMin: 300 }, { sources: [our], getFeed: async () => [], apple: async () => null }))?.status).toMatch(/合集/);
  });
});

describe("C43 · 对齐专用源与必收种子", () => {
  it("★★★ 对齐专用源不进日常新集轮询,但 id 能反查回源", () => {
    const all = [{ key: "a" }, { key: "cgc-x", alignOnly: true }];
    expect(activeSources(all).map((s: any) => s.key)).toEqual(["a"]);
    SOURCES.push({ key: "cgc-test-show", name: "T", feedUrl: "u", alignOnly: true } as any);
    expect(sourceForId("2026-10-01-cgc-test-show-some-title")?.key).toBe("cgc-test-show");
    SOURCES.pop();
  });
  it("★★★ seed.json 带 must → 条目带 must(云端不过判官);不带就没有", () => {
    const seed = { title: "t", url: "u", upload_date: "20261003", audio_asset_url: "a", duration_sec: 60 };
    expect(talkItemFromSeed({ ...seed, must: true }).must).toBe(true);
    expect(talkItemFromSeed(seed).must).toBeUndefined();
  });
  it("★★ YouTube 搜索结果挑原视频:标题对上;二手解读频道不认", () => {
    const entries = [{ id: "iAg", channel: "菜9", title: "月上線2500個PR的 Lauren Tan" }, { id: "MN9", channel: "Matt Pocock", title: "LIVE: Poteto (creator of pstack) on shipping 1,000's of PR's a month at SpaceX" }];
    expect(pickCgcVideo(entries, { show: "Matt Pocock", title: "LIVE: Poteto (creator of pstack) on shipping 1,000's of PR's" })?.id).toBe("MN9");
    expect(pickCgcVideo(entries, { show: "x", title: "Something else entirely here" })).toBeNull();
  });
});

it("titleSim 健全性", () => {
  expect(titleSim("a b c", "")).toBe(0);
});
