---
title: "Anthropic 构建生产级智能体的教训:harness 须为模型能力演进而生"
podcast: 精选演讲
date: 2026-08-12
source_url: undefined
duration: "31:06"
type: episode
cover: "#64748b"
description: "把智能体的大脑与双手解耦,让基础设施跟上模型演进,是大规摸可靠性的关键。"
guests: ["[[Gagan Bhat]]", "[[Isabella Kai He]]"]
companies: ["[[Anthropic]]"]
concepts: ["[[智能体]]", "[[harness]]", "[[沙箱]]", "[[智能体循环]]", "[[上下文工程]]", "[[会话日志追踪]]", "[[泄露的凭证]]", "[[可观测性]]", "[[做梦]]", "[[Claude Managed Agents]]", "[[大脑与双手解耦]]"]
category: 智能体
tags:
  - 智能体
  - 产品方法
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-11-talks-evolution-of-agentic-surfaces-gagan-bhat#post","headline":"Anthropic 构建生产级智能体的教训:harness 须为模型能力演进而生","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-11-talks-evolution-of-agentic-surfaces-gagan-bhat","mainEntityOfPage":"https://talk.solomind.cc/2026-08-11-talks-evolution-of-agentic-surfaces-gagan-bhat","description":"把智能体的大脑与双手解耦,让基础设施跟上模型演进,是大规摸可靠性的关键。","datePublished":"2026-08-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Gagan Bhat"},{"@type":"Person","name":"Isabella Kai He"},{"@type":"Organization","name":"Anthropic"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"智能体循环 (agentic loop)"},{"@type":"Thing","name":"上下文工程 (context engineering)"},{"@type":"Thing","name":"会话日志追踪 (session log)"},{"@type":"Thing","name":"泄露的凭证 (credentials)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"做梦 (dreaming)"},{"@type":"Thing","name":"Claude Managed Agents"},{"@type":"Thing","name":"大脑与双手解耦 (decouple)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Anthropic 构建生产级智能体的教训:harness 须为模型能力演进而生","item":"https://talk.solomind.cc/2026-08-11-talks-evolution-of-agentic-surfaces-gagan-bhat"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Anthropic 构建生产级智能体的教训:harness 须为模型能力演进而生</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Anthropic 构建生产级智能体的教训:harness 须为模型能力演进而生

<div class="pd-byl"><b>Gagan Bhat</b> · 2026-08-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-11-talks-evolution-of-agentic-surfaces-gagan-bhat.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">当模型演进而安全带不变时,它会拖累智能体的表现。</div><div class="a">— Isabella Kai He <button class="pd-ts" data-t="08:57" data-who="Isabella Kai He" data-en="When the model moves and the harness doesn't, it degrades the agent." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Gagan Bhat]] · [[Isabella Kai He]]
>
> **公司** [[Anthropic]]
>
> **概念** [[智能体]] · [[harness]] · [[沙箱]] · [[智能体循环]] · [[上下文工程]] · [[会话日志追踪]] · [[泄露的凭证]] · [[可观测性]] · [[做梦]] · [[Claude Managed Agents]] · [[大脑与双手解耦]]

当 Sonnet 4.5 发布时,它表现出一种「上下文焦虑」——还没到上下文窗口极限就提前草草结束任务。于是开发团队给系统的「安全带(harness,指围绕模型构建的外部控制框架,如循环、工具调用逻辑等)」加了上下文重置功能来打补丁。

但 Opus 4.5 一出,这种焦虑完全消失了,原本的修复不仅成了累赘,还导致延迟增加和缓存错误。**这说明了一个核心教训:当模型进步了而安全带不跟着变,安全带就会拖累[[智能体|智能体]]的表现。**这是 [[Anthropic|Anthropic]] 应用 AI 团队打造 [[Claude Managed Agents|Claude Managed Agents]](一种由 Anthropic 托管的智能体基础设施服务)时最深刻的洞察之一 <button class="pd-ts" data-t="07:58" data-who="Gagan" data-en="Let's dive into one concrete example. Back when Sonnet 4.5 came out, it exhibited an interesting behavior that came to be known as context anxiety. What this is is that the agent literally got anxious at his approach to its context window limit." aria-label="回原文"></button>。

