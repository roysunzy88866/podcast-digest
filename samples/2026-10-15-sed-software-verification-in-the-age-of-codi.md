---
title: 代码越写越多，谁来抓那些没人想到的漏洞？
podcast: Software Engineering Daily
date: 2026-10-16
source_url: undefined
duration: "46:46"
type: episode
cover: "#64748b"
description: Antithesis 红队工程师 Carl Svera 讲解确定性仿真测试：如何让平台在 15 分钟内找出潜伏 10 年的并发漏洞。
host: "[[Sean Falconer]]"
cohosts: ["[[Carl Svera]]"]
companies: ["[[Antithesis]]", "[[Singlestore]]"]
concepts: ["[[SQLite]]", "[[确定性仿真测试]]", "[[分布式系统]]", "[[混沌工程]]", "[[模糊测试]]", "[[软件测试]]", "[[回归测试]]", "[[有状态系统]]", "[[测试驱动开发]]", "[[智能体]]", "[[AI]]"]
category: AI 编程
tags:
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-15-sed-software-verification-in-the-age-of-codi#post","headline":"代码越写越多，谁来抓那些没人想到的漏洞？","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-15-sed-software-verification-in-the-age-of-codi","mainEntityOfPage":"https://talk.solomind.cc/2026-10-15-sed-software-verification-in-the-age-of-codi","description":"Antithesis 红队工程师 Carl Svera 讲解确定性仿真测试：如何让平台在 15 分钟内找出潜伏 10 年的并发漏洞。","datePublished":"2026-10-16","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Sean Falconer"},{"@type":"Person","name":"Carl Svera"},{"@type":"Organization","name":"Antithesis"},{"@type":"Organization","name":"Singlestore"},{"@type":"Thing","name":"SQLite"},{"@type":"Thing","name":"确定性仿真测试 (deterministic simulation testing)"},{"@type":"Thing","name":"分布式系统 (distributed systems)"},{"@type":"Thing","name":"混沌工程 (chaos engineering)"},{"@type":"Thing","name":"模糊测试 (fuzzing)"},{"@type":"Thing","name":"软件测试 (software testing)"},{"@type":"Thing","name":"回归测试 (regression tests)"},{"@type":"Thing","name":"有状态系统 (stateful)"},{"@type":"Thing","name":"测试驱动开发 (test-driven development)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"AI"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"代码越写越多，谁来抓那些没人想到的漏洞？","item":"https://talk.solomind.cc/2026-10-15-sed-software-verification-in-the-age-of-codi"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>代码越写越多，谁来抓那些没人想到的漏洞？</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 代码越写越多，谁来抓那些没人想到的漏洞？

<div class="pd-byl"><b>Carl Svera</b> · Antithesis 红队工程师 · 2026-10-16</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-15-sed-software-verification-in-the-age-of-codi.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们越是把测试变成一件可以按程序化流程来做的事情，也就是说，测试越像程序化生成，工程师就越愿意使用它。</div><div class="a">— Carl Svera <button class="pd-ts" data-t="07:10" data-who="Carl Svera" data-en="the more we made testing something that you can do procedurally, so like the more testing could feel like procedural generation, the more likely engineers would like to use it." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sean Falconer]] · [[Carl Svera]]
>
> **公司** [[Antithesis]] · [[Singlestore]]
>
> **概念** [[SQLite]] · [[确定性仿真测试]] · [[分布式系统]] · [[混沌工程]] · [[模糊测试]] · [[软件测试]] · [[回归测试]] · [[有状态系统]] · [[测试驱动开发]] · [[智能体]] · [[AI]]

[[AI|AI]] 正在大量生成代码，而人类对其中很多代码只是草草一瞥，甚至根本没看过。

这意味着测试和验证的责任被前所未有地放大了。

[[Antithesis|Antithesis]] 是一家做软件验证的公司，本期 Software Engineering Daily 节目里，主持人 [[Sean Falconer|Sean Falconer]] 和该公司红队成员 [[Carl Svera|Carl Svera]] 聊了聊：

为什么测试一直是被低估的脏活，以及一种叫[[确定性仿真测试|确定性仿真测试]]的方法如何找到那些没人想到要去查的漏洞。

## 为什么最好的工程师从来不做测试？

