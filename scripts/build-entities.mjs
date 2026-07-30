#!/usr/bin/env node
// C3 Scenario 4 · 实体页聚合(自建,ADR 0008)→ samples/entities/<file>.md
//
// **生成期聚合**(不依赖任何第三方插件做运行期查询):读所有集的 entities.json + digest,
// 按 id 跨集归并 → 每个「在任一集里是 primary」的实体出一页(建页门槛 #9)。
// 一套模板三种实体:
//   · 头部:类型 + 又名 + 数字(出现 N 集 · 金句 M 条 · 关联 K 个)
//   · 集里怎么说它(#7):每集的 how_described + 回原集(带时间戳);没有则整栏不显示
//   · 金句墙(🔒 第 24 轮):人物页=他本人说的;公司/概念页=提到它的金句。![[集#^块]] 嵌入(P1 已验)
//   · 出现在这些集:列所有相关集 + 角色(嘉宾/被提及)
//   · 关联实体:常一起出现的、且**有页的**实体(避免死链)
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, realpathSync, rmSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { norm } from "./gate.mjs";
import { blockId, episodeCategories, renderSiteTopBar, renderSidebarScript } from "./render.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const TYPE_CN = { person: "人物", company: "公司", concept: "概念" };
const mmss = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

/** 词边界匹配:needle(归一化词序列)作为连续子序列出现在 hay(归一化词序列)里 */
function containsSeq(hay, needle) {
  if (!needle.length) return false;
  if (needle.length === 1) return hay.includes(needle[0]);
  for (let i = 0; i + needle.length <= hay.length; i++) {
    let ok = true;
    for (let j = 0; j < needle.length; j++) if (hay[i + j] !== needle[j]) { ok = false; break; }
    if (ok) return true;
  }
  return false;
}

/**
 * 跨集按 id 归并。episodes = [{meta, digest, entities}]。aliasById 供又名/金句召回。
 * 只产出「在任一集里是 primary」的实体(建页门槛 #9)。
 */
export function aggregate(episodes, aliasById = new Map()) {
  const byId = new Map();
  for (const ep of episodes) {
    const meta = ep.meta, ents = ep.entities?.entities ?? [];
    for (const e of ents) {
      if (!byId.has(e.id)) {
        byId.set(e.id, { id: e.id, type: e.type, name: e.name, file: e.file, role: e.role, appearances: [] });
      }
      const agg = byId.get(e.id);
      // 显示名/文件名:别名表优先(跨集统一),否则用首次见到的
      const alias = aliasById.get(e.id);
      if (alias) { agg.name = alias.name; agg.file = alias.file; }
      agg.appearances.push({
        epId: meta.id,
        epTitle: meta.title_zh ?? meta.title_en ?? meta.id, // C5.1 fallback 链
        epDate: meta.date,
        epPodcast: meta.podcast ?? "",
        role: e.role,
        primary: !!e.primary,
        how_described: e.how_described ?? "",
        firstTs: e.evidence?.[0]?.t?.[0] ?? null,
      });
    }
  }
  // 建页门槛:任一集 primary
  return [...byId.values()].filter((a) => a.appearances.some((x) => x.primary));
}

/**
 * 变体 id → 权威 id(别名表 `merge` 字段驱动)。GLM 常给同一概念派不同 id
 * (单复数/词性:agent/agents/agentic),它们各自却落同一个中文 file → 生成期
 * `out.set(file,…)` 后写覆盖先写、整页丢失(Scenario 2c,实测 8 组冲突吞 9 页)。
 * **归并策略在人工维护的别名表里、代码只执行**:只有 `merge` 明确点名的才并,
 * 语义可能不同的(soul=配置义 vs 一个模型)不点名 → 不并,留人工另处理。
 */
export function buildCanonMap(aliasById) {
  const canon = new Map();
  for (const a of aliasById.values()) for (const v of a.merge ?? []) canon.set(v, a.id);
  return canon;
}

/**
 * 从 data/aliases.json 对象建 **merge-aware** 的 aliasById(供聚合/归一/金句召回)。
 * = entities[](专名/误写表)+ `_merge`[](变体归并组,当权威 entry:name/file/forms 供页面与
 * 金句召回,variants→merge 供 id 归一)。**`_merge` 刻意不放进 entities[]**:那些是常用译名词
 * (评估/剧本),若登记成 entities 的中文 form 会被 gate-facts D17 当专名误判 —— gate-facts 只读
 * entities[],放 `_merge` 天然隔离(见 aliases.json `_merge_doc`)。
 */
