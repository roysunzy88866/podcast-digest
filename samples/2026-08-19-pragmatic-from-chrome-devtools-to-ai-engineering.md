---
title: Addy Osmani：从造浏览器到对抗认知投降
podcast: The Pragmatic Engineer
date: 2026-08-19
source_url: undefined
duration: "91:34"
type: episode
cover: "#64748b"
description: Chrome DevTools 幕后推手谈浏览器工具演进、AI 时代的认知投降与工程师的真正价值。
guests: ["[[Addy Osmani]]"]
companies: ["[[Chrome DevTools]]"]
concepts: ["[[智能体]]", "[[认知投降]]", "[[认知债务]]", "[[循环工程]]", "[[软件工厂]]", "[[Core Web Vitals]]", "[[互相放大]]", "[[护栏]]"]
category: AI 编程
tags:
  - AI 编程
  - 组织与领导力
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-19-pragmatic-from-chrome-devtools-to-ai-engineering#post","headline":"Addy Osmani：从造浏览器到对抗认知投降","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-19-pragmatic-from-chrome-devtools-to-ai-engineering","mainEntityOfPage":"https://talk.solomind.cc/2026-08-19-pragmatic-from-chrome-devtools-to-ai-engineering","description":"Chrome DevTools 幕后推手谈浏览器工具演进、AI 时代的认知投降与工程师的真正价值。","datePublished":"2026-08-19","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Addy Osmani"},{"@type":"Organization","name":"Chrome DevTools"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"认知投降 (cognitive surrender)"},{"@type":"Thing","name":"认知债务 (cognitive debt)"},{"@type":"Thing","name":"循环工程 (loop engineering)"},{"@type":"Thing","name":"软件工厂 (software factory)"},{"@type":"Thing","name":"Core Web Vitals"},{"@type":"Thing","name":"互相放大 (mutual amplification)"},{"@type":"Thing","name":"护栏 (guardrails)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"Addy Osmani：从造浏览器到对抗认知投降","item":"https://talk.solomind.cc/2026-08-19-pragmatic-from-chrome-devtools-to-ai-engineering"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Addy Osmani：从造浏览器到对抗认知投降</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Addy Osmani：从造浏览器到对抗认知投降

<div class="pd-byl"><b>Addy Osmani</b> · 2026-08-19</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-19-pragmatic-from-chrome-devtools-to-ai-engineering.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我想说有时，我不知道这是否有争议，很少有开发者理解内存管理。</div><div class="a">— Addy Osmani <button class="pd-ts" data-t="28:45" data-who="Addy Osmani" data-en="I would say sometimes, I don't know if it's controversial, that very few developers understand memory management." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Addy Osmani]]
>
> **公司** [[Chrome DevTools]]
>
> **概念** [[智能体]] · [[认知投降]] · [[认知债务]] · [[循环工程]] · [[软件工厂]] · [[Core Web Vitals]] · [[互相放大]] · [[护栏]]

<div class="pd-tldr"><b>一句话</b>Chrome DevTools 幕后推手谈浏览器工具演进、AI 时代的认知投降与工程师的真正价值。</div>

[[Addy Osmani|Addy Osmani]] 在爱尔兰农村长大，拨号上网时代网速慢到下载一首歌要等几小时，他十几岁时研究下载管理器的多线程分块下载原理，想：能不能把这套方法用在浏览网页上？于是他从零开始读 HTML、CSS、JavaScript 规范，自己写了一个浏览器。

最难的倒不是解析文档，而是开发者往浏览器里扔的各种不规范的代码——真正的浏览器对这些东西有极大的容错能力，他必须模仿这种行为。后来他还给这个浏览器加了 Flash 和 Applets 支持 <button class="pd-ts" data-t="08:48" data-who="Unknown" data-en="It was like, yeah, you can parse HTML, you can parse documents, you can load up images, but as soon as you run into pages that stop following those specs and they take a very loose interpretation of what's supported, you have to really roll your sleeves up and try to behave the way that actual consumer browsers did." aria-label="回原文"></button>。

这个项目拿了全国科学竞赛总冠军，引来了华尔街日报和 CNN 的采访 <button class="pd-ts" data-t="11:25" data-who="Unknown" data-en="There was like none of this just yet. Yeah, it's Wall Street Journal, CNN. I didn't really understand what was happening, but it was my first taste of that world." aria-label="回原文"></button>。但他清醒地认识到：能跑起来不等于理解了背后的每一层，这反而激发了他"剥洋葱"式的终身求知欲 <button class="pd-ts" data-t="11:51" data-who="Unknown" data-en="Just because you can build an app that runs on your machine and accomplishes a goal doesn't mean that you understand all of those layers behind the scenes. And that, I think, kicked off for me a..." aria-label="回原文"></button>。

