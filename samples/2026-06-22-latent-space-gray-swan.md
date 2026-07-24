---
title: "给 AI 智能体装上「安全带」:Gray Swan 的攻防实战"
podcast: Latent Space
date: 2026-06-22
source_url: https://www.latent.space/p/gray-swan
duration: "66:13"
guests: ["[[Zico Kolter]]", "[[Matt Fredrikson]]"]
companies: ["[[Gray Swan]]"]
concepts: ["[[智能体]]", "[[红队测试]]", "[[提示词注入]]", "[[鲁棒性]]", "[[护栏]]", "[[Shade]]", "[[Signal]]"]
tags:
  - AI 安全
  - 智能体
  - 提示词注入
  - 红队测试
  - 护栏
---

# 给 AI 智能体装上「安全带」:Gray Swan 的攻防实战

> [!info] 关联
> **嘉宾**:[[Zico Kolter]] · [[Matt Fredrikson]]
>
> **涉及公司**:[[Gray Swan]]
>
> **概念**:[[智能体]] · [[红队测试]] · [[提示词注入]] · [[鲁棒性]] · [[护栏]] · [[Shade]] · [[Signal]]
>
> **来源**:[Latent Space](https://www.latent.space/p/gray-swan)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-06-22-latent-space-gray-swan.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

卡内基梅隆教授创办 Gray Swan,用自动化红队测试与专属护栏模型,解决 AI 智能体部署中的安全漏洞。

当 AI [[智能体|智能体]]开始接管企业的真实工具和权限,随之而来的是前所未有的安全隐患:它们能被恶意指令操纵,窃取凭证、清空数据库。本集嘉宾是刚完成 A 轮融资的 AI 安全公司 [[Gray Swan|Gray Swan]] 的两位创始人——卡内基梅隆大学教授 Matt 和 Zico。他们指出,AI 的漏洞与传统的软件漏洞截然不同,需要一套全新的攻防思维。全文将顺着这条主线展开:先讲为什么 AI 智能体引入了新风险,接着介绍 Gray Swan 如何用自动化手段「攻击」和「防守」这些模型,最后探讨智能体普及后,安全、身份与保险领域即将迎来的巨变。

## 与传统软件漏洞无关:AI 系统带来的是「相关故障」

AI 的变革力量毋庸置疑,但 [[Zico Kolter|Zico Kolter]] 指出,必须正视一个根本问题:这些系统的行为模式,与我们习惯的传统软件截然不同 [02:54 Zico Kolter]。

传统软件的漏洞往往是个体性的(比如某段代码存在缓冲区溢出),但 AI 系统具有本质上不同类型的漏洞。Zico 用一个词概括了这种新威胁的特征:**相关故障(correlated failures)**[03:23 Zico Kolter]。

> 【背景】相关故障:指大量系统因为使用了同一个底层组件,导致一旦该组件出现缺陷,所有系统会同时崩溃或被攻破。

在 AI 时代,所有人都在使用少数几个最前沿的模型。如果有人在这些被广泛使用的智能体(如 Codex 或 Cloud Code)中发现了漏洞,这就不是单点故障,而是直接催生出一类全新的、可大规模复制的漏洞利用手段 [03:42 Zico Kolter]。正因如此,Zico 认为,正如任何新平台诞生时都会催生独立的安全行业,AI 时代也需要专门的安全和保障提供商,而不仅仅依靠 AI 实验室自身的自我审查 [04:30 Zico Kolter]。

## 从「安全对齐」到「寻找软肋」:红队测试的自动化

既然风险不可避免,首要任务就是找到这些漏洞。Gray Swan 的核心业务之一便是[[红队测试|红队测试]](主动寻找系统安全漏洞的测试方法)。

当前很多前沿实验室(如 Anthropic)都在内部进行安全测试,但为什么他们还需要外包给 Gray Swan?[[Matt Fredrikson|Matt Fredrikson]] 介绍了他们两项突出的能力 [07:47 Matt Fredrikson]:

1. **众包红队社区**:他们运营着一个名为「race one arena」的竞技场社区,聚集了约 15,000 名红队成员。通过设立奖金池,他们能将测试目标游戏化,吸引全球高手来寻找绕过模型安全策略的方法 [08:24 Matt Fredrikson]。
2. **自动化红队测试系统 [[Shade|Shade]]**:他们训练了一个专门用于自动化寻找漏洞的模型家族 [08:38 Matt Fredrikson]。

> 【背景】前沿实验室:指 OpenAI、Anthropic 等研发最先进 AI 模型的机构。Anthropic 是 AI 初创公司,Codex 与 Cloud Code 是用于辅助编程的 AI 智能体。

最反直觉的一点是,前沿模型虽然能力强大,但天生极其不擅长自我审查。Zico 解释,由于这些模型内置了大量的安全[[护栏|护栏]],如果你直接让它们去攻击或越狱另一个模型,它们往往会基于安全训练而拒绝执行 [10:07 Zico Kolter]。安全能力不会随着模型变大而自然增长,必须经过专门训练。而 Gray Swan 训练出的专用红队系统 Shade,在某些限定任务的测试中,寻找漏洞的能力已经超越了人类红队测试员 [11:14 Zico Kolter]。

顺着自动化这个话题,Zico 还抛出了一个更宏大的判断:他认为,AI 编程智能体将极大推动机械可解释性(Mechinterp,即逆向工程神经网络以理解其内部机制的科学)的发展。过去这门学科进展缓慢,因为它需要大量枯燥的假设测试。但未来,智能体可以自动化运行成千上万次对照实验。他甚至提出,我们最应该优先用 AI 自动化的科学,就是「研究 AI 本身的科学」[17:36 Zico Kolter]。

## 不可信的内容与敏感数据:致命三角

说完了怎么「攻」,接下来是核心的「防」。要理解防御,首先要理解攻击是如何发生的。

Zico 引入了由 Simon Wilson 提出的「致命三角」概念。这解释了[[提示词注入|提示词注入]](间接在数据中植入恶意指令)构成最高风险的三个必要条件 [34:05 Zico Kolter]:

1. 智能体必须能够**摄取来自不可信来源的外部数据**。
2. 智能体必须**拥有访问私有内部信息或执行高权限操作的能力**。
3. 智能体具备**向外发送数据(泄露)的能力**。

当这三点同时满足时,一场灾难性的安全事件就酝酿成功了。

面对这种风险,最自然的想法是调整系统提示词,或者在代码中加入一些硬性约束(比如写一段 Python 脚本限制访问)。但 Zico 指出,企业内部的合规策略通常是大量、复杂且无形的,仅靠提示词或简单的代码硬约束根本无法兼顾。企业真正需要的是一种能够根据自然语言书写的策略,智能判断上下文是否违规的机制 [31:23 Zico Kolter]。

## 在可用性与安全间寻找平衡:护栏模型 Signal

既然单靠基础模型自身的安全对齐不够用,外部工具就成了必需品。为此,Gray Swan 推出了第三款核心产品——一个名为 [[Signal|Signal]](C-Y-G-N-A-L)的专属护栏过滤模型 [27:49 Zico Kolter]。

Signal 像是一个智能体专属的高级防火墙。它位于用户、大语言模型(LLM)以及各种工具调用之间,双向审查数据。它不仅会解析传入的外部不可信内容,寻找潜在的提示词注入,还会在智能体发起对外工具调用时进行拦截,检查是否违反了企业自定义的数据使用政策 [38:46 Zico Kolter]。

Zico 强调,[[鲁棒性|鲁棒性]](抵抗对抗性攻击的能力)本身就是一种需要专门训练的能力。单纯把基础模型做得更大,它并不会自动变得更安全。IPI 基准测试(间接提示词注入评估)的结果也印证了这一点:模型的通用能力(如在 GPQA Diamond 基准上的表现)与其抵抗提示词注入的能力之间,几乎没有相关性 [28:49 Matt Fredrikson]。

> 【背景】GPQA Diamond:一个高难度的研究生水平问答基准测试,常用于衡量模型的智商与专业知识水平。

不过,Signal 并非银弹。Zico 坦言,对于仅进行简单代码编写的编程智能体,Signal 表现良好。但对于像 OpenClaw 这种全面接管计算机使用权限的通用智能体而言,要保护每一个比特和每一种可能的工具使用仍是未来的工作 [49:40 Zico Kolter]。安全本质上是一场权衡:把智能体关在完全隔离的沙箱里最安全,但也彻底扼杀了它的能力。Gray Swan 的目标,就是将那条「可用性与安全性」的帕累托曲线,尽可能推向最理想的右上角 [47:44 Zico Kolter]。

> 【背景】OpenClaw:可能指具备全面计算机操作能力的智能体系统;沙箱指一种隔离的运行环境,限制程序对真实系统的访问。

## 智能体原生身份与 AI 保险:即将到来的 2026

工具变了,围绕工具的人与制度也必须随之改变。话题最后延伸到了企业级部署面临的现实挑战。

首先是智能体的身份与权限问题。目前最常见的做法是「智能体直接继承用户本人的所有权限」[51:55 Zico Kolter]。但这极其危险。Matt Fredrikson 指出了企业在落地时面临的两难:如果不给权限,智能体就寸步难行;如果每次操作都需要用户明确同意,人们又会麻木地疯狂点击「同意」,这反而可能引发智能体之间的权限提升攻击 [53:09 Matt Fredrikson]。

Zico 预测,未来的破局点在于「角色隔离」。就像人类在生活中能自如切换工作与家庭身份一样,未来的智能体将拥有基于不同应用场景的独立配置文件,以此作为权限隔离的最小可行方案 [53:40 Zico Kolter]。

其次,市场的商业化闭环正在形成。一个新兴的 AI 承保(保险)市场正在崛起。Zico 认为,这与 Gray Swan 的业务是天作之合。保险公司可以用 Shade 等红队工具来严格评估一家公司的 AI 部署风险;一旦发现风险过高,企业就可以被引导部署 Signal 这样的护栏系统来降低风险,从而获得保险资格 [61:12 Zico Kolter]。这就像购买传统网络保险前必须出示已部署的防御措施一样。

> 【背景】SOC 2:一种针对企业数据安全与合规性的行业标准审计,通常是企业间达成大额采购合作的前提门槛。

虽然目前还没有像 SOC 2 那样被监管机构普遍接受的 AI 合规框架,但趋势已经不可逆转。Zico 解释了公司名称「Gray Swan(灰天鹅)」的由来:它有别于完全无法预料的黑天鹅事件,灰天鹅指的是那些极有可能发生、你隐约能看到它逼近,但尚未造成毁灭性打击的事件 [65:22 Zico Kolter]。大规模的 AI 安全事件必将发生,而现在正是企业提前布局、抢占先机的时刻。

## 本集带走

1. **大不等于更安全**:模型能力的提升与抵抗对抗性攻击的能力(鲁棒性)并不呈正相关。基础模型变大不会自动修复安全漏洞,鲁棒性必须通过专门的外部护栏模型(如 Signal)来强制训练和保障。
2. **智能体红队测试正在超越人类**:由于前沿模型自身的安全对齐限制了它们自我审查的能力,训练专门的红队模型(如 Shade)不仅比人工更高效,在特定任务下甚至能找到更多、更反直觉的漏洞。
3. **AI 安全离不开系统级的隔离与权限设计**:没有任何单一的技术能彻底消灭提示词注入。真正安全的部署,必须结合智能体层的专属过滤模型、底层的标准安全实践(如身份验证、访问控制),以及未来基于场景隔离的「智能体原生身份」机制。

## 金句(中英对照 · 过机器闸门三联校验)

> 一般来说,这个问题在于前沿模型在自动化红队测试方面极其糟糕,因为它们内置了大量的保障措施。  
> *So generally speaking, the issue with this is that frontier models are extremely bad at automated red teaming because they have a lot of safeguards built into them.*  
> —— Zico Kolter · [09:58] ^q1

> 也许我们首先应该自动化的科学是可解释性的科学,是的,即分析机器学习本身以及分析深度学习本身的科学。  
> *maybe the first science we should automate is the science of interpretability yes the science of analyzing machine learning itself and analyzing deep learning itself.*  
> —— Zico Kolter · [17:35] ^q2

> 所以具备鲁棒性的能力同样也不是随着规模天真地增长的。  
> *So the ability to be robust is also not something that has increased naively with scale.*  
> —— Zico Kolter · [27:04] ^q3

> 如果你只是把一个模型做得越来越大,它不会变得更安全。  
> *If you just make a model bigger and bigger, it will not get safer.*  
> —— Zico Kolter · [27:32] ^q4

## 相关单集

- [[2026-03-22-lennys-the-art-of-influence-jessica-fain|《别怪高管不懂你：产品经理的向上影响力心法》]] —— 同概念:护栏 (guardrails)、智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同概念:提示词注入 (prompt injection)、智能体 (agent)
- [[2026-04-23-lennys-how-anthropics-product-team-moves|《对话 Anthropic 产品负责人 Cat Wu:AI 时代 PM 如何跟上「每周发布」的疯狂节奏》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《Databricks 的智能体时代布局：统一调度、开源治理与数据库重写》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-07-08-latent-space-modal|《AI 基础设施如何为智能体重新设计:Modal 联合创始人的方法》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同概念:智能体 (agent)
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《用 20 个 AI 智能体替代 10 人销售团队：SaaStr 创始人的前沿实战》]] —— 同概念:智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同概念:智能体 (agent)
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《估值 150 亿的隐形 AI 公司 Applied Intuition:给自动驾驶卡车的焦虑开一剂务实药方》]] —— 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被淘汰，构建者迎来黄金期》]] —— 同概念:智能体 (agent)
- [[2026-04-26-lennys-snapchat-ceo-why-distribution-is|《Snap CEO Evan Spiegel:在AI时代,做最会创新的公司》]] —— 同概念:智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的 AI 工作预测:智能体接管工作,但人类不会失业》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《专访 Satya Nadella:智能体时代的平台逻辑与企业护城河》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人：别想从零颠覆世界，靠复制才能创新》]] —— 同概念:智能体 (agent)
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|《OpenAI Codex lead on the new shape of product work | Andrew Ambrosino》]] —— 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《No Figma. No Jira. No docs. How Gusto built a new product line with Claude Code | Eddie Kim (CTO)》]] —— 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:智能体 (agent)
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《Netflix 产品负责人谈 AI 时代：每个人都能做一切,但卓越的专长不会消失》]] —— 同概念:护栏 (guardrails)
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《在指数级增长公司做增长：Anthropic 增长负责人的打法》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2025-12-07-lennys-surge-ai-edwin-chen|《Surge AI 创始人 Edwin Chen:我们教模型追逐多巴胺,而非真理》]] —— 同公司:Anthropic
- [[2026-02-26-lennys-ai-is-critical-for-humanitys-survival|《Cisco 高管 Jeetu Patel：如何把老牌巨头推向 AI 时代，以及他的六维制胜框架》]] —— 同概念:护栏 (guardrails)
- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同公司:Anthropic
- [[2026-05-10-lennys-how-to-build-a-company-that-withstands|《《精益创业》作者 Eric Ries 新作导读：好公司为什么会「变坏」》]] —— 同公司:Anthropic
- [[2026-05-31-lennys-a-rational-conversation-on-where|《Benedict Evans:AI 像互联网一样重要,但现在只是 1997 年》]] —— 同公司:Anthropic

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
