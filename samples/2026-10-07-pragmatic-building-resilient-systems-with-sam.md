---
title: 写出最火微服务书籍的人，为什么说微服务是“最后的手段”？
podcast: The Pragmatic Engineer
date: 2026-10-09
source_url: undefined
duration: "118:22"
type: episode
cover: "#64748b"
description: Sam Newman 谈微服务的真相、分布式系统的三条铁律，以及 AI 时代工程师该怎么保住思考能力。
host: "[[Sam Newman]]"
companies: ["[[ThoughtWorks]]", "[[Uber]]"]
concepts: ["[[微服务]]", "[[分布式系统]]", "[[韧性]]", "[[可观测性]]", "[[生产环境即真相]]", "[[规范驱动开发]]", "[[幂等性]]", "[[惊群效应]]", "[[认知投降]]", "[[认知债务]]", "[[LLM]]", "[[智能体]]", "[[模块化]]", "[[心理安全感]]"]
category: 创业与行业
tags:
  - 创业与行业
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-07-pragmatic-building-resilient-systems-with-sam#post","headline":"写出最火微服务书籍的人，为什么说微服务是“最后的手段”？","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-07-pragmatic-building-resilient-systems-with-sam","mainEntityOfPage":"https://talk.solomind.cc/2026-10-07-pragmatic-building-resilient-systems-with-sam","description":"Sam Newman 谈微服务的真相、分布式系统的三条铁律，以及 AI 时代工程师该怎么保住思考能力。","datePublished":"2026-10-09","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Sam Newman"},{"@type":"Organization","name":"ThoughtWorks"},{"@type":"Organization","name":"Uber"},{"@type":"Thing","name":"微服务 (microservices)"},{"@type":"Thing","name":"分布式系统 (distributed system)"},{"@type":"Thing","name":"韧性 (resilience)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"生产环境即真相 (production is truth)"},{"@type":"Thing","name":"规范驱动开发 (spec-driven development)"},{"@type":"Thing","name":"幂等性 (idempotency)"},{"@type":"Thing","name":"惊群效应 (thundering herd)"},{"@type":"Thing","name":"认知投降 (cognitive surrender)"},{"@type":"Thing","name":"认知债务 (cognitive debt)"},{"@type":"Thing","name":"LLM"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"模块化 (modular)"},{"@type":"Thing","name":"心理安全感 (psychological safety)"}],"articleSection":"创业与行业"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"创业与行业","item":"https://talk.solomind.cc/tags/创业与行业"},{"@type":"ListItem","position":3,"name":"写出最火微服务书籍的人，为什么说微服务是“最后的手段”？","item":"https://talk.solomind.cc/2026-10-07-pragmatic-building-resilient-systems-with-sam"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>写出最火微服务书籍的人，为什么说微服务是“最后的手段”？</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 写出最火微服务书籍的人，为什么说微服务是“最后的手段”？

<div class="pd-byl"><b>Sam Newman</b> · 《Building Microservices》作者 · 2026-10-09</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-07-pragmatic-building-resilient-systems-with-sam.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">看，我觉得这时候我得搬出我的朋友 Charity，说真相是生产环境。其他一切都是我们讲给自己听的谎言。</div><div class="a">— Sam Newman <button class="pd-ts" data-t="35:12" data-who="Sam Newman" data-en="See, I feel like I've got to channel my friend Charity at this point and say the truth is production. Everything else is the lies we tell ourselves." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sam Newman]]
>
> **公司** [[ThoughtWorks]] · [[Uber]]
>
> **概念** [[微服务]] · [[分布式系统]] · [[韧性]] · [[可观测性]] · [[生产环境即真相]] · [[规范驱动开发]] · [[幂等性]] · [[惊群效应]] · [[认知投降]] · [[认知债务]] · [[LLM]] · [[智能体]] · [[模块化]] · [[心理安全感]]

[[Sam Newman|Sam Newman]] 是《Building Microservices》的作者，这本大概是[[微服务|微服务]]领域被读得最多的书。他曾在 [[ThoughtWorks|ThoughtWorks]] 工作多年，是“微服务”这个词诞生时房间里那 10 个人之一。

他的新书《Building Resilient Distributed Systems》刚刚出版。在这期 The Pragmatic Engineer 里，他和主持人聊了微服务运动的来龙去脉、[[分布式系统|分布式系统]]的底层规律，以及对 AI 写代码的冷静看法。

## 微服务是怎么被发明出来的？

故事要从 2011 到 2012 年讲起。

