---
title: 终结 AI 垃圾内容：Taste Labs 如何度量并对抗 slop
podcast: 精选演讲
date: 2026-09-12
source_url: undefined
duration: "14:55"
type: episode
cover: "#64748b"
description: Taste Labs 创始人 Thais 分析 200 万个网站找出 AI slop 的可量化特征，并讲述如何用品牌遵循与判断力把生成质量拉回正轨。
guests: ["[[Thais Castello Branco]]"]
companies: ["[[Taste Labs]]"]
concepts: ["[[垃圾话]]", "[[智能体]]", "[[推理时]]", "[[LLM 判别器]]", "[[判断力]]", "[[探针]]", "[[Creativity API]]", "[[brand API]]"]
category: 产品方法
tags:
  - 产品方法
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-10-talks-training-taste-thais-castello-branco-tas#post","headline":"终结 AI 垃圾内容：Taste Labs 如何度量并对抗 slop","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-10-talks-training-taste-thais-castello-branco-tas","mainEntityOfPage":"https://talk.solomind.cc/2026-09-10-talks-training-taste-thais-castello-branco-tas","description":"Taste Labs 创始人 Thais 分析 200 万个网站找出 AI slop 的可量化特征，并讲述如何用品牌遵循与判断力把生成质量拉回正轨。","datePublished":"2026-09-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Thais Castello Branco"},{"@type":"Organization","name":"Taste Labs"},{"@type":"Thing","name":"垃圾话 (slop)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"推理时 (inference time)"},{"@type":"Thing","name":"LLM 判别器 (LLM as a judge)"},{"@type":"Thing","name":"判断力 (judgment)"},{"@type":"Thing","name":"探针 (probes)"},{"@type":"Thing","name":"Creativity API"},{"@type":"Thing","name":"brand API"}],"articleSection":"产品方法"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"产品方法","item":"https://talk.solomind.cc/tags/产品方法"},{"@type":"ListItem","position":3,"name":"终结 AI 垃圾内容：Taste Labs 如何度量并对抗 slop","item":"https://talk.solomind.cc/2026-09-10-talks-training-taste-thais-castello-branco-tas"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>终结 AI 垃圾内容：Taste Labs 如何度量并对抗 slop</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 终结 AI 垃圾内容：Taste Labs 如何度量并对抗 slop

<div class="pd-byl"><b>Thais Castello Branco</b> · Taste Labs 创始人 · 2026-09-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-10-talks-training-taste-thais-castello-branco-tas.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我觉得有时候很难定义什么是出色，但从大多数人都会同意的意义上说，定义什么是 slop 相当容易。</div><div class="a">— Thais Castello Branco <button class="pd-ts" data-t="03:22" data-who="Thais Castello Branco" data-en="I think it is hard to define what is great sometimes, but I think it's pretty easy to define what is slop in the sense that most people would agree." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Thais Castello Branco]]
>
> **公司** [[Taste Labs]]
>
> **概念** [[垃圾话]] · [[智能体]] · [[推理时]] · [[LLM 判别器]] · [[判断力]] · [[探针]] · [[Creativity API]] · [[brand API]]

这一集聊的是一个所有人都已经感觉到、但很少有人去认真度量的问题：AI slop——AI 生成内容的那种重复、没有灵魂、千篇一律的质感。主角是 Thais，[[Taste Labs|Taste Labs]] 的创始人，公司几周前刚从 Stout 出来，使命一句话就能说清：终结 AI 垃圾内容。她给出的最反直觉的判断是：**「出色」很难定义，但「垃圾」出奇地好定义**——而只要能把垃圾变成一个可量化、可预测的东西，你就有了对抗它的抓手 <button class="pd-ts" data-t="03:22" data-who="Thais" data-en="And slop is kind of the opposite of that, right? I think it is hard to define what is great sometimes, but I think it's pretty easy to define what is slop in the sense that most people would agree." aria-label="回原文"></button>。

## 为什么 slop 是个新问题，又不是新问题

