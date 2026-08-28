---
title: Block CTO：代码质量与产品成功毫无关系，打造 AI 原生公司靠的是组织重组
podcast: "Lenny's Podcast"
date: 2026-08-13
source_url: https://www.lennysnewsletter.com/p/how-block-is-becoming-the-most-ai-native
duration: "86:37"
type: episode
cover: "#6366f1"
image: "/covers/2025-10-26-lennys-how-block-is-becoming-the-most-ai-native.jpg"
description: Block CTO 分享通过组织重组、全员用 AI 和自研开源智能体 Goose 实现 AI 转型的真实经验与反直觉教训。
host: "[[Lenny]]"
cohosts: ["[[Dhanji Prasanna]]"]
companies: ["[[Block]]"]
concepts: ["[[Goose]]", "[[智能体]]", "[[MCP]]", "[[康威定律]]", "[[职能型架构]]", "[[LLM]]"]
category: 组织与领导力
tags:
  - 组织与领导力
  - 智能体
socialImage: "https://talk.solomind.cc/covers/2025-10-26-lennys-how-block-is-becoming-the-most-ai-native.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2025-10-26-lennys-how-block-is-becoming-the-most-ai-native#post","headline":"Block CTO：代码质量与产品成功毫无关系，打造 AI 原生公司靠的是组织重组","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2025-10-26-lennys-how-block-is-becoming-the-most-ai-native","mainEntityOfPage":"https://talk.solomind.cc/2025-10-26-lennys-how-block-is-becoming-the-most-ai-native","description":"Block CTO 分享通过组织重组、全员用 AI 和自研开源智能体 Goose 实现 AI 转型的真实经验与反直觉教训。","datePublished":"2026-08-13","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2025-10-26-lennys-how-block-is-becoming-the-most-ai-native.jpg","isBasedOn":"https://www.lennysnewsletter.com/p/how-block-is-becoming-the-most-ai-native","about":[{"@type":"Person","name":"Lenny"},{"@type":"Person","name":"Dhanji Prasanna"},{"@type":"Organization","name":"Block"},{"@type":"Thing","name":"Goose"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"康威定律 (Conway's Law)"},{"@type":"Thing","name":"职能型架构 (functional structure)"},{"@type":"Thing","name":"LLM"}],"articleSection":"组织与领导力"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"组织与领导力","item":"https://talk.solomind.cc/tags/组织与领导力"},{"@type":"ListItem","position":3,"name":"Block CTO：代码质量与产品成功毫无关系，打造 AI 原生公司靠的是组织重组","item":"https://talk.solomind.cc/2025-10-26-lennys-how-block-is-becoming-the-most-ai-native"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Block CTO：代码质量与产品成功毫无关系，打造 AI 原生公司靠的是组织重组</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Block CTO：代码质量与产品成功毫无关系，打造 AI 原生公司靠的是组织重组

<div class="pd-byl"><b>Dhanji Prasanna</b> · Block CTO · 2026-08-13</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2025-10-26-lennys-how-block-is-becoming-the-most-ai-native.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">每当我听到这样的统计数据时，我认为人们需要考虑的一个重要因素是这是它未来最差的状态。</div><div class="a">— Lenny <button class="pd-ts" data-t="21:20" data-who="Lenny" data-en="Whenever I hear a stat like this, I think an important element that people need to think about is this is the worst it will ever be." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Lenny]] · [[Dhanji Prasanna]]
>
> **公司** [[Block]]
>
> **概念** [[Goose]] · [[智能体]] · [[MCP]] · [[康威定律]] · [[职能型架构]] · [[LLM]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/how-block-is-becoming-the-most-ai-native)

很多工程师认为代码质量对于构建成功的产品很重要，但这两者毫无关系——曾以糟糕代码著称的 YouTube，反而是 Google 内部最成功的产品。说这话的人是 [[Dhanji Prasanna|Dhanji Prasanna]]，[[Block|Block]] 的首席技术官，负责带领这家拥有 3,500 多人的公司完成向 AI 原生转型。

### 改造公司的地基：比 AI 工具更重要的是组织结构

Dhanji 进入高管圈后发现，大家讨论着各类业务问题，却没人在关注 AI，于是他写下了一份「AI 宣言」，呼吁公司集中力量拥抱 AI <button class="pd-ts" data-t="06:26" data-who="" data-en="So he got about 40 of the company's top executives into a room on a weekly basis, and they all used to sort of talk everything through that was going on and he added me to that group." aria-label="回原文"></button>。但真要让一家庞大多业务线的公司转变成 AI 原生，最痛、但也最关键的一步并不是买工具，而是组织重构。

在改造前，Block 旗下各业务线（如 Cash App、Square 等）各自为政，采用了类似独立公司组合的 GM（总经理）结构。不同业务有着独立的工程团队、设计团队，彼此几乎不交流 <button class="pd-ts" data-t="09:43" data-who="" data-en="We had spun them out almost as what we call a GM structure. So they were effectively run as a portfolio of independent companies and they had their own CEOs who all reported to Jack and it was still one single executive team, but they had separate engineering practices, they had separate design teams." aria-label="回原文"></button>。这种结构在业务成熟期管用，但要深入拥抱前沿技术变革时，就显得极其臃肿。

> **康威定律（Conway's Law）**：软件架构会映射出设计该软件的组织结构——换言之，「**你交付的其实是你的组织结构**」<button class="pd-ts" data-t="12:28" data-who="" data-en="I think that one of the things that I learned the most throughout this process is that Conway's Law can be really, really powerful. So it's the law that basically says you ship your org structure." aria-label="回原文"></button>。

为了让公司的技术焦点重新统一，Dhanji 推动将分散的组织架构彻底改组为**[[职能型架构|职能型架构]]**：所有工程师向同一个工程负责人汇报，所有设计师向同一个设计负责人汇报 <button class="pd-ts" data-t="10:32" data-who="" data-en="So I think that that was very useful for us for the stage of company that we were in, but when you really want to go deep in technology, when you really want to connect with these things that are industry changing events that are happening, you need a singular focus, and we changed the organization." aria-label="回原文"></button>。

这次重组极其痛苦，但带来了质变：全公司统一了技术语言、统一了工程师评级标准，人员可以按需灵活调配，为全面推进 AI 扫清了障碍。Dhanji 指出，这种重组的逻辑与乔布斯重返苹果时做的功能化重组一致：把工程和设计放在首位，才能重塑公司的技术 DNA <button class="pd-ts" data-t="11:22" data-who="" data-en="Yeah, I think that's pretty much what we did. And not to lean too heavily on this, but this is what jobs did when he came back to Apple as well. He reorganized Apple to be functional, and it wasn't like we were following a playbook." aria-label="回原文"></button>。

### 实质生产力：每周省 8-10 小时与自动化盲区

在 Block，推进 AI 被称为「**Automate Block**」（通过自动化实现 Block），目标是让 AI 和自动化贯穿整个公司 <button class="pd-ts" data-t="16:03" data-who="" data-en="Our number one priority is through automate Block, which means getting AI and getting AI forms of automation through our entire company. And we feel that that's just at the beginning of where the utility is with all these large language models, and I think we're going to continue to see that improve." aria-label="回原文"></button>。最直观的成效是：每天使用 AI 工具的最前沿工程团队，**平均每周节省 8 到 10 小时**工作量。全公司来看，估算正趋向于节省 20% 到 25% 的人工工时 <button class="pd-ts" data-t="16:57" data-who="" data-en="So we look at PRs, we look at throughput of features, we look at a whole bunch of things and we have our data scientists come up with a complicated formula that tries to distill it all into something meaningful." aria-label="回原文"></button>。

但这些收益并不均匀。对于从零开始的新代码库，生产力提升极其惊人；但在历史包袱沉重的复杂遗留代码库中，收益还不明显 <button class="pd-ts" data-t="21:01" data-who="" data-en="And then on the engineering side, it's very variable because like I said before, it matters how big and how complex the code base is. And so if you're building a totally new Greenfields code base or you're building an app for a new platform, then we're seeing those pretty aggressive gains, but in very complex code bases that already exist, those gains are not quite there yet." aria-label="回原文"></button>。

更令人惊讶的是，目前从 AI 工具中获益最大的群体，并不是工程师，而是**非技术人员** <button class="pd-ts" data-t="49:50" data-who="" data-en="And then the junior people are like my niece and nephew on a BlackBerry or something, they're just blitzing through things, not BlackBerry in the early days and iPhones now, they're blitzing through a text message when I'm still seek and destroying through my keyboard, shows you how old I am." aria-label="回原文"></button>。例如，企业风险管理团队自己用 AI [[智能体|智能体]]搭建了整套风险自助管理系统，把以往需要排队等内部 IT 排期数周才能做完的工作压缩到了几小时 <button class="pd-ts" data-t="18:06" data-who="" data-en="One area in which we find that it's really good is for non-technical teams to be able to build little software tools for themselves. So this has been one of the most surprising and energizing uses of Goose within Block is we'll have our enterprise risk management team build a whole system for self-servicing enterprise risk, and this is compressing weeks of work into hours, or ordinarily, they would be waiting for an internal apps team or something to go and build that and they would put that on their Q2 roadmap and everyone would be twiddling their thumbs until it all clicked into place, but now you can just go and do it." aria-label="回原文"></button>。

> Dhanji 提醒，每当听到任何关于生产力的统计数据时，要明白「**这是它未来最差的状态，这就是现在的基线**」，而 AI 的价值每天都在变化 <button class="pd-ts" data-t="21:19" data-who="" data-en="That's amazing. And whenever I hear a stat like this, I think an important element that people need to think about is this is the worst it will ever be. This is the lowest, this is now the baseline." aria-label="回原文"></button>。

Dhanji 坦言，AI 目前还不擅长处理那些需要深度与全局判断的事务。当资深工程师在思考架构设计、竞态条件和复杂编排时，AI 依然不如人类。此外，AI 也缺乏对「**全局重要性**」的组合判断力，比如它不知道一个新系统是否会不必要地增加公司的安全防护成本——这种战略级决策仍需人类介入 <button class="pd-ts" data-t="19:39" data-who="" data-en="So we're seeing a lot of advantages in those types of areas, but where you have a lot of depth and a lot of really strong people come together is where AI, I think still underperforms humans." aria-label="回原文"></button>。

### Goose：给大模型装上手脚

Block 内部甚至全行业推进 AI 落地最重要的抓手，是他们自研并开源的智能体 **[[Goose|Goose]]**。它本质上是一个通用桌面 AI 程序，而它之所以能跨系统执行真实任务，归功于 **[[MCP|MCP]]（模型上下文协议）** <button class="pd-ts" data-t="22:30" data-who="" data-en="So it can do all of these tasks, and the way we've been able to do this is through something called a model context protocol or the MCP, which a lot of your listeners might've heard." aria-label="回原文"></button>。

> **MCP（模型上下文协议，Model Context Protocol）**：一种由 Anthropic 提出并开源的协议，本质上是一套包装器。企业可以将 Salesforce、Snowflake、SQL 等任何内部工具包装进 MCP，从而暴露给大语言模型，让模型能直接操作这些系统 <button class="pd-ts" data-t="22:58" data-who="" data-en="And the model context protocol is very simply just a set of formalized wrappers around existing tools or existing capabilities. So if you have tools that you use in the enterprise, be it Salesforce or be it Snowflake or SQL, any of these things, you can wrap them in the MCP and then it exposes them to your LLM to be able to manipulate." aria-label="回原文"></button>。

在 MCP 出现前，[[LLM|LLM]]（大语言模型）基本只是个聊天大脑；通过 MCP，Goose 给大脑装上了手脚。例如，你可以要求 Goose 生成营销报告：它会自动连接 Snowflake 或 Looker 抓取数据，编写 Python 做分析，用 JavaScript 生成图表，最后排版成 PDF 并自动发邮件 <button class="pd-ts" data-t="24:42" data-who="" data-en="So we have a pluggable provider system and you can either bring your own API keys and use the Claude family models or OpenAI's family models, or you can use open source models and you can download them and use them directly or via Ollama and other, there are several tools that help you do that, but essentially it's taking the capability of these models to generate text and to interpret text and applying them to real world situations." aria-label="回原文"></button>。如果公司想给某个工单系统加上 AI 能力，以前得苦等供应商更新，现在只需写几行 MCP 代码即可一夜之间完成自动化编排 <button class="pd-ts" data-t="26:34" data-who="" data-en="But with Goose, that's no longer necessary with a few lines of code that an MCP represents. All these systems are orchestratable with AI basically overnight, and Goose can write its own MCPs." aria-label="回原文"></button>。

Block 内部有一位工程师将这种自主性推向了极致：他让 Goose 持续监控自己的屏幕、监听语音。当他在 Slack 或邮件里和同事讨论某个值得做的功能后，几个小时后 Goose 就会**自动尝试写出该功能的代码并提交 PR** <button class="pd-ts" data-t="29:30" data-who="" data-en="And so he built this system where it's essentially just watching everything he does all the time and he'll be talking to a colleague on Slack or an email and they'll be discussing some feature that they think is useful to implement." aria-label="回原文"></button>。

如果该工程师开会超时，Goose 甚至会自动帮他重新安排接下来的日历，无需人工点按十几次 <button class="pd-ts" data-t="31:32" data-who="" data-en="I can't make it that time, or I have to go pick up my kid.&quot; And Goose will automatically reschedule that meeting without him ever sitting in front of his calendar and clicking through 10 times." aria-label="回原文"></button>。这展示了 AI 智能体介入工作流的巨大可能性。

### 工作流的颠覆：睡觉前许愿，醒来后验收

随着大模型能力提升，Dhanji 认为目前流行的 vibe coding（通过聊天驱动 AI 写代码）过于像「打乒乓球」——一来一回、半生不熟，极具局限性 <button class="pd-ts" data-t="32:59" data-who="" data-en="So I think vibe coding has been an interesting, exciting thing, which is you talk to a chatbot essentially and it goes and builds software for you, but I think this is highly limiting." aria-label="回原文"></button>。未来的工作模式将是**长时间的高自主性运行**。

他正在推动的下一代 Goose 实验目标是：将单次运行时间从目前的 5-7 分钟延长到**数小时甚至整夜**。既然大模型在晚上和周末都在闲置，那就应该让它们加班 <button class="pd-ts" data-t="33:45" data-who="" data-en="We're trying to say, &quot;Hey, all these LLMs are sitting idle overnight and on weekends while humans aren't there, there's no need for that.&quot; They should be working all the time." aria-label="回原文"></button>。

过去的工程实践受限于人力和带宽，只能挑选一条「最优路径」去实验。但现在，人类的协调瓶颈被打破了。

你可以极其详细地描述多个不同的实验方向，然后去睡觉。第二天醒来，AI 已经把这五六个实验全构建好了，你只需挑选最满意的一个，**把其余的全部删掉** <button class="pd-ts" data-t="34:26" data-who="" data-en="We need instead to be able to describe multiple different experiments in a great amount of detail. And then maybe we go to sleep and then in the morning, all those experiments are built and we can sort of throw away five or six of them." aria-label="回原文"></button>。

Dhanji 作为 CTO 自己每天都在写代码，但他现在经常做的事情是：**构建一整套新系统后，觉得不对劲，直接全部删掉从头重写**。这在以前是不可想象的。

软件工程界历来有「不要随便重写」的铁律，因为重写会丢失无数细小的改进。但在 AI 能将这些渐进式改进作为规范融入重写过程后，**每次版本发布都相当于将整个 App 从零重建**，将成为可能 <button class="pd-ts" data-t="35:13" data-who="" data-en="And I think that you're going to see instead of us, for example, refactoring an app to have a different UI or to evolve into its new version, we're just going to rewrite that app from scratch." aria-label="回原文"></button>。不过，这也要求人类运用品味和设计感来锚定 AI，防止它们跑偏产出「AI 劣质内容（AI slop）」<button class="pd-ts" data-t="38:05" data-who="" data-en="I do think we're going to need a lot of human taste to anchor these AIs so they don't go off script to be honest. And that's really where our design lead and our design teams are pushing us to think, and that's a differentiator that I think will push us beyond this era of AI slop that everyone's talking about." aria-label="回原文"></button>。

### 招聘与文化：别把工程师当商品

有趣的是，虽然 AI 提升了效率，但 Block 并没有因此放缓招聘步伐。Dhanji 认为，这就像「修了更宽的高速公路，只会招来更多的车」：AI 让所有人都能构建软件，意味着需要构建的东西、需要协调的流程反而更多了，整体交付速度要求更快 <button class="pd-ts" data-t="50:58" data-who="" data-en="It is massive, although I think that it's a little bit like the analogy of if you build a bigger highway, you'll just get more cars on the road. So I think the fact that everyone's building software means that there's more software to be built, more coordination to happen, and everyone's more eager to ship things faster and with greater results." aria-label="回原文"></button>。

真正改变招聘思维的，恰恰不是 AI，而是从 GM 结构到职能结构的转变。过去在 GM 结构下，业务线各自为政，**工程师被当成一种「商品」**，想多做功能就多招 100 人，深陷「人月神话」陷阱。改为职能结构后，更注重利用公共平台、模块复用和专家深度指导，不再盲目堆人头 <button class="pd-ts" data-t="45:01" data-who="" data-en="I think what's changed for us is much different and it has nothing to do with AI, it's what we talked about earlier is moving from our GM structure to a functional structure." aria-label="回原文"></button>。

在面试时，Block 并不要求候选人必须是熟练的 AI 从业者。他们更看重的是**学习心态**：无论是拥抱 AI 的应届生，还是摸透了工具的资深工程师，只要渴望学习即可；相反，拒用工具的「优秀工程师」不在优选之列。Dhanji 仍坚持，批判性思维和深挖技术本质的能力，比是否会用某款工具重要得多 <button class="pd-ts" data-t="46:35" data-who="" data-en="But I'm much more keen on looking for that college grad who just really is eager to learn about these tools and open to it, or even the veteran who has embraced these tools and figured it out." aria-label="回原文"></button>。

### 真正驱动高管的，是自己亲手用工具

如果只能给其他试图拥抱 AI 的公司一条建议，Dhanji 认为那就是：**高管必须每天亲自下场使用这些工具** <button class="pd-ts" data-t="54:04" data-who="" data-en="Before I zoom out and ask about just general lessons that you've learned over the course of your career, is there anything else that you think might be really valuable or useful to folks that are trying to lean in further into AI or just help their teams think a little bit more forward thinking?" aria-label="回原文"></button>。

在 Block，CEO Jack Dorsey、整个高管团队以及 Dhanji 本人每天都在用 Goose 等工具处理实际工作。亲身体验能让你真正理解工具的优缺点和人机工程学，这比在 LinkedIn 或商业评论上看一百篇「AI 战略思想文章」都有用 <button class="pd-ts" data-t="54:31" data-who="" data-en="So the way in which I think we've been able to drive most of the adoption is Jack uses Goose, I use Goose, our executive team all have used Goose and use it regularly and use other AI programming tools and assistance as well, and we do it every single day." aria-label="回原文"></button>。

Dhanji 分享了自己的亲身经历：他需要整理各种格式（截图、PDF）的孩子治疗收据发给妻子报销。他把一堆原始文件丢给 Goose，Goose 尝试了下载和读取失败后，自主回退并另辟蹊径：**调用 Apple Script 操控了他的电脑**，将所有收据汇总成了一个 Apple Notes 里的 HTML 笔记，无缝同步到手机方便分享 <button class="pd-ts" data-t="56:07" data-who="" data-en="There are screenshots in some cases or PDFs or whatever. So I asked Goose to do this and it was all sitting on my laptop and Goose figured out that it could put all of these receipts into my Apple Notes app into a single note." aria-label="回原文"></button>。这种突破常规预设的自动化解决能力，只有在亲自高频使用中才能被深刻感知。

## 本集带走

- **重构先于工具**：要让公司 AI 化，先审视[[康威定律|康威定律]]。分散的 GM 结构导致技术焦点割裂；整合为统一的职能型组织结构，是统一技术语言、复用平台、深度推进 AI 的必要地基。
- **让非技术团队先上 AI**：目前最惊艳的 AI 生产力爆发并不在工程团队，而在非技术人员（如风险管理团队）自己用 AI 写内部工具，能把等排期的时间从几周压缩到几小时。
- **拥抱 MCP 协议实现跨系统编排**：通过 MCP，大模型不再只是聊天机器人，它能直接操作 SQL、Snowflake 甚至底层系统，将原本需要等待供应商更新的功能「一夜之间」自动化。
- **探索「睡前许愿」式实验法**：不再局限于单次 5 分钟的 AI 对话，尝试让智能体在夜间连续运行数小时，并行构建多个完整实验，早上醒来后丢弃不满意的版本。
- **高管每天必须亲自用 AI**：别读战略文章了。拿着一个真实的个人痛点（如整理多格式收据），直接让 AI 去做。只有亲身体验它的失败回退和非常规解法，才能懂如何改造组织工作流。
- **代码质量不等于产品成功**：不要被工程师「我们需要重构」的诉求绑架。只要能解决用户的真实问题，哪怕是像早期 YouTube 那样把视频塞进 MySQL 的「糟糕架构」，也能成为极其成功的产品。
- **招聘重「学习心态」而非特定技能**：不再把工程师当「商品」盲目扩招，看候选人是否拥抱新工具，但最核心的依然是深挖技术本质的批判性思维。

<div class="pd-sec">全部金句 <span>7 条</span></div>

> <span class="qz">每当我听到这样的统计数据时，我认为人们需要考虑的一个重要因素是这是它未来最差的状态。</span>  
> *Whenever I hear a stat like this, I think an important element that people need to think about is this is the worst it will ever be.*  
> <span class="qm">—— Lenny · [21:20]</span> ^q1

> <span class="qz">所有这些大语言模型在晚上和周末都闲置着，而人类不在那里。</span>  
> *All these LLMs are sitting idle overnight and on weekends, while humans aren't there.*  
> <span class="qm">—— Dhanji Prasanna · [33:38]</span> ^q2

> <span class="qz">如果你早上醒来对你的职业生活中那天要做的事情不感到充满活力，那就改变点什么，如果那是必要的话就辞职，或者找到一种新的方式来做你正在做的事。</span>  
> *If you're not waking up in the morning feeling energized about what you're going to do that day in your professional life, then change something, quit if that's what it comes down to, or find a new way of doing what you're doing.*  
> <span class="qm">—— Dhanji Prasanna · [81:55]</span> ^q3

> <span class="qz">如果你修一条更宽的高速公路，你只会让路上有更多的车。</span>  
> *if you build a bigger highway, you'll just get more cars on the road.*  
> <span class="qm">—— Dhanji Prasanna · [50:53]</span> ^q4

> <span class="qz">我真正推动团队去思考的事情之一是，如果每一次发布，删除整个应用并从头开始重建它，我们的世界会是什么样子？</span>  
> *one of the things I'm really pushing our teams to think about is what would our world look like if every single release, RM minus RF deleted the entire app and rebuilt it from scratch?*  
> <span class="qm">—— Dhanji Prasanna · [35:21]</span> ^q5

> <span class="qz">在我们的 GM 结构中，我们的激励总是把工程人数视为一种商品。</span>  
> *In our GM structure, our incentives were always to think of engineering headcount as a commodity.*  
> <span class="qm">—— Dhanji Prasanna · [45:01]</span> ^q6

> <span class="qz">互联网的诞生是为了所有人利益的开放信息共享的承诺，我认为 AI 应该为我们实现这一点。</span>  
> *The internet was created as a promise for open sharing of information to the benefit of all, and I think that AI should realize that for us.*  
> <span class="qm">—— Dhanji Prasanna · [85:51]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「组织与领导力」挖下去**

- [[2026-08-19-productpodcast-square-global-head-of-product-on-how-to|Square 产品负责人：聊天机器人时代已结束，AI 要替小商家干真活]]<span class="pd-rz">同公司:Block、Square · 同概念:智能体 (agent)</span>
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|代码量暴涨8倍后，工程管理怎么办？]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)</span>
- [[2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi|DevOps 之父谈智能体开发：谁来管、怎么管、别踩什么坑]]<span class="pd-rz">同概念:智能体 (agent)、MCP</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-09-07-lennys-how-ai-is-reshaping-the-product-role|PM的生存法则：AI时代别当瓶颈，去抢活干]]<span class="pd-rz">同概念:LLM、智能体 (agent)、MCP</span>
- [[2026-07-23-practicalai-surviving-the-new-economics-of-a-post-ag|IBM 单日暴跌 25%:企业软件的好日子到头了吗？]]<span class="pd-rz">同概念:MCP、智能体 (agent)、开源模型 (open source models)</span>
- [[2026-08-08-talks-anthropic-s-cca-exam-as-a-field-guide-fo|别迷信大上下文：拆解 Claude 认证架构师考试的反模式]]<span class="pd-rz">同公司:Anthropic · 同概念:LLM、智能体 (agent)</span>

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
  // 故再兜一条 history.length>1(站内点进必有返回历史)。命中「直开」给 body 打 .pd-direct,CSS 切显隐。
  function direct(){
    var ref = document.referrer || '';
    var fromSite = (ref.indexOf(location.origin) === 0) || history.length > 1;
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
