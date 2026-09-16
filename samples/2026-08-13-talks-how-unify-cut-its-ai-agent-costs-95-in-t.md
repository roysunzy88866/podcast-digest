---
title: "9亿美元管道背后:Unify CTO 谈怎么把销售智能体的成本打下来"
podcast: 精选演讲
date: 2026-09-17
source_url: undefined
duration: "68:20"
type: episode
cover: "#64748b"
description: Unify 联合创始人兼 CTO Connor Hegey 拆解外呼智能体平台：怎么压成本、抠缓存、做记忆与评估。
host: "[[Connor Hegey]]"
companies: ["[[Unify]]", "[[OpenAI]]"]
concepts: ["[[智能体]]", "[[子智能体]]", "[[harness]]", "[[提示词缓存]]", "[[记忆]]", "[[评估]]", "[[LLM 当裁判]]", "[[沙箱]]", "[[人在回路]]", "[[规划步骤]]"]
category: 智能体
tags:
  - 智能体
  - 增长与销售
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-13-talks-how-unify-cut-its-ai-agent-costs-95-in-t#post","headline":"9亿美元管道背后:Unify CTO 谈怎么把销售智能体的成本打下来","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-13-talks-how-unify-cut-its-ai-agent-costs-95-in-t","mainEntityOfPage":"https://talk.solomind.cc/2026-08-13-talks-how-unify-cut-its-ai-agent-costs-95-in-t","description":"Unify 联合创始人兼 CTO Connor Hegey 拆解外呼智能体平台：怎么压成本、抠缓存、做记忆与评估。","datePublished":"2026-09-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Connor Hegey"},{"@type":"Organization","name":"Unify"},{"@type":"Organization","name":"OpenAI"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"子智能体 (subagent)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"提示词缓存 (prompt caching)"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"LLM 当裁判 (LLM as a judge)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"人在回路 (human in the loop)"},{"@type":"Thing","name":"规划步骤 (planning step)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"9亿美元管道背后:Unify CTO 谈怎么把销售智能体的成本打下来","item":"https://talk.solomind.cc/2026-08-13-talks-how-unify-cut-its-ai-agent-costs-95-in-t"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>9亿美元管道背后:Unify CTO 谈怎么把销售智能体的成本打下来</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 9亿美元管道背后:Unify CTO 谈怎么把销售智能体的成本打下来

<div class="pd-byl"><b>Connor Hegey</b> · Unify CTO · 2026-09-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-13-talks-how-unify-cut-its-ai-agent-costs-95-in-t.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">当你和那些优秀的人交谈时，他们真正说的是：我怎么找到那些问题严重到不管我说什么他们都会买的人？</div><div class="a">— Connor Hegey <button class="pd-ts" data-t="02:15" data-who="Connor Hegey" data-en="When you talk to great ones, right, what they really say is, how do I find the people who have a problem that is so bad that they'll buy it no matter what I say?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Connor Hegey]]
>
> **公司** [[Unify]] · [[OpenAI]]
>
> **概念** [[智能体]] · [[子智能体]] · [[harness]] · [[提示词缓存]] · [[记忆]] · [[评估]] · [[LLM 当裁判]] · [[沙箱]] · [[人在回路]] · [[规划步骤]]

把一个[[智能体|智能体]]平台支撑起 9 亿美元的销售管道，但真正让 [[Unify|Unify]] 联合创始人兼 CTO [[Connor Hegey|Connor Hegey]] 在这一集里反复敲打的，是成本：上线前两周他们紧急做了 90% 到 95% 的成本优化，否则用户在每月 20 美元的套餐里发一条消息就把额度烧光了。这一集就是他逐层拆解：一个跑在云端、替销售代表干活的智能体系统，成本、缓存、记忆、[[评估|评估]]、[[沙箱|沙箱]]每一步是怎么抠出来的。

## Go-to-market 本质是个搜索问题

Unify 做的是给 go-to-market(把产品推向市场的那套销售与营销动作)做 AI。他们的底层判断是：销售不是「说服」，而是搜索——找到那些问题严重到「不管你说什么他们都会买」的人，而这是对海量非结构化、语义丰富的网络数据做搜索，恰好是 LLM 擅长的事 <button class="pd-ts" data-t="02:15" data-who="Connor Hegey" data-en="Persuasion, right, is to convince you to buy their product, right? When you talk to great ones, right, what they really say is, how do I find the people who have a problem that is so bad that they'll buy it no matter what I say?" aria-label="回原文"></button>。

