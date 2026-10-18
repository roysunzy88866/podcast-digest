---
title: 谁来给 AI 模型打分？
podcast: The a16z Show
date: 2026-10-18
source_url: undefined
duration: "39:31"
type: episode
cover: "#64748b"
description: a16z 的 Ben Horowitz 与 VALS 创始人 Rayan Krishnan 聊 AI 评测：为什么公开榜单靠不住，独立评测如何成为一门生意。
guests: ["[[Rayan Krishnan]]"]
companies: ["[[VALS]]"]
concepts: ["[[基准测试]]", "[[评估]]", "[[递归自我改进]]", "[[智能体]]", "[[ValSmith]]", "[[token]]", "[[Claude Code]]"]
category: AI 安全
tags:
  - AI 安全
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-09-a16z-who-grades-the-ai-models-ben-horowitz-ra#post","headline":"谁来给 AI 模型打分？","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-09-a16z-who-grades-the-ai-models-ben-horowitz-ra","mainEntityOfPage":"https://talk.solomind.cc/2026-09-09-a16z-who-grades-the-ai-models-ben-horowitz-ra","description":"a16z 的 Ben Horowitz 与 VALS 创始人 Rayan Krishnan 聊 AI 评测：为什么公开榜单靠不住，独立评测如何成为一门生意。","datePublished":"2026-10-18","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Rayan Krishnan"},{"@type":"Organization","name":"VALS"},{"@type":"Thing","name":"基准测试 (benchmark)"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"递归自我改进 (recursive self-improvement)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"ValSmith"},{"@type":"Thing","name":"token"},{"@type":"Thing","name":"Claude Code"}],"articleSection":"AI 安全"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 安全","item":"https://talk.solomind.cc/tags/AI 安全"},{"@type":"ListItem","position":3,"name":"谁来给 AI 模型打分？","item":"https://talk.solomind.cc/2026-09-09-a16z-who-grades-the-ai-models-ben-horowitz-ra"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>谁来给 AI 模型打分？</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 谁来给 AI 模型打分？

<div class="pd-byl"><b>Rayan Krishnan</b> · VALS 创始人 · 2026-10-18</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-09-a16z-who-grades-the-ai-models-ben-horowitz-ra.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">当 Meta 发布 Llama 4 时，在我们留出的私有基准测试上，这个模型实际上表现不佳，但在所有主要的公开基准测试上，它却展现出了令人惊叹的能力。</div><div class="a">— Rayan Krishnan <button class="pd-ts" data-t="00:05" data-who="Rayan Krishnan" data-en="When Meta released Llama 4 on our held out private benchmarks, the model was actually underperforming, but on all of the major public benchmarks, it was showing incredible capabilities." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Rayan Krishnan]]
>
> **公司** [[VALS]]
>
> **概念** [[基准测试]] · [[评估]] · [[递归自我改进]] · [[智能体]] · [[ValSmith]] · [[token]] · [[Claude Code]]

AI 模型越来越强，但我们用来衡量它们的测试，几乎以同样的速度过时。

更麻烦的是，模型的分数大多是自己说自己好——实验室自己出题、自己考、自己公布成绩。

这期 The a16z Show 里，a16z 的 Ben Horowitz 和 Jennifer Lee 找来了 [[VALS|VALS]] 的创始人兼首席执行官 [[Rayan Krishnan|Rayan Krishnan]]，聊这家 2024 年成立的第三方评测公司，为什么觉得给 AI 打分能长成一个万亿级产业里的独立审计行业。

## 为什么实验室不能自己给自己打分？

Rayan 的背景是做研究和构建评测。

他很早就注意到一件事：让模型变强的最大驱动力之一，是先有一种清晰可读的方式去衡量它。

2024 年初，市面上出现了越来越多 OpenAI 之外的模型，但没人说得清新模型到底新在哪里，于是他创办了 VALS，专门做高质量评测。

实验室内部当然也做评测，而且做得不错——那正是模型进步的引擎。问题出在对外发布时。Rayan 举了个例子：

Meta 发布 Llama 4 时，在 VALS 私有的、不公开的测试集上，模型表现其实不佳；但在题目和评分标准全部公开的主流榜单上，它看起来能力惊人 <button class="pd-ts" data-t="03:38" data-who="嘉宾" data-en="That was a bit of a disaster. And interestingly, what we saw is that on our held out private benchmarks, the model is actually underperforming. But on all of the major public benchmarks where the questions and rubrics are actually open source, it was showing incredible capability." aria-label="回原文"></button>。

**公开榜单一旦题目泄露，模型就可以被针对性地刷分**。

Ben 从行业角度补了一句：实验室其实也希望有一个理性的买家市场。

投了几十亿美元做的模型，需要独立证据证明自己真的进步了，而不是全靠自卖自夸。

