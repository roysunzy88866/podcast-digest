// C7b 编排器 · 纯逻辑真业务测试(只调被测函数、不重抄逻辑、可变异)
// 守:RSS 解析 / 过滤 ainews+无音频 / 派 id / cutoff 去重「只向前看」(drift #22)。
import { describe, it, expect } from "vitest";
import { parseFeed, isInterview, deriveId, selectNew } from "../scripts/run-pipeline.mjs";

// 镜像真实 latent.space feed 形状:CDATA 标题、enclosure 音频、ainews 每日快讯混入。
const FEED = `<?xml version="1.0"?><rss><channel>
<item>
  <title><![CDATA[🔬 The Lab of the Future — Andy Beam & Rafa]]></title>
  <link>https://www.latent.space/p/the-lab-of-the-future-should-feel</link>
  <pubDate>Thu, 16 Jul 2026 13:30:44 GMT</pubDate>
  <enclosure url="https://x/a.mp3" length="1" type="audio/mpeg"/>
</item>
<item>
  <title><![CDATA[AINews daily]]></title>
  <link>https://www.latent.space/p/ainews-kimi-k3-28t-a50b-the-largest</link>
  <pubDate>Fri, 17 Jul 2026 01:46:36 GMT</pubDate>
  <enclosure url="https://x/b.mp3" length="1" type="audio/mpeg"/>
</item>
<item>
  <title><![CDATA[Modal interview]]></title>
  <link>https://www.latent.space/p/modal2026</link>
  <pubDate>Wed, 08 Jul 2026 10:00:00 GMT</pubDate>
  <enclosure url="https://x/c.mp3" length="1" type="audio/mpeg"/>
</item>
<item>
  <title><![CDATA[Text-only recap no audio]]></title>
  <link>https://www.latent.space/p/aiewf26trends</link>
  <pubDate>Tue, 14 Jul 2026 23:21:21 GMT</pubDate>
</item>
</channel></rss>`;

describe("parseFeed", () => {
  const items = parseFeed(FEED);
  it("解析出全部 item 与字段", () => {
    expect(items).toHaveLength(4);
    expect(items[0].title).toContain("Lab of the Future");
    expect(items[0].link).toBe("https://www.latent.space/p/the-lab-of-the-future-should-feel");
    expect(items[0].pubDateISO).toBe("2026-07-16T13:30:44.000Z");
    expect(items[0].hasAudio).toBe(true);
  });
  it("无 enclosure 的 item hasAudio=false", () => {
    expect(items[3].hasAudio).toBe(false);
  });
});

describe("isInterview", () => {
  const items = parseFeed(FEED);
  it("真访谈(有音频、非 ainews)= true", () => {
    expect(isInterview(items[0])).toBe(true);
  });
  it("排掉 ainews 每日快讯(即便有音频)", () => {
    expect(isInterview(items[1])).toBe(false);
  });
  it("排掉无音频的文本帖", () => {
    expect(isInterview(items[3])).toBe(false);
  });
});

describe("deriveId", () => {
  it("<date>-latent-space-<slug>", () => {
    const items = parseFeed(FEED);
    expect(deriveId(items[0])).toBe("2026-07-16-latent-space-the-lab-of-the-future-should-feel");
    expect(deriveId(items[2])).toBe("2026-07-08-latent-space-modal2026");
  });
});

describe("selectNew · 只向前看 + 去重(drift #22)", () => {
  const items = parseFeed(FEED);
  it("无基线一律返回空(拒绝无边界跑 backlog)", () => {
    expect(selectNew(items, { sinceISO: "", existingIds: [] })).toEqual([]);
  });
  it("只取严格晚于 cutoff 的访谈,升序", () => {
    // cutoff = modal(07-08)之后 → 只剩 Lab(07-16),ainews 被 isInterview 排掉
    const picks = selectNew(items, { sinceISO: "2026-07-08T10:00:00.000Z", existingIds: [] });
    expect(picks.map((p) => deriveId(p))).toEqual(["2026-07-16-latent-space-the-lab-of-the-future-should-feel"]);
  });
  it("已处理过的集(existingIds)被去重掉", () => {
    const picks = selectNew(items, {
      sinceISO: "2026-07-01T00:00:00.000Z",
      existingIds: ["2026-07-16-latent-space-the-lab-of-the-future-should-feel"],
    });
    // Lab 已处理 → 排掉;modal(07-08)晚于 cutoff 且未处理 → 入选
    expect(picks.map((p) => deriveId(p))).toEqual(["2026-07-08-latent-space-modal2026"]);
  });
  it("cutoff 晚于所有集 → 空(无新集)", () => {
    expect(selectNew(items, { sinceISO: "2026-08-01T00:00:00.000Z", existingIds: [] })).toEqual([]);
  });
});
