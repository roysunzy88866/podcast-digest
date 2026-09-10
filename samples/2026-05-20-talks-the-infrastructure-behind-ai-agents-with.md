---
title: Base 10 的 Julian：推理正在从「租用智能」走向「拥有智能」
podcast: 精选演讲
date: 2026-09-10
source_url: undefined
duration: "23:41"
type: episode
cover: "#64748b"
description: AI 基础设施公司 Base 10 的 Julian 讲为什么企业会转向自建后训练模型，以及智能体时代推理栈的演变与容量困局。
host: "[[Julian]]"
companies: ["[[Base 10]]"]
concepts: ["[[推理]]", "[[专用推理]]", "[[开源模型]]", "[[后训练]]", "[[持续学习]]", "[[GPU 容量]]", "[[分布式推理]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-05-20-talks-the-infrastructure-behind-ai-agents-with#post","headline":"Base 10 的 Julian：推理正在从「租用智能」走向「拥有智能」","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-05-20-talks-the-infrastructure-behind-ai-agents-with","mainEntityOfPage":"https://talk.solomind.cc/2026-05-20-talks-the-infrastructure-behind-ai-agents-with","description":"AI 基础设施公司 Base 10 的 Julian 讲为什么企业会转向自建后训练模型，以及智能体时代推理栈的演变与容量困局。","datePublished":"2026-09-10","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Julian"},{"@type":"Organization","name":"Base 10"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"专用推理 (dedicated inference)"},{"@type":"Thing","name":"开源模型 (open source models)"},{"@type":"Thing","name":"后训练 (post-training)"},{"@type":"Thing","name":"持续学习 (continual learning)"},{"@type":"Thing","name":"GPU 容量 (capacity)"},{"@type":"Thing","name":"分布式推理 (distributed)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Base 10 的 Julian：推理正在从「租用智能」走向「拥有智能」","item":"https://talk.solomind.cc/2026-05-20-talks-the-infrastructure-behind-ai-agents-with"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Base 10 的 Julian：推理正在从「租用智能」走向「拥有智能」</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Base 10 的 Julian：推理正在从「租用智能」走向「拥有智能」

<div class="pd-byl"><b>Julian</b> · Base 10 创始人 · 2026-09-10</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-05-20-talks-the-infrastructure-behind-ai-agents-with.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们中没有人真正了解这个市场，因为一切都变化得太快。</div><div class="a">— Julian <button class="pd-ts" data-t="00:00" data-who="Julian" data-en="None of us really know anything about this market because things are going so fast." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Julian]]
>
> **公司** [[Base 10]]
>
> **概念** [[推理]] · [[专用推理]] · [[开源模型]] · [[后训练]] · [[持续学习]] · [[GPU 容量]] · [[分布式推理]]

「为了给客户好 10% 的体验，你愿意付 500% 的溢价。」这是 [[Base 10|Base 10]] 创始人 [[Julian|Julian]] 在这一集里反复强调的一件事——他做的是 AI [[推理|推理]]基础设施，服务的是全球增长最快的那批公司，而这批公司的共同点是：**能力就是一切，没人愿意在模型能力上妥协**。正因如此，他认为「开源已经变好了」最有力的证明，就是这么多挑剔的客户都在用[[开源模型|开源模型]]——因为没人想做那种取舍 <button class="pd-ts" data-t="17:57" data-who="Julian" data-en="You know, you work with a lot of these companies too. And the testament to how good open source has gone is how many people are using open source models because no one wants to make that trade-off." aria-label="回原文"></button>。

## 从「租用智能」到「拥有智能」

Julian 给 Base 10 的核心主张起了个名字：rented to owned intelligence(从租用到拥有的智能)。现在大多数公司用模型的方式是按 token 付费调用别人训练好的模型——像租房子，没有价值累积，对模型怎么跑、擅长什么、跑多快、跑在哪里都没有控制权 <button class="pd-ts" data-t="01:44" data-who="Julian" data-en="Yeah, so, you know, right now, the way that companies are using a lot of models is, you know, someone has post-trained a model or trained a model, and you're kind of just, you know, borrowing tokens or paying tokens in a transactional way of them." aria-label="回原文"></button>。而他看到的未来是：公司会用自己应用和工作流的数据做[[后训练|后训练]](post-training,拿自己的数据在现成模型上继续训练)，让模型非常擅长你要的那件具体的事，同时掌控 SLA、性能和区域部署要求——不仅拥有模型的质量，还拥有它的利用率、成本和运行工具 <button class="pd-ts" data-t="01:57" data-who="Julian" data-en="You don't have a ton of control of how that model is run, what is it good at, and also, you know, how fast it runs or, you know, where it runs. And to us, the idea of owned intelligence is that you are post-training your own models." aria-label="回原文"></button>。

