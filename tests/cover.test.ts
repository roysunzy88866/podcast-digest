// 每集配图 · 真业务测试。只调被测函数,不联网、不跑 ffmpeg。
//
// 这里守住的是两条**踩过坑才立的规矩**,回归了会静默毁掉一批集的配图:
//  ① og:image 必须抠出「原图」而不是 CDN 变换图 —— 变换图被裁成 1200×600,构图不完整。
//  ② 不许再加长宽比闸门 —— 上一版「只收 1:1、16:9 丢弃」误杀了十分之一的库(2026-07-26 实测:
//     被丢掉的 10 张全是带嘉宾脸的可用图)。
import { describe, it, expect } from "vitest";
import { officialImageFromHtml } from "../scripts/cover.mjs";

const og = (content: string) => `<meta data-rh="true" property="og:image" content="${content}">`;

describe("officialImageFromHtml · 从集页抠官方图", () => {
  it("★ Substack CDN 变换链接 → 抠出尾部编码的原图直链(不是变换图)", () => {
    const orig = "https://substack-post-media.s3.amazonaws.com/public/images/abc_2048x2048.png";
    const html = og(
      "https://substackcdn.com/image/fetch/$s_!U1KL!,w_1200,h_600,c_fill,f_jpg/" +
        encodeURIComponent(orig),
    );
    expect(officialImageFromHtml(html)).toBe(orig);
  });

  it("★ 非 Substack 源没有那层编码 → 原样返回 og:image", () => {
    const u = "https://cdn.example.com/episode-42.jpg";
    expect(officialImageFromHtml(og(u))).toBe(u);
  });

  it("页面没有 og:image → 空串(调用方据此记 no-url,不重抠)", () => {
    expect(officialImageFromHtml("<html><head><title>x</title></head></html>")).toBe("");
  });

  it("空输入不抛", () => {
    expect(officialImageFromHtml("")).toBe("");
    expect(officialImageFromHtml(undefined as unknown as string)).toBe("");
  });

  it("★ 16:9 的图也照收 —— 抠链接这一步不做任何长宽比判断(误杀过十分之一的库)", () => {
    const wide = "https://substack-post-media.s3.amazonaws.com/public/images/x_1456x819.png";
    const html = og("https://substackcdn.com/image/fetch/w_1456/" + encodeURIComponent(wide));
    expect(officialImageFromHtml(html)).toBe(wide);
  });
});
