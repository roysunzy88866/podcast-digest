---
title: "Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出"
podcast: The AI-Native Dev
date: 2026-08-26
source_url: undefined
duration: "57:30"
type: episode
cover: "#64748b"
image: "/covers/2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang.jpg"
description: Anthropic 应用 AI 团队的 Lamus Mukta 讲解 Claude Tag 与 Claude Code 的区别、内部大规模吃狗粮的经验，以及「做梦」记忆整理功能。
host: "[[Guy Pajani]]"
cohosts: ["[[Simon Maple]]", "[[Lamus Mukta]]"]
companies: ["[[Anthropic]]"]
concepts: ["[[Claude Tag]]", "[[Claude Code]]", "[[智能体]]", "[[沙箱]]", "[[记忆]]", "[[dreaming]]", "[[智能体身份]]", "[[Managed Agents]]", "[[harness]]", "[[Slack]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/covers/2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang#post","headline":"Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang","mainEntityOfPage":"https://talk.solomind.cc/2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang","description":"Anthropic 应用 AI 团队的 Lamus Mukta 讲解 Claude Tag 与 Claude Code 的区别、内部大规模吃狗粮的经验，以及「做梦」记忆整理功能。","datePublished":"2026-08-26","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang.jpg","about":[{"@type":"Person","name":"Guy Pajani"},{"@type":"Person","name":"Simon Maple"},{"@type":"Person","name":"Lamus Mukta"},{"@type":"Organization","name":"Anthropic"},{"@type":"Thing","name":"Claude Tag"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"dreaming"},{"@type":"Thing","name":"智能体身份 (agent identities)"},{"@type":"Thing","name":"Managed Agents"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"Slack"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出","item":"https://talk.solomind.cc/2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出

<div class="pd-byl"><b>Lamus Mukta</b> · Anthropic · 2026-08-26</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">自从我们开始在内部使用 Claude Tag 以来，我们的产品团队，比如产品工程团队，有 65% 的 PR 是由 Claude Tag 打开的。</div><div class="a">— Lamus Mukta <button class="pd-ts" data-t="10:35" data-who="Lamus Mukta" data-en="Since we've started using Claude Tag internally, our product teams, um, like product engineering teams have 65% of their PRs are opened by Claude Tag." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Guy Pajani]] · [[Simon Maple]] · [[Lamus Mukta]]
>
> **公司** [[Anthropic]]
>
> **概念** [[Claude Tag]] · [[Claude Code]] · [[智能体]] · [[沙箱]] · [[记忆]] · [[dreaming]] · [[智能体身份]] · [[Managed Agents]] · [[harness]] · [[Slack]]

这一集聊的是 [[Anthropic|Anthropic]] 刚发布的产品 [[Claude Tag|Claude Tag]]——一个住在 [[Slack|Slack]] 里的「主动出击的队友」。说话的主角是 [[Lamus Mukta|Lamus Mukta]],Anthropic 应用 AI 团队的技术成员，这个团队夹在产品、研究和市场之间，他平时主要和初创公司创始人打交道 <button class="pd-ts" data-t="02:24" data-who="Lamus Mukta" data-en="Yeah, absolutely. Um, I'm Lames, I'm a member of technical staff Anthropic, and I sit in our applied AI team. So this is a team which sits between product, research, and go-to-market." aria-label="回原文"></button>。最能说明这东西分量的一句数据是：Anthropic 内部产品工程团队 **65% 的 PR 已经是由 Claude Tag 开出的** <button class="pd-ts" data-t="10:35" data-who="Lamus Mukta" data-en="Um and just to just to frame it in terms of the impact that we've seen internally. Since we've started using Claude Tag internally, our product teams, um, like product engineering teams have 65% of their PRs are opened by Claude Tag." aria-label="回原文"></button>。

## Claude Tag 是什么：从「你问它答」到「它来找你」

Claude Tag 拥有 [[Claude Code|Claude Code]] 那套你熟悉的连接器、工具和上下文，但多了两样东西：**主动性**和**持久性**——它能长时间执行一段工作，做完了再回来告诉你 <button class="pd-ts" data-t="03:00" data-who="Lamus Mukta" data-en="Yeah, absolutely. So Claude Tag is your proactive teammate, which you which meets you right where you work in Slack for now. And what's really special about pro about Claude Tag is it has all of the kind of connectors and tools and context that you're used to when you're using Claude Code." aria-label="回原文"></button>。

主持人的团队早就有「Slack 里 @ Claude」的用法：在 Slack 里讨论需求，再去 Linear 开票，然后让 Claude 实现、回来给个 PR。这和 Claude Tag 看起来很像，区别在底层 <button class="pd-ts" data-t="03:53" data-who="Lamus Mukta" data-en="Tagging Claude there and Claude Tag? Yeah, so I think um this is a great question because I think on the surface these things look really similar and it's actually some of the more intricacies underneath that differentiate these two products a bit." aria-label="回原文"></button>:

- **上下文范围更大**：Claude Tag 的[[记忆|记忆]]可以跨越频道，理解整个团队在做什么；权限配置得当，它还能搜索它所在的其他公共频道——比如从客服频道里把你根本看不到的问题背景捞出来 <button class="pd-ts" data-t="06:18" data-who="Lamus Mukta" data-en="So there's a lot of history and context. If configured as well, it can also have the ability to search other public channels that Claude Tag is in. So maybe you have like a customer support um channel where there's a bit more context on where this issue arose, and Claude Tag, given the permissions, could also access that information and surface it where maybe you might not even have that kind of visibility." aria-label="回原文"></button>。
- **主动发起**：普通 Slack 里的 Claude 是你问它才答；Claude Tag 有时会主动来找你，说有件事需要你注意 <button class="pd-ts" data-t="04:29" data-who="Lamus Mukta" data-en="Um the second is like often you would kind of go and trigger your um your agents by asking them questions and kind of Claude and Slack would reply. Claude Tag will actually like sometimes come and find you and tell you that something needs your attention." aria-label="回原文"></button>。
- **端到端闭环**：一条反馈进来，Claude Tag 可以先接住、@ 它认为该负责的人、自动开 Linear 工单、然后自己起一个[[沙箱|沙箱]](隔离运行代码的环境)、在你的仓库里写代码、验证结果、PR 就绪时 ping 你——全程不需要打开 Claude Code <button class="pd-ts" data-t="06:59" data-who="Lamus Mukta" data-en="So let's imagine in this case um a piece of feedback comes through. In the claude tag world, you could have it configured so that claude tag actually picks up the feedback first and tags everybody they think should be um responsible, like should be involved in the response to that." aria-label="回原文"></button>。你要想留人工关卡，可以明确配置「这些事必须先问我」<button class="pd-ts" data-t="07:48" data-who="Lamus Mukta" data-en="Um, it can also do things like verify the aspects of that and meet the uh original requirements from whatever ticket was raised in the first place. So I think what we see here overall is more proactivity end-to-end if you do want it to be able to run that process from kind of ticket to probably asking you if it w if you want it to execute the code first, if you want a human gate there, and then kind of seeing that PR through, um prompting people to review it, etc." aria-label="回原文"></button>。
- **跨职能协作**：客服工单可以顺手圈进销售负责人，产品方案出来再圈进工程师做代码审查——这种「多人协作」是纯 Claude Code 很难做到的 <button class="pd-ts" data-t="09:02" data-who="Lamus Mukta" data-en="Um that's really cool. And I think just to throw in one last uh difference on that new workflow, what you'll see if you kind of went and implemented this with Claude Tag is just the ability to enable this cross-functional workflow is really cool." aria-label="回原文"></button>。

## 工作流的真正变化：从单人会话到多人异步

用 Claude Code 时，你是在一个单人会话里：自己陈述目标、自己管理上下文、自己盯每一回合。Claude Tag 把这一切变得「无定形」：不围绕会话、不围绕个人 <button class="pd-ts" data-t="11:33" data-who="Lamus Mukta" data-en="Like we do have this perimeter, which is the a concept of a session, and that's where you're kind of stating what you're trying to achieve, um managing the context for that, and then you have some kind of like outcomes or or goals or loops that you're running." aria-label="回原文"></button>。工作公开发生在频道里，产品、销售同事从一开始就有可见性，想插话随时插 <button class="pd-ts" data-t="12:03" data-who="Lamus Mukta" data-en="So rather than me as the developer having to go and ping like some product folks or some um sales folks on something, I can get that embedded in the claw tag flow." aria-label="回原文"></button>。

节奏也更异步：你 ping 一下 Claude Tag,它可能几个小时后带着端到端做完的功能回来 <button class="pd-ts" data-t="12:58" data-who="Lamus Mukta" data-en="And that's really leaning into some of the model capabilities that have been unlocked with kind of recent iterations of models. And so what you see is like you kind of pin claude tag and it comes back to you maybe um a couple of hours later, having like built end-to-end this feature that you talked about." aria-label="回原文"></button>。**Claude Code 适合你想盯着[[智能体|智能体]]每个回合的时候;Claude Tag 适合长跑型任务** <button class="pd-ts" data-t="12:30" data-who="Lamus Mukta" data-en="The other thing is um it's a lot more asynchronous than what you'd achieve with clawed code. So I'd say that with clawed code, you're kind of it's great for when you kind of want to be there for every single turn of the agent." aria-label="回原文"></button>。

支撑这种信任的是能力曲线：大约**每四个月，智能体能自主运行的时间就翻一倍**，而且这条指数线近十年一直没断过 <button class="pd-ts" data-t="15:52" data-who="Lamus Mukta" data-en="Um so the the meter chart always shows us that roughly every four months, the amount of time that agents are able to run for autonomously is like doubling. And so this is from a sheer capability perspective, we're allowed, like we're able to trust these agents more because of the actual capability that's improving." aria-label="回原文"></button>。行为也在从外部框架(为了引导模型而写的脚手架代码)迁入模型本身——现在的模型会本能地先检查自己的工作，有工具时还会自己跑测试、建评估 <button class="pd-ts" data-t="17:36" data-who="Lamus Mukta" data-en="And I think when we talk about model capability, obviously, you know, the amount of time it runs for is one thing. But what what we see over time is like a lot of behaviors um which previously we'd kind of put in the harness are getting embedded into the models." aria-label="回原文"></button>。

与之对应，人的角色变了：**开发者的核心工作从写代码，变成「定义好什么叫成功」**——定义清楚了就交给模型，让它自己循环、让另一个智能体来审，直到审的人也认为完成 <button class="pd-ts" data-t="18:13" data-who="Lamus Mukta" data-en="Like you give the models the tools to verify their own work and they are better at kind of doing that themselves. And I think another pattern that we see in development today is that the behavior of the developer or the engineer is shifting much more towards how well can you define what success looks like in your case." aria-label="回原文"></button>。

## Claude Code 的起点：一条只收获六个表情的 Slack 帖子

Claude Code 最初是 Boris 的一个副业项目。他在 Slack 里分享时，**只收到六个表情回应**——Mukta 说这恰恰说明：数据不完美，没有完美流程能预判什么是好产品 <button class="pd-ts" data-t="27:06" data-who="Lamus Mukta" data-en="And the the funny thing is that originally I think when he shared uh this in a Slack post, it got like six reactions. Um which always tells you that like you just like data isn't perfect, you can't there's not like perfect processes for understanding like what good products look like, etc." aria-label="回原文"></button>。但几个人看到了潜力继续做，短时间内公司一半的人每周都在用它 <button class="pd-ts" data-t="27:26" data-who="Lamus Mukta" data-en="Um, but a couple of people like saw this and were really excited by it and continue to work on it. And over a short period of time, we saw like amazing adoption within the company, like half of the company using this like weekly." aria-label="回原文"></button>。

关键的转折点是模型变强：早期迭代「不太像智能体」，只能吐回代码块；后来模型能长时间调用工具、在代码库上高效工作、保持目标导向，采用率才真正起飞 <button class="pd-ts" data-t="27:33" data-who="Lamus Mukta" data-en="And over a short period of time, we saw like amazing adoption within the company, like half of the company using this like weekly. Um, another thing that's important here, and I think it's a really key principle when when you're developing products in this space, is that we saw a real takeoff in the adoption of this product once the models improved a little bit more to make it like really achievable to kind of work on these coding tasks for long periods of time." aria-label="回原文"></button>。由此得出的一条核心建议：**为模型未来的位置构建，别为它们今天的位置构建** <button class="pd-ts" data-t="28:10" data-who="Lamus Mukta" data-en="Uh they, you know, it it just was more similar to kind of just like getting like bit chunks of code back through, whereas later it really could start to like access different kinds of tools, work really efficiently over the code base, um, and like stay on top of a lot of context and stay goal goal-oriented." aria-label="回原文"></button>。Claude Tag 也是同样的逻辑——内部 PMF(产品市场契合)到了 65% PR 的程度，才推向外部 <button class="pd-ts" data-t="29:09" data-who="Lamus Mukta" data-en="Yeah, so I think it comes back to this idea that I think like I think like half, I think it was like half of the team that time were just like using clawed code every week, which is quite crazy like for a for a new product." aria-label="回原文"></button>。

## Anthropic 学到的教训：harness 会变小，记忆要够笨

Mukta 分享了两条花真金白银换来的经验：

- **新模型 ≠ 加更多提示和架构，往往是「少即是多」**。每次新模型出来，Anthropic 都重新审视脚手架，主动删东西——模型变强了，原来塞进框架的行为它自己会做，框架随时间反而变小 <button class="pd-ts" data-t="36:01" data-who="Lamus Mukta" data-en="And one thing that we think about a lot on the Claude Code side is every time that we have a new model, we've discussed kind of how those models themselves become more capable in certain dimensions." aria-label="回原文"></button>。
- **记忆系统别过度设计**。他们试过索引式记忆存储、专门规定读写方式的工具，结果发现模型被管得太死；换成[[Managed Agents|托管智能体]] API 里一个**简单的记忆文件系统**，让智能体用自己的文件系统和原生 bash、grep 工具去管理，效果反而更好 <button class="pd-ts" data-t="37:05" data-who="Lamus Mukta" data-en="And the solution we have in our managed agents API is like a very simple memory file system that just leans on agents' abilities like read and write to memory. And something I touched on on in that talk is that we tried a lot of different things in the past, like indexed memory stores or like tools that were very specific about how to read and write to memory." aria-label="回原文"></button>。

配套动作是持续评估：模型升级后要重跑评估，看哪些上下文、提示、技能现在反而是冗余的 <button class="pd-ts" data-t="38:23" data-who="Lamus Mukta" data-en="I'm really curious about the kind of like the context piece because or not sorry, the context piece, but the the uh the agentic model changes and the whether it's the agent change or the model change, it really does uh affect uh what we actually need to provide it, whether that's context or memory, in order for it to uh perform the best it can." aria-label="回原文"></button>。

## 整家公司跑在 Claude 的轨道上

一个有趣的数字：过去一年，Anthropic 全公司**愿意委托给 Claude 的工作占比从 30% 翻倍到 60%** <button class="pd-ts" data-t="41:08" data-who="Lamus Mukta" data-en="Like ultimately, um another another like fun stat is in the last year the amount of work which we as a company are comfortable delegating to Claude across all teams has doubled." aria-label="回原文"></button>。非工程团队的例子：营销团队有人的第一天从搜索「终端是什么」开始，当天结束就把自己 30 分钟的工作流自动化成 30 秒 <button class="pd-ts" data-t="29:49" data-who="Lamus Mukta" data-en="Um, and I think one of the big patterns there is like what happened with Claude Code is at first it was all of the engineers who were relying on this to ship a ton of code really quickly, and then we saw this pattern where all of the teams at Anthropic were like totally going all in on Claude Code." aria-label="回原文"></button>;销售团队有 Claude 自动跑的每周简报，没人再熬夜做幻灯片 <button class="pd-ts" data-t="41:55" data-who="Lamus Mukta" data-en="So, like, for example, on sales, we um on our sales teams, we have like weekly briefs that Claude kind of like runs over what everyone did that week and gives you all of the stats and dashboard updates so that everyone's ready for the meeting and nobody had to like labor over those slides." aria-label="回原文"></button>;事件响应基础设施也靠 Claude 分诊、拉人、诊断代码问题 <button class="pd-ts" data-t="41:30" data-who="Lamus Mukta" data-en="That one was like a um like a pipeline for like ad generation um or like copy generation. We have a lot of our like um incident response uh infrastructure also relies on Claw to some extent to like triage things and like loop in the right people, um, and where it can, it can kind of like start to diagnose like code problems, etc." aria-label="回原文"></button>。

这背后有个刻意的文化设计：**在 Slack 里极度公开地工作**。Mukta 自己与 Claude Tag 的所有工作，除非真私密，都在公共频道做——结果是素未谋面的同事会来找他：「我看到你在做这个，能一起用吗？」<button class="pd-ts" data-t="30:52" data-who="Lamus Mukta" data-en="Um, people are you know changing their behavior around how they uh kind of create and produce data and where they store it so that agents are able to more easily access that." aria-label="回原文"></button>。

架构上还有一个关键差异：Claude Code 代表你个人、用你的权限干活;**Claude Tag 有自己的权限、自己的密钥，代表团队工作**——这样更容易审计，也是实现多人模式必需的架构改动 <button class="pd-ts" data-t="33:57" data-who="Lamus Mukta" data-en="Um, another thing that we did to make this uh work more effectively is we came up with this concept of agent identities. So one really big difference between tag and you working with like claude codal co-work is when you work with code or co-ork, they kind of assume your own permissions." aria-label="回原文"></button>。每个频道的权限范围(能用什么工具、什么 API 密钥、能看哪些频道)都可以精细配置 <button class="pd-ts" data-t="33:07" data-who="Lamus Mukta" data-en="And that's what allows our agents to perform really well. So one of the design, um one of the design principles that we had with Claude Tag is just like we've really carefully designed how you permission each channel." aria-label="回原文"></button>。

事件响应是高信任场景的样板：先让 Claude 试、同时保留传统流程对照，逐步加大委托；理想中，凌晨三点叫醒你的不再是「出事了快看」，而是「出事了，这是我认为能修的 PR、这是我跑过的验证测试、这是影响范围」——那这个 PR 就值得当场批准 <button class="pd-ts" data-t="45:56" data-who="Lamus Mukta" data-en="So it's really up to teams, and we totally understand that rolling these things out at scale needs this like journey of trust that you need to go on. So, like maybe when you start doing this, you just like let Claude have a go and you also like keep your traditional process and you just like check that on whatever like success threshold it did what you wanted it to." aria-label="回原文"></button>。

## 「做梦」(Dreaming):让另一个智能体夜里整理记忆

这是 Anthropic 托管智能体产品上的研究预览功能。托管智能体帮你承担从框架、基础设施到可观测性的一切，让你快速组合和部署智能体 <button class="pd-ts" data-t="48:26" data-who="Lamus Mukta" data-en="Yeah, of course. Um so Dreaming is a research preview feature that we have on our managed agents offering. Um and for those who aren't familiar with managed agents, it's clawed managed agents, um this is a product which essentially allows you to build and deploy agents much faster in production." aria-label="回原文"></button>。智能体有记忆——从只能读的组织级上下文，到各自的草稿板 <button class="pd-ts" data-t="49:16" data-who="Lamus Mukta" data-en="So that's the managed agents product, and of course, uh given how important context has been as a concept in agentic development, uh, it wouldn't be complete without a memory feature." aria-label="回原文"></button>。

但记忆跑久了会烂：信息过时、缺失、写得莫名其妙 <button class="pd-ts" data-t="49:45" data-who="Lamus Mukta" data-en="And like I said, people often ask about like, well, how what is the best practice for structuring these memory systems? This really starts to run the risk as you run it over longer periods of time that there's like stale information in there, some stuff has gone out of date, uh, there's missing information, it's just confusingly written, etc." aria-label="回原文"></button>。Dreaming 的做法：按你定的节奏跑「做梦任务」，把记忆库和会话记录(智能体执行任务的痕迹)喂给**另一个智能体**，让它审差异——缺什么上下文本可以做得更好、有什么误导信息在拉低表现、怎么重组信息更好检索——并给出修改假设和证据所在的会话附件，由你决定采纳哪些 <button class="pd-ts" data-t="49:56" data-who="Lamus Mukta" data-en="This really starts to run the risk as you run it over longer periods of time that there's like stale information in there, some stuff has gone out of date, uh, there's missing information, it's just confusingly written, etc." aria-label="回原文"></button>。

Mukta 认为这真正打开了**持续学习**的大门：今天跑智能体，做梦优化记忆，明天再跑，能实际看到它们变好；已有客户借此拿到明显的性能提升 <button class="pd-ts" data-t="50:58" data-who="Lamus Mukta" data-en="And it does this in all in like a pretty um like a pretty extensive manner, like it gives you hypotheses for what to change, um, gives you attachments to the sessions where it thinks that the evidence is there, and then you can basically decide which of those changes to implement." aria-label="回原文"></button>。

## 本集带走

- **给 Claude Tag 设「每日简报」**：让它汇总过去 24 小时的事(尤其是跨时区团队)，醒来面对一份精选简报而不是邮件和消息墙 <button class="pd-ts" data-t="52:50" data-who="Lamus Mukta" data-en="You just need to get your Slack admin to turn it on and do some of the configuration, but it really doesn't take long. And to give you a flavor of the things that I'm doing with this, so the first thing I set up was a daily briefing." aria-label="回原文"></button>。
- **让它主动盯关键频道**：实时 ping 需要你关注的紧急事项 <button class="pd-ts" data-t="53:25" data-who="Lamus Mukta" data-en="So daily brief is great. Uh and then something else I have set up is it it knows like which channels are important to me and it pings me about anything urgent that needs my attention on a live basis." aria-label="回原文"></button>。
- **团队周报自动化**：让 Tag 每周汇总团队学到、看到的东西，把知识在组织里摊开 <button class="pd-ts" data-t="53:46" data-who="Lamus Mukta" data-en="And that's great because uh whilst working in public as a company is fantastic, it means there's a lot of things going on on Slack, and I cannot keep on top of that." aria-label="回原文"></button>。
- **为模型的未来构建，不是为今天**：产品要赌能力曲线，新模型出来要敢于删框架、删上下文，少即是多 <button class="pd-ts" data-t="28:10" data-who="Lamus Mukta" data-en="Uh they, you know, it it just was more similar to kind of just like getting like bit chunks of code back through, whereas later it really could start to like access different kinds of tools, work really efficiently over the code base, um, and like stay on top of a lot of context and stay goal goal-oriented." aria-label="回原文"></button>。
- **记忆系统从简单文件系统开始**：别急着上索引和专用工具，模型自己管文件往往更好 <button class="pd-ts" data-t="37:05" data-who="Lamus Mukta" data-en="And the solution we have in our managed agents API is like a very simple memory file system that just leans on agents' abilities like read and write to memory. And something I touched on on in that talk is that we tried a lot of different things in the past, like indexed memory stores or like tools that were very specific about how to read and write to memory." aria-label="回原文"></button>。
- **信任是渐进建立的**：先并行跑传统流程对照，设清楚人工关卡，再逐步加大委托 <button class="pd-ts" data-t="45:56" data-who="Lamus Mukta" data-en="So it's really up to teams, and we totally understand that rolling these things out at scale needs this like journey of trust that you need to go on. So, like maybe when you start doing this, you just like let Claude have a go and you also like keep your traditional process and you just like check that on whatever like success threshold it did what you wanted it to." aria-label="回原文"></button>。
- **公开工作 + 给智能体独立身份**：在 Slack 公共频道干活、让智能体用自己的权限代表团队，既放大协作也便于审计 <button class="pd-ts" data-t="33:57" data-who="Lamus Mukta" data-en="Um, another thing that we did to make this uh work more effectively is we came up with this concept of agent identities. So one really big difference between tag and you working with like claude codal co-work is when you work with code or co-ork, they kind of assume your own permissions." aria-label="回原文"></button>。

<div class="pd-sec">全部金句 <span>3 条</span></div>

> <span class="qz">自从我们开始在内部使用 Claude Tag 以来，我们的产品团队，比如产品工程团队，有 65% 的 PR 是由 Claude Tag 打开的。</span>  
> *Since we've started using Claude Tag internally, our product teams, um, like product engineering teams have 65% of their PRs are opened by Claude Tag.*  
> <span class="qm">—— Lamus Mukta · [10:35]</span> ^q1

> <span class="qz">那个仪表图总是告诉我们，大约每四个月，智能体能够自主运行的时间量大约会翻倍。</span>  
> *So the the meter chart always shows us that roughly every four months, the amount of time that agents are able to run for autonomously is like doubling.*  
> <span class="qm">—— Lamus Mukta · [15:52]</span> ^q2

> <span class="qz">我们总是对正在开发的人说的一件大事是：为模型未来所在的位置构建，不要为它们今天所在的位置构建，因为正如我们所说，这些东西变化得太快了。</span>  
> *So, one of the big things that we always say to people when they're developing is like build for where the models are gonna be in the future, don't build for where they are today, because as we've said, these things move so quickly.*  
> <span class="qm">—— Lamus Mukta · [28:10]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-11-talks-evolution-of-agentic-surfaces-gagan-bhat|Anthropic 构建生产级智能体的教训:harness 须为模型能力演进而生]]<span class="pd-rz">同公司:Anthropic · 同概念:dreaming、工具层 (harness)、智能体 (agent)、沙箱 (sandbox)、Claude Code、可观测性 (observability)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Anthropic、Datadog · 同概念:Claude Code、Slack、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-22-talks-claude-for-long-horizon-tasks-lance-mart|Claude 异步智能体架构的四块基石]]<span class="pd-rz">同公司:Anthropic · 同概念:dreaming、工具层 (harness)、托管智能体 (managed agents)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude Code、智能体 (agent)、Slack、托管智能体 (managed agents)</span>
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|代码量暴涨8倍后，工程管理怎么办？]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude Code、智能体 (agent)、Slack</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同嘉宾:Simon Maple · 同概念:工具层 (harness)、智能体 (agent)、可观测性 (observability)</span>

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
