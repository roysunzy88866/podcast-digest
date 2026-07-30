---
title: 非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」
podcast: "Lenny's Podcast"
date: 2026-01-18
source_url: https://www.lennysnewsletter.com/p/the-non-technical-pms-guide-to-building-with-cursor
duration: "75:08"
type: episode
cover: "#6366f1"
image: "/covers/2026-01-18-lennys-the-non-technical-pms-guide-to-building.jpg"
description: 完全不懂代码的 PM 分享如何用 AI 搭建赚钱产品并保持代码质量。
host: "[[Lenny]]"
cohosts: ["[[Zevi Arnovitz]]"]
companies: ["[[Cursor]]", "[[Bolt]]", "[[Lovable]]", "[[Linear]]"]
concepts: ["[[Claude Code]]", "[[Composer]]", "[[Codex]]", "[[智能体]]", "[[斜杠命令]]", "[[同行评审]]"]
category: AI 编程
tags:
  - AI 编程
  - 职业与个人成长
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# 非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」

<div class="pd-byl"><b>Zevi Arnovitz</b> · Meta 产品经理</div>

<div class="pd-mt">2026-01-18 · Lenny's Podcast · 75:08</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-01-18-lennys-the-non-technical-pms-guide-to-building.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果人们离开时觉得你多么了不起，你就失败了。如果人们离开后打开他们的电脑并开始构建，你就成功了。</div><div class="a">Zevi Arnovitz · 07:17</div></div>

> [!info] 关联
> **人物** [[Lenny]] · [[Zevi Arnovitz]]
>
> **公司** [[Cursor]] · [[Bolt]] · [[Lovable]] · [[Linear]]
>
> **概念** [[Claude Code]] · [[Composer]] · [[Codex]] · [[智能体]] · [[斜杠命令]] · [[同行评审]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/the-non-technical-pms-guide-to-building-with-cursor)

<div class="pd-tldr"><b>一句话</b>完全不懂代码的 PM 分享如何用 AI 搭建赚钱产品并保持代码质量。</div>

今天的嘉宾是 [[Zevi Arnovitz|Zevi Arnovitz]]。他现任 Meta 的产品经理（PM），此前在 Wix 做 PM。他没有技术背景，高中学的是音乐，但靠着一套自己摸索出的 AI 工具工作流，完全独立地构建出了能赚钱的真实产品。本期对话的核心问题非常接地气：一个完全不懂代码的人，到底该怎么用 AI 真正构建出严肃的产品？接下来的脉络分为四步：首先是他如何用 AI 工具搭出一个工作流框架；其次是他如何让不同的 AI 模型扮演团队成员、互相对抗来审查代码；再是如何把 AI 当作导师进行高频学习；最后是他对非技术人员在这个时代该如何自处的核心判断。

工具变了，人怎么用？这正是接下来的第一个话题。

## 工具进阶：从「聊天机器人」到全控代码库

要用 AI 做严肃开发，第一步是克服对代码本身的恐惧。Zevi 回忆了自己的起点：当 Sonnet 3.5 这类模型出来时，他用 [[Bolt|Bolt]] 和 [[Lovable|Lovable]]（两款降低开发门槛的 AI 应用构建工具）立刻开始动手，感觉就像获得了超能力 <button class="pd-ts" data-t="06:54" data-who="Zevi Arnovitz" data-en="Oh, and by the way, you have superpowers now.&quot; And the second I got home from Japan, I didn't even unpack my bags, ran to my computer, opened Bolt, opened an account, and for the past year I've been building." aria-label="回原文"></button>。但他很快发现了一个痛点：这些工具有非常强烈的「自以为是」倾向 <button class="pd-ts" data-t="32:05" data-who="Zevi Arnovitz" data-en="But for me, it was basically the issue of I felt that Bolt was being very opinionated on how I should do things. And I felt like my knowledge has gotten to a point where I can graduate and be more in control." aria-label="回原文"></button>。为了让非技术用户省心，Lovable、Bolt、Replit 以及 Base44 等工具会在中间层替用户做大量决策（比如自动帮你接入默认的数据库或登录系统）。好处是简单省事，代价是你失去了控制权 <button class="pd-ts" data-t="34:10" data-who="Zevi Arnovitz" data-en="Base44 does an amazing job at basically taking all the complex guesswork out of building product and just allows you to just go with the vibes and build, but it will do sign in with Google for you and it will do a database, but then you don't have decisions on what database am I using." aria-label="回原文"></button>。一旦要做接入支付或改写复杂数据结构等严肃功能，这种黑箱模式就会带来大量棘手的 Bug。

