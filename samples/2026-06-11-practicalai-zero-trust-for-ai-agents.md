---
title: Anthropic 零信任框架：智能体安全的六层防御
podcast: Practical AI
date: 2026-08-30
source_url: undefined
duration: "46:56"
type: episode
cover: "#64748b"
image: "/covers/2026-06-11-practicalai-zero-trust-for-ai-agents.jpg"
description: Prediction Guard CEO Daniel 和安全工程师 Chris 拆解 Anthropic 发布的「面向 AI 智能体的零信任」安全框架，梳理智能体面临的六类威胁及分层应对方案。
host: "[[Daniel Whitenack]]"
cohosts: ["[[Chris Benson]]"]
companies: ["[[Anthropic]]"]
concepts: ["[[零信任]]", "[[智能体]]", "[[提示词注入]]", "[[MCP]]", "[[最小主观能动性]]", "[[可观测性]]"]
category: AI 安全
tags:
  - AI 安全
  - 智能体
socialImage: "https://talk.solomind.cc/covers/2026-06-11-practicalai-zero-trust-for-ai-agents.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-06-11-practicalai-zero-trust-for-ai-agents#post","headline":"Anthropic 零信任框架：智能体安全的六层防御","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-06-11-practicalai-zero-trust-for-ai-agents","mainEntityOfPage":"https://talk.solomind.cc/2026-06-11-practicalai-zero-trust-for-ai-agents","description":"Prediction Guard CEO Daniel 和安全工程师 Chris 拆解 Anthropic 发布的「面向 AI 智能体的零信任」安全框架，梳理智能体面临的六类威胁及分层应对方案。","datePublished":"2026-08-30","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-06-11-practicalai-zero-trust-for-ai-agents.jpg","about":[{"@type":"Person","name":"Daniel Whitenack"},{"@type":"Person","name":"Chris Benson"},{"@type":"Organization","name":"Anthropic"},{"@type":"Thing","name":"零信任 (zero trust)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"提示词注入 (prompt injection)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"最小主观能动性 (least agency)"},{"@type":"Thing","name":"可观测性 (observability)"}],"articleSection":"AI 安全"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 安全","item":"https://talk.solomind.cc/tags/AI 安全"},{"@type":"ListItem","position":3,"name":"Anthropic 零信任框架：智能体安全的六层防御","item":"https://talk.solomind.cc/2026-06-11-practicalai-zero-trust-for-ai-agents"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Anthropic 零信任框架：智能体安全的六层防御</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Anthropic 零信任框架：智能体安全的六层防御

<div class="pd-byl">2026-08-30</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-06-11-practicalai-zero-trust-for-ai-agents.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">可能目前 90% 以上拥有 AI 部署的组织、企业并没有按照这个模式运作。他们根据这个框架，会完全暴露。</div><div class="a">— Daniel Whitenack <button class="pd-ts" data-t="12:02" data-who="Daniel Whitenack" data-en="Probably 90% of plus of of organizations, enterprises that have AI deployments currently are not operating according to this model. They are according to this framework, they would be completely exposed." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Daniel Whitenack]] · [[Chris Benson]]
>
> **公司** [[Anthropic]]
>
> **概念** [[零信任]] · [[智能体]] · [[提示词注入]] · [[MCP]] · [[最小主观能动性]] · [[可观测性]]

[[Anthropic|Anthropic]] 发布了一份安全框架文档，主题是「面向 AI [[智能体|智能体]]的[[零信任|零信任]]」。说这话的是 Daniel，他是 Prediction Guard 的 CEO，和联合主持人 Chris——一位有国防和情报背景的 AI 安全研究工程师——一起逐块拆解了这份框架。最值得注意的一点是：Daniel 估计，目前 90% 以上已经部署了 AI 的企业，如果按这个框架去衡量，是完全暴露的 <button class="pd-ts" data-t="11:31" data-who="Daniel" data-en="Though, I think as I think I think there's room for all of us, even those of us who've been doing it, to level up and get better at this. So I don't think that there's anybody who has has just nailed it. So it's Yeah. It's one of those one of those ongoing learning curves." aria-label="回原文"></button>。

