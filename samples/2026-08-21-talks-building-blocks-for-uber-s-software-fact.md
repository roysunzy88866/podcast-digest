---
title: "Uber 的智能体软件工厂:70% 的 PR 已经由 AI 写"
podcast: 精选演讲
date: 2026-09-25
source_url: undefined
duration: "18:04"
type: episode
cover: "#64748b"
description: Uber 工程效能团队负责人 Uday 与同事 Adam 展示 Uber 六大智能体基础设施模块，以及一个功能如何由 AI 端到端交付。
host: "[[Uday Kiran Medisetty]]"
companies: ["[[Uber]]"]
concepts: ["[[智能体]]", "[[模型网关]]", "[[MCP 网关]]", "[[上下文图]]", "[[技能]]", "[[DevPod]]", "[[Cortana]]", "[[Minion]]", "[[CI-CD]]", "[[维护]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-21-talks-building-blocks-for-uber-s-software-fact#post","headline":"Uber 的智能体软件工厂:70% 的 PR 已经由 AI 写","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-21-talks-building-blocks-for-uber-s-software-fact","mainEntityOfPage":"https://talk.solomind.cc/2026-08-21-talks-building-blocks-for-uber-s-software-fact","description":"Uber 工程效能团队负责人 Uday 与同事 Adam 展示 Uber 六大智能体基础设施模块，以及一个功能如何由 AI 端到端交付。","datePublished":"2026-09-25","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Uday Kiran Medisetty"},{"@type":"Organization","name":"Uber"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"模型网关 (model gateway)"},{"@type":"Thing","name":"MCP 网关 (MCP Gateway)"},{"@type":"Thing","name":"上下文图 (context graph)"},{"@type":"Thing","name":"技能 (skills)"},{"@type":"Thing","name":"DevPod"},{"@type":"Thing","name":"Cortana"},{"@type":"Thing","name":"Minion"},{"@type":"Thing","name":"CI/CD"},{"@type":"Thing","name":"维护 (maintenance)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Uber 的智能体软件工厂:70% 的 PR 已经由 AI 写","item":"https://talk.solomind.cc/2026-08-21-talks-building-blocks-for-uber-s-software-fact"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Uber 的智能体软件工厂:70% 的 PR 已经由 AI 写</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Uber 的智能体软件工厂:70% 的 PR 已经由 AI 写

<div class="pd-byl"><b>Uday Kiran Medisetty</b> · Uber 工程效能团队负责人 · 2026-09-25</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-21-talks-building-blocks-for-uber-s-software-fact.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">过去一年，我们在智能体 AI 上的所有投入，使得超过 70% 的 PR 现在由本地或云端智能体完成。</div><div class="a">— Uday Kiran Medisetty <button class="pd-ts" data-t="00:38" data-who="Uday Kiran Medisetty" data-en="Over the last year, all of the investments we made in agentic AI have led to more than 70% of our PRs, now either by local or cloud agents." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Uday Kiran Medisetty]]
>
> **公司** [[Uber]]
>
> **概念** [[智能体]] · [[模型网关]] · [[MCP 网关]] · [[上下文图]] · [[技能]] · [[DevPod]] · [[Cortana]] · [[Minion]] · [[CI-CD]] · [[维护]]

[[Uber|Uber]] 全球有几千名工程师、12 个技术园区。过去一年，他们在[[智能体|智能体]] AI 上的投入带来了一个惊人的结果：**超过 70% 的 PR 现在由本地或云端智能体完成**，每位工程师的代码行数同比翻了一倍 <button class="pd-ts" data-t="00:38" data-who="Uday" data-en="To set some context, we have a few thousand engineers across 12 global tech sites. Over the last year, all of the investments we made in agentic AI have led to more than 70% of our PRs, now either by local or cloud agents." aria-label="回原文"></button>。

他们还用自动化迁移处理了超过 250 次迁移、约 900 万行代码 <button class="pd-ts" data-t="01:04" data-who="Uday" data-en="And we are also accelerating toil reduction at a massive pace. We handled more than 250 automated migrations, relatively 9 million lines of code automatically for our engineers." aria-label="回原文"></button>。这一集里，两位演讲者把这套体系拆成六个「构建模块」逐一讲解，再演示如何把它们串成一条端到端的「受管理软件工厂」流水线。

## 六个构建模块

**1. [[模型网关|模型网关]](Model Gateway)**:所有内部用例、编码工具链、外部用例都走一个统一的 OpenAI/Anthropic 兼容端点，中间经过一系列中间件——用 Spire 做身份认证、数据匿名化器脱敏 20 多种 PII 类型(PII 即个人身份信息)、一个叫 AI guard 的安全层用五个专门模型处理安全与策略，全部在 100 毫秒内完成 <button class="pd-ts" data-t="02:31" data-who="Uday" data-en="The first one is identity and authentication using Spire. We have a data anonymizer that redacts 20 plus PI types. We have an AI guard that has five specialized models that handles various parts of safety and policy that we want to ensure, and all of that runs under 100 milliseconds." aria-label="回原文"></button>。每个请求都能按用户、项目、团队归因，既实时也进数据湖，由此可以跨整个产品组合做支出护栏。

今天内部有 800 多个项目走这个网关，每天处理超过 1 亿次模型请求，涵盖前沿模型和开源模型 <button class="pd-ts" data-t="03:30" data-who="Uday" data-en="And for an engineer at Uber, you take the vanilla client, you set the project ID, and we take care of everything else. Today we have 800 plus projects internally going through this, cumulatively handling more than 100 million model requests per day." aria-label="回原文"></button>。工程师只需用原生客户端设一个 project ID,其余全由平台处理。

**2. [[MCP 网关|MCP 网关]]**:去年起步时，Uber 有数千个内部 API,但「没有一个开箱即用就能被智能体调用」；各家 SaaS 工具认证方式各异，而且「一旦你装了足够多的 MCP,它们会累加起来，产生巨大的 token 税」<button class="pd-ts" data-t="04:06" data-who="Uday" data-en="And we had so many other SaaS tools, and each one of them have different way to authenticate, different way to set up, which is a lot of hassle for everyone. And once you end up with enough MCPs, they'll all add up and have a massive token tax." aria-label="回原文"></button>(MCP 即模型可调用的工具接口)。他们的做法是一个自动化爬虫，只需一条配置变更就能把内部 API 投影成 MCP;Google、Slack、Jira 等 SaaS 也统一接入网关，由平台托管、做 token 交换。

token 优化演进了几代：从直连 MCP,到只需装一个就能发现并调用所有 MCP 的 OmniMCP,再到 CLI 模式让响应也不占上下文，最近还有自动安装的 code mode [[技能|技能]]，即时生成 Python 脚本优化 token 消耗最高的用例。现在他们有 1000 多个 MCP 工具，仅这些优化就换来全集群超过 40% 的节省 <button class="pd-ts" data-t="05:27" data-who="Uday" data-en="Of late, we also have a code mode skill, which is auto-installed, which on the fly creates Python scripts to hyper-optimize some of the top MCP token consuming use cases." aria-label="回原文"></button>。

**3. 智能体运行环境**:多年给工程师用的云端远程开发环境 [[DevPod|DevPod]] 被改造成智能体也适用的形态——预置的 Kubernetes balloon pods(预先备好、随取随用的容器),仓库已做快照、搜索索引已建好，智能体几秒内就能开工 <button class="pd-ts" data-t="06:28" data-who="Uday" data-en="The search index is already built. So the agents can start working within a matter of seconds. The next thing we noticed is the roles of engineers are getting blurred." aria-label="回原文"></button>。而且由于智能体和工程师都要跨仓库工作，他们做了一个把所有仓库放在一处的 mega dev port,现在自主编码智能体就用它。甚至非工程员工也能几秒内上手任何智能体工具链。

于是他们建了托管式技能市场，现在有 2500 个技能，经过链接检查和自动化评审保证基线质量；一条命令即可发现并安装任何插件，还会按工程师画像自动装好默认技能。最近还在收集 traces 和持续评估，把反馈回馈给技能作者。全集群每天执行超过 20000 次技能 <button class="pd-ts" data-t="08:27" data-who="Uday" data-en="And this is an area of big investment for us right now. And we have 2,500 skills and relatively more than 20,000 skill executions per day across our fleet. The next piece of knowledge is context graphs." aria-label="回原文"></button>。

**5. [[上下文图|上下文图]](Context Graph)**:他们从执行轨迹里发现，智能体花大量时间只是在一百多万行代码的 monorepo 里找基本上下文——服务在哪、依赖什么、谁在用、该遵循什么模式，而这些信息散落在 Uber 内部 20 到 30 个不同系统里，每个都要各自的技能和 MCP 去取，烧 token、加延迟、结果还不可预测。解法是把「Uber 是如何运转的」全部整合进一张上下文图：150 种节点和边类型、4000 万条条目，从移动 App 构建方式到后端、数据湖、设计文档、Jira、事故和 bug 全部互连 <button class="pd-ts" data-t="09:24" data-who="Uday" data-en="This has 150 unique node and edge types. We have 40 million entries there right now. It captures all the way from how our mobile apps are built to our backend to our data lake, all the design docs, Jira, incident bugs, everything is connected." aria-label="回原文"></button>。效果实测显著:以「印度的出行行程有多少被缓存」这类问题为例,有图谱对比没图谱,token、轮次和延迟都有巨大改进 <button class="pd-ts" data-t="10:08" data-who="Uday" data-en="This needs to understand the concepts of each of these, which tables, what kind of CTEs you need to create for the SQL. With and without graph, we see massive improvement in tokens, turns, and latency." aria-label="回原文"></button>。

**6. 统一入口 [[Cortana|Cortana]]**:以上所有能力——技能、MCP、上下文图——都接进一个叫 Cortana 的 AI 助手，在 Slack、CLI、网页各种界面都可用，任何员工都能提问、查图谱、调技能、查任何代码库。现在员工还能个性化定制：接入自定义技能和提示词、挂到团队 Slack 频道，让它像那个团队的一员一样工作。仅最近一个月就创建了 300 个这样的个性化人设，每天超过 20000 个会话 <button class="pd-ts" data-t="11:19" data-who="Uday" data-en="And this is a simple example of how you can invoke the same question before in Slack and one or more people can even collaborate on the same Slack channel. And we have, just in the last one month, 300 unique personas created and more than 20,000 sessions per day." aria-label="回原文"></button>。

## 端到端实战：一个世界杯功能的诞生

Adam 用一个真实场景演示整条流水线：世界杯期间，让离开拥挤体育场的乘客有更好的上车点。流程是这样的——在 Slack 里讨论想法，把 Cortana 拉进来，借助上下文图做商业调研(以前发生过哪些大型场馆活动、哪些体育场值得做)，再帮忙定产品需求(只上北美，因为体育场在那里)、生成 Figma 设计的两个 A/B 变体。「以前让所有人达成一致可能需要几周，现在可以压缩到很短的时间内，很快做出原型」<button class="pd-ts" data-t="13:08" data-who="Adam" data-en="So this process before could take a long time. It could take weeks to get everyone aligned. Now we can compress this into a very short amount of time now and get to a prototype here very quickly." aria-label="回原文"></button>。

然后交给 [[Minion|Minion]]——Uber 的云端编码智能体，由 DevPod 驱动，有完整构建环境、能跨仓库同时改后端和前端。但它会在创建 draft PR 后停下来、不推 CI,原因是：这种自主模式适合苦力型工作，但要做更高级的端到端功能，「如果我们能在推送到 CI 之前更早地验证，那会是很大的收益」，同时避免给 CI 带来额外负载 <button class="pd-ts" data-t="14:08" data-who="Adam" data-en="And we want to prevent a lot of extra load coming onto CI. So if we can validate sooner before we push to CI, that would be a big benefit. So that's what we're going to see here next on validation." aria-label="回原文"></button>。

具体做法是把原本在外循环(CI)的检查前移到内循环：静态分析问题当场修；视觉验证用一个技能启动模拟器、抓截图和 Figma 规格比对；还能在后端 staging 环境把服务拉起来，验证前后端集成。CI 上仍出的错由「自愈 CI」修;代码评审也拆成两层——外循环用强大模型加推理做深入评审，内循环用更小更快的模型。关键的一环是:如果一个 diff 来自自主运行的 Minion,PR 上会附一张表，列出它经历过的所有检查、包括截图，「让人类评审者有信心，这个 diff 已经经历过大量的自我改进,而不只是信任最初那次生成」<button class="pd-ts" data-t="15:30" data-who="Adam" data-en="The outer loop code review can have a powerful model, use reasoning, a skill to do a deeper review, and in the inner loop we can have a smaller model that runs faster with the medium model." aria-label="回原文"></button>。

## 维护：比生成更重要的下半场

代码产出变多后，[[维护|维护]]更重要。他们把功能和服务登记进「维护技能」——比如 feature flag 清理(世界杯那个 modal 的 B 变体实验结束后，调度一个循环自动清掉)。

两个设计约束值得注意：这是受管理的循环，全公司统一到一个界面去设置，「我们不希望全公司范围内毫无边界地设立成千上万个循环」<button class="pd-ts" data-t="16:28" data-who="Adam" data-en="So the key thing here is that this is actually a managed loop that you go to, right? We don't want thousands of loops being set up across the company without any bounds." aria-label="回原文"></button>;循环安排在周日跑,那时 CI 容量充裕,同时控制工程师周一早上收到的 diff 数量。更妙的是，技能生成的 diff 被合入或被拒、收到评论，「这些都是很好的标注数据，我们可以用它来改进技能本身」<button class="pd-ts" data-t="16:56" data-who="Adam" data-en="Another cool key thing here is that when that skill runs and makes those diffs, those diffs will get comments and either get landed or not landed. That's all good label data that we can use to improve the skill itself." aria-label="回原文"></button>。他们还以月度为节奏,从事故复盘里提炼新的维护技能，推广到所有服务。

## 新瓶颈在哪

流水线跑通后，瓶颈转移了：一是基础设施——「现在我们对基础设施施加了更大的压力，所以要预判 CI 容量需要达到什么水平，并在那里做正确的基础性投资」<button class="pd-ts" data-t="17:31" data-who="Adam" data-en="One of the other things that we're really thinking about now is bottlenecks. Now we're putting more strain on our infrastructure, so we're trying to anticipate where our CI capacity needs to be and make the right foundational investments there." aria-label="回原文"></button>;二是能切实运行的实验数量有限;三是决策——「不再是能不能构建,我们现在大概都能构建出来,问题变成了:该不该构建它？」<button class="pd-ts" data-t="17:49" data-who="Adam" data-en="We know we can probably build it now. It's more of a question of, should we build it? All right." aria-label="回原文"></button>

## 本集带走

- **网关是平台化的起点**：模型和工具都收口到单一入口(一个端点、一个 MCP 安装方式)，安全、审计、归因、成本护栏才能整体做，而不是每个团队各搞一套。
- **上下文是智能体最大的隐性成本**：智能体找上下文比干活还费 token;把组织知识整合成一张图，token、轮次、延迟全面下降。
- **验证前移比生成能力更关键**：自主智能体产出的代码要靠模拟器截图比对、前后端联调、分层代码评审等内循环检查提前兜底，再给人类评审者一张「它经过了哪些检查」的表建立信任。
- **自动化也要有围栏**：维护循环统一管理、安排在 CI 空闲时段、控制每周 diff 数量；技能产出的合入/拒绝反馈回收成改进技能的标注数据。
- **瓶颈会转移**：当构建不再是问题，真正的约束变成 CI 容量、实验额度，以及「该不该做」的产品决策。

> 【背景】两位演讲者 Uday 与 Adam 来自 Uber 的工程效能团队；转写稿中未给出他们的完整姓名与头衔，以上身份根据演讲开场自我介绍推断。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">过去一年，我们在智能体 AI 上的所有投入，使得超过 70% 的 PR 现在由本地或云端智能体完成。</span>  
> *Over the last year, all of the investments we made in agentic AI have led to more than 70% of our PRs, now either by local or cloud agents.*  
> <span class="qm">—— Uday Kiran Medisetty · [00:38]</span> ^q1

> <span class="qz">我们为工程师处理了超过 250 次自动化迁移，自动化迁移了约 900 万行代码。</span>  
> *We handled more than 250 automated migrations, relatively 9 million lines of code automatically for our engineers.*  
> <span class="qm">—— Uday Kiran Medisetty · [01:04]</span> ^q2

> <span class="qz">今天，我们内部有 800 多个项目经过这个网关，累计每天处理超过 1 亿次模型请求。</span>  
> *Today we have 800 plus projects internally going through this, cumulatively handling more than 100 million model requests per day.*  
> <span class="qm">—— Uday Kiran Medisetty · [03:30]</span> ^q3

> <span class="qz">一旦你装了足够多的 MCP,它们会累加起来，产生巨大的 token 税。</span>  
> *And once you end up with enough MCPs, they'll all add up and have a massive token tax.*  
> <span class="qm">—— Uday Kiran Medisetty · [04:06]</span> ^q4

> <span class="qz">所有这些带来的结果是，现在我们拥有 1000 多个 MCP 工具，仅凭这些优化工作，我们就在整个集群范围内节省了超过 40%。</span>  
> *And all of this led to, like, now we have 1,000-plus MCP tools, and just with these optimization efforts, we've saved more than 40% fleet-wide savings.*  
> <span class="qm">—— Uday Kiran Medisetty · [05:27]</span> ^q5

> <span class="qz">有图谱和没有图谱相比，我们在 token、轮次和延迟上看到了巨大的改进。</span>  
> *With and without graph, we see massive improvement in tokens, turns, and latency.*  
> <span class="qm">—— Uday Kiran Medisetty · [10:08]</span> ^q6

> <span class="qz">仅最近一个月，我们就创建了 300 个独特的个性化人设，每天有超过 20,000 个会话。</span>  
> *And we have, just in the last one month, 300 unique personas created and more than 20,000 sessions per day.*  
> <span class="qm">—— Uday Kiran Medisetty · [11:19]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi|DevOps 之父谈智能体开发：谁来管、怎么管、别踩什么坑]]<span class="pd-rz">同概念:CI/CD、智能体 (agent)、护栏 (guardrails)</span>
- [[2026-07-13-pg-the-complete-claude-stack-for-pms|产品经理驾驭 Claude 生态：用五层架构打造专属 AI 幕僚长]]<span class="pd-rz">同概念:技能 (skills)、智能体 (agent)</span>
- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:技能 (skills)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-31-talks-fighting-slop-with-slop-vaibhav-gupta-bo|用 AI 对抗 AI：一种不用读代码的编程语言 BAML]]<span class="pd-rz">同概念:CI/CD、智能体 (agent)</span>
- [[2026-02-12-lennys-engineers-are-becoming-sorcerers|OpenAI 内部怎么用 AI 写代码：从巫师比喻到一人独角兽的二阶效应]]<span class="pd-rz">同概念:智能体 (agent)、CI/CD</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:智能体 (agent)、护栏 (guardrails)</span>