slop 这个现象并不新鲜，社交媒体时代就有一堆垃圾内容；但 AI 是它的加速器——任何一个不是设计师、也不是工程师的人，点一个按钮就能做出一整套 PPT、一个网站、一个 web 应用 <button class="pd-ts" data-t="03:34" data-who="Thais" data-en="I think the sense of repetition, of kind of soullessness, is something that all of us feel right now when using AI. And I think it's quite magical, by the way, that AI has gotten to a point that any human on the planet that is not even a designer, that is not an engineer, can click a button and suddenly make an entire PowerPoint or make a website or make a web app." aria-label="回原文"></button>。Thais 承认这相当神奇，但代价是：生成的成本基本趋于零，而普通人并没有磨练过自己的品味 <button class="pd-ts" data-t="03:49" data-who="Thais" data-en="But it comes with consequences, right? It comes with consequences of suddenly now the cost of generation is basically going to zero. But the average person hasn't necessarily honed their taste." aria-label="回原文"></button>。

一个设计师一生要接触大量东西、学会识别模式、形成观点、学会克制，才能建立起品味——普通人不可能在每个领域都来一遍 <button class="pd-ts" data-t="03:59" data-who="Thais" data-en="But the average person hasn't necessarily honed their taste. Think about the amount of effort and work that a designer puts in throughout their life to build up their taste." aria-label="回原文"></button>。所以她认为「修复 slop 的办法就是让每个人都有品味」是个糟糕的假设，不现实；正确的问题是：怎么让普通人也能创造出伟大的东西 <button class="pd-ts" data-t="04:28" data-who="Thais" data-en="The average person doesn't necessarily have the time or the skills to go and develop taste in everything, let's say in design. I think it would be a bad case scenario for us to just be like, okay, the way to fix slop is for everyone to have taste, because I don't think that's necessarily realistic." aria-label="回原文"></button>。

她把 slop 拆成三个反复出现的特征 <button class="pd-ts" data-t="05:10" data-who="Thais" data-en="There's kind of these three characteristics that I would say repeat in SOP. So A, repetition. So you start seeing the same thing many, many, many times." aria-label="回原文"></button>：

1. **重复性**——同样的东西出现太多太多次。
2. **缺乏契合度（fit）**——内容在特定语境、特定时刻、对特定的人感觉不到「正确」。一个人给宠物店要网站，另一个人给金融公司要网站，设计却趋同了——用心做的话不该趋同 <button class="pd-ts" data-t="05:26" data-who="Thais" data-en="For a specific moment in time, for a specific person. But suddenly if you have repetition, and let's say one person asks for a website for their pet shop and the other one asks for a website for their finance firm, and somehow those designs converge and look the same, that's quite odd, right?" aria-label="回原文"></button>。
3. **低意图**——一堆人快速提示、想一次性生成完事，但更深层的是，我们构建的系统里缺了「意图解读」这个环节：帮用户弄清自己到底想要什么，为创作补充更多色彩和语境 <button class="pd-ts" data-t="06:01" data-who="Thais" data-en="But I think there's actually this intent interpretation piece that's missing in the systems that we're building. How can you help your user? How can you help them better understand the intent that they have so that you can add more color and add more context onto what you're trying to create?" aria-label="回原文"></button>。

## 把 slop 变成可度量的东西

Thais 坚信：要修复一个东西，必须先度量它、理解它 <button class="pd-ts" data-t="06:12" data-who="Thais" data-en="How can you help them better understand the intent that they have so that you can add more color and add more context onto what you're trying to create? Okay, and I'm a big believer, by the way, that in order to fix something, you first have to measure it, and you first have to understand it." aria-label="回原文"></button>。于是团队做了一次研究：像时光机那样分析过去 10 年超过 200 万个网站，追踪设计趋势，另外合成生成一组 AI 设计网站做对照 <button class="pd-ts" data-t="06:41" data-who="Thais" data-en="And what does that look like? So we analyzed over 2 million websites from the past 10 years, kind of like way back machine style to try to understand all the trends across design." aria-label="回原文"></button>。

两个发现。第一，**在 AI 出现之前，互联网就已经在坍缩**——配色越来越相似、布局越来越相似，趋势传播得更快导致同质化；但 AI 让重复发生得更猛，而且几乎不看语境——在完全不同的类别里，你能看到非常相似的模式 <button class="pd-ts" data-t="07:08" data-who="Thais" data-en="And there were a few things that were interesting. So one was that you already kind of saw a bit of a collapse on the internet before even AI. So you saw kind of the internet becoming more homogenous, using more similar color palettes, using more similar layouts, which is probably a function of more, I would say, this kind of trend spreading more quickly, let's say." aria-label="回原文"></button>。

