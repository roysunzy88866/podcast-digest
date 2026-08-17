import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

// drift #64 · 主题锁:手机启动仍是深色的真凶 + 修法的回归钉
//
// 真凶(线上 prescript 实证):Quartz 注册了
//   matchMedia('(prefers-color-scheme: dark)').addEventListener('change', l)
//   l = t => { saved-theme = t.matches?'dark':'light'; localStorage.setItem('theme', 同值) }
// 它不只改属性、**还把 localStorage 一起写成系统色** → 手机从后台切回/重启时该事件触发,
// 我们设的白天被吃掉且被持久化。桌面静态测永远测不到(事件不 fire)。
//
// ⚠️ 本文件钉的是**我这段强制逻辑**(被系统改动后能不能扳回来),
// 钉不了「手机上那个 change 事件何时触发」—— 那是环境行为,只能真机验收。

/** 从 patch-site.mjs 抽出真正注入线上的那段种子脚本(真相源,不重抄) */
function seedSource(): string {
  const src = readFileSync(new URL("../scripts/patch-site.mjs", import.meta.url), "utf8");
  const m = src.match(/__html: \\`(try\{var pdK.*?)\\`,/s);
  if (!m) throw new Error("没抽到种子脚本 —— patch-site.mjs 的注入写法变了,先更新本测试");
  return m[1];
}

/**
 * 最小 DOM 桩。**观察者按微任务语义**(不是同步):真 MutationObserver 的回调排在
 * 当前同步块跑完之后。这一点必须忠实 —— 第一版桩做成同步通知,强制逻辑会插进 Quartz
 * handler 中途执行,随后那句 localStorage.setItem 又把修正盖掉,于是测出「修复无效」的**假红**;
 * 反过来若顺序写错也会测出**假绿**(GLM 011[3] 提了顺序,顺着查才挖出同步/异步这层)。
 */
/** 等一次微任务刷新(让观察者回调跑完),对应真浏览器里 MutationObserver 的时机 */
const tick = () => new Promise((r) => setTimeout(r, 0));

function runSeed(store: Record<string, string> = {}) {
  const observers: Array<() => void> = [];
  let pending = false;
  const attrs: Record<string, string> = {};
  const clickHandlers: Array<(e: any) => void> = [];
  const localStorage = {
    getItem: (k: string) => (k in store ? store[k] : null),
    setItem: (k: string, v: string) => void (store[k] = String(v)),
    removeItem: (k: string) => void delete store[k],
  };
  const documentElement = {
    getAttribute: (k: string) => (k in attrs ? attrs[k] : null),
    setAttribute: (k: string, v: string) => {
      attrs[k] = v;
      if (!pending) {
        pending = true;
        queueMicrotask(() => {
          pending = false;
          observers.forEach((cb) => cb());
        });
      }
    },
  };
  const head = { appendChild: () => {} };
  const document = {
    documentElement,
    head,
    createElement: () => ({ name: "", content: "" }),
    addEventListener: (type: string, cb: any) => void (type === "click" && clickHandlers.push(cb)),
  };
  const MutationObserver = class {
    cb: () => void;
    constructor(cb: () => void) {
      this.cb = cb;
    }
    observe() {
      observers.push(this.cb);
    }
  };
  new Function("localStorage", "document", "MutationObserver", seedSource())(
    localStorage,
    document,
    MutationObserver,
  );
  return {
    store,
    attrs,
    /** 模拟 Quartz 那个系统监听器干的事(改属性 + 写 localStorage) */
    osFlip: (theme: string) => {
      // 顺序照线上 handler 的真实次序:先改属性、再写 localStorage(GLM 011[3] 采纳)
      documentElement.setAttribute("saved-theme", theme);
      localStorage.setItem("theme", theme);
    },
    /** 模拟用户点深浅开关(捕获阶段我们先记选择,随后 Quartz 翻属性) */
    userToggle: () => {
      const target = { closest: (sel: string) => (sel === ".darkmode" ? {} : null) };
      clickHandlers.forEach((cb) => cb({ target }));
      const now = documentElement.getAttribute("saved-theme") === "dark" ? "light" : "dark";
      localStorage.setItem("theme", now);
      documentElement.setAttribute("saved-theme", now);
    },
  };
}

describe("drift #64 · 主题锁:系统深色抢不走白天", () => {
  it("★★★ 全新访客 → 白天(不看系统色)", async () => {
    const t = runSeed();
    await tick();
    expect(t.attrs["saved-theme"]).toBe("light");
    expect(t.store["theme"]).toBe("light");
  });

  it("★★★ 真凶复现:系统监听器把主题写成 dark → 当场被扳回白天,localStorage 也修回来", async () => {
    const t = runSeed();
    t.osFlip("dark"); // ← 这一步就是手机启动时实际发生的事
    await tick();
    expect(t.attrs["saved-theme"]).toBe("light");
    expect(t.store["theme"]).toBe("light");
  });

  it("★★★ 老访客带着历史 theme=dark 进来(pd-light-1 已迁移过)→ 仍是白天", async () => {
    const t = runSeed({ "pd-light-1": "1", theme: "dark" });
    await tick();
    expect(t.attrs["saved-theme"]).toBe("light");
  });

  it("★★★ 用户亲手点深色 → 记住深色(锁不能把用户自己的选择也吃掉)", async () => {
    const t = runSeed();
    t.userToggle();
    await tick();
    expect(t.store["pd-theme-choice"]).toBe("dark");
    expect(t.attrs["saved-theme"]).toBe("dark");
  });

  it("★★★ 用户选了深色后,系统监听器改成 light 也扳回深色(显式选择优先于系统)", async () => {
    const t = runSeed();
    t.userToggle(); // → dark
    await tick();
    t.osFlip("light");
    await tick();
    expect(t.attrs["saved-theme"]).toBe("dark");
    expect(t.store["theme"]).toBe("dark");
  });

  it("★★ 用户点两次回到白天,且此后系统深色仍抢不走", async () => {
    const t = runSeed();
    t.userToggle(); // → dark
    await tick();
    t.userToggle(); // → light
    await tick();
    expect(t.store["pd-theme-choice"]).toBe("light");
    t.osFlip("dark");
    await tick();
    expect(t.attrs["saved-theme"]).toBe("light");
  });

  it("★★ 首访迁移会清掉旧的显式选择一次(pd-light-1 未设 → 所有人重置回白天)", async () => {
    const t = runSeed({ "pd-theme-choice": "dark" }); // 没有 pd-light-1 → 走迁移
    await tick();
    expect(t.store["pd-theme-choice"]).toBeUndefined();
    expect(t.attrs["saved-theme"]).toBe("light");
  });
});
