---
title: AI 写的代码越来越多，谁来负责把关？
podcast: 精选演讲
date: 2026-10-15
source_url: undefined
duration: "11:24"
type: episode
cover: "#64748b"
description: guitar.ai 创始人 Ali 讲 AI 时代代码审查为何成了瓶颈，以及如何用智能体把它全自动化。
guests: ["[[Ali-Reza Adl-Tabatabai]]"]
companies: ["[[guitar.ai]]", "[[Sonar]]"]
concepts: ["[[智能体]]", "[[代码审查]]", "[[CI-CD]]", "[[智能体运行时]]", "[[程序分析]]", "[[PR 验证]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-09-talks-ai-writes-more-prs-who-validates-them-al#post","headline":"AI 写的代码越来越多，谁来负责把关？","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-09-talks-ai-writes-more-prs-who-validates-them-al","mainEntityOfPage":"https://talk.solomind.cc/2026-10-09-talks-ai-writes-more-prs-who-validates-them-al","description":"guitar.ai 创始人 Ali 讲 AI 时代代码审查为何成了瓶颈，以及如何用智能体把它全自动化。","datePublished":"2026-10-15","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Ali-Reza Adl-Tabatabai"},{"@type":"Organization","name":"guitar.ai"},{"@type":"Organization","name":"Sonar"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"CI/CD"},{"@type":"Thing","name":"智能体运行时 (agent runtime)"},{"@type":"Thing","name":"程序分析 (program analysis)"},{"@type":"Thing","name":"PR 验证 (PR validation)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AI 写的代码越来越多，谁来负责把关？","item":"https://talk.solomind.cc/2026-10-09-talks-ai-writes-more-prs-who-validates-them-al"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 写的代码越来越多，谁来负责把关？</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 写的代码越来越多，谁来负责把关？

<div class="pd-byl"><b>Ali-Reza Adl-Tabatabai</b> · guitar.ai 创始人 · 2026-10-15</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-09-talks-ai-writes-more-prs-who-validates-them-al.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">要么你放慢速度,要求开发者非常仔细地审查每一个 PR,要么你对 PR 盖章放行,然后你冒着生产事故的风险。</div><div class="a">— Ali-Reza Adl-Tabatabai <button class="pd-ts" data-t="03:22" data-who="Ali-Reza Adl-Tabatabai" data-en="Either you slow down and ask developers to review every PR very carefully, or you rubber stamp PRs and you risk incidents in production." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Ali-Reza Adl-Tabatabai]]
>
> **公司** [[guitar.ai]] · [[Sonar]]
>
> **概念** [[智能体]] · [[代码审查]] · [[CI-CD]] · [[智能体运行时]] · [[程序分析]] · [[PR 验证]]

AI 让程序员写代码更快了，但一个新问题随之而来：==写出来的代码谁来检查==？Ali 是 [[guitar.ai|guitar.ai]] 的联合创始人，公司约一个月前被 [[Sonar|Sonar]] 收购。

他在一场演讲中给出自己的答案：用 AI 审 AI——一个[[智能体|智能体]]，把代码检查的全流程自动跑完，从提交到合并全程不用人管。

## 代码审查为什么突然成了瓶颈？

几乎所有软件团队都有一个集中的验证环节：持续集成加[[代码审查|代码审查]]。

这个环节把守着安全、合规、质量等所有关卡，是代码进入生产的必经之路 <button class="pd-ts" data-t="00:45" data-who="嘉宾" data-en="And so today I'm going to focus my talk on code and verifying code. So in almost all software teams, there is this centralized validation phase that is basically CI plus code review." aria-label="回原文"></button>。

麻烦在于，**团队越大，这一步越慢**。构建和测试的时间越来越长，评审流程跨越不同时区，基础设施的开销也越来越贵。

任何失败都会引入一个以小时甚至天计的外循环，开发者被打断心流，速度大减。

AI 把问题进一步放大了：现在生成的代码合并请求（PR）比以前更多、更大，全都可能有缺陷 <button class="pd-ts" data-t="03:00" data-who="嘉宾" data-en="In fact, AI kind of makes the problem even worse. You've got a lot of PRs now being generated, more PRs than before, thanks to AI, and bigger PRs, all of which can have defects." aria-label="回原文"></button>。

团队面临两难——要么放慢速度，让开发者仔细审查每个 PR；要么草草盖章放行，承担线上事故的风险。

不管选哪边，开发者都不开心，效率也不如预期。

## 答案是更多的 AI

guitar.ai 的做法是**让一个智能体把验证步骤全部自动化**，最终交付绿色的可以直接合并的 PR <button class="pd-ts" data-t="04:02" data-who="嘉宾" data-en="And basically, what we've got here is an agent that fully automates all the validation steps. And as outcomes, it delivers for you green PRs that are ready to merge or merge automatically." aria-label="回原文"></button>。

具体流程是这样的：你创建 PR 时，它先做审查，直接在代码旁贴出评论。

团队可以自定义规则和检查项，还可以设置「有未解决的问题就禁止合并」。

它还能分析持续集度的失败原因并给出总结——尤其擅长识别不稳定测试（flaky tests），也就是那种时过时不过、结果看运气的测试。

你甚至可以让它自动重试这类测试，据说这是最受欢迎的功能之一。

更进一步，它可以自动修复代码审查中发现的问题和构建失败。

你可以让它针对某个问题修，也可以让它自动循环修下去，直到 PR 变绿。

最后，你还能定义规则，让智能体自动批准并合并那些通过所有检查的 PR。

## 信任是一步步建立的

用户的使用路径很有意思：**没有人一上来就敢开全自动**。

典型的轨迹是：先只用它的审查功能，发现审查不仅准确，还能揪出真正重要的问题；然后给它牙齿，允许它拦截不合格的 PR；

接着开启自动修复，让 PR 自动变绿；最后才走到最关键的一跃——设置规则，让智能体自动批准和合并 PR <button class="pd-ts" data-t="06:41" data-who="嘉宾" data-en="And then where the real interesting leap is beginning to happen now is users setting up rules that define when the agent automatically approves and merges PRs. So over time, as they build trust in the system, they unlock more levels of automation." aria-label="回原文"></button>。

信任每上一个台阶，自动化的级别就解锁一层，从系统中获得的价值也就越多。

## 顺手还能看清整个团队在忙什么

因为系统用 AI 处理每一个 PR，**它顺带能产出一些以前拿不到的洞察**。

比如对持续集成失败的分类：开发者的失败到底是测试不稳定造成的，还是基础设施问题？这对平台团队非常有用。

再比如对 PR 本身的分类：整个工程团队的提交里，有多少是在开发新功能，多少是在修问题、做杂务和重构？

这类信息对管理层很有吸引力 <button class="pd-ts" data-t="07:34" data-who="嘉宾" data-en="We also have Another example of what else we have in terms of AI-enabled insights are categorization of PRs. What exactly is happening across your engineering team in terms of the PRs that are being landed?" aria-label="回原文"></button>。

## 智能体加传统分析，比单打独斗强

系统底层有 3 块：一个负责编排 PR 工作流的控制平面；

一个自研的智能体运行环境，处理多智能体执行、上下文和记忆管理、工具调用等，专门针对验证场景优化代币成本、精度和覆盖率，因此能按每个 PR 固定价格保证结果 <button class="pd-ts" data-t="08:36" data-who="嘉宾" data-en="And having this, having our own agent harness has really allowed us to optimize specifically for the validation use case. And it's allowed us to optimize for token costs, precision, and coverage of the agent itself." aria-label="回原文"></button>；

还有一个模型代理，负责在不同模型之间路由和故障切换。

被收购后，他们正把这套东西与传统[[程序分析|程序分析]]流程整合。

Ali 认为，把智能体和传统的程序分析——比如污点分析、控制流分析、数据流分析、软件成分分析——结合起来，**能以非常好的价位获得远超任何一方的精度和覆盖率** <button class="pd-ts" data-t="09:27" data-who="嘉宾" data-en="Taint analysis, control flow analysis, data flow analysis, software composition analysis, so all the traditional approaches combined with agents. We think there's a ton of opportunity here and that together you can get much better precision, much better coverage at a really great price point." aria-label="回原文"></button>。

## 本集带走

- AI 生成的代码让 PR 更多更大，传统的集中验证环节（持续集成加代码审查）成了新的瓶颈，失败代价以小时和天计。
- guitar.ai 的方案是一个智能体全流程自动化验证：审查、拦截、修复、重试不稳定测试，直到自动批准合并。
- 用户对全自动化的信任是渐进建立的：先看审查质量，再给拦截权限，再开自动修复，最后才启用自动合并。
- AI 处理每个 PR 的副产品是有价值的洞察：失败根因分类、PR 类型分布，分别服务于平台团队和管理层。
- 智能体验证加上传统程序分析（污点分析、数据流分析等），效果优于任何一方单独使用。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">要么你放慢速度,要求开发者非常仔细地审查每一个 PR,要么你对 PR 盖章放行,然后你冒着生产事故的风险。</span>  
> *Either you slow down and ask developers to review every PR very carefully, or you rubber stamp PRs and you risk incidents in production.*  
> <span class="qm">—— Ali-Reza Adl-Tabatabai · [03:22]</span> ^q1

> <span class="qz">于是他们给智能体装上牙齿,允许它开始拦截 PR。</span>  
> *So then they give teeth to the agent by allowing it to start blocking the PRs.*  
> <span class="qm">—— Ali-Reza Adl-Tabatabai · [06:12]</span> ^q2

> <span class="qz">然后现在真正有趣的飞跃开始发生,就是用户设置规则,定义智能体什么时候自动批准并合并 PR。</span>  
> *And then where the real interesting leap is beginning to happen now is users setting up rules that define when the agent automatically approves and merges PRs.*  
> <span class="qm">—— Ali-Reza Adl-Tabatabai · [06:29]</span> ^q3

> <span class="qz">所以这让我们能够在固定的 PR 价格下实质性地保证结果,同时给出非常好的质量。</span>  
> *So that allows us to essentially guarantee outcomes at a fixed PR price while giving really good quality results.*  
> <span class="qm">—— Ali-Reza Adl-Tabatabai · [08:43]</span> ^q4

> <span class="qz">这里存在巨大的机会:把智能体验证的思路与程序分析结合起来。</span>  
> *There's a ton of opportunity here in combining an agentic approach to validation with program analysis.*  
> <span class="qm">—— Ali-Reza Adl-Tabatabai · [09:06]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-27-talks-software-engineering-is-becoming-factory|软件工程正在变成「工厂工程」：Warp 创始人的自动化开发全景]]<span class="pd-rz">同概念:CI/CD、代码审查 (code review)、智能体 (agent)</span>
- [[2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo|Datadog 4000 人AI赋能实战：删掉上下文反而更好]]<span class="pd-rz">同概念:代码审查 (code review)、智能体 (agent)、CI/CD</span>
- [[2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi|DevOps 之父谈智能体开发：谁来管、怎么管、别踩什么坑]]<span class="pd-rz">同概念:CI/CD、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同概念:CI/CD、代码审查 (code review)、智能体 (agent)</span>
- [[2026-07-31-talks-fighting-slop-with-slop-vaibhav-gupta-bo|用 AI 对抗 AI：一种不用读代码的编程语言 BAML]]<span class="pd-rz">同概念:CI/CD、智能体 (agent)</span>
- [[2026-08-29-talks-from-tokenmaxxing-to-trusted-throughput|token 不是越省越好:用「可信吞吐量」优化 AI 开发的真 ROI]]<span class="pd-rz">同概念:CI/CD、代码审查 (code review)</span>

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
