---
title: 从本机跑通到正式上线：LangChain 发布 Managed Deep Agents
podcast: 精选演讲
date: 2026-10-15
source_url: undefined
duration: "15:41"
type: episode
cover: "#64748b"
description: "LangChain 产品经理 Victor 讲解 Deep Agents 框架与新发布的 Managed Deep Agents,如何让关键任务智能体快速部署上线。"
host: "[[Victor]]"
companies: ["[[LangChain]]", "[[Parallel]]", "[[Madrigal]]"]
concepts: ["[[Deep Agents]]", "[[Managed Deep Agents]]", "[[智能体]]", "[[harness]]", "[[虚拟文件系统]]", "[[人在回路]]", "[[子智能体]]", "[[LangGraph]]", "[[LangSmith]]", "[[沙箱]]", "[[上下文管理]]", "[[评估]]", "[[Context Hub]]", "[[记忆]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-09-talks-managed-deep-agents-deploying-mission-cr#post","headline":"从本机跑通到正式上线：LangChain 发布 Managed Deep Agents","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-09-talks-managed-deep-agents-deploying-mission-cr","mainEntityOfPage":"https://talk.solomind.cc/2026-10-09-talks-managed-deep-agents-deploying-mission-cr","description":"LangChain 产品经理 Victor 讲解 Deep Agents 框架与新发布的 Managed Deep Agents,如何让关键任务智能体快速部署上线。","datePublished":"2026-10-15","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Victor"},{"@type":"Organization","name":"LangChain"},{"@type":"Organization","name":"Parallel"},{"@type":"Organization","name":"Madrigal"},{"@type":"Thing","name":"Deep Agents"},{"@type":"Thing","name":"Managed Deep Agents"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"虚拟文件系统 (virtual file system)"},{"@type":"Thing","name":"人在回路 (human in the loop)"},{"@type":"Thing","name":"子智能体 (sub-agents)"},{"@type":"Thing","name":"LangGraph"},{"@type":"Thing","name":"LangSmith"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"上下文管理 (context management)"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"Context Hub"},{"@type":"Thing","name":"记忆 (memory)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"从本机跑通到正式上线：LangChain 发布 Managed Deep Agents","item":"https://talk.solomind.cc/2026-10-09-talks-managed-deep-agents-deploying-mission-cr"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>从本机跑通到正式上线：LangChain 发布 Managed Deep Agents</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 从本机跑通到正式上线：LangChain 发布 Managed Deep Agents

<div class="pd-byl"><b>Victor</b> · LangChain 产品经理 · 2026-10-15</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-09-talks-managed-deep-agents-deploying-mission-cr.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">这一切的目的，就是在正确的时机把正确的上下文交给模型。</div><div class="a">— Victor <button class="pd-ts" data-t="01:12" data-who="Victor" data-en="And that's to get the model the right context at the right time." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Victor]]
>
> **公司** [[LangChain]] · [[Parallel]] · [[Madrigal]]
>
> **概念** [[Deep Agents]] · [[Managed Deep Agents]] · [[智能体]] · [[harness]] · [[虚拟文件系统]] · [[人在回路]] · [[子智能体]] · [[LangGraph]] · [[LangSmith]] · [[沙箱]] · [[上下文管理]] · [[评估]] · [[Context Hub]] · [[记忆]]

[[智能体|智能体]](Agent)这个词被说得太多，但真正把它从笔记本电脑上的演示推到生产环境，中间隔着一大堆麻烦事。

[[LangChain|LangChain]] 的产品经理 [[Victor|Victor]] 在这场演讲里，先拆解了他们的 [[Deep Agents|Deep Agents]] 框架，再介绍了随 0.8 版本发布的 [[Managed Deep Agents|Managed Deep Agents]]——把基础设施打包好，让团队专心写业务逻辑。

## 什么是智能体，什么是马甲？

智能体的核心很朴素：一个模型，调用工具，完成任务。它基于流行已久的 React 风格——先推理，再行动。

那什么是 [[harness|harness]](可以理解为给模型穿上的马甲)？Victor 说，就是模型之外的一切：技能、工具、上下文、[[子智能体|子智能体]]，统统打包进去。

目的只有一个——在对的时间给模型对的上下文。<button class="pd-ts" data-t="00:47" data-who="嘉宾" data-en="They're going to reason over it to accomplish a task for you. The next question we often get is what is a harness? So a harness is basically everything else that we bake in to create the agent." aria-label="回原文"></button>

Deep Agents 就是这样一个可定制的马甲。LangChain 把编码智能体的经验提炼出来，做成几乎任何领域都能用的基础框架。

## 四块核心设计，文件系统是灵魂

Deep Agents 的结构有四块。第一是执行环境：给智能体一个[[虚拟文件系统|虚拟文件系统]]，文件可以放在 S3,也可以放在能写代码、跑代码的[[沙箱|沙箱]]里。

它还顺便解决了[[上下文管理|上下文管理]]——把超长的工具返回结果存进文件，而不是硬塞进模型的上下文窗口。 <button class="pd-ts" data-t="01:42" data-who="嘉宾" data-en="So we took a lot of the learnings of coding agents and different harnesses that are out there in the wild, and we've really put it into this very customizable base harness that you can use for virtually any use case." aria-label="回原文"></button>

另外三块：

委派(智能体自己做计划，再派子智能体执行)、[[人在回路|人在回路]](随时暂停等人确认，Deep Agents 建在 [[LangGraph|LangGraph]] 运行时之上，天生支持中断)、以及上下文摘要压缩。

客户 [[Madrigal|Madrigal]] 是个现成的例子：他们的药物研究员过去要花几周才能为一个研究员搭好新智能体，用 Deep Agents 部署到 [[LangSmith|LangSmith]] 之后，只要几小时。<button class="pd-ts" data-t="03:03" data-who="嘉宾" data-en="Human in the loop is very core to everything that we do here at LangChain. This conference is actually named after the interrupt function, which is a function in LangGraph." aria-label="回原文"></button>

## 为什么本机跑通到上线这么难？

Victor 把搭智能体分成三块：业务逻辑、马甲、基础设施。

业务逻辑是团队最该花心思的部分；基础设施最无聊，却最关键——用户从哪些入口用这个智能体？怎么排队？怎么流式输出？

这些全要自己搭。<button class="pd-ts" data-t="04:41" data-who="嘉宾" data-en="So infrastructure is probably the more boring area, but the most important area when you talk about actually taking the agent and putting it into production in a way that others can use it." aria-label="回原文"></button>

**Managed Deep Agents 的思路，就是把马甲和基础设施打包，你只管改提示词、跑[[评估|评测]]、迭代逻辑**。

上手也确实简单：

一条 mda init 命令建好项目目录，指令、技能、工具、身份各放一个文件;mda dev 在本地起一个和生产环境完全相同的服务器;mda deploy 一条命令部署到 LangSmith 的托管基础设施上。<button class="pd-ts" data-t="07:06" data-who="嘉宾" data-en="Getting started is really easy. So all we're going to do is run mda init and give our agent a name. That'll scaffold this project directory for us." aria-label="回原文"></button>

## 四个吓人的问题，一套方案应对

把智能体推给全公司用，客户总会问四个问题：谁在让它干活？用谁的数据？引用谁的[[记忆|记忆]]？权限不够怎么办？<button class="pd-ts" data-t="08:34" data-who="嘉宾" data-en="And then we can define how users authenticate and how we remember things about users in the other two files. So one of the core things that when we talk about building agents with customers, there's kind of four scary things that then get brought up when you bring it into production is how do we identify who's asking this agent to do what, you know, prep for the email or prep for the meeting?" aria-label="回原文"></button>

Managed Deep Agents 的回答：认证处理器能在 Slack、网页等不同入口之间识别同一个用户，不用反复登录。

连接(connections)机制让开发者定义每个工具用谁的凭证——比如查 CRM 一律用发起人的 Salesforce 账号。中途缺令牌？

智能体会自动暂停，发个链接让用户点一下授权，然后继续，因为中断是有检查点的，可以无限期等待。<button class="pd-ts" data-t="10:18" data-who="嘉宾" data-en="And how we handle that is really easily mid-task. So since we have built-in Hume in the loop in deep agents and in the LangGraph runtime, what happens is when you make a request and the agent doesn't have a particular token for a particular user, and it's an on behalf of token, it's actually able to really easily pause, ask the user to go ahead and authenticate, they'll click the link, everything proceeds as normal." aria-label="回原文"></button>

记忆也分层：

程序性记忆(智能体对用户的操作经验)和个人偏好记忆分开，而且可以按渠道控制权限——私聊里能用你的个人记忆，共享频道里就不该暴露你的信息。<button class="pd-ts" data-t="11:13" data-who="嘉宾" data-en="And this is where control starts to come into place. So one thing that we built into manage deep agents is allowing you to define the access control based on the channel that it's calling from." aria-label="回原文"></button>

## 评测和版本控制也一并解决

指令、技能、记忆统一存在 [[Context Hub|Context Hub]] 仓库里，带版本控制，方便和业务同事协作迭代，确认没问题再推广到生产。

推广前的评测接入了 Harbor 框架，跑 mda evals init 就能初始化环境，结果全部进 LangSmith 的实验页，可以反复跑同一批任务，不断爬山式地优化智能体。<button class="pd-ts" data-t="12:28" data-who="嘉宾" data-en="So we wanted to make it really easy for Managed Deep Agents. If you run this mda evals init, It'll go ahead and initialize a harbor environment for you, help you set up the tasks, help you set up the checks." aria-label="回原文"></button>

会上还宣布了与 [[Parallel|Parallel]] 的集成，公开测试期免费，不用配 API 密钥，加个工具就能用内置搜索。<button class="pd-ts" data-t="12:50" data-who="嘉宾" data-en="You can rerun the same tasks, and you can actually hill climb your agent right in your own machine. One of the things that we're announcing today is our integration with Parallel." aria-label="回原文"></button>

## 谁在用？效果如何？

LangChain 内部自己先用：除了前面提到的销售(goto-market)智能体，还有一个叫 OpenSwitch 的软件工厂类智能体。

客户方面，Kith 的 Zahid 帮他们打磨了与无代码用户协作的原语，ConsenSys 的 Derek 带着开发团队在公司各部门落地各种智能体——因为基础设施不用操心，他们上线智能体的速度快了很多。<button class="pd-ts" data-t="13:47" data-who="嘉宾" data-en="It's been really great working with Zahid, and we value him as a partner. Additionally, Derek from ConsenSys has been really, really great to see how he's actually used managed deep agents in a way that we really intended it to be used." aria-label="回原文"></button>

0.8 版本同日带来的新功能还包括：

自定义 HTTP 通道、更好的沙箱文件系统接口、用户级记忆、连接机制、Slack 文件传输(比如让智能体做 PowerPoint,直接在 Slack 里反复改)。

## 本集带走

- 智能体=模型+工具+马甲；马甲的全部意义是在对的时间给模型对的上下文
- Deep Agents 用虚拟文件系统统一解决了执行环境和上下文管理，还支持任务委派和人工中断
- 从本机到生产的真正瓶颈是基础设施：多入口认证、排队、流式、权限，Managed Deep Agents 把这些全托管了
- 身份、凭证、记忆、缺权限中途授权这四个生产环境最头疼的问题，都有了开箱即用的原语
- 客户 Madrigal 把搭建一个领域智能体的时间从几周压缩到几小时

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">这一切的目的，就是在正确的时机把正确的上下文交给模型。</span>  
> *And that's to get the model the right context at the right time.*  
> <span class="qm">—— Victor · [01:12]</span> ^q1

> <span class="qz">过去为一个研究人员启动一个新智能体需要几周时间，而现在把这些全部放进 Deep Agents harness 并部署到 LangSmith 上，只需要几个小时。</span>  
> *a task that used to take them weeks to spin up a new agent for a researcher now just takes a few hours by putting this all into the Deep Agents harness and deploying it onto LangSmith*  
> <span class="qm">—— Victor · [03:46]</span> ^q2

> <span class="qz">基础设施可能是比较无趣的领域，但当你真正要把智能体投入生产、让别人可以使用它时，它却是最重要的领域。</span>  
> *So infrastructure is probably the more boring area, but the most important area when you talk about actually taking the agent and putting it into production in a way that others can use it.*  
> <span class="qm">—— Victor · [04:31]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-05-talks-interrupt-nyc-opening-keynote|模型不再是护城河，谁在围绕模型建「自己的智能」]]<span class="pd-rz">同公司:LangChain · 同概念:harness、LangGraph、LangSmith、智能体 (agent)、评测 (evals)、沙箱 (sandbox)、记忆 (memory)</span>
- [[2026-08-13-talks-how-unify-cut-its-ai-agent-costs-95-in-t|9亿美元管道背后:Unify CTO 谈怎么把销售智能体的成本打下来]]<span class="pd-rz">同概念:harness、人在回路 (human in the loop)、智能体 (agent)、沙箱 (sandbox)、记忆 (memory)、评测 (evals)、LangSmith</span>
- [[2026-07-31-talks-building-deep-agents-and-deploying-in-pr|把智能体推向生产环境:为什么标准基础设施不够用]]<span class="pd-rz">同公司:LangChain · 同概念:Deep Agents、harness、LangGraph、人在回路 (human in the loop)、子智能体 (sub-agents)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-14-pg-together-ai-product-team|Together AI 产品团队全公开：一套仓库让 PM 下指令就出生产级 PR]]<span class="pd-rz">同概念:harness、人在回路 (human in the loop)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-09-29-latent-thariq|Anthropic 的 Thariq 谈 Claude Code：提示词、CloudMods 与给前沿踩刹车]]<span class="pd-rz">同概念:harness、智能体 (agent)、沙箱 (sandbox)、评测 (evals)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:harness、智能体 (agent)、评测 (evals)</span>

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
