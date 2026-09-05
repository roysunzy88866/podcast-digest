---
title: Harness 工程：让智能体零人工写代码的实操
podcast: The AI-Native Dev
date: 2026-08-30
source_url: undefined
duration: "55:26"
type: episode
cover: "#64748b"
image: "/covers/2026-06-09-ainativedev-ryan-lopopolo-openai-39-s-framework-for.jpg"
description: OpenAI 的 Ryan Lopopolo 讲解 harness 工程——如何通过上下文和工具的设计，让编码智能体自主产出可合并的代码，实现零人工编写、零人工审查。
host: "[[Guy Fajani]]"
guests: ["[[Ryan Lopopolo]]"]
companies: ["[[Codex]]", "[[OpenAI]]", "[[Symfony]]"]
concepts: ["[[harness 工程]]", "[[智能体]]", "[[提示词注入]]", "[[护栏]]", "[[规范]]", "[[测试时计算]]", "[[异步循环]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/covers/2026-06-09-ainativedev-ryan-lopopolo-openai-39-s-framework-for.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-06-09-ainativedev-ryan-lopopolo-openai-39-s-framework-for#post","headline":"Harness 工程：让智能体零人工写代码的实操","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-06-09-ainativedev-ryan-lopopolo-openai-39-s-framework-for","mainEntityOfPage":"https://talk.solomind.cc/2026-06-09-ainativedev-ryan-lopopolo-openai-39-s-framework-for","description":"OpenAI 的 Ryan Lopopolo 讲解 harness 工程——如何通过上下文和工具的设计，让编码智能体自主产出可合并的代码，实现零人工编写、零人工审查。","datePublished":"2026-08-30","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-06-09-ainativedev-ryan-lopopolo-openai-39-s-framework-for.jpg","about":[{"@type":"Person","name":"Guy Fajani"},{"@type":"Person","name":"Ryan Lopopolo"},{"@type":"Organization","name":"Codex"},{"@type":"Organization","name":"OpenAI"},{"@type":"Organization","name":"Symfony"},{"@type":"Thing","name":"harness 工程 (harness engineering)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"提示词注入 (prompt injection)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"规范 (spec)"},{"@type":"Thing","name":"测试时计算 (test time compute)"},{"@type":"Thing","name":"异步循环 (asynchronous loops)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"Harness 工程：让智能体零人工写代码的实操","item":"https://talk.solomind.cc/2026-06-09-ainativedev-ryan-lopopolo-openai-39-s-framework-for"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Harness 工程：让智能体零人工写代码的实操</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Harness 工程：让智能体零人工写代码的实操

<div class="pd-byl"><b>Ryan Lopopolo</b> · OpenAI · 2026-08-30</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-06-09-ainativedev-ryan-lopopolo-openai-39-s-framework-for.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">使用这些工具保持高速度的一个很大部分，就是不允许垃圾代码进入代码库。</div><div class="a">— Ryan Lopopolo <button class="pd-ts" data-t="11:36" data-who="Ryan Lopopolo" data-en="A big part of maintaining high velocity with these tools is just not permitting slop to enter the code base." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Ryan Lopopolo]] · [[Guy Fajani]]
>
> **公司** [[Codex]] · [[OpenAI]] · [[Symfony]]
>
> **概念** [[harness 工程]] · [[智能体]] · [[提示词注入]] · [[护栏]] · [[规范]] · [[测试时计算]] · [[异步循环]]

这一集是 [[OpenAI|OpenAI]] 的 [[Ryan Lopopolo|Ryan Lopopolo]] 在 AI Native DevCon 2026 大会上聊" [[harness 工程|harness 工程]]"(harness engineering)——一种让编码[[智能体|智能体]]在你的代码库里自主完成高质量工作的方法体系。最颠覆的一点是：他的团队做到了零人类编写代码、大部分情况下零人工代码审查，而且当 [[Codex|Codex]] 悄悄把底层实现从 MCP 协议换成完全不同的 TypeScript 守护进程时，他竟然毫不知情，工作流零中断 <button class="pd-ts" data-t="00:08" data-who="Ryan Lopopolo" data-en="Chrome DevTools protocol MCP was how we started out. Eventually, I kind of took a peek at the code and it was entirely different. Still, Codex was connecting to the Electron app over Chrome DevTools protocol, but it was actually a local TypeScript daemon that was being spun up that was providing a little CLI interface instead of the MCP because we found that there were only two or three tool calls that we actually needed, just more context efficient as faster." aria-label="回原文"></button>。

## 什么是 harness 工程

harness 工程的核心思路是：光有聪明的模型不够，你要把"什么是好代码"的所有非功能性需求——测试怎么写、lint 怎么跑、重构循环怎么转——全部写下来，在正确的时间喂给智能体，让它在没有你干预的情况下也能闭环产出可合并的代码 <button class="pd-ts" data-t="03:06" data-who="Ryan Lopopolo" data-en="For the layman, what is harness engineering? Yeah, so we have these wonderful technology and these coding agents and these fantastic models that are very smart and able to produce a ton of code." aria-label="回原文"></button>。

和之前说的上下文工程(context engineering)相比，harness 工程是把"给什么上下文"和"给什么工具"两个杠杆组合起来用，而且独特之处在于——它用工具调用本身来做[[提示词注入|提示词注入]]，让智能体自己管理上下文窗口 <button class="pd-ts" data-t="04:30" data-who="Ryan Lopopolo" data-en="What would you say are the kind of like the main differences or overlap between context engineering and harness engineering? I think really the two only levers you have when interacting with agents is which context you provide and which tools you provide." aria-label="回原文"></button>。比如测试和 lint 的报错信息，给人类看你会列一份详尽的失败清单让人去翻日志；但给智能体，你要压缩成一段语义清晰的文字："你在这个文件里这样搞砸了，请打开它，按 XYZ 文件里的运行手册去修，因为你之前犯过同样的错" <button class="pd-ts" data-t="05:14" data-who="Ryan Lopopolo" data-en="One thing that's pretty neat here is the way that we structure tests and lints and well-formed tests in the code base is actually very different than how I would structure those messages for a human, right?" aria-label="回原文"></button>。

## 从零开始：怎么走到"不写代码"

Ryan 在 2025 年 6 月就开始用这种不插手的方式工作，那时候连像样的推理模型都没有，只有早期版本的 Codex CLI，模型能力差得多，过程非常痛苦 <button class="pd-ts" data-t="07:51" data-who="Ryan Lopopolo" data-en="How confident were you that that was the right course? It was definitely a bit of a radical idea at the time. Um kind of when I started out uh building in this way was uh even before we had proper reasoning models, GPT 5 came out in August of 2025, and I started working in this hands-off way in June." aria-label="回原文"></button>。一开始他自己不得不充当"笨重工具"——智能体卡住了只能叫他帮忙，比如用 cargo 装依赖这种 Codex 当时做不好的事 <button class="pd-ts" data-t="08:37" data-who="Ryan Lopopolo" data-en="Um and sort of by necessity, working with the model, working with the coding agent, I kind of had to stick myself in as a very chunky tool uh for the model to delegate to." aria-label="回原文"></button>。

关键转折是：他开始密切观察自己花时间在哪些地方，然后为每个"叫 Ryan"的场景造一个工具调用来自动化。第一步就是自动化依赖安装，然后逐步给智能体越来越多、越来越大的工具块 <button class="pd-ts" data-t="09:04" data-who="Ryan Lopopolo" data-en="And sort of automating that was the first step. And it kind of got me in this mode of paying very close attention to where I'm spending my time, figuring out ways to build up a tool call that removes the need for me to spend that time." aria-label="回原文"></button>。

从零开始的好处是你会发自内心地体验智能体在哪里失败，同时也能看到它哪里做得好——它特别擅长遵循指令、写测试、调用测试 <button class="pd-ts" data-t="09:23" data-who="Ryan Lopopolo" data-en="So then I can kind of figure out the other ways that I can help the agent get more and more chunky tools to give it more capability. And to start with zero like that, you kind of viscerally experience the failure of the agent." aria-label="回原文"></button>。把工程流程大量折叠成这些"铺好的路"，就是建立信任的过程。

团队扩张时，他只招公司新人，新员工直接被扔进这个环境，大约两周就能适应这种运作方式 <button class="pd-ts" data-t="10:37" data-who="Ryan Lopopolo" data-en="And I guess when you think about your team, like this is a decision that you made, but when you think about your team, how how comfortable was every how on board was everyone in joining this?" aria-label="回原文"></button>。因为所有人通过 Codex 作为代码库的唯一入口，每个新成员贡献的最佳实践自动被所有人共享——新人不用花一两个月吸收团队[[规范|规范]]，入职两周后 PR 吞吐量就能提升 5% 到 15% <button class="pd-ts" data-t="12:03" data-who="Ryan Lopopolo" data-en="Uh, but once we sort of had figured it out, by the time we got our fifth, sixth, seventh hire onto the team, uh within those two weeks, we were actually seeing like velocity and PR throughput go up 5, 10, 15%, uh, which is again not the common path when you onboard quickly to a team, like the the pre-singularity time, right?" aria-label="回原文"></button>。

## 反垃圾代码：不用审查代码，改审查计划

他们的做法不是逐行审代码，而是把人类审查集中在"上游"：高度复杂的计划和跨一周的里程碑。因为这些计划本身就是给智能体的提示词，如果你在开头把任务描述错了，产出的就是垃圾 <button class="pd-ts" data-t="14:59" data-who="Ryan Lopopolo" data-en="Like uh to kind of provide a little bit more nuance here, we do have some cases where we require like two-party traditional review pre-merge. And most of the time, that is centered around things like highly complex plans, sort of phase milestones that would take place over the course of an actual week, these sorts of things." aria-label="回原文"></button>。日常代码则走零人工审查，直接合并。

但"不审查"不等于"不管"。他们经历了一个关键阶段：招到第三个工程师时，PR 吞吐量上去了但审查跟不上，垃圾代码开始渗入 <button class="pd-ts" data-t="19:20" data-who="Ryan Lopopolo" data-en="And this sort of came to us as a team sort of out of necessity. When we onboarded our third engineer to the team, uh we significantly increased our PR throughput, but at the same time were unable to keep pace with reviews and making sure that slop didn't enter the code base." aria-label="回原文"></button>。

他们的应对是每周五做"垃圾收集"——整理一周内不满意的地方，但核心原则是"永远不给出两次同样的反馈" <button class="pd-ts" data-t="20:08" data-who="Ryan Lopopolo" data-en="So every Friday was trying to eliminate that slop, but also finding ways to systematically eliminate it going forward, right? We never wanted to give the same feedback twice in the same way that you want a new engineer you're onboarding to the team to actually internalize what it means to do a good job." aria-label="回原文"></button>。这些反馈逐渐堆叠成程序化的[[护栏|护栏]]，加上一个长时间运行的外循环——自动化 CI 任务扫描代码库，对照"黄金原则"找偏差，自动提 PR 修复 <button class="pd-ts" data-t="20:18" data-who="Ryan Lopopolo" data-en="We never wanted to give the same feedback twice in the same way that you want a new engineer you're onboarding to the team to actually internalize what it means to do a good job." aria-label="回原文"></button>。

具体实现很朴素：一个 GitHub issue，工程师和智能体在上面记录良好软件开发的原则——怎么写 React 快照测试、什么是可靠的网络代码、怎么构建 lint。最后累积到 100 多条评论，智能体就根据这个去扫描代码库、排名违规项、提 PR <button class="pd-ts" data-t="21:15" data-who="Ryan Lopopolo" data-en="Um we kind of did a very cheap hack. Um we kind of had just a GitHub issue where engineers and agents would leave comments around sort of underlying principles of good software development, right?" aria-label="回原文"></button>。初期还有专人 on call 监督这些智能体产出，给通过或不通过的反馈，而这些反馈会被下一次运行吸收——智能体会对比上次的会话日志，问自己"犯了什么错、错过了什么优先级"，然后把学到的内容保存为 artifact，下次运行时就有额外上下文 <button class="pd-ts" data-t="22:07" data-who="Ryan Lopopolo" data-en="We needed eyes on it in order to build that confidence. Uh human with thumbs up, thumbs down, merge or not, leave review feedback, which means the next time that anti-slopification loop spins up, it looks at all the PRs it had produced, it ingests that human feedback, compares it with the session logs from the last time it ran, says, which mistakes did I make, which priorities did I miss?" aria-label="回原文"></button>。

Ryan 强调，让错误进 main 分支其实是有价值的——错误可以被学习。一旦识别到重复模式，就把它往前拉到流水线更早的位置：先改提示词(最便宜)，再改文档、加审查智能体，最后才写确定性测试 <button class="pd-ts" data-t="25:28" data-who="Ryan Lopopolo" data-en="It can be done, you know, in a in a a more regular time frame. Yeah, like with this sort of like new world where the production of code is so cheap, uh I actually think that you can, at least working with agents, flip sort of like the DevOps shift left thing onto its head a bit, where the cheapest thing I can do is literally produce a change to my prompt." aria-label="回原文"></button>。

## 代码变成可丢弃物，规范才是持久资产

当代码生产变得极其便宜，Ryan 发现一个反直觉的做法：先写代码实现，再从中提炼规范，而不是传统的先写规范再写代码 <button class="pd-ts" data-t="27:51" data-who="Ryan Lopopolo" data-en="Is this a is this like when we when we think about the relationship between the specs and the code, how much is that changing today? Yeah, so it's kind of funny where you think traditionally in spec-driven development, right, you start with a spec and then you kind of refine it as the code is produced, sort of thing, to make it more concrete, to suss out those hidden decisions and ambiguity in the spec." aria-label="回原文"></button>。原因很简单——代码是信息密度极高的产物，包含了大量隐性决策，先让智能体扔出一个"稻草人"实现，团队在此基础上打磨，然后蒸馏出规范，比从空白文档开始写规范容易得多。

他们做了一个叫 [[Symfony|Symfony]] 的"幽灵库"(ghost library)——发布的东西是规范，但起点是一个在 monorepo 里的 TypeScript 凭感觉实现 <button class="pd-ts" data-t="28:58" data-who="Ryan Lopopolo" data-en="So for Symfony, the thing that we shipped is very much a spec. But the thing that we started with was kind of a vibed implementation of Symfony in TypeScript in our mono repo, where when we thought it was good and it was solving the problems that we wanted it to, we worked on producing a spec out of that to share with the world." aria-label="回原文"></button>。验证规范的流程是三阶段流水线：第一个智能体从原始实现生成规范 markdown；第二个智能体只看规范、不看原始代码，从零实现一遍；第三个智能体当法官，对比原始实现和衍生实现，找不一致，然后修改规范让下一次尝试更好 <button class="pd-ts" data-t="29:14" data-who="Ryan Lopopolo" data-en="But the thing that we started with was kind of a vibed implementation of Symfony in TypeScript in our mono repo, where when we thought it was good and it was solving the problems that we wanted it to, we worked on producing a spec out of that to share with the world." aria-label="回原文"></button>。最终得到的是一个高度精炼的规范——对业务逻辑关键部分指定得很细，但对具体实现留足灵活性，让使用者能适配自己的仓库和工具链 <button class="pd-ts" data-t="30:17" data-who="Ryan Lopopolo" data-en="I suspect you get a discount number. But what you end up with is this really refined spec that is reliably able to produce the system as it is written while still providing space and ambiguity for consumers of this ghost library to adapt it to their actual business context, their actual repository and tool chain and issue tracker and all these other sorts of things, uh, which I think is pretty cool because it means that we end up specifying in very tight, high detail the parts that actually matter, the business logic critical parts, while still leaving the flexibility for folks to evolve and change it as they see fit." aria-label="回原文"></button>。

## 什么时候还需要人看代码

Ryan 画了一个二维图：模糊度和复杂度。他只在"双高"区域亲自看代码 <button class="pd-ts" data-t="46:51" data-who="Ryan Lopopolo" data-en="So when do you feel like you know, in your usage with these product product uh projects, when do you what what are the circumstances that you see today where you actually want to go in and look at the code?" aria-label="回原文"></button>。

两种情况：一是从零开始做全新东西，接口形状、体验都还不清楚；二是最困难的重构，需要打破或重新定义接口，甚至删代码，但最终形态还不明确 <button class="pd-ts" data-t="47:14" data-who="Ryan Lopopolo" data-en="Sort of if we were to kind of put a sort of like two-axis graph together here of sort of uh low and high ambiguity and low and high complexity, in this sort of high high bucket here, I think that's largely two shapes of projects or tickets or epics, whatever you want to call them." aria-label="回原文"></button>。而且即使在这些场景，他的做法也不是小心翼翼地写，而是让智能体先即兴生成一个 5 万行 diff 的 PR，直接扔掉——目的是摸清智能体会在哪里失败、在哪里挣扎，然后再拆成 15 个小 PR 做准备和暂存工作 <button class="pd-ts" data-t="47:55" data-who="Ryan Lopopolo" data-en="Um it's also you know, you know, code code is cheap to produce here, right? Like I find myself operating in this space differently than I did a year ago, where I am willing to vibe out a 50,000 line of diff PR and throw it away only to learn the areas where the agent is likely to fail, uh, where it is going to struggle putting those interfaces into place that I like." aria-label="回原文"></button>。

至于日常代码，他越来越不看实现细节。他说如果只能选一样东西读，他选系统的参考文档、接口定义、以及渲染成 mermaid 图的实体关系图和序列图 <button class="pd-ts" data-t="43:19" data-who="Ryan Lopopolo" data-en="Today, and in maybe a couple of years' time, I hate asking questions for a couple of years' time when we can barely barely think about this week, but today in a couple of years' time, is it more important that code is legible to agents or humans?" aria-label="回原文"></button>。具体用什么语言写、怎么实现，他可能都不知道——就像开头那个故事，Codex 把 MCP 实现悄悄换成了 TypeScript 守护进程，同样的依赖关系和实体关系都在，但他几乎不需要知道底层怎么实现的 <button class="pd-ts" data-t="45:28" data-who="Ryan Lopopolo" data-en="This was more context efficient, it was faster. And this had happened underneath me without me knowing my workflow was not interrupted. That same dependency edge and entity relationship existed, but I almost didn't have to know how it was implemented." aria-label="回原文"></button>。

## 每天烧十亿 token 不是吹牛

Ryan 说过"不每天用十亿 token 是近乎疏忽"这句话，他的逻辑是：我们从模型中提取的智能量和 token 消耗基本是线性关系，[[测试时计算|测试时计算]](test time compute)存在的意义就是让模型通过更多推理变得更聪明 <button class="pd-ts" data-t="48:56" data-who="Ryan Lopopolo" data-en="Who who are you aiming to shake the ladder of the idea that the amount of intelligence we are able to extract from the models is in a way linear with token consumption." aria-label="回原文"></button>。但要用到十亿 token，你必须跳出"和模型结对编程"的思路——必须并行、必须建立[[异步循环|异步循环]]、必须让智能体对整个组织产生副作用而不是只服务你一个人 <button class="pd-ts" data-t="49:16" data-who="Ryan Lopopolo" data-en="In order to get the models to be smarter and have more and more rich side effects out into the world, we want to move workflows to high token consumption use cases." aria-label="回原文"></button>。

这需要一套全新的模式——从仓库上下文播种的自动化，团队所有人都能用，而不是单人模式。Ryan 把这个阶段类比成 CI/CD 刚被发明的时候：大家都在摸索，要 15 年后才标准化 <button class="pd-ts" data-t="50:42" data-who="Ryan Lopopolo" data-en="So, you know, to kind of poke aggressively like that and get to a billion tokens a day is really to kind of challenge people to figure out what it is that's gonna work." aria-label="回原文"></button>。

## 工程师的角色变了吗

Ryan 的团队现在是全栈配置，因为当他一个人时，写出的 React 代码很糟糕——6000 行的组件、糟糕的重渲染、四个重叠闭包的 use effect <button class="pd-ts" data-t="51:48" data-who="Ryan Lopopolo" data-en="Um I know myself, I probably biased more toward backend and infrastructure uh sort of work. You probably uh see in my sort of profile here, uh, which means that when it was just me on the team, I was producing quite terrible React code." aria-label="回原文"></button>。但更重要的是技能重心的转移：代码生产作为技能不再那么重要，系统思维才是——怎么为团队搭建成功的环境、怎么把目光投向来解决问题、怎么提高交付吞吐量 <button class="pd-ts" data-t="52:35" data-who="Ryan Lopopolo" data-en="Uh the other sort of thing is I think we no longer need to focus so much as software engineers on developing code production as a skill. Really, what I want to see uh engineers sort of nurture in their own careers is this sort of systems thinking mentality." aria-label="回原文"></button>。

他现在的时间大致三等分：最困难的重构、从零到一的产品构思与客户沟通、优先级排序和人员调度。以前他 50% 到 70% 的时间在写代码，现在退后一步，专注跨职能高优先级工作，为智能体团队解除阻塞 <button class="pd-ts" data-t="53:13" data-who="Ryan Lopopolo" data-en="Um probably for me, my time has been split 30-30-30 between sort of the the hardest refactors and zero-to-one product ideation, talking to customers and prioritizing scheduling and staffing work." aria-label="回原文"></button>。他也提醒一个常见陷阱：因为编码太便宜了，人们容易陷入"什么都能建"的幻觉，但决定不建什么反而更重要 <button class="pd-ts" data-t="53:57" data-who="Ryan Lopopolo" data-en="Yeah, and one of the things that's part of that is deciding what not to build. Yes. Very, very common uh trap I see people falling into these days with agents." aria-label="回原文"></button>。

## 本集带走

- **从"叫 Ryan"开始自动化**：观察智能体在哪些地方卡住需要你帮忙，为每个场景造一个工具调用，逐步把你自己从循环中移除
- **永远不给两次同样的反馈**：垃圾代码出现后，不要只修，要把它提炼成可程序化执行的规则（他们用 GitHub issue 积累了 100 多条），让智能体下次自动遵守
- **让错误进 main，但要从中学**：允许错误合并，用异步循环扫描模式、吸收人工反馈、把学到的内容存为 artifact 供下次运行使用；识别到重复模式后，按"改提示词→加文档→加审查智能体→写确定性测试"的顺序逐级左移
- **先实现再提炼规范**：代码生产便宜了，先让智能体扔出稻草人实现，团队打磨后蒸馏成规范；用"实现→生成规范→从规范重实现→对比差异修正规范"的三阶段流水线验证规范的完备性
- **人只看"双高"区域的代码**：高模糊度×高复杂度（全新东西、困难重构）才亲自介入；日常代码只关心接口定义和系统架构图，具体实现可以不看
- **代码生产不再是核心技能**：工程师的重心转向系统思维——决定建什么、不建什么、怎么为智能体团队搭环境，而不是自己写代码

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">使用这些工具保持高速度的一个很大部分，就是不允许垃圾代码进入代码库。</span>  
> *A big part of maintaining high velocity with these tools is just not permitting slop to enter the code base.*  
> <span class="qm">—— Ryan Lopopolo · [11:36]</span> ^q1

> <span class="qz">因为如果你在开头 misspecify 任务，你会得到垃圾。</span>  
> *Because if you misspecify the task up front, you are gonna get garbage.*  
> <span class="qm">—— Ryan Lopopolo · [15:32]</span> ^q2

> <span class="qz">我们永远不想给出两次同样的反馈，就像你希望一个新加入团队的工程师真正内化什么意味着做好工作一样。</span>  
> *We never wanted to give the same feedback twice in the same way that you want a new engineer you're onboarding to the team to actually internalize what it means to do a good job.*  
> <span class="qm">—— Ryan Lopopolo · [20:08]</span> ^q3

> <span class="qz">我实际上发现先生成代码会容易得多，让那段代码有点像是一个关于世界可能样子的草案，作为团队与之互动来完善它，然后从中提炼出规范。</span>  
> *I've actually found it is much easier to produce the code first, to have that code sort of like present a straw man for what the world could look like, engage with that as a team to refine it, and then distill the spec out of that.*  
> <span class="qm">—— Ryan Lopopolo · [28:20]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Codex、OpenAI、Claude · 同概念:智能体 (agent)、MCP</span>
- [[2026-02-12-lennys-engineers-are-becoming-sorcerers|OpenAI 内部怎么用 AI 写代码：从巫师比喻到一人独角兽的二阶效应]]<span class="pd-rz">同公司:Codex、OpenAI · 同概念:智能体 (agent)、护栏 (guardrails)</span>
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当写代码变便宜,OpenAI Codex负责人说「品味」成了最贵的资源]]<span class="pd-rz">同公司:Codex、OpenAI · 同概念:智能体 (agent)、computer use</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同公司:Codex · 同概念:护栏 (guardrails)、提示词注入 (prompt injection)、智能体 (agent)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:OpenAI · 同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-07-30-practicalai-reconstructing-how-openai-agents-attacke|OpenAI 智能体越狱攻入 Hugging Face 全始末]]<span class="pd-rz">同公司:OpenAI · 同概念:护栏 (guardrails)、智能体 (agent)</span>

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