Carl 说，大多数测试只测回归——你写完了某个功能，再写个测试把这个行为固化下来，确认它符合预期。

但最致命的故障往往藏在没人想到要检查的边角情况里，也就是未知的未知<button class="pd-ts" data-t="08:34" data-who="Carl" data-en="And rarely, it's actually really hard to write tests that test for the unknown, unknown part of the space, right? But that's sort of the most fun test. So I think that the reason why testing isn't something that we think of as being really, like, you don't want to put your best engineers on it is because we tend to write more tests in the, like, regression space where we're just having to encode behavior that already exists, as opposed to tests in the future space of what are the unknown," aria-label="回原文"></button>。

他之前在 [[Singlestore|Singlestore]]（前身叫 MemSQL）做了 10 年数据库，团队内部有个测试集群叫 Cyduck，支持程序化测试：

写一个测试，参数化输入空间后自动扩展成很多个测试。当测试变成一个工程谜题，工程师反而爱做。

反过来，只做[[回归测试|回归测试]]，就成了一件没人愿意投入的杂活。

## 有状态的系统，为什么特别难测？

Carl 把代码分成两类：纯代码和无状态代码，单元测试就够了。

但真正的大型软件几乎全是有状态的——它的行为取决于从启动到现在的全部输入历史，加上未来的输入，是一个巨大的空间。

测试这类系统，本质上是问「如果 A 发生，然后 B、C 这些坏事接着发生会怎样」。人写集成测试很容易，因为可以硬性规定事件顺序；

但要测试一个你不知道存在的问题，就得在每一步枚举所有可能的下一步，组合成指数爆炸的树。

[[分布式系统|分布式系统]]还叠加了大量非确定性——随机的时序、随机的调度。

所以大多数人退而求其次：测已知路径，或者做压力测试，随机轰炸一大堆时间线然后看聚合性质。

Netflix 推广的[[混沌工程|混沌工程]]就是这个思路的延伸：把压力测试搬上生产环境，让系统常年处于坏天气中，逼着可靠性提升 <button class="pd-ts" data-t="13:06" data-who="Carl" data-en="And then other people sort of copied from there. Yeah, I mean, Netflix essentially is doing stress testing at scale, like they're essentially scaling up stress testing to production, first of all, which is amazing." aria-label="回原文"></button>。

## Antithesis 的核心招数：让时间线可以分叉

确定性仿真测试（DST）有两个要素。第一是确定性：

你把软件部署到 Antithesis 平台（可以把它想象成一个 EC2 服务器那样的部署目标），软件看到的所有随机数、时间、事件顺序，都由平台注入，因此可以被精确复现。

第二是仿真：

因为一切可控，**平台可以回到运行历史的任意时刻，改变随机性，分叉出一条新的时间线**，像蝴蝶效应一样探索不同的演化路径 <button class="pd-ts" data-t="20:19" data-who="Carl" data-en="And since it's deterministic, we can go back to any point in that linear history, and we can branch and we can say, you know what, what we want to do is at this moment, we want to change randomness, for example." aria-label="回原文"></button>。

比如一个三节点的分布式系统，等一个节点崩溃后，从那个点分叉出大量时间线，试验节点恰好在新选举中途恢复会发生什么。

怎么决定往哪儿探索？

借鉴了[[模糊测试|模糊测试]]里的覆盖率引导：监控代码走了哪些分支，发现新行为密集的区域就集中火力，行为开始重复就换地方。

一个副产品是它特别擅长找线程竞争类的漏洞。

## 一个潜伏 10 年的漏洞，15 分钟找到

今年早些时候，[[SQLite|SQLite]] 曝出一个存在了 10 年的并发漏洞：

一个线程读了共享内存后休眠，另一个线程改了数据，它醒来后没有重新校验。窗口极窄，据说只有 Tailscale 这一个客户真正踩到过 <button class="pd-ts" data-t="26:07" data-who="Carl" data-en="But the thing is, is that the window on this was so, so, so tight that I believe only like maybe one SQLite big customer, it happened to be Tailscale, but one big customer ever like actually hit this bug." aria-label="回原文"></button>。

Carl 把打过补丁前的最后版本放进 Antithesis，只跑了一个循环执行插入和日志检查点的简单负载，**15 分钟后，模糊搜索就找到了这个漏洞**，并精确到触发它的具体操作顺序。