因此，当他的知识积累到一定程度后，便「毕业」去了 [[Cursor|Cursor]]（一款深受开发者欢迎的 AI 代码编辑器），并在其中运行 [[Claude Code|Claude Code]]（Anthropic 公司推出的具备执行能力的 AI 编程[[智能体|智能体]]）。两者的根本区别在于控制权：Cursor 配合 Claude Code，是把 AI 直接塞进你的代码系统里，赋予它完整工具去执行任务，但随之而来的是你需要自己做大量的架构决策 <button class="pd-ts" data-t="32:54" data-who="Zevi Arnovitz" data-en="And basically Claude Code is just taking Claude and shoving it straight in your code system and giving it full tools and to do whatever it wants, but also with that comes a lot of decisions that you need to make." aria-label="回原文"></button>。他强调，如果你和他一样非技术背景，代码看起来很可怕，这就像一种「暴露疗法」（通过循序渐进的接触来克服恐惧）——他建议从简单的 ChatGPT 项目开始，过渡到 Bolt，再到 Cursor 的浅色模式，最后慢慢进入全暗色的开发者模式 <button class="pd-ts" data-t="12:49" data-who="Zevi Arnovitz" data-en="It's the scariest thing in the world to look at, and I look at it as kind of like exposure therapy. I think if you see this where I'm working like in Claude or in Cursor, you might be excited to start using those, but I would really recommend starting slow with a GPT project, beautiful UI, super simple, then maybe graduate to like a Bolt or a Lovable, and then go to Cursor in light mode, slowly, slowly, gradually ease in until you open a terminal, go full dark mode, go full dev." aria-label="回原文"></button>。

> 【背景】Anthropic 是知名 AI 公司，也是大语言模型 Claude 的开发商。Sonnet 3.5 是其推出的一款在编程能力上表现优异的模型版本。

熟悉了工具，接下来看他在这套工具里搭出了怎样的一套「标准开发流」。

## 搭工作流：把 AI 当成各有脾气的「同事」

Zevi 在 Cursor 里构建了一套基于「[[斜杠命令|斜杠命令]]」（指在代码库里保存的可重复使用的提示词文件，可通过输入 `/` 加文件名调用）的完整产品开发流。这套流程的精妙之处在于：他把 AI 工具完全拟人化了，当成了自己公司的各个职能同事。

整个流程分为几步：第一步是「创建问题」，用语音把脑海中的想法快速丢给 AI，由 AI 去读取代码库并自动在 [[Linear|Linear]]（一款项目跟踪管理工具）里生成一个标准工单 <button class="pd-ts" data-t="15:10" data-who="Zevi Arnovitz" data-en="What you can see here are all my /commands. Basically what /commands are, they are reusable prompts that I save within the code base that I can run by writing / and then the name of the file." aria-label="回原文"></button>；第二步是「探索阶段」，他会让 AI 充当开发主管（Dev Lead）的角色，理解当前代码结构，并向他提出关于数据模型、用户体验等一系列尖锐的澄清问题 <button class="pd-ts" data-t="24:12" data-who="Zevi Arnovitz" data-en="Okay. So it's both for the CTO to deeply understand the problem that we're trying to solve and also understand the current state of the code base, what files need to be affected, and how is the best way to implement this technically." aria-label="回原文"></button>；第三步是「创建计划」，生成一份详细的执行清单文件；第四步则是使用 [[Composer|Composer]]（Cursor 中速度极快的模型）去执行计划写代码 <button class="pd-ts" data-t="30:27" data-who="Zevi Arnovitz" data-en="So Cursor has an amazing model called Composer, which is superfast. So a lot of things that are not that complex, I'll use Composer. Gemini 3 that just came out is unbelievable at UI." aria-label="回原文"></button>。

但写代码其实是最简单的，真正的挑战在后面。非技术人用 AI 写代码，最大的恐惧就是看不懂、查不出 Bug。为了解决这个核心痛点，Zevi 发明了一个极其聪明的「[[同行评审|同行评审]]」机制。既然自己不懂代码，那就让别的 AI 来查 <button class="pd-ts" data-t="43:07" data-who="Zevi Arnovitz" data-en="So I think that using all these models and basically playing to their strengths and mitigating their weaknesses by using other models is a game changer for me. So I'll do peer review a bunch of times and I'll have other models review other models code and kind of have them fight it out basically." aria-label="回原文"></button>。

他会在本地测试后，先让原本负责写代码的 Claude 进行自我审查（/review）。接着，他会打开 [[Codex|Codex]] 5.1 Max 和 Cursor，分别让这两个来自不同公司的模型去审查同一段代码。最后，他会把这两个模型挑出的毛病复制下来，统一丢回给作为「开发主管」的 Claude，并告诉它：「你是这个项目的主管，其他团队的主管看了你的代码并发现了这些问题。基于你对项目的全局了解，你要么反驳他们，要么自己动手修掉」<button class="pd-ts" data-t="40:21" data-who="Zevi Arnovitz" data-en="The /command is basically saying, &quot;You're the dead lead on this project. Other team leads within the company have looked at your code and reviewed it and found these issues.&quot;" aria-label="回原文"></button>。

