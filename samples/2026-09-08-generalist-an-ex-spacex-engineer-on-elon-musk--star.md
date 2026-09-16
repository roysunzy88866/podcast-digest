---
title: SpaceX 老兵造硬件控制软件：Revel 如何把卡在 80 年代的工业软件拉进 21 世纪
podcast: The Generalist
date: 2026-09-14
source_url: undefined
duration: "57:12"
type: episode
cover: "#64748b"
image: "/covers/2026-09-08-generalist-an-ex-spacex-engineer-on-elon-musk--star.jpg"
description: "SpaceX 老兵 Scott Morton 创办 Revel,为火箭、核反应堆等硬件打造测试与控制软件，他讲了为什么工业软件停滞四十年，以及自研编程语言的价值。"
host: "[[Mario]]"
cohosts: ["[[Scott Morton]]"]
companies: ["[[Revel]]", "[[SpaceX]]"]
concepts: ["[[LLVM]]", "[[Python]]", "[[vibe coding]]", "[[CI-CD]]"]
category: 创业与行业
tags:
  - 创业与行业
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-09-08-generalist-an-ex-spacex-engineer-on-elon-musk--star.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-08-generalist-an-ex-spacex-engineer-on-elon-musk--star#post","headline":"SpaceX 老兵造硬件控制软件：Revel 如何把卡在 80 年代的工业软件拉进 21 世纪","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-08-generalist-an-ex-spacex-engineer-on-elon-musk--star","mainEntityOfPage":"https://talk.solomind.cc/2026-09-08-generalist-an-ex-spacex-engineer-on-elon-musk--star","description":"SpaceX 老兵 Scott Morton 创办 Revel,为火箭、核反应堆等硬件打造测试与控制软件，他讲了为什么工业软件停滞四十年，以及自研编程语言的价值。","datePublished":"2026-09-14","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-08-generalist-an-ex-spacex-engineer-on-elon-musk--star.jpg","about":[{"@type":"Person","name":"Mario"},{"@type":"Person","name":"Scott Morton"},{"@type":"Organization","name":"Revel"},{"@type":"Organization","name":"SpaceX"},{"@type":"Thing","name":"LLVM"},{"@type":"Thing","name":"Python"},{"@type":"Thing","name":"vibe coding"},{"@type":"Thing","name":"CI/CD"}],"articleSection":"创业与行业"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"创业与行业","item":"https://talk.solomind.cc/tags/创业与行业"},{"@type":"ListItem","position":3,"name":"SpaceX 老兵造硬件控制软件：Revel 如何把卡在 80 年代的工业软件拉进 21 世纪","item":"https://talk.solomind.cc/2026-09-08-generalist-an-ex-spacex-engineer-on-elon-musk--star"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>SpaceX 老兵造硬件控制软件：Revel 如何把卡在 80 年代的工业软件拉进 21 世纪</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# SpaceX 老兵造硬件控制软件：Revel 如何把卡在 80 年代的工业软件拉进 21 世纪

<div class="pd-byl"><b>Scott Morton</b> · 2026-09-14</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-08-generalist-an-ex-spacex-engineer-on-elon-musk--star.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我不认为真的有人会把自己的职业生涯押在，比如说，用 vibe coding 写一个核反应堆或火箭引擎或某种后果非常严重的系统的控制系统上。</div><div class="a">— Scott Morton <button class="pd-ts" data-t="02:47" data-who="Scott Morton" data-en="I don't think anyone's really going to kind of bet their career on like vibe coding a control system for let's say a nuclear reactor or a rocket engine or something that's very high consequence." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Mario]] · [[Scott Morton]]
>
> **公司** [[Revel]] · [[SpaceX]]
>
> **概念** [[LLVM]] · [[Python]] · [[vibe coding]] · [[CI-CD]]

