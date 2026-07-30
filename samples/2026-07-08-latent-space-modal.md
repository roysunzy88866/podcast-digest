---
title: 从避战大模型到押注智能体：Modal 的推理基础设施进化史
podcast: Latent Space
date: 2026-07-08
source_url: https://www.latent.space/p/modal2026
duration: "57:42"
type: episode
cover: "#0e7490"
image: "/covers/2026-07-08-latent-space-modal.jpg"
description: Modal CTO 剖析从开发者体验转向智能体体验的推理云进化路径。
host: "[[swyx]]"
guests: ["[[Akshat Bubna]]"]
cohosts: ["[[Vibhu]]"]
companies: ["[[Modal]]", "[[Kubernetes]]"]
concepts: ["[[智能体]]", "[[AX]]", "[[DX]]", "[[沙箱]]", "[[推理]]", "[[弹性推理]]", "[[投机解码]]", "[[DeFlash]]", "[[Auto Endpoints]]", "[[装饰器]]"]
category: 智能体
tags:
  - 智能体
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>从避战大模型到押注智能体：Modal 的推理基础设施进化史</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# 从避战大模型到押注智能体：Modal 的推理基础设施进化史

<div class="pd-byl"><b>Akshat Bubna</b> · Modal CTO</div>

<div class="pd-mt">2026-07-08 · Latent Space · 57:42</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-08-latent-space-modal.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们在 2023 年 5 月就构建了沙箱，在任何人甚至知道这将成为一件事之前。</div><div class="a">Akshat Bubna · 09:19</div></div>

