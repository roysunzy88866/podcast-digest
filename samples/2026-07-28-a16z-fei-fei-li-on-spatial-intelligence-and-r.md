---
title: World Labs 收购机器人公司：教 AI 理解物理世界
podcast: The a16z Show
date: 2026-07-28
source_url: undefined
duration: "42:55"
type: episode
cover: "#64748b"
description: 李飞飞谈为何用三维世界模型而非视频训练机器人，用数字世界解决数据瓶颈。
host: "[[Fei-Fei Li]]"
cohosts: ["[[Martin Cassaro]]", "[[Yunzhu Li]]"]
companies: ["[[World Labs]]", "[[Cynics]]"]
concepts: ["[[空间智能]]", "[[大型世界模型]]", "[[仿真]]", "[[反事实推理]]", "[[现实到仿真再到现实]]", "[[Marble]]"]
category: 创业与行业
tags:
  - 创业与行业
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>World Labs 收购机器人公司：教 AI 理解物理世界</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# World Labs 收购机器人公司：教 AI 理解物理世界

<div class="pd-byl"><b>Fei-Fei Li</b> · World Labs 创始人</div>

<div class="pd-mt">2026-07-28 · The a16z Show · 42:55</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-28-a16z-fei-fei-li-on-spatial-intelligence-and-r.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们正在构建 AI 的下一个前沿领域，我们称之为空间智能。</div><div class="a">Fei-Fei Li · 01:57</div></div>

> [!info] 关联
> **人物** [[Fei-Fei Li]] · [[Martin Cassaro]] · [[Yunzhu Li]]
>
> **公司** [[World Labs]] · [[Cynics]]
>
> **概念** [[空间智能]] · [[大型世界模型]] · [[仿真]] · [[反事实推理]] · [[现实到仿真再到现实]] · [[Marble]]

<div class="pd-tldr"><b>一句话</b>李飞飞谈为何用三维世界模型而非视频训练机器人，用数字世界解决数据瓶颈。</div>

训练一个机器人，居然比训练那些做语言问答的 AI 难得多——因为互联网上有海量的文字，却没有现成的物理动作数据。面对这个死结，李飞飞创立的 [[World Labs|World Labs]] 给出的答案是：不要只在现实里收集数据，去构建一个几何上一致的三维数字世界。机器人在这个世界里训练、评估，再把经验平移到现实里。这正是她最近收购机器人公司 [[Cynics|Cynics]] 的原因。

在这一集 A16Z 播客的对谈里，主持人与李飞飞、Cynics 联合创始人李昀竺一起，拆解了这笔收购背后的技术逻辑。你会听到三块内容：首先，为什么主流的纯视频模型没法教机器人干活，而必须构建一个空间和几何一致的「世界模型」；其次，机器人为什么必须用「数字[[仿真|仿真]]」来训练，它能解决哪些现实世界里根本做不到的事；最后，两位嘉宾给出了一个冷峻的现实判断——别指望人形机器人很快进你家扫地，机器人的落地会比想象中克制得多，但当下正是做基础设施的最好时机。

