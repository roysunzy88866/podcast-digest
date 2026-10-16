---
title: "上下文引擎:让AI不再像新员工一样瞎摸"
podcast: 精选演讲
date: 2026-10-16
source_url: undefined
duration: "19:28"
type: episode
cover: "#64748b"
description: "Unblocked 的 Peter 演示了上下文引擎如何把散落各处的公司知识喂给 AI,省一半成本,还开源了代码。"
host: "[[Peter]]"
companies: ["[[Unblocked]]"]
concepts: ["[[上下文引擎]]", "[[智能体]]", "[[RAG]]", "[[Document Query Engine]]", "[[上下文引擎模拟器]]", "[[LLM]]", "[[验证]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-10-talks-beyond-rag-a-relational-context-engine-t#post","headline":"上下文引擎:让AI不再像新员工一样瞎摸","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-10-talks-beyond-rag-a-relational-context-engine-t","mainEntityOfPage":"https://talk.solomind.cc/2026-10-10-talks-beyond-rag-a-relational-context-engine-t","description":"Unblocked 的 Peter 演示了上下文引擎如何把散落各处的公司知识喂给 AI,省一半成本,还开源了代码。","datePublished":"2026-10-16","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Peter"},{"@type":"Organization","name":"Unblocked"},{"@type":"Thing","name":"上下文引擎 (context engine)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"Document Query Engine"},{"@type":"Thing","name":"上下文引擎模拟器 (context engine simulator)"},{"@type":"Thing","name":"LLM"},{"@type":"Thing","name":"验证 (validation)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"上下文引擎:让AI不再像新员工一样瞎摸","item":"https://talk.solomind.cc/2026-10-10-talks-beyond-rag-a-relational-context-engine-t"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>上下文引擎:让AI不再像新员工一样瞎摸</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 上下文引擎:让AI不再像新员工一样瞎摸

<div class="pd-byl"><b>Peter</b> · Unblocked · 2026-10-16</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-10-talks-beyond-rag-a-relational-context-engine-t.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">在那些日子里，你自己就是上下文层。</div><div class="a">— Peter <button class="pd-ts" data-t="01:08" data-who="Peter" data-en="And in those days, you were the context layer." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Peter]]
>
> **公司** [[Unblocked]]
>
> **概念** [[上下文引擎]] · [[智能体]] · [[RAG]] · [[Document Query Engine]] · [[上下文引擎模拟器]] · [[LLM]] · [[验证]]

在 AI [[智能体|智能体]]出现之前,公司的“上下文层”其实是你自己。新员工要翻代码、翻文档,还要消化组织多年积累的事故教训和“伤疤”。

[[Unblocked|Unblocked]] 的 [[Peter|Peter]] 在一场 20 分钟的演讲里,讲了他们怎么把这些散落的知识变成 AI 可以直接使用的上下文,并现场从零搭出了这个系统的核心部分。

## 上下文引擎到底省了多少钱?

Peter 先做了个对比实验。他让 Claude 制定一个优化某个内部组件的计划。

不接[[上下文引擎|上下文引擎]]时,Claude 就像个新员工,在代码库里到处搜索,折腾半天给出建议——花了 2.60 美元、3 分钟。

接上 Unblocked 之后,AI 拿到的是一个紧凑的上下文包:不仅有源代码,还有 Notion 架构文档、相关拉取请求、Slack 讨论记录。

**成本降到 1.29 美元,时间约 1 分半,成本砍半** <button class="pd-ts" data-t="04:08" data-who="嘉宾" data-en="So here I spent $1.29 on this, and it took about a minute and 30 seconds. That was with the context engine, but without, I'm spending up to $2.60 and three minutes." aria-label="回原文"></button>。

另一个例子更有说服力。

同事 Richie 发现代码审查产品报告的问题数量在下降,直接问 Unblocked,系统很快定位到原因:他们把模型从旧版本切换到了新版本,行为变化导致问题被漏掉。

接着他让系统直接修复——Unblocked 自己创建了拉取请求,还引用了当初引发回退的那个拉取请求和相关的 Slack 讨论 <button class="pd-ts" data-t="05:37" data-who="嘉宾" data-en="It understood the PR that caused the regression in the first place. And then it found a Slack conversation where this was being discussed and pulled on some of the data here to help inform the fix, which is just nuts." aria-label="回原文"></button>。

## 为什么 RAG 只解决了一半问题?

Peter 把散落的知识分了两类。

一类是内容问题:找某段代码、改它的拉取请求、讨论它的聊天线程——这类语义检索,[[RAG|RAG]](检索增强生成)已经很擅长。

另一类是结构性问题:上周合并了哪些拉取请求?谁审查支付模块最多?

这些问题有时间条件、要按人过滤、要做统计,RAG 的向量库做不到,必须转成真正的数据库查询 <button class="pd-ts" data-t="07:07" data-who="嘉宾" data-en="You give an agent loop tools to do file search after this, and it's very powerful. But it doesn't handle some of the other type of structural questions, like PRs that I merged last week, who reviewed payments the most, open PRs, et cetera." aria-label="回原文"></button>。

Richie 那个案例的开头——“给我看 1 月 1 日以来每周的比率图表”——正是这种查询。

## 从零搭一个查询引擎,难在哪?

Peter 现场用他们的开源项目 [[Document Query Engine|Document Query Engine]] 演示了搭建过程。他说**生成查询本身是最简单的部分,难的是周边的脚手架** <button class="pd-ts" data-t="08:22" data-who="嘉宾" data-en="But generating the queries is actually the easy part. The hard part is the scaffolding that sits around it. So you need to do things like understand the schema so you can pass it to the LLN so it generates a tightly bound query." aria-label="回原文"></button>:

第一,自动发现数据结构。MongoDB 没有固定模式,他们的做法是采样一批文档,在运行时推导出模式。

Peter 特意提醒:别什么都用大模型,像推断枚举值这种看起来不确定的活,传统的过程式方法就能干得很好 <button class="pd-ts" data-t="11:11" data-who="嘉宾" data-en="Now, the outcome from this is that you can use an LLM as a Thor hammer, and it can do a pretty good job. But actually, you get really, really far just using traditional procedural methods." aria-label="回原文"></button>。

第二,身份映射。你问“Rasheen 的开放拉取请求”,但他在 GitHub 上的账号名可能完全不同。

Unblocked 用模糊匹配把不同系统的身份对上,实在不行再让大模型做裁判 <button class="pd-ts" data-t="12:34" data-who="嘉宾" data-en="When we take user names or identities from different systems and map them across, you can do this kind of fuzzy matching. And then in the end, if you have to, you can pass a list of names to an LLM and have it act as a tiebreaker." aria-label="回原文"></button>。

第三,把模式、当前时间、提问者身份一起喂给大模型,让它生成查询——这样“我的拉取请求”这种问题也能解析。

## 最关键的一步:别让 AI 的查询跑了野马

**大模型生成的查询是不可信的**。Peter 举了个吓人的例子:某个操作符可以在数据库服务器上执行原始 JavaScript,绝对不能放行 <button class="pd-ts" data-t="14:03" data-who="嘉宾" data-en="Your query could contain really dangerous operators, like the function operator, for example, which would execute raw JavaScript on the DB server, which is definitely not ideal." aria-label="回原文"></button>。

另外,如果有租户 ID 这类元数据字段,最好根本不让大模型碰,由系统在后台悄悄注入,保证查询不会越界。

他的演示里,问“标题含 authentication 的拉取请求”,[[验证|验证引擎]]拦下了正则表达式——不允许,驳回 <button class="pd-ts" data-t="15:05" data-who="嘉宾" data-en="And there we go. OK. So our validation engine said, sorry, regular expressions aren't allowed." aria-label="回原文"></button>。

被驳回之后怎么办?把错误信息塞回给大模型,让它自我修正。技术上就是一个带重试上限的循环 <button class="pd-ts" data-t="15:34" data-who="嘉宾" data-en="But what we can do instead is just take that error and just loop it back in to the LLM and have the LLM kind of self-correct. And that's all it is. That's all it looks like from a technical standpoint." aria-label="回原文"></button>。

Peter 又演示了最后一块拼图:全文检索。加上之后,模糊的问题也能最终找到结果。

搭完的引擎不只是个查询工具,还能驱动聊天智能体——问“上周我们做了哪些和身份验证相关的事”,它会展示自己生成了哪些查询、拿到数据后再推理作答 <button class="pd-ts" data-t="18:08" data-who="嘉宾" data-en="Now you get this whole thing that will show you exactly what it's doing, all the queries that it creates, And now it has the data, and it's just kind of reasoning about it behind the scenes, and there we go." aria-label="回原文"></button>。

演讲最后,Peter 提到还有一个开源的“[[上下文引擎模拟器|上下文引擎模拟器]]”:如果你暂时不方便接入 Unblocked,可以完全在本地跑,它会按任务生成上下文包,做 A/B 测试,让你亲眼看到上下文齐全时智能体的表现差异 <button class="pd-ts" data-t="18:53" data-who="嘉宾" data-en="And so the idea is it will create a context bundle for you on a task by task basis. And then take that context bundle and run an A-B test against the same task and show you the benefits of having all of that context at your fingertips for your agents." aria-label="回原文"></button>。

## 本集带走

- 上下文引擎把散落在代码、文档、拉取请求、聊天里的公司知识,整合成互相关联、带权限意识的上下文包。
- 接上上下文引擎后,同一个任务的花费从 2.60 美元降到 1.29 美元,时间从 3 分钟缩到 1 分半。
- RAG 擅长语义检索,但“上周合并的拉取请求”这类结构性查询需要另一套引擎:把自然语言转成数据库查询。
- 大模型生成的查询必须验证:拦截危险操作符、隔离租户字段,出错就把错误回传让它自我修正。
- 相关代码全部开源:Document Query Engine 和上下文引擎模拟器都可以自己动手玩。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">在那些日子里，你自己就是上下文层。</span>  
> *And in those days, you were the context layer.*  
> <span class="qm">—— Peter · [01:08]</span> ^q1

> <span class="qz">最终它搞清楚了，或者至少它自信地表现出它搞清楚了。</span>  
> *And it figures it out eventually, or at least it confidently projects that it's figured it out.*  
> <span class="qm">—— Peter · [02:57]</span> ^q2

> <span class="qz">如果你把这些东西包进一个智能体循环，它能走得非常非常远。</span>  
> *And if you wrap that stuff in an agent loop, it can go really, really far.*  
> <span class="qm">—— Peter · [06:57]</span> ^q3

> <span class="qz">你最好确保 LLM 完全不与那些字段交互，然后在幕后对它进行约束。</span>  
> *You're better off making sure that the LLM doesn't interact with those fields at all and then just constraining it behind the scenes.*  
> <span class="qm">—— Peter · [14:23]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-09-talks-your-agents-lack-context-here-s-how-to-f|差距不再是智能，而是上下文：给智能体造一个「上下文引擎」]]<span class="pd-rz">同公司:Unblocked · 同概念:RAG、上下文引擎 (context engine)、智能体 (agent)</span>
- [[2026-08-27-talks-how-to-generate-mergeable-code-with-a-co|智能体为什么总是新员工？给它们造一个上下文引擎]]<span class="pd-rz">同公司:Unblocked · 同概念:上下文引擎 (context engine)、智能体 (agent)</span>
- [[2026-09-03-sed-moving-beyond-rag-with-precomputed-conte|把上下文当资产预编译：Pinecone Nexus 如何重做智能体检索]]<span class="pd-rz">同概念:LLM、RAG、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-09-14-lennys-the-ultimate-guide-to-aeo-ethan-smith|AEO实战指南：如何让产品出现在ChatGPT答案里]]<span class="pd-rz">同概念:LLM、RAG</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:LLM、智能体 (agent)</span>
- [[2026-08-12-beyondcoding-wes-bos-how-developers-stand-out-when-ai|当所有人都在用智能体写代码，你靠什么脱颖而出：与 Wes 聊开发者的当下]]<span class="pd-rz">同概念:LLM、智能体 (agent)</span>

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
