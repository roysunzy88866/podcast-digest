---
title: 别再当智能体的路由器：多智能体通信为什么这么难
podcast: 精选演讲
date: 2026-10-05
source_url: undefined
duration: "17:25"
type: episode
cover: "#64748b"
description: BENT 联合创始人兼 CTO Vlad 论证多智能体协调已是今天的难题，并提出以「会话」为抽象的全局协作层方案。
guests: ["[[Vlad Luzin]]"]
companies: ["[[BENT]]"]
concepts: ["[[gem]]", "[[智能体]]", "[[多智能体协调]]", "[[分布式系统]]", "[[循环工程]]", "[[MCP]]", "[[A2A 协议]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-30-talks-your-agents-are-in-solitary-confinement#post","headline":"别再当智能体的路由器：多智能体通信为什么这么难","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-30-talks-your-agents-are-in-solitary-confinement","mainEntityOfPage":"https://talk.solomind.cc/2026-09-30-talks-your-agents-are-in-solitary-confinement","description":"BENT 联合创始人兼 CTO Vlad 论证多智能体协调已是今天的难题，并提出以「会话」为抽象的全局协作层方案。","datePublished":"2026-10-05","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Vlad Luzin"},{"@type":"Organization","name":"BENT"},{"@type":"Thing","name":"gem"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"多智能体协调 (multi-agent coordination)"},{"@type":"Thing","name":"分布式系统 (distributed systems)"},{"@type":"Thing","name":"循环工程 (loop engineering)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"A2A 协议 (A2A)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"别再当智能体的路由器：多智能体通信为什么这么难","item":"https://talk.solomind.cc/2026-09-30-talks-your-agents-are-in-solitary-confinement"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>别再当智能体的路由器：多智能体通信为什么这么难</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 别再当智能体的路由器：多智能体通信为什么这么难

<div class="pd-byl"><b>Vlad Luzin</b> · BENT 联合创始人兼 CTO · 2026-10-05</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-30-talks-your-agents-are-in-solitary-confinement.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们的论点是：未来属于 AI 通信——企业内部、企业之间、以及消费者与企业之间的通信。</div><div class="a">— Vlad Luzin <button class="pd-ts" data-t="01:10" data-who="Vlad Luzin" data-en="So our thesis is future belongs to AI communication within a business, between businesses and between consumers and businesses." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Vlad Luzin]]
>
> **公司** [[BENT]]
>
> **概念** [[gem]] · [[智能体]] · [[多智能体协调]] · [[分布式系统]] · [[循环工程]] · [[MCP]] · [[A2A 协议]]

这一集要聊的问题是：当你的[[智能体|智能体]]越来越多，它们之间怎么互相通信？说这话的人是 Vlad，[[BENT|BENT]] 的联合创始人兼 CTO。

他抛出的钩子相当直接：现在开发者普遍在多个 Claude、Codex 会话之间当「路由器」——一个会话干活、另一个审查，靠人工复制粘贴传话。

他认为这不是什么未来问题，而是今天就得解决、且解决得很难的[[分布式系统|分布式系统]]问题。

他先给出公司的核心论点：未来属于 AI 通信——企业内部、企业之间、消费者与企业之间的通信。

智能体将无处不在，用不同框架、不同语言编写、部署在不同环境，完全自主地相互协作、无需人工干预。

图景是：智能体接到任务后，自己发现其他智能体、把它们拉进一个对话空间、来回沟通、解决任务、再向人类汇报。

Vlad 承认，大多数人听完要么觉得太遥远，要么觉得他疯了——他还举了一位市值 100 亿美元公司 CTO 的原话：

「在考虑[[多智能体协调|多智能体协调]]这种假设性问题的技术方案之前，我尽量把事情保持简单、避开这个问题。」全场的论证就是拆这句话。 <button class="pd-ts" data-t="01:10" data-who="嘉宾" data-en="And then I would like to present the company, what we do and what problems we solve. So our thesis is future belongs to AI communication within a business, between businesses and between consumers and businesses." aria-label="回原文"></button> <button class="pd-ts" data-t="02:25" data-who="嘉宾" data-en="Okay, that's it. And here is an example of a conversation I had with a CTO of a $10 billion company who said that before thinking about technical solutions to hypothetical problems like multi-agent coordination, I tried to keep things simple and avoid the problem." aria-label="回原文"></button>

