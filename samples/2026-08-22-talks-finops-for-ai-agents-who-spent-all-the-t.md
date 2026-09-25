---
title: 谁花光了所有 token：给 AI 智能体装上成本治理
podcast: 精选演讲
date: 2026-09-25
source_url: undefined
duration: "21:04"
type: episode
cover: "#64748b"
description: "Tisha 与 Sushim 讲解 TokenOps：在智能体运行层面做 token 成本归因与治理，实测平均支出降 78%。"
guests: ["[[Tisha Chawla]]"]
concepts: ["[[TokenOps]]", "[[智能体]]", "[[控制平面]]", "[[归因]]", "[[token 最大化]]", "[[账本]]", "[[预算]]", "[[steer 动作]]", "[[halt 动作]]", "[[boundary 注解]]", "[[失控成本]]", "[[自学习模块]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-22-talks-finops-for-ai-agents-who-spent-all-the-t#post","headline":"谁花光了所有 token：给 AI 智能体装上成本治理","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-22-talks-finops-for-ai-agents-who-spent-all-the-t","mainEntityOfPage":"https://talk.solomind.cc/2026-08-22-talks-finops-for-ai-agents-who-spent-all-the-t","description":"Tisha 与 Sushim 讲解 TokenOps：在智能体运行层面做 token 成本归因与治理，实测平均支出降 78%。","datePublished":"2026-09-25","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Tisha Chawla"},{"@type":"Thing","name":"TokenOps"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"控制平面 (control plane)"},{"@type":"Thing","name":"归因 (attribution)"},{"@type":"Thing","name":"token 最大化 (token maxing)"},{"@type":"Thing","name":"账本 (ledger)"},{"@type":"Thing","name":"预算 (budget)"},{"@type":"Thing","name":"steer 动作 (steer)"},{"@type":"Thing","name":"halt 动作 (halt)"},{"@type":"Thing","name":"boundary 注解 (boundary annotation)"},{"@type":"Thing","name":"失控成本 (runaway costs)"},{"@type":"Thing","name":"自学习模块 (self-learning module)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"谁花光了所有 token：给 AI 智能体装上成本治理","item":"https://talk.solomind.cc/2026-08-22-talks-finops-for-ai-agents-who-spent-all-the-t"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>谁花光了所有 token：给 AI 智能体装上成本治理</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 谁花光了所有 token：给 AI 智能体装上成本治理

<div class="pd-byl"><b>Tisha Chawla</b> · 2026-09-25</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-22-talks-finops-for-ai-agents-who-spent-all-the-t.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们看到的结果是，在启用 TokenOps 以及我们现有的完整策略套件的情况下，平均支出下降了近 78%。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="19:01" data-who="嘉宾" data-en="And the results we see are the average spend goes down by almost 78% with token ops enabled with the full policy suit that we have today." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Tisha Chawla]]
>
> **概念** [[TokenOps]] · [[智能体]] · [[控制平面]] · [[归因]] · [[token 最大化]] · [[账本]] · [[预算]] · [[steer 动作]] · [[halt 动作]] · [[boundary 注解]] · [[失控成本]] · [[自学习模块]]

打开[[智能体|智能体]]工作流的 AI 账单，却追查不出钱到底花在哪——演讲者 Tisha 说，这是当今 AI 领域最昂贵的问题。她和联合演讲者 Sushim 在这场演讲里提出了一个方案：[[TokenOps|TokenOps]],一套针对 AI 智能体的失控 token 治理系统，在开源仓库上的基准测试中，把平均支出降了近 78%。

先看问题有多大。现在业界推崇的是 [[token 最大化|token maxing]]——为了探索等各种目的花最多的 token,人们还以自称 token 亿万富翁为荣。

他们认为这没错，真正的问题是价值与花费脱节：有新闻说 Uber 的 AI [[预算|预算]]四个月内耗尽，还有公司几个月甚至几天就烧掉数亿美元，失控循环导致成本飙升，却没有机制能控制。所以这场演讲的主题是从 token maxing 转向 value maxing——核心问题就一句：到底是谁花光了所有 token?

## 为什么现有的控制手段都差一环

他们从软件演进的历史找规律：SaaS 时代的界面是 UI,控制靠席位限制和分层策略；云时代变成按量付费，控制靠自动配置和自动伸缩。而现在智能体的成本按模型调用计算，却没有一个合适的[[控制平面|控制平面]]——模型网关这类工具虽有硬性上限或模型路由降级，但都发生在**请求层面**，而“代码调用模型的地方”才是成本真正产生的地方。

