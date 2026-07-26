// C12 · 嘉宾姓名 + 职位抽取的真业务测试(Gherkin C12 Scenario 1-4)
//
// 纪律(照 extract-entities.test.ts):**只调被测函数**,不在测试里重抄判定逻辑;
// 每条都要能做变异验证(故意回退实现 → 测试必须挂)。
//
// 本片被测的核心不变量:
//   ① 人名只能从**本集说话人名字池**里选 —— 标题里的非人名(Subprime Data / Former FAANG)进不来
//   ② 主持人靠**全库频次**自动识别(≥30% 且 ≥2 集),不写死名单;单集源不下判定
//   ③ 职位必须**逐字回本集中文稿**(整串命中,或「公司+职位」两段各自命中),编的一律拦
//   ④ 卡片放得下:长度 ≤16、起首噪声词拦、不含嘉宾本人姓名
import { describe, it, expect } from "vitest";
import {
  hostNamesByPodcast,
  namesInMeta,
  guestCandidates,
  chineseHaystack,
  tidyTitle,
  displayLen,
  matchTitle,
  validateGuestOut,
  MAX_TITLE_LEN,
} from "../scripts/extract-guest.mjs";

// ── fixture:镜像真数据的形状(角色字段故意错置——仓库既有 bug:嘉宾被塞进 cohosts)──
const LENNY_EPS = [
  {
    podcast: "Lenny's Podcast",
    host: "Lenny",
    guests: [],
    cohosts: ["Elizabeth Stone"],
    speaker_map: { SPEAKER_0: "Lenny", SPEAKER_1: "Elizabeth Stone" },
  },
  {
    // 真数据里 host 常常是嘉宾(infer-speakers 把 SPEAKER_0 当 host)——角色不可信,只当名字池
    podcast: "Lenny's Podcast",
    host: "Matt MacInnis",
    guests: [],
    cohosts: ["Lenny", "Amar"],
    speaker_map: { SPEAKER_0: "Matt MacInnis", SPEAKER_1: "Lenny", SPEAKER_2: "Amar" },
  },
  {
    podcast: "Lenny's Podcast",
    host: "Lenny",
    guests: [],
    cohosts: ["Jason Lemkin"],
    speaker_map: { SPEAKER_0: "Lenny", SPEAKER_1: "Jason Lemkin" },
  },
];

const SOLO_SOURCE_EP = {
  podcast: "Big Technology Podcast",
  host: "Ranjan Roy",
  guests: [],
  cohosts: ["Alex"],
  speaker_map: { SPEAKER_0: "Ranjan Roy", SPEAKER_1: "Alex" },
};

describe("Scenario 2 · 主持人靠全库频次自动识别(不写死名单)", () => {
  it("★ 同源出现 ≥30% 且 ≥2 集 → 判主持(Lenny 3/3)", () => {
    const m = hostNamesByPodcast(LENNY_EPS);
    expect([...(m.get("Lenny's Podcast") ?? [])]).toEqual(["Lenny"]);
  });

  it("★ 只出现 1 集的名字不判主持(Amar 1/3 = 33% 过了比例,但没到 2 集)", () => {
    const hosts = hostNamesByPodcast(LENNY_EPS).get("Lenny's Podcast") ?? new Set();
    expect(hosts.has("Amar")).toBe(false);
    expect(hosts.has("Elizabeth Stone")).toBe(false);
  });

  it("★ 单集源不下主持判定(1 集里人人都 100%,判了就把唯一嘉宾也剔了)", () => {
    const m = hostNamesByPodcast([SOLO_SOURCE_EP]);
    expect([...(m.get("Big Technology Podcast") ?? [])]).toEqual([]);
  });

  it("跨源不串味:A 源的主持不会被算进 B 源", () => {
    const m = hostNamesByPodcast([...LENNY_EPS, SOLO_SOURCE_EP]);
    expect(m.get("Big Technology Podcast")?.has("Lenny")).toBeFalsy();
  });
});

