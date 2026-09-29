---
title: "别再让人适应软件:让 AI 现场为你生成界面"
podcast: 精选演讲
date: 2026-09-28
source_url: undefined
duration: "23:00"
type: episode
cover: "#64748b"
description: "Commerce Tools 总经理 Gus 讲解如何用 AI 按需生成界面:三种 UI 协议路线的取舍、原子设计如何约束 AI 摆放组件，以及团队的踩坑与解法。"
guests: ["[[Gus Iwanaga]]"]
companies: ["[[Commerce Tools]]"]
concepts: ["[[生成式 UI]]", "[[编排器]]", "[[UX 智能体]]", "[[UI 协议]]", "[[A2UI]]", "[[组件目录]]", "[[原子设计]]", "[[MCP]]"]
category: 智能体
tags:
  - 智能体
  - 产品方法
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-01-talks-the-end-of-the-static-screen-architectin#post","headline":"别再让人适应软件:让 AI 现场为你生成界面","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-01-talks-the-end-of-the-static-screen-architectin","mainEntityOfPage":"https://talk.solomind.cc/2026-09-01-talks-the-end-of-the-static-screen-architectin","description":"Commerce Tools 总经理 Gus 讲解如何用 AI 按需生成界面:三种 UI 协议路线的取舍、原子设计如何约束 AI 摆放组件，以及团队的踩坑与解法。","datePublished":"2026-09-28","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Gus Iwanaga"},{"@type":"Organization","name":"Commerce Tools"},{"@type":"Thing","name":"生成式 UI (generative UI)"},{"@type":"Thing","name":"编排器 (orchestrator)"},{"@type":"Thing","name":"UX 智能体 (UX agent)"},{"@type":"Thing","name":"UI 协议 (UI protocols)"},{"@type":"Thing","name":"A2UI"},{"@type":"Thing","name":"组件目录 (component catalog)"},{"@type":"Thing","name":"原子设计 (atomic design)"},{"@type":"Thing","name":"MCP"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"别再让人适应软件:让 AI 现场为你生成界面","item":"https://talk.solomind.cc/2026-09-01-talks-the-end-of-the-static-screen-architectin"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>别再让人适应软件:让 AI 现场为你生成界面</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 别再让人适应软件:让 AI 现场为你生成界面

<div class="pd-byl"><b>Gus Iwanaga</b> · Commerce Tools 总经理 · 2026-09-28</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-01-talks-the-end-of-the-static-screen-architectin.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">这实际上就是把我们的 UX 知识编码进这个智能体。</div><div class="a">— Gus Iwanaga <button class="pd-ts" data-t="19:32" data-who="Gus Iwanaga" data-en="This is literally us codifying our UX knowledge into this agent." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Gus Iwanaga]]
>
> **公司** [[Commerce Tools]]
>
> **概念** [[生成式 UI]] · [[编排器]] · [[UX 智能体]] · [[UI 协议]] · [[A2UI]] · [[组件目录]] · [[原子设计]] · [[MCP]]

过去 40 年，我们一直在推送静态的软件体验——人去适应软件，而不是软件适应人。一个普通用户的日常要用好几个 SaaS 应用，每个都有自己的心智模型、自己的操作逻辑，认知负担全都压在用户身上。

这是 [[Commerce Tools|Commerce Tools]] 总经理 Gus 的开场判断。他负责公司 0 到 1 产品的产品 UX 和工程，这家公司是 API 优先的电商平台，有 300 多个 API 还在增加。

GPT 问世时，我们窥见了真正个性化的样子，但其他一切都还是静态的；即使有了 AI，我们发布东西快了很多，界面本身在很大程度上仍然是死的。他的问题是：为什么？

去年八月，他和公司创始人坐下来问了一个问题：透过人工智能的视角，如果能彻底改变我们与软件交互的方式，可以做出哪些根本性转变？答案就是他要演示的产品。

## 最初的尝试：完全放手给 AI,结果是灾难

