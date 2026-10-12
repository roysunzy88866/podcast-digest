---
title: 搜代码不用向量库，搜公司文档为什么不行？
podcast: 精选演讲
date: 2026-10-12
source_url: undefined
duration: "23:12"
type: episode
cover: "#64748b"
description: LlamaIndex 工程负责人 George He 讲解：为什么 Claude Code 靠 grep 就够，而企业文档搜索必须混合方案。
guests: ["[[George He]]"]
companies: ["[[LlamaIndex]]", "[[Claude Code]]", "[[Anthropic]]", "[[LlamaParse]]", "[[LightParse]]", "[[TurboPuffer]]"]
concepts: ["[[智能体]]", "[[预索引]]", "[[RAG]]", "[[向量数据库]]", "[[grep]]", "[[上下文长度]]", "[[文档解析]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-07-talks-grep-or-embeddings-agentic-search-over-c#post","headline":"搜代码不用向量库，搜公司文档为什么不行？","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-07-talks-grep-or-embeddings-agentic-search-over-c","mainEntityOfPage":"https://talk.solomind.cc/2026-10-07-talks-grep-or-embeddings-agentic-search-over-c","description":"LlamaIndex 工程负责人 George He 讲解：为什么 Claude Code 靠 grep 就够，而企业文档搜索必须混合方案。","datePublished":"2026-10-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"George He"},{"@type":"Organization","name":"LlamaIndex"},{"@type":"Organization","name":"Claude Code"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"LlamaParse"},{"@type":"Organization","name":"LightParse"},{"@type":"Organization","name":"TurboPuffer"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"预索引 (pre-indexing)"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"向量数据库 (vector database)"},{"@type":"Thing","name":"grep"},{"@type":"Thing","name":"上下文长度 (context length)"},{"@type":"Thing","name":"文档解析 (parsing)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"搜代码不用向量库，搜公司文档为什么不行？","item":"https://talk.solomind.cc/2026-10-07-talks-grep-or-embeddings-agentic-search-over-c"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>搜代码不用向量库，搜公司文档为什么不行？</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 搜代码不用向量库，搜公司文档为什么不行？

<div class="pd-byl"><b>George He</b> · LlamaIndex 工程负责人 · 2026-10-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-07-talks-grep-or-embeddings-agentic-search-over-c.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">其中最重要的一点是，代码已经在磁盘上、在本地了，尤其是如果你的智能体有上下文的话，那为什么要用一个预检索系统把它复杂化呢？</div><div class="a">— George He <button class="pd-ts" data-t="03:49" data-who="George He" data-en="And the largest part there is code is already on disk and local, especially if your agent has context, so why complicate it with a pre-retrieval system?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[George He]]
>
> **公司** [[LlamaIndex]] · [[Claude Code]] · [[Anthropic]] · [[LlamaParse]] · [[LightParse]] · [[TurboPuffer]]
>
> **概念** [[智能体]] · [[预索引]] · [[RAG]] · [[向量数据库]] · [[grep]] · [[上下文长度]] · [[文档解析]]

AI [[智能体|智能体]]火了之后，一个老问题被重新翻了出来：

让模型在大量文件里找信息，到底是直接在本地文件系统里搜索，还是提前建好向量索引？

[[George He|George He]] 是 [[LlamaIndex|LlamaIndex]] 的工程负责人，这家公司专门做[[文档解析|文档解析]]和知识管理。

他用一场演讲把这个问题讲得很清楚：**答案取决于你的数据长什么样、有多少**。

## 为什么 Claude Code 不用向量库？

[[Claude Code|Claude Code]] 发布时，很多人好奇它内部怎么管理代码文件。

[[Anthropic|Anthropic]] 的选择是：不用预建索引，不做检索增强，就靠 [[grep|grep]]、glob 这类本地文件搜索工具直接遍历 <button class="pd-ts" data-t="02:42" data-who="George He" data-en="And Anthropic's taken the approach of using your local file system, grep, Read using glob management, basically, to manage your local file system, and it's perfect for your local execution needs, because code is easy to manage locally, it's concise, and it's already in text format." aria-label="回原文"></button>。

**这之所以行得通，是因为代码有几个天然优势**：

仓库通常不大，格式半结构化，而且代码本身会留下线索，导入什么、测试什么，都写在那里。

文件层级本身就是一张地图，智能体照着走就行。

Claude Code 的创始人 Boris 也说过，他们试过[[向量数据库|向量数据库]]，最后放弃了。不只是性能问题，更是维护问题：代码一直在改，预建索引很难保持同步 <button class="pd-ts" data-t="03:03" data-who="George He" data-en="But you'll also notice that this tweet by Boris, Claude Code creator, kind of highlights that Claude Code experimented with the vector database, didn't end up choosing it, and the reasons aren't just for performance reasons, but because of practical scaling and maintenance reasons." aria-label="回原文"></button>。

