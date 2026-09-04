---
title: Casey Moratori：为什么你的软件慢了100倍
podcast: The Pragmatic Engineer
date: 2026-08-28
source_url: undefined
duration: "112:58"
type: episode
cover: "#64748b"
description: Casey Moratori 过去十年一直在主张软件开发者应该重视性能，他认为市面上大多数软件的运行速度比所需慢几十到上百倍。
host: "[[Casey Moratori]]"
concepts: ["[[性能优化]]", "[[汇编语言]]", "[[串行依赖链]]", "[[过早优化]]", "[[多态]]", "[[游戏引擎]]"]
category: AI 编程
tags:
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-26-pragmatic-why-performant-code-matters-but-gets#post","headline":"Casey Moratori：为什么你的软件慢了100倍","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-26-pragmatic-why-performant-code-matters-but-gets","mainEntityOfPage":"https://talk.solomind.cc/2026-08-26-pragmatic-why-performant-code-matters-but-gets","description":"Casey Moratori 过去十年一直在主张软件开发者应该重视性能，他认为市面上大多数软件的运行速度比所需慢几十到上百倍。","datePublished":"2026-08-28","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Casey Moratori"},{"@type":"Thing","name":"性能优化 (optimization)"},{"@type":"Thing","name":"汇编语言 (assembly language)"},{"@type":"Thing","name":"串行依赖链 (serial dependency chain)"},{"@type":"Thing","name":"过早优化 (premature optimization)"},{"@type":"Thing","name":"多态 (polymorphism)"},{"@type":"Thing","name":"游戏引擎 (game engine)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"Casey Moratori：为什么你的软件慢了100倍","item":"https://talk.solomind.cc/2026-08-26-pragmatic-why-performant-code-matters-but-gets"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Casey Moratori：为什么你的软件慢了100倍</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Casey Moratori：为什么你的软件慢了100倍

<div class="pd-byl"><b>Casey Moratori</b> · 2026-08-28</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-26-pragmatic-why-performant-code-matters-but-gets.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">他还说，市面上大多数软件的运行速度比所需速度慢几十到几百倍。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="00:08" data-who="嘉宾" data-en="He also says that most software out there runs tens to hundred times slower than it needs to." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Casey Moratori]]
>
> **概念** [[性能优化]] · [[汇编语言]] · [[串行依赖链]] · [[过早优化]] · [[多态]] · [[游戏引擎]]

[[Casey Moratori|Casey Moratori]] 做了十几年游戏和底层性能工具，现在在 Substack 上做 Computer Enhance，教人写高性能代码。他说了一个很反直觉的事实：市面上大多数软件跑得比它应该的速度慢几十到上百倍 <button class="pd-ts" data-t="00:08" data-who="Casey Moratori" data-en="Today's guest, Casey Moratori, spent the last decade arguing that we should. He also says that most software out there runs tens to hundred times slower than it needs to." aria-label="回原文"></button>。

## 为什么没人关心性能

三个原因。第一，很多企业软件的购买者不是使用者——高层看合规和价格下单，根本不在意每个操作卡 30 秒 <button class="pd-ts" data-t="16:05" data-who="Casey Moratori" data-en="And I think, I do think your answer at the time, if I remember it correctly, is certainly an accurate one for some subset of industries. Which, you know, you said something along the lines of, look, a lot of these pieces of software that you're seeing, the user isn't the purchaser, right?" aria-label="回原文"></button>。

第二，垄断效应。社交网络这类平台有网络效应护城河，你做得再快也很难抢用户，性能只是加分项，不是决定因素 <button class="pd-ts" data-t="17:04" data-who="Casey Moratori" data-en="There's thing two, which is that in a lot of cases, you simply have monopoly effects. You know, people aren't right now... Realistically going to challenge the social networks that currently exist, for example." aria-label="回原文"></button>。

