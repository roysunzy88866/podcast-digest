#!/usr/bin/env node
// C2 步骤 ⑤ · 组装集页 markdown(digest.json + meta.json → samples/<id>.md)
//
// **本模块是集页的唯一渲染真相**:gate-all.mjs 会用 renderEpisode() 重渲染并与 samples/<id>.md
// 逐字比对 —— 集页必须是「过闸门的 digest 渲染出来的结果」,手改/陈旧一律拦。
// (依 C2 交付物审计:此前闸门只守 digest.json 这个中间产物,发布产物 samples/*.md 完全不受约束,
//  实测把编造金句写进集页可让 gate-all + verify:c2 双绿并直达读者页面。)
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { realpathSync } from "node:fs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const mmss = (s) =>
  `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

/** digest + meta → 集页 markdown(纯函数,无副作用;gate-all 复用它做「重渲染比对」) */
export function renderEpisode(meta, digest) {
  const dur = mmss(meta.duration_sec);
  // 嘉宾身份从 meta 取,不硬编码本集常量(审计:此前任何嘉宾都被渲染成「(Modal CTO)」)
  const guests = meta.guests || [];
  const guestsLine = guests
    .map((g) => (meta.guest_titles && meta.guest_titles[g] ? `${g} (${meta.guest_titles[g]})` : g))
    .join("、");
  // tags 由流水线产出;没有就不写 tags 字段,不用本集硬编码兜底冒充
  const tags = Array.isArray(digest.tags) ? digest.tags.filter(Boolean) : [];

  const fm = [
    "---",
    `title: ${meta.title_zh}`,
    `podcast: ${meta.podcast}`,
    `host: ${meta.host}`,
    `guests: ${guestsLine}`,
    `date: ${meta.date}`,
    `source_url: ${meta.source_url}`,
    `duration: "${dur}"`,
    ...(tags.length ? ["tags:", ...tags.map((t) => `  - ${t}`)] : []),
    "---",
  ].join("\n");

  const quoteBlocks = (digest.quotes || [])
    .map((q) => `> ${String(q.zh).trim()}\n>\n> *${String(q.en).trim()}*\n>\n> —— ${q.speaker} · [${q.timestamp}]`)
    .join("\n\n");

  // 存档层位置据实描述,不对读者说「云端存档」(现阶段就在本地仓库;上云是 C7 / tech-debt D7)
  const archiveNote =
    meta.archive_location === "cloud"
      ? "英文原稿/全译云端存档、本页不展示(可事后核对)。"
      : "英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。";

  const body = `
# ${meta.title_zh}

> [!info] 本集
> ${meta.podcast} · 嘉宾 ${guestsLine} · 主持 ${meta.host} · ${meta.date} · ${dur}
> 来源:${meta.source_url}

## 一句话 TLDR

${digest.tldr}

${String(digest.digest_md).trim()}

## 金句(中英对照 · 过机器闸门三联校验)

${quoteBlocks}

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。${archiveNote}*
`;
  return fm + "\n" + body;
}

export function loadEpisode(dir) {
  return {
    meta: JSON.parse(readFileSync(resolve(dir, "meta.json"), "utf8")),
    digest: JSON.parse(readFileSync(resolve(dir, "digest.json"), "utf8")),
  };
}

/** 集页在仓库里的路径(已提交内容源;bootstrap-site.sh 由此灌进 site/content) */
export function samplePath(id) {
  return join(ROOT, "samples", `${id}.md`);
}

// ── CLI ──
const isMain = (() => {
  try {
    return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
})();

if (isMain) {
  const DIR = process.argv[2] || "data/episodes/2026-07-08-latent-space-modal";
  const { meta, digest } = loadEpisode(resolve(ROOT, DIR));
  const md = renderEpisode(meta, digest);
  writeFileSync(samplePath(meta.id), md);
  console.log(`✅ 已写 samples/${meta.id}.md (${md.length} 字符, ${digest.quotes?.length ?? 0} 金句)`);
  console.log(`   本地起站前:cp samples/${meta.id}.md site/content/ && (cd site && node ./quartz/bootstrap-cli.mjs build)`);
}
