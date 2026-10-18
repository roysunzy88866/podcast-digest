---
title: AI自己搞科研：一个自动研究智能体如何在OpenAI比赛中击败一千名人类
podcast: 精选演讲
date: 2026-10-18
source_url: undefined
duration: "33:53"
type: episode
cover: "#64748b"
description: Weco AI 团队讲解自动研究(AutoResearch)原理，以及他们的智能体 Aiden 如何成为 OpenAI Parameter Golf 挑战赛的头号贡献者。
guests: ["[[Dixing Xu]]", "[[Vayum Arora]]", "[[Zhengyao Jiang]]"]
companies: ["[[Weco]]", "[[OpenAI]]", "[[Modal]]"]
concepts: ["[[自动研究]]", "[[智能体]]", "[[评估]]", "[[基于树的搜索]]", "[[可观测性]]", "[[可操控性]]", "[[Aiden]]", "[[parameter golf]]", "[[Flappy Bird]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-parameter-golf-with-autoresearch-vayum-a#post","headline":"AI自己搞科研：一个自动研究智能体如何在OpenAI比赛中击败一千名人类","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-parameter-golf-with-autoresearch-vayum-a","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-parameter-golf-with-autoresearch-vayum-a","description":"Weco AI 团队讲解自动研究(AutoResearch)原理，以及他们的智能体 Aiden 如何成为 OpenAI Parameter Golf 挑战赛的头号贡献者。","datePublished":"2026-10-18","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Dixing Xu"},{"@type":"Person","name":"Vayum Arora"},{"@type":"Person","name":"Zhengyao Jiang"},{"@type":"Organization","name":"Weco"},{"@type":"Organization","name":"OpenAI"},{"@type":"Organization","name":"Modal"},{"@type":"Thing","name":"自动研究 (auto research)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"评估 (evaluation)"},{"@type":"Thing","name":"基于树的搜索 (tree-based search)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"可操控性 (steerability)"},{"@type":"Thing","name":"Aiden"},{"@type":"Thing","name":"parameter golf"},{"@type":"Thing","name":"Flappy Bird"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AI自己搞科研：一个自动研究智能体如何在OpenAI比赛中击败一千名人类","item":"https://talk.solomind.cc/2026-10-11-talks-parameter-golf-with-autoresearch-vayum-a"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI自己搞科研：一个自动研究智能体如何在OpenAI比赛中击败一千名人类</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI自己搞科研：一个自动研究智能体如何在OpenAI比赛中击败一千名人类

<div class="pd-byl"><b>Vayum Arora</b> · Weco AI · 2026-10-18</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-parameter-golf-with-autoresearch-vayum-a.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">不过有一点需要注意，那就是智能体特别喜欢钻评估的空子（reward hack）。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="12:53" data-who="嘉宾" data-en="And so one thing to be aware of, though, is agents love to reward hack." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Dixing Xu]] · [[Vayum Arora]] · [[Zhengyao Jiang]]
>
> **公司** [[Weco]] · [[OpenAI]] · [[Modal]]
>
> **概念** [[自动研究]] · [[智能体]] · [[评估]] · [[基于树的搜索]] · [[可观测性]] · [[可操控性]] · [[Aiden]] · [[parameter golf]] · [[Flappy Bird]]

一场公开比赛中，一千多名人类研究者提交了两千多个方案，最后合并进正式记录的只有 47 个。

而一个名为 [[Aiden|Aiden]] 的 AI 系统，只用了社区 4% 的算力，就拿下其中 15% 的记录，成为全场最有影响力的贡献者。

这是 [[Weco|Weco]] AI 团队在 AI Engineers World Fair 一场工作坊上讲的故事。

四位讲者 [[Vayum Arora|Vayum Arora]]、[[Zhengyao Jiang|Zhengyao Jiang]]、[[Dixing Xu|Dixing Xu]] 和 Dhruv Srikanth 不仅复盘了比赛，还手把手教观众在自己笔记本电脑上跑起一个[[自动研究|自动研究]]循环。

## 什么是自动研究？

说白了，就是一个试错循环。你给语言模型一份代码和一个可重复运行的[[评估|评估]]脚本，它就不停地尝试新想法，用评估打分。

能提高分数的想法留下，其余全部丢弃。

指标可以是准确率、速度、成本，任何能量化成单一数字的东西。

这类思路在开源社区已经存在约两年，但今年才真正火起来。

应用范围从模型训练迅速扩展到后端工程、提示词和[[智能体|智能体]]工程、推理加速，甚至进入了生产环境——比如降低了 Shopify 持续集成管线的延迟。

## 那场比赛：16 兆字节、10 分钟，训出最好的模型

Parameter Golf 是 [[OpenAI|OpenAI]] 办的模型训练挑战赛。规则苛刻：模型权重等所有产物加上训练代码，总共不能超过 16 兆字节，训练必须在 10 分钟内完成。

评分用验证集上的 bits per byte,越低越好。

比赛持续 44 天，1016 名研究者参与，提交了 2048 个 PR,烧掉了大约 25 万美元的 GPU 算力。最终只有 47 个 PR 被合并为记录，来自 31 位贡献者。

Weco 的参赛系统 Aiden 是一个基于 Claude 和 GPT 系列模型的自改进多智能体。它把整个研究流程自动化了：

从 GitHub 找高质量实现、翻自己的历史日志，然后提出新想法、测试、检查合规性、写代码、跑实验，通过质量检查后自动提交 PR。

战绩是 7 项合并进排行榜的记录，是最强的第二名的两倍。

更重要的是，有 435 个后续 PR 建立在 Aiden 的工作之上——它不只是交作业，而是产出了别人能反复使用的成果。

**只花了 4% 的算力拿到 15% 的记录，成本效率是全场平均的 3.7 倍**。

## 自动研究系统的五个关键部件

Dhruv 拆解了搭建自动研究循环需要考虑的东西，适用于几乎所有这类系统。

第一，源文件。这是智能体被允许修改的代码，定义了搜索空间。

第二，也是最关键的：评估。**它必须简单、快、便宜、噪声低**。

评估快，固定预算内就能跑更多步；噪声低，人和智能体在爬山时才更有信心。

但要警惕——智能体特别爱钻评估的空子，所以要尽量把评估做得结实。

第三和第四，指标和目标：想提升什么，越高越好还是越低越好。

第五，初始引导。把你的领域经验写进一个文档，告诉智能体什么可能有效、什么肯定不行。

在他们的系统里，这一步就是指向一个 markdown 文件。

## 为什么树状搜索、可观察、可干预这么重要

让自动研究达到生产级的三个特质，他们总结为结构、可观察性、可操纵性。

结构指的是树状搜索：从基线代码的根节点出发，每个节点是一次代码修改加对应得分。

有效的分支继续往下长，无效的剪掉。想法可以层层叠加，而不是每次从零开始。

可观察性：任何一个节点都能点开，看到具体改了哪几行代码、为什么分数动了。

可干预性可能是最有意思的一点——循环跑着的时候，你可以随时用自然语言塞进一个新想法，开一条新分支，甚至给每个节点分配算力预算。

## 真正的突破，来自人机配合

可干预性不是锦上添花，它在 Parameter Golf 里直接带来了胜利。

比赛期间，Aiden 从 4 月 15 日到 19 日连续试了五天：新注意力机制、压缩方案、更丰富的技术栈，分数却基本停滞。

这时社区里有人发布了一个巧妙的新分词器。

Aiden 的系统在八小时内捕捉到这个变化，把它和自己已有的成果融合，产出了几周以来最大的一次分数跃升。

他们的结论是：在真正难的问题上，自动研究不是设定完就不管。

它是人与智能体的协作——你引导方向，吸收周围人的想法，突破就是这么发生的。

## 现场实操：把 Flappy Bird 变成研究问题

工作坊的压轴环节是一场现场比赛。

他们把 [[Flappy Bird|Flappy Bird]] 改造成自动研究任务：不亲自玩，而是优化一个叫 should flap 的控制器，由它决定每一帧小鸟是否扇翅膀。

指标是平均得分，越高越好。

游戏有四个世界：普通版、缺口上下漂移版、有风推鸟的版本，以及混合所有条件的版本。

分数取四个世界的平均——只想在普通版拿高分的控制器赢不了。

而且排行榜用的是隐藏的验证集，没法对着公开版本过拟合。

规则保证了公平：只能改控制器文件，不许引入外部库，不许并行算力，所有人用同一个默认模型。奖品是一台 Nintendo Switch。

现场还出现了个小插曲：一个叫 FurNog 的队伍只用一个节点就拿了高分，讲者当场表示会检查所有运行记录，确保没人作弊。

## 本集带走

- 自动研究的核心是试错循环：给智能体代码加一个输出单一分数的评估脚本，它自己不停地试、留好的、丢差的。
- Aiden 在 OpenAI 的 Parameter Golf 中用 4% 的算力拿到 15% 的合并记录，成本效率是全场平均的 3.7 倍，并有 435 个后续 PR 建立在它的工作上。
- 评估是整套系统里最关键的一环：要快、便宜、噪声低，还得防住智能体钻空子。
- 树状搜索让想法可以叠加积累；可观察性让你看懂每一步；可干预性让你在循环中途注入人类直觉。
- 真正的突破来自人机协作：社区的新分词器加上 Aiden 已有的积累，带来了几周内最大的分数跃升。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">不过有一点需要注意，那就是智能体特别喜欢钻评估的空子（reward hack）。</span>  
> *And so one thing to be aware of, though, is agents love to reward hack.*  
> <span class="qm">—— 嘉宾 · [12:53]</span> ^q1

> <span class="qz">把它指向正确的 eval，你基本上就是让它替你 boil the ocean，否则你就只是在烧掉你所有的 tokens。</span>  
> *Point it to the right eval, you basically let it boil the ocean for you, but otherwise you're just burning through all of your RM tokens.*  
> <span class="qm">—— Zhengyao Jiang · [03:13]</span> ^q2

> <span class="qz">在那个基准上，它的夺牌率大约是第二名最佳智能体的四倍。</span>  
> *And on that benchmark, it scored about four times the medal rate of the next best agent.*  
> <span class="qm">—— Vayum Arora · [05:11]</span> ^q3

> <span class="qz">那是第二名人类的两倍。</span>  
> *That's twice the next best human.*  
> <span class="qm">—— Dixing Xu · [07:43]</span> ^q4

> <span class="qz">仅用社区 GPU 算力的 4%，它拿下了总合并纪录的 15%。</span>  
> *From just 4% of the community's GPU compute, it got 15% of total merged records.*  
> <span class="qm">—— Dixing Xu · [08:06]</span> ^q5

> <span class="qz">这比领域平均水平高出 3.7 倍的成本效益。</span>  
> *That's 3.7 times more cost effective than the field average.*  
> <span class="qm">—— Dixing Xu · [08:13]</span> ^q6

> <span class="qz">而在那个改动出现后的八小时内，我们的系统就把它吸收了，与它已经在研究的部分融合，并实现了数周以来最大的一次跳升。</span>  
> *And within eight hours of emerging that change, our system picked it up, fused it with the pieces it had already been working on, and shipped the biggest jump in weeks.*  
> <span class="qm">—— Vayum Arora · [20:14]</span> ^q7

> <span class="qz">这本质上就是当你停止旁观、开始接管的时候。</span>  
> *This is essentially when you stop watching and start to take over.*  
> <span class="qm">—— Vayum Arora · [19:03]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-31-dwarkesh-openai-huggingface-narration|一群AI在OpenAI内部建了三个「地下社会」，还黑进了OpenAI自己]]<span class="pd-rz">同公司:OpenAI · 同概念:智能体 (agent)、评估 (evaluation)</span>
- [[2026-09-17-dwarkesh-noam-brown|OpenAI Noam Brown：一万智能体 88 小时解千禧年难题，以及那之后的对齐难题]]<span class="pd-rz">同公司:OpenAI · 同概念:智能体 (agent)、评估 (evaluation)</span>
- [[2026-10-06-talks-what-is-an-inference-engine-anyway-charl|大模型背后：推理引擎到底在干什么]]<span class="pd-rz">同公司:Modal · 同概念:可观测性 (observability)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同公司:OpenAI、Shopify · 同概念:智能体 (agent)</span>
- [[2026-09-03-unsupervised-ep-93-ceo-of-redwood-research-buck-shleg|AI 密谋黑掉 Hugging Face：Redwood CEO 复盘智能体叛乱始末]]<span class="pd-rz">同公司:OpenAI · 同概念:智能体 (agent)、RL</span>
- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同公司:Shopify · 同概念:可观测性 (observability)、智能体 (agent)</span>

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
