import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

// C29 · 下拉刷新(Gherkin 见 docs/user-stories.md C29)
//
// 由来:用户 2026-08-18「我是添加了 iPhone 的 APP 应用,不是在浏览器里打开的,浏览器里是有下拉刷新的」
// —— iOS 从主屏启动的 web app 没有地址栏/刷新按钮,系统的下拉刷新在该模式下也不存在,
// 想看新内容只能杀进程重开。
//
// ⚠️ 本文件钉的是**手势逻辑**(什么时候接管、拉多远才刷、刷之前清什么)。
// 钉不了「真机上的手感」—— 那只能真机验收。

const SRC = readFileSync(new URL("../assets/js/pull-refresh.js", import.meta.url), "utf8");

type Opts = { standalone?: boolean; scrollY?: number; overlay?: boolean };

/** 最小 DOM 桩:只实现脚本真正用到的那几样,回放触摸事件 */
function run(opts: Opts = {}) {
  const listeners: Record<string, Array<{ cb: (e: any) => void; opts?: any }>> = {};
  const appended: any[] = [];
  const store: Record<string, string> = { "ioret:/": '{"shown":72,"y":1800}' };
  let reloaded = 0;
  const timers: Array<() => void> = [];

  const mkEl = () => {
    const cls = new Set<string>();
    return {
      style: {} as any,
      className: "",
      innerHTML: "",
      parentNode: null as any,
      setAttribute: () => {},
      classList: {
        toggle: (n: string, on: boolean) => void (on ? cls.add(n) : cls.delete(n)),
        remove: (...n: string[]) => n.forEach((x) => cls.delete(x)),
        has: (n: string) => cls.has(n),
        _set: cls,
      },
    };
  };
  const body = { appendChild: (n: any) => void (appended.push(n), (n.parentNode = body)) };
  const doc = {
    documentElement: { scrollTop: opts.scrollY ?? 0 },
    body,
    createElement: mkEl,
    querySelector: (sel: string) => (opts.overlay && sel.includes("pd-favov") ? {} : null),
    addEventListener: (t: string, cb: any, o?: any) => void ((listeners[t] ||= []).push({ cb, opts: o })),
    removeEventListener: (t: string, cb: any) =>
      void (listeners[t] = (listeners[t] || []).filter((l) => l.cb !== cb)),
  };
  const win = {
    document: doc,
    scrollY: opts.scrollY ?? 0,
    pageYOffset: opts.scrollY ?? 0,
    navigator: { standalone: opts.standalone ?? true },
    matchMedia: () => ({ matches: !!opts.standalone }),
    setTimeout: (fn: () => void) => void timers.push(fn),
  };
  const location = { pathname: "/", reload: () => void reloaded++ };
  const sessionStorage = {
    getItem: (k: string) => store[k] ?? null,
    setItem: (k: string, v: string) => void (store[k] = v),
    removeItem: (k: string) => void delete store[k],
  };

  new Function("window", "location", "sessionStorage", SRC)(win, location, sessionStorage);

  // 快照后再逐个调用:onMove 可能在触发中途 detach 自己(移除 touchmove 监听),不能边遍历边改
  const fire = (t: string, y: number) =>
    [...(listeners[t] || [])].forEach((l) =>
      l.cb({ touches: [{ clientY: y }], cancelable: true, preventDefault() { (this as any)._pd = true; } }),
    );
  return {
    get attached() { return (listeners["touchstart"] || []).length > 0; },
    get touchmoveCount() { return (listeners["touchmove"] || []).length; },
    get touchmovePassive() { return (listeners["touchmove"] || [])[0]?.opts?.passive; },
    get bar() { return appended[0]; },
    get reloaded() { return reloaded; },
    get store() { return store; },
    fire,
    flush: () => timers.splice(0).forEach((fn) => fn()),
    /** 回放一次下拉:按下 → 移动到 y → 松手 */
    pull(toY: number) {
      fire("touchstart", 0);
      fire("touchmove", toY);
      fire("touchend", toY);
    },
  };
}

describe("C29 · 只在主屏应用模式接管(浏览器里不碰系统自带的)", () => {
  it("★★★ 浏览器里(非 standalone)一个监听器都不挂", () => {
    expect(run({ standalone: false }).attached).toBe(false);
  });
  it("★★★ 应用模式下才接管", () => {
    expect(run({ standalone: true }).attached).toBe(true);
  });
});

