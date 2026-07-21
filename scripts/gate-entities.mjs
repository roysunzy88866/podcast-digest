#!/usr/bin/env node
// C3 Scenario 5 · 实体层机器闸门(死链 + 实体页产物一致性 + 实体属性事实层)
//
// 补 C3 新增产物(entities.json / 实体页 / 集页双链)的三道闸门,进 gate-all→pre-commit + verify:c3:
//   ③ 死链:集页/实体页里每个 [[X]] 都要有对应页;![[集#^块]] 的块必须真存在于那一集
//   ④ 实体页产物一致性:用 build-entities 的**同一套代码**重算,与 samples/entities/ 逐字比 —— 防手改/陈旧
//   ① 实体属性事实层:how_described 里的专名/数字回原文(复用 gate-facts.checkProse,与 D17 同源)
//
// fail-closed:判不了(缺文件/缺字段)= 不过,不静默放行(本项目在 gate/gate-all/gate-facts 打过三次同款补丁)。
import { readFileSync, existsSync, readdirSync, realpathSync } from "node:fs";
import { resolve, dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { checkProse, buildFactIndex } from "./gate-facts.mjs";
import { loadAllEpisodes, buildAllPages } from "./build-entities.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** 解析 markdown 里所有 wikilink:[[t]] / [[t|alias]] / [[t#^b]] / ![[t#^b]] → [{embed,target,block}] */
export function collectLinks(md) {
  const out = [];
  for (const m of String(md).matchAll(/(!?)\[\[([^\]]+)\]\]/g)) {
    const embed = m[1] === "!";
    let inner = m[2];
    inner = inner.split("|")[0]; // 去别名管道
    let block = null;
    const h = inner.indexOf("#");
    if (h >= 0) {
      block = inner.slice(h + 1).replace(/^\^/, ""); // #^q1 → q1
      inner = inner.slice(0, h);
    }
    out.push({ embed, target: inner.trim(), block });
  }
  return out;
}

/** 一集集页里存在的块 ID(^q1 …)集合 */
function blocksInPage(md) {
  return new Set([...String(md).matchAll(/\^([a-z0-9]+)\b/g)].map((m) => m[1]));
}

/**
 * ③ 死链:每个 [[target]] 要么是集 id(有 samples/<id>.md)、要么是实体 file(有 samples/entities/<file>.md);
 *    带块引用的 target 必须是集页且该块真存在。
 */
export function checkDeadLinks({ pages, episodeIds, entityFiles, episodeBlocks }) {
  const failures = [];
  const valid = new Set([...episodeIds, ...entityFiles]);
  for (const { file, md } of pages) {
    for (const lk of collectLinks(md)) {
      if (!valid.has(lk.target)) {
        failures.push({ kind: "死链", file, reason: `[[${lk.target}]] 无对应页(既不是集 id 也不是实体页)` });
        continue;
      }
      if (lk.block) {
        if (!episodeIds.has(lk.target)) {
          failures.push({ kind: "死链-块", file, reason: `![[${lk.target}#^${lk.block}]] 的目标不是集页,块引用无处可落` });
        } else if (!(episodeBlocks.get(lk.target) ?? new Set()).has(lk.block)) {
          failures.push({ kind: "死链-块", file, reason: `![[${lk.target}#^${lk.block}]] 的块 ^${lk.block} 不存在于该集页(疑手改/陈旧)` });
        }
      }
    }
  }
  return failures;
}

/** ④ 实体页产物一致性:build-entities 同代码重算 → 与仓库逐字比;多/少/改一律拦 */
export function checkEntityConsistency(episodes, aliasById, entityDir) {
  const failures = [];
  const expected = buildAllPages(episodes, aliasById); // Map<file, md>
  const onDisk = existsSync(entityDir)
    ? new Set(readdirSync(entityDir).filter((f) => f.endsWith(".md")).map((f) => basename(f, ".md")))
    : new Set();

  for (const [file, md] of expected) {
    const p = join(entityDir, `${file}.md`);
    if (!existsSync(p)) {
      failures.push({ kind: "实体页缺失", file, reason: `应有 samples/entities/${file}.md,实际没有(未重建?)` });
      continue;
    }
    if (readFileSync(p, "utf8") !== md) {
      failures.push({ kind: "实体页不一致", file, reason: `samples/entities/${file}.md 与重算产物对不上(手改/陈旧 → node scripts/build-entities.mjs)` });
    }
  }
  // 反向:仓库里有、但重算不该有的(陈旧残留 → 会变死链目标/幽灵页)
  for (const file of onDisk) {
    if (!expected.has(file)) failures.push({ kind: "实体页多余", file, reason: `samples/entities/${file}.md 不在重算产物里(陈旧残留,该删)` });
  }
  return failures;
}

