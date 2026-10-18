---
title: 自己的 AI 自己养：在专属 GPU 上跑生产级智能体
podcast: 精选演讲
date: 2026-10-18
source_url: undefined
duration: "109:52"
type: episode
cover: "#64748b"
description: "Akamai 的 Du'an Lightfoot 和 Omer 讲解如何租下专属 GPU,把自己的 AI 智能体和推理全部握在自己手里。"
guests: ["[[Du'an Lightfoot]]"]
companies: ["[[Akamai]]"]
concepts: ["[[智能体]]", "[[推理]]", "[[GPU]]", "[[vLLM]]", "[[量化]]", "[[投机解码]]", "[[KV 缓存]]", "[[Kubernetes]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-agents-that-own-their-inference-du-an-li#post","headline":"自己的 AI 自己养：在专属 GPU 上跑生产级智能体","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-agents-that-own-their-inference-du-an-li","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-agents-that-own-their-inference-du-an-li","description":"Akamai 的 Du'an Lightfoot 和 Omer 讲解如何租下专属 GPU,把自己的 AI 智能体和推理全部握在自己手里。","datePublished":"2026-10-18","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Du'an Lightfoot"},{"@type":"Organization","name":"Akamai"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"GPU"},{"@type":"Thing","name":"vLLM"},{"@type":"Thing","name":"量化 (quantization)"},{"@type":"Thing","name":"投机解码 (speculative decoding)"},{"@type":"Thing","name":"KV 缓存 (KV cache)"},{"@type":"Thing","name":"Kubernetes"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"自己的 AI 自己养：在专属 GPU 上跑生产级智能体","item":"https://talk.solomind.cc/2026-10-11-talks-agents-that-own-their-inference-du-an-li"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>自己的 AI 自己养：在专属 GPU 上跑生产级智能体</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 自己的 AI 自己养：在专属 GPU 上跑生产级智能体

<div class="pd-byl"><b>Du'an Lightfoot</b> · Akamai 开发者布道师 · 2026-10-18</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-agents-that-own-their-inference-du-an-li.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>



> [!info] 关联
> **人物** [[Du'an Lightfoot]]
>
> **公司** [[Akamai]]
>
> **概念** [[智能体]] · [[推理]] · [[GPU]] · [[vLLM]] · [[量化]] · [[投机解码]] · [[KV 缓存]] · [[Kubernetes]]

大部分 AI 应用的做法，是把请求发给别人的大模型接口，按 token 付费。

[[Akamai|Akamai]] 的开发者布道师 [[Du'an Lightfoot|Du'an Lightfoot]] 和资深软件工程师 Omer 在这场工作坊里演示了另一条路：

自己占有或租用 [[GPU|GPU]],把模型、[[智能体|智能体]]、数据全部跑在自己的集群里。

他们不光讲理念，还现场演示了压测、调参、重新部署的全过程，甚至包括翻车现场。

## 什么时候该自己养 GPU?

所谓拥有自己的[[推理|推理]]，就是你自己拥有或租下 GPU,模型就跑在上面，数据不离开你的集群、数据中心甚至笔记本电脑 <button class="pd-ts" data-t="03:01" data-who="嘉宾" data-en="So when you do that, that means that you have access to the GPU, the hardware for that AI to be ran on, for the models to live on, which means then you have access to control where it goes." aria-label="回原文"></button>。

什么时候值得这么干？Du'an 给了 3 个判断：使用量大且稳定——既然为 GPU 付了钱，它就应该一直在干活；

数据需要隐私和合规，比如涉及知识产权或治理要求；以及你有硬件余量。

反过来，如果流量低、突发性强，或者你需要最强大的模型(那类模型对 GPU 要求高，公有服务商有现成基础设施)，又或者团队没有自托管的专业知识，那租用接口更划算。

算一笔账：如果每天处理 20 万 token,用托管接口约每月 1500 美元，而租一块 GPU 约每月 1000 美元 <button class="pd-ts" data-t="25:54" data-who="嘉宾" data-en="And now we're gonna actually look at the billing and compare which one would actually be more efficient. So if you're processing, let's say 200,000 tokens per day on a hosted bill, rent it, that's gonna be about 1,500 per month." aria-label="回原文"></button>。**前提是你的 GPU 被持续用满**。

## 智能体本质上是一个烧 token 的循环

智能体并不神秘：一个循环而已。给大模型一个提示词，它能调用工具、感知环境、做推理决策；

工具执行后把结果交回模型，模型更新计划、继续行动，直到目标达成 <button class="pd-ts" data-t="01:53" data-who="嘉宾" data-en="When it comes to an agent, it's just a loop. You invoke an LLL, it has access to tools, it has access to an environment, makes it a decision, a reasoning decision on what actions to take once you invoke it or give it a prompt." aria-label="回原文"></button>。

问题在于，每一步都在生成 token。Du'an 从 2023 年 1 月开始造智能体，最早的模型上下文只有 8000 token,他很快发现两件事：用别人的接口很贵；

用本地小模型，能力又不够，还会撞上显存和算力的墙。

还有一个常被忽略的开销：如果模型要思考(做智能体必需的多步工具调用)，输出会暴涨。

同一个问题，关掉思考模式只要 35 个 token,打开后要约 600 个 <button class="pd-ts" data-t="46:24" data-who="嘉宾" data-en="But with thinking off, It just generated a response. It was 35 tokens." aria-label="回原文"></button>。

## 显存就是你的接待能力

模型在 GPU 上怎么住？以 40 亿参数的模型为例，用 BF16 全精度，权重占 8GB;剩下的显存全部留给 [[KV 缓存|KV 缓存]]——也就是能装下多少上下文 <button class="pd-ts" data-t="29:07" data-who="嘉宾" data-en="Let's see if we can get more of that on there. All right, so when we talk about the model actually sitting on the GPU, you have the model weights. For the four billion parameter model, that model weights at BF16 is gonna be eight gigs." aria-label="回原文"></button>。

Omer 用一节课讲透了这个概念：一块 20GB 显存的卡，装了 8GB 权重后，剩下约能放 37000 个 token 的上下文。

如果 4 个用户同时用，每人 8000 token 输入输出加工具调用，刚好塞满。用户再多，就装不下了。

这就是为什么[[量化|量化]]如此重要：把模型从 BF16 压到 FP8,体积极大缩小，省下的显存全变成 KV 缓存，能同时接待更多请求。

**BF16 到 FP8 的质量损失几乎可以忽略，是非常划算的一档** <button class="pd-ts" data-t="53:11" data-who="嘉宾" data-en="But for the most part, going from BF16 to FP8 is a very negligible drop in quality and performance. And it will result in more performance while keeping the quality exactly the same." aria-label="回原文"></button>。

Omer 现场做了对比实验。基准的 BF16 模型，在 32 并发下总吞吐 714 token/秒。

换上 Red Hat 预量化的 FP8 版本后，单并发从 37.5 涨到 53.4 token/秒；64 并发下总吞吐从 800 涨到 1140 token/秒，约提升 1.442 倍 <button class="pd-ts" data-t="64:04" data-who="嘉宾" data-en="And if we compare it before and after, you can see, let me make this a little bit bigger. You can see even at concurrency one, we're going for 37.5 tokens per second to 53.4 tokens per second." aria-label="回原文"></button>。

他反复强调：换任何量化方案前都要跑自己的评估集。

BF16 下工作正常的函数调用，FP8 下可能因为 JSON 生成出错而失败；推理能力也可能变弱。**跑评估不是可选项**。

> 【背景】量化指降低模型参数的数值精度(如 16 位压到 8 位)来缩小体积。Hugging Face 上有很多预量化好的模型可直接下载。

## 投机解码：小模型打草稿，大模型批改

第二个技巧更有意思，叫[[投机解码|投机解码]]。

思路是：让一个很小的草稿模型一次提前猜出几个 token,再让主模型批量验证——对的高置信度就收下，错的丢掉 <button class="pd-ts" data-t="65:31" data-who="嘉宾" data-en="For those who don't know what speculative decoding is, let me make this smaller. It's essentially, we're using another draft model, which is going to be a much smaller model than the main model that we're using." aria-label="回原文"></button>。

因为验证比逐个生成快，配对了就白赚速度。

但现场演示翻车了：配的草稿模型和主模型不匹配，接受率极低，性能不升反降——从 58 token/秒掉到 16 <button class="pd-ts" data-t="76:02" data-who="嘉宾" data-en="You'll actually see the performance went down drastically. You're seeing 16 tokens per second, whereas the baseline was 58. And then even the time to first token is sort of going up a little bit as well." aria-label="回原文"></button>。

Omer 坦率地说，原因就是草稿模型没有针对这个主模型正确训练。

他用自己家里的机器举例：Quint 3.6 350 亿参数的 MOE 模型配上 dFlash 草稿模型，能拿到 2 到 3 倍的生成加速 <button class="pd-ts" data-t="84:20" data-who="嘉宾" data-en="But yeah, from my personal experience, for my home lab, I used a Quint 3.6 35 billion MOE model, and along with that, I used a dflash draft room model. And I get roughly around 2 to 3x token generation performance improvement, depending on the use case." aria-label="回原文"></button>。浏览器自动化约 1.5 倍，代码生成接近 3 倍。

关键是找到和主模型配对的草稿模型——最好用官方配套发布的那个。

## 找到那条拐点，然后拧对旋钮

所有调优都围绕一张图：并发数上去，吞吐先涨后平，但延迟会一直涨。==你要找的是吞吐即将变平、延迟还没爆炸的那个拐点== <button class="pd-ts" data-t="87:51" data-who="嘉宾" data-en="So you essentially want to find the sweet spot. And that is something that vLLM sort of lets you kind of tweak and make sure that you find that sweet spot. And once you do find it, you can set the right settings for it." aria-label="回原文"></button>。

现场他们找到了：32 并发。再往上，吞吐不变，延迟从 277 毫秒跳到 1300 毫秒。

解法之一是调 [[vLLM|vLLM]] 的 max num sequences 参数——即同时处理的请求数上限。从 32 调到 128 后，64 并发下吞吐从 800 涨到 1100 token/秒，延迟反而从 2000 毫秒降到 800 毫秒 <button class="pd-ts" data-t="107:42" data-who="嘉宾" data-en="Okay, so there was a big drastic improvement. The throughput actually went up quite a bit, so it's at 1,100 tokens per second, whereas previously, if we look at it over here, at 64, we were at 800 tokens per second, and then the latency was 2,000 milliseconds." aria-label="回原文"></button>。

Omer 的调优心法很朴素：**一次只改一个参数，改完就压测，量数据，再决定下一步**。

## 本集带走

- 流量稳定、在意数据隐私时，自托管 GPU 可能比按 token 付费便宜；突发流量则租接口更划算。
- 显存预算 = 模型权重 + KV 缓存；
- 投机解码上限很高(2–3 倍加速)，但草稿模型必须与主模型配套，否则性能反而暴跌。
- 调优找拐点：吞吐变平、延迟未爆的并发数；一次改一个参数，压测验证。
- 任何模型改动(量化、参数)都要跑自己的评估集，防止 JSON 损坏、函数调用失败这类隐性退化。

<div class="pd-sec pd-sec-q">全部金句 <span>0 条</span></div>



<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-06-talks-is-speculative-decoding-worth-it-profili|让小模型先猜，大模型来批：推理加速值不值？]]<span class="pd-rz">同公司:Akamai · 同概念:GPU、vLLM、投机解码 (speculative decoding)、推理 (inference)</span>
- [[2026-10-06-talks-what-is-an-inference-engine-anyway-charl|大模型背后：推理引擎到底在干什么]]<span class="pd-rz">同概念:KV 缓存 (KV cache)、vLLM、投机解码 (speculative decoding)、推理 (inference)、智能体 (agent)</span>
- [[2026-07-08-latent-space-modal|不只做推理：Modal 如何跨界多节点训练与智能体云]]<span class="pd-rz">同概念:Kubernetes、投机解码 (speculative decoding)、推理 (inference)、智能体 (agent)、vLLM</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-27-doac-the-man-who-calls-bs-on-ai-ai-is-the-wor|Ed Zitron：生成式 AI 是一场万亿级骗局]]<span class="pd-rz">同概念:GPU、推理 (inference)、智能体 (agent)</span>
- [[2026-10-11-talks-taming-the-ai-hardware-cambrian-explosio|AI芯片太多，软件太乱：Modular想从头重写整套底层]]<span class="pd-rz">同概念:GPU、推理 (inference)、vLLM</span>
- [[2026-08-12-bigtech-here-s-how-the-ai-bubble-bursts-with-pau|AI 投资泡沫的崩盘剧本:为什么万亿美元建数据中心注定亏钱]]<span class="pd-rz">同概念:GPU、推理 (inference)</span>

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
