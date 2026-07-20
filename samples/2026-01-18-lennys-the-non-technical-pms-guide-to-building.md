---
title: 
podcast: 
date: undefined
source_url: https://www.lennysnewsletter.com/p/the-non-technical-pms-guide-to-building-with-cursor
duration: "75:08"
host: "[[Lenny]]"
cohosts: ["[[Zevi Arnovitz]]"]
companies: ["[[Bolt]]", "[[Lovable]]", "[[Cursor]]", "[[Base44]]", "[[Linear]]"]
concepts: ["[[Claude Code]]", "[[MCP]]", "[[智能体]]", "[[系统提示词]]", "[[代码审查]]", "[[vibe coding]]"]
tags:
  - AI 编程
  - 非技术人员
  - 产品经理工作流
  - 模型性格化
  - 副业构建
---

# undefined

> [!info] 关联
> **主持**:[[Lenny]]
>
> **联合主持**:[[Zevi Arnovitz]]
>
> **涉及公司**:[[Bolt]] · [[Lovable]] · [[Cursor]] · [[Base44]] · [[Linear]]
>
> **概念**:[[Claude Code]] · [[MCP]] · [[智能体]] · [[系统提示词]] · [[代码审查]] · [[vibe coding]]
>
> **来源**:[undefined](https://www.lennysnewsletter.com/p/the-non-technical-pms-guide-to-building-with-cursor)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-01-18-lennys-the-non-technical-pms-guide-to-building.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

非技术 PM 用 AI 一步步独立开发赚钱副业，并总结出从需求到多模型交叉审查的完整工作流。

本期嘉宾 [[Zevi Arnovitz|Zevi Arnovitz]] 是 Meta 的一名产品经理，在此之前他曾在 Wix 担任 PM。令人惊讶的是，他完全没有技术背景——高中学的是音乐，大学学的是心理学。在一年前，他被通过 AI 工具用自然语言构建应用的 YouTube 视频震撼，从此开始了他的「AI 编程」之旅，并在周末独立开发了一款名为 StudyMate（一个让学生上传学习资料并生成交互式测验）的赚钱副业 [06:05 Zevi Arnovitz]。

在这次访谈中，Zevi 现场演示了他如何用 AI 从零构建一个新功能，并完整分享了非技术人员如何驾驭 AI 模型的宝贵心法。

## 非技术者的起步：不要急，用「暴露疗法」适应代码
Zevi 发现，像 [[Bolt|Bolt]] 和 [[Lovable|Lovable]] 这类产品有一个通病：它们的[[系统提示词|系统提示词]]会设定 AI 为「编码[[智能体|智能体]]（接到指令就直接开始写代码的程序）」。这在项目初期很爽，但一旦涉及支付或数据库变更等复杂逻辑，急于写代码的 AI 往往会制造出极其棘手的 Bug [09:16 Zevi Arnovitz]。

为了解决这个问题，他最初在 GPT（ChatGPT）里创建了一个名为「CTO（首席技术官）」的项目，并在系统提示词里告诉它：「我负责定义问题和用户感受，你作为技术负责人全权决定怎么构建。我希望你挑战我，不要做一个讨好人的人。」[10:13 Zevi Arnovitz] 这有效规避了常规 ChatGPT 那种顺着用户糟糕想法「胡言乱语」的毛病 [11:36 Zevi Arnovitz]。

> 【背景】GPT（ChatGPT）中的 Projects（项目）是一个共享文件夹功能，允许用户为特定主题设定专属的「自定义指令」和「知识库」，从而让 AI 保持在特定语境中，避免将用户不同生活领域的上下文（如跑步记录与工作复盘）搞混。

Zevi 给非技术人员的起步建议是「暴露疗法（一种让患者逐步接触恐惧事物的心理疗法）」：代码对非技术人员来说很可怕，所以从界面友好的 GPT 项目起步，然后过渡到 Bolt 或 Lovable，最后再使用 [[Cursor|Cursor]]（一款内置 AI 的代码编辑器）的浅色模式，「直到你打开终端，进入全暗黑模式，完全变成开发者」[12:49 Zevi Arnovitz]。

## 六步 AI 工作流：如何用 /commands 驱动 AI 构建
Zevi 现场展示了他的完整工作流，核心依赖于在 Cursor 中保存的一系列可复用提示词——也就是 /commands（通过输入 `/` 加文件名即可调用的指令）。

1. **创建 Issue（问题）**：使用 `/create issue` 命令 [15:20 Zevi Arnovitz]。Zevi 用语音口述新想法，AI 会快速询问几个关键问题，然后利用 [[MCP|MCP]]（Anthropic 创建的一种技术，赋予 AI 使用外部工具的能力 [22:10 Zevi Arnovitz]）自动连接到项目协同软件 [[Linear|Linear]]，生成一个排版清晰的待办任务。
2. **探索阶段**：调用 `/exploration phase` [16:31 Zevi Arnovitz]。AI 会彻底分析当前的实时代码库，理解数据结构，然后提出范围、数据模型、UX/UI 等极其专业的澄清问题。Zevi 强调，这是「随氛围编码」与构建严肃应用之间的巨大区别 [28:18 Zevi Arnovitz]。
3. **创建计划**：基于 Twitter 上找到的模板，AI 会生成一个 Markdown 文件，包含任务清单、状态追踪器和关键决策 [29:30 Zevi Arnovitz]。Zevi 会根据不同模型的特长，将计划拆分为前端和后端分别执行。
4. **执行计划**：将计划交给特定的模型去写代码。比如他会使用 Composer（Cursor 中一个速度极快的模型 [30:21 Zevi Arnovitz]）。
5. **审查与同行评审（Peer Review）**：这是 Zevi 最引以为傲的环节。非技术人员很难看懂 AI 写的代码，所以他会让 Claude（作为开发主管）先自我审查，然后让 GPT 的 Codex 审查一遍，再让 Composer 审查一遍 [39:37 Zevi Arnovitz]。最后通过 `/peer review` 命令，把其他模型的审查结果丢回给 Claude，并告诉它：「其他团队主管审查了你的代码并发现了问题。因为你的上下文最多，你要么解释为什么他们说得不对，要么自己把代码修好。」[40:15 Zevi Arnovitz]
6. **更新文档与复盘**：这是提高生产力的核心。当 AI 犯错时，他会问 AI「在你的系统提示或工具中，是什么导致了你犯这个错误？」然后据此更新文档，确保同样的错误永远不再发生 [46:31 Zevi Arnovitz]。

## 把模型当人看：发挥各模型的独特性格
Zevi 提出了一个极具洞见的观点：理解 AI 最好的方式是把它们想象成真实存在的人，每个模型都有截然不同的性格特征 [40:40 Zevi Arnovitz]：

- **Claude**：是「完美的 CTO」或理想中的开发主管。非常聪明且善于沟通，有主见，不会盲目顺从你，但又极具协作精神 [41:02 Zevi Arnovitz]。
- **GPT（Codex）**：是公司里最强的程序员，穿着连帽衫坐在黑屋子里。平时完全不沟通，但当你遇到最严重的 Bug 去求他时，他会关上门两小时，然后出来说「我修好了」[41:45 Zevi Arnovitz]。
- **Gemini**：像一位极具艺术天赋的疯狂科学家。如果你坐在他旁边看他工作会觉得很恐怖（比如他可能会在重新设计仪表板时先尝试删除整个仪表板），但最终他总能设计出非常惊艳的东西 [42:03 Zevi Arnovitz]。

因此，Zevi 的策略是利用不同模型的长处来弥补彼此的弱点，让它们互相「争吵」和审查，这对他来说是一个颠覆性的改变。

## AI 会削弱 PM 的技能吗？
对于「使用 AI 会让产品经理技能萎缩、产出垃圾」的担忧，Zevi 强烈反对。他认为，许多人对 PM 角色存在误解，认为 PM 必须是房间里最聪明、永远有正确答案的人。但 PM 的真正职责是「利用一切手段，尽可能快地为用户提供正确的解决方案」[55:16 Zevi Arnovitz]。如果你只是用 AI 生成内容然后盲目发布，那是人为错误。通过有意地引导 AI、为它提供充足的上下文和风格指南，并把输出当成自己的全权责任，AI 反而能让初级 PM 拥有远超当前的思考高度和实践机会 [56:13 Zevi Arnovitz]。

Zevi 还分享了他如何用 AI 准备 Meta 的高难度面试：他在 Claude 中建立了一个吸收了互联网上最佳面试框架的「教练」项目进行模拟面试 [59:14 Zevi Arnovitz]；他甚至用 [[Base44|Base44]] 做了一个网页小游戏，专门训练自己针对产品问题进行用户细分的能力 [59:43 Zevi Arnovitz]。不过他也强调，最终真正带来质变的，还是在 LinkedIn 上找真人进行模拟面试和获取无情反馈 [60:17 Zevi Arnovitz]。

最后，Zevi 总结道：现在是你「直接动手做事」的最好时代 [70:11 Zevi Arnovitz]。头衔和职责的边界正在崩塌，即使你刚走出校门，只要有好奇心并且勤奋，你完全可以凭借 AI 工具独自创立一家公司 [66:52 Zevi Arnovitz]。如果你还没开始，现在就打开一个 GPT 项目，告诉它你的想法，让它带你迈出第一步。

## 金句(中英对照 · 过机器闸门三联校验)

> 在未来几年，我认为每个人都会成为构建者。  
> *In the next coming years, I think everyone's going to become a builder.*  
> —— Zevi Arnovitz · [00:27] ^q1

> 头衔将会崩塌，职责将会崩塌。  
> *Titles are going to collapse and responsibilities are going to collapse.*  
> —— Zevi Arnovitz · [00:29] ^q2

> 你将被一个比你更擅长使用 AI 的人取代。  
> *You'll be replaced by someone who's better at using AI than you.*  
> —— Lenny · [00:56] ^q3

> 这是成为初级人员的最佳时机，尽管很多人说外面已经没有初级职位了。  
> *It's the best time to be a junior, contrary to what a lot of people are saying, how there's no more junior roles out there.*  
> —— Zevi Arnovitz · [00:59] ^q4

> 是的，这是真的，但在历史上还有什么时候你能刚走出学校就独自构建一家初创公司？  
> *Yeah, that's true, but also when else in history could you get out of school and just build a startup on your own?*  
> —— Zevi Arnovitz · [01:04] ^q5

> 我认为这就是仅仅随氛围编码和跟随氛围与真正构建严肃应用程序之间的巨大区别。  
> *I think this is the big difference between just vibe coding and going along with the vibes and really building serious apps.*  
> —— Zevi Arnovitz · [28:18] ^q6

## 相关单集

- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:Claude Code、MCP、智能体 (agent)、Codex
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《2026-05-24-lennys-the-ai-paradox-dan-shipper》]] —— 同公司:Cursor · 同概念:Claude Code、智能体 (agent)、Codex
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《2026-04-19-lennys-why-half-of-product-managers-are-in-trou》]] —— 同公司:Cursor · 同概念:vibe coding、智能体 (agent)
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《2026-05-03-lennys-why-cultivating-agency-matters-more》]] —— 同概念:vibe coding、智能体 (agent)、Claude Code
- [[2026-01-29-lennys-marc-andreessen-the-real-ai-boom|《2026-01-29-lennys-marc-andreessen-the-real-ai-boom》]] —— 同概念:Claude Code、智能体 (agent)
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|《2026-06-28-lennys-openai-codex-lead-on-the-new-shape》]] —— 同概念:Claude Code、智能体 (agent)
- [[2025-12-14-lennys-why-humans-are-ais-biggest-bottleneck|《2025-12-14-lennys-why-humans-are-ais-biggest-bottleneck》]] —— 同公司:Cursor、Lovable · 同概念:智能体 (agent)、Codex
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella：Microsoft Build特别跨界对谈》]] —— 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《神话之后的红队评估 — Zico Kolter与Matt Fredrikson，Gray Swan》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《为什么前沿生态必须开放》]] —— 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《为什么 AI 基础设施必须为「Agent 体验」进化》]] —— 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto》]] —— 同概念:智能体 (agent)
- [[2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for|《2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for》]] —— 同概念:vibe coding
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《2026-07-19-lennys-netflix-cpto-on-ai-and-the-future》]] —— 同概念:智能体 (agent)

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
