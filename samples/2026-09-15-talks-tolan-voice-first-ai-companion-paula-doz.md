---
title: Tolan 如何做语音优先的 AI 陪伴体
podcast: 精选演讲
date: 2026-09-18
source_url: undefined
duration: "14:59"
type: episode
cover: "#64748b"
description: Tolan 工程师 Paula 讲解构建语音优先 AI 陪伴体的四条工程原则，以及团队如何用智能体舰队开发产品本身。
guests: ["[[Paula Dozsa]]"]
companies: ["[[Tolan]]"]
concepts: ["[[智能体]]", "[[延迟]]", "[[记忆]]", "[[上下文]]", "[[Claude]]", "[[检索]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-15-talks-tolan-voice-first-ai-companion-paula-doz#post","headline":"Tolan 如何做语音优先的 AI 陪伴体","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-15-talks-tolan-voice-first-ai-companion-paula-doz","mainEntityOfPage":"https://talk.solomind.cc/2026-09-15-talks-tolan-voice-first-ai-companion-paula-doz","description":"Tolan 工程师 Paula 讲解构建语音优先 AI 陪伴体的四条工程原则，以及团队如何用智能体舰队开发产品本身。","datePublished":"2026-09-18","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Paula Dozsa"},{"@type":"Organization","name":"Tolan"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"延迟 (latency)"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"上下文 (context)"},{"@type":"Thing","name":"Claude"},{"@type":"Thing","name":"检索 (retrieval)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Tolan 如何做语音优先的 AI 陪伴体","item":"https://talk.solomind.cc/2026-09-15-talks-tolan-voice-first-ai-companion-paula-doz"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Tolan 如何做语音优先的 AI 陪伴体</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Tolan 如何做语音优先的 AI 陪伴体

<div class="pd-byl"><b>Paula Dozsa</b> · Tolan 工程师 · 2026-09-18</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-15-talks-tolan-voice-first-ai-companion-paula-doz.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">早期,我们的延迟从两秒漂移到了大约两秒半,而那半秒钟几乎让产品里的所有指标都崩了。</div><div class="a">— Paula Dozsa <button class="pd-ts" data-t="03:39" data-who="Paula Dozsa" data-en="Early on, our latency drifted from two seconds to about two and a half seconds, and that half second tanked basically every metric in the product." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Paula Dozsa]]
>
> **公司** [[Tolan]]
>
> **概念** [[智能体]] · [[延迟]] · [[记忆]] · [[上下文]] · [[Claude]] · [[检索]]

一个能陪你大声聊天的 AI 陪伴应用，从用户说完话到它开口回话，整个往返必须在两秒之内——早期[[延迟|延迟]]从两秒漂移到两秒半，多出来的那半秒几乎让产品里所有指标都崩了。这是 [[Tolan|Tolan]] 团队工程师 Paula 在一场演讲里讲的故事。

Tolan 是一个语音优先的 AI 陪伴产品：一个有个性、记得你的小外星人，用户像跟朋友说话一样跟它讲话，目前累计语音对话时长已超过 400 万小时。她反复强调：文字和语音都支持，但真正让用户觉得关系真实的是语音。

> 【背景】演讲者 Paula 自我介绍是 Tolan 团队负责 iOS 应用的工程师，此前来自 xAI 和 Spotify，还创立过一家叫 Imagi 的公司。

## 语音彻底改变了工程问题

文字聊天机器人里，轮次慢、[[上下文|上下文]]稳定，用户会等几秒、读回复、保持话题——几乎所有 LLM 应用都建立在这个假设上。语音正好相反：轮次极快，上下文极度易变。

用户一边做饭、走路、入睡时跟它说话，会在句子中间换话题、会打断、会说「呃」。Paula 的第一原则就是「为对话的波动性而设计」：有人正讲着分手的故事，突然来一句「等等，我是不是没关炉子？」然后又讲回来。

这意味着要修好那些「听起来微小但其实就是产品本身」的东西：你没法在它句子中间打断它；一声短促的「嗯」「对」不会被识别成一个话轮；脏话会被剔除掉。更深一层的教训是：不要优化「更少的打断」，要优化「更少的坏打断」——也就是[[智能体|智能体]]介入得太早的那种。他们构建了智能话轮转换（读取用户语音模式来判断打断是否真实），把最糟糕的过早中断削减了一半以上，并乐意为此多付出约 60 毫秒延迟。

## 延迟就是产品

第二条原则：延迟不是最后检查的数字，它就是产品，必须把管线每个阶段分开测——「感觉慢」没有用，你得知道到底哪里慢。管线是：用户停止说话 → 检测话轮结束 → 转写 → 模型产生第一个 token（通常是最大的一块，约一秒）→ 生成完毕 → 文字转语音产出第一个字节 → 播放。他们在质量上最大的飞跃来自迁移到 responses API 上的 GPT 5.1，把语音起始时间显著削短了。

更重要的是分层机队：不是每个话轮都发给同一个模型。承载「你与 Tolan 关系」的关键话轮（第一次对话、头几天的新手期）用前沿模型；轻量闲聊用更小更快的模型。

每个话轮上都跑一个叫 Tone Router 的小分类器（本身跑在便宜模型上），读取对话的情绪状态来决定路由。核心原则是**按利害关系路由，而不是按成本**——危机类或治疗师风格的语气从不省钱。

这么费劲的动机很直接：前沿模型成本约是小模型的五倍，一个关键话轮顶五个便宜话轮，路由是单位经济性能走通的关键。A/B 实验还发现一个意外结果：把三分之一的话轮路由到小模型，对留存率几乎没有可测量的影响。

## 记忆做成检索系统

让陪伴体「像陪伴」的关键是[[记忆|记忆]]。朴素做法是把全部对话历史当文字记录塞进上下文——装不进两秒循环，还导致长会话质量下降、模型在大上下文里迷失并产生幻觉。

他们把记忆当作[[检索|检索]]系统：从对话中提取事实、偏好和情绪氛围信号，向量化后存进向量数据库，查找低于 50 毫秒。每晚做压缩：合并重复、聚类相关记忆、解决矛盾、去掉噪音。

两个巧思：其一，不只针对用户最后一条消息做检索，还会围绕「这个人及这段关系」生成内部问题、拿这些问题去检索。其二，记忆分成稳定与不稳定两部分——易变的放提示词的实时尾部，总结对话时看哪些记忆真被调用过，就把它们固定进一个稳定、可缓存的块里。

## 每轮重建上下文，别跟漂移较劲

第四条原则：多数应用为保缓存热度跨轮复用上下文，文本里没问题，但易变的语音对话里这是个陷阱——用户一转话题，复用的上下文就立刻是错的。所以每一轮都从零件重新组装上下文窗口：近期消息摘要、用户画像卡、刚检索到的记忆、情绪信号给出的语气指引、实时应用状态。

角色设计也帮了忙：Tolan 刻意做成外星人，因为没有现实参照物可锚定，用户能把自我投射上去，它会变成用户需要的样子；而且外星人表现得冲动、混乱也不奇怪，这种「混乱」读起来反而有魅力。团队还有一位内部科幻小说作家 Eliot 专职写角色设定。但人格一旦漂移就一文不值——他们跑了一套并行的语气监控系统，根据用户的情绪线索改变一句话的表达方式，却不改变角色是谁，在数百轮对话里保持身份一致。

## 用 AI 造 AI

Paula 透露，从去年年底开始，[[Claude|Claude]] 在他们 iOS 应用里共同编写的代码已经超过团队任何一位工程师。最反直觉的是质量不降反升：无崩溃率从 99.6% 升到 99.9%，运行时错误下降超过 50%，高活跃用户占比翻倍。最大教训是：智能体的上下文主要来自代码库本身，而不是 Claude MD 文件——「让代码库本身成为文档」要强大得多，所以他们让智能体把代码库标准化了。

他们跑着一支真正的智能体舰队：实现智能体自由思考、直接写代码，对照快照反复检查到像素级完美；独立的审查智能体执行标准——多个 Claude 在人来看之前先互相审查；一个 PR 牧羊人盯着打开的拉取请求，对着 CI 失败和审查意见持续迭代到干净为止；还有分诊机器人对接所有入站 bug 报告，通过 MCP 接入 Linear、Sentry、Datadog，智能体可以重建一次崩溃、自行路由，经常自己开 PR 把 bug 修掉。

一个代表性案例：他们做一个面向更年长人群的新角色，Elliot 用一天就建完了。智能体映射了代码中每个承载人格的界面，写了一份「声音圣经」，然后让五个评审从不同角度攻击它——原型忠实度、模型机制、代码标准、「一位持怀疑态度的 52 岁人的耳朵」、安全性——再对照真实生产日志跑三轮「查找、修复、验证」。七百多万 token、四个半小时算力之后，几周的工作量一个下午完成。

## 本集带走

- **两秒是生死线**：语音对话从用户说完到它开口必须落在两秒内，延迟要按管线逐阶段测量（首 token、检测话轮结束、转写、语音合成），不能靠「感觉慢」。
- **按利害路由，不按成本**：关键话轮（首次对话、情绪严肃内容、危机语气）永远用最好的模型，闲聊和后台工作走小模型；三分之一话轮下放小模型对留存几乎无影响，但成本差五倍。
- **记忆当检索系统做**：提取事实/偏好/情绪信号向量化存储，每晚压缩（去重、聚类、解矛盾），再按「哪些记忆真被调用过」固化进可缓存的稳定块。
- **每轮重建上下文**：语音用户随时跳话题，复用缓存的上下文在用户一转向时就变成错的；从摘要、画像卡、检索记忆、语气指引、应用状态重新拼装。
- **优化「坏打断」而非「少打断」**：识别哪些打断是真的，为此多付 60 毫秒也值得。
- **管理智能体像管理人**：团队发现全力跑并发智能体后进步最大的是有管理背景的人——分解问题、带检查点委派、快速反馈、认真审查、知道何时亲自介入。他们甚至专门招「智能体工程管理」岗。

<div class="pd-sec pd-sec-q">全部金句 <span>14 条</span></div>

> <span class="qz">早期,我们的延迟从两秒漂移到了大约两秒半,而那半秒钟几乎让产品里的所有指标都崩了。</span>  
> *Early on, our latency drifted from two seconds to about two and a half seconds, and that half second tanked basically every metric in the product.*  
> <span class="qm">—— Paula Dozsa · [03:39]</span> ^q1

> <span class="qz">所以我们构建了智能话轮转换,它会读取你的语音模式来判断一个打断是否是真实的,我们把最糟糕的过早中断削减了一半以上。</span>  
> *So we built smart turn-taking that reads your speech pattern to decide whether an interruption is real, and we cut the worst early aborts by more than half.*  
> <span class="qm">—— Paula Dozsa · [04:38]</span> ^q2

> <span class="qz">延迟不只是你最后检查的一个数字,它实际上就是产品,我们把管线的每个阶段分开来测量,因为「感觉慢」是没有用的。</span>  
> *Latency isn't just a number you check at the end, it's actually the product, and we measure every stage of the pipeline separately because it feels slow is useless.*  
> <span class="qm">—— Paula Dozsa · [04:54]</span> ^q3

> <span class="qz">我们的主要原则是,我们基于利害关系而非成本来路由。</span>  
> *And our main principle is that we route based on stakes, not on cost.*  
> <span class="qm">—— Paula Dozsa · [06:08]</span> ^q4

> <span class="qz">举例来说,我们有危机类或治疗师风格的语气,我们在这些方面从不省钱。</span>  
> *For example, we have crisis or therapist-style tones, and we never cheap out on those.*  
> <span class="qm">—— Paula Dozsa · [06:24]</span> ^q5

> <span class="qz">我们做了很多 A-B 实验,在那里我们发现的令人惊讶的结果是,把三分之一的话轮路由到小模型,对留存率几乎没有可测量的影响。</span>  
> *And we do a bunch of A-B experiments, and the surprising result we found there is that routing a third of our turns to the small model has almost no measurable effect on retention.*  
> <span class="qm">—— Paula Dozsa · [06:57]</span> ^q6

> <span class="qz">具体来说,你应该重建上下文,而不是对抗漂移。</span>  
> *Specifically, you should rebuild context and not fight drift.*  
> <span class="qm">—— Paula Dozsa · [08:15]</span> ^q7

> <span class="qz">但在易变的语音对话里,这是个陷阱,因为一旦用户转移话题,你复用的上下文就立刻错了。</span>  
> *But in a volatile voice conversation, it's a trap because the second the user pivots, your reuse context is actively wrong.*  
> <span class="qm">—— Paula Dozsa · [08:25]</span> ^q8

> <span class="qz">主要是因为没有现实世界的参照物可以锚定,这意味着用户可以把自我投射上去,它会变成用户所需要的样子。</span>  
> *Mostly because there's no real-world reference to anchor on, which means that users can project onto it, and it becomes what they need.*  
> <span class="qm">—— Paula Dozsa · [09:06]</span> ^q9

> <span class="qz">第二,我们也知道,如果人格漂移了,人格就一文不值。</span>  
> *Second, we also know that personality is worthless if it drifts.*  
> <span class="qm">—— Paula Dozsa · [09:39]</span> ^q10

> <span class="qz">我相信现在对在座的各位大多数人来说都是如此,基本上从去年年底开始,在我们 iOS 应用中,Claude 共同编写的代码已经超过了团队里的任何一位工程师。</span>  
> *So I'm sure this is the case for most of you in the room now, but basically as of late last year, Claude has co-authored more code in our iOS app than any individual engineer in the team.*  
> <span class="qm">—— Paula Dozsa · [10:05]</span> ^q11

> <span class="qz">构建这套系统的最大教训是,智能体的上下文主要来自代码库本身,而不是那么来自 Claude MD 文件。</span>  
> *And the biggest lesson in building that system is that an agent's context comes mostly from the code base itself, not so much from the Cloud MD file.*  
> <span class="qm">—— Paula Dozsa · [10:33]</span> ^q12

> <span class="qz">所以当界面是你的声音、而另一端的东西记得你并有自己的人格时,它就不再只是软件,而是变成了一段真实的关系,这也是为什么负责任地构建它、把它构建好,是值得为之痴迷的事。</span>  
> *So when the interface is your voice and the thing on the other side remembers you and has a personality, it stops being just software and starts being an actual relationship, which is why building it responsibly and building it well is worth obsessing over.*  
> <span class="qm">—— Paula Dozsa · [12:26]</span> ^q13

> <span class="qz">你基本上必须把问题分解、带着检查点去委派、给出快速反馈、认真审查工作成果,并且知道什么时候该亲自介入。</span>  
> *You basically have to decompose the problem, delegate it with checkpoints, give fast feedback, review the work seriously, and know when exactly to jump in.*  
> <span class="qm">—— Paula Dozsa · [14:23]</span> ^q14

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-14-talks-no-memory-no-harness-why-the-database-is|AI 让个人更快，却没让团队更快：智能体记忆才是真瓶颈]]<span class="pd-rz">同概念:智能体 (agent)、检索 (retrieval)、记忆 (memory)、Claude</span>
- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:Claude、智能体 (agent)、记忆 (memory)</span>
- [[2026-08-06-yc-garry-tan-own-your-intelligence-e3n2rc1|个人 AGI：用 Markdown 组建你自己的劳动力]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)、Claude</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)、记忆 (memory)、Claude</span>
- [[2026-08-19-aiandi-the-ai-alien-companion-app-that-s-bringi|Portola：当AI变成即兴演员，不是助手]]<span class="pd-rz">同公司:Tolan · 同概念:记忆 (memory)、LLM</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同概念:Claude、智能体 (agent)</span>

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
