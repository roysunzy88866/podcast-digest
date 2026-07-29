---
title: "当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构"
podcast: "Lenny's Podcast"
date: 2026-06-21
source_url: https://www.lennysnewsletter.com/p/building-the-most-ai-pilled-engineering
duration: "98:42"
type: episode
cover: "#6366f1"
image: "/covers/2026-06-21-lennys-building-the-most-ai-pilled-engineering.jpg"
description: "Fiona Fung分享在代码量暴涨8倍后,如何用异步智能体、验证机制与新管理者制度重塑工程团队。"
host: "[[Lenny]]"
cohosts: ["[[Fiona Fung]]"]
companies: ["[[Anthropic]]", "[[Facebook Marketplace]]"]
concepts: ["[[Claude Code]]", "[[Co-Work]]", "[[智能体]]", "[[验证]]", "[[测试驱动开发]]", "[[潜在需求]]", "[[结对编程]]", "[[Visual Studio]]", "[[准时制]]", "[[IC]]", "[[内部试用]]"]
category: 组织与领导力
tags:
  - 组织与领导力
  - AI 编程
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# 当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构

<div class="pd-byl"><b>Fiona Fung</b> · Anthropic工程负责人</div>

<div class="pd-mt">2026-06-21 · Lenny's Podcast · 98:42</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-06-21-lennys-building-the-most-ai-pilled-engineering.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">对于任何你知道存在恐惧的事情,我的建议是拥抱它并问自己,好吧,有什么我能做的吗,什么在我的控制范围内。</div><div class="a">Fiona Fung · 21:28</div></div>

> [!info] 关联
> **人物** [[Lenny]] · [[Fiona Fung]]
>
> **公司** [[Anthropic]] · [[Facebook Marketplace]]
>
> **概念** [[Claude Code]] · [[Co-Work]] · [[智能体]] · [[验证]] · [[测试驱动开发]] · [[潜在需求]] · [[结对编程]] · [[Visual Studio]] · [[准时制]] · [[IC]] · [[内部试用]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/building-the-most-ai-pilled-engineering)

<div class="pd-tldr"><b>一句话</b>Fiona Fung分享在代码量暴涨8倍后,如何用异步智能体、验证机制与新管理者制度重塑工程团队。</div>

本集嘉宾是 [[Fiona Fung|Fiona Fung]],她领导 [[Anthropic|Anthropic]] 的 [[Claude Code|Claude Code]] 和 [[Co-Work|Co-Work]] 团队。在加入 Anthropic 之前,她曾在微软工作多年,后转战 Facebook(现 Meta)领导了 [[Facebook Marketplace|Facebook Marketplace]] 团队,并在 Instagram 负责过包含五百多人的庞大工程组织。作为拥有二十五年经验的资深工程师,她亲历了软件工程从光盘时代到云时代的历次变迁。在这集访谈中,Fiona 分享了当生成式 AI 让代码产量激增、编码不再是瓶颈时,软件团队在[[验证|验证]]、协作、角色边界乃至新人培养上面临的全面冲击。全文将沿着四个维度展开:编码生产力暴涨后的验证新命题、团队角色的模糊与新工作流、面对 AI 的两种心态与落差危机,以及团队规模化的文化与制度挑战。

## 当吞吐量不再是瓶颈:验证成为新战场
Fiona 回忆了软件工程历史上的几次大转折:从早期在 IBM 用 Vim 和终端做调试,到加入微软后第一次用上带调试器的 IDE(集成开发环境,即集成了代码编写、运行和调试功能的软件);从软件必须刻成光盘上架的「硬截止日期」时代,到可以随时在线发版的云时代。每一次工具演进,都在重新分配工程师的时间。而眼下的 AI 变革尤为剧烈:她指出,过去工程时间是最宝贵的资源,但现在编码本身已经不再是瓶颈。最近一条推文展示的数据显示,Anthropic 的工程师平均每个季度的代码量达到了 2025 年时的八倍 <button class="pd-ts" data-t="03:28" data-who="Lenny" data-en="Along these lines, there's just this tweet that you guys put out yesterday where you showed, here's the tweet," aria-label="回原文"></button>。随之而来的核心变化是:不仅工程师在提交代码,设计师、产品经理(Co-Work 团队的所有人)都在提交代码,而且吞吐量极高。这种量级的变化,把团队的重心从「写代码」推向了「验证」<button class="pd-ts" data-t="08:59" data-who="Fiona Fung" data-en="you know, like we're seeing with with Cloud Code and Co-Work is coding is no longer the bottleneck." aria-label="回原文"></button>。