支撑这个判断的另一个信念是：**世界不会只有两个模型，而是会有很多模型** <button class="pd-ts" data-t="00:43" data-who="Julian" data-en="Base 10 is an AI infrastructure company, and we focus on production-grade inference for the fastest-growing companies in the world. The way we like to think about this is that, you know, the future we see is that the world just doesn't have two models." aria-label="回原文"></button>。客户分三类，采用曲线各不相同：早期公司从好用的闭源模型起步、先做出零到一原型；高速增长的 AI 公司到了规模后会混用闭源、开源和自定义模型；企业级市场还早，目前采用集中在应用层而非基础设施层，但医疗和金融已经有苗头——原因很反直觉：医疗历史上一直是技术采用的落后者，但因为 AI 的投资回报率太清晰，这轮反而跑得很快 <button class="pd-ts" data-t="04:27" data-who="Julian" data-en="Or what do you think the reason is? Yeah, I think the ROI is so clear. Yeah." aria-label="回原文"></button>。

对应地，Base 10 的产品是三块：共享 API(多租户调用最好的开源模型，便捷入口但不管你的 SLA)、[[专用推理|专用推理]](这是他们的大头和立身之处，大多数客户都是专用方式使用)、以及训练/后训练产品 <button class="pd-ts" data-t="04:46" data-who="Julian" data-en="Yeah, we've seen a lot of that. And then kind of just going back to your original question, we kind of think of this today, we think of our product offering as three things." aria-label="回原文"></button>。

## 后训练的需求为什么是现在爆发的

其实 Base 10 在 2022 年就用一款叫 Blueprint 的产品做微调——「显然太早了」，Julian 自己承认 <button class="pd-ts" data-t="06:47" data-who="Julian" data-en="I think there's enough examples now of a post-training working. So, you know, we actually started venturing with fine tuning in. 2022 with a product called Blueprint is obviously too early then." aria-label="回原文"></button>。需求转变是三件事叠加：一是开源模型已经够好；二是足够多的公司到了「成本随规模上涨、又失去对想做之事的控制」的规模；三是 Cursor、Intercom、Decagon 这些公司已经给出了后训练奏效的成功样板，成了可照抄的新蓝图 <button class="pd-ts" data-t="06:14" data-who="Julian" data-en="Like, why do you think the shift in demand on post-training and fine-tuning has happened now? It's probably a combination of three things, I'd say. One is open source has got good, and that's very important." aria-label="回原文"></button>。第三块拼图是基础设施：光有模型不够，得有能力把它跑起来——Base 10 这类玩家让「自己训练、自己跑模型」变得可行了 <button class="pd-ts" data-t="07:14" data-who="Julian" data-en="And then I think the last thing, which is also from our perspective, is that... It's amazing to go and have these models, but you also have to have the ability to run these models." aria-label="回原文"></button>。

## 推理正在变成智能体的工具箱

围绕收购的 Parst 团队，Julian 讲了一个更前沿的判断：持续训练如今已是工程问题——跑模型、拿生产轨迹、收人类反馈、重训、重部署，步骤清晰 <button class="pd-ts" data-t="08:00" data-who="Julian" data-en="To start with, let's just think about what we have good examples of and what is new. I think continual training now is becoming this kind of, I don't want to call it solved, but it's like an engineering problem now, where it's like we know what to do, whereas you run a model, you get production traces, you get some human feedback on it, and then you go and retrain that model and redeploy it." aria-label="回原文"></button>;但世界的下一步是「上下文内训练和推理同时进行」。当长时程智能体任务(模型连续干很久的活)越来越多，你希望干活的环境和模型本身持续演化 <button class="pd-ts" data-t="08:26" data-who="Julian" data-en="To some extent, I think the future of the world is to start to think about kind of as much of like in context training and inference at the same time. And the way we think about that is like continual learning is that when there are lots of long horizon agentic tasks, there's a lot of inference work that needs to be done." aria-label="回原文"></button>。