但第三点，趋势在变。Bunn 对比 NPM 快了 10 倍以上，Linear 把每个操作压到 300 毫秒以内，而 Jira 慢得多——这些产品用性能当武器切入市场，而且拿到了真实增长 <button class="pd-ts" data-t="19:02" data-who="Casey Moratori" data-en="Really performant software to try to take on incumbents in a space, and they've been getting traction. So I think that's also a really good sign. Yeah, and I guess on this last category, a really good example in the developer community is Bunn versus NPM, where Bunn just said, like, okay, we're like 10x or 20x or 50x faster, and devs are like, what?" aria-label="回原文"></button>。300 毫秒在计算里已经算「永恒」了，而现实中很多程序一个操作要等好几秒，网络延迟都比这快 <button class="pd-ts" data-t="19:49" data-who="Casey Moratori" data-en="It was never built for that. Yeah. And, you know, if you think about something like a 300 millisecond budget for an operation, 300 milliseconds is like an eternity in computing, right?" aria-label="回原文"></button>。

## 正确的优化方法：先算理论上限

Casey 说大多数人对优化的理解就是错的。常见做法是：跑性能剖析，找到热点，改一改，看统计数字有没有变好。他说这不是优化，这只是「改进」——你找到的是一个局部最小值 <button class="pd-ts" data-t="22:29" data-who="Casey Moratori" data-en="And it is the thing that I hammer home on the Substack through all the parts of the courses on there, which is that in general, there's a misconception about the way that you approach optimization in computer science or in software engineering, let's say." aria-label="回原文"></button>。

真正的优化是：先算清楚底层硬件理论上能做到多快，再量你实际做到了多少，然后缩小这个差距 <button class="pd-ts" data-t="23:07" data-who="Casey Moratori" data-en="The correct way to do optimization is very much like what you just said. You first go, what are the operations that this system has to perform? What is the underlying hardware capable of doing at its theoretical peak?" aria-label="回原文"></button>。你不需要挤到理论极限，但要能解释为什么没到。

这个方法还有一个好处：你能发现异常。Casey 在做 Substack 课程时就遇到过 Intel 芯片上有一种没人文档化的重命名机制，不看理论值你根本不知道它存在 <button class="pd-ts" data-t="25:05" data-who="Casey Moratori" data-en="Things in CPUs that no one knew about, and I've literally had them in the course of making the substack. I've been like, what is this thing? And I look into it, it's like, oh, there's this new renaming, this new rat table thing that Intel chips seem to be able to do." aria-label="回原文"></button>。

## 为什么该学读汇编

Casey 反复强调：学汇编不是为了写汇编，而是为了读。你写的 Java、C、Rust 代码都只是编译器的输入，你根本不知道 CPU 实际收到了什么指令。看汇编输出，你才确切知道机器在干什么 <button class="pd-ts" data-t="26:17" data-who="Casey Moratori" data-en="There's a very good reason for it. And that is that everything else that you might use doesn't tell you anything about what the CPU is actually receiving. If I look at a Java program, if I look at a C program, if I look at Haskell, OCaml, whatever, Rust, all I'm seeing is input to a compiler." aria-label="回原文"></button>。

而且汇编没你想的那么难。x64 里编译器实际输出的常用指令也就二三十条，比 React 加 CSS 加 DOM 的知识量小得多 <button class="pd-ts" data-t="28:24" data-who="Casey Moratori" data-en="Massively more, and especially when you consider the subset that are actually used. If you look at the subset of constructs that you would need to understand to be able to understand, say, just a website from today, all of the JavaScript libraries, all of the JavaScript syntax, all of the DOM, you know, all of the behavior that's going to go on there, CSS, React, CSS, right?" aria-label="回原文"></button>。懂了汇编之后，CPU 厂商发布新芯片时的架构图你就能直接读懂——乘法吞吐量、缓存层级、分支预测，全写在图上 <button class="pd-ts" data-t="27:29" data-who="Casey Moratori" data-en="And it also unlocks this sort of huge world of possibilities to you because once you know assembly language, you can now do things like read those CPU diagrams." aria-label="回原文"></button>。

