---
title: "当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构"
podcast: "Lenny's Podcast"
date: 2026-06-21
source_url: https://www.lennysnewsletter.com/p/building-the-most-ai-pilled-engineering
duration: "98:42"
host: "[[Lenny]]"
cohosts: ["[[Fiona Fung]]"]
companies: ["[[Anthropic]]", "[[Facebook Marketplace]]"]
concepts: ["[[Claude Code]]", "[[Co-Work]]", "[[智能体]]", "[[验证]]", "[[测试驱动开发]]", "[[潜在需求]]", "[[结对编程]]", "[[Visual Studio]]", "[[准时制]]", "[[IC]]", "[[内部试用]]"]
tags:
  - AI 研发范式
  - 角色融合
  - 异步智能体
  - 质量与验证
  - 工程管理
---

# 当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构

> [!info] 关联
> **主持**:[[Lenny]]
>
> **联合主持**:[[Fiona Fung]]
>
> **涉及公司**:[[Anthropic]] · [[Facebook Marketplace]]
>
> **概念**:[[Claude Code]] · [[Co-Work]] · [[智能体]] · [[验证]] · [[测试驱动开发]] · [[潜在需求]] · [[结对编程]] · [[Visual Studio]] · [[准时制]] · [[IC]] · [[内部试用]]
>
> **来源**:[Lenny's Podcast](https://www.lennysnewsletter.com/p/building-the-most-ai-pilled-engineering)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-06-21-lennys-building-the-most-ai-pilled-engineering.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

Fiona Fung分享在代码量暴涨8倍后,如何用异步智能体、验证机制与新管理者制度重塑工程团队。

本集嘉宾是 [[Fiona Fung|Fiona Fung]],她领导 [[Anthropic|Anthropic]] 的 [[Claude Code|Claude Code]] 和 [[Co-Work|Co-Work]] 团队。在加入 Anthropic 之前,她曾在微软工作多年,后转战 Facebook(现 Meta)领导了 [[Facebook Marketplace|Facebook Marketplace]] 团队,并在 Instagram 负责过包含五百多人的庞大工程组织。作为拥有二十五年经验的资深工程师,她亲历了软件工程从光盘时代到云时代的历次变迁。在这集访谈中,Fiona 分享了当生成式 AI 让代码产量激增、编码不再是瓶颈时,软件团队在[[验证|验证]]、协作、角色边界乃至新人培养上面临的全面冲击。全文将沿着四个维度展开:编码生产力暴涨后的验证新命题、团队角色的模糊与新工作流、面对 AI 的两种心态与落差危机,以及团队规模化的文化与制度挑战。

## 当吞吐量不再是瓶颈:验证成为新战场
Fiona 回忆了软件工程历史上的几次大转折:从早期在 IBM 用 Vim 和终端做调试,到加入微软后第一次用上带调试器的 IDE(集成开发环境,即集成了代码编写、运行和调试功能的软件);从软件必须刻成光盘上架的「硬截止日期」时代,到可以随时在线发版的云时代。每一次工具演进,都在重新分配工程师的时间。而眼下的 AI 变革尤为剧烈:她指出,过去工程时间是最宝贵的资源,但现在编码本身已经不再是瓶颈。最近一条推文展示的数据显示,Anthropic 的工程师平均每个季度的代码量达到了 2025 年时的八倍 [03:28 [[Lenny|Lenny]]]。随之而来的核心变化是:不仅工程师在提交代码,设计师、产品经理(Co-Work 团队的所有人)都在提交代码,而且吞吐量极高。这种量级的变化,把团队的重心从「写代码」推向了「验证」[08:59 Fiona Fung]。

## 用 Claude 当管理耳目,用「坏与悲」抓质量
既然编码不再是瓶颈,工具变了,团队的工作方式怎么跟上?Fiona 介绍了几项她作为管理者的新做法。她把一个 Claude Code 远程会话注册到了团队的所有代码仓库中,这个实例还能访问所有 Slack 频道和指标数据。这样,她每个月可以用共享屏幕的方式,带着团队用 Claude Code 一起复盘:上个月的重点是什么?发布了哪些产品?反馈如何?有没有引发什么 Bug?她强调,通过 Claude 的全局视角,团队可以更容易地从大量数据和事件中提炼出下个季度的投资主题 [10:10 Fiona Fung]。

顺着「如何在高产出下维持质量」这个问题,Fiona 提到了两项更具体的做法。第一是利用自动化测试框架进行代码审查。她指出,Claude 在你给它提供一个「好代码长什么样」的框架时非常出色。团队的做法是把规格说明签入代码仓库并保持与代码同步更新,让 Claude 验证提交的代码是否符合预期。她将这视为[[测试驱动开发|测试驱动开发]](即先写测试用例再写功能代码,TDD)的演进 [15:25 Fiona Fung]。第二是她在团队中推行的「坏与悲」体验分类法。「坏」指的是非常严重的、不可恢复的错误(比如 CLI 崩溃导致用户丢失工作);「悲」则是指那些可恢复但让人不舒服的痛点(比如界面闪烁)。她给每个团队高度自主权,让他们根据各自的服务定义自己的「坏」与「悲」,这样就能在性能、可靠性等原始指标之外,提供一个衡量用户体验的高层框架 [45:25 Fiona Fung]。更有趣的是,团队甚至做了一个追踪脏话的仪表盘,用来监测用户在反馈渠道里的挫败感 [47:50 Fiona Fung]。

## 角色大融合与异步智能体工作流
说完了怎么管质量,接下来是人的问题。在 AI 工具的加持下,团队的角色边界正在迅速模糊。Fiona 现在在招聘时最看重两类人:一类是有产品直觉的「创意构建者」,一类是能处理核心难题的「深层系统专家」[17:09 Lenny]。产品经理也不再受限于工程资源的带宽,遇到想做的功能可以直接卷起袖子自己动手;而非移动端出身的工程师,也能在 Claude 的辅助下顺利给功能加上安卓端的适配 [18:54 Fiona Fung]。代码相关职位的界限都在模糊,工程师变得越来越有产品思维,而所有人都在变成构建者 [62:21 Fiona Fung]。

工作方式也在向更高的抽象层演进。Fiona 提到,团队正转向更多的异步工作风格。过去她需要同步地手写各种提示词(Prompt,即给 AI 模型下指令的文本),现在她可以设定一个例行程序,让它在每天早上特定时间自动运行。这个程序不仅能汇总反馈,甚至能代表她启动其他的[[智能体|智能体]]去处理潜在的 Bug 并生成 PR(拉取请求,即提交代码修改的机制)供她醒来后审查 [36:24 Fiona Fung]。这种模式虽然极大地提升了产能,但也带来了新的烦恼:上下文切换的认知负荷太重了。当你同时开着二十个智能体时,要追踪它们各自在干什么、随时切换语境去审查,成了一个尚未解决的难题 [71:13 Fiona Fung]。

## 面对技术狂飙:成长心态与弥合鸿沟
工具和人都在变,不同人的处境也因此拉开差距。当主持人问及为什么有的人在 AI 时代如鱼得水、有的人却充满挫败感时,Fiona 认为关键在于成长型思维。她坦言,放弃那些过去让你成功的旧习惯会很可怕,但对于任何让你感到恐惧的事情,最好的应对方式就是主动拥抱它,并问自己「什么是我的控制范围内的事?」[21:11 Fiona Fung]。

这种主动出击的心态,也延伸到了她弥合 AI 鸿沟的努力中。Fiona 非常关心小企业主群体,因为她曾亲眼看到自己的奶奶移民加拿大时,因为语言不通而陷入孤立,最终在一家小纱线店里找到了社区归属感。她发现 Co-Work 可以极其有效地帮小企业主处理他们最讨厌的开票和报销工作。更有趣的是,一位开餐厅的朋友把 Co-Work 接入了自己杂乱的文件夹,让它帮忙找菜单,甚至做竞品分析。基于这些反馈,团队推出了打包小企业插件的 Co-Work 版本 [27:18 Fiona Fung]。她的呼吁非常具体:如果你身边有对 AI 感到恐惧或无从下手的朋友或社区商户,请主动向他们展示 AI 是如何改善了你的生活,因为知识就是力量,如果不主动分享,这道鸿沟只会越来越大 [30:04 Fiona Fung]。

## 守住团队文化与未来的未知数
角色模糊了,节奏变快了,这正是下一个话题:团队怎么管?Fiona 分享了几项独特的管理实践。首先是要求所有新加入的管理者先以个人贡献者的身份工作一段时间,亲自动手写代码、用产品,然后再承担起带人的责任。她自己哪怕在管理五百人的组织时,也坚持亲自使用产品(即[[内部试用|内部试用]])。她最近还用 Claude 重新找回了写生产级代码的自信 [49:55 Fiona Fung]。

其次,随着大家都埋头和各自的智能体协作,团队里出现了一种「孤独感」。为此,她发起了[[结对编程|结对编程]]午餐和黑客松,让大家能在并肩工作时观察到彼此使用工具的奇招 [56:38 Fiona Fung]。在规划方面,她彻底抛弃了半年期的路线图,改为「[[准时制|准时制]]」的月度规划,每周只做快速对齐 [84:37 Fiona Fung]。被问及最让她夜不能寐的难题时,她坦言不是具体的产品挑战,而是如何在飞速扩张中维持那种开放、互助的团队文化 [78:04 Fiona Fung]。

> 【背景】TDD(Test-Driven Development)即测试驱动开发,是一种先编写自动化测试用例,再编写能通过测试的功能代码的软件开发方法论。

> 【背景】Co-Work 是 Anthropic 推出的面向日常知识工作的智能体产品,能够处理文件、填报表格等任务;Claude Code 则专注于编程辅助。

## 本集带走
1. **编码已非瓶颈,验证才是重心**:当全员都在用 AI 大幅提速时,质量保证的重心应从人工审查转向提供自动化测试框架和体验监控(如「坏与悲」分类法),让模型自行验证。
2. **角色边界正在消融**:在 AI 辅助下,产品经理可以直接写代码,工程师能跨界做移动端适配。未来的关键人才是兼具产品直觉的「创意构建者」与掌握核心难题的「深层系统专家」。
3. **管理动作必须升级**:管理者要善用智能体获取全局洞察并转向异步工作流;同时,要在团队扩张和技术狂飙中,通过坚持使用产品、缩短规划周期以及创造人际连接来守住团队文化。

## 金句(中英对照 · 过机器闸门三联校验)

> 对于任何你知道存在恐惧的事情,我的建议是拥抱它并问自己,好吧,有什么我能做的吗,什么在我的控制范围内。  
> *for anything that you know that there is a fear my advice is kind of lean in and ask okay is there some what can I do about it what is within my control*  
> —— Fiona Fung · [21:28] ^q1

> 客户会以你没有意图的方式使用你的产品,无论好坏。  
> *Customers will use your product in ways that you did not intend for good or for bad.*  
> —— Fiona Fung · [34:28] ^q2

> 不要首先把动静误认为是进步。  
> *don't first take motion for progress*  
> —— Fiona Fung · [41:29] ^q3

> 我开始引入这个概念,让我们区分什么是坏的与什么是悲的,坏是非常糟糕的不可恢复的错误,悲是某种痛点但可恢复。  
> *I started this hey let's have a concept of what's bad versus what's sad and bad is like a very bad irrecoverable error and sad is something that's kind of like a pain point recoverable*  
> —— Fiona Fung · [45:26] ^q4

> 过了一段时间,我们感觉这可能开始变成一种孤独的体验,因为我们都开始如此频繁地与我们的智能体一起工作了。  
> *after a while we felt it could start being a lonely experience because we all started just working with our agents so much.*  
> —— Fiona Fung · [56:38] ^q5

## 相关单集

- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同公司:Anthropic · 同概念:Claude Code、IC
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同公司:Anthropic · 同概念:Claude Code、智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同概念:Claude Code、智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的未来工作预测：别等 AI 末日，用 Codex 重塑一切》]] —— 同概念:Claude Code、智能体 (agent)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《iPod之父Tony Fadell：反直觉的产品课》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《Gusto CTO 的极简实验:5 人 10 周凭感觉编程造出 AI 产品》]] —— 同概念:Claude Code、智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:Claude Code、智能体 (agent)
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《对话 Notion 产品负责人 Max:AI 时代的产品方法论与人的主观能动性》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella 谈 AI 时代平台逻辑:私有评估是最大 IP》]] —— 同公司:Microsoft · 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《从避战大模型到押注智能体：Modal 的推理基础设施进化史》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同概念:智能体 (agent)
- [[2025-12-07-lennys-surge-ai-edwin-chen|《Surge AI 创始人 Edwin Chen:我们教模型追逐多巴胺,而非真理》]] —— 同公司:Anthropic
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《1.2 个人 + 20 个 AI 智能体：SaaStr 的极简销售实验》]] —— 同概念:智能体 (agent)
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《1500 亿美元的隐形 AI 公司创始人：恐惧源于无知，最好的工作是独自安静地完成》]] —— 同概念:智能体 (agent)
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《Anthropic 增长负责人：用 Claude 自动化增长实验，把 PM 的活交给工程师》]] —— 同公司:Anthropic
- [[2026-05-10-lennys-how-to-build-a-company-that-withstands|《《精益创业》作者 Eric Ries 新作导读：好公司为什么会「变坏」》]] —— 同公司:Anthropic
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人 Mark Pincus：想做出伟大产品，先学会「合法地抄袭」》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《Databricks 的智能体平台与数据库「圣杯」：Reynold Xin 与 Matei Zaharia 的技术蓝图》]] —— 同概念:智能体 (agent)
- [[2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for|《Adam Mosseri：AI 时代的团队重组与产品品味》]] —— 同公司:Anthropic
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被迫转行，一半人迎来复兴》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2025-11-20-lennys-slack-founder-stewart-butterfield|《把自家产品骂成「一坨狗屎」：Stewart Butterfield 的产品哲学》]] —— 同公司:Slack
- [[2026-03-22-lennys-the-art-of-influence-jessica-fain|《别只想推销：产品负责人如何真正影响高管决策》]] —— 同公司:Slack
- [[2026-07-12-lennys-how-tech-workers-actually-feel-about|《科技圈情绪调查：一半人狂喜，一半人煎熬》]] —— 同公司:Anthropic

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
