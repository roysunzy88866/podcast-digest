#!/usr/bin/env node
// C22 · llms.txt(llmstxt.org 约定):站点给 AI/Agent 的「说明书」——# 站名 + > 简介 + 分节链接列表。
// 只列**已发布集**(samples/<id>.md 存在)→ 与站点内容自动同步、零人工维护(渲染真相同 build-feed:published=samples)。
// 纯拼字符串(生成逻辑在 seo.mjs 的 buildLlmsTxt,可单测),本文件只做「收集已发布集 → 写文件」。
import { readFileSync, existsSync, readdirSync, writeFileSync, realpathSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildLlmsTxt } from "./seo.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// 已发布集 = samples/*.md(与 build-feed 同一口径:有集页才算发布)。
export function collectPublished(root = ROOT) {
  const samplesDir = join(root, "samples");
  const base = join(root, "data/episodes");
  const ids = existsSync(samplesDir)
    ? readdirSync(samplesDir).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""))
    : [];
  const eps = [];
  for (const id of ids) {
    const metaP = join(base, id, "meta.json");
    const digestP = join(base, id, "digest.json");
    const meta = existsSync(metaP) ? JSON.parse(readFileSync(metaP, "utf8")) : {};
    const digest = existsSync(digestP) ? JSON.parse(readFileSync(digestP, "utf8")) : {};
    eps.push({
      title: meta.title_zh ?? meta.title_en ?? id, // C5.1 fallback 链,不显示裸 id
      slug: id,
      date: meta.date ?? (String(id).match(/^\d{4}-\d{2}-\d{2}/)?.[0] ?? ""),
      description: digest.tldr ?? "",
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
  const txt = buildLlmsTxt(collectPublished());
  const outIdx = process.argv.indexOf("--out");
  if (outIdx >= 0 && process.argv[outIdx + 1]) {
    writeFileSync(process.argv[outIdx + 1], txt);
    console.log(`✅ llms.txt 写入 ${process.argv[outIdx + 1]}(${txt.split("\n").filter((l) => l.startsWith("- [")).length} 集)`);
  } else {
    process.stdout.write(txt);
  }
}
