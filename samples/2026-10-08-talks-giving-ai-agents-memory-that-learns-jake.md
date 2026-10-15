---
title: 让 AI 智能体越用越聪明：LangChain 团队谈“会学习的记忆”
podcast: 精选演讲
date: 2026-10-13
source_url: undefined
duration: "16:20"
type: episode
cover: "#64748b"
description: LangChain Labs 负责人 Jake Broekhuizen 讲解如何给 AI 智能体装上能从经验中学习的长期记忆。
guests: ["[[Jake Broekhuizen]]"]
companies: ["[[LangChain]]", "[[LangSmith]]"]
concepts: ["[[智能体]]", "[[记忆]]", "[[可观测性]]", "[[trace]]", "[[程序性记忆]]", "[[读写循环]]", "[[Context Hub]]", "[[短期记忆]]", "[[长期记忆]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-08-talks-giving-ai-agents-memory-that-learns-jake#post","headline":"让 AI 智能体越用越聪明：LangChain 团队谈“会学习的记忆”","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-08-talks-giving-ai-agents-memory-that-learns-jake","mainEntityOfPage":"https://talk.solomind.cc/2026-10-08-talks-giving-ai-agents-memory-that-learns-jake","description":"LangChain Labs 负责人 Jake Broekhuizen 讲解如何给 AI 智能体装上能从经验中学习的长期记忆。","datePublished":"2026-10-13","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jake Broekhuizen"},{"@type":"Organization","name":"LangChain"},{"@type":"Organization","name":"LangSmith"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"trace"},{"@type":"Thing","name":"程序性记忆 (procedural memory)"},{"@type":"Thing","name":"读写循环 (read-write cycle)"},{"@type":"Thing","name":"Context Hub"},{"@type":"Thing","name":"短期记忆 (short-term memory)"},{"@type":"Thing","name":"长期记忆 (long-term memory)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"让 AI 智能体越用越聪明：LangChain 团队谈“会学习的记忆”","item":"https://talk.solomind.cc/2026-10-08-talks-giving-ai-agents-memory-that-learns-jake"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>让 AI 智能体越用越聪明：LangChain 团队谈“会学习的记忆”</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 让 AI 智能体越用越聪明：LangChain 团队谈“会学习的记忆”

<div class="pd-byl"><b>Jake Broekhuizen</b> · LangChain Labs 负责人 · 2026-10-13</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-08-talks-giving-ai-agents-memory-that-learns-jake.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果智能体所参考的未来上下文从未改变，那么一个错误的技能或指令就意味着，智能体今天犯的错误在未来的运行中仍会持续存在。</div><div class="a">— Jake Broekhuizen <button class="pd-ts" data-t="03:48" data-who="Jake Broekhuizen" data-en="If the future context that that agent references never changes, then a misguided skill or instruction will mean that the agent, the mistake that the agent makes today will still persist in future runs." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jake Broekhuizen]]
>
> **公司** [[LangChain]] · [[LangSmith]]
>
> **概念** [[智能体]] · [[记忆]] · [[可观测性]] · [[trace]] · [[程序性记忆]] · [[读写循环]] · [[Context Hub]] · [[短期记忆]] · [[长期记忆]]

如果你在用 AI 帮你干活——写代码、做客服、做研究——你大概有过这样的期待：它今天犯的错，明天不该再犯。

[[Jake Broekhuizen|Jake Broekhuizen]] 在 [[LangChain|LangChain]] 领导 Labs 团队，这场 15 分钟的演讲就讲一件事：怎么让[[智能体|智能体]]真正做到“下一次运行比上一次更好”。

## 为什么“记下来”不等于“学会了”？

现在大家已经擅长观察智能体：每次运行都会留下记录，调用了什么工具、怎么推理的、引用了什么文件，全都存在那里。

Jake 说，这叫[[可观测性|可观测性]]，是可靠性的基础。

但问题出在记录存下来之后。如果智能体未来参考的上下文从来不更新，那今天犯的错，明天还会原样再犯一次 <button class="pd-ts" data-t="03:48" data-who="Jake" data-en="But I think the challenge really is after the trace is stored or after the log or after the transcript of what the agent did is stored. If the future context that that agent references never changes, then a misguided skill or instruction will mean that the agent, the mistake that the agent makes today will still persist in future runs." aria-label="回原文"></button>。

记录只是证据，只有当教训被转化成下次运行能参考的持久上下文，它才变成“[[记忆|记忆]]” <button class="pd-ts" data-t="04:36" data-who="Jake" data-en="A trace, a transcript, or a log is evidence of what happened. It only becomes memory when that lesson is converted into durable context that the agent can reference on future runs." aria-label="回原文"></button>。

## 一个真实的翻车案例：理财助手的语气失控

LangChain 团队合作过一家金融公司的智能体，负责消费、预算方面的建议。金融行业监管严格，语气必须是“建议式”的。

