---
title: 模型是租的，harness 才是你的：拆解智能体的七层框架
podcast: 精选演讲
date: 2026-09-21
source_url: undefined
duration: "60:26"
type: episode
cover: "#64748b"
description: Oracle 开发者布道师主讲的工作坊，从零拆解 AI 智能体线束（agent harness）的七层结构：记忆、语义层、智能体循环与上下文工程。
guests: ["[[Oracle]]", "[[Ignacio Martinez]]"]
concepts: ["[[智能体控制框架]]", "[[智能体]]", "[[智能体记忆]]", "[[上下文窗口]]", "[[上下文腐烂]]", "[[智能体循环]]", "[[语义层]]", "[[持续学习]]", "[[MCP]]", "[[RAG]]", "[[HNSW]]", "[[worktree]]", "[[工具箱模式]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-18-talks-total-recall-agent-memory-and-harness-en#post","headline":"模型是租的，harness 才是你的：拆解智能体的七层框架","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-18-talks-total-recall-agent-memory-and-harness-en","mainEntityOfPage":"https://talk.solomind.cc/2026-09-18-talks-total-recall-agent-memory-and-harness-en","description":"Oracle 开发者布道师主讲的工作坊，从零拆解 AI 智能体线束（agent harness）的七层结构：记忆、语义层、智能体循环与上下文工程。","datePublished":"2026-09-21","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Oracle"},{"@type":"Person","name":"Ignacio Martinez"},{"@type":"Thing","name":"智能体控制框架 (agent harness)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体记忆 (agent memory)"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"上下文腐烂 (context rot)"},{"@type":"Thing","name":"智能体循环 (agent loop)"},{"@type":"Thing","name":"语义层 (semantic layer)"},{"@type":"Thing","name":"持续学习 (continued learning)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"HNSW"},{"@type":"Thing","name":"worktree"},{"@type":"Thing","name":"工具箱模式 (toolbox pattern)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"模型是租的，harness 才是你的：拆解智能体的七层框架","item":"https://talk.solomind.cc/2026-09-18-talks-total-recall-agent-memory-and-harness-en"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>模型是租的，harness 才是你的：拆解智能体的七层框架</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 模型是租的，harness 才是你的：拆解智能体的七层框架

<div class="pd-byl"><b>Ignacio Martinez</b> · Oracle 开发者布道师 · 2026-09-21</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-18-talks-total-recall-agent-memory-and-harness-en.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">很多人不断在谈论模型，但问题是，像语言模型这样的模型，它们是推理中被冻结的部分，对吧？</div><div class="a">— Ignacio Martinez <button class="pd-ts" data-t="03:56" data-who="Ignacio Martinez" data-en="Lots of people are talking about models constantly, but the thing is that models, like language models, they are the frozen part of the reasoning, right?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Oracle]] · [[Ignacio Martinez]]
>
> **概念** [[智能体控制框架]] · [[智能体]] · [[智能体记忆]] · [[上下文窗口]] · [[上下文腐烂]] · [[智能体循环]] · [[语义层]] · [[持续学习]] · [[MCP]] · [[RAG]] · [[HNSW]] · [[worktree]] · [[工具箱模式]]

这一集是一场现场工作坊：主讲人是一位在 [[Oracle|Oracle]] 工作了七年、其中四年做开发者布道师的工程师，他曾与 Andrew Ang 合作上线过一门关于[[智能体记忆|智能体记忆]]的课程。他要带大家动手从零构建一个 agent harness（[[智能体|智能体]]线束，即围绕大模型搭建的整套工程框架）。

他的开场论点很锋利：所有人都在谈论模型，但语言模型其实是「推理中被冻结的部分」——权重不会变，我们只能接受给定的东西。真正的工程空间在模型之外。

他把智能体定义为「模型 + harness」：模型负责推理，其余一切都是 harness。模型是租来的、被补贴的、不可控的；harness 的目标，就是把大语言模型的非确定性（同样的输入每次产出不同的输出）转化为可靠、可重复的结果。harness 建立在可互换的模型之上——只需要一个通用接口，比如 OpenAI 协议或 Anthropic API 规范 [03:56–04:17 主讲人]。

