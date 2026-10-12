---
title: 智能体崩溃后还能原地复活？聊聊 Pi Durable
podcast: 精选演讲
date: 2026-10-13
source_url: undefined
duration: "57:40"
type: episode
cover: "#64748b"
description: Pi 作者 Mario Zechner 与 Armin Ronacher 讲解智能体持久化新方案 Pi Durable，以及 AI 写代码的真实边界。
guests: ["[[Armin Ronacher]]", "[[Mario Zechner]]"]
companies: ["[[Pi]]", "[[Arendale]]"]
concepts: ["[[PyDurable]]", "[[智能体]]", "[[harness]]", "[[持久性]]", "[[幂等性]]", "[[效果三明治]]", "[[Oracle]]", "[[软件架构]]", "[[训练数据]]", "[[MCP]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-07-talks-pi-durable-agents-that-survive-crashes-m#post","headline":"智能体崩溃后还能原地复活？聊聊 Pi Durable","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-07-talks-pi-durable-agents-that-survive-crashes-m","mainEntityOfPage":"https://talk.solomind.cc/2026-10-07-talks-pi-durable-agents-that-survive-crashes-m","description":"Pi 作者 Mario Zechner 与 Armin Ronacher 讲解智能体持久化新方案 Pi Durable，以及 AI 写代码的真实边界。","datePublished":"2026-10-13","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Armin Ronacher"},{"@type":"Person","name":"Mario Zechner"},{"@type":"Organization","name":"Pi"},{"@type":"Organization","name":"Arendale"},{"@type":"Thing","name":"PyDurable"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"持久性 (durability)"},{"@type":"Thing","name":"幂等性 (idempotency)"},{"@type":"Thing","name":"效果三明治 (effect)"},{"@type":"Thing","name":"Oracle"},{"@type":"Thing","name":"软件架构 (architecture)"},{"@type":"Thing","name":"训练数据 (training data)"},{"@type":"Thing","name":"MCP"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"智能体崩溃后还能原地复活？聊聊 Pi Durable","item":"https://talk.solomind.cc/2026-10-07-talks-pi-durable-agents-that-survive-crashes-m"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>智能体崩溃后还能原地复活？聊聊 Pi Durable</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 智能体崩溃后还能原地复活？聊聊 Pi Durable

<div class="pd-byl"><b>Mario Zechner</b> · Pi 作者 · 2026-10-13</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-07-talks-pi-durable-agents-that-survive-crashes-m.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">然后问题就变成,智能体能修复 issue 吗?能,显然能。问题只是,它修得好不好?</div><div class="a">— Mario Zechner <button class="pd-ts" data-t="03:48" data-who="Mario Zechner" data-en="And then the question is, can an agent fix issues? Yes, obviously. The question is just, does it fix them well?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Armin Ronacher]] · [[Mario Zechner]]
>
> **公司** [[Pi]] · [[Arendale]]
>
> **概念** [[PyDurable]] · [[智能体]] · [[harness]] · [[持久性]] · [[幂等性]] · [[效果三明治]] · [[Oracle]] · [[软件架构]] · [[训练数据]] · [[MCP]]

两位开源老兵坐在一起聊了一次天。[[Mario Zechner|Mario Zechner]] 是开源项目 [[Pi|Pi]] 的作者，[[Armin Ronacher|Armin Ronacher]] 和朋友 Colin 创办的公司在 2 月把 Pi 收编了。

两人聊了三件事：AI 到底能不能维护开源项目、什么是“[[智能体|智能体]]持久化”、以及他们为什么押注一个不是编程智能体的未来。

## AI 能修 bug，但不能做架构

Mario 说得很直接：他大部分时间都耗在维护 Pi 上——看 issue、修问题，PiDurable 因此晚了很久才做出来。他的结论是：

