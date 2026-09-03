// C34 · 选题品味判官(播客线)纯逻辑测试。
// 血案:题材筛选只对 1 个源生效且靠关键词 → 一集「222 纳米杀菌灯」做完全链才被用户发现,
// 白烧 192 分钟转写。品味规则本就写在档案里,代码却没读它。
// 铁律:测试不碰 glm-ask、不读网络(副作用只在 judgeEpisodeTaste 的 spawnSync 里)。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { parseVerdict, judgeAllows, shouldProcess, judgeInput, TASTE_JUDGE_MODEL, JUDGE_FRESHNESS_DAYS, ageDays, judgeLogEntry, JUDGE_MAX_TOKENS } from "../scripts/taste-judge.mjs";

describe("parseVerdict", () => {
  it("认得出规范输出", () => {
    expect(parseVerdict('{"verdict":"对味","reason":"AI 智能体深挖"}')).toEqual({ verdict: "对味", reason: "AI 智能体深挖" });
  });
  it("★ 前后有噪音(模型爱加解释)也能抠出来", () => {
    expect(parseVerdict('好的,判断如下:\n{"verdict":"不对味","reason":"公共卫生硬件"}\n希望有帮助')?.verdict).toBe("不对味");
  });
  it("★ reason 含花括号 / 键序颠倒也认得出(GLM 038[3]:单层正则会漏)", () => {
    expect(parseVerdict('{"verdict":"不对味","reason":"含{括号}的理由"}')?.verdict).toBe("不对味");
    expect(parseVerdict('{"reason":"x","verdict":"不对味"}')?.verdict).toBe("不对味");
  });
  it("坏 JSON / 空 / 非法 verdict → null(交调用方按判不出处理)", () => {
    expect(parseVerdict("{verdict: 对味}")).toBe(null);
    expect(parseVerdict("")).toBe(null);
    expect(parseVerdict(null)).toBe(null);
    expect(parseVerdict('{"verdict":"也许","reason":"x"}')).toBe(null);
  });
});

describe("shouldProcess · 失败策略刻意不对称", () => {
  it("★★★ 明确「不对味」→ 拒绝(这正是本功能的意义:222 纳米光那类不该做)", () => {
    const r = shouldProcess({ verdict: "不对味", reason: "杀菌灯属公共卫生硬件,非 AI/创业" });
    expect(r.ok).toBe(false);
    expect(r.why).toContain("杀菌灯");
  });
  it("★★★ 判官调不通 → **放行**,不让基础设施故障把全站产出掐成零", () => {
    expect(shouldProcess(null, true).ok).toBe(true);
  });
  it("★★★ 输出认不出 → 放行(同上;偏题仍有人工点名下架兜底)", () => {
    expect(shouldProcess(null, false).ok).toBe(true);
  });
  it("明确「对味」→ 放行,并带上理由", () => {
    const r = shouldProcess({ verdict: "对味", reason: "智能体工程深挖" });
    expect(r.ok).toBe(true);
    expect(r.why).toBe("智能体工程深挖");
  });
  it("judgeAllows 只认「对味」二字", () => {
    expect(judgeAllows({ verdict: "对味", reason: "" })).toBe(true);
    expect(judgeAllows({ verdict: "不对味", reason: "" })).toBe(false);
    expect(judgeAllows(null)).toBe(false);
  });
});

describe("judgeInput · 喂给判官的信息不许静默丢", () => {
  it("★ 标题/播客名/时长都在(丢了判官就是瞎判)", () => {
    const s = judgeInput({ title: "Let There Be Germicidal Light", durationSec: 95 * 60 }, { name: "The Cognitive Revolution" });
    expect(s).toContain("Germicidal");
    expect(s).toContain("The Cognitive Revolution");
    expect(s).toContain("95 分钟");
  });
  it("缺字段不炸(时长未知照样能判题材)", () => {
    expect(judgeInput({ title: "X" }, { key: "a16z" })).toContain("未知");
    expect(() => judgeInput(null, null)).not.toThrow();
  });
});