describe("Scenario 1 · 嘉宾候选只来自本集名字池", () => {
  it("★ 嘉宾被塞在 cohosts 里也能捞出来(仓库既有 bug 的兜底)", () => {
    const hosts = hostNamesByPodcast(LENNY_EPS).get("Lenny's Podcast")!;
    expect(guestCandidates(LENNY_EPS[0], hosts)).toEqual(["Elizabeth Stone"]);
  });

  it("★ host 字段写的是嘉宾时照样能捞出来(角色不可信,只当名字池)", () => {
    const hosts = hostNamesByPodcast(LENNY_EPS).get("Lenny's Podcast")!;
    expect(guestCandidates(LENNY_EPS[1], hosts)).toEqual(["Matt MacInnis", "Amar"]);
  });

  it("角色名「主持人」不是名字,不进名字池", () => {
    const meta = { podcast: "X", host: null, guests: ["Matei Zaharia"], cohosts: [], speaker_map: { SPEAKER_00: "Matei Zaharia", SPEAKER_02: "主持人" } };
    expect(namesInMeta(meta)).toEqual(["Matei Zaharia"]);
  });

  it("同名不同处只留一份(guests / cohosts / speaker_map 重复登记)", () => {
    const meta = { podcast: "X", host: "A", guests: ["B"], cohosts: ["B"], speaker_map: { S0: "A", S1: "B" } };
    expect(guestCandidates(meta, new Set(["A"]))).toEqual(["B"]);
  });
});

describe("Scenario 3 · 职位必须逐字回原文(编的拦下)", () => {
  const META = { title_zh: "Netflix 产品负责人谈 AI 时代:每个人都能做一切", tldr: "" };
  const DIGEST = { digest_md: "两年半前,Elizabeth Stone 第一次做客时她还是 Netflix 的 CTO,今天她已经是 Netflix 的产品与技术负责人。" };
  const HAY = chineseHaystack(META, DIGEST);
  const CANDS = ["Elizabeth Stone"];

  it("★ 整串逐字命中 → verbatim", () => {
    const r = validateGuestOut({ guest_name: "Elizabeth Stone", guest_title: "Netflix 产品负责人" }, { candidates: CANDS, haystack: HAY });
    expect(r.errs).toEqual([]);
    expect(r.titleMatch).toBe("verbatim");
  });

  it("★ 整串不命中、但「公司+职位」两段各自命中 → spliced", () => {
    const hay = chineseHaystack(
      { title_zh: "1.2 个人 + 20 个 AI 智能体:SaaStr 的极简销售实验", tldr: "" },
      { digest_md: "Jason Lemkin 是 SaaStr(全球最大的 B2B 创始人社区之一)的创始人。" },
    );
    const r = validateGuestOut({ guest_name: "Jason Lemkin", guest_title: "SaaStr 创始人" }, { candidates: ["Jason Lemkin"], haystack: hay });
    expect(r.errs).toEqual([]);
    expect(r.titleMatch).toBe("spliced");
  });

  it("★ 稿里查无出处的职位 = 编造 → 拦(本项目有编造前科)", () => {
    const r = validateGuestOut({ guest_name: "Elizabeth Stone", guest_title: "OpenAI CEO" }, { candidates: CANDS, haystack: HAY });
    expect(r.errs.length).toBeGreaterThan(0);
    expect(r.titleMatch).toBe(null);
  });

  it("★ 人名不在候选里(从标题正则会抓到的假人名)→ 拦", () => {
    const r = validateGuestOut({ guest_name: "Subprime Data", guest_title: "" }, { candidates: CANDS, haystack: HAY });
    expect(r.errs.length).toBeGreaterThan(0);
  });

  it("两字段都空 = 合法(本集真没嘉宾,如双主持对谈)", () => {
    expect(validateGuestOut({ guest_name: "", guest_title: "" }, { candidates: [], haystack: HAY }).errs).toEqual([]);
  });

  it("有职位没人名 → 拦(职位挂不到人身上)", () => {
    const r = validateGuestOut({ guest_name: "", guest_title: "Netflix 产品负责人" }, { candidates: CANDS, haystack: HAY });
    expect(r.errs.length).toBeGreaterThan(0);
  });

  it("命中判定对空白/全角括号不敏感", () => {
    expect(matchTitle("Netflix  产品负责人", HAY)).toBe("verbatim");
    expect(matchTitle("Netflix产品负责人", HAY)).toBe("verbatim");
  });

  it("两段拆分不许拿单字凑(每段至少 2 字:「N」虽在 Netflix 里,也不许拿来接「产品负责人」)", () => {
    expect(matchTitle("N 产品负责人", HAY)).toBe(null);
  });
});