## 用 Claude 当管理耳目,用「坏与悲」抓质量
既然编码不再是瓶颈,工具变了,团队的工作方式怎么跟上?Fiona 介绍了几项她作为管理者的新做法。她把一个 Claude Code 远程会话注册到了团队的所有代码仓库中,这个实例还能访问所有 Slack 频道和指标数据。这样,她每个月可以用共享屏幕的方式,带着团队用 Claude Code 一起复盘:上个月的重点是什么?发布了哪些产品?反馈如何?有没有引发什么 Bug?她强调,通过 Claude 的全局视角,团队可以更容易地从大量数据和事件中提炼出下个季度的投资主题 <button class="pd-ts" data-t="10:10" data-who="Fiona Fung" data-en="Like everybody starts being a builder, I would say. The other shift that I've recently done is I actually have a cloud code remote session that I enlist in all of our repos." aria-label="回原文"></button>。

顺着「如何在高产出下维持质量」这个问题,Fiona 提到了两项更具体的做法。第一是利用自动化测试框架进行代码审查。她指出,Claude 在你给它提供一个「好代码长什么样」的框架时非常出色。团队的做法是把规格说明签入代码仓库并保持与代码同步更新,让 Claude 验证提交的代码是否符合预期。她将这视为[[测试驱动开发|测试驱动开发]](即先写测试用例再写功能代码,TDD)的演进 <button class="pd-ts" data-t="15:25" data-who="Fiona Fung" data-en="frameworks So I had mentioned recently we just updated content design to have a skill in it. And this is why I think if you have specs," aria-label="回原文"></button>。第二是她在团队中推行的「坏与悲」体验分类法。「坏」指的是非常严重的、不可恢复的错误(比如 CLI 崩溃导致用户丢失工作);「悲」则是指那些可恢复但让人不舒服的痛点(比如界面闪烁)。她给每个团队高度自主权,让他们根据各自的服务定义自己的「坏」与「悲」,这样就能在性能、可靠性等原始指标之外,提供一个衡量用户体验的高层框架 <button class="pd-ts" data-t="45:25" data-who="Fiona Fung" data-en="that's been one thing that we've been paying a lot of attention to like so like you know I started this hey let's have a concept of what's bad versus what's sad and" aria-label="回原文"></button>。更有趣的是,团队甚至做了一个追踪脏话的仪表盘,用来监测用户在反馈渠道里的挫败感 <button class="pd-ts" data-t="47:50" data-who="Fiona Fung" data-en="I forget what it's called. yes actually I remember yeah that was last September because we were all we were all seeing some frustrations and yeah that was an engineer on the team of hey we" aria-label="回原文"></button>。

## 角色大融合与异步智能体工作流
说完了怎么管质量,接下来是人的问题。在 AI 工具的加持下,团队的角色边界正在迅速模糊。Fiona 现在在招聘时最看重两类人:一类是有产品直觉的「创意构建者」,一类是能处理核心难题的「深层系统专家」<button class="pd-ts" data-t="17:09" data-who="Lenny" data-en="And so I'll read what you said there and I want to hear more here. So the two profiles that you now look for when you're hiring are creative builders with product sense and deep systems experts for the hard parts." aria-label="回原文"></button>。产品经理也不再受限于工程资源的带宽,遇到想做的功能可以直接卷起袖子自己动手;而非移动端出身的工程师,也能在 Claude 的辅助下顺利给功能加上安卓端的适配 <button class="pd-ts" data-t="18:54" data-who="Fiona Fung" data-en="now it's about how ambitious can you be like everything is now possible in theory now it's about how ambitious and how big can you think versus just like okay it's" aria-label="回原文"></button>。代码相关职位的界限都在模糊,工程师变得越来越有产品思维,而所有人都在变成构建者 <button class="pd-ts" data-t="62:21" data-who="Fiona Fung" data-en="Oh, interesting. Well, definitely, I think most commits are clawed assisted. And so that was a shift." aria-label="回原文"></button>。