小的修复可以交给智能体，但**涉及设计和[[软件架构|架构]]的问题必须人来**，因为智能体会「在你的代码库里就地拉屎，把事情弄得更糟」<button class="pd-ts" data-t="04:04" data-who="Mario" data-en="For anything that concerns the design or architecture, you still kind of need a human because the agent will just locally shit into your code base and make things worse." aria-label="回原文"></button>。

Armin 补充了一个有意思的观察：智能体解决问题时几乎必然会新增代码，哪怕很多 bug 的正确修法应该是删代码。

长此以往，代码库只会随着每次修复不断膨胀。

但这不代表他们反对用 AI 糊东西。Mario 举了 Pi 的界面库：底层接口是他 2025 年初手写的，稳健、够用；

之上的组件——文本渲染、Markdown 显示——全是让智能体照着接口生成的，配上测试就行。

「到今天我没看过 markdown 组件的一行代码」，只有性能掉下来时他才出手 <button class="pd-ts" data-t="07:02" data-who="Mario" data-en="Everything else I don't care. And to this day, I haven't looked at a single line of code of the markdown component or the text component or so. I don't fucking care." aria-label="回原文"></button>。诀窍在于分层：哪一层信任智能体，哪一层必须自己把控。

## 聊天模型越来越能干活，但说话越来越怪

两人抱怨新一代模型的沟通方式：术语堆砌、动不动钻进冷僻技术细节。

Mario 因为受不了某个版本的说话风格直接弃用，换回别的模型；现在 Sol 6.1 和 Opus 5.5又像正常人说话了。

能力上有没有进步？有，而且惊人的方向可能出乎意料——逆向工程和安全。

Mario 去年加固过一个 JVM 软件，今年被一个用两个 Codex 账号的人攻破了。

他用 AI 复盘攻击路径：模型自己逆向了 JVM 的原生内存结构，把它映射回对应的 Java 对象——「地球上没有逆向工程师能走那么远」<button class="pd-ts" data-t="11:06" data-who="Mario" data-en="And that was extremely fucking impressive, like really, really impressive. No reverser on earth would have gone that far ever, especially not in that amount of time." aria-label="回原文"></button>。

Armin 也有类似经历：插上一个 CarPlay 转接器，让 AI 搞定它，设备固件就被完全掌控了。

> 【背景】此处原表述为「花了几百美元 token」，原文中只有约略金额的说法，具体数字未经原稿逐字确认。

他们的总结是：只要任务有明确的对错判据（行话叫 oracle），智能体最终都能搞定——模拟器、移植代码库、模糊测试，全是这类。

## 为什么架构能力学不会？缺训练数据

Mario 给出了一个少见的清晰解释：网络安全有大量[[训练数据|训练数据]]，建网站有，重写已有的东西也有。

但**设计架构的过程几乎从不以文字形式存在于任何地方**——它是设计师脑子里的过程。这正是模型卡壳的地方 <button class="pd-ts" data-t="16:29" data-who="Mario" data-en="But what I don't have training data for is the process of building, of designing and architecting something. That is the part, that's the only part in programming that is actually not usually encoded somewhere in textual form so an LLM can learn from it, that the process of building the architecture of something." aria-label="回原文"></button>。

那未来怎么办？

Armin 猜测，模型公司手上握着海量对话记录和 GitHub 历史，一旦学会从中筛出高质量的架构决策（比如看哪些仓库还在被使用、哪些提交存活至今），能力可能会跳一档——而且这活儿最终可能由模型自己做。

## Pi Durable：让智能体崩溃后原地复活

这是本集的主角。Mario 用五句话解释了它解决的问题：智能体跑在进程里，调用各种工具；进程死了；

你想要的是**重启进程后，智能体从断点精确继续**——不用手动输 continue，工具结果不丢，应用状态也原样恢复。这就是持久化 <button class="pd-ts" data-t="20:40" data-who="Mario" data-en="I try to do it in five sentences, okay? Agent starts off in a process. Agent calls tools." aria-label="回原文"></button>。

