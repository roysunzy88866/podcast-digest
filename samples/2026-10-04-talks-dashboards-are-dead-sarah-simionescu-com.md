---
title: 仪表盘已死：智能体才是新用户
podcast: 精选演讲
date: 2026-10-04
source_url: undefined
duration: "10:26"
type: episode
cover: "#64748b"
description: Composio 的 Sarah 论证「仪表盘已死」：智能体不看界面，只看能不能干成活，并演示如何让 Claude 跨 Slack、Sentry、Datadog 五分钟修出 PR。
guests: ["[[Sarah Simionescu]]"]
companies: ["[[Composio]]"]
concepts: ["[[智能体]]", "[[MCP]]", "[[仪表盘]]", "[[上下文窗口]]", "[[Claude]]"]
category: 智能体
tags:
  - 智能体
  - 产品方法
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-04-talks-dashboards-are-dead-sarah-simionescu-com#post","headline":"仪表盘已死：智能体才是新用户","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-04-talks-dashboards-are-dead-sarah-simionescu-com","mainEntityOfPage":"https://talk.solomind.cc/2026-10-04-talks-dashboards-are-dead-sarah-simionescu-com","description":"Composio 的 Sarah 论证「仪表盘已死」：智能体不看界面，只看能不能干成活，并演示如何让 Claude 跨 Slack、Sentry、Datadog 五分钟修出 PR。","datePublished":"2026-10-04","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Sarah Simionescu"},{"@type":"Organization","name":"Composio"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"仪表盘 (dashboard)"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"Claude"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"仪表盘已死：智能体才是新用户","item":"https://talk.solomind.cc/2026-10-04-talks-dashboards-are-dead-sarah-simionescu-com"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>仪表盘已死：智能体才是新用户</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 仪表盘已死：智能体才是新用户

<div class="pd-byl"><b>Sarah Simionescu</b> · 2026-10-04</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-04-talks-dashboards-are-dead-sarah-simionescu-com.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">仪表盘已死。</div><div class="a">— Sarah Simionescu <button class="pd-ts" data-t="01:06" data-who="Sarah Simionescu" data-en="The dashboard is dead." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sarah Simionescu]]
>
> **公司** [[Composio]]
>
> **概念** [[智能体]] · [[MCP]] · [[仪表盘]] · [[上下文窗口]] · [[Claude]]

开场的 Sarah 是个每天用 Datadog 的工程师——但有一天同事让她当场查个告警，她打开[[仪表盘|仪表盘]]整个人僵住了：完全不知道东西在哪。她真的从来没打开过仪表盘，却每天都在「用」它。

由此她抛出一个听似疯狂、其实显而易见的论点：**仪表盘已死**。而她的团队恰好负责 [[Composio|Composio]] 的仪表盘，所以她给仪表盘做了一次「复盘」。

## 复盘第一幕：人类时代的工具地狱

2022 年，有人在 Slack 上报了个 bug。她要立刻开五个窗口：Slack 读上下文、Datadog 写查询、PostHog 查会话、VS Code 修 bug、GitHub 开 PR——五个工具、五套 UI,每次改版还得重新学。更烦的是每个工具都有自己的查询语言：Datadog 有自己的语法，JIRA 有 JQL,Slack 有搜索修饰符；甚至连同说 SQL 的工具，SQL 也互不兼容 <button class="pd-ts" data-t="01:23" data-who="Sarah" data-en="I believe a postmortem is in order, shall we? The year is 2022. It is the dark ages." aria-label="回原文"></button>。

她的洞见是：你用过的每一个仪表盘、每一种冷门查询语言，本质上都是**你和数据之间的翻译装置**——因为另一端的机器听不懂你真正想要什么。你从来就不想要一个带查询语言的仪表盘，你想要的是答案 <button class="pd-ts" data-t="02:15" data-who="Sarah" data-en="And it gets worse because even when these tools claim to speak the same language, let's say SQL, they don't even agree on SQL. Every dashboard you've ever used, every weird, obscure query language ever written was a translation device between you and your data because the machines on the other end cannot understand what you actually wanted." aria-label="回原文"></button>。

