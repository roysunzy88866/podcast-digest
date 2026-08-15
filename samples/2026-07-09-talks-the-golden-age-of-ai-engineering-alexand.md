---
title: OpenAI 开发者日：从结对编程到指挥智能体大军
podcast: 精选演讲
date: 2026-07-09
source_url: undefined
duration: "24:56"
type: episode
cover: "#64748b"
description: OpenAI 团队与智能体先驱 Peter Steinberger 同台，讲述 AI 工程师如何最大化人机协作价值。
guests: ["[[Peter Steinberger]]", "[[Romain Huet]]"]
companies: ["[[OpenAI]]"]
concepts: ["[[智能体]]", "[[Codex]]", "[[循环]]", "[[协作界面]]", "[[测试框架]]", "[[压缩]]", "[[委托]]", "[[持久化上下文]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-09-talks-the-golden-age-of-ai-engineering-alexand#post","headline":"OpenAI 开发者日：从结对编程到指挥智能体大军","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-09-talks-the-golden-age-of-ai-engineering-alexand","mainEntityOfPage":"https://talk.solomind.cc/2026-07-09-talks-the-golden-age-of-ai-engineering-alexand","description":"OpenAI 团队与智能体先驱 Peter Steinberger 同台，讲述 AI 工程师如何最大化人机协作价值。","datePublished":"2026-07-09","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Peter Steinberger"},{"@type":"Person","name":"Romain Huet"},{"@type":"Organization","name":"OpenAI"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"Codex"},{"@type":"Thing","name":"循环 (loop)"},{"@type":"Thing","name":"协作界面 (collaborative UI)"},{"@type":"Thing","name":"测试框架 (harness)"},{"@type":"Thing","name":"压缩 (compaction)"},{"@type":"Thing","name":"委托 (delegation)"},{"@type":"Thing","name":"持久化上下文 (persistent context)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"OpenAI 开发者日：从结对编程到指挥智能体大军","item":"https://talk.solomind.cc/2026-07-09-talks-the-golden-age-of-ai-engineering-alexand"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>OpenAI 开发者日：从结对编程到指挥智能体大军</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M10 16.8s-6-3.8-6-8.4a3.2 3.2 0 0 1 6-1.5 3.2 3.2 0 0 1 6 1.5c0 4.6-6 8.4-6 8.4z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M10 16.8s-6-3.8-6-8.4a3.2 3.2 0 0 1 6-1.5 3.2 3.2 0 0 1 6 1.5c0 4.6-6 8.4-6 8.4z"/></svg></button></div></div></header></div>

# OpenAI 开发者日：从结对编程到指挥智能体大军

<div class="pd-byl"><b>Peter Steinberger</b> · 2026-07-09</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-09-talks-the-golden-age-of-ai-engineering-alexand.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">软件吞噬了世界，然后 AI 吞噬了软件。但现在我们要说的是，AI 工程师正在吞噬世界。</div><div class="a">— Romain Huet <button class="pd-ts" data-t="01:21" data-who="Romain Huet" data-en="Software ate the world, and then AI ate software. But now, what we're here to say is that the AI engineers are eating the world." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Peter Steinberger]] · [[Romain Huet]]
>
> **公司** [[OpenAI]]
>
> **概念** [[智能体]] · [[Codex]] · [[循环]] · [[协作界面]] · [[测试框架]] · [[压缩]] · [[委托]] · [[持久化上下文]]

<div class="pd-tldr"><b>一句话</b>OpenAI 团队与智能体先驱 Peter Steinberger 同台，讲述 AI 工程师如何最大化人机协作价值。</div>

一个人对着 10 个终端窗口发指令，这不是在编排系统，而是在轮询——真正的未来不是让你同时盯住几十个终端，而是让你只跟一个长期在线的[[智能体|智能体]]管理者对话。这种从「微操」到「放权」的转变，正是这一集 [[OpenAI|OpenAI]] 开发者日要讲的核心。

在这场面向数千名 AI 工程师的对谈中，OpenAI 的 Alexander 和 Romain 讲了他们如何看待工程的未来，以及产品该怎么随之进化；随后登台的 [[Peter Steinberger|Peter Steinberger]]（开发者圈子里被称为 Claw Father）则用亲身经历，勾勒出了一套与智能体大军协作的全新工作范式。你会听到三块内容：第一，OpenAI 为什么坚信「工程师不但不会消失，反而迎来了最好的时代」，以及他们怎么把 [[Codex|Codex]]（OpenAI 的代码智能体）做成一个彻底开放、任何人都能在其上搭建生态的底层平台；第二，当模型跑得足够快、足够便宜时，人受限于「注意力」这个终极瓶颈该怎么办；第三，一组关于未来的具体预测——未来的编程长什么样、智能体以何种形态存在、以及工程师该把精力投向何处。

说完了这一集大概在讲什么，接下来先看 OpenAI 团队抛出的核心主张。现场抛出的一个反共识判断是：编程的抽象程度越来越高，但这绝不意味着工程师会被淘汰，相反，现在恰恰是做工程师最好的时候。

理由很简单：工程的核心从来不是把代码敲出来，而是用科学、设计和想象力去解决问题。当模型把「写代码并自我验证」这件事包揽后，人反而能腾出手来，做更多的原型尝试，花更多时间去真正理解用户，从而在「该建什么」这种核心决策上做得更好 <button class="pd-ts" data-t="05:04" data-who="Alexander" data-en="So with all of this, of course we can move much faster, but to me as a product person, the most exciting thing is actually that we make better decisions around what to build." aria-label="回原文"></button>。

注意这里提到的 Codex，它是 OpenAI 推出的代码智能体，核心能力是不仅能写代码，还能在沙箱（一种与主系统隔离的安全执行环境）里运行代码、做测试验证，甚至自己跑完整的「构建-测试」闭环。两年前，模型还无法运行自己写的代码，演示时必须祈祷一切顺利；而到了现在，模型已经能独立承担起长周期、高难度的目标，直到把任务彻底跑完。

既然模型这么强了，产品该怎么顺势进化？这正是接下来的话题。

OpenAI 团队认为，未来的 AI 协作产品应该有两种核心模式：一种是随时随地的「聊天」，另一种是让人能随时介入细节的「[[协作界面|协作界面]]」。这个理念背后的洞察是：就像和真人团队共事一样，大多数时候你只需要聊几句，放手让队友去干；只有偶尔遇到棘手问题，你才需要凑到工作台前一起死磕细节 <button class="pd-ts" data-t="07:34" data-who="Alexander" data-en="You don't actually want to watch over the shoulder or have to walk over to the workbench of your teammate for every single unit of work. Mostly, you just want to talk and let them cook." aria-label="回原文"></button>。

为此他们专门打造了 Codex 应用——你可以通过简单的聊天下达指令，也可以随时进入协作界面，指着具体的某行代码做调整。有意思的是，这个产品刚提出时，被不少坚持只在终端（黑框命令行）里敲代码的资深工程师嗤之以鼻；但现在，那些曾经信誓旦旦绝不离开终端的人，却成了这款应用的重度用户。因为在终端里很难做复杂协作，而传统的集成开发环境（IDE，写代码的专用软件）顺序又错了——它让人一上来就陷进代码里，而不是先跟「队友」沟通需求。

讲完了产品理念，那么这套生态具体是怎么搭起来的？OpenAI 给出的答案是「彻底的开放与分层」。

从最底层的模型 API，到中间层的 Codex [[测试框架|harness]]（控制智能体行为的核心调度框架），再到上层的应用服务，OpenAI 都选择了开源或对外开放。这意味着，他们用来构建 Codex 应用的工具，和交给全体开发者的工具是完全一样的。

每当 Codex 需要什么新功能——比如处理长任务的「上下文[[压缩|压缩]]」（为了适应长时间运行的任务，把冗长的背景对话信息浓缩存储），他们都会先把它做进 API 里，让所有开发者都能平等使用 <button class="pd-ts" data-t="10:30" data-who="Romain" data-en="Codex needed a way to compact long contexts for long-running tasks, and so we built that into the API. So that means your agents can use the same primitives that we built for ourselves." aria-label="回原文"></button>。不仅如此，为了让生态繁荣，他们甚至开发了特定角色（比如数据科学、设计）的插件，并且全都是开源的。这样做的结果是，任何人都可以用现有的订阅，在各种第三方工具（如 OpenCode、Xcode、JetBrains）里无缝接入这个智能体生态。

说完了 OpenAI 的平台蓝图，接下来有请特别嘉宾 Peter Steinberger 登台，讲讲一个顶级开发者的真实工作流演变。Peter 在社区里被称为 Claw Father，他几个月前还在同时管理 10 多个终端窗口，像一个调度器一样，时刻盯着哪个智能体干完了活，好赶紧给它派新任务。但他后来意识到，自己以为在做系统编排（指挥多任务协同），其实是在做轮询（不停挨个去问状态、等结果），这不仅低效，而且把自己变成了系统的路由器和内存 <button class="pd-ts" data-t="19:33" data-who="Peter" data-en="I was the scheduler, the router, and the memory. You know, at first, I paired with one agent. With 10 terminals, I was no longer pairing." aria-label="回原文"></button>。

这种困境怎么破？这正是 Peter 接着要讲的核心方法论。

如今，他的工作方式变了：他主要只跟一个长期在线的「管理者」智能体对话，由这个管理者把任务分派给底下的多个工作者智能体去执行。这种跨级管理之所以能跑通，是因为三个关键能力的成熟：第一是「[[持久化上下文|持久化上下文]]」（让智能体在长时间待命时记住背景信息和历史决策）；第二是「[[委托|委托]]」（一个中枢线程能创建并引导具体的子任务）；第三是「触发器」（比如有新需求提交时，自动唤醒对应的管理者）<button class="pd-ts" data-t="20:32" data-who="Peter" data-en="So we have persistent context, delegation, and triggers. There's your loop. And once the loop starts working, you discover the next problem." aria-label="回原文"></button>。

放手让智能体去干，听起来美好，但人该怎么配合？这正是下一个话题。

Peter 发现，随着这套系统跑起来，瓶颈也在不断转移。一开始他受限于模型消耗的额度；后来额度管够，计算力又成了瓶颈（本地的电脑跑得像喷气发动机）；再后来，算力也解决了，他发现自己受限于「注意力」——与算力不同，人的注意力是没法简单扩容的。

过去人必须死盯着屏幕，一旦模型跑偏就立刻按 Escape 打断重导；但现在的模型已经足够聪明，会自己理解意图，再盯着它敲代码纯属浪费时间。所以他现在的做法是：有需求提交时，管理者智能体醒来判断是否合理，然后交给工作者去实现、跑测试，最后再由审查智能体复核。

在这个过程中，人完全不需要去看那些中间过程。只有当管理者真正需要决策时，才会给 Peter 返回一个包含提议改动、运行视频甚至可以实时远程登录查看的构建结果。

此时人只做一次最终审查和决策即可。一句话总结：智能体跑内部执行[[循环|循环]]，人只负责设定方向和做外部决策 <button class="pd-ts" data-t="23:14" data-who="Peter" data-en="I set the direction and I make decisions in the outer loop. You know, Paul Salt is already running a version of this. He pinned his chief of staff, it wakes up every 10 minutes and it coordinates his GitHub work." aria-label="回原文"></button>。

这套工作流已经很极致了，那未来的终点又在哪里？这正是下一个话题。

Peter 描绘了他理想中的最终形态：未来，智能体不应该被绑死在某台笔记本或某个具体的 App 里。它应该是一个随时可调用的实体——你可以给它发短信、在 Slack 里引导它，或者在世界任何角落听到它的汇报。更进一步，你甚至不需要操心这活儿是在本地机器上跑还是在云端跑，智能体自己会判断环境需求，并知道该去哪里获取算力。

## 本集带走

最后收个尾，这一集值得带走的是三句话。第一，别再担心工程师会消失，既然 AI 已经把「构建-测试」的闭环跑通了，人就能从写代码的劳作中解放出来，把精力全放在理解用户和决定「该建什么」这种真正需要品味和判断力的事情上。

第二，想要把智能体大军的威力真正发挥出来，必须从微操思维切换到委派思维，给目标、给护栏、给验证标准，然后彻底放手，让人只做那一次最重要的外部审查和决策。第三，无论多强的智能体，最后都会撞上人类「注意力有限」这个无法扩容的终极瓶颈，所以今天最值钱的能力，就是果断决定把你的注意力花在哪里。别忘了，工具再强也只是内部循环，设定方向的那个外部循环，永远属于你。

<div class="pd-sec">全部金句 <span>7 条</span></div>

> <span class="qz">软件吞噬了世界，然后 AI 吞噬了软件。但现在我们要说的是，AI 工程师正在吞噬世界。</span>  
> *Software ate the world, and then AI ate software. But now, what we're here to say is that the AI engineers are eating the world.*  
> <span class="qm">—— Romain Huet · [01:21]</span> ^q1

> <span class="qz">对于我们的目标绝对不是自动化工程师。相反，我们想要的产品形态是最大限度地赋予工程师力量的形态。</span>  
> *For us, the goal is squarely not to automate engineers. Instead, the product shape that we want is one that maximally empowers engineers.*  
> <span class="qm">—— Peter Steinberger · [06:25]</span> ^q2

> <span class="qz">我以为我在编排。实际上，我在轮询。</span>  
> *I thought I was orchestrating. Really, I was polling.*  
> <span class="qm">—— SPEAKER_01 · [19:24]</span> ^q3

> <span class="qz">现在，我主要受限于注意力。与 tokens 或计算不同，我不能简单地增加更多的注意力。</span>  
> *Now, I'm primarily constrained by attention. And unlike tokens or compute, I can't simply add more of it.*  
> <span class="qm">—— SPEAKER_01 · [21:19]</span> ^q4

> <span class="qz">智能体运行内部执行循环。我设定方向，我在外部循环中做决策。</span>  
> *The agent runs the inner execution loop. I set the direction and I make decisions in the outer loop.*  
> <span class="qm">—— SPEAKER_01 · [23:04]</span> ^q5

> <span class="qz">模型的进步速度超过了围绕它们的工具和组织。</span>  
> *Models are advancing faster than the harnesses and organizations around them.*  
> <span class="qm">—— SPEAKER_01 · [24:34]</span> ^q6

> <span class="qz">未来不是 20 个终端。而是更好的循环。</span>  
> *The future is not 20 terminals. It's better loops.*  
> <span class="qm">—— SPEAKER_01 · [24:49]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-singju-openclaw-80apps|OpenClaw 创始人 Peter Steinberger：让智能体直接接管你的整台电脑]]<span class="pd-rz">同嘉宾:Peter Steinberger · 同概念:Codex、智能体 (agent)</span>
- [[2026-08-11-yc-peter-steinberger-fun-is-velocity-e3n9ea|OpenClaw 创始人复盘:被 18,000 人狂改、被舆论压垮,我学到了什么]]<span class="pd-rz">同嘉宾:Peter Steinberger · 同公司:OpenAI · 同概念:智能体 (agent)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同公司:OpenAI · 同概念:harness、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当写代码变便宜,OpenAI Codex负责人说「品味」成了最贵的资源]]<span class="pd-rz">同公司:OpenAI · 同概念:Codex、智能体 (agent)</span>
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同概念:Codex、智能体 (agent)</span>
- [[2026-05-21-talks-the-best-time-in-history-to-start-a-comp|Stripe 与 Replit 对谈：AI 时代的创业大爆发与护城河]]<span class="pd-rz">同公司:OpenAI · 同概念:智能体 (agent)</span>

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