一家软件初创公司，在「AI 正在解决所有软件」的 2026 年逆势融了 1.8 亿美元、估值刚过 10 亿，客户是造火箭、核反应堆和超音速飞机的公司——这就是 [[Revel|Revel]]。主角 [[Scott Morton|Scott Morton]] 是一位在 [[SpaceX|SpaceX]] 待了近 10 年的老兵，曾为 Falcon 9 写推进剂加载程序，也是德州 Starbase 的第一位软件工程师。他创办 Revel 的底气，来自一个他在 SpaceX 亲眼见过的巨大空白：**控制硬件的软件，从上世纪 80 年代起就没有任何实质性进步**。<button class="pd-ts" data-t="00:24" data-who="未知" data-en="Is that at SpaceX or is it leaving SpaceX and delivering this type of platform for all the other companies out there trying to build incredible machines? Today, Rebel provides a software platform for controlling hardware systems like nuclear reactors, jet engine test facilities, systems like oil and gas refineries." aria-label="回原文"></button>

## 为什么这行软件卡在了 1986 年

Scott 的解释很直白：测试领域一个主要平台是 1986 年发明的，工业界普遍使用的平台诞生于 1993 年，之后——「什么都没有」。<button class="pd-ts" data-t="07:06" data-who="未知" data-en="You can really just see it. It's like these tools that are available really do date back. It's like 1986 is when one of the major platforms used in tests was invented and really hasn't changed much since then." aria-label="回原文"></button> 原因是所有软件工程人才都被互联网吸走了，这个领域荒废了，在位者没有任何创新压力，加上这类系统一旦装上就极难拔除、粘性极强，新玩家进不来。而少数进来的新玩家，又没有 SpaceX 那种从内部亲手构建这套系统的经验——Scott 把这总结成一个先有鸡还是先有蛋的困局。<button class="pd-ts" data-t="09:39" data-who="未知" data-en="Then the few newcomers that come in don't have this experience where they get to see exactly how to build this from the inside of somewhere like SpaceX and learn, okay, here are all these edge cases and it's tough to get these companies to adopt it unless it's perfect anyway." aria-label="回原文"></button>

他还澄清了一个流行误解：SpaceX 并不是「垂直整合一切」。「如果你在一次会议上说我们应该垂直整合这个，没人知道你在说什么。」<button class="pd-ts" data-t="11:16" data-who="未知" data-en="Totally not what I saw there. If you were to say, you know, in a meeting where you're trying to decide what to do, like, we should vertically integrate this, like, you would just be like, like, no one would know what you're talking about." aria-label="回原文"></button> 自研是穷尽调研所有商业方案、确认都不适合 Starship 之后才做的决定——而且即便如此，在内部说服大家真的自己造，「实际上也非常困难」。<button class="pd-ts" data-t="12:16" data-who="未知" data-en="And even then there were still a lot of like, why don't we just take forward what we did for Falcon? Even then it was actually very hard, a hard sell internally to actually build it ourselves." aria-label="回原文"></button>

旧系统到底差在哪？一是软件工程师和硬件工程师之间缺少共享的格式，协作不畅；二是发射台上跑的软件和飞行器上跑的软件是两套东西，SpaceX 想造一个对两者都适用的。<button class="pd-ts" data-t="12:40" data-who="未知" data-en="Like, yeah, what didn't work? We saw a number of issues. Some of them were just that software engineers could not work well with hardware engineers." aria-label="回原文"></button> 

