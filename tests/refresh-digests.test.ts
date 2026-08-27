// C15 刀② · 存量回刷通道(refresh-digests.mjs)真业务测试
//
// 2026-07-30 用户拍板「一起做」:已发布集按 C15 新浓缩规范重刷。
// 语义(对旧 refresh 的三处收口):
//   ① 断点续跑:digest 已过 C15 口语体机器卡点(styleErrs 全零)= 已按新规范刷过 → 跳过不重烧钱;
//   ② 只烧该烧的钱:FORCE 重浓缩(绕缓存)→ 判官 → 金句规整 → 闸门 → TTS;
//      **不**重跑取源/翻译(缓存复用)、**不**重抽实体(entities.json 不动)、**不**重抽嘉宾;
//   ③ 闸门一分不降:任一环节败 → 回滚老版(老版本就过闸,fail-safe 同 2026-07-24 拍板)。
// 副作用走注入 exec(假实现只记账),真 fs 只碰临时目录 —— 绝不真跑流水线、绝不烧钱。
import { describe, it, expect } from "vitest";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync, readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { alreadyConformant, refreshOne } from "../scripts/refresh-digests.mjs";
import { styleErrs, validate } from "../scripts/condense.mjs";

// ── fixtures:一份合规(C15 腔)/ 一份不合规(存量老腔)的 digest ──
const PAD = "这里补足正文长度:嘉宾把增长拆成渠道、产品与耐心三层,并用自己带队十年的例子逐层讲透,中间穿插了三次反直觉的转折。".repeat(4);
const QUOTES = [1, 2, 3, 4].map((i) => ({ en: `Quote ${i}.`, zh: `金句${i}。`, timestamp: "01:0" + i, speaker: "嘉宾" }));

// 合规稿 = 实质优先新格式:钩子段开头(非标题)+ 本集带走用要点列表(ADR 0020 起列表放行)
const conformantDigest = {
  title_zh: "标题",
  tldr: "一句话。",
  digest_md:
    "如果你以为增长靠砸钱,这一集会颠覆你的直觉。\n\n## 主线\n\n" +
    PAD +
    "\n\n## 本集带走\n\n- 渠道优先:先把一条渠道做透再铺第二条。\n- 产品是杠杆:留存不行,再多流量也漏光。\n- 给耐心:复利按季度看,别按周砍预算。",
  quotes: QUOTES,
};

// 老腔稿 = 开头就是小节标题、没有钩子段(闸门⑤抓)—— 这才是「待刷」信号;
// 注意:带走列表腔本身已不再是老腔(ADR 0020 放开),故老腔靠「无钩子」判定。
const legacyDigest = {
  title_zh: "标题",
  tldr: "一句话。",
  digest_md: "## 主线\n\n" + PAD + "\n\n## 本集带走\n\n把三件事串起来就是这一集的答案。",
  quotes: QUOTES,
};

// fixture 防腐:合规/不合规判定必须与浓缩卡点同一份代码(styleErrs)得出
it("fixture 自检:合规稿 styleErrs 全零且结构合格;老腔稿必被卡点抓住", () => {
  expect(styleErrs(conformantDigest.digest_md)).toEqual([]);
  expect(validate(conformantDigest)).toEqual([]);
  expect(styleErrs(legacyDigest.digest_md).length).toBeGreaterThan(0);
});

describe("alreadyConformant · 断点续跑判据(与 C15 浓缩卡点同一份代码,零新增状态)", () => {
  it("★ 合规腔 digest(钩子开头+带走要点)→ true;老腔(开头即小节标题、无钩子)→ false", () => {
    expect(alreadyConformant(conformantDigest)).toBe(true);
    expect(alreadyConformant(legacyDigest)).toBe(false);
  });
  it("★ 结构不合格(缺金句)不算已刷过 —— 光腔调对不放行", () => {
    expect(alreadyConformant({ ...conformantDigest, quotes: [] })).toBe(false);
    expect(alreadyConformant(null)).toBe(false);
    expect(alreadyConformant({})).toBe(false);
  });
});