最早的版本是一个网络研究智能体：拿一个结构化问题(比如「这家公司做 KYC 吗」——KYC 指金融合规里的身份核验)，去翻对方的服务条款、页面 HTML,找证据再回答。明显案例(银行一定做 KYC)不值钱，价值在长长的尾部——那通常占客户总可触达市场(TAM)的两位数比例。

三年的演进方向很清晰：三年前是拖拽式工作流，在一张百万行的线索表上异步跑一百万个智能体；而上周刚发布的聊天产品逻辑反过来了——前沿模型变强后，分布的头部用聪明的 API 串联就能搞定，只有尾部才需要智能体。所以他们现在是「给每个销售代表配一个揣在兜里的工程师」，而不是取代销售 <button class="pd-ts" data-t="08:21" data-who="Connor Hegey" data-en="You know, I don't think humans are going away in that part at all. I certainly don't want to buy from an AI agent. You know, if you guys start to sell to us with an AI agent, I'm going to lose my mind." aria-label="回原文"></button>:「我肯定不想从一个 AI 智能体那里买东西。」

## 出奇相似的编程智能体 harness

他们的 harness(智能体的运行框架)和 Claude Code 这类编程智能体「出奇地相似」：唯一的原则性差别是产物不是改文件，而是改数据库记录、写邮件。其余标准全部一样，且他们列得很具体：必须跑云端(销售代表不会在本地跑东西)、必须持久化(中途被杀要能优雅重启、能重新挂回去)、代码必须写 TypeScript(全公司代码库如此)、环境必须便宜且秒级启停，还有一条 P0:强租户隔离——客户之间的数据不但确定性地隔离，还要「可证明地不可能」被智能体越权访问。

模型不擅长直接操作表格数据，但擅长写 pandas 风格的代码，所以他们在数据库上虚拟化了一张表，重新实现了一整套 pandas 式函数(过滤、取行、聚合、重排列、逐行映射函数)。约 80% 的智能体运行最终都在操作这张表。

[[子智能体|子智能体]]的设计也很干脆：「子智能体就是一个函数调用」——主智能体可以传入提示词、模型、推理预算等参数，拿到一个任务句柄后 await 或轮询，所有 sleep 都用非阻塞的(后端大量跑在 Temporal 上)。这套设计直接服务成本：跑一千行子智能体，每行哪怕一美分也是 10 美元，等于烧光基础套餐，所以它写代码做逐行映射时，会先瀑布式降级调用便宜的 API,穷尽所有选项才把子智能体当兜底。

## 提示词缓存：95% 命中率是抠出来的

这是全集技术含量最高的一段。[[提示词缓存|提示词缓存]](prompt caching,让模型复用上一次调用已算好的中间结果)比全量输入便宜 90%,「拿不到缓存命中你就完蛋了」<button class="pd-ts" data-t="19:44" data-who="Connor Hegey" data-en="You know, binary makes your product work or not work basically as well as speed it up. So it's really important that you get these cache hits or otherwise you're just, you're cooked." aria-label="回原文"></button>。

但 [[OpenAI|OpenAI]] 默认按开头几十个字符做哈希来路由，且每个缓存键只保证约每秒 15 个请求能命中——超出的请求会落到别的机器上各自冷启动。他们把命中率做到 95%,方法是利用自己的先验：取用户 ID 做哈希分成 16 桶、再叠一个 1-30 的随机数，把峰值吞吐摊到几百个缓存键上均匀预热。他认为这件事「不可能内建到供应商那边，因为他们不知道进来的流量分布」；而供应商也不在乎——「反正不管怎样他们都收你的钱」<button class="pd-ts" data-t="28:08" data-who="Connor Hegey" data-en="You know, predictively look at all the different attributes that you're sending and then do it, which would be an interesting product. But for them, they don't care, right?" aria-label="回原文"></button>。

