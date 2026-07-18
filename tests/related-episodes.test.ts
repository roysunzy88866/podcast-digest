// C6 Scenario 1 · 相关单集聚合(US-7)的真业务测试
// 纪律:只调被测函数、不重抄逻辑、可变异验证(见「同主持排除」那条=host-exclusion 的变异守卫)。
import { describe, it, expect } from "vitest";
import { relatedEpisodes } from "../scripts/build-entities.mjs";

// P(id,type,role,name,primary?):镜像 entities.json 里一个实体的形状
const P = (id, type, role, name, primary = true) => ({ id, type, role, name, file: name, primary, evidence: [] });

// ep1(Modal):嘉宾 akshat、概念 agent+kubernetes、公司 modal、主持 swyx
// ep2(Databricks):嘉宾 matei、概念 agent+kubernetes(提及)、公司 databricks、主持 swyx —— 与 ep1 共享 agent+kubernetes(同概念)
// ep3(无关):嘉宾 zoe、概念 rust、公司 vercel、主持 swyx —— 与谁都只共享 swyx(host)
const EP1 = { meta: { id: "ep1", title_zh: "Modal 集", date: "2026-07-08" }, digest: { quotes: [] }, entities: { entities: [
  P("swyx", "person", "host", "swyx"), P("akshat", "person", "guest", "Akshat Bubna"),
  P("agent", "concept", "concept", "智能体"), P("kubernetes", "concept", "concept", "Kubernetes"), P("modal", "company", "company", "Modal"),
] } };
const EP2 = { meta: { id: "ep2", title_zh: "Databricks 集", date: "2026-06-24" }, digest: { quotes: [] }, entities: { entities: [
  P("swyx", "person", "host", "swyx"), P("matei", "person", "guest", "Matei Zaharia"),
  P("agent", "concept", "concept", "智能体"), P("kubernetes", "concept", "concept", "Kubernetes", false), P("databricks", "company", "company", "Databricks"),
] } };
const EP3 = { meta: { id: "ep3", title_zh: "无关集", date: "2026-05-01" }, digest: { quotes: [] }, entities: { entities: [
  P("swyx", "person", "host", "swyx"), P("zoe", "person", "guest", "Zoe"),
  P("rust", "concept", "concept", "Rust"), P("vercel", "company", "company", "Vercel"),
] } };
const EPS = [EP1, EP2, EP3];

describe("relatedEpisodes · 共享实体判相关 + 分组注原因(US-7)", () => {
  it("★ ep1 与 ep2 相关:共享 agent+kubernetes(同概念),score 2", () => {
    const r = relatedEpisodes("ep1", EPS);
    const ep2 = r.find((x) => x.epId === "ep2");
    expect(ep2).toBeTruthy();
    expect(ep2.shared.concepts.map((c) => c.id).sort()).toEqual(["agent", "kubernetes"]);
    expect(ep2.score).toBe(2);
  });

  it("★ 同主持 swyx 不算相关信号:ep3 只跟别人共享 host → 不进相关(host-exclusion 变异守卫)", () => {
    // 若谁把 host 排除去掉(退化成 host 也算共享),ep3 会因 swyx 冒出来 → 本条挂
    expect(relatedEpisodes("ep1", EPS).some((x) => x.epId === "ep3")).toBe(false);
  });

  it("★ 自己不进自己的相关", () => {
    expect(relatedEpisodes("ep1", EPS).some((x) => x.epId === "ep1")).toBe(false);
  });

  it("★ 无相关集时返回空数组(Scenario 1a 首个入库/无交集)", () => {
    expect(relatedEpisodes("ep3", EPS)).toEqual([]);
  });

  it("★ 同嘉宾算相关:ep4 与 ep1 共享 akshat(嘉宾)→ 进 shared.guests", () => {
    const ep4 = { meta: { id: "ep4", title_zh: "ep4", date: "2026-04-01" }, digest: { quotes: [] }, entities: { entities: [P("akshat", "person", "guest", "Akshat Bubna"), P("rust", "concept", "concept", "Rust")] } };
    const e4 = relatedEpisodes("ep1", [EP1, ep4]).find((x) => x.epId === "ep4");
    expect(e4).toBeTruthy();
    expect(e4.shared.guests.map((g) => g.id)).toContain("akshat");
  });

  it("★ 同公司算相关:ep5 与 ep1 共享 modal(公司)→ 进 shared.companies", () => {
    const ep5 = { meta: { id: "ep5", title_zh: "ep5", date: "2026-03-01" }, digest: { quotes: [] }, entities: { entities: [P("modal", "company", "company", "Modal")] } };
    const e5 = relatedEpisodes("ep1", [EP1, ep5]).find((x) => x.epId === "ep5");
    expect(e5.shared.companies.map((c) => c.id)).toContain("modal");
  });

  it("★ minShared 阈值挡泛噪(Scenario 1b):要求 ≥3 时只共享 2 个的 ep2 不算", () => {
    expect(relatedEpisodes("ep1", EPS, { minShared: 3 }).length).toBe(0);
  });

  it("★ score 降序稳定排列", () => {
    const r = relatedEpisodes("ep1", EPS);
    for (let i = 1; i < r.length; i++) expect(r[i - 1].score).toBeGreaterThanOrEqual(r[i].score);
  });

  it("★ 目标集不存在 → 空数组(不炸)", () => {
    expect(relatedEpisodes("不存在", EPS)).toEqual([]);
  });
});

