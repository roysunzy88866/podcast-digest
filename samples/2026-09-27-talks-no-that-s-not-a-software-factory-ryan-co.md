---
title: WorkOS 的软件工厂：别只盯着 AI 写了多少代码
podcast: 精选演讲
date: 2026-09-30
source_url: undefined
duration: "18:49"
type: episode
cover: "#64748b"
description: WorkOS 工程师 Ryan 讲解他们如何把工程流程（而不只是写代码）自动化进软件工厂，靠成果指标而非产出指标衡量价值。
guests: ["[[Ryan Cooke]]"]
companies: ["[[WorkOS]]"]
concepts: ["[[软件工厂]]", "[[TARS]]", "[[Horizon]]", "[[MCP 网关]]", "[[智能体]]", "[[沙箱]]", "[[成果指标]]", "[[Hilltop 文档]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-27-talks-no-that-s-not-a-software-factory-ryan-co#post","headline":"WorkOS 的软件工厂：别只盯着 AI 写了多少代码","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-27-talks-no-that-s-not-a-software-factory-ryan-co","mainEntityOfPage":"https://talk.solomind.cc/2026-09-27-talks-no-that-s-not-a-software-factory-ryan-co","description":"WorkOS 工程师 Ryan 讲解他们如何把工程流程（而不只是写代码）自动化进软件工厂，靠成果指标而非产出指标衡量价值。","datePublished":"2026-09-30","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Ryan Cooke"},{"@type":"Organization","name":"WorkOS"},{"@type":"Thing","name":"软件工厂 (software factories)"},{"@type":"Thing","name":"TARS"},{"@type":"Thing","name":"Horizon"},{"@type":"Thing","name":"MCP 网关 (MCP gateway)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"成果指标 (outcome metrics)"},{"@type":"Thing","name":"Hilltop 文档 (Hilltop)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"WorkOS 的软件工厂：别只盯着 AI 写了多少代码","item":"https://talk.solomind.cc/2026-09-27-talks-no-that-s-not-a-software-factory-ryan-co"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>WorkOS 的软件工厂：别只盯着 AI 写了多少代码</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# WorkOS 的软件工厂：别只盯着 AI 写了多少代码

<div class="pd-byl"><b>Ryan Cooke</b> · WorkOS 工程师 · 2026-09-30</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-27-talks-no-that-s-not-a-software-factory-ryan-co.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们认为软件工厂的梦想是，它给我们每一位工程师一个属于他们自己的小型工程团队。</div><div class="a">— Ryan Cooke <button class="pd-ts" data-t="02:50" data-who="Ryan Cooke" data-en="We think that the dream of the software factory is that it gives each of our engineers a small engineering team for themselves." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Ryan Cooke]]
>
> **公司** [[WorkOS]]
>
> **概念** [[软件工厂]] · [[TARS]] · [[Horizon]] · [[MCP 网关]] · [[智能体]] · [[沙箱]] · [[成果指标]] · [[Hilltop 文档]]

这一集聊的是「[[软件工厂|软件工厂]]」——把[[沙箱|沙箱]]、AI 编码[[智能体|智能体]]和提示词串成一条流水线，让它自动产出代码、开 PR、合并。这套玩法行业里已经有标准配置：Ramp 几个月前发博客介绍他们的系统，整个行业跟着兴奋起来。但站在台上讲的是 [[WorkOS|WorkOS]] 的工程师 Ryan，而 WorkOS 走了一条不太一样的路。

他的出发点是一个质疑：**行业里流行的成功指标全是「产出指标」，而这可能掩盖系统真实运作得好不好。** 大家在 X 和博客上晒的都是 AI 生成的 PR 占比、PR 数量、多少 AI 代码进了生产环境——可是 PR 百分比可能只是掩盖了 PR 总量的整体上升，你很难分清这些产出是不是真的在驱动成果。如果公司要投入工程时间、养一个全职团队来建这种自动化，就该问：它到底在为工程组织创造价值吗？

所以 WorkOS 衡量的不是代码产出，而是**[[成果指标|成果指标]]**：是否在加速交付功能、是否构建得更多发布得更多、复杂功能是否更快落地。他们对软件工厂的梦想定义是：给每一位工程师一个属于他自己的小型工程团队——那么后果就应该是东西造得更多、发得更快。

## 第一版工厂跑起来后，发现没用

起步阶段他们和其他工厂做的一样：基于 Cloudflare 搭沙箱，里面放一个 open code 模型路由器，喂提示词。结果很快就碰壁——这套东西相比工程师直接在自己笔记本上跑 Claude Code，提升几乎无法区分，「既不是渐进式的，也不是指数级的」。

这逼出了他们的核心认知：**工厂能产出代码是不够的，要把工程师产出产品过程中做的其他工作也自动化**——也就是把整套工程流程嵌入工厂本身。

## 两套系统：TARS 和 Horizon

他们把这件事拆成两套系统：

