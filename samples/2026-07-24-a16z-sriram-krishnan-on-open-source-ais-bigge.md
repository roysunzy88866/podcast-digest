---
title: Sriram Krishnan：Kimi K3 将改写 AI 行业版图
podcast: The a16z Show
date: 2026-07-24
source_url: undefined
duration: "22:29"
type: episode
cover: "#64748b"
image: "/covers/2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge.jpg"
description: 白宫前 AI 政策顾问解读 Kimi K3 等开源模型带来的定价、安全与政策冲击。
host: "[[Theo Jaffe]]"
cohosts: ["[[Sriram Krishnan]]", "[[Sofia Puccini]]"]
companies: ["[[Hugging Face]]"]
concepts: ["[[开源权重]]", "[[前沿实验室]]", "[[蒸馏]]", "[[智能体]]", "[[Kimi K3]]"]
category: AI 安全
tags:
  - AI 安全
  - 创业与行业
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Sriram Krishnan：Kimi K3 将改写 AI 行业版图</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# Sriram Krishnan：Kimi K3 将改写 AI 行业版图

<div class="pd-byl"><b>Sriram Krishnan</b> · 白宫前 AI 政策顾问</div>

<div class="pd-mt">2026-07-24 · The a16z Show · 22:29</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果你提供有价值的产品，资本主义会负责处理其余的一切。</div><div class="a">Sriram Krishnan · 00:27</div></div>

> [!info] 关联
> **人物** [[Theo Jaffe]] · [[Sriram Krishnan]] · [[Sofia Puccini]]
>
> **公司** [[Hugging Face]]
>
> **概念** [[开源权重]] · [[前沿实验室]] · [[蒸馏]] · [[智能体]] · [[Kimi K3]]

<div class="pd-tldr"><b>一句话</b>白宫前 AI 政策顾问解读 Kimi K3 等开源模型带来的定价、安全与政策冲击。</div>

上周 AI 开源界极其热闹，Grok、Thinking Machines、[[Kimi K3|Kimi K3]]、Quen 等密集发布。本期节目请到了刚刚结束任期的白宫 AI 高级政策顾问 [[Sriram Krishnan|Sriram Krishnan]]（此前曾是 Andreessen Horowitz 的普通合伙人，并在 Microsoft、Meta、Snap 和 Twitter 任过高管）。他和两位主持人围绕开源模型对[[前沿实验室|前沿实验室]]、AI 政策、定价以及网络安全的影响展开了探讨。本文将这场对话梳理为三个部分：首先是开源模型如何冲击前沿实验室的商业护城河；接着话题转向[[蒸馏|蒸馏]]与美国政府的政策走向；最后是他对于 AI 安全与后续职业规划的判断。

## 开源追兵逼近：前沿实验室的护城河在哪里？

Sriram 回忆，大概四五个月前，行业内领先的模型似乎只有 Opus 和 GPT 这几个，大家曾担忧前沿实验室（Frontier Labs，指 OpenAI、Anthropic 等持续研发最尖端模型的公司）会在自我改进的曲线上把其他人彻底甩开。但过去几周情况突变，尤其是 Kimi K3 的发布，让这种局面被打破 <button class="pd-ts" data-t="03:19" data-who="Sriram Krishnan" data-en="which I think is nearly SOTA on many, many benchmarks. But I think the big news over the last three, four days was obviously Kimi K3 coming out, I think on Thursday or Friday." aria-label="回原文"></button>。

Sriram 指出，Kimi K3 的出现有三重含义。首先，生态系统中有了真正的选择权，你可以将[[智能体|智能体]]（Agent，能自主执行任务的 AI 程序）指向不同的模型。其次，一个尴尬的现状是：一些美国前沿模型在网络安全等领域受到了限制。他提到一位朋友甚至开始使用 Kimi K3 而不是前沿闭源模型来做安全工作，因为后者总是触发安全拒绝（护栏机制），而前者则更为自由 <button class="pd-ts" data-t="04:09" data-who="Sriram Krishnan" data-en="For example, on cyber and on security. And I was talking to a friend of mine where this person was actually starting to do security work using Kimmy K3 rather than Fable because with Fable, he would run into these refusals and safeguards." aria-label="回原文"></button>。最后，这也意味着前沿模型的定价权受到了挑战。