最直观的例子：Python 里做一次 A+B，底层可能要执行上百条 CPU 指令；C 语言里就是一条 add 指令 <button class="pd-ts" data-t="44:08" data-who="Casey Moratori" data-en="What I argue and what we focus on the Substack is I think you just have to go through the experience once of learning, reading the assembly language, seeing how the CPU works, seeing the difference, seeing why Python is slow, which we show on the subs." aria-label="回原文"></button>。理解了这个量级差异，你就知道为什么 Python 里必须调用 C 写的库来做重计算，也就能在写代码时判断：这个路径能不能承受 100 倍的减速 <button class="pd-ts" data-t="45:38" data-who="Casey Moratori" data-en="And the simplest example is the Python example. Most people have never internalized the fact that it takes, you know, maybe on the order of 100 more CPU instructions to do an add in Python than it does to do it in an equivalent language like C for the same piece of text, just A plus B compiled in two different, you know, in two different languages, right?" aria-label="回原文"></button>。

## 「过早优化是万恶之源」被滥用了

Casey 专门做了一场两小时的讲座拆这句话。他说这句话不是完全错，但大多数人拿它当借口，在应该考虑性能的时候不思考 <button class="pd-ts" data-t="29:46" data-who="Casey Moratori" data-en="But let me just play devil's advocate. There's a saying that premature optimization is the root of all evil. And we typically use it, or I typically use it so many times." aria-label="回原文"></button>。

真正的区分在于：你能不能确定现在写的代码，以后可以局部优化？如果能——比如换个更快的哈希表实现——那推迟没问题。问题出在架构层面：如果你整篇代码都是「问服务器→等响应→算一下→再问服务器→再等」的串行模式，最后发现慢了，性能专家来了也只能说「没办法，得重写」<button class="pd-ts" data-t="32:39" data-who="Casey Moratori" data-en="And I'll give you a very simple example that usually people have had experience with. A very simple example would be we write our entire software thing, like we just, whatever this massive thing that we're imagining doing where we're gonna ignore optimization, we sit down and we write it and we use a paradigm where we ask the server for something." aria-label="回原文"></button>。

因为[[串行依赖链|串行依赖链]]无法并行化，不是热点，是写法本身的问题。Facebook、Uber 都发过博客说「我们不得不把整个东西重写一遍」——如果只是热点问题，永远不会需要重写整个东西 <button class="pd-ts" data-t="39:11" data-who="Casey Moratori" data-en="And we've seen so many projects. I have an entire video where I go through, like, look at all these blog posts of people who, like, say, you know, it's Facebook, it's Uber, it's everybody." aria-label="回原文"></button>。OpenAI 和 Anthropic 都经历了同样的路径：早期用 Python 因为数据科学家熟悉，后来发现单线程扛不住，开始转向 Rust <button class="pd-ts" data-t="39:48" data-who="Casey Moratori" data-en="I was at Uber where I was not making a decision but the teams next to me were and I saw or I kind of understood why they were making but typically and right now it's happening with AI companies oftentimes it's like we chose this technology which is Python and it's single threaded and it made sense at the time on the web server but now we're big and this happened at Uber it was it was Python and Node.js and then they went to Go and Java on the back end and now with AI companies it was Python, OpenAI and Tropic are both going through this right now they're both" aria-label="回原文"></button>。

所以 Casey 的核心观点是：做架构决策的人必须懂性能，必须确保下游的人以后还有优化空间。否则就是在掷骰子 <button class="pd-ts" data-t="36:03" data-who="Casey Moratori" data-en="And so that's the crucial takeaway is everybody on your team who is making architectural decisions Those people must know performance and they must make decisions that will allow the other people downstream of them to use an architecture which can be optimized later." aria-label="回原文"></button>。

## Clean Code 的性能代价

