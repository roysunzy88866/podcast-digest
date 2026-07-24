---
title: 为什么前沿生态必须开放
podcast: Latent Space
date: 2026-06-24
source_url: https://www.latent.space/p/databricks
duration: "68:43"
guests: ["[[Matei Zaharia]]", "[[Reynold Xin]]"]
companies: ["[[Databricks]]", "[[Snowflake]]", "[[Neon]]", "[[MosaicML]]"]
concepts: ["[[Omnigen]]", "[[智能体]]", "[[沙箱]]", "[[上下文策略]]", "[[LTAP]]", "[[HTAP]]", "[[Dream Engine]]", "[[Spark]]", "[[parquet]]", "[[CDC]]", "[[Postgres]]"]
tags:
  - AI 基础设施
  - 智能体
  - 数据库工程
  - 开源战略
  - 计算与存储分离
---

# 为什么前沿生态必须开放

> [!info] 关联
> **嘉宾**:[[Matei Zaharia]] · [[Reynold Xin]]
>
> **涉及公司**:[[Databricks]] · [[Snowflake]] · [[Neon]] · [[MosaicML]]
>
> **概念**:[[Omnigen]] · [[智能体]] · [[沙箱]] · [[上下文策略]] · [[LTAP]] · [[HTAP]] · [[Dream Engine]] · [[Spark]] · [[parquet]] · [[CDC]] · [[Postgres]]
>
> **来源**:[Latent Space](https://www.latent.space/p/databricks)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-06-24-latent-space-databricks.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

Databricks 联合创始人谈智能体时代的平台整合、LTAP 数据库愿景及开源战略。

在 Data AI Summit 期间,[[Databricks|Databricks]] 的两位联合创始人 [[Matei Zaharia|Matei Zaharia]] 与 [[Reynold Xin|Reynold Xin]] 做客播客,深度复盘了公司近期的一系列重磅发布。Databricks 最初的峰会只是在 Berkeley 的一场小型 [[Spark|Spark]] 教程聚会 [00:17 Reynold Xin],如今已吸引全球十万人参与。两位创始人分享了他们如何将一贯的数据平台哲学延伸到 AI 和[[智能体|智能体]]时代。

### Omnigens:为「智能体时代」重做一层基础设施
随着公司内部开始大量使用编程智能体(如他们基于 cloud code 和 codex 封装的 Isaac)以及构建像 Genie 这样的数据科学智能体,Matei 发现了一个共性问题:如果智能体不能共享会话、拥有历史记录和搜索能力用于协作,那么这个智能体就完全没用 [03:21 Matei Zaharia]。

Reynold 则从切肤之痛出发。他曾为了确保编程会话不中断,在开车等红灯时不得不把笔记本电脑连着手机网络放在一旁盯着看 [06:25 Reynold Xin]。这让他意识到,我们需要的是「实际上不会关机的云[[沙箱|沙箱]]」(一种隔离的云端安全计算环境)。这种环境不仅用于运行智能体会话,也用于日常开发。他据此向团队提交了一份功能愿望清单,最终几乎全被实现。这促成了 Omnigens 的诞生:它包含了 runner 组件、带有统一 API 的 server 组件,以及持久化层和计算层,本质上构成了一个「智能体云」。

#### 统一接口与开源战略
Matei 指出,Omnigens 的核心是在所有底层测试套件之上提供一个通用 API:你可以向智能体发送消息或文件,它则返回流式的文本或工具调用结果 [14:12 Matei Zaharia]。这样,无论底层是终端 codex 还是 OpenAI SDK,都被映射到了同一个接口上。这解决了开发者频繁需要切换模型和底层框架的痛点。

在开源选择上,Databricks 有着清晰的逻辑:如果一个层能产生网络效应、受益于多方协作,就应该开源 [10:06 Matei Zaharia]。他们刚在周六发布了该工具,到访谈时已经合并了约 400 个拉取请求,其中约一半来自外部团队。有人添加了在 Kubernetes(一种管理容器的系统)上运行的支持,也有人接入了各种云沙箱。

#### 安全、控制与上下文策略
对于智能体的安全,业界普遍做法是简单的「是/否」规则(例如是否允许某个工具)。但 Matei 认为这会把用户逼入绝境:你可能既需要允许智能体给网站写代码,又不想让它同时拥有读取机密文件并发布到外网的权限 [18:47 Matei Zaharia]。为此他们设计了「[[上下文策略|上下文策略]]」(一种有状态的安全机制):系统会跟踪会话的状态,如果智能体做了一件高风险的事(比如安装了刚发布一天的可疑包,或读取了大量机密文档),安全机制就会介入。此外,该策略层也负责开销控制——你可以限制子智能体的花费上限(例如 5 美元),超支时必须向人类请求许可 [21:02 Matei Zaharia]。

> 【背景】对话中提到的 Panther 是 Databricks 收购的一家提供安全数据捕获和处理的公司,在事件处理方面支持基于 Python 的策略。

### LTAP:统一存储层与「数据库工程的圣杯」
播客随后转向了另一项重磅发布:[[LTAP|LTAP]]。Reynold 解释了数据库世界大致分为两半:处理事务的 OLTP(如 [[Postgres|Postgres]])和处理分析的 OLAP [28:22 Reynold Xin]。通常,为了不把生产数据库压垮,企业需要通过 [[CDC|CDC]](变更数据捕获)技术,把数据库的变更增量抽取出来,复制到独立的分析系统中去。

> 【背景】CDC 是数据工程中最基础也最易出错的操作之一。Reynold 调侃它应该被叫做「持续数据损坏」,因为只要事务数据库稍微改动一下数据表结构,CDC 管道就会崩溃,常常让数据工程师在凌晨三点被叫醒 [30:30 Reynold Xin]。

业界一直梦想着 [[HTAP|HTAP]](混合事务/分析处理),即用单一数据库引擎同时搞定两件事,但这通常意味着大量的妥协。Databricks 的 LTAP(对 HTAP 的一次文字游戏)则提出了不同思路:**不合并查询引擎,只统一存储层** [32:00 Reynold Xin]。其核心突破来自一次「第一性原理」的辩论:既然 [[Neon|Neon]] 架构(计算与存储分离)已经在把数据写入开放数据湖,为什么不直接把这些数据写成了 Parquet(一种列式存储格式)?

一位工程师直接写了个原型验证了可行性:他发现存储集群有很多空闲 CPU,可以直接用来把行式数据转码成适合分析的列式数据。转码后数据压缩率更高,写入对象存储甚至更快,几乎没有任何妥协 [35:25 Reynold Xin]。这种设计让智能体在调查服务异常时,能直接跨越管道壁垒,读取到真实的业务订单数据,从而变得「强大十倍」 [33:02 Reynold Xin]。

### Dream Engine:用机器学习模型重写数据库引擎
在谈到底层创新时,Reynold 分享了名为「[[Dream Engine|Dream Engine]]」的宏大计划:几乎市面上所有成功的分析数据库引擎都有十年历史,它们为了支持越来越多新场景,在原架构上打满了补丁,经过十年的有机演化,最终变成了一堆庞大且混乱的代码 [44:26 Reynold Xin]。Databricks 决定从头重写。

> 【背景】在软件工程中,这面临「第二系统综合征」的风险:开发者在第一次成功后,往往会因过度膨胀的野心而在第二次设计中堆砌过多需求,导致项目失败。

为了规避风险并选出最优算法,这个全球顶尖的工程团队并没有单纯依赖学术理论,而是打造了一个「数据库工厂」:他们利用 Databricks 十年来积累的海量查询追踪记录训练了一个机器学习模型。该模型能以极高保真度预测任何算法在特定查询(如极低延迟查询或 PB 级数据扫描)下的表现 [46:57 Reynold Xin]。

### 企业文化与开放战略的胜利
在总结为何能在竞争(尤其与 [[Snowflake|Snowflake]])中取得优势时,两位创始人归结为两点:开放与 AI。他们从一开始就立足于大规模数据摄取,并坚持 Parquet、Delta 等开放数据格式,而没有采用专有格式 [53:13 Reynold Xin]。Snowflake 曾有联合创始人写过一篇叫《Choosing Open Wisely》的博客反驳开放格式,但如今开放数据格式已经取得了全面胜利。

此外,Databricks 从 ChatGPT 发布前就把战略重心放在机器学习与数据的结合上。而针对社区关注的 Mosaic 模型路线,Matei 坦言:与其投入海量算力去拼通用大模型,不如专注于让模型在实际业务中变得有用 [59:11 Matei Zaharia]。例如他们专门训练了能将文档页面转化为结构化 JSON 的视觉模型,成本不到前沿大模型的百分之一。他们也在探索专门处理特定任务的「顾问模型」和子智能体。随着基础模型智能水平的提升和合成数据技术的成熟,定制化模型正变得越来越容易,这正是他们押注的未来方向。

## 金句(中英对照 · 过机器闸门三联校验)

> 如果你不能与某人共享会话、拥有历史记录和搜索以及在其之上所有用于协作的层,那么这个智能体就完全没用。  
> *The agent is like completely useless if you can't share sessions with someone and have history and have search and all this like layer on top of it for collaboration.*  
> —— Matei Zaharia · [03:28] ^q1

> 感觉就像我们回到了编程的黑暗时代。  
> *It felt like we went back to the dark ages of programming.*  
> —— Reynold Xin · [06:37] ^q2

> 我让一个智能体去调试某个东西,它花了 500 美元,因为它决定读取大量日志文件并消耗大量 token。  
> *I asked an agent to debug something and it spent $500 because it decided to read a lot of log files and burn a lot of tokens.*  
> —— Matei Zaharia · [21:04] ^q3

> CDC 是最无聊的之一,但也是驱动现代社会的最基础的操作之一。  
> *CDC is one of the most boring, but one of the most fundamental operations powering modern society.*  
> —— Reynold Xin · [30:30] ^q4

> 它是如此脆弱,以至于有一个冷笑话说它应该被称为持续数据损坏,因为你可能会在你的 LTP 数据库上更改你的模式,然后 CDC 管道无法处理模式变更。  
> *It's so brittle that a weak joke that it should be called continuous data corruption because you might change your schema on your LTP database and then the CDC pipeline fails to handle the schema change.*  
> —— Reynold Xin · [30:37] ^q5

> 如果这些智能体理解了,比如是谁实际在下达这些订单,它们实际上会变得强大十倍。  
> *It would actually make those agents ten times more powerful if they understand, for example, who's actually placing those orders.*  
> —— Reynold Xin · [33:02] ^q6

> 然后在你意识到之前,经过十年那样有机的演化,它就变成了一大堆像屎一样的代码。  
> *before you know it, after 10 years of organic evolution that way, it becomes a gigantic pile of shit.*  
> —— Reynold Xin · [44:25] ^q7

> 我认为非常少的公司或非常少的系统有胆量说,让我们从头开始吧。  
> *Very few companies or very few systems, I think, have the gut to say, let's go start from scratch.*  
> —— Reynold Xin · [44:36] ^q8

> 向量数据库本不应该是一个单独的类别。  
> *Vector database should have never been a separate category.*  
> —— Reynold Xin · [51:18] ^q9

> 但开放数据格式已经赢了。我认为现在每个企业都希望把数据以开放数据格式存储。  
> *But the open data format have won. Like I think now every enterprise wants to put data in open data format.*  
> —— Reynold Xin · [56:17] ^q10

## 相关单集

- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同公司:Neon · 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-07-08-latent-space-modal|《为什么 AI 基础设施必须为「Agent 体验」进化》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)、Kubernetes
- [[2026-06-22-latent-space-gray-swan|《神话之后的红队评估 — Zico Kolter与Matt Fredrikson，Gray Swan》]] —— 同公司:Snowflake · 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把销售当产品做：用 AI 重构 GTM 团队的实战指南》]] —— 同概念:智能体 (agent)
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《用 1.2 个人加 20 个 AI 智能体，替换 10 人销售团队》]] —— 同概念:智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同概念:智能体 (agent)
- [[2026-02-26-lennys-ai-is-critical-for-humanitys-survival|《AI is critical for humanity’s survival: Cisco president on the AI revolution | Jeetu Patel》]] —— 同概念:智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《From skeptic to true believer: How OpenClaw changed my life | Claire Vo》]] —— 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《Why half of product managers are in trouble | Nikhyl Singhal (Meta, Google)》]] —— 同概念:智能体 (agent)
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《Why cultivating agency matters more than cultivating skills in the AI era | Max Schoening (Head of Product, Notion)》]] —— 同概念:智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《The AI paradox: More automation, more humans, more work | Dan Shipper》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella：Microsoft Build特别跨界对谈》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《The hidden pattern behind successful products | Mark Pincus (founder of Zynga)》]] —— 同概念:智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《What happens after coding is solved? | Fiona Fung (Manager of the Claude Code and Cowork Teams)》]] —— 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《No Figma. No Jira. No docs. How Gusto built a new product line with Claude Code | Eddie Kim (CTO)》]] —— 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:智能体 (agent)
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《Netflix CPTO on AI and the future of product and tech roles | Elizabeth Stone》]] —— 同概念:智能体 (agent)

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
