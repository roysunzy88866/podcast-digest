---
title: "Tesla Dark Factory：95%代码无人看过就合并"
podcast: The AI-Native Dev
date: 2026-08-26
source_url: undefined
duration: "58:36"
type: episode
cover: "#64748b"
image: "/covers/2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co.jpg"
description: Tesla AI工程负责人Rob Willoughby详解Dark Factory——一个从工单到PR全自主的软件工厂，以及如何靠验证器而非人眼来守住代码质量。
host: "[[Rob Willoughby]]"
cohosts: ["[[Guy Pajani]]", "[[Simon Maple]]"]
companies: ["[[暗工厂]]", "[[TESL]]"]
concepts: ["[[智能体]]", "[[验证器]]", "[[编排器]]", "[[沙箱]]", "[[软件工厂]]", "[[形式化验证]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co#post","headline":"Tesla Dark Factory：95%代码无人看过就合并","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co","mainEntityOfPage":"https://talk.solomind.cc/2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co","description":"Tesla AI工程负责人Rob Willoughby详解Dark Factory——一个从工单到PR全自主的软件工厂，以及如何靠验证器而非人眼来守住代码质量。","datePublished":"2026-08-26","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co.jpg","about":[{"@type":"Person","name":"Rob Willoughby"},{"@type":"Person","name":"Guy Pajani"},{"@type":"Person","name":"Simon Maple"},{"@type":"Organization","name":"暗工厂 (dark factory)"},{"@type":"Organization","name":"TESL"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"验证器 (verifier)"},{"@type":"Thing","name":"编排器 (orchestrator)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"软件工厂 (software factory)"},{"@type":"Thing","name":"形式化验证 (formal verification)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Tesla Dark Factory：95%代码无人看过就合并","item":"https://talk.solomind.cc/2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Tesla Dark Factory：95%代码无人看过就合并</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Tesla Dark Factory：95%代码无人看过就合并

<div class="pd-byl"><b>Rob Willoughby</b> · Tesla AI工程负责人 · 2026-08-26</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">这意味着，推而论之，我们的代码库中有 95% 从未有人类查看过。</div><div class="a">— Rob Willoughby <button class="pd-ts" data-t="00:21" data-who="Rob Willoughby" data-en="And so that means, by implication, 95% of our code base has never had a human look at it." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Rob Willoughby]] · [[Guy Pajani]] · [[Simon Maple]]
>
> **公司** [[暗工厂]] · [[TESL]]
>
> **概念** [[智能体]] · [[验证器]] · [[编排器]] · [[沙箱]] · [[软件工厂]] · [[形式化验证]]

两个周末前，两个工程师在周五往队列里喂了一批工单，然后去享受伦敦的热浪。等他们回来，[[暗工厂|Dark Factory]] 已经自主提交并合并了 150 个 PR，全程零人工干预。

这不是概念演示——这是 Tesla 内部 AI 工程团队每周都在发生的事。更激进的是，Dark Factory 自身的代码库中，95% 从未有人类看过就合并了 <button class="pd-ts" data-t="00:00" data-who="Rob Willoughby" data-en="Two weekends ago, um, we had quite a busy Friday, and the Dark Factory ended up shipping 150 PRs for two of us over the course of the weekend. And that was just while we were out hanging about, enjoying London in the heatwave." aria-label="回原文"></button> <button class="pd-ts" data-t="32:01" data-who="Rob Willoughby" data-en="Last time I looked, I think about only 5% of the uh Dark Factory code base had ever had a human look at the PR and approve it. And I'm not, I don't think people actually go look at code anymore because they're all just using agents." aria-label="回原文"></button>。

## 从"加速写代码"到"管理工厂"

在 Dark Factory 之前，团队做的是"单玩家[[智能体|智能体]]工程"——工程师坐在驾驶位上，用本地智能体（如 Claude Code 或 Cursor）加速实现。工作流没变，只是写代码变便宜了。但这直接暴露了两个瓶颈：第一，验证负担没变——实现虽然快了，但你仍然得本地构建整个单体仓库、点 UI、打端点来确认代码做了该做的事；第二，代码审查爆炸——一个人一天能 churn 出 20 个 PR，团队就得审查 20 个 PR，PR 积压、产生合并冲突，形成了一个以前不存在的新瓶颈 <button class="pd-ts" data-t="09:00" data-who="Rob Willoughby" data-en="Uh what was the uh engineering styles and culture pre-you building the dark factory? So the way I'd framed it was single-player agentic engineering, um, in terms of you had people have their local agent, um, or maybe a cloud agent like Claud Code on the web or cursor agent in the cloud or anything along those lines, but it was still ultimately being driven by an engineer in the interactive human or the interactive driver seat." aria-label="回原文"></button> <button class="pd-ts" data-t="10:07" data-who="Rob Willoughby" data-en="Yeah. So I think uh verification and testing was a big problem. Um we uh so we run a monorepo um where we have a bunch of build dependencies, and so in order to test it, effectively test everything, you've got to build it locally." aria-label="回原文"></button> <button class="pd-ts" data-t="11:06" data-who="Rob Willoughby" data-en="Um, but it is something that is needed and something where we share best practices, share culture through, and now people were just doing it day in and day out." aria-label="回原文"></button>。

有了 Dark Factory 后，周五的心态完全变了：糟糕的周五是不为周末准备好队列，好的周五是你能规划、堆叠足够多的工单，让工厂整个周末都在跑 <button class="pd-ts" data-t="11:49" data-who="Simon Maple" data-en="Come the Friday, we're essentially trying to get as much done as we possibly can looking backwards on that week. Whereas today with the Dart Factory, what we're actually doing is it's a bad Friday if we don't prep the weekend." aria-label="回原文"></button>。工程师的抽象层级上移了——不再想"这个工单我怎么做"，而是想"这个功能需要什么步骤序列"，就像把任务分给初级工程师一样 <button class="pd-ts" data-t="12:20" data-who="Rob Willoughby" data-en="And it it's a little bit of that shift in my mind, like you're shifting up the abstraction stack a bit. You're no longer thinking about like what is this ticket that I'm gonna try to get done?" aria-label="回原文"></button>。

## 编排器：简单但不是重点

Dark Factory 的核心组件有两个：[[编排器|编排器]]和代码仓库中的上下文环境。编排器是先建的，因为它最直观——从 Linear 工单到产出代码的机制 <button class="pd-ts" data-t="14:54" data-who="Rob Willoughby" data-en="But then importantly, and I'll touch on this second, is the actual context and environment within our repo that we give to the coding agents, uh, which I personally think is where the higher amount of leverage comes from." aria-label="回原文"></button>。

架构并不复杂：一个 Python 队列轮询 Linear（计划迁到 Webhook），拉取标记为"待办"的工单，按优先级排序后分发给编码智能体。智能体跑在 Daytona [[沙箱|沙箱]]里（内部部署），每个工单一个隔离容器，能拉起完整的单体仓库测试栈，包括集成测试、UI 点击——基本上本地工程师能做的它都能做，除了不给敏感凭证 <button class="pd-ts" data-t="15:42" data-who="Rob Willoughby" data-en="And so our journey started with basically a Python queue that connected to Linear and connected to uh GitHub and ran an agent locally in a Docker's handbox. Um we literally had one of our ends not allowed to close our laptop for about a week because it was all running locally on our machine and we had much more adoption on that that uh than we had expected internally there." aria-label="回原文"></button> <button class="pd-ts" data-t="17:46" data-who="Rob Willoughby" data-en="But that's just kind of an emergent behavior in terms of building up the context needed to be able to do effective implementation. These agents uh currently for us run in a Daytona sandbox." aria-label="回原文"></button> <button class="pd-ts" data-t="18:07" data-who="Rob Willoughby" data-en="Um, and we provision a relatively beefy uh box for that, technically a VM, um, in order to, or technically a container actually, in order to allow it to spin up the entire monorepo testing stack." aria-label="回原文"></button>。

一个很实用的设计：智能体会把测试运行的截图和视频发回 PR，人类审查者不用 SSH 进去看，直接在 PR 里看视频就能验证 UI 行为 <button class="pd-ts" data-t="18:33" data-who="Rob Willoughby" data-en="Um that helps us build uh kind of confidence there. One really interesting uh benefit of that is that we've now been able to have the agent post videos and screenshots back onto the PR so that we as humans can go manually verify the work without needing to actually SSH on the box and go click the buttons ourselves." aria-label="回原文"></button>。

PR 提交后，编排器进入"保姆模式"：CodeRabbit 和内部审查智能体（锚定在安全、可读性、功能正确性三个技能上）自动评论，CI 失败也作为信号回传。编排器看到信号就重新唤醒智能体去修，修完再提交，循环直到通过 <button class="pd-ts" data-t="19:20" data-who="Rob Willoughby" data-en="Um on the PR surface, so this is now we're in GitHub, uh, we run two different coding agents. One is CodeRabbit, one is our own internal code review agent. Our internal code review agents kind of is anchored on skills." aria-label="回原文"></button> <button class="pd-ts" data-t="20:14" data-who="Rob Willoughby" data-en="If those don't pass, those all get posted back as signals on the PR. The orchestrator is watching the PR, and so we'll re-wake the agent when those comments are uh passed back, and the agent then goes fixes them." aria-label="回原文"></button>。智能体还能主动升级——如果缺上下文，会暂停并在 Linear 工单上提问题通知人类 <button class="pd-ts" data-t="20:36" data-who="Rob Willoughby" data-en="Uh it will take in the comments, it will reason over them, uh, it then responds in line in those comments where appropriate or as a top-level comment, resolving where appropriate um as needed, and also potentially escalating back to human uh for review." aria-label="回原文"></button>。

关键设计决策：Linear 是唯一真实来源，所有要产出持久工件（PR、文档等）的工作必须流经 Linear，直接利用 Linear 自带的阻塞关系、子任务、标签等能力，不重新造轮子 <button class="pd-ts" data-t="16:16" data-who="Rob Willoughby" data-en="So we've made an opinionated choice. Linear is our source of truth for work to be done. Everything must flow through linear if it's going to result in a durable artifact uh that is oriented that is a PR in our code base, or a Notion Doc, or any of the other artifacts that are produced by the Dark Factory." aria-label="回原文"></button>。

## 验证器：真正的高杠杆所在

Rob 认为，编排器"死简单，没那么难"，真正的高杠杆在于你给编码智能体提供的仓库上下文和验证环境 <button class="pd-ts" data-t="15:07" data-who="Rob Willoughby" data-en="But uh we built the first thing first, uh, the orchestrator first, just because that is the tractable thing, that's kind of what we think of when we think of a dark software factory, is the mechanism to go from linear ticket to actually produce code." aria-label="回原文"></button>。

[[验证器|验证器]]是这套系统的核心创新。它本质上是一条自然语言陈述，能对特定代码片段给出"是/否"的布尔判断，由 LLM 充当裁判 <button class="pd-ts" data-t="24:25" data-who="Rob Willoughby" data-en="And so that kind of approach I think is quite powerful because it does it's allowing you to kind of do more experimentation because you do then don't need to run the experiments, Darfactory does it for you, and you're just kind of looking at the outputs of that." aria-label="回原文"></button>。比如："这些文件应该只从 library 文件导入"——这种"品味"很难写成确定性 lint 规则（虽然技术上可以写很复杂的正则），但用自然语言写出来，LLM 能理解 <button class="pd-ts" data-t="25:06" data-who="Rob Willoughby" data-en="Um so think along the lines of something like these files should uh only ever import from other library files. Yes, you can technically write a very convoluted regex um in order to do that as a deterministic lint rule, or you can encode that principle of like, hey, we want library to be the single source of truth, and so things should only ever be importing from the library and should never be importing from other modules within the code base in order to uh kind of maintain dependency, clean dependencies." aria-label="回原文"></button>。

验证器的设计哲学有三个层次，从快到慢、从便宜到贵：

1. **确定性验证**（lint 规则）——能写成确定性规则的绝不交给 LLM。以前人类嫌复杂 lint 规则烦人、拖慢开发，但现在写代码的是智能体，它们不介意"撞墙" <button class="pd-ts" data-t="27:13" data-who="Rob Willoughby" data-en="So we're trying to kind of sketch out a boundary around the code, around like what is acceptable code from a bunch of different points rather than trying to build like a smooth, a smooth line, basically, in a skill or in an injector review or something along those lines." aria-label="回原文"></button> <button class="pd-ts" data-t="27:29" data-who="Rob Willoughby" data-en="I think historically a lot of people haven't written really complex link rules because they're annoying and finicky and they slow human engineers down and they're hard to write." aria-label="回原文"></button>。
2. **LLM 裁判验证器**——针对 diff 的单次 LLM 调用，只推理一件事，不受其他优先级干扰 <button class="pd-ts" data-t="26:50" data-who="Rob Willoughby" data-en="Um, and so we can uh assess that. And we also run one LLM call per verifier. So that LLM is really just reasoning about this single verification, not about all of the conflicting priorities that it might have in its head." aria-label="回原文"></button>。
3. **通用智能体代码审查**——兜底，抓前面漏掉的 <button class="pd-ts" data-t="26:34" data-who="Rob Willoughby" data-en="Correct, yeah. And so like a bit of our philosophy is a genetic code review should be the catch-all for things that we miss. But once we have identified something that we think is important, we should be shifting them to verifiers if we can, because as you mentioned, they're a lot cheaper to run." aria-label="回原文"></button>。

每条验证器只在对应代码被修改时触发。而且他们跑了一个"自动晋升"机制：每晚扫描智能体审查和人类审查的 PR 评论，评估哪些应该提炼成新的验证器，持续左移 <button class="pd-ts" data-t="28:23" data-who="Rob Willoughby" data-en="One of the really interesting things about, I think, about that sequence is that we can run automatic promotion. So every night we look at kind of the PR comments that are being posted by agentic review and human review, and we assess whether any of those should be verifiers." aria-label="回原文"></button>。

## 撞墙和修复：信任是赚来的，不是开启的

最大的早期问题是信任。团队一开始只敢给"实习生级别"的超小工单，因为不敢看日志、不敢不看过程 <button class="pd-ts" data-t="29:09" data-who="Rob Willoughby" data-en="Uh coding agents are really good, and if you give them a wide enough scope, they will do some great things. I think there was definitely a bit of a kind of bias internally going from kind of going from a philosophy of I've got to be their babysitting the coding agent to I shoot, I'm I can't even look at the logs for this because it's running on a sandbox in the cloud." aria-label="回原文"></button> <button class="pd-ts" data-t="29:22" data-who="Rob Willoughby" data-en="I think there was definitely a bit of a kind of bias internally going from kind of going from a philosophy of I've got to be their babysitting the coding agent to I shoot, I'm I can't even look at the logs for this because it's running on a sandbox in the cloud." aria-label="回原文"></button>。这是文化问题，不是技术问题——要求一个人对自己没看过过程的自主产出负责，需要一个渐进而无止境的信任曲线 <button class="pd-ts" data-t="30:05" data-who="Rob Willoughby" data-en="Um, they need to be able to trust that that's going to do something that they would be okay with. Yeah. Because ultimately, like we still have an accountability mechanism." aria-label="回原文"></button> <button class="pd-ts" data-t="30:27" data-who="Rob Willoughby" data-en="Um and so we're now asking people to assign their own accountability to something that has been autonomously produced. Yeah. And so there definitely is going to be a gradual kind of trust adoption curve." aria-label="回原文"></button>。

他们选择主动"撞墙"来加速建立信任。最痛苦的一次：PR 评论被重复计算，导致同一个任务在两个沙箱里并行跑，产生竞态条件。修了又退化，两三天内产生了 60 个修复 PR <button class="pd-ts" data-t="33:29" data-who="Rob Willoughby" data-en="In terms of some of the more spectacular failure modes, um as part of this, we changed our core queue a lot uh in the early days because we weren't verifying it strongly enough." aria-label="回原文"></button> <button class="pd-ts" data-t="34:04" data-who="Rob Willoughby" data-en="And so we would fix that, it'd be good for a day, then it would regress, then we'd fix it again, then it would regress, then we'd fix it again. There was a point where I think we had like 60 PRs over two or three weeks, or sorry, two or three days that were all trying to fix this." aria-label="回原文"></button>。

解决方案不是加强人工监督，而是加更硬的验证——用 Fable 花一天时间建了一个队列行为的**[[形式化验证|形式化验证]]模型**，每个 PR 都跑这个验证。之后零复发 <button class="pd-ts" data-t="34:51" data-who="Rob Willoughby" data-en="And so what we ended up doing was building a quint formal uh model of our Q behavior, um, specifically the uh independency of um being able to kind of add stuff to the queue so that we could uh verify that on every single PR that we hadn't broken that uh formal model." aria-label="回原文"></button> <button class="pd-ts" data-t="34:58" data-who="Rob Willoughby" data-en="I knew what a formal verification was, wouldn't have known how to actually build it. Uh took me about a day with Fable and then using the Dark Factory to go implement this, and we've had absolutely zero reoccurrences of that after the fact." aria-label="回原文"></button>。核心洞察：智能体没有人类那种"这是敏感代码"的上下文直觉，所以你必须比以前**更**深入地投入验证，而不是更少 <button class="pd-ts" data-t="35:11" data-who="Rob Willoughby" data-en="And so that for us was very painful in the moment, particularly as we were scaling up. Um, but then B, a really important insight of like, no, it's not just the kind of verification that we used before of like test and shared human context and like trust that a human has enough context about everything else going on to know that this is a sensitive part of the code base." aria-label="回原文"></button>。

更激进的实验：只用验证层（不含单元测试），让智能体从 Python 用 Elixir 从零重写整个系统。队列的形式化模型完美通过，但暴露了巨大盲点——Linear 标签路由机制只在单元测试里验证过，端到端测试只覆盖了 happy path，迁移后直接坏了 <button class="pd-ts" data-t="36:22" data-who="Rob Willoughby" data-en="Um so we tried to do that. Uh we currently are a Python implementation. Uh Elixir is-ish a good fit for this in terms of having uh kind of the actor model." aria-label="回原文"></button> <button class="pd-ts" data-t="37:18" data-who="Rob Willoughby" data-en="But what it ended up identifying was even after kind of all the investments on verification we thought we had made, we had some pretty big blind spots. We weren't actually verifying formally anything to do with the labels on linear, which are a very important routing mechanism." aria-label="回原文"></button> <button class="pd-ts" data-t="37:29" data-who="Rob Willoughby" data-en="That was all just built into unit tests, and our end to end tests were just testing the happy path there. And so uh when we ported over the end-to-end test, oh shoot, suddenly our um suddenly the way that we were stacking PR is broke because that wasn't tested in an end-to-end test." aria-label="回原文"></button>。教训：验证层必须覆盖所有核心行为，不只是"看起来重要"的部分 <button class="pd-ts" data-t="38:33" data-who="Rob Willoughby" data-en="I mentioned the stacking of PRs um in terms of a feature branch, I mentioned the labels, um, I mentioned, or rather, there's also uh some of our GitHub functionality, specifically in terms of not just comments, but on CI batching where we try to take in all of the signals on CI failures and send them as a single as a one-off rather than uh sending them as a sequence that isn't captured by an N10 test." aria-label="回原文"></button>。

出问题时，策略是"向前修复"而不是回滚——问"验证端漏掉了什么"，然后补验证器或补测试 <button class="pd-ts" data-t="33:00" data-who="Rob Willoughby" data-en="But the intention, what we're trying to do there is overshare the context so that we're aware, but then also fix forward. It's not roll back a PR because it wasn't the thing we wanted to do." aria-label="回原文"></button>。

## 给其他团队的落地路径

对于还没用 Dark Factory 的团队，Rob 建议分层渐进 <button class="pd-ts" data-t="43:06" data-who="Rob Willoughby" data-en="So I've been talking a lot about what we're doing with building the dark factory, but as I mentioned, like we intentionally tried to front run a lot of these issues here." aria-label="回原文"></button>：

**第一层：仓库上下文。** 更有意识地管理 repo 里的上下文——你给智能体的上下文比换模型更能改变输出质量 <button class="pd-ts" data-t="43:40" data-who="Rob Willoughby" data-en="Um, and that is very much so by helping them lever up the parts of the code base they own through all these uh tools and mechanisms that we've identified, specifically around the verification, um, to be able to allow them to build that trust and to build that uh faith and automation." aria-label="回原文"></button> <button class="pd-ts" data-t="44:04" data-who="Rob Willoughby" data-en="Is that we can provide more important than the actual raw underlying model. The context that you give will change model results more than swapping a model will. And so if you feel you're at a good place in that regard, then start layering on the verification bit because that then also helps you trust what agents being driven by local engineers are producing because they are verified two ways that kind of go beyond what you might have done historically." aria-label="回原文"></button>。这一层即便不建工厂，也能改善本地开发流程。

**第二层：疯狂写测试。** 测试现在写起来几乎免费——端到端测试、集成测试、行为测试全覆盖，确保你真正关心的"行为"（而不是代码实现细节）被验证 <button class="pd-ts" data-t="44:25" data-who="Rob Willoughby" data-en="And so if you feel you're at a good place in that regard, then start layering on the verification bit because that then also helps you trust what agents being driven by local engineers are producing because they are verified two ways that kind of go beyond what you might have done historically." aria-label="回原文"></button>。这一层同时让本地智能体和未来工厂都产出更好的代码。

**第三层：加验证器。** 把代码审查中反复出现的偏好提炼成验证器，确定性优先，模糊的用 LLM 裁判 <button class="pd-ts" data-t="45:00" data-who="Rob Willoughby" data-en="I think then you start layering on into the more non-deterministic aspects. So adopting verifiers, adopting these kind of discrete units, which are still very human reviewable, very human understandable, um, but are able to encode kind of fuzzier concepts than you would be able to in a deterministic linting rule." aria-label="回原文"></button>。

**第四层：建编排器。** 自己建，很简单，而且能对接你自己的内部系统（Jira、自定义工单系统等） <button class="pd-ts" data-t="48:10" data-who="Rob Willoughby" data-en="Um we, as I was mentioning earlier, we don't think the orchestration layer is like differentiated. Everyone probably should build their own orchestrator because it's simple and allows you to then integrate against a whole bunch of uh your own internal systems." aria-label="回原文"></button>。

最关键的文化要点：让工程师感觉自己仍然"拥有"代码的品味和质量——验证器就是把他们多年积累的判断力编码成可扩展的形式，让全公司所有智能体都跑他们的标准 <button class="pd-ts" data-t="46:03" data-who="Rob Willoughby" data-en="The last point on my mind just around the cultural adoption bit, I think the most important thing we've been able to give to the engineers here at TESL is the feeling that they still own the taste and the quality in their code base, and they're not just giving that up to an agent, but that we're trying to help them figure out a way to scale out their taste to all of the agents that will be running on their code base." aria-label="回原文"></button> <button class="pd-ts" data-t="46:35" data-who="Rob Willoughby" data-en="Your agents, all the agents, not just your agents, all of the agents of everyone in the company is going to be running that to uh those verifiers for those bits of the code base, and suddenly your impact is now scaled across everyone." aria-label="回原文"></button>。

## 本集带走

- **工单粒度决定产出质量**：Dark Factory 接受的是"给中级工程师的明确工单"，不是 Q1 计划。前期设计思考、白板讨论仍然由人做，然后编码成工单序列喂给工厂 <button class="pd-ts" data-t="22:34" data-who="Rob Willoughby" data-en="Um so twofold. One is we intentionally shift task ownership and task decomposition onto the human at the moment. So we're not saying give the dark factory your Q1 plans and it will go do all of that for you." aria-label="回原文"></button> <button class="pd-ts" data-t="23:08" data-who="Rob Willoughby" data-en="And so there is an expectation that there has been a fair amount of design work, design thinking, potentially whiteboarding, potentially uh discussion beforehand, um, which you are then able to encode in the linear ticket, which then kind of guides the agenti implementation after that." aria-label="回原文"></button>。
- **验证器三层塔**：确定性 lint → LLM 裁判的单条验证器 → 通用智能体审查兜底。能确定性的绝不交给 LLM，发现反复出现的审查意见就提炼成验证器，每晚自动扫描晋升 <button class="pd-ts" data-t="27:13" data-who="Rob Willoughby" data-en="So we're trying to kind of sketch out a boundary around the code, around like what is acceptable code from a bunch of different points rather than trying to build like a smooth, a smooth line, basically, in a skill or in an injector review or something along those lines." aria-label="回原文"></button> <button class="pd-ts" data-t="28:23" data-who="Rob Willoughby" data-en="One of the really interesting things about, I think, about that sequence is that we can run automatic promotion. So every night we look at kind of the PR comments that are being posted by agentic review and human review, and we assess whether any of those should be verifiers." aria-label="回原文"></button>。
- **向前修复，不回滚**：出了问题不回滚 PR，而是问"验证端漏了什么"，补验证器或测试，让同类问题不再发生 <button class="pd-ts" data-t="33:00" data-who="Rob Willoughby" data-en="But the intention, what we're trying to do there is overshare the context so that we're aware, but then also fix forward. It's not roll back a PR because it wasn't the thing we wanted to do." aria-label="回原文"></button>。
- **用形式化验证守核心**：队列行为这类核心逻辑，用形式化模型验证，不依赖单元测试和人工直觉——智能体没有"这是敏感代码"的直觉 <button class="pd-ts" data-t="34:51" data-who="Rob Willoughby" data-en="And so what we ended up doing was building a quint formal uh model of our Q behavior, um, specifically the uh independency of um being able to kind of add stuff to the queue so that we could uh verify that on every single PR that we hadn't broken that uh formal model." aria-label="回原文"></button> <button class="pd-ts" data-t="35:25" data-who="Rob Willoughby" data-en="Um, but then B, a really important insight of like, no, it's not just the kind of verification that we used before of like test and shared human context and like trust that a human has enough context about everything else going on to know that this is a sensitive part of the code base." aria-label="回原文"></button>。
- **分层渐进，不改工作流也能起步**：先改善仓库上下文（立即有用），再补测试，再加验证器，最后建编排器。每层都同时让本地智能体和工厂受益 <button class="pd-ts" data-t="43:40" data-who="Rob Willoughby" data-en="Um, and that is very much so by helping them lever up the parts of the code base they own through all these uh tools and mechanisms that we've identified, specifically around the verification, um, to be able to allow them to build that trust and to build that uh faith and automation." aria-label="回原文"></button> <button class="pd-ts" data-t="45:25" data-who="Rob Willoughby" data-en="Again, you can then have something deterministic run that, feed that signal back into a local agent or into a dark factory, and use that to kind of encode preferences in the code base, and then into a gentic review and then kind of levering up in that way." aria-label="回原文"></button>。
- **让工程师拥有品味**：验证器的本质是把资深工程师的判断力编码成全公司智能体都遵守的规则，是影响力的倍增器，而不是放弃控制权 <button class="pd-ts" data-t="46:21" data-who="Rob Willoughby" data-en="Previously, let's say you were a staff-level engineer who was responsible for a specific part of the codebase, the way that you would enforce kind of quality there is doing all the uh PR reviews or doing presentations or writing docs on what coding standards look like or writing a style guideline or stuff along those lines." aria-label="回原文"></button> <button class="pd-ts" data-t="46:35" data-who="Rob Willoughby" data-en="Your agents, all the agents, not just your agents, all of the agents of everyone in the company is going to be running that to uh those verifiers for those bits of the code base, and suddenly your impact is now scaled across everyone." aria-label="回原文"></button>。

> 【背景】本集来自 The AI Native Dev 播客，由 TESL 赞助。TESL 是一个"Skills 和 Context 的包管理器"产品，嘉宾 Rob Willoughby 是 TESL 的 AI 工程负责人。节目中提到的 Dark Factory、Tesla Agent、Tesla Change Review、Tesla Change Verify、Tesla Change Risk 均为 TESL 的内部工具或产品功能。Daytona 是一个开源的开发环境管理平台，Fable 是一个将 F# 编译为 JavaScript/Python 的工具，CodeRabbit 是一个 AI 代码审查产品——这些在转写稿中仅以名称出现，未做解释。

<div class="pd-sec">全部金句 <span>5 条</span></div>

> <span class="qz">这意味着，推而论之，我们的代码库中有 95% 从未有人类查看过。</span>  
> *And so that means, by implication, 95% of our code base has never had a human look at it.*  
> <span class="qm">—— Rob Willoughby · [00:21]</span> ^q1

> <span class="qz">感觉我自己对这种思考方式的转变有点少是关于我认为我在一周内能做的编码工作是什么，而是我在足够长的时间里能有效地喂给队列的编码工作是什么。</span>  
> *It feels like a little bit of the shift in my own thinking about this is less about what is the coding work that I think I can do over the course of the week, but what is the coding work that I can be able to effectively feed the queue over a long enough time?*  
> <span class="qm">—— Rob Willoughby · [08:06]</span> ^q2

> <span class="qz">突然间你正在转移这个，工程师一天中花大部分时间做的事情，从写代码变成了审查代码。</span>  
> *Suddenly you're shifting this, what an engineer is spending the majority of their day doing from writing code to reviewing code.*  
> <span class="qm">—— Rob Willoughby · [10:43]</span> ^q3

> <span class="qz">因为我可以使用本地智能体在一天内 churn out 20 个 PR，但如果我们有政策说每个 PR 都需要人工审查，那么我的团队就需要去审查 20 个 PR。</span>  
> *Because I can churn out 20 PRs in a day using a local agent, but if we have a policy where every PR needs a human review on it, well then my team needs to go review 20 PRs.*  
> <span class="qm">—— Rob Willoughby · [11:06]</span> ^q4

> <span class="qz">你提供的上下文会比更换模型更能改变模型结果。</span>  
> *The context that you give will change model results more than swapping a model will.*  
> <span class="qm">—— Rob Willoughby · [44:04]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact|TESL 智能体：让你的编码智能体自己越用越好]]<span class="pd-rz">同嘉宾:Simon Maple · 同公司:TESL · 同概念:智能体 (agent)、软件工厂 (software factory)、沙箱 (sandbox)</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag：把智能体从终端搬进 Slack 的多人协作实验]]<span class="pd-rz">同嘉宾:Guy Pajani、Simon Maple · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-05-21-latent-space-daytona|Daytona:为智能体造一台像笔记本一样的计算机]]<span class="pd-rz">同公司:Daytona · 同概念:智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|Patrick Debois：AI 编码的组织转型与规模化]]<span class="pd-rz">同嘉宾:Guy Pajani、Simon Maple · 同公司:Dark Factory、TESL · 同概念:智能体 (agent)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog|AI失控了别慌,先盯紧漏洞数量爆炸]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
