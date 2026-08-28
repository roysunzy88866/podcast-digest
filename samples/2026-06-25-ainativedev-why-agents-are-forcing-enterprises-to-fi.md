---
title: DevOps 之父谈智能体开发：谁来管、怎么管、别踩什么坑
podcast: The AI-Native Dev
date: 2026-08-28
source_url: undefined
duration: "60:08"
type: episode
cover: "#64748b"
image: "/covers/2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi.jpg"
description: DevOps 之父 Patrick Dubois、Autonomy AI 联合创始人 Tamuz Dubnov 和 Resync 的 Daniel Jones 聊企业级智能体开发落地的组织瓶颈、实操模式和常见错误。
host: "[[Patrick Dubois]]"
cohosts: ["[[Tamuz Dubnov]]", "[[Daniel Jones]]", "[[Simon Maple]]"]
companies: ["[[Autonomy AI]]", "[[Resync]]"]
concepts: ["[[智能体]]", "[[智能体编码]]", "[[PR]]", "[[CI-CD]]", "[[可观测性]]", "[[护栏]]", "[[token]]", "[[测试]]", "[[DORA报告]]", "[[PUMP]]", "[[平台团队]]"]
category: 智能体
tags:
  - 智能体
  - 组织与领导力
socialImage: "https://talk.solomind.cc/covers/2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi#post","headline":"DevOps 之父谈智能体开发：谁来管、怎么管、别踩什么坑","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi","mainEntityOfPage":"https://talk.solomind.cc/2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi","description":"DevOps 之父 Patrick Dubois、Autonomy AI 联合创始人 Tamuz Dubnov 和 Resync 的 Daniel Jones 聊企业级智能体开发落地的组织瓶颈、实操模式和常见错误。","datePublished":"2026-08-28","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi.jpg","about":[{"@type":"Person","name":"Patrick Dubois"},{"@type":"Person","name":"Tamuz Dubnov"},{"@type":"Person","name":"Daniel Jones"},{"@type":"Person","name":"Simon Maple"},{"@type":"Organization","name":"Autonomy AI"},{"@type":"Organization","name":"Resync"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体编码 (agentic coding)"},{"@type":"Thing","name":"PR"},{"@type":"Thing","name":"CI/CD"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"token"},{"@type":"Thing","name":"测试 (test)"},{"@type":"Thing","name":"DORA报告 (DORA report)"},{"@type":"Thing","name":"PUMP"},{"@type":"Thing","name":"平台团队 (platform team)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"DevOps 之父谈智能体开发：谁来管、怎么管、别踩什么坑","item":"https://talk.solomind.cc/2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>DevOps 之父谈智能体开发：谁来管、怎么管、别踩什么坑</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# DevOps 之父谈智能体开发：谁来管、怎么管、别踩什么坑

<div class="pd-byl"><b>Patrick Dubois</b> · DevOps 之父 · 2026-08-28</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我喜欢行业中每一个新的混乱时期，因为那是学习正在发生的地方。</div><div class="a">— Patrick Dubois <button class="pd-ts" data-t="00:30" data-who="Patrick Dubois" data-en="And I love every new chaotic period in the industry because that's where the learning is happening." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Patrick Dubois]] · [[Tamuz Dubnov]] · [[Daniel Jones]] · [[Simon Maple]]
>
> **公司** [[Autonomy AI]] · [[Resync]]
>
> **概念** [[智能体]] · [[智能体编码]] · [[PR]] · [[CI-CD]] · [[可观测性]] · [[护栏]] · [[token]] · [[测试]] · [[DORA报告]] · [[PUMP]] · [[平台团队]]

这一集是 AI Native DevCon 2026 上的一场圆桌，聊的是企业怎么把[[智能体|智能体]]开发真正铺开。三个嘉宾：[[Patrick Dubois|Patrick Dubois]]，因发起 DevOps 运动被业界称为 DevOps 之父，现在关注智能体时代的组织模式演进；[[Tamuz Dubnov|Tamuz Dubnov]]，[[Autonomy AI|Autonomy AI]] 联合创始人兼 CTO，他们做了一个让非技术人员也能在代码库上提 [[PR|PR]] 的平台；[[Daniel Jones|Daniel Jones]]，[[Resync|Resync]] 产品负责人，做 AI 原生转型咨询和[[智能体编码|智能体编码]]培训。最反直觉的一点：当智能体写代码时，公司突然开始认真优化软件开发流程了——而同样这些流程，人类在写代码时从来没人在乎 <button class="pd-ts" data-t="00:00" data-who="Daniel Jones" data-en="Now that it's agents doing the work and tokens and the cost of those, everyone's gonna be really like keen on making sure the software development lifecycles was as effective and as efficient as it possibly could be." aria-label="回原文"></button>。