describe("接线源码锚 · 两条路都要判(删掉任一处都会红)", () => {
  const src = readFileSync(new URL("../scripts/run-pipeline.mjs", import.meta.url), "utf8");
  it("★★★ 新集与补历史都在处理前判题材 —— 且顺序真的在 processEpisode 之前(GLM 038[9])", () => {
    // W3:两处都把今天传给判官(时效规则要日期);串形不同了锚也跟着改
    expect((src.match(/judgeEpisodeTaste\(item, source, \{ todayISO: bjDay\(\) \}\)/g) ?? []).length).toBe(2);
    let from = 0;
    for (let i = 0; i < 2; i++) {
      const j = src.indexOf("judgeEpisodeTaste(item, source, { todayISO: bjDay() })", from);
      const p = src.indexOf("processEpisode(item, id, source, state)", j);
      expect(j).toBeGreaterThan(0);
      expect(p).toBeGreaterThan(j); // 判官在前,processEpisode 在后
      from = p;
    }
  });
  it("★★★ 新集判掉的记终态 retry:false —— 否则 cutoff 卡住、每班重判重花钱", () => {
    // 定位到「有 skipped 数组」的那处(新集路径);补历史用计数器、不涉及 cutoff,无需 retry 字段
    const i = src.indexOf("skipped.push({ id, reason: `题材不对味");
    expect(i).toBeGreaterThan(0);
    expect(src.slice(i, i + 120)).toContain("retry: false");
  });
  it("★★ 判官用付费档 glm-4.6([standard-change: 用户授权 2026-08-22]:免费档夜间 1305 整班停摆,把关不能靠运气)", () => {
    expect(TASTE_JUDGE_MODEL).toBe("glm-4.6");
    expect(TASTE_JUDGE_MODEL).not.toContain("flash");
  });
});

describe("W3 · 判官看发布日 + 时效规则(2026-09-03 用户拍板;此前 86 天前的 Fable 5 测评畅通无阻)", () => {
  const src = readFileSync(new URL("../scripts/taste-judge.mjs", import.meta.url), "utf8");
  const doc = readFileSync(new URL("../需求共创/内容品味档案.md", import.meta.url), "utf8");
  it("★★★ 输入多一行「发布日:YYYY-MM-DD(距今 N 天)」—— 复现真凶:2026-06-09 发布、9-3 判 → 86 天", () => {
    const s = judgeInput({ title: "Claude Fable 5 review", pubDateISO: "2026-06-09T11:00:00.000Z", durationSec: 1041 }, { name: "How I AI" }, { todayISO: "2026-09-03" });
    expect(s).toContain("发布日:2026-06-09(距今 86 天)");
    expect(s).toContain("播客:How I AI"); // 原三行不丢
  });
  it("★★ 没发布日 / 没传今天 → 「发布日:未知」,不炸", () => {
    expect(judgeInput({ title: "x" }, { name: "P" }, { todayISO: "2026-09-03" })).toContain("发布日:未知");
    expect(judgeInput({ title: "x", pubDateISO: "2026-09-01T00:00:00.000Z" }, { name: "P" })).toContain("发布日:未知");
    expect(ageDays("garbage", "2026-09-03")).toBe(null);
    expect(ageDays("2026-09-03T23:00:00.000Z", "2026-09-03")).toBe(0); // 同日不出负数
  });
  it("★★★ 时效规则真喂给了判官(system prompt 含规则与阈值),阈值默认 14 天", () => {
    // env 只认非负整数(0 合法):与解析口径比对,不假红(GLM 011[1])
    const envRaw = String(process.env.JUDGE_FRESHNESS_DAYS ?? "").trim();
    expect(JUDGE_FRESHNESS_DAYS).toBe(/^\d+$/.test(envRaw) ? Number(envRaw) : 14);
    expect(src).toContain("以此处为准"); // env 覆盖时 prompt 阈值压过档案里的数字(GLM 011[3])
    expect(src).toContain("时效规则");
    expect(src).toMatch(/距今超过 \$\{JUDGE_FRESHNESS_DAYS\} 天/);
    expect(src).toContain("常青内容不受发布日影响");
  });
  it("★★★ 品味档案(判官唯一知识源)有 ⏳ 时效节,且仍在 TASTE_MAX 之内", () => {
    expect(doc).toContain("## ⏳ 时效");
    expect(doc).toContain("超过 14 天即过时");
    expect(doc.length).toBeLessThan(20000);
  });
});

