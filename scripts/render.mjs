#!/usr/bin/env node
// 组装集页 markdown(meta + digest + entities → samples/<id>.md)
//
// **本模块是集页的唯一渲染真相**:gate-all.mjs 会用 renderEpisode() 重渲染并与 samples/<id>.md
// 逐字比对 —— 集页必须是「过闸门的产物渲染出来的结果」,手改/陈旧一律拦。
//
// C3 升级(Scenario 3):
//   · frontmatter 类型化属性(guests/companies/concepts,值为 [[双链]]) + host=null 不打印 "null"
//   · 顶部「关联区」按角色分行(嘉宾/主持/公司/概念/来源),每个 [[链到实体页]]
//   · 正文首现处给 primary 实体补 [[双链]](只链有页的,依 #9;【背景】块不链)
//   · 每条金句挂 ^块ID(实体页靠它精确嵌入,P1 已验 Quartz 支持)
//   · entities 缺省 → 退化为 C2 版式(向后兼容,不崩)
import { readFileSync, writeFileSync, existsSync, realpathSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const mmss = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

const asArr = (entities) => (Array.isArray(entities) ? entities : entities?.entities ?? []);

// YAML 标量安全:含 : # " 引号/首尾空白等会破 frontmatter 结构的字符时,加引号并转义
//（GLM 20260718-001[1]:标题若含「X: Y」这种冒号会截断 YAML;当前两集标题无此字符,属防未来)
function yamlScalar(s) {
  const str = String(s ?? "");
  return /[:#"'\[\]{}|>&*!?,%@`]|^[\s-]|\s$/.test(str)
    ? `"${str.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`
    : str;
}
const escapeRegExp = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const isAscii = (s) => /^[\x00-\x7F]+$/.test(s);

/** 金句块 ID:稳定、确定、只含字母数字(实体页 ![[集#^块ID]] 靠它精确嵌入) */
export function blockId(index) {
  return `q${index + 1}`;
}

/** 只收 primary、按角色分组(US-6:详情页关联区要「按角色分行」,不是一排无差别标签) */
export function groupByRole(entities) {
  const prim = asArr(entities).filter((e) => e.primary);
  const pick = (pred) => prim.filter(pred).map((e) => ({ id: e.id, name: e.name, file: e.file, role: e.role }));
  return {
    host: pick((e) => e.type === "person" && e.role === "host"),
    guests: pick((e) => e.type === "person" && e.role === "guest"),
    cohosts: pick((e) => e.type === "person" && e.role === "cohost"),
    companies: pick((e) => e.type === "company"),
    concepts: pick((e) => e.type === "concept"),
  };
}

/** 关联区:按角色分行,每个实体链到它的页(链 file 名,不是显示名 —— 实体页文件名=file) */
export function renderRelations(entities, meta) {
  const g = groupByRole(entities);
  const link = (x) => `[[${x.file}]]`;
  const rows = [];
  if (g.guests.length) rows.push(`> **嘉宾**:${g.guests.map(link).join(" · ")}`);
  if (g.host.length) rows.push(`> **主持**:${g.host.map(link).join(" · ")}`);
  if (g.cohosts.length) rows.push(`> **联合主持**:${g.cohosts.map(link).join(" · ")}`);
  if (g.companies.length) rows.push(`> **涉及公司**:${g.companies.map(link).join(" · ")}`);
  if (g.concepts.length) rows.push(`> **概念**:${g.concepts.map(link).join(" · ")}`);
  if (meta?.source_url) rows.push(`> **来源**:[${meta.podcast}](${meta.source_url})`);
  return `> [!info] 关联\n${rows.join("\n>\n")}`;
}

/**
 * C6 · 关联区③「相关单集」(US-7):列相关集 + 注明关联原因(同嘉宾/同概念/同公司)+ 点跳。
 * related = build-entities.relatedEpisodes() 的结果(每条含 shared:{guests,companies,concepts})。
 * 空/无 → 返回 ""(整段不渲染,Scenario 1a:不留空框)。
 */
export function renderRelatedEpisodes(related) {
  if (!related || !related.length) return "";
  const DIM = { guests: "同嘉宾", companies: "同公司", concepts: "同概念" };
  const lines = related.map((r) => {
    const reasons = ["guests", "companies", "concepts"]
      .filter((k) => r.shared?.[k]?.length)
      .map((k) => `${DIM[k]}:${r.shared[k].map((x) => x.name).join("、")}`);
    return `- [[${r.epId}|《${r.epTitle}》]] —— ${reasons.join(" · ")}`;
  });
  return `## 相关单集\n\n${lines.join("\n")}`;
}

/** C4 · 详情页音频播放器(US-5)。音频缺失/加载失败 → 浏览器原生降级为不可用态,不卡死页面(Scenario 2a)。 */
export function renderAudioPlayer(meta) {
  return `## 🎧 本集中文精华音频\n\n<audio controls preload="metadata" src="/audio/${meta.id}.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>`;
}

// 不补链的行:【背景】块 / 引用续行(AI 补充,非本集实体讨论)/ 标题行(链进标题会毁锚点、Quartz 渲染差)
const BACKGROUND_LINE_RE = /^\s*(?:>+\s*)*(?:[-*+]\s*)?【背景】/;
const QUOTE_LINE_RE = /^\s*>+/;
const HEADING_LINE_RE = /^\s*#/;

/**
 * 正文首现处给 primary 实体补 [[file|原词]] 双链(保留原读文)。
 * 只链 primary(有页,#9);每个实体只链一次(首现);【背景】/引用行跳过。
 * file 名按长度降序,先长后短,避免短名先吃掉长名的子串。
 */
export function linkPrimaryEntities(md, entities) {
  const targets = asArr(entities)
    .filter((e) => e.primary && e.file)
    .map((e) => String(e.file))
    .sort((a, b) => b.length - a.length);
  const linked = new Set();
  return String(md)
    .split("\n")
    .map((line) => {
      if (BACKGROUND_LINE_RE.test(line) || QUOTE_LINE_RE.test(line) || HEADING_LINE_RE.test(line)) return line;
      let L = line;
      for (const t of targets) {
        if (linked.has(t)) continue;
        // ASCII 名走词边界(防 'AI' 命中 'AIM' 之类词中误匹配,GLM 20260718-001[2]);
        // 中文名无词边界概念,仍用 indexOf 子串
        let idx;
        if (isAscii(t)) {
          const m = L.match(new RegExp(`(?<![A-Za-z0-9])${escapeRegExp(t)}(?![A-Za-z0-9])`));
          idx = m ? m.index : -1;
        } else {
          idx = L.indexOf(t);
        }
        if (idx < 0) continue;
        L = L.slice(0, idx) + `[[${t}|${t}]]` + L.slice(idx + t.length);
        linked.add(t);
      }
      return L;
    })
    .join("\n");
}

/** frontmatter:类型化属性 + host=null 绝不打印 */
function renderFrontmatter(meta, digest, entities) {
  const dur = mmss(meta.duration_sec);
  const lines = [
    "---",
    `title: ${yamlScalar(meta.title_zh)}`,
    `podcast: ${yamlScalar(meta.podcast)}`,
    `date: ${meta.date}`,
    `source_url: ${meta.source_url}`,
    `duration: "${dur}"`,
  ];
  if (meta.host) lines.push(`host: "[[${meta.host}]]"`); // 无 host → 整行不写(不打印 null)
  if (entities) {
    const g = groupByRole(entities);
    const wl = (arr) => arr.map((x) => `"[[${x.file}]]"`).join(", ");
    if (g.guests.length) lines.push(`guests: [${wl(g.guests)}]`);
    if (g.cohosts.length) lines.push(`cohosts: [${wl(g.cohosts)}]`);
    if (g.companies.length) lines.push(`companies: [${wl(g.companies)}]`);
    if (g.concepts.length) lines.push(`concepts: [${wl(g.concepts)}]`);
  } else {
    // 向后兼容(无 entities):C2 的纯文本 guests
    const guestsLine = (meta.guests || [])
      .map((x) => (meta.guest_titles?.[x] ? `${x} (${meta.guest_titles[x]})` : x))
      .join("、");
    if (guestsLine) lines.push(`guests: ${guestsLine}`);
  }
  const tags = (entities?.tags ?? (Array.isArray(digest.tags) ? digest.tags : [])).filter(Boolean);
  if (tags.length) lines.push("tags:", ...tags.map((t) => `  - ${t}`));
  lines.push("---");
  return lines.join("\n");
}

/** meta + digest(+ entities)→ 集页 markdown(纯函数;gate-all 复用它做「重渲染比对」) */
export function renderEpisode(meta, digest, entities = null, related = null) {
  const dur = mmss(meta.duration_sec);
  const fm = renderFrontmatter(meta, digest, entities);
  const relatedSection = renderRelatedEpisodes(related); // C6 关联区③(空则 "")

  // 顶部:有 entities → 关联区(按角色分行);否则 C2 info callout(host=null 时不打印主持)
  const guestsLine = (meta.guests || [])
    .map((g) => (meta.guest_titles?.[g] ? `${g} (${meta.guest_titles[g]})` : g))
    .join("、");
  const top = entities
    ? renderRelations(entities, meta)
    : `> [!info] 本集\n> ${meta.podcast} · 嘉宾 ${guestsLine}${meta.host ? ` · 主持 ${meta.host}` : ""} · ${meta.date} · ${dur}\n> 来源:${meta.source_url}`;

  let digestMd = String(digest.digest_md);
  // 无时间戳源:剥掉导读内联占位时间戳,说话人用中文括号(避开方括号与 [[双链]] 冲突,防三重括号畸形)
  // [00:55 X] → (X)(标准变更·用户授权)
  if (meta.no_timestamps) digestMd = digestMd.replace(/\s*\[\d{1,2}:\d{2}\s+([^\]]+)\]/g, "（$1）");
  const bodyMd = entities ? linkPrimaryEntities(digestMd, entities) : digestMd;

  const quoteBlocks = (digest.quotes || [])
    .map(
      // ⚠️ 三行必须合成**一个** blockquote 段落(行尾两空格=硬换行),^块ID 才能覆盖**整条**金句。
      // 若用空 `>` 分隔成多段,Quartz 块嵌入只拉到 ^ID 所在那一段(署名行)→ 金句正文全丢
      // (独立审计 2026-07-18 实测逮到:实体页金句墙只剩「—— 某人 [时间]」没正文;且闸门/测试都放过了)。
      // P1 风格 fixture 已实证:无空 `>` 分隔 + 行尾两空格 → 嵌入含正文且保留视觉换行。
      // 无时间戳源(第三方稿,如 SingjuPost):署名标「来自原文」而非占位时间戳(标准变更·用户授权)
      (q, i) =>
        `> ${String(q.zh).trim()}  \n> *${String(q.en).trim()}*  \n> —— ${String(q.speaker)} · ${meta.no_timestamps ? "来自原文" : `[${String(q.timestamp)}]`} ^${blockId(i)}`,
    )
    .join("\n\n");

  const archiveNote =
    meta.archive_location === "cloud"
      ? "英文原稿/全译云端存档、本页不展示(可事后核对)。"
      : "英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。";

  const body = `
# ${meta.title_zh}

${top}

${renderAudioPlayer(meta)}

## 一句话 TLDR

${digest.tldr}

${bodyMd.trim()}

## 金句(中英对照 · 过机器闸门三联校验)

${quoteBlocks}${relatedSection ? `\n\n${relatedSection}` : ""}

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。${archiveNote}*
`;
  return fm + "\n" + body;
}

export function loadEpisode(dir) {
  const meta = JSON.parse(readFileSync(resolve(dir, "meta.json"), "utf8"));
  const digest = JSON.parse(readFileSync(resolve(dir, "digest.json"), "utf8"));
  let entities = null;
  const ep = resolve(dir, "entities.json");
  if (existsSync(ep)) entities = JSON.parse(readFileSync(ep, "utf8"));
  return { meta, digest, entities };
}

/** 集页在仓库里的路径(已提交内容源;bootstrap-site.sh 由此灌进 site/content) */
export function samplePath(id) {
  return join(ROOT, "samples", `${id}.md`);
}

// ── CLI ──(realpathSync/fileURLToPath 稳健写法;本仓库路径含中文,不能用 `file://${argv[1]}`)
const isMain = (() => {
  try {
    return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
})();

if (isMain) {
  const DIR = process.argv[2] || "data/episodes/2026-07-08-latent-space-modal";
  const { meta, digest, entities } = loadEpisode(resolve(ROOT, DIR));
  const md = renderEpisode(meta, digest, entities);
  writeFileSync(samplePath(meta.id), md);
  console.log(`✅ 已写 samples/${meta.id}.md (${md.length} 字符, ${digest.quotes?.length ?? 0} 金句, entities ${entities ? "有" : "无"})`);
}
