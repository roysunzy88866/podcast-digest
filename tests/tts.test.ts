// C4 · TTS(剥 markdown / 分段无损 / SSML 合成 / ffmpeg args / hash / 编排+缓存)真业务测试
//
// 纪律(承 C2/C3):只调被测函数,不重抄逻辑;每条尽量可变异验证(★ 标)。
// 真调被测函数、喂真 digest fixture / 临时目录假文件;Azure 用注入 fetchImpl mock(不烧额度)。
import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync, writeFileSync, existsSync, mkdtempSync, rmSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  stripMarkdownForTTS,
  chunkForSynthesis,
  synthesizeChunk,
  synthesizeChunkAzure,
  ffmpegConcatArgs,
  sourceText,
  sourceHash,
  buildSsml,
  xmlEscape,
  ttsEndpoint,
  planEpisodeAudio,
  synthesizeEpisode,
  DEFAULT_VOICE,
  AZURE_MP3_FORMAT,
} from "../scripts/tts.mjs";

const MODAL = "data/episodes/2026-07-08-latent-space-modal";
const DBX = "data/episodes/2026-06-24-latent-space-databricks";
let modalDigest: any;
let dbxDigest: any;

beforeAll(() => {
  modalDigest = JSON.parse(readFileSync(`${MODAL}/digest.json`, "utf8"));
  dbxDigest = JSON.parse(readFileSync(`${DBX}/digest.json`, "utf8"));
});

