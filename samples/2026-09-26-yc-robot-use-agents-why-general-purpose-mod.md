---
title: 编码智能体开始接管机器人：LLM 控制物理世界的前沿
podcast: Y Combinator Startup Podcast
date: 2026-09-27
source_url: undefined
duration: "29:38"
type: episode
cover: "#64748b"
image: "/covers/2026-09-26-yc-robot-use-agents-why-general-purpose-mod.jpg"
description: Waddle Labs 的 Han Mei 与 RoboCurve 的 Jay 解释为什么通用 LLM 正在成为控制机器人的最佳路径，以及两年内通用机器人为何可期。
host: "[[Han Mei]]"
cohosts: ["[[Francois]]", "[[Ham]]", "[[Vincent]]", "[[Jay]]"]
companies: ["[[Waddle Labs]]", "[[RoboCurve]]"]
concepts: ["[[智能体]]", "[[LLM]]", "[[VLA]]", "[[RT2]]", "[[代码即策略]]", "[[上下文学习]]", "[[思维链]]", "[[苦涩的教训]]", "[[柏拉图表示假说]]", "[[harness]]", "[[延迟]]", "[[Astra]]", "[[计算机使用数据]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/covers/2026-09-26-yc-robot-use-agents-why-general-purpose-mod.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-26-yc-robot-use-agents-why-general-purpose-mod#post","headline":"编码智能体开始接管机器人：LLM 控制物理世界的前沿","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-26-yc-robot-use-agents-why-general-purpose-mod","mainEntityOfPage":"https://talk.solomind.cc/2026-09-26-yc-robot-use-agents-why-general-purpose-mod","description":"Waddle Labs 的 Han Mei 与 RoboCurve 的 Jay 解释为什么通用 LLM 正在成为控制机器人的最佳路径，以及两年内通用机器人为何可期。","datePublished":"2026-09-27","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-26-yc-robot-use-agents-why-general-purpose-mod.jpg","about":[{"@type":"Person","name":"Han Mei"},{"@type":"Person","name":"Francois"},{"@type":"Person","name":"Ham"},{"@type":"Person","name":"Vincent"},{"@type":"Person","name":"Jay"},{"@type":"Organization","name":"Waddle Labs"},{"@type":"Organization","name":"RoboCurve"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"LLM"},{"@type":"Thing","name":"VLA"},{"@type":"Thing","name":"RT2"},{"@type":"Thing","name":"代码即策略 (code as policies)"},{"@type":"Thing","name":"上下文学习 (in-context learning)"},{"@type":"Thing","name":"思维链 (chain of thought)"},{"@type":"Thing","name":"苦涩的教训 (bitter lesson)"},{"@type":"Thing","name":"柏拉图表示假说 (Platonic Representation Hypothesis)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"延迟 (latency)"},{"@type":"Thing","name":"Astra"},{"@type":"Thing","name":"计算机使用数据 (computer use data)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"编码智能体开始接管机器人：LLM 控制物理世界的前沿","item":"https://talk.solomind.cc/2026-09-26-yc-robot-use-agents-why-general-purpose-mod"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>编码智能体开始接管机器人：LLM 控制物理世界的前沿</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 编码智能体开始接管机器人：LLM 控制物理世界的前沿

<div class="pd-byl"><b>Han Mei</b> · Waddle Labs 联合创始人 · 2026-09-27</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-26-yc-robot-use-agents-why-general-purpose-mod.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">Frontier 实验室内部以及机器人基础模型公司之间存在某种共识，那就是我们将在未来两年内甚至更早拥有通用机器人。</div><div class="a">— Jay <button class="pd-ts" data-t="26:32" data-who="Jay" data-en="There's some consensus within the Frontier Labs and also in the Robotics Foundation models companies that will have general-purpose robots within the next two years or even earlier." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Han Mei]] · [[Francois]] · [[Ham]] · [[Vincent]] · [[Jay]]
>
> **公司** [[Waddle Labs]] · [[RoboCurve]]
>
> **概念** [[智能体]] · [[LLM]] · [[VLA]] · [[RT2]] · [[代码即策略]] · [[上下文学习]] · [[思维链]] · [[苦涩的教训]] · [[柏拉图表示假说]] · [[harness]] · [[延迟]] · [[Astra]] · [[计算机使用数据]]

这一集聊的是一个正在发生的转折：过去几年最大的惊喜之一，是编码[[智能体|智能体]]在不同领域之间的通用性——而现在，前沿研究人员正在表明，这也包括控制机器人。MIT 教授 Philip Isola 在最近一篇爆火的文章里提出，我们可能正在进入「机器人使用智能体」的时代。

请来的两位主角：[[Han Mei|Han Mei]]，[[Waddle Labs|Waddle Labs]] 联合创始人（与 [[Vincent|Vincent]] 一起），他们做的是「构建控制机器人的 [[LLM|LLM]]」，路径是两条腿走路——先造一个让 LLM 高效驾驭机器人的 [[harness|harness（框架）]]，再收集数据训练更好的模型；以及 [[Jay|Jay]]，[[RoboCurve|RoboCurve]] 联合创始人，他们是一家「物理 AI 的 evals 公司」，测一切：任何机器人、任何模型，从 LLM 到 [[VLA|VLA]]（视觉-语言-动作模型），本体涵盖机械臂、夹爪、人形、四足。两家公司的视频最近都在 Twitter 上爆火，还被 Isola 的文章引用——视频里 LLM 能拧瓶盖、多机器人通信、拔笔帽。

## 起点：RT2 与「苦涩教训」

一切要从 [[RT2|RT2]] 论文说起——在机器人上用 AI 最早的成功方法之一。他们把一个在网页文本和图像上预训练过的语言模型拿来微调，只是不让它输出英语，而是输出「末端执行器位姿」——也就是可以转换成关节指令、直接控制机器人的坐标。

Jay 的脑子里把这个类比为[[思维链|思维链]]（chain of thought）时刻：当年做 GSM8K 小学数学题，模型必须直接吐出「划四道、答案、结束」，没有思考空间；后来允许它先想「8 减 5 等于 3」再作答，能力就上去了。RT2 时代的 VLA 就是那个「必须直接输出动作」的阶段——无法为更复杂的任务分配更多算力。而现在，模型可以先用代码思考、思考、再输出动作。

Han Mei 把这归结为「[[苦涩的教训|苦涩教训]]」（bitter lesson，即通用方法+更多算力终会胜过人工巧思）的又一印证：给智能体更多自主权、更多资源，它能完成很多我们费劲微调它去做的事。但他的版本更具体：苦涩教训不在于你选什么架构，而在于**什么数据最有用**。

VLA 的数据瓶颈纠结多年、进展缓慢；而 LLM 的数据模态是「被眷顾的」——RT2 之所以好，正因为它接入了语言模型训练所用的全部数据模态，那些网络图片和文本实实在在地提升了它，胜过从零训练一个纯机器人基础模型。所以结论很激进：**为什么不直接构建一个非常好的基础 LLM，用它来控制机器人，而要去训练一个专门依赖机器人数据的模型？**他们想把[[计算机使用数据|计算机使用数据]]、编码数据统统灌进机器人模型。

## 代码即策略：一次性就能干活

顺着时间线回看，Jay 会先回溯到 Voyager——Minecraft 里最早的著名编码智能体，它展示了「编码智能体意味着好的工具使用和即时的工具创建」：用 Python 内置的 sort、if、for、while 这些「工具」组装出新工具，把思考和经验压缩进以后可以调用的新工具里。到了大家都想通的时候：把全部资源和算力砸向编码，就能自动化 ML 工程师、迎来腾飞——但 Han Mei 直言，头部实验室的掌门人未必有那个洞见，知道这会带来「好到能为机器人写策略的 LLM」。

> 【背景】原文段落缺内联时间戳，无法核对「Dario」「Sam」具体指谁及「2024 年」这一时间点；此处按原文可证范围改写为「头部实验室的掌门人」，并将年份从正文移除。

而更早的「[[代码即策略|代码即策略]]」论文（尤其 Google DeepMind 那几篇，2022 年底、约 ChatGPT 发布前后）已经展示了一件惊人的事：他们给编程智能体提供一列字面上的 Python 函数——拾取物体、抬起、移动到位姿——智能体就能写出调用这些函数的代码去完成复杂任务，而且**可以一次性完成，不需要任何额外机器人数据**，因为它已经在海量代码数据上训练过，天然知道「把方块移进碗里」该先做什么后做什么。Jay 认为正是这种一次性能力、这种上下文内探索能力，推动了包括他们自己在内的整条数据路线继续探索。

## 学习放哪里：上下文还是权重？

主持人 [[Francois|Francois]] 拿出一个框架：学到的经验该以什么形态回到策略里？最便宜的是 ICL（[[上下文学习|上下文内学习]]）——直接把「状态-动作-结果」元组附加进上下文，像带教科书考试。

他做过实验：留出一个任务，用 ICL 灌例子，每样本提升大、成本极低（没有 SGD、不耗 flops），但有三个硬限制：提升非单调、大约 20-40 个例子后基本饱和、一旦超出训练时的上下文长度（训练 10 万的话实际可用约 5 万）反而变差。往上走是对部分参数做轻量微调，再到完整 SFT/RL——如果你是 Tesla、有无限数据还用 ICL 做自动驾驶，那你在开玩笑；但低数据情境下 ICL 好得惊人。

> 【背景】这里「轻量微调」一类方法在业界常指 LoRA 等低秩适配技术，即只微调一小部分参数。

Waddle 的解法是把 harness 当成一种「领域特定性」：机器人在湿实验室里部署后，可以在上下文中学会很多，而巩固的方式是把每项学到的技能打包成具体程序——把技能和记忆写出来，是一种「从过去经验向未来智能体的蒸馏」。这还连着元学习的老传统：大模型给小模型编程，小模型只要够小够快就行。至于理论上 ICL 到底能走多远——有论文表明模型在上下文学习中也能近似梯度下降，Han Mei 说权重空间与符号空间的界限其实有点模糊，这真是谁都说不准。

## 柏拉图表示假说：强语言模型即强机器人模型

Isola 的「[[柏拉图表示假说|柏拉图表示假说]]」（名字取自柏拉图的洞穴：你看到的是各种现实的影子）指出，不同数据、不同训练策略下的模型，会收敛到对世界一致的距离映射。Jay 认为这是苦涩教训的最佳体现：**如果你有一个非常强的语言模型，你就也有一个非常强的机器人模型**——你只需要一个最强的模型，无论架构，它会胜过任何稍弱的专用模型。

那为什么最新的模型（[[Astra|Astra]]）空间智能突然强这么多？Han Mei 的猜测是它的视觉能力：可能在比以往多得多的计算机使用数据和 CAD 数据上做过预训练。

计算机使用数据为什么有用？乍不直观，但你想想：在屏幕上拖动光标旋转 CAD 物体、在 Blender 里做设计——这教会模型如何对空间推理，上下左右这些控制机器人必需的概念。

反向也成立：机器人社区发现，教会模型用机器人的不只是机器人数据，自我中心视角视频等也在被纳入。把这个推向极端就是：编程、计算机使用、自我中心视角，全部喂给同一个模型——这就是通往最强机器人使用智能体的路径。

主持人补了一个绝妙的历史回环：Xerox PARC 造图形界面，就是为了让计算机更像物理世界以便人类交互——结果我们造出的文件、文件夹、SolidWorks 那些旋转物体的 GUI，反而成了机器人学习物理世界的训练场。「我们没法让机器人在物理世界里工作，所以我们就在那个东西上训练，现在它成了。」

> 【背景】Xerox PARC(施乐帕克研究中心)是图形界面等众多计算机技术的发源地。

## 延迟与「睡觉」：从对话到实时

现在的演示仍有明显短板：直接用 Astra 每一步都在思考，[[延迟|延迟]]很慢、经济上不划算——重复性任务你不会想让 Astra 呆在循环里，该写代码（可以极快地反复运行）或调用已编译的技能。但趋势极快：他们观察到前沿级别 LLM 的延迟大约**每月改善 2 倍**——如果持续，年底前就可能实现实时控制。VLA 化的套路是：确定性的编码图里留出变化点（用 VLM 做物体检测、判断失败并灵活响应），让它既快又能泛化。

Han Mei 还给了一个生物学类比：最优做法可能是把新的状态-动作-奖励迅速放回上下文，但之后需要「睡一觉」——几乎所有有智能的系统都会睡觉，睡眠期间记忆被压缩、用来训练权重。对应到工程上就像 Dreamcoder：技能库在「睡眠阶段」被重构为更紧凑的表示。

今天也许你想重构的不再是程序，而是轨迹和技能。随着 Waddle 向前走，如何管理不断增长的技能上下文和部署数据，会是核心问题。

## 预测：两年内的 ChatGPT 时刻

Jay 抛出的判断相当大胆：Frontier 实验室和机器人基础模型公司内部已存在共识——**未来两年内甚至更早，我们会有通用机器人**。所谓通用，是给出任何自然语言指令，它能做到一个能干的青少年用双手能做到的事；相当于机器人版的 ChatGPT 时刻——泛化到未见过的任务和环境。

而社会对此可能毫无准备，甚至毫无意识。Waddle 的路径是分步走：先解决把 Astra 的第一遍上下文学习整合成可高速反复运行的技能或策略。主持人以认同收尾：更广泛的社会确实还没意识到即将到来的东西有多少。

## 本集带走

- **强语言模型 ≈ 强机器人模型**：按柏拉图表示假说，模型越大、数据越多，会收敛到一致的世界表示——所以与其训练专用机器人模型，不如用最强的基础 LLM 直接控制机器人。
- **机器人数据瓶颈的绕法**：不是去造更多机器人数据，而是把「分布外」的机器人任务变成「分布内」——计算机使用、CAD、编码、自我中心视角视频都能教会模型空间推理。
- **代码即策略的一次性魔力**：给编码智能体一列 Python 技能函数，它不靠额外机器人数据就能一次性写出控制代码——因为它早已在海量代码上训练过。
- **经验的正确安放是一套层级**：低数据用 ICL（快但约 20-40 例就饱和、超上下文长度反而变差），重复性技能编译成代码或工具调用，周期性的「睡眠」把轨迹蒸馏回权重。
- **延迟不再是死结**：前沿 LLM 延迟约每月改善 2 倍，年底前可能实现机器人实时控制。
- **行业共识的时间表**：两年内甚至更早出现通用机器人——能听懂任意自然语言指令、做到能干青少年双手能做的事；而社会还没准备好。

<div class="pd-sec pd-sec-q">全部金句 <span>10 条</span></div>

> <span class="qz">Frontier 实验室内部以及机器人基础模型公司之间存在某种共识，那就是我们将在未来两年内甚至更早拥有通用机器人。</span>  
> *There's some consensus within the Frontier Labs and also in the Robotics Foundation models companies that will have general-purpose robots within the next two years or even earlier.*  
> <span class="qm">—— Jay · [26:32]</span> ^q1

> <span class="qz">当我们说通用机器人时，我们的意思是，如果你给出任何自然语言指令，它能做到一个能干的青少年用双手能做到的事情。</span>  
> *And when we say general-purpose robots, we mean something like if you give any natural language instruction, it can do what a competent teenager could do with their bare hands.*  
> <span class="qm">—— Jay · [26:48]</span> ^q2

> <span class="qz">所以对我而言，就是，好吧，为什么不直接构建一个非常好的基础 LLM，然后用它来控制机器人，而不是训练一个专门面向机器人、更依赖于纯机器人数据的模型。</span>  
> *And then so to me, it's like, okay, why not just build a really good foundational LLM and then use that to control robots rather than training like a model that's specifically for robotics and that's more dependent on just robot data.*  
> <span class="qm">—— Ham · [06:52]</span> ^q3

> <span class="qz">所以如果我们把这个推向极端，那就是：为什么不把每一种数据——编程、计算机使用、自我中心视角——都喂给同一个模型？我认为这就是我们如何得到最强机器人使用智能体的路径。</span>  
> *So if we take this to the extreme, it's like, why not feed every kind of data, coding, computer use, egocentric, into the same model? I think that's how we get to the most capable robot use agent.*  
> <span class="qm">—— Ham · [25:00]</span> ^q4

> <span class="qz">而令人非常惊讶、表现突出的一点是，编程智能体可以一次性完成这件事。它们不需要额外的机器人数据就能用这些代码工作，因为它们已经在如此多的代码数据上训练过了。</span>  
> *And what was very surprising, what excelled was that coding agents can do this very one-shot. They did not need additional robot data in order to work with this code because they're already trained on so much coding data.*  
> <span class="qm">—— Ham · [10:11]</span> ^q5

> <span class="qz">我们观察到的一件事是，对于 Fable 级别的 LLM，它们的延迟大约每月改善 2 倍，这是非常非常快的。</span>  
> *So one thing that we saw is that for Fable class LLMs, their latency is improving by around 2x per month, which is very, very fast.*  
> <span class="qm">—— Jay · [17:35]</span> ^q6

> <span class="qz">而且我可以用真正的编程智能体取代整个机器人学领域。</span>  
> *And I can displace all of robotics with actual coding agents.*  
> <span class="qm">—— Francois · [09:04]</span> ^q7

> <span class="qz">一旦超过 50,000，你就不会再有提升了。你实际上只会变得更糟，因为模型无法对所有内容保持注意力。</span>  
> *Once you exceed 50,000, you don't improve anymore. You actually just get worse because the model can't attend over everything.*  
> <span class="qm">—— Francois · [13:02]</span> ^q8

> <span class="qz">最优做法可能是把一个新的状态-动作-奖励放回上下文里，因为这非常快，但之后就需要某种类似睡一会儿的东西，几乎所有有智能的东西都会睡觉，告诉我一个不以某种方式睡觉的智能系统，对吧，然后……</span>  
> *The optimal thing to do may be to put a new SAR state action reward back into context because it's very quick, but then there needs to be some like of go to sleep for a while, like almost everything that is intelligent sleeps, like tell me an intelligent system that doesn't sleep, right, in some way, and then...*  
> <span class="qm">—— Francois · [27:46]</span> ^q9

> <span class="qz">过去几年最大的惊喜之一，是编码智能体在不同领域之间的通用性。</span>  
> *One of the big surprises the last few years has been the generalizability of coding agents across different domains.*  
> <span class="qm">—— Han Mei · [00:00]</span> ^q10

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-31-a16z-decagons-playbook-for-building-enterpris|Decagon 的 AI 寺庙:开源、Duet 与护城河]]<span class="pd-rz">同概念:延迟 (latency)、智能体 (agent)、微调 (fine-tune)</span>
- [[2026-09-15-talks-tolan-voice-first-ai-companion-paula-doz|Tolan 如何做语音优先的 AI 陪伴体]]<span class="pd-rz">同概念:延迟 (latency)、智能体 (agent)、LLM</span>
- [[2025-09-07-lennys-how-ai-is-reshaping-the-product-role|PM的生存法则：AI时代别当瓶颈，去抢活干]]<span class="pd-rz">同概念:LLM、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:LLM、智能体 (agent)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:harness（框架） (harness)、智能体 (agent)</span>
- [[2026-07-30-cogrev-is-offense-or-defense-dominant-far-ai-s|AI 安全排行榜：谁扛住了越狱，谁没有]]<span class="pd-rz">同概念:思维链 (chain of thought)、智能体 (agent)</span>

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
