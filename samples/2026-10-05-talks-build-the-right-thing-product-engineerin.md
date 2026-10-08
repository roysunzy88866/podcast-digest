---
title: 当AI会写代码，工程师还剩什么？Kent C. Dodds 谈「做对的东西」
podcast: 精选演讲
date: 2026-10-08
source_url: undefined
duration: "55:10"
type: episode
cover: "#64748b"
description: 资深工程师与讲师 Kent C. Dodds 讲解：AI 拉平了实现能力后，工程师的价值在于判断该做什么。
guests: ["[[Kent C. Dodds]]"]
concepts: ["[[智能体]]", "[[产品工程师]]", "[[实现]]", "[[mom test]]", "[[验证]]", "[[最小切片]]", "[[变通办法]]"]
category: AI 编程
tags:
  - AI 编程
  - 产品方法
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-05-talks-build-the-right-thing-product-engineerin#post","headline":"当AI会写代码，工程师还剩什么？Kent C. Dodds 谈「做对的东西」","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-05-talks-build-the-right-thing-product-engineerin","mainEntityOfPage":"https://talk.solomind.cc/2026-10-05-talks-build-the-right-thing-product-engineerin","description":"资深工程师与讲师 Kent C. Dodds 讲解：AI 拉平了实现能力后，工程师的价值在于判断该做什么。","datePublished":"2026-10-08","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Kent C. Dodds"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"产品工程师 (product engineer)"},{"@type":"Thing","name":"实现 (implementation)"},{"@type":"Thing","name":"mom test"},{"@type":"Thing","name":"验证 (validation)"},{"@type":"Thing","name":"最小切片 (smallest slice)"},{"@type":"Thing","name":"变通办法 (workaround)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"当AI会写代码，工程师还剩什么？Kent C. Dodds 谈「做对的东西」","item":"https://talk.solomind.cc/2026-10-05-talks-build-the-right-thing-product-engineerin"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当AI会写代码，工程师还剩什么？Kent C. Dodds 谈「做对的东西」</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 当AI会写代码，工程师还剩什么？Kent C. Dodds 谈「做对的东西」

<div class="pd-byl"><b>Kent C. Dodds</b> · 开发者教育者 · 2026-10-08</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-05-talks-build-the-right-thing-product-engineerin.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">AI 改变了稀缺资源。做实现不再是稀缺的了。</div><div class="a">— Kent C. Dodds <button class="pd-ts" data-t="14:04" data-who="Kent C. Dodds" data-en="AI changes the scarce resource. It's no longer scarce to do implementation." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Kent C. Dodds]]
>
> **概念** [[智能体]] · [[产品工程师]] · [[实现]] · [[mom test]] · [[验证]] · [[最小切片]] · [[变通办法]]

[[Kent C. Dodds|Kent C. Dodds]] 写了十多年软件，2014 年从 BYU 毕业，2019 年起全职做技术教育。

这场工作坊上，他讲了 AI 时代软件工程师最需要的一项耐久技能——产品工程（product engineering）：不是把东西做出来，而是判断什么东西值得做。

## 代码不值钱了，判断力才值钱

Dodds 的核心论断只有一句话：**当 AI [[智能体|智能体]]拉平了[[实现|实现]]的门槛，差异化就变成了做对的东西**<button class="pd-ts" data-t="11:00" data-who="嘉宾" data-en="When AI agents level the implementation playing field, which they are actively doing, then the differentiator becomes building the right thing. Okay? I'll stop." aria-label="回原文"></button>。

他自己的经历就是注脚。

他的工作是教有经验的工程师学新技术，但今年圣诞假期他用了 AI 智能体后经历了两次存在危机：这东西写代码比我强。

一个写过 Vue 的有经验工程师，换到 React 项目根本不需要买课——指挥智能体干活就行，谁还在乎 useState 是什么。

他用射箭打比方：过去工程师苦练箭术，指哪打哪；现在的箭像装了制导装置，谁都能命中。

但靶子并不等值，真正的本事是知道哪个靶子值得打。

## 只会把工单变成代码的人，长得像智能体

Dodds 引用了他播客里多位嘉宾的话。Wayne Allen 说，产品关心的是做对的东西，工程关心的是把东西做对，而后者是前端的下游。

Julius Marming 则指出，难的是判断一个功能值不值得做、长期后果是什么。

如果有人问你什么就做什么，把一张工单变成一段实现——Dodds 说得直白：

那你在老板眼里「看起来太像一个智能体了」，非常容易被替代<button class="pd-ts" data-t="17:13" data-who="嘉宾" data-en="But guess what you look like when you're just taking a ticket and turning it into an implementation? If that's you, you look an awful lot like an agent to me. Oh, we're gonna play some music, I guess." aria-label="回原文"></button>。

Dax Rad（OpenCode 作者）的警告更扎心：新的编码智能体默认会去做错误的事情，产品变烂的速度比以往任何时候都快。

智能体会加速坏实践在代码库里蔓延，你得主动勒住它。

## 产品工程师和产品经理的界线在哪？