## Chrome DevTools：从 Firebug 的阴影到接近 IDE

2012 年加入 Chrome 团队时，前端调试的标配还是 Firefox 上的 Firebug，IE 几乎没有调试工具 <button class="pd-ts" data-t="24:21" data-who="Unknown" data-en="And so this was the period of time when you went through things like Grunt for anyone that, you know, maybe we're dating ourselves, but Grunt as a built system." aria-label="回原文"></button>。[[Chrome DevTools|Chrome DevTools]] 的技术负责人 Pavel Feldman 带团队走了一条以开发者为中心、贴近生态系统的路线 <button class="pd-ts" data-t="27:02" data-who="Unknown" data-en="Yeah, so I have to give a shout out to Pavel Feldman, who was the tech lead for Chrome DevTools and really played a very large role in helping it come to be originally." aria-label="回原文"></button>。Addy 和 Paul Irish 等人作为"半路出家的构建者"，把一线摩擦反馈给 DevTools 团队——有时候不是工具不够好，而是底层缺少插装能力（instrumentation），工具根本做不出来 <button class="pd-ts" data-t="28:07" data-who="Unknown" data-en="And we would try to bring those insights to the DevTools team and help them understand, well, here are the areas of friction that we're running into. In some cases, you can't just build tools to help you out with them because you don't have the underlying instrumentation." aria-label="回原文"></button>。

性能面板是 Addy 特别骄傲的部分：点一下录制、跟页面交互，就能拿到火焰图和极深的时间追踪 <button class="pd-ts" data-t="28:25" data-who="Unknown" data-en="Like the DevTools performance panel is just an amazing piece of technology. The fact that you can just hit record, start interacting with your page, and you get a flame graph, you get very deep tracing about where all the time is being spent." aria-label="回原文"></button>。但内存调试是至今没被很好解决的硬问题——他认为很少有开发者真正理解内存管理，这让内存问题的调试难上加难，而且这么多年进展不大 <button class="pd-ts" data-t="28:45" data-who="Unknown" data-en="Some of the hardest problems have been around memory, right? I would say sometimes, I don't know if it's controversial, that very few developers understand memory management." aria-label="回原文"></button>。

框架时代到来后，一个关键挑战是：页面用了大量库，调试时你只关心自己写的代码，不想被 React 库本身的问题淹没。团队通过 source maps（一种把编译后代码映射回源代码的技术）和"黑盒视图"解决这个问题——让你可以屏蔽掉第三方库，只看自己写的部分 <button class="pd-ts" data-t="30:44" data-who="Unknown" data-en="... ... ... ... ... ... One of the things that we tried to introduce was just this respect and understanding that, yeah, developers are going to be using these different tech stacks." aria-label="回原文"></button>。

移动端崛起后，他们又在 DevTools 里加了设备模式，可以快速预览不同视口尺寸下的效果 <button class="pd-ts" data-t="32:24" data-who="Unknown" data-en="Exactly. Is it big enough? Is it on screen?" aria-label="回原文"></button>。后来 PWA 兴起，离线缓存、推送通知、后台同步这些能力都需要调试，团队建了应用面板来覆盖这些场景 <button class="pd-ts" data-t="33:46" data-who="Unknown" data-en="And because these are non-trivial features, you need to have a debugging story around all of them. And so we helped build out the application panel so that you can go in and for any of these features, whether it's debugging service workers or it's debugging your cache or debugging any of these things, you're able to do that." aria-label="回原文"></button>。

至于"DevTools 是不是 IDE"这个问题，团队内部的共识是：不争这个标签，而是"在开发者所在的地方与他们相遇"——你用你的编辑器，DevTools 在浏览器里给你补齐调试能力 <button class="pd-ts" data-t="35:17" data-who="Unknown" data-en="Yeah, it's really fascinating. And I think that, are we in IDE? Aren't we in IDE?" aria-label="回原文"></button>。Pavel 之后的下一任技术负责人 Yan Gao，带领团队进入了 AI 阶段：一方面用 LLM 帮开发者快速消化巨大的堆栈跟踪、定位修复点；另一方面让[[智能体|智能体]]能连接到 Chrome 和 DevTools，自动化调试流程 <button class="pd-ts" data-t="35:47" data-who="Unknown" data-en="We continued having other eras. Yan Gao became our next tech lead after Pavel and helped us through the era of trying to figure out AI is now in the picture and we want to both be able to help humans reason through this massive amount of data that the browser generates for you as well as make it possible for you to connect your agent up to Chrome and DevTools and be able to have it just automate a lot of these journeys for you." aria-label="回原文"></button>。

