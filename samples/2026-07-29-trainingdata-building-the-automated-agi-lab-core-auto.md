---
title: Transformer 见顶了吗？OpenAI 与 Google 前核心创立 Core Automation 寻找下一代架构
podcast: Training Data
date: 2026-07-29
source_url: undefined
duration: "48:39"
type: episode
cover: "#64748b"
description: 前 OpenAI VP Jerry 与前 Gemini 预训练负责人 Rohan 创办 Core Automation，直言 Transformer 架构已见顶，致力于打造能在真实世界中持续学习的新架构。
host: "[[Sonja]]"
guests: ["[[Rohan Anil]]"]
cohosts: ["[[Jerry Tworek]]"]
companies: ["[[Core Automation]]", "[[OpenAI]]", "[[Google]]", "[[Anthropic]]"]
concepts: ["[[Transformer]]", "[[强化学习]]", "[[预训练]]", "[[测试时学习]]", "[[算子]]", "[[持续学习]]", "[[AGI]]", "[[计算深度]]", "[[思维链]]", "[[编码智能体]]"]
category: 创业与行业
tags:
  - 创业与行业
  - 智能体
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><span class="soon" title="必读页归 C13c">最热</span></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Transformer 见顶了吗？OpenAI 与 Google 前核心创立 Core Automation 寻找下一代架构</span></a><div class="pd-acts"></div></div></header></div>

# Transformer 见顶了吗？OpenAI 与 Google 前核心创立 Core Automation 寻找下一代架构

<div class="pd-byl"><b>Jerry Tworek</b> · Core Automation 创始人</div>

<div class="pd-mt">2026-07-29 · Training Data · 48:39</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-29-trainingdata-building-the-automated-agi-lab-core-auto.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">替换 Transformer 的第一步，是深刻地感激它们能带我们走多远。</div><div class="a">Sonja · 01:50</div></div>

> [!info] 关联
> **嘉宾**:[[Rohan Anil]]
>
> **主持**:[[Sonja]]
>
> **联合主持**:[[Jerry Tworek]]
>
> **涉及公司**:[[Core Automation]] · [[OpenAI]] · [[Google]] · [[Anthropic]]
>
> **概念**:[[Transformer]] · [[强化学习]] · [[预训练]] · [[测试时学习]] · [[算子]] · [[持续学习]] · [[AGI]] · [[计算深度]] · [[思维链]] · [[编码智能体]]

<div class="pd-tldr"><b>一句话</b>前 OpenAI VP Jerry 与前 Gemini 预训练负责人 Rohan 创办 Core Automation，直言 Transformer 架构已见顶，致力于打造能在真实世界中持续学习的新架构。</div>

近期的旧金山 AI 圈，一家名为 [[Core Automation|Core Automation]] 的新实验室引起了不小的关注。它的两位创始人 Jerry 和 Rohan 来头不小：Jerry 曾任 [[OpenAI|OpenAI]] 副总裁，领导过负责推理的 Strawberry 等团队；Rohan 则曾是 Gemini 的[[预训练|预训练]]负责人之一，并在 [[Google|Google]] Brain 从事过大量基础 AI 研究。在这场访谈中，两位大佬抛出了一个极具争议的核心观点：**[[Transformer|Transformer]] 架构已经见顶，我们需要寻找替代品**。整篇访谈的主线非常清晰：先论证 Transformer 为什么会触及天花板，接着解释新架构需要解决什么核心问题（[[测试时学习|测试时学习]]与算力效率），最后分享他们打算如何通过建立“最自动化实验室”来跑通这条全新赛道。

### 1. 为什么说 Transformer 已经“见顶”？

访谈的起点，是 Jerry 最近在网上发布的一条被视为“Transformer 悼词”的火爆观点：“取代 Transformer 的第一步，是深刻感激它能带我们走多远。” <button class="pd-ts" data-t="01:50" data-who="Sonja" data-en="You tweeted a very spicy take recently. The first step to replacing Transformers is appreciating deeply how far they were able to carry us. Is that a eulogy for the Transformer?" aria-label="回原文"></button> 这并非一句简单的噱头，而是基于他对行业现状的深度思考。

