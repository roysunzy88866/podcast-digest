---
title: "Tesla 的暗工厂：65% 的 PR 由智能体自动产出，95% 的代码没人看过"
podcast: The AI-Native Dev
date: 2026-08-26
source_url: undefined
duration: "58:36"
type: episode
cover: "#64748b"
image: "/covers/2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co.jpg"
description: Tesla AI 工程负责人 Rob Willoughby 讲解他们内部的“暗工厂”如何让智能体自主实现工单、自动合并 PR，以及背后的验证器体系与信任建设。
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
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co#post","headline":"Tesla 的暗工厂：65% 的 PR 由智能体自动产出，95% 的代码没人看过","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co","mainEntityOfPage":"https://talk.solomind.cc/2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co","description":"Tesla AI 工程负责人 Rob Willoughby 讲解他们内部的“暗工厂”如何让智能体自主实现工单、自动合并 PR，以及背后的验证器体系与信任建设。","datePublished":"2026-08-26","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co.jpg","about":[{"@type":"Person","name":"Rob Willoughby"},{"@type":"Person","name":"Guy Pajani"},{"@type":"Person","name":"Simon Maple"},{"@type":"Organization","name":"暗工厂 (dark factory)"},{"@type":"Organization","name":"TESL"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"验证器 (verifier)"},{"@type":"Thing","name":"编排器 (orchestrator)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"软件工厂 (software factory)"},{"@type":"Thing","name":"形式化验证 (formal verification)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Tesla 的暗工厂：65% 的 PR 由智能体自动产出，95% 的代码没人看过","item":"https://talk.solomind.cc/2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Tesla 的暗工厂：65% 的 PR 由智能体自动产出，95% 的代码没人看过</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Tesla 的暗工厂：65% 的 PR 由智能体自动产出，95% 的代码没人看过

<div class="pd-byl"><b>Rob Willoughby</b> · Tesla AI工程负责人 · 2026-08-26</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我上次看的时候，Dark Factory 代码库中只有大约 5% 曾经由人类查看过 PR 并批准它。</div><div class="a">— Rob Willoughby <button class="pd-ts" data-t="00:11" data-who="Rob Willoughby" data-en="Last time I looked, I think about only 5% of the Dark Factory code base had ever had a human look at the PR and approve it." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Rob Willoughby]] · [[Guy Pajani]] · [[Simon Maple]]
>
> **公司** [[暗工厂]] · [[TESL]]
>
> **概念** [[智能体]] · [[验证器]] · [[编排器]] · [[沙箱]] · [[软件工厂]] · [[形式化验证]]

这一集是 Tesla 的 AI 工程负责人 [[Rob Willoughby|Rob Willoughby]]，聊他们在公司内部建的“暗工厂”(dark factory，指无人盯守、[[智能体|智能体]]自主写代码并合并的[[软件工厂|软件工厂]])。最反直觉的一点是：这个代码库里只有约 5% 的 PR 曾被人类审过——剩下 95% 的代码，没有任何人看过 <button class="pd-ts" data-t="00:11" data-who="Rob Willoughby" data-en="And that was just while we were out hanging about, enjoying London in the heatwave. Last time I looked, I think about only 5% of the Dark Factory code base had ever had a human look at the PR and approve it." aria-label="回原文"></button>。而这正是设计出来的。

## 什么叫“暗工厂”：从 Linear 工单到 PR 的全自动流水线

先看数字：Tesla 现在每周 60-70% 的 PR 由暗工厂产出，其中生产代码部分(注册表、Web UI、CLI 等)约占 40%，这些仍强制人工审查；而暗工厂自身和内部研究的代码库，执行“全部自动合并”策略——Rob 的理由很直接：如果不能自动合并，说明你没有足够的验证手段来信任写代码的过程 <button class="pd-ts" data-t="05:33" data-who="Rob Willoughby" data-en="We aren't actually capturing which inference geo uh where we're running these queries against, which means that we're not able to properly uh analyze the effects of caching because our requests could go across any different geos, which then affects cache uh rates and also cost overall." aria-label="回原文"></button>。