工作方式也在向更高的抽象层演进。Fiona 提到,团队正转向更多的异步工作风格。过去她需要同步地手写各种提示词(Prompt,即给 AI 模型下指令的文本),现在她可以设定一个例行程序,让它在每天早上特定时间自动运行。这个程序不仅能汇总反馈,甚至能代表她启动其他的[[智能体|智能体]]去处理潜在的 Bug 并生成 PR(拉取请求,即提交代码修改的机制)供她醒来后审查 <button class="pd-ts" data-t="36:24" data-who="Fiona Fung" data-en="actually looks like ah yeah so uh routines is like how you can like so if you remember I was trying about my what I used to do is always like you know wake up with my morning cup of coffee and hey look at through this slack channel for me but" aria-label="回原文"></button>。这种模式虽然极大地提升了产能,但也带来了新的烦恼:上下文切换的认知负荷太重了。当你同时开着二十个智能体时,要追踪它们各自在干什么、随时切换语境去审查,成了一个尚未解决的难题 <button class="pd-ts" data-t="71:13" data-who="Fiona Fung" data-en="know I think because with routines and everything being more async I think there is starting to be a high load on our context switching because I even remember I" aria-label="回原文"></button>。

## 面对技术狂飙:成长心态与弥合鸿沟
工具和人都在变,不同人的处境也因此拉开差距。当主持人问及为什么有的人在 AI 时代如鱼得水、有的人却充满挫败感时,Fiona 认为关键在于成长型思维。她坦言,放弃那些过去让你成功的旧习惯会很可怕,但对于任何让你感到恐惧的事情,最好的应对方式就是主动拥抱它,并问自己「什么是我的控制范围内的事?」<button class="pd-ts" data-t="21:11" data-who="Fiona Fung" data-en="And so my advice there is, at least this is how just in life, because we all have," aria-label="回原文"></button>。

这种主动出击的心态,也延伸到了她弥合 AI 鸿沟的努力中。Fiona 非常关心小企业主群体,因为她曾亲眼看到自己的奶奶移民加拿大时,因为语言不通而陷入孤立,最终在一家小纱线店里找到了社区归属感。她发现 Co-Work 可以极其有效地帮小企业主处理他们最讨厌的开票和报销工作。更有趣的是,一位开餐厅的朋友把 Co-Work 接入了自己杂乱的文件夹,让它帮忙找菜单,甚至做竞品分析。基于这些反馈,团队推出了打包小企业插件的 Co-Work 版本 <button class="pd-ts" data-t="27:18" data-who="Fiona Fung" data-en="that was owned by a lady that also spoke Cantonese and so that became every week we would go to this yarn shop this summer my grandma found her knitting circle and" aria-label="回原文"></button>。她的呼吁非常具体:如果你身边有对 AI 感到恐惧或无从下手的朋友或社区商户,请主动向他们展示 AI 是如何改善了你的生活,因为知识就是力量,如果不主动分享,这道鸿沟只会越来越大 <button class="pd-ts" data-t="30:04" data-who="Fiona Fung" data-en="talking is it just talking about this sharing examples what do you think what's like a way to make a dent in this in this problem for all of us especially to your" aria-label="回原文"></button>。

## 守住团队文化与未来的未知数
角色模糊了,节奏变快了,这正是下一个话题:团队怎么管?Fiona 分享了几项独特的管理实践。首先是要求所有新加入的管理者先以个人贡献者的身份工作一段时间,亲自动手写代码、用产品,然后再承担起带人的责任。她自己哪怕在管理五百人的组织时,也坚持亲自使用产品(即[[内部试用|内部试用]])。她最近还用 Claude 重新找回了写生产级代码的自信 <button class="pd-ts" data-t="49:55" data-who="Fiona Fung" data-en="continue being an IC part time, kind of this player coach approach. Talk about that, why that's so important in today's world." aria-label="回原文"></button>。

其次,随着大家都埋头和各自的智能体协作,团队里出现了一种「孤独感」。为此,她发起了[[结对编程|结对编程]]午餐和黑客松,让大家能在并肩工作时观察到彼此使用工具的奇招 <button class="pd-ts" data-t="56:38" data-who="Fiona Fung" data-en="But the other thing that we found interesting on the Cloud Code team is after a while we felt it could start being a lonely experience because we all started just" aria-label="回原文"></button>。在规划方面,她彻底抛弃了半年期的路线图,改为「[[准时制|准时制]]」的月度规划,每周只做快速对齐 <button class="pd-ts" data-t="84:37" data-who="Fiona Fung" data-en="roadmap what's kind of like the simple way to explain where you're at with that yeah I call it JIT planning now like just in time planning so it is like around like because yeah I think six months was too long so now for sure some projects" aria-label="回原文"></button>。被问及最让她夜不能寐的难题时,她坦言不是具体的产品挑战,而是如何在飞速扩张中维持那种开放、互助的团队文化 <button class="pd-ts" data-t="78:04" data-who="Fiona Fung" data-en="question you may have already answered this with what you just said but what keeps you up at night you know the thing that keeps me up at night probably um is how we" aria-label="回原文"></button>。

