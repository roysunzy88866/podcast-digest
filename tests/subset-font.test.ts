// 普惠体子集现切(2026-08-22):字符集收集是纯函数,验它把标题/UI/ASCII 都收进来。
// pyftsubset 真跑需二进制,不在单测里(deploy-site.sh 有 fail-open 兜底 + 部署后浏览器探针验覆盖)。
import { describe, it, expect } from "vitest";
import { buildCharset } from "../scripts/subset-font.mjs";

describe("subset-font · buildCharset 字符集收集", () => {
  const cs = buildCharset();
  const set = new Set([...cs]);

  it("★ 含 ASCII 字母数字(英文标题/数字用)", () => {
    for (const c of "AI0123abcXYZ") expect(set.has(c)).toBe(true);
  });

  it("★★ 含固定 UI 标签的字(否则这些字回退系统字=又是本次要治的病)", () => {
    for (const c of "跨国深谈全部主题按公司按播客关于本站我的收藏必读今天昨天最新最热") {
      expect(set.has(c)).toBe(true);
    }
  });

  it("★★★ 含当前真实标题的字(动态收集生效;抽仓里一集标题逐字命中)", () => {
    // 用真数据:取任一集 title_zh 的字都应在字符集里(动态收集覆盖标题=普惠体主战场)
    const sample = "智能体经济数字劳动力"; // 现有标题「智能体经济来了:从聊天框到数字劳动力」里的字
    for (const c of sample) expect(set.has(c)).toBe(true);
  });

  it("★ 含中文标点(标题/UI 里的顿号冒号等)", () => {
    for (const c of "，。：、？！“”（）") expect(set.has(c)).toBe(true);
  });

  it("★ 去重且不含换行/制表(pyftsubset --text-file 逐字符解析,脏字符会白占码位)", () => {
    expect(cs.length).toBe(set.size); // 已去重
    expect(set.has("\n")).toBe(false);
    expect(set.has("\t")).toBe(false);
  });
});
