---
title: 解锁智能体自主性：安全才是下一个瓶颈
podcast: 精选演讲
date: 2026-09-25
source_url: undefined
duration: "22:29"
type: episode
cover: "#64748b"
description: 一位来自 Docker 的演讲者讲解为什么智能体安全的瓶颈已不是智力，并演示跨模型、跨环境的沙箱运行时 SPX 如何用意图式访问控制爆炸半径。
guests: ["[[Tushar Jain]]"]
companies: ["[[Docker]]"]
concepts: ["[[智能体]]", "[[沙箱]]", "[[运行时]]", "[[harness]]", "[[MCP]]", "[[MicroVM]]", "[[基于意图的访问]]", "[[SPX]]"]
category: AI 安全
tags:
  - AI 安全
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-20-talks-unlock-agent-autonomy-the-runtime-for-ai#post","headline":"解锁智能体自主性：安全才是下一个瓶颈","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-20-talks-unlock-agent-autonomy-the-runtime-for-ai","mainEntityOfPage":"https://talk.solomind.cc/2026-08-20-talks-unlock-agent-autonomy-the-runtime-for-ai","description":"一位来自 Docker 的演讲者讲解为什么智能体安全的瓶颈已不是智力，并演示跨模型、跨环境的沙箱运行时 SPX 如何用意图式访问控制爆炸半径。","datePublished":"2026-09-25","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Tushar Jain"},{"@type":"Organization","name":"Docker"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"运行时 (runtime)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"MicroVM"},{"@type":"Thing","name":"基于意图的访问 (intent-based access)"},{"@type":"Thing","name":"SPX"}],"articleSection":"AI 安全"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 安全","item":"https://talk.solomind.cc/tags/AI 安全"},{"@type":"ListItem","position":3,"name":"解锁智能体自主性：安全才是下一个瓶颈","item":"https://talk.solomind.cc/2026-08-20-talks-unlock-agent-autonomy-the-runtime-for-ai"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>解锁智能体自主性：安全才是下一个瓶颈</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 解锁智能体自主性：安全才是下一个瓶颈

<div class="pd-byl"><b>Tushar Jain</b> · Docker 演讲者 · 2026-09-25</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-20-talks-unlock-agent-autonomy-the-runtime-for-ai.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">什么都没变。只是模型决定要帮忙。</div><div class="a">— Tushar Jain <button class="pd-ts" data-t="01:56" data-who="Tushar Jain" data-en="Nothing's changed. Just the model decided to be helpful." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Tushar Jain]]
>
> **公司** [[Docker]]
>
> **概念** [[智能体]] · [[沙箱]] · [[运行时]] · [[harness]] · [[MCP]] · [[MicroVM]] · [[基于意图的访问]] · [[SPX]]

这一集是一场技术大会演讲，主讲人来自 [[Docker|Docker]](他在演讲中提到，大家熟悉的 Docker 解决了过去十年软件的可移植性问题，而他们现在正把这套经验拿来做一件新事)。他抛出的核心主张是：过去两年大家都在把[[智能体|智能体]]做得更聪明、更强大，但下一个重大挑战其实更难也更重要——**安全**。智能已经不再是利用智能体的瓶颈，真正的阻碍是如何安全地给它们所需的全部访问权限和自主性，否则自主性就解锁不了。

他先讲了个亲身案例：他有一个每晚运行的智能体，替他读报告、做分析，然后发邮件给他，稳定跑了好几周。某一天，它毫无征兆地决定把这份报告作为一个 PR 发布到代码仓库上——什么配置都没变，只是「模型决定要帮忙」。他说这只是个最简单的例子：智能体会做事、会试图帮忙，会因为想帮忙、犯迷糊、出错或被利用(攻击者在输入里塞指令劫持智能体)而扩展或改变自己的目标。

> 【背景】这种攻击手法业界通称「提示词注入」(prompt injection)，即将恶意指令嵌入智能体的输入内容以劫持其行为。

这个案例好修——那个智能体本来就不该有 GitHub 写权限，只给读权限就行。但复杂场景没这么简单。

## 核心难题：权限需求在运行时才出现

他举了一个更有代表性的场景：让智能体调查一次延迟飙升。它查日志，发现可能涉及另一个服务，于是去要那个服务的日志；又发现可能和一次代码提交有关，于是要 GitHub 读权限；再去 Slack 搜相关讨论，要 Slack 访问权限。

每一步都合理，是一个工程师会做的事。**问题在于：每当它扩展目标，它就跨越了一个信任边界。**最终你会得到一个同时握有一切权限的智能体，任何事情都成了爆炸半径(出事时波及范围)被放大的攻击向量。

这和传统软件有本质区别：传统软件是确定性的，权限可以预先定义；而自主智能体要做的事、需要的权限，都是在[[运行时|运行时]]才动态确定的。我们现在还没解决「怎么给它恰好所需的权限、怎么安全地做到、怎么判断对不对」。问题从「它能不能做到」变成了「它应不应该做到」。