要理解这个判断，首先要理解什么是见顶。在 Jerry 看来，人类目前已经掌握了两种大规模算法：预训练（pre-training，在实验室里压缩海量互联网知识）和大规模[[强化学习|强化学习]]（RL，让模型通过自我摸索完成任务）。过去六年，整个 AI 行业都在给 Transformer 这趟列车疯狂加参数。但 Jerry 发现了一个致命的脱节：**模型在实验室里训练，却在现实世界中部署，这是当前 AI 面临的根本张力** <button class="pd-ts" data-t="05:11" data-who="Rohan" data-en="It comes back from the previous implication. What I think is the issue is that the models are being trained in the lab and are being deployed in the real world. That is the fundamental tension that is there." aria-label="回原文"></button>。

他曾是坚定的“强化学习最大主义者”。曾经笃信只要把 RL 的规模扩展到极致，[[AGI|AGI]]（通用人工智能）就会在 2025 年降临。然而，即使基准测试分数一路狂飙，模型依然无法在真实世界里自主完成所有任务 <button class="pd-ts" data-t="06:11" data-who="Rohan" data-en="And I had this internal belief that the moment we start scaling up RL, we'll solve everything. We'll be able to solve all the problems. And we eventually started scaling up RL." aria-label="回原文"></button>。原因在于，实验室里的评估任务和训练任务往往是同一枚硬币的两面，而真实世界的任务分布要混乱、模糊得多。

> **【背景】什么是“见顶”？**
> 这里指的不是 Transformer 立刻就没用了，而是说它作为“全人类知识的压缩器”已经接近极限。如果我们假设 OpenAI 和 Anthropic 今天停止训练新模型，把现有的终极模型发布出来。随着世界发生新事件、出现新代码库和新工具，这个静态的模型会变得越来越没用 <button class="pd-ts" data-t="21:26" data-who="Rohan" data-en="And this could be gigantic model train with a lot of compute on all the data in the world. And then if we ever stop training that model, what would happen? The question worth asking often and thinking about Transformer, what would happen if OpenAI and Anthropic stopped training new models and we got the Transformer we have today and say, this is it." aria-label="回原文"></button>。Transformer 的价值高度依赖于训练数据，一旦现实中出现了训练时没见过的东西，它就会受损。

既然当前的路径走不通，问题出在哪？两位创始人一致认为：**瓶颈在于架构本身**。你需要一种能在“测试时”（即模型部署后在和用户交互的过程中）[[持续学习|持续学习]]的模型，而不是必须打回实验室重新训练的模型 <button class="pd-ts" data-t="07:32" data-who="Rohan" data-en="Yet we are still not covering the entirety of the real world distribution. From that, my conclusion is we need to have models that learn at test time. We need to have models that learn with users, on their data, on their real-world tasks, on their real-world distribution." aria-label="回原文"></button>。

### 2. 新架构的使命：解决算力效率与“经验学习”

既然 Transformer 的疲态在于无法持续学习，那寻找替代方案应该从哪里下手？Rohan 从硬件和算力的角度切入了这个话题。他认为，Transformer 目前最大的软肋在于**[[计算深度|计算深度]]（Computational depth）极差** <button class="pd-ts" data-t="19:17" data-who="Sonja" data-en="One of the things I heard you say was the problem with transformers is the computational depth is poor. If that's the crux of the issue, tell us, what does that mean?" aria-label="回原文"></button>。

深度学习之所以叫“深度”，是因为我们期望它有非常深层的表示。但现在的 Transformer 其实非常“浅”，最多只有大概一百层 <button class="pd-ts" data-t="19:24" data-who="Rohan" data-en="How do you fix it? I can give you like one insight, like most transformers that we train are quite shallow. That's at most like a hundred layers deep." aria-label="回原文"></button>。为了弥补这种浅薄带来的能力不足，人们引入了“[[思维链|思维链]]”（让模型一次输出一个 token，通过增加序列长度来换取更强的推理能力）和推理时扩展。但 Rohan 指出，这种每次只生成一个 token（即自回归解码，Autoregressive decoding）的方式，从推理的角度看是极其低效的。现在业界流行的“投机解码（让小模型先猜、大模型来验，加速推理）”不过是一种治标不治本的权宜之计 <button class="pd-ts" data-t="16:08" data-who="Rohan" data-en="This is quite inefficient from like inference perspective, you're doing one token at a time. So most of the solutions have been finding to do better ways of speculative decoding." aria-label="回原文"></button>。

