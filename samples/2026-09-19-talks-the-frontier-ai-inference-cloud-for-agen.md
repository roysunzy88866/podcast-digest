---
title: 智能体推理不是聊天加量：Friendly AI 重建推理云
podcast: 精选演讲
date: 2026-09-21
source_url: undefined
duration: "14:48"
type: episode
cover: "#64748b"
description: Friendly AI 创始人兼 CEO Gon 讲解智能体推理为何不同于聊天，以及前缀缓存、KV 缓存管理、缓存感知路由等关键工程如何把端到端任务延迟降下来。
guests: ["[[Byung-Gon (Gon) Chun]]"]
companies: ["[[Friendly AI]]"]
concepts: ["[[智能体推理]]", "[[智能体]]", "[[开放权重模型]]", "[[推理]]", "[[连续批处理]]", "[[前缀缓存]]", "[[KV 缓存管理]]", "[[缓存感知路由]]", "[[智能体感知优化]]", "[[GLM 5.2]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-19-talks-the-frontier-ai-inference-cloud-for-agen#post","headline":"智能体推理不是聊天加量：Friendly AI 重建推理云","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-19-talks-the-frontier-ai-inference-cloud-for-agen","mainEntityOfPage":"https://talk.solomind.cc/2026-09-19-talks-the-frontier-ai-inference-cloud-for-agen","description":"Friendly AI 创始人兼 CEO Gon 讲解智能体推理为何不同于聊天，以及前缀缓存、KV 缓存管理、缓存感知路由等关键工程如何把端到端任务延迟降下来。","datePublished":"2026-09-21","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Byung-Gon (Gon) Chun"},{"@type":"Organization","name":"Friendly AI"},{"@type":"Thing","name":"智能体推理 (agentic inference)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"开放权重模型 (open-weight models)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"连续批处理 (continuous batching)"},{"@type":"Thing","name":"前缀缓存 (prefix caching)"},{"@type":"Thing","name":"KV 缓存管理 (KV cache management)"},{"@type":"Thing","name":"缓存感知路由 (cache-aware routing)"},{"@type":"Thing","name":"智能体感知优化 (agent-aware optimization)"},{"@type":"Thing","name":"GLM 5.2"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"智能体推理不是聊天加量：Friendly AI 重建推理云","item":"https://talk.solomind.cc/2026-09-19-talks-the-frontier-ai-inference-cloud-for-agen"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>智能体推理不是聊天加量：Friendly AI 重建推理云</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 智能体推理不是聊天加量：Friendly AI 重建推理云

<div class="pd-byl"><b>Byung-Gon (Gon) Chun</b> · Friendly AI 创始人兼 CEO · 2026-09-21</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-19-talks-the-frontier-ai-inference-cloud-for-agen.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">所以智能体推理不仅仅是带更多请求的聊天，它是一个不同的问题。</div><div class="a">— Byung-Gon (Gon) Chun <button class="pd-ts" data-t="06:35" data-who="Byung-Gon (Gon) Chun" data-en="So agency inference is not just chat with more requests. It's a different problem." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Byung-Gon (Gon) Chun]]
>
> **公司** [[Friendly AI]]
>
> **概念** [[智能体推理]] · [[智能体]] · [[开放权重模型]] · [[推理]] · [[连续批处理]] · [[前缀缓存]] · [[KV 缓存管理]] · [[缓存感知路由]] · [[智能体感知优化]] · [[GLM 5.2]]

这一集是 [[Friendly AI|Friendly AI]] 创始人兼 CEO Gon 的演讲，主题是「[[智能体推理|智能体推理]]」——当 AI [[智能体|智能体]](能自主规划、调用工具、连续执行任务的大模型程序)成为主要负载后，[[推理|推理]]基础设施需要怎么重建。他抛出的核心判断是：智能体推理不是「带更多请求的聊天」，而是一个完全不同的问题，必须为整个任务而不是单个请求做优化。

先交代背景。Friendly AI 是一家「面向智能体的前沿 AI 推理云」，为智能体大规模运行推理，主打更快、更便宜、更可靠。团队诞生于首尔国立大学的一个研究团队，是发明 continuous batching(一种让多个请求动态合并进同一批处理、大幅提升 GPU 利用率的推理优化)的团队，这项技术如今已成为全行业标准；他们早年还启发了被广泛使用的开源框架 vLLM。

Gon 认为 2026 年是智能体大规模进入生产环境的年份，背后是两个趋势汇聚：一是智能体采用正在指数级增长，横跨软件、运营和知识工作；二是[[开放权重模型|开放权重模型]](模型参数公开、可以自己部署的模型，区别于闭源 API)已经达到前沿水平，让智能体在经济上变得可行。

## 开放权重模型已跨过质量阈值，但便宜 5.6 倍

为了让「开放权重够用了」这件事具体化，他给两个模型完全相同的任务——用编码智能体构建一个塔防游戏。左边是运行在 Friendly AI 上的开放权重模型 [[GLM 5.2|GLM 5.2]]，右边是对标前沿的闭源模型 Opus 4.8。

> 【背景】「Friendly AI」为转写稿中的服务名称；右边的对比模型所属公司原文未明示，此处改为不指明厂商的说法。

重点不是输出一模一样，而是两者完成任务的水平都「明显可用」。

经济性却截然不同：同样的任务，Opus 4.8 成本约 1.50 美元，GLM 5.2 只要 0.27 美元，便宜 5.6 倍。开放权重模型让你以几分之一的成本拿到前沿质量的智能体。

但他紧接着指出：模型成本只是故事的一半。要让智能体真正快和可靠，推理栈本身必须改。

## 为什么智能体负载和聊天是两回事

过去的主导用法是聊天：基本单元是一次请求，人问、模型答、人读，延迟的含义是「我多快拿到一个响应」。智能体的基本单元则是任务——一个任务可能包含很多次模型调用、很多次工具调用，还会自主运行一段时间。用户不在乎单个请求的延迟，在乎的是整个任务何时完成。

拆开看智能体的运行方式：一个任务跑在一个循环里——先规划(通常是一次 LLM 调用)，再行动(比如调一个工具)，然后观察结果、把结果追加回上下文，如此反复直到任务完成。所以系统在 LLM 推理和非 LLM 的工具执行之间不断交替，LLM 调用之间存在间隙；智能体还能创建子智能体并行运行。

输入形态也完全不同。他们内部每天用 GLM 5.2 跑编码智能体，其提示词和补全长度远超聊天，而且随任务推进不断增长——因为每次观察都会追加回上下文。

这里有一个关键模式：**相邻的智能体步骤通常共享一个巨大的前缀**。如果每次都重新计算相同的前缀，就是在已经做过的工作上烧算力——Gon 称这是智能体推理中最大的机会之一。

极端例子是深度研究这类长时程任务：他们用 Claude Code 配 GLM 5.2 跑「解释 vLLM 中的 spec decoding 框架」，多个阶段、每个阶段由多个子智能体组成，可能运行数十甚至数百个推理步骤，有时持续几分钟甚至几小时，共享上下文全程增长。所以智能体推理有四个特征：上下文随时间增长、工具工作交错在模型调用之间、调用次数取决于输入(没法按固定请求速率规划)、真正的指标是端到端任务延迟。

## 重建推理云：四大支柱

Friendly AI 围绕这些挑战逐层重建了技术栈，唯一目标是优化端到端任务延迟。今天讲四大支柱：[[前缀缓存|前缀缓存]]、[[KV 缓存管理|KV 缓存管理]]、[[缓存感知路由|缓存感知路由]]、[[智能体感知优化|智能体感知优化]]。

**前缀缓存**。既然智能体步骤共享大前缀，就对前缀只计算一次键值(即 KV 缓存，模型处理文本时生成的中间状态，复用它就不用重算)并缓存；后续步骤复用缓存，只处理新的后缀。从缓存读取比计算预填充便宜得多，既改善首 token 时间，又减少每步算力消耗——任务跑得越久越有价值。

**KV 缓存管理**。缓存要有效，前提是装得下、搬得动。他们的手段：节俭的内存管理，把更多活跃上下文打包进每块 GPU 内存；KV 量化(用更低的数值精度存缓存)减少内存占用；跨 GPU 内存、主机内存和磁盘的分层缓存，突破 GPU 内存上限；还有分布式缓存，让一个前缀可以跨副本提供服务，而不只在一个实例内部。

**缓存感知路由**。到了全局集群规模，路由变得关键。

朴素的负载均衡器会把请求均匀分散到各 GPU 集群——但这会破坏缓存局部性。缓存感知路由器更聪明：把请求发到已经缓存了正确前缀的 pod 上，把一次冷启动预填充变成一次热缓存命中；同时仍要平衡负载，不让某条路径成为热点。

**智能体感知优化**——他称之为智能体推理的下一个前沿。今天大多数系统调度每次 LLM 调用时都当作独立的，不理解它是更长智能体程序的一部分。

但如果优化器知道智能体层面的上下文，就能做出更好的决策：比如抢占正确的工作、为可能的下一步预填充上下文、或基于智能体上下文做更好的缓存淘汰决策。目标始终是降低端到端任务延迟，而不是让单次调用看起来快。

这些整合起来的效果：用同一个模型 GLM 5.2、用 Kilo code 创建一个简单的手机游戏，分别通过 Friendly AI 和另一家知名推理提供商的 API 跑同样的任务，Friendly AI 端到端完成得更快。

## 落地与产品形态

这套能力拼起来解锁的是更强的生产级智能体技术栈：拿你已有的智能体，接入开放权重前沿模型(GLM 5.2、Minimax、Kimi,由 Friendly AI 提供服务)，模型给你前沿能力和更好的经济性，Friendly AI 给你生产所需的速度、可靠性和端到端任务性能。

客户横跨 AI 原生初创公司到全球企业：Hilo 是服务数百万用户的智能体编程工具；LG 则是业务涵盖电子、医疗保健和能源的全球企业——很不同的公司，要的东西一样：快速、可靠、高性价比的智能体推理。Hilo 的推荐语写道：过去一年他们测试了多家托管开放和闭源模型的推理提供商，在对 GLM-5 用量的对比测试中，与其他第三方提供商及模型实验室的直接使用相比，Friendly AI 始终快七倍，错误率显著更低。

使用方式有三种：模型 API(通过无服务器 API 用前沿开放权重模型，最快上手)、专用端点(隔离部署、有保障的 SLA)、BYOG 自带 GPU(在自己的基础设施上运行)——同一个技术栈，三种部署方式。

## 本集带走

- **智能体推理的基本单元是任务，不是请求**：用户在乎的是整个任务何时完成，所以优化目标要从单请求延迟换成端到端任务延迟。
- **相邻智能体步骤共享巨大前缀，这是最大的优化机会**：前缀只算一次 KV 缓存、后续复用，避免在已做过的工作上重复烧算力。
- **缓存要有效，得靠一整套管理**：节俭内存管理、KV 量化、跨 GPU/主机/磁盘的分层缓存、跨副本的分布式缓存，缺一不可。
- **路由必须「缓存感知」**：把请求发到已有正确前缀缓存的节点，把冷启动预填充变成热缓存命中——均匀分流的朴素负载均衡反而破坏性能。
- **下一个前沿是让调度器理解智能体程序**：利用智能体层面的上下文做抢占、预填充下一步、优化缓存淘汰，而不把每次调用当独立请求。
- **开放权重模型已跨过可用阈值，成本差 5 倍以上**：同样的编码任务，Opus 4.8 约 1.50 美元、GLM 5.2 仅 0.27 美元。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">所以智能体推理不仅仅是带更多请求的聊天，它是一个不同的问题。</span>  
> *So agency inference is not just chat with more requests. It's a different problem.*  
> <span class="qm">—— Byung-Gon (Gon) Chun · [06:35]</span> ^q1

> <span class="qz">开放权重模型让你以几分之一的成本获得前沿质量的智能体。</span>  
> *Openweight models give you frontier quality agents at a fraction of the cost.*  
> <span class="qm">—— Byung-Gon (Gon) Chun · [03:05]</span> ^q2

> <span class="qz">第一，前沿开放权重模型让生产级智能体在经济上可扩展。</span>  
> *First, Frontier Openweight models make production agents economically scalable.*  
> <span class="qm">—— Byung-Gon (Gon) Chun · [13:53]</span> ^q3

> <span class="qz">在 GLM-5 用量的对比测试中，与其他第三方提供商以及模型实验室的直接使用相比，Friendly AI 始终快七倍，且错误率显著更低。</span>  
> *In a split test of GLM-5 usage compared against other third-party providers and direct usage from the Model Lab G.AI, Friendly AI was consistently seven times faster with a significantly lower error rate.*  
> <span class="qm">—— Byung-Gon (Gon) Chun · [12:56]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-26-a16z-the-state-of-ai-macro-apps-and-consumer|AI 应用层的黄金时刻：a16z 投资人 Anish Acharya 谈智能如何变成生意]]<span class="pd-rz">同概念:开放权重模型 (open-weight models)、推理 (inference)、智能体 (agent)</span>
- [[2026-08-06-a16z-how-open-source-ai-became-critical-infra|开源模型没差距，缺的是让它跑起来的基础设施]]<span class="pd-rz">同概念:推理 (inference)、智能体 (agent)、vLLM</span>
- [[2026-08-09-talks-multiplayer-agentic-engineering-arjun-si|让非工程师也能下指令：Superconductor 的多人智能体协作法]]<span class="pd-rz">同概念:开放权重模型 (open-weight models)、智能体 (agent)、GLM 5.2</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-18-a16z-how-do-you-defend-against-ai-that-can-ha|当签名已死：AI智能体如何击穿传统网络安全]]<span class="pd-rz">同概念:推理 (inference)、智能体 (agent)</span>
- [[2026-08-20-twentyvc-20vc-spacex-buys-cursor-for-60bn-stripe|SpaceX 600亿买Cursor：AI并购的疯狂逻辑]]<span class="pd-rz">同概念:推理 (inference)、智能体 (agent)</span>
- [[2026-08-27-doac-the-man-who-calls-bs-on-ai-ai-is-the-wor|Ed Zitron：生成式 AI 是一场万亿级骗局]]<span class="pd-rz">同概念:推理 (inference)、智能体 (agent)</span>

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
