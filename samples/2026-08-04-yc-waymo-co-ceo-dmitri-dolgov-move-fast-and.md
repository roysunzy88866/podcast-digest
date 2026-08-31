---
title: Waymo 谈物理 AI 的七条实战教训
podcast: Y Combinator Startup Podcast
date: 2026-08-31
source_url: undefined
duration: "49:10"
type: episode
cover: "#64748b"
image: "/covers/2026-08-04-yc-waymo-co-ceo-dmitri-dolgov-move-fast-and.jpg"
description: Waymo 技术负责人分享在物理世界大规模部署 AI 智能体的七条技术教训，从演示到产品的鸿沟、传感器架构选型，到基础模型与仿真飞轮。
host: "[[Dmitri Dolgov]]"
companies: ["[[Waymo]]"]
concepts: ["[[Waymo driver]]", "[[智能体]]", "[[物理 AI]]", "[[LiDAR]]", "[[端到端模型]]", "[[模拟器]]", "[[世界模型]]", "[[Waymo 基础模型]]", "[[结构增强型端到端]]", "[[闭环仿真]]", "[[飞轮]]", "[[安全与准备框架]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/covers/2026-08-04-yc-waymo-co-ceo-dmitri-dolgov-move-fast-and.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-04-yc-waymo-co-ceo-dmitri-dolgov-move-fast-and#post","headline":"Waymo 谈物理 AI 的七条实战教训","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-04-yc-waymo-co-ceo-dmitri-dolgov-move-fast-and","mainEntityOfPage":"https://talk.solomind.cc/2026-08-04-yc-waymo-co-ceo-dmitri-dolgov-move-fast-and","description":"Waymo 技术负责人分享在物理世界大规模部署 AI 智能体的七条技术教训，从演示到产品的鸿沟、传感器架构选型，到基础模型与仿真飞轮。","datePublished":"2026-08-31","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-08-04-yc-waymo-co-ceo-dmitri-dolgov-move-fast-and.jpg","about":[{"@type":"Person","name":"Dmitri Dolgov"},{"@type":"Organization","name":"Waymo"},{"@type":"Thing","name":"Waymo driver"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"物理 AI (physical AI)"},{"@type":"Thing","name":"LiDAR"},{"@type":"Thing","name":"端到端模型 (end-to-end)"},{"@type":"Thing","name":"模拟器 (simulator)"},{"@type":"Thing","name":"世界模型 (world model)"},{"@type":"Thing","name":"Waymo 基础模型 (Waymo Foundation Model)"},{"@type":"Thing","name":"结构增强型端到端 (structure augmented end-to-end)"},{"@type":"Thing","name":"闭环仿真 (closed loop)"},{"@type":"Thing","name":"飞轮 (flywheel)"},{"@type":"Thing","name":"安全与准备框架 (safety and readiness framework)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Waymo 谈物理 AI 的七条实战教训","item":"https://talk.solomind.cc/2026-08-04-yc-waymo-co-ceo-dmitri-dolgov-move-fast-and"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Waymo 谈物理 AI 的七条实战教训</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Waymo 谈物理 AI 的七条实战教训

<div class="pd-byl"><b>Dmitri Dolgov</b> · Waymo 技术负责人 · 2026-08-31</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-04-yc-waymo-co-ceo-dmitri-dolgov-move-fast-and.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">最好的 AI 时刻看起来会像什么都没发生一样。</div><div class="a">— Dmitri Dolgov <button class="pd-ts" data-t="02:11" data-who="Dmitri Dolgov" data-en="That the best AI moments will look like nothing happened." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Dmitri Dolgov]]
>
> **公司** [[Waymo]]
>
> **概念** [[Waymo driver]] · [[智能体]] · [[物理 AI]] · [[LiDAR]] · [[端到端模型]] · [[模拟器]] · [[世界模型]] · [[Waymo 基础模型]] · [[结构增强型端到端]] · [[闭环仿真]] · [[飞轮]] · [[安全与准备框架]]

这是 [[Waymo|Waymo]] 的一位技术负责人在 Y Combinator 创业学校上的演讲，主题是：在真实物理世界（而非屏幕上）大规模构建和部署 AI [[智能体|智能体]]，到底需要什么。他们做的产品是 [[Waymo driver|Waymo driver]]——一辆完全没有人开的出租车，目前每周在美国 15 个城市跑超过 400 万英里。最反直觉的一点：[[物理 AI|物理 AI]] 最棒的时刻，看起来应该像什么都没发生——不是炫技，而是安全平稳地把任务完成，车上的人甚至没注意到刚躲过一次危险。

## 物理世界有四道数字世界没有的坎

数字 AI（聊天机器人、代码助手）和物理 AI 之间有四个根本差距：

**错误代价差距**：数字产品出错，代价是重试一次；物理世界出错，代价可能用生命衡量，没有撤销按钮。**延迟差距**：数字助手花几秒回答没问题，但高速公路上每秒移动约 100 英尺，决策必须在毫秒级完成，而且算力只能放在车后备箱里。

**数据差距**：数字 AI 有整个互联网的预标注知识可用，物理世界没有这种"数字化互联网"。**验证差距**：数字产品可以先上线再迭代，用户帮你找边界情况；物理产品部署第一个机器人之前，就必须有极高的安全置信度。但同时，真实世界的运行经验又不可替代，不能只在实验室里"憋完美"再出门——所以必须极其清晰地定义运行条件和部署参数，用严格框架指导渐进式扩展。

## 演示只是 1%的工作，剩下的在"九的阶梯"上

一个能跑的演示最多只占最终产品的 1%。可靠性和性能住在一个指数级的"九的阶梯"上——从 90% 到 99% 相对容易，但每多一个 9，工作量大约翻 10 倍。所以你必须提前算清楚你的产品到底需要几个 9：演示可能 1 个 9 就够，辅助驾驶可能几个，但一个要在真实街道上与公众互动的全自动驾驶智能体，需要整整一摞 9。

他们 2009 年启动项目，2010 年就用十几个工程师完成了 10 条路线各 100 英里的无人干预自动驾驶——按演示标准，自动驾驶 2010 年就"解决了"。但从演示到真正提供服务花了约 10 年，再到每周 50 万次行程又花了 5 年。

前 1 亿英里花了 15 年，下一个 1 亿英里只用了 7 个月。原因就是：达到下一个 9 不能靠"做同样的事但更久"，必须做根本性不同的事——比如从简单的 bug 修复跳到构建完全冗余的系统、分层降级架构。

每一波 AI 突破（深度学习、ConvNets、Transformers、VLMs）都让做演示变容易 100 倍，但长尾难题移动得少得多。所以每个炒作周期都产出一堆精彩演示和极少真实产品。反复犯的错误是：把应该留给"九"的资源花在了演示上。

## 架构选型：别被早期陡坡骗了，看它在哪里变平

每种技术都有"性能-投入"曲线，起步陡峭然后变平。常见失败模式：选了早期爬坡最快的技术，感觉赢了，把陡坡投射到未来，然后撞上高原——发现这条路在产品需要的性能之前就变平了。

传感器选型就是典型例子。人类只用眼睛就能开车，所以"纯视觉"方案有存在性证明；如果目标只是接近人类水平或做辅助驾驶，这很合理。

但目标是超人类安全性能时，弱感知的安全曲线会过早变平。Waymo 的选择是用多种感知模态互补：相机提供高分辨率和色彩但被动且怕暗怕眩光，[[LiDAR|LiDAR]]（一种用激光直接测量周围 3D 结构的传感器）主动发光所以黑暗中一样工作，雷达擅长穿透雾雨雪并直接测速。这些不是互相备份，而是各自编码后融合成一个比任何单一传感器都精确得多的统一世界视图——一片树叶挡住一个传感器时，车不会停摆。

硬件方面，不要锚定今天的组件价格。他们已经到了第六代硬件，每代都在大幅降价简化。把公司赌在今天的硬件价格上，等于赌一个很快会过期的数字。

## 骑技术浪潮的真正难点不是用新东西，而是不制造碎片

每次 AI 突破浪潮，他们都围绕新技术重建 Waymo driver：2013 年用 ConvNets 做感知，2017 年 Transformers 出现后在感知和行为预测规划上重注（驾驶因为社交属性其实和语言建模有类似之处——你在用"肢体语言"和其他道路参与者"对话"），现在用最新的 VLMs。但用新技术做原型不是最难的，真正难的是把前沿研究搬进生产、在安全关键环境部署而不回归、不打断产品扩张节奏，同时还要减少碎片化而不是增加。

两条建议：第一，启动新技术探索时就要想清楚"成功了之后怎么整合进整个系统"，否则项目成功却走进死胡同，极其浪费。第二，问的不只是"新东西给我什么能力提升"，还要问"它简化了技术栈吗？

导致了统一还是碎片化？"——发布门槛要同时要求突破性能和根本性简化。

这套理念产出了 [[Waymo 基础模型|Waymo 基础模型]]——一个"多模态世界动作语言模型"。多模态指能处理相机、LiDAR、雷达输入；[[世界模型|世界模型]]指内在理解物理规律和社交语义；动作模型指理解自身行动对世界的影响；语言对齐指能调用视觉语言模型的通用世界知识，在罕见语义场景中特别有用。架构是编码器-解码器[[端到端模型|端到端模型]]，分"快慢双路径"：快路径融合原始传感器数据做毫秒级安全决策（像驾驶本能，行人冲出来立刻刹车），慢路径做更复杂的语义理解（比如识别路边着火的车，即使几何上前方畅通也决定绕行）。

## 结构增强的端到端：结构要引导规模，不要对抗规模

AI 界有个著名原则叫"苦涩的教训"——利用海量算力和数据的通用方法终将胜过依赖人工设计知识的方法。但结构怎么用，决定你站在哪边：对抗规模的结构会输，引导规模的结构会赢。

纯端到端（传感器像素直接到控制指令）最容易构建，前期进步快，但要在安全关键环境达到超人类性能，基本版端到端不够。关键问题是：你加的结构是限制了解空间，还是帮助你在不损失通用性的情况下扩展？

举了个思想实验：构建下围棋的机器人，不用端到端像素到动作，而是用 19×19 棋盘作为中间表示——这不限制模型，但极大帮助扩展。物理世界没有这么干净的中间表示，所以才需要学习到的表示；但物理世界有物理定律、交通规则、可预测的行为模式，这些结构可以利用。

他们的做法叫"[[结构增强型端到端|结构增强型端到端]]"——在学习到的嵌入之上叠加结构化表示。三个好处：推理时可以做实时安全和正确性验证（不是黑盒了）；大规模训练评估时可以灵活选择在结构化空间还是完整端到端空间做，效率高很多；有更强的可验证反馈信号支持强化学习等训练方法。

## 模拟器本身就是一个大 AI 模型

训练评估分开环（被动看输入输出对，适合模仿学习）和闭环（采取行动→看世界变化→更新感知→再行动，评估动作序列）。对安全关键的物理智能体，"采取行动并评估反事实"的能力绝对关键——这需要真正的[[模拟器|模拟器]]，而它不是 AI 旁边的小工具，本身就是一个大 AI 模型，构建难度不亚于智能体本身。

模拟器背后的 AI 必须理解物理、语义、交通、天气，质量要高到能高置信度地训练评估将放入真实世界的智能体——本质上要构建一个高度准确的生成式世界模型。Waymo 多年前就在做"行为世界模型"，端到端时代还需要加上"感知世界模型"（生成逼真传感器数据）。

利用结构增强表示，行为世界模型在结构化中间表示空间运作，紧密耦合的传感世界模型生成逼真传感器仿真。结合 Google DeepMind 的 Genie 3 工作，能在从未见过的纯合成罕见场景中训练评估——比如高速公路上降落飞机、路口走过大象。

## 三个 AI + 飞轮 + 评估才是完整系统

大规模运作不能只建一个 AI，要建三个：智能体（驾驶）、模拟器（虚拟训练场）、评判者（严格评估并告诉智能体怎么改进）。三者共享基础推理和生成能力，所以都基于同一个基础模型。

部署产生数据→数据让模拟器更逼真→模拟器生成更难场景→评判者打分、智能体学习→智能体变强→部署产生更多数据——[[飞轮|飞轮]]转起来。但飞轮需要指标引导方向。

最后一个教训：**在构建技术和产品之前，先构建评估和指标**。如果你不能定量定义"足够好"是什么，你不是在构建产品，你是在迭代演示。

模型架构如今传播很快，数据极其重要，但没有好指标就是盲飞。对物理 AI，仅模型级评估不够——要从物理层到行为层到车外组件到运营流程全链路评估验证。他们花多年构建的"[[安全与准备框架|安全与准备框架]]"是指导开发部署扩展的核心资产。

在物理世界，信任就是一切。信任不是靠讲聪明架构赢来的，是日复一日在现场证明系统安全。

模型可以泄露，算法可以复制，但数亿英里真实自动驾驶里程加上证据级评估和公开审计，远难复制——这才是终极商业优势。最新数据：基于超过数亿英里完全自主里程，在运营区域内导致严重伤害的碰撞方面，Waymo driver 比人类司机好约 17 倍，按当前规模每 8 天预防一次严重伤害。

> 【背景】演讲者身份在转写稿中未出现。本集来自 Y Combinator 的 Startup School 活动，演讲者为 Waymo 的技术负责人。转写稿中"lighters"为 LiDAR 的语音识别错误，"condom nets"为 ConvNets 的错误，"BLMs"可能指 LLMs，"JLR IPAs"和"Ojai"为车辆平台名称，正文中已按正确词书写。Richard Sutton 的"苦涩的教训"(The Bitter Lesson)是 2019 年发表的著名论文。"Genie 3"为 Google DeepMind 的研究项目。

## 本集带走

- **先算你的产品需要几个 9**：演示 1 个 9 就够，全自主物理智能体需要一摞 9。每多一个 9 工作量翻 10 倍，且不能靠"做同样的事更久"，必须换根本不同的方法（冗余系统、降级架构等）。
- **选技术看它在哪里变平，别被早期陡坡骗**：问清楚这条技术路径的性能天花板是否够得到你的产品要求，不够就别上。
- **结构要用对方向**：对抗规模的结构（人为限制解空间）会输，引导规模的结构（提供有用中间表示而不限制通用性）会赢——"结构增强型端到端"是可参考的思路。
- **模拟器不是工具，是跟智能体同级的大模型**：[[闭环仿真|闭环仿真]]能力是安全关键物理 AI 的必需品，模拟器本身就需要是世界级的生成式模型。
- **先建评估指标，再建技术和产品**：不能定量定义"足够好" = 还在迭代演示不在做产品。评估体系是物理 AI 公司的核心战略资产和最终护城河。
- **三个 AI 一个飞轮**：智能体、模拟器、评判者共享基础模型，靠部署数据驱动飞轮加速——单建一个 AI 不够。

<div class="pd-sec pd-sec-q">全部金句 <span>13 条</span></div>

> <span class="qz">最好的 AI 时刻看起来会像什么都没发生一样。</span>  
> *That the best AI moments will look like nothing happened.*  
> <span class="qm">—— Dmitri Dolgov · [02:11]</span> ^q1

> <span class="qz">然而，当你处理的是原子而不是比特时，打破事物并不是真的可以。</span>  
> *However, when you're dealing with atoms instead of bits, breaking things is not really okay.*  
> <span class="qm">—— Dmitri Dolgov · [03:15]</span> ^q2

> <span class="qz">在物理世界，一个错误的代价可以用人类生命来衡量，而不是 tokens。</span>  
> *In the physical world, the cost of a mistake can be measured in human lives, not tokens.*  
> <span class="qm">—— Dmitri Dolgov · [04:11]</span> ^q3

> <span class="qz">而一个可运行的演示最多只是你必须做的工作的 1%。</span>  
> *And a working demo is 1% at best of the work that you have to do.*  
> <span class="qm">—— Dmitri Dolgov · [08:21]</span> ^q4

> <span class="qz">这就是为什么每一个炒作周期都会产生一波绝对精彩的演示，却很少有真正的产品。</span>  
> *And that's why every hype cycle produces a wave of absolutely spectacular demos and very few real products.*  
> <span class="qm">—— Dmitri Dolgov · [14:02]</span> ^q5

> <span class="qz">所以在统计你的演示浏览量之前，先计算你的"九"。</span>  
> *So count your nines before you count your demo views.*  
> <span class="qm">—— Dmitri Dolgov · [14:43]</span> ^q6

> <span class="qz">更难构建的能力是将那项前沿研究投入生产，并在安全关键的环境中部署它而不出现回归。</span>  
> *The much harder muscle to build is to carry that bleeding edge research into production and deploy it in a safety-critical environment without regressions.*  
> <span class="qm">—— Dmitri Dolgov · [22:56]</span> ^q7

> <span class="qz">本质上，对抗规模的结构将总是输掉，而引导规模的结构将总是获胜。</span>  
> *Essentially, structure that fights scale will always lose, and structure that channels scale always wins.*  
> <span class="qm">—— Dmitri Dolgov · [31:25]</span> ^q8

> <span class="qz">而真正的模拟器不仅仅是一些位于你 AI 旁边的轻量级工具。它本身就是一个大型 AI 模型。</span>  
> *And a real simulator isn't just some lightweight tooling that sits next to your AI. It is a big AI model in of itself.*  
> <span class="qm">—— Dmitri Dolgov · [37:55]</span> ^q9

> <span class="qz">构建一个好的逼真模拟器的问题与构建智能体本身一样困难。</span>  
> *And the problem of building a good realistic simulator is just as hard as building the agent itself.*  
> <span class="qm">—— Dmitri Dolgov · [38:06]</span> ^q10

> <span class="qz">在构建你的产品之前，先构建你的评估和你的指标。</span>  
> *Build your eval and your metrics before you build your product.*  
> <span class="qm">—— Dmitri Dolgov · [43:13]</span> ^q11

> <span class="qz">如果你不能定量地定义"足够好"意味着什么，你并不是在构建产品，你只是在迭代你的演示。</span>  
> *If you can't quantitatively define what good enough means, you're not really building a product, you're just iterating on your demo.*  
> <span class="qm">—— Dmitri Dolgov · [43:16]</span> ^q12

> <span class="qz">你的模型可能会被泄露，算法可能会被复制，但在现实世界中数亿英里的完全自主操作，由证据级评估和公开审计证明支持，这要难得多、得多。</span>  
> *Your models can be leaked, algorithms can be replicated, but hundreds of millions of miles of fully autonomous operations in the real world, backed by evidence-grade evaluation and publicly audited proof, that is much, much more difficult to replicate.*  
> <span class="qm">—— Dmitri Dolgov · [45:38]</span> ^q13

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-01-11-lennys-what-openai-and-google-engineers-learned|AI 产品不能照搬软件老办法：从高控制低自主开始]]<span class="pd-rz">同概念:智能体 (agent)、飞轮 (flywheel)</span>
- [[2026-07-27-yc-jensen-huang-the-mindset-that-built-nvid|Jensen Huang 谈 NVIDIA 创业史、物理 AI 与创始人模式]]<span class="pd-rz">同公司:Waymo · 同概念:物理 AI (physical AI)</span>
- [[2026-08-13-yc-chelsea-finn-this-is-the-state-of-the-ar|让机器人在真实世界干活：Physical Intelligence 的通用机器人之路]]<span class="pd-rz">同公司:Waymo · 同概念:物理 AI (physical AI)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|估值150亿的隐形AI公司：我们最好的工作是独自安静地完成]]<span class="pd-rz">同公司:Waymo · 同概念:智能体 (agent)、物理 AI (physical AI)</span>
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同公司:Waymo · 同概念:智能体 (agent)</span>
- [[2026-08-18-a16z-how-do-you-defend-against-ai-that-can-ha|当签名已死：AI智能体如何击穿传统网络安全]]<span class="pd-rz">同概念:智能体 (agent)、推理 (inference)</span>

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
