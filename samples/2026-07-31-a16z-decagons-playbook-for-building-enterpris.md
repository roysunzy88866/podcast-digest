---
title: "Decagon 的 AI 寺庙:开源、Duet 与护城河"
podcast: The a16z Show
date: 2026-07-31
source_url: undefined
duration: "80:23"
type: episode
cover: "#64748b"
description: "Decagon 畅谈为何九成工作流转用开源模型,以及企业 AI 的护城河到底在哪。"
host: "[[Sarah Wang]]"
cohosts: ["[[Kimberley Tan]]", "[[Jesse Zhang]]", "[[Ashwin Srinivas]]"]
companies: ["[[Decagon]]"]
concepts: ["[[智能体]]", "[[开源模型]]", "[[微调]]", "[[业务逻辑]]", "[[前置部署工程师]]", "[[Duet]]", "[[延迟]]", "[[推理]]"]
category: 创业与行业
tags:
  - 创业与行业
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-31-a16z-decagons-playbook-for-building-enterpris#post","headline":"Decagon 的 AI 寺庙:开源、Duet 与护城河","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-31-a16z-decagons-playbook-for-building-enterpris","mainEntityOfPage":"https://talk.solomind.cc/2026-07-31-a16z-decagons-playbook-for-building-enterpris","description":"Decagon 畅谈为何九成工作流转用开源模型,以及企业 AI 的护城河到底在哪。","datePublished":"2026-07-31","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Sarah Wang"},{"@type":"Person","name":"Kimberley Tan"},{"@type":"Person","name":"Jesse Zhang"},{"@type":"Person","name":"Ashwin Srinivas"},{"@type":"Organization","name":"Decagon"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"开源模型 (open source models)"},{"@type":"Thing","name":"微调 (fine-tune)"},{"@type":"Thing","name":"业务逻辑 (business logic)"},{"@type":"Thing","name":"前置部署工程师 (Forward Deployed Engineer)"},{"@type":"Thing","name":"Duet"},{"@type":"Thing","name":"延迟 (latency)"},{"@type":"Thing","name":"推理 (reasoning)"}],"articleSection":"创业与行业"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"创业与行业","item":"https://talk.solomind.cc/tags/创业与行业"},{"@type":"ListItem","position":3,"name":"Decagon 的 AI 寺庙:开源、Duet 与护城河","item":"https://talk.solomind.cc/2026-07-31-a16z-decagons-playbook-for-building-enterpris"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Decagon 的 AI 寺庙:开源、Duet 与护城河</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# Decagon 的 AI 寺庙:开源、Duet 与护城河

<div class="pd-byl"><b>Jesse Zhang</b> · Decagon 创始人 · 2026-07-31</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-31-a16z-decagons-playbook-for-building-enterpris.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">不幸的是,前沿实验室确实有小模型,但你无法真正以你想要的方式控制它们。</div><div class="a">— Ashwin Srinivas <button class="pd-ts" data-t="00:27" data-who="Ashwin Srinivas" data-en="Unfortunately, the Frontier labs, they do have small models, but you can't really control them in the way that you want." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sarah Wang]] · [[Kimberley Tan]] · [[Jesse Zhang]] · [[Ashwin Srinivas]]
>
> **公司** [[Decagon]]
>
> **概念** [[智能体]] · [[开源模型]] · [[微调]] · [[业务逻辑]] · [[前置部署工程师]] · [[Duet]] · [[延迟]] · [[推理]]

<div class="pd-tldr"><b>一句话</b>Decagon 畅谈为何九成工作流转用开源模型,以及企业 AI 的护城河到底在哪。</div>

一家做企业客服的公司,竟然把九成的工作流从最贵的前沿大模型,换成了自己[[微调|微调]]的开源小模型——不仅没掉链子,反而更聪明、更便宜、更快。说这话的人是 [[Decagon|Decagon]] 的创始人 Jesse 和 Ashwin,他们做的是帮大企业搭 AI [[智能体|智能体]]的生意。