## 复盘第二幕：闪光按钮与 MCP 都没解决根本问题

2023 年「闪光按钮」（各种 AI 产品里那个点击后让 LLM 帮你写查询的按钮）诞生，仪表盘变成 AI 原生——但前提是你的问题不需要超过两次数据库 join。后来 Anthropic 发布 [[MCP|MCP]]（一个让 AI [[智能体|智能体]]连接外部数据源的开放标准），你自己的智能体可以直接生成查询、替你执行、给你答案。

> 【背景】MCP 由 Anthropic 于 2024 年 11 月发布。

看起来问题解决了？远没有。Sarah 说，真接过十几个 MCP 服务器的人都知道现实是一团糟，原因有三个 <button class="pd-ts" data-t="03:43" data-who="Sarah" data-en="And it turns out that makes all the difference. If you've ever actually wired up a dozen MCP servers, you will know the reality is a mess. For three reasons." aria-label="回原文"></button>:

1. **智能体不会学习**。每次对话从零开始，它不记得昨天在 Slack 里把链接格式搞砸了，今天只会再搞砸一次。用 skills 打补丁只是创可贴——因为给的上下文越多，智能体反而越笨。
2. **工具一多模型就淹死**。接的服务器够多，等于把数千条工具定义直接倒进[[上下文窗口|上下文窗口]]。她说光 Composio 的 GitHub 工具包就有超过 200 个工具，模型会抓错工具、理不清该先调用哪个。
3. **每个应用都是孤岛**。每个 MCP 服务器只知道自己，任务一横跨两个应用(任务几乎总是这样)，拼装就是你的活儿。

一句话总结：MCP 给了智能体一扇通往每个应用的门，却让它们站在成千上万个彼此隔绝的房间里——没有地图，也没有记忆 <button class="pd-ts" data-t="04:45" data-who="Sarah" data-en="So the moment a task spans two apps, and like they always do, it is your job to piece that together. And so MCP gave agents a door into every app, but it left them standing in thousands of separate rooms with no map and no memory of ever being there." aria-label="回原文"></button>。

## Composio 的解法：给智能体一个专用界面

Composio 在 MCP 之上做了一层专为智能体设计的界面：把那些杂乱、文档稀疏、不断变化的 API,翻译成智能体真正爱用的东西。核心机制是 **Composio Search**——智能体先声明自己想完成什么任务，Composio 返回的不是一大堆工具定义，而是**恰好需要的工具，外加一份使用计划**。

她演示了修那个 Slack bug 报告的完整流程：只把 Slack 消息链接粘贴给 [[Claude|Claude]],说「用 Sentry 和 Datadog 找根因，开个 draft PR,不许出错」。Claude 声明三项子任务(取 Slack 消息、搜 Sentry 问题、搜 Datadog 日志)，Composio 对每项返回工具加计划——比如用 Slack 前得先找到频道 ID。

然后智能体并行拉取各数据源、扫描代码库，不到五分钟，带修复的 PR 就提交上来了 <button class="pd-ts" data-t="06:00" data-who="Sarah" data-en="Then it begins pulling from data sources in parallel, Datadog, Sentry, and it begins scanning the code base. Once it identifies the root cause, PR is up with a fix in less than five minutes." aria-label="回原文"></button>。她强调：没搭工作流、没写 skill 教它，就只是 Claude 在用 Composio 的 MCP。

第二个例子更见功力：她想看用户在 onboarding 时选择的行业分布，再深挖电商用户最爱用哪些工具集(Composio 把「应用」叫「工具集」)。这需要跨 PostHog 和 MetaBase 两个数据源。