当时 ThoughtWorks 的 James Lewis 接触了不少做面向服务架构（SOA）的公司，发现其中一种做法很特别：服务的粒度更细，而且可以很快替换上线。

在湖区的一次架构研讨会上，James 提出了这个想法，当时叫 micro apps，房间里有人接话说，这更像是 services，于是 microservices 这个名字就定了下来。

James 和 Martin Fowler 随后写了第一篇文章 <button class="pd-ts" data-t="22:35" data-who="Newman" data-en="Most of us were hung over. And then James and Ian, sorry, James and Martin wrote the first post. So the first paper on Martin's website was written by, it was sort of James's original kind of discovery of this pattern that he called microservices." aria-label="回原文"></button>。

有意思的是，Netflix 在采用“微服务”这个叫法之前，一直管自己的架构叫 fine-grained SOA。[[Uber|Uber]] 也类似。主持人补充了 Uber 当时的 C2 Twan Palm 的说法：

Uber 本来不想要那么多服务，只是因为大单体拖慢了交付、竞争对手环伺需要快速行动，才下了“必须有一个强有力的命令，不许往单体里加新东西”的死命令，要摆脱单体、拆成更小的服务，这不是初衷 <button class="pd-ts" data-t="28:34" data-who="主持人" data-en="And he said Uber, like he never really wanted that many services, but it was just more of a constraint because Uber had a monolith. The story was like, which he told on the podcast, we'll link it at the show notes below, that Uber had this big monolith and it was really slow." aria-label="回原文"></button>。

Newman 对微服务的定义有两条硬性意见：服务必须能独立部署；服务边界默认按业务领域划分，而不是按技术分层。

他的立场出人意料地保守：微服务会自然把状态和数据分布得更散，代价很高，所以必须有充分理由才用。

他称之为“最后的手段”的架构。最好的理由之一，是你想要一个高度自治的组织——让团队能彼此独立地干活。

**微服务只是达成这个目标的手段，不是魔法** <button class="pd-ts" data-t="29:42" data-who="Newman" data-en="And so you have to have a good reason. One of the best reasons to use microservices is if what you actually want is an organization with a higher degree of autonomy." aria-label="回原文"></button>。

## 分布式系统只有三条铁律

Newman 说他一直记不住当年 Sun 公司总结的分布式计算八大谬误，于是自己浓缩成三条 <button class="pd-ts" data-t="51:57" data-who="Newman" data-en="What are these three rules? So I really tried to distill this down because I could never remember the rule of eight that came out of Sun, the fallacies distributed computing." aria-label="回原文"></button>：

第一，信息从 A 点到 B 点需要时间，这是物理规律，改不了。

第二，你想对话的那个东西，有时候不在。

可能是负载均衡器挂了，可能是数据中心着火——他真遇到过存储阵列里一对固态硬盘起火；

还有一次，兔子钻进办公楼之间的管道，把网线啃了 <button class="pd-ts" data-t="54:10" data-who="Newman" data-en="I had a system where we had ducting between the office buildings and rabbits moved into the ducts and ate the networking cable. I can't control for rabbits, right?" aria-label="回原文"></button>。

第三，资源池不是无限的。CPU、内存、连接数都可能耗尽。Newman 说，**绝大多数系统故障最后都能归结到这条：某个资源被彻底打满了**。

记住这三条，很多看似复杂的分布式系统问题会变得容易处理。

## 可观测性为什么是第二章？

他的新书第二章讲[[可观测性|可观测性]]，第三章讲超时。这个安排有讲究。单机程序天生容易观察：你可以挂调试器、抓线程转储。

但分布式系统跨了多台机器，信号散落各处，必须从一开始就主动做埋点，事后补加非常痛苦。

好消息是现在有了 OpenTelemetry 这样的厂商中立标准。

有了延迟、成功失败率这些数据，你才能设对超时、定义服务水平目标（SLO）——比如“99% 的请求在 300 毫秒内成功完成”。

没有这些数据，就是在盲飞。

可观测性还决定了你需要多“韧”。

Newman 举了 Monzo 银行的例子：他们维护了一套功能精简、完全独立重写、跑在不同云厂商上的备用银行系统，随时待命。

这不是一般公司该学的，而是一家银行想清楚了自己是谁之后的决定 <button class="pd-ts" data-t="61:55" data-who="Newman" data-en="Because am I having a conversation with you about multi-cloud and, you know, doing complete rewrites of systems for critical standings like Monzo do, for example?" aria-label="回原文"></button>。

## “生产环境才是真相”

