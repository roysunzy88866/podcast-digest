---
title: "人是一个异步接口:冰淇淋配送背后的智能体架构"
podcast: 精选演讲
date: 2026-10-07
source_url: undefined
duration: "18:57"
type: episode
cover: "#64748b"
description: "Temporal 的 Melanie Warrick 用一个冰淇淋配送演示,讲清了多智能体系统里人类该何时介入、系统该怎么兜底。"
guests: ["[[Melanie Warrick]]"]
companies: ["[[Temporal]]"]
concepts: ["[[ADK]]", "[[LangGraph]]", "[[智能体]]", "[[人在回路]]", "[[工作流]]", "[[activity]]", "[[worker]]", "[[等待条件]]", "[[Signal]]", "[[持久化执行]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-04-talks-the-human-is-an-async-api-melanie-warric#post","headline":"人是一个异步接口:冰淇淋配送背后的智能体架构","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-04-talks-the-human-is-an-async-api-melanie-warric","mainEntityOfPage":"https://talk.solomind.cc/2026-10-04-talks-the-human-is-an-async-api-melanie-warric","description":"Temporal 的 Melanie Warrick 用一个冰淇淋配送演示,讲清了多智能体系统里人类该何时介入、系统该怎么兜底。","datePublished":"2026-10-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Melanie Warrick"},{"@type":"Organization","name":"Temporal"},{"@type":"Thing","name":"ADK"},{"@type":"Thing","name":"LangGraph"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"人在回路 (human in the loop)"},{"@type":"Thing","name":"工作流 (workflow)"},{"@type":"Thing","name":"activity"},{"@type":"Thing","name":"worker"},{"@type":"Thing","name":"等待条件 (wait condition)"},{"@type":"Thing","name":"Signal"},{"@type":"Thing","name":"持久化执行 (durable execution)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"人是一个异步接口:冰淇淋配送背后的智能体架构","item":"https://talk.solomind.cc/2026-10-04-talks-the-human-is-an-async-api-melanie-warric"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>人是一个异步接口:冰淇淋配送背后的智能体架构</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 人是一个异步接口:冰淇淋配送背后的智能体架构

<div class="pd-byl"><b>Melanie Warrick</b> · Temporal 工程师 · 2026-10-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-04-talks-the-human-is-an-async-api-melanie-warric.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我今天要讲的主题是：人类就是一个异步 API。</div><div class="a">— Melanie Warrick <button class="pd-ts" data-t="03:35" data-who="Melanie Warrick" data-en="I'm here to talk to you about the human is an async API." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Melanie Warrick]]
>
> **公司** [[Temporal]]
>
> **概念** [[ADK]] · [[LangGraph]] · [[智能体]] · [[人在回路]] · [[工作流]] · [[activity]] · [[worker]] · [[等待条件]] · [[Signal]] · [[持久化执行]]

演讲者 [[Melanie Warrick|Melanie Warrick]] 来自 [[Temporal|Temporal]] 公司。

她没有讲玄乎的概念,而是现场演示了一个冰淇淋配送系统:多个[[智能体|智能体]]协同调度,人类随时插手改单,甚至当众把服务杀掉再重启,订单照样不丢。

整场演讲的核心观点藏在她那句标题里——人在智能体系统里,应该被当成一个异步接口来对待。

## 冰淇淋配送是怎么跑起来的?

演示的主角是吉祥物 Ziggy,假设它在旧金山 Ferry Building 开了一家冰淇淋店。配送由3个智能体协同完成：

车队智能体负责查司机和路线(用 Google Maps),客服智能体负责查订单(用 Google Search),调度智能体则综合这些输入做决策 <button class="pd-ts" data-t="05:11" data-who="" data-en="We've got a loop for the dispatch agent. The fleet and the customer are doing research. One's doing it on the actual drivers using tools like Google Maps." aria-label="回原文"></button>。

这套系统把 Google 的 [[ADK|ADK]](一个用来编排多智能体的框架)和 Temporal 集成在一起。

