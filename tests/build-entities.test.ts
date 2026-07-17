// C3 Scenario 4 · 实体页聚合(自建,ADR 0008)的真业务测试
// 纪律同前:只调被测函数、不重抄逻辑、可变异验证。
import { describe, it, expect } from "vitest";
import { aggregate, quotesFor, related, renderEntityPage } from "../scripts/build-entities.mjs";

// 两集 fixture:agent 在两集都 primary(跨集聚合锚);kubernetes 集1 primary/集2 提及;
// modal 只集1;databricks 只集2。镜像真实数据形状。
const EP1 = {
  meta: { id: "ep1", title_zh: "Modal 集", date: "2026-07-08" },
  digest: {
    quotes: [
      { zh: "为什么让智能体读配置", en: "why make an agent read configs", timestamp: "05:06", speaker: "Akshat Bubna" },
      { zh: "Modal 很强", en: "Modal is powerful for inference", timestamp: "12:30", speaker: "Akshat Bubna" },
    ],
  },
  entities: {
    entities: [
      { id: "akshat-bubna", type: "person", role: "guest", name: "Akshat Bubna", file: "Akshat Bubna", primary: true, evidence: [{ t: [10, 19] }] },
      { id: "modal", type: "company", role: "company", name: "Modal", file: "Modal", primary: true, how_described: "云平台", evidence: [{ t: [30, 40] }] },
      { id: "agent", type: "concept", role: "concept", name: "智能体 (agent)", file: "智能体", primary: true, how_described: "自主 AI 系统", evidence: [{ t: [5, 8] }] },
      { id: "kubernetes", type: "concept", role: "concept", name: "Kubernetes", file: "Kubernetes", primary: true, how_described: "难管理", evidence: [{ t: [20, 26] }] },
    ],
  },
};
const EP2 = {
  meta: { id: "ep2", title_zh: "Databricks 集", date: "2026-06-24" },
  digest: {
    quotes: [
      { zh: "智能体要能共享会话", en: "agents need shared sessions", timestamp: "08:00", speaker: "Matei Zaharia" },
    ],
  },
  entities: {
    entities: [
      { id: "matei-zaharia", type: "person", role: "guest", name: "Matei Zaharia", file: "Matei Zaharia", primary: true, evidence: [{ t: [1, 5] }] },
      { id: "agent", type: "concept", role: "concept", name: "智能体 (agent)", file: "智能体", primary: true, how_described: "编程主力", evidence: [{ t: [100, 108] }] },
      { id: "kubernetes", type: "concept", role: "concept", name: "Kubernetes", file: "Kubernetes", primary: false, how_described: "", evidence: [{ t: [200, 205] }] },
      { id: "databricks", type: "company", role: "company", name: "Databricks", file: "Databricks", primary: true, how_described: "数据公司", evidence: [{ t: [3, 9] }] },
    ],
  },
};
const EPS = [EP1, EP2];
const ALIAS = new Map([["agent", { id: "agent", name: "智能体 (Agent)", file: "智能体", forms: ["智能体", "agent", "agents"] }]]);

describe("aggregate · 跨集按 id 归并 + 建页门槛 #9", () => {
  const aggs = aggregate(EPS, ALIAS);
  const byId = new Map(aggs.map((a) => [a.id, a]));
  it("★ agent 跨两集聚合成一个实体、两条 appearance(#8 唯一验收点)", () => {
    expect(byId.get("agent").appearances.map((x) => x.epId).sort()).toEqual(["ep1", "ep2"]);
  });
  it("★ 别名表统一了它的 name/file(不裂成两页)", () => {
    expect(byId.get("agent").name).toBe("智能体 (Agent)"); // 用别名表的
    expect(byId.get("agent").file).toBe("智能体");
  });
  it("★ kubernetes 集1 primary/集2 提及 → 建页(任一集 primary 即可)", () => {
    const k = byId.get("kubernetes");
    expect(k).toBeTruthy();
    expect(k.appearances.find((x) => x.epId === "ep2").primary).toBe(false);
  });
  it("★ 单集实体正常入(modal 只集1)", () => {
    expect(byId.get("modal").appearances.length).toBe(1);
  });
  it("★ 从没 primary 过的实体不建页(建页门槛 #9)", () => {
    const onlyMentioned = [{ ...EP1, entities: { entities: [{ id: "x", type: "concept", role: "concept", name: "X", file: "X", primary: false, evidence: [] }] } }];
    expect(aggregate(onlyMentioned).some((a) => a.id === "x")).toBe(false);
  });
});