export function mergeAwareAliasById(aliases) {
  const m = new Map((aliases.entities ?? []).map((e) => [e.id, e]));
  for (const g of aliases._merge ?? [])
    m.set(g.id, { id: g.id, type: g.type ?? "concept", name: g.name, file: g.file, forms: g.forms ?? [], merge: g.variants ?? [] });
  return m;
}

/**
 * 把每集 entities 里的变体 id 归一到权威 id(变体才改写 id/name/file),让跨集聚合真正聚起来。
 * 同集内若归一后**两个实体撞成同一最终 id**(变体+变体 如 agent+agents,或**权威+变体** 如
 * agent 本身+agents)→ 合并成一条:primary 取或、how_described 取更长、evidence 合并。
 * 按「最终 id」(变体→权威;其余=自身)去重,故权威+变体也能并 —— 早期只按变体去重会把
 * 权威那条漏在外、同集列两次(GLM 20260731-001[3] 探查时发现,实测现库未触发,防未来数据)。
 * 合并走**拷贝后替换**(`{...prev}`),绝不原地变异输入对象;别名表零 merge 时原样返回。
 */
export function canonicalizeEpisodes(episodes, canonById, aliasById = new Map()) {
  if (!canonById.size) return episodes;
  return episodes.map((ep) => {
    const out = [];
    const at = new Map(); // 最终 id → out 下标
    for (const e of ep.entities?.entities ?? []) {
      const cid = canonById.get(e.id); // 命中=变体;未命中=权威自身或无关实体
      const fid = cid ?? e.id; // 最终 id
      const c = cid ? { ...e, id: cid, name: aliasById.get(cid)?.name ?? e.name, file: aliasById.get(cid)?.file ?? e.file } : e;
      if (at.has(fid)) {
        const prev = out[at.get(fid)];
        const merged = { ...prev, id: fid }; // 拷贝再改,prev 可能是输入原对象(权威先到),绝不原地变异
        merged.primary = !!prev.primary || !!c.primary;
        if ((c.how_described?.length ?? 0) > (prev.how_described?.length ?? 0)) merged.how_described = c.how_described;
        merged.evidence = [...(prev.evidence ?? []), ...(c.evidence ?? [])];
        out[at.get(fid)] = merged;
      } else {
        at.set(fid, out.length);
        out.push(c);
      }
    }
    return { ...ep, entities: { ...(ep.entities ?? {}), entities: out } };
  });
}

/**
 * 实体的金句(🔒 第 24 轮):
 *   · 人物页 = 该人本人说的金句(speaker == name)
 *   · 公司/概念页 = 提到它的金句(entity 任一书写形式词边界命中 quote.en)
 * 返回 [{epId, block, q}](block = ^块ID,供 ![[epId#^block]] 嵌入)。
 */
export function quotesFor(agg, episodes, aliasById = new Map()) {
  const out = [];
  const alias = aliasById.get(agg.id);
  const forms = (alias ? [alias.name, ...(alias.forms ?? [])] : [agg.name, agg.file])
    .map((f) => norm(f))
    .filter((ws) => ws.length);
  for (const ep of episodes) {
    const quotes = ep.digest?.quotes ?? [];
    for (let i = 0; i < quotes.length; i++) {
      const q = quotes[i];
      let hit = false;
      if (agg.type === "person") hit = q.speaker === agg.name;
      else hit = forms.some((fw) => containsSeq(norm(q.en), fw));
      if (hit) out.push({ epId: ep.meta.id, block: blockId(i), q });
    }
  }
  return out;
}

/**
 * 常一起出现的实体 id(同集共现计数),只保留**有页的**(pageIds),排除自己。
 * 排序:①共现次数降序(跨集共现的排前)②**同次数内按集 round-robin 交错**——
 * 否则平票按加载序,先加载的那一集会独占 top-N,把另一集的共现实体(哪怕很相关)全挤掉
 * (独立审计 2026-07-18 实测:智能体的关联全是 Databricks 实体,Modal 的 Akshat 等 18 个被隐去)。
 */
