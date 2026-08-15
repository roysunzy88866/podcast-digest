---
title: 当系统出故障时，让 AI 代替作战室里的 50 个人——Traversal 谈如何造 AI SRE
podcast: 精选演讲
date: 2026-07-24
source_url: undefined
duration: "41:04"
type: episode
cover: "#64748b"
description: 三位 AI 学者下场做 AI SRE：没有现成标签、数据量极大，他们用「生产世界模型」和文件系统搞定。
host: "[[Anish]]"
cohosts: ["[[Raj]]", "[[Harrison]]"]
companies: ["[[Traversal]]"]
concepts: ["[[智能体]]", "[[生产世界模型]]", "[[可观测性]]", "[[遥测数据]]", "[[上下文]]", "[[文件系统]]", "[[评估]]", "[[成本]]", "[[测试框架]]", "[[SRE]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-24-talks-inside-the-agent-engine-a-langchain-and#post","headline":"当系统出故障时，让 AI 代替作战室里的 50 个人——Traversal 谈如何造 AI SRE","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-24-talks-inside-the-agent-engine-a-langchain-and","mainEntityOfPage":"https://talk.solomind.cc/2026-07-24-talks-inside-the-agent-engine-a-langchain-and","description":"三位 AI 学者下场做 AI SRE：没有现成标签、数据量极大，他们用「生产世界模型」和文件系统搞定。","datePublished":"2026-07-24","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Anish"},{"@type":"Person","name":"Raj"},{"@type":"Person","name":"Harrison"},{"@type":"Organization","name":"Traversal"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"生产世界模型 (production world model)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"遥测数据 (telemetry data)"},{"@type":"Thing","name":"上下文 (context)"},{"@type":"Thing","name":"文件系统 (file system)"},{"@type":"Thing","name":"评估 (eval)"},{"@type":"Thing","name":"成本 (cost)"},{"@type":"Thing","name":"测试框架 (harness)"},{"@type":"Thing","name":"SRE"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"当系统出故障时，让 AI 代替作战室里的 50 个人——Traversal 谈如何造 AI SRE","item":"https://talk.solomind.cc/2026-07-24-talks-inside-the-agent-engine-a-langchain-and"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当系统出故障时，让 AI 代替作战室里的 50 个人——Traversal 谈如何造 AI SRE</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# 当系统出故障时，让 AI 代替作战室里的 50 个人——Traversal 谈如何造 AI SRE

<div class="pd-byl"><b>Anish</b> · Traversal 联创 · 2026-07-24</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-24-talks-inside-the-agent-engine-a-langchain-and.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">对代码的理解将会变少，因为没有人再编写代码了。</div><div class="a">— Anish <button class="pd-ts" data-t="02:07" data-who="Anish" data-en="So much less understanding of code is going to be present because no one wrote the code anymore." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Anish]] · [[Raj]] · [[Harrison]]
>
> **公司** [[Traversal]]
>
> **概念** [[智能体]] · [[生产世界模型]] · [[可观测性]] · [[遥测数据]] · [[上下文]] · [[文件系统]] · [[评估]] · [[成本]] · [[测试框架]] · [[SRE]]

<div class="pd-tldr"><b>一句话</b>三位 AI 学者下场做 AI SRE：没有现成标签、数据量极大，他们用「生产世界模型」和文件系统搞定。</div>

系统出故障时，把五六十个人拉进作战室一起翻日志，是现在的标准操作——一家叫 [[Traversal|Traversal]] 的公司想把这件事交给[[智能体|智能体]]。

这是 LangChain 联合创始人 [[Harrison|Harrison]] 主持的一集对谈，嘉宾是 Traversal 的两位联创。Traversal 做的是「AI [[SRE|SRE]]」（站点可靠性工程，专门负责系统平稳运行的岗位），也就是用智能体来自动排查生产事故。这一集里他们讲了三件事：为什么这个领域偏偏没有现成标签数据、数据量又大到塞不进[[上下文|上下文]]，他们怎么用「[[生产世界模型|生产世界模型]]」和[[文件系统|文件系统]]绕过去；从手动触发到主动出手的智能体，应该怎么设计交互与[[测试框架|护栏]]；以及一家公司想自己内部搭一套这样的系统，到底会卡在什么地方。

先说他们为什么觉得这个问题值得做。[[Anish|Anish]] 说，他自己原本在学术界做因果机器学习（一种试图从数据里找出因果关系的方向），团队在 MIT 相识，随后把目光转向了智能体能干什么。

给他们提出这个问题的是第四位联创 Ahmed，他来自 Citadel Securities（一家金融公司），那里对系统正常运行时间（系统不出故障的时长）要求极高，一旦出事代价极大。他们顺着这个问题摸进来，发现了两股力量正在撞在一起：代码编写智能体（帮人自动写代码的工具）越来越强，这意味着未来系统里绝大多数代码是机器写的，没有人再真正理解这些代码的内部逻辑；一旦系统出故障，想去问「这段代码当初为什么这么写」根本无从问起。到那时，靠智能体来自动排查事故，就不是锦上添花，而是必然的了 <button class="pd-ts" data-t="02:00" data-who="Anish" data-en="And the more time we spent on it, the more we fell in love with the problem. And then I think we started playing with things like GitHub Copilot, and we just felt that these coding agents are getting better and better." aria-label="回原文"></button>。

可这个方向听起来美好，真做起来为什么难？Anish 拉了一张长长的清单 <button class="pd-ts" data-t="02:43" data-who="Anish" data-en="Yeah, maybe I'll start, but then the real person to ask is Raj. I think the problem turned out to be way, way, way, way harder than we expected. We thought for a few reasons." aria-label="回原文"></button>。

第一，故障排查的 stakes（风险代价）极高，人都在高压状态下，智能体不能给错答案。第二，LLM 没有在[[遥测数据|遥测数据]]（系统运行时产生的指标、日志等监控数据）上受过训练，天生不擅长。

第三，你很难去模仿人类专家——因为人类自己其实很不擅长排查，你没法靠录屏插件记录专家的操作来当训练数据。第四也是最致命的一点：他们服务的大客户，每天能产生约 1 PB 的日志 <button class="pd-ts" data-t="03:37" data-who="Anish" data-en="So there's no label data. Fourth is, if you go work with some of the large companies, we typically work with very large companies, and they're producing about a petabyte of data a day." aria-label="回原文"></button>。

这个量级别说塞进 LLM 的上下文窗口（模型一次能读进的文本长度），哪怕硬塞，「一次调查可能要花掉一个小国的 GDP」<button class="pd-ts" data-t="03:49" data-who="Anish" data-en="And at that scale, if you try to put that in, even if you, first, you can never fit that into the context of an LLM. Even if you could, a single investigation is probably going to cost you the GDP of a small country." aria-label="回原文"></button>。更别提排查必须快，两分钟内得给出第一个有用线索，错一次都不行。[[Raj|Raj]] 接着补充，这催生了一个极难的搜索问题：智能体很擅长在文本里 grep（精准搜索特定词），但现有的[[可观测性|可观测性]]平台（帮人监控系统状态的工具）本身不是为 AI 设计的，加上各家系统命名混乱，想跨系统检索信息极为困难 <button class="pd-ts" data-t="04:38" data-who="Raj" data-en="um yeah i mean maybe just going off this part of like a petabyte of logs per day i think that creates a really hard search problem because if you try to get an agent to search through that amount of data you're typically bottlenecked by the actual raw api so" aria-label="回原文"></button>。

既然数据塞不进上下文，他们的解法是搭一个离线和在线结合的架构。Anish 解释说，这需要在不同粒度上搭建数据结构，形成一个连续体 <button class="pd-ts" data-t="07:21" data-who="Anish" data-en="I'll give a high-level framework and then you give the actual intelligence analysis. So I think a way of thinking about it is how much... offline computation you want to do versus online computation you want to do." aria-label="回原文"></button>：把大量数据离线（提前算好）处理，换取在给定时间内极大的搜索面；再把细粒度的实时数据留在线上（当下查），牺牲搜索量但保住新鲜度。Raj 补充，决定一段数据该放线上还是离线的关键指标是基数（数据的可区分程度）<button class="pd-ts" data-t="08:45" data-who="Raj" data-en="But maybe you want to talk about kind of what we thought would be online became offline or what became offline became online and how that's changed. Yeah, I think, I mean, a lot of it ends up happening in terms of, honestly, like the query patterns, right?" aria-label="回原文"></button>——比如会话 ID 这种一过一大把、瞬息万变的高基数数据，和服务名这种相对稳定的低基数数据，查询模式截然不同。

> 【背景】上下文窗口指模型一次能读入的文本长度。集里提到他们目前用到了约 100 万 token 的窗口（现代 LLM 处理文本的基本单位）<button class="pd-ts" data-t="11:59" data-who="Anish" data-en="There is finite context in this LLM, right? I think right now we're at 1 million context limit. What you typically want to do is you want to get some summary of is this thing even useful, just like a human to the agent." aria-label="回原文"></button>。即便如此也远不够装下所有日志，所以他们必须用智能体主动去搜索、调取细节。

顺着上下文限制这个难题，Harrison 抛出了一个很具体的问题：你们怎么管理那么庞大的上下文？答案出乎意料——文件系统（电脑里组织和存放文件的系统）。

Raj 解释说，哪怕 LLM 有了百万级的上下文，全塞进去既慢又贵。更好的做法是把摘要交给智能体，具体的原始数据落在文件里，让模型在需要时再用精准搜索去「向下钻取」<button class="pd-ts" data-t="11:50" data-who="Raj" data-en="How do you guys use file systems and why is that a core part of the harness? I think at least right now, file systems are really useful because, I mean, in some sense..." aria-label="回原文"></button>。

因为当下的模型训练方式让它们非常擅长在文件里做精准搜索，这是最自然高效的方式。Harrison 听完顺口提到，他们开源的 Deep Agents 智能体框架也内置了类似功能。

有了底层的数据处理，上面跑的智能体长什么样？Anish 说他们最终收敛成了「一个核心智能体，调用多个子智能体」的结构 <button class="pd-ts" data-t="11:04" data-who="Anish" data-en="And I've realized I didn't answer your first question, which is how many agents. We actually just have, and it'll relate to this question, we built now one core agent, right?" aria-label="回原文"></button>。

这套架构在交互上的演变很有意思：一开始是人工手动触发；后来变成基于规则触发（比如发警报就跑）；现在进化到了「主动型智能体」，它们拥有自己的主观能动性，觉得该出现时就会在 Slack（办公聊天软件）里开口 <button class="pd-ts" data-t="13:17" data-who="Anish" data-en="the natural evolution that as an LLM decides when to run something. And so it's called a chatbot style thing to background agents to now what we call proactive agents, which have agency for themselves." aria-label="回原文"></button>。但 Raj 提醒，对于刚入门的开发者，千万别一上来就搞复杂的多智能体协作，从一个简单的单智能体加技能（特定的工具组合）开始，能解决大部分问题 <button class="pd-ts" data-t="31:15" data-who="Raj" data-en="I think one mistake that people sometimes make is splitting things up too quickly and saying like, oh yeah, let me try to create like a really complex multi-agent system and do stuff." aria-label="回原文"></button>。只有在出现智能体在某个数据源上空转卡死的 thrashing behavior（抖动行为）时，才需要把它单独隔到一个子智能体里，宁可牺牲一点延迟也要换取稳定性 <button class="pd-ts" data-t="32:43" data-who="Raj" data-en="you know uses which yeah that's a great question and honestly this is um questions we often just battle with which one to actually use i think generally we just try to pick the simplest one first so what we'll try is let's just see if we can even put in the main agent if that doesn't work let's see" aria-label="回原文"></button>。

顺着智能体怎么干活，Harrison 问了个关键问题：智能体一跑就是很久吗？Anish 的回答揭示了这个领域的真实工作节奏 <button class="pd-ts" data-t="14:51" data-who="Anish" data-en="Are we talking five minutes, an hour? So I think it depends on, I said, because you have to think about offline versus online, and it's a continuum. And so in some ways, you have agents running 24-7 to kind of update what we call a production model, which is the representation of the system." aria-label="回原文"></button>。

在他们的场景里，有一批智能体是 24/7 全天候在跑的，它们负责不断更新那个「生产世界模型」（整个生产系统的数字化全景表示）。一旦真有事故发生，负责实时排查的智能体接手，核心指标是「首次洞察时间」必须在两分钟内，而「末次洞察时间」可能长达一小时，因为随着排查深入，智能体会不断学习新信息。这套逻辑催生了对智能体架构的全新要求：你需要一个非常聪明的 harness（为智能体提供运行环境和工具的外壳），由它来决定什么时候启动核心智能体。

在这个架构里，最核心也最特别的概念就是「生产世界模型」。Harrison 打比方问：这就像你们生产环境的 Deep Wiki（一种由 AI 生成的代码库说明书）吗？

Raj 说只对了一半 <button class="pd-ts" data-t="06:30" data-who="Raj" data-en="Is that kind of what the production world models are, like the deep wiki for your production logs or something like that? Yeah, I think it's a mix. I think some of it comes from that, for example, the non-telemetry data of that system knowledge." aria-label="回原文"></button>。它确实融合了大量的非遥测数据，但另一半重头戏是如何从根本上让海量的遥测数据变得可搜索。

Anish 强调，有意思的是，关于系统里各种组件的关联，LLM 自己找出的路径，可能比人类告诉它的还要准。如果让人不断手动往里输入系统的关联关系，反而可能被虚假的 tribal knowledge（团队里口口相传的隐性知识）污染 <button class="pd-ts" data-t="18:10" data-who="Anish" data-en="that otherwise may actually be a little corrupted if a human was kind of constantly inputting it. So keeping that separate has actually been kind of useful because one, you don't want it to be in some ways tainted by like false tribal knowledge, say." aria-label="回原文"></button>。

所以他们把「关于系统的客观认知」和「关于人的个人偏好」分开了，后者属于用户级别的记忆，专门用来记住特定用户的习惯。至于要不要把智能体自己记下的笔记展示给用户看、让他们来「审计」记忆，则是他们目前正在摸索的产品设计细节 <button class="pd-ts" data-t="17:32" data-who="Raj" data-en="If the agent makes some note, will you expose that to the user and they can see it in the UI and audit their agent's memory almost? Those are things we've been exploring with actually, just trying to see what is the right level of detail, honestly, to show users how much in the loop do they want to be in terms of this whole process." aria-label="回原文"></button>。

前面提到数据量太大，那[[评估|评估]]这套复杂系统的表现（业内称为 evals）就成了大难题。Raj 直叹气，说这远超他的工资等级 <button class="pd-ts" data-t="19:00" data-who="Raj" data-en="Way beyond my pay grade. I think, I mean, evaluation of these agents are just very difficult. I think, I mean, some of our trajectories can be 5 million tokens and the entire Harry Potter series is 2 million tokens." aria-label="回原文"></button>。

他打了个比方：一套完整的排查轨迹可能长达 500 万 token，而整个《哈利·波特》系列才 200 万 token。要在这么长的轨迹里找出到底是逻辑错了、工具坏了还是超时了，极其困难。

但 Anish 补充了一个很有洞察力的观点：做评估，要专挑最难的硬骨头啃 <button class="pd-ts" data-t="20:33" data-who="Anish" data-en="that's it one thing i think one interesting thing to notice like what should you eval one is like how do you eval the second question is what you should eval i think one insight that we have learned is that you should eval the hardest thing because if you start doing well there it tends to generalize right so we're seeing that for example there's a reason why people are trying to eval in math and science because" aria-label="回原文"></button>。因为如果你能在最难的事故排查这种强推理任务上做好评估，这种能力往往会泛化（迁移到其他任务上）到那些不好做评估的日常问题上；反过来，如果你只挑容易的评估，既没有好数据，也迁移不到更难的事情上。

这就是为什么他们非要死磕 SRE（最难的部分）不可。这种对评估的看重，也直接决定了他们对大模型的态度。

Anish 坦言，他们一开始是某些大厂的死忠粉，后来换了阵营，但现在只忠于评估结果——每次有新模型出来就跑一轮评估，看成绩说话 <button class="pd-ts" data-t="21:29" data-who="Anish" data-en="Yeah, I'll let Raj talk about it more in detail, but I'd say it's changing all the time. I'd say we are a company with... very strongly held opinions, strong opinions Lucy held all the time." aria-label="回原文"></button>。不过一个新变化是：以前只看性能不看价格，现在随着使用量暴涨，智能体跑一次动辄 500 万 token，[[成本|成本]]变成了不得不考虑的现实约束 <button class="pd-ts" data-t="22:11" data-who="Anish" data-en="And so building the right evals is very important. And I think also now, something we didn't think about earlier, before we said it doesn't matter what the cost of it is, as long as it provides the highest accuracy, that's all we care about." aria-label="回原文"></button>。

既然成本和难度都这么高，如果有公司想自己在内部搭一套 AI SRE，会卡在哪？Anish 用了一个自动驾驶的类比来拆解这个过程 <button class="pd-ts" data-t="25:54" data-who="Anish" data-en="And I can, maybe I'll talk about why. So I think one framework we think about is like the shell-driving cars, right? You have like L0 to L5." aria-label="回原文"></button>。

L0 是纯手动排查；L1 是有固定操作手册，靠规则执行；L2 是 LLM 开始帮你打下手，比如写复杂的数据库查询语句，但人还在驾驶座上。L3 是 DIY（自己动手）的极限：为单一团队（比如结账组）的十几个微服务搭一个专属智能体，只要够聪明是能跑通的。

但真正的分水岭是 L4：当你要排查的事故需要横跨上千个微服务、PB 级的数据时，这就不再是一个 AI 算法问题，而是一个彻底的数据工程问题 <button class="pd-ts" data-t="27:42" data-who="Anish" data-en="Where it gets really hard is where you start going to L4, which is where you start needing to troubleshoot incidents or any sort of query that comes that requires you to think across your entire production environment." aria-label="回原文"></button>。你必须花大把的时间，去重新设计一套能承载这种规模的数据处理引擎。

这也是为什么大多数尝试自建的大公司最终都失败了。而在 Traversal 内部，编码智能体不仅帮他们交付了多得多的代码，还逼着他们重构代码库，让架构变得更加对 AI 友好，顺带也让产品经理能直接上手写代码了 <button class="pd-ts" data-t="28:52" data-who="Raj" data-en="People and, and, and structure. Yeah, I mean, I think, well, for one, people can just ship a lot more code. I think just putting the processes in place of, in some ways, what we found is..." aria-label="回原文"></button>。对新手，Raj 的核心建议是：先别搞复杂的多智能体群体（多个智能体协同），从一个简单的智能体循环加技能起步，能走得很远 <button class="pd-ts" data-t="31:15" data-who="Raj" data-en="I think one mistake that people sometimes make is splitting things up too quickly and saying like, oh yeah, let me try to create like a really complex multi-agent system and do stuff." aria-label="回原文"></button>。

## 本集带走

最后收个尾，这一集值得带走的是三个判断。第一，代码越来越多是人看不懂、机器写的，出故障时只能靠机器自己查，AI SRE 是避不开的未来；但这事的难点不在大模型够不够聪明，而在你怎么把每天 1 PB、跨了上千个系统的遥测数据重新组织好，让智能体能高效检索。

第二，想管好超长上下文，别死磕大窗口，用文件系统存放细节，让智能体自己去精准搜索和钻取，这是目前最务实的办法。第三，如果你要自己搭智能体，千万别一上来就搞多智能体协作，先从一个简单的单智能体加技能跑通，遇到某个工具反复让模型卡死时，再把它拆成子智能体。评估也一样，专挑最难的事故排查做评估，只要在那里跑通了，能力自然会泛化到简单的日常问题上。

<div class="pd-sec">全部金句 <span>8 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">对代码的理解将会变少，因为没有人再编写代码了。</span>  
> *So much less understanding of code is going to be present because no one wrote the code anymore.*  
> <span class="qm">—— Anish · [02:07]</span> ^q1

> <span class="qz">即使你可以，一次调查可能会让你花费一个小国的 GDP。</span>  
> *Even if you could, a single investigation is probably going to cost you the GDP of a small country.*  
> <span class="qm">—— Anish · [03:49]</span> ^q2

> <span class="qz">我希望我没有冒犯任何人，但人类真的很不擅长故障排查。</span>  
> *I hope I'm not offending anyone, but humans are really bad at troubleshooting.*  
> <span class="qm">—— Anish · [03:19]</span> ^q3

> <span class="qz">我认为，我的意思是，我们的一些轨迹可能是 500 万个 token，而整个《哈利·波特》系列是 200 万个 token。</span>  
> *I think, I mean, some of our trajectories can be 5 million tokens and the entire Harry Potter series is 2 million tokens.*  
> <span class="qm">—— Raj · [19:06]</span> ^q4

> <span class="qz">我认为我们学到的一个见解是你应该评估最难的事情，因为如果你开始在那里做得好它往往会泛化，对吧</span>  
> *I think one insight that we have learned is that you should eval the hardest thing because if you start doing well there it tends to generalize right*  
> <span class="qm">—— Anish · [20:18]</span> ^q5

> <span class="qz">所以当它开始像是一 PB 级的数据，你有一千个微服务，那就是它变成的时候，与其说是一个 AI 问题，它变成了一个数据问题。</span>  
> *So where it starts getting like a petabyte of data, you have a thousand microservices, that's when it becomes, as much as it's an AI problem, it becomes a data problem.*  
> <span class="qm">—— Anish · [27:42]</span> ^q6

> <span class="qz">但我想说从 L3 到 L4 的差距是 DIY 停止有效的地方。</span>  
> *But I'd say the gap from L3 to L4 is where DIY stops working.*  
> <span class="qm">—— Anish · [28:20]</span> ^q7

> <span class="qz">我认为人们有时犯的一个错误是太快地把事情拆分，并说像，噢是的，让我尝试创建一个真正复杂的多智能体系统并做事情。</span>  
> *I think one mistake that people sometimes make is splitting things up too quickly and saying like, oh yeah, let me try to create like a really complex multi-agent system and do stuff.*  
> <span class="qm">—— Harrison · [31:06]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-07-talks-how-harmonic-4x-d-user-retention-by-buil|产品里的智能体为什么总“瞎”：Harmonic 的上下文可见性法则]]<span class="pd-rz">同概念:上下文 (context)、护栏 (harness)、文件系统 (file system)、智能体 (agent)、Deep Agents</span>
- [[2026-07-28-pg-how-to-build-your-first-eval|eval 会取代 PRD 吗?AI 产品经理的新工作法门]]<span class="pd-rz">同概念:护栏 (harness)、智能体 (agent)、评估 (eval)</span>
- [[2026-08-11-talks-evolution-of-agentic-surfaces-gagan-bhat|Anthropic 构建生产级智能体的教训:harness 须为模型能力演进而生]]<span class="pd-rz">同概念:可观测性 (observability)、护栏 (harness)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)</span>
- [[2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog|AI失控了别慌,先盯紧漏洞数量爆炸]]<span class="pd-rz">同公司:Datadog · 同概念:智能体 (agent)</span>
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|Vercel COO 谈用 AI 重构销售：10 个 SDR 缩减到 1 个]]<span class="pd-rz">同概念:智能体 (agent)</span>

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
    // 只搬搜索;阅读模式不并进顶栏(设计稿详情页顶栏只有分享+收藏,用户 2026-08-01 拍板摘掉)。
    ['.search'].forEach(function(sel){ grab(sel,acts); });
    // 深浅色进右栏末尾 —— 但右栏在窄屏可能不显示,槽跟着一起没了。
    // 只在槽真的看得见时才搬进去,看不见就退回顶栏(🔒 #2:任何屏宽都得有入口)。
    var side=document.querySelector('.right.sidebar'), slot=null;
    if(side){
      slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      // 同上:槽是空的(:empty → display:none),要判**右栏**看不看得见
      if(!(side.offsetWidth || side.offsetHeight || side.getClientRects().length)) slot=null;
    }
    grab('.darkmode', slot || acts);
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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); }
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
