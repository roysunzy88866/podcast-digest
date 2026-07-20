# CLAUDE.md · 英文播客中文精华知识库(暂名 podcast-digest)

> 本项目 = **上线档**(docs/adr/0001)。本文件只装本项目铁律 + 文档地图;通用协作约定在上层 `~/Documents/Projects/CLAUDE.md`,不重抄。

## 📜 不变铁律
- 未落文档不算结论 / 只认仓库(下轮会话不接受"上次说过")
- 锁定结论:`需求共创/需求共识.md` 标 🔒 的已定不再议;要改走共识修改流程(用户明文 + 改共识 + 记 ADR)
- 真相优先级(文档打架谁赢):范围→需求共创/需求共识.md / 为什么→docs/adr/ / 行为→Gherkin+测试 / 带锚点硬事实→共识那一行,别处不重抄

## 🔄 新会话自启 SOP(用户说"嗯"或直接动作即执行)
1. `git log --oneline -20` + `cat docs/wip.md` + `cat docs/story-map.md`
2. 两锚校验:git 实际 ↔ story-map 切片状态(⏳/🟡/✅);不一致 → 停 + 问用户 + 落 `docs/drift-log.md`,不闷头干
3. `glm-check scorecard` 报一行(看 GLM 是不是橡皮章)
4. 报「上次到 X,下一步 Y,开始?」;用户拍板后**先在 docs/user-stories.md 补本片 Gherkin → 二次确认 → 才进红绿循环**(禁止跳过直接写码)
5. 动某行为前,先 grep `docs/drift-log.md` 裁决速查表(有没有旧裁决)

## 🚫 执行不靠自述
- 交付报告三态:✅ 跑了过了(附命令/证据)/ ❌ 跑了挂了 / ⛔ 没跑(附原因+债务号),禁止静默省略
- 改"标准定义段"(DoD / 测试口径 / 闸门脚本)必带 `[standard-change: 用户授权]`;不准被审计抓到后自行改标准充数
- 里程碑前过独立对抗审计(`glm-check --kind code`,落账本+打裁决)才算过

## 🛑 越界即停
共识漂移 / 灰色地带 / 写临时方案前 → 先停问用户,或先登记 `docs/tech-debt.md` / `docs/drift-log.md`。

## 💻 代码硬规矩(本项目最易塌的几条)
- **写稿只用付费档 GLM,免费档只当判官**——GLM-4.7-Flash 实测编造原话(需求共创/试跑记录-第2轮)。**现口径(ADR 0013 · standard-change):翻译=GLM-4.6、浓缩=GLM-5.2**(双语对齐下保真不依赖翻译模型;GLM-4-Flash 太弱淘汰)
- **防失真机器闸门不许砍,但硬校验口径已收窄(ADR 0013/drift #26 · standard-change)**:金句**硬拦只剩①「引语逐字命中转写稿」**;②时间戳区间、③说话人匹配**已降为软提醒**(不拦发布,支持无时间戳源)。事实层专名回原文含拼接容错(D46)。要再动闸门口径走 standard-change
- 用云端 ASR 转写前必 VAD 切静音(Whisper 系在静音处无中生有,污染防失真地基)
- **API key 用户自持**:不进仓库不进代码,走 `.env`(已 gitignore)/ wrangler secrets;不接触凭证明文
- Quartz 定制全部收进独立组件,不散改 fork(v5 太新,留合并余地)
- 知识关联是流水线的活:每集必产出 frontmatter 类型化属性 + 正文 `[[双链]]` + 金句 `^块ID` + 发布前按别名表补链

## ✅ 结项闸门
- 技术负债逐条跟用户确认处置(修 / 接受记账 / 推迟),不带未确认的债默默结项
- 红线(密钥安全 / 版权灰色自担范围 / 公开访问隐私边界——C7a 用户明选**去 Access、站公开**,drift #17)每次结项重提,直到闭合或用户明文豁免

## 🏗 架构一句话
GitHub Actions cron(非 Workers,ADR 0012/drift #21)定时轮询播客 RSS(源清单驱动,现抓 Lenny's,去 Latent;`需求共创/内容品味档案.md`)→ 官方文字稿(Substack transcription.json)/ ASR 兜底 → **GLM-4.6 全译 + GLM-5.2 浓缩**(ADR 0013)→ GLM 免费档判官 → 机器闸门(字符串校验)→ **`scripts/tts.mjs`(edge-tts 免费默认 + Azure fallback,drift #13;项目自持,未走全局配音 skill、无 MiMo)** → Quartz v5 build → **CF Pages 公开静态**(去 R2 存音频进 Pages / 去 Access 登录门,drift #17/#18)+ 私有播客 feed。全云端,无常开机器。详见 需求共创/需求共识.md「产品轮廓」+ docs/adr。

## 🧾 commit 约定(commit-msg 钩子硬卡 🟡)
切片:`[C_n 状态] 描述 (US-x)`;非切片:`[装机|docs|chore|adr|fix] 描述`。一刀一提交。

## 📋 文档地图(用到才读)
| 我要知道… | 读哪个 |
|---|---|
| 做什么 / 不做什么 / 怎么算对 | 需求共创/需求共识.md(11 条 US+Gherkin 全 P0)|
| 给技术侧的导读 + 五个易错点 | 需求共创/delivery-tech.md |
| 踩过的坑 / 风险 | 需求共创/风险登记.md(18 条)|
| 为什么这么定 | docs/adr/ |
| 上次做到哪 / 下一步 | docs/wip.md |
| 切片目录 + 状态 | docs/story-map.md |
| 老问题裁决过没 | docs/drift-log.md |
| 技术负债 | docs/tech-debt.md |
