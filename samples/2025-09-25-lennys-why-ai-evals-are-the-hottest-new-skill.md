---
title: 做 evals 不是写单元测试，是从看数据开始的错误分析
podcast: "Lenny's Podcast"
date: 2025-09-25
source_url: https://www.lennysnewsletter.com/p/why-ai-evals-are-the-hottest-new-skill
duration: "106:28"
type: episode
cover: "#6366f1"
image: "/covers/2025-09-25-lennys-why-ai-evals-are-the-hottest-new-skill.jpg"
description: evals 的本质是数据分析，不是上来就写测试；最忌讳让 AI 替你做错误分析。
host: "[[Lenny]]"
cohosts: ["[[Hamel Husain]]", "[[Shreya Shankar]]"]
concepts: ["[[评估]]", "[[错误分析]]", "[[开放式编码]]", "[[轴向编码]]", "[[LLM 判别器]]", "[[智能体]]", "[[trace]]"]
category: 智能体
tags:
  - 智能体
  - 产品方法
socialImage: "https://talk.solomind.cc/covers/2025-09-25-lennys-why-ai-evals-are-the-hottest-new-skill.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2025-09-25-lennys-why-ai-evals-are-the-hottest-new-skill#post","headline":"做 evals 不是写单元测试，是从看数据开始的错误分析","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2025-09-25-lennys-why-ai-evals-are-the-hottest-new-skill","mainEntityOfPage":"https://talk.solomind.cc/2025-09-25-lennys-why-ai-evals-are-the-hottest-new-skill","description":"evals 的本质是数据分析，不是上来就写测试；最忌讳让 AI 替你做错误分析。","datePublished":"2025-09-25","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2025-09-25-lennys-why-ai-evals-are-the-hottest-new-skill.jpg","isBasedOn":"https://www.lennysnewsletter.com/p/why-ai-evals-are-the-hottest-new-skill","about":[{"@type":"Person","name":"Lenny"},{"@type":"Person","name":"Hamel Husain"},{"@type":"Person","name":"Shreya Shankar"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"错误分析 (error analysis)"},{"@type":"Thing","name":"开放式编码 (open coding)"},{"@type":"Thing","name":"轴向编码 (axial coding)"},{"@type":"Thing","name":"LLM 判别器 (LLM as a judge)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"trace"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"做 evals 不是写单元测试，是从看数据开始的错误分析","item":"https://talk.solomind.cc/2025-09-25-lennys-why-ai-evals-are-the-hottest-new-skill"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>做 evals 不是写单元测试，是从看数据开始的错误分析</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M10 16.8s-6-3.8-6-8.4a3.2 3.2 0 0 1 6-1.5 3.2 3.2 0 0 1 6 1.5c0 4.6-6 8.4-6 8.4z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M10 16.8s-6-3.8-6-8.4a3.2 3.2 0 0 1 6-1.5 3.2 3.2 0 0 1 6 1.5c0 4.6-6 8.4-6 8.4z"/></svg></button></div></div></header></div>

# 做 evals 不是写单元测试，是从看数据开始的错误分析

<div class="pd-byl">2025-09-25</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2025-09-25-lennys-why-ai-evals-are-the-hottest-new-skill.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">目标不是完美地做评估，而是可操作地改进你的产品。</div><div class="a">— Shreya Shankar <button class="pd-ts" data-t="00:18" data-who="Shreya Shankar" data-en="The goal is not to do evals perfectly, it's to actionably improve your product." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Lenny]] · [[Hamel Husain]] · [[Shreya Shankar]]
>
> **概念** [[评估]] · [[错误分析]] · [[开放式编码]] · [[轴向编码]] · [[LLM 判别器]] · [[智能体]] · [[trace]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/why-ai-evals-are-the-hottest-new-skill)

<div class="pd-tldr"><b>一句话</b>evals 的本质是数据分析，不是上来就写测试；最忌讳让 AI 替你做错误分析。</div>

做 [[评估|evals]] 最常见的失败方式，就是直接跳进去写测试。Hamel 和 Shreya 反复强调，evals 的核心不是测试，是对你的 LLM 应用做数据分析 <button class="pd-ts" data-t="06:00" data-who="Hamel Husain" data-en="Evals is a way to systematically measure and improve an AI application, and it really doesn't have to be scary or unapproachable at all. It really is, at its core, data analytics on your LLM application and a systematic way of looking at that data, and where necessary, creating metrics around things so you can measure what's happening, and then so you can iterate and do experiments and improve." aria-label="回原文"></button>。跳过数据看什么就写什么，是大多数人"做 evals 然后觉得没用"的根本原因 <button class="pd-ts" data-t="47:13" data-who="Hamel Husain" data-en="And so the reason I'm kind of spending so much time on this is this is where people get lost. They go straight into evals like, &quot;Let me just write some tests,&quot; and that is where things go off the rails." aria-label="回原文"></button>。

## 第一步：看数据，写开放式笔记（open coding）

从你的应用日志里抽样，逐条看，看到什么问题就写一句短备注。不用追求完整分类，不用想框架，就记"最上游的错误"——你看到的第一个问题记下来就停，移到下一条 <button class="pd-ts" data-t="22:13" data-who="Hamel Husain" data-en="What do you write a note about? And the answer is, just write down the first thing that you see that's wrong, the most upstream error. Don't worry about all the errors, just capture the first thing that you see that's wrong, and stop, and move on." aria-label="回原文"></button>。备注要具体，不能写"很 janky"这种模糊词，否则后面没法归类 <button class="pd-ts" data-t="42:30" data-who="Shreya Shankar" data-en="So this also drives home the point that your open codes have to be detailed, right? You can't just say janky because if the AI is reading janky, it's not going to be able to categorize it." aria-label="回原文"></button>。

这一步不能让 AI 做。Shreya 直接说了：你把一条 [[trace|trace]] 喂给 ChatGPT 问"有没有错"，它会说"做得很好"——因为它不知道你们产品有没有虚拟看房功能，它没有业务上下文 <button class="pd-ts" data-t="24:04" data-who="Shreya Shankar" data-en="Mm, great question. And I loved Hamel's most recent example because what we usually find when we try to ask an LLM to do this error analysis is it just says the trace looks good because it doesn't have the context needed to understand whether something might be bad product smell or not." aria-label="回原文"></button>。[[错误分析|错误分析]]中的自由笔记阶段，LLM 不是合适的位置 <button class="pd-ts" data-t="25:13" data-who="Hamel Husain" data-en="Got it. And this is something you call open coding, this step? Yes, absolutely. Cool." aria-label="回原文"></button>。

做多少条？他们建议至少 100 条作为心理锚点，但真正的停止条件叫"理论饱和"（theoretical saturation）——当你发现新看的 trace 不再产生新的错误类型时就停 <button class="pd-ts" data-t="30:31" data-who="Shreya Shankar" data-en="... that. ... in data analysis and qualitative analysis called theoretical saturation. So what this means is when you do all of these processes of looking at your data, when do you stop?" aria-label="回原文"></button>。有人做 15 条就够了，有人做 60 条，取决于应用复杂度和你的经验 <button class="pd-ts" data-t="31:19" data-who="Shreya Shankar" data-en="I don't know. Depends on the application and depends on how savvy you are with error analysis for sure. And your point about you're going to want to do a bunch." aria-label="回原文"></button>。

谁来写？找一个"仁慈独裁者"——一个你信任其品味的领域专家，通常是产品经理，不要拉委员会 <button class="pd-ts" data-t="25:41" data-who="Hamel Husain" data-en="Amazing. And so benevolent dictator is just a catchy term for the fact that when you're doing this open coding, a lot of teams get bogged down in having a committee do this." aria-label="回原文"></button>。目标是让这个过程足够便宜、可执行，不是追求公平 <button class="pd-ts" data-t="26:32" data-who="Hamel Husain" data-en="And you can do this with a small number of people and often one person, and it's really important to make this tractable. You don't want to make this process so expensive that you can't do it." aria-label="回原文"></button>。

## 第二步：用 LLM 把笔记归纳成故障模式（axial coding）

100 条开放式笔记拿出来了，很多其实是同一类问题但表述不同。这时候可以上 LLM 了：把笔记丢给它，让它归纳出"[[轴向编码|轴向编码]]"（axial codes）——本质就是故障模式的分类标签 <button class="pd-ts" data-t="33:58" data-who="Shreya Shankar" data-en="So maybe it's worth talking about what are axial codes or what's the point here? You have a mess of open codes, and you don't have 100 distinct problems. Actually, many of them are repeats, but because you phrased them differently, and that you shouldn't have tried to create your taxonomy of failures as you're open coding." aria-label="回原文"></button>。比如"行程安排问题""人工交接问题""对话流程问题""做了没兑现的承诺"等 <button class="pd-ts" data-t="41:10" data-who="Hamel Husain" data-en="So you see the ones that I came up with here are tour scheduling, rescheduling issues, human handoff or transfer issue, formatting error with an output, conversational flow." aria-label="回原文"></button>。

LLM 第一轮给的结果通常太泛，比如"能力限制"——不可操作，你得自己改得更具体、更可行动 <button class="pd-ts" data-t="35:21" data-who="Hamel Husain" data-en="Now, do I like all the categories? Not really. I like some of them." aria-label="回原文"></button>。没有标准 prompt，可以迭代，但人必须在回路里 <button class="pd-ts" data-t="36:42" data-who="Shreya Shankar" data-en="Absolutely. You're saying you can iterate, see what works for you? Absolutely." aria-label="回原文"></button>。

分类完之后，用数据透视表数一下每种故障出现了多少次——"基本计数是数据科学中最强大的分析技术" <button class="pd-ts" data-t="32:19" data-who="Hamel Husain" data-en="Now, to turn this into something useful, you can do basic counting. So basic counting is the most powerful analytical technique in data science because it's so simple and it's kind of undervalued in many cases, and so it's very approachable for people." aria-label="回原文"></button>。然后你就知道最该先解决什么了 <button class="pd-ts" data-t="45:10" data-who="Hamel Husain" data-en="Find on these traces that we categorized? We found 17 conversational flow issues. And I really like pivot tables because you can do cool things." aria-label="回原文"></button>。

## 第三步：针对难搞的故障模式，建 LLM 判别器

不是所有故障都需要写 eval。有些一看就知道怎么修（比如 prompt 里忘了说输出格式），直接改 prompt 就行 <button class="pd-ts" data-t="46:07" data-who="Hamel Husain" data-en="Now, you have some way of looking at your problem, and now you can think about whether you need evals for some of these. So there might be some of these things that might be just dumb engineering errors that you don't need to write an eval for because it's very obvious on how to fix them." aria-label="回原文"></button>。真正需要建 eval 的是那些你描述了期望行为但[[智能体|智能体]]还是犯的"顽固问题" <button class="pd-ts" data-t="65:29" data-who="Shreya Shankar" data-en="It's not that many, because a lot of the failure modes, as Hamel said earlier, can be fixed by just fixing your prompt. You just didn't think to put it in your prompts, so now you put it in your... You shouldn't do an eval like this for everything, just the pesky ones that you've described your ideal behavior in your agent prompt, but it's still failing." aria-label="回原文"></button>。

两种自动评估方式：基于代码的（本质上就是单元测试，检查输出是不是 JSON、够不够短等，便宜）和 LLM 作为判别器（处理主观判断，比如"该不该转人工"）<button class="pd-ts" data-t="48:06" data-who="Shreya Shankar" data-en="So there's different kinds of evals. One is code-based, which you should try to do if you can because they're cheaper. LLM as a judge is something, it's like a meta eval." aria-label="回原文"></button>。一个产品通常只需要 4 到 7 个 [[LLM 判别器|LLM 判别器]]，不用多 <button class="pd-ts" data-t="65:19" data-who="Shreya Shankar" data-en="I know, obviously, depends complexity to the product, but what's a number in your experience? For me, between four and seven. That's it." aria-label="回原文"></button>。

写判别器 prompt 的关键规则：**输出必须是二元判断（true/false 或 pass/fail）**，不要用 1-5 分打分 <button class="pd-ts" data-t="52:35" data-who="Hamel Husain" data-en="Like Shreya said, you would want to do one specific failure and you want to make it binary because we want to simplify things. We don't want, &quot;Hey, score this on a rating of one to five." aria-label="回原文"></button>。打分是"不做决定的圆滑方式"，而且没人知道 3.2 和 3.7 到底差什么 <button class="pd-ts" data-t="52:46" data-who="Hamel Husain" data-en="That's just in most cases, that's a weasel way of not making a decision. Like, &quot;No, you need to make a decision. Is this good enough or not?" aria-label="回原文"></button>。

## 第四步：校准判别器，别盲信

写完 prompt 就直接用？最大的坑。

必须拿你已经标注过的数据去验证判别器和人类标注的一致性 <button class="pd-ts" data-t="57:03" data-who="Hamel Husain" data-en="It's really important that you don't do that, so before you release your LLM as a judge, you want to make sure it's aligned to the human. How do you do that? You have those axial codes and you want to measure your judge against the axial code, and say like, &quot;Hey, does it agree with me?" aria-label="回原文"></button>。而且不能只看总一致率——如果错误只占 10%，判别器全部放行就能达到 90% 一致率，纸面好看但毫无用处 <button class="pd-ts" data-t="58:32" data-who="Hamel Husain" data-en="Now, one thing you should know, as a product manager, is a lot of people go straight to this agreement. They say, &quot;Okay, my judge agrees with the human some percentage of the time.&quot;" aria-label="回原文"></button>。

要看混淆矩阵：人类说错但判别器说对的、人类说对但判别器说错的，这两种偏差必须迭代到接近零 <button class="pd-ts" data-t="59:56" data-who="Shreya Shankar" data-en="Then did my judge have an error, true or false?&quot; The intuition here is exactly what Hamel said, where you need to look at each type of error. When the human said false, but the judge said true, or vice versa, so those non-green diagonals here, and if they're too large, then go iterate on your prompt, make it more clear to the LLM judge, so that you can reduce that misalignment." aria-label="回原文"></button>。如果有人跟你说"我的判别器一致率 75%，挺好的"但没有给你看这个矩阵，那就是坏味道 <button class="pd-ts" data-t="60:41" data-who="Shreya Shankar" data-en="We talk about in our course, also how to code correct that misalignment, but in this stage, if you're a product manager and the person who's building the LLM judge eval has not done this, they're saying like, &quot;It agrees 75% of the time, we're good.&quot;" aria-label="回原文"></button>。

## LLM 判别器的双重用途

建好校准过的判别器不只是跑在 CI 里当单元测试。你可以每天从生产环境采样真实 trace，跑判别器，做在线监控——这就变成了一个极其具体的应用质量指标 <button class="pd-ts" data-t="51:36" data-who="Shreya Shankar" data-en="The beautiful thing about LLM judges, you can use them in unit tests or CI, sure, but you could also use it online for monitoring, right? I can sample 1000 traces every day, run my LLM judge, real production traces, and see what the failure rate is there." aria-label="回原文"></button>。Hamel 说，做得好的公司不会公开这些，因为这是他们的护城河 <button class="pd-ts" data-t="68:27" data-who="Hamel Husain" data-en="I think the products that are doing this, they have a very sharp sense of how well their application is performing, and people don't talk about it, because this is their moat." aria-label="回原文"></button>。

Shreya 指出，判别器 prompt 本质上就是一份活的 PRD：它精确描述了"智能体在什么条件下应该怎么做"，而且从你自己的错误数据里提炼出来，包含你事先想不到的边界情况 <button class="pd-ts" data-t="61:12" data-who="Lenny" data-en="I've had some guests on the podcast recently who've been saying, &quot;Evals are the new PRDs,&quot; and if you look at this, this is exactly what this is. Product managers, product teams, here's what the product should be, here's all the requirements, here's the how it should work." aria-label="回原文"></button>。她的研究"Who Validates the Validated?"发现，专家在看了 10 条输出后才会想到之前完全梦不到的失败模式，好坏标准会随审查过程漂移——所以你不能提前写死标准 <button class="pd-ts" data-t="63:35" data-who="Shreya Shankar" data-en="I think one of the most important things to pay attention in this paper are the criteria drift, and what she found. We did this super fun study when we were doing user studies with people who were trying to write LLM judges or just validate their own LLM outputs." aria-label="回原文"></button>。

## 关于"反 eval"争议

有人（包括 Claude Code 团队）说"我们不搞 eval，我们靠 vibe"。Shreya 的回应：第一，他们站在基础模型 eval 的肩膀上；第二，他们大概率在做某种形式的错误分析和内部 dogfooding，只是不叫 eval <button class="pd-ts" data-t="72:09" data-who="Shreya Shankar" data-en="Coding agents is a great example of that, Claude Code. They're standing on the shoulders of Claude base model... Not base, but the fine-tuned Claude models have been evaluated on many coding benchmarks." aria-label="回原文"></button>。编码智能体是特殊案例——开发者自己就是领域专家且全天使用，可以压缩很多流程，但不能把这个经验泛化到所有 AI 产品 <button class="pd-ts" data-t="74:31" data-who="Shreya Shankar" data-en="We'll also say that coding agents are fundamentally very different than other AI products, because the developer is the domain expert, so you can short circuit a lot of things, and also, the developer is using it all day long, so there's a type of dogfooding and type of domain expertise that is... You can collapse the activities, you don't need as much data, you don't need as much feedback or exploration, because you know, so your eval process should look different." aria-label="回原文"></button>。

A-B 测试 vs eval 也不是对立的：A-B 测试本身就隐含了一个评估指标，没有 eval 就没法比 <button class="pd-ts" data-t="76:42" data-who="Shreya Shankar" data-en="A-B tests are, again, another form of evals ,I imagine, right? When you're doing an A-B test, you have two different experimental conditions and then you have a metric that quantifies the success of something, and you're comparing the metric." aria-label="回原文"></button>。但很多人过早做 A-B 测试，因为他们压根没看过数据，假设的"重要指标"和实际出错的地方对不上 <button class="pd-ts" data-t="77:30" data-who="Shreya Shankar" data-en="This is now a great point. I think a lot of people prematurely do A-B tests, because they've never done any error analysis in the first place. They just have hypothetically come up with their product requirements and they believe that, &quot;We should test these things,&quot; but it turns out, when you get into the data, as Hamel showed, that the errors that you're seeing are not what you thought what the errors might be." aria-label="回原文"></button>。

## 本集带走

- **不要跳过看数据直接写测试**：evals 的第一步是抽样看 trace、写开放式笔记，这是整个流程的地基
- **错误分析阶段别让 AI 代劳**：AI 缺业务上下文，会把明显的产品问题判为"没问题"
- **找一个人当"仁慈独裁者"**：选领域专家（通常是 PM）一个人做标注决策，别拉委员会，让过程便宜可执行
- **LLM 判别器必须输出二元判断**：禁止 1-5 分打分，否则指标不可解释
- **必须用混淆矩阵校准判别器**：总一致率会骗人，要看"人说错判别器说对"和"人说对判别器说错"这两类偏差是否接近零
- **判别器不只跑 CI，要上生产监控**：每天采样真实 trace 跑判别器，得到具体的应用质量指标
- **大部分故障不需要建 eval**：改 prompt 就能解决的直接改，只对"描述了期望行为但仍反复出错"的顽固问题建判别器，通常 4-7 个够用
- **首次投入约一周，之后每周 30 分钟**：初始错误分析和判别器构建是一次性成本，后续维护很轻 <button class="pd-ts" data-t="91:05" data-who="Shreya Shankar" data-en="A lot of labeling, feel like we're in a good place to create the spreadsheet that Hamel had and everyone's on-board and convinced, and even a few LLM judge evaluators." aria-label="回原文"></button>

<div class="pd-sec">全部金句 <span>10 条</span></div>

> <span class="qz">目标不是完美地做评估，而是可操作地改进你的产品。</span>  
> *The goal is not to do evals perfectly, it's to actionably improve your product.*  
> <span class="qm">—— Shreya Shankar · [00:18]</span> ^q1

> <span class="qz">答案是，只写下你看到的第一个错误，也就是最上游的错误。别担心所有的错误，只捕捉你看到的第一个错误的东西，然后停下，继续下一个。</span>  
> *And the answer is, just write down the first thing that you see that's wrong, the most upstream error. Don't worry about all the errors, just capture the first thing that you see that's wrong, and stop, and move on.*  
> <span class="qm">—— Hamel Husain · [22:13]</span> ^q2

> <span class="qz">当我们试图请求一个 LLM 做这个错误分析时，我们通常发现它只是说追踪看起来很好，因为它没有理解某样东西是否可能是坏的产品味道所需的上下文。</span>  
> *What we usually find when we try to ask an LLM to do this error analysis is it just says the trace looks good because it doesn't have the context needed to understand whether something might be bad product smell or not.*  
> <span class="qm">—— Shreya Shankar · [24:09]</span> ^q3

> <span class="qz">他们直接进入评估，比如"让我只写一些测试"，这就是事情脱轨的地方。</span>  
> *They go straight into evals like, "Let me just write some tests," and that is where things go off the rails.*  
> <span class="qm">—— Hamel Husain · [47:13]</span> ^q4

> <span class="qz">我们不想要，"嘿，按一到五的评分给它打分。它有多好？"这在大多数情况下只是一种不做决定的圆滑方式。</span>  
> *We don't want, "Hey, score this on a rating of one to five. How good is it?" That's just in most cases, that's a weasel way of not making a decision.*  
> <span class="qm">—— Hamel Husain · [52:35]</span> ^q5

> <span class="qz">现在这听起来很吸引人，但它是一个非常危险的指标，因为很多时候，错误，它们只发生在长尾上，并且不经常发生，所以如果你只有 10% 的时间有错误，那么你可以很容易地通过让评判者一直说它通过来达到 90% 的一致性。</span>  
> *Now that sounds appealing, but it's a very dangerous metric to use, because a lot of times, errors, they only happen on the long tail and they don't happen as frequently, so if you only have the error 10% of the time, then you can easily have 90% agreement by just having a judge say it passes all the time.*  
> <span class="qm">—— Hamel Husain · [58:41]</span> ^q6

> <span class="qz">这是产品需求文档应该是什么样子的最纯粹的意义，就是这个评估判断器，它确切地告诉你它应该是什么，并且它是自动的且不断运行的。</span>  
> *This is the purest sense of what a product requirements document should be, is this eval judge that's telling you exactly what it should be, and it's automatic and running constantly.*  
> <span class="qm">—— Lenny · [61:35]</span> ^q7

> <span class="qz">人们对好坏的看法随着他们审查更多输出而改变，他们只有在看到 10 个输出后才会想到失败模式，而这些输出是他们最初从未梦想到的。</span>  
> *People's opinions of good and bad change as they review more outputs, they think of failure modes only after seeing 10 outputs they would never have dreamed of in the first place.*  
> <span class="qm">—— Shreya Shankar · [64:23]</span> ^q8

> <span class="qz">我认为正在这样做的产品，他们对自己应用程序的性能如何有着非常敏锐的感觉，人们不谈论这个，因为这是他们的护城河。</span>  
> *I think the products that are doing this, they have a very sharp sense of how well their application is performing, and people don't talk about it, because this is their moat.*  
> <span class="qm">—— Shreya Shankar · [68:16]</span> ^q9

> <span class="qz">这是你可以参与的 ROI 最高的活动。</span>  
> *It's the highest ROI activity you can engage in.*  
> <span class="qm">—— Hamel Husain · [89:47]</span> ^q10

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2025-09-21-lennys-from-managing-people-to-managing-ai-juli|Julie Zhuo：管理者的核心技能，就是驾驭AI的技能]]<span class="pd-rz">同概念:evals、智能体 (agent)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:智能体 (agent)</span>
- [[2026-08-08-talks-anthropic-s-cca-exam-as-a-field-guide-fo|别迷信大上下文：拆解 Claude 认证架构师考试的反模式]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:evals、智能体 (agent)</span>
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|iPod之父Tony Fadell：越是容易造的AI时代，越需要讲故事的“奢侈品”产品]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:智能体 (agent)</span>
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|代码量暴涨8倍后，工程管理怎么办？]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:智能体 (agent)</span>

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