> 【背景】TDD(Test-Driven Development)即测试驱动开发,是一种先编写自动化测试用例,再编写能通过测试的功能代码的软件开发方法论。

> 【背景】Co-Work 是 Anthropic 推出的面向日常知识工作的智能体产品,能够处理文件、填报表格等任务;Claude Code 则专注于编程辅助。

## 本集带走
1. **编码已非瓶颈,验证才是重心**:当全员都在用 AI 大幅提速时,质量保证的重心应从人工审查转向提供自动化测试框架和体验监控(如「坏与悲」分类法),让模型自行验证。
2. **角色边界正在消融**:在 AI 辅助下,产品经理可以直接写代码,工程师能跨界做移动端适配。未来的关键人才是兼具产品直觉的「创意构建者」与掌握核心难题的「深层系统专家」。
3. **管理动作必须升级**:管理者要善用智能体获取全局洞察并转向异步工作流;同时,要在团队扩张和技术狂飙中,通过坚持使用产品、缩短规划周期以及创造人际连接来守住团队文化。

<div class="pd-sec">全部金句 <span>5 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">对于任何你知道存在恐惧的事情,我的建议是拥抱它并问自己,好吧,有什么我能做的吗,什么在我的控制范围内。</span>  
> *for anything that you know that there is a fear my advice is kind of lean in and ask okay is there some what can I do about it what is within my control*  
> <span class="qm">—— Fiona Fung · [21:28]</span> ^q1

> <span class="qz">客户会以你没有意图的方式使用你的产品,无论好坏。</span>  
> *Customers will use your product in ways that you did not intend for good or for bad.*  
> <span class="qm">—— Fiona Fung · [34:28]</span> ^q2

> <span class="qz">不要首先把动静误认为是进步。</span>  
> *don't first take motion for progress*  
> <span class="qm">—— Fiona Fung · [41:29]</span> ^q3

> <span class="qz">我开始引入这个概念,让我们区分什么是坏的与什么是悲的,坏是非常糟糕的不可恢复的错误,悲是某种痛点但可恢复。</span>  
> *I started this hey let's have a concept of what's bad versus what's sad and bad is like a very bad irrecoverable error and sad is something that's kind of like a pain point recoverable*  
> <span class="qm">—— Fiona Fung · [45:26]</span> ^q4

> <span class="qz">过了一段时间,我们感觉这可能开始变成一种孤独的体验,因为我们都开始如此频繁地与我们的智能体一起工作了。</span>  
> *after a while we felt it could start being a lonely experience because we all started just working with our agents so much.*  
> <span class="qm">—— Fiona Fung · [56:38]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「组织与领导力」挖下去**

- [[2026-05-10-lennys-how-to-build-a-company-that-withstands|《精益创业》作者 Eric Ries 新作导读：好公司为什么会「变坏」]] —— 同公司:Anthropic
- [[2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for|Adam Mosseri：AI 时代的团队重组与产品品味]] —— 同公司:Anthropic

</div>
<div class="pd-ex">

**换个口味**

- [[2026-03-01-lennys-the-design-process-is-dead|The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)]] —— 同公司:Anthropic · 同概念:Claude Code、IC
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」]] —— 同公司:Anthropic · 同概念:Claude Code、智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得]] —— 同概念:Claude Code、智能体 (agent)

</div>
</div>

*本集关键词:AI 研发范式 · 角色融合 · 异步智能体 · 质量与验证 · 工程管理*

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
    ['.search','.readermode'].forEach(function(sel){ grab(sel,acts); });
    // 深浅色进右栏末尾 —— 但右栏在窄屏可能不显示,槽跟着一起没了。
    // 只在槽真的看得见时才搬进去,看不见就退回顶栏(🔒 #2:任何屏宽都得有入口)。
    var side=document.querySelector('.right.sidebar'), slot=null;
    if(side){
      slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      // 同上:槽是空的(:empty → display:none),要判**右栏**看不看得见
      if(!(side.offsetWidth || side.offsetHeight || side.getClientRects().length)) slot=null;
    }
    grab('.darkmode', slot || acts);
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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); }
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

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
