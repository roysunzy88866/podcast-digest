#!/usr/bin/env node
// 每集配图:把集页上的官方图取下来,原样用。
//
// 用法:
//   node scripts/cover.mjs                      # 全库增量:只补还没有图的集(流水线默认)
//   node scripts/cover.mjs data/episodes/<id>   # 只做一集
//   node scripts/cover.mjs --force              # 重做(覆盖已有)
//   node scripts/cover.mjs --dry-run            # 只打印会做哪些集
//
// 产物:data/episodes/<id>/cover.jpg + meta.json 的 cover_image 字段
//
// ⚠️ 与音频不同,配图**入库**(不 gitignore):它是外部资源的快照,对方换图/删图我们就没了;
//    单张 ~30KB,千集约 30MB,可接受。
//
// 幂等:图在 = 不重做。增量:只补缺的。整条链**零 API 调用、零配额、零模型**。
//
// ── 两条曾经踩过的坑,别再走 ──
// ① 长宽比闸门是错的。上一轮定的规矩是「只收约 1:1,16:9 丢弃」,理由是「16:9 是 YouTube 缩略图,
//    裁方了只剩半截英文标题」。2026-07-26 把被丢掉的 10 张全下下来看过:**每一张都是带嘉宾脸的图**,
//    完全可用。那条闸门误杀了十分之一的库。现在不闸长宽比,原图存下来,怎么裁交给卡片的 CSS。
// ② RSS 里没有图。流水线用的 www feed,item 级 `<itunes:image>` 一个都没有(实抓 20 个 item 全无);
//    文档里「每集有图」来自 api.substack feed,而那个域封 runner IP(drift #28)。图只能从集页 og:image 抠。

