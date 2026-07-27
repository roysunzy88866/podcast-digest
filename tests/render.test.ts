// C3 Scenario 3 · 集页升级(类型化属性 + 关联区按角色分行 + 正文双链 + 金句 ^块ID)的真业务测试
//
// 纪律同前:只调被测函数,不重抄逻辑;每条能变异验证。
// 渲染是「集页唯一真相」(gate-all 重渲染逐字比对),所以这些纯函数必须稳定、确定。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import {
  blockId,
  groupByRole,
  renderRelations,
  linkPrimaryEntities,
  renderEpisode,
  renderAudioPlayer,
  renderEpisodeMeta,
  renderSidebarScript,
  renderHook,
  renderOrigRefs,
  renderOrigScript,
  renderTopBar,
  renderRelatedEpisodes,
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

// C5.1 · 标题/日期 fallback(Lenny's 集 title_zh 全空 → 集页 H1/frontmatter 曾渲染出 "undefined")
describe("renderEpisode · C5.1 标题/日期 fallback 链", () => {
  it("★★ title_zh 空 → H1/frontmatter 用 title_en,页面不出现 undefined", () => {
    const meta = { ...META, title_zh: undefined, title_en: "Netflix CPTO on AI", date: undefined };
    const page = renderEpisode(meta, DIGEST, ENTITIES);
    expect(page).toContain("# Netflix CPTO on AI");
    expect(page).not.toContain("undefined");
  });
  it("★ date 空 → 从 id 前缀取(YYYY-MM-DD)", () => {
    const meta = { ...META, id: "2026-07-19-lennys-x", date: undefined };
    const page = renderEpisode(meta, DIGEST, ENTITIES);
    expect(page).toContain("date: 2026-07-19");
  });
});

// ── C10 · 8 大类词表(episodeCategories:人工映射 > 生成端 categories > 未分类兜底)──
import { episodeCategories } from "../scripts/render.mjs";

describe("C10 episodeCategories · 词表解析优先级", () => {
  it("★ 人工映射表命中 → 用映射(纠偏覆盖层,优先于生成端)", () => {
    // 用真词表里的真实存量集(映射改了这条要跟着改——它就是抽查锚点)
    expect(episodeCategories({ id: "2026-07-08-latent-space-modal" }, { categories: ["AI 安全"] })).toEqual(["智能体"]);
  });
  it("★ 无人工映射 → 用生成端 categories(过词表,最多 2 个)", () => {
    expect(episodeCategories({ id: "no-such-ep" }, { categories: ["产品方法", "词表外的类", "AI 安全"] })).toEqual([
      "产品方法",
      "AI 安全",
    ]);
  });
  it("★ 都没有 → 落「未分类」(gate-all 词表层会拦,不静默上线)", () => {
    expect(episodeCategories({ id: "no-such-ep" }, null)).toEqual(["未分类"]);
  });
});

