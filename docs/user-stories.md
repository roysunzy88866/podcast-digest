# User Stories · 切片细化区

> 11 条 US 与 Gherkin 的**真相源在 `需求共创/需求共识.md`**,本文件不重抄。
> 用法:每片开工时,把该片涉及的 Gherkin 在这里做**实现级细化**(补 [系统] 步骤、边界值、测试锚点),经用户二次确认后才进红绿循环;测试代码以 story ID(US-x)标注,连回这里。

---

## C1 · 发布骨架:Quartz v5 真 build(环境证据层)+ 灌 1 集样片本地起站

> 主要故事:**US-4(骨架部分)**。真相源 `需求共识.md` US-4。
> 技术地基已核实:`需求共创/核实-Quartz现状-20260717.md`(2026-07-17 对抗核实,high 置信)。
> **本片定位=环境证据层**:把「Quartz v5 能 build / Bases 原生 / Node 兼容」这些纸面假设,换成本机真跑证据。

### 本片做什么 / 不做什么(防范围蔓延)
- ✅ **做**:Quartz v5 在本机真 build + serve 起站(环境证据);灌 1 集样片,本地能打开这一集详情页读到导读式版式。**⚠️ 样片内容=诚实标注的版式占位,不是第 1 期完整精华稿**(元数据取自第 1 期真实素材;真实精华由 C2 流水线产出或用户提供后替换);金句区含 1 条明标为「拼接失真反例」的占位金句(见 samples/,故意不冒充合格金句)。**范围收缩(占位 vs 真实精华)见 drift-log #2。**
- ❌ **不做(留后续切片)**:完整流水线 RSS→转写→翻译→浓缩→闸门(**C2**);`[[双链]]`可点跳、frontmatter 类型化关系聚合、金句 `^块ID`、别名表补链、实体页、Bases 真渲染(**C3**);音频播放器 / 私有 feed(**C4**);列表页 / 搜索(**C5**)。
- ⚠️ **US-4 完整验收 vs C1**:US-4 里「双链可点跳实体页」「金句带 `^块ID`」推到 C3;「AI 补充背景与原话视觉区分」C1 先用 Quartz 原生 callout/引用块做**最小体现**,精细视觉留后。

### 前置核验(未过则停,不闷头往下)
- **P1 git→github 连通**:`git ls-remote https://github.com/jackyzha0/quartz.git v5` 能返回 ref。**本机 2026-07-17 实测失败**(`127.0.0.1:10090` 代理未通)→ 需用户开代理 / 配 git proxy;不通则停、记 `docs/drift-log.md`、报用户。
- **P2 Node 版本策略**:默认**装 fnm 切 Node 22.16.0**(对齐 Quartz 上游 `.node-version`);本机无 nvm/fnm。若用户不想装,退而用本机 Node 25.9 真跑,**成/败结果必落 docs 当证据**(已过 EOL、上游未测,非硬阻断但非背书版本)。

### Scenario 1 · 环境证据层:Quartz v5 真 build + serve
```
Given 前置 P1/P2 已过(git 通 + Node 版本已定)
When  [系统] 按官方序列真跑:
        git clone v5 默认分支 → cd → npm i → npx quartz create
        → npx quartz plugin install --latest → npx quartz build --serve
And   [系统] 记录并钉住本次 build 的确切 commit(HEAD≈2026-06-16,NOT v4.0.8)
Then  build 进程退出码 0、无 error;本地 http://localhost:8080 能打开 Quartz 站首页
And   [系统] 把真 build 结果(成/败 + Node 版本 + 原生依赖 sharp/lightningcss 是否命中 darwin-arm64 预编译)记进 docs

  Scenario 1a [异常] git 连不上 github:
    Then  停,不重试;报用户开代理;记 drift-log;不伪造「已 build」
  Scenario 1b [异常] npx quartz plugin install 撞 quartz.lock.json 旧 commit 致插件 build 失败:
    Then  [系统] 改用 --latest(低内存加 -c 1);仍失败则记 tech-debt + 报用户,不静默略过
  Scenario 1c [异常] Node 25.9 真 build 失败:
    Then  装 fnm 切 22.16.0 重试;记录哪个 Node 版本能过(这就是环境证据)
```

### Scenario 2 · 手工灌 1 集样片,渲染成详情页
```
Given Quartz 站已能 build+serve(Scenario 1 过)
And   第 1 期精华稿素材(Latent Space《Why AI Infra must evolve for Agent Experience》,
      Modal CTO Akshat × swyx,2026-07-08)整理成 content/<稳定ID>.md:
        · frontmatter 基础字段:title/podcast/host/guests/date/source_url(为 C3 聚合铺路,本片不验聚合)
        · 正文=导读式中文精华(TLDR → 背景+主线+论点)
        · 金句区=中英对照(时间戳先作纯文本,C3 再升 ^块ID)
        · AI 补充背景用 callout/引用块与嘉宾原话最小视觉区分
When  [系统] 真 build + serve
Then  本地能打开这一集详情页,读到完整导读式中文精华(整篇能顺读)
And   金句以中英对照呈现
And   frontmatter 字段不致 build 报错(哪怕本片不聚合)

  Scenario 2a [边界] frontmatter 含中文/wikilink 语法:
    Then  build 不崩;渲染出的页不出现未解析的原始 frontmatter 文本
```

### 测试锚点(US-4)
- 主证据=**里程碑级 E2E**:人肉浏览器打开样片详情页,用户亲手点验收(不认 mock 绿)。
- 辅以 `scripts/verify-c1.mjs`(`npm run verify:c1`,标 US-4):校验产物是**真 Quartz 渲染结果**(结构特征 `article-title`/`<article` + 体积下限,防手造/陈旧文件假绿)+ 命中渲染锚点(标题/嘉宾/导读串/占位标识)。**只验"渲染骨架通",不碰防失真**——不拿金句当"逐字"锚点(逐字/时间戳/说话人三联闸门是 C2 的活)。
- ⚠️ **诚实边界(2026-07-17 交付物审计后)**:verify:c1 是**独立手跑脚本,不在 pre-commit / CI / vitest 门内**,提交时无机器闸门强制卡 C1 产物;唯一 vitest 门仍是冒烟桩(D1)。真正的强制闸门(尤其防失真)C2 接入,见 tech-debt D6。

