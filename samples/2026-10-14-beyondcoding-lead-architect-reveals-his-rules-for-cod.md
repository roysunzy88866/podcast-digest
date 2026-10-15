---
title: 让 AI 写代码之前，先把架子搭好：一位资深架构师的智能体工作法
podcast: Beyond Coding
date: 2026-10-15
source_url: undefined
duration: "81:02"
type: episode
cover: "#64748b"
image: "/covers/2026-10-14-beyondcoding-lead-architect-reveals-his-rules-for-cod.jpg"
description: 资深工程师 Carlos Kelpbaum 做客 Beyond Coding，讲他如何给 AI 编程助手搭脚手架、定边界，以及他对协作消失的担忧。
host: "[[Carlos Kelpbaum]]"
concepts: ["[[智能体]]", "[[子智能体]]", "[[主智能体]]", "[[脚手架]]", "[[pull request]]", "[[上下文]]", "[[确定性语言]]", "[[Rust]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/covers/2026-10-14-beyondcoding-lead-architect-reveals-his-rules-for-cod.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-14-beyondcoding-lead-architect-reveals-his-rules-for-cod#post","headline":"让 AI 写代码之前，先把架子搭好：一位资深架构师的智能体工作法","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-14-beyondcoding-lead-architect-reveals-his-rules-for-cod","mainEntityOfPage":"https://talk.solomind.cc/2026-10-14-beyondcoding-lead-architect-reveals-his-rules-for-cod","description":"资深工程师 Carlos Kelpbaum 做客 Beyond Coding，讲他如何给 AI 编程助手搭脚手架、定边界，以及他对协作消失的担忧。","datePublished":"2026-10-15","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-10-14-beyondcoding-lead-architect-reveals-his-rules-for-cod.jpg","about":[{"@type":"Person","name":"Carlos Kelpbaum"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"子智能体 (sub-agent)"},{"@type":"Thing","name":"主智能体 (main agent)"},{"@type":"Thing","name":"脚手架 (scaffold)"},{"@type":"Thing","name":"pull request"},{"@type":"Thing","name":"上下文 (context)"},{"@type":"Thing","name":"确定性语言 (deterministic language)"},{"@type":"Thing","name":"Rust"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"让 AI 写代码之前，先把架子搭好：一位资深架构师的智能体工作法","item":"https://talk.solomind.cc/2026-10-14-beyondcoding-lead-architect-reveals-his-rules-for-cod"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>让 AI 写代码之前，先把架子搭好：一位资深架构师的智能体工作法</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 让 AI 写代码之前，先把架子搭好：一位资深架构师的智能体工作法

<div class="pd-byl"><b>Carlos Kelpbaum</b> · 资深工程师 · 2026-10-15</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-14-beyondcoding-lead-architect-reveals-his-rules-for-cod.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">你和你的智能体一起工作，但你不再和你的团队一起工作了。</div><div class="a">— Carlos Kelpbaum <button class="pd-ts" data-t="02:25" data-who="Carlos Kelpbaum" data-en="You work together with your agents, but you don't work together with your team anymore." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Carlos Kelpbaum]]
>
> **概念** [[智能体]] · [[子智能体]] · [[主智能体]] · [[脚手架]] · [[pull request]] · [[上下文]] · [[确定性语言]] · [[Rust]]

AI 编程助手人人都在用，但用得好和用得差，差距正在拉开。

[[Carlos Kelpbaum|Carlos Kelpbaum]] 是一位写过 5 个编译器的资深工程师，也是主播口中「我认识的最优秀的工程师之一」。

这期 Beyond Coding 播客里，他把自己的[[智能体|智能体]]工作法全盘托出：核心不是让 AI 更快地写代码，而是人在动手之前，先想清楚结构。

## 为什么他觉得协作正在消失？

Carlos 观察到一个危险的趋势：开发正在变得越来越个人化。

以前大家靠代码评审、[[pull request|拉取请求]]互相评论来协作，现在「你和你的智能体一起工作，但不再和团队一起工作」<button class="pd-ts" data-t="02:25" data-who="嘉宾" data-en="And what I'm seeing is a more individual way of developing and lesser cooperation. You work together with your agents, but you don't work together with your team anymore." aria-label="回原文"></button>。

有人甚至说拉取请求可能会消失。

主播承认自己也变了：以前觉得开始最难，现在开始变得前所未有地容易。

他月底看着账户里的额度，睡前都会想还能做点什么，于是做了很多小游戏，甚至做了个能帮别人生成游戏的工具——但都不收尾、不打磨、不成产品。

Carlos 说这不是新问题，他写过 5 个编译器，真正完成的只有 1 个。

关键在于动笔前想清楚意图：如果只是为了玩，目的已经达到了；如果要做产品，就得把它做完。

## 脚手架：他的核心方法

Carlos 用智能体写代码时，仍然亲自创建目录结构和文件，在文件里写注释，甚至写好类名、函数签名。

这个准备过程可能花 20 分钟到 1 小时，他管它叫[[脚手架|脚手架]]。

为什么？因为智能体擅长一条路蛮干出解决方案，但忘了它和整个应用怎么配合。

放任不管，你会得到重复代码、内聚性问题和巨型对象。

他试过完全放手让智能体硬来，结果做了一两个月应用后，「**打开文件，你已经认不出自己的应用了**」<button class="pd-ts" data-t="15:48" data-who="嘉宾" data-en="Things start breaking. When you open up the files, you don't recognize your application anymore. You don't know what has happened." aria-label="回原文"></button>。

一个具体例子：他用一个月做一个编译器，最后让智能体自查，发现列表功能被实现了 5 遍。

## 主智能体为什么不许碰代码？

Carlos 的设置里，他直接对话的那个智能体永远不能改文件、不能动机器。

它的唯一职责是和他聊，教他或者被他教，聊过的内容存进一张分布式知识网络，下次会话还能取出来。

真正干活的是它派出的[[子智能体|子智能体]]。

这个规矩来自一次顿悟。

他曾在项目里问智能体对 John Cleese 谈创造力的演讲有什么看法，对方反问：「要不要我把这个实现到你的项目里？」

他突然意识到，这个东西满脑子只有「我现在能不能帮你写代码」<button class="pd-ts" data-t="63:46" data-who="嘉宾" data-en="A eye-opening moment of, wow, it's focused on only one thing. How am I ever going to get a good answer out of this thing if the only thing it looks at is, can I write the code for you?" aria-label="回原文"></button>。从那以后他禁止它这么干。

开工也有门槛：他用一个本地运行的小模型给智能体的理解程度打分，只有置信度超过 90%,才允许派子智能体去执行。

## 一次做多大？越大越好

和直觉相反，Carlos 的任务颗粒度能多大就多大。

原因是智能体「**不擅长做修改，擅长一次做完**」<button class="pd-ts" data-t="65:07" data-who="嘉宾" data-en="a part of a feature it can be a certain interface that you deepen out it can be a whole feature set that you work out has that changed do you go huge do you go small what are kind of the sizes i go as huge as possible really yes okay" aria-label="回原文"></button>——它们像是按一次性任务训练的，而不是按迭代开发训练的。

所以他把所有期望都在开工前敲定，然后放手让子智能体跑 12 个小时都无所谓。

但审查很严：跑一两个小时他就暂停，打开工作树看一眼，不对劲就整个推倒重来。

「看不懂的代码，我就扔掉」<button class="pd-ts" data-t="67:00" data-who="嘉宾" data-en="If I don't understand it, I throw it away. Okay. What is then that feedback cycle?" aria-label="回原文"></button>——因为他知道，看不懂就意味着它没按脚手架来，合并进去迟早会出问题。

## 用社交网络的思路管理上下文

智能体的[[上下文|上下文]]窗口不能太大，否则会幻觉、又贵。Carlos 的解法是把它当成社交网络来设计：

先找到信息节点，给每个节点配一条元数据（一行摘要、一个提交哈希、一个文件夹路径），再按相关性排序，必要时让人确认，然后一层层往深挖。

他还有个技巧：先让智能体看提交的差异，再看完整代码，算是热身。

这套东西用 Markdown 文件存节点和边，配合向量搜索加关键词搜索，刻意不放进图数据库，保持分布式。

## 他担心的事：一代人只会用工具，不会做工程

聊到行业前景，Carlos 明显忧虑。学校里软件工程的人数在下降，公司不再培养新人，评审流程也被 AI 淡化了。

「**我们在训练一代人使用工具，却没教他们怎么做**」<button class="pd-ts" data-t="51:56" data-who="嘉宾" data-en="And the only thought in my mind is that means we are training a generation to use a tool, but not use how to, and not teach them how to do it. And so if something happens, if the tokens become very expensive and we can't use them anymore, if for some reason AI disappears," aria-label="回原文"></button>。如果哪天推理变得太贵、或者 AI 出了问题，一切都会塌掉。

他把 AI 分成三层看：AlphaFold、机器人这类突破是真正的魔法；大语言模型极其好用但也极其浪费、耗能，像泡沫；

而权力集中到几家科技巨头手里，「AI 一直被宣传成伟大的均衡器，我没看到它在均衡什么」<button class="pd-ts" data-t="54:20" data-who="嘉宾" data-en="AI has always been sold as a great equalizer, and I don't see it equalizing yet. And I'm not sure if it will equalize. So there is a future where rich get richer and there's no equalization?" aria-label="回原文"></button>。

他的解法偏建设性：回归学习基本面。他自己就买过机器学习的书、亲手搭过神经网络，明白规模为什么重要。

有了底层理解，休假两周回来也不会觉得错过了什么。

## 本集带走

- 让智能体写代码前，先花 20 分钟到 1 小时亲手搭脚手架：目录结构、文件、注释、函数签名，能极大改善产出质量。
- 智能体擅长一次性完成大任务，不擅长后续修改——所以期望要在开工前敲定，任务颗粒度反而要大。
- 看不懂的代码直接扔掉重来，别合并进主库；审查的第一步只问这符合我的预期吗。
- 警惕协作退化：和智能体的交流替代不了和人的交流，代码是便宜了，但学习和评审不能省。
- 把非确定性的大模型尽量推向确定性输出——用脚本、用结构、用规则驯服它。

<div class="pd-sec pd-sec-q">全部金句 <span>16 条</span></div>

> <span class="qz">你和你的智能体一起工作，但你不再和你的团队一起工作了。</span>  
> *You work together with your agents, but you don't work together with your team anymore.*  
> <span class="qm">—— Carlos Kelpbaum · [02:25]</span> ^q1

> <span class="qz">我听过有人说，先问你的智能体，再来问我，这话说起来挺搞笑的，但也很可怕。</span>  
> *I've heard people say, ask your agent first before asking me, which is, it's kind of funny in a very horrible way.*  
> <span class="qm">—— 嘉宾 · [09:00]</span> ^q2

> <span class="qz">但智能体倾向于给你想听的答案。</span>  
> *But agents tend to want to give you the answer you want to hear.*  
> <span class="qm">—— Carlos Kelpbaum · [09:38]</span> ^q3

> <span class="qz">而且我认为那些先学会了、现在又在用智能体的人，会比那些没学过就直接用智能体的人更有优势。</span>  
> *And I think the people who have learned it and are now using agents will have an edge over people who have not learned it and are just using agents.*  
> <span class="qm">—— Carlos Kelpbaum · [12:51]</span> ^q4

> <span class="qz">因为我注意到并学到的是，智能体非常擅长用蛮力以一种方式硬凑出一个解决方案，但它们会忘记这如何融入应用的其余部分。</span>  
> *Because what I've noticed and learned is that agents are really good at brute forcing a solution one way, but they forget how it fits into the rest of the application.*  
> <span class="qm">—— Carlos Kelpbaum · [14:30]</span> ^q5

> <span class="qz">因为这些年我学到，你需要抵抗那种立刻得到东西的早期多巴胺冲击。</span>  
> *Because I've learned over the years that you need to resist that early dopamine hit of getting something immediately.*  
> <span class="qm">—— Carlos Kelpbaum · [19:21]</span> ^q6

> <span class="qz">我认为我们正处于需要一门新编程语言的边缘。</span>  
> *I think we are at the brink of needing a new programming language.*  
> <span class="qm">—— Carlos Kelpbaum · [23:01]</span> ^q7

> <span class="qz">我认为堆就是需要彻底消失。我们不需要指针。我们不需要动态内存。</span>  
> *I think the heap just needs to go completely. We don't need pointers. We don't need dynamic memory.*  
> <span class="qm">—— Carlos Kelpbaum · [23:21]</span> ^q8

> <span class="qz">代码很廉价。所以快速迭代，经常扔掉，直接重做。</span>  
> *Code is cheap. So iterate fast, throw away often, and just redo.*  
> <span class="qm">—— Carlos Kelpbaum · [43:52]</span> ^q9

> <span class="qz">所以我们不再训练我们的初级工程师了，因为我们只是给他们智能体。</span>  
> *So we're not training our juniors anymore because we're just giving them agents.*  
> <span class="qm">—— Carlos Kelpbaum · [51:22]</span> ^q10

> <span class="qz">而我脑中唯一的想法是，这意味着我们在训练一代人去使用一个工具，但没有教他们怎么用、如何去做。</span>  
> *And the only thought in my mind is that means we are training a generation to use a tool, but not use how to, and not teach them how to do it.*  
> <span class="qm">—— Carlos Kelpbaum · [51:44]</span> ^q11

> <span class="qz">AI 一直被宣传为一个伟大的平衡器，但我还没看到它在实现平衡。</span>  
> *AI has always been sold as a great equalizer, and I don't see it equalizing yet.*  
> <span class="qm">—— Carlos Kelpbaum · [54:18]</span> ^q12

> <span class="qz">因为我发现智能体不擅长做修改，而擅长一次性完成。</span>  
> *Because agents I found are bad at making changes and are good at doing it one shot.*  
> <span class="qm">—— Carlos Kelpbaum · [65:07]</span> ^q13

> <span class="qz">如果我直接把它合并进我的代码，以后它会反咬我一口。</span>  
> *It will bite me later if I just merge it into my code.*  
> <span class="qm">—— Carlos Kelpbaum · [67:41]</span> ^q14

> <span class="qz">如果大量代码是理由，那我们为什么不写更少的代码呢？</span>  
> *And if a large amount of code is the reason why, then why don't we write less code?*  
> <span class="qm">—— Carlos Kelpbaum · [72:06]</span> ^q15

> <span class="qz">人们往往忘记的一件事是，单元测试是很容易造假的。</span>  
> *And one of the things that people tend to forget is that a unit test is very fakeable.*  
> <span class="qm">—— Carlos Kelpbaum · [74:50]</span> ^q16

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-09-09-pragmatic-building-codex-with-tibo-sottiaux|Codex 负责人亲述:OpenAI 内部如何造编程智能体]]<span class="pd-rz">同概念:Rust、智能体 (agent)、开源项目 (open source)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-03-changelog-forking-cal-com-to-closed-source|开源的钟摆摆向另一边：Cal.com 联合创始人 Pierre 谈 AI 时代的安全崩塌]]<span class="pd-rz">同概念:拉取请求 (pull request)、智能体 (agent)、开源项目 (open source)</span>
- [[2026-09-10-thepeel-how-databricks-went-1m-to-7b-arr-in-10-y|从 100 万到 69 亿美元:Databricks 销售掌门人 Ron 的企业级增长实战]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)、开源项目 (open source)</span>
- [[2026-09-23-talks-building-the-document-context-layer-for|为 AI 智能体构建文档上下文层:LlamaIndex 谈 2026 年的 RAG]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)、Rust</span>

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
