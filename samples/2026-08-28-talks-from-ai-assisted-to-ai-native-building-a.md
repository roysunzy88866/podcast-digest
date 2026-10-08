---
title: "AWS 高级首席工程师:AI 提效 4.5 倍,靠的不是工具而是改工作方式"
podcast: 精选演讲
date: 2026-09-27
source_url: undefined
duration: "20:48"
type: episode
cover: "#64748b"
description: "AWS 高级首席工程师 Claire Liguori 分享 Amazon 内部「前沿开发」试点:50 个团队实测中位数 4.5 倍提效背后的五个习惯与落地陷阱。"
guests: ["[[Clare Liguori]]"]
companies: ["[[Kiro]]", "[[Amazon]]", "[[AWS]]", "[[Bedrock]]"]
concepts: ["[[智能体]]", "[[前沿开发]]", "[[vibe coding]]", "[[steering 文件]]", "[[测试左移]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-28-talks-from-ai-assisted-to-ai-native-building-a#post","headline":"AWS 高级首席工程师:AI 提效 4.5 倍,靠的不是工具而是改工作方式","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-28-talks-from-ai-assisted-to-ai-native-building-a","mainEntityOfPage":"https://talk.solomind.cc/2026-08-28-talks-from-ai-assisted-to-ai-native-building-a","description":"AWS 高级首席工程师 Claire Liguori 分享 Amazon 内部「前沿开发」试点:50 个团队实测中位数 4.5 倍提效背后的五个习惯与落地陷阱。","datePublished":"2026-09-27","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Clare Liguori"},{"@type":"Organization","name":"Kiro"},{"@type":"Organization","name":"Amazon"},{"@type":"Organization","name":"AWS"},{"@type":"Organization","name":"Bedrock"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"前沿开发 (frontier development)"},{"@type":"Thing","name":"vibe coding"},{"@type":"Thing","name":"steering 文件 (steering files)"},{"@type":"Thing","name":"测试左移 (shift testing left)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"AWS 高级首席工程师:AI 提效 4.5 倍,靠的不是工具而是改工作方式","item":"https://talk.solomind.cc/2026-08-28-talks-from-ai-assisted-to-ai-native-building-a"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AWS 高级首席工程师:AI 提效 4.5 倍,靠的不是工具而是改工作方式</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AWS 高级首席工程师:AI 提效 4.5 倍,靠的不是工具而是改工作方式

<div class="pd-byl"><b>Clare Liguori</b> · AWS 高级首席工程师 · 2026-09-27</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-28-talks-from-ai-assisted-to-ai-native-building-a.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但现在在 Amazon 内部,我们和公司里不同的团队开展了试点,我们看到了中位数 4.5 倍的生产力提升,有时甚至超过 10 倍。</div><div class="a">— Clare Liguori <button class="pd-ts" data-t="01:22" data-who="Clare Liguori" data-en="But now inside of Amazon, we've been running pilots with different teams across the company, and we've been seeing a median of 4.5x productivity improvement and sometimes more than 10x." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Clare Liguori]]
>
> **公司** [[Kiro]] · [[Amazon]] · [[AWS]] · [[Bedrock]]
>
> **概念** [[智能体]] · [[前沿开发]] · [[vibe coding]] · [[steering 文件]] · [[测试左移]]

「过去用各种 AI 编程工具,我只觉得自己生产力提升了 10% 到 20%。但现在在 [[Amazon|Amazon]] 内部的试点里,我们看到了中位数 4.5 倍、有时超过 10 倍的生产力提升。

」说这话的人是 Claire Liguori,[[AWS|AWS]] 的高级首席工程师,主要负责[[智能体|智能体]]编程助手 [[Kiro|Kiro]]。她在一次演讲里,把 Amazon 内部这一轮「阶跃式提升」的来龙去脉摊开讲了——核心结论很反直觉:**关键不在工具,而在改变工作方式。**

## 先看几个真实数字

Liguori 把 AI 编程辅助的演进分成几步:行内代码补全 → 聊天问答 → [[vibe coding|vibe coding]](随手给个高层指令、让 AI 生成代码)→ 现在被她称为「[[前沿开发|前沿开发]]」的早期采用阶段。她定义前沿开发者有三个行为:<button class="pd-ts" data-t="01:41" data-who="Claire" data-en="So something has really changed here now that we're seeing these step function improvements in productivity. And I like to define what we've been calling frontier developers inside of Amazon by three behaviors that I've been seeing." aria-label="回原文"></button>

