#!/usr/bin/env node
// 写手对照实验(2026-10-08 用户选 A:「阅读体验还是很差,是你写不出好文案,还是被金句束缚了?」)。
// B 版 = 同一个 GLM、只给一页写作要求、直接读英文原稿,一口气写完;写完跑同一套事实层核对(gate-facts)。
// 只出样不发布:在副本里跑,输出 preview/<id>.简.md + 核对结果。
// 用法(云端 style-preview.yml mode=plain 调):node scripts/plain-write.mjs "<id1>,<id2>"
import { cpSync, mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, join, dirname } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { gateFacts } from "./gate-facts.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "preview");

const SYSTEM = `你是一位优秀的中文作者,擅长把英文访谈写成好读的中文文章。
下面是一期英文播客的完整文字稿(每行带时间和说话人)。请写一篇中文文章,让一个聪明、但不在这个行业的读者,在手机上 5–8 分钟读完,读得懂,也读得有兴趣。

怎么写:
- 像一篇好的杂志稿,不是会议纪要。开头两三句告诉读者:这是谁、聊了什么、为什么值得读。
- 按读者会关心的问题来组织,不按访谈顺序流水账。每 200–300 字一个「## 小标题」,小标题写成问题或结论。
- 段落短,一段两三句。句子短,用自然的中文,不要翻译腔。
- 嘉宾的比喻和行话,先用大白话讲清意思。
- 挑最有意思、最有用的讲透,次要的可以不讲。

诚实:
- 只写文字稿里有的事实。人名、公司名、数字都必须出自文字稿;拿不准的就不写。
- 引用嘉宾的话用「」,要忠于原意。
- 关键观点后面可以标 [mm:ss 说话人] 方便回原文,全篇 5–10 处即可。

最后用「## 本集带走」列 3–5 条要点(短横线列表)。
只输出文章本身:第一行「# 标题」,第二行起是正文。`;

const mmss = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

for (const id of String(process.argv[2] ?? "").split(",").map((s) => s.trim()).filter(Boolean)) {
  if (!/^\d{4}-\d{2}-\d{2}-[0-9a-z-]+$/.test(id)) { console.error(`跳过非法 id:${id}`); continue; }
  const src = join(ROOT, "data/episodes", id);
  const work = join(OUT, "work-plain", id);
  mkdirSync(dirname(work), { recursive: true });
  cpSync(src, work, { recursive: true });
  const meta = JSON.parse(readFileSync(join(src, "meta.json"), "utf8"));
  const segs = JSON.parse(readFileSync(join(src, "transcript.en.json"), "utf8"));
  const who = (s) => meta.speaker_map?.[s.speaker] ?? s.speaker ?? "?";
  const transcript = segs.map((s) => `[${mmss(s.start)} ${who(s)}] ${s.text.trim()}`).join("\n");
  const head = `节目:${meta.podcast ?? ""}\n英文标题:${meta.title_en ?? ""}\n\n`;
  const r = spawnSync("glm-ask", ["--system", SYSTEM, "--max-tokens", "8000", head + transcript], { encoding: "utf8", timeout: 600000, maxBuffer: 16 * 1024 * 1024 });
  if (r.status !== 0) { console.error(`❌ ${id} GLM 失败:${(r.stderr || "").slice(0, 200)}`); continue; }
  const md = String(r.stdout).replace(/^```[a-z]*\n?|\n?```\s*$/g, "").trim();
  const title = (md.match(/^# (.*)$/m) ?? [, ""])[1];
  const body = md.replace(/^# .*\n+/, "");
  const d = JSON.parse(readFileSync(join(work, "digest.json"), "utf8"));
  writeFileSync(join(work, "digest.json"), JSON.stringify({ ...d, title_zh: title, digest_md: body }));
  const g = gateFacts(work);
  const report = g.failures.map((f) => `- ${f.kind ?? ""} ${f.raw ?? f.name ?? ""} ${f.reason ?? ""}`.trim()).join("\n");
  writeFileSync(join(OUT, `${id}.简.md`), md + "\n");
  writeFileSync(join(OUT, `${id}.简.核对.txt`), `事实层核对:${g.failures.length ? `没过 ${g.failures.length} 条` : "全过"}\n${report}\n`);
  console.log(`✅ ${id}:${body.length} 字,事实层${g.failures.length ? `没过 ${g.failures.length} 条` : "全过"}`);
  if (report) console.log(report);
}
