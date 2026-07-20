---
title: 为什么 AI 基础设施必须为「Agent 体验」进化
podcast: Latent Space
date: 2026-07-08
source_url: https://www.latent.space/p/modal2026
duration: "57:42"
host: "[[swyx]]"
guests: ["[[Akshat Bubna]]"]
cohosts: ["[[Vibhu]]"]
companies: ["[[Modal]]", "[[Suno]]", "[[Runway]]", "[[Ramp]]"]
concepts: ["[[Kubernetes]]", "[[无服务器]]", "[[沙箱]]", "[[智能体]]", "[[推理]]", "[[GPU 快照]]", "[[投机解码]]", "[[可观测性]]", "[[装饰器]]", "[[auto endpoints]]", "[[DeFlash]]", "[[modal bench]]", "[[后训练]]", "[[RDMA]]"]
tags:
  - AI 基础设施
  - 智能体体验
  - 弹性推理
  - 超级云
  - 沙箱
---

# 为什么 AI 基础设施必须为「Agent 体验」进化

> [!info] 关联
> **嘉宾**:[[Akshat Bubna]]
>
> **主持**:[[swyx]]
>
> **联合主持**:[[Vibhu]]
>
> **涉及公司**:[[Modal]] · [[Suno]] · [[Runway]] · [[Ramp]]
>
> **概念**:[[Kubernetes]] · [[无服务器]] · [[沙箱]] · [[智能体]] · [[推理]] · [[GPU 快照]] · [[投机解码]] · [[可观测性]] · [[装饰器]] · [[auto endpoints]] · [[DeFlash]] · [[modal bench]] · [[后训练]] · [[RDMA]]
>
> **来源**:[Latent Space](https://www.latent.space/p/modal2026)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-07-08-latent-space-modal.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

Modal从通用无服务器计算转向AI推理基础设施,深耕自动扩展、GPU快照与投机解码技术。

## 从Kubernetes的痛点到无服务器计算

Akshat 是 [[Modal|Modal]] 的 CTO。他回顾了公司的起点:CEO Erik 在创办公司时,思考的问题是「为什么工作流编排产品这么难用?」答案是:因为必须在 [[Kubernetes|Kubernetes]] 上运行 [00:55 [[Akshat Bubna|Akshat Bubna]]]。Kubernetes(一种管理容器的系统)设计初衷是为了缓慢扩展的 Web 服务器,并不适合需要频繁上下波动的计算密集型任务 [02:50 Akshat Bubna]。

他们的解法是构建一种新的运行时,并把基础设施的配置需求直接写进代码里,用[[装饰器|装饰器]](Python中一种在函数上方以`@`开头的语法,用于修饰函数行为)来表达。这种做法压缩了配置的表面积,让开发者不用花大量时间编写 YAML(一种常用于配置的数据序列化语言)[03:44 Akshat Bubna]。即使面临「这是不是一种DSL(领域特定语言)导致被锁定」的质疑,Modal 也坚持让用户保留对自己代码的控制权 [04:11 Akshat Bubna]。

有意思的是,他们在 ChatGPT 发布前一年就把 GPU 加入了产品,当时只是想做些经典[[推理|推理]],没想到后来会有这么大的需求 [02:13 Akshat Bubna]。

## 为智能体体验(AX)而设计

随着AI[[智能体|智能体]](能够自主调用工具的AI系统)的兴起,Modal 把原本针对开发者体验(DX)的 SDK 团队,调整去专门思考智能体体验(AX)[04:54 Akshat Bubna]。核心逻辑是:为什么你要让一个智能体去阅读数百个 Kubernetes 文件、编写甚至没有类型的 YAML,而它其实只需在一个装饰器里做几处改动,就能获得一个能自我配置的运行时,并实时看到更改生效 [05:05 Akshat Bubna]?

不过,Akshat 强调,即使在代码逐渐「黑盒化」的今天,[[可观测性|可观测性]](通过仪表盘等手段了解系统内部状态)依然极其重要——人类仍然需要去解释发生了什么并做出判断 [05:46 Akshat Bubna]。

## 沙箱的诞生与被低估的价值

Modal 在 2023 年 5 月就构建了[[沙箱|沙箱]](一种与主系统隔离的安全执行环境)。他们发布的第一个例子,是让智能体在一个循环里对自身进行迭代 [09:19 Akshat Bubna]。

> 【背景】当时是在2023年中。主持人提到,那时的模型尚未经过专门的后训练来理解循环和自我修正,工具调用能力也很弱,迭代 10 次后就会发散,产生不出任何有意义的东西。这解释了为何沙箱在沉寂了一两年后,直到去年才真正爆发。

主持人分享了自己曾用 Modal 的函数做过早期智能体原型的经历,感慨自己当年离做出现今某些大热产品的雏形如此之近,却没坚持下去 [08:54 [[swyx|swyx]]]。

## 弹性推理与核心客户

Modal 目前最大的用例是弹性推理。他们最初找到产品市场契合点,是在为自定义模型做推理 [12:23 Akshat Bubna]。他们刻意避开了拥挤的大语言模型赛道,服务了做音频的 [[Suno|Suno]]、做视频的 [[Runway|Runway]],以及机器人和计算生物学等公司 [12:28 Akshat Bubna]。

这些公司的共性是流量模式极不可预测:既有昼夜波动,也会因为产品发布而突然需要大量算力。而且它们通常在不同地区部署多种模型,这让自动扩展变得极难 [13:09 Akshat Bubna]。为此,Modal 引入了 [[GPU 快照|GPU 快照]](保存 GPU当前运行状态的技术),能把模型状态保存下来,让下一次调用启动得快得多 [13:51 Akshat Bubna]。

## 从黑盒到开源:进军LLM推理

Modal 后来决定更深入地做大语言模型推理,意识到他们在跨区域自动扩展上的独特优势 [15:33 Akshat Bubna]。他们不仅组建了能达到前沿模型性能的团队,还开源了许多成果。

其中一个重点是[[投机解码|投机解码]](让小模型先猜、大模型来验,加速推理)的技术 [[DeFlash|DeFlash]],这是一种基于块的推测器 [16:06 Akshat Bubna]。Akshat 指出,大家常谈论让内核变快,但改进内核往往只能带来几个百分点的提升,而增加草稿模型的「接受长度」(即被大模型接受的预测片段)却能带来 2 到 4 倍的乘法性加速,且没有质量损失 [17:36 Akshat Bubna]。

为了帮那些不想折腾代码的用户,他们推出了 Auto Endpoints。这是一个开箱即用、内置了各种优化(如 DeFlash)的端点。它提供完全的透明度——用户拿到代码,既能自己跑,也能随时跳出,回到完整的 Modal 体验中去微调 [18:55 Akshat Bubna]。

## 跨越云厂商的超级云策略

Modal 并不与做 Web 服务托管的平台(如 Render)竞争,而是专注于那些需要专用计算、需要大量扩展的差异化工作负载 [07:10 Akshat Bubna]。对于像 Cognition 这样的初创公司,Modal 甚至会派工程师入驻,以降低分布式开发的沟通延迟 [08:02 swyx]。

当被问及为何不建自己的数据中心时,Akshat 解释说,他们的差异化在于软件层 [24:37 Akshat Bubna]。目前,Modal 构建了一个跨越 17 个云提供商的容量池。由于许多新云的可靠性参差不齐,Modal 在上面构建了自己的可靠性层:一旦某个 GPU 掉线,用户的工作负载不会受影响 [25:15 Akshat Bubna]。主持人将此总结为「所有云的超级云」[25:37 swyx]。

## 面向智能体的底层原语

随着更多后台智能体走向生产环境,Modal 提供了越来越丰富的底层组件。例如 [[Ramp|Ramp]](一家金融科技公司)的会计智能体,就利用了快照和快速扩展,实现了极具反应性的体验 [22:45 Akshat Bubna]。

在网络层面,Modal 支持带 Sidecar(在主容器旁挂载的辅助容器)的沙箱,方便用户运行中间人代理来记录 RL(强化学习,通过奖励机制训练模型)日志或控制出站流量 [27:06 Akshat Bubna]。

为了让一个容器集群内的多节点能互相通信,他们用 IPv6 地址做了一个覆盖网络(Overlay Network,建立在另一网络之上的虚拟网络)。有趣的是,他们做这个本来是为了支持分布式训练,结果发现用户自己摸索出了许多未写入文档的用法 [28:09 Akshat Bubna]。

此外,在 Modal 上进行多节点训练时,他们利用 [[RDMA|RDMA]](远程直接内存访问,一种绕过操作系统直接读写远端内存的技术)来绕过 TCP 网络,实现节点间的高速传输,内部网络速度可达每秒 3 万亿比特 [32:24 Akshat Bubna]。不过,Modal 并非为了大规模预训练而生,而是瞄准了大量中小规模的[[后训练|后训练]](在已有模型基础上做特定优化)需求 [33:04 Akshat Bubna]。

## 用AI自动化AI部署

Akshat 透露了一个内部的「自动推理」代码库。本质上,他们用一个智能体自动化了 FDE(现场部署工程师)的工作:智能体会自动运行一系列不同参数的扫描,甚至调用分析器、调整配置,最终找到最优方案,比如把你的 GPU 从 H200 更改为 B200 [34:19 Akshat Bubna]。他们的 FDE 团队本质上就是应用推理研究员 [34:58 Akshat Bubna]。

既然大模型现在很擅长生成 Modal 代码,Modal 也顺势推出了 Modal Bench,专门用来测试当前大模型还做不到的那些难事,好进一步完善产品 [36:52 Akshat Bubna]。

## 算力规划与定价杠杆

面对算力短缺和内存需求,增长迅速的 Modal 必须在容量规划上下大功夫。他们专门设立了 Compute Strategy(计算策略)团队 [38:08 Akshat Bubna]。这背后涉及大量有趣的财务问题,比如一年期和三年期预留的混合比例、供应链走势预测等,主持人戏称这就像航空公司通过燃油对冲来控制成本 [39:04 swyx]。

控制了整个技术栈,也意味着能给客户提供更多定价杠杆。例如,对于计算生物学这类不在乎延迟、只求结果的批处理任务,Modal 可以提供更便宜的批处理层,客户在接下来的 24 小时内拿到结果即可 [39:34 Akshat Bubna]。

## 展望未来

除了大语言模型,Modal 也服务于计算生物学和实体机器人部署等领域 [47:25 Akshat Bubna]。与 Replicate 等仅提供模型 API 的平台不同,Modal 刻意避开了低粘性的业余爱好者市场,坚持为那些需要深度的代码级灵活性的公司提供后端能力 [48:34 Akshat Bubna]。

主持人也提及了 CI/CD 市场的参与者(如 Gitpod 改名为 Ona)。Akshat 认为,构建时沙箱与运行时沙箱本质上是相通的,而 Modal 的运行时被证明是更好的形态 [54:06 Akshat Bubna]。无论是智能体运行大量 CI,还是未来由智能体编排视频生成的多步骤工作流,Modal 都将继续专注于基础设施这一层 [51:16 Akshat Bubna]。

## 金句(中英对照 · 过机器闸门三联校验)

> 就像我们在 2023 年 5 月构建了沙箱,在任何人甚至知道这将成为一件事之前。  
> *like we built sandboxes in May of 2023 before anyone was even knew this was going to be a thing.*  
> —— Akshat Bubna · [09:19] ^q1

> 这是我们一直有所回避的一件事,就是为模型提供 API  
> *This is one thing we've kind of stayed away from is providing an API for models*  
> —— Akshat Bubna · [48:34] ^q2

> 我们不是试图与世界上的 render 竞争,因为我们认为对我们的差异化的是那些需要专用计算,需要大量上下扩展的工作负载。  
> *we're not trying to compete with the renders of the world because we think the differentiator for us are the workloads that need specialized compute, need to scale up and down a lot.*  
> —— Akshat Bubna · [07:10] ^q3

> 而你基本上是在优化以成为所有云的超级云。  
> *sort of optimize for being the super cloud of all clouds.*  
> —— swyx · [25:37] ^q4

> 你可以给一个函数添加一个装饰器,然后你会得到一个 gpu 集群,并且它们已经建立了网络连接,所以你可以运行一个真正的无服务器的 speed 训练任务  
> *you can add a decorator to a function and you get a cluster of gpus and they have already been networking so you can run a speed training job that's truly serverless*  
> —— Akshat Bubna · [28:41] ^q5

> 它就像是构建时沙箱对比运行时沙箱,而事实上运行时更好。  
> *it's just like build-time sandboxes versus runtime sandboxes, and actually it turned out runtime was better.*  
> —— Akshat Bubna · [54:07] ^q6

> 我认为提供模型 API,其中一些最终服务的就像一个非常业余的市场,粘性低得多  
> *I think providing model APIs is some of it ends up serving like a really hobbyist market which is much less sticky*  
> —— Akshat Bubna · [48:40] ^q7

## 相关单集

- [[2026-06-24-latent-space-databricks|《为什么前沿生态必须开放》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)、Kubernetes
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-06-22-latent-space-gray-swan|《神话之后的红队评估 — Zico Kolter与Matt Fredrikson，Gray Swan》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella：Microsoft Build特别跨界对谈》]] —— 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:智能体 (agent)
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《2026-07-19-lennys-netflix-cpto-on-ai-and-the-future》]] —— 同概念:智能体 (agent)

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
