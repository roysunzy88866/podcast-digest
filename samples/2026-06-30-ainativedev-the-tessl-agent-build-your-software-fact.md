---
title: TESL 智能体：让你的编码智能体自己越用越好
podcast: The AI-Native Dev
date: 2026-08-27
source_url: undefined
duration: "52:46"
type: episode
cover: "#64748b"
image: "/covers/2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact.jpg"
description: "TESL 产品负责人 Andrew 介绍新发布的 TESL 智能体，讲解\"循环工程\"理念——如何让智能体在后台自动优化自身，最终让大量代码审查无需人工介入。"
host: "[[Guy Fajani]]"
cohosts: ["[[Simon Maple]]", "[[Andrew]]"]
companies: ["[[TESL]]"]
concepts: ["[[智能体]]", "[[循环工程]]", "[[技能]]", "[[验证器]]", "[[变更风险验证器]]", "[[软件工厂]]", "[[代码审查]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact#post","headline":"TESL 智能体：让你的编码智能体自己越用越好","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact","mainEntityOfPage":"https://talk.solomind.cc/2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact","description":"TESL 产品负责人 Andrew 介绍新发布的 TESL 智能体，讲解\"循环工程\"理念——如何让智能体在后台自动优化自身，最终让大量代码审查无需人工介入。","datePublished":"2026-08-27","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact.jpg","about":[{"@type":"Person","name":"Guy Fajani"},{"@type":"Person","name":"Simon Maple"},{"@type":"Person","name":"Andrew"},{"@type":"Organization","name":"TESL"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"循环工程 (loop engineering)"},{"@type":"Thing","name":"技能 (skill)"},{"@type":"Thing","name":"验证器 (verifiers)"},{"@type":"Thing","name":"变更风险验证器 (change risk verifier)"},{"@type":"Thing","name":"软件工厂 (software factory)"},{"@type":"Thing","name":"代码审查 (code review)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"TESL 智能体：让你的编码智能体自己越用越好","item":"https://talk.solomind.cc/2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>TESL 智能体：让你的编码智能体自己越用越好</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# TESL 智能体：让你的编码智能体自己越用越好

<div class="pd-byl"><b>Andrew</b> · TESL 产品负责人 · 2026-08-27</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">在某个时刻你可能会说，哇，我们 40-50% 的 PR 甚至没有一个人在看它。</div><div class="a">— Andrew <button class="pd-ts" data-t="00:23" data-who="Andrew" data-en="And at some point you might say, like, wow, 40-50% of our PRs don't even have a human looking at it." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Guy Fajani]] · [[Simon Maple]] · [[Andrew]]
>
> **公司** [[TESL]]
>
> **概念** [[智能体]] · [[循环工程]] · [[技能]] · [[验证器]] · [[变更风险验证器]] · [[软件工厂]] · [[代码审查]]

这集是 [[TESL|TESL]] 的产品负责人 [[Andrew|Andrew]] 跟主持人 Simon 聊刚发布的 TESL [[智能体|智能体]]——一个帮你搭建"[[软件工厂|软件工厂]]"的命令行智能体。最反直觉的一点是：这个智能体的终极目标是让你**不再使用它**，而是让它在后台自动干活，到某个时刻你团队 40-50% 的 PR 甚至没有一个人在看 <button class="pd-ts" data-t="00:56" data-who="Andrew" data-en="This is the AI Native Dev. We just wrapped up two amazing days at AI DevCon in London. But the great thing is that we get to do it all over again in New York City this November." aria-label="回原文"></button>。

## 三层代码审查：从一次性设置到自动进化

用 TESL 智能体搭智能体[[代码审查|代码审查]]，它会一次性帮你设好三层东西：

**第一层：基于[[技能|技能]]的 PR 审查。** 你输入一句"帮我设置代码审查"，智能体会先扫描你所有的 PR、issue tracker 里的工单、以及编码智能体的会话日志，从中提取你团队已有的隐性知识——比如风格指南是什么、智能体常犯什么错、人工审查时最常给什么意见 <button class="pd-ts" data-t="06:25" data-who="Andrew" data-en="So the first, you'd come in and just type something like setup agent at code review, or I want to spend less time reviewing code. Uh and the Tesla agent is gonna start by reviewing and creating evidence-backed findings." aria-label="回原文"></button>。

基于这些，它帮你生成一个"技能"（skill），然后用这个技能驱动你选的编码智能体（Claude Code、Gemini 等都行，它不绑定任何一个）去跑审查 <button class="pd-ts" data-t="10:13" data-who="Andrew" data-en="You just log into TESIL and then set which agent you'd like it to use. Includes open models and open agents as well, which is great for sort of minimizing costs, which is a big one for code review because it's running all the time." aria-label="回原文"></button>。关键设计：这个技能是你拥有的，你可以改、可以分享、可以搬到工作流的其他地方，不是买来就锁死的黑盒 <button class="pd-ts" data-t="07:46" data-who="Andrew" data-en="And skill-based here is kind of interesting because it's uh unlike a lot of tools that are just sort of one click, you put it in production, you forget about it." aria-label="回原文"></button>。

**第二层：[[变更风险验证器|变更风险验证器]]。** 很多团队用上智能体审查后的下一个问题是：哪些 PR 还需要人看、哪些可以放心交给智能体？TESL 提供一个叫"变更风险[[验证器|验证器]]"的东西，你按团队策略配置——可以调宽松（尽量让智能体审）也可以调严格（大多数仍需人工）——然后作为 CI 流水线里的一步自动跑 <button class="pd-ts" data-t="11:04" data-who="Andrew" data-en="Um, but once you have that uh generic code review set up, the next thing that the Tesla agent will help you do is set up a PR review sort of human gate. And what this means is that we found a lot of companies when they adopt uh agentic code review, the next question they have is when do I have to review it now versus when can the agent review it?" aria-label="回原文"></button>。

**第三层：验证器（verifiers）。** 这是最有技术含量的部分。

智能体把你仓库里已有的技能和规则，拆成一个个非常小、非常快、非常便宜的 LLM 检查规则——比如"前端文件是否正确使用了 ARIA 无障碍属性"就单独一个验证器 <button class="pd-ts" data-t="12:42" data-who="Andrew" data-en="So you can think of these as very small, targeted, and fast LLM linting rules that look at a change, look at the sort of code that's coming into your code base, specifically against different aspects that you've codified in your skills." aria-label="回原文"></button>。堆叠一批这种高度聚焦的小规则，像跑 lint 一样对每个变更跑一遍，专门抓智能体"说了但没做到"的违规 <button class="pd-ts" data-t="13:12" data-who="Andrew" data-en="And if you stack a bunch of those up and keep them very focused, you can keep them small, fast, cheap, and you basically run them like linting against every change that comes in." aria-label="回原文"></button>。Andrew 的原话是：验证器真正闭环了"你给智能体的指令"和"它实际生成的代码"之间的缝隙 <button class="pd-ts" data-t="13:56" data-who="Andrew" data-en="It checks whether it adheres to those. The verifiers, in my opinion, are the thing that really closes the loop between skills and plugins and like the sort of instructions, the control plane you have over agents to the actual code that is generated." aria-label="回原文"></button>。

## 循环工程：不是先建好再优化，而是从第一天就转起来

三层审查设好之后，TESL 智能体还会帮你设一个每日或每周自动运行的循环：它再次扫描所有 PR、CI 结果、审查评论、智能体会话日志，找新漏掉的错误，然后自动生成新验证器或更新审查技能，再用评估场景回测验证"修了之后是不是真不犯了" <button class="pd-ts" data-t="14:30" data-who="Andrew" data-en="Getting loopy. So the uh what the final thing that will be set up is a recurring daily or weekly, depending on what you'd like, automation where the Tesla agent will scan, again, all of your PRs, uh CI checks, PR comments, coding agent sessions, and try to find new mistakes that are slipping through." aria-label="回原文"></button>。

这个思路叫"[[循环工程|循环工程]]"（loop engineering），Andrew 认为它听起来像高级话题，但实际上应该是**起点**而不是终点 <button class="pd-ts" data-t="16:30" data-who="Andrew" data-en="Yeah, exactly. It's I'd say the loop is probably one thing if somebody was you know just waking up to agents today in 2026 and looking to get started. I think uh interestingly, the building these loops, doing the sort of loop engineering, it feels maybe like an advanced topic to start." aria-label="回原文"></button>。原因很实际：大多数团队引入智能体后，会卡在一个两难——智能体犯了错，你是继续推功能不管它（陷入局部最优，智能体永远不能做得更多），还是停下来花几个月修内部工具（速度断崖式下跌）<button class="pd-ts" data-t="17:23" data-who="Andrew" data-en="You have no way of anticipating where agents will fail, when they'll fail, how much work it's going to take to get them to stop failing. And so when most teams get started with like the traditional, you know, boot up an agent, you start interacting with it, uh, they basically find this place where the agent will have made a mistake and they have to choose between do I push through and ship the feature, or do I pause, roll back, and do some science to try and make the agent able to do this in the future." aria-label="回原文"></button>。循环工程绕开了这个选择：循环本身以非常清晰的方式运行，错误信息从本地会话日志里被提取出来变成可操作的 PR，你只需要看一眼说"有道理"或者"不对"，不用自己动手改，智能体自然就越来越强 <button class="pd-ts" data-t="18:17" data-who="Andrew" data-en="And so moving to a loop early does two big things. The first is that these loops run in very legible ways. So instead of having a bunch of your insights into how agents are failing, locked away in pr local coding agent session logs, if it's running through a PR review." aria-label="回原文"></button>。

而且循环可以嵌套：你设了每日架构审查，再设一个循环去监控这个审查本身、让它每周更有效一点 <button class="pd-ts" data-t="30:24" data-who="Andrew" data-en="You know, fix my flaky tests uh on a recurring fashion. Yeah. Uh and once you have one set of loops, then you can make loops around those loops." aria-label="回原文"></button>。

## 成本优化：别在交互式会话上抠，在重复性工作流上抠

关于成本，Andrew 的核心建议是：**不要试图优化你日常交互式编码时的模型选择** <button class="pd-ts" data-t="22:00" data-who="Andrew" data-en="But the first piece of advice I always give, and the Tesla agent really tries to especially. This philosophy is don't try to optimize your general cost, right? If you're thinking about how do I make it so that every time someone opens Claude Code, they're picking the right model, they're planning with Opus, and then delegating to haiku or things like that." aria-label="回原文"></button>。原因有两个：一是开发者不想在写代码时还操心该用哪个模型，会默认用自己顺手的；二是你很难提前判断一个任务会不会突然变复杂——你以为是个小模型能干的活，结果碰到了意想不到的难题 <button class="pd-ts" data-t="22:28" data-who="Andrew" data-en="And they'll kind of always default to whatever their preference is. But the second is that it's also very hard to anticipate up front when a job is going to become complicated." aria-label="回原文"></button>。

正确的做法是：先用你最喜欢的模型做交互式开发，同时把重复性任务逐步剥离成结构化的技能和工作流——**委派和自动化这件事本身，就是成本优化的工作** <button class="pd-ts" data-t="23:27" data-who="Andrew" data-en="Those become great targets for optimization. And so what I generally say is the work of delegating and sort of caught putting a box around a certain task and setting it up to run automated is also the work of cost optimization." aria-label="回原文"></button>。一旦一个任务被结构化了（比如代码审查，每天跑几十次），你就可以用 TESL 的评估工具，生成一批假设 PR，在小模型、开源模型上跑，量化出"差 5% 但便宜 80%"这种权衡，然后做有依据的降本决策 <button class="pd-ts" data-t="24:00" data-who="Andrew" data-en="That's where you can bring in the rest of Tesla's tools to say, I have this skill. It codifies my workflow for code review, create a bunch of hypothetical PRs for it to review, run it through its paces, try it on a small model, try it on an open model, help me make that trade-off of, you know, maybe it's 5% worse, but 80% cheaper, I'm willing to pay that cost." aria-label="回原文"></button>。

## 自建工厂还是买现成：为什么 TESL 选开放模块化

Andrew 承认这跟他的 Web 标准背景有关，但他给出了三个商业层面的论据 <button class="pd-ts" data-t="31:48" data-who="Andrew" data-en="Yeah, of course. So uh I'll I'll bligh some of my roots here. I started my career working on open web platform, uh web standards, so certainly have a bit of a bleeding heart for this as well." aria-label="回原文"></button>：

第一，没有任何单一公司能在软件工厂的每个组件（设计、代码审查、代码生成、法务对接……

）上都做到最好，买单一方案必然在某些环节用了次优解 <button class="pd-ts" data-t="32:38" data-who="Andrew" data-en="Uh, and we think that for a few reasons. I think the most important one is that when you think about the grand total of building software products, right? There's a lot that goes into it." aria-label="回原文"></button>。第二，工厂本质上是产出你产品的机器，它里面的工作流和知识是你的 IP 和护城河——如果全锁在一个厂商的生态里，对方随时可以抬价 <button class="pd-ts" data-t="33:35" data-who="Andrew" data-en="That's a that's an important one. I think the other is that when you think of how critical this factory is going to be to your company, I mean, in effect, it is the thing that produces your product." aria-label="回原文"></button>。第三，你构建的技能、规则这些"秘方"应该跟着你走，而不是锁在某个工具里——比如代码审查的"大脑"不应该和审查的"框架"绑死，换工具时技能文件直接带走插上就行 <button class="pd-ts" data-t="35:11" data-who="Andrew" data-en="So a great example of this with code review. We think that there is a general harness that should provide code review, but you don't want the brain of your code review to be locked inside that harness." aria-label="回原文"></button>。

## AI 时代做 DevTools：易用性的含义变了

Simon 和 Andrew 最后聊了一个产品层面的观察：智能体时代，"易用性"多了两层新含义 <button class="pd-ts" data-t="46:15" data-who="Andrew" data-en="So it was an interesting kind of learning process here. The way that I've sort of brought it together when thinking about designing new products and maybe like a very concrete way is that like you said, ease of use has always mattered, but agents have added a few new layers, especially if you're thinking about DevTool products, which is that historically I think DevTools have focused a lot more on providing expressive power." aria-label="回原文"></button>。

一是用户变得"结果导向到极致"——不再愿意学你的命令词汇表再自己拼起来，而是"我告诉你我要什么，你帮我搞定" <button class="pd-ts" data-t="46:54" data-who="Andrew" data-en="And there was just sort of an expectation that the value is going to be enough that as a developer, you will learn my new vocabulary, you will stitch them together, you will do a lot of building on your own." aria-label="回原文"></button>。二是知识的保质期极短——智能体和相关概念几周一变，学习不再是"学一次管用几年"，而是每周都在更新，所以产品本身得替用户扛住"保持最新"这件事 <button class="pd-ts" data-t="47:28" data-who="Andrew" data-en="And so that sort of end-to-end, I want to speak in outcomes, I don't want to speak in the language of your product is has never been more extreme in this moment." aria-label="回原文"></button>。甚至产品发功能的速度会超过用户消化变化的速度，这时候就得靠智能体界面来做"翻译层"——用户只管说想要什么，智能体在背后对应到产品最新能力上 <button class="pd-ts" data-t="48:01" data-who="Andrew" data-en="And so I think a significant portion of usability that you can provide is handling that on behalf of your users, keeping things up to date for them. Uh and then maybe an outshoot of that, as you yourself become more agent-enabled as a product company, one thing that we have found is quickly your rate of shipping features will start to outstrip your GTM motions, eventually just your user's ability to ingest the changes." aria-label="回原文"></button>。

> 【背景】TESL 是一家提供"技能和上下文包管理"工具的公司，帮助团队管理和扩展给编码智能体用的指令（技能/skills）。本集转写稿中"Tesla""TESL""TESIL"混用，均指同一家公司。主持人 Simon 在开场口误称 Andrew 为"Drew"，后文也交替使用，实为同一人。"clawed codex"应为"Claude Code"的转写错误。"Aaron Powell"出现在主持人台词中，疑为语音识别误插入的第三方人名，非本集嘉宾。

## 本集带走

- **让智能体审查也分层**：通用审查用技能驱动、风险判断用策略门控、规则合规用小型验证器分别抓——三层各管各的，比一个大而全的审查更精准也更便宜。
- **从第一天就建循环，别等"建好再优化"**：交互式用智能体时遇到的反复出错，直接让循环去观察、生成修复、回测验证，避免"停工修工具"还是"将就用"的两难。
- **成本优化瞄准结构化后的重复任务**：日常编码别抠模型，把重复工作剥离成工作流后，用评估量化不同模型的性价比差异再做降本。
- **技能资产要可携带**：你精心调出来的审查规则、风格指南应该存为仓库里的文件，不锁在某个工具里，换"大脑"时直接带走。
- **入门动作**：下载 TESL CLI，输入 `tesl agent`，让它"设置代码审查"或"看看有什么可以委派给 AI"——它会扫描你的日志和 PR 自动开始。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">在某个时刻你可能会说，哇，我们 40-50% 的 PR 甚至没有一个人在看它。</span>  
> *And at some point you might say, like, wow, 40-50% of our PRs don't even have a human looking at it.*  
> <span class="qm">—— Andrew · [00:23]</span> ^q1

> <span class="qz">很难想象单一提供商、单一公司如何能在其中的每一个组件中都做到业内最佳，对吧？</span>  
> *It just seems hard to imagine how a single provider, a single company could be best in breed at every single component that goes into that, right?*  
> <span class="qm">—— Andrew · [32:47]</span> ^q2

> <span class="qz">所以这是一个非常敏感的地方，去采纳一个完全集成的解决方案，而现在它拥有对你的完全定价杠杆，对吧？</span>  
> *And so it's a very sensitive place to be bought into a fully integrated solution that now has complete pricing leverage over you, right?*  
> <span class="qm">—— Andrew · [33:47]</span> ^q3

> <span class="qz">我认为关于智能体真正内化的第一件事是，它们真的让我们所有人都变得贪得无厌，就像结果导向的机器，对吧？</span>  
> *And I think the first thing to really internalize about agents is that they've really made all of us insatiable, like outcome-oriented machines, right?*  
> <span class="qm">—— Andrew · [46:54]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co|Tesla 的暗工厂：65% 的 PR 由智能体自动产出，95% 的代码没人看过]]<span class="pd-rz">同嘉宾:Simon Maple · 同公司:TESL · 同概念:智能体 (agent)、软件工厂 (software factory)、沙箱 (sandbox)</span>
- [[2026-09-02-ainativedev-850-prs-a-week-how-tessl-runs-a-software|从技能到循环再到工厂:软件工厂实战路线图]]<span class="pd-rz">同嘉宾:Simon Maple · 同公司:TESL · 同概念:代码审查 (code review)、验证器 (verifiers)</span>
- [[2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo|Datadog 4000 人AI赋能实战：删掉上下文反而更好]]<span class="pd-rz">同嘉宾:Simon Maple · 同概念:代码审查 (code review)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同嘉宾:Simon Maple · 同公司:TESL · 同概念:循环工程 (loop engineering)、智能体 (agent)、评估 (evals)</span>
- [[2026-08-19-pragmatic-from-chrome-devtools-to-ai-engineering|Addy Osmani：从造浏览器到对抗认知投降]]<span class="pd-rz">同概念:循环工程 (loop engineering)、智能体 (agent)、软件工厂 (software factory)</span>
- [[2026-06-24-pg-company-os-jz|Laurel 产品负责人：怎么用 GitHub 把全公司的工作流变成 AI 技能]]<span class="pd-rz">同概念:技能 (skill)、智能体 (agent)</span>

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
