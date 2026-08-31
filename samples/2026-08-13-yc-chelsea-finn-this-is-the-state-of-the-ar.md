---
title: 让机器人在真实世界干活：Physical Intelligence 的通用机器人之路
podcast: Y Combinator Startup Podcast
date: 2026-08-13
source_url: undefined
duration: "58:16"
type: episode
cover: "#64748b"
image: "/covers/2026-08-13-yc-chelsea-finn-this-is-the-state-of-the-ar.jpg"
description: 用强化学习+多时间尺度记忆解决可靠性，用单一通用大模型实现开箱即用与组合泛化。
host: "[[Chelsea Finn]]"
companies: ["[[Physical Intelligence]]", "[[Waymo]]"]
concepts: ["[[ChatGPT]]", "[[物理 AI]]", "[[强化学习]]", "[[长期自主性]]", "[[组合泛化]]", "[[价值函数]]", "[[记忆]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/covers/2026-08-13-yc-chelsea-finn-this-is-the-state-of-the-ar.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-13-yc-chelsea-finn-this-is-the-state-of-the-ar#post","headline":"让机器人在真实世界干活：Physical Intelligence 的通用机器人之路","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-13-yc-chelsea-finn-this-is-the-state-of-the-ar","mainEntityOfPage":"https://talk.solomind.cc/2026-08-13-yc-chelsea-finn-this-is-the-state-of-the-ar","description":"用强化学习+多时间尺度记忆解决可靠性，用单一通用大模型实现开箱即用与组合泛化。","datePublished":"2026-08-13","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-08-13-yc-chelsea-finn-this-is-the-state-of-the-ar.jpg","about":[{"@type":"Person","name":"Chelsea Finn"},{"@type":"Organization","name":"Physical Intelligence"},{"@type":"Organization","name":"Waymo"},{"@type":"Thing","name":"ChatGPT"},{"@type":"Thing","name":"物理 AI (physical AI)"},{"@type":"Thing","name":"强化学习 (reinforcement learning)"},{"@type":"Thing","name":"长期自主性 (long-term autonomy)"},{"@type":"Thing","name":"组合泛化 (compositional generalization)"},{"@type":"Thing","name":"价值函数 (value function)"},{"@type":"Thing","name":"记忆 (memory)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"让机器人在真实世界干活：Physical Intelligence 的通用机器人之路","item":"https://talk.solomind.cc/2026-08-13-yc-chelsea-finn-this-is-the-state-of-the-ar"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>让机器人在真实世界干活：Physical Intelligence 的通用机器人之路</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 让机器人在真实世界干活：Physical Intelligence 的通用机器人之路

<div class="pd-byl"><b>Chelsea Finn</b> · 2026-08-13</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-13-yc-chelsea-finn-this-is-the-state-of-the-ar.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">最近发生的一件真正令人兴奋的事情是，一年前 Waymo 达到了每周二十五万次自主行程，这表明确实有可能开发一种基于机器学习的系统，可以直接以值得信赖和自主的方式在物理世界中运行。</div><div class="a">— Chelsea Finn <button class="pd-ts" data-t="05:10" data-who="Chelsea Finn" data-en="Now, one really exciting thing to kind of highlight that has happened recently is a year ago Waymo passed the quarter of a million weekly autonomous rides, suggesting that it is really possible to develop a machine learning based system that can operate in a trustworthy and autonomous way directly in the physical world." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Chelsea Finn]]
>
> **公司** [[Physical Intelligence]] · [[Waymo]]
>
> **概念** [[ChatGPT]] · [[物理 AI]] · [[强化学习]] · [[长期自主性]] · [[组合泛化]] · [[价值函数]] · [[记忆]]

训练一个通用机器人模型，最难的不是让它学会做某个特定任务，而是让它在真实物理世界里连续干几个小时的活还不犯错——在真实世界里，错误代价高昂，机器人必须能够「自己让自己变得更可靠」，而不是像现有的聊天机器人那样依赖人类盯着纠错。

过去机器学习在商业上的成功（从产品推荐到 [[ChatGPT|ChatGPT]]），大多是把 AI 当顾问：模型给建议，人来拍板。错了也没关系，人能兜底。

但[[物理 AI|物理 AI]] 和机器人完全不同——它必须自己直接做出影响物理世界的决定，因此它必须比以往部署的机器学习系统少犯错得多 <button class="pd-ts" data-t="04:54" data-who="" data-en="And I think that actually physical AI and robotics is pretty different from this, where if we think about physical AI that are actually operating in the physical world, they have to be directly making decisions that affect the physical world." aria-label="回原文"></button>。一年前 [[Waymo|Waymo]]（自动驾驶公司）做到了每周超过二十五万次自主行程，这给整个物理 AI 领域带来了巨大的希望：机器学习系统确实能在物理世界里以可信赖的方式长期自主运行 <button class="pd-ts" data-t="05:10" data-who="" data-en="And as a result, this requires us to develop physical AI systems that make far fewer mistakes than the machine learning systems that have been deployed thus far." aria-label="回原文"></button>。

## 长期自主性：怎么让机器人「上可靠」
要让机器人有用，就得让它长时间自主运行，比如让一台机器人连续给你做咖啡。做咖啡听起来简单，但操作无底把手（用来装咖啡粉的部件）需要极其精准的受力控制，得平稳端着装满液体的杯子不洒，还必须对「时机」有精确感知。我们不仅要做这任务，还要把可靠度做到 90% 以上 <button class="pd-ts" data-t="06:36" data-who="" data-en="And it also needs to have an accurate sense of timing, which often isn't actually an issue in other areas of machine learning. And not only do we want to do this pretty challenging task, we want to do it with over 90% reliability." aria-label="回原文"></button>。

传统做法是收集数据、训练模型、评估，发现问题再加数据微调。但靠人工这样轮轴转，极难达到极高的可靠性。

真正的解法是：**让 AI 系统自己去自动迭代和寻找弱点** <button class="pd-ts" data-t="07:42" data-who="" data-en="And so what would be even better is if the AI system itself can iterate on the scenario in which you want it to have high reliability, where it on its own automatically seeks out places where it needs more data, where it needs more supervision." aria-label="回原文"></button>。这本质上是一种[[强化学习|强化学习]]（让模型通过不断试错、从失败中自我改进的方法）。但语言模型的强化学习动辄跑数百万次乃至上千万次，因为每次尝试只是在数据中心跑纯计算 <button class="pd-ts" data-t="08:32" data-who="" data-en="Which is that these algorithms have been trained with millions of attempts, or sometimes even tens of millions of attempts, by scaling up the compute. Because each attempt is simply running the language model in a data center just by using compute." aria-label="回原文"></button>；如果把这套搬进物理世界，哪怕只跑 100 万次一分钟的机器人任务，也得花 700 个机器人日，在现实里完全行不通 <button class="pd-ts" data-t="08:53" data-who="" data-en="This is even shorter than the Espresso task that I talked about. This would correspond to 700 robot days to get high reliability for that task. Now, maybe this isn't completely out of the question, but this would be quite challenging to do." aria-label="回原文"></button>。

为了把物理世界里的试错成本降下来，我们用了两招：
1. **尽早干预，避免死胡同轨迹**。比如机器人折纸箱时一把抓了两个粘在一起的箱子，如果让它继续硬折，对学习毫无帮助。

与其浪费时间，不如直接让人介入，远程操控机器人向它演示如何脱离困境，或干脆尽早结束这一回合，保证收集到的都是有用的经验数据 <button class="pd-ts" data-t="10:15" data-who="" data-en="And so that would be kind of wasting a lot of time on the robot attempting to go down the wrong path for solving the problem. And so instead of spending a lot of time trying to do that task, what we'll do is we'll actually have a human intervene and show the robot what to do and how to recover from that situation." aria-label="回原文"></button>。
2. **训练通用的[[价值函数|价值函数]]（评估好坏的模型）来分摊成本**。

与其针对每个单独任务去大量试错算平均值，不如在大量机器人视频上训练一个「能预测还要多久才能成功」的通用评估器。它能判断机器人是在取得进展，还是在越搞越砸，从而大幅减少学习所需的尝试次数 <button class="pd-ts" data-t="11:44" data-who="" data-en="But we can actually amortize this cost. Rather than trying to collect a lot of attempts for a single prompt, we can amortize this across different prompts and learn a much more general value estimate of what's good and what's bad and use this to improve with our autonomous experience." aria-label="回原文"></button>。

靠这套方法，我们在制作拿铁的任务上实现了连续 13 小时的可靠自主运行 <button class="pd-ts" data-t="14:35" data-who="" data-en="Kind of going back to this reliability question, we took this policy and we ran it not just once, but we ran it for 13 hours straight. And we basically wanted to evaluate, is this policy not only good at making a latte once, but can it do so reliably to the extent that it would be needed to be useful in the real world?" aria-label="回原文"></button>；在隔壁 Dandelion 巧克力工厂里完成了纸箱折叠贴标，在完全陌生的家庭环境里折叠从没见过的衣服。相比纯监督微调，仅强化学习这一步就把吞吐量提升了约 2 倍 <button class="pd-ts" data-t="16:12" data-who="" data-en="And so we're going to measure throughput, which kind of couples both success rate and speed. And we find that over the phases of training, from pre-training to an SFT-like stage to an RL post-training-like stage, we see a drastic increase in success rate in seed, in throughput, and specifically around a 2x throughput just from the RL stage itself, showing how we can get much greater reliability from reinforcement learning." aria-label="回原文"></button>。

## 要完成长任务，机器人需要「记忆」
大多数最先进的机器人基础模型是没有[[记忆|记忆]]的，只能根据当前的摄像头画面做即时反应。做单一重复动作没问题，但如果要执行连续多步的长任务，就必须有记忆来追踪进度 <button class="pd-ts" data-t="18:16" data-who="" data-en="The videos that I showed before didn't have any context either. But if you want to do a long task that involves multiple different steps in sequence, then memory is critical for tracking progress of the steps that you've completed so far." aria-label="回原文"></button>。

为什么过去不给模型加记忆？因为太贵了。机器人一般以 50 赫兹（每秒 50 次）的频率采集 4 路摄像头画面，如果以 256 token（模型处理信息的基本单位）一张图来算，光 10 秒钟的视频记忆就是 50 万个 token，实时塞给模型根本算不过来；就算狠心降频到一秒一帧，仍是 1 万个 token，成本依然高得吓人 <button class="pd-ts" data-t="18:54" data-who="" data-en="There's a couple reasons for this that are technical and I'll talk through one of them which is that if you naively approach memory and try to feed in context like pass video to a robot foundation model say that you would just pass in 10 seconds of video maybe these 10 seconds of video is sampled at 50 hertz which is a common control frequency in robotics" aria-label="回原文"></button>。

我们的解法是多时间尺度记忆：
- **短期记忆**：保留约 10 秒的视频记忆，但用远比硬塞给模型高效得多的方式来计算和压缩。
- **长期记忆**：对于跨分钟、跨小时的历史，不再死磕视频，而是把发生过的事情在文本空间里总结成高度压缩的文字摘要，再喂给模型 <button class="pd-ts" data-t="19:49" data-who="" data-en="The first is a short-term video memory that has about 10 seconds of video memory, but is done so and computed much more efficiently than naively passing it into the model." aria-label="回原文"></button>。

有了这种记忆机制，机器人就能去完成诸如清理厨房这种长达 10 到 15 分钟的多步骤非重复任务，比如先用海绵擦台面、再用纸巾擦干、扔掉纸巾、把芥末放回冰箱、再把盘子放进橱柜 <button class="pd-ts" data-t="20:39" data-who="" data-en="So this is going to be a 10 to 15 minute task that's involved cleaning a kitchen. And the robot isn't just repeatedly making espresso over and over again. What it involves is wiping the counter with a sponge, kind of then drying the counter with a paper towel, throwing away the paper towel." aria-label="回原文"></button>。

## 迈向单一通用大模型
仅仅三年前的 2023 年，做机器人研究的惯例还是为每个单独项目从零收集定制数据集来训练。这就像 AI 发展早期，每个任务都得从零手搓。我们想做的是从预训练微调，跨越到像 GPT 那样开箱即用、甚至具备[[组合泛化|组合泛化]]能力的通用模型 <button class="pd-ts" data-t="24:58" data-who="" data-en="Specifically, how do we develop a single general purpose model that works out of the box and also shows compositional generalization? So this has two goals. The first is out of the box model." aria-label="回原文"></button>。

所谓组合泛化，就是像 2021 年的 DALI 结果能把牛油果和椅子这两个概念拼在一起生成同时展示这两个概念的东西一样，说明模型对概念有了真正的理解 <button class="pd-ts" data-t="26:09" data-who="" data-en="And specifically, when you have compositional generalization, when you can basically bridge the concept of an avocado and a chair and show that you can combine those two, it means that the model has at least some kind of conceptual understanding of what an avocado is and what a chair is, to the point that it can combine them into something that exhibits both concepts at the same time." aria-label="回原文"></button>。对应到机器人，这意味着它不需要把所有情况的组合都见一遍，就能举一反三。

我们用能拿到的所有数据（包括各种质量的机器人遥操作演示、机器人自己尝试的回放数据、人类视频和网络数据），去训练一个具有足够容量的大模型。要把如此异构（成分混杂且差异大）的数据喂进去，关键解锁点是**提供极其丰富的上下文提示**：除了记忆和任务指令，我们还向模型输入当下最该做的子任务指令、数据质量与长度等元数据，以及「几秒后该达到这种状态」的子目标图像作为提示 <button class="pd-ts" data-t="28:11" data-who="" data-en="But to fit data that's so heterogeneous, we also find it particularly important to prompt the model with all of the context that it needs in order to predict actions." aria-label="回原文"></button>。

这个单一 PIO7 模型，直接开箱就能做相当多的事情。更关键的是，如果我们测量它和微调过的 PIO6 模型的吞吐量和成功率，**这个没经过针对性微调的单一预训练模型，已经追上甚至超过了那些专门为特定下游任务进行强化学习后训练的微调专家模型** <button class="pd-ts" data-t="30:38" data-who="" data-en="But really the key question here is how does this pre-trained model compare to the specialists that were trained specifically for coffee making, specifically for box building that I talked about previously?" aria-label="回原文"></button>。

在组合泛化测试中，它表现出了惊人的举一反三能力。比如它能打开空气炸锅、放进红薯再关上——而训练集里几乎没有任何空气炸锅的数据 <button class="pd-ts" data-t="32:01" data-who="" data-en="After we did some analysis on the dataset, we actually found that our dataset was so diverse that it did actually have three episodes with air fryers in it. We expect that they likely weren't having an impact, and that even if we didn't include those exact three episodes, it likely would still work." aria-label="回原文"></button>；它还能在一个我们完全没采集过任何折衣服数据的大型工业机器人平台上，靠脑补子目标图像，第一次尝试就把衣服折好，性能甚至逼近人类远程操作 <button class="pd-ts" data-t="33:32" data-who="" data-en="And what we see in this video is we indeed did see that it kind of compositionally generalized in this manner. The first time we saw the robot do this, we were like floored because there was no training data for this task." aria-label="回原文"></button>。消融实验也证明了：越是多样化的数据，对泛化越关键；而有了元数据提示，模型甚至能从以前被认为是拖后腿的低质量数据里榨取出更多价值 <button class="pd-ts" data-t="36:38" data-who="" data-en="Whereas with the metadata prompting, The performance actually increases when you add that low quality data, suggesting that it's actually able to get a lot more juice out of even low quality data when you include this kind of prompting." aria-label="回原文"></button>。

> 【背景】讲者提到机器人领域现在已经进入「GBT 和 DALI 时代」，结合前文提到的 2021 年组合泛化里程碑及语境，这里的 GBT/DALI 分别指代语言大模型 GPT 和图像生成模型 DALL·E。

## 本集带走
- **物理 AI 容错率极低**：要在真实世界落地，机器人不能像聊天机器人那样依赖人纠错，必须做到极高的可靠性才能实现长时间自主。
- **应对死胡同轨迹**：发现机器人陷入无效操作时，尽早让人介入带它脱困或直接终止回合，别让它在物理世界里白白浪费时间和硬件损耗。
- **价值函数降本**：与其对单一任务暴力试错，不如训练一个通用的「好与坏」价值评估器，极大压缩从经验中学习所需的尝试次数。
- **给大模型加记忆的省钱法**：短期视频记忆靠高效压缩计算，跨度长达几小时的历史则先提炼成文字摘要，用多时间尺度组合绕过算力瓶颈。
- **通用模型的上下文解锁法**：训练具身大模型吃下高度混杂的数据时，子任务指令、元数据和子目标图像等详尽提示是榨取数据价值的关键。
- **用小成本冷启动转行机器人**：买台便宜机器人，在卧室微调开源模型（如 π0），把调出来的成果作为简历去敲开公司的大门。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">最近发生的一件真正令人兴奋的事情是，一年前 Waymo 达到了每周二十五万次自主行程，这表明确实有可能开发一种基于机器学习的系统，可以直接以值得信赖和自主的方式在物理世界中运行。</span>  
> *Now, one really exciting thing to kind of highlight that has happened recently is a year ago Waymo passed the quarter of a million weekly autonomous rides, suggesting that it is really possible to develop a machine learning based system that can operate in a trustworthy and autonomous way directly in the physical world.*  
> <span class="qm">—— Chelsea Finn · [05:10]</span> ^q1

> <span class="qz">当我们第一次看到机器人这样做时，我们惊呆了，因为这个任务没有任何训练数据。</span>  
> *The first time we saw the robot do this, we were like floored because there was no training data for this task.*  
> <span class="qm">—— Chelsea Finn · [33:32]</span> ^q2

> <span class="qz">而有了元数据提示，当你添加低质量数据时性能实际上增加了，这表明当你包含这种提示时，它实际上能够从即使是低质量数据中获得更多收益。</span>  
> *Whereas with the metadata prompting, the performance actually increases when you add that low quality data, suggesting that it's actually able to get a lot more juice out of even low quality data when you include this kind of prompting.*  
> <span class="qm">—— Chelsea Finn · [36:35]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-27-yc-jensen-huang-the-mindset-that-built-nvid|Jensen Huang 谈 NVIDIA 创业史、物理 AI 与创始人模式]]<span class="pd-rz">同公司:Waymo · 同概念:物理 AI (physical AI)、ChatGPT、强化学习 (reinforcement learning)</span>
- [[2026-08-04-yc-waymo-co-ceo-dmitri-dolgov-move-fast-and|Waymo 谈物理 AI 的七条实战教训]]<span class="pd-rz">同公司:Waymo · 同概念:物理 AI (physical AI)</span>
- [[2025-10-23-lennys-al-engineering-101-with-chip-huyen|Chip Huyen：别追 AI 新闻了，真正提升 AI 产品的是这些事]]<span class="pd-rz">同概念:强化学习 (reinforcement learning)、ChatGPT</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|估值150亿的隐形AI公司：我们最好的工作是独自安静地完成]]<span class="pd-rz">同公司:Waymo · 同概念:ChatGPT、物理 AI (physical AI)</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:ChatGPT、记忆 (memory)</span>
- [[2025-11-16-lennys-the-godmother-of-ai|AI 教母李飞飞:从 ImageNet 到空间智能]]<span class="pd-rz">同公司:Waymo · 同概念:ChatGPT、强化学习 (reinforcement learning)</span>

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
