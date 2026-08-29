---
title: "桥水内部版 AI 分析师 PAT:把数小时研究压到几分钟"
podcast: 精选演讲
date: 2026-08-07
source_url: undefined
duration: "25:36"
type: episode
cover: "#64748b"
description: "桥水公布 PAT 系统:靠编译器思路与确定性智能体,把数天分析压到几分钟。"
host: "[[Brendan McManus]]"
companies: ["[[Bridgewater Associates]]", "[[PAT]]", "[[Claude Code]]", "[[LangGraph]]"]
concepts: ["[[智能体]]", "[[子智能体]]", "[[确定性]]", "[[编译器理论]]", "[[静态分析]]", "[[数据帧]]", "[[RAG]]", "[[基准测试]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-24-talks-how-bridgewater-built-an-ai-analyst-that#post","headline":"桥水内部版 AI 分析师 PAT:把数小时研究压到几分钟","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-24-talks-how-bridgewater-built-an-ai-analyst-that","mainEntityOfPage":"https://talk.solomind.cc/2026-07-24-talks-how-bridgewater-built-an-ai-analyst-that","description":"桥水公布 PAT 系统:靠编译器思路与确定性智能体,把数天分析压到几分钟。","datePublished":"2026-08-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Brendan McManus"},{"@type":"Organization","name":"Bridgewater Associates"},{"@type":"Organization","name":"PAT"},{"@type":"Organization","name":"Claude Code"},{"@type":"Organization","name":"LangGraph"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"子智能体 (subagent)"},{"@type":"Thing","name":"确定性 (deterministic)"},{"@type":"Thing","name":"编译器理论 (compiler theory)"},{"@type":"Thing","name":"静态分析 (static analysis)"},{"@type":"Thing","name":"数据帧 (data frame)"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"基准测试 (benchmark)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"桥水内部版 AI 分析师 PAT:把数小时研究压到几分钟","item":"https://talk.solomind.cc/2026-07-24-talks-how-bridgewater-built-an-ai-analyst-that"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>桥水内部版 AI 分析师 PAT:把数小时研究压到几分钟</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 桥水内部版 AI 分析师 PAT:把数小时研究压到几分钟

<div class="pd-byl"><b>Brendan McManus</b> · 桥水应用AI团队负责人 · 2026-08-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-24-talks-how-bridgewater-built-an-ai-analyst-that.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">因此,将这种推理嵌入到我们的搜索智能体中,实际上让我们能够将准确率从大约 50% 提高到了 90。</div><div class="a">— SPEAKER_01 <button class="pd-ts" data-t="11:53" data-who="SPEAKER_01" data-en="So embedding this sort of reasoning into our search agent is actually something that got us up from roughly like 50% accuracy all the way to 90." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Brendan McManus]]
>
> **公司** [[Bridgewater Associates]] · [[PAT]] · [[Claude Code]] · [[LangGraph]]
>
> **概念** [[智能体]] · [[子智能体]] · [[确定性]] · [[编译器理论]] · [[静态分析]] · [[数据帧]] · [[RAG]] · [[基准测试]]

一家管理着千亿资金的50年老牌对冲基金,不靠终端命令行,而是把[[智能体|智能体]]编码当成「编译器」来做——把一份详细到极点的自然语言研究计划,像编译器处理代码那样,[[确定性|确定性]]地「编译」成 Python 脚本,还要保证两次跑出来的结果分毫不差。这就是桥水向数百位分析师推出的内部 AI 助手 [[PAT|PAT]]。

在这场技术分享中,桥水应用 AI 团队的三位成员——团队负责人 Brendan、投资负责人 Michael 和技术负责人 Santi——完整拆解了 PAT。我们会听到三块内容:第一,这家沉淀了 50 年投资规则的对冲基金为什么要建一个 AI 分析师;第二,PAT 具体怎么完成从查数据、出计划到并行生成代码并自我纠错的全流程;第三,他们最得意的架构洞察——为什么要把 AI 写代码看作编译器问题,而不是智能体问题。

先交代一下这工具的土壤。桥水的方法论核心是:每一笔交易,必须写下确切的因果逻辑规则 <button class="pd-ts" data-t="01:30" data-who="" data-en="Every time you wanted to make a trade, write down exactly the rules for why you think that trade makes sense. Write down the exact causal logic, because once you do this, another investor can take a look at what you've written, help you to figure out where you went wrong, and help you to improve upon this process." aria-label="回原文"></button>。

如果逻辑错了,别的投资者可以看着你写下的规则帮你纠正。几十年来,这些规则被划掉、重写、最终沉淀成既可机读又可人读的专家系统 <button class="pd-ts" data-t="01:52" data-who="" data-en="Every time you learn something new, you scratch out a rule, you write down a new one, and this creates a pretty incredible learning process that has been the foundation of everything that we've done at Bridgewater for the past 50 years." aria-label="回原文"></button>。

这意味着,当 AI 时代到来时,他们根本不需要回头去为智能体整理语料——50 年的数据和上下文已经躺在那儿了 <button class="pd-ts" data-t="02:16" data-who="" data-en="And all of this data is really what sets us up well for the AI era. We didn't have to go back and write down everything for agents. It was already there for us to draw upon." aria-label="回原文"></button>。具体到工具 PAT(Pocket Analyst,口袋分析师),定位非常克制:它不负责交易,只做深度的探索性研究 <button class="pd-ts" data-t="04:36" data-who="" data-en="And just to set expectations, PAT is not about how we trade. It's really about performing deep exploratory research, enabling our investors to go after questions that they never would have had the bandwidth to go after before." aria-label="回原文"></button>。

了解了它长在什么土壤上,接下来看它到底怎么干活。一份高质量的分析,一切从查数据开始。

除了全网搜索,PAT 还能在内部那个每天涌入数千篇新文档、包含数百万份研报和纪要的非结构化数据库里翻找 <button class="pd-ts" data-t="10:44" data-who="" data-en="Now, web search itself is table stakes when it comes to these modern chat applications, but the real differentiator here is the breadth of unstructured content that we subscribe to that Pat is able to search over." aria-label="回原文"></button>。查结构化时间序列数据(比如几十年的股价)时,团队发现一个关键细节:只靠 [[RAG|RAG]](检索增强生成,一种让模型先查资料再回答的技术)和重排序,准确率只有 50%;但如果像人类研究员那样,顺便检查数据的频率、货币,以及数值是否合理 <button class="pd-ts" data-t="11:46" data-who="" data-en="And what I mean by that is when a human researcher is looking for data, they don't just anchor to what the name of the time series is. They'll do things like look at the frequency, the currency of the series, and then most importantly, whether the values in the series align with their priors." aria-label="回原文"></button>,准确率能直接拉到 90%。

数据备齐,接下来才是最关键的一步。PAT 的核心信条是:计划即分析 <button class="pd-ts" data-t="12:15" data-who="" data-en="During Pat's development, we came to the view that the plan really is the analysis. If we can create a high-quality, detailed plan, we felt confident that we could consistently take this plan, intelligently execute it, and produce our desired outputs." aria-label="回原文"></button>。

它不会急匆匆去写代码,而是先跟投资者反复对齐——逼着平时不爱做规划的投资者,把模糊的研究意图,掰碎成一份详尽的计划。这份计划会精确列出需要产生哪些[[数据帧|数据帧]](data frame,数据表)、每个表的结构,以及这些表之间怎么连接 <button class="pd-ts" data-t="12:49" data-who="" data-en="We taught Pat what makes a good research question versus a bad one, so this back and forth helps humans, who tend to underinvest in planning, flesh out what we consider to be a high-quality research plan." aria-label="回原文"></button>。定计划虽然耗时,但这是团队主动付出的成本,为的是换取执行阶段的绝对确定性。

> 【背景】「数据帧」(data frame)是 Python 数据分析中常用的二维表格结构,类似 Excel 表;「子智能体」(subagent)指在主程序调度下专门负责单一任务的小型 AI。

把规划讲透了,难点才刚刚开始:怎么让 AI 照着这份计划写出不出错的代码?这正是技术负责人 Santi 要解决的问题。他的核心主张反直觉且大胆:别把 AI 写代码当成一个充满随机性的智能体问题,要把它当成确定性的编译器问题 <button class="pd-ts" data-t="25:06" data-who="" data-en="And this last thing is kind of like a thought exercise, and hopefully it's exciting that someone might take away, is thinking of agentic coding as a compiler problem, not as an agentic problem." aria-label="回原文"></button>。

Santi 指出,代码智能体非常善变、不可预测,经常犯错,倒霉起来还会发疯删数据 <button class="pd-ts" data-t="17:09" data-who="" data-en="Coding agents are really fickle, unpredictable, they often make mistakes, and then when you're really unlucky, they'll go crazy and try and nuke your data and all the rest of it." aria-label="回原文"></button>。在对冲基金动辄交易几十亿美元的背景下,绝不能指望 vibe coding(凭感觉编程)来托底 <button class="pd-ts" data-t="17:25" data-who="" data-en="At a hedge fund, we're trying to trade billions of dollars, and so we can't have just vibe code be the underpinning of how these analysis go. My background is in compiler theory and programming language design, and compilers have a very similar footprint of requirements, which is they're fully deterministic, fully correct, and reliable." aria-label="回原文"></button>。基于[[编译器理论|编译器理论]](要求绝对确定性)的灵感,他们彻底重构了架构。

首先是物理隔离。聊天智能体和写代码的智能体被完全拆开 <button class="pd-ts" data-t="18:42" data-who="" data-en="So why would you separate your two agents? Early on, we decided that our investors are not programmers by trade, and they care about investment. And so we decided to keep the chat purely about investment content." aria-label="回原文"></button>。

理由很简单:投资者不是程序员,聊天界面必须纯粹谈投资。结果是,「写代码」在 PAT 里成了纯粹的底层实现细节,用户根本看不到代码 <button class="pd-ts" data-t="18:57" data-who="" data-en="And the result is that we have a product where coding is a pure implementation detail. From the chat, you can't tell that there's code under the hood. And other happy accidents are that you get unpolluted context, so each agent becomes specialized in its job and naturally improves." aria-label="回原文"></button>。这不仅让聊天体验更纯粹,也让两个智能体的上下文互不污染,各自专精 <button class="pd-ts" data-t="19:00" data-who="" data-en="From the chat, you can't tell that there's code under the hood. And other happy accidents are that you get unpolluted context, so each agent becomes specialized in its job and naturally improves." aria-label="回原文"></button>。

> 【背景】「确定性」(deterministic)指同样的输入永远得出完全相同的输出,不允许有任何随机性或偏差。

拆分了智能体,再看那套「编译器」怎么运作。PAT 拿到那份极其详尽的计划后,不是一步步串行去写代码,而是用[[子智能体|子智能体]]对全量任务进行并行的 LLM(大语言模型)生成 <button class="pd-ts" data-t="21:19" data-who="" data-en="And then we do parallel LLM generation. And because our plan is so detailed, a visualization task at the end of the plan already knows everything it needs to consume code generation that hasn't yet been completed for a loading data set." aria-label="回原文"></button>。

因为计划足够细,排在最后的可视化任务,在中间步骤的代码还没写出来时,就已经知道该调用什么数据了。这使得一个 20 个任务的大计划,跟一个 3 个任务的小计划,花的时间几乎一样 <button class="pd-ts" data-t="21:46" data-who="" data-en="But then we have this hyperscaling, so a 20-task plan takes the same amount of time as a three-task plan. Okay, so now we have code, and we're going to execute it." aria-label="回原文"></button>。比传统串行模式快了约 4 倍。

更关键的纠错环节同样借鉴了编译器思路。代码写出来不是直接运行,而是先做[[静态分析|静态分析]],构建 DAG(有向无环图,一种表示任务依赖关系的结构),然后并行投入多个验证智能体 <button class="pd-ts" data-t="22:15" data-who="" data-en="The first thing we do on the code is we do static analysis and then figure out the DAG. And we're going to apply our validation agents in parallel. So here, there's two tasks that are going to be validated at the same time." aria-label="回原文"></button>。

Santi 反复强调:这里没有任何「智能体编排」,全靠硬邦邦的常规 Python 代码控制流程——这意味着智能体「不可能忘记验证」,它们是被强制要求验证的 <button class="pd-ts" data-t="22:42" data-who="" data-en="This is regular Python code, and so the handles are really quick, and the agents cannot forget to validate. They are forced to validate. The result is that when we run our test suite, anyone planned for our test suite, 95% of the time, the code that comes out is exactly the same for two different agents." aria-label="回原文"></button>。这套硬核机制换来了惊人的稳定性:面对测试套件,95% 的情况下,两个不同的智能体写出的代码,运行结果完全一样 <button class="pd-ts" data-t="22:53" data-who="" data-en="The result is that when we run our test suite, anyone planned for our test suite, 95% of the time, the code that comes out is exactly the same for two different agents." aria-label="回原文"></button>。

架构做到了确定性,最后一步的代码执行也迎来了额外红利。通常代码智能体是自己通过终端去调用自己的代码,不仅延迟高,还容易半路迷路 <button class="pd-ts" data-t="23:22" data-who="" data-en="There's a couple of trade-offs here. That's high latency with the tool calls, but I'm sure you've all experienced, like, they'll sometimes get lost along the way." aria-label="回原文"></button>。

Santi 的团队换了个做法:他们搞了一套经典的静态分析管道,把缓存注释自动注入到 Python 代码里 <button class="pd-ts" data-t="23:36" data-who="" data-en="We do a classical static analysis pipeline where we inject caching annotations into the Python code to avoid re-execution and run it through a custom framework." aria-label="回原文"></button>。好处在哪?投资者微调了某个图表的变量后,PAT 几乎瞬间就能出结果,因为它绝对不会去重复执行那些未改动的中间数据加载步骤 <button class="pd-ts" data-t="24:10" data-who="" data-en="So it's basically the same amount of time, though it is faster editing the code. But Pocket Analyst basically has instantaneous code execution for the second round." aria-label="回原文"></button>。

## 本集带走
最后收个尾,这一集最值得带走的是他们对 AI 智能体工程的三个判断。第一,你得敢于把大而全的「超级智能体」拆掉。酷炫的万能智能体只能拿来做演示,真要进日常工作流,就得把它拆成极度狭窄的垂直任务,往死里做[[基准测试|基准测试]],然后再把它们组合起来——这才是可靠的工程化路径。第二,跟用户对齐时,「计划」本身就是最核心的分析。与其让模型直接给答案,不如逼着投资者把模糊想法拆成详尽到极致的计划,把成本前置到规划阶段。第三,也是最反直觉的一点:要想让 AI 写代码不出错,得把它当成编译器问题,而不是智能体问题。抛弃充满随机性的自由探索,用静态分析、并行生成、强制验证这些传统计算机科学里的老办法,反而能在对冲基金这种对确定性要求极高的地方,把 AI 真正落地成不可替代的生产力。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">因此,将这种推理嵌入到我们的搜索智能体中,实际上让我们能够将准确率从大约 50% 提高到了 90。</span>  
> *So embedding this sort of reasoning into our search agent is actually something that got us up from roughly like 50% accuracy all the way to 90.*  
> <span class="qm">—— SPEAKER_01 · [11:53]</span> ^q1

> <span class="qz">在 Pat 的开发过程中,我们形成了这样的观点:计划即分析。</span>  
> *During Pat's development, we came to the view that the plan really is the analysis.*  
> <span class="qm">—— SPEAKER_01 · [12:10]</span> ^q2

> <span class="qz">代码智能体非常善变、不可预测,它们经常犯错,然后当你真的很倒霉时,它们会发疯并试图销毁你的数据以及其余的一切。</span>  
> *Coding agents are really fickle, unpredictable, they often make mistakes, and then when you're really unlucky, they'll go crazy and try and nuke your data and all the rest of it.*  
> <span class="qm">—— SPEAKER_02 · [17:00]</span> ^q3

> <span class="qz">在对冲基金,我们要试图交易数十亿美元,所以我们不能仅仅让 vibe coding 成为这些分析的基石。</span>  
> *At a hedge fund, we're trying to trade billions of dollars, and so we can't have just vibe code be the underpinning of how these analysis go.*  
> <span class="qm">—— SPEAKER_02 · [17:16]</span> ^q4

> <span class="qz">结果是我们拥有一个产品,其中编码是一个纯粹的实现细节。</span>  
> *And the result is that we have a product where coding is a pure implementation detail.*  
> <span class="qm">—— SPEAKER_02 · [18:51]</span> ^q5

> <span class="qz">另一个幸运的意外是你获得了未受污染的上下文,所以每个智能体都专精于其工作并自然改进。</span>  
> *And other happy accidents are that you get unpolluted context, so each agent becomes specialized in its job and naturally improves.*  
> <span class="qm">—— SPEAKER_02 · [19:00]</span> ^q6

> <span class="qz">你的用户很可能比你更擅长编写上下文。</span>  
> *Your user is better at writing context than you are, most likely.*  
> <span class="qm">—— SPEAKER_02 · [19:36]</span> ^q7

> <span class="qz">把智能体编码看作是一个编译器问题,而不是一个智能体问题。</span>  
> *thinking of agentic coding as a compiler problem, not as an agentic problem.*  
> <span class="qm">—— SPEAKER_02 · [25:01]</span> ^q8

> <span class="qz">所以我们并不真正相信通用的强大智能体。</span>  
> *So we don't really believe in generic powerful agents.*  
> <span class="qm">—— SPEAKER_02 · [24:33]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-09-talks-multiplayer-agentic-engineering-arjun-si|让非工程师也能下指令：Superconductor 的多人智能体协作法]]<span class="pd-rz">同公司:Claude Code · 同概念:基准测试 (benchmark)、智能体 (agent)</span>
- [[2026-02-19-lennys-head-of-claude-code-what-happens|Claude Code 负责人：写代码已被解决，下一步是什么]]<span class="pd-rz">同公司:Claude Code · 同概念:智能体 (agent)</span>
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|把 AI 当员工来管理:Claire Vo 的九个智能体生活实战]]<span class="pd-rz">同公司:Claude Code · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同公司:Claude Code · 同概念:智能体 (agent)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Claude Code · 同概念:智能体 (agent)</span>
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同公司:Claude Code · 同概念:智能体 (agent)</span>

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
