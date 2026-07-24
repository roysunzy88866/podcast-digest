---
title: Databricks 的智能体时代布局：统一调度、开源治理与数据库重写
podcast: Latent Space
date: 2026-06-24
source_url: https://www.latent.space/p/databricks
duration: "68:43"
guests: ["[[Matei Zaharia]]", "[[Reynold Xin]]"]
companies: ["[[Databricks]]", "[[Snowflake]]", "[[Neon]]", "[[MosaicML]]"]
concepts: ["[[Omnigen]]", "[[智能体]]", "[[沙箱]]", "[[LTAP]]", "[[Dream Engine]]", "[[开放数据格式]]"]
tags:
  - 智能体管控
  - 数据库架构
  - 开源生态
  - AI 基础设施
  - 大厂竞争
---

# Databricks 的智能体时代布局：统一调度、开源治理与数据库重写

> [!info] 关联
> **嘉宾**:[[Matei Zaharia]] · [[Reynold Xin]]
>
> **涉及公司**:[[Databricks]] · [[Snowflake]] · [[Neon]] · [[MosaicML]]
>
> **概念**:[[Omnigen]] · [[智能体]] · [[沙箱]] · [[LTAP]] · [[Dream Engine]] · [[开放数据格式]]
>
> **来源**:[Latent Space](https://www.latent.space/p/databricks)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-06-24-latent-space-databricks.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

Databricks 创始人详述 Omnigen 智能体平台设计、LTAP 存储统一理念与从头重写数据库引擎的野心。

[[Databricks|Databricks]] 是一家以 Spark 起家的数据和 AI 公司。在本集访谈中，联合创始人兼 CTO [[Matei Zaharia|Matei Zaharia]] 与联合创始人 [[Reynold Xin|Reynold Xin]] 完整复盘了他们在 Data AI Summit 上发布的几项核心动作：旨在统一管理所有[[智能体|智能体]]的开源框架 [[Omnigen|Omnigen]]、解决分析数据实时性的新架构 [[LTAP|LTAP]]，以及从头重写数据库引擎的 [[Dream Engine|Dream Engine]]。本文顺着访谈脉络，分为四个部分：先看 Omnigen 如何应对智能体时代的工程与管理难题；接着理解 LTAP 为什么是对 HTAP（混合事务分析处理）的修正；然后走进他们重写数据库引擎的「梦工厂」；最后回顾 Databricks 在与 [[Snowflake|Snowflake]] 的竞争中对[[开放数据格式|开放数据格式]]与 AI 的战略押注。

## 智能体的「操作系统」：从痛点到 Omnigen

要说 Databricks 为什么要做智能体框架，得先看他们内部遇到的痛点。Matei 指出，公司内部原本并存着两大类智能体需求：一类是编程智能体，他们有一支团队专门做了一个叫 Isaac 的工具，用来在云端或开发机上运行各种代码模型；另一类是像 Genie（一个数据科学智能体）那样的业务智能体。这两拨人最后撞上了同样的墙——每隔几个月就要切换底层模型或测试套件（harness，即驱动模型运行的外部环境），而且如果不解决会话共享、历史记录、安全协作等问题，智能体在团队里根本没有使用价值 [02:22 Matei Zaharia]。

Reynold 则是从另一个极度真实的痛点切入：他在重度使用编程智能体时发现，自己完全被「绑死」在了本地笔记本上。为了确保任务不断线，他甚至在开车去赴诊的路上，把笔记本连上手机网络共享，遇到红灯就要赶紧瞄一眼运行状况。他直言这感觉「回到了编程的黑暗时代」， productivity（生产力）虽然高了，但完全没享受到云的便利，于是他极力主张要做一个「真正不关机的云[[沙箱|沙箱]]」 [06:12 Reynold Xin]。

> 【背景】沙箱是一种为程序提供安全、隔离运行环境的机制。在这个语境下， Reynold 需要的是一个安全的、持续运行的云端环境来跑智能体代码。

这些内部纷繁的诉求最终汇聚成了 Omnigen。从架构上看，它不是一个试图包揽一切的技术栈，而是一个「通用 API」：你可以向一个智能体会话发送消息或文件，它会向外输出流式的文本或工具调用结果 [14:12 Matei Zaharia]。通过这个接口，他们把各种不同的底层编程工具（如 cloud code、codex）都映射到了同一个界面下。作为开源项目（其设计理念与 Spark 一脉相承，依赖社区贡献生态），Omnigen 发布短短几天就收到了大量外部贡献，包括对 Kubernetes 的支持以及多种云沙箱的接入 [11:46 Reynold Xin]。

### 安全与成本：让智能体可控的上下文策略

解决了调度与运行环境，智能体在企业的落地还有一个巨大的拦路虎：安全与管控。Matei 作为 CTO，极度担忧某个被污染的 NPM 包会导致代码泄露，但他又没有精力去逐条批准智能体的每一个操作。

为此，Omnigen 设计了「上下文策略」。传统的智能体安全往往是静态的是非题（比如「是否允许读取机密文件」或「是否允许发布到公司网站」），但 Omnigen 会持续追踪会话的状态。如果智能体安装了一个刚发布一天的可疑包，或者刚刚读取了上千份机密文档，系统就会判定接下来面临高风险并加以拦截 [19:14 Matei Zaharia]。这种基于上下文的状态追踪，还能用来限制单个任务的 token 花费——例如你可以规定一个子智能体的最高花费上限为 5 美元，一旦逼近就会暂停并请求人类许可 [21:12 Matei Zaharia]。

## 数据库的统一之梦：为什么需要 LTAP？

解决了智能体的运行与管控，接下来要回答的是：智能体要处理的数据从哪里来？这引出了本集第二个核心技术话题 LTAP。要理解 LTAP，得先了解数据库的历史。Reynold 解释道，数据库世界大致分为两半：处理业务事务的 OLTP（如 Postgres）和做海量分析的 OLAP [28:18 Reynold Xin]。传统上，为了让分析查询不压垮业务库，企业必须通过 CDC（持续数据捕获）把数据抽取出来。 Reynold 苦笑着说，CDC 是驱动现代社会最基础却又最脆弱的操作，工程师常常因为源端改了字段而导致管道断裂，凌晨三点被叫醒抢修 [30:30 Reynold Xin]。

> 【背景】业界曾提出 HTAP（混合事务/分析处理），希望能用一个数据库搞定两类需求。但 Reynold 认为，HTAP 往往妥协太多：既失去了成熟数据库的庞大生态，又在两边都做不到极致的性能 [31:16 Reynold Xin]。

Databricks 给出的解法是 LTAP。它不试图在查询层把数据库合并，而是实现存储层的统一。具体来说，他们让 Postgres 数据库在写入数据湖（如 S3 等对象存储）时，直接利用存储集群空闲的 CPU，将原本面向行的 Postgres 页面格式转码为更适合分析的列式格式 [35:18 Reynold Xin]。这个技术突破的亮点在于：数据压缩得更好了，写入甚至比以前更快，且分析端可以零延迟直接读取最新数据。

有趣的是，这种能力对智能体尤为重要。Reynold 提到，一位客户反馈：当服务出现性能 dips（下降）时，如果智能体只能看到日志而无法直接查询底层的业务数据库去弄清是谁在下订单，它的能力就被大大限制；如果数据直接打通，智能体会强大十倍 [32:39 Reynold Xin]。

## 从头重写数据库：Dream Engine 的数据驱动范式

说完了存储层的大一统，Databricks 还在做一件极其疯狂的事：从头重写他们的数据库查询引擎，内部称之为 Dream Engine。

Reynold 坦言，市面上几乎所有主流的分析数据库都有十年的历史，它们在不断添加新功能后，内部代码已经变成了一堆难以维护的「屎山」，Databricks 自己也不例外 [44:23 Reynold Xin]。但他们深知「第二系统综合征」（指开发者在重写系统时过于雄心勃勃往往导致失败）的风险。为了避免重蹈覆辙，他们没有仅仅依靠学术算法去推演，而是建造了一个「工厂」：他们收集了长达十年的海量运行追踪数据，以此训练出一个机器学习模型 [46:37 Reynold Xin]。

这个模型能够以极高的保真度，预测任何一种算法或数据结构在特定查询特征下的表现。比如，同样是字符串聚合，如果发现目标数据只是 256 个国家代码，系统会自动放弃庞大的哈希表，改用轻量的数组直接查找 [49:03 Reynold Xin]。这种用真实运行数据指导底层架构选型的范式，是他们敢于重写核心引擎的底气所在。

## 大厂之战：开放格式与 AI 先发优势

访谈末尾，不可避免地谈到了与 Snowflake 的竞争。Reynold 认为，两家公司虽然同时起步，架构都采用存储计算分离，但走向了截然不同的道路。

最核心的区别在于对待数据格式的态度。Snowflake 早期坚持专有的封闭格式，希望将最有价值的数据锁在自己的系统里以追求极致速度 [54:01 Matei Zaharia]。而 Databricks 从一开始就拥抱开放，从 Spark 时代的 Parquet 演进到 Delta 和 Iceberg [53:13 Reynold Xin]。对于拥有 30 年历史的企业 CTO 来说，避免被单一厂商锁定是首要考量。如今，开放数据格式已经全面胜出，而曾经发文质疑开放格式的 Snowflake 也已被迫改变立场 [56:19 Reynold Xin]。

另一个关键差异在于对 AI 的押注。Databricks 很早就将自己定位为机器学习加数据平台。虽然他们收购了以开源大模型闻名的 Mosaic，但 Matei 透露，与其在通用大模型上与所有巨头拼算力，他们决定把重点转向如何让模型变得「有用」，例如打造名为 Genie 的虚拟数据科学家智能体 [59:25 Matei Zaharia]。同时，他们在特定高并发场景（如解析 PDF 和 Word 文档的视觉模型）上，开发了成本仅为前沿大模型百分之一的专用模型 [60:44 Matei Zaharia]。

> 【背景】2022 年 10 月 ChatGPT 发布前夕，Reynold 提到 Databricks 就已经基于机器学习用例构建了大量底层平台，这为他们在 AI 时代的爆发奠定了基础 [53:25 Reynold Xin]。

回看本集，Databricks 的种种动作——无论是统一智能体的调度与安全规范，还是打通数据库的事务与分析壁垒，甚至是不惜重写核心引擎——都指向同一个战略目标：为 AI 智能体打造一个数据无损、流转顺畅且高度可控的基础设施底座。

## 本集带走
1. **智能体企业落地的胜负手在于管控**：Omnigen 通过引入「上下文策略」，将对智能体的安全审批从静态的是非题，升级为基于操作历史与预算花费的动态决策，解决了开发者既要安全又要效率的痛点。
2. **统一数据库的正确路径是「存储合并」而非「查询合并」**：LTAP 利用空闲 CPU 将行数据实时转码为列数据，既避免了 HTAP 的妥协，又让智能体能够零延迟读取分析数据。
3. **用真实数据训练数据库内核是重写系统的关键**：Dream Engine 依靠十年来积累的海量运行追踪数据训练出的机器学习模型，来指导底层算法选型，有效规避了系统重写的盲目性。
4. **开放数据格式已成为不可逆的行业共识**：Databricks 依靠拥抱开源生态起家，不仅在与 Snowflake 的竞争中占据了数据底座的先发优势，也顺应了大企业拒绝厂商锁定的核心诉求。

## 金句(中英对照 · 过机器闸门三联校验)

> 这可以说是数据库工程的圣杯。为什么不构建一个单一的系统可以做到这两者呢？但最终结果就是大量的妥协。  
> *This is sort of the holy grail of database engineering. Why not build a single system that can do both of this? But it ends up just being a lot of compromises.*  
> —— Reynold Xin · [31:16] ^q1

> CDC 是最无聊的之一，但也是驱动现代社会的最基础的操作之一。但它是如此脆弱，以至于有一个冷笑话说它应该被称为持续数据损坏，因为你可能会在你的 LTP 数据库上更改你的模式，然后 CDC 管道无法处理模式变更。  
> *CDC is one of the most boring, but one of the most fundamental operations powering modern society. But it's so brittle that a weak joke that it should be called continuous data corruption because you might change your schema on your LTP database and then the CDC pipeline fails to handle the schema change.*  
> —— Reynold Xin · [30:30] ^q2

> 然后在你意识到之前，经过十年那样有机的演化，它就变成了一大堆像屎一样的代码。但那包括了 Databricks。  
> *And before you know it, after 10 years of organic evolution that way, it becomes a gigantic pile of shit. But that includes Databricks.*  
> —— Reynold Xin · [44:25] ^q3

> 向量数据库本不应该是一个单独的类别。  
> *Vector database should have never been a separate category.*  
> —— Reynold Xin · [51:18] ^q4

> 它可能比那些前沿模型便宜大约 100 倍，而且仍然更好。  
> *It's probably like 100x cheaper than those frontier models and still better.*  
> —— Matei Zaharia · [60:52] ^q5

> 我让一个智能体去调试某个东西，它花了 500 美元，因为它决定读取大量日志文件并消耗大量 token。  
> *I asked an agent to debug something and it spent $500 because it decided to read a lot of log files and burn a lot of tokens.*  
> —— Matei Zaharia · [21:04] ^q6

## 相关单集

- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同公司:Neon · 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-07-08-latent-space-modal|《AI 基础设施如何为智能体重新设计:Modal 联合创始人的方法》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-06-22-latent-space-gray-swan|《给 AI 智能体装上「安全带」:Gray Swan 的攻防实战》]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同概念:智能体 (agent)
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《用 20 个 AI 智能体替代 10 人销售团队：SaaStr 创始人的前沿实战》]] —— 同概念:智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同概念:智能体 (agent)
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《估值 150 亿的隐形 AI 公司 Applied Intuition:给自动驾驶卡车的焦虑开一剂务实药方》]] —— 同概念:智能体 (agent)
- [[2026-03-22-lennys-the-art-of-influence-jessica-fain|《别怪高管不懂你：产品经理的向上影响力心法》]] —— 同概念:智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被淘汰，构建者迎来黄金期》]] —— 同概念:智能体 (agent)
- [[2026-04-23-lennys-how-anthropics-product-team-moves|《对话 Anthropic 产品负责人 Cat Wu:AI 时代 PM 如何跟上「每周发布」的疯狂节奏》]] —— 同概念:智能体 (agent)
- [[2026-04-26-lennys-snapchat-ceo-why-distribution-is|《Snap CEO Evan Spiegel:在AI时代,做最会创新的公司》]] —— 同概念:智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的 AI 工作预测:智能体接管工作,但人类不会失业》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《专访 Satya Nadella:智能体时代的平台逻辑与企业护城河》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人：别想从零颠覆世界，靠复制才能创新》]] —— 同概念:智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同概念:智能体 (agent)
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|《OpenAI Codex lead on the new shape of product work | Andrew Ambrosino》]] —— 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《No Figma. No Jira. No docs. How Gusto built a new product line with Claude Code | Eddie Kim (CTO)》]] —— 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:智能体 (agent)
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《在指数级增长公司做增长：Anthropic 增长负责人的打法》]] —— 同概念:智能体 (agent)

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