说完了整体的脉络，接下来先看第一块：这笔收购本身，以及 World Labs 到底在造什么。World Labs 做的是前沿模型实验室，核心目标是打造「[[空间智能|空间智能]]」。这指的是让 AI 能够生成、理解、推理并与三维空间互动的能力，而通往这个目标的核心载体是[[大型世界模型|大型世界模型]]。去年冬天，他们发布了第一版名为 [[Marble|Marble]] 的基础模型，它能接收图片或文字，将其转化为在几何上一致的三维世界 <button class="pd-ts" data-t="01:57" data-who="李飞飞" data-en="I think we should just recognize it's a frontier model lab. We are building the next frontier of AI, which is what we call spatial intelligence. And spatial intelligence is about creating AI that has the ability to..." aria-label="回原文"></button>。有意思的是，Cynics 一开始根本不是被收购方，而是 Marble 的一个客户。李飞飞发现老同事在用自家的模型，双方接触后才意识到彼此极度互补，这才促成了联手 <button class="pd-ts" data-t="05:35" data-who="李飞飞" data-en="It's amazing that you two work together. Yeah, and there is a funny story here because you would think because we work together, he was my amazing postdoc, we've been talking about this Cinex and WorldLab integration for a long time." aria-label="回原文"></button>。Cynics 解决的是机器人领域最致命的痛点：缺数据。语言模型能靠互联网吃下海量文本，但机器人学习在训练和评估时都极度缺乏数据 <button class="pd-ts" data-t="06:59" data-who="李昀竺" data-en="Really what Cynic's team is doing is trying to solve this extremely difficult problem in robotics, which is the lack of data. The lack of data in training, the lack of data in evaluation, this is very, very different from language models where data is abundant on the internet." aria-label="回原文"></button>。为了让机器人进步，必须释放「缩放定律」（Scaling Law，即模型越大、数据越多，能力越强）的力量，但物理世界的数据从哪来？Cynics 的方法叫「从真实到仿真再到真实」。他们把真实的物理环境映射到数字世界里，保证数字世界里发生的事和现实高度一致。这样就能用数字世界大规模生成的数据，去替代现实世界里昂贵且危险的测试 <button class="pd-ts" data-t="04:52" data-who="李昀竺" data-en="Right now, we see faced by the developments of general-purpose robots, especially around training and also around evaluations. So at Cynics, we are developing what we call a real-to-sim-to-real pipeline." aria-label="回原文"></button>。

工具变了，接下来看技术路线怎么选。现在有很多机器人公司在用纯视频模型来训练机器人，李昀竺和李飞飞认为这条主流路线有一个硬伤：缺乏一致性。机器人在学习时，需要理解空间、时间、不同视角以及交互上的一致性 <button class="pd-ts" data-t="13:14" data-who="李昀竺" data-en="So in order to create words with Robot Candler, the words, as I mentioned, need to capture the essential structure of the problem. And one of the very important and necessary requirements for those words will be consistency." aria-label="回原文"></button>。纯视频模型常常会出问题，比如机器人试着向前推一个物体，在视频模型的预测画面里，那个物体可能就凭空消失了。这种不一致会让机器人完全抓瞎，学不到正确的动作信号 <button class="pd-ts" data-t="13:43" data-who="李昀竺" data-en="And Marble, the generated words from Marble, is also provide an infrastructure, a component of that entire words that we believe is necessary for the robot learner." aria-label="回原文"></button>。相比之下，Marble 生成的三维世界能提供稳固的基础设施，保证几何上的连贯。在机器人的基础模型设计上，它本质上必须是个多模态模型，也就是能同时处理文本、图像、深度等各种信息。更重要的是，它必须把「动作」当成核心模态。如果模型把动作当输入，它就是在做仿真，预测环境怎么变；如果模型把动作当输出，它就是在做策略控制，决定下一步怎么走 <button class="pd-ts" data-t="11:46" data-who="李昀竺" data-en="So for example, for the foundation models, it essentially needs to be a multimodal model. So it has to take into account frame text, image, depth, and different kind of modalities." aria-label="回原文"></button>。

