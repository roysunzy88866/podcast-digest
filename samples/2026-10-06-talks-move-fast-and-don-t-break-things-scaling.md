---
title: 快速迭代，但别把数据库搞挂
podcast: 精选演讲
date: 2026-10-10
source_url: undefined
duration: "18:56"
type: episode
cover: "#64748b"
description: PlanetScale 的 Ben 讲解 AI 时代如何一边快速上线产品，一边让数据库在用户暴涨时不崩。
host: "[[Ben]]"
companies: ["[[PlanetScale]]"]
concepts: ["[[智能体]]", "[[分片]]", "[[背压]]", "[[隔离]]", "[[冗余]]", "[[解耦]]", "[[开发者体验]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-06-talks-move-fast-and-don-t-break-things-scaling#post","headline":"快速迭代，但别把数据库搞挂","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-06-talks-move-fast-and-don-t-break-things-scaling","mainEntityOfPage":"https://talk.solomind.cc/2026-10-06-talks-move-fast-and-don-t-break-things-scaling","description":"PlanetScale 的 Ben 讲解 AI 时代如何一边快速上线产品，一边让数据库在用户暴涨时不崩。","datePublished":"2026-10-10","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Ben"},{"@type":"Organization","name":"PlanetScale"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"分片 (sharding)"},{"@type":"Thing","name":"背压 (backpressure)"},{"@type":"Thing","name":"隔离 (isolation)"},{"@type":"Thing","name":"冗余 (redundancy)"},{"@type":"Thing","name":"解耦 (decoupling)"},{"@type":"Thing","name":"开发者体验 (developer experience)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"快速迭代，但别把数据库搞挂","item":"https://talk.solomind.cc/2026-10-06-talks-move-fast-and-don-t-break-things-scaling"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>快速迭代，但别把数据库搞挂</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 快速迭代，但别把数据库搞挂

<div class="pd-byl"><b>Ben</b> · PlanetScale · 2026-10-10</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-06-talks-move-fast-and-don-t-break-things-scaling.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但在大规模下，当你有数千台服务器时，一年一两次的故障就变成了每周或每月一次的故障，所以你需要有相应的系统来很好地应对这种情况。</div><div class="a">— Ben <button class="pd-ts" data-t="05:41" data-who="Ben" data-en="But at a large scale, when you have thousands of servers, a once or twice a year failure becomes a weekly or monthly failure, and so you need to have systems in place to deal with this very well." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Ben]]
>
> **公司** [[PlanetScale]]
>
> **概念** [[智能体]] · [[分片]] · [[背压]] · [[隔离]] · [[冗余]] · [[解耦]] · [[开发者体验]]

“快速行动，打破常规”，这句话你可能听过。它出自早期 Facebook 的工程文化，意思是：尽快发布产品，别让数据库、基础设施拖后腿。

那是 20 年前。现在 AI [[智能体|智能体]]已经开始替人写代码、做部署，这件事比以往任何时候都更成立。

演讲者 [[Ben|Ben]] 认为，两个目标其实可以兼得：跑得快，但别把东西搞坏 <button class="pd-ts" data-t="00:49" data-who="嘉宾" data-en="You know databases going down or breaking certain features because the priority is there's so much value in shipping fast and this was 20 years ago right before we had AI agents writing code for us and shipping things and deploying things on our behalf." aria-label="回原文"></button>。

Ben 来自 [[PlanetScale|PlanetScale]]，一家做数据库的公司，客户包括 Cursor 这类正在疯狂扩张的 AI 公司。

过去半年到两年里，很多公司的日活用户翻倍、翻十倍、翻百倍，背后很大一部分是 AI 智能体带来的流量，基础设施经常跟不上。

他的演讲分三部分：怎么构建不出故障的系统、怎么把它扩展到百万用户、以及怎么让 AI 智能体参与其中。

## 为什么隔离是第一条原则？

跑基础设施时，要保证一个部件坏掉不会拖垮整个系统。数据库本身——如果用的是靠谱的平台——反而不太容易挂。

更容易出事的是那些你频繁改动的部分：控制面、可观测性管道、应用、MCP 服务。

设计得好，就算一次糟糕的部署把控制面搞挂，数据库照常服务，别的什么都不受影响 <button class="pd-ts" data-t="04:19" data-who="嘉宾" data-en="But these other things you're shipping and deploying to more frequently so are more likely to fail. So we want to make sure that we've designed things where if I deploy a bad ship to the control plane and take it down, nothing else is impacted and can still access the database and anything in my data plane." aria-label="回原文"></button>。

## 服务器多了，故障就从几年一次变每周一次

第二条原则是[[冗余|冗余]]。应用服务器是无状态的，用自动扩缩容很容易做到冗余。

但数据库必须可靠地存数据，一个字节都不能丢。

常见做法是设一个主节点承接大部分流量，同时在不同的数据中心或可用区里放若干个副本节点随时待命。Ben 提醒：

