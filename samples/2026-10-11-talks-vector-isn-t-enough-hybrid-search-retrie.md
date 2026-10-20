---
title: 只靠向量搜索不够：两位 Elastic 架构师聊混合检索的门道
podcast: 精选演讲
date: 2026-10-20
source_url: undefined
duration: "76:01"
type: episode
cover: "#64748b"
description: Elastic 的 Jeff Vestal 和 James Williams 用一场动手工作坊，讲透语义搜索、关键词搜索为什么必须合用，以及重排器什么时候才值得加。
guests: ["[[Jeff Vestal]]", "[[James Williams]]"]
companies: ["[[Elastic]]", "[[Elasticsearch]]"]
concepts: ["[[检索增强生成]]", "[[智能体]]", "[[语义搜索]]", "[[向量搜索]]", "[[BM25 关键词搜索]]", "[[混合搜索]]", "[[RRF]]", "[[推理]]", "[[Agent Builder]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-vector-isn-t-enough-hybrid-search-retrie#post","headline":"只靠向量搜索不够：两位 Elastic 架构师聊混合检索的门道","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-vector-isn-t-enough-hybrid-search-retrie","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-vector-isn-t-enough-hybrid-search-retrie","description":"Elastic 的 Jeff Vestal 和 James Williams 用一场动手工作坊，讲透语义搜索、关键词搜索为什么必须合用，以及重排器什么时候才值得加。","datePublished":"2026-10-20","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jeff Vestal"},{"@type":"Person","name":"James Williams"},{"@type":"Organization","name":"Elastic"},{"@type":"Organization","name":"Elasticsearch"},{"@type":"Thing","name":"检索增强生成 (retrieval augmented generation)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"语义搜索 (semantic search)"},{"@type":"Thing","name":"向量搜索 (vector search)"},{"@type":"Thing","name":"BM25 关键词搜索 (BM25)"},{"@type":"Thing","name":"混合搜索 (hybrid search)"},{"@type":"Thing","name":"RRF"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"Agent Builder"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"只靠向量搜索不够：两位 Elastic 架构师聊混合检索的门道","item":"https://talk.solomind.cc/2026-10-11-talks-vector-isn-t-enough-hybrid-search-retrie"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>只靠向量搜索不够：两位 Elastic 架构师聊混合检索的门道</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 只靠向量搜索不够：两位 Elastic 架构师聊混合检索的门道

<div class="pd-byl"><b>Jeff Vestal</b> · Elastic AI 架构师 · 2026-10-20</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-vector-isn-t-enough-hybrid-search-retrie.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果你给这些模型——不管它们有多聪明——喂垃圾数据，并且自信地告诉它们这就是答案，它们基本上就会相信你，因为你就是这么告诉它们的。</div><div class="a">— Jeff Vestal <button class="pd-ts" data-t="02:58" data-who="Jeff Vestal" data-en="if you feed these models, no matter how smart they are, garbage data, and you confidently tell them this is the answer, pretty much they're gonna believe you because that's what you're telling them." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jeff Vestal]] · [[James Williams]]
>
> **公司** [[Elastic]] · [[Elasticsearch]]
>
> **概念** [[检索增强生成]] · [[智能体]] · [[语义搜索]] · [[向量搜索]] · [[BM25 关键词搜索]] · [[混合搜索]] · [[RRF]] · [[推理]] · [[Agent Builder]]

在一场以动手练习为主的研讨会上，[[Elastic|Elastic]] 的 AI 架构师 [[Jeff Vestal|Jeff Vestal]] 和搜索方向解决方案架构师 [[James Williams|James Williams]]，一边带着大家跑代码，一边回答了不少关于检索的好问题。

RAG 这个词虽然不像前两年那么热了，但他们强调，模型再聪明，也需要外部检索来补充时效信息、专有数据和价格这类训练里没有的内容。

而且有个残酷的现实：如果你给模型喂垃圾数据，还自信地告诉它这是答案，它基本会照单全收 <button class="pd-ts" data-t="02:56" data-who="嘉宾" data-en="And the trick or the... Catch, I guess, is if you feed these models, no matter how smart they are, garbage data, and you confidently tell them this is the answer, pretty much they're gonna believe you because that's what you're telling them." aria-label="回原文"></button>。

> 【背景】Elastic 是 Elasticsearch 搜索引擎背后的公司。RAG 指检索增强生成：先从外部数据里检索相关内容，再交给大模型生成回答。

## 语义搜索强在哪，又败在哪

[[语义搜索|语义搜索]]靠嵌入模型把文本变成向量，再找最相近的向量。

它的长处是理解意图：房间里每个人问「怎么在 [[Elasticsearch|Elasticsearch]] 上配置 TLS 安全」，措辞各不相同，但语义搜索应该把同一批文档找出来 <button class="pd-ts" data-t="17:01" data-who="嘉宾" data-en="It's the idea of what you're asking. So if all of us in this room ask how to set up security on TLS on Elasticsearch or something, we're all going to phrase it a little differently." aria-label="回原文"></button>。

但它有个明显软肋。

