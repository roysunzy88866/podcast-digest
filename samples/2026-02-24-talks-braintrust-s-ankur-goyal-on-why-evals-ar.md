---
title: "评测优先:Braintrust 创始人谈 AI 产品开发的真正工程"
podcast: 精选演讲
date: 2026-09-10
source_url: undefined
duration: "27:45"
type: episode
cover: "#64748b"
description: Braintrust 创始人兼 CEO Ankur Goyal 讲述为什么评测(evals)是 AI 产品开发的核心，以及客户至上、无层级团队和自建数据库的实战经验。
host: "[[Ankur Goyal]]"
companies: ["[[Braintrust]]", "[[Brainstore]]", "[[Datadog]]"]
concepts: ["[[评估]]", "[[LLM]]", "[[智能体]]", "[[提示词]]", "[[可观测性]]"]
category: 创业与行业
tags:
  - 创业与行业
  - 产品方法
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar#post","headline":"评测优先:Braintrust 创始人谈 AI 产品开发的真正工程","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar","mainEntityOfPage":"https://talk.solomind.cc/2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar","description":"Braintrust 创始人兼 CEO Ankur Goyal 讲述为什么评测(evals)是 AI 产品开发的核心，以及客户至上、无层级团队和自建数据库的实战经验。","datePublished":"2026-09-10","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Ankur Goyal"},{"@type":"Organization","name":"Braintrust"},{"@type":"Organization","name":"Brainstore"},{"@type":"Organization","name":"Datadog"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"LLM"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"提示词 (prompt)"},{"@type":"Thing","name":"可观测性 (observability)"}],"articleSection":"创业与行业"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"创业与行业","item":"https://talk.solomind.cc/tags/创业与行业"},{"@type":"ListItem","position":3,"name":"评测优先:Braintrust 创始人谈 AI 产品开发的真正工程","item":"https://talk.solomind.cc/2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>评测优先:Braintrust 创始人谈 AI 产品开发的真正工程</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 评测优先:Braintrust 创始人谈 AI 产品开发的真正工程

<div class="pd-byl"><b>Ankur Goyal</b> · Braintrust 创始人兼 CEO · 2026-09-10</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果你在构建一个 AI 产品，除了评测之外做任何事都没有意义。一切都应该围绕你的评测展开。</div><div class="a">— Ankur Goyal <button class="pd-ts" data-t="03:18" data-who="Ankur Goyal" data-en="if you're building an AI product, there's no point doing anything other than evals. Everything should revolve around your evals." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Ankur Goyal]]
>
> **公司** [[Braintrust]] · [[Brainstore]] · [[Datadog]]
>
> **概念** [[评估]] · [[LLM]] · [[智能体]] · [[提示词]] · [[可观测性]]

这一集聊的是 AI 产品开发里最容易被忽视、却最核心的一件事：[[评估|评测]](evals,即用一批固定案例持续检验 AI 输出质量的工具)。主角是 [[Braintrust|Braintrust]] 的创始人兼 CEO Ankur——一位连续创业者，早在 ChatGPT 出现之前就在做 AI:他创办的 Empira 曾被 Figma 收购，之后他在 Figma 领导 AI 团队。他有一个听起来有点极端的主张：如果你在构建 AI 产品，除了评测之外做任何事都没有意义，一切都应该围绕评测展开 <button class="pd-ts" data-t="03:16" data-who="Ankur" data-en="And we had to build tools to help us do evals really well. And that's where I realized that if you're building an AI product, there's no point doing anything other than evals." aria-label="回原文"></button>。

钩子在于：没有人真正知道 [[LLM|LLM]] 是怎么工作的。模型的行为不可预测，那开发者还能控制什么？

Ankur 的答案是——你能控制的，是你期望模型产出什么。而把「期望产出什么」定义清楚，就是构建评测的全部手艺。

## 为什么评测是 AI 产品「真正的工程」

AI 的本质是「定义做什么，而不是怎么做」。既然模型不可预测，你能做的就是明确你对它行为的期望，并利用这份定义让产品更有可能产出你想要的结果 <button class="pd-ts" data-t="04:51" data-who="Ankur" data-en="Can you kind of share your point of view on that? Yeah, I think AI is very much about defining the what, not the how. No one really knows how LLMs work." aria-label="回原文"></button>。

