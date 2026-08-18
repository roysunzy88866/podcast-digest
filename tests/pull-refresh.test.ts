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
  const listeners: Record<string, Array<(e: any) => void>> = {};
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
    addEventListener: (t: string, cb: any) => void ((listeners[t] ||= []).push(cb)),
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

  const fire = (t: string, y: number) =>
    (listeners[t] || []).forEach((cb) =>
      cb({ touches: [{ clientY: y }], cancelable: true, preventDefault() { (this as any)._pd = true; } }),
    );
  return {
    get attached() { return (listeners["touchstart"] || []).length > 0; },
    get bar() { return appended[0]; },
    get reloaded() { return reloaded; },
    get store() { return store; },
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
