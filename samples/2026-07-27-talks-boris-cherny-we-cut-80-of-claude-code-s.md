---
title: "Claude Code 造物主 Boris:删掉 80% 系统提示词，让模型跑两周不停"
podcast: 精选演讲
date: 2026-09-20
source_url: undefined
duration: "35:43"
type: episode
cover: "#64748b"
description: Claude Code 创造者 Boris 讲解新模型发布后如何「按删除键」重建 harness、什么是产品悬置，以及如何让数千智能体干几十个工程师的活。
host: "[[Boris Cherny]]"
companies: ["[[Claude Code]]", "[[Anthropic]]", "[[Bun]]"]
concepts: ["[[Opus 5]]", "[[harness]]", "[[系统提示词]]", "[[消融实验]]", "[[评估]]", "[[产品悬置]]", "[[hobbling(束缚)]]", "[[智能体]]", "[[动态工作流]]", "[[沙箱]]", "[[测试时计算]]", "[[验证]]", "[[提示词注入]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-27-talks-boris-cherny-we-cut-80-of-claude-code-s#post","headline":"Claude Code 造物主 Boris:删掉 80% 系统提示词，让模型跑两周不停","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-27-talks-boris-cherny-we-cut-80-of-claude-code-s","mainEntityOfPage":"https://talk.solomind.cc/2026-07-27-talks-boris-cherny-we-cut-80-of-claude-code-s","description":"Claude Code 创造者 Boris 讲解新模型发布后如何「按删除键」重建 harness、什么是产品悬置，以及如何让数千智能体干几十个工程师的活。","datePublished":"2026-09-20","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Boris Cherny"},{"@type":"Organization","name":"Claude Code"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"Bun"},{"@type":"Thing","name":"Opus 5"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"系统提示词 (system prompt)"},{"@type":"Thing","name":"消融实验 (ablation)"},{"@type":"Thing","name":"评估 (eval)"},{"@type":"Thing","name":"产品悬置 (product overhang)"},{"@type":"Thing","name":"hobbling(束缚) (hobbling)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"动态工作流 (dynamic workflow)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"测试时计算 (test time compute)"},{"@type":"Thing","name":"验证 (verification)"},{"@type":"Thing","name":"提示词注入 (prompt injection)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"Claude Code 造物主 Boris:删掉 80% 系统提示词，让模型跑两周不停","item":"https://talk.solomind.cc/2026-07-27-talks-boris-cherny-we-cut-80-of-claude-code-s"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Claude Code 造物主 Boris:删掉 80% 系统提示词，让模型跑两周不停</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Claude Code 造物主 Boris:删掉 80% 系统提示词，让模型跑两周不停

<div class="pd-byl"><b>Boris Cherny</b> · Claude Code 创造者 · 2026-09-20</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-27-talks-boris-cherny-we-cut-80-of-claude-code-s.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">它可以一次运行几天、几周、几个月,就是不会停下来。</div><div class="a">— Boris Cherny <button class="pd-ts" data-t="01:39" data-who="Boris Cherny" data-en="It can go for days, weeks, months at a time. It just won't stop." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Boris Cherny]]
>
> **公司** [[Claude Code]] · [[Anthropic]] · [[Bun]]
>
> **概念** [[Opus 5]] · [[harness]] · [[系统提示词]] · [[消融实验]] · [[评估]] · [[产品悬置]] · [[hobbling(束缚)]] · [[智能体]] · [[动态工作流]] · [[沙箱]] · [[测试时计算]] · [[验证]] · [[提示词注入]]

把 10 万行的 JavaScript 运行时从一种语言整个重写成另一种语言,最顶尖的工程师要干一年以上——Claude 只用了 11 天,靠的是一个提示词。说这话的人是 Boris,[[Claude Code|Claude Code]] 的创造者。这一集他聊的是:模型换代越来越快,基于模型构建产品的整套方法论正在被推翻重写——核心动作只有一个字,删。

## 每次新模型发布,先按删除键

Claude Code 作为一个产品和 [[harness|harness]](包裹模型、让它能干活的那层外壳)一直在变:每次新模型发布,Boris 团队都会删掉一大堆[[系统提示词|系统提示词]]、改换工具集合。这次 [[Opus 5|Opus 5]] 发布,他们删掉了超过 80% 的系统提示词——原因是系统提示词里的很多内容,本来是在纠正模型「本应知道但不知道」的行为,现在 Opus 5 直接就会做了。<button class="pd-ts" data-t="03:38" data-who="Boris" data-en="Tell us more about that. I think something that a lot of people might not realize is Claude Code as a product and as a harness is just always changing. We're always adding stuff." aria-label="回原文"></button>

团队的具体做法是「[[消融实验|消融实验]]」:把整个系统提示词删掉,然后一行一行加回来,评估每一行的实际影响。工具也一样——他们经常把工具下架、删 harness 里的代码。今天 Claude Code harness 里的代码,几乎全是关于安全性、权限和静态分析的。<button class="pd-ts" data-t="05:53" data-who="Boris" data-en="That's right, that's right. So to be fair, we don't delete the entire code base, but we do delete a lot. So every time there's a new model, we try, in research, we call this ablation." aria-label="回原文"></button>

他的建议不止给做[[智能体|智能体]]产品的人:**普通用户每六个月也该删掉自己的 Claude MD、skills、hooks**,看看模型会怎么做——它可能会让你惊讶,因为新模型可能真的不再需要你给旧模型写的那些指令。<button class="pd-ts" data-t="06:55" data-who="Boris" data-en="Be comfortable and brave to press delete. 100%. Yeah." aria-label="回原文"></button>

## 重建的方法:先跑,别猜

删完之后怎么重建?Boris 的答案是:不要猜模型需要什么指令。先把产品跑起来,观察它在哪里失败、哪里做得好,**只有当它反复在同样的事情上跌倒,才把那条指令加回去**——而且别太早加,因为模型每次使用都会读这条指令,你要确保它真的需要。<button class="pd-ts" data-t="07:37" data-who="Boris" data-en="How do they go about rebuilding the system prompt? How do you set up your environment? So you do it kind of piece by piece." aria-label="回原文"></button>

在这个世界里,稳定的是什么?答案有点意外:eval([[评估|评估集]])会保留,但也要不断追加;而且现在模型提升太快,eval 经常被「用饱和」——模型把分数打满了,只好扔掉再造新的。

一个 eval 大概存活一到三代模型。Boris 强调,关键永远是保持实证:你必须用产品、用模型、看它在哪儿挣扎,然后据此构建 eval。<button class="pd-ts" data-t="09:30" data-who="Boris" data-en="If you're building in this world right now, what then becomes stable? Are evals something that you keep from the previous models and keep using them in each new model release?" aria-label="回原文"></button>

> 【背景】"harness" 是业界对包裹模型的工程外壳的统称,包含系统提示词、工具定义、权限控制等;这里 Boris 把 Claude Code 本身就视为 Claude 的 harness。

## 产品悬置:下一个 Claude Code 的诞生公式

Boris 给了一个他最想传播的概念:**product overhang([[产品悬置|产品悬置]])**——今天的模型已经能做到很多事,只是还没有产品让它表达出来;反过来,产品碍事、限制模型,就叫 [[hobbling(束缚)|hobbling(束缚)]]。两面是同一件事。<button class="pd-ts" data-t="10:47" data-who="Boris" data-en="And tell us more about what that means. Yeah, so hobbling is this idea in a research that the model is doing something and you're just getting in the way. There's this kind of like way of thinking about it that I really like." aria-label="回原文"></button>

Claude Code 本身就是这么诞生的。它立项时,Sonnet 3.5 已是当时最强的编码模型,能一次写整个函数、整个文件;但当时的编码产品全在做单行/多行自动补全、或只能读不能写的聊天。

模型的能力被产品压着。Claude Code 的做法是:去掉所有脚手架,给模型最简单的外壳和完整的终端访问权限,让它一次写整个文件。这就是「解绑」。<button class="pd-ts" data-t="12:07" data-who="Boris" data-en="So it's kind of like two sides of the same thing. One example of this was the original plot code. When I first started working on it, this was, you know, like a year and a half, two years ago, something like that." aria-label="回原文"></button>

他的判断是:**今天现代模型身上堆积的产品悬置,大量还没被初创公司捕捉**。谁能解开模型的束缚,谁就能造出下一个 Claude Code。<button class="pd-ts" data-t="13:34" data-who="Boris" data-en="The model was capable of doing something and everything was just kind of getting in the way. I think that nowadays with modern models, there is so much product overhang that I'm not seeing startups capture." aria-label="回原文"></button>

## 怎么找悬置:给模型「稍微太难」的任务

具体两招。第一,给模型比你认为它能做到的稍微难一点的任务。

最常见的错误是给模型过度具体的指令——「先做一、再做二、再做三」。对现代模型应该反过来:描述任务、描述护栏、描述退出标准,然后让模型自己开干,过一会儿再回来。这在六个月前行不通,今天行得通。<button class="pd-ts" data-t="14:47" data-who="Boris" data-en="Fixing this product overhang. So there's a couple of things that I will think about. One is you should give the model slightly harder tasks than what you think you can do." aria-label="回原文"></button>

第二,实验,给自己自由去玩模型。[[Anthropic|Anthropic]] 内部最近病毒式传播的发现:给 Opus 5 OpenCV(一个计算机视觉库)让它画图,它能画出肖像、动物、风景——而他们从没训练过模型画画,纯粹是「问对了方式它就会」。Boris 假设:今天的模型身上还有几十、几百个这样的机会,没人意识到。<button class="pd-ts" data-t="18:18" data-who="Boris" data-en="So this is kind of one example. I would give a second example of product overhang. And so this is like a practical use case where like there's a problem you're solving." aria-label="回原文"></button>

## 验证,是大多数人没做对的最重要的事

现在最值钱的技能,已经不是提示词工程(他说一年前热门职位还是提示词工程师,后来变成上下文工程师,这些浪潮来了又走),而是:怎么给 Claude 一个看起来太难的硬任务,以及**怎么让 Claude 在过程中[[验证|验证]]自己的工作**。<button class="pd-ts" data-t="19:57" data-who="Boris" data-en="Tell us about where this is going. Yeah. I remember like a year ago, one of the most popular job openings was prompt engineer." aria-label="回原文"></button>

他自己的实验:用 Claude Tag(Slack 里运行的 Claude)把 Claude 桌面应用——一个 Electron 应用——用 Swift 重写成原生版本。他的提示词核心就几句话:接上 Mac 虚拟机、给它空的 Swift 代码库、运行 Electron 版截图、**逐像素和 Swift 版对比、不许停直到做完**。这个任务启动时到现在还在跑,已经超过两周。<button class="pd-ts" data-t="20:37" data-who="Boris" data-en="And the verification, I think, is probably the single most important thing that people do not get right, largely. One example of this is people were, you know, we have this desktop app for Claude." aria-label="回原文"></button>

他说你甚至不需要花哨的东西——不需要 slash go、slash loop 这类脚手架。你只需要:把任务交给模型,给它一种验证自己工作产出的方式,它就会一直做下去。这个例子里 Claude 还自己决定在内部开了个 Slack 频道,每隔几分钟播报自己的进展截图。<button class="pd-ts" data-t="22:26" data-who="Boris" data-en="All right. This is about elicitation. So this is really one of those examples where the model can do it today." aria-label="回原文"></button>

被问到「怎么成为前 1% 用户」,他的回答是:别听 LinkedIn 网红、别刷 Twitter,没有一招鲜的怪招。就是实证:给太难的任务、给验证工具、看它卡壳,然后用更好的提示词、一个 skill,或者缺上下文就给 MCP(让模型能拉取外部上下文的接口)。

老工程师最常见的失败模式恰恰是**过度指定**——让模型完全按你本来会做的方式干活。把模型当同事对待,而不是当工具配置。<button class="pd-ts" data-t="23:05" data-who="Boris" data-en="I mean, everyone here could do it. And I guess, what is separating the people here that can become the top 1% Claude Code users? How can people learn to use Claude Code like Boris?" aria-label="回原文"></button>

## 数千个智能体:动态工作流与自我维护

Boris 透露,这个两周任务派生的智能体可能数以千计、甚至万计。规模化派生智能体的最简单方式是**[[动态工作流|动态工作流]]**:这是 Claude Code 相当新的功能,你只需要说「use a workflow」,Claude 就会触发。

原理是用 [[Bun|Bun]] 运行时作[[沙箱|沙箱]],在里面启动虚拟机,让 Claude 启动并编排大量智能体——第一批做初稿,第二批验证或总结,第三批再扇出。他因为有函数式编程背景,把它设计成「一套面向智能体的代数」:有序运行、并行运行,可以组合。他称之为一种**新形式的[[测试时计算|测试时算力]]**——以前模型智能靠网络规模、数据量、训练 flops,后来加了生成 token 数,现在动态工作流是编排测试时算力的新维度。<button class="pd-ts" data-t="25:07" data-who="Boris" data-en="No? I think this is another of the tips. The best Claude users are able to spawn tasks that are really providing you a lot of leverage, like thousands of agents." aria-label="回原文"></button>

第二种方式是 loops 和 routines(循环与例行任务):loop 是本地定时任务,routine 是云端版本——合上笔记本也在跑。区别在于:动态工作流是把一个任务拆成多块;loops/routines 是一个重复性任务反复执行,不共享上下文但可能共享记忆。

Anthropic 内部已经在用这个让 **Claude 维护它自己**:一个 Slack 频道里,每天约 20 到 30 个例行任务跑在 CLI、iOS、Android、桌面应用的所有代码库上。例子:
- **清理死代码**:就一句话的提示词,每天用静态+动态分析查找死代码、每天提交删除的 pull request——连用哪种分析方法都是模型自己想明白的;
- **发布已推到 100% 的实验**:从代码库删掉实验开关、直接上线;
- **补测试、删无用测试**(旧模型或人加上去的);
- **「抽象警察」**:每天横跨所有代码库,找出几乎重复的抽象(同一功能在代码库不同地方被重写了好几遍),然后统一它们。<button class="pd-ts" data-t="27:41" data-who="Boris" data-en="So this whole very long way to say this is one way to launch thousands of agents in a way that is productive and efficient. A second way to do it is loops and routines." aria-label="回原文"></button>

Boris 说这每天是数百、有时数千个智能体在跑,**做着几十甚至上百名工程师的工作**——工程师得以去做真正想做的事:发新产品、和用户交流。他们正走在完全自动化维护自己应用的路上。<button class="pd-ts" data-t="29:40" data-who="Boris" data-en="It finds these nearly duplicated abstractions and it unifies them. And so now we have every day, maybe 20 or 30 of these routines, it's running across all of our code bases." aria-label="回原文"></button>

## 边界与心态

「编码已被解决」要打个限定:**是被 Boris 所做的那类编码解决了**。超深的系统级代码库、分布式系统,Claude 依然吃力;像素级的 UI 验证也不完美——Opus 5 在视觉和计算机使用上是巨大飞跃,但还没到头。<button class="pd-ts" data-t="30:39" data-who="Boris" data-en="What are the qualities now that everyone can ship code? I would give like one caveat. So coding is solved for the kind of coding that I do." aria-label="回原文"></button>

至于什么是现在最成功的心态:保持实证,忘掉你从过去模型学到的一切,甚至忘掉课堂上的计算机科学理论——看模型、试任务、看它吃力、据此调整。这不是理论科学,是实证科学。真正擅长的人,是擅长放下先入之见、对「以前不管用的想法」保持开放愿意再试的人。<button class="pd-ts" data-t="31:32" data-who="Boris" data-en="And that's kind of cool. When I think about the people that are the best at using Quad, I think there's a certain mindset that you can bring that's really effective." aria-label="回原文"></button>

最后给学生的建议来自他自己的经历:他初中在 TI-83 计算器上用 Basic 学编程——动机是在数学考试上作弊,后来微积分太难,不得不学汇编写更好的求解器。编程对他从来都是实用的。

所以他的建议是:别只学计算机科学本身,要学怎么应用——做产品、培养设计感和商业嗅觉、学数据科学、学跟用户交流。这些硬技能,仍然值得亲手去练。<button class="pd-ts" data-t="32:39" data-who="Boris" data-en="Now my last question is, given everything that we talked about, if there's someone here that's studying CS, and you learned to program before this era of AI in genetic coding, what should students still learn the hard way, like the old way?" aria-label="回原文"></button>

## 本集带走

- **每六个月按一次删除键**:新模型发布,删掉系统提示词、工具、你自己项目里的 Claude MD/skills/hooks,用消融实验(删光后逐行加回、测每行影响)找出真正需要的。
- **重建指令别猜,先跑**:观察模型反复在哪里跌倒,才把那条指令加回去;指令每多一条,每次使用都要付出代价。
- **找产品悬置**:问「今天的模型已经能做、但还没有产品让它做/被产品碍着的事是什么?」给模型比你认为能做到的稍微难一点的任务,不断把最新模型扔给以前失败过的问题。
- **验证大于提示**:让模型长期自治的关键是给它验证自己产出的方式(测试套件、逐像素对比、可检查的退出标准)——这是大多数人没做对的最重要一件事。
- **规模化用动态工作流**:一句「use a workflow」就能让 Claude 编排成百上千个智能体分阶段干活;重复性任务用 loops/routines 定时跑,可以做到让 Claude 每天自动清理死代码、统一重复抽象、自己维护自己的代码库。
- **少过度指定**:别让模型按你的步骤一二三四来——描述任务、护栏、退出标准,然后让它开干;过度指定是资深工程师最常见的失败模式。

<div class="pd-sec pd-sec-q">全部金句 <span>14 条</span></div>

> <span class="qz">它可以一次运行几天、几周、几个月,就是不会停下来。</span>  
> *It can go for days, weeks, months at a time. It just won't stop.*  
> <span class="qm">—— Boris Cherny · [01:39]</span> ^q1

> <span class="qz">这个模型似乎不再能被提示词注入了。</span>  
> *the model does not seem to be prompt injectable anymore.*  
> <span class="qm">—— Boris Cherny · [02:03]</span> ^q2

> <span class="qz">有了这三层,我们已经完全无法演示出提示词注入了。</span>  
> *And with these three layers, we just cannot demonstrate prompt injection anymore.*  
> <span class="qm">—— Boris Cherny · [03:16]</span> ^q3

> <span class="qz">所以是的,我们删掉了 80% 的系统提示词。</span>  
> *So yeah, we deleted 80% of the system prompt.*  
> <span class="qm">—— Boris Cherny · [04:30]</span> ^q4

> <span class="qz">有趣的是,没有这些提示词时,模型反而会稍微聪明一点。</span>  
> *And what's interesting is that the model is actually a little bit more intelligent without these prompts.*  
> <span class="qm">—— Boris Cherny · [05:05]</span> ^q5

> <span class="qz">对于那些不是在构建智能体产品、但在使用 Claude Code 的人:每六个月,删掉你的 Claude MD。</span>  
> *And for people that aren't building agentic products, but you're using Claude Code, every six months, delete your Claude MD.*  
> <span class="qm">—— Boris Cherny · [06:56]</span> ^q6

> <span class="qz">只有当你看到它反复在同样的事情上跌倒时,那才是你把它加回去的时候。</span>  
> *And only when you see it repeatedly stumble on the same thing, that's when you add it back.*  
> <span class="qm">—— Boris Cherny · [08:14]</span> ^q7

> <span class="qz">这个概念是:模型用今天的模型——不是未来的模型,而是今天的模型——就能做各种各样的事,只是我们尚未意识到。</span>  
> *And the idea is the model is able to do all sorts of things with today's models, not a future model, but today's model that we have not yet realized.*  
> <span class="qm">—— Boris Cherny · [11:04]</span> ^q8

> <span class="qz">我认为如今用现代模型,有非常多的产品悬置是我没有看到初创公司去捕捉的。</span>  
> *I think that nowadays with modern models, there is so much product overhang that I'm not seeing startups capture.*  
> <span class="qm">—— Boris Cherny · [13:34]</span> ^q9

> <span class="qz">你应该描述任务、描述护栏、描述退出标准,然后就让模型自己开干,过一会儿再回来。</span>  
> *You want to describe the task, you want to describe the guardrails, you want to describe the exit criteria, and then just go with the model cook and come back in a little bit.*  
> <span class="qm">—— Boris Cherny · [15:19]</span> ^q10

> <span class="qz">它运行了 11 天,重写了整个代码库。</span>  
> *And it ran for 11 days. And it rewrote the entire code base.*  
> <span class="qm">—— Boris Cherny · [17:40]</span> ^q11

> <span class="qz">而这个验证,我认为,可能是人们普遍没有做对的最重要的一件事。</span>  
> *And the verification, I think, is probably the single most important thing that people do not get right, largely.*  
> <span class="qm">—— Boris Cherny · [20:29]</span> ^q12

> <span class="qz">但实际上,你只需要把任务交给模型,给它一种验证自己工作产出的方式,这样它就不会卡住,它就会一直做下去。</span>  
> *But really, all you need is give the model the task, give it a way to verify the output of its work so it doesn't get stuck, and it'll just go.*  
> <span class="qm">—— Boris Cherny · [22:40]</span> ^q13

> <span class="qz">忘掉你在课堂上学到的关于计算机科学理论的一切。</span>  
> *Forget everything that you've learned about computer science theory in class.*  
> <span class="qm">—— Boris Cherny · [31:49]</span> ^q14

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-07-28-yc-boris-cherny-building-claude-code-e3mkr7|别再微管理 Claude:Claude Code 造物主的智能体实战心法]]<span class="pd-rz">同概念:Opus 5、产品悬置 (product overhang)、提示词注入 (prompt injection)、智能体 (agent)、沙箱 (sandbox)、测试时算力 (test time compute)、消融实验 (ablation)、系统提示词 (system prompt)、验证 (verification)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Anthropic、Bun、Claude Code · 同概念:提示词注入 (prompt injection)、智能体 (agent)、沙箱 (sandbox)、系统提示词 (system prompt)、评估集 (eval)</span>
- [[2026-08-28-talks-ai-native-organisations-run-on-skills-ho|AI 原生组织如何运行在 Skills 之上]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:harness、提示词注入 (prompt injection)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:harness、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-11-talks-evolution-of-agentic-surfaces-gagan-bhat|Anthropic 构建生产级智能体的教训:harness 须为模型能力演进而生]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:harness、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-02-19-lennys-head-of-claude-code-what-happens|Claude Code 负责人：写代码已被解决，下一步是什么]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
