---
title: Warp 如何打造云端智能体平台：把复杂性挡在用户之前
podcast: 精选演讲
date: 2026-09-25
source_url: undefined
duration: "20:30"
type: episode
cover: "#64748b"
description: Warp 工程师 Safia（开发者工具老手）讲云端智能体平台的构建哲学：托管与自托管沙箱、多 harness、智能体管开源仓库与 PR 审查。
guests: ["[[Safia Abdalla]]"]
companies: ["[[Warp]]"]
concepts: ["[[智能体]]", "[[子智能体]]", "[[编排]]", "[[沙箱]]", "[[harness]]", "[[API]]", "[[护栏]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-22-talks-the-agent-behind-the-curtain-building-th#post","headline":"Warp 如何打造云端智能体平台：把复杂性挡在用户之前","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-22-talks-the-agent-behind-the-curtain-building-th","mainEntityOfPage":"https://talk.solomind.cc/2026-08-22-talks-the-agent-behind-the-curtain-building-th","description":"Warp 工程师 Safia（开发者工具老手）讲云端智能体平台的构建哲学：托管与自托管沙箱、多 harness、智能体管开源仓库与 PR 审查。","datePublished":"2026-09-25","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Safia Abdalla"},{"@type":"Organization","name":"Warp"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"子智能体 (sub-agent)"},{"@type":"Thing","name":"编排 (orchestration)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"API"},{"@type":"Thing","name":"护栏 (guardrails)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Warp 如何打造云端智能体平台：把复杂性挡在用户之前","item":"https://talk.solomind.cc/2026-08-22-talks-the-agent-behind-the-curtain-building-th"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Warp 如何打造云端智能体平台：把复杂性挡在用户之前</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Warp 如何打造云端智能体平台：把复杂性挡在用户之前

<div class="pd-byl"><b>Safia Abdalla</b> · Warp 工程师 · 2026-09-25</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-22-talks-the-agent-behind-the-curtain-building-th.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">平台应该在复杂性到达用户之前就把它承担下来。</div><div class="a">— Safia Abdalla <button class="pd-ts" data-t="03:27" data-who="Safia Abdalla" data-en="Platforms should take on complexity before it reaches the user." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Safia Abdalla]]
>
> **公司** [[Warp]]
>
> **概念** [[智能体]] · [[子智能体]] · [[编排]] · [[沙箱]] · [[harness]] · [[API]] · [[护栏]]

这一集是 [[Warp|Warp]] 团队的一场技术演讲，标题叫《幕后[[智能体|智能体]]》，讲的是他们怎么构建云端智能体平台。主讲人是 Warp 的工程师 Safia（社交媒体账号 CaptainSafia），过去八年一直在做开发者工具：最早在 Jupyter Notebook 核心团队做 Python 和数据科学方向的开源，后来在微软帮 web 开发者构建 [[API|API]] 和 SDK，现在在 Warp 把 AI 智能体搬到云端 <button class="pd-ts" data-t="00:33" data-who="嘉宾" data-en="Before I talk about the how, though, I want to talk about the why and share a little bit about my own background. So I've spent the past eight years building developer tooling." aria-label="回原文"></button>。

她开场给出的核心原则只有一条：**平台应该在复杂性到达用户之前就把它承担下来**。真正好的体验，不应该把内部处理的「泄漏的复杂性」暴露给用户，让他们专注在真正重要的工作上 <button class="pd-ts" data-t="03:18" data-who="嘉宾" data-en="And when I say we here, I mean the people building developer tools because that is the person that I am. And it gets at one of the things that are like a core principle in how we think about unlocking capabilities here and building good developer tools is that platforms should take on complexity before it reaches the user." aria-label="回原文"></button>。

## 智能体在哪跑：沙箱，托管还是自托管

智能体不在开发者的机器上跑，就得有个地方干活——通常是[[沙箱|沙箱]]，也就是云端一个隔离环境。Warp 最早的方案是提供托管沙箱，开发者不用操心算力在哪，开箱即用 <button class="pd-ts" data-t="04:06" data-who="嘉宾" data-en="It needs a place to do its work like any developer would, and that place is typically a sandbox. It's an isolated environment in the cloud where agents do this task." aria-label="回原文"></button>。

但做严肃工作的团队往往自己管理基础设施、有自己的开发机，纯托管方案不够用。所以平台同时支持自托管：让智能体工作负载跑在团队自带的基础设施上，适配他们的安全要求、部署实践和工作流偏好。这套差别被平台抽象掉，用户感知不到 <button class="pd-ts" data-t="04:40" data-who="嘉宾" data-en="And so something that is hosted or managed is usually not sufficient. You really need to be able to run agent workloads on infrastructure that people bring so it adapts to their security concerns, their deployment practices, their workflows and preferences on their team." aria-label="回原文"></button>。

## 用什么 harness：多 harness 支持 + 统一护栏

[[harness|harness]]（驱动智能体的框架，如 Claude Code、Codex）是非常个人化的选择，开发者对它有强烈偏好。所以平台做的是多 harness 支持，既照顾偏好，也让人们能为具体任务选合适的工具 <button class="pd-ts" data-t="05:31" data-who="嘉宾" data-en="So much diversity in the room and we want to meet people where they work. So you want to integrate multi-harness support that not only accommodates preferences but also gives people the ability to use the right tool for the job." aria-label="回原文"></button>。

但灵活性不能硬塞进平台，否则体验会碎片化——用 Claude 和用 Codex、用自定义 harness 的感受完全不同。关键在于平台要围绕 harness 提供结构和[[护栏|护栏]]，让所有 harness 都能以同样的方式接入平台原生能力：存储并恢复会话状态、与智能体产出的工件交互（PR、issue、新生成的文件），结构全部统一 <button class="pd-ts" data-t="06:04" data-who="嘉宾" data-en="And so one of the key properties is making sure that the platform provides structure and guardrails around the harness so that the experience is consistent. For us, this means that harnesses can interact with all of the platform native experiences." aria-label="回原文"></button>。

## 一个智能体不够：编排与 API

真正的工程工作很少能装进一个 prompt 里。典型工作流可能是：一个智能体研究问题、规划方案，另一个负责实现，第三个做验证——而且你可能希望它们用不同的 harness 和模型，形成真正对抗性、稳健的方法 <button class="pd-ts" data-t="06:55" data-who="嘉宾" data-en="I wish that I could just send off one prompt and solve all of the problems that exist in my software, but the reality is that real engineering work rarely fits inside one prompt." aria-label="回原文"></button>。平台内置了跨技术栈的智能体[[编排|编排]]：用户只需一个 prompt 发起「编排」，一个编排者智能体就会在幕后处理与[[子智能体|子智能体]]交互、消息传递、工作跟踪的全部复杂细节 <button class="pd-ts" data-t="07:35" data-who="嘉宾" data-en="So I say slash orchestrate or I queue the agent via prompting that I wanted to delegate work across multiple sub-agents for a task that I have here. And this orchestrator agent will do all of the messy complexity of interacting with sub-agents, mediating messages between them, and tracking the work that's happening for me behind the scenes with a single prompt." aria-label="回原文"></button>。

更有意思的是通过 API 做同样的事。平台表面的一切都通过 API 暴露：启动智能体和子智能体、管理运行环境和算力、处理产出的工件，全都可以编程调用 <button class="pd-ts" data-t="08:56" data-who="嘉宾" data-en="And so we're trying to be intentional about exposing an API for every key component of the stack. So this is APIs for spinning up agents and sub-agents for managing the environments and compute that these agents are running in, for working with the artifacts that they produce." aria-label="回原文"></button>。Safia 认为这正是「平台」的关键——优秀 API 和 SDK 的妙处在于人们能在其上构建，不受限于你的 UI 或你对体验应该长什么样的个人看法 <button class="pd-ts" data-t="08:35" data-who="嘉宾" data-en="It's exposing the primitives in a way that users can build on top of. The thing about great APIs and SDKs is people can build on top of them, which means that they're not restricted to your UI or your opinion of how a particular experience should look." aria-label="回原文"></button>。

内部已经长出了不少意外用例：Warp 一批非工程背景的同事用 SDK 和 API 搭了自己的 Slack 机器人。比如开发者关系团队建了一套管理社交媒体提及的工具：推文、Reddit 帖子进来后，智能体会接手、做情感分析、理解用户诉求，然后给社交媒体团队起草一条建议回复 <button class="pd-ts" data-t="09:48" data-who="嘉宾" data-en="So we have folks in our developer relations team who have actually built out tooling to help us manage all of our social mentions. So as tweets and Reddit posts and things are coming in, we have agents that will pick them up, do some sentiment analysis on them, try and understand what the user wants, and then propose a response that folks on our social media team should use in response to the original tweet or Reddit post or what have you." aria-label="回原文"></button>。还有人用它回答产品运作相关的问题、做竞品研究 <button class="pd-ts" data-t="10:14" data-who="嘉宾" data-en="And you see a plethora of these types of experiences internally at Warp. We have people who have used them to help answer queries about how our product is working, do competitive research, all sorts of interesting things." aria-label="回原文"></button>。

## 智能体怎么管开源仓库：从 triage 到审查关卡

大约三个月前 Warp 决定开源（从终端成长为智能体开发环境之后），GitHub 星数从约两万飙升到超过六万，收到数千个 PR、数百位贡献者 <button class="pd-ts" data-t="10:39" data-who="嘉宾" data-en="As I mentioned earlier, Warp started off as a terminal, but it grew into an agentic development environment. And about three months ago, we decided to go open source." aria-label="回原文"></button>。

他们不想变成「智能体狂写代码狂发 PR」的局面，而是让智能体有意义地参与到仓库流程里，同时给人类保留参与空间 <button class="pd-ts" data-t="11:20" data-who="嘉宾" data-en="And when we went open source, we wanted to be really thoughtful about how we could use agents to help us manage the repository. We didn't want this to be the kind of thing where agents are just writing code and firing off PRs." aria-label="回原文"></button>。现在的实际做法：

- **自动 triage**：任何人提交 bug 报告或功能请求，智能体自动启动，在代码库和仓库上下文里做研究来理解诉求；如果觉得原始描述太抽象，还会反问提问者拿更多信息 <button class="pd-ts" data-t="11:43" data-who="嘉宾" data-en="And we did that. So if you go to the warp open source repo right now, you'll notice that if you file a new issue with a bug report or a feature request, an agent will kick in and start to triage the issue automatically." aria-label="回原文"></button>。这解决了开源历史上最难的一环——报告者细节不足，很难推进到可以动手的清晰度 <button class="pd-ts" data-t="12:06" data-who="嘉宾" data-en="It might ask you questions if it feels like your original query was a little abstract to get more information. And it will kind of do the work that's historically been very hard for open source, which is somebody has a problem or a bug that they want fixed, they don't give you enough details, and it's hard to get to the clarity that you need to get to to drive the work forward." aria-label="回原文"></button>。
- **规格起草与实现**：智能体帮助起草任务的初始规格、做实现。
- **审查关卡**：所有贡献到 Warp 的 PR 都经过智能体管理的审查流程，多次迭代；直到智能体批准之前，不会通知任何人类审查者。所以数千个 PR 里，人类真正要处理的只有高信号、高质量的少数 <button class="pd-ts" data-t="12:30" data-who="嘉宾" data-en="They can also help draft initial specifications and work for tasks, do implementation, and provide a review gate. So all PRs that get contributed to warp go through an agent-managed review process." aria-label="回原文"></button>。

关键原则是**自我改进循环**：随着仓库里 PR 和代码示例越来越多，持续改进智能体，以此增强整个 SDLC（软件开发生命周期）<button class="pd-ts" data-t="13:02" data-who="嘉宾" data-en="And one of the key principles is that we improve the agent as we get more PRs in the repo and we see more examples of code. One of the things that we believe is that self-improvement loops are a really important way for you to enhance the overall SDLC life cycle that you're seeing." aria-label="回原文"></button>。

由此他们有了顿悟：智能体提供结构和上下文，意味着**任何人都能参与把意图转化为实现**——而拥有最有趣意图的往往不是构建软件的人，是有领域知识的用户 <button class="pd-ts" data-t="13:38" data-who="嘉宾" data-en="And the agents were there to support anyone in bringing their idea or their bug feature request or bug report to AWARP and then getting it through to the actual product." aria-label="回原文"></button>。大多数软件是开发者为自己没有领域知识的人群构建的；只要提供结构和护栏这些基础设施，非开发者也能交付严肃的软件 <button class="pd-ts" data-t="14:19" data-who="嘉宾" data-en="But most software is developers building tools for non-developers in situations where they don't have domain expertise. If we provide these structures and guardrails, though, people who are non-developers can have the necessary tools to ship serious software because the infrastructure to support them exists." aria-label="回原文"></button>。

## 「软件工厂」这个词，她讨厌

业界流行「软件工厂」的说法，Safia 明确说她其实有点讨厌这个词——「它在哪体现了人？」<button class="pd-ts" data-t="15:01" data-who="嘉宾" data-en="I kind of actually hate it because I don't think it gets the point across and it feels a little, hmm, where's the people in this? So I want to tell a story before I share what I think is actually the better word." aria-label="回原文"></button>。她用一个故事讲自己认为更好的类比：

她两年前从一个农夫市集的陶艺师那里买了个马克杯。陶艺师对细节极度讲究：手柄顶部有个放拇指的凹槽，是关键的人体工学细节；杯口上釉，溢出来也不会顺着杯壁淌 <button class="pd-ts" data-t="15:22" data-who="嘉宾" data-en="And I stopped by this booth at the farmer's market and you could just tell the person who had crafted this, the potter was just someone who was like really passionate about their work and what they do." aria-label="回原文"></button>。

更打动她的是聊到工作室时对方更兴奋——为杯子的不同部件设不同工位、有专门的黏土采购和预备流程、每个部件都有验证环节（凹槽尺寸不对该重启流程的哪一步？）。这些思考不是放在杯子本身，而是放在**工作室如何支撑杯子的创造**上，而且扩展到了几十个学徒、每天手工几百个杯子 <button class="pd-ts" data-t="16:23" data-who="嘉宾" data-en="What part of the process would you restart? All of this thought that he had put not into the mug itself, but how the workshop existed to support the creation of the mug, and how he was able to scale this to dozens of apprentices in his shop and like hundreds of mugs handcrafted per day, which is pretty impressive." aria-label="回原文"></button>。

她从中提炼出：真正需要的不是「工厂」，而是严肃的、可重复的、可塑的重型工作系统——它会响应信号、随人们的互动自我调整，并且人和系统之间有紧密的互动回路 <button class="pd-ts" data-t="17:01" data-who="嘉宾" data-en="He had this really great idea and he developed a serious and repeatable system that allowed anyone to take the idea of a perfect mug and turn it into the actual existence of a perfect mug." aria-label="回原文"></button>。落到工程上就是三件事：

- **对现实事件做反应的自动化**：就像陶艺师要对「窑炉失控、把手断裂」做出反应，智能体也要能实现响应现实世界事件的自动化 <button class="pd-ts" data-t="18:10" data-who="嘉宾" data-en="We break this down into the same techniques that my Potter friend had and the same methodologies that I talked about earlier about exposing primitives. We expose things like the ability for these agents to implement automations that react to events in the real world the same way that a human in a workspace might need to react to a real event of a kiln being a stray or a handle being broken." aria-label="回原文"></button>。
- **可观测性**：这不是免费的——系统必须真的可以被检查和深入查看。工作室不是静态组件，它要对正在发生的事做出反应、调整自身，去服务于在其中工作的人的目标和它生产的产品 <button class="pd-ts" data-t="18:28" data-who="嘉宾" data-en="We expose things like the ability for these agents to implement automations that react to events in the real world the same way that a human in a workspace might need to react to a real event of a kiln being a stray or a handle being broken." aria-label="回原文"></button>。
- **成本效益**：减少从另一端产出的破损杯子，也就是有 bug 的软件——而且要在不牺牲成本、不过度烧 token 的前提下做到 <button class="pd-ts" data-t="19:01" data-who="嘉宾" data-en="And it needs to be cost effective. You wanna reduce the number of broken mugs that come out the other end. You wanna reduce the amount of buggy software that comes out of the other end of your factory." aria-label="回原文"></button>。

所有这些原则服务于一个共同目标：构建消除软件流程中劳苦与繁重工作的系统，让更多人有能力去构建——复现 bug 的困难、监控生产系统的挑战，这些终于可以被结构化、可重复地做，并且能转移给非技术岗位的人 <button class="pd-ts" data-t="19:21" data-who="嘉宾" data-en="All of these principles work to achieve a shared goal. And that shared goal is building systems that remove toil and drudgery from our software process so that more people have the ability to build." aria-label="回原文"></button>。

## 本集带走

- **复杂性平台先扛**：托管/自托管沙箱的差异、多 harness 的碎片化风险，都应该被平台结构和护栏吸收，别漏给用户。
- **编排不止一种入口**：一个 prompt 让编排者智能体调度子智能体只是表层的；给技术栈每个关键组件（起智能体、管环境、处理工件）都暴露 API，才能让别人在你没想象到的地方构建——Warp 内部非工程师都在用 SDK 搭 Slack 机器人。
- **智能体管开源仓库的正确姿势**：不是让它狂发 PR，而是让它做 triage（研究代码库、追问细节）、起草规格、把守审查关卡——智能体批准前不吵人类审查者，人只看高信号的少数。
- **PR 越多系统越强**：把进来的 PR 和代码示例当反馈源，持续迭代审查智能体，形成自我改进循环。
- **别叫「软件工厂」**：更好的心智模型是陶艺师的工作室——严肃、可重复、可观测、会自我调整的工作系统，人在环中，目标是用得起、少出废品，让更多人（包括非开发者）能把意图变成实现。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">平台应该在复杂性到达用户之前就把它承担下来。</span>  
> *Platforms should take on complexity before it reaches the user.*  
> <span class="qm">—— Safia Abdalla · [03:27]</span> ^q1

> <span class="qz">一个真正好的体验，不应该把它所处理的任何泄漏出来的复杂性暴露给你。</span>  
> *A really good experience should not expose anything of the leaky complexity that it handles to you.*  
> <span class="qm">—— Safia Abdalla · [03:31]</span> ^q2

> <span class="qz">我多希望自己只发一个 prompt 就能解决软件里的所有问题，但现实是，真正的工程工作很少能装进一个 prompt 里。</span>  
> *I wish that I could just send off one prompt and solve all of the problems that exist in my software, but the reality is that real engineering work rarely fits inside one prompt.*  
> <span class="qm">—— Safia Abdalla · [06:45]</span> ^q3

> <span class="qz">你可能希望这些智能体中的每一个使用不同的 harness 和不同的模型，以便形成真正对抗性且稳健的方法。</span>  
> *And you might want each of these agents to use different harnesses and different models in order to have a real adversarial and robust approach.*  
> <span class="qm">—— Safia Abdalla · [07:05]</span> ^q4

> <span class="qz">优秀 API 和 SDK 的妙处在于人们可以在其上构建，这意味着他们不受限于你的 UI，也不受限于你对某个体验应该长什么样的个人看法。</span>  
> *The thing about great APIs and SDKs is people can build on top of them, which means that they're not restricted to your UI or your opinion of how a particular experience should look.*  
> <span class="qm">—— Safia Abdalla · [08:35]</span> ^q5

> <span class="qz">智能体提供结构和上下文这个关键洞察对我们来说非常重要，因为它意味着任何人都可以参与把他们的意图转化为实现。</span>  
> *That key insight of agents providing structure and context was a really big thing for us because it meant that anyone could participate in translating their intent into implementation.*  
> <span class="qm">—— Safia Abdalla · [13:38]</span> ^q6

> <span class="qz">拥有最有趣意图的不一定是构建软件的人，而是那个在这个领域拥有领域知识的人。</span>  
> *And it's not always the person that's building it. It's the person who's kind of got domain knowledge in the space.*  
> <span class="qm">—— Safia Abdalla · [13:59]</span> ^q7

> <span class="qz">这个共同的目标就是构建能消除软件流程中劳苦和繁重工作的系统，让更多的人有能力去构建。</span>  
> *And that shared goal is building systems that remove toil and drudgery from our software process so that more people have the ability to build.*  
> <span class="qm">—— Safia Abdalla · [19:21]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同概念:harness、护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同概念:harness、智能体 (agent)、沙箱 (sandbox)、Claude Code、护栏 (guardrails)</span>
- [[2026-09-09-pragmatic-building-codex-with-tibo-sottiaux|Codex 负责人亲述:OpenAI 内部如何造编程智能体]]<span class="pd-rz">同概念:harness、智能体 (agent)、沙箱 (sandbox)、Codex、护栏 (guardrails)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-02-12-lennys-engineers-are-becoming-sorcerers|OpenAI 内部怎么用 AI 写代码：从巫师比喻到一人独角兽的二阶效应]]<span class="pd-rz">同概念:API、智能体 (agent)、Codex、护栏 (guardrails)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、Codex</span>

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
