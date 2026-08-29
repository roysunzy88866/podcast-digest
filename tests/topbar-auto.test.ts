// 沉浸式顶栏(2026-08-30 用户:「向上滑动或者点一下屏幕,应该出现顶部的返回/收藏 bar」)。
//
// ⚠️ 同一批改动里刚因「非被动 touchmove」栽过整页滚动卡顿 —— 这个脚本挂 document 级 scroll,
// 必须 passive + rAF 节流,否则又是一次全站变卡。下面头两条就是钉这个的。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

const SRC = readFileSync(new URL("../assets/js/topbar-auto.js", import.meta.url), "utf8");

// overlay 传具体是哪一个浮层开着 —— 桩会**只认那一个选择器**,
// 从而真正覆盖 overlayOpen 里三个分支中的每一个(GLM 20260830-007[3]:
// 原桩只认 pd-favov,实现里另两个选择器写错也测不出来)。
type Overlay = "fav" | "sub" | "search";
type Opts = { phone?: boolean; detail?: boolean; overlay?: boolean | Overlay };

/** 最小 DOM 桩:回放滚动/点击,观察 body 上的 pd-tophide 类 */
function run(opts: Opts = {}) {
  const listeners: Record<string, Array<{ cb: (e: any) => void; opts?: any }>> = {};
  const cls = new Set<string>();
  const frames: Array<() => void> = [];

  const body = {
    classList: {
      add: (c: string) => void cls.add(c),
      remove: (c: string) => void cls.delete(c),
    },
  };
  const doc = {
    body,
    documentElement: { scrollTop: 0 },
    addEventListener: (t: string, cb: any, o?: any) => void ((listeners[t] ||= []).push({ cb, opts: o })),
    querySelector: (sel: string) => {
      if (sel.includes("pd-play")) return opts.detail === false ? null : {};
      if (!opts.overlay) return null;
      // 只有实现里**确实带上了**这个浮层的选择器,才算查到 —— 三个分支各自可测
      const need = { fav: ".pd-favov", sub: ".pd-subov", search: ".search-container.active" }[
        opts.overlay === true ? "fav" : (opts.overlay as Overlay)
      ];
      return sel.includes(need) ? {} : null;
    },
  };
  const win: any = {
    document: doc,
    scrollY: 0,
    pageYOffset: 0,
    matchMedia: () => ({ matches: opts.phone !== false }),
    requestAnimationFrame: (fn: () => void) => void frames.push(fn),
    // resize/orientationchange 挂在 window 上(不是 document),桩必须提供,
    // 否则脚本一初始化就抛错。与 document 共用同一张 listeners 表,便于回放。
    addEventListener: (t: string, cb: any, o?: any) => void ((listeners[t] ||= []).push({ cb, opts: o })),
  };
  new Function("window", SRC)(win);

  const flush = () => frames.splice(0).forEach((fn) => fn());
  return {
    get hidden() {
      return cls.has("pd-tophide");
    },
    get scrollPassive() {
      return (listeners["scroll"] || [])[0]?.opts?.passive;
    },
    get scrollHandlerCount() {
      return (listeners["scroll"] || []).length;
    },
    /** 滚到某个位置并让 rAF 跑完 */
    scrollTo(y: number) {
      win.scrollY = y;
      win.pageYOffset = y;
      (listeners["scroll"] || []).forEach((l) => l.cb({}));
      flush();
    },
    tap() {
      (listeners["click"] || []).forEach((l) => l.cb({}));
    },
    nav() {
      (listeners["nav"] || []).forEach((l) => l.cb({}));
    },
    /** 转屏/拉宽:只改视口判定 + 发 resize,**不滚动** */
    resizeTo(phone: boolean) {
      win.matchMedia = () => ({ matches: phone });
      (listeners["resize"] || []).forEach((l) => l.cb({}));
      flush();
    },
    get resizePassive() {
      return (listeners["resize"] || [])[0]?.opts?.passive;
    },
    get framesQueued() {
      return frames.length;
    },
    rawScrollEvent() {
      (listeners["scroll"] || []).forEach((l) => l.cb({}));
    },
  };
}