这一集 a16z 的对谈里,他们聊了四件事:为什么前沿大模型不是万能解药,非得自己微调[[开源模型|开源模型]]不可;为什么「应用层公司只是套壳」的看法是个误解,真正的壁垒恰恰在模型之外;那个让他们直呼「哇哦」的神奇时刻——用一个慢但聪明的大智能体,把写规则、建测试、查漏补缺的活儿全包了;以及当 AI 真能接管整个工作岗位时,人的职业生涯到底是毁了还是升级了。

说完了开场最反直觉的那个点——放着最强的大模型不用,非要自己去折腾开源小模型,接下来看看他们具体是怎么做、又是怎么想的。

## 为什么九成工作流转向开源模型

Jesse 回忆,公司刚起步时,大家都在用 OpenAI 和 Anthropic 的模型,图的是赶紧把产品跑起来。但当他们开始服务拥有数百万客户的超大企业,还上线了语音智能体,一个硬约束就冒了出来:[[延迟|延迟]]。

要让语音对话自然,模型必须极快响应,而前沿大模型太重了。降低延迟、同时让智能体按自己意愿行事的方法,就是用更小的模型。

Jesse 坦言,前沿实验室确实有小模型,「但你无法真正以你想要的方式控制它们」 <button class="pd-ts" data-t="03:02" data-who="Jesse" data-en="And the only way to get latency down, but also kind of make our agent operate the way we want it to, is to use smaller models. And when you want to go to smaller models, unfortunately, the Frontier labs, they do have small models, but you can't really control them the way that you want." aria-label="回原文"></button>。于是,大约一年多以前,他们决定转向开源。

这里有个反常识的判断:很多人觉得大模型聪明,小模型笨,用小的就是在做性能妥协。Ashwin 直接反驳,认为这是个错误的权衡。

他解释说,在智能体里,模型其实同时在干一堆细碎的活:判断用户在聊什么话题、识别有没有坏人来捣乱等等 <button class="pd-ts" data-t="03:31" data-who="Jesse" data-en="So it needs to do a lot of things at once, right? Like the first step it might do is, hmm, what topic is this person talking about? And something else it might do is, oh, is this person a bad actor that's coming in and trying to mess things up?" aria-label="回原文"></button>。每件单独的任务,其实都不需要大模型那种包揽数学、编程的通天智力,只需在一件特定任务上做到极致。

通过把开源小模型针对特定任务微调,它们「在我们希望它们执行的具体任务上,它们实际上优于那些大型、最前沿的模型」 <button class="pd-ts" data-t="05:34" data-who="Ashwin" data-en="Because what we've seen in practice is even if you have a, quote, dumber model, you can get it, and we've seen this in practice, you can get it to higher performance on that specific task." aria-label="回原文"></button>。这样一套组合拳打下来,任务干得更好、更便宜、还更快,相当于白捡了三个好处。如今,Decagon 有九成的工作流跑在开源模型上 <button class="pd-ts" data-t="04:16" data-who="Jesse" data-en="And it's a very expensive team, but we have it because we need people that are really good at taking these open source models and tuning them and so on. So today, 90% of our workflow is on open source." aria-label="回原文"></button>,剩下的一成留给前沿大模型,用来做那些真正需要极高智力、探索性强的新项目,比如最近推出的 [[Duet|Duet]] Autopilot <button class="pd-ts" data-t="06:30" data-who="Jesse" data-en="rebooking or it's helping them with a process in healthcare then these are like well-defined parts so we have smart fast models to do that but we've for instance recently launched duet autopilot right which is our agent that improves the core conversational agent" aria-label="回原文"></button>。

既然企业迟早都会发现开源的好处,这是否意味着大公司很快也会跟进?Jesse 觉得会,但肯定比大家想的慢。