Temporal 负责记录和管理整个系统的状态,并提供一个界面,让你能看到每个事件的来龙去脉。

## 客户改单,系统为什么不用停下来?

现场演示了一个常见场景:客户下单后突然反悔,提交了一个修改。

此时系统只暂停了这一个订单对应的司机,其他订单照常接收、照常配送。

另一个人(比如客服)审核后点批准,更新就生效了,那辆车继续开往 Oracle Park <button class="pd-ts" data-t="02:56" data-who="嘉宾" data-en="And another human needs to make a call on whether or not they want to accept that. So they say approve. And you'll watch that, as I mentioned, the rest of the system kept running." aria-label="回原文"></button>。

这里的关键在于:一次人工介入只暂停系统的很小一部分,而不是把整个流程卡死。这就是她说的持久执行(durable execution)。

## 为什么直接调用人类是坑?

进入正题。她说,人类当然不是工具,但对智能体来说,人就是一个工具 <button class="pd-ts" data-t="07:29" data-who="嘉宾" data-en="Let's get back to human in the loop, what I wanted to really get across to you about this whole talk. So the human, granted, we're not tools, but we are a tool to the agent." aria-label="回原文"></button>。

麻烦在于,如果你在代码里直接写一个函数去调用人类,就会产生一个阻塞式调用:系统停在那里等人回话。

更糟的是,如果这时候服务挂了,这个等待中的人工交互就丢了,系统不知道自己进行到哪一步。

她给的答案是两个原语:[[等待条件|等待条件]](wait condition)和[[Signal|信号]](signal)。

用等待条件把某个事件单独隔离并暂停,状态存进持久层;等人类回复时发一个信号进来,注入正在运行的流程 <button class="pd-ts" data-t="08:09" data-who="嘉宾" data-en="What you want is these two core primitives to be applied to your code and your agents. You want a wait condition and a signal. You're allowing yourself to isolate an event, apply a weight condition, store that in that workflow, in that durability layer, so that if anything fell over in the system, when that system came back up, it would know where it left off." aria-label="回原文"></button>。

这样即使系统崩溃重启,它也知道从哪里继续,而且不占用线程。

这些能力是现成的，还内置超时等机制——如果你在等一个人类回应，想确保它只等待有限的时间，就可以应用超时和其他原语。

她说这套东西可以扩展到数百万个暂停中的流程同时挂着 <button class="pd-ts" data-t="09:13" data-who="嘉宾" data-en="If you're waiting on a human to respond and you want to make sure that it only waits for so long, you can apply timeouts and other types of primitives. And this can scale." aria-label="回原文"></button>。

## 当众杀掉服务,订单还能恢复吗?

第二个演示更大胆。她丢进一个高价值订单,系统按设计让调度智能体暂停,等人来批准。

人类的反应时间是几分钟、几天甚至几周,但那只车流照常跑着 <button class="pd-ts" data-t="14:46" data-who="嘉宾" data-en="And we know that humans are not going to respond in 200 milliseconds. If you are, that's great. Maybe there's, there's probably a couple of people out there who are." aria-label="回原文"></button>。

然后她直接执行了 kill [[worker|worker]],把服务下线。趁着离线状态,她点了批准。

再把服务拉起来——事件日志被重放(不是重做),系统恢复到崩溃前的状态,知道有人已经批准,订单立刻分配出去,甚至已经送到了 <button class="pd-ts" data-t="16:00" data-who="嘉宾" data-en="And it's back online. And you'll notice that the dispatch agent will, what's happening is that your event log is getting replayed. It's not redone." aria-label="回原文"></button>。

架构上她故意混用了两个框架:客服和车队智能体跑在 ADK 上,调度智能体跑在 [[LangGraph|LangGraph]] 上。她想强调 Temporal 是框架无关的,哪个都能接 <button class="pd-ts" data-t="12:00" data-who="嘉宾" data-en="I'm going to use LangGraph in this example and also ADK because the reality is with Temporal, we can work with multiple frameworks. We are framework agnostic. We work across a variety of different tools." aria-label="回原文"></button>。

