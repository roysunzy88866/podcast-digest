---
title: Claude Tag：把智能体从终端搬进 Slack 的多人协作实验
podcast: The AI-Native Dev
date: 2026-08-26
source_url: undefined
duration: "57:30"
type: episode
cover: "#64748b"
image: "/covers/2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang.jpg"
description: "Anthropic 的 Lamus Mukta 介绍 Claude Tag 如何在 Slack 中实现主动式、多人协作的智能体编码，以及 Anthropic 内部 65% 的 PR 已由它发起。"
host: "[[Guy Pajani]]"
cohosts: ["[[Simon Maple]]", "[[Lamus Mukta]]"]
companies: ["[[Anthropic]]"]
concepts: ["[[Claude Tag]]", "[[Claude Code]]", "[[智能体]]", "[[沙箱]]", "[[记忆]]", "[[dreaming]]", "[[智能体身份]]", "[[Managed Agents]]", "[[harness]]", "[[Slack]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/covers/2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang#post","headline":"Claude Tag：把智能体从终端搬进 Slack 的多人协作实验","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang","mainEntityOfPage":"https://talk.solomind.cc/2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang","description":"Anthropic 的 Lamus Mukta 介绍 Claude Tag 如何在 Slack 中实现主动式、多人协作的智能体编码，以及 Anthropic 内部 65% 的 PR 已由它发起。","datePublished":"2026-08-26","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang.jpg","about":[{"@type":"Person","name":"Guy Pajani"},{"@type":"Person","name":"Simon Maple"},{"@type":"Person","name":"Lamus Mukta"},{"@type":"Organization","name":"Anthropic"},{"@type":"Thing","name":"Claude Tag"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"dreaming"},{"@type":"Thing","name":"智能体身份 (agent identities)"},{"@type":"Thing","name":"Managed Agents"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"Slack"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Claude Tag：把智能体从终端搬进 Slack 的多人协作实验","item":"https://talk.solomind.cc/2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Claude Tag：把智能体从终端搬进 Slack 的多人协作实验</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Claude Tag：把智能体从终端搬进 Slack 的多人协作实验

<div class="pd-byl"><b>Lamus Mukta</b> · Anthropic · 2026-08-26</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">自从我们开始在内部使用 Claude Tag 以来，我们的产品团队有 65% 的 PR 是由 Claude Tag 开启的。</div><div class="a">— Lamus Mukta <button class="pd-ts" data-t="00:15" data-who="Lamus Mukta" data-en="Since we've started using Claude Tag internally, our product teams have 65% of their PRs opened by Claude Tag." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Guy Pajani]] · [[Simon Maple]] · [[Lamus Mukta]]
>
> **公司** [[Anthropic]]
>
> **概念** [[Claude Tag]] · [[Claude Code]] · [[智能体]] · [[沙箱]] · [[记忆]] · [[dreaming]] · [[智能体身份]] · [[Managed Agents]] · [[harness]] · [[Slack]]

[[Anthropic|Anthropic]] 内部的产品工程团队，65% 的 PR 是由一个叫 [[Claude Tag|Claude Tag]] 的东西发起的。它不是一个需要你打开终端、盯着每一轮输出的工具——它住在 [[Slack|Slack]] 里，自己跑完整个流程，完事了才来 ping 你 <button class="pd-ts" data-t="10:35" data-who="Lamus Mukta" data-en="Um and just to just to frame it in terms of the impact that we've seen internally. Since we've started using Claude Tag internally, our product teams, um, like product engineering teams have 65% of their PRs are opened by Claude Tag." aria-label="回原文"></button>。

## Claude Tag 和 Slack 里的 @Claude 有什么不同

表面上看都是在 Slack 里跟 Claude 聊天，但底层逻辑差别很大。普通的 Slack 里 @Claude 是你主动问它、它被动答，交互是单次、单人的。Claude Tag 有三个本质区别：

**主动性**：它不需要你触发，有时候它会主动来找你，告诉你某件事需要你注意 <button class="pd-ts" data-t="04:29" data-who="Lamus Mukta" data-en="Um the second is like often you would kind of go and trigger your um your agents by asking them questions and kind of Claude and Slack would reply. Claude Tag will actually like sometimes come and find you and tell you that something needs your attention." aria-label="回原文"></button>。

**跨会话[[记忆|记忆]]**：它的上下文窗口不止于当前对话。它的记忆范围在频道级别，能理解整个频道历史上聊过的所有功能请求、流程和决策 <button class="pd-ts" data-t="06:05" data-who="Lamus Mukta" data-en="So I think on that context point, the so we we kind of we have this whole permissioning system with Claude Tag, and you can really control that and tune it to how you want it, but essentially it's kind of scoped to a channel level." aria-label="回原文"></button>。如果配置了权限，它还能搜索它所在的其他公共频道——比如从客服频道里找到某个问题的来龙去脉，带到工程频道来，而这可能连你自己都没看到 <button class="pd-ts" data-t="06:18" data-who="Lamus Mukta" data-en="So there's a lot of history and context. If configured as well, it can also have the ability to search other public channels that Claude Tag is in. So maybe you have like a customer support um channel where there's a bit more context on where this issue arose, and Claude Tag, given the permissions, could also access that information and surface it where maybe you might not even have that kind of visibility." aria-label="回原文"></button>。

**端到端执行能力**：这是最关键的差别。用 @Claude 时，你通常还是在 Slack 里讨论完，然后自己打开 [[Claude Code|Claude Code]] 去实现。Claude Tag 可以把整条链路吃下来：接住反馈 → 自动创建工单 → 自己启动[[沙箱|沙箱]]写代码 → 在你仓库里跑 → PR 准备好了来 ping 你 → 甚至验证 PR 是否满足原始工单的要求 <button class="pd-ts" data-t="07:10" data-who="Lamus Mukta" data-en="In the claude tag world, you could have it configured so that claude tag actually picks up the feedback first and tags everybody they think should be um responsible, like should be involved in the response to that." aria-label="回原文"></button>。

## 从「单人会话」到「多人异步」

Claude Code 的交互模式是单人的、同步的——你开一个会话，盯着[[智能体|智能体]]每一步的输出，随时纠正方向 <button class="pd-ts" data-t="11:11" data-who="Lamus Mukta" data-en="I think what it allows um what it allows us to achieve is when you're using clawed code, so let's say you're and you know doing a genetic development, you have these this concept of it's it's quite single player, so you're often kind of moving into your clawed code uh instance, you're potentially like running code locally and you're kicking off individual sessions." aria-label="回原文"></button>。Claude Tag 把这个模式彻底打碎了。

**多人协作**：一条工作流可以自然地拉入不同角色。比如客服工单进来，Claude Tag 先标记相关的客户经理让他们知晓，再拉产品人员看实现方案，最后工程师进来做代码审查和部署 <button class="pd-ts" data-t="09:15" data-who="Lamus Mukta" data-en="And I think just to throw in one last uh difference on that new workflow, what you'll see if you kind of went and implemented this with Claude Tag is just the ability to enable this cross-functional workflow is really cool." aria-label="回原文"></button>。而且因为所有工作都在公开频道里发生，任何人随时可以插嘴补充上下文 <button class="pd-ts" data-t="12:03" data-who="Lamus Mukta" data-en="So rather than me as the developer having to go and ping like some product folks or some um sales folks on something, I can get that embedded in the claw tag flow." aria-label="回原文"></button>。

**长时间异步运行**：你 ping 它一下，它可能几小时后才回来，端到端地把功能建完了 <button class="pd-ts" data-t="12:52" data-who="Lamus Mukta" data-en="With clawed tag, we're seeing more of a pattern uh of these kind of long-running asynchronous tasks. And that's really leaning into some of the model capabilities that have been unlocked with kind of recent iterations of models." aria-label="回原文"></button>。这背后依赖的是模型能力的提升——Lamus 提到一个 Meta 的研究：智能体能自主成功完成任务的时间跨度，大约每四个月翻一倍，而且这条指数曲线已经持续了接近十年 <button class="pd-ts" data-t="15:52" data-who="Lamus Mukta" data-en="Um so the the meter chart always shows us that roughly every four months, the amount of time that agents are able to run for autonomously is like doubling. And so this is from a sheer capability perspective, we're allowed, like we're able to trust these agents more because of the actual capability that's improving." aria-label="回原文"></button>。

## 信任从哪来：模型变强 + 人的行为在变

为什么大家敢把工作交给一个在 Slack 里自己跑几小时的智能体？Lamus 认为是两边同时变化的结果。

模型端：新一代模型自带更强的自验证能力。它们会在交差前自己检查工作，在工具可用时主动跑测试、建评估来验证结果，不再完全靠人盯着 <button class="pd-ts" data-t="17:44" data-who="Lamus Mukta" data-en="So to make that concrete, models are a lot better at verifying their own work these days. So, both from like an instinctual perspective, like they do just check over their own work before coming back to you and saying it's complete, and where they have the tools to verify their own work, whether that's through like front-end tests or running tests or creating their own evals, they're getting a lot better at doing that themselves as well." aria-label="回原文"></button>。

人这一端：工程师的行为在从「写代码」转向「定义什么是好的」——你能多清楚地描述成功标准、验收条件，就把这些交给模型，让它循环执行或者让另一个智能体来审查，直到满足标准 <button class="pd-ts" data-t="18:13" data-who="Lamus Mukta" data-en="Like you give the models the tools to verify their own work and they are better at kind of doing that themselves. And I think another pattern that we see in development today is that the behavior of the developer or the engineer is shifting much more towards how well can you define what success looks like in your case." aria-label="回原文"></button>。再加上过去一年大家都在实际使用中摸清了这些工具的边界——什么场景放心放手、哪里还需要盯紧——这种「手感」本身就是信任的基础 <button class="pd-ts" data-t="18:54" data-who="Lamus Mukta" data-en="And then on the human side, like we are getting our behavior is shifting more to just like can we define what good looks like? Um, and I think another thing to just like round that off is that having really like for a lot of us having used these tools in anger for like the last year, we're getting a really good sense of like where are these tools really useful?" aria-label="回原文"></button>。

Lamus 不认为 Slack 会取代 IDE（一种写代码的集成开发环境），但它让智能体更贴近你日常工作的所有场景，不需要在「跟团队沟通」和「跟智能体协作」之间切换上下文 <button class="pd-ts" data-t="19:19" data-who="Lamus Mukta" data-en="Uh so to your to finally to your point on like is Slack the new home or is Slack the new IDE? I think it's a surface that allows your agents to be closer to where you're doing your work all the time, anyway." aria-label="回原文"></button>。

## Claude Code 的内部起源：六个赞到全公司一半人用

Claude Code 一开始是 Boris 的副业项目，在内部 Slack 发帖时只得到六个反应 <button class="pd-ts" data-t="27:06" data-who="Lamus Mukta" data-en="And the the funny thing is that originally I think when he shared uh this in a Slack post, it got like six reactions. Um which always tells you that like you just like data isn't perfect, you can't there's not like perfect processes for understanding like what good products look like, etc." aria-label="回原文"></button>。但 Anthropic 内部有很强的实验文化，几个人兴奋起来继续做，很快公司一半的人每周都在用 <button class="pd-ts" data-t="27:26" data-who="Lamus Mukta" data-en="Um, but a couple of people like saw this and were really excited by it and continue to work on it. And over a short period of time, we saw like amazing adoption within the company, like half of the company using this like weekly." aria-label="回原文"></button>。

真正让采用率腾飞的节点是模型能力的提升——早期迭代感觉还不像智能体，更像返回代码片段；后来模型能调用多种工具、在代码库里高效工作、保持大量上下文且始终目标导向，产品才真正可用 <button class="pd-ts" data-t="27:51" data-who="Lamus Mukta" data-en="Um, another thing that's important here, and I think it's a really key principle when when you're developing products in this space, is that we saw a real takeoff in the adoption of this product once the models improved a little bit more to make it like really achievable to kind of work on these coding tasks for long periods of time." aria-label="回原文"></button>。

这引出一个 Lamus 反复强调的原则：**为模型未来的能力构建，不要为今天的** <button class="pd-ts" data-t="28:10" data-who="Lamus Mukta" data-en="Uh they, you know, it it just was more similar to kind of just like getting like bit chunks of code back through, whereas later it really could start to like access different kinds of tools, work really efficiently over the code base, um, and like stay on top of a lot of context and stay goal goal-oriented." aria-label="回原文"></button>。如果你今天围绕模型当前的短板做了很多复杂的架构和提示工程，等模型变强了，那些东西反而成了累赘。

非工程团队也在用。营销团队有个人从「谷歌搜索终端是什么」开始，到当天结束就自动化了一个原来花 30 分钟的工作流，缩短到 30 秒 <button class="pd-ts" data-t="29:49" data-who="Lamus Mukta" data-en="Um, and I think one of the big patterns there is like what happened with Claude Code is at first it was all of the engineers who were relying on this to ship a ton of code really quickly, and then we saw this pattern where all of the teams at Anthropic were like totally going all in on Claude Code." aria-label="回原文"></button>。过去一年，Anthropic 全公司愿意委托给 Claude 的工作量从 30% 翻到了 60% <button class="pd-ts" data-t="41:08" data-who="Lamus Mukta" data-en="Like ultimately, um another another like fun stat is in the last year the amount of work which we as a company are comfortable delegating to Claude across all teams has doubled." aria-label="回原文"></button>。

## 两个踩过的坑

**记忆系统：复杂抽象不如简单文件系统**。他们试过索引记忆存储、专门设计读写记忆的工具，后来发现这些过度主观的设计反而有问题。

模型变强之后，它们自己就很擅长用原生文件系统和 bash、grep 等工具来管理记忆。最终[[Managed Agents|托管智能体]]（一种 Anthropic 帮你管理智能体运行环境和基础设施的产品）里的记忆方案就是一个简单的文件系统 <button class="pd-ts" data-t="37:05" data-who="Lamus Mukta" data-en="And the solution we have in our managed agents API is like a very simple memory file system that just leans on agents' abilities like read and write to memory. And something I touched on on in that talk is that we tried a lot of different things in the past, like indexed memory stores or like tools that were very specific about how to read and write to memory." aria-label="回原文"></button>。

**[[harness|工具层]]（harness）：新模型来了，要做减法**。每次出新模型，他们会重新审视工具层里哪些可以删掉——模型自身能力变强后，很多之前需要工具层来「兜底」的逻辑可以交给模型自己处理。新模型不意味着加更多提示和架构，有时候少即是多 <button class="pd-ts" data-t="36:01" data-who="Lamus Mukta" data-en="And one thing that we think about a lot on the Claude Code side is every time that we have a new model, we've discussed kind of how those models themselves become more capable in certain dimensions." aria-label="回原文"></button>。

## 企业级设计：智能体身份和权限

从 Claude Code 到 Claude Tag，有一个关键的架构变化：**[[智能体身份|智能体身份]]**。

用 Claude Code 时，智能体借用你的权限——你的 API 密钥、你的访问权限 <button class="pd-ts" data-t="34:06" data-who="Lamus Mukta" data-en="So one really big difference between tag and you working with like claude codal co-work is when you work with code or co-ork, they kind of assume your own permissions." aria-label="回原文"></button>。Claude Tag 给了智能体自己的权限和密钥，它代表团队工作，不代表某个个人 <button class="pd-ts" data-t="34:15" data-who="Lamus Mukta" data-en="So I'll they'll kind of you work using kind of uh my API, like yeah, my API keys or my permission systems, and I grant it access to all those things. Whereas with Claude Tag, we actually give that um agent its own permissions and its own keys, etc., so that it can go off and like work autonomously on these things." aria-label="回原文"></button>。好处是审计清晰——它做的每件事都以它自己的身份留下记录，而不是混在某个人的操作里 <button class="pd-ts" data-t="34:27" data-who="Lamus Mukta" data-en="Um it's not working on behalf of one individual, it's working on behalf of the team. And it's much easier to kind of audit that. It's not like doing this as you, it's doing this as itself." aria-label="回原文"></button>。

权限控制在频道级别设计：每个频道有自己的工具访问范围、API 密钥、能访问的其他频道 <button class="pd-ts" data-t="33:16" data-who="Lamus Mukta" data-en="So one of the design, um one of the design principles that we had with Claude Tag is just like we've really carefully designed how you permission each channel. So each channel, um the workspaces and the channels have their own permission scopes in terms of what tools they can access, what API keys they have for different services and connectors, um, and potentially what other channels, et cetera, they can access." aria-label="回原文"></button>。主动性的程度也可以调——从「只有被 @ 才响应」到「按计划定时跑任务」到「主动跳入它认为有相关上下文的对话」 <button class="pd-ts" data-t="42:44" data-who="Lamus Mukta" data-en="And for example, like that proactivity thing is something you can really dial up and down. So you can have everything from like Claude only responds when it's tagged, or Claude uh creates a schedule on which it runs its tasks, or Claude like will proactively jump into threads here when it thinks that it's got relevant context to share." aria-label="回原文"></button>。如果它做了不符合你偏好的事，你直接告诉它，它会更新记忆，以后不再犯 <button class="pd-ts" data-t="43:22" data-who="Lamus Mukta" data-en="Like we see this proactivity thing as a real um spectrum, and we've like kind of really tuned it over time so that it kind of knows what's appropriate, where to jump in and when not to, and when to do things on a programmatic schedule." aria-label="回原文"></button>。

## Dreaming：让智能体的记忆自动进化

这是 Anthropic 托管智能体产品上的一个研究预览功能，解决的问题是：智能体跑久了，记忆里会积累陈旧信息、缺失信息、写得混乱的信息 <button class="pd-ts" data-t="49:45" data-who="Lamus Mukta" data-en="And like I said, people often ask about like, well, how what is the best practice for structuring these memory systems? This really starts to run the risk as you run it over longer periods of time that there's like stale information in there, some stuff has gone out of date, uh, there's missing information, it's just confusingly written, etc." aria-label="回原文"></button>。

做法是：你按自己想要的节奏跑一个「梦境」任务——把记忆存储和智能体的会话记录（就是智能体执行任务的完整痕迹）喂给另一个智能体。它会审查这些记录和记忆，找出不一致的地方：哪些信息缺失导致智能体表现差、哪些误导性信息在拖后腿、有没有更好的信息组织方式 <button class="pd-ts" data-t="50:15" data-who="Lamus Mukta" data-en="And so what we designed and introduced is this concept called dreaming, uh, which is kind of what it sounds like, I suppose, where essentially you are able to run these dreaming jobs at whatever cadence you like, where you input some of your memory stores and some of your session transcripts from managed agents." aria-label="回原文"></button>。它会给出具体的修改假设，附上证据来源的会话记录，你决定采纳哪些 <button class="pd-ts" data-t="50:43" data-who="Lamus Mukta" data-en="So maybe it finds that some information is missing that the agents would have performed better if they had that context, or vice versa, that there's something misleading in there which is degrading performance, um, or it just finds a new way to kind of reorganize that information to make it easier to search and surface for the agents." aria-label="回原文"></button>。

这打开了持续学习的路径：今天跑完智能体，用 [[dreaming|dreaming]] 优化记忆，明天再跑就能看到性能提升 <button class="pd-ts" data-t="50:58" data-who="Lamus Mukta" data-en="And it does this in all in like a pretty um like a pretty extensive manner, like it gives you hypotheses for what to change, um, gives you attachments to the sessions where it thinks that the evidence is there, and then you can basically decide which of those changes to implement." aria-label="回原文"></button>。

## 事故响应：从「凌晨三点叫醒我」到「凌晨三点给我一个修好的 PR」

Lamus 描述了一个 Anthropic 内部在用的模式：事故响应智能体。它需要接入数据仓库、日志指标、代码仓库来诊断问题 <button class="pd-ts" data-t="45:12" data-who="Lamus Mukta" data-en="Um but I think this is a really interesting one which which plays on a couple of important design principles. Like one is how much how much first of all, like for this agent to do a good job, you need to give it good acts good access to different data sources." aria-label="回原文"></button>。

关键设计是**人机交互闸门的位置由团队自己定**。刚开始可以只让 Claude 诊断，同时保留传统流程做对照，看它是否达到了你设定的成功阈值 <button class="pd-ts" data-t="45:56" data-who="Lamus Mukta" data-en="So it's really up to teams, and we totally understand that rolling these things out at scale needs this like journey of trust that you need to go on. So, like maybe when you start doing this, you just like let Claude have a go and you also like keep your traditional process and you just like check that on whatever like success threshold it did what you wanted it to." aria-label="回原文"></button>。随着信任建立，逐步放权——从只诊断不行动，到生成草稿 PR 等人审，到最终可能自动修复可逆问题 <button class="pd-ts" data-t="46:11" data-who="Lamus Mukta" data-en="Um and then over time you like get more confident, like delegating more and more of that work over. Or maybe it just starts like diagnosing fixes and passing that over to an engineering team, waking them up up if it they think it's critical enough, um, to like potentially starting to raise a draft PR to like whatever other like gates of access you want." aria-label="回原文"></button>。

Lamus 说，哪怕还保留人工审批，被叫醒时的体验也完全不同：不是「请你看一下这个事故想办法」，而是「这是事故、这是修复 PR、这是我跑过的测试、这是影响范围，你要不要批」 <button class="pd-ts" data-t="47:38" data-who="Lamus Mukta" data-en="Definitely, definitely. And I think in any case, I would much rather be woken up with a call that's like, hey, there was this incident, I think this is the PR that fixes it." aria-label="回原文"></button>。

## 本集带走

- **Claude Tag 的核心不是「Slack 里的 Claude」，而是端到端的主动执行**：它能从接需求到提 PR 一条龙跑完，不需要你打开任何其他工具。区别在于主动性、跨会话记忆、以及不借用个人身份而是拥有自己的权限。
- **为模型未来的能力构建，别为今天的短板做复杂架构**：Claude Code 内部腾飞的节点是模型变强，不是工具层变复杂。每次出新模型，主动做减法——删掉模型已经能自己处理的部分。
- **记忆系统从简**：Anthropic 试过索引记忆、专用读写工具，最终回归简单文件系统——模型自己用原生工具就能管好记忆，过度抽象反而添乱。
- **智能体要有独立身份和权限**：不要让它借用户的权限做事。给它自己的密钥和权限范围，审计清晰，才能安全地做多人协作和长时间异步任务。
- **用 dreaming 做记忆的持续进化**：定期用另一个智能体审查会话记录和记忆存储，找出陈旧、缺失、误导的信息并修正，让智能体越跑越好。
- **事故响应智能体的闸门可以渐进放权**：从只诊断不行动开始，对比传统流程的结果，逐步过渡到生成草稿 PR 甚至自动修复，把凌晨三点的唤醒体验从「请你想办法」变成「这是修复方案，批不批」。

<div class="pd-sec">全部金句 <span>3 条</span></div>

> <span class="qz">自从我们开始在内部使用 Claude Tag 以来，我们的产品团队有 65% 的 PR 是由 Claude Tag 开启的。</span>  
> *Since we've started using Claude Tag internally, our product teams have 65% of their PRs opened by Claude Tag.*  
> <span class="qm">—— Lamus Mukta · [00:15]</span> ^q1

> <span class="qz">那个仪表图总是告诉我们，大约每四个月，智能体能够自主运行的时间量大约会翻倍。</span>  
> *So the the meter chart always shows us that roughly every four months, the amount of time that agents are able to run for autonomously is like doubling.*  
> <span class="qm">—— Lamus Mukta · [15:52]</span> ^q2

> <span class="qz">所以，我们要告诉正在开发的人们的一件大事是，为模型未来的位置而构建，不要为它们今天的位置而构建，因为正如我们所说，这些东西移动得如此之快。</span>  
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
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|Patrick Debois：AI 编码的组织转型与规模化]]<span class="pd-rz">同嘉宾:Simon Maple · 同概念:工具层 (harness)、智能体 (agent)、可观测性 (observability)</span>

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