import { existsSync, readFileSync, readdirSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const EPISODES = join(ROOT, "data/episodes");

/** 存图的长边上限。卡片最大展示 ~145px,3 倍屏 435px;640 留了余量给单集页将来用大图。 */
const MAX_EDGE = 640;
/** 小于这个字节数的下载物当失败(多半是 404 页面而非图片)。 */
const MIN_BYTES = 3000;

/**
 * 从集页 HTML 抠官方图直链。
 * Substack 的 og:image 是 CDN 变换链接,尾部 URL-encode 了**原图**直链(实测 Lenny's:2048×2048 PNG)。
 * 必须取原图:变换图被裁成 1200×600,构图不完整。
 * 非 Substack 源没有这层编码 → 直接用 og:image 本身。
 */
export function officialImageFromHtml(html) {
  const og = (String(html).match(/property="og:image"\s+content="([^"]+)"/) || [])[1] || "";
  if (!og) return "";
  const enc = (og.match(/https%3A%2F%2F.+$/) || [])[0];
  return enc ? decodeURIComponent(enc) : og;
}

let ffmpegOk = null;
function hasFfmpeg() {
  if (ffmpegOk === null) ffmpegOk = spawnSync("ffmpeg", ["-version"], { stdio: "ignore" }).status === 0;
  return ffmpegOk;
}

/** 读图片长宽(ffprobe)。读不出返回 null —— 多半下到的不是图片。 */
export function probeSize(path) {
  const r = spawnSync("ffprobe", ["-v", "error", "-select_streams", "v:0",
    "-show_entries", "stream=width,height", "-of", "csv=p=0", path], { encoding: "utf8" });
  const m = String(r.stdout).trim().match(/^(\d+),(\d+)/);
  return m ? { w: +m[1], h: +m[2] } : null;
}

/**
 * 缩到长边 MAX_EDGE,**保持原始长宽比,不裁切**。
 * 不裁的理由:裁法是展示层的事(卡片用 object-fit: cover 就够),存原比例才不会把决定焊死在文件里 ——
 * 将来改卡片尺寸/改成不裁,都不用重新下载一遍。
 */
function shrink(srcPath, outPath, { w, h }) {
  if (!hasFfmpeg()) return false;
  const vf = w >= h ? `scale=${MAX_EDGE}:-2` : `scale=-2:${MAX_EDGE}`;
  const args = ["-y", "-v", "error", "-i", srcPath];
  if (Math.max(w, h) > MAX_EDGE) args.push("-vf", vf);
  args.push("-q:v", "4", outPath);
  const r = spawnSync("ffmpeg", args, { stdio: "inherit" });
  return r.status === 0 && existsSync(outPath) && statSync(outPath).size > 0;
}

function curl(url, out) {
  return spawnSync("curl", ["-sL", "--max-time", "40", "-H", "User-Agent: Mozilla/5.0", "-o", out, url],
    { stdio: "ignore" }).status === 0;
}

/**
 * 给一集配图。返回 "ok" | "skip" | "no-url" | "fetch-failed" | "not-image"。
 */
export function coverOne(dir, opts = {}) {
  const metaPath = join(dir, "meta.json");
  const meta = JSON.parse(readFileSync(metaPath, "utf8"));
  const cur = meta.cover_image;

  if (!opts.force && cur?.file && existsSync(join(dir, cur.file))) return "skip";

  // 存量集的 meta 里没有这个字段(流水线以前从没取过图)→ 回头去集页现抠一次并写回。
  // 抠不到就写空串,下次不再重抠(空串 !== undefined)。
  if (meta.cover_official_url === undefined && meta.source_url) {
    const r = spawnSync("curl", ["-sL", "--max-time", "30", "-H", "User-Agent: Mozilla/5.0", meta.source_url],
      { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 });
    meta.cover_official_url = r.status === 0 ? officialImageFromHtml(r.stdout) : "";
  }
  const url = meta.cover_official_url;
  const save = (r) => (writeFileSync(metaPath, JSON.stringify(meta, null, 2) + "\n"), r);
  if (!url) return save("no-url");

  const tmp = join(dir, ".cover-src");
  try {
    if (!curl(url, tmp) || !existsSync(tmp) || statSync(tmp).size < MIN_BYTES) return save("fetch-failed");
    const sz = probeSize(tmp);
    if (!sz) return save("not-image");
    if (!shrink(tmp, join(dir, "cover.jpg"), sz)) return save("fetch-failed");
    meta.cover_image = {
      file: "cover.jpg",
      source: "official",
      origin_url: url,
      origin_px: `${sz.w}x${sz.h}`,
      aspect: +(sz.w / sz.h).toFixed(3),
      fetched_at: new Date().toISOString(),
    };
    return save("ok");
  } finally {
    if (existsSync(tmp)) unlinkSync(tmp);
  }
}

function main() {
  const argv = process.argv.slice(2);
  const force = argv.includes("--force");
  const dry = argv.includes("--dry-run");
  const only = argv.find((a) => !a.startsWith("-"));

  if (!existsSync(EPISODES)) {
    console.log("没有 data/episodes,跳过配图。");
    return;
  }
  if (!hasFfmpeg()) {
    console.log("⚠️ 找不到 ffmpeg,配图跳过(流水线其余步骤不受影响)。");
    return;
  }

  const dirs = only
    ? [resolve(ROOT, only)]
    : readdirSync(EPISODES, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => join(EPISODES, d.name))
        .sort();

  const tally = {};
  for (const dir of dirs) {
    if (!existsSync(join(dir, "meta.json"))) continue;
    const id = dir.split("/").pop();
    if (dry) {
      console.log(`  会处理 ${id}`);
      continue;
    }
    const r = coverOne(dir, { force });
    tally[r] = (tally[r] ?? 0) + 1;
    if (r !== "skip") console.log(`  ${id} → ${r}`);
  }
  const n = Object.values(tally).reduce((a, b) => a + b, 0);
  console.log(`\n配图 ${n} 集:` + Object.entries(tally).map(([k, v]) => `${k} ${v}`).join(" · "));
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) main();
