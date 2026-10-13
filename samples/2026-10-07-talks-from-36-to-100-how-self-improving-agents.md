---
title: "从 36% 到 100%:让 AI 智能体自己写经验手册"
podcast: 精选演讲
date: 2026-10-13
source_url: undefined
duration: "18:22"
type: episode
cover: "#64748b"
description: "RunLayer 创始工程师 Rafal Wilinski 讲解如何让 AI 智能体自动沉淀「技能」,把一次成功变成全公司的 playbook。"
guests: ["[[Rafal Wilinski]]"]
companies: ["[[RunLayer]]"]
concepts: ["[[技能]]", "[[智能体]]", "[[MCP]]", "[[Voyager]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-07-talks-from-36-to-100-how-self-improving-agents#post","headline":"从 36% 到 100%:让 AI 智能体自己写经验手册","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-07-talks-from-36-to-100-how-self-improving-agents","mainEntityOfPage":"https://talk.solomind.cc/2026-10-07-talks-from-36-to-100-how-self-improving-agents","description":"RunLayer 创始工程师 Rafal Wilinski 讲解如何让 AI 智能体自动沉淀「技能」,把一次成功变成全公司的 playbook。","datePublished":"2026-10-13","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Rafal Wilinski"},{"@type":"Organization","name":"RunLayer"},{"@type":"Thing","name":"技能 (skills)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"Voyager"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"从 36% 到 100%:让 AI 智能体自己写经验手册","item":"https://talk.solomind.cc/2026-10-07-talks-from-36-to-100-how-self-improving-agents"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>从 36% 到 100%:让 AI 智能体自己写经验手册</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 从 36% 到 100%:让 AI 智能体自己写经验手册

<div class="pd-byl"><b>Rafal Wilinski</b> · Runlayer 创始工程师 · 2026-10-13</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-07-talks-from-36-to-100-how-self-improving-agents.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">有价值的技能是那些没人想要被重新发现的仪式。</div><div class="a">— Rafal Wilinski <button class="pd-ts" data-t="04:32" data-who="Rafal Wilinski" data-en="Valuable skills are the rituals that nobody wants rediscovered." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Rafal Wilinski]]
>
> **公司** [[RunLayer]]
>
> **概念** [[技能]] · [[智能体]] · [[MCP]] · [[Voyager]]

想象你公司里最强的工程师,每次攻克一个难题,都把解法写成手册交给团队,以后谁遇到同样的问题都不用从头摸索。

[[Rafal Wilinski|Rafal Wilinski]] 说,这件事现在可以让 AI 自动完成——他在 [[RunLayer|RunLayer]] 做的,就是让[[智能体|智能体]]一边干活,一边把自己的经验写成可复用的[[技能|技能]],而且整个公司共享。

## 什么是技能?为什么它这么重要?

技能(skill)本质上是一份 playbook:智能体平时只看到它的简短摘要,一旦判断某个任务用得上,就把全文读进上下文,改变自己的行动路线。

技术上这叫渐进式披露(progressive disclosure)。

为什么重要?因为模型现在能连续推理很久,但方向错了就会越挖越深——可能花几百次工具调用去捍卫一个错误结论。

初始方向决定一切,而**技能正是给智能体指路的**。

Rafal 说,有价值的技能往往是那些「没人愿意重新发现的流程」<button class="pd-ts" data-t="04:35" data-who="嘉宾" data-en="Valuable skills are the rituals that nobody wants rediscovered. That knowledge is often not glamorous. It's probably deeply embedded within your company." aria-label="回原文"></button>:比如回滚上线要按什么顺序执行脚本和功能开关,比如对付一个快流失的大客户该用什么措辞。

这些知识藏在公司内部,让智能体从零摸索,大概率失败——他认为很多 AI 试点项目失败,就是因为没给智能体这些上下文。

## 技能现在的三个坑

第一个坑:整个生态是给开发者设计的。技能大多是 markdown 文件、命令行命令、Git 仓库。

可市场、法务、财务的人也在用 AI,他们怎么创建和分享技能?

他还调侃了流行的安装命令,说那是他唯一见过的「一条命令同时装下技能、免费的提示注入、需要 root 权限的脚本和别人的 API 密钥」<button class="pd-ts" data-t="06:14" data-who="嘉宾" data-en="This is the junior developer or non-technical person discovering command NPX skills, which is the most important, the most popular command to install them. That's the only command I know that installs not just a skill, but also free prompt injections, while" aria-label="回原文"></button>——RunLayer 每天扫描数千个技能,里面什么奇怪的东西都有。

第二个坑：没人愿意写。难题解决后，复盘和沉淀要花时间和精力，**大多数时候知识就这么流失了**。

第三个坑：不是所有客户端都支持技能。用 Claude 生态没问题，但很多部门还在用 ChatGPT 之类的工具。

## MCP 可以当分发层，一次解决两个坑

很多人以为技能出现后 [[MCP|MCP]] 就死了，不用再碰 OAuth,把命令和密钥硬编码进 markdown 文件就算进步。

Rafal 认为大家搞反了：**技能提供知道怎么做的知识，MCP 工具提供能去做的能力，两者不冲突**。而且 MCP 本身就能当技能的分发协议：

建一个远程 MCP 服务器当全公司的知识源头，任何客户端都能连上来搜索技能，服务器还能按角色和查询执行权限策略。

MCP 生态里已经有一个叫 skills over MCP 的工作组在推这件事。

这样一来，开发者优先和客户端不支持这两个坑就都填上了，管理者也有了统一治理知识的入口。<button class="pd-ts" data-t="08:08" data-who="嘉宾" data-en="We can use MCP as the distribution layer. So instead of installing skills locally, You can create a remote MCP server, which can become the source of truth across your whole company." aria-label="回原文"></button>

## 智能体怎么自己写技能？向 Minecraft 学习

2023 年的 [[Voyager|Voyager]] 论文给了他启发：

研究者把智能体丢进 Minecraft,不给任何指令，它自己设目标、自己进步，靠的就是一个技能库——每次发现新东西，就把达成发现的工具调用序列存成代码。

以后要造钻石镐，直接去库里取配方，不用重新发明。核心思想是：把探索变成可复用的流程知识。<button class="pd-ts" data-t="11:25" data-who="嘉宾" data-en="And this is really important. This is the core idea that I want to carry forward is that exploration should be turned into reusable procedural knowledge. And we started doing something very similar at RunLayer." aria-label="回原文"></button>

RunLayer 做法类似：让智能体正常干活，任务成功且过程有价值时，就把执行记录交给一个模型,蒸馏出一条技能。

更关键的是失败——跑偏的任务才是最丰富的信号，因为它暴露了缺失的护栏、没考虑到边界情况。

**成功让技能更可信，失败让技能更健壮**，整个过程无人在环。

## 36% 到 100% 是怎么发生的

他们有个任务:在 AWS Lambda 里跑一个 Chromium 分支,用 Sonnet 4.6,成功率只有 36%。

打开自改进开关后,某一次运行里智能体破解了难题,蒸馏出的技能被注入之后所有运行,**成功率直接到 100%**。<button class="pd-ts" data-t="13:29" data-who="嘉宾" data-en="And the success ratio went to 100%. So yeah, that's great. It's like a developer with better attitude towards documentation." aria-label="回原文"></button>

除了准确率,技能还收窄了搜索空间,智能体少走弯路,省 token 也省钱。

## 前沿智能是租来的，知识要趁早存下来

更深的理由：**前沿智能是租的、借来的，随时可能消失**。模型会被下线,也会变笨——他提到大家天天在 Twitter 和 Slack 上抱怨某天的 Opus 特别蠢。

所以趁现在能用上最好的模型,就该用它来发现并固化有用的流程,把「公司里活儿是怎么干的」做成一份集体潜意识。<button class="pd-ts" data-t="14:33" data-who="嘉宾" data-en="So while we have the access to the best version of that intelligence, we should be using that to discover and persist those useful procedures. We should be building a catalog of how the works gets done inside our company as a collective subconscious." aria-label="回原文"></button>

## 单个智能体变聪明，不如整个公司一起变聪明

把前面几块拼起来——技能沉淀知识、MCP 统一分发、中央技能库持续更新——再乘以公司里每一个智能体和客户端，就得到 RunLayer 所谓的自改进组织飞轮:相似的运行被聚类、蒸馏成技能,通过防提示注入、防隐私泄露等检查后进入技能库,再通过 MCP 网关分发给全公司。

一个智能体解出难题,全公司未来都不用重新摸索。<button class="pd-ts" data-t="15:45" data-who="嘉宾" data-en="Once it's good, it's landing in our skill library. And thanks to our MCP gateway, it's being served to each and every client and agent within the company. What we end up having is a constantly evolving knowledge base, which is always up-to-date, continuously updated with new alpha, fed with new edge cases." aria-label="回原文"></button>

他最后回答了很多人焦虑的问题:模型在变成大众商品,软件成本趋零,大家都好像在做一样的东西,护城河在哪?

他的答案是:这个飞轮本身就是护城河——它是你公司独有的、被治理过的教训沉淀,竞争对手抄不走你的内部文化和身份。<button class="pd-ts" data-t="17:53" data-who="嘉宾" data-en="So, yeah, that's probably one thing that competitor can't copy, your internal culture and your identity. And yeah, that's pretty much it. Thank you for coming." aria-label="回原文"></button>

## 本集带走

- 技能就是智能体按需读取的 playbook,能决定智能体的初始方向,避免在错误路线上浪费时间和钱。
- MCP 不只提供工具,还能当技能的分发层，让不懂技术的人和非开发客户端也能用上技能。
- 失败的运行比成功的更有价值：它暴露缺失的护栏和边界情况，能自动喂回去把技能变得更健壮。
- 一个真实案例:开自改进开关后，任务成功率从 36% 升到 100%,还省了 token。
- 模型是租来的、会退化的，趁现在把公司怎么做事的知识固化下来，这份飞轮就是抄不走的护城河。

<div class="pd-sec pd-sec-q">全部金句 <span>13 条</span></div>

> <span class="qz">有价值的技能是那些没人想要被重新发现的仪式。</span>  
> *Valuable skills are the rituals that nobody wants rediscovered.*  
> <span class="qm">—— Rafal Wilinski · [04:32]</span> ^q1

> <span class="qz">这就是为什么我认为如此多的 AI 试点或 POC 在失败,因为你没有给智能体相关的上下文以及在你的公司内如何行动的实战手册。</span>  
> *That's why I believe so many AIPs or POCs are failing, because you're not giving agents the relevant context and the playbooks how to act within your company.*  
> <span class="qm">—— Rafal Wilinski · [05:06]</span> ^q2

> <span class="qz">这是我所知道的唯一一个命令,不仅安装一个技能,还免费附赠提示词注入。</span>  
> *That's the only command I know that installs not just a skill, but also free prompt injections,*  
> <span class="qm">—— Rafal Wilinski · [06:14]</span> ^q3

> <span class="qz">我现在可以把一堆 CLI 命令硬编码,把我的 API key 硬编码进 markdown 文件,然后称之为进步,对吧?</span>  
> *I can now hard-code a bunch of CLI commands, hard-code my API key inside markdown file, and call it a progress, right?*  
> <span class="qm">—— Rafal Wilinski · [07:38]</span> ^q4

> <span class="qz">技能可以传递如何做某事的知识,而工具给我们能力。</span>  
> *Skills can be delivering the knowledge how to do something, and tools gives us capabilities.*  
> <span class="qm">—— Rafal Wilinski · [07:48]</span> ^q5

> <span class="qz">你可以创建一个远程 MCP 服务器,它可以成为你整个公司的事实来源。</span>  
> *You can create a remote MCP server, which can become the source of truth across your whole company.*  
> <span class="qm">—— Rafal Wilinski · [08:10]</span> ^q6

> <span class="qz">这就是我想延续下去的核心理念:探索应该被转化为可复用的程序性知识。</span>  
> *This is the core idea that I want to carry forward is that exploration should be turned into reusable procedural knowledge.*  
> <span class="qm">—— Rafal Wilinski · [11:25]</span> ^q7

> <span class="qz">所以一次跑偏的运行实际上是你能得到的最丰富的信号,因为它暴露了缺失的护栏、缺失的库,或者某个你没有提前想到的边界情况。</span>  
> *So a run that goes sideways is actually the richest signal that you can get because it exposes the missing guardrail, the missing library, some kind of edge case that you haven't thought about upfront.*  
> <span class="qm">—— Rafal Wilinski · [12:10]</span> ^q8

> <span class="qz">成功率是最容易展示的数字,但 Google 的技能其实是在缩小搜索空间。</span>  
> *The success rate is the easiest number to show, but Google's skill is narrowing the search space.*  
> <span class="qm">—— Rafal Wilinski · [13:36]</span> ^q9

> <span class="qz">问题在于,前沿智能是租来的或者借来的。</span>  
> *The problem is that frontier intelligence is rented or borrowed.*  
> <span class="qm">—— Rafal Wilinski · [14:08]</span> ^q10

> <span class="qz">所以,趁我们还能用上最好的那个版本的智能,我们应该利用它去发现并持久化那些有用的流程。</span>  
> *So while we have the access to the best version of that intelligence, we should be using that to discover and persist those useful procedures.*  
> <span class="qm">—— Rafal Wilinski · [14:24]</span> ^q11

> <span class="qz">我们应该建立一个公司内部工作如何完成的目录,作为一种集体潜意识。</span>  
> *We should be building a catalog of how the works gets done inside our company as a collective subconscious.*  
> <span class="qm">—— Rafal Wilinski · [14:33]</span> ^q12

> <span class="qz">而我相信,护城河可以在于构建这个飞轮、把知识提炼到这个飞轮里,因为它就像你自己辛苦得来的教训被提炼出来、治理起来的公司做事方式,你知道吗?</span>  
> *And I believe the moat can be in building this flywheel and distilling the knowledge to this flywheel because it's like your own hardwood lessons distilled, governed of how your company does things, you know?*  
> <span class="qm">—— Rafal Wilinski · [17:08]</span> ^q13

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-13-pg-the-complete-claude-stack-for-pms|产品经理驾驭 Claude 生态：用五层架构打造专属 AI 幕僚长]]<span class="pd-rz">同概念:MCP、技能 (skills)、智能体 (agent)、Claude</span>
- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:MCP、技能 (skills)、智能体 (agent)、Claude</span>
- [[2026-08-29-talks-agents-are-where-microservices-were-in-2|Navan 架构师谈生产环境智能体：从运行时到护栏的实战分层]]<span class="pd-rz">同概念:MCP、技能 (skills)、智能体 (agent)、渐进式披露 (progressive disclosure)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同概念:MCP、智能体 (agent)、Claude</span>
- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同概念:MCP、智能体 (agent)、Claude</span>
- [[2026-10-08-talks-how-a-remote-company-builds-ai-fluency-e|1400 人分布在全球 82 国，这家公司怎么让员工学会用 AI]]<span class="pd-rz">同概念:MCP、技能 (skills)、Claude</span>

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
