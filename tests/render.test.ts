// C3 Scenario 3 · 集页升级(类型化属性 + 关联区按角色分行 + 正文双链 + 金句 ^块ID)的真业务测试
//
// 纪律同前:只调被测函数,不重抄逻辑;每条能变异验证。
// 渲染是「集页唯一真相」(gate-all 重渲染逐字比对),所以这些纯函数必须稳定、确定。
import { describe, it, expect } from "vitest";
import {
  blockId,
  groupByRole,
  renderRelations,
  linkPrimaryEntities,
  renderEpisode,
} from "../scripts/render.mjs";

const META = {
  id: "ep-modal",
  title_zh: "为什么 AI 基础设施必须为 Agent 进化",
  podcast: "Latent Space",
  date: "2026-07-08",
  duration_sec: 3462.8,
  source_url: "https://www.latent.space/p/modal2026",
  host: "swyx",
  guests: ["Akshat Bubna"],
  guest_titles: { "Akshat Bubna": "Modal CTO" },
  cohosts: ["Vibhu"],
};

// 集2 真实情况:主持人姓名无法确定 → host=null。渲染器绝不许打印 "null"/"undefined"。
const META_NO_HOST = { ...META, id: "ep-db", host: null, guests: ["Matei Zaharia"], cohosts: [], guest_titles: {} };

const ENTITIES = {
  episode_id: "ep-modal",
  tags: ["AI 基础设施", "智能体", "沙箱"],
  entities: [
    { id: "swyx", type: "person", role: "host", name: "swyx", file: "swyx", primary: true },
    { id: "akshat-bubna", type: "person", role: "guest", name: "Akshat Bubna", file: "Akshat Bubna", primary: true },
    { id: "vibhu", type: "person", role: "cohost", name: "Vibhu", file: "Vibhu", primary: true },
    { id: "modal", type: "company", role: "company", name: "Modal", file: "Modal", primary: true, how_described: "云平台" },
    { id: "agent", type: "concept", role: "concept", name: "智能体 (agent)", file: "智能体", primary: true, how_described: "自主 AI 系统" },
    { id: "sandbox", type: "concept", role: "concept", name: "沙箱 (sandbox)", file: "沙箱", primary: true, how_described: "隔离环境" },
    // 非 primary:不建页 → 正文/关联区都不该链它(#9:死链=没页可链)
    { id: "sidecar", type: "concept", role: "concept", name: "边车 (sidecar)", file: "边车", primary: false, how_described: "" },
  ],
};

const DIGEST = {
  tldr: "Modal 为智能体重构了云基础设施。",
  digest_md: "## 主线\n\nModal 认为智能体需要沙箱来跑不受信代码。\n\n> 【背景】沙箱这个词最早来自安全领域。\n\n沙箱之外,还有边车模式。",
  quotes: [
    { zh: "为什么要让智能体读几百个配置文件", en: "why make an agent read configs", timestamp: "05:06", speaker: "Akshat Bubna" },
    { zh: "推理是我们最大的用例", en: "inference is our biggest use case", timestamp: "12:30", speaker: "Akshat Bubna" },
  ],
};

describe("blockId · 稳定、确定(实体页靠它精确嵌入金句)", () => {
  it("按序号生成,1-based", () => {
    expect(blockId(0)).toBe("q1");
    expect(blockId(1)).toBe("q2");
  });
  it("★ 只含字母数字(Obsidian 块 ID 语法约束,别混入会被 Quartz 拒的字符)", () => {
    expect(blockId(9)).toMatch(/^[a-z0-9]+$/);
  });
});

describe("groupByRole · 只收 primary、按角色分组(US-6:不是一排无差别标签)", () => {
  const g = groupByRole(ENTITIES.entities);
  it("人物拆成 host/guests/cohosts", () => {
    expect(g.host.map((x) => x.name)).toEqual(["swyx"]);
    expect(g.guests.map((x) => x.name)).toEqual(["Akshat Bubna"]);
    expect(g.cohosts.map((x) => x.name)).toEqual(["Vibhu"]);
  });
  it("公司/概念各成一组", () => {
    expect(g.companies.map((x) => x.name)).toEqual(["Modal"]);
    expect(g.concepts.map((x) => x.file)).toEqual(["智能体", "沙箱"]);
  });
  it("★ 非 primary 实体一个都不进(边车 primary=false → 不出现)", () => {
    const all = [...g.host, ...g.guests, ...g.cohosts, ...g.companies, ...g.concepts];
    expect(all.some((x) => x.id === "sidecar")).toBe(false);
  });
});