Claude 的做法很聪明：查到用户 ID 后**直接保存结果，不把完整数据加载进上下文**；先在 MetaBase 里查 schema、抽样感受结构，有把握后用一个叫 Composio Remote Workbench 的工具，动态生成一条带正则的 SQL 查出所有匹配用户——同样全程不把全量数据塞进上下文窗口 <button class="pd-ts" data-t="08:22" data-who="Sarah" data-en="Then it makes some queries in MetaBase to get the database schema, sample some data, get a feel for how things are structured. And once it's confident, it actually uses a very cool tool called Composio Remote Workbench to dynamically generate an SQL query with a regex string to search for all those user IDs, again, without ever loading the entire thing into its context window." aria-label="回原文"></button>。几分钟内，跨两个数据源的答案就出来了。

效果可衡量：她展示了尚未发布的早期对比结果——同样的任务、同样的模型，Composio 对比 Claude 应用市场里各应用自带的原生 MCP,完成度有明显差距 <button class="pd-ts" data-t="06:30" data-who="Sarah" data-en="And the impact of designing for agents is measurable. So these are some early unreleased results comparing Composio against each app's own native MCP that's listed in the Claude marketplace." aria-label="回原文"></button>。

## 真正的教训：你在服务一个新物种

许多创业公司已经开始把落地页做成对 AI 友好(所谓 GEO,生成式引擎优化)，但很少有公司准备好让自己的**应用**被智能体使用。而趋势已经倒过来了：Composio 最早是帮开发者把热门应用变成智能体能用的工具，现在创业公司主动找上门，说客户在恳求一种通过智能体使用他们服务的方式 <button class="pd-ts" data-t="09:33" data-who="Sarah" data-en="But the humans are tired of dashboards and their agents are tired of poorly designed MCP servers. And now we're getting requests from startups saying their clients are begging for a way to use their services through their agents." aria-label="回原文"></button>。

她给所有正在构建产品的人的忠告：**你现在服务的是一个新物种的用户**。它们没有眼睛，不会点你的闪光按钮；它们带着一个目标和一套工具而来，只用一件事评判你——能不能把活干成 <button class="pd-ts" data-t="09:47" data-who="Sarah" data-en="You are now serving a new species of user. They don't have eyes. They are not going to click your sparkle button." aria-label="回原文"></button>。十年来我们造产品都为了人类好用，下一个时代属于对智能体好用的产品。

回到开场那一幕：她曾以为自己僵在仪表盘前是在落后，现在她把那一刻看作未来的预演。

## 本集带走

- **仪表盘和查询语言只是翻译装置**：用户要的从来是答案，不是界面。智能体能直接对话数据后，这一整层界面正在失去存在的理由。
- **裸接 MCP 服务器的三个坑**：智能体无记忆(每次从零开始)、工具定义一多就淹没上下文窗口、应用之间互不连通——跨应用任务还是得人肉拼。
- **「先声明任务、再取工具加计划」的模式**：让智能体说明要完成什么，按需返回少量工具和使用步骤，比一次性倒进几千条工具定义有效得多。
- **跨源查数据的关键是别把全量结果塞进上下文**：存中间结果、先摸 schema 再写精确查询，智能体也能做原本要仪表盘才能做的分析。
- **做产品的新评判标准**：智能体用户只看「能不能把活干成」——没有眼睛，不看你的 UI,不点你的 AI 按钮。

<div class="pd-sec pd-sec-q">全部金句 <span>13 条</span></div>

> <span class="qz">仪表盘已死。</span>  
> *The dashboard is dead.*  
> <span class="qm">—— Sarah Simionescu · [01:06]</span> ^q1

> <span class="qz">你用过的每一个仪表盘，每一种被写出来的奇怪、冷门的查询语言，都是你和你数据之间的翻译装置，因为另一端的机器无法理解你真正想要什么。</span>  
> *Every dashboard you've ever used, every weird, obscure query language ever written was a translation device between you and your data because the machines on the other end cannot understand what you actually wanted.*  
> <span class="qm">—— Sarah Simionescu · [02:15]</span> ^q2

> <span class="qz">你从来不想要一个带着该死查询语言的仪表盘。你想要的是答案。</span>  
> *You never wanted a dashboard where it's cursed query language. You wanted the answer.*  
> <span class="qm">—— Sarah Simionescu · [02:27]</span> ^q3