## 公司文档完全是另一回事

可一旦换成企业数据集，情况就变了。图片、PDF、PPT 混在一起，根本没有一个组织好的文件夹让你去 grep。

规模大得多，安全权限必须管，格式五花八门，可能有复杂的 PDF、制造图纸、电路原理图 <button class="pd-ts" data-t="04:41" data-who="George He" data-en="The format is not standardized. You might have really complex PDFs, schematics, manufacturing diagrams mixed in. And the scale just makes it so that you can't run this locally anymore." aria-label="回原文"></button>。这种数据没法在本地跑。

==那到底什么时候用哪种方案==？George 给了一个粗略的判断：100 到 1000 个文件，本地搜索就够，智能体在上下文里能装下；

到了几万、几百万个文件，就必须有预建索引，至少给智能体一个大致方向，像指南针一样指出该往哪找 <button class="pd-ts" data-t="06:01" data-who="George He" data-en="They won't burn too many tokens just iterating through files or managing the literal file names as it traverses. But as you scale out to thousands or millions of files, that's not possible." aria-label="回原文"></button>。

## 上下文窗口变大，反而更贵

有人会说，现在模型有 100 万 token 的上下文了，把文档全塞进去不就行了？George 算了笔账：用模型上下文做数据摄入和搜索，极其昂贵。

把二进制文件发给模型让它自己渲染再提取，每次都在烧 token <button class="pd-ts" data-t="07:05" data-who="George He" data-en="Do you want to send binary data over to your model for it to try to render in maybe its own engine and then extract data out for your search? It just becomes extremely expensive in order to use your model context for ingestion and search." aria-label="回原文"></button>。

用子智能体分担也不划算。每个子智能体都需要完整上下文，即使用便宜的小模型，整个环境依然又耗 token 又慢。

所以为了避免每次重复处理文档，**预建索引系统反而成了省钱的做法**。

## 正确答案：给智能体一整套工具

George 的核心建议是：**不要人为决定用哪种方案，而是做一个工具集，让智能体自己选**。这套工具分两层：

第一层是定向，也就是回答该去哪里找。

这里推荐混合搜索：关键词搜索加上语义向量搜索，两者融合加权，再用重排序模型对前 100 条结果精排。

基准测试显示，混合方案明显好于单一方法，因为你不会被某一种搜索方式的盲区困住 <button class="pd-ts" data-t="11:27" data-who="George He" data-en="Combining the two through a hybrid-based search usually gives you much better results. You can see in various benchmarking data sets that just raw keyword or vector will get you to a baseline." aria-label="回原文"></button>。

第二层是深挖，包括列出文件、按元数据筛选、用 grep 在具体文件里找关键词，以及读取文档实际内容。

这样智能体先用搜索缩小范围，再用文件遍历深入细节，得出的答案是有据可查的，而不是编出来的。

## 复杂文档要先解析，还要存截图

表格、图表、扫描件、原理图，这些对传统索引流程是灾难，因为它们不是一行行给人读的文本，而是另一种表达。

LlamaIndex 的做法是用结构化解析工具，把表格和图表编码成 markdown，让智能体能理解空间布局 <button class="pd-ts" data-t="13:31" data-who="George He" data-en="We have a product called LlamaParse. We've also open sourced a tool called LightParse, which handles structural content extraction. So this is like if you have tables, charts, or segmented information, you want to encode that as either markdown or just something that your agent really can understand the spatial reasoning of." aria-label="回原文"></button>。他们有产品 [[LlamaParse|LlamaParse]]，还开源了 [[LightParse|LightParse]]。

一个有意思的技巧：**解析时顺便给每一页存一张截图**。这些 PDF 和 PPT 本来是给人看的，不是给机器消费的。

有了预建的截图索引，智能体在做检索时可以像人一样核对原始页面 <button class="pd-ts" data-t="10:36" data-who="George He" data-en="So these schematics, these PDFs, these PowerPoints, they're not really built for pure machine consumption. So giving the agent a pre-built screenshot index to search through is also very useful as you're performing RAG." aria-label="回原文"></button>。

## 生产环境的三个坑

真要上线，客户一定会问三件事。一是多租户：一个人能不能看到另一个人的数据？

Google Drive 或 SharePoint 的权限元数据怎么同步进来，还不能让系统停摆？二是数据新鲜度：数据一直在变，预建索引如何跟上？

这正是很多公司放弃[[预索引|预索引]]的原因 <button class="pd-ts" data-t="15:40" data-who="George He" data-en="And that's related to the last one, which is freshness, right? This is kind of why Anthropic, a lot of other companies have kind of given up on trying to pre-index data because data freshness is really hard to achieve if your datas are complex." aria-label="回原文"></button>。三是存储架构：他们处理过千万级文档，建议数据落盘，再加一层内存缓存加速读取；