describe("quotesFor · 人物=本人说的 / 概念=提到它的(🔒 第 24 轮)", () => {
  const aggs = aggregate(EPS, ALIAS);
  const byId = new Map(aggs.map((a) => [a.id, a]));
  it("★ 人物页:只收他本人说的金句(speaker 匹配)", () => {
    const qs = quotesFor(byId.get("akshat-bubna"), EPS, ALIAS);
    expect(qs.length).toBe(2); // 集1 两条都是 Akshat 说的
    expect(qs.every((x) => x.q.speaker === "Akshat Bubna")).toBe(true);
  });
  it("★ 人物页不收别人说的(Matei 的那条不进 Akshat 页)", () => {
    const qs = quotesFor(byId.get("akshat-bubna"), EPS, ALIAS);
    expect(qs.some((x) => x.q.speaker === "Matei Zaharia")).toBe(false);
  });
  it("★ 概念页:提到它的金句(不限谁说)—— agent 两集各一条", () => {
    const qs = quotesFor(byId.get("agent"), EPS, ALIAS);
    expect(qs.map((x) => x.epId).sort()).toEqual(["ep1", "ep2"]);
  });
  it("★ 概念页金句带 ^块ID + 集id(供 ![[集#^块]] 嵌入)", () => {
    const qs = quotesFor(byId.get("agent"), EPS, ALIAS);
    expect(qs[0].block).toMatch(/^q\d+$/);
    expect(qs[0].epId).toBeTruthy();
  });
  it("★ 词边界:agent 不被 agenda 之类误命中", () => {
    const ep = { meta: { id: "e" }, digest: { quotes: [{ zh: "议程", en: "the agenda for the meeting", timestamp: "00:01", speaker: "X" }] }, entities: { entities: [] } };
    const agg = { id: "agent", type: "concept", name: "智能体 (Agent)", file: "智能体" };
    expect(quotesFor(agg, [ep], ALIAS).length).toBe(0);
  });
});

describe("related · 同集共现、只留有页的", () => {
  const aggs = aggregate(EPS, ALIAS);
  const pageIds = new Set(aggs.map((a) => a.id));
  const byId = new Map(aggs.map((a) => [a.id, a]));
  it("★ agent 的关联含同集出现的 modal/kubernetes(有页)", () => {
    const r = related(byId.get("agent"), EPS, pageIds);
    expect(r).toContain("modal");
    expect(r).toContain("kubernetes");
  });
  it("★ 不含自己", () => {
    expect(related(byId.get("agent"), EPS, pageIds)).not.toContain("agent");
  });
  it("★ 无页的实体不进关联(防死链)", () => {
    const r = related(byId.get("agent"), EPS, new Set(["agent", "modal"])); // kubernetes 不在页集
    expect(r).not.toContain("kubernetes");
  });
  it("★ 平票 round-robin:先加载的集不独占 top-N(审计 bias 回归)", () => {
    const p = (id: string) => ({ id, type: "concept", role: "concept", name: id, file: id, primary: true, evidence: [] });
    const epA = { meta: { id: "epA" }, digest: { quotes: [] }, entities: { entities: [p("x"), p("a1"), p("a2"), p("a3")] } };
    const epB = { meta: { id: "epB" }, digest: { quotes: [] }, entities: { entities: [p("x"), p("b1")] } };
    const eps = [epA, epB];
    const ag = aggregate(eps);
    const r = related(ag.find((a) => a.id === "x"), eps, new Set(ag.map((a) => a.id)));
    // x 与 a1/a2/a3(epA)、b1(epB)各共现 1 次;交错后 b1 应排在前二,不被 epA 三个独占挤到末尾
    expect(r.slice(0, 2)).toContain("b1");
  });
});

describe("renderEntityPage · 一套模板三种实体 + 4a/4b 边界", () => {
  const aggs = aggregate(EPS, ALIAS);
  const byId = new Map(aggs.map((a) => [a.id, a]));
  const pageById = new Map(aggs.map((a) => [a.id, { file: a.file, name: a.name }]));
  const page = (id) => {
    const a = byId.get(id);
    return renderEntityPage(a, quotesFor(a, EPS, ALIAS), related(a, EPS, new Set(aggs.map((x) => x.id))), pageById, ALIAS);
  };

  it("★ agent 页:头部数字 + 集里怎么说它(两集)+ 金句墙嵌入 + 出现在这些集 + 关联", () => {
    const p = page("agent");
    expect(p).toContain("出现在 2 集");
    expect(p).toContain("《Modal 集》");
    expect(p).toContain("《Databricks 集》");
    expect(p).toContain("![[ep1#^q1]]"); // 金句块嵌入(P1 验过)
    expect(p).toMatch(/## 集里怎么说它/);
    expect(p).toMatch(/## 出现在这些集/);
    expect(p).toMatch(/## 关联实体/);
  });
  it("★ 概念页 frontmatter 带 aliases(裁决 #10 双语可搜)", () => {
    expect(page("agent")).toMatch(/aliases:.*agent/);
  });
  it("★ 4a 单集实体(modal)不破版:出现在 1 集,正常显示", () => {
    const p = page("modal");
    expect(p).toContain("出现在 1 集");
    expect(p).toContain("《Modal 集》");
  });
  it("★ 4b 某区块无内容则隐藏:databricks 无匹配金句 → 无「## 金句」空框", () => {
    // databricks 的金句:概念/公司页收「提到它的」;fixture 里没有金句 en 含 databricks
    const p = page("databricks");
    expect(p).not.toMatch(/## 金句/);
  });
  it("★ kubernetes 页:集2 那次标『提及』(角色透明)", () => {
    const p = page("kubernetes");
    expect(p).toMatch(/《Databricks 集》.*提及/);
  });
  it("★ 变异防护:金句墙用嵌入语法 ![[..]] 不是普通链接 [[..]]", () => {
    // 普通链接不会嵌入内容,P1 证过嵌入才有「回原集」白送 → 必须是 ![[
    const p = page("agent");
    expect(p).toContain("![[ep1#^q1]]");
  });
});
