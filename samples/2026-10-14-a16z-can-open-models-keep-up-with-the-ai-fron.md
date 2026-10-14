---
title: 开源模型追得上前沿吗？一位AI研究者拆解谣言与真相
podcast: The a16z Show
date: 2026-10-15
source_url: undefined
duration: "59:43"
type: episode
cover: "#64748b"
description: AI研究者 Nathan Lambert 做客 a16z 播客，谈开源与中国模型的真实实力、蒸馏传闻、以及AI自我改进到底有多神。
host: "[[Leisha Lee]]"
cohosts: ["[[Nathan Lambert]]"]
companies: ["[[OpenAI]]", "[[Anthropic]]", "[[Trillium]]", "[[Meta]]", "[[Moonshot AI]]", "[[Kimi]]", "[[Cursor]]", "[[Thinking Machines]]"]
concepts: ["[[开源模型]]", "[[蒸馏]]", "[[前沿模型]]", "[[算力]]", "[[后训练]]", "[[强化学习环境]]", "[[RSI]]", "[[推理模型]]", "[[微调]]", "[[缩放定律]]"]
category: 创业与行业
tags:
  - 创业与行业
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-14-a16z-can-open-models-keep-up-with-the-ai-fron#post","headline":"开源模型追得上前沿吗？一位AI研究者拆解谣言与真相","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-14-a16z-can-open-models-keep-up-with-the-ai-fron","mainEntityOfPage":"https://talk.solomind.cc/2026-10-14-a16z-can-open-models-keep-up-with-the-ai-fron","description":"AI研究者 Nathan Lambert 做客 a16z 播客，谈开源与中国模型的真实实力、蒸馏传闻、以及AI自我改进到底有多神。","datePublished":"2026-10-15","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Leisha Lee"},{"@type":"Person","name":"Nathan Lambert"},{"@type":"Organization","name":"OpenAI"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"Trillium"},{"@type":"Organization","name":"Meta"},{"@type":"Organization","name":"Moonshot AI"},{"@type":"Organization","name":"Kimi"},{"@type":"Organization","name":"Cursor"},{"@type":"Organization","name":"Thinking Machines"},{"@type":"Thing","name":"开源模型 (open source models)"},{"@type":"Thing","name":"蒸馏 (distillation)"},{"@type":"Thing","name":"前沿模型 (frontier models)"},{"@type":"Thing","name":"算力 (compute)"},{"@type":"Thing","name":"后训练 (post-training)"},{"@type":"Thing","name":"强化学习环境 (RL environment)"},{"@type":"Thing","name":"RSI"},{"@type":"Thing","name":"推理模型 (reasoning model)"},{"@type":"Thing","name":"微调 (fine-tuning)"},{"@type":"Thing","name":"缩放定律 (scaling laws)"}],"articleSection":"创业与行业"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"创业与行业","item":"https://talk.solomind.cc/tags/创业与行业"},{"@type":"ListItem","position":3,"name":"开源模型追得上前沿吗？一位AI研究者拆解谣言与真相","item":"https://talk.solomind.cc/2026-10-14-a16z-can-open-models-keep-up-with-the-ai-fron"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>开源模型追得上前沿吗？一位AI研究者拆解谣言与真相</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 开源模型追得上前沿吗？一位AI研究者拆解谣言与真相

<div class="pd-byl"><b>Nathan Lambert</b> · Trillium 创始人 · 2026-10-15</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-14-a16z-can-open-models-keep-up-with-the-ai-fron.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">人们每天都在蒸馏我的产品。他们拿走它，把它拆解成原始部件，这就叫竞争。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="00:21" data-who="嘉宾" data-en="People distill my products every single day. They take it, they strip it down to its raw parts, and that's called competition." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Leisha Lee]] · [[Nathan Lambert]]
>
> **公司** [[OpenAI]] · [[Anthropic]] · [[Trillium]] · [[Meta]] · [[Moonshot AI]] · [[Kimi]] · [[Cursor]] · [[Thinking Machines]]
>
> **概念** [[开源模型]] · [[蒸馏]] · [[前沿模型]] · [[算力]] · [[后训练]] · [[强化学习环境]] · [[RSI]] · [[推理模型]] · [[微调]] · [[缩放定律]]

