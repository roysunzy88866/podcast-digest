#!/usr/bin/env node
// C41 · 可读性 v2 样张(ADR 0027:用户「先看 2 期前后对照,认可后才对新内容生效」)。
// 在副本里用新写法(READABLE_V2=1)重跑 浓缩 + polish-zh,输出新旧正文对照;**不碰仓库里的集、不发布**。
// 用法(云端 style-preview.yml 调):node scripts/style-preview.mjs "<id1>,<id2>"
import { cpSync, mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, join, dirname } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { segmentBody, PARA_MAX_HAN } from "./render.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "preview");
const ids = String(process.argv[2] ?? "").split(",").map((s) => s.trim()).filter(Boolean);
if (!ids.length || ids.some((id) => !/^\d{4}-\d{2}-\d{2}-[0-9a-z-]+$/.test(id))) { console.error("用法: node scripts/style-preview.mjs <id1>,<id2>(只收集 id)"); process.exit(2); }

const page = (d, body) => `# ${d.title_zh ?? ""}\n\n> ${d.tldr ?? ""}\n\n${body}\n`;
for (const id of ids) {
  const src = join(ROOT, "data/episodes", id);
  if (!existsSync(join(src, "translation.zh.json"))) { console.error(`跳过 ${id}:仓库里没有译文`); continue; }
  const work = join(OUT, "work", id);
  mkdirSync(dirname(work), { recursive: true });
  cpSync(src, work, { recursive: true });
  const old = JSON.parse(readFileSync(join(src, "digest.json"), "utf8"));
  // C42:MODE=v3 → 新写手(GLM-5.3 读英文原稿一口气写)+ 轻量修,再跑一遍事实层核对看结果
  const v3 = process.env.MODE === "v3";
  const env = { ...process.env, READABLE_V2: "1", ...(v3 ? { DIGEST_V3: "1" } : {}) };
  for (const step of ["condense.mjs", "polish-zh.mjs", ...(v3 ? ["gate-facts.mjs"] : [])]) {
    const r = spawnSync("node", [join(ROOT, "scripts", step), work], { cwd: ROOT, stdio: "inherit", env });
    if (r.status !== 0 && step !== "gate-facts.mjs") { console.error(`❌ ${id} ${step} 失败`); process.exit(1); }
    if (step === "gate-facts.mjs") console.log(`事实层核对:${r.status === 0 ? "全过" : "没过(见上)"}`);
  }
  const neu = JSON.parse(readFileSync(join(work, "digest.json"), "utf8"));
  writeFileSync(join(OUT, `${id}.旧.md`), page(old, segmentBody(old.digest_md)));
  writeFileSync(join(OUT, `${id}.新.md`), page(neu, segmentBody(neu.digest_md, { maxChars: PARA_MAX_HAN })));
  console.log(`✅ ${id}:旧 ${old.digest_md.length} 字 → 新 ${neu.digest_md.length} 字`);
}
