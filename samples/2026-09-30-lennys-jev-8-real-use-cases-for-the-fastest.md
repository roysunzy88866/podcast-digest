---
title: 又快又免费的 Jev：让 AI 变成「最聪明的函数」
podcast: "Lenny's Podcast"
date: 2026-10-01
source_url: https://www.lennysnewsletter.com/p/jev-8-real-use-cases-for-the-fastest
duration: "46:04"
type: episode
cover: "#6366f1"
image: "/covers/2026-09-30-lennys-jev-8-real-use-cases-for-the-fastest.jpg"
description: 开发者 John Lindquist 演示他测试 TypeSafe AI 的决策模型 Jev 的 23 个 demo：实时语音待办、数据合并去重、棋局博弈、多智能体调度。
host: "[[Clara Vo]]"
cohosts: ["[[John Lindquist]]"]
companies: ["[[TypeSafe AI]]"]
concepts: ["[[Jev]]", "[[LLM]]", "[[函数调用]]", "[[智能体]]", "[[置信度分数]]", "[[路由器]]", "[[实时]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-09-30-lennys-jev-8-real-use-cases-for-the-fastest.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-30-lennys-jev-8-real-use-cases-for-the-fastest#post","headline":"又快又免费的 Jev：让 AI 变成「最聪明的函数」","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-30-lennys-jev-8-real-use-cases-for-the-fastest","mainEntityOfPage":"https://talk.solomind.cc/2026-09-30-lennys-jev-8-real-use-cases-for-the-fastest","description":"开发者 John Lindquist 演示他测试 TypeSafe AI 的决策模型 Jev 的 23 个 demo：实时语音待办、数据合并去重、棋局博弈、多智能体调度。","datePublished":"2026-10-01","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-30-lennys-jev-8-real-use-cases-for-the-fastest.jpg","isBasedOn":"https://www.lennysnewsletter.com/p/jev-8-real-use-cases-for-the-fastest","about":[{"@type":"Person","name":"Clara Vo"},{"@type":"Person","name":"John Lindquist"},{"@type":"Organization","name":"TypeSafe AI"},{"@type":"Thing","name":"Jev"},{"@type":"Thing","name":"LLM"},{"@type":"Thing","name":"函数调用 (function call)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"置信度分数 (confidence score)"},{"@type":"Thing","name":"路由器 (router)"},{"@type":"Thing","name":"实时 (real time)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"又快又免费的 Jev：让 AI 变成「最聪明的函数」","item":"https://talk.solomind.cc/2026-09-30-lennys-jev-8-real-use-cases-for-the-fastest"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>又快又免费的 Jev：让 AI 变成「最聪明的函数」</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 又快又免费的 Jev：让 AI 变成「最聪明的函数」

<div class="pd-byl"><b>John Lindquist</b> · 开发者 · 2026-10-01</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-30-lennys-jev-8-real-use-cases-for-the-fastest.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我想到我在这方面花的所有时间，还有我做过的几百个 demo，我想我一共只花了 73 美分。</div><div class="a">— John Lindquist <button class="pd-ts" data-t="02:46" data-who="John Lindquist" data-en="I think of all the time I've spent on this and the hundreds of demos I made, I think I've spent 73 cents on it." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Clara Vo]] · [[John Lindquist]]
>
> **公司** [[TypeSafe AI]]
>
> **概念** [[Jev]] · [[LLM]] · [[函数调用]] · [[智能体]] · [[置信度分数]] · [[路由器]] · [[实时]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/jev-8-real-use-cases-for-the-fastest)

这一集是 How I AI 的「[[Jev|Jev]] 周」特别节目。Jev 是 [[TypeSafe AI|TypeSafe AI]] 推出的新模型，和常见 [[LLM|LLM]] 完全不同——它不输出文本，输出的基本是决策、评分和是/否的概率：非结构化的语言进去，结构化、类型安全的数据出来。主持 [[Clara Vo|Clara Vo]] 是产品负责人，嘉宾 [[John Lindquist|John Lindquist]] 是开发者（上期做过本播客最受欢迎的一集），他手上有约 23 个 demo，全部围绕 Jev 展开。

**为什么兴奋：又快又便宜**

John 的核心答案是快和免费。以前给 LLM 发个基本请求、就为让它调个函数，得等一会儿；现在基本是即时的。

他做了几百个 demo，总共只花了 73 美分 <button class="pd-ts" data-t="02:31" data-who="John Lindquist" data-en="this framework, this way of thinking about building has gotten you excited? Fast and free are both amazing. If you've ever been tired..." aria-label="回原文"></button>。Clara 有同样的经历：跑两万多条记录，账单是 0.4 美分。

John 曾以为手头五个 GB 的 JSON 绝对不可能倒给 LLM——没那个预算——结果整个跑完只花了 40 美分、几分钟时间。Clara 总结：这个基本免费、快得不可思议的模型，让你能对以前认为「ROI 不值得」的数据做探索，打开了以前关着的门 <button class="pd-ts" data-t="04:11" data-who="Clara Vo" data-en="But then this model, which is fantastic. Basically free and incredibly fast allows you to do discovery over data in a way that feels like it's opening up my opportunities and allowing me to look at things" aria-label="回原文"></button>。

**Demo 一：[[实时|实时]]语音待办清单**

John 现场演示：对着应用说「预约牙医，移除」「买燕麦奶，完成」「审查 pull request，低优先级」——全程不停顿、不按回车，每句都被实时执行 <button class="pd-ts" data-t="06:21" data-who="John Lindquist" data-en="So let's go ahead and try this out right away. So traditional to-do app, we have a list of to-dos. And the fascinating thing here," aria-label="回原文"></button>。背后是多层分类的流水线：先分析听写本身是否有效，再判断它匹配列表里哪个任务，再判断要执行哪个操作，每一层都带[[置信度分数|置信度分数]]。

更妙的是，边听写它边判断「现在是否已有足够信息可以调用函数了」，所以你根本不用停顿。他反向构建这个应用：先定好「标记完成/删除/新增」这些最终函数，再倒推听写怎么选中它们，用 Opus 5.5 随手糊出来特别容易。日历、任何服务都在[[函数调用|函数调用]]或 MCP 背后，都能接进来——而这是任何人都能便宜甚至免费构建的东西 <button class="pd-ts" data-t="10:26" data-who="John Lindquist" data-en="Or MCPs or however you want to build it out. You could integrate anything with this and just have this top level dictation live inference running." aria-label="回原文"></button>。

**Demo 二：大规模数据合并**

这个 demo 处理混乱数据的经典痛点：同一个联系人录了两次、数据库里两条公司记录。Jev 遍历全部记录做两两比较——「Cedar Grove Office Products」和「Cedar Grove Office」显然该合并——把巨大数据集在几毫秒内合并 <button class="pd-ts" data-t="12:14" data-who="John Lindquist" data-en="or whatever. This can go through and go through all of the records and kind of merge those records together. So let's click on that." aria-label="回原文"></button>。

Clara 说这是她最喜欢的用例：对大量数据做两两比较来创建分组和聚类。数据量到 6 万或 60 万条时，配对在用这类模型之前贵得离谱。她还举了自己的例子：1Password 里约 2000 个密码散乱重复，用 Jev 加元数据配对合并会快得多。

实用细节有两个。一是置信度可调：可以设成「只在 99% 以上确定时才合并」，这是个能拧的旋钮 <button class="pd-ts" data-t="14:00" data-who="John Lindquist" data-en="Like if you want, you want them only to merge if you're like 99% or more confident, you can, you can set those parameters in there." aria-label="回原文"></button>。二是验证与解释的分工——跑完一轮后，可以用更聪明的 LLM 对结果做随机抽样甚至全量校验；Clara 补充还可以让模型解释「为什么判定这两条相同」，得到「定量匹配 + 定性解释」，而且用两个相对便宜的模型就够了 <button class="pd-ts" data-t="14:34" data-who="Clara Vo" data-en="One other thing you can do on that, in addition to validating the data pairs, is you can describe them. And so what I've done is do the pairs and then run." aria-label="回原文"></button>。

**Demo 三：Jev 当[[路由器|路由]]器**

John 展示了多层抽象：用户在任意输入框里输入，记不住应用叫什么也没关系——「to do」能匹配到「to-do-to」这个工具，然后还能继续「去待办应用，把这些 pull request 全标为低优先级」。本质是：先构建最小的工具，再在外面套一层 Jev 抽象来挑选用哪个工具，这层可以想要多少套多少 <button class="pd-ts" data-t="16:25" data-who="John Lindquist" data-en="And so if you think of this multi-step classification where you can build your smallest tools, And then build another abstraction of JEV around them where it can pick which of" aria-label="回原文"></button>。

Clara 的概括很精准：Jev 是一个非常非常快的路由器——拿到文本就路由到正确的工具，能推断到用户旅程的哪一步就直接构建出整条链再执行，不必走一步想一步 <button class="pd-ts" data-t="17:05" data-who="Clara Vo" data-en="What I would say is, like, Jev as a router is maybe, like, what's helpful. A very, very fast router. And so, you know, this use case, you're saying, like, as I have text, route to the right tool." aria-label="回原文"></button>。她甚至认为，如果决策模型保持快和便宜，会催生「延迟战争」：响应越快，能解锁的「像 if-else 语句一样的魔力」越多。

**Demo 四：Jev 执白子，LLM 执黑子下国际象棋**

这是 John 最想展示 Jev 对比传统模型的 demo：Jev 下白棋，OpenRouter 上一个免费的低推理 LLM（好像是 Kimi）下黑棋。Jev 思考所有可能走法、排出最高的三种、再从那里推演下一步，基于两步推理选最佳落子——而且全程在一秒以内 <button class="pd-ts" data-t="20:08" data-who="John Lindquist" data-en="and Jev are the white pieces, the LLM are the black pieces. And here, this is set so that Jev is able to think through all the possible moves," aria-label="回原文"></button>。

基准测试显示 Jev 平均走法快 10 倍、便宜 4 倍。快棋赛有 1 分钟计时器，Jev 能赢，LLM 又贵又未必更好。Clara 读出的关键：一是速度本身就是优势，10 倍不是渐进提升，它真正解锁了「实时」；二是可以在 Jev 收窄范围之后再叠加一个更聪明的模型，用缩小后的策略集更快做出更强的决策 <button class="pd-ts" data-t="22:09" data-who="Clara Vo" data-en="It's very obvious how much. I mean, 10x faster is not incremental. And so it really does unlock this concept of real time." aria-label="回原文"></button>。

这背后是一个通用判断：国际象棋、俄罗斯方块、你的数据结构和 API，全都是**有限的选项集合**——俄罗斯方块就是形状 4 个选项加左右约 10 个选项；网页看着像无限的像素画布，但 DOM 里一个页面可能就 10 个可点击按钮，所以 browser use 也能被 Jev 化解成一组快速决策。John 的经验法则：「一旦动作确定下来、你有了那个有限的范围，那就是决策模型能真正大放异彩的地方；LLM 更适合完全不知道想要什么动作、需要头脑风暴和创造的场景。」<button class="pd-ts" data-t="24:22" data-who="John Lindquist" data-en="But once the actions are set and you have that limited scope, that's where A decision model can really excel, at least from what I've experienced so far." aria-label="回原文"></button>

**Demo 五：多[[智能体|智能体]]不碰撞**

「每个 Wikipedia 页面都能点进 philosophy」的那个经典游戏，John 做成了 demo：给一个终点，Jev 通过 Wikipedia API 一路爬取找到路线。他真正偏爱的是用它表达一个工作场景：三个任务简报（送蓝色易碎箱到暂存区、送药到病房、检查泄漏）、三个智能体，每一步都由 Jev 控制它们尽快到达各自任务、且永不碰撞或互相干扰 <button class="pd-ts" data-t="29:04" data-who="John Lindquist" data-en="So mapping routes as well, like giving it a final destination and it can crawl its way there. This one is a favorite of mine because it represents, if you think of a," aria-label="回原文"></button>。

它不必提前规划全程，可以即时走一步查一步。John 认为随着并行智能体和集群越来越多，这个概念会越来越重要。

Clara 的提炼很妙：Jev 解锁了「高效的低效率」——把所有路线画出来、排序、再检查是否相撞，这本身挺低效，但过去我们只能把这些题扔给大 LLM 说「好好想」；现在可以瞬间评估所有选项、排名、遍历这个低效的选项宇宙然后得出正确结论 <button class="pd-ts" data-t="30:30" data-who="Clara Vo" data-en="Well, and what, you know, this made me think is Jev unlocks efficient inefficiency," aria-label="回原文"></button>。她的总结是：LLM 是生成式的，让你创造以前造不出的东西；Jev 让你能做那些**想做但过去太贵、太慢、不值得**的事——而那堆事里她还剩很多。

**演讲教练与实操坑**

最后一个 demo 是演讲教练：点开麦克风开始讲，给一份要点清单（播客要点、面试提纲都行），它听你说的一切、逐项打勾确认覆盖，还能加红色警告灯提醒「时间不多了，还有这些没讲」。Clara 说想象演讲备注随你讲逐项勾选、甚至替你翻页——这对讨厌提词器、又喜欢和观众互动的演讲者太有用了 <button class="pd-ts" data-t="34:45" data-who="John Lindquist" data-en="you know, you have limited time left. You still need to say all this sort of stuff. So this one speaks to me as a teacher, presenter, workshop getter." aria-label="回原文"></button>。技术上是移动窗口：逐词拼接、直到能采取行动的点就切成负载发给函数、存入历史（可撤销）、然后开新窗口。

关于不足：John 还没遇到 Jev 明显搞砸的任务（模型才发布几天），但见过有人只做单次分类就批评它不够好。他的答案是：它又快又免费，别怕多加一层分类，多跑几遍；等积累了足够多的数据、摸清了从一步到下一步的确切流程，再把那些层压缩成单层 <button class="pd-ts" data-t="38:14" data-who="John Lindquist" data-en="When I run into those scenarios, I'll do multi-pass where I'll do one classification layer and then another, and then another." aria-label="回原文"></button>。Clara 补充：你以为是是非题的调用，跑了发现其实该用选择题或打分题——多测几种提问方式能明显提高准确率。

**闪电问答：开发者角色的转折点**

聊到过去一年的变化，John 的答案出人意料：最近最有意思的事是买额外硬盘、在几台 Mac mini 之间分配工作、让 AI 盯着笔记本磁盘空间提醒「兄弟，该转给 SSD 了」。Clara 说他们俩是同一个人：她有置顶的 codex 聊天专门清理磁盘，还把一摞 Mac mini 设成远程代码机器。

但真正的重点是 John 观察到的范式转移：像 GrokBot 这类工具把「项目、文件结构、Git、版本控制」全藏到了智能体身后——你只有一个智能体列表，把研究、代码审查这些角色拉进群聊分任务就行。智能体成了最顶层，结构和代码反而是它们操心的事。

「我认为在我们与工具的关系上，这是非常重大的转折点」——除了给智能体买更多硬盘 <button class="pd-ts" data-t="43:21" data-who="John Lindquist" data-en="about The structures and the code and Git and versioning and all that. And I think it's a really big turning point in our relationships with our tools as we stop thinking about everything we thought about before other" aria-label="回原文"></button>。Clara 接了一句：从某种意义上说，管理者真的处于风险之中——组织设计和角色设计这些管理技能，现在正是你打造智能体时用得上的技能。

John 接下来几个月的全部精力放在 mega.dev——他和 Theo、Kent、Angie 一起做的课程兼工作坊，教你怎么「把智能体变成杠杆」。

## 本集带走

- **判据一句话：有限选项找 Jev，开放探索找 LLM。** 你的 API、页面按钮、游戏手柄看起来无限，实际都是有限的动作集合；动作一旦确定，决策模型又快又便宜地完胜，头脑风暴和创造性任务才轮到 LLM。
- **它不贵到可以「瞎试」：** 几百个 demo 总共 73 美分，五个 GB 的 JSON 跑一遍 40 美分。以前因为成本和速度不敢碰的数据探索，现在直接跑。
- **分类不够就加层，别放弃：** 单次遍历不够好是多步问题；先叠多层分类，攒够数据后再压缩成单层。是非题、选择题、打分题也值得换着试，提问方式对了准确率明显提升。
- **配对合并是杀手级场景：** 联系人去重、密码整理、数据对账——先 Jev 定量配对（可设置信度阈值，如 99% 才合并），再让便宜模型解释「为什么这两条相同」，定量 + 定性双保险。
- **速度本身就是产品能力：** 实时语音待办全程不停顿，靠的是模型边听边判断「信息够不够调函数」；快 10 倍意味着可以再叠加更聪明的模型收窄决策，实时和「延迟战争」是新的竞争维度。
- **多智能体调度正在到来：** 分任务、防碰撞、永不互相干扰文件——Jev 走一步查一步即可，不必提前规划全程；并行智能体越多，这种「高速裁判」越重要。

<div class="pd-sec pd-sec-q">全部金句 <span>12 条</span></div>

> <span class="qz">我想到我在这方面花的所有时间，还有我做过的几百个 demo，我想我一共只花了 73 美分。</span>  
> *I think of all the time I've spent on this and the hundreds of demos I made, I think I've spent 73 cents on it.*  
> <span class="qm">—— John Lindquist · [02:46]</span> ^q1

> <span class="qz">这个基本免费、快得难以置信的模型，让你能以全新的方式对数据进行探索，感觉就像它打开了我的机会之门，让我能去审视那些我以前认为 ROI 不高的东西。</span>  
> *Basically free and incredibly fast allows you to do discovery over data in a way that feels like it's opening up my opportunities and allowing me to look at things that I thought weren't high ROI before.*  
> <span class="qm">—— Clara Vo · [04:11]</span> ^q2

> <span class="qz">这里的力量在于这是人类在与机器对话：你已经把函数、API 等一切都设置好了，但你想用非结构化的数据与它们沟通。</span>  
> *And the power there is it's humans talking to machines, and they're the scenarios where you have functions and APIs and everything set up, but I want to communicate with them using unstructured data.*  
> <span class="qm">—— John Lindquist · [05:49]</span> ^q3

> <span class="qz">因为你注意到我整段讲话期间，从未停顿，从未按回车。它能够分类判断：这是一个我有足够信息采取行动的时刻吗？</span>  
> *Because you notice that entire time I was talking, I never paused, I never hit enter. It was able to classify, is this a moment where I have enough information to take action?*  
> <span class="qm">—— John Lindquist · [07:54]</span> ^q4

> <span class="qz">所以我觉得像 Jev 这样的决策模型，如果它们保持快速和便宜，可以成为一种新的方式来思考你用户体验的导航——无论是前端体验、开发者工具还是别的什么。</span>  
> *And so I think these decision models like Jev, if they remain fast and cheap, can be a new way to think about navigation of your user experience, whether that's a kind of like front-end experience or a dev tool or whatever it might be.*  
> <span class="qm">—— Clara Vo · [17:51]</span> ^q5

> <span class="qz">这里有一些基准测试，Jev 在平均走法上快了 10 倍，便宜了 4 倍。</span>  
> *it has some benchmarks over here that Jev was 10 times faster in the average move and it was four times cheaper.*  
> <span class="qm">—— John Lindquist · [21:41]</span> ^q6

> <span class="qz">但我认为我们将会看到延迟战争也真正升温——响应越快，你能解锁的、感觉像一个 if-else 语句的魔力就越多，越好。</span>  
> *But I think we're going to start to see like latency wars really heat up as well, which is like the faster the response, the more like more magic you can unlock that feels like an if else statement, the better.*  
> <span class="qm">—— Clara Vo · [22:42]</span> ^q7

> <span class="qz">但一旦动作确定下来，你有了那个有限的范围，那就是一个决策模型能真正大放异彩的地方——至少从我到目前为止的经历来看是这样。</span>  
> *But once the actions are set and you have that limited scope, that's where A decision model can really excel, at least from what I've experienced so far.*  
> <span class="qm">—— John Lindquist · [24:19]</span> ^q8

> <span class="qz">这让我想到 Jev 解锁了「高效的低效率」——把所有可能的路线都画出来、给它们排序、再仔细检查它们不会相撞，这确实有点低效。</span>  
> *this made me think is Jev unlocks efficient inefficiency, which is like, it is kind of like inefficient to... Map out all possible routes, rank them, double check that they're not going to collide.*  
> <span class="qm">—— Clara Vo · [30:30]</span> ^q9

> <span class="qz">说实话，它感觉更像编程——当看到出问题时，我感觉自己掌控力强得多，因为我知道它所有的选项，我知道我想要什么。</span>  
> *It feels much more like programming, to be honest, where I feel much more in control when I see something goes wrong because I know all of its options and I know what I want.*  
> <span class="qm">—— John Lindquist · [32:51]</span> ^q10

> <span class="qz">因为它又快又免费，别担心，就再加一层；然后随着时间推移、随着越来越多数据强化了从一步到下一步所需的确切流程，你可以把那些层压缩成单层。</span>  
> *because it's fast and free, don't worry about adding just another layer and then Over time, you could compress those down into a single layer as you get more and more data that reinforces what the exact flows are that you need to go from from step to step.*  
> <span class="qm">—— John Lindquist · [38:36]</span> ^q11

> <span class="qz">我认为在我们与工具的关系上，这是一个非常重大的转折点——我们不再思考以前思考的所有事情，除了给智能体买更多硬盘来用。</span>  
> *And I think it's a really big turning point in our relationships with our tools as we stop thinking about everything we thought about before other than buying more hard disks for agents to use.*  
> <span class="qm">—— John Lindquist · [43:21]</span> ^q12

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2024-06-21-talks-product-led-ai-mustafa-suleyman-on-defin|Mustafa Suleiman:数据是新的护城河——AI 创业者的机会地图]]<span class="pd-rz">同概念:函数调用 (function call)、智能体 (agent)、路由 (router)</span>
- [[2026-09-28-howiai-jev-for-beginners-how-to-use-it-and-what|Jev 决策模型:9 美分分析 2000 个 PR 的用法全解]]<span class="pd-rz">同概念:Jev、LLM、实时 (real time)</span>
- [[2025-10-26-lennys-how-block-is-becoming-the-most-ai-native|Block CTO：代码质量与产品成功毫无关系，打造 AI 原生公司靠的是组织重组]]<span class="pd-rz">同概念:LLM、智能体 (agent)、MCP</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:LLM、智能体 (agent)</span>
- [[2026-08-12-beyondcoding-wes-bos-how-developers-stand-out-when-ai|当所有人都在用智能体写代码，你靠什么脱颖而出：与 Wes 聊开发者的当下]]<span class="pd-rz">同概念:LLM、智能体 (agent)</span>
- [[2025-05-22-talks-mastering-claude-code-in-30-minutes|Claude Code 实战技巧：从提问到并行]]<span class="pd-rz">同概念:LLM、MCP</span>

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