那如何才能实现数量级上的算力效率提升？Rohan 给出的答案是：**必须将预训练和强化学习结合起来，进行端到端的优化** <button class="pd-ts" data-t="28:01" data-who="Rohan" data-en="We have to combine pre-training and RL together. And that's like where one order of magnitude improvement would come from. And that's like a training procedure." aria-label="回原文"></button>。

他分享了自己在 Google 的经历。在优化模型时，大家过去往往只盯着预训练阶段的“困惑度”（一种衡量语言模型预测能力的指标）。但如果你辛辛苦苦降低了一点困惑度，把模型交给 Jerry 去做强化学习，他可能会瞬间摧毁你所有的困惑度指标。这就说明，孤立地看待训练的各个环节是错的。

此外，目前强化学习消耗了巨量的算力，却得不到多少有效反馈。模型必须解出一整条长长的思维链，才能把那一点点信息塞进网络里，这在 Rohan 看来是极大的浪费。因此，他们要寻找的新架构，必须能从根本上改变算力的花费方式。

在这个过程中，Rohan 还提到了“从经验中学习”的本质。Jerry 指出，我们现在把大量的算力花在强化学习上，但强化学习（依赖大量并行试错来对比结果）只是人类学习方式的一种。人类大脑的学习机制其实更加多元——比如学踢球时确实像强化学习；但在学数学时，更像是在脑海里深度思考艰深概念，直到豁然开朗 <button class="pd-ts" data-t="00:00" data-who="Rohan" data-en="If I play football, for example, it looks very, very closely to reinforcement learning. I kick a ball a lot of times and every time I adjust it a little bit and I see if it roughly matches what I wanted and there's some self-reinforcement head money." aria-label="回原文"></button>。因此，未来一定会出现比强化学习更高效的新算法，来处理这些真实世界的经验。

### 3. 为什么大实验室做不到？

说到这里，可能很多人会有疑问：既然方向这么清晰，为什么财大气粗的大实验室（如 OpenAI、Google）不做这件事？

两位创始人的回答非常直白：**时机与竞争的囚徒**。现在那些最大、最成功的实验室，正陷入史上最激烈的市场竞争中 <button class="pd-ts" data-t="13:08" data-who="Rohan" data-en="Market is right now in a very specific place where the biggest and the most successful labs by coincidence or by fate are probably in the most competitive market fight ever right now, which makes them not very keen on trying different paths, trying alternatives." aria-label="回原文"></button>。如果现成的 Transformer 架构依然能赚钱，只要堆算力就能在下个季度赢过对手，实验室就很难把巨大的精力投入到可能要一两年后才能重新定义领域的“替代架构”上 <button class="pd-ts" data-t="13:32" data-who="Rohan" data-en="If Transformer is profitable and if you can spend more efforts and more resources scaling Transformer to win in the next quarter, it's very hard to put at least a lot of attention and a lot of energy to work on something that will maybe better or maybe will redefine the field in a year or two." aria-label="回原文"></button>。而那些非头部的实验室，又在拼命亦步亦趋地模仿头部玩家的做法——比如上周所有人都在一窝蜂地发布[[编码智能体|编码智能体]]（coding agent）<button class="pd-ts" data-t="14:08" data-who="Rohan" data-en="If you look at the... last week's releases, everyone is trying to release a coding agent right now. And I think we need different paths and different approaches here." aria-label="回原文"></button>。

> **【背景】什么是“编码智能体”？**
> 指的是能够自动帮人类写代码、甚至自主完成部分开发任务的人工智能程序，是当前各大 AI 实验室竞相追逐的落地热点。

