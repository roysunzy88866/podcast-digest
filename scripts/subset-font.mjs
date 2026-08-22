#!/usr/bin/env node
// 普惠体子集「按实际用字现切」(2026-08-22 用户:手机加载不了 1.2MB 全 GB2312 子集 → 标题退回系统字、字形与 PC 不一致)。
// 主字体 assets/fonts/AlibabaPuHuiTi-subset.woff2(GB2312 常用字,当源用、不直接上线)→ 按当前站上「用普惠体的短文字」
// (标题/大类/播客名/嘉宾/固定 UI 串)现切出 AlibabaPuHuiTi-min.woff2,体积从 ~1.2MB 砍到几十 KB,手机秒加载、不再退回系统字。
// 正文长文走系统字(--pd-font),不进子集。每次部署重跑 → 新集标题用字自动覆盖,永不过期。
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync, rmSync, renameSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const MASTER = resolve(ROOT, "assets/fonts/AlibabaPuHuiTi-subset.woff2"); // 源(全 GB2312 常用字)
const EPISODES = resolve(ROOT, "data/episodes");

// 固定 UI 文案:凡是 custom.scss 里 font-family:var(--puhui) 的静态中文都要收进来,否则该字回退。
// 宁可多收(都是短串,几乎不增体积),不可漏。
const UI_LABELS = [
  "跨国深谈", "全部主题", "全部", "智能体", "创业与行业", "产品方法", "AI编程", "组织与领导力",
  "AI安全", "增长与销售", "职业与个人成长", "未分类",
  "按公司", "按播客", "随便看看", "最新", "最热", "关于本站", "我的收藏", "必读", "本集必读",
  "今天", "昨天", "前天", "全部金句", "接着看", "相关", "收藏本集", "返回", "条",
  "把几集英文播客变成能读的中文精华", "每期", "集", "分钟", "小时", "人名", "职位", "来源", "嘉宾", "主持",
].join("");

// 中文标点 + 全角符号(标题/UI 里会出现)
const PUNCT = "，。、；：？！“”‘’（）《》〈〉—…·「」【】〔〕～·・:;,.?!\"'()[]{}<>@#%&*+=/\\|_~-·";

function collectDynamic() {
  let s = "";
  if (!existsSync(EPISODES)) return s;
  for (const id of readdirSync(EPISODES)) {
    const dir = join(EPISODES, id);
    try {
      const meta = JSON.parse(readFileSync(join(dir, "meta.json"), "utf8"));
      s += [meta.title_en, meta.podcast, meta.guest_name, meta.guest_title, meta.host].filter(Boolean).join("");
      s += id; // id 前缀日期/slug 里的字符
    } catch (e) {
      if (existsSync(join(dir, "meta.json"))) console.warn(`⚠️ [subset-font] ${id}/meta.json 解析失败,该集标题字可能漏进子集:${e?.message ?? e}`); // GLM 011[3]:坏 JSON 不静默丢
    }
    try {
      const digest = JSON.parse(readFileSync(join(dir, "digest.json"), "utf8"));
      if (digest.title_zh) s += digest.title_zh; // 标题=普惠体主战场
    } catch (e) {
      if (existsSync(join(dir, "digest.json"))) console.warn(`⚠️ [subset-font] ${id}/digest.json 解析失败,标题字可能漏:${e?.message ?? e}`);
    }
  }
  return s;
}

function collectCategories() {
  const p = resolve(ROOT, "data/tag-taxonomy.json");
  if (!existsSync(p)) return "";
  try {
    const tax = JSON.parse(readFileSync(p, "utf8"));
    return JSON.stringify(tax); // 简单粗暴:整份分类表的字都收(短,含所有大类/别名中文)
  } catch { return ""; }
}

/** 收全字符集:ASCII 可打印 + 中文标点 + UI + 动态(标题/播客/嘉宾/分类)。去重。 */
export function buildCharset() {
  let ascii = "";
  for (let c = 0x20; c <= 0x7e; c++) ascii += String.fromCharCode(c);
  const all = ascii + PUNCT + UI_LABELS + collectCategories() + collectDynamic();
  return [...new Set([...all])].filter((c) => c && c !== "\n" && c !== "\r" && c !== "\t").join("");
}

function findPyftsubset() {
  const venv = resolve(ROOT, ".venv/bin/pyftsubset");
  if (process.env.PYFTSUBSET) return process.env.PYFTSUBSET;
  if (existsSync(venv)) return venv;
  return "pyftsubset"; // CI:pip install fonttools brotli 后在 PATH
}

/** 生成子集到 outPath(woff2)。返回 {chars, bytes}。fail-closed:pyftsubset 挂了抛错。 */
export function generateSubset(outPath) {
  if (!existsSync(MASTER)) throw new Error(`[subset-font] 找不到主字体 ${MASTER}`);
  const charset = buildCharset();
  const txt = join(tmpdir(), `pd-subset-chars-${process.pid}.txt`); // 临时文件进系统 tmp,不污染仓库
  writeFileSync(txt, charset);
  mkdirSync(dirname(outPath), { recursive: true });
  // GLM 011[1]:先写临时输出,验证成功后才原子替换最终路径 —— 否则 pyftsubset 中途失败会把
  // patch-site 刚拷进去的 committed 兜底文件写坏成 0 字节,fail-open「保留兜底」就不成立(手机拿到坏字体更糟)。
  const tmpOut = `${outPath}.tmp-${process.pid}.woff2`; // 与最终路径同目录 → renameSync 同盘原子,不会 EXDEV
  const r = spawnSync(findPyftsubset(), [
    MASTER, `--text-file=${txt}`, "--flavor=woff2", `--output-file=${tmpOut}`,
    "--layout-features=*", "--no-hinting", "--desubroutinize",
  ], { encoding: "utf8" });
  try { rmSync(txt, { force: true }); } catch { /* 清理失败无害 */ }
  if (r.status !== 0) {
    try { rmSync(tmpOut, { force: true }); } catch { /* 无害 */ }
    throw new Error(`[subset-font] pyftsubset 失败(exit ${r.status ?? "?"}${r.error ? ", " + r.error.message : ""}):${(r.stderr || "").slice(-300)}`);
  }
  const bytes = existsSync(tmpOut) ? readFileSync(tmpOut).length : 0;
  if (!bytes) { try { rmSync(tmpOut, { force: true }); } catch { /* 无害 */ } throw new Error("[subset-font] 输出为空(fail-closed,不覆盖兜底)"); }
  renameSync(tmpOut, outPath); // 验证通过才替换,兜底不被写坏
  return { chars: [...charset].length, bytes };
}

const isMain = (() => {
  try { return process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url); } catch { return false; }
})();
if (isMain) {
  const out = process.argv[2] || resolve(ROOT, "assets/fonts/AlibabaPuHuiTi-min.woff2");
  const { chars, bytes } = generateSubset(out);
  console.log(`✅ 普惠体子集现切:${chars} 字 → ${out}(${(bytes / 1024).toFixed(0)} KB)`);
}
