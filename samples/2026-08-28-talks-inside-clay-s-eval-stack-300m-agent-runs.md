---
title: Clay 的智能体矩阵：如何为数十亿次运行建评估
podcast: 精选演讲
date: 2026-09-11
source_url: undefined
duration: "12:55"
type: episode
cover: "#64748b"
description: Clay 团队（Jeff、Vishu、Saroosh）讲解旗下研究智能体与工作流智能体的运行规模，以及他们为智能体产品构建评估体系、数据飞轮与统一数据基础的具体做法。
host: "[[Vishu]]"
companies: ["[[Clay]]", "[[Claygent]]", "[[Sculptor]]", "[[LangChain]]"]
concepts: ["[[智能体]]", "[[评估]]", "[[trace]]", "[[LLM 判别器]]", "[[harness]]", "[[数据湖]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-28-talks-inside-clay-s-eval-stack-300m-agent-runs#post","headline":"Clay 的智能体矩阵：如何为数十亿次运行建评估","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-28-talks-inside-clay-s-eval-stack-300m-agent-runs","mainEntityOfPage":"https://talk.solomind.cc/2026-08-28-talks-inside-clay-s-eval-stack-300m-agent-runs","description":"Clay 团队（Jeff、Vishu、Saroosh）讲解旗下研究智能体与工作流智能体的运行规模，以及他们为智能体产品构建评估体系、数据飞轮与统一数据基础的具体做法。","datePublished":"2026-09-11","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Vishu"},{"@type":"Organization","name":"Clay"},{"@type":"Organization","name":"Claygent"},{"@type":"Organization","name":"Sculptor"},{"@type":"Organization","name":"LangChain"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"评估 (eval)"},{"@type":"Thing","name":"trace"},{"@type":"Thing","name":"LLM 判别器 (LLM as a judge)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"数据湖 (data lake)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Clay 的智能体矩阵：如何为数十亿次运行建评估","item":"https://talk.solomind.cc/2026-08-28-talks-inside-clay-s-eval-stack-300m-agent-runs"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Clay 的智能体矩阵：如何为数十亿次运行建评估</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Clay 的智能体矩阵：如何为数十亿次运行建评估

<div class="pd-byl"><b>Vishu</b> · Clay 负责评估体系 · 2026-09-11</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-28-talks-inside-clay-s-eval-stack-300m-agent-runs.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但现在我们谈的是 Claygent 上数十亿次的运行，以及让 Sculptor 为你做端到端任务，或者说这些运行时间非常长的任务，评估就变成了不可协商的。</div><div class="a">— Vishu <button class="pd-ts" data-t="02:11" data-who="Vishu" data-en="But now that we're talking about billions of runs on Claygent and having Sculptor do end-to-end tasks for you or these really long-running tasks, evals became non-negotiable." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Vishu]]
>
> **公司** [[Clay]] · [[Claygent]] · [[Sculptor]] · [[LangChain]]
>
> **概念** [[智能体]] · [[评估]] · [[trace]] · [[LLM 判别器]] · [[harness]] · [[数据湖]]

这一集是 [[Clay|Clay]] 团队的工程分享，主角是三位讲者：Jeff、负责[[评估|评估]]体系的 [[Vishu|Vishu]]、负责数据基础的 Saroosh。Clay 是一家做进入市场（go-to-market，即帮企业找客户、拓业务）数据产品的公司，这一集聊的是他们怎么把[[智能体|智能体]]（agent，能自主多步执行任务的 AI）做成生产级产品。

钩子是量级：他们的研究智能体 [[Claygent|Claygent]] 每月运行超过 3 亿次，工作流智能体 [[Sculptor|Sculptor]] 每周收到超过 10 万条消息 [00:00–01:41 Vishu]。Vishu 直说：这个量级已经大到「不可能在 traces 里全部看一遍，或者即使我们在单个工作区或用户级别去看，通常也有大量的不同 traces」<button class="pd-ts" data-t="01:13" data-who="Vishu" data-en="So we've run over 300 million runs a month. And so there's actually more volume than we could possibly look at for in traces, or even if we were to look at an individual workspace or user level, there's usually just a high volume of different traces for these agents." aria-label="回原文"></button>。也就是说，靠人盯每一条运行记录来保质量，已经彻底行不通了——这整个分享都在回答一个问题：不靠人盯，质量怎么保？

## 两个智能体，一个研究、一个干活

