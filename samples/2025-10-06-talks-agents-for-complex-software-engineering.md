---
title: Vibe debugging：代码生成之后，生产环境才是真正的硬仗
podcast: 精选演讲
date: 2026-09-16
source_url: undefined
duration: "35:06"
type: episode
cover: "#64748b"
description: Resolve AI 联合创始人兼 CTO Mayank 与工程 VP Roshan 讲解为什么要用智能体自动化事故排查与生产运维，以及为什么这是比代码生成更难、更大的问题。
host: "[[Corinne Riley]]"
cohosts: ["[[Mayank]]", "[[Roshan]]"]
companies: ["[[Resolve AI]]", "[[OpenTelemetry]]", "[[Splunk]]"]
concepts: ["[[智能体]]", "[[代码生成]]", "[[vibe coding]]", "[[vibe debugging]]", "[[部落知识]]", "[[知识图谱]]", "[[护栏]]", "[[评估]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2025-10-06-talks-agents-for-complex-software-engineering#post","headline":"Vibe debugging：代码生成之后，生产环境才是真正的硬仗","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2025-10-06-talks-agents-for-complex-software-engineering","mainEntityOfPage":"https://talk.solomind.cc/2025-10-06-talks-agents-for-complex-software-engineering","description":"Resolve AI 联合创始人兼 CTO Mayank 与工程 VP Roshan 讲解为什么要用智能体自动化事故排查与生产运维，以及为什么这是比代码生成更难、更大的问题。","datePublished":"2026-09-16","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Corinne Riley"},{"@type":"Person","name":"Mayank"},{"@type":"Person","name":"Roshan"},{"@type":"Organization","name":"Resolve AI"},{"@type":"Organization","name":"OpenTelemetry"},{"@type":"Organization","name":"Splunk"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"代码生成 (code generation)"},{"@type":"Thing","name":"vibe coding"},{"@type":"Thing","name":"vibe debugging"},{"@type":"Thing","name":"部落知识 (tribal knowledge)"},{"@type":"Thing","name":"知识图谱 (knowledge graph)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"评估 (evaluation)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Vibe debugging：代码生成之后，生产环境才是真正的硬仗","item":"https://talk.solomind.cc/2025-10-06-talks-agents-for-complex-software-engineering"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Vibe debugging：代码生成之后，生产环境才是真正的硬仗</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Vibe debugging：代码生成之后，生产环境才是真正的硬仗

<div class="pd-byl"><b>Mayank</b> · Resolve AI 联合创始人兼 CTO · 2026-09-16</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2025-10-06-talks-agents-for-complex-software-engineering.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">是的，我觉得这里的北极星指标就是，你实际上能多快地发布到生产环境，对吧？</div><div class="a">— Roshan <button class="pd-ts" data-t="12:17" data-who="Roshan" data-en="Yeah, I think the North Star here is like how much faster can you actually ship to prod, right?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Corinne Riley]] · [[Mayank]] · [[Roshan]]
>
> **公司** [[Resolve AI]] · [[OpenTelemetry]] · [[Splunk]]
>
> **概念** [[智能体]] · [[代码生成]] · [[vibe coding]] · [[vibe debugging]] · [[部落知识]] · [[知识图谱]] · [[护栏]] · [[评估]]

这一集是 Greylock 的「Change Agents」系列，聊的是[[智能体|智能体]] AI 在复杂软件工程里的落地。两位主角：[[Mayank|Mayank]] 是 [[Resolve AI|Resolve AI]] 的联合创始人兼 CTO，职业生涯几乎全在做开发者工具和监控系统，参与创建了开源项目 [[OpenTelemetry|OpenTelemetry]]（把遥测数据的插桩和路由方式标准化的项目），上一家公司被 [[Splunk|Splunk]] 收购后他做到了所有监控产品的首席架构师；[[Roshan|Roshan]] 是工程副总裁，做过 Apple Siri 的自然语言理解负责人，后在 Google 参与 Google Assistant、Bard、Gemini，其团队发布过 DeepResearch 和 Canvas。

抛出来的钩子是：整个行业都在为 AI 写代码欢呼，但 Resolve 认为真正的大问题在下游——**[[代码生成|代码生成]]得越快，生产环境的瓶颈就越大**。

## 写代码只占工程师 10-20% 的时间

