---
title: Rich Sutton：LLM 不是全部智能，真正的AI必须持续学习
podcast: Training Data
date: 2026-08-18
source_url: undefined
duration: "53:12"
type: episode
cover: "#64748b"
image: "/covers/2026-08-18-trainingdata-rich-sutton-and-khurram-javed-why-ai-mod.jpg"
description: 强化学习之父认为当前LLM范式只覆盖了智能的一小部分，真正出路是让系统从自身经验中持续学习。
guests: ["[[Rich Sutton]]"]
companies: ["[[Oak Lab]]"]
concepts: ["[[苦涩的教训]]", "[[大世界假说]]", "[[持续学习]]", "[[合成数据]]", "[[灾难性遗忘]]", "[[持续反向传播]]", "[[大语言模型]]", "[[智能体]]", "[[强化学习]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/covers/2026-08-18-trainingdata-rich-sutton-and-khurram-javed-why-ai-mod.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-18-trainingdata-rich-sutton-and-khurram-javed-why-ai-mod#post","headline":"Rich Sutton：LLM 不是全部智能，真正的AI必须持续学习","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-18-trainingdata-rich-sutton-and-khurram-javed-why-ai-mod","mainEntityOfPage":"https://talk.solomind.cc/2026-08-18-trainingdata-rich-sutton-and-khurram-javed-why-ai-mod","description":"强化学习之父认为当前LLM范式只覆盖了智能的一小部分，真正出路是让系统从自身经验中持续学习。","datePublished":"2026-08-18","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-08-18-trainingdata-rich-sutton-and-khurram-javed-why-ai-mod.jpg","about":[{"@type":"Person","name":"Rich Sutton"},{"@type":"Organization","name":"Oak Lab"},{"@type":"Thing","name":"苦涩的教训 (The Bitter Lesson)"},{"@type":"Thing","name":"大世界假说 (big world hypothesis)"},{"@type":"Thing","name":"持续学习 (continual learning)"},{"@type":"Thing","name":"合成数据 (synthetic data)"},{"@type":"Thing","name":"灾难性遗忘 (catastrophic forgetting)"},{"@type":"Thing","name":"持续反向传播 (Continual Backprop)"},{"@type":"Thing","name":"大语言模型 (large language models)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"强化学习 (reinforcement learning)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Rich Sutton：LLM 不是全部智能，真正的AI必须持续学习","item":"https://talk.solomind.cc/2026-08-18-trainingdata-rich-sutton-and-khurram-javed-why-ai-mod"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Rich Sutton：LLM 不是全部智能，真正的AI必须持续学习</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Rich Sutton：LLM 不是全部智能，真正的AI必须持续学习

<div class="pd-byl"><b>Rich Sutton</b> · 2026-08-18</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-18-trainingdata-rich-sutton-and-khurram-javed-why-ai-mod.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">你需要花哨的算法，但你想要那些将随计算扩展的花哨算法。</div><div class="a">— Rich Sutton <button class="pd-ts" data-t="09:33" data-who="Rich Sutton" data-en="You need fancy algorithms, but you want fancy algorithms that will scale with computation." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Rich Sutton]]
>
> **公司** [[Oak Lab]]
>
> **概念** [[苦涩的教训]] · [[大世界假说]] · [[持续学习]] · [[合成数据]] · [[灾难性遗忘]] · [[持续反向传播]] · [[大语言模型]] · [[智能体]] · [[强化学习]]

<div class="pd-tldr"><b>一句话</b>强化学习之父认为当前LLM范式只覆盖了智能的一小部分，真正出路是让系统从自身经验中持续学习。</div>

[[大语言模型|大语言模型]]宣称能造出博士水平的专家——但这个东西运行时权重完全不更新，根本不再学习。[[Rich Sutton|Rich Sutton]] 说，这不叫智能，这叫奇怪 <button class="pd-ts" data-t="20:30" data-who="Unknown" data-en="So, you know, I am not the weird one. It's you guys that are the weird one that think that that's possible." aria-label="回原文"></button>。

## 「苦涩的教训」到底在说什么

很多人把《[[苦涩的教训|苦涩的教训]]》简化成「算力万能论」，但 Rich 最近用 26 个词重新概括：不要被人类知识分心，专注于随计算扩展的方法——比如搜索和学习 <button class="pd-ts" data-t="09:03" data-who="Unknown" data-en="I recently made a post where I tried to do the bitter lesson in 26 words. It goes something like, don't be distracted by human knowledge as AI traditionally has been many times." aria-label="回原文"></button>。它不是说不要花哨算法，而是要那些能随算力一起扩展的花哨算法 <button class="pd-ts" data-t="09:33" data-who="Unknown" data-en="It's not saying you don't need fancy algorithms. You need fancy algorithms, but you want fancy algorithms that will scale with computation. Rather than scaling with data." aria-label="回原文"></button>。

LLM 是苦涩教训的正面例子，也是反面例子。正面在于它靠扩展算力吸收了整个互联网；反面在于互联网是有限的，而世界比互联网大得多 <button class="pd-ts" data-t="10:39" data-who="Unknown" data-en="The internet is finite and it's hard to get more examples. And the world is big and the world is massively bigger than everything we stored on the internet. And so in the end, it seems like it could be, I guess that would be a positive example of when" aria-label="回原文"></button>。一旦互联网数据用完，这条路就撞墙了。

## 合成数据不是出路，大世界才是

现在基础模型实验室都在做[[合成数据|合成数据]]，想绕过互联网数据枯竭的问题。Rich 直接说：那是大错误 <button class="pd-ts" data-t="11:25" data-who="Unknown" data-en="No. Why? That's just a big mistake." aria-label="回原文"></button>。他在阿尔伯塔团队提出了「[[大世界假说|大世界假说]]」：世界极其巨大，有无限多东西要学，任何合成数据集都是「小世界」<button class="pd-ts" data-t="11:47" data-who="Unknown" data-en="Kuram, who eventually wrote it up as a paper. There's a little paper called the big world hypothesis. The big world is..." aria-label="回原文"></button>。

更关键的问题是：谁来决定什么是好的合成数据？答案是人类专家 <button class="pd-ts" data-t="12:31" data-who="Unknown" data-en="Because I can write a program that can output a lot of synthetic data, which would hurt programs. Right now, I would say humans decide, and that's the bottleneck where, okay, you can have humans deciding how to generate these datasets, but you need human experts who know what's a good dataset and what's a bad dataset for that approach to scale." aria-label="回原文"></button>。

就算你写了程序生成合成数据，那个程序也是人写的，生成的是人设想的世界——[[智能体|智能体]]自己并没有在生成经验 <button class="pd-ts" data-t="13:05" data-who="Unknown" data-en="It's not something that the agent is generating itself. Some human has to decide what is the right synthetic data to generate, and that requires human expertise." aria-label="回原文"></button>。想要一个用回声定位飞行的无人机？

你得先请领域专家搞清楚正确数据是什么 <button class="pd-ts" data-t="13:24" data-who="Unknown" data-en="What's the right synthetic data for that? I think you would need to hire domain experts to go figure out what is the right data and generate it. And then maybe you would be able to learn from that." aria-label="回原文"></button>。所以合成数据这条路，本质上还是被人类专业知识卡住。

自动驾驶在仿真里训练算不算反例？Rich 反问：建那个仿真花了多少工程师？

而且他们还得反复修仿真，因为从仿真到现实总有差距 <button class="pd-ts" data-t="16:50" data-who="Unknown" data-en="Yeah, so I think the important question to ask here is how many engineers were involved in building that simulation? And are we ready to say that the only problem worth solving are those where we can hire a large team of engineers to first make a simulation?" aria-label="回原文"></button>。如果让智能体自己建模型、自己从经验里学，模型错了它能自己修，不需要等人类发现 <button class="pd-ts" data-t="17:43" data-who="Unknown" data-en="The agent can learn a model from its own experience. And when the agent learns it, it's much better because if the model is incorrect, it can fix it by continuing learning." aria-label="回原文"></button>。

## 核心论点：系统必须从自身经验中持续学习

当前 LLM 的根本问题不是预训练或后训练做得不够多，而是部署之后权重就冻住了 <button class="pd-ts" data-t="23:35" data-who="Unknown" data-en="They don't learn after that. The only point that the big disagreement is we don't let them learn after that. Yeah, we don't let them learn after that." aria-label="回原文"></button>。你可以给它更多上下文改变状态，但模型本身没有在学习 <button class="pd-ts" data-t="24:01" data-who="Unknown" data-en="But the model is not learning. Cursors, Tab, AutocompleteModel. It is, you know, it does get updated based on... Those models, those weights change." aria-label="回原文"></button>。

Cursors、Tab 这些工具的权重确实在更新，但做法是收集大量用户数据做批量更新——如果你想教模型某件具体的事，你还得跟其他十万个用户抢 <button class="pd-ts" data-t="24:21" data-who="Unknown" data-en="So the way they do it, as far as I understand, is a lot of people are using Tab. They collect all this data, so coming from millions of users or thousands of users, and then they do one update of the policy from this batch data." aria-label="回原文"></button>。这不是真正的个性化[[持续学习|持续学习]]。

Rich 举了一个很有说服力的例子：人失去本体感觉（告诉你身体姿态的内部感知）后完全无法走路，因为这层知识深植在大脑里；但两三年后，人能学会用视觉反馈重新走路 <button class="pd-ts" data-t="25:28" data-who="Unknown" data-en="When human go through something that changes their mind or some sensors, you can see them adapt. So for example, we have proprioception, we have internal sensors that tell us how the body's positioned, and we use this for walking." aria-label="回原文"></button>。大脑的可塑性极强——旧知识不再成立时，它能更新掉。这就是我们想要系统拥有的能力 <button class="pd-ts" data-t="26:04" data-who="Unknown" data-en="When it stops being true, it can go and update that and get rid of that. And that is the capability I think that's extremely useful we would want in our systems." aria-label="回原文"></button>。

## 我们缺的不是算力，是两个关键能力

Rich 认为当前领域缺两个核心能力，而 [[Oak Lab|Oak Lab]] 就是为攻克它们而建：

**第一，持续深度学习。** 你不能拿一个样本就去更新整个模型，那样会摧毁之前的知识——这就是[[灾难性遗忘|灾难性遗忘]] <button class="pd-ts" data-t="39:24" data-who="Unknown" data-en="You can do the naive thing, but then you'll see all sorts of problems. For example, if you say, I'm going to take one sample and then I'm going to update my whole model with that one sample, you will run into this problem that now all of the previous knowledge in the model, it's impacted negatively." aria-label="回原文"></button>。

Rich 团队在 Nature 上发表了「[[持续反向传播|持续反向传播]]」算法，核心做法是两步：一是每个权重有独立的步长（通过元学习获得），大部分权重的步长极小所以不会被新数据冲掉 <button class="pd-ts" data-t="40:16" data-who="Unknown" data-en="Well, first you need to do what we call step size optimization. And it means every weight in your network has to have a separate step size. So some will move fast, some will move slow." aria-label="回原文"></button>；二是不断注入随机初始化的新单元，让反向传播来测试它们是否管用，而不是只靠梯度慢慢调 <button class="pd-ts" data-t="41:46" data-who="Unknown" data-en="A couple years ago and it is exactly like backprop but every but you also plant new seeds of units that are newly initialized with random weights backprop only has random weights at the beginning of time and then as you go on all that randomness all that variety from the randomness gets used up" aria-label="回原文"></button>。但这个算法不能直接套到现有模型上，因为它要元学习「怎么学」，必须从头训练 <button class="pd-ts" data-t="42:34" data-who="Unknown" data-en="So I don't think that you could take an existing model and say, I'm going to just start updating it with these algorithms, because these algorithms meta learn how to learn." aria-label="回原文"></button>。

**第二，学习模型然后用模型做规划。** AlphaGo 和数学证明能做规划，是因为我们已知游戏规则和算子 <button class="pd-ts" data-t="35:57" data-who="Unknown" data-en="We can do the math things and we can do AlphaGo because the games, we know the model. We know how the moves work. And in math, we know what the operators are." aria-label="回原文"></button>。

但真实世界里，智能体必须自己学习世界的模型，然后基于自我发现的抽象来做规划——目前领域里几乎没有这种实例 <button class="pd-ts" data-t="36:23" data-who="Unknown" data-en="But if we have to learn the models, there are no, I'm going to say it, it's probably maybe a weird example, but a counter example, but I can see that there's no instances of learning the model and then planning with the model in our field." aria-label="回原文"></button>。阿尔伯塔计划的 12 步中，后半部分全在解决这个问题：让智能体为自己所处的世界发现正确的抽象 <button class="pd-ts" data-t="37:47" data-who="Unknown" data-en="And then if you knew how to do the abstraction rights and like the second half of the steps are all about how to get the abstractions right. So, and not only my abstractions right, what I mean, but I don't mean get the right abstractions because no one can say what the right abstractions are." aria-label="回原文"></button>。

## 为什么大厂做不了这件事

Rich 的愿景是：一个单一设计，部署到不同环境中，每个版本从自己的经验中持续学习，形成从小到大的完整知识谱系，并且自洽、自维护 <button class="pd-ts" data-t="44:36" data-who="Unknown" data-en="a very big you know it's it's more it's like your your uh space flight example but it's just kind of more common sense to think about because we all many of us take airplanes and all of us use abstractions on all kinds of our life and even even the squirrels use abstractions so to have that spectrum of knowledge from the small to the big" aria-label="回原文"></button>。更激进的目标是万亿参数、20 瓦功耗——用现有技术不可能，但他算了一笔账：按摩尔定律十年两个数量级，今天能做到 2000 瓦就行，他认为可以 <button class="pd-ts" data-t="47:14" data-who="Unknown" data-en="If you can do it with 2000 watts today, then in 10 years, you'll be able to do it for 20 watts. I think you can do it for 2,000 watts. You have lots of people at research labs that have access to way more than that." aria-label="回原文"></button>。

那为什么没人做？因为转向新范式，性能一定先变差再变好 <button class="pd-ts" data-t="48:20" data-who="Unknown" data-en="In some sense, the way I think about it is that we are stuck in a local minnow. So if we want to move towards these new kind of algorithms, it is almost impossible that things will not get worse before they get better." aria-label="回原文"></button>。

大厂被现有产品锁死，不可能走一条「先变糟」的路 <button class="pd-ts" data-t="48:45" data-who="Unknown" data-en="And these big labs, they are so locked into a product that they It is not possible for them to pursue a path where things get worse first. Because their current paradigm allows them to keep scaling and this new paradigm they have to take a bet and they..." aria-label="回原文"></button>。而且大多数人根本不相信这事儿可能——你不信，就不会去攻克那些技术难题 <button class="pd-ts" data-t="47:51" data-who="Unknown" data-en="At least when I look at different research groups, I don't even see anyone believing in it's possible. And I think if you don't believe in it, you're just not going to work on the technical problems and work through them." aria-label="回原文"></button>。

Rich 也不否认 LLM 是重大突破，但他认为那只覆盖了智能的约四分之一——语言的流畅使用 <button class="pd-ts" data-t="50:53" data-who="Unknown" data-en="It's an important part. You know, it's like 20% or a quarter of intelligence. There's more." aria-label="回原文"></button>。把一个子集当成全部，反而阻碍了真正的前进 <button class="pd-ts" data-t="50:43" data-who="Unknown" data-en="So it's frustrating to me that we have to, you know, just celebrate that we've made this great progress in the subset of the problem of AI and enjoy that. Instead, it has to pretend to be all of AI." aria-label="回原文"></button>。

## 本集带走

- **大世界假说**：世界比互联网大得多，合成数据本质上还是人类专家在瓶颈处——真正出路是让智能体从自身经验中学
- **LLM 的根本缺陷不是数据不够，是部署后不学习**：权重冻住 = 拒绝从经验中更新，这不是心智该有的样子
- **持续深度学习的关键不是 batching，是算法**：每个权重独立步长 + 持续注入新单元让反向传播去测试，但必须从头训练，不能套现有模型
- **学习模型 → 用模型规划**：这是领域里几乎不存在的能力组合，AlphaGo 能规划是因为规则已知，真实世界需要智能体自己发现抽象
- **大厂做不了是因为路径依赖**：新范式必然先变差再变好，被产品锁死的团队走不了这条路

<div class="pd-sec">全部金句 <span>9 条</span></div>

> <span class="qz">你需要花哨的算法，但你想要那些将随计算扩展的花哨算法。</span>  
> *You need fancy algorithms, but you want fancy algorithms that will scale with computation.*  
> <span class="qm">—— Rich Sutton · [09:33]</span> ^q1

> <span class="qz">而世界是很大的，世界比我们存储在互联网上的一切都要巨大得多。</span>  
> *And the world is big and the world is massively bigger than everything we stored on the internet.*  
> <span class="qm">—— Rich Sutton · [10:39]</span> ^q2

> <span class="qz">世界是无限复杂的，对它的任何模拟都是微观的。</span>  
> *The world is infinitely complex and any simulation of it is like microscopic.*  
> <span class="qm">—— Rich Sutton · [15:21]</span> ^q3

> <span class="qz">我不是那个奇怪的人。你们这些认为那可能的人才是奇怪的人。</span>  
> *I am not the weird one. It's you guys that are the weird one that think that that's possible.*  
> <span class="qm">—— Rich Sutton · [20:30]</span> ^q4

> <span class="qz">他们声称可以从一个根本不再学习的东西中制造出博士水平的体验和专业知识。</span>  
> *They claim they can make a PhD level experience and expertise out of something that doesn't learn at all anymore.*  
> <span class="qm">—— Rich Sutton · [20:35]</span> ^q5

> <span class="qz">唯一的巨大分歧点是我们在那之后不让它们学习。</span>  
> *The only point that the big disagreement is we don't let them learn after that.*  
> <span class="qm">—— SPEAKER_00 · [23:35]</span> ^q6

> <span class="qz">有些情况下人们会完全丧失这种能力，然后他们根本无法走路，因为这字面上就是他们行走策略的基础。它是根植于大脑中的。但在两三年的时间里，他们可以通过看着自己的双脚重新学会走路。</span>  
> *There are cases where people lose this ability completely and then they can't walk at all because that is literally the foundation of their walking policies. It is ingrained in the brain. But then over the course of two, three years, they can learn to walk again by looking at their feet.*  
> <span class="qm">—— SPEAKER_00 · [25:35]</span> ^q7

> <span class="qz">所以如果我们想要转向这些新型算法，事情在变好之前几乎不可能不先变糟。</span>  
> *So if we want to move towards these new kind of algorithms, it is almost impossible that things will not get worse before they get better.*  
> <span class="qm">—— SPEAKER_00 · [48:20]</span> ^q8

> <span class="qz">相反，它必须假装是所有的人工智能。</span>  
> *Instead, it has to pretend to be all of AI.*  
> <span class="qm">—— Rich Sutton · [50:43]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-29-trainingdata-building-the-automated-agi-lab-core-auto|Transformer 已见顶?OpenAI 与 Google 双雄离职造新架构]]<span class="pd-rz">同概念:强化学习 (reinforcement learning)、持续学习 (continual learning)、预训练 (pre-training)</span>
- [[2025-10-23-lennys-al-engineering-101-with-chip-huyen|Chip Huyen：别追 AI 新闻了，真正提升 AI 产品的是这些事]]<span class="pd-rz">同公司:Cursor · 同概念:强化学习 (reinforcement learning)、后训练 (post-training)</span>
- [[2026-06-10-talks-barney-hussey-yeo-in-conversation-with-j|Clio 的 AI 赌注：从扑克到财务健康]]<span class="pd-rz">同概念:智能体 (agent)、强化学习 (reinforcement learning)、监督学习 (supervised learning)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-27-lennys-pricing-and-scaling-your-ai-product-madh|AI 定价的黄金象限：别把 20% 的价值白送]]<span class="pd-rz">同公司:Cursor · 同概念:智能体 (agent)</span>
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同公司:Cursor · 同概念:智能体 (agent)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同公司:Cursor · 同概念:智能体 (agent)</span>

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
  // 故再兜一条 history.length>1(站内点进必有返回历史)。命中「直开」给 body 打 .pd-direct,CSS 切显隐。
  function direct(){
    var ref = document.referrer || '';
    var fromSite = (ref.indexOf(location.origin) === 0) || history.length > 1;
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
