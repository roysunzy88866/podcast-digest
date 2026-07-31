// C16 · 本机种子脚本纯逻辑测试(URL 解析 / yt-dlp 元数据 → seed.json / Release asset 直链拼接)。
// 铁律:测试全假实现,绝不真下载、不碰 yt-dlp/gh 真命令(副作用只在 main())。
import { describe, it, expect } from "vitest";
import { videoIdFromUrl, seedFromYtdlpJson, assetUrlFor, RELEASE_TAG } from "../scripts/seed-talk.mjs";

describe("videoIdFromUrl", () => {
  it("watch?v= 标准链接", () => {
    expect(videoIdFromUrl("https://www.youtube.com/watch?v=xUnRQ9vLXxo")).toBe("xUnRQ9vLXxo");
  });
  it("watch?v= 带多余参数(t=、list=)", () => {
    expect(videoIdFromUrl("https://www.youtube.com/watch?v=fr1IQspixmM&t=120s&list=PL1")).toBe("fr1IQspixmM");
  });
  it("youtu.be 短链", () => {
    expect(videoIdFromUrl("https://youtu.be/ZEL0EAVtCTY")).toBe("ZEL0EAVtCTY");
  });
  it("live/ 形态", () => {
    expect(videoIdFromUrl("https://www.youtube.com/live/2ZCc4k_IV5w")).toBe("2ZCc4k_IV5w");
  });
  it("认不出返回 null(不猜)", () => {
    expect(videoIdFromUrl("https://example.com/foo")).toBe(null);
    expect(videoIdFromUrl("")).toBe(null);
  });
});

describe("seedFromYtdlpJson(yt-dlp --dump-single-json → seed.json 形状)", () => {
  // 镜像 yt-dlp 真实输出的关键字段形状(id/title/channel/uploader/upload_date=YYYYMMDD/duration 秒)
  const J = {
    id: "xUnRQ9vLXxo",
    title: "Everything we knew about software has changed — Theo Browne",
    channel: "AI Engineer",
    uploader: "AI Engineer",
    upload_date: "20260708",
    duration: 998,
    webpage_url: "https://www.youtube.com/watch?v=xUnRQ9vLXxo",
  };
  it("字段逐一映射,upload_date 转 YYYY-MM-DD", () => {
    const s = seedFromYtdlpJson(J, { audioFile: "xUnRQ9vLXxo.m4a", assetUrl: "https://github.com/o/r/releases/download/talks-seed/xUnRQ9vLXxo.m4a" });
    expect(s.videoId).toBe("xUnRQ9vLXxo");
    expect(s.title).toBe(J.title);
    expect(s.channel).toBe("AI Engineer");
    expect(s.uploader).toBe("AI Engineer");
    expect(s.upload_date).toBe("2026-07-08");
    expect(s.duration_sec).toBe(998);
    expect(s.url).toBe("https://www.youtube.com/watch?v=xUnRQ9vLXxo");
    expect(s.audio_file).toBe("xUnRQ9vLXxo.m4a");
    expect(s.audio_asset_url).toContain("/releases/download/");
  });
  it("缺 id 或 upload_date 直接抛(fail-closed,不产坏种子)", () => {
    expect(() => seedFromYtdlpJson({ ...J, id: undefined }, { audioFile: "a", assetUrl: null })).toThrow();
    expect(() => seedFromYtdlpJson({ ...J, upload_date: undefined }, { audioFile: "a", assetUrl: null })).toThrow();
  });
  it("--no-upload 时 assetUrl 可为 null(种子先落,补传后再写)", () => {
    const s = seedFromYtdlpJson(J, { audioFile: "xUnRQ9vLXxo.m4a", assetUrl: null });
    expect(s.audio_asset_url).toBe(null);
  });
});

describe("assetUrlFor(远端 → Release asset 公开直链)", () => {
  it("https 远端(带 .git)", () => {
    expect(assetUrlFor("https://github.com/roysunzy88866/podcast-digest.git", RELEASE_TAG, "xUnRQ9vLXxo.m4a"))
      .toBe(`https://github.com/roysunzy88866/podcast-digest/releases/download/${RELEASE_TAG}/xUnRQ9vLXxo.m4a`);
  });
  it("ssh 远端(git@github.com:owner/repo.git)", () => {
    expect(assetUrlFor("git@github.com:o/r.git", "talks-seed", "a.m4a"))
      .toBe("https://github.com/o/r/releases/download/talks-seed/a.m4a");
  });
  it("认不出的远端抛错(不拼瞎 URL)", () => {
    expect(() => assetUrlFor("https://gitlab.com/o/r.git", "t", "a")).toThrow();
  });
});