接受这个思路后会有一个关键转变：模型表现不好时，与其去改[[提示词|提示词]]里某句措辞、然后祈祷没弄坏别的东西，最高杠杆的做法是把出问题的案例捕获进一条评测——这样你做的任何改动，你都知道它真的有效，而且不会破坏你之前积累的所有成果 <button class="pd-ts" data-t="05:49" data-who="Ankur" data-en="And if it doesn't behave well, instead of thinking about, okay, let me tweak this wording in the prompt to say I'm going to lose my job or whatever it is, You realize that the highest leverage thing you can do is actually try to capture what's going wrong in an eval so that any change that you make you know is actually going to work and it's not going to break all the other stuff that you've worked towards." aria-label="回原文"></button>。更妙的是，在评测上的投入是持久的：它不会在你每次换模型、改措辞、微调用例时蒸发掉。Ankur 认为这正是构建 AI 产品时「真正的工程」所在 <button class="pd-ts" data-t="06:00" data-who="Ankur" data-en="You realize that the highest leverage thing you can do is actually try to capture what's going wrong in an eval so that any change that you make you know is actually going to work and it's not going to break all the other stuff that you've worked towards." aria-label="回原文"></button>。

对新创始人的建议也很直接：你唯一能确定的就是，今天选的模型极不可能成为你明天唯一用的模型，所以别把自己绑死在某家模型上，选一种灵活的开发策略；至于「该从哪家模型起步」的决策瘫痪，他的答案是——随便选一个，赶紧开工 <button class="pd-ts" data-t="06:36" data-who="Ankur" data-en="And it seems like an easy thing to not connect yourself to any underlying model, but start with a really good AI developer platform that can extend across models is brain trust." aria-label="回原文"></button>。

## 产品市场契合的另一种感觉

在 Empira 和大多数创业公司，成功的感觉总是「除非……

否则不行」：除非网站访客够多、除非这个功能上线。而他在 Braintrust 早期(以及之前在 Figma 见到的)是完全相反的体验：尽管这些条件全都不存在，你却总是成功 <button class="pd-ts" data-t="07:35" data-who="Ankur" data-en="How are all these like really high taste companies using you? Well, I think on product market fit, at Impura and I think most startups, it feels like you're not going to be successful unless you accomplish something." aria-label="回原文"></button>。看到用户会「默认直接用你的产品」，是一种完全不同的处境。

至于为什么能拿下 Stripe、Instacart、Airtable 这些品味最高的客户，他的答案出人意料地简单：非常明确地选择要押注哪一小撮客户，让他们真正满意。想讨好所有人是不可能的；但服务一小撮特质相似、代表未来的客户，你就能真正聚焦他们在乎的问题。Stripe 的团队昨天还在他们办公室，一起开了一场关于未来 12 个月路线图的开放头脑风暴 <button class="pd-ts" data-t="08:24" data-who="Ankur" data-en="But it's just a different place to be. In terms of taste, I think honestly the thing that we did well is that we were very specific about which customers we wanted to make a bet on and make them really happy." aria-label="回原文"></button>。

## 客户至上 = 给工程师「放下一切」的许可

以客户为中心到底是什么样的？Ankur 说，至少在工程侧，关键是给工程师许可，让他们可以那样行事。

他非常讨厌冲刺规划(sprint planning),因为它把工程师的身份认同和「接下来两周要交付的东西」绑在一起。可是如果客户正在用你写的功能，而里面有个 bug 让他们很痛苦——他认为是的，你应该放下一切立即去帮那个客户 <button class="pd-ts" data-t="10:49" data-who="Ankur" data-en="Yeah, I think a lot of it, at least on the engineering side, is giving engineers the permission to operate that way. One of the things I really don't like is sprint planning." aria-label="回原文"></button>。不这么做，那些随时间累积的小痛点会让产品变烂。

代价他也说得很清楚：失去路线图的可预测性、失去交付速度，可能一两个月发不出任何东西，还难以追踪个人进度。解法是团队里要有更多资深的人。但行业默认的那套流程不允许你这么运作，所以你必须非常明确地按这种方式来。

## 撑不住之后才自建数据库

[[Brainstore|Brainstore]](Braintrust 自建的数据库系统)是 Ankur 做的第三个数据库系统。第一年他们用的是这个领域所有人都用的那套标准开源数据库组合。