背景很简单：企业不管是为了提效还是为了防守，都不可避免地要引入自主智能体（不需要人手动触发、自己调工具、自己执行操作的程序）。但攻击者同样能用这些能力，而且利用速度从过去按月算缩短到了按秒算——光靠人根本跟不上，所以你不得不用智能体来防智能体 <button class="pd-ts" data-t="05:33" data-who="Daniel Whitenack" data-en="By autonomous, I mean, it's making actions on on your behalf to do some things. And I think generally in terms of where we're seeing the market going on the positive side, organizations are going to need to more and more adopt these autonomous agents within their organization for value creation or new revenue or op, you know, saving on operational efficiency. So that's like thing, you know, premise one is that that's the way the market's going. I think the the other kind of background to this though is like you were saying, there's a bit of a forcing function here because AI or, how should I so attackers, so malicious parties, hackers, etcetera, have equal op you know, they have equal access to these agentic coding and development capabilities themselves. Right?" aria-label="回原文"></button>。问题变成了：你自己放的智能体也可能干坏事，怎么管？

## 零信任不是新概念，但智能体让老方法不够用了

传统网络安全是「周边式」的：信任网络内部的一切，防外部。零信任反过来——假设威胁已经在网络内部，每个用户、设备、请求都视为潜在威胁，不做认证授权就不信 <button class="pd-ts" data-t="09:43" data-who="Daniel Whitenack" data-en="Like, how do I how do I manage those things? And Anthropic has so they they have not come up with this idea of zero trust. To be clear, this is a general concept we we can talk about the definition of, but they're essentially releasing with this framework a way to think about a zero trust approach or a zero trust framework for managing AI agents or autonomous agents within your organization. So maybe maybe it'd be good to just define that define that term first in the in the past, if we, if if we think about cybersecurity, there's been what's generally referred to as perimeter based cybersecurity. This is a more traditional model that would focus on that boundary of your organization and outside or internal and external and the the kind of core principle being that I'm gonna trust everything that's inside and distrust everything that's on the outside." aria-label="回原文"></button>。

这个概念本身不新，NIST 在 2020 年就出了《零信任架构》文档。Chris 说在国防和情报领域这已经是核心思路：每个 API 请求都必须带安全凭证，细粒度到具体操作 <button class="pd-ts" data-t="10:41" data-who="Chris Benson" data-en="NIST has published about it, in Zero Trust Architecture back in 2020 and other government organizations and others have have talked about it as well. So that's that kind of that kind of difference. I don't know if if those if if that zero trust idea has crossed into your your perimeter of knowledge, Chris, I'm sure." aria-label="回原文"></button>。

但智能体把事情变复杂了。它们用分布式工具集、跨会话保持上下文、多智能体之间还能互相通信——这种动态性是传统零信任模型没预见到过的。Anthropic 引了两个术语：**爆炸半径**（智能体出问题时能造成多大破坏）和**[[最小主观能动性|最小主观能动性]]**（OWASP 提出的概念，从「最小权限」延伸过来——只给智能体完成其任务所需的最少操作能力，不多给） <button class="pd-ts" data-t="14:57" data-who="Daniel Whitenack" data-en="They interpret instructions, try to accomplish goals, they execute operations without human initiation, I think importantly. They might preserve context across sessions if they're trying to accomplish some goal, and then you kind of add multiple agents and they might communicate with one another. So you've got this multi agent communication. Now there's a couple terms here, Chris, that I think we've even mentioned, but they just define specifically, related to agent security as new terms that people might might be, unfamiliar with. One is blast radius, which, kind of, I think people could assume what that means, right?" aria-label="回原文"></button>。

## 六类威胁：从提示词注入到记忆投毒

框架列了六类当前对智能体系统的威胁：

**[[提示词注入|提示词注入]]和指令操纵**。直接的比如在聊天框里输「忽略你的指令做这个」，这算基础的。