小规模时，100 个用户加一台数据库服务器，可能几年才遇到一次故障；

**规模大了，几千台服务器，故障就变成每周、每月的事，必须有应对机制** <button class="pd-ts" data-t="05:41" data-who="嘉宾" data-en="And on a small scale, when you've got an app that has 100 users and you have one database server, you might only experience a failure once every couple of years." aria-label="回原文"></button>。

## 数据涨到 10TB 以上，就得分片

单个数据库节点在 10GB 数据时工作得很好，到 10TB、100TB 就不行了。

办法是[[分片|分片]]：**把数据和查询分散到很多台服务器上，中间放一个代理，把请求智能地分发出去**。PlanetScale 用 Vitesse 做 MySQL 的分片，用 Niki 做 Postgres 的分片 <button class="pd-ts" data-t="07:44" data-who="嘉宾" data-en="And this is exactly what we do a lot of for some large customers at PlanetScale. We do sharding through Vitesse for MySQL and Niki for Postgres. And so this is a very fundamental way of doing sharding." aria-label="回原文"></button>。

而且分片不是单独使用的——每个分片内部还要有自己的主节点和副本，某个服务器坏了，这个分片能自我修复，很快恢复上线。

## 过载时，宁可拒绝部分请求，也别整个崩掉

MySQL、Postgres、SQLite 这些流行数据库，一遇到查询太多、CPU 或内存耗尽，很多时候直接就崩了，所有用户一起遭殃。

反压的意思是：**系统检测到资源超过阈值时，主动拒绝一部分连接和请求**，让存量用户继续正常使用，其他流量优雅降级。

不理想，但比整个应用下线好得多 <button class="pd-ts" data-t="09:12" data-who="嘉宾" data-en="What backpressure is, is it's designing a system to be able to push back and say, when I detect that I'm above a certain threshold of resources, I can actually say," aria-label="回原文"></button>。

## 别把所有东西塞进一个数据库

有人主张把交易数据库、分析、队列、缓存全合在一起，图方便。但这破坏了故障[[隔离|隔离]]——一个服务挂，全都挂。

而且各部分会抢资源：队列任务突然暴涨时，你只想扩队列，不想被迫扩整个系统。[[解耦|解耦]]之后，每个部分可以独立伸缩 <button class="pd-ts" data-t="10:14" data-who="嘉宾" data-en="Combined with your queuing and your job system, your caching, there is convenience, and some technologies try to do this where we put this all in one, but that does, one, add a lot of complexity, but it also breaks some of the fundamental principles from earlier, like failure isolation, right?" aria-label="回原文"></button>。

## AI 智能体能不能碰数据库？

现在用 AI 写代码已是常态，有人甚至一行代码都不写了，只是引导智能体。

但让智能体去改数据库、改配置、做分片，风险完全不同——搞砸了不像代码那样点一下回滚就行，可能整个应用瘫痪，每个用户都看得见 <button class="pd-ts" data-t="12:04" data-who="嘉宾" data-en="But it is quite different to say, I'm going to now also give my agents the ability to deploy changes to the database, or make changes to how things are configured there, or to shard my database." aria-label="回原文"></button>。

Ben 的答案是：**给智能体简单、安全的接口**。比如 Vitesse 的分片配置叫 vschema，就是一个 JSON 文件，指定按哪一列分片、怎么分。

AI 智能体最擅长的就是处理 JSON——你可以直接说：我的数据库撑不住了，这是我的表结构，帮我设计一个分片方案 <button class="pd-ts" data-t="13:21" data-who="嘉宾" data-en="And the great thing is, as we all know, AI agents are excellent at working with things like text files and JSON files. So you can give your agent and say, hey, I'm struggling with scalability of my database." aria-label="回原文"></button>。

## 数据库也能像代码一样分支、合并、回滚

开发者熟悉 Git 流程：开分支、改代码、合并、部署。PlanetScale 把同样的体验搬到了数据库上：

给表结构开分支，在隔离环境里加表、加列、加索引，然后通过部署请求合并回生产环境，全程不停机。

更关键的是，部署后发现有问题，一键回滚到旧状态，不丢数据 <button class="pd-ts" data-t="16:47" data-who="嘉宾" data-en="So what we give you, powered by that same Vitesse earlier, is the ability to branch your database schema, make changes to that schema in an isolated environment, and then merge that back into production with what we call a deploy request, all with no downtime." aria-label="回原文"></button>。

这套本是为人类设计的，但现在通过接口和命令行，智能体也能自动化整个流程——它改代码、开分支、发请求做代码审查时，可以有一个同步变动的数据库状态。

可以全自动，也可以半自动，很多人仍然让人类审查每一步变更，Ben 认为这是好事 <button class="pd-ts" data-t="17:22" data-who="嘉宾" data-en="And that can either be fully automated, it can be semi-automated. Obviously, many of us are working in a human-in-the-loop fashion. Where humans are still reviewing all of these changes that AI agents are making, which is a good thing." aria-label="回原文"></button>。

