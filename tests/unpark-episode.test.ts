// 捞回停车集(2026-09-04:practicalai / productpodcast 转写已付费、稿在 git 历史里)。
// 守:坏产物不恢复;账本条目必须真删到(删不到就拒绝执行,免得以为捞成功了其实没有)。
import { describe, it, expect } from "vitest";
import { unparkFiles, dropSkipEntry } from "../scripts/unpark-episode.mjs";

const ID = "2026-09-02-productpodcast-anthropic-member-of-technical-staff-on-l";

describe("unparkFiles · 恢复清单", () => {
  it("★★★ 恢复转写/译文/meta/封面,跳过坏浓缩稿(.digest-raw.bad.txt 恢复了只会混淆排查)", () => {
    const tree = [
      `data/episodes/${ID}/.digest-raw.bad.txt`,
      `data/episodes/${ID}/cover.jpg`,
      `data/episodes/${ID}/meta.json`,
      `data/episodes/${ID}/transcript.en.json`,
      `data/episodes/${ID}/translation.zh.json`,
    ].join("\n");
    const { keep, skipped } = unparkFiles(tree);
    expect(keep).toHaveLength(4);
    expect(keep.some((p) => p.endsWith("transcript.en.json"))).toBe(true);
    expect(keep.some((p) => p.endsWith("translation.zh.json"))).toBe(true);
    expect(skipped).toEqual([`data/episodes/${ID}/.digest-raw.bad.txt`]);
  });
  it("★★ 空/脏输入不炸", () => {
    expect(unparkFiles("").keep).toEqual([]);
    expect(unparkFiles(undefined as any).keep).toEqual([]);
  });
  it("★★★ 恢复清单里绝不能有 digest.json —— 有它就被算作「已完成」,反而不会被重跑,捞回等于白做(GLM 009[1])", () => {
    // 原来这条断言是空转的:输入里本就没有 digest.json,恒真。真喂进去才测得出来。
    const tree = [`data/episodes/${ID}/transcript.en.json`, `data/episodes/${ID}/digest.json`].join("\n");
    const { keep, skipped } = unparkFiles(tree);
    expect(keep.some((p) => p.endsWith("digest.json"))).toBe(false);
    expect(keep).toEqual([`data/episodes/${ID}/transcript.en.json`]);
    expect(skipped).toContain(`data/episodes/${ID}/digest.json`);
  });
});

describe("dropSkipEntry · 删账本条目(不删=捞不回来)", () => {
  it("★★★ 删掉该 id,其余条目一条不动", () => {
    const r = dropSkipEntry([{ id: ID, reason: "转瞬失败连败 3 次" }, { id: "other", reason: "题材不对味" }], ID);
    expect(r.removed).toBe(1);
    expect(r.skipped).toEqual([{ id: "other", reason: "题材不对味" }]);
  });
  it("★★★ 账本里没有 → removed=0(调用方据此拒绝执行,免得以为捞成功了)", () => {
    expect(dropSkipEntry([{ id: "other" }], ID).removed).toBe(0);
    expect(dropSkipEntry(undefined as any, ID).removed).toBe(0);
  });
});