第一版产品的做法很自然：用户输入一个查询，比如「创建一份 Q1 的销售报告」，让 AI 自主决定布局、信息架构、从[[组件目录|组件目录]]里检索哪些组件。结果呢？

同一个查询换四种措辞，生成了四个完全不同的变体：这一个满屏 KPI 卡片，下一个「Q1」变成了「一月到三月」，第三个塞了更多文字和图表——完全没有一致性。 他给团队的反馈是「不、不、还有不」，无论如何不可能把这个发布到生产环境。

这暴露了[[生成式 UI|生成式 UI]] 的核心矛盾：非确定性的模型，每次输出都不一样。如果这是一个高度个性化的体验，用户每次提问模型都生成不同的界面，只会制造混乱。

## 演示现在的版本：编排器 + UX 智能体的分工

现在的方案精致多了。用户说「我想策划一个营销活动」，底层有一条编排链路：[[编排器|编排器]]先提取查询的意图；基于意图定位工具——可以是一方工具、第三方工具，甚至 [[MCP|MCP]] 服务器上的智能体；这些输出组合起来，为 [[UX 智能体|UX 智能体]]提供足够的「弹药」和上下文，最终渲染出有意义的界面。 关键是：界面由 AI 决定，但由人引导——他要反复强调这一点。

## 三条路线：你对体验要多少控制权

渲染这类界面有三种 [[UI 协议|UI 协议]]路线，选择的依据是你想对体验施加多少控制。

**一是完全控制**：组件原样交付，智能体只能从目录里选取并按你描述的方式展示。ChatGPT 里帮你找餐厅的那种卡片组件就是这样，非常「固执己见」。如果业务像订房网站那样场景固定，这条路效果很好。

**二是完全开放**：把全部自主权交给 LLM。一个 MCP 工具直接发送 HTML,在沙箱 iframe 环境里渲染到任意宿主——可以是 Claude、ChatGPT 或任何聊天工具。

他现场让 Claude「创建一个三层的组织架构图」，一句提示就渲染得很好。但站在公司立场，他不建议这么做：你无法控制输出和结果。

作为 UX 负责人，他的态度很明确：「你必须掌控。」本周会上好几场演讲都在讲设计、品味和判断力——如果你想走这条协议之路，不能把太多实际体验委托给 LLM。

**三是声明式，他们的选择，居于中间**：Google 的 [[A2UI|A2UI]]、Vercel 的 JSON render、Thesis 的 OpenUI 等协议都提供这种中间态。流程是：编排智能体完成意图分类、调用工具、检索数据之后，把目录中符合条件的组件映射到工具的实体上，然后广播一份 UI 描述——像一个 UI 规范。

组件目录用 ZOD schema 定义，必须符合协议要求，最终渲染成原生 UI(他们的例子里是 React 组件)。声明式方法最大的好处：**在任何地方都符合你的设计系统**。 对 B2B SaaS 来说这很关键——客户一直在抱怨流程困惑、配置太多，你不想过于僵化死板，但也不能放任 LLM 随意改文案、改时间表述。

## 挑战一：谁负责摆放组件？

即使编排器取对了组件，怎么在 UI 里摆放完全取决于 LLM,而放任不管，摆放可能完全是随机的。这是信息架构问题，是 UX 的关键一环。

他们的解法是借用**[[原子设计|原子设计]]**(一种把界面拆成从最小元素到完整页面、分层级组织的方法论)，并教 UX 智能体「什么是好的样子」——给定情况下的最优布局是什么。具体做法是定义一个层级结构：整体页面即布局，布局包含槽位，槽位里有子槽位，子槽位可以再嵌套子槽位，子槽位里放符合条件的组件类别。

因为有了编排器，他们把顺序颠倒：从组件出发，组件映射到子槽位，子槽位映射到槽位，槽位映射到模板，然后按需排布。 用他的话说，这「实际上就是把我们团队积累多年的 UX 知识编码进这个智能体」——之后不管什么查询，都遵循同样的方法。他坦承这是一个极其艰难的挑战，现在仍然是。

## 挑战二：组件目录成了整个系统的心脏

