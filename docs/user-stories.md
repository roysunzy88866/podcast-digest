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
