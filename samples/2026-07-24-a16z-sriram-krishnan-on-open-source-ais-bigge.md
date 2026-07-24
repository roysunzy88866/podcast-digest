---
title: Sriram Krishnan：Kimi K3 将改写 AI 行业版图
podcast: The a16z Show
date: 2026-07-24
source_url: undefined
duration: "22:29"
type: episode
cover: "#64748b"
description: 白宫前 AI 政策顾问解读 Kimi K3 等开源模型带来的定价、安全与政策冲击。
host: "[[Theo Jaffe]]"
cohosts: ["[[Sriram Krishnan]]", "[[Sofia Puccini]]"]
companies: ["[[Hugging Face]]"]
concepts: ["[[开源权重]]", "[[前沿实验室]]", "[[蒸馏]]", "[[智能体]]", "[[Kimi K3]]"]
category: AI 安全
tags:
  - AI 安全
  - 创业与行业
---

# Sriram Krishnan：Kimi K3 将改写 AI 行业版图

> [!info] 关联
> **主持**:[[Theo Jaffe]]
>
> **联合主持**:[[Sriram Krishnan]] · [[Sofia Puccini]]
>
> **涉及公司**:[[Hugging Face]]
>
> **概念**:[[开源权重]] · [[前沿实验室]] · [[蒸馏]] · [[智能体]] · [[Kimi K3]]

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

白宫前 AI 政策顾问解读 Kimi K3 等开源模型带来的定价、安全与政策冲击。

上周 AI 开源界极其热闹，Grok、Thinking Machines、[[Kimi K3|Kimi K3]]、Quen 等密集发布。本期节目请到了刚刚结束任期的白宫 AI 高级政策顾问 [[Sriram Krishnan|Sriram Krishnan]]（此前曾是 Andreessen Horowitz 的普通合伙人，并在 Microsoft、Meta、Snap 和 Twitter 任过高管）。他和两位主持人围绕开源模型对[[前沿实验室|前沿实验室]]、AI 政策、定价以及网络安全的影响展开了探讨。本文将这场对话梳理为三个部分：首先是开源模型如何冲击前沿实验室的商业护城河；接着话题转向[[蒸馏|蒸馏]]与美国政府的政策走向；最后是他对于 AI 安全与后续职业规划的判断。

## 开源追兵逼近：前沿实验室的护城河在哪里？

Sriram 回忆，大概四五个月前，行业内领先的模型似乎只有 Opus 和 GPT 这几个，大家曾担忧前沿实验室（Frontier Labs，指 OpenAI、Anthropic 等持续研发最尖端模型的公司）会在自我改进的曲线上把其他人彻底甩开。但过去几周情况突变，尤其是 Kimi K3 的发布，让这种局面被打破 [03:19 Sriram Krishnan]。

Sriram 指出，Kimi K3 的出现有三重含义。首先，生态系统中有了真正的选择权，你可以将[[智能体|智能体]]（Agent，能自主执行任务的 AI 程序）指向不同的模型。其次，一个尴尬的现状是：一些美国前沿模型在网络安全等领域受到了限制。他提到一位朋友甚至开始使用 Kimi K3 而不是前沿闭源模型来做安全工作，因为后者总是触发安全拒绝（护栏机制），而前者则更为自由 [04:09 Sriram Krishnan]。最后，这也意味着前沿模型的定价权受到了挑战。

说完了开源带来的冲击，接下来是前沿实验室该如何应对。Sriram 判断，前沿实验室依然会在参差不齐的性能前沿持续探索，但他怀疑真正的压力将集中在定价上。他认为，确实有一部分任务需要绝对顶尖的前沿智能，但对于像检查邮件、扫描日历这样的普通智能体任务，人们完全可以用次优的[[开源权重|开源权重]]模型来替代 [06:21 Sriram Krishnan]。这将直接导致前沿模型面临定价压力。

> 【背景】开源权重（Open-weight）模型是指将神经网络参数公开的模型，允许用户下载并在本地运行。用户可以通过微调（Fine-tuning）等方式修改它，以满足特定需求。

他观察到，前沿实验室已经开始行动。比如 Anthropic 就已经延长了其顶级模型的可用期限。他还进一步抛出了一个核心问题：如果你是前沿实验室，真正的护城河到底是在底层智能里，还是在工具套件里 [07:20 Sriram Krishnan]？他认为，智能层面正变得越来越像大宗商品，因此前沿实验室（比如围绕 Claude 的产品）可能会投入更多精力，让自身的工具套件变得更具用户粘性。

