---
title: AI芯片太多，软件太乱：Modular想从头重写整套底层
podcast: 精选演讲
date: 2026-10-17
source_url: undefined
duration: "17:00"
type: episode
cover: "#64748b"
description: Modular的Abdul Dakkak讲他们如何用新语言Mojo和推理引擎Max统一各家芯片上的AI开发。
guests: ["[[Abdul Dakkak]]"]
companies: ["[[模块化]]"]
concepts: ["[[Mojo]]", "[[Max]]", "[[推理]]", "[[GPU]]", "[[PyTorch]]", "[[算子]]"]
category: 创业与行业
tags:
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-taming-the-ai-hardware-cambrian-explosio#post","headline":"AI芯片太多，软件太乱：Modular想从头重写整套底层","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-taming-the-ai-hardware-cambrian-explosio","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-taming-the-ai-hardware-cambrian-explosio","description":"Modular的Abdul Dakkak讲他们如何用新语言Mojo和推理引擎Max统一各家芯片上的AI开发。","datePublished":"2026-10-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Abdul Dakkak"},{"@type":"Organization","name":"模块化 (modular)"},{"@type":"Thing","name":"Mojo"},{"@type":"Thing","name":"Max"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"GPU"},{"@type":"Thing","name":"PyTorch"},{"@type":"Thing","name":"算子 (kernel)"}],"articleSection":"创业与行业"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"创业与行业","item":"https://talk.solomind.cc/tags/创业与行业"},{"@type":"ListItem","position":3,"name":"AI芯片太多，软件太乱：Modular想从头重写整套底层","item":"https://talk.solomind.cc/2026-10-11-talks-taming-the-ai-hardware-cambrian-explosio"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI芯片太多，软件太乱：Modular想从头重写整套底层</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI芯片太多，软件太乱：Modular想从头重写整套底层

<div class="pd-byl"><b>Abdul Dakkak</b> · Modular · 2026-10-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-taming-the-ai-hardware-cambrian-explosio.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">让我们从零开始重新架构整个技术栈，构建一个统一所有硬件的统一层，让一切都运行在我们的技术栈上。</div><div class="a">— Abdul Dakkak <button class="pd-ts" data-t="01:48" data-who="Abdul Dakkak" data-en="Let's re-architect the stack from the ground up, and let's build a unifying layer that unifies all the hardware, so everything runs on our stack." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Abdul Dakkak]]
>
> **公司** [[模块化]]
>
> **概念** [[Mojo]] · [[Max]] · [[推理]] · [[GPU]] · [[PyTorch]] · [[算子]]

算力紧张，芯片却越来越多。NVIDIA几代[[GPU|GPU]]、Intel、Arm、Apple都在抢占不同的细分市场。

Dakkak把这称为硬件的寒武纪大爆发：芯片种类爆炸式增长，但没人回答一个基本问题——==这些系统到底该怎么编程==？<button class="pd-ts" data-t="00:39" data-who="嘉宾" data-en="A lot of these things are booked for the next few years. But there's also a kind of, as a result, you have an explosion of hardware. We call it like a Cambrian explosion." aria-label="回原文"></button>

更糟的是软件。今天的[[推理|推理]]栈里，各种硬件差异会一路渗透到上层，让整个系统变成一团乱麻。

他以主流推理框架为例：光是同时支持NVIDIA和AMD，架构图就已经很复杂，再加几家硬件厂商更没法看。

而实际部署中，大家还同时在用多个不同的推理框架。

[[模块化|Modular]]的想法是：别再打补丁了，推倒重来，做一个统一层，让所有硬件都能在同一套软件栈上跑。

## 三层积木：语言、引擎、云

整套东西分三层。最底层是编程语言[[Mojo|Mojo]]，一种面向AI和通用编程的异构语言，风格接近Python——会Python的人等于已经会了九成Mojo。<button class="pd-ts" data-t="02:12" data-who="嘉宾" data-en="To realize this, you have to actually go back to first principles and build a complete software stack with portability, performance, and programmability in mind." aria-label="回原文"></button>

它同时支持CPU、GPU和其他加速器。

中间层是推理引擎[[Max|Max]]，用Mojo写成，支持图像、视频、语音、文本等多种模态。

最上面是Modular云。因为今天的AI推理天然是分布式的：要决定模型跑在哪个硬件上、用户请求怎么路由、缓存怎么卸载。

云平台还带一个实验环境，让你调各种参数，找到适合自己工作负载的最佳平衡点。

## Mojo想同时要性能、易用和可移植

怎么理解Mojo的位置？Dakkak画了三个维度：易用性、性能、可移植性。

CUDA性能顶级，但既难写又绑死一家硬件；早年流行的OpenCL可移植性好，但性能和易用性都差；Triton拿到了七成性能，兼顾了另外两项。

