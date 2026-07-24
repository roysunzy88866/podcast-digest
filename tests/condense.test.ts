// condense 的 JSON 提取容错(C7b lab E2E 逼出:GLM 把长 digest_md 的真换行直接塞进 JSON 字符串→控制字符非法)
import { describe, it, expect } from "vitest";
import { escapeCtrlInStrings, extractJson } from "../scripts/condense.mjs";

describe("escapeCtrlInStrings", () => {
  it("转义字符串内的裸换行/Tab,结构空白不动", () => {
    const bad = '{\n  "a": "行1\n行2\t制表"\n}';
    const fixed = escapeCtrlInStrings(bad);
    expect(fixed).toBe('{\n  "a": "行1\\n行2\\t制表"\n}');
    expect(() => JSON.parse(fixed)).not.toThrow();
    expect(JSON.parse(fixed).a).toBe("行1\n行2\t制表");
  });
  it("已转义的 \\n 不被二次转义", () => {
    const ok = '{"a":"已经\\n转义"}';
    expect(escapeCtrlInStrings(ok)).toBe(ok);
  });
});

describe("extractJson", () => {
  it("字符串里有裸换行(真实 GLM 毛病)→ 兜底转义后能解析", () => {
    const raw = '{\n  "tldr": "摘要",\n  "digest_md": "第一段\n\n> 【背景】第二段",\n  "quotes": []\n}';
    const o = extractJson(raw);
    expect(o).not.toBeNull();
    expect(o.digest_md).toContain("第一段");
    expect(o.digest_md).toContain("第二段");
  });
  it("剥 ```json fence", () => {
    expect(extractJson('```json\n{"a":1}\n```')).toEqual({ a: 1 });
  });
  it("干净 JSON 直接过", () => {
    expect(extractJson('{"a":1,"b":"x"}')).toEqual({ a: 1, b: "x" });
  });
  it("彻底不是 JSON → null", () => {
    expect(extractJson("这里没有大括号")).toBeNull();
  });
});

describe("validate · C5.1 Scenario 5:浓缩产物必须带 title_zh(中文标题)", () => {
  it("★ 缺 title_zh → 结构不合格(逼 GLM 重试,不留空标题)", async () => {
    const { validate } = await import("../scripts/condense.mjs");
    const ok = {
      title_zh: "标题",
      tldr: "一句话",
      digest_md: "x".repeat(300),
      quotes: [1, 2, 3, 4].map((i) => ({ en: "e", zh: "z", timestamp: "0:0" + i, speaker: "s" })),
    };
    expect(validate(ok)).toEqual([]);
    const { title_zh, ...noTitle } = ok;
    expect(validate(noTitle).join()).toContain("title_zh");
  });
});
