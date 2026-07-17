---
title: 为什么 AI 基础设施必须为「Agent 体验」进化
podcast: Latent Space
host: swyx
guests: Akshat Bubna (Modal CTO)
date: 2026-07-08
source_url: https://www.latent.space/p/modal2026
duration: "57:42"
tags:
  - AI基础设施
  - Agent
  - 算力
  - 沙箱
---

# 为什么 AI 基础设施必须为「Agent 体验」进化

> [!info] 本集
> Latent Space · 嘉宾 Akshat Bubna (Modal CTO) · 主持 swyx · 2026-07-08 · 57:42
> 来源:https://www.latent.space/p/modal2026

## 一句话 TLDR

Modal 联合创始人谈从开发者体验转向智能体体验、弹性推理、跨云容量池与开源推理优化。

## 从「更好的运行时」到「AI 应用的基础设施」

Modal 最初的想法很简单:Kubernetes(一种管理容器的系统)太难用了,尤其是对那些需要频繁、突发地调整算力的工作负载。因此,Modal 想构建一种「更好的运行时」,把基础设施需求直接写在代码里的「装饰器」中,让开发者不用再写一堆 YAML 配置文件。当时(大约 2021-2022 年),他们更多考虑的是经典推理(如计算机视觉)和数据工程,并在 ChatGPT 发布前一年就加入了 GPU 支持。他们没想到这一决定后来意义如此重大 [00:34-02:17 Akshat Bubna]。

如今,Modal 已经是一家为 AI 应用从零构建基础原语的云平台,覆盖推理、训练、批处理和沙箱工作负载,但不包括传统的常驻网络服务器。他们定位在那些需要专用计算、需要大量弹性伸缩的工作负载上 [06:46-07:24 Akshat Bubna]。

## 智能体体验(AX):和开发者体验(DX)高度重合

随着 AI 智能体的发展,Modal 把 SDK 团队的关注点从「开发者体验」扩展到了「智能体体验」。核心观点是:与其让一个智能体去阅读数百个 Kubernetes 配置文件、编写没有类型检查的 YAML,不如让它直接在代码装饰器里做几处修改,就能获得一个能自我配置的运行时 [05:04-05:15 Akshat Bubna]。

主持人 swyx 提出一个反面论点:如果现在人们都不看代码了,那代码怎么写还重要吗?Akshat 认为,即使代码本身变成了「黑箱」,**可观测性(即通过仪表板、日志等监控系统状态)仍然至关重要**,而且可能比直接看代码更重要。为了适应智能体,Modal 把很多诊断功能推到了命令行界面(CLI),方便智能体自己排查问题,同时让人类来解释情况并做判断 [05:46-06:08 Akshat Bubna]。

## 沙箱:被低估的早期押注

Modal 在 2023 年 5 月就推出了沙箱(一种隔离的代码执行环境),远在「智能体需要沙箱」成为行业共识之前。他们当时发布的第一个例子,是把一个早期的代码智能体放进沙箱里自我迭代循环。但那时候模型能力跟不上,迭代 10 次左右就会发散,产生不出有意义的东西 [09:19-10:01 Akshat Bubna]。

直到去年,沙箱才真正「爆发」。swyx 自己曾基于 Modal 写过一个早期的代码智能体原型,差点做出了类似后来估值数十亿美元的 Cognition(做 Devin 的公司),但他没有坚持下来。Akshat 坦言,在事后看这一切都「太明显了」,但当时很难有那种内在信念,相信这些东西会变得那么好 [10:03-10:34 swyx / Akshat Bubna]。

## 弹性推理:最大用例与自动扩展的技术挑战

目前 Modal 最大的用例是**弹性推理**——尤其是为那些部署自定义模型(而非现成开源大模型)的公司提供推理服务,比如做音频的 Suno、做视频的 Runway,以及机器人、计算生物学公司。这些公司的流量模式极其不可预测,且通常要在不同地区部署大量不同模型,这让自动扩展变得非常困难 [12:20-13:18 Akshat Bubna]。