## 谁来负责：不是建个新部门就完了

组织里谁来管智能体开发的落地？Daniel 看到的趋势是，它会落在开发者体验团队或[[平台团队|平台团队]]的职责范围内——这些团队本来就在通过提供更高层抽象来降低开发者认知负荷，管理智能体的上下文自然契合 <button class="pd-ts" data-t="06:21" data-who="Daniel Jones" data-en="And so there's a an amount of kind of uh it makes sense for those folks to be doing things like building and distributing and assuring the quality of skills, for example." aria-label="回原文"></button>。

但 Patrick 指出一个现实问题：现在平台团队的人往往还只盯着基础设施，本身不是 AI 编码的老手，可他们手里握着模型、网关和预算，形成了一个能力真空 <button class="pd-ts" data-t="08:00" data-who="Patrick Dubois" data-en="They're not TAI savvy tech coders. So that's where there's now a little bit of a vacuum in kind of the companies where, like, okay, you know, they're not the best fit, but they you they do control the spends, they have the models, they have the gateways." aria-label="回原文"></button>。他的判断是，大公司里大概率会出现云平台团队、AI 平台团队、数据平台团队并存的局面，而不是一个平台小组包揽一切 <button class="pd-ts" data-t="08:19" data-who="Patrick Dubois" data-en="Now, whether they will stay in one group as a platform, that's uncertain. What you might see is that you're gonna have the cloud platform team, the AI platform team, the data platform team, and they're all kind of platform supporting this." aria-label="回原文"></button>。

## 真正的瓶颈：基础不行的会被智能体拖慢

Daniel 说得很直白：暴露出来的瓶颈，本质上都是软件开发基本功不行——CI/CD 好不好、有没有[[测试|测试]]、有没有人真正遵守的编码标准 <button class="pd-ts" data-t="13:07" data-who="Daniel Jones" data-en="So let's flip it a little bit and say, what are as organizations start rolling out um AI seriously in terms of uh, you know, as a practice across every single uh development team, what would you say the, and I'll ask you this, what would you say are the greatest bottlenecks today, uh, which really maybe it's platform teams, maybe it's other teams, but they're that they're struggling with as part of that scale and that AI enablement across other teams?" aria-label="回原文"></button>。DORA 报告的结论是：开发成熟度低的团队，引入智能体编码反而会变慢；成熟度高的才会加速。问题是没人知道那个转折点在哪 <button class="pd-ts" data-t="13:31" data-who="Daniel Jones" data-en="So all of those things uh kind of get exposed. And the the uh Dora report showed that if you are not very mature in your software development practices, then agentic coding is likely to make you go slower." aria-label="回原文"></button>。

另一个瓶颈是产品侧。开发速度上去了，产品经理措手不及——待办事项里没有足够的储备，而补这些东西需要深度思考和客户对话，没法简单加速 <button class="pd-ts" data-t="14:09" data-who="Daniel Jones" data-en="Of course you do have your own podcast as well. Indeed. Um but we've seen uh uh people there of you suddenly speed up uh the act of creating software and then uh products are caught flat-footed, and they're like, Crikey, we didn't have enough stuff in the backlog." aria-label="回原文"></button>。

Patrick 提了一个新代理指标：别看代码行数了，看智能体完成一个任务需要多少轮（turns）。你可以通过换模型、给工具、优化上下文来压低这个数字 <button class="pd-ts" data-t="15:30" data-who="Patrick Dubois" data-en="You kind of need to be on control both in generating and kind of making sure the defects are not like are in balance there as well. And I think I what I like as an uh as an almost like new um proxy metric that like when you look at like not just the users coding with AI, but if the agents are doing the coding, you look at uh the things that like how many how many uh almost like turns does an agent need to do to do their job effectively?" aria-label="回原文"></button>。