最夸张的一次：两个周末前的忙碌周五，他和同事下班去伦敦街头享受热浪，暗工厂在周末两天里为他们两个人交付了 150 个 PR，全部自动合并，全程零人工干预 <button class="pd-ts" data-t="08:32" data-who="Rob Willoughby" data-en="Because we respect linear blocking relationships and able to handle kind of subtest and all that kind of stuff, I can actually sequence quite a fair amount of work before I go away for the weekend and come back to not a fundamentally different architecture, but a relatively different architecture over the course of the weekend." aria-label="回原文"></button>。

节目的开场做了个现场演示：把一张 Linear 工单(修复一个安全审计发现的字符串转义问题，因为涉及网站展示，需要人审)翻成“待办”，暗工厂检测到交接后自动启动容器接管实现 <button class="pd-ts" data-t="04:15" data-who="Rob Willoughby" data-en="One which requires human interaction, and the other which will go end-to-end without human interaction, starting from a linear ticket all the way through to a completed pull request." aria-label="回原文"></button>。另一张针对暗工厂自身的工单则贴上 auto-merge 标签，CI 全绿加审查智能体批准后直接进仓库 <button class="pd-ts" data-t="05:50" data-who="Rob Willoughby" data-en="This means that as soon as the dark factory is done creating it, it will go through PR cycle process using bots, of course. Uh no human intervention here, and then it will get auto-merged into the repo once all of CI passes and once our review agents uh approve it." aria-label="回原文"></button>。

> 【背景】Linear 是一款项目管理/工单工具；CI 指持续集成，即每次提交自动跑的构建与测试流水线。

## 暗工厂之前：单玩家智能体工程，瓶颈换了位置

在暗工厂出现前，团队的状态是“单玩家智能体工程”：每个工程师用自己的本地智能体或云端智能体(Claude Code、Cursor agent 之类)干活，但人始终坐在驾驶座上——定范围、实现、本地验证、推 PR <button class="pd-ts" data-t="09:00" data-who="Rob Willoughby" data-en="Uh what was the uh engineering styles and culture pre-you building the dark factory? So the way I'd framed it was single-player agentic engineering, um, in terms of you had people have their local agent, um, or maybe a cloud agent like Claud Code on the web or cursor agent in the cloud or anything along those lines, but it was still ultimately being driven by an engineer in the interactive human or the interactive driver seat." aria-label="回原文"></button>。工作流没变，只是代码生成变便宜了。

结果瓶颈转移：一是验证和测试——他们跑单体仓库(monorepo,多个项目的代码放在一个仓库里，构建相互依赖)，任何改动都要本地构建全量测试，还得手动点 UI、打端点确认行为，实现免费了但验证负担照付 <button class="pd-ts" data-t="10:07" data-who="Rob Willoughby" data-en="Yeah. So I think uh verification and testing was a big problem. Um we uh so we run a monorepo um where we have a bunch of build dependencies, and so in order to test it, effectively test everything, you've got to build it locally." aria-label="回原文"></button>。二是代码审查——工程师从写代码变成整天审代码：一个人一天能出 20 个 PR,如果每个都要人审，团队就陷入互相审 PR 的循环，PR 放 stale 了还产生合并冲突 <button class="pd-ts" data-t="11:06" data-who="Rob Willoughby" data-en="Um, but it is something that is needed and something where we share best practices, share culture through, and now people were just doing it day in and day out." aria-label="回原文"></button>。

心态也随之反转：以前周五是回看这一周干完了多少；现在“不为周末做准备的周五才是糟糕的周五”——你要向前看，计划、堆叠、排队足够多的工作喂给暗工厂 <button class="pd-ts" data-t="11:49" data-who="Simon Maple" data-en="Come the Friday, we're essentially trying to get as much done as we possibly can looking backwards on that week. Whereas today with the Dart Factory, what we're actually doing is it's a bad Friday if we don't prep the weekend." aria-label="回原文"></button>。