直到客户——那些处于 AI 产品增长最前沿的公司、第一批体验到真正指数级增长的公司——的日志系统撑不住了：不只是数据量大，更因为数据形态奇怪。传统数据库不擅长快速处理大量文本，而提示词越来越大、越来越多，在千万条提示词里大海捞针式搜索变得至关重要 <button class="pd-ts" data-t="12:30" data-who="Ankur" data-en="But one of the things that sets Brainstore apart that I think is quite cool is that we knew exactly what the problems were that we needed to solve. So for the first year of Braintrust, we used the sort of standard medley of open source database stuff that everyone does in the space." aria-label="回原文"></button>。

有意思的是，Ankur 一直克制着想自建系统的冲动，这反而逼出了极高的清晰度：他们非常清楚要解决什么问题。最初团队只有三个人——他、他弟弟 Manu、上一家公司的第二位工程师 Austin,从十月到次年一月像躲在山洞里一样，直到把系统交付给第一批客户。它是专门为处理「LLM 形态数据」打造的：海量文本、你做梦都想不到的疯狂 JSON。

## 「AI 版 Datadog」这个类比错在哪

外面常把 Braintrust 类比为「面向 AI 工作负载的 [[Datadog|Datadog]]」。Ankur 认为这个类比有真实的部分，但短视之处在于把两者都当成[[可观测性|可观测性]]产品：你投资 Datadog 是为了达成「正常运行时间」，而投资 Braintrust 是为了达成「质量」——本质上不同的目标，会引出完全不同的产品功能 <button class="pd-ts" data-t="14:44" data-who="Ankur" data-en="I think there's a lot of truth to the analogy, and there's also, it can also be quite myopic. So the myopic version of this analogy is thinking about both products as observability products." aria-label="回原文"></button>。比如 Braintrust 最强大的功能之一是把日志连接到数据集、数据集再连到评测，评测的代码和提示词又和 GitHub 代码库紧密相连。

至于「会有单独一家公司做[[智能体|智能体]]评测、另一家做语音评测」的说法，他的回应很硬：智能体就是一个带工具的 for 循环，Braintrust 从一开始就是围绕这类用例构建的——事实上他们几乎所有客户都在上面构建智能体 <button class="pd-ts" data-t="16:13" data-who="Ankur" data-en="And so, like, what's your take on this? Agents are a for loop with tools. Yeah." aria-label="回原文"></button>。更深的原因是评测背后有很多艰难的基础设施问题：每秒摄取数兆字节数据(智能体只会产生更多数据)、运行可能耗时数天的评测并把数据汇总到一处。这些硬基础设施问题解决好了，流行术语怎么变都动摇不了他们。

## 非工程师开始比工程师用得还多

有个客户，使用 Braintrust 的非工程师比工程师还多——这让他闪回到 Figma 早期：当时很多客户公司里，非设计师用 Figma 的数量超过了设计师 <button class="pd-ts" data-t="19:49" data-who="Ankur" data-en="One of the things you were sharing with me a few weeks ago, but there was a customer where more non-engineers were using Braintrust than engineers. And like, I had this flashback to the early Figma days when sort of Figma tipped and in many accounts, more non-designers started using the product than designers." aria-label="回原文"></button>。

原因是：在医疗、法律、制造等领域，领域专家价值极高，而 AI 正在被用于以前软件根本解决不了的场景。医生非常擅长为提示词做贡献，让模型在微妙具体的病例上保持正轨——而这些人不是软件工程师 <button class="pd-ts" data-t="20:05" data-who="Ankur" data-en="Tell me more about that, like who's using Braintrust, who's not an engineer and why? Yeah, I think the simple answer to your question is that subject matter experts are incredibly valuable in fields like healthcare, legal, manufacturing, et cetera, where people are now leveraging AI for use cases that software wasn't really capable of solving before." aria-label="回原文"></button>。

所以 Braintrust 解决的一个重要问题，就是让工程团队有一个值得投入精力的平台，回报是这个平台能与非技术人员协作。一个具体例子是 span iframes 功能：工程师可以写自定义代码，在 Braintrust 内部渲染完全定制的界面给非技术用户。

