#!/usr/bin/env node
// C1 验收脚本(US-4 骨架):校验 Quartz 已把样片真渲染成详情页。
// 只校验"发布骨架渲染管线通"——不校验防失真(那是 C2 机器闸门的活,C1 不跑)。
// 故此处刻意不用"逐字"字样、不拿金句当锚点(金句逐字校验属防失真闸门,C1 无权盖那个章)。
// 纯读 build 产物,不触发 build → 先 `cd site && node ./quartz/bootstrap-cli.mjs build`。
// 不进常规 vitest 测试门:依赖 gitignore 的产物+需 Node22 build 环境;真闸门化到 C2。见 tech-debt D1/D6。
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

// ── 防假绿:必须是真 Quartz 渲染产物,挡掉手造/陈旧/损坏文件(审计曾用 90 字节假文件骗过旧版) ──
const looksQuartz = html.includes("article-title") && html.includes("<article");
const bigEnough = html.length > 3000;
if (!looksQuartz || !bigEnough) {
  console.error(`❌ 产物不像真 Quartz 渲染结果(article-title=${html.includes("article-title")}, <article=${html.includes("<article")}, size=${html.length}B)`);
  console.error("   疑似陈旧/手造/损坏文件 —— 请重 build 后再验。");
  process.exit(1);
}

// ── 渲染锚点:标题(frontmatter 派生)+ 嘉宾 + 导读正文串。都是非金句串,不碰防失真语义。──
const anchors = [
  ["标题(frontmatter派生)", "为什么 AI 基础设施必须为"],
  ["嘉宾(frontmatter派生)", "Akshat Bubna"],
  ["导读正文串", "Modal CTO 谈"],
  ["占位诚实标识", "占位样片"], // 证实"这是占位版式"这层诚实标注真渲染进了页面
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
console.log("\n✅ C1 渲染验收通过:样片已由 Quartz 真渲染成详情页(结构+锚点校验)。注:本片不校验防失真,金句逐字/时间戳/说话人三联闸门 C2 才接入。");
