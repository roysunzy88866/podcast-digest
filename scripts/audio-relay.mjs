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
// 出口序:先配置的那条,再另一条。2026-08-19 实证两条都会单边挂 —— Substack 直连被 GFW 掐、
// 而 GitHub 走代理时代理上游又死过(mihomo 在听但请求全 000,同刻直连 github 200)。
// 无人值守的搬运工不该被单一出口拖死,故每个网络子进程失败后自动换另一条再试一次。
const ROUTES = PROXY ? [PROXY, ""] : [""];
/** 网络层故障签名(换出口重试的判据)。业务性失败(如 release not found / 403 无权限)不匹配 → 不浪费一次重试。
 *  代理上游半死的花样多(GLM 024[3]):除连不上/超时,还有 curl (52) 空回复、(56) recv 失败、gh 的 context deadline。 */
export function isNetworkErr(stderr) {
  return /Could not resolve|Couldn't connect|Failed to connect|Connection refused|onnection reset|timed? ?out|deadline exceeded|SSL_ERROR|EOF|Empty reply|Recv failure|Send failure|not reachable|network is unreachable|proxy CONNECT/i
    .test(String(stderr ?? ""));
}

/** 按出口造 env。⚠️ 两种大小写都要写/删(GLM 024[1]):Go 写的 gh 认 HTTPS_PROXY 大写,
 *  只设小写会被环境里残留的大写变量劫持 —— 首选出口和回退出口双双失真,还查不出来。 */
function envForRoute(route) {
  const env = { ...process.env };
  for (const k of ["https_proxy", "http_proxy", "HTTPS_PROXY", "HTTP_PROXY"]) delete env[k];
  if (route) {
    env.https_proxy = env.http_proxy = route;
    env.HTTPS_PROXY = env.HTTP_PROXY = route;
  }
  return env;
}

/** 网络子进程。默认失败后换另一条出口再试一次;singleRoute=true 只跑首选(给自己已按出口拼好参数的调用点,
 *  否则内外双层重试 = 最多 4 次带超时的调用,而内层换环境变量压不过命令行 -c,纯白跑,GLM 024[2])。 */
