---
title: 当代码生成加速，谁来填运维的坑：用后台智能体接手生产环境长尾工作
podcast: 精选演讲
date: 2026-08-09
source_url: undefined
duration: "24:41"
type: episode
cover: "#64748b"
description: AI 提速了写代码，却让生产环境更复杂；解法是用后台智能体接手没人在意的长尾运维工作。
guests: ["[[Justin Smith]]"]
companies: ["[[Resolve AI]]", "[[Slack]]"]
concepts: ["[[智能体]]", "[[后台智能体]]", "[[生产上下文]]", "[[可观测性]]", "[[沙箱]]", "[[部署监控]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-09-talks-always-on-agents-run-production-without#post","headline":"当代码生成加速，谁来填运维的坑：用后台智能体接手生产环境长尾工作","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-09-talks-always-on-agents-run-production-without","mainEntityOfPage":"https://talk.solomind.cc/2026-08-09-talks-always-on-agents-run-production-without","description":"AI 提速了写代码，却让生产环境更复杂；解法是用后台智能体接手没人在意的长尾运维工作。","datePublished":"2026-08-09","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Justin Smith"},{"@type":"Organization","name":"Resolve AI"},{"@type":"Organization","name":"Slack"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"后台智能体 (background agent)"},{"@type":"Thing","name":"生产上下文 (production context)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"部署监控 (deployment monitoring)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"当代码生成加速，谁来填运维的坑：用后台智能体接手生产环境长尾工作","item":"https://talk.solomind.cc/2026-08-09-talks-always-on-agents-run-production-without"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当代码生成加速，谁来填运维的坑：用后台智能体接手生产环境长尾工作</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# 当代码生成加速，谁来填运维的坑：用后台智能体接手生产环境长尾工作

<div class="pd-byl"><b>Justin Smith</b> · Resolve AI · 2026-08-09</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-09-talks-always-on-agents-run-production-without.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们需要全栈 AI。这不再仅仅关于模型。</div><div class="a">— Justin Smith <button class="pd-ts" data-t="03:00" data-who="Justin Smith" data-en="We need full stack AI. It's not just about the models anymore." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Justin Smith]]
>
> **公司** [[Resolve AI]] · [[Slack]]
>
> **概念** [[智能体]] · [[后台智能体]] · [[生产上下文]] · [[可观测性]] · [[沙箱]] · [[部署监控]]

<div class="pd-tldr"><b>一句话</b>AI 提速了写代码，却让生产环境更复杂；解法是用后台智能体接手没人在意的长尾运维工作。</div>

工程师 70% 的时间其实不在写代码，而在运行代码——维护平台、调试事件、值班、发补丁、处理警报。AI 辅助编程让代码产出和发布速度飙升，非开发者甚至也能往生产环境推代码，而现有的结构根本没准备好应对这种变更量，生产环境的复杂性正在失控 <button class="pd-ts" data-t="01:46" data-who="Justin Smith" data-en="Kind of, sort of. What we actually found out, and this was a survey study done, is that 70% of the time from an engineer is actually not just like, is not focused just on writing code." aria-label="回原文"></button>。出路是用 AI [[智能体|智能体]]来应对 AI 自己带进系统的新增复杂性：让智能体在生产环境里帮你跑运维、盯系统。

Resolve 的切入点正是这里。他们把智能体分成两层：一层是应急的值班智能体（接警报、查根因、协调跨团队事故）；另一层是[[后台智能体|后台智能体]]，专门处理那些「不是起火、但总得有人干」的长尾工作——这正是 [[Justin Smith|Justin Smith]] 这一集的重点 <button class="pd-ts" data-t="05:55" data-who="Justin Smith" data-en="And we have agents there to come support the much larger activity of all of this kind of cross collaboration, et cetera, keeping everybody in sync and aligned on where the incident is happening, what the impact of that is, et cetera." aria-label="回原文"></button>。

