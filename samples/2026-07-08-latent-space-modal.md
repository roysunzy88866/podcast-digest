---
title: 为什么 AI 基础设施必须为「Agent 体验」进化
podcast: Latent Space
host: swyx
guests: Akshat Bubna (Modal CTO)
date: 2026-07-08
source_url: https://www.latent.space/p/modal2026
duration: "57:42"
---

# 为什么 AI 基础设施必须为「Agent 体验」进化

> [!info] 本集
> Latent Space · 嘉宾 Akshat Bubna (Modal CTO) · 主持 swyx · 2026-07-08 · 57:42
> 来源:https://www.latent.space/p/modal2026

## 一句话 TLDR

Modal 从无服务器运行时演进为 AI 基础设施平台,靠弹性调度、深度系统优化和智能体优先体验构筑壁垒。

## 从「无服务器运行时」到「AI 基础设施」

Akshat Bubna 是 Modal(原转写稿误作 Modo/moto/model)的 CTO。他在访谈中梳理了 Modal 的发展脉络:最初,CEO Erik 在思考为何工作流编排产品如此难用时,意识到核心痛点在于它们都依赖 Kubernetes(一个容器编排系统,简称 K8s),而 K8s 为缓慢扩展而设计,无法适应频繁上下突发的计算需求 [00:55 Akshat Bubna]。Modal 的初衷是打造一个更出色的「运行时」(程序运行的基础环境),支持突发的数据处理和任务队列 [01:46 Akshat Bubna]。

> 【背景】转写稿中将公司名 Modal 多次识别为 Modo/moto/model。根据上下文,这些均指云计算平台 Modal。Akshat 提到的 CEO Eric 实际拼写应为 Erik。原文提及的「3C」轮融资,行业通称为 Series C(C 轮融资)。

在 ChatGPT(一款对话式 AI)问世前一年,他们就将 GPU 加入产品,但当时主要是为了经典推理(如计算机视觉模型)和运行 XGBoost 等算法 [02:13 Akshat Bubna]。

## 押注「智能体体验」

当被问及如今有了 Claude Code 等工具,开发者体验(DX)是否已改变时,Akshat 表示,Modal 已将 SDK 团队的工作重心从传统的开发者体验转向了「智能体体验」(Agent Experience, 简称 AX)[04:54 Akshat Bubna]。

他认为,既然智能体能通过一个装饰器(附加在代码上以声明资源需求的标记)完成配置并实时查看运行结果,就不应强迫它去阅读数百个 K8s 配置文件、编写缺乏类型检查的 YAML(一种数据序列化语言)[05:05 Akshat Bubna]。即便现在人们越来越少直接看代码,但「可观测性」(系统内部状态的可见性)依然至关重要,人类需要通过仪表盘和命令行工具(CLI)去解释运行状况并做决策 [05:46 Akshat Bubna]。

## 深耕自动伸缩与 LLM 推理

在 AI 推理领域,Modal 找到的产品市场契合点是「自定义模型的弹性推理」[12:23 Akshat Bubna]。他们服务的客户(如做音频的 Suno、做视频的 Runway)面临高度不可预测的流量。这些公司在全球不同地区部署大量不同模型,使得跨区域的自动伸缩变得极具挑战,而这正是 Modal 的强项 [13:02 Akshat Bubna]。

为提升性能,他们还整合了 GPU 快照技术——将已编译的模型状态保存下来,让下一次调用启动得更快 [13:51 Akshat Bubna]。此外,Modal 深入底层,开源了名为 DeFlash(转写稿作 dflash)的基于块的推测器,大幅提升了 LLM 推理效率。

> 【背景】Akshat 解释了「投机解码」:用一个较小的「草稿模型」提前预测词汇(token),再由大模型批量验证。只要草稿模型预测准确(即「接受长度」足够长),就能获得数倍于原模型的速度提升。

Akshat 指出,虽然业界常谈优化内核,但这通常只能带来几个百分点的性能提升;而增加接受长度则是 2 到 4 倍的乘法级提升 [17:37 Akshat Bubna]。基于此,他们推出了 Auto Endpoints,让用户无需编写代码即可获得内置优化的推理端点 [18:38 Akshat Bubna]。

## 构建「超级云」与网络原语

Modal 不自建数据中心,而是建立了一个跨越 17 个云提供商(包括众多新云)的容量池,并自建可靠性层 [24:14 Akshat Bubna]。这种策略让他们能比单一用户使用多得多的算力 [25:20 Akshat Bubna]。

在智能体需求驱动下,网络功能日益重要。他们开发了基于 IPv6 的覆盖网络 i6pn,最初用于多节点训练 [28:09 Akshat Bubna]。此外,沙箱现已支持 Sidecar(辅助容器),允许在一个容器 Pod 中运行多个容器,方便用户控制出站流量或运行中间人代理进行强化学习(RL)日志记录 [27:06 Akshat Bubna]。这些底层能力使得跨节点通信成为可能,尽管部分用户已自行摸索出未公开文档的用法 [27:39 Akshat Bubna]。

## 专注基础设施:避开模型 API

面对 Replicate 等平台,Akshat 强调 Modal 刻意避开提供简单的模型 API,因为这类服务往往面向非专业用户,缺乏粘性。Modal 服务的是需要深度定制代码的产品公司 [48:34 Akshat Bubna]。例如,Suno 拥有完全自定义的模型架构,必须在代码层面进行调整,这正是 Modal 的优势所在 [50:24 Akshat Bubna]。

对于 Gitpod(已更名为 Ona)等在 CI/CD 市场的竞争,Akshat 认为无论是构建时还是运行时的沙箱,底层机制相似,而运行时的配置面更为强大 [54:06 Akshat Bubna]。因此,随着编程智能体驱动大量 CI 需求,Modal 也非常看好这一领域的潜力 [52:15 Akshat Bubna]。

## 金句(中英对照 · 过机器闸门三联校验)

> 改进内核只给你几个百分点的提升,而增加接受长度实际上是 2 到 4 倍的乘法性减少
>
> *Improving kernel only give you like few percentage points improvement and increasing except lengths literally is multiplicative decrease in two to four x*
>
> —— Akshat Bubna · [17:38]

> 为什么你要让一个智能体去阅读数百个 Kubernetes 文件、编写甚至没有类型的 YAML,而它基本上可以在一个装饰器中做几个更改
>
> *why would you have an agent read through hundreds of Kubernetes files and write YAML that's not even typed when it can basically make a couple of changes in a decorator*
>
> —— Akshat Bubna · [05:06]

> 我们在 2023 年 5 月就构建了沙箱,在任何人甚至知道这将成为一件事之前。
>
> *like we built sandboxes in May of 2023 before anyone was even knew this was going to be a thing.*
>
> —— Akshat Bubna · [09:19]

> 这是我一直有所回避的一件事,就是为模型提供 API
>
> *This is one thing we've kind of stayed away from is providing an API for models*
>
> —— Akshat Bubna · [48:34]

> 我们不试图与世界上的 render 竞争,因为我们认为我们的差异化在于那些需要专用计算的工作负载
>
> *we're not trying to compete with the renders of the world because we think the differentiator for us are the workloads that need specialized compute*
>
> —— Akshat Bubna · [07:10]

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
