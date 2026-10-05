---
title: AI 写代码太快的时代，验证才是新瓶颈
podcast: 精选演讲
date: 2026-10-03
source_url: undefined
duration: "11:06"
type: episode
cover: "#64748b"
description: Meticulous 联合创始人兼 CEO Gabe 演示如何在零人工投入下对前端代码做穷尽式验证，让团队按智能体写码的速度安全发布。
guests: ["[[Gabriel Spencer-Harper]]"]
companies: ["[[Meticulous]]"]
concepts: ["[[验证]]", "[[基于断言的测试]]", "[[代码覆盖率]]", "[[确定性]]", "[[pull request]]"]
category: AI 编程
tags:
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-02-talks-why-ai-didn-t-actually-make-you-ship-fas#post","headline":"AI 写代码太快的时代，验证才是新瓶颈","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-02-talks-why-ai-didn-t-actually-make-you-ship-fas","mainEntityOfPage":"https://talk.solomind.cc/2026-10-02-talks-why-ai-didn-t-actually-make-you-ship-fas","description":"Meticulous 联合创始人兼 CEO Gabe 演示如何在零人工投入下对前端代码做穷尽式验证，让团队按智能体写码的速度安全发布。","datePublished":"2026-10-03","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Gabriel Spencer-Harper"},{"@type":"Organization","name":"Meticulous"},{"@type":"Thing","name":"验证 (verification)"},{"@type":"Thing","name":"基于断言的测试 (assertion-based testing)"},{"@type":"Thing","name":"代码覆盖率 (code coverage)"},{"@type":"Thing","name":"确定性 (determinism)"},{"@type":"Thing","name":"pull request"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"AI 写代码太快的时代，验证才是新瓶颈","item":"https://talk.solomind.cc/2026-10-02-talks-why-ai-didn-t-actually-make-you-ship-fas"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 写代码太快的时代，验证才是新瓶颈</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 写代码太快的时代，验证才是新瓶颈

<div class="pd-byl"><b>Gabriel Spencer-Harper</b> · Meticulous CEO · 2026-10-03</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-02-talks-why-ai-didn-t-actually-make-you-ship-fas.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果你有穷尽式的验证，你就能以你的智能体写代码的速度发布代码。</div><div class="a">— Gabriel Spencer-Harper <button class="pd-ts" data-t="00:45" data-who="Gabriel Spencer-Harper" data-en="if you have exhaustive verification, then you can ship code at the speed that your agents write it." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Gabriel Spencer-Harper]]
>
> **公司** [[Meticulous]]
>
> **概念** [[验证]] · [[基于断言的测试]] · [[代码覆盖率]] · [[确定性]] · [[pull request]]

这一集是 [[Meticulous|Meticulous]] 的联合创始人兼 CEO Gabe 的现场演示演讲，主题只有一个：怎么[[验证|验证]] AI 写出来的代码。

他的开场判断很直接——如果你有穷尽式的验证，就能以智能体写代码的速度发布代码；如果没有，那组织里某个地方的人就得花时间验证，这成了新瓶颈，你被迫在发布速度和 bug、用户体验之间做取舍。而现实是：AI 写代码的速度已经比人类审查的速度快，审查和验证成了新的瓶颈。更麻烦的是，仅靠[[基于断言的测试|基于断言的测试]](就是提前写好「预期行为应该是什么」的测试)根本不够——不管人还是智能体多努力地事先在断言里定义软件的正确行为，可能的回归空间都太庞大，无法穷尽覆盖。

他给了一个很好的自查问题：如果组织里一名工程师用 AI 生成了一个 [[pull request|pull request]],你会放心点「合并并发布」吗？在大多数组织里，答案是不会——你还得去检查所有 feature flag、角色、权限、设置、配置和各种边缘情况，才能理解这次变更的完整影响。

## 现状带来的三个后果

第一个是逃不掉的 bug 和回归，直接影响业务。第二个是工程组织要花两位数百分比的时间维护端到端测试套件——手动验证、审查、调试 flake(时而随机失败的测试)、更新维护测试，全都在烧时间。第三个更微妙：如果真能拿到穷尽式验证，编程方式本身会变——突然之间你可以升级所有依赖、做大规模重构、满怀信心地接受任何 AI 生成的变更。

## 演示：它到底怎么工作

Meticulous 的做法：给非生产环境(本地、QA、dev、staging)注入一行 JavaScript。这段脚本对浏览器插桩，记录成千上万条用户工作流——点登录按钮、点设置面板、点分析面板等等。当你在 CI 上打开一个 pull request、启动 web 应用后，Meticulous 取这些录制工作流的一个子集，逐条回放每个事件，并在整个时间线的每个原子时刻截图——于是每条工作流都有变更前、变更后两个截图序列，再把两个序列做 diff,在合并代码之前告诉你：应用会有什么不同。

演示里有个例子：一次变更里有人改了名字，同时在某个下拉菜单里引入了一个错误。Meticulous 几分钟内就在 PR 上发评论，列出各处 diff——浅色模式下的名称变更、深色模式下的名称变更，以及那个逻辑错误的表现。

关键的产品哲学在差异本身：Meticulous **不会告诉你有没有 bug**。传统断言测试要求你预先用业务判断固化「正确行为」；而 Meticulous 只展示有什么不同，你在审查时运用判断——或者由智能体来判。

## 支撑它的三项关键技术

**一，所有外部依赖全被 mock 掉。** 录制时记录所有网络请求和响应，回放时 stub 进去。两个原因：让测试幂等——连跑一千次结果都一样；且每个测试彼此隔离，消除竞态条件，能水平并行，几分钟出结果。

