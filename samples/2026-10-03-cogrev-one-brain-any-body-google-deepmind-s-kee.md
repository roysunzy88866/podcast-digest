---
title: 跑得比博尔特快没用？DeepMind 机器人负责人谈 Gemini Robotics 与 GPT-2 时代的机器人
podcast: The Cognitive Revolution
date: 2026-10-05
source_url: undefined
duration: "90:53"
type: episode
cover: "#64748b"
image: "/covers/2026-10-03-cogrev-one-brain-any-body-google-deepmind-s-kee.jpg"
description: Google DeepMind 资深研究科学家、Gemini Robotics 研究负责人 Kirthana Gopalakrishnan 解析机器人三件套模型架构、为何机器人仍处 GPT-2 时代，以及数据、安全与未来路线之争。
host: "[[Kirthana Gopalakrishnan]]"
companies: ["[[Google DeepMind]]", "[[Gemini Robotics]]"]
concepts: ["[[人形机器人]]", "[[VLA]]", "[[泛化]]", "[[跨载体]]", "[[模拟]]", "[[遥操作]]", "[[世界建模]]", "[[ICL]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/covers/2026-10-03-cogrev-one-brain-any-body-google-deepmind-s-kee.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-03-cogrev-one-brain-any-body-google-deepmind-s-kee#post","headline":"跑得比博尔特快没用？DeepMind 机器人负责人谈 Gemini Robotics 与 GPT-2 时代的机器人","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-03-cogrev-one-brain-any-body-google-deepmind-s-kee","mainEntityOfPage":"https://talk.solomind.cc/2026-10-03-cogrev-one-brain-any-body-google-deepmind-s-kee","description":"Google DeepMind 资深研究科学家、Gemini Robotics 研究负责人 Kirthana Gopalakrishnan 解析机器人三件套模型架构、为何机器人仍处 GPT-2 时代，以及数据、安全与未来路线之争。","datePublished":"2026-10-05","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-10-03-cogrev-one-brain-any-body-google-deepmind-s-kee.jpg","about":[{"@type":"Person","name":"Kirthana Gopalakrishnan"},{"@type":"Organization","name":"Google DeepMind"},{"@type":"Organization","name":"Gemini Robotics"},{"@type":"Thing","name":"人形机器人 (humanoid)"},{"@type":"Thing","name":"VLA"},{"@type":"Thing","name":"泛化 (generalization)"},{"@type":"Thing","name":"跨载体 (cross embodiment)"},{"@type":"Thing","name":"模拟 (simulation)"},{"@type":"Thing","name":"遥操作 (teleop)"},{"@type":"Thing","name":"世界建模 (world modeling)"},{"@type":"Thing","name":"ICL"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"跑得比博尔特快没用？DeepMind 机器人负责人谈 Gemini Robotics 与 GPT-2 时代的机器人","item":"https://talk.solomind.cc/2026-10-03-cogrev-one-brain-any-body-google-deepmind-s-kee"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>跑得比博尔特快没用？DeepMind 机器人负责人谈 Gemini Robotics 与 GPT-2 时代的机器人</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 跑得比博尔特快没用？DeepMind 机器人负责人谈 Gemini Robotics 与 GPT-2 时代的机器人

<div class="pd-byl"><b>Kirthana Gopalakrishnan</b> · Gemini Robotics 研究负责人 · 2026-10-05</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-03-cogrev-one-brain-any-body-google-deepmind-s-kee.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">而做泛化就像是抬船，把所有船的水位都抬起来。</div><div class="a">— Kirthana Gopalakrishnan <button class="pd-ts" data-t="15:23" data-who="Kirthana Gopalakrishnan" data-en="And working on generalization is like lifting the boat, lifting the wave for all the boats." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Kirthana Gopalakrishnan]]
>
> **公司** [[Google DeepMind]] · [[Gemini Robotics]]
>
> **概念** [[人形机器人]] · [[VLA]] · [[泛化]] · [[跨载体]] · [[模拟]] · [[遥操作]] · [[世界建模]] · [[ICL]]

机器人能跑得比最快的人类还快，这在互联网上刷了屏——但在 [[Google DeepMind|Google DeepMind]] 资深研究科学家、[[Gemini Robotics|Gemini Robotics]] 研究负责人 [[Kirthana Gopalakrishnan|Kirthana Gopalakrishnan]] 看来，这恰恰不是机器人实用性上的关键。

这是她第四次做客 The Cognitive Revolution,聊的是今天 AI 领域最大的悬念之一:通用机器人到底还要多久才能广泛有用？

## 机器人奥运会： impressive,但不是重点

今年夏天中国举办了机器人奥运会，[[人形机器人|人形机器人]]赛跑的视频到处流传。

Kirthana 说她爸爸都来问「你看到那些人形机器人在奔跑了吗」,印度的朋友也在讨论「中国造出了跑得比最快人类还快的机器人」。

从研究角度看她并不太惊讶，但承认它「以一种非常强烈的方式抓住了公众的想象力」，而且和 20 年前 DARPA 挑战赛里那些走两步、开个门就摔倒的机器人拼在一起对比，进步确实惊人。

但她随即泼了盆冷水：

奔跑这类运动(locomotion)能力恰恰是最容易在[[模拟|仿真]]里训练的——地面和墙面是刚性平坦表面，物理好建模，训练成本可控。

真正难的是操作(manipulation):「你关心的是接触，对吧？而接触何时发生、物体如何表现，这正是当前仿真开始有些崩溃的地方。」

叠布料难，因为有摩擦、有形变；抓取放置(pick and place)则相对扎实，因为接触动力学可预测。

一句话：**物体越刚性、形变越小，仿真越好做**(Sim2Real,即仿真中训练的能力能否迁移到现实，是机器人学的关键难点)。

至于跑得快到底有没有用？

她的回答很干脆：「我是一个非常多产的人，我的很多朋友也都在非常有成效地工作着，但我们跑得都没有 Usain Bolt 快。」

速度不是机器人实用性的限制因素，她和团队更关注让机器人在物理世界帮人做有用的事。

## 泛化 vs 精通：先抬水位，再爬高峰

机器人领域有个核心权衡：你可以做只擅长一两件事的狭窄 AI,但「做第 n 件事的成本和做第一件或第二件事的成本完全一样」。

而构建一个非常通用的基线，再快速调优到精通，要划算得多——「[[泛化|泛化]]和精通是两个某种程度上正交的轴，而做泛化就像是把所有船的水位都抬起来。」

她在 LLM 上已经看到过同样的剧本：最初人人做专用小模型，后来通用模型反超，再从通用基线爬到专精。

她认为同样的论点大概率适用于机器人。

## 机器人还在 GPT-2 时代

那机器人现在走到 LLM 的哪个阶段了？她的判断：「我认为还是 GPT-2」。理由有二：

一是少样本学习要能在很多不同任务上真正学得好才够 GPT-3 水平；二是机器人有个语言模型从未有过的麻烦——**[[跨载体|跨载体]](cross embodiment)问题**：

「如果它只在你的机器人、你的特定配置上有效，那它真的是一个通用大脑吗？」

GPT 跑在手机、Mac、Linux 上行为都一致，但机器人大脑换个身体可能就完全无能为力。

「要做出能把这些因素折算排除掉的、非常通用的大脑，还有很多工作要做。」

最近很多公司展示「看一次演示就能学会」的单样本泛化。

她认为这类结果本质上是「视频提示」——就像以前用文本提示、后来用图像提示，现在用视频提示基础模型，属于 [[ICL|ICL]](上下文学习，不训练、只靠示例引导)光谱的一部分。

但有两个待解问题：模型是照抄还是真泛化(换个场景还能不能做)？

以及你提示的任务难度如何——「很多抓取放置模型有大量数据，但你能给机器人演示怎么系垃圾袋，然后它看完就能系好吗？

现在还相当早期。」

## Gemini Robotics 2:三模型架构

今年夏天 Google 发布了三个模型。

**Gemini Robotics ER 2** 是具身推理模型，她称之为「机器人控制的 system 2 大脑」，基于 Gemini flash 系列调优，能做图像视频理解、语义推理，并且通过 API 开放——开发者可以像给数字智能体定义工具一样给它定义工具。

**Gemini Robotics 2** 是 [[VLA|VLA]](视觉-语言-动作模型，把语言和图像映射到机器人关节动作)，「现在已能控制从指尖到脚部的整个机器人」。

**Gemini Robotics On-Device 2** 是能装进机器人自带电脑的更小版本，不依赖云端，能力可比但规模更小。

为什么 ER 先上 API?

因为「ER 在能力方面肯定更接近 Gemini 本身，所以它更成熟；而 Actions 离前沿更近」，怎么让动作模型更有用、更广泛地服务还有很多研究要做。

开放后的使用规模让团队惊讶——「一旦放到更广泛的平台上，事情会爆发到什么程度」，而且学术界的用法(基准测试、智能体如何影响机器人)和机器人公司的用法都很出乎意料。

关于 ER 与 VLA 之间的接口，这个方向叫可控性(steerability):VLA 目前可以通过语言和指向来操控，但不是给「放到这个像素位置」这样的 API。

「如果 ER 和 VLA 之间的模态只是文本，很多东西可能会丢失，所以我们希望那个接口随时间尽可能丰富。」

延迟问题怎么解？

她认为「不会是我们先做出慢的模型，然后再把它们变快」，而是同时做快模型和慢模型，再把它们蒸馏成一个——但某些能力可能只会在大模型里涌现，届时再想办法下沉。

而速度需求本身也分场景：「我说『机器人去把衣服叠了』，我并不在乎它叠多快，我在乎它叠得多好。」<button class="pd-ts" data-t="27:38" data-who="/ 30:00" data-en="But let's say if I'm at home or at some point and I'm like, hey robot, can you go fold my laundry? I don't really care about how fast it is folding laundry. I care about how well it is doing the task." aria-label="回原文"></button>

ER 2 的 128K 上下文窗口，按密集编码大约相当于三分钟的记忆。她的「机器人上下文工程」建议：

不必全部用图像这种高密度模态保存，「很多时候关于我如何做事的叙述，即使是文本形式的总结，也相当有用」——就像人做饭，不需要逐帧记住每个动作，文本摘要就能维持连贯。

多任务串行还有个残酷的数学问题：

「如果你有 10 个任务按顺序执行，ER 模型有某个 x 成功率，VLA 模型有 y 成功率，那么你基本上就是在复合误差。」

很多失败其实出在编排上——什么时候算做完、怎么切到下一个任务。

## 硬件：手，一年跨过一个世代

上次做客时她说最需要硬件厂商给「好的手」。一年过去了，她自己的内在模型都在更新：

「Gemini Robotics 1 展示了用夹爪实现的大量灵巧性，只过了一年零一个季度，Gemini Robotics 2 能做多手指灵巧操作，可以系垃圾袋、对多指手做非常精细的控制。」

夹爪曾是灵巧性前沿，现在手部机器人能做夹爪能做的一切、还能做更多。

市面上的手已经「相当不错」，但在可靠性、可重复性和成本上还有工作要做。

力量方面存在很大区间：

她说 wuji 手大概相当于一个 10 岁孩子的力量，而 sharper 手据说能举起 20 公斤、也见过它开罐子——虽然「可能不是一个很紧的」。

主持人调侃：人类最后一份工作也许是帮机器人拧开它们手腕力量不够的罐子。

至于软体机器人，她态度务实：「对 AI 驱动的机器人来说，重要的是什么是可重复的、什么是耐用的。」

她真正感兴趣的是 UMI 这类带传感器的数据采集方案和触觉模态。

## 数据之争：别押注单一来源

NVIDIA 的 Jim Phan 博士主张未来训练数据会走向以自我中心的视频为主、[[遥操作|遥操作]]和可穿戴设备数据萎缩、最终靠仿真解决一切。

Kirthana 拒绝站队：「一切都必须以结果为支撑，而且我认为做预测没有太大意义——通常是有一个预测，做实验验证，才知道对不对。」

她的分析框架是把每种数据源放在「规模 × 精度」的坐标上：

遥操作数据不太可扩展但高度精确(它就是机器人的数据)，可机器人硬件一进化它就贬值；

UMI 数据带传感器、比人类数据精确但受传感器拖累不够可扩展；

人类/自我中心数据最可扩展但嘈杂，且每个人身材不同、执行方式差异很大。

「我在这件事上采取非常教条的立场是不明智的，因为随着新证据和更好硬件的出现，这一切都会改变。

而且你很可能需要所有类型的数据。」

## 安全是一种能力

被问到对齐与安全会不会成为机器人部署的瓶颈，她的立场是「我把安全看作一种能力」——「人们不会使用不安全的机器人和不安全的智能体」。

她区分了几层安全：与 AI 无关的操作安全(摔倒的人形机器人本身就危险)；护栏类(完成任务同时不越界)；

以及机器人特有的传感器故障应对。她举了个好笑的演示：

有人把篮子扣在干活的人形机器人头上，它可以蒙着眼继续干，但正确反应是意识到「有东西挡住了我的视线，请你拿开」。

「安全是一个全系统的事情，从机械设计、系统安全一直贯穿到 ER 和高层大脑。」

人形外观还带来一层微妙问题：

她有「两个大脑」——研究者大脑知道这些是机器，但因为它们太像人，「那条边界会变得模糊」，新人接触机器人时需要更清楚地意识到这些是机器。

而且人形被评判的标准更苛刻：

「人们不指望夹爪机器人聪明，但一个人形机器人在那里乱摸一通、制造很多失败，就会被严厉得多地评判。」

## 没有定论，正是最有趣之处

对于机器人模型是否需要[[世界建模|世界建模]](一种对未来状态的内部预测，让系统能预判并与世界流畅交互)还是可以像 LLM 那样逐 token 循环推进，她的回答是「陪审团还没退场」：

「作为机器人学家，你不会在情感上依附于某一种方法——你依附的是问题本身。无论用什么方式解决问题，你都会选那个方式。」

而这恰恰是她眼里这行最迷人的地方：「这个领域还很早期，配方还没有稳定下来。

不同的人可以有非常不同的思想流派，我们会看到谁是对的——而且可能他们全都是对的。」

## 本集带走

- **别被赛跑视频带偏**：奔跑这类刚性、平坦场景的任务最容易仿真训练，也离机器人实用性最远；真正的硬骨头是涉及接触、摩擦、形变的操作任务。
- **通用优先于专精**：狭窄 AI 做第 n 件事的成本和第一件一样高；先建通用基线再调优到精通，是 LLM 验证过、机器人大概率复用的路线。
- **机器人还只是 GPT-2**:跨载体(同一个大脑换不同身体都好用)没解决之前，谈不上通用大脑；这也是她判断「单样本学会系垃圾袋」这类演示为时尚早的原因。
- **快慢模型会并存再蒸馏**：家用叠衣服不在乎速度、产线在乎，不同规模模型服务不同应用；部分能力可能只在大模型涌现，再想办法下沉到端侧。
- **数据没有银弹**：遥操作(精准但不可扩展且随硬件过时)、UMI(带传感器、较精准)、人类自我中心视频(最可扩展但嘈杂)各有优劣，最终大概率是混合，并随硬件演进重新洗牌。
- **安全是能力不是约束**：从机械急停、护栏遵守到传感器故障应对，安全贯穿全系统；不安全的机器人根本没人用。

> 【背景】Gemini Robotics 2 的 VLA 是 Google DeepMind 与 Apptronik、Agile Robots、Boston Dynamics 等合作伙伴共同构建的(转写稿中合作方名字系语音识别，Apptronik 写作 Aftronic);「sharper 手」很可能指 Shadow Hand。VLA 指视觉-语言-动作模型。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">而做泛化就像是抬船，把所有船的水位都抬起来。</span>  
> *And working on generalization is like lifting the boat, lifting the wave for all the boats.*  
> <span class="qm">—— Kirthana Gopalakrishnan · [15:23]</span> ^q1

> <span class="qz">如果它只在你的机器人、你的特定配置上有效，那它真的是一个通用大脑吗？</span>  
> *If it just works on your robot with your specific setup, is it really a generic brain?*  
> <span class="qm">—— Kirthana Gopalakrishnan · [20:41]</span> ^q2

> <span class="qz">我认为我们会同时做出快的和慢的模型，然后把它们蒸馏成一个。</span>  
> *I think we are going to simultaneously make the fast and the slow models and then distill them to one.*  
> <span class="qm">—— Kirthana Gopalakrishnan · [30:00]</span> ^q3

> <span class="qz">虽然我们看到跨具身方面取得了巨大的飞跃，但我认为把一个新具身完全零样本地应用到很多任务上并达到很高的可靠性，这件事我认为还没有很强的先例。</span>  
> *And while we see a large leap being made in cross-embodiment, I think that taking a new embodiment and completely zero-shotting it to a lot of tasks with very high reliability is still something that is, I don't think there is a very strong precedent for that.*  
> <span class="qm">—— Kirthana Gopalakrishnan · [51:22]</span> ^q4

> <span class="qz">如果你有 10 个任务按顺序执行，ER 模型有某个 x 成功率，VLA 模型有 y 成功率，那么如果你有一个按顺序执行的任务，你基本上就是在复合误差。</span>  
> *if you have 10 tasks in sequence and now you have the ER model which has a certain x success rate and the VLA model which has a y success rate now the if you have a sequencing task you are basically compounding the error.*  
> <span class="qm">—— Kirthana Gopalakrishnan · [52:39]</span> ^q5

> <span class="qz">人们不会指望它聪明，但一个人形机器人在那里乱摸一通、制造很多失败，就会被严厉得多地评判</span>  
> *People don't expect it to be smart, but a humanoid just grappling around and creating a lot of failures would be judged much harshly because*  
> <span class="qm">—— Kirthana Gopalakrishnan · [66:54]</span> ^q6

> <span class="qz">而这也许是机器人领域工作最令人兴奋的部分之一，就是这个领域还很早期，配方还没有稳定下来。</span>  
> *And this is maybe one of the most exciting parts of working in robotics is that it is still very early that the recipes haven't stabilized.*  
> <span class="qm">—— Kirthana Gopalakrishnan · [74:14]</span> ^q7

> <span class="qz">所以我认为在这件事上采取非常教条的立场是不明智的，因为随着新证据的出现和更好硬件的出现，这一切都会改变。</span>  
> *So I don't think it's wise to take a very principled view about this because all of this will change as new evidence emerges and better hardware emerges.*  
> <span class="qm">—— Kirthana Gopalakrishnan · [78:31]</span> ^q8

> <span class="qz">那些机器人没有一个是由机器学习驱动、连接到大模型的机器人，而现在情况已经非常不同了。</span>  
> *None of those robots were machine-learned robots, which was connected to the large models, and now things are very different.*  
> <span class="qm">—— Kirthana Gopalakrishnan · [56:23]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-19-eyeonai-from-zero-to-150-robots-in-just-20-month|人形机器人上战场：公关跑得比机器人快]]<span class="pd-rz">同概念:人形机器人 (humanoid)、仿真 (simulation)</span>
- [[2026-09-11-dwarkesh-john-beren-charlie|RL 为什么灵、蒸馏为什么凶:三位研究员的前沿圆桌]]<span class="pd-rz">同概念:泛化 (generalization)、RL</span>
- [[2026-10-02-sourcery-frontier-ai-is-a-ferrari--most-companies|从「考测试」到「干真活」：TuringJonathan 谈 AI 训练的范式切换]]<span class="pd-rz">同概念:泛化 (generalization)、护栏 (guardrails)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-28-a16z-fei-fei-li-on-spatial-intelligence-and-r|李飞飞谈空间智能:机器人不需要完美,需要的是反事实推理]]<span class="pd-rz">同概念:仿真 (simulation)</span>
- [[2026-08-26-deepmind-the-mathematics-of-ai-uncertainty|给 AI 装上「自我怀疑」：剑桥教授 30 年的不确定性智能之路]]<span class="pd-rz">同公司:Google DeepMind</span>
- [[2026-06-10-talks-jensen-huang-on-vision-risk-and-the-gpu|只在美国才能发生的故事:黄仁勋与 NVIDIA]]<span class="pd-rz">同概念:仿真 (simulation)</span>

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
