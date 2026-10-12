---
title: 大模型背后：推理引擎到底在干什么
podcast: 精选演讲
date: 2026-10-12
source_url: undefined
duration: "59:43"
type: episode
cover: "#64748b"
description: Modal 的 Charles Frye 在一场工程师活动上拆解了推理引擎的内部结构：从进程架构、调度器瓶颈，到推测解码这类能带来数倍加速的关键技术。
guests: ["[[Charles Frye]]"]
companies: ["[[Modal]]", "[[SGLang]]", "[[vLLM]]", "[[PyTorch]]"]
concepts: ["[[推理]]", "[[推理引擎]]", "[[调度器]]", "[[预填充]]", "[[解码]]", "[[KV 缓存]]", "[[投机解码]]", "[[分词器]]", "[[CUDA 图]]", "[[智能体]]", "[[可观测性]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-06-talks-what-is-an-inference-engine-anyway-charl#post","headline":"大模型背后：推理引擎到底在干什么","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-06-talks-what-is-an-inference-engine-anyway-charl","mainEntityOfPage":"https://talk.solomind.cc/2026-10-06-talks-what-is-an-inference-engine-anyway-charl","description":"Modal 的 Charles Frye 在一场工程师活动上拆解了推理引擎的内部结构：从进程架构、调度器瓶颈，到推测解码这类能带来数倍加速的关键技术。","datePublished":"2026-10-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Charles Frye"},{"@type":"Organization","name":"Modal"},{"@type":"Organization","name":"SGLang"},{"@type":"Organization","name":"vLLM"},{"@type":"Organization","name":"PyTorch"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"推理引擎 (inference engine)"},{"@type":"Thing","name":"调度器 (scheduler)"},{"@type":"Thing","name":"预填充 (pre-fill)"},{"@type":"Thing","name":"解码 (decode)"},{"@type":"Thing","name":"KV 缓存 (KV cache)"},{"@type":"Thing","name":"投机解码 (speculative decoding)"},{"@type":"Thing","name":"分词器 (tokenizer)"},{"@type":"Thing","name":"CUDA 图 (CUDA graphs)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"可观测性 (observability)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"大模型背后：推理引擎到底在干什么","item":"https://talk.solomind.cc/2026-10-06-talks-what-is-an-inference-engine-anyway-charl"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>大模型背后：推理引擎到底在干什么</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 大模型背后：推理引擎到底在干什么

<div class="pd-byl"><b>Charles Frye</b> · Modal · 2026-10-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-06-talks-what-is-an-inference-engine-anyway-charl.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我认为，这里是工程工作如此关键的落点、作为工程师在这里工作如此酷的根本原因是：归根结底，训练是成本中心，推理是收入中心。</div><div class="a">— Charles Frye <button class="pd-ts" data-t="04:52" data-who="Charles Frye" data-en="I think the fundamental reason why this is such a critical place for engineering work to get done and why it's such a cool place to work as an engineer is that in the end, training is a cost center and inference is a revenue center." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Charles Frye]]
>
> **公司** [[Modal]] · [[SGLang]] · [[vLLM]] · [[PyTorch]]
>
> **概念** [[推理]] · [[推理引擎]] · [[调度器]] · [[预填充]] · [[解码]] · [[KV 缓存]] · [[投机解码]] · [[分词器]] · [[CUDA 图]] · [[智能体]] · [[可观测性]]

[[Modal|Modal]] 的 [[Charles Frye|Charles Frye]] 在一场工程师活动上拆解了[[推理引擎|推理引擎]]的内部结构：

从进程架构、[[调度器|调度器]]瓶颈，到推测[[解码|解码]]这类能带来数倍加速的关键技术。

你每天跟大模型对话，token 进、token 出，中间发生了什么？Charles Frye 在这场演讲里把这层壳拆开了。

他在 Modal 工作数年，帮很多团队在上百甚至上千块 GPU 上部署[[推理|推理]]。

他说，用 [[PyTorch|PyTorch]] 加 Hugging Face Transformers,一两个小时就能写出一个能跑的引擎；真正的难点是让它高性能地跑——这决定了整套系统的设计。

## 为什么值得做推理，而不是训练模型？

Frye 的核心判断很直接：**训练是成本中心，推理是收入中心**。

卖模型权重很难做成生意，但用户愿意为推理付费——给系统输入 token,让它产出软件或答案。<button class="pd-ts" data-t="05:07" data-who="嘉宾" data-en="I think the fundamental reason why this is such a critical place for engineering work to get done and why it's such a cool place to work as an engineer is that in the end, training is a cost center and inference is a revenue center." aria-label="回原文"></button>

现在行业里的格局是：少数模型铸造厂生产基础模型，大量推理工程师负责部署和定制。

连训练也离不开推理——模型的后训练适配需要从模型中生成样本，用的正是同一套技术。

对工程师来说，这个领域还很新，你要从应用架构一路管到硬件，是个游乐场。

## 什么样的任务会跑在推理引擎上？

