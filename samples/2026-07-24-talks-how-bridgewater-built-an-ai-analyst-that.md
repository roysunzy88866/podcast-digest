---
title: "桥水内部版 AI 分析师 PAT:把数小时研究压到几分钟"
podcast: 精选演讲
date: 2026-07-24
source_url: undefined
duration: "25:36"
type: episode
cover: "#64748b"
description: "桥水公布 PAT 系统:靠编译器思路与确定性智能体,把数天分析压到几分钟。"
host: "[[Brendan McManus]]"
companies: ["[[Bridgewater Associates]]", "[[PAT]]", "[[Claude Code]]", "[[LangGraph]]"]
concepts: ["[[智能体]]", "[[子智能体]]", "[[确定性]]", "[[编译器理论]]", "[[静态分析]]", "[[数据帧]]", "[[RAG]]", "[[基准测试]]"]
category: 智能体
tags:
  - 智能体
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>桥水内部版 AI 分析师 PAT:把数小时研究压到几分钟</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# 桥水内部版 AI 分析师 PAT:把数小时研究压到几分钟

<div class="pd-byl"><b>Brendan McManus</b> · 桥水应用AI团队负责人 · 2026-07-24</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-24-talks-how-bridgewater-built-an-ai-analyst-that.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">因此,将这种推理嵌入到我们的搜索智能体中,实际上让我们能够将准确率从大约 50% 提高到了 90。</div><div class="a">— SPEAKER_01 <button class="pd-ts" data-t="11:53" data-who="SPEAKER_01" data-en="So embedding this sort of reasoning into our search agent is actually something that got us up from roughly like 50% accuracy all the way to 90." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Brendan McManus]]
>
> **公司** [[Bridgewater Associates]] · [[PAT]] · [[Claude Code]] · [[LangGraph]]
>
> **概念** [[智能体]] · [[子智能体]] · [[确定性]] · [[编译器理论]] · [[静态分析]] · [[数据帧]] · [[RAG]] · [[基准测试]]

<div class="pd-tldr"><b>一句话</b>桥水公布 PAT 系统:靠编译器思路与确定性智能体,把数天分析压到几分钟。</div>

一家管理着千亿资金的50年老牌对冲基金,不靠终端命令行,而是把[[智能体|智能体]]编码当成「编译器」来做——把一份详细到极点的自然语言研究计划,像编译器处理代码那样,[[确定性|确定性]]地「编译」成 Python 脚本,还要保证两次跑出来的结果分毫不差。这就是桥水向数百位分析师推出的内部 AI 助手 [[PAT|PAT]]。

在这场技术分享中,桥水应用 AI 团队的三位成员——团队负责人 Brendan、投资负责人 Michael 和技术负责人 Santi——完整拆解了 PAT。我们会听到三块内容:第一,这家沉淀了 50 年投资规则的对冲基金为什么要建一个 AI 分析师;第二,PAT 具体怎么完成从查数据、出计划到并行生成代码并自我纠错的全流程;第三,他们最得意的架构洞察——为什么要把 AI 写代码看作编译器问题,而不是智能体问题。

先交代一下这工具的土壤。桥水的方法论核心是:每一笔交易,必须写下确切的因果逻辑规则 [01:30]。如果逻辑错了,别的投资者可以看着你写下的规则帮你纠正。几十年来,这些规则被划掉、重写、最终沉淀成既可机读又可人读的专家系统 [01:52]。这意味着,当 AI 时代到来时,他们根本不需要回头去为智能体整理语料——50 年的数据和上下文已经躺在那儿了 [02:16]。具体到工具 PAT(Pocket Analyst,口袋分析师),定位非常克制:它不负责交易,只做深度的探索性研究 [04:36]。

了解了它长在什么土壤上,接下来看它到底怎么干活。一份高质量的分析,一切从查数据开始。除了全网搜索,PAT 还能在内部那个每天涌入数千篇新文档、包含数百万份研报和纪要的非结构化数据库里翻找 [10:44]。查结构化时间序列数据(比如几十年的股价)时,团队发现一个关键细节:只靠 [[RAG|RAG]](检索增强生成,一种让模型先查资料再回答的技术)和重排序,准确率只有 50%;但如果像人类研究员那样,顺便检查数据的频率、货币,以及数值是否合理 [11:46],准确率能直接拉到 90%。