一个反复出现的主题：系统的真相到底在哪里？在文档里，还是代码里？

Newman 借用同行 Charity 的话：**真相是生产环境，其他一切都是我们对自己讲的谎**。<button class="pd-ts" data-t="35:17" data-who="Newman" data-en="See, I feel like I've got to channel my friend Charity at this point and say the truth is production. Everything else is the lies we tell ourselves. Production is truth." aria-label="回原文"></button>

> 【背景】Charity 指 Newman 的朋友、以「production is truth」观点闻名的工程师 Charity Majors。

但随着 AI 生成代码越来越多，业界正在出现一条光谱：有的公司用规格说明驱动 AI 写代码，写完就把规格扔了；

有的持续维护规格，改功能先改规格；还有的公司根本不看代码，只看规格。Martin Fowler 网站上的一篇文章把这类做法分成 spec-first 和 spec-anchored 等几类。

> 【背景】该文作者为 Birgitta Böckeler，常年在 Martin Fowler 网站撰写关于 AI 辅助开发的系列文章。

Newman 的态度是：不看代码可以，但前提是你把省下的时间用来做更重要的思考。

有一家叫 ChainGuard 的公司干脆取消了人工代码评审，把时间挪到设计文档层面，他觉得没问题。

但如果你既不看代码，也不认真想系统该怎么演进，那就等着承受后果 <button class="pd-ts" data-t="40:33" data-who="Newman" data-en="I'm okay, you know, with not looking at the code as long as you're doing other things to make sure the system is operating correctly and that you're thinking critically about how the system needs to change and evolve." aria-label="回原文"></button>。

想把手头工作交给 AI 代理，他给出两个前提：能定义“什么算好”，并且能证明系统达到了这个定义。

## 韧性不只是技术：四个维度

书中借用了 David Woods 的[[韧性|韧性]]工程框架，分四个维度 <button class="pd-ts" data-t="85:11" data-who="Newman" data-en="What are these dimensions? I start in the first chapter, coming back to that paper by David Woods I mentioned, that was impenetrable to me at the start. And he comes up with..." aria-label="回原文"></button>：

一是健壮性，吸收已知的扰动，比如 Kubernetes 里容器挂了自动拉起一个新的。

但麻烦在于，让系统更健壮的手段往往增加复杂度，从而带来新的失败面——引入 Kubernetes 来解决容器故障，Kubernetes 本身又成了新的风险源。

二是回弹力，出事后多快能恢复。要认真做演练，Netflix 的 Chaos Monkey 就是干这个的。

三是优雅扩展性，应对意料之外的事。这就不是计算机问题了，是人的问题。

等级森严、岗位描述很窄的组织，往往应对意外很糟糕。

他提到 Google 的 SRE 有个“厄运之轮”游戏：转一下轮盘，告诉你今天遭遇了某国发起的 DNS 污染攻击，看团队怎么应对 <button class="pd-ts" data-t="89:00" data-who="Newman" data-en="Google had a thing, I don't know if they still do it, SREs would pop around and they'd do a thing called the Wheel of Misfortune. They had a physical wheel. Today, your system has suffered a spin the wheel." aria-label="回原文"></button>。

四是持续适应性，从别人的事故里学习。他推荐去读各家公开的事后报告，Cloudflare 的报告尤其“自我鞭挞”得彻底。

后两个维度全靠[[心理安全感|心理安全感]]：**如果人们不敢安全地提出问题、质疑现状，韧性就无从谈起**。

所以这本书最后三章讲的是人和文化，不是技术。

## 大语言模型没有因果概念

聊到 AI，Newman 毫不含糊。他说技术界普遍误解了大语言模型是什么东西。==为什么模型会删掉你的数据库==？**因为它没有因果概念** <button class="pd-ts" data-t="96:03" data-who="Newman" data-en="Why did the LLM delete my database? Well, because it has no concept of causality. That's what it comes down to." aria-label="回原文"></button>。

人推一杯玻璃杯下桌前，脑子里会算它会不会碎；模型不做这些计算，它只知道生成“看起来合理”的输出。

他还区分了两个正在流行的概念。[[认知债务|认知债务]]（cognitive debt）指团队共享的心智模型在大家各自和 AI 结对、各干各的时候逐渐瓦解。

[[认知投降|认知投降]]（cognitive surrender）更糟：用 AI 写一份自己根本不会读的文档，等于把专家从流程里抽掉，降格成一个盖章的人。

