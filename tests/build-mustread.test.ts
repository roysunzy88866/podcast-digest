// C13c · 必读页。行为真相 = docs/user-stories.md C13c(🔒 拍板 #19);
// 口径真相 = 设计稿/_决策存档/must-read-rules.html(A=判官全票率、C=枢纽度、同源不超一半);
// 逆向核实过:06-14 Pincus 集 kept18+dropped1、全票18 → 18/19=95%,与设计稿页面分毫一致。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { unanimityRate, entityFreq, hubCount, pickMustread, renderMustread } from "../scripts/build-mustread.mjs";
import { renderList } from "../scripts/build-list.mjs";

const scss = readFileSync(new URL("../assets/styles/custom.scss", import.meta.url), "utf8");

/** 造一集(必读页要用的最小面) */
const ep = (id: string, over: any = {}) => ({
  meta: {
    id,
    date: over.date ?? "2026-07-01",
    title_zh: over.title ?? `标题-${id}`,
    podcast: over.podcast ?? "Lenny's Podcast",
    guest_name: "某人",
    cover_image: null,
  },
  digest: { quotes: [{ zh: `金句-${id}` }] },
  entities: { entities: (over.ents ?? []).map((e: string) => ({ id: e, type: "concept", name: e })) },
});

describe("C13c 口径 A:判官全票率", () => {
  it("★ 全票数/总候选数(kept+dropped 都算分母),与设计稿 18/19 口径同构", () => {
    const r = unanimityRate({
      kept: [{ votes: "3/3" }, { votes: "2/3" }],
      dropped: [{ votes: "3/3" }, { votes: "0/3" }],
    });
    expect(r).toEqual({ num: 2, den: 4, rate: 0.5 });
  });
  it("★ 无候选不除零(rate 0,不 NaN)", () => {
    expect(unanimityRate({ kept: [], dropped: [] }).rate).toBe(0);
  });
});

describe("C13c 口径 C:枢纽度(挂着多少个全站 ≥3 集在讲的实体)", () => {
  const eps = [
    ep("e1", { ents: ["ai", "pm", "x"] }),
    ep("e2", { ents: ["ai", "pm"] }),
    ep("e3", { ents: ["ai", "pm"] }),
    ep("e4", { ents: ["ai", "y"] }),
  ];
  it("★ 频次按「出现于几集」数,同集重复只算一次", () => {
    const freq = entityFreq([...eps, ep("e5", { ents: ["ai", "ai"] })]);
    expect(freq.get("ai")).toBe(5);
    expect(freq.get("pm")).toBe(3);
    expect(freq.get("x")).toBe(1);
  });
  it("★ hubCount 只数 ≥3 集的实体(ai=4✓ pm=3✓ x=1✗)", () => {
    const freq = entityFreq(eps);
    expect(hubCount(eps[0], freq)).toBe(2);
    expect(hubCount(eps[3], freq)).toBe(1); // 只有 ai
  });
});

describe("C13c 选集:A 前 4 + C 前 4,去重,同源不超一半", () => {
  // aRate/cHub 直接注入,专测选择逻辑本身
  const mk = (id: string, a: number, c: number, podcast = "Lenny's Podcast") =>
    ({ ...ep(id, { podcast }), _a: a, _c: c }) as any;

  it("★ 两组各 4 集、互不重复;一集两榜都进时只留在 A 组,C 组顺位递补", () => {
    const eps = [
      mk("a1", 0.9, 9, "P1"), mk("a2", 0.8, 8, "P2"), mk("a3", 0.7, 1, "P3"), mk("a4", 0.6, 1, "P4"),
      mk("c5", 0.1, 7, "P5"), mk("c6", 0.1, 6, "P6"), mk("c7", 0.1, 5, "P7"), mk("c8", 0.1, 4, "P8"),
      mk("c9", 0.1, 3, "P9"),
    ];
    const r = pickMustread(eps, { aOf: (e: any) => e._a, cOf: (e: any) => e._c });
    expect(r.a.map((e: any) => e.meta.id)).toEqual(["a1", "a2", "a3", "a4"]);
    // a1/a2 的 hub 也最高,但已进 A 组 → C 组从 c5 起顺位补满
    expect(r.c.map((e: any) => e.meta.id)).toEqual(["c5", "c6", "c7", "c8"]);
  });

  it("★ 同源硬闸:8 集里任一播客源不超过 4,被挡的让位给其它源", () => {
    const eps = [
      // 6 集 Lenny's 霸榜 A,还有 hub 高分也全是 Lenny's
      mk("l1", 0.9, 9), mk("l2", 0.9, 8), mk("l3", 0.9, 7), mk("l4", 0.9, 6), mk("l5", 0.9, 5), mk("l6", 0.9, 4),
      mk("o1", 0.5, 3, "PG"), mk("o2", 0.4, 2, "YC"), mk("o3", 0.3, 1, "a16z"), mk("o4", 0.2, 1, "PG"),
    ];
    const r = pickMustread(eps, { aOf: (e: any) => e._a, cOf: (e: any) => e._c });
    const all = [...r.a, ...r.c];
    expect(all).toHaveLength(8);
    const lennys = all.filter((e: any) => e.meta.podcast === "Lenny's Podcast");
    expect(lennys.length).toBeLessThanOrEqual(4);
    expect(all.map((e: any) => e.meta.podcast)).toContain("PG");
  });

  it("★ 排序确定:同分按 id 升序,跑一万遍一个样", () => {
    const eps = [mk("b", 0.5, 2, "P1"), mk("a", 0.5, 2, "P2"), mk("c", 0.5, 2, "P3"), mk("d", 0.4, 1, "P4")];
    const r1 = pickMustread(eps, { aOf: (e: any) => e._a, cOf: (e: any) => e._c });
    const r2 = pickMustread([...eps].reverse(), { aOf: (e: any) => e._a, cOf: (e: any) => e._c });
    expect(r1.a.map((e: any) => e.meta.id)).toEqual(r2.a.map((e: any) => e.meta.id));
    expect(r1.a[0].meta.id).toBe("a");
  });
});

