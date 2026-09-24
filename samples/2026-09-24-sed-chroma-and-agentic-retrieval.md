---
title: 上下文会腐烂：Chroma CTO 谈检索的下一站与 200 亿参数搜索子智能体
podcast: Software Engineering Daily
date: 2026-09-24
source_url: undefined
duration: "52:36"
type: episode
cover: "#64748b"
description: Chroma CTO Hamad Bashir 讲解 context rot 研究发现，以及为何一个 200 亿参数的小模型能在搜索任务上匹敌前沿大模型。
host: "[[Hamad Bashir]]"
cohosts: ["[[Gregor Vand]]"]
companies: ["[[Chroma]]", "[[ChromaDB]]", "[[Context 1]]"]
concepts: ["[[上下文腐烂]]", "[[智能体搜索]]", "[[向量搜索]]", "[[上下文工程]]", "[[小模型]]", "[[BYOC]]", "[[开放权重]]", "[[自编辑上下文]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-24-sed-chroma-and-agentic-retrieval#post","headline":"上下文会腐烂：Chroma CTO 谈检索的下一站与 200 亿参数搜索子智能体","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-24-sed-chroma-and-agentic-retrieval","mainEntityOfPage":"https://talk.solomind.cc/2026-09-24-sed-chroma-and-agentic-retrieval","description":"Chroma CTO Hamad Bashir 讲解 context rot 研究发现，以及为何一个 200 亿参数的小模型能在搜索任务上匹敌前沿大模型。","datePublished":"2026-09-24","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Hamad Bashir"},{"@type":"Person","name":"Gregor Vand"},{"@type":"Organization","name":"Chroma"},{"@type":"Organization","name":"ChromaDB"},{"@type":"Organization","name":"Context 1"},{"@type":"Thing","name":"上下文腐烂 (context rot)"},{"@type":"Thing","name":"智能体搜索 (agentic search)"},{"@type":"Thing","name":"向量搜索 (vector search)"},{"@type":"Thing","name":"上下文工程 (context engineering)"},{"@type":"Thing","name":"小模型 (small model)"},{"@type":"Thing","name":"BYOC"},{"@type":"Thing","name":"开放权重 (open weights)"},{"@type":"Thing","name":"自编辑上下文 (self-editing context)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"上下文会腐烂：Chroma CTO 谈检索的下一站与 200 亿参数搜索子智能体","item":"https://talk.solomind.cc/2026-09-24-sed-chroma-and-agentic-retrieval"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>上下文会腐烂：Chroma CTO 谈检索的下一站与 200 亿参数搜索子智能体</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 上下文会腐烂：Chroma CTO 谈检索的下一站与 200 亿参数搜索子智能体

<div class="pd-byl"><b>Hamad Bashir</b> · Chroma CTO · 2026-09-24</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-24-sed-chroma-and-agentic-retrieval.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">智能体的查询频率不是人类的频率，而是智能体式的频率。</div><div class="a">— Hamad Bashir <button class="pd-ts" data-t="11:19" data-who="Hamad Bashir" data-en="And the agents don't query at a human rate, they query at an agentic rate." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Hamad Bashir]] · [[Gregor Vand]]
>
> **公司** [[Chroma]] · [[ChromaDB]] · [[Context 1]]
>
> **概念** [[上下文腐烂]] · [[智能体搜索]] · [[向量搜索]] · [[上下文工程]] · [[小模型]] · [[BYOC]] · [[开放权重]] · [[自编辑上下文]]

让 AI 应用去检索数据，早期答案是[[向量搜索|向量搜索]]，后来大家以为这个问题已经解决得差不多了。但 [[Chroma|Chroma]] 的 CTO [[Hamad Bashir|Hamad Bashir]] 在这一集里指出：智能体的兴起让检索的难度和成本都上了新台阶——而答案可能不是更大的模型，而是一个专门训练的[[小模型|小模型]]。Hamad 的背景横跨机器学习、计算机视觉和数据系统，他所在的 Chroma 发表过影响力很大的 [[上下文腐烂|Context Rot]] 论文，最近又发布了 [[Context 1|Context 1]]——一个 200 亿参数的「检索子智能体」，能以前沿模型的质量做[[智能体搜索|智能体搜索]]，但成本低一个数量级、速度快一个数量级 <button class="pd-ts" data-t="02:28" data-who="Hamad" data-en="He is based in Singapore and can be found via his profile at van.hk or on LinkedIn. Hello and welcome to Software Engineering Daily. My guest today is Hamad Bashir from Chroma." aria-label="回原文"></button>。

## 为什么他们「被迫」造了个数据库

Chroma 最初并不是想做数据库。他们解决的问题是计算机视觉的主动学习(每天从线上数据里挑出值得标注的那一小部分)，语言模型兴起后，他们发现这和「推理时给模型挑数据」是同一类问题——也就是搜索。他们本想用市面上现成的向量搜索方案，结果发现全都胜任不了 <button class="pd-ts" data-t="07:23" data-who="Hamad" data-en="So if we kind of start there, like I guess the journey of Chroma from its founding, I guess, or when you came into Chroma and what were you working on at the start and like how has that evolved?" aria-label="回原文"></button>。

根本原因是负载形态不同。为传统搜索构建的系统围绕「一个巨大的索引」设计：十亿条信息在一个索引里，要加数据就得给集群增删节点、重新均衡，非常手动、非常运维密集。

而 AI 应用几乎相反——索引极度分区：每个客户一个索引、每个团队一个索引、每段聊天历史一个索引、每个智能体一个索引。这要求系统能存储数量极其庞大的独立索引并高准确度地搜索它们。把所有数据塞进一个大索引有两个问题：一是要为索引随时在线付成本，二是向量搜索被分区后准确度会下降，所以最好的做法是在建索引时就硬分区 <button class="pd-ts" data-t="08:48" data-who="Hamad" data-en="AI applications have an almost opposite workload. Where instead of one or a handful of very large indices, you have extremely partitioned indices. So you might have an index per customer, an index per team, an index per chat history, an index per agent." aria-label="回原文"></button>。

他们的解法押在对象存储上。各大云的对象存储开始支持条件写入(AWS 直到 2024 年才推出)，这让在对象存储之上构建数据库成为可能。[[ChromaDB|ChromaDB]] 由此诞生：完全建在对象存储上，经济性才撑得起「每个客户一个索引」——在此之前，在三重复制的磁盘或 NVMe SSD 上做这件事，你会直接烧光钱 <button class="pd-ts" data-t="09:52" data-who="Hamad" data-en="And the core of it was at the time object storage. So Amazon has S3 and GCP has GCS. Azure has their own thing." aria-label="回原文"></button>。

## 智能体让检索难了一个量级

智能体不只改变查询数量，还改变查询频率。人最多每 30 秒发一次查询就算很快，智能体会愉快地每一到两秒发一次，而且每次还是五个、六个并行查询。

读取端的压力因此大增。这里他们因祸得福：核心架构本质无状态(共享存储层，加节点即可服务读取)，能吸收这种弹性——这是当初没预料到、建成后大幅受益的设计 <button class="pd-ts" data-t="11:12" data-who="Hamad" data-en="Yeah, absolutely. And I think part of it is now the agents don't just issue one query, they'll issue five queries in parallel. And the agents don't query at a human rate, they query at an agentic rate." aria-label="回原文"></button>。

## Context Rot:上下文塞得越多，模型越笨

Context Rot 论文是想用实证方式证明大多数人凭感觉早已知道的事：随着上下文窗口利用率增加，模型性能会退化。实验很朴素——比如注入一个重复词很多次然后问模型这个词在哪里不再出现，或对大海捞针问题(在大量文档里找一条特定信息)做有趣的重排。结果是在几万 token 的量级上出现极其陡峭的性能下滑，而且即便在今天的前沿模型上依然成立——论文发布后模型已经迭代了约三代，退化还在 <button class="pd-ts" data-t="12:46" data-who="Hamad" data-en="Could you just walk through the core of what the Context Rot finding was, especially for anyone that hasn't read the paper? Yeah, I think context one was our attempt to prove something to ourselves empirically and scientifically what most people already kind of knew on a vibes basis." aria-label="回原文"></button>。

一个反直觉的发现：被打乱、不连贯的「干草堆」有时反而比结构化的更能帮模型找到「针」。核心机制是：随着干扰项增多，模型忽略「看起来相关但其实不相关」的信息的能力会下降。

模型尤其不擅长区分两个并不矛盾、但都关于同一件事的事实。一个简单例子：你问格鲁吉亚的人口并明确要的是美国的佐治亚州，文档里同时有国家格鲁吉亚和佐治亚州的信息，模型仍可能混淆。现实映射很直接：模型检索到两份同名人物的文档，把一个人的工作安到另一个人头上，指引你去问公司里错误的人；或者编码智能体在有两个认证系统的代码库里，聚焦到错误的那个 <button class="pd-ts" data-t="17:17" data-who="Hamad" data-en="Can you talk to us a bit about that? Yeah, I think the general observation is that as we add distractors to the context window, the ability of the model to ignore distracting information or information that looks like it could be correct decreases." aria-label="回原文"></button>。

这指向了「[[上下文工程|上下文工程]]」——如何选择放进上下文窗口的信息，以最大化模型下一轮成功的机会。它不只是发起什么查询，还包括怎么组织数据、怎么写提示词、给模型访问什么数据。而且就算解决了性能退化，无限扩大上下文在成本上也撑不住 <button class="pd-ts" data-t="14:13" data-who="Hamad" data-en="And what this points to is the need for a disciplined approach to deciding what you're going to put into the context window. And whenever there's some new paradigms in computer science, people are very quick to ascribe terms like so-and-so engineering or so-and-so science." aria-label="回原文"></button>。

## Context 1:搜索不需要那么多「智能」

Context 1 被设计为一个配合大模型使用的「检索子智能体」——这正是现在编码智能体(Codex、Claude Code、Cursor)都在用的模式：大模型启动一个子智能体去执行任务。背后的理念是传统计算的老办法：关注点分离，在正确的时间把任务交给正确的系统。

他们的判断是，搜索这个狭窄问题——理解用户意图、分解成查询、判断文档相关性、迭代执行——不需要那么多原始智能，更需要的是极快地大量执行。所以衡量指标是每秒 token 数，而不是模型有多大 <button class="pd-ts" data-t="22:07" data-who="Hamad" data-en="Like, what does that even mean? Yeah. So the way that we design context one to be used is as a sub-agent with a larger model." aria-label="回原文"></button>。

**工具集**：任何智能体搜索框架的标配是两个工具——「搜索」和「获取结果」(给它 10 条蓝色链接，再给它点击链接的能力)。Chroma 加的第三个东西是核心创新：**[[自编辑上下文|自编辑上下文]]**。

他们给了模型一个 prune chunks 工具，允许它回过头从自己的上下文窗口里移除文档。这替代了主流的「压缩」方案——对小模型来说压缩会有很大信息损失。

这是 KVCache 一致性和整体 token 用量之间的权衡：智能体搜索极耗 token,每个碰过的文档都会进上下文；模型边走边删，就能把窗口保持在约 32,000 token 的有界范围，预填充和解码都快。事后看这并不意外：模型本来就要判断相关性才能完成任务，删掉自己判断为不相关的文档只是同一件事 <button class="pd-ts" data-t="25:24" data-who="Hamad" data-en="Those are the two things that you're trying to give it. And then the one thing that we were interested in is this idea of self-editing context or active context management." aria-label="回原文"></button>。

**训练**：基础模型是 GPTOSS 20B,两阶段训练——先是监督微调(用合成数据 + 从[[开放权重|开放权重模型]]蒸馏的行为)，再上强化学习。剪枝准确率从基础模型的约 80% 提升到训练后的 95% 以上，最新内部 checkpoint 接近 97-98%。

他们还做了分阶段课程：早期只给一到两跳的简单问题，再逐步加大难度。一个细节：GPTOSS 20B 原生不会并行工具调用，但只靠 SFT 教会这个行为，模型在还没做任何强化学习之前就大幅减少了发现信息所需的轮次。他们甚至在研究把延迟本身作为训练目标，让模型自己学出兼顾准确率和延迟的最优剪枝策略 <button class="pd-ts" data-t="27:18" data-who="Hamad" data-en="Such that it's trained to be very accurate in when it prunes. So when we trained Context 1, the base model is actually GPTOSS 20B, so it's a 20 billion parameter model." aria-label="回原文"></button>。

**为什么小模型能做到**：Hamad 的核心信念是——搜索时模型的那套「行为」比它的「推理」更有价值。搜索存在一个可遵循的算法：把高层次查询分解成低层次查询计划、判断页面相关性、决定后续查询、分析最终结果。

这些子任务相当窄，可以通过训练样本单独优化。结果：Context 1 20B 在搜索基准上匹配了 Opus 4.5、Sonnet 4.5、Gemini 3.1 Pro 等，同时跑到约每秒 400-500 token(Opus 只有 40-80)<button class="pd-ts" data-t="29:33" data-who="Hamad" data-en="That seems pretty impressive. It has an understatement. So I mean like, what's kind of your read on why a purpose-trained small model can actually get there, I guess?" aria-label="回原文"></button>。

他也承认边界：稳态下大模型总会胜过小模型，世界知识确实有用——记得某个主题的信息就能发出更好的查询。但小模型用 LoRA 微调足够便宜，在足够窄的语料库上，教会它「这个语料库的地图和词汇」就能让它搜得更好，就像人搜自己的 Google 云端硬盘比搜陌生地方更高效 <button class="pd-ts" data-t="32:03" data-who="Hamad" data-en="So I think the reason that you can get these small models to be good at these tasks is because they don't require a lot of reasoning capacity and they don't require a lot of subtle decision making." aria-label="回原文"></button>。

## 为什么连模型权重都开源

Context 1 的权重以 Apache 许可证开源了。理由很实际：开源会有更多人用它、告诉你什么有效什么无效、把它集成到你够不到的地方；而且模型够小可以本地跑——Chroma 早期就是靠本地版数据库长起来的，他们信奉「在开发者所在之处与之相遇」。Hamad 的表态很直接：别人发布工作时我们在学习、在受益，Context 1 的训练本身就字面意义上用了开放权重模型，所以现在是正和游戏——AI 仍处于非常早期，不是零和思维的时候 <button class="pd-ts" data-t="33:22" data-who="Hamad" data-en="Yeah. So Chroma is an open source company, like even our core database is Apache 2.0. I think there's many reasons to do open source." aria-label="回原文"></button>。

## 开发者的典型路径与 BYOC 的教训

典型路径是:本地嵌入式版起步(pip install 即用)→ 原型完成后用 CLI 把数据推上云。想自己控制分块策略和嵌入模型就直接用数据库；想省事就用 Sync 产品(托管 ETL,对接 S3、GitHub、网站等数据源)。

行业最佳实践已经收敛：用带 splade 的稀疏向量 + 质量够但别太大的稠密嵌入模型——事实证明不需要 4096 维，更小维度的模型能以低得多的成本拿到同样的准确率。等开始追求低延迟的高质量搜索时，再上 Context 1 <button class="pd-ts" data-t="36:09" data-who="Hamad" data-en="Or is there some classic arc you see of how a developer starts and then adopts more of the product? Yeah, I think most people, their first interaction with Chroma to date is the local embedded version of the database." aria-label="回原文"></button>。

关于 [[BYOC|BYOC]](自带云：把代码部署进客户 VPC,控制平面留在 Chroma 侧)，Hamad 给的建议非常直接：**不要轻易接**。他们从第一天就按 BYOC 设计，仍然极其痛苦——事后要补上几乎不可能，因为整个架构都取决于它。

它迫使你早早画出感觉不自然的架构边界，极大牺牲速度。他给那位被大客户推着做 BYOC 的 YC 创始人的话是：如果你要做，确保你会因此赚很多钱，因为这是个巨大的分心源。

但他们坚持做的原因也真实：目标客户都是大规模场景，而且买方已经开始知道这种部署模式能过安全审查、能过合规审查。具体设计上，数据平面不开放任何端口，一切靠反向隧道、由数据平面主动外连；运维也是轮询拉取式而非直连推入——Hamad 坦言这是「税」，理想情况下一个 post 请求就该完事。

客户担心控制平面存了什么？因为开源，他们直接把控制平面代码发给客户自己读，甚至用 Slack 里的机器人智能体遍历代码、生成一份「我们采集哪些数据」的、直接指向代码的清单 <button class="pd-ts" data-t="39:27" data-who="Hamad" data-en="And I just find that super fun and interesting that that's kind of where we are now when it comes to building product. If we sort of look at like how a larger enterprise would want to use something like this, you guys have quite a bit of material on what's called BYOC, so bring your own cloud." aria-label="回原文"></button>。

## 终局：智能跑在数据库里面

对于「Postgres + pgvector 就够了」的质疑，Hamad 的回应是一个长期类比：语言模型是 CPU,旁边需要一个子系统来决定模型该看到什么信息、什么该存储、什么该更新整合——就像硬盘有自己的接口、控制器和操作系统。今天它长得像数据库，但方向是「智能真正运行在数据库内部」，出于性能和领域感知的原因，这两件事必须一起设计。

他给出一个时间判断：去年主流模型还是每秒 100 token,今年消费者会普遍用上每秒 1000 token 的模型，几年后每秒 10,000 token 并非不可想象。到那时，「一次网络调用去搜索系统」的延迟假设就不成立了——他设想未来甚至完全绕过 CPU,直接在 GPU 上启动子内核内联完成索引搜索，再把数据直接喂回语言模型。能装进任何非结构化数据、能满足任何查询的系统会存在，但它不会长得像 Postgres <button class="pd-ts" data-t="47:34" data-who="Hamad" data-en="Or like, how are you guys thinking about it? And like, how are you thinking of building into the future? I think there will always be a need for managing the context of language models." aria-label="回原文"></button>。

## 本集带走

- **检索架构要按 AI 应用的负载设计**：AI 应用是海量小索引(每客户/每团队/每智能体一个)，不是一个大索引；分区必须在建索引时做，不能靠查询时过滤。
- **上下文塞得越多模型越笨，且至今没被新模型解决**：几万 token 就出现陡峭性能下滑，干扰项越多越糟——上下文工程(精选进入上下文的内容)是必修课。
- **窄任务可以交给小模型**：搜索 = 意图分解 + 相关性判断 + 迭代执行，是行为不是推理；专门训练的 20B 模型能以 10 倍速、1/10 成本匹配前沿大模型。
- **自编辑上下文优于压缩**：给模型一个「从自己上下文里删文档」的工具，准确率练到 95%+ 后，既省 token 又让推理更快。
- **BYOC 别轻易做**：必须从第一天按它设计，事后补不上；但若目标客户是大企业，它能过安全和合规审查，可能就是入场券。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">智能体的查询频率不是人类的频率，而是智能体式的频率。</span>  
> *And the agents don't query at a human rate, they query at an agentic rate.*  
> <span class="qm">—— Hamad Bashir · [11:19]</span> ^q1

> <span class="qz">通过运行这些实验，你很快会看到在几万 token 的量级上出现极其陡峭的性能下滑。</span>  
> *And by running these experiments, what you quickly see is a super sharp drop off in the tens of thousands of tokens.*  
> <span class="qm">—— Hamad Bashir · [13:38]</span> ^q2

> <span class="qz">模型在区分两个并不矛盾、但都是关于同一件事的事实时相当糟糕。</span>  
> *So models are quite bad at disambiguating between two facts that aren't in contradiction but that are about the same thing.*  
> <span class="qm">—— Hamad Bashir · [17:30]</span> ^q3

> <span class="qz">在大多数情况下，你并不需要那么多原始智能，你更需要的是能非常快速地做大量这些事情的能力。</span>  
> *And in most cases, you don't need that much raw intelligence as much as you need the ability to do a lot of that very quickly.*  
> <span class="qm">—— Hamad Bashir · [23:11]</span> ^q4

> <span class="qz">用大模型来调度一支更小模型的舰队，我认为这是我们相当坚定信奉的范式，它已经被证明是编码系统的运作方式，而且我认为在未来一年它会进入几乎每一个智能体。</span>  
> *Over a fleet of smaller models is I think a paradigm that we believe in quite firmly and it's already proving out to be how coding systems will work and I think it'll find its way into almost every agent over the coming year.*  
> <span class="qm">—— Hamad Bashir · [24:29]</span> ^q5

> <span class="qz">仅仅是让模型并行进行工具调用，就能给它带来巨大的优势，让它能非常快速地减少发现信息所需的轮次。</span>  
> *Even just getting the model to tool call in parallel gives it a huge advantage in its ability to very quickly reduce the number of turns that it needs in order to discover information.*  
> <span class="qm">—— Hamad Bashir · [31:31]</span> ^q6

> <span class="qz">所以在稳态下，一个更大的语言模型大概总是会胜过更小的模型，但小模型用 LoRA 微调足够便宜，以至于在足够窄的语料库上，你也可以非常快地微调一个小模型，让它在个性化语料库上变得更好，并为特定任务对模型进行个性化。</span>  
> *And so a larger language model will probably always outperform a smaller one at steady state, but the smaller ones are cheap enough to fine tune using LoRa that on narrow enough corpuses, you can very quickly also fine tune a small model on a narrow corpus and make it better at individualized corpuses and personalize the model for specific tasks.*  
> <span class="qm">—— Hamad Bashir · [32:22]</span> ^q7

> <span class="qz">而会是智能真正运行在数据库内部。</span>  
> *It'll be intelligence actually runs inside of the database.*  
> <span class="qm">—— Hamad Bashir · [49:09]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-17-talks-every-company-should-have-a-brain-garry|用 Markdown 组建一支军队:Y Combinator 掌门人的 AI 原生公司蓝图]]<span class="pd-rz">同概念:上下文工程 (context engineering)、RAG</span>
- [[2026-09-01-cogrev-write-change-recall-forget-mongodb-s-pet|数据库60年 vs 智能体18个月：MongoDB 谈检索与记忆]]<span class="pd-rz">同概念:向量搜索 (vector search)、RAG</span>
- [[2026-09-08-eyeonai-86-of-what-coding-agents-do-is-just-read|把 100 万 token 用出 5 万的体验：SubQuadratic 的稀疏注意力]]<span class="pd-rz">同概念:上下文工程 (context engineering)、RAG</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-16-talks-connect-ai-to-billions-of-legal-document|法律 AI 的搜索之战：从 Elasticsearch 到对象存储原生]]<span class="pd-rz">同概念:向量搜索 (vector search)、对象存储 (object storage)</span>
- [[2026-07-26-a16z-ben-horowitz-the-fight-over-open-source|Ben Horowitz 谈开源 AI 保卫战:没有垄断,才有安全]]<span class="pd-rz">同概念:开放权重模型 (open weights)</span>
- [[2026-08-09-talks-velocity-sickness-what-happens-when-your|速度病：当团队 10 倍速写代码却推不出产品，怎么治]]<span class="pd-rz">同概念:上下文工程 (context engineering)</span>

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