他借 Cory Doctorow 的例子说明：AI 提醒肿瘤医生“这片子你可能漏看了一处”很有用；AI 筛完所有片子只让医生签字，就是灾难 <button class="pd-ts" data-t="101:06" data-who="Newman" data-en="And I think that's that cognitive surrender thing is coming out lots of ways. And, you know, we're getting AI to write documents and no one's going to read. And we've got AI that's reading documents that weren't written by other people." aria-label="回原文"></button>。

那么正确的姿势是什么？Newman 的建议是[[模块化|模块化]]。人类认真思考模块边界和模块之间的关系，让 AI 在边界内部放开手脚生成代码。

可以只对某些低风险、测试覆盖好、不在延迟关键路径上的模块尝试“软件工厂”式的全自动做法，其他地方继续人机协作。

他说得务实：这也许行得通，也许是重蹈模型驱动开发的覆辙——但至少可以在小范围内安全地试试 <button class="pd-ts" data-t="107:33" data-who="Newman" data-en="Do I understand that you're saying that you think that the software factory, the dark factory, you're giving it a spec and the AI either building it or operating it, that you see that as viable?" aria-label="回原文"></button>。

另外要对冲风险：多供应商、多模型，别把命运押在 OpenAI 或 Anthropic 一家上，能换成确定性代码的环节就换成确定性代码。

## 本集带走

- 微服务是手段不是目的：最适合的场景是想要组织自治的大公司；它是“最后的手段”，不是默认选项。
- 分布式系统三条铁律：信息传递需要时间；对方可能不在；资源池不是无限的。多数故障源于第三条。
- 系统的真相在生产环境；把工作交给 AI 的前提是能定义“什么算好”，并能验证系统做到了。
- 韧性有四个维度，后两个（应对意外、持续学习）取决于人和心理安全感，而不只是技术。
- 对 AI 要清醒：大语言模型没有因果概念，人是回路中不可删的一环；用模块边界约束 AI 的活动范围，用确定性代码替换能用确定性代码的环节。

<div class="pd-sec pd-sec-q">全部金句 <span>18 条</span></div>

> <span class="qz">看，我觉得这时候我得搬出我的朋友 Charity，说真相是生产环境。其他一切都是我们讲给自己听的谎言。</span>  
> *See, I feel like I've got to channel my friend Charity at this point and say the truth is production. Everything else is the lies we tell ourselves.*  
> <span class="qm">—— Sam Newman · [35:12]</span> ^q1

> <span class="qz">我还记得他说过：编程不是打字。</span>  
> *I still remember when he said, well, programming's not typing.*  
> <span class="qm">—— Sam Newman · [16:10]</span> ^q2

> <span class="qz">我们碰巧通过代码让那个程序运行起来，代码其实是我们如何协作的一个副产品。</span>  
> *The fact that we happen to make that program work through code, the code is really a side effect of how we work together.*  
> <span class="qm">—— Sam Newman · [17:23]</span> ^q3

> <span class="qz">Kent 在他那本小小的第一本书里说过，软件设计是一种人际关系的练习，对吧？AI 并没有改变这一点。</span>  
> *Kent put it in his tiny first book that software design is an exercise in human relationships, right? AI doesn't change that.*  
> <span class="qm">—— Sam Newman · [18:26]</span> ^q4

> <span class="qz">首先，要说清楚，我有我的定义，你可能有自己的定义，但写那几本书的人是我，所以我的定义说了算。</span>  
> *Now, to be clear, right, I have my definition, you might have your own definition, but I'm the one that wrote the books on it, so my definition wins.*  
> <span class="qm">—— Sam Newman · [26:04]</span> ^q5

> <span class="qz">这一直是我的论点：那你就自己他妈去写本书啊。</span>  
> *That's always been my argument, write your own damn book.*  
> <span class="qm">—— Sam Newman · [26:10]</span> ^q6

> <span class="qz">我是说，我把微服务描述成一种「最后手段的架构」。</span>  
> *I mean, I've described microservices as being an architecture of last resort.*  
> <span class="qm">—— Sam Newman · [29:27]</span> ^q7

> <span class="qz">使用微服务最好的理由之一是，如果你真正想要的是一个拥有更高程度自主性的组织。</span>  
> *One of the best reasons to use microservices is if what you actually want is an organization with a higher degree of autonomy.*  
> <span class="qm">—— Sam Newman · [29:42]</span> ^q8

> <span class="qz">「简单」这个词从来没有被用得这么名不副实过。</span>  
> *Never has the word simple been less well used.*  
> <span class="qm">—— Sam Newman · [21:18]</span> ^q9

