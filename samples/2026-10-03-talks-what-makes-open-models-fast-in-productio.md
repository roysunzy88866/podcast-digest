---
title: 开源大模型要跑得快，背后全是硬功夫
podcast: 精选演讲
date: 2026-10-06
source_url: undefined
duration: "20:15"
type: episode
cover: "#64748b"
description: Nebius Token Factory 的 Dylan 和 Suji 讲了讲：怎么把开源大模型真正优化到生产环境里跑得又快又便宜。
companies: ["[[Nebius]]", "[[Token Factory]]"]
concepts: ["[[开源模型]]", "[[推理]]", "[[投机解码]]", "[[KV 缓存]]", "[[量化]]", "[[后训练]]", "[[负载均衡]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-03-talks-what-makes-open-models-fast-in-productio#post","headline":"开源大模型要跑得快，背后全是硬功夫","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-03-talks-what-makes-open-models-fast-in-productio","mainEntityOfPage":"https://talk.solomind.cc/2026-10-03-talks-what-makes-open-models-fast-in-productio","description":"Nebius Token Factory 的 Dylan 和 Suji 讲了讲：怎么把开源大模型真正优化到生产环境里跑得又快又便宜。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Organization","name":"Nebius"},{"@type":"Organization","name":"Token Factory"},{"@type":"Thing","name":"开源模型 (open source models)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"投机解码 (spec decoding)"},{"@type":"Thing","name":"KV 缓存 (KV cache)"},{"@type":"Thing","name":"量化 (quantization)"},{"@type":"Thing","name":"后训练 (post-training)"},{"@type":"Thing","name":"负载均衡 (load balancing)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"开源大模型要跑得快，背后全是硬功夫","item":"https://talk.solomind.cc/2026-10-03-talks-what-makes-open-models-fast-in-productio"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>开源大模型要跑得快，背后全是硬功夫</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 开源大模型要跑得快，背后全是硬功夫

<div class="pd-byl">2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-03-talks-what-makes-open-models-fast-in-productio.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">封闭 API 起步非常容易,但你往往会很快碰上天花板。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="02:50" data-who="嘉宾" data-en="Closed APIs are really easy to start with, but you often hit a ceiling really fast." aria-label="回原文"></button></div></div>

> [!info] 关联
> **公司** [[Nebius]] · [[Token Factory]]
>
> **概念** [[开源模型]] · [[推理]] · [[投机解码]] · [[KV 缓存]] · [[量化]] · [[后训练]] · [[负载均衡]]

把一个大模型从能跑通变成能上线，中间隔着一大堆看不见的工程活。

这场 20 分钟的演讲里，[[Nebius|Nebius]] 的 Dylan（负责 [[Token Factory|Token Factory]] 的产品营销）和开发者布道师 Suji 讲了他们怎么做这件事：

从芯片到服务层的垂直整合，再加上缓存、[[投机解码|投机解码]]这些听起来抽象、讲明白了其实很直观的优化手段。

## 团队为什么卡在两个都不好的选项之间？

Dylan 开场就说，今天大多数 AI 团队面对的是两个坏选项。

封闭的 API 门槛低，但很快会撞到天花板：模型没法针对你的场景调，像一个黑盒，成本随用量直线上升，没法优化 <button class="pd-ts" data-t="02:45" data-who="嘉宾" data-en="So we noticed a few things today in the market of serving open source LLMs. Usually, most AI teams are stuck between choosing two bad options. Closed APIs are really easy to start with, but you often hit a ceiling really fast." aria-label="回原文"></button>。

另一个选项是自己搭基础设施。

控制力是有了，但这几乎是一个工程项目，需要专职团队维护，产品还没开始做，离上线就还有一个月的路 <button class="pd-ts" data-t="03:14" data-who="嘉宾" data-en="So you really need a dedicated team to actually keep it running. And you're usually a month away from production before you even start your actual product. So Token Factory is kind of the shift, this third path we identified" aria-label="回原文"></button>。

Nebius Token Factory 想做的是第三条路：自己搞定基础设施，客户专注做产品。

他们是一家全栈 AI 云公司，在欧美运营自己的数据中心，是最早在欧洲跑 NVIDIA Blackwell Ultra（HGX B300 和 GB300）的云之一，也拿到了 Microsoft 和 Meta 的合同。

## 跑一个模型和跑一个生产系统差在哪？

Dylan 认为，很多团队从[[推理|推理]]起步，把模型跑起来之后才发现这只是开始。

真正的循环是：跑模型、观察它在真实世界的表现、收集数据、改进模型、再部署回去，还不能把线上服务搞挂 <button class="pd-ts" data-t="08:31" data-who="嘉宾" data-en="And this is kind of where we come in. They want to improve it over time. They need to redeploy updates without breaking things." aria-label="回原文"></button>。

「能把这整个循环跑起来的团队，做出的是优秀的 AI 产品；**跑不起来的，做出的只是演示**。」

为此 Token Factory 打通了四层：

推理（平台上托管 60 多个模型，包括 GLM、Kimi、DeepSeek、Qwen）、数据实验室（导入推理日志、用 SQL 筛选、做数据集版本管理）、[[后训练|后训练]]（微调、蒸馏、[[量化|量化]]），最后是部署。

多数团队今天要自己把这些工具拼起来，而拼装带来的摩擦会拖慢迭代。

## 开源模型真的够聪明吗？

Suji 接过了技术部分。他常被问：==你们托管[[开源模型|开源模型]]，但开源模型到底行不行==？

他给出的答案是 Artificial Analysis 的基准测试：**开源模型和闭源模型的差距已经非常窄，有些场景开源甚至更好** <button class="pd-ts" data-t="10:44" data-who="嘉宾" data-en="The black ones are proprietary models, and the blue ones are open models. And the cool thing you can see here is how the open models are actually very competitive, sometimes even better than a lot of the proprietary models." aria-label="回原文"></button>。

> 【背景】Artificial Analysis 是一家独立评测机构，定期发布各大模型的性能对比。

这意味着客户有选择权：开源模型可以跑在任何提供商上，没有锁定，而且通常便宜得多。

平台上既有大而聪明的教师模型，也有用它们训练出来的小学生模型。

## 小模型打草稿，大模型来审稿

大模型生成文字是逐个吐出标记的，很慢。

投机解码的思路是：让一个更快更便宜的小模型先去生成，再让大模型在最后做校验 <button class="pd-ts" data-t="14:29" data-who="嘉宾" data-en="Another thing, and this is something we are really excited about, it's called spec decoding. So the challenge is LLMs, they generate tokens one by one. One, two, three, four, right?" aria-label="回原文"></button>。

Suji 打了个比方：就像资深工程师把活儿外包给初级工程师去干重活，自己只负责把关。

校验通过就完事；大模型不满意的话，最坏情况是它自己重新生成一遍。

效果很实在：**用通用数据训练小草稿模型，能看到最高 30% 的提速**；用客户自己的数据训练，效果更好。

平台已经把这个功能做成几乎一键：自动抓取你的生产数据来训练草稿模型 <button class="pd-ts" data-t="15:49" data-who="嘉宾" data-en="So we did a lot of experiments here. And launching a feature, you can actually train these draft models almost like with one click. And we will capture your production data and train the draft models for you, which is pretty cool." aria-label="回原文"></button>。

## 缓存为什么是性价比最高的优化？

另一个大头是 KV 缓存。逻辑很简单：同一个标记一旦生成过就不会变，没必要反复重算，直接存下来，下次查表就行 <button class="pd-ts" data-t="16:16" data-who="嘉宾" data-en="And the common sense is once you generate a token, it doesn't change. So there's no need to keep regenerating the same token over and over again. So the idea is we cache the tokens." aria-label="回原文"></button>。

Suji 举例：提示词是猫坐在，生成下一个词后立刻缓存，下次再遇到同样的前缀，直接查缓存。提速效果在 5 到 10 倍——不是 5% 到 10%，是 10 倍 <button class="pd-ts" data-t="16:43" data-who="嘉宾" data-en="And this actually speeds up quite a bit. So just to kind of give you some ideas, we are seeing speed ups anywhere from 5 to 10x. Not just 5 to 10%, actually 10x, right?" aria-label="回原文"></button>。

麻烦在于缓存很占显存。

Token Factory 的做法是自动把缓存从宝贵的 GPU 显存卸载到普通内存，需要时再搬回来，不浪费辛苦建好的缓存，客户完全不用管。

## 负载均衡不是随机发牌

当有几十万张 GPU 在跑模型时，路由就成了问题。

Suji 特意指出，很多人以为在前面放个[[负载均衡|负载均衡]]器、随机分发就行了——但大语言模型的负载不是这样 <button class="pd-ts" data-t="13:07" data-who="嘉宾" data-en="So a lot of the time, people say, well, that's easy, right? We just put a load balancer in front, send traffic randomly to different GPUs. That's not how it works in LLMs, because the workloads are slightly different." aria-label="回原文"></button>。

早期输入都很短，一句话进去一句话出来。现在编码智能体动辄把整个代码库塞进去，输入输出长度变化极大。

**随机分发会让缓存碎片化地散落在各张卡上，命中率很低**。

他们的路由器是缓存感知的：它知道缓存存在哪张 GPU 上，把请求送到对的地方，缓存命中率高，速度自然就上去了。

## 两个阶段分家，各用各的卡

大模型推理其实有两个阶段：填充上下文非常吃计算，解码则非常吃内存。挤在同一张卡上，两者会互相抢资源 <button class="pd-ts" data-t="17:41" data-who="嘉宾" data-en="So the way you think about this is like there are two stages to LLMs. So one of them is like sort of fill in the context. That is very CPU intensive." aria-label="回原文"></button>。

解决办法是拆开：一组 GPU 专门做填充，计算效率高；另一组专门做解码，内存效率高，中间传输缓存数据。

此外平台还做量化——降低数值精度来提速省资源，但要通过大量实验找到甜点，压得太狠模型质量就会掉。

Suji 最后提醒：

如果你只是调用一个 API，可能意识不到这些幕后工作，但正是这些环节，决定了能不能顺滑地服务那些上万亿参数的大模型 <button class="pd-ts" data-t="19:01" data-who="嘉宾" data-en="And these are some of the things we kind of covered, spec decoding, KV cache, and when you do caching, doing routing, that is actually cache aware, and also separating pre-fill and decoding cases." aria-label="回原文"></button>。

## 本集带走

- 封闭 API 和自建基础设施是两个常见但都不理想的选项，Nebius Token Factory 提出第三条路：托管的推理服务加底层基础设施全包。
- 开源模型与闭源模型的差距已经非常窄，部分场景甚至更好，而且更便宜、无供应商锁定。
- 投机解码让小模型打草稿、大模型校验，用通用数据训练草稿模型即可获得最高 30% 提速。
- KV 缓存是推理中回报最高的优化，实测提速 5 到 10 倍；配合缓存感知路由和缓存卸载效果更好。
- 大模型推理的填充与解码阶段分别吃计算和内存，拆到不同 GPU 上各司其职，整体效率更高。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">封闭 API 起步非常容易,但你往往会很快碰上天花板。</span>  
> *Closed APIs are really easy to start with, but you often hit a ceiling really fast.*  
> <span class="qm">—— 嘉宾 · [02:50]</span> ^q1

> <span class="qz">而从运行到观测、到捕获、再到重新部署模型的完整循环,正是区分那些发布出色 AI 产品的团队和那些只发布 demo 的团队的关键。</span>  
> *And that full cycle from running to observing to capturing and to redeploying the model is really what separates team from that ship, like great AI products from team that ship demos.*  
> <span class="qm">—— 嘉宾 · [08:36]</span> ^q2

> <span class="qz">这有点像你是高级工程师,把工作分派给初级工程师,让他们干重活,然后你来验证工作。</span>  
> *So it's kind of like if you're like a senior engineer, you're kind of farming out the work to a junior engineer, so they're kind of doing the heavy lifting, and then you are verifying the work.*  
> <span class="qm">—— 嘉宾 · [14:53]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-19-twentyvc-20vc-anti-data-centres-is-a-chinese-psyo|推理才是赚钱的生意：Positron 联合创始人谈内存墙、缓存暴利与「守住前沿」之争]]<span class="pd-rz">同公司:NVIDIA · 同概念:KV cache、推理 (inference)、量化 (quantization)</span>
- [[2026-05-20-talks-the-infrastructure-behind-ai-agents-with|Base 10 的 Julian：推理正在从「租用智能」走向「拥有智能」]]<span class="pd-rz">同概念:后训练 (post-training)、开源模型 (open source models)、推理 (inference)</span>
- [[2024-06-21-talks-product-led-ai-mustafa-suleyman-on-defin|Mustafa Suleiman:数据是新的护城河——AI 创业者的机会地图]]<span class="pd-rz">同概念:后训练 (post-training)、开源模型 (open source models)、微调 (fine-tuning)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-10-07-bigtech-can-ai-keep-growing-exponentially-let-s|AI基建狂潮比你想的更大，而且还没到头]]<span class="pd-rz">同公司:Nebius、NVIDIA · 同概念:推理 (inference)</span>
- [[2026-08-12-bigtech-here-s-how-the-ai-bubble-bursts-with-pau|AI 投资泡沫的崩盘剧本:为什么万亿美元建数据中心注定亏钱]]<span class="pd-rz">同概念:后训练 (post-training)、推理 (inference)</span>
- [[2026-08-18-iltb-ben-thompson-on-big-tech-china-and-the-a|Ben Thompson:美国赢得 AI 竞赛反而是危险的]]<span class="pd-rz">同公司:NVIDIA · 同概念:推理 (inference)</span>

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
