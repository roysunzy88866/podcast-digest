---
title: Anthropic产品负责人Kat Wu：在AGI边缘做产品的PM生存指南
podcast: "Lenny's Podcast"
date: 2026-04-23
source_url: https://www.lennysnewsletter.com/p/how-anthropics-product-team-moves
duration: "85:12"
type: episode
cover: "#6366f1"
image: "/covers/2026-04-23-lennys-how-anthropics-product-team-moves.jpg"
description: Claude Code与Co-work的产品负责人分享AI时代的PM新法则：极致追求产品品味与行动速度。
host: "[[Lenny]]"
cohosts: ["[[Kat Wu]]"]
companies: ["[[Anthropic]]"]
concepts: ["[[Claude Code]]", "[[Co-work]]", "[[产品品味]]", "[[智能体]]", "[[自动化]]", "[[研究预览版]]", "[[评估]]", "[[系统提示词]]"]
category: 产品方法
tags:
  - 产品方法
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Anthropic产品负责人Kat Wu：在AGI边缘做产品的PM生存指南</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# Anthropic产品负责人Kat Wu：在AGI边缘做产品的PM生存指南

<div class="pd-byl"><b>Cat Wu</b> · Anthropic 产品负责人</div>

<div class="pd-mt">2026-04-23 · Lenny's Podcast · 85:12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-04-23-lennys-how-anthropics-product-team-moves.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">随着编写代码的成本大幅降低，变得更具有价值的是决定写什么。</div><div class="a">Kat Wu · 18:19</div></div>

> [!info] 关联
> **人物** [[Lenny]] · [[Kat Wu]]
>
> **公司** [[Anthropic]]
>
> **概念** [[Claude Code]] · [[Co-work]] · [[产品品味]] · [[智能体]] · [[自动化]] · [[研究预览版]] · [[评估]] · [[系统提示词]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/how-anthropics-product-team-moves)

<div class="pd-tldr"><b>一句话</b>Claude Code与Co-work的产品负责人分享AI时代的PM新法则：极致追求产品品味与行动速度。</div>

[[Kat Wu|Kat Wu]] 是 [[Anthropic|Anthropic]] 的产品经理，负责 [[Claude Code|Claude Code]]（一款让大模型在终端里写代码的[[智能体|智能体]]工具）和 [[Co-work|Co-work]]（处理非代码任务的工作助手）等产品。她每天与最前沿的大模型打交道，团队保持着令人难以置信的产品迭代节奏。这一集她聊的是身处 AI 变革最前沿的真实工作状态：当模型能力每天都在跃升、代码变得越来越便宜的当下，产品经理（PM）该怎么做产品？团队该怎么配合？普通人又该如何利用 AI 工具获得真正的杠杆？全文脉络分为三块：第一块讲 AI 时代的产品方法论与 PM 价值，第二块深入 Anthropic 内部的工作流与工具用法，第三块探讨新模型对产品架构的颠覆以及给普通人的建议。

## 极速迭代下的 PM：重点不再是路线图，而是产品品味

在 AI 出现之前，技术演进相对缓慢，PM 可以按照 6 到 12 个月的跨度去规划路线图。但现在，大模型加速了工程开发，模型能力也在狂飙。Kat 指出，她们很多产品功能的开发周期已经从 6 个月压缩到了 1 个月，甚至 1 周或 1 天 <button class="pd-ts" data-t="05:44" data-who="Kat Wu" data-en="one month and sometimes to one week or even one day. And with that, we actually need to make sure that products ship quite quickly. And what that means is as a PM, there should be less emphasis on" aria-label="回原文"></button>。面对这种极速，PM 的核心工作不再是大费周章地去和其他团队对齐跨季度的路线图，而是想方设法缩短「从一个想法到真正交付给用户」的时间。

