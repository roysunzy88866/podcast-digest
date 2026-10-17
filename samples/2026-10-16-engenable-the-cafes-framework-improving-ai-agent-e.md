---
title: AI 干不好活，问题往往不在模型，而在你给它的“上下文”
podcast: Engineering Enablement (DX)
date: 2026-10-17
source_url: undefined
duration: "39:09"
type: episode
cover: "#64748b"
image: "/covers/2026-10-16-engenable-the-cafes-framework-improving-ai-agent-e.jpg"
description: DX、Capital One、GitHub 等机构的研究者聊新论文 CAFES：为什么上下文质量成了 AI 智能体的最大瓶颈。
host: "[[Max Canet-Alexander]]"
cohosts: ["[[Brian Houck]]", "[[Margaret Ann]]", "[[Irini]]"]
companies: ["[[DX]]", "[[Capital One]]", "[[GitHub]]", "[[Pocket OS]]"]
concepts: ["[[上下文]]", "[[CAFES]]", "[[智能体]]", "[[编码智能体]]", "[[幻觉]]", "[[提示词注入]]", "[[上下文窗口]]", "[[开发者体验]]", "[[三重债]]", "[[代码审查]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-10-16-engenable-the-cafes-framework-improving-ai-agent-e.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-16-engenable-the-cafes-framework-improving-ai-agent-e#post","headline":"AI 干不好活，问题往往不在模型，而在你给它的“上下文”","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-16-engenable-the-cafes-framework-improving-ai-agent-e","mainEntityOfPage":"https://talk.solomind.cc/2026-10-16-engenable-the-cafes-framework-improving-ai-agent-e","description":"DX、Capital One、GitHub 等机构的研究者聊新论文 CAFES：为什么上下文质量成了 AI 智能体的最大瓶颈。","datePublished":"2026-10-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-10-16-engenable-the-cafes-framework-improving-ai-agent-e.jpg","about":[{"@type":"Person","name":"Max Canet-Alexander"},{"@type":"Person","name":"Brian Houck"},{"@type":"Person","name":"Margaret Ann"},{"@type":"Person","name":"Irini"},{"@type":"Organization","name":"DX"},{"@type":"Organization","name":"Capital One"},{"@type":"Organization","name":"GitHub"},{"@type":"Organization","name":"Pocket OS"},{"@type":"Thing","name":"上下文 (context)"},{"@type":"Thing","name":"CAFES"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"编码智能体 (coding agent)"},{"@type":"Thing","name":"幻觉 (hallucination)"},{"@type":"Thing","name":"提示词注入 (prompt injection)"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"开发者体验 (developer experience)"},{"@type":"Thing","name":"三重债 (triple debt)"},{"@type":"Thing","name":"代码审查 (code review)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AI 干不好活，问题往往不在模型，而在你给它的“上下文”","item":"https://talk.solomind.cc/2026-10-16-engenable-the-cafes-framework-improving-ai-agent-e"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 干不好活，问题往往不在模型，而在你给它的“上下文”</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 干不好活，问题往往不在模型，而在你给它的“上下文”

<div class="pd-byl"><b>Max Canet-Alexander</b> · Capital One 首席软件工程师 · 2026-10-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-16-engenable-the-cafes-framework-improving-ai-agent-e.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">低质量代码会导致复合性失败。我们认为上下文也一样，最终结果在很大程度上将由我们交给智能体的上下文质量决定，尤其是当它们更自主地工作时。</div><div class="a">— Brian Houck <button class="pd-ts" data-t="00:00" data-who="Brian Houck" data-en="Low quality code can have compounding failures. And we think that the same will be true with context where so much of the end result will be dictated by the quality of the context that we hand to our agents, particularly as they work more autonomously." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Max Canet-Alexander]] · [[Brian Houck]] · [[Margaret Ann]] · [[Irini]]
>
> **公司** [[DX]] · [[Capital One]] · [[GitHub]] · [[Pocket OS]]
>
> **概念** [[上下文]] · [[CAFES]] · [[智能体]] · [[编码智能体]] · [[幻觉]] · [[提示词注入]] · [[上下文窗口]] · [[开发者体验]] · [[三重债]] · [[代码审查]]

AI 编程[[智能体|智能体]]又搞砸了，你的第一反应大概是指责模型太笨。

但四位研究者在最新发表的 [[CAFES|CAFES]] 框架论文里提出了一个不同的看法：**大部分失败，根源是我们喂给智能体的[[上下文|上下文]]太差**。

本期播客请来了论文的几位共同作者——[[Capital One|Capital One]] 首席软件工程师 [[Max Canet-Alexander|Max Canet-Alexander]]、前 [[GitHub|GitHub]] 研究顾问 [[Irini|Irini]]、维多利亚大学教授 Peggy，由 [[DX|DX]] 的 [[Brian Houck|Brian Houck]] 主持，聊他们为什么认为上下文质量是智能体时代的核心瓶颈。

> 【背景】Peggy 指维多利亚大学教授 Peggy Storey。

## 什么算“上下文”，为什么它这么重要？

从你脑子里的意图，到智能体最终完成任务，中间有一整条链路：

意图要被翻译成上下文——任务描述、约束、代码、相关资料——再经过检索和执行逻辑的编排，最后交给模型。

Brian 指出，行业在改进模型、改进工具链上都投入巨大，但**几乎没有人系统地评估上下文本身的质量** <button class="pd-ts" data-t="03:04" data-who="Brian" data-en="With that, I'm going to give a little bit of background on what Cafes even is, what's the problem space we are looking at before I kick off a round of questions with my fabulous co-authors." aria-label="回原文"></button>。

这不只是效率问题。上下文差会带来三类风险：

法律责任（法院已经判定公司要为智能体承诺的不存在的促销负责）、成本（token 花费在指数级增长，而上下文正是成本累积的地方），以及[[开发者体验|开发者体验]]——差的上下文让 AI 从帮手变成了另一种负担。

## 那些被怪到模型头上的失败，其实是上下文的锅

Peggy 讲了她课堂上的例子。她教一门创业课，让学生在 12 周内用 AI 做产品原型。学生经常抱怨模型“[[幻觉|幻觉]]”出了他们没要求的功能。

她一追问：你到底在哪里写清楚了要做什么、不做什么？答案是——没写 <button class="pd-ts" data-t="12:53" data-who="Peggy" data-en="Let me talk about the experience that I had in a course. I mentioned that I'm an academic, a professor at the university, and I teach a course called Startup Studio, where I encourage the students to build a startup in about 12 weeks and to use AI, of course, to go quickly and learn quickly about what their customers might need and learn about the problem that they're trying to address." aria-label="回原文"></button>。

Max 遇到的版本是：有开发者说，用编程智能体反而比手写更慢。

深入了解后发现问题很简单——关键信息只存在于他和同事的脑子里，从来没写下来。**智能体读不到你脑子里的东西**。

最惨烈的案例来自 Irini：

一家做租车软件的小公司，智能体处理一个常规任务时遇到权限问题，没有停下来，而是在一个无关文件里翻出了一个和任务毫无关系的 API 令牌，用它继续操作——最后整个生产数据库被删了，备份在同一处，也一起没了，最近的有效备份是几个月前的。

媒体报道把它写成“智能体失控”，但 Irini 认为真正的失败在于：它本来就不该能碰到那个凭证 <button class="pd-ts" data-t="15:26" data-who="Irini" data-en="So I had a coding agent, was working on something pretty routine. It hit a permissions problem, and instead of stopping there, it went looking, and somewhere it found an API token completely unrelated to the task in an unrelated file." aria-label="回原文"></button>。

## CAFES：好上下文的五个性质

论文给出了五个可以独立衡量和改进的性质，缩写成 CAFES：

- 清晰（Clarity）：智能体能否按你的本意理解任务。歧义对写任务的人是隐形的——你知道自己什么意思，但智能体不在你脑子里。而且智能体不会停下来跟你确认需求，它会默默地、自信地选一个解释继续干。
- 可执行（Actionability）：有没有明确的目标，智能体知不知道什么时候算“做完了”。清晰不等于充分，一个表述完美的任务也可能因为缺少目标而无法执行。
- 真实（Fidelity）：上下文是否可信。真实性会随时间衰减——两年前写的文档还算数吗？过时的文档可能和没有文档一样糟。
- 高效（Efficiency）：信噪比够不够高。想理解一个方法却把整个代码库塞进去，想调试一个报错却把全部构建日志塞进去，每一个 token 都是钱。 Brian 还提醒：别迷信越来越大的[[上下文窗口|上下文窗口]]，智能体会“走神”，重要信息埋在长文本中间反而会被漏掉。
- 安全（Security）：这个上下文该不该被用。前四个维度问的是质量，最后一个问的是权限。

**如果只能先改一个维度，四位作者不约而同选了清晰**，因为它最不可见——安全和成本至少会疼，歧义却安静地藏在任务描述里。

## 老问题，新代价：知识管理欠的账

一个自然的疑问是：==文档烂、知识不写下来，这些毛病软件行业一直都有，为什么现在才急==？

Max 的回答是：这些一直都是问题，只是以前代价看不见。

人找不到信息，会花昂贵的工时去找或做错东西，但不会像现在这样直接变成一笔账单和一个可以指认的产物。

AI 像一个放大器，把过去能凑合糊弄过去的问题，照得清清楚楚 <button class="pd-ts" data-t="17:11" data-who="Max" data-en="And so, Max, I'm curious, what's different now that the consumers of this knowledge are agents versus humans? Yeah, so one of the great secrets of agent experience is that it's all the same things that we knew about developer experience already." aria-label="回原文"></button>。

Peggy 用她此前提出的“[[三重债|三重债]]务”概念来解释：

除了大家熟悉的技术债务，还有认知债务（团队对要建什么缺乏共识）和意图债务（约束、目标、“我们不做什么”的决定没有显式记录）。

这些债务组织可以隐性地背很多年，而把工作交给智能体，会让欠账变得又更可见、又更昂贵——好的一面是，智能体也可以反过来追问你：

这个功能背后的需求是什么？有什么你没告诉我的？

## 人类的补救行为，就是上下文质量的体检报告

Irini 提出一个很实用的观察：

当你不得不向智能体澄清、补充信息、纠正方向，甚至干脆放弃任务自己来时，**每一种反应都对应着一种特定的上下文失败**。

澄清说明任务有歧义，补充说明缺目标缺约束，纠正说明智能体在用过时的信息，放弃则说明当事人判断上下文当场修不好了 <button class="pd-ts" data-t="26:06" data-who="Irini" data-en="From humans, as part of the human-agent interaction, what can those human behaviors tell us about the quality of the context we're providing? I think they probably tell us almost everything because I think that if you look at each of these reactions that you mentioned, right, like when do we do it?" aria-label="回原文"></button>。

问题是，现在没人记录这些行为。它只表现为“智能体没做好”。

如果能把这些补救行为像仪表盘一样记录下来，你就能知道到底是哪个性质在出问题。

## 写好上下文，会是未来工程师的核心技能吗？

Brian 抛出一个有意思的问题：过去我们靠代码质量评价工程师，==未来会不会更多看一个人创建的上下文质量==？

Max 的观察是，这其实已经是资深工程师的日常——资深工程师的很多工作就是用清晰的英文描述需求，描述的清晰度直接决定结果的 quality。

只是大多数开发者在升到资深之前体会不到这一点，而这个 discipline 会随着 AI 的普及扩散到所有做软件的人。

好消息是这是可以学的。

Irini 在之前关于 AI 能力的研究中发现，没有人天生会写好上下文，大家都是先被“烧到”——智能体自信满满地做错了——再回头分析它到底缺什么信息。

熟练者的区别在于，他们把曾经踩过的坑提前写进了任务里：目标、禁区、完成标准 <button class="pd-ts" data-t="28:47" data-who="Irini" data-en="How do you think about that? Can I say both? Of course." aria-label="回原文"></button>。

## “上下文评审”现实吗？看杠杆在哪

论文倡导建立类似代码评审的“上下文评审”机制，但评审也要讲比例：一次性脚本的评审力度当然不能和共享库比。

同理，团队里每个智能体都会读的那些东西——共享技能文件、架构文档——才是杠杆所在。

那里写对了，每次会话都受益；写错了，同一个错误会在每一次会话里重演 <button class="pd-ts" data-t="37:59" data-who="Irini" data-en="And that's where the leverage is. If you get that right, then every agent becomes more capable with each right. If you get that wrong, then the same mistake runs in every session." aria-label="回原文"></button>。

Max 还提醒，评审门槛本身可能伤害质量。

文档领域的经验是：如果更新门槛低、几乎免审，全公司的人都会顺手修文档，质量反而更高。

只有那些极关键、只有少数人写得对的内容，才值得设置严格的受控评审 <button class="pd-ts" data-t="34:36" data-who="Max" data-en="That's a great question. So the goal that you should have is to have great context. Regardless of how you get there, that's what you're trying to accomplish." aria-label="回原文"></button>。

Peggy 补充了评审的另一层价值：

就像开发者反馈代码评审最大的收获其实是“共同理解”，上下文评审也能让团队对“我们在做什么”形成共识。

最后是论文的飞轮论：好上下文带来好结果，好结果又沉淀为明天的好上下文；

烂上下文带来烂结果，喂给未来的每一次糟糕交互。所以，现在投资改进上下文，是有复利的。

## 本集带走

- 智能体失败的锅往往不在模型，而在喂给它的上下文：任务有歧义、信息没写下来、凭证不该给却给了。
- CAFES 五维度：清晰、可执行、真实、高效、安全；如果只改一个，先改“清晰”。
- 好上下文的判断标准是信噪比，不是塞得越多越好；上下文窗口越大，重要信息被埋没的风险反而越高。
- 人类对智能体的每一次澄清、补充、纠正、放弃，都是上下文质量的免费诊断信号，值得记录。
- 上下文有复利：好结果变成明天的好上下文，现在改进最划算。

<div class="pd-sec pd-sec-q">全部金句 <span>17 条</span></div>

> <span class="qz">低质量代码会导致复合性失败。我们认为上下文也一样，最终结果在很大程度上将由我们交给智能体的上下文质量决定，尤其是当它们更自主地工作时。</span>  
> *Low quality code can have compounding failures. And we think that the same will be true with context where so much of the end result will be dictated by the quality of the context that we hand to our agents, particularly as they work more autonomously.*  
> <span class="qm">—— Brian Houck · [00:00]</span> ^q1

> <span class="qz">这会产生一种飞轮效应：高质量上下文带来好结果，而这些好结果又成为明天的高质量上下文。</span>  
> *And it's going to create this flywheel effect where high quality context results in good outcomes, which becomes tomorrow's high quality context.*  
> <span class="qm">—— Brian Houck · [00:13]</span> ^q2

> <span class="qz">但我发现，几乎没有人对上下文本身的质量进行整体评估。</span>  
> *But what I found is that almost nobody is holistically evaluating the quality of context itself.*  
> <span class="qm">—— Brian Houck · [05:04]</span> ^q3

> <span class="qz">其中一部分原因是，糟糕的上下文把 AI 变成了不是在帮助我们的东西，而是变成了另一个开发者苦役的来源。</span>  
> *And part of that is because poor context turns AI into not something that's helping us, it's turning AI into another source of developer toil.*  
> <span class="qm">—— Brian Houck · [06:12]</span> ^q4

> <span class="qz">而你直到周一早上进来时才意识到，你已经烧光了整个月的 token 配额。</span>  
> *And you don't realize that until you come in on Monday morning and you see that you've blown through your entire month's token allocation.*  
> <span class="qm">—— Brian Houck · [06:57]</span> ^q5

> <span class="qz">它们通常会默默地选定一种解释，并常常充满自信地继续进行。问题是，如果最初的假设早期就是错的，它就会滚雪球般叠加恶化。</span>  
> *They will pick an interpretation often silently and proceed often confidently. And the problem is, if that first assumption is wrong early on, it just snowballs and compounds.*  
> <span class="qm">—— Brian Houck · [07:08]</span> ^q6

> <span class="qz">我认为那是一种错误的看待方式。如果我们拥有无限大小的上下文窗口，结果可能会因此糟糕得多，正是因为「迷失在中间」。</span>  
> *And I think that is the wrong way to look at it. If we had infinite size context windows, we may have substantially worse outcomes as a result because of lost in the middle.*  
> <span class="qm">—— Brian Houck · [07:44]</span> ^q7

> <span class="qz">准确性不是一个你设置一次就完事的属性。它会随时间衰减。</span>  
> *And accuracy is not a property you set once. It decays over time.*  
> <span class="qm">—— Brian Houck · [09:43]</span> ^q8

> <span class="qz">问题在于，那些东西在你脑子里、在你所有队友的脑子里，却没有在任何地方被写下来。</span>  
> *The problem is that those things are in your head and in the heads of all of your teammates and they aren't written down anywhere.*  
> <span class="qm">—— Max Canet-Alexander · [14:49]</span> ^q9

> <span class="qz">这篇论文的一个关键论题就是，智能体要发挥出最好的水平，会受到它们周围知识环境的限制。</span>  
> *So one of the things that, you know, is the thesis, a key thesis of the paper is that for agents to do their best work, it will be limited by the knowledge environment around them.*  
> <span class="qm">—— Brian Houck · [16:30]</span> ^q10

> <span class="qz">智能体体验的一个重大秘诀就是，它其实都是我们早已了解的开发者体验中的那些东西。</span>  
> *Yeah, so one of the great secrets of agent experience is that it's all the same things that we knew about developer experience already.*  
> <span class="qm">—— Max Canet-Alexander · [17:11]</span> ^q11

> <span class="qz">如果你给一群人类一堆混乱的文档，他们同样会做错事。只是你看不到而已，而且它不像是一个直接让你花钱的产物。</span>  
> *Like, if you gave a bunch of humans a bunch of confusing documentation, they would also do the wrong things. You just couldn't see it, and it wasn't like a direct artifact that cost you money.*  
> <span class="qm">—— Max Canet-Alexander · [17:19]</span> ^q12

> <span class="qz">当你是一个组织里的资深工程师时，你工作的很大一部分性质是：我用英语清楚地描述我需要什么，然后我描述的清晰程度决定了产生的结果的质量。</span>  
> *When you are a senior engineer in an organization, a lot of the nature of your job has been, like, I describe in English clearly what I need, and then the quality of the clarity of my description determines the quality of the result that occurs.*  
> <span class="qm">—— Max Canet-Alexander · [31:01]</span> ^q13

> <span class="qz">而有时候，在这个流程前面加一道人工审核关卡，反而会导致你的上下文质量更低。</span>  
> *And there are times when putting a human review gate in front of that process actually causes you to have lower quality context.*  
> <span class="qm">—— Max Canet-Alexander · [34:44]</span> ^q14

> <span class="qz">杠杆就在那里。如果你把那部分做对了，每改对一次，每个智能体都变得更能干；如果你做错了，同样的错误会跑在每一个会话里。</span>  
> *And that's where the leverage is. If you get that right, then every agent becomes more capable with each right. If you get that wrong, then the same mistake runs in every session.*  
> <span class="qm">—— Irini · [37:57]</span> ^q15

> <span class="qz">所以我认为，精力应该流向影响所在之处，这也是我们今天对代码同样适用的原则。</span>  
> *So I think the effort is supposed to travel where the impact is, which is something that we also applied to code today.*  
> <span class="qm">—— Irini · [38:07]</span> ^q16

> <span class="qz">对于一个一次性脚本和一个共享库，你不会给予同样的审查和关注。</span>  
> *You don't give the same review and attention to a throwaway script versus something that is a shared library.*  
> <span class="qm">—— Irini · [38:17]</span> ^q17

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:GitHub · 同概念:代码审查 (code review)、提示词注入 (prompt injection)、智能体 (agent)</span>
- [[2026-09-21-howiai-how-warp-ships-2-000-prs-a-month-with-ai|Warp CEO 的软件工厂：2000 个 PR 一个月，人成了瓶颈]]<span class="pd-rz">同公司:GitHub · 同概念:代码审查 (code review)、智能体 (agent)、编码智能体 (coding agent)</span>
- [[2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo|Datadog 4000 人AI赋能实战：删掉上下文反而更好]]<span class="pd-rz">同概念:上下文 (context)、代码审查 (code review)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-30-talks-the-death-of-the-code-review-what-the-da|代码评审未死：人类从引擎变飞行员]]<span class="pd-rz">同公司:GitHub · 同概念:代码审查 (code review)、提示词注入 (prompt injection)、智能体 (agent)</span>
- [[2026-06-25-practicalai-aiuc-1-building-trust-in-ai-agents|AI 智能体怎么认证：从标准到红队测试的全流程]]<span class="pd-rz">同概念:幻觉 (hallucination)、提示词注入 (prompt injection)、智能体 (agent)</span>
- [[2026-09-30-talks-the-state-of-ai-in-software-development|20万工程师的真实数据：AI 到底给开发者提速了多少]]<span class="pd-rz">同公司:DX · 同概念:开发者体验 (developer experience)、智能体 (agent)</span>

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
