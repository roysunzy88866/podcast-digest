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
  parseCurlMeta,
  audioAcceptable,
  staleAssets,
  isNetworkErr,
  scrubErr,
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
  // 函数体截到顶格 "\n}"(函数结束),不用固定字符窗口——窗口断言函数长了会漏检(GLM 030[1]/020[6] 同型坑)
  const asrStart = src.indexOf("function runAsr(");
  const runAsrBody = src.slice(asrStart, src.indexOf("\n}", asrStart) + 2);

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

describe("scrubErr(排查信息要够用,但不许顺带泄密)", () => {
  it("★ 代理/远端 URL 里内嵌的账号密码隐去(GLM 025[1])", () => {
    expect(scrubErr("http://tom:s3cret@10.0.0.1:8080")).toBe("http://<已隐去>@10.0.0.1:8080");
    expect(scrubErr("fatal: unable to access 'https://user:ghp_abc123@github.com/x/y.git/'"))
      .not.toContain("ghp_abc123");
  });
  it("多行 stderr 折成一行(不把日志拆碎)", () => {
    expect(scrubErr("warning: 前情\nfatal: 连不上")).toBe("warning: 前情 · fatal: 连不上");
  });
  it("保留尾部要害(连不上的真正原因在末尾)且能截断", () => {
    expect(scrubErr("fatal: unable to access: Failed to connect to 127.0.0.1 port 9")).toContain("Failed to connect");
    expect(scrubErr("x".repeat(500)).length).toBe(200);
  });
  it("空值不炸", () => {
    expect(scrubErr(null)).toBe("");
    expect(scrubErr(undefined)).toBe("");
  });
});

describe("isNetworkErr(该不该换出口重试的判据)", () => {
  it("★ 今天真见过的三种网络错都认(代理上游死/直连被掐/设备登录 EOF)", () => {
    expect(isNetworkErr("LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443")).toBe(true);
    expect(isNetworkErr("Failed to connect to github.com port 443 after 75003 ms: Couldn't connect to server")).toBe(true);
    expect(isNetworkErr('Post "https://github.com/login/device/code": EOF')).toBe(true);
    expect(isNetworkErr("curl: (28) Operation timed out")).toBe(true);
  });
  it("★ 代理上游半死的几种签名也认(GLM 024[3]:正是本方案要覆盖的故障)", () => {
    expect(isNetworkErr("curl: (52) Empty reply from server")).toBe(true);
    expect(isNetworkErr("curl: (56) Recv failure: Connection reset by peer")).toBe(true);
    expect(isNetworkErr("context deadline exceeded")).toBe(true);
  });
  it("★ 业务性失败不认(不为「release 不存在/没权限」白跑一次另一条出口)", () => {
    expect(isNetworkErr("release not found")).toBe(false);
    expect(isNetworkErr("HTTP 403: Resource not accessible by integration")).toBe(false);
    expect(isNetworkErr("")).toBe(false);
    expect(isNetworkErr(null)).toBe(false);
  });
});

describe("staleAssets(孤儿回收:不堆积的最后一道)", () => {
  it("★ 清单空时全是孤儿——这正是云端刚消费完的常态,回收必须够得着", () => {
    expect(staleAssets([`${ID}.mp3`], [])).toEqual([`${ID}.mp3`]);
  });
  it("在清单里的是正主,一个都不许删", () => {
    expect(staleAssets([`${ID}.mp3`], [{ id: ID, url: URL0 }])).toEqual([]);
  });
  it("混合场景只挑不在清单的", () => {
    expect(staleAssets([`${ID}.mp3`, "别的集.mp3"], [{ id: ID, url: URL0 }])).toEqual(["别的集.mp3"]);
  });
  it("中转站空 → 无事可做", () => {
    expect(staleAssets([], [{ id: ID, url: URL0 }])).toEqual([]);
  });
});

