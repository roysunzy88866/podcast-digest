---
title: "拥有你自己的智能:后训练什么时候才值得做"
podcast: Unsupervised Learning
date: 2026-10-07
source_url: undefined
duration: "58:09"
type: episode
cover: "#64748b"
description: "Applied Compute 创始人 Yash 谈企业自训模型的时机、评估护城河与「多模型未来」,以及为什么后训练赢得推理。"
host: "[[Yash]]"
companies: ["[[Applied Compute]]", "[[OpenAI]]", "[[Base 10]]", "[[Harvey]]"]
concepts: ["[[后训练]]", "[[RL]]", "[[评估]]", "[[推理]]", "[[开源模型]]", "[[前沿模型]]", "[[分布外数据]]", "[[harness]]", "[[GPU]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-06-unsupervised-ep-94-applied-compute-ceo-on-the-limits#post","headline":"拥有你自己的智能:后训练什么时候才值得做","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-06-unsupervised-ep-94-applied-compute-ceo-on-the-limits","mainEntityOfPage":"https://talk.solomind.cc/2026-10-06-unsupervised-ep-94-applied-compute-ceo-on-the-limits","description":"Applied Compute 创始人 Yash 谈企业自训模型的时机、评估护城河与「多模型未来」,以及为什么后训练赢得推理。","datePublished":"2026-10-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Yash"},{"@type":"Organization","name":"Applied Compute"},{"@type":"Organization","name":"OpenAI"},{"@type":"Organization","name":"Base 10"},{"@type":"Organization","name":"Harvey"},{"@type":"Thing","name":"后训练 (post-training)"},{"@type":"Thing","name":"RL"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"开源模型 (open models)"},{"@type":"Thing","name":"前沿模型 (frontier models)"},{"@type":"Thing","name":"分布外数据 (out of distribution)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"GPU"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"拥有你自己的智能:后训练什么时候才值得做","item":"https://talk.solomind.cc/2026-10-06-unsupervised-ep-94-applied-compute-ceo-on-the-limits"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>拥有你自己的智能:后训练什么时候才值得做</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 拥有你自己的智能:后训练什么时候才值得做

<div class="pd-byl"><b>Yash</b> · Applied Compute 创始人 · 2026-10-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-06-unsupervised-ep-94-applied-compute-ceo-on-the-limits.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但我确实认为,拥有自己的智能这个理念真正的核心在于灵活性和控制权。</div><div class="a">— Yash <button class="pd-ts" data-t="02:58" data-who="Yash" data-en="But I do think the idea of owning your intelligence really is about flexibility and control." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Yash]]
>
> **公司** [[Applied Compute]] · [[OpenAI]] · [[Base 10]] · [[Harvey]]
>
> **概念** [[后训练]] · [[RL]] · [[评估]] · [[推理]] · [[开源模型]] · [[前沿模型]] · [[分布外数据]] · [[harness]] · [[GPU]]

「拥有自己的智能」——训练自己的模型、不依赖大实验室——最近成了 AI 圈最热的叙事。

这一集的 Unsupervised Learning 播客里,主持人 Jacob Efron 和 [[Applied Compute|Applied Compute]] 的创始人 [[Yash|Yash]] 聊透了这个话题。

Yash 曾在 [[OpenAI|OpenAI]] 工作、参与过 Codex,现在他的公司专门帮前沿企业做[[后训练|后训练]](在现成[[开源模型|开源模型]]之上用自己的数据继续训练)和[[推理|推理]]服务。

## 「拥有智能」的真实理由:不是怕实验室作恶,而是控制权

主持人先抛出常见的几种担忧:实验室随时可能撤走 API、会做产品跟你竞争、会用你的数据训练。

Yash 的回答出人意料地克制:他不觉得实验室是恶意的——「这些公司都是由很棒的人组成的」,有合同义务、有大量保护数据的工程投入。

真正的理由是**灵活性和控制权**:模型在哪里跑、怎么部署、针对成本还是延迟还是特定领域去优化。