- **[[TARS|TARS]]**：用户与编码智能体交互的界面，嵌入他们日常用的工具——不只是 Slack，还有 Linear（项目管理工具）和 GitHub。他们通过 TARS 订阅这些系统的 webhook（系统事件推送），让 TARS 除了生成代码，还能跟踪项目进度。
- **[[Horizon|Horizon]]**：基础设施编排层，和 Ramp 的 Inspect、Minions 等其他公司的系统类似，但它坐在一个 [[MCP 网关|MCP 网关]]前面——后面会讲这个网关为什么对他们有变革性。

通过把源代码系统、项目跟踪系统里的活动以 webhook 喂给 TARS，工厂开始执行**产品工程工作**，而不只是代码工作。一个具体例子：在 Linear 里定义有依赖关系的工单（一张阻塞另一张，这是把大工作拆小的常见做法），TARS 收到「工单完成」的 webhook 后，能自动接手循环里的下一张工单。

于是团队在规划时构建一张「这个计划将如何执行」的地图，TARS 就能自主执行。更进一步，每张工单完成后还可以让 TARS 重新评估整个 Linear 项目、报告是否缺了新工单——因为干活的过程会让你发现计划里的缺口，他们想用智能体本身持续保持计划新鲜。

## 把产品工程文化编码进去

这套自动化的地基是 WorkOS 的「产品工程文化」：工程师对很多产品职能负责，团队里没有产品经理。他们的核心仪式是写一份叫 **[[Hilltop 文档|Hilltop 文档]]**的东西——本质是一份 PRD（产品需求文档），既定义项目目的，也纳入客户在谈什么、哪里有需求、竞品分析、早期设计稿和主要里程碑。全公司的产品工程师本来就在做这件事。

现在他们把这份文档直接交给智能体：智能体把它拆分成工作单元、拆成工单。他们甚至专门为此造了一个叫「PM」的智能体，负责根据一段简短规格说明起草 Hilltop 初稿、补充上下文、阅读人类审阅意见，然后接手实现并拆成工单。人类在每个环节都能留在循环里——对 AI 生成的工单评论、给进一步指导都很常见——但关键价值在于解决「冷启动」问题：不用一个人牧羊式地引导智能体走完生命周期的每一步，也不用面对空白文档从头写起。

Ryan 自己的实例：一两个月前他要给自己负责的 Vaults 产品加一个新 API，在 Slack 里敲一条命令、附几句描述就启动了项目。TARS 自动创建了所有资源——Linear 项目、Notion 文档草稿、决策日志、开放问题。

他作为主导产品工程师介入，用自己对项目的理解补齐定义不清的部分，再交回 TARS 执行。Hilltop 评审完成的工单一标记完成，TARS 就接手推进下一阶段。

当然智能体不完美——「有时它会严重高估我们想通过这个项目实现的目标，我们不得不删掉它提出的很多范围」。但在已有基础上做删减，比工程师自己花时间搭所有基础组件简单得多。

还有一个副产品：工作不一定非得用自家编码智能体实现。团队里很多人喜欢用外部的编码智能体，把它指向这些工单和文档就行；本地跑 Claude Code 用 Opus 也一样，通过 MCP 拿到这些文档作为上下文。安全团队也会进项目频道，对新项目的安全影响发表意见。

> 【背景】此处提到的外部编码智能体，闸门指出正文原写的「Devin」未在原文出现，故改用泛称。Devin 是 Cognition 公司推出的 AI 软件工程师智能体。

## MCP 网关：意外成为全公司杠杆

工厂开发早期，他们自建了一个 MCP 网关（MCP 是让 AI 智能体调用外部工具和数据的标准接口），称之为「上下文引擎」。它连接所有内部系统，还会构建系统提示词和上下文，告诉智能体**如何使用这些工具、何时使用、信息是怎么组织的**。

具体做法：接 Snowflake（他们的主数据湖），里面建了描述产品使用情况和客户对话的语义表，然后在 MCP 服务器的工具描述里给智能体一份清单——这些表里是什么内容、想回答哪类问题就为哪些表写查询。这给了智能体一种「方向感」。

最意外的发现：这个 MCP 服务器现在被大量其他内部工具使用，他们把它开放给全公司直接从 Slack 查询做数据和客户分析。原本只是想把编码智能体连到内部系统，结果成了很多内部团队的了不起的杠杆。Ryan 给刚开始搭软件工厂的团队的建议很直接：值得花时间投资一个内部 MCP 网关服务器，它既连接所有工具，又带着告诉智能体如何使用、信息如何组织的描述——你会在很多其他用例里发现它有用。

## 自动化的其他落点

bug 请求从 Slack 进来，TARS 通过 webhook 监听，做初步分诊和实现、开修复 bug 的 PR。很多客户在 Slack 共享频道里，TARS 分诊支持请求特别有用——因为它能看代码，常常能从代码角度理解客户在产品的哪里遇到了问题。

