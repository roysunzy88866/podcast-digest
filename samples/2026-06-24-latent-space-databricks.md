---
title: Databricks 的智能体平台与数据库「圣杯」：Reynold Xin 与 Matei Zaharia 的技术蓝图
podcast: Latent Space
date: 2026-06-24
source_url: https://www.latent.space/p/databricks
duration: "68:43"
type: episode
cover: "#0e7490"
description: 两位创始人详解智能体平台 Omnigen、打通交易与分析的 LTAP，以及从零重写的数据库引擎。
guests: ["[[Matei Zaharia]]", "[[Reynold Xin]]"]
companies: ["[[Databricks]]", "[[Snowflake]]", "[[MosaicML]]", "[[Neon]]"]
concepts: ["[[Omnigen]]", "[[LTAP]]", "[[HTAP]]", "[[Dream Engine]]", "[[智能体]]", "[[云沙箱]]", "[[上下文策略]]", "[[CDC]]", "[[第二系统综合征]]", "[[Spark]]"]
category: 智能体
tags:
  - 智能体
---

# Databricks 的智能体平台与数据库「圣杯」：Reynold Xin 与 Matei Zaharia 的技术蓝图

> [!info] 关联
> **嘉宾**:[[Matei Zaharia]] · [[Reynold Xin]]
>
> **涉及公司**:[[Databricks]] · [[Snowflake]] · [[MosaicML]] · [[Neon]]
>
> **概念**:[[Omnigen]] · [[LTAP]] · [[HTAP]] · [[Dream Engine]] · [[智能体]] · [[云沙箱]] · [[上下文策略]] · [[CDC]] · [[第二系统综合征]] · [[Spark]]
>
> **来源**:[Latent Space](https://www.latent.space/p/databricks)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-06-24-latent-space-databricks.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

两位创始人详解智能体平台 Omnigen、打通交易与分析的 LTAP，以及从零重写的数据库引擎。

[[Databricks|Databricks]] 是大数据领域的一家头部公司，本次 Data AI Summit 有 3 万人亲自到场。这期访谈的两位嘉宾是 Databricks 的联合创始人 [[Reynold Xin|Reynold Xin]] 与 [[Matei Zaharia|Matei Zaharia]]（同时也是知名计算框架 [[Spark|Spark]] 的作者）。本集聊了他们最近发布的两大核心动作：第一个是关于[[智能体|智能体]]怎么管——如何为 AI 编程智能体打造一个开源的托管与安全底座（平台名为 [[Omnigen|Omnigen]]）；第二个是关于数据怎么连——如何消灭繁琐的数据管道，把交易型数据库和分析型数据库在存储层统一起来（这个技术叫 [[LTAP|LTAP]]）。全文沿着这两条主线展开，最后还聊到了他们从零重写数据库引擎的野心，以及和竞争对手 [[Snowflake|Snowflake]] 的路线之别。

## 智能体大爆发：从「各自为战」到统一底座
节目一开始，Matei Zaharia 解释了 Databricks 为什么要做智能体的管理底座。起因是他们观察到公司内部出现了几条「汇合的线索」：一方面，高级工程师们在疯狂搭建自己的编程智能体工作流，但团队之间完全没法共享；另一方面，他们自己也在做各种数据科学智能体（比如内部叫 Genie 的智能体）。大家每隔几个月就要被迫切换底层模型或框架，而且如果不能共享会话历史，智能体几乎没法用于协作 [02:22 Matei Zaharia]。

随后，Reynold Xin 讲了一个让开发者极具共鸣的痛点，直接推动了「[[云沙箱|云沙箱]]」的诞生：为了在使用智能体编程时不中断，他不得不把笔记本电脑连着手机网络，开车去赴医生预约的路上，只要一遇红灯，就赶紧看一眼电脑上的智能体跑得怎么样了。他觉得「感觉就像我们回到了编程的黑暗时代」，明明身处云时代，却还要用本地电脑死守着一个编程任务 [06:12 Reynold Xin]。为了让沙箱真正好用，他还给平台提了具体需求：不仅要能支持协作，还要能直接打开终端、列出文件，甚至要把 Markdown 文件渲染好，彻底甩掉其他单一用途的编辑器 [07:41 Reynold Xin]。

## 安全与开销：给智能体装上「上下文护栏」
说完了「怎么把智能体跑起来」，接下来是一个让所有企业头疼的问题——安全。这也是 Matei 在 Omnigen 里最兴奋的部分。

Matei 指出，现在很多编程智能体的安全措施极其基础，只允许你设置「是」或「否」（比如「能不能读机密文件」「能不能从 NPM 装新包」）。这种非黑即白的选项把开发者逼到了死角。真正可怕的是风险的叠加：比如智能体不仅读了机密文档，同时还把它发布到了公司公网上。为了解决这种割裂，Omnigen 引入了「[[上下文策略|上下文策略]]（contextual policies，即根据智能体会话的实时状态和历史记录来动态决定是否放行某项操作的规则）」。系统会实时跟踪智能体的一举一动，如果它刚安装了一个可疑的新包，或者一口气读了一千份机密文档，系统就会果断拦截它把数据发到网外 [19:20 Matei Zaharia]。

除了安全，智能体「乱花钱」也是个现实问题。Matei 分享了一个真实案例：他让一个智能体去调试问题，结果它为了排查狂读日志文件、疯狂消耗 token，一个不小心就烧掉了 500 美元 [21:04 Matei Zaharia]。现在在他们的平台上，你可以直接给智能体划定预算，比如「只花 5 美元」，一旦超支它就会弹窗找你要授权。

更值得一提的是，Omnigen 选择了开源。Matei 坦言，如果市面上同时存在一个封闭和一个开源的智能体托管平台，长远赢的必定是开源——因为大家都能往里加库，网络效应会让它变得越来越强 [10:54 Matei Zaharia]。事实证明，项目周六刚发布，周一就已经收到了 400 个代码合并请求，有人加上了在 Kubernetes（一种管理容器的系统）上运行的功能，有人接入了各家初创公司的云沙箱 [11:56 Matei Zaharia]。

## 打通数据库的任督二脉：LTAP 与消灭数据管道
工具和安全的底座搭好了，接下来这集最硬核的技术登场了。主持人抛出了一个行业历史：过去十年大家都在谈论 [[HTAP|HTAP]]（试图用单一数据库同时搞定交易和分析），但往往两头都做不好。Reynold Xin 顺势介绍了他们的解法——LTAP。

要理解 LTAP，得先知道数据库分两类：一类是 OLTP（处理事务的数据库，比如 Postgres，专门干快速下单、改库存的活），另一类是分析型数据库（专门用来算「每个店每天赚多少钱」）。通常，为了不把跑交易的主数据库搞崩溃，大家得用 [[CDC|CDC]]（变更数据捕获，即读取数据库的增量日志去重建状态）把数据抽出来，扔到分析系统里去算 [27:53 Reynold Xin]。但 Reynold Xin 吐槽，这东西太脆弱了，业内甚至有个冷笑话管它叫「持续数据损坏」，因为只要交易库稍微改个表结构，整个数据管道就会崩溃，工程师经常要在半夜三点爬起来修管道 [30:37 Reynold Xin]。

> 【背景】主持人提到「Airbyte 成为 50 亿美元的公司」靠的就是做 CDC 管道；「Elasticsearch」也常被用来做日志分析。

Databricks 的 LTAP 思路是：不要试图去合并查询引擎，而是直接合并「存储层」。只要交易数据库在底层以列式格式直接把数据写到开放数据湖里，分析引擎就能零延迟、无管道地去直接读这些数据 [32:00 Reynold Xin]。Reynold Xin 坦言，最开始就算他们自己也不敢相信能成，但一位工程师灵光一闪做了个原型：利用存储集群里闲置的 CPU，把行数据转码成列数据，结果发现因为列式压缩更好，写入 S3 等对象存储反而更快了 [35:09 Reynold Xin]。

主持人问：既然智能体来了，这玩意儿有啥用？Reynold Xin 讲了个顿悟时刻：他和一位澳大利亚客户吃饭，客户抱怨线上服务出故障时，智能体只能看到服务的运行日志，却没法直接钻进数据库里看看到底是谁下了什么订单导致了问题。如果有了 LTAP，智能体能同时看懂机器日志和真实的业务数据，排查问题的能力直接提升十倍 [32:39 Reynold Xin]。

## 文化与野心：从零重写数据库引擎
说完了现阶段的突破，Reynold Xin 还分享了一个更疯狂的计划——从零重写一个数据库引擎（团队戏称它为 [[Dream Engine|Dream Engine]]）。市面上主流的分析引擎大多都有十年历史了，经过无数次缝缝补补，已经变成了一堆「屎山代码」（Databricks 的系统也不例外）。为了彻底根治，他们决定推倒重来 [44:00 Reynold Xin]。

做这事最大的风险是所谓的「[[第二系统综合征|第二系统综合征]]」：开发者在重写时往往容易好大喜功，加塞太多完美主义需求，最后永远无法发布。为了避开这个坑，Databricks 的工程师没有去拍脑袋设计算法，而是建了一座「数据库工厂」：他们拿了十年的海量真实运行轨迹，训练了一个机器学习模型。这个模型能极高保真度地预测某项算法在特定数据特征下到底跑得快不快 [46:30 Reynold Xin]。有了它，团队可以在开发时甚至运行时，动态选出最适合当下的算法。

如此大胆的创新，离不开公司极简的审批文化。主持人惊叹于他们这种大公司居然能允许工程师「不要先写一堆设计文档，直接做原型」。Reynold Xin 笑着说，就是在这种「直接试」的文化下，激烈的辩论才会被一行能跑通的代码迅速终结 [36:23 Matei Zaharia]。

## 路线之争：为什么是 Databricks 跑出来了
节目的最后，主持人问了一个尖锐的问题：和死对头 Snowflake 相比，你们做对的核心战略是什么？

Reynold Xin 给出了两个关键判断：一是「拥抱开放」，二是「天生为 AI 而生」。Snowflake 一开始走的是专有封闭路线，想把小部分高价值数据锁在自己的系统里做极速查询；而 Databricks 从第一天起就用 Parquet 这样的开放格式，哪怕一开始查询慢点，但客户能随意把海量数据接走。事实证明，今天所有企业都渴望开放，封闭格式已经被时代抛弃 [56:19 Reynold Xin]。

而在 AI 上，Matei 补充道，Snowflake 当时觉得「我们管好高价值数据就行」，但 Databricks 最早就是干大规模数据清洗（JSON 日志等）起家的，是从数据的上游起步的。结果发现，计算任务不可避免地会往上游转移，于是顺理成章地就把分析能力做起来了 [54:50 Matei Zaharia]。

聊到被收购的 Mosaic 团队，既然行业有大把人在做烧钱拼算力的通用大模型，Databricks 决定把力气花在刀刃上——做专门领域的小模型。比如他们做了一个文档视觉模型，专门用来把 PDF 或 Word 转成结构化的 JSON，不仅比前沿大模型准，而且成本便宜了 100 倍 [60:52 Matei Zaharia]。在他们看来，把数据放对位置、再放上智能体，传统软件就会被重写，「魔法」自然就会发生 [66:36 Reynold Xin]。

## 本集带走
1. **智能体需要「上下文安全」**：非黑即白的权限设置已经过时，根据会话历史动态拦截高危操作的「上下文策略」，以及直接给智能体划定预算，是企业落地 AI 编程的刚需。
2. **数据层合并比查询层合并更现实**：HTAP（试图用一个引擎干所有事）妥协太多，而 LTAP 直接统一存储层、允许分析引擎零延迟直读交易数据，才是真正能消灭数据管道的解法。
3. **大公司的创新靠「直接试」**：避免「第二系统综合征」的最佳方式，是用真实数据和机器学习模型来指导系统架构重写，用跑通的原型去终结无休止的会议辩论。

## 金句(中英对照 · 过机器闸门三联校验)

> 我让一个智能体去调试某个东西,它花了 500 美元,因为它决定读取大量日志文件并消耗大量 token。  
> *I asked an agent to debug something and it spent $500 because it decided to read a lot of log files and burn a lot of tokens.*  
> —— Matei Zaharia · [21:04] ^q1

> 想象一下我们的东西不是开放的。我们有某种智能体托管的东西,但它不是开放的。然后有一个开放的。从长远来看哪一个会赢?  
> *Imagine our thing wasn't open. We had some kind of agent hosting thing, but it's not open. And then there is an open one. Which one is going to win in the long run?*  
> —— Matei Zaharia · [10:56] ^q2

> CDC 是最无聊的之一,但也是驱动现代社会的最基础的操作之一。  
> *CDC is one of the most boring, but one of the most fundamental operations powering modern society.*  
> —— Reynold Xin · [30:30] ^q3

> 说它应该被称为持续数据损坏,因为你可能会在你的 LTP 数据库上更改你的模式,然后 CDC 管道无法处理模式变更。  
> *It should be called continuous data corruption because you might change your schema on your LTP database and then the CDC pipeline fails to handle the schema change.*  
> —— Reynold Xin · [30:40] ^q4

> 经过十年那样有机的演化,它就变成了一大堆像屎一样的代码。  
> *after 10 years of organic evolution that way, it becomes a gigantic pile of shit.*  
> —— Reynold Xin · [44:26] ^q5

> 我们认为你可以通过统一存储来获得你需要的 99%。  
> *We think you can get 99% of what you need by unifying the storage.*  
> —— Reynold Xin · [32:05] ^q6

> 但开放数据格式已经赢了。  
> *But the open data format have won.*  
> —— Reynold Xin · [56:17] ^q7

> 它可能比那些前沿模型便宜大约 100 倍,而且仍然更好。  
> *it's probably like 100x cheaper than those frontier models and still better.*  
> —— Matei Zaharia · [60:52] ^q8

> 向量数据库本不应该是一个单独的类别。  
> *Vector database should have never been a separate category.*  
> —— Reynold Xin · [51:18] ^q9

## 相关单集

- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同公司:Neon · 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏》]] —— 同公司:Snowflake · 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《从避战大模型到押注智能体：Modal 的推理基础设施进化史》]] —— 同概念:智能体 (agent)、Kubernetes
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同概念:智能体 (agent)
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《1.2 个人 + 20 个 AI 智能体：SaaStr 的极简销售实验》]] —— 同概念:智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同概念:智能体 (agent)
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《1500 亿美元的隐形 AI 公司创始人：恐惧源于无知，最好的工作是独自安静地完成》]] —— 同概念:智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同概念:智能体 (agent)
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《对话 Notion 产品负责人 Max:AI 时代的产品方法论与人的主观能动性》]] —— 同概念:智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的未来工作预测：别等 AI 末日，用 Codex 重塑一切》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella 谈 AI 时代平台逻辑:私有评估是最大 IP》]] —— 同概念:智能体 (agent)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《iPod之父Tony Fadell：反直觉的产品课》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人 Mark Pincus：想做出伟大产品，先学会「合法地抄袭」》]] —— 同概念:智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《Gusto CTO 的极简实验:5 人 10 周凭感觉编程造出 AI 产品》]] —— 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:智能体 (agent)
- [[2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge|《Sriram Krishnan：Kimi K3 将改写 AI 行业版图》]] —— 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被迫转行，一半人迎来复兴》]] —— 同概念:智能体 (agent)

*本集关键词:智能体管理 · 开源托管底座 · LTAP与存储统一 · 数据库引擎重写 · AI与数据战略*

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
