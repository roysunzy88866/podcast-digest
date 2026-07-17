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
