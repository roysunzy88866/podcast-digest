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
});

// —— 计数时机行为测试(2026-08-31「进页面即报」)——
// 真跑 pv.js(IIFE)于假 document/fetch,断言 POST /hit 的时机与次数,而非只钉源码串。
type Call = { method: string; url: string };
function runPv(body: Record<string, unknown> = { total: 2598, today: 5, counted: 120, baseline: 2478 }) {
  const calls: Call[] = [];
  let navHandler: ((e: unknown) => void) | null = null;
  let showHandler: ((e: { persisted?: boolean }) => void) | null = null;
  const el = { textContent: "", hidden: true };
  const doc = {
    addEventListener(type: string, h: (e: unknown) => void) {
      if (type === "nav") navHandler = h;
    },
    querySelector(sel: string) {
      return sel === ".pd-pv" ? el : null;
    },
  };
  const win = {
    addEventListener(type: string, h: (e: { persisted?: boolean }) => void) {
      if (type === "pageshow") showHandler = h;
    },
  };
  const fetchFn = (url: string, opts?: { method?: string }) => {
    calls.push({ method: (opts && opts.method) || "GET", url: String(url) });
    return Promise.resolve({ ok: true, json: () => Promise.resolve(body) });
  };
  new Function("document", "fetch", "window", pvJs)(doc, fetchFn, win);
  return {
    calls,
    el,
    fireNav() {
      const h = navHandler;
      if (!h) throw new Error("pv.js 未注册 nav 监听");
      h({});
    },
    firePageshow(persisted: boolean) {
      const h = showHandler;
      if (!h) throw new Error("pv.js 未注册 pageshow 监听");
      h({ persisted });
    },
  };
}
const flush = async () => {
  for (let i = 0; i < 6; i++) await Promise.resolve();
};
const hitsOf = (calls: Call[]) => calls.filter((c) => c.method === "POST" && c.url.endsWith("/hit"));
const statsOf = (calls: Call[]) => calls.filter((c) => c.method === "GET" && c.url.endsWith("/stats"));

describe("C27 · 计数时机(2026-08-31「进页面即报」,捞回秒退读者)", () => {
  it("★★★ 一执行就 POST /hit 计一次——不再等 nav/2.5s(秒退手机读者是主要漏数来源)", () => {
    const { calls } = runPv();
    expect(hitsOf(calls).length).toBe(1);
  });
  it("★★★ 初次 nav(与立即上报同页)不重复计数,改走只读 /stats 刷新显示", () => {
    const { calls, fireNav } = runPv();
    calls.length = 0; // 清掉立即那一发,单看初次 nav 的行为
    fireNav();
    expect(hitsOf(calls).length).toBe(0);
    expect(statsOf(calls).length).toBe(1);
  });
  it("★★★ 之后每次软换页各 POST /hit 一次(维持每页 1 次 PV 口径,不再走 /stats)", () => {
    const { calls, fireNav } = runPv();
    fireNav(); // 初次:跳过计数
    calls.length = 0;
    fireNav();
    fireNav();
    expect(hitsOf(calls).length).toBe(2);
    expect(statsOf(calls).length).toBe(0);
  });
  it("★★ 显示:初次经 /stats 填「累计访问 … · 今日 …」,今日 ×9(5→45),容器解除 hidden", async () => {
    const { el, fireNav } = runPv();
    fireNav();
    await flush();
    expect(el.hidden).toBe(false);
    expect(el.textContent).toBe(
      "累计访问 " + (2598).toLocaleString() + " · 今日 " + (45).toLocaleString(),
    );
  });
  it("★★★ bfcache 返回/前进恢复(persisted=true)补计一次;普通加载(persisted=false)不重复(GLM 030[1])", () => {
    const { calls, firePageshow } = runPv();
    calls.length = 0; // 清掉立即那一发,单看 pageshow
    firePageshow(false); // 普通加载的 pageshow:① 已计过,不补
    expect(hitsOf(calls).length).toBe(0);
    firePageshow(true); // bfcache 恢复:脚本没重跑、nav 不派 → 补一次
    expect(hitsOf(calls).length).toBe(1);
  });
  it("★★ 回包缺字段(如无 today)→ fill 静默:容器保持 hidden、不显示 NaN(×9 的 NaN 风险兜底,GLM 030[4])", async () => {
    const { el, fireNav } = runPv({ total: 5 }); // 缺 today
    fireNav();
    await flush();
    expect(el.hidden).toBe(true);
    expect(el.textContent).toBe("");
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
