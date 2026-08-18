import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { bjDay, corsHeaders } from "../workers/pv-counter/worker.js";
import { renderList } from "../scripts/build-list.mjs";

// C27 · 访问计数(真实 PV)· Gherkin 见 docs/user-stories.md C27 / ADR 0023

const scss = readFileSync(new URL("../assets/styles/custom.scss", import.meta.url), "utf8");
const pvJs = readFileSync(new URL("../assets/js/pv.js", import.meta.url), "utf8");

const ep = () => ({
  meta: {
    id: "2026-01-01-x",
    date: "2026-01-01",
    added: "2026-01-01",
    title_zh: "标题",
    podcast: "P",
  },
  digest: { tldr: "t", quotes: [] },
  entities: null,
});
const opts = { categoriesBySlug: () => ["智能体"], hasCover: () => true };

describe("C27 · bjDay 北京时间切日(「今日」的口径)", () => {
  it("★★★ UTC 15:59 仍是当天,16:00 翻明天(北京 UTC+8 的午夜)", () => {
    expect(bjDay(Date.parse("2026-08-16T15:59:59Z"))).toBe("2026-08-16");
    expect(bjDay(Date.parse("2026-08-16T16:00:00Z"))).toBe("2026-08-17");
  });
  it("★★ 北京白天(UTC 上午)就是当天", () => {
    expect(bjDay(Date.parse("2026-08-16T02:00:00Z"))).toBe("2026-08-16");
  });
});

describe("C27 · CORS 白名单(对陌生来源关门)", () => {
  it("★★★ 站点域名回显自己;陌生来源回站点域名(等于拒绝)", () => {
    expect(corsHeaders("https://talk.solomind.cc")["Access-Control-Allow-Origin"]).toBe(
      "https://talk.solomind.cc",
    );
    expect(corsHeaders("https://evil.example")["Access-Control-Allow-Origin"]).toBe(
      "https://talk.solomind.cc",
    );
  });
  it("★★ 本地预览端口在白名单(8099/8080)", () => {
    expect(corsHeaders("http://localhost:8099")["Access-Control-Allow-Origin"]).toBe(
      "http://localhost:8099",
    );
  });
});

describe("C27 · 首页容器与展示口径", () => {
  it("★★★ 左栏「关于本站」下面有 .pd-pv 容器,默认 hidden(没数据不露空行)", () => {
    const md = renderList([ep()], opts);
    const about = md.indexOf('class="about"');
    const pv = md.indexOf('class="pd-pv" hidden');
    expect(about).toBeGreaterThan(-1);
    expect(pv).toBeGreaterThan(about); // 在关于本站之后(下方)
  });
  it("★★ 样式存在且用主题令牌(不写死颜色)", () => {
    expect(scss).toMatch(/\.pd-pv \{[^}]*var\(--B5\)/);
  });
});

describe("C27 · 客户端:真实数 + 失败静默", () => {
  it("★★★ 展示文案 = 累计访问 + 今日;今日按用户要求 ×9 展示,但倍数只在展示层", () => {
    expect(pvJs).toContain('"累计访问 "');
    expect(pvJs).toContain('" · 今日 "');
    // 用户 2026-08-17 明确要求「今日 ×9」(我提过两次不建议,用户重申后照办)。
    // 底线:倍数只在客户端展示层,接口回传的 today/counted/baseline 全是真实数 → 随时可核账。
    expect(pvJs).toContain("TODAY_DISPLAY_X = 9");
    expect(pvJs).toMatch(/d\.today \* TODAY_DISPLAY_X/);
  });
  it("★★★ 服务挂了静默:fetch 有 catch,fill 前有类型校验,容器保持 hidden 由 fill 才解除", () => {
    expect(pvJs).toMatch(/\.catch\(function \(\) \{\}\)/);
    expect(pvJs).toContain('typeof d.total !== "number"');
    // today 也必须校验:×9 会把缺字段从「静默不显示」变成页面显示「今日 NaN」
    // (独立审计 2026-08-18:原来只断言了 total 那半,删掉 today 校验测试照样全绿=空转)
    expect(pvJs).toContain('typeof d.today !== "number"');
    expect(pvJs).toContain("el.hidden = false");
  });
  it("★★ nav 驱动计数 + 无 nav 兜底不重复", () => {
    expect(pvJs).toContain("document.addEventListener(\"nav\"");
    expect(pvJs).toMatch(/if \(!navSeen\) hit\(\)/);
  });
});

describe("C27 · 历史基线(2026-08-17 用户从 CF 后台读出补入)", () => {
  const src = readFileSync(new URL("../workers/pv-counter/worker.js", import.meta.url), "utf8");
  it("★★★ 基线是独立常量、展示时相加,存储只存真实计数(可核账)", () => {
    expect(src).toMatch(/const HISTORICAL_BASELINE = 2478;/);
    expect(src).toContain("HISTORICAL_BASELINE + counted");
    expect(src).toMatch(/put\(\{ total: counted/); // 存的是真实计数,不是加了基线的数
  });
  it("★★★ 响应同时回传 counted 和 baseline —— 哪部分是历史、哪部分是数到的,随时能拆开查", () => {
    expect(src).toContain("counted, baseline: HISTORICAL_BASELINE");
  });
  it("★★ 基线只进累计、不进「今日」(今日必须是当天真实数)", () => {
    // today 以简写形式原样回传 = 没被任何运算碰过
    expect(src).toContain("total: HISTORICAL_BASELINE + counted, today,");
    // 且任何地方都没有把基线加到 today 上
    expect(src).not.toMatch(/today\s*[+=]\s*[^;\n]*HISTORICAL_BASELINE/);
    expect(src).not.toMatch(/HISTORICAL_BASELINE\s*\+\s*today/);
  });
});
