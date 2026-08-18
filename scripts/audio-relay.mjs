#!/usr/bin/env node
// C30 · 音频搬运工(Mac mini 住宅 IP 中转)。
// 云 runner 的 IP 被 Substack 封(D63/drift #62):无官方稿的集走 ASR 兜底时音频直链 403,整集漏掉。
// 闭环:云端下载失败 → state.audioWanted 登记(随回仓入库)→ 本脚本在 Mac mini(住宅 IP)定时跑,
// 把清单里的音频直连抓下来、gh 传到固定 Release 中转站(tag audio-relay,asset=<集id>.mp3)→
// 云端下一班 ASR 对已登记的集先试中转站直链、失败回落原直链;转写成功即清账+删 asset(不堆积)。
// 运输复用 C16 演讲通道同款(公开仓 Release asset 免认证直链,ADR 0017);Mac mini 不在线 →
// 中转站 404 → 回落原直链 = 云端行为与现状一致。
//
// 用法(Mac mini,launchd 每 3h,tools/launchd/com.podcast-digest.audio-relay.plist;也可手动):
//   node scripts/audio-relay.mjs            # 读 origin/main 清单 → 直连下载 → gh 上传中转站
//   node scripts/audio-relay.mjs --dry-run  # 只打印要搬哪些,不下载不上传
// 代理:git/gh 走 AUDIO_RELAY_PROXY(默认空=直连;Mac mini 连 GitHub 要代理时在 plist 配);
//       音频下载**永远直连**——住宅 IP 就是本方案的全部意义,绝不套代理。
// 只上传 asset,不 commit 不 push(与 patrol 的 git 舞步零冲突);清单读 origin/main 不动工作区。
// 纯逻辑导出供单测;副作用只在 main()。
import { createWriteStream, mkdtempSync, rmSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve, join } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";
import { assetUrlFor } from "./seed-talk.mjs";
import { BROWSER_HEADERS } from "./fetch-source-whisperx.mjs";

const ROOT = resolve(fileURLToPath(new URL(".", import.meta.url)), "..");
export const RELAY_TAG = "audio-relay"; // 固定滚动 tag(prerelease),与 talks-seed 分开:这边用后即删,那边永不删

// ── 纯逻辑(可单测)──────────────────────────────────────

/** 中转站 asset 命名 = 集 id(C30 DoD;与演讲通道的 videoId.m4a 区分)。 */
export function relayAssetName(id) {
  return `${id}.mp3`;
}

/** 集 id → 中转站公开直链(拼接复用 seed-talk.assetUrlFor,认不出远端即抛不拼瞎 URL)。 */
export function relayUrlFor(remoteUrl, id) {
  return assetUrlFor(remoteUrl, RELAY_TAG, relayAssetName(id));
}

/** 音频下载失败签名(fetch-source-whisperx 抛的错开头固定「音频下载失败」;经 run() 转抛后仍在 message 里)。 */
export function isAudioDownloadFail(errMsg) {
  return String(errMsg ?? "").includes("音频下载失败");
}

/** 登记待搬运:同 id 覆写(URL 以最新 feed 为准)。state 顶层新键 audioWanted 由 migrateState ...rest 透传。 */
export function noteAudioWanted(state, id, url) {
  state.audioWanted = state.audioWanted ?? {};
  state.audioWanted[id] = url;
}

/** 消费待搬运:在账上 → 划掉并返回该删的 asset 名;不在账上 → null(什么都不动)。 */
export function consumeAudioWanted(state, id) {
  if (!state?.audioWanted?.[id]) return null;
  delete state.audioWanted[id];
  return relayAssetName(id);
}

export function listAudioWanted(state) {
  return Object.entries(state?.audioWanted ?? {}).map(([id, url]) => ({ id, url }));
}

/** `gh release view --json assets` 输出 → asset 名列表;解析不动(release 不存在/坏输出)当空,别崩搬运。 */
export function parseAssetNames(stdout) {
  try {
    const j = JSON.parse(stdout);
    return Array.isArray(j?.assets) ? j.assets.map((a) => a.name) : [];
  } catch {
    return [];
  }
}

// ── 副作用层(只在 main 走到)────────────────────────────

const PROXY = process.env.AUDIO_RELAY_PROXY ?? ""; // 空=直连(Mac mini 默认);连不上 GitHub 才在 plist 配

function proxyEnv() {
  if (!PROXY) return { ...process.env };
  return { ...process.env, https_proxy: process.env.https_proxy || PROXY, http_proxy: process.env.http_proxy || PROXY };
}

function sh(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { cwd: ROOT, env: proxyEnv(), encoding: "utf8", ...opts });
  if (r.error?.code === "ENOENT") throw new Error(`本机没装 ${cmd}(audio-relay 需要 git + gh)`);
  return r;
}

function shOrThrow(cmd, args, opts = {}) {
  const r = sh(cmd, args, opts);
  if (r.status !== 0) throw new Error(`${cmd} 失败(exit ${r.status}):${(r.stderr || r.stdout || "").slice(-400)}`);
  return r;
}