Mojo想占的就是这个甜点位——**既能写可移植、好懂的[[算子|核函数]]，又保留底层控制力，把性能榨到极致**。<button class="pd-ts" data-t="05:06" data-who="嘉宾" data-en="Triton has a good sweet spot that gives you 70% of the perf, but it gives you portability and usability. And Mojo is trying to kind of fill the niche of the sweet spot where it's the best of both worlds." aria-label="回原文"></button>

成绩单也拿得出来：他们的矩阵乘法比现成的 BLAS 库（kube losses、hip losses，即官方矩阵乘法库）以及外面所有的实现都快，有些场景快 2%；

注意力核函数号称超过 FlashAttention 4。<button class="pd-ts" data-t="05:36" data-who="嘉宾" data-en="We have state-of-the-art kernels on NVIDIA, AMD, and other hardware. So to tell you what state-of-the-art is, it means that our matrix multiplication is faster than the kube losses, the hip losses, everything out there." aria-label="回原文"></button>这些核函数几乎全部开源了，任何人都能下载来在自己机器上跑分验证。

Mojo 1.0将在未来几个月发布并开源。<button class="pd-ts" data-t="06:07" data-who="嘉宾" data-en="One thing that we've announced a month ago or so is Mojo 1.0, the stabilization of our APIs. And we're going to be releasing Mojo 1.0 in the next few months. And we're also open sourcing Mojo in the next few months as well." aria-label="回原文"></button>

> 【背景】原文转写中的 "kube losses / hip losses" 应指 NVIDIA 的 cuBLAS 与 AMD 的 hipBLAS 矩阵乘法库。

## Max是对PyTorch十年老账的重新清算

==为什么还需要Max==?Dakkak的判断是：**[[PyTorch|PyTorch]]大约10岁了，设计时根本没考虑今天的生成式AI推理**。

于是出现了各种补丁层，把整个生态越搞越复杂——很多人其实已经不直接用PyTorch本身了。<button class="pd-ts" data-t="06:26" data-who="嘉宾" data-en="So Max is trying to kind of solve a few of the assumptions that were made back in the day for PyTorch. PyTorch is about 10 years old. It was not really designed for the Gen.AI inference of today." aria-label="回原文"></button>

Max就是为AI推理从头造的替代品：最好的图编译器、支持即时执行方便调试、跨设备可移植、能理解Mojo代码做更激进的融合优化。

接口上对PyTorch用户很友好，开发模型还是用Python。它支持数千种模型架构，从Gemma 4到MiniMax 3到GLM,并提供标准的OpenAI兼容接口。<button class="pd-ts" data-t="07:40" data-who="嘉宾" data-en="So compared to other stacks, this is a single stack that allows you to serve, develop the model, as well as optimize everything in one cohesive system. Within Max, we support thousands of models, in fact, thousands of architectures." aria-label="回原文"></button>

一个有意思的能力：多GPU、多节点编程直接内置在接口里，而且可以异构——比如预填充阶段跑在A硬件上，解码阶段跑在B硬件上。<button class="pd-ts" data-t="09:19" data-who="嘉宾" data-en="So also the Max APIs provide you with a way to program multi-GPU system as well as multi-node systems from within the API so that the model is natively supported across different GPUs and different nodes as well." aria-label="回原文"></button>

## 快多少？最狠的数字是7倍

性能是这场演讲的核心卖点，而且不少数字经过第三方独立验证：

- Kimi K2.5的首字延迟比vLLM快5.5倍，B200上每GPU每分钟token吞吐量是1.5倍；<button class="pd-ts" data-t="11:45" data-who="嘉宾" data-en="In a bunch of cases, these benchmarks are independently verified as well. So in terms of Kimi K2.5, we're 5.5 faster on TTFT compared to VLLM. We can also get 1.5x throughput improvements, so the token per minute per GPU is 1.5x faster on B200 than it is on VLM." aria-label="回原文"></button>
- 图像生成模型Flux 2,比编译版diffusers快约7倍；
- 在AMD的MI355系统上比对手快4倍——而且AMD的GPU通常比NVIDIA同档便宜30%,总拥有成本优势更大；<button class="pd-ts" data-t="12:56" data-who="嘉宾" data-en="We also support things on AMD where you can get a TCO benefit as well where we're 4x faster than the equivalent on the MI355 systems. Actually some of this is not a fair comparison because some folks might say 7x is much larger than 4x but this is" aria-label="回原文"></button>
- 与Artificial Analysis合作独立验证，Flux 2 dev模型上比下一名竞争者快约3倍，而且「不是蒸馏和量化之类的把戏」，纯粹是底层榨硬件的裸速度；<button class="pd-ts" data-t="13:23" data-who="嘉宾" data-en="You have to factor in the cost per GPU and AMD is usually 30% cheaper than the NVIDIA equivalent. Artificial analysis, actually, we've been partnering with them and they've independently been verifying our results." aria-label="回原文"></button>

他强调这些优化还在持续，只是刚起步。

## 快，意味着新的应用形态