几个反直觉的细节：必须用 responses API,否则会损失 20%-30% 的质量，因为调用之间不保留思考轨迹；而 OpenAI 默认会在下一轮删掉上一轮的全部旧 thinking tokens,这会导致整段缓存 miss,而他们工具调用的输出远大于那几千个 thinking tokens——直到上个月 OpenAI 出了个保留参数才解决。

## 邮件必须过人审，一次看一封

智能体替人发邮件，他们绝不让它「没人看过就发出去」，采用提案-批准制：右侧全屏展示邮件，可编辑、可批准。批量场景下，试过表格里平铺全文加侧边列，结果太嘈杂——用户一个一个快速过，远比一次看一堆高效。

二阶交互是关键：高亮一句话要求修改，且不止改这一封，而是改全部 100 个 enrollment。实践中用户大约审前 15 封、给出足够泛化的反馈后就放心全发。「如果说人类要在这个系统的某个环节花时间，这就是该花时间的点」<button class="pd-ts" data-t="34:39" data-who="Connor Hegey" data-en="It really depends. Some people, this is, if humans were going to spend time in one part of the system, this is the point to spend time in. Which is kind of the, you know, funny thing." aria-label="回原文"></button>——因为人与人之间的连接点才是销售的 alpha,自动化掉的是检索研究，不是这句真诚的冲浪寒暄。

## 记忆：固定键 + 提案、合并、废弃

个性化靠两条路：一是智能体内置记忆；二是 Unify 特有的——集成用户的 Gmail 收件箱，做初始知识提取，学的不是泛泛的语气，而是「你怎么谈论你的产品、对什么类型的人说什么类型的话」。

数据结构存在 Postgres 里：值是自然语言，键是固定的六七个类别(邮件语气、代表属性、公司属性、软/硬用户偏好等)，外加一个「其他」大杂烩桶。不开放任意键的原因：「每增加一个复杂度维度都是乘性的而不是加性的」<button class="pd-ts" data-t="40:03" data-who="Connor Hegey" data-en="We decided not to do the arbitrary keys and have the agent sort of self-manage. Largely because every added dimension of complexity is multiplicative instead of additive." aria-label="回原文"></button>。

流程上先发散再收敛：大约每三条消息轻量提取一批候选记忆，后台 cron 任务再把候选和历史活跃记忆一起做论证——提升、合并、废弃、取代，且必须输出结构化的操作和沿袭谱系。这么做主要是为了可观测性：「太多是黑盒…

…三个月后我们回来看系统时能说『它为什么合并了这两条记忆』」<button class="pd-ts" data-t="42:30" data-who="Connor Hegey" data-en="You say, you know, and we have evals that are great, right? We love evals. You can learn things over time." aria-label="回原文"></button>。记忆不向用户展示结构化 UI(「我看一堆关于我的要点会尴尬」)，但用户明说的「记住某事」永远作为一等公民插入——最好玩的用例是一堆销售代表让智能体「永远像海盗一样跟我说话」。

## 评估：像自动驾驶一样看录像

他的评估理念来自做自动驾驶的经历：当年团队坐在一起，用投影仪看不同模型检查点跑同一段视频，逐帧记笔记——「没有什么评估比看一百个或者一千个例子更好的了」<button class="pd-ts" data-t="50:36" data-who="Connor Hegey" data-en="And we took notes and talked about it and said, you know, oh, like it actually gets this right there and this wrong there. And there's just no better eval than looking at a hundred examples or a thousand examples." aria-label="回原文"></button>。所以人工翻例子占大头，按用户意图分类过滤;回归测试则把线上轨迹抽成 DQA 集(专用 QA 集)，覆盖核心用例、提示词注入等对抗用例、以及「用户中途说西班牙语」这种意外分布，每次只迭代一个桶。比如发现智能体对某个数据供应商夸张地过度调用(要 10 家公司调了 500 次)，就抽 40 个跑偏样本建集，用工具调用次数、轨迹效率、LLM 成本等一大堆指标压下去——浪费的工具调用是他们的头号治理对象。