// ── refreshOne(DI):临时集目录 + 假 exec 记账 ──
function makeEpisode(digest: any) {
  const base = mkdtempSync(join(tmpdir(), "refresh-"));
  const id = "2026-01-01-lennys-test-ep";
  const dir = join(base, id);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "digest.json"), JSON.stringify(digest, null, 2));
  writeFileSync(join(dir, "entities.json"), JSON.stringify({ episode_id: id, entities: [{ id: "x", name: "X" }] }));
  writeFileSync(join(dir, "meta.json"), JSON.stringify({ id, title_zh: "标题" }));
  writeFileSync(join(dir, "audio.mp3"), "OLDAUDIO");
  writeFileSync(join(dir, "audio.meta.json"), JSON.stringify({ source_sha256: "old" }));
  return { base, id, dir };
}
const recorder = (failOn?: string) => {
  const calls: Array<{ env: any; args: string[] }> = [];
  const exec = (env: any, ...args: string[]) => {
    calls.push({ env, args });
    return failOn ? !args[0].includes(failOn) : true;
  };
  return { calls, exec };
};

describe("refreshOne · 断点续跑:已合规集零动作跳过", () => {
  it("★ 合规 digest → status=conformant,一个子进程都不起(重跑不从头烧钱)", () => {
    const { base, id, dir } = makeEpisode(conformantDigest);
    const { calls, exec } = recorder();
    const r = refreshOne(id, { episodesDir: base, exec });
    expect(r.status).toBe("conformant");
    expect(calls.length).toBe(0);
    expect(readFileSync(join(dir, "audio.mp3"), "utf8")).toBe("OLDAUDIO"); // 音频也不动
    rmSync(base, { recursive: true, force: true });
  });
  it("★★★ --force:合规 digest 也强制重跑(提示词语义/口味改动 styleErrs 检不出,不能被「已合规」拦掉,ADR 0025)", () => {
    const { base, id } = makeEpisode(conformantDigest);
    const { calls, exec } = recorder();
    const r = refreshOne(id, { episodesDir: base, exec, force: true });
    expect(r.status).toBe("refreshed"); // 不再 conformant 跳过
    expect(calls.some((c) => c.args[0].includes("condense.mjs"))).toBe(true); // 真起了重浓缩
    rmSync(base, { recursive: true, force: true });
  });
});

