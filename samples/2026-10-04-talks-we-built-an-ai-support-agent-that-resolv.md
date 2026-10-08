---
title: "一个AI客服解决了80%的工单，成本每月700美元"
podcast: 精选演讲
date: 2026-10-07
source_url: undefined
duration: "16:08"
type: episode
cover: "#64748b"
description: "AssemblyAI 的前线部署工程师 Matt Lawler 讲他们如何自建AI客服 Joey，把工单解决率从10%提到80%。"
host: "[[Matt Lawler]]"
companies: ["[[Assembly AI]]", "[[Railway]]"]
concepts: ["[[Joey]]", "[[前向部署工程师]]", "[[语音智能体]]", "[[Claude Agent SDK]]", "[[RAG]]", "[[ClaudeMD]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-04-talks-we-built-an-ai-support-agent-that-resolv#post","headline":"一个AI客服解决了80%的工单，成本每月700美元","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-04-talks-we-built-an-ai-support-agent-that-resolv","mainEntityOfPage":"https://talk.solomind.cc/2026-10-04-talks-we-built-an-ai-support-agent-that-resolv","description":"AssemblyAI 的前线部署工程师 Matt Lawler 讲他们如何自建AI客服 Joey，把工单解决率从10%提到80%。","datePublished":"2026-10-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Matt Lawler"},{"@type":"Organization","name":"Assembly AI"},{"@type":"Organization","name":"Railway"},{"@type":"Thing","name":"Joey"},{"@type":"Thing","name":"前向部署工程师 (Forward Deployed Engineer)"},{"@type":"Thing","name":"语音智能体 (voice agent)"},{"@type":"Thing","name":"Claude Agent SDK"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"ClaudeMD"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"一个AI客服解决了80%的工单，成本每月700美元","item":"https://talk.solomind.cc/2026-10-04-talks-we-built-an-ai-support-agent-that-resolv"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>一个AI客服解决了80%的工单，成本每月700美元</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 一个AI客服解决了80%的工单，成本每月700美元

<div class="pd-byl"><b>Matt Lawler</b> · Assembly AI 前置部署工程师 · 2026-10-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-04-talks-we-built-an-ai-support-agent-that-resolv.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果你想要在规模化下交付更好的客户体验，你就不能成为良好客户体验的瓶颈。</div><div class="a">— Matt Lawler <button class="pd-ts" data-t="04:07" data-who="Matt Lawler" data-en="If you want to deliver a better customer experience at scale, you can't be the bottleneck to having a good customer experience." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Matt Lawler]]
>
> **公司** [[Assembly AI]] · [[Railway]]
>
> **概念** [[Joey]] · [[前向部署工程师]] · [[语音智能体]] · [[Claude Agent SDK]] · [[RAG]] · [[ClaudeMD]]

如果你给 AssemblyAI 的客服发消息，回复你的不会是人，而是一个叫 [[Joey|Joey]] 的AI。它记得你之前聊过什么，能写代码、调试、自己给自己加新能力。

它每周7天、每天24小时在线，解决了公司80%的客服工单，每月成本只有约700美元。

AssemblyAI 做的是语音AI基础设施，自研语音转文字的基础模型。你开会时见过的 Fireflies 会议记录机器人，用的就是他们的转录。

他们现在也提供完整的[[语音智能体|语音智能体]]方案——把语音识别、大模型、语音合成串成一条服务。

## 问题：每天1000个新注册，只有一个工程师接待

演讲者 [[Matt Lawler|Matt Lawler]] 的职位是 Forward Deployed Engineer（前线部署工程师），这类人直接嵌到客户那边，理解需求、写代码、每周开几次会，是客户在技术和商务上的唯一对接人。

这种模式服务好，但撑不住量。AssemblyAI 每天有约1000个API新注册，而直到演讲前两天，他是公司唯一的接入工程师。

他想跟每个新客户都聊，但物理上不可能。

他的结论是：前线工程师的日常工作，应该是想办法把自己自动化掉——「**你不能成为好客户体验的瓶颈**」<button class="pd-ts" data-t="04:12" data-who="嘉宾" data-en="If you want to serve your customers better, if you want to work with them more, and if you want to deliver a better customer experience at scale, you can't be the bottleneck to having a good customer experience." aria-label="回原文"></button>。