用 [[LLM 当裁判|LLM 当裁判]](或当模拟用户)有一条铁律：裁判模型必须换家族——跑 GPT 就用 Anthropic 模型判，否则会出现智能体互相对话的模式坍缩，「相当于人类的群体思维」，你要的是近乎对抗性的关系 <button class="pd-ts" data-t="53:50" data-who="Connor Hegey" data-en="Probably for a bunch of obvious reasons, but just to say it out loud, right? You have this, like, you know, mode collapse of, like, agents talking to each other or this, like, you know, overlapping distributions where it's, you know, the equivalent of groupthink in humans." aria-label="回原文"></button>。每条评估跑 pass-k(五次)而非一次。会花钱的 API 大多直接真实调用承受成本，因为 LLM 成本才是大头。

## 沙箱成本：零

他们不用完整 VM——VM 要写一堆 CLI、处理网络和租户隔离，复杂度爆炸。方案是开源框架 Monty 的思路：智能体在一个 REPL(交互式解释器)里跑真代码，但代码一旦调到被绑定的函数，整个 REPL 挂起、控制权交回宿主进程，宿主在函数层面注入租户隔离和计费，跑完再把结果注回去恢复。

因为全公司是 TypeScript,他们在内部用 TypeScript 重写了这套东西，跑在自己的后端 worker 里——所以代码解释器的成本是零。刚在 DeepAgents 里用 Quick.js 发布了类似能力，主打以编程方式批量调子智能体；他们还痴迷 RLM(用递归程序结构组织 LLM 调用的论文思路)，说想要的就是「语义归并排序」——给一百个客户账户打分排序，不该靠一个有损的评分函数，而该像归并排序那样两两比较。太贵，暂时上不了产品，「但它太酷了」。

## 降本 90% 与模型选择

上线前两周的 90%-95% 降本，绝大部分来自砍 token 成本：子智能体跑得太多太贵，转向一个更聪明、能写代码映射到表上的主智能体；再压低效工具调用、把 5.5 换成 5.4。一个朴素但极有效的方法：翻遍所有 skill 文件和 system prompt,消除矛盾——每个小矛盾都会导致一次搞砸的工具调用。

他为此喊话要一个「skill 文件的语义 linter」(自动检查一致性的工具)。另一条写作纪律：不写「永远做/永远别做」，只给背后的 why——模型够聪明，能自己推出正确轨迹；但如果那条规定在 3% 的场景里是错的，它就永远不会做对那 3%。

模型选了 OpenAI(也是他们的第一个投资人)，理由主要是性价比：用户能发三五十条消息拿足价值。旧研究智能体的成本已压到一美分以下，10 倍让利给了客户，如今那条链路上工具调用反而成了主要成本。开源模型评过：token 便宜但工具效率差太多，净算下来不划算——不过他点名 GLM 5.2 在私下试用，「也许那就是救星」。

## 本集带走

- **缓存命中率是自己算出来的**：模型供应商只保证尽力而为，你要用自己的先验(用户 ID、租户、批次)设计缓存键，把峰值吞吐摊开预热——Unify 做到 95% 命中，方法就是 16 个用户哈希 × 30 个随机数。
- **子智能体当兜底，不当主力**：主智能体写代码、逐行映射函数、瀑布式降级到便宜的 API,穷尽选项才起子智能体——一千行 × 一美分 = 10 美元，20 美元的套餐撑不住。
- **裁判必须换家族**：LLM-as-judge 和模拟用户都用不同厂商的模型，避免分布重叠导致「群体思维」；评估主体是人工翻几百上千个例子，回归靠按分布分桶的 DQA 集。
- **记忆要固定键**：别让智能体自管分类键，固定六七个类别 + 提案/合并/废弃的结构化操作，换来的可观测性比灵活性值钱。
- **给 why 不给禁令**：system prompt 里每个矛盾都会变成一次搞砸的工具调用；「永远别做 X」会连那 3% 的例外一起锁死。
- **[[规划步骤|规划步骤]]永远值得加**：开场让模型先停、想几条路径、侦察各数据源的精度/召回、问用户澄清问题，再动手——三年前如此，今天依然是最有效的单点优化。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">当你和那些优秀的人交谈时，他们真正说的是：我怎么找到那些问题严重到不管我说什么他们都会买的人？</span>  
> *When you talk to great ones, right, what they really say is, how do I find the people who have a problem that is so bad that they'll buy it no matter what I say?*  
> <span class="qm">—— Connor Hegey · [02:15]</span> ^q1

