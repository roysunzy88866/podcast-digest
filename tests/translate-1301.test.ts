// C40 / ADR 0026(2026-10-04 用户「需求通过」):GLM [1301] 拒译不再整集放弃 —— 拆半重试到单句,只跳过被拒的那句;
// 浓缩输入同步略掉被拒句。真跑 scripts/translate.mjs(假 glm-ask:见到 FORBIDDEN 就回 [1301],其余照 [[n]] 回译文)。
import { describe, it, expect } from "vitest";
import { mkdtempSync, writeFileSync, readFileSync, existsSync, mkdirSync, chmodSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, dirname } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const FAKE = `#!/usr/bin/env node
let input = "";
process.stdin.on("data", (d) => (input += d));
process.stdin.on("end", () => {
  if (input.includes("FORBIDDEN")) { process.stderr.write('{"error":{"code":"1301","message":"系统检测到输入或生成内容可能包含不安全或敏感内容"}}'); process.exit(1); }
  const out = input.split("\\n").map((l) => l.match(/^\\[\\[(\\d+)\\]\\]/)).filter(Boolean).map((m) => "[[" + m[1] + "]] 译文" + m[1]);
  process.stdout.write(out.join("\\n"));
});
`;

function runTranslate(texts: string[]) {
  const dir = mkdtempSync(join(tmpdir(), "pd-tr-"));
  writeFileSync(join(dir, "transcript.en.json"), JSON.stringify(texts.map((t, i) => ({ text: t, start: i, end: i + 1, speaker: "SPEAKER_00" }))));
  writeFileSync(join(dir, "meta.json"), JSON.stringify({ id: "x", speaker_map: {} }));
  const bin = join(dir, "bin");
  mkdirSync(bin);
  writeFileSync(join(bin, "glm-ask"), FAKE);
  chmodSync(join(bin, "glm-ask"), 0o755);
  const r = spawnSync(process.execPath, [join(ROOT, "scripts/translate.mjs"), dir], {
    cwd: ROOT, encoding: "utf8", env: { ...process.env, PATH: `${bin}:${process.env.PATH}`, CHUNK: "4", CONCURRENCY: "2", GLM_MIN_GAP_MS: "0" },
  });
  return { dir, r };
}

describe("C40 · 翻译遇 [1301] 拆半重试,只跳过被拒的句子", () => {
  it("★★★ 8 句里 1 句敏感 → 只这 1 句空译 + 记进 translation.blocked.json,其余 7 句照译,退出 0", () => {
    const texts = ["a", "b", "c", "FORBIDDEN d", "e", "f", "g", "h"];
    const { dir, r } = runTranslate(texts);
    expect(r.status, r.stderr).toBe(0);
    const tr = JSON.parse(readFileSync(join(dir, "translation.zh.json"), "utf8"));
    expect(tr.map((s: any) => s.zh)).toEqual(["译文0", "译文1", "译文2", "", "译文4", "译文5", "译文6", "译文7"]);
    expect(JSON.parse(readFileSync(join(dir, "translation.blocked.json"), "utf8"))).toEqual([3]);
  }, 60000);
  it("★★★ 被拒超过 1/4 → 整集太敏感,非零退出(交上层按内容审查放弃)", () => {
    const { r } = runTranslate(["FORBIDDEN 1", "FORBIDDEN 2", "FORBIDDEN 3", "ok"]);
    expect(r.status).not.toBe(0);
    expect(r.stderr).toContain("[1301]");
  }, 60000);
  it("★★ 没有被拒 → 不留 translation.blocked.json", () => {
    const { dir, r } = runTranslate(["a", "b"]);
    expect(r.status).toBe(0);
    expect(existsSync(join(dir, "translation.blocked.json"))).toBe(false);
  }, 60000);
  it("★★ 浓缩输入按 blocked 清单略掉被拒句(源码锚)", () => {
    const src = readFileSync(join(ROOT, "scripts/condense.mjs"), "utf8");
    expect(src).toMatch(/translation\.blocked\.json/);
    expect(src).toMatch(/tr\.filter\(\(s, i\) => !blocked\.has\(s\.seg \?\? i\)\)/);
  });
});

describe("C40 · GLM 20261004-006[1]:拒译句重跑命中缓存仍认得", () => {
  it("★★★ 同一目录原样重跑 → 仍退出 0、清单仍在、被拒句仍空译", () => {
    const texts = ["a", "b", "c", "FORBIDDEN d", "e", "f", "g", "h"];
    const { dir, r } = runTranslate(texts);
    expect(r.status, r.stderr).toBe(0);
    const again = spawnSync(process.execPath, [join(ROOT, "scripts/translate.mjs"), dir], {
      cwd: ROOT, encoding: "utf8", env: { ...process.env, PATH: `${join(dir, "bin")}:${process.env.PATH}`, CHUNK: "4", CONCURRENCY: "2", GLM_MIN_GAP_MS: "0" },
    });
    expect(again.status, again.stderr).toBe(0);
    expect(JSON.parse(readFileSync(join(dir, "translation.blocked.json"), "utf8"))).toEqual([3]);
  }, 60000);
});
