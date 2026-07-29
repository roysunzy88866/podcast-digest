---
title: "对话 Notion 产品负责人 Max:AI 时代的产品方法论与人的主观能动性"
podcast: "Lenny's Podcast"
date: 2026-05-03
source_url: https://www.lennysnewsletter.com/p/why-cultivating-agency-matters-more
duration: "87:20"
type: episode
cover: "#6366f1"
image: "/covers/2026-05-03-lennys-why-cultivating-agency-matters-more.jpg"
description: 前 GitHub 设计主管、现 Notion 产品负责人 Max Schoening 谈 AI 如何重塑产品构建、角色边界与可塑软件。
host: "[[Max Schoening]]"
cohosts: ["[[Lenny]]"]
companies: ["[[Notion]]", "[[GitHub]]", "[[Heroku]]", "[[Figma]]"]
concepts: ["[[主观能动性]]", "[[可塑软件]]", "[[智能体]]", "[[品味]]", "[[SaaS 末日]]", "[[智能体循环]]", "[[微小核心]]", "[[知识工作]]"]
category: 产品方法
tags:
  - 产品方法
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>对话 Notion 产品负责人 Max:AI 时代的产品方法论与人的主观能动性</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# 对话 Notion 产品负责人 Max:AI 时代的产品方法论与人的主观能动性

<div class="pd-byl"><b>Max Schoening</b> · Notion 产品负责人</div>

<div class="pd-mt">2026-05-03 · Lenny's Podcast · 87:20</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-05-03-lennys-why-cultivating-agency-matters-more.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">重要的是能动性，我不认为能动性在世界上分布得很均匀。</div><div class="a">Max Schoening · 11:20</div></div>

> [!info] 关联
> **人物** [[Max Schoening]] · [[Lenny]]
>
> **公司** [[Notion]] · [[GitHub]] · [[Heroku]] · [[Figma]]
>
> **概念** [[主观能动性]] · [[可塑软件]] · [[智能体]] · [[品味]] · [[SaaS 末日]] · [[智能体循环]] · [[微小核心]] · [[知识工作]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/why-cultivating-agency-matters-more)

<div class="pd-tldr"><b>一句话</b>前 GitHub 设计主管、现 Notion 产品负责人 Max Schoening 谈 AI 如何重塑产品构建、角色边界与可塑软件。</div>

本集嘉宾是 [[Max Schoening|Max Schoening]]。他曾在 Google 担任产品经理，领导过 [[Heroku|Heroku]] 的设计团队，曾在 [[GitHub|GitHub]] 任设计负责人和工程师，现在是 [[Notion|Notion]] 的产品负责人。主持人形容他是目前最成功的 AI 先行产品领导者之一。这一集核心聊的是：随着 AI 变得越来越强大并被深度集成到工作流中，产品构建的方式、团队的角色边界，乃至软件本身的形态，正在发生怎样深刻的变化。全文脉络分为六个部分：先讲设计师和产品经理为什么要拥抱代码，接着谈驱动这种转变的内在特质「[[主观能动性|主观能动性]]」，第三部分展开 Max 关于「[[可塑软件|可塑软件]]」的产品哲学，第四部分探讨 SaaS 会不会消亡，第五部分拆解伟大产品背后的共性方法论，最后是他给从业者的人生建议。

### 被唤醒的设计师：不是为了发布，而是为了掌握材料

既然聊到产品团队和构建方式的变化，就得先看看具体做法是怎么演进的。当主持人问及 Notion 的设计师和产品经理（PM）发布代码的起源故事时，Max 澄清他不敢揽功，但这背后确实有个演变过程：刚开始构建聊天界面时，他们在 [[Figma|Figma]] 里画静态图，但这根本无法让人感受到动态的 AI。于是他拉上两位设计师，用对大模型（LLM）友好的小代码库搭了一个简陋的「游乐场」，把原型制作全搬了过去。现在的趋势是，随着模型能力变强，同样的设计师和 PM 已经开始为生产级代码库做一定贡献了 <button class="pd-ts" data-t="03:10" data-who="Max Schoening" data-en="It's the first time I've quoted the Bible on this podcast, I think. I wouldn't take credit for the designers at Notion and the PMs at Notion now code. I think that would have probably happened anyways, but I can tell you the origin story of it, which is when I joined Notion, we were building a lot of chat interfaces and we were designing the chat interfaces in Figma." aria-label="回原文"></button>。

