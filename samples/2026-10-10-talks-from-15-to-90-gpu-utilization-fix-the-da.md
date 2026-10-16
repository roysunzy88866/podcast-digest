---
title: "GPU利用率从15%到90%:该修的是数据管道，不是模型"
podcast: 精选演讲
date: 2026-10-17
source_url: undefined
duration: "16:44"
type: episode
cover: "#64748b"
description: 一位工程师拆解多模态训练流水线，讲清GPU为什么闲置，以及如何让显卡一直吃得上数据。
concepts: ["[[GPU]]", "[[Ray Actors]]", "[[多模态训练]]", "[[数据管道]]", "[[预取]]", "[[并发]]", "[[GIL]]", "[[等待时间占比]]", "[[对象存储]]", "[[Scale]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-10-talks-from-15-to-90-gpu-utilization-fix-the-da#post","headline":"GPU利用率从15%到90%:该修的是数据管道，不是模型","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-10-talks-from-15-to-90-gpu-utilization-fix-the-da","mainEntityOfPage":"https://talk.solomind.cc/2026-10-10-talks-from-15-to-90-gpu-utilization-fix-the-da","description":"一位工程师拆解多模态训练流水线，讲清GPU为什么闲置，以及如何让显卡一直吃得上数据。","datePublished":"2026-10-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Thing","name":"GPU"},{"@type":"Thing","name":"Ray Actors"},{"@type":"Thing","name":"多模态训练 (multimodal training)"},{"@type":"Thing","name":"数据管道 (data pipeline)"},{"@type":"Thing","name":"预取 (prefetching)"},{"@type":"Thing","name":"并发 (concurrency)"},{"@type":"Thing","name":"GIL"},{"@type":"Thing","name":"等待时间占比 (wait time ratio)"},{"@type":"Thing","name":"对象存储 (object store)"},{"@type":"Thing","name":"Scale"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"GPU利用率从15%到90%:该修的是数据管道，不是模型","item":"https://talk.solomind.cc/2026-10-10-talks-from-15-to-90-gpu-utilization-fix-the-da"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>GPU利用率从15%到90%:该修的是数据管道，不是模型</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# GPU利用率从15%到90%:该修的是数据管道，不是模型

<div class="pd-byl">2026-10-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-10-talks-from-15-to-90-gpu-utilization-fix-the-da.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我认为我们会在这个实验中发现，优化多模态吞吐量最难的部分不一定是内核优化，而是确保 GPU 不断地有数据喂入。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="00:54" data-who="嘉宾" data-en="And I think we're going to learn that we're going to see in this experiment that the hardest part of optimizing multimodal throughput is not necessarily kernel optimization. It is making sure that the GPUs are constantly fed with data." aria-label="回原文"></button></div></div>

> [!info] 关联
> **概念** [[GPU]] · [[Ray Actors]] · [[多模态训练]] · [[数据管道]] · [[预取]] · [[并发]] · [[GIL]] · [[等待时间占比]] · [[对象存储]] · [[Scale]]

买[[GPU|GPU]]很贵，所以人人都想让它们满负荷运转。但一场关于多模态模型训练的演讲给出了一个反直觉的结论：

**最拖后腿的往往不是GPU本身，也不是模型优化，而是喂数据的管道**。

演讲者逐步修好一条多模态微调[[数据管道|数据管道]]，把GPU利用率从15%拉到90%，吞吐量在大规模下又提升了50%。

## 为什么GPU在挨饿？

训练多模态模型和纯文本不一样。在数据送到GPU之前，图像要先加载、缩放、归一化，音频要先裁剪，这些全是CPU密集的活儿。

而训练集群里CPU通常比GPU多得多——挨饿的偏偏是GPU。

演讲者给出一个关键指标：[[等待时间占比|等待时间占比]]，即准备和传输数据的时间，除以整个流水线的总时间。

最朴素的基线里，每个批次训练只要15到20秒，取数据却要超过100秒，GPU利用率只有15% <button class="pd-ts" data-t="05:54" data-who="嘉宾" data-en="So if your trainer is asking for a batch size of like 256, then you have to serially process all these images. And then we can see that our train time is somewhere between 15 to 20 seconds." aria-label="回原文"></button>。

剖析火焰图显示，大部分时间花在从[[对象存储|对象存储]]拉取图像上。

## 第一步：并发处理图像

基线的问题在于串行：256个样本一张一张下载、一张一张处理。样本之间彼此独立，天然适合并行。

做法是用异步编程拉取图像，用[[Ray Actors|Ray Actors]]做并行处理——后者本质上就是多进程，只是自带跨进程通信的接口，不用自己造轮子 <button class="pd-ts" data-t="08:21" data-who="嘉宾" data-en="So we'll choose AsyncIO for fetching images here and then use Ray Actors as our processors, as our multiprocessing library. Ray Actors are essentially the same as general processes, but they offer us APIs to communicate across workers that just make it so that we don't have to reinvent the wheel." aria-label="回原文"></button>。

演讲者提醒，选[[并发|并发]]方式要匹配瓶颈：异步适合网络请求这类输入输出工作；

线程适合会释放全局解释器锁的CPU操作，比如分词器和图像处理；进程最重但隔离最彻底。

> 【背景】原文此处提及的图像处理，在 Python 生态中常用 Pillow 库实现。

**这一步之后，每批取数据的时间降到约40秒，提速25%**。但GPU和取数据之间仍会出现大片空隙。

## 第二步：预取，让数据跑在训练前面

与其等训练器来要数据再开工，不如开一个后台线程，提前把队列填满。

生产者始终跑在消费者前面，训练器要数据时随手可取，**数据加载和处理的时间几乎归零** <button class="pd-ts" data-t="10:17" data-who="嘉宾" data-en="Yeah, so I think making sure your producer is always ahead of your consumer will pay great dividends for you here. Unsurprisingly, we achieved close to zero seconds of data fetching and processing per batch because we've already fetched data and processed it way before the trainer even needs it." aria-label="回原文"></button>。

[[预取|预取]]有两个代价：检查点和断点恢复的流程会变复杂；还会有冷启动期，得先等队列填起来。

但只要处理好这些细节，收益非常可观。

## 第三步：别让数据在进程间反复搬运

==前两步做完，新的问题浮出水面==：传输开销不降反升。

每个样本的图像数组要在进程边界间被序列化、复制好几次——先打包传到协调器，再打包传给训练器。

多模态张量很大，每个样本好几兆，数据生成器动不动就内存溢出 <button class="pd-ts" data-t="11:03" data-who="嘉宾" data-en="Per sample, per step, we have a mem copy that nobody really asked for. So how this manifests is that your data generator can often oom. And so multimodal tensors are huge." aria-label="回原文"></button>。

解法是用Ray提供的对象存储：

每个样本只传一个引用（本质上是指针），张量不再来回往返主节点，各个训练进程按需直接去存储取数据。

等待时间占比降到20%。

## 规模一变，答案全变

把这条管道放大到生产规模——并行路数乘4、200个数据流、批次大小乘4——等待占比反而回升了。

原因：数据生成和工人池被调度在同一批节点上，网卡成了瓶颈 <button class="pd-ts" data-t="13:06" data-who="嘉宾" data-en="While doing that, we observed that our wait time ratio for the same pipeline went up when all we did was scale some numbers. So we just added four times the data parallel rings." aria-label="回原文"></button>。

他们调了两个参数：零拷贝读取，以及把工人分散到多台机器的调度策略。

有意思的是，这两个开关在小规模实验里都没用，合在一起、且在大规模下才有协同效应，仅此就带来50%的额外吞吐量 <button class="pd-ts" data-t="15:26" data-who="嘉宾" data-en="And so now this is the final pipeline that we've accomplished, a concurrent, eager, and a data access pattern aware system that shares the training across loads and enables that GPU stay warm while providing smoothness and stability in training." aria-label="回原文"></button>。

演讲者的教训是：同一组配置，小规模下平平无奇，大规模下可能是胜负手，要在不同的规模阶梯上做消融实验。

## 本集带走

- 先搞清你是卡在CPU还是GPU、卡在输入输出还是计算，再动手优化。
- 解决一个瓶颈往往会暴露下一个：吞吐量之后是等待时间，然后是内存，然后是传输开销 <button class="pd-ts" data-t="15:53" data-who="嘉宾" data-en="Are you IO bound or compute bound? And then solving one bottleneck often exposes another. So first it was throughput for us, then it became wait time, then it became memory, then it became retrieval costs." aria-label="回原文"></button>。
- 并发加预取是经典套路，但所用框架的默认行为（比如把工人挤在同一台机器上）同样关键。
- 规模会改变答案，调参效果要在不同规模下验证。
- 给基线做性能剖析，是所有优化的起点。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">我认为我们会在这个实验中发现，优化多模态吞吐量最难的部分不一定是内核优化，而是确保 GPU 不断地有数据喂入。</span>  
> *And I think we're going to learn that we're going to see in this experiment that the hardest part of optimizing multimodal throughput is not necessarily kernel optimization. It is making sure that the GPUs are constantly fed with data.*  
> <span class="qm">—— 嘉宾 · [00:54]</span> ^q1

> <span class="qz">而且通常你的训练集群拥有比 GPU 多得多的 CPU，然而在这条流水线中挨饿的却是 GPU。</span>  
> *And then it's also true that usually your training clusters have a lot more CPUs than GPUs at hand, yet the GPU is what is starving in this pipeline.*  
> <span class="qm">—— 嘉宾 · [02:32]</span> ^q2

> <span class="qz">所以我们的基线把 85% 的时间花在了被数据获取阻塞上，而在我们做了这些优化之后，这个比例低于 10%。</span>  
> *So our baseline spends 85% of its time backed on data acquisition, whereas after we do these optimizations, it's less than 10%.*  
> <span class="qm">—— 嘉宾 · [03:13]</span> ^q3

> <span class="qz">因此就本次演讲的范围而言，GPU 不是目标，目标是确保数据永远不是瓶颈。</span>  
> *And so for the scope of this talk, GPUs are not the goal. It's making sure that the data is never the bottleneck is the goal.*  
> <span class="qm">—— 嘉宾 · [03:26]</span> ^q4

> <span class="qz">在小规模实验中，这两个参数单独都没有起到帮助，但在大规模实验中，它们合在一起产生了协同效应。</span>  
> *Neither of these actually helped in a small scale experiment, but together they had a synergistic effect in a large scale experiment.*  
> <span class="qm">—— 嘉宾 · [14:38]</span> ^q5

> <span class="qz">一个配置在小规模下可能表现很差，但在更大规模下可能表现得非常好。所以你应该始终思考如何在你的扩展阶梯上进行消融实验。</span>  
> *Yeah, so a config can do poorly at a small scale, but can do really good at a larger scale. So you should always think about how to ablate across your scaling ladders.*  
> <span class="qm">—— 嘉宾 · [14:48]</span> ^q6

> <span class="qz">总体而言，仅凭这两个开关参数，我们在大规模下额外获得了 50% 的吞吐量。</span>  
> *Overall, we achieved a 50% additional throughput at scale just from these two flags.*  
> <span class="qm">—— 嘉宾 · [15:26]</span> ^q7

> <span class="qz">还是同一个旋钮，只是瓶颈变了，结论相反。</span>  
> *It's the same knob opposite verdict set by the bottleneck.*  
> <span class="qm">—— 嘉宾 · [15:31]</span> ^q8

> <span class="qz">GPU 很昂贵，但有时最艰苦的战斗发生在 GPU 之外。</span>  
> *GPUs are expensive, but sometimes the biggest battles happen outside of the GPU.*  
> <span class="qm">—— 嘉宾 · [15:42]</span> ^q9

> <span class="qz">解决一个瓶颈往往会暴露另一个瓶颈。对我们来说，先是吞吐量，然后变成了等待时间，然后变成了内存，然后变成了检索成本。</span>  
> *And then solving one bottleneck often exposes another. So first it was throughput for us, then it became wait time, then it became memory, then it became retrieval costs.*  
> <span class="qm">—— 嘉宾 · [15:53]</span> ^q10

> <span class="qz">而规模总是会改变答案。</span>  
> *And scale always changes the answer.*  
> <span class="qm">—— 嘉宾 · [16:18]</span> ^q11

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-31-yc-alexandr-wang-this-is-a-once-in-a-civili|Scale AI 创始人 Alexandr Wang:AI 时代,最稀缺的不是智能而是愿景]]<span class="pd-rz">同概念:规模扩展 (scale)</span>
- [[2026-08-07-thepeel-the-18x-midas-lister-betting-3b-on-ai-an|Mayfield 管理合伙人 Navin:AI 投资的泡沫数学与蓝海打法]]<span class="pd-rz">同概念:GPU</span>
- [[2026-08-10-eyeonai-in-5-years-90-of-what-you-use-ai-for-wil|Tether 做本地 AI：数据中心造太多了]]<span class="pd-rz">同概念:GPU</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-11-16-lennys-the-godmother-of-ai|AI 教母李飞飞:从 ImageNet 到空间智能]]<span class="pd-rz">同概念:GPU</span>
- [[2026-06-10-talks-jensen-huang-on-vision-risk-and-the-gpu|只在美国才能发生的故事:黄仁勋与 NVIDIA]]<span class="pd-rz">同概念:GPU</span>
- [[2026-07-14-a16z-is-ai-a-bubble-gavin-baker-on-data-cente|没有暗GPU:一位基金经理拆解AI泡沫论与棋局]]<span class="pd-rz">同概念:GPU</span>

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
