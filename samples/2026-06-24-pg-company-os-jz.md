---
title: AI 时代的产品团队：Laurel CPO 的公司操作系统与「超级个体」实战
podcast: Product Growth Podcast
date: 2026-06-24
source_url: https://www.news.aakashg.com/p/company-os-jz
duration: "67:49"
type: episode
cover: "#64748b"
image: "/covers/2026-06-24-pg-company-os-jz.jpg"
description: Laurel CPO 分享如何用 AI 技能库构建公司操作系统，让非工程师也能端到端交付产品功能。
host: "[[Jiaona Zhang]]"
cohosts: ["[[Akash]]"]
companies: ["[[Laurel]]", "[[GitHub]]", "[[Slack]]", "[[Dust]]", "[[Devon]]"]
concepts: ["[[智能体]]", "[[剧本]]", "[[技能]]", "[[本体]]", "[[船长]]"]
category: 产品方法
tags:
  - 产品方法
  - AI 编程
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><span class="soon" title="必读页归 C13c">最热</span></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 时代的产品团队：Laurel CPO 的公司操作系统与「超级个体」实战</span></a><div class="pd-acts"></div></div></header></div>

# AI 时代的产品团队：Laurel CPO 的公司操作系统与「超级个体」实战

<div class="pd-byl"><b>Jiaona Zhang</b> · Laurel CPO</div>

<div class="pd-mt">2026-06-24 · Product Growth Podcast · 67:49</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-06-24-pg-company-os-jz.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我认为这是公司最挣扎的事情，也就是你有这些人，他们是这 1% 的 AI 用户。他们在修补他们的工作流程，他们高度 AI 化，然后你有你知道组织中其余 90% 到 99% 的人不确定该什么时候使用什么。</div><div class="a">Jiaona Zhang · 05:38</div></div>

