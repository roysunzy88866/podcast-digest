---
title: "Jev 背后的人:Diogo 谈为什么 AI 应该像数据库而不是同事"
podcast: Latent Space
date: 2026-09-24
source_url: https://www.latent.space/p/jev
duration: "140:52"
type: episode
cover: "#0e7490"
image: "/covers/2026-09-21-latent-jev.jpg"
description: "TypeSafe CEO Diogo Almeida 在模型爆火后首次长聊:为什么他不做聊天模型,而押注「每美元智能」与可编程 AI。"
guests: ["[[Diogo Almeida]]"]
companies: ["[[Jev]]", "[[TypeSafe]]", "[[OpenAI]]"]
concepts: ["[[System 1 模型]]", "[[RLCD]]", "[[RLHF]]", "[[RLVR]]", "[[模式坍缩]]", "[[校准]]", "[[鲁棒性]]", "[[基准测试]]", "[[安全对齐]]", "[[编码智能体]]", "[[合成数据]]"]
category: 创业与行业
tags:
  - 创业与行业
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-09-21-latent-jev.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-21-latent-jev#post","headline":"Jev 背后的人:Diogo 谈为什么 AI 应该像数据库而不是同事","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-21-latent-jev","mainEntityOfPage":"https://talk.solomind.cc/2026-09-21-latent-jev","description":"TypeSafe CEO Diogo Almeida 在模型爆火后首次长聊:为什么他不做聊天模型,而押注「每美元智能」与可编程 AI。","datePublished":"2026-09-24","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-21-latent-jev.jpg","isBasedOn":"https://www.latent.space/p/jev","about":[{"@type":"Person","name":"Diogo Almeida"},{"@type":"Organization","name":"Jev"},{"@type":"Organization","name":"TypeSafe"},{"@type":"Organization","name":"OpenAI"},{"@type":"Thing","name":"System 1 模型 (System 1)"},{"@type":"Thing","name":"RLCD"},{"@type":"Thing","name":"RLHF"},{"@type":"Thing","name":"RLVR"},{"@type":"Thing","name":"模式坍缩 (mode collapse)"},{"@type":"Thing","name":"校准 (calibration)"},{"@type":"Thing","name":"鲁棒性 (robustness)"},{"@type":"Thing","name":"基准测试 (benchmark)"},{"@type":"Thing","name":"安全对齐 (safety alignment)"},{"@type":"Thing","name":"编码智能体 (coding agent)"},{"@type":"Thing","name":"合成数据 (synthetic data)"}],"articleSection":"创业与行业"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"创业与行业","item":"https://talk.solomind.cc/tags/创业与行业"},{"@type":"ListItem","position":3,"name":"Jev 背后的人:Diogo 谈为什么 AI 应该像数据库而不是同事","item":"https://talk.solomind.cc/2026-09-21-latent-jev"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Jev 背后的人:Diogo 谈为什么 AI 应该像数据库而不是同事</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Jev 背后的人:Diogo 谈为什么 AI 应该像数据库而不是同事

