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
import { mkdtempSync, rmSync, statSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve, join } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
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

/** 孤儿 asset = 中转站上不在待搬运清单里的 —— 云端已消费(清账在先),或某次删失败留下的。
 *  只会误伤不了正主:id 只有被 consumeAudioWanted 划账才会离开清单,离开清单的就是该删的。
 *  ⚠️ 清单空时孤儿最多(云端刚消费完),故调用点必须在「清单空就收工」之前(2026-08-19 实证)。 */
export function staleAssets(existingNames, wanted) {
  return existingNames.filter((n) => !wanted.some(({ id }) => relayAssetName(id) === n));
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

/** 下载音频到临时文件(UA 与云端同款)。
 *  ⚠️ 2026-08-19 实测订正:原设计「音频永远直连」是错的 —— Mac mini 在国内,直连 api.substack.com
 *  40s 超时(GFW),走 clash 7890 反而 206 拿到真 MP3(file 认出 MPEG)。**关键**:代理出口 IP 不是
 *  GitHub runner 那个被封的 IP,所以拿得到 —— 本方案真正的杠杆是「换一个 Substack 不拒的出口」,
 *  住宅 IP 只是其中一种。故这里跟随 AUDIO_RELAY_PROXY(空则直连,海外机器场景)。
 *  用 curl 而非 node fetch:node 的 fetch 不读环境变量代理,显式 ProxyAgent 要押在 undici 上
 *  (本仓只是 wrangler 的间接依赖,不该让搬运工吊在它身上);curl 是 macOS 自带,且正是它实测
 *  在 mini 上 206 拿到真 MP3 的。与本脚本 git/gh 走子进程的风格一致。
 *  理智检查(GLM 020[4]):挑战页/错误页(200 + text/html)或迷你响应绝不能被当音频传上中转站——
 *  坏 asset 会让云端 whisperx 阶段失败(错误签名不再是「音频下载失败」),账目卡死、asset 永不清。 */
const MIN_AUDIO_BYTES = 100 * 1024; // 播客音频没有小于 100KB 的;挑战页/错误页远小于此

/** curl -w 输出(`code=%{http_code} type=%{content_type}`)→ {code, ctype}。解析不动即 fail-closed。 */
export function parseCurlMeta(stdout) {
  const m = String(stdout ?? "").match(/code=(\d+) type=([^\s]*)/);
  return m ? { code: Number(m[1]), ctype: m[2] } : null;
}

/** 下载结果是否可当音频收(GLM 021[3]/[4]/[7]:空 ctype、code=000(DNS/连接失败 curl 仍打 -w)一律拒,
 *  别让「读不出/没说是什么」当成功混过去 —— 坏 asset 上了中转站会让云端卡死在非「音频下载失败」的错上)。 */
export function audioAcceptable(meta, size) {
  if (!meta) return { ok: false, why: "下载状态读不出(curl 输出异常)" };
  if (!(meta.code >= 200 && meta.code < 400)) return { ok: false, why: `HTTP ${meta.code || "000(连接失败)"}` };
  if (!meta.ctype) return { ok: false, why: "响应没说 content-type(判不出是不是音频)" };
  if (/text\/|html/.test(meta.ctype)) return { ok: false, why: `content-type: ${meta.ctype}(疑挑战页)` };
  if (!(size >= MIN_AUDIO_BYTES)) return { ok: false, why: `文件过小/缺失(${size} 字节)` };
  return { ok: true };
}

function downloadAudio(url, toFile) {
  const r = sh("curl", [
    "-sL", "--max-time", "900", "--retry", "2", "-A", BROWSER_HEADERS["User-Agent"],
    // GLM 021[2]:只跟 http(s) 重定向、限跳数——别让上游把 -L 引到别的协议去
    "--proto", "=http,https", "--proto-redir", "=http,https", "--max-redirs", "10",
    ...(PROXY ? ["-x", PROXY] : []),
    "-o", toFile, "-w", "code=%{http_code} type=%{content_type}", url,
  ]);
  if (r.status !== 0) throw new Error(`下载失败(curl exit ${r.status}):${(r.stderr || "").slice(-200)}`);
  const meta = parseCurlMeta(r.stdout);
  // 空 body 时 curl 不建文件 → statSync 会 ENOENT(GLM 021[3]);统一按「size 0」交给判据,报人话不报 fs 错
  const size = existsSync(toFile) ? statSync(toFile).size : 0;
  const verdict = audioAcceptable(meta, size);
  if (!verdict.ok) throw new Error(`下载失败 ${verdict.why},拒传中转站(URL: ${String(url).slice(0, 80)}…)`);
  console.log(`      (${Math.round(size / 1024 / 1024)} MB,HTTP ${meta.code})`);
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const dryRun = process.argv.includes("--dry-run");
  console.log(`\n══ 音频搬运工 ${new Date().toISOString()}${dryRun ? "(--dry-run)" : ""} ══`);

  // 清单读 origin/main(fetch 后 git show,零工作区改动;与 patrol 同 checkout 也不打架)。
  // git 代理必须走 -c:Mac mini ~/.gitconfig 的 URL 级空代理规则压过环境变量;HTTP/1.1 是过代理的协议要求。
  const gitProxyArgs = PROXY
    ? ["-c", `http.https://github.com/.proxy=${PROXY}`, "-c", "http.version=HTTP/1.1"]
    : [];
  shOrThrow("git", [...gitProxyArgs, "fetch", "origin", "main"]);
  const state = JSON.parse(shOrThrow("git", ["show", "origin/main:data/pipeline-state.json"]).stdout);
  const wanted = listAudioWanted(state);
  console.log(wanted.length ? `待搬运 ${wanted.length} 条:${wanted.map((w) => w.id).join(", ")}` : "待搬运清单空。");

  // ⚠️ 孤儿回收必须在「清单空就收工」**之前**(2026-08-19 实证:清单空正是孤儿最常见的场景 ——
  // 云端消费完清账后,mini 若读到清账前的快照会白搬一次,那份 asset 从此不在任何清单里)。
  // 先前写在收尾处 = 唯一够得着它的场景反而先 exit 了,等于死代码。
  const existing = parseAssetNames(sh("gh", ["release", "view", RELAY_TAG, "--json", "assets"]).stdout ?? "");
  if (!dryRun) {
    for (const n of staleAssets(existing, wanted)) {
      const r = sh("gh", ["release", "delete-asset", RELAY_TAG, n, "-y"]);
      console.log(r.status === 0 ? `   🧹 清孤儿 asset(云端已消费):${n}` : `   ⚠️ 孤儿 asset 清理失败(下轮再试):${n}`);
    }
  }
  if (!wanted.length) {
    console.log("收工。");
    process.exit(0);
  }

  // GLM 020[3]:先把中转站(和 gh 认证)确认好再下载——认证挂了就在这响亮死,不白下大文件
  if (!dryRun) ensureRelease();
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
      console.log(`   ⬇️ ${id}:下载音频(${PROXY ? `经 ${PROXY}` : "直连"})…`); // GLM 021[1]:文案别再说死「直连」
      downloadAudio(url, join(work, name));
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
  if (failed) {
    console.error(`\n⚠️ ${failed}/${wanted.length} 条搬运失败`);
    process.exit(1);
  }
  console.log("\n✅ 搬运完毕。");
}
