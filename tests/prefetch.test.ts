// 按下即预取(2026-08-29 用户「进详情页/主页会卡一下、白一下」治本第二刀)。
//
// ⚠️ 头号回归风险:同一天刚修过「document 上常驻非被动 touchmove 拖慢整页滚动」(pull-refresh.js)。
// 这个脚本也在 document 上挂 touchstart —— 必须全被动,否则等于把刚修好的卡顿又赔进去。
// 本文件钉的是「取谁/不取谁 + 限量去重 + 全被动」,真机手感只能真机验。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

const SRC = readFileSync(new URL("../assets/js/prefetch.js", import.meta.url), "utf8");

type Opts = { path?: string; search?: string };

/** 最小 DOM 桩:回放 touchstart,记录真正发出的 fetch */
function run(opts: Opts = {}) {
  const listeners: Record<string, Array<{ cb: (e: any) => void; opts?: any }>> = {};
  const fetched: string[] = [];
  const origin = "https://talk.solomind.cc";
  const path = opts.path ?? "/";
  const search = opts.search ?? "";

  const doc = {
    addEventListener: (t: string, cb: any, o?: any) => void ((listeners[t] ||= []).push({ cb, opts: o })),
  };
  const win = {
    document: doc,
    location: { href: origin + path + search, origin, pathname: path, search },
    fetch: (u: string) => {
      fetched.push(u);
      return Promise.resolve({});
    },
  };
  new Function("window", "URL", SRC)(win, URL);

  /** 造一个 <a>;事件目标故意用它**内部的子元素**(真实页面里点到的多半是 <a> 里的 <span>),
   *  由 closest("a[href]") 往上找到 a —— 这样才真正走到实现里的 closest 分支(GLM 071[7])。 */
  const mkTarget = (href: string, extra: Partial<{ download: boolean; target: string }> = {}) => {
    const a: any = {
      href: new URL(href, origin + path).href,
      target: extra.target ?? "",
      getAttribute: (n: string) => (n === "href" ? href : null),
      hasAttribute: (n: string) => n === "download" && !!extra.download,
    };
    a.closest = (sel: string) => (sel === "a[href]" ? a : null);
    // 子元素:自己不是链接,closest 才把它交回 a
    return { closest: (sel: string) => (sel === "a[href]" ? a : null) };
  };

  return {
    fetched,
    get touchstartPassive() {
      return (listeners["touchstart"] || [])[0]?.opts?.passive;
    },
    get mousedownPassive() {
      return (listeners["mousedown"] || [])[0]?.opts?.passive;
    },
    tap(href: string, extra?: Partial<{ download: boolean; target: string }>) {
      const child = mkTarget(href, extra);
      (listeners["touchstart"] || []).forEach((l) => l.cb({ target: child }));
    },
    nav() {
      (listeners["nav"] || []).forEach((l) => l.cb({}));
    },
  };
}

describe("按下即预取 · 不能重蹈滚动卡顿的覆辙", () => {
  it("★★★ touchstart/mousedown 必须是被动监听(非被动会再次拖慢整页滚动)", () => {
    const t = run();
    expect(t.touchstartPassive).toBe(true);
    expect(t.mousedownPassive).toBe(true);
  });
  it("★★★ 源码里不许出现 passive:false / preventDefault(预取只读不拦)", () => {
    expect(SRC).not.toMatch(/passive\s*:\s*false/);
    expect(SRC).not.toContain("preventDefault");
  });
});

describe("按下即预取 · 取谁不取谁", () => {
  it("★★★ 按下站内链接 → 提前取那一页", () => {
    const t = run({ path: "/" });
    t.tap("/2026-08-27-some-episode");
    expect(t.fetched).toEqual(["https://talk.solomind.cc/2026-08-27-some-episode"]);
  });

  it("★★★ 同一个地址只取一次(首页手指滑过一堆卡片,不许重复烧流量)", () => {
    const t = run();
    t.tap("/ep-a");
    t.tap("/ep-a");
    t.tap("/ep-a");
    expect(t.fetched.length).toBe(1);
  });

  it("★★★ 每页有上限(首页整屏都是链接,不能无限取)", () => {
    const t = run();
    for (let i = 0; i < 20; i++) t.tap(`/ep-${i}`);
    expect(t.fetched.length).toBe(8); // MAX=8
  });

  it("★★ 换页后额度重置,但已取过的仍不重取", () => {
    const t = run();
    for (let i = 0; i < 20; i++) t.tap(`/ep-${i}`);
    expect(t.fetched.length).toBe(8);
    t.nav();
    t.tap("/ep-0"); // 取过 → 仍不取
    expect(t.fetched.length).toBe(8);
    t.tap("/brand-new"); // 新的 → 额度已重置,可取
    expect(t.fetched.length).toBe(9);
  });

  it("★★★ 站外链接不碰(别替用户去请求第三方)", () => {
    const t = run();
    t.tap("https://example.com/whatever");
    expect(t.fetched).toEqual([]);
  });

  it("★★ 当前页 / 纯锚点跳转不必取", () => {
    const t = run({ path: "/ep-x" });
    t.tap("/ep-x");
    t.tap("/ep-x#section");
    expect(t.fetched).toEqual([]);
  });

  it("★★ 同路径不同参数算另一页,要取(GLM 071[1]:只比 pathname 会误判成当前页)", () => {
    const t = run({ path: "/list", search: "?page=1" });
    t.tap("/list?page=2");
    expect(t.fetched).toEqual(["https://talk.solomind.cc/list?page=2"]);
  });

  it("★★ 连参数都完全相同才算当前页,不取", () => {
    const t = run({ path: "/list", search: "?page=1" });
    t.tap("/list?page=1");
    expect(t.fetched).toEqual([]);
  });

  it("★★ 下载链接与新窗口链接不取", () => {
    const t = run();
    t.tap("/audio/foo.mp3", { download: true });
    t.tap("/somewhere", { target: "_blank" });
    expect(t.fetched).toEqual([]);
  });

  it("★★ 同页不同锚点视为同一份 HTML,只取一次", () => {
    const t = run({ path: "/" });
    t.tap("/ep-y#a");
    t.tap("/ep-y#b");
    expect(t.fetched).toEqual(["https://talk.solomind.cc/ep-y"]);
  });
});