function sh(cmd, args, opts = {}) {
  const { singleRoute, ...spawnOpts } = opts;
  let last;
  for (const route of singleRoute ? ROUTES.slice(0, 1) : ROUTES) {
    // env 刻意放 ...spawnOpts 之后:出口正确性不许被调用方的 opts.env 静默盖掉(GLM 024[4])
    const r = spawnSync(cmd, args, { cwd: ROOT, encoding: "utf8", ...spawnOpts, env: envForRoute(route) });
    if (r.error?.code === "ENOENT") throw new Error(`本机没装 ${cmd}(audio-relay 需要 git + gh + curl)`);
    last = r;
    if (r.status === 0) {
      if (route !== ROUTES[0]) console.log(`      (${cmd} 改走${route || "直连"}才通)`);
      return r;
    }
    if (!isNetworkErr(r.stderr)) return r; // 非网络错按原样交上层判(如 release not found)
  }
  return last;
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

/** 音频 content-type 白名单(GLM 022[2]:黑名单挡不住「大 JSON 错误页」这类;改成不认识就不收)。
 *  实测口径:Substack=binary/octet-stream、Megaphone/Anchor=audio/mpeg;audio/ 前缀已覆盖 x-m4a/mp4/ogg 等变体,
 *  video/ 收是因个别源发 mp4 音轨,application/ogg 是 ogg 封装的正式类型。
 *  ⚠️ 误拒的代价(GLM 023[2]):该集搬不过去、留在清单里每班重试,stderr 打明 content-type ——
 *  响亮可见不静默,发现漏收就往这加一条,别为了「宁可放行」把坏文件的口子重新开开。 */
const AUDIO_CTYPE = /^(audio\/|video\/|application\/ogg|(application|binary)\/octet-stream)/i;

/** 下载结果是否可当音频收 —— fail-closed:读不出/没说是什么/不认识的类型一律拒
 *  (GLM 021[3][4][7] + 022[2][6])。坏 asset 上了中转站会让云端卡在非「音频下载失败」的错上,
 *  账目清不掉、asset 也清不掉。curl -L 已跟完重定向,正常终态必是 2xx,故 3xx 也不收。 */
export function audioAcceptable(meta, size) {
  if (!meta) return { ok: false, why: "下载状态读不出(curl 输出异常)" };
  if (!(meta.code >= 200 && meta.code < 300)) return { ok: false, why: `HTTP ${meta.code || "000(连接失败)"}` };
  if (!meta.ctype) return { ok: false, why: "响应没说 content-type(判不出是不是音频)" };
  if (!AUDIO_CTYPE.test(meta.ctype)) return { ok: false, why: `content-type: ${meta.ctype}(不是音频类型)` };
  if (!(size >= MIN_AUDIO_BYTES)) return { ok: false, why: `文件过小/缺失(${size} 字节)` };
  return { ok: true };
}

function downloadAudio(url, toFile) {
  const r = sh("curl", [
    "-sL", "--max-time", "900", "--retry", "2", "-A", BROWSER_HEADERS["User-Agent"],
    // GLM 021[2]:只跟 http(s) 重定向、限跳数——别让上游把 -L 引到别的协议去
    "--proto", "=http,https", "--proto-redir", "=http,https", "--max-redirs", "10",
    // 代理不写 -x 而交给 sh() 的 https_proxy 环境变量:-x 会钉死一条路,而 curl 认这个变量,
    // 于是「代理挂了自动改直连(反之亦然)」的出口回退对下载同样生效。
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
  // git 的代理只能走 -c(Mac mini ~/.gitconfig 有 URL 级空代理规则,压过环境变量;HTTP/1.1 是过代理的协议要求)
  // → 它吃不到 sh() 那套环境变量回退,故在这自己按出口逐条试。
  const gitErrs = [];
  const gitFetched = ROUTES.some((route) => {
    const args = route ? ["-c", `http.https://github.com/.proxy=${route}`, "-c", "http.version=HTTP/1.1"] : [];
    const r = sh("git", [...args, "fetch", "origin", "main"], { singleRoute: true }); // 出口已钉在 -c 里,别再套一层
    if (r.status === 0) {
      if (route !== ROUTES[0]) console.log(`   (git 改走${route || "直连"}才通)`);
      return true;
    }
    gitErrs.push(`${route || "直连"}:${(r.stderr || r.stdout || "").trim().slice(-160)}`);
    return false;
  });
  // 逐条出口的原因必须带出来:只说「都不通」等于把排查现场毁掉(2026-08-19 我自己排查时被这句坑了半小时)
  if (!gitFetched) throw new Error(`git fetch 全出口失败,下轮再试 —— ${gitErrs.join(" | ")}`);
  const state = JSON.parse(shOrThrow("git", ["show", "origin/main:data/pipeline-state.json"]).stdout);
  const wanted = listAudioWanted(state);
  console.log(wanted.length ? `待搬运 ${wanted.length} 条:${wanted.map((w) => w.id).join(", ")}` : "待搬运清单空。");

  // ⚠️ 孤儿回收必须在「清单空就收工」**之前**(2026-08-19 实证:清单空正是孤儿最常见的场景 ——
  // 云端消费完清账后,mini 若读到清账前的快照会白搬一次,那份 asset 从此不在任何清单里)。
  // 先前写在收尾处 = 唯一够得着它的场景反而先 exit 了,等于死代码。
  // ⚠️ 已知成本(GLM 022[1]):清单是 fetch 那一刻的快照。若云端在 fetch 之后重新登记同一集,
  // 这里会把它刚上传的 asset 当孤儿删掉 —— 最坏代价是下一班重搬一次(30MB),不丢数据不卡账,故接受。
  const rv = sh("gh", ["release", "view", RELAY_TAG, "--json", "assets"]);
  // release 不存在是正常的(首跑/刚被清空);别的失败(多半是 gh 没认证)必须响亮死 ——
  // 否则 existing 静默变空:孤儿清不掉还以为清干净了(GLM 022[3])。
  // 判据只认「release not found」这一句:裸 /not found/ 会把「仓库不存在」「404」一并吞掉,
  // 等于换个触发词重犯同一个错(GLM 023[1])。认不出的失败宁可响亮死。
  if (rv.status !== 0 && !/release not found/i.test(rv.stderr || "")) {
    const msg = `读中转站失败(gh 没认证?):${(rv.stderr || "").slice(-200)}`;
    if (dryRun) console.error(`⚠️ ${msg}(--dry-run 继续预演)`); // 预演不该被拦死(GLM 023[3])
    else throw new Error(msg);
  }
  const existing = parseAssetNames(rv.stdout ?? "");
  const stale = staleAssets(existing, wanted);
  if (dryRun) stale.forEach((n) => console.log(`   （--dry-run)将清孤儿:${n}`)); // GLM 022[5]:dry-run 也要看得见 GC
  else {
    for (const n of stale) {
      const r = sh("gh", ["release", "delete-asset", RELAY_TAG, n, "-y"]);
      if (r.status === 0) console.log(`   🧹 清孤儿 asset(云端已消费):${n}`);
      else console.error(`   ⚠️ 孤儿 asset 清理失败(下轮再试):${n}`); // GLM 022[4]:失败信号留在 stderr
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