第二，他们做了「[[探针|探针]]」（probes）：先对所有网站做模式挖掘，把颜色、字体排印、布局、受众这些模糊特征提炼成接近结构化的东西，再训练一批「婴儿分类器」，每个只负责识别一个特征 <button class="pd-ts" data-t="07:42" data-who="Thais" data-en="So we built this, I call this probes, but basically we did two things. So we did this pattern mining. On all this data to understand what are features that we can extract from all these sites?" aria-label="回原文"></button>。当多个探针同时出现的频率被组合起来，就能高置信度地预测一个网站是不是 AI slop，预测能力非常高 <button class="pd-ts" data-t="08:15" data-who="Thais" data-en="And for all these slop sites, we identified, we started identifying like what are the probes that basically mean this site is very likely to be AI slop. And especially when you start combining them and you see the frequency of multiple of these happening at once, it became very likely that you could actually like measure" aria-label="回原文"></button>。

而且这套探针**比大多数 [[LLM 判别器|LLM-as-a-judge]]（让一个大模型直接判断内容是优质人类作品还是 AI 垃圾）的方法表现都好** <button class="pd-ts" data-t="08:29" data-who="Thais" data-en="And we saw a super high, basically, ability to do that prediction, which was really cool to see. This performed better, by the way, than most LLM-as-a-judge methods of asking an LLM to judge if that is great human quality versus AI-generated slop." aria-label="回原文"></button>。这证明 slop 不只是模糊的感觉，而是真实存在、可以量化的东西。

## 对抗 slop：模型层之外，推理时同样重要

现在业界大量讨论集中在模型层——怎么让模型标准更高。Thais 不否认这必须解决，但她认为**[[推理时|推理时]]（inference time，也就是模型实际响应用户的那一刻）的问题同等重要甚至更重要**：因为理解上下文和意图的来回往复，恰恰发生在推理的那一刻；只把模型变好而不解决这一层，slop 会继续存在 <button class="pd-ts" data-t="09:44" data-who="Thais" data-en="Which, don't get me wrong, it has to be solved and we're working very hard to solve that too. But I actually think this problem of inference time is equally, if not even more important." aria-label="回原文"></button>。

另一个核心判断：生产成本归零之后，变得昂贵、比以往任何时候都重要的是**[[判断力|判断力]]**——她刻意不用「品味」这个词，而是指辨别什么是对的、把问题拆解到能真正理解并为它构建解决方案的能力 <button class="pd-ts" data-t="09:06" data-who="Thais" data-en="And so there's a few, I think I mentioned this before, but as the cost of production basically goes to zero, I think the thing that becomes expensive and matters more than ever is judgment." aria-label="回原文"></button>。

对应三个 slop 特征，他们做了几件事：

**对抗重复性：[[Creativity API|Creativity API]]（暂定名）。** 做一个「[[智能体|智能体]]的灵感机器」，让它产出真正分布之外的东西，而不是落在那个均值里。

关键是，这绝不是把模型温度调高然后祈祷——创造力不是随机性，而是在特定领域理解规则和期望之后，有意地在几件事上偏离、打破规则，同时在其他方面保持对该类别期望的遵循 <button class="pd-ts" data-t="10:38" data-who="Thais" data-en="You can improve this like overall quality. And by the way, I don't think that this can be something just like randomness. It's not just about like turning up a temperature of a model and kind of fingers crossed hoping for the best." aria-label="回原文"></button>。比如一份好的 pitch deck 长什么样是有规律的，真正的创意是在懂规律的前提下刻意打破其中几条 <button class="pd-ts" data-t="11:00" data-who="Thais" data-en="What does a good pitch deck look like? And then how do you almost intentionally break rules to create things that are more creative? Because usually creativity isn't randomness, isn't doing something that completely feels off for that situation." aria-label="回原文"></button>。

