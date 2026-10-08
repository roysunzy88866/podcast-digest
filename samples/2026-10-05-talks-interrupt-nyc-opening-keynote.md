---
title: 模型不再是护城河，谁在围绕模型建「自己的智能」
podcast: 精选演讲
date: 2026-10-08
source_url: undefined
duration: "32:03"
type: episode
cover: "#64748b"
description: LangChain 创始人在 Interrupt NYC 大会开场演讲，讲为什么「拥有你的智能」成了 2026 年 AI 应用的关键词。
companies: ["[[LangChain]]", "[[LangSmith]]", "[[LangGraph]]", "[[DeepAgents]]"]
concepts: ["[[智能体]]", "[[harness]]", "[[拥有你的智能]]", "[[评估]]", "[[轨迹数据]]", "[[trace]]", "[[微调]]", "[[后训练]]", "[[决策模型]]", "[[护栏]]", "[[模型路由]]", "[[LLM 网关]]", "[[红队测试]]", "[[可观测性]]", "[[governance]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-05-talks-interrupt-nyc-opening-keynote#post","headline":"模型不再是护城河，谁在围绕模型建「自己的智能」","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-05-talks-interrupt-nyc-opening-keynote","mainEntityOfPage":"https://talk.solomind.cc/2026-10-05-talks-interrupt-nyc-opening-keynote","description":"LangChain 创始人在 Interrupt NYC 大会开场演讲，讲为什么「拥有你的智能」成了 2026 年 AI 应用的关键词。","datePublished":"2026-10-08","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Organization","name":"LangChain"},{"@type":"Organization","name":"LangSmith"},{"@type":"Organization","name":"LangGraph"},{"@type":"Organization","name":"DeepAgents"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"拥有你的智能 (owning your intelligence)"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"轨迹数据 (trajectory)"},{"@type":"Thing","name":"trace"},{"@type":"Thing","name":"微调 (fine-tuning)"},{"@type":"Thing","name":"后训练 (post-training)"},{"@type":"Thing","name":"决策模型 (decision model)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"模型路由 (model routing)"},{"@type":"Thing","name":"LLM 网关 (LLM gateway)"},{"@type":"Thing","name":"红队测试 (red teaming)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"governance"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"模型不再是护城河，谁在围绕模型建「自己的智能」","item":"https://talk.solomind.cc/2026-10-05-talks-interrupt-nyc-opening-keynote"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>模型不再是护城河，谁在围绕模型建「自己的智能」</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 模型不再是护城河，谁在围绕模型建「自己的智能」

<div class="pd-byl">2026-10-08</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-05-talks-interrupt-nyc-opening-keynote.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">模型本身正在变得有些商品化，而真正起作用的是围绕模型的这一切，尤其是数据。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="03:32" data-who="嘉宾" data-en="The models themselves are becoming somewhat commoditized and it's all of this stuff around the model, in particular the data." aria-label="回原文"></button></div></div>

> [!info] 关联
> **公司** [[LangChain]] · [[LangSmith]] · [[LangGraph]] · [[DeepAgents]]
>
> **概念** [[智能体]] · [[harness]] · [[拥有你的智能]] · [[评估]] · [[轨迹数据]] · [[trace]] · [[微调]] · [[后训练]] · [[决策模型]] · [[护栏]] · [[模型路由]] · [[LLM 网关]] · [[红队测试]] · [[可观测性]] · [[governance]]

[[LangChain|LangChain]] 是最早的大模型应用框架之一，比 ChatGPT 还早一个月问世。

在纽约举办的首届 Interrupt 大会上，创始人做了一场开场主题演讲，回顾了过去三年从原型到[[智能体|智能体]]的演变，并发布了一串新产品。

整场演讲围绕一个核心判断：**模型本身正在被商品化，真正的差异化在模型之外**。

## 过去三年发生了什么？

演讲者给了一条清晰的时间线：2023 年大家在搭原型；2024 年一些简单应用上了生产环境，但都只是单次调用大模型；

2025 年开始探索智能体；到了今年，智能体已经真正改变了应用层 <button class="pd-ts" data-t="00:08" data-who="嘉宾" data-en="Welcome to Interrupt, everyone. Isn't this awesome? This is crazy." aria-label="回原文"></button>。

他举了几个例子。Rogo 为金融领域做了专门的智能体运行框架和[[模型路由|模型路由]]；Harvey [[微调|微调]]出了法律领域表现最好的模型；

JPMorgan Chase 则在内部围绕模型定制框架，服务于他们的 Jarvis 流水线。

这些公司的共同点是：不是简单套壳，而是围绕模型建了大量领域专属的东西——这就是他要讲的[[拥有你的智能|拥有你的智能]]。

## 为什么现在人人都在谈拥有你的智能？

三个原因。第一，token 成本在飞涨，公司花在 AI 上的钱越来越多，自然要求可控的投资回报 <button class="pd-ts" data-t="02:53" data-who="嘉宾" data-en="First, token costs are rising a lot. People are spending more and more on AI and so as they do so they want to make sure that they're getting the proper ROI and being able to control and monitor token costs is really important and so owning your intelligence in that regard is a key factor." aria-label="回原文"></button>。

第二，开源模型越来越强，不仅便宜，还能做[[后训练|后训练]]和深度定制。第三，也是最重要的：

模型本身正在被商品化，真正的差异化来自模型外围的东西——你喂给它的上下文数据、你写进框架里的领域逻辑。

## 通往拥有智能的三大支柱

第一是开放可控的框架。它必须模型中立——进攻上说，新模型一出你就能马上切换；防守上说，不会被单一供应商锁死涨价 <button class="pd-ts" data-t="04:47" data-who="嘉宾" data-en="This is both offensive and defensive. When the best new model comes out, whether it's from OpenAI or Anthropic or TypeSafe with some of their dev models, you want to be able to switch your harness to that as quickly as possible." aria-label="回原文"></button>。

第二是复利。

上线一个智能体离成功还很远，你要观察它怎么被使用、在哪里犯错，然后不断迭代——可能是人工改提示词，也可能是自动的记忆和优化机制。

他的原话大意是：**谁能最好地定义自己领域里什么是好，谁就能做出该领域最好的智能体** <button class="pd-ts" data-t="06:32" data-who="嘉宾" data-en="Or more automatically, whether that's with memory or prompt optimization things, this compounding loop is really important to build into your systems and to own." aria-label="回原文"></button>。

第三是[[governance|治理]]。公司内部跑着一堆智能体时，你得知道它们有多少、成本多少、权限对不对。

## 人和流程也得跟着变

组织上，他看到 3 层人：最里层是平台工程师，提供工具给其他人用；

中间是智能体工程师——一种数据科学家、工程师和机器学习工程师的混合新角色；

外围是业务专家，他们往往最清楚什么是好，所以平台得能触达这些不写代码的人 <button class="pd-ts" data-t="08:08" data-who="嘉宾" data-en="Outside of that, we see agent engineers. So this is a great term to describe the weird hybrid mix of data scientist and engineer and machine learning engineer that makes up the people who are driving these agents." aria-label="回原文"></button>。

流程上，智能体开发是一个循环：构建、测试、部署、监控，再把监控发现的问题带回构建环节。

## 一个智能体由三块组成

技术层面，他把智能体拆成三部分。业务逻辑（指令、工具、技能）由你自己写；

框架负责把模型和领域上下文接好线，让模型在对的时机看到对的信息；

基础设施则负责上云——持久化执行、安全访问工具、运行模型生成的代码等。

他们最新的开源框架 [[DeepAgents|DeepAgents]] 就是一个现成的框架，借鉴了编程智能体的做法：

带沙盒文件系统和上下文压缩，专门用来做领域智能体。

今天还发布了 Managed Deep Agents，把框架和托管基础设施打包，新增了身份认证机制、用户级记忆，以及通过 Parallel 内置的联网搜索。

## Jev 开创的决策模型值得关注

演讲里最有新意的判断是关于 Jev 这个周末刚发布的新模型类型。

**它不生成文本，只做决策：你给它一个状态和一组问题，它返回布尔判断、分数或分类选择** <button class="pd-ts" data-t="16:03" data-who="嘉宾" data-en="And so what exactly is Jev? It's a decision model. What does that mean?" aria-label="回原文"></button>。

这类[[决策模型|决策模型]]的用武之地：给智能体的输出实时打分、在环[[评估|评估]]、低延迟的[[护栏|护栏]]、以及路由——决定该用哪个模型、哪个工具。

开源社区在 Jev 之后涌现了一大批同类模型，[[LangSmith|LangSmith]] 的网关会托管这些。

## 数据飞轮：从轨迹到微调

观测层面，他们把过去按「单次调用—调用链—会话」记录的数据，升级成[[轨迹数据|轨迹]]这个新标准格式——因为现在的智能体基本都是在循环中跑大模型、累积一段消息列表，这个格式更贴近真实行为。

轨迹的两大好处：调试界面更友好，标注反馈更容易；更重要的是它天然适合微调。

配套发布的 LangSmith Fine-Tuning 和 SmithTune 命令行工具，让你直接从轨迹数据筛选、预处理，送到 Fireworks 或 Base 10 训练，产出定制模型。

## 让 AI 工程师的部分工作自动化

压轴的是 LangSmith Engine v2。这是一个跑在轨迹数据之上的引擎，干的正是 AI 工程师干的事：发现问题、聚类、生成修复代码、补充评估器。

新版本有两个亮点：一是它会主动测试自己的修复——在部署上开预览分支验证问题真实存在、修复确实有效 <button class="pd-ts" data-t="28:10" data-who="嘉宾" data-en="First, I want to call out that Engine can now test its fixes proactively. So what exactly does this mean? So this integrates really nicely with LangSmith deployments, which we talked about in the runtime." aria-label="回原文"></button>；

二是[[红队测试|红队测试]]，在上线前主动模拟各种刁钻输入，找出智能体会失败的场景，顺便生成初始评估数据集。

数据也很硬：Engine 已经扫描了超过 7000 万条轨迹，检测出超过 21000 个问题，v2 现已上线。

## 本集带走

- 模型正在被商品化，差异化在模型外围：领域上下文、专属框架和数据。
- 拥有你的智能的三大支柱：开放可控的框架、能复利迭代的闭环、严格的治理。
- 智能体开发是循环而非一次性交付：构建—测试—部署—监控—回流改进。
- Jev 代表的决策模型新类别值得关注：不生成文本，只做判断，适合评估、护栏和路由。
- 微调的门槛在快速降低：从生产轨迹直接筛数据、训练、评估的流水线已经打通。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">模型本身正在变得有些商品化，而真正起作用的是围绕模型的这一切，尤其是数据。</span>  
> *The models themselves are becoming somewhat commoditized and it's all of this stuff around the model, in particular the data.*  
> <span class="qm">—— 嘉宾 · [03:32]</span> ^q1

> <span class="qz">第一，我们认为 harness 需要是模型中立的，也就是你不应该被耦合到某个特定的模型上。</span>  
> *One, we think the harness needs to be model neutral, so you shouldn't be coupled to a particular model.*  
> <span class="qm">—— 嘉宾 · [04:40]</span> ^q2

> <span class="qz">如果你能比任何人都更好地定义对你的领域来说什么更好、什么是最好，你就能为那个领域构建出最好的智能体。</span>  
> *If you can define what better and what best looks like for your domain better than anyone else, you will be able to build the best agent for that domain.*  
> <span class="qm">—— 嘉宾 · [06:32]</span> ^q3

> <span class="qz">还是更自动化的方式，比如用记忆或 prompt 优化之类的工具，这个复利循环非常重要，要构建到你的系统中并由你掌控。</span>  
> *Or more automatically, whether that's with memory or prompt optimization things, this compounding loop is really important to build into your systems and to own.*  
> <span class="qm">—— 嘉宾 · [06:23]</span> ^q4

> <span class="qz">我们看到很多智能体在写代码，即使它们不是编码智能体。</span>  
> *And we see a lot of agents writing code, even if they're not coding agents.*  
> <span class="qm">—— 嘉宾 · [12:10]</span> ^q5

> <span class="qz">护栏的一个缺点是它总会增加延迟。如果现在我们能以非常低延迟的方式加入护栏，那会非常酷、非常强大。</span>  
> *One of the downsides of guardrails is that it always adds latency. If now we can add them in a really low latency way, that's really cool and powerful.*  
> <span class="qm">—— 嘉宾 · [17:20]</span> ^q6

> <span class="qz">当你在构建智能体时，迭代周期就是一切。</span>  
> *That iteration cycle is everything when you're building agents.*  
> <span class="qm">—— 嘉宾 · [30:21]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-13-talks-when-to-build-your-own-agent-harness-har|拥有你自己的智能：Harness、Eval 与数据飞轮]]<span class="pd-rz">同公司:DeepAgents、LangChain · 同概念:harness(执行框架) (harness)、可观测性 (observability)、智能体 (agent)、评估 (evals)、微调 (fine-tuning)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同公司:LangChain · 同概念:harness(执行框架) (harness)、后训练 (post-training)、护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-09-14-talks-agents-without-code-skills-yaml-and-file|智能体就只是文件：当配置取代 Python]]<span class="pd-rz">同公司:LangChain、Cursor · 同概念:harness(执行框架) (harness)、智能体 (agent)、评估 (evals)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:harness(执行框架) (harness)、可观测性 (observability)、智能体 (agent)、评估 (evals)、护栏 (guardrails)</span>
- [[2026-09-29-latent-thariq|Anthropic 的 Thariq 谈 Claude Code：提示词、CloudMods 与给前沿踩刹车]]<span class="pd-rz">同公司:Anthropic · 同概念:harness(执行框架) (harness)、智能体 (agent)、评估 (evals)、沙箱 (sandbox)</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)、评估 (evals)</span>

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
