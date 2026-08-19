#!/usr/bin/env node
// iOS 主屏图标生成器(C29 收尾 · 2026-08-19 用户实测「图标还是显示『跨』字」后加)。
//
// 病根:原来主屏图标复用了 favicon(assets/logos/icon.png = 200x200 **RGBA**)。
// iOS 对 apple-touch-icon **不接受透明通道**,遇到带 alpha 的图直接弃用该图标,
// 退化成拿站名首字生成的系统图标(用户看到的「跨」)。尺寸也不是 iPhone 标准的 180x180。
//
// 故主屏图标单独出一张:180x180、白底、**不透明**(logo 是品牌深红,白底与站点默认浅色主题一致)。
// favicon 仍保留透明版(浏览器标签页要透明才好看)—— 两者刻意分成两个文件,别再合并。
//
// 用法:node tools/make-icons.mjs   (改了 assets/logos/icon.png 后重跑,产物入仓)
import sharp from "sharp";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const APPLE_ICON_SIZE = 180; // iPhone @3x 标准;iOS 会自己降采样给小图位

const src = resolve(ROOT, "assets/logos/icon.png");
const out = resolve(ROOT, "assets/logos/apple-touch-icon.png");

const info = await sharp(src)
  .resize(APPLE_ICON_SIZE, APPLE_ICON_SIZE, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .flatten({ background: { r: 255, g: 255, b: 255 } }) // 去 alpha —— 这一步就是修复本身,别删
  .png({ compressionLevel: 9 })
  .toFile(out);

const chk = await sharp(out).stats();
if (!chk.isOpaque) throw new Error("产出仍带透明通道 —— iOS 会弃用它,拒绝出图(fail-closed)");
console.log(`✅ apple-touch-icon.png ${info.width}x${info.height} ${info.size}B 不透明`);
