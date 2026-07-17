// C3 Scenario 5 · 实体层闸门(死链 + 产物一致性 + 属性事实层)的真业务测试 + [自证]变异验证
// 纪律:只调被测函数;每条闸门造一次真攻击、实测被拦(不靠「应该能拦」自述)。
import { describe, it, expect } from "vitest";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  collectLinks,
  checkDeadLinks,
  checkEntityConsistency,
  checkEntityFacts,
} from "../scripts/gate-entities.mjs";
import { buildAllPages } from "../scripts/build-entities.mjs";

describe("collectLinks · 解析 wikilink 各形态", () => {
  it("[[t]] / [[t|alias]] / ![[t#^b]] 都解析对", () => {
    const ls = collectLinks("见 [[Modal]] 和 [[智能体|智能体]],金句 ![[ep1#^q3]]");
    expect(ls.find((l) => l.target === "Modal")).toBeTruthy();
    expect(ls.find((l) => l.target === "智能体")).toBeTruthy(); // 去掉别名管道
    const embed = ls.find((l) => l.embed);
    expect(embed.target).toBe("ep1");
    expect(embed.block).toBe("q3");
  });
});

describe("checkDeadLinks · ③ 每个 [[X]] 有页、每个块真存在", () => {
  const base = {
    episodeIds: new Set(["ep1"]),
    entityFiles: new Set(["Modal", "智能体"]),
    episodeBlocks: new Map([["ep1", new Set(["q1", "q3"])]]),
  };
  it("全部有效 → 0 failure", () => {
    const pages = [{ file: "a.md", md: "[[Modal]] [[智能体]] ![[ep1#^q1]]" }];
    expect(checkDeadLinks({ pages, ...base })).toEqual([]);
  });
  it("★ 攻击:链到不存在的页 → 拦", () => {
    const pages = [{ file: "a.md", md: "[[不存在的实体]]" }];
    const f = checkDeadLinks({ pages, ...base });
    expect(f.length).toBe(1);
    expect(f[0].kind).toBe("死链");
  });
  it("★ 攻击:嵌入一个转写稿里没有的块 → 拦(防手改/陈旧金句)", () => {
    const pages = [{ file: "a.md", md: "![[ep1#^q99]]" }]; // q99 不在 ep1 的块表
    const f = checkDeadLinks({ pages, ...base });
    expect(f.length).toBe(1);
    expect(f[0].kind).toBe("死链-块");
  });
  it("★ 攻击:块引用挂到非集页 → 拦", () => {
    const pages = [{ file: "a.md", md: "![[Modal#^q1]]" }]; // Modal 是实体页,不该有块
    expect(checkDeadLinks({ pages, ...base })[0].kind).toBe("死链-块");
  });
});

// ── checkEntityConsistency / checkEntityFacts 的共用 fixture ──
const mkWords = (text: string, t0: number, sp: string) =>
  text.split(" ").map((w, i) => ({ word: w, start: t0 + i, end: t0 + i + 1, speaker: sp }));
const EPISODES = [
  {
    meta: { id: "ep1", title_zh: "集一", date: "2026-07-08", speaker_map: { S0: "Akshat Bubna" } },
    transcript: [
      { text: "Modal runs agents in a sandbox", start: 0, end: 6, words: mkWords("Modal runs agents in a sandbox", 0, "S0") },
    ],
    digest: { quotes: [{ zh: "智能体要沙箱", en: "agents need a sandbox", timestamp: "00:01", speaker: "Akshat Bubna" }] },
    entities: {
      entities: [
        { id: "modal", type: "company", role: "company", name: "Modal", file: "Modal", primary: true, how_described: "跑智能体的云平台", evidence: [{ t: [0, 6] }] },
        { id: "agent", type: "concept", role: "concept", name: "智能体 (agent)", file: "智能体", primary: true, how_described: "在沙箱里跑的自主系统", evidence: [{ t: [0, 6] }] },
      ],
    },
  },
];
const ALIAS_BY_ID = new Map([["agent", { id: "agent", name: "智能体 (agent)", file: "智能体", forms: ["智能体", "agent", "agents"] }]]);
const ALIASES = { entities: [...ALIAS_BY_ID.values()] };

describe("checkEntityConsistency · ④ 重算 vs 仓库逐字比", () => {
  const setup = () => {
    const dir = mkdtempSync(join(tmpdir(), "ent-"));
    for (const [file, md] of buildAllPages(EPISODES, ALIAS_BY_ID)) writeFileSync(join(dir, `${file}.md`), md);
    return dir;
  };
  it("原样 → 0 failure", () => {
    const dir = setup();
    expect(checkEntityConsistency(EPISODES, ALIAS_BY_ID, dir)).toEqual([]);
    rmSync(dir, { recursive: true });
  });
  it("★ 攻击:手改一个实体页 → 拦(不一致)", () => {
    const dir = setup();
    writeFileSync(join(dir, "Modal.md"), "# 我手改的假页\n塞一条转写稿里没有的金句");
    const f = checkEntityConsistency(EPISODES, ALIAS_BY_ID, dir);
    expect(f.some((x) => x.kind === "实体页不一致" && x.file === "Modal")).toBe(true);
    rmSync(dir, { recursive: true });
  });
  it("★ 攻击:塞一个陈旧残留页 → 拦(多余,会变幽灵页/死链目标)", () => {
    const dir = setup();
    writeFileSync(join(dir, "幽灵.md"), "# 不该存在");
    const f = checkEntityConsistency(EPISODES, ALIAS_BY_ID, dir);
    expect(f.some((x) => x.kind === "实体页多余" && x.file === "幽灵")).toBe(true);
    rmSync(dir, { recursive: true });
  });
});

describe("checkEntityFacts · ① how_described 走 D17/D8", () => {
  it("干净 how_described(专名都在原文)→ 0 failure", () => {
    expect(checkEntityFacts(EPISODES, ALIASES)).toEqual([]);
  });
  it("★ 攻击:how_described 塞一个转写稿里没有的公司名 → 拦", () => {
    const bad = [
      {
        ...EPISODES[0],
        entities: {
          entities: [
            { ...EPISODES[0].entities.entities[0], how_described: "跑智能体的云平台,对标 Snowflake 和 Oracle" },
          ],
        },
      },
    ];
    const f = checkEntityFacts(bad, ALIASES);
    // Snowflake / Oracle 都不在 fixture 转写稿 → 至少一条 D17-专名 failure
    expect(f.some((x) => x.kind === "D17-专名")).toBe(true);
    expect(f[0].file).toContain("Modal");
  });
  it("★ 攻击:how_described 塞一个转写稿里没有的数字 → 拦", () => {
    const bad = [
      {
        ...EPISODES[0],
        entities: { entities: [{ ...EPISODES[0].entities.entities[0], how_described: "2019 年成立的公司" }] },
      },
    ];
    // 转写稿无 2019 → D17-数字 拦
    expect(checkEntityFacts(bad, ALIASES).some((x) => x.kind === "D17-数字")).toBe(true);
  });
  it("★ fail-closed:transcript 缺失 → 记一条不过、不裸崩(GLM 002[2])", () => {
    const noTranscript = [{ meta: { id: "epX" }, transcript: null, loadError: "transcript 读取失败", entities: EPISODES[0].entities }];
    let f;
    expect(() => { f = checkEntityFacts(noTranscript, ALIASES); }).not.toThrow(); // 不炸穿
    expect(f.some((x) => x.kind === "结构")).toBe(true); // 判不了=记不过
  });
});
