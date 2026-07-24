#!/usr/bin/env node
// 存量翻新(2026-07-24 用户拍板):按新叙事骨架重浓缩已完成集 —— **云端真实流程专用入口**
// (用户明文:翻新必须云端真实环境/真实流程做,本地 Claude 只造入口不碰内容)。
//
// 用法:node scripts/refresh-digests.mjs [--ids id1,id2]   # 缺省=data/episodes 全部已完成集
//
// 每集流程(fail-safe:新版过不了闸门 → 回滚老版本;老版本本就过闸门,翻新失败零损失不堵发布):
//   备份 digest/entities → FORCE 重浓缩(新骨架)→ 判官 → 金句修复 → FORCE 重抽实体
//   → 金句闸门 → 事实闸门(败先走 repair-facts 单点救再重验)→ 全过:重合成音频、保留新版
//   → 任一环节败/抛:恢复备份、删半成品音频不动老音频
// 个别集翻新失败不炸整批(回滚后照常发布老版),末尾汇总账;调用方随后统一 rebuild + gate-all。
import { readdirSync, existsSync, copyFileSync, unlinkSync, realpathSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const EPISODES = join(ROOT, "data/episodes");

const run = (env, ...args) => spawnSync("node", args, { cwd: ROOT, stdio: "inherit", env: { ...process.env, ...env } });
const ok = (env, ...args) => run(env, ...args).status === 0;

// 翻新只对**已发布集**(有 digest 且有集页)。半成品(有 digest 无页,如判官/抽实体转瞬失败)不碰:
// 它们的 digest 从没过过闸,翻新失败回滚后若留下新生成物,会把它误升格成已发布集、拿旧稿过闸堵死整线
// (drift #33,refresh=all 首跑 06-28 实测踩中)。半成品归 backfill 重试链,不归翻新。
const isPublished = (id) => existsSync(join(ROOT, "samples", `${id}.md`));

function pickIds() {
  const i = process.argv.indexOf("--ids");
  const ids = i >= 0 && process.argv[i + 1]
    ? process.argv[i + 1].split(",").map((s) => s.trim()).filter(Boolean)
    : readdirSync(EPISODES, { withFileTypes: true })
        .filter((d) => d.isDirectory() && existsSync(join(EPISODES, d.name, "digest.json")))
        .map((d) => d.name);
  const skipped = ids.filter((id) => !isPublished(id));
  if (skipped.length) console.log(`⏭ 跳过 ${skipped.length} 个半成品(有 digest 无集页,归 backfill 重试链):${skipped.join(", ")}`);
  return ids.filter(isPublished);
}

function refreshOne(id) {
  const dir = join(EPISODES, id);
  if (!existsSync(join(dir, "digest.json"))) return { id, status: "skip", why: "无 digest(半成品,翻新只对已完成集)" };
  // 备份。meta.json 也备:C5.1 起 condense 会把 title_zh 写回 meta——回滚必须彻底。
  // 备份时不存在的文件(如老集缺 entities)若被翻新过程新建,回滚时必须**删掉**——
  // 只还原备过的、留下新建的 = 半成品被误升格成已发布集(drift #33 真踩过)。
  const backups = [];
  const created = []; // 备份时不存在 → 回滚时删
  // 判官/修复报告也进清单(GLM 20260724-005[1]):否则回滚后留下「被毙那版的报告」,账实不符
  for (const f of ["digest.json", "entities.json", "meta.json", "judge-report.json", "repair-report.json"]) {
    const p = join(dir, f);
    if (existsSync(p)) { copyFileSync(p, p + ".bak"); backups.push(f); }
    else created.push(f);
  }
  // ⚠️ 音频只在真被动过(进到重合成那步)才随回滚清理——失败发生在 tts 之前时,audio.mp3 还是
  //    配老稿的好音频,乱删=refresh run 的 gate-all 音频层白炸(GLM 20260724-002[1] 抓到,判 save)
  let audioTouched = false;
  const rollback = () => {
    for (const f of backups) copyFileSync(join(dir, f + ".bak"), join(dir, f));
    for (const f of created) { const p = join(dir, f); if (existsSync(p)) unlinkSync(p); } // 新建物删净(drift #33)
    if (audioTouched) for (const f of ["audio.mp3", "audio.meta.json"]) { const p = join(dir, f); if (existsSync(p)) unlinkSync(p); }
  };
  const cleanup = () => { for (const f of backups) { const p = join(dir, f + ".bak"); if (existsSync(p)) unlinkSync(p); } };

  try {
    const rel = join("data/episodes", id);
    if (!ok({ FORCE: "1" }, "scripts/condense.mjs", rel)) throw new Error("重浓缩失败");
    if (!ok({}, "scripts/judge-quotes.mjs", rel)) throw new Error("判官失败");
    if (!ok({}, "scripts/repair-quotes.mjs", rel)) throw new Error("金句修复失败");
    if (!ok({ FORCE: "1" }, "scripts/extract-entities.mjs", rel)) throw new Error("重抽实体失败");
    if (!ok({}, "scripts/gate.mjs", rel)) throw new Error("金句三联闸门未过");
    if (!ok({}, "scripts/gate-facts.mjs", rel)) {
      // 单点救稿回路(与 processEpisode 同款):修没修好都以重验为准
      ok({}, "scripts/repair-facts.mjs", rel);
      if (!ok({}, "scripts/gate-facts.mjs", rel)) throw new Error("事实层未过(定点重写后仍未过)");
    }
    // 全过 → 新稿配新音频(源文本变了,gate-audio 源一致性要求重合成)
    audioTouched = true;
    for (const f of ["audio.mp3", "audio.meta.json"]) { const p = join(dir, f); if (existsSync(p)) unlinkSync(p); }
    if (!ok({}, "scripts/tts.mjs", rel)) throw new Error("音频重合成失败");
    cleanup();
    return { id, status: "refreshed" };
  } catch (e) {
    rollback();
    cleanup();
    return { id, status: "rolledback", why: e.message };
  }
}

// isMain 守卫(项目惯例,含中文路径百分号编码坑,写法照 extract-entities.mjs):
// 本脚本会真调 GLM 花钱跑内容 —— 被 import 绝不许执行(2026-07-24 本地误 import 实测教训,当场烧了真钱)。
const isMain = (() => {
  try { return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url); } catch { return false; }
})();
if (isMain) {
  const ids = pickIds();
  console.log(`🔄 存量翻新:${ids.length} 集(新版过不了闸门自动回滚老版,不堵发布)`);
  const results = ids.map((id) => {
    console.log(`\n══════ 翻新 ${id}`);
    const r = refreshOne(id);
    console.log(r.status === "refreshed" ? `✅ ${id} 翻新成功` : `↩️ ${id} ${r.status}:${r.why}(老版本保留)`);
    return r;
  });
  const done = results.filter((r) => r.status === "refreshed").length;
  const back = results.filter((r) => r.status === "rolledback");
  console.log(`\n══ 翻新汇总:成功 ${done}/${ids.length},回滚 ${back.length}`);
  for (const r of back) console.log(`   ↩️ ${r.id} — ${r.why}`);
  // 个别回滚不算整体失败(老版本照常发布);一集都没成才非 0(全军覆没值得响)
  process.exit(done > 0 || ids.length === 0 ? 0 : 1);
}
