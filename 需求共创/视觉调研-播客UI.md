# 视觉调研 · 播客 UI(voice.solomind.cc 视觉改版)

> 2026-07-25 · 三路并行 agent 真抓(播客 App / 文摘 newsletter 站 / 设计画廊),非凭记忆。
> 范围:**只改视觉**(配色/字体/间距/卡片质感/整体气质);C10 交互结构(Bases 三视图 + 8 大类)不动。
> 本文档 = 给用户挑方向的调研输入,不含任何实现;方向拍板后另出落地方案。
> 溯源约定:每条结论附可点链接+日期;抓不到一手证据的标【推断·未证实】;超 2 年旧资料注明。

---

## 一、现状基线(改版的起点)

- 线上站 = **素 Quartz v5 原生主题**,零视觉定制。仓库唯一定制是 `scripts/patch-site.mjs` 的 3 处配置补丁(关弹框/站名/默认卡片视图),没有任何自定义配色、字体、CSS。
- Quartz 官方默认主题(抓 [quartz.jzhao.xyz](https://quartz.jzhao.xyz) CSS,2026-07-25):
  - 字体三件套:标题 Schibsted Grotesk / 正文 Source Sans Pro / 代码 IBM Plex Mono(Google Fonts)
  - 颜色 7 变量:亮色底 `#faf8f8` 米白(非纯白)、暗色底 `#161618` 深灰(非纯黑)、主色藏青 `#284b63`、辅色灰绿 `#84a59d` 等
- **换肤的全部接口就是这 7 个颜色变量 + 3 个字体位**(quartz.config.yaml theme 段),再往上是自定义 CSS/组件。这意味着「换个气质」的基础成本很低,天花板则看愿意加多少自定义 CSS。

### 硬约束(三个方向都得服)

| 约束 | 含义 |
|---|---|
| site/ 是构建区 | 一切视觉定制必须收进 patch/独立组件(项目铁律),不散改 fork |
| Bases 三视图 DOM 由插件生成 | 卡片墙/表格/看板只能 **CSS 定制**,不能改结构;卡片内元素(日期/标题/播客/时长/简介)是现成 DOM |
| 单集页多数无独立封面图 | 卡片不能指望封面撑场——「无图仍好看」是选型硬指标 |
| 中文为主的双端自适应 | 中文没有斜体/小型大写这些排版工具,层级只能靠**字重+字号+行距+留白**;衬线中文 web font 体积大(数 MB 级),用衬线就要接受子集化工程或系统字体回退 |
| 暗色模式是 Quartz 原生双模式 | 不是可选项,两套色板都得设计 |

---

## 二、调研摘要(三路,附溯源)

### 路 1 · 主流播客 App(6 家,2026-07-25 真抓)

| 对象 | 关键观察 | 来源 |
|---|---|---|
| Apple Podcasts | 纵向列表非卡片;灰阶四档层级;相对日期+时长右对齐小字;几乎无投影 | [web 版](https://podcasts.apple.com/us/browse)、[节目页](https://podcasts.apple.com/us/podcast/lennys-podcast-product-growth-career/id1627920305) 直抓;iOS 26 Liquid Glass 改版见 [MacRumors](https://www.macrumors.com/guide/ios-26-podcasts/)(2025-06) |
| Spotify | 深底为默认态,品牌绿 `#1DB954` 只做交互点缀,彩色封面当颜色主角 | [节目页](https://open.spotify.com/show/59RliaMdeDAkEgp9nj1Mkj) 直抓;[Spotify Design 桌面版设计文](https://medium.com/spotify-design/designing-a-new-foundation-spotify-for-desktop-58305f16ce72)(2021,5 年前资料可能过时) |
| 小宇宙 | 单一品牌蓝靠**明度变化**做全部层级+按封面动态取色;元数据用灰色小 icon+计数(播放/评论);高光金句绑时间轴(声波形式) | [单集页](https://www.xiaoyuzhoufm.com/episode/653d71ddef5bf8b6c56a95fe) 直抓;[站酷分析](https://www.zcool.com.cn/article/ZMTIzNDcwMA==.html)(约 2021,可能过时);[woshipm](https://www.woshipm.com/evaluating/5735772.html)(2023-01) |
| Overcast | 把系统字换成 SF Rounded 圆体「增加易读性、匹配 App 性格」——字体=性格的教科书决策;播放列表用「自选色+图标」而非封面墙做识别 | [Marco Arment 设计自述](https://marco.org/2022/03/25/overcast-redesign-2022)(2022,作者一手);[2024 重写](https://marco.org/2024/07/16/overcast-rewrite) |
| Pocket Casts | 暗色颗粒度最细:Light / Dark / **Extra Dark(OLED 纯黑)** 三档;封面网格与列表可切换 | [官网](https://pocketcasts.com) 直抓(主蓝 `#03A9F4`);[9to5Google](https://9to5google.com/2018/11/14/hands-on-pocket-casts-7-0-material-theme-gallery/)(2018,8 年前资料可能过时) |
| Snipd | **与本项目金句最相关**:深底知识工具感;单集卡用「42 snips」金句计数当热度徽章(替代播放量);snip 卡结构=AI 标题→逐字转写(长转写默认折叠)→时间点链接+元数据 | [官网](https://www.snipd.com/all-features)、[share 页](https://share.snipd.com/person/saurabh-amari/ItURBHPBQWmAxZZ0J7N8NA) 直抓;snip 结构见 [Obsidian 论坛](https://forum.obsidian.md/t/snipd-integration-podcast-highlights-with-transcript-notes-summary-metadata/26499)(2021-2022,结构性信息较稳) |

**6 家跨流派共识**:①封面永远是列表项最大元素、标题次之(→本项目无封面,此路不通,需替代方案);②日期+时长成对小字出现;③圆角小而克制(4-12px)、投影极少;④正文清一色无衬线;⑤暗色标配,分歧只在深灰 vs 可选纯黑。

### 路 2 · 文摘/newsletter/知识库站(2026-07-25 真抓,含 CSS 层取证)

| 对象 | 关键观察 | 来源 |
|---|---|---|
| Podcast Notes(业务最像) | 深底+金色 `#ddaa1e` 的会员制内容库感;标题衬线 Moret+正文系统无衬线;**金句只加粗、不做视觉强调——同类站的明显短板,正是本项目可反着做的点** | [首页](https://podcastnotes.org)、[笔记页](https://podcastnotes.org/modern-wisdom/14-patterns-behind-the-worlds-greatest-minds-david-senra-modern-wisdom-with-chris-williamson-1126/) + 主题 CSS 直抓 |
| Lenny's Newsletter | Substack 通栏条目式:标题+副题+日期+右侧小图+社交计数;白底信箱感,视觉无个性 | [archive](https://www.lennysnewsletter.com/archive)、[文章页](https://www.lennysnewsletter.com/p/how-to-take-a-sabbatical) 直抓 |
| Latent Space | Substack 默认模板+紫 `#9333ea` pop 色+emoji 标题;视觉投入低 | [首页](https://www.latent.space) + 主题 JSON 直抓 |
| Stratechery | **报纸专栏式**:零卡片,标题+全写日期+节选的纯列表;FreightSans Pro 全站无衬线;分节小标题全大写;窄版心大留白 | [首页](https://stratechery.com)、[文章页](https://stratechery.com/2026/whos-afraid-of-chinese-models/) + CSS 直抓 |
| Every | 杂志分区式:衬线 Signifier 做内容+Inter 做界面,白底+浅青 `#c0f0fb` 高饱和点缀色块,编辑感强;「专栏」是一等层级 | [首页](https://every.to)、[文章页](https://every.to/p/drowning-in-demos-here-s-a-better-way-to-prototype) + CSS 直抓 |
| Acquired.fm | 每集一套专属配色的封面艺术;集页 hero→播放器(带章节)→分区,premium 杂志感 | [首页](https://www.acquired.fm/)、[Disney 集页](https://www.acquired.fm/episodes/the-walt-disney-company) 直抓 |

**Quartz 底子上被证明可行的天花板**(两个 showcase 活站,最重要的存在性证明):

- **[The Pond(turntrout.com)](https://turntrout.com/design)**——衬线文学感极致:正文 EB Garamond(子集化省 76% 体积)、花体首字下沉、17 种自定义 callout、**暗色模式对图片做 HSL 亮度翻转**、字号指数比例 1.2ⁿ。作者设计文档全公开,全部在 Quartz 架构内、走自定义组件实现(与本项目铁律同路)。代价:自研库+构建管线,「能做,但重」。
- **[Data Engineering Vault(ssp.sh/brain)](https://www.ssp.sh/brain/data-engineering/)**——工程终端感:标题用 Iosevka 窄等宽、**暗色直接换整套 Kanagawa 色板**(底 `#1F1F28`)而非反色、每类 callout 一个专属色。证明「暗色=独立设计的第二套色板」在 Quartz 上成熟可行。

**四条视觉路数总结**(按视觉投入低→高):报纸专栏式(Stratechery)→ 信箱条目式(Substack 系)→ 杂志分区式(Every/Acquired)→ 知识花园式(The Pond/Vault,与本项目 frontmatter+双链架构天然同构)。

### 路 3 · 设计画廊与案例(2026-07-25;land-book 与 godly 双双 403 缺席,已如实记录)

**卡片质感四流派**(均有活站佐证):

| 流派 | 气质 | 活站佐证 |
|---|---|---|
| 大圆角+软阴影 | 友好 App 感 | [少数派](https://sspai.com)(中文标杆)、[Acquired](https://www.acquired.fm/) |
| 直角+细线/留白分隔 | 编辑部刊物感 | [99% Invisible](https://99percentinvisible.org)(播客站最好活体)、[端传媒](https://theinitium.com)、[The Markup](https://themarkup.org) |
| 无边框纯留白 | 极简感 | [joshwcomeau.com](https://www.joshwcomeau.com)、[overreacted.io](https://overreacted.io) |
| 色块/色带 | 活泼杂志感 | [The Pudding](https://pudding.cool)(贴纸式导航)、[It's Nice That](https://www.itsnicethat.com) |

**封面图缺失的四种解法**(本项目最相关):
1. 纯排版列表:joshwcomeau / overreacted / 99pi 三个活体证明「标题字重+一句摘要+小 tag+弱化日期」完全撑得起首页,天然免疫无图。
2. **模板色卡自动生成**:Acquired「每集一色、版式不变」——最可程序化(按集/播客名 hash 出色相)。
3. 统一插画/贴纸语言替代封面(pudding.cool)——需持续产图,成本高。
4. readsomethingwonderful.com 疑似米黄纸底纯文字卡【推断·未证实,页面 JS 渲染未取证,采用前人工点开核实】。

**中文排版两标杆**(真抓):[少数派](https://sspai.com)(字重差建层级+行距宽松+圆角图卡)、[端传媒](https://theinitium.com)(标题重正文轻两级字重+多栏留白=中文编辑部感)。共同点:**都不靠花哨字体,靠字重对比+行距+留白**。

**暗色模式**:个人内容站标杆 [joshwcomeau.com](https://www.joshwcomeau.com)(显式开关;暗底为深蓝紫灰而非纯黑属【推断·未证实】,落地时人工核色值);系统性「2025-26 深灰 vs 纯黑」专文未找到可溯源来源,不给结论。

**取证缺口(诚实交代)**:land-book / godly(已迁移 recent.design)当日 403,两家选品缺席,要看请用户自己浏览器补看;Dribbble/Behance 概念稿(如 [podcast website tag](https://dribbble.com/tags/podcast%20website))单页 JS 拦截未渲染,且**概念稿≠上线产品**,本文不引为论据;Beamly《[30+ podcast 站盘点](https://beamly.com)》所列深色播客站三例属转引未逐站点验。

---

## 三、跨来源关键洞察(收敛依据)

1. **无封面是定盘星**:所有播客 App 都拿封面当最大元素,本项目学不了;活体证明可行的替代 = 纯排版卡片(99pi/joshwcomeau)或程序化色卡(Acquired)。
2. **金句是最该做出差异的地方**:业务最像的 Podcast Notes 金句只加粗;Snipd 用金句计数当热度徽章、逐字引文+时间点链接做成卡;Quartz 上自定义 callout 分色系统有两个活站可抄思路。本项目金句有 `^块ID`+逐字铁律,是核心资产,视觉上值得单独设计一个「金句块」构件。
3. **衬线做阅读、无衬线做界面**是文字站主流(Every/Podcast Notes);纯无衬线靠字重+全大写补层级(Stratechery);中文场景下「衬线正文」= 思源宋体级子集化工程,是气质与成本的主要权衡点。
4. **底色几乎没人用纯白死黑**:米白 `#faf8f8` / 深灰 `#161618`(Quartz 默认已如此)、Kanagawa `#1F1F28`、cream 纸感(The Browser)。暗色的正解是「独立设计的第二套色板」,不是反色。
5. **中文层级=字重+行距+留白**,少数派与端传媒两个标杆都这么干;圆角、阴影、点缀色只是气质开关,不承担层级职责。

---

## 四、A/B/C 三个视觉方向(给用户挑)

> 三个方向交互结构完全相同(Bases 三视图+8 大类不动),差别只在气质。每个都服「无封面/中文/双模式/CSS-only 定制」四条硬约束。

### 方向 A · 杂志编辑风(推荐)

**一句话**:把站做成一份冷静的中文刊物——白/米白底、直角细线、大字重中文标题、留白分隔,每集卡片配一条按播客源固定的**窄色带**(Acquired 思路的轻量版)当唯一颜色记号;金句做成带侧色条的引文块,是版面上唯一「跳」的构件。

- **气质近似**:[99% Invisible](https://99percentinvisible.org) 的文字流骨架 + [端传媒](https://theinitium.com) 的中文字重与留白 + [Acquired](https://www.acquired.fm/) 的每源一色(降饱和使用)。
- **字体思路**:标题正文都用无衬线(系统栈或思源黑体),层级全靠字重差——不引入衬线 web font,零字体体积负担。
- **为什么推荐**:①完全免疫无封面问题(纯排版卡片有三个活体证明);②中文排版标杆(端传媒/少数派)现成可抄,不用试验;③实现最轻——主要是 7 变量换色+卡片 CSS+一个金句块样式,没有字体工程;④「刊物感」与「播客精华文摘」的产品定位最贴。
- **暗色**:灰阶体系天然好做,深灰底+色带降饱和即可。
- **风险**:最「安全」也最不「惊艳」;好坏全押在间距和字重的手艺上,细节糙了就是「没设计」。

### 方向 B · 深色知识工具风

**一句话**:把站做成 Snipd 那样的「学习工具」——**深色为默认态**(深灰非纯黑,参考 Kanagawa 路线),一个高饱和点缀色只做交互与高亮,卡片上放「金句数」徽章当热度信号,金句块用点缀色高亮,整体是「知识提炼器」而非「杂志」。

- **气质近似**:[Snipd share 页](https://share.snipd.com/top-podcasts) + Spotify 深底逻辑([设计文](https://medium.com/spotify-design/designing-a-new-foundation-spotify-for-desktop-58305f16ce72),2021 旧资料) + [ssp.sh/brain](https://www.ssp.sh/brain/data-engineering/) 的 Kanagawa 暗色板(Quartz 活体)。
- **字体思路**:无衬线正文;可选等宽字体做元数据(日期/时长/时间戳),强化工具感——ssp.sh 已证明等宽标题在 Quartz 可行。
- **适合如果**:你觉得这个站的身份更像「我的 AI 播客提炼器」——工具感、效率感、程序员气质;金句计数徽章(「本集 6 句」)顺手就能当卡片上的热度信号。
- **暗色**:默认即深色,浅色反而是第二套(工作量与 A 对称,只是主次颠倒)。
- **风险**:①深底长文阅读舒适度弱于浅底(本站核心场景是读中文长文);②深底流派靠彩色封面当颜色主角,本项目无封面,深底容易显「黑板报」——需要色卡/徽章系统补颜色,CSS 量比 A 大;③气质偏冷,与「精华/人话」的内容调性有张力。

### 方向 C · 温暖阅读风

**一句话**:把站做成一本温暖的书——米黄/cream 纸感底、**衬线中文正文**(思源宋体子集化)、更大字号更宽行距、金句做成暖色暗纹的「摘抄卡」,整体气质是「值得慢慢读的精华本」,向 The Pond 的文学感看齐但只取轻量部分。

- **气质近似**:[The Pond(turntrout.com)](https://turntrout.com/design)(Quartz 衬线天花板活体) + [The Browser](https://thebrowser.com) 的 cream 纸感 + 小宇宙的「有温度」明度层级([站酷分析](https://www.zcool.com.cn/article/ZMTIzNDcwMA==.html),2021 旧资料)。
- **字体思路**:标题无衬线粗体+正文中文衬线(思源宋体/霞鹜文楷类),需做字体子集化(turntrout 已证明 Quartz 上可行,省 76% 体积;但那是英文站,**中文衬线子集化体积仍会显著大于英文,是本方向最大的工程账**)。
- **适合如果**:你把这个站当「自己的精读文库」,愿意为阅读体验付字体工程成本;金句「摘抄卡」气质和衬线是天作之合。
- **暗色**:纸感的暗色版要专门调(暖深灰+降饱和暖色),不能直接反色,设计量三方向中最大。
- **风险**:①中文衬线 web font 体积/加载是真实成本(需子集化管线,或退而求其次用系统宋体——但系统宋体在 Windows 上观感差,双端一致性受损);②衬线在卡片墙/表格/看板这类「数据视图」里容易显旧,可能要「视图无衬线+文章页衬线」双轨,复杂度上升。

### 三方向速览

| | A 杂志编辑风(推荐) | B 深色知识工具风 | C 温暖阅读风 |
|---|---|---|---|
| 默认底色 | 白/米白 | 深灰(非纯黑) | 米黄纸感 |
| 字体 | 全无衬线,字重建层级 | 无衬线+等宽元数据 | 标题无衬线+正文中文衬线 |
| 颜色策略 | 每播客源一条窄色带 | 单点缀色+金句徽章 | 暖色低饱和+摘抄卡 |
| 金句构件 | 侧色条引文块 | 点缀色高亮+计数徽章 | 暖色摘抄卡 |
| 实现重量 | 最轻(换肤+卡片 CSS) | 中(色卡/徽章系统) | 最重(中文字体子集化管线) |
| 主要风险 | 安全但不惊艳 | 深底长文阅读性/无封面显空 | 字体体积/数据视图显旧 |

---

## 五、下一步

1. 用户三选一拍板方向(也可以说「方向对但要混搭某点」,如 A 骨架+C 的金句摘抄卡)。→ **已拍板,见第六节**
2. 拍板后出落地方案:具体色值(亮暗两套)/字体栈/卡片 CSS 规格,先做视觉样张给用户过目,再动 patch。
3. 本轮取证缺口(land-book/godly 403、深色播客站三例未点验)若影响拍板,可指定补查;不影响则记录在案即可。

---

## 六、🔒 拍板记录(2026-07-25)

**用户原话**:「A,可以。我喜欢少数派,尤其是简约的风格和字体。」

→ 锁定:**方向 A 杂志编辑风,基调向少数派的「简约」靠**。据此对 A 做一处明确调整:A 原稿写的「直角细线」改为**少数派式小圆角卡**(用户点名喜欢 sspai,而 sspai 是圆角派)——刊物骨架不变,卡片质感取少数派。

### 少数派字体/质感的一手取证(2026-07-25 直抓 sspai CSS 文件,补路 3 结论)

- **中文正文 = 系统黑体栈**(CSS 原文):`-apple-system, BlinkMacSystemFont, PingFang SC, Hiragino Sans GB, Microsoft YaHei, 微软雅黑, …, sans-serif`——用户在 Mac 上看到并喜欢的「少数派字体」,本质就是**苹方 PingFang SC + 字重层级**,不是什么特殊 web font。**对本站的意义:零字体体积成本就能拿到同款观感**(Mac/iOS 苹方、Windows 微软雅黑)。
- **拉丁/数字用 Outfit**(几何无衬线 web font,CSS 中 Outfit-Medium/Regular)——日期、时长、数字这类元素单独给一个简约拉丁字体,是它「精致感」的小秘密;这类拉丁字体体积小(几十 KB 级),本站可选配。
- **卡片圆角 8–12px**(CSS 中 `--radius-ArticleCard`、12px/8px/6px 高频),配极浅阴影。
- **灰阶带暖调**(文字色 `#232222`/`#655e5e`/`#cac3c3`,不是冷灰),品牌红 `#fd281a` 只做点缀。

### 给实现会话的落地基调(具体色值/样张归下一环节,此处只定调)

| 项 | 定调 |
|---|---|
| 字体 | 中文系统黑体栈(苹方/微软雅黑),**不引入中文 web font**;标题 600–700 / 正文 400 / 元数据灰字,层级全靠字重;可选一个小体积拉丁字体(Outfit/Inter 类)给日期时长数字 |
| 底色 | 亮:白/米白(Quartz 默认 `#faf8f8` 方向);暗:深灰非纯黑,独立设计第二套色板 |
| 文字灰阶 | 参考少数派暖灰(`#232222` 级正文、中灰元数据),不用冷灰 |
| 卡片 | 小圆角 8–10px + 极浅阴影或细线,留白分隔为主;每播客源一条降饱和窄色带当唯一颜色记号(Acquired 思路轻量版) |
| 金句构件 | 侧色条引文块,是版面上唯一「跳」的构件 |
| 主色/点缀色 | **留到样张阶段给用户选**(2–3 个候选并排),不在本文档拍死 |

**下一步**:实现会话按此基调出**亮暗两套视觉样张**给用户过目,用户认可后才动 `patch-site.mjs` / 自定义 CSS;本调研 session 到此收工,不碰代码。

---

## 七、🔒 最终视觉规格(2026-07-25 用户看样张后拍板)

**用户拍板原话**:「A,可以,我喜欢少数派」→「按照这个普惠体来实现,红色主题」→「浅色深色都需要,默认浅色」。

样张链接(私有 artifact,用户处可交互):方向 A 少数派风,填 8 集真实内容,含标题字体四选 + 主色三选 + 深浅切换。以下为拍定项,实现会话直接照做,**不再问用户、不改口径**(要改走共识修改流程)。

### 🔒 拍定项

| 项 | 结论 |
|---|---|
| **方向** | A · 杂志编辑风 · 少数派基调(小圆角卡 + 极浅阴影,非直角) |
| **标题字体** | **阿里巴巴普惠体 Medium(AlibabaPuHuiTi)** —— 与用户新闻站 news.hearagain.space 同款,品牌一致 |
| **主色** | **暖红**(样张 `crimson` 候选):亮色 `#E0392B` / 暗色 `#FF6455` |
| **主题** | 亮暗双模式都要;**默认浅色**(未指定时落浅色,不跟随系统默认深) |
| **正文/简介字体** | 系统黑体栈(苹方),不换 web font —— 只有标题用普惠体 |

### 字体加载策略(关键,别做错)

- **完整普惠体 5.2MB 不可直接上**(用户新闻站现状是全量,顺带记了瘦身待办,见下)。落地用 **GB2312 常用字子集(6763 字)→ 约 1.2MB woff2**;实测数据:完整 5.2MB / GB2312 子集 1.2MB(降 78%)/ 本页字 72KB。子集用 `pyftsubset --text-file=<GB2312字表> --flavor=woff2 --no-hinting`(venv 装 fonttools+brotli)。
- **加载方式**:标题先用苹方兜底、普惠体 `font-display: swap` 异步换上,不阻塞阅读(会有几百毫秒轻微字体跳变,可接受)。
- **生僻字**:GB2312 外的生僻字自动回退系统黑体,标题场景几乎遇不到。
- 字体文件放站内自托管(如 `/fonts/`),**不引外部 CDN**(与新闻站一致,也符合 Quartz 静态站 CSP)。

### 色值规格(样张已验证的两套 token,直接搬)

**中性色(暖调,取自少数派实抓,非冷灰)**

| token | 浅色(默认) | 深色 |
|---|---|---|
| 底 ground | `#FAF8F6` | `#1A1917` |
| 卡片面 surface | `#FFFFFF` | `#232120` |
| 正文 ink | `#232222` | `#E9E4DE` |
| 次级 ink-soft | `#55504C` | `#B7B0A8` |
| 元数据 meta | `#8C857F` | `#8F877E` |
| 细线 hairline | `#ECE7E2` | `#322E2A` |

**主色(暖红)**:亮 `--accent:#E0392B` / `--accent-ink:#B32C21` / `--accent-wash:rgba(224,57,43,.08)`;暗 `--accent:#FF6455` / `--accent-ink:#FF8478` / `--accent-wash:rgba(255,100,85,.12)`。用于:视图页签选中下划线、大类筛选选中态、卡片标题 hover、金句块侧色条。

**8 大类色带**(卡片左侧 4px 色带,绑大类非播客源 —— 现单源 Lenny's,绑大类才有区分度;亮/暗各一版):

| 大类 | 亮 | 暗 |
|---|---|---|
| 智能体 | `#3E938A` | `#52B3A8` |
| AI 安全 | `#C1584B` | `#E0776A` |
| AI 编程 | `#5566B8` | `#7B8BE0` |
| 产品方法 | `#8A66A8` | `#AD86CE` |
| 增长与销售 | `#BF922F` | `#DCB04E` |
| 组织与领导力 | `#57789A` | `#7699BE` |
| 创业与行业 | `#C0743F` | `#E0925A` |
| 职业与个人成长 | `#6B9A54` | `#8CBD72` |

### 主题切换实现要点(Quartz 契合)

- Token 化:所有颜色定义为 CSS 变量;`:root` 为浅色默认;`:root[data-theme="dark"]` 覆盖(Quartz 原生用 `saved-theme` 属性切换,对齐即可)。
- **默认浅色**:不靠 `prefers-color-scheme` 定默认;首次访问落浅色,用户手动切深色后记住(Quartz 主题切换器原生行为)。
- 卡片小圆角 8–10px、极浅阴影;`font-variant-numeric: tabular-nums` 用于日期/时长对齐;已读压暗(localStorage `pd-read`)沿用。

### 落地位置(承接第四节改版落地,本轮只加视觉层)

- 自定义主题变量 + 卡片/金句/色带 CSS:收进 Quartz 自定义样式组件(不散改 fork,遵项目铁律);随 `patch-site.mjs` / `bootstrap-site.sh` 每次重建打入。
- 普惠体子集 woff2 + `@font-face`:自托管进 `site` 静态资源,构建期产出子集文件。

### ⚠️ 关联待办(不在本调研范围,单独记)

- **新闻站 news.hearagain.space 字体瘦身**:现全量 5.2MB 普惠体让每个访客白下 4MB,子集到 GB2312 可降到 1.2MB、首屏更快。**另一个仓库,需用户单独开任务**,不在本项目动。

**本调研 session 到此收工**:只写了 `需求共创/视觉调研-播客UI.md` 一个文件,未碰代码、未碰其他文档。实现交给部署/实现会话。