说完了开源带来的冲击，接下来是前沿实验室该如何应对。Sriram 判断，前沿实验室依然会在参差不齐的性能前沿持续探索，但他怀疑真正的压力将集中在定价上。他认为，确实有一部分任务需要绝对顶尖的前沿智能，但对于像检查邮件、扫描日历这样的普通智能体任务，人们完全可以用次优的[[开源权重|开源权重]]模型来替代 <button class="pd-ts" data-t="06:21" data-who="Sriram Krishnan" data-en="these open models could really start putting pressure on them is one on pricing. Because it may turn out that the number of tasks that you need absolutely frontier intelligence from is, let's call it like one subset." aria-label="回原文"></button>。这将直接导致前沿模型面临定价压力。

> 【背景】开源权重（Open-weight）模型是指将神经网络参数公开的模型，允许用户下载并在本地运行。用户可以通过微调（Fine-tuning）等方式修改它，以满足特定需求。

他观察到，前沿实验室已经开始行动。比如 Anthropic 就已经延长了其顶级模型的可用期限。他还进一步抛出了一个核心问题：如果你是前沿实验室，真正的护城河到底是在底层智能里，还是在工具套件里 <button class="pd-ts" data-t="07:20" data-who="Sriram Krishnan" data-en="I predict there'll probably be more extensions just because otherwise you have an open model, which is very much near the frontier. I think the other interesting question is, where is the real moat if you're a frontier lab?" aria-label="回原文"></button>？他认为，智能层面正变得越来越像大宗商品，因此前沿实验室（比如围绕 Claude 的产品）可能会投入更多精力，让自身的工具套件变得更具用户粘性。

## 蒸馏争议：不对称的竞争环境

工具和定价的竞争尚属商业范畴，但在国家安全层面，关于开源模型的讨论则更为复杂。

Axios 当天报道称，美国政府正在考虑限制中国的开源模型。面对“政府是否会打压开源模型”的提问，Sriram 明确表示，他深信开源社区中经典的 Linus 定律——只要有足够多的眼睛，所有的 Bug 都无所遁形 <button class="pd-ts" data-t="10:29" data-who="Sriram Krishnan" data-en="And I was a big fan of Linus's law, as in Linus Torvalds of Linux fame's law. And his law was that given enough eyes, all bugs are shallow. And what I believe with that is that open-weight models are inherently secure because when you download a model of Hugging Face, it means you have the entire world being able to take it apart, inspect it, fine-tune it, modify it, look at it in ways that you absolutely cannot if they are closed." aria-label="回原文"></button>。他认为，从 [[Hugging Face|Hugging Face]] 下载的开源权重模型本质上更安全，因为全球的开发者都可以去拆解、检查和修改它，这是闭源模型做不到的。

然而，今天让他感到不适的是：由于美国前沿模型设置了安全护栏，防御者反而难以直接审查自身代码的漏洞；相比之下，使用中国模型反而可能更利于做安全审查。他甚至提到，就在节目录制当天，Hugging Face 报告了一起事件：有人使用 AI 智能体在多个节点上猛烈攻击系统试图突破 <button class="pd-ts" data-t="11:02" data-who="Sriram Krishnan" data-en="So I kind of believe that they bring a very, very different, positive angle to security. The moment we are in, which I think is not great, is I think there was an incident with Hugging Face that got reported on earlier today, which I think was an active tweet." aria-label="回原文"></button>。他主张，反击这种威胁的最好办法，就是确保美国的防御者能够使用最好的模型来提升软件安全。

> 【背景】在讨论模型安全与攻击时，通常涉及模型生成的「漏洞利用」——即针对操作系统或固件最新漏洞编写的攻击代码。这是网络战中极具破坏力的武器。

顺着安全问题，话题来到了引发业界热议的“蒸馏”（Distillation，即用大模型生成的输出来训练另一个模型）争议上。

