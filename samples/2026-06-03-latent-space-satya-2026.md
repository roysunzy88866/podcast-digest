---
title: Satya Nadella：Microsoft Build特别跨界对谈
podcast: Latent Space
date: 2026-06-03
source_url: https://www.latent.space/p/satya-2026
duration: "38:50"
host: "[[Saragawa]]"
cohosts: ["[[Satya Nadella]]"]
companies: ["[[Microsoft]]", "[[GitHub]]"]
concepts: ["[[MAI 模型]]", "[[私有评估]]", "[[测试框架]]", "[[上下文层]]", "[[WorkIQ]]", "[[爬山]]", "[[智能体]]", "[[通才]]"]
tags:
  - AI 平台逻辑
  - 智能体
  - 企业智能
  - 应用层重构
  - 工程师角色演变
---

# Satya Nadella：Microsoft Build特别跨界对谈

> [!info] 关联
> **主持**:[[Saragawa]]
>
> **联合主持**:[[Satya Nadella]]
>
> **涉及公司**:[[Microsoft]] · [[GitHub]]
>
> **概念**:[[MAI 模型]] · [[私有评估]] · [[测试框架]] · [[上下文层]] · [[WorkIQ]] · [[爬山]] · [[智能体]] · [[通才]]
>
> **来源**:[Latent Space](https://www.latent.space/p/satya-2026)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-06-03-latent-space-satya-2026.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

纳德拉定调AI为生态:赋能每家公司构建专属智能,通才杠杆最大化,价值创造十倍放大。

这是 No Priors 与 Lanespace 的联动特别集,微软 CEO 萨提亚·纳德拉在微软 Build 大会发表长达三小时的主题演讲后,与两位主持人展开了深入交流。

> 【背景】萨提亚·纳德拉自 2014 年起担任微软 CEO,带领微软全面转向云计算与 AI。他提到自己见证了四次重大的平台变迁。本集讨论的核心正是 AI 时代的平台逻辑与价值创造。

### 平台的本质:赋能每家公司构建专属智能
纳德拉将这轮 AI 浪潮明确定义为一个**「生态系统玩法」**,而不是单一模型或单一平台 [01:15 [[Satya Nadella|Satya Nadella]]]。他基于过往见证四次平台变迁的经验指出,一个真正的平台,其根本定义在于**在平台之外创造的价值,必须远大于在平台内部捕获的价值** [01:30 Satya Nadella]。因此,微软的首要任务是让任何公司——无论是 AI 原生初创企业还是传统企业——都能成为一等公民的参与者,基于自身数据构建属于他们自己的 AI 与智能。

为此,微软推出了自家的 [[MAI 模型|MAI 模型]](具备清晰的血统与高质量预训练),其核心目的不是让大家都来用同一个通用大模型,而是提供脚手架,让企业去构建自己的专才模型 [02:32 Satya Nadella]。

> 【背景】「爬山(hill climb)」在 AI 领域指模型通过强化学习等方式,针对特定任务或私有评估指标不断优化、提升性能的过程。

纳德拉强调,每个公司都必须拥有**[[私有评估|私有评估]](private evals)**——即只属于自己、不被公开刷榜的评估标准。他认为,私有评估可能是 AI 时代公司最大的知识产权(IP)[11:47 Satya Nadella]。一个简单的资产检验测试是:当你拥有私有评估并正在使用模型 A 时,你能否无缝切换到模型 B 并继续提升性能?如果能,说明你掌握主动权;如果不能,你就不在掌控之中 [12:06 Satya Nadella]。

### 应用层的重构:从 SaaS 到智能体,价值创造放大十倍
主持人抛出了一个业界热议的挑战:既然现在生成代码和工作流变得极其便宜,这是否意味着传统软件的终结?

纳德拉没有全盘否定传统 SaaS(软件即服务)的价值,但他认为 SaaS 的商业模式必须经历**「拆解并重新打包」** [18:04 Satya Nadella]。过去 20 年,SaaS 的本质是:建立数据模型、构建业务逻辑、再加上一层 UI(用户界面)。在[[智能体|智能体]]时代,底层的实体关系数据模型(如总账)和业务逻辑依然极其重要,不需要被重新发明;但固化的应用外壳将被打破。

他以微软的 M365(包含 Word、Excel、Teams 等)为例:过去,这些应用产生的数据(如邮件、会议记录)被「囚禁」在各自的应用里。但在智能体世界,微软通过 [[WorkIQ|WorkIQ]](语义模型)将这些底层数据库彻底暴露出来 [18:48 Satya Nadella]。纳德拉举了一个他个人认为「最酷」的用例:他可以把一个 [[GitHub|GitHub]] 代码库与 WorkIQ 连接,让智能体去读取他上周参加的所有设计会议的转录稿,然后直接返回一份该如何修改代码的计划 [19:05 Satya Nadella]。这种跨越不同数据孤岛的工作流编排,使得价值创造的机会比以往放大了十倍 [19:29 Satya Nadella]。

随之而来的是基础设施的重构。过去用来服务人类收件箱的架构,根本无法应对全天候运行的成千上万个智能体的高频调用。

### 工作流的核心魔法:测试框架与上下文层
纳德拉揭示了微软目前在应用层构建智能体的核心方法论。他指出,微软所有的产品(无论是 GitHub Copilot 还是安全产品 M-Dash)本质上都是**带有工具访问权限的多模型[[测试框架|测试框架]](harness)** [09:04 Satya Nadella]。

> 【背景】这里的「测试框架(harness)」指围绕大模型搭建的完整调度系统,负责管理上下文、调用外部工具、并协调多个模型协同工作。

他一针见血地指出,过去两年行业学到的最惨痛教训是:**准备[[上下文层|上下文层]]所需的工作量极其巨大** [09:23 Satya Nadella]。这才是智能体能否以最高效方式执行计划的真实魔法所在。通过将丰富的上下文、多种模型与工具组合在开放的测试框架中,智能体就能展现出惊人的能力——例如微软的安全产品在发布首日,就发现了传统安全工具未能找到的漏洞 [10:04 Satya Nadella]。

### 工程师角色的演变:通才迎来黄金时代
当应用开发的门槛被无限拉低,未来的工程组织会发生什么变化?纳德拉非常确信,**[[通才|通才]]将获得最高的杠杆作用与最大回报** [27:48 Satya Nadella]。

他举例说,过去知识工作者只能创建 Word 文档或 Excel 表格,而现在的通才可以直接构建一个应用 [28:01 Satya Nadella]。另一方面,他也观察到内部基础设施人才需求的剧增。例如,在 Excel 这样的终端用户应用团队中,现在必须引入分布式系统专家,因为构建能够学习奖励的强化学习环境,已经成了最困难的基础设施问题之一 [27:13 Satya Nadella]。此外,以 LinkedIn 为例,微软正在推行一种新的学科岗位——「全栈构建者」,将设计、产品管理和前端工程融合,赋予员工更大的职责范围。

### 真正的雄心:让不可能变为可能
谈及微软如何在这个时代保持雄心,纳德拉引用了微软 CTO Kevin Scott 的话:「让困难的事情变得更容易,只是一个支点;真正的雄心壮志,是让不可能成为可能」 [29:29 Satya Nadella]。

他分享了一个极具启发性的内部案例:管理 Azure 网络的团队发现,传统的 DevOps 模式根本无法应对规模的暴增。于是他们重新概念化了工作——不再亲自做 Azure 网络,而是构建了一个管理 Azure 网络的智能体系统(代号 Miles)[30:20 Satya Nadella]。这个团队甚至开始向公司要「Token 预算」而不是「人员编制」(headcount)[30:55 Satya Nadella]。这种将日常工作「元化」的认知跃迁,正是企业价值被创造的新连接组织 [31:42 Satya Nadella]。

### AI 的社会影响与许可:必须交付切实利益
面对大规模数据中心的建设,纳德拉坦承,作为科技行业,如果不能确保这些巨量投资在社区层面带来**真实可感的好处**,行业就不会获得继续发展的「许可」 [32:36 Satya Nadella]。这意味着必须向公众证明:数据中心没有推高当地的能源价格(长期看反而会建设更好的电网)、水资源得到闭环补充,且切实创造了大量建设期就业和长期税基。

他强烈指出,世界已经对那些只画大饼、说「相信我们,未来很美好」的科技公司持高度怀疑态度 [36:18 Satya Nadella]。因此,AI 时代最大的社会议题,是必须让每个人都能以一等公民的身份参与新经济。被问及为何 AI 在教育领域的影响尚未爆发时,纳德拉认为这涉及激励机制、学历凭证与就业价值的全面重构,并大胆预言:下一个伟大的初创公司,或许正是创立新大学或全新教学法的人 [38:25 Satya Nadella]。

## 金句(中英对照 · 过机器闸门三联校验)

> 一个平台从根本上由它创造平台之外的价值相对于在平台内捕获的价值的能力所定义。  
> *a platform is defined by fundamentally its ability to create more value about the platform versus what's captured in the platform.*  
> —— Satya Nadella · [01:32] ^q1

> 每家公司拥有私有评估可能是最大的知识产权。  
> *every company Having private evals may be the biggest IP.*  
> —— Satya Nadella · [11:45] ^q2

> 你正在使用模型 A。你能切换到模型 B 并往上爬吗?如果可以,那么你在掌控之中。如果不可以,你就没有掌控权。  
> *You're using model A. Can you switch it to model B and climb up? If you can, then you're in control. If you can't, you're not in control.*  
> —— Satya Nadella · [12:06] ^q3

> 它转移回给我作为人类的认知负荷是如此过度,以至于我现在需要一个新的 UI。  
> *The cognitive load it transfers back to me as a human is so excessive that now I need a new UI.*  
> —— Satya Nadella · [06:54] ^q4

> 你在每个 SaaS 应用底层构建的那个数据模型是非常好的。为什么要重新发明它?  
> *data model that you built underneath every SaaS application is super good. Why reinvent it?*  
> —— Satya Nadella · [17:14] ^q5

> 所以现在在智能体世界中的价值创造机会,实际上是 10 倍之多。  
> *So the value creation opportunity now in the agent world is, in fact, 10x more.*  
> —— Satya Nadella · [19:29] ^q6

> 我们在过去 15 个月里建成了比我们前 15 年建成的更多的 Azure 容量。  
> *we built in the last 15 months more Azure capacity than we built in the first 15 years.*  
> —— Satya Nadella · [30:00] ^q7

> 看,我们不需要人员编制。我们需要 token 以便能够管理我们的运营。  
> *look, we don't need a headcount. We need tokens in order to be able to manage our operation.*  
> —— Satya Nadella · [30:56] ^q8

> 我认为世界将会非常怀疑那些说「相信我们,我们搞定了,未来将会是辉煌的」的科技和科技公司。  
> *I think the world is going to be very skeptical of tech and tech companies that say, trust us, we've got it, the future is going to be glorious.*  
> —— Satya Nadella · [36:15] ^q9

## 相关单集

- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《神话之后的红队评估 — Zico Kolter与Matt Fredrikson，Gray Swan》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《为什么前沿生态必须开放》]] —— 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《为什么 AI 基础设施必须为「Agent 体验」进化》]] —— 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:智能体 (agent)
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《2026-07-19-lennys-netflix-cpto-on-ai-and-the-future》]] —— 同概念:智能体 (agent)

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