后来他又写了一个等概率执行所有 SQLite 操作的通用负载，还是 15 分钟就找到了。

调试工具也很讲究：因为平台控制所有执行的串行化，日志里事件的顺序就是真实顺序，不用猜谁先谁后。

你还可以随时 SSH 进仿真中的系统，回溯时间，用二分法定位数据库是在哪一步被污染的；

因果分析功能则让平台自动替你做这件事 <button class="pd-ts" data-t="30:56" data-who="Carl" data-en="The fourth tool that we have is called causality analysis, which is where we do that for you autonomously. So basically, if you find a bug and you're like, I want to figure out exactly when this bug was introduced into the system, we'll basically just binary search for you." aria-label="回原文"></button>。

## AI 写代码之后，测试反而更不能省

主持人提出一个关键判断：AI 生成的代码未必比人差，但人 barely 看过这些代码，责任就转移到了测试和验证上。

Carl 的应对思路是把[[测试驱动开发|测试驱动开发]]改成Antithesis 驱动开发：

普通测试驱动会让 AI 过拟合到具体测试用例上，而**仿真测试的目标是数据库永不损坏这类通用性质，AI 没法作弊**，只能写出最通用、最正确的实现 <button class="pd-ts" data-t="39:03" data-who="Carl" data-en="And with antithesis-driven development, I suppose, you end up with this interesting thing where you can't possibly overfit because antithesis is designed to find counter examples to whatever you give it." aria-label="回原文"></button>。

速度上也不亏：

默认 48 路并行，加上对 sleep 这类等待做时间快进，通常至少 48 倍加速，工作流引擎类代码甚至可达 1000 倍——15 分钟的运行可以覆盖数小时的仿真时间。

团队的做法是像波纹一样扩散置信度：

单个代码提交跑 15 分钟快速反馈，主干分支则整夜跑 12 小时压力测试，相当于模拟 3 个月的时间 <button class="pd-ts" data-t="41:47" data-who="Carl" data-en="And so we tend to have this like almost a propagation wave from PR where you're running relatively short tests, but you get feedback quickly to like your main integration branch, which has a propagation wave of confidence." aria-label="回原文"></button>。

Carl 甚至设想了一个更远的未来：

写代码像图像扩散模型生成图片一样——改一改规格说明，整个代码库重新扩散生成一遍，只要通过覆盖巨大状态空间的验证之网，就直接发布全新版本。

到那时，工程师的核心工作会变成两件事：写出极其精确的规格，以及保证验证覆盖所有可能的路径。

## 本集带走

- 最危险的漏洞藏在没人想到要测的边角情况里，而绝大多数测试只固化已知行为，测不了未知的未知。
- 确定性仿真测试的原理：让软件的一切随机性可控可复现，然后从历史任意时刻分叉时间线，像广度优先搜索一样探索整个状态空间。
- 混沌工程是把压力测试搬上生产；仿真测试是在受控环境里做同样的事，而且能精确复现和回溯。
- AI 大量生成代码、人不再逐行审查之后，工程投入应当从写代码重新平衡到规格说明和验证上。
- 用仿真测试驱动 AI 编程，可以避免 AI 针对具体测试用例过拟合，逼它写出通用而正确的实现。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">我们越是把测试变成一件可以按程序化流程来做的事情，也就是说，测试越像程序化生成，工程师就越愿意使用它。</span>  
> *the more we made testing something that you can do procedurally, so like the more testing could feel like procedural generation, the more likely engineers would like to use it.*  
> <span class="qm">—— Carl Svera · [07:10]</span> ^q1

> <span class="qz">但你能做的最好的测试，是那种能触及未来可能性空间的测试。</span>  
> *But the best kind of testing you can do is the one that can reach the space of like sort of future possibility.*  
> <span class="qm">—— Carl Svera · [12:23]</span> ^q2

> <span class="qz">而我一般的表述方式是，你只需要确保 mock 比可能发生的情况更糟糕。</span>  
> *And the way I generally frame this is you just need to make sure that the mock is worse than what can happen.*  
> <span class="qm">—— Carl Svera · [14:44]</span> ^q3

> <span class="qz">我不认为它改变了它。我认为它在相当大的程度上扩展了你需要测试的状态空间。</span>  
> *I don't think it changes it. I think that it opens up the state space that you need to test quite a bit.*  
> <span class="qm">—— Carl Svera · [15:37]</span> ^q4