更难防的是间接注入——比如智能体连着你的邮箱，附件里藏了隐藏指令。Daniel 举了个例子：他帮一家公司设计技术面试题，故意在 PDF 里用白字写了和黑字指令相反的内容，结果用 Claude Code 做题的人如果没发现，智能体就会执行那些隐藏指令 <button class="pd-ts" data-t="17:34" data-who="Daniel Whitenack" data-en="There's everything from the obvious direct, you know, human input into a chat interface, ignore your instructions and do this other thing, which you shouldn't be doing. But the one that they mentioned as the more, difficult or scary one would be the indirect prompt injection where that's coming in through maybe it's a file that's, you know, you have an agent connected to your email and, attachment comes through with hidden instructions in it. Anecdotally, I I helped another company do some interviews and I I wrote a technical exercise and put it in a PDF. And I knew everyone would use Cloud Code like they should, but just just because I wanted to be fun, I I had all the instructions in black text and then I had an extra, like, three fourths of a page. So I just filled up that page with, with instructions that would make Claude code do the opposite of what I was saying in the instructions, just to just to see if they would catch it." aria-label="回原文"></button>。

**工具和资源滥用**。智能体通过 [[MCP|MCP]]（一种让智能体调用外部工具的协议）连接各种服务。

问题在于，你可能只告诉智能体某几个 API 端点，但没有在网络层关掉其他端点——智能体自己去看 Swagger 文档就能发现你没告诉它的路由，然后越权调用 <button class="pd-ts" data-t="18:29" data-who="Daniel Whitenack" data-en="On MCP. Yep. On MCP. Yeah. So they talk about agents that can manipulate tools maliciously or kind of do things that they shouldn't be doing because of privileges. I I think about Chris, like it it's kinda like you set up a server, maybe I set up a fast API API that, you know, my agent could use and I only tell it about instructions, you know, about a couple get get routes on the API in the instructions, but I don't shut down the other routes. Right?" aria-label="回原文"></button>。Chris 补充说，恶意 MCP 服务器的概念已经被记录在案，针对这类漏洞的恶意软件正在成批出现 <button class="pd-ts" data-t="19:22" data-who="Chris Benson" data-en="So, yeah. And just to clarify, Swagger's a protocol that defines what those routes are. And and, you know, you mentioned, you know, kind of going off the rails, but, you know, the the notion of malicious MCP server has now been documented, and there could be lots of various types of tooling that is coming into being now just to take advantage of these vulnerabilities. So, I think you'll we'll see a whole class of malicious software arising to to do these kinds of of tool and resource misuse." aria-label="回原文"></button>。

**身份和特权滥用**。智能体经常用服务账户运行，权限偏高；而且智能体可以在运行时动态派生出新的智能体，新智能体可能继承或获得超出它所需的权限 <button class="pd-ts" data-t="20:49" data-who="Daniel Whitenack" data-en="So this this tool and resource misuse is definitely, is a reason why it's kinda number number two there. The the next one, identity and privilege abuse. So yes. Yes. Exactly." aria-label="回原文"></button>。Chris 指出，一个智能体很容易生成另一个权限过高的子智能体，然后被利用 <button class="pd-ts" data-t="21:47" data-who="Chris Benson" data-en="And The so cuckoo's egg. That's that's what it was. Yeah. And as you as you are looking at lots of different agents that have different levels of privilege and different capabilities, and as agents are formulating things, you know, right in a in in during run time, essentially, that that didn't exist as a preset static thing that you wanna do, and they're developing that. It's very easy for one agent to spin off another agent, and and it has more privilege than it needs, and then that can be taken advantage of. So there are lots of different variations of of how those kinds" aria-label="回原文"></button>。

**供应链和依赖风险**。智能体在运行时可能动态加载外部工具、安装包、改基础设施——供应链在实时变化。

而且模型本身有供应链（权重、训练方式、是否容易被越狱），MCP 服务器也是软件组件，有自己的依赖和漏洞 <button class="pd-ts" data-t="24:58" data-who="Daniel Whitenack" data-en="Mhmm. So, you you were just mentioning how sometimes agents compose things at runtime, Chris. This includes potentially loading external tools or installing packages or changing infrastructure. And so the that that supply chain can actually update in in real time or at runtime as agents are trying to accomplish a task, but also model and tool, supply chain. So models have their own supply chains related to the weights and how they were trained or fine tuned, how how easy it is to jailbreak them or prompt inject them. But then MCP servers are also software components." aria-label="回原文"></button>。Chris 强调，传统的所有漏洞——从 BIOS、CMOS 一直到网络和防火墙——在这之上全部仍然适用 <button class="pd-ts" data-t="25:53" data-who="Chris Benson" data-en="Right? They have their own integrations. They their own software dependencies, etcetera, which have their own potential vulnerabilities. So all of this, it it's very much a multilayered thing that It is. Could evolve dynamically, which is kind of scary." aria-label="回原文"></button>。

