// C4 Scenario 4 · 音频机器闸门(四条,严格 fail-closed)真业务测试。
//
// 纪律:真调 gateAudio 喂临时目录假 digest/meta/mp3;每条闸门造真攻击实测被拦(★),
// 并有 GOOD 基线证明不是「一律判否蒙混」。单测注入假 probe(不跑 ffprobe);
// 另有一条真 ffmpeg/ffprobe 集成测试(生成静音 mp3 真探测),证默认 probe 通路可用。
import { describe, it, expect } from "vitest";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { gateAudio } from "../scripts/gate-audio.mjs";
import { buildFeedXml, feedEnclosuresFromXml } from "../scripts/build-feed.mjs";
import { sourceHash } from "../scripts/tts.mjs";

const DIGEST = { tldr: "一句话概要。", digest_md: "## 主线\n\n正文内容。" };
const goodMeta = () => ({ id: "ep", voice: "zh-CN-XiaoxiaoNeural", chunk_count: 1, duration_sec: 12.3, source_sha256: sourceHash(DIGEST), format: "mp3" });

// 造一集,可选择性缺件/坏件
function makeEpisode(
  base: string,
  id: string,
  opts: { digest?: any; audio?: Buffer | null; meta?: any } = {},
) {
  const { digest = DIGEST, audio = Buffer.from("REAL_MP3_BYTES_NONEMPTY"), meta = { ...goodMeta(), id } } = opts;
  const dir = join(base, id);
  mkdirSync(dir, { recursive: true });
  if (digest !== null) writeFileSync(join(dir, "digest.json"), JSON.stringify(digest));
  if (audio !== null) writeFileSync(join(dir, "audio.mp3"), audio);
  if (meta !== null) writeFileSync(join(dir, "audio.meta.json"), JSON.stringify(meta));
  return dir;
}

const probe12 = { probe: async () => 12.3 }; // 假 probe:可读、时长 12.3s

function withBase(fn: (base: string) => Promise<void> | void) {
  return async () => {
    const base = mkdtempSync(join(tmpdir(), "gateaudio-"));
    try {
      await fn(base);
    } finally {
      rmSync(base, { recursive: true, force: true });
    }
  };
}

describe("gateAudio · GOOD 基线(证明不是一律判否)", () => {
  it(
    "全部齐备 + enclosure 真实 → ok=true",
    withBase(async (base) => {
      makeEpisode(base, "ep");
      const enc = [{ id: "ep", path: join(base, "ep", "audio.mp3") }];
      const r = await gateAudio(["ep"], { base, feedEnclosures: enc, deps: probe12 });
      expect(r.ok).toBe(true);
      expect(r.failures).toEqual([]);
    }),
  );
});

describe("gateAudio · ① 缺音频必拦(缺≠通过)", () => {
  it(
    "已发布集没有 audio.mp3 → ok=false, kind=缺音频",
    withBase(async (base) => {
      makeEpisode(base, "ep", { audio: null });
      const r = await gateAudio(["ep"], { base, deps: probe12 });
      expect(r.ok).toBe(false);
      expect(r.failures.some((f: any) => f.kind === "缺音频")).toBe(true);
    }),
  );
});