## 第一次尝试：买现成的机器人，只解决了10%

团队的第一反应和大多数人一样：买个现成的客服机器人，指向文档，让它替人回答简单问题。

**结果它只解决了约10%的对话**。按每天1000个对话算，机器人接了100个，剩下900个还是人处理。

更糟的是没法快速迭代——系统提示词、工具、检索基础设施都掌握在供应商手里，每次要改点什么，得到的答复都是在路线图上了<button class="pd-ts" data-t="05:14" data-who="嘉宾" data-en="So anytime we needed to change something, we'd go to this vendor and they'd say, well, it's on the roadmap. And that didn't quite work for us. So we wanted to build our own." aria-label="回原文"></button>。

## 自己造一个：Joey 是怎么搭起来的

于是他们决定自己建，取名 Joey——相当于给团队加了个新成员，而不是招一个人。所有来找 AssemblyAI 的人，先见的都是 Joey。

他基于 [[Claude Agent SDK|Claude Agent SDK]] 构建，接入 Pylon 来管理对话、记住每个客户。架构上有四个要点：

一是文档全在本地。所有文档以 Markdown 格式存在 Joey 自己的文件系统里，文档一更新就自动同步。

哪怕官网文档挂了，Joey 照样能回答最新功能的问题，还能附上出处链接。

二是检索用 Voyage 的向量嵌入，把最相关的文档先摆到前面，回答更快。

三是部署在 [[Railway|Railway]] 上，不用管服务器。团队看到 Joey 在某次对话里出了问题，写个拉取请求，30秒内新版本就上线了。

他们甚至在现场盯着一次对话、发现漏洞、修复上线，客户全程不知情。

四是行为规则写在一个约3万行的 [[ClaudeMD|ClaudeMD]] 指令文件里。每次他答错，团队就更新这个文件，让他在之后的每次对话里都变得更好。

## 成果：80%的工单无人参与就解决了

上线第一周，**端到端解决率就从10%涨到80%，每月的令牌加基础设施成本约700美元** <button class="pd-ts" data-t="08:17" data-who="嘉宾" data-en="So we went from 10% to 80% end-to-end resolution rate in just the first week of deploying this build with a pretty naive implementation. And we did that all for around $700 a month in both token and infrastructure costs." aria-label="回原文"></button>。

这不是挑简单工单凑出来的数字：想找人工，必须先过 Joey 这关，由他决定是否升级。

他实际处理100%的进站工单，只把约20%转给人——多是改费率、数据退出、签协议这类确实需要人或法务介入的事。

Joey 做不了的事，正好构成一份清晰的待办清单，告诉团队接下来该自动化什么。

比如定价，现在已经可以直接和 Joey 谈：告诉他你要多少小时，他会报价，你还可以还价。

## 更深一层：用自己的产品，才真正懂客户

AssemblyAI 做语音智能体，所以这周他们给 Joey 加上了语音模式——用自家的语音智能体API，一条 WebSocket 连接搞定语音识别、大模型和语音合成，实时低延迟，能处理打断和插话。

不久后还会接上电话号码。

这里有个巧妙的设计：客户用语音向 Joey 请教怎么建语音智能体时，本身就在体验这个产品。

演讲者说，前线工程师不管跟客户嵌得多深，**理解客户最好的方式是把客户在做的产品自己亲手做一遍**——他为了给 Joey 加语音，亲历了延迟、轮换、打断处理这些坑，现在能给客户更实在的建议 <button class="pd-ts" data-t="15:02" data-who="嘉宾" data-en="And I think I have a lot better empathy of how to work with customers that want to use our voice agent API because now I've actually used it. I've used the same API." aria-label="回原文"></button>。

## 本集带走