Frye 把负载分成三类。第一类是 Chatbot Plus,像 ChatGPT 或 Claude Code,有人等在另一头，几百毫秒看不到响应就会不耐烦，输出通常几十到几百个 token。

第二类是后台代理，比如 Devon、OpenClaw,干的活类似但没人在等——几分钟出一个 PR 都可以接受。

第三类是数据处理，比如 Reducto 把 PDF 变成结构化数据、Fathom 从视频里提取文字。这类任务的指标不是延迟，而是总吞吐量。

在引擎内部，每个请求都分两步：先做 prefill 处理输入，再做 decode 一个个吐出输出 token。

这两步实际上是两个半独立的子负载，走不同的代码路径——prefill 每个请求的计算量大得多，decode 则轻得多。

这个差异是配置和优化引擎的出发点。

## 引擎长什么样？一个调度器卡住了整条流水线

典型的推理引擎(他拿 [[SGLang|SGLang]] 举例)是一组互相通信的进程：

一个负责 HTTP 收发，一组做 token 化和反 token 化，中间是调度器，最里面是真正在 GPU 上干活的模型前向计算进程。

有意思的是瓶颈所在。GPU 是最贵、算力最强的部件，但**调度器才是它的守门人**。

调度器在语义上是单线程的：必须有唯一的地方决定 GPU 接下来跑什么。它自己做的运算不多，却可能拖住整台 GPU。

有人问==能不能并行跑多个调度器==，Frye 说目前不值得——协调 GPU 资源带来的复杂度远超收益，只要主机侧比 GPU 侧快就够了。<button class="pd-ts" data-t="23:11" data-who="嘉宾" data-en="semantically single-threaded point of control that can potentially, despite the fact that it's not doing much, it's not doing as many operations as the work on the GPU, it actually becomes your bottleneck." aria-label="回原文"></button>

至于为什么用 Python 而不是 Rust:Python 对 GPU 的支持最好，模型前向那部分离 GPU 近的代码其实都被编译优化过，Python 只是在组织工作。

倒是调度器是个很合适的 Rust 重写目标——它纯粹在主机侧，不需要懂 PyTorch。

## 为什么没人谈token 化缓存？

引擎靠外部库提供 GPU 内核，所以各家引擎在裸 GPU 性能上差别不大，比的是多会给 GPU 让路。

每个引擎真正的独门绝活是批构造：怎么把请求拼成批，要不要把 prefill 和 decode 混在一个队列里。

一个细节：输入 token 的到达速率远高于输出 token 的产生速率，所以 SGLang 用多个 token 化进程，反 token 化只有一个。

还有，所有人都在谈 [[KV 缓存|KV 缓存]]，却没人谈 token 化缓存——虽然技术上完全可以做。<button class="pd-ts" data-t="30:52" data-who="嘉宾" data-en="And the answer there is that input tokens come in at a much higher rate than output tokens are produced. And that's related to the fact that pre-fill can operate at much higher rates of total tokens per second than decode can in general." aria-label="回原文"></button>

## 推测解码：少数能带来成倍加速的技术

decode 是串行的：每生成一个 token,都要把模型参数(可能是几百 GB)重新加载一遍。想每毫秒出一个 token,就需要 PB 每秒级的内存带宽，不现实。

推测解码的思路是让一个小模型先连猜几个 token,再让目标模型并行批改。

用对采样技巧，可以保证输出和逐个生成完全一致——相当于把 decode 变成了迷你 prefill。<button class="pd-ts" data-t="52:04" data-who="嘉宾" data-en="Rejection sampling, then you can guarantee that the output from the target model is the same as you would have gotten if you'd run it sequentially up to numerics, the same output, but you've now run it in parallel." aria-label="回原文"></button>

Frye 强调，大多数优化都是挤百分比的游戏，一次挣 5%、10%;而**把推测模型练好，直接给你 2 倍、4 倍甚至 8 倍的提速**。

这是在 NVIDIA 硬件上对相当大的模型跑到每秒 1000 token 的关键。

## 出了问题怎么查？

生产环境里的 bug 分几层：模型本身行为怪是应用开发者的事；模型质量 bug 是引擎的事——你做了性能优化，有没有改变模型行为？

模型刚发布时 token 化器常有小 bug,几周后才会修好。最烦的是性能随时间退化的回归，以及不同副本之间性能不一致。

他的建议很朴素：**日志记的指标要远多于你以为需要的**，因为你不知道哪个交叉比对会让 bug 从查不出变成一眼看穿。

查 token 化 bug 的窍门是把 token ID 也记下来。遇到流量洪峰，排队会让首 token 时间和 token 间隔延迟一起飙升，解法是扩副本分摊请求。<button class="pd-ts" data-t="57:35" data-who="嘉宾" data-en="And so the solution in this case, with going back to the question about serverless deployments, is this is detected as increased load, you spin up new replicas, those replicas come online, they start taking on some of this request load, and then the amount queued decreases back down to baseline and things are, your congestion is solved." aria-label="回原文"></button>