## 专为人类做好用的工具，恰好也适合 AI

结尾 Ben 说，他说的[[开发者体验|开发者体验]]不是深色模式或快捷键，而是：

如果你负责公司的数据库，工具有没有给足你不出错、安全部署、提升性能的能力。

PlanetScale 为此构建了很多年，结果发现，**这些为人类打磨的核心体验，恰好也是让 AI 安全可靠地操作数据库的最好基础** <button class="pd-ts" data-t="18:06" data-who="嘉宾" data-en="And when I say developer experience, I don't just mean light and dark mode switches and good keyboard shortcuts and all of this, but I mean the actual experience of, hey, if you're a developer that's responsible for your company's database or responsible for some piece of infrastructure, do we give you the tools that you need to not mess up, to do deploys safely?" aria-label="回原文"></button>。

## 本集带走

- 隔离、冗余、反压、解耦，是不管用户多少都适用的可靠性原则
- 规模一大，故障频率随之上升：几千台服务器时，故障变成每周的事
- 分片是扩展海量数据最常见也最高效的方式，每个分片内部还要有冗余
- 让 AI 操作数据库的关键是给它安全接口：JSON 配置、类 Git 的分支合并、一键回滚
- 为人类做好的开发者体验，天然就是 AI 智能体友好的基础设施

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">但在大规模下，当你有数千台服务器时，一年一两次的故障就变成了每周或每月一次的故障，所以你需要有相应的系统来很好地应对这种情况。</span>  
> *But at a large scale, when you have thousands of servers, a once or twice a year failure becomes a weekly or monthly failure, and so you need to have systems in place to deal with this very well.*  
> <span class="qm">—— Ben · [05:41]</span> ^q1

> <span class="qz">在某些情况下，人们甚至不再亲手写任何一行代码了。AI 实际上在写你的所有代码，审查你的所有代码，而你只是在引导这些智能体去做这些事。</span>  
> *In some cases, people are not even writing any lines of code anymore. AI is actually writing all of your code, reviewing all of your code, and you're just sort of guiding these agents to doing that.*  
> <span class="qm">—— Ben · [11:44]</span> ^q2

> <span class="qz">所以这是那种——底层现实中是非常复杂的基础设施在扩展你的系统——但只要你为它提供合适的接口，比如简单的配置文件，这些能力对任何想要扩展的公司来说都变得容易接触得多。</span>  
> *So this is one of those things, very complex infrastructure in reality under the hood that is scaling your systems, but you provide the right interfaces for it, like simple configuration files, and those things become much more accessible to any company trying to scale.*  
> <span class="qm">—— Ben · [13:55]</span> ^q3

> <span class="qz">我记得几个月前 GitHub 发过一条推文，大概说他们的流量比原本就已经极高的负载又涨了两三倍甚至四倍，而这几乎全部归因于 AI 智能体，对吧？</span>  
> *I think there was a tweet a couple of months ago from GitHub that basically said like their traffic had like two or three or four x from what already was an extremely high load, and pretty much all of that was attributed to AI agents, right?*  
> <span class="qm">—— Ben · [14:22]</span> ^q4

> <span class="qz">而且结果某种程度上证明，当你真正专注于开发者体验的核心时，你最终得到的东西同时也是非常好的原语，能让 AI 安全、可靠地与数据库协作并帮助它扩展。</span>  
> *And it does kind of turn out that when you really focus on that core of the developer experience, what you actually end up with is also very good primitives for AI being able to work with a database safely and reliably and helping it scale.*  
> <span class="qm">—— Ben · [18:12]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo|Datadog 4000 人AI赋能实战：删掉上下文反而更好]]<span class="pd-rz">同公司:Cursor · 同概念:智能体 (agent)</span>
- [[2026-08-09-talks-multiplayer-agentic-engineering-arjun-si|让非工程师也能下指令：Superconductor 的多人智能体协作法]]<span class="pd-rz">同公司:Cursor · 同概念:智能体 (agent)</span>
- [[2026-08-18-lennys-i-tested-grok-bot-grok-46-and-cursor|GrokBot、Origin 与 Grok 4.6 实测]]<span class="pd-rz">同公司:Cursor · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-30-talks-the-state-of-ai-in-software-development|20万工程师的真实数据：AI 到底给开发者提速了多少]]<span class="pd-rz">同概念:开发者体验 (developer experience)、智能体 (agent)</span>
- [[2025-07-27-lennys-pricing-and-scaling-your-ai-product-madh|AI 定价的黄金象限：别把 20% 的价值白送]]<span class="pd-rz">同公司:Cursor · 同概念:智能体 (agent)</span>
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同公司:Cursor · 同概念:智能体 (agent)</span>

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