/** 确保中转站 Release 存在(幂等,同 seed-talk.ensureRelease 口径)。 */
function ensureRelease() {
  if (sh("gh", ["release", "view", RELAY_TAG]).status === 0) return;
  console.log(`   Release ${RELAY_TAG} 不存在 → 创建(prerelease)`);
  shOrThrow("gh", ["release", "create", RELAY_TAG, "--prerelease", "--title", "音频中转站(runner 被封 IP 的集,Mac mini 代抓)",
    "--notes", "C30 音频搬运工:云端登记 state.audioWanted → Mac mini 住宅 IP 抓音频上传 → 云端消费后即删。asset 与集 id 一一对应,常态应为空。"]);
}

/** 直连下载音频到临时文件(绝不走代理;UA 与云端同款)。
 *  理智检查(GLM 020[4]):挑战页/错误页(200 + text/html)或迷你响应绝不能被当音频传上中转站——
 *  坏 asset 会让云端 whisperx 阶段失败(错误签名不再是「音频下载失败」),账目卡死、asset 永不清。 */
const MIN_AUDIO_BYTES = 100 * 1024; // 播客音频没有小于 100KB 的;挑战页/错误页远小于此
async function downloadDirect(url, toFile) {
  const res = await fetch(url, { redirect: "follow", headers: BROWSER_HEADERS });
  if (!res.ok) throw new Error(`下载失败 HTTP ${res.status}(URL: ${String(url).slice(0, 80)}…)`);
  const ctype = res.headers.get("content-type") ?? "";
  if (/text\/|html/.test(ctype)) {
    await res.body?.cancel?.(); // GLM 021[3]:拒收也要释放响应体,别让连接吊着
    throw new Error(`下载到的不是音频(content-type: ${ctype})——疑挑战页,拒传中转站`);
  }
  await pipeline(Readable.fromWeb(res.body), createWriteStream(toFile));
  const size = statSync(toFile).size;
  if (size < MIN_AUDIO_BYTES) throw new Error(`下载文件过小(${size} 字节)——疑非音频,拒传中转站`);
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const dryRun = process.argv.includes("--dry-run");
  console.log(`\n══ 音频搬运工 ${new Date().toISOString()}${dryRun ? "(--dry-run)" : ""} ══`);

  // 清单读 origin/main(fetch 后 git show,零工作区改动;与 patrol 同 checkout 也不打架)
  shOrThrow("git", ["fetch", "origin", "main"]);
  const state = JSON.parse(shOrThrow("git", ["show", "origin/main:data/pipeline-state.json"]).stdout);
  const wanted = listAudioWanted(state);
  if (!wanted.length) {
    console.log("待搬运清单空,收工。");
    process.exit(0);
  }
  console.log(`待搬运 ${wanted.length} 条:${wanted.map((w) => w.id).join(", ")}`);

  // GLM 020[3]:先把中转站(和 gh 认证)确认好再下载——认证挂了就在这响亮死,不白下大文件
  if (!dryRun) ensureRelease();
  const existing = parseAssetNames(sh("gh", ["release", "view", RELAY_TAG, "--json", "assets"]).stdout ?? "");
  let failed = 0;
  for (const { id, url } of wanted) {
    const name = relayAssetName(id);
    if (existing.includes(name)) {
      console.log(`   ⏭️ ${id}:中转站已有 asset,等云端消费,跳过`);
      continue;
    }
    if (dryRun) {
      console.log(`   （--dry-run)将搬:${id} ← ${url}`);
      continue;
    }
    const work = mkdtempSync(join(tmpdir(), "audio-relay-"));
    try {
      console.log(`   ⬇️ ${id}:直连下载音频…`);
      await downloadDirect(url, join(work, name));
      console.log(`   ⬆️ ${id}:gh release upload ${RELAY_TAG} …`);
      shOrThrow("gh", ["release", "upload", RELAY_TAG, join(work, name), "--clobber"]);
      console.log(`   ✅ ${id} 已上中转站(云端下一班自取)`);
    } catch (e) {
      // 响亮失败不静默(C30 Gherkin):上游真挂就留在清单里下轮重试
      failed += 1;
      console.error(`   ⚠️ ${id} 搬运失败(留清单下轮重试):${String(e?.message ?? e)}`);
    } finally {
      rmSync(work, { recursive: true, force: true });
    }
  }
  // GLM 020[2]:垃圾回收——不在清单里的 asset = 云端已消费但删失败(如某次没 GH_TOKEN)的孤儿,这里兜底清掉。
  // 只会误伤不了正主:id 只有被 consumeAudioWanted 划账才会离开清单,离开清单的 asset 都是该删的。
  if (!dryRun) {
    const stale = existing.filter((n) => !wanted.some(({ id }) => relayAssetName(id) === n));
    for (const n of stale) {
      const r = sh("gh", ["release", "delete-asset", RELAY_TAG, n, "-y"]);
      if (r.status === 0) console.log(`   🧹 清孤儿 asset(云端已消费):${n}`);
      else console.error(`   ⚠️ 孤儿 asset 清理失败(下轮再试):${n}`);
    }
  }
  if (failed) {
    console.error(`\n⚠️ ${failed}/${wanted.length} 条搬运失败`);
    process.exit(1);
  }
  console.log("\n✅ 搬运完毕。");
}
