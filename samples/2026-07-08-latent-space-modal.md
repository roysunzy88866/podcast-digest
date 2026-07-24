---
title: "AI 基础设施如何为智能体重新设计:Modal 联合创始人的方法"
podcast: Latent Space
date: 2026-07-08
source_url: https://www.latent.space/p/modal2026
duration: "57:42"
host: "[[swyx]]"
guests: ["[[Akshat Bubna]]"]
cohosts: ["[[Vibhu]]"]
companies: ["[[Modal]]", "[[Kubernetes]]"]
concepts: ["[[智能体]]", "[[沙箱]]", "[[推理]]", "[[投机解码]]", "[[智能体体验]]"]
tags:
  - AI 基础设施
  - 弹性推理
  - 智能体沙箱
  - 多云策略
  - 智能体体验(AX)
---

# AI 基础设施如何为智能体重新设计:Modal 联合创始人的方法

> [!info] 关联
> **嘉宾**:[[Akshat Bubna]]
>
> **主持**:[[swyx]]
>
> **联合主持**:[[Vibhu]]
>
> **涉及公司**:[[Modal]] · [[Kubernetes]]
>
> **概念**:[[智能体]] · [[沙箱]] · [[推理]] · [[投机解码]] · [[智能体体验]]
>
> **来源**:[Latent Space](https://www.latent.space/p/modal2026)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-07-08-latent-space-modal.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

Modal 从无服务器运行时切入,靠自动扩展、沙箱与多云容量池,成为 AI 智能体与推理的首选基础设施。

本集嘉宾是 [[Modal|Modal]] 的联合创始人 [[Akshat Bubna|Akshat Bubna]]。Modal(一个专为 AI 与[[智能体|智能体]]应用从头构建原语的云平台)近期刚完成 C 轮融资。在本集中,他与主持人 [[swyx|swyx]] 和 [[Vibhu|Vibhu]] 深入回顾了 Modal 的演进历程:从最初为了摆脱 [[Kubernetes|Kubernetes]](一种管理容器的系统)的繁琐而构建的通用无服务器(即按需起停、无需常驻)运行时,如何一步步演化为今天 AI 智能体和[[推理|推理]]工作负载的首选底层平台。全文将沿着四个线索展开:前两个关于工具与基础设施的演进(从运行时到智能体[[沙箱|沙箱]]、再到大规模弹性推理),后两个关于底层架构的取舍与产品的边界(没有自有数据中心的多云容量池策略,以及对[[智能体体验|智能体体验]]的重新定义)。

## 为什么需要比 Kubernetes 更好的运行时

故事的起点并非 AI。Akshat 最初通过一位投资者认识了 CEO Erik。当时,Erik 一直在思考一个问题:为什么工作流编排产品这么难用?结论是因为它们必须在 Kubernetes 上运行,而 Kubernetes 很难管理,且主要为缓慢扩展的 Web 服务器用例设计 [00:55 Akshat Bubna]。

Modal 想构建的是一种更好的运行时(程序执行的环境)。最初的想法是,如果有了更好的运行时,很多通过无服务器函数(如 ETL 数据处理、任务队列)处理的突发性计算需求就能被很好地满足 [01:46 Akshat Bubna]。一个关键的开发体验突破是「装饰器」(一种代码语法,将基础设施需求与代码写在一起)。Modal 希望开发者不用花大量时间编写 YAML(一种繁琐的配置语言),而是直接在代码里压缩并声明配置 [03:44 Akshat Bubna]。

> 【背景】Kubernetes 和 YAML 是云原生时代的标配,但学习曲线陡峭。Modal 的洞察是:把这些复杂的配置压缩进几行 Python 装饰器代码里,极大降低了开发者的认知负担。当时(大约在 ChatGPT 发布前一年)他们只是在产品中加入了 GPU 和 A100 芯片支持,主要处理计算机视觉等经典推理,并未预料到随后 LLM(大语言模型)的爆发。

## 从开发者体验(DX)到智能体体验(AX)

说完了 Modal 最初为何要构建更好的运行时,接下来是它如何顺应时代,变成智能体友好的平台。

随着 AI 智能体的兴起,Modal 甚至把 SDK 团队的思考方式从「开发者体验」(DX)转变为「智能体体验」(AX)[04:54 Akshat Bubna]。核心逻辑是一脉相承的:既然人类开发者不想读成百上千个 Kubernetes 文件、写没有类型检查的 YAML,那么 AI 智能体同样不该做这些事。智能体只需在一个装饰器里做几处修改,就能获得一个能自我配置的运行时,并实时看到变更生效 [05:05 Akshat Bubna]。

现在大家关心的是,既然代码都交给智能体写了,基础设施层还有什么价值?这正是接下来要解答的疑问。主持人提出了一个负面论点:如果没人看代码了,那把基础设施和代码放在一起还有意义吗 [05:38 swyx]?Akshat 承认人们确实不怎么盯着代码看了,但他指出「可观测性」(通过仪表板等手段监控系统状态)变得前所未有地重要。即使很多诊断功能已经被推到了命令行界面(CLI)供智能体自行调用,但最终仍需要人类去解读现象、做出判断 [05:46 Akshat Bubna]。

## 为智能体构建沙箱:超前预判与自动化扩展

工具变了,使用工具的方式也变了。既然 Modal 为智能体提供了这么好的底层,那它是如何预判到智能体革命的呢?

早在 2023 年 5 月,Modal 就构建了沙箱(一种隔离的安全执行环境),「在任何人甚至知道这将成为一件事之前」[09:19 Akshat Bubna]。当时他们拿 Small Developer 做了第一个实验:把智能体放进一个循环里,让它对自身进行迭代。但在那个模型还没经过后训练(针对特定任务微调)的时代,模型在 10 次迭代后就会发散,产生不出任何有意义的东西 [10:01 Akshat Bubna]。

尽管沙箱经历了一段沉寂期,但其价值在 RL(强化学习)爆发后彻底显现。如今,当公司在进行 RL 时(如每隔几小时对模型做一次 RL),或者在进行大规模 Rollout(策略部署)时,工作负载是极度突发的。「当你在做 rollouts 的时候,你有时需要十万个沙箱」[14:31 Akshat Bubna]。这对调度系统提出了极高要求,而这正是 Modal 擅长的:它最初找到产品市场契合点,就是靠为 Suno(音频)、Runway(视频)等拥有不可预测流量模式的公司做自定义模型的弹性推理 [12:23 Akshat Bubna]。

## 追逐前沿推理性能:投机解码与 Auto Endpoints

光有调度还不够,推理本身的性能也要做到极致。这是 Modal 深入 LLM 推理领域的下一个关键动作。

在推理加速方面,Modal 开源了一款名为 DeFlash 的基于块的推测器。Akshat 花时间解释了[[投机解码|投机解码]](让小模型先猜、大模型来验,加速推理)的原理 [16:50 Akshat Bubna]:用一个小型草稿模型在前面预测 token(模型处理的基本单元),大模型随后批量验证。这里有一个反直觉的技术洞见——业内总在谈论改进底层内核,但那通常只能带来几个百分点的提升;而增加预测的「接受长度」却能带来 2 到 4 倍的乘法级提速,且完全不会降低输出质量 [17:37 Akshat Bubna]。

为了让更多公司用上前沿级别的性能,Modal 推出了 Auto Endpoints(自动端点服务)。它让不想深度接触代码的用户,也能从 UI 或 CLI 创建一个端点,内置了 DeFlash 等所有优化,但完全不设黑盒——用户随时可以获取代码自行运行或深度微调 [19:10 Akshat Bubna]。这区别于那些只提供模型 API 的服务商,Modal 面向的是需要更高灵活性的产品级公司。

## 基础设施哲学:不建数据中心,做「超级云」

推理性能和调度都到位了,那底层的物理算力从哪来?这正是 Modal 最反直觉的战略选择。

惊人的是,Modal 没有自建数据中心。相反,他们构建了一个跨越 17 个云提供商的容量池 [24:14 Akshat Bubna]。在这么多供应商(包括各种新云)之间调度,可靠性是个大问题。Modal 的解法是在上面构建自己的可靠性层:如果某个 GPU 掉线,用户的工作负载完全不受影响。这让他们能用比普通用户多得多、也便宜得多的云容量 [25:15 Akshat Bubna]。swyx 将此形容为优化为「所有云的超级云」[25:37 swyx]。因为没有数据中心的重资产包袱,他们能将资金和精力全部聚焦在软件层的差异化上,并快速扩张。

这种底层架构还催生了意想不到的功能。比如,Modal 内部构建了一个使用 IPv6 地址的 overlay 网络(覆盖网络)。它最初只是作为多节点训练产品所需的基础组件 [28:20 Akshat Bubna],但后来用户发现它可以用于沙箱间的私密通信。Akshat 指出,当你在 Modal 上做多节点训练时,他们使用 RDMA(一种绕过 TCP 网络协议、在节点间极快传输数据的技术),内部网络速度可达每秒 3 万亿比特(3 terabit),这是大规模训练所需的标准 [32:36 Akshat Bubna]。

## 智能体时代的边界与产品取舍

有了强大的基础设施,最后一个话题是:在这个 AI 巨头(如 Anthropic、OpenAI)亲自下场做托管智能体的时代,Modal 的定位在哪里?

当被问及基础模型实验室提供的托管智能体是否会挤压 Modal 的生存空间时,Akshat 表现得很从容。他认为这些大厂的托管产品适合作为起点,但当公司(如 Ramp)要构建生产级、面向外部客户的智能体时,他们必然需要对计算原语有更深的控制权:比如控制持久化存储、进行快照与恢复、控制网络出入等 [44:39 Akshat Bubna]。这正是专业沙箱提供商的用武之地。

关于智能体的安全与权限,主持人试探性地提出:是否未来操作系统的内核就是一个大模型,由 LLM 来做权限中介?Akshat 对此持怀疑态度。他认为在沙箱层面,必须有硬性的护栏(安全边界)来防止数据泄露,LLM 可以负责更软的、灵活的协调工作,但不能没有硬边界 [43:47 Akshat Bubna]。

此外,Modal 在生态拓展上有着清晰的节奏。他们认为「CI/CD 市场本质上也是沙箱」[54:07 Akshat Bubna],只不过 Gitpod(后改名 Ona)等做的是构建时沙箱,而 Modal 做的是运行时沙箱。运行时沙箱在配置镜像、挂载存储上拥有不同的优势。在编程语言上,Modal 最初押注 Python,但现在 TypeScript SDK 被大量使用,因为很多用 Modal 的智能体开发者其实并不做底层机器学习 [55:04 Akshat Bubna]。

## 本集带走

1. **智能体体验(AX)是开发者体验(DX)的延续**:不要让智能体去读复杂的 YAML 配置文件。把基础设施需求内联到代码装饰器中,让智能体能自我配置并实时看到结果,是最高效的执行方式。
2. **弹性与突发性是 AI 推理的真正痛点**:无论是 RL 训练时瞬间需要的十万个沙箱,还是各种多模态模型的全球流量波动,能否在多云容量池中极速、无缝地扩展,比单纯提供 GPU 算力更关键。
3. **保持硬边界与灵活性**:在大模型尝试接管一切(如权限中介)的当下,底层基础设施仍需提供硬性的安全护栏。把复杂的底层(如 RDMA 网络、内存快照)包装成开发者/智能体可即插即用的原语,不绑定、不设黑盒,才能赢得构建生产级产品的公司。

## 金句(中英对照 · 过机器闸门三联校验)

> 为什么你要让一个智能体去阅读数百个 Kubernetes 文件并编写甚至没有类型的 YAML,而它基本上可以在一个装饰器中做几个更改  
> *why would you have an agent read through hundreds of Kubernetes files and write YAML that's not even typed when it can basically make a couple of changes in a decorator*  
> —— Akshat Bubna · [05:06] ^q1

> 我们在 2023 年 5 月构建了沙箱,在任何人甚至知道这将成为一件事之前。  
> *like we built sandboxes in May of 2023 before anyone was even knew this was going to be a thing.*  
> —— Akshat Bubna · [09:19] ^q2

> 当你在做 rollouts 的时候,你有时需要十万个沙箱。  
> *When you're doing rollouts, you sometimes need 100,000 sandboxes.*  
> —— Akshat Bubna · [14:31] ^q3

> 但改进内核只给你几个百分点的提升,而增加接受长度实际上是 2 到 4 倍的乘法性减少  
> *but improving kernel only give you like few percentage points improvement and increasing except lengths literally is multiplicative decrease in two to four x*  
> —— Akshat Bubna · [17:37] ^q4

> 这是我们一直有所回避的一件事,就是为模型提供 API  
> *This is one thing we've kind of stayed away from is providing an API for models*  
> —— Akshat Bubna · [48:34] ^q5

## 相关单集

- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-06-24-latent-space-databricks|《Databricks 的智能体时代布局：统一调度、开源治理与数据库重写》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-04-23-lennys-how-anthropics-product-team-moves|《对话 Anthropic 产品负责人 Cat Wu:AI 时代 PM 如何跟上「每周发布」的疯狂节奏》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《给 AI 智能体装上「安全带」:Gray Swan 的攻防实战》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|《OpenAI Codex lead on the new shape of product work | Andrew Ambrosino》]] —— 同公司:OpenAI · 同概念:智能体 (agent)
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同概念:智能体 (agent)
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《用 20 个 AI 智能体替代 10 人销售团队：SaaStr 创始人的前沿实战》]] —— 同概念:智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同概念:智能体 (agent)
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《估值 150 亿的隐形 AI 公司 Applied Intuition:给自动驾驶卡车的焦虑开一剂务实药方》]] —— 同概念:智能体 (agent)
- [[2026-03-22-lennys-the-art-of-influence-jessica-fain|《别怪高管不懂你：产品经理的向上影响力心法》]] —— 同概念:智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被淘汰，构建者迎来黄金期》]] —— 同概念:智能体 (agent)
- [[2026-04-26-lennys-snapchat-ceo-why-distribution-is|《Snap CEO Evan Spiegel:在AI时代,做最会创新的公司》]] —— 同概念:智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的 AI 工作预测:智能体接管工作,但人类不会失业》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《专访 Satya Nadella:智能体时代的平台逻辑与企业护城河》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人：别想从零颠覆世界，靠复制才能创新》]] —— 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《No Figma. No Jira. No docs. How Gusto built a new product line with Claude Code | Eddie Kim (CTO)》]] —— 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:智能体 (agent)
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《在指数级增长公司做增长：Anthropic 增长负责人的打法》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-05-31-lennys-a-rational-conversation-on-where|《Benedict Evans:AI 像互联网一样重要,但现在只是 1997 年》]] —— 同公司:Anthropic、OpenAI
- [[2025-12-07-lennys-surge-ai-edwin-chen|《Surge AI 创始人 Edwin Chen:我们教模型追逐多巴胺,而非真理》]] —— 同公司:Anthropic
- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同公司:Anthropic
- [[2026-04-12-lennys-hard-truths-about-building-in-the-ai-era|《Keith Rabois：别问客户、别信心理安全、只招「木桶」》]] —— 同公司:Ramp
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《前 GitHub、现 Notion 产品负责人 Max:每个项目的前 10% 现在免费了》]] —— 同公司:Kubernetes
- [[2026-05-10-lennys-how-to-build-a-company-that-withstands|《《精益创业》作者 Eric Ries 新作导读：好公司为什么会「变坏」》]] —— 同公司:Anthropic
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《Tony Fadell：造出 iPod 和 iPhone 的人，怎么看 AI 时代的造物法则》]] —— 同公司:OpenAI

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