一旦你要找的是非常具体的关键词，尤其是根本不是正常单词的东西——比如一个毫无语义的产品编号——**语义搜索就抓瞎了** <button class="pd-ts" data-t="17:20" data-who="嘉宾" data-en="And you kind of saw where sometimes that breaks down. One of the key places is if you have a very specific keyword, certainly if you have a keyword that is not a word, like a product ID that makes no sense, it's very specific, semantic search then kind of falls apart because it doesn't really need that." aria-label="回原文"></button>。

这种时候，老派的关键词搜索反而靠谱。

## 用了十几年的关键词搜索，今天仍然有用

BM25 是搜索行业用了几十年的词频打分方法，也就是传统意义上的关键词搜索。

Jeff 打了个比方：语义搜索好比查询和文档要说同一种语言，而 BM25 只管字面匹配，不需要模型参与。

关键词搜索的另一个实际优势是延迟低，因为它不用调用模型做[[推理|推理]]。

任何语义搜索都要多一次推理调用，而这个推理环节往往比系统其他部分更容易成为瓶颈——这也是 Elastic 干脆把推理内置到数据库里的原因 <button class="pd-ts" data-t="31:06" data-who="嘉宾" data-en="And more often than not, that inference endpoint is going to be more of a bottleneck than the rest of the system. And that's another reason why we wired the inference into the data platform, because when you're doing end-to-end testing, it doesn't matter if your vector database returns vectors really fast." aria-label="回原文"></button>。

Elastic 现在的核心主张很明确：**BM25 加语义搜索的混合检索是正确路线**，必要时再在顶层加重排器 <button class="pd-ts" data-t="12:33" data-who="嘉宾" data-en="Do those two things need to be put together to form hybrid search? That is the core thesis right now that we have as a company. And the only thing that we add to that, obviously, that's of value, is the option of adding re-rankers on top of that." aria-label="回原文"></button>。

就算是专门的纯向量数据库，用户也往往得另配一套检索系统，做等价的[[混合搜索|混合搜索]]。

## 两套分数没法直接比，怎么办

混合搜索有个技术麻烦：BM25 的分数可以从零到很大，向量相似度通常是 0 到 1。

直接比数字，差的词法结果几乎总会压过好的语义结果 <button class="pd-ts" data-t="37:28" data-who="嘉宾" data-en="And the crux of the problem is, and it's in here somewhere, BM25 has a scale, scores documents from zero to kind of whatever, whereas vector search normally it's zero to one." aria-label="回原文"></button>。

[[RRF|RRF]]（倒数排名融合）是开箱即用的解法：把两路搜索并行跑，扔掉分数，只看排名。

一个文档如果在两边都排得靠前，那多半是好结果。它不需要你懂调参、不需要了解数据细节，「直到不好用之前都挺管用」<button class="pd-ts" data-t="38:23" data-who="嘉宾" data-en="So RRF is kind of designed to be the out of the box, works pretty well, Until it doesn't. But it's a good first start." aria-label="回原文"></button>。

想更精细，就上线性组合：先把两边分数归一化到同一范围，再手动配权重。怎么定权重？

靠人工标注或让大模型帮忙生成判断集——对每个查询写明期望返回哪些文档，然后跑实验看哪组权重最接近。

另外，先用关键词、地理位置、日期等条件把候选集过滤小，效果通常也会更好。

Jeff 的比喻是：想吃披萨就别只搜食物，搜完再按披萨过滤 <button class="pd-ts" data-t="40:12" data-who="嘉宾" data-en="You're filtering it down and you're narrowing it down. It's like if I want pizza tonight, I'm not just going to search for food. Maybe." aria-label="回原文"></button>。

## 什么时候才需要重排器

重排是检索的第二阶段：第一阶段先召回一批候选，再用一个模型把查询和文档放在一起重新打分。

好处是排序更准，代价是必须在查询时现场跑推理，有延迟成本 <button class="pd-ts" data-t="66:34" data-who="嘉宾" data-en="And re-ranking has... I wish this thing was working. I think it's me." aria-label="回原文"></button>。

James 给的判断标准是：如果只靠 BM25 加语义搜索就能达到你的相关性目标，就到此为止；**每往上加一层，都是在拿延迟换精度** <button class="pd-ts" data-t="28:02" data-who="嘉宾" data-en="And my rule of thumb is always see what you can accomplish with a combination of BM25 and semantic search. If that gets you the recall or precision target that you're looking for, whatever relevance targets you have, stop." aria-label="回原文"></button>。

重排器还分两种。点式（point-wise）逐个给文档打分，只看查询和当前这一篇；

列表式（list-wise，如 GINA V3 模型）把最多 64 个候选放在一起看，能分辨出彼此非常相似的一堆文档之间的细微差别，代价是更吃内存和时间 <button class="pd-ts" data-t="70:07" data-who="嘉宾" data-en="Rerankers, at least, you know, that we support. So there's point-wise, these are what most Rerankers are today, and this is what the V2 model is. And so the point-wise, it still combines the, it takes the query and the document together, but it just scores them independently." aria-label="回原文"></button>。