需求端的加速也很猛：用过 ChatGPT、Cursor 的人开始对所有产品都有同样的期待；更重要的是，一批客户正在内部严肃讨论「要么围绕 AI 重建产品，要么死」，只有六到八周时间改造自己构建软件的方式 <button class="pd-ts" data-t="18:32" data-who="Ankur" data-en="And then I'd say secondarily, but still important, there are a lot of new startups that are forming that represent a fundamentally existential threat to a lot of businesses." aria-label="回原文"></button>。

## 管理与招聘：没有一对一，没有层级

团队扩张上，对他启发最大的是 Jensen(英伟达 CEO 黄仁勋)说不做一对一谈话。他以前从没试过，但在 Braintrust 试了——这让他们比有严格层级时灵活得多，公司现在基本没有任何层级，他认为 AI 也帮了大忙 <button class="pd-ts" data-t="22:04" data-who="Ankur" data-en="What have you learned about scaling a team this quickly? I think one of the most interesting insights I heard over the past few years was Jensen saying he doesn't do one-on-ones." aria-label="回原文"></button>。

市场推广团队的扩张，他学到的最难的教训是：你不能雇市场人员去解决公司自己还没解决的问题 <button class="pd-ts" data-t="23:04" data-who="Ankur" data-en="How have you been able to do that and what have you learned about scaling go-to-market? The hardest lesson that I've learned over time is that you can't hire go-to-market people to solve problems that you haven't solved as a company." aria-label="回原文"></button>。创始人常犯的错是「销售不达标，就去找一个能搞定一切的销售副总裁」。他们没这么做——他们先明确了买家是谁、哪些公司有类似销售模式，然后几乎是「手工打造」出完美匹配的销售负责人，而这些人恰好认识他们的不少客户，因为他们卖过上一代产品。

招聘的重视程度和客户至上一样：他们会飞遍各地见候选人、带他们吃饭，客户也会深度参与招募。他愿意把 Braintrust 看成一个社区：好销售对客户是好事，好客户对销售团队也是好事。

## 下一步：让模型自己改进模型

展望未来，Ankur 认为过去十年唯一不变的两件事是：AI 系统在变得更简单，用 AI 的人在变多。最近这批模型达到了一个阶跃式变化：它们已经足够擅长审视自己的工作，能够自我改进 <button class="pd-ts" data-t="26:44" data-who="Ankur" data-en="And the other thing that we're really working hard on right now is actually simplifying our own product experience. So as of the most recent vintage of models, we hit a threshold change or a step function change where models are now sufficiently good at looking at their own work." aria-label="回原文"></button>。

他们已经看到自动提示词改进、自动数据集生成、翻查日志找有趣案例等方面的惊人成果，还发布了内置智能体 Loop。他甚至认为这会帮他们避免构建一堆功能、假以时日可能移除产品的一些功能——让 Braintrust 自己也变成 AI 原生的体验。

## 本集带走

- **评测是 AI 产品唯一的「真工程」**：模型不可预测，你能控制的只有「期望它产出什么」；把出问题的案例捕获进评测，任何改动都有据可查、不会弄坏已有成果，而且这份投入在换模型、改措辞时都不会蒸发。
- **别在选模型上决策瘫痪**：今天选的模型几乎注定不是你明天唯一用的模型——随便选一个开工，把灵活性留给开发策略。
- **只服务一小撮代表未来的客户**：想讨好所有人必败；聚焦一小撮特质相似的高品味客户，全力以赴，聚焦他们在乎的问题。
- **给工程师「放下一切修客户问题」的许可**：这意味着牺牲路线图可预测性和交付节奏，需要更多资深的人，但不这么做小痛点会累积成烂产品。
- **先用现成方案撑到极限再自建**：Brainstore 是日志系统被指数级增长压垮、且对要解决的问题有了极高清晰度之后才动手的——不是反过来。
- **别雇人解决你自己没解决的问题**：先搞清楚买家是谁、销售动作长什么样，再「手工打造」匹配的销售负责人。
- **AI 正在让模型自我改进成为可能**：自动提示词改进、自动数据集生成已经落地，趋势是让产品自己变成 AI 原生体验，甚至删功能。

<div class="pd-sec pd-sec-q">全部金句 <span>10 条</span></div>

> <span class="qz">如果你在构建一个 AI 产品，除了评测之外做任何事都没有意义。一切都应该围绕你的评测展开。</span>  
> *if you're building an AI product, there's no point doing anything other than evals. Everything should revolve around your evals.*  
> <span class="qm">—— Ankur Goyal · [03:18]</span> ^q1