export function related(agg, episodes, pageIds) {
  const info = new Map(); // id -> { count, eps:Set }
  const myEps = new Set(agg.appearances.map((a) => a.epId));
  for (const ep of episodes) {
    if (!myEps.has(ep.meta.id)) continue;
    for (const e of ep.entities?.entities ?? []) {
      if (e.id === agg.id || !pageIds.has(e.id)) continue;
      if (!info.has(e.id)) info.set(e.id, { count: 0, eps: new Set() });
      const x = info.get(e.id);
      x.count++;
      x.eps.add(ep.meta.id);
    }
  }
  // 组内 round-robin:给每条按「(次数, 代表集)」桶内序号,序号小的先 → 各集第 1 个交错、再第 2 个
  const perBucket = new Map();
  const items = [...info.entries()].map(([id, x]) => {
    const ep = [...x.eps].sort()[0];
    const key = `${x.count}|${ep}`;
    const idx = perBucket.get(key) ?? 0;
    perBucket.set(key, idx + 1);
    return { id, count: x.count, ep, idx };
  });
  items.sort((a, b) => b.count - a.count || a.idx - b.idx || a.ep.localeCompare(b.ep));
  return items.map((i) => i.id);
}

/**
 * C6 · 集↔集「相关单集」(US-7):按共享实体 id 算相关,分组注原因。
 * **排除 host**:host 是节目结构性常驻主持(按角色约定每集都在),「同主持」= 同一个节目,
 * 是噪音不是相关信号(US-7 明写「同嘉宾/同概念/同公司」,不含主持)。以目标集里该实体的类型分组。
 * **泛噪闸(依独立审计 2026-07-18)**:共享实体必须**至少一集是 primary(真讨论过)**才算相关信号——
 * 两集都只「一句带过」(都非 primary)的共享概念不算,否则语料变大后到处是弱/误关联。
 * `strong` = 两集都 primary(都主讨论);排序/展示 strong 在前,strongScore 主导排名。
 * 返回 [{ epId, epTitle, epDate, shared:{guests,companies,concepts}, score, strongScore }],
 * 每桶元素 = { id, name, file, strong }。minShared 挡泛噪(Scenario 1b)。
 * ⚠️ 未做(记 tech-debt,C5 灌 50 集再调):cohost 排除、按出现频率的 ubiquity 泛噪过滤。
 */
export function relatedEpisodes(targetEpId, episodes, { minShared = 1 } = {}) {
  const target = episodes.find((ep) => ep.meta?.id === targetEpId);
  if (!target) return [];
  // 目标集「可作相关信号」的实体(排除 host):id -> {id,name,file,type,primaryInTarget}
  const signal = new Map();
  for (const e of target.entities?.entities ?? []) {
    if (e.type === "person" && e.role === "host") continue; // host 结构性噪音,排除
    signal.set(e.id, { id: e.id, name: e.name, file: e.file, type: e.type, primaryInTarget: !!e.primary });
  }
  const out = [];
  for (const ep of episodes) {
    if (ep.meta?.id === targetEpId) continue;
    const shared = { guests: [], companies: [], concepts: [] };
    const seen = new Set();
    for (const e of ep.entities?.entities ?? []) {
      if (!signal.has(e.id) || seen.has(e.id)) continue;
      seen.add(e.id);
      const s = signal.get(e.id);
      if (!s.primaryInTarget && !e.primary) continue; // 两集都非 primary(都一句带过)→ 噪音,不算
      const strong = s.primaryInTarget && !!e.primary; // 两集都主讨论 = 深度相关
      const bucket = s.type === "person" ? "guests" : s.type === "company" ? "companies" : "concepts";
      shared[bucket].push({ id: s.id, name: s.name, file: s.file, strong });
    }
    // 桶内:strong(两集都主讨论)在前,再按 file 名稳定(审计:原按对方数组序无语义)
    for (const k of ["guests", "companies", "concepts"]) {
      shared[k].sort((a, b) => b.strong - a.strong || String(a.file).localeCompare(String(b.file)));
    }
    const items = [...shared.guests, ...shared.companies, ...shared.concepts];
    const score = items.length; // 合格共享数(已排除 primary-in-neither 噪音)
    const strongScore = items.filter((x) => x.strong).length; // 两集都主讨论的数
    if (score >= minShared) {
      // epCats = 那一集的大类,供集页「接着看」分成「顺着本类挖下去 / 换个口味」两栏(C13d-2)
      out.push({ epId: ep.meta.id, epTitle: ep.meta.title_zh ?? ep.meta.title_en ?? ep.meta.id, epDate: ep.meta.date, epCats: episodeCategories(ep.meta, ep.entities), shared, score, strongScore });
    }
  }
  // 排名:强共享多的排前(审计:强主题应主导)→ 合格共享多 → 日期升序 → id 稳定
  out.sort(
    (a, b) =>
      b.strongScore - a.strongScore ||
      b.score - a.score ||
      String(a.epDate).localeCompare(String(b.epDate)) ||
      String(a.epId).localeCompare(String(b.epId)),
  );
  return out;
}