**二，flake 少几个数量级。** 相比 Cypress 或 Playwright 这类测试工具，Meticulous 的 flake 极少，原因是从调度引擎层开始增强浏览器使其完全[[确定性|确定性]]——浏览器当初设计时根本没把确定性当目标，动画 spinner 会依赖 CPU 时钟速度、setTimeout 和 setInterval 的交错，全是随机性来源，他们把这些全部处理掉。

**三，最核心的：[[代码覆盖率|代码覆盖率]]最大化算法。** 要穷尽，就得覆盖每个 feature flag 组合、每个权限、每个角色、每条分支路径。他们的做法是：每条录制的会话先对 main 分支回放一次，监控哪些代码行被执行，建立「工作流 → 执行代码行」的索引，然后选出最大化全应用代码覆盖率的子集。

有意思的是他对代码覆盖率这个指标的态度：按他带立场的说法，覆盖率对世界上除 Meticulous 之外的每一个工具都是糟糕的指标——你可以写一个覆盖 100% 代码库但只做一次断言的测试，覆盖率不等于被测试过的代码。但在 Meticulous 这两者近似相等，因为他们做了件极不寻常的事：整个流程每个可能的时刻都截图。一个 412 步的流程里哪怕出现单个像素的 diff 也会被标出来。

## 三项技术是层层咬合的

他最后点明了整个系统为什么能成立:你之所以能获得穷尽验证，是因为代码覆盖率算法；那个算法真正有效，又是因为每个时刻都在截图——这意味着几千万到上亿张截图，按传统方式你会被噪声和 flakiness 淹没；所以必须从根源解决 flakiness,这正是增强浏览器那一步做的事。三层缺一不可。

## 本集带走

- **验证已成为 AI 编码时代的新瓶颈**：AI 写码速度超过人类审查速度，不解决验证，就必须在速度和 bug 之间取舍——先问自己「AI 生成的 PR 你敢直接合并吗」。
- **「展示差异」替代「预定义正确」**：与其在断言里预先固化正确行为(覆盖不全)，不如在合并前展示变更前后应用的一切差异，把判断留给审查者或智能体。
- **确定性是规模化的前提**：要让「每个时刻截图」可行，必须先从浏览器调度引擎层消除随机性，否则上亿张截图只会带来海量误报。
- **覆盖率算法决定穷尽程度**：录制真实用户工作流、映射到代码执行行、挑出覆盖率最大化的子集——这才是「穷尽」的真正来源。
- **外部依赖全 mock**:让测试幂等且互相隔离，才能并行跑到分钟级出结果。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">如果你有穷尽式的验证，你就能以你的智能体写代码的速度发布代码。</span>  
> *if you have exhaustive verification, then you can ship code at the speed that your agents write it.*  
> <span class="qm">—— Gabriel Spencer-Harper · [00:45]</span> ^q1

> <span class="qz">审查和验证现在成了新的瓶颈。</span>  
> *And review and verification is now the new bottleneck.*  
> <span class="qm">—— Gabriel Spencer-Harper · [01:57]</span> ^q2

> <span class="qz">所以无论人类或智能体多么努力地事先在断言里预先定义软件的正确行为，可能的回归空间都太庞大，无法穷尽覆盖。</span>  
> *So no matter how hard a human or an agent tries to define the correct behavior of software a priori upfront in assertions, the space of possible regressions is too vast to exhaustively cover.*  
> <span class="qm">—— Gabriel Spencer-Harper · [02:09]</span> ^q3

> <span class="qz">通常，按我们带立场的观点来说，代码覆盖率对世界上除 Meticulous 之外的每一个工具来说都是一个糟糕的指标。</span>  
> *Typically, I would say that code coverage in our opinionated view is a terrible metric for every tool in the world apart from meticulous.*  
> <span class="qm">—— Gabriel Spencer-Harper · [09:26]</span> ^q4

> <span class="qz">但在 Meticulous,这两者实际上近似相等，因为我们做了一件非常不寻常、非常激进的事：我们在整个流程中每一个可能的时刻都截取一张截图。</span>  
> *But with meticulous, it actually is approximately the same because we do this really unusual and radical thing, which is we're taking a screenshot at every possible moment throughout a flow.*  
> <span class="qm">—— Gabriel Spencer-Harper · [09:48]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-05-28-beyondcoding-addy-osmani-top-tier-software-engineers|从看护智能体到认知投降：工程师该守住什么]]<span class="pd-rz">同概念:验证 (verification)</span>
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|代码量暴涨8倍后，工程管理怎么办？]]<span class="pd-rz">同概念:验证 (verification)</span>
- [[2026-07-22-beyondcoding-aws-veteran-the-new-software-development|Heitor：用智能体重塑软件工程工作流的实操蓝图]]<span class="pd-rz">同概念:确定性 (determinism)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-03-changelog-forking-cal-com-to-closed-source|开源的钟摆摆向另一边：Cal.com 联合创始人 Pierre 谈 AI 时代的安全崩塌]]<span class="pd-rz">同概念:pull request</span>
- [[2026-09-03-nopriors-redefining-chip-architecture-with-arm-ce|Arm CEO 谈芯片、AI 与下一个十年的算力格局]]<span class="pd-rz">同概念:验证 (verification)</span>
- [[2026-09-03-talks-from-coding-to-knowledge-work-agents-kar|模型已经够好了，为什么智能体还只能写代码？]]<span class="pd-rz">同概念:验证 (verification)</span>

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