**记忆和上下文投毒**。如果你对写入智能体记忆或向量数据库（存检索增强生成数据的一种数据库）的内容没有控制权，智能体或外部方就能往里面塞东西。Daniel 举过一个医疗场景：先让智能体处理患者 A，再逐步让它把「患者 A 等于患者 B」这个信息过滤进去，之后查患者信息时就会拿到不该拿的数据 <button class="pd-ts" data-t="27:57" data-who="Daniel Whitenack" data-en="the way down to, you know, networking and firewall, right? If you're, you have an agent operating in that environment, it could, you know, find and detect things that that it shouldn't, and so, that's, it's so, yeah, I guess multi layered, which, you know, many security things are, and I know OWASP always recommends this kind of layered approach. But, yeah, the the last two are are kind of related memory and context poisoning and rag poisoning, both obviously are this type of, of way that you can either in the memory or context to an LLM call or into rag data, retrieval augmented generation data, which often lives in a database, a vector database. You, if, if you have no control over what and how things are committed to that memory or to that vector database, there's nothing preventing agents or external parties from inserting things into that memory. So, you know, the I think the one, the example I used last year at the Midwest AI Summit, Chris, which as a reminder to our folks, Midwest AI Summit coming up October 15, gonna be another great great, experience." aria-label="回原文"></button>。

**RAG 投毒**。和上面类似，但针对的是检索增强生成用的数据源，本质也是往智能体的信息源里掺东西。

## 分层防御：六个维度，三个等级

框架把防御措施按六个维度展开，每个维度分三个等级——基础（最小可行）、企业（真正健壮）、高级（高风险/强监管环境）。这里挑几个关键的说：

**智能体身份和认证**——这是所有其他能力的基础，没有身份就没法执行后面的任何策略 <button class="pd-ts" data-t="30:21" data-who="Daniel Whitenack" data-en="Kinda dimension it kinda breaks them down by diff by dimensions and then tiers them against those three tiers that you just described. Yeah. It's kinda like, I need to I need to consider these however many things, I forget how many there were. I I need to at least be in the foundation level for all of these and then I can circle back and maybe upgrade particular ones to enterprise or like gradually work on it over time. So the the first of those is agent identity and authentication, which they kind of frame as the foundation for every other security capability because without this identity, you can't really enforce other other things throughout the throughout the framework. Now, as we go through here, they talk about, certain ways of doing identity and verification, and there are a couple terms in here that people may be unfamiliar with as well." aria-label="回原文"></button>。基础做法是给每个智能体实例分配唯一的加密标识符（不是贴个标签，而是有加密材料支撑），从创建到退役全程追踪，ID 出现在所有日志和访问请求里。

企业级是带完整生命周期管理的证书认证。高级是硬件支持的身份——把凭证存在硬件安全模块里，配合远程认证 <button class="pd-ts" data-t="32:56" data-who="Daniel Whitenack" data-en="Yeah, and this idea of it being bound to hardware, I think is key point that that you're referencing, where, otherwise they view kind of, hey, if you have API keys for example, and those are just floating around, you should probably consider those already compromised if we're going with this idea of zero trust versus if an agent has an identity and has an authentication to access this environment. It has authentication tied specifically to the hardware that it's operating on, you know, something like that. That hardware bound credential is is something that they talk about. And just to give some examples here in the agents agent identity and authentication piece, the foundational and we won't be able to go through all the tiers of all the categories. We just don't have time." aria-label="回原文"></button>。Chris 解释了硬件绑定凭证的意思：你必须物理上拥有一件硬件（比如 USB 密钥）才能通过认证，攻击者拿不到这个物理东西就过不了这一层 <button class="pd-ts" data-t="31:21" data-who="Chris Benson" data-en="One of those being they talk about hardware bound credentials. Mhmm. Have you, I'm I'm sure this is also a part of of your life over time, Chris? Yes. Hardware bound credentials are where you have to present a fit, you know, you may be a USB or something, you know, there's a lot of different ways it can it can but you have to insert a piece of hardware or make act make accessible a piece of hardware which provides that authentication which an adversary would be unlikely to have in their possession, and that doesn't necessarily do it by itself. There's usually multiple tiers, but that's, that is one way of contributing significantly is if you don't have a physical piece of hardware in your hand, you're not gonna be able to gain access, even if you can break through other tiers, so." aria-label="回原文"></button>。