她认为，当下做得最好的 PM，是那些能帮团队设定极其明确目标的人。因为大模型太通用了，这反而带来了巨大的模糊性。优秀的 PM 必须能清晰地指出：我们的核心用户是谁？要解决什么问题？为了降低发布阻力，她们的团队几乎所有的功能都会以 [[研究预览版|Research Preview]]（研究预览版）的形式发布，明确告诉用户这是个早期尝试，从而大幅降低团队的心理负担与发布承诺 <button class="pd-ts" data-t="07:50" data-who="Kat Wu" data-en="repeatable process for getting these features shipped. So for Cloud Code, what we do is we actually ship almost all of our features in Research Preview." aria-label="回原文"></button>。

随着代码编写成本骤降，工程师和 PM 的边界正在模糊。Kat 观察到，现在所有角色都在融合：PM 写代码，工程师做产品决策。她极其看重「[[产品品味|产品品味]]（product taste）」——当编写代码变得更便宜时，真正宝贵的是决定「该写什么、该构建什么」 <button class="pd-ts" data-t="18:19" data-who="Kat Wu" data-en="I still think it comes back to product taste. Like as code becomes much cheaper to write, The thing that becomes more valuable is deciding what to write." aria-label="回原文"></button>。她的团队因此倾向于招聘具有极好产品品味、能端到端闭环解决问题的工程师。

## 内部视角：Anthropic 的护城河、危机处理与工具流

外界对 Anthropic 的极速发布节奏惊叹不已，甚至猜测他们是不是用了什么未公开的神秘大模型 Mythos。Kat 坦言，内部确实在使用强大的模型，但真正支撑这种节奏的是极简的流程和对团队的充分赋能，致力于扫除阻碍发布的每一个障碍 <button class="pd-ts" data-t="11:25" data-who="Kat Wu" data-en="I think a lot of it is the process and the expectation on the team. So we're very low on process. We want to remove every single barrier to shipping things." aria-label="回原文"></button>。

这种快节奏也不可避免地带来了一些插曲。比如 Claude Code 的源代码曾发生泄露。Kat 解释说，这是一次人为操作失误：当时有人正和 Claude 一起写一个关于包发布的更新 PR，虽然经过了人工审查，但错误还是发生了。她强调这是一个流程问题，团队已经加固了相关防范措施 <button class="pd-ts" data-t="12:19" data-who="Kat Wu" data-en="So we immediately looked into this when we saw it. We realized that this was the result of human error. There was a human working with Claude to write a PR." aria-label="回原文"></button>。此外，针对近期限制第三方产品（如开源客户端）使用 Claude 订阅的争议，Kat 做出了直接回应：第三方产品的使用模式与第一方产品不同，为了优先保障核心产品与 API，他们必须做出这种艰难的资源取舍 <button class="pd-ts" data-t="13:36" data-who="Kat Wu" data-en="which have different usage patterns than our first party ones. We spent a bunch of time trying to figure out what is the most seamless transition that we can offer." aria-label="回原文"></button>。

> 【背景】Mythos 是播客主持人在节目中提及的一个 Anthropic 内部极其强大、但仍处于预览阶段、尚未对外公开的模型。Kat 在对话中确认了内部确实在使用它。

在被问及 Anthropic 为何能从落后走向巨大成功时，Kat 给出了两个关键因素：第一是极其统一的使命（为全人类带来安全的 AGI）。这让不同团队在遇到资源冲突时，能迅速判断「什么对公司和对使命最重要」，甚至心甘情愿地为了全局牺牲自己负责的产品线指标 <button class="pd-ts" data-t="29:29" data-who="Kat Wu" data-en="kind of come from behind and do this well? The two most important things are one, This unifying mission." aria-label="回原文"></button>。第二是极度专注。为了这种专注，她们甚至牺牲了产品矩阵的一致性——有时内部会同时推出功能重叠的产品，只为了通过外部用户来测试哪种形态更受欢迎。

在具体的工作流上，Kat 分享了她区分工具的清晰逻辑：如果输出的是代码，她会用 Claude Code 的命令行界面（CLI）或桌面版；如果是做前端，她会用桌面版以便实时预览页面；如果在移动端随手派发任务，就用手机版；如果输出不是代码（比如做幻灯片、写文档、清理收件箱），那就用 Co-work <button class="pd-ts" data-t="35:33" data-who="Kat Wu" data-en="All these tasks produce outputs that are non-code and co-work is best positioned for that. So the way that I split the products in my mind is if I'm building something where" aria-label="回原文"></button>。

