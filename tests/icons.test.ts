// iOS 主屏图标规格守卫(2026-08-19 用户实测「图标还是显示『跨』字」)。
// iOS 对 apple-touch-icon 不接受透明通道:带 alpha 就弃用该图 → 退化成站名首字的系统图标。
// 这里直接验产物字节,不跑 sharp(测试不碰重依赖)。
import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";

const ICON = new URL("../assets/logos/apple-touch-icon.png", import.meta.url);

/** PNG IHDR:8 字节签名 + 4 长度 + 4 类型,宽高在 16..24,位深 24,色彩类型 25。 */
function pngHeader(buf: Buffer) {
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20), colorType: buf[25] };
}

describe("apple-touch-icon 规格(iOS 主屏图标)", () => {
  it("★★★ 文件在(deploy-site.sh 裸 cp 它,缺图即中断部署)", () => {
    expect(existsSync(ICON)).toBe(true);
  });
  it("★★★ 不带透明通道 —— 带 alpha 时 iOS 弃用该图标,退化成站名首字「跨」", () => {
    const { colorType } = pngHeader(readFileSync(ICON));
    // PNG 色彩类型:4=灰度+alpha、6=RGBA 都含透明;0/2/3 不含
    expect([4, 6]).not.toContain(colorType);
  });
  it("★★ 尺寸 180x180(iPhone @3x 标准)", () => {
    const { width, height } = pngHeader(readFileSync(ICON));
    expect([width, height]).toEqual([180, 180]);
  });
  it("★ 与 favicon 是两个文件:favicon 保留透明(标签页要),别再合并", () => {
    const fav = readFileSync(new URL("../assets/logos/icon.png", import.meta.url));
    expect(pngHeader(fav).colorType).toBe(6); // favicon 仍是 RGBA,刻意的
  });
});