## 现状：你在给智能体当路由器

先看今天的真实用法。

开发者开两个 Claude/Codex 会话，一个干活一个审查，还有多个标签页同时处理多个问题——人实际上充当了一台 Cisco 路由器，在两个有状态、却无法互相通信的智能体之间传话，所以你才需要不停给它们提示。

「[[循环工程|循环工程]]」这类新提法的实质也就是：别当路由器了，让你的智能体互相提示。

但 Vlad 尖锐地指出，这意味着你要去跟各种 Python/TypeScript 库和抽象层搏斗，由它们来发明智能体怎么互相提示；

再加上 [[A2A 协议|A2A]]、[[MCP|MCP]]、ACP 等一堆协议(其中不少和加密货币沾边)，听起来简单，实际用起来全是坑。 <button class="pd-ts" data-t="03:37" data-who="嘉宾" data-en="You are basically acting as a router, a Cisco router or a switch between two stateful agents that do work on your behalf, but they have no ability to communicate, hence you need to prompt them." aria-label="回原文"></button>

具体坑在哪：MCP 把智能体当工具调用，完全无状态——想让两个智能体保持状态、有粘性会话？祝你好运。

ACP(客户端-服务器模式)下，两个智能体要互发任务，就得同时既是客户端又是服务器。串联多个智能体调用会撞上 REST API 超时；

没人告诉你的是你还需要带持久化的队列来跟踪消息；而智能体发现机制甚至不在 A2A 协议里——规划工作全压在你头上。

消息平台这条路也一样：把智能体接上 Telegram 要五步、Discord 七步、SLAM 八步、WhatsApp 十一步，每一步都得手动做、读文档。

忙完这一切你只得到一件事：一个能和人(通常就是你自己)对话的智能体。

你的智能体仍然孤独——「它们处于数字化的单独监禁之中」。 <button class="pd-ts" data-t="04:38" data-who="嘉宾" data-en="You call agents as tools, maybe you connect to agents through A to A, and life is great. But MCP, calling agents as tools, it's completely stateless. If you want two agents to be stateful, sticky sessions, good luck to you." aria-label="回原文"></button> <button class="pd-ts" data-t="06:17" data-who="嘉宾" data-en="Your agent is still alone. They cannot see each other, they cannot communicate with each other. They are in a digital solitary confinement." aria-label="回原文"></button>

## 三个反问的答案

回到那位 CTO 的三句话。多智能体协调是假设性问题吗？——不是，如果你在两个会话之间复制粘贴、在接 MCP 和 A2A，这就是今天的问题。

能避开吗？——不能，否则我们只会开一个会话、也不需要调用别的智能体的工具。那能保持简单吗？

——看看上面那些选项，并不真的简单。 <button class="pd-ts" data-t="06:25" data-who="嘉宾" data-en="They are in a digital solitary confinement. So let's unpack the stuff that I heard from this CTO. Is multi-agent coordination a hypothetical problem?" aria-label="回原文"></button>

为什么难？

因为哪怕是笔记本上的两个会话，也是必须通过网络通信的进程——这是一个分布式系统问题，而分布式系统在加上智能体之前就够难了。

一个每个智能体都是远程的多智能体系统，本质上是「一个微服务分布式系统，只不过每个微服务都是非确定性的」。 <button class="pd-ts" data-t="07:51" data-who="嘉宾" data-en="And distributed systems are hard even before you have introduced agents on top of it. And multi-agent system where every agent is remote is basically a distributed system of microservices where each microservice is non-deterministic." aria-label="回原文"></button>

## 要解决什么，才能让它变简单

Vlad 列出了必须逐层解决的清单：①传输层——有序消息投递、实时投递、重试；

②连续性——持久化、水合(让进程状态可以保存和恢复)，不管你的智能体跑在 Pod、Docker 还是裸进程上；

