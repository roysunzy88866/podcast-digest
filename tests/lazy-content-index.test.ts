// 搜索索引按需加载(2026-08-29:用户「点击进入详情页特别卡,要等 1-5 秒」)。
//
// 线上实测:每个页面 <head> 内联一行**立即执行**的 fetch("/static/contentIndex.json")
// —— gzip 2.24MB / 解压 7.8MB(详情页 HTML 自己才 33KB),还要主线程 JSON.parse 7.8MB;
// 而详情页里 fetchData **无人消费**(搜索代码按需才加载)→ 纯白下 + 白解析 = 那 1-5 秒。
// 这里钉的是惰性版本的**行为等价性**:没人用就一个请求都不发,一旦有人用则与原 Promise 表现一致。
import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { lazyFetchScript, EAGER_LINE, LAZY_LINE } from "../scripts/lazy-content-index.mjs";

const URL_ = "/static/contentIndex.json";

/** 在隔离作用域里跑内联脚本,返回 { fetchData, calls };calls 记录真实发起的请求次数。 */
function runScript(payload: any = { ok: 1 }, opts: { reject?: boolean } = {}) {
  const calls: string[] = [];
  const fakeFetch = (u: string) => {
    calls.push(u);
    return opts.reject
      ? Promise.reject(new Error("boom"))
      : Promise.resolve({ json: () => Promise.resolve(payload) });
  };
  // 脚本以 `const fetchData = ...` 开头,包一层把它取出来
  const fn = new Function("fetch", `${lazyFetchScript(URL_)}; return fetchData;`);
  return { fetchData: fn(fakeFetch), calls };
}

describe("搜索索引按需加载 · 惰性 fetchData", () => {
  it("★★★ 没人用它 → 一个请求都不发(这就是详情页省下的 2.24MB)", () => {
    const { calls } = runScript();
    expect(calls.length).toBe(0); // 原版在这一刻已经开下 2.24MB
  });

  it("★★★ 真的 await 时才发请求,并拿到解析后的数据(搜索照常能用)", async () => {
    const { fetchData, calls } = runScript({ hello: "world" });
    expect(calls.length).toBe(0);
    const data = await fetchData;
    expect(calls).toEqual([URL_]); // 这一刻才下
    expect(data).toEqual({ hello: "world" });
  });

  it("★★★ 多次使用只下一次(缓存,不会每次搜索都重下)", async () => {
    const { fetchData, calls } = runScript({ a: 1 });
    await fetchData;
    await fetchData;
    await Promise.all([fetchData, fetchData]);
    expect(calls.length).toBe(1);
  });

  it("★★ then/catch/finally 都在(对消费方与原 Promise 等价)", async () => {
    const { fetchData } = runScript({ v: 42 });
    await expect(new Promise((r) => fetchData.then(r))).resolves.toEqual({ v: 42 });
    const done: string[] = [];
    await fetchData.finally(() => done.push("fin"));
    expect(done).toEqual(["fin"]);
  });

  it("★★ 请求失败可被 catch(不至于变成未处理拒绝)", async () => {
    const { fetchData } = runScript({}, { reject: true });
    await expect(fetchData.catch((e: Error) => e.message)).resolves.toBe("boom");
  });

  it("★★★ 失败不缓存,下次使用会重试(GLM 067[3]:否则一次断网后同页搜索永远打不开)", async () => {
    // 第一次失败,第二次成功 → 惰性版必须真的重发,而不是把失败结果记一辈子
    let n = 0;
    const calls: string[] = [];
    const fakeFetch = (u: string) => {
      calls.push(u);
      return ++n === 1
        ? Promise.reject(new Error("offline"))
        : Promise.resolve({ json: () => Promise.resolve({ ok: true }) });
    };
    const fetchData = new Function("fetch", `${lazyFetchScript(URL_)}; return fetchData;`)(fakeFetch);
    await expect(fetchData.catch((e: Error) => e.message)).resolves.toBe("offline");
    await expect(fetchData).resolves.toEqual({ ok: true }); // 重试成功
    expect(calls.length).toBe(2); // 真的重发了
  });

  it("★★ 惰性脚本仍指向同一个索引地址(别把搜索指到不存在的文件)", () => {
    expect(lazyFetchScript(URL_)).toContain(`fetch("${URL_}")`);
    expect(LAZY_LINE).toContain("const contentIndexScript = `");
    expect(LAZY_LINE).toContain("${contentIndexPath}"); // 仍由上游插值,不写死路径
  });

  // GLM 067[1] 说得对:CI 不 clone site/ → 这条在 CI 等于零覆盖,别把它当成锚点闸门。
  // **真闸门在构建期**:patch-site.mjs 用 replaceOnce 打这个补丁,锚点找不到直接 exit 1 → 部署当场挂掉、
  // 不会静默失效(与本仓其它补丁同一铁律)。这条只是本地开发时的提前预警。
  it("★★ (本地有 site/ 时)上游锚点仍在 —— 真闸门是 patch-site 构建期硬错", () => {
    const p = "site/quartz/components/renderPage.tsx";
    if (!existsSync(p)) return; // CI 无 site/:跳过,靠构建期硬错兜底
    expect(readFileSync(p, "utf8")).toContain(EAGER_LINE);
  });
});
