---
title: Stripe 内部公司大脑 Kai：让上万人放心把工作交给智能体的治理术
podcast: How I AI
date: 2026-09-07
source_url: undefined
duration: "50:21"
type: episode
cover: "#64748b"
image: "/covers/2026-09-07-howiai-build-your-own-company-brain-the-enterpr.jpg"
description: Stripe 工程经理 Sherrod 详解自建公司智能体 Kai：如何用项目、技能与工具策略做治理，让全公司上万人放心用 AI。
host: "[[Claire Vaux]]"
cohosts: ["[[Sharadh Krishnamurthy]]"]
companies: ["[[Stripe]]"]
concepts: ["[[Kai]]", "[[智能体]]", "[[治理]]", "[[项目]]", "[[工具策略]]", "[[人在回路]]", "[[技能]]", "[[沙箱]]", "[[智能体身份]]", "[[数据仓库]]"]
category: 智能体
tags:
  - 智能体
  - 组织与领导力
socialImage: "https://talk.solomind.cc/covers/2026-09-07-howiai-build-your-own-company-brain-the-enterpr.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-07-howiai-build-your-own-company-brain-the-enterpr#post","headline":"Stripe 内部公司大脑 Kai：让上万人放心把工作交给智能体的治理术","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-07-howiai-build-your-own-company-brain-the-enterpr","mainEntityOfPage":"https://talk.solomind.cc/2026-09-07-howiai-build-your-own-company-brain-the-enterpr","description":"Stripe 工程经理 Sherrod 详解自建公司智能体 Kai：如何用项目、技能与工具策略做治理，让全公司上万人放心用 AI。","datePublished":"2026-09-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-07-howiai-build-your-own-company-brain-the-enterpr.jpg","about":[{"@type":"Person","name":"Claire Vaux"},{"@type":"Person","name":"Sharadh Krishnamurthy"},{"@type":"Organization","name":"Stripe"},{"@type":"Thing","name":"Kai"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"治理 (governance)"},{"@type":"Thing","name":"项目 (projects)"},{"@type":"Thing","name":"工具策略 (tool policies)"},{"@type":"Thing","name":"人在回路 (human-in-the-loop)"},{"@type":"Thing","name":"技能 (skill)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"智能体身份 (agentic identity)"},{"@type":"Thing","name":"数据仓库 (data warehouse)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Stripe 内部公司大脑 Kai：让上万人放心把工作交给智能体的治理术","item":"https://talk.solomind.cc/2026-09-07-howiai-build-your-own-company-brain-the-enterpr"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Stripe 内部公司大脑 Kai：让上万人放心把工作交给智能体的治理术</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Stripe 内部公司大脑 Kai：让上万人放心把工作交给智能体的治理术

<div class="pd-byl"><b>Sharadh Krishnamurthy</b> · Stripe 工程经理 · 2026-09-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-07-howiai-build-your-own-company-brain-the-enterpr.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">更难的问题在于如何大规模地复刻一家公司的运作方式。</div><div class="a">— Sharadh Krishnamurthy <button class="pd-ts" data-t="03:41" data-who="Sharadh Krishnamurthy" data-en="The harder problems are in trying to replicate the way a company works at scale." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Claire Vaux]] · [[Sharadh Krishnamurthy]]
>
> **公司** [[Stripe]]
>
> **概念** [[Kai]] · [[智能体]] · [[治理]] · [[项目]] · [[工具策略]] · [[人在回路]] · [[技能]] · [[沙箱]] · [[智能体身份]] · [[数据仓库]]

这一集聊的是一件很多大公司都在琢磨的事：怎么让全公司上上下下、不只是工程师，都敢放心地把日常工作交给 AI。主角是 Sherrod，[[Stripe|Stripe]] 的工程经理，他和同事 Anupam 一起构建了 [[Kai|Kai]]——Stripe 的「公司大脑」和内部公司[[智能体|智能体]]。

最颠覆的一点是：Kai 现在每周有超过 10,000 名 Stripe 员工在用、公司 86% 以上的人都是它的用户，但维护它的核心团队不到 10 个人。而最初做出第一个版本，只花了「一个半工程师」两周时间。Sherrod 的核心主张是：让 AI 触达每个人，难点根本不在技术，而在[[治理|治理]]——「更难的问题在于如何大规模地复刻一家公司的运作方式」，关键不是提供 AI，而是「提供正确的治理结构，让每个人都可以放心去使用 AI，并知道它会为他们做正确的事」<button class="pd-ts" data-t="03:41" data-who="Sherrod" data-en="And we quickly realized it's not just an engineering or a technical problem. The harder problems are in trying to replicate the way a company works at scale. And Stripe is an incredibly complex business, like all around the world, like multitude of products, so many, so many processes that keep us in a shape so that we can help our users." aria-label="回原文"></button><button class="pd-ts" data-t="04:02" data-who="Sherrod" data-en="And so we quickly realized that it's not about providing AI. It's about providing the correct governance structures so that everyone can just go use AI and know it'll do the right thing for them." aria-label="回原文"></button>。

## 项目（Projects）：一个治理单元，而不只是聊天分组

大多数团队用「[[项目|项目]]」来归拢文件和对话，Stripe 却把它做成了配置层和治理层——这是 Sherrod 认为他们「多下了功夫」的第一件事。

一个项目就是一圈边界：有人（通常是这个领域的 DRI，即直接负责人）来决定这个工作流里 AI 该用哪些工具、哪些数据、什么默认模型、多少安全控制。项目大到 500 人，小到 5 个人都有。

比如可以在项目层面设默认模型，不让「这个工作不需要超级模型」的任务烧昂贵的 token <button class="pd-ts" data-t="08:43" data-who="Sherrod" data-en="The idea is that you create something where someone decides what's the appropriate set of things that you should need for the AI to function well, and what are the appropriate safety controls?" aria-label="回原文"></button>。people 团队甚至有一个完全独立、后端全安全加固的 Kai 版本项目 <button class="pd-ts" data-t="30:55" data-who="Sherrod" data-en="We have projects that are created for projects, like short-lived things. We have projects created for teams, like the people team has a super secure version of CHI in a different project that's backed by a totally secure backend and stuff." aria-label="回原文"></button>。

Sherrod 的理念是：「我们应该尽量减少每天必须主动做出这些选择的人数，它应该自动为他们做正确的事」<button class="pd-ts" data-t="09:25" data-who="Sherrod" data-en="And I like the fact that we can have a few people who are very knowledgeable about the AI and the trade-offs between cost, performance, and latency, and they can sort of set the stage for everyone to just go use, right?" aria-label="回原文"></button>。少数懂成本、性能、延迟权衡的人搭好台子，其他人直接用。

项目还能接自定义智能体——不一定是 Kai 默认那个，可以换成完全定制的后端 API 和 harness，用同一套功能 <button class="pd-ts" data-t="31:15" data-who="Sherrod" data-en="The thing about this is, again, it lets one person or a few people who are DRIs of the space to figure out how to get the agent to perform well for everyone. The really interesting thing I have on projects, there's this thing called settings that, like I said, you can use a custom agent to power your project." aria-label="回原文"></button>。用他的话说，Kai 看起来像一个单一产品，「它其实不是。它就像多层蛋糕上面的一层糖霜」，每一层都可以按企业需求定制 <button class="pd-ts" data-t="35:19" data-who="Sherrod" data-en="That's super insightful because as you were speaking about bespoke agents, and I showed a little bit of this earlier. CHI looks like a single product. It really isn't." aria-label="回原文"></button>。

## 数据智能体：三层分诊 + 被暴力砸也不垮的仓库

Stripe 几乎人人用 Kai 做的第一件事，是创建数据仪表板。背后靠的是 Ask Data [[技能|技能]]的一套「三层分诊」：先找现有的报告和直接产物，不行再下到官方认可的分析层（blessed analytics layer，即把公司最关键指标统一管理的那一层）找正确的查询，实在没办法才落到数据目录、自己写查询 <button class="pd-ts" data-t="16:06" data-who="Sherrod" data-en="But even there are higher level investments as well. There is a blessed analytics layer where like the really key metrics go in, right? And there's a tiering system where there's an analytics layer." aria-label="回原文"></button>。

这套东西原本是给人类设计的，但对智能体同样关键——因为「它们能回答问题，但它们完全不知道那是不是正确的查询或正确的表」<button class="pd-ts" data-t="17:12" data-who="Sherrod" data-en="So these investments were made for humans, but have held up really well for agents because turns out the reasoning through it, agents have the same problem. They can answer the question, but they have no idea if it was the right query or the right table." aria-label="回原文"></button>。

另一条不太性感但致命的经验：[[数据仓库|数据仓库]]必须扛得住高并发查询，因为「一旦拿不准，智能体就会直接暴力破解」<button class="pd-ts" data-t="18:46" data-who="主持人 Claire" data-en="The thing that I also heard you say is your data warehouse has to be very resilient to high volume queries because when in doubt, an agent will just brute force it." aria-label="回原文"></button>。Stripe 用 Trino（一个分布式 SQL 查询引擎）做查询层，长期投入让它极具韧性，「这些投入让智能体可以疯狂地猛砸它而不会把它砸垮」<button class="pd-ts" data-t="15:39" data-who="Sherrod" data-en="We've invested a lot into making that super resilient, right? And those investments have helped agents like slam it like crazy and not bring it down, right? We've invested a lot in the data platform side of things." aria-label="回原文"></button>。

他们还做了「[[智能体身份|智能体身份]]」——在基础设施里声明「这是一个智能体、它在干什么」，以此做优先级和负载卸载 <button class="pd-ts" data-t="19:37" data-who="Sherrod" data-en="They're like, it's almost like all these scripts that they were trained on just teach them to be script kiddies or something, right? The thing that we really did well is thinking about agentic identity." aria-label="回原文"></button>。代价也是真实的：「事实证明，智能体只是把你所有的故障模式都调到了最大」，早期确实有智能体失控、差点搞挂核心系统，好在及时发现并加固了 <button class="pd-ts" data-t="20:10" data-who="Sherrod" data-en="Very deep infra stuff, but the same principles apply. It turns out that agents just dial up all your failure modes. It just multiplies the amplitude of problems you can get, right?" aria-label="回原文"></button><button class="pd-ts" data-t="20:25" data-who="Sherrod" data-en="I wouldn't claim that we did not have any issues. We definitely had a bunch of issues where when we started doing this, like there were agents that went rogue. There were agents that, you know, may have almost taken down core systems, but we caught it in time and now we've hardened those systems as well." aria-label="回原文"></button>。

主持人 Claire 由此给出一个反直觉的建议：想让 AI 交付更多产品？不是去优化产品开发流程，而是「把你 DevEx 团队的规模翻一倍。

把你数据团队的规模翻一倍」。AI 之前为人类效率做的平台投入，就是智能体时代的杠杆 <button class="pd-ts" data-t="18:02" data-who="Claire" data-en="And so, you know, when people ask me, like, Claire, what can I do to ship more product with AI? They think I'm going to say something about product development. And I say, double the size of your DevEx team." aria-label="回原文"></button><button class="pd-ts" data-t="17:50" data-who="Claire" data-en="I say this specifically about Stripe a lot, which is I think one of the reasons why Stripe has been able to benefit so much from AI is prior to AI, there's been a commitment to developer experience, developer platform, data platform, analytics layers, like all these things that made humans really efficient at the company pre-AI." aria-label="回原文"></button>。

## 技能平台：从一次会话到全公司可复用的工作流

Kai 的第二个亮点是把「技能」做成了一个平台，而不只是一个技能创建器。流程是：你在 Kai 里迭代出一个好用的仪表板后，让内置的 skill creator 把这次会话学到的东西打包成一个标准开放规范的技能，可以私有保存，也可以发布给全公司 <button class="pd-ts" data-t="29:39" data-who="Sherrod" data-en="So the thing that I think Kai did really well and one reason for its product market fit was... I can create a skill that basically takes what I've done in this session and packages it up so that it can become a load-bearing, repeatable workflow, right?" aria-label="回原文"></button>。

真正的魔法在检索。编码智能体在仓库里干活，有天然的目录层级可以挂技能；但企业员工的工作横跨五六个系统，没有层级可言。所以 Stripe 投入做了技能的打包与检索——你只说「给我调出最新的采纳情况仪表盘」，Kai 就能自动加载几秒前刚创建的那个技能 <button class="pd-ts" data-t="39:21" data-who="Sherrod" data-en="You're frequently trying to fit to like five different systems. And so a large part of the investments we've done and what we've managed to give to Stripe is the ability to package skills and retrieve them." aria-label="回原文"></button>。

规模上来后，质量和数量成了一件事：「对这类系统来说，质量和数量是分不开的，因为上下文就是一切」——塞进太多低价值上下文，结果只会变差 <button class="pd-ts" data-t="41:38" data-who="Sherrod" data-en="A hundred percent. And I almost think you can't separate quality and quantity when it comes to these systems because context is everything. The more underrated context you throw into the AI, the less good your results to come." aria-label="回原文"></button>。Stripe 大约有 2000 个技能，其中约 50 个被全公司每天重度使用，另有 100-150 个长尾技能由局部团队使用，还有一堆只有两三个人用的——遥测数据会告诉平台方哪些该提拔进通用工作流、哪些该移出去省上下文 <button class="pd-ts" data-t="42:05" data-who="Sherrod" data-en="We started off with a bunch of different skills and we do have telemetry on We have, let's say, 50 skills that are used, like hammered every day across the company." aria-label="回原文"></button>。平台还会自动给每个技能作者发改进建议（爬山优化），Claire 还补充了别家做法：30 天没人调用的技能提醒、弃用、两周后删除 <button class="pd-ts" data-t="41:00" data-who="Claire" data-en="And then they also have a deprecation policy for skills. So if skills have not been invoked for like 30 days, you get a little notice and it's like, hey, you haven't used a skill." aria-label="回原文"></button>。

## 工具策略：敏感工作流里给智能体拴绳

[[工具策略|工具策略]]（tool policies）是治理落到具体动作的一层。比如 HR 团队处理敏感信息：既不能禁止用工具，也不能放任智能体把敏感数据写进全员可见的公开文档。做法是在项目层面设定：某些工具直接允许、某些工具触发「[[人在回路|人在回路]]」审批——智能体要创建日历邀请时，先弹出确认，人来点头 <button class="pd-ts" data-t="31:55" data-who="Sherrod" data-en="One of the cool things about projects that can be very concrete for people is the idea of tool policies. Now, I mentioned the people team. Let's say you're a person on the HR team who's dealing with a bunch of sensitive information, right?" aria-label="回原文"></button>。

这里有个很现实的洞察：「如果你给人们设置太多摩擦，他们就会去做不安全的事情，因为人类就是这样运作的。如果我在每个会话、每个工具上都向你展示这个，最终你会按错按钮」<button class="pd-ts" data-t="35:40" data-who="Sherrod" data-en="So 100% agree that the notion of both customization, but lowering the cost of management, the cost of ownership, and just the friction. If you put too much friction in front of people, they're just going to do unsafe things because that's how humans work." aria-label="回原文"></button>。所以摩擦要精准——只在真正敏感的操作上要求人确认，且按项目划定范围，不全场广播。

## 一个半人、两周、到上万人

推广路径也够精简：Sherrod 自己业余写代码当「个人贡献者」，一个半工程师两周做出 V0——他强调「一旦我们能给人们展示一些东西，答案就变得显而易见了」，光靠嘴很难说服人为什么需要这东西 <button class="pd-ts" data-t="25:45" data-who="Sherrod" data-en="I was moonlighting as an engineering individual contributor, again, trying to get this out the door. And so it took us like one and a half people over two weeks to get VZO out the door." aria-label="回原文"></button>。试点阶段约 200-300 个用户，GTM 团队的 Ilia 是最早的大客户，营销团队几乎全员涌入 <button class="pd-ts" data-t="26:18" data-who="Sherrod" data-en="And then we moved into a pilot stage where we started seeing a lot of Interest from primarily, we have a great collaborator, Ilia, on the GTM team who builds AI for GTM, right?" aria-label="回原文"></button>。

真正的爆点是一次全公司演示，「然后对每个人来说就豁然开朗了」<button class="pd-ts" data-t="26:58" data-who="Sherrod" data-en="Things really ramped. Once we did like a company-wide demo saying that, hey, we built this thing, we invited you to use it. And it just clicked for everyone." aria-label="回原文"></button>。如今不到 10 人的核心团队服务每周 10,000+ 用户，靠的是编码智能体的生产力加上 AI 之前就打好的基础设施。Sherrod 也坦承：「我们非常清楚地认识到，我们处在这段旅程的最早期阶段」<button class="pd-ts" data-t="44:48" data-who="Sherrod" data-en="I think it's important also, I would be remiss if I didn't say, it sounds like we figured this all out. We absolutely haven't. We are very cognizant that we are in the earliest parts of this journey." aria-label="回原文"></button>。

## 本集带走

- **治理先于功能**：让全公司用 AI 的瓶颈不是模型，而是治理结构——有人替大家把模型、工具、数据的默认选择配好，普通人零决策直接用。
- **把「项目」当治理单元**：按工作流（而非按人）划边界，配置默认模型、可用工具、数据权限和人在回路审批；权限跟着场景走，不在每个会话里重复弹窗。
- **数据智能体三件事**：分层分诊（现有报告→官方分析层→数据目录）、仓库扛得住暴力查询、给智能体独立身份做限流——为人类做的数据平台投入，智能体直接复用。
- **技能要当产品运营**：让任何人把成功会话打包成可复用技能并共享，同时用遥测管理质量与数量——低价值技能占上下文，会直接拉低所有结果。
- **摩擦要精准**：安全管控加太多，人会开始绕过它；只在真正敏感的动作上要求人确认。
- **先做出东西再说服**：一个半工程师两周的 V0 比任何方案文档都有说服力。

<div class="pd-sec pd-sec-q">全部金句 <span>10 条</span></div>

> <span class="qz">更难的问题在于如何大规模地复刻一家公司的运作方式。</span>  
> *The harder problems are in trying to replicate the way a company works at scale.*  
> <span class="qm">—— Sharadh Krishnamurthy · [03:41]</span> ^q1

> <span class="qz">我们应该尽量减少每天必须主动做出这些选择的人数，它应该自动为他们做正确的事。</span>  
> *We should try to minimize the number of people who have to actively make these choices every day, and just it should do the right thing for them.*  
> <span class="qm">—— Sharadh Krishnamurthy · [09:25]</span> ^q2

> <span class="qz">它们能回答问题，但它们完全不知道那是不是正确的查询或正确的表。</span>  
> *They can answer the question, but they have no idea if it was the right query or the right table.*  
> <span class="qm">—— Sharadh Krishnamurthy · [17:12]</span> ^q3

> <span class="qz">这些基础性的投入，如今当你把智能体扔上去时就给了你极大的杠杆。</span>  
> *Our foundational investments that now give you extreme leverage when you throw agents at it.*  
> <span class="qm">—— Claire Vaux · [17:50]</span> ^q4

> <span class="qz">而我说，把你 DevEx 团队的规模翻一倍。把你数据团队的规模翻一倍。投入平台建设。对人类有好处，对智能体也有好处，而这就是能让你跑起来的东西。</span>  
> *And I say, double the size of your DevEx team. Double the size of your data team. Like, work on platform investments. Good for humans. Good for agents. And that's what will let you run.*  
> <span class="qm">—— Claire Vaux · [18:04]</span> ^q5

> <span class="qz">智能体在搞挂你的基础设施方面非常有创造力。</span>  
> *Agents are very creative at bringing your infra down.*  
> <span class="qm">—— Sharadh Krishnamurthy · [19:26]</span> ^q6

> <span class="qz">事实证明，智能体只是把你所有的故障模式都调到了最大。</span>  
> *It turns out that agents just dial up all your failure modes.*  
> <span class="qm">—— Sharadh Krishnamurthy · [20:10]</span> ^q7

> <span class="qz">如果你给人们设置太多摩擦，他们就会去做不安全的事情，因为人类就是这样运作的。</span>  
> *If you put too much friction in front of people, they're just going to do unsafe things because that's how humans work.*  
> <span class="qm">—— Sharadh Krishnamurthy · [35:40]</span> ^q8

> <span class="qz">而且我几乎认为，对这类系统来说，质量和数量是分不开的，因为上下文就是一切。</span>  
> *And I almost think you can't separate quality and quantity when it comes to these systems because context is everything.*  
> <span class="qm">—— Sharadh Krishnamurthy · [41:38]</span> ^q9

> <span class="qz">我想让智能体让我为它们工作。</span>  
> *I want the agents to put me to work.*  
> <span class="qm">—— Claire Vaux · [46:55]</span> ^q10

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同公司:Stripe · 同概念:智能体 (agent)、沙箱 (sandbox)、Claude Code</span>
- [[2026-02-19-lennys-head-of-claude-code-what-happens|Claude Code 负责人：写代码已被解决，下一步是什么]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)、Claude Code</span>
- [[2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact|TESL 智能体：让你的编码智能体自己越用越好]]<span class="pd-rz">同概念:技能 (skill)、智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog|AI失控了别慌,先盯紧漏洞数量爆炸]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)、数据仓库 (data warehouse)</span>
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|Vercel COO 谈用 AI 重构销售：10 个 SDR 缩减到 1 个]]<span class="pd-rz">同公司:Stripe · 同概念:智能体 (agent)</span>
- [[2026-05-21-talks-the-best-time-in-history-to-start-a-comp|Stripe 与 Replit 对谈：AI 时代的创业大爆发与护城河]]<span class="pd-rz">同公司:Stripe · 同概念:智能体 (agent)</span>

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
