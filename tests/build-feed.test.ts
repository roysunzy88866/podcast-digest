// C4 Scenario 3 · 私有播客 feed(RSS 2.0 + iTunes)真业务测试。
// 只调被测函数;每条尽量可变异验证(★)。
import { describe, it, expect } from "vitest";
import {
  buildFeedXml,
  buildItem,
  hasAudio,
  toRfc822,
  formatDuration,
  xmlEscape,
  parseFeedEnclosureUrls,
  feedEnclosuresFromXml,
} from "../scripts/build-feed.mjs";

const EP_A = {
  id: "2026-07-08-modal",
  title: "为什么 AI 基础设施必须为 Agent 进化",
  description: "Modal 从通用无服务器转向 AI 推理基础设施。",
  pubDate: "2026-07-08",
  audioUrl: "data/episodes/2026-07-08-modal/audio.mp3",
  audioLength: 1234567,
  durationSec: 905, // 15:05
  link: "https://www.latent.space/p/modal2026",
};
const EP_NO_AUDIO = {
  id: "2026-06-24-databricks",
  title: "开源前沿生态",
  description: "Databricks 谈平台整合。",
  pubDate: "2026-06-24",
  // 无 audioUrl / audioLength / durationSec → 不该进 feed
};

describe("toRfc822 · locale 无关的 RFC-822(UTC 固定英文星期月份)", () => {
  it("★ 固定日期 → 精确字符串", () => {
    expect(toRfc822("2026-07-08T00:00:00Z")).toBe("Wed, 08 Jul 2026 00:00:00 GMT");
    expect(toRfc822(new Date("2026-06-24T18:53:16Z"))).toBe("Wed, 24 Jun 2026 18:53:16 GMT");
  });
  it("★ 非法日期 → 抛错(不产非法 pubDate)", () => {
    expect(() => toRfc822("not-a-date")).toThrow();
  });
});

describe("formatDuration · 秒 → itunes:duration", () => {
  it("★ <1h 用 MM:SS,≥1h 用 H:MM:SS", () => {
    expect(formatDuration(65)).toBe("01:05");
    expect(formatDuration(905)).toBe("15:05");
    expect(formatDuration(3665)).toBe("1:01:05");
  });
});

describe("hasAudio · 无音频集不进 feed 的判据(Scenario 3a)", () => {
  it("★ 有 url+length+duration → true", () => {
    expect(hasAudio(EP_A)).toBe(true);
  });
  it("★ 缺 url / length≤0 / duration≤0 → 一律 false", () => {
    expect(hasAudio(EP_NO_AUDIO)).toBe(false);
    expect(hasAudio({ ...EP_A, audioUrl: "" })).toBe(false);
    expect(hasAudio({ ...EP_A, audioLength: 0 })).toBe(false);
    expect(hasAudio({ ...EP_A, durationSec: 0 })).toBe(false);
  });
});

describe("buildItem · 单集 <item> 必填字段齐全", () => {
  const item = buildItem(EP_A);
  it("含 title/description/pubDate/guid/enclosure/itunes:duration", () => {
    expect(item).toContain("<title>为什么 AI 基础设施必须为 Agent 进化</title>");
    expect(item).toContain("<description>Modal 从通用无服务器转向 AI 推理基础设施。</description>");
    expect(item).toContain("<pubDate>Wed, 08 Jul 2026 00:00:00 GMT</pubDate>");
    expect(item).toContain("<itunes:duration>15:05</itunes:duration>");
  });
  it("★ enclosure 的 url/length/type 都正确", () => {
    expect(item).toContain('url="data/episodes/2026-07-08-modal/audio.mp3"');
    expect(item).toContain('length="1234567"');
    expect(item).toContain('type="audio/mpeg"');
  });
});

