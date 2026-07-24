---
title: "对话 Anthropic 产品负责人 Cat Wu:AI 时代 PM 如何跟上「每周发布」的疯狂节奏"
podcast: "Lenny's Podcast"
date: 2026-04-23
source_url: https://www.lennysnewsletter.com/p/how-anthropics-product-team-moves
duration: "85:12"
host: "[[Lenny]]"
cohosts: ["[[Cat Wu]]"]
companies: ["[[Anthropic]]", "[[Claude Code]]", "[[Co-Work]]"]
concepts: ["[[PM]]", "[[智能体]]", "[[研究预览版]]", "[[产品品味]]", "[[系统提示词]]", "[[黄金路径]]", "[[自动化]]", "[[AGI]]"]
tags:
  - AI 产品迭代
  - 产品经理(PM)角色
  - 代码与自动化
  - 智能体架构
  - 模型能力
---

# 对话 Anthropic 产品负责人 Cat Wu:AI 时代 PM 如何跟上「每周发布」的疯狂节奏

> [!info] 关联
> **主持**:[[Lenny]]
>
> **联合主持**:[[Cat Wu]]
>
> **涉及公司**:[[Anthropic]] · [[Claude Code]] · [[Co-Work]]
>
> **概念**:[[PM]] · [[智能体]] · [[研究预览版]] · [[产品品味]] · [[系统提示词]] · [[黄金路径]] · [[自动化]] · [[AGI]]
>
> **来源**:[Lenny's Podcast](https://www.lennysnewsletter.com/p/how-anthropics-product-team-moves)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-04-23-lennys-how-anthropics-product-team-moves.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

Cat Wu 揭示 AI 原生产品 PM 在极速迭代、角色融合的浪潮中立足的核心能力与工作实操。

[[Cat Wu|Cat Wu]] 是 [[Anthropic|Anthropic]] 的产品负责人,主管 [[Claude Code|Claude Code]] 和 [[Co-Work|Co-Work]] 这两款核心产品。她和团队处于当下 AI 产品开发的最前沿。主持人 [[Lenny|Lenny]] 感叹,他从未见过像 Anthropic 这样以惊人速度发布新功能的团队。本期对话深入拆解了这种「每周甚至每天」迭代背后的工作方法,以及在 AI 大幅降低写代码门槛的当下,产品经理([[PM|PM]])这个角色为何正在发生剧变——它没有消失,但对从业者提出了全新的要求。

接下来,我们将从 Anthropic 的内功讲起,逐步深入到产品线的演进逻辑、PM 核心技能的变迁,最后谈谈在这个混乱而极速的行业里如何保持节奏。

## 不只是靠最先进的模型:Anthropic 的高速内功

人们看到 Anthropic 推出产品的速度极快,很容易猜测他们是不是在内部使用了尚未公开的强大模型(如本期提到的 Mythos 模型)。Cat Wu 坦言,虽然他们确实能在内部使用前沿模型,且这「稍微增加了我们的发布速度」,但这绝不是全部原因 [11:11 Cat Wu]。

> 【背景】Mythos 是本集播客中提及的一个极其强大的预览模型,因过于强大而处于预览阶段。

高速运转的真正核心在于「流程」和「期望」。Cat Wu 表示,AI 出现前的技术迭代慢,大家习惯按 6 到 12 个月的时间线去规划,因为那时「编写代码的成本非常高」[05:21 Cat Wu]。但现在,随着模型能力飞速提升和 AI 对工程的加速,产品功能的周期已从 6 个月骤降至 1 个月,甚至 1 周或 1 天 [05:35 Cat Wu]。这意味着重点不再是多团队间的冗长对齐,而是如何以最快速度把新想法交到用户手中。

为了实现这点,Cat Wu 的团队采取了三个关键动作:

1. **设定极其清晰的目标**:因为 LLM(大语言模型,一种能理解和生成人类语言的 AI 系统)太通用了,会带来巨大的方向模糊性。好 PM 必须一针见血地框定目标,比如「我们的核心用户是专业开发者,用例是让企业的专业开发者安全地达到零权限提示」[07:23 Cat Wu]。
2. **建立低阻力的发布机制**:几乎所有的功能都以「Research Preview」([[研究预览版|研究预览版]],一种明确告知用户这是早期测试、随时可能下线的功能状态)的形式发布。这降低了团队的交付承诺压力,让新想法能在一两周内就推给用户 [07:50 Cat Wu]。
3. **搭建跨职能的紧密流水线**:PM 的职责是搭建让团队自由狂奔的轨道。比如,一旦工程师把内部测试过的功能发到「常青发布室」,文档、营销、开发者关系的同事就会立刻介入,第二天就能产出配套的发布公告 [08:32 Cat Wu]。

## 源码泄露与 Co-Work 争议:没有完美流程,只有快速修复

建立了紧密的流程并不意味着不犯错,关键是面对失误的态度。前阵子,Claude Code 的整个源代码意外泄露,在社区引起轩然大波。Cat Wu 透露,调查显示这是人为错误的结果——当时有人正和 Claude 一起写一个关于发布包更新的 PR(拉取请求,一种提交代码修改的方式),虽然经过了两层人工审查,但还是漏了 [12:19 Cat Wu]。她强调,这是一次流程失败,最重要的是从中吸取教训并增加更多保障,而犯错的员工依然受到保护。

除了内部失误,对外他们也做出了引发争议的决定:限制人们将 Claude 订阅用于第三方产品(即社区俗称的 Open Claude)。很多用户对此感到愤怒和不解。Cat Wu 解释了背后的取舍:Claude 的订阅服务面临极大需求,但这些第三方产品的使用模式与第一方产品不同。为了保证计算资源能优先供给第一方产品和 API(应用程序接口,允许第三方软件与 Claude 通信的桥梁),他们不得不做出这个艰难的决定,并为订阅用户提供了一些额度作为过渡补偿 [13:18 Cat Wu]。

## 从分工明确到角色融合:「AGI peeled」的艰难平衡

讲完了外部争议,我们来看看团队内部正在发生的深层变化。在 AI 时代,人才模型正在被重塑。Cat Wu 观察到,一个优秀的人才必须掌握一种艰难的平衡——她称之为「恰到好处地剥离 [[AGI|AGI]]」(the right amount of AGI peeled)[00:00 Cat Wu]。

> 【背景】AGI 指通用人工智能,代表能像人类一样思考和学习的人工智能。在本期语境中,过度「AGI peeled」是指沉迷于未来模型将无所不能的幻想中。

Cat Wu 认为,每个人都能预见一个模型极其聪明、几乎无所不能的未来,在那个未来里做产品很容易,「只需要一个文本框」让模型自己去搞定一切就行了 [52:23 Cat Wu]。但**真正的难点在于,对于能力尚不完美的当前模型,你要如何激发其最大能力?如何引导用户走上能最大化发挥模型优势的「[[黄金路径|黄金路径]]」,并巧妙修补它的弱点?** [52:58 Cat Wu] 这种对当前模型极限的深刻感知,正是目前最稀缺的技能。

正因为模型能力在飞速变化,传统的「写好需求文档然后照着做」的模式已经不再适用。Cat Wu 指出,工作正变得越来越无形,所有的角色都在融合:PM 在写代码,工程师在做 PM 的产品决策,设计师甚至也在提交代码 [16:15 Cat Wu]。Anthropic 的做法是:**大量招聘拥有良好「[[产品品味|产品品味]]」的工程师**,这样能最大程度减少沟通摩擦,让工程师从看 Twitter 用户反馈到周末发布产品,全程几乎不需要 PM 介入 [16:38 Cat Wu]。

既然写代码的门槛降低甚至被 AI 代劳了,那么「什么是有价值的」就发生了转移。「随着编写代码的成本大幅降低,变得更有价值的是决定写什么」[18:18 Cat Wu]。人类大脑在现阶段依然不可替代的作用在于常识、情商以及协调千丝万缕的人际利益关系,这是模型暂时还做不好的 [21:43 Cat Wu]。

## 「模型会吃掉你的线缆」:为尚未到来的能力构建产品

既然角色在融合,产品本身的设计逻辑也在改变。其中一个极其反直觉但又至关重要的做法是:**构建那些当下尚不能完美运行的功能**。Cat Wu 指出,这样做是为了搞清楚「这个产品要正常工作到底还缺什么」,这样当新的、更聪明的模型发布时,你直接把它换进已有的原型里,就能立刻验证是否填补了差距 [64:54 Cat Wu]。

一个绝佳的例子是 Claude Code 中的「待办事项列表」功能。早期模型记性不好,面对大规模重构(对代码库进行大规模结构性调整)往往改几个地方就停了。于是团队给它加了一个类似人类做法的「待办事项列表」工具,强迫模型走完整个清单 [61:19 Cat Wu]。

但模型迭代到 Opus 4.5 和 4.6 等较新版本后,Cat Wu 发现不需要再强迫它使用列表了,它自己就会很周全地完成任务。**「每次模型变得更聪明时,我们都会通读整个[[系统提示词|系统提示词]],并移除大量不再需要的提示干预。」** [63:04 Cat Wu] 这就是行业内常说的「模型会吃掉你的线缆」——你为修补模型缺陷而搭建的外部支架,随着模型变强会被逐步拆除。同时,这也解锁了全新的能力:比如在最新的模型支撑下,他们终于能够运行多个代码审查[[智能体|智能体]](能自主完成特定任务的 AI 程序)同时遍历代码库,成为工程团队可以依赖的可靠代码审查员 [64:11 Cat Wu]。

顺着这个逻辑往前看,Cat Wu 分享了他们对产品愿景的思考:核心是让单项任务成功 -> 同时做多任务 -> 未来可能一次跑 50 到数百个任务。随着并发量激增,本地电脑的内存将无法支撑,任务将转向远程运行。团队接下来的设计重点,就是如何让人类在复杂的远程多智能体网络中,依然能清晰掌控并完全信任智能体的工作 [65:32 Cat Wu]。

## 坦然接受混乱:把繁琐交给 AI,把精力留给品味

了解了 Anthropic 的产品逻辑后,我们来看看普通人在这个极速变化的世界里该如何自处。要在这种一周一个样的龙卷风里不被击垮,首要的是心理建设。Cat Wu 描述了一种真实的体验:周日晚上出了一个最高级别故障,周一早上出现了更高一级的故障,周一下午又出了更更高级别的故障,回过头看,周日那个根本不值一提 [23:24 Cat Wu]。

因此,她强调必须「残酷地优先排序」,接受有些产品发布时并不完美,只要不阻碍核心用例,就可以放手让它去接受真实用户的检验 [23:50 Cat Wu]。团队也更倾向于招聘经历过行业起伏、知道如何维持自身能量的资深从业者。

具体到每个人的日常工作,Cat Wu 给出了最实用的建议:寻找你工作中重复繁琐的部分,把它交给 Claude Code 或 Co-Work 等 AI 工具去[[自动化|自动化]]。但千万要警惕一个陷阱——**「如果自动化不能 100% 有效,它就不是真正的自动化。」** [70:10 Cat Wu] 很多人尝试把准确率做到 90%-95% 就放弃了,但这最后 5% 到 10% 的打磨,才是决定你能否真正放手并重获 20% 自由时间的关键。一旦 AI 能为你承担繁文缛节,你就能腾出精力去做那些你一直想做、却始终没时间做的「宠物项目」[69:04 Cat Wu]。

> 【背景】闪电问答环节,Cat Wu 分享了她喜爱的读物,包括探讨经济发展政策的《How Asia Works》、复盘历次技术革命对劳动者影响的《The Technology Trap》,以及短篇故事集《Paper Menagerie》。此外,她极力推荐了自动驾驶出租车 Waymo,称其让她免去了社交压力,每天在车上能更自在地开工作电话,极大地提升了效率 [76:33 Cat Wu]。

## 本集带走

1. **最难的能力是「恰到好处地剥离 AGI」**:不要沉迷于未来无所不能的超级模型,真正的考验是深刻理解当前不完美的模型,通过精巧的产品设计激发其最大潜能,并补足其短板。
2. **「模型会吃掉你的线缆」**:随着模型变聪明,过去为了弥补其缺陷而加上的产品拐杖(如待办事项列表)会被逐步移除,同时解锁全新的高阶能力(如可靠的代码审查)。
3. **把繁琐打磨到 100% 自动化**:把重复性工作交给 AI,并投入精力跨越那最后 5%-10% 的准确率鸿沟,才能获得真正的杠杆效应与自由时间。

## 金句(中英对照 · 过机器闸门三联校验)

> 我们许多产品功能的周期已经从六个月缩短到一个月,有时甚至缩短到一天。  
> *The timelines for a lot of our product features have gone down from six months to one month and sometimes to even one day.*  
> —— Cat Wu · [00:20] ^q1

> 随着编写代码的成本变得非常低,变得更有价值的是决定写什么。  
> *As code becomes much cheaper to write, the thing that becomes more valuable is deciding what to write.*  
> —— Cat Wu · [00:50] ^q2

> 构建那些不一定能工作的产品是非常重要的,这样你就知道,好的,这个产品要工作还缺什么?  
> *It's pretty important to build products that don't necessarily work yet so that you know, OK, what is missing for this product to work?*  
> —— Cat Wu · [64:54] ^q3

> 如果自动化不能 100% 的时间有效,它就不是真正的自动化。  
> *If an automation doesn't work 100% of the time, it's not really an automation.*  
> —— Cat Wu · [70:06] ^q4

> 我认为巨大的转变是,2024 年一代的产品是基于聊天的,而云代码生成的产品是基于行动的。  
> *I think the big shift is that the 2024 generation of products were chat-based and the cloud code generation of products is action-based*  
> —— Cat Wu · [74:38] ^q5

> 如果 Claude Code 失败了,但 Anthropic 成功了,我会非常高兴。  
> *if Claude Code failed, but Anthropic succeeded, I would be extremely happy.*  
> —— Cat Wu · [31:47] ^q6

## 相关单集

- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同公司:Anthropic、Claude Code、Co-Work · 同概念:智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的 AI 工作预测:智能体接管工作,但人类不会失业》]] —— 同公司:Claude Code、Anthropic · 同概念:智能体 (agent)、自动化 (automation)
- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同公司:Anthropic、Claude Code · 同概念:研究预览版 (Research Preview)
- [[2026-05-31-lennys-a-rational-conversation-on-where|《Benedict Evans:AI 像互联网一样重要,但现在只是 1997 年》]] —— 同公司:Anthropic、Claude Code · 同概念:AGI
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同公司:Claude Code、Anthropic · 同概念:智能体 (agent)
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《在指数级增长公司做增长：Anthropic 增长负责人的打法》]] —— 同公司:Anthropic、Claude Code · 同概念:智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同公司:Claude Code · 同概念:智能体 (agent)
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|《OpenAI Codex lead on the new shape of product work | Andrew Ambrosino》]] —— 同概念:PM、智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同公司:Claude Code · 同概念:智能体 (agent)
- [[2025-12-07-lennys-surge-ai-edwin-chen|《Surge AI 创始人 Edwin Chen:我们教模型追逐多巴胺,而非真理》]] —— 同公司:Anthropic · 同概念:AGI
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《估值 150 亿的隐形 AI 公司 Applied Intuition:给自动驾驶卡车的焦虑开一剂务实药方》]] —— 同公司:Waymo · 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被淘汰，构建者迎来黄金期》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-04-26-lennys-snapchat-ceo-why-distribution-is|《Snap CEO Evan Spiegel:在AI时代,做最会创新的公司》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《给 AI 智能体装上「安全带」:Gray Swan 的攻防实战》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《AI 基础设施如何为智能体重新设计:Modal 联合创始人的方法》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同概念:智能体 (agent)
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《用 20 个 AI 智能体替代 10 人销售团队：SaaStr 创始人的前沿实战》]] —— 同概念:智能体 (agent)
- [[2026-03-22-lennys-the-art-of-influence-jessica-fain|《别怪高管不懂你：产品经理的向上影响力心法》]] —— 同概念:智能体 (agent)
- [[2026-05-10-lennys-how-to-build-a-company-that-withstands|《《精益创业》作者 Eric Ries 新作导读：好公司为什么会「变坏」》]] —— 同公司:Anthropic
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《专访 Satya Nadella:智能体时代的平台逻辑与企业护城河》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人：别想从零颠覆世界，靠复制才能创新》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《Databricks 的智能体时代布局：统一调度、开源治理与数据库重写》]] —— 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《No Figma. No Jira. No docs. How Gusto built a new product line with Claude Code | Eddie Kim (CTO)》]] —— 同概念:智能体 (agent)
- [[2026-02-26-lennys-ai-is-critical-for-humanitys-survival|《Cisco 高管 Jeetu Patel：如何把老牌巨头推向 AI 时代，以及他的六维制胜框架》]] —— 同公司:Anthropic
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《前 GitHub、现 Notion 产品负责人 Max:每个项目的前 10% 现在免费了》]] —— 同公司:Anthropic

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
