---
title: Figma 工程师谈：怎么让智能体进团队还不毁掉代码质量
podcast: 精选演讲
date: 2026-09-27
source_url: undefined
duration: "17:32"
type: episode
cover: "#64748b"
description: Figma 软件工程师 Eyal Blum 讲 Figma 工程团队如何引入 AI 智能体：用规划代替提示、把验证下移给机器、把最强的怀疑者变成路线图负责人。
guests: ["[[Eyal Blum]]"]
companies: ["[[Figma]]"]
concepts: ["[[智能体]]", "[[验证]]", "[[规划（而非提示）]]", "[[TDD]]", "[[测试金字塔]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-28-talks-how-to-get-your-org-to-adopt-coding-agen#post","headline":"Figma 工程师谈：怎么让智能体进团队还不毁掉代码质量","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-28-talks-how-to-get-your-org-to-adopt-coding-agen","mainEntityOfPage":"https://talk.solomind.cc/2026-08-28-talks-how-to-get-your-org-to-adopt-coding-agen","description":"Figma 软件工程师 Eyal Blum 讲 Figma 工程团队如何引入 AI 智能体：用规划代替提示、把验证下移给机器、把最强的怀疑者变成路线图负责人。","datePublished":"2026-09-27","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Eyal Blum"},{"@type":"Organization","name":"Figma"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"验证 (verification)"},{"@type":"Thing","name":"规划（而非提示） (planning)"},{"@type":"Thing","name":"TDD"},{"@type":"Thing","name":"测试金字塔 (testing pyramid)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Figma 工程师谈：怎么让智能体进团队还不毁掉代码质量","item":"https://talk.solomind.cc/2026-08-28-talks-how-to-get-your-org-to-adopt-coding-agen"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Figma 工程师谈：怎么让智能体进团队还不毁掉代码质量</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Figma 工程师谈：怎么让智能体进团队还不毁掉代码质量

<div class="pd-byl"><b>Eyal Blum</b> · Figma 软件工程师 · 2026-09-27</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-28-talks-how-to-get-your-org-to-adopt-coding-agen.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">所以他们实际上最终成为适应最慢的人，因为他们第一手看到了所有的问题。</div><div class="a">— Eyal Blum <button class="pd-ts" data-t="03:58" data-who="Eyal Blum" data-en="So they actually end up being slowest to adapt because they see all the problem firsthand." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Eyal Blum]]
>
> **公司** [[Figma]]
>
> **概念** [[智能体]] · [[验证]] · [[规划（而非提示）]] · [[TDD]] · [[测试金字塔]]

这一集是 [[Figma|Figma]] 软件工程师 [[Eyal Blum|Eyal Blum]] 的演讲，讲 Figma 内部的工程组织怎么把 AI [[智能体|智能体]](能自主读代码、写代码、跑测试的 AI 程序员)接进工作流，同时保住代码库的质量。他不是来吹产品的，是来讲内部组织怎么消化这场变化的。

钩子先给一个：**适应 AI 最慢的，往往是最优秀的工程师**。因为他们习惯把全部上下文装在脑子里，知道所有的坑在哪里，用「精神胶带」把智能体运转不佳的地方粘合在一起，挡住所有真正糟糕的东西。结果他们负担最重、成为瓶颈、最沮丧，也第一手看到所有问题，所以反而成了适应最慢的人。

## 三幕式：AI 采用的真实曲线

Figma 观察到，无论公司还是个人，AI 采用都走三幕：第一幕，上手某个工具，简单的事快了 10 倍，兴奋；第二幕，把同样做法套到大问题上，AI 败得很惨，一堆 bug,信任崩塌；第三幕，才开始构建真正的技能——正确的护栏、提示词、上下文。麻烦在于组织内部进度不均：有的团队已彻底转型，有的还在实验或已经失去信心，而他们必须一起交付同一个产品。怎么让所有人都走到第三幕，是这一集的主线。

## 最大的杠杆：投资验证

在代码库里能做的价值最高的事，就是投资于[[验证|验证]]。每当能把一件原本要人做的事，变成智能体可以自动验证的事，都是大赢。比如 Playwright MCP(让智能体直接操作浏览器界面的工具)出来后，不再需要人去逐步走查，智能体可以自己探索验证，对很多团队是巨大的生产力解锁。

更进一步：发现某个智能体验证方式有效后，花时间把它**固化成确定性流程**——能编码成测试的就变成测试。这样只在需要推理的地方用 LLM,省 token、省时间，回报总是正的。

还有一个具体技巧：让智能体按 [[TDD|TDD]](先写测试、再写代码让它通过的「红到绿」开发法)写代码——先定目标，再让它朝目标写，几乎总是比先写代码再补测试效果好，否则它会反过来让测试迁就代码，而不是让代码满足验证标准。

整个质量体系像经典的[[测试金字塔|测试金字塔]]一样分层：尽可能把检查下移到确定性分析——lint、编译器、单元测试；能按标准覆盖的交给智能体审查；已编码进代码库的架构标准也移给智能体；只有最顶层的功能性判断才留给人。**只让人做人才需要做的事**。

## 规划替代提示：把「写代码的乐趣」换个形式还回来

针对前面提到的满意度问题——很多人过去靠写代码进入心流获得乐趣，现在沦为「等 AI 输出、再跟 AI 对话」的提示词循环——Figma 的解法是：**规划(planning)而非提示(prompting)**。花大量时间写一份非常详细的计划，把所有决策打磨清楚、迭代、发队友评审，然后才交给智能体当作「可自动完成的实现」执行，做完交回来。花一周写计划很常见，但这一周把构建的决策乐趣重新带回了过程，同时还在加速。

一份好计划长这样：

- **开头放「为什么」**：像设计文档的执行摘要，写一段醒目的目标章节，防止智能体随时间漂移(悄悄偏离方向)，并明确禁止它回头改这一节——不许它「自己觉得想改」就改。
- **拆成可独立验证的小块**：作者自己的尺寸标准是——我愿不愿意一口气审查对应的 PR?如果「得先来杯咖啡才能读」，就是太大，要拆。每一块都要有验证关卡，否则会出现五个阶段里第一个写好了但没验证、后面全部建立在未验证假设之上的局面。
- 计划定了之后，用什么循环、什么工作流去实现随意。他发现 AI 工作流的好处就是每个人都能搭最适合自己的，强行把所有人统一到一套工具上是收益递减的。

效果：一份花一周写的计划、一周跨团队对齐，交给智能体过夜实现回来，产出的 PR 都在 10 到 100 行之间，一份计划约 20 个 PR,合计约六周的编码工作量，实际只花一周——5 倍提速(还得记得算上最后的审查周期)。

## 把最强的怀疑者变成路线图负责人

回到那些最优秀也最怀疑的工程师：别琢磨怎么「让他们用 AI」,而是**让他们负责「让 AI 在组织里变得安全」的路线图**。他们持怀疑态度，恰恰是因为他们精确知道验证缺失在哪、工具在哪失效——他们的反馈就是改进智能体与代码库交互的路线图。

一旦看到自己推动的改进真的让自己的生活变好，他们自然跟上来。而且他们提意见毫不客气：和一群人坐不到一小时的头脑风暴，就能列出一整页要修的东西。

## 注意力是稀缺资源：标注哪些是 AI 写的

AI 时代人类注意力成为稀缺资源，设计文档、Slack 消息、邮件都变长了三四倍、数量翻了两三倍，内容量和以前差不多——沟通质量的可辨识度崩了。Figma 的做法是「注意力感知沟通」：**标注哪些内容是人写的、哪些是 AI 生成的**。他们团队规定，每个 PR 描述必须以一段手写说明开头(可以很短)，AI 生成的描述放在后面——读者就知道该更认真读顶部、以它为准，对后面的部分多一分怀疑。

背后还有个真实教训：他早些时候给几位资深 AI 怀疑者发了一份用 AI 做的 PR 评论分析，没有区分哪些是他写的、哪些是 AI 生成的，对方非常生气——「我没想到我这么尊重的人会给我发这么粗糙敷衍的东西」。道歉之后他学到：清楚标注「这是我写的，这是 AI 写的，我需要你的反馈」，这种文化上的改变和工程挑战同样重要。

## 从人所站的地方开始

推广上最有效的一条朴素经验：让人们**在各自当前的位置直接用上 AI**,把日常任务中的 AI 使用正常化。最有穿透力的一招是在 Slack 里@一个智能体，当着同事的面说「你能替我做一下这个吗」，让它在帖子里闭环。对还没认同的人，可以不带攻击性地@它说「试试看这次智能体能不能搞定」——一次好的现场体验，会让人回去自己尝试。

## 现在与边界

旅程远未结束。尽管 Figma 在对外交付 AI 产品，内部自动化还没有完全到位，构建系统依赖复杂，怎么有效用好编程智能体仍在摸索。他收尾说：在硅谷工作 15 年，这是他在文化和技术上所见过的、按数量级算最大的变化——大家都在一起摸索。

> 【背景】演讲末尾提到的 "Cloud Agent" 按上下文应指 Anthropic 的 Claude 编程智能体(Claude Code 类产品)，系语音转写所致的写法差异。

## 本集带走

- **验证下移**：能变成 lint、编译器、单元测试的检查就别留给人和智能体反复推理；智能体验证有效的方式，固化成确定性流程。
- **让智能体先看目标再写码**：TDD 式「红到绿」——先定验证标准再让它写实现，几乎总比写完码再补测试好。
- **用一周写计划、一小时审查**:计划开头放「为什么」，拆成每块可独立验证的小 PR(一杯咖啡能读完的尺寸)，每阶段设验证关卡防漂移，然后整包丢给智能体执行。
- **把最强怀疑者变成路线图主人**：他们知道工具在哪失效；让他们负责让 AI 变安全，他们看到改进生效自然会跟上。
- **标注人写与 AI 生成**:PR 描述、Slack、邮件里，手写部分放最前、以它为准——注意力稀缺时，告诉读者该认真读哪里。
- **在日常场景里推广**:Slack 里当场@智能体闭环一次好体验，比任何培训都更能让观望者上手。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">所以他们实际上最终成为适应最慢的人，因为他们第一手看到了所有的问题。</span>  
> *So they actually end up being slowest to adapt because they see all the problem firsthand.*  
> <span class="qm">—— Eyal Blum · [03:58]</span> ^q1

> <span class="qz">我想这里的很多演讲者都提到过这一点，但投资于验证可能是我们在代码库中能做的价值最高的事情。</span>  
> *I think a lot of the speakers here have touched upon this, but investing in verification is probably the highest value thing we can do in our code base.*  
> <span class="qm">—— Eyal Blum · [05:00]</span> ^q2

> <span class="qz">如果你告诉你的技能或智能体按「红到绿」的 TDD 风格去写你正在写的代码，它几乎总能给你更好的结果。</span>  
> *If you tell your skills or your agent to write the code that you're writing, like at the red to green, at the TDD style, it almost always gives you better results*  
> <span class="qm">—— Eyal Blum · [06:13]</span> ^q3

> <span class="qz">因为那样的话，它会让测试去迁就代码，而不是让代码去满足验证标准。</span>  
> *because then it will fit the test to the code rather than fit the code to pass the verification criteria.*  
> <span class="qm">—— Eyal Blum · [06:34]</span> ^q4

> <span class="qz">然后只有在最顶层才需要某种人工审查，通常围绕功能性——这才是正确的构建方式：只让人去做人真正需要参与的事。</span>  
> *And then only at the very top you need to have some sort of human review which is usually around the functionality and this is the right thing to build that only leave the human to do what the humans need to actually be involved in.*  
> <span class="qm">—— Eyal Blum · [07:20]</span> ^q5

> <span class="qz">把执行摘要放进去给智能体。否则它们会随时间开始漂移，而且要确保智能体不会只因为自己想改，就回头去修改那个部分。</span>  
> *Put that in there for the agent. Otherwise, they'll start drifting over time and make sure that the agent don't go back and change that because they feel like it.*  
> <span class="qm">—— Eyal Blum · [08:51]</span> ^q6

> <span class="qz">我愿不愿意审查与那一部分对应的 PR?如果它大到我不愿意一口气审完——就像这么个检验标准：读它之前我得先来杯咖啡——那就说明它太大了。</span>  
> *would I want to review the PR that will correspond to that part? If it's going to be too big for me to want to review in one sitting, if kind of like the test is, I'm going to need to get a cup of coffee before I read this. That means it's too big*  
> <span class="qm">—— Eyal Blum · [09:12]</span> ^q7

> <span class="qz">他们之所以持怀疑态度，是因为他们看到了你在验证上缺失的地方、工具失效的地方——所以他们的反馈基本上就是如何改进智能体与代码库交互的路线图。</span>  
> *They're spec haptic because they're seeing where you're lacking validation, where your tools fail, so their feedback is basically the roadmap of how to improve your agent interacting with the code base.*  
> <span class="qm">—— Eyal Blum · [11:59]</span> ^q8

> <span class="qz">我在硅谷工作了过去 15 年，这是我在文化和技术方面所见过的、按数量级而言最大的变化。</span>  
> *I've been working in the Valley for the last 15 years, and this is the biggest change by orders of magnitude of everything that I've seen in terms of culture and technology.*  
> <span class="qm">—— Eyal Blum · [17:08]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-05-28-beyondcoding-addy-osmani-top-tier-software-engineers|从看护智能体到认知投降：工程师该守住什么]]<span class="pd-rz">同概念:智能体 (agent)、验证 (verification)</span>
- [[2026-07-27-talks-boris-cherny-we-cut-80-of-claude-code-s|Claude Code 造物主 Boris:删掉 80% 系统提示词，让模型跑两周不停]]<span class="pd-rz">同概念:智能体 (agent)、验证 (verification)</span>
- [[2026-07-28-yc-boris-cherny-building-claude-code-e3mkr7|别再微管理 Claude:Claude Code 造物主的智能体实战心法]]<span class="pd-rz">同概念:智能体 (agent)、验证 (verification)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同公司:Figma · 同概念:智能体 (agent)、护栏 (guardrails)</span>
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|别管金句，去捣鼓东西：Notion 产品负责人谈 AI 时代的产品与品味]]<span class="pd-rz">同公司:Figma · 同概念:智能体 (agent)</span>
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|代码量暴涨8倍后，工程管理怎么办？]]<span class="pd-rz">同概念:智能体 (agent)、验证 (verification)</span>

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
