---
title: "把人类当成一个异步 API:智能体永不下线"
podcast: 精选演讲
date: 2026-10-07
source_url: undefined
duration: "18:57"
type: episode
cover: "#64748b"
description: Temporal 演讲者用冰淇淋配送智能体演示，讲解如何用等待条件与信号实现人机协同与持久化执行。
guests: ["[[Melanie Warrick]]"]
companies: ["[[Temporal]]"]
concepts: ["[[ADK]]", "[[LangGraph]]", "[[智能体]]", "[[人在回路]]", "[[工作流]]", "[[activity]]", "[[worker]]", "[[等待条件]]", "[[Signal]]", "[[持久化执行]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-04-talks-the-human-is-an-async-api-melanie-warric#post","headline":"把人类当成一个异步 API:智能体永不下线","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-04-talks-the-human-is-an-async-api-melanie-warric","mainEntityOfPage":"https://talk.solomind.cc/2026-10-04-talks-the-human-is-an-async-api-melanie-warric","description":"Temporal 演讲者用冰淇淋配送智能体演示，讲解如何用等待条件与信号实现人机协同与持久化执行。","datePublished":"2026-10-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Melanie Warrick"},{"@type":"Organization","name":"Temporal"},{"@type":"Thing","name":"ADK"},{"@type":"Thing","name":"LangGraph"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"人在回路 (human in the loop)"},{"@type":"Thing","name":"工作流 (workflow)"},{"@type":"Thing","name":"activity"},{"@type":"Thing","name":"worker"},{"@type":"Thing","name":"等待条件 (wait condition)"},{"@type":"Thing","name":"Signal"},{"@type":"Thing","name":"持久化执行 (durable execution)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"把人类当成一个异步 API:智能体永不下线","item":"https://talk.solomind.cc/2026-10-04-talks-the-human-is-an-async-api-melanie-warric"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把人类当成一个异步 API:智能体永不下线</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 把人类当成一个异步 API:智能体永不下线

<div class="pd-byl"><b>Melanie Warrick</b> · Temporal 工程师 · 2026-10-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-04-talks-the-human-is-an-async-api-melanie-warric.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我今天要和你们讲的是：人类是一个异步 API。</div><div class="a">— Melanie Warrick <button class="pd-ts" data-t="03:35" data-who="Melanie Warrick" data-en="I'm here to talk to you about the human is an async API." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Melanie Warrick]]
>
> **公司** [[Temporal]]
>
> **概念** [[ADK]] · [[LangGraph]] · [[智能体]] · [[人在回路]] · [[工作流]] · [[activity]] · [[worker]] · [[等待条件]] · [[Signal]] · [[持久化执行]]

这一集是一段技术演讲：

讲者是 [[Temporal|Temporal]] 的一位工程师(具体姓名未提及)，他带来一个冰淇淋配送演示——Ziggy(他们公司的吉祥物)的冰淇淋店要靠多个[[智能体|智能体]]协调配送——而真正想讲的核心命题是：

**在智能体系统里，「人类」应该被当作一个异步 API 来调用，而且这套系统必须具备[[持久化执行|持久化执行]]能力，服务挂了也不能丢状态。**

## 演示在演什么：三个智能体送冰淇淋

开场 demo 里，配送由三个智能体协同完成：

一个车队智能体(用 Google Maps 研究司机)、一个客户智能体(用 Google Search 研究订单)、一个调度智能体(接收前两者的输出做决策)。

底层是 Google 的 [[ADK|ADK]](一个编排多个智能体的框架)与 Temporal 的集成——Temporal 负责追踪和管理整个流程的状态，并提供一个 UI 展示事件历史。

演示里最出彩的一幕是「[[人在回路|人类在环]]」：

客户提交一笔订单变更，系统**只暂停这条订单对应的那个环节**，等另一个人点「批准」，其余订单照常进出、配送照常进行。

## Temporal 的三个原语：worker、workflow、activity

Temporal 是软件也是服务，支持 Python、TypeScript、Rust,在 GitHub 上免费开源；如果用它托管服务来管理状态才付费，也可以自行部署。

它解决的是任何分布式系统都绕不开的问题：把故障处理和状态管理标准化。

三个核心原语的分工:
- **[[worker|worker]]**:真正运行代码的地方;
- **[[工作流|workflow]]**:跟踪系统中各步骤的地方，智能体的循环就跑在 workflow 里，它是**确定性**的;
- **[[activity|activity]]**:所有与外部交互的东西——模型调用、工具调用都设成 activity,它是**非确定性**的。

对 ADK 的集成方式很轻：用 temporal model 类包住模型、用 activity tool 包住工具，再给 worker 传一个 Google ADK 插件即可。

对 [[LangGraph|LangGraph]](通过构建图来搭建多智能体的框架)则是把 Temporal 传进图的每个节点：