## 蒸馏争议：不对称的竞争环境

工具和定价的竞争尚属商业范畴，但在国家安全层面，关于开源模型的讨论则更为复杂。

Axios 当天报道称，美国政府正在考虑限制中国的开源模型。面对“政府是否会打压开源模型”的提问，Sriram 明确表示，他深信开源社区中经典的 Linus 定律——只要有足够多的眼睛，所有的 Bug 都无所遁形 [10:29 Sriram Krishnan]。他认为，从 [[Hugging Face|Hugging Face]] 下载的开源权重模型本质上更安全，因为全球的开发者都可以去拆解、检查和修改它，这是闭源模型做不到的。

然而，今天让他感到不适的是：由于美国前沿模型设置了安全护栏，防御者反而难以直接审查自身代码的漏洞；相比之下，使用中国模型反而可能更利于做安全审查。他甚至提到，就在节目录制当天，Hugging Face 报告了一起事件：有人使用 AI 智能体在多个节点上猛烈攻击系统试图突破 [11:02 Sriram Krishnan]。他主张，反击这种威胁的最好办法，就是确保美国的防御者能够使用最好的模型来提升软件安全。

> 【背景】在讨论模型安全与攻击时，通常涉及模型生成的「漏洞利用」——即针对操作系统或固件最新漏洞编写的攻击代码。这是网络战中极具破坏力的武器。

顺着安全问题，话题来到了引发业界热议的“蒸馏”（Distillation，即用大模型生成的输出来训练另一个模型）争议上。

Sriram 解释道，蒸馏从来都是模型训练的核心组成部分。毕竟，最初的 AI 模型就是通过爬取互联网上的内容（本质上是人类知识的结晶）来引导训练的 [12:09 Sriram Krishnan]。如今的互联网上充斥着大量 AI 生式的垃圾内容，这些内容不可避免地被纳入了新模型的训练集。

但他指出了一个极其不对称且糟糕的现状：来自其他国家的模型（比如中国模型）可以肆无忌惮地基于美国模型进行蒸馏训练；而如果你是一家美国的开源权重模型公司，或者硅谷的新创公司，你是否能合法地蒸馏其他美国模型的输出，在法律界定上却充满困惑 [14:35 Sriram Krishnan]。他非常赞同 Sequoia（红杉资本）的 Dean Mayer 和 Strategy 的 Ben Thompson 提出的思路：政府必须想办法为蒸馏建立清晰的规则，确保美国的模型公司能在一个公平的环境里竞争。事实上，现在几乎每一个美国的开源模型，都在微调过程中把中国模型当作老师来用 [15:25 Sriram Krishnan]。

## 政策的边界：对快速自我改进的应对

既然开源带来了如此多复杂的连锁反应，政策制定者该如何看待潜在的颠覆性风险？主持人特别提到了“自动化的 AI 研究员”（即 AI 能自动化并加速 AI 自身的研究）这一备受争议的话题。

Sriram 对这种纯理论的探讨持谨慎态度。他指出，学术界对于我们究竟处于指数曲线的哪个位置存在巨大分歧。有人相信几年内就会出现自动化的 AI 研究员，但也有观点认为，存在无法轻易突破的根本性瓶颈，因此进步曲线会平缓得多 [17:03 Sriram Krishnan]。

他主张务实的应对策略：政府不应过早陷入理论恐慌，而应将精力集中于解决具体的可信风险。例如在网络安全领域，当模型真的具备了为最新固件生成漏洞的能力时，政策应当鼓励用更多的 AI 去扫描代码库、加固防御 [18:26 Sriram Krishnan]。

当被问及开放权重模型是否会打击前沿实验室的资本支出意愿时，Sriram 给出了极其坚定的商业乐观主义判断。他认为，只要你在提供有价值的开放权重模型，资本主义的力量自然会理顺整个供应链——无论是数据中心、芯片提供商，还是提供灭火系统的供应商，都会顺势为你服务 [19:19 Sriram Krishnan]。例如，银行因为合规需求无法使用前沿模型，就会转而支持能在内部运行的开源模型。而那些推理云（提供 AI 计算的云服务商）的强劲增长，已经证明了开源生态的繁荣。

## 本集带走