### C1 完成 = 怎么算完成(DoD)
1. ✅ Quartz v5 本机真 build 成功(退出码 0)、serve 本地可访问,确切 commit 已钉并记录。
2. ✅ 灌 1 集**占位样片**(诚实标注、**非**第 1 期完整精华;金句区含 1 条明标「拼接失真反例」的占位金句),详情页本地打开能读到导读式版式。真实精华 C2 产出/用户提供后替换(drift-log #2)。
3. ✅ `npm run verify:c1` 渲染锚点 + 防假绿结构校验绿(连回 US-4)。⚠️ **它非强制门**(测试锚点诚实边界),真闸门 C2 接入(D6)。
4. ✅ 环境证据落盘:git 网络 + Node 版本策略真实结果记进 docs(c1-build-证据.md)。
5. ✅ 用户亲手打开浏览器验收(2026-07-17 放行骨架,「杂七杂八」记 D5)。
6. ✅ 独立对抗审计:GLM 两轮(005 save/006 noise)+ 交付物审计(docs/c1-审计-20260717.md,真问题已整改)。

---

## C2 · 流水线最小链:1 集端到端(RSS→官方文字稿→GLM-5.2 全译→浓缩→机器闸门→集页 markdown)

> 主要故事:**US-4(读中文精华)+ US-11(可回原核对)**。真相源 `需求共识.md` US-4 / US-11 + 产品轮廓 ②.5/③/④。
> **本片定位=流水线证据层**:把「GLM-5.2 能把一集英文访谈自动跑成可信中文精华」从试跑记录(Opus 人肉跑)换成**本机脚本真跑 GLM-5.2 的端到端证据**,产出**第一份真实精华**替换 C1 占位样片。
> 试跑证据:`试跑记录-第1期.md`(方向验证)+ `试跑记录-第2轮-模型对照.md`(GLM-5.2 逐字 63%、0 编造,过闸门→100%)。
> **本片两条裁决(drift-log #3/#4,已落盘)**:①转写错字=精华改对+标注、金句英文侧照转写稿、全译存档照搬 ②范围=本地脚本跑通 1 集,上云留 C7。

### 本片素材(锁定,不再议)
- **集**:Latent Space《Why AI Infrastructure must evolve for Agent Experience》(Modal CTO **Akshat** × **swyx**,2026-07-08,57:42),RSS=latent.space,该集**自带官方文字稿**(说话人+秒级时间戳+章节,试跑已验证一条 curl 拿 mp3 直链)。
- **引擎**:全译+浓缩=**GLM-5.2**(`glm-ask`,🔒 第 9 轮);**不用免费档写稿**(实测编造);机器闸门=纯代码字符串校验(唯一不说谎的一层)。

### 本片做什么 / 不做什么(防范围蔓延)
- ✅ **做**:①取源(RSS→mp3 直链 + **官方文字稿存进仓库**,当闸门基准=真相锚)②GLM-5.2 逐字全译(保时间戳+说话人,存**云端存档层**,照搬原文错误)③GLM-5.2 浓缩成**导读式**精华(TLDR→背景+主线+论点,每论点挂[时间戳+说话人],术语大白话解释,AI 补充明确标注,转写错字改对+标注)④**机器闸门脚本**:金句三联校验(引语逐字命中转写稿 + 时间戳区间包含 + 说话人匹配),**这就是 tech-debt D6 的真强制闸门**⑤产出**真实集页 markdown 替换 C1 占位样片**,本地 Quartz build+serve 能读到真精华。⑥固化 `prompts/`(全译 prompt + 浓缩 prompt + 术语表)= tech-debt D3。
- ❌ **不做(留后续切片)**:frontmatter 类型化关系聚合 / `[[双链]]`可点跳 / 金句 `^块ID` / 别名表补链 / 实体页(**C3**,本片金句时间戳仍作纯文本、frontmatter 只保 C1 那批基础字段);音频 TTS / 播放器 / 私有 feed(**C4**);列表页 / 搜索(**C5**);**上云 Workers 定时 + Pages 部署(C7)**;ASR 转写 + VAD 切静音(本集有官方稿用不上,留到无官方稿的集,tech-debt D2);LLM 判官第 2 级(TNR<25% 弱、只投否决票,本片不作 DoD 阻断项,可选实现或推后)。

### 前置核验(未过则停,不闷头往下)
- **P1 网络连通**:`curl` 能取到该集 RSS + 官方文字稿 + mp3 直链(C1 踩过代理坑,现全局代理 7890)。**不通 → 停、报用户开代理、记 drift-log,不伪造「已取到」**。
- **P2 GLM-5.2 可调**:`glm-ask` 真返回且模型头是 `glm-5.2`(已验证)。调用会花用户智谱额度(全译~2 小时稿分段+浓缩,量适中,🔒 成本不虑),真跑前告知一次。

### Scenario 1 · 取源:RSS → 官方文字稿(闸门基准落仓库)
```
Given P1 通
When  [系统] 脚本从该集页/RSS 取:mp3 直链 + 官方文字稿(逐条:说话人 + 秒级时间戳 + 文本)
Then  官方文字稿存进仓库(data/ 或等价),条数/时间戳完整(试跑基线 584 条、时间戳 468 无遗漏,数量以真取为准)
And   英文原稿视为真相锚,后续闸门以它为唯一基准(转写错也照存,见 drift-log #3)
  Scenario 1a [异常] 取不到官方稿(该集改版/下架/网络断):
    Then  停,报用户,记 drift-log;不退化为「手编转写稿」冒充
```

### Scenario 2 · GLM-5.2 逐字全译(云端存档层)
```
Given 官方文字稿已落仓库(Scenario 1 过)
When  [系统] GLM-5.2 分段并行逐字全译(共享术语表统一译名),保留每条时间戳+说话人
Then  产出中文全译存档层,条数与原稿一一对应、时间戳无遗漏
And   [drift #3] 全译层**照搬原文错误**(如 model philosophy 不擅自改 Modal)——它是真相派生,须镜像转写稿
And   [非目标] 全译只存档、不上详情页 UI(第 19 轮 🔒)
  Scenario 2a [边界] 分段边界切断一句话:
    Then  [系统] 重叠切分/合并,不得因切段丢字或错位时间戳
```

### Scenario 3 · GLM-5.2 浓缩成导读式精华
```
Given 中文全译已产出(Scenario 2 过)
When  [系统] GLM-5.2 从中文全译整读浓缩(长上下文一口吞,不做 map-reduce 层级合并)
Then  精华=导读式:一句话 TLDR → 背景+主线+每个论点挂 [时间戳+说话人] → 金句中英对照(时间戳纯文本)
And   术语第一次出现用大白话解释一句;没听过也能从头顺读明白(非金句集锦)
And   AI 补充的背景/讲解与嘉宾原话**视觉上明确区分**(callout/引用块最小体现,精细视觉留后)
And   [drift #3] 转写错字在精华正文**改对 + 小字标「原文误作 X」**;**金句英文侧照转写稿原样**(保逐字命中 + 溯源对得上),纠正只走中文侧
  Scenario 3a [异常] 精华被浓缩成看不懂的金句堆(用户曾反馈「不知道在讲什么」):
    Then  这是方向不达标,回退 prompt 重浓缩,不当合格稿交付
```

### Scenario 4 · 机器闸门:金句三联校验(D6 真强制闸门)★
```
Given 精华稿已产出(Scenario 3 过),官方文字稿在仓库
When  [系统] 机器闸门脚本逐条校验每句金句:
        ① 引语逐字命中转写稿(去标点比词流,「加句号/改逗号」不算错,同试跑判定口径)
        ② 金句标注的时间戳落在该文本所在转写段的区间内(时间戳区间包含)
        ③ 金句标注的说话人 == 转写稿该段说话人(说话人匹配)
Then  三项全过才算合格金句;任一不过=打回(剔除或回 Scenario 3 重生成),**exit 非 0,禁止静默放行**
And   [自证] 造一条「拼接金句」(跨插话拼两句/时间戳标到主持人提问秒)实测被拦、exit 1(试跑首跑 4/12 被拦的同类)
And   [D6] 本闸门进 pre-commit / CI 强制(补上 C1「verify:c1 非强制门」的缺口)
  Scenario 4a [已知] 闸门误报(如 middle proxy 正确译「代理」撞术语表):
    Then  [系统] 误报可人工复核放行,但放行动作留痕,不改「三联全过」的硬判定
```

### Scenario 5 · 出真实集页 markdown,替换 C1 占位样片
```
Given 精华过机器闸门(Scenario 4 全绿)
When  [系统] 组装集页 markdown 写入 site/content/(覆盖 C1 占位样片同 ID 文件)
And   frontmatter 保 C1 基础字段(title/podcast/host/guests/date/source_url;类型化关系留 C3)
Then  本地 npx quartz build --serve 打开该集详情页,读到**真实导读式中文精华**(整篇顺读)
And   金句中英对照呈现;AI 补充与原话视觉区分
And   [drift #2 兑现] 该页不再是占位/拼接反例,而是 GLM-5.2 真跑产物
  Scenario 5a [边界] frontmatter/正文含中文+wikilink 语法:
    Then  build 不崩,不出现未解析的原始 frontmatter 文本(承接 C1 Scenario 2a)
```

### 测试锚点(US-4 / US-11)
- **主证据=里程碑级 E2E**:人肉浏览器打开真精华详情页,用户亲手点验收精华质量(读了觉得「这就是我要的」),**不认 mock 绿**(story-map 里程碑规矩)。
- **机器闸门 = 强制门**:`scripts/gate-*.mjs`(或等价),标 US-11;金句三联校验;含「拼接金句被拦 exit 1」的自证用例;进 pre-commit/CI(D6 闭合)。
- 辅以脚本级检查:全译条数↔原稿条数对齐、时间戳无遗漏、精华含 TLDR/导读/金句三段结构锚点。
- ⚠️ **诚实边界**:机器闸门保的是「金句逐字命中**转写稿**」,不是「命中原话」——官方稿本身会错(drift #3 / R2),这层拦不住转写错;拦转写错靠英文原稿永久存档 + 事后可查,不宣称零失真(US-11 主张口径)。

### C2 完成 = 怎么算完成(DoD)
1. ✅ 从 RSS 真取该集 mp3 直链 + 官方文字稿,transcript 落仓库当闸门基准(Scenario 1)。
2. ✅ GLM-5.2 **真跑**全译(非人肉、非 Opus),中文全译存档层产出、照搬原文(Scenario 2);全译 prompt + 术语表固化进 `prompts/`(D3)。
3. ✅ GLM-5.2 **真跑**浓缩,导读式精华产出(TLDR+导读+金句中英对照,AI 补充明标,转写错字改对+标注);浓缩 prompt 固化(Scenario 3)。
4. ✅ 机器闸门脚本真跑,金句三联校验**全绿 exit 0**;拼接金句自证被拦 exit 1;进 pre-commit/CI 强制(D6 闭合)(Scenario 4)。
5. ✅ 真实集页 markdown 替换 C1 占位样片,本地 build+serve 打开读到真精华(Scenario 5,drift #2 兑现)。
6. ✅ 用户亲手浏览器验收真精华质量(里程碑 E2E,不认 mock 绿)。
7. ✅ 独立对抗审计:`glm-check --kind code`(20260717-008,判 save;抓到说话人 0.8 阈值 80/20 拼接漏洞,已硬化+补 2 测试,落账本+裁决)。
8. ✅ 结项前技术负债过一遍(对齐**真实台账**,非早前污染读误的编号):**D1**(加 gate.test.ts 真业务测试,大幅还)、**D4**(content 三层 data/episodes 源→samples 渲染产物→site 构建区,已还)、**D6**(三联闸门进 pre-commit 强制,已还);prompts/ 固化全译+浓缩+术语表;新登记 **D7**(存档层本地待上云 R2)、**D8**(正文内联时间戳未过闸门)、**D9**(samples/ 命名债)、**D10**(闸门②③构造恒真的设计事实)。
> ⏳ **DoD #6 用户亲手浏览器验收=最后一关,机器全绿≠通过**;通过后 story-map C2 翻 ✅。

---

## C3 · 知识抽取:类型化属性 + 正文双链 + 金句 ^块ID + 别名表补链 → 实体页聚合

> 主要故事:**US-6(看本集关联并跳转)+ US-8(看某人说过的所有金句)+ US-9(看某实体出现在哪些集)**。真相源 `需求共识.md` US-6/8/9 + 产品轮廓 ③.7 + 页面 3 数据契约。
> **本片定位=串联证据层**:把「知识串联/不让知识成孤岛」这条**产品命脉**(定位 v2 🔒 第 13 轮:市面「浓缩」与「溯源」分裂、没人做「摘要级溯源+串联」)从纸面变成能点的页。C2 交付的集页里,嘉宾/公司/概念全是**死字符串**、金句是散的、实体页一个都没有。
> **地基已拍板**:实体页聚合=**流水线生成期算好、直接写进 markdown**,不押 Bases(🔒 第 28 轮改,**ADR 0008**,drift-log #1)。
> **核心认知(共识 ③.7 自己写的)**:「知识关联不是网站魔法,是流水线的活」——反链/图谱白送的前提是**流水线真写了显式链接+属性**。

### 本片四条裁决(2026-07-17 用户 AskUserQuestion 拍板,drift-log #7~#10)
- **#7 实体页不写「AI 简介」**:共识线框原有「AI 简介(标注 AI 生成)」一栏 → **改为「集里怎么说它」**:只用嘉宾在集里的原话/全译派生一两句,带时间戳可回溯。**改因**:AI 简介靠的是模型世界知识,**没有转写稿可比对**、防失真闸门够不着,而 GLM 在本项目已有编造前科(试跑记录-第2轮)。本集没怎么说的实体,该栏不显示。
- **#8 灌第 2 集**:1 集时实体页聚合全是退化的(每个实体只出现 1 集、「常一起出现」=本集其他实体、别名归一化看不出来)→ 聚合逻辑写了也证不了它真 work。
- **#9 建页门槛=只给真讨论过的建页**:进 frontmatter 的主要实体才建页;正文顺带提一嘴的(如「像 Kubernetes 那样」)保持纯文字、不补链。**理由**:Quartz 里 `[[X]]` 指向不存在的页=死链,所以「补链」和「建页门槛」是同一个决定;全补链会造出一堆一行空页。
- **#10 实体命名=概念页双语标题**(用户选,非我推荐的纯中文;我只争一次已让过):人名/公司名用原文(`Modal` / `Akshat Bubna`),**概念页标题双语**(`智能体 (Agent)`)。**落地避坑**:文件名用中文(`智能体.md`)+ frontmatter `title: 智能体 (Agent)` + `aliases: [Agent, agent, agents]` —— 这样正文照常写 `[[智能体]]` 读着顺(不会变成「Modal 把重点转向了[[智能体 (Agent)]]体验」这种碎句),页面打开是双语标题,搜英文也命中。

### 本片素材(锁定,不再议)
- **集 1**(已在库):Latent Space《Why AI Infrastructure must evolve for Agent Experience》(Modal CTO **Akshat Bubna** × **swyx**,2026-07-08,57:42,953 段)。
- **集 2**(本片新灌):Latent Space《Why the Frontier Ecosystem must be Open》(**Matei Zaharia + Reynold Xin**,Databricks,**2026-06-24**,68.7 分钟,**1508 段**,post=203293676,`https://www.latent.space/p/databricks`,集 id=`2026-06-24-latent-space-databricks`)。**2026-07-17 实测**:aligned 官方稿在架、逐词数据 1508/1508 完整、3 个说话人标签。
  > 📌 口径留痕:本行日期我初稿误写 2026-07-24,**回源头核对(`/api/v1/posts/by-id/203293676` → `post_date: 2026-06-24T18:53:16Z`)当场改正**。C1/C2 两轮审计都抓到过「写记忆里的数」,故此处按铁律「以产物为准」现查现填。
- **为什么选它**(不是随手挑):①**同域高重叠**——同是 AI 基础设施主题,概念(推理/GPU/开源模型/智能体)大概率跨集复现,swyx 若同为主持则人物页天然跨集 → 聚合能真验 ②**自带别名表试金石**——官方稿开场逐字为 `" Mattia and Reynolds from Databricks."`,即转写稿把 **Matei→Mattia**、**Reynold→Reynolds** 写错了,正是本片「别名表(常见误写)+ D17 专名回原文比对」要处理的真实弹药,不用造假数据。
- **候选池怎么来的(诚实交底)**:RSS 近 20 条里非 AINews 的真访谈 10 期,**逐页实测只有 2 期挂着 aligned 官方稿**(modal2026 / the-lab);从集页内嵌播放器清单又挖出 6 期有稿的旧集(databricks / gray-swan / andon / radical-ai 等),**共 8 期**。→ **顺带发现的产品级风险**:官方稿覆盖率远非「有播客就有稿」,而**ASR 兜底(+VAD 切静音)至今没实现**(C2 明确不做,留给「无官方稿的集」)。本片**不扩范围去做 ASR**,仅登记为新债(见 DoD #8)。
- **引擎**:实体抽取/「集里怎么说它」=**GLM-5.2**(🔒 第 9 轮:写稿只用 5.2,免费档只当判官);闸门=纯代码字符串校验。

### 本片做什么 / 不做什么(防范围蔓延)
- ✅ **做**:
  ① **灌集 2 跑通 C2 全链**(fetch-source→translate→condense→judge-quotes→repair→gate),复用 C2 脚本不改流水线;**说话人映射机器定不了 → 我给证据、用户点头**(fetch-source 设计如此,不硬编)。
  ② **全局别名表** `data/aliases.json`(中英双名/缩写/**常见误写**,决定归一化+补链召回;跨集累积,GLM 提议 + 我复核)。
  ③ **实体抽取** `scripts/extract-entities.mjs` → 每集 `entities.json`:类型化属性(host/guests/companies/concepts + **角色**)+ **tags(AI 自由打 3-5 个,不预设分类 🔒)** + 每实体的 evidence(时间戳+原文片段)+「集里怎么说它」一两句。
  ④ **渲染升级** `render.mjs`:frontmatter 类型化属性写成 `[[双链]]`(`guests: [[Akshat Bubna]]` 表达「他是嘉宾」)+ 正文按别名表补链(**只链有页的**,依 #9)+ 每条金句挂 `^块ID`。
  ⑤ **实体页生成** `scripts/build-entities.mjs`(**自建聚合,ADR 0008**):一套模板三种实体 → 「集里怎么说它」+ 金句墙(`![[集#^块]]` 嵌入+回链)+ 出现在这些集(可按角色分)+ 关联实体(常一起出现)。**金句墙口径 🔒 第 24 轮**:人物页=**本人说的**;公司/概念页=**「最能说明它是什么」的金句**(不限谁说)。
  ⑥ **新增机器闸门**(见 Scenario 5):**D17 专名回原文比对**(共识 🔒 明写、C2 静默丢掉的那层)+ **D8 正文内联时间戳校验** + 死链检查 + 实体页产物一致性。
- ❌ **不做(留后续切片)**:**关系图 / 局部关系图 / 全局图谱页**(US-9 的④、US-10 → **C6**);**相关单集**(US-7 → **C6**);**标签筛选 UI / 列表页 / 搜索**(US-2/3 → **C5**,本片只**产出** tags 不做筛选界面);知识库导航名录页(→ C5/C6);音频 TTS / 播放器(**C4**);上云(**C7**);**ASR 兜底 + VAD**(本片两集都有官方稿,新债登记,不在本片做)。
- ⚠️ **US-9 部分交付**:US-9 验收含「关系图显示该实体邻域」→ 本片交付①②③(集里怎么说它/出现在这些集/关联实体),**④关系图归 C6**;C3 不宣称 US-9 完整闭合。

### 前置核验(未过则停,不闷头往下)
- **P1 Quartz v5 真渲染 `![[集#^块ID]]` 嵌入**:共识数据契约(页面 3)把金句墙押在**块引用嵌入**上,而这是 Obsidian 语法、Quartz 支持度未经本机核实。**先用最小样例真 build 验**:能渲染 → 照契约做;**不能渲染 → 停 + 报用户 + 记 drift**(退路:金句墙直接写文本+回链,不用嵌入语法),**不假装它渲染了**。踩过 Bases「纸面原生、实测社区插件」的坑(ADR 0008),纸面契约一律先验。
- **P2 网络**:`curl` 能取集 2 集页 + aligned 官方稿(2026-07-17 已实测通,**且本机代理 7890 未开、直连反而通**——C1/C2 记的「须开代理」已不成立,以真跑为准)。
- **P3 GLM-5.2 可调**:同 C2。集 2 有 1508 段(≈集 1 的 1.6 倍)→ 全译+浓缩**约 1.5 元量级**,真跑前告知用户一次。

### Scenario 1 · 灌集 2:复用 C2 流水线跑通第二集
```
Given P2/P3 通,C2 脚本未改(本片不动流水线)
When  [系统] 对集 2 依次跑 fetch-source → translate → condense → judge-quotes → repair → gate
Then  data/episodes/2026-07-24-latent-space-databricks/ 产出 transcript/translation/digest/meta,金句过三联闸门 exit 0
And   [人机边界] speaker_map(SPEAKER_xx→真名)由我给**证据**(开场白/发言量/自我介绍)、**用户点头**才写死;机器猜不出谁是谁,不硬编
  Scenario 1a [异常] 集 2 官方稿取不到/改版下架:
    Then  停,报用户,记 drift-log;不退化为手编转写稿,也不静默换集
  Scenario 1b [边界] 集 2 转写稿把 Matei 写成 Mattia、Reynold 写成 Reynolds(已实测存在):
    Then  这是**预期弹药**不是异常:金句英文侧照转写稿原样(drift #3)、精华中文侧用正确名(drift #5 标注节制:拿得准的直接改对、不标)、**别名表登记误写形式**供 D17 比对召回
```

### Scenario 2 · 全局别名表 + 实体抽取(类型化属性 + tags)
```
Given 两集的转写稿 + 全译 + 精华都在库
When  [系统] GLM-5.2 从双语稿抽实体,产出每集 entities.json:
        · host / guests / companies / concepts,每个带**角色**(是嘉宾/是被讨论的公司/是概念)
        · 每个实体带 evidence:时间戳 + 转写稿原文片段(供闸门回比)
        · tags:AI 自由打 3-5 个,不预设分类(🔒;跑几十期看自然聚堆再人工定大类)
Then  实体名全部能回原文命中(直接命中 或 经别名表 en/误写形式命中)——**命中不了=GLM 凭空造的实体,拦**(Scenario 5 D17)
And   [系统] 别名表 data/aliases.json 跨集累积:中英双名 / 缩写 / 常见误写(Modal→Modo/moto、Matei→Mattia、Reynold→Reynolds)
And   [#9] 只有进 frontmatter 的**主要实体**入表建页;正文顺带提及的不建页、不补链
  Scenario 2a [边界] 同一实体两集写法不同(Modal / Modal Labs;Akshat / Akshat Bubna):
    Then  经别名表归一到同一 id → 实体页是**同一个**,不裂成两页(这正是灌第 2 集要验的,#8)
  Scenario 2b [边界] 概念实体的中文名压根不在英文转写稿里(「智能体」vs "agent"):
    Then  D17 比对走**别名表的 en 形式**(智能体→agent/agents),不因中英差异误判为编造
  Scenario 2c [缺陷修复 · 2026-07-30] GLM 给同一概念派了**不同 id**(单复数/词性:agent/agents/agentic),各自却落到同一个中文 file(智能体)→ 生成期 `out.set(file,…)` 后写覆盖先写,整页丢失(实测 57 集里 8 组冲突、9 页被吞;Scenario 2a 只覆盖「同 id 不同写法」,这是「不同 id 同 file」的新失效面):
    Given 别名表用 **merge 字段**把这些变体 id 归并到一个权威 id(agent),forms 覆盖全部英文写法(agent/agents/agentic)
    When  [系统] build-entities 生成期**先按 merge 把变体 id 归一(id/name/file 一起),再跨集聚合**
    Then  它们聚成**同一页**,该页汇总全部相关集(智能体 = 29+7+1 集),不再因同 file 后写覆盖先写而整页丢失
    And   各变体自带的「集里怎么说它」全部保留、一条不丢;金句按 forms 全量召回;关联区共现按权威 id 计
    And   产物一致性闸门(gate-entities ④)重算=与仓库逐字命中(闸门与 CLI 同源,ADR 0008);gate-all 全套仍 exit 0
    And   归并**只由人工在别名表 merge 里点名**(代码通用、策略在人):语义可能不同的组(soul=配置文件义 vs 一个 OpenAI 模型)**不给 merge → 不并**,留人工另处理(本轮用户拍板:系统提示词组先不动)
```

### Scenario 3 · 集页升级:类型化属性 + 正文双链 + 金句 ^块ID(US-6)
```
Given entities.json 已产出且过闸门
When  [系统] render.mjs 重渲染两集集页
Then  frontmatter 写**类型化属性**:guests/companies/concepts/host/podcast/date/tags,值为 [[双链]](机器可读、可聚合)
And   详情页顶部「关联区①」**按角色分行**(嘉宾/涉及公司/概念/来源),每个实体角色清晰,**不是一排无差别标签**(US-6 验收原文)
And   点任一实体 → 跳到该实体页(**不是死链**,#9 保证)
And   正文里提到的主要实体渲染成可点链接;每条金句挂**语义化 ^块ID**,任何实体页可精确引用+回链
  Scenario 3a [异常] frontmatter 双链/中文致 build 崩或渲染出原始文本:
    Then  build 不崩、不出现未解析的 frontmatter 文本(承接 C1 2a / C2 5a)
```

### Scenario 4 · 实体页聚合(自建,ADR 0008)(US-8 / US-9)
```
Given 两集集页已带类型化属性 + ^块ID
When  [系统] build-entities.mjs 在**生成期**聚合(不依赖任何第三方插件做运行期查询)
Then  每个主要实体产出一页,含:
        · 头部:类型(人物/公司/概念)、又名、**「集里怎么说它」**(#7:派生自集内原话/全译,带时间戳可回溯;没有则不显示该栏)、数字(出现 N 集·金句 N 条·关联 N 个)
        · ① **金句墙**:人物页=**他本人**在所有集里说过的金句;公司/概念页=**「最能说明它是什么」**的金句(不限谁说)(🔒 第 24 轮)
        · 每条金句可**「回原集」跳回出处那一刻**(溯源,US-8 验收原文)
        · ② **出现在这些集**:自动列出所有相关集,标明角色(作为嘉宾/被提及)
        · ③ **关联实体**:常一起出现的人/公司/概念,可点跳转
And   [#8 兑现] 跨集实体(如 swyx / 复现概念)的实体页真汇总到**2 集**,不是各自 1 集 —— 这是灌第 2 集的**唯一验收点**
  Scenario 4a [异常·US-9 原文] 实体只出现在 1 集:
    Then  正常显示单条,不因数据少而破版
  Scenario 4b [异常·US-7 同源] 某区块无内容(如概念页没有合格金句):
    Then  该区隐藏或显示「暂无」,不留空框
```

### Scenario 5 · 新增机器闸门:D17 专名回原文 + D8 正文时间戳 + 死链 + 产物一致性 ★
```
Given 两集的 entities.json / 集页 / 实体页都已产出
When  [系统] 闸门脚本校验:
        ① **D17 专名回原文比对**(共识 🔒「零成本零幻觉」那层,C2 静默丢了):
             精华正文 + 实体属性里的**人名/机构名/专名**,必须逐字命中转写稿
             (或经别名表 en/误写形式命中)。命中不了 = 凭空造的 → **拦**
        ② **D8 正文内联时间戳校验**:[00:34-02:17 Akshat Bubna] 的区间须存在于转写稿,
             且该区间**主说话人 == 标注的说话人** → 不符即拦
        ③ **死链检查**:正文/frontmatter 里每个 [[X]] 都须有对应实体页文件(#9 的机器兑现)
        ④ **实体页产物一致性**(承 C2 反攻手法):实体页从 entities/digest **重算重渲染**,
             与仓库里的实体页逐字比对,对不上即拦;金句墙引用的 ^块ID 必须存在于对应集页
             且是**过了三联闸门的金句** → 防手改、防实体页凭空长出金句
Then  任一不过 = exit 非 0,**禁止静默放行**;并入 pre-commit(gate-all)+ verify:c3
And   [自证·变异验证] 每条闸门都造一次真攻击实测被拦(编造实体名 / 时间戳挂错说话人 /
        链到不存在的页 / 手改实体页塞一条转写稿里没有的金句),**不靠"应该能拦"自述**
  Scenario 5a [口径·已定] D17 的**数字/日期**比对:英文口语稿里数字多是英文词("ten"/"twenty twenty two"/
        "multi-billion"),中文精华是阿拉伯数字(10 次/2022 年/数十亿)→ 逐字比对必然大量误报
    Then  **[standard-change: 用户授权 2026-07-17]** 口径=**硬拦确定数字,模糊量词只提醒**:
          · **硬拦**:人名/机构名/专名 + **能归一化的确定数字**(阿拉伯数字/年份 ↔ 英文数字词
            ten→10、twenty twenty two→2022)——对不上即拦
          · **提醒不拦**:模糊量词(数十亿美元 / 几个百分点 / a couple hundred)——它们本就不是确定数字,
            逐字比对不适用 → 进「待核清单」输出,不卡提交
          · **误报逃生**:人工复核放行 + **留痕**(照 C2 Scenario 4a 既有做法),放行不改硬判定本身
  Scenario 5c [实现口径·已落地 2026-07-17] 真跑后校正两处(证据:docs/c3-事实闸门-首跑发现.md):
    · **D8 判据 = 主说话人口径**(与本 Scenario 5② 原文「主说话人 == 标注」一致):被标注者须在区间内
      真开口(≥2 词)+ 区间主说话人不得被隐去。**首版误写成「说话人集合完全相等」→ 真数据 23 条挂 13 条**
      (长区间里主持人一句「Yeah」即判挂),比 Gherkin 本身还严,且会把闸门逼成「天天误报→天天放行」的摆设。
      改后 D19 拦截力不降:被冤枉方 0 词,过不了第一条(集 2 实测抓到 2 条真移花接木)。
    · **单点时间戳**吃 `tsGrace=1.5` 宽限窗(沿用 gate.mjs 既有口径,不另立标准):单点跨度≈一个词,
      不宽限则永远判不出主说话人。实证:集1 [48:34 Akshat] 处主持人问句还差 0.12s 说完、Akshat 0.76s 后开口。
    · **D17 作用域排除三类**(都不是「对本集的事实断言」,硬拦必然误报炸穿):【背景】块(共识明定、
      对读者已标注的 AI 补充)/ 时间戳坐标 / 数字成语(7×24 —— 属 drift #11「非确定数字不硬拦」的精神,已交底)。
    · **真相源 = 转写稿 ∪ meta 有出处字段 ∪ 别名表**(不只是转写稿):集2 实测转写稿只有名(Matei/Reynolds),
      姓 Zaharia/Xin 只在集标题里 → 只拿转写稿当真相源会把正确姓氏误判成编造。
  Scenario 5b [已知边界] D17 只证「这个名字在原文出现过」,证不了「这句话是这个人说的/没被断章取义」:
    Then  D19(移花接木)**部分收窄**(②抓得住「挂错说话人」那类),但**不宣称闭合**;
          D15/D16(中文侧无硬拦/断章取义)口径不变,仍是 事后可查 ＞ 事前拦截
  Scenario 5d [实现口径·2026-08-01 补录 · standard-change] 已核实真实专名白名单(救 ASR 听岔的真产品名):
    Given 某真专名被 ASR 听岔得太狠,转写稿里**连一个可登记的误写形式都不剩**
          (不像 Nsight→稿里 inside、Modal→稿里 Modo 那样能进别名表 forms 召回)
     When  正文/实体 how_described 写出正确专名,回原文比对时真相源里一个形式都查不到
     Then  别名表召回**救不了**(它的前提是「某 form 在真相源出现过」)→ 靠 gate-facts 的
           `REAL_PROPER_NOUNS` 白名单**报户口**(与 TOKEN_ALLOWLIST 同机制、语义分开、每个成员留核实出处)
      And  白名单**逐词**免检(不是「有真专名就整句放行」)→ 同句里的编造假专名(Zorptron)照旧被 D17 拦
      And  语义 = 「我们担保它真实存在」,**不**担保「本集语境用对了」(那是 D15/D16 天花板,不归 D17)
    Then  **[standard-change: 用户授权 2026-08-01,两次确认拍板 B「补录真实专名容错」]** 口径承 drift #26(ADR 0013·D17 专名降误报)/ D46(拼接容错);
          首批补录 **NIM**(NVIDIA Inference Microservices,英伟达推理微服务)、**Nemotron**(英伟达开源模型家族)——
          均官方产品页可核;起因=黄仁勋×LangChain 演讲(2026-07-08,whisperX 无官方稿)两轮卡 D17 误伤。
          **刻意不碰 Claude**:不确定是 ASR 听岔还是浓缩脑补类比 → 不进白名单,靠捞回后重浓缩 + 闸门兜底自然处理(真编造就该拦)。
```

### 测试锚点(US-6 / US-8 / US-9)
- **主证据=里程碑级 E2E**:用户亲手在浏览器点——从集页点一个实体 → 落到实体页 → 看到金句墙 → 点「回原集」跳回那一刻。**不认 mock 绿**(story-map 里程碑规矩)。
- **机器闸门=强制门**:D17 / D8 / 死链 / 实体页一致性 进 pre-commit(gate-all)+ `npm run verify:c3`,标 US-6/8/9。
- **真测试(不重蹈 C2 覆辙)**:测试**必须真调被测函数**(临时目录喂 fixture),不在测试里重抄一遍逻辑;每条都做**变异验证**(故意回退实现 → 测试必须挂)。C2 交付物审计抓到过「防假绿单测自己就是假绿」,不再犯。
- ⚠️ **诚实边界**:①D17 保的是「专名在**转写稿**里出现过」,不是「在原话里出现过」——官方稿本身会错(Matei→Mattia),靠英文原稿存档兜,不宣称零失真 ②「集里怎么说它」是 GLM 派生的中文,受 **D15 制约**(中文侧无硬拦),闸门只能保「有出处、出处真提到它」,保不了「说得对」。

### C3 完成 = 怎么算完成(DoD)
1. ⬜ **P1 先验**:Quartz v5 真 build 实测 `![[集#^块ID]]` 嵌入能不能渲染,结果落 docs 当证据;不能渲染则走退路并记 drift(**不假装它渲染了**)。
2. ⬜ 集 2(Databricks)**真跑** C2 全链入库,金句过三联闸门 exit 0;speaker_map 经用户点头(Scenario 1)。
3. ⬜ `data/aliases.json` 全局别名表落盘(含实测误写 Modal→Modo/moto、Matei→Mattia、Reynold→Reynolds);两集 entities.json 产出,含角色 + evidence + tags 3-5 个(Scenario 2)。
4. ⬜ 两集集页升级:frontmatter 类型化属性([[双链]])+ 关联区①按角色分行 + 正文补链(只链有页的)+ 金句 ^块ID;点实体不落死链(Scenario 3,US-6)。
5. ⬜ 实体页生成:金句墙(人物页=本人说的 / 公司概念页=最能说明它是什么)+ 回原集溯源 + 出现在这些集(标角色)+ 关联实体;**跨集实体真汇总到 2 集**(Scenario 4,US-8/US-9)。
6. ⬜ 新闸门真跑:D17 + D8 + 死链 + 实体页一致性,**四条各造一次真攻击实测被拦**;进 pre-commit + verify:c3;测试真调被测代码且过变异验证(Scenario 5)。
7. ⬜ **用户亲手浏览器验收**(里程碑 E2E:集页 → 实体页 → 金句墙 → 回原集,链路走通且读着对)。
8. ⬜ 结项前技术负债过一遍:**D17 还清**(本片主交付之一)、**D8 还清**、**D19 部分收窄不宣称闭合**;**新登记债**:官方稿覆盖率仅 8/10 近期真访谈可查、**ASR+VAD 兜底未实现**(无官方稿的集当前**灌不进来**,C4/C5 前必须面对);D9(samples/ 命名债)随实体页新增目录一并复议。
9. ⬜ 里程碑独立对抗审计:`glm-check --kind code` 冷喂,落账本 + 打裁决。
> ⏳ **DoD #7 用户亲手浏览器验收=最后一关,机器全绿≠通过**;通过后 story-map C3 翻 ✅。

### 开工前待定 → **已清空(2026-07-17 用户二次确认)**
- ~~Scenario 5a · D17 数字/日期比对口径~~ → **已定**:硬拦确定数字、模糊量词只提醒(`[standard-change: 用户授权]`,见 Scenario 5a 正文 + drift-log #11)。
- 共识 🔒 冲突(#7 改 AI 简介)→ 已走完共识修改流程:用户明文 + 改共识 L456/L471 + **ADR 0009** + drift-log #7。

---

> **⚠️ C4 与 C6 双线并行(2026-07-18 用户 AskUserQuestion 拍板选「真双线」,推荐 A 被否)**:两刀各自独立 worktree 开发、**并行开发串行验收**、各走自己的红绿+闸门+GLM 审计,集成由主线串行收口。两锚校验期间 C4/C6 会**同时挂 🟡**,属预期,不算漂移。

## C4 · 音频:精华 TTS(Azure F0)+ 详情页播放器 + 私有播客 feed

> 主要故事:**US-5(听中文音频)**。真相源 `需求共识.md` US-5 + 产品轮廓 ⑤合成 + 输出层「详情页只展示中文精华+音频」。
> **本片定位=消费形态层**:把已过闸门的中文精华从「只能读」变成「走路开车也能听」。**不重新生成任何内容**,只把 C2/C3 产出的精华配音。
> **前置定价复核(ADR 0002,2026-07-18 已做)**:Azure Speech F0 = 神经语音 **50 万字符/月永久免费、额度不可调、单次合成 ≤3000 字符**;满负荷 60-80 期/月约用 24 万字符=半个额度。契约成立,月成本 ≈0。来源:[Azure Speech 配额与限制](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-services-quotas-and-limits)(2026-07-18 查)。
> **⚠️ 引擎决策(drift #13,2026-07-18,当日演进 Azure→CF MeloTTS→edge-tts)**:配音引擎定 **edge-tts**(白嫖 Edge「大声朗读」的微软云端神经语音,**晓晓同源**、免费免注册**免 key**、国内直连)。**本机 P1 已真调验证通过**(`docs/c4-p1-edge-tts核验证据.md`:6 个普通话音色、晓晓 42 字/9.9s 真 mp3 24kHz/48kbps+VTT 字幕)→ **C4 无需用户任何凭证**。Cloudflare MeloTTS / Azure 晓晓 作**可插拔 fallback**(edge-tts 非官方接口,微软改协议就挂 → 缓存+失败降级)。

### 本片两条体验决定(2026-07-18 用户 AskUserQuestion 拍板)
- **音频范围 = 读整份中文精华**(`tldr` + `digest_md`,约 13-15 分钟/集),非仅 TLDR。理由:它就是「详情页只展示中文精华+音频」里的那份精华,听完=读完。
- **默认声音 = 晓晓**(`zh-CN-XiaoxiaoNeural`,女声)。**听感最终由用户亲耳听合成小样再定**;不满意换引擎(豆包/MiniMax)不动上游(共识 ⑤ L186 留痕)。

### 本片素材/引擎
- **音频源文本** = 每集 `digest.json` 的 `tldr` + `digest_md`(集1 ≈3916 字、集2 类似)。已过 C2/C3 闸门的中文精华。
- **引擎(可插拔,drift #13)** = 初选 **edge-tts**(晓晓 `zh-CN-XiaoxiaoNeural`;**免任何凭证**,本地 Node 调 Python edge-tts CLI 或 Node 包,C4 impl 时定)+ **CF MeloTTS / Azure 晓晓 fallback**。`synthesizeChunk` 可注入 → 换引擎只换这一个函数。markdown 剥格式+分段=纯代码,**不调 LLM**。**依用户文档实测坑**:SSML `<break>` 无效(停顿靠分段拼静音)、输出裸 MP3 帧流可字节直接拼接、必须缓存(源 hash)。
- **音频拼接/探测** = `ffmpeg`/`ffprobe`(本机已装)。

### 本片做什么 / 不做什么(防范围蔓延)
- ✅ **做**:
  ① **TTS 脚本** `scripts/tts.mjs`:digest → 剥 markdown(`##`/`[[链]]`/`^块ID`/callout/表格标记)→ 按段切 ≤3000 字符 → Azure F0 逐段合成 → ffmpeg 拼成一条 `data/episodes/<id>/audio.mp3`(+ 时长/源文本 hash 元数据)。**带缓存**(同文本不重复计费)。
  ② **详情页播放器** `render.mjs`:集页嵌 HTML5 原生 `<audio>`(Quartz 内),显进度/时长;**音频缺失/加载失败 → 显示不可用态,不卡死页面**。
  ③ **私有播客 feed** `scripts/build-feed.mjs`:生成 `feed.xml`(RSS 2.0 + iTunes 标签),每集一 `<item>` 挂音频 `<enclosure>` + 标题 + 精华简介 + `itunes:duration`。
  ④ **音频闸门** `scripts/gate-audio.mjs`:每发布集必有对应 audio.mp3、时长>0、源文本 hash 与当前 digest 对得上、feed 每个 enclosure 文件真实存在。进 gate-all + `verify:c4`。
- ❌ **不做(留后续切片)**:声音克隆/整集翻译音频(共识明定纯中文短音频);中英原声混排(备选留痕,共识 L47);**上云 R2 托管 + Access 登录门(C7**,本片音频落本地 `data/`,feed 用本地路径);听感升级豆包/MiniMax(听感不满意再说);列表页/搜索(C5)。
- ⚠️ **US-5 部分交付**:验收含「私有 RSS 在 Apple Podcasts 收听」→ 本片产出 **feed.xml 结构 + 本地可校验**,真上云可订阅(需公开 URL + Access)归 **C7**。C4 **不宣称「App 真订到」闭合**,只验 feed 结构正确 + enclosure 指向真实音频。

### 前置核验(未过则停,不闷头往下)
- **P1 edge-tts 真调通 + 中文出声 ✅ 已验(2026-07-18)**:本机 scratchpad venv 真调 edge-tts 7.2.8 → 6 个普通话音色、晓晓 42 字合成 9.9s 真 mp3(24kHz/48kbps)+ VTT 字幕。证据 `docs/c4-p1-edge-tts核验证据.md`。**非官方接口 → 必须缓存 + 失败降级到 fallback 引擎**,不假装它永远可用。
- **P2 分段不吞字**:3900 字精华按段切 ≤3000 后逐段合成再拼,实测**全文无丢字/无重复/段界无爆音**;markdown 标记不被读出来(「井号」「方括号」「脱字符」)。
- **P3 时长合理**:整份精华合成后时长落合理区间(约 10-18 分钟),不是几秒(空壳)也不是异常超长。

### Scenario 1 · 精华→音频(剥格式+分段+合成+拼接)
```
Given 某集 digest.json 已过 C2/C3 闸门在库,Azure key 在 .env(P1 过)
When  [系统] tts.mjs 读 tldr+digest_md → 剥 markdown → 按段 ≤3000 切 → Azure F0 逐段合成 → ffmpeg 拼接
Then  产出 data/episodes/<id>/audio.mp3,时长>0,源文本纯净(无 markdown 标记读音)
And   [幂等] 同一 digest 重跑命中缓存,不重复调 API 计费
  Scenario 1a [边界] 单段>3000 字符:Then 再按句号/换行二次切分,不硬截断句子
  Scenario 1b [异常] Azure 返错(限流 429/额度耗尽/key 失效):Then 停,报用户(附错误码),不产半条音频冒充成功
  Scenario 1c [边界] 含 [[双链]]/^块ID/【背景】callout:Then 剥成纯文本朗读,不读「方括号井号脱字符」
```

### Scenario 2 · 详情页播放器(US-5)
```
Given 集页对应 audio.mp3 已产出
When  [系统] render.mjs 渲染集页,嵌 HTML5 <audio>(路径指向本集 mp3)
Then  详情页有播放器,点 ▶ 播放中文精华配音,浏览器原生显进度/时长
  Scenario 2a [异常·US-5 原文] 音频没生成好/加载失败:Then 播放器显示不可用态或重试,不卡死页面(能继续读文字)
```

### Scenario 3 · 私有播客 feed(US-5)
```
Given 已有若干集音频
When  [系统] build-feed.mjs 生成 feed.xml
Then  RSS 2.0 合规,每集一 <item>:标题/精华简介/发布日期/<enclosure> 指向音频/itunes:duration
And   feed 能被播客 App 解析(结构校验:必填字段齐、enclosure 的 url+length+type 正确)
  Scenario 3a [边界] 某集无音频:Then 该集不进 feed(不挂空 enclosure),不整份报废
```

### Scenario 4 · 音频机器闸门 ★
```
Given 集页/音频/feed 已产出
When  [系统] gate-audio.mjs 校验:
        ① 每个已发布集页必有对应 audio.mp3(缺失=拦,承 gate-all「发布产物必须齐」精神)
        ② audio.mp3 时长>0 且落合理区间;文件非空非损坏(ffprobe 可读)
        ③ 源文本一致性:音频元数据里的 digest hash 与当前 digest 对得上(防「改了精华没重合成」的陈旧音频)
        ④ feed 每个 <enclosure> 指向的音频真实存在、大小>0(防死 enclosure)
Then  任一不过=exit 非 0,禁止静默放行;进 gate-all + verify:c4
And   [自证·变异验证] 每条造真攻击实测被拦(删音频/塞 0 字节 mp3/改 digest 不重合成/feed 挂不存在的 enclosure)
```

### 测试锚点(US-5)
- **主证据=用户亲手**:详情页点 ▶ 真听到中文精华配音(晓晓声)、进度条走;**听感用户自评**。不认 mock 绿。
- **机器闸门=强制门**:gate-audio 进 pre-commit(gate-all)+ `npm run verify:c4`,标 US-5。
- **真测试**:markdown 剥离/分段切分/feed 生成=真调被测函数喂 fixture;Azure 合成用录制小样或 mock(不每次真烧额度),但 **P1 真调一次留证据**。每条闸门变异验证(回退实现→测试挂)。
- ⚠️ **诚实边界**:①音频保真靠 TTS 引擎,闸门只保「音频存在+时长+源文本一致」,保不了「读音准/多音字对」(中文 TTS 多音字是已知软肋,用户听感兜)②本片 feed 用本地路径,真公开订阅需 C7。

### C4 完成 = 怎么算完成(DoD)
1. ⬜ **P1 先验**:Azure key 真调通 F0 合成中文小段,结果落 docs 当证据;调不通则停+报用户(不假装)。
2. ⬜ 两集精华真合成 audio.mp3:剥 markdown+分段+拼接,时长合理、无吞字无 markdown 读音(Scenario 1,P2/P3)。
3. ⬜ 详情页播放器:点 ▶ 真播、显进度/时长;音频缺失时不可用态不卡死(Scenario 2,US-5)。
4. ⬜ feed.xml 生成:RSS 2.0 合规 + 每集 enclosure 指真实音频 + 时长;结构校验过(Scenario 3)。
5. ⬜ 音频闸门真跑:四条各造真攻击实测被拦;进 pre-commit+verify:c4;测试真调被测代码+变异验证(Scenario 4)。
6. ⬜ **用户亲手浏览器验收**:详情页听到中文精华配音、听感认可(晓晓或换声)。
7. ⬜ 结项前技术负债过一遍:音频落本地(上云 R2+Access 归 C7)、听感升级归后续;**红线重提**(音频公开输出→私密性靠 Access,C7 闭合)。
8. ⬜ 里程碑独立对抗审计:`glm-check --kind code` 冷喂,落账本+打裁决。
> ✅ **用户 2026-07-18 明文验收通过(「OK」,含听感认可晓晓声)**,story-map C4 已翻 ✅。

## C5 · 列表页:单集卡流 + 标签筛选 + 搜索(+ ASR 进料口端到端打通)

> 主要故事:**US-1(看最新精华)+ US-2(按标签筛选)+ US-3(搜索)**。真相源 `需求共识.md` US-1/2/3 + 页面 ① 列表页(🔒 第 18 轮定稿)。
> **本片定位=知识入口层**:C1-C4 把「一集怎么读/听」做透了,C5 补「站点首页怎么发现集」——单集卡流是进站第一屏。
> **范围拍板(2026-07-18 用户 AskUserQuestion)= 先做界面 + 打通 ASR 试灌 1 集**:列表页 UI 用现有集就能做能演示;同时打通 ASR 端到端、试灌 1 集没官方稿的(证进料口通,D22)。**灌满 50 集验中文搜索质量单列一个花钱批次**,界面做完再拍板灌多少、何时花钱。
> **前置风险(US-3 地基)**:Quartz 白送的中文搜索质量是官方一面之词、未实测 → P1 先验,搜不出走退路。

### 本片素材/现状
- **已有**:2 集真数据(Modal / Databricks)集页 + 36 实体页 + tags(C3 已产出,US-2 只做筛选界面、不重产 tags)。
- **Quartz 现状(实测 config)**:search(FlexSearch)/ tag-page enabled——搜索/标签页纸面白送,但**中文分词召回 P1 先验**。默认落地页是文件夹列表,**非**单集卡流 → 列表页要**自定义组件**(Quartz 定制收进独立组件,不散改 fork,铁律)。
- **ASR 进料口**:`fetch-source-asr.mjs`(AssemblyAI,含说话人分离)已 P1 真调过(drift #14:国内直连、质量对得上官方稿、无幻觉→无需 VAD),但**「端到端灌一集没官方稿的过全流水线」这步未跑**(commit f71312d 明说「步骤 2 待做」)。

### 本片做什么 / 不做什么(防范围蔓延)
- ✅ **做**:
  ① **列表页单集卡流(US-1)**:站点首页=单集卡流,发布日期倒序;单集卡含封面(兜底节目封面/占位)/ 中文标题 / 嘉宾+身份一句话 / 一句精华语录(视觉焦点)/ 来源 / 日期;无限滚动;**已读压暗、未读正常**(客户端 localStorage);空站友好空状态。收进自定义 Quartz 组件。
  ② **标签筛选(US-2)**:列表页顶部标签条(C3 产出的 tags),点标签只显示带该标签的卡 + 可清除的筛选条件;清除恢复全部最新排序;筛无结果显示「没有匹配的集」+ 一键清除。
  ③ **搜索(US-3)**:顶栏搜索框(各页可达),搜标题 / 人物 / 概念,返回命中结果;无结果显示「没找到相关内容」不报错。
  ④ **知识库导航入口(轻量)**:☰/顶栏链到 C3 实体页 / C6 图谱(🔒 第 16 轮「实体入口收进导航菜单」)——只做链接,不新建独立名录页。
  ⑤ **ASR 端到端试灌 1 集(D22 收口)**:选一集没官方稿的真访谈 → `fetch-source-asr` 真调 AssemblyAI 出 transcript.en.json → 走既有全流水线(全译→浓缩→三联/事实/实体闸门→集页→音频)→ 证「没官方稿的集也灌得进来」。key 用户自持、运行时现读。
  ⑥ **列表页 verify** `verify:c5`:卡片字段齐 / 排序正确 / 标签筛选逻辑 / 搜索索引含中文 / 0 死链。
- ❌ **不做(留后续/单列)**:
  - **灌满 50 集**(中文搜索质量的规模大验收)→ **单列一个花钱批次**,界面 + ASR 试灌做完、用户看过再拍板灌多少、何时花钱(粗估几十~上百元 GLM + ASR)。
  - 独立知识库名录页(人物/公司/概念索引页)→ 复用 C3 实体页;独立名录页留后续评估。
  - AI 语义搜索 / 推荐(共识 🔒 只显式关联);上云 Workers 定时 + Pages + Access(C7)。

### 前置核验(未过则停,不闷头往下)
- **P1 中文搜索真能用(US-3 地基)**:真 build 站,用中文词实测 Quartz 白送搜索——搜「智能体」「投机解码」「开源」等真能命中对应集/实体?分词/召回像不像样?**搜不出或召回差 → 停 + 报用户 + 记 drift + 定退路**(调 FlexSearch 中文配置 / 降级到标题+实体名精确匹配 / 换搜索方案)。装着≠好用,踩过 Bases/图谱坑先验。
- **P2 ASR 端到端真跑通(D22)**:选定的无官方稿集,`fetch-source-asr` 真调 AssemblyAI 出稿 → 格式与官方稿一致、过既有 gate → 全流水线真跑到出集页+音频。**卡在哪停在哪报**(附错误+债号),不假装灌进来了。

### Scenario 1 · 单集卡流(US-1)
```
Given 已有若干集处理完成(现 2 集,+ASR 试灌后 3 集)
When  我打开站点首页
Then  默认按发布日期倒序显示单集卡流(封面/中文标题/嘉宾+身份/一句精华语录/来源/日期)
And   已读的卡片整体压暗、未读正常(客户端 localStorage 记已读)
  Scenario 1a [异常·US-1 原文] 空站(一集都没有):Then 显示友好空状态(「还没有内容,订阅源更新后自动出现」),不是空白页
  Scenario 1b [边界] 无封面图:Then 兜底节目封面/占位图,卡片不塌
  Scenario 1c [边界] 精华语录过长:Then 截断显示(不撑破卡片),点进详情页看全
```

### Scenario 2 · 标签筛选(US-2)
```
Given 列表页顶部有标签条(C3 产出的 AI 自由 tags)
When  我点某个标签(如 #智能体)
Then  列表只显示带该标签的单集卡,顶部显示可清除的筛选条件
When  我点「清除」
Then  恢复全部、最新排序
  Scenario 2a [异常·US-2 原文] 筛选无结果:Then 显示「没有匹配的集」+ 一键清除筛选,不空白
```

### Scenario 3 · 搜索(US-3)
```
Given 顶栏有搜索框(各页可达)
When  我输入关键词(标题/人物/概念)
Then  返回标题/人物/概念命中的结果
  Scenario 3a [异常·US-3 原文] 搜索无结果:Then 显示「没找到相关内容」,不报错
  Scenario 3b [前置] 中文搜索质量:P1 已验能用;若召回差按退路降级(记 drift)
```

### Scenario 4 · ASR 端到端试灌 1 集(D22 收口)
```
Given 选定一集没官方稿的 Latent Space 真访谈,AssemblyAI key 在 .env(用户自持)
When  [系统] fetch-source-asr 真调 AssemblyAI(含说话人分离)出 transcript.en.json → 走既有全流水线
Then  该集出 transcript(格式同官方稿、过既有 gate)→ 全译 → 浓缩 → 过三联/事实/实体闸门 → 集页 markdown → 音频
And   证「没官方稿的集也灌得进来」(D22 进料口缺口收口);说话人分离结果供用户点头(防张冠李戴)
  Scenario 4a [异常] AssemblyAI 返错/额度/key 失效:Then 停,报用户(附错误),不产半截稿
  Scenario 4b [边界·铁律] 转写有幻觉/静音无中生有:Then P1 已验 AssemblyAI 无此问题(非 Whisper,drift #14);若实测有则补 VAD(铁律针对 Whisper 写)
```

### Scenario 5 · 列表页 verify(verify:c5)
```
Given 列表页+标签+搜索已产出
When  [系统] verify:c5 校验
Then  ① 单集卡字段齐(标题/嘉宾/精华语录/来源/日期,每张卡可溯源到某集 digest)
      ② 排序=发布日期倒序
      ③ 标签筛选:点标签后列表真只剩带该 tag 的集(逻辑真调)
      ④ 搜索索引真含中文内容(标题/人物/概念进索引)
      ⑤ 0 死链(卡片/标签/搜索结果的链接都有对应页)
And   列表页以前端渲染为主,机器覆盖能覆盖的;前端交互(无限滚动/筛选/搜索)靠用户亲手点验
```

### 测试锚点(US-1 / US-2 / US-3)
- **主证据=用户亲手**:打开首页看卡流、点标签筛选、搜中文词看命中、点卡进详情页。**中文搜索质量用户亲自搜几个词判**。不认 mock 绿。
- **机器 verify**:verify:c5(卡片字段/排序/筛选逻辑/搜索索引/死链);列表页以前端渲染为主,可机器覆盖的覆盖,前端交互靠用户点验。
- **真测试**:卡片数据提取/排序/标签筛选逻辑=真调被测函数喂 fixture;ASR 进料口已有 12 测试(fetch-source-asr.test)。
- ⚠️ **诚实边界**:①**中文搜索质量的规模验收要灌 50 集**才充分(本片先 2-3 集证机制通,50 集大验收单列花钱批次)②已读压暗是客户端 localStorage(换设备/清缓存会重置,非账号级)③列表页前端交互机器难全覆盖,靠用户亲手点。

### C5 完成 = 怎么算完成(DoD)
1. ✅ **P1 先验**:中文搜索真能用(浏览器实测「智能体」「投机解码」精准命中/排序/高亮),证据 docs/c5-p1-中文搜索核验证据.md。
2. ✅ **P2 ASR 端到端**:the-lab 试跑 AssemblyAI→全译→浓缩→9 金句过三联→22 实体 0 编造→配音→跨集关联,机器端到端通(证据 docs/d22-p2-asr端到端试灌证据.md);the-lab 有官方稿 → ASR 版 throwaway 已清理。真无稿集规模验收 = 单列灌量批次。
3. ✅ 单集卡流:首页发布日期倒序卡流,字段齐、已读压暗(localStorage,浏览器实测跨 SPA 存活)、空状态(Scenario 1,US-1)。
4. ✅ 标签筛选:点标签收窄 + 可清除 + 无结果提示(浏览器实测全周期通,Scenario 2,US-2)。
5. ✅ 搜索:顶栏搜索框各页可达 + 中文搜索 P1 实测(Scenario 3,US-3)。
6. ✅ 列表页 verify:c5 真跑(卡片字段/排序/标签/0 死链/搜索索引中文全绿)+ build-list 8 单测(Scenario 5)。
7. ✅ **用户亲手浏览器验收**(2026-07-18「界面我看了,没有问题」);随后过独立交付物审计逮到 F1 已读压暗真 bug → 已修 + 浏览器 round-trip 复验(D40)。
8. ✅ 结项前技术负债对账:D22 标 🟢 机器端到端已还;新登记 D37(ASR 长全名归一化)/ D38(内联脚本零覆盖)/ D39(搜索文案/空态)/ D40(F1 已还);D24/D30/D32 + 中文搜索规模质量 + 灌满 50 集 + ASR 选型(CF)= 单列灌量批次。红线(密钥)守住:AssemblyAI key 全程不入对话/不入库。
9. ✅ 里程碑独立对抗审计:GLM 018(--kind code)5 条全 noise(已核);+ 独立交付物审计子 agent(用户要求)逮到 F1 已修、其余记账。

## C6 · 关联导航:相关单集 + 局部关系图 + 全局图谱页

> 主要故事:**US-7(顺藤摸瓜相关单集)+ US-9④(实体页关系图)+ US-10(全局图谱漫游)**。真相源 `需求共识.md` US-7/9/10 + 页面 ④ 图谱页。
> **本片定位=串联收尾层**:C3 把实体页/关联区①/双链立起来了,C6 补完「集↔集相关」+「关系图可视化」,让知识网从「能点」变成「能漫游」。
> **核心认知(共识 ③.7)**:关系图/反链「白送」的前提是流水线真写了显式链接——C3 已写 [[双链]],C6 验证并补「相关单集」这层聚合。
> **地基已拍板**:相关单集由流水线生成期按 frontmatter 聚合(**ADR 0008**,不押 Bases,drift #1)。

### 本片素材/现状
- **已有**:两集集页(类型化 frontmatter [[双链]] + 关联区①)+ 36 实体页(`build-entities.mjs` 的 `related()`=实体↔实体共现)。
- **Quartz 插件现状(实测 config)**:graph(右栏)/backlinks(右栏)/search/explorer 均 enabled——局部图/反链纸面白送,但「渲不渲得出」**P1 先验**。
- **缺口**:①**集↔集「相关单集」聚合(US-7)没有**——`related()` 只算实体↔实体,没有「同嘉宾/同概念/同公司的其他集」②US-9④ 关系图(C3 明确留给 C6)③全局图谱页(US-10)。

### 本片做什么 / 不做什么(防范围蔓延)
- ✅ **做**:
  ① **relatedEpisodes 聚合**(`build-entities.mjs` 或新脚本):按 frontmatter 的 guests/companies/concepts **交集**,算每集的「相关单集」+ 关联原因(同嘉宾 X/同概念 Y/同公司 Z),**写进集页 markdown**(生成期,不依赖运行期插件查询,ADR 0008)。
  ② **render.mjs 集页补**:关联区③「相关单集」(按同嘉宾/同概念/同公司分组,各注原因,点跳)+ 关联区②局部关系图(Quartz 白送的右栏 graph)。
  ③ **全局图谱页(US-10)**:Quartz graph 全局视图,全库人/公司/概念/集节点,可搜/筛/点/缩放拖拽。
  ④ **关联闸门** `scripts/gate-relations.mjs`:相关单集重算逐字比对(防漂移)+ 0 死链 + 分组正确性(同嘉宾组里的集真共享该嘉宾)。进 gate-all + `verify:c6`。
- ❌ **不做**:AI 语义相关推荐(关联只靠显式双链+属性,共识第 13 轮 🔒);列表页/标签筛选 UI/搜索(C5);上云(C7);ASR 兜底(C5 前面对)。

### 前置核验(未过则停)
- **P1 Quartz 图谱真渲染**:真 build 站,实测 ①集页局部图(右栏 graph)真出该集邻域(连着的实体/集)②全局图谱页真出全库关系网、可交互。**渲不出/空图 → 停 + 报用户 + 记 drift**,走退路(局部图省略、相关单集纯文本列)。装着≠渲得出,踩过 Bases 坑先验。

### Scenario 1 · 相关单集聚合(US-7)
```
Given 两集集页带类型化 frontmatter([[双链]] guests/companies/concepts)
When  [系统] 按 frontmatter 交集算每集相关单集 + 关联原因
Then  集 A 的相关单集列出与它共享嘉宾/概念/公司的集 B,注明原因(如「同聊智能体」「同嘉宾 swyx」)
And   [生成期] 写进集页 markdown,不依赖运行期插件查询(ADR 0008)
  Scenario 1a [异常·US-7 原文] 这集没任何相关集(首个入库/无交集):Then 关联区③隐藏或显示「暂无相关集」,不留空框
  Scenario 1b [边界] 两集仅共享泛概念(都提「AI」):Then 关联原因具体到实体名;可设阈值,泛到无意义的共享不算(避免全站互相「相关」)
```

### Scenario 2 · 集页关联区②③(US-7)
```
Given 相关单集已聚合、Quartz 图谱 P1 过
When  [系统] render.mjs 渲染集页
Then  底部关联区③「相关单集」按同嘉宾/同概念/同公司分组,各注原因,点跳目标集
And   关联区②局部关系图显示本集邻域(实体/相关集),点节点跳转
  Scenario 2a [异常] 相关集页不存在(死链):Then 闸门拦(Scenario 4),不渲染死链
```

### Scenario 3 · 全局图谱页(US-10)
```
Given 全库集页+实体页都带 [[双链]]
When  [系统] 进图谱页
Then  显示全库力导向关系网,人/公司/概念/集不同色,可搜节点/按类型筛/点节点进实体页/缩放拖拽
  # US-10 价值存疑(共识第 25 轮):Quartz 白送、先做后看、跑一阵用户自评、不看再撤
```

### Scenario 4 · 关联机器闸门 ★
```
Given 集页相关单集+关联区已产出
When  [系统] gate-relations.mjs 校验:
        ① 相关单集重算:同代码从 frontmatter 重算相关集,与集页里写的逐字比对,对不上即拦(承 C2/C3 反攻手法,防手改/陈旧)
        ② 0 死链:相关单集/关联区每个 [[X]] 都有对应页(复用 gate-entities 死链逻辑防漂移)
        ③ 分组正确性:「同嘉宾」组里每个集真共享该嘉宾(关联原因不能造假)
Then  任一不过=exit 非 0;进 gate-all + verify:c6
And   [自证·变异验证] 造真攻击实测被拦(手改相关集塞不共享的集/链到不存在页/伪造关联原因)
```

### 测试锚点(US-7 / US-9④ / US-10)
- **主证据=用户亲手**:集 A 详情页 → 点「相关单集」→ 跳集 B;进图谱页 → 点节点 → 落实体页。不认 mock 绿。
- **机器闸门=强制门**:gate-relations 进 pre-commit + `verify:c6`,标 US-7。
- **真测试**:相关单集聚合/分组=真调被测函数喂 fixture;每条闸门变异验证。
- ⚠️ **诚实边界**:①US-10 全局图谱「价值存疑先做后看」,交付可交互图谱,价值判断留用户自评 ②相关单集靠显式共享实体,C3 抽漏的实体会漏关联(受 C3 抽取召回率制约,非本片能兜)③两集数据量小,「漫游」价值要灌更多集(C5)才充分显现——本片证机制通,不证规模价值。

### C6 完成 = 怎么算完成(DoD)
1. ⬜ **P1 先验**:Quartz 局部图+全局图真 build 实测渲染,结果落 docs;渲不出走退路+记 drift。
2. ⬜ relatedEpisodes 聚合:两集按 frontmatter 交集算相关单集+具体关联原因,写进集页(Scenario 1)。
3. ⬜ 集页关联区②③:相关单集分组+原因+点跳、局部关系图(Scenario 2,US-7)。
4. ⬜ 全局图谱页:全库关系网可搜/筛/点/缩放(Scenario 3,US-10)。
5. ⬜ 关联闸门真跑:相关单集一致性+0 死链+分组正确,各造真攻击实测被拦;进 pre-commit+verify:c6+变异验证(Scenario 4)。
6. ⬜ **用户亲手浏览器验收**:相关单集跳转+图谱漫游链路走通;US-10 价值用户自评(不看可撤)。
7. ⬜ 结项前技术负债过一遍:US-9④ 关系图还清(C3 留的)、US-7 还清;相关单集召回受 C3 抽取制约记账。
8. ⬜ 里程碑独立对抗审计:`glm-check --kind code` 冷喂,落账本+打裁决。
> ✅ **用户 2026-07-18 明文验收通过(「OK」)**,story-map C6 已翻 ✅。

---

## C7a · 能看能听:Pages 公开部署(站点+音频)→ feed 真可订阅

> 主要故事:**US-4(站点上云、公开可访问)+ US-5(RSS 在 Apple Podcasts 等真收听)**。真相源 `需求共识.md` 产品轮廓输出层(L188-206)+ US-5 `And`(L277)+ CONSTRAINTS ①⑥(L31 全云端 / **⑥ 已改:站点完全公开、无 Access,版权公开自担 — drift #17 · ADR 0010**)。
> **本片定位=上云第一子片(drift #15 拆片)**:把 C1–C6 本地跑通的成品**搬上云、让手机能读、播客 App 能听**。不重新生成任何内容,只做部署 + feed 可订阅。**无人值守(Workers 定时)= C7b;运维硬化(CI/告警/回滚/钉版本/CDN 自托管)= C7c。**
> **⚠️ 去 Access(drift #17 · ADR 0010)**:原计划的 Cloudflare Access 登录门=**过度设计**(「小圈子私有」是受众定位、非访问加密),已删。**站点完全公开可访问**,播客 feed + 音频天然可达 → 原「私密 vs 播客可订阅」矛盾消失、**D33 直接闭合**。版权敞口扩大到公开二次分发,**用户 2026-07-19 明文接受自担**。
> **⚠️ 去 R2(drift #18)**:R2 未启用(code 10042,开通要绑卡)且对「每集 ~3.5MB、公开」这规模是过度设计 → **音频改随 Pages 静态部署**(同域公开、播客 App 照订);R2 是否用于存档层(D7)留 C7c。
> **交互式部署(drift #15 Q2)**:凡需登录 Cloudflare / 建资源的步骤,**用户在自己终端执行**(`wrangler login` 走 OAuth、凭证只在用户机器),Claude 写好每条命令+配置、逐步指挥+一起核验结果;**Claude 全程不碰凭证明文**(项目红线)。
> **域名(drift #15 Q4 → 已换,drift #19)**:~~listen.hearagain.space~~ → **`voice.solomind.cc`**(用户 2026-07-19 买 solomind.cc 接入 CF、定子域 voice);Pages 项目 `voice-solomind`(旧 listen-hearagain 已删)。下文历史措辞里的 listen.hearagain.space 一律以此为准。

### 本片做什么 / 不做什么(防范围蔓延)
- ✅ **做**:
  ① **wrangler ✅ 已装**(4.112.0,项目 devDep,D2 还)+ 写 wrangler 配置(Pages)。
  ② **音频随 Pages 静态 + 闭合 D33**(不用 R2,drift #18):两集 `audio.mp3` 放进随站点部署的静态目录(build 产物 `public/audio/<id>.mp3`)→ `build-feed.mjs` 的 `<enclosure url>` 从仓库相对路径换成 **站点公开 URL**(`https://listen.hearagain.space/audio/<id>.mp3`);F1 修的 `feedEnclosuresFromXml`「http(s) 跳过」逻辑改成**真校验 URL 可达**(D33/D34)。
  ③ **Pages 公开部署(含音频)**:Quartz build 产物(带上音频)→ `wrangler pages deploy`(C7a 用直传,GitHub 连接部署归 C7c);绑 `listen.hearagain.space`。
  ④ **部署后真行为验收**(D34 的真请求,非 existsSync 代理):站点公开可访问 + 音频 URL curl 200 + 播客 App 真订到 feed、真播出音频。
- ❌ **不做(留后续)**:Workers 定时轮询 + 全自动流水线(**C7b**);GitHub 远端+分支保护+CI / 失败告警 / 免费额度告警 / 回滚演练 / 钉插件版本 D21 / 前端库(pixi/d3/katex/mermaid)自托管 D36(**C7c**);存档层 transcript/translation 备份 + **R2 是否启用**(C7a 音频走 Pages 不需 R2)→ **C7c** 定(drift #18)。**Access 登录门:已删、不做(drift #17)。**
- 📌 **收录**:用户选「完全公开、可被搜索引擎收录」→ 不加 noindex;sitemap/收录优化按需归 C7c(C7a 先保证能访问 + 能订阅)。

### 前置核验(未过则停,不闷头往下)
- **P1 wrangler 可用 + 用户 CF 账号可登录 ✅(2026-07-19)**:wrangler 4.112.0 装(项目 devDep);用户 `wrangler login` OAuth 成功(roysunzy@gmail.com)。**R2 未启用(code 10042)→ drift #18 改音频随 Pages 静态、不用 R2。**
- **P2 音频公开可达**(部署后验):音频随 Pages 部署后,**站点 URL `https://listen.hearagain.space/audio/<id>.mp3` 真 `curl` 200 且拉到完整 mp3**(字节数对得上),不是 `existsSync` 代理。

### Scenario 1 · 装 wrangler + 用户登录 Cloudflare(人机边界:凭证不碰)✅
```
Given P1 待过
When  [系统] Claude 写好命令:项目内 npx 装 wrangler、`wrangler login`、`wrangler whoami`
And   [用户] 在自己终端执行 login(浏览器 OAuth 授权,凭证只在用户机器)
Then  wrangler 可用、whoami 列出用户 CF 账号;Claude 全程不接触 token/password 明文
  Scenario 1a [异常] login 失败/账号无 Pages 权限:Then 停,报用户(附提示),不伪造「已登录」
  Scenario 1b [实况 2026-07-19] R2 未启用(code 10042):Then 不折腾开通/绑卡,改音频随 Pages 静态(drift #18)
```

### Scenario 2 · 音频进 Pages 静态 + feed enclosure 换站点 URL(闭合 D33)
```
Given wrangler 可用(Scenario 1 过),两集 audio.mp3 在 data/episodes/<id>/
When  [系统] 把两集 audio.mp3 放进随站点部署的静态目录(build 产物 public/audio/<id>.mp3)
And   [系统] build-feed.mjs 的 <enclosure url> 改指站点公开 URL;feedEnclosuresFromXml 改真校验可达
Then  feed.xml 每个 enclosure 的 url 是站点公开网址(非仓库相对路径),部署后真 curl 200 拉到完整 mp3
And   [D33 闭合] 死 enclosure 校验对着真 URL 生效,不再是本地路径占位
  Scenario 2a [异常] 音频没进 build 产物 / URL 404:Then 停报用户,不把仓库路径冒充成可达地址
```

### Scenario 3 · Pages 公开部署(站点+音频)+ 绑域名(US-4)
```
Given Quartz build 产物就绪(灌全 samples + 音频进 public/audio,本地 `build` 通)
When  [系统] Claude 写 `wrangler pages deploy` 命令;[用户]执行部署;绑 listen.hearagain.space
Then  部署成功,listen.hearagain.space 公开可访问(无需登录即返回站点);音频 URL 公开可取
  Scenario 3a [异常] 部署报错(构建/绑定/DNS):Then 停报用户(附错误),不宣称「已上线」
```

### Scenario 4 · 里程碑 E2E:手机能读 + 播客 App 能听(US-4 / US-5)
```
Given 站点+音频已公开部署 + feed 可达
When  [用户] 手机浏览器打开站点读一集;[用户] 播客 App(Apple Podcasts/Overcast)按 feed URL 订阅
Then  手机直接能读中文精华(无登录门);播客 App 真订到节目、真播出音频(US-5 L277 And 闭合、D33 真闭合)
  Scenario 4a [异常] 站点/音频访问不到:Then 停报用户,不宣称「上线可用」
  # 里程碑规矩:用户亲手在真手机 + 真播客 App 验收,不认机器绿/不认 curl 代理
```

### Scenario 5 · feed.xml 随部署产物上线且源头可达(回归防护 · drift #29)
```
Given 部署步骤已把音频补进 data/episodes/<id>/audio.mp3(deploy step 0)并 cd 进 site/
When  [系统] deploy 在 wrangler 前跑 build-feed.mjs --out public/feed.xml,并写 public/_headers 给 feed 配短缓存
Then  public/feed.xml 真存在且 <enclosure> 数>0(否则 exit 非 0 拒绝部署,不放行「无 feed」的产物)
And   部署后源头(cache-buster 绕 CDN)curl /feed.xml 返 200、含本轮已发布集的 enclosure
And   feed.xml 的 Cache-Control 短(≤1h),新集对播客 App 及时可见——不被 s-maxage=7d 边缘缓存冻住
  Scenario 5a [回归根因·实况 2026-07-20] deploy 只拷音频、没生成/拷 feed.xml → public/ 无 feed:
    Then  部署前断言拦下(exit 非 0),不静默部署出「源头 feed 404、线上只剩 34h CDN 幽灵」的站(C7b/C8 重构部署步骤时漏掉 feed 拷贝正是此洞)
```

### 测试锚点(US-4 / US-5)
- **主证据=用户亲手真设备**:手机浏览器打开站点读 + 播客 App 真订真听。**不认 mock 绿、不认 existsSync 代理**(D34 教训:真请求)。
- **feed 上线回归机器闸门(新增,Scenario 5)**:deploy 在 wrangler 前硬断言 `public/feed.xml` 存在且 enclosure>0,不满足即 exit 非 0 拒绝部署——把「feed 是否随站点上线」从「靠人 curl 记得查」升级成机器卡死。
- **机器可覆盖的**:feed enclosure 是站点 URL(部署后真 curl 200 拉全 mp3)、feedEnclosuresFromXml 真校验可达进 gate-audio/verify;站点公开可访问靠部署后真 curl 200 验。
- ⚠️ **诚实边界**:①播客 App 订阅属**部署态真行为**,本地脚本够不着 → 靠里程碑人工验收 + 如实记「哪些人工核过、哪些是代理」②音频随 Pages 静态(不用 R2,drift #18);存档层备份归 C7c③公开站下前端外链 CDN 泄漏(D36)C7a 记账不修,归 C7c。

### C7a 完成 = 怎么算完成(DoD)
1. ✅ **P1/P2**:wrangler 4.112.0 装 + 用户 login(Claude 不碰凭证);部署后音频 `voice.solomind.cc/audio/<id>.mp3` 真可取(pages.dev 侧 curl 200 + content-type audio/mpeg;自定义域因代理传播 Claude 侧 curl 滞后,以用户真机验收为准)。
2. ✅ 音频进 Pages 静态(`public/audio/`)随站点部署;feed enclosure 换 `voice.solomind.cc` 公开 URL、feedEnclosuresFromXml 真校验(D33 闭合,Scenario 2)。
3. ✅ Pages 公开部署成功(项目 `voice-solomind`)、绑 `voice.solomind.cc`(删重加解 SSL undefined)、无登录门可访问、音频 URL 可取(Scenario 3,US-4)。
4. ✅ **用户亲手真设备验收(2026-07-19「1,2,3 都 OK」)**:首页 2 卡 / 集页中文精华+🎧音频真播 / 播客 App 订阅真播(里程碑 E2E,US-4/US-5,Scenario 4)。
5. ✅ 技术负债对账:D2 还(wrangler 装)/ D33 闭合(feed 真可订阅、播客 App 订到)/ D7 存档层 R2 留 C7c / D34 部分(App 靠人工核);**红线重提**:密钥全程没碰(OAuth 在用户机器)/ **版权公开自担(用户明文,drift #17)**。新账:换域名+项目(drift #19);site/quartz.config baseUrl 改动未入库(gitignore,归 C7c/D21)。
6. ⬜ 里程碑独立对抗审计:C7a 代码改动极小(SITE_URL 值改 + 部署操作,无逻辑变更)→ **glm-check 价值有限,待与用户确认豁免或轻量跑一次**。
> ✅ **C7a 完成**(用户 2026-07-19 亲手真设备验收);story-map C7a 已翻 ✅。DoD #6 glm 审计待用户拍豁免。

## C7b · 无人值守:GitHub Actions cron 定时跑现有流水线 → 全自动发布

> 主要故事:**全部 US(把 C1–C7a 手动跑通的整条流水线变成无人值守自动发布)**。真相源 `需求共识.md` 产品轮廓 L206(🔒 已改:定时执行环境 CF Workers → **GitHub Actions cron**,drift #21 · ADR 0012)。
> **本片定位=上云第二子片(drift #15 拆片)**:C7a 已把成品搬上云、能看能听;C7b 让它**自己长出新集**——定时轮询 RSS、发现新集就跑完整条流水线、闸门全过就自动部署到 voice.solomind.cc,**无人值守、不等人**。
> **⚠️ 全自动发布 = 用户知情下的明文例外(drift #20 · ADR 0011)**:坏稿可能未被闸门拦即直达完全公开的站、发布前无人复核,与「里程碑亲手验收」纪律冲突。用户 2026-07-19 第二次知情确认、**风险自担**。Claude 工程兜底(不违背全自动):①闸门做到最严 ②发布后自动通知用户 + 一键回滚 ③定点重写回路是无人值守唯一失真自愈手段 ④失败告警(部分归 C7c)。**这是「亲手验收」纪律仅限 C7b 自动发布的明文例外,其他切片仍须人工验收。**
> **执行环境 = GitHub Actions cron(drift #21 · ADR 0012)**:CF Workers 跑不了 ffmpeg/quartz build/glm-ask CLI/本地 fs → 用 GitHub Actions Linux runner 复用现有 26 脚本、cron 定时、免费、机器在墙外绕开 GFW。**内容托管仍 CF Pages**(voice.solomind.cc;国内访问不保证稳,用户知情继续)。
> **仓库 = 单个公开仓、代码+数据同仓(drift #22)**:Actions 对公开仓无限免费;**去重状态靠 data/ 目录 commit 回仓库**(某集处理过=仓库里已有其 `data/episodes/<id>/`)。**cron = 一天一次(drift #22)。**
> **红线**:GLM/ASR key 走 **GitHub Secrets**(用户自持、Claude 不碰明文,不进公开仓库);版权公开自担续 C7a(drift #17)。

### 本片做什么 / 不做什么(防范围蔓延)
- ✅ **做**:
  ① **建 GitHub 公开远端仓库 + push**(顺带还 C7c 的 GitHub 远端;`.env`/`site` 等已 gitignore 的不入库);GLM/ASR key 配 GitHub Secrets。
  ② **写编排脚本 `scripts/run-pipeline.mjs`**(现无端到端编排器,只有单步脚本且 `gate`/`verify:c2` 硬编码集目录):取 RSS → **去重判有没有新集**(比对 `data/episodes/` 已存在的 id)→ 对每个新集顺跑 fetch-source(有官方稿)/ fetch-source-asr(无稿兜底)→ translate → condense → judge-quotes → gate(三联)→ extract-entities → build-entities → gate-entities → render → tts → gate-audio → build-feed → build-list → build-pages → quartz build → **gate-all 全过**才算这集成。
  ③ **写 `.github/workflows/pipeline.yml`**:`schedule: cron`(一天一次)+ 手动 `workflow_dispatch` → checkout → 装 ffmpeg + node deps + quartz → 跑 `run-pipeline.mjs` → **闸门全过**才 `wrangler pages deploy`(用 CF API token,存 Secrets)→ **把新集 data/ commit 回仓库**(去重状态持久化)→ 通知。
  ④ **发布后通知 + 一键回滚**(安全网,drift #20):发布成功/失败都通知用户(默认 GitHub 原生邮件,渠道可换);回滚=CF Pages 保留部署历史,一条命令/一次操作回上一版。
- ❌ **不做(留 C7c 运维硬化)**:分支保护 + PR CI 门 / 失败告警的富渠道(超出 GitHub 原生邮件)/ 免费额度告警 / R2 备份口径 / 回滚演练脚本化 / 钉插件版本 D21 / 前端库自托管 D36 / 存档层 transcript+translation 备份。**半自动待发布草稿:用户已明选全自动、不做(drift #20)。**

### 前置核验 P1(未过则停,先验后写——踩过 Bases/Workers 纸面坑)
- **P1a runner 海外真调智谱 GLM 一次**:GitHub Actions runner(海外)真发一次 GLM-5.2 请求,验**可达 + 速度**(中国防火墙不挡"从国外访问国内 API",但要实测确认、量速度)。不可达/太慢 → 停,报用户重定方案(如自托管 runner)。
- **P1b runner 真装 ffmpeg + 端到端跑一集不崩**:Actions 环境真 `apt install ffmpeg` + 装 node/quartz + 跑一集完整流水线(取现有一集或一集真新集)到 gate-all 过、build 出产物,证明 26 脚本在 Linux runner 上真能跑通(本地是 macOS,平台差异先验)。崩 → 停报用户,不假装能跑。

### Scenario 1 · 建公开仓库 + push + 配 Secrets(人机边界:凭证不碰)
```
Given 项目本地 git 仓库(main),无 GitHub 远端
When  [系统] Claude 写好命令:建公开仓库、加 remote、push;[用户] 在自己终端执行(或 Claude 用已授权的 gh)
And   [用户] 在 GitHub 仓库 Settings 配 Secrets(GLM key / ASR key / CF API token),Claude 只说要配哪几个、不碰明文值
Then  公开仓库有全部代码+数据、main 已 push;Secrets 就位;.env 等敏感文件确认没进仓库
  Scenario 1a [异常] push 含不该公开的东西(.env/key):Then 停,先修 gitignore/清历史,不把密钥推上公开仓
```

### Scenario 2 · 编排脚本:RSS 去重 → 新集跑完整链 → gate-all 全过
```
Given run-pipeline.mjs 就绪,data/episodes/ 有已处理集(去重基线)
When  [系统] 跑 run-pipeline.mjs:取 RSS,列出所有集,滤掉 data/episodes/ 已存在 id 的
Then  只对「真·新集」跑流水线;无新集时干净退出(exit 0,不空跑不报错)
And   每个新集顺跑 fetch→translate→condense→judge→gate→entities→render→tts→gate-audio→build-*→quartz build→gate-all,全过才标该集成
  Scenario 2a [异常] 某集某步失败/闸门拦(坏稿):Then 该集不发布、记原因;不把半成品/坏稿混进部署产物
  Scenario 2b [异常] 无官方稿:Then 走 fetch-source-asr 兜底(ASR + 防失真三联照旧);ASR 也失败则该集跳过记账
```

### Scenario 3 · Actions workflow:cron 定时 → 装环境 → 跑链 → 闸门全过才部署
```
Given .github/workflows/pipeline.yml 就绪,Secrets 配好
When  [系统] cron 触发(一天一次)或 workflow_dispatch 手动触发 → checkout → 装 ffmpeg+node+quartz → 跑 run-pipeline.mjs
Then  有新集且 gate-all 全过 → wrangler pages deploy 到 voice.solomind.cc → 新集 data/ commit 回仓库(去重持久化)→ 通知用户
And   [关键] 闸门没全过 / 无新集 → 不部署(不拿旧产物或坏稿覆盖线上)
  Scenario 3a [异常] 装环境/部署失败:Then workflow 红、发失败通知,不静默;线上保持上一版不动
  Scenario 3b [关键] 全自动例外(drift #20):部署无人工复核闸门,靠 gate-all + 定点重写兜底;发布后通知 + 可回滚
```

### Scenario 4 · 里程碑 E2E:真跑一次自动发布 + 通知 + 回滚可用
```
Given 全套就绪(仓库/Secrets/workflow/编排器,P1 已过)
When  [系统] 手动触发(workflow_dispatch)一次真跑,或等一次真 cron;喂一集真新集(真 RSS→真转写→真闸门→真部署)
Then  新集自动出现在 voice.solomind.cc(用户真设备打开能读能听)+ 用户收到发布通知 + 演示一键回滚能撤回该次发布
  Scenario 4a [异常] 自动发布出坏稿:Then 通知里能看出、一键回滚撤下;记录闸门为何没拦(补闸门或记 tech-debt)
  # 里程碑规矩:C7b 自动发布是「亲手验收」的明文例外,但首次真跑仍由用户在真设备确认结果 + 验回滚真能用
```

### 测试锚点(全部 US)
- **主证据=真跑一次自动发布**:workflow_dispatch/cron 真触发,新集真上 voice.solomind.cc,用户真设备核。**不认 mock 绿**。
- **机器可覆盖的**:run-pipeline 去重逻辑(单测:已存在 id 被滤、新 id 进链)、gate-all 全过才部署的门(workflow 逻辑 + 干跑验证「闸门不过则不 deploy」)、无新集干净退出。
- **P1 前置**:runner 海外真调 GLM(P1a)+ 真装 ffmpeg 端到端跑一集(P1b),证据落 `docs/c7b-p1-*.md`。
- ⚠️ **诚实边界**:①全自动发布=用户明文例外(drift #20),坏稿可能直达公网,靠 gate-all+定点重写兜底、发布后通知+回滚补救,**不宣称零失真** ②国内访问 voice.solomind.cc 不保证稳(CF 免费无境内节点+GFW,C7a 已交底)③富告警/额度告警/分支保护归 C7c。

### C7b 完成 = 怎么算完成(DoD)
1. ⬜ **P1a/P1b 过**:runner 海外真调 GLM 可达(附速度)+ 真装 ffmpeg 端到端跑一集到 gate-all 过(证据落盘)。
2. ⬜ 公开仓库建好 + push,Secrets 配好,`.env`/key 确认没进仓库(Scenario 1)。
3. ⬜ `run-pipeline.mjs` 编排器:RSS 去重 + 新集跑完整链 + gate-all 全过才标成,单测覆盖去重逻辑(Scenario 2)。
4. ⬜ `.github/workflows/pipeline.yml`:cron 一天一次 + 手动触发,闸门全过才 deploy,新集 data/ commit 回仓库,发布/失败通知(Scenario 3)。
5. ⬜ 发布后通知 + 一键回滚验真能用(Scenario 4 安全网,drift #20)。
6. ⬜ **里程碑 E2E**:真跑一次自动发布,新集真上线、用户真设备验收 + 回滚演示(Scenario 4)。
7. ⬜ 技术负债对账 + **红线重提**:GLM/ASR key 全程走 Secrets 没进公开仓/Claude 没碰明文;版权公开自担(drift #17);全自动例外风险已交底(drift #20)。C7c 明确剩:分支保护+CI/富告警/额度告警/R2备份/回滚演练脚本化/钉版本 D21/前端库自托管 D36。
8. ⬜ 里程碑独立对抗审计(glm-check --kind code,落账本+打裁决)——C7b 有真新代码(编排器+workflow),按里程碑规矩跑,不豁免。

---

## C8 · 内容源切换与品味漏斗(第一步:多源骨架 + 接入 Lenny's)

> 主要故事:**US-4 / US-11(流水线)**。内容策略真相源:`需求共创/内容品味档案.md`(v1,2026-07-19 用户对 119 条标题校准 + 拍板 4 绿源)。
> 背景:现有流水线深度绑死 Latent Space / Substack(源写死单 URL、id 写死 `-latent-space-`、取稿脚本 Substack 专用)。品味校准后源清单换成 4 个 🟢 源,本片先接第一个 **Lenny's**(Substack,有官方转写,不烧 ASR)。
> 已核实(2026-07-19,真抓 RSS+集页):Lenny's RSS 无 `podcast:transcript` 标签,但集页有官方 Transcript(含 .vtt 时间戳)→ 需**新取稿适配器**,现有 Latent 取稿脚本不能直接复用;a16z/How I AI 无官方稿(留后续 ASR 决策)。

### 本片做什么 / 不做什么(防范围蔓延)
- ✅ **做**:①流水线从「单一写死源」改成**源清单**(数组配置:feed URL / id 前缀 / 取稿适配器 / 噪音过滤),Lenny's 为唯一 active 源;②`deriveId`/`isInterview` 去 Latent 专用硬编码,改成**按源**(Lenny's 前缀 `lennys`,Substack `/p/slug` 可复用);③**Lenny's 官方转写取稿适配器**(从集页取逐字转写 + 时间戳,喂进现有防失真链);④停抓 Latent Space(不再轮询),**现有 6 集不动**(不重处理、不误删)。
- ❌ **不做(留后续)**:a16z / How I AI / ASR(下一个决策,单独查每集成本再定);YouTube / Y Combinator(抓取被封的坎);**自动品味判官 + 待裁清单 + 裁决回写**(源已被筛成高对味,进来的基本都对味,判官等真发现漏网不对味的再加,ADR 待补);多源**按源独立 cutoff**(现只 1 个 active 源,单 cutoff 够用,第 2 个源落地时再重构 state,记 tech-debt);删除/下架历史 Latent 集(用户没要求,另议)。

### 前置核验(未过则停,不闷头往下)
- **P1 Lenny's 转写真能取到**:对 1 集真 Lenny's 集页,脚本真取到**官方逐字转写文本**(最好带时间戳/说话人;软化后闸门硬门只剩逐字命中,drift #25/#26)。**取不到就停**(可能 Lenny 未开转写 / 需登录 / 反爬)→ 报用户,不退化 ASR、不编造。核验证据落 `docs/` 或 drift-log。

### Scenario 1 · 多源骨架:源清单驱动,去 Latent 硬编码
```
Given 流水线源配置从写死单 URL 改为源清单(数组),Lenny's 为唯一 active 源
When  [系统] run-pipeline 按源清单取 feed、派 id、筛访谈
Then  deriveId 用该源前缀(Lenny's→`<date>-lennys-<slug>`),不再出现 `latent-space`
And   现有 data/episodes 里的 Latent 集(6 集)不被重新处理、不被删除(id 前缀不同,seen 去重照旧)
  Scenario 1a [边界] 源清单为空/无 active:Then 干净退出并报「无 active 源」,不报错崩
```

### Scenario 2 · Lenny's 官方转写取稿适配器
```
Given 一个 Lenny's 集页 URL(来自 RSS <link>)
When  [系统] Lenny's 取稿适配器抓集页 → 解析出官方转写(逐字文本 + 可得的时间戳/说话人)→ 写 data/episodes/<id>/transcript
Then  transcript 是该集**官方原文**(非编造、非 ASR),后续翻译/浓缩/闸门照常吃
  Scenario 2a [异常] 取不到官方转写:Then 停 + 报 + exit 非 0,绝不退化为手编/ASR 冒充(与 fetch-source Scenario 1a 一致)
```

### Scenario 3 · 端到端:一集真 Lenny's 走完整链
```
Given P1 过 + 源清单接入 Lenny's
When  [系统] `--seed` 设 Lenny's 基线 → 跑编排器 → 一集 cutoff 后的新 Lenny's 访谈集走完整链(取稿→推说话人→翻译→浓缩→判官→repair→抽实体→逐集验证→出稿→配音)
Then  该集过 gate + gate-facts + gate-all,产出集页 + 中文精华音频,可发布
  Scenario 3a [异常] 转写取不到或失真被闸门拦:Then skip + 通知,隔离 data/skipped,不发(复用现有 drift #24 隔离机制)
```

### 测试锚点(C8)
- 单测:`deriveId` Lenny's 前缀正确、不含 latent-space;`selectNew`/`isInterview` 按源清单跑(Lenny's fixture);`parseFeed` 吃 Lenny's RSS fixture;Lenny's 取稿适配器解析集页 fixture → 提取转写(不真联网,存一份真集页片段当 fixture)。
- **主证据=真跑一集 Lenny's**:真取稿→真发布→用户真设备核(里程碑 E2E 规矩照旧,不认 mock 绿)。
- ⚠️ 诚实边界:①本片只接 1/4 源,产量待观察;②Lenny's 若转写质量不稳,失真风险回到闸门兜;③自动判官未做,靠「源已高对味」的前提。

### C8(第一步)完成 = 怎么算完成(DoD)
1. ✅ P1 过:Lenny's 转写真能取到(2026-07-20 真抓:官方 transcription.json 逐词时间戳 794 段/72min + 段级 SPEAKER_0/1;证据见下「P1 核验记录」)。
2. ✅ 源清单骨架(`SOURCES`)+ 去 Latent 硬编码(`deriveId(item, source)` 前缀取 source.key),单测覆盖 deriveId/selectNew/SOURCES 按源(Scenario 1)。332 测试全绿。
3. ✅ **取稿无需新适配器(好消息偏差)**:Lenny's 是 Substack,现有 `fetch-source.mjs` 直接吃(postId fallback 命中 + transcription.json + 逐词时间戳);闸门 `w.speaker ?? seg.speaker` 早已兼容段级说话人。仅修 fetch-source 说话人诊断回退段级(诚实日志)。取不到即停(Scenario 2a)沿用原 die 逻辑。
4. ✅ 停抓 Latent Space(SOURCES 去掉、注释退役);现有 6 集 id 前缀 `latent-space` 与 Lenny's `lennys` 不撞,seen 去重照旧,不重处理不删(Scenario 1)。
5. ⬜ **里程碑 E2E**:真跑一集 Lenny's 自动到发布、用户真设备验收(Scenario 3)。**卡口:烧 GLM 翻译钱 + 部署=公开发布需用户点头。**
6. ⬜ 技术负债对账(按源独立 cutoff 缓办、a16z/HowIAI ASR 待决、判官待补,已登记 tech-debt)+ 里程碑独立对抗审计(glm-check --kind code)。

### P1 核验记录(2026-07-20)
- Lenny's RSS 无 `podcast:transcript` 标签,但集页(如 netflix-cpto 集)内嵌 Substack 官方 aligned `transcription.json`(签名 CloudFront URL,与 Latent 同机制)。
- 真抓验证:`fetch-source.mjs` 对该集取到 794 段、逐词 `{word,start,end,score}`、时长 72:05、mp3 直链;段级 `speaker=SPEAKER_0/SPEAKER_1`(词级空,gate 已回退段级)。
- 结论:Lenny's **不需 ASR**、有逐字+时间戳+段级说话人,完全吃现有防失真链。a16z/How I AI 经查无官方稿(留 ASR 决策)。

## C5.1 · 列表页可读性修复(破卡 / 标题 / 标签栏;2026-07-24 用户点名)

> 背景:线上首页 27 卡里 22 卡破损(HTML 被 markdown 截成代码文本)、21 卡标题是裸英文文件名、标签栏 121 个(含大量变体重复)。用户 AskUserQuestion 拍板:硬伤+标签栏一起治;标题两步走(先英文原题、云端翻新补中文)。

```gherkin
Feature: 列表页可读性(US-1 修复批)

Scenario 1 [破卡] 无嘉宾的集卡片完整渲染
  Given 一个集的 meta 没有嘉宾(guests 空且实体无 guest)
  When build-list 生成首页并经 Quartz 渲染
  Then 该卡简介、标签正常显示,页面不出现原样 "<p class=..." HTML 源码文本
  # 根因:guestLine 为空时卡片 HTML 留下纯空白行,markdown 把 HTML 块截断、
  # 后半张卡按 4 空格缩进当代码块转义。修=卡片 HTML 过滤空白行。

Scenario 2 [标题] 每张卡显示人读的标题
  Given Lenny's 集 meta.title_zh 为空但 meta.title(英文原标题)已补
  When 生成首页(集页同理)
  Then 标题显示英文原标题,不再是 "2026-02-08-lennys-…" 文件名
  And 云端 refresh 后 meta.title_zh 就位 → 显示中文标题(fallback 链 title_zh→title→id)

Scenario 3 [新集自带] 未来新集不再缺字段
  Given 云端流水线处理一个新集
  Then meta.json 写入 title(RSS 原标题)/ podcast(源显示名)/ date(RSS 发布日)
  And 存量老集由 backfill-meta 脚本从 vendored 存档(lennys-podcast-archive.json)一次性补齐

Scenario 4 [标签栏] 首屏标签收敛
  Given 全库标签含空格变体("AI 安全"/"AI安全")与近义变体("开源策略"/"开源战略")
  When 生成首页
  Then 空格变体自动归并;近义变体按 data/tag-aliases.json 别名表归并为正主
  And 标签栏默认只显示按集数排序的 TOP 15,其余收进「更多标签 ▾」点开才见
  And 点任一标签的筛选命中 = 归并后全部集(变体不漏);卡上标签同步显示归并后正主

Scenario 5 [中文标题·云端] 浓缩顺带起中文标题
  Given 云端浓缩(condense)一个集
  Then digest 带 title_zh(意译,不设逐字闸门——标题是创作不是引语)
  And 流水线把 digest.title_zh 写回 meta.title_zh(refresh 翻新存量时同样生效)
```

### DoD(C5.1)
1. ⬜ 单测红绿:卡片 HTML 无空白行 / 标题 fallback 链 / 标签归并+TOP15(变异敏感)。
2. ⬜ 本地真 build 首页:0 破卡、0 裸文件名标题、标签栏首屏 ≤15 个。
3. ⬜ 时序纪律:backfill run 在跑期间只本地 commit 不 push;run 落地后 rebase 再推,部署走云端。
4. ⬜ 用户真设备看线上首页拍板(里程碑规矩)。

## C9 · a16z 源接入(whisperX ASR 进料口 + 按源 cutoff;2026-07-24 用户拍板「先接 a16z」)

> 真相源:`需求共创/内容品味档案.md`(a16z=🟢 源,避开 CS/crypto 类)+ drift #14(ASR 免费选型:whisperX 主/Deepgram 备/AssemblyAI 三线)+ D44①②。
> feed 已实探(2026-07-24):`https://feeds.simplecast.com/JGE3yC0V`(The a16z Show,1000 集,enclosure 齐)。

```gherkin
Feature: a16z 源接入(US-4, US-11)

Scenario 0 [P1 前置核验,未过则停] whisperX 在 Actions runner 真跑一集
  Given 用户已放 HF_TOKEN 进 GitHub Secrets(免费 HF 账号 + 接受 pyannote 模型条款)
  When spike workflow 对一集真实 a16z 音频跑 whisperX(CPU int8 + 自带 VAD + pyannote 分离)
  Then 产出词级时间戳 + 说话人段落;单集总耗时有安全余量(目标 <2.5h,job 上限 6h)
  And 质量抽检:开场几分钟说话人切换不乱(人工抽查)
  未达标 → 停 + 报用户,降级 Deepgram($200 注册额度)再核

Scenario 1 [按源 cutoff] SOURCES 加 a16z,pipeline-state 重构 per-source(D44①)
  Given SOURCES 增 { key:"a16z", name:"a16z Podcast", feedUrl:(上方实探 URL) }
  When --seed
  Then state 按源记 cutoff(lennys 现有 cutoff 无损迁移,老格式自动升级)
  And needsReseed 防呆口径同步按源判

Scenario 2 [ASR 进料] 无官方稿 → whisperX 转写,输出与官方稿同构
  Given a16z 新集(无 Substack 官方稿)
  When 取源步跑 whisperX 适配器
  Then 产出 transcript.en.json 同构格式(段 + 词级时间戳 + SPEAKER_x 段级说话人)
  And 后链(infer-speakers→translate→condense→judge→gate→tts)零改动照走
  异常:音频下载失败 / ASR 崩 → 转瞬失败留半成品下次重试(现有机制)

Scenario 3 [品味边界] a16z 只向前看,不自动回填存量
  Given a16z 1000 集存量(混有 CS/crypto 类 ❌ 项)
  Then seed 后 cron 只处理新集;历史回填由用户点名(避开品味档案 ❌ 类)
```

### DoD(C9)
1. ✅ P1 证据落盘(run 30075152246,耗时+抽检见下方核验记录);模型档用户拍板:large-v3 默认、>100 分钟降 medium。
2. ✅ 单测:per-source cutoff 迁移 / needsReseed 按源 / whisperX 转换器 fixture / Simplecast URL 解析(slugFromLink/enclosureUrl/durationSec/实体反转义)/ pickWhisperxModel。**账实更正(2026-07-24 独立审计 A5)**:a3ebde5 提交快照实为 407/409(2 个 tts fixture 测试被 cron 回仓刷新 digest 打断,与 C9 改动无关,862cf86 修复;C9 自身新测试全过)——原「全 409 过」是把修复后状态写到了提交时点上。
3. 🟡 里程碑 E2E:**Sriram 集已真发布上站**(run 30110188589,2026-07-25;三跑历程:短集判官拦→Travis 判官拦→三件套后 Sriram 过);**待用户真设备验收即闭**。
4. 🟡 glm-check --kind code 对抗审计:接线 diff 已过(20260724-006,3 条全 noise 附实证);E2E 后整片收口再复核一轮。

### P1 核验记录(C9 · 2026-07-24 真跑,run 30075152246)
- **样本**:a16z feed 最新集(Travis Kalanick 谈 industrial AI),真实音频 45 分钟;免费 ubuntu runner,CPU int8。
- **耗时(达标,目标 <2.5h/集)**:medium **62 分(0.73x 实时)** / large-v3 **77 分(0.59x 实时)**。推 90 分钟长集:medium ≈2.1h、large-v3 ≈2.5h(贴上限)。
- **质量**:词级时间戳覆盖 **100%**(7442/7566 词);说话人分离出 4 人(片头旁白/双主持/嘉宾),开场 15 段文字抽检切换合理(旁白→主持独白连贯不乱切)。medium 与 large-v3 段数/词数相差 <8%。
- **前两跑失败教训**:whisperX 新版分离模型默认 pyannote **community-1**(用户须单独接受条款;`--diarize_model` 钉 3.1 被忽略,无效参数)→ 用户接受 community-1 条款后三跑通过。HF_TOKEN 校验已挪 job 首步(缺 token 秒死)。
- **结论**:whisperX 免费路线**成立**;模型档建议 large-v3(质量优先,时长可容),超长集(>100 分钟)可降 medium。artifact 留 14 天(asr-spike-large-v3 / asr-spike-medium),转换产物已验与官方稿同构。
- **剩余(接线时做)**:D44⑤ 按源 URL 解析(Simplecast 无 /p/ slug)+ fetch-source-whisperx 接进 processEpisode ASR 兜底链 + SOURCES 加 a16z + --seed --source a16z。

## C10 · 首页交互改版:Bases 三视图 + 8 大类词表 + 图谱去杂(2026-07-24 用户发起)

> 完整共识与 reasoning:`需求共创/首页交互改版.md`。本片 Gherkin 是行为真相。
> 背景:用户点名「标签几十个不合理 / 悬浮框没必要 / 卡片看不清日期内容 / 没发挥 Quartz 5 能力 / 图谱里公司名无用,要内容主题的关系」。

**Scenario 1(首页三视图)**
Given 站里有已发布的集
When 访客打开首页
Then 主体是原生数据库视图,默认落在「最新」卡片页签,每卡显示 日期/中文标题/播客/时长/简介,不显示标签
And 可切到「全部」表格(点列头可排序)与「按主题」看板(按主类分列)
And 顶部有 8 大类速览链接;不存在旧版 163 标签墙/「更多标签」折叠

**Scenario 2(词表闸)**
Given 8 大类词表 data/tag-taxonomy.json(改词表须用户点头)
When 任何集页被渲染
Then frontmatter 的 tags(1-2 个)与 category(主类)必须逐字在词表内(verify-c5 硬卡)
And 163 个自由细标签只出现在单集页底部「本集关键词」纯文本,不进图谱/首页/搜索导航

**Scenario 2a(生成端约束,新集)**
Given 新集跑实体抽取
When GLM 输出 categories 缺失/超 2 个/词表外
Then validateExtract 打回重试,不落盘(机器闸门,不靠自觉)

**Scenario 3(图谱)**
Given 图谱开启 showTags 且集页 tags=大类
When 访客看全局图谱
Then 图里是「集 ↔ 8 大类」的主题网;人物/公司/概念实体页不出现(实体页 unlisted)
And 实体页直链仍可访问、集内双链仍可点、实体页回链列表照常

**Scenario 4(弹框与细节)**
When 访客悬浮任何站内链接
Then 不再弹出预览框(enablePopovers: false,patch-site 补丁,site/ 重建后仍生效)
And 首页不显示框架自动的错误日期/阅读时长;已读集卡片压暗(pd-read 老数据不丢)

**Scenario 4a(异常:空站)**
Given data/episodes 无任何集
When 构建首页
Then 显示友好空状态「还没有内容」,无 base 代码块,不是空白页
## C11 · 第一梯队 6 源批量接入(原编号 C10,与首页改版片撞号后让号)(2026-07-24 用户拍板「第一梯队都接,Product Growth 优先」)

> 真相源:`需求共创/调研-新源候选-2026-07-24.md`(五路 agent 调研,feed 全真验证)+ 品味档案分界线。
> feed 形状已实探(2026-07-24):PG=Substack `/p/`(148 集,官方稿)/ YC+MAD=anchor `/episodes/`(320/125 集)/ AI+a16z=simplecast `/episodes/`(101 集)/ **Training Data+Big Technology=Megaphone,item link 是主页无集页 URL(D44⑤ 同款,需标题回退)**。

```gherkin
Feature: 第一梯队源批量接入(C11)(US-4, US-11)

Scenario 0 [P1 前置核验,未过则停] Product Growth 官方稿真取
  Given PG 是 Substack 分发(集页实探到 transcription.json 签名 URL)
  When fetch-source.mjs 对一个真实 PG 集页跑一次(不烧 GLM,只取稿)
  Then 产出 transcript.en.json 与 Lenny's 同构(逐词时间戳+说话人)
  未过 → 停 + 报用户(可能 Substack 结构差异),PG 降 whisperX 路线再议

Scenario 1 [SOURCES 扩容] 六源入清单
  Given SOURCES 增:pg(官方稿路线,同 lennys)/ yc / mad / trainingdata / bigtech / aia16z(后五者 asr:"whisperx")
  Then 每源 key 为简单 slug,name 为卡片显示名,feedUrl 为已验证地址
  And 单测:SOURCES 结构完整性(key/name/feedUrl/路线标记)

Scenario 2 [D44⑤ 扩:无集页 URL 的源] Megaphone 类 deriveId 标题回退
  Given Training Data / Big Technology 的 item link 是主页(无 /p/ 或 /episodes/)
  When deriveId 抠不到 URL slug
  Then 回退用标题派生 slug(小写化+非字母数字转连字符+截 40+去尾连字符),同日不同题不同 id
  And 真 feed dry-run 验证:两源各自新集 id 互不相撞
  And 标题也空才落 "episode" 兜底

Scenario 3 [基线与量控] seed 只向前看,首集发布单独确认
  Given 六源 wiring 完成
  When --seed(逐源补缺基线,已有绝不顶掉)
  Then cron 只处理 seed 后的新集;PG 首集内容验收 = 用户点名 backfill=1 --source pg(烧 GLM 约 1-2 元+公开发布,触发前确认)
  And 量的护栏:多源同 run 多集 ASR 时长叠加,若单 run 贴近 6h 上限 → 记 drift 议分批
```

### DoD(C11)
1. ✅ P1:PG 官方稿真取同构(1742 段/15848 词全时间戳/双说话人;独立审计 B2 复现)。
2. ✅ 单测:标题回退 slug / 哈希兜底 / SOURCES 结构(417 全绿);七 feed 1937 id 零撞(独立审计 B4 复现;已知限:同日同源 slug 前 40 字符全同会撞,已加批内告警)。
3. ⬜ seed 后 cron 干跑安全(无基线源不误跑;lennys/a16z 行为不受扰)。
4. ✅ 品味档案源清单同步(8 源表+拍板日)。
5. ⬜ glm-check --kind code 对抗审计 + 账本裁决。
6. ⬜ PG 首集 E2E 用户真设备验收(触发前单独确认烧钱+发布)。

## C12 · 嘉宾姓名与职位入库(2026-07-26 用户点名;UI 卡片第三行「人名 · 公司职位」的数据地基)

> 真相源:`需求共创/UI交互重做-2026-07-25.md`「卡片内容规格」🔒(第三行 = 人名 · 公司职位,**不放播客名**)+「遗留待办 #1」。
> 起因:UI 会话实测 47 集 —— 职位 41/47 有、人名 45/47 有,**数据在文本里、不在字段里**;`guest_titles` 只有 2 集手工加过、`guests` 大量为空(嘉宾被塞进 `cohosts`,仓库既有 bug,见 tech-debt)。
> 用户 2026-07-26 三条拍板:① 职位闸门**不必特别严格**,但要**短**(标杆「Netflix 产品负责人」);② 多嘉宾集 `guest_name` **只落主嘉宾单值**;③ 存量回填**本次本地跑**(用户明文,例外于「内容云端跑」约定)。

```gherkin
Feature: 每集产出 guest_name / guest_title 落 meta.json(US-1 卡片可读)

Scenario 1 [人名不许编] 嘉宾只能从本集说话人里选
  Given 本集 meta 有 speaker_map / guests / cohosts / host(角色标注不可信,只当名字池)
  When 抽嘉宾
  Then guest_name 必须逐字等于名字池里的某一个,否则打回重试
  And 标题里的非人名(Subprime Data / Former FAANG / Agent Experience)永远进不来
  And 一个名字都选不出 → guest_name 留空,不硬凑

Scenario 2 [主持人不许当嘉宾] 全库频次自动识主持,不写死名单
  Given 同一播客源下某个名字出现在 ≥30% 的集里、且至少出现 2 集
  Then 判为该源主持人,从嘉宾候选里剔除(实测:Lenny's→Lenny 33/36、Product Growth→Akash 2/3)
  And 单集源(只有 1 集)不下主持判定(1 集里人人都 100%),候选全留给模型判
  And 主持人对谈/无外部嘉宾的集(如 Big Technology 双主持)→ 两字段都留空

Scenario 3 [职位只许抄不许编] 逐字回原文
  Given 本集中文文本 = title_zh + tldr + digest_md
  When 模型给出 guest_title
  Then 去空白后必须能在中文文本里逐字命中(verbatim);
       整串命中不了时,允许拆成「公司名 + 职位」两段、每段各自逐字命中(spliced,记账可查)
  And 两种都不命中 → guest_title 留空,绝不编(本项目有编造前科)
  And meta.guest_source 记下命中方式(title_match=verbatim|spliced|none),可事后审计

Scenario 4 [卡片放得下] 短且干净
  Given 卡片第三行只有一行位置
  Then guest_title 显示长度 ≤16 字符(标杆「Netflix 产品负责人」);超长打回重试
  And 起首为「公司/长期/三任/资深/知名/前任/现任/目前/曾经/本集/嘉宾」等噪声词 → 打回(原型正则踩过)
  And 不含嘉宾本人姓名、不以「的」收尾

Scenario 5 [不阻塞流水线] 抽不到只是留空,不是失败
  Given 新集跑完整链
  When 走到抽嘉宾这步(在防失真闸门之后、出稿之前)
  Then 抽不到时写空字符串、exit 0,后续渲染/发布照常
  And 只有读不到 meta/digest 这类真错误才非 0 退出

Scenario 6 [存量回填] 47 集一次性补齐
  When node scripts/extract-guest.mjs --all
  Then 每集 meta.json 落 guest_name / guest_title / guest_source
  And 打印实测覆盖率(有名几集 / 有职位几集 / 空的是哪几集)
```

### DoD(C12)
1. ✅ 单测 25 条覆盖四个已知坑 + 五处闸门做过变异验证(逐个回退实现测试必红);全库 438 测全绿。
2. ✅ `run-pipeline.mjs` 在防失真闸门之后、`render.mjs` 之前调 `extract-guest.mjs`。
3. ✅ 存量回填完成:45 集可处理(另 2 集是无 digest 的半成品),**实测人名 44/45=98%、职位 42/45=93%**;
   逐集明细 + 独立复核 + 复现命令落 `docs/c12-嘉宾字段-覆盖率证据.md`。
4. ✅ `guests`/`cohosts` 角色错置登记 tech-debt D47(本片不顺手改,只做多来源兜底)。
5. ⬜ UI 侧真接上卡片第三行 + 用户线上验收(归 UI 会话)。

## C13 · 原型设计移植进真站(2026-07-26 用户拍板「全部上线」= 移植,不挂原型)

> 完整共识与 reasoning:`需求共创/UI交互重做-2026-07-25.md`(911 行,含八批批注与 🔒 #19/#20)。本片 Gherkin 是行为真相。
> 起点:真站首页现为 Quartz 原生 Bases 三视图,**该骨架已被本轮实证推翻**(构建期烘焙、筛选写死、读者侧点不动,千集不成立)。
> ⛔ **三道门未过前不得进 C13e 上线**:ADR 0015/0016 用户确认 + 闸门补绿 + 版权红线复述。

### C13a 骨架换血

```gherkin
Feature: 首页由 Bases 三视图换成真卡片流(C13a)(US-1, US-2)

Scenario: 卡片承载判断所需的信息
  Given 站里有已发布的集
  When 访客打开首页
  Then 每张卡显示 标题 / 一句话摘要(digest.tldr,正体无引号;[standard-change: 用户授权] 2026-08-22,原为金句斜体引语)/ 嘉宾「人名 · 职位」/ 大类标签 / 封面
  And 卡片按日期分组,组标为日期
  And 页面上不存在任何 base 代码块,也不存在 .bases-* 类名

Scenario: 显示日期=入库日([standard-change: 用户授权] 2026-08-22「补的内容用补的日期,不用原始内容的日期」)
  Given 一集是补历史抓进来的(原集发布日 2026-03-15,入库日 2026-08-21)
  When 访客在单集页 meta 行 / 本集信息框 / SEO 标记(datePublished)看它的日期
  Then 显示 2026-08-21 —— 取 meta.added 前 10 位;缺 added 回落 meta.date,再缺回落 id 前缀(与首页分组 dateKey 同口径)
  And 首页日期分组与集页日期从此同口径(不再出现「分组 08-21,点进去集页写 03-15」)
  And RSS feed 的 pubDate 仍=原集日期(既有约定不动:阅读器判新未读靠 item id,不靠日期)

Scenario: 金句与嘉宾的呈现规格
  When 任何一张卡渲染
  Then 金句是斜体并带成对弯引号,引号由样式生成、不写进内容
  And 嘉宾行是「人名 · 公司职位」,不显示播客名
  And 标题锁 2 行、金句锁 2 行,同一宽度下所有卡等高

Scenario: 字段缺了也不难看(降级)
  # 现状:40 集已发布集里 缺人名 0 / 缺封面 0 / 缺职位 1(2026-07-24-bigtech)。
  # C12 抽不到就留空、不阻塞发布 → 缺字段是常态而非异常,展示层必须自己兜住。
  Given 某集的 guest_name 或 guest_title 为空
  When 渲染这张卡的嘉宾行
  Then 有人名无职位时只显示人名,不出现孤立的「·」
  And 无人名有职位时只显示职位,不出现孤立的「·」
  And 两者都空时整行不渲染,不留空行
  And 上述三种情况下这张卡与同行其它卡仍然等高
  And 缺封面时按 C13d「主题色兜底块」处理,不显示碎图或空框

Scenario: 空站不塌
  Given data/episodes 无任何集
  When 构建首页
  Then 显示友好空状态,不是空白页
```

### C13b 交互三件

```gherkin
Feature: 大类页筛选 / 分享收藏 / 手机目录(C13b)(US-1, US-3)

Scenario: 三轴筛选就地生效
  Given 访客在某个大类页
  When 点「来自 → 某播客源」
  Then 只剩该源的集,状态行显示「筛出 N 集 / 共 M 集」并出现「清除」
  And 另外两条轴的每一项条数按当前结果重算,0 条的置灰但不隐藏
  And 再点一次同一项即取消该轴;跨轴之间取交集

Scenario: 同时属于是就地再筛,不是跳走
  When 点「同时属于 → 另一个大类」
  Then 停在当前页、只剩同时属于两个大类的集
  And 不跳转到另一个大类页

Scenario: 排序稳定
  When 反复点同一个排序项
  Then 每次结果完全一致(同日多集按标题兜底,比较函数相等返回 0)

Scenario: 分享按钮不会点了没反应
  Given 访客在单集页
  When 点分享且系统分享面板可用
  Then 调起系统分享
  And 若调用失败(非用户取消)则退回复制链接并提示「链接已复制」
  And 若用户自己取消则什么都不做

Scenario: 收藏可切换且刷新不丢
  When 点收藏
  Then 图标变实心、提示「已收藏 · 共 N 集」,再点取消
  And 刷新页面后状态仍在

Scenario: 手机端单集页有目录
  Given 手机视口打开单集页(正文约 9600px)
  When 滚到正文第一节
  Then 出现吸顶折叠目录,收起态显示当前小节名并随滚动更新
  And 点开可跳到任意小节、以及「全部金句」「接着看」
  And 跳转落点不被顶栏与吸顶条遮挡
  And 吸顶条底部有阅读进度线
```

### C13c 必读页

```gherkin
Feature: 必读栏由机器按两条口径算(C13c)(US-1)

Scenario: 零人工、两条口径各挑一半
  Given 每集有金句判官投票与实体全站频次
  When 构建必读页
  Then 取 A(判官全票率)前 4 集 + C(枢纽度)前 4 集,去重
  And 页面分两组并各写明口径,不出现无来由的「必读」二字

Scenario: 同源不超一半
  Given 某播客源在候选里占绝大多数
  When 选满 8 集
  Then 任何单一播客源不超过 4 集
  And 被该约束挡掉的集让位给其它源
```

### C13d 手机端收尾

```gherkin
Feature: 手机端独立设计(不是把电脑版压窄)(C13d)(US-1, US-2)

Scenario: 一级页把入口摊开
  Given 手机视口打开首页
  Then 顶栏显示品牌名
  And 搜索框、视图(最新/最热)、8 大类主题横滑条直接摊在页面上,不藏进汉堡菜单
  And 排序的视觉弱于分类(分类是导航主角)

Scenario: 二级页顶栏合并
  Given 手机视口打开大类页 / 搜索页 / 单集页 / 人物页
  Then 顶栏是「← 页面标题」(返回与标题合成一处),不显示站名等一级入口
  And 正文里不再重复出现返回链接与同名大标题

Scenario: 手机不显示筛选轴
  Given 手机视口打开大类页
  Then 三条筛选轴隐藏(筛选属"坐下来精读"场景),保留排序行

Scenario: 卡片配图按长宽比分流
  Given 某集有封面 cover.jpg
  When 渲染卡片缩略图
  Then 长宽比 0.9–1.15 的按 scale(1.55)/焦点 50% 48% 裁到脸
  And 长宽比 >1.15 的用中心裁、不加变换
  And 没有封面的集显示主题色兜底块(预期行为,不是 bug)

Scenario: 任何页面都不横向滚动
  Given 375 宽视口
  When 打开任意页型
  Then 页面宽度等于视口宽度,横向溢出为 0
  And 需要横滑的内容(主题 chip 条等)只在自己的容器内滑动
```


### C13d-1 单集页移植(✅ 用户已二次确认,2026-07-27 七个场景全落地)

> 设计稿 = `设计稿/ep-*.html` + `style.css`。现状:Quartz 直接渲染 render.mjs 出的 markdown,
> 与设计稿差的不只是皮(信息顺序、播放条位置、金句形态、右栏都不同)。
> 已锁定不必再议:ADR 0015(播放条紧随标题、撑满宽)、第八批 #2(详情页顶部只留两层:标题 + 一条统一灰度 meta)、
> 钩子收声(19px/400/浅竖线,不是 22px/600/红竖线)、金句引号由样式生成。

```gherkin
Feature: 单集页照设计稿移植(C13d-1)(US-1, US-5)

Scenario: 顶部只有两层,不再堆信息框
  Given 访客打开任意单集页
  Then 顶部依次是:标题、一条统一灰度的 meta(日期 · 播客 · 时长 · 大类;日期=入库日,2026-08-22 拍板,见 C13g 后的显示日期 Scenario)
  And 不再出现把主持/联合主持/公司/概念/来源堆在一起的信息框
  And 「返回」并进顶栏(正文里不再单独占一行)

Scenario: 播放条紧随标题(ADR 0015)
  Then 音频是标题正下方一条撑满宽的播放条
  And 它上面没有「🎧 本集中文精华音频」这类小标题
  And 首页与列表仍然不给任何音频入口

Scenario: 开篇是一句收声的钩子
  Then 正文第一块是一句斜体带引号的金句(引号由样式生成、不写进内容)
  And 字号 19px、常规字重、浅色细竖线(不是 22px/600/红竖线)

Scenario: 金句区独立成块
  Then 每条金句显示 中文(大)/ 英文原句(小)/ 说话人 · 时间戳
  And 金句可被单独链接到(块 ID 保留)

Scenario: 回原文是小圆点,不是方括号
  Given 正文里有引用原话的地方
  Then 显示一个 ↩ 小圆点,点开展英文原话
  And 手机上它的可点范围够大(不小于 41×31)

Scenario: 桌面右栏(设计稿 .shell.det)
  Then 右栏有「目录」(滚动高亮当前小节)与「这一集涉及」
  And 首页与导航仍然没有图谱入口(ADR 0016);本页底部保留一跳邻域

Scenario: 手机端不塌
  Given 375 宽视口
  Then 右栏不显示,改为吸顶折叠目录(归 C13b 那条,已写)
  And 页面无横向滚动
```

### DoD(C13d-1)
1. ✅ 每条 Gherkin 实测演示(2026-07-27,本地 build 后浏览器逐条量:圆点 17×17 桌面 / 19×19 手机、热区 41×31、28 按钮 × 370 链接矩形零重叠、375 零横向溢出、正文 343px)。
2. ✅ 桌面与手机各一张截图(会话内出示)。⛔ **观感对不对设计稿,要用户自己看** —— 那是眼睛的活。
3. ✅ 全站集页零死链、金句块 ID 不变(verify-c5「0 死链 / 42 集全有页」+ gate-all 重渲染逐字比对通过,`^q1` 块 ID 未动)。
4. ⬜ 线上验收(部署后用户在 talk.solomind.cc 真机点一次 ↩)。

### C13d-2 单集页移植·补完(✅ 用户 2026-07-27 二次确认)

> **起因**:C13d-1 的 Gherkin 只写了 7 条,漏掉了设计稿里 TLDR 框 / 小节标签 / 接着看卡片,
> 照 Gherkin 做完就收工、没回头拿设计稿逐件比 → 用户线上一看「详情页是不是没做」。
> 本片=拿 `设计稿/ep-*.html` 逐件补齐剩下 5 件。
> **不在本片**:分享 / 收藏两个按钮(归 C13b)。
> **关系图谱**:用户本来准备删,决定**先挪到正文底部留着**,线上体验后再定去留(未拍死)。

```gherkin
Feature: 单集页照设计稿补完(C13d-2)(US-1)

Scenario: 顶栏回来,且能返回
  Given 访客打开任意单集页
  Then 顶部有顶栏:站名「跨国深谈」· 最新/最热 · 搜索 · 深浅色
  And 有一个「← 返回」回首页
  And 手机上顶栏合并成「← 本集标题」一行(站名与导航让位)

Scenario: 集页不再展示「一句话」框([standard-change: 用户授权] 2026-08-22;原口径「灰底圆角框+红色小标签」作废)
  Then 集页不出现「一句话」灰框(tldr 已上首页卡片,集页不重复展示)
  And tldr 仍进 frontmatter description / SEO datePublished 同层的 JSON-LD / feed 简介
  And 页面上也不出现「一句话 TLDR」大标题(旧旧口径,连带守住)

Scenario: 小节用灰色小标签,不用大标题
  Then 「全部金句」「接着看」这类分区是 12px 灰色字距标签
  And 标签后面跟一句灰色说明(例:5 条(中英对照,已过机器闸门))
  And 这两个分区不再带 Quartz 的锚点链图标,也不再挤进右栏目录

Scenario: 「接着看」是两栏卡片
  Then 底部是两张并排的卡片:「顺着「<本集主大类>」挖下去」与「换个口味」
  And 每张最多 3 条,标题可点
  And 某一栏没内容就整栏不渲染;两栏都没有则整块不出现

Scenario: 右栏只有两块,图谱挪到正文底部
  Then 右栏从上到下只有「本集目录」与「这一集涉及」
  And 关系图谱出现在正文底部(ADR 0016:保留一跳邻域,但不占右栏)

Scenario: 老链接不失效
  Then 金句 ^块ID 一个不变(实体页金句墙照旧能嵌)
  And 全站集页零死链
```

### DoD(C13d-2)
1. ⬜ 每条 Gherkin 实测演示(人话 + 数字)。
2. ⬜ 桌面与手机各一张截图对照设计稿。
3. ⬜ 部署后用户线上体验,拍板关系图谱去留。

### C13d-3 单集页移植·补两块(⏳ 待用户二次确认)

> **起因**:用户拿 `需求共创/canvas-单集页.html` 对线上,「区别还是很大的」。逐块核完:
> 两份原型(canvas 结构稿 + `原型/ep-*.html`)在关键块上**其实一致**,差的是我漏实现了两块。
> ⚠️ 我先前误判过一次:说「原型没有嘉宾署名行」—— 错,原型有 `.byl`,只是那一集空、
> 被 `.byl:empty{display:none}` 藏了。
> **用户 2026-07-27 三处拍板**:① 署名行=嘉宾名 · 职位 ② 播放条做成定制条但真能播
> ③「接着看」那行关联原因**留着**(US-7 🔒 不动)。

```gherkin
Feature: 单集页补两块(C13d-3)(US-1, US-5)

Scenario: 标题下面有嘉宾署名行
  Given 这一集抽到了 guest_name 与 guest_title(C12 入库,人名 98% / 职位 93%)
  Then 标题正下方一行显示「嘉宾名 · 职位」(例:Peter Steinberger · OpenClaw创始人)
  And 它在 meta 行(日期 · 播客 · 时长 · 大类)上面
  Scenario 降级: 只有人名没职位 → 只显示人名,不留孤立的「·」
  Scenario 降级: 两个字段都没有 → 整行不渲染,不留空白

Scenario: 播放条是设计稿那条,而且真能播
  Then 播放条是:圆形 ▶ 按钮 · 「听中文精华」·「N 分钟 · AI 合成朗读」· 进度条 · 当前时间/总时长
  And 点 ▶ 真的开始播,再点暂停
  And 拖动进度条真的跳转,时间数字跟着走
  And 音频缺失时它降级成一句可读的说明,不是一条点了没反应的假条

Scenario: 老东西不许被带坏
  Then 金句 ^块ID 一个不变;全站集页零死链
  And 「接着看」卡片里的关联原因(同概念:X)照旧在(US-7 🔒)
```

### DoD(C13d-3)
1. ⬜ 每条 Gherkin 实测演示(人话 + 数字)。
2. ⬜ 播放条:真点一次播/停/拖动,附实测结果。
3. ⬜ 部署后用户线上体验。

### C13f PC 端第九–十三批批注落地(2026-07-27 用户在设计稿上标注 → 明示「写成代码提交」)

> 真相源:`设计稿/style.css` 第九–十三批段落 + `设计稿/index.html` / `设计稿/ep-*.html`。
> 范围**只有电脑端的首页与单集页**(用户原话「今天这部分 PC 端主页和详情页的设计稿」);
> 手机端仍归 C13d,本片不碰。
> ⚠️ **二次确认豁免**:用户交代「一直执行,因为我要睡觉了」→ 本片跳过「Gherkin 二次确认」
> 那一步,已记 `docs/drift-log.md` #35;若醒来后有场景理解错,以用户口径为准回滚。
> ⚠️ **一处明写的偏离**:设计稿把顶栏搜索做成自建输入框 + 就地下拉结果。真站的搜索是 Quartz
> 组件(🔒 #9「搜索不许降级」+ C13a「搬节点不重写一套」),自建一份会丢掉中文索引与分词。
> 故本片只做**外观与位置**:长条框、右对齐、左边缘对齐右栏;点开仍是 Quartz 的搜索浮层。

```gherkin
Feature: 电脑端首页与单集页照第九–十三批批注改(C13f)(US-1, US-2)

Scenario: 顶栏与两侧栏对齐,且只剩一条必要的线
  Given 访客在 ≥1280px 的电脑上打开首页
  Then 顶栏内容的左边缘与左栏左边缘同一条竖线,右边缘与右栏右边缘同一条竖线
  And 顶栏底下没有通栏分割线
  And 站名前面有一个 logo 位,放了 /logos/site.png 就显示图、没有文件时显示引号标记且不裂图
  And 站名是衬线字(与正文的黑体拉开层级)

Scenario: 搜索是长条框且跟右栏对齐
  Then 顶栏右侧是一个长条搜索框,不是小图标
  And 它的左边缘与右栏「按公司」标题的左边缘在同一条竖线上
  And 点它打开的是站点原有的搜索(中文索引不降级),不是另起一套

Scenario: 中栏更宽,两侧栏往两边推
  Then 三栏是 210 / 680 / 290,整体居中 1180
  And 窄一点的电脑(1024–1279px)是 172 / 556 / 240,整体 968
  And 任何一档下页面都不出现横向滚动条

Scenario: 日期分组标题说人话
  Given 某组的日期就是访客当天的日期
  Then 这一组的组标显示「今天」
  Given 某组的日期是访客的前一天
  Then 这一组的组标显示「昨天」
  Given 某组的日期更早
  Then 这一组的组标仍显示日期原文

Scenario: 卡片文字按实际行数长,不再锁死留白
  Given 某集的金句只有一行
  Then 这张卡的金句区就只占一行,下面不留空出来的一截
  And 标题最多 2 行、金句最多 3 行,超出才截断
  And 卡片仍有最小高度,缩略图那侧不塌

Scenario: hover 不贴脸
  When 鼠标移到一张卡上
  Then 高亮区域比文字左右各宽出一段,不压在文字边上
  And 卡片在版面上的位置不因为 hover 而移动

Scenario: 署名行里公司的份量略高于人名
  Then 「人名 · 公司职位」这一行里,公司职位的颜色更深、字重更重
  And 人名是常规字重的中灰

Scenario: 右栏按公司是带 logo 的卡片
  Then 「按公司」每一条是一张卡片,左边 28×28 的 logo 位、中间公司名、右边集数
  And 有 /logos/<公司>.png 就显示 logo,没有就显示公司名首字母,不出现裂图
  And 右栏不再有「随便看看」这一块

Scenario: 右栏跟着页面一起滚
  When 访客往下滚首页
  Then 右栏跟着走,不吸顶、不在自己内部滚
  And 左栏仍然吸顶(这一条是上一轮批注定的,本片不动)

Scenario: 深浅色开关从顶栏挪进侧栏
  Then 顶栏里没有深浅色图标
  And 首页的左栏在「关于本站」上面有一行「深色模式」
  And 单集页的右栏末尾有同一行
  And 点它仍然真的切换亮暗(行为还是站点原来那套)

Scenario: 点一条内容开新标签页
  When 访客点首页任意一张卡
  Then 单集页在新标签页打开,原来那一屏还停在原处
  And 左右两栏的主题 / 公司 / 播客导航仍在当前窗口跳转

Scenario: 单集页正文左边缘对齐 logo
  Given 访客在 ≥1024px 打开任意单集页
  Then 大标题的左边缘与顶栏 logo 的左边缘在同一条竖线上
  And 正文的阅读行宽与改动前一致(左内边距挪到右边,不是把正文变宽)

Scenario: 单集页 meta 只剩三段
  Then meta 行是「日期 · 播客 · 时长」,不再有大类链接
  And 缺字段仍然整段略过,不留孤立的分隔点

Scenario: 老东西不许被带坏
  Then 首页卡片仍是 标题 / 金句 / 嘉宾行 / 大类标签 / 封面,一样不少
  And 大类页(.pd-shell.two)与手机端版面不受影响
  And 全站集页零死链;金句 ^块ID 一个不变
```

### DoD(C13f)
1. ⬜ 每条 Gherkin 实测演示(人话 + 数字)。
2. ⬜ 1460px 与 1200px 两档 + 单集页各自浏览器实测(对齐用真实测量值,不靠肉眼)。
3. ⬜ glm-check --kind code 对抗审计 + 账本裁决。
4. ⬜ 部署后用户线上验收(用户醒来后)。

### C13g 全站配色统一 + 集页正文排版补齐(2026-07-28 用户点名「线上底色和设计稿不一样」,拍板选项 A)

> **起因**:C13f 把 `.pd` **里面**照设计稿抄准了(灰阶 B0–B8、卡片、日期头、公司卡数值一致),
> 但 `.pd` **外面那层皮**仍是 2026-07-25「方向 A 暖红」那轮注入的 Quartz 主题 →
> 站上同时跑着两套配色。实测差异(线上产物 CSS vs `设计稿/style.css`):
> 页面底 `#faf8f6` vs `#fff`;链接红 `#e0392b` vs `#b8443c`;集页正文色 `#33302e` vs `#252525`;
> 集页正文行距 1.6 vs 1.95;集页 h2 22.4px 系统黑体 vs 20px 普惠体。
>
> **用户拍板(2026-07-28)= 选项 A**:把 Quartz 主题改成设计稿那套(撤掉 7-25 的暖红基调),
> 顺带补集页正文那条。真相源仍是 `设计稿/style.css`(唯一设计真相)。
>
> ⚠️ **一处需我定的映射**:Quartz 的 `tertiary`(链接 hover 色)在设计稿里没有对应 token
> —— 取 accent 压深一档(浅色 `#96362f`,深色 `#eb9184`),属实现细节,不改设计稿数值。

```gherkin
Feature: 全站只有一套配色,且集页正文照设计稿排(C13g)(US-1, US-2)

Scenario: 页面底色与设计稿一致,顶栏不再浮在上面
  Given 访客在浅色模式下打开首页
  Then 页面底色是纯白 #fff,与顶栏、右栏公司卡是同一个白
  And 顶栏与下方内容区之间看不出色差
  Given 访客切到深色模式
  Then 页面底色是 #1c1b1a,与 .pd 里那套深色灰阶同源

Scenario: 站上只剩一个红
  Then 正文里的链接、标签、hover 强调色都是设计稿的 #b8443c(深色模式 #e0776a)
  And 站上不再出现 #e0392b 这个第二种红

Scenario: 卡片 hover 的底色与页面底色同色系
  When 鼠标移到一张卡上
  Then hover 底色是设计稿的 B1(#f7f7f9),压在纯白上不发脏

Scenario: 集页正文照设计稿排
  Given 访客打开任意一集的详情页
  Then 正文段落是 16.5px、行距 1.95
  And 正文颜色跟着主题走(浅色 #252525、深色 #cfcdcb),不是写死的
  And 小节标题 h2 是 20px、行距 1.45、用阿里巴巴普惠体

Scenario: 换配色不碰内容,也不碰 .pd 里已经对的数值
  Then `.pd` 里那套 --B0..--B8 与 --pd-accent 一个数值都没改
  And 首页卡片、日期头、公司卡的尺寸间距与 C13f 实测值一致
  And 任何一集的正文文字、金句、出处一个字没改
```

### DoD(C13g)
1. ⬜ 每条 Gherkin 实测演示(人话 + 数字)。
2. ⬜ 本地 build 后浏览器实测:浅色 / 深色 / 集页三处取真实 computed 值比对。
3. ⬜ 全量单测 + verify-c5 全绿。
4. ⬜ 部署后用户线上验收。

### C13e 上线

```gherkin
Feature: 移植后的站上线(C13e)(US-1)

Scenario: 上线前三道门
  Given 准备部署
  Then ADR 0015(音频降级)与 0016(图谱降级)已由用户明文确认、需求共识 P0 标记已改
  And 机器闸门全绿(不靠 --no-verify)
  And 版权红线已按结项口径向用户复述一次

Scenario: 线上不带内部工具
  When 部署产物生成
  Then 站内任何页面都不含批注按钮与批注脚本
  And all.html / cover-crop.html / must-read-rules.html / mobile*.html 等内部工具页不进部署产物

Scenario: 四视图与死链
  When 部署完成
  Then 电脑亮色 / 电脑暗色 / 手机 / 默认浅色四种视图实测通过
  And 全站 0 死链
```

### DoD(C13)

1. ⬜ 每片的 Gherkin 逐条实测演示(人话 + 数字,不贴代码)。
2. ⬜ 桌面与手机各自截图对照原型,差异逐条有说明。
3. ⬜ `.bases-*` 与 base 代码块清零(grep 为证)。
4. ⬜ glm-check --kind code 对抗审计 + 账本裁决。
5. ⬜ 三道门全过(ADR 确认 / 闸门绿 / 版权复述)才允许 C13e。

## C14 · 半成品自动补活(2026-07-29 用户拍板;起因 = Jensen Huang / Boris Cherny 两集掉进补活死区)

> **病根(实证)**:backfill 把「有 digest.json」一律当已完成跳过(`completedIds()` 只看 digest 在不在);
> refresh 只翻「有集页」的已发布集(drift #33 防误升格);cron 只向前看(cutoff 已越过)。
> 三条链对「有 digest 无集页」的半成品**互相让位,谁都不管** —— 网络抖动掉队的集永远躺着,
> 已付费的翻译/浓缩产物白放。老账:03-12 / 04-23 / 05-31 / 06-28 / 07-13-solo 五集同坑。
> **修法**:cron 每轮末尾扫「有 digest 无集页」的目录重走后半链;翻译/浓缩/转写全走既有缓存
> (translate 只补缺段 / condense 无 FORCE 吃缓存 / 转写稿显式复用),不重烧钱。
> **刹车(用户 2026-07-29 点名「会不会一直重复」)**:账本记每集补活连败次数,连败 3 次停手待人工。

```gherkin
Feature: 掉队半成品自动补活,且不无限重试(C14)(US-4, US-11)

Scenario: 掉队的集会被自动捡回来
  Given 某集在 data/episodes 里有 digest.json 但 samples/ 下没有它的集页
  When 下一班 cron 跑到补活环节
  Then 它的后半链被重走(实体抽取 → 闸门 → 出稿 → 配音)
  And 已有的转写稿/翻译/浓缩产物被复用,不重新付费

Scenario: 闸门一分不降
  When 补活的集走验证
  Then 它过的是与新集完全相同的防失真闸门
  And 闸门不过照样隔离进 data/skipped,不因"补活"放水

Scenario: 隔离区的不碰
  Given 某集在 data/skipped(防失真拦下)或在账本 skipped 名单里
  Then 补活环节绝不把它捡回来

Scenario: 不拖垮正常班次
  Given 补活某集时再次转瞬失败(如网络抖动)
  Then 该集原样留在半成品态,本轮其余工作(新集处理/部署)不受影响

Scenario: 有痕迹
  Then 每轮补活的成功/失败/停手在 run 日志里响亮报数,不静默

Scenario: 同一集连败 3 次后停手
  Given 某集补活已连续失败 3 次(账本有计数)
  Then 之后的班次不再自动碰它,日志响亮点名"连败停手,需人工"
  And 人工清掉计数后它恢复补活资格
  And 任意一次补活成功即清零计数
```

### DoD(C14)
1. ⬜ 每条 Gherkin 实测演示(人话 + 数字)。
2. ⬜ 云端真跑一轮:Jensen Huang / Boris Cherny 两集被真实捞回(或被闸门有理有据地隔离)。
3. ⬜ glm-check --kind code 对抗审计 + 账本裁决。

## 修 · 抽实体重试回喂校验错误(2026-07-30 用户确认;C12 先例平移)

> **病根(实证)**:Jensen 集连续两轮云端补活死在 extract-entities——GLM-5.2 整读后连续 4 次
> 输出的 tags 数量不合格(错误全是「tags 必须 3-5 个」)。重试循环每次发的是一模一样的 prompt,
> validateExtract 的 errs 没回喂给模型,低温度下四次同答案 = 确定性重试死循环。
> **修法**:照 C12 extract-guest 的 nudge 先例平移——重试时把机器闸门打回原话附到输入尾部;
> 系统提示词/正文/校验口径/次数一字不动。

```gherkin
Feature: 抽实体重试回喂校验错误(修确定性重试死循环,C12 先例平移)

Scenario: 打回原因回喂给下一次重试
  Given GLM 抽实体某次输出被 validateExtract 打回(如「tags 必须 3-5 个」)
  When 重试再次调用 GLM
  Then 输入末尾附上机器闸门打回的原因原话(nudge,照 C12 款式)
  And 系统提示词、正文输入、校验口径一字不改(不是放水,是给模型改错的机会)

Scenario: 回喂后仍救不回
  Given 连试 4 次(现有次数不变)仍不合格
  Then 行为与现在完全一致:坏输出存档、exit 1、集留半成品态、补活账本照旧计数

Scenario: 一次就好的不受影响
  Given 第一次输出就合格
  Then 不产生任何 nudge,链路与现在逐字一致
```

## C13h · 设计稿全量对齐 · PC 主页+详情页(2026-07-29 用户「对比一下设计稿还有哪些要改的,一次性改完」+ 补充「PC 端,主要是主页和详情页」)

> **方法**:自动全量比对(设计稿 style.css 逐选择器级联终值 vs 线上产物 CSS + 逐页类名结构)→
> 人工逐条分诊「真差 / 换了实现的等价 / 有 🔒 依据的豁免」→ 真差一次改完。
> 豁免不动:搜索浮层走 Quartz(🔒 #9 + C13f 明写)、批注横幅不上线(C13e)、★ 已拍删、手机端归 C13d。

```gherkin
Feature: PC 主页与详情页与设计稿逐项一致(C13h)(US-1, US-2)

Scenario: 详情页大标题照设计稿
  Then h1 是 29px / 行距 1.35 / 阿里普惠体(此前吃 Quartz 拉丁标题字体,中文回落系统黑体)

Scenario: 金句区照设计稿 .qr
  Then 中文句是普惠体斜体、CSS 生成引号(内容一个字不动)
  And 署名行 11.5px 浅灰
  And 实体页金句墙块嵌入拉到同一块时样式跟着走

Scenario: 正文【背景】引用块不再是裸样式
  Then 米白底 #f8f7f4 + 2px 浅边 + 15px,不是 Quartz 的红边
  And 深色模式有对应的一套

Scenario: ↩ 圆点 hover 有提示
  When 鼠标悬停出处圆点
  Then 出现「时间 说话人 · 点开英文原话」黑底工具提示

Scenario: 分享与收藏(设计稿 .acts + actions.js,C13b 的 PC 部分)
  Given 访客在详情页顶栏
  When 点分享,系统分享面板可用则调起;失败(非用户取消)退回复制并提示「链接已复制」
  When 点收藏,图标变实心、提示「已收藏 · 共 N 集」;刷新不丢;再点取消

Scenario: 「这一集涉及」照设计稿三行制
  Then 只有 人物/公司/概念(+来源)几行,标签是灰药丸
  And 人物行 = 嘉宾在前、主持/联合主持并入、同人去重
  And 名字是素文字链接,hover 才见红(不再一片红底 chip)

Scenario: 其余对齐项
  Then 钩子上方不留额外空(margin-top 0)
  And 播放条标题 14px/600、状态字 12px
  And 接着看框内链接块级 5px 0、组标 11.5px 红
  And 目录当前项红字红线(Quartz .in-view 映射设计稿 .on)
  And 顶栏 nav #5c5c5c hover 红;左栏关于本站 #8a8a8a
  And 搜索命中 mark 淡红底
```

### DoD(C13h)
1. ⬜ 浏览器 computed 值逐项对上设计稿数值。
2. ⬜ 45 集全量重渲染 + gate-all 金句/实体/关联层绿(重渲染逐字比对含新挂点)。
3. ⬜ glm-check 对抗审计 + 裁决。
4. ⬜ 部署后用户线上验收。

## C15 · 文稿规范升级:开场钩子 + 口语导览 + 口语收尾(2026-07-30 用户拍板)

> 起因:音频=文稿直读,用户「根本听不懂在讲什么」。样稿(Boris 集)用户过目后明文「腔调可以,就按这个规范落」;
> 同日点名:**正文不带【开场钩子】这类标签**,钩子就是自然的第一段。
> 红线:钩子/导览/收尾只许**重组本集已有事实**,不许添料;防失真闸门口径一分不动。
> 实测底账(2026-07-30):55 集里 53 集已有「本集带走」(列表腔);钩子/导览 0 集有;工程备注(「转写稿误写…」)与「本文/本篇」书面自称混在正文。
>
> **【2026-08-11 · ADR 0020 修订 · standard-change:用户授权】** 精华方向由「导读讲解式」拨正为「**实质优先**」(实质为主、骨架大砍)。本 C15 骨架口径随之改:**导览段退役**(钩子后直接进实质)、**承接压半句**(不写整段串场)、**本集带走改回可带走的要点列表**(styleErrs ④ 放开)。反碎片 / 禁标签 / 禁书面自称 / 禁工程备注 / 不添料 / 防失真闸门口径**不变**。下面 scenario 已就地改到新口径。

```gherkin
Feature: 精华稿自带钩子、实质优先与可带走要点(C15 · ADR 0020 修订)(US-4, US-11)

Scenario: 开场钩子
  When 浓缩产出 digest_md
  Then 第一段是 1-2 句开场钩子:全集最反直觉/信息量最大的点直接甩出,不先铺背景
  And 正文不出现【开场钩子】【导览】等标签字样

Scenario: 钩子后直接进实质(ADR 0020:导览段退役)
  Then 钩子之后不写「他讲了三件事」式的导览预告段;读者靠小节标题 + 每节第一句点题导航
  And 每节直接给实质、承接压到半句,不写「说完 X 接下来 Y」的整段串场

Scenario: 收尾 = 可带走的要点(ADR 0020 修订,原「连贯口语段不许列表」放开)
  Then 结尾「本集带走」= 几条具体、可上手/可复述的要点(允许要点列表);不是主张复述、不是空话

Scenario: 禁书面自称与工程备注
  Then digest_md 不出现「本文/本篇」(用「这一集/接下来」);转写稿误写说明类工程备注不进正文

Scenario: 不添料
  Then 钩子/正文/带走里的每个事实都能在本集双语稿/既有精华里找到出处

Scenario: 只对新浓缩生效
  Then 存量集不自动回刷(回刷另拍);音频是否跳过 tldr 前置是另一刀(牵动全库音频重合成,待拍)
```

### DoD(C15)
1. ⬜ 浓缩规范落地 + 单测绿;下一集云端新集按新规范产出。
2. ⬜ glm-check 对抗审计 + 裁决。
3. ⬜ 用户听/读新集样稿验收腔调。

### C15 后续两刀 · 音频跳过 tldr 前置 + 存量回刷通道(2026-07-30 用户拍板「一起做」)

> 上面 Scenario「只对新浓缩生效」里两处「待拍/另拍」当日已拍:音频跳 tldr 与存量回刷**一起做**。
> 二次确认 = 用户该句明文(豁免口径同 drift #36:人不在线逐场景确认,Gherkin 照写照落盘)。
> 音频口径变更带 `[standard-change: 用户授权 2026-07-30]`;全库存量音频指纹作废、云端重合成(edge-tts 免费)是预期行为。

```gherkin
Feature: 音频跳过 tldr 前置(C15 刀①)(US-4, US-11)

Scenario: 音频源文本只读 digest_md
  When 为一集合成音频
  Then 音频源文本 = digest_md(C15 第一段即开场钩子),不再前置干瘪的 tldr
  And tldr 照旧留在 feed 简介与首页卡片摘要行里,只是不进音频(集页「一句话」框 2026-08-22 已删,见 C13d 处 standard-change)

Scenario: 陈旧音频重合成而非硬红
  Given 口径变更后全库存量音频的 source hash 全部过期(预期)
  When 流水线补音频(ensureAllAudio / deploy 前补合成)
  Then 有 digest 的集一律交给 tts 按源文本指纹自判:没变跳过、变了重合成(免费)
  And 不许用「音频文件在不在」预判挡住指纹检测(deploy-site.sh 同款教训,GLM 20260727-002[2])
  And gate-audio 的陈旧检测口径一分不动:重合成后 hash 对齐才放行

Feature: 存量回刷通道(C15 刀②)(US-4, US-5, US-11)

Scenario: 回刷入口与互斥
  Given workflow_dispatch 显式传 refresh(all 或集 id 逗号串)
  Then 走存量回刷:对每个已发布集(有集页)FORCE 重浓缩 → 判官 → 金句规整 → 防失真闸门(败走 repair-facts 单点救再重验)→ 重合成音频 → 统一重建集页/实体页 + gate-all
  And cron 正常班次完全不受影响;并发组 c7b-pipeline 串行,不与正常班并发写同一目录

Scenario: 只烧该烧的钱
  Then 转写稿与翻译缓存(transcript/translation.zh.json)原样复用,绝不重跑取源/翻译
  And 实体抽取不重跑(entities.json 不动;实体页金句嵌入由构建从新 digest 现算,无陈旧块引用)
  And 嘉宾字段不重抽;TTS 走 edge-tts 免费

Scenario: 断点续跑(57 集长 run 中途挂不从头烧钱)
  Given digest_md 已通过 C15 口语体机器卡点(styleErrs 全零)
  Then 该集识别为「已按新规范刷过」,跳过不重浓缩(响亮报数)
  # 判据理由:C15 浓缩闸门保证新产出必过 styleErrs;存量 57/57 实测全不合规(2026-07-30 底账)→ 零误跳;
  # 判据与浓缩卡点同一份代码,零新增状态,不另设账本

Scenario: 闸门一分不降
  When 重浓缩后过不了防失真闸门(或判官毙穿)
  Then 回滚老版照常发布(老版本就过闸,fail-safe 同 2026-07-24 拍板),响亮报数不静默
  And 回滚集下一次回刷 run 仍会被选中重试(其 digest 仍不合规)
```

## C13j 补遗 · 实体页欠账两件(2026-07-30 用户点名「UI 先做 C13j 欠的两件」)

> 设计真相 = `设计稿/person-*.html`(三个样例):③ 谈到的药丸带 `<b>N 集</b>` 徽标;「④ 也在聊「X」的人」= 人物药丸链到各自人物页(右栏目录写「④ 同主题的人」)。

```gherkin
Feature: 关联药丸集数 + 也在聊 X 的人(C13j 补遗)(US-6, US-8, US-9)

Scenario: 关联药丸带集数
  Given 实体页「谈到的」小节的关联药丸
  Then 每颗药丸带集数徽标(照设计稿 .chp b 版式),N=该实体出现的已发布集数
  And N 与实体自己页面的「本站收录 N 集」同源同算法,不另造第二套口径

Scenario: 也在聊 X 的人(人物页)
  Given 某人物页
  Then 出现「④ 也在聊「X」的人」小节,X 与人选算法从设计稿三个 person 样例逆向并保持一致(按共同概念找人)
  And 无人可列时整节不渲染,不出空壳;公司/概念页设计稿没画该节就不加

Scenario: 铁律不破
  Then 双链与 ^块嵌入仍是纯 markdown 不被 HTML 包住(phero 例外先例);gate-all 实体层重算比对保持绿
```

### DoD(C13j 补遗)
1. ⬜ 浏览器实测:徽标数字与实体页收录数抽查一致;「也在聊」链接可点、设计三样例规则复现。
2. ⬜ 全量单测 + verify-c5 + gate-all 实体层绿。
3. ⬜ glm-check 对抗审计 + 裁决。
4. ⬜ 部署后用户线上验收。

## C16 · 演讲精选通道(本机 yt-dlp 抓一手 → 云端接力)(US-4, US-11)

> 决定真相 = docs/adr/0017(2026-07-31 用户明文「圈定清单这个流程你走下去」——二次确认口径同 drift #36 受控豁免,在此注明);
> 候选清单与三层去重设计 = 需求共创/调研-新源候选-2026-07-24.md(YouTube 侧去重 + 2026-07-31 增补节)。
> 形态 = 精选批次(人工圈选,非频道自动巡航);处理链与播客集完全同一套,闸门一分不降。

```gherkin
Feature: 本机种子脚本 seed-talk(US-4)

Scenario: 抓一手落种子区
  Given 一个或多个 YouTube 演讲 URL
  When 本机跑 scripts/seed-talk.mjs(yt-dlp 走代理 127.0.0.1:7877)
  Then 每条演讲落 data/talks-seed/<videoId>/:最佳音频 + seed.json(videoId/url/title/channel/uploader/upload_date/duration_sec/audio_file/audio_asset_url)
  And 音频文件绝不入 git(gitignore);seed.json(小清单)入库随仓走
  And 同 videoId 的种子已存在、或 videoId 已在 pipeline-state 演讲账本 → 响亮跳过不重下

Scenario: 运输 = GitHub Release asset(零新基建)
  Given 演讲音频 30-100MB,git 不可承载;workflow artifact 本机传不上去且 7 天过期;R2 已去(drift #18)
  When seed-talk 下载完成
  Then 音频以 gh CLI 上传到固定 prerelease tag(talks-seed)的 Release asset,--clobber 幂等
  And seed.json 记下公开直链 audio_asset_url(公开仓资产免认证可拉)
  And 云端零新拉取步:该直链直接当 enclosure 音频 URL 交给现有 fetch-source-whisperx --transcribe

Feature: 云端 talks 源(US-4, US-11)

Scenario: 只在显式触发时跑,cron 零影响
  Given SOURCES 增加 talks 源(无 feed、manual 标记、asr=whisperx)
  Then cron 正常班次的源循环不包含 talks(默认排除 manual 源)
  And 只有 workflow 显式传 talks=true(编排器 --talks)才处理种子区
  And talks 源无 cutoff/seed 概念(种子存在即待处理,处理完靠账本终态)

Scenario: videoId 账本去重(ADR 0017 去重第 1 层)
  Given pipeline-state 演讲账本已记某 videoId
  When 同 videoId 的种子再次出现
  Then 该种子绝不再被选中处理(不重烧转写/翻译钱)
  And 处理成功或失真隔离(终态)都记账;转瞬失败不记账、下次重试

Scenario: 标题模糊比对待裁(ADR 0017 去重第 2 层)
  Given 某种子标题归一化后与库内已完成集 title_en 相同或互为包含(如 YT 版≈RSS 版同集)
  Then 响亮报「⛔ 待裁」并跳过该种子,不进处理链
  And 绝不自动丢弃:种子原样保留、不进隔离账本、不记 videoId 账本——去留由人裁
  And 下轮 --talks 仍会再次报待裁(直到人工删种子或明文放行)

Scenario: 演讲不是访谈,噪音过滤按源放行
  Given talks 种子(演讲,无 RSS item 形状)
  Then 不套 isInterview 的标题/链接判定规则(ainews 排除等对演讲无意义)
  And 集 id = <upload日期>-talks-<标题slug>(deriveId 同款派生,进现有 seen 去重)

Scenario: 处理链零折扣
  When talks 种子被选中
  Then 走与播客集完全同一 processEpisode 链:whisperX 转写→推说话人→翻译→浓缩→判官→金句规整→抽实体→防失真闸门→出稿→配音
  And 失真隔离/半成品重试/gate-all 兜底与播客集一字不差
```

### DoD(C16)
1. ⬜ 全量单测绿 + verify-c5 绿 + workflow YAML 解析过;变异验证两刀(去 videoId 账本去重→红;标题待裁改自动丢弃→红)。
2. ⬜ 不真下载/不真跑流水线/不触发云端(本切片只建通道;真跑 12 条由调度员之后操作)。
3. ⬜ glm-check --kind code 对抗审计 + 裁决落账本。

## 修 · 金句修复短句错杀(2026-07-31 用户「bug点头」授权;standard-change:闸门口径改动)

> **病根(实证)**:repair-quotes.mjs 的 matchWithTrim 对 <6 词候选一律 `continue`——短句根本不参与
> 转写稿匹配就被丢,报错还谎称「逐字命中不了」。实锤:Netflix 集金句
> "Talent density is the non-negotiable."(5 词)是转写稿逐字原话,却被丢,导致该集 kept 2<3 回滚。
> **原守卫意图**:防常见短语在转写稿多处误命中、修出错误时间戳/说话人(锚点张冠李戴)。
> **修法(最小)**:短句允许参与匹配,但必须**全文唯一命中**才接受;多处命中 → 锚点有歧义,照丢并
> 如实记因。≥6 词行为一字不变(多处命中仍按离 GLM 时间戳最近挑)。防失真方向不松:编造短句在
> 转写稿找不到,照丢。

```gherkin
Feature: 金句修复不再错杀逐字为真的短句(standard-change: 用户授权 2026-07-31)(US-11)

Scenario: 逐字为真的 5 词金句被保留
  Given 金句英文少于 6 词、且在转写稿逐字唯一命中(如 "Talent density is the non-negotiable.")
  When 跑 repair-quotes
  Then 该金句保留,时间戳/说话人照旧从命中片段真相派生

Scenario: 编造短句照丢(防失真不松)
  Given 金句英文在转写稿任何裁剪变体下都找不到
  Then 照丢,理由如实写「逐字命中不了转写稿」

Scenario: 多处命中的常见短语照丢,理由说真话
  Given 短句(<6 词)在转写稿命中不止一处
  Then 照丢(不猜哪处是出处,守住原守卫防误锚定的意图)
  And 理由写明「命中 N 处,无法唯一锚定」,不再谎报「命中不了」

Scenario: ≥6 词金句行为一字不变
  Given 金句英文 ≥6 词
  Then 匹配/裁剪/多处命中挑最近时间戳/跨说话人丢弃逻辑与修前逐字一致
```

### DoD(修 · 短句错杀)
1. ✅ 复现测试钉死病灶(tests/repair-quotes.test.ts,fixture 用 gate 同源代码自检)。
2. ✅ 变异验证:守卫退回 `<6 continue` → 4 条测试红;恢复 → 绿。
3. ✅ 全量单测绿 + verify-c5 绿;不跑流水线不烧钱。
4. ✅ glm-check --kind code 对抗审计 + 裁决落账本(20260731-007 · save:2 条半救已加防腐测试,2 条噪音实证驳回)。

## C17 · Mac mini 订阅巡航(发现+品味判官+自动种子)(US-4, US-11)

> 决定真相 = docs/adr/0018(2026-07-31 用户明文「抓取清单应该也是自动的,根据订阅的情况」+「按推荐订 4 个」);
> 订阅组合/channel_id/过滤规则/feed 404 工程发现/防钓鱼要求 = 需求共创/调研-新源候选-2026-07-24.md「📡 演讲频道订阅候选」节;
> 品味口径 = 需求共创/内容品味档案.md(运行时读它,活文档改了巡航自动跟)。
> 二次确认口径同 drift #36 受控豁免注明:决策已全部由 ADR 0018 + 用户明文落盘,本片按盘执行,确认环节顺延。

```gherkin
Feature: Mac mini 订阅巡航 patrol-talks(US-4)

Scenario: 订阅配置是数据不是代码
  Given data/talk-subscriptions.json 列 4 频道(AI Engineer / Axios / LangChain / Stripe)
  Then 每频道带 channel_id、名称、机器过滤规则(如 Axios 标题必含 full interview、LangChain 滤 <10min)与判官提示(judgeHint)
  And 增删频道/改规则只改这份 JSON,不改巡航代码

Scenario: 发现通道 feed 优先,坏了自动切备胎
  Given 频道 XML feed(youtube.com/feeds/videos.xml?channel_id=…)2026-07 起大面积 404/500(实测:4 频道 3 个 500)
  When feed 返回非 200 或解析不出条目
  Then 自动切 /videos 页 HTML 备胎:解析 ytInitialData 里的 lockupViewModel(contentId/标题/时长角标)
  And 备胎也失败 → 该频道本轮记 discover-error 进巡航日志(可重试),不拖垮其他频道

Scenario: handle 解析必须防钓鱼(ADR 0018.6)
  Given 订阅条目只给 handle 没给 channel_id(如未来新增频道)
  When 解析 @handle 页拿 channelId
  Then 必须校验页面 title 含配置里的频道名;不含 → 响亮拒绝不采用(实证:@BloombergOriginals 是山寨频道)

Scenario: 三层去重,绝不重复处理
  Given 新发现的 videoId
  Then 已在 pipeline-state 演讲账本(talkVideoIds)→ 跳过
  And data/talks-seed/<videoId>/ 种子已存在 → 跳过
  And 巡航日志已有终态记录(prefilter-skip / 不对味 / 已落种)→ 跳过不重判
  And 可重试记录(judge-failed / seed-failed)不算终态,下轮重试

Scenario: 品味判官逐条留痕,人工可复核纠偏
  Given 过了去重与机器预过滤的候选
  When GLM 判官读 标题+简介+时长,按内容品味档案口径判
  Then 给 对味/不对味 + 一句理由,逐条追加进 data/talks-seed/patrol-log.jsonl(随仓提交)
  And 不对味 → 记录后跳过,绝不下载;对味 → 调既有 seed-talk 下载+上传 Release+落种子
  And 判官调用失败/输出解析不出 → 记 judge-failed(可重试),不瞎猜放行

Scenario: 收尾推仓,失败响亮绝不硬推
  When 本轮有新种子或新日志
  Then git add 只收 data/talks-seed → commit → pull --rebase → push,冲突重试 3 次
  And 仍失败 → 巡航日志留痕 + 退出非零(种子在本地不丢,下轮随新提交一起推)
  And 全程失败路径(发现/判官/下载/推仓)都写 patrol-log,不静默

Scenario: 网络直连,代理不写死
  Given Mac mini 直连外网
  Then 巡航自身与其派生的 seed-talk 都不写死 127.0.0.1:7877
  And 需要代理时走环境变量(HTTPS_PROXY / SEED_TALK_PROXY)可选注入

Feature: 云端衔接 —— 种子待处理时 talks 源自动进场(ADR 0018.5)(US-4, US-11)

Scenario: cron 例行班次自动接管种子(对 C16「cron 零影响」的授权演进)
  Given data/talks-seed 存在「videoId 不在演讲账本」的待处理种子
  When cron 例行班次跑编排器(无 --talks)
  Then talks 源自动进场,与播客源同轮处理(去重/闸门/隔离一分不降)
  And 无待处理种子时 cron 与从前一字不差(talks 不进场)
  And workflow 手动 talks=true 入口保留(人工圈选批次/补跑用)

# 2026-07-31 调度员保险丝(drift #36 口径):巡航首轮积压几十条种子会挤爆一班(每条 whisperX
# 20-100 分钟,撞 GitHub runner 6h 上限、run 被杀留半成品)→ 每班种子限流。
Scenario: 每班种子限流保险丝(默认 3,超出留后班)
  Given 待处理种子多于每班上限(默认 3,写死在代码里当保险丝)
  When talks 源本班选种(cron autoTalks 与人工 talks=true 同样受限)
  Then 只吃上限条数,按 upload_date 旧→新(同日按 videoId)确定性选取
  And 超出的种子原样留在种子区、不记账,下一班 autoTalks 自动再进场接着吃
  And 响亮日志报数:「本班吃 N 条,还剩 M 条留后班」
  And 上限可用 TALKS_BATCH_CAP 环境变量 / workflow 输入 talks_cap 显式覆写(需正整数,非法响亮拒)
```

### DoD(C17)
1. ⬜ 全量单测绿 + verify-c5 绿 + YAML/plist 语法校验;变异验证三刀(判官拦截改放行→红;去重删掉→红;备胎解析破坏→红)。
2. ⬜ 发现/解析走 fixture 测试(真实响应片段);真网络只做只读烟测(4 频道发现通道)+ 判官 ≤5 条标题烟测;不真下载音频、不真跑巡航全链、不 push、不触发云端。
3. ⬜ Mac mini 安装件:launchd plist 模板(独立 label,错开每日新闻项目)+ docs/macmini-巡航安装.md。
4. ⬜ glm-check --kind code 对抗审计 + 裁决落账本。

## 修 · 编排器开工刷新到 origin/main 最新(drift #44,2026-08-01)(US-4, US-5)

> **病根(实证)**:actions/checkout 检出的是 github.sha = run **创建时刻**钉死的 main 快照。并发组
> c7b-pipeline 里排队几小时的 run,执行时前一班的回仓 push(cutoff/skipped/talkVideoIds 账本 + 产物)
> 不在它的检出里 → 旧账本判「种子待处理/集未完成」,把已完成的活重做。实账:run 30624243940 排队 3h,
> 重烧 Replit/Jensen-Axios 两条演讲的转写+浓缩(双份烧钱),叠加 a16z 新长集撞 6h runner 上限被杀。
> **修法(最小)**:pipeline.yml 在 checkout 之后、跑编排器之前加一步 `git fetch origin main &&
> git reset --hard origin/main`。单 job 单 checkout,cron/dispatch 全入口共用 → 一处加步全覆盖。
> 编排器 js 不动:readState 在进程启动时才读盘,刷新步在它之前即天然覆盖。

```gherkin
Feature: 排队 run 不再拿旧账本重烧已完成的活(drift #44)(US-4, US-5)

Scenario: 排队期间前一班已回仓,后一班开工看到最新账本
  Given 一个 cron/dispatch run 在并发组里排队数小时
  And 排队期间前一班已把 cutoff/skipped/演讲账本 push 回 main
  When 该 run 开始执行
  Then 开工第一步把工作区刷到 origin/main 最新(fetch + reset --hard)
  And 编排器读到的账本包含前一班终态,已完成的集/演讲不再重跑重扣钱

Scenario: 刷新失败宁可停班,不拿旧账本干活
  Given git fetch origin main 失败(网络/凭证故障)
  Then 该步响亮失败、run 变红发告警邮件,本班不跑等下一巡
  And 不允许静默降级为「用检出时的旧快照继续」

Scenario: 全入口同受保护
  Given cron / backfill / refresh / talks / seed 任一入口触发
  Then 同一 checkout + 刷新步在编排器之前执行,无旁路
```

### DoD(修 · drift #44)
1. ✅ workflow 结构测试钉死顺序(tests/pipeline-workflow.test.ts:checkout → fetch+reset → 编排器;persist-credentials 不许关)。
2. ✅ YAML ruby 解析校验通过(修掉一处 step name 内 `#44` 被当注释截断的坑,已加引号)。
3. ✅ 全量单测绿;不 push 不触发云端。
4. ✅ glm-check --kind code 对抗审计 + 裁决落账本。

## 修 · ASR 专名词表偏置转写拼写(治本演讲误伤,2026-08-07 用户拍 C)(US-4, US-11)

> **病根(实证)**:whisperX 对 AI 产品/公司/人名常听岔(实例 Jensen×LangChain 反复卡 D17:
> Harrison Chase[LangChain 创始人]/LLaMA/vLLM/OpenStack/Claude 被听成别的),真专名不在转写稿逐字
> 出现 → 事实层闸门 D17 判「疑编造」拦下整条(定点重写救不回、隔离)。前修 NIM/Nemotron 逐词加容错=
> **打地鼠**(每次转写听岔的词不同),且往容错表塞词=放松防失真校验。
> **修法(治本,不放松闸门)**:whisperX 调用加 `--initial_prompt`(词表 prompts/asr-vocab.txt,常见 AI
> 专名),偏置模型**把真专名拼对** → 逐字进转写稿、闸门自然过。**只影响「怎么拼」不新增未说内容**;
> 闸门口径一字不动(非 standard-change)。词表缺失/空 → 退化为无 prompt,绝不阻断转写。
> **残留风险(记账)**:initial_prompt 理论上可能偏置模型「无中生有」插入词表里的词(污染真相源);
> 用纯专名清单(非引导句)+ 控制长度把风险压到最低,后续按实测集观察,发现插词再收窄词表。

```gherkin
Feature: whisperX 用 AI 专名词表偏置拼写,治本 ASR 误伤误判(US-4, US-11)

Scenario: 真专名被正确拼进转写稿,事实层闸门自然过
  Given 一条演讲密集出现 AI 专名(如 Harrison Chase / LLaMA / vLLM)
  And prompts/asr-vocab.txt 词表含这些专名
  When whisperX 带 --initial_prompt 词表转写
  Then 模型倾向把真专名逐字拼对、写进转写稿
  And 导读/实体里这些专名在真相源命中,D17 事实层闸门不再误判「编造」

Scenario: 只偏置拼写、不放松任何闸门校验
  Given 事实层闸门 D17 口径与脚本一字未改
  Then 修法不进容错表、不降硬校验,仅提高转写拼写准确度(治本非放松)

Scenario: 词表缺失不阻断转写(fail-safe)
  Given prompts/asr-vocab.txt 不存在或为空
  When asrInitialPrompt() 载入
  Then 返回空串、whisperX 不带 --initial_prompt 照常转写(退化不报错)
```

### DoD(修 · ASR 专名词表)
1. ✅ prompts/asr-vocab.txt 词表落地(注释行说明用途 + 单行专名清单);asrInitialPrompt() 载入剔注释、缺文件回空串。
2. ✅ whisperX args 条件注入 `--initial_prompt`(flag 名对 whisperX 官方源核实无误)。
3. ✅ 单测 3 条(含卡过 Jensen 的真专名在词表、剔注释、缺文件 fail-safe);全量 822 绿。
4. ⛔ 真转写效果待云端实跑验证:Jensen×LangChain 去账本重跑,看专名是否进稿、D17 是否过(债:landing 后触发)。

---

## C18 · 详情页净化 + 全站字体统一 + 顶栏吸顶(UI 线)

> 2026-08-09 用户拍板(AskUserQuestion 四选):①全站正文字体统一走系统栈(接上次只改详情页,这次「同步做」全站)②全站彻底去掉知识图谱 ③整个默认页脚去掉 ④详情页顶栏(← 返回 + 分享/收藏)向下滚动时吸顶(改当年 C13f「顶栏不吸顶」的决定,仅限详情页)。**纯 CSS(assets/styles/custom.scss)+ config(scripts/patch-site.mjs 加刀),走 deploy-site 独立通道,不碰内容 pipeline** —— 与并行内容线零冲突。

```gherkin
Feature: 详情页净化 + 全站字体统一 + 顶栏吸顶(US-1, US-2)

Scenario: 全站正文字体统一系统栈
  Given 非详情页(实体页/人物页)正文原继承 Quartz --bodyFont=Source Sans Pro(西文,中文不受控)
  When 把 custom.scss 的 article 字体规则去掉 body:has(.pd-play) 前缀改为全局 article
  Then 全站所有正文页(详情页+实体页+人物页)正文都走 --pd-font 系统栈
  And 标题/金句的普惠体、行内代码等宽不受影响

Scenario: 全站彻底去掉知识图谱
  Given Quartz graph 组件配在 quartz.config.yaml:150-154 挂全站右栏
  When patch-site.mjs 加刀把 graph 插件 enabled 改 false(找不到锚点硬错)
  Then 全站任何页面(桌面右栏 + 手机端)都不再出现节点关系图
  And 正文双链与「关联」栏的知识关联不受影响

Scenario: 整个默认页脚去掉
  Given footer 组件含 Created with Quartz + GitHub/Discord 链接(quartz.config.yaml:214-219)
  When patch-site.mjs 加刀把 footer 插件 enabled 改 false
  Then 全站页面底部不再显示 Quartz 归属和外部链接
  And 仓库 LICENSE 中的开源版权声明仍保留(MIT 许可合规)

Scenario: 详情页顶栏向下滚动时吸顶
  Given 详情页顶栏 .pd-top 原 position:static(C13f 第八批用户当时定的不吸顶),滚动即消失
  When 只对详情页 body:has(.pd-play) .pd-top 设 position:sticky; top:0; z-index 抬高 + 背景不透明
  Then 手机与桌面详情页向下滚动时,← 返回 和 分享/收藏 保持在顶部可见
  And 首页/大类页/必读页等其它页顶栏行为不变(仍不吸顶)
```

### DoD(C18)
1. custom.scss:article 字体规则去 body:has(.pd-play) 前缀(含 code 恢复那条)+ 详情页 .pd-top 加 sticky;patch-site.mjs 加两刀(graph/footer enabled:false,仿 bases-page 刀,锚点找不到硬错)。
2. sass 编译干净 + 全量单测绿。
3. 浏览器实测(375 宽 + 桌面):全站字体系统栈、全站无图谱、全站无页脚、详情页滚动顶栏吸顶且不遮正文;部署后线上 grep 真产物坐实。
4. GLM 冷喂复核 + adjudicate。

---

## C19 · 正文每2-3句自动分段,存量+新集全生效(内容线)

> 2026-08-09 用户拍板:正文段落太长不适合手机阅读,要「每隔 2-3 句分段」,且**已发布全部集也要立即生效**(选项 A)。实现层由我定=**render.mjs 后处理**(scripts/render.mjs:779 之后对 bodyMd 按句重切;项目自持脚本、持久、不受 site/ 重建影响,优于新写 Quartz 本地插件)。存量集靠云端 **refresh=all 重刷**(读缓存 digest_md,不重跑 GLM=不烧钱;有 C15 存量回刷先例)。**改 render.mjs 属内容线,与并行会话 [1301] 有竞态,排在 C18 之后并错开。**

```gherkin
Feature: 正文每2-3句自动分段,存量+新集全生效(US-4, US-11)

Scenario: 长段按句重切成短段
  Given GLM digest_md 某正文自然段含 5+ 句(中文句末标点 。!?…)
  When render.mjs 生成 md 前对该段按句重切,每 2-3 句组一个自然段
  Then 该段被拆成多个 2-3 句短段,更适合手机阅读

Scenario: 尊重 GLM 已有的短段边界(只拆长不合并短)
  Given 某段已是 1-2 句(GLM 语义已分好)
  Then 该段保持不动,不与相邻段合并

Scenario: 分段不破坏正文内嵌交互元素
  Given 正文段落里嵌有 <button class="pd-ts"> 回原文按钮 / [[双链]] / 行内代码
  When 按句重切
  Then 这些元素随其所在句子完整保留,绝不被从中间截断

Scenario: 只作用正文自然段,不动结构块
  Given 标题(##)、引用块(>)、【背景】块、关联块([!info])、列表
  Then 分段只作用于正文散文段,这些块结构一字不动

Scenario: 存量集立即生效
  Given 已发布 40+ 集
  When 云端 refresh=all 重刷(读缓存 digest_md,不重跑 GLM)
  Then 全部存量集重新生成 md 并分好段;新集经正常流水线也分好段
```

### DoD(C19)
1. render.mjs 加「按句分段」纯函数(保护 pd-ts/双链/行内代码;只拆长段不合并短段;不碰结构块)+ 单测(长段拆/短段不动/元素不断/结构块不动)。
2. 全量单测绿。
3. 本地对样本集 dry-run 验证分段效果(不烧钱,不动线上)。
4. GLM 冷喂复核 + adjudicate。
5. 存量重刷云端跑(错开并行会话内容线,查 run 竞态后再触发)。
6. 用户验收分段后手机阅读效果。

---

## C20 · 详情页内容回归设计稿(删本集关键词 + 接着看排版)

> 2026-08-09 用户拍板(drift #48)。①删「本集关键词」页底斜体行(改 C10 决策)②「接着看」保留 US-7+第22轮 🔒 关联原因、排版对齐设计稿。render.mjs(+custom.scss);内容线需云端重刷 + 错开并行会话。

```gherkin
Feature: 详情页内容回归设计稿(US-1, US-7)

Scenario: 删掉页底「本集关键词」斜体行
  Given render.mjs 曾在正文末尾生成 *本集关键词:xxx · xxx*(C10 自由细标签降级为页底关键词)
  When 删掉 keywordsLine 及其定义与引用
  Then 详情页不再出现「本集关键词」行
  And 知识点仍在右栏「这一集涉及」+ 正文双链里,不丢信息

Scenario: 接着看保留关联原因(守 🔒)、排版对齐设计稿卡片
  Given US-7 P0 🔒 + 「知识关联区三段·第22轮」🔒 锁定「相关集各注明关联原因」
  When 优化「接着看」排版
  Then 关联原因(同嘉宾/同公司/同概念:具体实体名)一字不删(守锁定,硬校验)
  And 每条相关集 = 集标题(块级链接) + 关联原因(链接下方一行小灰字),对齐设计稿 .ex 卡片
  And 分组结构(顺着X挖下去 / 换个口味)与卡片边框圆角白底不变
```

### DoD(C20)
1. render.mjs:删 keywordsLine(796-797 定义 + 819 引用);renderRelatedEpisodes 的 line() 关联原因由「—— 原因」改为包进 `<span class="pd-rz">` 挂点(原因文字一字不动,守 🔒)。
2. custom.scss:`.pd-ex li a` 块级 + `.pd-rz` 下方小灰字样式。
3. 单测:关联原因仍逐字出现在输出(守锁定断言不许松)+ 本集关键词不再出现;全量绿。
4. 本地 build 浏览器实测「接着看」卡片观感对齐设计稿 + 无本集关键词。
5. GLM 冷喂复核 + adjudicate。
6. 存量重刷云端跑(与 C19 同批,错开并行会话)。

---

## C21 · 手机端详情页收尾(去吸顶目录 + 涉及去重)

> 2026-08-10 用户拍板:①手机吸顶目录(.mtoc)去掉 —— C15 口语体正文已无小节标题,目录退化成只剩「本集带走/全部金句/接着看」3 个尾部锚点、从尾节开始很奇怪、无正文导航价值;②「这一集涉及」手机端 2 入口去重 —— 窄屏右栏原框 .pd-rel 掉到正文下 + 页尾克隆 .mrel = 2 个,隐藏右栏原框只留页尾克隆。**纯 CSS(custom.scss),deploy-site 即生效,不重渲染**;render 端 mtoc() 仍建隐藏的 .mtoc DOM(+滚动监听)属冗余,记 tech-debt 待清。PC 端本就只右栏 1 个涉及、无 .mtoc/.mrel(PC @media 已 display:none),不受影响。

```gherkin
Feature: 手机端详情页收尾(US-1)

Scenario: 手机端去掉吸顶折叠目录
  Given C15 口语体正文无小节标题,手机吸顶目录(.mtoc)只剩「本集带走/全部金句/接着看」尾部锚点
  When 手机端 CSS 隐藏 .mtoc
  Then 手机详情页不再出现吸顶折叠目录

Scenario: 「这一集涉及」手机端只留一个入口
  Given 手机端右栏原框 .pd-rel(窄屏掉到正文下)+ 页尾克隆 .mrel = 2 个「这一集涉及」
  When 手机端 CSS 隐藏 body:has(.pd-play) .right.sidebar .pd-rel
  Then 手机详情页只剩页尾克隆 .mrel 一个「这一集涉及」
  And 页尾克隆源(render.mjs 读 .pd-rel blockquote)不受 display:none 影响(DOM 在,cloneNode 正常)

Scenario: PC 端不受影响
  Given .mtoc/.mrel 在 @media(min-width:1024) 已 display:none,PC 只右栏 .pd-rel 一个涉及
  Then PC 端目录/涉及保持原样,只手机端两处生效
```

### DoD(C21)
1. custom.scss 手机 @media 块加两条:`.mtoc{display:none}` + `body:has(.pd-play) .right.sidebar .pd-rel{display:none}`。
2. sass 编译干净 + 全量单测绿。
3. mirror 手机端实测:无吸顶目录、只 1 个「这一集涉及」(页尾)、无右栏 toc 冒出;PC 端不变。
4. GLM 冷喂复核 + adjudicate。
5. tech-debt 记 render 端 mtoc() 目录建造冗余(下次 render 改动时清)。

## C22 · SEO meta + 结构化数据(JSON-LD + llms.txt)

> 2026-08-10 用户拍板「核心 + llms.txt」;robots 保持 Cloudflare 现状(挡训练/放检索)不碰。研究核实(2026-08):JSON-LD 优先级最高——帮机器正确理解页面实体/结构;但「加 schema 就更被 AI 引用」的量化说法全来自 SEO 厂商自述、无同行评审,按【未验证】,故只求「正确解析 + 富媒体资格」,不神化。llms.txt 仅 Perplexity 会读、Google 明确不用(对 Search 零影响),只因能零维护自动生成才顺手做。agentic-llms.txt(= Wix 营销、无交易动作可指)+ MCP(需常开服务、逆本项目「无常开机器」)已排除。全构建期改动、零新基建。**版权红线**:JSON-LD 按「我们的中文精华摘要」建模(文章类),不冒充原播客本体。**schema 铁律**:字段须与页面可见内容一致、宁缺毋滥(残缺/泛化 schema 会被判「声称与实际不符」反而有害)。

```gherkin
Feature: SEO meta + 结构化数据(US-1, US-2)

Scenario: 每页有规范 canonical
  Given 全站页面此前无 <link rel="canonical">
  When 构建期按 baseUrl + slug 注入 canonical
  Then 首页/集页/大类页/实体页各带一个指向自身规范 URL 的 canonical

Scenario: 集页社交图是真封面(修坏 og:image)
  Given 集页 og:image 曾是坏的颜色占位 /static/#64748b(cover 色值被 Quartz 当社交图)
  When 有源封面的集显式指向 /covers/<id>.jpg、无源图的集指向站点默认图
  Then 集页 og:image 是可打开的真图片,分享到社交/AI 带封面

Scenario: 首页有人写的简介
  Given 首页 description 曾是「全部102创业与行业46…」导航计数拼串
  When 首页 frontmatter 写入一句站点简介
  Then 首页 meta description / og:description 是通顺的站点简介

Scenario: 集页标为文章类型
  Given 集页 og:type 曾是 website
  Then 集页 og:type = article

Scenario: 集页带与内容一致的 JSON-LD
  Given 集页此前无结构化数据(全站 0 块)
  When 构建期从 frontmatter 注入 JSON-LD(标题/中文摘要/日期/主持·嘉宾/大类)+ BreadcrumbList
  Then 集页有一段合法 application/ld+json,类型为文章类(BlogPosting/Article)
  And 字段全部来自页面可见内容、不虚报,且不声称是原播客本体(版权红线)

Scenario: /llms.txt 自动生成且与内容同步
  Given 站点无 llms.txt
  When 构建期从内容索引自动生成 /llms.txt(站点摘要 + 核心页面链接)
  Then 请求 /llms.txt 得到与当前已发布集同步的 Markdown 说明,无需人工维护

Scenario: robots / agentic 项按拍板不动
  Given 用户拍板 robots 保持 CF 现状、agentic-llms.txt 与 MCP 排除
  Then 本片不新增/不改 robots.txt,不建 MCP,不出 agentic-llms.txt
```

### DoD(C22)
1. patch-site.mjs 扩 Head.tsx 补丁:canonical + JSON-LD + og:type=article(按 fileData 分页类型:集页=文章类,首页=WebSite)。
2. 集页社交图修复:frontmatter 显式 socialImage 指真封面(有 /covers/<id>.jpg 用之,无则站点默认图),不再落到 cover 色值;**本地 Quartz build 验 Quartz 实际认哪个字段(不靠猜)**。
3. build-list.mjs 首页 frontmatter 加 description。
4. 自动产 llms.txt(新脚本或并进 build-list),接线 deploy-site.sh + pipeline 全库重建;内容随已发布集自动同步、零人工维护。
5. 红绿:JSON-LD 字段映射 / canonical 生成 / llms.txt 生成各有单测;全量单测绿。
6. 本地 build + curl-mirror 实测逐条对上:canonical、og:image 真图、og:type=article、JSON-LD 结构合法且字段与可见内容一致、/llms.txt 与已发布集同步。
7. GLM 冷喂复核(--kind code)+ adjudicate。
8. robots 不碰(CF managed 保持);agentic-llms.txt / MCP 明确不做,排除理由已记 story-map C22。

---

## C23 · 每日补历史·把当天新增顶到 ~5(2026-08-12 用户拍板)

> 起因:头部播客不每天更,干旱日站上「最新」空着。用户要「一天没内容就别停,补历史存货」,并细化为**每天把新增总量顶到 ~5**。
> 放开 drift #22「历史 backlog 不碰」为**有条件放开**(只在当天不足时补、只倒序往回补),记 ADR 0021。
> 补的集走完整管线 → 自动新格式(ADR 0020 实质优先);标 `added=当天` → 冒到「最新」顶(drift #47)。

```gherkin
Feature: 每日补历史·把当天新增顶到 ~5(C23)(US-4, US-5)

Scenario: 每日顶量(软目标 ~5,只在当天末班判,不抢真新)
  Given 当天(按 meta.added UTC 日)已入库的干净集有 k 集
  When 当天末班 cron(20:00 UTC,传 --daily-topup)跑完真新集处理 + 补活、k < 5
  Then 从带 archiveFile 的源倒序补 (5-k) 集,补进来的标 added=当天
  When k ≥ 5
  Then 不补(真新够了不挤);补只发生在真新集/补活之后
  And 早班(02/08/14 UTC)不顶量——真新集要一整天才流入完,早班一数总是空会天天狂补

Scenario: 倒序往回补(从库内该源最旧那期再往旧)
  Given 库内该源现有最旧一期日期为 D
  Then 补的是归档里「pubDate < D」的集,按日期倒序(紧挨 D 的先补),逐日往更旧扩
  And 不消费 data/backfill-pending 那批旧存货(忽略)

Scenario: 补的集 = 完整管线 = 新格式
  Then 补的集经 浓缩(实质优先 ADR 0020)→ 判官 → 防失真闸门 → 出稿 → TTS,与真新集同链
  And added=当天 → 在「最新」冒到顶部

Scenario: 去重与跨源查重(疑似即跳过,不多做)
  Then 已完成/已隔离集不重复补(ID 去重 deriveId)
  And 每个候选过跨源标题查重(复用 ADR 0017 findTitleDuplicate:候选标题 vs 库内所有源 title_en)
  And 命中疑似跨源重复 → 直接跳过该集(不补、不登记、倒序自然取下一集);不做人工待裁那套

Scenario: 只带归档的源能补 + 归档见底
  Then 只有配了 archiveFile 的源(现状=只有 Lenny's,353 集)参与补;其他源无归档不补
  And 该源可补的都补完(倒序到底)→ 当天补量=0(回到只靠真新),不报错

Scenario: 失败不污染 + 只走日常 cron
  Then 补集失真→隔离 data/skipped、[1301]→按 BLOCK_CAP 放弃、转瞬失败→留半成品(与真新同口径)
  And 顶量只在当天末班 cron(20:00 UTC,--daily-topup)触发;早班/手动 dispatch/--backfill/--talks/--source/--seed/--ensure-audio 各入口不触发
```

### DoD(C23)
1. `selectBackfillBackward` 纯函数:older-than-anchor 过滤 + ID 去重 + 跨源标题查重(疑似跳过)+ 倒序 + slice n;单测覆盖。
2. `countAddedToday` + `backfillTopUpPass`:当天 added 计数、need=max(0,5-k)、逐集处理(复用 processEpisode + 隔离/审查口径)。
3. main() 默认 cron 路径接顶量阶段(守卫:非 --backfill/--talks/--source);现有 selectNew/processSource 一行不改。
4. 红绿:选集器 + need 计算单测;full suite 绿。
5. ADR 0021 记「有条件放开 drift #22」;story-map C23 行。
6. GLM 冷喂复核(--kind code)+ adjudicate。

## C24 · 卡片无限滚动(软加载)· 首页 + 大类页(2026-08-14 用户拍板)

> 起因:首页把全部卡一次性烤进 HTML,随补历史每天 +5 越来越长、渲染越来越重。用户要「分页 + 软加载」。
> 拍板:①无限滚动(滚到底自动出下一批,非页码/非按钮)②首页 + 大类页都做(共用同一套卡片标记)③手机端从详情返回要还原到之前位置(PC 点详情开新标签、天生不受影响)。
> 静态站无后端 → 走路线 A「渐进显示」:卡全留在 HTML(SEO 不降级),脚本只控制「渲染/折叠」;不做真分页多页文件(留到几百上千集下载量真成问题时再议)。

Feature: 卡片流软加载 —— 初次只出一批,滚动渐进加载(C24)(US-1, US-2)

Scenario: 初次打开只显示前一批
  Given 首页/大类页有远超一屏的卡片
  When 页面加载完成(JS 生效)
  Then 只显示前一批(默认 24 张)卡,其余折叠(.io-fold 不渲染),页面明显变短

Scenario: 滚到接近底部自动加载下一批
  Given 当前只露出了前 N 批
  When 视口滚动到接近底部的哨兵元素
  Then 自动露出下一批(再 24 张),不点击、不跳页、不整页刷新
  And 一直可续到最后一张;全部露完后哨兵不再触发

Scenario: 日期分组头跟着卡走(首页)
  Given 首页卡按入库日期分组、每组一个日期头
  When 某日期组的卡还没被露出
  Then 该日期头连同该组一起不显示(不出现光杆空日期头)
  And 该组有任意一张卡露出时,日期头随之出现

Scenario: 大类页筛选后按结果重新分批
  Given 大类页有三轴筛选(同时属于/来自/时间)与排序
  When 用户改筛选或排序
  Then 无限滚动按「筛选后的可见结果」从第一批重新分批(先出前 24,再滚动续)
  And 折叠用的 .io-fold 与筛选用的 style.display 互不打架(任一隐藏即隐藏)

Scenario: 关闭 JS 全部卡照常显示(SEO/降级)
  Given 浏览器禁用 JS
  When 打开首页/大类页
  Then 全部卡照常可见(折叠只由 JS 施加;无 JS 即无折叠)
  And 现有交互(整卡进详情、封面、标签、已读压暗)一个不变

Scenario: 手机端从详情返回还原到之前位置
  Given 手机端(同标签 SPA 导航)用户已滚动并加载了多批
  When 点某张卡进详情、再按返回回到列表
  Then 回到之前加载到的批次与滚动位置(不弹回顶部、不重置成第一批)
  And PC 端点详情开新标签、原页不动,天然不需还原(此条只判手机)

### DoD(C24)
1. `.io-fold`(卡与日期头)CSS 折叠规则进 custom.scss;与 `.ep-read`/filter 的 display 叠加无冲突。
2. scriptBlock 内 `window.__io` 共享模块:批大小、可见集(排除 filter 的 display:none)、recompute(reset)、哨兵 + IntersectionObserver、首页日期头联动;`nav` 事件重跑(SPA)。
3. 大类页 filterScript 的 `apply()` 末尾调 `window.__io && recompute(true)`,筛选/排序后重新分批。
4. 手机返回还原:离页(点卡,窄屏)存 {shown, scrollY} 进 sessionStorage,回到列表 init 时消费一次(还原批次+滚动位),再删键;PC 不触发。
5. 红绿:scriptBlock/filterScript 结构串测(io-fold/IntersectionObserver/哨兵/recompute 挂钩存在)+ 本地 build 浏览器实测 6 条(初批短/滚动续/日期头联动/筛选重分批/noscript 全显/手机返回还原)。
6. story-map C24 行(🟡);GLM 冷喂复核(--kind code)+ adjudicate。

## C25 · PC 搜索浮层重塑(2026-08-15 用户拍板,参考少数派)

> 起因:用户看 PC 搜索「完全没有设计感」+「鼠标移到结果上右侧内容会变化」很怪。彻查根子=顶栏点开的是 Quartz 原生搜索浮层(左结果列表 hover→右预览是它内置行为,CSS 改不掉;浮层本身没被美化过)。
> 关键抉择(AskUserQuestion 拍板):**保留 Quartz 检索引擎不换**(🔒#9 中文索引不降级、ADR 0019 定的「搬节点不重写」不动),只在其上做「外观 + 交互层」三改;搜索历史用**真实历史+清除**(像少数派),无历史时显推荐词兜底。
> 手段:纯 CSS(custom.scss,照设计稿 style.css 的 .skrim/.sbox/.si 数值,套到 Quartz 的 .search-container/.search-space/.search-bar/.result-card 类名)+ 独立 JS(assets/js/search-history.js,document 事件委托对 Quartz SPA 免疫)+ patch-site 全站 Head 注入一处。走 deploy-site 通道,零 pipeline 改动。

Feature: PC 搜索浮层重塑 —— 保 Quartz 引擎,外观交互照少数派(C25)(US-1, US-3)

Scenario: 去掉 hover 右侧预览(单栏结果)
  Given 桌面端点开搜索、输入了关键词
  When 结果列表出现
  Then 结果为单栏(无右侧预览栏),鼠标在结果间移动右侧不再变化
  And 关键词在结果里以主题红(--pd-accent)高亮

Scenario: 浮层外观照设计稿
  Given 桌面端点开搜索
  Then 浮层是居中白盒(圆角/阴影)+ 半透明遮罩,输入框融入盒子顶部
  And 数值取自设计稿 .skrim/.sbox/.si,深浅色随主题 token 自动适配

Scenario: 搜索历史(记录 + 显示 + 清除)
  Given 用户搜过至少一个词(停手 ~1.2s 或点进某结果即记录)
  When 再次打开搜索、输入框为空
  Then 输入框下方显示「搜索历史」标题 + 历史词药丸 + 右侧垃圾桶清除按钮
  When 点垃圾桶
  Then 历史清空,改显「试试」+ 推荐词兜底

Scenario: 点药丸触发检索
  Given 浮层显示历史/推荐词药丸
  When 点某个药丸
  Then 该词填入搜索框并触发 Quartz 检索(结果就地出现)

Scenario: 引擎不降级 + 空查询交回 Quartz
  Given 输入框有值(非空查询)
  Then 历史区隐藏,结果完全由 Quartz 原生检索渲染(本片不碰检索逻辑)

### DoD(C25)
1. custom.scss:遮罩/白盒/输入框/单栏化(隐藏 .preview-container)/结果项/高亮/历史区样式,全用 --Bx/--pd-accent token(深浅色自适配)。
2. assets/js/search-history.js:localStorage['pd-search-hist'](去重/上限 8/记录 ≥2 字符);document 委托(focusin 渲染、input 显隐+debounce 记录、click 处理清除/药丸/结果卡);无历史显 SUGGEST 兜底。
3. patch-site.mjs:读 search-history.js 内容,JSON.stringify 注入全站 Head(<title> 锚点,不撞默认浅色种子脚本)。
4. 本地 build 浏览器实测:浮层外观/单栏无预览/高亮/历史记录+显示/清除回兜底/点药丸触发检索,console 无 JS 报错。
5. story-map C25 行(🟡);待部署 + 用户线上真机验收。

---

## C26 · JSON Feed 全文订阅源(面向 Agent + RSS)· US-1/US-2 · ADR 0022

**本片做什么**:新增 `/feed.json`(jsonfeed.org v1.1),让 Agent / 现代 RSS 阅读器能订阅并直接读到中文精华全文。不碰现有 `/feed.xml`(播客音频)、`/llms.txt`(目录)、pipeline、防失真闸门。

Scenario: 订阅源存在且格式合法
  Given 站点已部署
  When 取 https://talk.solomind.cc/feed.json
  Then 返回合法 JSON,version = "https://jsonfeed.org/version/1.1"
  And title=站名、feed_url 指向自身、language=zh-CN、authors=[{name:站名}]

Scenario: 每集一条 item,含中文精华全文
  Given feed.json 已生成
  Then 每条 item 有 id(=集页 URL)、url、title、content_text
  And content_text = 该集 digest_md 全文(不是 tldr 摘要),summary = tldr
  And 已发布集数(samples/*.md)与 items 数一致

Scenario: 新精华置顶(按入库日排序)
  Given 一集原集日期很旧但今天才入库(meta.added=今天)
  Then 它排在 items 顶部(date_modified=入库日),不因原集日期旧而沉底
  And date_published=原集日期(RFC3339),阅读器靠 item id 判新未读

Scenario: 守版权红线
  Then feed authors / 每条 item 均不标 PodcastEpisode/PodcastSeries(不冒充原播客本体)
  And item.url 指本站集页(不用 external_url 把订阅者引走);诚实溯源在集页

Scenario: 分类标签与站点一致
  Then item.tags = 该集大类(源 render.mjs episodeCategories,与首页卡片 chip 同源),无「未分类」

Scenario: 订阅源随站上线、缓存合理
  Given deploy-site 跑完
  Then public/feed.json 存在且 items>0(部署前硬断言,否则拒绝部署)
  And _headers 给 /feed.json 配 max-age=3600, must-revalidate(同 /feed.xml)

# ── C26 追加(2026-08-16 用户:线上要有 RSS/Agent 可见入口 + 自发现)──

Scenario: feed 自发现(粘站点网址即可订阅)
  Given 任意页面 <head>
  Then 有 <link rel="alternate" type="application/feed+json" href="/feed.json">
  And 有 <link rel="alternate" type="application/rss+xml" href="/feed.xml">
  So 阅读器/Agent 只拿到站点 URL 也能自动定位 feed

Scenario: PC 主页侧边栏「订阅更新」入口(用户拍板放侧边栏)
  Given PC 首页/大类页/必读页 左栏 .pd-left
  Then 有「订阅更新」按钮,排在「我的收藏」之后、「全部主题」之前(同 .pd-myfav 弹层手法)
  When 点它
  Then 弹出订阅弹层,列三档:🎧 feed.xml(听)/📰 feed.json(读全文)/🤖 llms.txt(喂 Agent),各带「复制」
  And 复制走 navigator.clipboard,老浏览器/非安全上下文有 execCommand 兜底
  And 遮罩点击 / Esc 关闭;弹层色走深色令牌(--pd-accent-soft 等)不写死
  And 手机档 .pd-left display:none → 入口只在 PC(用户明选侧边栏),不破坏手机版

### DoD(C26)
1. seo.mjs:纯函数 buildJsonFeed(episodes)(+ toRfc3339)输出 JSON Feed v1.1;content_text=全文、summary=tldr、added 降序、date_published=原集日期、authors=本站。
2. scripts/build-json-feed.mjs:collectPublishedFull 采 samples/*.md 已发布集(meta+digest+entities),分类走 render.mjs episodeCategories;--out 写 public/feed.json。
3. deploy-site.sh:build-json-feed 一步 + _headers 加 /feed.json 缓存 + 部署前断言 items>0。
4. tests/build-json-feed.test.ts:结构/全文/排序/日期/版权/tags/空输入 + collectPublishedFull 真库采集,全绿(与 seo.test 合计 30 测)。
5. 线上 curl /feed.json 校验:合法 JSON + version + 全文 + items 数;story-map C26(🟡);待用户线上验收。
6. (追加)patch-site.mjs Head 注入 feed 自发现 link(feed+json / rss+xml);build-list.mjs 左栏加「订阅更新」按钮 + scriptBlock openSub 弹层(三档 feed + 复制,clipboard + execCommand 兜底);custom.scss 弹层样式(深色令牌);URL 用 location.origin 不写死域名(GLM 006[5])。
7. (追加)tests/build-list.test.ts「C26 订阅入口」4 测绿(按钮位置/三档 feed/复制兜底/深色令牌);GLM 20260816-006 冷审 6 条(1 real 采纳=location.origin,5 noise 逐条反证)已 adjudicate。线上 curl 校验 <head> 自发现 link + 首页含 pd-subscribe。

## C27 · 访问计数(真实 PV 展示)· US-1 · ADR 0023

> 2026-08-16 用户提出「关于本站下面加每天进站用户数量,可以用 PV」并问「数据小要不要乘 10」;
> 我方拒绝加工数据(公开展示的数字造假),用户 AskUserQuestion 拍板:自建免费计数器 + 「累计+今日」都展示(真实数)。
> 二次确认 = 用户对 4 条验收标准回「继续」(同 drift #36 口径)。

Scenario: 每次页面浏览计一次(PV 口径,真数不加工)
  Given 任何人打开站点任一页面(含 SPA 换页)
  Then 计数器 +1(POST /hit,Quartz 'nav' 事件驱动:首发+换页各 1)
  And 无 'nav' 的页面 2.5s 后兜底补记一次,有 nav 不重复

Scenario: 首页「关于本站」下展示两个真实数字
  Given PC 左栏(首页/大类页/必读页)
  Then 「关于本站」下方出现一行「累计访问 N · 今日 N」
  And 「今日」按北京时间(UTC+8)切日
  And 数字来自计数接口真实返回,前端不做任何加工

Scenario: 计数服务挂了,站点零影响
  Given 计数 Worker 不可达/报错
  Then .pd-pv 那一行保持 hidden 安静消失
  And 页面无报错、无卡顿、其他功能不受影响

Scenario: 零费用 + 数据自持
  Given Cloudflare 免费档(Workers + Durable Object SQLite)
  Then 不产生费用;数据在用户自己 CF 账号,后台可查原始数
  And 部署凭证走仓库 secret(CLOUDFLARE_WORKERS_TOKEN),本机不接触明文

### DoD(C27)
1. workers/pv-counter/(worker.js + wrangler.toml):单例 DO 计数,POST /hit / GET /stats,CORS 白名单,bjDay 北京切日。
2. .github/workflows/deploy-pv.yml:workflow_dispatch + workers/pv-counter/** 改动触发,Node 22 + wrangler deploy。
3. assets/js/pv.js 经 patch-site Head 全站注入(与 search-history 同通道);build-list 左栏 about 下 .pd-pv 容器 + custom.scss 样式。
4. 单测:bjDay 切日边界 / corsHeaders 白名单 / 容器位置 / pv.js 失败静默,全绿。
5. 部署后 curl Worker /hit /stats 真返回;deploy-site 后线上首页出现计数行;用户线上验收。

## C28 · RSS 自带官方转写稿(把 3 小时/集 变成几秒)· US-1/US-4 · ADR 0024

> 2026-08-17 用户问「我怎么样把内容做多?你总是一天一集」。查明真因:22 源里 19 源走语音转写,
> 项目自测 0.59 倍实时 → 一集 100 分钟烧 2.8h CPU;叠加「同时只允许一个跑批」+「单批 6h 上限」
> → 绝对上限约 8 集/天、实际 2–4 集。**而扫 feed 发现三个已配源本来就把官方稿挂在 RSS 的
> `<podcast:transcript>` 里**(Beyond Coding 206/263 SRT、DOAC 139/871 Whisper格式JSON、
> WorkOS 28/31 纯文本无时间戳)—— 我们在给自带稿子的播客重新听一遍。
> 用户拍板:**两个都开(Beyond Coding + DOAC),DOAC 只收商业/科技题材**。

Scenario: feed 里有可用转写稿就别烧 ASR
  Given 某集的 <item> 带 <podcast:transcript url=... type=...>
  And 该稿格式带时间轴(Whisper JSON / SRT / VTT)
  Then 取源直接下载并转成本项目稿格式(扁平数组 {start,end,speaker,text}),跳过 whisperX
  And 该集处理时间从小时级降到秒级

Scenario: 拿不到或格式不带时间轴 → 老老实实回落 ASR
  Given 转写稿只有纯文本(text/plain,无时间戳)或下载失败
  Then 回落到原有 whisperX 路线(不静默跳过、不硬失败)
  And 理由打印出来(哪一集、什么原因)

Scenario: 归属闸门照旧生效(防拿错稿)
  Given 用 feed 稿取源成功
  Then 仍跑 transcript-guard(官方音频时长 vs 稿子末段时间,超容差即 die)
  So 换了取稿方式也不会拿错集的稿(drift #60 的闸门不依赖取稿方式)

Scenario: 题材泛的源只收对口集(DOAC)
  Given 源标了 topicFilter(DOAC 什么都聊:健康/心理/名人)
  When 判断某集标题
  Then 命中商业/科技词表才进库,其余跳过并记明原因
  And 判不准的宁可跳过(少发 ≪ 发离题内容);漏放的人工事后可点名补

### DoD(C28)
1. `scripts/feed-transcript.mjs` 纯函数:pickFeedTranscript(挑最优/拒纯文本)、parseWhisperJson、parseSrt、srtTimeToSec。
2. `parseFeed` 抽出每集的 transcripts[{url,type}];run-pipeline 取源优先用它、失败回落 ASR。
3. DOAC 题材筛选(纯函数 + 源上标 topicFilter),判不准即跳过。
4. 单测覆盖三种格式 + 回落 + 题材筛选;变异验证(退回实现必红)。
5. 云端真跑一集实证:日志显示走 feed 稿、归属闸门过、时间从小时级降到秒级。

## C29 · 下拉刷新(主屏应用模式)· US-1 · 2026-08-18 用户提出

> 用户:「需要手机端加一个下拉刷新的按钮,下拉后顶部出现一个 loading,然后重新加载」
> 澄清后的关键前提:「我是添加了 iPhone 的 APP 应用,所以不是在浏览器里打开的,浏览器里是有下拉刷新的」
> —— iOS 从主屏启动的 web app 没有地址栏/刷新按钮,**系统的下拉刷新在该模式下也不存在**,
> 想看新内容只能杀进程重开。

Scenario: 只在主屏应用模式接管
  Given 用户从 iPhone 主屏图标启动本站(standalone)
  Then 下拉刷新由本站接管
  But 在 Safari 等浏览器里打开时,本站一个监听器都不挂(用系统自带的,不两套手势打架)

Scenario: 在顶部下拉够远才刷新
  Given 页面已滚到最顶、且没有弹层开着
  When 手指向下拉动,指示器跟手下移(阻尼:手走 2px 指示器走 1px)
  And 拉过阈值后指示器转成强调色(「松手就刷」的确认感)
  Then 松手 → 指示器转圈 → 整页重载
  But 没拉够就松手 → 指示器收回,什么都不发生

Scenario: 不该接管的时候一概不碰
  Given 页面不在顶部 / 弹层(我的收藏、订阅、搜索)开着 / 手指是向上滑
  Then 完全不接管,正常滚动不受影响

Scenario: 刷新 = 回顶部看最新
  Given 首页/大类页有无限滚动,离页时会记住「批次 + 滚动位」
  When 触发下拉刷新
  Then 先清掉该记忆再重载 —— 否则刷完被还原到半路,看着像没刷新
  And 整页重载即可拿到新内容(HTML 缓存头是 max-age=0 + must-revalidate,本机 curl 实证)

### DoD(C29)
1. `assets/js/pull-refresh.js`:standalone 判定(navigator.standalone + display-mode 媒体查询)、
   touchstart/move/end 手势、阈值 70px、阻尼 0.5、顶部+弹层守卫、刷新前清 `ioret:<路径>`。
2. 经 patch-site.mjs Head 全站注入(与 pv.js / search-history.js 同通道);custom.scss 指示器样式走主题令牌。
3. tests/pull-refresh.test.ts 11 条:DOM 桩回放真实手势,覆盖 gate/阈值/守卫/清记忆/指示器状态。
4. 五向变异验证(去 standalone 闸 / 不清记忆 / 去弹层守卫 / 阈值归零 / 两道 atTop 同时拿掉)各自当场红。
5. **待真机验收**:手感(阈值、阻尼、转圈时长)只能在 iPhone 主屏应用里实测。

## C30 · 音频搬运工(Mac mini 住宅 IP 中转)· US-4/US-11 · 2026-08-18 用户拍板

> 起因:云端 runner 的 IP 被 Substack 封(D63,drift #62),Lenny's 无官方稿的新集走 ASR 兜底时
> 音频下载 403,只能眼睁睁漏掉(2026-08-17 Yana Welinder 集实证)。用户拍板:
> 「用 Mac mini(住宅 IP)抓音频」—— 云端拿不到的音频,Mac mini 抓下来放 GitHub Release 中转站,
> 云端下一班优先查中转站。复用演讲通道(C16/C17)已验证的 Release 运输 + Mac mini 巡航体系,零新基建。

Scenario: 云端 403 → 登记待搬运,本班不受影响
  Given 某集走 ASR 兜底,音频直接下载被 403(或其他拿不到)
  Then 该集照旧「转瞬失败留半成品下次重试」,并把 (集id, 音频URL) 登记进待搬运清单
  And 清单随回仓提交入库,本班其余集照常处理

Scenario: Mac mini 定时搬运
  Given Mac mini 巡航周期到点,pull 后发现待搬运清单非空
  When 用住宅 IP 直连下载音频成功
  Then 上传为 GitHub Release 中转站 asset(以集 id 命名)
  But 下载失败(上游真挂)→ 留在清单里下轮重试,响亮打日志不静默

Scenario: 云端优先查中转站
  Given 某集要走 ASR 兜底下载音频
  When 中转站有以该集 id 命名的 asset
  Then 从中转站取音频(runner 访问 GitHub 不被封),后续转写→浓缩→闸门→上站全链照旧,闸门一分不降
  And 该集处理成功后,从待搬运清单划掉 + 删除中转站 asset(不无限堆积)

Scenario: Mac mini 不在线一切照旧
  Given Mac mini 关机 / 没网 / 凭证失效
  Then 云端行为与现状完全一致(半成品每班重试、403 就下一班再说),不多报错不搞坏别的

### DoD(C30)
1. 云端:403/下载失败登记待搬运清单(随既有回仓通道入库);取音频前先查中转站 asset,命中即用;
   成功消费后清账 + 删 asset。
2. Mac mini:搬运脚本挂进既有巡航体系(凭证/代理复用 C17),下载→上传→日志留痕;失败不自愈成静默。
3. 单测覆盖:登记/查中转/消费清账 的纯函数逻辑 + 变异验证(去优先查/去清账 必红)。
4. **E2E 实证(验收线)**:2026-08-17-lennys-how-a-solo-founder-used-codex-and(Yana Welinder)
   经此通道真实复活上站,线上可见。
5. 版权口径照旧:中转站只是运输,audio 不入仓;asset 用后即删。

## C31 · 内容更新逻辑重梳(北京时间口径 + 只补 2026 + 早班前置)· US-1/US-4 · 2026-08-19 用户拍板

> 用户第 N 次报「内容更新还有问题」。实证梳理找到三层错配,都不是 bug 而是旧设计在用户习惯下失效:
> ①**两个「今天」差 8 小时**:系统按 UTC 切日(=北京 08:00 换日),当天第一班在北京 10:00 →
>   用户早晨看站时「今天」几乎恒空,且晚上 11 点与次日早 9 点看到的「今天」是同一批。
> ②**补历史只会越挖越老**:beforeISO=库内该源最旧一集,补了边界就退 → Lenny's 已挖到 2025-07;
>   老集按入库日与当天真新集并排进「今天/昨天」,用户看到一年前的内容,判定「更新不对劲」。
> ③近 8 天入库 3/7/9/7/3/4/13/1,其中当天真新集仅 …/2/0/1/5/1。
> 用户三拍板:时区改北京 / 早上起来就有 / **只要 2026 年的内容**。
> 存量核实(2026-08-19 实抓):2026 年未入库 475 集(a16z 148、twentyvc 97、bigtech 69、cogrev 60…,
> 另 4 源当时抓取失败未计),按 8 集/日约够两个月。

Scenario: 「今天」按北京时间算
  Given 现在是北京时间 2026-08-20 00:30(UTC 仍是 08-19 16:30)
  Then 每日目标与入库日(meta.added)都按 2026-08-20 计
  And 首页分组里前一天的内容落到「昨天」,新一天重新开始计数

Scenario: 早上起来就有内容
  Given 用户在北京时间早晨 08:00 打开站
  Then 当天已至少跑过两班(北京 00:30 / 06:00),内容已备好
  But 不必等到旧口径的第一班(北京 10:00)

Scenario: 往回补只补 2026 年,且挑最新的
  Given 当天入库不足每日目标,需要补历史
  When 挑候选
  Then 只从 2026-01-01 及以后、且从未入库的集里挑,按日期降序(最新优先)
  And 绝不再补 2025 年及更早的集
  And 有官方转写稿的仍优先(C28 便宜通道不降级)

Scenario: 2026 存量见底要响亮告警
  Given 全局 2026 年未入库候选低于警戒线
  Then 日志打出 ::warning:: 点明「剩 N 集,约够 M 天」
  But 绝不悄悄改补 2025、也不悄悄让站空着(要改口径须用户拍板)

### DoD(C31)
1. 纯函数 `bjDay(ts)`(与 workers/pv-counter 同口径 UTC+8),`meta.added` 与每日目标判定全改北京日。
2. `selectBackfillRecent`:候选=未入库 ∩ ≥ BACKFILL_SINCE(2026-01-01),按日期降序 + 有稿优先窗口;
   替换原 `selectBackfillBackward` 的「比库内最旧更旧」策略(那条策略必然越挖越老)。
3. cron 四班挪到北京 00:30 / 06:00 / 12:00 / 18:00。
4. 存量见底 `::warning::` 告警(阈值 = 3 日量)。
5. 单测覆盖切日边界(北京 00:00/07:59/08:00)、只补 2026、最新优先、有稿优先仍生效、告警触发;变异验证。
6. **线上验收**:用户在北京时间午夜后与早晨各看一次,「今天/昨天」符合直觉且早晨已有内容;首页无 2025 年集。

---

## C37 · 生产配音换 MiMo 主引擎(2026-08-22 用户听样品拍板「MIMO很好」;ADR 0014 复审修订)

> 背景:ADR 0014(2026-07-20)拍板生产 TTS 自持 edge-tts,理由=CI 云 runner 上没有本机配音 skill。
> 复审时机条款「若项目要 MiMo 的嗓子,值得 vendoring」于本日触发:用户听 mimo_default 样品后拍板换。
> 可行性已实测:MiMo 从境外 IP(台北出口)真跑通;美国 runner 由 p1-probe 补验。

Scenario: 新集配音走 MiMo 默认嗓
  Given 一集过闸待配音,且环境有 PEIYIN_MIMO_KEY(GitHub Secret 注入;本地无 key 则自动跳过 MiMo)
  When scripts/tts.mjs 合成
  Then 主路 = vendored peiyin(scripts/vendor/peiyin.py,--voice mimo_default --chunk --tail trim --no-fallback)
  And 成功则 audio.meta.json 记 engine=mimo-peiyin、voice=mimo_default

Scenario: MiMo 任何失败都不断更
  Given MiMo 网络不通 / 配额 / key 失效 / vendored 脚本损坏
  Then 自动回落既有 edge-tts 分块链路(晓晓),行为与现状逐字一致;meta 记 engine=edge-tts
  And 整集合成绝不因 MiMo 故障而失败(MiMo 是升级不是单点)

Scenario: 存量不重配(用户拍板 2026-08-22)
  Given 已发布集音频源文本(digest_md)未变
  Then 缓存照旧按 source_sha256 命中跳过,不因引擎切换判陈旧
  And 绝不触发全站重配潮;老集保持 edge 嗓与新集 MiMo 嗓共存

Scenario: 时间预算如实加价([standard-change: 用户授权,随 MiMo 拍板连带])
  Given MiMo 串行合成实测约 13-15 分/集(edge 约半分钟)
  Then POST_CHAIN_MIN 30 → 45,预算守卫按新价决定一班接几集

**DoD**:①单测:主路选择/回落/无 key 跳过/缓存不失效,全走注入 deps 不真跑 ②vendored 副本带出处头注(源路径+日期+原文件 sha)③p1-probe 美国 runner 真调 MiMo 一次成功 ④云端首集 engine=mimo-peiyin 日志留痕 ⑤GLM 冷审+裁决落账
