#!/usr/bin/env node
// C2 步骤 ⑤ · 组装集页 markdown(digest.json + meta.json → site/content/<id>.md)
// 前置:digest.json 必须已过机器闸门(gate.mjs)。本脚本只渲染,不校验。
// 金句:英文侧照转写稿原样(en),中文侧可含纠错标注(zh),标 说话人·[时间戳]。
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = process.argv[2] || "data/episodes/2026-07-08-latent-space-modal";
const meta = JSON.parse(readFileSync(resolve(ROOT, DIR, "meta.json"), "utf8"));
const digest = JSON.parse(readFileSync(resolve(ROOT, DIR, "digest.json"), "utf8"));

const dur = `${String(Math.floor(meta.duration_sec / 60)).padStart(2, "0")}:${String(Math.floor(meta.duration_sec % 60)).padStart(2, "0")}`;
const guestsLine = (meta.guests || []).join("、") + (meta.guests?.length ? " (Modal CTO)" : "");
const tags = digest.tags && digest.tags.length ? digest.tags : ["AI基础设施", "Agent", "算力", "沙箱"];

// frontmatter(类型化关系属性/双链留 C3;此处保 C1 基础字段口径)
const fm = [
  "---",
  `title: ${meta.title_zh}`,
  `podcast: ${meta.podcast}`,
  `host: ${meta.host}`,
  `guests: ${guestsLine}`,
  `date: ${meta.date}`,
  `source_url: ${meta.source_url}`,
  `duration: "${dur}"`,
  "tags:",
  ...tags.map((t) => `  - ${t}`),
  "---",
].join("\n");

const quoteBlocks = (digest.quotes || [])
  .map((q) => {
    const en = q.en.trim();
    const zh = q.zh.trim();
    return `> ${zh}\n>\n> *${en}*\n>\n> —— ${q.speaker} · [${q.timestamp}]`;
  })
  .join("\n\n");

const body = `
# ${meta.title_zh}

> [!info] 本集
> ${meta.podcast} · 嘉宾 ${guestsLine} · 主持 ${meta.host} · ${meta.date} · ${dur}
> 来源:${meta.source_url}

## 一句话 TLDR

${digest.tldr}

${digest.digest_md.trim()}

## 金句(中英对照 · 过机器闸门三联校验)

${quoteBlocks}

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译云端存档、本页不展示(可事后核对)。*
`;

// 写入**已提交内容源** samples/(bootstrap-site.sh 由此灌进 site/content 再 build)。
// site/ 是 gitignore 构建区,不作源;真相源=data/episodes/<id>/digest.json,samples 是其渲染产物。
const outFile = resolve(ROOT, "samples", `${meta.id}.md`);
writeFileSync(outFile, fm + "\n" + body);
console.log(`✅ 已写 samples/${meta.id}.md (${(fm + body).length} 字符, ${digest.quotes?.length} 金句)`);
console.log(`   本地起站前:cp samples/${meta.id}.md site/content/ && (cd site && node ./quartz/bootstrap-cli.mjs build)`);