1. **“非前沿”任务足以养活开源生态**：虽然极限任务仍需顶尖闭源模型，但大量日常智能体任务（如处理邮件、查看日历）用开源模型即可胜任，这将实质性地压低前沿模型的定价空间。
2. **不对称的蒸馏规则亟待厘清**：中国模型可以自由蒸馏美国模型的输出，而美国本土公司却受制于模糊的法律边界。为蒸馏建立合理规则，是保障公平竞争的关键。
3. **开源并不等同于安全风险**：基于开放审查原则，开源权重模型本质上是安全的；闭源模型过度的安全拒绝机制，反而可能削弱防御者修补系统漏洞的能力。

## 金句(中英对照 · 过机器闸门三联校验)

> 如果你提供有价值的产品，资本主义会负责处理其余的一切。  
> *If you're providing a product of value, capitalism will take care of all the rest.*  
> —— Sriram Krishnan · [00:27] ^q1

> 第一，我认为领先的开源权重模型或开源模型，你知道，不是美国的，这并不好，对吧？  
> *Number one, I don't think it is great that the leading open weight models or open source models, you know, are not American, right?*  
> —— Sriram Krishnan · [09:30] ^q2

> 我对此的信念是，开源权重模型本质上是安全的，因为当你从 Hugging Face 下载一个模型时，这意味着你有全世界的人能够拆解它、检查它、微调它、修改它、以你绝对无法在封闭模型上做到的方式查看它。  
> *what I believe with that is that open-weight models are inherently secure because when you download a model of Hugging Face, it means you have the entire world being able to take it apart, inspect it, fine-tune it, modify it, look at it in ways that you absolutely cannot if they are closed.*  
> —— Sriram Krishnan · [10:34] ^q3

> 我认为今天糟糕的情况是，来自其他国家的一些模型可以脱离美国模型进行训练。  
> *I think the situation which is bad today is that some of these models from other countries can train off American models.*  
> —— Sriram Krishnan · [14:35] ^q4

> 如果你看今天任何美国开源模型，它们都在使用中国模型作为老师或在某种程度上作为微调过程的一部分。  
> *if you look at any American open source model today, they are using Chinese models as a teacher or in a way as a part of the fine tuning process.*  
> —— Sriram Krishnan · [15:26] ^q5

> 如果你提供一个有价值的产品，资本主义会找到一种方法让供应链为你工作。  
> *if you're providing a product of value, capitalism will find a way to make the supply chain work for you.*  
> —— Sriram Krishnan · [19:24] ^q6

## 相关单集

- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《iPod之父Tony Fadell：反直觉的产品课》]] —— 同公司:Anthropic、OpenAI · 同概念:智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同概念:智能体 (agent)
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《1.2 个人 + 20 个 AI 智能体：SaaStr 的极简销售实验》]] —— 同概念:智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同概念:智能体 (agent)
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《1500 亿美元的隐形 AI 公司创始人：恐惧源于无知，最好的工作是独自安静地完成》]] —— 同概念:智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同概念:智能体 (agent)
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《对话 Notion 产品负责人 Max:AI 时代的产品方法论与人的主观能动性》]] —— 同概念:智能体 (agent)
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的未来工作预测：别等 AI 末日，用 Codex 重塑一切》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella 谈 AI 时代平台逻辑:私有评估是最大 IP》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人 Mark Pincus：想做出伟大产品，先学会「合法地抄袭」》]] —— 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《Databricks 的智能体平台与数据库「圣杯」：Reynold Xin 与 Matei Zaharia 的技术蓝图》]] —— 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《Gusto CTO 的极简实验:5 人 10 周凭感觉编程造出 AI 产品》]] —— 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《从避战大模型到押注智能体：Modal 的推理基础设施进化史》]] —— 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:智能体 (agent)
- [[2025-12-07-lennys-surge-ai-edwin-chen|《Surge AI 创始人 Edwin Chen:我们教模型追逐多巴胺,而非真理》]] —— 同公司:Anthropic
- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同公司:Anthropic
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《Anthropic 增长负责人：用 Claude 自动化增长实验，把 PM 的活交给工程师》]] —— 同公司:Anthropic
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被迫转行，一半人迎来复兴》]] —— 同概念:智能体 (agent)
- [[2026-05-10-lennys-how-to-build-a-company-that-withstands|《《精益创业》作者 Eric Ries 新作导读：好公司为什么会「变坏」》]] —— 同公司:Anthropic
- [[2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for|《Adam Mosseri：AI 时代的团队重组与产品品味》]] —— 同公司:Anthropic

*本集关键词:开源模型 · 前沿实验室 · 蒸馏 · 定价压力 · AI 政策*

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