这些数字对普通人意味着什么？Dakkak放了一段现场演示：图像生成可以做到亚秒级，很多情况只要0.3秒。<button class="pd-ts" data-t="14:31" data-who="嘉宾" data-en="So you can generate images in sub-second. In many cases, these are 0.3 seconds. Again, you can go to the booth." aria-label="回原文"></button>

当生成不再需要等待，**一些原本因为推理太慢而做不了的应用就打开了**——比如现场那个一边读摄像头画面一边实时渲染的演示。

最后他的态度很实在：

这不是演示用的幻灯片，现在就可以用一行命令安装Modular来试用所有功能，欢迎大家自己去验证这些结果。<button class="pd-ts" data-t="16:26" data-who="嘉宾" data-en="You can actually try all of this. So this is not demo-ware or slide-ware. You can pip install modular right now if you want to and try all of this stuff." aria-label="回原文"></button>

## 本集带走

- AI硬件正经历寒武纪大爆发，但软件栈没跟上，成为整个行业的痛点
- Modular的方案是三层：Python风格的系统语言Mojo、推理引擎Max、可部署的Modular云
- Mojo瞄准性能、易用性、可移植性三者的平衡点，核函数开源超70万行，Mojo 1.0即将发布并开源
- Max重写了为AI推理设计的新框架，替代给PyTorch打补丁的做法，支持异构多节点部署
- 性能数字包括：Flux 2快7倍、Kimi K2.5首字延迟快5.5倍，部分经Artificial Analysis独立验证

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">让我们从零开始重新架构整个技术栈，构建一个统一所有硬件的统一层，让一切都运行在我们的技术栈上。</span>  
> *Let's re-architect the stack from the ground up, and let's build a unifying layer that unifies all the hardware, so everything runs on our stack.*  
> <span class="qm">—— Abdul Dakkak · [01:48]</span> ^q1

> <span class="qz">我们有目前最快的 attention 内核，比 flash attention 4 之类的还要快。</span>  
> *We have the fastest attention kernel out there, faster than flash attention 4, as well as the AI iter and things like that.*  
> <span class="qm">—— Abdul Dakkak · [05:48]</span> ^q2

> <span class="qz">PyTorch 大约有 10 年历史了，它并不是真正为今天的 GenAI 推理而设计的。</span>  
> *PyTorch is about 10 years old. It was not really designed for the Gen.AI inference of today.*  
> <span class="qm">—— Abdul Dakkak · [06:29]</span> ^q3

> <span class="qz">以 Kimi K2.5 为例，在 TTFT 上我们比 VLLM 快 5.5 倍。</span>  
> *So in terms of Kimi K2.5, we're 5.5 faster on TTFT compared to VLLM.*  
> <span class="qm">—— Abdul Dakkak · [11:45]</span> ^q4

> <span class="qz">你必须把每块 GPU 的成本算进去，而 AMD 通常比同等的 NVIDIA 便宜 30%。</span>  
> *You have to factor in the cost per GPU and AMD is usually 30% cheaper than the NVIDIA equivalent.*  
> <span class="qm">—— Abdul Dakkak · [13:10]</span> ^q5

> <span class="qz">而且这不是靠蒸馏和量化之类的把戏，这就是纯粹的原始速度，因为我们能从底层充分调动硬件，确保从模型中获得最大的性能收益。</span>  
> *And this is not playing tricks of distillation and quantization or anything like that. This is just raw speed because we can leverage the hardware from the ground up and make sure that we're getting the max perf benefit from the model.*  
> <span class="qm">—— Abdul Dakkak · [13:42]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「创业与行业」挖下去**

- [[2026-10-06-talks-what-is-an-inference-engine-anyway-charl|大模型背后：推理引擎到底在干什么]]<span class="pd-rz">同概念:PyTorch、推理 (inference)、SGLang、vLLM</span>
- [[2026-08-07-thepeel-the-18x-midas-lister-betting-3b-on-ai-an|Mayfield 管理合伙人 Navin:AI 投资的泡沫数学与蓝海打法]]<span class="pd-rz">同概念:GPU、推理 (inference)</span>
- [[2026-08-10-eyeonai-in-5-years-90-of-what-you-use-ai-for-wil|Tether 做本地 AI：数据中心造太多了]]<span class="pd-rz">同概念:GPU、推理 (inference)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-10-06-talks-is-speculative-decoding-worth-it-profili|让小模型先猜，大模型来批：推理加速值不值？]]<span class="pd-rz">同概念:GPU、推理 (inference)、vLLM</span>
- [[2026-08-18-a16z-how-do-you-defend-against-ai-that-can-ha|当签名已死：AI智能体如何击穿传统网络安全]]<span class="pd-rz">同概念:Max、推理 (inference)</span>
- [[2026-09-19-talks-operating-distributed-inference-systems|推理已成一个分布式系统问题:Meta 讲透大规模推理的编排之道]]<span class="pd-rz">同概念:GPU、推理 (inference)</span>

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