## 榜单饱和了就退役，像律师重考执照

不少做评测的同行会故意留着一个已经很饱和、容易拿高分的旧榜单，让客户挑最好看的樱桃。

VALS 反其道而行：**榜单饱和了就直接废弃**。

他们有个非官方口号，叫永远有更高的山峰——既然模型实验室在不停爬山，评测公司的任务就是不断造出下一座山让他们爬 <button class="pd-ts" data-t="11:51" data-who="嘉宾" data-en="And this is kind of the infinite game we're in. I mean, you're wearing our shirt, and so we have this unofficial motto, always a higher peak. Love the shirt." aria-label="回原文"></button>。

退役榜单还有一个理由：评测应该反映当前的世界。

律师要重新考执照，医生要重新认证，模型也该被用最新的医学知识、最新的判例来考，而不是拿着旧世界的题目刷旧世界的分。

## 给递归自我改进立一个统一标尺

VALS 最近发布的一个榜单让研究圈很兴奋：[[递归自我改进|递归自我改进]]指数（RSI），衡量模型能不能参与训练出自己的下一个版本。

很多大实验室开始在模型卡片里报告这件事，但没有统一语言，各家数字没法对比 <button class="pd-ts" data-t="10:17" data-who="嘉宾" data-en="So one benchmark we released recently I'm very excited by is our recursive self-improvement index. It's a topic which a lot of big labs have been talking about and starting to report on in their model cards." aria-label="回原文"></button>。

理想做法是直接让一个前沿模型训练自己的下一代，看提升多少。但这太贵也太慢，所以 VALS 做的是一套代理指标：

把造模型的过程拆成预训练、后训练、工程框架等环节，逐项看模型在哪些环节能做出真正的研究工作、哪些环节还不行。

## 新模型发布前 6 小时，评测在抢时间

模型发布前的几个小时是评测公司最紧张的时刻。

VALS 的原则是**绝不拖发布会的后腿**，这意味着要在极短的窗口里、用有限的调用额度榨出最多的信号。

早期是 Rayan 和联合创始人 Langston 熬通宵出结果；

现在他们建了大规模分布式的基础设施，还开发了一个内部系统，取名「Steve，那个经济学意义上的 VALS 员工」，把越来越多的人工活交给它 <button class="pd-ts" data-t="05:37" data-who="嘉宾" data-en="And so we're able to run evaluations in a massively distributed way, running effectively the maximum possible rate limits with every model we get access to. And we also have this internal system called Steve, Steve the Economic Vals employee." aria-label="回原文"></button>。

评测本身的形态也在变。

早期像 ImageNet 那样，几百万张图片、一张对一个标签；现在反过来，任务很少——比如生成 50 个全栈网络应用——但[[评估|评估]]输出的标准复杂得多 <button class="pd-ts" data-t="14:17" data-who="嘉宾" data-en="So there's some simple mechanisms in the infrastructure we have to think about. But I think in general what we've seen is evaluations as they become more complex have a fewer sample size but a larger set of criteria or expectations of them." aria-label="回原文"></button>。

而且现在测的是能连跑几天甚至几周的[[智能体|智能体]]，基础设施必须稳，单个请求失败要从断点重试，不能整条轨迹重来。

## 企业买 AI 的钱，已经可能超过发工资

Rayan 讲了一个自己的亲身实验。VALS 团队拿到了一个月不限量的编程工具额度，事后复盘发现：

工程师们每天烧掉 10 亿到 20 亿个 [[token|token]]，峰值是一位工程师一天用了 60 亿；

换算下来那个月的 token 花费约值 150 万美元——虽然实际是免费的——是同期员工工资的 10 倍 <button class="pd-ts" data-t="22:52" data-who="嘉宾" data-en="Yeah, it's also crazy because— How much does that equal to dollars? So, okay, and then I went back and did some math, and it looked like in that month we spent roughly $1.5 million worth of tokens." aria-label="回原文"></button>。

他还提到一家财富 10 强公司：

给工程师每天 100 美元的 [[Claude Code|Claude Code]] 额度，下午 4 点额度重置，结果公司最高效的工作时段变成了下午 4 点到 6 点，中间的下午反倒成了大家散步喝咖啡的死时间 <button class="pd-ts" data-t="16:38" data-who="嘉宾" data-en="I was meeting with a company in the Fortune 10, and the way that they've adopted Claude Code has been with roughly a $100 a day budget for their engineers. And so what I was hearing is that this has actually fundamentally changed how work gets done in this company in that there is a rate limit which resets at 4 p.m. And so the most productive hours of work are actually now 4 to 6 p.m. when the rate limits reset." aria-label="回原文"></button>。

后来额度涨到了每人 300 美元，但这个数字基本是拍脑袋定的。

