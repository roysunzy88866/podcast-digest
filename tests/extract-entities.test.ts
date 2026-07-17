// C3 Scenario 2 · 实体抽取(归一化 + 回原文命中 + 真证据)的真业务测试
//
// 纪律(C2 交付物审计教训「防假绿单测自己就是假绿」):本文件**只调被测函数**,
// 不在测试里重抄任何判定逻辑;每条都要能做变异验证(故意回退实现 → 测试必须挂)。
//
// 本片被测的核心不变量(Gherkin Scenario 2):
//   ① 实体名必须回原文命中(直接 或 经别名表 en/误写形式)—— 命中不了 = GLM 凭空造 → 拦
//   ② 同一实体不同写法归一到同一 id(2a:Modal / Modal Labs → 不裂成两页)
//   ③ 概念的中文名不在英文稿里,走别名表 en 形式(2b:智能体 → agent/agents)
//   ④ evidence 的时间戳/原文片段由**代码从转写稿检索**,不吃 GLM 给的
import { describe, it, expect } from "vitest";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { resolve, dirname } from "node:path";
import { buildFactIndex } from "../scripts/gate-facts.mjs";
import {
  personEntitiesFromMeta,
  resolveEntity,
  collectEvidence,
  buildEntities,
  validateExtract,
} from "../scripts/extract-entities.mjs";

// ── fixture:2 说话人、逐词时间戳(镜像真数据结构)──
const mkWords = (text: string, t0: number, speaker: string) =>
  text.split(" ").map((w, i) => ({ word: w, start: t0 + i, end: t0 + i + 1, speaker }));

const TRANSCRIPT = [
  { text: "Modo is a cloud platform for running agents", start: 0, end: 8, words: mkWords("Modo is a cloud platform for running agents", 0, "SPEAKER_00") },
  { text: "Kubernetes was too hard so we built our own scheduler", start: 10, end: 19, words: mkWords("Kubernetes was too hard so we built our own scheduler", 10, "SPEAKER_01") },
  { text: "the agent needs a sandbox to run untrusted code", start: 20, end: 29, words: mkWords("the agent needs a sandbox to run untrusted code", 20, "SPEAKER_00") },
];

// fixture 隔离性(照 gate-facts.test.ts 的教训):title_en 里**故意不含 Modal / agent**,
// 否则真相源从 meta 直接命中,「靠别名表召回误写形式」这条路径根本走不到 → 假绿。
const META = {
  id: "ep-test",
  podcast: "Latent Space",
  date: "2026-07-08",
  title_en: "Why infrastructure must evolve — Akshat Bubna, Acme",
  host: "swyx",
  guests: ["Akshat Bubna"],
  cohosts: ["Vibhu"],
  speaker_map: { SPEAKER_00: "Akshat Bubna", SPEAKER_01: "swyx" },
  guest_titles: { "Akshat Bubna": "Acme CTO" },
};

// 集 2 的真实情况:host=null(主持人姓名无法确定,用户明示不录入),
// speaker_map 里只有角色名「主持人」——它**不是名字**,绝不能长成一个实体页。
const META_NO_HOST = {
  id: "ep-test-2",
  podcast: "Latent Space",
  date: "2026-06-24",
  title_en: "Why the Frontier Ecosystem must be Open — Matei Zaharia, Databricks",
  host: null,
  host_note: "主持人姓名无法确定,依用户明示只记角色不记姓名",
  guests: ["Matei Zaharia"],
  cohosts: [],
  speaker_map: { SPEAKER_00: "Matei Zaharia", SPEAKER_02: "主持人" },
};

const ALIASES = {
  entities: [
    { id: "modal", type: "company", name: "Modal", file: "Modal", forms: ["Modal", "Modal Labs", "Modo", "moto"] },
    { id: "agent", type: "concept", name: "智能体 (Agent)", file: "智能体", forms: ["智能体", "agent", "agents"] },
    { id: "kubernetes", type: "concept", name: "Kubernetes", file: "Kubernetes", forms: ["Kubernetes", "K8s", "k8s"] },
    // 多词 form,且**一个词在原文、一个不在**("cloud" 在、"alien" 不在)——
    // 只有这样 every/some 才给出不同答案,formHits 的变异才杀得掉。
    { id: "alien-cloud", type: "company", name: "Alien Cloud", file: "Alien Cloud", forms: ["Alien Cloud"] },
  ],
};

const ctx = () => buildFactIndex(TRANSCRIPT, META, ALIASES);