后台智能体盯的是那一大堆没有明显触发点、却时刻消耗工程师精力的活：盯着刚发的部署是不是健康出笼；每天出一份系统状态晨报让大家对齐；留意某个 P99 延迟漂移（P99 指排名前 1% 的最慢请求延迟）是不是又冒头了；或者定期做健康检查，别等客户投诉了才发现问题 <button class="pd-ts" data-t="09:25" data-who="Justin Smith" data-en="But there's just a long tail of other things that we are accountable for that doesn't have sort of a thing that's gonna show up in your sort of job description of like, this is what you're gonna be responsible for." aria-label="回原文"></button>。这些事未必会触发警报，但总得有人负责。

## 什么是任务：执行 + 生产上下文

任务由两部分组成：执行，以及理解如何执行的[[生产上下文|生产上下文]]。执行引擎能调用工具、加载仪表盘；但真正判断「这个指标看起来不对劲」的，是生产上下文 <button class="pd-ts" data-t="10:35" data-who="Justin Smith" data-en="It's understanding what to do and being able to execute that, maybe having access to the tools, et cetera, right? Obviously very important to do, but we think the production context is just way more important because it's one thing to go check a dashboard." aria-label="回原文"></button>。

这里有个关键区分：执行能帮你打开仪表盘，但只有上下文能告诉你「这感觉不对」——哪怕你一时说不清为什么。做后台智能体，执行引擎和生产上下文缺一不可 <button class="pd-ts" data-t="10:43" data-who="Justin Smith" data-en="Obviously very important to do, but we think the production context is just way more important because it's one thing to go check a dashboard. It's another thing to say that metric smells off." aria-label="回原文"></button>。如果智能体没有真正理解你的环境、服务怎么交互、热点在哪，模型再聪明也无法在具体任务上成功；它必须有底层的学习系统来捕获这些知识，并且随系统演进而持续更新 <button class="pd-ts" data-t="06:51" data-who="Justin Smith" data-en="But especially over the last six months or so. But the idea of understanding, like truly understanding your environment and the way that your services interact and where the hotspots are, keeping track of all of that sort of understanding is incredibly difficult, but it's incredibly important for any model to be successful at the task that it needs to do." aria-label="回原文"></button>。

## 智能体怎么触发、怎么跑

后台智能体有三种触发方式：按计划（比如每天出晨报、每周四值班交接时自动汇总上周趋势）；基于事件流（CD 流水线走完、[[Slack|Slack]] 消息进来时触发）；基于消息（你直接跟它说「去做点什么」）<button class="pd-ts" data-t="11:27" data-who="Justin Smith" data-en="When does the agent work? It can work in a bunch of different ways. It can just do it on a schedule." aria-label="回原文"></button>。

它永远在云端运行，合上笔记本也没关系；跑在[[沙箱|沙箱]]（一种隔离的运行环境）里，底下自带文件系统，能在干活时自我组织；底下还有一层知识和记忆系统——智能体能反思刚做的任务、下次做得更好，或者把从一个任务里学到的东西迁移到另一个任务上，因为这是一套跨所有任务共享的知识系统 <button class="pd-ts" data-t="12:36" data-who="Justin Smith" data-en="And then obviously back to the learning loop, right? So that idea of knowledge and sort of a memory system underneath that to really understand your systems and as it's doing a task, able to sort of reflect on that task and do a better job next time or the things that it learned from one task, it can sort of apply into a different task because again, this sort of shared sort of knowledge system works across all the different tasks that we have." aria-label="回原文"></button>。

## 四种已经跑通的工作负载

**[[部署监控|部署监控]]**是最重的一个。环境里的任何变更都是出岔子的机会。大家都有 CI/CD 系统，但它的检查通常只是基准线，不够详尽，覆盖不了每次发布的独特变更；而且像功能开关（feature flag，一种不用改代码就能开关功能的机制）或基础设施变更往往根本不走 CI/CD，也没有监控，你只能寄望于出了事警报响、值班人员被吵醒 <button class="pd-ts" data-t="14:11" data-who="Justin Smith" data-en="And, you know, a lot of people have a decent CI CD system. I mean, this is like tried and true stuff that we've had as an industry for quite a while. But we noticed a couple of gaps, you know, from in most of our customers." aria-label="回原文"></button>。

