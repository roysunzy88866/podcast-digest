#!/usr/bin/env node
// C12 · 嘉宾姓名 + 职位抽取 → meta.guest_name / meta.guest_title
//
// 为什么要这一步:UI 卡片第三行 🔒 =「人名 · 公司职位」,而仓库里**没有可靠的结构化字段**
//   (guest_titles 只有 2 集手工加过;guests 大量为空——嘉宾被塞进了 cohosts)。
//   数据一直在文本里(标题 / 导读开头),只是没被抽出来。见 需求共创/UI交互重做-2026-07-25.md。
//
// 分工(照 extract-entities.mjs 的同一条纪律:能派生的不问模型,问模型的必回原文校验):
//   · 人名 = **从本集说话人名字池里选**(speaker_map/guests/cohosts/host 都只当名字池,
//     角色标注不可信——真数据里嘉宾常被写成 host)。GLM 只做「选哪个」,选候选之外的一律打回。
//     → 从根上堵死「标题正则抓到 Subprime Data / Former FAANG 这种假人名」(UI 会话实测踩过)。
//   · 主持人 = **全库频次自动识别**(同源 ≥30% 且 ≥2 集),不写死名单。实测 Lenny 33/36、Akash 2/3。
//     单集源不下判定(1 集里人人都 100%,判了会把唯一的嘉宾也剔掉)。
//   · 职位 = GLM 从本集中文稿里**抄**,再逐字回原文校验(整串命中,或「公司+职位」两段各自命中)。
//     命中不了 = 编造 → 丢弃留空。用户 2026-07-26 定:口径不必特别严格,但**必须短**(卡片一行)。
//
// 抽不到只留空、不阻塞流水线(Gherkin C12 Scenario 5):只有读不到 meta/digest 才非 0 退出。
//
// 用法:
//   node scripts/extract-guest.mjs <集目录>          # 单集(流水线调这个)
//   node scripts/extract-guest.mjs --all             # 全库回填(有 digest.json 的集)
//   node scripts/extract-guest.mjs --ids a,b         # 点名几集
//   FORCE=1 …                                        # 重抽(默认跳过已有 guest_source 的集,省钱)
import { readFileSync, writeFileSync, existsSync, readdirSync, realpathSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const EPISODES = join(ROOT, "data/episodes");

// ── 纯逻辑(可单测,无副作用)──────────────────────────────

/** speaker_map 里可能是角色名而不是人名(真数据有 "主持人")——它不是名字,不进名字池。 */
const ROLE_WORDS = new Set(["主持人", "嘉宾", "旁白", "host", "guest", "speaker", "undefined", "null"]);

const cleanName = (s) => String(s ?? "").trim();
const isRealName = (s) => !!s && !ROLE_WORDS.has(s.toLowerCase()) && !ROLE_WORDS.has(s);

/**
 * 本集出现过的所有人名(去重,保序)。**角色字段不可信,只当名字池**:
 * infer-speakers 实际是把 SPEAKER_0 当 host,真数据里 Stewart Butterfield / Matt MacInnis
 * 这些嘉宾全被写成了 host —— 所以这里不看谁是 host、谁是 guest,只收集「有哪些名字」。
 * 顺序:speaker_map(出场序,且每个名字都过过 grounding 校验)→ guests → cohosts → host。
 */
export function namesInMeta(meta) {
  const out = [];
  const seen = new Set();
  const push = (n) => {
    const name = cleanName(n);
    if (!isRealName(name)) return;
    const k = name.toLowerCase();
    if (seen.has(k)) return;
    seen.add(k);
    out.push(name);
  };
  for (const n of Object.values(meta?.speaker_map ?? {})) push(n);
  for (const n of meta?.guests ?? []) push(n);
  for (const n of meta?.cohosts ?? []) push(n);
  push(meta?.host);
  return out;
}

/**
 * 全库频次识主持:同一播客源下,某名字出现在 ≥30% 的集里**且至少出现 2 集** → 判该源主持人。
 * 「≥2 集」这条不能省:单集源里人人都占 100%,一判就把唯一的嘉宾也剔了(实测 a16z/Big Technology 各 1 集)。
 * @param metas 全库 meta 对象数组
 * @returns Map(podcast → Set(主持人名))
 */
export function hostNamesByPodcast(metas, { ratio = 0.3, minEpisodes = 2 } = {}) {
  const byPod = new Map();
  for (const m of metas ?? []) {
    const pod = m?.podcast ?? "(未知源)";
    if (!byPod.has(pod)) byPod.set(pod, []);
    byPod.get(pod).push(m);
  }
  const out = new Map();
  for (const [pod, eps] of byPod) {
    const count = new Map();
    for (const m of eps) for (const n of namesInMeta(m)) count.set(n, (count.get(n) ?? 0) + 1);
    const hosts = new Set();
    for (const [n, c] of count) if (c >= minEpisodes && c / eps.length >= ratio) hosts.add(n);
    out.set(pod, hosts);
  }
  return out;
}

/** 本集嘉宾候选 = 名字池 - 该源主持人(大小写不敏感)。 */
export function guestCandidates(meta, hostSet) {
  const hosts = new Set([...(hostSet ?? [])].map((h) => String(h).toLowerCase()));
  return namesInMeta(meta).filter((n) => !hosts.has(n.toLowerCase()));
}

/** 比对用归一:去所有空白、全角括号转半角、小写。**不动句读**(去掉句号会把两句话粘成一句,制造假命中)。 */
export function normalizeCn(s) {
  return String(s ?? "")
    .replace(/[（）]/g, (c) => (c === "（" ? "(" : ")"))
    .replace(/\s+/g, "")
    .toLowerCase();
}

/** 本集中文原文池 = title_zh + tldr + digest_md(坏值 "undefined" 的 title_zh 不当原文,真数据里有)。 */
export function chineseHaystack(meta, digest) {
  const parts = [meta?.title_zh, meta?.tldr, digest?.title_zh, digest?.tldr, digest?.digest_md]
    .map((s) => cleanName(s))
    .filter((s) => s && !ROLE_WORDS.has(s.toLowerCase()));
  return normalizeCn(parts.join("\n"));
}

const CJK = /[一-龥぀-ヿ]/;

/**
 * 卡片显示宽度 = 中文字宽(中日文字符算 1,拉丁字母/数字/空格算 0.5)。
 * 不能按字符数算:`Applied Intuition CEO` 21 个字符,但在卡片上只有 10 个中文字宽 —— 首轮回填
 * 就是按字符数把这类**英文公司名**误伤成「太长」(实测丢了 Qasar Younis / Keith Rabois 两集)。
 * 标杆:「Netflix 产品负责人」=9,上限 12 —— 比标杆略有余量,放得下「Anthropic 增长负责人」这类。
 */
export function displayLen(s) {
  return [...tidyTitle(s)].reduce((w, c) => w + (CJK.test(c) ? 1 : 0.5), 0);
}

/** 规整职位串:收空白、去首尾标点、**中文与中文之间的空格去掉**(坑 #3:正则版会切出「公司 创始人」)。 */
export function tidyTitle(s) {
  let t = String(s ?? "").replace(/\s+/g, " ").trim();
  t = t.replace(/^[\s。,、,.:;:;·|/]+|[\s。,、,.:;:;·|/]+$/g, "");
  // 只在两侧都是中日文字符时去空格;拉丁与中文之间的空格是排版需要,保留(「Netflix 产品负责人」)
  return t.replace(/(.) (.)/g, (m, a, b) => (CJK.test(a) && CJK.test(b) ? a + b : m));
}

/**
 * 职位回原文命中判定:
 *   · verbatim = 整串逐字命中(最干净)
 *   · spliced  = 拆成「公司名 + 职位」两段、**每段各自逐字命中**(每段 ≥2 字,防拿单字凑)
 *     —— 用户 2026-07-26 定的宽口径:同一集里标题写「Netflix 产品负责人」、正文写
 *        「Netflix 的产品与技术负责人」,只认整串会白丢一大半覆盖率。
 *   · null     = 都不中 → 判编造,丢弃
 */
export function matchTitle(title, haystack) {
  const t = normalizeCn(tidyTitle(title));
  const hay = String(haystack ?? "");
  if (!t) return null;
  if (hay.includes(t)) return "verbatim";
  for (let i = 2; i <= t.length - 2; i++) {
    if (hay.includes(t.slice(0, i)) && hay.includes(t.slice(i))) return "spliced";
  }
  return null;
}

// 起首噪声词:原型正则版真切出过「公司 创始人」「长期 合伙人」「三任 CPO」这类残段。
// 只拦明显是句子残渣的开头,不拦「前 Stripe CPO」这种合法写法(用户要的是不必特别严格)。
const BAD_PREFIX = /^(公司|长期|三任|目前|曾经|本集|嘉宾|以及|这家|那位|他是|她是|其中)/;
// 「他在这档节目里是什么角色」不是职位:Big Technology 那集实测抽出「常驻嘉宾」——
// 逐字命中原文、长度也够短,但卡片上写「某某 · 常驻嘉宾」等于没写。这类词整串拦掉,宁可留空。
const SHOW_ROLE = /^(常驻嘉宾|特邀嘉宾|本集嘉宾|节目嘉宾|对谈嘉宾|受访者|嘉宾|联合主持人?|主持人|主播|听众)$/;
export const MAX_TITLE_LEN = 14; // 单位=中文字宽(见 displayLen)。12 太紧:「Khosla Ventures 董事总经理」(13.5)这种正确职位会被误毙;14 仍拦得住「…的首席产品官兼前首席运营官」(17.5)这类句子残段

/**
 * 机器闸门:GLM 这次输出能不能落盘。返回 { errs, titleMatch }。
 * errs 非空 → 打回重试;重试用尽 → 该字段留空(绝不带病落盘)。
 */
export function validateGuestOut(out, { candidates, haystack }) {
  const errs = [];
  const name = cleanName(out?.guest_name);
  const title = tidyTitle(out?.guest_title);
  const cands = (candidates ?? []).map((c) => cleanName(c));

  if (name && !cands.includes(name)) {
    errs.push(`guest_name「${name}」不在本集说话人候选里(疑从标题瞎抓/编造)`);
  }
  let titleMatch = null;
  if (title) {
    if (!name) errs.push("有 guest_title 却没有 guest_name(职位挂不到人身上)");
    if (displayLen(title) > MAX_TITLE_LEN) errs.push(`guest_title 太长(${displayLen(title)}>${MAX_TITLE_LEN} 中文字宽,卡片第三行放不下)`);
    if (BAD_PREFIX.test(title)) errs.push(`guest_title 以噪声词开头:「${title}」`);
    if (SHOW_ROLE.test(title)) errs.push(`guest_title 只是节目里的角色不是公司职位:「${title}」`);
    if (/的$/.test(title)) errs.push(`guest_title 以「的」收尾(切歪的残段):「${title}」`);
    if (name && normalizeCn(title).includes(normalizeCn(name))) errs.push("guest_title 里含嘉宾本人姓名(那是句子不是职位)");
    titleMatch = matchTitle(title, haystack);
    if (!titleMatch) errs.push(`guest_title「${title}」在本集中文稿里查无出处(疑编造)`);
  }
  return { errs, titleMatch };
}

/** 落盘前的规整结果(纯函数,供 CLI 与测试共用)。 */
export function toMetaFields(out, titleMatch) {
  const name = cleanName(out?.guest_name);
  const title = name ? tidyTitle(out?.guest_title) : "";
  return {
    guest_name: name,
    guest_title: title,
    guest_source: `GLM-5.2 抄取 + 机器校(C12);name=${name ? "本集说话人候选内选定" : "无"};title_match=${title ? titleMatch : "none"}`,
  };
}

// ────────────────────────────── 副作用层 ──────────────────────────────

const GLM_TIMEOUT_MS = Number(process.env.GLM_TIMEOUT_MS ?? 120000);

function glmAsk(system, input, maxTokens = 300) {
  return new Promise((res, rej) => {
    const p = spawn("glm-ask", ["--system", system, "--max-tokens", String(maxTokens)], { stdio: ["pipe", "pipe", "pipe"] });
    let out = "", err = "", done = false;
    const finish = (fn, arg) => { if (done) return; done = true; clearTimeout(timer); fn(arg); };
    const timer = setTimeout(() => { p.kill("SIGKILL"); finish(rej, new Error(`glm-ask 超时 ${GLM_TIMEOUT_MS}ms`)); }, GLM_TIMEOUT_MS);
    p.stdout.on("data", (d) => (out += d));
    p.stderr.on("data", (d) => (err += d));
    p.on("error", (e) => finish(rej, e));
    p.on("close", (c) => (c === 0 ? finish(res, out) : finish(rej, new Error(`glm-ask exit ${c}: ${err}`))));
    p.stdin.on("error", (e) => finish(rej, e));
    p.stdin.write(input);
    p.stdin.end();
  });
}

function extractJson(text) {
  let t = String(text).trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) t = fence[1].trim();
  const a = t.indexOf("{"), b = t.lastIndexOf("}");
  if (a < 0 || b < 0) return null;
  try { return JSON.parse(t.slice(a, b + 1)); } catch { return null; }
}

