// W1 · 源清单报告(只读)。守:每源一行、无集的源出「—」不出 undefined、隔离按理由前缀分组、停车/半成品判定、真数据下 cutoff 全覆盖。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { sourceRegistryRows, toMarkdown, reasonKind, orphanCutoffs } from "../scripts/report-sources.mjs";
import { SOURCES, BACKFILL_FEED_KEYS, REVIVE_CAP } from "../scripts/run-pipeline.mjs";

const SRC = [
  { key: "aaa", name: "A Show", feedUrl: "https://feeds.example.com/a", asr: "whisperx" },
  { key: "bbb", name: "B Show", feedUrl: "https://b.example.org/rss", archiveFile: "x.json", topicFilter: true },
  { key: "talks", name: "精选演讲", feedUrl: "", manual: true, seedDir: "data/talks-seed" },
];
const resolveBy = (id) => SRC.find((s) => id.slice(11).startsWith(`${s.key}-`)) ?? null;
const STATE = {
  cutoffs: { aaa: "2026-09-01T00:00:00.000Z" },
  revive: { "2026-08-01-aaa-parked": REVIVE_CAP },
  skipped: [
    { id: "2026-08-02-aaa-x", reason: "题材不对味:纳米光" },
    { id: "2026-08-03-aaa-y", reason: "题材不对味:政治" },
    { id: "2026-08-04-aaa-z", reason: "导读/实体事实层未过(定点重写后仍未过,或密度熔断)" },
  ],
};
const EPS = [
  { id: "2026-08-10-aaa-pub", meta: { date: "2026-08-10", added: "2026-08-12" }, hasDigest: true, hasPage: true },
  { id: "2026-08-20-aaa-pub2", meta: { date: "2026-08-20", added: "2026-08-21" }, hasDigest: true, hasPage: true },
  { id: "2026-08-01-aaa-parked", meta: { date: "2026-08-01", added: "2026-08-05" }, hasDigest: true, hasPage: false },
  { id: "2026-08-30-aaa-half", meta: null, hasDigest: false, hasPage: false },
  { id: "2026-08-31-aaa-reviving", meta: { date: "2026-08-31", added: "2026-09-01" }, hasDigest: true, hasPage: false }, // 连败 0 次 → 待补活
];

describe("sourceRegistryRows · 纯逻辑", () => {
  const rows = sourceRegistryRows({ sources: SRC, backfillKeys: ["aaa"], state: STATE, episodes: EPS, resolve: resolveBy });
  it("★★★ 每源一行,顺序照 SOURCES;计数/最新日期/隔离分组都对", () => {
    expect(rows.map((r) => r.key)).toEqual(["aaa", "bbb", "talks"]);
    const a = rows[0];
    expect(a).toMatchObject({ published: 2, half: 1, reviving: 1, parked: 1, inBackfill: true, cutoff: "2026-09-01", newestDate: "2026-08-31", newestAdded: "2026-09-01", route: "ASR(whisperx)", host: "feeds.example.com" });
    expect(a.published + a.half + a.reviving + a.parked).toBe(EPS.length); // 四桶之和 = 该源目录数,一集不许凭空消失(GLM 015[2])
    expect(a.skipped).toBe("题材不对味×2 导读/实体事实层未过×1");
  });
  it("★★★ 无集/无 cutoff 的源出「—」,绝不出 undefined/NaN", () => {
    const b = rows[1];
    expect(b).toMatchObject({ published: 0, half: 0, reviving: 0, parked: 0, cutoff: "—", newestDate: "—", newestAdded: "—", skipped: "—", inBackfill: true, filters: "topicFilter+archiveFile" });
    // cutoff 不是 ISO(数字时间戳/杂串)→ 「—」,不把非日期原样端出去(GLM 015[5])
    const weird = sourceRegistryRows({ sources: SRC, state: { cutoffs: { aaa: 1760000000000, bbb: "soon" } }, episodes: [], resolve: resolveBy });
    expect(weird.map((r) => r.cutoff)).toEqual(["—", "—", "—"]);
    expect(JSON.stringify(rows)).not.toMatch(/undefined|NaN/);
    expect(rows[2].route).toBe("manual(种子)");
  });
  it("★ reasonKind 取「:」「(」前的类别", () => {
    expect(reasonKind("题材不对味:xxx")).toBe("题材不对味");
    expect(reasonKind("内容审查拦下([1301] …)")).toBe("内容审查拦下");
    expect(reasonKind("")).toBe("其他");
  });
});

describe("toMarkdown · 可读表", () => {
  it("★★ 表头 + 每源一行 + 订阅频道表", () => {
    const rows = sourceRegistryRows({ sources: SRC, backfillKeys: ["aaa"], state: STATE, episodes: EPS, resolve: resolveBy });
    const md = toMarkdown(rows, [{ key: "anthropic", name: "Anthropic", channelId: "UC1", filters: { minDurationSec: 300, judgeHint: "官方频道" } }], { today: "2026-09-03" });
    expect(md).toContain("# 内容源清单 · 2026-09-03");
    expect((md.match(/^\| (aaa|bbb|talks) \|/gm) ?? []).length).toBe(3);
    expect(md).toContain("| anthropic | Anthropic | UC1 | — | 300 | 官方频道 |");
  });
});

describe("真数据冒烟(仓库里的 SOURCES + 账本)", () => {
  it("★★★ 账本里每个 cutoff key 要么对应一行、要么被点名为「已退役残留」(源清单与账本不脱节;实测 aia16z 就是残留)", () => {
    const state = JSON.parse(readFileSync(new URL("../data/pipeline-state.json", import.meta.url), "utf8"));
    const rows = sourceRegistryRows({ sources: SOURCES, backfillKeys: BACKFILL_FEED_KEYS, state, episodes: [] });
    const keys = new Set(rows.map((r) => r.key));
    const orphans = orphanCutoffs(SOURCES, state);
    for (const k of Object.keys(state.cutoffs ?? {})) expect(keys.has(k) || orphans.includes(k), `cutoff key ${k} 既不在 SOURCES 也没被点名`).toBe(true);
    // 机制用合成账本守(不把「今天恰好有 aia16z 残留」写死进测试,清理了残留不该红;GLM 015[4])
    expect(orphanCutoffs(SOURCES, { cutoffs: { [SOURCES[0].key]: "2026-01-01T00:00:00.000Z", zombie: "2026-01-01T00:00:00.000Z" } })).toEqual(["zombie"]);
    expect(toMarkdown(rows, [], { orphans: ["zombie"] })).toContain("已无此源");
    expect(rows.filter((r) => r.inBackfill).length).toBe(BACKFILL_FEED_KEYS.length + SOURCES.filter((s) => s.archiveFile && !BACKFILL_FEED_KEYS.includes(s.key)).length);
  });
});