过去三年,构建智能体的方式经历了三次演变。最早只有 Messages API(tokens 进、tokens 出);后来团队开始手搓「[[智能体循环|智能体循环]](让模型不断调用工具、获取结果、再推理的闭环)」,但除了循环,还要处理会话管理、凭证、[[沙箱|沙箱]](隔离代码运行的安全环境)等繁琐的生产基础设施;再后来有了 Agent SDK(打包了内置循环和基础工具的软件开发工具包),省去了手搓循环,但托管和凭证仍要自己做 <button class="pd-ts" data-t="02:29" data-who="Gagan" data-en="We launched it alongside the first agentic surface called the Messages API. This Messages API was simply tokens in and tokens out. You gave information in and you got information and text completions out." aria-label="回原文"></button>。Claude Managed Agents 则把一个生产级智能体需要的基础设施——智能体循环、托管、会话管理、[[可观测性|可观测性]]——全部由 Anthropic 托管,让开发者只需专注自己的产品、任务逻辑和领域知识 <button class="pd-ts" data-t="05:34" data-who="Gagan" data-en="These were production infrastructure challenges that most teams spent significant portions of their time doing instead of being able to focus on just their product, their task, and their context, which is why we built Claude Managed Agents." aria-label="回原文"></button>。

## 为模型演进而设计

要构建一个有效的安全带,你必须**为明天的模型能力做设计**,预测未来的模型能做什么,并让架构足够敏捷,以便在能力就绪后快速捕获 <button class="pd-ts" data-t="09:37" data-who="Isabella" data-en="What you don't want to do is have a stale harness that takes weeks or even months to migrate to a new model, especially with how model release cycles have been coming out shorter and shorter." aria-label="回原文"></button>。Claude Managed Agents 围绕一小组独立、可替换的原语来设计,这样既能随着模型快速迭代各个组件,又能保持整体架构稳定。

最核心的架构决策,是**将智能体的「大脑」(模型推理与智能体循环)与「双手」(工具执行沙箱)解耦** <button class="pd-ts" data-t="11:16" data-who="Isabella" data-en="So now what I want to do is dive into some of the engineering fundamentals that go into Managed Agents to make it possible to tackle some of those challenges. One of the core architectural decisions that went into Managed Agents that sets the foundation for the rest of the slides that we're going to walk through is the decision to decouple the brain from the hands of the agent." aria-label="回原文"></button>。团队最初把循环和工具执行放在同一个容器里,但这带来了灾难性的可靠性问题:只要容器没完全启动好,模型就没法开始推理;而且容器里任何一部分出故障,整个智能体直接宕机。

解耦之后,系统获得了极强的韧性。如果沙箱意外死掉,处于独立位置的大脑可以直接起一个新的沙箱重试;如果大脑死掉了,它可以从持久化的会话日志中读取记录,精确恢复到中断的地方继续执行 <button class="pd-ts" data-t="12:25" data-who="Isabella" data-en="And now let's dive into how some of these replaceable components meant keeping long-running agents safe. First of all, if the sandbox or the hands of the agent died, because the brain was in a separate component, the brain could just spin up a new sandbox and retry and then continue as it left off." aria-label="回原文"></button>。这意味着系统有了空闲、运行、重调度(遇错重试)、终止四种明确的会话状态,让智能体在跑数小时甚至数天的长周期任务时具备了生产级的可靠性 <button class="pd-ts" data-t="14:18" data-who="Isabella" data-en="You need to make sure, especially if your agent is going to run for long hours at a time, that it's going to be reliable and can actually recover from tool failures." aria-label="回原文"></button>。

此外,解耦还带来了极大的性能提升。过去模型必须等容器完全设置好才能吐出第一个字;现在模型推理可以立刻开始,容器设置在后台并行跑,甚至如果任务不需要沙箱可以直接跳过。实测表明,这让中位用例的首字延迟快了 60%,而在 P95 用例中,首字延迟改善了 90% 以上 <button class="pd-ts" data-t="23:59" data-who="Gagan" data-en="What this means is that the model can then run container setup so that the brain of the agent actually has the hands when it needs it, or we can actually skip the container setup entirely if for this particular task, we actually don't need the container setup in the first place." aria-label="回原文"></button>。

## 上下文工程:不丢失记忆的秘诀

在许多传统的框架实现中,上下文窗口和会话日志是同一个东西。这就导致了一个要命的问题:如果模型为了腾空间而丢弃了某段上下文,一旦它后面发现那段信息还有用,它是找不回来的 <button class="pd-ts" data-t="15:04" data-who="Isabella" data-en="Now, context engineering is something that our team has done a ton of research into because it is one of the things that separates an effective agent from an agent that gets lost in context rot." aria-label="回原文"></button>。

