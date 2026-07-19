# WIP

- **上次到**:**C7a ✅ 上线闭合(2026-07-19 用户亲手验收「1,2,3 都 OK」)—— `voice.solomind.cc` 公开可访问、集页音频能播、播客 App 能订。C1→C7a 全线打通,项目第一次真上线。下一步 C7b(无人值守)/ C7c(运维硬化),或先开需求共创理新方向**。
  · **两锚校验无漂移**:git `a9f8257 [C5 ✅]` ↔ story-map(C1–C6 ✅/C7 ⏳)↔ wip 一致。GLM scorecard 救命 28/漏报 0,可信。
  · **拆片(drift #15)**:**C7a 能看能听**(Pages 公开部署+R2 托音频→feed 真可订阅,闭合 D33)/ **C7b 无人值守**(Workers 定时轮询→全自动发布,做前再确认风险)/ **C7c 运维硬化**(GitHub+CI/失败告警/额度告警/R2 备份/回滚演练/钉版本 D21/前端库自托管 D36)。
  · **4 决策(drift #15)**:部署=**交互式**(用户本机 `wrangler login`、Claude 指挥不碰凭证);无人值守=**全自动不等人**(C7b 兑现,与「亲手验收」纪律的张力已记、做 C7b 再确认);域名=`listen.hearagain.space`(暂,后换)。
  · **客观前置核查**:无 git 远端/无 wrangler(D2)/无 CI/无 Workers 源码 → C7 从零搭全套云。
  · **🟢 C7a 去 Access · 站点完全公开(drift #17 / ADR 0010)**:用户指出「Access 登录门=过度设计」——**「小圈子私有」是受众定位、不是访问加密**;明文选**完全公开**(可被搜索引擎收录)。**假矛盾消失**(公开后 feed+音频天然可达、播客 App 直接订、**D33 直接闭合**);**版权敞口扩大到公开二次分发,用户明文接受自担**。我复盘认账:曾把受众定位错升级成 Access 加密门、还上纲上线。
  · **已落盘**:drift #15/#17、需求共识 L31⑥/L194 留痕改、ADR 0010、上线前checklist 第1项作废、story-map、user-stories C7a 简化重写(4 Scenario/DoD 6 条,去 Access)。
  · **P1 ✅**:wrangler 4.112.0 装(devDep,D2 还)+ 用户 login。**R2 未启用(10042)→ drift #18 音频随 Pages 静态、不用 R2**(存档层 R2 留 C7c)。
  · **换域名 + 上线(drift #19)**:用户买 `solomind.cc`(GoDaddy 注册→改 NS 托管 CF),定子域 **voice.solomind.cc**;SITE_URL+baseUrl 换新域名;**新建 voice-solomind 项目、部署、删旧 listen-hearagain**;加部署权限(`.claude/settings.local.json` allow wrangler,gitignore)后 Claude 直接 deploy;绑域名卡「SSL undefined」→ 删重加解决。
  · **C7a ✅ 闭合**:用户 2026-07-19 真设备验收「1,2,3 都 OK」(首页 2 卡 / 集页中文精华+🎧播放 / 播客 App 订阅真播)。DoD 1-5 兑现;**DoD #6 glm 审计因 C7a 代码改动极小(SITE_URL 值+部署操作)待与用户确认豁免**。**遗留**:site/quartz.config baseUrl 改动未入库(site gitignore,可复现归 C7c/D21)。
  · **下一步**:**C7b 决策已定案(见下条),用户要开新 session 实现**;C7c(运维硬化)随后;新方向(第三方转写文本 + YouTube + 演讲,撞共识+需调研)另开需求共创。

- **🚧 C7b 进行中(2026-07-19 本 session)**:
  · **决策收口**:drift #22 = 单个**公开仓**(代码+数据同仓,用户「公开不要紧」)+ cron **一天一次**;通知默认 GitHub 原生邮件(用户没提别的)。Gherkin 已锁(user-stories C7b 段:6 Scenario/DoD 8),二次确认过。
  · **Scenario 1 ✅**:公开仓 [roysunzy88866/podcast-digest](https://github.com/roysunzy88866/podcast-digest) 建好、main 已推(gh 加 workflow scope;git 走 clash **7877** 端口——非 7890,已记)、`ZHIPU_API_KEY` 进 Secret(用户自设,Claude 没碰明文)。历史扫过无密钥泄露。
  · **P1 前置核验 ✅ 全绿**(run 29675458166,证据 `docs/c7b-p1-探路证据.md`):**P1a** 美国 runner 调 open.bigmodel.cn 往返 **2.04s**(drift #21「墙外绕 GFW」坐实)/ **P1b1** edge-tts+ffmpeg 在 Linux 合成两集音频过 gate-audio / **P1b2** Quartz 钉 commit clone+build+gate-all 全过。**GitHub Actions 路线真机验通,不再是纸面。**
  · **Scenario 2 ✅(编排器)**:`scripts/run-pipeline.mjs` —— 纯逻辑(parseFeed/isInterview/deriveId/selectNew)导出;main 串现有单步脚本 fail-fast(取源→翻→浓→判→gate→抽实体→出稿→tts,再全库 build-entities/pages/list/feed → gate-all 全过才成)。**去重「只向前看」(drift #22)**:`data/pipeline-state.json` cutoff 基线,`--seed` 设站不碰 backlog、无基线拒跑(退 2)。**过滤 = 有音频 enclosure + 非 ainews**(真 feed 20 条→2 访谈;两已知真访谈都带 enclosure、挡掉天天发的 ainews;没音频的 essay 不是播客不进——边界情况留 E2E 校)。**10 单测**(tests/run-pipeline.test.ts,含变异敏感)+ 真 feed 验 --seed/--dry-run 通过;基线 cutoff=2026-07-16(用户明选向前看,当前 backlog 含未处理的 lab-of-future 都不碰)。301 全套绿。
  · **Scenario 3 workflow 已写(待验)**:`.github/workflows/pipeline.yml` —— cron 每天 UTC 02:00(北京 10:00)+ 手动 → 装 ffmpeg/edge-tts/node deps → 跑 run-pipeline → **判 has_new(pipeline-state/data 变没变)** → 真有新集才:bootstrap Quartz(`-b voice.solomind.cc`)+ 灌 samples + build + **音频 cp 进 public/audio(C7a 当年手动,此处脚本化)** + `wrangler pages deploy public --project-name voice-solomind` → 新集 commit 回仓 → job summary。**安全**:无新集/闸门不过不 deploy(保上一版);失败靠 GitHub 原生邮件。CI 检出不带 .git 钩子 → bot commit 不被格式门拦、不触发本 workflow(无死循环)。
  · **Scenario 3 骨架 ✅ 验通**(run 29676092803,56s 绿):CI 装环境(ffmpeg+edge-tts+deps)✓、编排器跑✓(RSS20→2访谈、cutoff07-16、0新集干净退出)、**has_new=false → 部署+commit回仓两步正确跳过**(不碰线上、没用 CF token)。管道通。CF account id=`ac6b3134d98758210ac27d37bd7d5a2d`(非机密)已写死进 workflow → 用户只需加 1 个 Secret。
  · **卡点/下一步 = deploy 实路 + Scenario 4 E2E**:①**需用户加 1 个 Secret**:`CLOUDFLARE_API_TOKEN`(CF dashboard 建 Pages:Edit token;account id 已写死不用配);`ASSEMBLYAI_API_KEY` 可缓(无官方稿集才用)。②**deploy 实路未验**(`if: has_new` 那支):要真有新集才走,得 CF token + 真新集/强跑。③**Scenario 4 真 E2E**:编排器 GLM 链+部署尚未真跑一集端到端 —— 等真新集,或临时降 cutoff 强制在旧集上跑一次(费 GLM + 真部署到公网,做前跟用户确认)。④**通知**:失败=GitHub 原生邮件,成功=job summary+commit 可见;富成功通知留 C7c 或用户点名。⑤小债:deploy 成功但 commit-back 失败会下次重跑重花;wrangler `--branch main` 是否命中 voice-solomind 生产分支待验。

- **🚧 C7b 开工决策定案(2026-07-19,原交接记录)**:
  · **全自动发布(ADR 0011,用户知情二次确认、风险自担)**:坏稿可能直达公网,靠机器闸门+定点重写兜底;Claude 兜底=发布后通知+一键回滚。**这是「亲手验收」纪律的明文例外,仅限 C7b。**
  · **执行环境 = GitHub Actions cron(drift #21 / ADR 0012,改 🔒 L206)**:CF Workers 跑不了 ffmpeg/quartz/glm-ask/fs(P1 核验实测);GitHub Actions Linux runner 复用现有 26 脚本**几乎不重写**、cron 定时、**免费**(公开仓库无限 or 私有 2000min/月)、机器在墙外绕开 GFW。
  · **内容托管仍 CF Pages(voice.solomind.cc)**:已诚实交底**国内访问不保证稳**(CF 免费无境内节点+GFW),版权灰色不能备案无更好解,用户知情继续。
  · **新 session 开局(照 SOP:两锚校验 → 补 C7b Gherkin → 二次确认 → 红绿循环)。C7b 要搭**:①**建 GitHub 远端仓库**(公开 vs 私有 = Actions 免费额度 & 代码是否公开,**待用户拍**)+ push(顺带还 C7c 的 GitHub 远端)②`.github/workflows/pipeline.yml`:cron → checkout → 装 ffmpeg+node deps → 跑流水线(取 RSS → **去重判有没有新集** → 官方稿/ASR → translate → condense → judge → gate → tts → build-feed → build-list → quartz build)→ **闸门全过**才 `wrangler pages deploy` → 通知 ③**GLM/ASR key 走 GitHub Secrets**(用户自持,Claude 不碰明文)④失败/坏稿告警 + 一键回滚(CF Pages 回滚上版)⑤**P1 前置核验(先验后写,踩过 Bases 坑)**:runner 海外**真调智谱 GLM 一次**(验可达+速度)+ 真装 ffmpeg **端到端跑一集**不崩。
  · **待用户拍**:GitHub 仓库公开还是私有;cron 频率(几小时 / 一天一次)。

- **(C5 及更早)上次到**:**C4 + C6 已用户明文验收并提交(`346d0a2` / `5d178ca`);本 session 过独立交付物审计 → 修 F1 + 校正账,准备开 C5**(2026-07-18)。
  · **独立交付物审计(两路子 agent:C4 音频 / C6 关联,各造攻击打闸门)**:两片核心真实、扛对抗、**无阻断**;共性毛病=**机器诚实但文字/账面略夸**(本项目最常犯元错误,这次又冒头)。处置:
    - **C4 F1 → 已修(`53ed49a`,[standard-change])**:音频闸门 ④「防死enclosure」被三处调用点架空(从集 id 重构路径再 `.filter(existsSync)` 先滤死链再查、feed.xml 从不解析)= gate 洞第 4 次同款。修:新增 `feedEnclosuresFromXml` 真解析 feed;实证 GHOST 攻击被 gate-audio + gate-all 双拦。见 D35。
    - **C4 F2 → 记账 D33(推迟 C7)**:feed enclosure 是仓库相对路径非真网址 → 现在播客 App 收听不了,US-5 那条 `And` 未闭合(C7 换 R2 URL 才通)。
    - **C6 007 → 改账(D32 更正)**:primary 权重整改是**单测实证、非真数据实证**(2 集触发不了它、读者也看不见效果),真语料待 C5。
    - 次要:D34(verify 的「可加载/图谱渲染」是存在性代理,非真请求/真渲染)/ C4 F3(Azure 非自动降级——设计其实合理,仅证据文档措辞略夸,不改码)。
  · **C6 关联导航(US-7/9④/10)· 已验收**:`relatedEpisodes` 集↔集按共享实体(排 host、须 ≥1 集 primary、强弱权重)→ 集页「相关单集」注原因+点跳 → `gate-relations` 死链闸门 → 局部/全局图谱。`verify:c6` 绿。
  · **C4 音频(US-5)· 已验收**:edge-tts 晓晓合成两集(9.6/8.1 min 真 mp3)→ 详情页 `<audio>` → `build-feed` 私有 feed → `gate-audio` 四条 fail-closed(④ 经 F1 修后名副其实)。`verify:c4` 绿。
  · **机器全绿**:279 vitest(F1 +4)、gate-all 五层(三联+事实+实体+关联+音频)、verify:c3/c6/c4、真 build 169 文件不崩。
  · **待结项拍板的债**:音频存储(commit 大二进制 vs clone 后再生,现 gitignore)/ D32(相关单集规模泛噪 + 强弱不可见,C5)/ D33(feed 可订阅性,C7)/ US-10 图谱价值自评。
  · **本机脚本**:build-pages/gate-relations/verify-c6/tts/build-feed/gate-audio/verify-c4 + 项目 `.venv`(edge-tts,gitignore)。

- **C5 ✅ 完成(列表页,US-1/2/3;用户 2026-07-18 明文验收界面「界面我看了,没有问题」+ 授权翻 ✅,前提过独立审计)· 界面 + ASR 进料口 P2 交付,灌 50 集单列批次**:
  · **过独立交付物审计(冷喂子 agent,用户要求)逮到 1 个真 bug 已修**:🔴 **F1 已读压暗完全失效**——`[].slice.call(Set)` 恒 `[]`,点卡擦掉已读历史、永不压暗;**我曾 overclaim「浏览器实测通过」实际只测了读取侧**。修 `[...read]` + **浏览器 round-trip 真复验**(点卡→localStorage=[slug]→返回→压暗 0.55、未读 1.0)+ 单测守卫。记 D40(已还)/ D38(内联脚本零覆盖=F1 根因)/ D39(搜索英文无结果 F4、标签空态不可达 F3)。审计**证实达标**:单测真敏感(5/5 变异)、verify 排序/死链/标签真检查、ASR 代码 fail-closed 真严、D22 证据自洽且循环性主动交代没藏。
  · **界面 ✅(commit `936e1ff`)**:P1 中文搜索通过(实测「智能体」「投机解码」精准)→ `build-list.mjs` 生成 content/index.md(单集卡流 + 标签筛选 + 搜索接入;内联脚本挂 Quartz `nav` 事件 → SPA 换页不失效)→ 浏览器端到端实测(标签筛选全周期 / 已读压暗跨 SPA 存活 / 点标签筛到 1 张)→ verify:c5 + build-list 8 单测 + 287 全套绿。US-3 搜索复用 Quartz 顶栏(首页也可达)。
  · **过 GLM 独立复核 018(C5 + F1 代码)**:5 条全 **noise**(本机真跑核过:package.json JSON 解析正常、xmlUnescape 往返身份一致、`<div>` 在 `<a>` 内 HTML5 合法且浏览器验过渲染/点击、date 恒 ISO);顺手修我引入的 package.json 缩进不一致。
  · **ASR 端到端试灌(Scenario 4,D22)✅ 机器已证**:the-lab(有官方稿,当 ASR 测试靶)→ AssemblyAI 转写(312 段/18726 词/4 说话人,自报家门坐实)→ 全译 0 空译 → 浓缩 8612 字精华(质量在线、GLM 准确认出说话人)→ 判官 29→11、9 金句过三联 → 22 实体 0 编造 + 5 tags → edge-tts 配音 → 跨集关联进 KB。**唯一卡点** gate-facts D8 名字归一化(Rafa 简称 vs 全名,记 D37)故未发布;the-lab 有官方稿 → ASR 版 throwaway 已清理。证据 `docs/d22-p2-asr端到端试灌证据.md`。
  · **灌满 50 集 + ASR 选型(AssemblyAI vs Cloudflare 分离,用户 2026-07-18 提出核实 CF)= 单列灌量批次**。C5 相关债:D22(进料口机器已还)/ D24(别名表灌种)/ D30(跨集异名)/ D37(ASR 长全名简称)随灌量面对;D32(规模泛噪)灌量时调;中文搜索规模质量待 50 集验。

- **(更早)C3**:**C3 ✅ 完成(用户 2026-07-18 明文通过验收 + 已提交 `9f7b630`)**。2026-07-18 一口气做完 Scenario 2-5 + 过独立审计整改:
  · **Scenario 2 实体抽取** `extract-entities.mjs`:人物从 meta 派生(不问 GLM)/公司概念 GLM 抽 + 回原文命中判据复用 `checkProperNoun`/evidence 代码检索/tags。真跑两集:集1 31 实体、集2 21 实体,拦下 GLM 编造(supercloud/cold start/multinode—原文 0 次)。**改 prompt 重跑一次**(~1 元)让「智能体」这类共性概念被抽出→**跨集聚合真立起来**。
  · **Scenario 3 集页升级** `render.mjs`:类型化 frontmatter([[双链]])+ 关联区按角色分行 + 正文首现补链(ASCII 词边界/中文子串)+ 金句 `^块ID` + **修 host=null**(集2 不再打印 null)。
  · **Scenario 4 实体页** `build-entities.mjs`:跨集按 id 聚合(自建,ADR 0008)→ 36 个实体页;金句墙 `![[集#^块]]` 嵌入(P1 契约,真 build 出 transclude + 回原集链)。
  · **Scenario 5 实体层闸门** `gate-entities.mjs`:①死链 ②实体页产物一致性(同代码重算逐字比)③how_described 走 D17/D8(抽 `gate-facts.checkProse` 共用,防漂移)。每条造真攻击变异验证。进 gate-all→pre-commit + `verify:c3`。
  · **机器验收**:172 vitest 全绿、gate-all 全绿、真 Quartz build 38 文件不崩、`verify:c3` 全绿。
  · **GLM 独立复核 5 轮**:021(save:isMain 中文路径静默空转,已修)/022 noise/001(real:frontmatter YAML 转义 + 正文双链 ASCII 词边界,已修)/002(real:实体闸门 transcript fail-closed,已修)/003 noise(gate-facts 重构)/004 noise(审计整改复核)。
- **🔴 独立交付物审计(2026-07-18,冷喂子 agent)逮到 1 个致命 + 1 个重要,已修+已强化闸门**:
  · **【致命】金句墙空壳**:实体页金句墙**只渲染「—— 某人 [时间]」、没金句正文**——`render.mjs` 把 `^块ID` 放在署名行,而空 `>` 把金句正文分成了**另一个段落**,Quartz 块嵌入只拉 `^ID` 所在那一段。**且过了全部闸门 + 171 测试**(它们只查块 id 存在、没查嵌入内容)。**修**:金句三行合成一个段落(行尾两空格硬换行)→ 块 id 覆盖整条;P1 风格 fixture 实证 + 真渲染核实正文已回来。**强化 `verify:c3`**:新增「金句墙真含金句正文」检查(grep 渲染 HTML 里的金句中文片段),专防这类空壳复辟。
  · **【重要】关联实体偏集**:`related()` 平票按加载序 → 先加载的 Databricks 独占 top-10,把 Modal 侧 18 个共现实体(含大谈 agent 的 Akshat)全挤掉。**修**:同 count 内按集 round-robin 交错(+回归测试)。真数据核实:智能体关联现为 沙箱/Kubernetes 后 ep2/ep1 严格交错,Akshat 回来了。
  · 审计**证实达标**的:跨集聚合真汇总、how_described 抽查 8 条无编造、0 死链、4 类闸门攻击真拦、2 处变异测试真挂。**次要未修(交用户/设计)**:溯源链接显示英文「Link to original」非「回原集」(对外文案+需 Quartz 组件定制,报用户)/ tag「超级云」vs 拒收实体 supercloud(tags 不过 D17,属 D31 设计)。
- **下一步**:**C4 开工**(音频,US-5)。story-map C4 = 精华 TTS(Azure F0)+ 详情页播放器 + 私有播客 feed。
  · **开工先做**(前置,别跳):**按 Azure 官方定价页复核 F0 现行免费额度**(依 ADR 0002;定价会变,纸面契约先验——踩过 Bases 的坑)+ 环境可行性核验。
  · **C4 前该面对的旧债(在 attic,别忘)**:**D22 官方稿覆盖率**(实测仅 8 期有稿,而 C5 目标灌 50 集——这个数本身悬,ASR 兜底 +VAD 至今没做)/ **D28 D8 单点时间戳真实覆盖率 0%**(prompt 产区间才治本)/ **D29 中文比值被误当时间戳** / **D31 how_described/tags 继承 D17 中文量级词天花板**。
  · **C3 遗留新债**:D30(人物金句墙跨集异名召回,C5 修)。
  · **走 SOP**:开 C4 前先在 `docs/user-stories.md` 补 C4 的 Gherkin → 二次确认 → 才进红绿循环(禁止跳过直接写码)。

- **🔴 三份独立交付物审计 + GLM 017 的结论(必读,别再犯)**:
  · **闸门被打穿过 5 处,已全堵**(中文专名零检查 / 时间戳不在括号开头则 D17+D8 双盲 / 括号整块进免检区 / 宽区间恒过 / digest_md 缺失报绿)。根因一句话:**「闸门把『没东西可查』和『查不了』当成了同一件事,两者都算过」**——本项目已在 gate.mjs、gate-all.mjs 打过两次同款补丁,gate-facts 漏了第三次。**下次写任何闸门,先问这一句。**
  · **我反复犯的元错误:把「窄边界内的全绿」讲成「全过」。** D17/D8 已从 ✅ 改回 🟡。最刺眼的是 **D28:D8 强判据真实覆盖率 = 0%**(真实数据 54/54 全是单点时间戳、区间 0 条;单点换个人名 35% 照样过)——我却拿「时间戳 20/20 + 17/17」当兑现证据。
  · **我又写了记忆里的数**(提交 0c3e6d1 写「全套 59 通过」,真跑 55;文档「38 测试」实际 44)。与当初被抓的「13-15 条」同一个动作。**写任何数字前先真跑一次。**
  · **正文质量审计:整篇重摇是净退步**。集1 一次重摇丢了「Modal 是什么」的定义、推理拐点(GPU:CPU 8:1→1:1)、全集唯一一处观点交锋、Vibhu 整个人(84 段,三处全零),还新增一条闸门抓不到的编造(把相隔 22 分钟的两个例子焊成一句,挂真时间戳)。**【背景】块还用反了**(里面装的是嘉宾原话,读者会当 AI 凑数折价)。详见审计结论,C4 前处理。
  · **prompt 加固会反噬**:我写了「绝不许因为怕被拦就少讲」,GLM 照样删 → **光靠 prompt 劝不住,得机器卡**(定点重写的不变量②就是为此:补丁 <75% 拒收)。

- **✅ 定点重写回路已跑通**(`docs/c3-定点重写回路.md`):整篇重摇实测不收敛(集2 三轮:移花接木→Ghodsi→2024,每轮约 2 元且误伤)。定点重写真修掉集2 那条活的 2024:**3019→3011 字,16 段只动 1 段**,「在 2024 年的 Data AI Summit 之后」→「在 Data AI Summit 期间」(换说法,没删句子)。**C7 无人值守只能靠它。**

- **⚠️ 集 1 文本待你重新验收**:现 3871 字(C2 你验收过的是 3926,中间被我改坏成 2220 又修回)。术语解释比 C2 那版更全(YAML/装饰器/投机解码都有了),但审计指出仍丢了「Modal 是什么」等内容。

- **C3 开工前置 · 状态**:①~~drift-log #1(押不押 Bases)~~ **✅ 已拍板**:自建聚合、不押 Bases(**ADR 0008**,提交 d80994b)——地基已定 ②**D17**(共识 🔒 的「数字/日期/人名/机构名/专名 确定性回原文比对」被静默丢了)→ **C3 主交付之一**,口径经用户授权已定(drift #11)③**D8**(正文内联时间戳未校验)→ **C3 一起还**(同一遍扫正文的确定性代码)④**D19**(导读正文不过闸门/移花接木)→ C3 **部分收窄**(D8 那条能抓「挂错说话人」类),**不宣称闭合**,余下受 D15 制约。
- **C3 四条裁决(2026-07-17 用户 AskUserQuestion 拍板,drift-log #7~#10;#11 是标准授权)**:
  · **#7 实体页不写「AI 简介」→ 改「集里怎么说它」**(踩防失真红线:AI 简介派生自模型世界知识、闸门够不着、GLM 有编造前科)。撞 🔒 页面 3(第 24 轮定稿)→ **已走完共识修改流程**:用户明文 + 改共识 L456/L471(留原文与改因)+ **ADR 0009** + drift #7。
  · **#8 灌第 2 集** = Databricks 集(Matei Zaharia + Reynold Xin,post=203293676,1508 段/68.7 分钟,≈1.5 元)——1 集时聚合退化、证不了真 work。
  · **#9 建页门槛 = 只给真讨论过的建页**(Quartz 里 `[[X]]` 无页=死链 ⇒ 补链与建页是同一个决定)。
  · **#10 概念页双语标题**(`智能体 (Agent)`);人名/公司名用原文。落地=文件名中文 + frontmatter title 双语 + aliases 挂英文。
  · **#11 D17 口径 `[standard-change: 用户授权]`**:硬拦确定数字(ten→10/2022)、模糊量词(数十亿)只提醒、误报走人工放行留痕。
- **C3 第一件事 = 前置核验 P1**(未过则停):金句墙押的 `![[集#^块ID]]` 嵌入是 **Obsidian 语法,Quartz 支持度我没验过**。先真 build 试;渲染不了 → 停 + 报用户 + 记 drift + 走退路(金句墙直接写文本+回链),**不假装它渲染了**。踩过 Bases「纸面原生、实测社区插件」的坑,纸面契约一律先验。
- **C3 顺带发现的产品级风险(已登记,不在本片修)**:近 20 条 RSS 里 10 期真访谈,**逐页实测只有 2 期挂着 aligned 官方稿**(又从集页播放器清单挖出 6 期旧集,共 8 期有稿)。而**没官方稿的集现在根本灌不进来**——ASR 兜底(+VAD 切静音)一直没实现(C2 明确不做)。C4/C5 前必须面对。
- **本机环境更正(以真跑为准)**:C1/C2 记的「须开代理 7890」**已不成立**——2026-07-17 实测代理未开(curl 返 000),**直连 latent.space 反而通(200)**。
- **C2 做了什么(2026-07-17)**:
  1. **取源**:Substack 官方 aligned 转写稿(说话人+逐词时间戳)落 `data/episodes/2026-07-08-latent-space-modal/`(transcript.en.json 953 段=闸门真相锚)+ meta(SPEAKER→真名映射)。
  2. **全译**:`scripts/translate.mjs` 分段并行(20 块×5)调 GLM-5.2,照搬原文错误(Modo/3C 不纠)、术语一致(沙箱/智能体不译代理),`translation.zh.json` 953 段 0 空译。
  3. **浓缩**:`scripts/condense.mjs` 双语稿整读→`digest.json`(TLDR+导读 3926 字+20 条候选金句)。导读式、大白话解释术语、【背景】区分 AI 补充。**数字一律以产物为准,不写记忆里的数**(C1/C2 两轮审计都抓到口径错)。
  4. **机器闸门(D6 闭合)**:`scripts/gate.mjs` 三联(逐字命中转写稿+时间戳区间+说话人)+TDD(11 测试)。首跑抓到 2 条真问题(#1 时间戳早 2s、#2 GLM 多加"it's")。`scripts/repair-quotes.mjs` 规整→**10/10 过闸门**。进 pre-commit(gate-all)+ verify:c2 强制。
  5. **出稿**:`scripts/render.mjs`→`samples/2026-07-08-latent-space-modal.md`(替换 C1 占位,drift #2 兑现)→ build+`npm run verify:c2` 全绿。
- **用户验收反馈 → 两条标准改动(drift #5/#6)+ 金句两阶段改造**:
  · **标注节制**(拿准的直接改对不标):内联「原文误作」8 处 → **0 处**;verify 里「页面须含原文误作」锚点删掉,换成通用负向检查(正文不得传播已知转写错形式,清单读 meta)。
  · **金句标准收紧 + 忠于原文**:改两阶段 = 浓缩撒网 20 条候选(prompt 含 few-shot 正反例)→ `judge-quotes.mjs` 判官逐条二元判定 ×3 票**一票否决**(依需求共识「判官只投否决票」)→ 20 条筛到 **5 条**(13-15 条废话每次 0/3 全票毙)。MIN_KEEP 6→4(硬要 6 条=逼凑数)。
- **GLM 对抗审计 4 轮**:008(save:说话人 0.8 阈值放行 80/20 拼接 → 加「非主说话人连续≥2词即挂」+2 测试;收紧 MAX_TRIM 3→1)/ 009(noise:硬化无新洞,跑证据证伪其 2 条)/ 011(real:pool 单条抛错杀全流程、先写后校验致非幂等**实测真咬过我**、spawn 无超时 → 全修;并顺藤发现 gate 对 **0 条金句 allPass=true** 的假绿洞)/ **012(save:我刚修 gate.mjs 的「空即通过」,却在 gate-all.mjs 留了同构洞——删掉 digest.json 就能冒充放行**。已重写:已发布集页必须有对应 digest,实测藏 digest→拦、空金句→拦、损坏 JSON→记账不炸穿)。
- **诚实交底(给你/审计)**:
  · 机器闸门里**逐字命中(①)是唯一反编造/反拼接硬线**,时间戳/说话人在①通过后从转写稿真相派生(比 GLM 猜的准),②③退化为不变量安全网+回归防护(D10)。**闸门保的是「命中转写稿」不是「命中原话」**——官方稿本身有错(Modo 等),靠英文原稿存档兜,**不宣称零失真**。
  · **闸门只管「真不真」,管不了「精不精彩」**——金句质量靠 LLM 判官,而判官有两个已知软肋:**few-shot 循环性**(正例取自本集,留下的 5 条里 4 条正是这些正例 → 本集上证不了它有独立判断力,GLM 复核时回避了此问题;真检验在 C5 灌 50 集,D11)、**产出随配置抖动**(6/4/5 条,核心 5 条恒稳、边缘句闪烁,D12)。
## 🔴 C2 交付物独立审计(2026-07-17,6 视角 × 冷喂 + 逐条对抗核验;26 条 finding)

**审计逮到真问题,C2 首版判不过关**。最致命一条我已亲手复现:

- **闸门守错了东西**:守的是中间产物 `digest.json`,而真正发布给读者的是 `samples/<id>.md`→页面,两者**无任何约束**。实测:把一条转写稿里根本不存在的编造金句写进集页 → `gate-all` ✅ + `verify:c2` ✅ + 编造金句直达读者页面 + 页面仍印着「过三联校验」。
- **配套一刀**:因 repair 会丢掉不逐字的金句,「闸门跑全绿」对流水线自己的产物是**构造上必然**、信息量≈0;而它真正该管的地方(手改/陈旧渲染)恰恰没覆盖 ⇒ **合起来 = 防失真闸门基本是摆设**。
- **「防假绿」单测自己就是假绿**:它没调用被测代码,把逻辑在测试里重抄了一遍 → 回退 gate.mjs 的修复,12 个测试照样全绿。

### 返工已修 + 已自证(证据而非自述)
1. **闸门改守发布产物**:`gate-all` 用 `renderEpisode()` 从过闸门的 digest **重渲染并与 samples/<id>.md 逐字比对**,对不上即拦。**重放同一攻击 → 已拦住**。
2. **真测试**:改为真调 `gateEpisode()`(临时目录喂 fixture)。**变异验证**:故意回退 gate.mjs 修复 → 测试挂;还原 → 绿。14 测试。
3. **补第 2 级 GLM 忠实度判官**(共识 🔒 有、C2 首版漏做):`judge-faithful.mjs`。**首建错规格**(中文 vs 英文)→ 与 drift #3 打架(中文纠正转写错被判「不忠实」);按 🔒 改为**同语言判定**(精华中文 vs 中文全译)后冲突消失。但**实测免费档判官否决不可复现≈随机**(两次跑毙的是不同 3 条)→ 🔒 用户拍板**降为提醒层、不自动删**(md5 已证不动 digest)。
4. **condense 先校验后写 + 毒缓存**:审计给的复现三重后果全堵(好稿不再被冲掉 / 结构不合格真重试 4 次 / 坏输出只进 `.bad.txt` 不参与缓存命中)。
5. **取源补脚本** `fetch-source.mjs`(原为人肉 curl 却把 DoD #1 标 ✅):真跑重取,953 段与仓库版**逐段文本+时间戳完全一致**;speaker_map 机器定不了 → 明说要人填,不硬编。
6. **verify:c2 集 id 参数化**(原 DIR 收参数而 id 写死 → 第二集会校验第一集的页并报 ✅):实测假第二集现在正确报「页产物不存在」。
7. 页面不再对读者说「云端存档」假话(据实说存仓库、上云 C7);渲染器去掉硬编码「(Modal CTO)」/tags 兜底;判官注释不再拿共识给同模型自判背书;口径以产物为准(3718→3926、「13-15」→以 judge-report 为准)。

### 审计抓出、**明确不修只记账**的(不静默)
D15(中文侧无硬拦,用户拍板)/ D16(断章取义抓不住)/ D17(共识 🔒 的专名回原文比对静默丢了→C3 补)/ D18(判官同模型自判,待拍板)/ D19(导读正文不过闸门,有一处移花接木实例)/ D20(pre-commit 读工作区 vs 暂存区)/ D21(bootstrap 插件浮动)。

- **✅ 验收**:用户 2026-07-17 明文通过(「通过,翻 ✅」)。里程碑规矩已守:用户亲手读页,不认机器绿。
- **本机开销**:GLM-5.2 全译+浓缩真跑了(你智谱额度,约几毛~1 元量级)。带缓存,重跑不重复计费。

## 本地起站验收(你来点)
```
# 先把最新 samples(含实体页)灌进 site,再起站:
cd site && eval "$(fnm env)" && fnm use 22.16.0 \
  && rm -f content/*.md && rm -rf content/entities \
  && cp ../samples/*.md content/ && mkdir -p content/entities && cp ../samples/entities/*.md content/entities/ \
  && node ../scripts/build-list.mjs \
  && node ./quartz/bootstrap-cli.mjs build --serve
# 首页列表页(单集卡流+标签筛选+搜索,US-1/2/3):http://localhost:8080/
# 集页(看关联区/正文双链/金句):http://localhost:8080/2026-07-08-latent-space-modal
#                                http://localhost:8080/2026-06-24-latent-space-databricks
# 跨集实体页(#8 聚合,重点看):  http://localhost:8080/entities/智能体
#                                http://localhost:8080/entities/沙箱
```
