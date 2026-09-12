---
title: 从拒用 AI 到全面拥抱：Dioxus 团队的智能体编程实战课
podcast: 精选演讲
date: 2026-09-13
source_url: undefined
duration: "18:53"
type: episode
cover: "#64748b"
description: Dioxus 框架缔造者 Jonathan Kelly 讲述一支顶级 Rust 团队如何从质疑 AI 转向全面用智能体编程，以及他们踩过的坑。
guests: ["[[Jonathan Kelley]]"]
companies: ["[[Dioxys]]"]
concepts: ["[[智能体]]", "[[Rust]]", "[[Blitz]]", "[[提示词工程]]", "[[模糊测试]]", "[[测试]]", "[[软件架构]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-11-talks-building-ambitious-software-jonathan-kel#post","headline":"从拒用 AI 到全面拥抱：Dioxus 团队的智能体编程实战课","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-11-talks-building-ambitious-software-jonathan-kel","mainEntityOfPage":"https://talk.solomind.cc/2026-09-11-talks-building-ambitious-software-jonathan-kel","description":"Dioxus 框架缔造者 Jonathan Kelly 讲述一支顶级 Rust 团队如何从质疑 AI 转向全面用智能体编程，以及他们踩过的坑。","datePublished":"2026-09-13","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jonathan Kelley"},{"@type":"Organization","name":"Dioxys"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"Rust"},{"@type":"Thing","name":"Blitz"},{"@type":"Thing","name":"提示词工程 (prompt engineering)"},{"@type":"Thing","name":"模糊测试 (fuzzing)"},{"@type":"Thing","name":"测试 (tests)"},{"@type":"Thing","name":"软件架构 (architecture)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"从拒用 AI 到全面拥抱：Dioxus 团队的智能体编程实战课","item":"https://talk.solomind.cc/2026-09-11-talks-building-ambitious-software-jonathan-kel"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>从拒用 AI 到全面拥抱：Dioxus 团队的智能体编程实战课</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 从拒用 AI 到全面拥抱：Dioxus 团队的智能体编程实战课

<div class="pd-byl"><b>Jonathan Kelley</b> · Dioxus 框架缔造者 · 2026-09-13</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-11-talks-building-ambitious-software-jonathan-kel.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们确实不知道如何正确地使用这些工具，而且太容易变成我们所说的「垃圾代码炮」。</div><div class="a">— Jonathan Kelley <button class="pd-ts" data-t="06:45" data-who="Jonathan Kelley" data-en="We definitely did not know how to properly wield these tools, and it was way too easy to become what we call a slop cannon." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jonathan Kelley]]
>
> **公司** [[Dioxys]]
>
> **概念** [[智能体]] · [[Rust]] · [[Blitz]] · [[提示词工程]] · [[模糊测试]] · [[测试]] · [[软件架构]]

Jonathan Kelly 是 Dioxus 的创造者——一个用 [[Rust|Rust]] 语言写的跨平台应用框架（目标是像 React Native 那样一套代码跑多个平台，但性能是纯原生的）。五年前他用本科最后一个暑假启动了这个项目，如今它有近 37,000 GitHub 星、数百万下载、累计超过 2 亿终端用户，甚至被 Cognition 收购。但这场分享真正想讲的，是一支「顶级 Rust 工程师团队」如何从长期怀疑 AI，到彻底改变工作方式的故事。

## 他们的起点：AI 写的代码全躺在草稿里

Dioxus 团队一直认为「交付高质量代码」和「用[[智能体|智能体]]编程工具」不兼容，日常完全不碰 AI。转折发生在过去六个月：AI 编程智能体在 Rust 上突然变得非常强，他们兴奋地用爆了 Claude Code 订阅额度，产出数万行 Rust 代码——结果很少有代码能过他们「是否该合并」的质量门槛，成千上万行想要多年的功能和修复一直躺在草稿里。Kelly 承认，当时太容易变成他们所谓的「slop cannon」（垃圾代码炮）——疯狂生成、无法合入 <button class="pd-ts" data-t="05:39" data-who="Jonathan Kelly–06:45" data-en="Why do I say recently? Well, if you aren't aware, software engineering and development has taken a massive turn in the past six months. AI coding agents got really, really good, and specifically, they got really good at Rust." aria-label="回原文"></button>。

