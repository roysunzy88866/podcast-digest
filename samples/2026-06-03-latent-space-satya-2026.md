---
title: "专访 Satya Nadella:智能体时代的平台逻辑与企业护城河"
podcast: Latent Space
date: 2026-06-03
source_url: https://www.latent.space/p/satya-2026
duration: "38:50"
host: "[[Saragawa]]"
cohosts: ["[[Satya Nadella]]"]
companies: ["[[Microsoft]]", "[[GitHub Copilot]]"]
concepts: ["[[智能体]]", "[[测试框架]]", "[[私有评估]]", "[[SaaS]]", "[[通才]]", "[[缩放定律]]", "[[开放权重模型]]", "[[数据模型]]", "[[数据中心]]"]
tags:
  - AI 生态系统
  - 智能体
  - 私有评估
  - 测试框架
  - SaaS 重构
---

# 专访 Satya Nadella:智能体时代的平台逻辑与企业护城河

> [!info] 关联
> **主持**:[[Saragawa]]
>
> **联合主持**:[[Satya Nadella]]
>
> **涉及公司**:[[Microsoft]] · [[GitHub Copilot]]
>
> **概念**:[[智能体]] · [[测试框架]] · [[私有评估]] · [[SaaS]] · [[通才]] · [[缩放定律]] · [[开放权重模型]] · [[数据模型]] · [[数据中心]]
>
> **来源**:[Latent Space](https://www.latent.space/p/satya-2026)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-06-03-latent-space-satya-2026.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

微软 CEO 畅谈 AI 平台生态、企业核心资产变迁、软件重构与组织雄心。

本集是 No Priors 与 Latent Space 的联动节目,嘉宾是微软 CEO [[Satya Nadella|Satya Nadella]]。对话发生在微软的 Build 开发者大会之后。Nadella 在微软经历了多次平台变迁,整场对话围绕他眼中 AI 时代的平台逻辑展开:从微软自身的 AI 战略反思,到企业在这个新时代该用什么建立护城河,再到整个社会需要怎样重塑工作与价值创造——一条从技术一路延伸到宏观经济的主线。

## 生态系统的逻辑:不是单一模型,而是让所有人参与前沿

在 Nadella 看来,经历了四次重大平台变迁后,他深刻认识到:一个真正的平台,其核心定义在于**它在平台之外创造的价值,必须远大于在平台内部捕获的价值** [01:30 Satya Nadella]。

这也是他对当前微软 AI 战略的根本定位。他强调,微软这次发布的重点不是单一模型,而是一个「生态系统玩法」。他的核心问题是:无论一家公司是 AI 原生还是传统企业,它如何才能作为一等公民参与其中,创造出属于它自己的 AI?

具体到训练策略,他提到微软发布的 MAI 模型非常注重「干净的血统」(clean lineage)。他解释说,现在网上充斥着太多被污染的数据,必须费力把它们消融掉,才能得到极好的预训练模型 [02:53 Satya Nadella]。他批评很多[[开放权重模型|开放权重模型]]「在一个或两个基准测试上看起来很棒,但在实践中并不好」[03:01 Satya Nadella]。

Nadella 特别强调了「[[私有评估|私有评估]]」的重要性。他认为公开的基准测试现在都能被刷满,失去区分度,每家公司必须建立自己的私有评估。基于干净的模型血统和私有评估,企业才能围绕模型搭建「爬山脚手架」(hill climbing scaffold),收集轨迹,最终打造出自己的专才模型。

> 【背景】「爬山」是优化算法中的经典概念,指通过逐步迭代寻找最优解。Nadella 借用它来形容企业利用 AI 模型,在自己特定的私有评估指标上不断提升表现的过程。

他举了一个演示案例:他们使用了 GPT-55 收集了一堆轨迹,然后用一个 5B 推理模型,在特定任务上取得了更高的成绩 [04:33 Satya Nadella]。这证明只要路径对,小模型也能在特定领域超越大模型。

## 真正的评估在现实世界:用「测试框架」掌控智能体

顺着生态系统的逻辑,主持人问 Nadella:现在回头看,有什么是你两三年前希望早知道的?

Nadella 坦言,他当年被 scaling laws(描述模型能力随算力增长的规律)激发,也确实看到了模型能力在攀升。**但他低估了将这些模型部署到现实世界并真正交付价值的复杂性** [05:32 Satya Nadella]。他感叹,人们抱怨不想为一个「token 极大值」买单,这其实是行业的失败——因为没有教会大家,我们是在用 token 一步步创造价值 [06:11 Satya Nadella]。

既然部署到现实世界这么难,微软的解法是什么?这就引出了他反复强调的核心架构概念:**Harness([[测试框架|测试框架]])**。

Nadella 解释,真正的[[智能体|智能体]]系统是一个跨越三者的循环。微软确保自己构建的所有产品——无论是 [[GitHub Copilot|GitHub Copilot]] 还是安全产品——**全都是带有工具访问的多模型测试框架**,通过渐进式工具披露让它们是 token 高效的 [09:04 Satya Nadella]。

> 【背景】这里的 harness 指的是智能体运行时的管理框架。它负责调度底层的大模型,管理上下文记忆,并决定在什么时机调用什么外部工具,是让智能体稳定执行复杂任务的关键中间件。

他特别强调准备「上下文层」的艰难:「你需要做大量的工作来准备上下文层,这样你的计划才能以最有效的方式执行,这就是魔法所在」[09:23 Satya Nadella]。他举了安全产品的例子:当它启动时,发现了过去常规工具没发现的漏洞——这就是一起训练测试框架、工具和模型的「存在性证明」[10:04 Satya Nadella]。

## 企业的核心资产:智能体轨迹与「私有评估」

明白了现实世界部署的复杂性,企业的核心价值(护城河)也就变了。

主持人问:在这样一个第一方产品与赋能产品并存的世界里,开发者的价值获取在哪里?Nadella 给出了一个极具判断力的回答。

首先,他承认平台构建者也可以有第一方产品,就像 Windows 时代一样,「**它不应该成为其他人取得同样成功的限制因素**」[11:17 Satya Nadella]。关键是,围绕智能的网络效应这次不同,模型是从数据中学习的。

基于此,Nadella 给出了他对于企业核心资产的最核心论断:**「每家公司拥有私有评估,可能是最大的知识产权」** [11:47 Satya Nadella]。他提出了一个绝佳的资产测试:如果你有一个私有评估,你在用模型 A;你能无缝切换到模型 B 并且继续往上爬吗?如果可以,你在掌控中;如果不可以,你就没掌控权 [12:06 Satya Nadella]。这正是「测试框架」决策如此重要的原因。

Nadella 将这套逻辑进一步推演到了公司的资产负债表上。他认为,在智能体时代,当一家公司拥有了通过大量轨迹学习过的「公司老手智能体」,这些能够捕捉隐性知识的资产,**「实际上应该记入资产负债表上」** [15:30 Satya Nadella]。

## 智能体正在「拆解与重组」SaaS

既然工作流和核心资产都变了,传统的 [[SaaS|SaaS]](软件即服务)模式还撑得住吗?

Nadella 的判断非常清晰:SaaS 底层的[[数据模型|数据模型]]和业务逻辑依然非常有价值,「我的总账最好就是一个总账,我不需要重新发明」[17:20 Satya Nadella]。SaaS 商业模式的挑战在于打包方式:「**我们以一种方式打包了,我们现在必须学习如何拆解这些东西并以新的方式重新打包**」[18:04 Satya Nadella]。

他举了 [[Microsoft|Microsoft]] 365 的例子。过去,Exchange、SharePoint、Teams 等应用的数据是被囚禁在各自应用里的。但现在通过暴露底层语义模型,价值创造机会放大了 10 倍。Nadella 描述了他亲身做的事:他去 GitHub 仓库,对系统说「我上周参加了与这个仓库相关的一堆设计会议,你能捕获所有转录稿,回来告诉我应该对代码库做什么更改吗?」[19:05 Satya Nadella]——这在以前根本无法想象。

商业模式上,他认为按用户定价、按消费量定价和基于结果的定价会并存。但他幽默地拆穿了「结果定价」的幻象:**「大多数人都喜欢结果,直到他们真的得到了一个结果。因为一旦你有了一个结果,(要分钱)这就像放弃版税」** [20:53 Satya Nadella]。

Nadella 对企业内部狂热的「智能体热」泼了冷水,认为要等一个完整的预算周期过去才能看到平衡:核心判据是——如果自己构建和维护某样东西的边际成本,高于直接去获取它的成本,就应该去获取。维护成本是关键。

## 工程师的未来:通才的杠杆最大化

工具和工作流的重构,必然带来人的角色重塑。

Nadella 自己就是个「动手者」。他坦言构建软件的能力「甚至让像我们这样一家公司的 CEO 的无能也能够构建了」[24:08 Satya Nadella]。他上周刚构建了一个长时间运行的 Foundry 智能体,用于监控他自己的「参谋长」任务流。

在组织层面,他以 LinkedIn 为例,他们建立了一个叫「全栈构建者」的新学科,把设计、产品管理和前端工程放在一起,但保留各自的锋芒 [26:39 Satya Nadella]。

Nadella 对未来工程角色的判断是:**[[通才|通才]]角色的杠杆作用将迎来最大回报**。因为过去知识工作者只能产出文档或表格,现在他们可以构建应用。「我的通才技能获得了更高的杠杆作用,我想这是我们将全面看到的」[27:14 Satya Nadella]。

## 真正的雄心是重新定义工作本身

这种个人杠杆的放大,投射到组织层面,就是对「雄心」的重新定义。

Nadella 引用微软 CTO Kevin Scott 的话指出:「真正的雄心壮志不是让困难的事情变容易,而是让不可能成为可能」[28:29 Satya Nadella]。而要做到这一点,组织必须重新概念化工作本身。

他举了 Azure 网络团队的例子。这个团队管理着 500 多个光纤运营商,面对物理层面的断线抢修。Nadella 说,面对过去 15 个月建成超过前 15 年总和的 Azure 容量,团队意识到传统工作方式行不通了。**「他们说我们的工作不是做 Azure 网络,我们的工作是构建做 Azure 网络的智能体系统」** [30:17 Satya Nadella]。他们甚至为这个系统建了个角色叫 Miles。团队对 Nadella 说:我们不需要人员编制,我们需要 token 来管理运营。

这种对工作的「元化」改造,就是新组织形态的萌芽。就像 80 年代如果说四十亿人早上会打字,旧模型会认为需要四十亿打字员,但实际诞生的是知识工作。

## 数据中心与社区许可:科技公司必须证明自己

最后,话题从微观组织跃升到了宏观社会。

面对重新定义超大规模运营商的[[数据中心|数据中心]]建设狂潮,Nadella 表现出了难得的清醒。他强调,除非整个行业有原则地确保这些投资的好处能以真实的方式在社区层面被感受到,否则这事就行不通 [32:36 Satya Nadella]。

他列举了必须落地的承诺:不推高能源价格(长期甚至降低)、闭环系统补充水资源、创造建设期就业、扩大税基。**「如果情况确实如此,那么我们将获得许可;如果不是,我们将不会获得许可。就是这么简单」** [33:30 Satya Nadella]。

对于 AI 的社会影响,Nadella 坦言自己最大的认知更新是:世界对那些说「相信我们,未来会很辉煌」的科技公司会非常怀疑。「我们必须交付切实的好处」[36:26 Satya Nadella]。他强调必须在 12 到 18 个月内,让人们真实感受到无论是医疗结果改善还是创业机会增加。

> 【背景】softmax 是机器学习中常用于多分类任务的函数,能将一组实数转化为概率分布。Nadella 提到斯坦福的 AI 课程仍要求学生学会恰当应用 softmax,而不是只会对模型喊「修复我的训练运行」——借此强调基础教育中掌握底层概念依然重要。

在教育的尾声,Nadella 留下了一个充满想象力的判断:也许下一个巨大的创业成功故事,**是某个构建了一所新大学或新教学法的人** [38:25 Satya Nadella]。

## 本集带走

1. **「私有评估」是新时代最大的 IP**:你的护城河不在于拥有最强的模型,而在于拥有一套能让自己不断「爬山」的私有评估指标,以及能随时切换底层模型的开放测试框架。
2. **智能体在「拆解与重组」软件**:SaaS 的价值不会消失,但打包方式会被打破。底层数据模型与语义逻辑被暴露出来,通过智能体进行跨应用编排,价值创造将放大十倍。
3. **真正的雄心是让工作「元化」**:最高效的组织不是用智能体加速旧任务,而是重新定义工作本身——把「做业务」变成「构建做业务的智能体系统」,通才的杠杆将得到史无前例的放大。
4. **科技行业必须赢得「社区许可」**:巨大的算力建设不能只讲宏大叙事,必须在能源、就业和税基上给社区带来可见的利益,否则行业将失去前行的社会授权。

## 金句(中英对照 · 过机器闸门三联校验)

> 在微软长大,见证了四次重大的平台变迁,我已经属于那个阵营,在那里一个平台从根本上由它创造平台之外的价值相对于在平台内捕获的价值的能力所定义。  
> *having grown up at Microsoft, having seen four major platform shifts, I've fallen into that camp where a platform is defined by fundamentally its ability to create more value about the platform versus what's captured in the platform.*  
> —— Satya Nadella · [01:25] ^q1

> 但最重要的是,你会有私有的评估,因为我们知道外面的所有评估都是好的,有趣的,但它们在这一点上并不是真的那么关键,因为它们全都能被刷满。  
> *most importantly, you'll have private evals because we know all the evals out there are good, interesting, but they're not really that critical at this point because they all can be maxed.*  
> —— Satya Nadella · [03:55] ^q2

> 所以我会说每家公司拥有私有评估可能是最大的知识产权。  
> *I would say every company having private evals may be the biggest IP.*  
> —— Satya Nadella · [11:45] ^q3

> 你能切换到模型 B 并往上爬吗?如果可以,那么你在掌控之中。如果不可以,你就没有掌控权。  
> *Can you switch it to model B and climb up? If you can, then you're in control. If you can't, you're not in control.*  
> —— Satya Nadella · [12:09] ^q4

> 可能就像人力资本从来不可能被记入资产负债表上,因为你不知道如何捕捉那些隐性知识。而现在我认为你可以用那些随时间学习过的智能体来做,通过所有的轨迹。  
> *There may be like human capital was never possible to go put on a balance sheet because you didn't know how to capture the tacit knowledge. Whereas now I think you can with the agents that have learned through time, through all the traces.*  
> —— Satya Nadella · [15:35] ^q5

> 如果自己构建和维护某样东西的边际成本更高,你应该总是去获取它。  
> *You should always acquire something if the marginal cost of building and maintaining something on your own is higher.*  
> —— Satya Nadella · [22:46] ^q6

> 所以他们构建了,本质上他们说我们的工作不是做 Azure 网络,我们的工作是构建做 Azure 网络的智能体系统。  
> *So they built, essentially they said our job is not to do Azure networking, our job is to build the agentic system does Azure networking.*  
> —— Satya Nadella · [30:15] ^q7

> 也许下一个大的创业公司和成功故事可能是某个构建了一所新大学甚至一种新教学法的人,关于如何让某人完成一门课程并找到具有高价值的经济机会。  
> *Maybe the next big startup and success story could be someone who builds a new university or a new pedagogy even of how to get someone to go through a curriculum and find economic opportunity that's highly valuable.*  
> —— Satya Nadella · [38:25] ^q8

> 见证了四次重大的平台变迁,我已经属于那个阵营,在那里一个平台从根本上由它创造平台之外的价值相对于在平台内捕获的价值的能力所定义。  
> *Having seen four major platform shifts, I've fallen into that camp where a platform is defined by fundamentally its ability to create more value about the platform versus what's captured in the platform.*  
> —— Satya Nadella · [01:26] ^q9

## 相关单集

- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的 AI 工作预测:智能体接管工作,但人类不会失业》]] —— 同概念:SaaS、智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同公司:Microsoft · 同概念:智能体 (agent)
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同概念:智能体 (agent)
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《用 20 个 AI 智能体替代 10 人销售团队：SaaStr 创始人的前沿实战》]] —— 同概念:智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同概念:智能体 (agent)
- [[2026-01-25-lennys-why-your-product-stopped-growing|《增长停滞怎么办？Jason Cohen 的四步诊断法》]] —— 同概念:SaaS
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《估值 150 亿的隐形 AI 公司 Applied Intuition:给自动驾驶卡车的焦虑开一剂务实药方》]] —— 同概念:智能体 (agent)
- [[2026-03-22-lennys-the-art-of-influence-jessica-fain|《别怪高管不懂你：产品经理的向上影响力心法》]] —— 同概念:智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被淘汰，构建者迎来黄金期》]] —— 同概念:智能体 (agent)
- [[2026-04-26-lennys-snapchat-ceo-why-distribution-is|《Snap CEO Evan Spiegel:在AI时代,做最会创新的公司》]] —— 同概念:智能体 (agent)
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人：别想从零颠覆世界，靠复制才能创新》]] —— 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《给 AI 智能体装上「安全带」:Gray Swan 的攻防实战》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《Databricks 的智能体时代布局：统一调度、开源治理与数据库重写》]] —— 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《No Figma. No Jira. No docs. How Gusto built a new product line with Claude Code | Eddie Kim (CTO)》]] —— 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《AI 基础设施如何为智能体重新设计:Modal 联合创始人的方法》]] —— 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:智能体 (agent)
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《在指数级增长公司做增长：Anthropic 增长负责人的打法》]] —— 同概念:智能体 (agent)

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