/**
 * C13j 补遗 · 实体的「本站收录集数」:phero 的「本站收录 N 集」与关联药丸徽标「N 集」
 * 共用这一个口径(Gherkin 明写不造第二套)。
 */
export const epCount = (agg) => new Set(agg.appearances.map((a) => a.epId)).size;

/**
 * C13j 补遗 ② · 「④ 也在聊「X」的人」的共享上下文(全量算一次,别按人重算 —— episodeCategories
 * 对未映射集会响亮警告,按人重算会把警告放大几十倍)。
 * 常驻主持 = 同一播客 ≥2 集担任 host/cohost(结构性常驻,与 relatedEpisodes 的 host 噪音同理)。
 * ⚠️ 不能按单集 role=host 一刀切:真数据里单人访谈的嘉宾常被标成 host(Boris Cherny 实例),
 *    按角色硬排会把最该出现的人排掉;按「同播客 ≥2 集」才是「结构性常驻」的本义。
 */
export function buildPeersContext(episodes, aggs) {
  const persons = aggs.filter((a) => a.type === "person");
  const catOf = new Map(episodes.map((ep) => [ep.meta.id, episodeCategories(ep.meta, ep.entities)]));
  // 同集平票时照该集 entities 序(设计稿实证:Raphael 在 Peter 前、Matei 在 Reynold 前 = 数据序)
  const epPersonOrder = new Map(
    episodes.map((ep) => [ep.meta.id, (ep.entities?.entities ?? []).filter((e) => e.type === "person").map((e) => e.id)]),
  );
  const structural = new Map(); // personId → Set<podcast>(他是这些播客的常驻主持)
  for (const p of persons) {
    const byPod = new Map();
    for (const a of p.appearances) {
      if (a.role !== "host" && a.role !== "cohost") continue;
      if (!byPod.has(a.epPodcast)) byPod.set(a.epPodcast, new Set());
      byPod.get(a.epPodcast).add(a.epId);
    }
    const pods = new Set([...byPod.entries()].filter(([, s]) => s.size >= 2).map(([k]) => k));
    if (pods.size) structural.set(p.id, pods);
  }
  return { persons, catOf, epPersonOrder, structural };
}

/** 资格出场 = primary 且不是以「该播客常驻主持」身份出的场(仅被提及/串场主持都不算「聊过」) */
function qualifyingAppearances(agg, ctx) {
  return agg.appearances.filter(
    (a) => a.primary && !((a.role === "host" || a.role === "cohost") && ctx.structural.get(agg.id)?.has(a.epPodcast)),
  );
}

/**
 * C13j 补遗 ② · 某人物的「④ 也在聊「X」的人」(设计稿 person-*.html 八样例逆向):
 *   X = 最近一次资格出场那集的主类(episodeCategories 首位;matt-fredrikson 样例证伪
 *       「X=药丸里全站集数最大的概念」—— 他药丸最大是智能体 22 集,节名却是 AI 安全 = 他集子的大类);
 *   人选 = 其它有页人物,资格出场某集的大类(两槽任一)含 X;
 *   排序 = 资格出场集日期降序 → 同日按集 id → 同集按该集 entities 序(设计稿六人序完全复现)。
 * 返回 { topic, peers } 或 null(无资格出场/无大类)。空 peers 由调用方决定不渲染。
 */