> <span class="qz">每次对话都是从零开始。它不记得昨天在 Slack 里把链接格式搞砸的事，所以今天它只会再搞砸一次。</span>  
> *Every conversation starts from zero. It has no memory of how it fumbled formatting links properly in Slack yesterday, and so it's just going to fumble again today.*  
> <span class="qm">—— Sarah Simionescu · [03:53]</span> ^q4

> <span class="qz">我们用 skills 来打补丁，但 skills 只是一张创可贴，因为你提供的上下文越多，智能体反而变得越笨。</span>  
> *And we patch this with skills, but skills is just a band-aid because agents become dumber with the more context you provide.*  
> <span class="qm">—— Sarah Simionescu · [04:01]</span> ^q5

> <span class="qz">拿我们来说，光是 GitHub 工具包就有超过 200 个工具。模型直接被淹没了。</span>  
> *I mean, our GitHub toolkit alone has over 200 tools. The model just drowns.*  
> <span class="qm">—— Sarah Simionescu · [04:17]</span> ^q6

> <span class="qz">所以 MCP 给了智能体一扇通往每个应用的门，却让它们站在成千上万个彼此隔绝的房间里，没有地图，也没有曾到过那里的记忆。</span>  
> *And so MCP gave agents a door into every app, but it left them standing in thousands of separate rooms with no map and no memory of ever being there.*  
> <span class="qm">—— Sarah Simionescu · [04:45]</span> ^q7

> <span class="qz">一旦它确定了根本原因，不到五分钟，带修复方案的 PR 就提交上来了。</span>  
> *Once it identifies the root cause, PR is up with a fix in less than five minutes.*  
> <span class="qm">—— Sarah Simionescu · [06:00]</span> ^q8

> <span class="qz">我们把你每天生活在其中的所有那些杂乱、文档稀疏、不断变化的 API,翻译成智能体真正爱用的东西。</span>  
> *We translate messy, sparsely documented, ever-changing APIs from all the apps that you live in every day into something that agents really love to use.*  
> <span class="qm">—— Sarah Simionescu · [06:56]</span> ^q9

> <span class="qz">但很少有公司真正准备好让他们的应用能被智能体使用。</span>  
> *But so few have really prepared their applications to be used by agents.*  
> <span class="qm">—— Sarah Simionescu · [09:11]</span> ^q10

> <span class="qz">但人类已经厌倦了仪表盘，而他们的智能体也厌倦了设计糟糕的 MCP 服务器。</span>  
> *But the humans are tired of dashboards and their agents are tired of poorly designed MCP servers.*  
> <span class="qm">—— Sarah Simionescu · [09:28]</span> ^q11

> <span class="qz">你现在服务的是一个新物种的用户。它们没有眼睛。它们不会去点你的闪闪发光的按钮。</span>  
> *You are now serving a new species of user. They don't have eyes. They are not going to click your sparkle button.*  
> <span class="qm">—— Sarah Simionescu · [09:44]</span> ^q12

> <span class="qz">而下一个时代属于那些对智能体易于使用的产品。</span>  
> *And the next era belongs to those that are easy for agents to use.*  
> <span class="qm">—— Sarah Simionescu · [10:05]</span> ^q13

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude、MCP、智能体 (agent)</span>
- [[2026-07-13-pg-the-complete-claude-stack-for-pms|产品经理驾驭 Claude 生态：用五层架构打造专属 AI 幕僚长]]<span class="pd-rz">同概念:Claude、MCP、智能体 (agent)</span>
- [[2026-09-14-eyeonai-the-hidden-algorithm-that-decides-which|当 AI 决定买什么软件：G2 的「信任层」生意]]<span class="pd-rz">同概念:Claude、MCP、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude、MCP、智能体 (agent)</span>
- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude、MCP、智能体 (agent)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude、智能体 (agent)</span>

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