## 让非技术人员也提 PR：不是给个工具就完事

Tamuz 的核心做法是：把不需要工程师的活卸载给产品经理和设计师，让他们直接在代码库里做可视化的迭代，生成可以合并的 PR <button class="pd-ts" data-t="09:45" data-who="Tamuz Dubnov" data-en="Uh, but the mechanism that's really kind of sped up our RD is getting to focus on the stuff that really matters. And we get that because we offload the stuff that doesn't need an engineer to our actually our product team and our designer team." aria-label="回原文"></button>。但这背后有两个真问题要解。

技术端的自负：他们平台的智能体因为能跟踪 2700 个组件并做智能排序，生成的 PR 质量经常比开发者自己写的好，但开发者看到非技术人员提的 PR 第一反应是抵触 <button class="pd-ts" data-t="20:03" data-who="Tamuz Dubnov" data-en="Uh not not to show off, but like the PRs that come out of them versus out of the platform versus developers. Often our platforms they do a better job because they map your your coding practices much more in depth than developers and they keep much better tracks of existing uh components." aria-label="回原文"></button>。Tamuz 的做法是对技术端温和一些，同时让团队负责人先看代码质量——当代码本身没问题，"不是开发者写的"就不该成为拒绝理由 <button class="pd-ts" data-t="20:47" data-who="Tamuz Dubnov" data-en="Uh it's getting the dev team to play along. We we have some experiences where uh PMs open PRs and the dev team pushed back. And then we asked like the team lead, look at the code, is it good?" aria-label="回原文"></button>。

非技术端的恐惧：PM 们有冒充者综合征，怕被技术审查问住。Tamuz 的解法是改变交付物的定义——你不需要写 Jira 工单，不需要做断开的 HTML 原型，你直接在代码库里做原型，智能体已经知道代码库的约束，你只需要给产品意图 <button class="pd-ts" data-t="21:01" data-who="Tamuz Dubnov" data-en="Because it didn't come from a developer. Uh so when that's worked out, we basically work on a conference of the PMs saying, hey, you don't need to write a ticket, that's not the deliverable." aria-label="回原文"></button>。

## PUMP 流程：因为代码太快，PR 工作流必须重构

代码移动速度太快，传统的"开 PR → 等人工审查 → QA → 产品审查 → 合并"根本跟不上——等审查完，代码已经冲突了 <button class="pd-ts" data-t="36:46" data-who="Tamuz Dubnov" data-en="The code is moving so fast you can't have an open PR. Meaning, if it's an open PR and I want to do QA on it, and I want to do like a product review, and I want to do a design review, that is all lovely." aria-label="回原文"></button>。Daniel 甚至说企业里的 PR 工作流是个极其愚蠢的主意，应该回到基于主干的开发 <button class="pd-ts" data-t="37:04" data-who="Daniel Jones" data-en="Like pull request-based workflows inside enterprises are a damn silly idea. Um they make great sense in open source repositories with people who are not strategically aligned and you you don't trust, and you know, it makes sense there." aria-label="回原文"></button>。

Tamuz 提了他们内部的 [[PUMP|PUMP]] 框架——计划、合并、打磨。核心思路：PR 一开就尽快合并，不需要通过 QA 和产品审查，所有新功能通过功能开关控制。

合并之后，产品经理和设计师再在代码库里直接打磨 UI/UX，修正开发者从用户视角做出的糟糕决策 <button class="pd-ts" data-t="38:38" data-who="Tamuz Dubnov" data-en="And our product manager can go and review it and they can polish it using our platform and get the UI and UX exactly right and see all the bad decisions from the user-facing perspective that the developer made." aria-label="回原文"></button>。一个功能通常要三到四个 PR：开发者一个、产品经理改功能一个、设计师调 UI 一个、QA 补边界情况可能再来一个 <button class="pd-ts" data-t="39:00" data-who="Tamuz Dubnov" data-en="There's no one PR. A feature should take three or four PRs, one PR from the developer, one PR from the product manager that changes functionality, one PR from the designer that tunes the UIUEX, and then maybe one last PR from the QA that saw some sort of itch case." aria-label="回原文"></button>。

## 用智能体审查智能体：按风险分级

