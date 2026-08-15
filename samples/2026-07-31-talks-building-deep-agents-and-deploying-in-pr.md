---
title: "把智能体推向生产环境:为什么标准基础设施不够用"
podcast: 精选演讲
date: 2026-07-31
source_url: undefined
duration: "15:33"
type: episode
cover: "#64748b"
description: "从开源框架 DeepAgents 的架构设计,到长任务、记忆、权限与人机交互的生产级挑战。"
companies: ["[[LangChain]]"]
concepts: ["[[测试框架]]", "[[Deep Agents]]", "[[LangGraph]]", "[[LangSmith 部署]]", "[[沙箱]]", "[[护栏]]", "[[中间件]]", "[[上下文窗口]]", "[[文件系统]]", "[[子智能体]]", "[[持久化执行]]", "[[检查点]]", "[[回路中的人类]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-31-talks-building-deep-agents-and-deploying-in-pr#post","headline":"把智能体推向生产环境:为什么标准基础设施不够用","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-31-talks-building-deep-agents-and-deploying-in-pr","mainEntityOfPage":"https://talk.solomind.cc/2026-07-31-talks-building-deep-agents-and-deploying-in-pr","description":"从开源框架 DeepAgents 的架构设计,到长任务、记忆、权限与人机交互的生产级挑战。","datePublished":"2026-07-31","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Organization","name":"LangChain"},{"@type":"Thing","name":"测试框架 (harness)"},{"@type":"Thing","name":"Deep Agents"},{"@type":"Thing","name":"LangGraph"},{"@type":"Thing","name":"LangSmith 部署 (LangSmith deployments)"},{"@type":"Thing","name":"沙箱 (sandboxes)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"中间件 (middleware)"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"文件系统 (file system)"},{"@type":"Thing","name":"子智能体 (sub-agents)"},{"@type":"Thing","name":"持久化执行 (durable execution)"},{"@type":"Thing","name":"检查点 (checkpointing)"},{"@type":"Thing","name":"回路中的人类 (human in the loop)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"把智能体推向生产环境:为什么标准基础设施不够用","item":"https://talk.solomind.cc/2026-07-31-talks-building-deep-agents-and-deploying-in-pr"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把智能体推向生产环境:为什么标准基础设施不够用</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M10 16.8s-6-3.8-6-8.4a3.2 3.2 0 0 1 6-1.5 3.2 3.2 0 0 1 6 1.5c0 4.6-6 8.4-6 8.4z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M10 16.8s-6-3.8-6-8.4a3.2 3.2 0 0 1 6-1.5 3.2 3.2 0 0 1 6 1.5c0 4.6-6 8.4-6 8.4z"/></svg></button></div></div></header></div>

# 把智能体推向生产环境:为什么标准基础设施不够用

<div class="pd-byl">2026-07-31</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-31-talks-building-deep-agents-and-deploying-in-pr.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">思考这个等式最简单的方法是,如果你不是那个模型,你就是那个框架。</div><div class="a">— SPEAKER_00 <button class="pd-ts" data-t="00:56" data-who="SPEAKER_00" data-en="the easiest way to think about this equation is that if you're not the model, you're the harness." aria-label="回原文"></button></div></div>

> [!info] 关联
> **公司** [[LangChain]]
>
> **概念** [[测试框架]] · [[Deep Agents]] · [[LangGraph]] · [[LangSmith 部署]] · [[沙箱]] · [[护栏]] · [[中间件]] · [[上下文窗口]] · [[文件系统]] · [[子智能体]] · [[持久化执行]] · [[检查点]] · [[回路中的人类]]

<div class="pd-tldr"><b>一句话</b>从开源框架 DeepAgents 的架构设计,到长任务、记忆、权限与人机交互的生产级挑战。</div>

你给大模型挂上工具、塞进提示词、装上[[护栏|护栏]],这些围绕模型搭建的全部代码,有一个统称——[[测试框架|harness]](挽具/框架)。Claude Code 光这部分就有 50 万行代码,全是为了让模型在执行你的任务时表现最好 <button class="pd-ts" data-t="01:07" data-who="" data-en="And so the harness is everything that's built around the model to make it useful, to make it reliable, to make it good. So if you use Claude Code, Claude Code has something like 500,000 lines of code as part of its source code." aria-label="回原文"></button>。讲这场分享的人来自 [[LangChain|LangChain]],他不仅拆解了这套框架里有什么,还讲了一个更扎心的事实:现有的标准基础设施,根本扛不住真正复杂的智能体跑在生产环境里。

这是 LangChain 团队的成员,这一集聊了两块内容:前半段拆解他们开源的 DeepAgents 框架到底封装了哪些最佳实践,以及为什么[[文件系统|文件系统]]成了当前管理上下文的「最先进技术」;后半段则直面现实——当你的智能体任务变长、变复杂,标准的基础设施会在[[持久化执行|持久化执行]]、记忆、权限和人工审批上统统掉链子,你得针对性地重建运行时的地基。结尾他还顺带提了一句,如果你不想自己搞定这些麻烦,[[LangSmith 部署|LangSmith 部署]]提供了打包方案。

### 智能体到底是什么:harness 的拆解

要理解这场分享,得先弄明白一个核心等式:一个智能体 = 一个基础大模型 + 一个 harness <button class="pd-ts" data-t="00:41" data-who="" data-en="And the first question that you might have is, what is a harness? Well, the easiest way to think about it is that when you have an agent, whether you're building it, you're talking about it, you're testing it, the agent is a model, a foundational LLM." aria-label="回原文"></button>。如果你不是那个模型本身,那你写的一切围绕模型运转的代码,就是 harness。

那么,harness 里具体有什么?讲者把里面的核心构件分了几类。

首先是系统提示词和记忆,这是你与大模型交互的主要接口,也是让模型随着时间学习你偏好的方式。其次是工具、技能、MCP(模型上下文协议)和[[子智能体|子智能体]],这些通常属于编排层的东西也被算作 harness 的一部分。

再往外扩展,任何智能体与之交互的基础设施——比如文件系统、[[沙箱|沙箱]](一种隔离程序运行的安全环境)、浏览器——同样属于这个框架 <button class="pd-ts" data-t="02:09" data-who="" data-en="All of these things that are normally part of your agent, your orchestration, are also considered part of your harness. So any of the infrastructure that you use, any of the orchestration, so file system, sandboxes, your browser, anything that the agent interacts with as part of the interface is also part of the harness." aria-label="回原文"></button>。DeepAgents 的独特之处在于引入了钩子和[[中间件|中间件]]的概念:你可以定义自己的中间件来拦截对模型的调用,在模型执行前后注入自定义逻辑,比如护栏(限制模型行为的规则)或额外的预处理 <button class="pd-ts" data-t="02:29" data-who="" data-en="Now, the last thing that is a little bit unique to DeepAgents and is useful is the idea of hooks and middleware. DeepAgents allows you to define your own middleware to intercept calls to the model, either before the model executes or after the model executes, so you can add in your own custom logic, things like guardrails, things like extra pre-processing or post-processing, or whatever you need to get that optimal performance for your given task." aria-label="回原文"></button>。

### 为什么文件系统成了上下文管理的「最先进技术」

说完了 harness 里有什么,接下来是 DeepAgents 在具体设计上最强调的一个原语:文件系统。

在这个框架里,文件系统被视为目前上下文管理的最先进技术。智能体会利用文件系统来存储可能需要参考的信息,就像用便签本一样 <button class="pd-ts" data-t="03:31" data-who="" data-en="The file system is... Probably the state of the art when it comes to context management today, where agents will utilize the file system to store information that they might need to reference, such as a scratch pad." aria-label="回原文"></button>。

为什么偏偏是文件系统?原因在于基础模型的训练数据。

因为各大模型在优化 Claude Code 和 Codex 等编程智能体的过程中,接受了海量的文件系统数据训练,所以它们非常非常擅长利用这个接口。把数据以文件系统的形式提供给模型,往往能直接提升表现 <button class="pd-ts" data-t="03:49" data-who="" data-en="And because foundational models have been trained on so much file system data in the course of optimizing Claude Code and Codex and coding agents, Foundational models are very, very good at utilizing the interface, so giving your data to your model in the form of a file system tends to boost performance." aria-label="回原文"></button>。围绕上下文管理,DeepAgents 还开放了摘要、子智能体和规划等模块,让你精准控制送达模型的信息量,只传递最少量的必要信息,从而扩展[[上下文窗口|上下文窗口]]并保持模型专注。

从架构层级看,DeepAgents 是最高级别的抽象,构建在 LangChain 之上,提供标准工具调用能力;而 LangChain 的底层是提供节点、边和状态的 [[LangGraph|LangGraph]] <button class="pd-ts" data-t="04:46" data-who="" data-en="It's built on top of LangChain, which gives you that basic tool calling infrastructure that people refer to as agents today. And under the hood of LangChain, everything is built on LangGraph, which is the core Lego pieces that you use to put everything together." aria-label="回原文"></button>。这种分层带来极强的可组合性:你可以让一个完全确定性的 LangGraph 工作流,把 DeepAgent 当作其中一个处理复杂推理的节点;反过来,让[[Deep Agents|深度智能体]]在底层协调确定性流作为子智能体也可以 <button class="pd-ts" data-t="06:42" data-who="" data-en="And because everything under the hood is built on top of LangGraph, this also means that DeepAgents is deeply composable with any of your existing LangChain or LangGraph agents." aria-label="回原文"></button>。

这就允许开发者根据任务找到自由度与确定性的最佳平衡点。这也是为什么团队建议:构建智能体时,始终从深度智能体开始 <button class="pd-ts" data-t="08:11" data-who="" data-en="Thank you for watching. Our recommendation when it comes to building agents is to always start with a deep agent. So now let's finally get to the portion where we talk about what it means to run these agents in production and what are some of the special considerations that you might face when you have an agent in production." aria-label="回原文"></button>。

### 标准基础设施的失灵:复杂智能体的生产难题

工具和架构再好,一旦要部署到生产环境,真正的考验才刚开始。这正是接下来的话题:标准基础设施并不是为长期运行的复杂智能体而构建的 <button class="pd-ts" data-t="08:28" data-who="" data-en="So now let's finally get to the portion where we talk about what it means to run these agents in production and what are some of the special considerations that you might face when you have an agent in production." aria-label="回原文"></button>。

当一个深度智能体的用例是长期运行、多步骤的,你就会面临一系列棘手的新问题。讲者列出了必须考量的因素清单:如何处理错误、如何实现自动伸缩或并行分发、如何恢复掉线的会话,以及如何加入[[回路中的人类|人工在环]] <button class="pd-ts" data-t="09:11" data-who="" data-en="It's likely that the longer your task is, at some point your agent is going to fail, and it's going to feel really bad if you're on step 67 out of 123, and then you have to execute all the 67 steps again when you restart the task." aria-label="回原文"></button>。你现成的运行时环境需要彻底改造,才能适应这些复杂的深度任务。

首当其冲的是持久化执行。智能体的核心模式仍然受限于上下文窗口。

当你构建复杂智能体时,必然会把上下文窗口推向极限,运行很长时间;而在逼近极限的过程中,智能体产生幻觉或出错的概率会越来越大 <button class="pd-ts" data-t="10:16" data-who="" data-en="So by nature of building a complex agent, you are likely going to be pushing your context window to the limit. You're going to be running things for very long periods of time." aria-label="回原文"></button>。如果没有适当的机制,一旦任务跑到第 67 步(假设总共 123 步)时崩溃,你就得从第一步重来,这种体验极其糟糕。DeepAgents 和 LangGraph 通过在执行的每一步设置[[检查点|检查点]]来解决这个问题,如果第 67 步失败,你可以直接从第 66 步恢复 <button class="pd-ts" data-t="10:36" data-who="" data-en="And so it's very important to be able to recover from exactly that same spot where you had the error occur and not have to restart the task all the way from the very beginning." aria-label="回原文"></button>。

把跨会话的检查点串联起来,就引出了第二大挑战:记忆机制。把单个会话的所有执行步骤关联起来,就构成了短期记忆,让智能体记住你前几轮对话的偏好;如果把这些跨会话的洞察提取出来存入长期记忆库,就能实现为特定用户进行个性化定制的功能 <button class="pd-ts" data-t="11:38" data-who="" data-en="And you can again extend this across sessions to what we call long-term memory. So deep agents, when we put them into production, we always include a long-term memory store in which we will extract insights that we want to have persist across many different sessions." aria-label="回原文"></button>。

第三大挑战是极其棘手的身份验证与权限问题。在智能体场景下,权限的边界变得模糊了 <button class="pd-ts" data-t="12:43" data-who="" data-en="So acting on behalf of the user is, through OAuth, a pretty standard flow that, at minimum, you need to build into your agents. But there's also new sorts of RBAC and auth scenarios that agents have fuzzy lines around that you don't really have with traditional applications." aria-label="回原文"></button>。

传统应用里,你授权一个程序读写 Gmail,它是确定性的,你很放心;但对于复杂智能体,你可能觉得它替你发一封邮件没问题,但如果它瞬间替你发了一千封邮件,你肯定会觉得出大问题了,想要立刻调查并叫停 <button class="pd-ts" data-t="13:15" data-who="" data-en="For a deep agent or a more complex agent. For example, you might be okay with an agent sending one email on your behalf, but you might think that something's wrong and you might want to investigate if you see that agent sending a thousand emails on your behalf." aria-label="回原文"></button>。这种动态的、需要根据行为频次或规模进行干预的权限控制,是传统应用没有的全新 auth 流程,也是目前业界仍在摸索的领域。

最后,只要任务重要,就必然需要一定程度的人工在环 <button class="pd-ts" data-t="13:45" data-who="" data-en="And what is the RBAC that you need to be able to deploy and to work with your agents? Now, the last thing that is important that I want to call out is interfacing with users because as of today, most tasks that are important still involve some degree of human in the loop." aria-label="回原文"></button>。这就要求运行时必须支持最基础的人机交互:人类用户如何中断、停止或批准智能体的动作?

智能体在执行长任务时,如何将其实时进度流式传输回前端,持续向人类更新状态?这些都是把复杂智能体推向生产时绕不开的底层基础设施。

讲者也坦言,如果注意到了这些生产级难题却拿不出方案是不合适的。LangSmith 部署就是为此而生:如果你不想自己从头解决这些掉头发的底层问题,可以直接把构建好的智能体自动部署到他们的平台上 <button class="pd-ts" data-t="15:12" data-who="" data-en="If you are building agents and you don't want to figure out these problems yourself, We do support deployments where you can take an agent that you've built and automatically deploy it onto our platform to handle these exact scenarios that we just spent time talking about." aria-label="回原文"></button>。但无论你是否使用这套商业产品,只要打算在生产环境跑复杂智能体,上述的持久化、记忆、动态权限和人机交互,都是你必须跨过的门槛。

## 本集带走

最后收个尾,这一集值得带走的是对智能体架构和生产挑战的全景认知。第一,智能体等于基础模型加上 harness(框架),这层围绕模型的代码包含了提示词、工具、沙箱和中间件,决定了模型表现的下限。

第二,文件系统是目前管理上下文的最先进手段,因为模型在训练中已经极度熟悉它,以文件形式喂数据能直接涨表现。第三,标准基础设施扛不住复杂智能体,要在生产环境跑长线任务,必须在运行时层面死磕持久化执行(靠检查点实现断点续传)、长期记忆(提取跨会话状态)、动态权限管理(应对模糊的行为边界)以及人工在环的交互通道。无论你自己造轮子还是用打包方案,这都是绕不过去的四道坎。

<div class="pd-sec">全部金句 <span>4 条</span></div>

> <span class="qz">思考这个等式最简单的方法是,如果你不是那个模型,你就是那个框架。</span>  
> *the easiest way to think about this equation is that if you're not the model, you're the harness.*  
> <span class="qm">—— SPEAKER_00 · [00:56]</span> ^q1

> <span class="qz">文件系统是……可能是目前上下文管理的最先进技术,智能体将利用文件系统来存储它们可能需要参考的信息,比如便签本。</span>  
> *The file system is... Probably the state of the art when it comes to context management today, where agents will utilize the file system to store information that they might need to reference, such as a scratch pad.*  
> <span class="qm">—— SPEAKER_00 · [03:29]</span> ^q2

> <span class="qz">我们在构建智能体方面的建议是,始终从深度智能体开始。</span>  
> *Our recommendation when it comes to building agents is to always start with a deep agent.*  
> <span class="qm">—— SPEAKER_00 · [08:11]</span> ^q3

> <span class="qz">你的任务越长,你的智能体在某个时刻失败的可能性就越大,如果你处于 123 个步骤中的第 67 步,然后必须在重启任务时再次执行所有这 67 个步骤,那感觉真的很糟糕。</span>  
> *It's likely that the longer your task is, at some point your agent is going to fail, and it's going to feel really bad if you're on step 67 out of 123, and then you have to execute all the 67 steps again when you restart the task.*  
> <span class="qm">—— SPEAKER_00 · [08:57]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-07-talks-how-harmonic-4x-d-user-retention-by-buil|产品里的智能体为什么总“瞎”：Harmonic 的上下文可见性法则]]<span class="pd-rz">同公司:LangChain · 同概念:harness、文件系统 (file system)、深度智能体 (deep agents)、LangGraph、中间件 (middleware)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同公司:LangChain · 同概念:harness、护栏 (guardrails)</span>
- [[2026-07-24-talks-inside-the-agent-engine-a-langchain-and|当系统出故障时，让 AI 代替作战室里的 50 个人——Traversal 谈如何造 AI SRE]]<span class="pd-rz">同概念:harness、文件系统 (file system)、深度智能体 (deep agents)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:护栏 (guardrails)、Codex</span>
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|Netflix 产品负责人谈 AI 时代：每个人都能做一切,但卓越的专长不会消失]]<span class="pd-rz">同概念:护栏 (guardrails)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:护栏 (guardrails)</span>

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
