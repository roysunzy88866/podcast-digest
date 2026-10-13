---
title: "用一个智能体去修智能体:LangChain 如何打造 Engine v2"
podcast: 精选演讲
date: 2026-10-12
source_url: undefined
duration: "20:12"
type: episode
cover: "#64748b"
description: LangChain 产品经理 Ben 讲解他们如何评估、迭代自家的智能体工程工具 Engine，以及 v2 的新能力。
host: "[[Ben]]"
companies: ["[[LangChain]]", "[[LangSmith]]"]
concepts: ["[[Engine]]", "[[智能体]]", "[[trace]]", "[[评估]]", "[[基准测试]]", "[[红队测试]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-07-talks-building-engine-v2-how-langchain-approac#post","headline":"用一个智能体去修智能体:LangChain 如何打造 Engine v2","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-07-talks-building-engine-v2-how-langchain-approac","mainEntityOfPage":"https://talk.solomind.cc/2026-10-07-talks-building-engine-v2-how-langchain-approac","description":"LangChain 产品经理 Ben 讲解他们如何评估、迭代自家的智能体工程工具 Engine，以及 v2 的新能力。","datePublished":"2026-10-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Ben"},{"@type":"Organization","name":"LangChain"},{"@type":"Organization","name":"LangSmith"},{"@type":"Thing","name":"Engine"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"trace"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"基准测试 (benchmark)"},{"@type":"Thing","name":"红队测试 (red team)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"用一个智能体去修智能体:LangChain 如何打造 Engine v2","item":"https://talk.solomind.cc/2026-10-07-talks-building-engine-v2-how-langchain-approac"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>用一个智能体去修智能体:LangChain 如何打造 Engine v2</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 用一个智能体去修智能体:LangChain 如何打造 Engine v2

<div class="pd-byl"><b>Ben</b> · LangChain 产品经理 · 2026-10-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-07-talks-building-engine-v2-how-langchain-approac.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">从那以后，Engine 已经扫描了超过 7000 万条追踪记录，并为今天正在使用它的众多客户创建了超过 21000 个问题。</div><div class="a">— Ben <button class="pd-ts" data-t="01:31" data-who="Ben" data-en="And since then, Engine has scanned over 70 million traces and has created over 21,000 issues for the many customers that are using it today." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Ben]]
>
> **公司** [[LangChain]] · [[LangSmith]]
>
> **概念** [[Engine]] · [[智能体]] · [[trace]] · [[评估]] · [[基准测试]] · [[红队测试]]

做[[智能体|智能体]]（agent）的人都熟悉那套痛苦流程：翻看运行[[trace|轨迹]]找错误、归类问题、分析根因、写修复、写[[评估|评测]]。

[[LangChain|LangChain]] 把这整条流水线做成了一个产品叫 [[Engine|Engine]]——它自己去扫轨迹、发现问题、提出修复和测试用例。

今年 5 月发布后，它已经扫描了超过 7000 万条轨迹，创建了超过 21000 个问题 <button class="pd-ts" data-t="01:31" data-who="嘉宾" data-en="We launched it in May at our Interrupt in San Francisco. And since then, Engine has scanned over 70 million traces and has created over 21,000 issues for the many customers that are using it today." aria-label="回原文"></button>。这场演讲讲的是团队怎么把 Engine 从 v1 打磨成更快、更强、更便宜的 v2。

## 为什么给 Engine 做评测特别难？

Engine 本身就是个复杂智能体：

它要找出有问题的轨迹并聚类，要写人能读懂的问题描述，要对照源代码写修复，要生成测试数据，还要监控问题是否复发 <button class="pd-ts" data-t="02:30" data-who="嘉宾" data-en="And the reason that it's so hard for Engine is because of the many complex tasks that are handled by this agent. And so to run you through some of the tasks that are handled, Engine will identify these offending or problematic traces and cluster them together after identifying a root cause." aria-label="回原文"></button>。

这些任务彼此差别很大，混在一起测不出好坏。

团队的做法是给每个环节单独做[[基准测试|基准测试]]。

比如测找问题轨迹的能力，就造一批埋了已知问题的轨迹，让 Engine 在一堆干草里找针 <button class="pd-ts" data-t="03:46" data-who="嘉宾" data-en="And so in order for us to assess this adequately, the benchmark that we've generated is a set of traces with seeded problems within them. And so it's like finding a needle in a haystack of traces." aria-label="回原文"></button>。

测聚类归因则给它一批已知错误轨迹和已有问题列表，看它能不能正确配对或新建问题。

## 光靠基准测试不够，还得自己吃自己的狗粮

基准分数高不代表生产环境好用，所以 LangChain 在自家的一堆智能体上跑 Engine——包括做外呼、客户调研的市场智能体，和在 Slack 和 GitHub 里调用的编程智能体 <button class="pd-ts" data-t="05:14" data-who="嘉宾" data-en="We try our own products a lot. And we have many different agents that we build at LangChain, including go-to-market agents that handle a bunch of go-to-market-related tasks, like sending outbound, doing prospect research." aria-label="回原文"></button>。

Engine 找到的问题会发到 Slack，相关团队直接反馈这问题靠不靠谱。

更有意思的是，他们让 Engine 跑在 Engine 自己上面：

Engine 分析轨迹时也会产生轨迹，这些轨迹由另一个实例（他们叫它 meta-engine）来扫描，出问题同样发 Slack 通知 <button class="pd-ts" data-t="06:04" data-who="嘉宾" data-en="But maybe the most interesting of this dogfooding is that we actually run Engine on top of Engine. So as Engine investigates traces for our go-to-market agents and for our coding agents, it produces traces." aria-label="回原文"></button>。

这成了团队发现 Engine 改进机会的主要渠道之一。

## 小模型有时反而更好用

一个反直觉的经验：不是所有任务都需要最强的前沿模型。

**对于简单的笨任务，用更小、更便宜的模型不光省钱，效果有时反而更好** <button class="pd-ts" data-t="07:18" data-who="嘉宾" data-en="But I have also found that for specific tasks that we run Engine on, using these non-frontier models actually can be more effective. If it's a quote-unquote dumb task, it's sometimes better to use a dumber or a smaller model as opposed to these state-of-the-art models that are really expensive and really bulky." aria-label="回原文"></button>。团队会不断给不同环节换模型做实验。

所有实验都跑在 [[LangSmith|LangSmith]] 平台上，记录成本和基准分数随时间的变化。

结果也拿得出手：在主基准 IssueBench 上，错误识别能力提升了 2 倍 <button class="pd-ts" data-t="08:16" data-who="嘉宾" data-en="And so as we've been working on improving this process and making Engine better, as we've been building these benchmarks and then hill climbing against those benchmarks, we've been able to achieve much better scores against the different benchmarks." aria-label="回原文"></button>。

## 单看一条轨迹，有些问题永远发现不了

V1 的 Engine 擅长在单条轨迹里找错：幻觉、坏掉的函数调用、循环调用、上下文爆炸 <button class="pd-ts" data-t="10:42" data-who="嘉宾" data-en="And this is because in our first version of Engine, we ensured that Engine was really excellent at finding errors in a specific trace. Whether that's a hallucination, whether that's a broken tool call, whether that's looping tool calls, context explosion, right?" aria-label="回原文"></button>。但有些问题必须跨轨迹才能看出来。

单看某条轨迹，一切正常——一条轨迹里 6 次函数调用，另一条 19 次，看起来都不算异常。

但把统计拉通，发现函数调用次数整体暴涨，很可能这个新模型在疯狂乱调工具 <button class="pd-ts" data-t="11:22" data-who="嘉宾" data-en="So let's say between September 1st and September 14th, our team has swapped out a new model for our agent, and we see that the cost and latency are pretty much the same, even though we were expecting to see a huge drop in cost or a huge drop in latency." aria-label="回原文"></button>。

另一类是低效路径：比如 5% 的情况下，智能体处理一个普通请求时会绕岔路，去调用一堆不该碰的工具和数据源 <button class="pd-ts" data-t="12:35" data-who="嘉宾" data-en="The other kind of problem that we have become much more capable of, these are two of several of what we've worked on, is the ability for Engine to detect inefficient paths as it works to identify or to meet the demands of a customer request." aria-label="回原文"></button>。

这类问题也只有在更大的图景下才现形。V2 对这两类都强了很多。

## 从提建议到验证过的修复

V1 只给你一个问题描述加修复提示，测试靠自己。V2 的核心新功能是经过验证的修复，流程像软件工程里的复现 bug：

Engine 找到问题后，先把出问题的输入重新发给线上版本的智能体，确认 bug 依然存在 <button class="pd-ts" data-t="14:11" data-who="嘉宾" data-en="It finds an issue about tool looping, and it identifies specific inputs that it's seen in production that have broken your agent in some way. Now to verify that this problem is real, we actually send those same inputs to your production version of your agent to verify that it is still broken in your production version." aria-label="回原文"></button>；

然后在 LangSmith 部署平台上开一个预览分支跑修复版，用同样的破坏性输入验证修复真的有效；

最后再跑一遍你配置的更大数据集，确认没有引入别的退化 <button class="pd-ts" data-t="14:56" data-who="嘉宾" data-en="And we will run those same breaking inputs against this previewed fix version of your agent so that we can confirm that whatever fix engine has spun up really solves the problem that identified and that those breaking inputs are no longer breaking in this proposed version of your agent." aria-label="回原文"></button>。

**最终交付的不再是一个提示，而是一个确认存在的问题、一个确认有效且不退化的修复**。

[[Ben|Ben]] 认为这是迈向持续学习的第一步——智能体不断自我改进，人仍然在环里把关 <button class="pd-ts" data-t="15:38" data-who="嘉宾" data-en="I'm really excited about this. I think this is like our kind of first steps into continual learning and this process of continually making your agent better and more capable while still allowing for a human to be in the loop and monitoring the different changes that are proposed." aria-label="回原文"></button>。该功能目前在私测阶段，面向 LangSmith 部署客户。

## 红队测试：在用户受伤之前先打自己

另一个新能力是主动红队：

Engine 根据智能体的系统提示词和运行框架，自己猜测什么样的输入可能搞坏它，然后拿这些输入去轰击线上部署，把不满意的结果聚类、打包成问题加修复建议 <button class="pd-ts" data-t="16:33" data-who="嘉宾" data-en="There are also ways that we can try to break your agent before it ever actually touches a user. And so this red teaming functionality for engine proactively creates hypotheses for potential inputs that might break your agent based on your agent system prompt or other details of the harness or the context that are available and tries to figure out what might cause for an unsatisfactory output from your agent." aria-label="回原文"></button>。

**这样问题在被真实用户碰到之前就被发现和修掉**。同样在私测中。

## v3 想做什么：更大胆的建议

团队已经在做 v3，方向有三个：让验证修复和红队支持更多部署方式；让 Engine 能自动生成一套基线评测而不只是补充回归用例 <button class="pd-ts" data-t="18:12" data-who="嘉宾" data-en="At the same time, Engine today is really good at identifying eval examples to be added to your data sets based on issues it's identified. Whether that's issues that have been red teamed against and are found proactively, or whether it's issues that have been identified in production, we find these great inputs that are added to your regression test cases." aria-label="回原文"></button>；

以及北极星目标——不再只提小修小补，而是给出大建议，比如「这个模型太贵太笨重，换这个，我已经用你的评测验证过它更快更便宜」<button class="pd-ts" data-t="18:56" data-who="嘉宾" data-en="And lastly, the one that I'll talk on here is kind of a north star for us as we build Engine, which is that we want to make broader changes, broader proposals, I should say, to your agent's harness and to the models that are used for different tasks." aria-label="回原文"></button>。

此外，Engine 也会在下一个版本支持自带密钥的自托管部署。

## 本集带走

- 评估复杂智能体要拆成环节，每个环节单独建基准测试，再用真实生产环境的狗粮验证基准是否可信。
- 让 Engine 监控 Engine 自己，成了团队发现产品问题的主渠道之一。
- 简单任务用小模型，不仅省钱，有时效果反而更好。
- 单条轨迹看不出的问题（指标趋势、低效路径）需要跨轨迹的统计视角，这是 v2 的重要升级。
- V2 的核心是从提建议走向验证过的修复：复现 bug、预览部署验证、跑数据集防退化，全程人可介入。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">从那以后，Engine 已经扫描了超过 7000 万条追踪记录，并为今天正在使用它的众多客户创建了超过 21000 个问题。</span>  
> *And since then, Engine has scanned over 70 million traces and has created over 21,000 issues for the many customers that are using it today.*  
> <span class="qm">—— Ben · [01:31]</span> ^q1

> <span class="qz">但也许这种内部使用最有趣的地方在于，我们实际上是在 Engine 之上运行 Engine。</span>  
> *But maybe the most interesting of this dogfooding is that we actually run Engine on top of Engine.*  
> <span class="qm">—— Ben · [05:57]</span> ^q2

> <span class="qz">如果是一个所谓的「愚蠢」任务，有时候用一个更笨或更小的模型反而更好，而不是用那些非常昂贵、非常臃肿的最先进模型。</span>  
> *If it's a quote-unquote dumb task, it's sometimes better to use a dumber or a smaller model as opposed to these state-of-the-art models that are really expensive and really bulky.*  
> <span class="qm">—— Ben · [07:18]</span> ^q3

> <span class="qz">但我们对 Engine 的愿景是：发现问题、修复这些问题、测试那个修复方案，全部自主完成。</span>  
> *But the vision that we have for Engine is the finding of problems, the fixing of those problems, and the testing of that fix all autonomously.*  
> <span class="qm">—— Ben · [13:42]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-05-talks-interrupt-nyc-opening-keynote|模型不再是护城河，谁在围绕模型建「自己的智能」]]<span class="pd-rz">同公司:LangChain、LangSmith · 同概念:智能体 (agent)、评测 (evals)、轨迹 (trace)</span>
- [[2026-10-08-talks-giving-ai-agents-memory-that-learns-jake|让 AI 智能体越用越聪明：LangChain 团队谈“会学习的记忆”]]<span class="pd-rz">同公司:LangChain、LangSmith · 同概念:智能体 (agent)、轨迹 (trace)、评测 (evals)</span>
- [[2025-09-25-lennys-why-ai-evals-are-the-hottest-new-skill|做 evals 不是写单元测试，是从看数据开始的错误分析]]<span class="pd-rz">同概念:智能体 (agent)、评测 (evals)、轨迹 (trace)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:智能体 (agent)、评测 (evals)</span>
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同概念:智能体 (agent)、评测 (evals)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:智能体 (agent)、评测 (evals)</span>

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