## Core Web Vitals：把"感觉慢"变成一个数字

以前衡量网页性能的方式很模糊——"页面加载好了吗？""好了"是什么意思？

能看到内容？还是能点击？Chrome 团队觉得是时候给出一套更细致的指标了 <button class="pd-ts" data-t="40:08" data-who="Unknown" data-en="If you're not a web engineer, it takes a little time to understand them, but it does actually explain how users feel. I feel you somehow inside of Google managed to connect the kind of feel to a number." aria-label="回原文"></button>。

LCP（最大内容绘制）对应的是"用户看到有用内容的时刻"——可能是首屏图片，也可能是文章正文 <button class="pd-ts" data-t="41:15" data-who="Unknown" data-en="And so if you break it down, there are a number of key moments across the user's journey that they care about. Is it happening? Is anything loading?" aria-label="回原文"></button>。INP（交互到下一次绘制，取代了早期的 FID）对应的是"点了按钮之后多久有反应"——Addy 举了电商场景：点"加入购物车"没反应，因为 JavaScript 还没加载完或者事件处理器没挂上，用户就会反复点，结果事件处理器终于挂上之后可能触发了两三次 <button class="pd-ts" data-t="42:10" data-who="Unknown" data-en="I can remember many times over the years when I might be shopping and whether it's on my phone or on my desktop, I will click like the add to cart button and just crickets." aria-label="回原文"></button>。CLS（累积布局偏移）针对的是另一个痛点：你正在读文章，广告突然加载出来把内容推下去了 <button class="pd-ts" data-t="43:21" data-who="Unknown" data-en="Those things shouldn't cause a really bad experience. If I'm on a page that has a bunch of ads, I shouldn't start reading an article and then suddenly everything gets pushed down, right?" aria-label="回原文"></button>。

这些指标不是拍脑袋定的。团队做了大量实验，跟标准社区和开发者反复验证：这些数字真的跟你们认为的"页面价值"对齐吗？ <button class="pd-ts" data-t="43:55" data-who="Unknown" data-en="There are lots of different ways that a person can think about the value of a page and what's important. And so the team did a lot of experiments, experimented with lots of different ways of thinking about these metrics and worked very heavily with both the standards community and developers to validate like, hey, do you actually believe that these things line up with how you would say you think about the value of your pages?" aria-label="回原文"></button>

## 在 Google 从 L4 到 L8

Addy 最初以 L4（中级软件工程师）加入 Google UK，做开发者关系工程师 <button class="pd-ts" data-t="50:55" data-who="Unknown" data-en="Yeah, I joined Google UK originally and I believe I joined at a level four. Yeah, that was one, the mid-level software engineer." aria-label="回原文"></button>。在 DevRel 路线上升到 L6（Staff 级）后成为管理者 <button class="pd-ts" data-t="51:17" data-who="Unknown" data-en="Over the years, I kind of got promoted in that role to like level five and level six. I became a manager within DevRel. When you were at level six at the staff level." aria-label="回原文"></button>。

大约五六年时，他发现自己骨子里还是个构建者，转回工程管理路线 <button class="pd-ts" data-t="51:33" data-who="Unknown" data-en="And at some point, maybe five or six years in, I started to feel like, you know, I loved doing developer relations, but I am very much a builder at heart. I love engineering and I love product." aria-label="回原文"></button>。团队后来扩到 40 多人到 50 人，分布在全球各地 <button class="pd-ts" data-t="52:24" data-who="Unknown" data-en="At the start had a smaller team and then it grew out. I would say the average at one point was probably in the 45s to 50s. I think that depending on where you are in your leadership or manager journey, success means different things." aria-label="回原文"></button>。

他管理哲学的核心是：把组织带到"近乎自运转"的状态——不需要你放手不管，而是建立足够的系统，让信息和阻塞点能快速浮到你面前，你做航向修正就好。这样你才能腾出手去思考下一阶段的问题 <button class="pd-ts" data-t="53:04" data-who="Unknown" data-en="But you want to get to a point where, you know, your machine, your org is self-sufficient enough that, you know, you just need to occasionally tap the blimp, make sure that things are working." aria-label="回原文"></button>。