他们的方法朴素得可爱：在一页纸上写下你希望软件具备的所有优点，拿着清单去对照市售方案，再对照自己能造出什么。<button class="pd-ts" data-t="13:06" data-who="未知" data-en="And so we really wanted to try to take the best of both worlds, the best of all the approaches and build something that would work for both. We kind of had this objective list that we wanted." aria-label="回原文"></button> 这套自研系统最终在 SpaceX 内部「疯传」——在项目彼此壁垒森严的公司里，这极其罕见。<button class="pd-ts" data-t="14:11" data-who="未知" data-en="And so I think it worked quite well. What we did build actually went viral internally at SpaceX, which was actually very rare because all the programs are actually very siloed and isolated kind of by design because you want them to move as fast as they can without being kind of, you know, dragging and be like, oh, you can't do that on Starship because this is how we do it." aria-label="回原文"></button> 但 SpaceX 的产品是把东西送上轨道，不是造软件平台，Scott 觉得这套东西从没做到过极限——加上他问遍 SpaceX 之外的初创公司，得到的回答全是「糟透了」，于是他决定离开，把这套经验交付给全世界造机器的公司。<button class="pd-ts" data-t="14:49" data-who="未知" data-en="And that's kind of why I wanted to leave it. I think I also, you know, I talked to a number of other companies out there outside of SpaceX that were You know, startups trying to go as fast as they could and ask like, what are you guys using?" aria-label="回原文"></button>

## 从 Elon 那里学到的：在团队身上下大赌注

Scott 提炼 SpaceX 成功的最大关键之一：「Elon 愿意在他的团队身上下巨大的赌注，即使所有人都说，我们完全不知道这东西会怎么运作。」<button class="pd-ts" data-t="00:34" data-who="未知" data-en="Today, Rebel provides a software platform for controlling hardware systems like nuclear reactors, jet engine test facilities, systems like oil and gas refineries." aria-label="回原文"></button> 最生动的例子是接住塔(Catch Tower,用塔上的机械臂在空中「接住」返回的助推器，省掉沉重的着陆腿)——SpaceX 在 Starship 还从未飞过之前就开始建它，最初甚至打算首飞就接。

公司里人人都觉得疯了：「我们连一个能飞的飞行器都还没有。」<button class="pd-ts" data-t="17:01" data-who="未知" data-en="We were, I mean, everyone at SpaceX on the search of her was like, this is crazy. Can we actually do, we don't even have a flying vehicle yet. Can we actually go directly to catching it?" aria-label="回原文"></button> 最终它在第 5 次飞行中被接住了。Scott 的复盘：如果等它飞起来再改造，对飞行器设计将是巨大改动——在最初就下注，「事后来看，显然是神来之笔」。<button class="pd-ts" data-t="17:34" data-who="未知" data-en="If we had waited till it flew and then tried to retrofit everything and change the vehicle, it'd be a huge change to how the vehicle is designed. And so making that bet at the very beginning, in hindsight, was clearly like a stroke of genius." aria-label="回原文"></button>

这背后的逻辑是：**工程团队天性保守，他们看不到拐角处自己日后会想出什么**。Elon 的做法是持续押注——「情况看起来不妙」的时候说「再花一个月试试」，然后人们会取得自己都没预料到的突破。

「很多团队的能力远远超过他们自己想象的。」<button class="pd-ts" data-t="20:01" data-who="未知" data-en="And then people had breakthroughs that they did not foresee. And so I think a lot of teams are just much more capable than they even imagined. I can picture a traditional corporation, they come to the engineers, like, hey, can we make a catch tower?" aria-label="回原文"></button> 还有一样：当你用新信息摆到他面前，他会立刻切换方向——激情澎湃但零自我，Scott 认为这是做出最好决策的关键。<button class="pd-ts" data-t="37:34" data-who="未知" data-en="And that was, I think, I guess that is another thing I saw in Elon is... He would be extremely passionate, but then present it with new information. He'd be like, well, okay, that was the quick switch." aria-label="回原文"></button>

在 Revel,他复刻了这个打法：公司只有三个人时就押注用 [[LLVM|LLVM]](Rust 和 Clang 背后的编译器工具链)自研编程语言的后端——团队从没人用过这东西，「但它显然是长期正确的解决方案」。<button class="pd-ts" data-t="18:33" data-who="未知" data-en="No one ever used it before. But ultimately, it was clearly the right solution long term. Why was that?" aria-label="回原文"></button> 20 多个月后，这门语言「性能超强」。<button class="pd-ts" data-t="19:02" data-who="未知" data-en="Like the language is incredible. It's super performant. The tool chain has a lot that we can leverage to make sure it's correct." aria-label="回原文"></button>

