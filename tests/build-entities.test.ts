// C3 Scenario 4 · 实体页聚合(自建,ADR 0008)的真业务测试
// 纪律同前:只调被测函数、不重抄逻辑、可变异验证。
import { describe, it, expect } from "vitest";
import {
  aggregate,
  quotesFor,
  related,
  renderEntityPage,
  buildAllPages,
  buildPeersContext,
  sameTopicPeers,
  epCount,
  buildCanonMap,
  canonicalizeEpisodes,
} from "../scripts/build-entities.mjs";

// 两集 fixture:agent 在两集都 primary(跨集聚合锚);kubernetes 集1 primary/集2 提及;
// modal 只集1;databricks 只集2。镜像真实数据形状。
const EP1 = {
  meta: { id: "ep1", title_zh: "Modal 集", date: "2026-07-08", podcast: "Latent Space" },
  digest: {
    quotes: [
      { zh: "为什么让智能体读配置", en: "why make an agent read configs", timestamp: "05:06", speaker: "Akshat Bubna" },
      { zh: "Modal 很强", en: "Modal is powerful for inference", timestamp: "12:30", speaker: "Akshat Bubna" },
    ],
  },
  entities: {
    categories: ["智能体"], // C13j 补遗:大类走真实词表词,episodeCategories 不落「未分类」
    entities: [
      { id: "akshat-bubna", type: "person", role: "guest", name: "Akshat Bubna", file: "Akshat Bubna", primary: true, evidence: [{ t: [10, 19] }] },
      { id: "modal", type: "company", role: "company", name: "Modal", file: "Modal", primary: true, how_described: "云平台", evidence: [{ t: [30, 40] }] },
      { id: "agent", type: "concept", role: "concept", name: "智能体 (agent)", file: "智能体", primary: true, how_described: "自主 AI 系统", evidence: [{ t: [5, 8] }] },
      { id: "kubernetes", type: "concept", role: "concept", name: "Kubernetes", file: "Kubernetes", primary: true, how_described: "难管理", evidence: [{ t: [20, 26] }] },
    ],
  },
};
const EP2 = {
  meta: { id: "ep2", title_zh: "Databricks 集", date: "2026-06-24", podcast: "Latent Space" },
  digest: {
    quotes: [
      { zh: "智能体要能共享会话", en: "agents need shared sessions", timestamp: "08:00", speaker: "Matei Zaharia" },
    ],
  },
  entities: {
    categories: ["智能体"],
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
    expect(p).toContain("本站收录 <b>2</b> 集"); // C13j:数字进 phero 头部(设计稿 .nums)
    expect(p).toContain("《Modal 集》");
    expect(p).toContain("《Databricks 集》");
    expect(p).toContain("![[ep1#^q1]]"); // 金句块嵌入(P1 验过)
    expect(p).toMatch(/## 集里怎么说它/);
    expect(p).toMatch(/## ② 出现在这些集/);
    expect(p).toMatch(/## ③ 关联/); // 概念页用中性词;人物页是「③ 他谈到的」
  });

  // C13j(设计稿 person-*.html)
  it("★ 人物页头部照设计稿:头像首字母 + 姓名 + 「播客 角色」+ 收录数字", () => {
    const p = page("akshat-bubna");
    expect(p).toMatch(/<div class="pd-phero">/);
    expect(p).toMatch(/<div class="av"[^>]*>AK<\/div>/);
    expect(p).toMatch(/<div class="byl">[^<]*嘉宾/);
    expect(p).toMatch(/## ① 他说过的话/);
    expect(p).toMatch(/## ③ 他谈到的/);
  });

  it("★★ 双链与块嵌入必须留在 markdown 里(用 HTML 包住 Quartz 就不解析,集页关联框踩过)", () => {
    const p = page("akshat-bubna");
    // 金句墙、集列表、关联三处都不许被包进原样 HTML 标签
    for (const frag of ["![[ep1#^q1]]", "[[ep1|《Modal 集》]]"]) {
      const i = p.indexOf(frag);
      expect(i, `${frag} 应该在页面里`).toBeGreaterThan(-1);
      const line = p.slice(p.lastIndexOf("\n", i) + 1, p.indexOf("\n", i));
      expect(line).not.toMatch(/^</); // 该行不是 HTML 块
    }
  });

  it("★ 顶栏与搬运脚本在(实体页也是站内二级页,搜索/深浅色不降级)", () => {
    const p = page("akshat-bubna");
    expect(p).toContain('class="pd-top"');
    expect(p).toContain("pd-acts");
    expect(p).toContain("adopt");
  });
  it("★ 概念页 frontmatter 带 aliases(裁决 #10 双语可搜)", () => {
    expect(page("agent")).toMatch(/aliases:.*agent/);
  });
  it("★ 4a 单集实体(modal)不破版:出现在 1 集,正常显示", () => {
    const p = page("modal");
    expect(p).toContain("本站收录 <b>1</b> 集");
    expect(p).toContain("《Modal 集》");
  });
  it("★ 4b 某区块无内容则隐藏:databricks 无匹配金句 → 无「## 金句」空框", () => {
    // databricks 的金句:概念/公司页收「提到它的」;fixture 里没有金句 en 含 databricks
    const p = page("databricks");
    expect(p).not.toMatch(/## ① /);
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

// ══ C13j 补遗 ① · 关联药丸集数徽标(设计稿 .chp b:<b>N 集</b>)══
// 徽标数据在构建期算好(与 phero「本站收录 N 集」同一个 epCount,不造第二套口径),
// 客户端脚本挂 <b> —— [[双链]] 里塞不进 HTML,包住它 Quartz 又不解析(铁律)。
describe("C13j 补遗 ① · 药丸集数徽标与 phero 同源", () => {
  const pages = buildAllPages(EPS, ALIAS);

  it("★ 人物页带徽标数据块(inert JSON):关联实体 file → 收录集数(agent 跨 2 集 → 智能体:2)", () => {
    const p = pages.get("Akshat Bubna");
    expect(p).toContain('<script type="application/json" class="pd-epn">');
    expect(p).toContain('"智能体":2');
    expect(p).toContain('"Modal":1');
  });

  it("★★ 挂徽标的运行时在共享 sidebar 脚本里、且从当前页 DOM 现读数据(SPA 换页不重跑内联脚本,闭包旧数据会漏配新页 —— 实测)", () => {
    const p = pages.get("Akshat Bubna");
    expect(p).toContain("script.pd-epn"); // 运行时按类名找当前页的数据块
    expect(p).toContain("JSON.parse"); // 现读现解析,不吃闭包
  });

  it("★★ 同源同算法:徽标里的数字 = 该实体自己页面 phero 的收录数(epCount 一个口径)", () => {
    const aggs = aggregate(EPS, ALIAS);
    const agent = aggs.find((a) => a.id === "agent");
    expect(epCount(agent)).toBe(2);
    expect(pages.get("智能体")).toContain("本站收录 <b>2</b> 集"); // phero 数字
    expect(pages.get("Akshat Bubna")).toContain('"智能体":2'); // 药丸徽标数字,同一个 epCount
  });

  it("★★ 铁律:③ 的双链行仍是纯 markdown,不被 HTML 包住", () => {
    const p = pages.get("Akshat Bubna");
    const i = p.indexOf("[[Modal]]");
    expect(i).toBeGreaterThan(-1);
    const line = p.slice(p.lastIndexOf("\n", i) + 1, p.indexOf("\n", i));
    expect(line).not.toMatch(/^</);
  });

  it("★ 无关联实体则不带徽标数据(不给空数据块)", () => {
    const a = aggregate(EPS, ALIAS).find((x) => x.id === "modal");
    const md = renderEntityPage(a, [], [], new Map(), ALIAS, { epCountByFile: new Map([["Modal", 1]]) });
    expect(md).not.toContain('class="pd-epn"');
  });

  it("★★ 多 id 同 file 冲突(真数据 agent/agents/agentic→智能体):徽标 = 落盘那页(后者)的收录数,不穿帮", () => {
    const c = (id: string, file: string) => ({ id, type: "concept", role: "concept", name: id, file, primary: true, evidence: [] });
    // idA 出现 2 集、idB 出现 1 集,同 file「X」;落盘顺序后者覆盖 → 页面 phero 显示 1
    const e1 = { meta: { id: "e1", title_zh: "e1", date: "2026-01-01" }, digest: { quotes: [] }, entities: { categories: ["智能体"], entities: [c("idA", "X"), c("other", "Other")] } };
    const e2 = { meta: { id: "e2", title_zh: "e2", date: "2026-01-02" }, digest: { quotes: [] }, entities: { categories: ["智能体"], entities: [c("idA", "X"), c("idB", "X")] } };
    const pages = buildAllPages([e1, e2]);
    expect(pages.get("X")).toContain("本站收录 <b>1</b> 集"); // 落盘页 = idB(后写的)
    expect(pages.get("Other")).toContain('"X":1'); // Other 的关联药丸徽标跟落盘页一致,不显示 idA 的 2
  });
});

// ══ C13j 补遗 ② · 「④ 也在聊「X」的人」(设计稿 person-*.html 八样例逆向)══
// 规则:X = 该人最近一次「资格出场」(primary 且非常驻主持)那集的主类;
// 人选 = 其它有页人物,资格出场某集大类(两槽任一)含 X;排序 = 集日期降序 → 同集按 entities 序。
// 常驻主持 = 同一播客 ≥2 集 host/cohost;⚠️ 不能按单集 role=host 一刀切 ——
// 真数据里单人访谈的嘉宾常被标成 host(Boris Cherny 实例),他必须照常入选。
describe("C13j 补遗 ② · 也在聊 X 的人", () => {
  const per = (id: string, name: string, role: string, primary = true) => ({
    id, type: "person", role, name, file: name, primary, evidence: [],
  });
  const ep = (id: string, date: string, podcast: string, cats: string[], persons: any[]) => ({
    meta: { id, title_zh: id, date, podcast },
    digest: { quotes: [] },
    entities: { categories: cats, entities: persons },
  });
  // 镜像设计稿八样例的形状:智能体一群人 + AI 安全一对 + 常驻主持 + 单集"host"嘉宾 + 次槽命中
  const EPS2 = [
    ep("epY", "2026-07-28", "YC", ["智能体"], [per("boris", "Boris", "host")]), // 单集 host = 真嘉宾
    ep("epS", "2026-07-14", "Singju", ["智能体"], [per("raphael", "Raphael", "guest"), per("peter", "Peter", "guest")]),
    ep("epM", "2026-07-08", "Latent Space", ["智能体"], [
      per("akshat", "Akshat", "guest"),
      per("lenny", "Lenny", "host"), // 常驻主持第 1 集
      per("carol", "Carol", "guest", false), // 仅被提及(非 primary)→ 不因此入智能体人选
    ]),
    ep("epD", "2026-06-24", "Latent Space", ["智能体"], [
      per("matei", "Matei", "guest"),
      per("reynold", "Reynold", "guest"),
      per("lenny", "Lenny", "host"), // 常驻主持第 2 集(同播客 ≥2 → 结构性)
    ]),
    ep("epG", "2026-06-22", "Latent Space", ["AI 安全"], [per("matt", "Matt", "guest"), per("carol", "Carol", "guest")]),
    ep("epX", "2026-05-21", "Latent Space", ["增长与销售", "智能体"], [per("ivan", "Ivan", "guest")]),
  ];
  const aggs2 = aggregate(EPS2);
  const ctx = buildPeersContext(EPS2, aggs2);
  const by = (id: string) => aggs2.find((a) => a.id === id)!;

  it("★ X = 最近资格出场集的主类;人选=同大类他人、排除自己", () => {
    const r = sameTopicPeers(by("akshat"), ctx)!;
    expect(r.topic).toBe("智能体");
    expect(r.peers.map((p: any) => p.id)).not.toContain("akshat");
    expect(r.peers.map((p: any) => p.id)).toContain("matei");
  });

  it("★★ 排序照设计稿:集日期降序,同集按该集 entities 序(Matei 在 Reynold 前)", () => {
    const r = sameTopicPeers(by("akshat"), ctx)!;
    expect(r.peers.map((p: any) => p.id)).toEqual(["boris", "raphael", "peter", "matei", "reynold", "ivan"]);
  });

  it("★★ 常驻主持(同播客≥2集 host/cohost)不进人选、其页也不出本节(结构性噪音,relatedEpisodes 同理)", () => {
    const r = sameTopicPeers(by("akshat"), ctx)!;
    expect(r.peers.map((p: any) => p.id)).not.toContain("lenny");
    expect(sameTopicPeers(by("lenny"), ctx)).toBeNull();
  });

  it("★★ 单集被标 host 的真嘉宾(Boris 情形)照常入选、自己页也有本节", () => {
    const r = sameTopicPeers(by("boris"), ctx)!;
    expect(r.topic).toBe("智能体");
    expect(r.peers.map((p: any) => p.id)).toEqual(["raphael", "peter", "akshat", "matei", "reynold", "ivan"]);
  });

  it("★ 大类次槽也算「也在聊」(ivan 的集主类是增长与销售、次槽智能体 → 入智能体人选)", () => {
    const r = sameTopicPeers(by("akshat"), ctx)!;
    expect(r.peers.map((p: any) => p.id)).toContain("ivan");
  });

  it("★ 仅被提及(非 primary)不算聊过:carol 不进智能体人选,但她真出场的 AI 安全照常算", () => {
    expect(sameTopicPeers(by("akshat"), ctx)!.peers.map((p: any) => p.id)).not.toContain("carol");
    const matt = sameTopicPeers(by("matt"), ctx)!;
    expect(matt.topic).toBe("AI 安全");
    expect(matt.peers.map((p: any) => p.id)).toEqual(["carol"]);
  });

  it("★ 异类不串门:AI 安全的人不进智能体列表", () => {
    expect(sameTopicPeers(by("akshat"), ctx)!.peers.map((p: any) => p.id)).not.toContain("matt");
  });

  it("★ 无人可列 → 整节不渲染(ivan 主类=增长与销售,无同类他人)", () => {
    const r = sameTopicPeers(by("ivan"), ctx);
    expect(r === null || r.peers.length === 0).toBe(true);
    const pages = buildAllPages(EPS2);
    expect(pages.get("Ivan")).not.toContain("④ 也在聊");
  });

  it("★★ 人物页渲染本节:标题带「X」+ 人物药丸双链 + 右栏目录改名脚本", () => {
    const p = buildAllPages(EPS2).get("Akshat")!;
    expect(p).toContain("## ④ 也在聊「智能体」的人");
    expect(p).toContain('<div class="pd-peers">');
    expect(p).toContain("[[Matei]]");
    expect(p).toContain("④ 同主题的人"); // 目录改名(设计稿右栏叫法)
  });

  it("★★ 铁律:④ 的人物双链行是纯 markdown,不被 HTML 包住", () => {
    const p = buildAllPages(EPS2).get("Akshat")!;
    const i = p.indexOf("[[Matei]]");
    const line = p.slice(p.lastIndexOf("\n", i) + 1, p.indexOf("\n", i));
    expect(line).not.toMatch(/^</);
  });

  it("★ 公司/概念页不出本节(设计稿没画)", () => {
    const pages = buildAllPages(EPS, ALIAS);
    expect(pages.get("智能体")).not.toContain("也在聊");
    expect(pages.get("Modal")).not.toContain("也在聊");
  });

  it("★ 人选上限 10(与关联区同上限,收在 buildAllPages)", () => {
    const many = Array.from({ length: 12 }, (_, i) =>
      ep(`e${i}`, `2026-01-${String(i + 1).padStart(2, "0")}`, "P", ["智能体"], [per(`g${i}`, `G${i}`, "guest")]),
    );
    const pages = buildAllPages(many);
    const p = pages.get("G0")!;
    const sec = p.slice(p.indexOf('<div class="pd-peers">'), p.indexOf("</div>", p.indexOf('<div class="pd-peers">')));
    expect((sec.match(/\[\[/g) ?? []).length).toBe(10);
  });
});

// ── Scenario 2c(缺陷修复 2026-07-30):变体 id 归并防同 file 覆盖丢页 ──
// GLM 给同一概念派了不同 id(单复数/词性 agent/agents/agentic),各自却落同一个中文 file,
// 生成期 out.set(file,…) 后写覆盖先写 → 整页丢失。别名表 merge 字段驱动生成期 id 归一根治。
describe("变体 id 归并(merge)· 防同 file 覆盖(Scenario 2c)", () => {
  const EPa = {
    meta: { id: "epa", title_zh: "A集", date: "2026-01-01" },
    digest: { quotes: [{ zh: "", en: "an agent does the work", timestamp: "00:01", speaker: "X" }] },
    entities: { entities: [{ id: "agent", type: "concept", role: "concept", name: "智能体 (agent)", file: "智能体", primary: true, how_described: "A集说它是自动助手", evidence: [{ t: [1, 3] }] }] },
  };
  const EPb = {
    meta: { id: "epb", title_zh: "B集", date: "2026-02-01" },
    digest: { quotes: [{ zh: "", en: "multiple agents run in parallel", timestamp: "00:02", speaker: "Y" }] },
    entities: { entities: [{ id: "agents", type: "concept", role: "concept", name: "智能体 (agents)", file: "智能体", primary: true, how_described: "B集说它是并行工作者", evidence: [{ t: [5, 7] }] }] },
  };
  const EPc = {
    meta: { id: "epc", title_zh: "C集", date: "2026-03-01" },
    digest: { quotes: [] },
    entities: { entities: [{ id: "agentic", type: "concept", role: "concept", name: "智能体 (agentic)", file: "智能体", primary: true, how_described: "C集说它是端到端运行方式", evidence: [{ t: [9, 11] }] }] },
  };
  const MERGED = new Map([["agent", { id: "agent", name: "智能体 (agent)", file: "智能体", forms: ["智能体", "agent", "agents", "agentic"], merge: ["agents", "agentic"] }]]);
  const NOMERGE = new Map([["agent", { id: "agent", name: "智能体 (agent)", file: "智能体", forms: ["智能体", "agent", "agents", "agentic"] }]]);
  const EPS3 = [EPa, EPb, EPc];

  it("★ buildCanonMap:从 merge 字段建「变体→权威」映射", () => {
    const m = buildCanonMap(MERGED);
    expect(m.get("agents")).toBe("agent");
    expect(m.get("agentic")).toBe("agent");
    expect(m.get("agent")).toBeUndefined(); // 权威 id 自己不在映射里
  });

  it("★ canonicalizeEpisodes:变体 id/name/file 全归一到权威", () => {
    const eps = canonicalizeEpisodes(EPS3, buildCanonMap(MERGED), MERGED);
    const ids = eps.flatMap((e) => e.entities.entities.map((x) => x.id));
    expect(ids).toEqual(["agent", "agent", "agent"]); // agents/agentic 都变 agent
    for (const e of eps) for (const x of e.entities.entities) { expect(x.name).toBe("智能体 (agent)"); expect(x.file).toBe("智能体"); }
  });

  it("★★ 三集用不同变体 id 但同 file → 归并成一页、三集全在(核心修复:不被覆盖)", () => {
    const pages = buildAllPages(EPS3, MERGED);
    const p = pages.get("智能体");
    expect(p).toBeTruthy();
    expect(p).toContain("本站收录 <b>3</b> 集"); // 修前只剩 1 集(后写覆盖)
    for (const t of ["《A集》", "《B集》", "《C集》"]) expect(p).toContain(t);
  });

  it("★ 各变体的「集里怎么说它」全部保留、一条不丢", () => {
    const p = buildAllPages(EPS3, MERGED).get("智能体");
    for (const h of ["A集说它是自动助手", "B集说它是并行工作者", "C集说它是端到端运行方式"]) expect(p).toContain(h);
  });

  it("★ 金句按 forms 全量召回(agent/agents 两种写法的英文金句都进页)", () => {
    const p = buildAllPages(EPS3, MERGED).get("智能体");
    expect(p).toContain("![[epa#^q1]]"); // "an agent does the work"
    expect(p).toContain("![[epb#^q1]]"); // "multiple agents run..."
  });

  it("★ 变异防护:没 merge(现状)时变体不并 → 撞同 file 后写覆盖前写、只剩 1 集(证明归并是必要修复,且归并只对显式 merge 生效)", () => {
    const pages = buildAllPages(EPS3, NOMERGE);
    // canonById 为空 → 三个变体各自成 agg、同 file 相撞 → 最后一个(agentic,C集)胜出
    expect(pages.get("智能体")).toContain("本站收录 <b>1</b> 集");
  });

  it("★ merge 不误伤:未点名的 id 保持独立(soul 组「先不动」的护栏)", () => {
    // soul 与 system-prompt 都落 file=系统提示词,但没给 merge → 不并(保持现状,各自成 agg)
    const eps = [
      { meta: { id: "e1", title_zh: "甲", date: "2026-01-01" }, digest: { quotes: [] }, entities: { entities: [{ id: "soul", type: "concept", role: "concept", name: "系统提示词 (soul)", file: "系统提示词", primary: true, evidence: [] }] } },
      { meta: { id: "e2", title_zh: "乙", date: "2026-02-01" }, digest: { quotes: [] }, entities: { entities: [{ id: "system-prompt", type: "concept", role: "concept", name: "系统提示词 (system prompt)", file: "系统提示词", primary: true, evidence: [] }] } },
    ];
    const aggs = aggregate(canonicalizeEpisodes(eps, buildCanonMap(MERGED), MERGED), MERGED);
    expect(aggs.filter((a) => a.file === "系统提示词").length).toBe(2); // 仍是两个 agg(没被误并)
  });
});