这对推理栈的改变是根本性的：模型从「输入直接到输出」变成会思考、在原地做大量工作、需要访问一整个工具生态——运行工具、运行其他模型、在模型间路由、快速启停执行代码的沙箱 <button class="pd-ts" data-t="11:10" data-who="Julian" data-en="I think what happens is like, you know, these models are going from, you know, just like these input directly to output to, you know, these models that think and they do a lot of work in place and they need access to an ecosystem of tools." aria-label="回原文"></button>。一句话：**推理从「我需要跑这个模型」变成「一套运行这些智能体的工具」** <button class="pd-ts" data-t="11:32" data-who="Julian" data-en="Yeah. Inference goes from, I need to run this model to a set of tools to run these agents. And that's kind of like where we think the inference stack is going over time where, you know, there is..." aria-label="回原文"></button>,从狭义的解决方案变成解决更广泛问题的一套工具 <button class="pd-ts" data-t="12:04" data-who="Julian" data-en="But over time, that will evolve to not only that inference type, but the set of primitives that need to exist on top of that to be able to use them in the authentic settings." aria-label="回原文"></button>。而且他判断，智能体工作负载可能已经占了大部分 <button class="pd-ts" data-t="18:56" data-who="Julian" data-en="How quickly do you think that happens that it becomes a much larger portion? I think it already has probably moved to the majority of stuff. And I think, again, as these models start to get better at long horizon tasks, that will happen." aria-label="回原文"></button>。

## 容量比你想的稀缺 10 倍

谈到 [[GPU 容量|GPU 容量]]，Julian 的原话是：除非你身处其中，否则体会不到——**实际情况比你想象的糟糕 10 倍**。拿容量要做数月甚至一个季度的规划，还必须达到足够的规模才有资格拿；更糟的是世界上最大的公司都在抢供应，乐得把所有供给吸走 <button class="pd-ts" data-t="19:28" data-who="Julian" data-en="I think about all the rhetoric in the news on X about how capacity-constrained is. Unless you're in and around that, I think you don't appreciate like it is 10x worse than whatever you think it is." aria-label="回原文"></button>。

Base 10 的应对是一开始就押注分布式：他们今天跑在多家云、80 到 100 个区域上，策略是推理天然应该分布式——既为可靠性故障转移，也为靠近终端客户服务，以此抢下很多零散集群 <button class="pd-ts" data-t="20:15" data-who="Julian" data-en="Yeah. Around the world. And, you know, our explicit strategy is that inference actually you want to be distributed for a number of reasons, both for reliability failover, but also so you can serve models closer to end customers." aria-label="回原文"></button>。这个能力其实源于被动：创业头几年没什么业务，投资方不断把他们推到企业面前，而企业要求一切都部署在自己的 VPC(云上的私有网络空间)里，于是他们把一切构建成可部署到不同 VPC、再把多集群拼接起来——结果成了如今客户需求的经久不衰的能力 <button class="pd-ts" data-t="21:22" data-who="Julian" data-en="But one way that we realized that they were going to consume machine learning and AI at the time was that everything needed to be deployed on their VPC. So we actually built everything to be deployed on separate VPCs." aria-label="回原文"></button>。

## 市场快到没法规划，那就先做深、贴住客户

「我们没有人真正了解这个市场，因为一切变化太快」<button class="pd-ts" data-t="15:03" data-who="Julian" data-en="I think to answer the second part of your question around how fast everything is going, it's interesting because I think, you know, none of us really know anything about this market because things are going so fast." aria-label="回原文"></button>——模型层在变、用法在变、部署在变、连存在的应用都在变，智能体应用的算力消耗远超非智能体应用，是阶跃式变化。为四六个月后做容量规划时，你只能选一个雄心勃勃的乐观世界图景，为它构建，然后相信市场会长成你建的样子 <button class="pd-ts" data-t="15:50" data-who="Julian" data-en="So you can't do a ton of planning like that. I think the only thing you can do is have a very ambitious or optimistic case of the world and build to what could happen and assume that this market is big enough and our customers are amazing enough that it will grow into whatever we build with." aria-label="回原文"></button>。连他们自己也没预测到推理模型和代码能力的跃升、开源跨越鸿沟的时点 <button class="pd-ts" data-t="16:31" data-who="Julian" data-en="What's an example of something that was a massive upside that one couldn't have predicted in your end of quarter planning? I think reasoning model is a good example of this." aria-label="回原文"></button>。

方法论上，Julian 的答案是「尽量少做事」：先做深不做广，至少把一件事解决得非常非常好——这是北极星 <button class="pd-ts" data-t="13:17" data-who="Julian" data-en="Yeah, I think, you know, we try to do as little as possible in a lot of ways. And like, you know, it's like, hey, how can we build depth first as opposed to breadth first?" aria-label="回原文"></button>;加上前向部署模式，把自己当成客户团队的延伸。长期规划没有意义，Base 10 基本上每位工程师最近几周都和客户沟通过，一半的工程团队昨天就和客户说过话 <button class="pd-ts" data-t="23:17" data-who="Julian" data-en="So there's like no, there's no point in long-term planning. You know, we try to spend, you know, basically every engineer at Base 10 has probably spoken to a customer in the last couple weeks." aria-label="回原文"></button>。

## 本集带走

