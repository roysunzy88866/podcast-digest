#!/usr/bin/env node
// C16 · 演讲精选通道 · 本机抓一手(ADR 0017)。
// 云 runner 抓 YouTube 接近必然被封(需求共创/调研-内容获取可行性.md)→ 音频必须本机 yt-dlp 抓,
// 经 GitHub Release asset(固定 prerelease tag,gh CLI 上传,公开仓资产免认证直链)送云,
// 云端 fetch-source-whisperx --transcribe 直接拉该直链转写——运输零新基建、云侧零新拉取步。
//
// 用法(本机,需已装 yt-dlp + gh 且 gh 已登录;默认走代理 127.0.0.1:7877):
//   node scripts/seed-talk.mjs <YouTube URL> [<URL>...]   # 下载音频+元数据 → data/talks-seed/<videoId>/ → 上传 Release
//   node scripts/seed-talk.mjs --dry-run <URL>...          # 只打印将处理哪些,不下载不上传
//   node scripts/seed-talk.mjs --no-upload <URL>...        # 只下载落种子,不上传(audio_asset_url 记 null,补传后重跑即补写)
//
// 跑完两步收尾(打印在末尾提醒):① commit data/talks-seed/*/seed.json 并 push;② workflow 手动触发 talks=true。
// 纯逻辑(videoIdFromUrl/seedFromYtdlpJson/assetUrlFor)导出供单测;副作用只在 main()。
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SEED_DIR = join(ROOT, "data/talks-seed");
const STATE_FILE = join(ROOT, "data/pipeline-state.json");
export const RELEASE_TAG = "talks-seed"; // 固定滚动 tag(prerelease),所有演讲音频都挂它,--clobber 幂等
// 开发机默认走 clash 代理 7877(全局记忆:7877 非 7890);C17/ADR 0018:Mac mini 直连场景由
// SEED_TALK_PROXY 显式覆写(空串=不注代理;patrol-talks.mjs 派生时自动带上,代理不写死)。
const PROXY = process.env.SEED_TALK_PROXY ?? "http://127.0.0.1:7877";

// ── 纯逻辑(可单测)──────────────────────────────────────