**访问控制和特权管理**——有了身份之后，授权层要强制执行「最小主观能动性」。但 Daniel 指出一个微妙之处：你可能在指令里只告诉智能体某几个端点，但如果没有在网络层物理关掉其他端点，智能体自己能发现并用上那些你没授权的路由 <button class="pd-ts" data-t="34:15" data-who="Daniel Whitenack" data-en="With remote attestation, which there's a whole rabbit hole you could go down there with those with those terms, but that would fit into their into their advanced category. That's right. Yeah. So that that's an example of one of these categories, agent identity and authentication. The next, category that they that they talk about is access control and privilege management." aria-label="回原文"></button>。基础做法是基于角色的访问控制（RBAC）加默认拒绝。

**[[可观测性|可观测性]]与行为监控**——这两个是配对的。可观测性解决「智能体干了什么」：你需要一条完整的链路追踪——哪个用户用哪个 API 密钥触发了哪个智能体、它发了什么提示、调了什么工具、输入是什么、被哪条策略拦了 <button class="pd-ts" data-t="36:15" data-who="Daniel Whitenack" data-en="Yeah. Yeah. For sure. I think we can't abandon our good security intuition and especially when you start treat treating these agents as having an identity and being, operating in this zero trust environment, some of these things kind of flow through if you if you work out those details, but, yeah. The the next category, behavioral monitoring and response, or, sorry, observability and auditing." aria-label="回原文"></button>。行为监控则判断这些动作「该不该发生」：看到某种行为模式就触发响应——可能是阻断、可能是记录、可能是告警 <button class="pd-ts" data-t="37:17" data-who="Daniel Whitenack" data-en="Often in our implementations with customers in my day to day work, I often like to say, hey, we need to know that this human user using this API key triggered this agent, which has this identity to do this goal, which issued these prompts, which triggered this tool call, which had this input, which was blocked by this governance policy, etcetera. Like that's where we're, you know, and down the line. We need that kind of traceability and and logging. Otherwise, you you can't have visibility or build rules or monitor things. So that's the observability piece, but observability captures only what agents do." aria-label="回原文"></button>。

**输入验证和输出控制**——这是最常被想到的，但 Daniel 认为它被过度强调了。他打了个比方：量体温不等于你就有健康的生活方式、有家庭医生、有饮食计划——点检查只是门槛，不是全部 <button class="pd-ts" data-t="38:07" data-who="Daniel Whitenack" data-en="So sometimes that's blocking certain things. Sometimes it's just logging. Sometimes it's, you know, alerting someone using a a particular platform. Okay. The the, second to the last one is input validation and output controls." aria-label="回原文"></button>。

**完整性和恢复**——前面的预防和检测都假设智能体正常运行，那不正常了呢？Chris 指出这其实是个大难题：如果智能体脱轨了，而且它正在执行关键业务，你不能只是把它关掉，关键业务还得继续跑——怎么把系统回滚到安全状态，在智能体场景下比以前难得多 <button class="pd-ts" data-t="39:31" data-who="Chris Benson" data-en="And if we extend that here, this would be these sort of point checks of validating inputs and outputs, which are, yeah, again, I would say those are table stakes. And the last one is integrity and recovery. So, all of this prevention and detection assumes agents operate correctly, you know, when they don't, what what do you do?" aria-label="回原文"></button>。框架建议基础级至少要有文档化的回滚流程，高级级要做到带自动修复的自愈系统 <button class="pd-ts" data-t="41:25" data-who="Daniel Whitenack" data-en="Yeah. Yeah, they talk about, to give some examples, Chris, for configuration integrity, they talk about on the foundational level, version controlled agent configurations, and the advanced level, immutable infrastructure with attestation. On the recovery capabilities, they talk about at the foundation level, documented rollback procedures, which to your point, having some, having an idea of what you might do is one thing, being able to actually do it is sometimes a challenging thing. At the advanced level, they talk about self healing systems with automatic remediation. So, yeah, definitely agree agree with your points there." aria-label="回原文"></button>。

## 落地路径和思维转变

