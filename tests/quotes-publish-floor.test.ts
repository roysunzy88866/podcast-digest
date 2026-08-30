// 没金句就先上站(用户 2026-08-30「判官全毙就卡整集,别这样」· standard-change)。
//
// 反转的旧口径:judge-quotes / repair-quotes 留 <MIN_KEEP(3)条时 exit 1、整集不发布;gate.mjs 0 条判失败。
// 新口径:金句是集页一个小板块,不该拖垮整集 —— 留几条发几条(哪怕 0 条)。防失真一分不松:
//   repair 仍逐字校验、丢掉对不上的;活下来的都逐字命中,0 条 = 没东西可失真。
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { spawnSync } from "node:child_process";
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

function seg(speaker: string, t0: number, text: string) {
  const ws = text.split(/\s+/);
  return { text, start: t0, end: t0 + ws.length * 0.4, speaker,
    words: ws.map((w, k) => ({ word: w, start: t0 + k * 0.4, end: t0 + (k + 1) * 0.4, speaker })) };
}
const transcript = [
  seg("SPEAKER_00", 0, "Welcome back to the show everyone we are going to talk about many things today"),
  seg("SPEAKER_01", 10, "Talent density is the non-negotiable and honesty at every level of the company matters most"),
];
const meta = { speaker_map: { SPEAKER_00: "主持人", SPEAKER_01: "嘉宾" } };

/** 跑真 repair-quotes(子进程,零 LLM 零钱),返回 {status, digest} */
function runRepair(quotes: any[]) {
  const base = mkdtempSync(join(tmpdir(), "qfloor-"));
  const dir = join(base, "ep");
  mkdirSync(dir);
  writeFileSync(join(dir, "transcript.en.json"), JSON.stringify(transcript));
  writeFileSync(join(dir, "meta.json"), JSON.stringify(meta));
  writeFileSync(join(dir, "digest.json"), JSON.stringify({ quotes }));
  const script = fileURLToPath(new URL("../scripts/repair-quotes.mjs", import.meta.url)); // 绝对路径:不依赖 cwd(GLM 014[3]);用 fileURLToPath 而非 .pathname(路径含中文会被 percent-encode)
  const res = spawnSync(process.execPath, [script, dir], { encoding: "utf8" });
  const digest = JSON.parse(readFileSync(join(dir, "digest.json"), "utf8"));
  rmSync(base, { recursive: true, force: true });
  return { status: res.status, digest };
}

describe("没金句先上站 · repair-quotes 不再毙整集(行为·真跑)", () => {
  it("★★★ 全是编造金句 → 逐字全丢 → 0 条也 exit 0、digest 写成空金句(不再回滚整集)", () => {
    const { status, digest } = runRepair([
      { en: "Speed is the only thing that truly matters here.", zh: "假一。", timestamp: "00:01", speaker: "嘉宾" },
      { en: "Everything else is just noise and distraction always.", zh: "假二。", timestamp: "00:02", speaker: "嘉宾" },
      { en: "Nobody ever said that inside this room today.", zh: "假三。", timestamp: "00:03", speaker: "嘉宾" },
    ]);
    expect(status).toBe(0); // ← 反转前这里是 1(整集不发布)
    expect(Array.isArray(digest.quotes)).toBe(true);
    expect(digest.quotes).toHaveLength(0); // 逐字对不上的全丢,发布成「没金句」
  });

  it("★★★ 1 条逐字真话 + 2 条编造 → 只留那 1 条、exit 0(<3 也照发,不卡整集)", () => {
    const { status, digest } = runRepair([
      { en: "Talent density is the non-negotiable and honesty at every level of the company matters most", zh: "真话。", timestamp: "00:10", speaker: "嘉宾" },
      { en: "Speed is the only thing that truly matters here.", zh: "假一。", timestamp: "00:01", speaker: "嘉宾" },
      { en: "Everything else is just noise and distraction always.", zh: "假二。", timestamp: "00:02", speaker: "嘉宾" },
    ]);
    expect(status).toBe(0);
    expect(digest.quotes).toHaveLength(1); // 少于 MIN_KEEP=3 也照发
    expect(digest.quotes[0].en).toContain("Talent density"); // 活下来的是逐字命中的那条
  });
});

