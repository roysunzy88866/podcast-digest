// 修 · 金句修复短句错杀(2026-07-31 用户「bug点头」授权 · standard-change)
//
// 病根(实锤):repair-quotes matchWithTrim 对 <6 词候选一律 `continue`,短句根本不参与转写稿匹配
// → Netflix 集 "Talent density is the non-negotiable."(5 词)是逐字原话却被丢,还被谎报「逐字命中不了」,
//   导致该集 kept 2 < 3 回滚。
// 修法:短句允许参与,但必须**全文唯一命中**(守住原守卫「防常见短语多处误匹配、锚出错误时间戳/说话人」
// 的意图);编造短句在转写稿找不到,照丢——防失真方向一分不松。
//
// fixture 复刻真实病灶结构:同一份数据里同时埋 ①5 词逐字真话 ②编造短句 ③多处出现的常见短语,
// 跑真脚本(子进程,零 LLM 零钱),分别验「救回 / 照丢 / 有歧义不猜」。
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { spawnSync } from "node:child_process";
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { norm, buildWordStream, findAllSpans } from "../scripts/gate.mjs";

// ── fixture:从句子生成带逐词时间/说话人的转写段(格式同真 transcript.en.json)──
function seg(speaker: string, t0: number, text: string) {
  const ws = text.split(/\s+/);
  return {
    text,
    start: t0,
    end: t0 + ws.length * 0.4,
    speaker,
    words: ws.map((w, k) => ({ word: w, start: t0 + k * 0.4, end: t0 + (k + 1) * 0.4, speaker })),
  };
}

const transcript = [
  seg("SPEAKER_00", 0, "Welcome back to the show everyone we will see how it goes today"),
  seg("SPEAKER_01", 10, "Talent density is the non-negotiable, being very comfortable with risk-taking and honesty at every level of the company."),
  seg("SPEAKER_01", 20, "The culture memo was written to explain how we operate inside Netflix every single day."),
  seg("SPEAKER_00", 30, "That makes sense and we will see whether the audience agrees with that framing."),
  seg("SPEAKER_01", 40, "Keeper test means managers ask themselves which people they would fight to keep."),
  seg("SPEAKER_01", 50, "Radical candor only works when feedback flows upward as freely as it flows downward."),
];

const quotes = [
  // 三条 ≥6 词逐字长句:修法前后都必须保留(不许把老行为改坏)
  { en: "The culture memo was written to explain how we operate inside Netflix", zh: "文化备忘录。", timestamp: "00:20", speaker: "嘉宾" },
  { en: "Keeper test means managers ask themselves which people they would fight to keep", zh: "留人测试。", timestamp: "00:40", speaker: "嘉宾" },
  { en: "Radical candor only works when feedback flows upward as freely as it flows downward", zh: "坦诚反馈。", timestamp: "00:50", speaker: "嘉宾" },
  // ★ 病灶本尊:5 词逐字真话(转写稿原文开头一模一样)——修法后必须被救回
  { en: "Talent density is the non-negotiable.", zh: "人才密度是不可妥协的。", timestamp: "00:10", speaker: "嘉宾" },
  // 编造短句:转写稿里根本没有 → 必须照丢(防失真不松)
  { en: "Speed is everything here.", zh: "速度就是一切。", timestamp: "00:15", speaker: "嘉宾" },
  // 常见短语,转写稿两处出现 → 短句锚点有歧义,不猜,照丢(这正是原 6 词守卫要防的)
  { en: "We will see.", zh: "走着瞧。", timestamp: "00:00", speaker: "主持人" },
  // 全文唯一命中、但裁剪变体("we will see.")多处命中 → 歧义变体不许污染唯一命中,必须保留(GLM 20260731-007[1])
  { en: "Everyone we will see.", zh: "各位我们走着瞧。", timestamp: "00:02", speaker: "主持人" },
  // 空串 / 纯标点 → norm 后零词,必须照丢不崩(GLM 20260731-007[3])
  { en: "", zh: "空。", timestamp: "00:00", speaker: "主持人" },
  { en: "...", zh: "省略。", timestamp: "00:00", speaker: "主持人" },
];

let base: string;
let res: ReturnType<typeof spawnSync>;
let report: any;
let digest: any;

