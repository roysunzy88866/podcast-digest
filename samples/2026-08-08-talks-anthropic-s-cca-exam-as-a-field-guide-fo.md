---
title: 别迷信大上下文：拆解 Claude 认证架构师考试的反模式
podcast: 精选演讲
date: 2026-08-09
source_url: undefined
duration: "19:52"
type: episode
cover: "#64748b"
description: 资深讲师拆解 Claude 认证架构师考试的五大场景，点明智能体设计中最致命的反模式与正确做法。
guests: ["[[Frank Coyle]]"]
companies: ["[[Anthropic]]"]
concepts: ["[[Claude 认证架构师考试]]", "[[智能体]]", "[[循环]]", "[[停止原因]]", "[[反模式]]", "[[上下文溢出]]", "[[上下文分叉]]", "[[Model Context Protocol]]", "[[Claude Code]]", "[[LLM]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-08-talks-anthropic-s-cca-exam-as-a-field-guide-fo#post","headline":"别迷信大上下文：拆解 Claude 认证架构师考试的反模式","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-08-talks-anthropic-s-cca-exam-as-a-field-guide-fo","mainEntityOfPage":"https://talk.solomind.cc/2026-08-08-talks-anthropic-s-cca-exam-as-a-field-guide-fo","description":"资深讲师拆解 Claude 认证架构师考试的五大场景，点明智能体设计中最致命的反模式与正确做法。","datePublished":"2026-08-09","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Frank Coyle"},{"@type":"Organization","name":"Anthropic"},{"@type":"Thing","name":"Claude 认证架构师考试 (Claude Certified Architect Exam)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"循环 (loop)"},{"@type":"Thing","name":"停止原因 (stop reason)"},{"@type":"Thing","name":"反模式 (anti-patterns)"},{"@type":"Thing","name":"上下文溢出 (context spill over)"},{"@type":"Thing","name":"上下文分叉 (context fork)"},{"@type":"Thing","name":"Model Context Protocol"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"LLM"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"别迷信大上下文：拆解 Claude 认证架构师考试的反模式","item":"https://talk.solomind.cc/2026-08-08-talks-anthropic-s-cca-exam-as-a-field-guide-fo"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>别迷信大上下文：拆解 Claude 认证架构师考试的反模式</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 别迷信大上下文：拆解 Claude 认证架构师考试的反模式

<div class="pd-byl"><b>Frank Coyle</b> · 2026-08-09</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-08-talks-anthropic-s-cca-exam-as-a-field-guide-fo.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">问题是 LLM 做不了任何事。</div><div class="a">— Frank Coyle <button class="pd-ts" data-t="08:53" data-who="Frank Coyle" data-en="The problem is the LLM can't do anything." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Frank Coyle]]
>
> **公司** [[Anthropic]]
>
> **概念** [[Claude 认证架构师考试]] · [[智能体]] · [[循环]] · [[停止原因]] · [[反模式]] · [[上下文溢出]] · [[上下文分叉]] · [[Model Context Protocol]] · [[Claude Code]] · [[LLM]]

编程不再是通往工作的神奇路径了——因为 AI 来了。说这话的人是 [[Frank Coyle|Frank Coyle]]，一个教了 30 多年计算机科学、现在在伯克利教书的老师。面对被 AI 冲击的学生，他最近找到了一个帮助大家入门[[智能体|智能体]] AI 的抓手：[[Anthropic|Anthropic]] 在今年 3 月推出的 [[Claude 认证架构师考试|Claude 认证架构师考试]]。

在这一集里，他带大家拆解了这场考试到底在考什么。考试对个人开放，花 99 美元每半年能考一次。

它不是简单的选择题，而是基于真实的业务约束和场景。考纲分成五个领域：占 27% 的智能体架构、占 20% 的 [[Claude Code|Claude Code]] 配置与工作流、提示词工程（比如到处用 JSON 结构化输出）、工具设计与模型上下文集成，以及上下文管理和可靠性。

官方会给你提供六个生产场景，考试随机抽四个来考你。接下来我们就顺着这些场景，看看 Anthropic 认为什么才是合格的智能体设计。这一集的灵魂不在于教你怎么拿分，而在于点出那些会导致系统崩溃的[[反模式|反模式]]——弄懂了什么千万别做，你自然就知道该怎么做。

考试的第一个场景，是构建客户支持解决智能体。如今的 AI 圈子总爱把智能体挂在嘴边，Frank 提醒大家，大家追捧的所谓[[循环|循环]]（让模型不断执行、反馈、再执行的动作）根本不是什么新鲜事。

早在 1966 年，计算机科学家就证明了，只要你有顺序执行、条件判断和循环，就能做到图灵完备（即能计算出计算机所能计算的一切）。如今的智能体能变得这么强大，正是因为我们给它补上了循环这个关键拼图。

但有了循环，第一个反模式就来了：千万别让智能体闷头干完活，直接把结果拿过来就用。你要做的，是让程序去监控模型的“[[停止原因|停止原因]]”。

大语言模型本身做不了任何事，它只是个概率上的“下一个词预测器”，它没法自己执行工具。它真正做的，是把工具需要的参数提取出来交给你。所以当模型停下时，它返回的“停止原因”如果是工具使用，你的代码就得去真正运行那个工具，再把结果丢回给模型让它继续；如果“停止原因”显示 token（模型处理信息的最小单位）用完了，你就得知道这个回答是不完整的，必须采取干预措施 <button class="pd-ts" data-t="10:55" data-who="" data-en="Now, there's another reason why you need to make sure you check your stop reason. One of the stop reasons may be you have run out of tokens, and this response is based on partial when the LLM had to stop." aria-label="回原文"></button>。

说完了单兵作战的智能体，接下来的场景是：如果要多个智能体协同工作该怎么办？考试的第三个场景就是多智能体研究系统。

这里最大的反模式，是把所有工具都塞给同一个智能体。Frank 打了个比方：这就像你雇了个木匠来家里干活，结果他带着水管工、电工、木工的全套工具出现，说自己什么都能干。你真正需要的是专注干好一件事的专业木匠。

同样要命的，是让子智能体的[[上下文溢出|上下文溢出]]到主上下文里 <button class="pd-ts" data-t="13:11" data-who="" data-en="The other part of this is don't let your agents Context spill over into the main context because context means tokens, tokens mean money, and the more context you have, the more confused the LLM is gonna be in giving you an answer." aria-label="回原文"></button>。很多人觉得现在上下文窗口动辄上百万 token，大得装得下一切，于是就把所有东西都往里塞。

千万别这么做。因为上下文越多，意味着花钱越多，而且模型在给答案时也会越困惑、越不准。

Frank 特别提醒，当你把一群智能体凑在一起协作时，它们会产生像人类一样的群体思维（随大溜、不愿做破坏气氛的那个人）<button class="pd-ts" data-t="14:36" data-who="" data-en="When you get a bunch of agents together collaborating and talking to each other, there's a tendency to have group think. And all the agents seem to kind of devolve into one idea." aria-label="回原文"></button>。所以正确的做法是做子任务隔离：每个智能体只拿到完成自己任务所需的切片信息。比如让评论者智能体去审查某个主张，你只把主张和证据给它，千万别把它背后一长串的思维过程也丢进去，否则整个系统很容易被带偏。

工具和人都齐了，面对具体的开发任务该怎么管上下文？这就是考试第四个场景开发者生产力要解决的。

这里的核心反模式，是让每个子任务把它完整的输出全都倾倒进主线程里，导致上下文无限制地膨胀。正确的做法是执行[[上下文分叉|上下文分叉]]：把智能体赶到一个单独的线程里干活，无论它在那边怎么折腾、查了多少日志，那些庞杂的过程都不会回来污染主上下文。你只需要把最终提炼出的摘要带回来就行。

如果哪怕做了隔离，上下文还是不可避免地变大了怎么办？你可以监控 token 数量，当它超过比如 15 万时，主动运行一次压缩。

Anthropic 自带能把巨大上下文揉碎、浓缩的压缩算法 <button class="pd-ts" data-t="17:12" data-who="" data-en="So Anthropic and Claude have these compaction algorithms that take this giant context and compact it in some way, shape, or form. Not quite sure how the implementation is of that, but there is compaction." aria-label="回原文"></button>。如果你觉得官方的算法不够贴合业务，你完全可以自己写一套自定义的逻辑，决定哪些信息必须保留。

那么，写好了的 Claude 程序怎么进入日常的持续集成流水线？最后这个场景同样藏着反模式：千万别在自动化流水线里开启交互模式 <button class="pd-ts" data-t="18:20" data-who="" data-en="Always have interactive modes in a pipeline. No, no, no, because interactive modes mean Claude will stop and ask you, you want to do this, you want to do that, can I have permission for that?" aria-label="回原文"></button>。

因为一旦开启，Claude 会在半路上突然停下来问你：“我想做这个，行不行？”这在需要无人值守跑通宵的流水线里简直是灾难。

你要把它设置成一气呵成跑到底的模式。此外还有个省钱的实用技巧：如果不急要结果，你可以把任务打成一个批处理。

用这种方式，你能享受打对折的 token 成本——官方保证最迟在 24 小时内把结果交给你 <button class="pd-ts" data-t="18:46" data-who="" data-en="The batch. So you can take your prompts, you can take your work, and you can put them in a batch, and for 50% fewer token cost, you will get the result they promise in at least 24 hours." aria-label="回原文"></button>。你可以下班去睡觉、去度假，让任务自己慢慢跑就行。

## 本集带走

最后收个尾，这一集值得带走的是这么几层意思。第一，时代变了，计算机科学不再是包票，面对智能体 AI 的冲击，动手做、去实验才是唯一的出路。

第二，循环是智能体之所以拥有强大能力的基石，但在让循环转起来之前，一定要盯紧模型每一次停下来的“停止原因”，它是你判断该不该执行工具、或者有没有超限的关键信号。第三，也是最核心的一条，永远不要迷信那个庞大无比的上下文窗口。

不管你是在分配任务、调度子智能体还是处理子任务的输出结果，都要千方百计地做隔离、给切片、防溢出，必要的时候果断触发压缩。把多余的上下文挡在门外，你的系统才会又准又省钱。最后，上了流水线就彻底放手，去掉交互确认，用批处理换半价成本，这才是让 AI 真正替你打工的成熟姿势。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">问题是 LLM 做不了任何事。</span>  
> *The problem is the LLM can't do anything.*  
> <span class="qm">—— Frank Coyle · [08:53]</span> ^q1

> <span class="qz">上下文溢出到主上下文，因为上下文意味着 tokens，tokens 意味着钱，而且你有越多的上下文，LLM 在给你答案时就会越困惑。</span>  
> *Context spill over into the main context because context means tokens, tokens mean money, and the more context you have, the more confused the LLM is gonna be in giving you an answer.*  
> <span class="qm">—— Frank Coyle · [13:11]</span> ^q2

> <span class="qz">当你把一群智能体聚集在一起协作并互相交谈时，会有一种群体思维的趋势。</span>  
> *When you get a bunch of agents together collaborating and talking to each other, there's a tendency to have group think.*  
> <span class="qm">—— Frank Coyle · [14:25]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-02-19-lennys-head-of-claude-code-what-happens|Claude Code 负责人：写代码已被解决，下一步是什么]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude Code、智能体 (agent)</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude Code、智能体 (agent)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude Code、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude Code、智能体 (agent)、模型上下文协议 (model context protocol)</span>
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude Code、智能体 (agent)</span>
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|代码量暴涨8倍后，工程管理怎么办？]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude Code、智能体 (agent)</span>

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
