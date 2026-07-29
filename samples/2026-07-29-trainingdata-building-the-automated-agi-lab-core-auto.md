---
title: "硅谷新贵 Core Automation:我们为什么必须要取代 Transformer"
podcast: Training Data
date: 2026-07-29
source_url: undefined
duration: "48:39"
type: episode
cover: "#64748b"
description: "OpenAI 前高管与 Gemini 预训练负责人联手创办新实验室,直指当前 AI 架构无法持续学习的死穴。"
host: "[[Sonja]]"
guests: ["[[Rohan Anil]]"]
cohosts: ["[[Jerry Tworek]]"]
companies: ["[[Core Automation]]"]
concepts: ["[[Transformer]]", "[[强化学习]]", "[[预训练]]", "[[计算深度]]", "[[编码智能体]]", "[[测试时学习]]", "[[内核]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><span class="soon" title="必读页归 C13c">最热</span></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>硅谷新贵 Core Automation:我们为什么必须要取代 Transformer</span></a><div class="pd-acts"></div></div></header></div>

# 硅谷新贵 Core Automation:我们为什么必须要取代 Transformer

<div class="pd-byl"><b>Jerry Tworek</b> · Core Automation 创始人</div>

<div class="pd-mt">2026-07-29 · Training Data · 48:39</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-29-trainingdata-building-the-automated-agi-lab-core-auto.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">替换 Transformer 的第一步是深深感激它们能带我们走多远。</div><div class="a">Sonja · 01:50</div></div>

> [!info] 关联
> **嘉宾**:[[Rohan Anil]]
>
> **主持**:[[Sonja]]
>
> **联合主持**:[[Jerry Tworek]]
>
> **涉及公司**:[[Core Automation]]
>
> **概念**:[[Transformer]] · [[强化学习]] · [[预训练]] · [[计算深度]] · [[编码智能体]] · [[测试时学习]] · [[内核]]

<div class="pd-tldr"><b>一句话</b>OpenAI 前高管与 Gemini 预训练负责人联手创办新实验室,直指当前 AI 架构无法持续学习的死穴。</div>

这集访谈请到了旧金山备受关注的新实验室 [[Core Automation|Core Automation]] 的两位创始人:Jerry 和 Rohan。Jerry 曾在 OpenAI 担任副总裁,领导过草莓与推理团队;Rohan 则是 Gemini 的四位[[预训练|预训练]]负责人之一,此前在 Google Brain 和 Anthropic 做了大量基础研究。他们凑在一起创业,是因为有一个极其根本且反共识的判断:**今天统治一切的 [[Transformer|Transformer]] 架构已经见顶了,必须被取代**。全文顺着两位嘉宾的视角,分四个层次展开论述:为什么 Transformer 到了极限?问题到底出在哪里?为什么大厂不愿做这件事?以及他们的解法与新实验室的实验哲学。

## Transformer 到顶了:懂它的长处,才知它的死穴

一切始于 Jerry 最近发的一条辛辣推文:「替换 Transformer 的第一步,是深深感激它们能带我们走多远。」当被问及这是否是给 Transformer 写的悼词时,Jerry 解释道,感激意味着深刻理解它擅长什么,从而不用去重造它已经解决的轮子,而是精准打击它的软肋 <button class="pd-ts" data-t="02:12" data-who="Jerry" data-en="But appreciating Transformer means like understanding what it does well. So you are not solving the problems that it is solving well. You have to focus on its weaknesses." aria-label="回原文"></button>。

他指出,过去六年我们搭乘的火车,本质上是在给两种核心操作(注意力机制和混合专家模型,即 MoE)疯狂堆砌参数。我们极度擅长把模型越做越大,也熟练掌握了大规模预训练和大规模[[强化学习|强化学习]](即让模型通过反复试错来学习目标任务的机器学习方法)这两种算法。但如今,通往更智能系统的瓶颈,已经变成了架构本身 <button class="pd-ts" data-t="03:03" data-who="Jerry" data-en="And I'm asking myself a lot, what is next in machine learning? I think at this moment, what the bottleneck is to better models and to smarter systems is the architecture." aria-label="回原文"></button>。

接住「架构是根本瓶颈」这个反共识判断,接下来要问的是:为什么大模型走不出实验室?Jerry 分享了他在 OpenAI 时的亲身经历。他一直是个「强化学习最大主义者」,坚信只要把强化学习的规模提上去,就能解决一切问题、实现通用人工智能(AGI)。当团队终于开始大规模扩展强化学习时,基准测试分数一路飙升。然而,现实世界的任务并没有因此被全部解决 <button class="pd-ts" data-t="06:31" data-who="Jerry" data-en="This is where we solve everything. And I saw us training model after model. This model was getting better and better." aria-label="回原文"></button>。

原因在于训练数据与现实分布存在巨大的鸿沟。评估模型的基准测试,和训练模型的任务其实是同一枚硬币的两面,但真实世界的任务要混乱、模糊得多。只要实验室停止训练新模型,哪怕现有的模型当初装下了全人类的知识,几个月、几年后,它也会因为世界上出现了新事件、新工具、新代码库而变得过时且无用 <button class="pd-ts" data-t="21:30" data-who="Jerry" data-en="And then if we ever stop training that model, what would happen? The question worth asking often, I'm thinking about Transformer, what would happen if OpenA and Anthropic stopped training new models and we got the Transformer we have today and say, this is it." aria-label="回原文"></button>。

说完了 Transformer 为什么无法一劳永逸地解决现实问题,接下来就是他们给定的病理诊断:机制本身的[[计算深度|计算深度]]太差。

## 病灶诊断:模型的「计算深度」太差

顺着「架构本身有局限」的思路,Rohan 给出了一个非常技术性的病理诊断:Transformer 的计算深度很差。

什么是计算深度?目前我们训练的模型是很「浅」的,最多也就大约一百层。因为「深度学习」顾名思义是要追求更深层的表示。目前的变通做法是利用思维链和让模型自己生成长推论来增加计算深度——因为你每多生成一个 token(模型处理文本的基本单位),就等于在网络上多增加了一条计算路径 <button class="pd-ts" data-t="19:46" data-who="Rohan" data-en="There has been experiments on going into depth, but no one has actually shown us learning extremely deep representations. Chain of thought reasoning and RL to do chain of thought by model itself is one way to increase computational depth because every token you add, you add like one more pathway." aria-label="回原文"></button>。

这种打补丁的做法带来了新问题。为了得到更好的结果,模型现在被迫一次只吐一个 token 地去生成极长的推论。这在推理(即模型根据输入生成输出的过程)阶段是非常低效的。整个行业的应对策略仅限于投机解码(让小模型先猜、大模型来验,以此加速推理)这种治标不治本的「创可贴」方案 <button class="pd-ts" data-t="15:49" data-who="Rohan" data-en="And I would like to find architectures that spend computation much better than current chain of thought token generation. To give a much better overview, I think of like pre-training has built the transformer with certain context length and RL comes in and it's like, well, that's not sufficient." aria-label="回原文"></button>。

既然算力花得极其低效,既然病根在于架构,那为什么没有别人去换掉它?这正是他们选择走出大厂、自立门户的核心原因。

## 时机与组织:为什么大厂做不了这件事

既然换架构需要庞大的基准算力来验证,这听起来不该是大厂的活儿吗?对于「为什么创业」这个敏感问题,Jerry 的回答是:时机。

如今的局面是,最大、最成功的几个实验室正陷入史上最激烈的市场竞争战。只要 Transformer 还能赚钱,只要投入资源扩大现有模型规模就能在下个季度赢下比赛,大厂就很难腾出手去研究一两年后才能重定义领域的替代方案 <button class="pd-ts" data-t="13:28" data-who="Jerry" data-en="Market is right now in a very specific place where the biggest and the most successful labs by coincidence or by fate are probably in the most competitive market fight ever right now, which makes them not very keen on trying different paths, trying alternatives." aria-label="回原文"></button>。他基本和所有大实验室聊过,发现他们对 Transformer 的替代方案毫无兴趣;而排名靠后的实验室,则只是在拼命模仿头部玩家的[[编码智能体|编码智能体]]。

除了市场竞争导致的短视,Rohan 还指出了一个更深层的结构性难题:**预训练和强化学习是两个完全不同的优化问题**。预训练是处理大批量数据,而强化学习方差更高、需要做推演。要把这两者结合起来做端到端的统一优化,在数学和实践上绝非显而易见。大厂的研究员即便觉得有道理,也会因为要赶下一个模型的发布周期,而无法投入六个月去做这种长期研究 <button class="pd-ts" data-t="33:21" data-who="Rohan" data-en="Or what stops the labs from being able to unify the two? I don't think it's as obvious because it's a completely, again, different optimization problem. You have a prior, you're doing rollouts, you have higher variance, and then pre-training is much larger batch, like more parallelism or compute." aria-label="回原文"></button>。

大厂受困于发布周期与组织壁垒,这正是 Core Automation 要填补的生态位。那么,他们的具体解法是什么?

## 解法与新实验室哲学:从写内核到自动化科学

他们给出的解法核心,是把预训练和强化学习结合起来,端到端地思考如何花算力,以此来获得数量级上的效率提升 <button class="pd-ts" data-t="27:58" data-who="Rohan" data-en="But it was the bootstrap process to get there. We have to combine pre-training and RL together. And that's like where one order of magnitude improvement would come from." aria-label="回原文"></button>。为了实现这个目标,Core Automation 定下了「构建最自动化实验室」的路线。他们要重建整个深度学习堆栈,并且把横亘在新架构探索路上的一大拦路虎——**[[内核|内核]]生成**——给自动化掉。

内核是让算法在底层硬件(如 B200 节点)上高效运行的代码。如果新架构跑不快,再好的数学理论也没用。Rohan 举了一个他们举办的 QR 内核竞赛的例子:这是一个关于古老线性代数操作的优化问题。现有的标准解法表现平平;人类加搜索循环能快大约 7 倍;而全世界极少数具备极高品味的顶尖专家,靠花费约十万美元调用编码智能体,四周后能写出快 60 倍的解决方案 <button class="pd-ts" data-t="41:10" data-who="Rohan" data-en="And then a human plus some search loop can get you something like 7x. But it requires the high-taste human, like there's maybe three people in the world, and spend about $100,000 on these coding agents over a span of four weeks to get to a solution that's 60x faster." aria-label="回原文"></button>。如果能造出一个模型来取代那极少数的专家,自动写出这种 60 倍速的内核,就能为探索全新架构打开天窗。

> 【背景】这里的 TFLOPs 指每秒万亿次浮点运算,是衡量 GPU 运算性能的单位。矩阵分解是高级算法优化中常见的数学操作。

把繁琐的底层工作交给智能体,正是他们重塑科研流程的缩影。Jerry 认为,人机混合的协同工作模式当下极其成功,单个研究员借助智能体能极大地提升迭代想法的速度。他给真正 AGI 下的定义也与此呼应:它不是单纯在经济工作上超越人类的系统,而是**一个能在没有任何人类参与的情况下,自我改进的模型** <button class="pd-ts" data-t="38:20" data-who="Jerry" data-en="Would that still keep the automation level the same or would that drift? um for me agi is a model that can improve itself without human uh in the loop in any in any way that's that that's i think i think the moment where we can meaningfully talk about about agi because that is in some way it is a sub definition of the previous one because improving ai more actually a job that humans can do it is economically valuable work" aria-label="回原文"></button>。这契合了他们想要通过自动化实验室来加速探索架构空间的目标。他们甚至开了一个略带玩笑的检验标准:如果整个团队去度两周假,回来后发现实验室的模型自己变得更强了,那就说明方向走对了。

最后,当被问及如何判断自己是否真的找到了那个「梦寐以求的优越架构」时,Jerry 坦言,最好的研究成果在变成真实图表之前,通常已经在他的梦里出现过了 <button class="pd-ts" data-t="46:52" data-who="Jerry" data-en="But at least it is my experience with research always has been that plot is already quite late in a journey where most of the time you already know what you want and already know what you are up to." aria-label="回原文"></button>。你其实隐约知道要找什么,只是在不断失败中把正确的碎片拼凑齐全,直到某天看到系统在测试阶段展现出长期、有意义的自适应学习能力,那时你就知道:就是这个了。

## 本集带走

1. **Transformer 见顶的核心症结是缺乏持续学习能力**:无论模型装下多少人类知识,只要世界在变(新事件、新代码库),停止训练的模型就会迅速贬值。根本出路是让模型能在部署时(测试时)基于真实用户数据持续学习。
2. **架构的底层计算效率亟待颠覆**:当前依赖一次生成一个 token 来增加计算深度的机制非常低效。将预训练与强化学习做端到端的统一优化,是获取算力效率数量级提升的关键所在。
3. **大厂生态正陷入短视的循环**:激烈的市场竞争迫使头部实验室疲于赶发新模型,尾部实验室疲于模仿头部。只有跳出这个发布周期,用原生自动化的新实验室,才能去啃「取代 Transformer」这种需长线投入的硬骨头。

<div class="pd-sec">全部金句 <span>10 条(中英对照,已过机器闸门)</span></div>

> 替换 Transformer 的第一步是深深感激它们能带我们走多远。  
> *The first step to replacing Transformers is appreciating deeply how far they were able to carry us.*  
> —— Sonja · [01:50] ^q1

> 我认为在此时此刻,对于更好的模型和更智能的系统,瓶颈是架构。  
> *I think at this moment, what the bottleneck is to better models and to smarter systems is the architecture.*  
> —— Jerry Tworek · [03:03] ^q2

> 我们需要拥有与用户一起学习的模型,在他们的数据上,在他们的现实世界任务上,在他们的现实世界分布上。  
> *we need to have models that learn with users, on their data, on their real-world tasks, on their real-world distribution.*  
> —— Jerry Tworek · [07:36] ^q3

> 如果 Transformer 是有利可图的,如果你可以花费更多的精力和更多的资源来扩展 Transformer 以在下一个季度获胜,那么很难至少投入大量的注意力和大量的精力来工作于可能更好或可能在一两年内重新定义该领域的东西。  
> *If Transformer is profitable and if you can spend more efforts and more resources scaling Transformer to win in the next quarter, it's very hard to put at least a lot of attention and a lot of energy to work on something that will maybe better or maybe will redefine the field in a year or two.*  
> —— Jerry Tworek · [13:28] ^q4

> 如果计算深度很差,我们要如何增加计算深度,只是提出这个问题就开启了大约 20 个关于我们如何修改机制以整合它的新方向。  
> *If the computational depth is poor you how do we increase computational depth and just posting that question opens up like 20 new directions on how we can modify the mechanism to incorporate it*  
> —— SPEAKER_01 · [16:51] ^q5

> 我们可能在从经验中学习上花费了比以往任何时候都更多的算力,但强化学习并不是从经验中学习的终点。  
> *we probably are spending the most compute than ever on learning from experience, but reinforcement learning is not the end of learning from experience.*  
> —— Jerry Tworek · [26:22] ^q6

> 我们必须把预训练和 RL 结合起来。这就是一个数量级改进会来自的地方。  
> *We have to combine pre-training and RL together. And that's like where one order of magnitude improvement would come from.*  
> —— SPEAKER_01 · [27:58] ^q7

> 对我来说,AGI 是一个可以在没有任何方式的人类参与循环的情况下改进自己的模型。  
> *um for me agi is a model that can improve itself without human uh in the loop in any in any way*  
> —— Jerry Tworek · [38:20] ^q8

> 人类-LLM 混合模式现在真的、真的很成功,但是没有人类的 LLM 就没那么成功了,完全没有。  
> *The human LLM hybrid is really, really successful right now, but LLMs without humans, not so much, not at all.*  
> —— Jerry Tworek · [39:00] ^q9

> 我一生中所有最好的图表在它们变成现实之前我都已经在梦中做过了。  
> *all the best plots in my life i have done in a dream before before actually they were they were real*  
> —— Jerry Tworek · [46:55] ^q10

*本集关键词:Transformer 替代架构 · 计算深度 · 预训练与强化学习 · 内核生成 · 自动化实验室*

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