因为微调模型绝不是件轻松活:你得先拿到数据,更重要的是得有极好的评估体系,而且这些评估必须高度定制化,针对你特定的任务去测,没法随便套用公开的评估集 <button class="pd-ts" data-t="07:25" data-who="Jesse" data-en="Let's just use open source. Like you have to get the data. And then more importantly, you have to like have good evals." aria-label="回原文"></button>。不仅如此,Ashwin 补充说,模型的形态一直在变,随着底层能力提升,你会不断发现新任务可以去自动化,所以企业其实需要一个类似「模型工厂」的机制,不断训练新模型、淘汰旧模型 <button class="pd-ts" data-t="09:53" data-who="Ashwin" data-en="You find new places where you're like, oh, this task seems to be getting repeated a lot because now I have this totally new frontier model or open source model that now has this capability that they didn't have before, right?" aria-label="回原文"></button>。Decagon 内部专门养了一支昂贵的研究团队来干这事。

聊完了底层模型的开源策略,接下来的问题就直击灵魂了:如果连企业自己都能搞定开源微调,像 Decagon 这样的应用层公司,到底还有没有存在的价值?

## 应用层公司的护城河在哪

2026 年上半年,硅谷有一种很火的叙事:OpenAI 和 Anthropic 这样的实验室是「最后的初创公司」,它们会吞噬一切,而应用层公司不过是套了一层薄薄的壳,加上一堆干苦力的外包工程师 <button class="pd-ts" data-t="15:03" data-who="Jesse" data-en="you know, a lingering misperception about what an AI application is. And just to get into that debate a little bit, because I think it's sort of this narrative that dominated the first half of 2026, which is that Anthropic, OpenAI, they're the last startups." aria-label="回原文"></button>。Jesse 和 Ashwin 完全不认同这种「虚假的二分法」。

首先,Jesse 指出大家有个常见误解,以为微调就是为了给某个特定客户做定制。其实不然,他们做的大部分微调,是为了把模型训练得极度擅长「客服」这个特定场景 <button class="pd-ts" data-t="16:19" data-who="Jesse" data-en="I think if you look at our case, right, like, we just talked about all this fine-tuning stuff. I think a common misconception that people have is, you know, fine-tuning is a way to, like, customize it for that customer." aria-label="回原文"></button>。如果你是一家大银行,让自家宝贵的研究团队去为客服行为微调模型,这笔账显然不划算,不如直接接入像 Decagon 这样深耕垂直场景的应用。

其次,更是核心的一点:[[业务逻辑|业务逻辑]]与模型无关。比如航班取消了,怎么一次性给三个人改签?

这些极其庞杂的业务流程和现实约束,必须被编码进应用层。Jesse 强调,这些逻辑没法靠微调大模型解决,因为企业的流程一变,你之前微调进去的东西就得全部推翻重来 <button class="pd-ts" data-t="17:16" data-who="Jesse" data-en="And again, that doesn't happen through fine tuning. That happens like in context, because if you were to fine tune on that, you would have to reverse it every single time you change your procedures, which doesn't make sense." aria-label="回原文"></button>。所以业务逻辑必须存在于应用层的软件栈里,这才是真正的护城河。

哪怕假设未来真的实现了 AGI(通用人工智能),模型无所不能,Jesse 依然认为软件不会消失 <button class="pd-ts" data-t="19:56" data-who="Jesse" data-en="And human beings have needed to use software for lots of things. You know, you need databases to put stuff in. You need CRMs to track things." aria-label="回原文"></button>。因为即使人类某种程度上就是一种 AGI,我们不还是需要数据库、需要 CRM(客户关系管理系统)来存取信息吗? 

AGI 智能体同样需要个地方来存放工作、拉取信息并[[推理|推理]]。未来,应用层公司也许最终会演变成特定垂直领域的「实验室」 <button class="pd-ts" data-t="20:40" data-who="Jesse" data-en="So I think there will always be a space for application layer companies. Maybe in the long term, application layer companies just become labs for specific verticals, because your primary product ends up being the models that are just really good at doing those specific tasks." aria-label="回原文"></button>,但这块阵地会一直在。

那么,既然提到了那些干苦力的外包工程师,这到底是个明智策略还是个陷阱?

