#!/usr/bin/env node
// 给普惠体子集打「内容指纹」文件名(cache-busting)——治 standalone app 长期显旧字体。
//
// 由来(2026-08-29 用户:「字体在 Safari 里是一样的,但作为独立 App 就不一样了」):
//   字体一直是固定名 /static/fonts/AlibabaPuHuiTi-min.woff2 + 7 天缓存(_headers)。而 iOS 从主屏启动的
//   standalone app 有**独立且顽固的缓存容器**,不像 Safari 会被系统清 → 它长期拿着旧那份 subset。
//   每次部署 subset-font 按当前标题重切、内容会变,但**文件名没变 → URL 没变 → standalone 永远不重取**,
//   于是新标题里的字(如「五根支柱」)在旧 subset 里没有、掉进系统字,和相邻普惠体字不一致。
//   (已实测线上 subset 含全部这些字形,非缺字 → 纯粹是缓存没换。)
//
// 修法:把内容 hash 塞进文件名(AlibabaPuHuiTi-min.<hash>.woff2)。内容一变文件名就变 → URL 变 →
//   所有客户端(含 standalone)强制取新;且可配 immutable 长缓存(deploy-site.sh 的 _headers 同步改)。
//
// 何时跑:deploy-site.sh 里 **subset-font 之后**(subset 成功、或装不上 fonttools 走 committed 兜底,
//   都行——指纹打在最终落地的那个文件上;patch-site 已先把 committed 兜底拷进 site,src 必存在)、
//   **quartz build 之前**(要改到 build 会读的 custom.scss / Head.tsx)。
//   deploy 每次 `rm -rf site` 重 clone,故 rm 掉的只是 site/ 里的临时副本,兜底源在主仓 assets/fonts/ 不动。
// 铁律同 patch-site:引用锚点找不到 = 硬错(throw),不静默放过(上游/本项目文件漂移必须被看见)。
import { readFileSync, writeFileSync, copyFileSync, existsSync, rmSync } from "node:fs";
import { createHash } from "node:crypto";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "AlibabaPuHuiTi-min.woff2";
const PATHREF = "/static/fonts/AlibabaPuHuiTi-min.woff2"; // custom.scss @font-face + Head.tsx preload 共用的引用串

/**
 * 给 siteDir 里的普惠体子集打内容指纹文件名,并把 custom.scss + Head.tsx 两处引用改到指纹名。
 * 返回 { hash, hashedName, hashedRef }。源字体缺失 / 任一引用锚点找不到 → throw(调用方决定退出码)。
 */
export function hashFont(siteDir) {
  const FONT_DIR = resolve(siteDir, "quartz/static/fonts");
  const src = resolve(FONT_DIR, BASE);
  if (!existsSync(src)) {
    throw new Error(`[hash-font] 找不到 ${src} —— patch-site 应已拷 committed 兜底、subset-font 应已生成。`);
  }

  const buf = readFileSync(src);
  const hash = createHash("sha256").update(buf).digest("hex").slice(0, 10);
  const hashedName = `AlibabaPuHuiTi-min.${hash}.woff2`;
  const hashedRef = `/static/fonts/${hashedName}`;
  copyFileSync(src, resolve(FONT_DIR, hashedName));

  /** 把文件里所有 PATHREF 改成指纹版;一次都没命中 = throw(引用锚点漂移必须被看见)。 */
  const rewrite = (path, why) => {
    const s = readFileSync(path, "utf8");
    if (!s.includes(PATHREF)) {
      throw new Error(`[hash-font] ${why}(${path})里找不到引用锚点「${PATHREF}」,无法打指纹。`);
    }
    writeFileSync(path, s.split(PATHREF).join(hashedRef));
    console.log(`  ✔ ${why} → ${hashedName}`);
  };
  rewrite(resolve(siteDir, "quartz/styles/custom.scss"), "custom.scss @font-face src");
  rewrite(resolve(siteDir, "quartz/components/Head.tsx"), "Head.tsx 普惠体 preload");

  // 引用已全部改到指纹名 → 删掉未打指纹的临时副本(留着只会被误引/占空间;真被旧 HTML 引到也会 404
  // 掉进兜底字,而 HTML 是 max-age=0 会立刻取到新 HTML/新指纹,窗口≈0)。兜底源在主仓 assets/fonts/,不受影响。
  rmSync(src, { force: true });
  return { hash, hashedName, hashedRef };
}

const isMain = (() => {
  try {
    return process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
})();
if (isMain) {
  const siteDir = process.argv[2] ? resolve(process.argv[2]) : resolve(ROOT, "site");
  try {
    const { hash, hashedName } = hashFont(siteDir);
    console.log(`✅ hash-font:普惠体子集指纹 = ${hash}(${hashedName});custom.scss + Head.tsx 已改引用,可 immutable 长缓存。`);
  } catch (e) {
    console.error(`✗ ${e?.message ?? e}`);
    process.exit(1);
  }
}
