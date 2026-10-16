---
title: 造好地基再上AI：Uber工程师的内部工具全景
podcast: The Pragmatic Engineer
date: 2026-10-16
source_url: undefined
duration: "93:17"
type: episode
cover: "#64748b"
description: Uber资深工程师 Uday 讲述公司近二十套内部AI开发系统，以及为何AI时代的红利属于早年打好地基的公司。
host: "[[Udaykira Mendicetti]]"
companies: ["[[Uber]]", "[[Minion]]", "[[上下文图]]", "[[DevPod]]", "[[模型网关]]", "[[MCP 网关]]", "[[AIFX]]", "[[Slate]]", "[[Capri]]", "[[Jaeger]]", "[[Michelangelo]]"]
concepts: ["[[智能体]]", "[[上下文工程]]", "[[代码审查]]", "[[Monorepo]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-14-pragmatic-ubers-ai-infra-from-the-inside#post","headline":"造好地基再上AI：Uber工程师的内部工具全景","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-14-pragmatic-ubers-ai-infra-from-the-inside","mainEntityOfPage":"https://talk.solomind.cc/2026-10-14-pragmatic-ubers-ai-infra-from-the-inside","description":"Uber资深工程师 Uday 讲述公司近二十套内部AI开发系统，以及为何AI时代的红利属于早年打好地基的公司。","datePublished":"2026-10-16","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Udaykira Mendicetti"},{"@type":"Organization","name":"Uber"},{"@type":"Organization","name":"Minion"},{"@type":"Organization","name":"上下文图 (context graph)"},{"@type":"Organization","name":"DevPod"},{"@type":"Organization","name":"模型网关 (model gateway)"},{"@type":"Organization","name":"MCP 网关 (MCP Gateway)"},{"@type":"Organization","name":"AIFX"},{"@type":"Organization","name":"Slate"},{"@type":"Organization","name":"Capri"},{"@type":"Organization","name":"Jaeger"},{"@type":"Organization","name":"Michelangelo"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"上下文工程 (context engineering)"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"Monorepo"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"造好地基再上AI：Uber工程师的内部工具全景","item":"https://talk.solomind.cc/2026-10-14-pragmatic-ubers-ai-infra-from-the-inside"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>造好地基再上AI：Uber工程师的内部工具全景</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 造好地基再上AI：Uber工程师的内部工具全景

<div class="pd-byl"><b>Udaykira Mendicetti</b> · Uber资深工程师 · 2026-10-16</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-14-pragmatic-ubers-ai-infra-from-the-inside.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">即使现在，我们的服务数量也差不多在类似的量级，尽管我们的业务大了 10 倍，我们在做多得多的产品。</div><div class="a">— Udaykira Mendicetti <button class="pd-ts" data-t="06:17" data-who="Udaykira Mendicetti" data-en="Even now, we are kind of in the similar ballpark of number of services, even though our business is 10 times larger, we are doing many, many more products." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Udaykira Mendicetti]]
>
> **公司** [[Uber]] · [[Minion]] · [[上下文图]] · [[DevPod]] · [[模型网关]] · [[MCP 网关]] · [[AIFX]] · [[Slate]] · [[Capri]] · [[Jaeger]] · [[Michelangelo]]
>
> **概念** [[智能体]] · [[上下文工程]] · [[代码审查]] · [[Monorepo]]

Uday 在 2015 年 5 月加入 [[Uber|Uber]]，是公司里任职最久的一批工程师之一，如今负责 Uber 内部的[[智能体|智能体]]（agent）AI 平台。

他在 The Pragmatic Engineer 这期节目里展示了几十个内部系统——从AI时代之前的 [[DevPod|DevPod]]、[[Slate|Slate]]，到最新的 [[Minion|Minion]]、[[上下文图|Context Graph]]、Fox——讲的其实是一个核心道理：

AI 编码工具本身不难买，难的是它周围的一切。

## 2015年的Uber只有两个服务，然后呢？

Uday 刚入职时，Uber 全公司只有两个服务：用 Node.js 写的 Dispatch，处理乘客和司机的全部流量；用 Python 写的 API，负责行程结束后的支付和收据。

随着业务狂奔，服务拆成了上千个微服务，团队也从约 600 名工程师涨到数千人 <button class="pd-ts" data-t="07:11" data-who="嘉宾" data-en="So when I joined, I was around the first 600 engineers. And in fact, the whole of marketplace team at that point used to be like maybe 50, 60 engineers. And over the next few years, as we've scaled our business, as we scaled our traffic, we grew to a few thousands of engineers." aria-label="回原文"></button>。

2018、2019 年前后，Uber 收了手：**统一用 Go 和 Java，把服务整合成数量更合理的平台**，至今维持单一全球技术栈。

这十年里被迫自建的工具清单很长：查资产归属的 UOwn、每秒处理约 5 亿指标的 M3DB、机器学习平台 [[Michelangelo|Michelangelo]]、工作流引擎 Cadence、实验平台 Morpheus。

其中不少后来开源，Temporal 的前身思路就出自 Cadence <button class="pd-ts" data-t="11:11" data-who="嘉宾" data-en="You could see a lot of engineers doing their own resiliency stuff, their own state management, and that gave rise to Cadence, which is a durable workflow engine, and later even that got open sourced." aria-label="回原文"></button>。

## 为什么说AI是站在十年地基上的？

这是全期最重要的洞察。Uber 在 2017 年就做了 DevPod——云上的开发环境，每个大仓库配一台预装好构建缓存的远程机器。

到了AI时代，智能体恰好需要一模一样的东西：能跨仓库读代码、能跑构建和测试的云端工作区。

Uber 直接把所有仓库合并成一个超大 DevPod给编码智能体用，Claude Code、Codex 等工具开箱即装 <button class="pd-ts" data-t="17:35" data-who="嘉宾" data-en="Like Claude Code, Codex, OpenGo, they're all there in the DevPod. So this made it really easy even for non-engineers in the company to create a DevPod and start playing with Claude Code, start playing with Codex out of the bat." aria-label="回原文"></button>。

类似的故事反复出现。所有服务的接口早就有统一注册，所以 MCP 网关可以自动为几千个服务生成工具描述；

分布式追踪 [[Jaeger|Jaeger]] 十年前就铺好了，所以测试环境 Slate 能把指定测试账号的请求精确路由到某个分支。

主持人总结得很准：如果 Uber 没有 Slate 这类系统，智能体根本没法自我验证 <button class="pd-ts" data-t="65:24" data-who="嘉宾" data-en="I think if we did not have a system like Slate, it could have been really hard for agents to self-validate. Then you cannot automate this thing. And as you said, this kind of stuff really helps." aria-label="回原文"></button>。

## 模型会换、工具会换，所以先建中间层

AI 变化太快，Uber 的策略是把所有基础组件做成不绑定任何模型、任何编码工具的。

[[模型网关|Model Gateway]] 从 2023 年就上线，**全公司每一个模型请求都必须经过它**——安全审查、审计日志、按人按项目的成本归因都在这一个口子上 <button class="pd-ts" data-t="23:35" data-who="嘉宾" data-en="Every model request at Uber goes through this. So there is no model request that doesn't go through this. So that gives us like one single entry point for across all the models." aria-label="回原文"></button>。

另一个叫 [[AIFX|AIFX]] 的封装层则包住所有编码工具：换工具不用重配，技能和设置自动同步。

还有 [[MCP 网关|MCP Gateway]]，把内部几千个服务和 Slack、Google 等外部工具统统变成智能体能调用的工具，同一套东西还能以命令行形式暴露。

现在每天有约 3 万次技能调用跑在这套体系上 <button class="pd-ts" data-t="35:39" data-who="嘉宾" data-en="And like, if I look at like in the last few weeks, there's around probably 30,000 skill executions per day. This is kind of interesting for me to see, because if you told someone like, oh, we're building a skills repo, like what most people would think inside a startup, right?" aria-label="回原文"></button>。

## 最有意思的新东西：给AI画一张全公司地图

Context Graph 是 Uday 最引以为傲的系统。它把公司里每个人、每个服务、每份设计文档、每次故障都连成一张图，有 100 多种节点、130 多种关系 <button class="pd-ts" data-t="39:02" data-who="嘉宾" data-en="We have 100 plus node types, 130 plus edge types, and this is live data as of three days ago. If you click on any person node, you know what assets they manage, what design docs they wrote." aria-label="回原文"></button>。

员工问「全球用现金支付的出行有多少单」，AI 助手先在图上定位到相关的人和表，再深入查数据，来回次数、成本、延迟都降了。

理由很直白：人手动写图数据库查询很难，但**智能体天生擅长在图里导航**——就像它们擅长用命令行翻文件系统一样 <button class="pd-ts" data-t="41:35" data-who="嘉宾" data-en="This makes it really efficient. Like it's much harder for us to manually write all of these cipher queries, but agents are really good at navigating the graph, like how they're really good at navigating file system with bash." aria-label="回原文"></button>。

## 15%的生产代码来自后台智能体

Minion 是 Uber 的后台编码智能体，目前**约 15% 上线的代码改动由它完成** <button class="pd-ts" data-t="50:00" data-who="嘉宾" data-en="So around 15% of all of the production PRs go through Minion right now. Essentially, you know, this whole bunch of PRs that some PRs engineers want to do interactively, but we also want to make it really easy." aria-label="回原文"></button>。在 Slack 里 @ 它、贴一个讨论串，它就能读完上下文、跨仓库生成代码改动。

值班工程师处理报障时，让 Minion 查根因、当场修复，省去了往待办清单里塞一条的循环。

验证环节同样交给机器：

智能体可以在隔离环境里自己部署分支、跑模拟器截图、对比改动前后的界面，生成报告附在代码改动里。

Uber 还为每个改动算风险分和影响范围，帮工程师决定哪些值得细看——目前每个改动仍须人审，但低风险的绿色通道自动合入已在规划中 <button class="pd-ts" data-t="59:08" data-who="嘉宾" data-en="every PR that that goes that goes in once the more confidence we get in our risk scoring and we can also back test it with years of data right we have all of this data and the more confidence we have in our AI code reviews then maybe for some class of low risk PRs we could enable we call it green lane like auto landing" aria-label="回原文"></button>。

## 工程师的工作变成了什么？

Uday 说，他任职以来从没见过工作方式变化这么剧烈。他现在做的代码改动比去年多得多，但核心技能变了：

给智能体搭好上下文、写清约束、同时在多个会话间切换、快速验证输出。

「**如果你没法快速验证、抓不住智能体代码里的坏味道，那你就是在往生产环境里塞隐患**。」<button class="pd-ts" data-t="87:00" data-who="嘉宾" data-en="Because if you're not able to verify the work and pick any code smells from the agent, then that's hard, then you're shipping some recreations into production, right?" aria-label="回原文"></button>

度量方式也在变。

Uber 不只看代码量，而是给每个改动打标签——是功能、修bug还是维护——发现功能类改动占比在上升、维护类在下降，说明方向对了 <button class="pd-ts" data-t="84:01" data-who="嘉宾" data-en="Luckily, like at least like right now, I can see our percentage of feature PRs is going up, our percentage of maintenance PRs is going down. So that gives us good indication that, okay, we're in the right direction." aria-label="回原文"></button>。

## 本集带走

- 编码智能体本身是容易的部分，难的是验证、路由、权限、成本追踪这些周边系统——它们决定了AI能否真正干活。
- Uber 2017 年建的云端开发环境、十年前铺的分布式追踪、统一的接口注册，几乎全部被AI复用：早打地基的公司上AI便宜得多。
- 全公司所有模型请求走同一个网关，换来统一的安全基线、审计和成本核算；每天约 3 万次技能调用。
- 约 15% 的生产代码改动已由后台智能体 Minion 完成，人审仍是强制环节，但自动化风险评分正在为免审合入铺路。
- 工程师的新技能：[[上下文工程|上下文工程]]、多任务并行、快速验证智能体产出。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">即使现在，我们的服务数量也差不多在类似的量级，尽管我们的业务大了 10 倍，我们在做多得多的产品。</span>  
> *Even now, we are kind of in the similar ballpark of number of services, even though our business is 10 times larger, we are doing many, many more products.*  
> <span class="qm">—— Udaykira Mendicetti · [06:17]</span> ^q1

> <span class="qz">Uber 的每一个模型请求都经过这里。</span>  
> *Every model request at Uber goes through this.*  
> <span class="qm">—— Udaykira Mendicetti · [23:32]</span> ^q2

> <span class="qz">比如，让我们手动写所有这些 cipher 查询要难得多，但智能体非常擅长在图上导航，就像它们非常擅长用 bash 在文件系统上导航一样。</span>  
> *Like it's much harder for us to manually write all of these cipher queries, but agents are really good at navigating the graph, like how they're really good at navigating file system with bash.*  
> <span class="qm">—— Udaykira Mendicetti · [41:35]</span> ^q3

> <span class="qz">目前大约 15% 的生产 PR 通过 Minion 完成。</span>  
> *So around 15% of all of the production PRs go through Minion right now.*  
> <span class="qm">—— Udaykira Mendicetti · [49:52]</span> ^q4

> <span class="qz">因为现在，我们内部讨论的不一定只是代码速度，而是功能速度。</span>  
> *Because now, we are internally talking about not necessarily just depth velocity, but feature velocity.*  
> <span class="qm">—— Udaykira Mendicetti · [83:07]</span> ^q5

> <span class="qz">所以感觉是，从 AI 中获得最多收益的公司，恰恰是那些在 AI 时代之前就有开发者平台团队的公司——至少在 Uber 这个案例中是这样。</span>  
> *So it feels like companies that are getting some of the most benefit from AI are the ones that have had developer platform teams pre-AI as well, at least in the case of Uber.*  
> <span class="qm">—— 嘉宾 · [92:54]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-21-talks-building-blocks-for-uber-s-software-fact|Uber 的智能体软件工厂:70% 的 PR 已经由 AI 写]]<span class="pd-rz">同公司:Context Graph、DevPod、MCP Gateway、Minion、Model Gateway、Uber · 同概念:智能体 (agent)</span>
- [[2026-08-28-talks-building-ureview-uber-s-multi-agent-code|Uber 用 AI 给 AI 评审代码:每周 2.5 万条评论是这样炼成的]]<span class="pd-rz">同公司:Uber · 同概念:代码评审 (code review)、智能体 (agent)</span>
- [[2026-09-22-ainativedev-dexter-horthy-why-we-stopped-trusting-ai|软件工厂的教训：不读代码的四五个月后，我们重写了整个产品]]<span class="pd-rz">同概念:上下文工程 (context engineering)、代码评审 (code review)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-09-talks-velocity-sickness-what-happens-when-your|速度病：当团队 10 倍速写代码却推不出产品，怎么治]]<span class="pd-rz">同概念:上下文工程 (context engineering)、智能体 (agent)</span>
- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同概念:代码评审 (code review)、智能体 (agent)</span>
- [[2026-09-30-talks-the-death-of-the-code-review-what-the-da|代码评审未死：人类从引擎变飞行员]]<span class="pd-rz">同概念:代码评审 (code review)、智能体 (agent)</span>

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
