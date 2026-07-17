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
  const meta = JSON.parse(readFileSync(join(root, DIR, "meta.json"), "utf8"));
  const clean = (digest.quotes || [])
    .map((q) => q.en || "")
    .find((en) => /^[\x20-\x7E]+$/.test(en) && !/['"]/.test(en) && en.length >= 30);
  const oneQuoteEn = (clean || digest.quotes?.[0]?.en || "").slice(0, 40);
  // 注:原「转写纠错标注(原文误作)」锚点已移除 —— 2026-07-17 用户改标准为「拿得准的直接改对、不标注」
  // (drift-log #3 细化),再硬要求页面出现「原文误作」就是锁死旧标准。
  const anchors = [
    ["标题", "为什么 AI 基础设施必须为"],
    ["嘉宾", "Akshat Bubna"],
    ["逐字金句(英文侧照原稿)", oneQuoteEn],
    ["闸门声明", "三联校验"],
  ];
  // AI 补充与原话视觉区分(US-4):**条件化** —— US-4 原文是「AI 补充时才需视觉区分」,
  // 无条件硬要求属形式绑架内容(依 GLM 20260717-010 [2])。故:digest 里有【背景】才验页面渲染出来。
  if (digest.digest_md.includes("【背景】")) anchors.push(["AI补充与原话视觉区分(US-4)", "【背景】"]);
  else console.log("ℹ️ 本集 digest 无【背景】块,跳过视觉区分锚点(US-4 是条件性要求)");
  for (const [name, needle] of anchors) {
    if (needle && html.includes(needle)) pass(`锚点 ${name}:命中`);
    else fail(`锚点 ${name}:缺「${needle}」`);
  }

  // ④ 防占位复辟
  if (html.includes("占位样片") || html.includes("拼接失真反例")) fail("页面仍含 C1 占位/反例标识,真精华未替换干净");
  else pass("防占位复辟:C1 占位标识已消失(drift #2 兑现)");

  // ⑤ 纠错链路在工作(依 GLM 20260717-010 [4]:新标准下纠错静默发生,否则零覆盖)
  //    **负向检查**:正文不得把转写错形式传播进来。清单从 meta 读(通用,不把单集专名硬编码);
  //    不强制正文必须出现某专名 —— 那是内容决定的,硬要求=形式绑架内容(同 [2] 教训)。
  //    容忍显式解释:含「误作/错听」的句子先剔除再查(标注节制标准下允许全篇点一次)。
  const explained = digest.digest_md
    .split(/[。\n]/)
    .filter((s) => !/误作|错听/.test(s))
    .join("。");
  let propagated = 0;
  for (const pair of meta.known_transcript_errors_sample || []) {
    const [correct, wrongStr] = pair.split("→");
    // 格式不对就报错,不静默跳过(静默跳过=少查一组还显示绿,是假绿,GLM 20260717-011 [9])
    if (!wrongStr || !wrongStr.trim()) {
      fail(`meta.known_transcript_errors_sample 条目格式错(缺「→错误形式」):「${pair}」—— 该组未被检查`);
      continue;
    }
    for (const w of wrongStr.split("/").filter(Boolean)) {
      if (explained.includes(w)) {
        fail(`纠错未落地:正文仍含转写错形式「${w}」(应为「${correct}」)`);
        propagated++;
      }
    }
  }
  if (!propagated) pass(`纠错落地:正文未传播任何已知转写错形式(查了 ${(meta.known_transcript_errors_sample || []).length} 组)`);
}

if (!ok) {
  console.error("\n❌ C2 验收未过。");
  process.exit(1);
}
console.log("\n✅ C2 验收通过:真精华过机器闸门 + 真 Quartz 渲染 + 占位已替换。");
