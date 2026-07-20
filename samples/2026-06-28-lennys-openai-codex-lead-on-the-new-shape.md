---
title: 
podcast: 
date: undefined
source_url: https://www.lennysnewsletter.com/p/openai-codex-lead-on-the-new-shape
duration: "69:55"
host: "[[Andrew Ambrosino]]"
cohosts: ["[[Lenny]]"]
companies: ["[[Codex app]]", "[[OpenAI]]", "[[ChatGPT]]", "[[Claude Code]]"]
concepts: ["[[智能体]]", "[[品味]]", "[[原型]]", "[[计算机使用]]", "[[应用内浏览器]]", "[[区域联防]]", "[[角色崩溃]]", "[[PMF]]"]
tags:
  - AI 产品开发
  - 品味与策展
  - 智能体
  - 角色边界重构
  - 自用与自动化工作流
---

# undefined

> [!info] 关联
> **主持**:[[Andrew Ambrosino]]
>
> **联合主持**:[[Lenny]]
>
> **涉及公司**:[[Codex app]] · [[OpenAI]] · [[ChatGPT]] · [[Claude Code]]
>
> **概念**:[[智能体]] · [[品味]] · [[原型]] · [[计算机使用]] · [[应用内浏览器]] · [[区域联防]] · [[角色崩溃]] · [[PMF]]
>
> **来源**:[undefined](https://www.lennysnewsletter.com/p/openai-codex-lead-on-the-new-shape)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-06-28-lennys-openai-codex-lead-on-the-new-shape.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

OpenAI Codex 负责人解析 AI 如何让软件「实现」变廉价、让「品味」成核心。

[[OpenAI|OpenAI]] 的 Codex 应用正在以惊人的速度成为许多人构建产品的首选工具——自一月以来使用量增长了 6 倍，目前拥有超过 500 万的周活跃用户，且在 OpenAI 内部有接近 100% 的员工（不仅是工程师）每周都在使用它。作为 Codex 应用的产品和工程负责人，[[Andrew Ambrosino|Andrew Ambrosino]] 在这次访谈中分享了在最前沿的 AI 团队里，产品开发、设计流程和团队角色正在经历怎样的剧变。他本人曾是设计师、工程师、产品经理，也做过创业公司创始人，这种复合背景让他成为观察这场变革的绝佳窗口。

### 软件开发的反转：实现廉价，品味昂贵

Andrew 指出，过去的产品流程（无论是瀑布流还是敏捷）都有一个底层假设：**实现（写代码）是昂贵的**。因此，团队需要通过写文档、做用户调研、画[[原型|原型]]来提前降低风险，因为一旦进入开发就会消耗大量资源。但现在，这个假设被 AI 彻底颠覆了。他认为，如今只要和这些大模型对话，任何人都能从零开始把想要的功能搭建出来，「实现」已经不再是软件流程里最昂贵的部分。

> 【背景】PRD（产品需求文档）是传统软件开发中用于详细描述产品功能、行为和约束的文档。过去通常在正式写代码前撰写，用于团队对齐并降低开发风险。

这就导致了流程的「倒置」：在 OpenAI 这样人人都极具行动力（agentic，指主动出击、自己动手解决问题）、想法泛滥且拥有无限算力额度的环境里，面对一个急需开发的功能，往往会有 90 个不协调的团队或个人同时在造原型 [04:40 Andrew Ambrosino]。

但这并不意味着文档和 PRD 就彻底死亡了。Andrew 观察到，现在有两种极端的倾向：非工程师喜欢喊「PRD 已死，直接上原型」，而工程师则喜欢写一堆没人看得懂的文档。他认为，既然现在各种媒介（不管是原型还是文档）的制作成本都很低，**最关键的是「判断该用什么媒介来表达」**。如果是为了在一个模糊领域厘清产品逻辑，文档依然合适；如果是为了测试一种交互模式，那就做原型。

这引出了他反复强调的核心：**[[品味|品味]]（Taste）**。在所有人都能造出东西的时代，真正的价值在于「策展（curation，即筛选和整合）」——面对 90 个粗糙的尝试，判断哪些是好的、哪些应该组合起来、如何定义产品的走向。这里所说的品味，不仅仅是视觉美学，更是系统思考（这东西在整个生态里处在什么位置）、商业判断和目标感。

### AI 为什么还不擅长设计？

虽然 AI 写代码的能力突飞猛进，但主持人 [[Lenny|Lenny]] 观察到，AI 目前生成的产物在设计上往往有明显的「机器味」（一眼就能看出是 Claude 或 Codex 生成的），缺乏惊艳的设计感。Andrew 解释了其中的几个原因。

首先是训练反馈机制的差异。评估一段代码好坏相对客观（能不能编译？有没有实现功能？），但要评估「什么是好设计」，就不可避免地需要人类主观品味作为反馈机制，这使得构建设计模型的训练循环更加繁琐。

其次，各大 AI 实验室历来优先投资于那些能加速 AI 自身研究的能力。在早期，让模型写出正确的代码能直接加速 AI 研究，而设计能力并不直接在这个飞轮里。

> 【背景】Anthropic 是 Claude 系列模型的开发商，与 OpenAI 是竞争对手。访谈中提及 Claude Code 是其推出的编程工具。

此外，设计本身具有更强的文化属性和时效性。比如前两年大量新网站的视觉都在模仿知名协作软件 Linear 的官网——如果 AI 每次都输出一个完美的 Linear 风格网站，虽然好看，但恰恰违背了设计所需要的「新颖性」。而在软件工程中，复用已知模式是好事，在设计里却是偷懒。

Andrew 还指出了一个更深的技术难点：软件架构的抽象层。即使模型在视觉设计上变强了，它也很难理解代码底层的抽象关系。比如两个看起来不同的界面元素，如果在逻辑上属于同一种交互模式，代码层面就应该共享结构。如果公司突然要改版，深层的设计语义需要被同步理解，而目前的 AI 还做不到这种深度的语义抽象 [15:48 Andrew Ambrosino]。

### 「婴儿版」与自虐式自用

面对 AI 带来的加速，传统的「正统设计流程」（发散-收敛-用户研究）在 Andrew 看来确实已经死了。但他强调，**判断「我们当前处于流程的哪个阶段」比以往任何时候都重要**。因为原型现在能做得太逼真，一旦一个本该用来探索想法的原型看起来「随时能上线」，全公司的人就会急躁地问「我们什么时候发布它？」，却忽略了底层的商业模式或用户需求其实还没理清。

为了应对这种探索，他们团队经常使用一种「婴儿版」策略——构建一个大幅简化的产品代码库（比如 baby Codex、baby Cursor），它近似了真实产品的交互，但因为结构简单，AI 可以极快地在其上 vibe coding（一种凭借直觉与自然语言指挥 AI 写代码的开发方式），用来做各种「如果侧边栏变成这样会怎样」的压力测试 [20:25 Andrew Ambrosino]。

这种策略也源于 OpenAI 强烈的「自虐式」自用传统。为了把 Codex 做成最好的工具，团队会有意在能找到更好用的替代工具时，依然强迫自己使用 Codex 去完成工作，忍受不便，从而倒逼产品改进。Andrew 苦笑说：「我们通常不改进我们的流程，以便我们能让产品更好地完成它，这是一个处于深深不适中的地方。」[23:17 Andrew Ambrosino]

### 角色崩溃与「区域联防」

在 Codex 团队内部，Andrew 观察到了比公司其他部门更多的「[[角色崩溃|角色崩溃]]」。因为这是一个面向工程师的技术产品，团队里的设计师会说工程师的语言，产品经理（PM）会写代码。这里的工作边界不再是由职能（你是设计、我是开发）划分，而是由「你今天主要在解决什么问题」来定义。

Andrew 打了一个生动的比方：一个人的角色，不再是一个固定的点，而是他各项工作活动的「平均值」。

对于产品经理的工作，Andrew 提出了一个极具启发性的概念：**[[区域联防|区域联防]]**。这借用了篮球战术里的术语 [28:47 Andrew Ambrosino]。

> 【背景】「区域联防」是篮球运动中的一种防守战术。防守球员不固定盯防某一个对手，而是负责防守球场上的特定区域，随时补位。

在 AI 时代，由于自上而下的年度计划往往赶不上模型能力的飞速变化，加上全员都在天马行空地产出原型，如果两个产品人员靠得太近，盯着同一块内容，就会造成浪费和混乱。因此，产品团队需要像打联防一样散开：大家主动寻找「哪里有空白」，拉开距离以确保对全公司的事务实现「全覆盖」。产品经理的核心不再是死抠某一条业务线的细节，而是作为有品味的引导者，填补协作网络中的缝隙，确保没有重要的事情被遗漏。

### 从「无法工作」到「时机成熟」：Codex 的宿命论

在模型飞速迭代的时代，规划变得异常困难。Andrew 坦言，他们依然会做规划，但短期内的事情需要极尽详细，而九个月后的计划则必须保持模糊——因为任何精确的长期规划都是「虚假的精度」[32:17 Andrew Ambrosino]。

这背后是一个残酷的产品逻辑：**很多功能失败，不是因为想法不对或形状不对，只是因为模型还不够聪明。**

Andrew 透露了一个惊人的细节：二月份发布的 Codex 应用大获成功，但如果这款产品在去年十一月就准备好并发布，绝对会在市场上惨败 [33:34 Andrew Ambrosino]。原因无他，仅仅是十一月到二月之间模型底层能力的跨越。

他梳理了 OpenAI 内部一系列「浏览器与[[智能体|智能体]]」功能的演进史：从最初在 [[ChatGPT|ChatGPT]] 里不温不火的 Operator，到 Atlas 浏览器，再到 Codex 的[[应用内浏览器|应用内浏览器]]。在 Andrew 看来，**这根本就是同一个功能被发布了五六次** [36:24 Andrew Ambrosino]。

最初的 Codex 网页版太激进了，它试图让你直接把任务完全丢给模型去自动完成，但当时的模型水平还不够。后来市场上大热的 [[Claude Code|Claude Code]] 则走了相反的路线——它更「谦卑」，待在本地终端里，不假装自己是通用人工智能（AGI），而是不断向人类提问。这种形态反而奏效了，因为那正契合了当时模型的能力边界。Andrew 从中学到的教训是：产品在市场上失败，过去能告诉你产品的形状或定位错了；而现在，它可能只意味着你需要把它再发布六次，等模型聪明到足以支撑它。

### 聊天机器人的终极形态与愿景

展望未来，Codex 的野心绝不仅仅是一个终端工具或代码编辑器。他们试图在「专为开发者设计的深度工具」和「面向大众的通用知识工作平台」之间找到平衡。

一个标志性的转折点是，尽管 OpenAI 内部曾试图为法务、财务等非技术岗位专门开发定制化的应用界面，但大家却死死不愿意离开 Codex 应用——哪怕 Codex 当时一直在向这些非技术人员展示他们根本看不懂的代码 [54:05 Andrew Ambrosino]。

这让团队意识到，Codex 这种「尺寸合适的、以聊天为核心」的形态，是一个绝佳的「大本营」。它不一定非要在自己的画框里重新发明轮子。比如，Codex 内部虽然有简陋的表格工具，但对于做财务建模需要处理数十亿美元级别的专业需求，它直接通过连接器去调用本地的 Microsoft Excel，处理完再关闭 Excel。

> 【背景】PMF 指产品与市场需求达到完美契合的状态，是创业和产品圈常用的术语，代表产品真正解决了市场痛点。

访谈的最后，Andrew 分享了一个堪称疯狂的案例：OpenAI 内部的摄像师 Brent 需要剪辑视频。Codex 本身并不是视频剪辑软件，但它理解 Brent 使用的是 Premiere Pro。于是，Codex 自己动手，编写了一个可以安装进 Premiere Pro 的扩展程序，然后通过这个扩展程序去控制软件内部的标记和剪辑。这种为了完成目标「自己给自己造工具」的能力，让人不寒而栗。

最终，Andrew 给出的产品哲学建议是：「不要执着于你的确切流程。」与其死守着「我最擅长使用某种排版工具」这种终将被 AI 取代的技能，不如执着于「你能交付的独特结果」，并在日复一日的剧变中，享受每天以不同方式工作的乐趣。

## 金句(中英对照 · 过机器闸门三联校验)

> 实现实际上不再是昂贵的部分了。它是，我敢说，品味。  
> *The implementation is actually not the expensive part anymore. It's, dare I say, taste.*  
> —— Andrew Ambrosino · [05:02] ^q1

> 我通常会寻找对学科的明显掌控，但还要有品味去说，“嘿，你将拥有无限的 token，我们不能只是在制造垃圾。”  
> *I generally look for obviously command over the discipline, but then the taste to say, "Hey, you're going to have unlimited tokens and we can't just be doing slop."*  
> —— Andrew Ambrosino · [31:20] ^q2

> 我们做的一整套事情是，我们通常不改进我们的过程，以便我们能让产品更好地完成它，这是一个处于深深不适中的地方。  
> *This is a whole thing we do, which is that we often don't improve our process so that we can make the product better to do it, which is a deeply uncomfortable place to be in.*  
> —— Andrew Ambrosino · [23:17] ^q3

> 我非常有信心，我们在二月发布的 Codex 应用程序，如果它在十一月准备好了，它肯定会在市场上失败。  
> *I am very confident that the Codex app that we released in February, if that had been ready in November, it would've absolutely failed in the market.*  
> —— Andrew Ambrosino · [33:34] ^q4

> 我不知道该给什么建议，但如果有一条建议，那就是，“不要执着于你的确切流程。”  
> *if there's one piece, it's like, "Do not get married to your exact process."*  
> —— Andrew Ambrosino · [68:15] ^q5

> 要执着于你能够独特交付的结果，然后去做诸如改变你的流程来尝试事情这样的事情。  
> *Get married to the outcomes that you are uniquely able to deliver and then do things like change your process to try things.*  
> —— Andrew Ambrosino · [68:20] ^q6

## 相关单集

- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《2026-05-24-lennys-the-ai-paradox-dan-shipper》]] —— 同嘉宾:Lenny · 同公司:Claude Code、OpenAI · 同概念:智能体 (agent)、应用内浏览器 (in-app browser)
- [[2025-12-14-lennys-why-humans-are-ais-biggest-bottleneck|《2025-12-14-lennys-why-humans-are-ais-biggest-bottleneck》]] —— 同嘉宾:Lenny · 同公司:ChatGPT、OpenAI · 同概念:智能体 (agent)
- [[2026-01-29-lennys-marc-andreessen-the-real-ai-boom|《2026-01-29-lennys-marc-andreessen-the-real-ai-boom》]] —— 同嘉宾:Lenny · 同公司:ChatGPT、Claude Code · 同概念:智能体 (agent)
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《2026-05-03-lennys-why-cultivating-agency-matters-more》]] —— 同嘉宾:Lenny · 同公司:Claude Code、OpenAI · 同概念:品味 (taste)、智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《2026-01-18-lennys-the-non-technical-pms-guide-to-building》]] —— 同嘉宾:Lenny · 同公司:Claude Code · 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同公司:Claude Code、ChatGPT · 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《2026-04-19-lennys-why-half-of-product-managers-are-in-trou》]] —— 同嘉宾:Lenny · 同公司:OpenAI · 同概念:智能体 (agent)
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)、计算机使用 (computer use)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《2026-06-07-lennys-father-of-the-ipod-and-iphone-on》]] —— 同嘉宾:Lenny · 同公司:OpenAI
- [[2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for|《2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for》]] —— 同嘉宾:Lenny · 同概念:品味 (taste)
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《2026-07-19-lennys-netflix-cpto-on-ai-and-the-future》]] —— 同嘉宾:Lenny · 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella：Microsoft Build特别跨界对谈》]] —— 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《神话之后的红队评估 — Zico Kolter与Matt Fredrikson，Gray Swan》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《为什么前沿生态必须开放》]] —— 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《为什么 AI 基础设施必须为「Agent 体验」进化》]] —— 同概念:智能体 (agent)
- [[2026-01-25-lennys-why-your-product-stopped-growing|《2026-01-25-lennys-why-your-product-stopped-growing》]] —— 同嘉宾:Lenny
- [[2026-03-22-lennys-the-art-of-influence-jessica-fain|《2026-03-22-lennys-the-art-of-influence-jessica-fain》]] —— 同嘉宾:Lenny
- [[2026-04-26-lennys-snapchat-ceo-why-distribution-is|《2026-04-26-lennys-snapchat-ceo-why-distribution-is》]] —— 同嘉宾:Lenny
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto》]] —— 同概念:智能体 (agent)

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
