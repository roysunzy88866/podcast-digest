---
title: "AI 这么聪明,自动化去哪儿了?Jev 把智能装进软件本身"
podcast: The a16z Show
date: 2026-09-28
source_url: undefined
duration: "43:04"
type: episode
cover: "#64748b"
description: "TypeSafe 创始人 Diogo Almeida 与 a16z 的 Ben Horowitz、Martin Casado 对谈:为什么编码智能体没让软件更好,以及把 LLM 变成程序原语的 Jev 路线。"
host: "[[Ben Horowitz]]"
cohosts: ["[[Martin Casado]]", "[[Diogo Almeida]]"]
companies: ["[[TypeSafe]]", "[[Jev]]"]
concepts: ["[[自动化]]", "[[编码智能体]]", "[[智能软件]]", "[[可靠性]]", "[[RLHF]]", "[[分类器]]", "[[状态机]]", "[[每美元智能]]", "[[SaaS 末日]]", "[[概率编程]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-28-a16z-ai-can-write-code-why-isnt-software-bett#post","headline":"AI 这么聪明,自动化去哪儿了?Jev 把智能装进软件本身","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-28-a16z-ai-can-write-code-why-isnt-software-bett","mainEntityOfPage":"https://talk.solomind.cc/2026-09-28-a16z-ai-can-write-code-why-isnt-software-bett","description":"TypeSafe 创始人 Diogo Almeida 与 a16z 的 Ben Horowitz、Martin Casado 对谈:为什么编码智能体没让软件更好,以及把 LLM 变成程序原语的 Jev 路线。","datePublished":"2026-09-28","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Ben Horowitz"},{"@type":"Person","name":"Martin Casado"},{"@type":"Person","name":"Diogo Almeida"},{"@type":"Organization","name":"TypeSafe"},{"@type":"Organization","name":"Jev"},{"@type":"Thing","name":"自动化 (automation)"},{"@type":"Thing","name":"编码智能体 (coding agent)"},{"@type":"Thing","name":"智能软件 (smart software)"},{"@type":"Thing","name":"可靠性 (reliability)"},{"@type":"Thing","name":"RLHF"},{"@type":"Thing","name":"分类器 (classifier)"},{"@type":"Thing","name":"状态机 (state machine)"},{"@type":"Thing","name":"每美元智能 (intelligence per dollar)"},{"@type":"Thing","name":"SaaS 末日 (Saspocalypse)"},{"@type":"Thing","name":"概率编程 (probabilistic programming)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AI 这么聪明,自动化去哪儿了?Jev 把智能装进软件本身","item":"https://talk.solomind.cc/2026-09-28-a16z-ai-can-write-code-why-isnt-software-bett"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 这么聪明,自动化去哪儿了?Jev 把智能装进软件本身</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 这么聪明,自动化去哪儿了?Jev 把智能装进软件本身

<div class="pd-byl"><b>Diogo Almeida</b> · TypeSafe 创始人 · 2026-09-28</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-28-a16z-ai-can-write-code-why-isnt-software-bett.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">其实有人让我做过电梯演讲,而我往往絮絮叨叨讲不好,但我意识到我最喜欢的 Jev 电梯演讲就是:到底他妈的自动化都在哪儿?</div><div class="a">— Diogo Almeida <button class="pd-ts" data-t="02:23" data-who="Diogo Almeida" data-en="So, I was actually asked for like an elevator pitch, which I tend to ramble on and I don't do well, but like I realized my favorite elevator pitch for JEV is where the fuck is all the automation?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Ben Horowitz]] · [[Martin Casado]] · [[Diogo Almeida]]
>
> **公司** [[TypeSafe]] · [[Jev]]
>
> **概念** [[自动化]] · [[编码智能体]] · [[智能软件]] · [[可靠性]] · [[RLHF]] · [[分类器]] · [[状态机]] · [[每美元智能]] · [[SaaS 末日]] · [[概率编程]]

这一集聊的是 AI 圈一个很扎心的问题:AI 已经聪明得难以置信,为什么真正的[[自动化|自动化]]几乎没发生?说话的主角是 [[Diogo Almeida|Diogo Almeida]],他是 [[TypeSafe|TypeSafe]] 的创始人,早年在 OpenAI 做过 [[RLHF|RLHF]] 相关的工作。

他和 a16z 的 [[Ben Horowitz|Ben Horowitz]]、[[Martin Casado|Martin Casado]] 聊了他对 AI 改变计算的一种完全不同的愿景——不是用 AI 写更多和以前一样的软件,而是把智能直接装进软件本身。他的公司为此做的第一个模型叫 [[Jev|Jev]],发布后在开发者圈子里爆火。

Diogo 最喜欢的对 Jev 的电梯演讲就是那句开场白:「到底他妈的自动化都在哪儿?」AI 聪明得难以置信,但除了聊天机器人和[[编码智能体|编码智能体]],它在其他所有事情上都几乎没用——手握这么多未经雕琢的钻石,却没打磨好拿来干活。TypeSafe 的目标是「为软件做 AI」:让 AI 不仅服务人在环的场景,而是真正成为软件的一部分。

## 编码智能体 ≠ 自动化:他在纠正一个普遍误解

大家都会想:我们已经有 Claude Code、有 Codex 了,这不就是 AI 改变软件吗?Diogo 的回答是:这些工具确实很棒——他引用 Gary Tan 的说法,称它们是「即时软件」,可以即时生成、用自然语言编程——但它们写出来的代码,本质上还是人类十年前就会写的同一种代码,可能更好、可能更差,但仍然是老式的代码。

而他想要的是「[[智能软件|智能软件]]」:与其自动化软件工程,不如拓展软件本身能做的事,让那些本该可自动化的东西真正变得可自动化。一句话点破:编程本质上是「把有价值的东西超精细地指定出来,然后无限复制」,他想把这件事做得更多。

Ben Horowitz 把这个微妙的区别梳理了出来:编码智能体像是用一个更快、甚至可能没那么好的软件工程师,多少替代了现有工程师;而 Diogo 做的是超级赋能现有的软件工程师,让他们写出好得多、有趣得多的东西。

## Jev 到底是什么:一个能做决策的新原语

Jev 是个你放进代码里的新原语(原语=编程里可复用的基础构件)。Diogo 的描述是:把它想成一个库,你可以用自然语言描述你想要什么,给它一个[[状态机|状态机]](程序里一组明确的状态和转换规则),它就会以一定的置信度选择要做什么——这是我们以前没有过的东西。

有人质疑「Jev 不就是个[[分类器|分类器]]吗?」他的回应很爽快:Jev 绝对是个分类器,而分类器很棒——分类器的设计目的就是有用。

它的接口和传统机器学习概念一脉相承,因为这些概念本来就来自务实的、想让系统跑起来的人。他甚至猜测,Jev 可能比让一个 2019 年的机器学习工程师团队帮你做这些东西更好,而且你可以即时编写它——毕竟 2019 年并没有那么多好的 ML 团队。

在设计取舍上,他的北极星指标是「[[每美元智能|每美元智能]]」(intelligence per dollar)——短期看「每秒智能」可能更有价值,但他从「AI 驱动的经济革命」往回推导:想象未来所有软件里都布满了 AI,对 AI 的调用里供人类消费的、需要聊天式交互的只占极小比例,绝大部分调用发生在程序内部构造里(像 TCP/IP 深处的那种)。所以 Jev 虽然会从第一层开始,但瞄准的是「 guts 」——程序的内部。务实地讲,一段时间内它会更像一个数据库,而不是标准库的东西,但他很希望它最终成为标准库。

## 这个直觉从哪来:从「RLHF 泛化了」到世界观崩塌

Diogo 进 AI 的路有点不寻常:数学竞赛选手出身,但真正让他入行的是靠「自动化把活儿干成」赢了一次 Kaggle 竞赛,主办方(Isabel Guillon)看他不像研究社区的人,却收养了他,把他推进了 AI 圈。之后他和 Jeremy Howard 一起创业、在 Google Brain 待过、退休了一阵,最后觉得「AI 真他妈有意思」而加入 OpenAI。

真正的转折发生在 ChatGPT 发布之前:团队做 RLHF(用人类反馈做强化学习训练模型)时,他对模型的泛化能力感到非常惊喜——他们甚至用「为什么在冥想之前吃袜子很重要?」这种事先确认互联网上没有的问题去测试,模型也能给出看起来像人类的合理回答。

那一刻他顿悟:这不是作弊。他当时是「能力派」,为发布那个模型做了很多工作,真心觉得它有相当大的机会成为 AGI——而当它没成为的时候,「我的整个世界观崩塌了」。

从此他反复琢磨:为什么这个东西没有更有用?他的判断很尖锐:自从 RLHF 之后,整个行业分裂成了巨大的「过度承诺、交付不足」。

因为人类在评估模型好坏,人类是裁判,模型看起来很好——但大家一直在优化那个裁判,而不是自动化那一部分,这恰恰是缺失的东西。他说可以拿一个反差当试金石:两年前 GPQA(Google 搜索都答不了的问答基准)就被说解决了,但我们仍然搞不定一个得来速;OpenAI 从 2020 年起就一直在尝试自动化客服,至今没有成。

主持人 Martin 提出了一个反驳:现实世界分布重尾、例外多、没有全部数据,会不会只是因为模型没在那个分布上训练?Diogo 不完全买账:长尾当然存在,但不需要自动化整个长尾——构建可靠的软件始终是一种投资,对做自动化的人来说这该是个 ROI 决策。

他引用程序员三大美德里的「懒惰」:愿意花 10 个小时把一个 5 分钟的任务做成瞬间完成、再也不用做第二遍。作为一个基准,看看我们能不能自动化那些看起来真的应该能被 AI 自动化的东西,是有用的。

## 可靠性是 Jev 的本质,不是锦上添花

Jev 的爆火完全出乎 Diogo 的预料——他说如果有人预料到一个「面向开发者的 ChatGPT」会这样,那这人大概是疯了。但他想强调的是这次发布背后多年的血汗:他对[[可靠性|可靠性]]的在乎程度非常大,「可靠性就是这个东西的本质」;如果你不理解这一点,就很难做出一个只跑分漂亮的模仿品。他们本来可以早很多就发布,但没这么做。

在他那里可靠性有清晰的分层:正常运行时间是 uptime/SLA;每次返回完全一样是确定性——那对单元测试有用,对真实系统没用(给 prompt 加个 UUID,功能上相同,结果不该变);他要的是稳健性——每次都有相似的智能水平。再往上一层他还没找到名字:它不必每次是相似的函数,但它每次都需要是聪明的——像个正常人处在那个情境里会有的、可以被理解的想法。

他认为可靠性的每一个「九」都会极其有价值,因为它会直接启用新的应用。而他心中可靠性的最高荣誉,是达到人们可以在不运行示例查询的情况下针对 Jev 编程——你只是信任它,进入永续心流,创造出疯狂的软件。

至于编码智能体,他的评价是:非常擅长语法,不擅长语义,在架构上「糟糕得难以置信」——而架构是软件中最具人类创造性的部分。Jev 几乎肯定不在编码模型的分布内,所以当它进入分布内,让智能体去做语法工作他完全没有意见。

## 反向 SaaS 末日:软件会突然变得更有用

市场现象很有趣:编码智能体问世时是「[[SaaS 末日|SaaS 末日]]」,SaaS 估值跌穿地板;Jev 问世后,每家 SaaS 公司都说这是有史以来最伟大的东西。Diogo 说这很自然:SaaS 末日那个叙事里,「软件非常便宜」他可以相信,「容易复制」他不信——很多东西发生在表象之下。

他觉得 SaaS 仍在提供和以前同样的价值,也许只是市场害怕了;而 SaaS 将是整个 AI 游戏中最大的赢家之一,因为它们最有条件知道该自动化哪些工作流、人们需要什么,而且软件始终是一项资本支出投资——提前投入,把更好的体验分发给庞大的用户群。就能力博弈而言,他会是一场「反向 saspocalypse」,甚至有人现场给它起名 Sassapalooza。

具体到产品形态,他有一个梦想:多选题表单直接消失——它们本质上就是把软件已有的自然语言映射成结构化输出,这还是上世纪 80 年代的东西(主持人 Martin 补充:那叫 4GL,第四代语言)。「按我的意思去做」(do what I mean) 将被提升到绝对的新高度。他还举过一个让他惊叹的用例:有人用语音控制电脑,Jev 在持续判断「这是一条命令,还是在插入文本」——他觉得界面可能就此彻底改变。

Ben Horowitz 给出了本集最深的收束:如果你真的去看一家大公司的平均 PR(代码提交),大概就 10 行——用 AI 生成软件,你自动化的是 10 行代码;它没有给软件提供新能力。而 Jev 这种「把自然语言理解、推理能力嫁接到状态机上」的原语,意味着应用会因此拥有全新功能——「很可能的情况就是,软件真的会变得更好」。Diogo 说,如果人们把这当作要点,将是对他们所做的事有史以来最大的赞美。

Martin 还指出了更远的地平线:这可能开启一个完整的[[概率编程|概率编程]]时代——这门学科的巨大历史基本在 70 年代就消亡了。Diogo 对生物启发式的说法不感冒(「我的标签是不可思议的实用主义」,生物启发从来没用成功过,它的作用只是激励疯子几十年如一日研究直到成功),但他确实认为,当系统型工程师在极端系统里拥有各种成本/速度档位的智能时,那些「只要一个近似猜测来乐观路由流量」的疯狂用法会成为可能。好消息是:我们有了一个新原语,可以重新构建系统——从大型机到客户端服务器,我们周期性地做这件事;而且由于网络安全问题,关键基础设施可能本来就得重建一遍。

## 本集带走

- **区分「即时软件」和「智能软件」**:Claude Code、Codex 写得再快,产出的仍是十年前那种同构的代码——自动化的是写代码这个动作,不是软件的能力。Jev 路线是往代码里放一个新原语:自然语言描述意图 + 状态机 + 置信度,让程序自己会做决策。
- **用「能否自动化真实生产任务」当试金石**:别被「数学/GPQA 已解决」的叙事带跑——连得来速和客服(OpenAI 从 2020 年试到现在)都搞不定,说明行业一直在优化「人类裁判觉得好」,而不是自动化本身。
- **可靠性分层来看**:可用性(SLA)≠ 确定性(只对单元测试有用)≠ 稳健性(每次同样聪明)≠ 更高一层「每次都聪明得可以理解」。目标状态是开发者不跑示例查询就敢针对模型编程。
- **对 SaaS 别太悲观**:软件壁垒在表象之下、不易复制;最懂用户工作流的 SaaS 公司恰恰最有条件把智能嵌进产品,「反向 SaaS 末日」可能才是能力层面的走向。
- **判断编码智能体的分工**:它们擅长语法、弱在语义、架构上最差——架构才是人类该守住的创造性部分。

<div class="pd-sec pd-sec-q">全部金句 <span>15 条</span></div>

> <span class="qz">其实有人让我做过电梯演讲,而我往往絮絮叨叨讲不好,但我意识到我最喜欢的 Jev 电梯演讲就是:到底他妈的自动化都在哪儿?</span>  
> *So, I was actually asked for like an elevator pitch, which I tend to ramble on and I don't do well, but like I realized my favorite elevator pitch for JEV is where the fuck is all the automation?*  
> <span class="qm">—— Diogo Almeida · [02:23]</span> ^q1

> <span class="qz">我真正想要的是智能软件。与其自动化软件工程,我想拓展软件本身能做的事,让那些本该可自动化的东西真正变得可自动化。</span>  
> *What I want instead is smart software. Like instead of automating software engineering, I want to expand what software itself can do such that things that should be automatable can then be automatable.*  
> <span class="qm">—— Diogo Almeida · [04:01]</span> ^q2

> <span class="qz">编程本质上是把有价值的东西超精细地指定出来,然后无限复制它们。这太酷了,我只想把这件事做得更多。</span>  
> *But like programming is like hyper specifying like valuable things and then infinitely replicating them. It's so freaking cool and I want to just make that more.*  
> <span class="qm">—— Diogo Almeida · [04:25]</span> ^q3

> <span class="qz">而且很离谱的是,AI 这么酷,而软件这 10 年却毫无变化。对我来说,这一点没人能把这两者调和起来。</span>  
> *And also it's wild that AI is so cool and software has been unchanged in 10 years. You know, like that to me, like no one can square this together.*  
> <span class="qm">—— Diogo Almeida · [06:15]</span> ^q4

> <span class="qz">但目前,每美元智能是我的北极星指标。说清楚,这可能是错的。短期来看,每秒智能可能更有价值。</span>  
> *But like intelligence per dollar is my North Star right now. And it could be wrong, just to be clear. Intelligence per second might be more valuable in the short term.*  
> <span class="qm">—— Diogo Almeida · [08:22]</span> ^q5

> <span class="qz">我真的觉得那个模型有相当大的机会成为 AGI。而当它没成为的时候,那就是我整个世界观崩塌的时刻。</span>  
> *I really thought that that model had like a decent chance of being AGI. And when it didn't, that was like when my whole world came crashing down.*  
> <span class="qm">—— Diogo Almeida · [18:54]</span> ^q6

> <span class="qz">我觉得 GPT-3 在那个时候其实是相当有校准的。但因为是人类在评估模型有多好,它看起来非常好,因为人类是裁判,但我们一直在优化那个裁判,而不是自动化那一部分。</span>  
> *I think GPT-3 was actually quite calibrated back in that day. But because humans evaluate how good the models are, it looks really good because they are the judge, but we've been optimizing that judge instead of the automation part.*  
> <span class="qm">—— Diogo Almeida · [20:52]</span> ^q7

> <span class="qz">就像,你真的要告诉我数学已经被解决了,或者说甚至两年前,GPQA 那种 Google 搜索都答不了的问答已经被解决了,但我们仍然搞不定一个得来速,对吧?</span>  
> *Like, are you really telling me that math is solved or like even like two years ago, GPQA, that Google proof question answering is solved, but we still can't handle a drive-through, right?*  
> <span class="qm">—— Diogo Almeida · [21:35]</span> ^q8

> <span class="qz">但它讲的是那种懒惰,愿意花 10 个小时去把一个 5 分钟的任务做成瞬间完成,而且再也不用做第二遍。</span>  
> *But it's about the laziness to spend 10 hours to do the five-minute task instantly and to never have to do it again.*  
> <span class="qm">—— Diogo Almeida · [23:11]</span> ^q9

> <span class="qz">可靠性就是这个东西的本质。如果你不理解这一点,就很难做出一个只在跑分上模仿的产品。</span>  
> *Like, reliability is what this thing is. If you don't understand that, it'll be very hard to make, like, a copycat that's benchmarked.*  
> <span class="qm">—— Diogo Almeida · [26:02]</span> ^q10

> <span class="qz">我感觉可靠性的每一个九都会对所有人极其有价值,即使从市值角度看它不是最有价值的东西,因为它会直接启用新的应用。</span>  
> *I feel like every nine of reliability is going to be so valuable for everyone, even if it's not the most valuable thing market cap wise, because it will just enable new applications.*  
> <span class="qm">—— Diogo Almeida · [26:11]</span> ^q11

> <span class="qz">它们不擅长语义。我会说它们在架构方面糟糕得难以置信。对我来说,架构是软件中最具人类创造性的部分。</span>  
> *They're bad at semantics. I would say incredibly bad at architecture. So like to me, architecture is like the most human creative part of software.*  
> <span class="qm">—— Diogo Almeida · [29:08]</span> ^q12

> <span class="qz">但我认为 SaaS 将是整个 AI 游戏中最大的赢家之一。</span>  
> *But I think that SAS will be one of the largest winners of like the whole AI game.*  
> <span class="qm">—— Diogo Almeida · [31:09]</span> ^q13

> <span class="qz">甚至在 Jev 之前,我都从没意识到:不管你用多少 AI 编码智能体,软件实际上并没有变得更好。也许你写得更快了。甚至可以说它在变得更糟,因为监督更少了。</span>  
> *And even before Jeff, it didn't even occur to me that it doesn't matter how much AI coding agents you use, the software actually isn't getting better. Maybe you're writing it faster. It's arguably getting worse just because there's less oversight.*  
> <span class="qm">—— Martin Casado · [34:25]</span> ^q14

> <span class="qz">想象一下,如果所有技术都做你所意。那不是科幻。看看 AI 有多聪明,对吧?</span>  
> *Imagine if all technology just did what you mean. That's not sci-fi. Look at how smart AI is, right?*  
> <span class="qm">—— Diogo Almeida · [41:52]</span> ^q15

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai|AI 为什么这么聪明，却干不了保险核保？]]<span class="pd-rz">同嘉宾:Diogo Almeida · 同公司:Jev、TypeSafe、Claude Code、OpenAI · 同概念:RLHF、分类器 (classifier)、可靠性 (reliability)</span>
- [[2026-09-28-howiai-jev-for-beginners-how-to-use-it-and-what|Jev 决策模型:9 美分分析 2000 个 PR 的用法全解]]<span class="pd-rz">同公司:Jev、TypeSafe、Claude Code、Codex</span>
- [[2026-09-12-a16z-why-companies-are-becoming-a-series-of-l|A16Z 消费投资合伙人 Anish Acharya：别怕“永久下层”，公司正在变成一串循环]]<span class="pd-rz">同公司:Claude Code、Codex、OpenAI · 同概念:编码智能体 (coding agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-21-latent-jev|Jev 背后的人:Diogo 谈为什么 AI 应该像数据库而不是同事]]<span class="pd-rz">同嘉宾:Diogo Almeida · 同公司:Jev、TypeSafe、OpenAI · 同概念:RLHF、编码智能体 (coding agent)</span>
- [[2026-08-27-a16z-inside-cursor-the-anatomy-of-a-generatio|a16z 三位投资人复盘 Cursor 早期关键决策]]<span class="pd-rz">同嘉宾:Martin Casado · 同公司:Claude Code、OpenAI</span>
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同公司:Claude Code · 同概念:自动化 (automation)</span>

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