> <span class="qz">一旦你接受了评测，你就会意识到 LLM 所做的不过是你在产出的评测的一个函数。</span>  
> *once you embrace evals, then you realize that what the LLM does is merely a function of the evals that you're producing.*  
> <span class="qm">—— Ankur Goyal · [05:34]</span> ^q2

> <span class="qz">你会意识到杠杆最高的做法其实是把出问题的地方捕获进一条评测，这样你做的任何改动你都知道是真正有效的，不会破坏你之前努力取得的所有其他成果。</span>  
> *You realize that the highest leverage thing you can do is actually try to capture what's going wrong in an eval so that any change that you make you know is actually going to work and it's not going to break all the other stuff that you've worked towards.*  
> <span class="qm">—— Ankur Goyal · [05:49]</span> ^q3

> <span class="qz">当你真正接受它时，你会意识到你在评测上投入的工作，不会在你每次尝试新模型、改一些措辞或稍微改变用例时就蒸发掉。</span>  
> *When you really embrace it, you realize that the work that you put into doing evals doesn't evaporate every time you try a new model or you change some wording or you change your use case a little bit.*  
> <span class="qm">—— Ankur Goyal · [06:00]</span> ^q4

> <span class="qz">你唯一能确定的就是，你今天选的任何模型都极不可能成为你明天唯一会用的模型。</span>  
> *the only thing that you can be certain of is that whatever model you pick today is super unlikely to be the model that you're going to use solely tomorrow.*  
> <span class="qm">—— Ankur Goyal · [06:37]</span> ^q5

> <span class="qz">我一直不得不克制自己不去构建像 Brainstore 这样的系统，因为我真的很想去做。但这迫使我们对自己需要构建的东西有了越来越高的清晰度。</span>  
> *I kept having to hold myself back from building a system like Brainstore because I really wanted to. But it forced us to have an increasingly high level of clarity about what we needed to build.*  
> <span class="qm">—— Ankur Goyal · [13:24]</span> ^q6

> <span class="qz">智能体就是一个带工具的 for 循环。</span>  
> *Agents are a for loop with tools.*  
> <span class="qm">—— Ankur Goyal · [16:13]</span> ^q7

> <span class="qz">因为他们内部正在进行严肃的讨论：要么想办法围绕 AI 重建产品，要么死。</span>  
> *because they're having serious discussions internally about how it's either figure out how to rebuild our product around AI or die.*  
> <span class="qm">—— Ankur Goyal · [18:40]</span> ^q8

> <span class="qz">我认为过去几年里我听到的最有趣的洞见之一是 Jensen 说他不进行一对一谈话。那对我来说是一个巨大的解锁。</span>  
> *I think one of the most interesting insights I heard over the past few years was Jensen saying he doesn't do one-on-ones. And that was a big unlock for me.*  
> <span class="qm">—— Ankur Goyal · [22:04]</span> ^q9

> <span class="qz">随着时间推移，我学到的最难的教训是：你不能雇佣市场推广人员去解决你作为一家公司还没有解决的问题。</span>  
> *The hardest lesson that I've learned over time is that you can't hire go-to-market people to solve problems that you haven't solved as a company.*  
> <span class="qm">—— Ankur Goyal · [23:04]</span> ^q10

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「创业与行业」挖下去**

- [[2026-08-13-twentyvc-20vc-canva-slashes-growth-how-much-is-it|Canva 增长骤降背后：无代码时代终结与 AI 蚕食的真相]]<span class="pd-rz">同公司:Datadog、ChatGPT、Figma · 同概念:智能体 (agent)、可观测性 (observability)</span>
- [[2026-06-10-talks-barney-hussey-yeo-in-conversation-with-j|Clio 的 AI 赌注：从扑克到财务健康]]<span class="pd-rz">同概念:LLM、智能体 (agent)</span>
- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:智能体 (agent)、评测 (evals)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-09-07-lennys-how-ai-is-reshaping-the-product-role|PM的生存法则：AI时代别当瓶颈，去抢活干]]<span class="pd-rz">同概念:LLM、智能体 (agent)、评测 (evals)</span>
- [[2025-09-21-lennys-from-managing-people-to-managing-ai-juli|Julie Zhuo：管理者的核心技能，就是驾驭AI的技能]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)、评测 (evals)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)、评测 (evals)</span>

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