Tamuz 的团队已经在朝跳过人工审查的方向走，但按风险分级。高风险的（涉及敏感代码区域）必须有人看；低风险的，他们让智能体模拟团队里每个开发者的评论风格来做 PR 审查，然后另一个智能体去解决这些评论，再做日志回溯看有没有异常 <button class="pd-ts" data-t="40:02" data-who="Tamuz Dubnov" data-en="And I also define like risk is also by what part of the code base they're touching, how sensitive it is. Uh but beyond it, I'm trying to automate the PR commenting and comment resolution process, uh, which means I have uh agents that have modeled every single developer on my team and their comments for the last few hundred PRs." aria-label="回原文"></button>。这个流程做得出奇地好，但他承认团队里有开发者坚决反对，觉得开发者必须对代码有所有权 <button class="pd-ts" data-t="40:48" data-who="Tamuz Dubnov" data-en="And again, if the risk is not high from the PR's nature, I'm moving towards being able to like skip the human reviewer at all. Again, I have developers on my team." aria-label="回原文"></button>。

Patrick 把这和 DevOps 当年的脉络对比：当年也是靠测试流水线作为安全网，才让初级开发者敢推主分支。区别在于，数据 schema 变更大家还是不敢自动化——风险感知决定边界 <button class="pd-ts" data-t="41:14" data-who="Patrick Dubois" data-en="And it was the same thing, like when everything was being automated during the DevOps transformation, people said, like, but if I did change one thing, I can delete everything now, automate it, right?" aria-label="回原文"></button>。

## CI 必须改造：让智能体能查日志

Tamuz 强调，CI 流程要做几个关键改造。第一，[[可观测性|可观测性]]平台必须对智能体可查询——不只是写代码时能查，发布后回溯时也能查 <button class="pd-ts" data-t="32:06" data-who="Tamuz Dubnov" data-en="Oh, there's like key transformations you have to do. So one key transformation is whatever your observability platform is, you need to make sure it's easily queryable for an agent so it can verify both while it's doing a task and also retroactively an entire like I don't know, dev environment, staging environment, prod environment, you need to make it really easy for the agent." aria-label="回原文"></button>。

他们内部的具体做法：每个 PR 自动被智能体打风险标签；发布前另一个智能体按风险排序，逐个检查日志——这个变更的意图是什么、日志是否显示它达到了预期、有没有遗漏的边界情况 <button class="pd-ts" data-t="29:38" data-who="Tamuz Dubnov" data-en="Uh so for example, here, all of our PRs get labeled by risk automatically by an agent. Cool. Uh then they go to staging, they live in staging during the QA process." aria-label="回原文"></button>。高风险的 PR 经常能捞出漏掉的东西，哪怕团队已经有 QA 和测试 <button class="pd-ts" data-t="30:06" data-who="Tamuz Dubnov" data-en="And it's been amazing that it's caught more and more stuff. Like the high-risk PRs often do miss something, even though our engineers are agentic in how they work and everything, and we have QA and we have testing and we put in all this effort." aria-label="回原文"></button>。

Daniel 补了一个思路：别指望一个智能体一次搞定所有事。他做了个叫 Assembly Line 的小工具，主智能体做完变更后，启动多个专用智能体分别检查死代码、测试覆盖率、安全性等——每个智能体只有一个确定性定义的提示词，像流水线上的工位 <button class="pd-ts" data-t="34:18" data-who="Daniel Jones" data-en="Instead, we can have some kind of CI-like process. I've built a little tool called Assembly Line that does this where you you make a change with your agent or the agent makes a change by itself, and then another agent gets spun up with one deterministically defined prompt of check for dead code, check for missing test coverage, check for this, check for that, check for the other." aria-label="回原文"></button>。Tamuz 说他们叫同样的思路"引导"（nudging）——不让 LLM 一步做三件事，而是让它一步走一个方向，质量更好 <button class="pd-ts" data-t="36:09" data-who="Tamuz Dubnov" data-en="You just get better quality that way. And it's funny you call it assembly line, we call it nudging, uh, but in that sense, you get a very clear workflow uh and you no longer fight the the agent and how it wants to work." aria-label="回原文"></button>。

## 别踩的坑：三个 concrete 的反面模式

