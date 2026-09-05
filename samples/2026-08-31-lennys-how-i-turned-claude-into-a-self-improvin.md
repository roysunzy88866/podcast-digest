---
title: 一个PM用Claude CoWork建的自愈型工作系统
podcast: "Lenny's Podcast"
date: 2026-09-01
source_url: undefined
duration: "46:05"
type: episode
cover: "#6366f1"
description: Melio的PM Daniel Bloom展示了他在Claude CoWork上搭建的个人工作系统，能自动整理任务、识别不懂的术语主动追问，还会自我改进。
host: "[[Daniel Blum]]"
cohosts: ["[[Claire Vo]]"]
companies: ["[[Co-work]]", "[[Notion]]", "[[Whisper]]"]
concepts: ["[[智能体]]", "[[技能]]", "[[上下文]]", "[[循环任务]]", "[[自改进循环]]", "[[Workstation]]"]
category: 智能体
tags:
  - 智能体
  - 产品方法
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-31-lennys-how-i-turned-claude-into-a-self-improvin#post","headline":"一个PM用Claude CoWork建的自愈型工作系统","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-31-lennys-how-i-turned-claude-into-a-self-improvin","mainEntityOfPage":"https://talk.solomind.cc/2026-08-31-lennys-how-i-turned-claude-into-a-self-improvin","description":"Melio的PM Daniel Bloom展示了他在Claude CoWork上搭建的个人工作系统，能自动整理任务、识别不懂的术语主动追问，还会自我改进。","datePublished":"2026-09-01","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Daniel Blum"},{"@type":"Person","name":"Claire Vo"},{"@type":"Organization","name":"Co-work"},{"@type":"Organization","name":"Notion"},{"@type":"Organization","name":"Whisper"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"技能 (skill)"},{"@type":"Thing","name":"上下文 (context)"},{"@type":"Thing","name":"循环任务 (scheduled task)"},{"@type":"Thing","name":"自改进循环 (self-improvement loop)"},{"@type":"Thing","name":"Workstation"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"一个PM用Claude CoWork建的自愈型工作系统","item":"https://talk.solomind.cc/2026-08-31-lennys-how-i-turned-claude-into-a-self-improvin"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>一个PM用Claude CoWork建的自愈型工作系统</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 一个PM用Claude CoWork建的自愈型工作系统

<div class="pd-byl"><b>Daniel Blum</b> · PM · 2026-09-01</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-31-lennys-how-i-turned-claude-into-a-self-improvin.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我认为任何产品经理都能产生共鸣的事情之一是有两个世界，对吧？有一个美丽、干净、有条理的世界，在我们的每周优先事项或路线图里，那里的一切都非常清晰、美丽且井井有条。然后还有现实……正如我们所说，这是 Slack、会议、紧急优先事项、高管要求和无数仅仅流进流出的混乱。</div><div class="a">— Daniel Blum <button class="pd-ts" data-t="12:03" data-who="Daniel Blum" data-en="I think one of the things any PM can resonate with is the fact that there's two worlds, right? There's this beautiful, clean, organized world that's in our weekly priority or our roadmap where everything is very clear and beautiful and fits in. And then there's reality where... As we said, this chaos of slack and meetings and urgent priorities and executive asks and endless things that just flow in and out." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Daniel Blum]] · [[Claire Vo]]
>
> **公司** [[Co-work]] · [[Notion]] · [[Whisper]]
>
> **概念** [[智能体]] · [[技能]] · [[上下文]] · [[循环任务]] · [[自改进循环]] · [[Workstation]]

这一集是产品经理 Daniel Bloom 展示他基于 Claude CoWork 搭建的一套个人工作系统——它帮他管理日程、追踪任务、自动学习公司内部术语，而且能自我迭代。他说现在一天能干完以前一周的活。

## 系统的两个核心前提