- **放手式编程**:自己写的代码只占产出的 1% 到 2%,其余全是智能体写的;
- **低频交互**:目标是让编程助手不干预连续运行数小时;
- **消灭空闲时间**:并行跑多个智能体,不断消化积压任务。

第一个标杆是 [[Bedrock|Bedrock]] Mantle 团队。Bedrock 是 AWS 的模型托管服务(托管 Claude、GPT 这类大模型),团队原本估算要重建一个新的推理数据平面(承载推理流量的核心服务层),需要 30 人干 18 个月。

结果他们退了一步,**用 6 个人、靠 Kiro 在 76 天内建成了**——按 commit 衡量,提升最高到 20 倍。<button class="pd-ts" data-t="03:01" data-who="Claire" data-en="And they decided to take a step back. They took six people, and they built it in 76 days with Curo. So this was a huge achievement." aria-label="回原文"></button> 但这个故事有个「作弊」之处:这 6 个人是公司最顶尖的工程师,包括两位 distinguished engineer(.AWS 内部最高技术职级),都是分布式系统和 LLM 架构专家,对多数团队不可复制。

于是 Prime Video 组织做了第二个实验:10 天冲刺,又是 6 名工程师关起门来用 Kiro,把项目交付时间估计从 90 周压到 24 周。但这里也有水分:没人 on-call、几乎没会议、而且一位资深工程师**提前花了三周**把任务拆成非常细小、范围清晰、带详细需求的条目,工程师只管开工。<button class="pd-ts" data-t="05:17" data-who="Claire" data-en="But again, there was a challenge with this story, which was it was six engineers in a room, but they had no on-call duties, limited meetings, very few distractions, which we all know are regular in the lives of an engineer." aria-label="回原文"></button>

> 【背景】这里讲的 Kiro 在转写稿中有时被语音识别写成 Curo,是同一个产品。

## 关键实验:50 个普通团队,差距在使用方式

两个标杆都有「不可复制」的嫌疑,所以 Amazon Stores(涵盖 Amazon.com、零售网站和线下实体店)做了更结构化的试点:观察 **50 个完全普通的团队**——人员构成正态分布、维护的是带既有代码库的现有系统,不是从零开始的 Greenfield 项目——跟踪了去年大半年。<button class="pd-ts" data-t="05:59" data-who="Claire" data-en="So Amazon Stores, which encompasses Amazon.com, all of our retail websites, as well as our physical stores, did a more structured pilot. They watched 50 teams that were totally normal, normal distribution of early career folks, mid-career senior engineers, and that worked on existing systems." aria-label="回原文"></button>

结果很有意思:一半团队提升不到 3 倍,另一半中位数 4.5 倍、有些超过 10 倍。这次用的指标不只是 commit,而是**部署到生产的速度**——多快能把变更交付给客户。

90% 的团队都在用 Kiro 等内部工具,所以差别不在工具。**「实现了阶跃式改进的团队,是有意地改变了他们的工作方式;其他团队只是把 Kiro 零星地撒在现有工作方式之上。」**<button class="pd-ts" data-t="07:19" data-who="Claire" data-en="90% of these teams use Kiro, among other internal tools that we have, and what they found was it wasn't about the tools, it was about the way that they worked. The teams that achieve step function improvements intentionally changed the way that they worked, and the others simply kind of sprinkled Kiro and some of the other tools that we have on top of their existing way of working." aria-label="回原文"></button> Liguori 说这是她的最大顿悟:这解释了她自己为什么一直没感受到 AI 承诺的巨大提升。

试点团队走访出了五个**日复一日的习惯**(她特意强调是「习惯」,不是一次性冲刺):

## 五个习惯

**1. 投资于智能体上下文。** 脑子里的知识原来靠 Slack、导师、代码审查、站会传给同事,现在必须写下来。

具体习惯是:每当智能体犯错或做得跟你会做的不一样,就问「我的 skills 文件、[[steering 文件|steering 文件]](给智能体的长期指导文件)里缺了什么?」还要定期清理:去年年中的 Sonnet 3.7 怪癖多,steering 文件里写满「不要做」;到去年底的 Opus 4.5 就没那么多要写的了,而且此后又有超过六个月的模型迭代——每条规则要问自己「还必要吗,还是只是在让上下文臃肿?」<button class="pd-ts" data-t="09:31" data-who="" data-en="And then we've had six months, more than six months of improvements since then with all of the new versions of models that have come out since then. And so the question, the new habit again is, do I still need this in my steering files or is this just bloating context?" aria-label="回原文"></button>