后来他从 L7 升到 L8（总监），这是 Google 第一个高管层级 <button class="pd-ts" data-t="55:21" data-who="Unknown" data-en="Like, how do you create the space now for you so that you can also help us on this journey of modernizing for the AI moment? So I went from L6 to L7 to director in my... Is director L8 or L7?" aria-label="回原文"></button>。变化在于问责感大幅增加：你要每两周向上报告年度顶级目标的进展，确保数字朝正确方向走 <button class="pd-ts" data-t="58:49" data-who="Unknown" data-en="I think that that's really one of the biggest pieces like making sure that the business goals get done and making sure that people who perhaps sometimes don't necessarily understand how to connect the tech that's being done back to the business goals like see that through line very clearly." aria-label="回原文"></button>。但不是完全放手——而是确保技术工作跟业务目标之间那条主线清晰可见 <button class="pd-ts" data-t="58:31" data-who="Unknown" data-en="And when I say you want, ideally, to have a self-running org, it's not about letting go entirely at all, but it's about having enough of a system in place where you get the information you need, any decisions, any blocks that your teams are running into are surfaced quickly to you so you can help them unblock them." aria-label="回原文"></button>。

他观察到过去一两年有个有趣现象：随着模型和工具变好，很多总监、VP 甚至 SVP 级别的人开始亲自动手尝试构建东西，每周互相交流"周末做了什么"——这在以前是不发生的 <button class="pd-ts" data-t="59:43" data-who="Unknown" data-en="So it sounds like it's almost like if you're juggling stuff you're given like two extra balls which is like now you both the accountability communicating upwards with execs owning the business goals while doing everything else in terms of like running a now probably larger team being able to deep dive into the details so keeping yourself to date so yeah well I guess it kind of makes sense that there's a trajectory where if the longer you work in an organization the more context you'll have the more ready you often become absolutely absolutely and I think an interesting" aria-label="回原文"></button>。

## 认知投降与互相放大

Addy 提出两个概念。[[认知债务|认知债务]]：越用 AI，你对问题的记忆和理解能力越被侵蚀。[[认知投降|认知投降]]：盲目接受 AI 的输出作为自己的答案，批判性思维退场 <button class="pd-ts" data-t="61:03" data-who="Unknown" data-en="So the more that you use AI, it's sort of the erosion of your ability to have good memory and have good understanding of the problems that you're working on. And the natural follow-up to that is cognitive surrender, which is where you blindly give in to whatever the AI says as your answer." aria-label="回原文"></button>。

一年前，智能体还会发"我在思考"的消息，你能跟上它的推理节奏。现在用 Claude Code 或 Codex，可能 20 到 30 个子智能体已经跑完了，你不可能逐个点开看 <button class="pd-ts" data-t="63:04" data-who="Unknown" data-en="It's like every few seconds something coming. Yeah. And now if you're using Claude Code or Codex, it's very possible that 20 or 30 sub-agents have fired." aria-label="回原文"></button>。他的应对策略是两步：第一，确保拿到最终决策摘要并通读——如果没有，就主动要求生成；第二，警惕模型因为上下文窗口用完而对决策过程"胡说八道" <button class="pd-ts" data-t="63:19" data-who="Unknown" data-en="I am not going to click through 30 of those things to read through their trajectories, but I do make sure that I do two things. The first thing I do is I try to make sure that if there was a summary at the very end, here are all the decisions that were made." aria-label="回原文"></button>。

更根本的解法他叫"[[互相放大|互相放大]]"（mutual amplification）：让智能体记录每次会话中的决策、遇到的摩擦、处理问题的独特方式。你作为工程师保持好奇心去读这些东西——不是逐 token 跟踪，而是把握重要决策 <button class="pd-ts" data-t="64:51" data-who="Unknown" data-en="And Peter Steinberger wrote about it. Boris Cherny wrote about it, about running loops. A lot of us are trying to figure out what loops exactly are." aria-label="回原文"></button>。

## 循环工程与软件工厂