describe("没金句先上站 · 源码守卫(防有人把 exit 1 加回来)", () => {
  const strip = (s: string) => s.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:])\/\/.*$/gm, "$1");
  /** 取 `<needle> < MIN_KEEP {` 这个 if 块体(到配对的 }),看里面还有没有 process.exit */
  function branchBody(file: string, needle: string) {
    const src = strip(readFileSync(new URL("../scripts/" + file, import.meta.url), "utf8"));
    const at = src.indexOf(needle);
    expect(at).toBeGreaterThan(-1);
    const open = src.indexOf("{", at);
    let depth = 0, end = open;
    for (let i = open; i < src.length; i++) { if (src[i] === "{") depth++; else if (src[i] === "}") { depth--; if (depth === 0) { end = i; break; } } }
    return src.slice(open, end + 1);
  }
  // 注:judge-quotes 的 kept<MIN_KEEP 分支**允许**一个条件 exit(判官大面积 API 失败时 fail-safe),
  // 那条由下面「判官不可用」describe 精确钉;这里只钉 repair(无 LLM,永远该发布、不该 exit)。
  it("★★★ repair-quotes 的 fixed<MIN_KEEP 分支里不许再 process.exit(无 LLM,总该发布)", () => {
    expect(branchBody("repair-quotes.mjs", "fixed.length < MIN_KEEP")).not.toMatch(/process\.exit/);
  });
});

describe("没金句先上站 · 判官不可用时保持 fail-safe(GLM 014[4]:别把 API 故障当「没金句」发布)", () => {
  const src = readFileSync(new URL("../scripts/judge-quotes.mjs", import.meta.url), "utf8")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:])\/\/.*$/gm, "$1");
  // 用花括号配对取整个 if 块(不靠固定字符窗口,布局变了也不漏,GLM 016[3])
  function ifBlock(needle: string) {
    const at = src.indexOf(needle);
    expect(at).toBeGreaterThan(-1);
    const open = src.indexOf("{", at);
    let depth = 0, end = open;
    for (let i = open; i < src.length; i++) { if (src[i] === "{") depth++; else if (src[i] === "}") { depth--; if (depth === 0) { end = i; break; } } }
    return src.slice(open, end + 1);
  }
  it("★★★ API 失败与「拿不到干净裁决」两条路径都打了 apiFail(否则系统性坏响应绕过 fail-safe)", () => {
    expect((src.match(/apiFail:\s*true/g) || []).length).toBeGreaterThanOrEqual(2);
  });
  it("★★★ kept<MIN_KEEP 分支:判官大面积失败(judgeUnavailable)时必须 process.exit,不许静默发布空", () => {
    const body = ifBlock("kept.length < MIN_KEEP");
    expect(body).toMatch(/judgeUnavailable/); // 先分清「真判空」还是「判官没跑」
    expect(body).toMatch(/process\.exit/); // 判官不可用 → 保持 fail-safe
  });
});

describe("没金句先上站 · 只放行「合法筛空」,坏 digest 仍拦(GLM 018[1] 纵深防御)", () => {
  it("★★★ digest 缺 quotes 字段(上游故障)→ allPass=false(不是合法筛空,不许假绿)", async () => {
    const { gateEpisode } = await import("../scripts/gate.mjs");
    const dir = mkdtempSync(join(tmpdir(), "gate-broken-"));
    writeFileSync(join(dir, "transcript.en.json"), JSON.stringify(transcript));
    writeFileSync(join(dir, "meta.json"), JSON.stringify(meta));
    writeFileSync(join(dir, "digest.json"), JSON.stringify({ tldr: "x", digest_md: "y" })); // 没有 quotes 字段
    const g = gateEpisode(dir);
    expect(g.allPass).toBe(false);
    rmSync(dir, { recursive: true, force: true });
  });
  it("★★★ digest 有 quotes:[](合法筛空)→ allPass=true(照常上站)", async () => {
    const { gateEpisode } = await import("../scripts/gate.mjs");
    const dir = mkdtempSync(join(tmpdir(), "gate-emptyarr-"));
    writeFileSync(join(dir, "transcript.en.json"), JSON.stringify(transcript));
    writeFileSync(join(dir, "meta.json"), JSON.stringify(meta));
    writeFileSync(join(dir, "digest.json"), JSON.stringify({ tldr: "x", digest_md: "y", quotes: [] }));
    const g = gateEpisode(dir);
    expect(g.allPass).toBe(true);
    rmSync(dir, { recursive: true, force: true });
  });
});