describe("W2 · 判官留痕(放行与拒绝都记;此前只记拒绝,过审的集查无对证)", () => {
  const item = { title: "Claude Fable 5 review", pubDateISO: "2026-06-09T11:00:00.000Z", durationSec: 1041 };
  const src = { key: "howiai", name: "How I AI" };
  it("★★★ 放行条目:verdict/reason 透传,ageDays 按发布日算(86 天),path/model/源 齐全", () => {
    const e = judgeLogEntry({ id: "x", source: src, item, todayISO: "2026-09-03", path: "topup",
      result: { ok: true, why: "AI 实操", verdict: { verdict: "对味", reason: "AI 实操" } }, now: new Date("2026-09-03T00:00:00Z") });
    expect(e).toMatchObject({ id: "x", source: "howiai", path: "topup", verdict: "对味", reason: "AI 实操", ageDays: 86, judgeFailed: false, pubDate: item.pubDateISO });
    expect(e.ts).toBe("2026-09-03T00:00:00.000Z");
    expect(typeof e.model).toBe("string");
  });
  it("★★★ 判官调不通被放行 → 明标 judgeFailed:true 与「放行(判官调不通/认不出)」,事后能分清是判官放的还是故障放的", () => {
    const e = judgeLogEntry({ id: "x", source: src, item, todayISO: "2026-09-03", path: "new", result: { ok: true, why: "判官调不通 → 放行", verdict: null } });
    expect(e.judgeFailed).toBe(true);
    expect(e.verdict).toContain("放行(判官调不通");
  });
  it("★★ 拒绝条目 verdict=不对味;缺日期 ageDays=null 不炸", () => {
    const e = judgeLogEntry({ id: "x", source: src, item: { title: "t" }, todayISO: "2026-09-03", path: "new", result: { ok: false, why: "过时:…", verdict: { verdict: "不对味", reason: "过时:…" } } });
    expect(e.verdict).toBe("不对味");
    expect(e.ageDays).toBe(null);
  });
  it("★★★ 接线源码锚:两条路(新集/补历史)判完都留痕,写入 data/judge-log.jsonl", () => {
    const rp = readFileSync(new URL("../scripts/run-pipeline.mjs", import.meta.url), "utf8");
    expect((rp.match(/appendJudgeLog\(judgeLogEntry\(/g) ?? []).length).toBe(2);
    expect(rp).toContain('path: "new"');
    expect(rp).toContain('path: "topup"');
    expect(rp).toContain('"data/judge-log.jsonl"');
  });
});

describe("drift #82 · 判官 token 预算(200 会把 JSON 截断成认不出 → 静默全放)", () => {
  const src = readFileSync(new URL("../scripts/taste-judge.mjs", import.meta.url), "utf8");
  it("★★★ 实账复现:服务端把 glm-4.6 路由到更啰嗦的 glm-5.3-flash,200 token 恰好截断在 reason 前 → parseVerdict 认不出", () => {
    // 这就是当时真实收到的半截输出(out 恰好 200 token 被砍)
    expect(parseVerdict('{"verdict":"对味","reason')).toBe(null);
    expect(parseVerdict('{"verdict":"对味","reason":"完整的理由"}')).toEqual({ verdict: "对味", reason: "完整的理由" });
  });
  it("★★★ 预算必须够放完整 JSON:实测完整回答用 165-180 token,故不得低于 800", () => {
    expect(JUDGE_MAX_TOKENS).toBeGreaterThanOrEqual(800);
    expect(src).toContain('String(JUDGE_MAX_TOKENS)'); // 不许再写死字面量
    expect(src).not.toMatch(/"--max-tokens", *"200"/);
  });
  it("★★★ 解析不出必须响亮告警 —— 静默 fail-open 会让判官整月停摆无人察觉(本次就是留痕才发现)", () => {
    expect(src).toMatch(/if \(!verdict\) console\.error/);
    expect(src).toContain("认不出 → 放行(fail-open)");
  });
});
