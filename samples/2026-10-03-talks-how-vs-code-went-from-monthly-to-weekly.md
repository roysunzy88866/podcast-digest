---
title: VS Code 团队如何靠 AI 把月更改成周更
podcast: 精选演讲
date: 2026-10-06
source_url: undefined
duration: "19:13"
type: episode
cover: "#64748b"
description: VS Code 团队的 Harald Kirschner 讲述他们如何用 AI 智能体改造整个开发流程，从月度发布提速到每周发布。
guests: ["[[Harald Kirschner]]"]
companies: ["[[VS Code]]", "[[Copilot CI]]"]
concepts: ["[[智能体]]", "[[agents.md]]", "[[代码存活率]]", "[[MCP]]", "[[playwright]]", "[[TypeScript Go]]", "[[代码审查]]", "[[评估]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-03-talks-how-vs-code-went-from-monthly-to-weekly#post","headline":"VS Code 团队如何靠 AI 把月更改成周更","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-03-talks-how-vs-code-went-from-monthly-to-weekly","mainEntityOfPage":"https://talk.solomind.cc/2026-10-03-talks-how-vs-code-went-from-monthly-to-weekly","description":"VS Code 团队的 Harald Kirschner 讲述他们如何用 AI 智能体改造整个开发流程，从月度发布提速到每周发布。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Harald Kirschner"},{"@type":"Organization","name":"VS Code"},{"@type":"Organization","name":"Copilot CI"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"agents.md"},{"@type":"Thing","name":"代码存活率 (code survival)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"playwright"},{"@type":"Thing","name":"TypeScript Go"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"评估 (evals)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"VS Code 团队如何靠 AI 把月更改成周更","item":"https://talk.solomind.cc/2026-10-03-talks-how-vs-code-went-from-monthly-to-weekly"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>VS Code 团队如何靠 AI 把月更改成周更</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# VS Code 团队如何靠 AI 把月更改成周更

<div class="pd-byl"><b>Harald Kirschner</b> · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-03-talks-how-vs-code-went-from-monthly-to-weekly.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">这是一个非常小的团队，向超过 5000 万用户交付。</div><div class="a">— Harald Kirschner <button class="pd-ts" data-t="01:07" data-who="Harald Kirschner" data-en="And that's a very small team shipping to over 50 million users." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Harald Kirschner]]
>
> **公司** [[VS Code]] · [[Copilot CI]]
>
> **概念** [[智能体]] · [[agents.md]] · [[代码存活率]] · [[MCP]] · [[playwright]] · [[TypeScript Go]] · [[代码审查]] · [[评估]]

这场演讲来自一位 [[VS Code|VS Code]] 团队成员 [[Harald Kirschner|Harald Kirschner]]。

他讲的不是怎么在 VS Code 里内置 AI，而是团队怎么用 AI [[智能体|智能体]]来开发 VS Code 本身——一支小团队，服务超过 5000 万用户，发布节奏从坚持了 10 年的每月一次，变成了每周一次。

## AI 写的代码，到底有多少能用？

团队很早就开始跟踪一个指标：

智能体写的代码里，有多大比例最终被提交进了仓库——剩下的就是被人类看了一眼就扔掉的“垃圾代码”。

GPT 4.1 时代这个数字是 55%,随着流程改进和新模型出现，**如今 Claude Opus 4.6 已经达到 86%** <button class="pd-ts" data-t="01:37" data-who="嘉宾" data-en="So GBT 4.1 started at 55%. But then over time and over improving the harness and new models, Claude Opus 4.6 is now today at 86%. And that increase clearly shows developer trust and confidence in shipping AI code faster and more AI code generated." aria-label="回原文"></button>。

这个数字说明开发者越来越信任 AI 代码。但成功也带来了新问题：GitHub 上的 issue 数量大涨，因为 AI 也让用户更容易提 issue。

有趣的是，被合并的社区贡献数量反而在上升——大家以为会涌入大量垃圾 PR,结果社区贡献也被解锁了 <button class="pd-ts" data-t="02:24" data-who="嘉宾" data-en="We also see more open PRs by the team, by our own velocity, and by our community. An interesting part, we actually see, everybody would assume we see a lot of garbage PRs, but actually the number of community merged PRs is going up as well, which is really amazing that we can unlock more community contributions as well." aria-label="回原文"></button>。

## 让代码库对智能体友好

提速的第一步，是让代码库本身对智能体“可读”。

具体做法包括写 [[agents.md|agents.md]] 文件——可以理解为给智能体的代码库地图，告诉它该去哪找什么。

这些文件是活的文档，智能体犯错后要跟着更新。

另一招是把专家经验做成“技能”。比如团队里负责无障碍设计的那位专家，以前每次都得被拉来给代码提意见。

现在这些最佳实践被写成一份技能，所有人(和所有智能体)都能直接用 <button class="pd-ts" data-t="05:58" data-who="嘉宾" data-en="So one skill we added early on was infusing all the accessibility best practices and how we think about accessibility into a skill that everybody will use. And that previously was one person" aria-label="回原文"></button>。

团队还有个检验标准：==产品经理能不能直接在 VS Code 的仓库里用自然语言指挥智能体写代码==？

答案是能——演讲者本人就这么干，而工程师团队也接受这种方式。

## 构建提速 10 倍：慢环节会被智能体放大

一个听起来不起眼但影响巨大的改动：把构建工具换成了 [[TypeScript Go|TypeScript Go]],构建速度提升 10 倍 <button class="pd-ts" data-t="07:36" data-who="嘉宾" data-en="But once you hit that with agents, you have 10 agents, 20 agents running and hitting the same bottleneck, any slow part of your CI-CD will compound. And for us, TypeScript Go was a 10 times improvement in our builds, which at the scale of automatic PRs running with agents and them needing that CI, CD loop for feedback to improve the code is a massive improvement." aria-label="回原文"></button>。

==为什么这重要==？人类开发者遇到慢的构建，可以切去干别的。

但当你同时跑着 10 个、20 个智能体，全都卡在同一个瓶颈上，任何慢的环节都会成倍放大。

智能体需要快速的构建反馈来改进自己的代码。

## 智能体看不懂 UI？让它自己点开看

智能体写界面有个通病：它声称完美，你打开一看全是错位的。团队的解法是让智能体能直接操作产品本身，形成反馈闭环。

第一个工具是“组件浏览器”：每次代码变更后自动给 VS Code 的每个界面组件截图，并标出差异。

你改了一个返回按钮，系统能自动发现别处的图标因此消失了——这种涟漪效应人眼很容易漏掉 <button class="pd-ts" data-t="09:33" data-who="嘉宾" data-en="And because it's changing wide, we actually have this automated process in the back that takes screenshots of every component in VS Code and points out the differences." aria-label="回原文"></button>。

第二个是“自纠错循环”。VS Code 本质上是一个跑在 Electron 里的网页应用，所以可以用 [[playwright|Playwright]] 自动化操作浏览器。

一个斜杠命令就能启动 VS Code,让智能体按场景点一遍，验证修复前后的表现，你先去干别的，回来时它已经自己验完了 <button class="pd-ts" data-t="10:40" data-who="嘉宾" data-en="So it's a really powerful way to diagnose issues because you can also get the locks along the way, but also validate any fixes you did before and after without you having to click through it." aria-label="回原文"></button>。

## 代码审查：AI 先过，人类后看

GitHub Copilot 的自动代码审查，早期团队并不信服，但几个月内质量大幅提升，现在已经成了强制环节：

每个 PR 都必须先过 AI 审查，而且**所有评论被解决之前，人类根本不看这个 PR** <button class="pd-ts" data-t="12:03" data-who="嘉宾" data-en="But for us, after a review is done, humans will not even look at PR until all the comments are resolved and addressed. Okay, now we're holding We're shipping faster." aria-label="回原文"></button>。团队还可以根据风险高低，调整 AI 审查的投入力度。

## 每天 510 亿条遥测数据，最后变成 10 个自动修复

产品崩溃时会上报错误堆栈。

团队每天收集约 510 亿条原始遥测数据，过滤出完整堆栈，做分组和指纹识别，最后每天产出约 10 个 issue,**分派给对应的错误负责人，并且自动创建 PR 尝试修复** <button class="pd-ts" data-t="13:53" data-who="嘉宾" data-en="We filter it down, and it's like 51 billion per day. We filter it down to just error stacks that actually have the full stack. Then we group it and bucket it." aria-label="回原文"></button>。

演讲里演示了一个真实例子：

智能体自动打开 PR,自己查明了错误原因——某次改动漏掉了协议里的取消请求处理——然后直接修复，人类只需要批准合并。

发布方式也变了。以前 VS Code 是“开闸放水”式发布：测试完就直接推给 100% 用户。

现在改成分阶段放量，边推边监控错误日志，因为安装在用户电脑上的应用，回滚的代价太高了 <button class="pd-ts" data-t="15:44" data-who="嘉宾" data-en="So now, actually, we do staged rollouts. And as we do the rollout, we monitor error locks and issues and everything else. So just like good citizens in a web application, we now apply the same because rollbacks on an install app are so expensive." aria-label="回原文"></button>。

## 写得快不够，还要学得快

演讲者认为，多数人只做到了“写得快”，却错过了 AI 真正的价值：**更快地学习和做出更好的产品**。

一个例子是评估体系。团队建了 VSC bench,把产品场景做成可扩展的测试集。

有趣的是，一个“写一个包含 hello world 的文件”的简单任务，不同模型消耗的 token 相差 70 倍——而这个最贵的模型甚至不是推理能力最强的那个 <button class="pd-ts" data-t="17:24" data-who="嘉宾" data-en="The same five character file took the most expensive model 70x more tokens. And that was not the high reasoning model. You can read more about Unblock." aria-label="回原文"></button>。

团队的工作方式也随之改变：从月度节奏到每周发布，再到每天碰头的短冲刺。

演讲者本人大量做原型——不是为了合并代码，而是第二天开会时能拿着看得见的原型讨论，“这是想法，这样做行不行？”

反馈周期被压缩到了一天 <button class="pd-ts" data-t="18:06" data-who="嘉宾" data-en="Next day you come back with updated prototypes and you just keep having this conversation. So much quicker feedback from a month release cycle to weekly to daily sprints where you just keep working on problems and prototypes unlock those deeper discussions and how the experience should look like." aria-label="回原文"></button>。

他给听众的建议是：找出你的瓶颈在哪，修好下一个瓶颈；别只调教怎么用智能体，更要调教它们怎么获得反馈。

## 本集带走

- VS Code 的 AI [[代码存活率|代码存活率]]从 55%(GPT 4.1)提升到 86%(Claude Opus 4.6),发布节奏从月更变为周更
- 慢的构建流程会被并行智能体成倍放大，切换到 TypeScript Go 带来 10 倍构建提速
- 让智能体直接操作产品(截图对比、Playwright 自动点检)是解决“AI 看不懂 UI”的关键
- 每天 510 亿条遥测数据经自动分组后，产出约 10 个自动创建修复 PR 的 issue,人类只负责批准
- AI 的更大价值不是写得快，而是把产品反馈周期从一个月压缩到一天，让团队学得更快

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">这是一个非常小的团队，向超过 5000 万用户交付。</span>  
> *And that's a very small team shipping to over 50 million users.*  
> <span class="qm">—— Harald Kirschner · [01:07]</span> ^q1

> <span class="qz">这就是 AI 发挥作用的地方——最终更快地学习、交付更好的产品，而这是很多人在写更多代码时错过的东西：运用产品品味，运用那种学习。</span>  
> *And that's where AI kicks in to actually learn faster in the end and shipping better products, which a lot of people are missing out as they write more code is applying the product taste and applying that learning.*  
> <span class="qm">—— Harald Kirschner · [04:34]</span> ^q2

> <span class="qz">但一旦让智能体撞上这个，你有 10 个、20 个智能体在运行并撞上同一个瓶颈，你 CI-CD 中任何缓慢的部分都会被复合放大。</span>  
> *But once you hit that with agents, you have 10 agents, 20 agents running and hitting the same bottleneck, any slow part of your CI-CD will compound.*  
> <span class="qm">—— Harald Kirschner · [07:24]</span> ^q3

> <span class="qz">对我们来说，TypeScript Go 让构建获得了 10 倍提升——在智能体运行自动化 PR、需要 CI-CD 循环来获取反馈改进代码的规模下，这是一个巨大的提升。</span>  
> *And for us, TypeScript Go was a 10 times improvement in our builds, which at the scale of automatic PRs running with agents and them needing that CI, CD loop for feedback to improve the code is a massive improvement.*  
> <span class="qm">—— Harald Kirschner · [07:36]</span> ^q4

> <span class="qz">如果你的智能体无法直接使用你的应用、你的产品来获得「一切是否正常」的反馈循环，那么这是一项非常值得的投资，每次你做 UI 工作时都会有回报。</span>  
> *If your agent cannot use your application, your product directly to get this feedback loop of is it all working, then that's a really big investment that pays off every time you work on UI.*  
> <span class="qm">—— Harald Kirschner · [08:48]</span> ^q5

> <span class="qz">同样一个五个字符的文件，最贵的模型消耗了 70 倍的 token。</span>  
> *The same five character file took the most expensive model 70x more tokens.*  
> <span class="qm">—— Harald Kirschner · [17:18]</span> ^q6

> <span class="qz">而且不只是调整你如何与智能体协作，还要调整它们如何获得反馈。</span>  
> *And don't just tune how you work with agents, but tune how they get feedback.*  
> <span class="qm">—— Harald Kirschner · [18:48]</span> ^q7

> <span class="qz">有趣的一点是，每个人都会以为我们会看到很多垃圾 PR，但实际上社区 PR 被合并的数量也在上升，这真的很了不起，我们也能解锁更多的社区贡献。</span>  
> *An interesting part, we actually see, everybody would assume we see a lot of garbage PRs, but actually the number of community merged PRs is going up as well, which is really amazing that we can unlock more community contributions as well.*  
> <span class="qm">—— Harald Kirschner · [02:24]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:MCP、智能体 (agent)、评测 (evals)</span>
- [[2026-08-11-talks-circleback-ceo-ali-haghani-why-your-comp|Circleback 创始人 Ali：把公司记忆和运营流程全部交给智能体]]<span class="pd-rz">同概念:代码评审 (code review)、智能体 (agent)、评测 (evals)</span>
- [[2026-09-17-sed-scaling-agent-workloads-at-vercel|把智能体从「桌上的宠物」搬进云端：Vercel 开源框架 Eve]]<span class="pd-rz">同概念:MCP、智能体 (agent)、评测 (evals)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同概念:MCP、代码评审 (code review)、智能体 (agent)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同公司:VS Code · 同概念:Playwright、智能体 (agent)、MCP</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:智能体 (agent)、评测 (evals)</span>

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