**对抗缺乏契合度：Brand API——他们向公众发布的第一个产品。** 伟大的品牌是几十位设计师投入大量技艺和心血的成果，也就是说「对这个公司什么是伟大的」这份工作其实早就预先做完了，只是我们没把它用好 <button class="pd-ts" data-t="11:31" data-who="Thais" data-en="The second one on this problem of fit, I think it's interesting, but brands, as probably a lot of you who are designers know, take so much effort to create great brands." aria-label="回原文"></button>。

Brand API 的做法是：输入一个品牌 URL，把它提取成非常具体的组件，结构化到智能体容易遵循、人也容易对照做判断的程度——既帮智能体产出更贴合品牌的东西，也让你能判断它有没有跑偏、在哪里跑偏 <button class="pd-ts" data-t="12:14" data-who="Thais" data-en="This is already in beta testing with a bunch of our design partners. And essentially what it does is it can take, let's say, a brand URL and extract this into very specific components that are good for an agent to follow." aria-label="回原文"></button>。已有真实案例：让 Claude Design 按某公司品牌做幻灯片，默认产出平庸；走 Brand API 提取流程后，产出与原品牌保真度高得多、细节上感觉也是对的 <button class="pd-ts" data-t="13:28" data-who="Thais" data-en="And I want to show you a real example of this in action. So there's this company that I think is awesome called the General Intelligence Company of New York. They have a sick website." aria-label="回原文"></button>。更进一步，对于根本没有品牌的普通用户，他们在建一个预制的品牌系统索引：想要「梦幻感」，直接检索一套已被通盘考虑过、内在连贯的梦幻品牌系统，而不是当场生成一个大概率落入 slop 特征的东西 <button class="pd-ts" data-t="13:10" data-who="Thais" data-en="Can we actually, one of the things that we're creating is basically like a repository, like an index of brands. of almost like pre-created brand systems so that if they want something that feels dreamy, why not retrieve a dreamy brand system that already has been thought out to be cohesive instead of doing like a generative approach the moment of that might end up not so great or might end up again in those pillars of slop." aria-label="回原文"></button>。

**对抗低意图：把探针当闸门。** 那些婴儿分类器可以直接成为 slop 的把关者——不让你的智能体把 slop 交付出去 <button class="pd-ts" data-t="11:56" data-who="Thais" data-en="And then same with intent and judgment. I think the baby classifiers was a good example. Like how we can actually use this to even become a gate for slop and not let your agent ship slop." aria-label="回原文"></button>。

## 别急着争论「模型能不能有品味」

有人会问：人类品味的巅峰会不会被模型达到？Thais 的回答是：我们甚至还没赢得争论这个问题的资格——**现在的问题是门槛还在地上**，先把手头这些分解问题、度量问题的工作做起来，把质量门槛抬高，这才是起点 <button class="pd-ts" data-t="14:12" data-who="Thais" data-en="But yeah, I think all of us would agree that human taste and kind of the peak of human craft is always going to be deeply valuable. And that right now, I think the challenge is we are almost even not earning the right to debate this, how can we have models reach this pinnacle of taste?" aria-label="回原文"></button>。

## 本集带走

- **先度量再修复**：把「内容好不好」这种模糊判断拆成颜色、排版、布局等可结构化的特征，训练单一特征的小分类器，组合起来就能高精度预测 slop——比直接让大模型当裁判更有效。
- **slop 三个特征可当自查清单**：重复性（同质化）、缺乏契合度（不看语境和用户）、低意图（系统不帮用户弄清想要什么）。
- **品牌资产早就存在，只是没用上**：把现成的品牌规范提取成智能体可遵循、人可验证的结构化组件，是性价比很高的质量提升手段。
- **创造力 ≠ 调高温度**：真创意是先懂领域规则，再有意识地打破其中几条，其余保持遵循。
- **推理时和模型层一样值得投入**：理解用户意图、上下文和验证，都发生在推理那一刻，只改模型解决不了 slop。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">我觉得有时候很难定义什么是出色，但从大多数人都会同意的意义上说，定义什么是 slop 相当容易。</span>  
> *I think it is hard to define what is great sometimes, but I think it's pretty easy to define what is slop in the sense that most people would agree.*  
> <span class="qm">—— Thais Castello Branco · [03:22]</span> ^q1