beforeAll(() => {
  base = mkdtempSync(join(tmpdir(), "repairq-"));
  const dir = join(base, "ep");
  mkdirSync(dir);
  writeFileSync(join(dir, "transcript.en.json"), JSON.stringify(transcript));
  writeFileSync(join(dir, "meta.json"), JSON.stringify({ speaker_map: { SPEAKER_00: "主持人", SPEAKER_01: "嘉宾" } }));
  writeFileSync(join(dir, "digest.json"), JSON.stringify({ quotes }));
  res = spawnSync(process.execPath, ["scripts/repair-quotes.mjs", dir], { encoding: "utf8" });
  report = JSON.parse(readFileSync(join(dir, "repair-report.json"), "utf8"));
  digest = JSON.parse(readFileSync(join(dir, "digest.json"), "utf8"));
});
afterAll(() => rmSync(base, { recursive: true, force: true }));

// fixture 防腐:用闸门同一份代码确认「真话唯一命中、常见短语确实两处、编造句确实零命中」
it("fixture 自检:病灶句在转写稿逐字唯一;歧义短语两处;编造句零命中(gate 同源判定)", () => {
  const stream = buildWordStream(transcript as any);
  expect(findAllSpans(norm("Talent density is the non-negotiable."), stream)).toHaveLength(1);
  expect(findAllSpans(norm("We will see."), stream)).toHaveLength(2);
  expect(findAllSpans(norm("Speed is everything here."), stream)).toHaveLength(0);
});

describe("repair-quotes · 短句错杀修复(逐字为真的短句必须活下来)", () => {
  it("★★★ 5 词逐字真话被保留,时间戳/说话人从转写稿真相派生(病灶复现钉死)", () => {
    const hit = digest.quotes.find((q: any) => q.en.startsWith("Talent density"));
    expect(hit).toBeTruthy();
    expect(hit.en).toBe("Talent density is the non-negotiable.");
    expect(hit.timestamp).toBe("00:10"); // 转写稿命中片段首词时刻,非 GLM 标注
    expect(hit.speaker).toBe("嘉宾"); // 命中片段主说话人映射名
  });

  it("三条 ≥6 词长句行为不变,总保留 5 条、exit 0(修短句没把老路改坏)", () => {
    expect(res.status).toBe(0);
    expect(report.kept).toHaveLength(5);
    expect(digest.quotes).toHaveLength(5);
  });

  it("★ 全文唯一命中的短句,裁剪变体撞上多处命中也不被拖下水(歧义状态不污染保留判定)", () => {
    // "Everyone we will see." 全文唯一;裁掉首词后 "we will see." 两处命中——保留判定必须以全文唯一为准
    const hit = digest.quotes.find((q: any) => q.en === "Everyone we will see.");
    expect(hit).toBeTruthy();
    expect(hit.timestamp).toBe("00:02"); // 锚在唯一命中处("everyone" 词时刻),不是随便挑一处 "we will see"
    expect(hit.speaker).toBe("主持人");
  });

  it("空串 / 纯标点金句 → 照丢不崩,不产生锚到首词的脏数据", () => {
    for (const en of ["", "..."]) {
      const d = report.dropped.find((d: any) => d.en === en);
      expect(d).toBeTruthy();
      expect(d.reason).toMatch(/命中不了/);
    }
  });

  it("★ 编造短句照丢:转写稿找不到,报错说的是「命中不了」而不是「词数不够」", () => {
    const d = report.dropped.find((d: any) => d.en === "Speed is everything here.");
    expect(d).toBeTruthy();
    expect(d.reason).toMatch(/命中不了/);
    expect(d.reason).not.toMatch(/词/); // 不再拿词数当挡箭牌
  });

  it("★ 多处命中的常见短语照丢,理由说真话:是「多处命中无法唯一锚定」,不是「命中不了」", () => {
    const d = report.dropped.find((d: any) => d.en === "We will see.");
    expect(d).toBeTruthy();
    expect(d.reason).toMatch(/命中 2 处/);
    expect(d.reason).toMatch(/唯一/);
    expect(d.reason).not.toMatch(/命中不了/); // 明明命中了,只是有歧义——不许说谎
  });

  it("丢弃共 4 条(编造 + 歧义 + 空串 + 纯标点),一条不多一条不少", () => {
    expect(report.dropped).toHaveLength(4);
  });
});