不仅如此，新架构的落地还需要极高的工程门槛。理论上最优的架构如果无法在硬件上高效运行，那就是废纸一张。Rohan 举例说，过去行业花了大约两三年时间，才真正把稀疏模型（MoE，混合专家模型）等架构的效率打磨到现在的水平。因此，想要做出颠覆性的架构，你需要一个能从算法研究、到硬件 kernel（底层计算核心）编写、再到端到端测试完全整合的团队，而目前只有极少数地方能做到这一点 <button class="pd-ts" data-t="17:52" data-who="Rohan" data-en="So you need the research inception to getting it productionized and getting kernels and everything written, the end-to-end loop. And there's only a few places right now which have integrated teams doing that." aria-label="回原文"></button>。这正是 Core Automation 试图填补的生态位。

### 4. 如何寻找新架构？打造“最自动化实验室”

说完了为什么要做，最后是他俩打算“怎么做”。既然要快速试错探索浩瀚的架构空间，Core Automation 给自己的定位是：**打造全世界最自动化的实验室** <button class="pd-ts" data-t="35:00" data-who="Sonja / Rohan" data-en="Most automated lab. Automated. Yeah, lab in the world." aria-label="回原文"></button>。

在他们的语境里，自动化并不意味着要把人类踢出局，而是赋予人类最大的“主观能动性（Agency）”。就像人类从步行、骑自行车到开汽车，或者从手工种一小块地到开机器耕作大片农场，他们希望借助高度发达的编码智能体，让单个研究员的迭代速度快上无数倍 <button class="pd-ts" data-t="35:03" data-who="Rohan" data-en="Yeah, lab in the world. To start with, I think the version of automation by Core Automation is about giving each human maximum level of agency in some way. We're not trying to really get humans out of the loop, which is like one version to automate, but it is about give humans ability to do the most with their amount of time." aria-label="回原文"></button>。Jerry 甚至设想，如果未来一个研究员一天能做 10 个甚至 100 个完整的深度学习实验，那他们自然能更快地搜罗到有效的架构 <button class="pd-ts" data-t="37:18" data-who="Rohan" data-en="And there isn't really any fundamental laws of physics reason why not. And maybe one day we get to 10 of those a day. Maybe one day we get to 100 of those a day." aria-label="回原文"></button>。

这里他们特别提到了一个巨大的瓶颈：**底层 kernel 的编写**。如果你想实现极致的效率，你必须为新架构编写能在特定硬件（如 GPU）上高效运行的底层代码。但这种技术门槛极高，全懂的人凤毛麟角。

Rohan 分享了他们和 GPU mode 社区一起举办的“QR kernel 竞赛”。这是一个关于线性代数中 QR 分解的底层[[算子|算子]]竞赛。他们发现，如果用现成的求解器，能得到基础的效率；一个高水平的人类配合 AI 搜索，能做到快 7 倍；但如果想让速度快 60 倍，则需要世界上极其罕见的顶尖高手，花费四周时间、砸下十万美元的 AI 算力才能写出来 <button class="pd-ts" data-t="41:05" data-who="Rohan" data-en="If you use co-solver for the shapes that we care about, you get some efficiency. And then a human plus some search loop can get you something like 7x. But it requires the high-taste human, like there's maybe three people in the world, and spend about $100,000 on these coding agents over a span of four weeks to get to a solution that's 60x faster." aria-label="回原文"></button>。今天的 AI 模型完全无法独立解决这种问题。因此，训练出能自动写出这种极速 kernel 的模型，是 Core Automation 当前的核心任务之一，这也是他们验证新架构能力的“内循环” <button class="pd-ts" data-t="41:55" data-who="Rohan" data-en="Our models are not even close to solving this problem. So for us, it's like something that we've talked about, something that we are getting close to as sort of like getting to that point because that's our inner loop to having more efficient architectures." aria-label="回原文"></button>。

当主持人问及，什么时候他们才算真正找到了新架构？Jerry 给出了一个非常极客的回答：**系统展现出长期适应性**。当有一天，实验室里的系统每天都在持续变好，哪怕整个团队都去度假了，回来一看模型依然靠着和现实世界的交互，把自己的工作做得越来越好，那就说明他们真正成功了 <button class="pd-ts" data-t="47:38" data-who="Rohan" data-en="So I think what we are looking for is systems that learn at test time. And if we see meaningful, long-term adaptability of our systems, and we're joking, but it's real." aria-label="回原文"></button>。Jerry 甚至开玩笑说，他们会不断延长假期的时间，直到实现“永久度假”。