## 反直觉的发现：为人类做的易用性优化，智能体不在乎

反思后他们意识到一件讽刺的事：这些年他们拼命让 Dioxus 对人类开发者友好——好读、好写、好工具、好错误信息——而编程智能体根本不在乎这些。但 Dioxus 对智能体依然友好，原因是 Rust 本身难写：智能体替你承担开发负担、处理边界情况、跟借用检查器（Rust 中防止内存错误、对新手最劝退的机制）搏斗。

Kelly 的总结很有味道：「我们曾经努力降低的学习曲线，现在变成了一个特性。」

## 智能体真正擅长的三件事

**知识问题。** [[Dioxys|Dioxys]] 的很多难题本质是知识问题——团队不可能懂每个构建系统、每个操作系统、每个 API 的每个怪癖。

智能体能翻几千页文档、逆向工程 API，比任何个人都有耐心。最典型的例子：他们给 Dioxus 做了 Kotlin 和 Swift 插件，深度集成进构建系统——React Native 的同类功能（Turbo modules）花了好几年才做对，他们用智能体两三周就发布了，实现第一天就完成，剩下两周全花在真实设备[[测试|测试]]上。在自研渲染引擎 [[Blitz|Blitz]] 里，智能体对 CSS 规范熟到能立刻说出 Chrome 和 Safari 是怎么处理某个布局问题的，不用去翻 Apple 仓库深处的 WebKit 源码。

**用正确的方式做事。** 过去人类总按项目复杂度决定要不要走捷径；现在智能体让「用正确的方式、不取巧」变得可负担——这是相对过去做法的一个反转。

**平凡琐事。** 团队只有三个核心工程师，花在「验证压缩包解压出正确目录」上的每一分钟都是从架构思考里偷走的。

发布清单验证、bug 修复向后移植、保证文档质量，全部交给智能体。结果是：他们做到了每周甚至一周多次的发布节奏——以前他们对发布是害怕的。文档这块尤其受益：人类改代码不改注释，注释很快过时；让智能体检「每条文档是否如实描述了它说的东西」很容易。

## 还没到位的地方

**写测试。** Kelly 明确说自己还没百分之百信服用 AI 写测试。

智能体能给任何 API 轻松写出测试，但和人类一样写不出「对的测试」——你给它一个构造函数，它就去测那个构造函数，没意思。团队仍然手动列举测试条件、自己设计测试 API。不过有个例外他们很喜欢：**构建[[模糊测试|模糊测试]]工具**（fuzzing，即把程序置于数百万种包括恶意格式错误在内的输入下找崩溃）——智能体搭这类测试架子非常在行。

**架构仍是人的活。** 智能体速度极高，但「它们落地的基底不好，贡献也不会好」。

而且和人类工程师不同，智能体不怕随便大规模重构——功能不合身就直接发了。所以团队大部分开发时间现在花在思考架构和系统未来演进上。

「人类能写面条代码，智能体也能，只是更快。」

**意图传达。** 他们逐行审查每一个 PR（也收到大量陌生人贡献的 PR），发现用户向模型传达意图的能力相当差，很多解决方案是硬拼凑的。

智能体还读不了心思，仍然受限于文本媒介——「[[提示词工程|提示词工程]]是相当真实的」。但从另一个角度，什么都没变：读代码从来都比写代码重要。

## 结语

Kelly 的收尾：「代码现在很廉价，但质量不是。」软件工程师的工作从来不是往屏幕上堆代码行，而是为复杂问题设计优雅方案、提前十步思考系统演进、在需求变化中保持灵活性——这些没变，而且软件工程的门槛比以往任何时候都高。

## 本集带走