数据备齐,接下来才是最关键的一步。PAT 的核心信条是:计划即分析 [12:15]。它不会急匆匆去写代码,而是先跟投资者反复对齐——逼着平时不爱做规划的投资者,把模糊的研究意图,掰碎成一份详尽的计划。这份计划会精确列出需要产生哪些[[数据帧|数据帧]](data frame,数据表)、每个表的结构,以及这些表之间怎么连接 [12:49]。定计划虽然耗时,但这是团队主动付出的成本,为的是换取执行阶段的绝对确定性。

> 【背景】「数据帧」(data frame)是 Python 数据分析中常用的二维表格结构,类似 Excel 表;「子智能体」(subagent)指在主程序调度下专门负责单一任务的小型 AI。

把规划讲透了,难点才刚刚开始:怎么让 AI 照着这份计划写出不出错的代码?这正是技术负责人 Santi 要解决的问题。他的核心主张反直觉且大胆:别把 AI 写代码当成一个充满随机性的智能体问题,要把它当成确定性的编译器问题 [25:06]。

Santi 指出,代码智能体非常善变、不可预测,经常犯错,倒霉起来还会发疯删数据 [17:09]。在对冲基金动辄交易几十亿美元的背景下,绝不能指望 vibe coding(凭感觉编程)来托底 [17:25]。基于[[编译器理论|编译器理论]](要求绝对确定性)的灵感,他们彻底重构了架构。

首先是物理隔离。聊天智能体和写代码的智能体被完全拆开 [18:42]。理由很简单:投资者不是程序员,聊天界面必须纯粹谈投资。结果是,「写代码」在 PAT 里成了纯粹的底层实现细节,用户根本看不到代码 [18:57]。这不仅让聊天体验更纯粹,也让两个智能体的上下文互不污染,各自专精 [19:00]。

> 【背景】「确定性」(deterministic)指同样的输入永远得出完全相同的输出,不允许有任何随机性或偏差。

拆分了智能体,再看那套「编译器」怎么运作。PAT 拿到那份极其详尽的计划后,不是一步步串行去写代码,而是用[[子智能体|子智能体]]对全量任务进行并行的 LLM(大语言模型)生成 [21:19]。因为计划足够细,排在最后的可视化任务,在中间步骤的代码还没写出来时,就已经知道该调用什么数据了。这使得一个 20 个任务的大计划,跟一个 3 个任务的小计划,花的时间几乎一样 [21:46]。比传统串行模式快了约 4 倍。

更关键的纠错环节同样借鉴了编译器思路。代码写出来不是直接运行,而是先做[[静态分析|静态分析]],构建 DAG(有向无环图,一种表示任务依赖关系的结构),然后并行投入多个验证智能体 [22:15]。Santi 反复强调:这里没有任何「智能体编排」,全靠硬邦邦的常规 Python 代码控制流程——这意味着智能体「不可能忘记验证」,它们是被强制要求验证的 [22:42]。这套硬核机制换来了惊人的稳定性:面对测试套件,95% 的情况下,两个不同的智能体写出的代码,运行结果完全一样 [22:53]。

架构做到了确定性,最后一步的代码执行也迎来了额外红利。通常代码智能体是自己通过终端去调用自己的代码,不仅延迟高,还容易半路迷路 [23:22]。Santi 的团队换了个做法:他们搞了一套经典的静态分析管道,把缓存注释自动注入到 Python 代码里 [23:36]。好处在哪?投资者微调了某个图表的变量后,PAT 几乎瞬间就能出结果,因为它绝对不会去重复执行那些未改动的中间数据加载步骤 [24:10]。

## 本集带走
最后收个尾,这一集最值得带走的是他们对 AI 智能体工程的三个判断。第一,你得敢于把大而全的「超级智能体」拆掉。酷炫的万能智能体只能拿来做演示,真要进日常工作流,就得把它拆成极度狭窄的垂直任务,往死里做[[基准测试|基准测试]],然后再把它们组合起来——这才是可靠的工程化路径。第二,跟用户对齐时,「计划」本身就是最核心的分析。与其让模型直接给答案,不如逼着投资者把模糊想法拆成详尽到极致的计划,把成本前置到规划阶段。第三,也是最反直觉的一点:要想让 AI 写代码不出错,得把它当成编译器问题,而不是智能体问题。抛弃充满随机性的自由探索,用静态分析、并行生成、强制验证这些传统计算机科学里的老办法,反而能在对冲基金这种对确定性要求极高的地方,把 AI 真正落地成不可替代的生产力。