> <span class="qz">我总说的三件事是：我们想构建可重复、可观测、可扩展的系统——事实证明这和 AI 不太合拍，但这些一直是我们追求的原则。</span>  
> *The three things I always say is we wanted to build repeatable, observable, scalable systems, which doesn't play very well with AI as it turns out, but those were always the tenants that we were going for.*  
> <span class="qm">—— Connor Hegey · [05:55]</span> ^q2

> <span class="qz">我肯定不想从一个 AI 智能体那里买东西。</span>  
> *I certainly don't want to buy from an AI agent.*  
> <span class="qm">—— Connor Hegey · [08:21]</span> ^q3

> <span class="qz">所以我们的表述是：子智能体就是一个函数调用。</span>  
> *And so our formulation is that a subagent is just a function call.*  
> <span class="qm">—— Connor Hegey · [16:00]</span> ^q4

> <span class="qz">如果你不用 responses API,你会损失 20% 到 30% 的质量，因为你在不同调用之间不保留思考轨迹。</span>  
> *If you are not using the responses API, you are missing out on 20% or 30% of the quality because you don't retain the thinking trace between different calls.*  
> <span class="qm">—— Connor Hegey · [21:24]</span> ^q5

> <span class="qz">它不可能被内建到供应商那边，这正是它有趣的地方，因为他们不知道进来的流量分布。</span>  
> *It can't be built into the providers, which is the interesting thing about it, because they don't know the distribution that's coming in.*  
> <span class="qm">—— Connor Hegey · [27:12]</span> ^q6

> <span class="qz">那种人与人之间的连接点其实才是他们的优势所在。</span>  
> *That like human connection point is actually their alpha.*  
> <span class="qm">—— Connor Hegey · [35:16]</span> ^q7

> <span class="qz">主要是因为每增加一个复杂度维度都是乘性的，而不是加性的。</span>  
> *Largely because every added dimension of complexity is multiplicative instead of additive.*  
> <span class="qm">—— Connor Hegey · [40:03]</span> ^q8

> <span class="qz">没有什么评估比亲眼看一百个或者一千个例子更好的了。</span>  
> *And there's just no better eval than looking at a hundred examples or a thousand examples.*  
> <span class="qm">—— Connor Hegey · [50:36]</span> ^q9

> <span class="qz">你会遇到智能体互相对话的模式坍缩，或者分布重叠——相当于人类的群体思维。</span>  
> *You have this, like, you know, mode collapse of, like, agents talking to each other or this, like, you know, overlapping distributions where it's, you know, the equivalent of groupthink in humans.*  
> <span class="qm">—— Connor Hegey · [53:50]</span> ^q10

> <span class="qz">我们去年第四季度评估开源模型时遇到的问题是，它们的工具效率低太多——即使 token 成本真便宜 10 倍(实际并没有)，工具效率这一项也不划算。</span>  
> *The issue that we ran into when we evaluated them in Q4 of last year is they're so much less tool efficient that even if they are 10x cheaper, which they're not, but even if they were 10x cheaper on the token costs, the tool efficiency is actually not worth it.*  
> <span class="qm">—— Connor Hegey · [66:52]</span> ^q11

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同公司:Anthropic · 同概念:Harness(智能体运行框架) (harness)、提示词缓存 (prompt caching)、智能体 (agent)、智能体记忆 (memory)、评估 (evals)</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同公司:Anthropic · 同概念:Harness(智能体运行框架) (harness)、智能体 (agent)、智能体记忆 (memory)、沙箱 (sandbox)</span>
- [[2026-09-09-pragmatic-building-codex-with-tibo-sottiaux|Codex 负责人亲述:OpenAI 内部如何造编程智能体]]<span class="pd-rz">同公司:OpenAI · 同概念:Harness(智能体运行框架) (harness)、智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:OpenAI、Anthropic · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:Harness(智能体运行框架) (harness)、智能体 (agent)、评估 (evals)</span>
- [[2026-07-30-cogrev-is-offense-or-defense-dominant-far-ai-s|AI 安全排行榜：谁扛住了越狱，谁没有]]<span class="pd-rz">同公司:OpenAI、Anthropic · 同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