> <span class="qz">通过能够对模拟进行分支、从任意一点以不同顺序尝试不同的事情，我们就有能力对你的软件的状态空间进行某种广度优先搜索。</span>  
> *And so by being able to branch the simulation and trying different things out in different orders from any point, we have the ability to sort of breadth first search the state space of your software.*  
> <span class="qm">—— Carl Svera · [21:56]</span> ^q5

> <span class="qz">15 分钟后，模糊测试器找到了那个确切的 bug，并把它缩小到了必须发生的精确操作顺序。</span>  
> *And 15 minutes later, the fuzzer found the exact bug, narrowed it down to the exact order of operations that had to occur.*  
> <span class="qm">—— Carl Svera · [26:48]</span> ^q6

> <span class="qz">也就是 Antithesis 驱动开发，我猜，你最终会遇到一个有趣的情况：你不可能过拟合，因为 Antithesis 的设计目的就是为你给它的任何东西找反例。</span>  
> *And with antithesis-driven development, I suppose, you end up with this interesting thing where you can't possibly overfit because antithesis is designed to find counter examples to whatever you give it.*  
> <span class="qm">—— Carl Svera · [38:51]</span> ^q7

> <span class="qz">你要解决的是非常通用的性质，比如数据库永远不损坏。而对这这些性质过拟合要难得多。</span>  
> *You're trying to solve like very general purpose properties, like the database never goes corrupt. And it's much harder to like overfit to those properties.*  
> <span class="qm">—— Carl Svera · [39:08]</span> ^q8

> <span class="qz">所以昨天，你发布的代码已经连夜跑了一个 12 小时的压力测试，在 antithesis 里模拟了相当于三个月的时间，到那时你就非常有信心不存在某种大的灾难性 bug。</span>  
> *So yesterday, the code you shipped has been run overnight on a 12 hour stress test, which simulated, you know, three months worth of time in antithesis, at which point you're very confident that there isn't some kind of like big catastrophic bug.*  
> <span class="qm">—— Carl Svera · [41:47]</span> ^q9

> <span class="qz">我认为工程在未来扮演的角色是，在规格说明上做到非常非常精确，能够以比我们现在更高的精度精确规定你想要什么。</span>  
> *I see the role of engineering in the future being one of being very, very precise in specifications, so being able to prescribe exactly what you want in higher precision than we currently do.*  
> <span class="qm">—— Carl Svera · [43:53]</span> ^q10

> <span class="qz">AI 生成非常大量代码的能力可能如此之强，以至于我们实际上可以把软件工程从一个迭代过程完全改变成一个几乎像扩散的过程。</span>  
> *the ability for AI to generate very large volumes of code may be so much that we could actually completely change software engineering from an iterative process to almost like a diffusion process.*  
> <span class="qm">—— Carl Svera · [45:29]</span> ^q11

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-04-22-beyondcoding-oss-expert-why-world-class-engineers-get|开源贡献的真正门槛：不是代码，是认知负荷]]<span class="pd-rz">同概念:AI、智能体 (agent)</span>
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|代码量暴涨8倍后，工程管理怎么办？]]<span class="pd-rz">同概念:智能体 (agent)、测试驱动开发 (test-driven development)</span>
- [[2026-09-11-talks-building-ambitious-software-jonathan-kel|从拒用 AI 到全面拥抱：Dioxus 团队的智能体编程实战课]]<span class="pd-rz">同概念:智能体 (agent)、模糊测试 (fuzzing)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-31-doac-top-white-house-advisor-why-big-tech-wan|David Freeberg：美国正在走向社会主义，但AI能开另一扇门]]<span class="pd-rz">同概念:AI、智能体 (agent)</span>
- [[2026-09-27-lennys-the-grief-loneliness-and-burnout|送出你的乐高？——Molly Graham 谈 AI 时代哪些职责该交出、哪些必须攥紧]]<span class="pd-rz">同概念:AI、智能体 (agent)</span>
- [[2026-09-30-talks-your-agents-are-in-solitary-confinement|别再当智能体的路由器：多智能体通信为什么这么难]]<span class="pd-rz">同概念:分布式系统 (distributed systems)、智能体 (agent)</span>

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
