---
title: 无限上下文窗口是个神话：别再往里塞东西了
podcast: 精选演讲
date: 2026-10-13
source_url: undefined
duration: "15:44"
type: episode
cover: "#64748b"
description: AWS 的 Elizabeth Fuentes Leone 讲清了一件事——为什么把什么都塞进大模型的上下文窗口救不了你的智能体，以及该怎么做。
guests: ["[[Elizabeth Fuentes Leone]]"]
companies: ["[[AWS]]", "[[Strands]]"]
concepts: ["[[智能体]]", "[[上下文工程]]", "[[上下文窗口]]", "[[记忆指针]]", "[[多智能体]]", "[[注意力 U 型曲线]]", "[[向量数据库]]", "[[MCP]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-08-talks-why-bigger-context-windows-won-t-save-yo#post","headline":"无限上下文窗口是个神话：别再往里塞东西了","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-08-talks-why-bigger-context-windows-won-t-save-yo","mainEntityOfPage":"https://talk.solomind.cc/2026-10-08-talks-why-bigger-context-windows-won-t-save-yo","description":"AWS 的 Elizabeth Fuentes Leone 讲清了一件事——为什么把什么都塞进大模型的上下文窗口救不了你的智能体，以及该怎么做。","datePublished":"2026-10-13","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Elizabeth Fuentes Leone"},{"@type":"Organization","name":"AWS"},{"@type":"Organization","name":"Strands"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"上下文工程 (context engineering)"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"记忆指针 (memory pointer)"},{"@type":"Thing","name":"多智能体 (multi-agent)"},{"@type":"Thing","name":"注意力 U 型曲线 (Attention U Curve)"},{"@type":"Thing","name":"向量数据库 (vector database)"},{"@type":"Thing","name":"MCP"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"无限上下文窗口是个神话：别再往里塞东西了","item":"https://talk.solomind.cc/2026-10-08-talks-why-bigger-context-windows-won-t-save-yo"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>无限上下文窗口是个神话：别再往里塞东西了</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 无限上下文窗口是个神话：别再往里塞东西了

<div class="pd-byl"><b>Elizabeth Fuentes Leone</b> · AWS · 2026-10-13</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-08-talks-why-bigger-context-windows-won-t-save-yo.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">无限的上下文窗口是一个神话。</div><div class="a">— Elizabeth Fuentes Leone <button class="pd-ts" data-t="00:34" data-who="Elizabeth Fuentes Leone" data-en="The infinite content window is a myth." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Elizabeth Fuentes Leone]]
>
> **公司** [[AWS]] · [[Strands]]
>
> **概念** [[智能体]] · [[上下文工程]] · [[上下文窗口]] · [[记忆指针]] · [[多智能体]] · [[注意力 U 型曲线]] · [[向量数据库]] · [[MCP]]

来自 [[AWS|AWS]] 的 [[Elizabeth Fuentes Leone|Elizabeth Fuentes Leone]]（开场时她还纠正了议程上的名字错误）做了一场快节奏的演讲，主题是：[[智能体|智能体]]应用（agent）为什么经常越跑越糊涂？

答案不是更大的[[上下文窗口|上下文窗口]]，而是更好地管理窗口里的内容。她把这叫作[[上下文工程|上下文工程]]（context engineering）。

## 为什么窗口越大，智能体反而越笨？

一个典型的场景：你有一个智能体，负责监控某个应用，每次都去拉取日志。

每次拉取，数据都堆进上下文窗口，窗口越滚越大，因为智能体就是靠窗口来记住事情的 <button class="pd-ts" data-t="01:48" data-who="嘉宾" data-en="It's going to grow every time because when we have one session and each session is going to retrieve the last session because it's going to remember everything." aria-label="回原文"></button>。

一年前流行答案是：加 token，换更大的窗口。

但现在我们知道这不管用——因为存在[[注意力 U 型曲线|注意力 U 型曲线]]：数据太多时，模型会忘掉中间的部分，只记得开头和结尾 <button class="pd-ts" data-t="02:30" data-who="嘉宾" data-en="We have a lot of data, but if the data is super, super big, the agent is going to forget the middle in the curve. It's only going to remember the first part and the last part that we sent to that content window." aria-label="回原文"></button>。

更糟的是，窗口里的信息还可能毒害智能体——比如混进提示注入攻击 <button class="pd-ts" data-t="02:54" data-who="嘉宾" data-en="Sometimes the agent doesn't need all the information inside that content window. Sometimes the content window is poisoning the agent because you can have a prominent injection inside your content window." aria-label="回原文"></button>。

所以上下文工程的定义很简单：**在模型需要的时候，给它需要的信息，而不是一股脑全给它**。

## 四个策略：外置、筛选、压缩、隔离

Elizabeth 把应对手段归为四类。

外置（externalize）：把大数据挪到持久化存储里，窗口里只留一个[[记忆指针|记忆指针]]。筛选（select）：只取相关的内容。压缩（compress）：做摘要、压缩信息。

隔离（isolate）：不同智能体各用各的上下文，不互相污染 <button class="pd-ts" data-t="03:23" data-who="嘉宾" data-en="These techniques I manage for a strategy. We have the externalize, because move this big data to a persistent storage. You can create a memory pointer to storage that data." aria-label="回原文"></button>。

具体怎么落地？她用了 [[Strands|strands]]——AWS 维护的开源框架，完全免费，而且不绑定任何模型，想换 OpenAI、Anthropic 的模型，加一行代码就行 <button class="pd-ts" data-t="04:41" data-who="嘉宾" data-en="Yeah, it's open-source-free, hence it's completely model-agnostic. So here, with the strands, you can use three different strategies inside the framework. So we have a sliding window that allows you to keep only the most recent messages." aria-label="回原文"></button>。

## 对话越聊越长怎么办？

最简单的办法是框架内置的对话管理器，3 种策略：滑动窗口只保留最近的消息；摘要式管理器把旧消息总结掉、保留近几条；

也可以两者结合 <button class="pd-ts" data-t="04:47" data-who="嘉宾" data-en="So here, with the strands, you can use three different strategies inside the framework. So we have a sliding window that allows you to keep only the most recent messages." aria-label="回原文"></button>。

比如摘要策略只需一行配置：保留最近 4 条消息，其余 50% 做摘要。每次会话都自动这样管理窗口 <button class="pd-ts" data-t="06:07" data-who="嘉宾" data-en="That's the only line that you can add for this agent loop. So you have the summary radio that is, in this case, is 50%, and you want to preserve the last four messages." aria-label="回原文"></button>。

## 记忆分三种，别全塞进一个窗口

短期记忆就是最近的对话历史。但新会话开始时怎么办？

可以建长期记忆，用[[向量数据库|向量数据库]]存过去的对话，用不同的提示词决定存什么 <button class="pd-ts" data-t="07:07" data-who="嘉宾" data-en="But what happens when you want to return and you have a new session for this engine and you don't have short-term memory? You can have long-term memory and you can create a vector database for that long-term memory." aria-label="回原文"></button>。

还有关系型记忆，用实体图（她推荐去 Neo4j 的展台了解）来表达事物之间的关联。三种可以组合使用。

## 海量日志的正确处理方式

回到那个日志爆炸的例子。正确做法是：工具拉回日志后，另一个工具把日志存到存储里，只返回一个存储 ID 留在窗口里。

再由一个工具去理解日志，直接告诉智能体「日志没问题，你不用看原文」。真需要原文时，再凭 ID 去取 <button class="pd-ts" data-t="08:19" data-who="嘉宾" data-en="So how does this work? You have the tools, the tools that returns you a bunch of logs. You can use another tool that is going to be capable to take that logs and save that logs in storage." aria-label="回原文"></button>。

## 多智能体协作，更要少共享

应用复杂到一个智能体不够时，就要上[[多智能体|多智能体]]（她展示了 strands 的 swarm 模式）。

她的警告很直白：在智能体之间共享整个上下文窗口，等于「往别的智能体里倒垃圾」，因为不是每个智能体都需要全部信息 <button class="pd-ts" data-t="10:11" data-who="嘉宾" data-en="You share the context window between agents is like add garbage to the other agents because no all the agents need the information between them. So you can share the information between the" aria-label="回原文"></button>。

做法还是记忆指针——通过共享的调用状态传 ID，而不是传数据本身。

## 智能体死循环怎么办？

有的智能体会陷入死循环，反复调用同一个工具，永不停止。

解决办法是给工具设调用上限，比如某个搜索工具最多调 3 次，循环自然终止 <button class="pd-ts" data-t="11:28" data-who="嘉宾" data-en="So you have A limited tool counts. So you set max tool counts for this example is my tools search fly." aria-label="回原文"></button>。

另外，工具的返回要有清晰明确的响应，模糊的返回也是循环的诱因。

## 外部接口太慢，就用异步

调用外部 API 或 [[MCP|MCP]] 工具时，如果对方迟迟不响应，同步等待会把整个应用拖死。

改用异步：先发起任务（比如用 FastAPI 写两个工具，一个启动任务、一个查询状态），下一次调用时再取回结果。

她实测后说效果差别很大 <button class="pd-ts" data-t="13:22" data-who="嘉宾" data-en="One is StartLockJob, and another one is CheckJobStatus. I did a lot of tests using this async handle, and the difference is a lot. For example, if you have the different, well, the agent never stopped to answer me." aria-label="回原文"></button>。

## 最后的四条反模式

不要上下文塞满（context stuffing）——不需要把整个厨房都搬进窗口。慎用摘要，因为摘要过程可能丢掉智能体真正需要的信息。

不要把所有东西都传给引擎。

工具返回大数据时，外置、筛选、用记忆指针；多个智能体需要同一大数据时，共享指针不共享数据。

## 本集带走

- 上下文窗口越大不等于效果越好：数据太多时模型会忘掉中间，只记得头尾。
- 上下文工程的核心：在需要的时刻，给模型需要的信息。
- 四大策略：外置到存储、筛选相关内容、压缩摘要、按智能体隔离上下文。
- 大文件（日志、数据库结果）用记忆指针代替原文，多智能体间也只共享指针。
- 给工具设调用上限防止死循环，慢接口改异步处理。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">无限的上下文窗口是一个神话。</span>  
> *The infinite content window is a myth.*  
> <span class="qm">—— Elizabeth Fuentes Leone · [00:34]</span> ^q1

> <span class="qz">我们有大量数据，但如果数据超级超级大，智能体会忘记曲线中间的部分。</span>  
> *We have a lot of data, but if the data is super, super big, the agent is going to forget the middle in the curve.*  
> <span class="qm">—— Elizabeth Fuentes Leone · [02:19]</span> ^q2

> <span class="qz">上下文工程就是在模型需要的时候，给它所需要的信息。</span>  
> *But content engineering is giving the model information it needs when it needs it.*  
> <span class="qm">—— Elizabeth Fuentes Leone · [02:43]</span> ^q3

> <span class="qz">有时候内容窗口在毒害智能体，因为你的内容窗口里可能有提示词注入。</span>  
> *Sometimes the content window is poisoning the agent because you can have a prominent injection inside your content window.*  
> <span class="qm">—— Elizabeth Fuentes Leone · [02:54]</span> ^q4

> <span class="qz">在智能体之间共享上下文窗口，就像是给其他智能体添加垃圾，因为并不是所有智能体都需要彼此之间的信息。</span>  
> *You share the context window between agents is like add garbage to the other agents because no all the agents need the information between them.*  
> <span class="qm">—— Elizabeth Fuentes Leone · [09:59]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-08-mad-what-happens-when-billions-of-ai-agents|当几十亿个AI智能体冲向你的数据库]]<span class="pd-rz">同公司:Neo4j · 同概念:MCP、向量数据库 (vector database)、智能体 (agent)</span>
- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:MCP、上下文工程 (context engineering)、智能体 (agent)</span>
- [[2026-07-17-talks-every-company-should-have-a-brain-garry|用 Markdown 组建一支军队:Y Combinator 掌门人的 AI 原生公司蓝图]]<span class="pd-rz">同概念:上下文工程 (context engineering)、上下文窗口 (context window)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>
- [[2026-08-09-talks-velocity-sickness-what-happens-when-your|速度病：当团队 10 倍速写代码却推不出产品，怎么治]]<span class="pd-rz">同概念:上下文工程 (context engineering)、智能体 (agent)</span>
- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>

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