describe("personEntitiesFromMeta · 人物从 meta 派生(权威),不问 GLM", () => {
  it("guests/host/cohosts 各自带角色", () => {
    const ps = personEntitiesFromMeta(META);
    const byId = Object.fromEntries(ps.map((p) => [p.name, p.role]));
    expect(byId["Akshat Bubna"]).toBe("guest");
    expect(byId["swyx"]).toBe("host");
    expect(byId["Vibhu"]).toBe("cohost");
  });

  it("人物全部 type=person 且 primary(嘉宾/主持必是主要实体)", () => {
    for (const p of personEntitiesFromMeta(META)) {
      expect(p.type).toBe("person");
      expect(p.primary).toBe(true);
      expect(p.source).toBe("meta");
    }
  });

  it("★ host=null(集2 真实情况)→ 不产出主持人实体,更不许出现 null/undefined 名字", () => {
    const ps = personEntitiesFromMeta(META_NO_HOST);
    expect(ps.some((p) => p.role === "host")).toBe(false);
    for (const p of ps) {
      expect(p.name).toBeTruthy();
      expect(String(p.name)).not.toMatch(/undefined|null/);
    }
    expect(ps.map((p) => p.name)).toEqual(["Matei Zaharia"]);
  });

  it("★ speaker_map 里的角色名「主持人」不是真名 → 不许长成实体(meta 明写该角色不建页)", () => {
    // 派生源必须是 guests/host/cohosts 这些**真名字段**,不是 speaker_map。
    // 变异验证:把实现改成从 speaker_map 派生 → 这条挂。
    expect(personEntitiesFromMeta(META_NO_HOST).some((p) => p.name === "主持人")).toBe(false);
  });
});

describe("resolveEntity · ①回原文命中 + ②归一化到别名表 id", () => {
  it("直接命中原文", () => {
    expect(resolveEntity("Kubernetes", ctx()).pass).toBe(true);
  });

  it("★ 2a 归一化:Modal 与 Modal Labs 归到同一 id(实体页不裂成两页)", () => {
    const a = resolveEntity("Modal", ctx());
    const b = resolveEntity("Modal Labs", ctx());
    expect(a.pass).toBe(true);
    expect(b.pass).toBe(true);
    expect(a.id).toBe("modal");
    expect(b.id).toBe(a.id);
  });

  it("★ 正文写正确名 Modal、原文只有误写 Modo → 经别名表召回,不误杀", () => {
    // 钉死召回路径真的走了:原文里没有 "Modal" 这个词
    expect(TRANSCRIPT.map((s) => s.text).join(" ")).not.toContain("Modal");
    expect(resolveEntity("Modal", ctx()).matchedForm).toBe("Modo");
  });

  it("★ 2b 概念中文名不在英文稿里(智能体 vs agent)→ 走别名表 en 形式命中", () => {
    // 钉死这条路径真的走了:英文转写稿里压根没有「智能体」三个字
    expect(TRANSCRIPT.map((s) => s.text).join(" ")).not.toContain("智能体");
    const r = resolveEntity("智能体", ctx());
    expect(r.pass).toBe(true); // 却不该被判成编造
    expect(r.id).toBe("agent");
    expect(String(r.matchedForm).toLowerCase()).toContain("agent"); // 命中的是 en 形式
  });

  it("★ 纯中文名 + 别名表没登记 → 拦(norm 后无词可查,证不了它出现过)", () => {
    // 这正是「概念必须带原文」契约的由来:GLM 只给中文「沙箱」→ 无从回比 → 拦。
    // buildEntities 因此拿 name_en 去校验(英文稿里查英文),不靠别名表事先登记每个中文概念。
    expect(resolveEntity("沙箱", ctx()).pass).toBe(false);
  });

  it("★ 命中不了 = GLM 凭空造的实体 → 拦(本片核心不变量)", () => {
    const r = resolveEntity("Snowflake", ctx());
    expect(r.pass).toBe(false);
    expect(r.reason).toBeTruthy();
  });

  it("★ 在别名表但任何书写形式都没出现 → 照样拦(登记过 ≠ 本集提过)", () => {
    // alien-cloud 登记在别名表,但原文没有 "alien"(只有 "cloud")→ 必须拦。
    // 变异验证:formHits 的 every 改 some → 这条挂(cloud 命中就放行)。
    expect(resolveEntity("Alien Cloud", ctx()).pass).toBe(false);
  });
});