describe("沉浸式顶栏 · 不许再拖慢滚动", () => {
  it("★★★ scroll 必须是被动监听", () => {
    expect(run().scrollPassive).toBe(true);
  });
  it("★★★ 源码不许出现 passive:false,也不许真调用 preventDefault", () => {
    expect(SRC).not.toMatch(/passive\s*:\s*false/);
    // 注意钉的是**调用**(.preventDefault(),而不是「preventDefault」这个词 ——
    // 本文件注释里就写着「绝不 preventDefault」,纯子串断言会被自己的注释绊倒。
    expect(SRC).not.toMatch(/\.preventDefault\s*\(/);
  });
  it("★★★ 连发多次滚动只排一帧计算(rAF 节流,不是每次事件都算)", () => {
    const t = run();
    t.rawScrollEvent();
    t.rawScrollEvent();
    t.rawScrollEvent();
    expect(t.framesQueued).toBe(1);
  });
});

describe("沉浸式顶栏 · 什么时候藏、什么时候回来", () => {
  it("★★★ 向下读 → 顶栏让位", () => {
    const t = run();
    t.scrollTo(400);
    expect(t.hidden).toBe(true);
  });

  it("★★★ 向上滑 → 顶栏回来(用户要的第一种触发)", () => {
    const t = run();
    t.scrollTo(400);
    expect(t.hidden).toBe(true);
    t.scrollTo(300);
    expect(t.hidden).toBe(false);
  });

  it("★★★ 点一下屏幕 → 顶栏回来(用户要的第二种触发)", () => {
    const t = run();
    t.scrollTo(400);
    expect(t.hidden).toBe(true);
    t.tap();
    expect(t.hidden).toBe(false);
  });

  it("★★★ 回到文章顶部 → 永远显示(否则「返回」就没了)", () => {
    const t = run();
    t.scrollTo(400);
    t.scrollTo(500); // 仍在下滑,保持隐藏
    expect(t.hidden).toBe(true);
    t.scrollTo(10); // 回到顶部区域
    expect(t.hidden).toBe(false);
  });

  it("★★ 手指微抖(位移 < 6px)不该让顶栏闪烁", () => {
    const t = run();
    t.scrollTo(400);
    expect(t.hidden).toBe(true);
    t.scrollTo(397); // 上移 3px,在死区内
    expect(t.hidden).toBe(true); // 不因抖动就弹出
  });

  // 三个浮层各测一遍:桩只认对应那个选择器,所以实现里漏写/写错任何一个都会红(GLM 007[3])
  it.each([
    ["收藏浮层 .pd-favov", "fav"],
    ["订阅浮层 .pd-subov", "sub"],
    ["搜索浮层 .search-container.active", "search"],
  ] as const)("★★ %s 开着时不隐藏", (_label, which) => {
    const t = run({ overlay: which });
    t.scrollTo(400);
    expect(t.hidden).toBe(false);
  });

  it("★★★ 桌面端不接管(用户明选桌面顶栏保持常驻)", () => {
    const t = run({ phone: false });
    t.scrollTo(400);
    expect(t.hidden).toBe(false);
  });

  it("★★★ 非详情页(首页/大类页)不接管", () => {
    const t = run({ detail: false });
    t.scrollTo(400);
    expect(t.hidden).toBe(false);
  });

  it("★★★ 藏起来后不滚动、直接转屏/拉宽到桌面 → 顶栏必须复位(GLM 007[1]:否则桌面一直没顶栏)", () => {
    const t = run();
    t.scrollTo(400);
    expect(t.hidden).toBe(true);
    t.resizeTo(false); // 只变宽,不滚动
    expect(t.hidden).toBe(false);
  });

  it("★★ resize 监听同样是被动的", () => {
    expect(run().resizePassive).toBe(true);
  });

  it("★★ SPA 换页后状态归零(新页面不该一进去就是隐藏态)", () => {
    const t = run();
    t.scrollTo(400);
    expect(t.hidden).toBe(true);
    t.nav();
    expect(t.hidden).toBe(false);
  });
});
