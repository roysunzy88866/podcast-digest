---
title: "Uber 用 AI 给 AI 评审代码:每周 2.5 万条评论是这样炼成的"
podcast: 精选演讲
date: 2026-09-27
source_url: undefined
duration: "14:49"
type: episode
cover: "#64748b"
description: "Uber 工程师 Will 和 Amaya 详解内部自动化代码评审系统 uReview:如何用可观测性、团队定制化和护栏,把评审成本降 60%、质量提升 70%。"
guests: ["[[Will Bond]]", "[[Ameya Ketkar]]"]
companies: ["[[Uber]]"]
concepts: ["[[uReview]]", "[[自动化代码评审]]", "[[代码审查]]", "[[智能体化的 SDLC]]", "[[智能体]]", "[[可观测性]]", "[[护栏]]", "[[内环与外环]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-28-talks-building-ureview-uber-s-multi-agent-code#post","headline":"Uber 用 AI 给 AI 评审代码:每周 2.5 万条评论是这样炼成的","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-28-talks-building-ureview-uber-s-multi-agent-code","mainEntityOfPage":"https://talk.solomind.cc/2026-08-28-talks-building-ureview-uber-s-multi-agent-code","description":"Uber 工程师 Will 和 Amaya 详解内部自动化代码评审系统 uReview:如何用可观测性、团队定制化和护栏,把评审成本降 60%、质量提升 70%。","datePublished":"2026-09-27","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Will Bond"},{"@type":"Person","name":"Ameya Ketkar"},{"@type":"Organization","name":"Uber"},{"@type":"Thing","name":"uReview"},{"@type":"Thing","name":"自动化代码评审 (automated code review)"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"智能体化的 SDLC (agentic SDLC)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"内环与外环 (inner loop)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"Uber 用 AI 给 AI 评审代码:每周 2.5 万条评论是这样炼成的","item":"https://talk.solomind.cc/2026-08-28-talks-building-ureview-uber-s-multi-agent-code"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Uber 用 AI 给 AI 评审代码:每周 2.5 万条评论是这样炼成的</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Uber 用 AI 给 AI 评审代码:每周 2.5 万条评论是这样炼成的

<div class="pd-byl"><b>Will Bond</b> · Uber 工程师 · 2026-09-27</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-28-talks-building-ureview-uber-s-multi-agent-code.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">简而言之,代码评审现在成了我们遭遇的瓶颈。</div><div class="a">— Will Bond <button class="pd-ts" data-t="01:16" data-who="Will Bond" data-en="So in short, code review is now the bottleneck that we are running into." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Will Bond]] · [[Ameya Ketkar]]
>
> **公司** [[Uber]]
>
> **概念** [[uReview]] · [[自动化代码评审]] · [[代码审查]] · [[智能体化的 SDLC]] · [[智能体]] · [[可观测性]] · [[护栏]] · [[内环与外环]]

工程师提交代码后要等 9 个小时才能收到第一条评审——这不是几年前的 [[Uber|Uber]],而是 2026 年的 Uber。随着 AI 生成代码暴增，PR 数量和体积都在膨胀，「首次评审时间」这一指标从 2024 年的 3 小时涨到了 9 小时。

[[代码审查|代码评审]]成了整个研发流程的瓶颈。这一集，Uber 工程师 Will 和 Amaya 带来了他们的解法：[[uReview|uReview]],一个内部自建的[[自动化代码评审|自动化代码评审]]系统 <button class="pd-ts" data-t="01:05" data-who="Will" data-en="One of the ways that that's been exposed to us has been through the metric that we track of the first time to review. Back in 2024, we were seeing that engineers would get their first review within three hours." aria-label="回原文"></button>。

## 为什么自建,不买现成的?

Uber 的约束条件决定了他们只能自己做:第一,Uber 长期使用代码托管工具 Fabricator,正在向 GitHub 迁移,而市面上的方案基本都不支持 Fabricator;第二,Uber 正在推进「[[智能体化的 SDLC|智能体化的 SDLC]]」(让 AI [[智能体|智能体]]参与软件开发生命周期的各个环节),他们要让智能体提交的代码和人类代码走完全相同的评审规则;第三,公司有数百个团队,评审规则和知识不能集中管理,必须接入现有的团队所有权体系分散出去;第四,评审量太大,必须能按风险画像和变更复杂度区别对待——不是所有代码都配得到同样的评审;最后是可靠性,安全和合规评审必须在所有代码上强制运行,不能指望每个团队自觉开启 <button class="pd-ts" data-t="01:22" data-who="Will" data-en="So in short, code review is now the bottleneck that we are running into. Specifically around automated code review, there are various options available in the industry, but Uber spent the time to invest in building an in-house solution due to some of the constraints that we have." aria-label="回原文"></button>。

## 系统长什么样

架构分三层:GitHub、Fabricator 和智能体循环作为入口,汇入 uReview 服务,由它接收评审请求、收集用户反馈并进行路由;下面挂着一组针对不同性能与成本调优的生成器,还能接入第三方评审系统做横向对比;最后是后处理——多路生成器会产出大量重复、低质的评论,系统对评论做评分、分类、过滤、去重,只把置信度最高、可操作的评论送到工程师面前 <button class="pd-ts" data-t="03:08" data-who="Will" data-en="We'll talk about a couple of the big pieces, and then we're going to dive into a few focus areas. At the top, you'll notice that we have our code review surface areas, GitHub, Fabricator, and the agent loop." aria-label="回原文"></button>。

## 可观测性:模型不知道自己是错的

uReview 起点非常简陋:一个「按文件做逻辑检查」的提示词加一个智能体。早期只收集成本和 NPS 问卷,质量成本比「一团糟」。转折点是开始系统性地收集数据 <button class="pd-ts" data-t="04:33" data-who="Amaya" data-en="So I will be talking about how we evolve view review with observability and evaluation. So Ureview had a very humble beginning. Basically, it was a single prompt that you should do logic checks per file, a simple agent which used to do thorough review." aria-label="回原文"></button>:

- **情绪分析**:把开发者对 uReview 评论的回复分为正面/负面并归类,从中发现了一大堆可以修的 bug 和问题;
- **处理率**:一条评论发出后,开发者是否真的去改了;
- **运行时画像**:追踪智能体的完整轨迹——它调用了哪些工具、经历了怎样的思考过程——据此调优运行时,让智能体快速、低成本地产出高质量结果 <button class="pd-ts" data-t="05:54" data-who="Amaya" data-en="We need to know more of how the review is done. So we started tracking things like addressal rate. So basically, when a UReview comment is made, does the developer go and actually address the comment?" aria-label="回原文"></button>。

这中间最大的体会,用 Amaya 的话说:**「模型不知道自己是错的」**——它总是自信满满地给出评审,但实际上非常需要每个团队注入自己的风格指南和反模式清单,这些必须内置到智能体里;同时要给智能体设[[护栏|护栏]],告诉它别把轮次浪费在不该做的事上,否则评审质量会很差 <button class="pd-ts" data-t="06:35" data-who="Amaya" data-en="And then with that insight, we were able to actually tune our runtime, tune our performance, such that the agent could very quickly give us high quality results at a low cost." aria-label="回原文"></button>。

## 团队定制:写技能容易,规模化跑起来难

uReview 的评审栈分四层:单文件评审器(通用逻辑 bug 检查)、多文件深度评审器(六个按语言划分的 monorepo 各自内置反模式和风格指南)、AI linter(一种少样本提示系统,开发者提供上下文后按规则确定性地找出机械性问题)、以及最强大的自定义智能体——团队可以定义自己的评审智能体,链接知识库和历史 PR,赋予它评审技能 <button class="pd-ts" data-t="07:37" data-who="Amaya" data-en="We went very deep on team customizations because as Will presented that we have hundreds of teams and everyone has like their own way or their own thing for code review." aria-label="回原文"></button>。

定制的落地靠三件事:把定制配置放在开发者写代码的地方旁边,方便随时更新;实现智能的确定性路由,决定哪个团队用哪种评审、哪个模型;把[[可观测性|可观测性]]数据(轨迹、处理率、情绪分析)反馈给团队,让他们看到「我写的这条规则没人喜欢,该改了」 <button class="pd-ts" data-t="09:06" data-who="Amaya" data-en="We had to basically do a, what do you say, co-locate the customizations next to where the developers write their code so that they can quickly keep updating these customizations." aria-label="回原文"></button>。

一个反直觉的发现:**写技能本身非常容易**——团队让 Claude「翻遍我过去的 PR 评审,给我写一个技能」,几分钟就写出来了。难的是以一致的质量、低成本大规模运行这些技能,平台方和每个团队都要反复迭代 <button class="pd-ts" data-t="09:44" data-who="Amaya" data-en="And then we had to give bubble up that kind of observability to all the people who are contributing to the platform. One thing that we learned is that actually writing the skill was very easy." aria-label="回原文"></button>。

## 成绩单

每周约 25,000 条评论,其中 10% 得到开发者反馈,只有 4% 的 PR 收到负面反馈;整体处理率约 67%,近四分之三的高严重性问题被开发者真正处理。相比朴素的实现,成本下降 60%,质量和准确率提升约 70% <button class="pd-ts" data-t="10:14" data-who="Amaya" data-en="And that required a lot of iterations, not only from the Euroview team side, but also like for each team who was trying to write these rules. In results, we basically see that UReview does around 25,000 comments a week, and we get 10% of them actually get some feedback, and only 4% of the PRs actually get some negative feedback." aria-label="回原文"></button>。

## 内环与外环:不是杀死人类评审,而是上移一层

随着智能体化 SDLC 推进,工程师越来越不亲自写代码,人类评审员的角色要重新设计,而且内环(智能体)和外环(人类)的需求不一样:内环需要更高的准确率,否则智能体会陷入空转——修一个问题、又收到一条低质量评论、再反向修一遍;而且智能体非常乐意把一个 PR 里的 100 个小瑕疵全修掉,人类工程师遇到这种事会非常沮丧 <button class="pd-ts" data-t="12:10" data-who="Will" data-en="Part of the way along the process was figuring out by having our single code review platform, what did we need to tune for the various audiences that are actually getting these code reviews?" aria-label="回原文"></button>。

最要命的是反馈问题:uReview 的高质量很大程度靠人类反馈调优提示词和智能体,如果人类彻底退出评审循环,「让想象力去发挥吧——质量退化、垃圾内容等等」。所以 Uber 的答案不是杀死外环,而是**扩展外环**:把人类的职责上移一层。智能体擅长写软件,也越来越擅长像人一样评审软件;人类工程师不再操心性能优化和 API 兼容性,而是在评审中更多思考架构、贡献领域专长和产品思维 <button class="pd-ts" data-t="13:19" data-who="Will" data-en="And so as we move to a model where humans are less in the loop, where software engineering is moving to an agentic model, We're effectively going to a place where we're starting to talk about, are we going to kill the outer loop?" aria-label="回原文"></button>。

## 本集带走

- **代码评审已成新瓶颈**:AI 让 PR 暴涨,Uber 的首次评审时间从 3 小时涨到 9 小时——如果你的团队也上了 AI 编程,先盯这个指标。
- **别信模型的自评**:它不知道自己是错的。要靠情绪分析、处理率、智能体轨迹这些真实数据来定位质量问题,再针对性调优。
- **给智能体设护栏**:告诉它别浪费轮次,把团队风格指南和反模式清单内置进评审智能体。
- **定制分散、安全集中**:团队自定义评审规则和智能体,但安全合规评审由平台强制在所有代码上运行。
- **评论后处理不可省**:评分、分类、过滤、去重,只给工程师高置信度、可操作的评论——低质评论淹没工程师比没有评审更糟。
- **人类评审上移一层**:让智能体修小瑕疵,人专注架构、领域专长和产品思维——这是扩展外环,不是取消人类。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">简而言之,代码评审现在成了我们遭遇的瓶颈。</span>  
> *So in short, code review is now the bottleneck that we are running into.*  
> <span class="qm">—— Will Bond · [01:16]</span> ^q1

> <span class="qz">在这个过程中最大的一个体会是,模型不知道自己是错的。</span>  
> *One of the biggest learnings in this process was the model doesn't know that it's wrong.*  
> <span class="qm">—— Ameya Ketkar · [06:35]</span> ^q2

> <span class="qz">然后,通过我经历的所有可观测性和评估,我们发现,和一个非常朴素的实现相比,我们的成本下降了 60%,我们的质量和准确率提升了大约 70%。</span>  
> *And then with all the observability and evals that I went through, we saw that against like a very naive implementation, our costs were down by 60% and our quality and our accuracy was up by around 70%.*  
> <span class="qm">—— Ameya Ketkar · [10:46]</span> ^q3

> <span class="qz">否则我们可能会陷入智能体的空转:它修复了某个问题,回头又收到一次代码评审,然后不得不反向再修一遍,因为那条评论的质量很低。</span>  
> *Or else we can result in dealing with cavitation of an agent where it fixes something, goes back, gets another code review, and has to kind of like fix backwards because the quality of the comment was low.*  
> <span class="qm">—— Will Bond · [12:23]</span> ^q4

> <span class="qz">与其把人类从代码评审流程中移除,我们是把他们的职责上移一层。</span>  
> *Rather than removing humans from the code review process, we are moving their responsibilities up a layer.*  
> <span class="qm">—— Will Bond · [13:55]</span> ^q5

> <span class="qz">你不再是去担心性能优化和 API 兼容性,而是在代码评审中更多地去思考架构。</span>  
> *Instead of you worrying about the optimization of the performance and the API compatibility, you're going to be thinking more about architecture in your code reviews.*  
> <span class="qm">—— Will Bond · [14:19]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2025-10-06-talks-agents-for-complex-software-engineering|Vibe debugging：代码生成之后，生产环境才是真正的硬仗]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、可观测性 (observability)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)、护栏 (guardrails)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:GitHub · 同概念:代码评审 (code review)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi|DevOps 之父谈智能体开发：谁来管、怎么管、别踩什么坑]]<span class="pd-rz">同概念:可观测性 (observability)、护栏 (guardrails)、智能体 (agent)</span>
- [[2025-06-03-talks-pioneering-agentic-applications-with-dec|三位 AI 智能体公司 CEO 圆桌：从 Copilot 到智能体，还要几年？]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2025-09-16-talks-evaluating-agents-with-braintrust|Braintrust CEO Ankur Goyal:做 AI 评估的纪律八年不变，但玩法正在剧变]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)</span>

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