Daniel 认为让这套系统真正跑起来，关键不在于用 Claude 还是其他工具，而在于两条规则：第一，系统要能**重写自己的核心文件**，这样它才能持续改进；第二，系统要**尽可能多地连接你的工作生态**——Slack、邮件、日历、[[Notion|Notion]] 等等。这两条满足之后，才有机会真正改变工作方式 <button class="pd-ts" data-t="05:47" data-who="Daniel Bloom" data-en="And in terms of the tool, so... Co-work was definitely the big unlock for me, but I think while I love co-work, it's not co-work in itself. And I think Codex could be great for this as well, or ChatGPT work." aria-label="回原文"></button>。

## 上下文怎么喂：手动起步，自动维护

系统的基础是 Notion 上的一个看板，分三块：top of mind（脑子里的大事）、this week（本周优先级）、inbox（从各渠道涌入的杂事）。Notion 对他来说几乎是只读的——只用来看焦点和优先级，所有操作都通过 CoWork 完成 <button class="pd-ts" data-t="18:58" data-who="Daniel Bloom" data-en="Do you actually spend time in the Notion or are you still like navigating all this with Claude? So the main idea is that Notion is almost a read-only for me. I look at the Notion to get my focus, to remind me of my top of mind, to remind me of my priorities and focus this week." aria-label="回原文"></button>。

[[上下文|上下文]]的构建分两阶段。前期他花了大量时间手动喂信息：给 Claude 投喂链接、文档，还用 [[Whisper|Whisper]]（语音转文字工具）口述了大量的背景信息。他发现 Whisper 这种方式出奇地高效——絮絮叨叨地说一大堆，上下文就喂进去了 <button class="pd-ts" data-t="09:27" data-who="Daniel Bloom" data-en="I spent a lot of time manually contextualizing in the beginning, whether through like feeding it links and different decks and stuff like that. And also just a lot of whisper, just dictating endless information and blabbering endlessly about everything that I can think of." aria-label="回原文"></button>。

之后系统会自动维护。每隔几周，它会根据这段时间发生的变化自动更新知识文件 <button class="pd-ts" data-t="09:41" data-who="Daniel Bloom" data-en="Which is just incredibly powerful and how much context you can give relatively easily and quickly. And then this system basically updates itself on a recurring basis." aria-label="回原文"></button>。

## 每周准备：从混乱到清晰的结构化

系统的第一个锚定任务是「每周准备」，周日早晨自动运行。它做三件事：梳理 top of mind 和本周优先级、处理 inbox 里从 Slack 和邮件捞出来的杂事、帮他准备下周的会议——对每个会议判断需要严肃准备（单独列为任务）、快速提醒、还是不需要准备 <button class="pd-ts" data-t="10:06" data-who="Daniel Bloom" data-en="Perfect. So it all starts with one recurring task, which is a composition of several skills called the weekly prep. So the weekly prep is the very basic task that helps me start my week." aria-label="回原文"></button>。

Daniel 说了一个 PM 都有共鸣的痛点：你的路线图和优先级列表是一个干净有序的世界，但现实是 Slack、会议、高管临时要求的混乱。这个系统就是用来弥合这两者之间的差距的 <button class="pd-ts" data-t="12:03" data-who="Daniel Bloom" data-en="The unique thing about this is that I think, and this is something I ran into after having created the first weekly prep. I think one of the things any PM can resonate with is the fact that there's two worlds, right?" aria-label="回原文"></button>。

## 晨报：最核心的魔法——主动追问不懂的术语

每天的晨报是 Daniel 认为最神奇的部分 <button class="pd-ts" data-t="13:15" data-who="Daniel Bloom" data-en="And this is called the morning brief. And this is, I think, where the real magic happens. So actually, we're going to run this live right now." aria-label="回原文"></button>。

第一段是会议回顾：拉取 Granola（会议记录工具）的转录，给每个会议一行总结，标出有没有待办事项。他可以选展开或跳过 <button class="pd-ts" data-t="15:38" data-who="Daniel Bloom" data-en="OK, so I think there's several things, but I'll walk through this very quickly and show the different parts and I'll highlight the interesting things. So the first part is that this brief basically walks me through my meetings." aria-label="回原文"></button>。