/** YouTube URL → videoId(watch?v= / youtu.be / live / shorts);认不出返回 null 不猜。 */
export function videoIdFromUrl(url) {
  const m = String(url ?? "").match(
    /(?:youtube\.com\/(?:watch\?(?:[^#]*&)?v=|live\/|shorts\/)|youtu\.be\/)([\w-]{6,})/,
  );
  return m ? m[1] : null;
}

/** yt-dlp --dump-single-json → seed.json 形状。fail-closed:缺 id/upload_date 即抛,不产坏种子。 */
export function seedFromYtdlpJson(j, { audioFile, assetUrl }) {
  if (!j?.id) throw new Error("yt-dlp 元数据缺 id(fail-closed,不产坏种子)");
  const d = String(j.upload_date ?? "");
  if (!/^\d{8}$/.test(d)) throw new Error(`yt-dlp 元数据 upload_date 异常:「${d}」(需 YYYYMMDD)`);
  return {
    videoId: j.id,
    url: j.webpage_url ?? `https://www.youtube.com/watch?v=${j.id}`,
    title: j.title ?? "",
    channel: j.channel ?? "",
    uploader: j.uploader ?? "",
    upload_date: `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`,
    duration_sec: j.duration ?? 0,
    audio_file: audioFile,
    audio_asset_url: assetUrl ?? null,
  };
}

/** git 远端 → Release asset 公开直链(公开仓免认证可 fetch,云端 whisperX 直接当 enclosure 用)。 */
export function assetUrlFor(remoteUrl, tag, file) {
  const m = String(remoteUrl ?? "").match(/github\.com[/:]([^/]+)\/([^/]+?)(?:\.git)?$/);
  if (!m) throw new Error(`认不出 GitHub 远端:「${remoteUrl}」(不拼瞎 URL)`);
  return `https://github.com/${m[1]}/${m[2]}/releases/download/${tag}/${encodeURIComponent(file)}`;
}

// ── 副作用层 ────────────────────────────────────────────

/** 子进程 env:补上代理(yt-dlp/gh 同享);PROXY 为空(直连场景)则不注入。 */
function proxyEnv() {
  if (!PROXY) return { ...process.env };
  return { ...process.env, https_proxy: process.env.https_proxy || PROXY, http_proxy: process.env.http_proxy || PROXY };
}

function sh(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { env: proxyEnv(), encoding: "utf8", ...opts });
  if (r.error?.code === "ENOENT") throw new Error(`本机没装 ${cmd}(seed-talk 需要 yt-dlp + gh)`);
  return r;
}

function shOrThrow(cmd, args, opts = {}) {
  const r = sh(cmd, args, opts);
  if (r.status !== 0) throw new Error(`${cmd} 失败(exit ${r.status}):${(r.stderr || r.stdout || "").slice(-400)}`);
  return r;
}

/** 确保滚动 Release 存在(幂等):view 不到就 create(prerelease,别混进正经版本列表)。 */
function ensureRelease() {
  if (sh("gh", ["release", "view", RELEASE_TAG]).status === 0) return;
  console.log(`   Release ${RELEASE_TAG} 不存在 → 创建(prerelease)`);
  shOrThrow("gh", ["release", "create", RELEASE_TAG, "--prerelease", "--title", "演讲音频种子(流转用,非版本发布)",
    "--notes", "C16 演讲精选通道的音频中转站:本机 seed-talk 上传,云端 whisperX 拉取。asset 与 data/talks-seed/*/seed.json 一一对应。"]);
}

/** 已记账的 videoId(pipeline-state.json talkVideoIds)——已处理过的不重下。 */
function ledgeredVideoIds() {
  try {
    return JSON.parse(readFileSync(STATE_FILE, "utf8")).talkVideoIds ?? {};
  } catch {
    return {};
  }
}

async function main() {
  const argv = process.argv.slice(2);
  const dryRun = argv.includes("--dry-run");
  const noUpload = argv.includes("--no-upload");
  const urls = argv.filter((a) => !a.startsWith("--"));
  if (!urls.length) {
    console.error("用法:node scripts/seed-talk.mjs [--dry-run] [--no-upload] <YouTube URL> [<URL>...]");
    process.exit(2);
  }

  const remote = shOrThrow("git", ["remote", "get-url", "origin"]).stdout.trim();
  const ledger = ledgeredVideoIds();
  const results = { seeded: [], skipped: [], failed: [] };

  for (const url of urls) {
    const vid = videoIdFromUrl(url);
    console.log(`\n▶ ${url}`);
    if (!vid) {
      console.error(`   ⛔ 认不出 videoId,跳过(只收 YouTube watch/youtu.be/live/shorts 链接)`);
      results.failed.push({ url, why: "认不出 videoId" });
      continue;
    }
    const dir = join(SEED_DIR, vid);
    const seedPath = join(dir, "seed.json");
    const already = existsSync(seedPath) ? JSON.parse(readFileSync(seedPath, "utf8")) : null;
    if (ledger[vid]) {
      console.log(`   ⏭ videoId ${vid} 已在 pipeline-state 演讲账本(已处理为 ${ledger[vid]}),跳过不重下`);
      results.skipped.push({ vid, why: "账本已记(已处理)" });
      continue;
    }
    if (already?.audio_asset_url) {
      console.log(`   ⏭ 种子已存在且已上传(${already.audio_asset_url}),跳过`);
      results.skipped.push({ vid, why: "种子已就绪" });
      continue;
    }
    if (dryRun) {
      console.log(`   （--dry-run)将落种子 data/talks-seed/${vid}/ 并上传 Release ${RELEASE_TAG}`);
      results.seeded.push(vid);
      continue;
    }

    try {
      // ① 元数据(--no-download,不烧流量)
      console.log("   ① yt-dlp 元数据…");
      // 元数据也钉同一个 player_client(GLM 024[5]:与下载不同客户端会在某些视频先挂;统一口径)
      const meta = JSON.parse(shOrThrow("yt-dlp", ["--extractor-args", "youtube:player_client=default", "--no-download", "--no-playlist", "--dump-single-json", url]).stdout);
      // ② 音频(最佳音轨,优先 m4a;已有本地音频文件则复用不重下——补传场景)
      mkdirSync(dir, { recursive: true });
      // 复用**本地已有**音频(不限于 already 记录的):种子目录里已有该集音频就跳过下载,只补上传。
      // 幂等 + 省掉重复(慢/易挂)的 YouTube 下载;补传场景(already.audio_file)天然被这条覆盖。
      // ⚠️ **精确**匹配 `<vid>.<音频扩展名>`(GLM 024[1][4] + 026[1][2]):不吃 .part/.temp/.mp4 残留(不是纯音频扩展名),
      //    也不被前缀撞车的别集音频误命中(exact `^vid\.ext$`,非 startsWith)。vid 是 YouTube ID([\w-],无正则特殊字符)。
      const audioRe = new RegExp("^" + vid + "\\.(m4a|mp3|aac|opus|webm|ogg|wav)$", "i");
      let audioFile = readdirSync(dir).find((f) => audioRe.test(f)) ?? null;
      if (audioFile) {
        console.log(`   ② 复用本地已有音频 ${audioFile}(跳过下载,只补上传)`);
      } else {
        console.log("   ② yt-dlp 下载最佳音频…");
        // 2026-08-31 修:YouTube 反爬升级后,默认(自动选)客户端只给 m3u8/HLS(下载易挂 ffmpeg 196),
        //   且旧的 bestaudio 会误抓成**配音轨**(多语言 dub → 整集译错语言,防失真闸门还查不出,因为转写稿也是那门语言)。改三处:
        //   ① --extractor-args player_client=default —— 拿到直连 m4a(139/140 系列,https,非 m3u8);
        //   ② -S "lang,quality" —— **显式**把「原始语轨」排最前(GLM 024[2]:不靠默认排序的隐式行为;实证选中 140-17=en 原始);
        //   ③ 格式优先 m4a+https,fallback 链保住只有 m3u8 的视频也能走。整条演讲通道共用此修。
        shOrThrow("yt-dlp", ["--no-playlist", "--extractor-args", "youtube:player_client=default",
          "-S", "lang,quality",
          "-f", "bestaudio[ext=m4a][protocol=https]/bestaudio[ext=m4a]/bestaudio",
          "-o", join(dir, "%(id)s.%(ext)s"), url],
          { stdio: ["ignore", "inherit", "inherit"] });
        audioFile = readdirSync(dir).find((f) => audioRe.test(f));
        if (!audioFile) throw new Error("yt-dlp 报成功但找不到音频文件(fail-closed)");
      }
      // ③ 上传 Release asset(--clobber 幂等;--no-upload 时 asset_url 记 null,补传后重跑即补写)
      let assetUrl = null;
      if (noUpload) {
        console.log("   ③（--no-upload)跳过上传,audio_asset_url 记 null");
      } else {
        ensureRelease();
        console.log(`   ③ gh release upload ${RELEASE_TAG} …`);
        shOrThrow("gh", ["release", "upload", RELEASE_TAG, join(dir, audioFile), "--clobber"]);
        assetUrl = assetUrlFor(remote, RELEASE_TAG, audioFile);
      }
      // ④ 落 seed.json(清单入 git;音频文件 gitignore 只在本机+Release)
      const seed = seedFromYtdlpJson(meta, { audioFile, assetUrl });
      seed.seeded_at = new Date().toISOString();
      writeFileSync(seedPath, JSON.stringify(seed, null, 2) + "\n");
      console.log(`   ✅ 种子就绪:${seed.upload_date} · ${seed.title}(${Math.round(seed.duration_sec / 60)} 分)`);
      results.seeded.push(vid);
    } catch (e) {
      console.error(`   ❌ ${vid} 失败:${e.message}`);
      results.failed.push({ url, why: e.message });
    }
  }

  console.log(`\n══ 收账:种子 ${results.seeded.length} / 跳过 ${results.skipped.length} / 失败 ${results.failed.length}`);
  if (results.seeded.length && !dryRun) {
    console.log(`\n下一步(seed-talk 不代跑;巡航 patrol-talks 会自动做①):
  ① git add data/talks-seed && git commit(seed.json 清单入仓)→ push
  ② push 后 cron 例行班次自动接管种子(ADR 0018.5);要立即处理可手动触发 C7b Auto Pipeline 输入 talks=true`);
  }
  if (results.failed.length) process.exit(1);
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  main().catch((e) => {
    console.error(`\n❌ seed-talk 失败:${e.message}`);
    process.exit(1);
  });
}