## 组件拆解：编排器很简单，真正的杠杆在上下文和验证

整套系统分两大块。**[[编排器|编排器]]**(orchestrator):轮询 Linear 拿新工单，按项目、优先级、阻塞关系排优先级，分发给隔离[[沙箱|沙箱]]里的编码智能体，然后全程“ babysit”这个 PR <button class="pd-ts" data-t="14:31" data-who="Rob Willoughby" data-en="So I think they're just kind of set the lay of the land a bit, there's a couple important concepts here. One is the orchestrator, which is what's actually picking up tickets, um, and then passing it off to coding agents, doing work, and doing the whole babysitting thing in terms of making sure the PR goes through and all that kind of stuff." aria-label="回原文"></button>。Rob 的第一个大教训是：这部分简单得惊人——“从工单到产出代码的机制”是最容易建的，真正难的是周围的一切；不投资那些层，你会退回到被审查淹没的老工作流 <button class="pd-ts" data-t="15:07" data-who="Rob Willoughby" data-en="But uh we built the first thing first, uh, the orchestrator first, just because that is the tractable thing, that's kind of what we think of when we think of a dark software factory, is the mechanism to go from linear ticket to actually produce code." aria-label="回原文"></button>。

几个具体设计决策：

- **Linear 是唯一事实来源**：所有会产生持久工件(PR、Notion 文档)的工作必须流经 Linear,换来审计链路和可调试性，还能白用 Linear 已建好的阻塞关系、子任务、标签体系 <button class="pd-ts" data-t="16:16" data-who="Rob Willoughby" data-en="So we've made an opinionated choice. Linear is our source of truth for work to be done. Everything must flow through linear if it's going to result in a durable artifact uh that is oriented that is a PR in our code base, or a Notion Doc, or any of the other artifacts that are produced by the Dark Factory." aria-label="回原文"></button>。
- 起点寒酸到好笑：最初就是一个连着 Linear 和 GitHub 的 Python 队列，智能体跑在某台笔记本的 Docker 沙箱里——以至于有位工程师一周不许合上笔记本 <button class="pd-ts" data-t="15:42" data-who="Rob Willoughby" data-en="And so our journey started with basically a Python queue that connected to Linear and connected to uh GitHub and ran an agent locally in a Docker's handbox. Um we literally had one of our ends not allowed to close our laptop for about a week because it was all running locally on our machine and we had much more adoption on that that uh than we had expected internally there." aria-label="回原文"></button>。现在智能体跑在内部 Daytona 沙箱的强力容器里，能拉起整个单体仓库的测试栈、跑集成测试、在 UI 上点击验证，还把操作录屏和截图贴回 PR——人类不用 SSH 上去点按钮，看视频就能确认智能体做对了 <button class="pd-ts" data-t="17:46" data-who="Rob Willoughby" data-en="But that's just kind of an emergent behavior in terms of building up the context needed to be able to do effective implementation. These agents uh currently for us run in a Daytona sandbox." aria-label="回原文"></button>。
- **PR 上的循环**：智能体推 PR 后，CodeRabbit 和内部审查智能体(基于“技能”，现有安全、可读性、功能正确性三个)发评论，CI 失败(包括变异测试、基于属性的测试)也变成信号贴回 PR;编排器看到信号就重新唤醒智能体去修，智能体逐条推理、内联回复、解决评论，搞不定就暂停并把问题发回 Linear 工单通知人类 <button class="pd-ts" data-t="19:15" data-who="Rob Willoughby" data-en="Like it's a good agentic uh first shot implementation. Um on the PR surface, so this is now we're in GitHub, uh, we run two different coding agents. One is CodeRabbit, one is our own internal code review agent." aria-label="回原文"></button>。

## 核心机制：验证器——把“品味”写成一句自然语言