Casey 做过一期视频，展示 Uncle Bob Martin 推崇的[[多态|多态]]重构模式比简单的表切换慢 1.5 到 15 倍。他说反响比预期好，没那么大争议 <button class="pd-ts" data-t="76:15" data-who="Casey Moratori" data-en="You made this video titled Clean Code Horrible Performance, an essay slash video, showing how Uncle Bob Martin's polymorphism-based refactoring pattern runs about 1.5 to 15 times slower than a plain table switch version." aria-label="回原文"></button>。

关键不是虚函数调用本身贵多少，而是你用了多态之后，编译器没法做内联、没法做代码折叠、没法做向量化——编译器被你挡在外面了 <button class="pd-ts" data-t="79:16" data-who="Casey Moratori" data-en="If instead you use all of these things that were recommended, you completely block out the compiler from being able to do those things. Because if it can't tell what it's doing at runtime, if it has to leave open the possibility that you substituted in a different class here or something like that," aria-label="回原文"></button>。如果你用的小函数都是静态已知的，编译器反而能把冗余代码全部折叠掉，跑得很快 <button class="pd-ts" data-t="78:40" data-who="Casey Moratori" data-en="When I say static, I kind of mean just known to the translation unit, not external. The compiler can put those together, collapse all of the redundant code, and actually produce something reasonable that will run pretty fast." aria-label="回原文"></button>。简单可读的代码和运行快的代码，在大多数情况下并不矛盾 <button class="pd-ts" data-t="85:08" data-who="Casey Moratori" data-en="And for me, I have never really understood the sort of mentality of there's a difference between code that is like well architected by some principles and code that runs quickly." aria-label="回原文"></button>。

## 游戏引擎的教训：降低门槛之后

Casey 把[[游戏引擎|游戏引擎]]的普及比作「游戏行业的 AI 时刻」。以前每个游戏要自建渲染引擎，引擎风险是最大杀手——技术做不到，游戏就死了 <button class="pd-ts" data-t="61:03" data-who="Casey Moratori" data-en="And so there were two really big risks, typically, when you started a game project in those days. One was the engine risk. Would we be able to make something that would be technically able to do what we need to do for this game?" aria-label="回原文"></button>。Unreal Engine、Unity 这些可授权引擎消除了这个风险，让更多人能做游戏 <button class="pd-ts" data-t="65:03" data-who="Casey Moratori" data-en="What happened when game engines became widespread? They became not only licenseable, like we're talking about like Unreal Engine for larger studios, but ones like Unity or Godot, which now amateurs could also afford." aria-label="回原文"></button>。

但结果是：Steam 上每年上架的游戏数以万计，你的游戏不可能被自然发现。游戏好变成了基本门槛，营销和分发才是真正的差异化因素 <button class="pd-ts" data-t="67:33" data-who="Casey Moratori" data-en="Problem is, it rapidly kind of accelerates into this kind of a nasty scenario where you just have massive numbers of releases. And I think at this point, we're at the point where I want to say Steam games are in the like tens of thousands or a hundred thousand per year or something like that." aria-label="回原文"></button>。再加上老游戏不会因为画面过时就被淘汰，以及 Fortnite、Minecraft 这些实时服务产品占据了玩家时间，新游戏的生存空间被进一步压缩 <button class="pd-ts" data-t="70:06" data-who="Casey Moratori" data-en="They all take away from the time that the new games have. Yes, and that problem will only get worse because one of the things that the game industry could rely on in the past that is much harder to rely on now is that older games would look dated technologically in ways that consumers cared about." aria-label="回原文"></button>。

## AI 与手工编程

Casey 在自己的项目里完全不用 AI 工具，原因很简单：他写游戏代码是因为他想写，不是为了产出 <button class="pd-ts" data-t="93:17" data-who="Casey Moratori" data-en="In the work that you're doing at Molly Rocket with this project that is yet unreleased, how are you using AI tools, if you're using them at all? We are not using them at all." aria-label="回原文"></button>。他把这比作手工家具——IKEA 自动化了制造，但工业区里还是有人手工做桌子，这是人类会做的事，不需要商业理由 <button class="pd-ts" data-t="95:13" data-who="Casey Moratori" data-en="I think there will probably also be at some point a notion of like traditional hand crafting that will come into play because we've seen this in most other times when you automate something." aria-label="回原文"></button>。