Clay 目前有两个主要智能体。Claygent 是进入市场研究智能体，2023 年推出，做三件事：网络研究（这是看家本领）、第一方数据集成（能搜索客户自己的内部数据集）、以及高规模运行。

Sculptor 是进入市场工程智能体，一年前推出时还算新产品，现在已经是用户与 Clay 交互的主要方式之一，帮用户构建和编排工作流、分析数据。最新进展是 Sculptor for search：让 Sculptor 使用 Clay 的公司和联系人数据库去找线索、找潜在客户 [00:45–01:52 Vishu]。Jeff 坦承：「可以想象，这件事有很多可能出错的地方，要真正达到生产质量，经历了漫长的旅程」<button class="pd-ts" data-t="01:52" data-who="Vishu" data-en="Okay, so this is Sculptor for search. As you can imagine, there's many things that can go wrong with this. And there was a long journey to actually make this production quality." aria-label="回原文"></button>。

## 评估哲学：量级上去之后，eval 不可协商

Vishu 承认，最初构建智能体产品时「我们的评估并不好」，但面对数十亿次运行和 Sculptor 的端到端长任务，评估变成了「不可协商的」。他给出一个很实际的理由：只要有一套好的评估套件，你就可以放心让 Claude、Codex 这类编码智能体直接替你改提示词，因为你确信不会把会毁掉生产环境的东西发布出去 [02:03–02:39 Vishu]。

他们的评估哲学有几条优先级。第一是分层级：本地开发用的 eval 要便宜、要快，不搞沙箱、不搞虚拟文件系统，就是个命令行评估套件——开发者改了什么，智能体就地替他跑；而在 CI（持续集成，代码合并前自动跑检查的机制）或 staging 环境跑的 eval，要尽可能贴近生产环境。

用他的话说，这是「在开发者所在之处满足他们」——不必去平台网页上手动启动实验、配置托管智能体 [02:53–03:34 Vishu]。第二，评估要持久化、有版本管理，他们用 [[LangChain|LangChain]] 存储，本地跑的结果也写上去。第三，eval [[harness|测试框架]]在产品各部分之间可扩展：团队正在走向「Sculptor 在 Clay 里替你做所有事」的世界，所以 Clay 各产品线共用同一个 harness（测试框架），开发者加新产品时只需自带 eval 套件和自己的 [[LLM 判别器|LLM 裁判]]（用大模型给输出打分的自动化评估器），框架其余部分即插即用 [03:38–04:14 Vishu]。

## 覆盖率矩阵：每一格都要有东西

他们把 eval 按确定/非确定、离线/在线分成四个格子，目标是每格都放几样东西 <button class="pd-ts" data-t="04:22" data-who="Vishu" data-en="So more on our eval philosophy. So this is our, how we think about eval coverage. And the goal is to have a few things in each of these boxes." aria-label="回原文"></button>：

- **确定性 + 离线**：Goldens（预先定好的标准答案）。但他们发现，评估简单的东西很好用，评估复杂查询时就太静态了——关键词换个顺序、节点顺序一变就失效，产生太多误报，「noisy 的 eval 最终就被忽视了」。于是他们改用结构化的 eval 检查，只看查询中真正关心的部分，更宽容。这一格还有[[trace|轨迹]]/工具断言：比如智能体在回答定价问题，就断言它真的去读了定价数据。
- **非确定 + 离线**：LLM as a judge，以及模拟用户的多轮对话评估。这里有个反直觉的发现：让一个智能体扮演用户来对话，效果反而不如把用户每一轮的话硬编码进去的确定性版本——扮演用户的智能体太吵了，「它就像另一个你需要管理、保持更新、还要为它做 eval 的智能体，所以最终不值得」<button class="pd-ts" data-t="05:49" data-who="Vishu" data-en="You can do this or you can do the non-deterministic version of this which is like just hard coding the user turns and actually during our development process we found that these deterministic multi-turn evals were actually the most useful." aria-label="回原文"></button>。
- **确定性 + 在线**：A-B 测试用的客观指标——延迟、成本、用户有没有从聊天走到产品其他部分、是不是卡住、是不是愤然退出。
- **非确定 + 在线**：这是他们用 LangChain 最多的地方，直接用现成的在线评估器，比如 NPS 式的用户满意度分数、感知类评估器（看用户是不是在纠正智能体、把它往别的方向引导），再用引擎批量分析生产 traces，加上人工翻看 [06:00–06:57 Vishu]。