这是全集最有原创性的部分。关于代码品味和架构，他们的方案是**[[验证器|验证器]](verifier)**:一条自然语言的单句陈述，针对特定代码路径，能被 LLM 判定“是/否”。比如“这些文件只允许从 library 导入”——用正则写死很痛苦，用自然语言表达原则，LLM 当法官，每次只评估这一条，不用在满脑子冲突优先级里权衡 <button class="pd-ts" data-t="24:25" data-who="Rob Willoughby" data-en="And so that kind of approach I think is quite powerful because it does it's allowing you to kind of do more experimentation because you do then don't need to run the experiments, Darfactory does it for you, and you're just kind of looking at the outputs of that." aria-label="回原文"></button>。

验证体系是一条阶梯 <button class="pd-ts" data-t="27:59" data-who="Rob Willoughby" data-en="And so it's like a sequencing almost for engineers to kind of build their the things that they had in their head around quality or around what good code looked like or how good code smelt." aria-label="回原文"></button>:

1. 能写成完全确定性规则的就写成确定性规则——现在没有人类工程师被 lint 规则折磨了，智能体不在乎规则多绕，写多复杂的正则都行，还省掉 LLM 调用费 <button class="pd-ts" data-t="27:13" data-who="Rob Willoughby" data-en="So we're trying to kind of sketch out a boundary around the code, around like what is acceptable code from a bunch of different points rather than trying to build like a smooth, a smooth line, basically, in a skill or in an injector review or something along those lines." aria-label="回原文"></button>。
2. LLM 当法官的验证器，只看 diff,便宜、快、人类可读。
3. 智能体代码审查做兜底，捕捉前两层漏掉的。

还有**自动晋升**：每晚分析 PR 上智能体和人类的评审评论，把反复出现的问题提炼成新验证器——持续“左移”，更快更便宜也更可读 <button class="pd-ts" data-t="28:23" data-who="Rob Willoughby" data-en="One of the really interesting things about, I think, about that sequence is that we can run automatic promotion. So every night we look at kind of the PR comments that are being posted by agentic review and human review, and we assess whether any of those should be verifiers." aria-label="回原文"></button>。

任务拆解目前仍刻意留在人类手里：不是把 Q1 计划扔给暗工厂，而是像给初级工程师那样给一张范围明确的工单；工程师的新工作是做白板讨论、把讨论沉淀成一组工单 <button class="pd-ts" data-t="22:34" data-who="Rob Willoughby" data-en="Um so twofold. One is we intentionally shift task ownership and task decomposition onto the human at the moment. So we're not saying give the dark factory your Q1 plans and it will go do all of that for you." aria-label="回原文"></button>。而且实现既然近乎免费，有不确定的设计就同时起六七个 PR 探索方案，把分析落在真实代码上而非理论空谈 <button class="pd-ts" data-t="23:38" data-who="Rob Willoughby" data-en="There's uh one thing is implementation is now free or functionally free. You have to pay token costs. So kick off six, kick off seven." aria-label="回原文"></button>。

> 【背景】转写稿中的 TESL/Tesla 指公司 Tesl(做智能体上下文管理的公司)，与电动车公司 Tesla 无关，系同音转写所致。

## 翻车与教训：竞态、重复计数，和一次失败的语言重写实验