describe("gateAudio · ② 非空 + 可读 + 时长>0", () => {
  it(
    "0 字节 mp3 → ok=false, kind=空音频",
    withBase(async (base) => {
      makeEpisode(base, "ep", { audio: Buffer.alloc(0) });
      const r = await gateAudio(["ep"], { base, deps: probe12 });
      expect(r.ok).toBe(false);
      expect(r.failures.some((f: any) => f.kind === "空音频")).toBe(true);
    }),
  );
  it(
    "★ ffprobe 读不了(损坏/非音频)→ ok=false, kind=音频损坏(fail-closed:查不了≠通过)",
    withBase(async (base) => {
      makeEpisode(base, "ep");
      const throwingProbe = {
        probe: async () => {
          throw new Error("moov atom not found");
        },
      };
      const r = await gateAudio(["ep"], { base, deps: throwingProbe });
      expect(r.ok).toBe(false);
      expect(r.failures.some((f: any) => f.kind === "音频损坏")).toBe(true);
    }),
  );
  it(
    "时长 0 → ok=false, kind=时长为零",
    withBase(async (base) => {
      makeEpisode(base, "ep");
      const r = await gateAudio(["ep"], { base, deps: { probe: async () => 0 } });
      expect(r.ok).toBe(false);
      expect(r.failures.some((f: any) => f.kind === "时长为零")).toBe(true);
    }),
  );
  it(
    "低于时长下限 → ok=false, kind=时长过短",
    withBase(async (base) => {
      makeEpisode(base, "ep");
      const r = await gateAudio(["ep"], { base, minDuration: 60, deps: probe12 });
      expect(r.ok).toBe(false);
      expect(r.failures.some((f: any) => f.kind === "时长过短")).toBe(true);
    }),
  );
});

describe("gateAudio · ③ 源文本一致性(防陈旧音频)", () => {
  it(
    "★ meta hash 与当前 digest 对不上 → ok=false, kind=音频陈旧",
    withBase(async (base) => {
      makeEpisode(base, "ep", { meta: { ...goodMeta(), id: "ep", source_sha256: "deadbeef".repeat(8) } });
      const r = await gateAudio(["ep"], { base, deps: probe12 });
      expect(r.ok).toBe(false);
      expect(r.failures.some((f: any) => f.kind === "音频陈旧")).toBe(true);
    }),
  );
  it(
    "meta 无 source_sha256 → ok=false, kind=meta缺hash(判不了≠通过)",
    withBase(async (base) => {
      makeEpisode(base, "ep", { meta: { id: "ep", duration_sec: 12 } });
      const r = await gateAudio(["ep"], { base, deps: probe12 });
      expect(r.ok).toBe(false);
      expect(r.failures.some((f: any) => f.kind === "meta缺hash")).toBe(true);
    }),
  );
  it(
    "改了 digest 但没重合成(meta hash 停在旧值)→ 陈旧被拦",
    withBase(async (base) => {
      // meta 的 hash 是旧 digest 的;现在 digest 变了
      const oldHash = sourceHash({ tldr: "旧", digest_md: "旧文" });
      makeEpisode(base, "ep", { digest: DIGEST, meta: { ...goodMeta(), id: "ep", source_sha256: oldHash } });
      const r = await gateAudio(["ep"], { base, deps: probe12 });
      expect(r.ok).toBe(false);
      expect(r.failures.some((f: any) => f.kind === "音频陈旧")).toBe(true);
    }),
  );
});

describe("gateAudio · 缺 digest / 缺 meta 一律 fail-closed", () => {
  it(
    "缺 digest.json → ok=false, kind=缺digest(没东西可查≠通过)",
    withBase(async (base) => {
      makeEpisode(base, "ep", { digest: null });
      const r = await gateAudio(["ep"], { base, deps: probe12 });
      expect(r.ok).toBe(false);
      expect(r.failures.some((f: any) => f.kind === "缺digest")).toBe(true);
    }),
  );
  it(
    "缺 audio.meta.json → ok=false, kind=缺meta",
    withBase(async (base) => {
      makeEpisode(base, "ep", { meta: null });
      const r = await gateAudio(["ep"], { base, deps: probe12 });
      expect(r.ok).toBe(false);
      expect(r.failures.some((f: any) => f.kind === "缺meta")).toBe(true);
    }),
  );
});