想上手的话，他推荐看 MiniSGLang 和 NanoVLLM 这两个极简实现——代码少到能整个塞进一个[[智能体|智能体]]的上下文窗口里。

## 本集带走

- 训练是成本中心，推理是收入中心，这是推理工程值得投入的根本原因。
- 推理引擎的真正瓶颈常常不是 GPU,而是语义上单线程的调度器——GPU 的守门人。
- 每个请求都拆成 prefill 和 decode 两个子负载，计算强度差别巨大，决定了引擎怎么设计。
- 推测解码是少有的能带来成倍(而非百分之几)加速的技术，值得往推测模型上砸数据和算力。
- 日志记的指标要比你以为需要的多得多，交叉比对常常是定位 bug 的关键。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">我认为，这里是工程工作如此关键的落点、作为工程师在这里工作如此酷的根本原因是：归根结底，训练是成本中心，推理是收入中心。</span>  
> *I think the fundamental reason why this is such a critical place for engineering work to get done and why it's such a cool place to work as an engineer is that in the end, training is a cost center and inference is a revenue center.*  
> <span class="qm">—— Charles Frye · [04:52]</span> ^q1

> <span class="qz">人们普遍无法把直接向别人出售模型权重的生意做成，所以你没法真正把一个训练部门变成一个能自我支撑的系统。</span>  
> *People have not generally been able to make businesses work where they sell model weights to people directly, and so you can't really turn a training setup into a proper self-supporting system.*  
> <span class="qm">—— Charles Frye · [05:11]</span> ^q2

> <span class="qz">一旦你在乎性能，它就是有状态的，而这几乎是所有情况。</span>  
> *It's stateful once you do care about performance, which is pretty much every case.*  
> <span class="qm">—— Charles Frye · [20:03]</span> ^q3

> <span class="qz">你试图在 GPU 资源上管理锁或协调所带来的复杂度增加，远大于收益，因为即使你能把它降到微秒级，工作也要等到 GPU 上前一个工作完成后才会开始。</span>  
> *The complexity increase that you get from trying to manage locks or coordination on the GPU resources, that complexity increase is much greater than the gain, because even if you were able to get it down to a microsecond, the work wouldn't start happening until the previous work on the GPU had finished.*  
> <span class="qm">—— Charles Frye · [24:08]</span> ^q4

> <span class="qz">我把那本质上视为引擎的一种失败状态，如果我到了出现 KV cache 抖动或者东西被刷到磁盘的地步，那说明我把引擎部署得不对。</span>  
> *I think of that as essentially like a failure state of the engine that we, like I've deployed my engine improperly if I get to the case where I have KV cache thrashing or like things being flushed to disk.*  
> <span class="qm">—— Charles Frye · [45:46]</span> ^q5

> <span class="qz">这是每秒 PB 级的内存带宽。</span>  
> *That's petabyte per second scale memory bandwidth.*  
> <span class="qm">—— Charles Frye · [51:23]</span> ^q6

> <span class="qz">你能对推理引擎做的许多其他优化，都像是寸土必争的百分比游戏，每次百分之五、百分之十，而且你必须为每一个百分点做非常困难的性能工程。</span>  
> *So many other optimizations that you can do on your inference engine are like, it's like a game of inches of a percent, five percent, 10 percent each time, and you have to do the very difficult performance engineering for each of those percentage points.*  
> <span class="qm">—— Charles Frye · [52:31]</span> ^q7

> <span class="qz">所以这已经成为让你能够在 NVIDIA 硬件上以每秒约 1,000 个 token 运行相当大的模型的关键技术之一，而不必去用像 LPU 或 Cerebras 这样的新型加速器。</span>  
> *So this has emerged as one of the key techniques to allow you to operate, say, 1,000 tokens per second on NVIDIA hardware for actually fairly large models without having to go to a novel accelerator like an LPU or Cerebris.*  
> <span class="qm">—— Charles Frye · [53:06]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-08-latent-space-modal|不只做推理：Modal 如何跨界多节点训练与智能体云]]<span class="pd-rz">同公司:Modal、SGLang、vLLM · 同概念:投机解码 (speculative decoding)、推理 (inference)、智能体 (agent)</span>
- [[2026-09-19-talks-operating-distributed-inference-systems|推理已成一个分布式系统问题:Meta 讲透大规模推理的编排之道]]<span class="pd-rz">同公司:SGLang、vLLM · 同概念:可观测性 (observability)、推理 (inference)、智能体 (agent)、投机解码 (speculative decoding)</span>
- [[2026-09-19-twentyvc-20vc-anti-data-centres-is-a-chinese-psyo|推理才是赚钱的生意：Positron 联合创始人谈内存墙、缓存暴利与「守住前沿」之争]]<span class="pd-rz">同公司:NVIDIA · 同概念:KV 缓存 (KV cache)、推理 (inference)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)</span>
- [[2026-07-27-twentyvc-20vc-leading-anthropic-s-first-ever-roun|主导投资 Anthropic 的人：风投的游戏规则已经彻底变了]]<span class="pd-rz">同概念:可观测性 (observability)、推理 (inference)</span>

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