智能体能做的事比标准 CI/CD 更深：它会看这次到底改了什么、哪些遥测数据能帮判断变更好坏，然后针对这次发布定一个专属检查计划。Justin 在演示里展示了智能体看到「结账服务替换了货币服务」后，不仅监控结账延迟和错误率，还顺着因果链去查 Kafka 流水线是否健康 <button class="pd-ts" data-t="18:56" data-who="Justin Smith" data-en="So I'm going to sort of check for these things. And so here, the checkout replaces currency service. We'll monitor the checkout latency and the error rates." aria-label="回原文"></button>。这些检查不是硬编码的，智能体有自主性——它可以决定「这类问题偶尔才冒头，我想再盯一小时」，甚至三天后回来复查这个部署是否还健康 <button class="pd-ts" data-t="19:28" data-who="Justin Smith" data-en="Again, the agent has a bit more autonomy, and you get to guide it a bit on how much autonomy you want it to have. But it could decide, I want to wait for another hour because this type of issue might only hit every so often, so I really want to spend a little bit more time focused on this." aria-label="回原文"></button>。

**计划性的健康检查和异常探测**就是定期看看仪表盘、或者临时设一个智能体盯一周某个第三方服务 <button class="pd-ts" data-t="15:02" data-who="Justin Smith" data-en="Schedule health and anomaly checks. So this is just sort of the ongoing periodic checking of some of your systems. And this is maybe something where it's like, go check sort of my general dashboards on a routine basis." aria-label="回原文"></button>。**运营报告和交接**是那些为了传播信息、同步状态的仪式性总结 <button class="pd-ts" data-t="15:41" data-who="Justin Smith" data-en="Operational reports and handoffs. I talked a little bit about this. These are the sort of ceremonial things that we might want to do just to spread information, summarize things, kind of bring things to the fore." aria-label="回原文"></button>。

最有趣的是**工程问题的第一响应**。触发它的是一条 Slack 消息——工程师最大的隐性成本之一就是盯着 Slack 频道、随时被打断去回答别人的问题 <button class="pd-ts" data-t="15:59" data-who="Justin Smith" data-en="And I will say... One of my biggest, like, let's call it responsibilities as an engineer is watching all my Slack channels and trying to make sure everyone's kind of happy and like that nobody has any burning questions or anything like that." aria-label="回原文"></button>。

Resolve 的智能体会被动监听关键频道，判断自己有没有足够信心回答；有趣的是，它还能通过 Slack 私信问你「我想我知道答案但不确定，我回复之前你能帮我确认一下吗？」——这种涌现行为（emergent behavior，系统设计中非预设、自然冒出来的行为）在用着用着会变得很有意思 <button class="pd-ts" data-t="16:57" data-who="Justin Smith" data-en="And one of the fun things is our agents have access to Slack DMs and things like that. And so you can have an agent that basically will DM you to say, I think I know the answer to this, but I'm not sure." aria-label="回原文"></button>。

## 智能体怎么设置、怎么接入

设置不靠填表单，靠对话：你跟智能体说「我想给团队做一份定期健康摘要」，它会先探索你的环境，反过来问你几个问题（想看什么、要多详细），然后建好初始版本让你测，测好了再分享给团队 <button class="pd-ts" data-t="22:18" data-who="Justin Smith" data-en="It's really just through talking with the agent. And so here, this is me sort of saying, hey, I wanna do a new recurring health summary for my team. So the agent's going to take a look at my environment, it's gonna explore my environment a little bit, and eventually likely come back and ask me a couple questions about what I want to see, what kind of report do I want, how verbose do I want it, et cetera." aria-label="回原文"></button>。你还可以直接在 Slack 里告诉它「刚才那份报告太冗长了，缩短点」，它会更新自己的任务模板，下次自动调整 <button class="pd-ts" data-t="20:36" data-who="Justin Smith" data-en="But one of the nice things, and I don't know if I'll be able to watch it go all the way, but you can always just come back in this thread and, you know, this is too verbose." aria-label="回原文"></button>。