describe("parseCurlMeta(下载状态解析,坏文件拒收的判据)", () => {
  it("取出状态码与 content-type(音频正常放行)", () => {
    expect(parseCurlMeta("code=200 type=binary/octet-stream")).toEqual({ code: 200, ctype: "binary/octet-stream" });
    expect(parseCurlMeta("code=206 type=audio/mpeg")).toEqual({ code: 206, ctype: "audio/mpeg" });
  });
  it("挑战页(200+text/html)与 4xx 都能被判出来", () => {
    expect(parseCurlMeta("code=200 type=text/html; charset=utf-8")?.ctype).toMatch(/text\/html/);
    expect(parseCurlMeta("code=403 type=text/plain")?.code).toBe(403);
  });
  it("读不出即 null(调用方 fail-closed 拒传,不当成功)", () => {
    expect(parseCurlMeta("")).toBe(null);
    expect(parseCurlMeta("curl: (7) Failed to connect")).toBe(null);
    expect(parseCurlMeta(null)).toBe(null);
  });
});

describe("audioAcceptable(坏文件一律拒传中转站,fail-closed)", () => {
  const OK = { code: 200, ctype: "binary/octet-stream" };
  const BIG = 30 * 1024 * 1024;
  it("正常音频放行(200/206 + 二进制 + 够大)", () => {
    expect(audioAcceptable(OK, BIG).ok).toBe(true);
    expect(audioAcceptable({ code: 206, ctype: "audio/mpeg" }, BIG).ok).toBe(true);
  });
  it("挑战页(200+text/html)拒收", () => {
    expect(audioAcceptable({ code: 200, ctype: "text/html; charset=utf-8" }, BIG).ok).toBe(false);
  });
  it("★ 白名单而非黑名单:大 JSON/XML 错误页(体积够大)照样拒(GLM 022[2])", () => {
    expect(audioAcceptable({ code: 200, ctype: "application/json" }, BIG).ok).toBe(false);
    expect(audioAcceptable({ code: 200, ctype: "application/xml" }, BIG).ok).toBe(false);
  });
  it("真音频的几种 content-type 都认(实测口径:Substack/Megaphone/mp4 音轨/ogg/m4a)", () => {
    for (const c of ["binary/octet-stream", "audio/mpeg", "application/octet-stream", "video/mp4",
                     "AUDIO/MPEG", "audio/x-m4a", "audio/mp4", "application/ogg"])
      expect(audioAcceptable({ code: 200, ctype: c }, BIG).ok).toBe(true);
  });
  it("★ 拒收要说清是什么类型(误拒时能一眼看出该往白名单加什么;GLM 023[2])", () => {
    expect(audioAcceptable({ code: 200, ctype: "application/json" }, BIG).why).toContain("application/json");
  });
  it("★ 3xx 不收(curl -L 已跟完重定向,正常终态必是 2xx;GLM 022[6])", () => {
    expect(audioAcceptable({ code: 302, ctype: "audio/mpeg" }, BIG).ok).toBe(false);
  });
  it("★ code=000(DNS/连接失败 curl 仍打 -w)不许当成功混过去", () => {
    expect(audioAcceptable({ code: 0, ctype: "" }, BIG).ok).toBe(false);
    expect(audioAcceptable({ code: 403, ctype: "audio/mpeg" }, BIG).ok).toBe(false);
  });
  it("★ 响应没说 content-type = 判不出,拒收(不靠体积兜底)", () => {
    expect(audioAcceptable({ code: 200, ctype: "" }, BIG).ok).toBe(false);
  });
  it("★ 空 body(文件缺失 size=0)走人话拒收,不抛 fs 错", () => {
    expect(audioAcceptable(OK, 0).ok).toBe(false);
    expect(audioAcceptable(OK, 50 * 1024).ok).toBe(false);
  });
  it("★ meta 读不出(curl 输出异常)拒收", () => {
    expect(audioAcceptable(null, BIG).ok).toBe(false);
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
