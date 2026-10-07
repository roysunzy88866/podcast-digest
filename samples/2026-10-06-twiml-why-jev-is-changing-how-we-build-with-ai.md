---
title: 让 AI 可靠到像 SQL：Jev 与「机器原生智能」
podcast: The TWIML AI Podcast
date: 2026-10-07
source_url: undefined
duration: "90:09"
type: episode
cover: "#64748b"
image: "/covers/2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai.jpg"
description: TypeSafe 联合创始人兼 CEO、前 OpenAI RLHF 团队成员 Diogo Almeida 谈 Jev 的核心主张：AI 该为机器可执行的可靠决策而优化，而非生成供人消费的文本。
host: "[[Sam Charrington]]"
cohosts: ["[[Diogo Almeida]]"]
companies: ["[[TypeSafe]]", "[[OpenAI]]"]
concepts: ["[[Jev]]", "[[可靠性]]", "[[RLHF]]", "[[RLCD]]", "[[RLVR]]", "[[后训练]]", "[[校准]]", "[[分类器]]", "[[harness]]", "[[智能体]]", "[[Claude Code]]", "[[OpenClaw]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/covers/2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai#post","headline":"让 AI 可靠到像 SQL：Jev 与「机器原生智能」","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai","mainEntityOfPage":"https://talk.solomind.cc/2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai","description":"TypeSafe 联合创始人兼 CEO、前 OpenAI RLHF 团队成员 Diogo Almeida 谈 Jev 的核心主张：AI 该为机器可执行的可靠决策而优化，而非生成供人消费的文本。","datePublished":"2026-10-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai.jpg","about":[{"@type":"Person","name":"Sam Charrington"},{"@type":"Person","name":"Diogo Almeida"},{"@type":"Organization","name":"TypeSafe"},{"@type":"Organization","name":"OpenAI"},{"@type":"Thing","name":"Jev"},{"@type":"Thing","name":"可靠性 (reliability)"},{"@type":"Thing","name":"RLHF"},{"@type":"Thing","name":"RLCD"},{"@type":"Thing","name":"RLVR"},{"@type":"Thing","name":"后训练 (post-training)"},{"@type":"Thing","name":"校准 (calibration)"},{"@type":"Thing","name":"分类器 (classifier)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"OpenClaw"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"让 AI 可靠到像 SQL：Jev 与「机器原生智能」","item":"https://talk.solomind.cc/2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>让 AI 可靠到像 SQL：Jev 与「机器原生智能」</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 让 AI 可靠到像 SQL：Jev 与「机器原生智能」

<div class="pd-byl"><b>Diogo Almeida</b> · TypeSafe 联合创始人兼 CEO · 2026-10-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我觉得 AI 智慧得令人难以置信，但在你真正期望它有用的那些事情上，却又无用得令人难以置信。</div><div class="a">— Diogo Almeida <button class="pd-ts" data-t="01:52" data-who="Diogo Almeida" data-en="I think AI is just so unbelievably smart, yet so unbelievably useless at the kinds of things you'd really expect it to be useful for." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sam Charrington]] · [[Diogo Almeida]]
>
> **公司** [[TypeSafe]] · [[OpenAI]]
>
> **概念** [[Jev]] · [[可靠性]] · [[RLHF]] · [[RLCD]] · [[RLVR]] · [[后训练]] · [[校准]] · [[分类器]] · [[harness]] · [[智能体]] · [[Claude Code]] · [[OpenClaw]]

这一集聊的是三周前刚出隐、引爆 AI 圈的小模型 [[Jev|Jev]]——有人耸耸肩说「这不就是个[[分类器|分类器]]」，有人则把它当成让 AI 真正能自动化落地的关键一步。

说话的主角是 [[Diogo Almeida|Diogo Almeida]]，[[TypeSafe|TypeSafe]] 的联合创始人兼 CEO，此前在 [[OpenAI|OpenAI]] 待了四年半，是 InstructGPT 和 [[RLHF|RLHF]]（用人类反馈强化学习，让语言模型学会听话的那套方法）背后团队的成员。

他的电梯演讲很直接：「那些该死的自动化到底都在哪儿」<button class="pd-ts" data-t="01:47" data-who="Diogo Almeida" data-en="Here's Diogo on the gap he's trying to close. The elevator pitch I use for Jev is just where the f*** is all the automation. I think AI is just so unbelievably smart, yet so unbelievably useless at the kinds of things you'd really expect it to be useful for." aria-label="回原文"></button>。

在他看来，AI 智慧得令人难以置信——能解数学千禧年大奖难题——却在更换一张信用卡、做会计、跑客服这种事上没用得令人难以置信。

为什么？他的答案一句话就能说完：

## 你为什么而优化，就得到什么

「你为什么而优化，就得到什么——这对所有机器学习的事情都成立，对世界上所有的事情大概都成立」<button class="pd-ts" data-t="04:55" data-who="Diogo Almeida" data-en="And I'm hoping that Jev is the first step in that direction. So my take on the answer and the nuance of it is that you get what you optimize for, which is just true of all things ML, kind of true of all things in the world, really." aria-label="回原文"></button>。

今天的 LLM 全都是为「字符串」优化的，而字符串是供人类或其他 LLM 消费的；

但会计、数据录入、保险承保这些东西，是供计算机消费的——特定的字段、表单、离散的决策。

为字符串优化和为离散决策优化，是非常不同的两件事。「我相信这就是这个差距最大的解释」<button class="pd-ts" data-t="05:38" data-who="Diogo Almeida" data-en="And it's very different to optimize for strings versus like these discrete decisions. And that I believe is the largest explainer of this gap. You know when you kind of juxtapose Navier Stokes and accounting that is like kind of a contrived example that kind of plays directly into the positioning that you've kind of built up around Jeff and like what that's really good at but I don't think that" aria-label="回原文"></button>。

主持人反问：ML 本质上就是优化，天天讲代价函数，怎么会是 ML 的人最不懂这个？

Diogo 的回答引出了他对 Sutton「苦涩教训」（大致是：算力和扩展比算法更重要）的修正版。

## 数据比算力重要，正确的任务比数据更重要

「我相信数据比算力重要得多」<button class="pd-ts" data-t="10:02" data-who="Diogo Almeida" data-en="For mixed reasons, you know, like I actually think that there's pros and cons to being scaling build. But I believe that data matters a lot more than compute. So you actually need data to put the compute on." aria-label="回原文"></button>——因为算力得有数据可施。而比数据更重要的是「你需要正确的任务」<button class="pd-ts" data-t="10:09" data-who="Diogo Almeida" data-en="So you actually need data to put the compute on. And more important than data is you need the right task. So this is the most important thing in all of the ML that we do." aria-label="回原文"></button>。

预训练损失今天看是显然的，当年却是很大的信仰飞跃；

RLHF 也是——互联网上根本不存在「对两个模型补全的偏好标注」这种形态的数据，是团队的天才洞察硬造出了这个任务。

所以「真正能创造一个新任务的人寥寥无几」<button class="pd-ts" data-t="10:36" data-who="Diogo Almeida" data-en="It was quite a big leap of faith that pre-chaining loss would lead to such awesome AI stuff, and it was by no means guaranteed. So it's actually a rare few that I think can actually make a new task, and that is the you get what you optimize for part of it." aria-label="回原文"></button>。

在 RL 游戏里算力和数据可以互换（on-policy rollout 用算力换数据），Sutton 的说法成立；但推广到现实应用，数据才是比算力更受限的资源。

## 锯齿状能力不是天生的，是优化出来的

LLM 为什么时灵时不灵？Diogo 做了个现场测试：你见过 ChatGPT 无缘无故地辱骂你吗？没有。所以模型在某些事上其实是「超级超级可靠」的。

他的论断是：「锯齿状特性并不是 LLM 或 AI 内在的」<button class="pd-ts" data-t="07:12" data-who="Diogo Almeida" data-en="They're not just, they're like super duper reliable at some stuff. I would say that jaggedness is not intrinsic to LLMs or AI. You're saying jaggedness is relative to our application of them towards specific problems." aria-label="回原文"></button>——它来自优化过程：你朝一个方向优化得越猛，就获得那类[[可靠性|可靠性]]、失去别的。

这正是 RLHF 的机制：惩罚越容易施加的事，推理时就越不会发生。

不该退款时给了退款，从准确率上看和把脸在键盘上乱按一样是 0%，但你永远不会看到乱按——因为优化压力的不对称性。

也因此，「[[后训练|后训练]]可以让某些类型的事情变得可靠」<button class="pd-ts" data-t="08:18" data-who="Diogo Almeida" data-en="And you just never get those types of things anymore, even though the pre-trained models could actually get word salad, right? So post-training can make certain types of things reliable." aria-label="回原文"></button>，而「AI 从业者在把期望目标植入模型这件事上，拥有的主观能动性大得超出人们的想象」<button class="pd-ts" data-t="08:22" data-who="Diogo Almeida" data-en="So post-training can make certain types of things reliable. And I don't think people realize how much of an agency that AI practitioners have in setting their menu of desiderata into the model." aria-label="回原文"></button>。

顺带他泼了行业一盆冷水：自动驾驶是巨大的工程胜利而非 AI 胜利——Waymo 靠的是把系统分解、抽象、逐个确保可靠。

而 AI 圈的愤世嫉俗循环是：做 demo → 融种子轮/A 轮 → 承诺做可靠 → 从没做可靠 → pivot 成 human-in-the-loop。OpenAI 从 2020 年就在展示客服 demo，六年后客服仍未解决。

## Jev 与「分类器」：差的不是接口，是智能

面对「Jev 不过是逻辑回归/嵌入模型加分类器」的嘲讽，Diogo 的回应是：

分类器没有任何问题——「它们就是『有用性』的形态本身」<button class="pd-ts" data-t="25:15" data-who="Diogo Almeida" data-en="And classifiers are not meant to be cool in ML. They are literally the shape of usefulness. Yeah, you know, like that sounds like an arrogant thing to say, but that is how you get- Yeah, they're workhorses." aria-label="回原文"></button>，Meta 和 Google 靠的就是分类器。

「如果有人告诉我们，我们做的是『针对任何东西的零样本通用分类器』，那会是 Jev 得到过的最高赞美」<button class="pd-ts" data-t="25:37" data-who="Diogo Almeida" data-en="So there's nothing wrong with classifiers. I actually think if someone told us that we were a zero-shot general classifier for anything, that would be the greatest compliment I've ever been given for Jev." aria-label="回原文"></button>。

真正被所有人漏掉的一点（他的团队劝他别外讲）：

关键不在接口、不在速度和成本——「如果你在嵌入之上用逻辑回归或一个小模型，你得到的就是嵌入之上的逻辑回归或小模型的那种智能」<button class="pd-ts" data-t="28:56" data-who="Diogo Almeida" data-en="I think people just don't get that they're paying for intelligence. And if you use a logistic regression on top of embeddings or a small model, you get the intelligence of logistic regression on top of embeddings or a small model." aria-label="回原文"></button>。

Jev 的核心其实有一个 LLM——互联网的压缩版——这才是零样本能力的来源，而他们做的事是围绕「[[校准|校准]]决策」这个任务重新训练它。

他自认为起手时是世界顶尖的后训练水平，以为一周搞定，结果在隐身状态下做了两年，还写了一份内部文档叫《我们本来去年就能拥有 AGI》——事后承认，RLHF 一年内能成，[[RLCD|RLCD]] 绝不可能一年内成。

另一个有意的取舍：Jev 刻意在字符串生成上差得多——「能聊天」很可爱但明显很蠢。

他想要的标杆是「让 AI 可靠到无聊透顶，就像 SQL」<button class="pd-ts" data-t="32:26" data-who="Diogo Almeida" data-en="And I'm like, no, what is my reputation become? You know, like, I want to be a paragon of making AI so reliable that it's boring, like SQL. You know, like, I want AI to be so predictable that you can, like, write queries without having to even run them against, like, eval sets because you know this is what common sense intelligence would do there and to just do it every single time." aria-label="回原文"></button>，可预测到不用跑 eval 集就敢写查询。

「我再怎么强调都不为过：可靠性才是人们付费买的东西」<button class="pd-ts" data-t="32:58" data-who="Diogo Almeida" data-en="Just you wait. And also, I cannot emphasize enough, reliability is what people are paying for. Reliability is what people want." aria-label="回原文"></button>。

## RLCD：把工程控制权还给开发者

RLCD（为校准决策而优化的那类算法，区别于为人类偏好优化的 RLHF）要解决什么？用 function calling 类比：

客服系统判断「是否转人工」，Walmart 和 Costco 的策略天差地别，但今天的 API 只能让你在提示词里写「请给退款/别给退款」，而不是把可调阈值交给程序员。

OpenAI 当年因过度拒绝回滚模型，在他看来就是糟糕决策——「刷新几次有时拒绝有时不拒绝，从工程角度看是疯狂的行为」，为什么没有一个可调阈值？

「RLCD 就是把正确的接口暴露给构建者，让他们能拿到想要的属性，而不只是对着 system message 祈祷」<button class="pd-ts" data-t="50:16" data-who="Diogo Almeida" data-en="But like the only alternative now then is to like program again into the language like please give refunds or please don't give refunds or you know something like insane instead of giving the controls of the system to the programmer implementing the downstream behavior." aria-label="回原文"></button>。

而要有意义的旋钮和阈值，前提是概率被校准——你要在乎概率的长尾，不只是准确率。这里他抛出一个反直觉论断：

「RLHF 和 [[RLVR|RLVR]] 极大地破坏了模型的校准，因为要把字符串输出好，你实际上需要极度过度自信」<button class="pd-ts" data-t="56:42" data-who="Diogo Almeida" data-en="They're not perfectly calibrated, but they are way, way more calibrated than RLHF models are. Actually, RLHF and RLVR destroy the calibration of the models immensely because in order to output strings well, you actually need extreme overconfidence." aria-label="回原文"></button>——GPT-4 之后模型只发后训练版，校准就此劣化。

## Harness 之辩：智能体的问题不在循环，在背后的智能

[[Claude Code|Claude Code]]、[[OpenClaw|OpenClaw]] 这些「外壳」（[[harness|harness]]，即包着模型跑的代码框架）真能点石成金吗？Diogo 说不：

Claude Code 发布后几个月都没人用，后来才出现巨大跃迁——他的猜测是 Anthropic 下大注把[[智能体|智能体]]轨迹放进了训练分布，「你优化什么就得到什么」。

形态（分类器、while 循环）本身很强大，「但它的强大程度只取决于背后的智能」。

他甚至完全拒绝 harness 这个概念——那是「无马的马车」式思维，试图把智能装扮成人类的样子。

对 Jev 而言：模型被用户嵌进自己的代码，逻辑全归用户、数据全归用户——「总有一天智能会像数据库一样，代码里需要时就调用」。

关于智能体编排中的决策交给 Jev，他还留了个思想实验：「如果 KV 缓存不存在，你会怎么设计编码智能体？」

——没有只追加的上下文，就能做扇出、过滤、上下文内的层级查找，而不是像到处用全局变量一样囤积历史。

对「是否要退回僵硬工作流」的质疑，他的回答是分场景的：一次性任务当然交给不可靠的 LLM 碰运气；

但要规模化、要长期在后台作为依赖运行的东西，前期就值得真正工程化——「待在轨道上是特性」，就像游乐园没有轨道安全带就玩不了最好玩的项目。

未来他判断是混合方案：智能体逐步挂接更多真正的软件逻辑，「直到它们变成更多的软件、更少的魔法 while 循环」。

至于泛化：他不同意「业务决策比文本更难泛化」——遵循一个简单业务工作流，和解决数学千禧年难题，他打大赌是后者更难。

而通往通用性，RLHF 最容易（取悦人是主观的），RLCD 其次，RLVR（用可验证奖励做强化学习，本质是在为基准优化）最难——这就是为什么他相信 Jev 这条路「离通用更近，而且不像其他模型那样困在收益递减的平台期」。

## 本集带走

- **「你优化什么就得到什么」是理解 AI 长短板的钥匙**：LLM 差不是能力不够，而是全体都在为「供人消费的字符串」优化；会计、客服这类「供机器消费的离散决策」需要新的优化目标。
- **可靠性可以后天造出来**：锯齿状不是 LLM 的天性，是 RLHF 式不对称优化的产物——反过来，只要为决策这个任务去优化，可靠性同样能被训出来，Jev 的两年隐身期就是证明。
- **「快和便宜」不是卖点**：小模型加逻辑回归得到的就是小模型的智能；人们真正付费买的是校准过的智能与可靠性，离开这一点，抄接口的模仿者都抄错了重点。
- **别指望 harness 点石成金**：Claude Code、OpenClaw 的形态早就存在，真正让它们起飞的是把使用轨迹放进训练分布；判断一个智能体产品，要看背后智能而非框架。
- **给开发者的设计启示**：要做长期后台运行的自动化，前期工程化是值得的（轨道是特性）；而「没有 KV 缓存你会怎么设计智能体」这个思想实验，值得每个做智能体架构的人做一遍。

<div class="pd-sec pd-sec-q">全部金句 <span>14 条</span></div>

> <span class="qz">我觉得 AI 智慧得令人难以置信，但在你真正期望它有用的那些事情上，却又无用得令人难以置信。</span>  
> *I think AI is just so unbelievably smart, yet so unbelievably useless at the kinds of things you'd really expect it to be useful for.*  
> <span class="qm">—— Diogo Almeida · [01:52]</span> ^q1

> <span class="qz">所以我对这个答案的看法是：你为什么而优化，就得到什么——这对所有机器学习的事情都成立，说真的，对世界上所有的事情大概都成立。</span>  
> *So my take on the answer and the nuance of it is that you get what you optimize for, which is just true of all things ML, kind of true of all things in the world, really.*  
> <span class="qm">—— Diogo Almeida · [04:55]</span> ^q2

> <span class="qz">我认为人们没有意识到，AI 从业者在设定他们期望的目标清单并植入模型方面，有多大的主观能动性。</span>  
> *And I don't think people realize how much of an agency that AI practitioners have in setting their menu of desiderata into the model.*  
> <span class="qm">—— Diogo Almeida · [08:22]</span> ^q3

> <span class="qz">但我相信，数据比算力重要得多。</span>  
> *But I believe that data matters a lot more than compute.*  
> <span class="qm">—— Diogo Almeida · [10:02]</span> ^q4

> <span class="qz">而比数据更重要的是，你需要正确的任务。</span>  
> *And more important than data is you need the right task.*  
> <span class="qm">—— Diogo Almeida · [10:09]</span> ^q5

> <span class="qz">所以我认为真正能创造一个新任务的人寥寥无几，这就是「你优化什么就得到什么」的那部分。</span>  
> *So it's actually a rare few that I think can actually make a new task, and that is the you get what you optimize for part of it.*  
> <span class="qm">—— Diogo Almeida · [10:36]</span> ^q6

> <span class="qz">我觉得这里愤世嫉俗的循环是：做一个 demo，融一笔种子轮或 A 轮，说你会把它做可靠，最后却从来没有把它做可靠，然后转而做一个 human-in-the-loop 版本的东西，而不是真正把这个任务自动化。</span>  
> *My cynical loop here is make a demo, raise a seed or series A, say that you're going to make it reliable, never end up making that reliable, pivot into a human-in-the-loop version of this thing instead of actually automating the task.*  
> <span class="qm">—— Diogo Almeida · [17:33]</span> ^q7

> <span class="qz">而且总体来说，获得更高可靠性的方法是放大聚焦。</span>  
> *And in general, the way to get higher reliability is to zoom in.*  
> <span class="qm">—— Diogo Almeida · [21:26]</span> ^q8

> <span class="qz">我其实觉得，如果有人告诉我们，我们做的是「针对任何东西的零样本通用分类器」，那会是 Jev 得到过的最高赞美。</span>  
> *I actually think if someone told us that we were a zero-shot general classifier for anything, that would be the greatest compliment I've ever been given for Jev.*  
> <span class="qm">—— Diogo Almeida · [25:37]</span> ^q9

> <span class="qz">而如果你在嵌入之上用逻辑回归或一个小模型，你得到的就是嵌入之上的逻辑回归或小模型的那种智能。</span>  
> *And if you use a logistic regression on top of embeddings or a small model, you get the intelligence of logistic regression on top of embeddings or a small model.*  
> <span class="qm">—— Diogo Almeida · [28:56]</span> ^q10

> <span class="qz">你知道吗，我想成为的标杆是，让 AI 可靠到无聊透顶，就像 SQL 那样。</span>  
> *You know, like, I want to be a paragon of making AI so reliable that it's boring, like SQL.*  
> <span class="qm">—— Diogo Almeida · [32:26]</span> ^q11

> <span class="qz">而且，我再怎么强调都不为过，可靠性才是人们付费买的东西。</span>  
> *And also, I cannot emphasize enough, reliability is what people are paying for.*  
> <span class="qm">—— Diogo Almeida · [32:58]</span> ^q12

> <span class="qz">所以对我来说，RLCD 就是把正确的接口暴露给构建者，让他们可以获得想要的属性，而不只是对着 system message 祈祷。</span>  
> *So to me RLCD is about exposing the right interface to builders so that they can get the properties they want without just praying to the system message.*  
> <span class="qm">—— Diogo Almeida · [50:16]</span> ^q13

> <span class="qz">实际上，RLHF 和 RLVR 极大地破坏了模型的校准，因为要想把字符串输出好，你实际上需要极度过度自信。</span>  
> *Actually, RLHF and RLVR destroy the calibration of the models immensely because in order to output strings well, you actually need extreme overconfidence.*  
> <span class="qm">—— Diogo Almeida · [56:42]</span> ^q14

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-28-a16z-ai-can-write-code-why-isnt-software-bett|AI 这么聪明,自动化去哪儿了?Jev 把智能装进软件本身]]<span class="pd-rz">同嘉宾:Diogo Almeida · 同公司:TypeSafe、OpenAI · 同概念:Jev、RLHF、分类器 (classifier)、可靠性 (reliability)、Claude Code</span>
- [[2026-08-29-twentyvc-20vc-is-anthropic-s-coding-business-wort|最便宜的模型反而是最便宜的：Factory CTO 谈 AI 定价陷阱]]<span class="pd-rz">同公司:OpenAI、Anthropic · 同概念:harness、后训练 (post-training)、智能体 (agent)</span>
- [[2026-10-05-a16z-the-top-100-consumer-ai-apps-whos-actual|一半美国人在用 AI，只有 4.5% 在付钱：消费级 AI 的钱到底在哪]]<span class="pd-rz">同公司:OpenAI、Anthropic · 同概念:OpenClaw、智能体 (agent)、ChatGPT</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-21-latent-jev|Jev 背后的人:Diogo 谈为什么 AI 应该像数据库而不是同事]]<span class="pd-rz">同嘉宾:Diogo Almeida · 同公司:OpenAI、TypeSafe · 同概念:Jev、RLCD、RLHF、RLVR、校准 (calibration)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:OpenAI、Anthropic · 同概念:Claude Code、智能体 (agent)、后训练 (post-training)</span>
- [[2026-07-30-cogrev-is-offense-or-defense-dominant-far-ai-s|AI 安全排行榜：谁扛住了越狱，谁没有]]<span class="pd-rz">同公司:OpenAI、Anthropic · 同概念:后训练 (post-training)、智能体 (agent)</span>

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