> <span class="qz">我认为那种重复感、那种近乎没有灵魂的感觉，是我们所有人在使用 AI 时此刻都能感受到的。</span>  
> *I think the sense of repetition, of kind of soullessness, is something that all of us feel right now when using AI.*  
> <span class="qm">—— Thais Castello Branco · [03:28]</span> ^q2

> <span class="qz">顺便说一句，我觉得相当神奇的是，AI 已经发展到了这样的程度：地球上任何一个不是设计师、也不是工程师的人，都可以点一个按钮，突然就做出一整套 PowerPoint，或者做出一个网站，或者做出一个 web 应用。</span>  
> *I think it's quite magical, by the way, that AI has gotten to a point that any human on the planet that is not even a designer, that is not an engineer, can click a button and suddenly make an entire PowerPoint or make a website or make a web app.*  
> <span class="qm">—— Thais Castello Branco · [03:34]</span> ^q3

> <span class="qz">它带来的后果是，生成的成本现在基本上趋于零。</span>  
> *It comes with consequences of suddenly now the cost of generation is basically going to zero.*  
> <span class="qm">—— Thais Castello Branco · [03:49]</span> ^q4

> <span class="qz">顺便说一句，这比大多数 LLM-as-a-judge 方法——也就是让一个 LLM 来判断那是优质的人类作品还是 AI 生成的 slop——表现都要好。</span>  
> *This performed better, by the way, than most LLM-as-a-judge methods of asking an LLM to judge if that is great human quality versus AI-generated slop.*  
> <span class="qm">—— Thais Castello Branco · [08:29]</span> ^q5

> <span class="qz">我甚至不想在这里用“品味”这个词，是判断力。</span>  
> *I don't even want to use the word taste here, is judgment.*  
> <span class="qm">—— Thais Castello Branco · [09:06]</span> ^q6

> <span class="qz">我不认为我们可以只让模型变得更好而无视、不解决这个问题，否则 slop 会继续存在。</span>  
> *I don't think that we can ignore and just make models better and not solve this otherwise SOP will keep existing.*  
> <span class="qm">—— Thais Castello Branco · [09:57]</span> ^q7

> <span class="qz">为什么不直接检索一个已经过通盘考虑、具有连贯性的梦幻品牌系统，而不是在那个时刻用生成的方式做出来的东西最终可能不太理想，或者又落入那些 slop 的特征里。</span>  
> *Why not retrieve a dreamy brand system that already has been thought out to be cohesive instead of doing like a generative approach the moment of that might end up not so great or might end up again in those pillars of slop.*  
> <span class="qm">—— Thais Castello Branco · [13:14]</span> ^q8

> <span class="qz">我想说，这个门槛基本上还在地上。</span>  
> *The bar is kind of really, I would say, on the ground.*  
> <span class="qm">—— Thais Castello Branco · [14:25]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「产品方法」挖下去**

- [[2025-09-25-lennys-why-ai-evals-are-the-hottest-new-skill|做 evals 不是写单元测试，是从看数据开始的错误分析]]<span class="pd-rz">同概念:LLM-as-a-judge、智能体 (agent)</span>
- [[2026-02-08-lennys-getting-paid-to-vibe-code|不会写代码的人如何成为全职 vibe coder]]<span class="pd-rz">同概念:智能体 (agent)、判断力 (judgment)</span>
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|AI 时代产品经理的生存指南]]<span class="pd-rz">同概念:判断力 (judgment)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-30-cogrev-is-offense-or-defense-dominant-far-ai-s|AI 安全排行榜：谁扛住了越狱，谁没有]]<span class="pd-rz">同概念:探针 (probes)、智能体 (agent)</span>
- [[2026-07-31-talks-fighting-slop-with-slop-vaibhav-gupta-bo|用 AI 对抗 AI：一种不用读代码的编程语言 BAML]]<span class="pd-rz">同概念:AI slop（AI 垃圾内容） (slop)、智能体 (agent)</span>
- [[2026-08-26-beyondcoding-how-new-staff-engineers-build-judgment-w|AI 时代，工程师的判断力与品味如何修炼]]<span class="pd-rz">同概念:判断力 (judgment)、智能体 (agent)</span>

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