由此他们提出几条第一性原理:
- **token 是成本单位**：既然按 token 收费，就必须用 token 来衡量价值；
- **成本产生在模型调用边界**，追踪就必须做到那里；
- **[[归因|归因]](attribution)是前提**：不知道是哪个智能体、哪次运行发起的调用，就谈不上控制——你只知道大概哪里出了问题，却无法追溯或缩小范围；
- **策略先行，停机是最后手段**：发现某个循环过度运行或上下文增长失控，应该有策略当场解决那个具体问题，只有穷尽了这些手段，才由预算封顶触发停机。

## TokenOps 怎么设计

一个关键的有意决策：控制平面是**带外**(out of band)的，完全不干扰你的代码。系统分三层：最左是你自己的智能体运行时；中间是桥接层；右边是控制平面，也就是系统的大脑。

桥接层的心脏是 [[boundary 注解|boundary 注解]]：拿任意一个方法——不管你用 LangChain 还是别的框架——加上 boundary 注解，它会做两件事：一是追踪输入输出，上浮到控制层记为[[账本|账本]]条目(附上 agent run ID 等属性)；二是充当一条下行通道，让控制平面能**即时调整智能体的行为**，好在预算内塞进更多运行。“我们不是一条单向的高速公路”。下行动作由 governor 节点接收执行——它知道你作为开发者允许对智能体做哪些动作，并以非破坏性的方式应用，控制平面因此不能对你的智能体随意行事。

控制平面包含：segment(按归因维度划分用户群，比如按“cohort 是 AIE 2026”建群，在群这一层级设预算，不必把一切都限制在智能体或单次运行层级)、ledger(一次运行的所有追踪集中一处)、budgets(时间窗口内针对特定 segment 或运行的静态阈值)、actions 和 policies(把预算和动作分组，针对特定 segment 或运行设置并执行)。

具体代码改动很小：只需在已有方法上加注解，不需改代码逻辑；控制平面运行在你自己的租户里，不用担心数据泄露。

## 演示与实测数据

测试台是一个双智能体工作流：研究智能体可随意用搜索工具查网络，把发现交给总结智能体生成研究报告。三个场景层层递进：

1. **预览模式**：所有策略照常运行，但不执行强制动作——运行正常完成，仪表盘上能看到成本预算、cost guard 等策略都执行了。这是为了安全上线：先放进生产环境测试护栏、调整护栏、确定阈值。
2. **halt 行为**：打开治理后，智能体超出分配的预算，被立即终止——一种熔断器式的方法。
3. **steer 行为**(他们真正加价值的地方)：预算略高但仍不够时，cost guard 介入。它看两个指标——已消耗多少预算、消耗 token 的速度——据此预测你会在运行结束前耗尽预算，于是向系统指令注入提示，简单到像“嘿，你预算快用完了，确保输出更简洁、更概括”。不杀智能体，而是引导它的行为落在预算内。

基准测试在 browser use 和 MetaGPT 两个开源仓库上做的，跑了多轮迭代、压力测试、难易场景：启用 TokenOps 完整策略套件后，平均支出下降近 78%;对比简单限流(无论如何都会杀死运行)，完成率从 67% 提升到约 96%。策略目录覆盖三大类失效模式：支出管理、上下文管理(上下文压缩、工具输出缩减)、循环检测与进度检测。

## 下一步：自学习

他们设想的最终状态是：账本在持续更新，在控制平面内加一个[[自学习模块|自学习模块]]，让它审视账本并自问“什么样的失效模式我仍然捕获不了”——然后要么基于仍然失控的成本即时生成新策略，要么优化现有策略的参数，让未来的[[失控成本|失控成本]]被管理得更有效。

## 本集带走

- **控制成本要下到智能体运行层，不是请求层**：模型网关的硬上限和路由都在请求层面，而成本产生在代码调用模型的边界——这是现有工具缺失的一环。
- **归因先于控制**：不知道哪次运行、哪个智能体在花钱，就什么都管不了；有了归因，才能按 segment、智能体或单次运行做粗细不同的预算。
- **steer 优于 halt**:超预算别急着杀运行——根据已耗预算和消耗速度预测是否将耗尽，向系统指令注入“输出更简洁”之类的引导，能在预算内完成任务(完成率 67%→96%)。
- **预览模式先行**：强制措施上线前，先让策略空跑、调好阈值，再真正启用治理。
- **接入成本可以很低**：带外设计 + boundary 注解，不改代码逻辑，控制平面跑在自己租户内。===金句===
00:40 | Unknown
And I don't think that's a problem right now because right now the industry is valuing, you know, token maxing that is like spending the most amount of tokens for exploration for all of those purposes.
ZH | 我认为这现在还不算问题，因为现在业界推崇的是 token maxing,也就是为了探索等各种目的花最多的 token。

00:55 | Unknown
And people are proud to call themselves token billionaires.
ZH | 人们还以自称 token 亿万富翁为荣。

