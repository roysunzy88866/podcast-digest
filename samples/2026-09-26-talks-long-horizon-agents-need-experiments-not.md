---
title: 给 AI 村庄装上自动研究循环：长时程智能体的实验配方
podcast: 精选演讲
date: 2026-09-30
source_url: undefined
duration: "21:08"
type: episode
cover: "#64748b"
description: 前 Microsoft/Supercell 工程师 Irina 讲述如何用自动研究循环评估和改进长期携带状态的多智能体系统，提出「长时程智能体需要实验而不只是提示词」。
guests: ["[[Erina Karati]]"]
companies: ["[[Supercell]]"]
concepts: ["[[Project Paradox]]", "[[智能体]]", "[[多智能体]]", "[[记忆]]", "[[RAG]]", "[[自动研究]]", "[[智能体协议]]", "[[场景]]", "[[护栏]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-26-talks-long-horizon-agents-need-experiments-not#post","headline":"给 AI 村庄装上自动研究循环：长时程智能体的实验配方","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-26-talks-long-horizon-agents-need-experiments-not","mainEntityOfPage":"https://talk.solomind.cc/2026-09-26-talks-long-horizon-agents-need-experiments-not","description":"前 Microsoft/Supercell 工程师 Irina 讲述如何用自动研究循环评估和改进长期携带状态的多智能体系统，提出「长时程智能体需要实验而不只是提示词」。","datePublished":"2026-09-30","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Erina Karati"},{"@type":"Organization","name":"Supercell"},{"@type":"Thing","name":"Project Paradox"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"多智能体 (multi-agent)"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"自动研究 (auto-research)"},{"@type":"Thing","name":"智能体协议 (agent protocol)"},{"@type":"Thing","name":"场景 (scenario)"},{"@type":"Thing","name":"护栏 (guardrails)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"给 AI 村庄装上自动研究循环：长时程智能体的实验配方","item":"https://talk.solomind.cc/2026-09-26-talks-long-horizon-agents-need-experiments-not"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>给 AI 村庄装上自动研究循环：长时程智能体的实验配方</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 给 AI 村庄装上自动研究循环：长时程智能体的实验配方

<div class="pd-byl"><b>Erina Karati</b> · Supercell 工程师 · 2026-09-30</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-26-talks-long-horizon-agents-need-experiments-not.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">它可能看起来很酷，你可能得到不错的互动，但实际上很难评估系统是否真正得到了改进。</div><div class="a">— Erina Karati <button class="pd-ts" data-t="11:02" data-who="Erina Karati" data-en="It might look cool and you might get nice interactions, but it's actually very hard to evaluate on whether the system actually improved." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Erina Karati]]
>
> **公司** [[Supercell]]
>
> **概念** [[Project Paradox]] · [[智能体]] · [[多智能体]] · [[记忆]] · [[RAG]] · [[自动研究]] · [[智能体协议]] · [[场景]] · [[护栏]]

这一集的主角是 Irina,她曾在 Microsoft 和 [[Supercell|Supercell]] 做工程师，讲的是她在 Supercell AI Innovation Lab 和队友 Arnachala Manikhandan 一起做的 [[Project Paradox|Project Paradox]]——一个模块化框架，能把自主[[智能体|智能体]]插进视频游戏里，让它们跟玩家和其他智能体互动、竞争、合作。但这次演讲真正想回答的，是一个很多 AI 工程师都开始撞上的问题：**怎么评估和改进那些长时间携带状态的智能体？** <button class="pd-ts" data-t="00:34" data-who="嘉宾" data-en="I will use a video game like AI village as a running example here, but the broader question is one I think many AI engineers are starting to run into. How do we evaluate and improve agents that carry state over a long period of time?" aria-label="回原文"></button>

钩子在这里：他们的智能体能制定计划、四处走动、记住最近的对话，短期表现相当好；可一旦时间拉长，智能体之间会忘掉消息来源、把谣言当成事实——整个「村庄」的社交一致性开始崩坏。他们的解法不是继续手工调提示词，而是让系统**在自身上跑实验**。

## 先看智能体本身：一套刻意有状态的架构

Project Paradox 的架构有四个关键部件 <button class="pd-ts" data-t="02:57" data-who="嘉宾" data-en="One second. So the architecture was intentionally stateful behind this. The first important part was per-agent memory." aria-label="回原文"></button>:

1. **每个智能体独立的[[记忆|记忆]]**：各自有由 [[RAG|RAG]](检索增强生成，即把相关记忆从库里检索出来塞给模型)支撑的记忆命名空间，记忆不会在智能体之间串扰。
3. **信念分数**：智能体对其他智能体和玩家有一个信任矩阵，互动发生后由 LLM 决定信任分升、降还是不变。

演示里，角色 Blossom 被邀请野餐后，会自己规划「拿起糕点、走到野餐区」的动作序列，之后对话也能接得上文。短期玩法没问题。

## 问题：长程社交行为开始漏风

时间一长，麻烦来了。他们让一个智能体向另一个散播「芒果特价」的消息，消息又传给第三个智能体；中间隔了许多事件后，玩家问起芒果，智能体却给不出期望的上下文 <button class="pd-ts" data-t="05:43" data-who="嘉宾" data-en="So in this example, we have one agent spreading a rumor about a sale on mangoes to another agent. And that agent receives that information and goes and tells another agent about it." aria-label="回原文"></button>。

具体症状包括：记得大致话题但丢了来源；谣言从「听说」硬化成「确定的事实」；或者智能体知道某事实，做行动规划时却想不起来 <button class="pd-ts" data-t="06:11" data-who="嘉宾" data-en="And this is where things are starting to get messy, naturally. Like, the system may remember the rough topic but lose the source of the topic. A rumor may become certain instead of just a rumor." aria-label="回原文"></button>。于是问题变成：**怎么改进[[多智能体|多智能体系统]]在长期社会行为上的表现，而不只是一次响应？**

灵感来自 Karpathy 发的关于[[自动研究|自动研究]](auto-research)的帖子。他们的理解是：与其手动调提示词、看一个漂亮演示，不如**定义一套[[场景|场景]]、运行智能体、收集轨迹、给行为打分、改动一个小的策略面、只保留真正提分的改动** <button class="pd-ts" data-t="07:07" data-who="嘉宾" data-en="Perhaps we can make the system run experiments on itself, and can we use this for our system as well? So what we understood is instead of manually tuning a prompt or watching one nice demo, we could define a scenario suit, run the agents, collect traces, score the behavior, and change a small policy surface and only keep the changes that actually improve the score." aria-label="回原文"></button>。

关键定位：自动研究不是村庄里的又一个智能体，而是**村庄之外的元系统**——村民只有局部视角、没有共享记忆库，信息只能靠彼此正确传达才传播；而自动研究层能读到一次运行的完整轨迹，对照场景的基准给行为打分，提出受约束的改动，再重跑看社会层面行为是否变好 <button class="pd-ts" data-t="08:21" data-who="嘉宾" data-en="In this context, art research is not another agent in the village, like I said. It's a meta-system outside the village. The villagers have local perspectives, of course." aria-label="回原文"></button>。这是个关键转变：**不再评估一个答案，而是评估一整次运行** <button class="pd-ts" data-t="09:14" data-who="嘉宾" data-en="This is the key shift we were trying to look for. So we were no longer evaluating one answer, we were evaluating an entire run. And this is what one of the loops would look like." aria-label="回原文"></button>。

循环长这样：① 定义受控场景；② 运行模拟，收集结构化轨迹(观察、对话、记忆写入、检索、信念更新)；③ 打分(信息按预期传播了吗？来源归因存活了吗？

不确定性保持为不确定了吗？);④ 提出一个**小的**策略改动——不许重写整个应用，只许编辑受控策略面；⑤ 重跑，分数提升且[[护栏|护栏]]守住就保留，否则回退 <button class="pd-ts" data-t="09:26" data-who="嘉宾" data-en="And this is what one of the loops would look like. First, we define a controlled scenario, which I'll elaborate a bit more about later. For example, one agent learns a public fact or one agent hears a rumor." aria-label="回原文"></button>。

## 场景设计：别让智能体瞎逛

社会行为本身是模糊的——光让智能体在环境里游荡，看起来很酷，但根本没法评估系统是否真的变好了 <button class="pd-ts" data-t="10:56" data-who="嘉宾" data-en="And talking about controlled scenarios, the reason why scenario design matters is that social behavior is otherwise a bit fuzzy in general. In the sense, if you just let the agents in an environment wander around," aria-label="回原文"></button>。所以要设计成套的受控场景，他们举了三类：

- **公共事实扩散**：智能体 A 得知面包店明天关门，相关的智能体都知道了吗？记得谁说的吗？会据此改计划吗？
- **谣言不确定性**：A 听说 C「可能」要离开村庄，谣言传开后，「可能要离开」会不会变成「要离开了」？是变成事实还是保持为谣言？
- **重新规划**：群体有计划，某智能体得知路线被封，大家会更新并互相沟通吗？

重点不在于这些具体场景普适，而在于**长程智能体行为需要成套的场景** <button class="pd-ts" data-t="12:25" data-who="嘉宾" data-en="The point is not that these exact scenarios are universal here. The point we're trying to make is that long-horizon agent behavior needs scenario suits. And talking about our Mango example again, after running one of our auto-research loops, this time after" aria-label="回原文"></button>。跑过一轮循环后，芒果例子里玩家问起促销，智能体这次终于能结合上下文回答了。

## 记分卡：别用一个模糊指标

确切的打分公式不重要，记分卡的**形态**才重要。单一模糊指标(比如「智能体质量」)会隐藏所有有意思的失败；要的是平衡记分卡 <button class="pd-ts" data-t="13:14" data-who="嘉宾" data-en="And for this talk, the exact formula we believe is less important than the shape of the scorecard. You do not want a single vague metric like agent quality. This will hide all the interesting failures." aria-label="回原文"></button>:

- 扩散 → 衡量触达范围(N 步后多少智能体知道该事实)
- 来源 → 衡量知道者中的来源保留率
- 谣言 → 衡量不确定性保持率和虚假确定率
- 规划 → 衡量行动一致性和重新规划耗时
- 隐私 → 衡量遏制性

为什么必须平衡？因为只优化一个指标会催生坏行为：只优化扩散，智能体会学会过度分享一切；只优化记忆召回，会制造嘈杂或过时的记忆。记分卡的作用正是**防止自动研究智能体钻系统空子、只刷高某个特定分数** <button class="pd-ts" data-t="14:17" data-who="嘉宾" data-en="This matters because optimizing only one metric can create bad behavior, because let's say if you only optimize for diffusion, the agents may learn to overshare everything, and let's say if you only optimize for memory recall, you might create noisy or stale-like memories." aria-label="回原文"></button>。

## 工程经验：可编辑面要小，回滚不是可选项

两条最重要的工程教训。第一，把可编辑表面保持得非常小：自动研究层不该有权限随意重写整个代码库，要**冻结测试框架、场景和指标**，只暴露真正想优化的部分——在 Paradox 里就是记忆写入策略、检索策略、沟通提示词、信任规则、来源归因、规划触发器这些 <button class="pd-ts" data-t="14:44" data-who="嘉宾" data-en="The other important engineering lesson that we learned over this project is that it's important to keep the editable surface really small. The auto-research layer should not have permission to randomly rewrite the whole code base." aria-label="回原文"></button>。

这是「LM 写随机补丁」与「LM 在受控策略空间内搜索」的分界线。而且这些都是对[[智能体协议|智能体协议]]的小改动，却能在社会层面产生更大影响——比如谣言硬化成事实时，可以存置信度、区分一手二手信息、转述不确定说法时要求保留措辞 <button class="pd-ts" data-t="15:59" data-who="嘉宾" data-en="If source attribution disappears, the policy change might preserve source in memory rights and summaries. If rumors harden into facts, the policy change might be store confidence, mark first-hand versus second-hand, and require hedging when retelling uncertain claims." aria-label="回原文"></button>。Irina 也特意谨慎：没有重复的循环结果，不能说系统「整体改进了」；他们主张的是这是**正确的暴露面**——小到可控，又足够丰富到能改变社会行为 <button class="pd-ts" data-t="16:34" data-who="嘉宾" data-en="The key is that these are small changes to the agent protocol, but they can have larger effects on a society-level behavior for multi-agentic systems. This is also where I kind of want to be careful about our claims here because we believe without repeated current loop results, like I wouldn't say the system just generally improved." aria-label="回原文"></button>。

第二，回滚不可选。一个改动能改善一件事的同时损害另一件：传播公开事实更快的策略可能泄露隐私，提高召回的策略可能增加陈旧记忆的使用 <button class="pd-ts" data-t="17:50" data-who="嘉宾" data-en="So the other lesson is that rollback also is not optional. When you optimize social behavior, a change can improve one thing and damage another. So a policy that spreads public facts faster might also leak private information." aria-label="回原文"></button>。所以循环要像一个**棘轮**：尝试改动、打分、只有记分卡改善且护栏完好才保留。

## 最大的教训：仅有记忆是不够的

给智能体加上 RAG 记忆，仍然得不到想要的长期行为 <button class="pd-ts" data-t="17:12" data-who="嘉宾" data-en="And the biggest lesson for me, perhaps, was that memory is not enough here. You can add a RAG memory to an agent and still not get the current long-term horizon behavior that you were looking for." aria-label="回原文"></button>。因为智能体还需要：知道信息从哪来，保留它是一手/二手/已验证/不确定的；把原始情景记忆和当前相信的东西分开；并且**通过场景测试行为，而不是凭感觉**。

这不只关乎游戏智能体：客服智能体需要知道策略更新来自哪、是否取代旧答案；个人助理要记住做过的承诺；研究型智能体需要来源追溯和假设更新；编程智能体需要跨议题、文件、需求的长期上下文 <button class="pd-ts" data-t="18:34" data-who="嘉宾" data-en="And we definitely believe this is not only relevant for game agents, because although I gave you an example of using a game village, we believe, like, let's say, for example, support agents." aria-label="回原文"></button>。共同点是：**它们都随时间维护状态，而这个状态影响未来行动**——所以都需要受控场景和行为记分卡。

Irina 留下的实操配方：冻结测试框架、定义场景、记录轨迹、给行为打分、只暴露一个很小的策略面、在这些改动上搜索、只保留通过度量的改动。一句话：**长时程智能体需要实验，而不只是提示词** <button class="pd-ts" data-t="20:53" data-who="嘉宾" data-en="Autor research gave us a way to approach this a bit more systematically, not by trusting one demo and not by endlessly hand-tuning prompts, but by running control experiments and keeping only the changes that survived our measurement." aria-label="回原文"></button>。

## 本集带走

- **评估一整次运行，不是一次回答**：收集结构化轨迹(观察、对话、记忆写入、检索、信念更新)，对照场景基准给社会层面行为打分。
- **设计成套的受控场景**：事实扩散、谣言不确定性、重新规划各测一类失败；让智能体自由游荡再「看感觉」是评不出改进的。
- **用平衡记分卡防钻空子**：扩散、来源保留、不确定性保持、规划一致性、隐私遏制多指标并测，防止自动研究层只刷单一分数。
- **冻结框架，只暴露小策略面**：记忆写入/检索策略、信任规则、来源归因等可编辑，测试框架、场景、指标不许动——这是受控搜索而非随机打补丁。
- **循环当棘轮用**：改动提分且护栏完好才保留，否则回退；一个指标的提升常以另一指标受损为代价。
- **记忆不等于长程能力**：还要保留来源与置信度、区分原始记忆与当前信念、靠场景而非感觉验证行为。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">它可能看起来很酷，你可能得到不错的互动，但实际上很难评估系统是否真正得到了改进。</span>  
> *It might look cool and you might get nice interactions, but it's actually very hard to evaluate on whether the system actually improved.*  
> <span class="qm">—— Erina Karati · [11:02]</span> ^q1

> <span class="qz">你不想要一个单一而模糊的指标，比如智能体质量。这会隐藏所有有意思的失败。</span>  
> *You do not want a single vague metric like agent quality. This will hide all the interesting failures.*  
> <span class="qm">—— Erina Karati · [13:14]</span> ^q2

> <span class="qz">这就是「LM 写出随机补丁」和「LM 真正在一个受控的策略空间内进行搜索」之间的区别。</span>  
> *And this is the difference between the LM writing random patches versus the LM actually searching within a controlled policy space.*  
> <span class="qm">—— Erina Karati · [15:28]</span> ^q3

> <span class="qz">关键在于，这些都是对智能体协议的小改动，但它们可以对多智能体系统的社会层面行为产生更大的影响。</span>  
> *The key is that these are small changes to the agent protocol, but they can have larger effects on a society-level behavior for multi-agentic systems.*  
> <span class="qm">—— Erina Karati · [16:22]</span> ^q4

> <span class="qz">我们想说的是，这是暴露给自动研究层循环的正确表面，因为它足够小以便控制，但至少在某种程度上仍然足够丰富，能够改变社会行为。</span>  
> *We're trying to say this is the right kind of surface to expose to an auto-research layer loop because it is small enough to control, but it's still rich enough to change the social behavior to some extent at least.*  
> <span class="qm">—— Erina Karati · [16:49]</span> ^q5

> <span class="qz">你可以给一个智能体加上 RAG 记忆，却仍然得不到你想要的长期地平线行为。</span>  
> *You can add a RAG memory to an agent and still not get the current long-term horizon behavior that you were looking for.*  
> <span class="qm">—— Erina Karati · [17:12]</span> ^q6

> <span class="qz">有时你还需要把原始的情景记忆与智能体当前相信的东西分开，而且你需要通过场景来测试行为，而不是仅凭感觉。</span>  
> *Sometimes you need to separate raw episodic memories from what the agent currently believes, too, and you need to test behavior through scenarios, not just through vibes.*  
> <span class="qm">—— Erina Karati · [17:33]</span> ^q7

> <span class="qz">当你优化社会行为时，一个改动可能改善一件事的同时损害另一件事。</span>  
> *When you optimize social behavior, a change can improve one thing and damage another.*  
> <span class="qm">—— Erina Karati · [17:50]</span> ^q8

> <span class="qz">所以这个循环基本上应该像一个棘轮：尝试一个改动，给它打分，只有当记分卡改善且护栏完好时才保留它。</span>  
> *So the loop should basically be like a ratchet. Try a change, score it, keep it only if the scorecard improves and guardrails whole.*  
> <span class="qm">—— Erina Karati · [18:07]</span> ^q9

> <span class="qz">如果有一个实操配方我希望你们带走，那就是：冻结测试框架，定义场景，记录轨迹，给行为打分，并且只暴露一个很小的策略面。</span>  
> *If there's one practical recipe I want you to take away, freeze the harness, define scenarios, log traces, score behavior, and expose only a small policy surface.*  
> <span class="qm">—— Erina Karati · [19:36]</span> ^q10

> <span class="qz">长时程智能体需要实验，而不只是提示词，我希望这是你们从这次演讲中得到的收获。</span>  
> *Long horizon agents need experiments and not just prompts, and I hope that's the takeaway that you get from this talk.*  
> <span class="qm">—— Erina Karati · [20:53]</span> ^q11

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2025-09-16-talks-evaluating-agents-with-braintrust|Braintrust CEO Ankur Goyal:做 AI 评估的纪律八年不变，但玩法正在剧变]]<span class="pd-rz">同概念:多智能体系统 (multi-agent)、护栏 (guardrails)、智能体 (agent)</span>
- [[2026-08-19-talks-healthcare-s-agent-bytecode-x12-as-the-h|给医疗理赔智能体套上 X12 护栏]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、记忆 (memory)</span>
- [[2026-08-29-talks-agents-are-where-microservices-were-in-2|Navan 架构师谈生产环境智能体：从运行时到护栏的实战分层]]<span class="pd-rz">同概念:RAG、智能体 (agent)、记忆 (memory)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:智能体 (agent)、记忆 (memory)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)</span>

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