工具变了，人的角色和认知怎么跟上？这正是接下来的核心议题。主持人提到，因为工程师用 AI 推进极快，设计师和 PM 被挤压得很厉害，与其花时间写代码，不如确保业务大方向不跑偏。Max 对此给出了非常反直觉的判断：他其实一点都不在乎设计师写的代码能否真正上线 <button class="pd-ts" data-t="08:53" data-who="Max Schoening" data-en="What's your thoughts on just that balance? I actually don't care at all whether designers write code that lands in production. The reason I like thinking in code is because it forces you to consider the medium." aria-label="回原文"></button>。他坚持设计师应该懂代码，是因为用代码思考能逼迫他们直面真正的媒介。如果你只懂用工具微调 UI 小细节，却不理解「[[智能体循环|智能体循环]]」是如何运转的，那远远不够；真正有价值的，是那种能深度理解[[智能体|智能体]]循环并设计它们的人 <button class="pd-ts" data-t="09:23" data-who="Max Schoening" data-en="So, for example, I think the two extremes would be if a PM or a designer knows how to tweak with, pick your favorite, they're all the same, Codex, Claude Code or whatever." aria-label="回原文"></button>。观察现在的各种编程环境，本质上就像上世纪 90 年代的操作系统。

说完了怎么用工具，接下来要谈的是什么样的人能在这种新世界里胜出。

### 新世界的通关密码：主观能动性

工具和工作流程巨变，什么样的人能脱颖而出？Max 一针见血地指出，区分优劣的关键在于「主观能动性」。

以前，面对做不成的事，人们很容易拿「技能不足」当借口。但现在，随着接近通用人工智能（AGI）的模型能帮你补齐技能，真正决定成败的是你有没有主观能动性，并且这种特质在世界上分布得极不均匀 <button class="pd-ts" data-t="11:09" data-who="Max Schoening" data-en="I think before, it was very easy to always say, &quot;Well, I will never be able to do this because insert skill issue.&quot; And I think we're realizing that even if you have the skills at your fingertips because now, I don't know, an AGI adjacent model helps you." aria-label="回原文"></button>。那些拥有真正能动性、明白周围世界是可塑的人会大放异彩；而那些死守着「PM 到底该干嘛、设计师只能干嘛」这类边界的人，会过得很艰难 <button class="pd-ts" data-t="11:37" data-who="Max Schoening" data-en="And I think people who have true agency and they understand that the world around them is malleable will do great. And the folks who stick to, &quot;Tell me really, what does it mean to be a PM?" aria-label="回原文"></button>。他生动地概括这种状态：「你驾驭 Notion，是不是像开着偷来的车那么猛？」(即把公司的产品当成自己的事业来拼命) <button class="pd-ts" data-t="12:31" data-who="Max Schoening" data-en="You should cut this one short and have him on. I think the way I would describe it is, and I tell this to myself as well, which is like, okay, do you drive Notion like it's stolen, which is we're not the founders." aria-label="回原文"></button>。

为什么这种特质如此重要？这就引出了 Max 一直在倡导的深层产品哲学。

### 可塑软件：把对软件的控制权还给用户

谈到能动性，Max 顺理成章地引出了他大力倡导的「可塑软件」概念。它的核心理念是：软件应当更多地服务于使用者的利益，而不是受制于开发它的公司 <button class="pd-ts" data-t="18:16" data-who="Max Schoening" data-en="Talk about just this idea, malleable software, why you think it's so important, what you think people need to be thinking about here. Malleable software is the idea that software works closer to the interest of the people that use it than the interest of the corporation that makes it, maybe that's how I'd frame it." aria-label="回原文"></button>。

Max 说，他不想用那些只由大厂「象牙塔」设计师定死的软件。目前的软件世界就像一排排死板的格子间，界面、数据等所有层级被死死粘在一起，你几乎无法改动任何细节。想要可塑性，难道只能去折腾 Linux？Max 指出，如今正是因为有了 AI，人们开始觉醒，意识到「我完全可以自己造工具」<button class="pd-ts" data-t="19:56" data-who="Max Schoening" data-en="Now, you brought this up presumably because I think you may have not thought about malleable software too much before AI, but now you're making your own tools maybe for podcast recording, for prepping for shows or, I don't know, whatever." aria-label="回原文"></button>。为了不让大家各自为战造出一个个孤岛，可塑软件必须建立在鼓励定制的平台或操作系统之上。

顺着软件形态的演变，自然会引出一个当下热议的行业话题：如果软件这么好改，SaaS 是不是要终结了？

### SaaS 末日被严重夸大

