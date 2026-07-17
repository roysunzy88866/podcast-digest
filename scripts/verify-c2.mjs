#!/usr/bin/env node
// C2 验收(US-4 读中文精华 + US-11 可回原核对):一集是否「可发布」的一站式校验。
//   ① 机器闸门:digest.json 金句过三联(防失真硬线,唯一不说谎的一层)
//   ② 真渲染:site/public 该集页是真 Quartz 产物(防假绿:article-title+<article+体积)
//   ③ 真内容锚点:标题/嘉宾/TLDR/逐字金句/纠错标注 都渲染进页
//   ④ 防占位复辟:C1 的「占位样片」标识必须已从页面消失(drift #2 兑现)
// 前置:先 build → cd site && node ./quartz/bootstrap-cli.mjs build
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { gateEpisode } from "./gate.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = process.argv[2] || "data/episodes/2026-07-08-latent-space-modal";
const id = "2026-07-08-latent-space-modal";
let ok = true;
const fail = (m) => ((ok = false), console.error("❌ " + m));
const pass = (m) => console.log("✅ " + m);

// ① 机器闸门(防失真硬线)
const g = gateEpisode(join(root, DIR));
if (g.allPass) pass(`机器闸门:金句 ${g.passed}/${g.total} 过三联`);
else fail(`机器闸门:仅 ${g.passed}/${g.total} 过三联,存在失真金句`);

// ② 真渲染 + 防假绿
const page = join(root, "site/public", `${id}.html`);
if (!existsSync(page)) {
  fail(`页产物不存在:${page}(先 build:cd site && node ./quartz/bootstrap-cli.mjs build)`);
} else {
  const html = readFileSync(page, "utf8");
  const realQuartz = html.includes("article-title") && html.includes("<article") && html.length > 3000;
  if (realQuartz) pass(`真 Quartz 渲染产物(${html.length}B)`);
  else fail(`产物不像真 Quartz 渲染(article-title=${html.includes("article-title")}, size=${html.length}B)`);

  // ③ 真内容锚点(从 digest 动态取一条逐字金句;挑纯 ASCII 无撇号的,
  //    避免 HTML 智能引号/实体转义导致假阴性)
  const digest = JSON.parse(readFileSync(join(root, DIR, "digest.json"), "utf8"));
  const clean = (digest.quotes || [])
    .map((q) => q.en || "")
    .find((en) => /^[\x20-\x7E]+$/.test(en) && !/['"]/.test(en) && en.length >= 30);
  const oneQuoteEn = (clean || digest.quotes?.[0]?.en || "").slice(0, 40);
  const anchors = [
    ["标题", "为什么 AI 基础设施必须为"],
    ["嘉宾", "Akshat Bubna"],
    ["逐字金句(英文侧照原稿)", oneQuoteEn],
    ["转写纠错标注", "原文误作"],
    ["闸门声明", "三联校验"],
  ];
  for (const [name, needle] of anchors) {
    if (needle && html.includes(needle)) pass(`锚点 ${name}:命中`);
    else fail(`锚点 ${name}:缺「${needle}」`);
  }

  // ④ 防占位复辟
  if (html.includes("占位样片") || html.includes("拼接失真反例")) fail("页面仍含 C1 占位/反例标识,真精华未替换干净");
  else pass("防占位复辟:C1 占位标识已消失(drift #2 兑现)");
}

if (!ok) {
  console.error("\n❌ C2 验收未过。");
  process.exit(1);
}
console.log("\n✅ C2 验收通过:真精华过机器闸门 + 真 Quartz 渲染 + 占位已替换。");
