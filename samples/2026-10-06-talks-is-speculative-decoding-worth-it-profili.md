---
title: 让小模型先猜，大模型来批：推理加速值不值？
podcast: 精选演讲
date: 2026-10-10
source_url: undefined
duration: "15:02"
type: episode
cover: "#64748b"
description: Akamai 的开发者 Sheila 讲解 speculative decoding 的原理，以及在 NVIDIA Blackwell GPU 上实测它什么时候值得开。
host: "[[Sheila]]"
companies: ["[[Akamai]]"]
concepts: ["[[投机解码]]", "[[草稿模型]]", "[[接受率]]", "[[KVCache]]", "[[推理]]", "[[GPU]]", "[[vLLM]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-06-talks-is-speculative-decoding-worth-it-profili#post","headline":"让小模型先猜，大模型来批：推理加速值不值？","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-06-talks-is-speculative-decoding-worth-it-profili","mainEntityOfPage":"https://talk.solomind.cc/2026-10-06-talks-is-speculative-decoding-worth-it-profili","description":"Akamai 的开发者 Sheila 讲解 speculative decoding 的原理，以及在 NVIDIA Blackwell GPU 上实测它什么时候值得开。","datePublished":"2026-10-10","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Sheila"},{"@type":"Organization","name":"Akamai"},{"@type":"Thing","name":"投机解码 (speculative decoding)"},{"@type":"Thing","name":"草稿模型 (draft model)"},{"@type":"Thing","name":"接受率 (acceptance rate)"},{"@type":"Thing","name":"KVCache"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"GPU"},{"@type":"Thing","name":"vLLM"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"让小模型先猜，大模型来批：推理加速值不值？","item":"https://talk.solomind.cc/2026-10-06-talks-is-speculative-decoding-worth-it-profili"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>让小模型先猜，大模型来批：推理加速值不值？</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 让小模型先猜，大模型来批：推理加速值不值？

<div class="pd-byl"><b>Sheila</b> · Akamai 的开发者 · 2026-10-10</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-06-talks-is-speculative-decoding-worth-it-profili.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">高并发情况下，你的 GPU 可能已经在忙于处理所有请求了，这时实现投机解码就没有意义；但如果你有多余的 GPU 空间，就值得考虑。</div><div class="a">— Sheila <button class="pd-ts" data-t="03:10" data-who="Sheila" data-en="High concurrency, your GPUs are probably already busy trying to run all the requests, so it wouldn't make sense to implement speculative decoding, but if you have extra GPU space, it's worth considering." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sheila]]
>
> **公司** [[Akamai]]
>
> **概念** [[投机解码]] · [[草稿模型]] · [[接受率]] · [[KVCache]] · [[推理]] · [[GPU]] · [[vLLM]]

大语言模型回答问题分两步：先读你的输入，建一份“工作记忆”（叫 KVCache），这一步只做一次；然后开始逐字写答案。

因为每个词都依赖前一个词，生成只能一个一个来。

如果你用的是 Llama 70B 这样的大模型，一次回答可能要跑上百次前向计算，又贵又慢。

speculative decoding 的思路是：别让大模型亲自写每个词。让一个小模型先“猜”几个词，大模型一次性验证。猜对了就白赚，猜错了大模型重算。

输出结果不变——大模型仍然把着准确性的关，只是活儿变少了 <button class="pd-ts" data-t="01:54" data-who="Sheila" data-en="Tokens, which is still an autoregressive process, but the whole point is because it's smaller, it's a faster process, so it would be a cheaper process. The output is still the same because the target model, the main model that has the accuracy still has to verify the tokens and it does this in one forward pass." aria-label="回原文"></button>。

## 小模型怎么选？

通常每个周期让小模型猜 3 到 5 个词，大模型批量审批，被拒的词由它重新计算 <button class="pd-ts" data-t="02:16" data-who="Sheila" data-en="So as I said, you have a small model which generates token. Typically, you can set it between three to five for each cycle. The target model would handle the predictions, like be able to scale, like basically approve or reject it." aria-label="回原文"></button>。选[[草稿模型|草稿模型]]有几条经验法则：

一是要小，一般比目标模型小 10 到 50 倍；

二是必须用同一套分词器，最好来自同一个模型家族，否则你得在两套分词器之间手动转换 <button class="pd-ts" data-t="04:50" data-who="Sheila" data-en="And then when you're thinking about choosing the model, some of the things that you would usually Consider is, first of all, like I said, it has to be smaller, typically 10 to 50 times smaller than your target model." aria-label="回原文"></button>；

剩下的就是权衡成本和准确率。

[[Sheila|Sheila]] 的演示环境只有一块 Blackwell [[GPU|GPU]]，还要同时跑基线和[[投机解码|投机解码]]两套服务，所以模型要选得足够小：

基线模型权重约 16GB，草稿模型只有 2.5GB，剩下的空间留给两边的缓存 <button class="pd-ts" data-t="04:27" data-who="Sheila" data-en="So this is what that looked like. For instance, the baseline alone takes about 16 gigabytes of weight and then the draft model is 2.5. So that leaves a huge amount and space for KV caching." aria-label="回原文"></button>。

## 它不是免费的

代价很直接：你要同时托管两个模型，显存要多分一份给草稿模型，两边的 KVCache 也都要额外空间 <button class="pd-ts" data-t="02:45" data-who="Sheila" data-en="Free. Because you're hosting now two models, you have to account for the memory required to host that second model. Not that much since it's a smaller model, but you also have to allocate extra space for the KV cache for both models." aria-label="回原文"></button>。

所以判断标准很简单——==你的 GPU 有没有闲着的算力==？

如果是高并发场景，GPU 本来就忙不过来，开投机解码反而添乱；**如果余量充足，才值得考虑** <button class="pd-ts" data-t="03:07" data-who="Sheila" data-en="Yeah, so typically you would consider running speculative decoding when you have extra space in GPU. For example, if your workload is High concurrency, your GPUs are probably already busy trying to run all the requests, so it wouldn't make sense to implement speculative decoding, but if you have extra GPU space, it's worth considering, but I will talk about how to evaluate whether it's worth." aria-label="回原文"></button>。

## 什么任务有效？看“接受率”

核心指标是[[接受率|接受率]]：草稿模型生成的词里，被大模型认可的比例 <button class="pd-ts" data-t="09:28" data-who="Sheila" data-en="So you can see, as expected, with a speculative on the right side, it was able to generate much, much faster, 1.6 times faster. The key thing to note here is how high the acceptance rate is, which is the rate of the tokens that were accepted by the number of tokens that were accepted over the total generated by the draft model." aria-label="回原文"></button>。这个比例高低，取决于任务类型。

高度结构化的任务最受益——写代码、生成 JSON、写 SQL。这类任务的下一个词几乎是确定的，小模型猜得准。

Sheila 的现场演示里，结构化输出任务开了投机解码后快了 1.6 倍，接受率很高，每秒生成的词数也明显提升 <button class="pd-ts" data-t="09:17" data-who="Sheila" data-en="So when I run this, I'll redo it. So you can see, as expected, with a speculative on the right side, it was able to generate much, much faster, 1.6 times faster." aria-label="回原文"></button>。

反过来，创意型任务——写诗、头脑风暴——温度设得高，下一个词的可能性本来就多，小模型猜不中，接受率很低，加速效果就差 <button class="pd-ts" data-t="10:22" data-who="Sheila" data-en="But in this case, I guess the main metric to see here is the low acceptance rate. And like I said, this is because there's more variety in how the next tokens that would be generated because first of all, the temperature is set high." aria-label="回原文"></button>。

## 长上下文任务也要小心

**投机解码只加速“写答案”那一步，不加速“读输入”那一步** <button class="pd-ts" data-t="11:06" data-who="Sheila" data-en="So as I mentioned earlier, there's two parts of generating tokens. With speculative decoding, it's supposed to accelerate the generating part, not the part where the model reads the prompt." aria-label="回原文"></button>。

如果你的应用要喂给模型大量上下文——比如检索增强生成、分析长文档——而真正要生成的答案很短，模型大部分时间都花在建缓存上，投机解码帮不了什么忙。

所以要问自己几个问题：==你的应用是结构化输出吗==？显存够吗？是创意场景吗？并发高不高？

批量小、显存有余的结构化任务，是最理想的候选 <button class="pd-ts" data-t="11:50" data-who="Sheila" data-en="Yeah, so I think the main point here is just how to think through like what is your application doing? Is it highly structured? Do you have enough VRAM space to even consider it?" aria-label="回原文"></button>。

## 想上手的话

Sheila 用的是 [[vLLM|vLLM]] 这个[[推理|推理]]服务引擎，文档写得不错。这是最简单的一种投机解码实现，还有 Ngram、Medusa、Eagle 等更进阶的架构 <button class="pd-ts" data-t="12:45" data-who="Sheila" data-en="The question was, are there particular tools that I recommend for speculative decoding? So I implemented this with VLLM, the serving engine. They have really good documentation on how to get started with it." aria-label="回原文"></button>。

网上相关内容不多，她推荐了 General Compute 的博客和 Google 等发表的研究论文；[[Akamai|Akamai]] 的 GitHub（Akamai developers）上有完整的复现教程 <button class="pd-ts" data-t="14:13" data-who="Sheila" data-en="I should have covered that. Oh, as I said, I'm from Akamai, and if you're interested in learning how to replicate this, you can find it on our website, our GitHub Akamai developers." aria-label="回原文"></button>。

## 本集带走

- 大模型回答慢在逐词生成；让小模型先猜几个词、大模型批量验证，可以在不损失准确性的前提下加速。
- 代价是要多托管一个模型、多占显存——GPU 已经很忙的高并发场景不适合开。
- 接受率是关键指标：写代码、JSON、SQL 这类结构化任务接受率高；写诗、头脑风暴这类创意任务接受率低。
- 演示中结构化任务提速 1.6 倍。
- 投机解码只加速生成阶段，读长上下文（如检索增强生成）占大头的任务收益有限；上手推荐 vLLM。

<div class="pd-sec pd-sec-q">全部金句 <span>1 条</span></div>

> <span class="qz">高并发情况下，你的 GPU 可能已经在忙于处理所有请求了，这时实现投机解码就没有意义；但如果你有多余的 GPU 空间，就值得考虑。</span>  
> *High concurrency, your GPUs are probably already busy trying to run all the requests, so it wouldn't make sense to implement speculative decoding, but if you have extra GPU space, it's worth considering.*  
> <span class="qm">—— Sheila · [03:10]</span> ^q1

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-19-talks-operating-distributed-inference-systems|推理已成一个分布式系统问题:Meta 讲透大规模推理的编排之道]]<span class="pd-rz">同概念:GPU、KV 缓存 (KVCache)、推理 (inference)、vLLM、投机解码 (speculative decoding)</span>
- [[2026-08-25-iltb-neil-movva-making-ai-10x-cheaper-invest|把 token 压到最便宜：一家「代币工厂」的算力拾荒术]]<span class="pd-rz">同概念:GPU、KV 缓存 (KVCache)、推理 (inference)</span>
- [[2026-07-08-latent-space-modal|不只做推理：Modal 如何跨界多节点训练与智能体云]]<span class="pd-rz">同概念:投机解码 (speculative decoding)、推理 (inference)、vLLM</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-12-bigtech-here-s-how-the-ai-bubble-bursts-with-pau|AI 投资泡沫的崩盘剧本:为什么万亿美元建数据中心注定亏钱]]<span class="pd-rz">同概念:GPU、推理 (inference)</span>
- [[2026-08-27-doac-the-man-who-calls-bs-on-ai-ai-is-the-wor|Ed Zitron：生成式 AI 是一场万亿级骗局]]<span class="pd-rz">同概念:GPU、推理 (inference)</span>
- [[2026-09-30-sourcery-imec-says-todays-ai-will-look-ancient-in|GPU 之后是什么：内存短缺、光子学与摩尔定律的尽头]]<span class="pd-rz">同概念:GPU、推理 (inference)</span>

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