describe("collectEvidence · 证据由代码从转写稿检索,不吃 GLM 给的时间戳", () => {
  it("返回真时间戳 + 真原文片段", () => {
    const ev = collectEvidence(["Kubernetes"], TRANSCRIPT);
    expect(ev.length).toBeGreaterThan(0);
    expect(ev[0].quote).toContain("Kubernetes");
    expect(ev[0].t).toEqual([10, 19]); // 来自转写稿 fixture 的真区间
    expect(ev[0].seg).toBe(1);
  });

  it("★ 误写形式也检索得到(evidence 记的是原文实际长相)", () => {
    const ev = collectEvidence(["Modal", "Modo"], TRANSCRIPT);
    expect(ev.length).toBeGreaterThan(0);
    expect(ev[0].quote).toContain("Modo");
  });

  it("多处出现 → 多条证据,按出现顺序", () => {
    const ev = collectEvidence(["agent", "agents"], TRANSCRIPT);
    expect(ev.length).toBe(2);
    expect(ev[0].seg).toBeLessThan(ev[1].seg);
  });

  it("没出现 → 空数组(不编造证据)", () => {
    expect(collectEvidence(["Snowflake"], TRANSCRIPT)).toEqual([]);
  });

  it("★ 子串不算命中(agent 不该被 agenda 命中)", () => {
    const t = [{ text: "the agenda for today", start: 0, end: 4, words: mkWords("the agenda for today", 0, "S") }];
    expect(collectEvidence(["agent"], t)).toEqual([]);
  });
});

describe("buildEntities · 装配(纯函数,不调 GLM)", () => {
  // 契约:概念/公司**必须带原文** name_en —— 中文侧无法回原文比对(norm 后无词),
  // 英文侧才是硬线。人名/公司名的 name_zh=name_en=原文(裁决 #10)。
  const GLM_OUT = {
    tags: ["AI 基础设施", "智能体", "云计算"],
    entities: [
      { name_zh: "Modal", name_en: "Modal", type: "company", role: "company", primary: true, how_described: "嘉宾说它是跑智能体的云平台" },
      { name_zh: "智能体", name_en: "agent", type: "concept", role: "concept", primary: true, how_described: "需要沙箱来跑不受信代码的东西" },
      { name_zh: "Kubernetes", name_en: "Kubernetes", type: "concept", role: "concept", primary: false, how_described: "被说太难用" },
    ],
  };

  const build = (glmOut = GLM_OUT, meta = META) =>
    buildEntities({ meta, transcript: TRANSCRIPT, aliases: ALIASES, glmOut });

  it("人物(meta)+ 公司/概念(GLM)合成一份,人物在前", () => {
    const out = build();
    expect(out.entities.some((e) => e.name === "Akshat Bubna" && e.role === "guest")).toBe(true);
    expect(out.entities.some((e) => e.id === "modal")).toBe(true);
    expect(out.episode_id).toBe("ep-test");
    expect(out.tags).toEqual(["AI 基础设施", "智能体", "云计算"]);
  });

  it("★ GLM 编造的实体进 rejected,不进 entities(拦而不是静默丢)", () => {
    const out = build({
      ...GLM_OUT,
      entities: [...GLM_OUT.entities, { name_zh: "雪花", name_en: "Snowflake", type: "company", role: "company", primary: true, how_described: "编的" }],
    });
    expect(out.entities.some((e) => e.id === "snowflake")).toBe(false);
    expect(out.rejected.some((r) => r.name === "Snowflake" && r.reason)).toBe(true);
  });

  it("★ 真相源命中但转写稿无出处(只在集标题里)→ 也不收(建页要有集内出处)", () => {
    // Acme 只出现在 meta.title_en → checkProperNoun 判过(它有出处、不算编造),
    // 但集内 evidence 为空 → 「集里怎么说它」无从回溯 → 不该长成实体页。
    const out = build({
      ...GLM_OUT,
      entities: [{ name_zh: "Acme", name_en: "Acme", type: "company", role: "company", primary: true, how_described: "只在标题里" }],
    });
    expect(out.entities.some((e) => e.id === "acme")).toBe(false);
    expect(out.rejected.some((r) => r.name === "Acme")).toBe(true);
  });

  it("★ 每个收下的实体都带真 evidence(有出处才留)", () => {
    for (const e of build().entities) {
      expect(Array.isArray(e.evidence)).toBe(true);
      if (e.source === "glm") expect(e.evidence.length).toBeGreaterThan(0);
    }
  });

  it("★ GLM 给的 evidence/时间戳一律不采信(只认代码检索出来的)", () => {
    // GLM 塞了一条假证据:时间戳 999、原话是原文里没有的。装配后不得残留。
    const out = build({
      ...GLM_OUT,
      entities: [{ name_zh: "Modal", name_en: "Modal", type: "company", role: "company", primary: true, how_described: "x", evidence: [{ seg: 999, t: [999, 1000], quote: "Modal is the best platform ever" }] }],
    });
    const modal = out.entities.find((e) => e.id === "modal");
    expect(modal.evidence.every((x) => x.t[0] < 100)).toBe(true);
    expect(JSON.stringify(modal.evidence)).not.toContain("the best platform ever");
  });

  it("★ 2a 归一化后同一 id 只留一条(Modal / Modal Labs 两条候选 → 一个实体)", () => {
    const out = build({
      ...GLM_OUT,
      entities: [
        { name_zh: "Modal", name_en: "Modal", type: "company", role: "company", primary: true, how_described: "云平台" },
        { name_zh: "Modal Labs", name_en: "Modal Labs", type: "company", role: "company", primary: true, how_described: "同一家公司的另一种写法" },
      ],
    });
    expect(out.entities.filter((e) => e.id === "modal").length).toBe(1);
  });

  it("★ 别名表没登记的新概念 → 双语标题 + 中文文件名(裁决 #10),不靠别名表兜底", () => {
    // sandbox 在原文里真出现("needs a sandbox to run untrusted code")但别名表没登记 →
    // 收下它,并按 #10 生成「沙箱 (Sandbox)」/ file=沙箱。
    const out = build({
      ...GLM_OUT,
      entities: [{ name_zh: "沙箱", name_en: "Sandbox", type: "concept", role: "concept", primary: true, how_described: "跑不受信代码的隔离环境" }],
    });
    const sb = out.entities.find((e) => e.id === "sandbox");
    expect(sb).toBeTruthy();
    expect(sb.name).toBe("沙箱 (Sandbox)");
    expect(sb.file).toBe("沙箱");
    expect(sb.evidence.length).toBeGreaterThan(0);
  });

  it("★ 人名/公司名不套双语壳(裁决 #10:用原文)", () => {
    const out = build();
    expect(out.entities.find((e) => e.id === "modal").name).toBe("Modal");
    expect(out.entities.find((e) => e.name === "Akshat Bubna")).toBeTruthy();
  });

  it("★ #9 只有 primary 才建页;顺带提及的留着但标 primary=false", () => {
    const out = build();
    const k = out.entities.find((e) => e.id === "kubernetes");
    expect(k.primary).toBe(false);
    expect(out.entities.find((e) => e.id === "modal").primary).toBe(true);
  });

  it("★ 别名表已有的实体沿用其 id/name/file(不另起炉灶,跨集才聚得起来)", () => {
    const a = build().entities.find((e) => e.id === "agent");
    expect(a.name).toBe("智能体 (Agent)"); // 裁决 #10 双语标题
    expect(a.file).toBe("智能体");
  });
});