## 自研编程语言：让硬件工程师一小时干完过去六个月的活

为什么一家硬件软件公司要造编程语言？因为和平台一样，**这行已经三四十年没有为控制硬件系统设计的新语言了**。<button class="pd-ts" data-t="20:33" data-who="未知" data-en="Why is that necessary or valuable for what you do? There's a few reasons. I mean, just like the kind of software platforms, there's been no new programming language designed for controlling hardware systems also in three or four decades." aria-label="回原文"></button> 

而三十年间软件世界在「人类怎么写好代码」上进步巨大——[[Python|Python]] 那时候都还不存在。Revel 的语言借鉴 Python 的易上手，做到三件事：高性能、极易上手、运行时安全——**只要编译通过，就不会崩溃**。

「市面上没有任何一门语言能同时做到这三点。」<button class="pd-ts" data-t="21:29" data-who="未知" data-en="It's highly performant, it's highly accessible, and it's what we call runtime safe. So if it compiles, it cannot crash. And there's just no language out there that does all those three." aria-label="回原文"></button>

这门语言的用处，解决的是一个真实痛点：控制系统本质上就是「读入温度、压力等输入 → 做数学计算 → 输出开阀或开泵的指令」，语言专为把中间那步做到极致。<button class="pd-ts" data-t="22:11" data-who="未知" data-en="And fundamentally, so the language is designed to do that middle part extremely well. I see. Do the math on the inputs to determine what the output should be." aria-label="回原文"></button> 最懂硬件的恰恰是硬件工程师，但过去他们得把需求极其详细地解释给另一个人，反复迭代，「它总是错的」。

Scott 亲历过：他给 Falcon 9 写推进剂加载程序，向另一个人解释清楚想要什么，花了**六个月**；「今天用 Revel,你真的可以在一个小时内完成。」<button class="pd-ts" data-t="23:40" data-who="未知" data-en="And it was, obviously there's a lot of other things going on and I had, but there's a lot of iteration cycles with that person. And then with Rebel today, you could do it in literally an hour." aria-label="回原文"></button>

效果超出了预期：硬件工程师每天在用它，甚至客户公司的**技术人员**——那些平时根本接触不到这类工具、只负责跑测试的人——都在读代码、写代码。<button class="pd-ts" data-t="24:41" data-who="未知" data-en="And then it's I think it's even going beyond what we had imagined, which is that people that typically at companies never get access to this type of thing. These are the people that typically run the tests, and they are actually interacting and even updating the code." aria-label="回原文"></button> 一家高超音速公司曾花了一年才同意试试，一旦进入，「大概一个月，从一个系统变成差不多 20 个系统」。<button class="pd-ts" data-t="48:07" data-who="未知" data-en="As soon as we got into one place, it just spread throughout the company. It was like on the order of a month, it went from one to like 20 systems. Wow." aria-label="回原文"></button> 

对比 Python:一个最常见的字符串插值错误就会在 12 小时测试进行到一半时杀掉运行时系统，让硬件处于不安全状态，还得重测；Revel 编译过就不会崩。<button class="pd-ts" data-t="48:47" data-who="未知" data-en="They had to write a lot of Python. And then there were heads, a lot of safety issues with that where like, you know, if you have Python, a big difference between Rebel Code and Python is that at the runtime safety." aria-label="回原文"></button> 开源也在计划里，但要等语言和平台先成熟。<button class="pd-ts" data-t="24:49" data-who="未知" data-en="Why, why not? I think that is probably what we'll do long term. Yeah." aria-label="回原文"></button>

## 为什么 AI 替代不了，反而成了助推器