describe("gateAudio · ④ feed enclosure 指向真实文件", () => {
  it(
    "★ enclosure 指向不存在的文件 → ok=false, kind=死enclosure",
    withBase(async (base) => {
      makeEpisode(base, "ep");
      const enc = [{ id: "ep", path: join(base, "ep", "MISSING.mp3") }];
      const r = await gateAudio(["ep"], { base, feedEnclosures: enc, deps: probe12 });
      expect(r.ok).toBe(false);
      expect(r.failures.some((f: any) => f.kind === "死enclosure")).toBe(true);
    }),
  );
  it(
    "enclosure 指向 0 字节文件 → ok=false, kind=空enclosure",
    withBase(async (base) => {
      makeEpisode(base, "ep");
      const emptyEnc = join(base, "ep", "empty.mp3");
      writeFileSync(emptyEnc, Buffer.alloc(0));
      const r = await gateAudio(["ep"], { base, feedEnclosures: [{ id: "ep", path: emptyEnc }], deps: probe12 });
      expect(r.ok).toBe(false);
      expect(r.failures.some((f: any) => f.kind === "空enclosure")).toBe(true);
    }),
  );
});

describe("gateAudio · ④ 公开 URL feed 反解回本地音频(C7a,drift #18,fail-closed 守卫)", () => {
  it(
    "★★ 公开 URL 指向站点没有的音频(GHOST)→ feedEnclosuresFromXml 映射后被 ④ 逮(死enclosure)",
    withBase(async (base) => {
      const xml = buildFeedXml(
        [
          {
            id: "ghost",
            title: "G",
            description: "",
            pubDate: "2026-07-08",
            audioUrl: "https://listen.hearagain.space/audio/ghost.mp3",
            audioLength: 100,
            durationSec: 10,
          },
        ],
        {},
      );
      const encs = feedEnclosuresFromXml(xml, { root: base }); // → base/data/episodes/ghost/audio.mp3(不存在)
      const r = await gateAudio([], { base, feedEnclosures: encs, deps: probe12 });
      expect(r.ok).toBe(false);
      expect(r.failures.some((f: any) => f.kind === "死enclosure")).toBe(true);
    }),
  );
  it(
    "★ path=null(认不出的 url)→ ④ 判死enclosure(查不了≠通过)",
    withBase(async (base) => {
      const r = await gateAudio([], { base, feedEnclosures: [{ id: "https://x/y.txt", path: null }], deps: probe12 });
      expect(r.ok).toBe(false);
      expect(r.failures.some((f: any) => f.kind === "死enclosure")).toBe(true);
    }),
  );
});

describe("gateAudio · 无已发布集 = 真的没东西可查(非 fail-open)", () => {
  it(
    "publishedEpisodes 空 + enclosures 空 → ok=true(不是跳过该跑的检查)",
    withBase(async (base) => {
      const r = await gateAudio([], { base, feedEnclosures: [], deps: probe12 });
      expect(r.ok).toBe(true);
    }),
  );
});

// ── 真 ffmpeg/ffprobe 集成:生成静音 mp3 → 默认 probe 真探测(证通路可用,不注入假 probe)──
let hasFfmpeg = true;
try {
  execFileSync("ffmpeg", ["-version"], { stdio: "ignore" });
  execFileSync("ffprobe", ["-version"], { stdio: "ignore" });
} catch {
  hasFfmpeg = false;
}
(hasFfmpeg ? describe : describe.skip)("gateAudio · 真 ffprobe 集成(生成静音 mp3 真探测)", () => {
  it(
    "真 mp3 + 默认 probe → ② 通过(时长>0 真读到)",
    withBase(async (base) => {
      const dir = makeEpisode(base, "ep", { audio: null }); // 先建目录/digest/meta,音频用 ffmpeg 生成
      const mp3 = join(dir, "audio.mp3");
      execFileSync("ffmpeg", ["-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono", "-t", "1", "-q:a", "9", "-y", mp3], {
        stdio: "ignore",
      });
      expect(existsSync(mp3)).toBe(true);
      const enc = [{ id: "ep", path: mp3 }];
      // 不注入 deps.probe → 用默认 ffprobeDuration 真探测
      const r = await gateAudio(["ep"], { base, feedEnclosures: enc });
      expect(r.ok).toBe(true);
    }),
  );
});