为什么重要？长时间运行的智能体（比如挂在 Slack 里几年的机器人）必须有这个能力，否则一次崩溃就前功尽弃。

而且现有方案（Hermes、OpenClaw、Amp 的 orbs）各自解决了这个问题，但都不是通用的、能拿来做你自己产品的基础设施。

## 核心机制：三明治

Mario 把每个操作（术语叫 effect）拆成三层的“三明治”：执行前先存下意图（我要带这些参数做这件事）；然后真正执行；最后把结果存下来。

**无论进程死在三明治的哪一层，重启后都能恢复** <button class="pd-ts" data-t="23:35" data-who="Mario" data-en="That's the first part of the sandwich. The second part where you can crash is when the effect the execute is actually running. And then it depends on what is running, actually." aria-label="回原文"></button>。

最麻烦的是死在中间——事情可能做了也可能没做。解法是让外部系统支持幂等操作：

先领一个 ID 再执行，重启后拿同一个 ID 去问，系统会告诉你这件事是已经在跑还是需要重新发起。

应用状态则靠一个微型文档数据库：类似 MongoDB 存 JSON 对象，但每个文档都有版本，绑定到对话记录的具体位置。

回溯对话到某个时间点时，你可以选择要当时的待办清单，还是最新的那份——两种语义都支持。

整个东西只有约 12000 行代码，能部署到服务器、Cloudflare、笔记本甚至手机上。

## 下一步：不做编程智能体公司

Armin 说公司有两条线：做产品——但明确不想明年还只是一家编程智能体公司，目标是让不懂工程的人也觉得好用；

同时做基础设施，让别人能在上面造自己的智能体。

Mario 自己的试验更激进：

他做了个跑在安卓手机上的客户端，除了大模型调用，一切都在手机本地运行，还能把手机连到他的服务器当执行环境——大脑在口袋里，手脚在机房。

他说这验证了他愿景的一部分：**未来应该是多个智能体、多台机器、多个人类随意组合协作** <button class="pd-ts" data-t="47:10" data-who="Mario" data-en="And now we need to get our asses up and evolve that into a direction where it becomes less AI and the clanker and more many clankers on many machines talking to many humans." aria-label="回原文"></button>。

## 本集带走

- AI 修小 bug 很强，做架构还不行——因为设计架构的过程几乎不存在于训练数据中
- 有明确对错判据的任务（测试、移植、模拟器、逆向）AI 几乎必胜
- Pi Durable 用意图—执行—存结果三明治加幂等操作，让智能体进程崩溃后能从断点精确恢复
- 分层信任是实用策略：关键接口人写，外围组件交给 AI 加测试
- 两人最想解决的下一个大问题：让从没用过智能体的人也能上手——现在没人在认真做这件事

<div class="pd-sec pd-sec-q">全部金句 <span>12 条</span></div>

> <span class="qz">然后问题就变成,智能体能修复 issue 吗?能,显然能。问题只是,它修得好不好?</span>  
> *And then the question is, can an agent fix issues? Yes, obviously. The question is just, does it fix them well?*  
> <span class="qm">—— Mario Zechner · [03:48]</span> ^q1

> <span class="qz">任何涉及设计或架构的东西,你还是需要一个人类,因为智能体只会在你的代码库里局部地乱搞一通,把事情弄得更糟。</span>  
> *For anything that concerns the design or architecture, you still kind of need a human because the agent will just locally shit into your code base and make things worse.*  
> <span class="qm">—— Mario Zechner · [04:01]</span> ^q2

> <span class="qz">它几乎不可能在不增加代码的情况下修复一个问题,这看起来很奇怪,因为我认为很多 issue 实际上本不应该让代码库净增加代码。</span>  
> *It's almost impossible that it will fix a problem without adding code, which seems weird because I think a lot of the issues actually shouldn't be net additive to the code base.*  
> <span class="qm">—— Armin Ronacher · [04:17]</span> ^q3