主持人问出那个时代之问：AI 都会写代码了，谁还需要你？Scott 的回答是：没人敢拿自己的职业生涯去「[[vibe coding|vibe coding]](凭感觉让 AI 生成代码)一个核反应堆的控制系统」——浅层 web 应用确实麻烦了，但控制高风险系统的软件远不止写代码这一环。<button class="pd-ts" data-t="02:47" data-who="未知" data-en="The biggest thing is... That I don't think anyone's really going to kind of bet their career on like vibe coding a control system for let's say a nuclear reactor or a rocket engine or something that's very high consequence." aria-label="回原文"></button> 

Revel 每一行代码都有合适的人审查，有一套完整 CI 系统：实验室里放着平台支持的每一种真实硬件，每次发布都要跑一个耗时数天的验证流程。<button class="pd-ts" data-t="03:31" data-who="未知" data-en="We have a full CI system. So what that is is like... A bunch of hardware that we control is in a lab." aria-label="回原文"></button> AI 目前给他们的只是「编写环节的加速」，而团队以资深前 SpaceX 工程师为主——**给真正知道正确答案长什么样的人装备 AI,才是巨大加速器**。<button class="pd-ts" data-t="05:04" data-who="未知" data-en="We have several from Palantir and Andrel as well. But arming these people with AI where they really know what they're doing, they know what the correct solution really looks like just kind of through their experience has been a huge accelerant for us." aria-label="回原文"></button>

更有意思的是，Scott 发现 Revel 的语言反而是 AI 生成控制代码的最佳格式：高性能、可读、编译过即不崩——你让 AI 生成代码，恰恰最需要这三样。客户已经在大量这么干了。<button class="pd-ts" data-t="51:47" data-who="未知" data-en="And we have people are actually already using AI with our product. And I actually think we found that our code is the best possible format to generate, you know, control software from an AI, because the code has, that's again, going back to the qualities of it, it's highly performant, highly accessible and high and runtime safe." aria-label="回原文"></button>

## 生意：一天部署，从测试台杀向工业系统

Rebel 的客户覆盖核反应堆、卫星制造、超跑公司——「一天之内你可以全去一遍，挺酷的」。<button class="pd-ts" data-t="00:50" data-who="未知" data-en="And ultimately, it was caught on Flight 5. One of the best parts of being at Revel is that in one day you can go to a nuclear reactor company, you can go to the most cutting edge satellite manufacturer, and then you can go to like a hypercar company." aria-label="回原文"></button> 产品按规模推进：小规模台架测试要快迭代，大规模设施(沙漠里的火箭发动机试验场)要安全控制，Rebel 找到了两者兼得的平衡点；下一个阶段是炼油厂这类工业系统。<button class="pd-ts" data-t="39:41" data-who="未知" data-en="So we'll kind of attach it to that timeline. And then I think the new one for us, you know, I think what's extremely exciting about where we're at right now is we're very competitive in the small-scale testing world." aria-label="回原文"></button> 

工业系统的跨越在于遥测通道数量：他们已部署在一个 25 万通道的系统上，有的将来会到几百万。<button class="pd-ts" data-t="41:33" data-who="未知" data-en="Sort of input of some kind or another. So we're now, we're actually now deployed at a 250,000 channel system. Wow." aria-label="回原文"></button> 一次 bake-off(两套系统做同样的任务对比)中，用了传统工具好几年的工程师花一周完成的任务，一个从没见过 Revel 的工程师**一天**做完了。<button class="pd-ts" data-t="42:36" data-who="未知" data-en="And then completely cold to revel, had never even seen the platform. They did it in one day. And they had been using the kind of old, old way of doing things for several years." aria-label="回原文"></button> 