Rayan 的判断是：**token 支出可能开始超过工资支出**，当它成为成本表上如此显眼的一项，企业就必须认真算这笔投入的回报了。

## ValSmith：拿你自己的代码库出题

为此 VALS 发布了面向企业的产品 [[ValSmith|ValSmith]]。它聚焦在代码生成这个企业 AI 花钱最多的领域：

任何公司可以把 GitHub 代码库接进来，自动生成一套内部编程基准，看哪个编程智能体在自己家的代码上表现最好、性价比最高 <button class="pd-ts" data-t="19:43" data-who="嘉宾" data-en="And so to try and remedy that, we've started to release some products more openly for enterprises to use, the first of which is called Valsmith. And so ValSmith is focused on CodeGen, the area we're seeing to be the highest expanded in enterprise AI." aria-label="回原文"></button>。

结果是反直觉的。今天的可选项太多了：Anthropic 有 Opus 和 Sonnet，还有各种便宜的新模型，加上可以自己部署的开源模型。

VALS 实测发现，Sonnet 有时比 Opus 还贵，因为它太能吃token 了 <button class="pd-ts" data-t="21:12" data-who="嘉宾" data-en="So I think in this messy middle, it's actually very non-intuitive what's the right fit. We're actually seeing in a lot of cases, Sonnet is more expensive than Opus because it is so token hungry." aria-label="回原文"></button>——凭感觉选模型，很可能多花钱。

VALS 自己现在的做法是：所有工具都对员工开放，但系统会针对每个任务自动推荐从哪个工具开始。

## 政府定规则，第三方来验证

聊到政策，Ben 的分工观很清楚：政府知道自己在怕什么——生物黑客、网络攻击——但要回答两个问题：模型有没有这个能力？

能不能诱导模型真的去做？

**政府擅长定规则和执行规则，但特别不擅长亲自做后面的技术验证**，这活儿该交给有能力的第三方公司 <button class="pd-ts" data-t="30:12" data-who="嘉宾" data-en="And I think the government is particularly ill-suited to do the latter, particularly over time. It's just not a good government function. But they're very good at setting the rules because they can enforce the rules." aria-label="回原文"></button>。

Rayan 说 VALS 现在定期给美国行政和立法部门做简报，汇报模型的能力和风险。

他们的角色是收集证据、呈现趋势，至于要不要因此限制模型发布，那是立法者的决定 <button class="pd-ts" data-t="32:09" data-who="嘉宾" data-en="Yeah, I think in the first order there should be a mechanism by which insights and data can be passed directly to relevant people in government. So now we're regularly doing briefings for executive and legislative branches on what we're finding capabilities and risk of models." aria-label="回原文"></button>。

他反对评测公司同时向实验室卖训练数据——那是审计行业出安然事件的教训：

又做审计又做咨询，激励一混，就变成花钱买及格。

## AI 界的信任但要核实

最后聊到地缘政治。Rayan 借用了里根谈核裁军的话：**信任但要核实**。核时代有飞越核查，让对方国家能审计自己的核武库；

如果各国真担心 AI 的社会甚至生存风险，就需要一套关于评测的共同语言来完成核实这一半 <button class="pd-ts" data-t="34:44" data-who="嘉宾" data-en="I think Reagan had this line, trust but verify. And so I think we're starting to see signs of trust in that Xi Jinping and Trump are going to be meeting next month, but there is no clear way to actually do the verification part of this." aria-label="回原文"></button>。

他认为最值得各国共同盯住的，是递归自我改进——某个国家或公司一旦在这方面跑飞，造出外界一无所知的模型，那才是真正的麻烦。

## 本集带走

- 公开榜单的题目和评分标准一旦泄露，就会被针对性刷分；Llama 4 在公开榜单和 VALS 私有测试集上的表现是两个世界。
- 评测要跟着模型一起进化：榜单饱和就退役，像律师医生重新考执照一样用当前世界的知识考模型。
- token 支出可能超过工资支出：VALS 一个月免费额度换算价值约 150 万美元，是员工工资的 10 倍；用什么模型、怎么用，正在变成一个必须算账的问题。
- 榜单饱和的反面是拿自家数据出题：ValSmith 让企业用自己的代码库生成内部基准，实测发现便宜的模型有时反而更贵。
- 政策上的合理分工是政府定规则并执法，有能力的第三方做技术验证——就像核时代的信任但要核实。

<div class="pd-sec pd-sec-q">全部金句 <span>15 条</span></div>

> <span class="qz">当 Meta 发布 Llama 4 时，在我们留出的私有基准测试上，这个模型实际上表现不佳，但在所有主要的公开基准测试上，它却展现出了令人惊叹的能力。</span>  
> *When Meta released Llama 4 on our held out private benchmarks, the model was actually underperforming, but on all of the major public benchmarks, it was showing incredible capabilities.*  
> <span class="qm">—— Rayan Krishnan · [00:05]</span> ^q1