> [!info] 关联
> **主持**:[[Jiaona Zhang]]
>
> **联合主持**:[[Akash]]
>
> **涉及公司**:[[Laurel]] · [[GitHub]] · [[Slack]] · [[Dust]] · [[Devon]]
>
> **概念**:[[智能体]] · [[剧本]] · [[技能]] · [[本体]] · [[船长]]
>
> **来源**:[Product Growth Podcast](https://www.news.aakashg.com/p/company-os-jz)

<div class="pd-tldr"><b>一句话</b>Laurel CPO 分享如何用 AI 技能库构建公司操作系统，让非工程师也能端到端交付产品功能。</div>

如果你还在用传统方式管理团队——PM 写需求文档、扔给设计师、再扔给工程师开发——那么这期访谈可能会彻底改变你的想法。本期嘉宾是 [[Jiaona Zhang|Jiaona Zhang]]（被主持人戏称为 Jay-Z），她是估值 1 亿美元、AI 原生公司 [[Laurel|Laurel]] 的首席产品官（CPO）。她曾在早期 Airbnb 等公司任职，见证了产品管理的数次演变。

在这场访谈中，她直接屏幕共享，向主持人 [[Akash|Akash]] 展示了 Laurel 是如何用 [[GitHub|GitHub]] 文件夹、Claude [[技能|技能]]库和 AI [[智能体|智能体]]搭建出一套「全公司操作系统」的。她不仅分享了具体的落地实操方法，更抛出了一个极具颠覆性的观点：**未来的产品团队不仅不需要扩军，反而会越来越精简；只要资深且拥抱 AI，一个 PM 就能发挥出过去一个团队的战斗力。** 全文将围绕「公司操作系统怎么搭」以及「谁来干活」这两条主线展开，带你从方法走向人。

## 把 1% 高手的经验，复制给全公司：什么是「公司操作系统」？

企业应用 AI 时普遍面临一个困境：组织里有约 1% 的人极其热衷于折腾 AI 工作流（被称为「1% AI 用户」），但剩下 90% 到 99% 的人完全不知道什么时候该用什么工具 <button class="pd-ts" data-t="05:41" data-who="Jiaona Zhang" data-en="And I think that's the biggest thing that companies struggle with, which is you got these people who are these 1% AI users. they're tinkering with their workflows they're highly AI pilled and then you have" aria-label="回原文"></button>。为了抹平这种巨大的能力鸿沟，Laurel 搭建了一套公司级的操作系统。

这套系统并不神秘，本质上就是大家熟悉的 GitHub 文件夹结构。他们把公司从客户成功、数据科学到工程、财务等每个职能的日常工作，拆解成一本本「[[剧本|剧本]]（Playbook，即标准操作流程）」<button class="pd-ts" data-t="02:19" data-who="Jiaona Zhang" data-en="company-wide operating system where for every single function in a company customer success data science design engineering finance imitation legal marketing we have" aria-label="回原文"></button>。比如，客户成功团队该怎么做续约、怎么做交接，都被清晰地记录下来。

但光有文档没用，关键在于**将剧本转化为可随时调用的技能（Skills，指封装好的、能让 AI 执行特定任务的指令文件），并融入员工的工作流中**。在 Laurel，员工每天早上看日历时，系统已经集成了一天的简报；用 Claude 处理邮件或会议准备时，可以直接调用针对特定任务（如处理功能请求）的专属技能 <button class="pd-ts" data-t="04:55" data-who="Jiaona Zhang" data-en="But what we're now doing is we're integrating all the skills. So for example, when we do a handoff, when we do a session prep, all of these are actual skills. And what happens is then when anyone is using Claude, for example, and I'll just go into..." aria-label="回原文"></button>。

> 【背景】嘉宾在演示中频繁提及 Claude。Claude 是一款主流的 AI 模型，类似于 ChatGPT。此处提到的「技能」是指将公司最佳实践封装成 AI 可以读取和执行的指令包，让全员共享高手的经验。

他们构建这套系统时有一个重要教训：**不要让员工去记几十个不同小工具的名字，而是要创建一个「超级智能体（Mega Agent）」作为统一入口** <button class="pd-ts" data-t="18:11" data-who="Jiaona Zhang" data-en="going to do the email and the specific agent that's going to do the RFP. The big learning that we've had is how do you create a mega agent, something like a go-to-market agent that can be called" aria-label="回原文"></button>。比如设立一个「市场拓展智能体」，销售或客户成功团队遇到任何需求都先抛给它，由这个中枢负责自动把任务路由、分发给底下的各个子智能体。

### 亲自动手：如何从零搭建你的公司操作系统

说完了这套系统长什么样，接下来是他具体怎么一步步落地的。对于想要尝试的团队，Laurel 的路径非常清晰：

**第一步：从小处开始，先自动化一个无聊的工作流。**
不要一上来就想搞全公司的大动作。找一个最枯燥、每天都在重复的事情，比如销售在 [[Slack|Slack]] 里向 PM 提功能请求。过去这需要大量来回沟通（问客户说了什么、影响多大、该谁处理），现在只需做一个简单的 Slack 自动化，请求一进来就自动抓取必要信息、分派给对应的人并生成工单 <button class="pd-ts" data-t="12:30" data-who="Jiaona Zhang" data-en="That's p-e-n-d-o dot i-o slash a-a-k-a-s-h. Okay, so let's move into Slack and see what this might look like. You know," aria-label="回原文"></button>。

**第二步：把人工剧本升级为智能体自动化。**
每个团队都有厚厚的操作手册。Laurel 的 GTM（市场拓展）团队曾有一份长达 55 页的客户实施剧本 <button class="pd-ts" data-t="15:06" data-who="Jiaona Zhang" data-en="I think anyone who's ever created a playbook before, this is 50 pages. It covers everything from implementation to onboarding to user onboarding." aria-label="回原文"></button>。现在借助 AI，写初稿连一分钟都不用 <button class="pd-ts" data-t="48:03" data-who="Jiaona Zhang" data-en="These playbooks can be written in an hour. Actually, the first draft can be written in sub a minute," aria-label="回原文"></button>。写完剧本后，要明确区分哪些是必须人做的（如飞到现场拜访客户），哪些是可以自动化的（如抓取资料、起草邮件），然后为后者构建出一个个的技能文件。

**第三步：直面智能体过载（Agent Overload）。**
一开始大家很兴奋，建了一堆定时任务和智能体，但很快发现陷入了信息过载 <button class="pd-ts" data-t="20:44" data-who="Jiaona Zhang" data-en="only see a couple of these pinned and what I found was that it was almost overkill it was like I sat there I was like oh I might automate this and so I built it I was" aria-label="回原文"></button>。为了防止员工被各种自动化消息淹没，Laurel 专门花时间把所有的技能和简报集中到一起，确保全公司的步调一致，尤其是让不太懂技术的非工程团队也能顺畅使用 <button class="pd-ts" data-t="21:14" data-who="Jiaona Zhang" data-en="that's how we consolidated it all into what I was showing you earlier, which is this, this idea of actually having all in one place," aria-label="回原文"></button>。

## 谁来写代码？让非工程师端到端交付功能

工具和工作流建好了，接下来是这套系统最反直觉的地方：**在公司里写代码交付功能的，不只有工程师，甚至主要不是工程师。**

Laurel 提出了一个「[[船长|船长]]」模式：每个项目任命一位最契合其核心难点的人当「船长」全权负责 <button class="pd-ts" data-t="29:57" data-who="Jiaona Zhang" data-en="And we've really landed on this concept of we want there always to be a captain of any given initiative. And the captain is the person where that skill set is the most important." aria-label="回原文"></button>。比如，如果是底层架构大改，工程 leader 当船长；如果是视觉交互最重要，设计师当船长；如果是涉及深刻的业务理解和用户心理，PM 当船长。

更疯狂的是，这些非工程师的「船长」，是真的在向生产环境提交前端加后端的完整代码。例如团队里的 PM Nick 独立端到端交付了「临时工时」功能（这不仅是改个按钮，而是涉及复杂数据交互的全局功能）<button class="pd-ts" data-t="23:55" data-who="Jiaona Zhang" data-en="lot of things and as a result you know my team is able to ship and I'll just go through a couple examples here is a feature an end-to-end feature which includes front-end changes and back-end changes where you know we enable people to do" aria-label="回原文"></button>；另一位 PM Jessica 完成了新用户空状态体验的开发 <button class="pd-ts" data-t="25:29" data-who="Jiaona Zhang" data-en="onboarding what is it that they see how do how do we make that experience super delightful all of this is done by by Jessica who is again a PM on my team not an engineer and also not a PM who necessarily started their career in in" aria-label="回原文"></button>。甚至连客户成功团队（非技术人员）也参与进来了，他们与 PM 合作编写了如何使用 AI 工具交付特性的指南 <button class="pd-ts" data-t="26:03" data-who="Jiaona Zhang" data-en="She deeply understands our customers and their needs. And by working with the PMs on the team to really create this enablement guide for Devon," aria-label="回原文"></button>。

> 【背景】访谈中多次提到 Devon。Devon 是 Cognition 公司推出的一款 AI 智能体工程师。你只需给它下达任务指令，它就能自主完成代码编写和修复。在 Laurel，Devon 被视作一个能力合格的「软件工程师」来使用。

他们能做到这一点，是因为有了像 [[Devon|Devon]] 这样的智能体工程师，以及像 Claude Code、Cursor（查代码库的 AI 工具）这样的辅助工具。一个不懂代码的 PM 在动手前，可以让 AI 扫描代码库并评估风险 <button class="pd-ts" data-t="33:43" data-who="Jiaona Zhang" data-en="If we believe that the backend is in a good enough spot, and by the way, you can ask Devon or even anything that's connected to your GitHub account to look" aria-label="回原文"></button>。遇到真正高危的改动，再通过类似 Ask Devon Reviewers 的公开频道，拉入真正的人类工程师做代码审查 <button class="pd-ts" data-t="36:09" data-who="Jiaona Zhang" data-en="again I believe in the power of humans so something as simple as you know creating a channel like Ask Devon Reviewers and being able to go through here and making" aria-label="回原文"></button>。通过这种「人+AI」的制衡机制，让所有人都能安全地交付。

### 需要制衡，但绝不能放任所有人各自为战

工具已经赋予了所有人极强的交付能力，那组织该怎么管理协作？这正是下一个关键话题。Jiaona Zhang 强调，必须对工作实行「双轨制」管理 <button class="pd-ts" data-t="37:50" data-who="Jiaona Zhang" data-en="right level of collaboration on bigger features Yeah the same way we have this captain's model I think about a framework where we call it two tracks so there's one track which is much smaller if you have something" aria-label="回原文"></button>：

对于改动较小、逻辑独立的功能，直接让「船长」端到端搞定，打破传统的瀑布流式交接（PM 扔给设计，设计再扔给开发）<button class="pd-ts" data-t="38:25" data-who="Jiaona Zhang" data-en="are good you by the way you are responsible for end-to-end testing of your features I think that's actually really positive the number of times we're in a waterfall" aria-label="回原文"></button>，这才是真正的速度。

但对于会改变核心交互逻辑的系统性大改，必须强制走严格的「产品评审」和「架构评审」<button class="pd-ts" data-t="39:39" data-who="Jiaona Zhang" data-en="It's the whole user interaction. And as a result, we say, look, we do want to do a product review for that. We want to make sure that we talk about," aria-label="回原文"></button>。她强烈抨击了当下许多所谓「AI 原生公司」的误区：认为有了 AI 就不需要规划、路线图全消失。她指出，如果所有人朝不同方向狂奔，即便局部跑得再快，也无法实现全局最优 <button class="pd-ts" data-t="40:14" data-who="Jiaona Zhang" data-en="you're not really going to get anywhere. And I see a lot of great local maximizations, but sometimes it's really hard to get to the global max," aria-label="回原文"></button>。清晰的策略依然是行动的底线。

## PM 的未来：越资深、团队越小

工作方式变了，人的结构自然也要变。节目的最后探讨了产品经理（PM）这个岗位的未来。Jiaona Zhang 抛出了一个让许多人焦虑的判断：**产品团队不是在扩招，而是在急剧缩小。**

她曾管理过几百人的庞大团队，但在 Laurel，她只有 5 个 PM 和 4 个设计师，且完全没有扩招计划 <button class="pd-ts" data-t="57:30" data-who="Jiaona Zhang" data-en="I think so yeah I mean I've had hundreds of people and today I have five PMs and four designers and there isn't a real reason to grow that because again like when" aria-label="回原文"></button>。因为多一个人就多一分沟通和协调的额外开销，而 AI 工具已经让一个优秀的人能抵过去一个军团。

她将 AI 使用能力分为四个层级 <button class="pd-ts" data-t="59:06" data-who="Jiaona Zhang" data-en="like if you really peek under the hoods you're like actually I think you're what I call like level one and maybe I'll just take a moment and talk about the levels for" aria-label="回原文"></button>：第一级是把 AI 当搜索引擎聊天（如直接问 ChatGPT）；第二级是开始自动化零散的工作流；第三级是用 AI 构建内部应用；最高第四级是构建能交付给客户的共享应用（真正贯穿产品生命周期）。目前大多数人和公司依然停留在第一级。

在招聘时，她甚至不做标准笔试，而是直接让候选人共享屏幕，展示他们真实的 AI 工作流 <button class="pd-ts" data-t="58:51" data-who="Jiaona Zhang" data-en="function not just product or design or so you know so and so forth um is I do ask people to screen share and what I found is it is so easy to say hey we are you know" aria-label="回原文"></button>。以此来过滤掉那些只会口嗨、实则仍用传统方式工作的人。

对于行业里普遍存在的「AI 会淘汰初级 PM」的恐慌，她的回答非常直接：真正懂客户、有判断力、且无畏拥抱 AI 的顶尖 PM 会获得前所未有的杠杆，变得比以往任何时候都更有价值；而缺乏这些特质的平庸者，确实会面临淘汰 <button class="pd-ts" data-t="61:32" data-who="Jiaona Zhang" data-en="fear and destruction can you unpack that for us I think it's because 1PM can do so much more than ever before, but there aren't that many of them who are that skilled," aria-label="回原文"></button>。她把这些顶尖人才称为「编排者」——既有全局视野，又能俯身落地执行 <button class="pd-ts" data-t="62:19" data-who="Jiaona Zhang" data-en="workflow and agent around that. So I think it's really finding who I call the orchestrators, the people who are big picture in terms of their thinking but down to the detail in" aria-label="回原文"></button>。团队不需要一大堆人，只需要几个身经百战的「编排者」即可。

## 本集带走

1. **公司操作系统 = 共享最佳实践的技能库**：要解决「1% 的 AI 狂人 vs 99% 不知所措的员工」这个困局，别只停留在丢给员工几个工具。必须把组织的隐性知识梳理成文档，转化为 AI 可调用的「技能」，并在员工最习惯的工作流中（如日历、邮件）即时推送给他们。
2. **非技术人员写代码将成为常态**：传统「PM-设计-工程」的流水线交接正在瓦解。当 AI 智能体能承担大部分编码时，谁最懂客户和业务场景，谁就应该当「船长」端到端负责交付。工程师应聚焦于高风险的架构和数据底线，而非包揽所有需求。
3. **产品团队会越来越小，但门槛越来越高**：AI 大幅消解了庞大的团队沟通成本，一个人加一群智能体就能干一个团队的活。未来的高薪 PM 必须同时具备深刻的业务判断力、贴近客户的共情力，以及运用 AI 亲自动手构建产品的执行力。只会写传统需求文档的中间层将失去生存空间。

<div class="pd-sec">全部金句 <span>7 条(中英对照,已过机器闸门)</span></div>

> 我认为这是公司最挣扎的事情，也就是你有这些人，他们是这 1% 的 AI 用户。他们在修补他们的工作流程，他们高度 AI 化，然后你有你知道组织中其余 90% 到 99% 的人不确定该什么时候使用什么。  
> *I think that's the biggest thing that companies struggle with, which is you got these people who are these 1% AI users. they're tinkering with their workflows they're highly AI pilled and then you have the you know 90 to 99 percent of the rest of the organization who isn't sure what to use when*  
> —— Jiaona Zhang · [05:38] ^q1

> 如果每个人都在朝不同的方向奔跑，即使你跑得非常快，你也不会真的到达任何地方。  
> *if everyone's running in different directions, even if you're running incredibly fast, you're not really going to get anywhere.*  
> —— Jiaona Zhang · [40:08] ^q2

> 我想是的，是的，我的意思是，我曾经手下有几百人，而今天我有 5 个 PM 和 4 个设计师，并且没有真正的理由去增加人数，因为就像当你增加更多人，你就增加了更多协调成本  
> *I think so yeah I mean I've had hundreds of people and today I have five PMs and four designers and there isn't a real reason to grow that because again like when you add more people you add more coordination costs*  
> —— Jiaona Zhang · [57:25] ^q3

> 我认为这是因为 1 个 PM 可以做比以往任何时候多得多的事情，但没有那么多有这种技能的人，有那种判断力的人，是 AI 化的人，无畏地经历所有这些环节的人  
> *I think it's because 1PM can do so much more than ever before, but there aren't that many of them who are that skilled, that have that judgment, who are AI-pilled, who fearlessly are going through all of these pieces*  
> —— Jiaona Zhang · [61:32] ^q4

> 我们在这里正在处理的空状态，最难做对的部分绝对不是工程，最难做对的部分甚至不是设计，而是内容  
> *The empty state that we're working on here it's the hardest part to get right is definitely not the engineering the hardest part to get right is not even the design it's the content*  
> —— Jiaona Zhang · [34:39] ^q5

> 所以我认为这真的在于寻找我称之为编排者的人，那些在思维上有大局观但在执行上落实到细节的人。  
> *So I think it's really finding who I call the orchestrators, the people who are big picture in terms of their thinking but down to the detail in terms of their execution.*  
> —— Jiaona Zhang · [62:19] ^q6

> 很多时候当你说这是每个人的责任时，那就是没有任何人的责任，所以我们在 Laurel 所做的是我们实际上有一个 AI 运营团队  
> *a lot of times when you say it's everyone's responsibility it's no one's responsibility and so what we have at Laurel is we actually have an AI operations team*  
> —— Jiaona Zhang · [50:07] ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「产品方法」挖下去**

- [[2026-05-03-lennys-why-cultivating-agency-matters-more|对话 Notion 产品负责人 Max:AI 时代的产品方法论与人的主观能动性]] —— 同公司:GitHub · 同概念:智能体 (agent)
- [[2025-11-20-lennys-slack-founder-stewart-butterfield|把自家产品骂成「一坨狗屎」：Stewart Butterfield 的产品哲学]] —— 同公司:Slack
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|iPod之父Tony Fadell：反直觉的产品课]] —— 同概念:智能体 (agent)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-03-latent-space-satya-2026|Satya Nadella 谈 AI 时代平台逻辑:私有评估是最大 IP]] —— 同公司:GitHub · 同概念:智能体 (agent)
- [[2026-07-09-pg-pm-guide-ai-design|用 AI 武装技术型 PM：Codex 工作流全解析]] —— 同嘉宾:Akash · 同概念:智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得]] —— 同公司:Slack · 同概念:智能体 (agent)

</div>
</div>

*本集关键词:AI 原生公司 · 公司操作系统 · 非工程师写代码 · PM 角色演变 · 智能体自动化*

<script>
(function(){
  function move(){
    var side=document.querySelector('.right.sidebar'); if(!side) return;
    var box=null;
    var all=document.querySelectorAll('article blockquote[data-callout]');
    for(var i=0;i<all.length;i++){
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
    ['.search','.readermode'].forEach(function(sel){ grab(sel,acts); });
    var side=document.querySelector('.right.sidebar');
    if(side){
      var slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      grab('.darkmode', slot);
    }
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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); }
  document.addEventListener('nav', all);
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

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
