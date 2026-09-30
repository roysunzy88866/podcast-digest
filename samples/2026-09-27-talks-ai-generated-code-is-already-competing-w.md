---
title: AI 生成的代码到底行不行：百万 PR 数据给出的答案
podcast: 精选演讲
date: 2026-09-30
source_url: undefined
duration: "12:31"
type: episode
cover: "#64748b"
description: Greptile 联合创始人 Daksh 用每月超百万条 PR 的审查数据，对比 AI 与人类代码质量，发现两者几乎无差别。
guests: ["[[Daksh Gupta]]"]
companies: ["[[Greptile]]"]
concepts: ["[[智能体]]", "[[pull request]]", "[[代码审查]]", "[[沙箱]]", "[[Codex]]", "[[Devin]]", "[[Claude]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-27-talks-ai-generated-code-is-already-competing-w#post","headline":"AI 生成的代码到底行不行：百万 PR 数据给出的答案","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-27-talks-ai-generated-code-is-already-competing-w","mainEntityOfPage":"https://talk.solomind.cc/2026-09-27-talks-ai-generated-code-is-already-competing-w","description":"Greptile 联合创始人 Daksh 用每月超百万条 PR 的审查数据，对比 AI 与人类代码质量，发现两者几乎无差别。","datePublished":"2026-09-30","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Daksh Gupta"},{"@type":"Organization","name":"Greptile"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"pull request"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"Codex"},{"@type":"Thing","name":"Devin"},{"@type":"Thing","name":"Claude"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"AI 生成的代码到底行不行：百万 PR 数据给出的答案","item":"https://talk.solomind.cc/2026-09-27-talks-ai-generated-code-is-already-competing-w"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 生成的代码到底行不行：百万 PR 数据给出的答案</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 生成的代码到底行不行：百万 PR 数据给出的答案

<div class="pd-byl"><b>Daksh Gupta</b> · Greptile 联合创始人 · 2026-09-30</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-27-talks-ai-generated-code-is-already-competing-w.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">任何在 AI 编程领域工作的人都知道，新模型发布的那 12 月算是 AI 编程史上的一个分水岭时刻，因为这些产品第一次在编程方式上真正实现了自主。</div><div class="a">— Daksh Gupta <button class="pd-ts" data-t="01:49" data-who="Daksh Gupta" data-en="And anyone that's working in AI coding knows that December when the new models came out was sort of this watershed moment in the history of AI coding because these products for the first time were truly autonomous in how they're programmed." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Daksh Gupta]]
>
> **公司** [[Greptile]]
>
> **概念** [[智能体]] · [[pull request]] · [[代码审查]] · [[沙箱]] · [[Codex]] · [[Devin]] · [[Claude]]

让编程[[智能体|智能体]]端到端地写代码、自己开 [[pull request|pull request]](代码合并请求，下称 PR),一天开 100 个——这种玩法在 Twitter 上传得沸沸扬扬，但 [[Greptile|Greptile]] 联合创始人 Daksh 最初是怀疑的：这会不会只是炒作？独立开发者行得通，可那些有真实客户、代码库真正具备商业价值的大公司，也敢这么干吗？带着这个疑问，他深挖了自家数据——Greptile 每月为成千上万家企业客户审查超过 100 万个 PR——得出的结论推翻了他自己的怀疑：AI 写的 PR,质量上和人类写的几乎没有统计差异 <button class="pd-ts" data-t="02:21" data-who="Daksh" data-en="And as someone that had started programming before agents, I was very skeptical that real companies could program this way. So I was really, really curious. Are these fully vibed PRs really actually good?" aria-label="回原文"></button>。

## 先得找出哪些 PR 是 AI 写的

第一个意外是：想从数据里认出 AI 生成的 PR,出乎意料地难。直接看 GitHub 的 author 字段，只有不到 1% 的 PR 作者是 [[Codex|Codex]]、[[Claude|Claude]] 或 Cursor——这不符合直觉。

于是他叠加了多个信号:PR 描述页脚的「co-authored by Claude / Cursor」标记，以及分支名前缀(智能体通常自己起分支名)。综合下来，任何给定月份里，约四分之一的 PR 完全或大部分由 AI 生成。

回溯过去 12 个月，这个数字涨得飞快：去年年初还不到 1% <button class="pd-ts" data-t="04:46" data-who="Daksh" data-en="And it came to the result that about a quarter of all the pull requests that Greptel was reviewing in any given month were completely, or at least largely, generated by AI." aria-label="回原文"></button>。另一个有意思的观察：从曲线上看不出新模型发布的节点，进步是连续的——AI 编程正在以稳定的高速度向整个经济扩散 <button class="pd-ts" data-t="05:05" data-who="Daksh" data-en="What's also interesting is that you can't tell when new models came out on this chart. It seemed like the progress is very continuous. These things are just generally diffusing into the economy at a generally high pace." aria-label="回原文"></button>。

## AI 的 PR 到底好不好：三个指标都说「差不多」

「好 PR」怎么定义？他用三个指标分别衡量：

**回退率**。如果 PR 被回退(revert,撤掉已合并的代码)，大概率是出了问题。

结果是：Codex 的 PR 约每 1000 个被回退 1 个，[[Devin|Devin]] 约 3.5 个，其他智能体约 2.5 个，人类夹在中间——没有大差别。他本怀疑这是因为人类只把简单任务交给 AI,于是又测了 PR 大小与回退率的相关性：结果即便有相关性也极小，这个解释站不住 <button class="pd-ts" data-t="06:36" data-who="Daksh" data-en="And I found really interesting data. Turns out there's actually very little correlation, if any, between the size of PRs that humans were getting reverted versus size of PRs from agents that were being reverted." aria-label="回原文"></button>。

**bug 发现数**。Greptile 审查时会给每个 PR 打出 P0/P1/P2 级别的 bug 评论，理论上代码越差、发现越多。结果四个被测智能体中有三个，产出的 P0 严重 bug 比人类还少；P1、P2 同理 <button class="pd-ts" data-t="07:15" data-who="Daksh" data-en="And interestingly, once again, there was not that much of a difference. In fact, three out of the four agents that we tested performed better than humans in terms of the rate they were producing P0s." aria-label="回原文"></button>。

**合并前的评审轮数**。PR 质量越高，合并前需要的返工轮次越少。Devin 的 PR 平均 2.1 轮，Codex 2.45 轮，人类正好在中间——又一次几乎没有统计差异 <button class="pd-ts" data-t="08:06" data-who="Daksh" data-en="Sure enough, very little difference. Devon's PRs 2.1, Codex PRs 2.45, number of review cycles to merge, and humans right in the middle. Once again, very little, if any, statistical difference between human-generated and AI-generated pull requests in terms of how many iterations before they're ready to merge." aria-label="回原文"></button>。

## 但失败模式很不一样

数量上打平，质量结构上却有明显差异。他扫描了 Greptile 累计数百万条评审评论(平均每个 PR 约 4 条)，统计「SQL 注入」「N+1 查询」等具体错误类型出现的频率(以人类为 1x 基准)：各智能体的失败模式差异相当大——比如 Claude 产生 SQL 注入漏洞的概率是人类 1.5 倍，Devin 产生某类安全绕过问题的概率只有人类一半 <button class="pd-ts" data-t="09:09" data-who="Daksh" data-en="To interpret this chart, you can assume that 1x is the human propensity for producing that type of error across the entire chart. And you can kind of see that there's actually quite a lot of variation in the types of failures that these agents seem to produce." aria-label="回原文"></button>。结论：端到端编程智能体已经来了，而且能以真正有意义的方式进入企业编程环境——尽管这推翻了他自己最初的怀疑 <button class="pd-ts" data-t="09:38" data-who="Daksh" data-en="I found it very interesting that there was this much variation in how these agents were performing and how different their failure modes were from humans. So it turns out that in spite of my initial skepticism around the enterprise usability of end-to-end coding agents, the evidence seems to suggest that they're here and they probably can contribute in real meaningful ways to enterprise coding environments." aria-label="回原文"></button>。

## 当 PR 多到人工审不过来

数据里还有个惊人分布：Greptile 用户的中位数每月写 50 个 PR(约每个工作日 2 个)，第 90 百分位是每月 500 个，P99 达到数千个。头部的人产出 PR 的速度已经和他们想出新点子的速度一样快——而人工[[代码审查|代码评审]]、测试、外包 QA 这套验证体系，根本扩不到同样的吞吐量 <button class="pd-ts" data-t="10:17" data-who="Daksh" data-en="So call it about two per workday. The 90th percentile writes 500 pull requests per month. That is a drastic difference between the median and the P90." aria-label="回原文"></button>。

于是 Greptile 用第一性原理重新思考验证：不谈「自动化 QA / 测试 / 评审」，只回答三个问题——①这个变更是否违反用户契约(即应用对用户承诺的行为)？②它是否增加了未来违反契约的倾向？

③它是否实现了作者描述的意图？做法上，让智能体在[[沙箱|沙箱]]里把代码跑起来：装依赖、启动本地环境、模拟输入、用浏览器智能体四处点击尝试搞坏东西 <button class="pd-ts" data-t="11:41" data-who="Daksh" data-en="Base ground level and said, OK, agents can probably figure out if something's going to violate the user contract and detect bugs. If you let it spin up the code in a sandbox, have it install the dependencies, mock the inputs, run the browser agents, you can probably start to discover most of the issues that could occur." aria-label="回原文"></button>。目前 Greptile 审查的所有 PR 中，将近五分之一是在没有任何人工评审或人工测试的情况下直接合并的——这是他们最在意、并想在保证质量的护栏内持续推高的数字 <button class="pd-ts" data-t="11:53" data-who="Daksh" data-en="You get a pretty high degree of confidence on merge. Today, almost a fifth of all the pull requests of GrubTile reviews are merged without any human review or without any human testing." aria-label="回原文"></button>。

## 本集带走

- **约四分之一的企业 PR 已由 AI 生成**：靠 author 字段(不到 1%)+ 「co-authored by」页脚标记 + 分支名前缀三个信号综合判断，12 个月内从不到 1% 涨到约四分之一，且增速未随新模型发布出现跳变。
- **三项指标都显示 AI PR ≈ 人类 PR**：回退率(人类居中)、严重 bug 产出率(4 个智能体中 3 个优于人类)、合并前评审轮数(人类夹在 2.1 与 2.45 轮之间)，均无统计显著差异。
- **但别只看总量，失败模式不同**：以人类为 1x 基准，Claude 的 SQL 注入概率约 1.5x,Devin 的某类绕过问题约 0.5x——代码评审工具需要按智能体的错误类型画像来配置检查。
- **头部工程师的产出已超出人工验证的容量**：中位数每月 50 个 PR,P90 是 500 个，P99 数千个；人工评审 + 测试 + 外包 QA 扩不到这个量级。
- **验证可以归结为三个问题**：是否违反用户契约、是否增加未来违约倾向、是否实现作者意图；用沙箱跑代码 + 浏览器智能体实测来回答，Greptile 已有近五分之一的 PR 无人审、无人测直接合并。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">任何在 AI 编程领域工作的人都知道，新模型发布的那 12 月算是 AI 编程史上的一个分水岭时刻，因为这些产品第一次在编程方式上真正实现了自主。</span>  
> *And anyone that's working in AI coding knows that December when the new models came out was sort of this watershed moment in the history of AI coding because these products for the first time were truly autonomous in how they're programmed.*  
> <span class="qm">—— Daksh Gupta · [01:49]</span> ^q1

> <span class="qz">但对我来说，只有大约 1% 的代码是完全由 AI 生成的，这并不符合直觉。</span>  
> *But it wasn't intuitive to me that only about 1% of all code was fully AI generated.*  
> <span class="qm">—— Daksh Gupta · [03:47]</span> ^q2

> <span class="qz">人人都在产出这些端到端由智能体完成的 PR,不是人类加 AI,而纯粹是 AI。</span>  
> *Everyone's producing these PRs that are end-to-end agentic, not human plus AI, but literally AI.*  
> <span class="qm">—— Daksh Gupta · [05:16]</span> ^q3

> <span class="qz">所以在我的研究中，人类与智能体的 PR 被回退的比率之间似乎没有太大差别。</span>  
> *So there didn't seem to be very big difference between the rate at which pull requests were reverted from people versus agents in my study.*  
> <span class="qm">—— Daksh Gupta · [06:05]</span> ^q4

> <span class="qz">事实上，在我们测试的四个智能体中，有三个在产出 P0 级 bug 的比率方面表现优于人类。</span>  
> *In fact, three out of the four agents that we tested performed better than humans in terms of the rate they were producing P0s.*  
> <span class="qm">—— Daksh Gupta · [07:15]</span> ^q5

> <span class="qz">大体而言，根据这些数据，人类生成的 PR 在质量上与智能体生成的 PR 大致相当。</span>  
> *Broadly speaking, human-generated PRs were about equal in quality to agent-generated PRs based on this data.*  
> <span class="qm">—— Daksh Gupta · [07:28]</span> ^q6

> <span class="qz">例如，Claude 产生 SQL 注入错误的可能性是人类的一点五倍。</span>  
> *For instance, Claude is one and a half times more likely to produce a SQL injection error than humans.*  
> <span class="qm">—— Daksh Gupta · [09:16]</span> ^q7

> <span class="qz">我觉得非常有意思的是，这些智能体的表现存在如此大的差异，而且它们的失败模式与人类如此不同。</span>  
> *I found it very interesting that there was this much variation in how these agents were performing and how different their failure modes were from humans.*  
> <span class="qm">—— Daksh Gupta · [09:29]</span> ^q8

> <span class="qz">如今，GrubTile 评审的所有拉取请求中，将近五分之一是在没有任何人工评审或任何人工测试的情况下被合并的。</span>  
> *Today, almost a fifth of all the pull requests of GrubTile reviews are merged without any human review or without any human testing.*  
> <span class="qm">—— Daksh Gupta · [11:53]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-09-09-pragmatic-building-codex-with-tibo-sottiaux|Codex 负责人亲述:OpenAI 内部如何造编程智能体]]<span class="pd-rz">同概念:Codex、代码评审 (code review)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-09-beyondcoding-cracked-solo-dev-why-the-fastest-enginee|氛围编码 vs 氛围工程：智能体时代谁被淘汰]]<span class="pd-rz">同概念:Claude、Codex、智能体 (agent)、pull request、vibe coding</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同概念:代码评审 (code review)、智能体 (agent)、沙箱 (sandbox)、Claude</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-07-twentyvc-20vc-the-100-billion-ai-assistant-race-t|邮箱里的 AI 助手：Plaid 前 CTO 谈如何在巨头围剿下赢]]<span class="pd-rz">同概念:Claude、Codex、智能体 (agent)、Cursor</span>
- [[2026-09-02-aiandi-how-a-professional-writer-writes-with-ai|被裁员后用 ChatGPT 当职业教练：一位撰稿人的两年 AI 进化史]]<span class="pd-rz">同概念:Claude、Codex、智能体 (agent)</span>
- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)、Claude、Codex</span>

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
