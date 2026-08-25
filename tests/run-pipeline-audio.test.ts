// ── C15 刀① 连带:补音频不许自己判「音频在不在」──────────────────────────
// 音频口径改为只读 digest_md 后,全库存量音频指纹作废(预期)。云端缓存会把旧音频取回来,
// 若 ensureAllAudio 用「文件在就跳过」预判,陈旧音频永不重合成 → gate-audio「音频陈旧」硬红堵死整线。
// 正确姿势与 deploy-site.sh 同款(tests/tts.test.ts 已有同类防回归,GLM 20260727-002[2] 教训):
// 有 digest 的集一律交给 tts.mjs,由它按源文本指纹自判(没变秒跳,变了重合成,edge-tts 免费)。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

describe("C15 刀① · ensureAllAudio:陈旧音频→重合成,不许「文件在就跳过」", () => {
  const src = readFileSync(new URL("../scripts/run-pipeline.mjs", import.meta.url), "utf8");
  const fn = src.slice(src.indexOf("function ensureAllAudio"), src.indexOf("\n}", src.indexOf("function ensureAllAudio")));

  it("★★★ 不许「audio.mp3 在就跳过 tts」(会挡指纹陈旧检测);存在性只能用在**调 tts 之后**复查产物(2026-08-25 韧性:仍每集调 tts,只是补查产物+重试)", () => {
    expect(fn.length).toBeGreaterThan(50); // 函数还在(防重命名后断言空转)
    const ttsIdx = fn.indexOf("scripts/tts.mjs");
    const existsIdx = fn.indexOf("existsSync(audioPath)");
    expect(ttsIdx).toBeGreaterThan(0);
    // 存在性判断必须在**调 tts 之后**(复查「音频真产出了吗」),不是之前的 skip 守卫
    expect(existsIdx).toBeGreaterThan(ttsIdx);
    // 调 tts 之前那段不许有 continue/return 型的音频存在性跳过(那就是被禁的「文件在就跳过」)
    const beforeTts = fn.slice(0, ttsIdx);
    expect(beforeTts).not.toMatch(/existsSync\([^)]*audio\.mp3[^)]*\)\s*\)\s*(continue|return)/);
    expect(beforeTts).not.toMatch(/existsSync\(audioPath\)\s*\)\s*(continue|return)/);
  });
  it("★ 有 digest 的集仍逐集交给 tts.mjs(由指纹决定跳过/重合成)", () => {
    expect(fn).toContain("digest.json");
    expect(fn).toContain("scripts/tts.mjs");
  });
});

describe("C15 刀① · workflow 音频缓存换代(旧口径音频无复用价值,防 exact-hit 永不回存的每轮全库重念)", () => {
  it("★ pipeline.yml 与 deploy-site.yml 的音频缓存 key 均已离开 audio-v1", () => {
    for (const f of ["../.github/workflows/pipeline.yml", "../.github/workflows/deploy-site.yml"]) {
      const y = readFileSync(new URL(f, import.meta.url), "utf8");
      expect(y).toContain("data/episodes/*/audio.mp3"); // 缓存步还在
      expect(y).not.toContain("audio-v1-"); // 旧代缓存(tldr 前置口径)不复用
    }
  });
});