> [!info] 关联
> **人物** [[Akshat Bubna]] · [[swyx]] · [[Vibhu]]
>
> **公司** [[Modal]] · [[Kubernetes]]
>
> **概念** [[智能体]] · [[AX]] · [[DX]] · [[沙箱]] · [[推理]] · [[弹性推理]] · [[投机解码]] · [[DeFlash]] · [[Auto Endpoints]] · [[装饰器]]
>
> **来源** [Latent Space](https://www.latent.space/p/modal2026)

<div class="pd-tldr"><b>一句话</b>Modal CTO 剖析从开发者体验转向智能体体验的推理云进化路径。</div>

Akshat 是 [[Modal|Modal]] 的 CTO，他和 CEO Erik、另一位联创 [[Vibhu|Vibhu]] 一起，把 Modal 打造成了 AI 时代一个独特的[[推理|推理]]与[[智能体|智能体]]运行平台。本集的对话从 Modal 为什么在 ChatGPT 爆火前一年就加入了 GPU 聊起，一路延伸到他们如何在[[投机解码|投机解码]]、容器网络、智能体体验（[[AX|AX]]）等关键技术点上做判断。全文可以分为三个部分：第一部分讲 Modal 的产品哲学和差异化护城河；第二部分拆解推理层的技术硬功夫；第三部分讨论智能体时代的基础设施新需求。

## 从装饰器到智能体体验

Modal 最初并不是一家 GPU 推理公司。Akshat 回忆，Erik 最早的出发点是想做一个更好的运行时（runtime，程序运行的环境），解决工作流编排产品太难用的问题 <button class="pd-ts" data-t="00:48" data-who="Akshat Bubna" data-en="Back then, Eric was already thinking about building a new kind of runtime. And he got there thinking through why are workflow orchestration products so hard to use?" aria-label="回原文"></button>。而难用的根源在于必须部署在 [[Kubernetes|Kubernetes]]（一种管理容器的系统）上，但 Kubernetes 的设计更偏向缓慢扩展的 Web 服务器，无法适应 AI 时代频繁突发（bursty，指流量短时间内剧烈飙升）的计算需求 <button class="pd-ts" data-t="02:50" data-who="Akshat Bubna" data-en="for it but compute heavy like they need one like need a lot more resources you need to burst up and down a lot versus like Kubernetes design for like slow scaling" aria-label="回原文"></button>。

为了解决配置复杂的问题，Modal 推出了核心的 DSL（领域特定语言）层：开发者只需在代码上加上[[装饰器|装饰器]]（decorator，一种包裹函数的特殊语法），就能定义硬件需求和扩展方式，基础设施需求与业务代码完美协同部署 <button class="pd-ts" data-t="03:30" data-who="swyx" data-en="the landing page yeah we really like uh the term and so we stole it because you had the insight that everything can just be in decorators next co-located with the code right was that a big part of the original story or is this" aria-label="回原文"></button>。这让 Modal 引以为傲的开发者体验（[[DX|DX]]）脱颖而出。

工具变了，人怎么办？这正是 Modal 团队思考的下一个问题。随着 Claude Code、Codex 等智能体开始自动编写工具代码，开发者逐渐不再直接看代码。Modal 敏锐地把 SDK 团队的目标，从优化开发者体验（DX）转向了优化「智能体体验」（AX） <button class="pd-ts" data-t="04:54" data-who="Akshat Bubna" data-en="if i'm doing this myself right We've actually changed our SDK team to think about agent experience sort of developer experience." aria-label="回原文"></button>。背后的逻辑很直接：为什么要让一个智能体去阅读数百个 Kubernetes 文件、编写甚至没有类型的 YAML，而它其实只需在装饰器里做几个更改，就能获得一个自我配置的运行时 <button class="pd-ts" data-t="05:05" data-who="Akshat Bubna" data-en="And we think that the same benefits that apply for DX also actually apply for AX, which is why would you have an agent read through hundreds of Kubernetes files and write YAML that's not even typed when it can basically make a couple of changes" aria-label="回原文"></button>？虽然人类不再逐行读代码，但「可观测性」变得前所未有的重要——仪表盘和 CLI 成了人类监督智能体行为的关键 <button class="pd-ts" data-t="05:46" data-who="Akshat Bubna" data-en="Yeah, I mean, people aren't looking at code. One thing we actually still see is really important is observability. How good is your dashboard?" aria-label="回原文"></button>。

## 推理的硬功夫：快照与投机解码

解决了人机交互的体验问题，接下来是 Modal 在推理引擎内部做的硬核技术优化。Akshat 强调，Modal 最大的用例是[[弹性推理|弹性推理]]（elastic inference，根据流量自动伸缩算力的推理服务）。为了满足音频公司 Suno、视频公司 Runway 等客户波动极大的流量，Modal 把自动扩展做到了极致。

为了让频繁启动的模型更快响应，Modal 引入了 GPU 快照（snapshotting，保存运行状态以便瞬间恢复）技术。它可以提取 torch 编译好的模型状态并保存，下一次调用时就能跳过漫长的加载过程，启动速度快得多 <button class="pd-ts" data-t="13:51" data-who="Akshat Bubna" data-en="And we've gone deeper into it on the tech side, but we've incorporated GPU. snapshotting to the product so we can actually uh take the gpu state like your torch compiler model" aria-label="回原文"></button>。对于强化学习（RL）中需要频繁生成环境的场景，甚至有时瞬间需要十万个[[沙箱|沙箱]]，这种极速扩缩容的能力至关重要 <button class="pd-ts" data-t="14:31" data-who="Akshat Bubna" data-en="like for our old stuff your rollouts are bursting as you When you're doing rollouts, you sometimes need 100,000 sandboxes. i'm curious if you've seen early sparks" aria-label="回原文"></button>。

除了扩缩容，提升大模型本身的推理速度也是重头戏。Akshat 介绍了他们的开源项目 [[DeFlash|DeFlash]]——一种基于块的投机解码（speculative decoding，让小模型先猜、大模型来验，从而加速推理）推测器 <button class="pd-ts" data-t="16:06" data-who="Akshat Bubna" data-en="of this and we've actually been open sourcing a lot of our work in terms of recently we shared our work on dflash which is a block based speculator and we've open sourced all of it so you can get" aria-label="回原文"></button>。传统的投机解码让小模型每次猜一个词（token），而 DeFlash 让它一次预测一整个块。

这块有一个反直觉的技术洞见：很多人花精力改进底层计算内核，但那通常只能带来几个百分点的速度提升；而通过增加推测器的「接受长度」（accept length，大模型认可小模型猜测的词数），能带来 2 到 4 倍的乘法级性能提升，且完全不影响生成质量 <button class="pd-ts" data-t="17:37" data-who="Akshat Bubna" data-en="we made these kernels faster whatnot but improving kernel only give you like few percentage points improvement and increasing except lengths literally is multiplicative decrease" aria-label="回原文"></button>。为了让所有人都能用上这项前沿技术，Modal 推出了 [[Auto Endpoints|Auto Endpoints]]（自动化端点服务）。用户无需改代码，通过 UI 就能创建一个集成了所有优化的端点，如果想深度微调，随时可以「弹出」黑盒，拿回代码控制权 <button class="pd-ts" data-t="18:38" data-who="Akshat Bubna" data-en="And our vision for, this is why we launched auto endpoints is we want to make frontier level performance available to everyone and so uh we mentioned this announcement we kind of teased it" aria-label="回原文"></button>。

## 智能体时代的底层拼图：网络与超级云

软件和推理算法说完了，物理硬件与网络怎么组织？这正是 Modal 另一个不寻常的战略选择。他们不建自己的数据中心，而是构建了一个跨越 17 个云提供商的「超级云」（supercloud）容量池 <button class="pd-ts" data-t="24:14" data-who="Akshat Bubna" data-en="we see is something appealing about modal, which is we've built this capacity pool that spans 17 cloud providers. So we're very good at running on various kinds of cloud capacity across the world." aria-label="回原文"></button>。由于底层集成了大量可靠性不一的新云厂商（neocloud），Modal 在上面自建了一层可靠性兜底：如果某块 GPU 掉线，用户的工作负载完全不受影响 <button class="pd-ts" data-t="25:15" data-who="Akshat Bubna" data-en="and that's why it's something we've What we can invest a lot of time in is actually building our own reliability layer on top. So if the GPU falls off the bus or something happens, user workloads are not affected." aria-label="回原文"></button>。

随着智能体工作负载变重，单纯的计算已经不够，Modal 发现智能体对容器网络提出了意想不到的需求。最典型的是，智能体经常需要对出站网络进行精细控制，比如在沙箱里跑一个「中间人代理」（man-in-the-middle proxy）来拦截日志，或控制对外域名进行凭据注入 <button class="pd-ts" data-t="27:23" data-who="Akshat Bubna" data-en="people want a lot of control over outbound networking from a sandbox. They might want to run a man-in-the-middle proxy for maybe logging stuff for RL or... controlling how egress can happen to a domain injecting credentials and yeah" aria-label="回原文"></button>。

为了支持跨节点的多容器任务，Modal 的沙箱升级成了类似 Pod 的结构，支持「Sidecar」（边车，与主容器共生的辅助容器）模式 <button class="pd-ts" data-t="27:06" data-who="Akshat Bubna" data-en="if you want to talk to compose, our sandboxes now support this thing called sidecarves. A sandbox is actually a pod of containers, and you can run multiple containers in the sandbox." aria-label="回原文"></button>。有趣的是，Modal 偶然建立的一个基于 IPv6 的私有 Overlay（覆盖）网络，原本只是为了给分布式训练做密钥交换用的，结果也被客户用来实现跨多节点沙箱通信等其他需求 <button class="pd-ts" data-t="28:09" data-who="Akshat Bubna" data-en="So you can add like a htp aught layer above it. But we have this thing called i6pn, which we haven't talked about," aria-label="回原文"></button>。这印证了 Modal 的产品哲学：构建底层原语，让用户自己去探索极限。

主持人 [[swyx|swyx]] 提出了一个很有代表性的疑问：随着 Anthropic、OpenAI 等大模型厂商纷纷推出自家的「托管智能体」，会不会侵入 Modal 的地盘 <button class="pd-ts" data-t="44:12" data-who="swyx" data-en="of moto managed agents everyone has one gemini open ai claude uh very useful for you but also like it is their way of starting to edge into your space yeah uh what's going on" aria-label="回原文"></button>？Akshat 的判断是，大厂的托管产品适合起步，但当代码走向生产级，企业必然需要专门的沙箱提供商来控制网络隔离、文件持久化和快照恢复 <button class="pd-ts" data-t="45:08" data-who="Akshat Bubna" data-en="the networking maybe on gpus when you get to that point you kind of want a specialized sandbox provider that gives you those things and that's the role that we are trying to play yeah we don't really have an opinion on the harness" aria-label="回原文"></button>。这条「专注底层」的战略，让 Modal 能够心无旁骛地吃下 AI 爆发带来的基础设施红利。

## 本集带走

1. **智能体体验（AX）正在接棒开发者体验（DX）**：基础设施的设计目标，正从「让工程师写代码爽」转向「让智能体能无摩擦地自我配置、自我运行」，装饰器比复杂的 YAML 更适合智能体理解。
2. **投机解码是性价比极高的推理加速手段**：相比于死磕底层内核，优化「接受长度」能带来 2-4 倍的整体加速，且零质量损耗，Modal 开源的 DeFlash 证明了这一点。
3. **无数据中心的「超级云」模式跑通了**：不建机房、只做软件抽象层，通过兜底 17 家云厂商的底层不可靠性，反而换来了极致的弹性和硬件议价权。

<div class="pd-sec">全部金句 <span>5 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">我们在 2023 年 5 月就构建了沙箱，在任何人甚至知道这将成为一件事之前。</span>  
> *we built sandboxes in May of 2023 before anyone was even knew this was going to be a thing.*  
> <span class="qm">—— Akshat Bubna · [09:19]</span> ^q1

> <span class="qz">这就是为什么你要让一个智能体去阅读数百个 Kubernetes 文件并编写甚至没有类型的 YAML，而它基本上可以在一个装饰器中做几个更改</span>  
> *which is why would you have an agent read through hundreds of Kubernetes files and write YAML that's not even typed when it can basically make a couple of changes in a decorator*  
> <span class="qm">—— Akshat Bubna · [05:05]</span> ^q2

> <span class="qz">当你在做 rollouts 的时候，你有时需要十万个沙箱。</span>  
> *When you're doing rollouts, you sometimes need 100,000 sandboxes.*  
> <span class="qm">—— Akshat Bubna · [14:31]</span> ^q3

> <span class="qz">改进内核只给你几个百分点的提升，而增加接受长度实际上是 2 到 4 倍的乘法性减少</span>  
> *improving kernel only give you like few percentage points improvement and increasing except lengths literally is multiplicative decrease in two to four x*  
> <span class="qm">—— Akshat Bubna · [17:38]</span> ^q4

> <span class="qz">这是我们一直有所回避的一件事，就是为模型提供 API</span>  
> *This is one thing we've kind of stayed away from is providing an API for models*  
> <span class="qm">—— Akshat Bubna · [48:34]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-05-21-latent-space-daytona|赋予AI智能体计算机——Daytona创始人Ivan Burazin]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-06-22-latent-space-gray-swan|让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-07-28-yc-boris-cherny-building-claude-code-e3mkr7|Cloud Code 创始人 Boris：删掉 80% 系统提示，把模型当生物养]] —— 同概念:智能体 (agent)、沙箱 (sandbox)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-28-yc-sam-altman-never-a-better-time-to-do-a-s|Sam Altman 谈 AI 时代的创业：未来 6 个月将抵过去两年的模型进展]] —— 同公司:OpenAI · 同概念:推理 (inference)、沙箱 (sandbox)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|iPod之父Tony Fadell：反直觉的产品课]] —— 同公司:Anthropic、OpenAI · 同概念:智能体 (agent)
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Anthropic产品负责人Kat Wu：在AGI边缘做产品的PM生存指南]] —— 同公司:Anthropic · 同概念:智能体 (agent)

</div>
</div>

*本集关键词:AI 基础设施 · 智能体 · 推理优化 · 多云架构 · 开发者体验*

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
    ['.search','.readermode'].forEach(function(sel){ grab(sel,acts); });
    // 深浅色进右栏末尾 —— 但右栏在窄屏可能不显示,槽跟着一起没了。
    // 只在槽真的看得见时才搬进去,看不见就退回顶栏(🔒 #2:任何屏宽都得有入口)。
    var side=document.querySelector('.right.sidebar'), slot=null;
    if(side){
      slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      // 同上:槽是空的(:empty → display:none),要判**右栏**看不看得见
      if(!(side.offsetWidth || side.offsetHeight || side.getClientRects().length)) slot=null;
    }
    grab('.darkmode', slot || acts);
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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); }
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
