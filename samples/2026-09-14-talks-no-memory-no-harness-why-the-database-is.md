---
title: AI 让个人更快，却没让团队更快：智能体记忆才是真瓶颈
podcast: 精选演讲
date: 2026-09-17
source_url: undefined
duration: "21:18"
type: episode
cover: "#64748b"
description: Oracle 对外数据库产品管理负责人 Kay Malcolm 分享：AI 提速个人后，团队产出为何不升反堵，以及用共享智能体记忆破局的方法。
guests: ["[[Kay Malcolm]]"]
companies: ["[[Oracle]]"]
concepts: ["[[智能体]]", "[[harness]]", "[[记忆]]", "[[上下文窗口]]", "[[护栏]]", "[[检索]]", "[[Codex]]", "[[Git]]", "[[Poly]]", "[[Oracle Agent Memory Package]]", "[[Oracle AI 数据库]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-14-talks-no-memory-no-harness-why-the-database-is#post","headline":"AI 让个人更快，却没让团队更快：智能体记忆才是真瓶颈","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-14-talks-no-memory-no-harness-why-the-database-is","mainEntityOfPage":"https://talk.solomind.cc/2026-09-14-talks-no-memory-no-harness-why-the-database-is","description":"Oracle 对外数据库产品管理负责人 Kay Malcolm 分享：AI 提速个人后，团队产出为何不升反堵，以及用共享智能体记忆破局的方法。","datePublished":"2026-09-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Kay Malcolm"},{"@type":"Organization","name":"Oracle"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"检索 (retrieval)"},{"@type":"Thing","name":"Codex"},{"@type":"Thing","name":"Git"},{"@type":"Thing","name":"Poly"},{"@type":"Thing","name":"Oracle Agent Memory Package"},{"@type":"Thing","name":"Oracle AI 数据库 (Oracle AI database)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AI 让个人更快，却没让团队更快：智能体记忆才是真瓶颈","item":"https://talk.solomind.cc/2026-09-14-talks-no-memory-no-harness-why-the-database-is"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 让个人更快，却没让团队更快：智能体记忆才是真瓶颈</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 让个人更快，却没让团队更快：智能体记忆才是真瓶颈

<div class="pd-byl"><b>Kay Malcolm</b> · 2026-09-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-14-talks-no-memory-no-harness-why-the-database-is.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">因为 Git 记录的是代码，而不是人类意图。</div><div class="a">— Kay Malcolm <button class="pd-ts" data-t="03:45" data-who="Kay Malcolm" data-en="Because Git records the code and not human intent." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Kay Malcolm]]
>
> **公司** [[Oracle]]
>
> **概念** [[智能体]] · [[harness]] · [[记忆]] · [[上下文窗口]] · [[护栏]] · [[检索]] · [[Codex]] · [[Git]] · [[Poly]] · [[Oracle Agent Memory Package]] · [[Oracle AI 数据库]]

这一集是 [[Oracle|Oracle]] 对外数据库产品管理负责人 [[Kay Malcolm|Kay Malcolm]] 的现场演讲。她在 Oracle 干了 20 年，手下团队横跨欧洲(EMEA)和美国，做平台开发、内容开发、QA 和前端。她讲了一个很扎心的发现：在大家疯狂堆 token 用 AI 写代码的 2025 年，AI 确实让她团队里每个人更快了，**但整个团队并没有变得更有生产力** <button class="pd-ts" data-t="02:23" data-who="Kay Malcolm" data-en="But in the token maxing era, the thing that I found out was while AI was making the individuals on my team faster, there was another problem it was creating. It wasn't making my team more productive." aria-label="回原文"></button>。

问题出在哪？她一半团队在 EMEA,一半在美国。

荷兰的团队凌晨 4 点提交代码，「他们提交了代码，但没有提交他们来自 [[Codex|Codex]] 的上下文」<button class="pd-ts" data-t="02:43" data-who="Kay Malcolm" data-en="And the reason was when one team from the Netherlands checked in code at my 4 a.m. in the morning, because I've got half of my team that's in EMEA, and I have half of my team that are here in the United States." aria-label="回原文"></button>——Oracle 内部用 Codex 做 AI 编程。美国团队早上醒来，拿到了代码，却完全不知道这些代码背后的决策上下文。

于是出现了一堆症状：GitHub 不追踪上下文，仓库分叉，经理被追问「为什么我们花了这么多钱买 token 和 AI,却还是要花大量时间做测试和验证」<button class="pd-ts" data-t="03:29" data-who="Kay Malcolm" data-en="Why are we not going faster? We're spending all of this money on tokens, we're spending all this money on AI, yet something is missing because we're still spending time doing testing and validation." aria-label="回原文"></button>。她的结论一句话：「[[Git|Git]] 记录的是代码，而不是人类意图」<button class="pd-ts" data-t="03:45" data-who="Kay Malcolm" data-en="So our net-net wasn't really working for us. Because Git records the code and not human intent. So it's a problem." aria-label="回原文"></button>。

代码创建已经不是瓶颈了，真正的瓶颈是协作——「我们需要一个协作层」<button class="pd-ts" data-t="04:03" data-who="Kay Malcolm" data-en="And even though code creation was no longer our problem, we still had a bottleneck. We needed a collaboration layer. Now, I do have members of my team in the audience." aria-label="回原文"></button>。最后她是「用 AI 解决了一个 AI 自己制造的问题」。

## 企业智能体 = 模型 + 马具(harness)

Malcolm 用一个类比定义企业[[智能体|智能体]]：模型只是「漂浮在玻璃罐里的小大脑」，真正的智能体是模型加上 harness(马具)——「这个马具就是身体，是智能体真正能做事、把事情办成的方式」<button class="pd-ts" data-t="06:49" data-who="Kay Malcolm" data-en="So the agent, think of it as the model, little brain floating in a glass jar, plus this harness. This harness is the body. So it's how the agent can actually do things and get things done." aria-label="回原文"></button>。马具包括：工具(它怎么做事)、[[上下文窗口|上下文窗口]](提示词里的内容)、[[记忆|记忆]]、[[检索|检索]](只取回正确的信息，不是取回所有东西)、还有[[护栏|护栏]]——她说开发者不在乎安全，但她为「最安全的数据库公司」工作，所以她在乎。

其中记忆是中枢神经系统，负责把上下文从大脑传到身体各处。她梳理了五种最常见的记忆类型，建议观众记住：

- **短期记忆**：就是当前会话，你在 Claude Code、Codex 或聊天窗口里的那段。
- **长期记忆**：跨会话持续存在的。
- **情景记忆**：「我上次和某某互动时发生了什么」。
- **程序性记忆**：用过的工具、采取过的步骤。
- **语义记忆**：事实与知识。

## 一个数据库老兵的故事：为什么「存哪里」是关键问题

记忆该存在哪？她讲了自己的黑历史。

她从客户 Southern Company(亚特兰大的电力公司)进入 Oracle,当年是性能调优高手。后来开发者不断引入新数据库：为了存非结构化数据装了一个专用库，为了找关联关系装了 Neo4j——她给爬塔恢复供电的系统写过一条五层嵌套的 union all SQL,跑 20 分钟才出结果，「就像是图数据库的前身」。

而作为 DBA,每管一个数据库系统每周就要多开安全会和补丁会，最后开到六个会。她干脆辞职去了 Oracle 想解决这个问题。

回到现在：智能体需要访问所有这些数据——关系型、JSON 非结构化、图、向量。她现场让四位志愿者分别扮演四种数据库，要求他们商量「母牛跳过了月亮」这句话谁存、谁是唯一真相来源——结果四个库根本没法商量。

「所以如果数据在 Oracle 数据库里、同时也在非结构化 JSON 库里、又在图数据库和向量数据库里，那你的唯一真相来源在哪里？」<button class="pd-ts" data-t="12:49" data-who="Kay Malcolm" data-en="Agents now need access to all of this data. So if data is in an Oracle database, if then it's also in an unstructured JSON database, if it's in a graph database, and it's in a vector database, where is your single source of the truth?" aria-label="回原文"></button> 让智能体自己去找？

「有时候它会搞对。大多数时候它会搞错，而且会烧掉一大堆 token」<button class="pd-ts" data-t="13:05" data-who="Kay Malcolm" data-en="The agent has to figure that out. Sometimes it'll get it right. Most times it'll get it wrong and it's gonna burn up a whole bunch of tokens." aria-label="回原文"></button>。

存到文件系统或 Claude/ChatGPT 的 memory.md 文件？在企业规模下一样会出问题。

然后她抛出全场核心卖点：「Oracle 不是你们以为的那个 Oracle」<button class="pd-ts" data-t="15:09" data-who="Kay Malcolm" data-en="Oracle, and if you don't forget one, if you forget everything I say and you remember one thing, Oracle is not the Oracle that you think. That is why I am here today." aria-label="回原文"></button>。26AI 数据库可以原生在**同一张表、同一个分区**里存 JSON、图、向量、空间数据，甚至要不可变存储还有区块链——「任何数据类型都可以存储在 26AI 数据库里，任何工作负载，任何地方，AWS、GCP、Azure、OCI、本地部署」<button class="pd-ts" data-t="15:39" data-who="Kay Malcolm" data-en="We have a marketing problem. So any data type can be stored in a 26AI database, any workload, anywhere, AWS, GCP, Azure, OCI, on-prem. Choice and flexibility." aria-label="回原文"></button>。

她坦承：「我们有一个营销问题」——知道这事的人太少了。落到智能体记忆上，她的方案是按记忆类型选存储：长期和程序性记忆放关系型，短期和长期放 JSON,程序性放图(图正是理清步骤和关系的地方)，情景和语义用向量、同时存为文本。

## 解法:Poly 记忆代理

回到开头团队协作的问题，他们用一个叫 [[Poly|Poly]] 的「记忆代理」解决了：开发者不仅共享代码，Poly 还追踪上下文——一个上下文窗口里的程序性记忆、情景记忆、长期记忆信息，会共享给团队其他人。她说团队成员本身也是「智能体，只不过是人类智能体」。上下文跨 fork 共享，Poly 会判断它属于哪个 fork、哪个分支、哪个提交，开发者始终保持控制权 <button class="pd-ts" data-t="17:26" data-who="Kay Malcolm" data-en="Shared across forks. The developers on the team remained in control while Polly was able to create the context, figure out which fork and branch it belonged to, and which commit it belonged to." aria-label="回原文"></button>。

她强调这不是 Oracle 一家的判断，她在飞机上读的三篇材料都在指向同一件事：OpenAI 讲其内部数据智能体的论文说，「记忆对于确保它的智能体能够正确过滤、而不是尝试字符串匹配来说至关重要」<button class="pd-ts" data-t="18:11" data-who="Kay Malcolm" data-en="And the thing that it says is, it is saying that its in-house data agent actually needs memory. Memory was crucially important to ensure that its agent was able to filter correctly instead of trying to string match." aria-label="回原文"></button>;LangChain 的 Harrison Chase 说：「你的 harness、你的记忆，如果你不拥有你的 harness,你就不拥有你的记忆，这是关键」<button class="pd-ts" data-t="18:20" data-who="Kay Malcolm" data-en="Memory was crucially important to ensure that its agent was able to filter correctly instead of trying to string match. Harrison Chase said, your harness, your memory, and if you don't own your harness, you don't own your memory, which is key." aria-label="回原文"></button>。至于「Claude 自带记忆为什么不能用」——那更像文件系统记忆，「它只能和一个实例配合工作，但当你扩展超过一个实例——而在企业里你一定会扩展超过一个——就会产生问题」<button class="pd-ts" data-t="18:32" data-who="Kay Malcolm" data-en="And then, I'm sure you all are wondering, well, Claude has memory, why can't I use that? Well, it's kind of like file system memory, and it works with one, but just like in my example, when you scale past one, and you're gonna scale past one in the enterprise, it creates a problem." aria-label="回原文"></button>。

Oracle 的落地产品是 **[[Oracle Agent Memory Package|Oracle Agent Memory Package]]**(pip install 即可用)：一个 SDK,负责保存实时对话、记忆、事实，并判断哪些值得保留。他们自己的实践里，Kevin 与 Poly 共享上下文，用 Agent Memory SDK,存在 Oracle Autonomous Database,LLM 可自选、也可通过 Oracle Private AI Services 容器跑本地模型——于是另一端的 Linda 可以和 Kevin 无缝协作。

收尾金句：「AI 让个人更快。[[Oracle AI 数据库|Oracle AI 数据库]]上的共享记忆让团队更快」<button class="pd-ts" data-t="19:38" data-who="Kay Malcolm" data-en="And then Linda, who's actually sitting right here, can interact and work with Kevin, no issues. So yes, AI makes individuals faster. Shared memory on an Oracle AI database makes teams faster." aria-label="回原文"></button>。她还顺手打了广告：LiveLabs.oracle.com 是她六年前亲手写的平台(现在有 4000 万用户)，OCI 有永久免费层——免费数据库、免费算力、每月 3000 封邮件、200 GB 存储。

## 本集带走

- **AI 的快是个人级的，不是团队级的**：个人用 AI 提速后，上下文不同步会让团队整体卡在测试、验证和冲突解决上——先解决协作层，再谈提效。
- **Git 只记代码不记意图**：AI 时代的提交里最值钱的是「为什么这么写」的决策上下文，想办法让它跟着代码一起共享。
- **harness = 模型之外的一切**：工具、上下文、记忆、检索、护栏；记忆是其中跨会话、跨人共享的中枢，企业规模下不可妥协。
- **记忆分五种，存储要按类型选**：短期(会话)、长期(跨会话)、情景(上次发生了什么)、程序性(步骤与工具)、语义(事实)——散落多个专用库会让「唯一真相来源」消失，智能体自己猜又贵又错。
- **别用通用工具自带的文件记忆扛企业规模**：单实例好使、一扩展就崩；要有能跨人、跨 fork、跨分支共享且能判断「什么值得留」的记忆层。

> 【背景】演讲中的 Poly/Polly 为同一产品名的不同转写；Codex 是 OpenAI 的 AI 编程工具；Harrison Chase 是 LangChain/LangGraph 背后公司 LangChain 的 CEO,该信息出自她转述的引用，非本集独立介绍。

<div class="pd-sec pd-sec-q">全部金句 <span>2 条</span></div>

> <span class="qz">因为 Git 记录的是代码，而不是人类意图。</span>  
> *Because Git records the code and not human intent.*  
> <span class="qm">—— Kay Malcolm · [03:45]</span> ^q1

> <span class="qz">Harrison Chase 说，你的 harness、你的记忆，如果你不拥有你的 harness,你就不拥有你的记忆，这是关键。</span>  
> *Harrison Chase said, your harness, your memory, and if you don't own your harness, you don't own your memory, which is key.*  
> <span class="qm">—— Kay Malcolm · [18:20]</span> ^q2

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-07-twentyvc-20vc-the-100-billion-ai-assistant-race-t|邮箱里的 AI 助手：Plaid 前 CTO 谈如何在巨头围剿下赢]]<span class="pd-rz">同公司:OpenAI · 同概念:Codex、护栏 (guardrails)、智能体 (agent)、Claude</span>
- [[2026-09-09-pragmatic-building-codex-with-tibo-sottiaux|Codex 负责人亲述:OpenAI 内部如何造编程智能体]]<span class="pd-rz">同公司:OpenAI · 同概念:Codex、智能体 (agent)、线束 (harness)、护栏 (guardrails)</span>
- [[2026-09-14-eyeonai-the-hidden-algorithm-that-decides-which|当 AI 决定买什么软件：G2 的「信任层」生意]]<span class="pd-rz">同公司:OpenAI · 同概念:护栏 (guardrails)、智能体 (agent)、线束 (harness)、Claude</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同公司:Oracle · 同概念:Codex、护栏 (guardrails)、智能体 (agent)</span>
- [[2026-02-12-lennys-engineers-are-becoming-sorcerers|OpenAI 内部怎么用 AI 写代码：从巫师比喻到一人独角兽的二阶效应]]<span class="pd-rz">同公司:OpenAI · 同概念:Codex、智能体 (agent)、护栏 (guardrails)</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:OpenAI · 同概念:Codex、智能体 (agent)、Claude</span>

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