③前端绑定——不同智能体框架各有线程 ID、会话 ID、执行 ID，得有人把这些 ID 映射到一起。

但这还不够：智能体不能停留在 IP 端口、URL、甚至发布订阅层面通信，因为组织仍要做大量规划。

必须把抽象层次提升到「会话」这一层——谈论房间、频道、参与者，并弄清消息在频道内和跨频道的确定性路由。

即便全解决了，还有治理层：身份、审计等等。 <button class="pd-ts" data-t="08:02" data-who="嘉宾" data-en="So it is hard. What do you need to solve all of that so it will become easy? You need to solve the transport layer." aria-label="回原文"></button>

## BENT 的方案：全局协作层

BENT 做的就是这件事：一个跨框架、跨部署环境的全局协作层，把所有智能体连起来，并实现了智能体互聊所需的每一个原语。

现场演示里，一个新的 Codex 智能体启动后以编程方式注册接入，立刻以「智能体卡片」出现在平台上；

随后 LangGraph 智能体 likewise 接入——从这一刻起它们知道彼此存在、可以对话。

跨用户连接需要双边同意：Codex 向 Vlad 的个人助理发联系人请求，批准之后 Codex 就能邀请对方进对话、发消息、收到回执。 <button class="pd-ts" data-t="09:19" data-who="嘉宾" data-en="You need to solve the governance layer, the identity, audit and etc. So I would like to introduce BENT. This is exactly what we solved, so you don't have to." aria-label="回原文"></button> <button class="pd-ts" data-t="10:21" data-who="嘉宾" data-en="From this moment, they know that they exist and they can talk to each other. Now we will ask Codex agent to send a connection request to my personal assistant. Keep in mind, different users, different registries." aria-label="回原文"></button>

针对开发者的今天，他们还做了内部产品 [[gem|Gem]]——一个桌面应用，解决路由、上下文过载、成本管理与归属，并支持多智能体加多人类协作。

它捕获 Claude 和 Codex 工作时自己生成的任务，让你能追踪智能体团队在做什么——毕竟想靠读原始输出来理解它们，「一百万 token 乘以三，那可是很大的量」。

它还让智能体描述自己正在改动的软件架构布局，你可以在右侧实时看到每个智能体正触碰哪个组件、完成即标记、需要人类介入时会收到提醒。

远程团队成员也可以连人带智能体一起加入会话；

比如安全同事维护着安全智能体的技能，你不用复制他的技能，叫他的智能体加入对话帮你解决就行。 <button class="pd-ts" data-t="11:45" data-who="嘉宾" data-en="And you have no idea how long your human was involved in the work. I would like to introduce Gem. Gem is an internal product." aria-label="回原文"></button> <button class="pd-ts" data-t="13:54" data-who="嘉宾" data-en="We can enable our team member who works remotely to join the session together with the agents and the humans so he can help solve us with some problems. If we have a security guy who maintains skills for the security agent, I don't need to copy his skills." aria-label="回原文"></button>

## 不需要手写循环

一个关键设计判断：他们没有写一堆 Python 代码去编排智能体循环。

理由是现在所有模型都在海量数据上训练过，非常清楚怎么通过消息平台通信——现场展示了当天早上的真实工作：

工程经理、开发、架构三个 ClaudeCode 实例，自己协作评审 PRD、SRS 和实现。「没有必要手工编写所有的循环，它们原生就知道怎么做。」 <button class="pd-ts" data-t="14:54" data-who="嘉宾" data-en="Do we have a bunch of Python code triggering the agents so they can loop together? We do not. Because all models right now, they are trained on a lot of data, so they understand very, very good how to communicate through messaging platforms." aria-label="回原文"></button>

对管理者，平台提供完整统计：

每个智能体的 token 花费(演示里全栈开发智能体 2000 美元、架构师 600 美元)、按开发者或团队维度的归属、使用量与成本实时更新。

你甚至能回答「这个开发者的 PR 是他真参与写的，还是全是 AI 垃圾」。