最难搭的是那条「虚线箭头」：生产中学到的一切要反哺离线 eval。Vishu 说 eval 漂移、生产漂移在智能体评估领域**仍是未解决的问题**——数据漂移（生产用例不是你测试时覆盖的那些）、裁判漂移（每个模型都有内在偏好，「如果你只围绕某个特定的 LLM 裁判去爬山，你很可能是在对它过拟合」；同理，eval 集太小，prompt 会开始只是镜像那几个示例）[07:13–07:50 Vishu]。他们的应对：从在线评估器拉例子进来、用客户支持工单抓高信号反馈、自建人工标注的 goldens 来判断漂移、用 LangChain 的用例分类器加自己的用例打标，确保 eval 真正覆盖生产用例。

## 全部能力开放给智能体，换一个飞轮

Jeff 讲未来方向：Clay 本身正在变成一个智能体界面。过去 web UI 是主要界面，现在他们要让 Clay 的所有部分对智能体可用——包括外部的。过去几周他们上线了 CLI，目标是「凡是你在 UI 中能做的事情，都应该在 CLI 以及我们的公开 API 中同样可用」[08:31–09:00 Jeff]。

为什么这么做？一是智能体确实能从 Clay 这类工具里获益；二是关键设计：**通过 API 暴露的工具和内部智能体用的工具完全相同**——Sculptor 用的就是 CLI 和 API 暴露的那套工具。

这造出一个飞轮：智能体调用工具时出现失败，团队就拿到用户信号，去改进智能体 harness 或工具本身，体验的改善惠及所有人、包括外部智能体。 Jeff 补充，信号既来自自动化检查，也来自人类凭感觉的评估——「这通常是我最喜欢的」[09:01–10:06 Jeff]。

## 数据基础：把智能体当第一等用户

Saroosh 收尾，指出前面的飞轮有个瓶颈：「用我们的数据基础设施来扩展这件事很难」。他们的动作是迁移到[[数据湖|数据湖]]架构（一种高可扩展的数据存储方式），把第一方和第三方数据汇到同一个平台上，让智能体能在上面直接跑。

构建原则是把智能体当**第一等用户**：预先加大量护栏，允许安全的影子构建（shadow build，在不上线的情况下试跑）——智能体可以真的构建新数据模型并部署到 S3，因为服务计算和开发计算是分离的，「运行一些实验而不把生产环境搞挂总是很好的」[10:11–11:03 Saroosh]。他们在大力投资面向智能体的 skills 和 CLI，让智能体能原生访问数据，还能执行长任务：你可以说「去吧，这是目标，我想要这个数据模型」，它可能跑一个小时、两个小时，但能带着海量数据完成。

为什么是现在？Saroosh 说内部已经看到一次阶跃变化：新模型出来后，「这是我第一次能够告诉一个智能体，看这 10,000 个例子并找出趋势——而这在不久前是不可能的」<button class="pd-ts" data-t="11:44" data-who="Saroosh" data-en="Large-scale things in context. So I think it's one of the first times I've been able to tell an agent, look at these 10,000 examples and find trends. And that wasn't possible a while ago." aria-label="回原文"></button>。

以前只能凭感觉挑几个例子看，现在全喂进上下文窗口，配合新的子智能体和 harness，先建 eval、朝目标快速迭代。另一个动因是他们原本数据源太散：traces 在 LangChain、分析数据在 Snowflake、业务数据在 Postgres、第一方数据在 ClickHouse——全部汇到一个平台后，智能体不用再费劲串联一堆数据库 [12:08–12:26 Saroosh]。终局图景是一个自我迭代的循环：客户数据加第三方数据汇入统一数据基础，智能体在其上推理，「构建出更好的自身迭代版本」<button class="pd-ts" data-t="12:52" data-who="Saroosh" data-en="So all parts of the product are feeding into a single unified data foundation that agents can... Reason over and build better iterations of themselves, essentially." aria-label="回原文"></button>。

## 本集带走