模型调用和工具调用设为 activity,流程中的一个步骤设为 workflow,并用 LangGraph 自带的 interrupt(中断)从节点里调用出去。

讲者特别强调 Temporal 对框架不设限，demo 里就是 ADK 跑客户与车队智能体、LangGraph 跑调度智能体，Temporal 贯穿其中。

## 核心方法：等待条件 + 信号 = 人类是异步 API

这是全场最想传达的东西。

如果你直接把「呼叫人类」写成一个函数调用，它会变成一个**阻塞调用**——服务一旦挂了，这个人类的参与过程就追踪丢了。

正确做法是用两个核心原语:
- **wait condition([[等待条件|等待条件]])**：

隔离出某个事件，暂停那个特定的 workflow——注意只暂停它，不占线程，workflow 上的其他协程和系统里其他 workflow 照常跑;
- **signal([[Signal|信号]])**：

可以在任意时刻接受任意输入，注入到正在运行的 workflow 中，相当于人类回话后「喏，结果在这儿，继续往前推」。

这套机制自带给超时等内置原语——等人类回应时可以设「最多等多久」;而且能扩展到数百万个挂起的 workflow。

**服务挂了也不怕**，这是持久化执行的杀手锏。demo 里讲者当场杀掉 worker,趁离线点下「批准」：

因为状态存在 Temporal 自己的数据存储里、不在你的服务上，事件照样被跟踪和排队；

worker 重新上线后，事件日志被**重放**(replay)——注意不是重新执行，只是重放到上次中断的地方，系统就知道「这是我的当前状态」，然后批准生效、订单分配、顺利送达。

暂停可以横跨任意长的时间——「人类不会在 200 毫秒内回应」，可能是几分钟、几天甚至几周，都无所谓，因为被暂停的只是那一个特定事件。

## 那到底什么时候该让人在环？

讲者说这才是真正难的问题，答案是逐案例评估，核心判据是**犯错的代价高不高**，尤其从安全角度衡量。

另一面是真实存在的「警报疲劳」——很多人被问多了就开始一味点「好、好、好」，所以要在两者之间找平衡。

模型是概率性的，很难达到完全可靠，所以这个权衡得针对你解决的具体问题自己评估。

最后收束全场：不管是人发起还是机器发起，套路都是同两个原语——等待条件暂停 workflow,人类信号让工作继续。

## 本集带走

- **别把「问人类」写成普通函数调用**：那是阻塞调用，服务一崩参与过程就丢。用「等待条件 + 信号」两个原语替代——前者暂停特定 workflow,后者随时把人类的回应注入正在运行的流程。
- **只暂停出问题的那一格**：一笔订单变更只冻结该订单的子 workflow,其余订单和配送照常跑，等待可以横跨几分钟到几周。
- **状态放在你的服务之外**：持久化层在独立数据存储上，worker 被杀、服务下线都不丢事件；恢复时靠重放事件日志(不是重新执行)回到中断点，排队中的批准自动生效。
- **框架可以混用**:ADK 跑一部分智能体、LangGraph 跑另一部分，模型调用/工具调用设为非确定性的 activity,流程步骤设为确定性的 workflow,Temporal 负责贯穿追踪状态。
- **人在环的判据是「犯错的代价」**：代价高的环节加人审，同时警惕警报疲劳，逐案例权衡，别一刀切追求全自主。

<div class="pd-sec pd-sec-q">全部金句 <span>2 条</span></div>

> <span class="qz">我今天要和你们讲的是：人类是一个异步 API。</span>  
> *I'm here to talk to you about the human is an async API.*  
> <span class="qm">—— Melanie Warrick · [03:35]</span> ^q1

> <span class="qz">你可以让数百万个 workflow 挂在那里，它还能继续运行。</span>  
> *You can have millions of workflows out there parked, and it can keep running.*  
> <span class="qm">—— Melanie Warrick · [09:14]</span> ^q2

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-31-talks-building-deep-agents-and-deploying-in-pr|把智能体推向生产环境:为什么标准基础设施不够用]]<span class="pd-rz">同概念:LangGraph、人类在环 (human in the loop)、持久化执行 (durable execution)、harness</span>
- [[2026-07-29-productpodcast-how-to-know-your-ai-feature-actually-wor|n8n 创始人 Jan:把代码送出去,反而做到 1 亿欧元 ARR]]<span class="pd-rz">同概念:workflow、人类在环 (human in the loop)、智能体 (agent)</span>
- [[2026-08-13-sed-rebuilding-the-cloud-for-ai-agent-code|当 AI 智能体成为云的主要用户：Render CEO 谈云的下一次重建]]<span class="pd-rz">同公司:Temporal · 同概念:持久化执行 (durable execution)、智能体 (agent)</span>

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