Managed Agents 解决这个问题的方法是:把每一次交互(用户消息、模型响应、工具执行结果)都作为事件持久化写入一个独立的会话日志(也可称为追踪 trace)中 <button class="pd-ts" data-t="24:36" data-who="Gagan" data-en="Turns out the answer to both of these questions lies in something that we call the session log or traces. The session log essentially contains events of everything that happened during an agent execution." aria-label="回原文"></button>。因为所有信息都在这份持久的日志里,模型如果编辑或丢弃了当前窗口里的某段上下文,它随时可以通过重新读取会话日志的切片来恢复它 <button class="pd-ts" data-t="15:25" data-who="Isabella" data-en="Context engineering is also difficult, and with many traditional harness implementations, the context window and the session are one and the same, which means that Claude, if it wants to come in and discard portions of the context that it's in in current session run, it doesn't have a mechanism to be able to recover pieces of that context back into its window if it loses it at one point in its current session run." aria-label="回原文"></button>。这份会话日志同时解决三个问题:在前端展示出来就是**可观测性**;读取过往历史就构成了**记忆**;配合「[[做梦|做梦]](dreaming,一种离线批处理机制)」分析历史日志并提炼洞察,就能自动更新记忆,实现智能体的**自我改进** <button class="pd-ts" data-t="24:56" data-who="Isabella" data-en="Now, if you surface a session log in a UI that users can see, it provides observability. It turns out that the same session log also improves memory and provides self-improvement for the agent." aria-label="回原文"></button>。

## 把生产安全握在自己手里

在将智能体推向企业的过程中,团队学到了几个关键的生产实战教训:

首先是**[[泄露的凭证|凭证隔离]]**。企业极其担心模型会读到敏感的安全令牌。

通过将大脑和双手解耦,再加上「保险库(vaults,一种凭证存储机制)」,安全凭证只有在工具真正执行运行的那一刻才会被解密。模型本身永远无法看到这些令牌 <button class="pd-ts" data-t="22:07" data-who="Gagan" data-en="The first lesson is to keep the credentials away from your agent. A lot of customers ask me, how do I make sure my agent doesn't read or see the environment file that contains all my security tokens?" aria-label="回原文"></button>。

其次是**工具执行的隔离与控制**。对于安全意识极强的团队,他们希望工具执行完全发生在自己的虚拟私有云里。

得益于解耦设计,「双手」可以跑在任何地方,团队据此推出了自托管沙箱(self-hosted sandboxes),让客户在自己的执行环境里完全贯彻自己的安全策略 <button class="pd-ts" data-t="25:31" data-who="Gagan" data-en="And now for the last lesson that we have for you today, that is security for tool execution. And this is something that we heard from a lot of enterprise teams that were wanting to build on managed agents is that it really mattered to them how they were able to control the environment where they ran tool execution." aria-label="回原文"></button>。另一项功能 MCP 隧道(MCP tunnels)则允许企业的 MCP 服务器只运行在私有网络内,仅向 Claude 的智能体循环发出站调用,彻底避免在公网暴露服务 <button class="pd-ts" data-t="26:12" data-who="Gagan" data-en="So the feature that we released called self-hosted sandboxes, we built this from an engineering perspective because of the feedback that we heard and essentially made it available to have customers control their sandbox control plan exactly for their own execution environments and to have tools run exactly under their own policies." aria-label="回原文"></button>。

## 前沿探索:定义「成功」的智能体

展望未来,团队正在探索两个激动人心的前沿特性。除了前文提到的通过「做梦」实现组织级的记忆系统外,另一个重点是 **outcomes(结果评估机制)** <button class="pd-ts" data-t="28:55" data-who="Isabella" data-en="And we believe that this is just the initial areas in which we can see harnesses evolve towards as models become more capable. I also love dreaming, but one of my other favorite features is something called outcomes." aria-label="回原文"></button>。

这是一种让智能体真正理解「任务成功意味着什么」的机制。开发者定义一套成功标准(评分表 rubric)和失败情况,outcomes 会启动一个独立的「评分智能体」(grader agent)与你的主智能体并行运行。如果评分智能体判定任务没达到标准,主智能体就会不断迭代尝试直到成功为止 <button class="pd-ts" data-t="29:00" data-who="Isabella" data-en="I also love dreaming, but one of my other favorite features is something called outcomes. What you get with an outcome is that what we allow users to essentially define is success criterias for their agents." aria-label="回原文"></button>。