describe("stripMarkdownForTTS · 剥成可朗读纯文本(不读方括号井号脱字符)", () => {
  it("★ 标题标记去掉、标题文字保留(# ## ### ####)", () => {
    expect(stripMarkdownForTTS("## 从Kubernetes说起\n\n正文")).toBe("从Kubernetes说起\n\n正文");
    expect(stripMarkdownForTTS("#### 深标题")).toBe("深标题");
  });
  it("★ 行内时间戳坐标整体去掉,不留数字/方括号(C4 Scenario 1c)", () => {
    const out = stripMarkdownForTTS("必须在 Kubernetes 上运行 [00:55 Akshat Bubna]。下一句。");
    expect(out).not.toContain("[");
    expect(out).not.toContain("00:55");
    expect(out).not.toContain("Akshat Bubna");
    expect(out).toContain("必须在 Kubernetes 上运行。下一句。"); // 空格并回、句号贴合
  });
  it("★ 区间时间戳 [00:34-02:17 说话人] 也整体去掉", () => {
    expect(stripMarkdownForTTS("论点一 [00:34-02:17 swyx]。")).toBe("论点一。");
  });
  it("★ 术语解释括号保留(不含 mm:ss 的圆括号是正文,给听众听)", () => {
    const out = stripMarkdownForTTS("装饰器(一种在函数上方的语法)很有用。");
    expect(out).toContain("(一种在函数上方的语法)");
  });
  it("★ 双链 [[file|显示名]]/[[显示名]] 只留显示名", () => {
    expect(stripMarkdownForTTS("用 [[智能体]] 做事")).toBe("用 智能体 做事");
    expect(stripMarkdownForTTS("看 [[Modal-file|Modal]] 的做法")).toBe("看 Modal 的做法");
  });
  it("★ 块引用嵌入 ![[集#^块]] 整体去掉", () => {
    expect(stripMarkdownForTTS("![[ep#^q1]]\n\n正文")).toBe("正文");
  });
  it("★ callout 标记与 > 引用前缀去掉,但【背景】中文文字保留", () => {
    const out = stripMarkdownForTTS("> [!info] 关联\n> 内容一\n\n> 【背景】当时是2023年。");
    expect(out).not.toContain(">");
    expect(out).not.toContain("[!info]");
    expect(out).toContain("关联");
    expect(out).toContain("【背景】当时是2023年。"); // 中文背景标记保留
  });
  it("★ 行末块 ID ^q1 去掉", () => {
    expect(stripMarkdownForTTS("这是一句金句 ^q1")).toBe("这是一句金句");
  });
  it("★ 加粗/斜体/行内代码去标记留文字", () => {
    expect(stripMarkdownForTTS("**很重要**的 *观点* 和 `@decorator`")).toBe("很重要的 观点 和 @decorator");
  });
  it("★ markdown 链接 [文字](链接) 只留文字", () => {
    expect(stripMarkdownForTTS("见 [来源](https://x.com/p) 说明")).toBe("见 来源 说明");
  });
  it("★ 表格:分隔行去掉、管道符转顿号", () => {
    const out = stripMarkdownForTTS("| A | B |\n| --- | --- |\n| 甲 | 乙 |");
    expect(out).not.toContain("|");
    expect(out).not.toContain("---");
    expect(out).toContain("甲、乙");
  });
  it("★ 真 digest(集1):剥后无残留 markdown 标记,关键正文仍在", () => {
    const t = stripMarkdownForTTS(sourceText(modalDigest));
    expect(t.length).toBeGreaterThan(2000);
    // 无残留:标题标记 / 双链 / 块ID / 行内时间戳括号
    expect(t).not.toMatch(/^#{1,6}\s/m);
    expect(t).not.toContain("[[");
    expect(t).not.toMatch(/\^q\d/);
    expect(t).not.toMatch(/\[\d{1,2}:\d{2}/); // 无 [mm:ss 残留
    expect(t).not.toMatch(/^\s*>/m); // 无引用前缀
    // 正文仍在
    expect(t).toContain("Modal");
    expect(t).toContain("沙箱");
    // 术语解释括号仍在(可读;全/半角均可——digest 会被云端翻新重写,标点风格不钉死)
    expect(t).toMatch(/[(（]/);
  });
  it("★ 真 digest(集2):同样无残留(### 深标题、** 加粗、行内时间戳都被剥净)", () => {
    const t = stripMarkdownForTTS(sourceText(dbxDigest));
    expect(t).not.toMatch(/^#{1,6}\s/m);
    expect(t).not.toContain("**");
    expect(t).not.toMatch(/\[\d{1,2}:\d{2}/);
    expect(t).toContain("Databricks");
  });
});

describe("chunkForSynthesis · ≤max、无损、不硬断句子", () => {
  it("空串 → []", () => {
    expect(chunkForSynthesis("")).toEqual([]);
  });
  it("短于 max → 原样单块", () => {
    expect(chunkForSynthesis("短文本", 3000)).toEqual(["短文本"]);
  });
  it("★ 无损铁律(真 digest, max=200):拼回去 === 原文 且 每块 ≤200", () => {
    const text = stripMarkdownForTTS(sourceText(modalDigest));
    const chunks = chunkForSynthesis(text, 200);
    expect(chunks.length).toBeGreaterThan(1);
    expect(chunks.join("")).toBe(text); // ← 无丢字无重复(核心强测)
    for (const c of chunks) expect(c.length).toBeLessThanOrEqual(200);
  });
  it("★ 无损铁律(病态小 max=20,逼出硬切安全网):仍 join===原文 且 ≤20", () => {
    const text = stripMarkdownForTTS(sourceText(dbxDigest));
    const chunks = chunkForSynthesis(text, 20);
    expect(chunks.join("")).toBe(text);
    for (const c of chunks) expect(c.length).toBeLessThanOrEqual(20);
  });
  it("★ 生产默认 max=3000(合成长文,不依赖 digest 字数):多块+无损+句末边界(GLM 20260724-007[2] 回归覆盖)", () => {
    const ends = ["。", "！", "?", "…"]; // 句末标点轮换:边界分支覆盖不依赖真语料的标点分布(GLM 008[1])
    const text = Array.from({ length: 200 }, (_, i) => `这是第${i}句用于覆盖生产默认切块值的测试语料,讲的是智能体与推理云${ends[i % ends.length]}`).join("");
    expect(text.length).toBeGreaterThan(3000); // 硬断言语料够长,防改短后多块断言空转(GLM 008[2])
    const chunks = chunkForSynthesis(text, 3000);
    expect(chunks.length).toBeGreaterThan(1);
    expect(chunks.join("")).toBe(text);
    for (const c of chunks) expect(c.length).toBeLessThanOrEqual(3000);
    for (const c of chunks.slice(0, -1)) expect(c).toMatch(/[。！？!?…\n]$/);
  });
  it("★ 现实体量(真 digest):切成多块,非末块都收在句末/段末边界(不硬断句子)", () => {
    const text = stripMarkdownForTTS(sourceText(modalDigest));
    // max 取文本长度一半:保证恒切多块(digest 会被云端翻新重写,字数不钉死——原钉 3000 在翻新变短后恒单块,测不到边界逻辑)
    const max = Math.ceil(text.length / 2);
    const chunks = chunkForSynthesis(text, max);
    expect(chunks.length).toBeGreaterThan(1);
    expect(chunks.join("")).toBe(text);
    for (const c of chunks) expect(c.length).toBeLessThanOrEqual(max);
    // 非末块结尾应是句末标点或换行(自然边界),而不是被拦腰截断
    for (const c of chunks.slice(0, -1)) {
      expect(c).toMatch(/[。！？!?…\n]$/);
    }
  });
  it("★ 段落优先:两段短文用 max 足够大 → 保持一整块,不拆散", () => {
    const t = "第一段。\n\n第二段。";
    expect(chunkForSynthesis(t, 3000)).toEqual([t]);
  });
});

describe("sourceText / sourceHash · 幂等 & 变化敏感", () => {
  it("sourceText = tldr + 空行 + digest_md", () => {
    expect(sourceText({ tldr: "T", digest_md: "M" })).toBe("T\n\nM");
  });
  it("★ 同输入 hash 稳定;tldr 或 digest_md 变则 hash 变(陈旧检测的地基)", () => {
    const h = sourceHash({ tldr: "T", digest_md: "M" });
    expect(sourceHash({ tldr: "T", digest_md: "M" })).toBe(h);
    expect(sourceHash({ tldr: "T2", digest_md: "M" })).not.toBe(h);
    expect(sourceHash({ tldr: "T", digest_md: "M2" })).not.toBe(h);
    expect(h).toMatch(/^[0-9a-f]{64}$/);
  });
});

describe("buildSsml / xmlEscape · SSML 结构 + XML 转义", () => {
  it("SSML 含 speak/xml:lang/voice name,文本被转义", () => {
    const ssml = buildSsml("A<B&C", "zh-CN-XiaoxiaoNeural");
    expect(ssml).toContain('<speak version="1.0"');
    expect(ssml).toContain('xml:lang="zh-CN"');
    expect(ssml).toContain('<voice name="zh-CN-XiaoxiaoNeural">');
    expect(ssml).toContain("A&lt;B&amp;C");
    expect(ssml).not.toContain("A<B&C");
  });
});

describe("synthesizeChunk · edge-tts(默认引擎,免 key,mock spawn)", () => {
  // fakeSpawn:模拟 edge-tts 子进程 —— 写(或不写)outPath 后以 exit 码收场
  function fakeSpawn({ exit = 0, write = "FAKE_MP3", startError = false }: any = {}) {
    return (_bin: string, args: string[]) => {
      const outPath = args[args.indexOf("--write-media") + 1];
      const h: any = {};
      const child: any = {
        stderr: { on: (ev: string, cb: any) => { if (ev === "data") h.data = cb; } },
        on: (ev: string, cb: any) => ((h[ev] = cb), child),
      };
      queueMicrotask(() => {
        if (startError) return h.error?.(new Error("spawn ENOENT"));
        if (write != null) writeFileSync(outPath, Buffer.from(write));
        h.close?.(exit);
      });
      return child;
    };
  }

  it("★ 缺 outPath → 抛错(fail-closed)", async () => {
    await expect(synthesizeChunk("你好", { spawnImpl: fakeSpawn() as any })).rejects.toThrow(/outPath/);
  });
  it("★ 空文本 → 抛错(fail-closed)", async () => {
    const dir = mkdtempSync(join(tmpdir(), "et-"));
    await expect(synthesizeChunk("   ", { outPath: join(dir, "o.mp3"), spawnImpl: fakeSpawn() as any })).rejects.toThrow(/文本为空/);
    rmSync(dir, { recursive: true, force: true });
  });
  it("★ 成功:传对 --voice/--text/--write-media,产物非空 → 返回 outPath", async () => {
    const dir = mkdtempSync(join(tmpdir(), "et-"));
    const out = join(dir, "o.mp3");
    let seen: string[] = [];
    const spy = (bin: string, args: string[]) => ((seen = args), fakeSpawn()(bin, args));
    const r = await synthesizeChunk("大家好", { voice: "zh-CN-XiaoxiaoNeural", outPath: out, spawnImpl: spy as any });
    expect(r).toBe(out);
    expect(existsSync(out)).toBe(true);
    expect(seen[seen.indexOf("--voice") + 1]).toBe("zh-CN-XiaoxiaoNeural");
    expect(seen[seen.indexOf("--text") + 1]).toBe("大家好");
    expect(seen[seen.indexOf("--write-media") + 1]).toBe(out);
    rmSync(dir, { recursive: true, force: true });
  });
  it("★ 进程非 0 → 抛错(fail-closed,不留半条)", async () => {
    const dir = mkdtempSync(join(tmpdir(), "et-"));
    await expect(
      synthesizeChunk("你好", { outPath: join(dir, "o.mp3"), spawnImpl: fakeSpawn({ exit: 1, write: null }) as any }),
    ).rejects.toThrow(/exit 1/);
    rmSync(dir, { recursive: true, force: true });
  });
  it("★ 产物空(exit 0 但没写)→ 抛错(fail-closed)", async () => {
    const dir = mkdtempSync(join(tmpdir(), "et-"));
    await expect(
      synthesizeChunk("你好", { outPath: join(dir, "o.mp3"), spawnImpl: fakeSpawn({ exit: 0, write: null }) as any }),
    ).rejects.toThrow(/产物空/);
    rmSync(dir, { recursive: true, force: true });
  });
  it("★ edge-tts 启动失败(没装)→ 抛错", async () => {
    const dir = mkdtempSync(join(tmpdir(), "et-"));
    await expect(
      synthesizeChunk("你好", { outPath: join(dir, "o.mp3"), spawnImpl: fakeSpawn({ startError: true }) as any }),
    ).rejects.toThrow(/启动失败/);
    rmSync(dir, { recursive: true, force: true });
  });
});

describe("synthesizeChunkAzure · fallback(Azure REST 结构 + fail-closed)", () => {
  const okFetch = (capture: any) => async (url: string, opts: any) => {
    capture.url = url;
    capture.opts = opts;
    return { ok: true, status: 200, arrayBuffer: async () => new TextEncoder().encode("FAKE_MP3_BYTES").buffer };
  };

  it("★ 缺 key → 抛错(fail-closed)", async () => {
    await expect(synthesizeChunkAzure("你好", { region: "eastasia", fetchImpl: okFetch({}) })).rejects.toThrow(/AZURE_SPEECH_KEY/);
  });
  it("★ 缺 region → 抛错(fail-closed)", async () => {
    await expect(synthesizeChunkAzure("你好", { key: "k", fetchImpl: okFetch({}) })).rejects.toThrow(/AZURE_SPEECH_REGION/);
  });
  it("★ endpoint / headers / SSML body 全部符合 Azure 规范", async () => {
    const cap: any = {};
    await synthesizeChunkAzure("你好<world>", { key: "SECRET", region: "eastasia", fetchImpl: okFetch(cap) });
    expect(cap.url).toBe(ttsEndpoint("eastasia"));
    expect(cap.opts.headers["Ocp-Apim-Subscription-Key"]).toBe("SECRET");
    expect(cap.opts.headers["Content-Type"]).toBe("application/ssml+xml");
    expect(cap.opts.headers["X-Microsoft-OutputFormat"]).toBe(AZURE_MP3_FORMAT);
    expect(cap.opts.body).toContain('<voice name="zh-CN-XiaoxiaoNeural">');
    expect(cap.opts.body).toContain("你好&lt;world&gt;");
  });
  it("★ 非 2xx → 抛错带状态码", async () => {
    const errFetch = async () => ({ ok: false, status: 429, statusText: "Too Many Requests", text: async () => "quota" });
    await expect(synthesizeChunkAzure("你好", { key: "k", region: "eastasia", fetchImpl: errFetch as any })).rejects.toThrow(/429/);
  });
  it("★ 空音频响应 → 抛错(fail-closed)", async () => {
    const emptyFetch = async () => ({ ok: true, status: 200, arrayBuffer: async () => new ArrayBuffer(0) });
    await expect(synthesizeChunkAzure("你好", { key: "k", region: "eastasia", fetchImpl: emptyFetch as any })).rejects.toThrow(/空音频/);
  });
  it("成功 → 返回 Buffer(非空)", async () => {
    const buf = await synthesizeChunkAzure("你好", { key: "k", region: "eastasia", fetchImpl: okFetch({}) });
    expect(Buffer.isBuffer(buf)).toBe(true);
    expect(buf.length).toBeGreaterThan(0);
  });
});

describe("ffmpegConcatArgs · 纯函数拼接参数", () => {
  it("★ 返回 concat 协议 + copy + 输出路径", () => {
    const args = ffmpegConcatArgs(["/t/a.mp3", "/t/b.mp3"], "/out/audio.mp3");
    expect(args).toEqual(["-y", "-i", "concat:/t/a.mp3|/t/b.mp3", "-acodec", "copy", "/out/audio.mp3"]);
  });
  it("★ 空片段 / 缺输出 → 抛错", () => {
    expect(() => ffmpegConcatArgs([], "/o.mp3")).toThrow();
    expect(() => ffmpegConcatArgs(["/a.mp3"], "")).toThrow();
  });
});

describe("synthesizeEpisode · 编排 + 缓存幂等(注入假 deps,不跑 Azure/ffmpeg)", () => {
  // 假 deps:真 fs(临时 outDir)+ 假 synth/concat/probe,计数合成调用
  function fakeDeps(counter: { synth: number }) {
    return {
      synth: async (_t: string, o: any) => {
        counter.synth++;
        writeFileSync(o.outPath, Buffer.from("FAKEAUDIO")); // edge-tts 直接写 outPath
      },
      concat: async (_parts: string[], out: string) => {
        writeFileSync(out, Buffer.from("MERGED_MP3_DATA"));
        return out;
      },
      probe: async () => 12.34,
      now: () => "2026-07-18T00:00:00.000Z",
    };
  }

  it("★ 首跑:逐块合成 + 写 audio.mp3 + audio.meta.json(hash/voice/chunk/时长齐)", async () => {
    const dir = mkdtempSync(join(tmpdir(), "synep-"));
    const counter = { synth: 0 };
    const r = await synthesizeEpisode(modalDigest, {
      id: "modal",
      outDir: dir,
      key: "k",
      region: "eastasia",
      deps: fakeDeps(counter),
    });
    expect(r.skipped).toBe(false);
    expect(counter.synth).toBe(r.chunkCount); // 每块调一次
    expect(r.chunkCount).toBeGreaterThanOrEqual(1);
    expect(existsSync(join(dir, "audio.mp3"))).toBe(true);
    const meta = JSON.parse(readFileSync(join(dir, "audio.meta.json"), "utf8"));
    expect(meta.source_sha256).toBe(sourceHash(modalDigest));
    expect(meta.voice).toBe(DEFAULT_VOICE);
    expect(meta.chunk_count).toBe(r.chunkCount);
    expect(meta.duration_sec).toBe(12.34);
    rmSync(dir, { recursive: true, force: true });
  });

  it("★ 幂等:同 digest 重跑命中缓存,synth 不再被调(防重复计费)", async () => {
    const dir = mkdtempSync(join(tmpdir(), "synep-"));
    const c1 = { synth: 0 };
    await synthesizeEpisode(modalDigest, { id: "modal", outDir: dir, key: "k", region: "eastasia", deps: fakeDeps(c1) });
    const c2 = { synth: 0 };
    const r2 = await synthesizeEpisode(modalDigest, { id: "modal", outDir: dir, key: "k", region: "eastasia", deps: fakeDeps(c2) });
    expect(r2.skipped).toBe(true);
    expect(c2.synth).toBe(0); // 缓存命中 → 一次都没调
    rmSync(dir, { recursive: true, force: true });
  });

  it("★ 源变则缓存失效:digest 改了 → 重新合成(不吃陈旧缓存)", async () => {
    const dir = mkdtempSync(join(tmpdir(), "synep-"));
    const c1 = { synth: 0 };
    await synthesizeEpisode(modalDigest, { id: "modal", outDir: dir, key: "k", region: "eastasia", deps: fakeDeps(c1) });
    const changed = { ...modalDigest, tldr: modalDigest.tldr + "(改了)" };
    const c2 = { synth: 0 };
    const r2 = await synthesizeEpisode(changed, { id: "modal", outDir: dir, key: "k", region: "eastasia", deps: fakeDeps(c2) });
    expect(r2.skipped).toBe(false);
    expect(c2.synth).toBeGreaterThan(0); // 源变 → 真重合成
    rmSync(dir, { recursive: true, force: true });
  });

  it("★ fail-closed:探测时长 ≤0 → 抛错(不写空壳 meta)", async () => {
    const dir = mkdtempSync(join(tmpdir(), "synep-"));
    const deps = { ...fakeDeps({ synth: 0 }), probe: async () => 0 };
    await expect(
      synthesizeEpisode(modalDigest, { id: "modal", outDir: dir, key: "k", region: "eastasia", deps }),
    ).rejects.toThrow(/时长/);
    expect(existsSync(join(dir, "audio.meta.json"))).toBe(false); // 没写 meta
    rmSync(dir, { recursive: true, force: true });
  });
});

describe("planEpisodeAudio · 纯规划(strip+chunk+hash 一次到位)", () => {
  it("真 digest → text/chunks/hash/chunkCount 自洽", () => {
    const plan = planEpisodeAudio(modalDigest, { max: 3000 });
    expect(plan.hash).toBe(sourceHash(modalDigest));
    expect(plan.chunks.join("")).toBe(plan.text);
    expect(plan.chunkCount).toBe(plan.chunks.length);
    expect(plan.voice).toBe(DEFAULT_VOICE);
  });
});