为了应对扩展带来的延迟和冷启动问题,Modal 引入了 **GPU 快照(在任务结束后保存 GPU 内存状态,如下次推理所需的编译好的模型,让下次调用启动快得多)** 技术 [13:51-13:57 Akshat Bubna]。

## 开源 DeFlash:投机解码的乘法级加速

在加速大模型推理方面,Modal 开源了他们的工作 **DeFlash(基于块的推测器)**。这背后是**投机解码(让小模型先猜、大模型来验,加速推理)** 技术。

> 【背景】传统推理是逐个 token 生成。如果用一个小模型(草稿模型)快速「预测」出一批候选 token,再让大模型一次性「验证」它们,由于大模型验证多个 token 的速度和生成一个差不多,整体就会快很多。

Akshat 强调了一个反直觉的技术洞见:很多人在卷「让单个计算内核快几个百分点」,但实际上,**增加「接受长度」(即小模型每次猜对、被采纳的 token 数量)能带来 2 到 4 倍的乘法级加速**。而这一切对最终质量没有任何损失,因为大模型验证机制确保了不会接受错误的 token [16:06-18:06 Akshat Bubna]。

基于这些优化,Modal 推出了 Auto Endpoints 产品。它允许用户直接从 UI 创建一个带有所有优化(内置 DeFlash)的推理端点。关键在于,它不是黑箱:用户可以拿到代码自己跑,成熟后可以退出到完整的 Modal 体验中进行微调 [18:38-19:35 Akshat Bubna]。

## 跨越 17 个云提供商的「超级云」策略

Modal 没有自己的数据中心,而是建立了一个跨越 17 个云提供商的「容量池」。这让用户能在全球各种云容量上运行工作负载。由于各家新云(除了 AWS/GCP/Azure 之外的云)的可靠性参差不齐,Modal 在上面构建了自己的可靠性层:如果某个 GPU 掉线,用户工作负载不受影响 [24:14-25:20 Akshat Bubna]。

> 【背景】Modal 把自己定位为「所有云的超级云」。这种模式让他们能专注于软件层的差异化,而不必投入巨资建数据中心。挑战在于如何管理算力供应链,这催生了专门的「算力策略」团队 [37:57-38:47]。

在弹性计算产品上,他们还在探索类似航空业对冲油价的方式,通过算力的时间套利(比如推出对延迟不敏感、24 小时内返回结果的「批量层」)来为客户提供更便宜的价格 [39:34-39:51 Akshat Bubna]。

## 专为智能体设计的网络原语

随着智能体架构复杂化,Modal 发现用户需要更强的网络控制:

1. **Sidecars**:沙箱现在是一个容器 Pod,可以运行多个容器。这让用户可以在沙箱里运行一个中间人代理,用来记录强化学习(RL)的日志或控制出口流量 [26:57-27:30 Akshat Bubna]。
2. **IPv6 私有网络**:这是一个用 IPv6 地址的 Overlay 网络(在物理网络之上构建的虚拟网络)。Modal 最初是为了自己的分布式训练产品构建的——给一个函数加个装饰器就能得到一个组好网的 GPU 集群。但用户发现它非常有用,甚至有人把它用于文档里没写过的场景 [28:09-29:12 Akshat Bubna]。
3. **多节点沙箱通信**:支持跨多个节点的沙箱之间通过 mTLS 通信 [27:39-28:01 Akshat Bubna]。

## 分布式训练与「自动研究」

当 swyx 质疑分布式训练的网络瓶颈时,Akshat 澄清了 Modal 的定位:他们不追求跨数据中心的超大规模预训练,而是聚焦于**较小规模的后训练(在已有模型基础上进一步训练)**。这类需求往往需要 RDMA(一种绕过 TCP 网络栈、直接在节点间高速传输数据的技术)和每秒 3 万亿比特的内部网络 [32:14-33:18 Akshat Bubna]。