随着模型能力呈指数级跃升,围绕在模型周围的静态框架(harness)已经成了限制模型发挥的瓶颈。Managed Agents 的目的就是消除这层摩擦,让产品能够真正捕获今天前沿模型能够达到的智力上限 <button class="pd-ts" data-t="30:07" data-who="Isabella" data-en="And we can start to unlock a new set of tasks that were not possible just a couple of months ago as models continue to evolve and can accomplish outcomes or tasks that are increasingly complex, especially as Claude achieves new levels of intelligence." aria-label="回原文"></button>。

## 本集带走

- **为明天的模型做设计**:安全带(框架)中那些「假设模型做不到某事」的补丁(如上下文重置)会随模型变强而变成拖累性能的死重;框架必须模块化、易替换,以便随模型演进而快速迭代。
- **大脑和双手必须解耦**:把模型推理与工具执行环境分进不同容器。如果沙箱挂了,大脑可以另起一个;如果大脑挂了,可以从持久化日志恢复;容器启动不再阻塞模型出字。
- **用持久化会话日志做[[上下文工程|上下文工程]]**:不要让上下文窗口等同于会话记录。把交互全量记在日志里,模型可以随时丢弃再从日志切回,既避免「上下文腐化」又支持可观测性。
- **锁死凭证与网络**:用「保险库」让安全令牌仅在工具执行的瞬间解密,模型全程不可见;利用自托管沙箱和 MCP 隧道,把工具执行和内部服务死死锁在自己的私有网络内。
- **用「做梦」和 outcomes 迈向自改进**:定期离线分析历史日志(做梦)以提炼洞察更新记忆;用定义好的成功标准驱动的并行评分智能体(outcomes)迫使主智能体不断重试直至真正达成目标。

<div class="pd-sec">全部金句 <span>4 条</span></div>

> <span class="qz">当模型演进而安全带不变时,它会拖累智能体的表现。</span>  
> *When the model moves and the harness doesn't, it degrades the agent.*  
> <span class="qm">—— Isabella Kai He · [08:57]</span> ^q1

> <span class="qz">安全带的修复程序不再被需要,并且实际上在 Opus 4.5 的模型性能中起反作用。</span>  
> *The harness fixes were no longer needed and were actually detracting from model performance with Opus 4.5.*  
> <span class="qm">—— Isabella Kai He · [08:49]</span> ^q2

> <span class="qz">我们发现,随着模型演变得更有能力,如果你将逐字稿和记忆状态作为一个周期性批处理过程,并使用我们所谓的做梦,它允许我们提取新的洞察和新的组织结构,这基本上会反馈并编辑记忆,从而让第二天的智能体会话自动地变得更加智能。</span>  
> *What we found is that as models have evolved and become more capable, if you feed the transcripts and the memory state as a periodic batch process with what we call dreaming, it allows us to extract new insights and new organized structures that essentially feedback and edit the memory as needed to make the next day's agent sessions automatically much more intelligent.*  
> <span class="qm">—— Gagan Bhat · [27:45]</span> ^q3

> <span class="qz">我们看到 Claude 模型和其他模型本质上是沿着这个指数轨迹演变的,安全带已经成为模型能够实现什么的限制因素。</span>  
> *What we see as Claude models and other models essentially evolve alongside this exponential trajectory is that harnesses have become the limiting factor to what models can achieve.*  
> <span class="qm">—— Isabella Kai He · [30:22]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-02-19-lennys-head-of-claude-code-what-happens|Claude Code 负责人：写代码已被解决，下一步是什么]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、沙箱 (sandbox)、Claude Code</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同公司:Anthropic · 同概念:安全带/harness (harness)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、沙箱 (sandbox)、Claude Code</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog|AI失控了别慌,先盯紧漏洞数量爆炸]]<span class="pd-rz">同概念:凭证隔离 (credentials)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、Claude Code</span>

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
  // 故再兜一条 history.length>1(站内点进必有返回历史)。命中「直开」给 body 打 .pd-direct,CSS 切显隐。
  function direct(){
    var ref = document.referrer || '';
    var fromSite = (ref.indexOf(location.origin) === 0) || history.length > 1;
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
