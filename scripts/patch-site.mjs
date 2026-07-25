#!/usr/bin/env node
// C10/C11 · site/ 构建定制补丁(site/ 是 gitignore 构建区,每次从上游模板重建 →
// 一切定制必须收在这里,bootstrap-site.sh 与 pipeline.yml 在 plugin install 之后、build 之前调用)。
//
// C10 三刀(2026-07-24 用户拍板,需求共创/首页交互改版.md):
//   ① enablePopovers → false(全站关悬浮预览弹框)
//   ② pageTitle → 英文播客中文精华(站名)
//   ③ bases-page 默认视图 = cards(否则首页页签默认落在表格)
// C11 视觉改版(2026-07-25 用户拍板,需求共创/视觉调研-播客UI.md §七 · 方向 A 少数派风):
//   ④ 主题色 = 暖红亮暗双套(secondary=红;中性走少数派暖调)
//   ⑤ 默认浅色:Head 注入种子脚本(首访无记忆→light;用户切换仍记忆)
//   ⑥ 注入 custom.scss(普惠体标题/卡片色带/金句风格)+ 自托管普惠体子集字体
//
// 铁律:替换目标找不到 = 硬错退出(上游模板漂移必须被看见,绝不静默跳过)。
import { readFileSync, writeFileSync, copyFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const cfgPath = process.argv[2] || resolve(ROOT, "site/quartz.config.yaml");
const SITE = dirname(cfgPath);

let cfg = readFileSync(cfgPath, "utf8");

/** 在字符串 s 上精确替换一次;找不到硬错(防上游默认值变了补丁静默失效) */
function replaceOnce(s, from, to, why) {
  if (!s.includes(from)) {
    console.error(`✗ patch-site:找不到「${why}」的替换锚点 —— 上游模板可能变了,人工核对后再跑。`);
    process.exit(1);
  }
  console.log(`  ✔ ${why}`);
  return s.replace(from, to);
}
const patch = (from, to, why) => { cfg = replaceOnce(cfg, from, to, why); };

/** 补丁另一个文件(Head.tsx 等) */
function patchFile(path, from, to, why) {
  const s = readFileSync(path, "utf8");
  writeFileSync(path, replaceOnce(s, from, to, why));
}

// ── C10 三刀 ──
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

// ── C11 ④ 主题色:暖红亮暗双套(少数派暖调中性 + 红 accent)──
patch(
  `      lightMode:
        light: "#faf8f8"
        lightgray: "#e5e5e5"
        gray: "#b8b8b8"
        darkgray: "#4e4e4e"
        dark: "#2b2b2b"
        secondary: "#284b63"
        tertiary: "#84a59d"
        highlight: rgba(143, 159, 169, 0.15)
        textHighlight: "#fff23688"`,
  `      lightMode:
        light: "#faf8f6"
        lightgray: "#ece7e2"
        gray: "#8c857f"
        darkgray: "#33302e"
        dark: "#232222"
        secondary: "#e0392b"
        tertiary: "#b32c21"
        highlight: rgba(224, 57, 43, 0.10)
        textHighlight: "#fff2a8aa"`,
  "亮色主题(暖红)",
);
patch(
  `      darkMode:
        light: "#161618"
        lightgray: "#393639"
        gray: "#646464"
        darkgray: "#d4d4d4"
        dark: "#ebebec"
        secondary: "#7b97aa"
        tertiary: "#84a59d"
        highlight: rgba(143, 159, 169, 0.15)
        textHighlight: "#b3aa0288"`,
  `      darkMode:
        light: "#1a1917"
        lightgray: "#322e2a"
        gray: "#8f877e"
        darkgray: "#d7d2cb"
        dark: "#ece7e1"
        secondary: "#ff6455"
        tertiary: "#ff8478"
        highlight: rgba(255, 100, 85, 0.14)
        textHighlight: "#b3aa0288"`,
  "深色主题(暖红)",
);

writeFileSync(cfgPath, cfg);
console.log(`✅ patch-site:配置补丁已打进 ${cfgPath}`);

// ── C11 ⑤ 默认浅色:Head 首子节点注入种子脚本(在框架主题 prescript 之前跑)──
patchFile(
  resolve(SITE, "quartz/components/Head.tsx"),
  `    return (
      <head>
        <title>{title}</title>`,
  `    return (
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: \`try{if(!localStorage.getItem('theme')){localStorage.setItem('theme','light');document.documentElement.setAttribute('saved-theme','light')}}catch(e){}\`,
          }}
        />
        <title>{title}</title>`,
  "默认浅色种子脚本(Head)",
);

// ── C11 ⑥ 注入自定义样式 + 自托管普惠体子集 ──
copyFileSync(resolve(ROOT, "assets/styles/custom.scss"), resolve(SITE, "quartz/styles/custom.scss"));
console.log("  ✔ custom.scss → site/quartz/styles/");
mkdirSync(resolve(SITE, "quartz/static/fonts"), { recursive: true });
copyFileSync(
  resolve(ROOT, "assets/fonts/AlibabaPuHuiTi-subset.woff2"),
  resolve(SITE, "quartz/static/fonts/AlibabaPuHuiTi-subset.woff2"),
);
console.log("  ✔ 普惠体子集 → site/quartz/static/fonts/");
console.log(`✅ patch-site:C11 视觉定制(主题色/默认浅色/样式/字体)已就位`);