## 前向部署工程师:是真需求还是咨询陷阱

现在科技圈很流行一个词叫「[[前置部署工程师|前向部署工程师]](FDE)」,很多公司甚至以此为卖点,声称要招一大堆人驻扎在客户公司。Ashwin 曾是 Palantir 的部署策略师,对这套打法再熟悉不过。他警告说,把做产品和免费咨询混为一谈是非常危险的 <button class="pd-ts" data-t="25:24" data-who="Ashwin" data-en="Because I do think people use the term FDE very loosely in Silicon Valley. Yeah, and I think it's dangerous to mix the two of free consulting work versus actually doing product." aria-label="回原文"></button>。

他引用了 Palantir 现任 CTO Shyam 的一句名言:「前向部署工程师吞食痛苦并排泄产品」。Ashwin 解释说,在 AI 产品的早期,前向部署工程师确实是必需的,因为没人知道全新的工作流长什么样。

这些工程师必须贴着客户,跟着客户一起摸索出前所未有的新流程 <button class="pd-ts" data-t="22:07" data-who="Ashwin" data-en="Nobody knows what the workflows are because nobody's used these things before. So a forward-deployed engineer in this case is honestly just embedding with the customer to learn the workflow for the first time as the customer learns the workflow for the first time." aria-label="回原文"></button>。但是,一旦搞清楚了工作流,你就必须把它产品化,然后回归到可扩展的科技产品逻辑里。如果你做不到这一点,那你不过是在做一家被美化的咨询公司 <button class="pd-ts" data-t="22:49" data-who="Ashwin" data-en="And if you can't do that, then you're just building a glorified consulting truck. Well, I'd love to dig into this more because I know when we started working together, probably almost exactly three years ago, and you guys landed on this idea, there were two things that were relatively contrarian that now feel kind of standard." aria-label="回原文"></button>。

Decagon 自己的团队就是这么演进的。在早期,前向部署工程师确实会花大量时间手动给客户写一套叫 AOP(智能体操作流程)的规则。

但他们只要发现这些活费时费力,立刻就琢磨怎么把它变成通用的核心产品功能 <button class="pd-ts" data-t="33:11" data-who="Ashwin" data-en="Every single thing that Jesse just talked about was the result of four deployed people doing things and us figuring out how to productize it. right? So for instance, we realized that, hey, when we go into a new customer, we need to spend all this time writing up the AOPs manually." aria-label="回原文"></button>。他们所有的前线作战经验,最终的归宿都必须是反哺核心产品,好让接下来的十个客户都能开箱即用,否则公司根本无法规模化 <button class="pd-ts" data-t="24:07" data-who="Jesse" data-en="But the output of that is not a one-off thing that is just built for that customer. It is something that is contributed to core product in a way that the next 10 customers that ask about the same thing get it for free." aria-label="回原文"></button>。这套打法,让他们在面对竞争对手(如 Sierra)时有了明显差异:有客户因为受不了对手黑盒式的重度服务模式而转投 Decagon,在对手那里花一年才搭出三个流程,在 Decagon 这儿一个月就搞定了七个 <button class="pd-ts" data-t="39:31" data-who="Jesse" data-en="So we like to call this like a glass box approach instead of a black box. And yeah, so within basically a month, they spun up like seven new journeys on Decagon." aria-label="回原文"></button>。

这种不断把人工经验提炼成产品的思路,最终孕育出了让他们直呼「哇哦」的杀手锏。它是怎么诞生的?

## 神奇时刻:用 AI 管理 AI

主持人问,在改进产品的过程中,有没有哪个时刻让你觉得「哇哦,我没想到 AI 能干这个」? Jesse 毫不犹豫地提到了 Duet。

做企业客服,其实背后有海量的脏活累活:得手写一堆 AOP 教 AI 怎么做事;得写一堆测试来确保它不犯蠢;它上线后,还得靠人去一条条读对话记录,查漏补缺。Jesse 意识到这些痛点后,他们打造了 Duet——一个体积更大、速度较慢,但极其聪明的「第二智能体」 <button class="pd-ts" data-t="30:56" data-who="Jesse" data-en="And so what Duet is, is it's kind of a separate agent. It's like a second agent that's much bigger and much slower, but its job is to do all the tasks I just described." aria-label="回原文"></button>。它的任务,就是把上面提到的所有管理活儿全包了。