Dodds 强调他不是让大家转行当产品经理。[[产品工程师|产品工程师]]的工作，是把对用户需求的理解连接到技术决策上：

数据模型、工作流形状、可观测性、约束条件、失败模式、[[最小切片|最小切片]]。

这些决策为什么重要？因为改架构很贵。你也许觉得换数据库「不就是几百万个 token 的事」，但对团队和用户的影响是真实成本。

老板更愿意雇那个因为懂产品而第一次就做对的人。

Uncle Bob 讲过自己的经历：他给爬电线杆的修理工写软件，老板让他亲自上现场，看他挂在杆子上用软件，当场想到 30 个改进点。

Grady Booch 的总结是：工程判断力来自技术经验和对人真实需求的结合。

Instagram 是最小切片的经典案例：它最早叫 Bourbon，是个签到应用，团队观察用户行为后发现大家只在乎分享照片，于是砍掉其他一切。

结果众所周知。

## 想验证想法？别问你会用吗

工作坊现场观众投票选了一个练习题目：一个帮人快速挤进会议工作坊的应用。Dodds 带着大家用《The Mom Test》的方法验证它。

核心原则：不要让用户评估你的想法，也别让他们替你诊断问题。坏问题包括「你会用吗？」「这是个问题吗？」

——对方往往只想结束对话，什么都说是。书里管这叫讨恭维。

好问题问的是过去，不是未来<button class="pd-ts" data-t="41:48" data-who="嘉宾" data-en="Help me define the problem. Some better questions are, tell me about the last time this happened. And what did you do instead?" aria-label="回原文"></button>：
- 上一次遇到这事是什么时候？具体发生了什么？
- 你当时怎么办的？绕过它的办法是什么？

- 这个[[变通办法|变通办法]]花了你多少钱、多少精力？

最强的信号是：用户已经在花钱花力气用笨办法解决问题——那就是机会。

如果他记不清上次是什么时候、甚至干脆放弃了，那也是个信号，只是不是你想要的那个。

Dodds 还引 Don Norman 的观点：别问问题是什么，用户会告诉你症状，还会给你方案，而他们的方案跟你的方案一样不靠谱。

Norman 提出用户错误不存在——出错的往往是系统。1979 年三里岛核事故后他去调查，结论是操作员聪明称职，错在设计。

## 花了一年、120 万澳元，做出来没人用

Wayne Allen 在澳洲一家房地产公司的教训值得每个人记住：

团队花了整整一年做微服务架构，确保「全澳大利亚人同时登录都撑得住」，花了 120 万澳元（约合 90 万美元）——最后没有一个人用这个产品 <button class="pd-ts" data-t="46:39" data-who="嘉宾" data-en="And they spent a year working on this. It was like microservices, the whole thing. And after it was 1.2 million Australian dollars that they spent on this, which is like almost 900,000 US dollars, they ended up like nobody used it." aria-label="回原文"></button>。

他的反思是：**本可以两周就上线，集成先手动做，先测市场**。项目验证不只是产品经理的事。

如果一条功能需求没有附带任何验证依据，产品工程师就该回去问清楚：这是一次性实验，还是业务命脉？

这直接决定你在技术上做怎样的取舍。

还有一条实用的：一个人闷头做几周最容易自我说服这想法真棒。

拿给人看，如果对方不明白你为什么这么兴奋，注意那个感觉——那就是信号。

## 本集带走

- 当 AI 让实现变得廉价，稀缺资源变成了判断什么值得做，这是 Dodds 认为工程师最后需要学的技能。
- 只把工单转成代码的工程师，在组织眼里和智能体没有区别；理解用户问题的工程师才难被替代。
- 验证想法时问过去，不问未来：上次发生是什么时候？你怎么绕过去的？花了多少代价？
- 用户已经在花大钱用笨办法解决的问题，才是真机会；记不起来上次何时发生的，不是。
- 先上最小切片测市场，再谈架构—— Wayne Allen 的团队花 120 万澳元、一年时间，换来的产品无人使用。

<div class="pd-sec pd-sec-q">全部金句 <span>16 条</span></div>

> <span class="qz">AI 改变了稀缺资源。做实现不再是稀缺的了。</span>  
> *AI changes the scarce resource. It's no longer scarce to do implementation.*  
> <span class="qm">—— Kent C. Dodds · [14:04]</span> ^q1

> <span class="qz">所以更有价值的事情是决定构建什么，以及它一开始是否值得构建。</span>  
> *So the more valuable thing is deciding what to build, whether it's worth building in the first place.*  
> <span class="qm">—— Kent C. Dodds · [14:24]</span> ^q2

> <span class="qz">所以我们正从「我们能不能构建它」转向「它是否值得构建」。</span>  
> *So we're moving from can we build it to is it worth building.*  
> <span class="qm">—— Kent C. Dodds · [14:51]</span> ^q3

> <span class="qz">相对于执行而言，想法正变得更有价值。</span>  
> *Ideas are becoming more valuable relative to that execution.*  
> <span class="qm">—— Kent C. Dodds · [16:31]</span> ^q4

