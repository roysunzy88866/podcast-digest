---
title: 
podcast: 
date: undefined
source_url: https://www.lennysnewsletter.com/p/why-humans-are-ais-biggest-bottleneck
duration: "85:09"
host: "[[Lenny]]"
cohosts: ["[[Alexander Embiricos]]"]
companies: ["[[OpenAI]]", "[[Codex]]", "[[Sora]]", "[[Atlas]]", "[[ChatGPT]]"]
concepts: ["[[智能体]]", "[[编码智能体]]", "[[沙箱]]", "[[上下文压缩]]", "[[外壳层]]", "[[压缩人才栈]]", "[[主动性]]", "[[AGI]]", "[[超级助手]]"]
tags:
  - AI 编码工具
  - OpenAI 内部运作
  - 软件工程智能体
  - 智能体主动性
  - AI 浏览器
---

# undefined

> [!info] 关联
> **主持**:[[Lenny]]
>
> **联合主持**:[[Alexander Embiricos]]
>
> **涉及公司**:[[OpenAI]] · [[Codex]] · [[Sora]] · [[Atlas]] · [[ChatGPT]]
>
> **概念**:[[智能体]] · [[编码智能体]] · [[沙箱]] · [[上下文压缩]] · [[外壳层]] · [[压缩人才栈]] · [[主动性]] · [[AGI]] · [[超级助手]]
>
> **来源**:[undefined](https://www.lennysnewsletter.com/p/why-humans-are-ais-biggest-bottleneck)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2025-12-14-lennys-why-humans-are-ais-biggest-bottleneck.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

OpenAI Codex 负责人分享AI编码智能体的产品哲学：从极简的本地交互走向主动的超级工程队友，以及它如何加速Sora与Atlas的诞生。

## OpenAI 的速度与自下而上
[[Alexander Embiricos|Alexander Embiricos]] 在加入 [[OpenAI|OpenAI]] 之前曾创办自己的初创公司并在 Dropbox 担任产品经理。他坦言，OpenAI 的运作速度和雄心远超他过去所有的想象，彻底重塑了他对「快」和「野心」的认知 [06:20 Alexander Embiricos]。

这种速度部分得益于组织架构上「真正、真正的自下而上」[08:45 Alexander Embiricos]。在传统的软件公司里，产品经理往往需要先确定方向再往前推进；但在 AI 时代，没人确切知道几个月后模型会具备什么能力，也没法预知用户会怎么使用它。因此，团队更像是在用一种「粗略瞄准、迅速开火、凭经验验证」的方式做事 [09:39 Alexander Embiricos]。不过他也强调，这种极度授权的模式是有前提的：OpenAI 拥有极高的人才密度，不是任何公司都能简单照搬这种管理模式 [11:05 Alexander Embiricos]。

## Codex 是什么？
[[Codex|Codex]] 是 OpenAI 的[[编码[[智能体|智能体]]|编码智能体]]（coding agent，一种能自主理解意图、编写并执行代码来完成复杂任务的 AI 程序），目前主要以 VS code（一种代码编辑器）扩展或终端工具的形式存在，贯穿编写代码、运行测试和验证的整个生命周期 [11:51 Alexander Embiricos]。最近，他们还发布了新模型 `GPT-5.1-Codex-Max` [21:44 Alexander Embiricos]。

但 Codex 的终极目标不仅是写代码，而是成为一个**软件工程队友**。目前的 Codex 就像一个极其聪明、但拒绝看 Slack 也不看 Datadog（一款监控工具）的实习生——你必须时刻与它结对编程 [12:46 Alexander Embiricos]。而他们未来的核心目标是实现**[[主动性|主动性]]**：让智能体无需你反复下达指令，就能主动参与项目规划、分析日志、排期甚至修复线上问题 [14:02 Alexander Embiricos]。

> 【背景】Codex 这个名字其实最早被 OpenAI 用于驱动 GitHub Copilot 的底层模型，Alexander 所在的团队近期决定重新启用这个老品牌，来命名现在这套更庞大的代码执行智能体。

## 20 倍增长背后的产品逻辑
自 8 月 `GPT-5` 发布以来，Codex 实现了超过 20 倍的用户增长，每周处理数万亿个 token，目前是 OpenAI API 中调用量最高的编码模型 [15:49 Alexander Embiricos]。

增长的关键在于一次重大的产品形态调整。最初，团队推出了 Codex Cloud，这是一个生活在云端、拥有独立计算机的智能体。虽然它适合处理大规模并行任务，但缺点是配置环境极其繁琐，用户上手门槛极高。用 Alexander 的话说，这就像你招了一个新队友，却只允许你们之间进行纯异步沟通，一开始这很难磨合 [18:20 Alexander Embiricos]。

为了降低门槛，团队转而开发了更符合直觉的本地化工具。如今，绝大多数用户通过 IDE 插件或命令行直接在本地运行 Codex。它在本地的一个**[[沙箱|沙箱]]**（sandbox，一种安全隔离的代码运行环境）内工作，既能直接访问你电脑上的各种依赖，又保证了系统的安全。智能体如果遇到沙箱内无法执行的命令，还会直接向用户求助 [18:54 Alexander Embiricos]。

有趣的是，OpenAI 内部的重度使用（行业内俗称 dogfood）差点误导了团队。因为 OpenAI 研究员们整天都在训练复杂的推理模型，非常习惯于「抛出大规模并行任务然后去喝咖啡」的异步工作流；但外部普通市场的用户更需要轻量、即时的交互式反馈 [20:31 Alexander Embiricos]。

## 核心竞争力：贯通「模型、API 与外壳」
与市面上其他编码工具不同，Codex 团队采用了产品与研究员高度整合的模式，同时在三个层面进行迭代：
1. **模型层**：让推理模型在特定任务上极其出色。
2. **API 层**：设计端点以支持模型的特殊行为。
3. **[[外壳层|外壳层]]**（harness，指包裹在模型外部、赋予其工具和执行环境的外壳程序）：控制智能体如何与计算机交互。

Alexander 举了一个**[[上下文压缩|上下文压缩]]**（compaction）的例子。现在有用户会让 Codex 持续运行长达 24 小时，这必然超出模型的上下文窗口。为了解决长程记忆丢失的问题，必须让模型层、API 层和外壳层同时对「压缩历史上下文」这一动作达成理解与配合 [23:18 Alexander Embiricos]。

在交互方式上，Codex 独树一帜地选择只让智能体使用 Shell（命令行）来操作计算机，而非调用定制化的 API。Alexander 认为，事实证明，**让模型使用计算机的最佳方式就是让它编写代码** [28:50 Alexander Embiricos]。这种设计不仅能快速推进，而且代码本身是可组合、可导入的，这为未来扩展到财务分析、数据处理等非编程领域埋下了伏笔 [30:10 Alexander Embiricos]。

## 「Vibe Coding」与压缩人才栈
Codex 在内部展现了惊人的生产力爆发。除了工程师，PM 和设计师也开始大量使用它。Alexander 引用了「[[压缩人才栈|压缩人才栈]]」的概念：因为 AI 补齐了技能短板，角色间的沟通成本被大幅削减，PM 可以直接做数据分析，设计师可以直接开发原型 [44:41 Alexander Embiricos]。

设计团队甚至引入了所谓的 **vibe coding**（凭直觉或自然语言编写代码）：设计师想让 Codex 帮忙生成一个动画，由于从零写动画太麻烦，他们干脆让 Codex 先凭感觉写了一个简易的动画编辑器，然后在编辑器里做出满意的动画，最后再把代码统一提交进代码库 [46:02 Alexander Embiricos]。

> 【背景】这种 vibe coding 的理念也催生了 Alexander 脑洞大开的「Tinder 式开发」设想：未来，你或许只需躺在沙发上滑动手机屏幕，AI 智能体会主动汇报「我侦测到了一个线上 bug 并写了修复方案」，你觉得满意就右滑同意，不满意就左滑拒绝，全程以现代人最低的认知成本与 AI 协作 [38:22 Alexander Embiricos]。

这种极速开发最著名的案例是 [[Sora|Sora]] 的 Android 应用。工程师让 Codex 对照着已有的 iOS 代码，自动生成移植计划并编写 Android 版。仅仅 18 天后，应用就推向了内部员工测试；10 天后正式面向公众发布。这个由极少数工程师打造的应用，一举拿下了应用商店排行榜第一名 [47:35 Alexander Embiricos]。此外，OpenAI 的浏览器产品 [[Atlas|Atlas]] 的开发时间，也从原本的「两三个工程师两三周」骤降到了「一个工程师一周」[51:23 Alexander Embiricos]。

## 未来的形态：上下文助手与浏览器
除了在终端里写代码，Codex 也在向 Slack 等协作工具延伸。比如在 OpenAI 内部，员工只需在 Slack 里 @Codex 问「为什么这个指标下降了？」或「这个 bug 的原因是什么？」，它就能在对话里直接给出答案 [41:59 Alexander Embiricos]。

这指向了 OpenAI 对 Agent 未来的终极思考：AI 必须拥有上下文感知能力。这也是为什么 OpenAI 会去开发 Atlas 浏览器。比起通过截图或破解桌面操作系统的无障碍 API 来理解用户在干什么，直接掌握浏览器的渲染引擎，能让 AI 拥有第一手的上下文 [59:54 Alexander Embiricos]。当你看着数据看板皱眉时，浏览器里的 Agent 能根据你正在看的特定指标，精准地为你提供修复建议，而不是像过去那样疯狂弹窗打扰你 [61:20 Alexander Embiricos]。

## 想要尝试 Codex？
Alexander 给新手的建议非常反直觉：**把最困难的任务交给它**。他认为 Codex 被训练成应对真实企业级庞大代码库的专业工具，不要只拿写个简单脚本这种琐事去测试它。你可以直接把它丢进一个极其棘手、连你自己都不知道起因的 Bug 里，或者让它先通读整个代码库并和你一起制定计划（例如写一个 `plan.md`），然后再让它逐步执行 [63:11 Alexander Embiricos]。

## 我们离 AGI 还有多远？
作为 OpenAI 的内部人士，Alexander 给出了一个相当独特的视角。他认为，目前向 [[AGI|AGI]]（通用人工智能）狂奔的过程中，一个被严重低估的瓶颈，其实是**人类的打字速度和多任务处理速度** [70:56 Alexander Embiricos]。

如果每产出一段 AI 代码或建议，都需要人类去逐行审阅和确认，这种「人在回路」的模式必然会卡住整条生产线。Alexander 预测，当我们在明年（或不久的将来）成功重建系统，让 Agent 能够自我验证、默认提供有效的帮助时，早期采用者的生产力将迎来真正的「曲棍球棒式」爆发增长，而这正是我们触达 AGI 级别的先决条件 [72:22 Alexander Embiricos]。

## 金句(中英对照 · 过机器闸门三联校验)

> 如果你想想今天的 Codex 是什么，它有点像一个真正聪明的实习生，拒绝阅读 Slack 并且不检查 Datadog 或 Century，除非你要求它。  
> *if you think of what Codex is today, it's a bit like this really smart intern that refuses to read Slack and doesn't check Datadog or Century unless you ask it to.*  
> —— Alexander Embiricos · [12:49] ^q1

> 事实证明，模型使用计算机的最好方式就是写代码。  
> *it turns out the best way for models to use computers is simply to write code.*  
> —— Alexander Embiricos · [29:03] ^q2

> 我认为当前的限制因素，我是说，有很多，但我认为一个当前被低估的限制因素实际上是人类的打字速度或人类在编写提示词时的多任务处理速度。  
> *I think that the current limiting factor, I mean, there's many, but I think a current underappreciated limiting factor is literally human typing speed or human multitasking speed on writing prompts.*  
> —— Alexander Embiricos · [71:07] ^q3

> 我认为这实际上是构建一个仍然让人类保持掌控的智能体的典范之作。  
> *I think it's actually a masterclass in building an agent that still leaves the human in control.*  
> —— Alexander Embiricos · [80:16] ^q4

## 相关单集

- [[2026-01-29-lennys-marc-andreessen-the-real-ai-boom|《2026-01-29-lennys-marc-andreessen-the-real-ai-boom》]] —— 同公司:ChatGPT · 同概念:AGI、智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《2026-05-24-lennys-the-ai-paradox-dan-shipper》]] —— 同公司:Codex、OpenAI · 同概念:智能体 (agent)
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|《2026-06-28-lennys-openai-codex-lead-on-the-new-shape》]] —— 同公司:ChatGPT、OpenAI · 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同公司:Codex、ChatGPT · 同概念:智能体 (agent)
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella：Microsoft Build特别跨界对谈》]] —— 同概念:外壳层 (harness)、智能体 (agent)
- [[2026-06-24-latent-space-databricks|《为什么前沿生态必须开放》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-07-08-latent-space-modal|《为什么 AI 基础设施必须为「Agent 体验」进化》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《2026-01-18-lennys-the-non-technical-pms-guide-to-building》]] —— 同公司:Codex、Cursor、Lovable · 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《2026-04-19-lennys-why-half-of-product-managers-are-in-trou》]] —— 同公司:Codex、OpenAI、Tesla · 同概念:智能体 (agent)
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《2026-05-03-lennys-why-cultivating-agency-matters-more》]] —— 同公司:Codex、OpenAI · 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《神话之后的红队评估 — Zico Kolter与Matt Fredrikson，Gray Swan》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《2026-06-07-lennys-father-of-the-ipod-and-iphone-on》]] —— 同公司:OpenAI
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto》]] —— 同概念:智能体 (agent)
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《2026-07-19-lennys-netflix-cpto-on-ai-and-the-future》]] —— 同概念:智能体 (agent)
- [[2026-03-22-lennys-the-art-of-influence-jessica-fain|《2026-03-22-lennys-the-art-of-influence-jessica-fain》]] —— 同公司:Slack

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
