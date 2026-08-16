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
  it("★★★ 展示文案 = 累计访问 + 今日,数字来自接口返回,无任何乘法/加工", () => {
    expect(pvJs).toContain('"累计访问 "');
    expect(pvJs).toContain('" · 今日 "');
    expect(pvJs).not.toMatch(/\*\s*10/); // 不许乘 10(ADR 0023 拒绝加工)
  });
  it("★★★ 服务挂了静默:fetch 有 catch,fill 前有类型校验,容器保持 hidden 由 fill 才解除", () => {
    expect(pvJs).toMatch(/\.catch\(function \(\) \{\}\)/);
    expect(pvJs).toContain('typeof d.total !== "number"');
    expect(pvJs).toContain("el.hidden = false");
  });
  it("★★ nav 驱动计数 + 无 nav 兜底不重复", () => {
    expect(pvJs).toContain("document.addEventListener(\"nav\"");
    expect(pvJs).toMatch(/if \(!navSeen\) hit\(\)/);
  });
});