「拥有自己的智能」这个叙事真正兴起,就是开源模型开始变好、你真的能用它们做事的时候。<button class="pd-ts" data-t="02:58" data-who="Yash" data-en="There's actual, you know, there's a lot of engineering that goes in protecting data and whatnot. But I do think the idea of owning your intelligence really is about flexibility and control." aria-label="回原文"></button>

但供应商风险是真实的:模型从产品里被下架已经发生过不止一次,尤其在编程领域(Cursor、Windsurf 都被切断过)。

随着实验室越来越深入垂直行业,「尚不清楚他们是否会继续服务那些与他们直接竞争的公司」。

所以 Yash 的结论是:最安全、最持久的优势,是投资全栈能力,不对任何一组模型有极端依赖。<button class="pd-ts" data-t="04:16" data-who="Yash" data-en="It's not clear whether they'll continue serving companies that they're directly competing against. And so the safest, most durable thing that you can go and do and the advantage you can build up, I think, is investing in the full stack to be able to make models that are powering your products, that are intelligent, that are doing the things that you want, and not having extreme vendor dependence on any one set of models or companies." aria-label="回原文"></button>

OpenAI 与 [[Base 10|Base 10]] 的合作(可以用 OpenAI 额度去用开放模型)在他看来是个明确信号:这是多模型的未来,客户要选择权和灵活性,OpenAI 想成为企业用 AI 的入口——「这对开源模型来说是一场大胜利」。

## 后训练什么时候真能带来能力提升?关键看数据偏离多远

[[前沿模型|前沿模型]]在基础能力上确实领先,但后训练的杠杆在于:**你的数据越偏离模型的训练分布(即[[分布外数据|分布外数据]]),后训练越可能带来真正的能力提升**。<button class="pd-ts" data-t="08:30" data-who="Yash" data-en="That's when you can actually push these models to be better on capabilities as well. Our general take has been like the more out of distribution your data is, the more likely that post training is actually going to give you that capabilities lift." aria-label="回原文"></button>

不过他也坦言,大多数人做后训练其实是为了优化性价比——拿一个更便宜的模型训练到与前沿持平,成本却好得多,「有时你就能因此服务更多用户」。

那五年后,还有多少企业的数据是分布外的?Yash 的诚实回答是:训练范式本身会变。

现在是离线 [[RL|RL]](强化学习,从经验中学习)时代:从数据供应商采购高质量数据集,专门爬山优化,得到一个在特定领域「非常尖峭」的模型。

而下一阶段是**在线 RL——用生产推理的流量反过来改进模型,模型用得越多越好**,那将是大多数企业固化自身判断专长的方式。<button class="pd-ts" data-t="10:04" data-who="Yash" data-en="I think a lot of the online RL methodologies are actually using production inference to go and improve your models. That is actually going to be how most enterprises codify their judgment expertise by basically the more they use the model, the better that it gets." aria-label="回原文"></button>

企业里真正分布外的数据是什么?

是公司内部产生的判断轨迹:每家公司对风险的阈值、运营模式、专长和历史数据都不同,这些塑造了它们独有的决策方式。

制药公司是极端例子——专注一个疾病领域、自己跑实验、自己产生奖励信号,当然该有自己的模型;而银行之间的差异就微妙得多。

## RL 是一台爬山机器,评估才是护城河

Yash 给了全集最浓缩的一个判断:「我们在 RL 上真正拥有的,本质上是一台爬山机器。最难的部分其实是定义要爬的那座山。」

<button class="pd-ts" data-t="25:30" data-who="Yash" data-en="Yeah, yeah. No, I think it's actually what we have with RL is we essentially have a hill climbing machine. The hardest part is actually defining the hill to climb, which is why evals, I think, is a really important thing for companies to, A, focus on building, and B, actually safeguard pretty carefully." aria-label="回原文"></button> 所以[[评估|评估]](evals)对公司至关重要——一要专注构建,二要小心保护。

逻辑很锋利:公开基准一定会被跑分,而如果你的评估专门衡量「你的业务怎么运作」,那么**不告诉别人好坏的标准长什么样,本身就是竞争优势**。

「你的员工不是可以随意替换的,你不会乐意让他们去另一家公司干活。对这些模型来说也是同样的道理。」