早期最痛的 bug:PR 评论被重复计数，同一任务进队列两次，两个沙箱里的智能体竞态抢活；修好一天又退化，两三天里冒出 60 个 PR 都在修这个问题 <button class="pd-ts" data-t="33:29" data-who="Rob Willoughby" data-en="In terms of some of the more spectacular failure modes, um as part of this, we changed our core queue a lot uh in the early days because we weren't verifying it strongly enough." aria-label="回原文"></button>。解法是给队列行为建[[形式化验证|形式化验证]]模型(数学方法证明系统性质)——Rob 坦言前智能体时代他根本不会做，这次和 Claude 用了约一天，之后零复发 <button class="pd-ts" data-t="34:35" data-who="Rob Willoughby" data-en="And so the way that we wanted to try to fix that because we were still going to continue to let agents do whatever they wanted, was really lean into the verification side on that." aria-label="回原文"></button>。重要洞察：智能体没有人类那种“这是敏感代码”的上下文直觉，又不想花 token 喂给它，所以验证必须比以前更硬 <button class="pd-ts" data-t="35:11" data-who="Rob Willoughby" data-en="And so that for us was very painful in the moment, particularly as we were scaling up. Um, but then B, a really important insight of like, no, it's not just the kind of verification that we used before of like test and shared human context and like trust that a human has enough context about everything else going on to know that this is a sensitive part of the code base." aria-label="回原文"></button>。

第二个实验更雄心：他们相信只要验证层够强、只围绕“组织关心的行为”(不在乎实现，只在乎点了按钮结果会出现)，就该能仅凭验证层用新语言从零重建整个系统。他们在团建时试了：只带验证层(端到端测试、集成测试、形式化模型)，让智能体把 Python 实现重写成 Elixir(一种并发友好的语言)。

队列部分完美，但暴露了大盲点：Linear 标签路由、PR 堆叠、CI 批处理等核心功能只覆盖在单元测试里，端到端测试只测了快乐路径，重写版上线即坏，搞坏了别人的 PR,实验宣告失败 <button class="pd-ts" data-t="35:41" data-who="Rob Willoughby" data-en="Um so that was kind of one really interesting, annoying, frustrating bit of time. Um, the other one was an experiment we ran during the offsite, um, which I was really excited for and which really did not work the way I wanted it to, unfortunately." aria-label="回原文"></button>。但他认为这比 Anthropic 的 Rust 重写更激进也更可行，重写出的 Elixir“显然是地道的”——而且只有继续做这类实验，才能找到验证层的缺口 <button class="pd-ts" data-t="38:50" data-who="Rob Willoughby" data-en="And so despite really wanting to turn it on, well, I did turn it on and then it immediately broke and then I fixed it, and then it turned on again, and then it broke some people's PRs, and I had to be like, okay, cool, this didn't work." aria-label="回原文"></button>。

关于 95% 无人看过的代码：团队比公司其他团队小，但 Slack 消息量是别人的 10-15 倍，靠过度沟通共享上下文；出了问题不回滚 PR,而是“向前修”——问验证端漏了什么，补成验证器或测试 <button class="pd-ts" data-t="31:23" data-who="Rob Willoughby" data-en="So I think um the most interesting there's two kind of classes of ones, one around context and one around um verification. In terms of context, uh I pull data for the number of slack threads uh sent on our team channel uh versus the other team channels kind of every week." aria-label="回原文"></button>。Rob 承认现在还会偶尔早上醒来想“这怎么合并进去了”，信任建设是永无止境的曲线 <button class="pd-ts" data-t="30:50" data-who="Rob Willoughby" data-en="It's about building that cultural trust internally in your organization to get to the next to the next stage. What what problems did you have then? So just uh on that trust bit, I think one of the things that we've been trying to do on the team to build that trust is by uh running as far ahead as we can and running into the walls early and uh mucking up, basically." aria-label="回原文"></button>。主持人总结得好：自主性是赢得的，不是开启的 <button class="pd-ts" data-t="30:41" data-who="Simon Maple" data-en="Yeah. I like to think autonomy is earned, not enabled. You can't just turn something on and say, we can now go at full speed." aria-label="回原文"></button>。

## 怎么落地：分层采用，先上下文再验证

对想学的组织，Rob 给的路径不是“一键开启”，而是渐进 <button class="pd-ts" data-t="43:40" data-who="Rob Willoughby" data-en="Um, and that is very much so by helping them lever up the parts of the code base they own through all these uh tools and mechanisms that we've identified, specifically around the verification, um, to be able to allow them to build that trust and to build that uh faith and automation." aria-label="回原文"></button>:

- **先做好仓库里的上下文**——这本身就能改善本地开发。他的判断：你给的上下文对模型结果的影响，比换一个模型更大 <button class="pd-ts" data-t="44:04" data-who="Rob Willoughby" data-en="Is that we can provide more important than the actual raw underlying model. The context that you give will change model results more than swapping a model will. And so if you feel you're at a good place in that regard, then start layering on the verification bit because that then also helps you trust what agents being driven by local engineers are producing because they are verified two ways that kind of go beyond what you might have done historically." aria-label="回原文"></button>。
- **然后死磕测试**：测试便宜到不值钱，为一切写端到端测试、集成测试、行为测试，锁住你真正关心的那层——不是代码怎么写，而是产品表现出的行为 <button class="pd-ts" data-t="44:25" data-who="Rob Willoughby" data-en="And so if you feel you're at a good place in that regard, then start layering on the verification bit because that then also helps you trust what agents being driven by local engineers are producing because they are verified two ways that kind of go beyond what you might have done historically." aria-label="回原文"></button>。
- **再上验证器**这类人类可读的离散单元，最后才是全自动工厂。

文化上最关键的一条：让工程师感觉品味和质量还在自己手里——资深工程师过去靠人肉审 PR、写风格指南来守护质量，现在把经验编码成一组验证器，全公司所有智能体跑他的代码时都会执行，个人影响力瞬间放大到所有人 <button class="pd-ts" data-t="46:03" data-who="Rob Willoughby" data-en="The last point on my mind just around the cultural adoption bit, I think the most important thing we've been able to give to the engineers here at TESL is the feeling that they still own the taste and the quality in their code base, and they're not just giving that up to an agent, but that we're trying to help them figure out a way to scale out their taste to all of the agents that will be running on their code base." aria-label="回原文"></button>。

对新人的门槛也没那么高：有新员工入职第二天就在给暗工厂加验证器。但需要接受一个心态转变——智能体不是“同样的活干得更快”，而是软件工程的新原语；工程师不会消失，但角色更像机械师：不造车，而是搭好工厂运行的环境、坏了去修 <button class="pd-ts" data-t="40:32" data-who="Rob Willoughby" data-en="Uh so so uh you know, when we would we be able to now with the dark factory that we've got now, if we had a new um team that had never used the dark factory, do you feel like they'll be able to just like on one on you know day zero just switch in directly to a to a scenario where they're using a dark factory, or do you feel like they would need to grow into it like layer by layer, piece by piece?" aria-label="回原文"></button>。

节目最后回看了开场那两张工单：metrics 工单全程无人类介入，CodeRabbit 批准、Kikimura 合并，Rob 也不打算去看代码——“测试过了，至少没坏；真坏了就向前修” <button class="pd-ts" data-t="52:35" data-who="Rob Willoughby" data-en="You can then see that Coderabbit approved it and Kikimura merged it. So this was no human has looked at this up until the point where I'm looking at it now. This was fully autonomous." aria-label="回原文"></button>。安全修复那张，从开工单到 PR 只用了十几分钟，唯一的人类触点是团队工程师 Sahil 点了批准和合并 <button class="pd-ts" data-t="53:32" data-who="Rob Willoughby" data-en="We can see that uh there has been a PR associated with it, uh, and it is also merged. So clicking over to that, we see that 46 minutes ago, so uh 10, 15 minutes after we kick the ticket off, that's when the initial uh PR was opened by Kikimuro, or internal name for the Dark Factory." aria-label="回原文"></button>。

## 本集带走