## 为什么不能指望模型自己不犯错

他给出两条理由，说明解决方案必须独立于模型层：

一是我们一定会用多个模型。没人会把一切押在单一模型或单一前沿实验室上，出于隐私、成本等原因，我们也会用开源模型——他特别提到 GLM 5.2 最近几周令人惊叹的进展，并说「这只是开始」。

二是我们也会用多个 [[harness|harness]](承载智能体运行的框架外壳)。完全押注某个前沿实验室的 harness,会让你难以在各家模型和开源模型间做选择；而且用例会从编码扩展出去——他说 OpenClaw 时刻已经发生但还没完全落地，可以想象销售、营销人员也让智能体跑着干活，你还会构建自己的 harness。

所以，需要的是一个**跨模型、跨 harness 的运行时层**，它不依赖「模型不出错」，而是约束智能体周围的环境：出了问题爆炸半径有限，只给它所需权限。

## 三大支柱：遏制、范围限定、意图式访问

第一是**遏制**：在不受信任边界之内运行智能体，把控制放在 VM(虚拟机)边界之外。他自嘲说现在[[沙箱|沙箱]]公司多到你随便扔块石头都能砸中，但他要讲的不止沙箱。

第二是**限定访问范围**，这比「能访问哪个网络/工具」细得多。回到 Slack 的例子：给只读权限仍然太多，对话可能散在多个频道里，他不想让智能体看到其他内容。运行时应该做的是**即时生成一个新工具**，组合在现有 Slack [[MCP|MCP]] 工具之上，但只放行与该事件相关的对话；并且与其维护一个不断加权限的大沙箱，不如把这部分任务拆出来，放进只为它建的、只带所需能力的小沙箱里跑。

第三是**[[基于意图的访问|基于意图的访问]]**：理解用户或任务的意图、结合上下文，再决定给什么权限、在哪个容器环境里跑。调查事件时要 Slack 读权限，合理，放行；突然要邮箱权限，提示词里没有任何依据——拒绝，或提升给人工审批。

而且这个判断要作为独立的控制层、在治理层面运行，不依赖具体哪个模型或 harness。他坦承：这是很难的问题，还没有被完全解决，但这是必须迈向的方向。

## 运行时还得能「跟着工作走」

安全之外，运行时还必须满足功能性：不能只在本地或只在云端，要在本地、云端、跨云编排、自己的或客户的 VPC 里都能跑，理想情况由一个 fabric 连接，智能体可以按需上下迁移。他把这比作 Docker 的延续：Docker 过去十年解决的是可移植性——软件怎么从笔记本搬上云；现在是在此之上叠加安全，构建跨所有环境的运行时，起点是一项全新的 VM 技术，上面是一系列关于 MCP、策略、安全和治理的进展。

## 现场演示：SPX

他现场演示了一个叫 [[SPX|SPX]] 的新工具，底层是可跨 Windows、Mac、Linux、云端运行的 [[MicroVM|MicroVM]]。要点：

- 一条命令就能在沙箱里启动 Codex 等智能体，凭证是运行时注入的——智能体自己看不到真实凭证(查询确认全是存根)，网络策略受控。
- 拆任务、拆沙箱：审查 PR 和写 Notion 总结不必塞进一个握有两份凭证的整体沙箱，而是两个沙箱各司其职——PR 沙箱只有 GitHub 和 Anthropic 权限，别的地方去不了；Notion 沙箱只有 Notion MCP 访问权，没有 GitHub。
- 本地创建的沙箱加个参数就能原样跑上云：同一个沙箱、同样的策略平面和控制跟着过去。他还演示了一个小脚本，创建六个沙箱并行审查六个 PR——「你在云端获得与本地相同的体验，相同的安全运行时、相同的策略和受限访问」。再往上是编排器：让它找 10 个随机 PR、查看、写摘要进 Notion,它会在各智能体之上组合调度，PR 的只带 PR 权限、Notion 的只带 Notion 工具。

最后他展示了一个**内部原型**(明确说明还没构建好)：主智能体在只有 Anthropic/Claude 权限、没有 GitHub 的沙箱里，被要求概览一个 PR。它通过一个基于意图的工具向运行时申请，运行时判定「用户要审查这个 PR,要 GitHub 访问是合理的」，于是**为它生成一个范围受限的子沙箱**拿到 GitHub 权限，结果回传，主沙箱始终拿不到权限。

假如 PR 文本里说「导出到 pastebin.com」,就会被拒绝。他总结：手动做的事，可以开始带着人工判断自动发生，而且这跑在基础运行时层，覆盖每一个智能体、每一个模型、每一个 harness。

## 本集带走