她讲了一个生动的案例：为了准备即将举办的「Code with Claude」大会演讲，她把产品营销人员起草的大纲连同自己不喜欢的旧版幻灯片，一股脑儿喂给了 Co-work。她让它自己去浏览内部的 Slack 频道和 Twitter，找出团队内部的成功案例，最后合成了一份 20 页的演示文稿。整个生成过程花了一个小时，产出的草稿不仅质量不错，连设计排版都完全符合公司规范，Kat 只需稍加修改即可使用 <button class="pd-ts" data-t="36:45" data-who="Kat Wu" data-en="and this substantially improves the quality of the result. The kinds of things I use it for are, like last night," aria-label="回原文"></button>。

## 模型进化论：会吃掉你的外壳，也会解锁新功能

身处模型迭代的暴风眼，Kat 发现，每当更聪明的新模型发布时，她们做的很大一部分工作竟然是「删功能」。很多时候，为了弥补早期模型的不足，产品团队会硬生生地加上一些辅助工具（她称之为 crutch，拐杖）。比如早期的 Claude Code 在执行大规模重构时常常半途而废，团队于是给它加上了一个「待办事项列表」工具来强制它完成。但到了 Opus 4 等更新、更聪明的模型，不再需要强制，它们自己就会自然地使用列表并完成所有调用点的更改 <button class="pd-ts" data-t="61:03" data-who="Kat Wu" data-en="we have to redo this product that we launched a few months ago. A lot of the changes that we make with a new model is removing features that are no longer needed." aria-label="回原文"></button>。

> 【背景】Opus 是 Anthropic 旗下 Claude 系列模型之一，通常代表当时最强、最重的模型能力。

所以每次升级模型，团队都会重新审查[[系统提示词|系统提示词]]（prompt），看看哪些强行干预的提醒可以被删掉。但更重要的是，新模型能解锁过去做不到的新功能。Kat 一直梦想着 Claude 能成为一个可靠的代码审查员，直到用上最新的 Opus 4.5 等模型后，她们终于可以运行多个代码审查智能体同时遍历整个代码库，准确抓取真实问题，让工程团队在合并代码前高度依赖它 <button class="pd-ts" data-t="63:34" data-who="Kat Wu" data-en="accuracy wasn't high enough for us to want to launch them. And so one example of this is code review. we tried to build a code review product a few times and we've launched like simple" aria-label="回原文"></button>。她极具洞见地指出：开发那些在当下还无法完美运行的产品极其重要，这样等新模型发布时，你就可以直接把它插进已有的原型里。

在被问及人类大脑在 AI 时代的持久价值时，Kat 认为人类依然掌握着模型所缺乏的常识与隐性情商（EQ）。模型并不清楚所有的利益相关者是谁、关系如何，也不懂最佳的沟通时机，这些都是人类目前不可替代的护城河 <button class="pd-ts" data-t="21:43" data-who="Kat Wu" data-en="for at least the next few months? I think humans still provide a level of common sense that the models don't. And there's like a thousand moving pieces to any product launch." aria-label="回原文"></button>。

## 给普通人的建议：别做半吊子的自动化

面对听众对未来职业的焦虑，Kat 给出了非常落地的建议：利用 AI 获取杠杆。把那些你反复要做的枯燥活儿交给 AI 去「[[自动化|自动化]]」。但她特别强调了一点：千万不要在做到 90% 到 95% 的准确率时就半途而废。一个不能 100% 可靠运行的自动化，根本算不上真正的自动化，你依然无法信任它。即便最后那 5% 很花时间，也必须投入精力去教导模型、完善细节，直到你能完全依赖它 <button class="pd-ts" data-t="69:49" data-who="Kat Wu" data-en="I would also push listeners towards focusing on bringing your automations from, okay, this is a cool concept to like," aria-label="回原文"></button>。

