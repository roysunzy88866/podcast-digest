---
title: 给代码智能体装上搜索：EXA 的实战方法
podcast: 精选演讲
date: 2026-10-04
source_url: undefined
duration: "12:14"
type: episode
cover: "#64748b"
description: EXA 前置部署工程师 Jacob Hoisan 讲解如何为代码评审与编码智能体构建语义搜索，以及为什么光给智能体加搜索工具还不够。
guests: ["[[Jakub Hojsan]]"]
companies: ["[[Exa]]", "[[Exa Agent]]"]
concepts: ["[[智能体]]", "[[网页搜索]]", "[[知识截止日期]]", "[[代码审查]]", "[[语义搜索]]", "[[高亮蒸馏]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-02-talks-your-coding-agent-is-6-months-out-of-dat#post","headline":"给代码智能体装上搜索：EXA 的实战方法","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-02-talks-your-coding-agent-is-6-months-out-of-dat","mainEntityOfPage":"https://talk.solomind.cc/2026-10-02-talks-your-coding-agent-is-6-months-out-of-dat","description":"EXA 前置部署工程师 Jacob Hoisan 讲解如何为代码评审与编码智能体构建语义搜索，以及为什么光给智能体加搜索工具还不够。","datePublished":"2026-10-04","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jakub Hojsan"},{"@type":"Organization","name":"Exa"},{"@type":"Organization","name":"Exa Agent"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"网页搜索 (web search)"},{"@type":"Thing","name":"知识截止日期 (knowledge cutoff)"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"语义搜索 (semantic search)"},{"@type":"Thing","name":"高亮蒸馏 (highlights)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"给代码智能体装上搜索：EXA 的实战方法","item":"https://talk.solomind.cc/2026-10-02-talks-your-coding-agent-is-6-months-out-of-dat"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>给代码智能体装上搜索：EXA 的实战方法</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 给代码智能体装上搜索：EXA 的实战方法

<div class="pd-byl"><b>Jakub Hojsan</b> · EXA 前置部署工程师 · 2026-10-04</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-02-talks-your-coding-agent-is-6-months-out-of-dat.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">代码编写智能体其实并不需要你在搜索 Google 时看到的那 10 条蓝色链接。</div><div class="a">— Jakub Hojsan <button class="pd-ts" data-t="00:29" data-who="Jakub Hojsan" data-en="Coding agents don't really need these 10 blue links that you see when you search Google." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jakub Hojsan]]
>
> **公司** [[Exa]] · [[Exa Agent]]
>
> **概念** [[智能体]] · [[网页搜索]] · [[知识截止日期]] · [[代码审查]] · [[语义搜索]] · [[高亮蒸馏]]

这一集聊的是一件很具体的事：怎么给写代码和评审代码的 AI [[智能体|智能体]]装上好用的[[网页搜索|网络搜索]]。演讲者是 [[Exa|EXA]] 的前置部署工程师 Jacob Hoisan——他的工作就是帮客户把 EXA 的搜索接进自己的智能体。

EXA 做的不是 Google 式的「10 条蓝色链接」，而是一个[[语义搜索|语义搜索]]引擎：你传一个查询，它返回上下文丰富的高亮片段，直接喂给 LLM 用。按他的说法，湾区大部分 coding agent 公司(包括 Cursor、Cognition、Warp、CodeRabbit)的网页搜索都是 EXA 在背后驱动的。

## 核心问题：模型有「知识截止日期」

所有大语言模型都有[[知识截止日期|知识截止日期]]——模型训练数据截止的那个时间点，之后发生的事它一概不知道。Jacob 给出的量级是：从知识截止到模型发布，通常要落后大约六个月。这六个月里，真实仓库上的重要变更日志、新推的 PR,模型既无法用来创建新仓库，也根本没法评审。

他举了个真实例子：一个几个月前的向量存储 PR,落在模型截止日期之后的盲区里。人类怎么评审？

会去 Stack Overflow 上问「这个叫 inertia check 的随机变量是不是被删了？为什么我的代码编译不过？」——把报错贴上去，通常能拿到答案，然后提 PR 解决。

而一个没有网络搜索的 LLM 看这个 diff,会觉得「改动一致，像是一次清理」，看起来没问题。但实际上，删掉这个参数的原因是需要为一次依赖版本升级做重构。用网络搜索，智能体才能查看仓库本身、变更日志里的破坏性变更，然后深入解释这次迁移该怎么改。

## 光加工具不够：一个两步问题

这里有本集最反直觉的一点：仅仅把搜索工具接到智能体上，是不起作用的。Jacob 举的例子是 Claude Code——它原生就有网络搜索工具，但当你对它说「我想用 Sonnet 4.6 或 4.7」,模型会直接回答「这个版本不存在」，根本不去搜索。也就是说，即使工具有了访问权限，模型不知道自己该用它。

所以必须走两步：一是**指示智能体何时使用搜索**(因为它通常不会自己触发)，二是**实际执行搜索**。落地做法是给模型一套明确的规则。比如给[[代码审查|代码评审]]智能体写：当遇到一个升级依赖或版本的 diff 时，去查看上游源码验证这是否属实，然后把评审建立在你查到的内容之上。

## 高亮蒸馏：只喂模型需要的 500 个字符

EXA 返回的不是整个网页。它有一个解释步骤，把整个页面蒸馏成 LLM 回答这个问题真正需要的内容。Jacob 的原话：你不再给模型喂 100,000 个字符，而是只喂 500 个字符。

这个高亮抽取完全是计算性的，运行时直接抽取特定行，不经过 LLM,零裁剪、零额外延迟。同一个网站，问他的生平简介会返回「热爱摄影、骑摩托车」那些内容，问他的电话号码则返回完全不同的一组信息——按查询动态决定抽取什么。放到代码场景：一个仓库可能有海量代码，但你既不想把全部代码喂进模型，也不想再调一个模型去综合它。

## 为什么不直接用模型厂商自带的搜索

Jacob 给了四条理由：

- **透明性**：用 OpenAI 或 Anthropic 的内置网页搜索是个黑盒——调 API、综合信息、可能耗时长达 10 秒，最后你拿到一部分来源、却拿不到内容。用 EXA 能拿到完整追踪：确切的查询、确切的来源、传给模型的高亮，可以直接接进遥测系统，出问题时能排查。
- **省 token 的高亮**：如上所述，页面蒸馏成模型确切需要的内容。
- **成本**：模型提供商的成本高到让你注意不到搜索账单，但在足够大的工作负载下，EXA 的定价比原生搜索划算得多，多数情况下质量也更好。
- **不被绑定在一家模型商上**：用第三方搜索有一层标准化——GLM 出来就用 GLM,Anthropic、OpenAI 出新模型就用新模型，始终是同一个固定 API、同一组灵活参数，不用适配每家的搜索实现。

## 质疑环节：数十亿文档怎么排序

有观众问：互联网上数十亿文档的重排序和组织是怎么做的？Jacob 的回答：多阶段流程——查询转成查询嵌入，中间叠加关键词过滤与语义搜索，搜索过程中采用多轮重排序，丢弃不相关结果。索引是高度精选的：文档数量不如 Google 多，但他敢打赌，在这数百亿文档的索引里，文档质量非常高。

## 产品延伸：编码只是开始

Jacob 说编码只是起点——这也正是他加入 EXA 的原因之一，当时就有大批人想把 EXA 当作获取编码文档的搜索 API。在编码之外，他们推出了新产品 [[Exa Agent|Exa Agent]]:面向不想自己编排搜索、但需要好的搜索体验的场景，与多家数据提供商合作，从 SimilarWeb(网页分析)、Particle(播客情报)、Crunchbase(私募市场)等来源呈现高亮信息，正在为最大的金融公司和对冲基金提供支持。

现场他还演示了一个查询：找出所有提到过这场大会的人——结果里出现了他认识的、给他发过邮件的演讲者。接入方式上，通过 MCP 就能调用，基本覆盖所有支持 MCP 的提供商。

## 本集带走

- **给智能体加搜索是两步，不是一步**：接入工具只是第一步，必须再给模型写明确的触发规则(例如「遇到依赖升级的 diff 就查上游变更日志验证」)，否则模型会自信地告诉你「这个版本不存在」而不去搜。
- **别整页喂模型**：知识截止之后约六个月的真实仓库变更，模型天生看不见；搜索后要做页面蒸馏，把 10 万字符压到几百字符再喂给 LLM,省 token 也省注意力。
- **评审代码时，diff 看起来对不等于真的对**：一个「像清理」的参数删除，背后可能是依赖升级带来的破坏性变更，只有查上游源码才能解释清楚。
- **自建搜索工具时保留完整追踪**：确切的查询、来源、传给模型的高亮都落进遥测，出问题才能排查——这是厂商内置黑盒搜索给不了的。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">代码编写智能体其实并不需要你在搜索 Google 时看到的那 10 条蓝色链接。</span>  
> *Coding agents don't really need these 10 blue links that you see when you search Google.*  
> <span class="qm">—— Jakub Hojsan · [00:29]</span> ^q1

> <span class="qz">这样你就不再给模型喂 100,000 个字符了，你实际上只给它喂 500 个字符来回答这个问题。</span>  
> *So you're not feeding the model 100,000 characters anymore. You're feeding it quite literally only 500 characters to answer the question.*  
> <span class="qm">—— Jakub Hojsan · [03:09]</span> ^q2

> <span class="qz">仅仅给你的智能体加一个搜索工具是不够的。</span>  
> *Now, adding a search tool to your agent is not enough.*  
> <span class="qm">—— Jakub Hojsan · [03:20]</span> ^q3

> <span class="qz">通过为你提供互联网上几乎任何页面的内容，我们给搜索调用增加的额外延迟为零。</span>  
> *We add zero extra latency to our search call by providing you the contents of pretty much any page on the internet.*  
> <span class="qm">—— Jakub Hojsan · [06:26]</span> ^q4

> <span class="qz">我们的索引是高度精选的，所以我们的文档数量没有 Google 那么多，但我敢打赌，在我们数百亿文档的索引里，我们有质量非常高的文档。</span>  
> *Our index is highly curated, so we don't have as many documents as Google, but I bet you that we have very high-quality documents in our tens of billions of documents index.*  
> <span class="qm">—— Jakub Hojsan · [10:54]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-09-21-howiai-how-warp-ships-2-000-prs-a-month-with-ai|Warp CEO 的软件工厂：2000 个 PR 一个月，人成了瓶颈]]<span class="pd-rz">同公司:Warp · 同概念:代码评审 (code review)、智能体 (agent)、MCP</span>
- [[2026-09-30-talks-the-death-of-the-code-review-what-the-da|代码评审未死：人类从引擎变飞行员]]<span class="pd-rz">同公司:Cognition、Cursor · 同概念:代码评审 (code review)、智能体 (agent)</span>
- [[2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo|Datadog 4000 人AI赋能实战：删掉上下文反而更好]]<span class="pd-rz">同公司:Cursor · 同概念:代码评审 (code review)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-26-talks-knowledge-systems-the-new-gtm-stack-jeff|把市场推广当成 AI 工程问题：Exa 联合创始人的智能体优先打法]]<span class="pd-rz">同公司:EXA · 同概念:智能体 (agent)、MCP</span>
- [[2026-08-11-yc-peter-steinberger-fun-is-velocity-e3n9ea|OpenClaw 创始人复盘:被 18,000 人狂改、被舆论压垮,我学到了什么]]<span class="pd-rz">同概念:代码评审 (code review)、智能体 (agent)</span>
- [[2026-09-10-talks-mousepower-agents-that-can-t-be-measured|鼠标力：为智能体时代找回「马力」这把尺子]]<span class="pd-rz">同概念:代码评审 (code review)、智能体 (agent)</span>

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
