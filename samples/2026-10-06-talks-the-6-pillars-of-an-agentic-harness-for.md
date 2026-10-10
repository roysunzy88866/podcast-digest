---
title: 让 AI 真正接管运维：Resolve AI 的六大支柱
podcast: 精选演讲
date: 2026-10-10
source_url: undefined
duration: "20:57"
type: episode
cover: "#64748b"
description: Resolve AI 的 Varun Krovvidi 讲解为什么 AI 能改变写代码却搞不定生产事故，以及需要什么样的架构。
guests: ["[[Varun Krovvidi]]"]
companies: ["[[Resolve AI]]"]
concepts: ["[[智能体]]", "[[on call]]", "[[事故]]", "[[模型编排]]", "[[上下文工程]]", "[[因果推理]]", "[[护栏]]", "[[评估]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-06-talks-the-6-pillars-of-an-agentic-harness-for#post","headline":"让 AI 真正接管运维：Resolve AI 的六大支柱","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-06-talks-the-6-pillars-of-an-agentic-harness-for","mainEntityOfPage":"https://talk.solomind.cc/2026-10-06-talks-the-6-pillars-of-an-agentic-harness-for","description":"Resolve AI 的 Varun Krovvidi 讲解为什么 AI 能改变写代码却搞不定生产事故，以及需要什么样的架构。","datePublished":"2026-10-10","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Varun Krovvidi"},{"@type":"Organization","name":"Resolve AI"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"on call"},{"@type":"Thing","name":"事故 (incident)"},{"@type":"Thing","name":"模型编排 (model orchestration)"},{"@type":"Thing","name":"上下文工程 (context engineering)"},{"@type":"Thing","name":"因果推理 (causal reasoning)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"评估 (evals)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"让 AI 真正接管运维：Resolve AI 的六大支柱","item":"https://talk.solomind.cc/2026-10-06-talks-the-6-pillars-of-an-agentic-harness-for"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>让 AI 真正接管运维：Resolve AI 的六大支柱</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 让 AI 真正接管运维：Resolve AI 的六大支柱

<div class="pd-byl"><b>Varun Krovvidi</b> · Resolve AI 团队成员 · 2026-10-10</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-06-talks-the-6-pillars-of-an-agentic-harness-for.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但现实中，在工程工作里，我们 70% 的时间花在另一头，不是生成新软件，而是在生产系统上，基本上就是运行和修复软件。</div><div class="a">— Varun Krovvidi <button class="pd-ts" data-t="02:31" data-who="Varun Krovvidi" data-en="But in reality, for engineering, 70% of our time is spent on the other side, not generating new software, but rather in production systems, basically running and fixing software." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Varun Krovvidi]]
>
> **公司** [[Resolve AI]]
>
> **概念** [[智能体]] · [[on call]] · [[事故]] · [[模型编排]] · [[上下文工程]] · [[因果推理]] · [[护栏]] · [[评估]]

现场举手提问很能说明问题：在座的工程师几乎都值过班，不少人试过用 AI 帮忙[[on call|值班]]，但没有人敢说 90% 的值班工作已经被 AI 接管。

Varun 是 [[Resolve AI|Resolve AI]] 团队的成员，这家公司的产品是让[[智能体|智能体]](AGENT)去运行和修复软件。他在这场演讲里分享了他们的教训：

为什么这事儿这么难，以及一个能在真实生产环境里干活的智能体系统，需要哪六根支柱。

## 为什么 AI 写代码很强，救生产事故却不行？

第一波 AI 改变的是写代码，Varun 认为这有三个原因：代码本身是自解释的，容易解析；代码是模块化的，容易被拆解处理；

代码是单一领域，不需要跨领域推理，所以才有明确的基准测试。

但**工程师生涯里约 70% 的时间不是在写新软件，而是在运维和修软件**。这类工作恰恰相反：跨多个领域、跨一堆工具。

Varun 用医疗做比喻，把它分成三类：日常值班的小毛病，像头痛要吃 Tylenol;需要全员上阵的大[[事故|事故]]，像做手术；

以及每天吃的维生素——定期看基础设施、成本、做平台工程来维持系统健康。<button class="pd-ts" data-t="02:54" data-who="嘉宾" data-en="Typically, you can actually put it in three broad buckets. Like one is think of the healthcare analogy. That's the easiest way I like to think about it as well." aria-label="回原文"></button>

## 直接把最强模型怼上去，为什么不行？

演示的时候效果很好，一旦要跨用例、跨团队扩展，裂缝就出现了。Varun 列了几种失败模式。

模型有锚定偏见，天生要给你一个连贯的答案。