框架给了一个分阶段实施顺序：识别需求 → 管理供应链风险 → 定义智能体边界 → 防御提示词注入 → 保护工具访问 → 保护智能体凭证 → 保护智能体记忆 <button class="pd-ts" data-t="41:25" data-who="Daniel Whitenack" data-en="Yeah. Yeah, they talk about, to give some examples, Chris, for configuration integrity, they talk about on the foundational level, version controlled agent configurations, and the advanced level, immutable infrastructure with attestation. On the recovery capabilities, they talk about at the foundation level, documented rollback procedures, which to your point, having some, having an idea of what you might do is one thing, being able to actually do it is sometimes a challenging thing. At the advanced level, they talk about self healing systems with automatic remediation. So, yeah, definitely agree agree with your points there." aria-label="回原文"></button>。

Chris 总结了一个核心思维转变：传统零信任是相对静态的，像监管合规一样逐项打勾；但智能体系统具有涌现性，能力是动态产生的——你需要把同样的零信任理念从静态思维升级为「预测动态能力」的思维 <button class="pd-ts" data-t="42:14" data-who="Chris Benson" data-en="I know that we're getting to the close to the end here, Chris, and just to kinda wrap things or or get close to the end here, Anthropic does a good job at kind of saying, hey, here's all of this stuff and all of these tiers and levels and categories, etcetera, but then they do provide a kind of phased, a phased way that you can think about implementing agents, which I think is helpful. One, identifying requirements, two, managing supply chain risks, including they talk about AI bomb or AI build materials, defining agent boundaries, defending against prompt injection, securing tool access, protecting agent credentials, and then safeguarding agent memory. And they give some kind of specifications under each of those phases for for people to to think about." aria-label="回原文"></button>。

Daniel 提到 Anthropic 文档里的一个哲学级转变——**AI 供应商化**：与其依赖可能脆弱的第三方开源项目，不如让智能体编码系统直接生成一个你专有的版本纳入你的项目，从根源上消除第三方依赖风险 <button class="pd-ts" data-t="43:37" data-who="Daniel Whitenack" data-en="It's a it makes it for a very interesting problem set to address. Yeah. Yeah. And there's major thought process changes or philosophical shifts, as you're mentioning, that as practitioners, we may have to make. They talk in the in the ebook, Anthropic does about this idea of AI vendoring that, Hey, there's these fragile open source projects out here that you might rely on. The thing to do might just be to have your agentic coding system just completely vendor or literally not not copy, but generate a new version of that project that's proprietary to you and under your control and just include it in your project rather than than bringing in a third party dependency." aria-label="回原文"></button>。

但他也承认一个没解的难题：当利用时间线从月缩短到秒，你不能指望半夜叫醒安全主管来批准关停某个智能体——人类做遏制决策的速度可能根本跟不上 <button class="pd-ts" data-t="44:17" data-who="Daniel Whitenack" data-en="Yeah. Yeah. And there's major thought process changes or philosophical shifts, as you're mentioning, that as practitioners, we may have to make. They talk in the in the ebook, Anthropic does about this idea of AI vendoring that, Hey, there's these fragile open source projects out here that you might rely on. The thing to do might just be to have your agentic coding system just completely vendor or literally not not copy, but generate a new version of that project that's proprietary to you and under your control and just include it in your project rather than than bringing in a third party dependency." aria-label="回原文"></button>。Chris 的判断更直接：这是网络安全领域的一场革命，全球情报机构和犯罪组织都在学怎么利用这些漏洞，我们还在起点 <button class="pd-ts" data-t="45:06" data-who="Chris Benson" data-en="So there's like philosophical shifts, like that. I do think there's some hard things that we'll still have to wrestle with around. I I think there's still some of this conclusion that humans are gonna have to make containment decisions around how to contain these things and whether it be threats in your environment or agents operating in your environment. And if things are moving so fast, I just think it's gonna be hard for humans to, you know, if if something is happening in your infrastructure and exploit timelines go from, you know, months to to hours to minutes to seconds. You can't just, like, rely on waking up the CISO in the middle of the night to approve, you know, shutting this thing down." aria-label="回原文"></button>。