最让他们兴奋的方向是往「自我改进的软件」走：他们正在用 TARS 构建自己的沙箱基础设施，从沙箱即服务迁移出来自己拥有那一层——为的是对会话信息有深度控制、能在基础设施的不同部分之间移动工作负载。下一步是**记忆层**：一个常青的上下文，记录公司每个人在做什么、在哪个团队、负责什么产品，以及组织层面上 WorkOS 的语义和工作方式——既能插进软件工厂，也能把上下文抽出来接进其他 AI 工具。

## 怎么衡量工厂真的有用

他们的成果指标有几层：交付速度和客户影响（能不能真正给客户交付价值）；稳定性（衡量缺陷率、恢复时间等指标，担心自动化引入不稳定）；还有很大一部分是经验性的——看工程师是否在主动用 TARS、是否自愿从本地环境迁到云端沙箱，把这当作工厂在给他们加速的信号。

而自己拥有基础设施的真正好处是：能看到基础设施里正在发生什么，用这些信息**自我改进工厂**——把智能体指向会话记录，看人们使用工厂的差距在哪里；智能体犯错的地方是不是该构建一项新技能；六个月前写的技能是不是已经因代码变化而过时。

> 【背景】转写稿中的 "Devon" 按上下文应指 Cognition 公司的 AI 编码智能体 Devin；结尾提到的 "software vectors" 应为 "software factories"（软件工厂）。

Ryan 最后坦承有一个他们自己还没想明白的问题：在软件工厂里怎么处理授权（authorization）——如果你也在建软件工厂、对这个问题有见解，他很乐意聊。

## 本集带走

- **别用产出指标自欺**：PR 数量和 AI 代码占比可能掩盖 PR 总量上升；要衡量的是交付是否加速、缺陷率是否稳定，而不是生成了多少代码。
- **光自动化写代码不够**：WorkOS 第一版工厂相比工程师笔记本上跑 Claude Code 几乎没提升，真正起作用的是把工程流程（评审、拆票、规划）也编码进工厂。
- **用 webhook 让智能体自主接力**：工单完成事件触发 TARS 自动接下一张工单，还能定期重评项目、补缺工单，让计划保持新鲜。
- **解决空白页问题**：让「PM 智能体」起草 PRD/项目文档初稿，工程师在其上删改补齐——比从零搭建便宜得多，即使智能体常常高估范围。
- **尽早投资内部 MCP 网关**：不只连接工具，还要在工具描述里写清信息如何组织、何时该用什么——它会意外成为全公司做数据分析的杠杆。
- **拥有基础设施才能自我改进**：能看到会话数据，才能发现技能缺口、淘汰过时技能，让工厂自己越用越好。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">我们认为软件工厂的梦想是，它给我们每一位工程师一个属于他们自己的小型工程团队。</span>  
> *We think that the dream of the software factory is that it gives each of our engineers a small engineering team for themselves.*  
> <span class="qm">—— Ryan Cooke · [02:50]</span> ^q1

> <span class="qz">通过把其他源代码系统和项目跟踪系统中正在发生的活动以 webhook 的形式喂给它，我们开始达到那种自主性水平，我们的工厂在执行产品工程工作，而不仅仅是代码工作。</span>  
> *By feeding our web hooks activities that are happening in other source code systems and project tracking systems, we're starting to get to that level of autonomy where our factory is performing product engineering work, not just code work.*  
> <span class="qm">—— Ryan Cooke · [05:07]</span> ^q2

> <span class="qz">所以我们不需要一个人在整个生命周期的每一步都在牧羊式地引导这个智能体。</span>  
> *So we don't need a human to be shepherding this agent through every single step of the life cycle.*  
> <span class="qm">—— Ryan Cooke · [08:00]</span> ^q3

> <span class="qz">运行一个智能体并让它开一个 PR，这很酷。但我们真正认真思考的是我们的软件工程实践和流程，并且我们想把这些编码到自动化中。</span>  
> *It's cool to run an agent and have it open a PR. We really think about our software engineering practices and processes, and we want to encode those in automation.*  
> <span class="qm">—— Ryan Cooke · [18:09]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-24-practicalai-from-agents-md-to-enterprise-deployment|把智能体当普通应用来部署:企业级 AI 落地的老办法新用途]]<span class="pd-rz">同概念:MCP 网关 (MCP gateway)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-02-19-lennys-head-of-claude-code-what-happens|Claude Code 负责人：写代码已被解决，下一步是什么]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)、Claude Code</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)、Claude Code</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-20-talks-prototyping-as-leadership-how-a-cto-ship|管理者日程突然能写代码了：CTO 的通宵智能体工作流]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)、Claude Code</span>
- [[2026-10-03-talks-yolo-mode-safely-microvm-sandboxes-for-a|我用五个提示词「黑」了自己：你的 AI 助手并不安全]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)、Claude Code</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