一个有意思的内部实践是「自动研究」(Auto Research)。Modal 内部有一个叫 Auto Inference 的代码库,利用智能体来自动化前沿部署工程师(FDE)的工作:智能体会启动一系列参数扫描,跑 Nsight 分析器(性能分析工具),调整配置,甚至决定该用 H200 还是 B200 GPU [34:15-34:44 Akshat Bubna]。

## 商业模式:为什么不做「模型 API」?

主持人提到倒下的竞争对手 Replicate。Akshat 解释了 Modal 的战略取舍:

> 「我们一直有所回避的一件事,就是为模型提供 API。」[48:34 Akshat Bubna]

他认为,提供模型 API 最终服务的是一个粘性很低的业余爱好者市场。Modal 想服务的是那些构建产品、需要比单纯一个 API 更高灵活性的公司。他们的所有示例都是可调整的代码,而不是「给你一个 Token 去调用」。比如 Suno 用 Modal 做推理,是因为他们有完全自定义的模型架构,必须在代码层面去调整 [48:34-50:41 Akshat Bubna]。

## 总结:智能体时代的云计算

这次对话描绘了云计算在智能体时代的演进方向。swyx 指出,AI 工作负载的 GPU 与 CPU 比例从过去的 8:1 变成了接近 1:1,因为智能体频繁调用 CPU 密集型工具,限制因素在两者间不断摇摆 [23:37-24:05 swyx]。

面对基础模型实验室(如 Anthropic)推出托管智能体的竞争,Akshat 认为:托管智能体适合起步,但当公司要构建生产级、面向外部的智能体(如 Ramp 的会计智能体)时,他们需要对计算原语、文件持久化、网络控制有更深层的掌控。这正是专业沙箱提供商的角色 [44:19-45:14 Akshat Bubna]。

对 Modal 而言,从开发者体验到智能体体验的转变,核心在于可观测性、快速迭代以及通过 Modal Bench 基准测试来发现智能体的能力短板并补齐产品 [56:50-57:25 Akshat Bubna]。

## 金句(中英对照 · 过机器闸门三联校验)

> 为什么你要让一个智能体去阅读数百个 Kubernetes 文件、编写甚至没有类型的 YAML,而它基本上可以在一个装饰器中做几个更改,然后获得这种能够自我配置的运行时,能够实时看到它的更改在运行中生效。
>
> *why would you have an agent read through hundreds of Kubernetes files and write YAML that's not even typed when it can basically make a couple of changes in a decorator and it gets this sort of self-provisioning runtime of being able to see its changes live in action.*
>
> —— Akshat Bubna · [05:06]

> 我们在 2023 年 5 月构建了沙箱,在任何人甚至知道这将成为一件事之前。
>
> *like we built sandboxes in May of 2023 before anyone was even knew this was going to be a thing.*
>
> —— Akshat Bubna · [09:19]

> 改进内核只给你几个百分点的提升,而增加接受长度实际上是 2 到 4 倍的乘法性减少
>
> *improving kernel only give you like few percentage points improvement and increasing except lengths literally is multiplicative decrease in two to four x*
>
> —— Akshat Bubna · [17:38]

> 这是我们一直有所回避的一件事,就是为模型提供 API,因为我认为提供模型 API,其中一些最终服务的就像一个非常业余的市场,粘性低得多
>
> *This is one thing we've kind of stayed away from is providing an API for models because I think providing model APIs is some of it ends up serving like a really hobbyist market which is much less sticky*
>
> —— Akshat Bubna · [48:34]

> 一切都对 Modal 看好,只要它消耗更多基础设施。
>
> *Everything is bullish modal as long as it consumes more infra.*
>
> —— swyx · [45:54]

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译云端存档、本页不展示(可事后核对)。*
