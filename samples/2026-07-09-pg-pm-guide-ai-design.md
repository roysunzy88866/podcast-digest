---
title: 用 AI 武装技术型 PM：Codex 工作流全解析
podcast: Product Growth Podcast
date: 2026-07-09
source_url: https://www.news.aakashg.com/p/pm-guide-ai-design
duration: "74:34"
type: episode
cover: "#64748b"
image: "/covers/2026-07-09-pg-pm-guide-ai-design.jpg"
description: 设计师 Meng To 展示如何用 Codex 搭建插件与技能生态，转型为掌控智能体舰队的超级个体。
host: "[[Meng To]]"
cohosts: ["[[Akash]]"]
companies: ["[[Cursor]]", "[[obsidian]]", "[[hey gen]]", "[[Figma]]"]
concepts: ["[[Codex]]", "[[智能体]]", "[[上下文]]", "[[护栏]]", "[[playwright]]", "[[计划模式]]", "[[数字分身]]"]
category: AI 编程
tags:
  - AI 编程
  - 职业与个人成长
---

# 用 AI 武装技术型 PM：Codex 工作流全解析

> [!info] 关联
> **主持**:[[Meng To]]
>
> **联合主持**:[[Akash]]
>
> **涉及公司**:[[Cursor]] · [[obsidian]] · [[hey gen]] · [[Figma]]
>
> **概念**:[[Codex]] · [[智能体]] · [[上下文]] · [[护栏]] · [[playwright]] · [[计划模式]] · [[数字分身]]
>
> **来源**:[Product Growth Podcast](https://www.news.aakashg.com/p/pm-guide-ai-design)

<div class="pd-play"><audio controls preload="metadata" src="/audio/2026-07-09-pg-pm-guide-ai-design.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

## 一句话 TLDR

设计师 Meng To 展示如何用 Codex 搭建插件与技能生态，转型为掌控智能体舰队的超级个体。

当行业里充斥着「产品经理（PM）要被 AI 取代」的焦虑时，设计师 [[Meng To|Meng To]] 给出了一个极为落地的反直觉判断：被淘汰的只会是非技术型 PM，而掌握 AI 工具的技术型 PM 将迎来效能的十倍放大。Meng To 是设计教育领域多年的内容创作者，也是多个 SaaS 产品的独立开发者。本集他深度拆解了自己日常使用的 AI 工作流——从选对主力工具、配置本地知识库、搭建多[[智能体|智能体]]并发，到最终转型为掌控全局的超级个体。全文脉络分为四个部分：先看他的主力工具栈，再看如何组织本地项目，接着是生成与设计的高级实操，最后落到人究竟该如何自我定位。

## 告别单一编辑器：为什么主力工具是 Codex

一切工作流的起点，是选对那个能连接一切的超级枢纽。Meng To 坦言，自己在 OpenAI 推出 Codex 之前是 Cursor（一款带有 AI 智能体的代码编辑器）的重度用户，但 Codex 的出现彻底改变了他的思维模式——它不仅是写代码的工具，更是启动项目和管理[[上下文|上下文]]的中枢 [03:10 Meng To]。他将 Codex 形容为「加了类固醇的 ChatGPT（一种增强版的聊天机器人）」，既能聊天，又能创建幻灯片、网站和移动应用 [04:09 Meng To]。

**工具变了，人怎么用好它？这就需要一套辅助的周边工具链。** 他强调「上下文为王」，并推荐了几个必备工具：首先是一个 AI 浏览器，它包含一个「提问」按钮，还能让 AI 智能体直接接管并操作你的电脑 [04:42 Meng To]；其次是 Whisper Flow（一款语音输入工具），它不仅识别准确率高，还能处理生僻词，对需要大量输入上下文的 PM 非常友好 [05:06 Meng To]；最后是 Obsidian（一款本地文档管理软件），因为像 Codex 这样的工具会在本地生成大量文档，你需要 Obsidian 来把这些文件夹组织成一个有条理的「知识库」 [08:46 Meng To]。

Meng To 甚至大量使用 AI 虚拟形象（Avatar）来录制视频。他解释说，当前的营销已经全面转向 UGC（用户生成内容），人们厌倦了公司的官方套话，更渴望看到真实个人的分享。通过使用 HeyGen（一种专门用于生成[[数字分身|数字分身]]的 AI 模型）生成自己的克隆体和声音，再配合屏幕录制，你就不必每次录视频前都精心打扮，依然能向团队或受众传递极具人情味的信息 [12:41 Meng To]。

## 从零起步：如何组织你的本地项目与技能库

说完了周边工具为什么重要，接下来是他具体是怎么把这些工具串起来跑通一个项目的。

Meng To 展示了他的真实工作区，并强调一个核心理念：**一切数据都必须是本地的**。因为只有当所有文档、代码和上下文都存在于你的电脑上时，AI 才能获得最大的权限和最强的能力，无需依赖互联网或私人数据库 [10:31 Meng To]。

他建议建立清晰的本地文件夹结构：在「下载」目录下建一个总的项目文件夹，然后在里面为每一个项目、每一条业务线（例如内容创作、财务发票、客户支持等）建立专属的子文件夹 [27:49 Meng To]。这种做法不仅是为了整洁，更是为了精准控制 AI 的上下文范围——如果给 AI 喂太多无关的文件，就会白白消耗大量的 Token（大模型处理信息的计量单位） [29:21 Meng To]。

为了让 AI 更懂你的具体需求，Codex 提供了「插件」和「技能」两种扩展方式。插件类似于 Figma 的插件，背后有完整的团队做深度集成（比如 Gmail、Slack 或 Discord 插件） [14:00 Meng To]。其中最重要的是「computer use（计算机使用）」功能，它能让 AI 直接操作你的命令行，甚至像人类一样浏览网页、点击按钮、测试流程并修复 bug [15:10 Meng To]。

> 【背景】这段访谈中也涉及了对 MCP（Model Context Protocol，模型上下文协议）的讨论，它是一种让大模型更好地与外部工具（如 Figma）或 API 进行通信的标准，能大幅拓展 AI 的执行边界。

而「技能」则更轻量，任何人都可以自己编写或从网上下载，用来指导 AI 在生成前端设计、文案或特定代码（如 SwiftUI）时的行为准则。例如，他会下载专门的「品味技能」来提升 AI 的审美，或者下载关于 CSS（层叠样式表）和动画的技能包来优化网页落地页 [21:09 Meng To]。

## 多智能体并发：像产品经理一样指挥你的 AI 舰队

工具搭好了，真正的生产力飞跃来自于并发处理和设计落地。Meng To 认为，传统的 Figma 或 VS Code（一款代码编辑器）将人限制在了单一任务和单一光标上，但如今的 AI 时代，你拥有一支「智能体大军」 [46:53 Meng To]。

他演示了从零生成应用的过程：创建项目后，第一步永远不是直接写代码，而是使用「[[计划模式|计划模式]]」，让 AI 先产出一份详细的架构和功能清单供你审批 [30:02 Meng To]。在构建中，如果你遇到不懂的地方，随时可以提问。例如，当 AI 提出使用外部截图服务时，Meng To 凭借自己的工程经验，反问它使用 Playwright（一种自动化测试工具）是否会更好，从而引导 AI 做出更优的技术选型 [41:23 Meng To]。

在界面生成方面，他展示了如何基于真实数据快速生成幻灯片，并利用「品味技能」让产出的排版和字体达到资深设计师的水平 [45:10 Meng To]。虽然他提到像 GPT 5.5（相较于早期的 GPT 5.3 版本）这类更强的底层模型能以更快的速度（如 18 秒内）生成内容，但他也提醒：AI 仍会在排版时犯「塞入过多信息」的错误 [45:23 Meng To]。这正是需要人类介入的地方。

人类的高效指令从何而来？他给出了三个层级的输入法：最慢的是打字，其次是使用 Whisper Flow 语音输入，而最高效的则是「截图」。因为「一图胜千言」，通过一个快捷键（Command+Command）截取当前浏览器的画面传给 AI，能提供最精准且即时的视觉上下文 [42:45 Meng To]。

## 创业终局：用那最后的 8% 人类品味构建护城河

当 AI 能包办代码、设计和测试时，人的价值究竟在哪？这正是访谈最后落到的核心议题。

近期包括 Meta 和 Oracle 等大公司裁掉了许多 PM，市场似乎在释放悲观信号。但 Meng To 坚定地澄清：被裁掉的是那些在公司里扮演官僚和政客角色的非技术型 PM；真正懂技术、懂工作流的技术型 PM 是被留下来的 [66:20 Meng To]。这里的「技术」并不是指你必须手写每一行代码（Meng To 自己在过去六个月就没写过一行代码），而是指你要懂所有的技术行话、清楚什么是最好的 AI 模型，并掌握整个工作流的设计 [66:59 Meng To]。

> 【背景】Meta 指全球社交巨头 Facebook 的母公司，Oracle（甲骨文）则是全球大型企业级软件公司。大厂的人员优化动作往往被行业视为技术工种需求变化的晴雨表。

他认为，无论你是转型到更技术的角色，还是直接走向独立创业，最终的公式都是：**你必须成为某个领域的专家，然后部署一支智能体舰队去为你干活，而你的全部精力应该投入到那最后的 8% 人类品味和编排任务中** [71:31 Meng To]。

这 8% 具体指什么？包括质量保证、确保计划合理，以及作为人类去统筹编排一切。他用了一个绝佳的类比：AI 确实在不断提高质量的基准线（地板变高了），但质量的最高上限也在被无限拉高。就像 Airbnb（爱彼迎，一家全球知名的房屋短租平台）的 CEO 所说的「要追求十一星级的体验」，你的工作是永远把底线维持在五星以上，同时构思如何达到未来的十一星 [72:00 Meng To]。

归根结底，万事万物都有公式，无论是做爆款内容还是做生意。AI 时代最安全的生存法则，就是利用 AI 处理所有枯燥的文书、会计和代码工作，而你自己紧握领域知识与品味，做整个舰队唯一的指挥官。

## 本集带走

1. **非技术型 PM 正在被淘汰**：被淘汰的是只会做流程管理和政治博弈的角色。新时代的 PM 即便不手写代码，也必须深刻理解 AI 模型、智能体工作流和技术行话，才能驾驭工具。
2. **上下文是新的生产力护城河**：所有的文档和项目都必须高度组织化并保持在本地。语音输入和截图是把海量高质上下文喂给 AI 的最快方式。
3. **人的价值在于那最后 8% 的品味与统筹**：AI 能帮你完成 90% 以上的执行工作，但你的核心竞争力在于作为业务专家，部署智能体舰队，并负责最终的质量保证与体验上限的突破。

## 金句(中英对照 · 过机器闸门三联校验)

> 因为有了 AI，你不再需要害怕创办公司了，因为 AI 可以为你处理所有的文书工作，为你处理所有的会计工作，所有那些无聊的事情。  
> *because ai you don't need to be scared of starting a company anymore because ai can take care of all the paperwork for you all the accounting for you all the the boring stuff*  
> —— Meng To · [68:39] ^q1

> 你最清楚，因为就像任何商业规则一样，你必须成为那个最了解这个主题的人，否则你就没有任何筹码。  
> *you know best because like any business rule is that you have to be the one who knows this topic the best otherwise you don't have any leverage*  
> —— Meng To · [69:26] ^q2

> 然后让 AI 成为你的放大器、扩音器，这样你就可以快速做出这些微观决策，并且你可以部署一支智能体舰队。  
> *then let ai be your amplifier magnifier so that you can quickly make these micro decisions and you can deploy a fleet of agents*  
> —— Meng To · [69:51] ^q3

> 你不必再那样做了，你有一支智能体大军。  
> *you don't have to do that anymore you have an army of agents*  
> —— Meng To · [46:54] ^q4

> 最终你会被解雇，因为 AI 会在某个时间点取代所有人，或者我们将找到新的工作方式。  
> *eventually you will get fired because ai will replace everyone at some point or we will find new ways to do our job*  
> —— Meng To · [00:00] ^q5

## 相关单集

- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同公司:cursor · 同概念:codex、智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的未来工作预测：别等 AI 末日，用 Codex 重塑一切》]] —— 同公司:cursor · 同概念:codex、智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏》]] —— 同概念:护栏 (guardrails)、智能体 (agent)、codex
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:codex、智能体 (agent)、mcp
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《对话 Notion 产品负责人 Max:AI 时代的产品方法论与人的主观能动性》]] —— 同公司:figma · 同概念:智能体 (agent)
- [[2026-06-24-pg-company-os-jz|《AI 时代的产品团队：Laurel CPO 的公司操作系统与「超级个体」实战》]] —— 同嘉宾:Akash · 同概念:智能体 (agent)
- [[2026-07-13-pg-the-complete-claude-stack-for-pms|《PM 如何用 Claude 把生产力提升 10 倍：全栈实战》]] —— 同概念:智能体 (agent)、mcp
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同概念:智能体 (agent)
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《1.2 个人 + 20 个 AI 智能体：SaaStr 的极简销售实验》]] —— 同概念:智能体 (agent)
- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同公司:figma
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《1500 亿美元的隐形 AI 公司创始人：恐惧源于无知，最好的工作是独自安静地完成》]] —— 同概念:智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同概念:智能体 (agent)
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella 谈 AI 时代平台逻辑:私有评估是最大 IP》]] —— 同概念:智能体 (agent)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《iPod之父Tony Fadell：反直觉的产品课》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人 Mark Pincus：想做出伟大产品，先学会「合法地抄袭」》]] —— 同概念:智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《Databricks 的智能体平台与数据库「圣杯」：Reynold Xin 与 Matei Zaharia 的技术蓝图》]] —— 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《Gusto CTO 的极简实验:5 人 10 周凭感觉编程造出 AI 产品》]] —— 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《从避战大模型到押注智能体：Modal 的推理基础设施进化史》]] —— 同概念:智能体 (agent)
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《Netflix 产品负责人谈 AI 时代：每个人都能做一切,但卓越的专长不会消失》]] —— 同概念:护栏 (guardrails)
- [[2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge|《Sriram Krishnan：Kimi K3 将改写 AI 行业版图》]] —— 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被迫转行，一半人迎来复兴》]] —— 同概念:codex、智能体 (agent)
- [[2026-02-26-lennys-ai-is-critical-for-humanitys-survival|《对话 Cisco CPO Jeetu Patel:大公司如何不掉队 AI 时代》]] —— 同概念:护栏 (guardrails)
- [[2026-03-22-lennys-the-art-of-influence-jessica-fain|《别只想推销：产品负责人如何真正影响高管决策》]] —— 同概念:护栏 (guardrails)
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《Anthropic 增长负责人：用 Claude 自动化增长实验，把 PM 的活交给工程师》]] —— 同公司:cursor
- [[2026-04-12-lennys-hard-truths-about-building-in-the-ai-era|《Keith Rabois 的用人铁律：别招熟手、别做客户访谈、公开批评》]] —— 同公司:airbnb

*本集关键词:AI 工作流 · Codex · 智能体 · 技术型 PM · 数字分身*

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