演示用的向量库是 [[TurboPuffer|TurboPuffer]]，权限过滤直接下沉到存储层。

## 演示：135 份财报，一个问题搞定

现场演示用的是从 Alphabet 财报提取的 135 个文件，混合了 HTM 和原始 PDF。智能体收到请求，给出 2021 到 2025 年的现金流量表，流程是：

先混合搜索定位相关片段，同时看到对应的页面截图，再 grep 确认具体文本，按偏移量精确读取内容。

整个过程不需要把文件下载到本地，直接操作远端存储。

最终结果是从多个文件里汇总出来的，每个数字都能追溯到具体文件。

George 的收尾一句话总结了全场：「搜索帮你找到信息，工具集给你能信任的结果」<button class="pd-ts" data-t="22:49" data-who="George He" data-en="We'll take a look at that session once it finishes streaming. But the idea here and the takeaway is that search helps you find information, and the harness gives you the results that you can trust." aria-label="回原文"></button>。

## 本集带走

- 代码仓库小、结构清晰、自带线索，本地 grep 就够，不必预建索引。
- 企业文档规模大、格式乱、权限敏感，必须有预索引加混合搜索。
- 上下文窗口再大，也别拿模型当解析器用，token 太贵。
- 最好的架构是给智能体一整套工具，搜索定位方向，文件遍历深挖细节。
- 解析复杂文档时存页面截图，让智能体能像人一样核对原文。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">其中最重要的一点是，代码已经在磁盘上、在本地了，尤其是如果你的智能体有上下文的话，那为什么要用一个预检索系统把它复杂化呢？</span>  
> *And the largest part there is code is already on disk and local, especially if your agent has context, so why complicate it with a pre-retrieval system?*  
> <span class="qm">—— George He · [03:49]</span> ^q1

> <span class="qz">你没法真正对一个公司数据集的文件夹做 grep，因为它不像代码那样组织有序。</span>  
> *You can't really grep the folders across a company dataset because it's not organized like code.*  
> <span class="qm">—— George He · [04:13]</span> ^q2

> <span class="qz">但这里的主要结论其实是，它最终归结为你所拥有的数据的规模，以及你愿意投入多少整理成本来维护那套合理的检索系统或数据管理系统。</span>  
> *But the major takeaway here is actually it really comes down to the scale of the data that you have and how much curation effort you're going to put in in order to maintain that retrieval system or that data management system that makes sense, right?*  
> <span class="qm">—— George He · [05:18]</span> ^q3

> <span class="qz">一开始可能没问题，但如果你的 LLM 不理解位置和空间推理，到了某个时候就会崩掉。</span>  
> *It might be fine at the start, but if your LLM doesn't understand the location and spatial reasoning, it falls apart at some point.*  
> <span class="qm">—— George He · [14:58]</span> ^q4

> <span class="qz">这就是为什么 Anthropic 和许多其他公司差不多已经放弃了尝试预索引数据，因为如果你的数据复杂，数据新鲜度真的很难实现。</span>  
> *This is kind of why Anthropic, a lot of other companies have kind of given up on trying to pre-index data because data freshness is really hard to achieve if your datas are complex.*  
> <span class="qm">—— George He · [15:40]</span> ^q5

> <span class="qz">但这里的要点和收获是：搜索帮你找到信息，而 harness 给你可信赖的结果。</span>  
> *But the idea here and the takeaway is that search helps you find information, and the harness gives you the results that you can trust.*  
> <span class="qm">—— George He · [22:49]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-23-talks-building-the-document-context-layer-for|为 AI 智能体构建文档上下文层:LlamaIndex 谈 2026 年的 RAG]]<span class="pd-rz">同公司:LightParse、LlamaIndex、LlamaParse、Claude Code · 同概念:RAG、智能体 (agent)、向量数据库 (vector database)</span>
- [[2026-10-08-mad-what-happens-when-billions-of-ai-agents|当几十亿个AI智能体冲向你的数据库]]<span class="pd-rz">同公司:Anthropic、TurboPuffer · 同概念:RAG、向量数据库 (vector database)、智能体 (agent)</span>
- [[2026-10-05-talks-from-raw-documents-to-ai-ready-data-leo|从40份文件到8万份文件:企业AI落地卡在哪]]<span class="pd-rz">同公司:Claude Code · 同概念:RAG、向量数据库 (vector database)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:智能体 (agent)</span>
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:智能体 (agent)</span>
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|代码量暴涨8倍后，工程管理怎么办？]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:智能体 (agent)</span>

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