但有时它会滑向“指令式”，比如不说“类似情况的用户通常会设个消费上限”，而是直接说“你需要取消一些订阅，把钱转进储蓄”<button class="pd-ts" data-t="01:55" data-who="Jake" data-en="And so it would move from being advisory and helpful to actually pointed and directed, saying things like, Users in your similar situation would generally set a spending cap, and it would actually say, oh, well, actually, it looks like you need to cancel some subscriptions and move some money into savings." aria-label="回原文"></button>。

修正的办法本来靠人工：看记录、找到哪里跑偏、改上下文、再确认没改坏别的地方。

这套流程很难规模化——所以需要一套能让智能体自己持续学习的系统。

## 记忆分三种，最值钱的是“该怎么做事”

Jake 借用认知科学的分类，把智能体的记忆分成三类 <button class="pd-ts" data-t="05:07" data-who="Jake" data-en="I think that it's helpful to group them into three distinct buckets, a taxonomy that we borrow from cognitive science, and actually it applies a lot when we're talking about agents that are language-based." aria-label="回原文"></button>:

- 知道什么(事实、偏好)——语义记忆；
- 经历过什么(过去的交互、例子)——情景记忆；
- 该怎么表现(指令、技能、规则)——[[程序性记忆|程序性记忆]]。

那个理财助手的语气问题，改的就是程序性记忆：不是教它新事实，而是给它一条跟用户打交道时要遵守的规则 <button class="pd-ts" data-t="06:00" data-who="Jake" data-en="So in that financial assistant that I, the example that I gave at the beginning, tone changes that we wanted to promote to the agent and make it follow came in the form of updating its procedural memory." aria-label="回原文"></button>。

Jake 说，**可见的进步大多来自这一类**。

另外还要分清短期和[[长期记忆|长期记忆]]：[[短期记忆|短期记忆]]是当前这次运行要用的草稿、工具结果；长期记忆存在别处，服务于未来的运行。

他提到一个有用的心智模型，叫“[[读写循环|读写循环]]”——运行前从长期记忆读入相关内容，运行后从证据里筛出有价值的信号，写回长期记忆 <button class="pd-ts" data-t="08:16" data-who="Jake" data-en="And so that's what lends itself to this really helpful mental model that I have, or that I and the team at LangChain and generally I think is a very useful way to sort of think about the relationship between working or short-term memory and long-term memory." aria-label="回原文"></button>。

业内也有人称这个更新过程为“睡眠期计算”或“做梦”。

关键在于筛选：大部分记录应该只留作历史，如果全都变成长期记忆，智能体反而会被淹没，更难推理 <button class="pd-ts" data-t="09:18" data-who="Jake" data-en="As I mentioned, most evidence should stay as history. If we turned everything that was, if we turned all of that evidence into long-term memory, then it would make the agent struggle, and it would make it harder to reason over future tasks." aria-label="回原文"></button>。

## 落地工具：LangSmith 的 Context Hub

具体实现上，Jake 介绍了 [[LangSmith|LangSmith]] 的三步闭环 <button class="pd-ts" data-t="10:44" data-who="Jake" data-en="The implementations around how different people building different frameworks are still evolving, but this three-part shape is a really useful starting point. One implementation of this, and I won't claim it's the only implementation, but just to kind of put some concrete structure to what I'm talking about is the way that we do this with LangSmith." aria-label="回原文"></button>:捕获(通过可观测性看到智能体的完整轨迹)、分析(后台自动从记录中提取有价值的信号)、更新(把信号写进叫 [[Context Hub|Context Hub]] 的存储，下次运行时智能体会拉取这些内容)。

在理财助手的例子里，系统发现语气跑偏后，会自动更新相关的技能文件，下次运行语气就改过来了。

## 三条踩坑经验

Jake 分享了设计记忆系统时最该注意的三点：

第一，不是所有反馈都该变成记忆更新。

大部分记录只该留作历史，一部分可以做离线评估的数据集，只有一小部分才该真正改写记忆 <button class="pd-ts" data-t="13:16" data-who="Jake" data-en="So some things that I and my team have currently or kind of always think about when designing memory, and this should also as well ideally guide the way that you design and build some of these abstractions, is that agents produce so much, we call it exhaust or we call it kind of like feedback." aria-label="回原文"></button>。

第二，小心缓存。

他曾经困惑于为什么改了记忆、行为却不变，后来发现是长时间运行的智能体在开头更新了记忆，但运行时根本读不到更新。

搞清楚什么能缓存、什么不能，非常重要 <button class="pd-ts" data-t="14:26" data-who="Jake" data-en="Very important. I was banging my head on a wall for a while, whilst trying to understand why my behavior wasn't changing, and I needed to recognize and think about that second principle." aria-label="回原文"></button>。