describe("relatedEpisodes · 泛噪闸 + 强弱权重(依独立审计 2026-07-18)", () => {
  // foo 在 mA、mB 都只「一句带过」(primary:false)
  const mA = { meta: { id: "mA", title_zh: "mA", date: "2026-02-01" }, digest: { quotes: [] }, entities: { entities: [
    P("foo", "concept", "concept", "Foo", false), P("bar", "concept", "concept", "Bar"),
  ] } };
  const mB = { meta: { id: "mB", title_zh: "mB", date: "2026-01-01" }, digest: { quotes: [] }, entities: { entities: [
    P("foo", "concept", "concept", "Foo", false), P("zzz", "concept", "concept", "Zzz"),
  ] } };

  it("★ 两集都非 primary 的共享概念(foo)不算相关信号 → 不判相关(泛噪闸·变异守卫)", () => {
    // 若谁把「至少一集 primary」这条去掉,mB 会因 foo 冒进 mA 的相关 → 本条挂
    expect(relatedEpisodes("mA", [mA, mB]).some((x) => x.epId === "mB")).toBe(false);
  });

  it("★ 一集 primary、一集提及的共享概念算(弱相关,strong=false)", () => {
    const mC = { meta: { id: "mC", title_zh: "mC", date: "2026-03-01" }, digest: { quotes: [] }, entities: { entities: [P("foo", "concept", "concept", "Foo")] } };
    const r = relatedEpisodes("mC", [mC, mB]).find((x) => x.epId === "mB");
    expect(r).toBeTruthy();
    expect(r.shared.concepts.map((c) => c.id)).toContain("foo");
    expect(r.shared.concepts.find((c) => c.id === "foo").strong).toBe(false);
  });

  it("★ strong(两集都主讨论)在桶内排前 + strongScore 主导排名", () => {
    const t = { meta: { id: "t", title_zh: "t", date: "2026-01-01" }, digest: { quotes: [] }, entities: { entities: [
      P("s1", "concept", "concept", "S1"), P("s2", "concept", "concept", "S2"), P("s3", "concept", "concept", "S3"),
    ] } };
    const p = { meta: { id: "p", title_zh: "p", date: "2026-02-01" }, digest: { quotes: [] }, entities: { entities: [
      P("s1", "concept", "concept", "S1"), P("s2", "concept", "concept", "S2", false),
    ] } };
    const q = { meta: { id: "q", title_zh: "q", date: "2026-03-01" }, digest: { quotes: [] }, entities: { entities: [
      P("s3", "concept", "concept", "S3"), P("s1", "concept", "concept", "S1"),
    ] } };
    const r = relatedEpisodes("t", [t, p, q]);
    const rp = r.find((x) => x.epId === "p");
    expect(rp.shared.concepts[0].id).toBe("s1"); // strong 排前
    expect(rp.shared.concepts[0].strong).toBe(true);
    expect(rp.shared.concepts.find((c) => c.id === "s2").strong).toBe(false);
    expect(r[0].epId).toBe("q"); // q 有 2 个 strong 共享 → strongScore 主导,排 p 之前
  });
});
