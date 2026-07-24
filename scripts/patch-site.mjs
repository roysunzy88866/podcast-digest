#!/usr/bin/env node
// C10 · site/quartz.config.yaml 配置补丁(site/ 是 gitignore 构建区,每次从上游模板重建 →
// 一切配置定制必须收在这里,bootstrap-site.sh 与 pipeline.yml 在 plugin install 之后、build 之前调用)。
//
// 三刀(2026-07-24 用户拍板,需求共创/首页交互改版.md):
//   ① enablePopovers: true → false(全站关悬浮预览弹框)
//   ② pageTitle: Quartz 5 → 英文播客中文精华(站名)
//   ③ bases-page 插件默认视图 = cards(否则首页页签默认落在表格,不是「最新」卡片)
//
// 铁律:替换目标找不到 = 硬错退出(上游模板漂移必须被看见,绝不静默跳过)。
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const cfgPath = process.argv[2] || resolve(ROOT, "site/quartz.config.yaml");

let cfg = readFileSync(cfgPath, "utf8");

/** 精确替换一次;找不到就硬错(防上游默认值变了补丁静默失效) */
function patch(from, to, why) {
  if (!cfg.includes(from)) {
    console.error(`✗ patch-site:找不到「${from}」(${why})—— 上游模板可能变了,人工核对后再跑。`);
    process.exit(1);
  }
  cfg = cfg.replace(from, to);
  console.log(`  ✔ ${why}`);
}

patch("enablePopovers: true", "enablePopovers: false", "全站关闭悬浮预览弹框");
patch("pageTitle: Quartz 5", "pageTitle: 英文播客中文精华", "站名");
patch(
  `  - source: github:quartz-community/bases-page
    enabled: true
    options: {}`,
  `  - source: github:quartz-community/bases-page
    enabled: true
    options:
      defaultViewType: cards`,
  "首页 Bases 默认视图=卡片(最新)",
);

writeFileSync(cfgPath, cfg);
console.log(`✅ patch-site:3 处定制已打进 ${cfgPath}`);
