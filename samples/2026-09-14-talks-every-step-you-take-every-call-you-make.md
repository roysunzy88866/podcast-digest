---
title: 让智能体在生产环境活下来：Restate 的持久化执行之道
podcast: 精选演讲
date: 2026-09-17
source_url: undefined
duration: "20:31"
type: episode
cover: "#64748b"
description: Restate 演讲者讲解如何用开源框架 Restate 让 AI 智能体在生产环境中可靠运行：崩溃恢复、并发隔离、人工审批挂起与取消传播。
guests: ["[[Giselle van Dongen]]"]
companies: ["[[Restate]]"]
concepts: ["[[智能体]]", "[[持久化执行]]", "[[事件日志]]", "[[虚拟对象]]", "[[深度研究]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-14-talks-every-step-you-take-every-call-you-make#post","headline":"让智能体在生产环境活下来：Restate 的持久化执行之道","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-14-talks-every-step-you-take-every-call-you-make","mainEntityOfPage":"https://talk.solomind.cc/2026-09-14-talks-every-step-you-take-every-call-you-make","description":"Restate 演讲者讲解如何用开源框架 Restate 让 AI 智能体在生产环境中可靠运行：崩溃恢复、并发隔离、人工审批挂起与取消传播。","datePublished":"2026-09-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Giselle van Dongen"},{"@type":"Organization","name":"Restate"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"持久化执行 (durable execution)"},{"@type":"Thing","name":"事件日志 (journal)"},{"@type":"Thing","name":"虚拟对象 (virtual object)"},{"@type":"Thing","name":"深度研究 (deep research)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"让智能体在生产环境活下来：Restate 的持久化执行之道","item":"https://talk.solomind.cc/2026-09-14-talks-every-step-you-take-every-call-you-make"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>让智能体在生产环境活下来：Restate 的持久化执行之道</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 让智能体在生产环境活下来：Restate 的持久化执行之道

<div class="pd-byl"><b>Giselle van Dongen</b> · 2026-09-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-14-talks-every-step-you-take-every-call-you-make.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">现在,第三波会越来越走向持久化和异步的实体,也就是智能体成为我们基础设施中长期运行的进程,可以访问工具、组织中其他的智能体以及上下文。</div><div class="a">— Giselle van Dongen <button class="pd-ts" data-t="01:00" data-who="Giselle van Dongen" data-en="Now, the third wave will be going more and more towards persistent and asynchronous entities, so agents being long-running processes in our infrastructure with access to tools and other agents around the organization and context." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Giselle van Dongen]]
>
> **公司** [[Restate]]
>
> **概念** [[智能体]] · [[持久化执行]] · [[事件日志]] · [[虚拟对象]] · [[深度研究]]

这一集是一段技术演讲,主题是怎么在生产环境里**可靠地运行 AI [[智能体|智能体]]**——不讲智能体本身怎么写,专讲它底下的基础设施层。演讲者是开源框架 [[Restate|Restate]] 的人(本集没有给出姓名),这个框架的理念来自分布式流处理引擎 Apache Flink,也来自几位前 Meta 事件基础设施的架构师。

演讲开头引用了 Andrej Carpathy 对人机交互三波演进的描述,作为整场的立论基础:第一波,LLM 像个网站,你问一句它答一句;第二波,变成智能体,是个装在电脑上的应用,拿着一些工具在人的交互下干活;第三波,则越来越走向**持久化和异步的实体**——智能体成了基础设施里长期运行的进程,能访问工具、组织里的其他智能体和上下文。演讲者的推论是:用例从单个智能体演进成连接组织各处的智能体平台,基础设施层也必须跟着演进。

## 现有工具缺的那一层

目前市面上的智能体 SDK 和记忆方案,做 POC、快速上手确实很酷,但它们帮不了你**连接组织内分布式的各个部分**。真要做复杂的智能体系统,你得自己部署额外的基础设施,写重试逻辑、恢复逻辑——这些做对相当复杂,却是运行长期运行、有状态、分布式进程的必需品。Restate 就是来填这一层的。

## Restate 是什么:四个组成部分

演讲者把它定位成一个灵活、持久的后端地基——不专为智能体设计,但智能体本来就是一类后端,所以照样适用。它管四件事:

1. **单次运行的韧性**(业界叫「[[持久化执行|持久化执行]]」,即把每一步都记下来,进程崩溃后能从失败点精确续跑):一个智能体跑了一周然后崩了,你要的是把它从失败那一点拉起来继续,而不是从头再来。
2. **高并发会话**:同时跑数千个智能体会话,保证状态一致、互不干扰。
3. **通信**:智能体之间、智能体与 MCP 服务器及其他工具之间。
4. **控制**:智能体做了不该做的事或卡住了,能真正取消或终止。

架构上,Restate 是一个跑在你智能体服务前面的独立服务器,有点像消息代理或代理。请求来了它推给你的服务,之后两者之间保持一条开放连接——这条连接就是智能体的「生命线」:智能体干活时不断把事件发给 Restate,形成一份[[事件日志|事件日志]](journal),故障后就靠这份日志恢复进程。一句话概括:它把你应用里的一个普通函数,变成一个长期运行、持久化、有状态的东西,而不用你自己去写那些复杂 plumbing。

## 现场 Demo:一个接 Slack 的深度研究智能体

整场演讲主体是一个演示:给全公司员工用的 Slack 研究智能体。在 Slack 里问一句「AI 有什么新动态」,底层就走经典的[[深度研究|深度研究工作流]]——一个规划器智能体先列研究子题,你按 Approve 后解锁,再并行启动一组子研究智能体,最后写作智能体出报告。

Restate 的 UI 像个「智能体驾驶舱」,能看到所有已注册智能体和正在发生的执行,左边的 journal 就是发给 Restate 服务器的实时事件流。演讲者还故意注入了工具错误:子智能体做网页搜索时 API 挂了,你可以看到它如何被自动重试并最终成功——**不是从头开始,而是用 journal 恢复进度**。

代码层面也很轻:你在 Restate 里写应用就是写 HTTP handler,把普通步骤(比如一次 LLM 调用)用 `restate.run` 包起来,它就成了持久化步骤——哪怕两小时或两个月后在某处失败,也会恢复到恰好那个点。

持久化执行还有个妙用:**人工审批**。审批可能要等几周甚至一个月,进程得能扛过这段时间的重启和重新部署。做法是创建一个存在 journal 里的持久 promise,相当于一个挂起点;等待期间进程真的挂起,如果跑在无服务器环境上,这段时间**不占用函数执行时间**;人一点 Slack 按钮,响应进来,进程从上次中断处继续。

## 比工作流更进一步:有状态的持久实体

工作流只是一组被持久化执行的步骤,但智能体更像一个存活很久、有记忆、能交互的有状态实体。Restate 用 **virtual object** 来建模:它像一个有状态的 actor,有唯一 ID(比如 session ID),有一份针对该会话隔离的键值状态(比如消息历史),还有一组能为这个会话执行持久化函数的 handler。

高并发下有个关键保证:两条消息同时进来,不能让两个智能体互相覆盖对方的会话状态——virtual object 保证**同一时间只有一个执行在跑**,第二个排队在后面。

更有意思的是对「运行中进程」的交互:每个执行有唯一标识符,其他进程可以用它连接过去——取输出、取消它,或者**给一个正在运行的智能体循环发信号、注入状态**。Demo 里这么用:用户在研究进行中补充一句「专注于前沿模型」,一个 LLM 会先判断这条新输入跟当前循环相不相关——相关就作为信号注入进行中的研究,不相关就取消当前执行、带着新信息重新开始。发一句「忘掉那个,研究 AI 政策」,协调器就取消当前运行、开新主题。

这里的取消是一个**沿调用链向下传播的信号**:如果主智能体已经启动了子智能体,子智能体先被取消,然后是控制器本身,整个栈被回退,等于给了智能体回滚的能力。

## 半路改需求?这正是它擅长的

最后一部分 Demo 展示可扩展性:设想上线几个月后,新的模型供应商推出一款又好又贵的模型(演讲里戏称 Fabulous),研究智能体成本开始爆炸。这种项目半路冒出来的问题,通常逼你部署一堆额外基础设施。

Restate 不把你钉死在某种写法上:原来内联的 LLM 调用可以提取成独立 handler,先做策略检查再调用;其他智能体改用 Restate 的分布式通信原语去调这个 LLM 网关。这套服务间的通信还带流控,比如规定某部门对 LLM 网关同时最多 300 次调用。底层的韧性也覆盖更高级的故障类型,比如网络分区和僵尸故障。

## 内部架构与落地形态

实现上,Restate 是一个事件驱动的分布式日志:盒子一边是客户端、一边是服务,内部是一个持久化所有 journal 事件的日志加一个事件循环——事件来了,要么写入内嵌状态存储,要么设定时器,要么向另一个智能体发请求,由此构成任何应用的持久化地基。分布式日志的设计深受 Meta 核心事件基础设施层的启发,算是它之上的一次迭代,由几位当年的架构师做成了开源通用方案。

两个值得注意的设计点:

- **推送而非拉取**:大多数工作流编排器从服务器拉取新任务,Restate 是把调用推送过去。好处是延迟低得多——一个 10 步的工作流,p99 延迟可以做到约 45 毫秒,所以你能在应用外围的普通函数上也用上工作流级保证;推送模式也天然契合无服务器(发请求唤醒函数)。
- **好运维**:状态存储和 UI 都包含在内,单个二进制文件;要高可用就多起几个实例,快照到对象存储。

它有六个 SDK,集成市面大多数流行的智能体框架;也可以直接用任何 LLM SDK,把步骤包进 SDK 构造里实现自定义智能体。开源可自托管,另有 BYOC(部署在你自己的云账户里,数据不出账户)和托管云两种服务。

## 本集带走

- **智能体的第三波形态是长期运行的持久进程**,所以基础设施必须提供持久化执行:每步记进 journal,崩溃后从失败点精确续跑,绝不从头重来。
- **把普通函数变持久的成本很低**:写 HTTP handler,用 `restate.run` 包一下关键步骤,就能获得「两小时或两个月后失败也能恢复到那个点」的保证。
- **人工审批这类长等待要靠「挂起」而不是「占着」**:持久 promise 当挂起点,等待期进程不占执行时间,响应来了自动续跑。
- **要跟运行中的智能体交互,给它唯一标识符**:可取输出、可取消、可注入信号;新输入先让 LLM 判断相关性,相关就注入、不相关就取消重开;取消会沿调用链回退整栈。
- **并发会话要串行化**:virtual object 保证同一时间每个会话只有一个执行,防止状态互相覆盖。
- **架构选型看延迟**:推送模型比拉取式编排器延迟低一个量级(10 步工作流 p99 约 45 毫秒),还能顺带做好无服务器友好和流控。

<div class="pd-sec pd-sec-q">全部金句 <span>1 条</span></div>

> <span class="qz">现在,第三波会越来越走向持久化和异步的实体,也就是智能体成为我们基础设施中长期运行的进程,可以访问工具、组织中其他的智能体以及上下文。</span>  
> *Now, the third wave will be going more and more towards persistent and asynchronous entities, so agents being long-running processes in our infrastructure with access to tools and other agents around the organization and context.*  
> <span class="qm">—— Giselle van Dongen · [01:00]</span> ^q1

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-26-talks-the-building-blocks-of-gtm-orchestration|RAMP 的 GTM 编排实验：一句话意图，全渠道自动执行]]<span class="pd-rz">同概念:持久化执行 (durable execution)、智能体 (agent)、MCP</span>
- [[2025-06-03-talks-pioneering-agentic-applications-with-dec|三位 AI 智能体公司 CEO 圆桌：从 Copilot 到智能体，还要几年？]]<span class="pd-rz">同概念:智能体 (agent)、MCP</span>
- [[2025-10-26-lennys-how-block-is-becoming-the-most-ai-native|Block CTO：代码质量与产品成功毫无关系，打造 AI 原生公司靠的是组织重组]]<span class="pd-rz">同概念:智能体 (agent)、MCP</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同概念:智能体 (agent)、MCP</span>
- [[2026-08-15-twentyvc-20growth-how-to-build-a-100m-growth-engi|SaaS增长该抄电商作业：付费广告立刻开打]]<span class="pd-rz">同公司:Meta · 同概念:智能体 (agent)</span>
- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同概念:智能体 (agent)</span>

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