<button class="pd-ts" data-t="26:24" data-who="Yash" data-en="Like you wouldn't... Your employees are not fungible. You would not like be comfortable with them going to another company and doing work there." aria-label="回原文"></button> 这里有个张力:头部应用公司既想找实验室要能力,又怕泄露来之不易的洞见——正因如此,Yash 认为每家公司都该投资开源模型基础设施和多模型未来。

不可验证的领域怎么办?

他的经验是:把不可验证任务转化成「可代理验证」就出奇地好使——基于评分标准(rubric)的 RL,给模型一个专家答案、对照打分,就是相当好的代理。

不同公司专家不同,优化出的模型可以非常不同。

具体怎么做 RL?Yash 拆成三件事:**正确的任务、正确的环境(模型能访问哪些工具)、正确的验证器(怎么判定好坏)**。

他们和法科技公司 [[Harvey|Harvey]] 合作的定制模型就是这套流程:与团队收集专家评分标准和答案、补合成数据、给模型一些工具,再用基于评分标准的 RL 对照专家答案打分。

构建训练数据的方式和构建评估的方式,本质是同一件事。

## 先榨干 harness,再动模型

很多问题其实不用训练就能解决。

Yash 明确建议:**先做上下文优化和 [[harness|harness]] 优化(围绕模型搭的工具链和调用环境),把能榨的榨干;之后优化策略(模型如何做判断和推理)还能继续榨出很多**。<button class="pd-ts" data-t="17:31" data-who="Yash" data-en="You're still better off going and doing a bunch of context optimization and harness optimization. But once you reach a point where you've sort of squeezed a lot out of the harness that you've built and the tools that you've made, you actually can still continue to squeeze a lot out of optimizing the policy to use those tools better." aria-label="回原文"></button>

他的公司干脆只聚焦模型层:「我们不做从零到一的智能体构建,我们优化成熟产品背后的模型」——找上门的商机里八成大概靠一个好 harness 就能解决,他们只挑高价值场景:要么能力提升极其值钱(制药、网络安全、芯片),要么推理负载巨大——效率提升分摊到数十亿、数万亿 token 上,价值极高。

一个反直觉的省钱思路:与其做推理优化砍 10% 账单,不如**把模型的 token 效率提高 10%**——同样的事少花 token,在保持评测表现不变的前提下削减账单。

「这两件事是一枚硬币的两面」,这也是他们想同时做训练和推理的理由:训练方式直接影响推理部署怎么搭(比如训练一个重度工具调用的模型做工具调用并行化,推理架构就按这个来设计,预填充和解码甚至可以用不同芯片做分离式部署)。

至于推理引擎本身,反而没那么高的壁垒:vLLM、SGLang 这些开源项目是很好的起点,几乎所有推理云都已停用自研引擎、改用开源引擎做调优。

「如果你有一些 [[GPU|GPU]],在上面放一个 vLLM,挂到 Open Router 上,你差不多就有了一个生产级推理产品。」

真正难的是容量——你得真的有 GPU——以及规模上去之后,成千上万芯片上省下的 1% 会累积成真金白银。<button class="pd-ts" data-t="33:08" data-who="Yash" data-en="The inference workloads. And I think back to your original question about inference offerings and how easy they are to spin up, I think what we've seen is actually the main thing to have is capacity." aria-label="回原文"></button>

## Satya 说每家公司该有自己的模型,他信一半

Satya 说过「世界上有多少家公司,就该有多少个模型」。

Yash 认为不一定每家都要去预训练,但**每家公司内部都存在值得捕捉的闭环反馈系统**。

他公司的核心论点是一个上下限框架:「如果每个人都用同样的模型,伟大的模型为大家设定了下限,但你如何优化模型、构建出色的 AI 系统,那才设定上限。」

<button class="pd-ts" data-t="20:51" data-who="Yash" data-en="And that's kind of the thesis of our whole company is that like If everybody is using the same model, like great models sort of set the floor for everybody, but then how you go and optimize those models and build really amazing AI systems, that's what's going to set the ceiling." aria-label="回原文"></button> 供应紧缺放大了这件事的价值:算力有限,谁能从模型和算力里挤出更多,谁就能做更多事——「如果我能以比竞争对手便宜 10 倍的成本做成某件事,那就是差异化,就是我能在竞争中击败他们的东西。」

