---
title: 差距不再是智能，而是上下文：给智能体造一个「上下文引擎」
podcast: 精选演讲
date: 2026-09-11
source_url: undefined
duration: "13:54"
type: episode
cover: "#64748b"
description: Unblocked 的 Brandon 讲解为什么 AI 编程智能体缺的不是聪明而是公司内部上下文，以及如何用上下文引擎解决。
guests: ["[[Brandon Waselnuk]]"]
companies: ["[[Unblocked]]"]
concepts: ["[[上下文工程]]", "[[上下文引擎]]", "[[智能体]]", "[[MCP]]", "[[RAG]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-09-talks-your-agents-lack-context-here-s-how-to-f#post","headline":"差距不再是智能，而是上下文：给智能体造一个「上下文引擎」","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-09-talks-your-agents-lack-context-here-s-how-to-f","mainEntityOfPage":"https://talk.solomind.cc/2026-09-09-talks-your-agents-lack-context-here-s-how-to-f","description":"Unblocked 的 Brandon 讲解为什么 AI 编程智能体缺的不是聪明而是公司内部上下文，以及如何用上下文引擎解决。","datePublished":"2026-09-11","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Brandon Waselnuk"},{"@type":"Organization","name":"Unblocked"},{"@type":"Thing","name":"上下文工程 (context engineering)"},{"@type":"Thing","name":"上下文引擎 (context engine)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"RAG"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"差距不再是智能，而是上下文：给智能体造一个「上下文引擎」","item":"https://talk.solomind.cc/2026-09-09-talks-your-agents-lack-context-here-s-how-to-f"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>差距不再是智能，而是上下文：给智能体造一个「上下文引擎」</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 差距不再是智能，而是上下文：给智能体造一个「上下文引擎」

<div class="pd-byl"><b>Brandon Waselnuk</b> · 2026-09-11</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-09-talks-your-agents-lack-context-here-s-how-to-f.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">差距不再是智能了,是上下文。</div><div class="a">— Brandon Waselnuk <button class="pd-ts" data-t="13:11" data-who="Brandon Waselnuk" data-en="The gap is not intelligence any longer. It's context." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Brandon Waselnuk]]
>
> **公司** [[Unblocked]]
>
> **概念** [[上下文工程]] · [[上下文引擎]] · [[智能体]] · [[MCP]] · [[RAG]]

[[Unblocked|Unblocked]] 的 Brandon 在 AIE 演讲，主题是「[[上下文工程|上下文工程]]」——怎么让 AI 编程[[智能体|智能体]]真正懂你的公司。他开场甩出的核心判断是：**差距不再是智能了，是上下文**。模型会继续变强，但要让它们在你的组织里高效、省 token 地干活，关键是你围绕模型构建的上下文。

他给的目标画面是：AI 生成的代码，应该让人感觉是「一个已经在你团队待了多年的人写出来的」。而要做到这一点，你得先意识到——**你自己一直都是那个[[上下文引擎|上下文引擎]]**。

你通过上班提问、提交 PR 被拒、开会、某晚值班把生产环境搞挂并搞清原因，慢慢把大脑 build 成了懂这家公司的引擎。而每次新开一个终端会话里的智能体，它非常聪明，却对你公司如何运作一无所知。

## 糟糕上下文的成本会复利累积

单个智能体阶段，坏上下文的代价还便宜；但沿着智能体采用曲线往前走，成本会不断复利：

- **厄运循环(doom loops)**:你让智能体做事，它说「我做完了」，你说「不对」，然后反复纠正——浪费搜索 token 和返工时间。
- **审查税**：进入并行智能体阶段后，AI 代码审查器同样需要关键上下文，才能理解业务逻辑、做出有效审查。
- **完全走出人工环节**：想让后台智能体「搞定它、别犯错」，就必须有一个它能随时查询的上下文引擎。

他类比软件工程里的「左移」(尽早发现缺陷)：上下文问题也要尽早发现，越晚越贵。

## 两个行不通的常见做法

从他们数百个企业和中型客户来看，最常见的两个「局部最优」陷阱：

**1. 精选上下文陷阱**：往文件系统里放一堆 markdown 文件，写上「这就是项目的全部上下文」，让智能体去 grep。问题：你得分发它；那个仓库会像你写过的所有其他文档一样腐化；而且你组织里谁是那个有品位、能为所有人策划这个仓库的「全知者」？

**2. [[MCP|MCP]] 平台期**：MCP(让智能体从外部系统取信息的协议)很棒，但取决于你怎么写工具描述，智能体可能根本不调用它；即使调用了，还有「搜索满足偏差」——智能体找到第一份它认为正确的信息就说「够了」，然后继续干活。可大多数组织里，昨晚有条 Slack 对话说你应该做 A 而不是 B,如果它先找到了某份架构记录，它永远不会再发现那条。

**根本问题：获取信息不等于理解**。用他的比喻：你的智能体看不到的是水面以下的一切——它完全能写出能编译的代码，但那段代码在凌晨一点把生产环境搞挂了，因为它不知道你们有个特定的发布流程、应该先关掉某个 feature flag。

## 上下文引擎的六个关键特征

Brandon 给出的引擎设计要点：①**统一系统上下文**——贯穿全组织的数据(他们面向工程团队及支持、销售等周边技术团队)；②**定向检索**——给个链接就能快速展开取回文档，深度研究走长线、需要速度时也要快；③**冲突解决**——旧架构图说做 A、昨晚和 CTO 的 Slack 对话说做 B,谁对？要用技术去判定；④**个性化相关性**——我是谁、我在哪工作、我在做什么；⑤**token 优化**——人机对话可以啰嗦，机器对机器必须精简，不撑爆上下文窗口；⑥**权限强制执行**——通过 OAuth 等机制，不该看到机密项目 A 的人，答案里绝不能泄漏。

他提到一个对比测试：同一个模型跑完全相同的提示词，带上下文 vs 不带。一个大任务，不带上下文用了约 2100 万 token,带上下文只用 1080 万，实际耗时省了两小时。日常效果是 token 减少约 50%、分诊更快，而且答案质量更好——因为它知道业务内部正在发生什么。

## 三个开源工具，自己动手

Brandon 现场发了三个二维码，给出可以直接拿走用的工具：

1. **社交评论网络工具**：全确定性编程遍历你的 GitHub,搞清你的团队里谁在干什么——谁提交了什么、在哪提交、谁在审查，并产出一张「专家图谱」；可选地加上 OpenAI 或 Anthropic 的 API 密钥，它还能自动标注出你的团队划分。这是给上下文引擎做「聚焦」的地基。
2. **repo rules 智能体**：找出你仓库里所有规则文件，检查重复和冲突，并生成一个可 grep 的索引，去重后提升上下文检索质量。
3. **「超越 [[RAG|RAG]]」工作册**：六个堆叠的 PR,教你从零构建关系型上下文引擎。核心洞见：RAG 很了不起，但人们实际问的是「过去一周我参与过哪些关于鉴权的开放 PR」——**RAG 单独答不了这种问题，你需要查询**：让智能体先发现 schema,再确定性地对它写查询，取出关系型数据。

他还提到，这套东西不止用于代码生成：客户成功人员在工单进来的那一刻就解决它，销售人员在 field 里随手查上下文引擎、更早在季度内成交。

## 本集带走

- **把自己当成(过时的)上下文引擎**：你脑中「公司怎么运作」的知识，正是智能体缺的东西——工程化地把它们交付给模型。
- **警惕两个陷阱**：手写 markdown 上下文仓库会腐化且没人维护得了；MCP 给了信息入口，但「找到第一条就满足」的偏差会让智能体漏掉关键的最新决策。
- **信息 ≠ 理解**：能编译的代码也可能搞挂生产环境，缺的是发布流程、feature flag 这类「水面以下」的组织知识。
- **RAG 不够，查询来补**：关系型问题(「我上周做过的关于 X 的 PR」)需要让智能体发现 schema 并确定性查询，不能只靠向量检索。
- **上下文能直接省钱**：实测同一个任务，带上下文从 2100 万 token 降到 1080 万，省约一半 token 和两小时。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">差距不再是智能了,是上下文。</span>  
> *The gap is not intelligence any longer. It's context.*  
> <span class="qm">—— Brandon Waselnuk · [13:11]</span> ^q1

> <span class="qz">AI 生成的代码,应该让人感觉是那种已经在你团队待了多年的人写出来的。</span>  
> *AI-generated code should feel like it was written by someone who's been on your team for years.*  
> <span class="qm">—— Brandon Waselnuk · [01:13]</span> ^q2

> <span class="qz">这里的问题在于,获取信息不等于理解。</span>  
> *The problem here is access to information is not understanding.*  
> <span class="qm">—— Brandon Waselnuk · [05:43]</span> ^q3

> <span class="qz">在大多数组织中,昨晚有一条 Slack 对话说你应该做 A 而不是 B,而如果智能体先找到了某份架构记录,它永远不会发现那条信息。</span>  
> *In most organizations, there's a Slack conversation from last night that says you should be doing A instead of doing B, and the agent will never find it if it found some architecture record first.*  
> <span class="qm">—— Brandon Waselnuk · [05:28]</span> ^q4

> <span class="qz">那个仓库会像你写过的所有其他文档一样腐化,而且你们组织里谁是那个无所不能、有品位为整个组织的每一个人去策划这个仓库的人?</span>  
> *That repo is gonna rot just like all the other docs you wrote down and then who at your org is the omnipotent one who has the taste to curate this file or repo for literally everyone in the org.*  
> <span class="qm">—— Brandon Waselnuk · [04:43]</span> ^q5

> <span class="qz">当你进入并行智能体等阶段,你开始碰到审查税。</span>  
> *As you move into parallel agents, et cetera, you start hitting a review tax.*  
> <span class="qm">—— Brandon Waselnuk · [03:38]</span> ^q6

> <span class="qz">确保这些模型能访问全部上下文,因为它们会找到你的未知的未知。</span>  
> *Making sure that these models have access to all of the context because they will find your unknown unknowns.*  
> <span class="qm">—— Brandon Waselnuk · [08:22]</span> ^q7

> <span class="qz">token 减少 50%,分诊更快,而且答案质量实际上更好,因为它知道业务内部正在发生什么。</span>  
> *50% fewer tokens, faster triage, and the answer quality is actually better because it knew what was going on inside of the business.*  
> <span class="qm">—— Brandon Waselnuk · [09:51]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同公司:Anthropic · 同概念:MCP、上下文工程 (context engineering)、智能体 (agent)</span>
- [[2026-07-17-talks-every-company-should-have-a-brain-garry|用 Markdown 组建一支军队:Y Combinator 掌门人的 AI 原生公司蓝图]]<span class="pd-rz">同概念:RAG、上下文工程 (context engineering)、智能体 (agent)</span>
- [[2026-09-08-eyeonai-86-of-what-coding-agents-do-is-just-read|把 100 万 token 用出 5 万的体验：SubQuadratic 的稀疏注意力]]<span class="pd-rz">同概念:RAG、上下文工程 (context engineering)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:MCP、智能体 (agent)</span>
- [[2026-08-09-talks-velocity-sickness-what-happens-when-your|速度病：当团队 10 倍速写代码却推不出产品，怎么治]]<span class="pd-rz">同概念:上下文工程 (context engineering)、智能体 (agent)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:智能体 (agent)</span>

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