<div class="pd-sec">全部金句 <span>9 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">因此,将这种推理嵌入到我们的搜索智能体中,实际上让我们能够将准确率从大约 50% 提高到了 90。</span>  
> *So embedding this sort of reasoning into our search agent is actually something that got us up from roughly like 50% accuracy all the way to 90.*  
> <span class="qm">—— SPEAKER_01 · [11:53]</span> ^q1

> <span class="qz">在 Pat 的开发过程中,我们形成了这样的观点:计划即分析。</span>  
> *During Pat's development, we came to the view that the plan really is the analysis.*  
> <span class="qm">—— SPEAKER_01 · [12:10]</span> ^q2

> <span class="qz">代码智能体非常善变、不可预测,它们经常犯错,然后当你真的很倒霉时,它们会发疯并试图销毁你的数据以及其余的一切。</span>  
> *Coding agents are really fickle, unpredictable, they often make mistakes, and then when you're really unlucky, they'll go crazy and try and nuke your data and all the rest of it.*  
> <span class="qm">—— SPEAKER_02 · [17:00]</span> ^q3

> <span class="qz">在对冲基金,我们要试图交易数十亿美元,所以我们不能仅仅让 vibe coding 成为这些分析的基石。</span>  
> *At a hedge fund, we're trying to trade billions of dollars, and so we can't have just vibe code be the underpinning of how these analysis go.*  
> <span class="qm">—— SPEAKER_02 · [17:16]</span> ^q4

> <span class="qz">结果是我们拥有一个产品,其中编码是一个纯粹的实现细节。</span>  
> *And the result is that we have a product where coding is a pure implementation detail.*  
> <span class="qm">—— SPEAKER_02 · [18:51]</span> ^q5

> <span class="qz">另一个幸运的意外是你获得了未受污染的上下文,所以每个智能体都专精于其工作并自然改进。</span>  
> *And other happy accidents are that you get unpolluted context, so each agent becomes specialized in its job and naturally improves.*  
> <span class="qm">—— SPEAKER_02 · [19:00]</span> ^q6

> <span class="qz">你的用户很可能比你更擅长编写上下文。</span>  
> *Your user is better at writing context than you are, most likely.*  
> <span class="qm">—— SPEAKER_02 · [19:36]</span> ^q7

> <span class="qz">把智能体编码看作是一个编译器问题,而不是一个智能体问题。</span>  
> *thinking of agentic coding as a compiler problem, not as an agentic problem.*  
> <span class="qm">—— SPEAKER_02 · [25:01]</span> ^q8

> <span class="qz">所以我们并不真正相信通用的强大智能体。</span>  
> *So we don't really believe in generic powerful agents.*  
> <span class="qm">—— SPEAKER_02 · [24:33]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|把 AI 当员工来管理:Claire Vo 的九个智能体生活实战]] —— 同公司:Claude Code · 同概念:智能体 (agent)
- [[2026-07-13-pg-the-complete-claude-stack-for-pms|产品经理驾驭 Claude 生态：用五层架构打造专属 AI 幕僚长]] —— 同公司:Claude Code · 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|OpenClaw 创始人 Peter Steinberger：让智能体直接接管你的整台电脑]] —— 同公司:Claude Code · 同概念:智能体 (agent)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]] —— 同公司:Claude Code · 同概念:智能体 (agent)
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]] —— 同公司:Claude Code · 同概念:智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|SaaS 不会死,PM 迎来黄金期:Dan Shipper 的 AI 工作预测]] —— 同公司:Claude Code · 同概念:智能体 (agent)

</div>
</div>

*本集关键词:智能体架构 · AI 编译器 · 智能体专业化 · 并行代码生成 · 探索性研究*

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
    // 只搬搜索;阅读模式不并进顶栏(设计稿详情页顶栏只有分享+收藏,用户 2026-08-01 拍板摘掉)。
    ['.search'].forEach(function(sel){ grab(sel,acts); });
    // 深浅色进右栏末尾 —— 但右栏在窄屏可能不显示,槽跟着一起没了。
    // 只在槽真的看得见时才搬进去,看不见就退回顶栏(🔒 #2:任何屏宽都得有入口)。
    var side=document.querySelector('.right.sidebar'), slot=null;
    if(side){
      slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      // 同上:槽是空的(:empty → display:none),要判**右栏**看不看得见
      if(!(side.offsetWidth || side.offsetHeight || side.getClientRects().length)) slot=null;
    }
    grab('.darkmode', slot || acts);
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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); }
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