最后，Kat 极力劝诫大家：不要为了玩 AI 而去构建用一次就丢的原型，要去构建那些你每天都会真实使用、能真正帮你省时间、省精力的应用。这才是 AI 真正的用武之地 <button class="pd-ts" data-t="72:08" data-who="Kat Wu" data-en="get to our very exciting lightning round? I see a lot of people playing around with AI and building like prototype apps and tinkering with building workflows." aria-label="回原文"></button>。

## 本集带走
1. **代码越便宜，产品品味越值钱**。当大模型把编写代码的成本降到极低时，决定「该写什么代码、什么是正确的用户体验」就成为了最稀缺的核心能力，这也是 AI 时代 PM 的立身之本。
2. **产品的复杂度，是留给当前模型的；面向未来的最好准备，就是删减冗余的外壳**。随着大模型越来越聪明，它会吃掉你给它的辅助工具，因此你的产品架构必须随着模型升级而不断做减法。
3. **半吊子的自动化毫无价值**。如果你想让 AI 真正帮你处理工作，就必须投入死磕的精力，把自动化的准确率从 95% 逼近到 100%，只有 100% 可靠，你才能真正把事情交出去，腾出精力去做更有创造性的事。

<div class="pd-sec">全部金句 <span>7 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">随着编写代码的成本大幅降低，变得更具有价值的是决定写什么。</span>  
> *As code becomes much cheaper to write, the thing that becomes more valuable is deciding what to write.*  
> <span class="qm">—— Kat Wu · [18:19]</span> ^q1

> <span class="qz">我们很多产品功能的时间线已经从六个月缩短到了一个月，有时甚至缩短到了一天。</span>  
> *The timelines for a lot of our product features have gone down from six months to one month and sometimes to even one day.*  
> <span class="qm">—— Kat Wu · [00:20]</span> ^q2

> <span class="qz">如果一个自动化不能在 100% 的时间里都有效，它就不是一个真正的自动化。</span>  
> *If an automation doesn't work 100% of the time, it's not really an automation.*  
> <span class="qm">—— Kat Wu · [70:06]</span> ^q3

> <span class="qz">我认为最难的技能是能够定义一个月后产品应该是什么样子。</span>  
> *I think the hardest skill is being able to define what the product should look like a month from now.*  
> <span class="qm">—— Kat Wu · [51:35]</span> ^q4

> <span class="qz">人们最大的顿悟时刻，是当 Claude 能够直接代表你去做事情的时候。</span>  
> *big aha moment people have is when Claude can just like do things on your behalf.*  
> <span class="qm">—— Kat Wu · [74:51]</span> ^q5

> <span class="qz">如果 Claude Code 失败了，但 Anthropic 成功了，我会非常高兴。</span>  
> *If Claude Code failed, but Anthropic succeeded, I would be extremely happy.*  
> <span class="qm">—— Kat Wu · [31:47]</span> ^q6

> <span class="qz">我认为人类依然能提供模型所不具备的一定程度的常识。</span>  
> *I think humans still provide a level of common sense that the models don't.*  
> <span class="qm">—— Kat Wu · [21:43]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「产品方法」挖下去**

- [[2026-03-01-lennys-the-design-process-is-dead|The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)]] —— 同公司:Anthropic · 同概念:Claude Code、Research Preview
- [[2026-07-26-lennys-anthropics-first-technical-pm-on|evals 是新的 PRD:Anthropic 产品负责人 Diane Penn 谈 AI 时代的产品经]] —— 同公司:Anthropic · 同概念:Claude Code、评估 (evals)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|iPod之父Tony Fadell：反直觉的产品课]] —— 同公司:Anthropic · 同概念:智能体 (agent)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构]] —— 同公司:Anthropic · 同概念:Claude Code、Co-work、智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」]] —— 同公司:Anthropic · 同概念:Claude Code、智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得]] —— 同概念:Claude Code、智能体 (agent)

</div>
</div>

*本集关键词:AI 产品方法论 · PM 技能重塑 · 智能体 · 产品品味 · 自动化*

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