Mayank 在 Splunk 看到的现实是：随着团队变大，工程师可能只有 10%、20% 的时间在真正交付新功能，剩下的大部分时间花在运维生产、处理事故、填合规问卷、变更上线流程、优化成本上。Splunk 生产环境里的微服务数量比工程师还多——没有多少人端到端地了解整个系统 <button class="pd-ts" data-t="06:26" data-who="Mayank" data-en="So I would say one thing that a lot of people don't realize is software engineering is a lot more than writing code, right? At Splunk, what I saw as a team grew in size, our engineers were spending maybe 10, 20% of their time actually shipping new features." aria-label="回原文"></button>。

所以他的判断是：代码创建上的收益是真实且不可否认的（Resolve 自己团队用 Claude、GitHub Copilot、Cursor 这类工具产出代码快了大概 2、3 倍），但这只是「矛尖」。要实现软件工程的真正高生产力提升，得自动化那些需要跨工具、跨运营边界、依赖大量[[部落知识|部落知识]]（没写下来、只存在人脑里的经验）的复杂活动，让「环境智能体」在后台完成复杂工作，人不必一直握着方向盘 <button class="pd-ts" data-t="08:02" data-who="Mayank" data-en="From what you've seen so far with Resolve, are enterprises using AI in production today or is it all just experiments? I would say people are already realizing a lot of value with Gen AI." aria-label="回原文"></button>。

Roshan 补了一个关键观察：用代码生成工具你确实能更快地产出代码，**但团队实际发布到生产的速度并没有快那么多**——那才是拼图里缺的一块 <button class="pd-ts" data-t="08:58" data-who="Roshan" data-en="Anything to add? Yeah, I mean, I think the way I think about it is, you know, with some of these code generation tools, you can crank out code like much faster, but, you know, teams aren't really shipping to production that much faster, right?" aria-label="回原文"></button>。AI 让代码更快涌出来，反而让下游更堵：理解软件生产行为的时间更少、在生产环境调试它的专业知识也更稀薄。这就是他们创办 Resolve 的理由：复杂性正在向生产环境转移，而源代码只是运营生产的众多工具之一，遥测系统、基础设施、Slack 和 runbook 里的部落知识同样重要，而且生产环境一直在变，知识还必须保持最新 <button class="pd-ts" data-t="10:03" data-who="Mayank" data-en="And how to operationalize this software, we have less time to understand the production behavior of that software, kind of less time to, there is less know-how about how to debug it in production." aria-label="回原文"></button>。

## 衡量标准：多快发布到生产

对事故响应这个场景，指标是平均解决时间（MTTR）：多快响应、多快缓解、要动用多少人力——一次复杂事故可能把不同值班轮换里的很多工程师吵醒，事后还要写复盘 <button class="pd-ts" data-t="10:57" data-who="Mayank" data-en="How do you measure the outcomes that you want to drive with this agentic AI in software engineering? So for on-call and incident response, it's the mean time to resolution." aria-label="回原文"></button>。但不止事故：日常还要登 VPN、跑 kubectl 命令、登日志工具看系统健康，这种「千刀万剐式」的小消耗也是 Resolve 在啃的场景。

现在连他们的销售都在 Slack 里问「这个子系统最近有没有变更」。Roshan 给的北极星更直白：**你实际上能多快把东西发布到生产环境**——搭原型和 V1 很容易，难点全在上线时冒出的意外；如果上线能简单到和搭 V1 一样，那就是阶跃式改进 <button class="pd-ts" data-t="12:17" data-who="Roshan" data-en="So there is good parts to it. Yeah, I think the North Star here is like how much faster can you actually ship to prod, right? So like what I've seen both from my past experience and also from like companies that we work with, it's pretty easy to spin up like a prototype and a V1 and then it just takes so long to actually deploy that to production, right?" aria-label="回原文"></button>。

## Vibe debugging：给 vibe coding 补上后半程

Roshan 承认 [[vibe coding|vibe coding]] 名声不太好，但认为它的问题不是走错方向，而是**走得不够远**：你快速搭出了代码、部署了、出了问题，但你对自己构建的东西没有深入理解，得靠别人去修，学习也没法传递回来。Resolve 提出的对应概念是 [[vibe debugging|vibe debugging]]——vibe coding 给你速度，vibe debugging 给你清晰度，两者合起来才能跨过那道坎 <button class="pd-ts" data-t="13:14" data-who="Roshan" data-en="But are coding agents really just creating a bigger problem for production? Yeah, I think vibe coding gets a bad rap and I think it has a slightly pejorative connotation." aria-label="回原文"></button>。

