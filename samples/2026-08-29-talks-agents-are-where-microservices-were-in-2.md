---
title: Navan 架构师谈生产环境智能体：从运行时到护栏的实战分层
podcast: 精选演讲
date: 2026-09-27
source_url: undefined
duration: "19:08"
type: episode
cover: "#64748b"
description: Navan 首席架构师 Roberto Milev 与架构团队成员 Uday 分享在生产环境可靠运行 AI 智能体的分层参考架构与踩坑经验。
guests: ["[[Roberto Milev]]", "[[Uday Kanagala]]"]
companies: ["[[Navan]]", "[[AWS]]"]
concepts: ["[[智能体]]", "[[智能体运行时]]", "[[记忆]]", "[[上下文管理]]", "[[技能]]", "[[渐进式披露]]", "[[可观测性]]", "[[hooks]]", "[[轨迹数据]]", "[[护栏与授权]]", "[[人在回路]]", "[[MCP]]", "[[A2A 协议]]", "[[RAG]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-29-talks-agents-are-where-microservices-were-in-2#post","headline":"Navan 架构师谈生产环境智能体：从运行时到护栏的实战分层","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-29-talks-agents-are-where-microservices-were-in-2","mainEntityOfPage":"https://talk.solomind.cc/2026-08-29-talks-agents-are-where-microservices-were-in-2","description":"Navan 首席架构师 Roberto Milev 与架构团队成员 Uday 分享在生产环境可靠运行 AI 智能体的分层参考架构与踩坑经验。","datePublished":"2026-09-27","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Roberto Milev"},{"@type":"Person","name":"Uday Kanagala"},{"@type":"Organization","name":"Navan"},{"@type":"Organization","name":"AWS"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体运行时 (agentic runtime)"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"上下文管理 (context management)"},{"@type":"Thing","name":"技能 (skills)"},{"@type":"Thing","name":"渐进式披露 (progressive disclosure)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"hooks"},{"@type":"Thing","name":"轨迹数据 (trajectory)"},{"@type":"Thing","name":"护栏与授权 (guardrails and authorization)"},{"@type":"Thing","name":"人在回路 (human in the loop)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"A2A 协议 (A2A)"},{"@type":"Thing","name":"RAG"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Navan 架构师谈生产环境智能体：从运行时到护栏的实战分层","item":"https://talk.solomind.cc/2026-08-29-talks-agents-are-where-microservices-were-in-2"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Navan 架构师谈生产环境智能体：从运行时到护栏的实战分层</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Navan 架构师谈生产环境智能体：从运行时到护栏的实战分层

<div class="pd-byl"><b>Roberto Milev</b> · Navan 首席架构师 · 2026-09-27</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-29-talks-agents-are-where-microservices-were-in-2.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果你连一个单一的智能体循环都建不好，为什么还要去构建一个多智能体编排系统呢？</div><div class="a">— Roberto Milev <button class="pd-ts" data-t="01:28" data-who="Roberto Milev" data-en="if you can't build a single agentic loop, why go in and try to build a multi-agent orchestrated system?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Roberto Milev]] · [[Uday Kanagala]]
>
> **公司** [[Navan]] · [[AWS]]
>
> **概念** [[智能体]] · [[智能体运行时]] · [[记忆]] · [[上下文管理]] · [[技能]] · [[渐进式披露]] · [[可观测性]] · [[hooks]] · [[轨迹数据]] · [[护栏与授权]] · [[人在回路]] · [[MCP]] · [[A2A 协议]] · [[RAG]]

如果你在 AI [[智能体|智能体]](能自己规划步骤、调用工具完成任务的 AI 系统)上踩过坑，这一集会很有共鸣。说话的是 [[Navan|Navan]] 的首席架构师 [[Roberto Milev|Roberto Milev]] 和架构团队的 Uday——Navan 是一家差旅和费用管理公司，他们已经在生产环境跑着大量智能体、每天消耗大量 token。

开场 Roberto 先给了一个类比：当年大家一窝蜂上微服务，才慢慢学会了容器编排、服务网格；今天也一样——**如果你连一个结构良好的单体都建不好，就别去建微服务；如果你连一个单一的智能体循环都建不好，就别去搭多智能体编排系统**。围绕「怎么在生产环境可靠跑智能体」，一套参考架构正在浮现。

## 运行时：智能体天生带状态

传统微服务的整套方法论建立在「无状态扩展」上，而智能体恰恰相反：它们需要持久会话、需要隔离、生命周期也和传统 API 服务完全不同。云厂商纷纷进场填补这个空白——[[AWS|AWS]]、GCP、Azure 都有自己的[[智能体运行时|智能体运行时]]产品。Navan 全部跑在 AWS 上，重度使用 AWS 的 agent core 运行时，但会话持久化和状态恢复(进程重启后把会话状态还原回来)是官方没覆盖的空白，他们自己构建了。

## 记忆与上下文：把「技能」当作上下文单元

[[记忆|记忆]]层从 [[RAG|RAG]](检索增强生成，即把相关资料检索出来塞给模型)起步，行业已经形成一条「摄取 → 提取 → 整合 → 检索」的自动化流水线，记忆从短期对话记忆逐步积累为长期记忆，还有关于哪些实例成功、哪些失败的情景记忆。Navan 用 AWS 的 agent core 记忆，但按自己的用例做了定制。

[[上下文管理|上下文管理]]是更难的题目：上下文窗口越来越大，但上下文永远不够——而太多上下文智能体又会失去焦点。他们找到的有效做法是：**把[[技能|技能]](skill)当作上下文的单元**。

一个技能既包含某个领域或任务的指令和设置，也包含工具执行那部分智能体逻辑；技能是可插拔的工作单元，能独立测试、能复用，上下文从技能动态组合出来。再借助「[[渐进式披露|渐进式披露]]」——先加载有限范围的上下文，后续再按元数据逐步展开。

## 可观测性：别再翻日志，用 hooks 拦截

Uday 接棒后先问了全场一个问题：谁构建过跑 30 步、中途失败、还能快速搞清楚为什么失败的智能体？传统微服务靠查日志，但智能体输出大量思考内容，多到没法消化。

正确姿势是用 Claude 的 [[hooks|hooks]](在工具调用前后、会话前后等时点拦截智能体行为的机制)——在每次工具调用前后拦截，看它调了什么工具、做了什么决策，然后决定是阻止、放行，还是记录指标。Navan 用供应商 Braintrust 发出 OTL 追踪，通过 span 定位智能体卡在哪一步。

追踪里他们重点捕获几个信号：智能体当前的目标、操作背后的原因、信念状态、工具调用，以及每个决策的置信度分数——这个选择是由多条路径支撑，还是单纯推断出来的。如果是推断出来的答案，就安排[[人在回路|人类在环]]来引导和调整。

## 测试非确定性系统：轨迹评估

智能体是非确定性的——同样一个目标，它每次自行制定的步骤都不一样，「改一处、坏一处」是常态。无法画出确定性的执行图，Navan 转而依赖**轨迹(trajectory)评估**：不看它每步做对了什么，而是算它从起点到目标走了多远、偏离了多少，以此评估效率与完整性;再结合前面的推断信号，把疑似回归的情况循环回来、分类、修复。

## 护栏与授权：智能体代表我下单，算谁下的单？

大量信息被输进模型，敏感信息可能在我们不知情的情况下进入其中，治理层必须挡在前面。更微妙的是授权：「只要机票比 200 美元便宜就帮我订」——智能体代表你完成了购买，这次购买到底是你做的，还是「智能体版的你」做的？ 

传统上授权对象是用户或服务账号，现在智能体既可以代表用户行事、也可以自己作为账号，界线正在模糊，需要细粒度的授权决策和策略层。Navan 的做法是在每次工具调用前后都挂护栏，做检查、拦截和决策。

## 单智能体还是多智能体？

回到开场的类比：单智能体都没做好，别急着上多智能体。Navan 的架构是**单一主智能体 + 子技能**：一个主智能体渐进式加载技能，自己判断什么该进上下文，在用例中导航，内部再分出子智能体。多智能体的合理场景主要是组织边界：大规模组织里各团队互不沟通，两边各挂一个智能体，用 [[A2A 协议|A2A 协议]](智能体对智能体通信的协议)在技能层面建立契约，协议本身就是团队之间的边界。

## 成熟度盘点：什么解决了，什么还在挣扎

Roberto 最后盘点整个栈：**运行时基本解决了**；编排和扩展靠暴力堆 LLM 也不是问题；记忆会随着前沿模型和实践进步逐步覆盖大多数用例；[[MCP|MCP]] 已成事实协议，工具调用人人都支持，行业在趋同，MCP 本身也在演进(正在变得无状态)。

还在挣扎的地方：**[[可观测性|可观测性]]**——业界在向 OTL 推进，但 OTL 真的适合智能体调用吗？能跑，但未知还很多；**测试**依然很难，不过他们已经能在系统不可靠的情况下给客户高质量体验；**成本**是最大的痛点之一——很难预测、很难管理、很难设护栏，部分原因是大 AI 厂商的利益就是让大家多花 token;**重放与调试**也很难，但他认为这会被解决——因为可以用智能体来克服调试智能体的认知过载。

标准由社区形成中，A2A 还年轻、由某些厂商推动，但随着时间推移会到位。他的结论：「我们知道自己需要什么，接下来就看我们自己去把它构建出来了。」

## 本集带走

- **先做好单智能体循环，再谈多智能体编排**——Navan 的架构就是单一主智能体 + 子技能，靠渐进式加载技能来导航，不过度工程化。
- **把「技能」当上下文单元**：指令 + 工具执行打包成可插拔、可独立测试、可复用的工作单元，上下文从技能动态组合，避免「上下文太多反而失焦」。
- **别靠翻日志调试智能体**：用 hooks 在工具调用前后拦截，发出含目标、推理原因、置信度的 OTL 追踪，定位卡点。
- **非确定性系统的测试用[[轨迹数据|轨迹评估]]**：不算每步对错，算从起点到目标的完成度与偏移，推断型答案配人类在环。
- **护栏挂在每次工具调用前后**：智能体代表用户行事让授权界线模糊，需要细粒度策略层，也防敏感信息悄悄进模型。
- **成本是当前最未解的一层**：难预测、难管理、难回退，要用更便宜的模型分担任务也得靠自己搭机制。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">如果你连一个单一的智能体循环都建不好，为什么还要去构建一个多智能体编排系统呢？</span>  
> *if you can't build a single agentic loop, why go in and try to build a multi-agent orchestrated system?*  
> <span class="qm">—— Roberto Milev · [01:28]</span> ^q1

> <span class="qz">上下文窗口越来越大，但上下文永远不够。</span>  
> *Context windows are growing bigger, but there's never enough context.*  
> <span class="qm">—— Roberto Milev · [05:20]</span> ^q2

> <span class="qz">所以是我做的这次购买，还是「智能体版的我」代表我做的？</span>  
> *So is it me making this purchase or is it agent me making on behalf of me?*  
> <span class="qm">—— Uday Kanagala · [13:12]</span> ^q3

> <span class="qz">这一切在很大程度上是由那些大型 AI 厂商驱动的，我认为他们的利益就在于让我们所有人都花更多的 token。</span>  
> *This is all driven by kind of the big AI vendors who I think their interest is for us all to spend more tokens.*  
> <span class="qm">—— Roberto Milev · [18:12]</span> ^q4

> <span class="qz">这也是会被解决的问题，因为我们现在可以用智能体来克服「试图调试智能体行为」所带来的认知过载。</span>  
> *This is also something that is gonna be solved because we can now use agents to get over the cognitive overload of trying to debug what they do.*  
> <span class="qm">—— Roberto Milev · [18:30]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:MCP、技能 (skills)、智能体 (agent)、记忆 (memory)</span>
- [[2026-09-14-talks-harness-engineering-building-the-product|Harness 工程：把智能体部署到云端规模]]<span class="pd-rz">同概念:MCP、可观测性 (observability)、智能体 (agent)、记忆 (memory)</span>
- [[2026-09-17-sed-scaling-agent-workloads-at-vercel|把智能体从「桌上的宠物」搬进云端：Vercel 开源框架 Eve]]<span class="pd-rz">同概念:MCP、技能 (skills)、智能体 (agent)、记忆 (memory)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同概念:MCP、可观测性 (observability)、智能体 (agent)</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:智能体 (agent)、记忆 (memory)</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)</span>

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
