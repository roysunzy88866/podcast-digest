#!/usr/bin/env node
// 每集金句必过三联闸门,否则 exit 1。供 pre-commit 强制(tech-debt D6)。
//
// 防假绿(依 GLM 20260717-012 [1][2],与 gate.mjs「空数组恒真」同一类洞):
//   · **缺失≠通过**:已发布的集页(samples/*.md)必须有对应 data/episodes/<id>/digest.json;
//     删掉 digest 就想让闸门「没东西可查→放行」= 删文件冒充通过,必须拦。
//   · 单集解析/校验抛异常 → 记为该集不过并继续查其它集,最后 exit 1;不让异常炸穿成栈回溯。
import { readdirSync, existsSync, readFileSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { gateEpisode } from "./gate.mjs";
import { gateFacts } from "./gate-facts.mjs";
import { gateEntities } from "./gate-entities.mjs";
import { gateRelations } from "./gate-relations.mjs";
import { gateAudio } from "./gate-audio.mjs";
import { feedEnclosuresFromXml } from "./build-feed.mjs";
import { renderEpisode, loadEpisode, episodeCategories } from "./render.mjs";
import { taxonomyCategories } from "./build-list.mjs";
import { renderAllEpisodes } from "./build-pages.mjs";
import { loadAllEpisodes } from "./build-entities.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const base = join(ROOT, "data/episodes");
const samplesDir = join(ROOT, "samples");

const ls = (d, f) => (existsSync(d) ? readdirSync(d, { withFileTypes: true }).filter(f) : []);

// 已发布集页(内容源)
const publishedIds = ls(samplesDir, (e) => e.isFile() && e.name.endsWith(".md")).map((e) =>
  e.name.replace(/\.md$/, ""),
);
// 有 digest 的集
const gatedIds = ls(base, (e) => e.isDirectory() && existsSync(join(base, e.name, "digest.json"))).map(
  (e) => e.name,
);

let bad = 0;

// C6:集页现在含跨集「相关单集」→ 闸门重渲染也必须跨集算(与写库同一套 renderAllEpisodes),否则误拦。
// fail-closed:跨集渲染失败=不放行。
let expectedPages = new Map();
try {
  expectedPages = renderAllEpisodes(loadAllEpisodes(base));
} catch (e) {
  console.error(`[机器闸门门] ❌ 跨集重渲染失败(fail-closed,不放行):${e.message}`);
  bad++;
}

// ① 缺失≠通过:发布了却没 digest → 闸门无从校验 → 拦
for (const id of publishedIds) {
  if (!gatedIds.includes(id)) {
    console.error(`[机器闸门门] ❌ ${id}: 已发布集页 samples/${id}.md 却找不到 data/episodes/${id}/digest.json`);
    console.error(`              → 闸门无从校验该集金句。缺文件不等于通过(防「删文件冒充放行」)。`);
    bad++;
  }
}

// ② 逐集跑三联 + 事实层 + **发布产物一致性** —— 只对**已发布集(有集页 sample)**。
//   半成品(有 digest 无集页,如转瞬失败留下的未过门 digest)= 不上线 → **不参与闸门**
//   (否则它没过金句/事实层门的 digest 会崩整批,连干净集都发不了;它不上线、retry 下次重跑)。
//   [standard-change: 用户授权 2026-07-20] 修「一集转瞬失败拖垮整批」编排 bug。
//   ⚠️ 不弱化防失真:已发布集(publishedIds)仍全量过闸门;发布却缺 digest 由 ① 拦(防删文件冒充)。
for (const id of gatedIds) {
  const sample = join(ROOT, "samples", `${id}.md`);
  if (!existsSync(sample)) {
    console.log(`[机器闸门门] ℹ️ ${id}: 有 digest 但无集页(未发布/半成品)→ 不参与闸门(不上线,retry 下次重跑)`);
    continue;
  }
  let g;
  try {
    g = gateEpisode(join(base, id));
  } catch (e) {
    console.error(`[机器闸门门] ❌ ${id}: 闸门执行失败(digest/transcript 损坏?):${e.message}`);
    bad++;
    continue;
  }

  // ②b **发布产物必须 == 用过闸门的 digest 重渲染的结果**。
  //   否则闸门只守中间产物 digest.json,而读者读到的 samples/<id>.md 可被手改/陈旧,
  //   编造金句照样直达页面(C2 交付物审计实测复现:双门全绿+编造金句上页+页面仍自称过三联)。
  {
    try {
      let expected;
      if (expectedPages.has(id)) {
        expected = expectedPages.get(id); // C6:跨集渲染(含相关单集)
      } else {
        const { meta, digest, entities } = loadEpisode(join(base, id)); // C2 期无 entities:退回单集渲染
        expected = renderEpisode(meta, digest, entities);
      }
      const actual = readFileSync(sample, "utf8");
      if (expected !== actual) {
        console.error(`[机器闸门门] ❌ ${id}: **集页与过闸门的 digest 对不上**(samples/${id}.md)`);
        console.error(`              → 有人手改了集页,或 digest 变了没重渲染。集页必须是过闸门 digest 的渲染产物。`);
        console.error(`              → 修:node scripts/render.mjs data/episodes/${id}`);
        bad++;
      }
    } catch (e) {
      console.error(`[机器闸门门] ❌ ${id}: 重渲染比对失败:${e.message}`);
      bad++;
    }
  }

  // ②b2 C10 词表层:发布集的大类必须全在 8 大类词表内(「未分类」会污染首页看板/图谱分组,拦下不发)。
  //   新集正常不会走到这:validateExtract 在抽取期已硬卡 categories;此处防的是老 entities 无 categories
  //   又不在人工映射表里的边角(GLM 20260724-010[2])。fail-closed。
  {
    try {
      const { meta, entities } = loadEpisode(join(base, id));
      const vocab = new Set(taxonomyCategories());
      const badCats = episodeCategories(meta, entities).filter((c) => !vocab.has(c));
      if (badCats.length) {
        console.error(`[机器闸门门] ❌ ${id}: 大类不在词表(${badCats.join("、")})→ 补 data/tag-taxonomy.json episodes 映射或重跑实体抽取`);
        bad++;
      }
    } catch (e) {
      console.error(`[机器闸门门] ❌ ${id}: 词表层闸门执行失败(fail-closed,不放行):${e.message}`);
      bad++;
    }
  }

  // ②c **事实层闸门(C3)**:D17 专名/数字回原文 + D8 正文内联时间戳。
  //   三联只卡 quotes[],而读者读的**导读正文**在 C2 时不过任何闸门(D19)。这一层补上。
  //   fail-closed:执行失败(别名表/digest 损坏)= 不过,不静默放行。
  try {
    const f = gateFacts(join(base, id));
    if (f.pass) {
      console.log(
        `[机器闸门门] ✅ ${id}: 事实层过(专名 ${f.nouns.length}/${f.nouns.length}、数字 ${f.numbers.length}、时间戳 ${f.timestamps.length})`,
      );
    } else {
      console.error(`[机器闸门门] ❌ ${id}: **导读正文事实层未过**(${f.failures.length} 条):`);
      for (const x of f.failures.slice(0, 8)) console.error(`   [${x.kind}] ${x.name ?? x.raw ?? ""} — ${x.reason ?? ""}`);
      console.error(`              → 详情:node scripts/gate-facts.mjs data/episodes/${id}`);
      console.error(`              → 若是官方稿听错导致的误报,把书写形式登记进 data/aliases.json(带出处)`);
      bad++;
    }
  } catch (e) {
    console.error(`[机器闸门门] ❌ ${id}: 事实层闸门执行失败(fail-closed,不放行):${e.message}`);
    bad++;
  }

  if (g.allPass) {
    console.log(`[机器闸门门] ✅ ${id}: ${g.passed}/${g.total} 金句过三联`);
  } else {
    bad++;
    console.error(`[机器闸门门] ❌ ${id}: 仅 ${g.passed}/${g.total} 过三联${g.total === 0 ? "(0 条金句=没兑现 US-11)" : ",失真金句:"}`);
    g.results.forEach((r, i) => {
      if (!r.pass)
        console.error(
          `   #${i + 1} 逐字${r.verbatim ? "✓" : "✗"} 时间戳${r.timestamp ? "✓" : "✗"} 说话人${r.speaker ? "✓" : "✗"}  「${String(r.quote).slice(0, 60)}」`,
        );
    });
  }
}

// ── C3 实体层闸门(死链 + 实体页产物一致性 + 属性事实层),跨集一次性 ──
//   有实体页时才查;fail-closed:执行失败=不过,不静默放行。
if (existsSync(join(samplesDir, "entities"))) {
  try {
    const r = gateEntities({ base, samplesDir });
    // 软提醒(不拦发布):译名漂移 → 建议补别名表钉死(drift #32 降级,权威名机制已保页面统一)
    for (const w of r.warnings ?? []) console.log(`[机器闸门门] ⚠️ [${w.kind}] ${w.file ?? ""} — ${w.reason ?? ""}`);
    if (r.pass) {
      console.log(`[机器闸门门] ✅ 实体层过(${r.counts.entities} 实体页,死链/一致性/属性事实层全绿)`);
    } else {
      bad++;
      console.error(`[机器闸门门] ❌ 实体层未过(${r.failures.length} 条):`);
      for (const f of r.failures.slice(0, 12)) console.error(`   [${f.kind}] ${f.file ?? ""} — ${f.reason ?? ""}`);
      console.error(`              → 详情:node scripts/gate-entities.mjs`);
    }
  } catch (e) {
    bad++;
    console.error(`[机器闸门门] ❌ 实体层闸门执行失败(fail-closed,不放行):${e.message}`);
  }
}

// ── C6 关联层闸门:相关单集死链(US-7「点击可跳」的目标集必须有页)──
//   一致性/分组正确已由上面②b 跨集重渲染比对覆盖;这里补死链。fail-closed。
if (existsSync(samplesDir)) {
  try {
    const rel = gateRelations(loadAllEpisodes(base), (id) => publishedIds.includes(id));
    if (rel.pass) {
      console.log(`[机器闸门门] ✅ 关联层过(相关单集 0 死链)`);
    } else {
      bad++;
      console.error(`[机器闸门门] ❌ 关联层未过(${rel.failures.length} 条):`);
      for (const f of rel.failures.slice(0, 12)) console.error(`   [${f.kind}] ${f.epId} — ${f.reason}`);
      console.error(`              → 补渲染缺页:node scripts/build-pages.mjs`);
    }
  } catch (e) {
    bad++;
    console.error(`[机器闸门门] ❌ 关联层闸门执行失败(fail-closed,不放行):${e.message}`);
  }
}

// ── C4 音频层闸门:每发布集必有音频 + 时长>0 + 源文本一致(防陈旧) + feed enclosure 真实。fail-closed ──
if (existsSync(samplesDir) && publishedIds.length) {
  try {
    // ④ 真解析 feed.xml 写的每条 enclosure(不从 id 重构再滤存在的——死链才逮得到)。没 feed 则 ④ 无可查,①②③ 仍守。
    const feedPath = join(ROOT, "feed.xml");
    const feedEnclosures = existsSync(feedPath)
      ? feedEnclosuresFromXml(readFileSync(feedPath, "utf8"), { root: ROOT })
      : [];
    const au = await gateAudio(publishedIds, { base, feedEnclosures });
    if (au.ok) {
      console.log(`[机器闸门门] ✅ 音频层过(${publishedIds.length} 集:音频存在/时长/源一致/enclosure 真实)`);
    } else {
      bad++;
      console.error(`[机器闸门门] ❌ 音频层未过(${au.failures.length} 条):`);
      for (const f of au.failures.slice(0, 12)) console.error(`   [${f.kind}] ${f.id} — ${f.reason}`);
      console.error(`              → 补合成:node scripts/tts.mjs data/episodes/<id>`);
    }
  } catch (e) {
    bad++;
    console.error(`[机器闸门门] ❌ 音频层闸门执行失败(fail-closed,不放行):${e.message}`);
  }
}

if (!publishedIds.length && !gatedIds.length) {
  console.log("[机器闸门门] 尚无集页也无 digest,无可校验(全新仓库)");
  process.exit(0);
}
if (bad) {
  console.error(`[机器闸门门] ${bad} 集未过 → 阻止提交。修金句(judge/repair/重浓缩)或补齐 digest 再提交。`);
  process.exit(1);
}
console.log(`[机器闸门门] ${gatedIds.length} 集金句全过三联 ✅`);