[[Nathan Lambert|Nathan Lambert]] 是新成立的非营利研究实验室 [[Trillium|Trillium]] 的创始人，此前在 AI2 做[[后训练|后训练]]研究。

在这期 a16z 播客里，他与合伙人 [[Leisha Lee|Leisha Lee]] 聊了一个所有人都关心的问题：[[OpenAI|OpenAI]]、[[Anthropic|Anthropic]] 这些烧钱巨头领跑的前沿，==[[开源模型|开源模型]]到底还追得上吗==？

他的答案比公共讨论里的恐慌情绪冷静得多。

## 前沿靠什么：算力、数据、人才

Lambert 把模型进步归结为三种资本的组合：[[算力|算力]]、数据和人才。

闭源前沿实验室在这三项上投入最狠，也最敢在别人觉得不可能的方向上下重注——OpenAI 掀起了[[推理模型|推理模型]]的革命，Anthropic 则靠长期押注编程，等来了 Claude Code 的爆发。<button class="pd-ts" data-t="03:04" data-who="嘉宾" data-en="When I think about model progress, it comes down to different forms of capital that you've put into them, and that is, like, compute data and talent, and all of the labs have various amounts of this, and the closed frontier labs of OpenAI's, Anthropics, Google's have clearly had the most..." aria-label="回原文"></button>

但他特别强调组织本身的重要性。

让公司架构真正服务于造模型这件事非常难，所以才会看到 [[Meta|Meta]] 这种推倒重来的整体重组，而重组之后确实又回到了上升轨道。

## 中国公司开源，不是阴谋，是生意

中国实验室的开源策略常被渲染成政府行为，Lambert 直言不是这么回事。如果 [[Moonshot AI|Moonshot AI]]、Jibu 这些公司只在中国卖 API，美国根本没人知道它们是谁。

**把模型开源，是进入全球对话的最快捷径**。<button class="pd-ts" data-t="05:03" data-who="嘉宾" data-en="It was a very practical decision by them. They're following the discourse. They know there's going to be a huge market." aria-label="回原文"></button>

> 【背景】Jibu 一般指 Zhipu（智谱 AI），原文转写稿中写作"Jibu"。

在他看来，这会催生一个分层市场：

最好的闭源模型拿最高的利润率，紧随其后的近[[前沿模型|前沿模型]]是开源的，因为总有企业想要私有数据、自有硬件上的部署，这些需求闭源 API 满足不了。

## 蒸馏被夸大了：中国团队是真的强

开源模型全靠[[蒸馏|蒸馏]]闭源模型是流传最广的说法。蒸馏的意思是拿一个强模型的输出去训练自己的模型，等于用钱换算力。

Lambert 承认中国实验室缺算力——他听说 OpenAI 研究员平均能随时调用 5000 块 H100 等效算力，一位中国顶级预训练研究者听完后下巴都掉下来了。<button class="pd-ts" data-t="09:38" data-who="嘉宾" data-en="What they don't have is compute. You talk to people there and you're like, oh, I heard an average OpenAI researcher has 5,000 H100 equivalents that they can access at any time." aria-label="回原文"></button>

但人才上，他说想把中国说得不如美国，很难站得住脚，因为中国有大量高水平训练出来的人。

而按公开文献看，现在的推理模型后训练里，蒸馏其实很难起大作用：

开源社区自己试过用顶级模型的推理轨迹做训练，效果并不好，连教师模型都对不上。

当然他也留了问号：中国存在大量调用 Claude 的中间代理，[[Kimi|Kimi]] 甚至被发现在产品里直接给用户返回 Claude 的输出。

这些到底怎么用进训练，还需要更多公开研究才能回答。

他的估算是**蒸馏大概帮中国公司省了几个月，而不是决定性的差距**。<button class="pd-ts" data-t="13:13" data-who="嘉宾" data-en="And I think most reasonable people when they're like, what's the gap from distillation are like, there's very big error bars. But when I say that distillation helps them by a few months, it's based on the scientific literature that" aria-label="回原文"></button>

至于该不该管，他引用了 Jensen 的话：「人们每天都在蒸馏我的产品……这叫竞争。」

<button class="pd-ts" data-t="15:25" data-who="嘉宾" data-en="Put it in the show. People distill my products every single day. They take it and they strip it down to its raw parts." aria-label="回原文"></button> 他认为靠国会立法管不了，而且中美在 AI 安全上本来就需要对话，在蒸馏问题上出手只会弊大于利。