你现在可以直接给 Duet 丢一堆历史文档和对话记录,告诉它:去弄清楚我想让智能体怎么做,然后你自己把操作流程写出来。它不仅照做,还会主动把配套的测试和模拟跑起来 <button class="pd-ts" data-t="31:24" data-who="Jesse" data-en="And it just feels very magical because you can just literally tell it like, hey, I have nothing built yet so far, but here's a bunch of transcripts I have and here's some documentation." aria-label="回原文"></button>。

等产品上线了,它还能在一旁默默监控成千上万条对话,自动标记出哪些地方做得不好,甚至连改进方案都帮你草拟好了 <button class="pd-ts" data-t="31:40" data-who="Jesse" data-en="And then of its own accord, it'll also write the tests and simulations that go along with those. And once you're done with that and you actually put it in front of customers, it'll be the one that's monitoring all the conversations and it'll flag things where things are going well or poorly." aria-label="回原文"></button>。这是推理模型(就是那种擅长深度逻辑思考的 AI)能力大幅提升后才解锁的魔法 <button class="pd-ts" data-t="32:06" data-who="Jesse" data-en="And so that's very magical because, well, first of all, it was not possible when we first started the company. It only became possible when all the reasoning models got better." aria-label="回原文"></button>。

 Ashwin 进一步揭示了这一切的底层逻辑:Jesse 刚才说的这些神奇功能,没有一样是凭空想出来的,全都是前向部署工程师在一线干苦力时发现的痛点,然后团队琢磨怎么把它产品化的结果 <button class="pd-ts" data-t="33:03" data-who="Ashwin" data-en="And also, to your other question of how did we come up with all this and how did the product improve? Every single thing that Jesse just talked about was the result of four deployed people doing things and us figuring out how to productize it." aria-label="回原文"></button>。

既然 AI 已经强大到可以管理 AI 了,那当 AI 真的开始取代一整个工作岗位时,我们该怎么办?

## AI 会消灭工作,但不一定会消灭职业生涯

这是一个极其敏感但又绕不开的话题。主持人直言,客户支持也许是第一个能被 AI 端到端完全接管的工种。这是否意味着大裁员?

Jesse 和 Ashwin 用他们在前线看到的现象给出了一个相对乐观的答案。他们发现,对于很多企业来说,对客户支持的需求其实是远大于供给的 <button class="pd-ts" data-t="75:40" data-who="Jesse" data-en="earlier on when we were talking about, hey, what are we truly doing? We found that for a lot of our customers, there's actually just more demand for things like customer support than there's supply, right?" aria-label="回原文"></button>。

当 AI 把做客服的成本打下来 30% 时,大多数公司的第一反应并不是裁掉 60% 的客服团队,而是发现:原来我的客户有这么多没被满足的问题!既然现在更便宜了,那我们就把支持入口做得更显眼,甚至在每个页面都放上,连免费用户也提供即时支持 <button class="pd-ts" data-t="76:51" data-who="Jesse" data-en="They said, let us make support more easily accessible, right? So instead of it just being in one part, like buried within a support panel, they're like, let's put support on every page and let's make it more prominent in places where people are more likely to get stuck." aria-label="回原文"></button>。这堪称现实版杰文斯悖论(某资源的利用效率提高,反而会导致对该资源的需求增加)的完美体现。

Jesse 打了个精准的比方:AI 会扼杀工作,但不会扼杀职业生涯 <button class="pd-ts" data-t="77:24" data-who="Jesse" data-en="That may be the best example of Jevin's paradox in real life that I've heard. Yeah, I think it's like AI will kill jobs, but not careers in a way. Because like those jobs that are being done currently should not be done by humans." aria-label="回原文"></button>。那些像机器一样机械点击、回复简单问题的苦差事,本来就不该由人来干。