describe("validateExtract · 结构校验(重试循环要用)", () => {
  const ok = {
    tags: ["a", "b", "c"],
    entities: [{ name_zh: "Modal", name_en: "Modal", type: "company", role: "company", primary: true, how_described: "x" }],
  };

  it("合格 → 无错", () => {
    expect(validateExtract(ok)).toEqual([]);
  });

  it("★ tags 少于 3 / 多于 5 → 报错(Gherkin:AI 自由打 3-5 个)", () => {
    expect(validateExtract({ ...ok, tags: ["a", "b"] }).length).toBeGreaterThan(0);
    expect(validateExtract({ ...ok, tags: ["a", "b", "c", "d", "e", "f"] }).length).toBeGreaterThan(0);
  });

  it("★ 概念缺原文 name_en → 报错(中文侧回比不了,这是硬契约不是可选项)", () => {
    expect(validateExtract({ ...ok, entities: [{ name_zh: "沙箱", type: "concept", role: "concept", how_described: "x" }] }).length).toBeGreaterThan(0);
  });

  it("缺字段 → 报错", () => {
    expect(validateExtract({ ...ok, entities: [{ name_zh: "Modal" }] }).length).toBeGreaterThan(0);
    expect(validateExtract({ tags: ["a", "b", "c"] }).length).toBeGreaterThan(0);
    expect(validateExtract(null).length).toBeGreaterThan(0);
  });
});

describe("CLI 入口(isMain)· 本仓库路径含中文『视频』→ import.meta.url 会被百分号编码", () => {
  const script = resolve(dirname(fileURLToPath(import.meta.url)), "../scripts/extract-entities.mjs");
  it("★ 直接运行必须真进 main:喂不存在的目录 → 非 0 退出(GLM 021[4] 判 save 的回归锚)", () => {
    // 变异验证:把 isMain 换回 `import.meta.url === \`file://${process.argv[1]}\`` → 静默 exit 0,本条挂。
    const r = spawnSync(process.execPath, [script, "data/__ci_nonexistent__"], { encoding: "utf8" });
    expect(r.status).not.toBe(0); // 进了 main、读不到 meta.json 而报错 —— 不是静默空转
  });
});
