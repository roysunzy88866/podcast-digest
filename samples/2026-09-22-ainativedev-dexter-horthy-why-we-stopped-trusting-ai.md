---
title: 软件工厂的教训：不读代码的四五个月后，我们重写了整个产品
podcast: The AI-Native Dev
date: 2026-09-23
source_url: undefined
duration: "56:10"
type: episode
cover: "#64748b"
image: "/covers/2026-09-22-ainativedev-dexter-horthy-why-we-stopped-trusting-ai.jpg"
description: Human Layer CEO 兼联合创始人 Dex Horthy 复盘「关灯开发」实验的失败，主张今天仍要读代码，并谈规划杠杆、可维护性与软件工厂。
host: "[[Simon Mayfor]]"
cohosts: ["[[Dex Horthy]]"]
companies: ["[[Human Layer]]"]
concepts: ["[[软件工厂]]", "[[智能体]]", "[[上下文工程]]", "[[规范]]", "[[计划]]", "[[代码审查]]", "[[垃圾话]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-09-22-ainativedev-dexter-horthy-why-we-stopped-trusting-ai.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-22-ainativedev-dexter-horthy-why-we-stopped-trusting-ai#post","headline":"软件工厂的教训：不读代码的四五个月后，我们重写了整个产品","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-22-ainativedev-dexter-horthy-why-we-stopped-trusting-ai","mainEntityOfPage":"https://talk.solomind.cc/2026-09-22-ainativedev-dexter-horthy-why-we-stopped-trusting-ai","description":"Human Layer CEO 兼联合创始人 Dex Horthy 复盘「关灯开发」实验的失败，主张今天仍要读代码，并谈规划杠杆、可维护性与软件工厂。","datePublished":"2026-09-23","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-22-ainativedev-dexter-horthy-why-we-stopped-trusting-ai.jpg","about":[{"@type":"Person","name":"Simon Mayfor"},{"@type":"Person","name":"Dex Horthy"},{"@type":"Organization","name":"Human Layer"},{"@type":"Thing","name":"软件工厂 (software factory)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"上下文工程 (context engineering)"},{"@type":"Thing","name":"规范 (spec)"},{"@type":"Thing","name":"计划 (plan)"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"垃圾话 (slop)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"软件工厂的教训：不读代码的四五个月后，我们重写了整个产品","item":"https://talk.solomind.cc/2026-09-22-ainativedev-dexter-horthy-why-we-stopped-trusting-ai"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>软件工厂的教训：不读代码的四五个月后，我们重写了整个产品</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 软件工厂的教训：不读代码的四五个月后，我们重写了整个产品

<div class="pd-byl"><b>Dex Horthy</b> · Human Layer CEO 兼联合创始人 · 2026-09-23</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-22-ainativedev-dexter-horthy-why-we-stopped-trusting-ai.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">实验室比我们所有人拥有多得多的 alpha，所以如果他们说这是你应该做的事，那你就应该去做。</div><div class="a">— Dex Horthy <button class="pd-ts" data-t="09:30" data-who="Dex Horthy" data-en="the labs have way more alpha than any of us, so if they say this is a thing you should do, then you should go do it." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Simon Mayfor]] · [[Dex Horthy]]
>
> **公司** [[Human Layer]]
>
> **概念** [[软件工厂]] · [[智能体]] · [[上下文工程]] · [[规范]] · [[计划]] · [[代码审查]] · [[垃圾话]]

这一集聊的是「[[软件工厂|软件工厂]]」——让 AI [[智能体|智能体]]大量替你写代码的开发方式——到底该怎么用、什么时候会翻车。主角是 [[Dex Horthy|Dex Horthy]]，[[Human Layer|Human Layer]] 的 CEO 兼联合创始人，也是广为流传的「12 factor 智能体」一文的作者。他这一集最大的价值在于：他和团队真刀真枪地做过最激进的「关灯开发」（lights off development，即人不看代码、只看[[计划|计划]]就放行）实验，跑了几个月，最后把整个产品推倒重写。

## 实验：只审计划、不读代码，四个月后代码库报废

事情始于 Opus 4 和 Claude Agent SDK 发布——那是你第一次能把 Claude 当作小型智能体循环，嵌进一个更大的、更确定性的软件里 <button class="pd-ts" data-t="03:33" data-who="Dex Horthy" data-en="Like what did you believe before and what's the uh what's the uh turnabout? Yeah, I mean the the journey kind of starts around you know uh around when Opus 4 came out." aria-label="回原文"></button>。当时「实验室比我们所有人拥有多得多的 alpha，所以如果他们说这是你应该做的事，那你就应该去做」<button class="pd-ts" data-t="09:22" data-who="Dex Horthy" data-en="Yeah, I mean this thing happens with models as new models come out and get smarter, you you never know when the singularity is, and the only way to like stay ahead is like try to live in the future." aria-label="回原文"></button>。Dex 想活在未来，于是团队决定：仍然保留 pull request（代码合并请求），但规则变成「如果你读了计划，代码就没那么重要了」。

问题立刻显现。首先，当时的计划里包含了所有将要写的代码，读一份计划几乎等于读一遍内联 diff；而实现总会漂移，结果大团队「基本上审查了几乎相同形状的代码两次」，做了双倍的工作 <button class="pd-ts" data-t="09:50" data-who="Dex Horthy" data-en="Um, ton of ton of issues with that. Uh, first of all, the plans contained all of the code that was gonna be written. Uh, and so you would read this plan of every single every single it was like literally like inline diffs." aria-label="回原文"></button>。

更要命的是架构失控：他们让模型自己决定系统架构，最后得到一个六层服务的怪物——桌面应用经 Rust 连 socket，后端是 Golang 守护进程，守护进程启动 Claude Code 会话，会话再启动 MCP 服务器处理审批，MCP 又回调前端写 SQLite……

一条审批要在这个链条里绕一整圈 <button class="pd-ts" data-t="11:30" data-who="Dex Horthy" data-en="It was like, hey, how would you solve this? Well, well, I'd make a Golang daemon and then I would use a Unix socket, and then I would connect these things, and then when we run the MCP, we ended up with this like system of like six different services where you have like a desktop app that talks to a socket over Rust, and then that that's like a Golang daemon on the back end, which then launches and manages Claude code sessions, which then launch MCP servers to handle the approval system, and then those MCP servers call back to the like front end and like put things in a SQLite database via Unix socket, and then that shows in the U and the user approves something that goes back to the MCP, back to Claude, back to the Golang daemon, and back to the UI." aria-label="回原文"></button>。「如果你让模型自己决定架构，它就会变成这样一个极其复杂的系统」。

跑了四五个月，团队才意识到代码库已经没法用了：越来越慢，这边改一下、那边出回归。于是从零重建，而重建的头两个星期，联合创始人 Kyle 在 VS Code 里手动敲每一个字符——连 Cursor 都不用——铺好新版本的数据架构 <button class="pd-ts" data-t="12:39" data-who="Dex Horthy" data-en="But I think there's a difference between saying, hey, models can't architect and models can't architect yet, or they can't architect if you don't give them enough guidance." aria-label="回原文"></button>。这次重建选的路线（基于 Electric SQL 的单向数据流、实时同步数据库）反而很稳固，「今天构建的任何软件都应该使用一种实时同步数据库，客户端只需连接上去就能实时拿到更新」。

## 规划是杠杆：用「预期痛苦」决定对齐多少

实验的教训不是「计划无用」，而是计划的价值要重新理解。2025 年 7 月写计划文件最大的作用，其实是「一种非常可靠的方式让模型工作得更久」——它是意图压缩的第一个版本，让工作可恢复，能从干净的上下文窗口重启（当时模型超过约 10 万 token 的上下文质量就明显变差，Dex 称之为「笨区」）<button class="pd-ts" data-t="04:40" data-who="Dex Horthy" data-en="A lot of people just write plans because they put plan mode in the thing or they've read something online and they found some skills and hey, we're gonna make a plan." aria-label="回原文"></button>。

如今他把规划想成一道杠杆曲线。一头是两句 prompt 的 YOLO（约 50% 概率返工，即跟模型再来几个回合），另一头是全部手写代码（智能体致错概率为零），中间是花五小时手写[[规范|规格说明]]（约 10%）<button class="pd-ts" data-t="18:17" data-who="Dex Horthy" data-en="Um, and so like the the other side of this though is like you don't want to overplan, right? So like I can YOLO a two-sentence prompt and there's a 50% chance I'll have to rework it." aria-label="回原文"></button>。

判断标准是「预期痛苦」：按钮颜色不对？一条 prompt 就能修，从不为此争论；但「如果数据库 schema 错了，那我们很可能得把它扔掉重头再来」——所以要提前在 schema 上对齐 <button class="pd-ts" data-t="19:31" data-who="Dex Horthy" data-en="Like I never argue with a model about like how what color a button is gonna be, or something like that, because I know that if it's not the color I like, I'll just send one prompt and it will fix it." aria-label="回原文"></button>。根据任务的规模、代码库的复杂度、里面有多少模型可能模仿的坏模式，决定落在这条曲线的哪个位置，而且要大量练习建立直觉。

对「表达不出意图」这个老难题，他的解法是用 AI 反过来拷问自己：打开语音模式随口絮叨 60 秒说出粗略想法，然后让 AI「不知疲倦地访谈用户」——「这是你要的，这里是一些备选方案，你确定不想要这些吗」——沿着决策树把欠指定的东西问清楚 <button class="pd-ts" data-t="22:28" data-who="Dex Horthy" data-en="And uh and I think the the a good AI assisting assisted planning process involves like having the model get enough context to understand what's going on and enabling a user, the fastest way to get a good description of your intent is to just like off the cuff say kind of what you want." aria-label="回原文"></button>。

## 为什么今天还得读代码：可维护性没有快速验证器

主持人的反驳很典型：如果意图提取对了、验证器定义对了，还需要读代码吗？Dex 承认好的规格加验证器威力巨大——给模型一个它能自己衡量的反馈回路（他称之为「反压」），它「会为你移山倒海」，还能并行开工更多任务 <button class="pd-ts" data-t="24:49" data-who="Dex Horthy" data-en="Like these are they're talking about cases in which I am dictating an algorithm to you, right? Yeah. And so yeah, if you give I mean the the the reason why I think specs are so powerful and people maybe get a little bit like one-shotted by a good spec with verification is like if you give the model a good way to get feedback on what it's doing, uh, and to like a hail climb against some objective that it itself can measure, whether it's qualitative or quantitative, yeah, um it will move mountains for you." aria-label="回原文"></button>。

他自己就在做一个完全不读代码的实验：用代码搜索测试框架跑一堆子智能体，在成本、速度、准确率的帕累托前沿上爬山，45 个代码搜索评测——一行代码都没读。如果实验成功，再把算法讲给模型、转成规格、用干净架构重写一遍，清掉满地 slop（[[垃圾话|垃圾代码]]）<button class="pd-ts" data-t="27:28" data-who="Dex Horthy" data-en="Uh, or you cannot say here's all the information we have so far, and so you have to get really creative about how do you split things up and how do you merge them back together, and so I'm kind of taking like an evolutionary algorithm sort of approach of like, hey, cool, go do a bunch of subagents, have them try different things, try them hill climb different dimensions of the Pareto frontier for cost and speed and accuracy and 45 different code search evals right now and more coming." aria-label="回原文"></button>。

但原型可以不读，产品不行。他的判断依据是 RL（强化学习）训练的逻辑：要在某件事上训练模型，需要 RL 环境和「Oracle」——一个能快速判断对错的东西。

而「可维护性没有快速的 Oracle」：一个系统不可维护，要两个月后才知道 <button class="pd-ts" data-t="28:50" data-who="Dex Horthy" data-en="You need a thing that can verify whether the product meets the needs of the user. And maintainability, you don't find out something is unmaintainable until two months later." aria-label="回原文"></button>。他提到一个 slop code bench 基准（威斯康星大学的实验室出的）：让模型在一个不断继承的代码库上连续写新功能，GPT-5.5 在五月只拿了 14.8%，他们帮跑的第一轮 Astra 是 16.3%——「模型在『能否长期维护一个代码库』这个维度上正在变好，但没有大家想的那么快」<button class="pd-ts" data-t="29:48" data-who="Dex Horthy" data-en="Uh but we've been like, you know, providing providing runs and doing stuff like this. And Astra got in the first run we did was like 16.3%. So like the models are getting better in this dimension of like, can they maintain a code base over time?" aria-label="回原文"></button>。

「我们说过 GPT-7 会解决所有这些问题。现在是 GPT-6」<button class="pd-ts" data-t="30:03" data-who="Dex Horthy" data-en="But not as fast as everyone thinks. Like I said, we said GPT-7 would solve all of this. We're GPT-6 and like we are getting we are RLing and hill climbing in other domains, but like the frontier of like model maintaining code base over time does not appear to be getting better that quickly." aria-label="回原文"></button>。他还点名了 Steve Yege：网上到处宣扬「还在读代码你就不会成功」，结果上周自己承认用 Fable 建的系统复杂到它自己都调试不了 <button class="pd-ts" data-t="14:53" data-who="Dex Horthy" data-en="Uh, but I am gonna call him out for going running around the internet and telling everybody, hey, if you're still trying to read the code, you're not gonna make it, and uh like just let the models cook kind of thing." aria-label="回原文"></button>。

## 软件工厂 ≠ 传统工厂：坏代码是复利式的污染

两边其实在「复利式工程」上完全一致：要持续投资「那个构建东西的东西」。Human Layer 内部每天晚上跑四五个由提示词驱动的检测工作流（有的确定性、有的非确定性，比如用 lint 工具拉警告），跑在 crons 和 GitHub actions 上，每天早上醒来就有五个让代码库好一点点的 pull request <button class="pd-ts" data-t="35:17" data-who="Dex Horthy" data-en="It's like every night we have four or five different um people call them agents. It's the same harness with a different user message, basically. Right." aria-label="回原文"></button>。

但 Dex 警告最常见的反模式：有人兴奋地说要建软件工厂，把一切推倒从头设计。「大设计前置永远会输给快速迭代、每天变好 1%」<button class="pd-ts" data-t="37:46" data-who="Dex Horthy" data-en="And they kind of throw everything out and they say, Cool, let me design this whole thing from scratch, and it's gonna have this compounding thing, and we will never have to read the code and whatever it is." aria-label="回原文"></button>。

更关键的区别是：传统工厂出一辆坏车，买家自己处理；「如果你在你的软件工厂里交付了坏代码，它会降低未来每一件经过那个工厂的工作的质量，因为模型会看到更多坏模式」<button class="pd-ts" data-t="38:30" data-who="Dex Horthy" data-en="Whoever was gonna buy that car or whatever is gonna is gonna deal with it. But like if you ship bad code in your software factory, it degrades every future piece of work that goes through that factory because there's more bad patterns for the model to see." aria-label="回原文"></button>。头号优先级是止血——先关上房子的窗户，再开空调。

而人类在环审查的副产品是「废气」：每当人不得不在智能体的 PR 上留言「这是错的，我们不这么做」，或者团队成员在提示词里骂模型做错了——这些都要虹吸出来，分析全团队的会话轨迹，找出人们在哪儿沮丧，回头改进技能和工作流。「如果你没有变得更好，那你就在变得更糟。」做好了这件事，你就会「从关心你的位置转向关心你的速度」，从造车转向造工厂。

## 永远要审查点什么：不做 token 农场

代码会一直是真相来源吗？Dex 不预测时间线。

他服务很多财富 500 强客户，卖点恰恰是「不要为未来抵押你的代码库」——让你跑得最快，但不放弃控制权和品味。旧金山一个晚宴上的数据很说明问题：AI 写 100% 代码的，全场举手；还在读代码的，仍有约一半；另一半靠 70 条手写自定义 linter 规则之类的机制换发布信心 <button class="pd-ts" data-t="43:02" data-who="Dex Horthy" data-en="Like everybody, hand up. Raise your hand if you're still reading the code, and it was like 50% of the people. The other 50% have been like, no, I made 70 Linter rules custom by hand, and I I caught every single anti-pattern, or whatever whatever, whatever your approach is that gives you the confidence to ship it." aria-label="回原文"></button>。

晚宴上一位老手创始人的话 Dex 现在几乎每天都在想：「审查某样东西大概永远都会有超额收益。我们不知道那是什么。

」如果你什么都不审查，只是让 AI 去煮，「你会得到和其他所有人一样的产品、一样的邮件、一样的公司」——那种纯烧 token 的「token 农场」毫无差异化 <button class="pd-ts" data-t="43:49" data-who="Dex Horthy" data-en="And uh one of the founders there, um who is a veteran of a lot of this stuff, kind of said one of the most interesting things that I think about almost every day now, which is like there will probably always be alpha in reviewing something." aria-label="回原文"></button>。Claude 做的演示文稿就是现成例子：刚出来人人惊叹，现在每个都长得像 Claude 演示文稿。当下值得审查的还是代码，未来可能是别的东西。

至于护城河，Dex 觉得「新的护城河是品味」这句话太模糊，更可靠的说法是：比任何人都更理解问题、更理解客户——这是你能在别人做不到的维度上给智能体做[[上下文工程|上下文工程]]的前提。他真正的两个瓶颈判断：一是让模型尽快把你的品味和偏好「大脑榨干」；二是如果你还在读代码，就发明比逐行读快 50-80%、但信心几乎不打折的中间形态——让模型反过来给人类做上下文工程，用最快的方式向你解释它做了什么 <button class="pd-ts" data-t="50:57" data-who="Dex Horthy" data-en="And then if you're if you're still reading the code, there's like a a corollary of what is the fastest, most efficient, most visually effective way for a model to tell me what it has done." aria-label="回原文"></button>。

主持人则押注软件开发将围绕 skills（技能）展开、代码角色递减——就像今天你用 Java 时不在乎垃圾回收怎么发生。12 个月后 Dex 确定不变的：上下文工程永远成立，因为「只要我们还在使用基于 transformer 的 LLM，使用更少的上下文你就会得到更好的质量，这就是它们工作原理的数学本质」<button class="pd-ts" data-t="52:06" data-who="Dex Horthy" data-en="Like the context engineering thing I think will always be true. Yeah, first principle. As long as we're using as long as we're using transformer-based LLMs, that's just like the math of how they work, and you will get better quality if you use less context, so you'll always be able to like engineer things to get engineer things to get better results." aria-label="回原文"></button>。他会变的赌注：整个软件工厂技术栈会像 Kubernetes 生态那样分解成开放接口和开放组件，围墙花园（全栈押注 Claude 一家）虽诱人，但「开放正在以比任何人目前准备注意到的更快的速度追赶上来」。

## 本集带走

- **别学「只审计划不读代码」**：计划会漂移，大团队等于把同样形状的代码审两遍；放任模型定架构，几个月后就是推倒重写。
- **用「预期痛苦」决定规划投入**：按钮颜色错了改一条 prompt 就行，数据库 schema 错了要重来——只在改起来最痛的地方提前对齐。
- **给模型装「反压」**：一份带验证器的规格，让模型能自己衡量对错并爬山，它就能长时间无人值守干活、还能并行开多路。
- **软件工厂里坏代码是污染源**：智能体会模仿代码库里的坏模式，放进来一次，未来每个任务都变差；先止血，再优化工厂。
- **把人的纠偏虹吸成资产**：每次你在 PR 上留言纠错、每次团队成员骂模型，都抽出来分析，回头改进技能和工作流——不做这个，你就在变糟。
- **永远审查点什么**：什么都不审就是 token 农场，产出和所有人一样；今天审代码，未来可能是别的，但那个「多出来的东西」就是你的差异化。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">实验室比我们所有人拥有多得多的 alpha，所以如果他们说这是你应该做的事，那你就应该去做。</span>  
> *the labs have way more alpha than any of us, so if they say this is a thing you should do, then you should go do it.*  
> <span class="qm">—— Dex Horthy · [09:30]</span> ^q1

> <span class="qz">所以如果你写的代码是你能想到的最聪明的代码、最巧妙的东西，那么按定义，你就不够聪明去调试它。</span>  
> *And so if you write code that is like the smartest code, the most clever thing that you can come up with, you are by definition not smart enough to debug it.*  
> <span class="qm">—— Dex Horthy · [14:12]</span> ^q2

> <span class="qz">不，不是你的 PR 太多，是你的坏 PR 太多，因为你让人们在写代码的时候把脑子关掉了。</span>  
> *no, you don't have too many PRs, you have too many bad PRs because you're letting people turn off their brains uh when they're coding.*  
> <span class="qm">—— Dex Horthy · [18:05]</span> ^q3

> <span class="qz">规划全都是关于杠杆的。你怎么为这个任务找到甜点位？</span>  
> *Planning is all about leverage. How do you find the sweet spot for the task?*  
> <span class="qm">—— Dex Horthy · [19:52]</span> ^q4

> <span class="qz">软件可维护性没有快速的 Oracle（验证器）。</span>  
> *there's no fast oracle for software maintainability.*  
> <span class="qm">—— Dex Horthy · [28:55]</span> ^q5

> <span class="qz">如果你在你的软件工厂里交付了坏代码，它会降低未来每一件经过那个工厂的工作的质量，因为模型会看到更多坏模式。</span>  
> *if you ship bad code in your software factory, it degrades every future piece of work that goes through that factory because there's more bad patterns for the model to see.*  
> <span class="qm">—— Dex Horthy · [38:30]</span> ^q6

> <span class="qz">你基本上是在从关心你的位置转向关心你的速度。</span>  
> *You're you're basically shifting from like caring about your position to caring about your velocity.*  
> <span class="qm">—— Dex Horthy · [40:23]</span> ^q7

> <span class="qz">审查某样东西大概永远都会有超额收益。我们不知道那是什么。</span>  
> *there will probably always be alpha in reviewing something. We don't know what it is.*  
> <span class="qm">—— Dex Horthy · [43:45]</span> ^q8

> <span class="qz">但如果你什么都不审查，那你就只是让 AI 去煮，然后你会得到和其他所有人一样的产品、一样的邮件、一样的公司。</span>  
> *if you don't review anything, then you're just letting the AI cook and then you're gonna get the Same product, the same email, the same company that everybody else gets.*  
> <span class="qm">—— Dex Horthy · [43:53]</span> ^q9

> <span class="qz">只要我们还在使用基于 transformer 的 LLM，这就是它们工作原理的数学本质，使用更少的上下文你就会得到更好的质量。</span>  
> *As long as we're using transformer-based LLMs, that's just like the math of how they work, and you will get better quality if you use less context.*  
> <span class="qm">—— Dex Horthy · [52:08]</span> ^q10

> <span class="qz">我认为开放的阵营正在以比任何人目前准备注意到的更快的速度追赶上来。</span>  
> *I think that open is catching up faster than anyone is ready to notice yet.*  
> <span class="qm">—— Dex Horthy · [55:04]</span> ^q11

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact|TESL 智能体：让你的编码智能体自己越用越好]]<span class="pd-rz">同概念:代码审查 (code review)、智能体 (agent)、软件工厂 (software factory)</span>
- [[2026-09-21-howiai-how-warp-ships-2-000-prs-a-month-with-ai|Warp CEO 的软件工厂：2000 个 PR 一个月，人成了瓶颈]]<span class="pd-rz">同概念:代码审查 (code review)、智能体 (agent)、软件工厂 (software factory)</span>
- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同公司:Claude · 同概念:上下文工程 (context engineering)、智能体 (agent)、技能 (skills)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-31-talks-fighting-slop-with-slop-vaibhav-gupta-bo|用 AI 对抗 AI：一种不用读代码的编程语言 BAML]]<span class="pd-rz">同概念:垃圾代码 (slop)、智能体 (agent)</span>
- [[2026-08-09-talks-velocity-sickness-what-happens-when-your|速度病：当团队 10 倍速写代码却推不出产品，怎么治]]<span class="pd-rz">同概念:上下文工程 (context engineering)、智能体 (agent)</span>
- [[2026-08-19-pragmatic-from-chrome-devtools-to-ai-engineering|Addy Osmani：从造浏览器到对抗认知投降]]<span class="pd-rz">同概念:智能体 (agent)、软件工厂 (software factory)</span>

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
