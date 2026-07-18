#!/usr/bin/env node
// C4 Scenario 4 · 音频机器闸门(四条,**严格 fail-closed**)。进 gate-all + verify:c4。
//
// ⚠️ 本项目已 3 次栽在「『没东西可查』和『查不了』都当成过」的 fail-open bug 上
//    (gate.mjs 空数组恒真 / gate-all 缺文件放行 / gate-facts 零检查项恒真)。这里绝不重蹈:
//    缺音频 / ffprobe 读不了 / 缺 digest / 缺 meta / meta 无 hash —— **一律判失败**,绝不静默放行。
//
// 四条(承 C4 Scenario 4 + gate-all「发布产物必须齐」精神):
//   ① 每个已发布集页必有对应 audio.mp3(缺=拦)
//   ② audio.mp3 非空 + ffprobe 可读 + 时长 > 0(且 ≥ 可选下限)
//   ③ 源文本一致性:audio.meta.json 的 source hash == 当前 digest 重算的 hash(防陈旧音频)
//   ④ feed 每个 <enclosure> 指向的文件真实存在、size > 0(防死 enclosure)
import { readFileSync, existsSync, statSync, readdirSync, realpathSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { sourceHash, ffprobeDuration } from "./tts.mjs";
import { feedEnclosuresFromXml } from "./build-feed.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// 默认副作用薄壳(测试可注入假实现,不依赖真二进制/真文件)
const defaultDeps = {
  exists: (p) => existsSync(p),
  size: (p) => statSync(p).size,
  readJson: (p) => JSON.parse(readFileSync(p, "utf8")),
  probe: (p) => ffprobeDuration(p), // async;读不了 → reject(fail-closed)
};

/**
 * 校验已发布集的音频层。
 * @param publishedEpisodes 已发布集 id 数组(有 samples/<id>.md 的集)
 * @param opts.base data/episodes 目录
 * @param opts.feedEnclosures feed 里每个 enclosure 指向的本地文件:[{ id, path }] 或 [path]
 * @param opts.minDuration 时长下限秒(默认 0,即只要 >0;可传合理区间下限)
 * @returns { ok, failures: [{ kind, id, reason }] }
 */
export async function gateAudio(
  publishedEpisodes,
  { base = join(ROOT, "data/episodes"), feedEnclosures = [], minDuration = 0, deps = {} } = {},
) {
  const io = { ...defaultDeps, ...deps };
  const failures = [];
  const add = (kind, id, reason) => failures.push({ kind, id, reason });

  for (const id of publishedEpisodes ?? []) {
    const dir = join(base, id);
    const digestPath = join(dir, "digest.json");
    const metaPath = join(dir, "audio.meta.json");
    const audioPath = join(dir, "audio.mp3");

    // 缺 digest = 音频源无从校验 = 判不了 = 不过(缺文件≠通过)
    let digest = null;
    if (!io.exists(digestPath)) add("缺digest", id, `${digestPath} 不存在,音频源无从校验(缺文件≠通过)`);
    else {
      try {
        digest = io.readJson(digestPath);
      } catch (e) {
        add("坏digest", id, `digest.json 解析失败:${e.message}`);
      }
    }

    // ① 缺音频 = 拦
    const audioThere = io.exists(audioPath);
    if (!audioThere) add("缺音频", id, `${audioPath} 不存在(已发布集必须有配音,缺≠通过)`);

    // ② 非空 + ffprobe 可读 + 时长 > 0
    if (audioThere) {
      let sz = -1;
      try {
        sz = io.size(audioPath);
      } catch (e) {
        add("音频不可读", id, `statSync 失败:${e.message}`);
      }
      if (sz === 0) add("空音频", id, "audio.mp3 为 0 字节(空壳)");
      else if (sz > 0) {
        let dur = NaN;
        try {
          dur = await io.probe(audioPath);
        } catch (e) {
          add("音频损坏", id, `ffprobe 读不了(损坏/非音频)= 判不了 = 不过:${e.message}`);
        }
        if (Number.isFinite(dur)) {
          if (!(dur > 0)) add("时长为零", id, `时长 ${dur} ≤ 0(空壳)`);
          else if (dur < minDuration) add("时长过短", id, `时长 ${dur.toFixed(1)}s < 下限 ${minDuration}s`);
        }
        // dur 非有限值的情况已在 catch 记 failure(不重复计)
      }
    }

    // 缺 meta = 源文本一致性无从校验 = 判不了 = 不过
    let meta = null;
    if (!io.exists(metaPath)) add("缺meta", id, `${metaPath} 不存在,源文本一致性无从校验(缺≠通过)`);
    else {
      try {
        meta = io.readJson(metaPath);
      } catch (e) {
        add("坏meta", id, `audio.meta.json 解析失败:${e.message}`);
      }
    }

    // ③ 源文本一致性:meta hash == 当前 digest 重算 hash
    if (digest && meta) {
      if (!meta.source_sha256) add("meta缺hash", id, "audio.meta.json 无 source_sha256,陈旧无从判(判不了≠通过)");
      else {
        const cur = sourceHash(digest);
        if (cur !== meta.source_sha256)
          add(
            "音频陈旧",
            id,
            `digest 已变但音频未重合成(meta ${String(meta.source_sha256).slice(0, 12)}… ≠ 当前 ${cur.slice(0, 12)}…)`,
          );
      }
    }
  }

  // ④ feed enclosure 指向的文件真实存在、size > 0
  for (const enc of feedEnclosures ?? []) {
    const p = typeof enc === "string" ? enc : enc.path;
    const label = (typeof enc === "string" ? null : enc.id) ?? p;
    if (!io.exists(p)) {
      add("死enclosure", label, `feed enclosure 指向不存在的文件:${p}`);
      continue;
    }
    let sz = -1;
    try {
      sz = io.size(p);
    } catch (e) {
      add("死enclosure", label, `enclosure 文件不可读:${e.message}`);
      continue;
    }
    if (sz === 0) add("空enclosure", label, `feed enclosure 文件为 0 字节:${p}`);
  }

  return { ok: failures.length === 0, failures };
}

// ── CLI:node scripts/gate-audio.mjs ──
// publishedEpisodes = samples/*.md;feedEnclosures = 各集本地 audio.mp3(本地路径 feed 指向它)。
const isMain = (() => {
  try {
    return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
})();
if (isMain) {
  const base = join(ROOT, "data/episodes");
  const samplesDir = join(ROOT, "samples");
  const published = existsSync(samplesDir)
    ? readdirSync(samplesDir)
        .filter((f) => f.endsWith(".md"))
        .map((f) => f.replace(/\.md$/, ""))
    : [];
  // ④ 真解析 feed.xml 写的每条 enclosure(而非从 id 重构再滤掉不存在的——那样死链永不触发)。
  // 没 feed = 没 enclosure 可查(音频本身仍由 ①②③ 守);有 feed 就如实核它写的每条 url。
  const feedPath = join(ROOT, "feed.xml");
  const feedEnclosures = existsSync(feedPath)
    ? feedEnclosuresFromXml(readFileSync(feedPath, "utf8"), { root: ROOT })
    : [];
  const r = await gateAudio(published, { base, feedEnclosures });
  console.log(`── 音频闸门 · ${published.length} 已发布集 / ${feedEnclosures.length} enclosure ──`);
  if (!r.ok) {
    console.error(`\n❌ 音频闸门未过(${r.failures.length} 条):`);
    for (const f of r.failures) console.error(`   [${f.kind}] ${f.id} — ${f.reason}`);
    process.exit(1);
  }
  console.log(published.length ? "\n✅ 音频闸门全过" : "\nℹ️ 无已发布集(无可校验)");
}
