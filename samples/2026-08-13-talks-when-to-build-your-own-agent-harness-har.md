---
title: 拥有你自己的智能：Harness、Eval 与数据飞轮
podcast: 精选演讲
date: 2026-09-19
source_url: undefined
duration: "23:51"
type: episode
cover: "#64748b"
description: LangChain 联合创始人兼 CEO Harrison 讲解如何拥有自己的智能体系统：何时自建 harness、如何用 eval 和可观测性建立持续改进的数据飞轮。
host: "[[Harrison Chase]]"
companies: ["[[LangChain]]", "[[DeepAgents]]", "[[LangSmith Engine]]", "[[Harbor]]", "[[Claude Code]]", "[[Codex]]"]
concepts: ["[[harness]]", "[[智能体]]", "[[上下文]]", "[[评估]]", "[[可观测性]]", "[[认知架构]]", "[[中间件]]", "[[轨迹]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-13-talks-when-to-build-your-own-agent-harness-har#post","headline":"拥有你自己的智能：Harness、Eval 与数据飞轮","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-13-talks-when-to-build-your-own-agent-harness-har","mainEntityOfPage":"https://talk.solomind.cc/2026-08-13-talks-when-to-build-your-own-agent-harness-har","description":"LangChain 联合创始人兼 CEO Harrison 讲解如何拥有自己的智能体系统：何时自建 harness、如何用 eval 和可观测性建立持续改进的数据飞轮。","datePublished":"2026-09-19","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Harrison Chase"},{"@type":"Organization","name":"LangChain"},{"@type":"Organization","name":"DeepAgents"},{"@type":"Organization","name":"LangSmith Engine"},{"@type":"Organization","name":"Harbor"},{"@type":"Organization","name":"Claude Code"},{"@type":"Organization","name":"Codex"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"上下文 (context)"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"认知架构 (cognitive architecture)"},{"@type":"Thing","name":"中间件 (middleware)"},{"@type":"Thing","name":"轨迹 (traces)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"拥有你自己的智能：Harness、Eval 与数据飞轮","item":"https://talk.solomind.cc/2026-08-13-talks-when-to-build-your-own-agent-harness-har"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>拥有你自己的智能：Harness、Eval 与数据飞轮</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 拥有你自己的智能：Harness、Eval 与数据飞轮

<div class="pd-byl"><b>Harrison Chase</b> · LangChain 联合创始人兼 CEO · 2026-09-19</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-13-talks-when-to-build-your-own-agent-harness-har.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">当每个人谈论智能体时，他们真正谈论的只是一个在循环中运行、调用工具的 LLM。</div><div class="a">— Harrison Chase <button class="pd-ts" data-t="02:47" data-who="Harrison Chase" data-en="When everyone talks about agents, what they really talk about is just an LLM running in a loop calling tools." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Harrison Chase]]
>
> **公司** [[LangChain]] · [[DeepAgents]] · [[LangSmith Engine]] · [[Harbor]] · [[Claude Code]] · [[Codex]]
>
> **概念** [[harness]] · [[智能体]] · [[上下文]] · [[评估]] · [[可观测性]] · [[认知架构]] · [[中间件]] · [[轨迹]]

这一集聊的是每个认真做 AI 产品的人都会撞上的问题：当[[智能体|智能体]]成为你业务的核心，你该怎么「拥有」它——自己掌控它的每一步，而不是把它黑箱外包给某个大厂的现成工具。主角是 Harrison，[[LangChain|LangChain]] 的联合创始人兼 CEO，他从 2022 年 GPT-3 时代就开始思考怎么把模型变成真正的协作者。

他给出的框架很清晰：一个智能体由三部分构成——模型、[[上下文|上下文]]、[[harness|harness]]（围绕模型的运行框架，负责编排和调度）。想真正拥有自己的智能，三块都要握在手里。

模型那边他不多讲，只强调一点：要能随时切换模型，就像当年的「云无关」——既避免被锁定，又能在更好的模型出现时立刻用上。上下文（记忆、语义知识、历史对话）也要自己拥有，因为它决定智能体的个性化。而这一集的重心，是第三块：harness。

## 智能体的核心就是一个循环

Harrison 先把智能体祛魅：所谓智能体，本质就是「一个在循环中运行的 LLM，不断调用工具」——请求进来，模型生成回复，回复里如果要调工具就调用，把结果传回去，继续循环。他说这是今天市面上几乎所有智能体背后的核心架构。

那各家的高级 harness 差在哪？差在你往这个循环里的哪些节点插东西。

LangChain 的做法是[[中间件|中间件]]：可以在智能体启动前、每次模型调用前、每次工具调用前后运行自己的代码。摘要化就是典型例子——模型被调用前检查上下文是否太长、太长就压缩；上下文卸载（把大的工具调用结果转储出去、不塞进上下文窗口）则是包装工具调用实现的。

沙箱、文件系统、子智能体、记忆，全都是这么挂上去的。很多编码智能体的 hooks 和 plugins，本质上就是这个东西。

另一种定制路线是更明确的「[[认知架构|认知架构]]」——手工设计固定的执行步骤（比如深度研究：先生成子问题、再扇出、再执行）。这在 2023、2024 年很流行，因为当时模型不够强、跑不动自由循环；现在很多这类定制已经下沉进 harness，但特定流程仍在用。他的建议是：**从通用 harness 起步**，最快拿到价值；等聚焦到想做到卓越的用例，再加门控和检查把行为引向特定方向。

## 自建还是用现成？看你在不在分布内

被问到最多的问题是：用 [[Claude Code|Claude Code]]、[[Codex|Codex]] 这类现成 harness，还是自己造？他的判断标准是**分布**：「你越是处于模型训练内容分布之内，现成的 harness 就越好用；一旦越来越偏离分布，你就需要调整 harness」。

这个判断还有个精妙的分层用法。以法律 AI 为例：整体任务是分布外的，需要自定义 harness，但其中的子任务——比如编辑文件——是分布内的。

而且 OpenAI 和 Claude 的模型是用不同方式训练编辑文件的，各自最擅长的方式不同。所以正确做法是：整体 harness 可以定制，但把这些分布内的部分尽可能贴近模型层。[[DeepAgents|DeepAgents]] 里的「模型配置文件」就是这么做的——根据所用模型在不同文件编辑实现之间自动切换。

## Eval 和可观测性：让智能复利增长

第二大部分是[[评估|评估]]（eval）和[[可观测性|可观测性]]。他引用 Satya 两周前的一篇文章，三句话让他印象深刻：创建你的私有 evals，因为「eval 定义了组织内部什么算是好的」；保留组织记忆的所有权——轨迹、反馈、决策、机构性上下文；建立你自己的持续学习循环，「一台爬坡机器，让你的 AI 投资为你的公司复合增值」。

具体怎么做？给关键任务智能体建 benchmark——他用它来捕捉回归，或者在上面爬坡。

正在成为行业标准的是 [[Harbor|Harbor]]，一个开源 eval 运行器，出自 TerminalBench2 的作者。结构很简单：一个任务包含环境（Docker 文件定义的沙箱）、一个用来完整性检查的黄金方案、测试脚本（验证器，可以跑代码、单元测试，也可以让另一个 LLM 或智能体当裁判）、以及给智能体的提示词。跑完就能横向比较不同 harness、不同模型、不同推理力度的表现——而且不只看准确率，延迟和成本也要一起追踪。

可观测性则被他称为「重要但被严重低估」。智能体搞砸，一定是某次 LLM 调用出了问题，原因无非两个：模型不够好，或者模型收到的上下文不够好——「而多数情况下是第二个」。所以能看到进模型上下文窗口的到底是什么、上下文是怎么一步步累积的，是调试的关键。

## 数据飞轮：跑、看、修，并且自动化

把 eval 和可观测性串起来，就是一个持续改进的循环：构建智能体 → 运行收集 trace（[[轨迹|追踪记录]]）→ 筛选整理数据 → 在数据上跑实验改进。反馈可以来自环境（他特别指出，智能体的 UX 设计被低估了——用户不会点赞点踩，但聪明的 UX 设计能自然收获大量反馈），也可以合成：用在线评估器自动判断每条 trace，为了不用对每条 trace 都跑一遍 Opus 那样的贵模型，他们微调了便宜的小模型来干这活。

改进可以落在三块里的任何一块：harness 工程、模型微调、记忆。他们还发布了 [[LangSmith Engine|LangSmith Engine]]——一个坐在你的 trace 之上的智能体，自动筛选数据、识别常见问题模式、建 issue 看板、并直接给出修复：改提示词、改上下文、甚至往 harness 里加代码。一句话总结这套飞轮：「运行智能体，获取 trace，看到模式，修复」。

问答里有几个很有意思的点。他们自己也在 dog food：Engine 跑在 Engine 上，通过 Slack 给自己发报告；还为 Engine 专门建了 benchmark，在上面跑 DeepAgents、Codex、Claude Code 对比。

结果发现 Codex 会非常激进地给自己写一堆小脚本去跑 trace，因此表现特别好——于是他们专门做了一轮冲刺，把这套打法融进 Engine 的核心 harness。这就是有 benchmark 的另一个好处：什么都拿上来跑一跑，谁有好招就抄回来。

关于 harness 未来会不会收敛成一种，他的诚实回答是「不知道」。目前看到的是：通用 harness 已经够好，起步阶段直接用现成的；越偏离分布越要定制，这是一个光谱——金融服务客户要可预测性，看到自主的 deep agents 直呼「太吓人了」，宁可要完全可控的认知架构。

OpenAI 和 Anthropic 在编程上都很强，却落在相当不同的文件编辑方式上，连他也解释不了为什么。如果哪天某个实验室真往生物这类垂直方向深耕，harness 可能就真的分化了。正因为变化快，eval 和可观测性才是最重要的那件事。

## 本集带走

- **三块都要握在手里**：智能体 = 模型 + 上下文 + harness。模型要能随时切换避免锁定，上下文（记忆、历史对话）要自己拥有，harness 决定编排能力。
- **自建 vs 现成的判据是「分布」**：任务在模型训练分布内（如通用编码），用现成 harness（Claude Code / Codex / DeepAgents）；越偏离分布（如法律、金融）越要定制。但分布内的子任务（如文件编辑）要保留原味——不同模型被训练的编辑方式不同，要贴近模型层适配。
- **从通用起步，逐步加约束**：先上通用 harness 快速拿价值，聚焦用例后再用中间件加摘要、上下文卸载、门控检查；需要可预测性的场景才上完全定制的认知架构。
- **私有 eval 是护城河**：eval 定义了「什么算好」。用 Harbor 这类开源运行器搭任务（环境 + 黄金方案 + 验证器脚本 + 提示词），同时追踪准确率、延迟、成本。
- **智能体出错先查上下文，再怪模型**：多数故障是「喂给模型的上下文不够好」，所以必须能看到进上下文窗口的每一步是怎么累积的。
- **数据飞轮要自动化**：跑智能体 → 收 trace → 筛选 → 实验改进，反馈可来自巧妙的 UX 设计或廉价的合成评估器（微调小模型当裁判，别每条 trace 都跑顶级模型）；谁有好招就抄回自己的核心 harness。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">当每个人谈论智能体时，他们真正谈论的只是一个在循环中运行、调用工具的 LLM。</span>  
> *When everyone talks about agents, what they really talk about is just an LLM running in a loop calling tools.*  
> <span class="qm">—— Harrison Chase · [02:47]</span> ^q1

> <span class="qz">harness 的主要工作是在正确的时机把上下文带给模型。</span>  
> *The main job of the harness is to bring context to the model at the right point in time.*  
> <span class="qm">—— Harrison Chase · [02:07]</span> ^q2

> <span class="qz">我的回答通常是，你越是处于模型训练内容分布之内，现成的 harness 就越好用。</span>  
> *My answer generally is the more in distribution you are of what the models are trained on, then the better the off-the-shelf harness will be.*  
> <span class="qm">—— Harrison Chase · [07:19]</span> ^q3

> <span class="qz">第一，创建你的私有 evals，因为 eval 定义了组织内部什么算是好的。</span>  
> *One, create your private evals because eval defines what good looks like inside the organization.*  
> <span class="qm">—— Harrison Chase · [09:39]</span> ^q4

> <span class="qz">然后第三，创建你自己的持续学习循环，爬坡机器，它将让你的 AI 投资为你的公司复合增值。</span>  
> *And then three, you create your own continuous learning loop, hill climbing machine that will allow your AI investments to compound the value of your firm.*  
> <span class="qm">—— Harrison Chase · [09:52]</span> ^q5

> <span class="qz">运行智能体，获取 trace，看到模式，修复。</span>  
> *Run agent, get traces, see patterns, fix.*  
> <span class="qm">—— Harrison Chase · [19:06]</span> ^q6

> <span class="qz">我认为我们经常看到，你越偏离分布，就越会想要定制 harness。</span>  
> *I think we often see that the more out of distribution you get, the more you're going to want to customize the harness.*  
> <span class="qm">—— Harrison Chase · [21:51]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-09-talks-multiplayer-agentic-engineering-arjun-si|让非工程师也能下指令：Superconductor 的多人智能体协作法]]<span class="pd-rz">同公司:Claude Code、Codex · 同概念:上下文 (context)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-09-14-talks-agents-without-code-skills-yaml-and-file|智能体就只是文件：当配置取代 Python]]<span class="pd-rz">同公司:LangChain · 同概念:harness、智能体 (agent)、评估 (evals)、沙箱 (sandbox)</span>
- [[2026-07-21-trainingdata-factory-s-matan-grinberg-the-coming-dark|Factory CEO Matan:早两年等于错，退款、路由器与软件工厂]]<span class="pd-rz">同公司:Claude Code、Codex · 同概念:harness、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:harness、上下文 (context)、可观测性 (observability)、智能体 (agent)、评估 (evals)</span>
- [[2026-08-20-talks-prototyping-as-leadership-how-a-cto-ship|管理者日程突然能写代码了：CTO 的通宵智能体工作流]]<span class="pd-rz">同公司:Claude Code · 同概念:智能体 (agent)、评估 (evals)、沙箱 (sandbox)</span>
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同公司:Claude Code、Codex · 同概念:智能体 (agent)</span>

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
