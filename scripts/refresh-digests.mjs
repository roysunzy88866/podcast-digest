#!/usr/bin/env node
// 存量回刷(2026-07-24 用户拍板建通道;2026-07-30 用户拍板升级为「按 C15 新浓缩规范重刷」)
// —— **云端真实流程专用入口**(用户明文:翻新必须云端真实环境/真实流程做,本地 Claude 只造入口不碰内容)。
//
// 用法:node scripts/refresh-digests.mjs [--ids id1,id2] [--force] [--no-audio]   # 缺省=全部已发布集(有 digest 且有集页)
//   --force:绕过「已合规跳过」,强制重跑每一集(用于提示词语义/口味改动,styleErrs 检不出的那类)
//   --no-audio:只改文字、不重录音频(保留旧音频;配音后补或另行重设计时用)。配 deploy-site 上站(不跑 gate-all)
//
// 每集流程(fail-safe:新版过不了闸门 → 回滚老版本;老版本本就过闸门,回刷失败零损失不堵发布):
//   备份 digest/meta/报告 → FORCE 重浓缩(绕 .digest-raw.txt 缓存,按 C15 新规范)→ 判官 → 金句规整
//   → 金句闸门 → 事实闸门(败先走 repair-facts 单点救再重验)→ 全过:重合成音频、保留新版
//   → 任一环节败/抛:恢复备份、删半成品音频不动老音频
//
// C15 收口(2026-07-30 拍板,Gherkin 见 docs/user-stories.md「C15 后续两刀」):
//   · **只烧该烧的钱**:取源/翻译缓存(transcript/translation.zh.json)原样复用,不重跑;
//     **实体抽取不重跑**(entities.json 不动 —— 实体页金句嵌入由 build-entities 从新 digest 现算,
//     evidence 锚在转写稿,均无陈旧耦合);嘉宾字段不重抽;TTS 走 edge-tts 免费。
//   · **断点续跑**:digest 已过 C15 口语体机器卡点(alreadyConformant)= 已按新规范刷过 → 跳过。
//     判据理由:C15 浓缩闸门保证新产出必过 styleErrs;存量 57/57 实测全不合规(2026-07-30 底账)
//     → 零误跳、零新增状态,判据与浓缩卡点同一份代码,永不漂移。57 集长 run 中途挂,重跑只补没刷完的。
// 个别集回刷失败不炸整批(回滚后照常发布老版),末尾汇总账;调用方随后统一 rebuild + gate-all。
import { readdirSync, existsSync, copyFileSync, unlinkSync, readFileSync, realpathSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { styleErrs, validate } from "./condense.mjs"; // 有 isMain 守卫,import 无副作用(不烧钱)

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const EPISODES = join(ROOT, "data/episodes");

const run = (env, ...args) => spawnSync("node", args, { cwd: ROOT, stdio: "inherit", env: { ...process.env, ...env } });
const ok = (env, ...args) => run(env, ...args).status === 0;

// 回刷只对**已发布集**(有 digest 且有集页)。半成品(有 digest 无页,如判官/抽实体转瞬失败)不碰:
// 它们的 digest 从没过过闸,回刷失败回滚后若留下新生成物,会把它误升格成已发布集、拿旧稿过闸堵死整线
// (drift #33,refresh=all 首跑 06-28 实测踩中)。半成品归 C14 补活链,不归回刷。
const isPublished = (id) => existsSync(join(ROOT, "samples", `${id}.md`));

/** 断点续跑判据:digest 结构合格 且 digest_md 过 C15 口语体机器卡点 = 已按新规范刷过。 */
export function alreadyConformant(digest) {
  if (!digest || typeof digest !== "object") return false;
  return validate(digest).length === 0 && styleErrs(digest.digest_md).length === 0;
}

function pickIds() {
  const i = process.argv.indexOf("--ids");
  const ids = i >= 0 && process.argv[i + 1]
    ? process.argv[i + 1].split(",").map((s) => s.trim()).filter(Boolean)
    : readdirSync(EPISODES, { withFileTypes: true })
        .filter((d) => d.isDirectory() && existsSync(join(EPISODES, d.name, "digest.json")))
        .map((d) => d.name);
  const skipped = ids.filter((id) => !isPublished(id));
  if (skipped.length) console.log(`⏭ 跳过 ${skipped.length} 个半成品(有 digest 无集页,归补活链):${skipped.join(", ")}`);
  return ids.filter(isPublished);
}

/**
 * 回刷一集。副作用可注入(测试喂假 exec 只记账,绝不真跑流水线烧钱):
 * @param opts.episodesDir 集目录根(默认 data/episodes)
 * @param opts.exec (env, ...args)=>bool:跑一步脚本,0 退出为 true(默认真 spawnSync)
 */
export function refreshOne(id, { episodesDir = EPISODES, exec = ok, force = false, noAudio = false } = {}) {
  const dir = join(episodesDir, id);
  if (!existsSync(join(dir, "digest.json"))) return { id, status: "skip", why: "无 digest(半成品,回刷只对已完成集)" };

  // C15 断点续跑:已按新规范刷过 → 零动作跳过(坏 JSON 读不出 → 当没刷过,照常走重刷,响一声不静默)。
  // ⚠️ 合规判据只看机器可检的 styleErrs/validate;**提示词语义/口味改动(如开场落地背景)styleErrs 检不出**,
  //    老稿会被误判「已合规」跳过 → 改动落不了地。这类改动用 --force 绕过合规检查、强制重跑(ADR 0025 实证)。
  let cur = null;
  try { cur = JSON.parse(readFileSync(join(dir, "digest.json"), "utf8")); }
  catch (e) { console.warn(`⚠️ ${id} digest.json 读取/解析失败(${e.message})→ 按未刷过处理,走重刷`); cur = null; }
  if (!force && cur && alreadyConformant(cur)) return { id, status: "conformant", why: "已过 C15 口语体机器卡点(styleErrs 全零),跳过不重烧" };

  // 备份。meta.json 也备:C5.1 起 condense 会把 title_zh 写回 meta——回滚必须彻底。
  // entities.json 仍在清单里:回刷本身不动它(C15 拍板),备份是无害保险,防未来有人往链里加会动它的步骤。
  // 备份时不存在的文件若被回刷过程新建,回滚时必须**删掉**——只还原备过的、留下新建的
  // = 半成品被误升格成已发布集(drift #33 真踩过)。判官/修复报告也进清单(GLM 20260724-005[1])。
  const backups = [];
  const created = []; // 备份时不存在 → 回滚时删
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
    // 链上没有取源/翻译(缓存复用不重烧)、没有 extract-entities / extract-guest(2026-07-30 拍板不重跑)
    if (!exec({ FORCE: "1" }, "scripts/condense.mjs", rel)) throw new Error("重浓缩失败");
    if (!exec({}, "scripts/judge-quotes.mjs", rel)) throw new Error("判官失败");
    if (!exec({}, "scripts/repair-quotes.mjs", rel)) throw new Error("金句修复失败");
    if (!exec({}, "scripts/gate.mjs", rel)) throw new Error("金句三联闸门未过");
    if (!exec({}, "scripts/gate-facts.mjs", rel)) {
      // 单点救稿回路(与 processEpisode 同款):修没修好都以重验为准
      exec({}, "scripts/repair-facts.mjs", rel);
      if (!exec({}, "scripts/gate-facts.mjs", rel)) throw new Error("事实层未过(定点重写后仍未过)");
    }
    // 全过 → 新稿配新音频(源文本变了,gate-audio 源一致性要求重合成)。
    // --no-audio(2026-08-28 用户「先改文字、配音后补」+ 配音要重新设计不做无聊朗读):只改文字、
    //   不碰音频,保留旧音频(source_sha256 会陈旧,由日后配音重做/云端 ensure-audio 自愈)。
    //   走 deploy-site 上站(只补缺音频、不跑 gate-all,陈旧音频不拦发布);别本地重录(慢的大头)。
    if (!noAudio) {
      audioTouched = true;
      // C38 口播稿:digest 变了 → FORCE 重生成口播稿再配音(best-effort,失败 tts 回落念 digest_md,不阻塞)。
      //   FORCE=1 绕过「已有合格 voice_script 跳过」幂等守卫——重浓缩后旧口播稿已过时,必须按新精华重写。
      //   --no-audio 那支不动:旧口播稿+旧音频保持一致,别让 source_sha256 白陈旧。
      exec({ FORCE: "1" }, "scripts/voice-script.mjs", rel);
      for (const f of ["audio.mp3", "audio.meta.json"]) { const p = join(dir, f); if (existsSync(p)) unlinkSync(p); }
      if (!exec({}, "scripts/tts.mjs", rel)) throw new Error("音频重合成失败");
    }
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
  const force = process.argv.includes("--force"); // 提示词语义/口味改动:styleErrs 检不出,强制重跑绕合规跳过
  const noAudio = process.argv.includes("--no-audio"); // 只改文字、不重录音频(配音后补/另设计)
  const ids = pickIds();
  console.log(`🔄 存量回刷(C15 新浓缩规范):${ids.length} 集${force ? "(--force 强制重跑,不看合规)" : "(已合规跳过)"}${noAudio ? "(--no-audio 只改文字、留旧音频)" : ""};新版过不了闸门自动回滚老版,不堵发布`);
  const results = ids.map((id) => {
    console.log(`\n══════ 回刷 ${id}`);
    const r = refreshOne(id, { force, noAudio });
    console.log(
      r.status === "refreshed" ? `✅ ${id} 回刷成功`
      : r.status === "conformant" ? `⏩ ${id} 已按新规范,跳过(断点续跑)`
      : `↩️ ${id} ${r.status}:${r.why}(老版本保留)`,
    );
    return r;
  });
  const done = results.filter((r) => r.status === "refreshed").length;
  const conf = results.filter((r) => r.status === "conformant").length;
  const back = results.filter((r) => r.status === "rolledback");
  console.log(`\n══ 回刷汇总:成功 ${done} / 已合规跳过 ${conf} / 回滚 ${back.length}(总 ${ids.length})`);
  for (const r of back) console.log(`   ↩️ ${r.id} — ${r.why}`);
  // 个别回滚不算整体失败(老版本照常发布);真动手的集一集都没成才非 0(全军覆没值得响)。
  // 全部已合规跳过(断点续跑收尾轮)= 成功,不许误报红(attempted=0)。
  const attempted = ids.length - conf;
  process.exit(done > 0 || attempted === 0 ? 0 : 1);
}