> <span class="qz">不过我是说，从根本上讲，这整件事其实就是一场把 20 世纪 70 年代的概念偷运进来的运动，这对我来说没问题，对吧？</span>  
> *But I mean, really fundamentally, it's just the whole thing has been an exercise in smuggling through concepts of the 1970s, which is fine by me, right?*  
> <span class="qm">—— Sam Newman · [24:12]</span> ^q10

> <span class="qz">他们所有人回来都说，除非你能定义好的状态是什么样子，否则你没法做这件事。如果你定义不了，那就别费劲了。</span>  
> *And all of them came back and says, you can't do this unless you can define what good looks like. And if you can't, don't bother.*  
> <span class="qm">—— Sam Newman · [41:29]</span> ^q11

> <span class="qz">如果你只是不看代码，而且也不在意那些其他的事情，那么接下来发生在你身上的任何事都是你活该。</span>  
> *If you're just not looking at the code and you're not caring about those other things, well, then you deserve everything that's going to happen to you.*  
> <span class="qm">—— Sam Newman · [40:33]</span> ^q12

> <span class="qz">AI 本来应该把我们从苦役中解放出来，对吧？但对大多数软件开发者来说并不是，因为我们在做更多的工作，我们有更多的上下文切换，我们正在失去那种大局观。</span>  
> *AI was supposed to free us from drudgery. Right? It isn't for most software developers because we're doing more work, we've got more context switching, we're losing that big picture.*  
> <span class="qm">—— Sam Newman · [39:16]</span> ^q13

> <span class="qz">不会，因为那样你的分布式拒绝服务攻击就变成了分布式拒绝现金攻击，对吧？</span>  
> *No, because then your distributed denial of service attack becomes a distributed denial of cash attack, right?*  
> <span class="qm">—— Sam Newman · [79:53]</span> ^q14

> <span class="qz">SLA 是你违反了会被起诉的东西。如果你只是达到 SLA，你的客户几乎不会满意。</span>  
> *The SLA is what you're going to get sued for if you breach. If you only ever deliver to the SLA, your customers are rarely ever happy.*  
> <span class="qm">—— Sam Newman · [66:50]</span> ^q15

> <span class="qz">经济学家们保守的分析表明，到 2030 年，它们需要产生 2.6 万亿美元的收入，才能证明其资本支出是合理的。而整个软件市场是 1.4 万亿美元。</span>  
> *Conservative analysis by the economists are showing that they need to be generating 2.6 trillion in revenue to justify their capex expenditure by 2030. The entire software market is 1.4 trillion.*  
> <span class="qm">—— Sam Newman · [93:19]</span> ^q16

> <span class="qz">为什么 LLM 删掉了我的数据库？嗯，因为它没有因果性的概念。</span>  
> *Why did the LLM delete my database? Well, because it has no concept of causality.*  
> <span class="qm">—— Sam Newman · [95:59]</span> ^q17

> <span class="qz">这就是为什么围绕 LLM 的那些护栏真的不是长期来看正确的解决方案。</span>  
> *This is why all the guardrails around LLMs are really not long-term going to be the right solution.*  
> <span class="qm">—— Sam Newman · [96:53]</span> ^q18

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「创业与行业」挖下去**

- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:LLM、可观测性 (observability)、智能体 (agent)</span>
- [[2026-09-30-bigtech-sap-ceo-ai-won-t-kill-software-but-it-wi|SAP CEO:单靠 LLM 跑不动企业,商业 AI 只差几个月]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:LLM、智能体 (agent)</span>
- [[2026-10-06-eyeonai-the-coordination-tax-why-ai-is-burning-o|AI没有消灭客服，反而让他们更累了？]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:LLM、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-05-28-beyondcoding-addy-osmani-top-tier-software-engineers|从看护智能体到认知投降：工程师该守住什么]]<span class="pd-rz">同概念:智能体 (agent)、认知债务 (cognitive debt)、认知投降 (cognitive surrender)</span>
- [[2026-08-19-pragmatic-from-chrome-devtools-to-ai-engineering|Addy Osmani：从造浏览器到对抗认知投降]]<span class="pd-rz">同概念:智能体 (agent)、认知债务 (cognitive debt)、认知投降 (cognitive surrender)</span>
- [[2026-08-28-talks-building-ureview-uber-s-multi-agent-code|Uber 用 AI 给 AI 评审代码:每周 2.5 万条评论是这样炼成的]]<span class="pd-rz">同公司:Uber · 同概念:可观测性 (observability)、智能体 (agent)</span>

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