describe("renderRelations · 关联区按角色分行,链到实体页", () => {
  const md = renderRelations(ENTITIES.entities, META);
  it("每个角色一行,值是 [[双链]]", () => {
    expect(md).toContain("[[Akshat Bubna]]");
    expect(md).toContain("[[swyx]]");
    expect(md).toContain("[[Modal]]");
    expect(md).toContain("[[智能体]]"); // 链的是 file 名,不是显示名
  });
  it("★ 角色分行、可辨(嘉宾/主持/公司/概念各有标签)", () => {
    expect(md).toMatch(/嘉宾/);
    expect(md).toMatch(/主持/);
    expect(md).toMatch(/概念/);
  });
  it("★ 链的是 file 不是 name(实体页文件名=沙箱,不是「沙箱 (sandbox)」)", () => {
    expect(md).toContain("[[沙箱]]");
    expect(md).not.toContain("[[沙箱 (sandbox)]]");
  });
  it("★ 非 primary(边车)不链(否则死链)", () => {
    expect(md).not.toContain("[[边车]]");
  });
});

describe("linkPrimaryEntities · 正文首现处补双链,保留原读文", () => {
  const linked = linkPrimaryEntities(DIGEST.digest_md, ENTITIES.entities);
  it("Modal 首现 → [[Modal|Modal]]", () => {
    expect(linked).toContain("[[Modal|Modal]]");
  });
  it("★ 概念用 file 名链、显示原词(智能体 → [[智能体|智能体]])", () => {
    expect(linked).toContain("[[智能体|智能体]]");
  });
  it("★ 只链首现,不重复链(第二次出现的沙箱不再包)", () => {
    // digest_md 里「沙箱」出现 3 次(正文2+背景1);只有正文首现被链
    expect(linked.match(/\[\[沙箱\|沙箱\]\]/g)?.length).toBe(1);
  });
  it("★ 【背景】块内不补链(它是 AI 补充,不是本集实体讨论)", () => {
    const bgLine = linked.split("\n").find((l) => l.includes("【背景】"));
    expect(bgLine).toBeTruthy();
    expect(bgLine).not.toContain("[[沙箱"); // 背景行里的「沙箱」不被链
  });
  it("★ 非 primary(边车)正文不补链", () => {
    expect(linked).not.toContain("[[边车");
  });
  it("★ 标题行不补链(链进标题会毁锚点),但标题后的正文首现仍链", () => {
    const withHeading = linkPrimaryEntities("## Modal 的架构\n\nModal 很强。", ENTITIES.entities);
    expect(withHeading.split("\n")[0]).toBe("## Modal 的架构"); // 标题原样、不动
    expect(withHeading).toContain("[[Modal|Modal]] 很强"); // 正文行的首现仍被链
  });
  it("★ 变异防护:不破坏原文其余字符(去掉双链标记后 == 原文)", () => {
    const stripped = linked.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2");
    expect(stripped).toBe(DIGEST.digest_md);
  });
  it("★ ASCII 名走词边界:'AI' 不命中 'AIM' 词中(GLM 001[2])", () => {
    const ents = [{ id: "ai", type: "concept", role: "concept", name: "AI", file: "AI", primary: true }];
    expect(linkPrimaryEntities("AIM 是个缩写", ents)).toBe("AIM 是个缩写"); // 不误链
    expect(linkPrimaryEntities("用 AI 做事", ents)).toContain("[[AI|AI]]"); // 独立词仍链
  });
  it("★ 中文名仍按子串(无词边界概念):沙箱 命中「沙箱化」", () => {
    const ents = [{ id: "sandbox", type: "concept", role: "concept", name: "沙箱 (sandbox)", file: "沙箱", primary: true }];
    expect(linkPrimaryEntities("沙箱化改造", ents)).toContain("[[沙箱|沙箱]]");
  });
  // ── 补链嵌套(backfill=40 弄脏 ~11 集的根因):短名匹配进已插入的 [[…]] 内部 → 畸形双链 ──
  it("★ 短名是长名前缀:不套进长名的链接里(防 [[[[智能体]])", () => {
    const ents = [
      { id: "vibe-coding", type: "concept", role: "concept", name: "智能体编码", file: "智能体编码", primary: true },
      { id: "agent", type: "concept", role: "concept", name: "智能体", file: "智能体", primary: true },
    ];
    const out = linkPrimaryEntities("本集讨论了智能体编码的未来。", ents);
    expect(out).not.toContain("[[[["); // 不许出现嵌套开头
    expect(out).toContain("[[智能体编码|智能体编码]]"); // 长名整体被链
  });
  it("★ 短名是长名后缀:不套进长名的链接里(防 [[编码[[智能体]])", () => {
    const ents = [
      { id: "code-agent", type: "concept", role: "concept", name: "编码智能体", file: "编码智能体", primary: true },
      { id: "agent", type: "concept", role: "concept", name: "智能体", file: "智能体", primary: true },
    ];
    const out = linkPrimaryEntities("我们在做编码智能体。", ents);
    expect(out).not.toMatch(/\[\[[^\]|]*\[\[/); // 链接名里不许再嵌 [[
    expect(out).toContain("[[编码智能体|编码智能体]]");
  });
  it("★ 短名在别处独立出现时,仍在链接外正常补链", () => {
    const ents = [
      { id: "code-agent", type: "concept", role: "concept", name: "编码智能体", file: "编码智能体", primary: true },
      { id: "agent", type: "concept", role: "concept", name: "智能体", file: "智能体", primary: true },
    ];
    // 「编码智能体」先被整体链;后文独立的「智能体」应在链接之外被单独链
    const out = linkPrimaryEntities("先说编码智能体,再单说智能体本身。", ents);
    expect(out).toContain("[[编码智能体|编码智能体]]");
    expect(out).toContain("再单说[[智能体|智能体]]本身");
    expect(out).not.toMatch(/\[\[[^\]|]*\[\[/);
  });
});

describe("renderEpisode · 整页(host=null 不崩、金句带 ^块ID)", () => {
  it("★ host=null 不打印 'null'/'undefined'(集2 真实情况,wip 待修 bug)", () => {
    const page = renderEpisode(META_NO_HOST, DIGEST, ENTITIES);
    expect(page).not.toMatch(/主持[：:]\s*null/);
    expect(page).not.toContain("undefined");
    expect(page).not.toContain("host: null");
  });
  it("★ 有 host 时正常渲染主持", () => {
    const page = renderEpisode(META, DIGEST, ENTITIES);
    expect(page).toContain("swyx");
  });
  it("★ 每条金句挂 ^块ID(实体页要靠它嵌入)", () => {
    const page = renderEpisode(META, DIGEST, ENTITIES);
    expect(page).toContain("^q1");
    expect(page).toContain("^q2");
  });
  it("★ 顶部有关联区 + frontmatter 有类型化属性", () => {
    const page = renderEpisode(META, DIGEST, ENTITIES);
    expect(page).toContain("[[Modal]]"); // 关联区
    expect(page).toMatch(/concepts:/); // frontmatter 类型化
  });
  it("★ 无 entities 时退化为 C2 版式(向后兼容,不崩)", () => {
    const page = renderEpisode(META, DIGEST, null);
    expect(page).toContain("Modal");
    expect(page).not.toContain("undefined");
  });
  it("★ 标题含冒号 → frontmatter 加引号,不破 YAML(GLM 001[1])", () => {
    const page = renderEpisode({ ...META, title_zh: "深度解析: AI 的未来" }, DIGEST, ENTITIES);
    expect(page).toContain('title: "深度解析: AI 的未来"'); // 加引号了
    // 安全标题不加引号(不无谓改动现有产物)
    expect(renderEpisode(META, DIGEST, ENTITIES)).toContain(`title: ${META.title_zh}`);
  });
});