describe("buildFeedXml · RSS 2.0 + iTunes 命名空间;无音频集剔除", () => {
  const xml = buildFeedXml([EP_A, EP_NO_AUDIO], { title: "英文播客中文精华", link: "https://x.example", author: "me" });
  it("RSS 2.0 声明 + itunes namespace", () => {
    expect(xml).toContain('<rss version="2.0"');
    expect(xml).toContain('xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"');
    expect(xml).toContain("<channel>");
    expect(xml).toContain("<title>英文播客中文精华</title>");
  });
  it("★ 有音频的集进 feed(一个 <item>)", () => {
    expect(xml).toContain("为什么 AI 基础设施必须为 Agent 进化");
    expect((xml.match(/<item>/g) || []).length).toBe(1);
  });
  it("★ 无音频的集不进 feed(不挂空 enclosure,Scenario 3a)", () => {
    expect(xml).not.toContain("开源前沿生态");
    // 没有任何 enclosure 缺 url 的畸形项
    expect(xml).not.toContain('url=""');
  });
  it("空集列表 → 合法空 feed(0 个 item,不崩)", () => {
    const empty = buildFeedXml([], {});
    expect(empty).toContain("<channel>");
    expect((empty.match(/<item>/g) || []).length).toBe(0);
  });
});

describe("parseFeedEnclosureUrls / feedEnclosuresFromXml · 读回 enclosure 供闸门 ④(F1 修复)", () => {
  const xml = buildFeedXml(
    [
      { ...EP_A, audioUrl: "data/episodes/a/audio.mp3" },
      { ...EP_A, id: "b", title: "B", audioUrl: "data/episodes/b/audio.mp3" },
    ],
    {},
  );

  it("★ 解析出 feed 里每条 <enclosure url>(顺序保真)", () => {
    expect(parseFeedEnclosureUrls(xml)).toEqual([
      "data/episodes/a/audio.mp3",
      "data/episodes/b/audio.mp3",
    ]);
  });

  it("★ url 里的 XML 转义字符被正确反解析(&amp; → &)", () => {
    const item = buildItem({ ...EP_A, audioUrl: "data/x&y/audio.mp3" });
    expect(item).toContain('url="data/x&amp;y/audio.mp3"'); // feed 里是转义态
    expect(parseFeedEnclosureUrls(item)).toEqual(["data/x&y/audio.mp3"]); // 读回是原始态
  });

  it("★ 映射 { id, path };公开 /audio/<id>.mp3 反解回本地音频(C7a Pages 静态,drift #18)", () => {
    const mixed = buildFeedXml(
      [
        { ...EP_A, audioUrl: "data/episodes/a/audio.mp3" },
        { ...EP_A, id: "modal", title: "M", audioUrl: "https://listen.hearagain.space/audio/2026-07-08-modal.mp3" },
      ],
      {},
    );
    expect(feedEnclosuresFromXml(mixed, { root: "/repo" })).toEqual([
      { id: "data/episodes/a/audio.mp3", path: "/repo/data/episodes/a/audio.mp3" },
      {
        id: "https://listen.hearagain.space/audio/2026-07-08-modal.mp3",
        path: "/repo/data/episodes/2026-07-08-modal/audio.mp3",
      },
    ]);
  });

  it("★★ 认不出的 http url(非 /audio/<id>.mp3)→ path=null,交闸门判「查不了≠通过」(不静默跳过=不重蹈 D35 fail-open)", () => {
    const weird = buildFeedXml([{ ...EP_A, audioUrl: "https://evil.example/nope.txt" }], {});
    expect(feedEnclosuresFromXml(weird, { root: "/repo" })).toEqual([{ id: "https://evil.example/nope.txt", path: null }]);
  });

  it("★★ 死链回归守卫:feed 写了但文件不存在,绝不在此被过滤掉(否则闸门 ④ 永不触发=F1 病根)", () => {
    const ghostXml = buildFeedXml([{ ...EP_A, audioUrl: "data/episodes/ghost/audio.mp3" }], {});
    const encs = feedEnclosuresFromXml(ghostXml, { root: "/nonexistent-root" });
    expect(encs).toHaveLength(1); // 原样交给闸门,而非旧代码 .filter(existsSync) 先滤掉死链
    expect(encs[0].path).toBe("/nonexistent-root/data/episodes/ghost/audio.mp3");
  });
});

describe("xmlEscape · 文本 XML 正确转义(防 & < > 破坏结构)", () => {
  it("★ & < > \" ' 全转义", () => {
    expect(xmlEscape(`A&B<C>D"E'F`)).toBe("A&amp;B&lt;C&gt;D&quot;E&apos;F");
  });
  it("★ feed 里含特殊字符的标题被转义(不破 XML)", () => {
    const xml = buildFeedXml([{ ...EP_A, title: "AT&T 与 <云>" }], {});
    expect(xml).toContain("AT&amp;T 与 &lt;云&gt;");
    expect(xml).not.toContain("AT&T 与 <云>");
  });
});