一个具体例子说明什么叫「理解生产」：回答「我的前端服务健康吗」是个非常复杂的问题——你得知道前端跑在哪、数据在哪、主要面板是什么、日志在哪、答案到底在哪。首先要弄清该操作哪个工具，再以正确的方式操作它 <button class="pd-ts" data-t="14:24" data-who="Mayank" data-en="So, I mean, in my mind, you know, to perform these kind of tasks, like, you know, help me understand what commit has landed in production, or, you know, like, is this feature flag enabled, right?" aria-label="回原文"></button>。

还有超越表面相关性、深入因果链：这些东西同时开始出问题，但事件链是什么、从哪开始、怎么传播的 <button class="pd-ts" data-t="16:15" data-who="Mayank" data-en="So that's where I see Vype debugging providing a lot of value. Yeah. And then there's also going beyond the superficial correlation into causation." aria-label="回原文"></button>。他提到一位客户每周要花两小时人工整理 SLO 预算的运维报告——查追踪、翻日志、总结事故——这种事没有理由不能交给 AI <button class="pd-ts" data-t="15:20" data-who="Mayank" data-en="People see a lot of value in resolve in even these day-to-day situations. I was talking to a customer today. So this customer told me that they spent two hours every week creating an operational report on their SLO budgets." aria-label="回原文"></button>。

## 为什么不能自己拿聊天机器人套一下

在静态知识上拖个聊天机器人远远不够，因为生产环境是不断变化的：每个环境有复杂的拓扑结构、有部落知识、有时序理解，还有你想要采取的动作——这是 V1 级 co-pilot 和真正自主系统之间的区别 <button class="pd-ts" data-t="16:42" data-who="Mayank" data-en="I think it's a good question. I think the way I think about it is you can drag over some static knowledge in a bunch of different domains, but production is not that." aria-label="回原文"></button>。

难度有多大？Mayank 给了两个数据点：Resolve 正朝着**每季度消耗一万亿 token** 前进，大约相当于整个 Azure 的 1%，相当于每周从零开始完整重做两次 Stack Overflow <button class="pd-ts" data-t="17:34" data-who="Mayank" data-en="Well, I will just put one data point out there, which I think we are really proud of. So, here at Resolve, we are now on track to consume one trillion tokens per quarter." aria-label="回原文"></button>。

更本质的复杂性在于：调试最复杂的事故，连资深工程师都要花很久，事故拖得越久，越高阶的工程师和高管跳上电话会议， collective 的诀窍汇聚在一起才搞清楚发生了什么。而且这比用 AI 创建一个 PR 难得多——创建 PR 时你大致知道预期产出是什么，调试事故时你真的不知道发生了什么，既需要第一性原理推理，又需要肌肉记忆，还有大量没被写下来的部落知识；runbook 多半已经过时 <button class="pd-ts" data-t="18:34" data-who="Mayank" data-en="And that's a level of complexity of the task that you are trying to automate. In some sense, it's a lot more complex than trying to use AI to create a PR. Because if I'm creating a PR, I already know somewhat the outcome of this PR that I expect to look like." aria-label="回原文"></button>。

Resolve 的核心组件叫**[[知识图谱|知识图谱]]**：为任何环境的复杂性建模——每个环境都有自己的工具、约定、模式和数据，知识图谱让 Resolve 自动学习任何新环境、开始表现得像经验丰富的工程师，并且自我学习、自我更新，成为运行时智能体调查事故时可用的现成知识 <button class="pd-ts" data-t="19:25" data-who="Mayank" data-en="How does Resolve capture the tribal knowledge from its customers? So that's one of the components that we call our knowledge graph. These systems are very, very complex." aria-label="回原文"></button>。具体怎么捕获部落知识？就像初级工程师一样：通过参加事故电话会议和事故频道来跟随资深工程师学习，或者被人类指导着去验证某个假设，下次它就会记得主动去查那类假设 <button class="pd-ts" data-t="30:23" data-who="Mayank" data-en="Yeah. And then there are things that it doesn't know on day one. And just like a junior engineer, it is shadowing senior engineers by joining incident calls, incident channels, right?" aria-label="回原文"></button>。

