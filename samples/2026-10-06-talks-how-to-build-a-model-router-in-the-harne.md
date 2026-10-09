---
title: "一次实验省下 64% 成本：给 AI 智能体配一个“分诊台”"
podcast: 精选演讲
date: 2026-10-09
source_url: undefined
duration: "13:37"
type: episode
cover: "#64748b"
description: LangChain 开源团队产品经理 Sydney 讲解如何用模型路由器给智能体省钱，实测成本降六成、质量不掉。
host: "[[Sydney]]"
companies: ["[[LangChain]]", "[[LangSmith]]", "[[OpenSWE]]"]
concepts: ["[[智能体]]", "[[模型路由]]", "[[帕累托前沿]]", "[[开放模型]]", "[[A-B 测试]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-06-talks-how-to-build-a-model-router-in-the-harne#post","headline":"一次实验省下 64% 成本：给 AI 智能体配一个“分诊台”","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-06-talks-how-to-build-a-model-router-in-the-harne","mainEntityOfPage":"https://talk.solomind.cc/2026-10-06-talks-how-to-build-a-model-router-in-the-harne","description":"LangChain 开源团队产品经理 Sydney 讲解如何用模型路由器给智能体省钱，实测成本降六成、质量不掉。","datePublished":"2026-10-09","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Sydney"},{"@type":"Organization","name":"LangChain"},{"@type":"Organization","name":"LangSmith"},{"@type":"Organization","name":"OpenSWE"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"模型路由 (model routing)"},{"@type":"Thing","name":"帕累托前沿 (Pareto frontier)"},{"@type":"Thing","name":"开放模型 (open model)"},{"@type":"Thing","name":"A/B 测试 (A-B test)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"一次实验省下 64% 成本：给 AI 智能体配一个“分诊台”","item":"https://talk.solomind.cc/2026-10-06-talks-how-to-build-a-model-router-in-the-harne"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>一次实验省下 64% 成本：给 AI 智能体配一个“分诊台”</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 一次实验省下 64% 成本：给 AI 智能体配一个“分诊台”

<div class="pd-byl"><b>Sydney</b> · LangChain 开源团队产品经理 · 2026-10-09</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-06-talks-how-to-build-a-model-router-in-the-harne.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">所以我在这里基本上是在假设：对于很多我们让智能体去做的任务，我们往往不需要最好的模型。</div><div class="a">— Sydney <button class="pd-ts" data-t="00:49" data-who="Sydney" data-en="So I'm basically assuming here that we often don't need the best model for a lot of tasks that we ask our agent to do." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sydney]]
>
> **公司** [[LangChain]] · [[LangSmith]] · [[OpenSWE]]
>
> **概念** [[智能体]] · [[模型路由]] · [[帕累托前沿]] · [[开放模型]] · [[A-B 测试]]

如果你在用大模型搭[[智能体|智能体]]，最贵的那个模型往往会吞掉大部分预算。但很多任务其实用不着最强的模型。

[[LangChain|LangChain]] 开源团队的产品经理 [[Sydney|Sydney]] 分享了一个实验：给开源编程智能体 [[OpenSWE|OpenSWE]] 加一个“[[模型路由|模型路由]]器”，自动为每个任务挑选合适的模型。

结果是**每个任务的中位成本下降 64%，质量没有可测量的变化**。

## 为什么不该所有任务都用最强的模型？

Sydney 的出发点很简单：前沿模型的智能很贵，规模化运行的智能体会被成本拖垮。

连 Anthropic 这样的模型厂商都建议先从小模型（如 Claude Haiku）起步，确实不够再升级到 Opus <button class="pd-ts" data-t="00:34" data-who="嘉宾" data-en="And so model routing can help to reduce cost theoretically without sacrificing quality if it's done well. I have a quote here showing that model providers like Anthropic even recommend starting with smaller models, in this case like Claude Haiku, before graduating to a more intelligent model like Opus because a lot of tasks can be done with these cheaper models." aria-label="回原文"></button>。

超过某个点后，你遇到收益递减：成本和延迟都在涨，产出质量却没有明显提升。

理想状态是“模型、框架、任务”三者匹配——用对智能和成本曲线上的那个模型，再由框架把合适的上下文喂给它。

## 路由器到底做什么？

路由器就像医院的分诊台。任务请求进来，一个分类模型加上写着判断标准的提示词，决定这个任务该用哪个档位的模型：

是快而便宜的、均衡的，还是慢而贵的高性能模型。选定的模型再去驱动智能体完成任务。

搭建路由器分四步：理解你的智能体在做什么任务；理解有哪些可用模型；在智能体的框架里建路由器；

持续追踪任务结果，确认成本降了、质量没掉。

## 第一步：先搞清楚你的智能体在干什么活

团队用 [[LangSmith|LangSmith]] 收集 OpenSWE 每次运行的完整轨迹，做聚合分析。

结果不意外：编程智能体的任务以代码改动为主，包括功能开发、修 bug、写测试，另外还有一些设计问题和通用问答 <button class="pd-ts" data-t="03:09" data-who="嘉宾" data-en="And so we were able to use all of those traces and do aggregate analysis over them to determine what types of tasks our agent was doing. So you can see here, unsurprisingly for a coding agent, that code changes dominated things like feature requests, bug fixes, and tests." aria-label="回原文"></button>。

Sydney 认为这一步最重要——它是制定路由标准的根基。**不清楚任务分布，就写不出有效的路由规则**。

他们还按任务类型统计了调用次数和大模型成本，用来衡量复杂度：功能开发确实比写测试更复杂。

## 第二步：沿着“最优边界”挑三档模型

模型数据来自 Artificial Analysis 的智能指数。

**Sydney 把性能和成本权衡最优的那组模型称为“帕累托边界”**——在基准准确率和成本延迟之间拿到最好交易的一批模型 <button class="pd-ts" data-t="05:22" data-who="嘉宾" data-en="This is what we call the Pareto frontier for LLMs. It's a set of optimal models that have a good trade-off between benchmark accuracy and evals compared to cost and latency." aria-label="回原文"></button>。

团队最终选了三个：GLM 5.3 Flash 当快速档，GPT 5.6 Sol 当均衡档，GPT 6 Astra 当高性能档。值得一提的是，GLM 5.3 Flash 是[[开放模型|开源模型]]，Sydney 说路由器正是试验便宜开源模型的好机会。

## 第三步：把路由器装进框架里

路由标准来自两个来源：第一步的任务分析，以及 OpenAI 等厂商官方的模型使用指南。

这个路由器只在会话的第一条消息上运行一次，之后整个任务都用选定的模型——不做中途换模型。

最初用 GLM 5.3 Flash 配结构化输出来做路由决策，后来换成了专门的决策模型 JEV，号称比大模型更快更便宜，实测也确实如此 <button class="pd-ts" data-t="07:07" data-who="嘉宾" data-en="But after the experiment, JEV, a popular decision model, came out and had claims of being significantly faster and cheaper than LLMs with more constrained decision-making powers." aria-label="回原文"></button>。

## 第四步：怎么证明质量没掉？

验证有两条路。离线评测很安全，但构建有代表性的数据集又贵又难。

更快的方法是 [[A-B 测试|A/B 测试]]——线上流量天然有代表性，风险是真实用户可能撞上一个还不完善的路由器 <button class="pd-ts" data-t="08:12" data-who="嘉宾" data-en="And so the faster approach here is to do an A-B test where you know that your live traffic is representative. But the catch here is that, you know, we're running this experiment for our live users." aria-label="回原文"></button>。

团队追踪两个指标：合并 PR 的比率，以及用户对运行结果的点赞点踩。

将近 500 个会话的结果：中位成本降 64%，P90 成本降 37%，合并 PR 率没有显著差异。34% 的任务进了快速档，56% 进均衡档，只有 10% 真正需要高性能模型。

一个插曲：

他们还试过“全用快速模型”的对照组，结果一天之内就因为用户抱怨太多而叫停——这证明路由是必要的，不能一刀切全用小模型 <button class="pd-ts" data-t="10:30" data-who="嘉宾" data-en="We did end this test within a day because we got so many complaints from users who were stuck on the fast arm. And so we got enough complaints. We didn't want to significantly degrade user experience." aria-label="回原文"></button>。

## 还能怎么优化？

几个方向：在 OpenSWE 这类智能体上做实际验证 <button class="pd-ts" data-t="11:27" data-who="" data-en="A third thing that I mentioned earlier we could certainly explore is rerouting mid-thread. So you can imagine if for OpenSwee, a user asks a question and then discovers that maybe a pretty complex bug fix is in order or wants to design a new feature mid-thread, you might want to upgrade to a more capable model." aria-label="回原文"></button>；给子智能体也配上大小合适的模型；

会话中途升级模型——比如用户聊着聊着发现要修一个复杂 bug，可以中途换更强的模型，在对话中途重新路由，确保每个节点都用上适合手头任务的模型 <button class="pd-ts" data-t="11:43" data-who="" data-en="So you can imagine if for OpenSwee, a user asks a question and then discovers that maybe a pretty complex bug fix is in order or wants to design a new feature mid-thread, you might want to upgrade to a more capable model." aria-label="回原文"></button>。

换模型的代价是缓存失效，成本可能不低 <button class="pd-ts" data-t="11:50" data-who="" data-en="And rerouting mid-thread could help to ensure that the right model is chosen for the task at any point in the given thread. One trade-off here is that if you do switch a model, you experience a cache miss, which can be costly." aria-label="回原文"></button>，但对 OpenSWE 这种异步智能体来说，反正从智能体响应到开发者在 Slack 里回复，经常超过 5 分钟，缓存早就失效了，所以缓存失效可能不是个大问题 <button class="pd-ts" data-t="11:56" data-who="" data-en="One trade-off here is that if you do switch a model, you experience a cache miss, which can be costly. But for async agents like OpenSuite, there's actually a lot of cache misses anyways, just because there's more than a five minute idle time between when an agent responds and a developer has time to respond back in Slack." aria-label="回原文"></button>。

接下来第四件事是挖掘更丰富的路由信号 <button class="pd-ts" data-t="12:15" data-who="" data-en="So this cache miss might actually not be a super significant concern. And then the fourth thing would be digging for richer routing signals. So we didn't get a ton of feedback on traces." aria-label="回原文"></button>。

## 本集带走

- 给智能体配“分诊台”式的模型路由器，实测中位成本降 64%，质量无显著变化。
- 四步法：摸清任务分布 → 沿成本-智能最优边界选模型 → 在框架里建路由器 → 先想好怎么衡量结果再上线。
- 路由决策不必用大模型，专门的决策模型（如 JEV）更快更便宜。
- 别一刀切用小模型：全用快速档的对照组因用户抱怨一天内叫停。
- 中途换模型值得一试，异步智能体的缓存失效代价可能没那么大。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">所以我在这里基本上是在假设：对于很多我们让智能体去做的任务，我们往往不需要最好的模型。</span>  
> *So I'm basically assuming here that we often don't need the best model for a lot of tasks that we ask our agent to do.*  
> <span class="qm">—— Sydney · [00:49]</span> ^q1

> <span class="qz">超过某个点之后，你会有点陷入收益递减：成本和延迟在增加，但输出的质量并没有显著变好。</span>  
> *Past a certain point, you kind of hit diminishing returns where your cost and latency are increasing, but the quality of the outputs are not significantly better.*  
> <span class="qm">—— Sydney · [00:57]</span> ^q2

> <span class="qz">提前剧透一下实验结果：我们实现了每线程中位成本降低 64%，且质量没有可测量的变化。</span>  
> *And to kind of spoil the results of the experiment here, we were able to see a 64% reduction in median cost per thread with no measurable change in quality.*  
> <span class="qm">—— Sydney · [02:00]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-05-talks-interrupt-nyc-opening-keynote|模型不再是护城河，谁在围绕模型建「自己的智能」]]<span class="pd-rz">同公司:LangChain、LangSmith · 同概念:智能体 (agent)、模型路由 (model routing)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同公司:LangChain · 同概念:智能体 (agent)</span>
- [[2026-08-06-talks-the-state-of-model-routing-nvidia-cognit|不靠一个模型打天下:多模型路由的早期探索与实战权衡]]<span class="pd-rz">同概念:智能体 (agent)、模型路由 (model routing)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同概念:智能体 (agent)</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:智能体 (agent)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同概念:智能体 (agent)</span>

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