之所以要让多个模型互相「打架」，是因为 Zevi 发现每个模型都有极其鲜明的人格特征与长短板，他能利用这些特征来互补 <button class="pd-ts" data-t="41:08" data-who="Zevi Arnovitz" data-en="She doesn't just go with the flow and do whatever you tell her. She's very opinionated, but also super collaborative, which is I think why I'm always drawn to Claude because I need to do so much learning and it's your dream, a very communicative, but very opinionated dev lead, but then there's also Codex." aria-label="回原文"></button>。例如，Claude 像一位完美的 CTO：极其善于沟通、聪明且有主见，愿意和你深度协作探讨；Codex 则像公司里最好的「独狼」程序员：穿着连帽衫坐在小黑屋里，沟通极差，但遇到最恶心的 Bug 时，关上门两小时就能完美修好；而 Gemini 则像一位疯狂的科学家：极具艺术和设计天赋，UI 做得很美，但看它干活的过程非常吓人（甚至会说出「我要先删掉整个仪表盘」这种让人冒冷汗的话）。通过让它们互为对手段子挑错，非技术 PM 也能把控极高的代码质量。

代码质量的把关有了着落，那这些工具对个人能力的长期影响是什么？这引出了他对 AI 时代最核心的判断。

## 用 AI 做教练：这不是「外包思考」，是高频练习

很多人有一种恐惧：过度依赖 AI 会让 PM 的专业技能萎缩，最终产出大量看似精美实则无用的「半成品垃圾」<button class="pd-ts" data-t="54:02" data-who="Zevi Arnovitz" data-en="One of the biggest fears people have with these AI tools for PMs for every function I imagine is just you start to rely on these things, your skills start to atrophy, you're producing all this slop that looks great, cool, amazing strategy doc." aria-label="回原文"></button>。但 Zevi 对此有截然不同的看法。他认为，PM 的职责从来就不是「做房间里最聪明、永远有正确答案的人」，而是利用一切手段，以最快速度为用户交付正确的解决方案。如果你只是用 AI 自动生成东西然后直接扔出去，那确实是制造垃圾，但如果你承担起对最终产出的完全责任，AI 就是你最顶级的导师 <button class="pd-ts" data-t="55:49" data-who="Zevi Arnovitz" data-en="So if you're using it to just create your outputs and then putting them out there, yeah, that's AI slot, but it's also human error. I think it's really important that you own your own outputs." aria-label="回原文"></button>。

他把这套「让 AI 教自己」的逻辑运用到了极致，甚至靠它拿下了 Meta 的 Offer。为了准备竞争极其激烈的 Meta 面试，他直接在 Claude 中建了一个「教练」项目，将网上搜集到的最优质信息喂给它，让 AI 不断给他出题做模拟面试 <button class="pd-ts" data-t="59:18" data-who="Zevi Arnovitz" data-en="Straight away, I opened up a project within Claude. I started looking online for all the best information out there, things that I resonated with. I took a ton of frameworks and stuff from Ben Erez who has written a guest post for you, who I think is one of the best minds out there right now." aria-label="回原文"></button>。他还会录下自己面试的音频，专门让 AI 给他挑刺，补足真实世界里极度缺失的反馈闭环 <button class="pd-ts" data-t="61:15" data-who="Zevi Arnovitz" data-en="Here's what you missed because the feedback loop is so missing. No one ever tells you, here's what you did badly in this interview. No one tells you that, and AI can do that." aria-label="回原文"></button>。他还鼓励大家在遇到不懂的概念时，直接用自己写的 `/learning opportunity` 命令，要求 AI 用「80/20 法则」给一个懂一点架构的中级工程师讲明白，把每一次开发都当成深度的技术学习课 <button class="pd-ts" data-t="28:44" data-who="Zevi Arnovitz" data-en="Also, a very cool /command that I haven't showed yet is learning opportunity, which basically when something is really difficult for me to understand, I'll do /learning opportunity and then talk about what I want to learn." aria-label="回原文"></button>。

他强烈建议年轻 PM 在业余做点自己的副业项目，因为 AI 极大地拉高了你能操作的盘子。在公司里你可能没机会思考整体营销策略，但在自己的项目里，你可以随意让 AI 配合你进行全盘的高阶演练，这能为你带来极其宝贵的实战经验 <button class="pd-ts" data-t="56:22" data-who="Zevi Arnovitz" data-en="And another thing here is that, especially for more junior PMs, it allows you to play at such a higher level than you would normally. I think that at Wix, I wasn't thinking of what's the marketing strategy of the company and how will the onboarding be completely revamped within the whole product." aria-label="回原文"></button>。