## 开源走得慢，但尽头是真正的所有权

闭源实验室的优势是整合：模型、推理服务、营收、融资转成一个飞轮，市场最先到、利润率最高。

开源这边链条更长——做模型的、做推理服务的、做后训练的公司彼此分离，客户信息传不回模型构建者手里，所以慢。

但**走完全程的企业拿到的是模型权重的真正所有权**：没有条款限制，跑在自己的硬件上，算得清回报。

他认为开源经济要花更长时间建，但不容易是泡沫。<button class="pd-ts" data-t="20:47" data-who="嘉宾" data-en="Things you need the models to do and it's like you can't like the information doesn't just flow back to the model builder very easily and they also don't have the economies of scale to serve as many users to serve it as efficiently to have as much margins on influence on imprints and these are just like" aria-label="回原文"></button>

一个佐证：[[Cursor|Cursor]] 发过实验，重写 SQLite 的长任务里，用开源[[微调|微调]]模型的成本远低于两个前沿模型组合，效果相当。

## 买数据、建环境，才是现在最大的杠杆

Lambert 判断，**前沿进步很大程度来自花钱买高质量数据、给模型搭可以行动的环境**。数学和编程是可验证的领域，模型进步飞快；

而生物、法律、知识工作这些不可完全验证的领域，要靠一个行业一个行业地买数据、定义行为，这会持续很多年，也是资本最密集的地方。<button class="pd-ts" data-t="25:18" data-who="嘉宾" data-en="There's a long way of asking, what evidence do you find is most compelling or, you know, pieces of evidence for various versions of this stable state of where the frontier wins versus open source?" aria-label="回原文"></button>

这个市场还很粗糙：数据公司大量采购、批量试错，质量参差，甚至催生了奖励作弊——模型聪明到会钻环境的空子刷高分。

他认为数据行业有大量低垂的果实，要几年时间才会把赢家筛出来。

Trillium 要做的之一，就是把高杠杆任务的开源环境公开出来。

做一套环境要几千到几万美元，而利润动机让几乎没人愿意免费发布。

但这些公开资源正是博士生和研究者做研究的地基。

## 用AI做AI研究，别神化它

对递归自我改进（[[RSI|RSI]]）的恐慌，Lambert 的回应是把它晒出来。

Trillium 计划完整记录：实验室用什么工具、什么任务、模型卡在哪里、代码里写了什么 bug，每半年更新一次。

让政策制定者亲眼看到 AI 自动化的真实形态，而不是听神秘的传说。<button class="pd-ts" data-t="40:01" data-who="嘉宾" data-en="So yeah, we'd love to hear more about that. Yeah. So I think this, we won't be the only people doing this, but essentially like RSI has so much mystique." aria-label="回原文"></button>

他的核心判断：**所有扩展定律都是算力指数级增长换性能线性提升**，实验室花的是指数级的钱才维持住现在的进步速度。

他引用 Claude 系统卡的说法——要出现快速起飞，还需要再多一个数量级的进展。

数学可能是最适配这种智能形态的领域，但「Claude 不会自己告诉自己怎么做出更好的 PPT」。<button class="pd-ts" data-t="56:48" data-who="嘉宾" data-en="Some of the Claude System cards say this. They're like, it would take, say, like, 10x more progress to make this a fast takeoff." aria-label="回原文"></button>

真正让他担心的不是前沿藏着秘密，而是能力在涨、社会几乎没做准备——公共网络安全等领域的准备基本不存在。

闭源实验室先到，开源随后跟到，很多问题正在扩散的路上。他呼吁更多眼睛、更多公开科学，让社会在知情的状态下做准备。

## 本集带走

- 前沿优势=算力+数据+人才+敢下重注的组织，开源想追，短期看齐的是近前沿这一层。
- 蒸馏被严重夸大：公开文献显示它对当今推理模型的后训练帮助有限，中国团队的技术实力是真实的，差距主要在算力。
- 开源生态走得慢，是因为链条分散、信息回流差，但终点的所有权（权重、硬件、回报）对企业有真实价值。
- 前沿进步越来越靠买数据和搭强化学习环境，这个行业还早，质量参差，会持续多年洗牌。
- 别神化 AI 自我改进：算力换性能仍是指数换线性，真正缺的是社会层面的准备，而不是更多的神秘感。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">人们每天都在蒸馏我的产品。他们拿走它，把它拆解成原始部件，这就叫竞争。</span>  
> *People distill my products every single day. They take it, they strip it down to its raw parts, and that's called competition.*  
> <span class="qm">—— 嘉宾 · [00:21]</span> ^q1