既然软件变得越来越可塑、每个人都能用 AI 敲敲打打做个工具，那传统的 SaaS（软件即服务）是不是要被颠覆了？很多人甚至扬言不再需要 Notion。Max 直言，所谓「[[SaaS 末日|SaaS 末日]]」被严重夸大了 <button class="pd-ts" data-t="26:51" data-who="Max Schoening" data-en="And then you'll still have specialized tools around security and so on of just people who go the extra mile to really solve a user problem. So I think to some degree the SaaS apocalypse is greatly exaggerated." aria-label="回原文"></button>。

他承认，2010 年代很多花哨的 SaaS 其实就是个变相的电子表格。但「即服务」这部分才是核心价值：大多数人并不想维护一整套复杂的软件栈。软件就像花园，需要人持续照料 <button class="pd-ts" data-t="25:37" data-who="Max Schoening" data-en="They just want to go to Costco and have the steak in a styrofoam packaging and pretend that it wasn't hunting or an animal in the first place. I think with software, Bret Taylor says this too, software is like a garden, you need to tend to it." aria-label="回原文"></button>。他预言软件会回归更通用的形态，但安全等高度专业化的领域依然需要专门团队去死磕，这正是「即服务」的价值所在。

理清了宏观的趋势，接下来回归到具体的产品方法论：到底怎么才算做出了一个好产品？

### 伟大产品的密码：极小的核心与品味

既然谈到了产品的存亡，Max 分享了他眼中构建成功产品最核心的秘密。现在每个项目的前 10% 几乎都是免费的 <button class="pd-ts" data-t="28:47" data-who="Max Schoening" data-en="What part is most not something you don't do anymore or you do a lot more of now with AI emerging as a big part of your process? I think the first 10% of every project are now free." aria-label="回原文"></button>，写长篇产品需求文档（PRD）没意义了，直接做个粗糙版演示就行。但前 90% 容易，最后 10% 依然占 90% 的工作量。

最大的陷阱，就是陷入「再加一个功能就会变好」的死循环 <button class="pd-ts" data-t="61:10" data-who="Max Schoening" data-en="And I think then as a designer, you can have this identity crisis of like, why am I doing this? I think you can't even say that the way it's built always, the best engineering always wins." aria-label="回原文"></button>。真正伟大的产品，都有一个极小却做到极致的核心：手机的杀手锏是多点触控，GitHub 是拉取请求（PR），Notion 是块和斜杠命令，Figma 则是实时协作与非协作间的无缝切换 <button class="pd-ts" data-t="61:32" data-who="Max Schoening" data-en="If I really look at the truly great products, they all have one tiny core that is so exceptionally good. And that is both a combination of you stumbled upon it by luck and then the market agreed." aria-label="回原文"></button>。此外，Max 强调，决定这 20% 核心竞争力的，是「[[品味|品味]]」。品味就像是在脑子里跑虚拟机，能精准预判特定人群是否会喜欢某个点子。要练就品味，唯一的办法就是不断做重复训练，增加反馈的频率 <button class="pd-ts" data-t="58:11" data-who="Max Schoening" data-en="I would probably be terrible at it, but you decide what your in group is and then how good do you get at emulating how they will react to it. And to do that, you just have to do reps." aria-label="回原文"></button>。

讲清了产品方法论，最后我们来看看 Max 给从业者的人生建议。

### 别让焦虑吞噬热爱

Max 观察到，现在的硅谷充斥着并不真正热爱计算机的人。很多人满脑子想的是「这是最后一班车，挤不进科技圈就会沦为永久底层」，他把这种心态称为极其空虚的活法 <button class="pd-ts" data-t="77:51" data-who="Max Schoening" data-en="And it doesn't seem right to me. And I think it seems like a very hollow way of leading life. So I would encourage people to zoom out and not think about it that way." aria-label="回原文"></button>。他强烈建议人们拉远视角，别被这种狂热分散了对真正热爱事物的专注。

聊到 UBI（全民基本收入）时，他抛出了极具启发性的观点：我们现在其实已经有了 UBI，它就叫「[[知识工作|知识工作]]」<button class="pd-ts" data-t="68:01" data-who="Max Schoening" data-en="So please extend me some grace here because I both mean it as a joke and maybe somewhat real, just depends on which altitude of human nature you look at. My take is that we already have universal basic income." aria-label="回原文"></button>。如果真有了 AGI，他表示自己依然会捣鼓、造东西，因为创造本身就是纯粹的智力乐趣。正如主持人引用乔布斯的名言并总结的本集精髓：你总有一天会意识到，世界是由并不比你聪明的人构成的；所以去捣鼓吧，你拥有比想象中大得多的能动性去改变周遭的一切。