第三，分清哪些可以自动更新，哪些必须人审核。

指令、政策、语气规范这类程序性记忆，**大概决定了智能体 75% 的行为，改动这些应该有人把关**，在真正提交前把变更亮出来，并用评估保护关键行为 <button class="pd-ts" data-t="15:04" data-who="Jake" data-en="With instructions and policies and tone guidelines, those are probably going to drive about 75% of the behavior of my agent. And so that actually probably should have some level of human in the loop and human interaction." aria-label="回原文"></button>。

回到他那句话：“下一次运行应该更好。”记忆不只是存信息的地方，它让经验变成上下文，而上下文让下一次运行有机会变好 <button class="pd-ts" data-t="15:51" data-who="Jake" data-en="And it's more than just a place to store information. It's how experience becomes context. And then that context is how our next runs get the chance to improve." aria-label="回原文"></button>。

## 本集带走

- 记录和记忆是两回事：只有能指导未来运行的持久上下文才算记忆。
- 记忆分三类(语义、情景、程序性)，可见的行为改进大多来自程序性记忆的更新。
- 核心循环是“读—跑—筛—写”：运行前读入记忆，运行后筛选信号写回，大部分记录只留作历史。
- 不是所有反馈都值得记忆化；缓存问题可能让记忆更新悄悄失效。
- 关键行为(指令、政策、语气规范)的修改应保留人工审核，并用评估保护。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">如果智能体所参考的未来上下文从未改变，那么一个错误的技能或指令就意味着，智能体今天犯的错误在未来的运行中仍会持续存在。</span>  
> *If the future context that that agent references never changes, then a misguided skill or instruction will mean that the agent, the mistake that the agent makes today will still persist in future runs.*  
> <span class="qm">—— Jake Broekhuizen · [03:48]</span> ^q1

> <span class="qz">我们想要努力实现的目标或系统，是让追踪记录不再只是一份日志，而成为信号的一个来源。</span>  
> *The goal or the system that we want to work towards is where a trace stops just being a log and becomes a source of signal.*  
> <span class="qm">—— Jake Broekhuizen · [04:01]</span> ^q2

> <span class="qz">只有当那个经验教训被转化为智能体在未来运行中可以参考的持久性上下文时，它才成为记忆。</span>  
> *It only becomes memory when that lesson is converted into durable context that the agent can reference on future runs.*  
> <span class="qm">—— Jake Broekhuizen · [04:36]</span> ^q3

> <span class="qz">程序性记忆实际上才是大部分可见收益的来源。</span>  
> *Procedural memory is where actually most of the visible gains come from.*  
> <span class="qm">—— Jake Broekhuizen · [05:45]</span> ^q4

> <span class="qz">如果我们把所有那些证据都变成长期记忆，那会让智能体陷入困境，并且会让它在未来任务上的推理变得更困难。</span>  
> *If we turned all of that evidence into long-term memory, then it would make the agent struggle, and it would make it harder to reason over future tasks.*  
> <span class="qm">—— Jake Broekhuizen · [09:20]</span> ^q5

> <span class="qz">并非所有东西都应该成为记忆更新。</span>  
> *Not everything should become a memory update.*  
> <span class="qm">—— Jake Broekhuizen · [13:16]</span> ^q6

> <span class="qz">包含指令、策略和语气指南，这些大概会驱动我智能体大约 75% 的行为。</span>  
> *With instructions and policies and tone guidelines, those are probably going to drive about 75% of the behavior of my agent.*  
> <span class="qm">—— Jake Broekhuizen · [14:57]</span> ^q7

> <span class="qz">它是经验如何变成上下文的方式。</span>  
> *It's how experience becomes context.*  
> <span class="qm">—— Jake Broekhuizen · [15:51]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-05-talks-interrupt-nyc-opening-keynote|模型不再是护城河，谁在围绕模型建「自己的智能」]]<span class="pd-rz">同公司:LangChain、LangSmith · 同概念:可观测性 (observability)、智能体 (agent)、追踪 (trace)、记忆 (memory)、评估 (evals)</span>
- [[2026-10-09-talks-managed-deep-agents-deploying-mission-cr|从本机跑通到正式上线：LangChain 发布 Managed Deep Agents]]<span class="pd-rz">同公司:LangChain、LangSmith · 同概念:Context Hub、智能体 (agent)、记忆 (memory)、评估 (evals)</span>
- [[2026-08-13-talks-when-to-build-your-own-agent-harness-har|拥有你自己的智能：Harness、Eval 与数据飞轮]]<span class="pd-rz">同公司:LangChain · 同概念:context、可观测性 (observability)、智能体 (agent)、评估 (evals)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:context、可观测性 (observability)、智能体 (agent)、评估 (evals)</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:context、智能体 (agent)、记忆 (memory)</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)、评估 (evals)</span>

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
