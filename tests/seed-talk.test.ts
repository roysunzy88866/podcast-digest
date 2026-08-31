// C16 · 本机种子脚本纯逻辑测试(URL 解析 / yt-dlp 元数据 → seed.json / Release asset 直链拼接)。
// 铁律:测试全假实现,绝不真下载、不碰 yt-dlp/gh 真命令(副作用只在 main())。
import { describe, it, expect } from "vitest";
import { videoIdFromUrl, seedFromYtdlpJson, assetUrlFor, RELEASE_TAG } from "../scripts/seed-talk.mjs";
import { readFileSync } from "node:fs";

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

// YouTube 抓取修复(2026-08-31):反爬升级后原做法 403 / 只给 m3u8 / 误抓配音轨。
// yt-dlp 下载在 CLI main() 里(不导出),故钉源码形状——但都是**行为关键**的不变量,漂了就回归。
describe("YouTube 抓取修复 · 源码不变量(GLM 024 采纳项)", () => {
  // 剥注释再断言(GLM 027[1]:注释里也写着 player_client=default 等字符串,不剥会被凑数)
  const raw = readFileSync(new URL("../scripts/seed-talk.mjs", import.meta.url), "utf8");
  const src = raw.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:])\/\/.*$/gm, "$1");

  it("★★★ 下载与元数据都钉 player_client=default(直连 m4a;两处同客户端·剥注释后计数)", () => {
    expect((src.match(/youtube:player_client=default/g) || []).length).toBeGreaterThanOrEqual(2);
  });
  it("★★★ 显式 -S lang,quality:原始语轨排最前,防误抓配音轨(整集译错语言)", () => {
    expect(src).toMatch(/"-S",\s*"lang,quality"/);
  });
  it("★★★ 格式优先 m4a+https(避开 m3u8/HLS 的 ffmpeg 196)", () => {
    expect(src).toContain('bestaudio[ext=m4a][protocol=https]');
  });
  it("★★★ 复用/查找音频**精确**匹配 ^<vid>.<音频扩展名>$,不吃残留/前缀撞车(GLM 024[1][4]+026[1][2])", () => {
    // 前缀 ^vid\.(m4a| 且**必须**以 $)结尾锚定(GLM 027[2]:缺 $ 会退化成前缀匹配、精确不变量钉不全)
    expect(src).toMatch(/audioRe\s*=\s*new RegExp\("\^"\s*\+\s*vid\s*\+\s*"\\\\\.\(m4a\|[^"]*\)\$"/);
    // 旧的宽松写法一律铲除(放行任意残留 / startsWith 前缀)
    expect(src).not.toMatch(/f\.startsWith\(vid\) && f !== "seed\.json"/);
    expect(src).not.toMatch(/f\.startsWith\(vid\) && isAudioFile/);
  });
});
