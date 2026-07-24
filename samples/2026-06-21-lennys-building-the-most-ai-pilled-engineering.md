---
title: "What happens after coding is solved? | Fiona Fung (Manager of the Claude Code and Cowork Teams)"
podcast: "Lenny's Podcast"
date: 2026-06-21
source_url: https://www.lennysnewsletter.com/p/building-the-most-ai-pilled-engineering
duration: "98:42"
host: "[[Lenny]]"
cohosts: ["[[Fiona Fung]]"]
companies: ["[[Anthropic]]", "[[Claude Code]]", "[[co-work]]"]
concepts: ["[[智能体]]", "[[例行程序]]", "[[验证]]", "[[测试驱动开发]]", "[[内部试用]]", "[[成长型心态]]"]
tags:
  - AI 团队管理
  - 智能体
  - 工程文化
  - 工作流重构
  - 验证
---

# What happens after coding is solved? | Fiona Fung (Manager of the Claude Code and Cowork Teams)

> [!info] 关联
> **主持**:[[Lenny]]
>
> **联合主持**:[[Fiona Fung]]
>
> **涉及公司**:[[Anthropic]] · [[Claude Code]] · [[co-work]]
>
> **概念**:[[智能体]] · [[例行程序]] · [[验证]] · [[测试驱动开发]] · [[内部试用]] · [[成长型心态]]
>
> **来源**:[Lenny's Podcast](https://www.lennysnewsletter.com/p/building-the-most-ai-pilled-engineering)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-06-21-lennys-building-the-most-ai-pilled-engineering.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

Fiona Fung 解读编码不再是瓶颈后,软件团队如何重工作流、质量把控与团队文化。

[[Fiona Fung|Fiona Fung]] 是 [[Anthropic|Anthropic]] 团队背后的负责人,她主管构建 [[Claude Code|Claude Code]] 和 Co-work(一套辅助编码与处理日常任务的[[智能体|智能体]]产品)的团队。在加入 Anthropic 之前,她在微软和 Meta 领导了 TypeScript、Visual Studio 和 Facebook Marketplace 等产品的工程团队。本集她做客播客,聊了一个所有技术团队都在面对的核心问题:**当 AI 智能体让代码产量激增、编码不再是瓶颈后,工程师的角色、团队的工作流和管理方式应该如何随之演变?** 全文将沿着三条线索展开:先看她如何重构团队的工作流以接住「代码量 8 倍」的增长;接着探讨工具变了,人该怎么适应;最后是她对文化与未来人才培养的思考。

> 【背景】Anthropic 是开发 Claude 系列大模型的公司;播客中提及的 Boris Cherny 和 Kat Wu 是 Fiona 在 Claude Code 与 Co-work 团队的下属,此前均作为嘉宾上过该播客热门集。文中讨论的推文数据,指 Anthropic 工程师当前季度的平均代码产出相比过往有了近 8 倍的爆发式增长。

## 重构工作流:接住八倍增量

回顾自己从使用 Vim 和终端调试的早期工程岁月,到拥抱带有高级调试功能的 IDE(集成开发环境),Fiona 坦言工程师的角色一直在演进。但在 AI 时代,真正的范式转移发生了:当吞吐量剧增,Claude Code 和 Co-work 不仅要帮工程师写代码,还要帮 PM 和设计师也提交代码,工作流的重心便从「如何产出」转向了「如何[[验证|验证]]」[09:23 Fiona Fung]。

她将这个新工作流称为「Routines」([[例行程序|例行程序]])。过去 Fiona 习惯每天早晨喝咖啡时,手动去各个 Slack 频道查看用户反馈,再手动写提示词让 Claude 生成修复 PR。现在,她可以将这些步骤编写为一个异步的 Routine:这个例行程序会在每天设定时间自动运行,不仅能聚合多渠道的反馈生成摘要,还能直接代替她启动多个智能体去写代码。当她醒来时,等待她的是已经写好、可供审查的 PR,而不是一堆需要她分发的杂活 [36:38 Fiona Fung]。

当代码量呈指数级上升,人类审查者成了最大的瓶颈。Fiona 发现,单靠人盯人不仅跟不上速度,还容易失去对全局的把控。她的解法是**将管理动作沉淀为系统反馈**:她设立了一个挂载在所有代码库上的 Claude Code 远程会话,每月与团队开会复盘时,不再靠每个人口头汇报「我发了什么功能」,而是直接共享屏幕,让 Claude 汇总出上个周期合并的 PR、引发的 Bug 甚至事故报告,并据此与下属展开关于质量和投资方向的深度对话 [10:18 Fiona Fung]。

这套机制甚至重塑了她对[[测试驱动开发|测试驱动开发]](TDD)的看法。曾经,先写测试再写代码对工程师来说像「先吃西兰花」一样痛苦;现在,Claude 可以根据规格说明先自动写好测试并确保其失败,然后再去实现修复代码。原本令人抗拒的约束,被智能体变成了无缝的自动化流程 [16:24 Fiona Fung]。

面对性能与质量的平衡,Fiona 还引入了一套直观的分类法:**「Bad」与「Sad」**。「Bad」指代不可恢复的严重错误(例如 CLI 崩溃导致用户丢失工作),「Sad」则是那些可恢复但令人沮丧的体验小瑕疵(例如界面闪烁)。比起干瘪的性能指标,赋予每个团队自主权去定义各自的 Bad 与 Sad,能更敏锐地捕捉并提升真实的用户体验 [45:25 Fiona Fung]。

## 工具变了,人怎么适应?

随着流水线和验证方式改变,团队成员的画像与心态也必须转型。

**1. 重新定义人才画像。** Fiona 在招聘时,如今最看重两类人:一是具有极强产品直觉的「创意构建者」,他们充满热情,能端到端将一个想法打磨成令人愉悦的产品;二是「深层系统专家」,用于攻克那些需要极度专业信任、必须人工验证的硬核技术难点 [17:09 [[Lenny|Lenny]]]。由于 AI 补足了跨领域的技能鸿沟,「全员皆 Builder」正在成为现实:一个非移动端出身的工程师,现在可以借助 Claude 轻松为功能补上移动端版本,个人的能力天花板被彻底打破 [19:11 Fiona Fung]。

**2. [[成长型心态|成长型心态]]与直面恐惧。** 面对那些在 AI 浪潮中感到受挫甚至抵触的人,Fiona 认为这背后往往是「恐惧」。她用自己高中时为了负担大学学费、硬着头皮去当银行柜员的故事举例:当感觉一切失控时,最好的办法就是找到那个「你能控制的微小行动」并去做 [24:46 Fiona Fung]。她信奉「如果你不害怕,你会做什么?」以及「偶尔做点可怕的事」,因为只有持续涉足未知,人才能保持成长 [25:00 Fiona Fung]。

**3. 警惕孤独感,重建人际连结。** 一个反直觉的痛点是:当每个人都对着自己的智能体高效工作时,工程团队开始变得孤独。为了找回协作感,Fiona 发起了「结对编程午餐」,让大家并排坐在一起,各自用自己的方式跑 Claude Code。因为每个人调教工具的习惯不同,哪怕只是旁观旁边的人怎么构建,大家也能互相学到大量新奇的用法 [56:44 Fiona Fung]。

## 管理者要亲临前线,但要砍掉冗余流程

工作流与角色的变化,对工程管理者提出了全新的要求。

Fiona 坚持一条铁律:**所有新加入的经理,都必须先从 IC(独立贡献者)做起。** 在承担支持他人的管理责任前,他们需要给自己留出足够的「创造者时间」,深入代码库和产品中去。只有亲自使用团队构建的工具,管理者才不会迷失在指标报表中,才能真正与团队建立共鸣 [50:50 Fiona Fung]。

她甚至要求经理们保持对「轶事」的敏感。分享的数据仪表盘固然客观,但 Fiona 发现,很多时候最有效的管理抓手来自她亲自使用产品时发现的一个小 Bug,或是进行客户访谈时听到的真实抱怨 [66:02 Fiona Fung]。

> 【背景】播客主持人 Lenny 提到亚马逊创始人 Jeff Bezos 的名言:「当数据和轶事发生冲突时,相信轶事。」

正因为变化太快,管理者应当给予团队明确的许可:**终止一切不再发挥作用的流程。** Fiona 刚加入时曾推行过六个月的路线图规划,但三个月后就发现已不再适用。如今,她将长线规划缩短为极为轻量的「准时制规划」:仅用一个电子表格列出当月的最高优先级,并每周与团队做一次极简对齐 [84:37 Fiona Fung]。

## 如何培养下一代工程师?

节目的尾声,Fiona 分享了她如今「夜不能寐」的隐忧:在这个不再需要手敲代码的时代,**该如何培养下一代工程师?** 过去的工程师是靠在「代码堆里的日子」积累了对底层架构的理解,现在的新人该如何跨越这道鸿沟?她猜想,未来的软件工程或许会演变为类似医学的「驻院医生」学徒制。但不论工具如何智能,「深入理解你依赖的那一层架构」依然是人类专家不可替代的价值所在 [73:26 Fiona Fung]。

## 本集带走

1. **管理重心从「写」转向「验」**:当智能体能以 8 倍速产出代码,管理者的核心工作不再是催促产出,而是把「验证什么是好」的框架(如规格说明、自动测试)固化到代码库中,让智能体自己去比对和纠偏。
2. **所有管理者必须亲临前线**:经理必须先做 IC、必须亲自使用产品。脱离了真实的使用体验和一线代码,只看仪表盘的管理动作在极速变化的 AI 时代注定失效。
3. **要有勇气砍掉旧流程**:在 AI 时代,没有什么是永远有效的。从六个月的路线图到死板的绩效指标,只要不再服务于当前目标,就果断终结它。

## 金句(中英对照 · 过机器闸门三联校验)

> 客户会以你没有意图的方式使用你的产品,无论好坏。  
> *Customers will use your product in ways that you did not intend for good or for bad.*  
> —— Fiona Fung · [34:28] ^q1

> 但对于任何你知道存在恐惧的事情,我的建议是某种程度的投入。然后问自己,好吧,有什么我能做的吗,什么在我的控制范围内  
> *but for anything that you know that there is a fear my advice is kind of lean in and ask okay is there some what can I do about it what is within my control*  
> —— Fiona Fung · [21:27] ^q2

> 实际上如果你不害怕你会做什么,并且偶尔做点可怕的事情,因为那通常也是我们成长的方式  
> *actually those were my two favorite things before like what would you do if you're not afraid and do something scary once in a while because that's also usually how we grow*  
> —— Fiona Fung · [24:58] ^q3

> 不要首先把动静误认为是进步,因为如果你在衡量工具的用户使用情况,那么你衡量的是行动  
> *first take motion for progress because if you're measuring like you know like tool user usage then you're you're measuring the action*  
> —— Fiona Fung · [41:29] ^q4

> 在 Claude 代码和 co-work 团队文化中真正重要的另一件事,就是明确的许可去终止那些不再服务于我们的流程  
> *one other thing that's really big on Claude code and co-work team culture is explicit permission to kill processes that no longer serve us*  
> —— Fiona Fung · [83:10] ^q5

> 我现在称之为 JIT 规划,就像准时制规划,因为是的我认为六个月太长了  
> *I call it JIT planning now like just in time planning so it is like around like because yeah I think six months was too long*  
> —— Fiona Fung · [84:37] ^q6

## 相关单集

- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《The AI paradox: More automation, more humans, more work | Dan Shipper》]] —— 同公司:Anthropic、Claude Code · 同概念:智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同公司:Claude Code、Anthropic · 同概念:智能体 (agent)
- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同公司:Anthropic、Claude Code
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《From skeptic to true believer: How OpenClaw changed my life | Claire Vo》]] —— 同公司:Claude Code · 同概念:智能体 (agent)
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《Head of Growth (Anthropic): “Claude is growing itself at this point” | Amol Avasare》]] —— 同公司:Anthropic、Claude Code
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同公司:Claude Code · 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《Why half of product managers are in trouble | Nikhyl Singhal (Meta, Google)》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《Why cultivating agency matters more than cultivating skills in the AI era | Max Schoening (Head of Product, Notion)》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella：Microsoft Build特别跨界对谈》]] —— 同公司:Microsoft · 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《神话之后的红队评估 — Zico Kolter与Matt Fredrikson，Gray Swan》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把销售当产品做：用 AI 重构 GTM 团队的实战指南》]] —— 同概念:智能体 (agent)
- [[2025-12-07-lennys-surge-ai-edwin-chen|《被 10 亿美元验证的逆向创业法:AI 数据公司 Surge 的独立路径》]] —— 同公司:Anthropic
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《用 1.2 个人加 20 个 AI 智能体，替换 10 人销售团队》]] —— 同概念:智能体 (agent)
- [[2026-02-26-lennys-ai-is-critical-for-humanitys-survival|《AI is critical for humanity’s survival: Cisco president on the AI revolution | Jeetu Patel》]] —— 同概念:智能体 (agent)
- [[2026-05-10-lennys-how-to-build-a-company-that-withstands|《How to build a company that withstands any era | Eric Ries, Lean Startup author》]] —— 同公司:Anthropic
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《Father of the iPod and iPhone on building taste, judgment, and creativity in the AI era | Tony Fadell》]] —— 同公司:Anthropic
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《The hidden pattern behind successful products | Mark Pincus (founder of Zynga)》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《为什么前沿生态必须开放》]] —— 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《No Figma. No Jira. No docs. How Gusto built a new product line with Claude Code | Eddie Kim (CTO)》]] —— 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《为什么 AI 基础设施必须为「Agent 体验」进化》]] —— 同概念:智能体 (agent)
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《Netflix CPTO on AI and the future of product and tech roles | Elizabeth Stone》]] —— 同概念:智能体 (agent)

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