[[循环工程|循环工程]]是"[[软件工厂|软件工厂]]"路线的一个环节。软件工厂的意思是：你不只是写 prompt 让模型生成代码，而是构建一个系统，能自动完成 prompt、生成、测试、验证 <button class="pd-ts" data-t="65:10" data-who="Unknown" data-en="Where are you at with that? A good way to think about, so loops are part of this journey we are on to effectively create software factories or, you know, some people might call them... Software factory meaning like a thing where, you know, like it, you give some instructions, you're like, in a factory, like I would like to produce a car and then there's a fully automated factory and the car comes out." aria-label="回原文"></button>。这是软件抽象层的又一次上升 <button class="pd-ts" data-t="65:47" data-who="Unknown" data-en="You're building the system that can do the prompting and generate the outcome, do the testing and verification for you. And it's effectively the next step of, you know, every phase of software evolution is just like a rising tide of abstractions." aria-label="回原文"></button>。

但 Addy 强调必须有[[护栏|护栏]]：哪些变更触及系统关键部分、需要人工审查，系统要能标记出来。如果让循环无限制地构建一切，不控制爆炸半径和质量，就是灾难配方 <button class="pd-ts" data-t="66:14" data-who="Unknown" data-en="How are you making sure things aren't going off the rails? And so I think that you have to be very intentional with, okay, well, what are the parts of this where you're keeping the human in the loop?" aria-label="回原文"></button>。而且软件不像汽车——造完就完了；软件发布到生产环境才是bug真正出现的时候，所以工厂必须连上生产环境的遥测数据、用户反馈，形成闭环 <button class="pd-ts" data-t="67:02" data-who="Unknown" data-en="But one thing that I keep thinking that is off on this analogy is like, okay, in a factory, you produce a thing. It could be a car, it could be a screw, it could be something." aria-label="回原文"></button>。

他自己的一个实际案例：有个应用允许用户提交 bug 报告，以前他手动逐个看、挑优先级。现在把 Google Analytics、托管商日志、用户报告等多维数据接进去，系统能综合判断——比如某个视图在印度用户中特别慢、而印度流量又很大——自动调整优先级并实施修复 <button class="pd-ts" data-t="69:39" data-who="Unknown" data-en="And may that be logs or errors or all those things. Yeah, so I have one app where I allow people to submit issues to it if they run into any problems. And historically..." aria-label="回原文"></button>。

## 工程师的 alpha 是什么

Ryan Dahl 说"人类写代码的时代结束了"，Addy 不否认写语法这件事在消失 <button class="pd-ts" data-t="72:05" data-who="Unknown" data-en="That's not to say software engineers don't have work to do, but writing syntax directly is not it. And a lot of our time spent, I remember when I interviewed people at Uber, I would tell them like, well, we're going to spend at least 50% writing code, so we're testing you on writing code." aria-label="回原文"></button>。但他用"alpha"（优势）来定义工程师的核心价值：当前模型不擅长的事情就是你的 alpha，而且这个 alpha 会随着模型升级而衰减，所以你必须不断找到新的 alpha <button class="pd-ts" data-t="72:25" data-who="Unknown" data-en="And what do you see the essence of software engineers, builders, AI engineers, however you call them, be? I always go back to what is alpha? So my definition of alpha is advantage, right?" aria-label="回原文"></button>。

他认为"品味"是当前最抗衰减的 alpha 之一：智能体能判断代码是否匹配规范，但没法判断一个东西是否"好"——好意味着用户体验出色、让人想回来用 <button class="pd-ts" data-t="73:05" data-who="Unknown" data-en="I'd push back on that. An agent can tell you if a thing looks correct, if it's matching a spec. It doesn't necessarily mean it can tell you what's good." aria-label="回原文"></button>。更深层的 alpha 是"问责"（accountability）：Chromium 代码库里每个关键目录都有 owner's file，上面列着对那部分系统负责的人。他们不一定写了每一行代码（以后更多是智能体写的），但他们理解这个领域、决定什么能发布什么不能、什么该推迟 <button class="pd-ts" data-t="74:12" data-who="Unknown" data-en="It's one of the largest code bases in the world. And it's sufficiently complex that for every key part of that system, you will have a directory with an owner's file." aria-label="回原文"></button>。

最后，他认为工程职业不会消亡，因为历史上每次自动化都消灭了一些工作又创造了新的工作；而且每当我们让创建软件变得更简单，软件的总量就指数级增长——构建者的总可触达市场正在扩张 <button class="pd-ts" data-t="75:52" data-who="Unknown" data-en="And I think there's two related notes to this topic. You know, every time that we've made it easier to create software, we've exponentially created more of it. So the total addressable market for builders is happening right now." aria-label="回原文"></button>。他对职业转型的建议是：不要只盯着工程这个狭隘视角，去培养产品感、技术布道能力、市场意识——当角色边界变得模糊时，跨界能力就是优势 <button class="pd-ts" data-t="88:08" data-who="Unknown" data-en="What do you think will be important in the next couple of years to stay at the front, like the meat of the industry? What we're very likely to see happen next with engineering careers, as well as product and other roles, is the unbundling of these careers." aria-label="回原文"></button>。