- **自动合并是信任的试纸**：Rob 的原则是“不能自动合并，说明验证不够”——把压力从人审转移到验证体系建设上。
- **验证器 = 一句自然语言的品味规则**：确定性规则优先，写不了就用 LLM 当法官的单条验证，智能体审查只做兜底；每晚自动把重复出现的问题晋升成验证器。
- **编排层不值钱**：工单到代码的管道简单，别在那儿卷；差异化在验证层和你能组合的原语。
- **为周末排队，而不是回看一周**：周五的价值变成给暗工厂堆够工作，周一回来收获一个“相对不同的架构”。
- **出问题向前修，不回滚**：每次翻车都问“验证端漏了什么”，补成验证器或测试——信任就是这样一条永无尽头的曲线。
- **顺序别乱**：先仓库上下文，再测试，再验证器，最后才谈全自动；上下文对结果的影响大于换模型。
- **让工程师保住品味**：把资深工程师的经验编码成验证器，全公司的智能体都会执行，个人影响力规模化到所有人。

<div class="pd-sec">全部金句 <span>8 条</span></div>

> <span class="qz">我上次看的时候，Dark Factory 代码库中只有大约 5% 曾经由人类查看过 PR 并批准它。</span>  
> *Last time I looked, I think about only 5% of the Dark Factory code base had ever had a human look at the PR and approve it.*  
> <span class="qm">—— Rob Willoughby · [00:11]</span> ^q1

> <span class="qz">我认为人们实际上不再去查看代码了，因为他们都在使用智能体。</span>  
> *I don't think people actually go look at code anymore because they're all just using agents.*  
> <span class="qm">—— Rob Willoughby · [00:18]</span> ^q2

> <span class="qz">因为我可以使用本地智能体一天产出 20 个 PR,但如果政策说每个 PR 都需要人工审查，那我的团队就得去审 20 个 PR。</span>  
> *Because I can churn out 20 PRs in a day using a local agent, but if we have a policy where every PR needs a human review on it, well then my team needs to go review 20 PRs.*  
> <span class="qm">—— Rob Willoughby · [11:06]</span> ^q3

> <span class="qz">我喜欢认为自主性是赢得的，不是启用的。</span>  
> *I like to think autonomy is earned, not enabled.*  
> <span class="qm">—— Simon Maple · [30:41]</span> ^q4

> <span class="qz">智能体不介意烦人的刁钻规则，它们可以很开心地去撞墙让事情跑起来。</span>  
> *Agents are fine with annoying Infiniki, they can very happy to go bang their heads against the wall in order to make something work.*  
> <span class="qm">—— Rob Willoughby · [27:31]</span> ^q5

> <span class="qz">而且我不认为人们还会去查看代码了，因为他们都只是在用智能体。</span>  
> *And I'm not, I don't think people actually go look at code anymore because they're all just using agents.*  
> <span class="qm">—— Rob Willoughby · [32:01]</span> ^q6

> <span class="qz">我认为需要的是这样的人：他们认识到智能体不只是把同样的事做得更快，而是我们做软件工程的一个根本性的新工作流原语。</span>  
> *Um I think it needs to be folks who are recognizing the fact that agents are not just doing the same thing but faster, but are fundamentally new workflow primitive in how we do software engineering.*  
> <span class="qm">—— Rob Willoughby · [40:47]</span> ^q7

> <span class="qz">我特意强调是“与你”，而不是“为你”，因为那个验证环节，重申一下，我认为正是人类杠杆的来源。</span>  
> *Um and I'm being key there to say with you, not for you, um, because that verification bit, just to reiterate, is something that I think where it's the human leverage comes from.*  
> <span class="qm">—— Rob Willoughby · [49:02]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact|TESL 智能体：让你的编码智能体自己越用越好]]<span class="pd-rz">同嘉宾:Simon Maple · 同公司:TESL · 同概念:智能体 (agent)、软件工厂 (software factory)、沙箱 (sandbox)</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同嘉宾:Guy Pajani、Simon Maple · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-05-21-latent-space-daytona|Daytona:为智能体造一台像笔记本一样的计算机]]<span class="pd-rz">同公司:Daytona · 同概念:智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同嘉宾:Guy Pajani、Simon Maple · 同公司:Dark Factory、TESL · 同概念:智能体 (agent)</span>
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
