---
title: "从技能到循环再到工厂:软件工厂实战路线图"
podcast: The AI-Native Dev
date: 2026-09-03
source_url: undefined
duration: "51:16"
type: episode
cover: "#64748b"
image: "/covers/2026-09-02-ainativedev-850-prs-a-week-how-tessl-runs-a-software.jpg"
description: TESL 产品负责人 Drew 与主持人 Guy 讲解如何把开发从写代码转向运营「软件工厂」：先写标准，再建循环，全由智能体产出。
host: "[[Simon Maple]]"
cohosts: ["[[Drew]]", "[[Guy Fajani]]"]
companies: ["[[TESL]]"]
concepts: ["[[技能]]", "[[循环]]", "[[Factory]]", "[[Tesla 智能体]]", "[[代码审查]]", "[[验证器]]", "[[上下文]]", "[[智能体]]", "[[可观测性]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-09-02-ainativedev-850-prs-a-week-how-tessl-runs-a-software.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-02-ainativedev-850-prs-a-week-how-tessl-runs-a-software#post","headline":"从技能到循环再到工厂:软件工厂实战路线图","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-02-ainativedev-850-prs-a-week-how-tessl-runs-a-software","mainEntityOfPage":"https://talk.solomind.cc/2026-09-02-ainativedev-850-prs-a-week-how-tessl-runs-a-software","description":"TESL 产品负责人 Drew 与主持人 Guy 讲解如何把开发从写代码转向运营「软件工厂」：先写标准，再建循环，全由智能体产出。","datePublished":"2026-09-03","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-02-ainativedev-850-prs-a-week-how-tessl-runs-a-software.jpg","about":[{"@type":"Person","name":"Simon Maple"},{"@type":"Person","name":"Drew"},{"@type":"Person","name":"Guy Fajani"},{"@type":"Organization","name":"TESL"},{"@type":"Thing","name":"技能 (skills)"},{"@type":"Thing","name":"循环 (loops)"},{"@type":"Thing","name":"Factory"},{"@type":"Thing","name":"Tesla 智能体 (Tesla agent)"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"验证器 (verifiers)"},{"@type":"Thing","name":"上下文 (context)"},{"@type":"Thing","name":"智能体 (agents)"},{"@type":"Thing","name":"可观测性 (observability)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"从技能到循环再到工厂:软件工厂实战路线图","item":"https://talk.solomind.cc/2026-09-02-ainativedev-850-prs-a-week-how-tessl-runs-a-software"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>从技能到循环再到工厂:软件工厂实战路线图</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 从技能到循环再到工厂:软件工厂实战路线图

<div class="pd-byl"><b>Drew</b> · TESL 产品负责人 · 2026-09-03</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-02-ainativedev-850-prs-a-week-how-tessl-runs-a-software.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们曾达到一周大约 850 个 PR 的峰值，其中 85-90% 完全由智能体处理。</div><div class="a">— Drew <button class="pd-ts" data-t="00:00" data-who="Drew" data-en="We hit a peak of something like 850 PRs in a week, and 85-90% of those were handled by agents entirely." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Simon Maple]] · [[Drew]] · [[Guy Fajani]]
>
> **公司** [[TESL]]
>
> **概念** [[技能]] · [[循环]] · [[Factory]] · [[Tesla 智能体]] · [[代码审查]] · [[验证器]] · [[上下文]] · [[智能体]] · [[可观测性]]

把整个团队的代码生产交给[[智能体|智能体]]，一周峰值能到 850 个 PR,其中 85-90% 完全由智能体处理——这是 [[TESL|TESL]] 内部软件[[Factory|工厂]]现在的真实运行状态 <button class="pd-ts" data-t="00:00" data-who="Drew" data-en="We hit a peak of something like 850 PRs in a week, and 85-90% of those were handled by agents entirely. A lot of people, when they think software factories or agents, they're sort of expecting a speed up or hoping for a speed up." aria-label="回原文"></button>。说这话的人是 [[Drew|Drew]],他是 TESL 的产品负责人，这一集他和主持人 Guy 一起聊了他们过去两三个月的路线：从「帮你管[[上下文|上下文]]」的平台，扩展成一个「帮你建工厂」的平台。

**先把三个词说清楚**

- **[[技能|技能]](skill)**:一种工作单元——要么是你想完成的工作流，要么是你希望智能体遵守的政策或标准；hooks、MCP 工具这些能打包进插件的东西都算，只是「技能」是流行的叫法 <button class="pd-ts" data-t="05:12" data-who="Drew" data-en="Think when we say skills as like a unit of work. It's either a workflow that you want completed or it is a policy, a standard that you want agents to adhere to. That includes skills." aria-label="回原文"></button>。
- **[[循环|循环]](loop)**:自动化的技能。不需要人工启动就能运行，且运行中通常带某种「元过程」让下一次运行更好，于是收益是复利式的、超过线性的 <button class="pd-ts" data-t="05:43" data-who="Drew" data-en="The second is loops, think of these as effectively automated skills. It's things that are running without immediate human intervention, at least to start them. And then as they run, typically there's some kind of meta process where the loop is uh getting better, right?" aria-label="回原文"></button>。
- **工厂(factory)**:一种工作方式——你把几乎所有的开发都转移到循环的创建、维护和监控上，循环产出你大部分产品。判断标准很简单：你的人类时间花在哪？转向工厂后，大部分时间在维护循环、让它们更好 <button class="pd-ts" data-t="06:50" data-who="Drew" data-en="Where are your humans spending their time? When you move to the factory, you're mostly spending your time maintaining the loops uh and thinking about how to make them better." aria-label="回原文"></button>。Drew 还试图推行「FDLC(工厂开发生命周期)」这个说法，目前还没流行起来。

**TESL 自己怎么走过来的**

年初他们先做技能驱动：把「什么才叫好」写下来——[[代码审查|代码审查]]怎么运作、CLI 和 UI 各是什么标准。感觉到位后，再开始把工作交给智能体自动化。但最初几个循环一搭起来就发现很快会失控，于是决定全面转向工厂：所有 PR 都由智能体创建，人专注于三件事——塑造工作(创建 issue)、审查工作(且越来越多让智能体审查，人只投高杠杆点)、以及做循环本身的[[可观测性|可观测性]](常常是建循环来监控循环)<button class="pd-ts" data-t="08:24" data-who="Drew" data-en="Uh, and we we started that and very quickly, like the minute you get your first couple loops in place, you start to realize this is gonna get out of hand really quickly, and you have to move to a different way of working uh that has a bit more of the solution baked into the problem itself." aria-label="回原文"></button>。

Guy 补充了工厂前的状态：一堆高度自动化但彼此割裂的环境，有人自动化程度高、有人落后，自动化的人也各自孤立地迭代。工厂是从单人游戏走向多人游戏的路径；而且从安全视角看，一切跑在云端和定义好的工作流里，你就有了可见性——知道装了什么、能识别和控制风险 <button class="pd-ts" data-t="10:11" data-who="Guy Fajani" data-en="So I think the factory is also a bit of that path to go from single player to multiplayer, right? And go into that collaboration. And I think from like from a security lens perspective, uh there's also the advantage that once you start running things in the cloud and in kind of these defined uh workflows, then uh then you start kind of having visibility to it, you know what's installed, you can identify risks and contain them, you know, you can you can create more protected environments." aria-label="回原文"></button>。

**意外的收获不只是速度**

提速是大家期待中的，但有两件事 Drew 事先没料到。一是**质量提升**：多出来的容量不会全拿去堆新功能——设计团队成员一口气合入 13 个 PR,全是修文案一致性、品牌语调、删多余边框这类原本只会积压在待办清单上的事 <button class="pd-ts" data-t="11:49" data-who="Drew" data-en="Two of the things that we've seen that were uh interesting, I may not have guessed up front, for the big one was an increase in quality. So we've actually seen that now that we have all this extra capacity, you don't turn all of it towards cranking out new features." aria-label="回原文"></button>。二是**更好的可互换性**：设计师提交的 PR 能被合入，GTM 团队能自己改营销网站不用等工程，工程师能自己写规格说明——每个人都能做点高杠杆的事，不用想「谁来接手、怎么交接」<button class="pd-ts" data-t="12:24" data-who="Drew" data-en="Like people, yeah, fungibility is maybe uh such a boring business way of saying it, but everyone is able to do a little bit of everything, right? Like I just mentioned, a designer putting up PRs that are getting merged, but also our GTM team is able to make changes to the marketing website without waiting on support from engineering." aria-label="回原文"></button>。

**核心信念：先定义「正确」,再谈自动化**

外面工厂很流行，但怀疑也很多：瓶颈会不会从写代码变成审代码？生成的代码到底行不行？

TESL 的回答是：要自动化一件事，你首先得坐下来定义「什么是正确的」。Guy 用了个生日礼物的比喻——「你生日想要什么？不知道，你看着办」——这样买礼物年年有失望，很多 vibe 出来的软件也是同理 <button class="pd-ts" data-t="13:41" data-who="Guy Fajani" data-en="What is it that you want to do, right? And I would use, I think since the beginning of TESL, this example of saying, hey, what do you want for your birthday? It's like, I don't know, you decide, you know, like vibe it on it." aria-label="回原文"></button>。

有个例子能看出「以上下文为中心」如何真实体现在产物里：团队让原生的 Claude、Tesla Agent 和另一个工厂类智能体各自建一个测试覆盖率工作流。另外两个更快交付了「千篇一律」的方案——直接写一大堆代码搭流水线；而 Tesla Agent 先建了一条逻辑链(这是正确的定义、这是规格)，再在其上构建，慢一点，但更有韧性、更可塑、能覆盖更多用例并跑通 <button class="pd-ts" data-t="15:51" data-who="Guy Fajani" data-en="While the approach that the Tesla agent takes, and was almost unintentional, it's just sort of our life view, our sort of uh our view on kind of this domain, uh, was first it created this sort of chain of logic." aria-label="回原文"></button>。

**代码审查：为什么「一键上手的工具」会让你撞墙**

装个 GitHub app、点几下按钮就有智能体审查 PR,像多巴胺刺激——但几周后你会发现：多抓了几个 bug、合并快了点，然后就没了，不是复利式收益，代码质量照样是问题 <button class="pd-ts" data-t="17:25" data-who="Drew" data-en="How do you scale it from there? And what a lot of people see is that amazing, I'm doing a gen to code review, like I'm really like, I'm living it, and then a couple weeks later they find, well, okay, like we're finding a few more bugs, or maybe merging a bit faster, but nothing's changing after that." aria-label="回原文"></button>。Tesla 的哲学：撞墙是因为你跳过了「写下什么是好」这一步——想不锻炼就长肌肉、不吃蔬菜就变健康 <button class="pd-ts" data-t="17:56" data-who="Drew" data-en="It still feels like code quality is a problem, or like PR review is is still an issue. And yeah, the Tesla philosophy is because you're hitting this wall because you jumped past the, you know, you tried to get to the big muscles without working out, or you tried to uh get healthy without eating your vegetables." aria-label="回原文"></button>。

把标准写下来的好处是链式的：①能在别处复用——开发阶段就让智能体看到标准按正确方式写码，还能定期自动化清扫代码库找漏网之鱼；②新项目、新仓库能立刻继承你的标准；③写下来之后才能分区域精调——前端 PR 查 ARIA 属性和无障碍、边框嵌套，后端 PR 就别浪费时间查这些，转而关注脆弱性和组件复用 <button class="pd-ts" data-t="19:06" data-who="Drew" data-en="And you know, not everything is going to get caught by code review, so you'd also like to have regular automations that sweep your code base and say, is there anything that's not conforming to our standards that slipped through or somehow is accrued and we need to fix and pull back?" aria-label="回原文"></button>。而且走向工厂后审查量巨大，人必须退出审查循环，通用审查达不到 100% 质量，必须具体到「这个组件，检查这些事项」<button class="pd-ts" data-t="20:02" data-who="Drew" data-en="Don't waste time, don't waste tokens, focus instead on um, you know, brittleness or sort of reusing certain components. Uh and in fact, this specificity, you know, being able to tune exactly what you're reviewing becomes increasingly important as you move towards factory because really the volume a factory is going to put out, you have to get humans out of the loop for code review." aria-label="回原文"></button>。

**新能力清单(近两三个月)**

- **技能清单(上下文清单)**：命令行 + GitHub app,扫描你全部仓库，找出所有喂给智能体的上下文(技能、agents MD、插件市场等)，然后帮你推理：这个从 Anthropic 市场装的技能落后四个版本了、同一个技能在五个仓库重复出现(该统一到维护源头)、多人重复解决同一问题而不自知、代码已漂移过时的技能 <button class="pd-ts" data-t="23:10" data-who="Drew" data-en="Uh so what this is, is a uh command line as well as a GitHub app that you can install across your uh your source estate, uh so across all your repos. Um, and we will scan and find all instances of context that's being fed to agents." aria-label="回原文"></button>。Guy 承认这功能比预想深得多——本来以为只是枚举文件，结果一路长成了组织级技能管理的控制平面：安全策略、治理、强制「品牌语调技能必须在每个仓库」都能从这里做 <button class="pd-ts" data-t="26:01" data-who="Guy Fajani" data-en="And it just sort of goes on and on around actionability, the dynamics between the platform team that has found, you know, maybe done that broad scan and the sort of the people that own the repos." aria-label="回原文"></button>。Guy 类比这是他出身的安全世界的打法：扫描全部仓库找依赖、标出有漏洞的，像 Wiz 那类工具的逻辑 <button class="pd-ts" data-t="26:38" data-who="Guy Fajani" data-en="And I think, you know, I can't avoid the sort of the analogies, the security world I kind of came from, which is, you know, at SNEC, it was very much around, hey, we'll scan all your repos, we'll find all your dependencies." aria-label="回原文"></button>。
- **扩展到非工程职能**：上下文清点之后，市场、销售、支持团队也能对他们的技能做版本管理、分发、部署——不用教销售团队 Git 工作流 <button class="pd-ts" data-t="27:13" data-who="Drew" data-en="Uh and also I'd be remiss if I didn't also mention we've extended support beyond uh just engineering use cases. So now we have the ability, once we've inventoried all your context, you can now version, distribute, deploy uh for your go-to-market function, for sales, for support, for anything like that." aria-label="回原文"></button>。集中放在 Tesla registry 管理，再同步到各家 marketplace,好处是模型无关、有真正的版本生命周期可防回归 <button class="pd-ts" data-t="28:02" data-who="Drew" data-en="So managing the sort of the skills centrally on the sort of the Tesla registry and then synchronizing them to the right spots uh has been quite appealing. All the benefits being model agnostic, having an actual versioned life cycle so you can prevent regressions, all of that." aria-label="回原文"></button>。
- **[[验证器|验证器]](verifier)**:技能写下来只是 Markdown,智能体不一定照做——所以从技能自动生成非常聚焦、高准确率、快且便宜的「LM as judge」(用小模型当裁判)工具。例：技能写着「所有前端组件必须带 ARIA 属性」，生成的验证器就扫描每个被改动的 TSX/JSX 文件里的 React 组件查这件事——prompt 极简单，小模型判得又快又准又便宜，可以直接跑进 CI。它给了技能「执行强制」的那一半，让人回到熟悉的确定性软件开发世界 <button class="pd-ts" data-t="29:03" data-who="Drew" data-en="And so verifiers are a thing we've built at TESIL. You can think of it as a way of turning your skills into or creating off of them very focused, high accuracy, very fast, very cheap LM as judge tools where uh to take an example, let's say you have a skill that says all front-end components must have ARIA attributes on them, right?" aria-label="回原文"></button>。Guy 把这叫「信任但验证」：你放手让智能体干，但验证器回答「它到底做了没有」<button class="pd-ts" data-t="30:36" data-who="Guy Fajani" data-en="And I think I I very much see this as the trust but verify, you know, like you run the agent, you give them instructions, you trust them, you have to let go to some extent, you know, for them to do that." aria-label="回原文"></button>。
- **从历史行为提取正确性**：要求你「写下所有路径」听着吓人，但关键突破口是：大部分正确性可以从历史行为中提取——代码评审评论、PR 历史、工单、Slack,交给 Tesla Agent 去提取和捕获。不是按个按钮就完事，但也不用全团队花三周手工整理。越信任那套指令集和验证器，就越能给智能体自主权 <button class="pd-ts" data-t="31:53" data-who="Guy Fajani" data-en="Um and I think it might feel a little bit scary uh to people as we talk about, hey, you have to sit down and kind of write down all of your paths, but I think one of the key unlocks that we've embraced probably starting about three months ago, uh, is this appreciation that a lot of that correctness can actually be extracted from historical behavior." aria-label="回原文"></button>。

**循环与 Tesla Code Review**

循环分两类，一类是**软件维护循环**：找并修不稳定的测试、定期架构审查、补测试覆盖率、依赖升级——都由技能驱动，智能体轻松搭好，你也可以渐进：先手动跑几次技能，确认可行，再转成循环，随时可拉回手动 <button class="pd-ts" data-t="35:23" data-who="Guy Fajani" data-en="And so all of those are examples of loops that can be skill-driven that the Tesla agent can very easily set up for you, and then you can go on to optimize and improve." aria-label="回原文"></button>。循环终究是打磨技能——最终产出一个非常好的、可在很多地方使用的技能，而不只服务于那个特定循环 <button class="pd-ts" data-t="36:49" data-who="Guy Fajani" data-en="Uh and and I I want to stress that we still see the world as skill-centric. Eventually, what the loop does is it hones a skill, right? It creates a very good skill, maybe a harness around it, you know, like again, skill in the broad sense of the word." aria-label="回原文"></button>。

Tesla Code Review 是「上下文驱动代码审查」的代表循环，核心是**技能驱动**：审查标准被拆成任意多个「透镜(lenses)」——每个透镜是一项把「好」编纂成文的技能，你指定它适用的文件模式，PR 一提交，相应的透镜被触发审查。于是这套标准同时可用于开发时的智能体、维护智能体和代码库清扫 <button class="pd-ts" data-t="38:49" data-who="Drew" data-en="So that's probably the core of TESL's code review is that it is skill powered. Uh we call them lenses just like code review lenses where you can supply any number of skills, it doesn't just have to be one, that codify some standard of good in your code base." aria-label="回原文"></button>。它还回馈上下文平台：代码审查是「哪里出了问题」的富矿，能发现缺失的上下文、没被触发或没起效的技能并建议改进，让问题不必等到审查才被抓住——开发上下文和审查标准互相喂养，才有复利 <button class="pd-ts" data-t="40:03" data-who="Drew" data-en="So that was another thing that we learned is that code review is a very rich source of what's going wrong. Like what skills are we missing, what skills aren't working." aria-label="回原文"></button>。

Guy 总结它对比通用审查工具的三个差别：①**你拥有它**——技能、调优都是你的，可按需精调查什么、扫描多深、在不同模型上花多少钱；②正因如此**它就是更好**——找到更多问题、更快、噪音更少，不是算法多牛，而是「拥有」的副作用；③它是**通往工厂的路径**——工厂里不必等代码签入，直接把审查技能作为流程一环在工单实现时运行 <button class="pd-ts" data-t="41:48" data-who="Guy Fajani" data-en="And I, you know, I I I think reviewing is a critical part uh of it, but I guess I think of our code review in comparison to to the sort of the generic, again, powerful code review tools that are out there, is that I think the key difference is uh that that you own it, you know, it's your uh skills, it's your tunings, you know, you can uh therefore kind of refine them to your specific needs, not just what it looks for, but also choices like depth of scanning and choice of how much do you spend on different models on it." aria-label="回原文"></button>。Drew 一句话收束：「具体性基本上是所有质量的标尺」——给智能体一个指令清晰的具体任务，永远胜过泛泛的「这样找代码坏味道」<button class="pd-ts" data-t="42:20" data-who="Drew" data-en="Specificity basically is the ruler of all quality. Like if you can have a very specific task that the agent has clear instructions on what to do, it's gonna be better than a generic here's how to look for code smells." aria-label="回原文"></button>。

**工厂层：平台组件 + 连续体**

工厂是最初期的部分，因为客户更迫切的需求先在技能和循环。核心发现是：有好技能但你还得手动运行、手动粘贴到各处，写下来的价值就兑现不了——需要提供「轨道和管道」来自动部署上下文、替你干活 <button class="pd-ts" data-t="44:25" data-who="Drew" data-en="Having a really great skill that you still have to run manually or you have to go paste into all of the various places you want it to be used, you're not going to get the value that comes from having done the work to write it down." aria-label="回原文"></button>。而且建工厂是**连续体不是终点**：你不会说「两个月建完」，而是不断做循环，直到你的大部分工作变成维护循环和建循环来观察循环——自然过渡，无缝混合 <button class="pd-ts" data-t="44:45" data-who="Drew" data-en="And what we found is basically once you start getting into this world, like factory building is really it's more of a continuum. It's not a final state. You're not going to say, okay, I've made a few loops, now I will have a factory, and in two months I'll be done." aria-label="回原文"></button>。

为此发布了**自动化平台**：把上下文按计划部署运行(webhooks 等触发器即将推出)，可声明工作流需要 Slack、Notion、每周五跑，可选最便宜的模型拿到够用的质量；后半部分集成回上下文平台——所有运行捕获日志，你可以再建自动化去审查日志、基于真实使用改进技能；且所有自动化默认多人协作，可见、可分享、可设权限 <button class="pd-ts" data-t="45:14" data-who="Drew" data-en="It'll be a sort of a blended approach. And so the first thing that we've built to enable this is an automations platform, which effectively allows you to take the context that you've created and deploy it in a way that runs on schedule." aria-label="回原文"></button>。

Guy 最后强调立场：每家公司应该**拥有**自己的工厂，甚至会有多个——按仓库、业务单元划分；工厂是你对「什么是正确」的定制化定义，是新的软件工程。但这不等于每个组件都自己造——工具提供者的工作是沉淀行业可复用的部分：可观测性、上下文捕获与评估、调度、访问控制、仪表盘 <button class="pd-ts" data-t="47:07" data-who="Guy Fajani" data-en="I guess the the point I'd emphasize is you know, we think every company should own its factory. In fact, we think there will be a plurality of factories, right? Like they will have factories uh for different repos or business units or sort of segments of it." aria-label="回原文"></button>。TESL 自己的节奏是：每周回顾都发现上一周干完了以前一个季度的活儿，「连眨眼都不敢，既兴奋又让人畏惧」<button class="pd-ts" data-t="49:49" data-who="Guy Fajani" data-en="Okay, what do we do next? Uh it does feel like you can't blink, you know, which is sort of exciting and exciting and daunting at the same time. Uh so if you found uh all of this conversation interesting, uh, we'd love for you to try the sort of the expanded uh TESL of it." aria-label="回原文"></button>。

## 本集带走

- **顺序不能颠倒**：先写下「什么是对的」(技能)，再自动化成循环，最后长成工厂——跳过第一步装个审查工具，几周后收益就停了。
- **标准写下来才可复用、可分域**：同一套标准供开发、审查、清扫三处使用；前端查无障碍、后端查脆弱性，别浪费 token。
- **用验证器补上「执行强制」那一半**：从技能自动生成小而准的 LM as judge 检查，跑进 CI,把智能体行为拉回确定性世界。
- **正确性不必手写，可以从历史提取**：把 Agent 指向 PR 历史、工单、Slack,让它替你捕获标准，再逐步演化。
- **工厂是连续体，不是两个月的项目**：循环越来越多，直到维护循环本身成为你的主要工作，就自然过渡到工厂了。
- **质量比速度更意外的收益**：多出来的容量流向一致性修复、可互换性提升——设计师合 PR、GTM 自改官网。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">我们曾达到一周大约 850 个 PR 的峰值，其中 85-90% 完全由智能体处理。</span>  
> *We hit a peak of something like 850 PRs in a week, and 85-90% of those were handled by agents entirely.*  
> <span class="qm">—— Drew · [00:00]</span> ^q1

> <span class="qz">就像如果你把家里打理得井井有条，智能体就会给你超能力；如果你不负责任，它们会给你反超能力，对吧？</span>  
> *Like if you're keeping your house in order, agents give you superpowers. If you're being irresponsible, they give you anti-superpowers, right?*  
> <span class="qm">—— Drew · [03:54]</span> ^q2

> <span class="qz">于是你开始获得复利式的收益，你开始看到智能体让你的生产率以超过单纯线性的速度向上拐升。</span>  
> *And so you start to get compounding gains, you start to see agents sort of inflecting your productivity upwards faster than just linear.*  
> <span class="qm">—— Drew · [05:57]</span> ^q3

> <span class="qz">Tesla 的哲学是：你撞上这堵墙，是因为你跳过了——你试图不锻炼就练出大块肌肉，或者试图不吃蔬菜就变得健康。</span>  
> *The Tesla philosophy is because you're hitting this wall because you jumped past the, you know, you tried to get to the big muscles without working out, or you tried to uh get healthy without eating your vegetables.*  
> <span class="qm">—— Drew · [17:57]</span> ^q4

> <span class="qz">而且实际上，这种特异性——能够精确调整你正在审查的内容——在你走向工厂的过程中变得越来越重要，因为说真的，工厂将要产出的量，你必须让人类退出代码审查的循环。</span>  
> *And in fact, this specificity, you know, being able to tune exactly what you're reviewing becomes increasingly important as you move towards factory because really the volume a factory is going to put out, you have to get humans out of the loop for code review.*  
> <span class="qm">—— Drew · [20:02]</span> ^q5

> <span class="qz">你可以把它理解为一种方式：把你的技能转化成、或者说基于它们创建出非常聚焦、高准确率、非常快、非常便宜的「LM as judge」工具。</span>  
> *You can think of it as a way of turning your skills into or creating off of them very focused, high accuracy, very fast, very cheap LM as judge tools*  
> <span class="qm">—— Drew · [29:03]</span> ^q6

> <span class="qz">具体性基本上是所有质量的标尺。比如如果你能给智能体一个非常具体的任务，让它对要做什么有清晰的指示，那就会比一个泛泛的『这样去找代码坏味道』要好。</span>  
> *Specificity basically is the ruler of all quality. Like if you can have a very specific task that the agent has clear instructions on what to do, it's gonna be better than a generic here's how to look for code smells.*  
> <span class="qm">—— Drew · [42:17]</span> ^q7

> <span class="qz">可以这么说，你会不断地做循环，直到你有太多的循环，以至于你的大部分工作都在维护循环、以及构建用来观察它们的循环。</span>  
> *It's sort of, you're going to keep working on loops until you have so many loops that most of your work is in maintaining loops and building loops to observe them.*  
> <span class="qm">—— Drew · [44:52]</span> ^q8

> <span class="qz">而且我们认为工厂是你应该拥有的东西，对吧？比如，它是你对「什么是正确的」的定制化定义。它就是新的软件工程。</span>  
> *Uh and we think a factory is something you should own, right? Like it is it is your custom definition of what correct is. It's the new software engineering.*  
> <span class="qm">—— Guy Fajani · [47:15]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact|TESL 智能体：让你的编码智能体自己越用越好]]<span class="pd-rz">同嘉宾:Guy Fajani · 同公司:TESL · 同概念:代码审查 (code review)、验证器 (verifiers)</span>
- [[2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo|Datadog 4000 人AI赋能实战：删掉上下文反而更好]]<span class="pd-rz">同概念:上下文 (context)、代码审查 (code review)、技能 (skills)</span>
- [[2026-07-24-talks-inside-the-agent-engine-a-langchain-and|当系统出故障时，让 AI 代替作战室里的 50 个人——Traversal 谈如何造 AI SRE]]<span class="pd-rz">同概念:上下文 (context)、可观测性 (observability)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同公司:TESL · 同概念:上下文 (context)、可观测性 (observability)</span>
- [[2025-06-08-lennys-inside-mercado-libre-sebastian-barrios|MercadoLibre 的 18000 人工程团队怎么管]]<span class="pd-rz">同概念:智能体 (agents)</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:上下文 (context)</span>

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