describe("C29 · 什么时候才算「要刷新」", () => {
  it("★★★ 拉过阈值(70px)松手 → 刷新;手指走 2px 指示器走 1px,故要拉 140+", () => {
    const t = run();
    t.pull(150);
    t.flush();
    expect(t.reloaded).toBe(1);
  });
  it("★★★ 没拉够 → 不刷新(轻轻一碰不该整页重载)", () => {
    const t = run();
    t.pull(60); // 60*0.5=30 < 70
    t.flush();
    expect(t.reloaded).toBe(0);
  });
  it("★★★ 不在页面顶部 → 完全不接管(正常滚动不受影响)", () => {
    const t = run({ scrollY: 800 });
    t.pull(300);
    t.flush();
    expect(t.reloaded).toBe(0);
  });
  it("★★★ 弹层(我的收藏/订阅/搜索)开着 → 不接管", () => {
    const t = run({ overlay: true });
    t.pull(300);
    t.flush();
    expect(t.reloaded).toBe(0);
  });
  it("★★ 往上滑不触发(只认向下拉)", () => {
    const t = run();
    t.pull(-200);
    t.flush();
    expect(t.reloaded).toBe(0);
  });
});

describe("C29 · 刷新前必须清掉「返回还原位置」的记忆", () => {
  it("★★★ 否则刷完还原到半路,看着像没刷新", () => {
    const t = run();
    expect(t.store["ioret:/"]).toBeTruthy(); // 进来时有还原记忆
    t.pull(150);
    expect(t.store["ioret:/"]).toBeUndefined(); // 触发刷新时就该清掉
    t.flush();
    expect(t.reloaded).toBe(1);
  });
  it("★★ 没触发刷新时不许乱清(用户只是轻碰一下)", () => {
    const t = run();
    t.pull(40);
    t.flush();
    expect(t.store["ioret:/"]).toBeTruthy();
  });
});

describe("C29 · 指示器", () => {
  it("★★★ 拉过阈值给「松手就刷」的确认态;松手后转起来", () => {
    const t = run();
    t.pull(150);
    expect(t.bar.classList.has("pd-ptr-go")).toBe(true);
    expect(t.bar.classList.has("pd-ptr-run")).toBe(true);
  });
  it("★★ 没拉够 → 不进确认态、也不转圈", () => {
    const t = run();
    t.pull(60);
    expect(t.bar.classList.has("pd-ptr-go")).toBe(false);
    expect(t.bar.classList.has("pd-ptr-run")).toBe(false);
  });
});

describe("C29 · 独立 App 卡顿修复(2026-08-29):非被动 touchmove 不常驻 document", () => {
  // 由来:document 上常驻 passive:false 的 touchmove 会让浏览器每次滚动都先等 JS(怕 preventDefault),
  // 整页失去线程滚动快路径 → standalone 明显卡。改成只在下拉手势期间临时挂载。
  it("★★★ 加载后 document 上没有 touchmove 监听(不剥夺整页线程滚动快路径)", () => {
    const t = run(); // standalone
    expect(t.attached).toBe(true); // touchstart 已挂(接管手势入口)
    expect(t.touchmoveCount).toBe(0); // 但 touchmove 一个都不常驻 —— 这就是修复点
  });
  it("★★★ 只在「顶部起手」时临时挂上非被动 touchmove,松手后摘掉", () => {
    const t = run();
    t.fire("touchstart", 0); // 顶部起手
    expect(t.touchmoveCount).toBe(1); // 这一刻才挂
    expect(t.touchmovePassive).toBe(false); // 且非被动(要 preventDefault 拦 iOS 橡皮筋)
    t.fire("touchend", 0);
    expect(t.touchmoveCount).toBe(0); // 松手立刻摘掉,恢复快路径
  });
  it("★★★ 一往上滑(交还页面滚动)当场摘掉 touchmove,不拖慢后续滚动", () => {
    const t = run();
    t.fire("touchstart", 0);
    expect(t.touchmoveCount).toBe(1);
    t.fire("touchmove", -50); // 往上滑 = 用户要正常滚页
    expect(t.touchmoveCount).toBe(0); // onMove 自摘
  });
  it("★★★ 不在顶部起手 → 从不挂 touchmove(正常滚动全程走快路径)", () => {
    const t = run({ scrollY: 800 });
    t.fire("touchstart", 5);
    expect(t.touchmoveCount).toBe(0);
  });
});
