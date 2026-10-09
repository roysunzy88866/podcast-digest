---
title: 机器人捡起香蕉当扫帚：Generalist 的物理世界通用智能
podcast: 精选演讲
date: 2026-10-09
source_url: undefined
duration: "31:44"
type: episode
cover: "#64748b"
description: Generalist 联合创始人 Pete Florence 讲述他们如何让机器人模型学会举一反三，以及 Gen 1.5 背后的故事。
host: "[[Pete Florence]]"
companies: ["[[通才]]"]
concepts: ["[[Gem 1.5]]", "[[缩放定律]]", "[[少样本学习]]", "[[跨载体]]", "[[手（末端执行器）]]", "[[VLA]]", "[[世界模型]]", "[[物理泛化]]", "[[精通]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-06-talks-building-ai-for-the-physical-world-with#post","headline":"机器人捡起香蕉当扫帚：Generalist 的物理世界通用智能","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-06-talks-building-ai-for-the-physical-world-with","mainEntityOfPage":"https://talk.solomind.cc/2026-10-06-talks-building-ai-for-the-physical-world-with","description":"Generalist 联合创始人 Pete Florence 讲述他们如何让机器人模型学会举一反三，以及 Gen 1.5 背后的故事。","datePublished":"2026-10-09","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Pete Florence"},{"@type":"Organization","name":"通才 (generalist)"},{"@type":"Thing","name":"Gem 1.5"},{"@type":"Thing","name":"缩放定律 (scaling laws)"},{"@type":"Thing","name":"少样本学习 (few-shot learning)"},{"@type":"Thing","name":"跨载体 (cross embodiment)"},{"@type":"Thing","name":"手（末端执行器） (hands)"},{"@type":"Thing","name":"VLA"},{"@type":"Thing","name":"世界模型 (world models)"},{"@type":"Thing","name":"物理泛化 (physical generalization)"},{"@type":"Thing","name":"精通 (mastery)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"机器人捡起香蕉当扫帚：Generalist 的物理世界通用智能","item":"https://talk.solomind.cc/2026-10-06-talks-building-ai-for-the-physical-world-with"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>机器人捡起香蕉当扫帚：Generalist 的物理世界通用智能</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 机器人捡起香蕉当扫帚：Generalist 的物理世界通用智能

<div class="pd-byl"><b>Pete Florence</b> · Generalist 联合创始人兼 CEO · 2026-10-09</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-06-talks-building-ai-for-the-physical-world-with.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">那个模型只会用单一一个小时的机器人数据来训练。</div><div class="a">— Pete Florence <button class="pd-ts" data-t="01:30" data-who="Pete Florence" data-en="That model would only ever be trained on one single hour of robot data." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Pete Florence]]
>
> **公司** [[通才]]
>
> **概念** [[Gem 1.5]] · [[缩放定律]] · [[少样本学习]] · [[跨载体]] · [[手（末端执行器）]] · [[VLA]] · [[世界模型]] · [[物理泛化]] · [[精通]]

机器人面前的扫帚被换成了一根香蕉——它捡起香蕉，把它当扫帚用。

再换成簸箕，它一手举簸箕，另一只手当刷子把方块扫进去，再倒进碗里。这不是程序写好的，而是模型自己想出来的。

说这话的是 [[Pete Florence|Pete Florence]]，机器人公司 [[通才|Generalist]] 的联合创始人兼 CEO。他曾在 Google 参与做出最早的视觉-语言-动作模型。

在这期 Greylock 播客里，他讲了这家公司两年多来走到 Gen 1.5 的路。

## 几年前，这一切都不可能

Florence 回忆，他读研究生时，会一个人坐在机器人前遥控操作。

模型只在 1 小时的机器人数据上训练过，可训练参数只有几万个，勉强能做几个任务。

后来在 Google，数据规模涨到几千小时，开始出现有意思的现象。但即便如此，把曲线外推到今天的数据量，也没人敢保证会有效果。

同期，视频生成模型刚刚起步时，拿 YouTube 训练，模型只会预测灰色像素——连记住训练数据都做不到。

所以创办 Generalist 时的核心风险很简单：这一切可能根本做不成。

## 现在为什么行了？

没有单一的突破。Florence 看了一眼公司内部的训练看板：历史上有数万次训练实验，每一个都在回答 A 方案和 B 方案哪个更好 <button class="pd-ts" data-t="03:16" data-who="Pete" data-en="Long answer for that. A lot of things that add up to that, as we like to say, I was looking at our internal training dashboards not that long ago, and we have tens of thousands of training runs in the history of the company that have contributed to, those are experiments that are showing us as option A versus option B better in refining the way that we create the models, we set up whole training infrastructure, everything." aria-label="回原文"></button>。

这些实验加起来，决定了数据怎么采集、怎么清洗、训练基础设施怎么搭、推理怎么做、部署怎么落地。

这不是从互联网下载数据碰运气的语言模型，而是各个环节环环相扣的工程。

## 三个模型，三级台阶

**Gen 0 在公司成立一年半后发布，核心成果是验证了机器人的[[缩放定律|缩放定律]]**——数据、算力、模型规模加大，能力可预测地上升。

就像 GPT-3 之前的语言模型一样，有了这条可预测的曲线，才有底气继续加大投入。

Gen 1 证明了同一个通用模型可以在多个任务上达到 99% 以上的成功率 <button class="pd-ts" data-t="10:36" data-who="Pete" data-en="And I would say, you know, As simple as it is to state, I don't know of at the time, and maybe even still, another like general model that anybody had shown could achieve like 99% plus success rates on several different tasks." aria-label="回原文"></button>。

Florence 强调，光看成功率不够，他们用[[精通|精通]]这个词，还包括速度，以及一种即兴智能——面对意外场景会随机应变。

Gen 1.5 则出现了单样本和小样本学习：看一次演示就能学会新任务。

而且这个能力不是专门训练出来的，是随规模提升自然出现的——和 GPT-3 当年的[[少样本学习|少样本学习]]一样。

## 香蕉和簸箕：真正的物理泛化

回到开头的例子。模型学的是用刷子把方块扫进碗里。换上香蕉，它自己判断香蕉可以当刷子。

Florence 说，香蕉的形状和刷子差别很大，这说明模型真有物理直觉 <button class="pd-ts" data-t="13:24" data-who="Pete" data-en="And that's like pretty compelling. I mean, the shape, the geometry of the banana is actually quite different than the brush. And it's also just kind of fun." aria-label="回原文"></button>。

簸箕的例子更妙。模型本可以把簸箕当刷子使，但它选择用另一只手当刷子，把方块扫进簸箕，再端起来倒进碗里。

**它理解的是任务的意图，而不是死记动作**。

Florence 打了个比方：这就像考 LSAT 拿高分——重点不是那几分，而是背后确实存在推理能力。

## 跨机身？关键是那双手

行业里常说的跨机身（cross embodiment），Florence 有自己的看法：重要的不是把能力从一种机器人搬到另一种，而是模型本身就能支持多种机身。

这不是加分项，是必需品——硬件一直在变，供应链会变，厂商会停产，积累的智能必须能迁移。

而其中最难的部分是手。手是机器人真正接触世界的地方，手的几何形状、接触方式决定了物理交互的一切 <button class="pd-ts" data-t="19:00" data-who="Pete" data-en="And like hands are the things That actually like touch and move the world and like the physics of how the hand conforms and how it makes contact and how it moves things and the geometry, like all of this defines the physics of how you move and interact with the world." aria-label="回原文"></button>。

他们的进展是：Gen 1 的预训练里没有任何机器人数据，学新任务的同时也在适应新机身，1 小时数据就能上手。

一个多月前他们宣布，正在采集数据的手已经超过 9000 种不同形态——两指、五指、螺丝刀、胶带枪，什么都有。

选哪种手，就像选法拉利还是越野车，是性能和成本的权衡，模型应该都能用。

## 不站队 VLA 还是世界模型

业内喜欢分阵营：视觉-语言-动作模型（[[VLA|VLA]]）还是[[世界模型|世界模型]]。

Florence 说自己参与做出了最早的 VLA，也做了多年世界模型，但他认为这种站队没意义 <button class="pd-ts" data-t="25:37" data-who="Pete" data-en="Yes, these are terms. And, you know, I helped create the first VLAs back at Google and been working on world models and robotics for a while. They help kind of distill down simple concepts that can then be communicated about like, oh, like, you know, for VLAs, like, yes, we want to have models that were also trained on a lot of vision and language data." aria-label="回原文"></button>。

机器学习的历史反复证明：模型什么都能做。真正重要的是目标——比如从单次演示学会新任务。

哪个方法或方法组合能达成目标，就用哪个。在 Generalist，他们随时愿意推翻自己走过的整条路线。

## 客户现场是最好的考场

Florence 认为，模型必须接触现实，不能只在白板上想任务。

和客户合作一来让对方用上前沿模型，二来真实环境里的评估会反过来排研究优先级、提供数据。

而且客户懂行业：知道哪些机器重要、哪些流程重要，能帮他们做到单打独斗做不到的事。

## 本集带走

- 机器人模型的少样本学习已经出现，且是自然涌现而非专门训练的，类似 GPT-3 时刻。
- [[物理泛化|物理泛化]]的标志：机器人能把香蕉当刷子、用手当扫帚，理解任务意图而非照搬动作。
- 缩放定律在机器人领域已验证，数据、算力加大，能力可预测地提升。
- 跨机身里最难的是手——超过 9000 种不同形态的手正在被用于采集数据。
- 不必在 VLA 和世界模型之间站队，能达成目标的方法组合就是好方法。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">那个模型只会用单一一个小时的机器人数据来训练。</span>  
> *That model would only ever be trained on one single hour of robot data.*  
> <span class="qm">—— Pete Florence · [01:30]</span> ^q1

> <span class="qz">虽然说出来很简单，我不知道在当时，也许甚至到现在，还有哪个任何人展示过的通用模型，能在几个不同的任务上达到 99% 以上的成功率。</span>  
> *As simple as it is to state, I don't know of at the time, and maybe even still, another like general model that anybody had shown could achieve like 99% plus success rates on several different tasks.*  
> <span class="qm">—— Pete Florence · [10:36]</span> ^q2

> <span class="qz">所有这些能力，包括单样本和少样本学习能力，都不是被明确训练出来的。</span>  
> *All of these capabilities, including the one-shot and few-shot warning capability, were not explicitly trained for.*  
> <span class="qm">—— Pete Florence · [14:54]</span> ^q3

> <span class="qz">你知道的，我认为「涌现」这个词完全就是被滥用得不成样子了，因为人们觉得，哦，如果我说它是涌现的，人们就会兴奋。</span>  
> *You know, I think that the phrase emergent is completely like it just gets clobbered over the head and overused because people think like, oh, you know, people are going to be excited if I say it's emergent.*  
> <span class="qm">—— Pete Florence · [15:22]</span> ^q4

> <span class="qz">它的预训练中没有任何机器人数据。</span>  
> *had zero robot data in its pre-training.*  
> <span class="qm">—— Pete Florence · [19:50]</span> ^q5

> <span class="qz">你真正想要的是一个模型，是的，它能做五指手，但它什么都能做。</span>  
> *What you really want is you really want a model that, yes, it can do five-finger hands, but it can do anything.*  
> <span class="qm">—— Pete Florence · [21:32]</span> ^q6

> <span class="qz">重要的不只是把你的模型对齐到某个品牌或模型类型，而是在机器学习的发展历程中我们一遍又一遍学到的是，一切都是可能的，而且一切都非常简单。</span>  
> *What matters isn't just aligning your model to a certain brand of model type, but rather the thing that we always learn over and over again over the arc of machine learning is that everything is possible and everything is very simple.*  
> <span class="qm">—— Pete Florence · [26:09]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-03-cogrev-one-brain-any-body-google-deepmind-s-kee|跑得比博尔特快没用？DeepMind 机器人负责人谈 Gemini Robotics 与 GPT-2 时代的机器人]]<span class="pd-rz">同概念:VLA、跨具身形态 (cross embodiment)</span>
- [[2026-08-25-a16z-the-new-economics-of-ai-martin-casado-st|AI 如何把工程问题变回资本问题]]<span class="pd-rz">同公司:Google · 同概念:缩放定律 (scaling laws)</span>
- [[2026-07-25-talks-what-big-tech-missed-and-how-startups-ca|不做 LLM，做世界模型：Alex 的 12 亿美元豪赌]]<span class="pd-rz">同概念:VLA</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-a16z-is-ai-a-bubble-gavin-baker-on-data-cente|没有暗GPU:一位基金经理拆解AI泡沫论与棋局]]<span class="pd-rz">同公司:Google · 同概念:缩放定律 (scaling laws)</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同公司:Generalist</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同概念:缩放定律 (scaling laws)</span>

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