## 本集带走
1. **Transformer 的天花板在于无法持续学习**：当前的模型在实验室用静态数据训练，一旦部署到动态的现实世界，很快就会因为缺乏新知识而贬值。我们需要能在“测试时”持续从用户真实交互中学习的新机制。
2. **算力效率的突破口在于端到端优化**：把预训练和强化学习割裂开来优化是低效的。此外，当前依赖生成长文本（如思维链）来换取推理深度的做法极其浪费算力，新架构必须从根本上解决计算深度不足的问题。
3. **创新受阻于大厂短期的竞争周期**：巨头们深陷“下个季度发布模型”的商战泥潭，不敢投入资源做可能一两年才见效的底层架构替代方案，这给 Core Automation 这种原生时代的实验室留下了从底层系统（如内核开发）颠覆局面的巨大机会。

<div class="pd-sec">全部金句 <span>8 条(中英对照,已过机器闸门)</span></div>

> 替换 Transformer 的第一步，是深刻地感激它们能带我们走多远。  
> *The first step to replacing Transformers is appreciating deeply how far they were able to carry us.*  
> —— Sonja · [01:50] ^q1

> 我认为问题在于，模型是在实验室里训练的，却部署在现实世界中。  
> *What I think is the issue is that the models are being trained in the lab and are being deployed in the real world.*  
> —— Jerry Tworek · [05:11] ^q2

> 我们可能正在花费比以往任何时候都多的算力在从经验中学习上，但强化学习并不是从经验中学习的终点。  
> *we probably are spending the most compute than ever on learning from experience, but reinforcement learning is not the end of learning from experience.*  
> —— Jerry Tworek · [00:30] ^q3

> 如果 Transformer 是有利可图的，如果你可以花费更多的精力和资源来扩大 Transformer 以在下一个季度获胜，那么很难把大量的注意力和大量的精力投入到可能在一两年内更好或可能重新定义该领域的事情上。  
> *If Transformer is profitable and if you can spend more efforts and more resources scaling Transformer to win in the next quarter, it's very hard to put at least a lot of attention and a lot of energy to work on something that will maybe better or maybe will redefine the field in a year or two.*  
> —— Jerry Tworek · [13:28] ^q4

> 因为你得不到多少反馈，而且你花费了更多的计算，因为你必须解码这整条长思维链才能将这一点点信息输入到网络中。  
> *Because you don't get much feedback and you're spending a lot more compute because you have to decode all this long chain of thought to get this one bit of information into the network.*  
> —— SPEAKER_01 · [31:37] ^q5

> 对我来说，AGI 是一个可以在没有任何人在循环中的情况下自我改进的模型。  
> *For me, AGI is a model that can improve itself without human in the loop in any way.*  
> —— Jerry Tworek · [38:21] ^q6

> 但是，到目前为止，用模型把人类从循环中移除实际上出了名地、出了名地困难。  
> *But removing humans from loops with models has been actually notoriously, notoriously difficult so far.*  
> —— Jerry Tworek · [38:45] ^q7

> 但这需要高水平品味的人类，就像世界上大概只有三个人，并且在四周内花费大约 10 万美元在这些编码智能体上，才能得到一个速度快 60 倍的解决方案。  
> *But it requires the high-taste human, like there's maybe three people in the world, and spend about $100,000 on these coding agents over a span of four weeks to get to a solution that's 60x faster.*  
> —— SPEAKER_01 · [41:10] ^q8

*本集关键词:AI 架构 · Transformer 替代品 · 强化学习 · 自动化实验室 · 底层算子优化*

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
    // 深浅色进右栏末尾 —— 但右栏在窄屏可能不显示,槽跟着一起没了。
    // 只在槽真的看得见时才搬进去,看不见就退回顶栏(🔒 #2:任何屏宽都得有入口)。
    var side=document.querySelector('.right.sidebar'), slot=null;
    if(side){
      slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      // 同上:槽是空的(:empty → display:none),要判**右栏**看不看得见
      if(!(side.offsetWidth || side.offsetHeight || side.getClientRects().length)) slot=null;
    }
    grab('.darkmode', slot || acts);
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

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
