// C30 · 音频搬运工纯逻辑测试(登记/消费清账/中转直链/失败签名/候选序)。
// 铁律:测试全假实现,绝不真下载、不碰 git/gh 真命令(副作用只在 main())。
import { readFileSync } from "node:fs";
import { describe, it, expect } from "vitest";
import {
  RELAY_TAG,
  relayAssetName,
  relayUrlFor,
  isAudioDownloadFail,
  noteAudioWanted,
  consumeAudioWanted,
  listAudioWanted,
  parseAssetNames,
} from "../scripts/audio-relay.mjs";
import { audioUrlCandidates } from "../scripts/fetch-source-whisperx.mjs";
import { migrateState } from "../scripts/run-pipeline.mjs";

const ID = "2026-08-17-lennys-how-a-solo-founder-used-codex-and";
const URL0 = "https://api.substack.com/feed/podcast/210800379/abc.mp3";

describe("relayAssetName / relayUrlFor", () => {
  it("asset 名 = 集id.mp3", () => {
    expect(relayAssetName(ID)).toBe(`${ID}.mp3`);
  });
  it("直链 = 本仓 Release audio-relay tag 下的 asset(复用 seed-talk 拼接)", () => {
    expect(relayUrlFor("https://github.com/roysunzy88866/podcast-digest.git", ID)).toBe(
      `https://github.com/roysunzy88866/podcast-digest/releases/download/${RELAY_TAG}/${encodeURIComponent(`${ID}.mp3`)}`,
    );
  });
  it("认不出远端即抛(不拼瞎 URL)", () => {
    expect(() => relayUrlFor("git@bitbucket.org:x/y.git", ID)).toThrow();
  });
});

describe("isAudioDownloadFail(登记触发签名)", () => {
  it("认 fetch-source-whisperx 的 403(经 run() 包壳后仍在 message 里)", () => {
    const runWrapped =
      "步骤失败(exit 1): node scripts/fetch-source-whisperx.mjs data/episodes/x --transcribe --audio-url https://…\n" +
      "Error: 音频下载失败 HTTP 403(URL: https://api.substack.com/feed/podcast/210800379/…)";
    expect(isAudioDownloadFail(runWrapped)).toBe(true);
  });
  it("认多候选失败串(中转+原直链都挂)", () => {
    expect(isAudioDownloadFail("音频下载失败 HTTP 404(URL: …);再试 HTTP 403(URL: …)")).toBe(true);
  });
  it("内容审查 [1301] / GLM 网络错 / 空值,一概不认(别把别的失败登记成搬运活)", () => {
    expect(isAudioDownloadFail('翻译失败 {"code":"1301"}')).toBe(false);
    expect(isAudioDownloadFail("glm fetch failed")).toBe(false);
    expect(isAudioDownloadFail(null)).toBe(false);
    expect(isAudioDownloadFail(undefined)).toBe(false);
  });
});

describe("audioWanted 账本(登记/消费/罗列)", () => {
  it("登记 → 罗列 → 消费返回 asset 名并划账;再消费 = null", () => {
    const state: any = { cutoffs: {}, skipped: [] };
    noteAudioWanted(state, ID, URL0);
    expect(listAudioWanted(state)).toEqual([{ id: ID, url: URL0 }]);
    expect(consumeAudioWanted(state, ID)).toBe(`${ID}.mp3`);
    expect(listAudioWanted(state)).toEqual([]); // 变异「去清账」(不 delete)在此当场红
    expect(consumeAudioWanted(state, ID)).toBe(null);
  });
  it("同 id 重复登记 = 覆写 URL(以最新 feed 为准),不长膘", () => {
    const state: any = {};
    noteAudioWanted(state, ID, "https://old");
    noteAudioWanted(state, ID, URL0);
    expect(listAudioWanted(state)).toEqual([{ id: ID, url: URL0 }]);
  });
  it("不在账上的消费不动 state;空/缺键 state 都不崩", () => {
    const state: any = { audioWanted: { [ID]: URL0 } };
    expect(consumeAudioWanted(state, "别的集")).toBe(null);
    expect(state.audioWanted[ID]).toBe(URL0);
    expect(consumeAudioWanted({}, ID)).toBe(null);
    expect(listAudioWanted(undefined)).toEqual([]);
  });
  it("migrateState 透传 audioWanted(...rest,老状态文件带上它不丢)", () => {
    const out = migrateState({ cutoffs: { lennys: "2026-08-16T12:31:42.000Z" }, skipped: [], audioWanted: { [ID]: URL0 } });
    expect(out.audioWanted).toEqual({ [ID]: URL0 });
  });
});

describe("audioUrlCandidates(中转站优先)", () => {
  it("有中转 → [中转, 原直链](顺序就是优先级;变异「去优先查」翻序在此当场红)", () => {
    expect(audioUrlCandidates(URL0, "https://relay/x.mp3")).toEqual(["https://relay/x.mp3", URL0]);
  });
  it("无中转 → 只有原直链(与没有 C30 时一致)", () => {
    expect(audioUrlCandidates(URL0, null)).toEqual([URL0]);
    expect(audioUrlCandidates(URL0, undefined)).toEqual([URL0]);
  });
});

describe("run-pipeline 接线(源码锚,防登记/清账/优先查被静默摘除)", () => {
  const src = readFileSync(new URL("../scripts/run-pipeline.mjs", import.meta.url), "utf8");
  const runAsrBody = src.slice(src.indexOf("function runAsr("), src.indexOf("function runAsr(") + 1200);

  it("★★★ 两处转瞬失败 catch(processSource+补历史)都登记待搬运并即刻落盘", () => {
    expect((src.match(/isAudioDownloadFail\(e\.message\)/g) ?? []).length).toBe(2);
    expect((src.match(/noteAudioWanted\(state, id, item\.enclosureUrl\)/g) ?? []).length).toBe(2);
  });
  it("★★★ runAsr:已登记的集附 --relay-url;转写成功后消费清账 + 删中转站 asset", () => {
    expect(runAsrBody).toContain('"--relay-url"');
    expect(runAsrBody).toContain("consumeAudioWanted(state, id)");
    expect(runAsrBody).toContain('"delete-asset"');
  });
});

describe("parseAssetNames(gh release view --json assets)", () => {
  it("正常输出取名字", () => {
    expect(parseAssetNames(JSON.stringify({ assets: [{ name: "a.mp3" }, { name: "b.mp3" }] }))).toEqual(["a.mp3", "b.mp3"]);
  });
  it("release 不存在/坏输出/无 assets → 空数组(别崩搬运)", () => {
    expect(parseAssetNames("release not found")).toEqual([]);
    expect(parseAssetNames("")).toEqual([]);
    expect(parseAssetNames(JSON.stringify({}))).toEqual([]);
  });
});
