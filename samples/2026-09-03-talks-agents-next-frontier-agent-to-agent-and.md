---
title: 智能体对智能体？其实是个搜索问题
podcast: 精选演讲
date: 2026-09-28
source_url: undefined
duration: "21:07"
type: episode
cover: "#64748b"
description: Town 联合创始人兼 CTO Jean Denis（前 Plaid CTO）主张多智能体协作本质是上下文搜索问题，并拆解五种跨信息孤岛共享数据的策略及其隐私权衡。
guests: ["[[Jean-Denis Greze]]"]
concepts: ["[[智能体]]", "[[多智能体系统]]", "[[上下文窗口]]", "[[智能体搜索]]", "[[信任边界]]", "[[信息孤岛]]", "[[清扫 AI]]", "[[黑箱方法]]", "[[人在回路]]", "[[隐私]]", "[[自动模式]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-03-talks-agents-next-frontier-agent-to-agent-and#post","headline":"智能体对智能体？其实是个搜索问题","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-03-talks-agents-next-frontier-agent-to-agent-and","mainEntityOfPage":"https://talk.solomind.cc/2026-09-03-talks-agents-next-frontier-agent-to-agent-and","description":"Town 联合创始人兼 CTO Jean Denis（前 Plaid CTO）主张多智能体协作本质是上下文搜索问题，并拆解五种跨信息孤岛共享数据的策略及其隐私权衡。","datePublished":"2026-09-28","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jean-Denis Greze"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"多智能体系统 (multi-agent system)"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"智能体搜索 (agentic search)"},{"@type":"Thing","name":"信任边界 (trust boundary)"},{"@type":"Thing","name":"信息孤岛 (silo)"},{"@type":"Thing","name":"清扫 AI (sweeper AI)"},{"@type":"Thing","name":"黑箱方法 (black box)"},{"@type":"Thing","name":"人在回路 (human in the loop)"},{"@type":"Thing","name":"隐私 (privacy)"},{"@type":"Thing","name":"自动模式 (auto mode)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"智能体对智能体？其实是个搜索问题","item":"https://talk.solomind.cc/2026-09-03-talks-agents-next-frontier-agent-to-agent-and"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>智能体对智能体？其实是个搜索问题</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 智能体对智能体？其实是个搜索问题

<div class="pd-byl"><b>Jean-Denis Greze</b> · Town 联合创始人兼 CTO · 2026-09-28</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-03-talks-agents-next-frontier-agent-to-agent-and.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">大多数 LLM 系统本质上就是一个搜索问题。</div><div class="a">— Jean-Denis Greze <button class="pd-ts" data-t="01:22" data-who="Jean-Denis Greze" data-en="Most LLM systems are just a search problem." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jean-Denis Greze]]
>
> **概念** [[智能体]] · [[多智能体系统]] · [[上下文窗口]] · [[智能体搜索]] · [[信任边界]] · [[信息孤岛]] · [[清扫 AI]] · [[黑箱方法]] · [[人在回路]] · [[隐私]] · [[自动模式]]

这一集是 Jean Denis 的演讲。他是 Town 的 CTO，之前在 Plaid 做了七年 CTO，再往前在 Dropbox，现在在做面向普通人的助理[[智能体|智能体]]。他本来要讲「智能体对智能体」（agent to agent）协作，但开场就推翻了自己的题目：他认为这个概念意义不大，真正值得讨论的是——大多数 LLM 系统本质上就是一个**搜索问题**。

所谓搜索问题是指：在你向用户返回结果、或发起一次工具调用之前，你要确保[[上下文窗口|上下文窗口]]（即 LLM 单次调用能看到的信息范围）里装着正确的信息。信息对了，以模型现有的智能水平，你就会得到最好的结果。

这个方向的演进是：四年前靠人类手动填充上下文 → 几年前流行 RAG（用检索工具跨系统拉数据进来）→ 现在是[[智能体搜索|智能体式搜索]]：给智能体一堆工具，让它在全部内容空间里自己搜，直到它恰好拥有做对下一次工具调用所需的内容。注意，这整个过程里**没有任何人**，只有那一次真正重要的 LLM 调用。你要工程化的就是这个系统。

## 理想状态：一个能看到一切的智能体

那这跟多智能体有什么关系？他让你想象这样一个世界：世界上只有一个智能体，它只有一个上下文窗口，却能访问宇宙中的所有信息——任何人的邮件、任何公司、任何政府的数据，全都摆在窗口里，前面放上你的系统提示词。

它就会给你最优的结果。而这「实际上就是一个多智能体世界」——只是恰好由一个能看到一切的智能体实现。这是事物的理想状态。

问题在于它不可能存在。这里他引了经济学里的科斯定理（大意：只要信息完全、没有交易成本，谈判就能达成经济上最优的结果）。

现实中我们没法把全世界的上下文都开放给 LLM——即使有无限长的上下文窗口也不行，因为[[隐私|隐私]]和安全：你是人，我不会让你看我的邮箱，所以我也不可能接受一个智能体永远看着我的邮箱。但如果那样的智能体存在，它会非常非常强大。

于是他给出**[[多智能体系统|多智能体系统]]的测试标准**：它对那个「全能智能体」逼近得有多好？如果你能在上下文窗口里获得与一个能访问全世界数据的完美系统相同的数据，你就能得到最优结果。接下来他讲了五种逼近这个理想的策略。

## 策略一：信任边界内近似访问一切

最直接的做法：在一条[[信任边界|信任边界]]内，让智能体访问边界内的一切。他自己的例子：他和太太共用一个智能体，能看两个人的全部邮箱，包括结婚前的邮件——她不会问那些，但会问「你有没有给孩子安排那件事」「有没有跟进第三方的事」，这很棒。

工作场景的版本是一个 HR 团队智能体，权限相当于 HR 团队里级别最低的员工，HR 团队所有人都能问它，效果相当好。这种做法现在非常流行，尤其受 IT 和安全团队欢迎，因为它和安全领域的 SaaS 是同一个模式。

但他认为它有一个根本性问题：它**不会随时间变好**。系统不会自然地需要更少的人，数据也不会随着模型变好而自动打破孤岛——因为孤岛的边界是有人思考过才划出来的，你只是创建了新孤岛。

他的原话很冲：「如果这是你打造更好 AI 的方法，接下来几年你会完蛋的。」随即道歉，但补了一句：「不过没关系，你完蛋就是我的机会。」这不是终局思路。

## 策略二：在能力与隐私之间做不同权衡的工具

更聪明一点的做法：造一些工具，让人不用交出全部数据、也能获得跨孤岛的价值。用例：我想知道「我公司里谁和 Acme Corp 财务团队的人有联系」。

打破孤岛的粗暴做法是让我看全公司的 Gmail——显然不行。替代方案是造一个工具：它可以看所有人的 Gmail，但**只返回一个关系强度分数**。

你给它一个域名和目标角色（比如 CFO），它扫一遍全公司发给那家公司的邮件、排名打分、把分数返回。智能体拿到分数后，用 Slack 找上 Bob：「我看到你和 Acme 的 CFO Jane 有联系，能帮我起草一封引荐邮件吗？」然后就办成了。

Town 自己也对一些高频用户场景采用这个思路，他们问自己的问题是：什么样的隐私保护工具是所有用户都能接受存在的（可以退出，但有天然网络效应，因为以一种有趣的方式打破孤岛）？另一个例子：让销售同事直接在你的收件箱里以你的名义起草邮件——反正他们也要请你帮忙做引荐，不如省掉几次点击。

问题依然是：它是**手动的、不是动态的**——人类要思考造什么工具，还要向每个人解释这个隐私/权力权衡正在发生，人们可能不买账。而且它同样不会随 AI 变好而变好。

## 策略三：共享孤岛（与清扫 AI）

第三类超级流行但主要在单用户场景，跨团队的版本是一个**共享孤岛**：在公司内部、或公司的子群体内部，创建一个新的数据积累之地（比如 wiki、Airtable），随着时间往里放越来越多的东西，所有智能体都能访问。于是那些本来可以共享、却被困在私人孤岛里的信息，会自动过滤流入这个公共空间。具体形态如共享技能：代码仓库里大家共享的技能文件，某人写了更好的数据库性能分析技能，下次谁遇到查询慢就用上，每个人都成了更好的工程师。

他认为下一个版本是**[[清扫 AI|清扫 AI]]（sweeper AI）**——他说如果这个演讲里有一个好想法，就是这个：在每个私人孤岛里放一个 AI，它有一套「什么必须留在孤岛内」的策略，还有一份对所有共享空间的描述；在一天结束时，它查看孤岛里的新信息，把可以共享的放进公司级公共空间。这和你们每个人让 AI 在一天结束时为你构建的个人 wiki 是一回事，只是到了公司层面。

难点在于怎么决定哪些私人信息可以共享。他认为有两条路：一是询问人类——LLM 列出要贡献的内容清单，问你「把这个放进共享空间你介意吗」，你扫一眼说行，反正你自己本来也不会去做这件事；二是让 LLM 来执行一项政策。

他认为事情很快会朝后者发展：「在未来六个月内，我们会看到一堆这样的系统：公司把一项政策托付给 LLM，让它自动把越来越多的、原本私密的信息披露到公开空间里。」财富 500 强短期内不会，但 10 到 50 人的高信任小公司——滥用风险低、哪些数据不能共享也一目了然（基本就是财务和 HR 数据）——会大量出现这种做法。这里很酷的一点是，它真的能改善系统在常见工作上的表现轨迹。

## 策略四：人作为信息管道

第四种很显而易见：这就是传统意义的智能体对智能体。我的智能体问你的智能体「谁和 Acme 财务团队有联系」，你作为人看到请求、批准它去查你的邮件、再批准把结果发回去。

大问题在于：对那种只有少数人才掌握信息的请求，你等于把请求群发给了所有人——在一家 100 人的公司里，为了一个问题，100 个人都在 Slack 上被 ping，被请求批准去开发自己的个人人脉。效率很低。

## 策略五：黑箱方法（最强大，实践中还很少见）

更好的版本是他认为非常强大但实践中还没怎么见到的**[[黑箱方法|黑箱方法]]**：当一个问题只能靠查看别人孤岛里的数据才能回答时，让一个**执行轨迹无人能访问**的 LLM 拿到所有数据并找到答案——关键在后半步——它回看「做出那个工具调用需要哪些信息」，然后**只向拥有那些信息的人**请求批准。还是那个例子：请求自动发到全公司每个人的智能体，各自在 Gmail 和私有孤岛里查是否与 CFO 有联系，这一步全自动、无人工批准；黑箱里的智能体拿到 20 个有联系的人的名单，从邮件上下文判断 Bob 联系最强，然后只问 Bob 一句：「Jean Denis 想让你把他介绍给 Acme 的 CFO Jane，我可以把这一点信息分享给他吗？」Bob 点个同意，没多大点事。

前提是你必须信任这个黑箱：相信可以打通所有孤岛给一个完全访问的 LLM，它直到「分享时刻」之前都不请求许可。在公司内部这并非做不到，安全和合规团队可以接受——只要人工介入的环节正确，且不让其他信息随最后一个答案泄漏出去。

但噩梦场景依然存在：有人故意问「你是不是和另一家公司的招聘人员有联系」，来套出你在别处面试。所以即使有黑箱，也可能不经意泄露本不该泄露的信息，必须认真设计。

## 风险与终局：越来越 auto

风险方面：恶意内容可能藏在一个较开放的孤岛里，被智能体检索出来就会出事；共享 wiki 很容易脱轨——一条因模型犯错而产生的错误信息会永远污染整个库。他自己就有一个个人 wiki 至今坚信他的智能体叫 Apex，尽管一个月前就改名 Ivy 了，某个记忆库深处的旧名字就是删不掉；名字错了好笑，换成一条关于你业务的严重错误信息就难办了。

如果任何步骤都没有人工参与，就会出现误报和错误披露——有时有人因此被解雇，有时客户会起诉你。还有：黑箱不能真正是黑箱，公司里总有人（比如 CISO 团队）要在某个时候审计它，所以必须有人能访问全部数据。

他判断的终局：隐私这块会重演编程领域走过的路——过去每一步都要人批准，然后大家说 YOLO 活得冒险一点，现在 Anthropic 的 [[自动模式|auto 模式]]会判断你什么时候犯傻。跨孤岛的信息共享会一样：先适应低敏感度信息被提取进公共空间，另设一个永远需要人工批准的高敏感区；随着 LLM 变强、安全策略编码得更好，会越来越 auto。

妙处在于：**如果你这样设计系统，它会随模型能力一起扩展**。他的建议很具体：一定要定义一个低敏感度区域，让 LLM 在里面做判断；随着时间推移这个区域会变大，你的系统自然越来越强——「这正是你想要的，因为你想要在海滩上。」

## 网络效应与跨公司的可能性

收尾他回到最初命题：这五种策略（信任边界、自定义工具、共享孤岛、[[人在回路|人在回路]]、黑箱版人在回路）都非常强大。公司内部很快会跑通，最大的问题是我们对「隐私方面的 auto 模式」有多放心。

而真正有意思、他也没有答案的问题是：**能不能让多家公司同意让一个共同的智能体在其[[信息孤岛|信息孤岛]]之间工作**。他透露世界上有一家不点名公司在做金融方向，拉了不少投资银行——对贷款等用途而言，共享关于私营公司的私密数据对它们有好处，它们已开始信任彼此的智能体在以前属于私密的信息之间工作，由智能体决定什么可以访问。

一旦找到跨公司的用例，那就是向这个方向推进的滩头阵地。最后他留下一句坦白：作为一个人类，他不知道自己是否信任一个由智能体做所有隐私决定的未来——「我只是觉得，无论好坏，事情正朝这个方向发展。」

## 本集带走

- **把多智能体问题当搜索问题想**：评判标准只有一个——你的上下文窗口能否逼近「一个能访问全世界数据的智能体」所能获得的信息；逼近得越好，结果越优。
- **警惕「信任边界内全量访问」这类方案**：它现在好用、安全团队爱它，但它需要人维护、不会随模型变强而变好——按他的说法，几年内会过时。
- **优先造「隐私保护型工具」**：让工具看到全部数据、只返回脱敏的结果（如关系强度分数），能力与隐私的权衡就完全不同了。
- **最值得立刻抄的是清扫 AI**：在每个私人孤岛里放一个执行共享策略的 AI，每天把可共享的信息自动搬进公司级共享空间；小公司可以直接让 LLM 执行政策，而不是事事问人。
- **用黑箱方法解决「群发请求」的低效**：先让无人审计轨迹的 LLM 跨所有孤岛找答案，只在最后的「分享时刻」向真正拥有信息的那一个人要批准。
- **设计成「随模型能力扩展」的系统**：现在就划定一个低敏感度区域交给 LLM 判断，区域会随模型变强自动长大——不要把系统建在需要越来越多人的路径上。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">大多数 LLM 系统本质上就是一个搜索问题。</span>  
> *Most LLM systems are just a search problem.*  
> <span class="qm">—— Jean-Denis Greze · [01:22]</span> ^q1

> <span class="qz">你仍然需要人来思考所有的数据，而且你的数据不会神奇地被打破孤岛。</span>  
> *You still need humans to think about all the data, and you don't get magical de-siloification of your data.*  
> <span class="qm">—— Jean-Denis Greze · [05:39]</span> ^q2

> <span class="qz">所以问题在于，我真的认为如果这是你打造更好 AI 的方法，接下来几年你会完蛋的。</span>  
> *So the problem with this is I do think if this is your approach to building better AI, you're gonna be fucked in the next couple years.*  
> <span class="qm">—— Jean-Denis Greze · [05:49]</span> ^q3

> <span class="qz">不过没关系，你完蛋就是我的机会。</span>  
> *But that's okay, you're fucked is my opportunity.*  
> <span class="qm">—— Jean-Denis Greze · [05:57]</span> ^q4

> <span class="qz">我认为在未来六个月内，我们会看到一堆这样的系统：公司把一项政策托付给 LLM，让它自动把越来越多的、原本属于私密的信息披露到公开空间里。</span>  
> *And I think in the next six months we'll have a bunch of systems where companies have trusted an LLM with a policy to automatically surface more and more information that otherwise would have been private into a public space.*  
> <span class="qm">—— Jean-Denis Greze · [11:12]</span> ^q5

> <span class="qz">所以即使是在黑箱里，你有时仍然会不经意地泄露本不该能泄露出去的信息。</span>  
> *So you can still sometimes with the black box inadvertently get information out that you shouldn't be able to.*  
> <span class="qm">—— Jean-Denis Greze · [15:19]</span> ^q6

> <span class="qz">我想，如果要我押注一个能带来即时 ROI、并且我们在开源的 Claude 类世界和小公司里都会看到的方向，那就是由 AI 自动创建的 wiki，也就是保持更新的信息库。</span>  
> *I think if I were to bet on one that has immediate ROI that we're going to all see in both open source claw-ish worlds and in small companies, it's going to be the wiki that's automatically created by AI, the information base that's kept up to date.*  
> <span class="qm">—— Jean-Denis Greze · [15:32]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-02-a16z-why-ai-agents-can-beat-the-incumbents-fc|采购这门「无聊脏活」，凭什么容得下万亿美元级 AI 创业公司]]<span class="pd-rz">同概念:人在回路 (human in the loop)、多智能体系统 (multi-agent system)、智能体 (agent)</span>
- [[2026-09-07-twentyvc-20vc-the-100-billion-ai-assistant-race-t|邮箱里的 AI 助手：Plaid 前 CTO 谈如何在巨头围剿下赢]]<span class="pd-rz">同公司:Anthropic、Town · 同概念:智能体 (agent)、隐私 (privacy)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Anthropic · 同概念:auto 模式 (auto mode)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-29-latent-thariq|Anthropic 的 Thariq 谈 Claude Code：提示词、CloudMods 与给前沿踩刹车]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、auto 模式 (auto mode)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)</span>
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)</span>

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