而且每个工作流里有几百种任务——推理任务、确定性任务、看图、查日志、写 SQL——不同模型各有所长，你得不断评估该用哪个模型，还得跟上模型更新的跑步机。<button class="pd-ts" data-t="07:36" data-who="嘉宾" data-en="So what are the kind of cracks that we have seen as you start to scale in the product along the way? First thing you'll notice that of course models will have anchoring bias." aria-label="回原文"></button>

上下文窗口也是坑。窗口太大会过度探索，编出根本不存在的假设；太小又会探索不足，看不到其他可能的路径。

而生产事故里，遥测数据几乎是无限的，日志和指标要多少有多少，再叠加代码和基础设施，问题就来了。

## 最要命的是：模型不找因果，只求连贯

Varun 最喜欢讲的一点：模型是来取悦你的。你逼得够狠，它就会朝任何方向同意你。

**模型被设计成给出连贯的答案，而不是因果关系**。<button class="pd-ts" data-t="09:52" data-who="嘉宾" data-en="Third and my most favorite one is defining causal reasoning. So models are there to please you. I mean, we've all come across these use cases where you push the model hard enough, it'll start to agree with you in every different direction." aria-label="回原文"></button>

但生产事故要的恰恰是因果证据链——像侦探一样，搞清楚是哪些步骤导致了这次事故，才能修对问题，而不是打个补丁了事。

> 【背景】GCP 是 Google Cloud,谷歌的云服务平台；Slack 是常用的团队聊天工具。

## 六大支柱：一个生产级智能体系统的骨架

针对这些裂缝，Resolve AI 总结出六根支柱。

一，[[模型编排|模型编排]]：跟上新模型，并为每个任务匹配最合适的模型——图像推理用 Gemini,确定性步骤用 OpenAI,开放式调查用 Claude。<button class="pd-ts" data-t="12:25" data-who="嘉宾" data-en="And second, how do you match the best model for the task? Is it Gemini for image-specific reasoning? Or is it OpenAI for deterministic steps?" aria-label="回原文"></button>

二，[[上下文工程|上下文工程]]：目标不是选什么数据库或方案，而是给 AI 恰好够用的上下文，通常是多种技术的组合。

三，[[因果推理|因果推理]]：根因必须建立在证据链上。建立不起证据链，就低置信度输出，并把用户引向别的方向，而不是硬编一个答案。

四，受治理的行动：AI 可能认为删掉一段代码甚至一个文件系统是最干净的修法——你不能怪它，这是特性不是缺陷。

所以必须给它最小权限，明确什么能读、什么条件下能写。<button class="pd-ts" data-t="10:33" data-who="嘉宾" data-en="And the next one is, of course, guardrails. I won't harp on this topic too much, but all of us have read some news or the other where, let's say, AI is going and deleting a particular file system or like a database." aria-label="回原文"></button>

五，学习系统：每一次交互都是学习机会，不仅从调查本身学，也从用户怎么引导它学。

六，[[评估|评测]]：这是架构的起点和终点。

像给工程师打分一样给 AI 打分——用户的正反馈负反馈、能否追溯它的推理路径、和最好的工程师比差在哪、置信度校准得准不准。

## 演示：一个真实告警是怎么被调查的

现场演示里，Grafana 的告警打进 Slack,Resolve 自动接手调查。它把告警当成提示词，派出两类智能体干活：

调查员像工程师一样，从指标、链路追踪、日志里找线索，再和变更事件、部署记录、代码、基础设施做关联。

它给出的结论是：某个日志技能失败率升高，根因是系统里还残留着失效的集成。

有意思的是它同时列出了被排除的其他理论——比如当时正好赶上 GCP 大范围故障，时间上完美相关，很符合“连贯答案”的套路，但它没有被带偏。<button class="pd-ts" data-t="18:19" data-who="嘉宾" data-en="The interesting part is it's also showing out some other ruled out theories where generally we would start an investigation. At the same time, there was a GCP outage." aria-label="回原文"></button>

系统还设计成最小信任：新工程师可以追问“这和 GCP 故障有关吗”，甚至硬推它往某个方向走。

因为答案只基于证据链，推它也不会顺着你说。你还能直接从 Slack 把同事拉进来，变成一个多人虚拟作战室。

## 本集带走