为什么排序这么重要？因为很多[[智能体|智能体]]应用只把排前几位的片段交给大模型。

候选太多时，对模型来说就像一道多选题，两三个答案看着都对，它随便挑一个——挑错了，用户就会抱怨搜索不行 <button class="pd-ts" data-t="69:31" data-who="嘉宾" data-en="We're seeing a lot of situations where folks are testing the evaluation based on the first, second, and third document chunk coming back, which gives you a very small window of opportunity to get the answer right if you're just handing a small set of candidates to the large language model to answer the question versus a larger candidate set, and then asking the model to get it right." aria-label="回原文"></button>。

## 检索质量差，智能体会被带沟里

演示环节里有个很直观的例子：让智能体诊断「集群为什么以退出码 137 挂掉」。

因为答案就在 Elastic 的数据里，智能体跑了几轮工具调用，先定位到是内存管理器杀掉了进程，再给出怎么调 JVM 设置来预防。

但反过来，如果你检索回来的信息本身是错的，模型大概率会照着错的说。

这也是为什么引用来源越来越重要：模型本身不是在做数据库查询，它是在凭训练生成内容，天生擅长一本正经地编。

把真实文档喂给它、让它整理成回答并附上来源链接，**模型才更可信** <button class="pd-ts" data-t="50:54" data-who="嘉宾" data-en="The other thing that comes up a lot, and this is coming up more and more in, well, everywhere, especially as agents start running around and doing things even faster, is being able to cite the sources." aria-label="回原文"></button>。

## 本集带走

- [[向量搜索|向量搜索]]理解意图，但遇到产品编号这类无语义关键词会失效；关键词搜索字面精确、延迟低，两者互补，混合检索是 Elastic 的核心主张。
- RRF 开箱即用、只看排名不看分数；要更精细就用归一化后的线性组合，靠判断集实验定权重。
- 重排器是拿延迟换精度的选项，只在排序确实关键时才加；候选彼此很相似时，列表式重排器优于点式。
- 检索回来的数据是错的，再聪明的模型也会自信地给出错答案，引用来源能显著提升可信度。
- 推理调用常是延迟瓶颈，这也是 Elastic 把嵌入生成、分块等推理直接内置进数据库的原因。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">如果你给这些模型——不管它们有多聪明——喂垃圾数据，并且自信地告诉它们这就是答案，它们基本上就会相信你，因为你就是这么告诉它们的。</span>  
> *if you feed these models, no matter how smart they are, garbage data, and you confidently tell them this is the answer, pretty much they're gonna believe you because that's what you're telling them.*  
> <span class="qm">—— Jeff Vestal · [02:58]</span> ^q1

> <span class="qz">但我是稠密向量的忠实粉丝，所以我会直接从一开始就把它接进架构里，这样我就不用操心那些事情，比如你在词法搜索中会陷入一些奇怪的情况：开始添加同义词，或者用上各种高级词法调优技术，而如果语义搜索能和词法搜索很好地配合，这些你可能根本不需要。</span>  
> *But I'm a big fan of dense vectors, so I would just go ahead and wire them into the architecture right out of the gate, and that way I don't have to worry about things like, you know, you get into these weird situations with lexical where you're starting to add synonyms or get into advanced lexical tuning techniques that you might not need if the semantic search is able to pair well with the lexical search.*  
> <span class="qm">—— James Williams · [28:48]</span> ^q2

> <span class="qz">而且更多时候，那个推理端点会成为整个系统中比其他部分更严重的瓶颈。</span>  
> *And more often than not, that inference endpoint is going to be more of a bottleneck than the rest of the system.*  
> <span class="qm">—— James Williams · [30:59]</span> ^q3

> <span class="qz">那就是我们要大放异彩的时候，因为我们能做到其他平台做不到的事情。</span>  
> *That's when we're going to shine because we can do things that the other platforms can't do.*  
> <span class="qm">—— James Williams · [33:37]</span> ^q4

> <span class="qz">但任何时候你必须喂给它们超出其训练知识范围的数据或任何东西时，你都可以相当有把握地让它们给你错误的答案，只要给它们一组数据然后说，天空是橙色的。</span>  
> *But any time you have to feed them data that they're outside their training knowledge or anything, you can pretty confidently get them to give you the wrong answer by providing them the set of data and say, the sky is orange.*  
> <span class="qm">—— Jeff Vestal · [44:43]</span> ^q5

> <span class="qz">我们看到很多场景，人们是基于返回的第一、第二、第三个文档块来做评估测试的，这就给了你一个非常小的窗口去答对——如果你只是把一小撮候选交给大语言模型来回答问题，而不是一个更大的候选集，然后让模型去答对。</span>  
> *We're seeing a lot of situations where folks are testing the evaluation based on the first, second, and third document chunk coming back, which gives you a very small window of opportunity to get the answer right if you're just handing a small set of candidates to the large language model to answer the question versus a larger candidate set, and then asking the model to get it right.*  
> <span class="qm">—— James Williams · [69:10]</span> ^q6
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
