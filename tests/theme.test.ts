// C13g · 全站只有一套配色 + 集页正文照设计稿排。
// 行为真相 = docs/user-stories.md C13g(已二次确认);
// 设计稿 = 设计稿/style.css(唯一设计真相),数值照抄不自己发明。
//
// 这一片的病根:`.pd` 里面 C13f 已经抄准了,`.pd` 外面那层皮(Quartz 主题)还是
// 2026-07-25「暖红」那轮的值 → 站上两套配色。所以测试的重点不是「值等于某个 hex」,
// 而是**同源**:patch-site 注入给 Quartz 的中性灰/强调色,必须等于 custom.scss 里
// 那套 --B0..--B8 / --pd-accent。写死 hex 只会让两边各改各的,下次照样劈叉。
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

const scss = readFileSync(new URL("../assets/styles/custom.scss", import.meta.url), "utf8");
const patchSite = readFileSync(new URL("../scripts/patch-site.mjs", import.meta.url), "utf8");

/**
 * 从 custom.scss 的某个 :root 块里取 --xxx 的值。
 * ⚠️ custom.scss 里 `:root {` 出现好几次(栏宽那块也是),所以要挑**装着灰阶的那一块**。
 */
function tokens(blockHead: string): Record<string, string> {
  let i = -1;
  for (let p = scss.indexOf(blockHead); p >= 0; p = scss.indexOf(blockHead, p + 1)) {
    if (scss.slice(p, scss.indexOf("}", p)).includes("--B0:")) { i = p; break; }
  }
  if (i < 0) throw new Error(`custom.scss 找不到装着 --B0 的 ${blockHead}`);
  const body = scss.slice(i + blockHead.length, scss.indexOf("}", i));
  const out: Record<string, string> = {};
  for (const [, k, v] of body.matchAll(/(--[\w-]+):\s*([^;]+);/g)) out[k] = v.trim();
  return out;
}

/**
 * patch-site 里每个主题是 patch(旧值, 新值) —— 旧值是上游默认(锚点),新值才是我们注入的。
 * 所以同名块取**第二个**。
 */
function injected(mode: "lightMode" | "darkMode"): Record<string, string> {
  const blocks = [...patchSite.matchAll(new RegExp(`${mode}:\\s*\\n([\\s\\S]*?textHighlight: "[^"]*")`, "g"))];
  expect(blocks.length, `${mode} 应该有「锚点 + 注入」两块`).toBe(2);
  const body = blocks[1][1];
  const out: Record<string, string> = {};
  for (const [, k, v] of body.matchAll(/(\w+):\s*"?([^"\n]+)"?/g)) out[k] = v.trim();
  return out;
}

const light = tokens(":root {");
const dark = tokens(':root[saved-theme="dark"] {');
const inLight = injected("lightMode");
const inDark = injected("darkMode");

describe("C13g · Quartz 主题与设计稿 token 同源(页面底色/链接红不再是第二套)", () => {
  it("★ 浅色:页面底 = --B0、边框 = --B3、次要字 = --B5、标题 = --B8、强调 = --pd-accent", () => {
    expect(inLight.light).toBe(light["--B0"]);
    expect(inLight.lightgray).toBe(light["--B3"]);
    expect(inLight.gray).toBe(light["--B5"]);
    expect(inLight.dark).toBe(light["--B8"]);
    expect(inLight.secondary).toBe(light["--pd-accent"]);
  });

  it("★ 深色:同一套映射也成立(深色是反推的那套,不许各写各的)", () => {
    expect(inDark.light).toBe(dark["--B0"]);
    expect(inDark.lightgray).toBe(dark["--B3"]);
    expect(inDark.gray).toBe(dark["--B5"]);
    expect(inDark.dark).toBe(dark["--B8"]);
    expect(inDark.secondary).toBe(dark["--pd-accent"]);
  });

  it("★ 集页正文颜色由主题给(浅 #252525 照抄设计稿 .mid p;深走 --B7)", () => {
    // 设计稿 style.css `.mid p{...color:#252525}` —— 它不在 B0..B8 那条灰阶上,是正文专用的一档。
    expect(inLight.darkgray).toBe("#252525");
    expect(inDark.darkgray).toBe(dark["--B7"]);
  });

  it("★ 高亮底是 accent 的淡色,不是另一个红", () => {
    // #b8443c → 184,68,60;#e0776a → 224,119,106
    expect(inLight.highlight).toMatch(/184,\s*68,\s*60/);
    expect(inDark.highlight).toMatch(/224,\s*119,\s*106/);
  });

  it("★ 暖红那轮的值在站上清零(第二种红 / 暖米白底不许再出现)", () => {
    for (const stale of ["#e0392b", "#b32c21", "#faf8f6", "#ece7e2", "#33302e", "#1a1917", "#ff6455"]) {
      expect(patchSite, `patch-site 还留着 7-25 暖红那轮的 ${stale}`).not.toContain(stale);
    }
  });
});