听完他怎么把 AI 当导师，最后是他给这个时代年轻从业者的定心丸。

## 本集带走

1. **非技术人也能把控代码质量**：不要只用一个 AI 工具写代码。利用不同大模型各有长短的「性格特征」，让多个模型充当不同的团队主管，让它们互相审查代码、挑毛病甚至争吵，非技术 PM 也能像高管一样做最终的质量裁决。
2. **不断复盘更新工具链**：每次 AI 犯了错，不要只是让它重试。像做产品复盘一样，要求它反思是什么系统提示词或上下文不足导致了错误，然后把规避该错误的规则写进工具文档里，让你的 AI 同事随着时间推移越来越聪明。
3. **现在是做初级人员的最好时机**：不要被「初级岗位即将消失」的焦虑裹挟。在这个历史节点，只要你保持好奇心和求知欲，利用 AI 做高频练习和模拟，哪怕刚出校园，你也能以前所未有的速度独自跑通一家完整的初创公司。

<div class="pd-sec">全部金句 <span>7 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">如果人们离开时觉得你多么了不起，你就失败了。如果人们离开后打开他们的电脑并开始构建，你就成功了。</span>  
> *If people walk away thinking how amazing you are, you failed. And if people walk away and open their computer and start building, you've succeeded.*  
> <span class="qm">—— Zevi Arnovitz · [07:17]</span> ^q1

> <span class="qz">是的，我认为这就是单纯的 vibe coding 和顺其自然与真正构建严肃应用之间的巨大区别。</span>  
> *Yeah, and I think this is the big difference between just vibe coding and going along with the vibes and really building serious apps.*  
> <span class="qm">—— Zevi Arnovitz · [28:18]</span> ^q2

> <span class="qz">我正在构建，我正在把 StudyMate 从希伯来语完全本地化到英语，我在两天内完成了，这可能需要一个开发团队几周的时间。</span>  
> *I was building, I was fully localizing StudyMate from Hebrew to English, which I did in two days, which would probably take a dev team weeks.*  
> <span class="qm">—— Zevi Arnovitz · [35:17]</span> ^q3

> <span class="qz">回到你的提示词，去理解哪些不够好，对其进行迭代，然后看看 AI 的响应如何变好，我认为这可能是最重要的事情之一，也是区分那些还可以使用 AI 的人和真正知道如何使用 AI 的人的因素之一。</span>  
> *Going back to your prompts, understanding what was not good enough, iterating on them and then seeing how AI's responses get better, I think that's probably one of the most important things and one of the things that divides between people who are okay with using AI and the people who actually know how to use it.*  
> <span class="qm">—— Zevi Arnovitz · [47:20]</span> ^q4

> <span class="qz">取代你的是那些比你更擅长使用 AI 的人。</span>  
> *It's you'll be replaced by someone who's better at using AI than you.*  
> <span class="qm">—— Lenny · [62:43]</span> ^q5

> <span class="qz">是的，我认为头衔将会崩塌，责任将会崩塌，每个人都将只是在构建。</span>  
> *Yeah, I think titles are going to collapse and responsibilities are going to collapse and everyone's just going to be building.*  
> <span class="qm">—— Zevi Arnovitz · [52:45]</span> ^q6

> <span class="qz">我认为许多 PM 有一个误解，认为工作总是拥有正确的答案并成为房间里最聪明的人。</span>  
> *I think that there's a misconception with a lot of PMs that the job is always having the right answers and being the smartest person in the room.*  
> <span class="qm">—— Zevi Arnovitz · [55:08]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|Dan Shipper 的未来工作预测：别等 AI 末日，用 Codex 重塑一切]] —— 同公司:Cursor · 同概念:Claude Code、Codex、智能体 (agent)
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当代码不再是瓶颈,品味和策展成为产品团队的稀缺力]] —— 同公司:Linear · 同概念:Codex、智能体 (agent)
- [[2026-07-09-pg-pm-guide-ai-design|用 AI 武装技术型 PM：Codex 工作流全解析]] —— 同公司:Cursor · 同概念:Codex、智能体 (agent)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-singju-openclaw-80apps|OpenClaw创始人：为何80%的应用将消失]] —— 同概念:Claude Code、Codex、智能体 (agent)
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Anthropic产品负责人Kat Wu：在AGI边缘做产品的PM生存指南]] —— 同公司:Anthropic · 同概念:Claude Code、智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得]] —— 同概念:Claude Code、智能体 (agent)

</div>
</div>

*本集关键词:非技术人员编程 · AI 编程工作流 · 模型交叉审查 · 产品经理成长 · AI 学习与面试*

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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); }
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
