#!/usr/bin/env node
// C6 Scenario 4 · 关联闸门。
//   · ① 相关单集一致性 + ③ 分组正确 —— 已由 gate-all 的**跨集重渲染逐字比对**(renderAllEpisodes)覆盖
//     (页面必须 == 用 relatedEpisodes 重算的渲染结果,手改/陈旧/错分组一律拦)。
//   · ② **死链** —— 本闸门补:相关单集点跳的目标集(US-7「点击可跳」)必须有 samples 页,否则点了是死链。
// fail-closed:执行失败=不过,不静默放行。
import { existsSync, readdirSync, realpathSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadAllEpisodes, relatedEpisodes } from "./build-entities.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * @param episodes loadAllEpisodes() 的结果
 * @param hasPage (id)=>bool:该集是否有已发布页(samples/<id>.md)
 * @returns { pass, failures:[{kind, epId, reason}] }
 */
export function gateRelations(episodes, hasPage) {
  const failures = [];
  for (const ep of episodes) {
    if (!hasPage(ep.meta.id)) continue; // 只查已发布集的相关区
    for (const r of relatedEpisodes(ep.meta.id, episodes)) {
      if (!hasPage(r.epId)) {
        failures.push({ kind: "相关单集死链", epId: ep.meta.id, reason: `相关集 ${r.epId} 无 samples 页 → [[${r.epId}]] 点了是死链` });
      }
    }
  }
  return { pass: failures.length === 0, failures };
}

// ── CLI ──
const isMain = (() => {
  try {
    return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
})();

if (isMain) {
  const base = join(ROOT, "data/episodes");
  const samplesDir = join(ROOT, "samples");
  const published = new Set(
    existsSync(samplesDir)
      ? readdirSync(samplesDir).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""))
      : [],
  );
  const r = gateRelations(loadAllEpisodes(base), (id) => published.has(id));
  if (!r.pass) {
    console.error(`[关联闸门] ❌ ${r.failures.length} 条:`);
    for (const f of r.failures) console.error(`   [${f.kind}] ${f.epId} — ${f.reason}`);
    process.exit(1);
  }
  console.log("[关联闸门] ✅ 相关单集 0 死链");
}