说完了为什么必须用三维世界模型，紧接着的一个问题是：为什么不直接在现实里训练，非要绕道数字仿真？李飞飞从哲学层面给出了解释：在仿真或不仿真之间，从来不是二选一。人类在做决定前，脑子里也会不断做模拟。现实世界的数据有一个天然的缺陷——它无法支撑「[[反事实推理|反事实推理]]」。也就是去推演那些还没发生、不可能发生，或者现实里根本凑不够数据的事件。你在脑子里推演，恰恰是在学习如何应对它。这在机器人领域至关重要，因为现实世界的数据永远不够用 <button class="pd-ts" data-t="19:42" data-who="李飞飞" data-en="So this kind of transition and also this kind of data flow is really enabling factors of both getting the best of both physics and the geometry and consistency, as well as all the power and magics from the data and compute." aria-label="回原文"></button>。李昀竺则更务实地指出了仿真能提供的两大核心价值：可靠性和效率。为了达到可靠性，你需要让机器人遇到足够多的场景。在数字仿真里，你可以系统性地随机改变光照、摩擦力、几何形状和物体类型，确保覆盖所有可能的情况 <button class="pd-ts" data-t="21:43" data-who="李昀竺" data-en="The first one is reliability, and the second one is efficiency. So for reliability, if you're thinking about a robotic system working reliably in the real environment, you need data to provide systematic coverage of all the state space and the variations that robots might encounter." aria-label="回原文"></button>。此外，现在很多人用远程操作设备手工控制机器人来收集数据，这个速度比人类自己动手还慢。但在仿真器里，你可以系统性地加速机器人的行为动态，训练它以远超人类的速度完成任务 <button class="pd-ts" data-t="22:17" data-who="李昀竺" data-en="And second is about efficiency. So right now, many people are doing teleoperation. And if you look at many of the teleoperation devices, imagining all the actual skeletons you are using, you are actually collecting the data at a speed that is actually slower than humans actually doing the task." aria-label="回原文"></button>。如今，哪怕只是在真实环境里评估一个模型的好坏，迭代速度都比语言模型慢了好几个数量级 <button class="pd-ts" data-t="24:23" data-who="李昀竺" data-en="And you really think about also the robotic evaluations right now people are doing in the real environments. The iteration speeds is multiple orders of magnitude slower than iterations of those language models." aria-label="回原文"></button>。客户需要数字世界来做安全、快速且可扩展的评估。

聊清楚了技术路径，最后一个话题关于商业落地：这个数字基础设施到底卖给谁，以及人形机器人离我们还有多远？World Labs 和 Cynics 做的不是机器人硬件，而是一个跟「身体无关」的数字基础设施。客户可以是单臂、双臂机器人，也可以是带轮子的操作器。他们把客户的机器人放进建好的数字世界里训练，或者做后训练 <button class="pd-ts" data-t="28:05" data-who="李昀竺" data-en="And this infrastructure is naturally model-agnostic and embodiment-agnostic. So I just want to be very clear, just because this is actually a very subtle, for you it's obvious, but it's a very subtle point, which is..." aria-label="回原文"></button>。在落地的节奏上，李昀竺指出了一个清晰的规律：机器人的应用一直是从完全结构化的环境，走向半结构化环境，最后才进入非结构化环境 <button class="pd-ts" data-t="29:42" data-who="李昀竺" data-en="So that's a very good question. So if you look at, for example, all the progressions of robotic applications in the real environments, it has always followed the trend from going from fully structured environments into semi-structured environments and then into unstructured environments." aria-label="回原文"></button>。完全结构化是汽车制造流水线，早就自动化了；半结构化是仓库、饭店；而非结构化就是你的家。人形机器人模仿人类的身体，但进化让人类有了万能但不专精的身体，专门为了在非结构化环境生存。所以人形机器人要解决的，恰恰是最难的商业问题。他认为当下更现实的做法，是在半结构化环境里用更专精的形态落地 <button class="pd-ts" data-t="29:42" data-who="李昀竺" data-en="So that's a very good question. So if you look at, for example, all the progressions of robotic applications in the real environments, it has always followed the trend from going from fully structured environments into semi-structured environments and then into unstructured environments." aria-label="回原文"></button>。主持人抛出了一个犀利问题：人类大脑运转只要三十瓦特，我们离造出拥有人类能效的机器人还有多远？李昀竺直言这还需要很长时间。现实里的机器人始终是一个复杂的系统工程，从软件、硬件到手指的摩擦系数都要严丝合缝。虽然技术前沿的推进比他预期的快，但要达到人类级别的效率和能力，还需要漫长的迭代 <button class="pd-ts" data-t="33:25" data-who="李昀竺" data-en="Is this like five years or this is like never? I think it's going to take a very long time. So if you're really thinking about robots in real environments, in the end, it will always be a system." aria-label="回原文"></button>。李飞飞也认同，当今 AI 领域最难的事，就是保持一种「适度乐观」。虽然语言模型可能在某些狭窄任务（比如写代码）上的效能在逼近人类，但机器人在能效和可靠性上还差得很远 <button class="pd-ts" data-t="34:34" data-who="李飞飞" data-en="But to achieve, for example, human-level efficiency and capabilities, it will take longer. Martin, the hardest thing in today's AI is to have the right measured optimism." aria-label="回原文"></button>。但他们并不着急把团队彻底揉碎重组，而是会循序渐进地整合，并正张开双臂迎接任何阶段的机器人公司来合作 <button class="pd-ts" data-t="37:07" data-who="李飞飞" data-en="This is a great question. I think at this point, you know, Yunzhu, Changxi, Sunny, Justin, Ben, and I have been talking about this. At this point, we are going to take it thoughtfully." aria-label="回原文"></button>。

