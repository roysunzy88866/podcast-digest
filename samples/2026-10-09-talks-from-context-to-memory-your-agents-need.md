---
title: AI 智能体为什么总是“失忆”？
podcast: 精选演讲
date: 2026-10-15
source_url: undefined
duration: "18:02"
type: episode
cover: "#64748b"
description: Oracle 的 Anders Swanson 讲解如何把智能体的上下文变成真正的记忆层，让它们不再重复犯错。
guests: ["[[Anders Swanson]]"]
companies: ["[[Oracle]]"]
concepts: ["[[智能体]]", "[[记忆层]]", "[[上下文窗口]]", "[[混合检索]]", "[[向量嵌入]]", "[[提示词注入]]", "[[多模型数据库]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-09-talks-from-context-to-memory-your-agents-need#post","headline":"AI 智能体为什么总是“失忆”？","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-09-talks-from-context-to-memory-your-agents-need","mainEntityOfPage":"https://talk.solomind.cc/2026-10-09-talks-from-context-to-memory-your-agents-need","description":"Oracle 的 Anders Swanson 讲解如何把智能体的上下文变成真正的记忆层，让它们不再重复犯错。","datePublished":"2026-10-15","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Anders Swanson"},{"@type":"Organization","name":"Oracle"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"记忆层 (memory layer)"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"混合检索 (hybrid retrieval)"},{"@type":"Thing","name":"向量嵌入 (vector embedding)"},{"@type":"Thing","name":"提示词注入 (prompt injection)"},{"@type":"Thing","name":"多模型数据库 (multi-model database)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AI 智能体为什么总是“失忆”？","item":"https://talk.solomind.cc/2026-10-09-talks-from-context-to-memory-your-agents-need"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 智能体为什么总是“失忆”？</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 智能体为什么总是“失忆”？

<div class="pd-byl"><b>Anders Swanson</b> · 2026-10-15</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-09-talks-from-context-to-memory-your-agents-need.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">上下文窗口不是记忆。它们是当前运行的输入，而不是持久的经验。</div><div class="a">— Anders Swanson <button class="pd-ts" data-t="00:57" data-who="Anders Swanson" data-en="Context windows are not memory. They are the input for the current run and not a persistent experience." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Anders Swanson]]
>
> **公司** [[Oracle]]
>
> **概念** [[智能体]] · [[记忆层]] · [[上下文窗口]] · [[混合检索]] · [[向量嵌入]] · [[提示词注入]] · [[多模型数据库]]

你大概用过 Claude Code 或 Codex 这类[[智能体|智能体]]。

它们干起活来很卖力，但经常一遍遍重读同样的文件、重复同样的查询——因为它们对过去发生的事一无所知。

[[Oracle|Oracle]] AI Database 的开发者布道师 [[Anders Swanson|Anders Swanson]] 在这场演讲里提出：智能体的记忆不该靠碰运气的补丁，而应该当成一个系统问题来解决。

他的核心观点很直接：**[[上下文窗口|上下文窗口]]不是记忆**。

## 为什么上下文窗口和更大的窗口都救不了？

Swanson 举了个例子：一个智能体处理客服工单，读文档、跑查询、复现故障、找到根因，干了一堆有价值的工作。会话结束后呢？全被丢掉。

下一个智能体接手类似任务，只能从头再来一遍。<button class="pd-ts" data-t="00:52" data-who="嘉宾" data-en="And we've seen them work on a task and reread the same files over and over again. And this is because they have no knowledge of what has happened in the past. Context windows are not memory." aria-label="回原文"></button>

==那把上下文窗口做大行不行==？也不行。塞进越来越多的内容，会话一长就会触发压缩，有用的信号反而淹没在无关信息里。<button class="pd-ts" data-t="01:54" data-who="嘉宾" data-en="And memory really cannot begin until these useful experiences from our agents are transformed into managed state. Larger context windows are also not the solution." aria-label="回原文"></button>

用 Markdown 文件、笔记、维基这类“草稿本”来记事呢？

他承认有帮助，但这不是受治理的检索——文件在多租户大环境下撑不住，grep 这类工具也不是复杂的[[混合检索|混合检索]]。

继续沿着这条路走下去，最终你会自己造一个数据库。那不如直接用数据库。<button class="pd-ts" data-t="02:39" data-who="嘉宾" data-en="Tools like grep are extremely useful for finding data but they also don't scale well and it is not complex hybrid retrieval. And I feel like if we continue to the logical conclusion of trying to build a memory layer on top of files, we're gonna be building our own database." aria-label="回原文"></button>

## 记忆层到底要做什么？

Swanson 观察到，现代智能体记忆系统正在收敛到一套模式：形成、检索、演化、评估。

形成记忆时，存的是提炼过的结构化事实，不是原始对话的倾倒。

检索记忆时，主流做法是混合检索——把向量相似度搜索、关键词全文搜索、关系实体、图遍历、时间新近度等多种搜索方式融合起来，而不是只靠某一种。<button class="pd-ts" data-t="03:25" data-who="嘉宾" data-en="This is not a raw transcript dump. When we're recalling memories, hybrid retrieval is emerging as a dominant method. This is a form of retrieval that fuses different types of search, so vector similarity search, lexical search, entity search over relational objects, graph traversals, and different signals over temporal data, recency, and feedback." aria-label="回原文"></button>

记忆还需要治理：敏感信息和个人数据在写入前就要抹掉；

写入要划定范围——属于哪个智能体、哪个团队、哪个用户，这在多租户环境尤其重要。

还要有管理员审批、审查，以及压制过期或被污染数据的能力。<button class="pd-ts" data-t="04:18" data-who="嘉宾" data-en="Another Important piece is the governance controls. So secrets, personal information, that needs to be redacted before it hits the memory layer." aria-label="回原文"></button>

整个流程形成一个闭环：智能体干活，提炼出事实，脱敏、增强、存进持久层；

下一个智能体遇到相关任务时把它取回来，任务就轻松了。用得好，就给这条记忆加分；用坏了，就降分。系统随时间自我调整。

## 记忆分几种？存成什么样？

Swanson 借用了人类记忆的分类：情景记忆是过去的具体事件片段；语义记忆是关于工作流、用户偏好的具体事实；

程序记忆是“怎么做某件事”的可复用规则，比如构建步骤；

工作状态则像短期记忆，记录当前在干什么，可能只在某个时间窗口内有效，之后可以升级成别的类型。<button class="pd-ts" data-t="06:27" data-who="嘉宾" data-en="What does the memory look like? It's going to be typed, and you may have seen this model in different presentations or some form of it. This loosely comes from human memory." aria-label="回原文"></button>

在存储层面，每条记忆是一个带类型的对象：

有主键、文本内容、标签、[[向量嵌入|向量嵌入]]和向量索引，有全文索引，可以通过实体图关联到其他记忆，还要记录时间信息——何时创建、上次何时使用、有效期到什么时候。

他特别强调审计事件：谁创建的、拿来干什么用，这些日志都得在。<button class="pd-ts" data-t="08:03" data-who="嘉宾" data-en="What was the last time that we used it? And then also, super importantly, audit events. Who created this memory?" aria-label="回原文"></button>

写入时的顺序也有讲究：先脱敏，再做增强和嵌入。

他把不可信来源植入持久指令的情况称为“毒记忆”，是最坏情形——没有护栏和审查，提示注入得手，数据全被拖走。<button class="pd-ts" data-t="13:16" data-who="嘉宾" data-en="So this needs to happen on write and on read. Poison memory is when a untrusted source plants a durable instruction in your memory layer. This is kind of the worst-case scenario, like a prompt injection happened, you didn't have appropriate guardrails, you didn't have the appropriate review, redaction, controls on memory, and some really nasty stuff got in there and all your data got exfiltrated." aria-label="回原文"></button>

## 记忆系统会出哪些故障？

Swanson 列了一串真实会发生的坑。过期记忆：项目原来用 NPM，后来换了构建系统，但一堆关于 NPM 的记忆还在，智能体检索到就可能做错事。

范围错误：相当于登录自己的账号却看到别人的聊天记录。

记忆冲突：两条记忆对同一个任务给出相反做法，检索时都排得很靠前，智能体夹在中间不知所措。<button class="pd-ts" data-t="13:42" data-who="嘉宾" data-en="So be very sure to avoid these kind of things through the proper guardrails and administrative actions. A memory conflict is when I have two different memories. One says, hey, we do the task this way, and the other says, well, actually, we do it this way." aria-label="回原文"></button>

还有过度召回：一堆弱匹配把上下文卡片挤满了，跟超大上下文窗口是同一个问题——纯添乱。

以及静默漂移：一千条记录时系统好得不得了，涨到 50,000 甚至上百万条就开始出怪结果。<button class="pd-ts" data-t="15:07" data-who="嘉宾" data-en="Proper enrichment and distillation of the memory records on the right path is the way to solve leakage. Over time, also, we get silent drift. This is where the memory system grows." aria-label="回原文"></button>

==解法是什么==？写前脱敏、范围检查、审查、生命周期管理，而最重要的是反馈。

记忆质量必须可衡量：智能体用了某条记忆之后是成功还是崩了，要回馈到排序和淘汰决策里。

用他的话说，反馈是“闭合记忆回路的东西”。<button class="pd-ts" data-t="15:31" data-who="嘉宾" data-en="So it's very, very important to apply the proper countermeasures, the redaction before write, the scope checks, review, life cycle, and most importantly, feedback." aria-label="回原文"></button>

## 为什么值得费这个劲？

没有记忆的智能体会重启同样的任务、重读同样的文件、浪费大量时间和算力，还会重复同样的错误——上次错了，这次还会错。<button class="pd-ts" data-t="16:22" data-who="嘉宾" data-en="And we want to design for measurable recall with governed memory formation built on a multi-model storage platform. So without memory, these agents are more likely to restart the same tasks." aria-label="回原文"></button>

有了受治理的记忆，智能体可以从上次停下的地方继续，复用前人的成果，减少重复失败。

目标说到底就四个词：更快、更便宜、更好、成功率更高。

Swanson 还提到，Oracle 提供了基于数据库原语的 Python SDK，感兴趣的工程师可以在 GitHub 上找到配套的示例笔记本。<button class="pd-ts" data-t="17:07" data-who="嘉宾" data-en="We want to do it better. If you are hands-on, I recommend checking out our Python SDK for agent memory. This code will take you to a GitHub link with a Python notebook that walks through how to do this using our SDK." aria-label="回原文"></button>

## 本集带走

- 上下文窗口是当次运行的输入，不是持久经验；更大的窗口和文件式草稿本都只是权宜之计。
- [[记忆层|记忆层]]应该是一个系统：形成、检索、演化、评估缺一不可，而反馈是闭合回路的关键。
- 检索的主流做法是混合搜索：向量、全文、实体、图、时间信号多路融合，再加权重和重排。
- 治理必须前置：脱敏要在写入前做，范围划分要在读写两端都做，防止数据泄漏和“毒记忆”。
- 好记的不是仓库，而是会进化的系统——记忆要能被加分、降分、合并、淘汰。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">上下文窗口不是记忆。它们是当前运行的输入，而不是持久的经验。</span>  
> *Context windows are not memory. They are the input for the current run and not a persistent experience.*  
> <span class="qm">—— Anders Swanson · [00:57]</span> ^q1

> <span class="qz">于是它要搜索更多文档，跑更多查询，这带来了更多失败的机会、更多幻觉的机会，最终保真度更低。</span>  
> *So he's searching more documents, he's running more queries, and this is more opportunity for failure, more opportunity for hallucinations, and ultimately less fidelity.*  
> <span class="qm">—— Anders Swanson · [01:34]</span> ^q2

> <span class="qz">只有当智能体的这些有用经验被转化为受管理的状态时，记忆才真正开始。</span>  
> *And memory really cannot begin until these useful experiences from our agents are transformed into managed state.*  
> <span class="qm">—— Anders Swanson · [01:45]</span> ^q3

> <span class="qz">更大的上下文窗口也不是解决方案。</span>  
> *Larger context windows are also not the solution.*  
> <span class="qm">—— Anders Swanson · [01:54]</span> ^q4

> <span class="qz">文件在大型多租户环境中无法扩展。</span>  
> *Files do not scale in large multi-tenant environments.*  
> <span class="qm">—— Anders Swanson · [02:24]</span> ^q5

> <span class="qz">我觉得如果我们继续沿着在文件之上构建记忆层的思路走到逻辑尽头，我们最终会是在自己造一个数据库。而你直接用一个数据库就行了。</span>  
> *And I feel like if we continue to the logical conclusion of trying to build a memory layer on top of files, we're gonna be building our own database. And I don't, you could just use a database.*  
> <span class="qm">—— Anders Swanson · [02:39]</span> ^q6

> <span class="qz">如果我不度量使用情况，不把反馈送回记忆层，一切都会崩塌。</span>  
> *If I'm not measuring use, I'm not sending feedback into the memory layer, it's all gonna fall over.*  
> <span class="qm">—— Anders Swanson · [04:09]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-14-talks-no-memory-no-harness-why-the-database-is|AI 让个人更快，却没让团队更快：智能体记忆才是真瓶颈]]<span class="pd-rz">同公司:Oracle · 同概念:上下文窗口 (context window)、智能体 (agent)、Codex、护栏 (guardrails)</span>
- [[2026-09-18-talks-total-recall-agent-memory-and-harness-en|模型是租的，harness 才是你的：拆解智能体的七层框架]]<span class="pd-rz">同公司:Oracle · 同概念:上下文窗口 (context window)、智能体 (agent)</span>
- [[2026-10-16-engenable-the-cafes-framework-improving-ai-agent-e|AI 干不好活，问题往往不在模型，而在你给它的“上下文”]]<span class="pd-rz">同概念:上下文窗口 (context window)、提示词注入 (prompt injection)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-25-practicalai-aiuc-1-building-trust-in-ai-agents|AI 智能体怎么认证：从标准到红队测试的全流程]]<span class="pd-rz">同概念:提示词注入 (prompt injection)、智能体 (agent)</span>
- [[2026-09-30-talks-the-death-of-the-code-review-what-the-da|代码评审未死：人类从引擎变飞行员]]<span class="pd-rz">同概念:提示词注入 (prompt injection)、智能体 (agent)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同公司:Oracle · 同概念:智能体 (agent)、Codex、护栏 (guardrails)</span>

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
