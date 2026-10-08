---
title: 当AI能看到你整个系统：一个工程师把公司所有数据装进一张图
podcast: Beyond Coding
date: 2026-10-07
source_url: undefined
duration: "80:08"
type: episode
cover: "#64748b"
image: "/covers/2026-10-07-beyondcoding-what-happens-when-coding-agents-see-your.jpg"
description: "Adyen 工程师 Matt Jones 讲述他如何用图数据库 Architect 连接服务、代码、基础设施和 DNS,让AI智能体看清整个支付平台。"
host: "[[Matt Jones]]"
companies: ["[[Adyen]]"]
concepts: ["[[Architect]]", "[[Neo4j]]", "[[Flink]]", "[[Kafka]]", "[[智能体]]", "[[服务图]]", "[[Atrium]]", "[[Git worktree]]", "[[MCP]]", "[[Sentinel]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-10-07-beyondcoding-what-happens-when-coding-agents-see-your.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-07-beyondcoding-what-happens-when-coding-agents-see-your#post","headline":"当AI能看到你整个系统：一个工程师把公司所有数据装进一张图","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-07-beyondcoding-what-happens-when-coding-agents-see-your","mainEntityOfPage":"https://talk.solomind.cc/2026-10-07-beyondcoding-what-happens-when-coding-agents-see-your","description":"Adyen 工程师 Matt Jones 讲述他如何用图数据库 Architect 连接服务、代码、基础设施和 DNS,让AI智能体看清整个支付平台。","datePublished":"2026-10-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-10-07-beyondcoding-what-happens-when-coding-agents-see-your.jpg","about":[{"@type":"Person","name":"Matt Jones"},{"@type":"Organization","name":"Adyen"},{"@type":"Thing","name":"Architect"},{"@type":"Thing","name":"Neo4j"},{"@type":"Thing","name":"Flink"},{"@type":"Thing","name":"Kafka"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"服务图 (service graph)"},{"@type":"Thing","name":"Atrium"},{"@type":"Thing","name":"Git worktree"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"Sentinel"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"当AI能看到你整个系统：一个工程师把公司所有数据装进一张图","item":"https://talk.solomind.cc/2026-10-07-beyondcoding-what-happens-when-coding-agents-see-your"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当AI能看到你整个系统：一个工程师把公司所有数据装进一张图</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 当AI能看到你整个系统：一个工程师把公司所有数据装进一张图

<div class="pd-byl"><b>Matt Jones</b> · Adyen 资深工程师 · 2026-10-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-07-beyondcoding-what-happens-when-coding-agents-see-your.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">因为当我们每秒处理 700 万个 span 的时候，我们会在乎两个 web 应用之间漏掉一两个调用吗？</div><div class="a">— Matt Jones <button class="pd-ts" data-t="26:49" data-who="Matt Jones" data-en="Because when we're processing 7 million spans a second, do we care if we missed one or two calls between two web apps?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Matt Jones]]
>
> **公司** [[Adyen]]
>
> **概念** [[Architect]] · [[Neo4j]] · [[Flink]] · [[Kafka]] · [[智能体]] · [[服务图]] · [[Atrium]] · [[Git worktree]] · [[MCP]] · [[Sentinel]]

[[Matt Jones|Matt Jones]] 是支付公司 [[Adyen|Adyen]] 的资深工程师。过去几个月，他和同事 Rafael 造了一个叫 [[Architect|Architect]] 的内部系统：

把整个公司——服务调用、代码、数据库结构、基础设施、DNS、组织架构——全部装进一个 [[Neo4j|Neo4j]] 图数据库，再接上AI[[智能体|智能体]]。

结果不只是排查故障变快了，整个开发和发布流程都被改写。以下是他在这期 Beyond Coding 播客里讲的故事。

## 一个让人半夜崩溃的问题：没人说得清系统是怎么连的

Adyen 是一家 20 年历史的公司，代码仓库也有 20 年历史。

Matt 的团队想搞清楚平台到底是怎么拼起来的：谁在调用谁，有哪些藏起来的依赖，哪些查询特别忙。

他们去问各个团队，拿回来一些 Figma 图和日志查询。能回答一部分问题，但一旦问到细处就卡住。

==比如服务器上有个吵闹的邻居，到底影响哪些服务==？能查出来，但要 45 分钟，开一堆浏览器标签来回切。

对于凌晨 3 点被报警电话叫醒的工程师，这不可行。Architect 就是为解决这个问题而生的 <button class="pd-ts" data-t="17:12" data-who="嘉宾" data-en="And the reason that we built it, I mean, I'll always kind of start with the same thing where we initially built it for somewhat selfish reasons. As our team at Adyen, we wanted to start getting a much bigger picture on how the platform really fits together." aria-label="回原文"></button>。

## Architect 是什么：9 个数据库拼成一张大图

简单说，Architect 是一个特别大的图数据库，里面装着 9 类数据 <button class="pd-ts" data-t="15:44" data-who="嘉宾" data-en="So we have this Postgres instance that's running in this data center. Where are its read replicas? Is it set up as a cluster?" aria-label="回原文"></button>:

- [[服务图|服务图]]：从每个应用的调用链路追踪里提炼出谁调用谁；
- 代码图：每次代码提交后自动重建，精确到方法级别的依赖关系；
- DNS 图、数据存储拓扑、数据表结构、基础设施硬件，甚至组织架构图——用来知道出了问题该找谁。

关键在于这些图是连起来的。服务图里的一台主机，能对应到基础设施图里的具体机房、具体机架。

Matt 说：「作为人类，我们能看到的多了很多，而智能体能看到的远得多。这很疯狂，也有点吓人。」<button class="pd-ts" data-t="16:52" data-who="嘉宾" data-en="So all of a sudden, we know that, okay, this web app running in this data center is running on this host, which is on this floor of this data center, in this rack, in this everything." aria-label="回原文"></button>

## 第一次上生产环境：全面崩溃

最初的技术选型很随意，用的是 [[Kafka|Kafka]] Connect。测试环境和预发布环境数据量小，一切正常。

一指向生产环境，每秒 700 万条追踪数据涌进来，Kafka Connect 直接积压放弃。「我从没见过一个应用像 Kafka 这样这么快就撂挑子。」<button class="pd-ts" data-t="24:51" data-who="嘉宾" data-en="Deployed it into live, everything collapsed. Honestly, it's like I've never seen an application give up as quick as Kafka could. It literally just built a backlog and it went, no, Kafka Connect just, oh, it was kind of funny in a weird way." aria-label="回原文"></button>

Matt 慌了，和 Rafael 坐下来重想。同事 Santosh 建议试试大数据框架 [[Flink|Flink]]。他们写了个快速验证，觉得有戏，接下来几周一直在调优。

## 一个偷懒决定：干脆不做检查点

Flink 有一套 checkpoint 机制，记录处理进度，出故障后能从断点恢复。但它本身带来大量写入开销。

团队算了笔账：**每秒 700 万条数据，漏掉一两个服务间调用有什么关系**？反正几小时内大概率还会再出现。

于是他们干脆关掉了检查点 <button class="pd-ts" data-t="25:56" data-who="嘉宾" data-en="And then we started getting caught up by things like checkpointing. So we thought, let's just not checkpoint. What's checkpointing?" aria-label="回原文"></button>。

事后看，没什么遗憾——至今没发现明显的数据缺失，而且有后台任务对照代码图来区分“新变化”和“丢数据”。

更重要的是省下来算力干正事：700 万条追踪数据里，真正需要的只有约 30%,过滤聚合之后，实际写入 Neo4j 的只有每秒约 4000 条记录 <button class="pd-ts" data-t="21:36" data-who="嘉宾" data-en="So even then we can aggregate, we can condense down. So even though we're reading 7 million spans, we're writing something like 4,000 records a second to Neo4j. So we can go through that massive amount of different filtering, aggregating, extracting, and I don't need this stuff and condense it down." aria-label="回原文"></button>。

## 从 7 个月到 4 个月：AI 智能体是真正的加速器

整个服务图从零到跑满生产流量，只花了 3 到 4 个月，主力就是 Matt 和 Rafael 两个人，外加大量 AI token <button class="pd-ts" data-t="67:20" data-who="嘉宾" data-en="I mean, you know, we build our architect ground up, you know, getting into production. I think we had the first production version of the service graph in... We had it in running, ingesting at the full, you know, 7 million spans a second." aria-label="回原文"></button>。

Matt 的工作方式是：两块显示器并排开五六个智能体，一个写规格，一个执行，互不干扰。

为此他还造了个内部工具 [[Atrium|Atrium]],让智能体之间能互相通信——各自声明自己在改哪些文件，发现冲突就互相打招呼，等对方改完再动手 <button class="pd-ts" data-t="02:24" data-who="嘉宾" data-en="And it will move everything over there. And then we've also built this internal tool called Atrium to allow agents to communicate. So once something starts a bit of work, it logs into Atrium." aria-label="回原文"></button>。

Atrium 还用 Neo4j 做了智能体记忆，新智能体上线时能直接拿到前面工作的全部上下文。

团队后来定下了清晰的 Java 框架和代码规范，智能体看一眼现有实现就能照抄扩展。

加一种新的数据接入，大概 4 个小时就能建好 <button class="pd-ts" data-t="69:56" data-who="嘉宾" data-en="You're getting an agent to build a data source based on a framework that eight other data sources, that eight other ingesters are using in the repository. So that's like, I don't know, four hours for it to actually build the thing." aria-label="回原文"></button>。

## 这张图反过来改变了发布流程

知道了一切之后，可以做以前做不到的事：

**工程师提交代码时，系统自动追溯这段代码牵涉哪些关键业务流程**。

如果碰到关键流程，测试覆盖率要求就更高；不碰关键流程的小改动，即使在支付行业高峰期的代码冻结期也能放行 <button class="pd-ts" data-t="30:28" data-who="嘉宾" data-en="It does, it does, yeah. So we're baking it into our GitLab pipelines at the moment. So anytime that an engineer makes a change, there's an API call being made, API, not MCP." aria-label="回原文"></button>。

他们还做了个子产品 [[Sentinel|Sentinel]],每 20 分钟跑一次反模式检查——比如有没有应用跨数据中心去查主库。

发现问题的团队点一个“自动修复”按钮，后台智能体就会克隆仓库、改代码、提合并请求，人只需要审核批准 <button class="pd-ts" data-t="53:35" data-who="嘉宾" data-en="Because then we can build up that kind of family of rules or family of reports to then start being able to increase the level of quality across all web apps. So when we start looking at the resilience of the platform, well, if you are making a cross-DC select..." aria-label="回原文"></button>。

## 看得太清楚，也成了新的风险

现在每个工程师的AI智能体都能查到所有这些数据。好处是排查问题极快；

坏处是大家开始看到以前看不到的东西——别的团队服务的流量、DNS 链路多绕了两跳、到某个存储集群的延迟涨了 5 毫秒。

基础设施团队收到的问题比以前多得多 <button class="pd-ts" data-t="48:25" data-who="嘉宾" data-en="But now, with this, they can start seeing the hardware that they're running on, the CPU, the memory, which means our infrastructure team are now getting more questions." aria-label="回原文"></button>。

更严肃的问题是安全：==恶意的人如果拿到这些查询能力，能摸清整个平台==。

团队正在做权限体系，比如安全漏洞(CVE)数据只对安全团队开放。

## 智能体靠提示词吃饭：具体就灵，含糊就完蛋

最后聊到一个现实问题：[[MCP|MCP]] 工具越装越多，反而撑大上下文、让智能体犯晕。Matt 自己关掉了公司 AI 网关里 90% 的工具 <button class="pd-ts" data-t="72:51" data-who="嘉宾" data-en="I have about 90% of them disabled. I have a direct connection to our Architect MCP, which I'm not supposed to. They asked me to remove it." aria-label="回原文"></button>。

他的判断是：结构化、输入输出明确的需求，用 API;还不知道要问什么、需要灵活探索的场景，才用 MCP。

对事故响应也一样。如果问题很具体——比如“阿姆斯特丹机房淹了，帮我们查”——智能体很强，能同时查多个数据源。

但如果含糊地问“好像有点不对劲，帮我看看”，它会给你列出 20 个问题，而且全是错的 <button class="pd-ts" data-t="77:44" data-who="嘉宾" data-en="They can get a lot of data and a lot of varied data together in order to come up with a certain response. But if you start vague, I think it's always going to be vague." aria-label="回原文"></button>。

## 本集带走

- 把服务调用、代码、基础设施等数据连成一张图，能让AI智能体看到人类看不到的全局，但透明度本身也会变成新的安全和管理问题。
- 服务图是最值得起步的一张图——它回答“什么在发生”；代码图回答“怎么发生、为什么”；其他图都是锦上添花 <button class="pd-ts" data-t="46:16" data-who="嘉宾" data-en="So we started at the service graph because it's the skeleton. It's the skeleton of how most platforms, most companies operate. It's always that." aria-label="回原文"></button>。
- 数据量大到一定程度，可以大胆舍弃一些工程上的“正确”——比如不做检查点——来换性能。
- 让多个智能体并行干活，前提是给它们通信机制、清晰框架和统一规范，否则会互相踩脚。
- 智能体的表现高度依赖问题是否具体：具体的问题得到快速准确的答案，含糊的问题只会得到噪音。

<div class="pd-sec pd-sec-q">全部金句 <span>12 条</span></div>

> <span class="qz">因为当我们每秒处理 700 万个 span 的时候，我们会在乎两个 web 应用之间漏掉一两个调用吗？</span>  
> *Because when we're processing 7 million spans a second, do we care if we missed one or two calls between two web apps?*  
> <span class="qm">—— Matt Jones · [26:49]</span> ^q1

> <span class="qz">所以尽管我们每秒读取 700 万个 span，我们每秒写入 Neo4j 的大约只有 4000 条记录。</span>  
> *So even though we're reading 7 million spans, we're writing something like 4,000 records a second to Neo4j.*  
> <span class="qm">—— Matt Jones · [21:36]</span> ^q2

> <span class="qz">我们总是可以这样拆解：服务图是正在发生什么，代码图是它如何发生以及为什么发生，基础设施图是它在哪里发生。</span>  
> *So we can always break it down as saying, you know, the service graph is what is happening. The code graph is how and why it's happening. The infograph is where it's happening.*  
> <span class="qm">—— Matt Jones · [46:34]</span> ^q3

> <span class="qz">你基本上是在依据代码自己怎么想的来判断，而不是它实际在做什么。</span>  
> *You're kind of going on what the code thinks, not what it does.*  
> <span class="qm">—— Matt Jones · [46:31]</span> ^q4

> <span class="qz">以至于当人们在集成时，默认方式就是通过 MCP，而我必须真的去问：你是不是其实只需要一个 API？</span>  
> *Like, to the point that when people are integrating, the default is via MCP and I have to go, and I have to literally go, Chua, it's like, do you just need an API for this, really?*  
> <span class="qm">—— Matt Jones · [13:55]</span> ^q5

> <span class="qz">我当时是想在一个有 20 年历史的公司、有 20 年历史的代码库里找出那些见不得人的秘密。</span>  
> *I was trying to find the skeletons in the closet in a 20-year-old company in a 20-year-old repo.*  
> <span class="qm">—— Matt Jones · [17:25]</span> ^q6

> <span class="qz">说实话，我从没见过一个应用像 Kafka 那样放弃得那么快。</span>  
> *Honestly, it's like I've never seen an application give up as quick as Kafka could.*  
> <span class="qm">—— Matt Jones · [24:51]</span> ^q7

> <span class="qz">所以你知道，如果是一次挥棒落空，那么好吧，我们损失了三四个月，但我们没有损失一年。</span>  
> *So it was, you know, if it was a swing and a miss, then, okay, sure, we've lost three or four months, but we haven't lost a year.*  
> <span class="qm">—— Matt Jones · [67:33]</span> ^q8

> <span class="qz">但如果你一开始就模糊，我觉得结果永远会是模糊的。</span>  
> *But if you start vague, I think it's always going to be vague.*  
> <span class="qm">—— Matt Jones · [77:44]</span> ^q9

> <span class="qz">而如果我们真的写出精心打造的、非常具体的提示词，向智能体提出具体的问题、给它们具体的方向，我们就能非常快地得到答案，而且它们似乎不会被带偏。</span>  
> *Whereas if we actually write well-crafted prompts, very specific prompts, we're asking the agents specific questions and giving them specific ways on where to go, We can get answers very, very quickly, and they don't seem to get misled.*  
> <span class="qm">—— Matt Jones · [78:31]</span> ^q10

> <span class="qz">因为人们在用智能体写作，所以我得以智能体对抗智能体。</span>  
> *Because people are writing with agents, so I have to combat agents with agents.*  
> <span class="qm">—— 嘉宾 · [58:48]</span> ^q11

> <span class="qz">但我注意到，如果我不使用智能体，作为一个单独的个体，我已经跟不上了。</span>  
> *But I have noticed that if I don't use agents, I can't keep up as a single individual anymore.*  
> <span class="qm">—— 嘉宾 · [59:00]</span> ^q12

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-08-mad-what-happens-when-billions-of-ai-agents|当几十亿个AI智能体冲向你的数据库]]<span class="pd-rz">同概念:MCP、Neo4j、智能体 (agent)</span>
- [[2026-08-26-talks-the-building-blocks-of-gtm-orchestration|RAMP 的 GTM 编排实验：一句话意图，全渠道自动执行]]<span class="pd-rz">同概念:MCP、智能体 (agent)、Kafka</span>
- [[2026-09-17-cogrev-no-code-is-code-zapier-ceo-wade-foster-o|Zapier CEO Wade Foster：最强模型也只考了 40 分，你的对手不是别的公司]]<span class="pd-rz">同概念:MCP、智能体 (agent)、token</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>
- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>
- [[2026-02-08-lennys-getting-paid-to-vibe-code|不会写代码的人如何成为全职 vibe coder]]<span class="pd-rz">同概念:智能体 (agent)、token</span>

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