如果你内部已经有自己的智能体框架，Resolve 提供的东西都能通过 MCP 服务器（一种让模型访问外部工具和上下文的协议标准）接入——你可以把 Resolve 的学习系统和生产上下文能力接到自己现有的系统里，不用重新造轮子，也别去重复造已有的技能 <button class="pd-ts" data-t="23:38" data-who="Justin Smith" data-en="Also, just to call out, if you have an agent harness internally, if you're building your own, everything that I showed is accessible through kind of MCP servers, et cetera." aria-label="回原文"></button>。

Justin 最后强调：运营工作的成本不在任务执行本身，而在环境复杂性。后台智能体按计划跑、按触发器跑，高度可组合；但最大的价值在于——理想的交互发生在你本来就待着的地方（Slack 或 MS Teams），而不是逼你多开一个工具 <button class="pd-ts" data-t="24:11" data-who="Justin Smith" data-en="That's where the biggest issue is going to happen. Background agents, they run on schedules, they run on triggers, they're very composable, you can sort of graph them into lots of different use cases." aria-label="回原文"></button>。

## 本集带走

- **写代码从来不是瓶颈，运维才是**：工程师 70% 时间花在运行代码上；AI 加速编码只会让生产端更复杂，现有结构应对不了变更量。
- **任务 = 执行 + 生产上下文**：执行能加载仪表盘，但只有生产上下文能判断「这感觉不对」——两者缺一不可。
- **后台智能体三种触发方式**：按计划、基于事件流、基于消息；永远在云端跑、沙箱隔离、带共享记忆系统。
- **部署监控比标准 CI/CD 更深**：智能体看这次具体改了什么、顺着因果链查相关组件，且非硬编码——能自主决定「再盯一小时」甚至三天后回来复查。
- **第一响应智能体的涌现行为**：被动监听 Slack 关键频道，有信心就直接答，没信心会私信你确认后再回复。
- **通过 MCP 服务器接入现有框架**：如果你有自己的智能体框架，Resolve 的学习系统和生产上下文能力可以作为扩展接入，不用重复造技能。
- **交互应发生在你本来就在的地方**：智能体的主战场应该是 Slack/MS Teams 这些你日常待着的工具，而不是逼你多开一个面板。

<div class="pd-sec">全部金句 <span>3 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">我们需要全栈 AI。这不再仅仅关于模型。</span>  
> *We need full stack AI. It's not just about the models anymore.*  
> <span class="qm">—— Justin Smith · [03:00]</span> ^q1

> <span class="qz">你必须在生产内部使用 AI 来应对 AI 带入你的产品或系统的复杂性增加。</span>  
> *You've got to use AI inside of production to deal with the amount of increase of complexity that AI is putting into your product or into your system.*  
> <span class="qm">—— Justin Smith · [03:56]</span> ^q2

> <span class="qz">生产上下文重要得多，因为去检查仪表盘是一回事。说那个指标看起来不对劲是另一回事。</span>  
> *The production context is just way more important because it's one thing to go check a dashboard. It's another thing to say that metric smells off.*  
> <span class="qm">—— Justin Smith · [10:38]</span> ^q3
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
    // 只搬搜索;阅读模式不并进顶栏(设计稿详情页顶栏只有分享+收藏,用户 2026-08-01 拍板摘掉)。
    ['.search'].forEach(function(sel){ grab(sel,acts); });
    // 深浅色进右栏末尾 —— 但右栏在窄屏可能不显示,槽跟着一起没了。
    // 只在槽真的看得见时才搬进去,看不见就退回顶栏(🔒 #2:任何屏宽都得有入口)。
    var side=document.querySelector('.right.sidebar'), slot=null;
    if(side){
      slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      // 同上:槽是空的(:empty → display:none),要判**右栏**看不看得见
      if(!(side.offsetWidth || side.offsetHeight || side.getClientRects().length)) slot=null;
    }
    grab('.darkmode', slot || acts);
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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); }
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
