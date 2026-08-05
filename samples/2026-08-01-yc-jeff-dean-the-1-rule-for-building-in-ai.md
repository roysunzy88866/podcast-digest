---
title: Jeff Dean 谈 AI 原生时代的创业经：找零个正确的甜点
podcast: Y Combinator Startup Podcast
date: 2026-08-01
source_url: undefined
duration: "57:05"
type: episode
cover: "#64748b"
image: "/covers/2026-08-01-yc-jeff-dean-the-1-rule-for-building-in-ai.jpg"
description: "从算盘数学到造 TPU,Jeff Dean 讲了为什么推理硬件、上下文工程和「挑选问题」是 AI 创业者的必修课。"
host: "[[Jeff Dean]]"
companies: ["[[Google]]"]
concepts: ["[[智能体]]", "[[多智能体系统]]", "[[专用推理硬件]]", "[[推理]]", "[[上下文工程]]", "[[TPU]]", "[[MapReduce]]", "[[蒸馏]]", "[[AlphaFold]]", "[[Gemini]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Jeff Dean 谈 AI 原生时代的创业经：找零个正确的甜点</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# Jeff Dean 谈 AI 原生时代的创业经：找零个正确的甜点

<div class="pd-byl"><b>Jeff Dean</b> · Google 传奇工程师 · 2026-08-01</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-01-yc-jeff-dean-the-1-rule-for-building-in-ai.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">可能有一点是人们还没有完全意识到,拥有基于智能体的系统是多么可能,这些系统不仅可以针对你关心的问题运行一两个小时,而且在某些问题领域,并且在拥有高能力模型作为底层支撑的情况下,你可以让它们运行几天或几周,并完成真正非常复杂的任务。</div><div class="a">— Jeff Dean <button class="pd-ts" data-t="04:55" data-who="Jeff Dean" data-en="Probably one thing is people don't quite realize how possible it is to have agent-based systems that can run not just for an hour or two hours on a problem you care about, but for some problem domains and with highly capable models underlying them, you can get them to run for days or weeks and do really, really complicated tasks." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jeff Dean]]
>
> **公司** [[Google]]
>
> **概念** [[智能体]] · [[多智能体系统]] · [[专用推理硬件]] · [[推理]] · [[上下文工程]] · [[TPU]] · [[MapReduce]] · [[蒸馏]] · [[AlphaFold]] · [[Gemini]]

<div class="pd-tldr"><b>一句话</b>从算盘数学到造 TPU,Jeff Dean 讲了为什么推理硬件、上下文工程和「挑选问题」是 AI 创业者的必修课。</div>

把一种编程语言写的一整套软件全部换成另一种语言,大多数顶尖工程师要干几个月——但今天的 AI 模型可以同时派出去几十个[[智能体|智能体]],跑上几天甚至几周,自己改、自己测、自己修,最后把翻译好的新版本交到你手上。说这话的人是 [[Jeff Dean|Jeff Dean]],[[Google|Google]] 的大神级工程师,[[MapReduce|MapReduce]]、Bigtable、TensorFlow 和 [[TPU|TPU]] 全是他主导造的 [00:24]。在这一集访谈里,他讲了三件事:为什么我们这代人正站在[[专用推理硬件|专用推理硬件]]爆发的前夜;为什么「[[上下文工程|上下文工程]]」是新手中最容易上手的杠杆;以及在一个通用模型什么都能干一点的时代,两三个人的小团队究竟该挑什么样的问题去赢。最后他还聊了聊怎么通过疯狂的思想实验构建「品味」,以及他对未来创业者的终极建议:挑一个最重要的、别人做不了的问题,然后用余生去解决它。

说完了开场钩子,接下来是 Jeff Dean 的来头和这一集的完整导览。Jeff 是 Google 的传奇工程师,主持人开场就列了一长串他参与造的东西:MapReduce、Bigtable、TensorFlow、TPU、[[Gemini|Gemini]] [00:24]。这一集的对话主要分成几大块:首先是「算盘数学」——也就是快速估算——如何帮他预判了 TPU 的诞生,以及为什么 2026 年该做一次新的算盘数学。然后聊到他在 2025 年那个著名预测「AI 相当于初级工程师」的回看,以及他对 2027 年的新预测。接着是上下文工程、[[多智能体系统|多智能体系统]]、专用[[推理|推理]]硬件这些当下最热的工程话题。最后是给创业者的实操建议:去哪里找那些大厂不愿意做、但又能做出巨大价值的小众问题。

先把时间轴拉回到 Jeff Dean 做出那些著名预测的时刻。2025 年 5 月,他在 AI Ascent 大会上说,在处理基于智能体的、长时间运行的编程任务方面,模型已经达到了「初级工程师」的水平 [00:40]。回看这个预测,Jeff 承认他低估了一件事:做越来越复杂任务的能力,增长速度比他预想的还要快 [01:24]。更重要的是,在编码之外,这些基于智能体的系统正在其他领域大放异彩 [01:30]。主持人追问他 2027 年的新预测,Jeff 给出的答案听起来有点学术但极其大胆:你会看到 ML 系统本身被高度自动化——模型自己把大问题拆成子问题,在紧凑的自动化实验循环里不断试错,把结果拼起来,最后产出一个更好的自己 [01:51]。

那么,这种高度自动化的「自举」循环,到底什么时候能真正跑起来?这正是下一个话题的核心。Jeff 指出,科学方法的基础其实就是一个「提出实验、运行实验、评估实验」的循环 [42:39]。现在的关键突破在于,我们能把这个循环的延迟压到极低,让它自动跑成千上万次。他举了量子化学的例子:以前理解一个分子的属性,要跑一整晚昂贵的密度泛函理论模拟器;他的同事们用这些模拟器的输出去训练一个神经网络近似模型,结果造出了一个快了 300,000 倍、几乎一样准确的验证器 [45:17]。这意味着以前要花六个月凑计算资源才能做完的筛选,现在你可以吃完一顿午饭就做完 [45:37]。把这种超高速验证器接入多智能体的编排框架,就是他眼中最激动人心的未来。

但要把这个自动化循环真正跑起来,第一步得先把硬件搞定。这就要回到 Jeff Dean 最拿手的绝活:「算盘数学」(back of the envelope calculation),也就是在脑子里或餐巾纸上快速估算一个系统的瓶颈和成本。主持人讲了个著名故事:2013 年 Google 的语音识别刚有起色,Jeff 一算发现,如果每个用户每天只用三分钟,现有 CPU 根本扛不住,得把服务器机群翻倍 [06:29]。他的解法不是买更多 CPU,而是造了一种极度专用的芯片——只做低精度线性代数,其他什么都干不了,但这正是机器学习的核心 [07:45]。这块芯片就是 TPU 的起源,几年后,它的能效比当时的 CPU 和 GPU 高出 30 到 80 倍,延迟还低了 20 到 30 倍 [08:12]。Jeff 现在做的算盘数学换新内容了:在 AI 时代,真正重要的数字是内存和乘法单元之间的带宽、芯片间的互联带宽,以及一次乘法运算到底要花多少能量 [11:09]。他特别强调了一个常被忽视的鸿沟:做一次计算只要一皮焦,但把数据搬进处理器,能耗是计算的 1000 倍 [12:15]。很多人以为模型训练必须做大批次是「模型问题」,其实这是个彻头彻尾的能量搬运问题 [14:01]。

既然数据搬运这么贵,那能不能把硬件做得更极端、更专门化?这引出了 Jeff 眼中当前最被低估的机会:专用推理硬件。他算了一笔账:训练对延迟没那么敏感,但推理(也就是模型给出回答的过程)对延迟极其敏感 [14:45]。如果你想追求极低的延迟,大批次处理就不管用了,因为你要等凑齐一大批请求才能一起算。Jeff 认为现在还有巨大的空间去为推理专门定制硬件,甚至极端到只支持某一种你确信有用的精度,别的统统砍掉 [15:02]。他抛出了一个极具冲击力的反问:想象一下,如果推理的延迟能比现在好 50 倍,你能做出什么新产品? [04:30]

然而,光有更快的硬件还不够,怎么用好现有的模型,其实是个更大的杠杆。这正是「上下文工程」登场的地方。Jeff 指出,很多人误以为 AI 进步仅仅是模型变大。但实际上,真正的系统是由模型、工具、检索和记忆共同组成的 [16:42]。模型在训练时见过的数据,是被搅成一锅千亿参数的「汤」,模模糊糊;而你直接喂给它的上下文,对它来说是极其清晰的 [17:13]。所以,怎么编排工具调用、怎么检索信息,才是决定成败的关键。他特别点出,这件事不需要你有多少 GPU,只要有 Gemini 的 API,谁都能做 [18:27]。他自己就是这么干的:他和搭档 Sanjay 写了一个「技能」,教模型像他们一样去做底层代码的性能优化——先跑微基准测试(一种测量小段代码耗时的工具),改代码,再测,再改 [20:30]。模型只要拿到这种包含人类专家经验的「技能」,就能自己闭环迭代。

闭环说起来容易,但很多人发现,智能体跑到第 30、40 步就「脱轨」了。这是为什么?Jeff 的诊断很直接:因为模型走到了它训练数据没覆盖的「分布外」地带,性能会突然暴跌 [23:07]。怎么破?他支了两招:第一,给模型清晰的「技能」和护栏,把它死死按在它擅长的那条光明大道上 [23:31];第二,也是更重要的,用多智能体系统去「搜索」解法。派几个智能体分头试不同路径,再让另一个模型当裁判,只留有用的,扔掉脱轨的 [23:41]。这种在推理时多算几条路、并行搜索的技巧,是他眼中让长流程智能体保持靠谱的最强武器 [24:12]。主持人好奇他内部怎么落地这套玩法。Jeff 说,在 Google 内部,他们给智能体装满了各种技能,从抓取专有日志到代码审查,让基础模型即便没见过这些内部系统,也能靠「技能说明书」熟练操作 [24:35]。

工具变了,人的活法也变了。如果智能体这么能干,人还能干什么?这正是下一个话题。Jeff 和搭档还把这套优化经验写成了一份叫《Performance Hints》的 30 页文档 [21:40]。主持人打趣说,只要把这文档喂给模型,人人都能像 Jeff Dean 一样优化代码。但话锋一转:如果未来所有代码都是成百上千个智能体写的,什么才是人的稀缺能力?Jeff 的答案出人意料地简单——是「品味」,也就是挑选「做什么」的高层智慧 [34:07]。他打了个比方:研究员手里有再多工具,最大的战争永远是「该花时间解决哪个问题」。干得漂亮但选了个无聊的问题,远不如选对问题然后解出它 [34:27]。他给了三个练「品味」的实操方法:第一,多攒经验,留意那些「差点就能拼出来」的开放问题;第二,记下你认为未来一年会火的事,一年后回过头来打分,看看自己的判断准不准 [36:00];第三,也是最有趣的,多做疯狂的思想实验,去推翻那些大家习以为常的假设。

思想实验听着玄,但 Jeff 是真靠这个造出过改变世界的系统的。他抛了一个极其疯狂的实验:过去 60 年,芯片制造业都在拼命造「绝不犯错」的晶体管;但如果我们换个思路,接受「每天错 20 次」的晶体管,会怎样? [38:34] 硬件设计会完全颠覆,可能要像人类大脑那样,靠发送多重冗余信号来保证重要信息送达 [39:45]。这听着像天方夜谭,但 TPU 和 MapReduce 都是这么来的。当年做 TPU,就是在机器学习还没今天这么火的时候,赌了一个极度小众的硬件方向 [40:13];做 MapReduce,是因为他和同事写够了各种为了容错和并行而臃肿不堪的代码,突然灵光一闪,想起了函数式编程,把容错这些脏活全抽离到底层库,让上层代码干净得只剩业务逻辑 [41:25]。这不仅是技术突破,更是对「理所当然」的叛逆。

那么,两三个人的小团队,到底该拿这些武器去打哪里?这是全场最实操的一段。Google 这种大厂显然会继续造超通用的 Gemini 模型,但这恰恰是小团队的机会。Jeff 给了一个非常精准的测试尺子:拿当前最强的通用模型去试你想做的事,如果它干得有点起色但还不够好,那千万别做——因为半年后它就会变好,把你碾平。如果它彻底失败,成功率只有 0% 或 1%,那才是好机会 [28:46]。怎么找这种机会?Jeff 指了两条路:一是通用模型摸不到的数据,比如帮你整理极私人的信息 [29:16];二是像 [[AlphaFold|AlphaFold]] 那样,为某个硬核领域(比如材料科学或芯片设计)训练一个极度精准的小众模型 [30:30]。除了选对问题,怎么管理成百上千个虚拟员工也是一门必修课。Jeff 说,秘诀就是写清晰到极致的规格说明 [31:49]。有意思的是,现在代码是智能体写了,但「写清楚需求」这件事的重要性反而比以前更高了——因为你面对的不再是会追问我意图的聪明同事,而是一个只会照着字面意思去推断的机器 [32:36]。他举了个绝佳的例子:为什么现在的模型特别擅长把 Python 代码翻译成 Go?因为整个 Python 程序本身就是一份完美、详尽的「规格说明书」,模型只需照着测、照着改,直到两个版本行为完全一致 [33:02]。

说完了怎么带兵打仗,最后聊聊心态和选人。搞创新的人免不了被拒。Jeff 讲了个黑色幽默的故事:2014 年他和图灵奖得主 Hinton 写了篇关于「[[蒸馏|蒸馏]]」(用大模型教小模型,让小模型又快又便宜)的论文,结果被 NeurIPS 拒了,理由是「不太可能有重大影响」 [48:31]。这篇如今被业界奉为圭臬的论文,正是 Gemini 的 Flash 版本(又快又轻量)能这么强的技术基础 [49:34]。Jeff 的教训很简单:被拒了就发到网上,继续干,真有影响大家会用 [49:29]。如果把你扔回 1999 年,你会去大厂还是创业?Jeff 说两条路都好,但唯一的标准是问自己:如果这件事做成了,世界是会真真切切地变好,还是只是「哦,挺酷的」?如果是后者,就别浪费时间 [52:59]。至于找合伙人,他的标准很有人情味:技能互补、自我意识低,最重要的是——你得喜欢跟他们待在一起,因为你们要一起蹚过无数个难熬的坑 [54:13]。把你的职业生涯当成一条工具腰带,每段经历都是在往里塞新工具,你永远不知道下个问题会需要这四把工具还是那三把 [54:47]。

> 【背景】主持人开头提到的「Jeff、Sanjay」指的是 Jeff Dean 和他的长期搭档 Sanjay Ghemawat,两人在 Google 一起写过大量基础系统代码。文中提到 Go,是一种 Google 开发的编程语言。

## 本集带走

最后收个尾,这一集值得带走的是几个核心判断。第一,推理硬件是下一个大 frontier,数据搬运的能耗是计算的 1000 倍,谁能把专用推理芯片做到极致,谁就能解锁 50 倍低延迟带来的全新产品形态。第二,上下文工程是人人的杠杆,你不需要海量 GPU 去从头训练模型,只要把工具、检索和技能说明书喂给它,一个小团队就能做出大厂通用模型做不到的精准体验。第三,管理智能体的秘诀就是极度清晰的规格说明,你要把模棱两可的需求,翻译成机器不会误解的边界条件。第四,选对问题是终极品味,别挑通用模型已经能做到 20% 的事,去挑那些它们彻底失败、或者你能独占私域数据的窄门。第五,多做疯狂的思想实验,去质疑那些 60 年来天经地义的假设(比如晶体管绝对不能出错),因为 MapReduce 和 TPU 都是这么叛逆出来的。最后,Jeff 留下的终极问题:如果这件事做成了,世界是会真切变好,还是只是「挺酷」?把这个问题问到底,你的职业生涯这条工具腰带,自然会挂满最趁手的家伙。

<div class="pd-sec">全部金句 <span>7 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">可能有一点是人们还没有完全意识到,拥有基于智能体的系统是多么可能,这些系统不仅可以针对你关心的问题运行一两个小时,而且在某些问题领域,并且在拥有高能力模型作为底层支撑的情况下,你可以让它们运行几天或几周,并完成真正非常复杂的任务。</span>  
> *Probably one thing is people don't quite realize how possible it is to have agent-based systems that can run not just for an hour or two hours on a problem you care about, but for some problem domains and with highly capable models underlying them, you can get them to run for days or weeks and do really, really complicated tasks.*  
> <span class="qm">—— Jeff Dean · [04:55]</span> ^q1

> <span class="qz">所以那个系统在几年后产生了一个芯片,其能效比当时的 CPU 和 GPU 高 30 到 80 倍,而且延迟也低得多,比如延迟降低了 20 到 30 倍。</span>  
> *And so that system produced a chip a couple of years later that was 30 to 80 times more energy efficient than CPUs and GPUs of the day, and also much, much lower latency, like 20 to 30x lower latency.*  
> <span class="qm">—— Jeff Dean · [08:12]</span> ^q2

> <span class="qz">我的意思是,如果你真正理解数据,你应该能够非常好地压缩它。</span>  
> *I mean, if you truly understand the data, you should be able to compress it really well.*  
> <span class="qm">—— Jeff Dean · [15:54]</span> ^q3

> <span class="qz">所以,你知道,要寻找模型成功率为 0% 或 1% 的东西,而不是 20%。</span>  
> *So, you know, look for something where the model succeeds 0% or 1% of the time, not 20%.*  
> <span class="qm">—— Jeff Dean · [28:46]</span> ^q4

> <span class="qz">如果你选对了问题并且成功解决了它,这比你出色地执行一个针对相当无聊问题的研究调查要好得多。</span>  
> *if you pick the problem well and you succeed in solving it, that's way better than if you delightfully execute a research investigation into a rather boring problem.*  
> <span class="qm">—— Jeff Dean · [34:27]</span> ^q5

> <span class="qz">一个有趣的思想实验是,如果你试图使用可能每天有 20 个错误而不是每百万年一个错误的晶体管构建一个系统,会发生什么。</span>  
> *an interesting thought experiment is what would happen if you tried to build a system out of transistors that might have 20 errors per day rather than one every million years.*  
> <span class="qm">—— Jeff Dean · [38:29]</span> ^q6

> <span class="qz">所以这现在是一个验证装置,但它不再需要一个晚上,他们制造了一个速度快 300,000 倍并且几乎与运行全尺寸模拟器一样准确的东西。</span>  
> *So this is now a validation device, but instead of it taking a night, they made something that was 300,000 times faster and nearly as accurate as running the full scale simulator.*  
> <span class="qm">—— Jeff Dean · [45:17]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-31-bigtech-leopold-blows-up-openai-drastically-cuts|「最纯 AGI 押注」爆仓始末与 AI 时代财富大洗牌]] —— 同公司:Google · 同概念:智能体 (agents)
- [[2026-07-08-latent-space-modal|不只做推理：Modal 如何跨界多节点训练与智能体云]] —— 同概念:推理 (inference)
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]] —— 同概念:Gemini

</div>
<div class="pd-ex">

**换个口味**

- [[2026-05-31-lennys-a-rational-conversation-on-where|AI 会改变一切，但也「只和互联网一样大」]] —— 同公司:Google · 同概念:Gemini
- [[2026-07-28-yc-sam-altman-never-a-better-time-to-do-a-s|Sam Altman 谈 AI 时代的创业法则:被全世界当成白痴是最大优势]] —— 同概念:推理 (inference)、智能体 (agents)
- [[2026-08-05-bigtech-how-the-ai-bet-pays-off-ai-lab-strategy|红杉合伙人 David Cahn：AI 需赚回 4 万亿，这场棋局没有中间态]] —— 同公司:Google · 同概念:TPU

</div>
</div>

*本集关键词:AI 硬件 · 专用推理硬件 · 智能体 · 上下文工程 · 创业方法*

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
    // 只搬搜索;阅读模式不并进顶栏(设计稿详情页顶栏只有分享+收藏,用户 2026-08-01 拍板摘掉)。
    ['.search'].forEach(function(sel){ grab(sel,acts); });
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