**给不感兴趣的开发者派 AI 任务，[[token|token]] 会爆炸。** Tamuz 发现，开发者对任务不感兴趣时，会把所有验证工作都甩给智能体——"你帮我测"。结果是智能体跑七轮 QA，token 消耗飙升，PR 质量还差 <button class="pd-ts" data-t="52:07" data-who="Tamuz Dubnov" data-en="Uh and if you I think the right way is give the developers the task that interests them, you will see they're way more engaged with the agent in the session where they're building it, versus give them the task that the developer's not interested, and then they will offsource all that mentor load to the agent." aria-label="回原文"></button>。

**给非技术人员直接发编码工具。** 给 PM 发名字里带"Code"的工具，他们不会配环境，要么什么都不做，要么提交垃圾 PR。

Tamuz 亲耳听到一个 CTO 当着 VP 产品的面说"你昨天提的那个 PR 就是垃圾" <button class="pd-ts" data-t="52:39" data-who="Tamuz Dubnov" data-en="That's one. The other one that we've seen a lot of organizations do is they want to jump in headfirst to AI native. Uh and they do that by giving cloud code to everybody." aria-label="回原文"></button>。工具要为用户角色优化，不是一个工具打天下。

**CTO 说"随便用自己喜欢的工具"。** Daniel 说 2025 年很多 CTO 采取放任态度，这会导致组织内做法不一致，无法沉淀经验。

研究表明，明确要求使用统一工具是智能体编码采用成功的关键指标 <button class="pd-ts" data-t="54:04" data-who="Daniel Jones" data-en="The PR fatigue is there on the developer side, and PMs that open really poor PRs are increasing the PR fatigue, they're getting more frustrated themselves, and you get Uber scenarios where everybody's just disappointed." aria-label="回原文"></button>。但反过来，把 token 预算限得太低（比如每月 100 欧元）也不好——开发者会纠结"这件事值不值得花 token"，增加了认知负荷 <button class="pd-ts" data-t="54:46" data-who="Daniel Jones" data-en="Um the the counterpoint to the um token maxing is also don't go to the other extreme and set a really low limit. Um, you know, I've I've seen places where there's a hundred euros a month uh tokens uh limit, and like 100 euros you can't really do very much." aria-label="回原文"></button>。

## 测试的新含义：上下文提示

Tamuz 提了一个很实操的观点：测试不只是验证，还要给未来的智能体提供上下文提示。测试失败时的断言信息、注释、错误响应，都得写得足够丰富，让拿到这个错误的智能体知道该怎么修 <button class="pd-ts" data-t="56:26" data-who="Tamuz Dubnov" data-en="I love that point. Uh I think something that's really important is also the temporal mindset and the context hinting mindset, which means every test needs to stand the test of time, needs to be evergreen, but you also need to think of it as an opportunity for a context hint." aria-label="回原文"></button>。懒开发者只写"assert true failed"，人对着这种信息都不知道怎么办，智能体更不知道 <button class="pd-ts" data-t="57:10" data-who="Daniel Jones" data-en="Yeah, and it's exactly the same as we were uh all saying earlier of like that's always been good development practice. Like it's nothing worse than as a developer, you run the tests and you just get like assert true failed, and you're like, great." aria-label="回原文"></button>。

Patrick 总结了一个更底层的模式：对 AI 好的实践，对人也好——好的文档、好的测试、好的可观测性，这些不是新东西，但智能体让它们的回报率暴增 <button class="pd-ts" data-t="24:08" data-who="Patrick Dubois" data-en="Like given that you're working with an agent, um, if you actually give your agent good documentation, lo and behold, it performs better. If you give them tests, then you actually know whether that's still working, yes or no." aria-label="回原文"></button>。他给开发者的核心建议是"不要重复自己"——别反复告诉智能体该做什么，写下来、给它工具、让它自己查 <button class="pd-ts" data-t="26:09" data-who="Patrick Dubois" data-en="But if for example, if there's one advice that I would give a developer right now, moving to a gentic, is just the most important thing would be don't repeat yourself." aria-label="回原文"></button>。