第二段才是真正的杀手锏：Claude 会扫他最近的 Slack、邮件和笔记，**主动找它不理解的上下文**——比如一个没见过的术语、一个不知道的里程碑或目标——然后问他：「这是什么？重要吗？

我要不要读一下？」现场演示中，它标记了「settlement cap」这个支付领域的术语，Daniel 说「保存到上下文」，它就记住了 <button class="pd-ts" data-t="17:08" data-who="Daniel Bloom" data-en="So this is one of the ways I've thought of. So basically what it does is imagine in this daily brief, my coworker runs through my recent slacks, my emails, my granola notes." aria-label="回原文"></button>。

主持人 Claire 指出这为什么犀利：很多公司内部说的东西不在模型的训练数据里，主动让模型承认「我不懂」然后一起定义、存下来，之后就能理解了。这是这集播客里没见过的做法 <button class="pd-ts" data-t="18:05" data-who="Claire Vo" data-en="And I want people to just take a pause and reflect on what this is, because it looks like for your context, you are making sure that Claude understands internal definitions, terms, goals, et cetera." aria-label="回原文"></button>。

系统还了解他的工作习惯——比如他是 inbox zero 的人，所以如果一条 Slack 消息之前在、现在不在了，系统就推断这事已经处理完了，不需要再提醒 <button class="pd-ts" data-t="12:48" data-who="Daniel Bloom" data-en="And part of the fact that it knows me really well is also that it knows how I work. So for example, I'm inbox zero, both on Slack and on email. So it knows that if something was saved on Slack and is no longer, it means it's likely done." aria-label="回原文"></button>。

## 自我改进循环：四个自动化模块

Daniel 每周跑一个「自我改进循环」，分四部分，本质上是让 Claude 帮他改进系统，而不是纯手动调 <button class="pd-ts" data-t="27:31" data-who="Daniel Bloom" data-en="What have you figured out there? Yeah, so I think this is one of the coolest unlocks that have helped me continuously improve the setup while not dedicating too much time to it." aria-label="回原文"></button>：

**第一，草稿差距分析。** Claude 写了草稿，Daniel 修改后直接发出去了——但 Claude 不知道改了什么。这个任务会去找那些 Claude 给了草稿但 Daniel 没回复、之后以不同方式发出的内容，对比学习差距，持续打磨写作风格 <button class="pd-ts" data-t="28:05" data-who="Daniel Bloom" data-en="So I'm going to walk through this in retroactive. So first of all, the first part is how my drafts landed. So what I found over time is that when I write with Claude, it'll give me a draft and then I'll change it and I'll just send it." aria-label="回原文"></button>。

**第二，新[[技能|技能]]建议。** Claude 持续观察他反复做的事情，建议封装成技能。Daniel 很多技能就是这么来的——比如他在频繁做原型，系统就建议建一个「设计交接」技能 <button class="pd-ts" data-t="28:50" data-who="Daniel Bloom" data-en="Now this is a cool one. The second one, and this is skills that are worth building. So basically Claude on an ongoing basis looks for things that I do on a recurring basis and suggests turning them into skills." aria-label="回原文"></button>。

**第三，摩擦点收集与修复。** 每个技能和[[循环任务|循环任务]]的文件里都内嵌了反馈收集机制。

每次 Daniel 要求修正或表达不满，系统会自动记录。每周汇总出最大的摩擦点，建议改进方案。Claire 说这是她见过最聪明的做法之一——在技能里内置遥测，定期回顾 <button class="pd-ts" data-t="29:33" data-who="Daniel Bloom" data-en="This is the second part. The third part is fixes to my existing setup. So basically all of my skills and recurring tasks have lines in their files to collect feedback and friction from my interaction with them." aria-label="回原文"></button>。

**第四，外部建议审计。** Daniel 面对的是无尽的 AI 使用技巧洪流——X、LinkedIn、博客。