describe("C13d-1 · 播放条紧随标题(ADR 0015,用户 2026-07-26 明文确认)", () => {
  const meta = { id: "2026-07-19-x", title_zh: "标题", date: "2026-07-19", podcast: "P" } as any;

  it("★★ 不再有「🎧 本集中文精华音频」小标题(设计稿:播放条紧贴标题,不套小节)", () => {
    const out = renderAudioPlayer(meta);
    expect(out).not.toContain("🎧");
    expect(out).not.toMatch(/^##\s/m);
  });

  it("★★ 是一条撑满宽的播放条,且音频还能真播(保留原生 controls)", () => {
    const out = renderAudioPlayer(meta);
    expect(out).toMatch(/class="pd-play"/);
    expect(out).toContain("<audio controls");
    expect(out).toContain('src="/audio/2026-07-19-x.mp3"');
  });

  it("★ 音频缺失时的兜底话术保留(不能变成一条死掉的空条)", () => {
    expect(renderAudioPlayer(meta)).toContain("你的浏览器不支持音频播放");
  });

  it("★★ 播放条在集页里紧跟标题之后(中间不夹别的小节标题)", () => {
    const md = renderEpisode(
      { ...meta, guests: [], host: null },
      { tldr: "一句话。", digest_md: "## 小节\n\n正文。", quotes: [] } as any,
      null,
    );
    const iTitle = md.indexOf("# 标题");
    const iPlay = md.indexOf('<div class="pd-play"'); // 切到元素开头,不然会留下半截 <div
    const between = md.slice(iTitle, iPlay);
    expect(iPlay).toBeGreaterThan(iTitle);
    // ⚠️ 原先只断言「没有 ## 小节标题」→ 假绿:关联框是引用块不是标题,照样夹在中间。
    // 现口径(照设计稿 ep-*.html 的真实顺序:标题 → meta 行 → 播放条):
    // 中间**只允许那一行 meta**,别的一律不许 —— 关联框若再挤进来仍会被逮住。
    const 夹着的 = between.split("\n").slice(1).filter((l) => l.trim());
    expect(夹着的.length).toBeLessThanOrEqual(1);
    if (夹着的.length) expect(夹着的[0]).toMatch(/class="pd-mt"/);
  });
});

describe("C13d-1 · 单集页右栏改造 + ADR 0016 全局图谱入口摘除", () => {
  const scss = readFileSync(new URL("../assets/styles/custom.scss", import.meta.url), "utf8");

  it("★★ 全局图谱入口全站摘掉(ADR 0016),但一跳邻域图保留", () => {
    expect(scss).toMatch(/\.global-graph-icon \{ display: none/);
    // 不许把整个 graph 块也藏了 —— ADR 0016 明确「单集页保留一跳邻域」
    expect(scss).not.toMatch(/\n\.graph \{[^}]*display: none/);
  });

  it("★★ 集页用 :has(.pd-play) 定位,不需要给每页打标记", () => {
    expect(scss).toMatch(/body:has\(\.pd-play\)/);
  });

  it("★★ 集页按设计稿 .shell.det 排:中栏 700 + 右栏 282,左栏不显示", () => {
    expect(scss).toMatch(/grid-template-columns: minmax\(0, 700px\) 282px/);
    expect(scss).toMatch(/body:has\(\.pd-play\)[\s\S]*?\.left\.sidebar \{ display: none/);
  });

  it("★ 不另建右栏:复用 Quartz 自带的 toc(它自带滚动高亮)", () => {
    // C13d-2 起 backlinks 不再留在右栏(设计稿没有它、内容与「接着看」重复)→ 这里只守 toc
    expect(scss).toMatch(/\.toc-content a/);
    expect(scss).toMatch(/\.toc-content a\.in-view/);
  });
});

describe("C13d-1 · 集页 meta 行(设计稿 .mt:日期 · 播客 · 时长 · 大类)", () => {
  it("★★ 四样齐,大类可点进大类页", () => {
    const out = renderEpisodeMeta(
      { id: "2026-07-19-x", date: "2026-07-19", podcast: "Lenny's Podcast", duration_sec: 4325 } as any,
      { categories: ["组织与领导力"] } as any,
    );
    expect(out).toContain("2026-07-19");
    expect(out).toContain("Lenny's Podcast");
    expect(out).toContain("72:05");
    expect(out).toMatch(/<a class="mcat" href="\.\/tags\/[^"]+">组织与领导力<\/a>/);
  });

  it("★★ 缺字段不留孤立分隔点(与卡片降级同口径)", () => {
    const out = renderEpisodeMeta({ id: "x", date: "2026-01-01" } as any, null);
    expect(out).toContain("2026-01-01");
    expect(out).not.toMatch(/·\s*<\/div>/);
    expect(out).not.toMatch(/·\s*·/);
  });

  it("★ 什么都没有 → 整行不渲染", () => {
    expect(renderEpisodeMeta({ id: "" } as any, null)).toBe("");
  });
});

describe("C13d-1 · 关联框搬进右栏「这一集涉及」", () => {
  const scss = readFileSync(new URL("../assets/styles/custom.scss", import.meta.url), "utf8");
  const js = renderSidebarScript();

  it("★★★ 脚本里一个空行都没有(有空行 Markdown 会把整段脚本吃掉)", () => {
    expect(js).not.toMatch(/\n\s*\n/);
  });

  it("★★ 是「搬节点」不是重写一份(双链必须原样带过去,它是实体反链来源)", () => {
    expect(js).toContain("wrap.appendChild(box)");
    expect(js).not.toMatch(/innerHTML\s*=/);
  });

  it("★★ 靠 callout 标题「关联」定位,且搬过去就不再搬(幂等)", () => {
    expect(js).toContain("indexOf('关联')===0");
    expect(js).toContain("if(box.closest('.right.sidebar')) return;");
    expect(js).toContain("document.addEventListener('nav', all)"); // C13d-2:搬关联框/搬按钮/搬图谱一起重跑
  });

  it("★ 右栏里它被压成清淡列表(去掉 callout 的框与图标)", () => {
    expect(scss).toMatch(/\.pd-rel \.callout-title \{ display: none/);
    expect(scss).toMatch(/\.pd-rel blockquote\.callout \{[\s\S]*?border: 0/);
  });

  it("★ 集页里真挂上了这段脚本", () => {
    const md = renderEpisode(
      { id: "x", title_zh: "T", date: "2026-01-01", podcast: "P", guests: [], host: null } as any,
      { tldr: "一句话。", digest_md: "正文。", quotes: [] } as any,
      null,
    );
    expect(md).toContain("这一集涉及");
  });
});

describe("C13d-1 · 开篇钩子 + 金句区外观", () => {
  const scss = readFileSync(new URL("../assets/styles/custom.scss", import.meta.url), "utf8");

  it("★★ 钩子取第一条金句,与卡片同一条(从卡片点进来接得上)", () => {
    const out = renderHook({ quotes: [{ zh: "一句金句。", speaker: "某人", timestamp: "06:02" }] } as any, {} as any);
    expect(out).toContain("一句金句。");
    expect(out).toContain("某人 · 06:02");
  });

  it("★★ 引号由样式生成,内容里不写标点(与卡片同口径)", () => {
    const out = renderHook({ quotes: [{ zh: "一句金句。", speaker: "某人" }] } as any, {} as any);
    expect(out).not.toContain("“");
    expect(scss).toMatch(/\.pd-hook \.z:before \{ content: "\\201C"/);
  });

  it("★ 无金句 → 整块不渲染", () => {
    expect(renderHook({ quotes: [] } as any, {} as any)).toBe("");
  });

  it("★★★ 金句区只改外观不动结构(靠 p[id^=q] 命中,块 ID 与实体页金句墙不受影响)", () => {
    expect(scss).toMatch(/blockquote:has\(> p\[id\^="q"\]\)/);
  });

  it("★★ 正文里的【背景】引用块不会被金句样式误伤(它没有 q 开头的 id)", () => {
    const md = renderEpisode(
      { id: "x", title_zh: "T", date: "2026-01-01", podcast: "P", guests: [], host: null } as any,
      { tldr: "T。", digest_md: "> 【背景】说明。", quotes: [{ zh: "金句。", en: "Q.", speaker: "某人", timestamp: "01:00" }] } as any,
      null,
    );
    expect(md).toContain("^q1");           // 块 ID 还在
    expect(md).toContain("> 【背景】说明。"); // 背景块仍是普通引用块
  });
});

// ── C13d-1 Scenario「回原文是小圆点,不是方括号」(设计稿 .ts / .orig)──
// 正文里那些 `[03:53 Elizabeth Stone]` 是导读的出处标注,设计稿把它收成一个 ↩ 小圆点,
// 点开就地展开英文原话(数据来自 transcript.en.json,不跳走)。
describe("C13d-1 · 回原文 ↩ 小圆点(设计稿 .ts / .orig)", () => {
  const scss = readFileSync(new URL("../assets/styles/custom.scss", import.meta.url), "utf8");

  // 真转写稿的形状:段级 start/end/text(+ words/speaker,这里用不到)
  const TRANSCRIPT = [
    { start: 0.1, end: 60, text: "Cold open line." },
    { start: 233.0, end: 238.4, text: 'She said "storming" comes first & then forming.' },
    { start: 238.4, end: 244.0, text: "The whole industry sits in the middle of it right now." },
    { start: 244.0, end: 250.0, text: "And that is uncomfortable for everyone involved." },
    { start: 250.0, end: 256.0, text: "A fourth sentence that must be cut off." },
    { start: 600.0, end: 604.0, text: "A much later moment." },
  ];

  it("★★★ 方括号出处变成 ↩ 按钮,正文里不再留方括号", () => {
    const out = renderOrigRefs("组织会先经历动荡期 [03:53 Elizabeth Stone]。", TRANSCRIPT, {} as any);
    expect(out).not.toContain("[03:53 Elizabeth Stone]");
    expect(out).toContain('class="pd-ts"');
    expect(out).toContain('data-t="03:53"');
    expect(out).toContain('data-who="Elizabeth Stone"');
  });

  it("★★★ data-en 逐字取自转写稿里盖住那个时间点的段(不是编的)", () => {
    const out = renderOrigRefs("正文 [03:53 X]。", TRANSCRIPT, {} as any);
    expect(out).toContain("The whole industry sits in the middle of it right now.");
    expect(out).not.toContain("A much later moment.");   // 不许把别处的段拽过来
    expect(out).not.toContain("Cold open line.");
  });

  it("★★ 段太短就顺着往下接,但最多 3 段(一句残句看不懂,一整章又太长)", () => {
    const out = renderOrigRefs("正文 [03:53 X]。", TRANSCRIPT, {} as any);
    expect(out).toContain("And that is uncomfortable for everyone involved."); // 第 3 段接上了
    expect(out).not.toContain("A fourth sentence that must be cut off.");      // 第 4 段被截住
  });

  it("★★★ 英文原话里的引号/尖括号被转义,不许撑破属性", () => {
    const out = renderOrigRefs("正文 [03:53 X]。", TRANSCRIPT, {} as any);
    expect(out).toContain("&quot;storming&quot;");
    expect(out).toContain("&amp;");
    expect(/data-en="[^"]*"/.test(out)).toBe(true);
  });

  it("★★ 出处标 00:00(落在片头静音里)→ 取开场第一段,不是空手而归", () => {
    const out = renderOrigRefs("正文 [00:00 X]。", TRANSCRIPT, {} as any); // 第一段 0.1s 才开口
    expect(out).toContain('data-t="00:00"');
    expect(out).toContain("Cold open line.");
  });

  it("★★★ 没有转写稿 / 时间点找不到 → 原样保留方括号(不出空按钮)", () => {
    expect(renderOrigRefs("正文 [03:53 X]。", null, {} as any)).toContain("[03:53 X]");
    expect(renderOrigRefs("正文 [99:59 X]。", TRANSCRIPT, {} as any)).toContain("[99:59 X]");
    expect(renderOrigRefs("正文 [99:59 X]。", TRANSCRIPT, {} as any)).not.toContain("pd-ts");
  });

  it("★★ 出处里的说话人已被补成双链时也能收(data-who 取读文,不带双链语法)", () => {
    const out = renderOrigRefs("正文 [03:53 [[Lenny|Lenny]]]。", TRANSCRIPT, {} as any);
    expect(out).toContain('data-who="Lenny"');
    expect(out).not.toContain("[[Lenny|Lenny]]");
  });

  it("★★★ 无时间戳源(第三方稿)不产生按钮:那里根本没有时间点可回", () => {
    const md = renderEpisode(
      { id: "x", title_zh: "T", date: "2026-01-01", podcast: "P", guests: [], host: null, no_timestamps: true } as any,
      { tldr: "T。", digest_md: "正文 [03:53 某人]。", quotes: [] } as any,
      null,
      null,
      TRANSCRIPT,
    );
    expect(md).not.toContain('<button class="pd-ts"');
    expect(md).toContain("（某人）"); // 上游已换成全角括号,避开与 [[双链]] 的方括号打架
  });

  it("★★★ 补双链不许插进按钮属性里(否则 data-en 被 [[ ]] 撑烂)", () => {
    // 实体「动荡期」的正文首现处正好落在英文原话里 —— 补链必须跳过它,链到后面的正文出现处
    const md = linkPrimaryEntities(
      '正文一 <button class="pd-ts" data-en="the storming phase"></button>,后面才说 storming phase 的事。',
      { entities: [{ id: "s", type: "concept", role: "concept", name: "动荡期", file: "动荡期", sourceForm: "storming phase", primary: true }] } as any,
    );
    expect(md).toContain('data-en="the storming phase"');
    expect(md).toContain("[[动荡期|storming phase]] 的事");
  });

  it("★ 点开就地展开英文原话:脚本无空行、切换式、数据取 data-en", () => {
    const js = renderOrigScript();
    expect(js).not.toMatch(/\n\s*\n/);          // 有空行 Markdown 会把脚本吃掉
    expect(js).toContain("pd-orig");
    expect(js).toContain("dataset.en");
    expect(js).toContain("remove()");           // 再点一次收起
  });

  it("★★★ 集页两栏必须锁在桌面档(没断点的话手机上右栏占死 282px,正文被挤成一行一个字)", () => {
    // 实测逮到:375 视口下 #quartz-body 仍是 "37px 282px"。这条守住那个 @media 不被人拿掉。
    const twoCol = /@media \(min-width: 1024px\) \{\s*#quartz-body \{\s*grid-template-columns: minmax\(0, 700px\) 282px/;
    expect(scss).toMatch(twoCol);
  });

  it("★★ 设计稿的 .ts 外观(17px 暖色小圆点)与手机触摸热区 41×31 都在样式里", () => {
    expect(scss).toMatch(/\.pd-ts \{[\s\S]*?border-radius: 50%;[\s\S]*?width: 17px/);
    expect(scss).toMatch(/\.pd-ts:after[\s\S]*?left: -11px[\s\S]*?top: -6px/); // 横向 ±11 / 纵向 ±6 = 41×31
    expect(scss).toMatch(/\.pd-orig/);
  });

  it("★★★ 集页真的接上了这条链路(渲染整页就能看到按钮 + 脚本)", () => {
    const md = renderEpisode(
      { id: "x", title_zh: "T", date: "2026-01-01", podcast: "P", guests: [], host: null } as any,
      { tldr: "T。", digest_md: "正文 [03:53 Elizabeth Stone]。", quotes: [] } as any,
      null,
      null,
      TRANSCRIPT,
    );
    expect(md).toContain('data-t="03:53"');
    expect(md).toContain("pd-orig");
    expect(md).not.toContain("[03:53 Elizabeth Stone]");
  });
});

// ── C13d-2 单集页移植·补完(设计稿 ep-*.html 逐件比对补齐的 5 件)──
describe("C13d-2 · 顶栏 / TLDR 框 / 小节标签 / 接着看两栏 / 图谱挪底", () => {
  const scss = readFileSync(new URL("../assets/styles/custom.scss", import.meta.url), "utf8");
  const M = { id: "ep1", title_zh: "本集标题", podcast: "P", date: "2026-07-08", duration_sec: 600, source_url: "http://x" };
  const D = { tldr: "一句话摘要在此。", digest_md: "正文。", quotes: [{ zh: "金句。", en: "Q.", speaker: "某人", timestamp: "01:00" }] };

  it("★★★ 顶栏回来:站名 + 最新/最热 + 返回 + 搬按钮的空槽", () => {
    const t = renderTopBar(M as any);
    expect(t).toContain("跨国深谈");
    expect(t).toContain("最新");
    expect(t).toContain("最热");
    expect(t).toContain("返回");
    expect(t).toContain('class="pd-acts"'); // 搜索/深浅色由脚本搬进来,不重写一套(🔒 #9/#2)
  });

  it("★★ 手机端顶栏合并成「← 本集标题」(站名与导航让位)", () => {
    const t = renderTopBar(M as any);
    expect(t).toContain("本集标题");                       // 标题进了顶栏,供手机显示
    expect(scss).toMatch(/\.pd-mtitle[\s\S]*?display: none/); // 桌面藏
    expect(scss).toMatch(/@media \(max-width: 1023px\) \{[\s\S]*?\.pd-mtitle \{\s*display: flex/);
  });

  it("★★★ TLDR 是灰底框不是大标题", () => {
    const md = renderEpisode(M as any, D as any, null);
    expect(md).toContain('<div class="pd-tldr"><b>一句话</b>一句话摘要在此。</div>');
    expect(md).not.toContain("一句话 TLDR"); // 那个大标题不许再出现
    expect(scss).toMatch(/\.pd-tldr \{[\s\S]*?background/);
    expect(scss).toMatch(/\.pd-tldr b \{/);
  });

  it("★★★ 金句/接着看用灰色小标签,不用 h2(也就不会挤进右栏目录)", () => {
    const md = renderEpisode(M as any, D as any, null, [
      { epId: "ep2", epTitle: "另一集", epDate: "2026-06-01", score: 1, strongScore: 1,
        shared: { guests: [], companies: [], concepts: [{ id: "a", name: "智能体", file: "智能体", strong: true }] } },
    ] as any);
    expect(md).toContain('<div class="pd-sec">全部金句 <span>1 条(中英对照,已过机器闸门)</span></div>');
    expect(md).toContain('<div class="pd-sec">接着看</div>');
    expect(md).not.toContain("## 金句");
    expect(md).not.toContain("## 相关单集");
    expect(scss).toMatch(/\.pd-sec \{/);
  });

  it("★★★ 「接着看」是两栏卡片:顺着主大类挖下去 / 换个口味", () => {
    const rel = [
      { epId: "same1", epTitle: "同类一", epCats: ["组织与领导力"], score: 2, strongScore: 2, shared: { guests: [], companies: [], concepts: [{ id: "a", name: "智能体", file: "智能体", strong: true }] } },
      { epId: "diff1", epTitle: "异类一", epCats: ["智能体"], score: 1, strongScore: 0, shared: { guests: [{ id: "s", name: "swyx", file: "swyx", strong: false }], companies: [], concepts: [] } },
    ];
    const out = renderRelatedEpisodes(rel as any, ["组织与领导力"]);
    expect(out).toContain('<div class="pd-exit">');
    expect(out).toContain("顺着「组织与领导力」挖下去");
    expect(out).toContain("换个口味");
    expect(out).toContain("[[same1|同类一]]");
    expect(out).toContain("[[diff1|异类一]]");
    // US-7 P0 锁定:关联原因必须具体到实体名(设计稿卡片没画,但那是锁定验收条,不许悄悄丢)
    expect(out).toContain("同概念:智能体");
    expect(out).toContain("同嘉宾:swyx");
  });

  it("★★ 每栏最多 3 条;某栏空则整栏不渲染;都空则整块不出现", () => {
    const mk = (i: number) => ({ epId: `e${i}`, epTitle: `集${i}`, epCats: ["组织与领导力"], score: 1, strongScore: 1,
      shared: { guests: [], companies: [], concepts: [{ id: "a", name: "智能体", file: "智能体", strong: true }] } });
    const five = renderRelatedEpisodes([1, 2, 3, 4, 5].map(mk) as any, ["组织与领导力"]);
    expect((five.match(/\[\[e\d\|/g) || []).length).toBe(3); // 只出 3 条
    expect(five).not.toContain("换个口味");                   // 没有异类 → 那一栏整栏不渲染
    expect(renderRelatedEpisodes([] as any, ["组织与领导力"])).toBe("");
    expect(renderRelatedEpisodes(null as any, ["组织与领导力"])).toBe("");
  });

  it("★★★ 顶栏通栏,不被挤在正文那一列里(实测原来只有 694px,视口 1440)", () => {
    // 集页顶栏在 article 里(它是渲染出来的 markdown 的一部分)→ 必须 full-bleed 挣脱中栏宽度
    expect(scss).toMatch(/\.pd-top \{[\s\S]*?width: 100vw[\s\S]*?margin-left: -50vw/);
  });

  it("★★★ 右栏只剩目录 + 这一集涉及:Quartz 自带的「反向链接」块藏掉", () => {
    // 实测:它 178px 高,列的集跟「接着看」重复 —— 设计稿右栏没有这一块
    expect(scss).toMatch(/body:has\(\.pd-play\)[\s\S]*?\.right\.sidebar \.backlinks \{ display: none/);
  });

  it("★★★ 关系图谱挪到正文底部(ADR 0016:留一跳邻域,但不占右栏)", () => {
    const js = renderSidebarScript();
    expect(js).not.toMatch(/\n\s*\n/);
    expect(js).toContain("graph");
    expect(js).toContain("article"); // 搬进正文,不是删掉
    expect(scss).toMatch(/\.pd-graph/);
  });

  it("★★ 顶栏真挂在集页上,且搜索/深浅色是搬节点不是重写", () => {
    const md = renderEpisode(M as any, D as any, null);
    expect(md).toContain('class="pd-top"');
    const js = renderSidebarScript();
    expect(js).toContain(".pd-acts");
    expect(js).toContain("appendChild"); // 搬,不 innerHTML
    expect(js).not.toMatch(/innerHTML\s*=/);
  });
});
