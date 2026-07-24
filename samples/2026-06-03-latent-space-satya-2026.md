---
title: "Satya Nadella 谈 AI 时代平台逻辑:私有评估是最大 IP"
podcast: Latent Space
date: 2026-06-03
source_url: https://www.latent.space/p/satya-2026
duration: "38:50"
type: episode
cover: "#0e7490"
description: "微软 CEO 畅谈 AI 时代的平台生态战略:从模型血统到智能体重塑企业价值。"
host: "[[Saragawa]]"
cohosts: ["[[Satya Nadella]]"]
companies: ["[[Microsoft]]", "[[Azure]]", "[[GitHub]]", "[[Microsoft 365]]"]
concepts: ["[[MAI]]", "[[私有评估]]", "[[测试框架]]", "[[轨迹]]", "[[智能体]]", "[[SaaS]]", "[[数据中心]]"]
category: 创业与行业
tags:
  - 创业与行业
  - 智能体
---

# Satya Nadella 谈 AI 时代平台逻辑:私有评估是最大 IP

> [!info] 关联
> **主持**:[[Saragawa]]
>
> **联合主持**:[[Satya Nadella]]
>
> **涉及公司**:[[Microsoft]] · [[Azure]] · [[GitHub]] · [[Microsoft 365]]
>
> **概念**:[[MAI]] · [[私有评估]] · [[测试框架]] · [[轨迹]] · [[智能体]] · [[SaaS]] · [[数据中心]]
>
> **来源**:[Latent Space](https://www.latent.space/p/satya-2026)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-06-03-latent-space-satya-2026.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

微软 CEO 畅谈 AI 时代的平台生态战略:从模型血统到智能体重塑企业价值。

微软 CEO [[Satya Nadella|Satya Nadella]] 做客 No Priors 与 Lanespace 的联动特别集。Nadella 曾在微软经历过四次重大的计算平台变迁。在本集开头,他抛出了对当下 AI 浪潮最核心的判断:不要把 AI 仅仅看作一个单一的大模型,而应将其视为一个完整的**生态系统**。整场访谈沿着一条主线展开——在[[智能体|智能体]]崛起的背景下,平台、企业软件以及人的工作方式将发生怎样的重构。本文将顺着这条主线,带你梳理他提出的四个关键预测:前两个关于平台逻辑的重塑,后两个关于企业工作与人的价值。

## 模型本身不够,「环境+工具+上下文」才是真平台

Nadella 首先用微软新推出的 [[MAI|MAI]] 模型(大模型系列)来解释什么是「干净的血统」。他指出,现在很多开放权重的模型(模型参数公开可下载)往往只在某个公开基准测试上刷分很高,但在真实业务场景里并不好用。原因在于训练数据混杂。因此,微软特别强调从预训练阶段就严格把控数据质量,把无用的信息「消融」掉。

但更重要的判断是:模型再好,也只是个通才。企业真正需要的是专才。怎么实现?Nadella 给出的配方不是单纯调用模型,而是围绕模型搭建一套系统:首先建立一套围绕模型的「爬山脚手架」(hill climbing scaffold,指通过不断试错逐步逼近最优解的工具流);然后收集业务运行的真实「[[轨迹|轨迹]]」(traces,指智能体或模型在完成任务时产生的一系列操作记录);最关键的,是建立**[[私有评估|私有评估]]**(private evals,企业自己定制的、不公开的测试题库)。他认为,公开测试集都已经「被刷爆」了,失去了衡量价值的作用 [03:56 Satya Nadella]。

顺着这个逻辑,他抛出了本集一个极具颠覆性的观点:在 AI 时代,每家公司最大的**知识产权**(IP)不再是代码或专利,而是**私有评估**。他的测试标准很直接:如果你手里有一套私有的评估标准,今天用模型 A,明天能不能无缝切换到模型 B 并继续提升效果?如果能,你才真正掌握主动权;如果不能,你就被某一家模型厂绑架了 [12:18 Satya Nadella]。为了保证这种灵活性,微软提供了一套开放的「[[测试框架|测试框架]]」(harness,指用来运行、调用和管理多个模型与工具的中间件层),让客户可以随意接入任何模型。他拿微软的安全产品举例:因为带有多模型调度能力,它在上线初就发现了传统单模型工具漏掉的漏洞——这就是开放平台的存在性证明 [10:04 Satya Nadella]。

## 工作流被拆解重组,企业软件到了重新发牌的时候

既然模型和工具的使用方式变了,企业软件([[SaaS|SaaS]])自然也得跟着变。主持人抛出了业界热议的「软件终结论」:既然 AI 能一键生成应用,传统 SaaS 还有存在价值吗?Nadella 的回答是:底层价值还在,但打包方式必须重做。

他拆解了传统 SaaS 的构成:把业务流程抽象成数据模型,写一堆业务逻辑,再套上一个界面,这套玩法统治了过去 20 年 [17:04 Satya Nadella]。他明确指出,底层的「数据模型」(比如总账)是非常稳健的,不需要重新发明;但问题在于,以前这些数据被锁死在一个个应用孤岛里。

为了说明怎么打破孤岛,他举了微软 M365 里的 WorkIQ(企业工作数据底层)为例。以前,公司的邮件、文档、会议记录分别存放在不同的应用里;现在,这些数据被彻底打通,变成了一个可以被智能体查询的庞大数据库 [18:48 Satya Nadella]。他分享了一个极具画面的亲身经历:他让 [[GitHub|GitHub]](代码托管平台)里的智能体去读取他上周参加的一堆设计会议记录,智能体竟能自动汇总并给出具体的代码修改建议。这在以前是不可想象的。这也意味着,智能体对 M365 后端数据的调用量,甚至将远远超过人类终端用户的日常点击量。

## 新的资产负债表:智能体将要记录在账上

工具和平台变了,人的价值怎么算?这正是访谈接下来切入的深水区。

Nadella 提出了一个非常超前的管理学观点:当一家公司里,一批人和一批智能体配合工作,它们之间产生的交互「轨迹」(数据沉淀),将成为企业最核心的资产。这些轨迹可以拿去训练专属于这家公司的「公司老手智能体」。他甚至断言,当这种智能体沉淀了足够的公司专有知识后,它实际上应该被计入公司的**资产负债表** [15:33 Satya Nadella]。因为过去,人类的隐性知识无法被量化记录;而现在,智能体把这些工作流程完整捕捉了下来。

顺着「人机如何配合」这个话题,主持人问到了工程团队的分工。Nadella 非常认同「通才将迎来最大杠杆」的判断。以 LinkedIn(职场社交平台)为例,他们内部设立了「全栈构建者」的角色,把懂设计、懂产品、懂前端的人揉在一起,打破了原有的职能壁垒 [26:38 Satya Nadella]。但他也强调,在构建底层基础设施(比如支撑模型不断学习的系统)时,依然极度需要分布式系统的顶尖专家。

那么,当智能体开始大批量接管日常工作,人类的出路在哪?Nadella 的判断反直觉却充满乐观:他拿微软 [[Azure|Azure]] 云的物理网络运营团队举例。面对庞大的光纤铺设和维修需求,这个团队没有申请增加人手,而是要了更多的 token,自己搭建了一个名叫 Miles 的智能体系统,让它去自动调度 500 多个光纤运营商 [30:47 Satya Nadella]。这意味着,工作被「元化」(meta)了——人类的最新工作,变成了「构建管理系统去干活的智能体」。他甚至抛出了一个绝佳的类比:就像 80 年代没人会想到全球会有四十亿打字员,因为我们做的不是打字,而是知识工作;今天面对 AI,我们也应该跳出「替换人」的线性思维。

## 技术狂飙背后的账本:基建与社区必须双赢

聊完工作方式的颠覆,最后一个话题落在了更宏大的物理世界约束上:[[数据中心|数据中心]]的大举扩张。

Nadella 提到一组震撼的数字:微软在过去 15 个月里建成的 Azure(微软云)算力容量,超过了过去前 15 年的总和 [30:04 Satya Nadella]。但他极其清醒地指出,这种规模的基建如果无法让当地社区感受到切实好处,整个行业就会失去「社会运营许可」。他算了一笔账:数据中心必须带来真实的就业、改善的电网和更低的能源价格,这是必须用真金白银兑现的承诺 [32:55 Satya Nadella]。他还把这种务实精神延伸到了教育领域,指出在获取信息的方式巨变后,传统的教学法和学历认证体系需要被彻底重构。

## 本集带走

1. **企业最大的护城河是「私有评估」**:在公开基准测试已刷满水的时代,能用来驱动模型专属进化且不泄露轨迹的私有数据,才是核心 IP。
2. **SaaS 不会死,但会被拆解**:底层数据模型依然稳固,但传统应用的「围墙花园」将被打通。未来的软件价值,在于用智能体把数据与业务逻辑重组。
3. **「轨迹」是新的资产**:当智能体深度参与业务,沉淀下来的工作流轨迹将能训练出极具威力的「公司老手智能体」,这些资产理应被记入资产负债表。

## 金句(中英对照 · 过机器闸门三联校验)

> 拥有私有评估可能是最大的知识产权。  
> *Having private evals may be the biggest IP.*  
> —— Satya Nadella · [11:47] ^q1

> 我可以直接来让大家就在一个模型的祭坛前顶礼膜拜。但那不是开发者大会。  
> *I can just come and have you all just worship at the altar of one model. But that's not a developer conference.*  
> —— Satya Nadella · [14:08] ^q2

> 如果自己构建和维护某样东西的边际成本更高,你就应该总是去获取它。  
> *you should always acquire something if the marginal cost of building and maintaining something on your own is higher.*  
> —— Satya Nadella · [22:46] ^q3

> 你看到我谈到了我们如何在过去15个月里建成了比我们前15年建成的更多的Azure容量。  
> *You saw that I talked about how we built in the last 15 months more Azure capacity than we built in the first 15 years.*  
> —— Satya Nadella · [29:58] ^q4

> 如果有人来找我们说,四十亿人早上起床后会开始打字,我的模型会是,我们需要四十亿打字员,但我们不是在做打字。我们是在做知识工作。  
> *if somebody had come to us and said, four billion people are going to get up in the morning and start typing, my model would have been, we need four billion typists, but We're not doing typing. We're doing knowledge work.*  
> —— Satya Nadella · [31:12] ^q5

> 我认为世界将会非常怀疑那些说“相信我们,我们搞定了,未来将会是辉煌的”的科技和科技公司。我们必须交付切实的好处。  
> *I think the world is going to be very skeptical of tech and tech companies that say, trust us, we've got it, the future is going to be glorious. We have to deliver tangible benefits.*  
> —— Satya Nadella · [36:15] ^q6

> 事实上,我用来服务收件箱或邮箱的东西不能用来服务智能体。  
> *In fact, what I use to serve an inbox or a mailbox cannot be used to serve an agent.*  
> —— Satya Nadella · [19:45] ^q7

## 相关单集

- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《对话 Notion 产品负责人 Max:AI 时代的产品方法论与人的主观能动性》]] —— 同公司:GitHub · 同概念:智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的未来工作预测：别等 AI 末日，用 Codex 重塑一切》]] —— 同概念:SaaS、智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同公司:Microsoft · 同概念:智能体 (agent)
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同概念:智能体 (agent)
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《1.2 个人 + 20 个 AI 智能体：SaaStr 的极简销售实验》]] —— 同概念:智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同概念:智能体 (agent)
- [[2026-01-25-lennys-why-your-product-stopped-growing|《增长停滞怎么办？Jason Cohen 的四步诊断法》]] —— 同概念:SaaS
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《1500 亿美元的隐形 AI 公司创始人：恐惧源于无知，最好的工作是独自安静地完成》]] —— 同概念:智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同概念:智能体 (agent)
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《iPod之父Tony Fadell：反直觉的产品课》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人 Mark Pincus：想做出伟大产品，先学会「合法地抄袭」》]] —— 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《Databricks 的智能体平台与数据库「圣杯」：Reynold Xin 与 Matei Zaharia 的技术蓝图》]] —— 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《Gusto CTO 的极简实验:5 人 10 周凭感觉编程造出 AI 产品》]] —— 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《从避战大模型到押注智能体：Modal 的推理基础设施进化史》]] —— 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:智能体 (agent)
- [[2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge|《Sriram Krishnan：Kimi K3 将改写 AI 行业版图》]] —— 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被迫转行，一半人迎来复兴》]] —— 同概念:智能体 (agent)

*本集关键词:生态系统 · 私有评估 · 智能体 · SaaS 拆解 · 数据中心*

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