describe("Scenario 4 · 卡片放得下(短且干净)", () => {
  const HAY = chineseHaystack(
    { title_zh: "Rippling高管Matt MacInnis:成就伟业", tldr: "" },
    { digest_md: "Matt MacInnis 是 Rippling 的首席产品官(CPO),此前长期担任公司的首席运营官(COO)。他在苹果工作了七年。" },
  );
  const CANDS = ["Matt MacInnis"];
  const val = (t: string) => validateGuestOut({ guest_name: "Matt MacInnis", guest_title: t }, { candidates: CANDS, haystack: HAY });

  it("★ 标杆长度过关(「Rippling高管」/「Rippling 首席产品官」)", () => {
    expect(val("Rippling高管").errs).toEqual([]);
    expect(val("Rippling 首席产品官").errs).toEqual([]);
  });

  it("★ 超长打回(卡片第三行只有一行)", () => {
    const long = "Rippling 的首席产品官兼前首席运营官";
    expect(displayLen(long)).toBeGreaterThan(MAX_TITLE_LEN);
    expect(val(long).errs.length).toBeGreaterThan(0);
  });

  it("★ 长度按中文字宽算,不按字符数:英文公司名不该被误伤(首轮回填真丢过 2 集)", () => {
    expect("Applied Intuition CEO".length).toBeGreaterThan(16); // 按字符数会被判超长
    expect(displayLen("Applied Intuition CEO")).toBeLessThanOrEqual(MAX_TITLE_LEN);
    expect(displayLen("Netflix 产品负责人")).toBe(9); // 用户给的标杆
  });

  it("★ 起首噪声词打回(原型正则踩过:公司 / 长期 / 三任)", () => {
    expect(val("公司 首席产品官").errs.length).toBeGreaterThan(0);
    expect(val("长期 首席运营官").errs.length).toBeGreaterThan(0);
  });

  it("★ 含嘉宾本人姓名 → 打回(那是句子不是职位)", () => {
    expect(val("Matt MacInnis 是 CPO").errs.length).toBeGreaterThan(0);
  });

  it("★ 只是节目里的角色 → 打回(实测真出过「Ranjan Roy · 常驻嘉宾」,卡片上等于没写)", () => {
    const hay = chineseHaystack({ title_zh: "AI 悬崖边?数据中心次级债", tldr: "" }, { digest_md: "本期由常驻嘉宾 Ranjan Roy 与主持人 Alex 对谈。" });
    const r = validateGuestOut({ guest_name: "Ranjan Roy", guest_title: "常驻嘉宾" }, { candidates: ["Ranjan Roy", "Alex"], haystack: hay });
    expect(r.errs.length).toBeGreaterThan(0);
    expect(r.titleMatch).toBe("verbatim"); // 逐字命中原文也照拦——它压根不是「公司职位」
  });

  it("以「的」收尾 → 打回(切歪的残段)", () => {
    expect(val("Rippling 的").errs.length).toBeGreaterThan(0);
  });

  it("★ 中文公司名与中文职位之间不留空格(坑 #3),拉丁与中文之间的空格保留", () => {
    expect(tidyTitle("苹果 首席产品官")).toBe("苹果首席产品官");
    expect(tidyTitle("Netflix 产品负责人")).toBe("Netflix 产品负责人");
    expect(tidyTitle("  Vercel  COO 。")).toBe("Vercel COO");
  });
});

describe("原文池 = title_zh + tldr + digest_md", () => {
  it("title_zh 是坏值 'undefined' 时不当原文(真数据里有这种集)", () => {
    const hay = chineseHaystack({ title_zh: "undefined", tldr: "" }, { digest_md: "他是 Slack 的创始人。" });
    expect(hay.includes("undefined")).toBe(false);
    expect(matchTitle("Slack 创始人", hay)).toBe("spliced");
  });
});
