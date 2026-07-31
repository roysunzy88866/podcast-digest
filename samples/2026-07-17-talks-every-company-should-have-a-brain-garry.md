---
title: "用 Markdown 组建一支军队:Y Combinator 掌门人的 AI 原生公司蓝图"
podcast: 精选演讲
date: 2026-07-17
source_url: undefined
duration: "20:49"
type: episode
cover: "#64748b"
description: "把 AI 当员工而不是自动补全,用技能文件和公司大脑重组你的组织。"
guests: ["[[Garry Tan]]"]
concepts: ["[[智能体]]", "[[技能文件]]", "[[上下文工程]]", "[[公司大脑]]", "[[RAG]]", "[[Latent Space]]", "[[确定性空间]]", "[[工作记忆]]", "[[Gbrain]]", "[[技能化]]", "[[AI 原生公司]]", "[[markdown]]", "[[上下文窗口]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>用 Markdown 组建一支军队:Y Combinator 掌门人的 AI 原生公司蓝图</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# 用 Markdown 组建一支军队:Y Combinator 掌门人的 AI 原生公司蓝图

<div class="pd-byl"><b>Garry Tan</b> · YC 掌门人</div>

<div class="pd-mt">2026-07-17 · 精选演讲 · 20:49</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-17-talks-every-company-should-have-a-brain-garry.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们正在尝试建立这样的公司，一个人做过去需要 1000 人才能做的事情。</div><div class="a">Garry Tan · 00:49</div></div>

> [!info] 关联
> **人物** [[Garry Tan]]
>
> **概念** [[智能体]] · [[技能文件]] · [[上下文工程]] · [[公司大脑]] · [[RAG]] · [[Latent Space]] · [[确定性空间]] · [[工作记忆]] · [[Gbrain]] · [[技能化]] · [[AI 原生公司]] · [[markdown]] · [[上下文窗口]]

<div class="pd-tldr"><b>一句话</b>把 AI 当员工而不是自动补全,用技能文件和公司大脑重组你的组织。</div>

同一个模型、同样的[[上下文窗口|上下文窗口]],为什么有人只能做到 2 倍产出,有人却能干到 100 倍?答案不在模型本身,而在于你如何连接工作 <button class="pd-ts" data-t="03:00" data-who="Garry" data-en="That number is large, no matter how you torture it. And here's the part that matters, the part that I'd tattoo on the inside of everyone's eyelids if I could. It's not the model." aria-label="回原文"></button>。说这话的人是 [[Garry Tan|Garry Tan]](YC 掌门人),他算了一笔账:2013 年他当工程师时,每天大概只能写 15 行可用代码,而今年他全职运营 YC、甚至下午五点还要接孩子,产出却是当年的 400 倍 <button class="pd-ts" data-t="02:21" data-who="Garry" data-en="That was me at full effort at that time. This year I run YC full time, same person, same hours, actually way less hours, weirdly, but I have a 5 p.m. kid pick up now, and I did the math on my output, and it's about 400x." aria-label="回原文"></button>。

这一集他在「现在该构建什么」的舞台分享中,给出了一份完整蓝图:为什么你应该把 AI 当作一支由 Markdown 文件组成的劳动力,而不是高级代码补全;怎样划分清晰的任务边界,让模型不把该算的账算错;以及每家公司未来都必不可少的「[[公司大脑|公司大脑]]」究竟是什么、怎么造。最后他抛出了一个巨大的机会:地球上的每一家公司都将需要一个记忆层。

### 连接工作:你其实在经营一家由 Markdown 组成的公司

顺着「为什么 2 倍和 100 倍的人用的是同一个模型」这个核心发问,Garry 直接抛出了他这场演讲最想让听众偷走的洞察:我们用[[智能体|智能体]](agent,能自主执行任务的 AI 程序)搭建的一切,其实完全映射着一个人类组织 <button class="pd-ts" data-t="04:16" data-who="Garry" data-en="And this is what I most want you to steal. Everything we've learned building with agents maps to an organization. Sorry, there's no slides." aria-label="回原文"></button>。他认为,一个[[技能文件|技能文件]](一种用 Markdown 编写的明确指令集)就是一名员工,它拥有一种能力、一份工作,且写得足够清楚以至于可以被执行 <button class="pd-ts" data-t="04:31" data-who="Garry" data-en="I have no slides, I'm so sorry. A skill file. is an employee, it has one capability, one job, written down clearly enough that someone can execute it." aria-label="回原文"></button>;一个解析器表(当你遇到上下文过大时,用来规定何时加载哪个文件的规则表)就是一张组织架构图,任务一进来它就决定谁去处理 <button class="pd-ts" data-t="04:42" data-who="Garry" data-en="is an employee, it has one capability, one job, written down clearly enough that someone can execute it. A resolver table, the thing that many of you, when you run into cloud code and it says your context is too big in cloud.md, you run off and create a resolver table." aria-label="回原文"></button>;归档规则是内部流程,而触发评估(用来验证诸如该加载的文件有没有真被加载的测试)则是绩效评估 <button class="pd-ts" data-t="05:24" data-who="Garry" data-en="And trigger evals. going in and actually having a test that says when I need to alter a test file, does test.md actually get loaded? Those are performance reviews." aria-label="回原文"></button>。所以,当你坐在电脑前打开 Cloud Code 或 Codex 时,你其实不是在写软件,而是在雇佣、培训和管理一支由 Markdown 组成的劳动力队伍 <button class="pd-ts" data-t="05:58" data-who="Garry" data-en="We've been building organizations this whole time, but we didn't have a management layer, but now that's what we have. When you sit down with Cloud Code or Codex, you're not writing software, you're hiring, training, and managing a workforce made of Markdown." aria-label="回原文"></button>。

### 原生新物理学:惊人的人均产出

这些并不是理论推演,而是已经在发生的事实。Garry 指出,在 YC 25 年冬季批次中,有四分之一的公司代码库有 95% 是 AI 生成的,而且那个批次成了 YC 历史上增长最快、最赚钱的一批 <button class="pd-ts" data-t="03:25" data-who="Garry" data-en="And it's not just me, at YC we see this all the time. In the winter 25 batch, a quarter of the companies had code bases that were 95% AI generated, and that was a year ago." aria-label="回原文"></button>。他列举了几个活生生的例子:应用构建器 Emergence 在八个月内从公开发布做到了九位数的 ARR(年经常性收入),而达到 1500 万美元时只有 15 个人;一家叫 Retail 的公司只有 40 个人,却做到了 6000 万美元 <button class="pd-ts" data-t="06:14" data-who="Garry" data-en="And there are tons of companies at YC that are doing this. Emergence, an AI app builder out of summer 24, they went from public launch to nine figures of ARR in eight months." aria-label="回原文"></button>。

这种人均产出不仅打破了软件业的纪录,放在石油或铁路等任何传统行业里也闻所未闻 <button class="pd-ts" data-t="06:34" data-who="Garry" data-en="That kind of revenue per head did not exist before. Not in software, not in oil, not in railroads, never. These are not freaks of nature, they're just the first companies built natively on the new physics." aria-label="回原文"></button>。Garry 强调,这些公司并非自然界的怪胎,它们只是第一批原生建立在新物理学上的公司。这意味着,它们不是靠雇佣成百上千的人来做销售、运营和财务,而是把所有这些都编码成「技能」,交给智能体执行,只招工程师来维护这些技能 <button class="pd-ts" data-t="06:47" data-who="Garry" data-en="And so how do companies like that actually run? Not by hiring hundreds of people for sales, support, ops, and finance. The AI native companies that I see inside YC encode all of that as skills, written procedures that their agents execute and they hire engineers whose job it is to maintain those skills, to do the work the skills can't do yet." aria-label="回原文"></button>。

### 划清计算边界:潜在空间与确定性空间

工具变了,人该怎么用?Garry 给出了第一个也是最关键的工程忠告:你必须非常小心计算实际发生的地方 <button class="pd-ts" data-t="08:43" data-who="Garry" data-en="And so if you remember only one thing about this, I mean, this is one of the things I had to discover along the way. You actually have to be really, really careful about where the computation is actually happening." aria-label="回原文"></button>。他指出,问题往往出在「一件事发生在等式的这一边,而它本应在另一边」。

他把计算分为两类空间。第一类是「潜在空间(latent space,即大语言模型内部的概率空间)」,也就是大模型本身,你用它来处理品味、判断力,以及理解人类说一些模糊的话时真正想要什么 <button class="pd-ts" data-t="09:04" data-who="Garry" data-en="It's happening almost always in two different places, and all of the bugs, all of the AI engineering that we run into that's a problem, it's usually because something is happening in one side of the equation that should be in the other." aria-label="回原文"></button>。第二类是「[[确定性空间|确定性空间]]」,也就是传统工程师熟悉的领域,比如让智能体去写 TypeScript <button class="pd-ts" data-t="09:22" data-who="Garry" data-en="The non-deterministic calls the computation that lives in the model, and you steer it with the markdown file. And then deterministic space is what engineers know, like your code agents go off and write TypeScript, or maybe they're writing Erlang if you're using Elixir." aria-label="回原文"></button>。

Garry 举了他们办活动遇到的真实难题:要把 800 个人完美地聚在一起安排座位,让每个人左右两边都是最该认识的人。这种对多维数组的海量计算,绝对不能放在模型的「上下文窗口」里去做,而是要放在确定性空间。模型只负责像人类一样去判断和匹配 <button class="pd-ts" data-t="10:02" data-who="Garry" data-en="We have to do that in deterministic space combined with latent space. This computation, this actual storage of where everyone is inside this multidimensional array of 800 seats," aria-label="回原文"></button>。结果呢?原本可能需要一个月的体力活,现在大概花几百美元的 token(模型处理信息的计费单位)和 10 分钟就能搞定 <button class="pd-ts" data-t="10:35" data-who="Garry" data-en="Only now it can all happen in your computer. And instead of taking a month, you might be able to do it couple hundred dollars worth of tokens and probably 10 minutes." aria-label="回原文"></button>。

### 工作记忆与公司大脑:决定智能体是天才还是金鱼

明确了任务边界,接下来的核心问题是:我们如何管理智能体所知道的信息?这就引出了 Garry 最喜欢的一个类比。认知心理学里有个著名理论,人类的[[工作记忆|工作记忆]]一次只能在大脑里存住大约七样东西(7 加减 2),这就是为什么电话号码通常是七位数 <button class="pd-ts" data-t="10:53" data-who="Garry" data-en="These are things that you couldn't do even, I don't know, six months ago. Which brings me to working memory and that's sort of my favorite way to understand it is you and I, human beings, we only hold about seven things in our head at once." aria-label="回原文"></button>。他感慨道,人类历史上建立的每一个机构、清单和档案柜,本质上都是为了弥补这个七位数大脑的缺陷而制造的假肢 <button class="pd-ts" data-t="11:22" data-who="Garry" data-en="That's the entire working memory, generally, of a human being. And every institution humanity has ever built, every checklist, every org chart, every filing cabinet is a prosthetic for that limit." aria-label="回原文"></button>。

> 【背景】演讲中提到的 OpenClaw、OpenClan、cloud code 均为语音识别对 Claude Code(知名 AI 编程工具)的误写;Hermes 是搭配使用的智能体框架。演讲者自研的知识工具实际名称为 Gbrain。

但 Garry 指出,一个 AI 智能体能装下一百万个 token,这大约相当于 1000 页书,或者像三本《哈利·波特》同时摊开在脑子里,它能在几秒钟内从中找到线索并综合分析 <button class="pd-ts" data-t="11:35" data-who="Garry" data-en="It's kind of a wild thing to think about. But an AI agent holds a million tokens. That's about 1,000 pages." aria-label="回原文"></button>。这是否意味着已经是通用人工智能(AGI)了?也许不是,但已经是一个完全不同的运行机制了。

然而,挑战在于「三本书虽然很多,但远远不够」。你的整个公司就是一座巨大的图书馆,包含每一封邮件、会议和决策。Garry 一针见血地指出:决定你的智能体是天才还是金鱼的,是谁来决定在那张桌子上打开哪三本书 <button class="pd-ts" data-t="12:39" data-who="Garry" data-en="Every email, every meeting, every decision, it's reasoning, every customer, every conversation, every postmortem. The question that determines whether your agents are geniuses or goldfish is who decides which three books" aria-label="回原文"></button>。这就是「[[上下文工程|上下文工程]](context engineering,设计和管理喂给模型的背景信息的技术)」的核心。

他引出了「公司大脑」的概念:它不只是图书馆,更是「图书馆加图书管理员」 <button class="pd-ts" data-t="12:53" data-who="Garry" data-en="That's context engineering. And this is what a company brain is. It's the library plus the librarian." aria-label="回原文"></button>。虽然这听起来很像企业界熟知的 [[RAG|RAG]](检索增强生成,一种让模型先检索外部知识再回答的技术),但 Garry 认为,检索只是原语,最难的是「值得被检索」。什么内容该写进知识库?什么是热内存,什么是冷参考?新旧信息冲突时谁来仲裁?

Garry 自己的「公司大脑」(他称之为 [[Gbrain|Gbrain]],一个开源的检索层,专门负责决定加载哪三本书)最初只是一满屋子的书,现在已经长成了一个拥有 22 万页的巨大仓库,主要由他的智能体从过去 20 年的笔记、邮件和会议中提炼编写 <button class="pd-ts" data-t="13:28" data-who="Garry" data-en="from is the product. So I've been building mine in the open, it's called gbrain, it works with any harness, but it loves OpenClan Hermes agent, it's effectively Postgres for agents, a retrieval layer whose job is to figure out for any task, what three books should be loaded into the agent's head." aria-label="回原文"></button>。现在,只要有一位创始人给他发邮件求助,还没等他读完邮件,智能体就已经拉取了这位创始人的所有过往对话、撞过同一堵墙的其他三家被投公司,以及当时真正奏效的方法 <button class="pd-ts" data-t="14:00" data-who="Garry" data-en="And that's the point, it's my second brain. And when a founder emails me about a crisis, before I start reading this, before I even finish reading that email, My agent has already pulled every prior conversation with that founder, three portfolio companies that hit the same wall, and what actually worked for those people." aria-label="回原文"></button>。「它做每一件事都知道我已经知道什么,这就是助手和同事的区别。」

公司大脑显然也有失败模式:一个没人精心维护的大脑会变成垃圾场,糟糕的搜索会极度自信地检索出一个早已过时的陈旧事实 <button class="pd-ts" data-t="14:30" data-who="Garry" data-en="Company brains do have failure modes. A brain nobody curates becomes a garbage dump with great search retrieval will surface a stale fact with total confidence." aria-label="回原文"></button>。因此,这个系统不仅是记忆,还必须加上卫生:每个事实都要有来源,新旧信息冲突要核查,还需要一个由人和智能体共同担任的图书管理员来做修剪 <button class="pd-ts" data-t="14:49" data-who="Garry" data-en="So the primitive is not memory. It's memory plus hygiene, provenance on every fact, contradiction checks when new information collides with the old, and a librarian, human plus agent, whose actual job is pruning." aria-label="回原文"></button>。

### 永远不要做一次性工作

维护公司大脑的方法论听起来宏大,具体落实到个人习惯该怎么做?Garry 给出了一个极简的操作指令:永远不要做一次性工作 <button class="pd-ts" data-t="15:23" data-who="Garry" data-en="That's my signature. move, and it's what I say to every YC company and everyone inside YC, which is never do one-off work. You can open OpenClaw, you can open your harness, you do some work, but then when you're happy, and it'll come back, it's kind of a bad job, it's kind of like an intern that's not that good, but the great thing is you can just say, hey, I didn't like that, fix it, right?" aria-label="回原文"></button>。

你可以打开工具,让智能体去干活,如果干得不好你可以让它重修。但关键是:当你对结果满意时,绝不能止步于此,而是要把它 Skillify([[技能化|技能化]]) <button class="pd-ts" data-t="15:52" data-who="Garry" data-en="You actually need to, at the end of that task, Skillify it. And so I have a blog post on X about that." aria-label="回原文"></button>。你可以搜索 Skillify it 获取他公开的技能文件,把刚刚做完的零散工作直接变成一个可复用的技能加载进你的系统。因为如果同一件事你必须让 AI 做两次,你就失败了。只有像这样捕捉学习成果的组织,每一天都在复利增长;否则,无论模型多好,你的公司每天早上醒来都在失忆 <button class="pd-ts" data-t="16:29" data-who="Garry" data-en="The organization that captures what it learns like this gets smarter every single day. The one that doesn't wakes up every morning with amnesia, no matter how good the model is." aria-label="回原文"></button>。

## 本集带走

最后收个尾,这一集值得带走的是三句话。第一,别再当 2 倍产出的工程师了,同样的模型能产生 100 倍的杠杆,秘诀不在于死磕权重,而在于你如何组织工作——把技能文件当员工,把规则表当组织架构,把评估当绩效考核。第二,人类的工作记忆只有七位数,而智能体能装下三本书,但你的公司是一座图书馆,决定智能体水平的关键是谁来担任图书管理员,精心维护事实的来源和新旧更替。第三,每次让 AI 完成一项满意的工作后,永远记住把它技能化(Skillify),绝不重复做一次性工作。如果你 25 岁,他给的最大机会就是去建造那个记忆层——每一家公司都将需要的大脑。

<div class="pd-sec">全部金句 <span>14 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">我们正在尝试建立这样的公司，一个人做过去需要 1000 人才能做的事情。</span>  
> *We're trying to build companies where one person does what it took to, one person does what used to take 1,000 people.*  
> <span class="qm">—— Garry Tan · [00:49]</span> ^q1

> <span class="qz">所以杠杆不在于权重，而在于你如何连接工作。</span>  
> *So the leverage is not in the weights, it's in how you wire the work.*  
> <span class="qm">—— Garry Tan · [03:17]</span> ^q2

> <span class="qz">我们投资的最快增长的创始人没有把 AI 当作自动补全。</span>  
> *The fastest-growing founders we fund are not treating AI as autocomplete.*  
> <span class="qm">—— Garry Tan · [03:52]</span> ^q3

> <span class="qz">一个技能文件就是一名员工，它拥有一种能力，一份工作，写得足够清楚以至于某人可以执行它。</span>  
> *A skill file is an employee, it has one capability, one job, written down clearly enough that someone can execute it.*  
> <span class="qm">—— Garry Tan · [04:31]</span> ^q4

> <span class="qz">当你坐下来使用 Cloud Code 或 Codex 时，你不是在编写软件，你是在雇佣、培训和管理一支由 Markdown 组成的劳动力。</span>  
> *When you sit down with Cloud Code or Codex, you're not writing software, you're hiring, training, and managing a workforce made of Markdown.*  
> <span class="qm">—— Garry Tan · [05:58]</span> ^q5

> <span class="qz">人类建立过的每一个机构，每一个清单，每一个组织结构图，每一个档案柜，都是针对这个限制的假肢。</span>  
> *And every institution humanity has ever built, every checklist, every org chart, every filing cabinet is a prosthetic for that limit.*  
> <span class="qm">—— Garry Tan · [11:22]</span> ^q6

> <span class="qz">决定你的智能体是天才还是金鱼的问题是，谁决定那三本书在那张桌子上打开。</span>  
> *The question that determines whether your agents are geniuses or goldfish is who decides which three books are open on that desk.*  
> <span class="qm">—— Garry Tan · [12:39]</span> ^q7

> <span class="qz">检索是容易的。值得检索才是产品。</span>  
> *Retrieval is easy. Being worth retrieving from is the product.*  
> <span class="qm">—— Garry Tan · [13:21]</span> ^q8

> <span class="qz">当我的智能体做任何事情时，它都在做每一件事时都知道我已经知道什么，这就是助手和同事之间的区别。</span>  
> *When my agent does anything, it does everything knowing what I already know, and that's the difference between an assistant and a colleague.*  
> <span class="qm">—— Garry Tan · [14:16]</span> ^q9

> <span class="qz">一个没有人策划的大脑会变成垃圾场，优秀的搜索检索会以绝对的信心检索出一个陈旧的事实。</span>  
> *A brain nobody curates becomes a garbage dump with great search retrieval will surface a stale fact with total confidence.*  
> <span class="qm">—— Garry Tan · [14:30]</span> ^q10

> <span class="qz">因为如果你必须请求某样东西两次，你就失败了。</span>  
> *Because if you have to ask for something twice, you failed.*  
> <span class="qm">—— Garry Tan · [16:08]</span> ^q11

> <span class="qz">模型质量是租来的，但如果你构建你的大脑，你就拥有那个大脑。</span>  
> *Model quality is rented, but if you build your brain, you own that brain.*  
> <span class="qm">—— Garry Tan · [16:35]</span> ^q12

> <span class="qz">构建 AI 原生公司，而不是一家仅仅使用 AI 的公司。</span>  
> *Build the AI native company, not a company that just uses AI.*  
> <span class="qm">—— Garry Tan · [16:44]</span> ^q13

> <span class="qz">富足不是一篇政策文件，而是已交付的软件。</span>  
> *Abundance is not a policy paper, it is shipped software.*  
> <span class="qm">—— Garry Tan · [18:56]</span> ^q14

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]] —— 同概念:智能体 (agent)、Codex
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|SaaS 不会死,PM 迎来黄金期:Dan Shipper 的 AI 工作预测]] —— 同概念:智能体 (agent)、Codex
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当代码不再是瓶颈,品味和策展成为产品团队的稀缺力]] —— 同概念:智能体 (agent)、Codex

</div>
<div class="pd-ex">

**换个口味**

- [[2026-singju-openclaw-80apps|OpenClaw 创始人 Peter Steinberger：让智能体直接接管你的整台电脑]] —— 同概念:智能体 (agent)、Codex
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|Vercel COO 谈用 AI 重构销售：10 个 SDR 缩减到 1 个]] —— 同概念:智能体 (agent)
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|用 20 个 AI 智能体换掉 8 人销售团队：SaaStr 创始人的前沿实战]] —— 同概念:智能体 (agent)

</div>
</div>

*本集关键词:AI 原生公司 · 智能体 · 上下文工程 · 技能化 · 公司大脑*

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
    ['.search','.readermode'].forEach(function(sel){ grab(sel,acts); });
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