他建了一个叫「Improve」的技能，把看到的建议丢进一个 Slack 频道，让 Claude 审计：这是真的吗？强大吗？

适合我现在的情况吗？还是只是炒作？两人一起决定要不要采纳 <button class="pd-ts" data-t="30:09" data-who="Daniel Bloom" data-en="This is actually the improved skill. So basically, we're all dealing with an endless flood. I think this resonates with anybody." aria-label="回原文"></button>。

## 扩展到团队：Workstation 插件

Daniel 和同事把这套系统封装成了一个叫 [[Workstation|Workstation]] 的共享插件，面向公司所有人，不只是 PM <button class="pd-ts" data-t="33:34" data-who="Daniel Bloom" data-en="For sure. So basically, I'll say that one of the main things that were important for us, and we were debating whether to do this with Claude Code, which was much more powerful, or with Cowork, and we decided on doing it with Cowork." aria-label="回原文"></button>。

关键决策是用 CoWork 而不是 Claude Code。他们试过让 PM 用 Claude Code 通过终端安装，三天都没搞定。Workstation 的核心是一个**内置在聊天流程中的引导式 UX**：点几个确认、回答几个问题，就自动连接好所有工具、确认角色、映射同事和管理层、读取日历和 Slack、帮你建立个人写作风格——从第一天起写出来的东西就像你本人，不像陌生人 <button class="pd-ts" data-t="34:18" data-who="Daniel Bloom" data-en="We really insisted in the beginning on a good UX. And after having a few PMs try to do it with Claude Code through the terminal and taking three days to install everything and run all the dependencies, we understood that we need to do something that's simple." aria-label="回原文"></button>。

Daniel 说这个想法来自一年前的教训：他做了一个写产品规格的 gem，自己用得很好，分发给其他 PM 时发现人家根本用不动——因为完全按他的工作方式调教的。从此他坚持内部工具也要做好 onboarding 体验 <button class="pd-ts" data-t="36:33" data-who="Daniel Bloom" data-en="This is a plugin so everybody has it in our library and anybody can access it and you know now it's already like it's become quite a big thing like my colleagues have taken it to to the next level and it's really really impressive but yeah I couldn't agree with you more I think for me this this landed when" aria-label="回原文"></button>。

## 还缺什么

Daniel 说他现在 70% 到 80% 的电脑前工作都通过 CoWork 完成。剩下的差距主要是两件事 <button class="pd-ts" data-t="39:52" data-who="Daniel Bloom" data-en="Or kind of what's that gap and what's missing in terms of you being able to use AI or use Claude for everything? So it's a really, really good question. I think the missing piece, and my personal sense is that it's very close, is A, the ability to operate in the cloud, essentially, in a way that's unrelated to when my computer is open and running." aria-label="回原文"></button>：

一是**脱离电脑运行**的能力。他希望 Claude 能在云端自主执行任务，而不是必须他在线。他用 Slack 频道做了个变通——离线时往频道发消息，Claude 上线后读取——但这仍是需要在线触发的。

二是**自主执行简单任务**。他已经在让 Claude 观察他怎么解决任务（比如有人问了什么、他怎么回复的），为将来让 Claude 自主处理这类简单请求打基础。

## 本集带走

