---
title: 智能体为什么总是新员工？给它们造一个上下文引擎
podcast: 精选演讲
date: 2026-09-26
source_url: undefined
duration: "18:25"
type: episode
cover: "#64748b"
description: Unblocked 演讲者讲解为什么智能体缺少组织上下文就干不了真活，并现场演示上下文引擎如何让 Claude Code 的计划更快、更便宜、更准。
guests: ["[[Peter Werry]]"]
companies: ["[[Unblocked]]"]
concepts: ["[[Claude Code]]", "[[上下文引擎]]", "[[智能体]]", "[[上下文窗口]]", "[[代码评审智能体]]", "[[搜索满足感]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-27-talks-how-to-generate-mergeable-code-with-a-co#post","headline":"智能体为什么总是新员工？给它们造一个上下文引擎","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-27-talks-how-to-generate-mergeable-code-with-a-co","mainEntityOfPage":"https://talk.solomind.cc/2026-08-27-talks-how-to-generate-mergeable-code-with-a-co","description":"Unblocked 演讲者讲解为什么智能体缺少组织上下文就干不了真活，并现场演示上下文引擎如何让 Claude Code 的计划更快、更便宜、更准。","datePublished":"2026-09-26","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Peter Werry"},{"@type":"Organization","name":"Unblocked"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"上下文引擎 (context engine)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"代码评审智能体 (code review agent)"},{"@type":"Thing","name":"搜索满足感 (satisfaction of search)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"智能体为什么总是新员工？给它们造一个上下文引擎","item":"https://talk.solomind.cc/2026-08-27-talks-how-to-generate-mergeable-code-with-a-co"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>智能体为什么总是新员工？给它们造一个上下文引擎</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 智能体为什么总是新员工？给它们造一个上下文引擎

<div class="pd-byl"><b>Peter Werry</b> · Unblocked 演讲者 · 2026-09-26</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-27-talks-how-to-generate-mergeable-code-with-a-co.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">智能体就像新员工。每当你开始一个新任务时，它们的知识都会重置。</div><div class="a">— Peter Werry <button class="pd-ts" data-t="01:54" data-who="Peter Werry" data-en="Agents are like new employees. They reset their knowledge every time you start a new task." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Peter Werry]]
>
> **公司** [[Unblocked]]
>
> **概念** [[Claude Code]] · [[上下文引擎]] · [[智能体]] · [[上下文窗口]] · [[代码评审智能体]] · [[搜索满足感]]

把一个专家级工程师招进公司，但他每次接任务都是「第一次入职的新员工」——每次都要重新发现你的代码库、你们怎么做测试、怎么部署。这就是今天所有编程[[智能体|智能体]]的处境。这一场演讲的主角是 [[Unblocked|Unblocked]] 的一位演讲者（Unblocked 是一家构建「[[上下文引擎|上下文引擎]]」的公司），他讲的正是这个问题的解法：给智能体接上一个上下文引擎，为人类员工和智能体提供组织上下文。

## 智能体的真正瓶颈不是模型，是上下文

多年以来，人类工程师自己就是「上下文层」：在各个数据源、讨论串和代码库之间翻找，靠应对事故和写文档慢慢积累起「部落知识」。智能体面对同样的挑战，但更糟——它们每开始一个新任务，知识就重置一次。

演讲者给了一张「AI 成熟度曲线」：从早期 GPT 时代的自动补全（还记得 Copilot 吗），到 Cursor，再到试图解决上下文问题——有人建组织维基，有人给智能体配 MCP 和 skills 教它们怎么找信息。大多数人现在处于第四到第五阶段，已经意识到上下文是瓶颈。而终点是第八阶段的「软件工厂」：智能体要全面自动化，没有组织上下文根本无法运作，它们会迷失方向。

核心问题一句话：**获取信息不等于理解**。挂一个维基给智能体，它还是不知道需要的信息在哪。

而且它会患上放射科的「[[搜索满足感|搜索满足感]]」——看 X 光找到一个可疑病灶就停手，错过其他更重要的指标。智能体也一样：找到某个看似正确的东西，就停了。它们也不会提炼理解：能找到信息，却不明白各部分怎么拼合、依赖之间如何互动、架构规划会怎样约束接下来的工作。

那把整个代码库加架构文档全塞进[[上下文窗口|上下文窗口]]行不行？实践中不行：组织上下文远超百万 token 的窗口容量，而且会让智能体分心——干活需要的是针对任务的专注流，东张西望只会浪费 token 和时间。

冰山之下是智能体看不到的东西：真实意图、团队约定、过往决策、Slack 里讨论过的内容、架构背后的理由。这就是为什么智能体需要一个上下文引擎才能干真活。

## 现场演示：同一个问题，有没有上下文差别有多大

上下文引擎的第一层价值是服务人类——人类层并没有消失，最终问责止于人：你在 PR 上点合并之前，必须理解它在干什么。演示里问一个关于内部 SourceMark 引擎的问题，系统不仅能把架构讲清楚，连架构图都是根据代码现状现场推断生成的，还能给出未来架构提议。关键的是它「展示工作过程」——这首先是建立信任，其次如果答案不完全对，人可以去知识库里纠正。

然后是重头戏：同一个任务，让 [[Claude Code|Claude Code]] 生成优化 SourceMark 计算器的计划——

- **不带 Unblocked**：Claude Code 自己翻代码、推断算法，结论不错，但抓不住细微差别；耗时约两分钟，成本更高。
- **带上 Unblocked**：它抓住了团队在 PR 里讨论过的未来改进可能、Slack 对话、Notion 和架构文档，计划直击要害；总成本不到一美元，约一分钟。

而且这些来源会回传给 Claude,Claude 确切知道接下来该跳到哪里深挖。短任务上的差距还只是小头，真正的价值在**累积效应**：不带上下文时，智能体不仅要多花工作去发现东西，发现的还不是正确的东西——执行到深处才发现自己在错误的计划或假设上运行，然后返工、循环往复。「循环会累积，你必须全程让上下文保持高效」。

## 组织上下文不只是数据，还是智能

Unblocked 还有一个[[代码评审智能体|代码评审智能体]]。它从拉取请求数据里生成一系列最佳实践，帮助智能体与你的代码库对齐。

演示里它发表的意见让工程师 Richie 说「这像是我会说的话」——因为这确实是他之前说过的话，系统调出了他的历史评论。他们还用资历和专业度做信号，给重要评论加权。

更神奇的一幕：Richie 发现代码评审问题数量急剧下降，和 Unblocked 一起调试，追到底后让云端运行的 Unblocked 智能体去修——它不仅生成了修复 PR,还把因果关系讲清楚了：切换到 Claude 4 之后评审行为变了，问题才下降。它甚至找到了那段关联的 Slack 对话，把全部历史串起来，最终产出一个带完整上下文的 PR。

## 开源工具与你能上手的东西

演讲者最后给了几个可以直接玩的东西:

- **Document Query Engine**（开源）：跑在你的 GitHub 仓库上，摄取历史 PR,基于可采样的文档合成一个 schema,然后就能随意查询、通过智能体聊天获得各种洞察。
- **工程社交图谱**（开源）：从代码评审关系里聚类出团队结构和专家覆盖，连成线的就是互相评审代码的人。可以生成团队标签，也能看出哪里缺乏专家覆盖——这正是上下文引擎内部用的东西。
- **上下文引擎模拟器**：不想注册 Unblocked 也可以试，它对每个任务在后台构建上下文，再用/不用上下文各跑一遍，让你直观看差异。

收尾引用一位客户的话：「token 减少 50%,分类更快，答案更好。」

## 本集带走

- **智能体像每次都重新入职的新员工**：每个任务都重置知识，必须重新发现代码库、测试和部署方式——这是智能体干真活的根本瓶颈。
- **获取信息不等于理解**：挂维基没用，智能体会有「搜索满足感」（找到一个答案就停）也不会提炼理解；全塞进上下文窗口则容量不够且让智能体分心。
- **上下文的价值在累积而非单次**：带上组织上下文，生成计划更快更便宜；不带的话智能体会在错误假设上越走越深、返工循环。
- **「展示工作过程」是信任机制**：答案附上来源，人能核对并纠正，来源还能帮智能体自己决定下一步深挖哪里。
- **上下文引擎 = 数据 + 智能**：从 PR 历史提炼最佳实践、用资历做评论权重、用评审关系构建工程社交图谱找专家盲区——这些都能上手（开源的 Document Query Engine 和工程社交图谱，以及上下文引擎模拟器）。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">智能体就像新员工。每当你开始一个新任务时，它们的知识都会重置。</span>  
> *Agents are like new employees. They reset their knowledge every time you start a new task.*  
> <span class="qm">—— Peter Werry · [01:54]</span> ^q1

> <span class="qz">你可以把一个智能体想象成一位专家级软件工程师，但每次都是第一次入职的新员工。</span>  
> *You can think of an agent like an expert software engineer who's a new employee onboarding for the first time every time.*  
> <span class="qm">—— Peter Werry · [02:03]</span> ^q2

> <span class="qz">获取信息不等于理解。</span>  
> *Access to information doesn't equal understanding.*  
> <span class="qm">—— Peter Werry · [04:13]</span> ^q3

> <span class="qz">这就是为什么你的智能体需要一个上下文引擎才能完成真正的工作。</span>  
> *And that's why your agents need a context engine to get real work done.*  
> <span class="qm">—— Peter Werry · [06:59]</span> ^q4

> <span class="qz">循环会累积。而你必须在整个过程中都让上下文的使用保持高效。</span>  
> *The loops compound. And you have to be efficient the entire way through with your context.*  
> <span class="qm">—— Peter Werry · [12:25]</span> ^q5

> <span class="qz">token 减少 50%,分类更快，答案更好。而这正是上下文引擎能做到的。</span>  
> *50% fewer tokens, faster triage, better answers. And that's exactly what a context engine can do.*  
> <span class="qm">—— Peter Werry · [17:45]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-09-talks-your-agents-lack-context-here-s-how-to-f|差距不再是智能，而是上下文：给智能体造一个「上下文引擎」]]<span class="pd-rz">同公司:Unblocked · 同概念:上下文引擎 (context engine)、智能体 (agent)、MCP</span>
- [[2026-09-18-talks-total-recall-agent-memory-and-harness-en|模型是租的，harness 才是你的：拆解智能体的七层框架]]<span class="pd-rz">同概念:上下文窗口 (context window)、智能体 (agent)、Claude Code、MCP</span>
- [[2026-07-13-pg-the-complete-claude-stack-for-pms|产品经理驾驭 Claude 生态：用五层架构打造专属 AI 幕僚长]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)、MCP</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>

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
