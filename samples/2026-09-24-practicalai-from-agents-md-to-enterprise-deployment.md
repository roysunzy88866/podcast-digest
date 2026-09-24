---
title: "把智能体当普通应用来部署:企业级 AI 落地的老办法新用途"
podcast: Practical AI
date: 2026-09-24
source_url: undefined
duration: "48:46"
type: episode
cover: "#64748b"
image: "/covers/2026-09-24-practicalai-from-agents-md-to-enterprise-deployment.jpg"
description: Broadcom Tanzu 技术营销 Nick 谈如何用平台工程的老经验，把 AI 智能体安全、可扩展地部署进受监管的企业环境。
host: "[[Daniel Whitenack]]"
cohosts: ["[[Chris Benson]]", "[[Nick]]"]
companies: ["[[Tanzu]]", "[[Cloud Foundry]]"]
concepts: ["[[智能体]]", "[[平台即服务]]", "[[buildpack]]", "[[agents.md]]", "[[MCP]]", "[[MCP 网关]]", "[[沙箱]]", "[[记忆]]", "[[LLM]]", "[[物理隔离]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/covers/2026-09-24-practicalai-from-agents-md-to-enterprise-deployment.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-24-practicalai-from-agents-md-to-enterprise-deployment#post","headline":"把智能体当普通应用来部署:企业级 AI 落地的老办法新用途","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-24-practicalai-from-agents-md-to-enterprise-deployment","mainEntityOfPage":"https://talk.solomind.cc/2026-09-24-practicalai-from-agents-md-to-enterprise-deployment","description":"Broadcom Tanzu 技术营销 Nick 谈如何用平台工程的老经验，把 AI 智能体安全、可扩展地部署进受监管的企业环境。","datePublished":"2026-09-24","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-24-practicalai-from-agents-md-to-enterprise-deployment.jpg","about":[{"@type":"Person","name":"Daniel Whitenack"},{"@type":"Person","name":"Chris Benson"},{"@type":"Person","name":"Nick"},{"@type":"Organization","name":"Tanzu"},{"@type":"Organization","name":"Cloud Foundry"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"平台即服务 (platform as a service)"},{"@type":"Thing","name":"buildpack"},{"@type":"Thing","name":"agents.md"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"MCP 网关 (MCP gateway)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"LLM"},{"@type":"Thing","name":"物理隔离 (air gap)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"把智能体当普通应用来部署:企业级 AI 落地的老办法新用途","item":"https://talk.solomind.cc/2026-09-24-practicalai-from-agents-md-to-enterprise-deployment"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把智能体当普通应用来部署:企业级 AI 落地的老办法新用途</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 把智能体当普通应用来部署:企业级 AI 落地的老办法新用途

<div class="pd-byl"><b>Nick</b> · Broadcom Tanzu 技术营销 · 2026-09-24</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-24-practicalai-from-agents-md-to-enterprise-deployment.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">那个系统一宕机，五分钟之内，仓库的卡车就会在州际公路上积压。</div><div class="a">— Nick <button class="pd-ts" data-t="13:28" data-who="Nick" data-en="And if that thing went down, like, within five minutes, like, the warehouse was backing up trucks, like, on the interstate." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Daniel Whitenack]] · [[Chris Benson]] · [[Nick]]
>
> **公司** [[Tanzu]] · [[Cloud Foundry]]
>
> **概念** [[智能体]] · [[平台即服务]] · [[buildpack]] · [[agents.md]] · [[MCP]] · [[MCP 网关]] · [[沙箱]] · [[记忆]] · [[LLM]] · [[物理隔离]]

把 AI [[智能体|智能体]]部署进一家没有互联网、到处是合规审查的大企业，最大的障碍可能不是技术，而是一个很朴素的思路转变：**智能体其实就是又一个应用，用二十年的平台工程经验去管它就行了**。说这话的是 [[Nick|Nick]],Broadcom [[Tanzu|Tanzu]](VMware 旗下)的技术营销负责人，也是播客 [[Cloud Foundry|Cloud Foundry]] Weekly 的主持人，他将出席中西部 AI 峰会。

## 企业环境到底特殊在哪

Nick 概括企业环境的几个特征：网络受限甚至完全没有互联网——他合作的一些客户是真正的[[物理隔离|物理隔离]](air gap),东西要靠人搬进数据中心；高度监管，要应对 PCI、SOX、HIPAA、FIPS 等一长串合规要求；出错后果严重。他举例：大学毕业实习时做的第一个项目是一家美国杂货零售商的仓库库存系统，一堆 Unix 上的 C 和 shell 脚本，「那东西一宕机，五分钟之内，仓库的卡车就会在州际公路上积压」。企业的规模和容错要求和消费级完全不是一个量级 <button class="pd-ts" data-t="03:51" data-who="Nick" data-en="Right. So, yeah, if we think about the enterprise, we think about, you know, a few things. One, let's just assume you're gonna have not Internet limited or no Internet access. And, you know, I've been at VM Martens here for about five years. And before that, I was at one of these large enterprises for about fourteen years." aria-label="回原文"></button><button class="pd-ts" data-t="13:11" data-who="Nick" data-en="That that's something that I didn't expect, really, because some of these some of these responses are kinda long, but it's like you what we've seen with our customers at scale. Like, we wanna get the LLMs and the agents closer to us and our actual apps using them and the people using them as well. And not to mention, if you're using some of these SaaS providers, they're maybe not the most reliable in terms of what traditional enterprises expect and demand. So you can't just have them, you know, going offline for hours. Because, you know, even even at my past job, the fur the very first thing I did there was work on a warehouse inventory system." aria-label="回原文"></button>。

## 智能体 = 又一个应用

解决企业环境部署痛点的老办法是平台工程。Nick 所在的 Tanzu 平台基于开源项目 Cloud Foundry(比 Kubernetes 和 Docker 还早，2011 年左右从 VMware 起步)，核心理念是：开发者只管推代码，平台负责一切——构建最佳实践的容器、证书、负载均衡、健康监控、应用之间的[[沙箱|沙箱]]隔离、按需绑定数据库等服务。

几条命令(push、bind、scale)就能上生产。企业最看重的是：**统一、可重复的模式**，这样才能审计和安全加固，让开发者写业务逻辑而不是摆弄基础设施，而不是一百个团队一百种「雪花」配置 <button class="pd-ts" data-t="06:15" data-who="Nick" data-en="Yeah. So, I mean, I think so, you know, I currently work for VMware Tanzu, and we run a a, you know, a platform or a platform as a service, you know, geared for private cloud, whether that be on your, like, on your own bare metal in your data center, or you could deploy it on a private cloud in your own VPC on a hyperscaler, that type of thing. But we think about that. Wanna in the scope of an enterprise, right, you have all these regulations, controls, etcetera. You wanna make that path to production kind of the least resistant and easiest path." aria-label="回原文"></button><button class="pd-ts" data-t="08:16" data-who="Nick" data-en="And what we see with Enterprise is once that path like, once they take this, like, this is Tanzu platform, it's been certified through all these different standards. It's just kind of like an unlock for these enterprises because it's so easy and so simple to use, and they don't have to, you know, they don't have to recertify everything. It's it's just like this framework that they can use to get apps into production. And then the biggest thing is that you want these the enterprises or the businesses, the they don't want their developers, you know, handcrafting a a new platform or a new way to deploy apps for every sub team and have, like, a 100 different snowflakes. Right?" aria-label="回原文"></button>。

Nick 的判断是：智能体应该走同一条路。现在的智能体跑在开发者笔记本上，「我一合上盖子，一切都停了」，而企业要的是智能体 24/7 按需可用，嵌在 CI/CD 流水线或电商系统里，而且要和应用、数据尽量同地部署——[[LLM|LLM]] 离要调用它的微服务有 30 跳远，物理规律叠加出来的延迟在大规模下就是问题。这是很多团队没想到的 <button class="pd-ts" data-t="09:50" data-who="Nick" data-en="Yeah. Mean, I think it's a pretty fair assessment, and we're starting to see that more and more just within our customer base. You know, even like, if you think about, like, apps back in the day, like, someone would write some app on their laptop and, like, run it on their laptop. But it's like, we can't just run it. You know, like, you gotta get it off your laptop somewhere." aria-label="回原文"></button><button class="pd-ts" data-t="12:14" data-who="Nick" data-en="They're gonna go off into the ether. So that's probably the, I think, the biggest challenge when we start talking about how do we take the app deployment methodology, right, and then push that into an agent running on a of a cloud platform per se. It's probably the biggest challenge. And then just kinda getting the fact that there's some valid use cases for your laptop or whatever. But then also, as we're starting to see more and more, like enterprise was Enterprises want agents to be on demand and usable kind of in a, like, say in a CICD pipeline or like on you know, within part of their, you know, ecommerce suite or just normal applications." aria-label="回原文"></button>。

## 具体怎么做：Agent Buildpack 与一整套服务

传统做法是推一个编译好的 JAR 文件，平台识别出是 Java 应用就用 Java [[buildpack|buildpack]]——一套构建最佳实践容器的命令集。Nick 团队把这个概念搬到了智能体上：**推一个 [[agents.md|agents.md]]**(一种人类可读的语言，告诉智能体该做什么、怎么表现，比如「你是资深工程师，监视这个 Jira 队列，审查进来的工单」)，平台一分钟内把它作为容器跑起来，可以随意扩容 <button class="pd-ts" data-t="18:33" data-who="Nick" data-en="Sure. So when I would do demos before AI and before, you know, a year or two ago or whatever, we would I would always take, like, a Java app, and it was like a simple, like, kind of, like, you know, music album called a spring music or whatever. But we take that Java code to be like a JAR file, like compiled Java code, and we're like, alright. Now we're gonna take this. We have a little simple manifest file that tells us what the what the name of the app is, how many how much resources to give it." aria-label="回原文"></button><button class="pd-ts" data-t="19:13" data-who="Nick" data-en="And that would be great. And then we would, you know, we would attach a database and then, you know, all these things and show how that that scales. Now we've taken that same concept and then said, hey. We're gonna have this agent. We're gonna just see if push an agent." aria-label="回原文"></button>。

智能体和应用最大的差异在状态：传统智能体工具(harness)把记忆写成一堆 MD 文件放在文件系统里，但云上的实例是临时的，一关机记忆就「消散到虚空里」。所以 Nick 团队加了共享内存服务，按团队隔离——A 团队的智能体启动时立刻拿到 A 团队的历史：应用架构、做过什么、路线图——于是每次安全审查都能基于上下文做判断 <button class="pd-ts" data-t="11:00" data-who="Nick" data-en="On on the deployment pathway that you might not have had to consider before or at least are considering in a new way? Well, I mean, I I think some of the biggest differences, right, where, like, you talk about Cloud Foundry and Teensy platform, it was kinda based on this premise of a 12 factor application where storage and state are a little decoupled cleanly from the actual apps. You could I can scale up to a thousand instances and be fine, and you handle session state and things. The traditional harnesses or agents were kinda built originally just to be like, oh, I've got file system access, and I can just write a bunch of MD files, and that's like my memory. Everything's great. And they're like, well, you start to get into a cloud cloud world that things spin up and down and are ephemeral, you're gonna wanna save those MD files somewhere." aria-label="回原文"></button><button class="pd-ts" data-t="29:13" data-who="Nick" data-en="So it's like, alright, matey. Your, you know, ticket 500 is is terrible. Right? Like, go back and, you know, update it, that type of thing. So that's kinda where the the static part of it is." aria-label="回原文"></button>。

工具侧走 [[MCP|MCP]](模型上下文协议，一种让应用与 LLM 对话的标准方式)：智能体的工具来自托管在平台上的 MCP 服务器——在 Broadcom,这是开发者唯一被批准的使用方式。再用 **[[MCP 网关|MCP 网关]]**统一管理和收敛：把几十个 MCP 服务器注册到网关，控制谁能绑定到哪些服务器和工具；支持终端用户凭据一路传递(而不是全公司共用一个通用服务账号)；因为一切流量过网关，天然产生指标——比如发现「某个智能体对删除仓库这个工具调了 20 万次，也许该报警了」。

现场演示的「boss 关卡」：把智能体通过 webhook 连到 GitHub 仓库，提交一个 issue,智能体即时从平台启动、拉代码、做安全审查、把结果推回 issue。每次 Git 提交都可以让安全审查、代码质量、设计审查等智能体在各自的沙箱里即时拉起，彼此不互通、不能上网、不能提权、不接触宿主系统 <button class="pd-ts" data-t="20:22" data-who="Nick" data-en="Then that kinda gave us a simple, like, here's your out of box agent with chat experience. And then, you know, along the way, like, we've done a lot of things with MCP, so, you know, the model context protocol. You guys covered that on the show before, but it's, know, basically a way for an app to talk to an LLM. Like, very, very high level. Right?" aria-label="回原文"></button><button class="pd-ts" data-t="22:03" data-who="Nick" data-en="Now do a sick like, you know, issue five on my repo. Do a security review on this repository. And then like, it sends it off to the agent via webhook and, oh, the Tainzu agent. And, like, it just fires up, gets it. It, you know, fires up from the platform." aria-label="回原文"></button><button class="pd-ts" data-t="25:45" data-who="Nick" data-en="And then, like, on the MCP server helps handle the auth as well. Because some of them are like, well, it's my if I'm using the GitHub MCP server, I wanna pass my end user credentials all the way through to that MCP server because I don't want, you know, I don't want it just to be like, well, here's our general generic service account for the entire organization, and every GitHub action is is gonna be, you know, seen by that one account. And you have to you have to have the individual identity pass through. So you have, like, the concept of, like, SSO and sign in as well for an identity for agents or humans running their agents on their their desktop. So that's kind of a quick level view." aria-label="回原文"></button>。

## 出事怎么办：老牌安全经验直接套用

谈到之前智能体蜂群失控的事件，Nick 的态度很实在：不能保证预防一切，但那些 AI 实验室缺的恰恰是企业界二十年攒下的基本功——加固的沙箱、严格的网络分区(「这是高度监管分区，锁得死死的」，哪怕传统防火墙本来都能挡住很多)、以及真正在工作的监控。他提到事件里「他们的监控没在工作，而且他们并没有真正监控它」。依赖栈、容器、操作系统都要保持打补丁、可靠 <button class="pd-ts" data-t="41:43" data-who="Nick" data-en="So but if you if you look at some of the the things where how that kinda got started is where they, you know, they started getting out of the sandbox. Right? And then they they found things that were, like, they could get access to. Or, you know, having monitoring control around what those apps or agents can do is is, you know, something that's been been in mind for all enterprise apps. Right?" aria-label="回原文"></button><button class="pd-ts" data-t="42:09" data-who="Nick" data-en="Right? So it it it's kinda key. Like, you know, a lot of the core enterprise learnings that kind of maybe take that for, like, you know, the the old team versus the new team. It's like, well, guys, you could've just, you know, I don't know, had some basic controls. And, like, I think they even talked about, like, their monitoring wasn't working, and they weren't really monitoring it." aria-label="回原文"></button>。

## 落地节奏与组织建议

技术上：小步前进，别想一口吃成胖子。对多数企业，拿到一个安全、被批准的 LLM 访问仍是最大障碍——一切要过 AI 委员会，「我们去委员会展示想法，然后等六个月看结果」。批准了就迭代：先跑一个简单智能体，下一步加 MCP 工具自然就明显了 <button class="pd-ts" data-t="33:53" data-who="Nick" data-en="for everything. Right? Yes. So it's like, we shall go to the committee and we shall present our idea. We will wait six months and see what has the result been. Right? So you just kinda have to work through the councils and the committees and and all that fun. But once you finally get something approved, just just just iterate." aria-label="回原文"></button><button class="pd-ts" data-t="34:07" data-who="Nick" data-en="So it's like, we shall go to the committee and we shall present our idea. We will wait six months and see what has the result been. Right? So you just kinda have to work through the councils and the committees and and all that fun. But once you finally get something approved, just just just iterate." aria-label="回原文"></button>。

组织上：新团队(被压着「到处用 AI」KPI 的那种)要主动办每周办公时间、午餐学习会，给全公司一个开放的起步入口；老团队要主动伸手帮忙，把多年经验带过来。别让新团队发号施令、老团队靠边站，打破筒仓。

Nick 在大会演讲开场问「谁在工作中用过 Cursor、Claude Code 这类工具」，全场举手——采用速度远超想象。对个人，抗拒改变会被贴标签搁置；带着开放心态提出经验，你的关键教训才更可能被新方式采纳 <button class="pd-ts" data-t="34:55" data-who="Nick" data-en="And then, you know, you know, and some of these guardrails help inner you know, of Tainzee platform help enterprises bring these tools to to to light, because it's not just, you know, all this random stuff downloaded from the Internet. Right? Which that can be its own danger nowadays. So having the you know, having some some guardrails in place is is a good thing. If you've had you know, if you have experience with some of these platforms or apps running before, take that experience and that knowledge and kind of bring it forward." aria-label="回原文"></button><button class="pd-ts" data-t="38:27" data-who="Nick" data-en="So it's it's just breaking that down. And then I think with this iteration, right, it's gonna happen a lot faster. And I think people just naturally wanna work together. Because I I think I I was at VMware Explorer, I I did a few talks. And I started every talk with like, alright." aria-label="回原文"></button><button class="pd-ts" data-t="39:07" data-who="Nick" data-en="So like, the adoption rate even at, you know, the traditional, like, you know, platform or developer engineer, and, you know, or just infrastructure admin at some of these, personas is is well into that that scope. So the entire enterprise, I think, is picking up on this really fast. And the, you know, the more collaboration, I think it just will help out. So, you know, just office hours, you know, reach out, be proactive. And I guess if you're on if don't be be pro be be mindful or be open to change." aria-label="回原文"></button>。

## 展望

Nick 预测企业团队结构和角色会剧变，新角色会被创造出来。但 counters 「AI 抢工作」的恐惧，他自己的体感是：**「我比以往任何时候都更忙，因为我有所有这些智能体，它们需要我提供东西」**——他在做一直想做却没时间做的事。接下来半年他看好语音交互、人机交互新形态，以及 LLM 之外的机器人方向 <button class="pd-ts" data-t="45:38" data-who="Nick" data-en="Right? Because you're starting to see and I I was going through old episodes of my podcast this year and just some of the old just the start of this year, and there's just now. Was like, wow, a lot has changed. And I like, can't imagine, like, can you, like, you know, imagine a couple years from now how much change the rate of changes now if the L" aria-label="回原文"></button><button class="pd-ts" data-t="46:14" data-who="Nick" data-en="Perceived, So it's it's hard to imagine that, but I I definitely think from a business perspective, we're gonna see, like, a radical change in, like, how how, you know, development and, you know, product management and everything changes or everything kind of, you know there's gonna be, new roles get created. You know, orgs are gonna change, I think. And I think I think for the good too, because I think, like, there there's always a fear of job loss, but I I find that I've and I've heard this echoed across many personal experiences. I am, like, working harder than I ever have because I have all these agents, and they, like, they need stuff from me. And I'm constantly, like and I'm doing building things that I always wanted to build, but just never had the time to." aria-label="回原文"></button>。

## 本集带走

- **智能体当应用管**：别因为「智能体」三个字就推翻平台工程——统一可重复的部署模式、平台统一处理安全和合规，直接平移过来用。
- **先解决状态问题**：笔记本上的 MD 文件记忆上不了云，要给智能体接共享内存服务(可按团队隔离)，否则实例一停记忆就没了。
- **智能体尽量和应用、数据放近**：跨 30 跳网络调 LLM,延迟在大规模下会成灾；物理隔离的客户可以跑本地模型 + 本地 GPU。
- **工具收敛到 MCP 网关**：注册、鉴权(终端用户身份透传)、指标监控一站式，异动(如对危险工具的异常调用)能报警。
- **落地靠小步 + 过委员会**：拿到一个被批准的 LLM 是第一关，批准一个简单智能体后再迭代加工具。
- **新老团队要互伸之手**：新团队办办公时间降低入门门槛，老团队主动带经验进场；个人层面，开放心态比抗拒更有出路。
- **安全回到基本功**：加固沙箱、网络分区、真正在跑的监控——失控蜂群事件缺的正是这些。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">那个系统一宕机，五分钟之内，仓库的卡车就会在州际公路上积压。</span>  
> *And if that thing went down, like, within five minutes, like, the warehouse was backing up trucks, like, on the interstate.*  
> <span class="qm">—— Nick · [13:28]</span> ^q1

> <span class="qz">比如，这一个智能体对「删除仓库」这个工具调了 20 万次——哦，也许我们该对此报警了。</span>  
> *Like, well, this one agent, you know, made 200,000 tool calls to, you know, delete repo. Like, oh, like, maybe we should alert on that.*  
> <span class="qm">—— Nick · [26:01]</span> ^q2

> <span class="qz">我还经常看到：组织里一项新技术出现，就建一个新团队，然后那个新团队发号施令。</span>  
> *I think a lot of times too, I see in organizations, like a new technology will come up, and a new team will be built, and that new team will decree.*  
> <span class="qm">—— Nick · [34:57]</span> ^q3

> <span class="qz">我现在比以往任何时候都更忙，因为我有所有这些智能体，而它们需要我提供东西。</span>  
> *I am, like, working harder than I ever have because I have all these agents, and they, like, they need stuff from me.*  
> <span class="qm">—— Nick · [46:03]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-17-sed-scaling-agent-workloads-at-vercel|把智能体从「桌上的宠物」搬进云端：Vercel 开源框架 Eve]]<span class="pd-rz">同概念:MCP、智能体 (agent)、沙箱 (sandbox)、记忆服务 (memory)</span>
- [[2025-10-26-lennys-how-block-is-becoming-the-most-ai-native|Block CTO：代码质量与产品成功毫无关系，打造 AI 原生公司靠的是组织重组]]<span class="pd-rz">同概念:LLM、MCP、智能体 (agent)</span>
- [[2026-05-27-devtools-cloudflare-devs|Cloudflare 三人聊：让模型直接写代码，别再堆工具了]]<span class="pd-rz">同概念:MCP、智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-05-22-talks-mastering-claude-code-in-30-minutes|Claude Code 实战技巧：从提问到并行]]<span class="pd-rz">同概念:LLM、MCP</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:智能体 (agent)、记忆服务 (memory)</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:LLM、智能体 (agent)</span>

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
