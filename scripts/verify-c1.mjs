#!/usr/bin/env node
// C1 验收脚本(US-4 骨架):校验 Quartz 已把样片渲染成含真实内容的详情页。
// 纯读 build 产物,不触发 build —— 故先 `cd site && node ./quartz/bootstrap-cli.mjs build`。
// 不塞进常规 vitest 测试门:它依赖 gitignore 的 build 产物,且要 Node 22 build 环境;
// 里程碑/CI 前单独跑(`npm run verify:c1`)。见 docs/tech-debt.md D1。
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const page = join(root, "site/public/2026-07-08-latent-space-modal.html");

if (!existsSync(page)) {
  console.error("❌ 样片页产物不存在:", page);
  console.error("   先 build:cd site && eval \"$(fnm env)\" && fnm use 22.16.0 && node ./quartz/bootstrap-cli.mjs build");
  process.exit(1);
}

const html = readFileSync(page, "utf8");
// US-4 骨架三锚:标题(frontmatter 派生)/ 导读正文 / 金句逐字
const anchors = [
  ["标题", "为什么 AI 基础设施必须为"],
  ["嘉宾", "Akshat Bubna"],
  ["金句(逐字)", "人们不看代码了"],
];

let ok = true;
for (const [name, needle] of anchors) {
  const hit = html.includes(needle);
  console.log(`${hit ? "✅" : "❌"} ${name}: ${hit ? "命中" : "缺失"} 「${needle}」`);
  if (!hit) ok = false;
}

if (!ok) {
  console.error("\n❌ C1 渲染验收未过。");
  process.exit(1);
}
console.log("\n✅ C1 渲染验收通过:样片已渲染成含真实内容的中文详情页。");