当 AI 把这些琐碎活吃掉后,人就可以腾出手来做无限多能真正让客户开心、甚至能产生新收入的事情。他们确实看到有客户因此缩减了 BPO(业务流程外包)的规模,但也有客户把省下来的人力转向了能带来收入的销售类工作 <button class="pd-ts" data-t="78:54" data-who="Jesse" data-en="Or it's actually we still need people, but now there's all these other things they could be doing. And it could be more revenue generating things. You know, that's like a big area for us even." aria-label="回原文"></button>。

既然聊到了对未来的判断,最后来看看他们是怎样把这套理念卖给大企业,以及如何看这场技术浪潮的终局。

## 拿下大客户的秘诀与人才焦虑

Decagon 能迅速拿下全球最大的几家银行、航空公司和电信公司,靠的不仅仅是产品本身,更是帮大企业趟平落地流程的本事 <button class="pd-ts" data-t="42:30" data-who="Ashwin" data-en="The other thing I think that helped us a lot, to your earlier point about how did you get some of these large deals closed so quickly, was I think we were very curious about how we could productize parts of it within the enterprise." aria-label="回原文"></button>。面对受严格监管的金融机构,Decagon 会极其细致地给客户画出一张路线图:从今天的第一次开会,到最后 100% 上线,中间的模型风险审核、测试流程、初次推出策略、问题捕捉与修复机制,全都安排得明明白白 <button class="pd-ts" data-t="43:14" data-who="Ashwin" data-en="sort of mapping out that part of the journey very well so that when we walk in to one of these enterprises, we can walk them through in very granular detail how we go from this first meeting today to going live at 100%." aria-label="回原文"></button>。这是很多只懂技术的公司容易忽视的执行力。

这种敏锐的市场嗅觉,离不开创始人对销售的极度投入。Jesse 坦言自己大概把 80% 的时间都花在了销售上 <button class="pd-ts" data-t="44:44" data-who="Jesse" data-en="So I'm curious, I mean, don't give up too much alpha here, but how much time do you guys spend on sales as founders and how has that evolved over time? I probably spend most of my time, like 80% maybe." aria-label="回原文"></button>。因为他不仅要在前线推动大客户尽快拍板,更要把市场上最新的反馈迅速传导回产品团队。

那么,Decagon 最大的瓶颈是什么?不是延迟,也不是语音模型,而是招聘 <button class="pd-ts" data-t="52:05" data-who="Ashwin" data-en="Hiring. So it's less on the AI side. It's actually like people." aria-label="回原文"></button>。

有些人觉得有了 AI 就能做单人独角兽,但 Ashwin 指出,即使是那些最懂 AI 的编程初创公司,也都在疯狂招人 <button class="pd-ts" data-t="53:17" data-who="Ashwin" data-en="I think this argument does get tossed around a lot, but I think the... An easy counter example to this is all the AI coding startups are hiring like crazy. You know, they're like the most sophisticated users, presumably, of these models, and they are hiring like crazy." aria-label="回原文"></button>。因为当 AI 让生产力飙升时,所有人的算盘都一样:既然原本的路线图能缩短三分之一的完成时间,那就别停下,直接把目标定为盖三倍的东西 <button class="pd-ts" data-t="53:52" data-who="Ashwin" data-en="If somebody else said, oh, here's our roadmap and now we can get through it in a third of the time and then they just stop hiring, we would just take that to mean, wow, we can get through it in a third of the time." aria-label="回原文"></button>。

他们甚至把这种对速度的饥渴延伸到了公司文化上。面对外界对科技公司拼命干活的批评,Jesse 觉得在这样一个有野心、节奏极快的团队里,大家一起熬夜死磕项目、推出新产品,更像是一场充满战友情谊的团队运动 <button class="pd-ts" data-t="57:48" data-who="Jesse" data-en="teams that are so kind of disparate from like a function perspective all working together kind of one kind of needs people in the office because everybody's kind of jamming on ideas together but two it also makes it fun in a way because you know everyone is like working together towards some very specific outcome" aria-label="回原文"></button>。