- **判断一家公司该不该自建模型，看规模和挑剔程度**：增长最快的公司会为 10% 的体验提升付 5-10 倍价钱——这正是开源模型变好的最强证明，因为没人愿意在能力上妥协。
- **「拥有智能」的三个台阶**：共享 API 起步 → 专用推理掌控 SLA 与性能 → 用自己的数据后训练，让模型擅长你那件具体的事，同时拿回成本和利用率。
- **推理栈的定义正在扩**：智能体时代，推理从「跑一个模型」变成一套工具生态——模型路由、沙箱、函数调用，训练与推理的界线在融合([[持续学习|持续学习]]：边跑边拿反馈边演化)。
- **容量是真实的护城河**：稀缺程度比外界想的严重 10 倍；分布式、多区域部署既是可靠性策略也是抢容量的手段。
- **极快市场里的生存法**：长期规划没意义，先在一件事上做到最好，全公司贴着客户走——每个工程师都直接和客户对话。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">我们中没有人真正了解这个市场，因为一切都变化得太快。</span>  
> *None of us really know anything about this market because things are going so fast.*  
> <span class="qm">—— Julian · [00:00]</span> ^q1

> <span class="qz">能力就是一切。没有人真正愿意在能力上妥协。你会为了给客户好 10% 的体验而支付 500% 的溢价。</span>  
> *Capability is everything. No one's really willing to take a hit on capability. You will pay a 500% premium for a 10% better experience for your customers.*  
> <span class="qm">—— Julian · [00:03]</span> ^q2

> <span class="qz">我认为持续训练现在正在成为一种……我不想说它已被解决，但它现在像一个工程问题了，就是我们知道该怎么做</span>  
> *I think continual training now is becoming this kind of, I don't want to call it solved, but it's like an engineering problem now, where it's like we know what to do*  
> <span class="qm">—— Julian · [08:00]</span> ^q3

> <span class="qz">推理从「我需要运行这个模型」变成「一套运行这些智能体的工具」。</span>  
> *Inference goes from, I need to run this model to a set of tools to run these agents.*  
> <span class="qm">—— Julian · [11:32]</span> ^q4

> <span class="qz">推理从狭义的解决方案变成了解决更广泛问题的一套工具。</span>  
> *inference turns from a narrow solution to a set of tools to solve a broader problem.*  
> <span class="qm">—— Julian · [12:07]</span> ^q5

> <span class="qz">我认为你唯一能做的就是有一个非常雄心勃勃或乐观的世界图景，并为可能发生的事情而构建</span>  
> *I think the only thing you can do is have a very ambitious or optimistic case of the world and build to what could happen*  
> <span class="qm">—— Julian · [15:50]</span> ^q6

> <span class="qz">而对开源已经变得多好的一个印证，就是有多少人在使用开源模型，因为没有人想做那种取舍。</span>  
> *And the testament to how good open source has gone is how many people are using open source models because no one wants to make that trade-off.*  
> <span class="qm">—— Julian · [17:57]</span> ^q7

> <span class="qz">除非你身处其中或在其周围，我觉得你不会体会到，实际情况比你想象的糟糕 10 倍。</span>  
> *Unless you're in and around that, I think you don't appreciate like it is 10x worse than whatever you think it is.*  
> <span class="qm">—— Julian · [19:28]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-06-a16z-how-open-source-ai-became-critical-infra|开源模型没差距，缺的是让它跑起来的基础设施]]<span class="pd-rz">同概念:后训练 (post-training)、推理 (inference)</span>
- [[2026-08-28-talks-how-do-you-diffuse-ai-into-the-real-worl|LongLake：把AI塞进真实服务业务的笨办法]]<span class="pd-rz">同概念:后训练 (post-training)、持续学习 (continual learning)</span>
- [[2025-10-23-lennys-al-engineering-101-with-chip-huyen|Chip Huyen：别追 AI 新闻了，真正提升 AI 产品的是这些事]]<span class="pd-rz">同公司:Cursor · 同概念:后训练 (post-training)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-12-bigtech-here-s-how-the-ai-bubble-bursts-with-pau|AI 投资泡沫的崩盘剧本:为什么万亿美元建数据中心注定亏钱]]<span class="pd-rz">同概念:后训练 (post-training)、推理 (inference)</span>
- [[2026-08-20-twentyvc-20vc-spacex-buys-cursor-for-60bn-stripe|SpaceX 600亿买Cursor：AI并购的疯狂逻辑]]<span class="pd-rz">同公司:Cursor · 同概念:推理 (inference)</span>
- [[2026-08-27-mad-ai-could-take-over-in-2029--is-it-alread|超级智能为什么危险：Ryan Greenblatt 的推演与解法]]<span class="pd-rz">同概念:推理 (inference)、持续学习 (continual learning)</span>

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