那能不能直接扩展 Cursor 这类工具来解决生产问题？Roshan 的答案是：代码生成工具是为「代码这个可寻址的宇宙」设计的，而生产系统像一只活生生的、会呼吸的动物——是代码、基础设施、部署、流量行为、部落知识相互作用产生的涌现行为，且每个环境都不同，这对通用编码智能体来说是严重超出分布范围的 <button class="pd-ts" data-t="20:21" data-who="Roshan" data-en="Can I just extend that to solve my production problems? Yeah, I mean, look, I think it's a good question, but, you know, CodeGen tools are sort of, you know, designed to operate on the sort of the addressable universe of code, right?" aria-label="回原文"></button>。

Mayank 补了个真实案例：客户用 Resolve 排查事故后，进一步让它在理解代码、日志和追踪的基础上提出一个防止问题复发的单元测试——用户说那是他们自己想不出来的。没有对生产实际状况的深刻理解，编码智能体不可能做到这一点 <button class="pd-ts" data-t="21:14" data-who="Mayank" data-en="Yeah. I will give another example of why coding agents cannot necessarily solve the kinds of complex production problems that we are solving. Well, it's actually a real-world example that, again, I saw recently." aria-label="回原文"></button>。

## 团队、评估与失败模式

要构建能导航生产系统的智能体，你需要 AI 和生产系统两边都是世界级的人。大多数 AI 团队懂模型但对生产复杂性没直觉，大多数基础设施团队泡在生产里但对构建智能体编排没感觉——两者在一线深度嵌合才是魔法的关键 <button class="pd-ts" data-t="22:43" data-who="Roshan" data-en="What type of skills and team members do you need to build an agentic AI that can navigate production systems? Yeah, I mean, I think you need world-class folks both on the AI side as well as in terms of production systems." aria-label="回原文"></button>。Resolve 的使命不止做助手，而是构建能自主采取行动修复事故的闭环修复系统，这需要达到足够高的准确度 <button class="pd-ts" data-t="24:02" data-who="Mayank" data-en="Yeah, I mean, I would second that. It takes a special team to solve the kinds of problems that we are taking on. Our mission is to not just be an assistant and help people accelerate incident troubleshooting, but actually build a closed-loop remediation system that can actually get to the level of accuracy that it can take actions and start fixing incidents on its own." aria-label="回原文"></button>。

[[评估|评估]]是最难的部分。代码生成进步快，一个重要原因是它能构建可验证、可评估的环境；生产调试没有现成数据集，**光是拿到数据集就非常非常难**，所以别指望基础模型在这些任务上自动持续变好——它们根本接触不到这类数据 <button class="pd-ts" data-t="32:12" data-who="Roshan" data-en="And so I think that paradigm has a lot of legs. And maybe one more thing I would add on the topic of evaluating this system is that there is no available data sets about how to think about causality, how to debug these incidents, and these data sets are very, very hard to create in and of themselves." aria-label="回原文"></button>。他们在沙箱里模拟大量事故，也探索把模型本身用作操作员、调整到与专家级人类工作者的做法高度相关，这个范式大有可为 <button class="pd-ts" data-t="31:09" data-who="Roshan" data-en="That's where Roushin comes in. Yeah, it is hard. There's a bunch of things that we need to nail down over here." aria-label="回原文"></button>。

面对「模型经常自信地犯错」的提问，Roshan 说这里存在持续的张力：[[护栏|护栏]]放多了能保证结果有依据，但会损失模型的涌现式推理；挑战在于了解模型现在在哪、走向何方，找到恰到好处的护栏——让幻觉足够少，同时模型还能像专家工程师那样提出可行假设并缩小范围 <button class="pd-ts" data-t="33:19" data-who="Roshan" data-en="Yeah, so I think learning to grow from user interactions and all I think is a first class citizen in terms of how we're architecting resolve. I think to your broader question, yeah, I think there's this sort of constant tension between how many sort of guardrails do you sort of put on these models, right?" aria-label="回原文"></button>。而从用户交互中学习成长，在他们的架构里是一等公民 <button class="pd-ts" data-t="33:10" data-who="Mayank" data-en="Maybe it can be interactive with the user or maybe the system can learn to grow from info that's not in scope over time. Yeah, so I think learning to grow from user interactions and all I think is a first class citizen in terms of how we're architecting resolve." aria-label="回原文"></button>。

有观众问生产系统会不会演变得更兼容 AI 智能体。Mayank 的回答很务实：数据孤岛确实是个挑战（指标散落在 CloudWatch、Datadog、Grafana 里，常常同属一家公司），遵循 OpenTelemetry 这类最佳实践会让工具更好用，但 AI 真正的机会在于**不需要你遵守一条黄金路径、不需要预先做大量改造才能开始产生价值** <button class="pd-ts" data-t="27:19" data-who="Mayank" data-en="And if so, what technologies do you think will win out if people start modifying their architectures? Yeah, so I think, you know, there is an element of how can I make my systems be AI ready, right?" aria-label="回原文"></button>。