## 智能体栈与四类应用形态

每个 AI 智能体都建立在五层之上：应用（产品界面）、数据（记忆、知识、检索、编码、搜索）、模型、基础设施（编排）、计算（云、GPU、数据库引擎）。除了数据层，其他四层都在日益商品化——所以我们对数据层的控制力最强，而 harness 恰恰就生活在数据层 [06:30–07:48 主讲人]。

如今的 AI 应用有四种形态：被动的 LLM 聊天机器人、半被动的 [[RAG|RAG]] 应用（检索增强生成：先从资料库里检索相关内容、再让模型据此作答）、以及主动的形态——LLM 驱动的工作流（提供自动化）加 AI 智能体（提供自主性）。Claude Code、Codex 这类产品都是「自动化 + 自主性」的组合：自动化提供可靠性，自主性提供灵活性 [09:20–12:38 主讲人]。

## 文件还是数据库？混合方案

harness 的第一层是存储：记忆到底放哪。从一月起业界一直在争「文件派 vs 数据库派」，他的答案是：两者都用。

文件符合模型的直觉、易于创建和追加、遵循 POSIX 语义、跨操作系统兼容；但它没有事务一致性——当你同时跑 8、16、32 个智能体时，文件无法被同时插入和修改，如今的变通办法是 [[worktree|worktree]]（各智能体在独立工作树里干活，完成后合并回 main）。文件还不支持混合搜索、没有备份——这些是数据库在 35、40 年前就解决了的问题 [16:34–19:30 主讲人]。

他的建议：短期记忆放文件（比如编程智能体的待办清单），需要晋升为长期记忆的东西（比如用户偏好）进入数据库。他推介 Oracle DBFS（数据库文件系统），可以拿到带 ACID 事务一致性的文件、向量搜索、高可用等 [20:40–21:30 主讲人]。

## 上下文窗口救不了你：context rot

有人主张干脆上 1500 万 token 的[[上下文窗口|上下文窗口]]，不用搞记忆。他的反驳：上下文窗口本身就是一种短期记忆，而且存在「[[上下文腐烂|上下文腐化]]」——你往窗口里放的东西越多，每一样东西分到的注意力就越少。

因为注意力矩阵本质上是窗口里每个 token 对其他所有 token 的引用，行数列数都会随窗口增长，呈二次方扩展。就像人聊天：前 30 分钟你注意力很高，聊八个小时你就想揍对方了。所以上下文窗口要尽可能小 [28:24–30:29 主讲人]。

## 语义层：企业没说出口的部落知识

记忆之上是[[语义层|语义层]]。他借用了 Umwelt（环境感知域，由 Jakob von Wekskul 提出，指每个生物透过自身透镜感知现实）这个类比：智能体没有人类感官，但它也有一个语义透镜——你训练它的东西加上你给它的上下文。

语义层捕捉的就是组织里那些「你和同事之间不用说出口」的知识：数据怎么建模的、查询怎么执行、元数据是什么。新同事进来你得从头解释，而语义层就是把这些隐性知识显式化 [34:19–36:39 主讲人]。

> 【背景】Jakob von Wekskul 一般拼作 Jakob von Uexküll，是生物学家，「Umwelt」（环境感知域）概念即由他提出。

## 极简智能体循环与工具检索

[[智能体循环|智能体循环]]（agent loop）是模型的驱动器，把模型变成智能体：观察 → 推理 → 行动，不停循环，且必须抗故障、绝不退出循环 [36:39–37:31 主讲人]。

上下文工程的关键是：工具和技能只在真正被需要时才检索、才放进上下文窗口，每次迭代都检查、不合适就暂时拿掉。有听众问「组织里有几千个工具怎么办」：答案是用 [[HNSW|HNSW]] 索引（一种用图结构组织的向量索引），数据库里建、文件里建不了，查询 2000 个工具和查询 10 个一样简单；工具描述太相似导致检索混淆时，可以用 LLM 生成增强版描述来提高可区分性 [52:05–54:59 主讲人]。