- **系统的价值在于能重写自身 + 连接生态**：工具本身（Claude/ChatGPT/Codex）不是关键，关键是系统能修改自己的核心文件实现自愈，以及尽可能多地接入你的实际工作工具
- **上下文先手动狠喂，再自动维护**：前期用 Whisper 口述、投喂链接和文档大量注入，之后系统每隔几周自动更新知识文件
- **让 AI 主动找它不懂的东西并追问**：晨报里最核心的设计——扫 Slack/邮件/笔记，标记不认识的术语和上下文，问你「这是什么、要不要记住」，持续补全公司内部知识
- **在技能文件里内嵌反馈收集机制**：每次你要求修正或表达不满都自动记录，每周汇总摩擦点并建议改进——这是零额外维护成本的自我改进方式
- **外部建议用专门技能做审计**：别直接跟着网上的 AI 技巧走，丢给 Claude 问「这是真的吗、适合我吗、还是炒作」，过滤后再决定是否采纳
- **内部 AI 工具必须有引导式 onboarding**：按自己的习惯调教的系统别人用不动；把设置流程做成聊天内的引导 UX，点确认就配好，15 分钟上手

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">我认为任何产品经理都能产生共鸣的事情之一是有两个世界，对吧？有一个美丽、干净、有条理的世界，在我们的每周优先事项或路线图里，那里的一切都非常清晰、美丽且井井有条。然后还有现实……正如我们所说，这是 Slack、会议、紧急优先事项、高管要求和无数仅仅流进流出的混乱。</span>  
> *I think one of the things any PM can resonate with is the fact that there's two worlds, right? There's this beautiful, clean, organized world that's in our weekly priority or our roadmap where everything is very clear and beautiful and fits in. And then there's reality where... As we said, this chaos of slack and meetings and urgent priorities and executive asks and endless things that just flow in and out.*  
> <span class="qm">—— Daniel Blum · [12:03]</span> ^q1

> <span class="qz">主动提示 Claude 说，比如，我不明白你在这里说什么。我们能一起定义它吗？然后我会把它保存到我的上下文中，我就会知道你在说什么。从此往后真的非常犀利，也是我们在播客中还没见过的东西。</span>  
> *Actually proactively prompting Claude to say, like, I don't understand what you're talking about here. Can we define it together? And then I'll save it to my context and I'll know what you're talking about. Moving forward is really, really sharp and something we haven't seen on the podcast yet.*  
> <span class="qm">—— Claire Vo · [18:14]</span> ^q2

> <span class="qz">即便是在公司层面，我告诉人们的一件事是，听着，你必须经历转换系统的痛苦。而且它不会那么高效。是的，当然，旧的方式会更快，因为那是肌肉记忆。但如果你进入下一个层级，不仅你会有一个更适合你的系统，而且每个人都会有更多技能。</span>  
> *One of the things, even at a company level, that I tell people is, look, you've got to go through the pain of switching your systems. And it's not going to be as efficient. And yes, of course, the old way will be faster because it's muscle memory. But if you get to the next level, not only will you have a system that works better for you, but everybody will have more skills.*  
> <span class="qm">—— Claire Vo · [24:15]</span> ^q3

> <span class="qz">在我构建了那个真正强大的东西并且对我工作的方式很友好之后，我很兴奋去分发它，我和几个 PM 进行了现场演示，我看着他们从零开始操作，我看到了多么不同。我以为它已经是一个完整的、完全成熟的工具，但我看到他们在使用它时很挣扎，因为它完全是按照我的工作方式调整的。</span>  
> *And after I built something that was really powerful and good for the way I was working and I was excited to distribute it, I had live demos with several PMs that I watched them operated from zero, and I saw how different. I thought it was already this complete, fully baked tool, and I saw them using it and struggling because it was completely adjusted to how I work.*  
> <span class="qm">—— Daniel Blum · [36:53]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-09-talks-multiplayer-agentic-engineering-arjun-si|让非工程师也能下指令：Superconductor 的多人智能体协作法]]<span class="pd-rz">同公司:Claude Code、Codex、Cursor、Slack · 同概念:上下文 (context)、智能体 (agent)</span>
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|把 AI 当员工来管理:Claire Vo 的九个智能体生活实战]]<span class="pd-rz">同嘉宾:Claire Vo · 同公司:Claude Code · 同概念:智能体 (agent)</span>
- [[2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo|Datadog 4000 人AI赋能实战：删掉上下文反而更好]]<span class="pd-rz">同公司:Cursor · 同概念:上下文 (context)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同公司:Codex、Cursor · 同概念:上下文 (context)、智能体 (agent)</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Notion、Codex、Cursor · 同概念:智能体 (agent)</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同公司:ChatGPT · 同概念:上下文 (context)、智能体 (agent)</span>

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
