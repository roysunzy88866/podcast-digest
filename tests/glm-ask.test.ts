// drift #92 · glm-ask 默认关闭模型思考:路由到的 glm-5.3-flash 会只回 thinking 块把 max_tokens 烧光,text 块永远到不了 →
// 判官返回空 / 翻译整块缺 / 浓缩空返回 的同一根因(drift #82 的 token 上限只是症状)。实测关掉后 0/50 → 50/50。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

describe("drift #92 · tools/glm-ask 思考关闭 + 无 text 块响亮", () => {
  const src = readFileSync(new URL("../tools/glm-ask", import.meta.url), "utf8");
  it("★★★ 请求体默认带 thinking disabled(GLM_THINKING=on 可开)", () => {
    expect(src).toContain('{"thinking": {"type": "disabled"}}');
    expect(src).toContain('GLM_THINKING');
  });
  it("★★★ 响应没有 text 块时必须在 stderr 响亮说明(空输出不许静默)", () => {
    expect(src).toContain("响应无有效 text 内容");
    expect(src).toMatch(/if not text\.strip\(\):/);
  });
  it("★★ 仍只把 text 块当输出(thinking 块不混进 stdout)", () => {
    expect(src).toMatch(/if b\.get\("type"\) == "text"\)/);
  });
});