/** ① 实体属性事实层:每集 entities.json 的 how_described 走 D17/D8(复用 checkProse) */
export function checkEntityFacts(episodes, aliases) {
  const failures = [];
  const aliasesObj = { entities: [...(aliases instanceof Map ? aliases.values() : aliases?.entities ?? [])] };
  for (const ep of episodes) {
    // fail-closed:transcript 缺失/损坏 → 判不了 = 不过(记一条 failure),绝不静默放行、也不裸崩
    if (!ep.transcript) {
      failures.push({ kind: "结构", file: ep.meta?.id ?? "?", reason: ep.loadError ?? "transcript 缺失,how_described 判不了 = 不过" });
      continue;
    }
    const ctx = buildFactIndex(ep.transcript, ep.meta, aliasesObj);
    for (const e of ep.entities?.entities ?? []) {
      const text = String(e.how_described ?? "").trim();
      if (!text) continue;
      const { failures: fs } = checkProse(text, ctx, aliasesObj);
      for (const f of fs) failures.push({ ...f, file: `${ep.meta.id}:${e.name}`, reason: `实体「${e.name}」how_described:${f.reason ?? ""}` });
    }
  }
  return failures;
}

/**
 * ⑤ 译名漂移(bug b · standard-change 2026-07-21 用户 AskUserQuestion 授权):
 *    同一实体 id 跨集出现**不同 file(中文名)**= 聚合只建一个页,另一名的正文双链变孤儿/死链。
 *    钉死译名表(glossary)后不该再发生;仍发生=有未钉死的概念漂了 → 拦并指名变体、提示补 glossary。
 */
export function checkNameDrift(episodes) {
  const byId = new Map(); // id → Map(file → 首次见到它的集 id)
  for (const ep of episodes) {
    for (const e of ep.entities?.entities ?? []) {
      if (!e.id || !e.file) continue;
      if (!byId.has(e.id)) byId.set(e.id, new Map());
      const files = byId.get(e.id);
      if (!files.has(e.file)) files.set(e.file, ep.meta?.id ?? "?");
    }
  }
  const failures = [];
  for (const [id, files] of byId) {
    if (files.size > 1) {
      const variants = [...files.entries()].map(([f, ep]) => `${f}(${ep})`).join(" vs ");
      failures.push({
        kind: "译名漂移",
        file: id,
        reason: `实体 id「${id}」跨集出现多个中文名:${variants} → 把该词钉进 prompts/glossary.md 的「统一中文译名」表再重跑`,
      });
    }
  }
  return failures;
}

/** 全部实体层闸门 */
export function gateEntities({ base = resolve(ROOT, "data/episodes"), samplesDir = resolve(ROOT, "samples") } = {}) {
  const aliases = JSON.parse(readFileSync(resolve(ROOT, "data/aliases.json"), "utf8"));
  const aliasById = new Map((aliases.entities ?? []).map((e) => [e.id, e]));
  // transcript 逐集容错读取(fail-closed:读失败不炸穿,标记后由 checkEntityFacts 记为不过)
  const episodes = loadAllEpisodes(base).map((ep) => {
    try {
      return { ...ep, transcript: JSON.parse(readFileSync(join(base, ep.meta.id, "transcript.en.json"), "utf8")) };
    } catch (e) {
      return { ...ep, transcript: null, loadError: `transcript 读取/解析失败:${e.message}` };
    }
  });

  const episodeIds = new Set(episodes.map((e) => e.meta.id));
  const entityDir = join(samplesDir, "entities");
  const entityFiles = new Set(
    existsSync(entityDir) ? readdirSync(entityDir).filter((f) => f.endsWith(".md")).map((f) => basename(f, ".md")) : [],
  );

  // 收集所有产物页(集页 + 实体页)供死链扫描;集页块表供块引用校验
  const pages = [];
  const episodeBlocks = new Map();
  for (const id of episodeIds) {
    const p = join(samplesDir, `${id}.md`);
    if (existsSync(p)) {
      const md = readFileSync(p, "utf8");
      pages.push({ file: `${id}.md`, md });
      episodeBlocks.set(id, blocksInPage(md));
    }
  }
  for (const f of entityFiles) {
    pages.push({ file: `entities/${f}.md`, md: readFileSync(join(entityDir, `${f}.md`), "utf8") });
  }

  const failures = [
    ...checkDeadLinks({ pages, episodeIds, entityFiles, episodeBlocks }),
    ...checkEntityConsistency(episodes, aliasById, entityDir),
    ...checkEntityFacts(episodes, aliases),
    ...checkNameDrift(episodes),
  ];
  return { pass: failures.length === 0, failures, counts: { pages: pages.length, entities: entityFiles.size } };
}

// ── CLI ──
const isMain = (() => {
  try { return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url); } catch { return false; }
})();

if (isMain) {
  const r = gateEntities();
  console.log(`── 实体层闸门(死链 + 产物一致性 + 属性事实层)· ${r.counts.entities} 实体页 / ${r.counts.pages} 页 ──`);
  if (!r.pass) {
    console.error(`\n❌ 实体层闸门未过(${r.failures.length} 条):`);
    for (const f of r.failures.slice(0, 20)) console.error(`   [${f.kind}] ${f.file ?? ""} — ${f.reason ?? ""}`);
    process.exit(1);
  }
  console.log("\n✅ 实体层闸门全过");
}