</div>
</div>
<script>
(function(){
  function move(){
    var side=document.querySelector('.right.sidebar'); if(!side) return;
    var box=null;
    var all=document.querySelectorAll('article blockquote[data-callout]');
    for(var i=0;i<all.length;i++){
      if(all[i].closest('.mrel')) continue;   // C13d:页尾手机克隆块不许被当成正文关联框搬走(实测被搬空过)
      var t=all[i].querySelector('.callout-title-inner');
      if(t&&t.textContent.trim().indexOf('关联')===0){ box=all[i]; break; }
    }
    if(!box) return;
    if(box.closest('.right.sidebar')) return;
    var wrap=document.createElement('div');
    wrap.className='pd-rel';
    var h=document.createElement('h3'); h.textContent='这一集涉及';
    wrap.appendChild(h); wrap.appendChild(box);
    var toc=side.querySelector('.toc');
    if(toc&&toc.parentElement) toc.parentElement.insertBefore(wrap, toc.nextSibling);
    else side.appendChild(wrap);
  }
  // C13f 第九批 #3:深浅色不再待在顶栏 —— 首页搬进左栏,集页没有左栏,搬到右栏末尾。
  // 仍是**搬节点不重写**(🔒 #2 亮暗双模式的行为在 Quartz 手里),搬前比 parentElement 保幂等。
  function adopt(){
    var acts=document.querySelector('.pd-top .pd-acts');
    function grab(sel,host){
      if(!host) return;
      var el=document.querySelector('#quartz-body > .sidebar '+sel) || document.querySelector('.sidebar '+sel);
      if(el && el.parentElement!==host) host.appendChild(el);
    }
    // 2026-08-15 用户条8:深浅色回顶栏,和分享/收藏/搜索一起(撤 C13f #3「深色进侧栏」)。
    // 阅读模式仍不并入(设计稿顶栏只有分享/收藏/深色/搜索)。顺序由 custom.scss 的 order 排;
    // 搬节点不重写(🔒#2 亮暗行为归 Quartz)。
    ['.darkmode', '.search'].forEach(function (sel) { grab(sel, acts); });
  }
  function graph(){
    var art=document.querySelector('article'); if(!art) return;
    var g=document.querySelector('.right.sidebar .graph'); if(!g) return;
    var box=document.createElement('div'); box.className='pd-graph';
    box.appendChild(g); art.appendChild(box);
  }
  function topbar(){
    var bar=document.querySelector('article .pd'); if(!bar) return;
    var qb=document.getElementById('quartz-body'); if(!qb||!qb.parentElement) return;
    qb.parentElement.insertBefore(bar, qb);
  }
  // C13f:相关单集区(.pd-ex / .pd-exit)里的单集链接也在新标签页开,与首页卡片同口径。
  // 它们是 markdown 双链、由 Quartz 渲染成 <a>,只能渲染完再打标记。
  // ⚠️ 这段注释会原样进页面 —— 别在这里写那个区块的中文标题,
  //    render-related 有一条守卫在断言「不传 related 时整页不出现那四个字」。
  // data-router-ignore 是关键:Quartz SPA 判 _blank 只看事件目标本身,点到子元素会漏。
  function newtab(){
    document.querySelectorAll('.pd-ex a, .pd-exit a').forEach(function(a){
      if(a.target==='_blank') return;
      if(a.host && a.host!==location.host) return;   // 站外链接不归这条口径管
      a.target='_blank'; a.rel='noopener'; a.dataset.routerIgnore='';
    });
  }
  // 站名 logo 缺文件时摘掉 <img>,露出底下的引号标记(与首页同一条口径)
  function logos(){
    document.querySelectorAll('.pd .mk img').forEach(function(im){
      if(im.__lg) return; im.__lg=1;
      var kill=function(){ if(im.parentElement) im.remove(); };
      if(im.complete && im.naturalWidth===0){ kill(); return; }
      im.addEventListener('error', kill, {once:true});
    });
  }
  // C13h 分享/收藏(移植 设计稿/actions.js):分享=系统面板,失败(非用户取消)退回复制;
  // 收藏=localStorage(键 pd-favs,按路径),再点取消;toast 轻提示。SPA:委托绑定一次,每次 nav 恢复实心态。
  function toast(msg){
    var t=document.createElement('div'); t.className='toast'; t.textContent=msg;
    document.body.appendChild(t);
    requestAnimationFrame(function(){ t.classList.add('in'); });
    setTimeout(function(){ t.classList.remove('in'); setTimeout(function(){ t.remove(); },250); },1600);
  }
  function favs(){ try{ return JSON.parse(localStorage.getItem('pd-favs')||'{}'); }catch(e){ return {}; } }
  function favSync(){
    var b=document.querySelector('.ico[data-act="fav"]'); if(!b) return;
    b.classList.toggle('on', !!favs()[location.pathname]);
  }
  function doCopy(){
    if(!navigator.clipboard){ toast('请手动复制地址栏链接'); return; }
    navigator.clipboard.writeText(location.href).then(
      function(){ toast('链接已复制'); }, function(){ toast('复制失败,请手动复制地址栏'); });
  }
  // 手机端「← 返回」= 回上一级(history.back);历史栈空(外站/新标签直开)→ 降级走 href="/" 回首页(ADR 0019)。
  // 用委托监听而非内联 onclick:避开 CSP unsafe-inline;桌面(≥1024)不拦、走默认 href。
  if(!window.__pdBack){ window.__pdBack=1;
    document.addEventListener('click', function(ev){
      var a=ev.target.closest && ev.target.closest('.pd-back'); if(!a) return;
      if(innerWidth<1024 && history.length>1){ ev.preventDefault(); history.back(); }
    });
  }
  if(!window.__pdActs){ window.__pdActs=1;
    document.addEventListener('click', function(ev){
      var b=ev.target.closest && ev.target.closest('.ico[data-act]'); if(!b) return;
      if(b.dataset.act==='share'){
        var h1=document.querySelector('article h1');
        var title=h1?h1.textContent.trim():document.title;
        if(navigator.share){
          navigator.share({title:title,url:location.href}).catch(function(e){
            if(!e || e.name!=='AbortError') doCopy();   // 用户自己取消→不打扰;真调不通→退回复制
          });
        } else doCopy();
      } else if(b.dataset.act==='fav'){
        var o=favs(); var k=location.pathname;
        if(o[k]) delete o[k]; else o[k]=1;
        localStorage.setItem('pd-favs', JSON.stringify(o));
        b.classList.toggle('on', !!o[k]);
        toast(o[k] ? ('已收藏 · 共 '+Object.keys(o).length+' 集') : '已取消收藏');
      }
    });
  }
  // C13d:mtoc 的 document/window 级监听只绑一次;回调每次现查当前 .mtoc(SPA 换页旧节点自然失联,不泄漏)
  function mtocScroll(){
    var bar=document.querySelector('.mtoc'); if(!bar||!bar.__items) return;
    var items=bar.__items, panel=bar.querySelector('.mtm'), label=bar.querySelector('.mtl'), prog=bar.querySelector('.mtbar');
    var off=bar.offsetHeight+24, idx=-1;
    for(var i=0;i<items.length;i++){
      if(items[i].el.getBoundingClientRect().top<=off) idx=i; else break;
    }
    if(window.scrollY>=document.body.scrollHeight-window.innerHeight-2) idx=items.length-1;
    if(idx!==bar.__cur){
      bar.__cur=idx;
      label.textContent=idx<0?'':items[idx].label;
      bar.classList.toggle('at', idx>=0);
      panel.querySelectorAll('a').forEach(function(a,i){ a.classList.toggle('on', i===idx); });
    }
    var max=document.body.scrollHeight-window.innerHeight;
    prog.style.width=(max>0?Math.min(100,Math.max(0,window.scrollY/max*100)):0)+'%';
  }
  if(!window.__pdMtocEvts){ window.__pdMtocEvts=1;
    var mtocTick=false;
    window.addEventListener('scroll', function(){
      if(!mtocTick){ mtocTick=true; requestAnimationFrame(function(){ mtocScroll(); mtocTick=false; }); }
    }, {passive:true});
    document.addEventListener('click', function(e){
      var bar=document.querySelector('.mtoc.open');
      if(bar && !e.target.closest('.mtoc')){ bar.classList.remove('open'); var t=bar.querySelector('.mtt'); if(t) t.setAttribute('aria-expanded','false'); }
    });
  }
  // C13d 手机端(移植 设计稿/m-detail.js;真站差异:顶栏不吸顶 → 吸顶条 top:0、跳转偏移只算条高;
  // 无人物页 → 去掉 chip 形态分支;小节 = article 里带 id 的 h2,与桌面右栏目录同源)
  function mtoc(){
    var art=document.querySelector('article'); if(!art) return;
    if(art.querySelector('.mtoc')) return;               // SPA nav 后 DOM 是新的;同页重跑不重复建
    // 小节收集照设计稿口径:标题(真站是 h3 正文小节 + h2 收尾节)+ 组标 .pd-sec(金句区与相关区的组标;
    // ⚠️ 本注释会原样进页面,守卫测试断言「无相关集时页面不出现那个区块的中文标题」——别在这里写它),
    // 无 id 就发一个,再按文档序排 —— 设计稿当年也是 h2 + .sec 混收
    var items=[];
    [].forEach.call(art.querySelectorAll('h2[id], h3[id]'), function(h){
      items.push({el:h,label:h.textContent.trim()});
    });
    [].forEach.call(art.querySelectorAll('.pd-sec'), function(sec,i){
      if(!sec.id) sec.id='pdsec'+i;
      var t=(sec.firstChild && sec.firstChild.nodeType===3 ? sec.firstChild.textContent : sec.textContent).trim();
      items.push({el:sec,label:t});
    });
    if(items.length<2) return;
    items.sort(function(a,b){ return a.el.compareDocumentPosition(b.el) & 4 ? -1 : 1; });
    // 不用 innerHTML(守卫测试拦它防「搬节点」被偷换成重写)—— 这里全是自造新壳,逐个 createElement
    function el(tag,cls,txt){ var e=document.createElement(tag); if(cls)e.className=cls; if(txt)e.textContent=txt; return e; }
    var bar=el('div','mtoc');
    var toggle=el('button','mtt'); toggle.type='button'; toggle.setAttribute('aria-expanded','false');
    var mtk=el('span','mtk','目录'), label=el('span','mtl'), caret=el('i','','⌄');
    toggle.appendChild(mtk); toggle.appendChild(label); toggle.appendChild(caret);
    var panel=el('div','mtm'), prog=el('span','mtbar');
    bar.appendChild(toggle); bar.appendChild(panel); bar.appendChild(prog);
    items.forEach(function(it,i){
      var a=document.createElement('a'); a.href='#'+it.el.id; a.dataset.i=i; a.textContent=it.label;
      panel.appendChild(a);
    });
    // 就地插在第一节之前 → 滚到这里才吸顶(第一屏留给标题/播放条/钩子)
    items[0].el.parentElement.insertBefore(bar, items[0].el);
    bar.__items=items; bar.__cur=-1;   // 状态挂节点上:单例监听每次现查当前条,旧节点随 SPA 换页自然失联
    toggle.addEventListener('click', function(){
      var open=bar.classList.toggle('open'); toggle.setAttribute('aria-expanded', open?'true':'false');
    });   // toggle/panel 的监听挂在自家节点上,随节点销毁,不泄漏
    panel.addEventListener('click', function(e){
      var a=e.target.closest('a'); if(!a) return;
      e.preventDefault();
      var it=items[+a.dataset.i];
      window.scrollTo({top:it.el.getBoundingClientRect().top+window.scrollY-bar.offsetHeight-8, behavior:'smooth'});
      bar.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
    });
    mtocScroll();
    // 页尾「这一集涉及」:克隆右栏里的关联框**本体**(同源不漂移;目录已被吸顶条取代不克隆)。
    // 不克隆 .pd-rel 外壳 —— 实测撞过一次空壳(壳先建、框后搬,克隆到只有标题的半成品);
    // 直接选框本身 + 「必须真有链接」守卫,拿不到内容宁可不出块。
    var box=document.querySelector('.right.sidebar .pd-rel blockquote[data-callout]');
    if(box && box.querySelector('a') && !art.querySelector('.mrel')){
      var wrap=el('div','mrel');
      wrap.appendChild(el('h3','','这一集涉及'));
      wrap.appendChild(box.cloneNode(true));
      art.appendChild(wrap);
    }
  }
  // C13j 补遗:实体页关联药丸集数徽标(设计稿 .chp b)。数据 = 页内 script.pd-epn(构建期与 phero 同源);
  // 从**当前页 DOM** 现读 —— SPA 换页不重跑新页内联脚本,闭包里的旧数据会漏配新页(实测),读 DOM 才与页同步。
  // ③ 的药丸段 = 「标题→说明段→链接段」的第二个 p(与 custom.scss 药丸选择器同口径);④ 在 .pd-peers 里,天然不吃徽标。
  function chips(){
    var el=document.querySelector('article script.pd-epn'); if(!el) return;
    var d; try{ d=JSON.parse(el.textContent); }catch(e){ return; }
    var as=document.querySelectorAll('article h2 + p + p > a.internal');
    for(var i=0;i<as.length;i++){
      var a=as[i]; if(a.querySelector('b')) continue;
      var n=d[(a.textContent||'').trim()];
      if(n){ var b=document.createElement('b'); b.textContent=n+' 集'; a.appendChild(b); }
    }
  }
  // C13j 补遗:右栏目录第四节改叫「④ 同主题的人」(设计稿右栏叫法比正文小节标题短;
  // ⚠️ 本注释会原样进页面,别在这里写正文那个小节的中文标题 —— 守卫测试在拿它查空壳);非实体页无 ④,天然 no-op
  function tocPeers(){
    var links=document.querySelectorAll('.toc a');
    for(var i=0;i<links.length;i++){
      var t=(links[i].textContent||'').trim();
      if(t.indexOf('④')===0 && t!=='④ 同主题的人') links[i].textContent='④ 同主题的人';
    }
  }
  // 手机端顶栏左上角:站内点进来的显「← 返回」,外部/分享链接直开的显 站名+logo(ADR 0019 补充,
  // 用户 2026-08-16 手机 #12)。判据 = document.referrer 是不是本站 origin;SPA 换页 referrer 不更新,
  // 故再兜一条「站内换过页没」。
  // ⚠️ 原兜底用 history.length>1 —— 手机/微信内置浏览器分享链接直开也常 >1(会话预置历史),误判成站内、
  //    害得分享页顶上显返回键而非站名(用户 2026-08-29 报)。改用「站内换过页没」判断。
  //    状态挂 window 而非模块级 var(GLM 011[1]):Quartz SPA 换页可能重执行本段脚本,var 会每次重置成当前
  //    pathname → spaNavigated 永远置不了 true。window 上用「未设置才记」守卫,只在**第一次**记真·落地路径,
  //    重执行/换页都存活;__pdSpa 一旦置 true 就 sticky。referrer 用整 origin 比对(new URL),防
  //    「本站origin.evil.com」前缀欺骗(GLM 011[2])。
  if (window.__pdLanding == null) window.__pdLanding = location.pathname; // == null 兼捕未设置态,且不把该字面量带进页面(既有「页面无脏词」闸门)
  function pdSameOrigin(u){ try { return new URL(u).origin === location.origin; } catch (e) { return false; } }
  function direct(){
    if (location.pathname !== window.__pdLanding) window.__pdSpa = true; // 跳到别的页 = 站内导航(sticky)
    var fromSite = pdSameOrigin(document.referrer || '') || window.__pdSpa === true;
    document.body.classList.toggle('pd-direct', !fromSite);
  }
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); direct(); }
  document.addEventListener('nav', all);
  // 跨断点缩放:右栏出现/消失后,深浅色开关要搬到当前看得见的位置去
  var rt; addEventListener('resize', function(){ clearTimeout(rt); rt=setTimeout(adopt, 150); });
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', all); else all();
})();
</script>