客户 Impulse 原本同一家公司里用着八种不同的测试软件，现已全面标准化到 Revel。<button class="pd-ts" data-t="40:43" data-who="未知" data-en="And we're also, so far we've seen that we are extremely competitive there as well. And these are All of these different scales, there's probably eight different types of software that are used, and even inside of one company." aria-label="回原文"></button> 部署快到什么程度？基本一天搞定，最大的系统也只花了两天。<button class="pd-ts" data-t="44:00" data-who="未知" data-en="What is the process like of taking a company in cold and saying, hey, you know, you're now ready to sort of run your next launch? Yeah, I mean, this is something I think has been extremely surprising to me." aria-label="回原文"></button>

对「你们两年，凭什么信你们能活二十年」的疑虑，Scott 的回应是融资策略(账上钱花不完)+ 产品力：产品足够有吸引力，客户至少会试，然后一步步接管他们更多负担。<button class="pd-ts" data-t="43:11" data-who="未知" data-en="Because I imagine they're so used to someone, you know, this company's been around 20 plus years, you're around two years, you know, they want to know you're going to be around for 20 years, right?" aria-label="回原文"></button> 公司当前最大的瓶颈不是需求——「需求已经完全超过了我们目前的规模」——而是**招聘**：保持极高的招人门槛，这是从 SpaceX 学到的另一课，要让公司到 500 人时，每个人环顾四周还是觉得「这是一家了不起的公司」。<button class="pd-ts" data-t="44:30" data-who="未知" data-en="Currently, definitely hiring. We're, I think we have, at least my bet on the company is that we need to keep an extremely high bar and that just propagates all the way in until Revel is, you know, 200, 500 people." aria-label="回原文"></button> 招人标准里有个具体的信号：看候选人有没有副业项目，是不是那种热爱到业余还在造东西的人。<button class="pd-ts" data-t="26:29" data-who="未知" data-en="And yeah, I think there is, there's something really, it's actually what we look for in a lot of the people we're trying to hire at Rebel is people that are fundamentally builders." aria-label="回原文"></button>

Scott 自己就是这么长大的：在威斯康星和父亲的车库里造《疯狂麦克斯》式的越野遥控车，地下室用乐高建了一整座城市加空间站，大学时用尼加拉瓜本地能弄到的材料从零造风力涡轮机——磁铁得寄过去，其余全靠本地机加工，太阳能板支架是木头加废品站零件拼的。<button class="pd-ts" data-t="25:40" data-who="未知" data-en="I, I build all kinds of things with my, uh, my, my dad. So I grew up in Wisconsin. He had a workshop and we would just, I got really into RC cars and we would, I would build these like off-roading RC, like Mad Max creations." aria-label="回原文"></button> 他自认不是高中最好的学生，「一直都在高阶数学班，但除此之外就有点不感兴趣」，进了明尼苏达还是那种心态：「看看你左边，看看你右边，你们当中会有两个人毕不了业」——那种必须加倍证明自己的劲儿。<button class="pd-ts" data-t="33:19" data-who="未知" data-en="I wouldn't say I was the best student in high school. I was always in like advanced math, but otherwise somewhat disinterested. I think I had the same mentality going into Minnesota, honestly, as I thought joining." aria-label="回原文"></button> 25 岁以实习生身份混进 SpaceX,心态是「我要进去把所有人都卷赢」。<button class="pd-ts" data-t="32:45" data-who="未知" data-en="I think for whatever reason, I mean, I've tended to just go after, it's probably both the hardest thing, but also where I thought I could have the most impact. I mean, I joined SpaceX as a 25-year-old intern and I was like, I'm just going to go in and outwork everyone." aria-label="回原文"></button>

## 本集带走

