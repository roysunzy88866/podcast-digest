---
title: 从避战大模型到押注智能体：Modal 的推理基础设施进化史
podcast: Latent Space
date: 2026-07-08
source_url: https://www.latent.space/p/modal2026
duration: "57:42"
type: episode
cover: "#0e7490"
description: Modal CTO 剖析从开发者体验转向智能体体验的推理云进化路径。
host: "[[swyx]]"
guests: ["[[Akshat Bubna]]"]
cohosts: ["[[Vibhu]]"]
companies: ["[[Modal]]", "[[Kubernetes]]"]
concepts: ["[[智能体]]", "[[AX]]", "[[DX]]", "[[沙箱]]", "[[推理]]", "[[弹性推理]]", "[[投机解码]]", "[[DeFlash]]", "[[Auto Endpoints]]", "[[装饰器]]"]
category: 智能体
tags:
  - 智能体
---

# 从避战大模型到押注智能体：Modal 的推理基础设施进化史

> [!info] 关联
> **嘉宾**:[[Akshat Bubna]]
>
> **主持**:[[swyx]]
>
> **联合主持**:[[Vibhu]]
>
> **涉及公司**:[[Modal]] · [[Kubernetes]]
>
> **概念**:[[智能体]] · [[AX]] · [[DX]] · [[沙箱]] · [[推理]] · [[弹性推理]] · [[投机解码]] · [[DeFlash]] · [[Auto Endpoints]] · [[装饰器]]
>
> **来源**:[Latent Space](https://www.latent.space/p/modal2026)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-07-08-latent-space-modal.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

Modal CTO 剖析从开发者体验转向智能体体验的推理云进化路径。

Akshat 是 [[Modal|Modal]] 的 CTO，他和 CEO Erik、另一位联创 [[Vibhu|Vibhu]] 一起，把 Modal 打造成了 AI 时代一个独特的[[推理|推理]]与[[智能体|智能体]]运行平台。本集的对话从 Modal 为什么在 ChatGPT 爆火前一年就加入了 GPU 聊起，一路延伸到他们如何在[[投机解码|投机解码]]、容器网络、智能体体验（[[AX|AX]]）等关键技术点上做判断。全文可以分为三个部分：第一部分讲 Modal 的产品哲学和差异化护城河；第二部分拆解推理层的技术硬功夫；第三部分讨论智能体时代的基础设施新需求。

## 从装饰器到智能体体验

Modal 最初并不是一家 GPU 推理公司。Akshat 回忆，Erik 最早的出发点是想做一个更好的运行时（runtime，程序运行的环境），解决工作流编排产品太难用的问题 [00:48 [[Akshat Bubna|Akshat Bubna]]]。而难用的根源在于必须部署在 [[Kubernetes|Kubernetes]]（一种管理容器的系统）上，但 Kubernetes 的设计更偏向缓慢扩展的 Web 服务器，无法适应 AI 时代频繁突发（bursty，指流量短时间内剧烈飙升）的计算需求 [02:50 Akshat Bubna]。

为了解决配置复杂的问题，Modal 推出了核心的 DSL（领域特定语言）层：开发者只需在代码上加上[[装饰器|装饰器]]（decorator，一种包裹函数的特殊语法），就能定义硬件需求和扩展方式，基础设施需求与业务代码完美协同部署 [03:30 [[swyx|swyx]]]。这让 Modal 引以为傲的开发者体验（[[DX|DX]]）脱颖而出。

工具变了，人怎么办？这正是 Modal 团队思考的下一个问题。随着 Claude Code、Codex 等智能体开始自动编写工具代码，开发者逐渐不再直接看代码。Modal 敏锐地把 SDK 团队的目标，从优化开发者体验（DX）转向了优化「智能体体验」（AX） [04:54 Akshat Bubna]。背后的逻辑很直接：为什么要让一个智能体去阅读数百个 Kubernetes 文件、编写甚至没有类型的 YAML，而它其实只需在装饰器里做几个更改，就能获得一个自我配置的运行时 [05:05 Akshat Bubna]？虽然人类不再逐行读代码，但「可观测性」变得前所未有的重要——仪表盘和 CLI 成了人类监督智能体行为的关键 [05:46 Akshat Bubna]。

## 推理的硬功夫：快照与投机解码

解决了人机交互的体验问题，接下来是 Modal 在推理引擎内部做的硬核技术优化。Akshat 强调，Modal 最大的用例是[[弹性推理|弹性推理]]（elastic inference，根据流量自动伸缩算力的推理服务）。为了满足音频公司 Suno、视频公司 Runway 等客户波动极大的流量，Modal 把自动扩展做到了极致。

为了让频繁启动的模型更快响应，Modal 引入了 GPU 快照（snapshotting，保存运行状态以便瞬间恢复）技术。它可以提取 torch 编译好的模型状态并保存，下一次调用时就能跳过漫长的加载过程，启动速度快得多 [13:51 Akshat Bubna]。对于强化学习（RL）中需要频繁生成环境的场景，甚至有时瞬间需要十万个[[沙箱|沙箱]]，这种极速扩缩容的能力至关重要 [14:31 Akshat Bubna]。

除了扩缩容，提升大模型本身的推理速度也是重头戏。Akshat 介绍了他们的开源项目 [[DeFlash|DeFlash]]——一种基于块的投机解码（speculative decoding，让小模型先猜、大模型来验，从而加速推理）推测器 [16:06 Akshat Bubna]。传统的投机解码让小模型每次猜一个词（token），而 DeFlash 让它一次预测一整个块。

这块有一个反直觉的技术洞见：很多人花精力改进底层计算内核，但那通常只能带来几个百分点的速度提升；而通过增加推测器的「接受长度」（accept length，大模型认可小模型猜测的词数），能带来 2 到 4 倍的乘法级性能提升，且完全不影响生成质量 [17:37 Akshat Bubna]。为了让所有人都能用上这项前沿技术，Modal 推出了 [[Auto Endpoints|Auto Endpoints]]（自动化端点服务）。用户无需改代码，通过 UI 就能创建一个集成了所有优化的端点，如果想深度微调，随时可以「弹出」黑盒，拿回代码控制权 [18:38 Akshat Bubna]。

## 智能体时代的底层拼图：网络与超级云

软件和推理算法说完了，物理硬件与网络怎么组织？这正是 Modal 另一个不寻常的战略选择。他们不建自己的数据中心，而是构建了一个跨越 17 个云提供商的「超级云」（supercloud）容量池 [24:14 Akshat Bubna]。由于底层集成了大量可靠性不一的新云厂商（neocloud），Modal 在上面自建了一层可靠性兜底：如果某块 GPU 掉线，用户的工作负载完全不受影响 [25:15 Akshat Bubna]。

随着智能体工作负载变重，单纯的计算已经不够，Modal 发现智能体对容器网络提出了意想不到的需求。最典型的是，智能体经常需要对出站网络进行精细控制，比如在沙箱里跑一个「中间人代理」（man-in-the-middle proxy）来拦截日志，或控制对外域名进行凭据注入 [27:23 Akshat Bubna]。

为了支持跨节点的多容器任务，Modal 的沙箱升级成了类似 Pod 的结构，支持「Sidecar」（边车，与主容器共生的辅助容器）模式 [27:06 Akshat Bubna]。有趣的是，Modal 偶然建立的一个基于 IPv6 的私有 Overlay（覆盖）网络，原本只是为了给分布式训练做密钥交换用的，结果也被客户用来实现跨多节点沙箱通信等其他需求 [28:09 Akshat Bubna]。这印证了 Modal 的产品哲学：构建底层原语，让用户自己去探索极限。

主持人 swyx 提出了一个很有代表性的疑问：随着 Anthropic、OpenAI 等大模型厂商纷纷推出自家的「托管智能体」，会不会侵入 Modal 的地盘 [44:12 swyx]？Akshat 的判断是，大厂的托管产品适合起步，但当代码走向生产级，企业必然需要专门的沙箱提供商来控制网络隔离、文件持久化和快照恢复 [45:08 Akshat Bubna]。这条「专注底层」的战略，让 Modal 能够心无旁骛地吃下 AI 爆发带来的基础设施红利。

## 本集带走

1. **智能体体验（AX）正在接棒开发者体验（DX）**：基础设施的设计目标，正从「让工程师写代码爽」转向「让智能体能无摩擦地自我配置、自我运行」，装饰器比复杂的 YAML 更适合智能体理解。
2. **投机解码是性价比极高的推理加速手段**：相比于死磕底层内核，优化「接受长度」能带来 2-4 倍的整体加速，且零质量损耗，Modal 开源的 DeFlash 证明了这一点。
3. **无数据中心的「超级云」模式跑通了**：不建机房、只做软件抽象层，通过兜底 17 家云厂商的底层不可靠性，反而换来了极致的弹性和硬件议价权。

## 金句(中英对照 · 过机器闸门三联校验)

> 我们在 2023 年 5 月就构建了沙箱，在任何人甚至知道这将成为一件事之前。  
> *we built sandboxes in May of 2023 before anyone was even knew this was going to be a thing.*  
> —— Akshat Bubna · [09:19] ^q1

> 这就是为什么你要让一个智能体去阅读数百个 Kubernetes 文件并编写甚至没有类型的 YAML，而它基本上可以在一个装饰器中做几个更改  
> *which is why would you have an agent read through hundreds of Kubernetes files and write YAML that's not even typed when it can basically make a couple of changes in a decorator*  
> —— Akshat Bubna · [05:05] ^q2

> 当你在做 rollouts 的时候，你有时需要十万个沙箱。  
> *When you're doing rollouts, you sometimes need 100,000 sandboxes.*  
> —— Akshat Bubna · [14:31] ^q3

> 改进内核只给你几个百分点的提升，而增加接受长度实际上是 2 到 4 倍的乘法性减少  
> *improving kernel only give you like few percentage points improvement and increasing except lengths literally is multiplicative decrease in two to four x*  
> —— Akshat Bubna · [17:38] ^q4

> 这是我们一直有所回避的一件事，就是为模型提供 API  
> *This is one thing we've kind of stayed away from is providing an API for models*  
> —— Akshat Bubna · [48:34] ^q5

## 相关单集

- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-06-22-latent-space-gray-swan|《让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《iPod之父Tony Fadell：反直觉的产品课》]] —— 同公司:Anthropic、OpenAI · 同概念:智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《Databricks 的智能体平台与数据库「圣杯」：Reynold Xin 与 Matei Zaharia 的技术蓝图》]] —— 同公司:Kubernetes · 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《Gusto CTO 的极简实验:5 人 10 周凭感觉编程造出 AI 产品》]] —— 同概念:智能体 (agent)、DX
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同概念:智能体 (agent)
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《1.2 个人 + 20 个 AI 智能体：SaaStr 的极简销售实验》]] —— 同概念:智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同概念:智能体 (agent)
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《1500 亿美元的隐形 AI 公司创始人：恐惧源于无知，最好的工作是独自安静地完成》]] —— 同概念:智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同概念:智能体 (agent)
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《对话 Notion 产品负责人 Max:AI 时代的产品方法论与人的主观能动性》]] —— 同概念:智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的未来工作预测：别等 AI 末日，用 Codex 重塑一切》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella 谈 AI 时代平台逻辑:私有评估是最大 IP》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人 Mark Pincus：想做出伟大产品，先学会「合法地抄袭」》]] —— 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:智能体 (agent)
- [[2025-12-07-lennys-surge-ai-edwin-chen|《Surge AI 创始人 Edwin Chen:我们教模型追逐多巴胺,而非真理》]] —— 同公司:Anthropic
- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同公司:Anthropic
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《Anthropic 增长负责人：用 Claude 自动化增长实验，把 PM 的活交给工程师》]] —— 同公司:Anthropic
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被迫转行，一半人迎来复兴》]] —— 同概念:智能体 (agent)
- [[2026-05-10-lennys-how-to-build-a-company-that-withstands|《《精益创业》作者 Eric Ries 新作导读：好公司为什么会「变坏」》]] —— 同公司:Anthropic
- [[2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for|《Adam Mosseri：AI 时代的团队重组与产品品味》]] —— 同公司:Anthropic
- [[2026-07-12-lennys-how-tech-workers-actually-feel-about|《科技圈情绪调查：一半人狂喜，一半人煎熬》]] —— 同公司:Cognition

*本集关键词:AI 基础设施 · 智能体 · 推理优化 · 多云架构 · 开发者体验*

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