Sriram 解释道，蒸馏从来都是模型训练的核心组成部分。毕竟，最初的 AI 模型就是通过爬取互联网上的内容（本质上是人类知识的结晶）来引导训练的 <button class="pd-ts" data-t="12:09" data-who="Sriram Krishnan" data-en="So it's kind of a complex topic because there's a few things in there. So first of all, every model we have today distilled off of all human knowledge, right? If you go back to the original GPT or the original..." aria-label="回原文"></button>。如今的互联网上充斥着大量 AI 生式的垃圾内容，这些内容不可避免地被纳入了新模型的训练集。

但他指出了一个极其不对称且糟糕的现状：来自其他国家的模型（比如中国模型）可以肆无忌惮地基于美国模型进行蒸馏训练；而如果你是一家美国的开源权重模型公司，或者硅谷的新创公司，你是否能合法地蒸馏其他美国模型的输出，在法律界定上却充满困惑 <button class="pd-ts" data-t="14:35" data-who="Sriram Krishnan" data-en="He wrote this yesterday. I think the situation which is bad today is that some of these models from other countries can train off American models. Whereas if you are an American open weight model, it may be really confusing or challenging on whether you can distill off of other American models." aria-label="回原文"></button>。他非常赞同 Sequoia（红杉资本）的 Dean Mayer 和 Strategy 的 Ben Thompson 提出的思路：政府必须想办法为蒸馏建立清晰的规则，确保美国的模型公司能在一个公平的环境里竞争。事实上，现在几乎每一个美国的开源模型，都在微调过程中把中国模型当作老师来用 <button class="pd-ts" data-t="15:25" data-who="Sriram Krishnan" data-en="I think Ben Thompson of Strategy had a similar idea today, was to basically say, how do we find a way to make distillation acceptable in any number of ways, whether you are getting, you know, outputs of other models, or sometimes it's more subtle." aria-label="回原文"></button>。

## 政策的边界：对快速自我改进的应对

既然开源带来了如此多复杂的连锁反应，政策制定者该如何看待潜在的颠覆性风险？主持人特别提到了“自动化的 AI 研究员”（即 AI 能自动化并加速 AI 自身的研究）这一备受争议的话题。

Sriram 对这种纯理论的探讨持谨慎态度。他指出，学术界对于我们究竟处于指数曲线的哪个位置存在巨大分歧。有人相信几年内就会出现自动化的 AI 研究员，但也有观点认为，存在无法轻易突破的根本性瓶颈，因此进步曲线会平缓得多 <button class="pd-ts" data-t="17:03" data-who="Sriram Krishnan" data-en="Whether RSI is real or not, where you are on the exponent is a much debated topic. I've heard many, many schools of thought where they believe you're going to have automated AI researchers in a couple of years." aria-label="回原文"></button>。

他主张务实的应对策略：政府不应过早陷入理论恐慌，而应将精力集中于解决具体的可信风险。例如在网络安全领域，当模型真的具备了为最新固件生成漏洞的能力时，政策应当鼓励用更多的 AI 去扫描代码库、加固防御 <button class="pd-ts" data-t="18:26" data-who="Sriram Krishnan" data-en="I think there are very credible threats on cyber, on biological advances, a couple of other topics. And I think... there are definitely efforts to try and tackle just those." aria-label="回原文"></button>。

当被问及开放权重模型是否会打击前沿实验室的资本支出意愿时，Sriram 给出了极其坚定的商业乐观主义判断。他认为，只要你在提供有价值的开放权重模型，资本主义的力量自然会理顺整个供应链——无论是数据中心、芯片提供商，还是提供灭火系统的供应商，都会顺势为你服务 <button class="pd-ts" data-t="19:19" data-who="Sriram Krishnan" data-en="Well... I think at the end of the day, if you kind of bring it back to very business-first principles, if you're providing a product of value, capitalism will find a way to make the supply chain work for you." aria-label="回原文"></button>。例如，银行因为合规需求无法使用前沿模型，就会转而支持能在内部运行的开源模型。而那些推理云（提供 AI 计算的云服务商）的强劲增长，已经证明了开源生态的繁荣。