describe("refreshOne · 只烧该烧的钱(步骤链 = 拍板语义,一步不多一步不少)", () => {
  it("★★★ 链 = FORCE 浓缩→判官→金句规整→gate→gate-facts→tts;不碰取源/翻译/实体/嘉宾", () => {
    const { base, id, dir } = makeEpisode(legacyDigest);
    const { calls, exec } = recorder();
    const r = refreshOne(id, { episodesDir: base, exec });
    expect(r.status).toBe("refreshed");
    const scripts = calls.map((c) => c.args[0]);
    expect(scripts).toEqual([
      "scripts/condense.mjs",
      "scripts/judge-quotes.mjs",
      "scripts/repair-quotes.mjs",
      "scripts/gate.mjs",
      "scripts/gate-facts.mjs",
      "scripts/tts.mjs",
    ]);
    // 绝不重烧:翻译/取源/实体/嘉宾都不在链上(缓存与存量产物原样复用)
    expect(scripts.join(",")).not.toMatch(/translate|fetch-source|extract-entities|extract-guest|infer-speakers/);
    // 强制重浓缩:FORCE=1 绕过 .digest-raw.txt 缓存(condense 的 FORCE 语义),其余步骤不带 FORCE
    expect(calls[0].env.FORCE).toBe("1");
    for (const c of calls.slice(1)) expect(c.env.FORCE).toBeUndefined();
    // entities.json 一字不动(实体不重跑,2026-07-30 拍板)
    expect(JSON.parse(readFileSync(join(dir, "entities.json"), "utf8")).entities).toEqual([{ id: "x", name: "X" }]);
    // 全过后旧音频必被清(新稿配新音频,真 tts 会重写;陈旧音频不许存活)
    expect(existsSync(join(dir, "audio.mp3"))).toBe(false);
    // 备份不留残(成功后 .bak 清净)
    expect(readdirSync(dir).filter((f) => f.endsWith(".bak"))).toEqual([]);
    rmSync(base, { recursive: true, force: true });
  });
  it("★★★ --no-audio:只改文字(浓缩→判官→gate→gate-facts),不起 tts、旧音频原样留(配音后补)", () => {
    const { base, id, dir } = makeEpisode(legacyDigest);
    const { calls, exec } = recorder();
    const r = refreshOne(id, { episodesDir: base, exec, noAudio: true });
    expect(r.status).toBe("refreshed"); // 文字链全过 = 成功
    const scripts = calls.map((c) => c.args[0]);
    expect(scripts).toContain("scripts/condense.mjs"); // 文字真重跑
    expect(scripts).not.toContain("scripts/tts.mjs"); // 但绝不重录音频
    expect(existsSync(join(dir, "audio.mp3"))).toBe(true); // 旧音频原样留(不删不换)
    expect(readFileSync(join(dir, "audio.mp3"), "utf8")).toBe("OLDAUDIO");
    rmSync(base, { recursive: true, force: true });
  });
});

describe("refreshOne · 闸门一分不降:败 → 回滚老版,老音频不动", () => {
  it("★ 金句闸门未过 → rolledback:digest 还原、旧音频原样(失败在 tts 之前不乱删)", () => {
    const { base, id, dir } = makeEpisode(legacyDigest);
    const { calls, exec } = recorder("gate.mjs");
    const r = refreshOne(id, { episodesDir: base, exec });
    expect(r.status).toBe("rolledback");
    expect(r.why).toContain("金句");
    // 回滚彻底:digest 还是老版逐字节;老音频没被碰(GLM 20260724-002[1] 口径)
    expect(JSON.parse(readFileSync(join(dir, "digest.json"), "utf8"))).toEqual(legacyDigest);
    expect(readFileSync(join(dir, "audio.mp3"), "utf8")).toBe("OLDAUDIO");
    expect(readdirSync(dir).filter((f) => f.endsWith(".bak"))).toEqual([]);
    // tts 根本没被走到
    expect(calls.map((c) => c.args[0])).not.toContain("scripts/tts.mjs");
    rmSync(base, { recursive: true, force: true });
  });
  it("★ 重浓缩本身失败 → rolledback(不拿半成品往下走)", () => {
    const { base, id } = makeEpisode(legacyDigest);
    const { calls, exec } = recorder("condense.mjs");
    const r = refreshOne(id, { episodesDir: base, exec });
    expect(r.status).toBe("rolledback");
    expect(calls.length).toBe(1); // 第一步就停
    rmSync(base, { recursive: true, force: true });
  });
  it("★★★ [GLM028-2] --no-audio 下失败回滚也不误删旧音频(audioTouched 恒 false,回滚不碰音频)", () => {
    const { base, id, dir } = makeEpisode(legacyDigest);
    const { exec } = recorder("gate-facts.mjs"); // 事实层失败(在音频块之前)
    const r = refreshOne(id, { episodesDir: base, exec, noAudio: true });
    expect(r.status).toBe("rolledback");
    expect(JSON.parse(readFileSync(join(dir, "digest.json"), "utf8"))).toEqual(legacyDigest); // digest 还原
    expect(readFileSync(join(dir, "audio.mp3"), "utf8")).toBe("OLDAUDIO"); // 旧音频原样,没被回滚误删
    rmSync(base, { recursive: true, force: true });
  });
});
