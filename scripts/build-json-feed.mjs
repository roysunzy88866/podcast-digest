#!/usr/bin/env node
// C26 · JSON Feed(jsonfeed.org v1.1):面向 Agent + 现代 RSS 阅读器的订阅源,含中文精华全文。
// 已发布集 = samples/*.md(同 build-llms/build-feed 口径 → 与站点内容自动同步、零人工维护)。
// 生成逻辑在 seo.mjs 的 buildJsonFeed(纯函数、可单测);本文件只做「收集已发布集(meta+digest+entities)→ 写 feed.json」。
// 分类真相源 = render.mjs 的 episodeCategories(人工映射 > entities.categories),与首页卡片 chip 同源(别自己读一份,会漏新集)。
import { readFileSync, existsSync, readdirSync, writeFileSync, realpathSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildJsonFeed } from "./seo.mjs";
import { episodeCategories } from "./render.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// 已发布集 = samples/*.md(与 build-feed/build-llms 同一口径:有集页才算发布)。
export function collectPublishedFull(root = ROOT) {
  const samplesDir = join(root, "samples");
  const base = join(root, "data/episodes");
  const ids = existsSync(samplesDir)
    ? readdirSync(samplesDir).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""))
    : [];
  const eps = [];
  for (const id of ids) {
    const rd = (name) => {
      const p = join(base, id, name);
      return existsSync(p) ? JSON.parse(readFileSync(p, "utf8")) : {};
    };
    const meta = rd("meta.json");
    const digest = rd("digest.json");
    const entities = rd("entities.json");
    eps.push({
      title: meta.title_zh ?? meta.title_en ?? id, // C5.1 fallback 链,不显示裸 id
      slug: id,
      date: meta.date ?? (String(id).match(/^\d{4}-\d{2}-\d{2}/)?.[0] ?? ""),
      added: meta.added ?? "", // 入库日:新精华置顶排序用(drift #47)
      description: digest.tldr ?? "",
      content: digest.digest_md ?? "", // 中文精华全文(content_text)
      tags: episodeCategories(meta, entities).filter((c) => c !== "未分类"),
      image: meta.cover_image?.file ? `/covers/${id}.jpg` : "",
    });
  }
  return eps;
}

const isMain = (() => {
  try {
    return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
})();
if (isMain) {
  const json = buildJsonFeed(collectPublishedFull());
  const outIdx = process.argv.indexOf("--out");
  if (outIdx >= 0 && process.argv[outIdx + 1]) {
    writeFileSync(process.argv[outIdx + 1], json);
    console.log(`✅ feed.json 写入 ${process.argv[outIdx + 1]}(${JSON.parse(json).items.length} 集)`);
  } else {
    process.stdout.write(json);
  }
}