> <span class="qz">而那时智能体通常很擅长找出一堆烂东西,但它非常不擅长提出一个通用的解决方案。</span>  
> *And then usually the agent is great at identifying a bunch of shit, but it's very bad at coming up with a generalized solution.*  
> <span class="qm">—— Mario Zechner · [07:14]</span> ^q4

> <span class="qz">我确实认为它们在架构部分差了一点,因为它们在结果上更差了,因为你给了它们多得多的控制权。</span>  
> *I do think they're a little bit worse in the architecture part because now they are worse in the outcome because you give them way more control.*  
> <span class="qm">—— Armin Ronacher · [08:19]</span> ^q5

> <span class="qz">地球上没有任何逆向工程师曾经能做到那个程度,尤其是在那么短的时间内。</span>  
> *No reverser on earth would have gone that far ever, especially not in that amount of time.*  
> <span class="qm">—— Mario Zechner · [11:06]</span> ^q6

> <span class="qz">如果你有一个 oracle 能告诉 LLM 它做的事情是对还是错,那你基本上就赢了。</span>  
> *If you have an oracle that can tell the LLM if what it did is correct or not, then you basically won.*  
> <span class="qm">—— Mario Zechner · [13:31]</span> ^q7

> <span class="qz">我认为 DHH 不理解机器学习在做什么。</span>  
> *I think DHH doesn't understand what machine learning does.*  
> <span class="qm">—— Mario Zechner · [15:41]</span> ^q8

> <span class="qz">那是编程中唯一通常没有以文本形式编码在某个地方、因而 LLM 无法从中学习的东西,也就是构建某个东西架构的过程。</span>  
> *That is the part, that's the only part in programming that is actually not usually encoded somewhere in textual form so an LLM can learn from it, that the process of building the architecture of something.*  
> <span class="qm">—— Mario Zechner · [16:29]</span> ^q9

> <span class="qz">也有一种对软件工程未来的愿景,而且他们不确定自己的愿景是否正确,但他们愿意押上全部身家去赌他们的愿景。</span>  
> *Kind of also have a vision of the future of software engineering, and they are unsure of whether their vision is correct, but they're willing to bet their house on their vision, right?*  
> <span class="qm">—— Mario Zechner · [41:23]</span> ^q10

> <span class="qz">我认为 Pi 是自我可修改的智能体软件的一个初步概念验证,已经验证通了。</span>  
> *I think Pi is an initial proof of concept for self-modifiable agentic software, worked out.*  
> <span class="qm">—— Mario Zechner · [46:50]</span> ^q11

> <span class="qz">那是最大的一个问题,却没人去做任何事。</span>  
> *That is the biggest fucking problem, and nobody does anything.*  
> <span class="qm">—— Mario Zechner · [55:36]</span> ^q12

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:MCP、智能体 (agent)、智能体框架 (harness)</span>
- [[2026-08-20-talks-unlock-agent-autonomy-the-runtime-for-ai|解锁智能体自主性：安全才是下一个瓶颈]]<span class="pd-rz">同概念:MCP、智能体 (agent)、智能体框架 (harness)</span>
- [[2026-09-03-talks-refactoring-legacy-codebases|用 Cursor 重构遗留代码库：从 PHP 到 React 的完整工作流]]<span class="pd-rz">同概念:MCP、智能体 (agent)、智能体框架 (harness)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-14-pg-together-ai-product-team|Together AI 产品团队全公开：一套仓库让 PM 下指令就出生产级 PR]]<span class="pd-rz">同概念:智能体 (agent)、智能体框架 (harness)、Claude Code</span>
- [[2026-09-21-talks-the-dark-arts-of-skill-engineering-paul|技能工程的九种黑暗艺术：把 Skill 从提示词做成 Harness 扩展]]<span class="pd-rz">同概念:MCP、智能体框架 (harness)、Claude Code</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:智能体 (agent)、智能体框架 (harness)</span>

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