## 本集带走

- **别只盯代码生成**:工程师只有 10-20% 时间在写新功能，AI 让代码更快涌出反而加大生产环境的排查与运维瓶颈——下一个大杠杆在生产侧。
- **上线速度才是北极星**：衡量 AI 对工程效率的贡献，看「从 V1 到真正发布到生产」能压缩多少，而不是代码产出行数。
- **生产系统 ≠ 代码**:它是代码、基础设施、部署、流量、部落知识的涌现行为，每个环境都独特且持续变化，套个静态聊天机器人不够，通用编码智能体也严重超出其分布范围。
- **最难的不是写提示词，是数据和评估**：生产调试没有现成数据集、且极难创建，这既是护城河也是基础模型无法自然进步的原因。
- **护栏与推理要找平衡**：护栏太多会压掉模型的涌现式推理，太少会幻觉；正确姿势是跟着模型能力演进调整，并让系统从用户交互中持续学习。
- **捕部落知识学初级工程师**：让智能体参加事故会议、被人类指导验证假设、记住下次主动去查——这是让系统随时间像资深工程师的方向。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">是的，我觉得这里的北极星指标就是，你实际上能多快地发布到生产环境，对吧？</span>  
> *Yeah, I think the North Star here is like how much faster can you actually ship to prod, right?*  
> <span class="qm">—— Roshan · [12:17]</span> ^q1

> <span class="qz">在 Resolve，我们现在正朝着每季度消耗一万亿 token 的方向前进。</span>  
> *So, here at Resolve, we are now on track to consume one trillion tokens per quarter.*  
> <span class="qm">—— Roshan · [17:34]</span> ^q2

> <span class="qz">这相当于每周从零开始完整重做两次 Stack Overflow。</span>  
> *This is the equivalent of doing Stack Overflow completely from scratch twice every week.*  
> <span class="qm">—— Roshan · [17:51]</span> ^q3

> <span class="qz">我认为这里的论点是：如果你行动得不够快、没有变得 AI 优先，在我看来你就面临巨大的风险，会被其他这么做的公司颠覆。</span>  
> *I think the sort of the thesis over here is that if you don't move fast enough to sort of become AI first, you are at a huge risk in my opinion of being disrupted by somebody else who does.*  
> <span class="qm">—— Roshan · [26:11]</span> ^q4

> <span class="qz">所以并不是基础模型就会在这些类型的任务上不断变得更好，因为它们根本没有这些数据集的访问权限。</span>  
> *So it's not like the foundation models are just going to keep getting better at these kind of tasks because they just don't have access to these data sets.*  
> <span class="qm">—— Mayank · [32:24]</span> ^q5

> <span class="qz">但我认为真正的机会在于，AI 不需要你遵守一条黄金路径。</span>  
> *But I think that really the opportunity is that AI need not require you to abide to a golden path.*  
> <span class="qm">—— Mayank · [28:18]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-09-beyondcoding-cracked-solo-dev-why-the-fastest-enginee|氛围编码 vs 氛围工程：智能体时代谁被淘汰]]<span class="pd-rz">同概念:vibe coding、护栏 (guardrails)、智能体 (agent)</span>
- [[2026-08-09-talks-always-on-agents-run-production-without|当代码生成加速，谁来填运维的坑：用后台智能体接手生产环境长尾工作]]<span class="pd-rz">同公司:Resolve AI、Splunk · 同概念:智能体 (agent)、可观测性 (observability)、沙箱 (sandbox)</span>
- [[2025-06-03-talks-pioneering-agentic-applications-with-dec|三位 AI 智能体公司 CEO 圆桌：从 Copilot 到智能体，还要几年？]]<span class="pd-rz">同公司:Splunk · 同概念:护栏 (guardrails)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:vibe coding、智能体 (agent)、可观测性 (observability)、护栏 (guardrails)</span>
- [[2026-02-12-lennys-engineers-are-becoming-sorcerers|OpenAI 内部怎么用 AI 写代码：从巫师比喻到一人独角兽的二阶效应]]<span class="pd-rz">同概念:vibe coding、智能体 (agent)、护栏 (guardrails)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>

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