## 本集带走

- **判断要不要后训练,先问数据偏离多远**:数据越在模型训练分布之外,能力提升越真实;数据不够差异化,就只为性价比优化——用便宜模型追平前沿、成本大降。
- **顺序别搞反**:先做提示词、上下文和 harness 优化,榨干之后,再动模型权重,继续优化「模型怎么用这些工具」。
- **把评估当核心资产**:RL 只是爬山机器,难的是定义那座山。专属于你业务的评估别外传——它是模型能力的天花板,也是竞争对手拿不走的东西。
- **做 RL 三件套**:想清楚任务是什么、模型能用哪些工具、怎么判定好坏;构建训练数据和构建评估是同一件事。
- **省钱可以从模型下手**:把模型 token 效率提高一成,等效于推理账单降一成,训练和推理是一枚硬币的两面。
- **AI 编程的正确姿势**:把思考委托给智能体会得到你解释不了的垃圾代码库;用 AI 执行你已想好的设计,重点修炼系统设计——他们面试就让人放开用 AI 写,然后追问「你为什么这样构建、考虑过哪些权衡」,答「Claude 做的」不算过。

<div class="pd-sec pd-sec-q">全部金句 <span>15 条</span></div>

> <span class="qz">但我确实认为,拥有自己的智能这个理念真正的核心在于灵活性和控制权。</span>  
> *But I do think the idea of owning your intelligence really is about flexibility and control.*  
> <span class="qm">—— Yash · [02:58]</span> ^q1

> <span class="qz">所以你能做的最安全、最持久的事,以及你能建立起来的优势,我认为是投资于全栈,能够打造驱动你产品的智能模型,让它们做你想做的事,而不是对任何一组模型或公司有极端的供应商依赖。</span>  
> *And so the safest, most durable thing that you can go and do and the advantage you can build up, I think, is investing in the full stack to be able to make models that are powering your products, that are intelligent, that are doing the things that you want, and not having extreme vendor dependence on any one set of models or companies.*  
> <span class="qm">—— Yash · [04:16]</span> ^q2

> <span class="qz">我们的总体看法是,你的数据越偏离分布,后训练就越有可能真正给你带来那种能力提升。</span>  
> *Our general take has been like the more out of distribution your data is, the more likely that post training is actually going to give you that capabilities lift.*  
> <span class="qm">—— Yash · [08:30]</span> ^q3

> <span class="qz">那实际上将会是大多数企业固化判断专长的方式——基本上就是模型用得越多,它就变得越好。</span>  
> *That is actually going to be how most enterprises codify their judgment expertise by basically the more they use the model, the better that it gets.*  
> <span class="qm">—— Yash · [10:04]</span> ^q4

> <span class="qz">阻碍持续学习的,基本上就是从稀疏奖励中做到极其省数据的训练,这是一个未解决的问题。</span>  
> *What's blocking continual learning is basically, like, extremely data-efficient training from sparse rewards, which is an unsolved problem.*  
> <span class="qm">—— Yash · [13:36]</span> ^q5

> <span class="qz">是的,我非常有信心,未来看起来像一组非静态的权重。</span>  
> *Yeah, I think we are pretty confident that the future looks like a non-static set of weights.*  
> <span class="qm">—— Yash · [14:59]</span> ^q6

> <span class="qz">但一旦你从构建的 harness 和制作的工具里榨取得差不多之后,你实际上仍然可以通过优化策略来更好地使用那些工具,继续榨取很多。</span>  
> *But once you reach a point where you've sort of squeezed a lot out of the harness that you've built and the tools that you've made, you actually can still continue to squeeze a lot out of optimizing the policy to use those tools better.*  
> <span class="qm">—— Yash · [17:31]</span> ^q7

> <span class="qz">如果每个人都用同样的模型,那么伟大的模型为大家设定了下限,但接下来你如何去优化那些模型并构建真正出色的 AI 系统,那才是设定上限的东西。</span>  
> *If everybody is using the same model, like great models sort of set the floor for everybody, but then how you go and optimize those models and build really amazing AI systems, that's what's going to set the ceiling.*  
> <span class="qm">—— Yash · [20:51]</span> ^q8