关于 AI 对行业的实际影响，他觉得现在评估太早。就算 AI 已经让生产力提升了 10%，这种幅度的提升从外部也很难观察到 <button class="pd-ts" data-t="102:42" data-who="Casey Moratori" data-en="So there's all that's on the table. Then there's another possibility, which is that it actually already has worked, but just the productivity boost isn't as big as would be obvious." aria-label="回原文"></button>。

但他注意到一个现象：工作中自主权高的人通常对 AI 体验积极——他们拿 AI 做自己不想做的事；而被强制要求使用 AI 的人更容易产生倦怠 <button class="pd-ts" data-t="106:35" data-who="Casey Moratori" data-en="If you're somebody with a high degree of autonomy, then when are you going to reach for an AI? Well, whenever there's something that you didn't want to do, right?" aria-label="回原文"></button>。所以他的建议是，选工作时把自主权当成一个重要考量 <button class="pd-ts" data-t="107:30" data-who="Casey Moratori" data-en="So... So I guess it might be just an idea for folks in this situation that now you might want to evaluate your current position or if you're interviewing your next position based on how much autonomy will you have." aria-label="回原文"></button>。

## 本集带走

- **先算理论上限再优化**：不要只跑性能剖析找热点，先算硬件理论上能做到多快，再量差距。这样你才能发现真正的异常，而不是停留在局部最小值。
- **学读汇编，不用学写**：只需要二三十条常用指令，就能看懂 CPU 实际在做什么，进而读懂芯片架构图、判断语言层面的性能量级差异。
- **架构决策时要防串行依赖链**：「先写再优化」的前提是你确定以后能局部优化。如果架构上制造了无法并行化的串行依赖链，后面只能重写。
- **别让编码教条挡住编译器优化**：过度使用多态和虚函数会阻止编译器做内联和向量化，简单可读的代码在大多数情况下本身就很快。
- **选工作时把自主权当硬指标**：自主权高的人能把 AI 当工具用在不想要的杂活上；被强制用 AI 的人更容易倦怠。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">他还说，市面上大多数软件的运行速度比所需速度慢几十到几百倍。</span>  
> *He also says that most software out there runs tens to hundred times slower than it needs to.*  
> <span class="qm">—— 嘉宾 · [00:08]</span> ^q1

> <span class="qz">所以关键点是，你团队中每一个正在做架构决策的人，那些人必须懂性能，而且他们必须做出能让那些在他们下游的其他人使用以后可以优化的架构的决策。</span>  
> *the crucial takeaway is everybody on your team who is making architectural decisions, those people must know performance and they must make decisions that will allow the other people downstream of them to use an architecture which can be optimized later.*  
> <span class="qm">—— Casey Moratori · [35:57]</span> ^q2

> <span class="qz">如果总是热点让你的性能变差，你永远不需要重写整个东西。</span>  
> *If it was always hotspots that made your performance bad, you'd never have to rewrite the whole thing.*  
> <span class="qm">—— Casey Moratori · [39:23]</span> ^q3

> <span class="qz">因为根据我的经验，通常架构正确的代码也是运行快速的代码。</span>  
> *Because in my experience, usually the code that is architected properly is also the code that runs quickly.*  
> <span class="qm">—— Casey Moratori · [85:08]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|代码量暴涨8倍后，工程管理怎么办？]]<span class="pd-rz">同概念:测试驱动开发 (test-driven development)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-03-12-lennys-how-i-built-a-1m-subscriber-newsletter|老婆拷问 Lenny：120 万订阅背后的致幻剂体验与被追着跑的巨石]]<span class="pd-rz">同公司:Substack</span>
- [[2026-09-03-nopriors-redefining-chip-architecture-with-arm-ce|Arm CEO 谈芯片、AI 与下一个十年的算力格局]]<span class="pd-rz">同概念:CPU</span>

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