> <span class="qz">所以一名产品工程师能够认识到，即使完成了实现，如果它不能产生客户价值，你仍然可能是失败的。</span>  
> *So a product engineer is able to recognize that you can still fail after finishing the implementation if it doesn't produce customer value.*  
> <span class="qm">—— Kent C. Dodds · [17:33]</span> ^q5

> <span class="qz">把东西做对是做对的东西的下游。</span>  
> *Building the thing right is downstream of building the right thing.*  
> <span class="qm">—— Kent C. Dodds · [18:04]</span> ^q6

> <span class="qz">他说，我们新的编码智能体能力默认都会流向「做错误的事情」。产品从好变坏的速度比以往任何时候都快。</span>  
> *He says that the default place for our new coding agent abilities to go to is work on the wrong things. Products go from good to bad faster than ever.*  
> <span class="qm">—— Kent C. Dodds · [18:41]</span> ^q7

> <span class="qz">所以，放慢脚步、有意识地决定我们要往产品里加什么，以免它膨胀得过于荒谬，这是我们的责任。</span>  
> *It is our responsibility to slow down and be intentional about what we're adding to our product so it doesn't bloat up to something too ridiculous.*  
> <span class="qm">—— Kent C. Dodds · [19:14]</span> ^q8

> <span class="qz">所以如果你不小心，你就能更快地把坏东西做出来。</span>  
> *So you can move bad faster if you're not careful.*  
> <span class="qm">—— Kent C. Dodds · [19:32]</span> ^q9

> <span class="qz">这之所以重要，是因为如果你知道自己会在凌晨两点被叫起来处理问题，你就会非常用心地打造系统、打造你为智能体创建的游乐场，确保它们在实现功能时能够成功。</span>  
> *If you know that you're going to be paged at two in the morning to deal with issues, then you're gonna take a lot of care in the system, in the playground that you create for your agents to make sure that they're successful when they're implementing things.*  
> <span class="qm">—— Kent C. Dodds · [20:35]</span> ^q10

> <span class="qz">你可以极其快速地做错误的事情，还感觉自己取得了巨大的进展。</span>  
> *You can do the wrong thing incredibly fast and feel like you're making a ton of progress.*  
> <span class="qm">—— Kent C. Dodds · [20:48]</span> ^q11

> <span class="qz">这些人对自己的解决方案兴奋过头，以至于完全迷失了他们本来要为用户解决的问题的主线。</span>  
> *These people are so excited about their solution that they've totally lost the plot of the problem that they're trying to solve for users.*  
> <span class="qm">—— Kent C. Dodds · [25:18]</span> ^q12

> <span class="qz">让你在公司里作为工程师脱颖而出的一大方式，就是成为一个有产品思维的工程师。</span>  
> *A great way for you to stand out as an engineer at your company is to be a product-minded engineer.*  
> <span class="qm">—— Kent C. Dodds · [25:31]</span> ^q13

> <span class="qz">你作为产品工程师要做的事情之一，就是为你的下属构建一个能让他们成功的系统。</span>  
> *One of the things that you are doing as a product engineer is building a system for your underlings to be successful in.*  
> <span class="qm">—— Kent C. Dodds · [28:23]</span> ^q14

> <span class="qz">用户错误是不存在的。</span>  
> *User error does not exist.*  
> <span class="qm">—— Kent C. Dodds · [30:22]</span> ^q15

> <span class="qz">在我看来，如果你不是产品工程师，如果你没有产品感或设计感，那么随着智能体持续变得更能干，你会非常容易被取代。</span>  
> *If you're not a product engineer, if you don't have product sense or design sense, that's going to be really easy to replace you as the agents continue to get competent.*  
> <span class="qm">—— Kent C. Dodds · [36:15]</span> ^q16

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-05-27-devtools-cloudflare-devs|Cloudflare 三人聊：让模型直接写代码，别再堆工具了]]<span class="pd-rz">同公司:Cloudflare · 同概念:智能体 (agent)</span>
- [[2026-09-27-talks-no-that-s-not-a-software-factory-ryan-co|WorkOS 的软件工厂：别只盯着 AI 写了多少代码]]<span class="pd-rz">同公司:WorkOS · 同概念:智能体 (agent)</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-27-talks-what-it-actually-takes-to-build-a-softwa|软件工厂：让智能体闭环造软件，而不只是写代码]]<span class="pd-rz">同概念:想法验证 (validation)、智能体 (agent)</span>
- [[2026-08-26-talks-how-ai-agents-let-gtm-teams-scale-justin|Cloudflare 销售运营的 AI 三支柱：让市场进入团队效率翻倍]]<span class="pd-rz">同公司:Cloudflare · 同概念:智能体 (agent)</span>
- [[2026-09-02-bigtech-cloudflare-ceo-we-re-ready-to-block-mill|AI机器人流量已超人类：Cloudflare CEO谈网络的下一场豪赌]]<span class="pd-rz">同公司:Cloudflare · 同概念:智能体 (agent)</span>

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