## 本集带走
- **防认知投降的两步法**：拿到智能体的决策摘要并通读；让智能体记录决策和摩擦，你保持好奇心去读，而不是逐 token 跟踪。
- **循环工程必须有护栏**：让系统自动标记触及关键部分的变更、要求人工审查；不控制爆炸半径的自动化是灾难配方。
- **工程师的 alpha 在品味和问责**：智能体能判断"对不对"，但判断不了"好不好"；代码可以由智能体写，但必须有人对每个模块理解、把关、负责。
- **连接多维信号做优先级**：不要只靠单一反馈源，把遥测数据、用户报告、流量分析接在一起，让系统综合判断该修什么。
- **职业建议——跨界**：不要只做工程师，去培养产品感、UX 感、布道能力，角色边界正在模糊。

<div class="pd-sec">全部金句 <span>8 条</span></div>

> <span class="qz">我想说有时，我不知道这是否有争议，很少有开发者理解内存管理。</span>  
> *I would say sometimes, I don't know if it's controversial, that very few developers understand memory management.*  
> <span class="qm">—— Addy Osmani · [28:45]</span> ^q1

> <span class="qz">人类惊人地简单。</span>  
> *Humans are shockingly simple.*  
> <span class="qm">—— Addy Osmani · [42:35]</span> ^q2

> <span class="qz">所以你越多地使用 AI，它就有点像是对你拥有良好记忆力和理解你正在解决的问题的能力的一种侵蚀。</span>  
> *The more that you use AI, it's sort of the erosion of your ability to have good memory and have good understanding of the problems that you're working on.*  
> <span class="qm">—— Addy Osmani · [60:53]</span> ^q3

> <span class="qz">现在如果你正在使用 Claude Code 或 Codex，很有可能已经启动了 20 或 30 个子智能体。</span>  
> *And now if you're using Claude Code or Codex, it's very possible that 20 or 30 sub-agents have fired.*  
> <span class="qm">—— Addy Osmani · [63:04]</span> ^q4

> <span class="qz">但是如果只是让你的循环构建所有东西，而在爆炸半径周围没有任何护栏，在关于你如何看待质量的周围没有任何护栏，我认为这是灾难的配方。</span>  
> *But simply just having your loops build everything without having some guardrails around the blast radius, without having guardrails around how you think about quality, I think is a recipe for disaster.*  
> <span class="qm">—— Addy Osmani · [66:33]</span> ^q5

> <span class="qz">智能体可以告诉你一件事看起来是否正确，它是否匹配规范。它不一定意味着它能告诉你什么是好的。</span>  
> *An agent can tell you if a thing looks correct, if it's matching a spec. It doesn't necessarily mean it can tell you what's good.*  
> <span class="qm">—— Addy Osmani · [73:05]</span> ^q6

> <span class="qz">你知道，每当我们让创建软件变得更容易时，我们就指数级地创造了更多的软件。</span>  
> *Every time that we've made it easier to create software, we've exponentially created more of it.*  
> <span class="qm">—— Addy Osmani · [75:53]</span> ^q7

> <span class="qz">我们很可能会在接下来的工程职业生涯，以及产品和其他角色中看到这些职业生涯的解绑。</span>  
> *What we're very likely to see happen next with engineering careers, as well as product and other roles, is the unbundling of these careers.*  
> <span class="qm">—— Addy Osmani · [88:08]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-05-28-beyondcoding-addy-osmani-top-tier-software-engineers|从看护智能体到认知投降：工程师该守住什么]]<span class="pd-rz">同概念:智能体 (agent)、认知债务 (cognitive debt)、认知投降 (cognitive surrender)</span>
- [[2026-07-09-beyondcoding-cracked-solo-dev-why-the-fastest-enginee|氛围编码 vs 氛围工程：智能体时代谁被淘汰]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、vibe coding</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)</span>

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
  // 故再兜一条 history.length>1(站内点进必有返回历史)。命中「直开」给 body 打 .pd-direct,CSS 切显隐。
  function direct(){
    var ref = document.referrer || '';
    var fromSite = (ref.indexOf(location.origin) === 0) || history.length > 1;
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