describe("C13g · 集页正文照设计稿排", () => {
  // 设计稿 style.css:`.mid p{margin:0 0 17px;font-size:16.5px;line-height:1.95;color:#252525}`
  //                  `.mid h2{font-size:20px;margin:36px 0 13px;line-height:1.45}` + 第 12 行普惠体
  const bodyRule = scss.match(/body:has\(\.pd-play\) article p:not\(blockquote p\)\s*\{([^}]*)\}/)?.[1] ?? "";
  const h2Rule = scss.match(/body:has\(\.pd-play\) article h2\s*\{([^}]*)\}/)?.[1] ?? "";

  it("★ 正文段落 16.5px / 行距 1.95", () => {
    expect(bodyRule).toMatch(/font-size:\s*16\.5px/);
    expect(bodyRule).toMatch(/line-height:\s*1\.95/);
  });

  it("★ 正文颜色用主题变量不硬编 —— 深色模式才不瞎", () => {
    // 2026-08-13 正文软化色:走主题感知变量 --pd-read(浅#33353a/深#cfcdcb),不许硬编 hex。
    expect(bodyRule).not.toMatch(/color:\s*#/); // 不许硬编 hex
    expect(bodyRule).toMatch(/color:\s*var\(--pd-read\)/); // 用主题变量
  });

  it("★ 金句块不被正文那条吃掉(它自己是 17px / 1.7)", () => {
    // :not(blockquote p) 就是为这个存在的;去掉它,金句会被压成 16.5px。
    expect(scss).toContain("article p:not(blockquote p)");
    expect(scss).toMatch(/blockquote:has\(> p\[id\^="q"\]\)\s*\{[^}]*font-size:\s*17px/);
  });

  it("★ 小节标题 24px / 行距 1.45 / 普惠体", () => {
    expect(h2Rule).toMatch(/font-size:\s*24px/); // 20→24 小标题放大(用户 2026-08-13)
    expect(h2Rule).toMatch(/line-height:\s*1\.45/);
    expect(h2Rule).toMatch(/font-family:\s*var\(--puhui\)/);
  });

  // 设计稿 .qr .z 是 17px × 1.7 = 28.9px。行高必须打在 blockquote **里面的 p** 上 ——
  // 打在 blockquote 自己身上没用,Quartz 的 `p{line-height:1.6rem}` 直接命中 p、把 1.7 盖成 25.6px
  // (2026-07-28 线上实测抓到的旧差)。
  it("★ 金句行距 1.7 要打在 p 上,不是只打在 blockquote 上", () => {
    expect(scss).toMatch(/blockquote:has\(> p\[id\^="q"\]\)\s*>\s*p\s*\{[^}]*line-height:\s*1\.7/);
  });

  // 设计稿正文没画链接(20 段 0 个 <a>),真站正文满是实体双链(🔒 产品要求)——
  // 收敛口径(用户 2026-07-29「挂着的做了」):去掉 Quartz 的淡红底色块,只留 accent 字色。
  it("★ 正文双链去底色块(不再是一块块红底),且作用域锁在集页", () => {
    // 前缀 body:has(.pd-play) 必须钉住(GLM 20260729-001[1]):丢了它,这条会漫到
    // 首页/大类页/实体页的一切 a.internal 上,那些页面的底色语汇各有各的主。
    expect(scss).toMatch(/body:has\(\.pd-play\) article a\.internal\s*\{[^}]*background:\s*none/);
  });
});