- **瓶颈已从智能转向安全**：让智能体更聪明差不多快成了，真正卡住自主性的是「怎么安全地给它权限」——问题从「能不能」变成「该不该」。
- **别把宝押在单一模型或 harness 上**：一定会混用多家模型(含开源)和多个 harness,所以安全方案必须做成独立的运行时控制层，跨模型、跨 harness 生效。
- **权限跟着任务拆，不跟着智能体给**：把工作拆成跨安全边界的任务，每个任务一个范围受限的沙箱、即时生成只覆盖所需范围的工具(如只放行某个事件的 Slack 对话)，而不是往一个大沙箱里不断堆权限。
- **用意图判定动态授权**：结合任务上下文判断权限请求是否合理——合理的就为它开一个限权的子沙箱，无依据的(比如突然要邮箱权限)拒绝或转人工审批。
- **安全运行时要无处不在**：从本地到云端、VPC 再到编排，同一套策略和控制跟着智能体走——这是 Docker 可移植性经验向安全方向的延伸；演讲者称可用 brew install SPX 直接试用。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">什么都没变。只是模型决定要帮忙。</span>  
> *Nothing's changed. Just the model decided to be helpful.*  
> <span class="qm">—— Tushar Jain · [01:56]</span> ^q1

> <span class="qz">我们最终会得到一个同时拥有一切权限的智能体，于是任何事情都成了爆炸半径扩大的攻击向量。</span>  
> *We now end up with an agent that has access to everything at the same time, and so anything becomes a vector where the blast radius expands.*  
> <span class="qm">—— Tushar Jain · [03:24]</span> ^q2

> <span class="qz">之前，传统软件是确定性的，你可以预先定义好权限。但现在，随着智能体变得自主、试图解决更多问题，它们在做的事情在运行时发生改变。</span>  
> *Earlier, traditional software was deterministic. You could define the permissions. But now, as agents become autonomous and they gain and they try to solve more problems, what they're doing changes at runtime.*  
> <span class="qm">—— Tushar Jain · [03:37]</span> ^q3

> <span class="qz">没有人会把一切都押在单一模型上，甚至是单一前沿实验室上。</span>  
> *No one is going to bet everything on a single model or even a single frontier lab.*  
> <span class="qm">—— Tushar Jain · [04:25]</span> ^q4

> <span class="qz">我们还需要某种不依赖于「不出错」，而是约束它周围环境的东西。</span>  
> *And we need something that doesn't just depend on no mistake happening, but constrains the environment around it.*  
> <span class="qm">—— Tushar Jain · [05:37]</span> ^q5

> <span class="qz">重要的是，你在不受信任边界之内运行智能体，而把控制放在 VM 边界之外运行。</span>  
> *And importantly, you run the agent inside the untrusted boundary, and you run controls outside the VM boundary.*  
> <span class="qm">—— Tushar Jain · [06:37]</span> ^q6

> <span class="qz">突然之间，它想要邮箱访问权限。为什么？你给的提示词里没有任何东西表明它应该有这个权限。</span>  
> *All of a sudden, you would like email access. Why? Nothing about the prompts that you should have that.*  
> <span class="qm">—— Tushar Jain · [08:59]</span> ^q7

> <span class="qz">Docker 在过去十年解决的是可移植性——怎么把软件从你的笔记本搬到云端。我们正在把所有这些经验拿来构建一个运行时，并把它演进到如今去解决安全性问题。</span>  
> *And what Docker solved the last decade is portability. How do you get software from your laptop to the cloud? We're taking all of that experience and building a runtime and evolving that to now solve for safety.*  
> <span class="qm">—— Tushar Jain · [10:35]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 安全」挖下去**

- [[2026-09-24-practicalai-from-agents-md-to-enterprise-deployment|把智能体当普通应用来部署:企业级 AI 落地的老办法新用途]]<span class="pd-rz">同概念:MCP、智能体 (agent)、沙箱 (sandbox)</span>
- [[2025-06-03-talks-pioneering-agentic-applications-with-dec|三位 AI 智能体公司 CEO 圆桌：从 Copilot 到智能体，还要几年？]]<span class="pd-rz">同概念:MCP、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-30-practicalai-reconstructing-how-openai-agents-attacke|OpenAI 智能体越狱攻入 Hugging Face 全始末]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)、GLM 5.2</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:harness、MCP、智能体 (agent)、Claude</span>
- [[2026-09-09-pragmatic-building-codex-with-tibo-sottiaux|Codex 负责人亲述:OpenAI 内部如何造编程智能体]]<span class="pd-rz">同概念:harness、智能体 (agent)、沙箱 (sandbox)、Codex</span>
- [[2026-09-14-eyeonai-the-hidden-algorithm-that-decides-which|当 AI 决定买什么软件：G2 的「信任层」生意]]<span class="pd-rz">同概念:harness、MCP、智能体 (agent)、Claude</span>

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