> <span class="qz">如果我能以比竞争对手便宜 10 倍的成本做成某件事,那就是差异化,那就是我在竞争格局中真正能击败他们的东西。</span>  
> *If I can do something 10x cheaper than my competitor, that is differentiation and that is something that I can actually win against them out on the competitive landscape.*  
> <span class="qm">—— Yash · [23:55]</span> ^q9

> <span class="qz">如果你把不可验证的领域转化成某种可代理验证的领域,在上面爬山优化会出奇地容易。</span>  
> *It is surprisingly easy to hill climb on non-verifiable domains if you turn them into some proxy verifiable domain.*  
> <span class="qm">—— Yash · [24:49]</span> ^q10

> <span class="qz">最难的部分其实是定义要爬的那座山,这就是为什么我认为评估对公司来说非常重要——一要专注于构建它,二要非常小心地保护它。</span>  
> *The hardest part is actually defining the hill to climb, which is why evals, I think, is a really important thing for companies to, A, focus on building, and B, actually safeguard pretty carefully.*  
> <span class="qm">—— Yash · [25:37]</span> ^q11

> <span class="qz">你的员工不是可以随意替换的,你不会乐意让他们去另一家公司干活。对这些模型来说也是同样的道理。</span>  
> *Your employees are not fungible. You would not like be comfortable with them going to another company and doing work there. Same thing with these models.*  
> <span class="qm">—— Yash · [26:24]</span> ^q12

> <span class="qz">这是一个艰难的处境,这就是为什么我认为投资开源模型基础设施、投资多模型未来,是每一家公司都绝对应该做的事,因为你有点左右为难。</span>  
> *And it's a tough position, which is why I think investing in open model infrastructure, investing in a multi-model future is something absolutely every company should be doing because you're kind of caught between a rock and a hard place.*  
> <span class="qm">—— Yash · [26:44]</span> ^q13

> <span class="qz">所以我们的观点是,后训练实际上赢得推理。</span>  
> *And so what our view is is that the most post-training actually wins inference.*  
> <span class="qm">—— Yash · [29:24]</span> ^q14

> <span class="qz">你不能把自己的思考委托出去、 basically 把它当拐杖,因为那样你会得到这些庞大的、你根本解释不了的垃圾代码库。</span>  
> *You can't delegate your thinking away and basically rely on it as a crutch because then you get these massive slop code bases that you can't actually explain.*  
> <span class="qm">—— Yash · [48:59]</span> ^q15

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-29-twentyvc-20vc-is-anthropic-s-coding-business-wort|最便宜的模型反而是最便宜的：Factory CTO 谈 AI 定价陷阱]]<span class="pd-rz">同公司:OpenAI · 同概念:harness、前沿模型 (frontier models)、后训练 (post-training)、开源模型 (open models)、推理 (inference)</span>
- [[2026-08-13-talks-continual-learning-how-ai-agents-get-bet|经验差距：让智能体越用越聪明]]<span class="pd-rz">同公司:Harvey · 同概念:harness、RL、后训练 (post-training)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同公司:OpenAI · 同概念:harness、前沿模型 (frontier models)、后训练 (post-training)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-12-bigtech-here-s-how-the-ai-bubble-bursts-with-pau|AI 投资泡沫的崩盘剧本:为什么万亿美元建数据中心注定亏钱]]<span class="pd-rz">同公司:OpenAI · 同概念:GPU、harness、后训练 (post-training)、推理 (inference)</span>
- [[2026-10-01-uncapped-uncapped-58--david-george-from-a16z-e3pl|一切都会成功：a16z 投资人 David 的 AI 全栈乐观主义]]<span class="pd-rz">同公司:Harvey、OpenAI · 同概念:前沿模型 (frontier models)、推理 (inference)</span>
- [[2026-07-14-a16z-is-ai-a-bubble-gavin-baker-on-data-cente|没有暗GPU:一位基金经理拆解AI泡沫论与棋局]]<span class="pd-rz">同公司:OpenAI、Cursor · 同概念:GPU、RL</span>

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