- 现成的客服机器人只解决了10%的工单，且因为改不了提示词和工具，无法迭代
- 自建的 Joey 第一周就把解决率提到80%，每月成本约700美元，100%工单先进他手里
- 文档本地 Markdown 化 + 约3万行行为指令文件 + 30秒部署，是快速迭代的关键
- AI做不了的事就是团队的自动化路线图：定价谈判、协议签署正在逐步交给 Joey
- 用自己的产品建 Joey，等于亲手走了一遍客户的路，能给出好得多的建议

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">如果你想要在规模化下交付更好的客户体验，你就不能成为良好客户体验的瓶颈。</span>  
> *If you want to deliver a better customer experience at scale, you can't be the bottleneck to having a good customer experience.*  
> <span class="qm">—— Matt Lawler · [04:07]</span> ^q1

> <span class="qz">于是我们「造」了另一个团队成员而不是去雇一个，我们给他起名叫 Joey。</span>  
> *So we built another member of our team rather than hiring one, and we named him Joey.*  
> <span class="qm">—— Matt Lawler · [05:18]</span> ^q2

> <span class="qz">实际上有几次，我们实时监控一场对话，发现了一个 bug，部署了修复，然后在会话的剩余时间里它就被验证有效了，而那个客户甚至不需要知道我们在幕后发布了那个修复。</span>  
> *We've actually had times where we've actually monitored a live conversation, caught a bug, deployed a fix, and then it's been proved for the rest of the session, and that customer doesn't even have to know that we shipped that fix behind the scenes.*  
> <span class="qm">—— Matt Lawler · [07:42]</span> ^q3

> <span class="qz">所以，在部署这个构建的第一周内，我们就把端到端解决率从 10% 提升到了 80%，而且用的是相当朴素的实现。</span>  
> *So we went from 10% to 80% end-to-end resolution rate in just the first week of deploying this build with a pretty naive implementation.*  
> <span class="qm">—— Matt Lawler · [08:09]</span> ^q4

> <span class="qz">而且我们总共只花了大约每月 700 美元的 token 和基础设施成本就做到了这一切。</span>  
> *And we did that all for around $700 a month in both token and infrastructure costs.*  
> <span class="qm">—— Matt Lawler · [08:17]</span> ^q5

> <span class="qz">理解你的客户在构建什么，最好的方式就是你自己真正去构建他们的同样产品。</span>  
> *The best way to understand what your customers are building is to actually build their same product yourself.*  
> <span class="qm">—— Matt Lawler · [10:11]</span> ^q6

> <span class="qz">我记得那大概是一个 30000 行的 ClaudeMD，里面全是各种护栏，以及关于他应该如何与客户打交道的建议。</span>  
> *I think it's like a 30,000 line ClaudeMD of all these guardrails and advice on how he should be operating with customers.*  
> <span class="qm">—— Matt Lawler · [11:37]</span> ^q7

> <span class="qz">所以这里面有一种元层面的东西：当你在和 Joey 聊如何构建语音智能体 API 时，你已经在使用它了，你已经亲眼看到你的产品体验会是什么样子。</span>  
> *So there's kind of a meta layer there where if you're talking to Joey about how to build a voice agent API, you're already using it, and you're already seeing exactly what your product experience could look like.*  
> <span class="qm">—— Matt Lawler · [14:12]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-26-talks-long-horizon-agents-need-experiments-not|给 AI 村庄装上自动研究循环：长时程智能体的实验配方]]<span class="pd-rz">同概念:RAG、护栏 (guardrails)</span>
- [[2026-10-08-mad-what-happens-when-billions-of-ai-agents|智能体时代的数据库：Andy Pavlo 谈 AI 如何重写数据库规则]]<span class="pd-rz">同概念:RAG、护栏 (guardrails)</span>
- [[2025-10-23-lennys-al-engineering-101-with-chip-huyen|Chip Huyen：别追 AI 新闻了，真正提升 AI 产品的是这些事]]<span class="pd-rz">同概念:RAG</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-05-22-talks-mastering-claude-code-in-30-minutes|Claude Code 实战技巧：从提问到并行]]<span class="pd-rz">同概念:ClaudeMD</span>
- [[2025-09-14-lennys-the-ultimate-guide-to-aeo-ethan-smith|AEO实战指南：如何让产品出现在ChatGPT答案里]]<span class="pd-rz">同概念:RAG</span>
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|SaaS 不会死,PM 迎来黄金期:Dan Shipper 的 AI 工作预测]]<span class="pd-rz">同概念:前置部署工程师 (Forward Deployed Engineer)</span>

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