## 本集带走

1. **“非前沿”任务足以养活开源生态**：虽然极限任务仍需顶尖闭源模型，但大量日常智能体任务（如处理邮件、查看日历）用开源模型即可胜任，这将实质性地压低前沿模型的定价空间。
2. **不对称的蒸馏规则亟待厘清**：中国模型可以自由蒸馏美国模型的输出，而美国本土公司却受制于模糊的法律边界。为蒸馏建立合理规则，是保障公平竞争的关键。
3. **开源并不等同于安全风险**：基于开放审查原则，开源权重模型本质上是安全的；闭源模型过度的安全拒绝机制，反而可能削弱防御者修补系统漏洞的能力。

<div class="pd-sec">全部金句 <span>6 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">如果你提供有价值的产品，资本主义会负责处理其余的一切。</span>  
> *If you're providing a product of value, capitalism will take care of all the rest.*  
> <span class="qm">—— Sriram Krishnan · [00:27]</span> ^q1

> <span class="qz">第一，我认为领先的开源权重模型或开源模型，你知道，不是美国的，这并不好，对吧？</span>  
> *Number one, I don't think it is great that the leading open weight models or open source models, you know, are not American, right?*  
> <span class="qm">—— Sriram Krishnan · [09:30]</span> ^q2

> <span class="qz">我对此的信念是，开源权重模型本质上是安全的，因为当你从 Hugging Face 下载一个模型时，这意味着你有全世界的人能够拆解它、检查它、微调它、修改它、以你绝对无法在封闭模型上做到的方式查看它。</span>  
> *what I believe with that is that open-weight models are inherently secure because when you download a model of Hugging Face, it means you have the entire world being able to take it apart, inspect it, fine-tune it, modify it, look at it in ways that you absolutely cannot if they are closed.*  
> <span class="qm">—— Sriram Krishnan · [10:34]</span> ^q3

> <span class="qz">我认为今天糟糕的情况是，来自其他国家的一些模型可以脱离美国模型进行训练。</span>  
> *I think the situation which is bad today is that some of these models from other countries can train off American models.*  
> <span class="qm">—— Sriram Krishnan · [14:35]</span> ^q4

> <span class="qz">如果你看今天任何美国开源模型，它们都在使用中国模型作为老师或在某种程度上作为微调过程的一部分。</span>  
> *if you look at any American open source model today, they are using Chinese models as a teacher or in a way as a part of the fine tuning process.*  
> <span class="qm">—— Sriram Krishnan · [15:26]</span> ^q5

> <span class="qz">如果你提供一个有价值的产品，资本主义会找到一种方法让供应链为你工作。</span>  
> *if you're providing a product of value, capitalism will find a way to make the supply chain work for you.*  
> <span class="qm">—— Sriram Krishnan · [19:24]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 安全」挖下去**

- [[2026-07-26-a16z-ben-horowitz-the-fight-over-open-source|为什么开源是AI安全与创新的底线：Ben Horowitz谈开放权重之争]] —— 同嘉宾:Sofia Puccini · 同公司:Hugging Face、Anthropic · 同概念:蒸馏 (distillation)
- [[2026-07-28-yc-sam-altman-never-a-better-time-to-do-a-s|Sam Altman 谈 AI 时代的创业：未来 6 个月将抵过去两年的模型进展]] —— 同公司:Hugging Face、OpenAI
- [[2026-06-22-latent-space-gray-swan|让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏]] —— 同概念:智能体 (agent)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|iPod之父Tony Fadell：反直觉的产品课]] —— 同公司:Anthropic、OpenAI · 同概念:智能体 (agent)
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Anthropic产品负责人Kat Wu：在AGI边缘做产品的PM生存指南]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构]] —— 同公司:Anthropic · 同概念:智能体 (agent)

</div>
</div>

*本集关键词:开源模型 · 前沿实验室 · 蒸馏 · 定价压力 · AI 政策*

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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); }
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