> <span class="qz">而实际上，模型能力最大的驱动力之一，就是拥有一种新的清晰可读的方式来评估模型。</span>  
> *And actually one of the biggest drivers for model capability is having a new legible way to evaluate models.*  
> <span class="qm">—— Rayan Krishnan · [02:35]</span> ^q2

> <span class="qz">每当一个新兴的万亿美元产业出现时，就需要这样一个独立的测试机构。</span>  
> *And every time a new trillion dollar industry emerges, there's a need for this independent testing group.*  
> <span class="qm">—— Rayan Krishnan · [04:28]</span> ^q3

> <span class="qz">我认为真正的目标、北极星，是我们从来不想成为模型发布的一个滞后指标或延迟因素。</span>  
> *And I think the real goal, Northstar, we think about is we never want to be kind of a lagging indicator or a delay to a model release.*  
> <span class="qm">—— Rayan Krishnan · [05:06]</span> ^q4

> <span class="qz">比如，在 VALS，我们很早做的一个决定就是永远不向实验室出售训练数据。</span>  
> *I think, for instance, at VALS, one very early decision we made was the decision to never sell training data to labs.*  
> <span class="qm">—— Rayan Krishnan · [08:46]</span> ^q5

> <span class="qz">而且实际上，那个行业里很多人现在已经构建了这些噱头式的基准测试，作为售卖他们数据的机制。</span>  
> *And actually, a lot of that industry has now built these gimmick style benchmarks as a mechanism to sell their data.*  
> <span class="qm">—— Rayan Krishnan · [09:01]</span> ^q6

> <span class="qz">然后这就变成了花钱通过审计，或者在这个场景下，就是花钱赢得基准测试。</span>  
> *And then it just becomes pay to pass the audit, or in this case, pay to win the benchmark.*  
> <span class="qm">—— Rayan Krishnan · [09:23]</span> ^q7

> <span class="qz">所以，既然基础模型实验室在爬山登顶，他们在寻找下一个要攀登的峰顶，那么为他们持续不断建造下一个可供攀登的山峰就是我们的工作。</span>  
> *So insofar as foundation model labs are hill climbing, they're searching for the next peaks to summit, it is our job to perpetually construct these next mountains for them to summit.*  
> <span class="qm">—— Rayan Krishnan · [11:56]</span> ^q8

> <span class="qz">但我认为仍然被低估的是，在企业这一边，这也正在变成生死攸关的事。</span>  
> *But what I think is still underappreciated is on the enterprise side, this is turning to be existential as well.*  
> <span class="qm">—— Rayan Krishnan · [16:18]</span> ^q9

> <span class="qz">所以我认为这里非常能说明问题的是，你会看到在技术栈的每一层都存在着对智能的错误定价。</span>  
> *And so I think what's really illustrative there is that you see that there is a misvaluing of intelligence happening at every layer of the stack.*  
> <span class="qm">—— Rayan Krishnan · [16:57]</span> ^q10

> <span class="qz">所以当我们谈到企业面临的生死攸关的问题时，我认为就是我们正在转变的这个方向——代币支出可能会开始超过工资支出。</span>  
> *And so as we talk about the existential concern for enterprises, I think it is this kind of direction we're shifting in where token spend may start to eclipse salary spend.*  
> <span class="qm">—— Rayan Krishnan · [17:44]</span> ^q11

> <span class="qz">我们在很多情况下实际看到，Sonnet 比 Opus 更贵，因为它太吃 token 了。</span>  
> *We're actually seeing in a lot of cases, Sonnet is more expensive than Opus because it is so token hungry.*  
> <span class="qm">—— Rayan Krishnan · [21:12]</span> ^q12

> <span class="qz">我认为编码是未来每个领域将会发生什么的预兆。</span>  
> *I think coding is a sign for what's to come in every domain.*  
> <span class="qm">—— Rayan Krishnan · [21:33]</span> ^q13

> <span class="qz">但实际上我们那个月在 token 上的花费是员工工资的 10 倍。</span>  
> *But it was actually 10x more we were spending in tokens than employee salary for that month.*  
> <span class="qm">—— Rayan Krishnan · [23:04]</span> ^q14

> <span class="qz">而我认为政府特别不适合做后者，尤其是随着时间推移。这不是一个好的政府职能。但他们非常擅长制定规则，因为他们可以执行规则。</span>  
> *And I think the government is particularly ill-suited to do the latter, particularly over time. It's just not a good government function. But they're very good at setting the rules because they can enforce the rules.*  
> <span class="qm">—— 嘉宾 · [30:07]</span> ^q15
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