设计系统和组件目录变成了整个东西的「心脏」。他怎么强调都不为过：如果你看到了在自己产品里用这些 UI 协议的潜力，目录这件事会是一件大事。 

因为目录是智能体和 UI 之间的契约——每一个属性都很重要，布局组件(槽位、子槽位)也一样，各有各的属性。他把这些统称为「策展」：这种策展是绝对必需的，这样你交付的才是有意义的东西，而不是外面那些「为了演示而演示」的 demo。他们持续在测试 A2UI、JSON render、OpenUI 这些协议，但目录的维护一直相当有挑战性。

## 挑战三：团队不再画像素了

一个容易被忽视的重大挑战：他的团队不再设计像素了，不再手工设计整个流程，AI 在很大程度上决定这些。工作的性质发生了相当大的转变，即使对非技术背景的 PM 和 UX 设计师也是一次很大的冲击。 

因为现在大家谈的是 schema、目录策展、规则、可以生成什么合成数据、如何生成能映射到特定组件的查询、交互模式——全是过去设计师不碰的东西。他的提醒是：如果你们要走这条路，人的因素非常重要。他和其他领导者交流时常说「三个 P」——人员、产品和流程，外加一个非常轻量的流程。

他的收尾判断很直接：生成式 UX 和 UI 的普及「这只是时间问题」，它正在到来。

## 本集带走

- **别把体验全权交给 LLM**:完全开放的路线(直接生成 HTML 渲染)demo 好看，但输出不可控、每次不一致；业务场景固定的(如订房卡片)可以用完全控制的预制组件。
- **中间态最实用**：用声明式 UI 协议(如 Google 的 A2UI、Vercel 的 JSON render)让 AI 组装、但组件必须来自你的目录、符合你的 schema——好处是输出在任何地方都符合设计系统。
- **用槽位层级约束 AI 的摆放**：布局→槽位→子槽位→组件的层级，再从组件反推映射到模板，等于把团队的 UX 知识编码进智能体，解决「组件随机摆放」的问题。
- **把组件目录当契约来维护**：目录是智能体和 UI 之间的契约，每个属性都重要；这份「策展」工作是交付可用产品、而非玩具 demo 的分水岭。
- **提前管理团队转型**：设计师和 PM 的工作从画像素转向 schema、规则和合成数据；用「人员、产品、流程」三个 P 配一个轻量流程来承接这场转变。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">这实际上就是把我们的 UX 知识编码进这个智能体。</span>  
> *This is literally us codifying our UX knowledge into this agent.*  
> <span class="qm">—— Gus Iwanaga · [19:32]</span> ^q1

> <span class="qz">目录是智能体和 UI 之间的契约。</span>  
> *The catalog is the contract between the agent and the UI.*  
> <span class="qm">—— Gus Iwanaga · [20:40]</span> ^q2

> <span class="qz">我的团队不再设计像素了。</span>  
> *My teams do not design the pixel anymore.*  
> <span class="qm">—— Gus Iwanaga · [21:26]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-10-talks-generative-ui-in-python-jeremiah-lowin-p|把互联网装进智能体：FastMCP 作者用 Python 造 UI 的古怪实验]]<span class="pd-rz">同概念:MCP、生成式 UI (generative UI)、沙箱 (sandbox)</span>
- [[2026-09-09-talks-mcp-apps-give-the-model-data-give-the-us|把网站装进 ChatGPT：Indeed 的 MCP Apps 实战三条铁律]]<span class="pd-rz">同公司:ChatGPT、Claude · 同概念:MCP</span>
- [[2026-09-14-eyeonai-the-hidden-algorithm-that-decides-which|当 AI 决定买什么软件：G2 的「信任层」生意]]<span class="pd-rz">同公司:ChatGPT、Claude · 同概念:MCP</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Claude · 同概念:MCP</span>
- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同公司:Claude · 同概念:MCP</span>
- [[2025-05-22-talks-mastering-claude-code-in-30-minutes|Claude Code 实战技巧：从提问到并行]]<span class="pd-rz">同概念:MCP</span>

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