const readJson = (p) => JSON.parse(readFileSync(p, "utf8"));

/** 全库 meta(算主持人频次要;顺带给单集模式用——单集也得知道全库谁是主持)。 */
function allMetas() {
  if (!existsSync(EPISODES)) return [];
  return readdirSync(EPISODES, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(EPISODES, d.name, "meta.json")))
    .map((d) => { try { return readJson(join(EPISODES, d.name, "meta.json")); } catch { return null; } })
    .filter(Boolean);
}

/**
 * 单集:抽 → 校 → 落 meta。返回 { id, name, title, titleMatch, why }。
 * 抽不到不是失败(why 记原因),只有读不到 meta/digest 才抛。
 */
async function processOne(dir, hostsByPod, { force }) {
  const metaPath = join(dir, "meta.json");
  const meta = readJson(metaPath);
  const id = meta.id ?? dir.split("/").pop();
  const digestPath = join(dir, "digest.json");
  if (!existsSync(digestPath)) throw new Error(`${id}:没有 digest.json(半成品,先跑完浓缩)`);
  const digest = readJson(digestPath);

  if (!force && meta.guest_source) {
    return { id, name: meta.guest_name ?? "", title: meta.guest_title ?? "", titleMatch: "(跳过)", why: "已有结果(FORCE=1 可重抽)", skipped: true };
  }

  const hostSet = hostsByPod.get(meta.podcast ?? "(未知源)") ?? new Set();
  const candidates = guestCandidates(meta, hostSet);
  const haystack = chineseHaystack(meta, digest);

  if (!candidates.length) {
    const fields = toMetaFields({}, null);
    writeFileSync(metaPath, JSON.stringify({ ...meta, ...fields }, null, 2));
    return { id, name: "", title: "", titleMatch: "none", why: "本集除主持人外没有别的说话人(无嘉宾)" };
  }

  const SYS = readFileSync(resolve(ROOT, "prompts/extract-guest.md"), "utf8");
  const INPUT = [
    `【本集中文标题】${meta.title_zh && meta.title_zh !== "undefined" ? meta.title_zh : "(无)"}`,
    `【本集英文标题】${meta.title_en ?? "(无)"}`,
    `【本集播客】${meta.podcast ?? "(无)"}`,
    `【本集说话人候选(guest_name 只能从这里逐字照抄;这些人里可能还混着联合主持)】${candidates.join(" / ")}`,
    `【已识别的本源主持人(不要选他们)】${[...hostSet].join(" / ") || "(未识别)"}`,
    `【本集导读开头(职位就抄这里面的字)】\n${String(digest.tldr ?? "")}\n${String(digest.digest_md ?? "").slice(0, 900)}`,
  ].join("\n");

  // 缓存原始输出:回填重跑不重复烧钱(同 extract-entities 的 .entities-raw.txt 纪律)
  const cacheFile = join(dir, ".guest-raw.txt");
  let cand = null;
  if (!force && existsSync(cacheFile)) cand = extractJson(readFileSync(cacheFile, "utf8"));

  const MAX_TRY = 3;
  let accepted = null, lastErrs = [], lastCand = null, nudge = "";
  for (let attempt = 0; attempt < MAX_TRY && !accepted; attempt++) {
    if (!cand) {
      const raw = await glmAsk(SYS, INPUT + nudge);
      writeFileSync(cacheFile, raw);
      cand = extractJson(raw);
    }
    if (!cand) { lastErrs = ["GLM 未返回合法 JSON"]; nudge = "\n\n【上次没返回合法 JSON,只输出那一个 JSON 对象。】"; continue; }
    const { errs, titleMatch } = validateGuestOut(cand, { candidates, haystack });
    if (!errs.length) { accepted = { out: cand, titleMatch }; break; }
    // 把闸门的话原样回给它再试一次 —— 「太长」「查无出处」这类一句话就能改好,
    // 上来就降级成只留人名会白丢覆盖率(首轮回填实测丢了 2 集,都是差几个字太长)。
    lastErrs = errs;
    lastCand = cand;
    nudge = `\n\n【上一次你的输出被机器闸门打回,原因:${errs.join(";")}。请照规则修正后重出;职位实在找不到合规写法就留空,别硬凑。】`;
    cand = null;
  }
  // 试满仍不合格 → 保住人名、砍掉职位(留空是合法答案,不必为职位赔上人名)
  if (!accepted && lastCand) {
    const nameOnly = { guest_name: lastCand.guest_name, guest_title: "" };
    if (validateGuestOut(nameOnly, { candidates, haystack }).errs.length === 0) accepted = { out: nameOnly, titleMatch: null };
  }

  const fields = toMetaFields(accepted?.out ?? {}, accepted?.titleMatch ?? null);
  writeFileSync(metaPath, JSON.stringify({ ...meta, ...fields }, null, 2));
  return {
    id,
    name: fields.guest_name,
    title: fields.guest_title,
    titleMatch: fields.guest_title ? accepted.titleMatch : "none",
    why: fields.guest_name
      ? (fields.guest_title ? "" : `职位未落:${lastErrs.join(" / ") || "GLM 判定材料里没写职位"}`)
      : `人名未落:${lastErrs.join(" / ") || "GLM 判定本集无外部嘉宾"}`,
  };
}