- **AI 短期颠覆不了高后果软件**：浅层 web 应用危险了，但核反应堆控制系统的价值在审查、验证、数天级 CI 真机测试——AI 只是加速了「写」这一环，且在懂行的资深工程师手里威力最大。
- **下注的时机在最初，不在验证之后**：接住塔在 Starship 首飞前开建，Revel 三个人时押注 LLVM 自研语言——等飞起来再改，代价大得多；工程师天性保守，看不到拐角处自己的突破，领导者的作用是替团队扛住这份不确定。
- **让最懂硬件的人直接写控制代码**：硬件工程师最懂系统，却被迫把需求翻译给软件工程师——Falcon 9 一个加载程序翻译六个月，Revel 一小时；工具的终极形态是消除翻译层。
- **「编译通过即不崩溃」是控制系统的刚需**：12 小时测试毁于一个字符串插值错误，代价是硬件损坏加重测——运行时安全在这行不是锦上添花。
- **一个停滞四十年的市场，壁垒不是技术是经验**：这行缺的不是聪明人，是在 SpaceX 级别高压锅里亲手造过整套系统的人——孵化器型公司(如 SpaceX)会持续向外输出这种人和经验。
- **招人看副业项目**：本质上的 builder、热爱到业余还在造东西的人，会真正在意结果——这是早期创业公司最重要的信号。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">我不认为真的有人会把自己的职业生涯押在，比如说，用 vibe coding 写一个核反应堆或火箭引擎或某种后果非常严重的系统的控制系统上。</span>  
> *I don't think anyone's really going to kind of bet their career on like vibe coding a control system for let's say a nuclear reactor or a rocket engine or something that's very high consequence.*  
> <span class="qm">—— Scott Morton · [02:47]</span> ^q1

> <span class="qz">我在 SpaceX 亲眼见过这个问题。在 SpaceX 要做出好东西，我们只能全都自己造。</span>  
> *I saw this problem firsthand at SpaceX. To have something great at SpaceX, we had to build it all ourselves.*  
> <span class="qm">—— Scott Morton · [06:10]</span> ^q2

> <span class="qz">SpaceX 成功的最大关键之一就是 Elon 是那种会对他的团队下巨大赌注的人，相信我们能做到。</span>  
> *One of the biggest keys to SpaceX's success is just that Elon is one to make massive bets on his team, that we can do this.*  
> <span class="qm">—— Scott Morton · [15:37]</span> ^q3

> <span class="qz">也就是说，只要能编译通过，它就不会崩溃。而市面上没有任何一门语言能同时做到这三点。</span>  
> *So if it compiles, it cannot crash. And there's just no language out there that does all those three.*  
> <span class="qm">—— Scott Morton · [21:29]</span> ^q4

> <span class="qz">我认为不去全力推进是不行的。如果你认为某件事是正确的做事方式，你就应该说出来。</span>  
> *I think it's not okay to not push hard. If you think something is the right way to do things, you should say it.*  
> <span class="qm">—— Scott Morton · [35:39]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「创业与行业」挖下去**

- [[2025-07-03-lennys-ive-run-75-businesses-andrew-wilkinson|Andrew Wilkinson：别追咖啡馆，去找没人要的钓鱼洞]]<span class="pd-rz">同概念:vibe coding</span>
- [[2025-07-06-lennys-the-base44-bootstrapped-startup-success|一个人六个月做出八千万美元公司]]<span class="pd-rz">同概念:vibe coding</span>
- [[2026-06-16-devtools-swyx-aie|AI Engineer 大会背后的社区逻辑与创业生存法则]]<span class="pd-rz">同概念:vibe coding</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-02-12-lennys-engineers-are-becoming-sorcerers|OpenAI 内部怎么用 AI 写代码：从巫师比喻到一人独角兽的二阶效应]]<span class="pd-rz">同概念:vibe coding、CI/CD</span>
- [[2026-07-31-talks-fighting-slop-with-slop-vaibhav-gupta-bo|用 AI 对抗 AI：一种不用读代码的编程语言 BAML]]<span class="pd-rz">同概念:CI/CD、Python</span>
- [[2025-10-06-talks-agents-for-complex-software-engineering|Vibe debugging：代码生成之后，生产环境才是真正的硬仗]]<span class="pd-rz">同概念:vibe coding</span>

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