## 本集带走

最后收个尾,这一集值得带走的是三句话。第一,前沿大模型虽然聪明,但并非万能解药;在特定任务上,自己微调过的开源小模型不仅能把活干得更好,还能顺手解决延迟和成本问题。

第二,应用层公司绝非简单的套壳,真正的护城河在于把极其复杂的业务逻辑、测试和合规要求封装进产品里,这是实验室无法替代的。第三,不要被前向部署的光环骗了,贴着客户干苦力的最终目的必须是把这些经验提炼成可规模化的核心产品,否则你只是在做一家被美化的咨询公司。除了这些,还有个暖心的洞察:AI 会干掉那些机械重复的工作,但它其实是在解放人去做更有价值的事,它扼杀的是苦差事,而不是职业生涯。

<div class="pd-sec">全部金句 <span>6 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">不幸的是,前沿实验室确实有小模型,但你无法真正以你想要的方式控制它们。</span>  
> *Unfortunately, the Frontier labs, they do have small models, but you can't really control them in the way that you want.*  
> <span class="qm">—— Ashwin Srinivas · [00:27]</span> ^q1

> <span class="qz">所以当我们微调更小、更笨的模型时,它们只是没那么通用,但在我们想要它们做的特定任务上,它们实际上优于那些大型、聪明、最先进的模型。</span>  
> *So when we fine-tune smaller, dumber models, it's that they're just not as general purpose, but on the specific task we want them to do, they actually outperform the large, smart, state-of-the-art models.*  
> <span class="qm">—— Jesse Zhang · [05:34]</span> ^q2

> <span class="qz">前向部署工程师吞食痛苦并排泄产品。</span>  
> *forward deployed engineers eat pain and excrete product.*  
> <span class="qm">—— Jesse Zhang · [25:39]</span> ^q3

> <span class="qz">如果你做不到那一点,那你只是在建立一个被美化的咨询卡车。</span>  
> *And if you can't do that, then you're just building a glorified consulting truck.*  
> <span class="qm">—— Jesse Zhang · [22:45]</span> ^q4

> <span class="qz">一个 AI 智能体应该只是你公司业务的前门。</span>  
> *An AI agent should just be the front door of your business.*  
> <span class="qm">—— Ashwin Srinivas · [00:00]</span> ^q5

> <span class="qz">每一次互动,无论是被动还是主动与客户,都应该由 AI 来处理。</span>  
> *And every interaction, whether it's like reactive or proactive with a customer, should be handled by AI.*  
> <span class="qm">—— Ashwin Srinivas · [00:02]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「创业与行业」挖下去**

- [[2026-07-31-yc-alexandr-wang-this-is-a-once-in-a-civili|Scale AI 创始人 Alexandr Wang:AI 时代,最稀缺的不是智能而是愿景]]<span class="pd-rz">同概念:开源模型 (open source models)、智能体 (agent)</span>
- [[2026-05-21-talks-the-best-time-in-history-to-start-a-comp|Stripe 与 Replit 对谈：AI 时代的创业大爆发与护城河]]<span class="pd-rz">同公司:OpenAI · 同概念:智能体 (agent)、开源模型 (open source models)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|用 20 个 AI 智能体换掉 8 人销售团队：SaaStr 创始人的前沿实战]]<span class="pd-rz">同概念:前向部署工程师 (forward deployed engineer)、智能体 (agent)</span>
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|SaaS 不会死,PM 迎来黄金期:Dan Shipper 的 AI 工作预测]]<span class="pd-rz">同概念:前向部署工程师 (forward deployed engineer)、智能体 (agent)</span>
- [[2026-08-06-talks-the-state-of-model-routing-nvidia-cognit|不靠一个模型打天下:多模型路由的早期探索与实战权衡]]<span class="pd-rz">同概念:开源模型 (open source models)、智能体 (agent)</span>

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
