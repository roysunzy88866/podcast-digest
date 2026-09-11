// C6 · 关联区③「相关单集」渲染(US-7)的真业务测试
// 纪律:只调被测函数、不重抄逻辑。
import { describe, it, expect } from "vitest";
import { renderRelatedEpisodes, renderEpisode, renderAudioPlayer } from "../scripts/render.mjs";

const META = { id: "ep1", title_zh: "本集", podcast: "P", date: "2026-07-08", duration_sec: 600, source_url: "http://x" };
const DIGEST = { tldr: "一句话", digest_md: "正文。", quotes: [] };

// relatedEpisodes() 的输出形状(build-entities 产出)
const REL_CONCEPT = [
  {
    epId: "ep2", epTitle: "另一集", epDate: "2026-06-24", score: 2, strongScore: 2,
    shared: { guests: [], companies: [], concepts: [
      { id: "agent", name: "智能体", file: "智能体", strong: true },
      { id: "sandbox", name: "沙箱", file: "沙箱", strong: true },
    ] },
  },
];

describe("renderRelatedEpisodes · 关联区③(US-7)", () => {
  it("★ 列相关集 + 注明关联原因(同概念)+ 可点跳", () => {
    const md = renderRelatedEpisodes(REL_CONCEPT);
    // C13d-2:大标题「## 相关单集」改成设计稿的分区小标签「接着看」+ 两栏卡片,US-7 的原因照旧要写
    expect(md).toContain('<div class="pd-sec">接着看</div>');
    expect(md).toContain("[[ep2|另一集]]"); // 点跳链接指向相关集
    expect(md).toContain("同概念:智能体、沙箱"); // 关联原因具体到实体名(US-7 P0,不许被设计稿吃掉)
  });

  it("★ 无相关集 → 空串,不留空框(Scenario 1a·变异守卫)", () => {
    // 若谁把空判断去掉、渲染出「接着看」空框,本条挂
    expect(renderRelatedEpisodes([])).toBe("");
    expect(renderRelatedEpisodes(null)).toBe("");
    expect(renderRelatedEpisodes(undefined)).toBe("");
  });

  it("★ 多维共享:同嘉宾 + 同概念都注明", () => {
    const r = [{
      epId: "ep3", epTitle: "三", epDate: "2026-05-01", score: 2, strongScore: 1,
      shared: {
        guests: [{ id: "swyx", name: "swyx", file: "swyx", strong: false }],
        companies: [],
        concepts: [{ id: "agent", name: "智能体", file: "智能体", strong: true }],
      },
    }];
    const md = renderRelatedEpisodes(r);
    expect(md).toContain("同嘉宾:swyx");
    expect(md).toContain("同概念:智能体");
  });
});

describe("renderEpisode · 集页底部接入相关单集", () => {
  it("★ 传 related → 集页含「相关单集」区,且在金句之后(US-7:详情页底部)", () => {
    const md = renderEpisode(META, DIGEST, null, REL_CONCEPT);
    expect(md).toContain('<div class="pd-sec">接着看</div>');
    expect(md).toContain("[[ep2|另一集]]");
    expect(md.indexOf("接着看")).toBeGreaterThan(md.indexOf("全部金句"));
  });

  it("★ 不传 related(默认 null)→ 无相关单集区(向后兼容,现有 C1-C3 集页产物不变)", () => {
    const md = renderEpisode(META, DIGEST, null);
    expect(md).not.toContain("接着看");
  });
});

describe("renderAudioPlayer · 详情页播放器(US-5)", () => {
  it("★ 渲染 HTML5 audio 指向本集音频 + 缺失降级文案(Scenario 2a)", () => {
    const md = renderAudioPlayer({ id: "ep1" });
    expect(md).toContain("<audio");
    // C13d-3(用户 2026-07-27 拍板):原生 controls 换成设计稿那条定制条,播停拖由脚本接线。
    // 这里守住的仍是 US-5 的本意:真 audio + 指向本集音频 + 有降级话术。
    expect(md).toContain('class="pd-play"');
    expect(md).toContain('src="/audio/ep1.mp3"');
    expect(md).toContain("不支持音频"); // 加载失败/缺失时浏览器显示降级文案,不卡死页面
  });
  it("★ renderEpisode 含播放器,在正文之前(「一句话」框 2026-08-22 已删,锚改正文)", () => {
    const md = renderEpisode(META, DIGEST);
    expect(md).toContain("<audio");
    expect(md.indexOf("正文。")).toBeGreaterThan(-1); // fixture digest_md 必须真出现,防锚点空转
    expect(md.indexOf("<audio")).toBeLessThan(md.indexOf("正文。"));
  });
});

