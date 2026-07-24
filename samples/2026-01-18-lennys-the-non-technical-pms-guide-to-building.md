---
title: 非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」
podcast: "Lenny's Podcast"
date: 2026-01-18
source_url: https://www.lennysnewsletter.com/p/the-non-technical-pms-guide-to-building-with-cursor
duration: "75:08"
type: episode
cover: "#6366f1"
description: 完全不懂代码的 PM 分享如何用 AI 搭建赚钱产品并保持代码质量。
host: "[[Lenny]]"
cohosts: ["[[Zevi Arnovitz]]"]
companies: ["[[Cursor]]", "[[Bolt]]", "[[Lovable]]", "[[Linear]]"]
concepts: ["[[Claude Code]]", "[[Composer]]", "[[Codex]]", "[[智能体]]", "[[斜杠命令]]", "[[同行评审]]"]
category: AI 编程
tags:
  - AI 编程
  - 职业与个人成长
---

# 非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」

> [!info] 关联
> **主持**:[[Lenny]]
>
> **联合主持**:[[Zevi Arnovitz]]
>
> **涉及公司**:[[Cursor]] · [[Bolt]] · [[Lovable]] · [[Linear]]
>
> **概念**:[[Claude Code]] · [[Composer]] · [[Codex]] · [[智能体]] · [[斜杠命令]] · [[同行评审]]
>
> **来源**:[Lenny's Podcast](https://www.lennysnewsletter.com/p/the-non-technical-pms-guide-to-building-with-cursor)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-01-18-lennys-the-non-technical-pms-guide-to-building.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

完全不懂代码的 PM 分享如何用 AI 搭建赚钱产品并保持代码质量。

今天的嘉宾是 [[Zevi Arnovitz|Zevi Arnovitz]]。他现任 Meta 的产品经理（PM），此前在 Wix 做 PM。他没有技术背景，高中学的是音乐，但靠着一套自己摸索出的 AI 工具工作流，完全独立地构建出了能赚钱的真实产品。本期对话的核心问题非常接地气：一个完全不懂代码的人，到底该怎么用 AI 真正构建出严肃的产品？接下来的脉络分为四步：首先是他如何用 AI 工具搭出一个工作流框架；其次是他如何让不同的 AI 模型扮演团队成员、互相对抗来审查代码；再是如何把 AI 当作导师进行高频学习；最后是他对非技术人员在这个时代该如何自处的核心判断。

工具变了，人怎么用？这正是接下来的第一个话题。

## 工具进阶：从「聊天机器人」到全控代码库

要用 AI 做严肃开发，第一步是克服对代码本身的恐惧。Zevi 回忆了自己的起点：当 Sonnet 3.5 这类模型出来时，他用 [[Bolt|Bolt]] 和 [[Lovable|Lovable]]（两款降低开发门槛的 AI 应用构建工具）立刻开始动手，感觉就像获得了超能力 [06:54 Zevi Arnovitz]。但他很快发现了一个痛点：这些工具有非常强烈的「自以为是」倾向 [32:05 Zevi Arnovitz]。为了让非技术用户省心，Lovable、Bolt、Replit 以及 Base44 等工具会在中间层替用户做大量决策（比如自动帮你接入默认的数据库或登录系统）。好处是简单省事，代价是你失去了控制权 [34:10 Zevi Arnovitz]。一旦要做接入支付或改写复杂数据结构等严肃功能，这种黑箱模式就会带来大量棘手的 Bug。

因此，当他的知识积累到一定程度后，便「毕业」去了 [[Cursor|Cursor]]（一款深受开发者欢迎的 AI 代码编辑器），并在其中运行 [[Claude Code|Claude Code]]（Anthropic 公司推出的具备执行能力的 AI 编程[[智能体|智能体]]）。两者的根本区别在于控制权：Cursor 配合 Claude Code，是把 AI 直接塞进你的代码系统里，赋予它完整工具去执行任务，但随之而来的是你需要自己做大量的架构决策 [32:54 Zevi Arnovitz]。他强调，如果你和他一样非技术背景，代码看起来很可怕，这就像一种「暴露疗法」（通过循序渐进的接触来克服恐惧）——他建议从简单的 ChatGPT 项目开始，过渡到 Bolt，再到 Cursor 的浅色模式，最后慢慢进入全暗色的开发者模式 [12:49 Zevi Arnovitz]。

> 【背景】Anthropic 是知名 AI 公司，也是大语言模型 Claude 的开发商。Sonnet 3.5 是其推出的一款在编程能力上表现优异的模型版本。

熟悉了工具，接下来看他在这套工具里搭出了怎样的一套「标准开发流」。

## 搭工作流：把 AI 当成各有脾气的「同事」

Zevi 在 Cursor 里构建了一套基于「[[斜杠命令|斜杠命令]]」（指在代码库里保存的可重复使用的提示词文件，可通过输入 `/` 加文件名调用）的完整产品开发流。这套流程的精妙之处在于：他把 AI 工具完全拟人化了，当成了自己公司的各个职能同事。

整个流程分为几步：第一步是「创建问题」，用语音把脑海中的想法快速丢给 AI，由 AI 去读取代码库并自动在 [[Linear|Linear]]（一款项目跟踪管理工具）里生成一个标准工单 [15:10 Zevi Arnovitz]；第二步是「探索阶段」，他会让 AI 充当开发主管（Dev Lead）的角色，理解当前代码结构，并向他提出关于数据模型、用户体验等一系列尖锐的澄清问题 [24:12 Zevi Arnovitz]；第三步是「创建计划」，生成一份详细的执行清单文件；第四步则是使用 [[Composer|Composer]]（Cursor 中速度极快的模型）去执行计划写代码 [30:27 Zevi Arnovitz]。

但写代码其实是最简单的，真正的挑战在后面。非技术人用 AI 写代码，最大的恐惧就是看不懂、查不出 Bug。为了解决这个核心痛点，Zevi 发明了一个极其聪明的「[[同行评审|同行评审]]」机制。既然自己不懂代码，那就让别的 AI 来查 [43:07 Zevi Arnovitz]。

他会在本地测试后，先让原本负责写代码的 Claude 进行自我审查（/review）。接着，他会打开 [[Codex|Codex]] 5.1 Max 和 Cursor，分别让这两个来自不同公司的模型去审查同一段代码。最后，他会把这两个模型挑出的毛病复制下来，统一丢回给作为「开发主管」的 Claude，并告诉它：「你是这个项目的主管，其他团队的主管看了你的代码并发现了这些问题。基于你对项目的全局了解，你要么反驳他们，要么自己动手修掉」[40:21 Zevi Arnovitz]。

之所以要让多个模型互相「打架」，是因为 Zevi 发现每个模型都有极其鲜明的人格特征与长短板，他能利用这些特征来互补 [41:08 Zevi Arnovitz]。例如，Claude 像一位完美的 CTO：极其善于沟通、聪明且有主见，愿意和你深度协作探讨；Codex 则像公司里最好的「独狼」程序员：穿着连帽衫坐在小黑屋里，沟通极差，但遇到最恶心的 Bug 时，关上门两小时就能完美修好；而 Gemini 则像一位疯狂的科学家：极具艺术和设计天赋，UI 做得很美，但看它干活的过程非常吓人（甚至会说出「我要先删掉整个仪表盘」这种让人冒冷汗的话）。通过让它们互为对手段子挑错，非技术 PM 也能把控极高的代码质量。

代码质量的把关有了着落，那这些工具对个人能力的长期影响是什么？这引出了他对 AI 时代最核心的判断。

## 用 AI 做教练：这不是「外包思考」，是高频练习

很多人有一种恐惧：过度依赖 AI 会让 PM 的专业技能萎缩，最终产出大量看似精美实则无用的「半成品垃圾」[54:02 Zevi Arnovitz]。但 Zevi 对此有截然不同的看法。他认为，PM 的职责从来就不是「做房间里最聪明、永远有正确答案的人」，而是利用一切手段，以最快速度为用户交付正确的解决方案。如果你只是用 AI 自动生成东西然后直接扔出去，那确实是制造垃圾，但如果你承担起对最终产出的完全责任，AI 就是你最顶级的导师 [55:49 Zevi Arnovitz]。

他把这套「让 AI 教自己」的逻辑运用到了极致，甚至靠它拿下了 Meta 的 Offer。为了准备竞争极其激烈的 Meta 面试，他直接在 Claude 中建了一个「教练」项目，将网上搜集到的最优质信息喂给它，让 AI 不断给他出题做模拟面试 [59:18 Zevi Arnovitz]。他还会录下自己面试的音频，专门让 AI 给他挑刺，补足真实世界里极度缺失的反馈闭环 [61:15 Zevi Arnovitz]。他还鼓励大家在遇到不懂的概念时，直接用自己写的 `/learning opportunity` 命令，要求 AI 用「80/20 法则」给一个懂一点架构的中级工程师讲明白，把每一次开发都当成深度的技术学习课 [28:44 Zevi Arnovitz]。

他强烈建议年轻 PM 在业余做点自己的副业项目，因为 AI 极大地拉高了你能操作的盘子。在公司里你可能没机会思考整体营销策略，但在自己的项目里，你可以随意让 AI 配合你进行全盘的高阶演练，这能为你带来极其宝贵的实战经验 [56:22 Zevi Arnovitz]。

听完他怎么把 AI 当导师，最后是他给这个时代年轻从业者的定心丸。

## 本集带走

1. **非技术人也能把控代码质量**：不要只用一个 AI 工具写代码。利用不同大模型各有长短的「性格特征」，让多个模型充当不同的团队主管，让它们互相审查代码、挑毛病甚至争吵，非技术 PM 也能像高管一样做最终的质量裁决。
2. **不断复盘更新工具链**：每次 AI 犯了错，不要只是让它重试。像做产品复盘一样，要求它反思是什么系统提示词或上下文不足导致了错误，然后把规避该错误的规则写进工具文档里，让你的 AI 同事随着时间推移越来越聪明。
3. **现在是做初级人员的最好时机**：不要被「初级岗位即将消失」的焦虑裹挟。在这个历史节点，只要你保持好奇心和求知欲，利用 AI 做高频练习和模拟，哪怕刚出校园，你也能以前所未有的速度独自跑通一家完整的初创公司。

## 金句(中英对照 · 过机器闸门三联校验)

> 如果人们离开时觉得你多么了不起，你就失败了。如果人们离开后打开他们的电脑并开始构建，你就成功了。  
> *If people walk away thinking how amazing you are, you failed. And if people walk away and open their computer and start building, you've succeeded.*  
> —— Zevi Arnovitz · [07:17] ^q1

> 是的，我认为这就是单纯的 vibe coding 和顺其自然与真正构建严肃应用之间的巨大区别。  
> *Yeah, and I think this is the big difference between just vibe coding and going along with the vibes and really building serious apps.*  
> —— Zevi Arnovitz · [28:18] ^q2

> 我正在构建，我正在把 StudyMate 从希伯来语完全本地化到英语，我在两天内完成了，这可能需要一个开发团队几周的时间。  
> *I was building, I was fully localizing StudyMate from Hebrew to English, which I did in two days, which would probably take a dev team weeks.*  
> —— Zevi Arnovitz · [35:17] ^q3

> 回到你的提示词，去理解哪些不够好，对其进行迭代，然后看看 AI 的响应如何变好，我认为这可能是最重要的事情之一，也是区分那些还可以使用 AI 的人和真正知道如何使用 AI 的人的因素之一。  
> *Going back to your prompts, understanding what was not good enough, iterating on them and then seeing how AI's responses get better, I think that's probably one of the most important things and one of the things that divides between people who are okay with using AI and the people who actually know how to use it.*  
> —— Zevi Arnovitz · [47:20] ^q4

> 取代你的是那些比你更擅长使用 AI 的人。  
> *It's you'll be replaced by someone who's better at using AI than you.*  
> —— Lenny · [62:43] ^q5

> 是的，我认为头衔将会崩塌，责任将会崩塌，每个人都将只是在构建。  
> *Yeah, I think titles are going to collapse and responsibilities are going to collapse and everyone's just going to be building.*  
> —— Zevi Arnovitz · [52:45] ^q6

> 我认为许多 PM 有一个误解，认为工作总是拥有正确的答案并成为房间里最聪明的人。  
> *I think that there's a misconception with a lot of PMs that the job is always having the right answers and being the smartest person in the room.*  
> —— Zevi Arnovitz · [55:08] ^q7

## 相关单集

- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的未来工作预测：别等 AI 末日，用 Codex 重塑一切》]] —— 同公司:Cursor · 同概念:Claude Code、Codex、智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:Claude Code、Codex、智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同公司:Anthropic · 同概念:Claude Code、智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同概念:Claude Code、智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《Gusto CTO 的极简实验:5 人 10 周凭感觉编程造出 AI 产品》]] —— 同概念:Claude Code、智能体 (agent)
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《1.2 个人 + 20 个 AI 智能体：SaaStr 的极简销售实验》]] —— 同公司:Replit · 同概念:智能体 (agent)
- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同公司:Anthropic · 同概念:Claude Code
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《1500 亿美元的隐形 AI 公司创始人：恐惧源于无知，最好的工作是独自安静地完成》]] —— 同公司:Lovable · 同概念:智能体 (agent)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《iPod之父Tony Fadell：反直觉的产品课》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏》]] —— 同概念:智能体 (agent)、Codex
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同概念:智能体 (agent)
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《对话 Notion 产品负责人 Max:AI 时代的产品方法论与人的主观能动性》]] —— 同概念:智能体 (agent)
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella 谈 AI 时代平台逻辑:私有评估是最大 IP》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人 Mark Pincus：想做出伟大产品，先学会「合法地抄袭」》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《Databricks 的智能体平台与数据库「圣杯」：Reynold Xin 与 Matei Zaharia 的技术蓝图》]] —— 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《从避战大模型到押注智能体：Modal 的推理基础设施进化史》]] —— 同概念:智能体 (agent)
- [[2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge|《Sriram Krishnan：Kimi K3 将改写 AI 行业版图》]] —— 同概念:智能体 (agent)
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《Anthropic 增长负责人：用 Claude 自动化增长实验，把 PM 的活交给工程师》]] —— 同公司:Anthropic、Cursor、Lovable
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被迫转行，一半人迎来复兴》]] —— 同概念:Codex、智能体 (agent)
- [[2025-12-07-lennys-surge-ai-edwin-chen|《Surge AI 创始人 Edwin Chen:我们教模型追逐多巴胺,而非真理》]] —— 同公司:Anthropic
- [[2026-05-10-lennys-how-to-build-a-company-that-withstands|《《精益创业》作者 Eric Ries 新作导读：好公司为什么会「变坏」》]] —— 同公司:Anthropic
- [[2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for|《Adam Mosseri：AI 时代的团队重组与产品品味》]] —— 同公司:Anthropic

*本集关键词:非技术人员编程 · AI 编程工作流 · 模型交叉审查 · 产品经理成长 · AI 学习与面试*

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