## 本集带走
1. **写代码是为了掌握材料，而非单纯出货**：对非工程师而言，AI 时代学代码的真正价值，是逼迫自己直面智能体运转的底层逻辑，而不是单纯为了多发几个功能。
2. **伟大产品必有极小核心**：好产品绝不是功能的堆砌，而是有一个小到极致、却做得极其出色的杀手锏核心。
3. **品味就是脑海中的虚拟机**：品味绝非虚无缥缈的天赋，而是通过高频反馈和大量重复训练，练就的精准预判特定群体反应的能力。

<div class="pd-sec">全部金句 <span>9 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">重要的是能动性，我不认为能动性在世界上分布得很均匀。</span>  
> *The thing that matters is agency, and I don't think agency is very evenly distributed in the world.*  
> <span class="qm">—— Max Schoening · [11:20]</span> ^q1

> <span class="qz">可塑软件的理念是，软件更贴近使用者的利益，而不是制造它的公司的利益，也许这就是我的框架。</span>  
> *Malleable software is the idea that software works closer to the interest of the people that use it than the interest of the corporation that makes it, maybe that's how I'd frame it.*  
> <span class="qm">—— Max Schoening · [18:16]</span> ^q2

> <span class="qz">我认为在某种程度上 SaaS 末日被大大夸大了。</span>  
> *I think to some degree the SaaS apocalypse is greatly exaggerated.*  
> <span class="qm">—— Max Schoening · [26:51]</span> ^q3

> <span class="qz">我认为每个项目的前 10% 现在是免费的。</span>  
> *I think the first 10% of every project are now free.*  
> <span class="qm">—— Max Schoening · [28:47]</span> ^q4

> <span class="qz">最大的陷阱之一是如果你陷入这个循环：如果我再给产品添加一样东西，它最终就会变得很棒。</span>  
> *One of the biggest pitfalls is if you get into the loop of, if I just add one more thing to the product, it'll be finally great.*  
> <span class="qm">—— Max Schoening · [61:16]</span> ^q5

> <span class="qz">如果我真正看看那些真正伟大的产品，它们都有一个非常小的核心，那是极其出色的。</span>  
> *If I really look at the truly great products, they all have one tiny core that is so exceptionally good.*  
> <span class="qm">—— Max Schoening · [61:24]</span> ^q6

> <span class="qz">品味实际上意味着你能够在脑海中运行一台虚拟机，给定一个想法，你可以预测某个特定群体是否会喜欢它。</span>  
> *Taste actually means you're able to run a virtual machine in your head where given an idea, you can predict for a certain in group whether they're going to like it or not.*  
> <span class="qm">—— Max Schoening · [00:40]</span> ^q7

> <span class="qz">我的观点是我们已经有了全民基本收入，它叫作知识工作。</span>  
> *My take is that we already have universal basic income. It's called knowledge work.*  
> <span class="qm">—— Max Schoening · [68:01]</span> ^q8

> <span class="qz">有一天你醒来，你会意识到这个世界是由并不比你聪明的人组成的。</span>  
> *One day you wake up and you realize the world is made up by people no smarter than you.*  
> <span class="qm">—— Max Schoening · [16:31]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「产品方法」挖下去**

- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|iPod之父Tony Fadell：反直觉的产品课]] —— 同嘉宾:Lenny · 同公司:Anthropic、OpenAI · 同概念:智能体 (agent)
- [[2026-03-01-lennys-the-design-process-is-dead|The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)]] —— 同嘉宾:Lenny · 同公司:Figma、Anthropic
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Anthropic产品负责人Kat Wu：在AGI边缘做产品的PM生存指南]] —— 同嘉宾:Lenny · 同公司:Anthropic · 同概念:智能体 (agent)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当代码不再是瓶颈,品味和策展成为产品团队的稀缺力]] —— 同嘉宾:Lenny · 同公司:OpenAI · 同概念:主观能动性 (agency)、品味 (taste)、智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构]] —— 同嘉宾:Lenny · 同公司:Anthropic · 同概念:智能体 (agent)
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织]] —— 同嘉宾:Lenny · 同概念:智能体 (agent)

</div>
</div>

*本集关键词:产品哲学 · AI 时代工作流 · 可塑软件 · 设计师与代码 · 主观能动性*

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