// ── 跨集权威名统一(drift #32 死链根因):正文补链目标=聚合权威页名,找词仍用本集原词 ──
import { renderAllEpisodes } from "../scripts/build-pages.mjs";

describe("renderAllEpisodes · 集页双链用聚合权威名(漂移不再产死链)", () => {
  const mkEp = (id: string, date: string, file: string, extra: any = {}) => ({
    meta: { id, title_zh: id, podcast: "P", date, duration_sec: 60, source_url: "http://x" },
    digest: { tldr: "t", digest_md: `本集聊了 ${file} 的实践。`, quotes: [] },
    entities: { entities: [
      { id: "co-work", type: "concept", role: "concept", name: file, file, primary: true, how_described: "协作模式" },
      ...(extra.entities ?? []),
    ] },
  });
  it("★ 同 id 跨集两个写法:后见集正文链 [[首见权威名|本集原词]],frontmatter 用权威名", () => {
    const a = mkEp("epA", "2026-04-23", "Co-work");
    const b = mkEp("epB", "2026-06-21", "Co-Work");
    const pages = renderAllEpisodes([a, b]);
    const pb = pages.get("epB")!;
    expect(pb).toContain("[[Co-work|Co-Work]]"); // 目标=权威页,显示=本集原词
    expect(pb).not.toContain("[[Co-Work|"); // 不再链向不存在的页
    expect(pb).toContain('"[[Co-work]]"'); // frontmatter 类型化属性也统一权威名
  });
  it("★ 无漂移时输出与单集渲染逐字节一致(不扰动已上线集)", () => {
    const a = mkEp("epA", "2026-04-23", "Co-work");
    const single = renderEpisode(a.meta, a.digest, a.entities, []);
    expect(renderAllEpisodes([a]).get("epA")).toBe(single);
  });
});

describe("drift #100 · 页头 host 与带 / 的概念都链到真实存在的实体页", () => {
  const mk = (id: string, date: string, ents: any[], meta: any = {}) => ({
    meta: { id, title_zh: id, podcast: "P", date, duration_sec: 60, source_url: "http://x", ...meta },
    digest: { tldr: "t", digest_md: "本集聊了 A/B 测试 的实践。", quotes: [] },
    entities: { entities: ents },
  });
  it("★★★ 同一人跨集大小写不同(Swyx / swyx):后见集页头 host 链权威名 [[Swyx]],不再写出死链 [[swyx]]", () => {
    const a = mk("epA", "2026-06-16", [{ id: "swyx", type: "person", role: "guest", name: "Swyx", file: "Swyx", primary: true }]);
    const b = mk("epB", "2026-07-08", [{ id: "swyx", type: "person", role: "host", name: "swyx", file: "swyx", primary: true }], { host: "swyx" });
    const pb = renderAllEpisodes([a, b] as any).get("epB")!;
    expect(pb).toContain('host: "[[Swyx]]"');
    expect(pb).not.toContain('host: "[[swyx]]"');
  });
  it("★★ 没有实体数据的老集仍回落 meta.host(行为不变);回落值同样去斜杠(GLM 013[2])", () => {
    expect(renderEpisode({ ...META, host: "Lenny" } as any, DIGEST)).toContain('host: "[[Lenny]]"');
    expect(renderEpisode({ ...META, host: "A/B 主持" } as any, DIGEST)).toContain('host: "[[A-B 主持]]"');
    expect(renderEpisode(META as any, DIGEST)).not.toContain("host:"); // 无 host 仍整行不写
  });
  it("★★★ 概念名带 /(A/B 测试):页头链 [[A-B 测试]]、正文链 [[A-B 测试|A/B 测试]](读者看到原词),链接目标里不再有斜杠", () => {
    const a = mk("epA", "2026-07-24", [{ id: "a-b-testing", type: "concept", role: "concept", name: "A/B 测试 (A-B testing)", file: "A/B 测试", primary: true }]);
    const pa = renderAllEpisodes([a] as any).get("epA")!;
    expect(pa).toContain('"[[A-B 测试]]"');
    expect(pa).toContain("[[A-B 测试|A/B 测试]]");
    expect(pa).not.toMatch(/\[\[A\/B 测试(\]\]|\|)/);
  });
});