**2. 放慢速度以求提速。** 几乎所有受访团队都报告:有意采用新工作方式时,生产率**先下降**。

因为得先做真正的工程工作——把智能体上下文建起来、改进现有工具的错误信息让模型失败时知道发生了什么、建新的 MCP 服务器(给模型接外部工具的标准接口)、甚至重构代码库让智能体更容易导航。<button class="pd-ts" data-t="09:54" data-who="Claire" data-en="That's counterintuitive, right? You have to do intentional engineering work before you're going to see that hockey stick curve in productivity improvement because we have to do real work in our code bases first for agents to be successful there, especially in Brownfield existing code bases." aria-label="回原文"></button> 极端案例是换编程语言:Python、JavaScript 这类无类型语言没有编译器报错、难测试,模型只能靠猜;她见过团队迁到 TypeScript,Rust 在 Amazon 内部也因此流行起来——编译器能给出很好的错误信息。

**3. 喂养智能体,而不是看管智能体。** 这是另一个顿悟点:如果你整天和智能体来回对话(vibe coding),每 30 秒到一分钟等它生成代码再审,你全程在循环里,当然不可能有 4 到 5 倍提升,也没法并行跑多个智能体。

正确姿势是把任务和**自我验证方式**一起喂给它,让它能自我纠错,只在达到质量门槛——能跑、编译过、测试过、覆盖率够高——时才回来找你。下一层是把这一切写进 steering 文件,让它每次自动照做。<button class="pd-ts" data-t="12:09" data-who="Claire" data-en="And so if your conversations look a bit like this on the left, then you're babysitting that agent, as opposed to the right side where you're feeding it what it needs to do and how it can self-validate." aria-label="回原文"></button>

**4. 把意图明确化。** Amazon 大量实践规范驱动开发,已内建进 Kiro。

vibe coding 的典型失败模式:给个高层 prompt → 生成一大堆代码 → 来回扯皮「这不是我要的意思」。Liguori 的经验是:**当意图本身就不对时,在代码上迭代的效率远低于先在文档上迭代**。对模糊、复杂的功能,先写规格说明(可以让模型生成)——就一份文档来回对话,比就散落在代码库各处的改动来回对话容易得多。<button class="pd-ts" data-t="13:37" data-who="Claire" data-en="And in Curo, of course, you don't have to write this whole specification. You can have the model generate it. But it's a lot easier to iterate with the model in kind of a back and forth conversation about a document than it is about code changes that are spread across a code base." aria-label="回原文"></button>

**5. 把[[测试左移|测试左移]]。** 快速反馈回路是让智能体能独自运行几小时并自我纠错的前提。

团队在加 linter、单元测试、集成测试、性能测试、安全测试——都是早该做的事,「但现在投资回报率终于高到值得我们真正投入了」。<button class="pd-ts" data-t="14:29" data-who="Claire" data-en="This is good engineering hygiene and practices. But now the ROI is, I think, finally high enough for us to actually invest in it. One thing that I've been seeing a lot of teams do is mock-out services." aria-label="回原文"></button> 一个流行做法是把依赖服务 mock 掉(本地跑、响应确定性的假服务),让智能体一切都在笔记本上完成,不必启动一堆云服务——反馈越快,能跑的循环越多,生产力越高。

## 还很难:三个坑

别以为 adopting 全部习惯就到极乐境界,Liguori 强调仍在早期采用阶段:

- **倦怠风险(FOMAT)**:工程师熬夜调「完美 prompt」,想让智能体夜里跑几小时、早上醒来代码就绪;并行多智能体带来认知负担、不断切终端标签页;而且审阅 AI 输出往往比亲手写更难——资深工程师有多年审代码的肌肉,初级工程师没有,审阅的认知负担反而比写大。<button class="pd-ts" data-t="16:17" data-who="Claire" data-en="You're constantly shifting between terminal tabs. And then we do see that reviewing AI output is often harder for some than actually writing it, especially early in career." aria-label="回原文"></button>
- **组织变革**:领导者容易犯的错是「你们有 AI 了怎么不更快?」——但团队需要那两个月投资代码库、摸索最佳实践、改习惯。第二个错是铺得太快:如果一开始就要求所有团队立刻成为前沿团队,就拿不到探路者、Sprint、试点带来的经验。Amazon 2026 年的挑战是把这套东西从 50 个团队推广到 2000 个团队。<button class="pd-ts" data-t="18:21" data-who="Claire" data-en="And now the challenge for us is how do we scale it out? And that's what 2026 is about for Amazon is how do we scale this out to more and more teams to the next 2,000 teams instead of 50 teams." aria-label="回原文"></button>
- **新瓶颈**:手动写代码不再是瓶颈,**决策速度成了新瓶颈**。代码一两个月就能写完,于是「要不要做这个产品」的审查、发布审批流程成了最耗时的环节。前沿工程团队花在做决策上的时间常常比写代码还多——所以快速决策、尤其是容易逆转的决策,越多越好。<button class="pd-ts" data-t="19:44" data-who="Claire" data-en="And so you find all of these things that slow you down. Often I find that frontier engineering teams spend more time making decisions than they do writing code. And so the more that you can make fast decisions, especially ones that are easy to be reversed, the better." aria-label="回原文"></button>

## 本集带走

- **提升上限不在工具,在工作方式**:50 个普通团队、同样的工具,一半不到 3 倍、一半中位数 4.5 倍,差距就是「有意改变工作方式」vs「把工具撒在旧方式上」。
- **先接受变慢**:引入期生产率会先下降,要花约两个月投资代码库、建智能体上下文、改团队习惯,才看得到曲棍球杆曲线。
- **喂养而非看管**:给任务时附上自我验证标准(能跑、编译过、测试过、覆盖率高),让智能体自我纠错、几小时不回来找你——这是并行多智能体和真正提效的前提。
- **意图不对就别在代码上迭代**:模糊复杂功能先写规格文档,和模型就文档来回改,比就散落各处的代码改动扯皮高效。
- **测试和 mock 服务的 ROI 终于到位了**:快速反馈回路直接决定智能体能跑多少自纠循环;mock 掉外部依赖让一切在本地完成。
- **盯住新瓶颈**:代码快了之后,决策和发布审批流程才是长杆——多做得快速、可逆的决策。

<div class="pd-sec pd-sec-q">全部金句 <span>14 条</span></div>

> <span class="qz">但现在在 Amazon 内部,我们和公司里不同的团队开展了试点,我们看到了中位数 4.5 倍的生产力提升,有时甚至超过 10 倍。</span>  
> *But now inside of Amazon, we've been running pilots with different teams across the company, and we've been seeing a median of 4.5x productivity improvement and sometimes more than 10x.*  
> <span class="qm">—— Clare Liguori · [01:22]</span> ^q1

> <span class="qz">前沿开发者自己写的代码可能只占他们产出代码的 1% 到 2%,其余的都是智能体写的。</span>  
> *Frontier developers write maybe 1% to 2% of the code that they produce. The rest is agents.*  
> <span class="qm">—— Clare Liguori · [01:52]</span> ^q2

> <span class="qz">他们发现关键不在于工具本身,而在于他们的工作方式。</span>  
> *And what they found was it wasn't about the tools, it was about the way that they worked.*  
> <span class="qm">—— Clare Liguori · [07:14]</span> ^q3

> <span class="qz">实现了阶跃式改进的团队,是有意地改变了他们的工作方式,而其他团队只是把 Kiro 和我们的一些其他工具零星地撒在现有的工作方式之上。</span>  
> *The teams that achieve step function improvements intentionally changed the way that they worked, and the others simply kind of sprinkled Kiro and some of the other tools that we have on top of their existing way of working.*  
> <span class="qm">—— Clare Liguori · [07:19]</span> ^q4

> <span class="qz">你必须先做有意的工程工作,才能看到生产率提升的那条曲棍球杆曲线,因为我们必须先在代码库里做真正的工作,智能体才能在那里取得成功,尤其是在既有代码库中。</span>  
> *You have to do intentional engineering work before you're going to see that hockey stick curve in productivity improvement because we have to do real work in our code bases first for agents to be successful there, especially in Brownfield existing code bases.*  
> <span class="qm">—— Clare Liguori · [09:54]</span> ^q5

