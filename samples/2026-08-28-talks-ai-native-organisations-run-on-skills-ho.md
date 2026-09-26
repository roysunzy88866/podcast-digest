---
title: AI 原生组织如何运行在 Skills 之上
podcast: 精选演讲
date: 2026-09-27
source_url: undefined
duration: "20:12"
type: episode
cover: "#64748b"
description: Quantum Black 杰出工程师 Ima Toil 讲解为什么 Skills 是智能体工作流的核心组件，以及组织该如何治理它们。
guests: ["[[Imad Touil]]"]
companies: ["[[Anthropic]]", "[[Clearview]]"]
concepts: ["[[技能]]", "[[编码智能体]]", "[[工作流]]", "[[harness]]", "[[MCP]]", "[[子智能体]]", "[[上下文窗口]]", "[[微服务]]", "[[渐进式披露]]", "[[提示词注入]]", "[[技术债务]]", "[[治理]]", "[[技能注册表]]", "[[自动演化]]", "[[沙箱]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-28-talks-ai-native-organisations-run-on-skills-ho#post","headline":"AI 原生组织如何运行在 Skills 之上","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-28-talks-ai-native-organisations-run-on-skills-ho","mainEntityOfPage":"https://talk.solomind.cc/2026-08-28-talks-ai-native-organisations-run-on-skills-ho","description":"Quantum Black 杰出工程师 Ima Toil 讲解为什么 Skills 是智能体工作流的核心组件，以及组织该如何治理它们。","datePublished":"2026-09-27","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Imad Touil"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"Clearview"},{"@type":"Thing","name":"技能 (skills)"},{"@type":"Thing","name":"编码智能体 (coding agents)"},{"@type":"Thing","name":"工作流 (workflow)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"子智能体 (sub-agent)"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"微服务 (microservice)"},{"@type":"Thing","name":"渐进式披露 (progressive disclosure)"},{"@type":"Thing","name":"提示词注入 (prompt injection)"},{"@type":"Thing","name":"技术债务 (technical debts)"},{"@type":"Thing","name":"治理 (governance)"},{"@type":"Thing","name":"技能注册表 (skills registry)"},{"@type":"Thing","name":"自动演化 (auto-evolving)"},{"@type":"Thing","name":"沙箱 (sandbox)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AI 原生组织如何运行在 Skills 之上","item":"https://talk.solomind.cc/2026-08-28-talks-ai-native-organisations-run-on-skills-ho"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 原生组织如何运行在 Skills 之上</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 原生组织如何运行在 Skills 之上

<div class="pd-byl"><b>Imad Touil</b> · Quantum Black 杰出工程师 · 2026-09-27</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-28-talks-ai-native-organisations-run-on-skills-ho.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">归根结底，你会发现你组织里所有的 know-how 实际上都存在于 Skills 层面。</div><div class="a">— Imad Touil <button class="pd-ts" data-t="06:41" data-who="Imad Touil" data-en="So at the end of the day, we'll find all of your know-how is actually at the skills level." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Imad Touil]]
>
> **公司** [[Anthropic]] · [[Clearview]]
>
> **概念** [[技能]] · [[编码智能体]] · [[工作流]] · [[harness]] · [[MCP]] · [[子智能体]] · [[上下文窗口]] · [[微服务]] · [[渐进式披露]] · [[提示词注入]] · [[技术债务]] · [[治理]] · [[技能注册表]] · [[自动演化]] · [[沙箱]]

这一集是一场技术演讲，主角是 Ima Toil，Quantum Black（麦肯锡旗下 AI 部门）的杰出工程师。她讲的主题是：当 AI 原生组织大规模用上[[编码智能体|编码智能体]]之后，真正决定[[工作流|工作流]]质量的东西是 [[技能|Skills（技能）]]——而大多数组织还没意识到，不[[治理|治理]] Skills 就等于在制造一类全新的[[技术债务|技术债务]]。

她开场先给听众画了一张「智能体软件栈」的全景图：内循环是编码智能体及其 harness（承载智能体运行的框架），包含上下文管理器、工具与 [[MCP|MCP]]、记忆与状态、技能加载器；外循环是工作流，包含 Skills、[[子智能体|子智能体]]、MCP 服务器和 hooks；底层还需要环境[[沙箱|沙箱]]、MCP 网关、模型网关、知识图谱和工作流市场这些赋能组件。

日常大家熟悉的软件交付工作流只有四步：Specify（定义要构建什么）、Design/Plan（规划）、Tasks（拆解任务）、Implement（实现）。但 Toil 指出，这只是「构建一个产品增量」这一步。

真实的端到端生命周期要长得多：先定产品战略、成功指标、路线图，做市场调研和竞争分析，再进入探索阶段拆解问题陈述、验证方案、创建用户故事，构建之前还得准备数据（清理数据目录、对接核心系统的集成），然后是数据管道构建与质量验证，回到产品增量，再经过平台工程运维（基础设施即代码等）、上线、性能优化和事故处理，循环往复。而且一个组织里往往散布着多个不同的 SDLC——移动应用一套、内部平台一套、面向客户的又一套，不存在一个统一工作流能构建所有东西。她估计，她画出来的这整套版图，大概只占组织真实复杂度的 10% 到 20%。

## 为什么 Skills 是关键组件

在工作流的四个组件里——hooks（在工作流过程中预先触发事件）、MCP 服务器、子智能体（用来压缩[[上下文窗口|上下文窗口]]）、Skills——前三个「有点像现成给定的」，并不真正带来结构化价值。她直言：谁真的构建过大量的 MCP？

大家只是用别人提供的工具。「归根结底，你所有的 know-how 实际上都存在于 Skills 层面。

」如果没有正确的 Skills 结构，你就不真正拥有一个确定性的工作流。她建议把工作流理解成 harness 蓝图——它们在运行时塑造编码智能体的行为。

Skills 的采纳速度惊人：八个月前 [[Anthropic|Anthropic]] 发布第一篇关于 Skills 的文章，两个月后出现了开放标准并被各大智能体框架采纳，到今年二月大多数智能体已经支持——如果你留意智能体思考的过程，可以看到它在执行任务时不断拉取 Skills。她 snapshot 了公开 GitHub 仓库和 Skills 注册表，创建量和需求都在快速上升。

效果也有数据支撑：在最新的 SkillsBench（评估 Skills 效果的基准测试）里，最新模型不使用 Skills 跑软件工程和网络安全任务表现不错，而且会持续进步；但一旦应用了更具确定性的 Skills，结果明显更高。

## Skills 的设计原则：不是新问题

Toil 强调，这其实是老问题的新形态——和[[微服务|微服务]]运动是一样的。Skills 应当：**可复用**、**模块化**、**可发现**（别的团队能自动发现并获取你的 Skills）、**跨 harness 可移植**（因为大家都用同一个开放标准，Claude Code 上的技能移到 Cursor 就能直接工作）、**专门化**（不要造单体式的万能技能，一个技能定义一个任务——价值就在这里）、**可组合**（避免技能之间重复、互相冲突）、**一致且确定性**，最后是**成本效率**——通过[[渐进式披露|渐进式披露]]（在正确的时机只加载正确数量的技能），减少 token 消耗。

她给出一个核心判断：Skills 定义了一个新的单元——**它让你组织内的 know-how 变得可执行、可移植、而且便宜**。她的例子是数据保留策略：当法规要求你操作客户数据时必须合规，把这条规则写成 Skill，再配合披露标准、GDPR 规则、填写模板等技能，法规披露审查工作流会在运行时自动拉取它们，产出确定性的审计报告，并留下改进代码库的回路。

## 不治理 Skills = 制造新的技术债务

这是全集最警告性的部分。如果放任不管，会出现七类问题：

- **重复**：大家用同样的技术栈、建同样的产品，却不共享，团队在一次次重造同样的 Skills；
- **质量退化**：不针对任务和不断推出的新模型持续测试验证，质量会随时间衰减；
- **不可发现**：她类比 IDP（内部开发者平台）/Backstage 当年解决的问题——不用找人问，进服务目录就能查到谁拥有这个微服务。Skills 没有目录就没人找得到；
- **无所有权**：没有 owner 就没人维护和扩展；
- **不可组合**：这不会默认发生，需要治理机制来对齐构建什么、怎么设计（类似领域驱动设计塑造服务目录）；
- **安全隐患**：公开 Skills 可能带有[[提示词注入|提示词注入]]（通过文本诱导模型执行恶意指令），而且 Skills 内含可执行脚本——这是它的确定性来源，也是攻击面。没有安全检查流水线，你可能拉到不安全的东西；
- **权限失控**：不是每个技能都该全员可访问，有些含敏感业务逻辑，访问控制至关重要。

## 怎么落地：三层推进

落地路径分三层。**个人层面**：允许工程师用结构化的方式创建、测试、改进和使用 Skills，选定一套认可的机制即可。

**团队层面**：创建技能的那一刻就要与团队共享、协作改进——同样的技术栈做同样的产品，演进会非常快。**组织层面**是关键：建一个集中式平台，包含带元数据、可搜索的技能目录；一个接入目录的 MCP 用于搜索，加一个 CLI 把技能拉回本地 IDE 或工厂沙箱；还有依赖关系管理、版本控制与生命周期（智能体能自动识别并拉取技能的最新版本）、访问控制，以及评估与可观测性。

「所有这一切都围绕着治理展开——而这就是技术停止解决问题的地方。」谁来治理？取决于组织结构：应该让架构师、工程负责人、基础设施负责人和网络安全负责人坐下来，各自认领领域，确保技能更新符合组织策略。

## 一个模拟实验：治理前后的对比

Toil 在 [[Clearview|Clearview]] 里做了一个组织模拟：15 个团队、每队 5 到 12 人，跟踪每人的技能贡献、日均技能调用量、团队间重复率、质量与安全比值。跑六个月的结果是——团队都在创建和使用 Skills，但组织没有可见性，而 Skills 与生产力提升紧密耦合：没有法规相关的 Skill，就有人在反复 vibe coding（凭感觉引导智能体）试图把它做对，既烧 token 又浪费时间；没有清晰维护的技能，实现质量就只能靠人拍板，团队间成熟度参差不齐。有的团队生产力中等、成本却很高。

做了治理之后呢？「不会像我们期望的那样完美」，有些团队还是会分叉，但至少出现了组织级的共同基础：你发布一个技能之后，下一个工程师构建新技能时，编码智能体的 harness 会自动识别到已有技能并直接调用——这几乎解决了前面讲的所有治理问题。

## 最后两个提醒

第一，Skills 只是工作流的一个组件，搞定了它不等于万事大吉——要把同样的方法应用到整个工作流上。如果集中式平台管理的是所有工作流，下一位工程师要配置基础设施时，可以直接调用一个工作流、用所需的技能构建、运行、测试，再改进后推回平台。

第二，这只是开始，接下来值得关注的三个方向：**[[技能注册表|技能注册表]]**（应该有一个，解决 IDP 问题的厂商已经开始集中化这项能力）；**技能评估**（正确方法尚有争议，但她发现简单有效的做法是静态测试加对照 Anthropic 最佳实践——技能没被正确调用、结构不对，质量大概率不行）；**[[自动演化|自动演化]]**（当下的热点，但她泼了冷水：在没有治理机制设置护栏的情况下启动自动演化的闭环，影响只会远超今天的问题）。

## 本集带走

- **Skills 是组织 know-how 的新载体**：可执行、可移植、便宜。没治理好 Skills，就没有确定性的智能体工作流。
- **设计原则抄微服务**：可复用、模块化、专门化（一个技能一个任务）、可组合、可发现、跨 harness 标准移植，用渐进式披露控制 token 成本。
- **不治理的代价是新技术债**：重复造轮子、质量退化、不可发现、无 owner、提示词注入与脚本安全风险、权限失控。
- **落地三层走**：个人结构化创建 → 团队共享协作 → 组织级集中平台（目录 + 元数据 + 版本 + 访问控制 + 评估），治理交给架构师和各条线负责人。
- **评估技能的朴素做法很有效**：静态测试 + 对照 Anthropic 最佳实践；自动演化先别急，护栏没建好之前别开闭环。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">归根结底，你会发现你组织里所有的 know-how 实际上都存在于 Skills 层面。</span>  
> *So at the end of the day, we'll find all of your know-how is actually at the skills level.*  
> <span class="qm">—— Imad Touil · [06:41]</span> ^q1

> <span class="qz">如果你的 Skills 没有正确的结构，那你就不真正拥有一个确定性的工作流。</span>  
> *And if you don't have the right structure of your skills, then you're not really having a deterministic workflow.*  
> <span class="qm">—— Imad Touil · [06:45]</span> ^q2

> <span class="qz">这让你组织内的 know-how 变得可执行、可移植、而且便宜。</span>  
> *This makes your know-how in your organization executable, portable, and cheap.*  
> <span class="qm">—— Imad Touil · [09:52]</span> ^q3

> <span class="qz">然而，如果我们不治理 Skills，我们将开始创造一类全新的技术债务。</span>  
> *However, if we don't govern skills, we will start creating a new class of technical debts.*  
> <span class="qm">—— Imad Touil · [11:21]</span> ^q4

> <span class="qz">而这一切实际上都围绕着治理来展开。这就是技术停止解决问题的地方，对吧？</span>  
> *And then all of this is actually played around a governance. And this is where technology stops solving the problem, right?*  
> <span class="qm">—— Imad Touil · [14:46]</span> ^q5

> <span class="qz">如果你自动启动这台机器，其影响将远超今天，因为这会变成在没有治理机制的情况下维持自动演进的技能——而治理机制才是真正为你的组织设置护栏的东西。</span>  
> *If you automatically start this machine, the impacts will be way more than it is today because what I shared earlier is gonna be just maintaining auto-evolving skills without that governance in place that actually put the guardrails for your organization.*  
> <span class="qm">—— Imad Touil · [19:48]</span> ^q6

> <span class="qz">如果你不做测试，不确保针对任务、也针对不断推出的最新模型去维护和验证你的技能，那么质量就会随时间开始退化。</span>  
> *If you don't test and make sure that you're maintaining and you're validating your skills, not against your task, but also against the latest models that comes, right, then the quality starts degrading over time.*  
> <span class="qm">—— Imad Touil · [11:43]</span> ^q7

> <span class="qz">如果我们没有关于该法规的技能，那就意味着有人在反复 vibe coding，试图弄清楚到底该怎么引导智能体把它正确地实现出来，对吧？</span>  
> *If we don't have a skill about the regulation, that is someone is vibe coding back and forth and trying to figure out exactly how to steer the agent to implement it properly, right?*  
> <span class="qm">—— Imad Touil · [16:26]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-27-talks-boris-cherny-we-cut-80-of-claude-code-s|Claude Code 造物主 Boris:删掉 80% 系统提示词，让模型跑两周不停]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:harness（智能体承载框架） (harness)、提示词注入 (prompt injection)、沙箱 (sandbox)</span>
- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同公司:Anthropic · 同概念:harness（智能体承载框架） (harness)、MCP、Skills（技能） (skills)</span>
- [[2026-09-17-sed-scaling-agent-workloads-at-vercel|把智能体从「桌上的宠物」搬进云端：Vercel 开源框架 Eve]]<span class="pd-rz">同概念:MCP、Skills（技能） (skills)、工作流 (workflow)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-26-lennys-anthropics-first-technical-pm-on|Anthropic 产品负责人:评估是新的 PRD,不反驳你的 AI 才是好 AI]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:Skills（技能） (skills)、MCP</span>
- [[2025-05-22-talks-mastering-claude-code-in-30-minutes|Claude Code 实战技巧：从提问到并行]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:MCP</span>
- [[2026-09-03-practicalai-less-about-models-more-about-architectur|Rackspace 首席 AI 官 Chetan Gupta:企业该停止纠结模型、开始思考架构]]<span class="pd-rz">同公司:Anthropic · 同概念:harness（智能体承载框架） (harness)、治理 (governance)</span>

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