<script>
(function(){
  function bind(){
    document.querySelectorAll('button.pd-ts').forEach(function(b){
      if(b.dataset.bound) return;
      b.dataset.bound='1';
      b.addEventListener('click',function(){
        var n=b.nextElementSibling;
        if(n&&n.classList.contains('pd-orig')){ n.remove(); return; }
        var d=document.createElement('div');
        d.className='pd-orig';
        var h=document.createElement('b');
        h.textContent='英文原话 '+(b.dataset.t||'')+(b.dataset.who?' · '+b.dataset.who:'');
        d.appendChild(h);
        d.appendChild(document.createElement('br'));
        d.appendChild(document.createTextNode(b.dataset.en||''));
        b.after(d);
      });
    });
  }
  document.addEventListener('nav', bind);
  bind();
})();
</script>

<script>
(function(){
  function fmt(s){
    if(!isFinite(s)||s<0) s=0;
    var m=Math.floor(s/60), x=Math.floor(s%60);
    return (m<10?'0':'')+m+':'+(x<10?'0':'')+x;
  }
  function wire(box){
    if(box.dataset.wired) return; box.dataset.wired='1';
    var a=box.querySelector('audio'), pb=box.querySelector('.pb'),
        bar=box.querySelector('.bar'), fill=box.querySelector('.bar > i'),
        tm=box.querySelector('.tm'), t2=box.querySelector('.t2');
    if(!a||!pb||!bar||!fill||!tm) return;
    var total=0;
    function paint(){
      var cur=a.currentTime||0;
      fill.style.width=(total?(cur/total*100):0)+'%';
      tm.textContent=fmt(cur)+(total?' / '+fmt(total):'');
    }
    a.addEventListener('loadedmetadata',function(){
      total=a.duration||0;
      if(total&&t2) t2.textContent=Math.round(total/60)+' 分钟 · AI 合成朗读';
      paint();
    });
    a.addEventListener('timeupdate',paint);
    a.addEventListener('play',function(){ pb.textContent='❚❚'; pb.setAttribute('aria-label','暂停'); });
    a.addEventListener('pause',function(){ pb.textContent='▶'; pb.setAttribute('aria-label','播放'); });
    a.addEventListener('ended',function(){ pb.textContent='▶'; });
    pb.addEventListener('click',function(){ if(a.paused) a.play(); else a.pause(); });
    function seek(ev){
      if(!total) return;
      if(ev.clientX==null) return;
      var r=bar.getBoundingClientRect();
      var x=Math.min(Math.max(ev.clientX-r.left,0),r.width);
      a.currentTime=(x/r.width)*total;
      paint();
    }
    bar.addEventListener('pointerdown',function(ev){
      seek(ev);
      function mv(e){ seek(e); }
      function up(){ document.removeEventListener('pointermove',mv); document.removeEventListener('pointerup',up); }
      document.addEventListener('pointermove',mv); document.addEventListener('pointerup',up);
    });
    a.addEventListener('error',function(){
      box.classList.add('pd-play-dead');
      box.textContent='本集中文精华音频还没生成好,稍后再来听。';
    });
  }
  function all(){ document.querySelectorAll('.pd-play').forEach(wire); }
  document.addEventListener('nav', all);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', all); else all();
})();
</script>