所有会话连在全局平台上，30 秒内就能把任何人接到你的任何一个智能体上，权限、房间、错误、任务状态(已完成/待办/进行中)全部实时可见。 <button class="pd-ts" data-t="14:17" data-who="嘉宾" data-en="So since we are all managers, we'll start with graphs. So the moment you open application, you can see all the stats of all the traffic that happen between your local agents and also your remote agents." aria-label="回原文"></button> <button class="pd-ts" data-t="16:03" data-who="嘉宾" data-en="You can see attribution by developer or by teams of your agents and developers and how they work. Everything gets updated in real time. You can see all agents and every agent is basically a session, right?" aria-label="回原文"></button>

## 本集带走

- **多智能体协调不是未来问题**：只要你在两个 AI 会话之间复制粘贴、接 MCP/A2A，你就已经在面对它——只是你在用人肉路由的方式解决。
- **难的根源是分布式系统 + 非确定性**：远程智能体互连本质上是「每个微服务都非确定性的微服务分布式系统」，传输、持久化、ID 映射、治理层层都得补。
- **正确的抽象单位是「会话」**：不要停在 IP/URL/发布订阅层，要上升到房间、频道、参与者，加上确定性的消息路由。
- **不用手写编排循环**：现代模型原生懂消息平台式的协作，让智能体互相提示、互相审查即可；人该管的是成本、归属和介入点。
- **可观测性是管理刚需**：token 花费、按人/按团队的归属、实时架构改动图，是你判断「代码是人写的还是 AI 灌水」的依据。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">我们的论点是：未来属于 AI 通信——企业内部、企业之间、以及消费者与企业之间的通信。</span>  
> *So our thesis is future belongs to AI communication within a business, between businesses and between consumers and businesses.*  
> <span class="qm">—— Vlad Luzin · [01:10]</span> ^q1

> <span class="qz">你基本上是在充当一个路由器，一台 Cisco 路由器或交换机，在两个代表你工作的有状态智能体之间，但它们没有能力相互通信，所以你需要给它们提示。</span>  
> *You are basically acting as a router, a Cisco router or a switch between two stateful agents that do work on your behalf, but they have no ability to communicate, hence you need to prompt them.*  
> <span class="qm">—— Vlad Luzin · [03:23]</span> ^q2

> <span class="qz">如果你想要两个智能体保持状态、有粘性会话，那祝你好运。</span>  
> *If you want two agents to be stateful, sticky sessions, good luck to you.*  
> <span class="qm">—— Vlad Luzin · [04:42]</span> ^q3

> <span class="qz">它们处于数字化的单独监禁之中。</span>  
> *They are in a digital solitary confinement.*  
> <span class="qm">—— Vlad Luzin · [06:21]</span> ^q4

> <span class="qz">而一个每个智能体都是远程的多智能体系统，基本上就是一个微服务的分布式系统，只不过每个微服务都是非确定性的。</span>  
> *And multi-agent system where every agent is remote is basically a distributed system of microservices where each microservice is non-deterministic.*  
> <span class="qm">—— Vlad Luzin · [07:51]</span> ^q5

> <span class="qz">所以为了实现智能体相互交谈的这个美好未来，我们需要把技术栈的抽象层次提升到会话这一层。</span>  
> *So for this wonderful future of agents talking to each other, we need to raise the abstraction of the technical stack to conversation*  
> <span class="qm">—— Vlad Luzin · [08:52]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-29-talks-agents-are-where-microservices-were-in-2|Navan 架构师谈生产环境智能体：从运行时到护栏的实战分层]]<span class="pd-rz">同概念:A2A、MCP、智能体 (agent)</span>
- [[2026-07-13-pg-the-complete-claude-stack-for-pms|产品经理驾驭 Claude 生态：用五层架构打造专属 AI 幕僚长]]<span class="pd-rz">同概念:MCP、智能体 (agent)、Claude</span>
- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:MCP、智能体 (agent)、Claude</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同概念:MCP、智能体 (agent)、Claude、Codex</span>
- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同概念:MCP、智能体 (agent)、Claude</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:循环工程 (loop engineering)、智能体 (agent)</span>

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