> 【背景】Patrick Dubois 是比利时人，因 2009 年发起 DevOps Days 活动被广泛称为"DevOps 之父"。转写稿中主持人将其误称为"Patrick Devoir"，正文已纠正。TESL 是本集播客的赞助商/主办方，非知名公司。Resync 是一家 AI 原生转型咨询公司，其联合创始人撰写了 O'Reilly 出版的《云原生转型》一书。Autonomy AI 的产品让非技术人员通过平台在真实代码库上生成 PR。DORA 报告是 Google 发布的软件交付效能年度研究报告。BMAD 和 SpecKit 是 AI 辅助需求/规格工具。vibe coding 指用自然语言让 AI 生成代码、不手写的开发方式。MCP 是让 AI 智能体连接外部工具的协议标准。

## 本集带走

- **先补基本功，再上智能体**：CI/CD、测试、编码标准——这些不行，智能体编码会让你更慢，不是更快。
- **按风险分级管理 PR**：高风险必须人看，低风险可以让智能体模拟团队审查风格自动审，但不要一刀切。
- **PUMP 流程应对速度**：PR 开了就尽快合并（功能开关保护），合并后让产品和设计师在代码库里直接打磨，一个功能分多个 PR。
- **CI 改造重点：让智能体能查日志**：可观测性平台要对智能体可查询，发布前用智能体按风险排序回溯每个 PR 的日志。
- **多智能体流水线优于一个全能智能体**：每个检查维度（死代码、覆盖率、安全）启动一个专用智能体，提示词确定性定义，不让 LLM 一步做太多事。
- **别给非技术人员发编码工具**：工具要为角色优化，PM 需要的是能表达产品意图的平台，不是 IDE。
- **测试要写给智能体看**：失败信息要包含足够上下文，让拿到错误的智能体知道怎么修，不只是写给人看。
- **别让不感兴趣的开发者用 AI**：他们会把所有验证甩给智能体，token 消耗飙升且 PR 质量差——把任务分给感兴趣的人。

<div class="pd-sec">全部金句 <span>5 条</span></div>

> <span class="qz">我喜欢行业中每一个新的混乱时期，因为那是学习正在发生的地方。</span>  
> *And I love every new chaotic period in the industry because that's where the learning is happening.*  
> <span class="qm">—— Patrick Dubois · [00:30]</span> ^q1

> <span class="qz">而我们看到的是，组织在尝试采用一种颠覆性技术时正在重复同样的错误，就是直接把技术扔进去，不改变任何关于他们工作方式的事情，然后对他们没有变得更快感到惊讶。</span>  
> *And what we see is that organizations are repeating the same kind of mistakes when trying to adopt a disruptive technology of just plopping the technology in, not changing anything about how they work and being surprised that they're not going faster.*  
> <span class="qm">—— Daniel Jones · [03:55]</span> ^q2

> <span class="qz">只是你不是把它应用在代码上，你是把它应用在制造代码的机器上。</span>  
> *It's just you're not applying it to the code, you're applying it to the machine that makes the code.*  
> <span class="qm">—— Daniel Jones · [27:31]</span> ^q3

> <span class="qz">就像企业内部基于拉取请求的工作流是一个极其愚蠢的想法。</span>  
> *Like pull request-based workflows inside enterprises are a damn silly idea.*  
> <span class="qm">—— Daniel Jones · [37:04]</span> ^q4

> <span class="qz">一旦 PR 被打开，我们启动不同的智能体，这些智能体模拟我们团队中的不同人，并表现得像那些人一样评论，并且做得出奇地好。</span>  
> *Once a PR is open, we launch different agents that model different people from our team and comment as if they were those people, and does a surprisingly good job.*  
> <span class="qm">—— Tamuz Dubnov · [40:22]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同嘉宾:Simon Maple · 同概念:智能体 (agent)、可观测性 (observability)、护栏 (guardrails)、沙箱 (sandbox)</span>
- [[2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo|Datadog 4000 人AI赋能实战：删掉上下文反而更好]]<span class="pd-rz">同嘉宾:Simon Maple · 同概念:智能体 (agent)、CI/CD、token</span>
- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同嘉宾:Simon Maple · 同概念:可观测性 (observability)、智能体 (agent)、护栏 (guardrails)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-02-08-lennys-getting-paid-to-vibe-code|不会写代码的人如何成为全职 vibe coder]]<span class="pd-rz">同概念:token、智能体 (agent)</span>

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