## 到底什么时候该让人介入?

这是全场最诚实的一段。她承认这是个难题,没有公式,只能逐案判断。**核心标准是:出错的代价有多高** <button class="pd-ts" data-t="16:50" data-who="嘉宾" data-en="I will say this. The big thing you want to take into consideration is the cost of being wrong is high. It's a case-by-case basis, and we know we're trying to get to autonomy as much as we possibly can." aria-label="回原文"></button>。

一边是风险——模型本质上是概率性的,很难做到完全可靠,尤其是安全相关的事,值得人把一道关。

另一边是警报疲劳——如果系统事事都来问你,你就会开始无意识地一路点是、是、是,人工审核形同虚设。

她建议在这两者之间权衡,并且坦承模型还在变好,但眼下仍是概率模型 <button class="pd-ts" data-t="17:18" data-who="嘉宾" data-en="And especially in a security standpoint. And we know, like on the other side of this picture, alert fatigue is real. Like a lot of us are seeing, you know, you just start saying yes, yes, yes, yes, yes, every time it asks you questions." aria-label="回原文"></button>。

无论由人发起还是由智能体发起介入,底层做法都一样:等待条件暂停流程,人类的信号让它继续往前走。

## 本集带走

- 把人当成智能体系统里的异步接口:等待条件暂停、信号恢复,不要写阻塞式的调用人类。
- 人工介入只应暂停系统的一小部分,其余流程照常运行。
- Temporal 的三个核心原语:worker(跑代码)、[[工作流|workflow]](跟踪步骤,确定性)、[[activity|activity]](外部交互,非确定性),支持 Python、TypeScript、Rust。
- 系统崩溃后靠事件日志重放恢复状态,不是从头重做——她现场杀掉服务做了验证。
- 是否让人介入,看出错的代价有多大,同时警惕什么都问导致的警报疲劳。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">我今天要讲的主题是：人类就是一个异步 API。</span>  
> *I'm here to talk to you about the human is an async API.*  
> <span class="qm">—— Melanie Warrick · [03:35]</span> ^q1

> <span class="qz">所以人类，没错，我们不是工具，但对智能体来说我们是一个工具。</span>  
> *So the human, granted, we're not tools, but we are a tool to the agent.*  
> <span class="qm">—— Melanie Warrick · [07:29]</span> ^q2

> <span class="qz">你可以让数百万个工作流挂在那里，它还能继续运行。</span>  
> *You can have millions of workflows out there parked, and it can keep running.*  
> <span class="qm">—— Melanie Warrick · [09:14]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-31-talks-building-deep-agents-and-deploying-in-pr|把智能体推向生产环境:为什么标准基础设施不够用]]<span class="pd-rz">同概念:LangGraph、人类在环 (human in the loop)、持久化执行 (durable execution)、harness</span>
- [[2026-09-15-twist-90-of-ai-prototypes-never-reach-producti|为什么 90% 的 AI 原型死在了演示阶段？]]<span class="pd-rz">同公司:Temporal · 同概念:持久化执行 (durable execution)、智能体 (agent)、harness</span>
- [[2026-07-29-productpodcast-how-to-know-your-ai-feature-actually-wor|n8n 创始人 Jan:把代码送出去,反而做到 1 亿欧元 ARR]]<span class="pd-rz">同概念:workflow、人类在环 (human in the loop)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-14-pg-together-ai-product-team|Together AI 产品团队全公开：一套仓库让 PM 下指令就出生产级 PR]]<span class="pd-rz">同概念:人类在环 (human in the loop)、智能体 (agent)、harness</span>
- [[2026-09-08-ainativedev-you-don-39-t-need-juniors-to-code-hire-t|初级开发者该失业了吗？Architect、律所模式与「智能体工作流」的悖论]]<span class="pd-rz">同概念:workflow、智能体 (agent)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:智能体 (agent)、harness</span>

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