function pickDirs(argv) {
  const idsIdx = argv.indexOf("--ids");
  if (idsIdx >= 0 && argv[idsIdx + 1]) {
    return argv[idsIdx + 1].split(",").map((s) => s.trim()).filter(Boolean).map((id) => join(EPISODES, id));
  }
  if (argv.includes("--all")) {
    return readdirSync(EPISODES, { withFileTypes: true })
      .filter((d) => d.isDirectory() && existsSync(join(EPISODES, d.name, "digest.json")))
      .map((d) => join(EPISODES, d.name))
      .sort();
  }
  const dirArg = argv.find((a) => !a.startsWith("--"));
  if (!dirArg) {
    console.error("用法: node scripts/extract-guest.mjs <集目录> | --all | --ids a,b");
    process.exit(2);
  }
  return [resolve(ROOT, dirArg)];
}

async function main() {
  const argv = process.argv.slice(2);
  const dirs = pickDirs(argv);
  const force = process.env.FORCE === "1";
  const hostsByPod = hostNamesByPodcast(allMetas());
  for (const [pod, hosts] of hostsByPod) {
    if (hosts.size) console.log(`ℹ️ 识出主持人 ${pod} → ${[...hosts].join(", ")}`);
  }

  const results = [];
  for (const dir of dirs) {
    try {
      const r = await processOne(dir, hostsByPod, { force });
      results.push(r);
      const mark = r.skipped ? "⏭" : r.name ? (r.title ? "✅" : "🟡") : "⬜";
      console.log(`${mark} ${r.id} → ${r.name || "(无嘉宾)"}${r.title ? ` · ${r.title} [${r.titleMatch}]` : ""}${r.why ? `  ← ${r.why}` : ""}`);
    } catch (e) {
      console.error(`❌ ${dir}:${e.message}`);
      if (dirs.length === 1) process.exit(1); // 单集(流水线内)才让它响亮失败
      results.push({ id: dir.split("/").pop(), name: "", title: "", why: `出错:${e.message}` });
    }
  }

  if (results.length > 1) {
    const named = results.filter((r) => r.name).length;
    const titled = results.filter((r) => r.title).length;
    const verbatim = results.filter((r) => r.titleMatch === "verbatim").length;
    const spliced = results.filter((r) => r.titleMatch === "spliced").length;
    console.log(`\n── 覆盖率(实测 ${results.length} 集)──`);
    console.log(`   嘉宾人名:${named}/${results.length}(${Math.round((named / results.length) * 100)}%)`);
    console.log(`   嘉宾职位:${titled}/${results.length}(${Math.round((titled / results.length) * 100)}%);其中逐字命中 ${verbatim}、两段命中 ${spliced}`);
    const holes = results.filter((r) => !r.title && !r.skipped);
    if (holes.length) {
      console.log(`   没职位的 ${holes.length} 集:`);
      for (const h of holes) console.log(`     - ${h.id}${h.name ? `(嘉宾 ${h.name})` : ""} — ${h.why}`);
    }
  }
}

const isMain = (() => {
  // ⚠️ 仓库路径含中文,import.meta.url 会百分号编码而 argv[1] 不会 → 必须双向归一(extract-entities 同款教训)
  try { return process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url); } catch { return false; }
})();

if (isMain) main().catch((e) => { console.error(e); process.exit(1); });
