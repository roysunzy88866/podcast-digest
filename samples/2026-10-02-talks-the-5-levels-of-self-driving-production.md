---
title: "AI SRE 与自动驾驶式生产:Traversal 如何替财富 500 强修故障"
podcast: 精选演讲
date: 2026-10-03
source_url: undefined
duration: "18:14"
type: episode
cover: "#64748b"
description: Traversal 产品经理 Eric 讲解 AI 站点可靠性工程：为什么编码智能体越多，故障排查越痛，以及如何让生产环境“自动驾驶”。
guests: ["[[Eric Schwartz]]"]
companies: ["[[Traversal]]", "[[ServiceNow]]", "[[American Express]]", "[[Pepsi]]"]
concepts: ["[[事故响应中的 AI]]", "[[可观测性]]", "[[自动驾驶式生产]]", "[[因果机器学习]]", "[[生产世界模型]]", "[[因果搜索引擎]]", "[[告警智能]]", "[[AI SRE]]", "[[故障排查]]", "[[编码智能体]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-02-talks-the-5-levels-of-self-driving-production#post","headline":"AI SRE 与自动驾驶式生产:Traversal 如何替财富 500 强修故障","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-02-talks-the-5-levels-of-self-driving-production","mainEntityOfPage":"https://talk.solomind.cc/2026-10-02-talks-the-5-levels-of-self-driving-production","description":"Traversal 产品经理 Eric 讲解 AI 站点可靠性工程：为什么编码智能体越多，故障排查越痛，以及如何让生产环境“自动驾驶”。","datePublished":"2026-10-03","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Eric Schwartz"},{"@type":"Organization","name":"Traversal"},{"@type":"Organization","name":"ServiceNow"},{"@type":"Organization","name":"American Express"},{"@type":"Organization","name":"Pepsi"},{"@type":"Thing","name":"事故响应中的 AI (root cause analysis)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"自动驾驶式生产 (self-driving production)"},{"@type":"Thing","name":"因果机器学习 (causal machine learning)"},{"@type":"Thing","name":"生产世界模型 (production world model)"},{"@type":"Thing","name":"因果搜索引擎 (causal search engine)"},{"@type":"Thing","name":"告警智能 (Alert Intelligence)"},{"@type":"Thing","name":"AI SRE"},{"@type":"Thing","name":"故障排查 (troubleshooting)"},{"@type":"Thing","name":"编码智能体 (coding agents)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AI SRE 与自动驾驶式生产:Traversal 如何替财富 500 强修故障","item":"https://talk.solomind.cc/2026-10-02-talks-the-5-levels-of-self-driving-production"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI SRE 与自动驾驶式生产:Traversal 如何替财富 500 强修故障</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI SRE 与自动驾驶式生产:Traversal 如何替财富 500 强修故障

<div class="pd-byl"><b>Eric Schwartz</b> · Traversal 产品经理 · 2026-10-03</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-02-talks-the-5-levels-of-self-driving-production.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">人们对被推入生产的代码的理解却更少了。</div><div class="a">— Eric Schwartz <button class="pd-ts" data-t="02:11" data-who="Eric Schwartz" data-en="People have less understanding of the code that's being pushed into production." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Eric Schwartz]]
>
> **公司** [[Traversal]] · [[ServiceNow]] · [[American Express]] · [[Pepsi]]
>
> **概念** [[事故响应中的 AI]] · [[可观测性]] · [[自动驾驶式生产]] · [[因果机器学习]] · [[生产世界模型]] · [[因果搜索引擎]] · [[告警智能]] · [[AI SRE]] · [[故障排查]] · [[编码智能体]]

这一集聊的是一个刚被 AI 放大、又正被 AI 反过来解决的问题：生产环境的[[故障排查|故障排查]]。说话的人是 Eric,[[Traversal|Traversal]] 的产品经理，在加入 Traversal 之前他在 [[ServiceNow|ServiceNow]] 做[[可观测性|可观测性]]产品好几年 <button class="pd-ts" data-t="00:15" data-who="Eric" data-en="My name's Eric. I'm a product manager at Traversal. And today we're going to talk about self-driving production." aria-label="回原文"></button><button class="pd-ts" data-t="03:12" data-who="Eric" data-en="And so what are we supposed to do about it? There are all kinds of great observability tools, tools like Datadog, Elastic, Splunk, ServiceNow, where I worked for several years before joining Traversal." aria-label="回原文"></button>。

他抛出的核心观察是：软件工程可以分成三块——系统设计、开发、故障排查 <button class="pd-ts" data-t="01:06" data-who="Eric" data-en="So I guess to start, some quick context on kind of the different phases of software engineering. So I'm sure you're all familiar, but at a high level, you could think about software engineering as kind of three buckets." aria-label="回原文"></button>。[[编码智能体|编码智能体]]把中间那块「开发」压缩了，开发快了很多、团队产出多了 10 倍；但两端没有跟着受益——企业实际看到的是，越来越多时间被拖进故障排查里，因为写出的代码多得多、而人对被推入生产的代码的理解却更少了 <button class="pd-ts" data-t="02:00" data-who="Eric" data-en="The hope is that you spend more time on the design part thinking creatively about what it is that you want to build. But what we actually see with the enterprises that we work with is that more and more time is being spent on troubleshooting." aria-label="回原文"></button>。

数据也印证这一点：企业每年为此花费高达 4000 亿美元，40% 的高管说这是团队面临的问题，工程师平均每周在值守时仅排障就要损失 7 个以上小时 <button class="pd-ts" data-t="02:34" data-who="Eric" data-en="This is a big problem. By some accounts, enterprises are spending upwards of $400 billion a year. 40% of executives say that this is a problem that their teams face." aria-label="回原文"></button>。像 Claude Code、Codex、Cursor 这些工具「非常出色，真的很出色，但它们会带来更多代码和更多复杂性」<button class="pd-ts" data-t="02:51" data-who="Eric" data-en="And on average, engineers are losing seven plus hours each week, just troubleshooting when they're on call. And this is going to become an increasing issue that we'll all hear more about, that we'll all experience more over time, as tools like Claude Code and Codex and Cursor, which are fantastic, they are fantastic, but they result in more code and more complexity." aria-label="回原文"></button>。

那现有的可观测性工具(如 Datadog、Elastic、Splunk、ServiceNow)为什么不够？Eric 的答案很直接：它们只会告诉你什么坏了、指出可能相关的东西，「但你没告诉我为什么，也没告诉我该怎么处理」——这是他在 ServiceNow 做可观测性产品时从客户那里反复听到的话 <button class="pd-ts" data-t="03:35" data-who="Eric" data-en="They'll point out things that are maybe correlated, but they won't tell you the root cause of the issue. And when I worked on observability products at ServiceNow, this was something I heard time and again from the customers that I served, which was like, you're telling me what's broken, you're not telling me why, and you're not telling me what to do about it." aria-label="回原文"></button>。再多的仪表盘也帮团队跟不上环境里不断增加的复杂性 <button class="pd-ts" data-t="03:47" data-who="Eric" data-en="And when I worked on observability products at ServiceNow, this was something I heard time and again from the customers that I served, which was like, you're telling me what's broken, you're not telling me why, and you're not telling me what to do about it." aria-label="回原文"></button>。

## 为什么这事这么难：因果，不是观测

一个结账 API 挂了，真正的根因可能在五到十跳之外——要跨过几十个服务和 PB 级数据才能找到 <button class="pd-ts" data-t="04:32" data-who="Eric" data-en="What makes this so challenging? In this particular example that we have on the screen, which was based on something we saw with one of our customers, if a checkout API is failing, you might need to make five to 10 hops across" aria-label="回原文"></button>。小公司也许有一位了解全栈、掌握全部隐性知识的资深 SRE,但财富 50 强企业里没有任何一位工程师拥有全部上下文，于是结果是：作战室里拉进 50 个工程师、花无数小时调试，因为每人只握着自己那一小块 <button class="pd-ts" data-t="05:02" data-who="Eric" data-en="And so in a very small contained environment, perhaps there's a single seasoned SRE at your company that knows the full stack and can debug everything and has all the tribal knowledge to sift through all your data." aria-label="回原文"></button>。人或「人 + Claude Code」都很难获得从「结账 API 挂了」跳到「五跳外的过期 TLS 证书」所需的完整上下文 <button class="pd-ts" data-t="05:25" data-who="Eric" data-en="No one has kind of the full scope and breadth of this. And so it's really challenging for a human or a human paired with Claude Code to get kind of the full spectrum of context needed to jump from a checkout API is failing over here, five hops away to the expired TLS certificate that maybe caused the issue." aria-label="回原文"></button>。

这正是 Traversal 创始人创业的动因，也是这家公司的核心信念：**[[事故响应中的 AI|根因分析]]不是一个可观测性问题，它是一个因果问题** <button class="pd-ts" data-t="05:52" data-who="Eric" data-en="And so that's kind of what motivated our founders to launch Traversal. Fundamentally, the belief that we have at Traversal is that root cause analysis is not an observability problem." aria-label="回原文"></button>。四位创始人，三位来自学术界、一位来自量化金融，几十年都在做[[因果机器学习|因果机器学习]]——如何发现因果关系——并把它应用到了这个问题上 <button class="pd-ts" data-t="06:02" data-who="Eric" data-en="It's a causal problem. And so that's why our four founders, three of them come from academia, one comes from QuantFinance, and they've dedicated decades of their lives towards causal machine learning, which is how do you find cause and effect, and have applied it to this problem, because it's a massive one that enterprises are really struggling with." aria-label="回原文"></button>。

## 「自动驾驶式生产」：给运维分等级

Traversal 在做的事，Eric 称为[[自动驾驶式生产|自动驾驶式生产]](self-driving production):一个闭环系统——故障发生时，AI 找到问题、找到根因、提交修复、验证修复完成，全程不打扰你的团队成员，让他们继续专心构建 <button class="pd-ts" data-t="06:39" data-who="Eric" data-en="What we're building at Traversal is the ability for an enterprise to basically have a self-driving production environment. What that means is a closed-loop system where" aria-label="回原文"></button>。像自动驾驶汽车一样，它分成等级 <button class="pd-ts" data-t="07:16" data-who="Eric" data-en="We like to think of it in terms of levels, almost like self-driving cars or autonomous driving. We think about it in the same frame. So level zero is where most companies are today, where everything is fully manual." aria-label="回原文"></button>:

- **零级**：今天大多数公司所在——全手动，拉一群人进 Slack 作战室或 Zoom 会议，花几小时调试。
- **一级**：有一些规则和自动化(比如用 Claude Code、Cursor、Codex 搭的 loop),但遇到没见过的新情况、没有现成 runbook 时就失效了 <button class="pd-ts" data-t="07:49" data-who="Eric" data-en="And so these might be rule-based automations where you can build out a very structured, specific workflow in response to an alert. Those rule-based automations kind of break down when it's a novel situation." aria-label="回原文"></button>。
- **三级**：有自研智能体，很擅长调试某个特定服务或特定一组告警。
- **四级**：真正的跨越——横跨整个环境：数百个服务、数百个仓库、数千个日志索引。自研一个能应对这种规模的方案相当困难 <button class="pd-ts" data-t="08:24" data-who="Eric" data-en="But really where we see the leap is going from level three to level four, which is cutting across an entire environment. So hundreds of services, like hundreds of repos, thousands of log indexes." aria-label="回原文"></button>。
- **五级**：终极目标——不仅能诊断整个生产环境的问题，还能提交修复并验证修复 <button class="pd-ts" data-t="08:35" data-who="Eric" data-en="It's quite challenging to home grow a solution that can handle that. And level five is kind of the holy grail, which is not only can we diagnose issues across a full production environment for a large enterprise, but also put up the fixes and verify the fixes as well." aria-label="回原文"></button>。

Traversal 声称正在帮财富 500 强企业冲向五级。他们服务的公司包括 [[American Express|American Express]]、[[Pepsi|Pepsi]]、DigitalOcean、Capital One,处理的规模是数万亿条日志、数万亿个 span、数百亿个指标和事件，并对高严重性事件达到 80% 以上的根因命中率 <button class="pd-ts" data-t="08:47" data-who="Eric" data-en="And level five is kind of the holy grail, which is not only can we diagnose issues across a full production environment for a large enterprise, but also put up the fixes and verify the fixes as well." aria-label="回原文"></button>。

## 两个真实用例

**[[告警智能|告警智能]](Pepsi 案例)**。Pepsi 把 Traversal 用在供应链上——确保成品从仓库到卡车再到零售商。

之前他们的团队每周收到成千上万条警报，单个工程师随时可能积压 700 条警报，「你有太多噪音，不知道该看哪里，不知道什么坏了，事情从缝隙中溜走。或者你只是试图跟上节奏然后精疲力竭」<button class="pd-ts" data-t="11:52" data-who="Eric" data-en="And at any given time, a single engineer might have a backlog of 700 alerts. This is kind of a crippling state to be in. Like, you have so much noise that you don't know where to look, you don't know what's broken, and things slip through the cracks." aria-label="回原文"></button>。用上 Traversal 后，工程师拿到的不再是积压的 700 条，而是一份已按优先级排序、且被预先调查过的警报集合——哪些真正值得深挖、哪些告警规则该改、哪些是以后再处理的技术债，都被标记出来 <button class="pd-ts" data-t="12:15" data-who="Eric" data-en="And they use traversal to help parse the signal from the noise of these tens of thousands of alerts. And so now, instead of each engineer having a backlog of 700 alerts, they get a very prioritized and filtered set of" aria-label="回原文"></button>。

**事故根因分析(American Express 案例)**。之前 American Express 一次事故意味着五到十个团队被呼叫、20 到 50 名工程师被卷入，这个例子中花 60 分钟，但可能几小时甚至几天；客户付不了信用卡账单、登不上 App,都是大问题 <button class="pd-ts" data-t="13:09" data-who="Eric" data-en="And this is a case study from our engagement with Annex where I've personally spent a lot of time myself. So before working with traversal, what an incident looked like at American Express is anywhere from five to 10 teams get paged, anywhere from 20 to 50 engineers." aria-label="回原文"></button>。

现在 Traversal 是每一起事故的第一响应者：事故一被宣布，它就被派出，三分钟内在管理事故的 Slack 频道里发布一份非常详细的根因分析，还能往 ServiceNow 工单里发更新 <button class="pd-ts" data-t="13:45" data-who="Eric" data-en="And so now Traversal is the first responder to every single incident that's created at American Express. And so what that looks like is the second the bridge is declared, that's the term they use internally, the second the incident is declared, Traversal is dispatched." aria-label="回原文"></button>。有了这份初步分析，不再需要呼叫五个团队和几十个工程师——要么没人被叫，要么只叫一两个团队来验证发现。这个案例省下了 50 多名工程师，「当事故发生在半夜时，这一点尤其受到感激——现在 53 名工程师可以睡个好觉了」<button class="pd-ts" data-t="14:23" data-who="Eric" data-en="And either no teams get paged or maybe you page the one or two teams just to verify the findings that Traversal posted. And so we save, in this case, like 50-plus engineers from the time and headache of being paged into this incident." aria-label="回原文"></button>。

## 怎么判断一家 AI SRE 是不是真行

Eric 最后给了五个关键问题(他说这个领域很热、声称在解决问题的公司很多)<button class="pd-ts" data-t="14:48" data-who="Eric" data-en="But like I mentioned, there's a bunch of others. Maybe in the last couple of minutes, I'll just highlight AI site reliability engineering is a very hot space. If you're familiar, you've probably heard of a lot of companies in the space or claiming that they're solving these problems." aria-label="回原文"></button>:

1. **它能看到你所有的生产数据吗？** 只给它一个切片、理解有空白，就很难得出详细的根因 <button class="pd-ts" data-t="15:10" data-who="Eric" data-en="We think that there's a few really key questions you should be asking that are critical to getting this right. So the first is, can your AI SRE see all of your production data?" aria-label="回原文"></button>。
2. **它能搜索这些数据吗？** 通常是 PB 级、数千亿条日志，还必须不把成本炸掉、不搞垮可观测性基础设施——对财富 100 强企业来说，在规模上做到这点绝非小事 <button class="pd-ts" data-t="15:24" data-who="Eric" data-en="If you're only giving it a slice or if it has gaps in its understanding, it's going to be very hard to get to a very detailed root cause. The second is, can it search through this data?" aria-label="回原文"></button>。
3. **它能梳理出数据中所有实体之间的关系吗？** 就算读完了所有数据，不知道怎么用、迷失其中，基本没价值 <button class="pd-ts" data-t="15:44" data-who="Eric" data-en="This is really not trivial to do at scale for a Fortune 100 enterprise. The third is, can it map out the relationships between all of these entities and your data?" aria-label="回原文"></button>。
4. **它能随时间自主变聪明吗？** 而不需要你投入工程资源维护一堆 markdown 文件、或养一批前置部署工程师来维护系统知识 <button class="pd-ts" data-t="15:57" data-who="Eric" data-en="Even if you're able to ingest and read through all this data, if you don't know what to do with it and if you're lost, it's kind of worthless. And then four, does it get better and smarter over time autonomously without having to dedicate engineering resources to maintaining a bunch of markdown files or having a bunch of forward deployed engineers taking up your team's time to maintain the system knowledge?" aria-label="回原文"></button>。
5. **它能多跳吗？** 能在几分钟内找到远离初始症状的非显而易见的根因吗？「超过五分钟，你就基本上迷失了方向——你耗尽了值班团队的耐心，人们就会退回到自己的习惯做法上」<button class="pd-ts" data-t="16:17" data-who="Eric" data-en="And finally, can it make multiple hops? Can it find the non-trivial, non-obvious root cause that's far away from the initial symptom in a matter of minutes? What we've seen is like anything more than five minutes and you've kind of lost the plot." aria-label="回原文"></button>。

Traversal 自己的答案分两层：底层是摄取并映射所有接入的数据、在不增加成本的前提下分析；中间是所谓的**[[生产世界模型|生产世界模型]]**——映射出所有数据之间的关系；再往上才是打包成用例。加上给智能体用来搜索已映射数据的**[[因果搜索引擎|因果搜索引擎]]**，他们相信这两件核心武器能把财富 500 强带到五级自主、完全自动驾驶的生产环境 <button class="pd-ts" data-t="17:38" data-who="Eric" data-en="And so that's a bit about what we've been building at Traversal, what we're delivering at Traversal. The core pieces, like I mentioned, are the production world model, so how we map and make sense of all the data that we integrate with, and then what we refer to as our causal search engine, basically the harness and mechanism that we give our agents to search through all of that data that we've mapped out." aria-label="回原文"></button>。

## 本集带走

- **编码智能体的副作用在运维端**：开发提速 10 倍的另一面，是更多代码、更少理解、更多故障——企业每年为此烧掉约 4000 亿美元，工程师每周平均损失 7 小时以上在排障上。
- **可观测性工具的天花板**：Datadog 这类工具告诉你「什么坏了」，但不会告诉你「为什么」和「怎么办」；根因分析本质是因果问题，不是观测问题。
- **给运维自动化分级**：零级全手动 → 一级规则自动化(新情况就失效)→ 三级服务专属智能体 → 四级横跨数百个服务 → 五级诊断 + 修复 + 验证全闭环。
- **[[AI SRE|AI SRE]] 的验收清单**：全量数据可见、能在 PB 级数据上低成本搜索、能建实体关系、能自主进化、能在五分钟内多跳找到远离症状的根因。
- **真实验效**：American Express 每起事故由 Traversal 三分钟内出根因分析，从 20-50 名工程师卷入降到零或一两个团队验证即可;Pepsi 把单工程师 700 条警报积压变成一份预调查、按优先级排好的短清单。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">人们对被推入生产的代码的理解却更少了。</span>  
> *People have less understanding of the code that's being pushed into production.*  
> <span class="qm">—— Eric Schwartz · [02:11]</span> ^q1

> <span class="qz">像 Claude Code、Codex 和 Cursor 这样的工具非常出色,真的很出色,但它们会带来更多代码和更多复杂性。</span>  
> *Tools like Claude Code and Codex and Cursor, which are fantastic, they are fantastic, but they result in more code and more complexity.*  
> <span class="qm">—— Eric Schwartz · [02:58]</span> ^q2

> <span class="qz">从根本上说,我们在 Traversal 的信念是:根因分析不是一个可观测性问题。</span>  
> *Fundamentally, the belief that we have at Traversal is that root cause analysis is not an observability problem.*  
> <span class="qm">—— Eric Schwartz · [05:52]</span> ^q3

> <span class="qz">所以现在 Traversal 是 American Express 每一起被创建的事故的第一响应者。</span>  
> *And so now Traversal is the first responder to every single incident that's created at American Express.*  
> <span class="qm">—— Eric Schwartz · [13:38]</span> ^q4

> <span class="qz">就像是,现在 53 名工程师可以睡个好觉了。</span>  
> *Like this is a good night of sleep that 53 engineers can have now.*  
> <span class="qm">—— Eric Schwartz · [14:36]</span> ^q5

> <span class="qz">你耗尽了值班团队的耐心,人们就会退回到自己的习惯做法上。</span>  
> *You've lost the patience of the on-call team and people will fall back onto their own habits.*  
> <span class="qm">—— Eric Schwartz · [16:29]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-24-talks-inside-the-agent-engine-a-langchain-and|当系统出故障时，让 AI 代替作战室里的 50 个人——Traversal 谈如何造 AI SRE]]<span class="pd-rz">同公司:Traversal · 同概念:可观测性 (observability)、生产世界模型 (production world model)、SRE</span>
- [[2026-08-13-talks-when-to-build-your-own-agent-harness-har|拥有你自己的智能：Harness、Eval 与数据飞轮]]<span class="pd-rz">同概念:可观测性 (observability)、Claude Code、Codex</span>
- [[2026-09-06-lennys-why-companies-are-becoming-a-series|a16z 消费投资合伙人 Anish Acharya:别怕被 AI 甩下，该怕的是野心太小]]<span class="pd-rz">同概念:编码智能体 (coding agents)、Codex、Cursor</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同公司:Anthropic · 同概念:可观测性 (observability)、根因分析 (root cause analysis)、SRE</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同公司:Datadog · 同概念:可观测性 (observability)</span>
- [[2026-07-27-twentyvc-20vc-leading-anthropic-s-first-ever-roun|主导投资 Anthropic 的人：风投的游戏规则已经彻底变了]]<span class="pd-rz">同公司:Anthropic · 同概念:可观测性 (observability)</span>

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
