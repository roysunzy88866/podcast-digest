---
title: Datadog 4000 人AI赋能实战：删掉上下文反而更好
podcast: The AI-Native Dev
date: 2026-08-26
source_url: undefined
duration: "61:21"
type: episode
cover: "#64748b"
image: "/covers/2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo.jpg"
description: Datadog 语言基础总监 Simon Boudrien 分享如何为 4000 名工程师落地智能体开发工具，以及为什么删除所有上下文后 eval 分数反而提升了。
host: "[[Simon Maple]]"
cohosts: ["[[Guy for Germany]]", "[[Simon Boudrien]]"]
companies: ["[[Datadog]]", "[[Cursor]]"]
concepts: ["[[智能体]]", "[[评估]]", "[[上下文]]", "[[开源权重模型]]", "[[代码审查]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/covers/2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo#post","headline":"Datadog 4000 人AI赋能实战：删掉上下文反而更好","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo","mainEntityOfPage":"https://talk.solomind.cc/2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo","description":"Datadog 语言基础总监 Simon Boudrien 分享如何为 4000 名工程师落地智能体开发工具，以及为什么删除所有上下文后 eval 分数反而提升了。","datePublished":"2026-08-26","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo.jpg","about":[{"@type":"Person","name":"Simon Maple"},{"@type":"Person","name":"Guy for Germany"},{"@type":"Person","name":"Simon Boudrien"},{"@type":"Organization","name":"Datadog"},{"@type":"Organization","name":"Cursor"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"评估 (eval)"},{"@type":"Thing","name":"上下文 (context)"},{"@type":"Thing","name":"开源权重模型 (open weight model)"},{"@type":"Thing","name":"代码审查 (code review)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"Datadog 4000 人AI赋能实战：删掉上下文反而更好","item":"https://talk.solomind.cc/2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Datadog 4000 人AI赋能实战：删掉上下文反而更好</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Datadog 4000 人AI赋能实战：删掉上下文反而更好

<div class="pd-byl"><b>Simon Boudrien</b> · Datadog 语言基础总监 · 2026-08-26</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但随后我们通过时间看到的是，用户越多，改变他们就越困难。</div><div class="a">— Simon Boudrien <button class="pd-ts" data-t="35:33" data-who="Simon Boudrien" data-en="Uh but then what we saw through time is the more user we've had, the harder it became to go and like change them." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Simon Maple]] · [[Guy for Germany]] · [[Simon Boudrien]]
>
> **公司** [[Datadog]] · [[Cursor]]
>
> **概念** [[智能体]] · [[评估]] · [[上下文]] · [[开源权重模型]] · [[代码审查]]

[[Datadog|Datadog]] 内部做了一个实验：把仓库里所有的[[智能体|智能体]][[上下文|上下文]]文件全部删掉，然后跑 [[评估|eval]]——结果性能反而显著提升了。这不是模型变好了，而是那些一年前写给 Sonnet 3.5 时代的上下文，在今天的模型面前已经变成了噪音，甚至是有害的上下文腐烂 <button class="pd-ts" data-t="00:00" data-who="Simon Boudrien" data-en="The punch we had is like maybe actually the context that was written like a year ago, you know, when it was like cursor Sonnet 35, it's still irrelevant today. And so we started to look into it." aria-label="回原文"></button><button class="pd-ts" data-t="38:02" data-who="Simon Boudrien" data-en="Like maybe not. And so we started to look into it, and then we're like, well, what if we delete the whole context from the repo? Like what would happen?" aria-label="回原文"></button>。

## 从 200 人 POC 到 4000 人全面铺开

2025 年初，Datadog 内部发起了一个 [[Cursor|cursor]] 的 POC，原本目标是 100 到 200 人试用。结果需求远超预期，一个月内就有大约 1000 名开发者几乎每天都在用，产品经理甚至需要手动往允许列表里加邮箱来给人开权限 <button class="pd-ts" data-t="05:02" data-who="Simon Boudrien" data-en="Uh and so at the beginning of 2025, uh we launched like a POC internally with like Cursor. Initially, we were aiming to you know get like a hundred, maybe two hundred devs to use cursor and just like get some signals of like how that you know, how like it worked for them." aria-label="回原文"></button><button class="pd-ts" data-t="06:50" data-who="Simon Boudrien" data-en="Yep. And I liked how you sort of told me that at some point this was uh demand was so kind of off the list that you had a product manager that found themselves manually because like you weren't ready for the avalanche, and so someone was like manually adding people's emails uh in to sort of add them to the cursor list of allowed users." aria-label="回原文"></button>。这股拉力让团队意识到需要专门建一个组来拥有这些工具和体验。

到了夏天，Cloud Code 出来后带来了第二波采用浪潮。对 Datadog 来说，Cloud Code 有一个独特优势：他们有巨大的 monorepo（单体仓库），VS Code 打开这些仓库性能很差，但 Cloud Code 跑在终端里不需要启动整个 IDE，所以很多重度用户迅速转了过去 <button class="pd-ts" data-t="09:21" data-who="Simon Boudrien" data-en="Uh, but uh at that point they they pretty were like pretty similar, and I think they were catering to like different personas. It's like like people, uh especially for us, where uh maybe piece of context, like we have huge motorepos." aria-label="回原文"></button><button class="pd-ts" data-t="09:45" data-who="Simon Boudrien" data-en="And so the base of cursory and some other monorepos was causing issue for uh adoption of just like being not uh performant enough uh for the large repos we're having." aria-label="回原文"></button>。

## 12 个人服务 4000 人：Signal 和 Flow 两个团队

最初的 AI 开发者体验团队把精力全放在了 eval、指标和成本管理上，结果没有余力去重新思考开发流程本身。同时 Opus 4.5 发布后，PR 数量几乎一夜翻倍，SDLC 里的瓶颈（尤其是[[代码审查|代码审查]]）变得前所未有的严重 <button class="pd-ts" data-t="15:04" data-who="Simon Boudrien" data-en="And at the same time, like the beginning of the year, I think everybody saw with uh Opus uh 4.5 uh that came out just before the holidays, the like adoption from there really like took off like really, really fast." aria-label="回原文"></button><button class="pd-ts" data-t="15:11" data-who="Simon Boudrien" data-en="Yeah. Um and it started to really show you know kind of uh bottlenecks in our flow in the uh SDLC that are way more serious than they were before. Um and then it was hard to carve out time to actually like focus on that." aria-label="回原文"></button>。

于是他们拆成了两个团队，各约 6 个人：「Signal」负责指标、eval、成本治理；「Flow」专注于体验本身，解决流程瓶颈。12 个人对应 4000 名工程师 <button class="pd-ts" data-t="15:46" data-who="Simon Boudrien" data-en="Um and at that point we're like, well, we need more people to to work and like really focus on the experience itself of like you know the SDLC with AI and not just more kind of the governance and like signals side of the world." aria-label="回原文"></button><button class="pd-ts" data-t="16:19" data-who="Simon Boudrien" data-en="Yeah, yeah. So we're uh aiming to have six people, around six people in like an boat team and with some recruiting uh for that second team. Got it." aria-label="回原文"></button>。

在成本管理上，他们刻意不走配额限制的路子——如果工程师因为手头工作确实需要大量 token，不应该被卡住。而是从系统性角度去压缩输出、减少浪费 <button class="pd-ts" data-t="19:05" data-who="Simon Boudrien" data-en="No, no, uh, not like token maxing. Uh we never did quotas, for example. Uh, and so and so we're trying to like really not go that route because you know, if you need a lot of token because of what you're working on, you know, we we kind of do want people to have the uh optionality, you know, and be uh intentional about for their for their own use and their own needs." aria-label="回原文"></button><button class="pd-ts" data-t="19:25" data-who="Simon Boudrien" data-en="Uh, and so and so we're trying to like really not go that route because you know, if you need a lot of token because of what you're working on, you know, we we kind of do want people to have the uh optionality, you know, and be uh intentional about for their for their own use and their own needs." aria-label="回原文"></button>。

## Eval 实操：用历史事故回放来验证代码审查

他们的 eval 平台是用 Go 自建的，当时开源方案不够成熟，而 Datadog 自己的指标平台正好可以直接消费数据。不过 Simon 认为，今天用现成方案也完全可以，关键是能支持多种模型和多条测试线 <button class="pd-ts" data-t="20:43" data-who="Simon Boudrien" data-en="Yeah. Okay. So uh so like for us it's a fully custom solution written in Go, uh, with like single boxing." aria-label="回原文"></button><button class="pd-ts" data-t="22:57" data-who="Simon Boudrien" data-en="Or do you think that there's sort of aspects of how you do the eval that you feel like they need to be custom, they need to be yours? Yeah, so I don't feel like strongly about custom versus hosted platform." aria-label="回原文"></button>。

第一个具体应用是代码审查 eval：从 Datadog 自己的事故数据集里，拿出已知导致过事故的 PR，让智能体做代码审查，再用一个 judge 智能体判断审查评论是否指出了会导致事故的问题。这是一个「正确答案」非常明确的场景 <button class="pd-ts" data-t="12:28" data-who="Simon Boudrien" data-en="So, what are examples of like should we do X that you've decided? Yeah. So I'd say like the first application of evals for us very concretely was for code review." aria-label="回原文"></button><button class="pd-ts" data-t="13:09" data-who="Simon Boudrien" data-en="Uh and so we saw pretty early on that like really for us, the distinction here would be like uh we wanted to put AI in the loop for code review to really like prevent an incident or like kind of a major bug and like really like focus on that, you know, as like kind of the last uh guardrail before you go to production." aria-label="回原文"></button>。

执行节奏上，eval 每晚跑一次；如果有人改了引导文档且想看影响，可以临时手动跑几轮（因为 eval 结果有波动，单次不够稳定）<button class="pd-ts" data-t="30:34" data-who="Simon Boudrien" data-en="Yeah, yeah. So today we're doing nightly evals. So we're running basically once a day." aria-label="回原文"></button><button class="pd-ts" data-t="30:50" data-who="Simon Boudrien" data-en="And then for PR that might specifically target evals, like they're changing steering documents uh in like a heavyweight, really trying to sort of change for the results." aria-label="回原文"></button>。成本方面，相比编码智能体本身的消耗，eval 的开销不算大，但如果每个 PR 都跑就太贵了 <button class="pd-ts" data-t="31:39" data-who="Simon Boudrien" data-en="Uh it's a good question. I'm not sure, you know, but evals are more expensive. Like they're they're cheap enough that they haven't doubled your sort of uh compared to the coding agent hues, uh, yeah, yeah, yeah." aria-label="回原文"></button><button class="pd-ts" data-t="31:58" data-who="Simon Boudrien" data-en="We're like, well, if we run per PR, obviously it's uh that is going to be too expensive. Yeah. Yeah, it's interesting." aria-label="回原文"></button>。

Eval 的所有权分散到了各平台团队，让他们覆盖自己平台的使用场景。但有一个明确承认的盲区：创造性的、开放式的工作（比如「应该用什么方案解决这个问题」）很难用 eval 覆盖，他们暂时接受这个缺口 <button class="pd-ts" data-t="24:33" data-who="Simon Boudrien" data-en="Yeah, so in terms of evals uh and like writing those evals, uh there's a few different things that we're doing and unlike new stuff that we're trying out now. Uh the status quo so far has been we've wrote the first ones with like very common use case to just like have a baseline that we can go through." aria-label="回原文"></button><button class="pd-ts" data-t="25:45" data-who="Simon Boudrien" data-en="Um and you know, if it's always the same question, then like you only have this like a small slice, but like kind of the creativity aspect, I think is somewhere or like something that's like really hard to gauge with an agent." aria-label="回原文"></button>。

他们正在做的下一步是：从真实的智能体使用轨迹中自动提取常见场景，再用智能体把轨迹转成 eval 用例——让 eval 的编写和更新也自动化，不依赖人 <button class="pd-ts" data-t="27:11" data-who="Simon Boudrien" data-en="Uh, we are tracking for the uh trajectories of agents and what they're doing. And so we're tracking a lot of data today for the use of agent within Datadog. And so what we want to do is like go from that to raw data of like, you know, well, this prompt came in, the agent did that, etc., and like extract from there common scenarios that tend to recur, or like a common type of uh interaction that a user have with a given platform, and then using an agent to turn that into actual ELON." aria-label="回原文"></button><button class="pd-ts" data-t="27:51" data-who="Simon Boudrien" data-en="And so basically taking like real data of like how people use the agents and make sure that we're covering a fair amount of uh overlap with actual use. And we're pretty confident that we can uh automate uh most of that." aria-label="回原文"></button>。

## 上下文的教训：少写、写对、别怕删

上下文在 Datadog 主要有两个来源：仓库里提交的文件，以及一个中心化的云端市场（有数百个插件/skills）。早期不设结构、让大家自由贡献是对的——门槛低，好想法容易传播 <button class="pd-ts" data-t="34:12" data-who="Simon Boudrien" data-en="Yeah, so it's like there's like two two big sources. One is files that are just committed to to the repositories themselves. Uh I feel like skills is now mainly what there is." aria-label="回原文"></button><button class="pd-ts" data-t="35:00" data-who="Simon Boudrien" data-en="So I mean what what worked really well is like everybody contributed early on, and especially when we started, you know, without a central team, it was like a PUC, just like get people on boarded, you know." aria-label="回原文"></button>。

但用户多了之后，改一个上下文文件就影响 4000 人，变得很紧张。而且云端市场插件太多，没人知道哪个好。所以他们转向了团队级的市场：按平台或团队维护自己的上下文集合 <button class="pd-ts" data-t="35:33" data-who="Simon Boudrien" data-en="Absolutely. Uh but then what we saw through time is the more user we've had, the harder it became to go and like change them. Because the impact you're having then, you know, instead of like being on like 200 people doing kind of a PC with you like using the same tool, you're gonna impact like 4,000 people working on the repository." aria-label="回原文"></button><button class="pd-ts" data-t="36:15" data-who="Simon Boudrien" data-en="So, you know, if you're once you uh install the marketplace, like do you know which plugins are good, which one should you use, which one are gonna perform better." aria-label="回原文"></button>。

然后就是开头那个实验的背景：前端团队发现 eval 表现不好，怀疑是上下文在拖后腿，于是清空了整个上下文文件跑 eval——结果分数涨了。那个文件里有一整段教智能体怎么用 yarn，但这些东西早就在模型的训练集里了，写进上下文纯粹浪费了宝贵的上下文窗口 <button class="pd-ts" data-t="38:30" data-who="Simon Boudrien" data-en="And what happened for us is actually like the eval started to perform like much better once we deleted the whole context, which was counter uh intuitive, but it's just like, yeah, that file was pretty big and was listing stuff that was not like necessarily useful or you know, that should not go into like a steering document." aria-label="回原文"></button><button class="pd-ts" data-t="40:49" data-who="Simon Boudrien" data-en="I don't think they were wrong per se, but I think it's early on there was a lot of like basics that like you would try to retrain the agent on yeah. So in the case of the front end repo, there was a like a whole paragraph on like how to use yarn." aria-label="回原文"></button>。

有了 eval 数据撑腰，删上下文的决定虽然反直觉，但大家看到数字就接受了。没有数据的话，这个决定几乎不可能推行——因为损失厌恶心理很强，PR 审查里总有人问「你确定删这个没问题吗？

万一对某些人有用呢？」<button class="pd-ts" data-t="39:13" data-who="Simon Boudrien" data-en="Yeah, yeah. So I think if we didn't have data to back it, it would be pretty controversial. Uh and just like to be clear, this was owned uh by the front-end team that run uh for the front-end motorepo." aria-label="回原文"></button><button class="pd-ts" data-t="43:17" data-who="Simon Boudrien" data-en="Yeah, yeah, no, absolutely. You know, uh I think like as people propose to remove stuff from from like that root agent MD file, like even in like PR review comments, people are like, well, are you sure you you that like you shouldn't be doing this?" aria-label="回原文"></button>。

治理上的另一个转变：与其往上下文文件里塞东西「提前训练」智能体，不如确保工具本身的错误信息清晰、并给出下一步该做什么。在现代大仓库里，你不可能把所有上下文都前置喂给智能体 <button class="pd-ts" data-t="41:21" data-who="Simon Boudrien" data-en="Okay, cool. And so in term of uh governance, you know, around context, if if you want me to go a bit in there, is what we saw is like actually like I think we have an incline to just go and add something to like an agent's MD, but very often it just has easy as like is the error message from that tool clear?" aria-label="回原文"></button><button class="pd-ts" data-t="42:10" data-who="Simon Boudrien" data-en="And so we've been also moving uh or like pushing people that like you know when they run into it like kind of an issue where the agent doesn't do what you want it to do, uh well where where where like can we provide that context when it's necessary instead of like trying to train the agent ahead of time into how to do everything, especially within a modern repo where like there's so much going on, uh you just cannot provide all of the context up front." aria-label="回原文"></button>。

## 开源模型的差距与后台智能体

基于他们的 eval，[[开源权重模型|开源权重模型]]要做到完全可用（假设前沿模型不继续进步），还需要在当前基础上提升大约 50% 的性能。而且这还只是针对执行类任务，创造力和开放性任务的差距他们还没法从自己的 eval 里量化 <button class="pd-ts" data-t="48:07" data-who="Simon Boudrien" data-en="Yeah so so yeah based on our evals I think open weight model to be like fully viable assuming the bar does not move as progress happened in the space would be that they would need to perform about 50% better than they are today." aria-label="回原文"></button><button class="pd-ts" data-t="48:22" data-who="Simon Boudrien" data-en="No uh a notch below uh we didn't yet run the Evals on those but we're very excited about this. Yeah yeah uh yeah um and the caveat being like also for the uh for the creativity of those models with like tasks that are unknown or you know larger tasks instead of pretty the uh execution part of it yeah um and so this we don't have signals from our evolves but we're looking at public evolves on to get some signal there uh and then getting user feedback." aria-label="回原文"></button>。

不过对于明确、重复的任务，开源模型已经够用了。比如 CI 失败时的 lint 错误和格式问题，后台智能体可以直接帮你修掉，不需要你手动回来处理。他们的思路是把这类「无可争辩正确」的小任务编码成后台智能体，自动推动流程，但严格限制在不改变 PR 核心决策的范围内 <button class="pd-ts" data-t="49:19" data-who="Simon Boudrien" data-en="Yeah uh for code review today we are um we're having the background agents um that for example for code review the first one we release is like if your CI fail uh you know and it's like a linting error a formatting error stuff like that then like that's pretty easy to offset to like an agent to just go fix it for you so you don't need to like come back and like have to deal with it yourself." aria-label="回原文"></button><button class="pd-ts" data-t="50:09" data-who="SPEAKER_04" data-en="And then here is like finding the right balance between like what can we trust you know and like not changing core decisions of a PR you know like really more into like like nitpicks and like small fixes without changing the meaning of a of a code change that is being proposed." aria-label="回原文"></button>。

## 面试和晋升：从白板 coding 到真实场景

Simon 一直觉得传统的白板编程面试是低信号的。AI 让他们有机会彻底改变面试方式：给候选人一个大代码库，让他们用 AI 理解代码在做什么，然后讨论真实的工程问题——比如一段 diff 该给什么代码审查反馈。这同时也在考察候选人使用智能体的能力 <button class="pd-ts" data-t="52:09" data-who="Simon Boudrien" data-en="So can you share a little bit about the learnings there and like where you are today and maybe some key learnings. Yeah yeah yeah so um so personally I always hated leap code type of interviews where I think like they were low signal a way to like filter out some like candidates but I think like very often you know could just lead to like the wrong conclusion." aria-label="回原文"></button><button class="pd-ts" data-t="53:58" data-who="Simon Boudrien" data-en="So I've never thought that it were a nice way to hire people um I've never liked doing them personally and I've personally always felt like it it was kind of low signal basically so um so I think AI opened the door to uh to make a case to actually like review how we do interviewing especially coding interviews um and so um and so what we've done is we is like we've built a few squads to own different questions um and with AI in the interview it allow us to do much more than we could before and so it allows us to basically uh work in a much larger code base and asking like actual tasks that like somebody might be doing in their day to day and like assessing more signal than like yes they could write the code and in like 40 minutes and and like pass all all all of the tests but more like how's their how's their judgment how's their trade-off did they understand the code and so like with AI basically the new flow for most of the uh interview is going to be like here's a code base it's fairly large uh use AI to understand uh what it's doing what is going on what is this code base about uh and then afterward like let's like talk of an engineering problem so like maybe you want to uh extend this code base maybe there's like a diff, like basically kind of a code review that like somebody wants to merge should they what should we bring back in terms of like feedback to the code review." aria-label="回原文"></button>。

晋升标准也在调整。初级工程师的期望提高了：以前他们通常在大型项目里做支持角色，现在因为有了 AI，他们可以独立拥有一整个工作流，关键变成「会不会问对问题」<button class="pd-ts" data-t="55:23" data-who="Simon Boudrien" data-en="And I guess it does imply though that uh this is like an in-person type element you know there's no uh this isn't a kind of take home uh code review uh or like coding exercise it has to be inside and is that uh you just sort of accept I guess that's a uh a slight inefficiency in the sense that you need to talk to more people that you just take these with correct correct yeah and and how uh um I guess on the other side of it like when you think about people uh moving up the ladder and you think about people already in the job and doing it what has changed in terms of what do you uh assess them for for promotion?" aria-label="回原文"></button><button class="pd-ts" data-t="56:35" data-who="Simon Boudrien" data-en="Yeah yeah uh so we've reviewed our current guideline this year too um and so we got together with a group to like brainstorm about like what changed in terms of uh expectation like what is more kind of important today uh and so a few things to call out at the high level of like things that like we changed um one is for uh is for more junior roles I think we saw for everybody that like we had a higher kind of expectation about like the complexity of the work that they were going to own and like kind of push forward and so and so we uh updated you know kind of those roles um to actually reflect like the new kind of uh baseline expectation of just like you know yeah you can take a whole project you probably want some help from like somebody probably kind of understand asking the right questions um learning about you know the uh sort of core competency of like being an engineer uh but compared to before which was usually somebody would be in a support role on the larger project we're finding that like most of the time now they are they they are owning like kind of a whole work stream by themselves because they can now uh and then they just need to make sure that they're asking the right question." aria-label="回原文"></button>。

高级工程师的变化更大：以前做方案要花大量时间写文档和 RFC 讨论，现在更鼓励先用 AI 快速做几个 POC，实际跑出来看效果，带着具体结果回来做决策。讨论从「我觉得这行不通」变成了「我在这个场景跑过了，它确实能工作」<button class="pd-ts" data-t="57:04" data-who="Simon Boudrien" data-en="Is this solution uh the right one to the problem the customers are like having and so like there's much more of like a judgment call being done. Yeah and then in terms of an architecture based right yeah yeah correct correct and on the POC side of things is uh I think before we would spend a lot of time on like documents and uh RFCs to talk about like is this the right solution for that problem and all this and I think like there's there's like definitely value to those questions but I think uh now we can know more certainty around like is this gonna work or not if we do a POC first." aria-label="回原文"></button><button class="pd-ts" data-t="58:46" data-who="Simon Boudrien" data-en="Yeah and I think it helps a lot in discussion to just have something more concrete to talk about. Or like you might have concern oh this is not going to work but if you had it in a few scene and it does work, you know, it might prove the point that like okay no this is possible actually so like give you a bit more certainty in your direction." aria-label="回原文"></button>。

## 本集带走

- **用 eval 证明「少即是多」**：上下文会腐烂，定期用 eval 检验你的上下文文件是否还在提供价值——删掉它反而更好是完全可能的，但必须拿数据说话。
- **eval 从真实轨迹自动生成**：别指望开发者手写 eval 场景，从智能体的实际使用轨迹中自动提取常见模式，转成 eval 用例，让 eval 的维护也自动化。
- **上下文治理的三个原则**：① 早期不设结构让大家自由贡献；② 规模大了之后按团队/平台分治，别搞一个巨型市场；③ 与其往上下文里塞「怎么做」，不如确保工具本身的错误信息和下一步指引足够清晰。
- **后台智能体先吃「无可争辩正确」的任务**：CI 的 lint 错误、格式问题这类明确的小修复，交给后台智能体自动处理，严格不碰 PR 的核心决策。
- **面试给大代码库 + AI，不看白板编程**：考察的是在真实场景中用 AI 理解代码、做出工程判断的能力，同时隐性地测试了候选人的智能体使用水平。
- **高级工程师先 POC 再讨论**：用 AI 快速做多个原型，带着实际运行结果回来做决策，而不是花几周写 RFC 纸上谈兵。

> 【背景】Pi 指的是一个高度可定制的开源智能体工具框架（转写稿中称为 harness），OpenClaw 是基于 Pi 构建的。转写稿中多次出现的 claw code / clock code / flood code 均指 Claude Code。ELAD / ELON 均指 eval。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">但随后我们通过时间看到的是，用户越多，改变他们就越困难。</span>  
> *Uh but then what we saw through time is the more user we've had, the harder it became to go and like change them.*  
> <span class="qm">—— Simon Boudrien · [35:33]</span> ^q1

> <span class="qz">对我们来说发生的事情实际上是，一旦我们删除了整个上下文，eval 开始表现得更好，这是反直觉的，但就是这样，是的，那个文件很大，列出的东西不一定有用，或者不应该进入指导文件。</span>  
> *And what happened for us is actually like the eval started to perform like much better once we deleted the whole context, which was counter uh intuitive, but it's just like, yeah, that file was pretty big and was listing stuff that was not like necessarily useful or you know, that should not go into like a steering document.*  
> <span class="qm">—— Simon Boudrien · [38:11]</span> ^q2

> <span class="qz">基于我们的 eval，我认为开放权重模型要做到完全可行，假设基准线不随着该领域的进步而移动，它们需要表现得比今天好大约 50%。</span>  
> *Yeah so so yeah based on our evals I think open weight model to be like fully viable assuming the bar does not move as progress happened in the space would be that they would need to perform about 50% better than they are today.*  
> <span class="qm">—— Simon Boudrien · [47:51]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Datadog · 同概念:eval、代码审查 (code review)、智能体 (agent)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同公司:cursor · 同概念:上下文 (context)、智能体 (agent)</span>
- [[2026-08-09-talks-multiplayer-agentic-engineering-arjun-si|让非工程师也能下指令：Superconductor 的多人智能体协作法]]<span class="pd-rz">同公司:cursor · 同概念:上下文 (context)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-24-talks-inside-the-agent-engine-a-langchain-and|当系统出故障时，让 AI 代替作战室里的 50 个人——Traversal 谈如何造 AI SRE]]<span class="pd-rz">同公司:Datadog · 同概念:eval、上下文 (context)、智能体 (agent)、harness</span>
- [[2025-07-27-lennys-pricing-and-scaling-your-ai-product-madh|AI 定价的黄金象限：别把 20% 的价值白送]]<span class="pd-rz">同公司:cursor · 同概念:智能体 (agent)、POC</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同公司:cursor · 同概念:上下文 (context)、智能体 (agent)</span>

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