- **量级是评估的触发器**：月跑 3 亿次起步，人看 traces 就失效了；eval 不是锦上添花，而是让你敢让编码智能体自动改 prompt 的前提。
- **eval 分四格覆盖**：确定性离线（goldens + 结构化检查 + 轨迹断言）、非确定离线（LLM 裁判、多轮模拟）、确定在线（延迟/成本/用户行为指标）、非确定在线（满意度评估器 + 人工翻看），每格都要有东西。
- **模拟用户不如硬编码用户**：让智能体扮演用户的多轮 eval 噪声大、本身还要被评估，直接硬编码用户台词的确定性版本反而最有用。
- **警惕裁判过拟合**：只围着一个小 eval 集或单一 LLM 裁判爬山，prompt 会镜像那几个示例；要用工单、人工标注、用例打标把生产分布持续拉回离线 eval。
- **内外智能体共用同一套工具**：API、CLI、内部智能体的工具完全一致，调用失败即用户信号，形成改进飞轮。
- **数据平台把智能体当第一等用户**：服务与开发计算分离 + 预设护栏，让智能体能放心构建数据模型、跑一两个小时的长任务而不弄挂生产。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">但现在我们谈的是 Claygent 上数十亿次的运行，以及让 Sculptor 为你做端到端任务，或者说这些运行时间非常长的任务，评估就变成了不可协商的。</span>  
> *But now that we're talking about billions of runs on Claygent and having Sculptor do end-to-end tasks for you or these really long-running tasks, evals became non-negotiable.*  
> <span class="qm">—— Vishu · [02:11]</span> ^q1

> <span class="qz">如果你有一套好的评估套件，你可以让 Claude、Codex 之类的进去替你修改提示词，而你确信你不会发布任何会毁掉生产环境的东西。</span>  
> *If you have a good eval suite, you can let Claude or Codex or Devon kind of go in, make prompt changes for you, let BlinkchainEngine make prompt changes for you, and you know that you're not shipping anything that is going to ruin production.*  
> <span class="qm">—— Vishu · [02:26]</span> ^q2

> <span class="qz">那个智能体太吵了，它就像另一个你需要管理、保持更新、还要为它做 eval 的智能体，所以最终不值得。</span>  
> *The agent was like too noisy and it was just like another agent that you had to manage and keep up to date and also have evals for and so it just ended up not being worth it.*  
> <span class="qm">—— Vishu · [05:49]</span> ^q3

> <span class="qz">裁判漂移——所有这些模型和模型家族都有它们自己的内在偏好。</span>  
> *JudgeDrift, all of these models and model families have their own internal biases.*  
> <span class="qm">—— Vishu · [07:30]</span> ^q4

> <span class="qz">如果你只围绕某个特定的 LLM 裁判去爬山，你很可能是在对它过拟合。</span>  
> *And if you're only hill climbing on a specific LLM judge, you're probably overfitting on it.*  
> <span class="qm">—— Vishu · [07:35]</span> ^q5

> <span class="qz">同理，如果你只用一个很小的 eval 集去爬山，你的 prompt 很可能开始只是镜像那些 eval 示例。</span>  
> *Same if you're only hill climbing with like a small eval set, your prompt is probably going to start to mirror just those eval examples.*  
> <span class="qm">—— Vishu · [07:41]</span> ^q6

> <span class="qz">所以我认为这是我第一次能够告诉一个智能体，看这 10,000 个例子并找出趋势。</span>  
> *So I think it's one of the first times I've been able to tell an agent, look at these 10,000 examples and find trends.*  
> <span class="qm">—— 嘉宾 · [11:44]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同公司:LangChain · 同概念:智能体 (agent)、测试框架 (harness)、沙箱 (sandbox)</span>
- [[2025-09-25-lennys-why-ai-evals-are-the-hottest-new-skill|做 evals 不是写单元测试，是从看数据开始的错误分析]]<span class="pd-rz">同概念:LLM 裁判 (LLM as a judge)、智能体 (agent)、轨迹 (trace)</span>
- [[2026-07-24-talks-inside-the-agent-engine-a-langchain-and|当系统出故障时，让 AI 代替作战室里的 50 个人——Traversal 谈如何造 AI SRE]]<span class="pd-rz">同概念:智能体 (agent)、测试框架 (harness)、评估 (eval)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:智能体 (agent)、测试框架 (harness)</span>
- [[2026-09-03-practicalai-less-about-models-more-about-architectur|Rackspace 首席 AI 官 Chetan Gupta:企业该停止纠结模型、开始思考架构]]<span class="pd-rz">同概念:测试框架 (harness)、评估 (eval)</span>
- [[2026-09-10-talks-design-at-the-speed-of-adjectives-paul-b|用形容词驾驭 AI 设计:Impeccable 的控制哲学]]<span class="pd-rz">同概念:智能体 (agent)、测试框架 (harness)</span>

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