智能体跑飞了怎么办？他设一个「滞后变量」承载 harness 对模型的耐心：对于他用的工作模型，放弃前最多 8 到 12 次工具调用是合适的值 [55:45–56:39 主讲人]。

## 持续学习：不改权重也能让智能体变好

模型权重冻结，但行为可以被改变。三种[[持续学习|持续学习]]技术中，他聚焦最容易、最便宜的：上下文和 token 空间。

核心机制是「技能晋升」：你花一整天打磨出的成功工作流，可以被检索、存储进记忆，再通过蒸馏过程生成一个比原来更好的 skill.md——弃用旧版、换上新版。这样技能会随时间越来越贴合你自己的语气、工作方式和偏好 [38:45–41:02 主讲人]。

## 本集带走

- **智能体 = 模型 + harness**：模型是冻结的、租来的、可互换的（只要有通用 API 接口）；你真正的工程空间和护城河在 harness。
- **记忆混合存储**：短期记忆放文件，晋升为长期记忆的内容（用户偏好、成功工作流）进数据库，两边的优点都拿到；多智能体并发改文件靠 worktree 变通。
- **上下文窗口别贪大**：注意力随窗口内容二次方摊薄（context rot），窗口越小任务相关性越高；工具/技能按需检索、按需进出窗口。
- **给 harness 一个耐心变量**：限制模型放弃前的最大工具调用次数（比如 8-12 次），防止幻觉循环烧钱；难题路由给前沿大模型、简单题给小模型。
- **技能晋升 = 最实惠的持续学习**：把成功工作流蒸馏成更好的 skill.md 并替换旧版，智能体不改权重也能越用越贴合你的偏好。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">很多人不断在谈论模型，但问题是，像语言模型这样的模型，它们是推理中被冻结的部分，对吧？</span>  
> *Lots of people are talking about models constantly, but the thing is that models, like language models, they are the frozen part of the reasoning, right?*  
> <span class="qm">—— Ignacio Martinez · [03:56]</span> ^q1

> <span class="qz">所以 harness 工程的目标是一次又一次地创造可靠且可预测的输出，而推理模型是非常非确定性的。</span>  
> *So the goal of harness engineering is to create reliable and predictable outputs over and over, whereas a reasoning model is very non-deterministic.*  
> <span class="qm">—— Ignacio Martinez · [11:26]</span> ^q2

> <span class="qz">模型的权重永远不会改变，除非你有数百万美元，或者大量时间，或者 GPU。</span>  
> *A model and the weights of the model will never change unless you have millions of dollars or a lot of time or GPUs.*  
> <span class="qm">—— Ignacio Martinez · [16:10]</span> ^q3

> <span class="qz">而这些是数据库在 35、40 年前就解决了的问题，人们却差不多忘了这一点。</span>  
> *And these are things that the database fixed 35, 40 years ago, and people have kind of forgotten about that.*  
> <span class="qm">—— Ignacio Martinez · [19:23]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-03-sed-moving-beyond-rag-with-precomputed-conte|把上下文当资产预编译：Pinecone Nexus 如何重做智能体检索]]<span class="pd-rz">同概念:RAG、智能体 (agent)、语义层 (semantic layer)、MCP</span>
- [[2026-09-14-talks-no-memory-no-harness-why-the-database-is|AI 让个人更快，却没让团队更快：智能体记忆才是真瓶颈]]<span class="pd-rz">同嘉宾:Oracle · 同公司:Codex · 同概念:上下文窗口 (context window)、智能体 (agent)</span>
- [[2026-07-17-talks-every-company-should-have-a-brain-garry|用 Markdown 组建一支军队:Y Combinator 掌门人的 AI 原生公司蓝图]]<span class="pd-rz">同概念:RAG、上下文窗口 (context window)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Codex · 同概念:MCP、智能体 (agent)</span>
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|别管金句，去捣鼓东西：Notion 产品负责人谈 AI 时代的产品与品味]]<span class="pd-rz">同概念:智能体 (agent)、智能体循环 (agent loop)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同嘉宾:Oracle · 同公司:Codex · 同概念:智能体 (agent)、MCP</span>

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