01:13 | Unknown
Who spent all the tokens?
ZH | 到底是谁花光了所有 token？

03:54 | Unknown
But we'll instead talk about the first principles of how, you know, we can design a system which is actually true enough to solve the problem from the very root.
ZH | 但我们想谈的反而是第一性原理，也就是我们如何设计一个足够真实的系统，能从根源上解决这个问题。

04:44 | Unknown
We can't, you know, control it, right?
ZH | 我们就没法控制它，对吧？

06:31 | Unknown
You know like monitors you at the run instead like if you see we need something which can control the loop between like the agent call between the tool and the agent something you know which can
ZH | 你知道的，在运行时监控你的东西，你看，我们需要某种能够控制智能体调用与工具之间循环的东西，某种可以

09:06 | Unknown
An out of bound plane.
ZH | 一个带外的控制平面。

09:10 | Unknown
So, if you see here that out of the bound plane has three modules which I will be talking about the first one being instrumentation.
ZH | 所以，你看，这个带外平面有三个模块，我会逐一谈到，第一个是插桩。

12:39 | Unknown
This is where the entire intelligence lies.
ZH | 这就是全部智能所在的地方。

12:42 | Unknown
We want the control plane to be able to tweak the behavior of the agent on the fly to ensure that we are able to squeeze in more runs inside our budget gap, right?
ZH | 我们希望控制平面能够即时调整智能体的行为，以确保我们能够在预算缺口内塞进更多的 run,对吧？

13:22 | Unknown
That is where the third node, the governor node comes in.
ZH | 这就是第三个节点，governor 节点登场的地方。

13:33 | Unknown
So that's the first three.
ZH | 所以这就是前三个。

14:56 | Unknown
The second part where we are adding value is the steer type actions.
ZH | 第二个我们正在增加价值的部分是 steer 类型的动作。

17:45 | Unknown
So that's the simple circuit breaker sort of a methodology.
ZH | 这就是一种简单的熔断器式的方法。

19:01 | Unknown
And the results we see are the average spend goes down by almost 78% with token ops enabled with the full policy suit that we have today.
ZH | 我们看到的结果是，在启用 TokenOps 以及我们现有的完整策略套件的情况下，平均支出下降了近 78%。

19:17 | Unknown
So with the reduced average spend, what you get is you get an uplift in that completion percentage from 67% to roughly 96%.
ZH | 所以在降低平均支出的同时，你得到的是完成百分比从 67% 提升到大约 96%。

20:26 | Unknown
And then based on that, it can do two things.
ZH | 然后基于此，它可以做两件事。

20:26 | Unknown
One is it can enhance, it can generate new policies on the fly based on the missing or the still runaway costs or it can refine the existing parameters for the existing policies that are there so that the runaway costs are managed more effectively in the future.
ZH | 一是它可以增强，它可以基于缺失的或仍然存在的失控成本即时生成新策略，或者它可以优化现有策略的现有参数，以便失控成本在未来得到更有效的管理。

<div class="pd-sec pd-sec-q">全部金句 <span>2 条</span></div>

> <span class="qz">我们看到的结果是，在启用 TokenOps 以及我们现有的完整策略套件的情况下，平均支出下降了近 78%。</span>  
> *And the results we see are the average spend goes down by almost 78% with token ops enabled with the full policy suit that we have today.*  
> <span class="qm">—— 嘉宾 · [19:01]</span> ^q1

> <span class="qz">所以在降低平均支出的同时，你得到的是完成百分比从 67% 提升到大约 96%。</span>  
> *So with the reduced average spend, what you get is you get an uplift in that completion percentage from 67% to roughly 96%.*  
> <span class="qm">—— 嘉宾 · [19:17]</span> ^q2

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-27-grit-ex-twitter-ceo-on-why-ai-needs-a-new-int|Parag Agrawal:当 AI 成为网络的第二个用户]]<span class="pd-rz">同概念:token maxing、智能体 (agent)</span>
- [[2026-09-01-cogrev-write-change-recall-forget-mongodb-s-pet|数据库60年 vs 智能体18个月：MongoDB 谈检索与记忆]]<span class="pd-rz">同概念:token maxing、智能体 (agent)</span>
- [[2026-09-19-talks-operating-distributed-inference-systems|推理已成一个分布式系统问题:Meta 讲透大规模推理的编排之道]]<span class="pd-rz">同概念:控制平面 (control plane)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-27-lennys-pricing-and-scaling-your-ai-product-madh|AI 定价的黄金象限：别把 20% 的价值白送]]<span class="pd-rz">同概念:归因 (attribution)、智能体 (agent)</span>
- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同概念:智能体 (agent)</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:智能体 (agent)</span>

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