> <span class="qz">如果有人想去 AI 的前沿工作，我大多会告诉他们去 Anthropic 和 OpenAI，这是最容易下的注。</span>  
> *If somebody wants to work at the frontier of AI, I mostly tell them to work at Anthropic and OpenAI, which is the easiest bet.*  
> <span class="qm">—— Nathan Lambert · [03:50]</span> ^q2

> <span class="qz">要说中国在人才上不如人，你会很难站住脚，因为他们有太多人正在如此高的水平上接受训练。</span>  
> *To say that China is anything but equal in talent, you're gonna have a hard time because they just have so many people being trained at such a high level.*  
> <span class="qm">—— Nathan Lambert · [09:28]</span> ^q3

> <span class="qz">蒸馏是一种有效地花更多钱来换取算力等价物的方式。</span>  
> *Distillation is a way to effectively spend more money to get what is compute equivalent.*  
> <span class="qm">—— Nathan Lambert · [10:00]</span> ^q4

> <span class="qz">中国人在构建模型方面也非常强。我觉得存在一点自我安慰，人们说只有我们擅长构建模型。</span>  
> *The Chinese are so good at building models as well. I think there's a bit of cope where people are like, only we are good at building models.*  
> <span class="qm">—— Nathan Lambert · [13:31]</span> ^q5

> <span class="qz">我只是认为，如果你对蒸馏做任何事情，造成的伤害会大于好处，因为他们不会停止。</span>  
> *I just think you're going to cause more harm than good if you do anything about distillation, because they're not going to stop.*  
> <span class="qm">—— Nathan Lambert · [16:30]</span> ^q6

> <span class="qz">我们在编程领域见过这一点，这是今年的故事，收入从零直接到了 1000 亿，而且很可能继续增长。</span>  
> *We have seen this with coding and this has been the story of the year where the revenue has just gone zero, 100 billion and likely to grow.*  
> <span class="qm">—— Nathan Lambert · [20:02]</span> ^q7

> <span class="qz">在这个过程的最后，他们拥有真正的所有权，也就是模型权重。</span>  
> *At the end of this process, they have real ownership, which is model weights.*  
> <span class="qm">—— Nathan Lambert · [21:28]</span> ^q8

> <span class="qz">这些实验室在信息方面的安全性没有他们想的那么高。</span>  
> *The security at these labs in terms of information is not as high as they think.*  
> <span class="qm">—— Nathan Lambert · [52:49]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「创业与行业」挖下去**

- [[2024-06-21-talks-product-led-ai-mustafa-suleyman-on-defin|Mustafa Suleiman:数据是新的护城河——AI 创业者的机会地图]]<span class="pd-rz">同公司:OpenAI · 同概念:后训练 (post-training)、开源模型 (open source models)、微调 (fine-tuning)、蒸馏 (distillation)</span>
- [[2026-09-12-a16z-why-companies-are-becoming-a-series-of-l|A16Z 消费投资合伙人 Anish Acharya：别怕“永久下层”，公司正在变成一串循环]]<span class="pd-rz">同公司:Anthropic、Cursor、OpenAI · 同概念:RSI、前沿模型 (frontier models)</span>
- [[2026-09-11-dwarkesh-john-beren-charlie|RL 为什么灵、蒸馏为什么凶:三位研究员的前沿圆桌]]<span class="pd-rz">同公司:Anthropic、Cursor、OpenAI · 同概念:RSI、后训练 (post-training)、蒸馏 (distillation)、缩放定律 (scaling laws)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic、OpenAI、Meta · 同概念:缩放定律 (scaling laws)、后训练 (post-training)</span>
- [[2026-08-06-talks-the-state-of-model-routing-nvidia-cognit|不靠一个模型打天下:多模型路由的早期探索与实战权衡]]<span class="pd-rz">同公司:NVIDIA · 同概念:前沿模型 (frontier models)、开源模型 (open source models)、蒸馏 (distillation)</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Anthropic、Cursor、OpenAI</span>

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