export function sameTopicPeers(agg, ctx) {
  if (agg.type !== "person") return null;
  const newest = (list) =>
    [...list].sort((x, y) => String(y.epDate).localeCompare(String(x.epDate)) || String(x.epId).localeCompare(String(y.epId)))[0];
  const mine = qualifyingAppearances(agg, ctx);
  if (!mine.length) return null;
  const topic = (ctx.catOf.get(newest(mine).epId) ?? []).filter((c) => c && c !== "未分类")[0];
  if (!topic) return null;
  const peers = [];
  for (const p of ctx.persons) {
    if (p.id === agg.id) continue;
    const qs = qualifyingAppearances(p, ctx).filter((a) => (ctx.catOf.get(a.epId) ?? []).includes(topic));
    if (!qs.length) continue;
    const a = newest(qs);
    peers.push({ id: p.id, file: p.file, name: p.name, epDate: a.epDate, epId: a.epId, idx: (ctx.epPersonOrder.get(a.epId) ?? []).indexOf(p.id) });
  }
  peers.sort(
    (x, y) => String(y.epDate).localeCompare(String(x.epDate)) || String(x.epId).localeCompare(String(y.epId)) || x.idx - y.idx,
  );
  return { topic, peers };
}

/** 一个实体 → 一页 markdown。pageById: id→{file,name} 供关联区链名。 */
/** HTML 属性/文本转义(实体页 phero 是原样 HTML) */
const escAttr = (x) =>
  String(x ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

export function renderEntityPage(agg, quotes, relatedIds, pageById, aliasById = new Map(), extras = {}) {
  const alias = aliasById.get(agg.id);
  const aliasNames = alias ? (alias.forms ?? []).filter((f) => f !== agg.name && f !== agg.file) : [];
  const roleCn = (r) => ({ host: "主持", guest: "嘉宾", cohost: "联合主持", company: "被讨论公司", concept: "概念" })[r] ?? r;

  const fm = [
    "---",
    `title: ${agg.name}`,
    `entity_type: ${TYPE_CN[agg.type] ?? agg.type}`,
    "type: entity",
    // C10(用户拍板):实体不进图谱/搜索/列表(unlisted 约定,graph/search/explorer 都认),
    // 页面照常产出、双链直达照常可点,实体页自身的回链列表不受影响。
    "unlisted: true",
    ...(aliasNames.length ? [`aliases: [${aliasNames.map((a) => `"${a}"`).join(", ")}]`] : []),
    "---",
  ].join("\n");

  const nEp = epCount(agg); // 与关联药丸徽标同一个口径(C13j 补遗)

  // 集里怎么说它(#7):只列有 how_described 的集;没有则整栏不显示
  const described = agg.appearances.filter((a) => a.how_described);
  const descSection = described.length
    ? `## 集里怎么说它\n\n${described
        .map((a) => `- **[[${a.epId}|《${a.epTitle}》]]**${a.firstTs != null ? `(${mmss(a.firstTs)}起)` : ""}:${a.how_described}`)
        .join("\n")}`
    : "";

  // 金句墙:块嵌入(P1 验过,自带「回原集」);空则整节不显示(4b)
  const quoteBody = quotes.map((x) => `![[${x.epId}#^${x.block}]]`).join("\n\n");

  // 出现在这些集:每集 + 角色
  const epBody = agg.appearances
    .map((a) => `- [[${a.epId}|《${a.epTitle}》]] — 作为${roleCn(a.role)}${a.primary ? "" : "(提及)"}`)
    .join("\n");

  // 关联实体:有页的,链 file 名(外观由 CSS 做成设计稿的药丸,结构仍是双链)
  const relBody = relatedIds.map((id) => `[[${pageById.get(id)?.file ?? id}]]`).join(" · ");

  // ── C13j 照设计稿 person-*.html ──
  // ⚠️ 只有**不含双链/块嵌入**的部分才写成原样 HTML(phero 头部)。金句墙 ![[..]]、集列表 [[..]]、
  //    关联 [[..]] 必须留在 markdown 里 —— 用 HTML 包住它们,Quartz 就不再解析,双链与块嵌入当场失效
  //    (集页「关联框」踩过这个坑,那边最后只能渲染完再搬节点)。这里的做法是:结构留 markdown,外观交 CSS。
  const roleLabel = (() => {
    if (agg.type !== "person") return TYPE_CN[agg.type] ?? agg.type;
    const first = agg.appearances.find((a) => a.primary) ?? agg.appearances[0];
    const r = roleCn(first?.role);
    return [first?.epPodcast, r].filter(Boolean).join(" ");
  })();
  // 按**码点**切,不按 UTF-16 单元 —— slice(0,2) 会把 emoji/生僻字的代理对劈成乱码
  const initials = [...String(agg.name).trim()].slice(0, 2).join("").toUpperCase();
  const phero =
    `<div class="pd-phero">` +
    `<div class="av" data-cat="${escAttr(agg.file)}">${escAttr(initials)}</div>` +
    `<div class="pi">` +
    `<h1 class="pt">${escAttr(agg.name)}</h1>` +
    `<div class="byl">${escAttr(roleLabel)}${aliasNames.length ? ` · 又名 ${escAttr(aliasNames.join(" / "))}` : ""}</div>` +
    `<div class="nums">本站收录 <b>${nEp}</b> 集 · <b>${quotes.length}</b> 条金句 · 关联 <b>${relatedIds.length}</b> 个</div>` +
    `</div></div>`;

  // 小节标题照设计稿编号 + 一句说明。人物页用「他说过的话」,公司/概念页说不通 → 用中性词。
  const isPerson = agg.type === "person";
  const secQuotes = isPerson ? "① 他说过的话" : "① 提到它的金句";

  // ── C13j 补遗 ② · 「④ 也在聊「X」的人」(仅人物页;无人可列整节不渲染,不出空壳)──
  // div 中间空一行 = CommonMark 结束 HTML 块,里面的 [[双链]] 照常由 markdown 解析
  // (renderRelatedEpisodes 的 .pd-ex 同一手法;铁律:双链不被 HTML 包住)。
  const peers = extras.peers;
  const peersSection =
    isPerson && peers?.people?.length
      ? `## ④ 也在聊「${peers.topic}」的人\n\n<div class="pd-peers">\n\n${peers.people.map((p) => `[[${p.file}]]`).join(" ")}\n\n</div>`
      : "";

  // ── C13j 补遗 ① · 关联药丸集数徽标的数据块 ──
  // 数据构建期算好(epCount,与 phero 同源);挂 <b> 只能客户端 —— [[双链]] 里塞不进 HTML,
  // 包住它 Quartz 又不解析(铁律)。这里只放**不执行的 JSON 数据块**;真正挂徽标/改目录的运行时
  // 在 renderSidebarScript(全站共用,每页都有)—— SPA 换页不重跑新页内联脚本(实测漏配),
  // 运行时从当前页 DOM 现读 script.pd-epn 才与页同步。⚠️ JSON 转义 < 与 [,防被当 HTML/双链扫到。
  const badgeData = {};
  if (extras.epCountByFile) {
    for (const id of relatedIds) {
      const f = pageById.get(id)?.file ?? id;
      const n = extras.epCountByFile.get(f);
      if (n) badgeData[f] = n;
    }
  }
  const badgeJson = JSON.stringify(badgeData).replace(/</g, "\\u003c").replace(/\[/g, "\\u005b");
  const chipScript = Object.keys(badgeData).length
    ? `<script type="application/json" class="pd-epn">${badgeJson}</script>`
    : "";

  const body = [
    renderSiteTopBar(agg.name),
    phero,
    descSection,
    quotes.length ? `## ${secQuotes}\n\n*${quotes.length} 条,均已过机器闸门*\n\n${quoteBody}` : "",
    `## ② 出现在这些集\n\n*${nEp} 集*\n\n${epBody}`,
    relatedIds.length ? `## ${isPerson ? "③ 他谈到的" : "③ 关联"}\n\n*点进去有真内容 —— 本页主要出口*\n\n${relBody}` : "",
    peersSection,
    chipScript,
    renderSidebarScript(),
  ]
    .filter(Boolean)
    .join("\n\n");
  return `${fm}\n\n${body}\n`;

}

/**
 * 全量聚合 → Map<file, markdown>。**CLI 与产物一致性闸门共用它**(闸门重算=拿这份跟仓库逐字比,
 * 对不上即手改/陈旧 → 拦)。关联区上限 10 也收在这里,保证「写出来的」和「闸门重算的」同源。
 */
export function buildAllPages(episodes, aliasById = new Map()) {
  // 先按别名表 merge 把变体 id 归一(id/name/file 一起),再跨集聚合 —— 根治「不同 id 落同一
  // file → out.set 后写覆盖先写、整页丢失」(Scenario 2c)。归一后 aggregate/quotesFor/related
  // 全见权威 id,签名不变、集页渲染与 gate-facts 不受影响。
  const eps = canonicalizeEpisodes(episodes, buildCanonMap(aliasById), aliasById);
  const aggs = aggregate(eps, aliasById);
  const pageIds = new Set(aggs.map((a) => a.id));
  const pageById = new Map(aggs.map((a) => [a.id, { file: a.file, name: a.name }]));
  // 药丸徽标与 phero 同源(C13j 补遗)。按 **file** 键、与下方 out.set 同一迭代序。归并(Scenario 2c)
  // 后 7 组「多 id 同 file」已消,只剩 soul/system-prompt 一处仍后者覆盖;徽标取归并后 agg 的真实
  // 收录数,与点进去那页 phero 同源(残留那处仍等于落盘页,不穿帮)。
  const epCountByFile = new Map(aggs.map((a) => [a.file, epCount(a)]));
  const peersCtx = buildPeersContext(eps, aggs);
  const out = new Map();
  for (const agg of aggs) {
    const quotes = quotesFor(agg, eps, aliasById);
    const rel = related(agg, eps, pageIds).slice(0, 10);
    const sp = agg.type === "person" ? sameTopicPeers(agg, peersCtx) : null;
    const peers = sp?.peers?.length ? { topic: sp.topic, people: sp.peers.slice(0, 10) } : null; // 上限同关联区
    out.set(agg.file, renderEntityPage(agg, quotes, rel, pageById, aliasById, { epCountByFile, peers }));
  }
  return out;
}

// ────────────────────────── CLI ──────────────────────────
export function loadAllEpisodes(base) {
  const eps = [];
  for (const d of readdirSync(base, { withFileTypes: true })) {
    if (!d.isDirectory()) continue;
    const dir = join(base, d.name);
    if (!existsSync(join(dir, "entities.json"))) continue;
    // transcript = C13d-1 ↩ 回原文的英文原话底料;缺了只是回不了原文,不拦这一集(与 loadEpisode 同口径)
    let transcript = null;
    const tp = join(dir, "transcript.en.json");
    if (existsSync(tp)) {
      try {
        transcript = JSON.parse(readFileSync(tp, "utf8"));
      } catch {
        transcript = null;
      }
    }
    eps.push({
      meta: JSON.parse(readFileSync(join(dir, "meta.json"), "utf8")),
      digest: JSON.parse(readFileSync(join(dir, "digest.json"), "utf8")),
      entities: JSON.parse(readFileSync(join(dir, "entities.json"), "utf8")),
      transcript,
    });
  }
  return eps;
}

function main() {
  const base = resolve(ROOT, "data/episodes");
  const aliases = JSON.parse(readFileSync(resolve(ROOT, "data/aliases.json"), "utf8"));
  const aliasById = mergeAwareAliasById(aliases);
  const episodes = loadAllEpisodes(base);

  const pages = buildAllPages(episodes, aliasById);
  const outDir = resolve(ROOT, "samples/entities");
  // 写前清场:实体页是全量确定性重算产物,重浓缩/翻新会改实体权威名 → 旧名页残留成
  // 「实体页多余」拦 gate-all(run 30062396869 实测:提示词注入.md/主观能动性.md 陈旧残留挡整批部署)。
  // 本地一直靠手动 rm -rf 才没撞上,云端没这步 → 收进代码,根除整类。
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });
  for (const [file, md] of pages) writeFileSync(join(outDir, `${file}.md`), md);

  const eps = canonicalizeEpisodes(episodes, buildCanonMap(aliasById), aliasById);
  const aggs = aggregate(eps, aliasById);
  const multi = aggs.filter((a) => new Set(a.appearances.map((x) => x.epId)).size > 1);
  console.log(`✅ 生成 ${pages.size} 个实体页 → samples/entities/`);
  console.log(`   跨 ≥2 集的实体(聚合真起作用):${multi.map((a) => a.name).join(" · ") || "(无)"}`);
  // 归并后仍有多个 id 撞同一个 file 的 → 响亮 warn(不静默吞页):同概念该给别名表加 merge,
  // 异概念该改名/拆页。本轮已知残留=系统提示词(soul/system-prompt,用户拍板先不动)。
  const byFile = new Map();
  for (const a of aggs) byFile.set(a.file, [...(byFile.get(a.file) ?? []), a.id]);
  for (const [file, ids] of byFile)
    if (ids.length > 1)
      console.warn(`⚠️ 同 file「${file}」仍有 ${ids.length} 个未归并 id(${ids.join(" / ")})→ 后写覆盖前写、丢页。同概念加别名表 merge;异概念改名/拆页`);
}

const isMain = (() => {
  try { return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url); } catch { return false; }
})();
if (isMain) main();