- **AI 代码过不了质量门槛，先怀疑工作方式而不是工具**：他们的数万行代码躺草稿，问题出在不会用，反思后才有产出。
- **智能体最适合「知识型难题」**：跨语言集成、文档检索、逆向 API 这类拼耐心和知识广度的活，几天顶几年。
- **难度可以是卖点**：Rust 难写反而成了智能体场景的优势，因为它把人类最痛的部分接走了。
- **别让智能体盲目写测试**：让它写测试用例多半平庸，让它搭模糊测试这类测试基础设施则非常值。
- **人的时间该花在架构和意图传达上**：基底不好智能体贡献也差；提示词质量直接决定实现质量。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">我们确实不知道如何正确地使用这些工具，而且太容易变成我们所说的「垃圾代码炮」。</span>  
> *We definitely did not know how to properly wield these tools, and it was way too easy to become what we call a slop cannon.*  
> <span class="qm">—— Jonathan Kelley · [06:45]</span> ^q1

> <span class="qz">我们努力让 Rust 对人类变得容易，而事实上，这并不重要。</span>  
> *We tried to make Rust easy for humans, and in fact, it didn't really matter.*  
> <span class="qm">—— Jonathan Kelley · [07:14]</span> ^q2

> <span class="qz">我们曾经努力降低的学习曲线，现在变成了一个特性。</span>  
> *The learning curve, which we fought to reduce, is now a feature.*  
> <span class="qm">—— Jonathan Kelley · [07:34]</span> ^q3

> <span class="qz">你交付的速度建立在你构建的这份基底之上，如果基底不好，你在上面构建的任何东西都不会好。</span>  
> *The velocity that you ship lays down on this substrate that you've built, and if the substrate isn't good, nothing you build on top is going to be good.*  
> <span class="qm">—— Jonathan Kelley · [08:53]</span> ^q4

> <span class="qz">我们用编程智能体大概两到三周就把它发布出来了，而且我们本可以更快。</span>  
> *We were able to ship this in like two to three weeks with coding agents, and we probably could have gone faster.*  
> <span class="qm">—— Jonathan Kelley · [11:03]</span> ^q5

> <span class="qz">它们可以轻松地为任何给定的 API 写测试，但和人类一样，它们无法写出正确的测试。</span>  
> *They can easily write tests for any given API, but much like humans, they fail to write the right tests.*  
> <span class="qm">—— Jonathan Kelley · [15:05]</span> ^q6

> <span class="qz">如果你的智能体代码所落地的底层基础不好，它们的贡献也会不好。</span>  
> *If the substrate on which your agent's code lands is bad, their contributions will be bad as well.*  
> <span class="qm">—— Jonathan Kelley · [16:15]</span> ^q7

> <span class="qz">就像人类工程师能写出面条式代码一样，智能体也能，只是现在更快了。</span>  
> *Just like human engineers can write spaghetti code, so can the agents, but now just faster.*  
> <span class="qm">—— Jonathan Kelley · [16:40]</span> ^q8

> <span class="qz">阅读代码一直以来都比编写代码更重要。</span>  
> *Reading code has always been more important than writing code.*  
> <span class="qm">—— Jonathan Kelley · [17:59]</span> ^q9

> <span class="qz">关于使用编码智能体构建有雄心的软件，我的结语是：代码现在很廉价，但质量不是。</span>  
> *So my closing thoughts on using coding agents to build ambitious software is that code is now cheap, but quality is not.*  
> <span class="qm">—— Jonathan Kelley · [18:07]</span> ^q10

> <span class="qz">软件工程师的工作从来都不只是把代码行放到屏幕上。</span>  
> *The job of a software engineer has never really been about putting lines of code on the screen.*  
> <span class="qm">—— Jonathan Kelley · [18:17]</span> ^q11

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同概念:Rust、智能体 (agent)、Claude Code</span>
- [[2026-09-09-pragmatic-building-codex-with-tibo-sottiaux|Codex 负责人亲述:OpenAI 内部如何造编程智能体]]<span class="pd-rz">同概念:Rust、智能体 (agent)、开源 (open source)</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:智能体 (agent)、Claude Code</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-03-twentyvc-20vc-nvidia-crushes-quarter-and-buys-hug|NVIDIA 962亿美元季度背后：智能体时代的资本与生存法则]]<span class="pd-rz">同公司:Cognition · 同概念:智能体 (agent)、开源 (open source)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同概念:智能体 (agent)、Claude Code</span>
- [[2026-02-19-lennys-head-of-claude-code-what-happens|Claude Code 负责人：写代码已被解决，下一步是什么]]<span class="pd-rz">同概念:智能体 (agent)、Claude Code</span>

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