## 本集带走

最后收个尾，这一集值得带走的主要是三层意思。第一，别用纯视频模型去教机器人干活，因为它在空间和时间上缺乏一致性，物体推着推着可能就凭空消失了；你得构建一个几何连贯的三维世界模型，把「动作」作为核心，这样才能真正让机器人学会怎么跟物理世界交互。第二，仿真不是现实数据的退而求其次，而是必经之路，它解决了现实世界凑不够数据的痛点；通过系统性改变光照和摩擦力等参数，并在虚拟世界里加速时间，它赋予了机器人可靠性和远超人类的效率，同时还支持了现实数据做不到的「反事实推理」。第三，别被那些满地跑的人形机器人忽悠了，进你家扫地还得等很久；从结构化工厂到半结构化的仓库，再到非结构化的家庭，机器人的落地会非常克制，当下的正确做法是做一个跟硬件无关的基础设施，先在那些最实际、离赚钱最近的半结构化场景里把跑通。

<div class="pd-sec">全部金句 <span>3 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">我们正在构建 AI 的下一个前沿领域，我们称之为空间智能。</span>  
> *We are building the next frontier of AI, which is what we call spatial intelligence.*  
> <span class="qm">—— Fei-Fei Li · [01:57]</span> ^q1

> <span class="qz">仿真扮演了一个非常重要的角色，这是现实世界的数据所没有的，那就是反事实推理，就是你在推演那些尚未发生或不可能发生的事件，或者你在现实世界中没有足够的数据让它发生。</span>  
> *There's a very important role simulation plays that real world data doesn't play, which is counterfactual reasoning, is that you play out events that hasn't happened or cannot happen, or you don't have enough data to make it happen in real world.*  
> <span class="qm">—— Fei-Fei Li · [20:06]</span> ^q2

> <span class="qz">这种非结构化环境和通用化身体实际上是最难解决的问题。</span>  
> *This unstructured environment and a generalized body is actually the hardest problem to solve.*  
> <span class="qm">—— Fei-Fei Li · [32:03]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「创业与行业」挖下去**

- [[2025-11-16-lennys-the-godmother-of-ai|AI 教母李飞飞:从 ImageNet 到空间智能]] —— 同公司:World Labs · 同概念:Marble、空间智能 (spatial intelligence)
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|1500 亿美元的隐形 AI 公司创始人：恐惧源于无知，最好的工作是独自安静地完成]] —— 同公司:Waymo
- [[2026-07-27-yc-jensen-huang-the-mindset-that-built-nvid|Jensen Huang 谈 NVIDIA 创业史、物理 AI 与创始人模式]] —— 同公司:Waymo

</div>
</div>

*本集关键词:空间智能 · 机器人 · 仿真 · 世界模型 · 数据瓶颈*

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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); }
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