> 【背景】NIST 指美国国家标准与技术研究院；OWASP 是一个专注于软件安全的开源社区项目，其 Gen AI 项目专门关注生成式 AI 安全问题；MCP 全称 Model Context Protocol，是 Anthropic 推出的让 AI 模型连接外部工具和数据源的开放协议；RAG 即检索增强生成，是一种让大模型在生成回答前先从外部数据库检索相关文档的技术；CISO 是首席信息安全官的缩写。

## 本集带走

- **给每个智能体实例分配加密身份**：不是贴标签，是用加密材料支撑的唯一标识符，出现在所有日志和访问请求中，这是所有其他安全措施的地基。
- **最小主观能动性必须落到网络层**：只在提示词里告诉智能体「你能用这几个端点」不够——如果网络层没关掉其他端点，智能体自己能发现并越权调用。
- **可观测性要能串完整链路**：用户 → API 密钥 → 智能体身份 → 目标 → 提示内容 → 工具调用 → 输入 → 治理策略结果，缺一环就谈不上监控。
- **输入输出检查只是门槛，不是全部**：就像量体温不等于有健康管理方案，点检查不能替代身份认证、访问控制、行为监控这些系统性措施。
- **回滚方案必须提前文档化**：智能体脱轨时关键业务不能停，到时候再想怎么恢复就晚了——基础级至少要有写好的回滚流程。
- **警惕间接提示词注入**：邮件附件、PDF 白字、文档隐藏文本都是载体，任何智能体能读到的外部内容都可能夹带指令。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">可能目前 90% 以上拥有 AI 部署的组织、企业并没有按照这个模式运作。他们根据这个框架，会完全暴露。</span>  
> *Probably 90% of plus of of organizations, enterprises that have AI deployments currently are not operating according to this model. They are according to this framework, they would be completely exposed.*  
> <span class="qm">—— Daniel Whitenack · [12:02]</span> ^q1

> <span class="qz">一个智能体很容易派生出另一个智能体，并且它拥有比它所需的更多的特权，然后那个可以被利用。</span>  
> *It's very easy for one agent to spin off another agent, and and it has more privilege than it needs, and then that can be taken advantage of.*  
> <span class="qm">—— Chris Benson · [22:06]</span> ^q2

> <span class="qz">你只能告诉智能体这些端点，但如果你没有物理上关掉其他端点的网络或什么的，就没有什么阻止那个智能体在这种情况下脱轨。</span>  
> *You could only tell an agent about these endpoints, but if you haven't physic like, if you haven't literally shut off the network for other endpoints or something, then there's nothing preventing that agent from, like, going off of the off of the rails in that case.*  
> <span class="qm">—— Daniel Whitenack · [34:40]</span> ^q3

> <span class="qz">如果事情发展得如此之快，我只是认为人类很难，如果你的基础设施中正在发生某事，并且利用时间表从几个月到几小时到几分钟到几秒。你不能只是依靠在半夜叫醒 CISO 来批准关闭这个东西。</span>  
> *If things are moving so fast, I just think it's gonna be hard for humans to, you know, if if something is happening in your infrastructure and exploit timelines go from, you know, months to to hours to minutes to seconds. You can't just, like, rely on waking up the CISO in the middle of the night to approve, you know, shutting this thing down.*  
> <span class="qm">—— Daniel Whitenack · [44:41]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 安全」挖下去**

- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同公司:Anthropic · 同概念:提示词注入 (prompt injection)、智能体 (agent)</span>
- [[2026-06-25-practicalai-aiuc-1-building-trust-in-ai-agents|AI 智能体怎么认证：从标准到红队测试的全流程]]<span class="pd-rz">同概念:提示词注入 (prompt injection)、智能体 (agent)、可观测性 (observability)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-23-practicalai-surviving-the-new-economics-of-a-post-ag|IBM 单日暴跌 25%:企业软件的好日子到头了吗？]]<span class="pd-rz">同嘉宾:Chris Benson · 同公司:Anthropic · 同概念:MCP、智能体 (agent)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Anthropic · 同概念:提示词注入 (prompt injection)、智能体 (agent)</span>
- [[2026-08-11-talks-evolution-of-agentic-surfaces-gagan-bhat|Anthropic 构建生产级智能体的教训:harness 须为模型能力演进而生]]<span class="pd-rz">同公司:Anthropic · 同概念:可观测性 (observability)、智能体 (agent)</span>

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