<div class="pd-byl"><b>Diogo Almeida</b> · TypeSafe CEO · 2026-09-24</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-21-latent-jev.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">这在数学上是显而易见的,但在经验上并不成立。</div><div class="a">— Diogo Almeida <button class="pd-ts" data-t="07:15" data-who="Diogo Almeida" data-en="It's mathematically obvious, but it doesn't empirically hold." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Diogo Almeida]]
>
> **公司** [[Jev]] · [[TypeSafe]] · [[OpenAI]]
>
> **概念** [[System 1 模型]] · [[RLCD]] · [[RLHF]] · [[RLVR]] · [[模式坍缩]] · [[校准]] · [[鲁棒性]] · [[基准测试]] · [[安全对齐]] · [[编码智能体]] · [[合成数据]]
>
> **来源** [Latent Space](https://www.latent.space/p/jev)

这一集聊的是刚刷屏整个科技圈的新模型 [[Jev|Jev]],主角是它的缔造者、[[TypeSafe|TypeSafe]] 公司 CEO [[Diogo Almeida|Diogo Almeida]]——一位前 [[OpenAI|OpenAI]] 员工、自我描述「0% 创业型」的技术型 CEO。发布才一周,他情绪上「像一具破烂的行尸」,但精神上异常亢奋,因为在他看来,「基于 AI 的经济革命又回到了桌面上」,而且「开发者们懂了」<button class="pd-ts" data-t="01:06" data-who="Diogo Almeida" data-en="AI can be so much more than what was once thought. And like, yes, we are going to make like an AI based economic revolution is back on the table. And, um, This is fucking awesome." aria-label="回原文"></button>。

## 什么是一类「新模型」
Jev 不是又一个聊天机器人。Diogo 的说法是:我们需要一类新的模型,他们叫它「[[System 1 模型|System 1 模型]]」(系统一,借自心理学里「快思考」的概念)、机器原生、大型可编程——与预训练 LLM「互联网自动补全」、[[RLHF|RLHF]] 模型「回复文本」相对,这类模型的产出是**直接被代码消费的**。Jev 的名字来自杰文斯悖论,优化目标只有一个:「每美元智能」(intelligence per dollar)<button class="pd-ts" data-t="04:57" data-who="Diogo Almeida" data-en="whatever you want to call it. Jev is meant to be optimized for intelligence per dollar, hence the name Jev. Jevons Paradox." aria-label="回原文"></button>。他说,可靠性、成本、[[校准|校准]]、速度哪个最重要是永远的辩论,而 JEV 就是要站在每美元智能的前沿。

## 给 LeCun 的饼图挑错
LeCun 有一张著名的幻灯片:随着序列变长,模型出错概率不断累加,所以 LLM 注定完蛋。Diogo 认为这「在数学上显而易见,但在经验上并不成立」<button class="pd-ts" data-t="07:15" data-who="Diogo Almeida" data-en="But is obviously wrong. It's mathematically obvious, but it doesn't empirically hold. And this is my favorite thing to teach people about." aria-label="回原文"></button>,脱节出在[[模式坍缩|模式坍缩]]上:经过 RLHF(用人类反馈调优模型)的模型会像 GAN 一样丢掉少数类别、只输出最常见的模式。为了生成长串不出错,模型变得极端保守——因为显性错误容易被发现,而「看起来正确的细微错误」极难发现。这种「校准对字符串的概率分布是彻底的毒药」,也是字符串模型做不好决策的原因。

## 拒绝、安全对齐,和「智能像数据库」
Jev 不做拒答。Diogo 的理由很工程师:「拒绝显然就是一个类型错误(type error)」<button class="pd-ts" data-t="12:02" data-who="Diogo Almeida" data-en="But I think that safety alignment is generally misaligned with users. And refusal is just obviously a type error. If you're a human being and you're chatting with a bottle or whatever," aria-label="回原文"></button>——一个在后台跑的依赖库随机因为某条奇怪输入拒绝执行、让软件坏掉,「是彻头彻尾的疯狂」。他说[[安全对齐|安全对齐]]对 ChatGPT 这类第一方产品说得通,但在 API 里「完全不可接受」。主持人反问:如果被用来杀人呢?他的回答是:个人当然希望产品被用于好事,但绝不会在技术层做这件事——「绝对不会,因为那会割裂它的智能」<button class="pd-ts" data-t="15:33" data-who="Diogo Almeida" data-en="Will I do it at the technological layer? Absolutely not, because that will fracture the intelligence. Every single time you meet it overfit to some weird stuff," aria-label="回原文"></button>,而每一次过拟合都在让模型变得更笨。他的定位一句话:「智能会更像一个数据库,而不是一个同事」<button class="pd-ts" data-t="15:59" data-who="Diogo Almeida" data-en="So, and as a furthermore thing, to me, I think intelligence will be more like a database than a co-worker. I don't think it's up to databases to add checks on whether or not they're used" aria-label="回原文"></button>——数据库没有责任检查自己被用来干什么,API 也不应该知道下游在做什么。

## 反对公开跑分,以及数据实验室
TypeSafe 拒绝公开[[基准测试|基准测试]],哪怕去年融资时没人相信他们。理由:公开基准「极其、极其容易被操纵」,过去每个实验室都有团队专门收集「长得像 MMLU 的数据」。他的主张是靠体感和信任,直到你把模型放进自己的工作流去测。内部他们当然有 evals,而且「不去操纵这些 evals 需要很大的自律」——这是他用铁腕管的事:「不自欺于我们的模型有多聪明,是最重要的事情之一」<button class="pd-ts" data-t="53:50" data-who="Diogo Almeida" data-en="well, maybe my co-workers might think I rule many things with an iron fist. To me, not shitting ourselves about how smart our model is is one of the most important things there." aria-label="回原文"></button>。

他反复强调自己是数据实验室而非模型实验室:「数据重要得难以置信,我再怎么强调都不为过」<button class="pd-ts" data-t="21:23" data-who="Diogo Almeida" data-en="We have a new task, and the goal is programs in the loop. Yeah, data matters so, so, so unbelievably much. I can't emphasize it less." aria-label="回原文"></button>。他们不用用户数据训练(真实世界数据偏差太大、会过拟合到幂律的重复问题),全部数据是合成的,由「有品味、非常用心的人」审视、指出问题、重新生成。他甚至说,就算给他十亿美元,他也不会做预训练——「弗兰肯斯坦式拼接不是最优雅的东西,但它解决问题」。

## RLCD:一个新任务,不是新算法
RLHF 在他看来不是一个算法,而是一个「北极星任务」:指令遵循。按此逻辑,RLHF 是取悦人类,[[RLVR|RLVR]](可验证奖励强化学习)是优化基准——因为一切可编程验证的简单输出按定义就是基准,而他们自创的 [[RLCD|RLCD]] 的北极星是「让 AI 对程序化使用可靠」。他没发论文,但强调这不是编造行话,「只不过是,嘿,这是另一个北极星」<button class="pd-ts" data-t="27:44" data-who="Diogo Almeida" data-en="Like I try to communicate with precision. It's just that, hey, here's another North Star. Just like DPO and all of its like," aria-label="回原文"></button>。

## API 设计:三个映射到编程原语的新类型
Jev 的三个原语是有意的新概念,不对应已有类型:「choice 映射到枚举上的 switch 语句,映射到 if 语句,score 映射到排序或者大于小于的阈值判断」<button class="pd-ts" data-t="58:14" data-who="Diogo Almeida" data-en="where choice maps into a switch statement on an enum, nulls map to if statements, and scores map to sorting or thresholding at a greater than or less than." aria-label="回原文"></button>。「no」这个名字来自 Bernoulli(伯努利)概率。输入端一切都可以是结构化 JSON——状态、指令、标准——而不是塞进模板字符串:「在编程语言里把所有数字变成字符串再传进去会很奇怪,通常你只有在打印、有真人参与时才那么做」<button class="pd-ts" data-t="60:29" data-who="Diogo Almeida" data-en="that structure is truly there, right? Like it would be weird in like a programming language to have like all of your numbers in, then you pass it into like, you turn it into a string." aria-label="回原文"></button>。

## 核心方法论:拆到最小语义单元
他给开发者的最大建议:把问题拆解、拆小、真正分解。「我相信这一周发生的事最大的救命稻草会是人们的代码库」<button class="pd-ts" data-t="61:51" data-who="Diogo Almeida" data-en="I believe that the biggest saving grace of what's happening this week will be people's codebase. AI code bases are gonna be so much better." aria-label="回原文"></button>——以前 AI 是一个大 system message 加另一个大 AI,那太疯狂了。拆成简单决策后,每一件事都极其可评估:比如「该不该拒绝」不要作为一个问题问,而是针对各种该拒绝的情形问许多独立问题;发现漏了一种情况,就加一个问题、加个阈值、记成测试用例——「现在它就永远被解决了」,不像提示词会因上下文腐烂被遗忘。「这就像没有 ML 的 ML,而且你可以对任何事情都这么做」<button class="pd-ts" data-t="66:16" data-who="Diogo Almeida" data-en="on real examples. It's like ML without the ML, and you can just do it for anything. And there might be some things the model's not good enough yet, right?" aria-label="回原文"></button>。长状态下省钱技巧:给每条消息打 ID、为状态付一次钱、对每个 ID 并行提问。

## 离开 OpenAI 的故事
时间线:他曾拼命争取部署 InstructGPT(早期版本甚至用了他自己造的、因为太慢而没发表的数据清理算法),上线后立刻拿下当时 LLM 市场 50% 份额——但他当时真的在问「这是不是 AGI」,而它最后只被用来写网页 slop 文案。于是他回到原点:从「AI 经济革命」往回推——如果 AI 是 API,调用它的是人还是代码?「我推断答案是有很多个 9 的概率是代码。但所有的优化都投入在人类那一部分」<button class="pd-ts" data-t="118:27" data-who="Diogo Almeida" data-en="Will it be humans or will it be code? And I figured it was many nines of code. But all the optimization was going into the humans part." aria-label="回原文"></button>。他和 Sam 谈过这个想法,Sam 说「这太棒了,你去做吧」;他以为这事一周就能搞定,结果「错得离谱」,花了好多年。指令遵循团队宣布「胜利」后,他开始做这个方向的内部研究,看到「生命迹象」,又因为「如果 AI 寒冬来临而我没竭尽全力避免它,我会视自己负有个人责任」,最终出来创业——先打给 Eric,Sasha 则是主动「我现在就办离职」。两周内拿到融资,团队搬进他的公寓。「如果 TypeSafe 消失了,人们追上来可能要一两年。这已经改变了技术历史的路径」<button class="pd-ts" data-t="30:31" data-who="Diogo Almeida" data-en="And if the whole company of TypeSafe disappears, maybe it'll take a year or two for people to truly catch up. I actually don't know how long it'll take." aria-label="回原文"></button>。

## 数字、发布与边界
发布视频的播放量持续走高，自认在 2026 年的实验室发布里排第一，但他不在乎「Neolab」这个标签：「我在乎的是成为一个可靠的 dev 平台」<button class="pd-ts" data-t="39:20" data-who="Diogo Almeida" data-en="I don't care about that, really. What I care about is being a reliable dev platform. So appreciate the comparison," aria-label="回原文"></button>。真正过了的里程碑是每日 token 数——夜里也在持续运转，说明是机器在调用，不是人试用；注册量反而不重要，「一个超级用户的 for 循环比全世界每人写几条查询都有价值」。关于确定性与 seed:他认为「相同输入相同输出」是错误的北极星，真正重要的是[[鲁棒性|鲁棒性]](相似输入给相似输出)，他们在提示词里放 UUID 测这一点。另外他承诺：模型部署后不改——「我们在乎开发者」；但会快速发新模型，长期支持的 LTS 形式在酝酿。

## 对「踩刹车」的看法
谈到业内「放慢速度」的讨论,他认为这是个障眼法:整个讨论假设所有人都该做更多 RLVR,而对他们的模型形态,「我认为零就是最优数量」<button class="pd-ts" data-t="104:10" data-who="Diogo Almeida" data-en="Which, like, I obviously don't think I need to do more RLVR on our models. You know, I think zero is the optimal amount for our shape. Right?" aria-label="回原文"></button>。RLVR 让模型为所欲为以变强,出了问题(比如沙箱)本可以轻松解决却不解决,因为放开越多模型越强。在他眼里,LLM 领域真正开创新任务的人极少——RLHF 一次、他们的 RLCD 一次,RLVR 顶多算 0.2 次。他的目标不是说服实验室,「是点燃软件工程师们的希望,让他们真正开始自动化那些一直想自动化的东西」<button class="pd-ts" data-t="106:45" data-who="Diogo Almeida" data-en="But my goal is not to convince labs that there's other directions to go down. My goal is to spark hope in software engineers to start actually automating things they've always wanted automated." aria-label="回原文"></button>。

## 本集带走
- **给代码用的模型是新品类**:Jev 不为人聊天而生,产出直接被代码消费,北极星是「每美元智能」。
- **拆解是可靠性的来源**:把 AI 调用拆成最小语义单元的独立问题,每个都可测量、可设阈值、可固化为测试——模型改了,你的工程还在。
- **拒绝公开跑分有逻辑**:基准易被操纵,真正该信的是模型在你自己的工作流里的表现。
- **API 不该有立场**:拒答和身份设定在第一方产品里合理,放进 API 就是反用户的类型错误。
- **注意模式坍缩**:过度对齐让模型保守、失准,这正是「LLM 生成长序列必错」的预言在经验上不成立的原因。
- **想要的确定性≠需要的**:相同输入相同输出很贵;鲁棒性(相似输入相似输出)才是软件真正需要的性质。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">这在数学上是显而易见的,但在经验上并不成立。</span>  
> *It's mathematically obvious, but it doesn't empirically hold.*  
> <span class="qm">—— Diogo Almeida · [07:15]</span> ^q1

> <span class="qz">而且拒绝显然就是一个类型错误。</span>  
> *And refusal is just obviously a type error.*  
> <span class="qm">—— Diogo Almeida · [12:02]</span> ^q2

> <span class="qz">这个 AI 同事版的「无马马车」,而不是去挖掘 AI 的全部力量。</span>  
> *this horseless carriage of AI co-worker instead of unearthing the full power of AI.*  
> <span class="qm">—— Diogo Almeida · [12:53]</span> ^q3

> <span class="qz">对我来说,我认为智能会更像一个数据库,而不是一个同事。</span>  
> *to me, I think intelligence will be more like a database than a co-worker.*  
> <span class="qm">—— Diogo Almeida · [15:59]</span> ^q4

> <span class="qz">我愿意把我们的模型想象成,UDP 之于 LLM,TCP 之于我们的模型。</span>  
> *I would like to think of our model like UDP as LLMs and TCP as our models.*  
> <span class="qm">—— Diogo Almeida · [23:56]</span> ^q5

> <span class="qz">怎么能解决数学界的千禧年大奖难题,却连最基础的工作都无法自动化?</span>  
> *How can we solve Millennium Prize problems in math? But still not automate even the most basics of works.*  
> <span class="qm">—— Diogo Almeida · [29:51]</span> ^q6

> <span class="qz">就像是,创造重新回到了菜单上。</span>  
> *It's like creation is back on the menu.*  
> <span class="qm">—— Diogo Almeida · [31:30]</span> ^q7

> <span class="qz">我们部署模型后不会更改它们。</span>  
> *We will not change our models when we deploy them.*  
> <span class="qm">—— Diogo Almeida · [48:11]</span> ^q8

> <span class="qz">对我来说,不自欺于我们的模型有多聪明,是其中最重要的事情之一。</span>  
> *To me, not shitting ourselves about how smart our model is is one of the most important things there.*  
> <span class="qm">—— Diogo Almeida · [53:50]</span> ^q9

> <span class="qz">我相信这一周发生的事情最大的救命稻草将会是人们的代码库。</span>  
> *I believe that the biggest saving grace of what's happening this week will be people's codebase.*  
> <span class="qm">—— Diogo Almeida · [61:47]</span> ^q10

> <span class="qz">会是人类,还是代码?我推断答案是有很多个 9 的概率是代码。</span>  
> *Will it be humans or will it be code? And I figured it was many nines of code.*  
> <span class="qm">—— Diogo Almeida · [118:25]</span> ^q11

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「创业与行业」挖下去**

- [[2026-07-29-trainingdata-building-the-automated-agi-lab-core-auto|Transformer 已见顶?OpenAI 与 Google 双雄离职造新架构]]<span class="pd-rz">同公司:OpenAI、Anthropic · 同概念:编码智能体 (coding agent)</span>
- [[2026-09-12-a16z-why-companies-are-becoming-a-series-of-l|A16Z 消费投资合伙人 Anish Acharya：别怕“永久下层”，公司正在变成一串循环]]<span class="pd-rz">同公司:OpenAI、Anthropic · 同概念:编码智能体 (coding agent)</span>
- [[2026-08-11-talks-how-harvey-built-a-research-lab-on-a-bud|应用公司如何低成本建自己的AI研究实验室：Harvey 的实战手册]]<span class="pd-rz">同概念:合成数据 (synthetic data)、基准测试 (benchmark)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:OpenAI、Anthropic</span>
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|iPod之父Tony Fadell：越是容易造的AI时代，越需要讲故事的“奢侈品”产品]]<span class="pd-rz">同公司:OpenAI、Anthropic</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:OpenAI、Anthropic</span>

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