> <span class="qz">如果你在 vibe coding,如果你整天和你的智能体来回对话,你当然不会看到 4 到 5 倍的生产力提升,因为你全程都在循环之中。</span>  
> *If you are vibe coding, if you are having a back and forth conversation with your agent all day long, of course, you're not going to see 4 to 5x productivity improvements because you are in the loop the entire time.*  
> <span class="qm">—— Clare Liguori · [11:21]</span> ^q6

> <span class="qz">这才是真正的关键,让智能体能够自我纠错,只有在达到某个质量门槛、真正能跑起来、编译通过、测试通过、覆盖率真的够高时,才回来找你。</span>  
> *And that's really the key so that agents can self-correct and only come back to you when it meets a certain quality bar, when it actually runs and compiles and passes tests, when it's testable, when it actually has high coverage.*  
> <span class="qm">—— Clare Liguori · [12:09]</span> ^q7

> <span class="qz">而我发现,当意图本身就不正确时,与智能体在代码上迭代的效率会低一些。</span>  
> *And it is less, I find, less productive to iterate with the agent on code when the intent itself was incorrect.*  
> <span class="qm">—— Clare Liguori · [13:14]</span> ^q8

> <span class="qz">然后我们也确实看到,对某些人来说,审阅 AI 输出往往比亲自写代码更难,尤其是职业生涯早期的人。</span>  
> *And then we do see that reviewing AI output is often harder for some than actually writing it, especially early in career.*  
> <span class="qm">—— Clare Liguori · [16:17]</span> ^q9

> <span class="qz">我们必须慢下来才能快起来。</span>  
> *We have to slow down to speed up.*  
> <span class="qm">—— Clare Liguori · [17:51]</span> ^q10

> <span class="qz">你花越多时间去审查是否要真正构建一个新产品的决策,现在构建这个产品就越慢,因为代码只需要一两个月就能写完。</span>  
> *The more that you spend reviewing the decision to actually build a new product, the slower it is to build the product now because the code only takes one to two months to write.*  
> <span class="qm">—— Clare Liguori · [19:02]</span> ^q11

> <span class="qz">我经常发现,前沿工程团队花在做决策上的时间比写代码还多。</span>  
> *Often I find that frontier engineering teams spend more time making decisions than they do writing code.*  
> <span class="qm">—— Clare Liguori · [19:44]</span> ^q12

> <span class="qz">所以你能做出的快速决策越多,尤其是那些容易逆转的决策,就越好。</span>  
> *And so the more that you can make fast decisions, especially ones that are easy to be reversed, the better.*  
> <span class="qm">—— Clare Liguori · [19:51]</span> ^q13

> <span class="qz">所以我在这里给所有人的一个大要点是:前沿工程的核心是有意识地改变你的工作方式。</span>  
> *So my one big takeaway for everyone here is that frontier engineering is about intentionally changing the way that you work.*  
> <span class="qm">—— Clare Liguori · [19:57]</span> ^q14

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-07-09-beyondcoding-cracked-solo-dev-why-the-fastest-enginee|氛围编码 vs 氛围工程：智能体时代谁被淘汰]]<span class="pd-rz">同概念:vibe coding、智能体 (agent)、Claude</span>
- [[2026-09-16-ainativedev-aws-39-s-marc-brooker-specs-not-code-are|AWS 杰出工程师：智能体时代，难的不是写代码，是写规格]]<span class="pd-rz">同公司:AWS、Kiro · 同概念:智能体 (agent)</span>
- [[2025-10-06-talks-agents-for-complex-software-engineering|Vibe debugging：代码生成之后，生产环境才是真正的硬仗]]<span class="pd-rz">同概念:vibe coding、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-10-08-a16z-building-the-cloud-for-an-agentic-world|当AI智能体成为云的大客户：AWS CEO Matt Garman 谈2200亿美元的豪赌]]<span class="pd-rz">同公司:Amazon、AWS、Bedrock · 同概念:智能体 (agent)</span>
- [[2026-09-30-bigtech-sap-ceo-ai-won-t-kill-software-but-it-wi|SAP CEO:单靠 LLM 跑不动企业,商业 AI 只差几个月]]<span class="pd-rz">同公司:Amazon · 同概念:vibe coding、智能体 (agent)</span>
- [[2025-07-03-lennys-ive-run-75-businesses-andrew-wilkinson|Andrew Wilkinson：别追咖啡馆，去找没人要的钓鱼洞]]<span class="pd-rz">同概念:vibe coding、智能体 (agent)</span>

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