describe("C13h · 设计稿全量对齐(2026-07-29 用户「一次性改完」;出处=设计稿 style.css)", () => {
  it("★ 详情页 h1:29px/1.35/普惠体(此前吃 Quartz headerFont)", () => {
    const r = scss.match(/body:has\(\.pd-play\) article h1\s*\{([^}]*)\}/)?.[1] ?? "";
    expect(r).toMatch(/font-size:\s*29px/);
    expect(r).toMatch(/line-height:\s*1\.35/);
    expect(r).toMatch(/font-family:\s*var\(--puhui\)/);
  });

  it("★ 金句 .qz:斜体 + CSS 引号;.qm 署名 11.5px;且不锁死在集页作用域(实体页块嵌入要跟着)", () => {
    expect(scss).toMatch(/^\.qz \{/m);
    expect(scss).toMatch(/\.qz\s*\{[^}]*font-style:\s*italic/);
    expect(scss).toMatch(/\.qz:before\s*\{\s*content:\s*"\\201C"/);
    expect(scss).toMatch(/\.qm\s*\{[^}]*font-size:\s*11\.5px/);
  });

  it("★ 【背景】引用块照设计稿(米白底 2px 浅边),金句块被 :not 让出去", () => {
    const r = scss.match(/article blockquote:not\(\[data-callout\]\):not\(:has\(\.qz\)\)\s*\{([^}]*)\}/)?.[1] ?? "";
    expect(r).toMatch(/background:\s*#f8f7f4/);
    expect(r).toMatch(/border-left:\s*2px solid #e0ddd8/);
    expect(r).toMatch(/font-size:\s*15px/);
  });

  it("★ ↩ 圆点 hover 有工具提示(data-t + data-who · 点开英文原话)", () => {
    expect(scss).toMatch(/\.pd-ts:hover:after\s*\{[^}]*attr\(data-t\)/);
  });

  it("★ 分享/收藏:.ico 三态(hover 底/按下缩/收藏实心)+ toast", () => {
    expect(scss).toMatch(/\.pd \.ico\[data-act="fav"\]\.on \.if\s*\{\s*display:\s*block/);
    expect(scss).toMatch(/\.toast\.in\s*\{[^}]*opacity:\s*1/);
  });

  it("★ 涉及行标签是灰药丸、名字是素文字链接(不再一片红底 chip)", () => {
    // 规则活在 .right.sidebar 嵌套块里(C13d-2 的原位)—— 别再另加低优先级的平行规则,压不过它
    expect(scss).toMatch(/\.pd-rel \.callout-content strong\s*\{[^}]*border-radius:\s*4px/);
    expect(scss).toMatch(/\.pd-rel \.callout-content a \{ color: var\(--B6\); background: none/);
  });
});

describe("C13d · 手机端(设计稿 1023 块 + m-detail 移植)", () => {
  it("★ 站名只在有「← 标题」的二级页让位(首页/必读页手机上站名要留),且优先级压得过 C13f 站名规则", () => {
    expect(scss).toMatch(/\.pd \.pd-topin:has\(\.pd-mtitle\) \.b\s*\{\s*display:\s*none/);
    expect(scss).not.toMatch(/^\s*\.pd-top \.b \{ display: none/m);
  });
  it("★ 大类页手机隐藏三轴筛选与排序行", () => {
    expect(scss).toMatch(/\.pd \.frow,\s*\.pd \.sortbar \{ display: none; \}/);
  });
  it("★ 吸顶目录三件套:mtoc 吸顶 / 当前节收起态 / 进度线;桌面不出现", () => {
    expect(scss).toMatch(/\.mtoc\s*\{[^}]*position:\s*sticky/);
    expect(scss).toMatch(/\.mtoc\.at \.mtl\s*\{[^}]*font-weight:\s*600/);
    expect(scss).toMatch(/\.mtbar\s*\{[^}]*height:\s*2px/);
    expect(scss).toMatch(/@media \(min-width: 1024px\) \{\s*\.mtoc,\s*\.mrel \{ display: none; \}/);
  });
});
