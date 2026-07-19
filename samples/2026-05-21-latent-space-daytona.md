---
title: 赋予AI智能体计算机——Daytona创始人Ivan Burazin
podcast: Latent Space
date: 2026-05-21
source_url: https://www.latent.space/p/daytona
duration: "70:18"
guests: ["[[Ivan Burazin]]"]
companies: ["[[Daytona]]"]
concepts: ["[[智能体]]", "[[沙箱]]", "[[突发负载]]", "[[裸金属]]", "[[计算机使用]]", "[[托管型 Kubernetes]]"]
tags:
  - 智能体基础设施
  - 计算沙箱
  - 突发负载
  - RPA与计算机使用
  - 开源策略
---

# 赋予AI智能体计算机——Daytona创始人Ivan Burazin

> [!info] 关联
> **嘉宾**:[[Ivan Burazin]]
>
> **涉及公司**:[[Daytona]]
>
> **概念**:[[智能体]] · [[沙箱]] · [[突发负载]] · [[裸金属]] · [[计算机使用]] · [[托管型 Kubernetes]]
>
> **来源**:[Latent Space](https://www.latent.space/p/daytona)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-05-21-latent-space-daytona.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

Daytona 为智能体打造毫秒级启动的裸金属沙箱,迎击 RL 训练与后台智能体的算力新挑战。

本期对话围绕**[[智能体|智能体]](agent,指能自主执行任务的 AI 程序)**的底层计算基础设施展开。主持人和嘉宾 [[Ivan Burazin|Ivan Burazin]]([[Daytona|Daytona]] CEO)是多年老友。Ivan 曾创办过浏览器端开发环境 Code Anywhere,后来又做过名为 Shift 的技术大会。如今他带着对底层基础设施的深刻理解,创立了 Daytona,并在去年做出了一个历史性的转型。整场对话不仅盘点了「智能体到底需要什么样的计算机」,还深入探讨了算力市场的爆发现状、Windows/Mac [[沙箱|沙箱]]的实战痛点,以及下一代基础设施的演进方向 [00:04 Ivan Burazin]。

## 从「为人服务的开发环境」到「为智能体服务的沙箱」

故事要从 2024 年底说起。当时 Ivan 从主持人那里获得了 Devin(一款知名的 AI 软件工程师)的访问权限,同时 OpenDevin(现已更名为 OpenHands 的开源项目)也刚刚出现。Ivan 敏锐地察觉到 AI 智能体可能是一个巨大的趋势,于是尝试把公司原本「为人类工程师自动化开发环境」的工具结合 OpenDevin,作为一个 SaaS(软件即服务)推出去 [07:09 Ivan Burazin]。

结果出乎意料:没什么人注册使用这个 SaaS。然而,大量正在开发智能体的团队却主动找上门来,问他们:「我的智能体需要一个计算沙箱(一种安全隔离的代码执行环境)运行时,你们能做吗?」Ivan 意识到,这是一个全新的市场 [07:39 Ivan Burazin]。

起初,Daytona 拿原本给人类准备的底层设施去给智能体用,但遭到了 20 到 30 个试用客户的一致拒绝。大家普遍觉得「这不就是 EC2 或者虚拟机吗,为什么不一样?」这迫使 Ivan 疯狂补习 AI 行业知识。在一个跨年夜,他凭借直觉编程出了第一版专门面向智能体的沙箱最小可行产品 [10:30 Ivan Burazin]。

> 【背景】转写稿中嘉宾将「凭借直觉编码」说成了 vibe coded,这是科技圈流行词,指高度依赖 AI 辅助、凭感觉快速生成代码的开发方式。

当团队带着重写的新版本重新联系客户时,原本约定 15 分钟的通话全部延长到了 25 到 30 分钟,每一个客户都在追问:「我的 API key 呢?在哪里?」这个瞬间,Ivan 确信他们真正踩中了市场的痛点 [10:21 Ivan Burazin]。

## 智能体需要的「可组合计算机」

Daytona 如今给自己的定位是「面向智能体的可组合计算机」。为什么不用「沙箱」这个词?因为「沙箱」容易让人误解为仅仅是个临时测试环境 [05:29 Ivan Burazin]。

Ivan 认为,智能体就像人类一样,需要不同配置的计算机来完成不同任务。就像他的妻子是建筑师,需要一台带 3D 显卡的 Windows 电脑来做渲染;智能体在执行各类任务时,也需要动态调整 CPU、内存或挂载 GPU 的能力。更重要的是,智能体不希望自己的「电脑」在工作还没完成时被关闭,它们需要能像人类合上笔记本盖子一样暂停,再打开时恢复原状(即有状态的快照机制)[12:41 Ivan Burazin]。

> 【背景】为了满足智能体对速度和持久状态的苛刻要求,Daytona 选择了直接运行在裸金属(未安装虚拟化层的纯物理服务器)上,而不是像大多数提供商那样套用虚拟机或 firecracker(一种轻量级虚拟化技术),从而获得了极快的数据读写速度和极低的网络延迟 [13:54 Ivan Burazin]。

## 两种截然不同的算力负载

随着业务爆发(主持人提到 Daytona 报告了惊人的 74% 环比增长),Daytona 发现客户的工作负载分化成了截然不同的两类 [06:21 Ivan Burazin]:

1. **后台智能体或长时间运行智能体**:例如 Cognition、Lovable 或 Harvey。它们的使用模式与人类类似,呈现「跟随太阳」的规律:中午负载最高,午夜最低,周末下降。这属于正常的波动。
2. **RL 与评估**:主要用于强化学习训练或模型评估。这类负载的使用模式呈现「方块状」——一旦启动,就直接跑到 100% 满载,然后突然停止。而且研究员们往往在午夜睡前启动任务,这与正常的日间波动截然不同 [18:33 Ivan Burazin]。

这种极其突发的尖峰式负载给计算提供商带来了前所未有的挑战。Daytona 的平均利用率只有 15%,但峰值会瞬间冲到 90%。通过举办 Compute Conference(计算大会),Ivan 发现整个 AI 基础设施圈——从 Neon 的 Nikita 到 Parallel 的 Parag——都在被这种不可预测的尖峰负载折磨 [21:33 Ivan Burazin]。

## 竞争策略:速度与易用性

在基准测试中,Daytona 的表现相当亮眼。启动单个沙箱算上网络延迟仅需 60 毫秒;如果同时并发启动 50,000 个沙箱,大约需要 75 秒(其他公开数据显示竞品可能需要长达 30 分钟)[16:36 Ivan Burazin]。

但 Ivan 坦言,速度和基准测试只是入场券。在 RL 训练等场景中,他们真正打败的是[[托管型 Kubernetes|托管型 Kubernetes]](如 EKS 或 GKS)。Kubernetes 的交互接口太复杂,而 Daytona 提供了类似 Twilio 或 Stripe(两者均以开发者体验极佳著称)的简单 API 和 SDK。并且,Daytona 沙箱允许动态调整大小,几乎不会发生内存溢出,甚至支持在 Docker 容器里再嵌套运行 K3S(一种轻量级 Kubernetes),这解锁了大量在其他提供商上无法完成的复杂工作负载 [28:04 Ivan Burazin]。

## 押注「计算机使用」

本期最重磅的信息之一是 Daytona 秘密押注了 computer use([[计算机使用|计算机使用]])。这源于一个庞大的市场痛点:全球约有一亿知识工作者,其薪水总额高达十万亿美金。其中很大一部分工作被锁死在 Windows 的传统应用程序里,没人愿意重写这些老旧系统 [33:09 Ivan Burazin]。

> 【背景】转写稿中嘉宾多次提及 RPA(机器人流程自动化)和 OOM(Out Of Memory,内存耗尽)。RPA 指用软件模拟人类操作老旧系统;OOM 指程序因内存不足而崩溃。

主持人分享了自己用 Mac mini 虚拟沙箱做董事会报告的经历:即使接入了各种现代化的数据库,系统依然提示「缺失数据」。最后只能让智能体去模拟人类操作,登录网站、点击导出数据,才能真正端到端完成任务 [35:40 Ivan Burazin]。

目前,想在云上启动一个 Windows 沙箱需要 3 到 5 分钟。Daytona 将其缩短到了秒级,并支持快照和分叉。相比之下,macOS 沙箱则面临苹果公司严格的授权限制:每台物理机只能运行两个虚拟机,且每 24 小时只能授权给一个不同用户。这意味着如果按秒收费,机器就会闲置一整天。Ivan 直言苹果公司此举是在自断财路 [33:36 Ivan Burazin]。

## 开源策略与组织文化

作为一家开源公司,Daytona 的新沙箱产品采用了 AGPL 3 许可证。这是一种巧妙的「防云白嫖」策略:它允许企业自由使用,但如果你想用它构建竞争产品,就必须同样开源你的代码。虽然纯粹的「开源信徒」认为这不够彻底,但 Ivan 发现,开源代码反而促进了客户对云产品的消费——因为开发者可以直接把仓库扔给智能体,让 AI 获得最完整的上下文来理解 Daytona 是怎么运作的 [48:38 Ivan Burazin]。

在公司运营上,Ivan 是个彻头彻尾的拼命三郎。在 25 人的团队中,约有 13 人是与他合作超过 7 年的老战友。这种基于极高信任度的文化,造就了令人难以置信的客户响应速度。当客户在 Slack 上求助时,Daytona 的团队真的能在 5 分钟内拉起一个语音 Huddle(临时语音会议)解决问题。这种极致的响应速度成了他们赢得客户的关键差异化因素 [57:28 Ivan Burazin]。

## 看见未来:被重塑的 Git 与 CI

在访谈末尾,Ivan 分享了几个极其前瞻的洞察。首先是 Git 和 GitHub 的危机。目前大量客户正在构建编程智能体(如 Devin 的竞品),他们发现传统的 Git 流程太慢了,因为 Git 设计的初衷是给人类使用的「内循环之后」的产物。为了追求速度,甚至有客户把整个代码库塞进沙箱,定期全部打包成一个 JSON 文件传到 S3 上,自己搞了一套极其原始但飞快的版本控制 [52:49 Ivan Burazin]。

其次是 CI(持续集成)的崩溃。随着智能体每天创建海量的代码提交,CI 系统已经变成了所有人的瓶颈。一家公司每天产生一千个提交,全在 CI 队列里排队等待。Daytona 的技术完全有能力替代传统的 CI Runner 机器 [54:34 Ivan Burazin]。

最后是对整个市场的预判。Semi Analysis(一家知名半导体分析机构)的 Dylan Patel 在他们的会议上指出,GPU 短缺之后,内存和 CPU 很快将成为下一个算力瓶颈 [46:25 Ivan Burazin]。Ivan 认为,在这个增速疯狂的市场里,**预先囤积 CPU 将成为未来占领市场的关键战术**。最终,将会诞生一个专门为智能体构建的超级云,它包含沙箱、网络搜索和专为 AI 设计的数据库——这就是 Daytona 想要成为的那个存在 [69:38 Ivan Burazin]。

## 金句(中英对照 · 过机器闸门三联校验)

> 但如果你想一次启动 50,000 个,我们现在大约需要 75 秒。  
> *But if you want to spin up 50,000 at once, we are now at about 75 seconds.*  
> —— Ivan Burazin · [16:36] ^q1

> 我们以前从未有过这种不可预测的工作负载,无论是在人类计算机还是人类  
> *unpredictable workloads that we've never had before in human computer or human*  
> —— Ivan Burazin · [23:29] ^q2

> PC 市场大约等于云市场。  
> *The PC market is about equal to the cloud market.*  
> —— Ivan Burazin · [45:42] ^q3

> 市场正在给那些转售 token 的 SaaS 供应商增加溢价。  
> *the market is adding premium to SaaS vendors that are reselling tokens.*  
> —— Ivan Burazin · [61:44] ^q4

> 整个基础设施市场每个月以 40% 左右的速度增长。  
> *The entire infrastructure market is growing 40% plus or minus month over month.*  
> —— Ivan Burazin · [67:14] ^q5

## 相关单集

- [[2026-06-24-latent-space-databricks|《为什么前沿生态必须开放》]] —— 同公司:Neon · 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-07-08-latent-space-modal|《为什么 AI 基础设施必须为「Agent 体验」进化》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-06-22-latent-space-gray-swan|《神话之后的红队评估 — Zico Kolter与Matt Fredrikson，Gray Swan》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella：Microsoft Build特别跨界对谈》]] —— 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:智能体 (agent)

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
