---
title: 三百万页乱七八糟的爱泼斯坦文件，是怎么被 AI 读懂的
podcast: 精选演讲
date: 2026-10-18
source_url: undefined
duration: "29:11"
type: episode
cover: "#64748b"
description: Reducto 的 Palak Agarwal 和 Omar Alhait 讲解如何用文档解析技术处理 300 万页爱泼斯坦档案。
guests: ["[[Palak Agarwal]]", "[[Omar Alhait]]"]
companies: ["[[Reducto]]", "[[J-Mail]]"]
concepts: ["[[非结构化数据]]", "[[智能体文档处理]]", "[[schema]]", "[[涂黑脱敏]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-parsing-the-epstein-files-for-jmail-pala#post","headline":"三百万页乱七八糟的爱泼斯坦文件，是怎么被 AI 读懂的","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-parsing-the-epstein-files-for-jmail-pala","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-parsing-the-epstein-files-for-jmail-pala","description":"Reducto 的 Palak Agarwal 和 Omar Alhait 讲解如何用文档解析技术处理 300 万页爱泼斯坦档案。","datePublished":"2026-10-18","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Palak Agarwal"},{"@type":"Person","name":"Omar Alhait"},{"@type":"Organization","name":"Reducto"},{"@type":"Organization","name":"J-Mail"},{"@type":"Thing","name":"非结构化数据 (unstructured data)"},{"@type":"Thing","name":"智能体文档处理 (agentic document processing)"},{"@type":"Thing","name":"schema"},{"@type":"Thing","name":"涂黑脱敏 (redaction)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"三百万页乱七八糟的爱泼斯坦文件，是怎么被 AI 读懂的","item":"https://talk.solomind.cc/2026-10-11-talks-parsing-the-epstein-files-for-jmail-pala"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>三百万页乱七八糟的爱泼斯坦文件，是怎么被 AI 读懂的</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 三百万页乱七八糟的爱泼斯坦文件，是怎么被 AI 读懂的

<div class="pd-byl"><b>Palak Agarwal</b> · Reducto 开发者关系负责人 · 2026-10-18</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-parsing-the-epstein-files-for-jmail-pala.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">这之所以有效，是因为我们采用了基于光栅化的方法：我们像人类看文档一样去看你的文档，而不是看底层的嵌入。</div><div class="a">— Palak Agarwal <button class="pd-ts" data-t="01:28" data-who="Palak Agarwal" data-en="The reason this works is that we take a rasterization-based approach. That means we look at your document like a human would look at the document instead of the underlying embedding." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Palak Agarwal]] · [[Omar Alhait]]
>
> **公司** [[Reducto]] · [[J-Mail]]
>
> **概念** [[非结构化数据]] · [[智能体文档处理]] · [[schema]] · [[涂黑脱敏]]

这个玩笑式的产品火得出乎意料：到今年 2 月，访问量超过 4.5 亿，用户 1800 万。

支撑这一切的，是把 300 万页涂黑、扫描、手写的政府文件变成可用数据的技术。

这场演讲的两位主角，是文档处理公司 [[Reducto|Reducto]] 的开发者关系负责人 [[Palak Agarwal|Palak Agarwal]] 和创始工程师 [[Omar Alhait|Omar Alhait]]。

## 让 AI 读干净 PDF 不难，难的是乱文件

Palak 开门见山：用顶尖模型处理一份干净的 PDF，不是什么难事。

但企业里的大部分文档根本不干净——**扫描件、歪着放的纸、图表、表格、各种人的潦草手写**。这才是真正复杂的地方 <button class="pd-ts" data-t="00:59" data-who="嘉宾" data-en="And operating at that scale means that we've basically dealt with every document you can possibly think of, and we've iterated Reducto's product to handle anything." aria-label="回原文"></button>。

Reducto 做的就是模型前面那一层。他们的思路是“栅格化”：不看文件的底层编码，而是像人一样，直接“看”这份文档长什么样 <button class="pd-ts" data-t="00:28" data-who="嘉宾" data-en="We're an agentic document platform, which basically means we help teams turn messy, unstructured documents into data that AI can actually use accurately. To give you some context, in the last three years, we've raised $108 million from investors like ACCNC, Benchmark, and more, and processed over two billion documents across customers like Harvey, Scale, and a top five global hedge fund." aria-label="回原文"></button>。

背后是一套带智能体的 OCR 框架：模型不是一口气给出答案，而是标记出自己不确定的地方，先纠正，再往下走 <button class="pd-ts" data-t="00:38" data-who="嘉宾" data-en="To give you some context, in the last three years, we've raised $108 million from investors like ACCNC, Benchmark, and more, and processed over two billion documents across customers like Harvey, Scale, and a top five global hedge fund." aria-label="回原文"></button>。

过去三年，他们融资 1.08 亿美元，处理了超过 20 亿份文档。

## JMail 是怎么诞生的：一个玩笑滚雪球

他们和楼下的朋友 Luke（JMail 的开发者之一）闲聊，讨论有什么好玩的点子，聊着聊着就滚成了这个想法：

==如果你能以爱泼斯坦的身份登录邮箱，看到他看到的邮件，会怎样== <button class="pd-ts" data-t="03:57" data-who="嘉宾" data-en="Ha, ha, ha. And then it kind of snowballed into this idea of, like, what if you could, you know, sign into your email as if you were Jeffrey Epstein? And view, you know, your email as if you were him." aria-label="回原文"></button>。

点子很酷，但横在中间的是一个硬问题：那些文件实在太难读了。版面复杂，阅读顺序都带主观性。

Omar 半开玩笑地建议观众做个实验：把那种封面文件丢给 ChatGPT，看看结果有多不准 <button class="pd-ts" data-t="04:27" data-who="嘉宾" data-en="And you're looking at part of it, right? It's really, really, like I would urge you if you haven't done this before to send this like, you know, cover sheet to ChatGPT and try to get some results out of it that, and just see how accurate it is, right?" aria-label="回原文"></button>。

Reducto 解决了这个瓶颈。之后一连串产品冒出来：JFlights（爱泼斯坦及其关联者的全部飞行记录）、JAmazon、JPhotos、JCal……

飞行记录的原始材料是一堆手写文档，比打印件还难处理。

团队先小规模调试提取配置，确认准确率达标，再扩展到全部文档 <button class="pd-ts" data-t="07:04" data-who="嘉宾" data-en="So this was sort of the canvas for myself that I was playing around with to kind of understand, before I start scaling this up to a million different documents and run up a quick check on Reducto's receipts, let me make sure that" aria-label="回原文"></button>。

那几天晚上，Omar 深夜连发消息给值班的同事，请他“慢一点”，因为解析任务把基础设施压得够呛 <button class="pd-ts" data-t="08:11" data-who="嘉宾" data-en="And so we put a decent amount of stress on our infra. And so Alvin was sending me a lot of fun messages late at night like, hey, bro, can you slow down? But yeah, we got through them." aria-label="回原文"></button>。

## 有些文件涂黑涂得不合格，责任落到了他们头上

一个严肃的插曲：Reducto 会解析 PDF 的元数据，结果发现部分文件的涂黑处理不合格——在黑框背后，其实能看到被遮住的人名 <button class="pd-ts" data-t="14:03" data-who="嘉宾" data-en="So Reducto actually parses PDF metadata as well, right? So sometimes, and this is honestly testament to, like, who was doing the redaction, right? Sometimes the redaction was actually not that great." aria-label="回原文"></button>。

Omar 说，有些文件涂得对，有些则“我们的工具工作得太好了”，真的把本该遮住的信息提取了出来 <button class="pd-ts" data-t="15:21" data-who="嘉宾" data-en="And so, yeah, there was a heavy kind of level of responsibility on our shoulders to make sure that whatever was intended to be redacted was actually redacted. Our tool was working a little too well." aria-label="回原文"></button>。

这涉及真实的人的隐私，涂黑是有原因的，搞不好最后吃官司的就是自己。于是 JMail 团队反过来承担起了补涂黑的责任。

## 提取的套路：先定“表格”，再验结果

Omar 现场演示了工作流。他把[[schema|提取模式]]比作画布上的画笔：

你定义一个模式（比如解析简历要哪些字段），丢文档进去，看结果像不像预期，不像就改，满意了就直接部署，拿到 API 调用或代码片段 <button class="pd-ts" data-t="10:14" data-who="嘉宾" data-en="So we can actually come up with this for you, right? You know, my fun analogy here is that, like, your extract schema is sort of like the paintbrush on your Reducto canvas, right?" aria-label="回原文"></button>。

还有一个进阶玩法：**先解析文档，让系统理解里面到底有什么，再根据内容定制字段描述**。

他还见过一个有 156 个字段的提取模式，各要各的东西——系统的嵌套上限大约四五层，但想问什么都塞得进去 <button class="pd-ts" data-t="15:45" data-who="嘉宾" data-en="I'll give you an example, right? There was a schema that I was looking at maybe on Friday that had like 156 fields, right? And all of these different fields need, like they were requesting something completely different, right?" aria-label="回原文"></button>。

## 为什么一个聊天机器人失败了，一个“邮箱”成功了

有人问产品心得，Omar 答得很坦白：他最初做的东西很糙——一个能对邮件提问的问答机器人，记者可能会觉得有用，但也就那样了 <button class="pd-ts" data-t="23:58" data-who="嘉宾" data-en="I think when I was working on this solution, or I was working on this problem, I was trying to figure out what is a good productized way to surface our reductose parsing." aria-label="回原文"></button>。

真正成功的是 JMail 这种形态。他的总结是：一个好产品加上一套真正好用的文档提取方案，才是“组合拳” <button class="pd-ts" data-t="24:28" data-who="嘉宾" data-en="It's testament to the fact that a nice product on top of a really, really nice novel document extraction solution is what is going to kind of be a one-two punch here." aria-label="回原文"></button>。

Palak 补了一句大实话：你会去读 300 万份扫描文件吗？不会。但产品做好后，他自己也天天上去搜各种名人的名字玩 <button class="pd-ts" data-t="24:39" data-who="嘉宾" data-en="Yeah, like, would you read three million, like, scanned documents? Honestly, no. And honestly, when I saw the job, I was like, this is, like, way too much work for me." aria-label="回原文"></button>。

他的感悟是：[[非结构化数据|非结构化数据]]到处都是，**有时候你只需要把它提取出来，之后想干什么都行** <button class="pd-ts" data-t="24:51" data-who="嘉宾" data-en="And so that's the beauty of it, right? Like, I think, like, unstructured data is, like, everywhere. And sometimes all you need to do is, like, to extract it and then, like, do whatever you want with it." aria-label="回原文"></button>。

JMail 看着好玩，但本质上和工业界客户做的事一模一样。

## 机器学习背后，还是大量枯燥的人工

被问到模型怎么训练，Omar 没有回避：有专门的数据标注团队，要人工翻阅大量文档，确保训练数据的可靠性。

短答案是“**大量辛苦、乏味、烦人的工作**” <button class="pd-ts" data-t="25:31" data-who="嘉宾" data-en="We have to sift through a lot of documents if we're going to train a new model on top of it and be very, very certain in the outcomes or the sanctity of that data." aria-label="回原文"></button>。

他还提到一个有趣的说法：提取任务不是“草垛里找针”，而是“草垛里找所有的针”——这是真正难的研究问题 <button class="pd-ts" data-t="21:14" data-who="嘉宾" data-en="Specifically for extract, It's not really a needle in a haystack, it's like all the needles in a haystack, if you think about it. So that's a really challenging research problem that our MLEs are somehow able to figure out pretty well." aria-label="回原文"></button>。

至于评测基准，他认为遗憾的是，通常得自己做：客户会拿 Reducto 和其他方案对比测试，团队会帮忙调配置、说明取舍，最后往往能赢 <button class="pd-ts" data-t="22:35" data-who="嘉宾" data-en="But there need to be more data points that we can rest on and that the entire industry can kind of see at face value without having to go test themselves or pass in the entire Arc AGI dataset to try to understand how well Reducto is doing against another solution." aria-label="回原文"></button>。

## 本集带走

- JMail 由 Riley Walls 和 Luke Igel 在文件公布当晚用 5 小时做出，2 个月内积累 1800 万用户、4.5 亿访问量。
- Reducto 用“像人看文档”的栅格化方法加带自我纠错的 OCR 框架，处理了 300 万页涂黑、扫描和手写文件。
- 部分官方涂黑不合格，黑框背后能看到被遮信息，JMail 团队主动承担了二次涂黑的责任。
- 工作流核心是：定义提取模式、小规模验证结果、再部署扩展，几十分钟就能从想法到上线。
- 非结构化数据无处不在，提取出来之后，产品想象空间才是真正的战场。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">这之所以有效，是因为我们采用了基于光栅化的方法：我们像人类看文档一样去看你的文档，而不是看底层的嵌入。</span>  
> *The reason this works is that we take a rasterization-based approach. That means we look at your document like a human would look at the document instead of the underlying embedding.*  
> <span class="qm">—— Palak Agarwal · [01:28]</span> ^q1

> <span class="qz">因为不能只在 PDF 上盖一个框，然后就指望它真的被完全脱敏了，对吧？</span>  
> *Because you can't just stick a box on a PDF and then expect it to actually be fully redacted, right?*  
> <span class="qm">—— Omar Alhait · [14:20]</span> ^q2

> <span class="qz">它其实不是大海捞针，你想想看，它更像是把海里所有的针都捞出来。</span>  
> *It's not really a needle in a haystack, it's like all the needles in a haystack, if you think about it.*  
> <span class="qm">—— 嘉宾 · [21:14]</span> ^q3

> <span class="qz">所以我们很快会发布一些 benchmark，但更深层的真实答案是：很遗憾，你通常得做自己的 benchmark。</span>  
> *So we're going to release some benchmarks soon, but the real deeper answer here is you typically have to make your own benchmarks, unfortunately.*  
> <span class="qm">—— 嘉宾 · [22:35]</span> ^q4

> <span class="qz">所以给你的简短回答是，这是大量艰苦、琐碎、烦人的工作。但这正是最终成就机器学习模型之美的地方，对吧？</span>  
> *And so the short answer for you is it's a lot of hard, menial, annoying work. But that's really what comes into the beauty of a machine learning model at the end of the day, right?*  
> <span class="qm">—— Omar Alhait · [25:31]</span> ^q5

> <span class="qz">所以 parse 才是让 reducto 之所以成为 reducto 的根本。</span>  
> *So parse is what made reducto reducto in the first place.*  
> <span class="qm">—— Omar Alhait · [19:53]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-15-trainingdata-box-s-aaron-levie-on-reinventing-yoursel|Box 创始人 Erin Levy：套壳的逆袭与应用层的万亿机会]]<span class="pd-rz">同概念:非结构化数据 (unstructured data)</span>
- [[2026-09-23-talks-from-ingestion-to-agents-how-ai-teams-bu|智能体时代，你的 PDF 数据管道拖后腿了吗]]<span class="pd-rz">同公司:Reducto</span>
- [[2026-10-08-talks-why-we-deleted-our-mcp-server-and-rebuil|智能体出错的账，该谁付？Reducto 删掉重做 MCP 的教训]]<span class="pd-rz">同公司:Reducto</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-06-lennys-the-base44-bootstrapped-startup-success|一个人六个月做出八千万美元公司]]<span class="pd-rz">同概念:提取模式 (schema)</span>
- [[2025-12-07-lennys-surge-ai-edwin-chen|10亿收入不到100人:数据公司 Surge AI 如何逆行塑造 AI 未来]]<span class="pd-rz">同概念:基准测试 (benchmark)</span>
- [[2026-09-21-latent-jev|Jev 背后的人:Diogo 谈为什么 AI 应该像数据库而不是同事]]<span class="pd-rz">同概念:基准测试 (benchmark)</span>

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