describe("C13c 页面:照设计稿 must-read.html 出", () => {
  const eps = Array.from({ length: 9 }, (_, i) =>
    ep(`e${i}`, { podcast: `P${i % 5}`, ents: ["ai"] }),
  );
  const html = renderMustread(eps as any, {
    aOf: () => 0.5,
    cOf: (e: any) => Number(e.meta.id.slice(1)),
    hasCover: () => false,
  });

  it("★ 头部:必读 + 机器自算说明;两组各有口径一句话(不出现无来由的「必读」空词)", () => {
    expect(html).toContain('title: "必读"');
    expect(html).toContain("这一栏是机器每次构建时自己算出来的");
    expect(html).toContain("话说得最狠的");
    expect(html).toContain("判官全票率");
    expect(html).toContain("读完还有地方可去");
    expect(html).toContain("枢纽度");
  });

  it("★ 8 张卡,复用首页同一套 .card 标记(不另造卡片)", () => {
    expect((html.match(/class="card"/g) || []).length).toBe(8);
    expect(html).toContain('<div class="tx">');
  });

  it("★ 左栏与首页同源(pd-shell two + 主题导航)", () => {
    expect(html).toContain('class="pd-shell two"');
  });

  it("★ 顶栏在,且「最热」带选中态(设计稿 must-read.html 顶栏 cur 在最热上)", () => {
    expect(html).toContain('class="pd-top"');
    expect(html).toMatch(/<a class="cur internal" href="\.\/must-read">最热<\/a>/);
  });

  it("★ 带搬运脚本(Quartz 搜索/深浅色搬进顶栏,🔒 #9/#2 不降级)", () => {
    expect(html).toContain("pd-acts");
    expect(html).toContain("adopt");
  });
});

describe("C13c 入口:顶栏「最热」从死按钮变真链接", () => {
  const eps = [ep("e1", { ents: [] })];
  it("★ 首页 pd-nav 与手机横滑都指向 must-read,不再有 soon 占位", () => {
    const html = renderList(eps as any, { hasCover: () => false });
    expect(html).toMatch(/<a[^>]*href="\.\/must-read"[^>]*>最热<\/a>/);
    expect(html).not.toContain('class="soon" title="必读页归 C13c"');
  });
  it("★ 集页顶栏同款(render.mjs 里不残留 soon 最热)", () => {
    const src = readFileSync(new URL("../scripts/render.mjs", import.meta.url), "utf8");
    expect(src).not.toContain('必读页归 C13c');
    expect(src).toMatch(/href="\/must-read"[^>]*>最热/);
  });
});

describe("C13c 样式:must-read 纳入 .pd 独占作用域 + mrh/mrtop 进 scss", () => {
  it("★ body[data-slug=must-read] 与首页同享「压单列藏侧栏」", () => {
    expect(scss).toMatch(/body\[data-slug="must-read"\]/);
  });
  it("★ .pd-mrh / .pd-mrtop 数值照抄设计稿(17px 组标 / 26px 页题)", () => {
    expect(scss).toMatch(/\.pd-mrh b\s*\{[^}]*font-size:\s*17px/);
    expect(scss).toMatch(/\.pd-mrtop h1[^{]*\{[^}]*font-size:\s*26px/);
  });
});