- 写代码只占工程师工作的一部分，更大一部分时间在运行和修软件，后者才是 AI 的硬骨头，因为它跨领域、跨工具。
- 把最强模型直接怼上去演示很好看，扩展后必然出现裂缝：锚定偏见、上下文过载或不足、只有连贯没有因果。
- 生产事故需要因果证据链，而不是讨人喜欢的答案；建立不起证据链就该承认低置信度。
- 六大支柱：模型编排、上下文工程、因果推理、受治理的行动、学习系统、系统化评测。
- AI“删库”是最干净修法这类行为是特性不是缺陷，解法是最小权限加明确[[护栏|护栏]]。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">但现实中，在工程工作里，我们 70% 的时间花在另一头，不是生成新软件，而是在生产系统上，基本上就是运行和修复软件。</span>  
> *But in reality, for engineering, 70% of our time is spent on the other side, not generating new software, but rather in production systems, basically running and fixing software.*  
> <span class="qm">—— Varun Krovvidi · [02:31]</span> ^q1

> <span class="qz">这时候失望就开始出现了，在大多数情况下，大多数人把它称为“最后一英里”，但那是你和 AI 一起要跑的最漫长的一英里。</span>  
> *That is when the disappointment starts to set in, which in most cases, most people dub it as the last mile, but that is the single longest mile that you have to run with AI.*  
> <span class="qm">—— Varun Krovvidi · [05:13]</span> ^q2

> <span class="qz">我们真诚地相信，你在生产系统上所做的所有这些工作——比如修复问题或者日常运行你的软件——在大部分情况下都应该由智能体来完成。</span>  
> *So we genuinely believe that all of this work that you do on production systems, like fixing issues or running your software on a day-to-day basis, should be done by agents in most part.*  
> <span class="qm">—— Varun Krovvidi · [05:57]</span> ^q3

> <span class="qz">而工程师应该只是运行那些智能体，由智能体负责修复和运行你的软件。</span>  
> *And engineers should just be running those agents, where agents take care of fixing and running your software.*  
> <span class="qm">—— Varun Krovvidi · [06:14]</span> ^q4

> <span class="qz">这会成为一个巨大的问题，因为遥测数据实际上是无限的。</span>  
> *This becomes a huge issue because telemetry is literally infinite.*  
> <span class="qm">—— Varun Krovvidi · [09:31]</span> ^q5

> <span class="qz">模型是用来取悦你的。</span>  
> *So models are there to please you.*  
> <span class="qm">—— Varun Krovvidi · [09:52]</span> ^q6

> <span class="qz">所以模型是专门被设计来给你连贯的答案，而不是因果关系。</span>  
> *So models are specifically designed to give you coherent answers but not causality.*  
> <span class="qm">—— Varun Krovvidi · [10:01]</span> ^q7

> <span class="qz">现在，当你在其上叠加时间维度的讨论时，你的 AI 系统应该在第 100 次调查中仍保有之前那次调查的上下文，否则你就是在再次从零开始转轮子。</span>  
> *Now, when you add temporal discussions on top of it, your AI system should have the same context of a previous investigation in the 100th investigation, or else you're starting the wheel from the same time again.*  
> <span class="qm">—— Varun Krovvidi · [11:30]</span> ^q8

> <span class="qz">但作为目标真正重要的是，AI 解决那个具体问题所需的精确上下文量是多少。</span>  
> *But what matters as a goal is what is the precise amount of context AI needs to solve that specific problem.*  
> <span class="qm">—— Varun Krovvidi · [12:59]</span> ^q9

> <span class="qz">就像我提到的，这是我们在 Resolve AI 的系统里构建的首要原则之一，即根因始终基于一条因果证据链。</span>  
> *Like I mentioned, so this is one of the first principles that we've built into our system at Resolve AI, where the root cause is always based on a causal chain of evidence.*  
> <span class="qm">—— Varun Krovvidi · [13:35]</span> ^q10

> <span class="qz">回到我之前提到的，如果你把一个 AI 逼得够紧，它就会开始同意你。</span>  
> *Going back to what I mentioned, if you push an AI hard enough, it will start to agree with you.*  
> <span class="qm">—— Varun Krovvidi · [19:25]</span> ^q11

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2025-09-16-talks-evaluating-agents-with-braintrust|Braintrust CEO Ankur Goyal:做 AI 评估的纪律八年不变，但玩法正在剧变]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、评测 (evals)</span>
- [[2025-10-06-talks-agents-for-complex-software-engineering|Vibe debugging：代码生成之后，生产环境才是真正的硬仗]]<span class="pd-rz">同公司:Resolve AI · 同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:上下文工程 (context engineering)、智能体 (agent)、评测 (evals)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:智能体 (agent)、评测 (evals)、护栏 (guardrails)</span>
- [[2026-07-24-indepth-how-gamma-pulled-off-their-ai-pivot-jon|Gamma 联创复盘：押注空白页，赌出一亿用户]]<span class="pd-rz">同概念:护栏 (guardrails)、评测 (evals)、Slack</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:智能体 (agent)、评测 (evals)</span>

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
