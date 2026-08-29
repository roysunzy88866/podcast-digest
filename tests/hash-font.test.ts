// 普惠体子集内容指纹(2026-08-29):治 iOS standalone app 固定名字体长期缓存旧 subset、
// 新标题字掉进系统字(用户「Safari 里字体一样、独立 App 里不一样」)。
// 这里钉的是**改写不变量**:指纹随内容变、custom.scss 与 preload 两处引用严格一致、锚点漂移硬错。
import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { hashFont } from "../scripts/hash-font.mjs";

const BASE = "AlibabaPuHuiTi-min.woff2";
const PATHREF = "/static/fonts/AlibabaPuHuiTi-min.woff2";
const dirs: string[] = [];

/** 造一个最小 site/ 骨架:字体 + custom.scss(@font-face)+ Head.tsx(preload)。fontBytes 决定指纹。 */
function makeSite(fontBytes: Buffer, opts: { scssRef?: boolean; headRef?: boolean } = {}) {
  const site = mkdtempSync(join(tmpdir(), "hf-"));
  dirs.push(site);
  mkdirSync(join(site, "quartz/static/fonts"), { recursive: true });
  mkdirSync(join(site, "quartz/styles"), { recursive: true });
  mkdirSync(join(site, "quartz/components"), { recursive: true });
  writeFileSync(join(site, "quartz/static/fonts", BASE), fontBytes);
  writeFileSync(
    join(site, "quartz/styles/custom.scss"),
    opts.scssRef === false
      ? `@font-face { src: url("/static/fonts/OTHER.woff2") format("woff2"); }`
      : `@font-face { font-family："AlibabaPuHuiTi"; src: url("${PATHREF}") format("woff2"); }`,
  );
  writeFileSync(
    join(site, "quartz/components/Head.tsx"),
    opts.headRef === false
      ? `<link rel="preload" href="/static/fonts/OTHER.woff2" as="font" />`
      : `<link rel="preload" href="${PATHREF}" as="font" type="font/woff2" crossOrigin="anonymous" />`,
  );
  return site;
}

afterEach(() => {
  for (const d of dirs.splice(0)) rmSync(d, { recursive: true, force: true });
});

describe("hash-font · 内容指纹改写", () => {
  it("★★★ 指纹 = 字体内容 sha256 前 10 位(内容一变文件名就变 → 这就是 cache-bust 的根)", () => {
    const bytes = Buffer.from("PUHUI-FONT-CONTENT-A");
    const site = makeSite(bytes);
    const { hash, hashedName } = hashFont(site);
    const expected = createHash("sha256").update(bytes).digest("hex").slice(0, 10);
    expect(hash).toBe(expected);
    expect(hashedName).toBe(`AlibabaPuHuiTi-min.${expected}.woff2`);
  });

  it("★★★ 不同内容 → 不同指纹名(否则 standalone 又会拿旧缓存)", () => {
    const a = hashFont(makeSite(Buffer.from("content-A"))).hashedName;
    const b = hashFont(makeSite(Buffer.from("content-B-different"))).hashedName;
    expect(a).not.toBe(b);
  });

  it("★★★ 指纹文件落地、未指纹的临时副本删掉", () => {
    const site = makeSite(Buffer.from("xyz"));
    const { hashedName } = hashFont(site);
    const fonts = join(site, "quartz/static/fonts");
    expect(existsSync(join(fonts, hashedName))).toBe(true); // 指纹版在
    expect(existsSync(join(fonts, BASE))).toBe(false); // 固定名删掉(否则被 immutable 长缓存又变旧字体祸根)
  });

  it("★★★ custom.scss 与 Head.tsx 两处引用**严格一致**都指向指纹名(GLM 20260829-058[4])", () => {
    const site = makeSite(Buffer.from("consistency-check"));
    const { hashedRef } = hashFont(site);
    const scss = readFileSync(join(site, "quartz/styles/custom.scss"), "utf8");
    const head = readFileSync(join(site, "quartz/components/Head.tsx"), "utf8");
    expect(scss).toContain(hashedRef);
    expect(head).toContain(hashedRef);
    expect(scss).not.toContain(PATHREF); // 旧固定名不再残留(否则 CSS 仍引 404)
    expect(head).not.toContain(PATHREF);
  });

  it("★★ 源字体缺失 → 硬错(fail-open 该由 patch-site 拷兜底保证,这里缺就是流程坏了)", () => {
    const site = mkdtempSync(join(tmpdir(), "hf-empty-"));
    dirs.push(site);
    expect(() => hashFont(site)).toThrow();
  });

  it("★★ custom.scss 引用锚点漂移 → 硬错(不静默放过)", () => {
    const site = makeSite(Buffer.from("anchor"), { scssRef: false });
    expect(() => hashFont(site)).toThrow(/引用锚点/);
  });

  it("★★ Head.tsx 引用锚点漂移 → 硬错(不静默放过)", () => {
    const site = makeSite(Buffer.from("anchor2"), { headRef: false });
    expect(() => hashFont(site)).toThrow(/引用锚点/);
  });
});
