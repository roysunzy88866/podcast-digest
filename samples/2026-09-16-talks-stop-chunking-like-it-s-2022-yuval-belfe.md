---
title: "分块没死:用多尺度索引把 RAG 提升 20-40%"
podcast: 精选演讲
date: 2026-09-19
source_url: undefined
duration: "17:52"
type: episode
cover: "#64748b"
description: "AI21 的 Yuval 论证不存在「最佳分块大小」——它是依赖查询的，并提出多尺度索引加 RRF 融合，把检索召回率提升 20-40%。"
guests: ["[[Yuval Belfer]]"]
companies: ["[[AI21]]"]
concepts: ["[[分块]]", "[[RAG]]", "[[智能体搜索]]", "[[多尺度索引]]", "[[RRF]]", "[[Oracle 实验]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-16-talks-stop-chunking-like-it-s-2022-yuval-belfe#post","headline":"分块没死:用多尺度索引把 RAG 提升 20-40%","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-16-talks-stop-chunking-like-it-s-2022-yuval-belfe","mainEntityOfPage":"https://talk.solomind.cc/2026-09-16-talks-stop-chunking-like-it-s-2022-yuval-belfe","description":"AI21 的 Yuval 论证不存在「最佳分块大小」——它是依赖查询的，并提出多尺度索引加 RRF 融合，把检索召回率提升 20-40%。","datePublished":"2026-09-19","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Yuval Belfer"},{"@type":"Organization","name":"AI21"},{"@type":"Thing","name":"分块 (chunking)"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"智能体搜索 (agentic search)"},{"@type":"Thing","name":"多尺度索引 (multiscale indexing)"},{"@type":"Thing","name":"RRF"},{"@type":"Thing","name":"Oracle 实验 (Oracle experiment)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"分块没死:用多尺度索引把 RAG 提升 20-40%","item":"https://talk.solomind.cc/2026-09-16-talks-stop-chunking-like-it-s-2022-yuval-belfe"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>分块没死:用多尺度索引把 RAG 提升 20-40%</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 分块没死:用多尺度索引把 RAG 提升 20-40%

<div class="pd-byl"><b>Yuval Belfer</b> · AI21 研究实验室 · 2026-09-19</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-16-talks-stop-chunking-like-it-s-2022-yuval-belfe.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">所以我要主张，如果我们必须干掉某个东西，如果有什么必须死，那很可能是检索调优。</div><div class="a">— Yuval Belfer <button class="pd-ts" data-t="02:40" data-who="Yuval Belfer" data-en="So I will claim that if we have to kill something, if something has to be dead, then it's probably retrieval tuning." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Yuval Belfer]]
>
> **公司** [[AI21]]
>
> **概念** [[分块]] · [[RAG]] · [[智能体搜索]] · [[多尺度索引]] · [[RRF]] · [[Oracle 实验]]

这一集是 [[AI21|AI21]](一家 AI 研究实验室)的 Yuval 带来的一场短演讲，聊的是大多数 [[RAG|RAG]] 从业者不爱谈的话题：[[分块|分块]](chunking,把长文档切成小段再建索引的做法)。当下流行的说法是「RAG 已死」，连坚持 RAG 没死的人(比如 LlamaIndex 的 CEO Jerry)也要顺手干掉点什么——而那个「点什么」就是分块：既然现在人人都在用[[智能体搜索|智能体搜索]](grep、ls、find 这类工具)，谁还需要认真分块呢？

Yuval 的回应分两步：第一，智能体搜索确实可能杀死了「检索调优」——每次查询时调 top K、玩混合搜索那套玩法；但当你数据量大、查询种类多时，grep 和 find 仍然不够，而且智能体搜索很烧钱。第二，真正该被认真对待的分块，恰恰被大家当成「无聊的管道工程」忽略了。

## 分块本质是一种有损压缩，而且没有正确答案

每个 RAG 系统都有两个阶段：无聊的索引阶段(预处理数据、定块大小、存进向量数据库)，和有趣的检索阶段(每次查询时做调优)。大家的做法通常是第一天选个块大小——比如 512,加 10-20% 的重叠(overlap,相邻块之间重复的部分)，建完索引就忘。

但块太大，你能拿到全貌却丢失细节，各块也得不到有意义的 embedding(把文本变成向量、让相似内容在向量空间里靠近的技术)；块太小，细节保住了，大局丢了。所以分块本质上是种有损压缩，怎么做都会丢东西。<button class="pd-ts" data-t="05:05" data-who="Yuval" data-en="And really it won't be as efficient. So what this tells us is that chunking is essentially a lossy compression. No matter what we're doing, we're losing something." aria-label="回原文"></button>

更有争议的主张是：**不存在正确的块大小**。你可能说「我们针对自己的语料库优化过」——但 Yuval 认为这不像调模型那样容易对基准过拟合，RAG 根本无法按数据集优化，因为最优块大小是**依赖查询的**。<button class="pd-ts" data-t="05:51" data-who="Yuval" data-en="It doesn't happen there. And you cannot really optimize it per dataset, and I will claim that it is query-dependent. And how can I be so sure?" aria-label="回原文"></button>

## 实验证据：Oracle 实验

他们拿数据集复制六份，每份用不同块大小(2000、1000……

)建库，用了四个数据集：QMSUM(会议转写)、NarrativeQA(小说问答)、FinanceBench,还有一个内部自建、已公开的 Seinfeld 剧本冷知识数据集。结果直观易懂：问「Jerry 最喜欢的衬衫叫什么」这种聚焦问题，小块大小表现最好(rank 1 对比 rank 50 以下)；而问「Jerry 把谁描述为他的宿敌和纯粹的邪恶」这种需要跨上下文理解的问题，小块根本找不到答案。两个性质不同的查询，最优块大小完全不同。

然后是关键的 [[Oracle 实验|Oracle 实验]]：假设有个精灵，能对每个查询直接告诉你用哪个块大小检索最好(这只是测潜力上限，不是真系统)。结果橙色的 Oracle 线远高于所有固定块大小的蓝线——**差距在 20% 到 40%**,而这仅仅来自一个很简单的分块策略选择。你随手定下的 512 或 1000,成本就是这么多。<button class="pd-ts" data-t="09:33" data-who="Yuval" data-en="The gap, which you can see between the orange line and all the blue lines, is big. And when I say big, it's something like 20 to 40 percent Just from doing strategy on chunking, and very simple strategy, may I add." aria-label="回原文"></button>

为什么没人做对？Yuval 把它归结为一个信息错位问题：索引阶段你能控制块大小，但不知道未来的查询是什么；检索阶段你手上有查询，但块大小已经定死了。<button class="pd-ts" data-t="10:10" data-who="Yuval" data-en="And what do I mean by that? If I'm looking at the indexing part, where I do have control over the chunk size, I don't know what the queries will be. I can guess, I can maybe estimate, I can try, but I don't know what the queries will be, so I cannot adjust my chunk size accordingly." aria-label="回原文"></button>

## 方法：多尺度索引 + RRF 融合

既然要押注，为什么要押一个而不押多个？他们的做法是**[[多尺度索引|多尺度索引]]**：把数据库复制 N 份，分别用不同窗口大小分块建索引；检索时对每份库都查一遍(可以完全并行，不增加延迟)。

难点在于怎么合并——不同大小的块彼此不可比。解法是不比较块，而是像如今很多 RAG 系统那样，拿到块后回溯取出**整个文档**，于是 N 个块排名变成了对同一批文档的 N 个排名，这就可比了。

「这种情况下，检索本质上就是投票。」<button class="pd-ts" data-t="12:48" data-who="Yuval" data-en="And this, we can compare. In this case, you can think of retrieval as essentially just voting. Pure re-ranking." aria-label="回原文"></button>

合并用的是 [[RRF|RRF]](Reciprocal Rank Fusion,倒数排名融合，一个把多个排名列表融合成一个的简单公式)，试过的几种方法里它效果最好，而且只是个几乎不花时间的简单脚本，不是模型。

## 结果与代价

在四个数据集上，该方法匹配或打败了最好的固定块大小，且在所有 recall@k(检索前 k 条的命中率)指标上都赢，很多项提升 20、30 甚至 40%;在博客里还有 MTab 上的结果，提升 10-40% 不等。代价是额外内存——要保留数据库的多份副本(一个常数级别的开销)，但延迟基本不受影响。未解的问题：该用多少个块大小、具体选哪些(目前 50、100、200 这套取值相当随意)，以及有没有比 RRF 更好的融合方法。

## 本集带走
- **别再找「最佳块大小」了**：实验证明最优块大小依赖查询而非数据集，固定块大小的选择本身就是 20-40% 召回率的代价。
- **多尺度索引可以直接抄**：同一份数据按多个块大小建多份索引，检索时全部并行查询，取出整文档后用 RRF 融合排名——简单脚本即可，延迟几乎不变，代价只是额外内存。
- **把信息错位记在心里**：索引时不知道查询、查询时改不了索引，这是所有 RAG 系统的结构性矛盾，解法是让同一个决策点同时拥有两边的信息。
- **智能体没杀死检索**：检索只是沦为了基础设施——而且是 2022 年水平的基础设施，用简单方法就能白拿 20-40% 的提升。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">所以我要主张，如果我们必须干掉某个东西，如果有什么必须死，那很可能是检索调优。</span>  
> *So I will claim that if we have to kill something, if something has to be dead, then it's probably retrieval tuning.*  
> <span class="qm">—— Yuval Belfer · [02:40]</span> ^q1

> <span class="qz">所以这告诉我们的是，分块本质上是一种有损压缩。</span>  
> *So what this tells us is that chunking is essentially a lossy compression.*  
> <span class="qm">—— Yuval Belfer · [05:05]</span> ^q2

> <span class="qz">而我要声称，不存在正确的块大小。</span>  
> *And I will claim that there is no right chunk size.*  
> <span class="qm">—— Yuval Belfer · [05:15]</span> ^q3

> <span class="qz">它们都停留在固定块大小的模式里，而我们采取了不同的做法，我们说：既然可以选定多个，为什么要只选定一个呢？</span>  
> *All of them just stayed in the model of let's work with a fixed chunk size, whereas we took a different approach, and we said, why commit to one where we can commit to several?*  
> <span class="qm">—— Yuval Belfer · [10:59]</span> ^q4

> <span class="qz">在这种情况下，你可以把检索本质上就理解为投票。</span>  
> *In this case, you can think of retrieval as essentially just voting.*  
> <span class="qm">—— Yuval Belfer · [12:48]</span> ^q5

> <span class="qz">如果我需要给你们留下一句话，我会说智能体并没有杀死检索。</span>  
> *And if I need to leave you with something, I would say that agents didn't kill retrieval.*  
> <span class="qm">—— Yuval Belfer · [16:54]</span> ^q6

> <span class="qz">用非常简单的方法，你可以把你的 RAG 系统或者任何涉及存储数据然后再检索的东西提升 20 到 40%。</span>  
> *And with really simple methods, you can take your RAG system or anything that has to do with storing data and then retrieve it with 20 to 40%.*  
> <span class="qm">—— Yuval Belfer · [17:10]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2025-10-23-lennys-al-engineering-101-with-chip-huyen|Chip Huyen：别追 AI 新闻了，真正提升 AI 产品的是这些事]]<span class="pd-rz">同概念:RAG</span>
- [[2026-07-17-talks-every-company-should-have-a-brain-garry|用 Markdown 组建一支军队:Y Combinator 掌门人的 AI 原生公司蓝图]]<span class="pd-rz">同概念:RAG</span>
- [[2026-07-24-talks-how-bridgewater-built-an-ai-analyst-that|桥水内部版 AI 分析师 PAT:把数小时研究压到几分钟]]<span class="pd-rz">同概念:RAG</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-09-14-lennys-the-ultimate-guide-to-aeo-ethan-smith|AEO实战指南：如何让产品出现在ChatGPT答案里]]<span class="pd-rz">同概念:RAG</span>
- [[2025-05-22-talks-mastering-claude-code-in-30-minutes|Claude Code 实战技巧：从提问到并行]]<span class="pd-rz">同公司:Anthropic</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic</span>

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
