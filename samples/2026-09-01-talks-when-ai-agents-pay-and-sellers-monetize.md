---
title: 机器人流量已超人类：当 AI 智能体开始自己付钱
podcast: 精选演讲
date: 2026-09-28
source_url: undefined
duration: "20:20"
type: episode
cover: "#64748b"
description: AWS 高级解决方案架构师 Anil 讲解智能体电商：机器人流量已超人类，AWS 借 X402 协议让 AI 智能体自主付费买内容，卖家也能对 AI 流量收费。
guests: ["[[Anil Nadiminti]]"]
companies: ["[[AgentCore Payments]]", "[[WAF AI Traffic Monetization]]", "[[AWS]]", "[[Coinbase]]", "[[Stripe]]"]
concepts: ["[[智能体]]", "[[智能体电商]]", "[[X402]]", "[[护栏]]", "[[AI Bot]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-01-talks-when-ai-agents-pay-and-sellers-monetize#post","headline":"机器人流量已超人类：当 AI 智能体开始自己付钱","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-01-talks-when-ai-agents-pay-and-sellers-monetize","mainEntityOfPage":"https://talk.solomind.cc/2026-09-01-talks-when-ai-agents-pay-and-sellers-monetize","description":"AWS 高级解决方案架构师 Anil 讲解智能体电商：机器人流量已超人类，AWS 借 X402 协议让 AI 智能体自主付费买内容，卖家也能对 AI 流量收费。","datePublished":"2026-09-28","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Anil Nadiminti"},{"@type":"Organization","name":"AgentCore Payments"},{"@type":"Organization","name":"WAF AI Traffic Monetization"},{"@type":"Organization","name":"AWS"},{"@type":"Organization","name":"Coinbase"},{"@type":"Organization","name":"Stripe"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体电商 (agent e-commerce)"},{"@type":"Thing","name":"X402"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"AI Bot (bot)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"机器人流量已超人类：当 AI 智能体开始自己付钱","item":"https://talk.solomind.cc/2026-09-01-talks-when-ai-agents-pay-and-sellers-monetize"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>机器人流量已超人类：当 AI 智能体开始自己付钱</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 机器人流量已超人类：当 AI 智能体开始自己付钱

<div class="pd-byl"><b>Anil Nadiminti</b> · AWS 高级解决方案架构师 · 2026-09-28</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-01-talks-when-ai-agents-pay-and-sellers-monetize.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们正处于一个拐点：机器人流量已经超过了人类流量。</div><div class="a">— Anil Nadiminti <button class="pd-ts" data-t="01:18" data-who="Anil Nadiminti" data-en="We see that we're at an infliction point where the bot traffic is more than the human traffic, right?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Anil Nadiminti]]
>
> **公司** [[AgentCore Payments]] · [[WAF AI Traffic Monetization]] · [[AWS]] · [[Coinbase]] · [[Stripe]]
>
> **概念** [[智能体]] · [[智能体电商]] · [[X402]] · [[护栏]] · [[AI Bot]]

这一集是 [[AWS|AWS]] 的一场技术演讲，主角是 AWS 的高级解决方案架构师 Anil,他讲的是「[[智能体电商|智能体电商]]」——让 AI [[智能体|智能体]]（能自主完成多步骤任务的程序）在互联网上自己发现内容、自己付钱、自己拿到内容，全程不需要人插手。

先看一个大背景：互联网上发往新闻门户这类网站的流量，[[AI Bot|机器人]]已经超过了人类，而且其中 95% 的机器人流量来自 AI 智能体 <button class="pd-ts" data-t="01:08" data-who="嘉宾" data-en="So this is all the content that is behind a paywall. But what we see now is that much of the traffic that is actually being sent to these portals now on the internet is all coming from bots." aria-label="回原文"></button>。AWS 预测，到 2027 年大约会有十亿个智能体在执行任务，60% 的企业已经在用智能体工作流 <button class="pd-ts" data-t="02:06" data-who="嘉宾" data-en="That's kind of where we are in the journey. And we see that by 2027, about a billion agents will be performing tasks, and 60% of the enterprises will already be using agentic workflows." aria-label="回原文"></button>。

## 问题：智能体撞上付费墙就卡死

设想你在读一篇新闻，碰到付费墙，掏信用卡订阅就能解决。但智能体碰到付费墙就直接停滞，只能报错「我无法访问内容」，然后人类被迫介入，手动填信用卡或 API 密钥——这些手动摩擦正是自主智能体中断的地方 <button class="pd-ts" data-t="02:21" data-who="嘉宾" data-en="So what happens when agents hit these paywalls that we just saw? When agents hit the paywalls, they stall, they can't operate, and you see those messages that, hey, I cannot access content, right?" aria-label="回原文"></button>。

内容的卖方也不爽：封掉所有机器人流量，就失去了 AI 驱动的发现、合作授权机会和 AI 回复中的引用曝光；放任机器人进来，数百万机器人会冲垮基础设施，还失去归因和 IP 本身。两条路都不理想 <button class="pd-ts" data-t="02:54" data-who="嘉宾" data-en="So now sellers of the content have a couple of options. So block all their bot traffic. But by blocking all the traffic, they lose this AI-powered discovery." aria-label="回原文"></button>。

买方和卖方的诉求汇成了一个共同点：需要一种标准化的协议，在边缘解决机器对机器的支付。买方想要智能体能自己付钱、不用人批准，还要[[护栏|护栏]]——没有企业敢让智能体拿着信用卡无节制地花钱；卖方想要从 AI 流量里赚到钱，且不想改动自己的源站基础设施 <button class="pd-ts" data-t="05:05" data-who="嘉宾" data-en="So that's what the buyer side is looking at. And on the seller side, There are, again, billions of transactions that will be happening with these AI bots, so sellers really want to be able to understand what kinds of bots are operating, what kinds of transactions they're making, and really do this at the edge." aria-label="回原文"></button>。归根结底，订阅模式将从「人在环中」变成「人在环上」甚至「人不在环中」，传统一刀切的订阅不再适用，未来是按次付费、按次执行 <button class="pd-ts" data-t="05:52" data-who="嘉宾" data-en="And then the sellers are saying that they want to be able to earn from the AI traffic. So bottom line, the subscription model is going to change with humans in the loop to becoming humans on the loop or out of the loop." aria-label="回原文"></button>。

## X402：一个被闲置了三十年的状态码派上用场

这里有个关键障碍：传统支付根本撑不住这种场景。主流支付渠道有 0.25 美元的最低交易费，外加 2.5% 的抽成，而智能体的交易是一美分、甚至低于一美分的「微美分」级别——手续费相当于实际支付金额的 250 倍，这条路完全走不通 <button class="pd-ts" data-t="06:23" data-who="嘉宾" data-en="So, if you're a seller, you would have come across this, right? So, there is a $0.25 minimum transaction fees as well as 2.5% on top of that, and all of these microtransactions are, you know, like a cent, sub-cent, or, you know, micro-cents is what we're calling them," aria-label="回原文"></button>。

解法藏在 HTTP 协议里。你熟悉的 200、404、301 都是状态码，而 402 这个码从协议诞生起就被预留给「需要付款」，却从未被使用。

[[Coinbase|Coinbase]] 把它启用，做成了 [[X402|X402]] 协议，专门处理机器对机器的交易 <button class="pd-ts" data-t="07:02" data-who="嘉宾" data-en="And the 301, these are all status codes that you're familiar with. And then there is one status code, which is 402, which has not been used. It was reserved for payment required." aria-label="回原文"></button>。流程是：客户端请求服务器，服务器返回 402「需要付款」，客户端选定支付方式、发送支付授权，服务器通过一个 facilitator（撮合验证与结算的中介服务）完成验证和交易，链上结算完成后，内容随响应返回 <button class="pd-ts" data-t="07:29" data-who="嘉宾" data-en="Flowchart here. A client makes a request to the server, and then the server responds back with the payment required. The client then thinks out what is the payment method that it wants to operate, and then it sends the payment authorization to the server." aria-label="回原文"></button>。

X402 吸引人的地方在于：消费者侧零协议费，商家只付极微量的 gas 费（区块链上的手续费），等待时间为零，以互联网的速度进行。没有 API 密钥要设置、没有订阅——**支付本身就是获取内容的凭证** <button class="pd-ts" data-t="08:01" data-who="嘉宾" data-en="I thought I'll pick one of the protocols and just explain this to you. But why this is compelling is essentially there is no protocol fees or the fees that a consumer is paying for, these microcent transactions." aria-label="回原文"></button>。协议于 2025 年 5 月推出，现已纳入 Linux 基金会旗下 OpenGovernance，背后有 Coinbase、AWS、Google、[[Stripe|Stripe]]、Anthropic、Cloudflare、Circle 等一众公司支持 <button class="pd-ts" data-t="08:35" data-who="嘉宾" data-en="It's X402 can be extended as well, and you can implement it, and there are no restrictions as well. So some key milestones here are, you know, it was introduced last year, May 2025." aria-label="回原文"></button>。

## 买方：AWS AgentCore Payments，让智能体带着「限额钱包」出门

AWS 在 Bedrock 套件下发布了 [[AgentCore Payments|AgentCore Payments]]，与 Coinbase 和 Stripe 合作推出，让 AI 智能体用几行代码就能自主发现、授权、执行支付 <button class="pd-ts" data-t="09:31" data-who="嘉宾" data-en="The full stack trace of everything that's happening under the hood. So I'm excited to share with you that we've launched AgentCode Payments, and this is a service that allows AI agents to autonomously discover, authorize, and execute payments with a few lines of code." aria-label="回原文"></button>。核心能力：

- **钱包支持**：引入 Coinbase 和 Stripe 的钱包，用支付连接器编排；今天支持 X402，服务被设计为协议无关的，新协议出现就加支持。
- **预算与护栏**：可创建支付会话，以编程方式设最大消费额和过期时间——比如设智能体 30 天内最多花 5 美元 <button class="pd-ts" data-t="10:59" data-who="嘉宾" data-en="Or you can also set expiry time in minutes. Think where you are able to set that the agent can actually spend maybe $5 in 30 days or 60 days. So that's kind of the operation model that you can set with many more details that are available." aria-label="回原文"></button>。
- **实时结算**与内置的可观测性（整个调用链路的完整追踪）。

安全设计上最关键的一点：导入钱包的私钥存在由 KMS（AWS 的密钥管理服务）保护的安全令牌钱包里，**智能体本身拿不到私钥** <button class="pd-ts" data-t="12:10" data-who="嘉宾" data-en="So, in this process, when the wallet support is imported, the secret keys that you use to import the wallets actually are stored in a secure token wallet that is secured by KMS, where, you know, that's there." aria-label="回原文"></button>。架构上把智能体基础设施和支付基础设施解耦——这很重要，因为智能体的技能可能被投毒、输入可能被恶意注入；支付走的是确定性路径，不碰智能体那个非确定性的推理循环 <button class="pd-ts" data-t="12:44" data-who="嘉宾" data-en="And then, again, there is a per-session budget that we just discussed as well. There is a decoupling of agent infrastructure and the payment infrastructure by design where the agent can operate in its own loop, and whenever it sees the payment, the payment connectors, orchestration, payment limits, and integration with third-party wallets can happen." aria-label="回原文"></button>。

带来的好处是：智能体的代码不用改，你可以自带模型和框架，支付在独立的支付层自行流转。通过 AgentCore Gateway（把内部 API「MCP 化」即包装成智能体可调用工具的服务），还能接入 Coinbase 的发现服务，那里有超过一万个可交易的端点 <button class="pd-ts" data-t="12:27" data-who="嘉宾" data-en="Through Gateway, which is another service that we have to MCP5 your internal APIs. Through AgentCore Gateway, the AgentCore payments can get access to Discovery Service in Coinbase, where there are 10,000-plus endpoints that are available to transact." aria-label="回原文"></button>。

## 卖方：WAF AI Traffic Monetization，在边缘把机器人变成收入

卖方这边，AWS 在 Web 应用防火墙（WAF）下已有机器人检测，能识别 650 多种机器人，比如 Perplexity bot、GPD bot、Claude bot，还有 Google bots <button class="pd-ts" data-t="14:44" data-who="嘉宾" data-en="We have released under the AWS Web Application Firewall a feature where we have bot detection in place. Today, we detect over 650 different types of bots, things like Perplexity bot, GPD bot, Claude bot, again, Google bots." aria-label="回原文"></button>。不只是认出是谁，还能**识别意图**——这个机器人抓内容是为了训练模型，还是在为 RAG 搜索（检索增强生成，让 AI 查资料再回答）做响应，并通过签名验证机器人身份 <button class="pd-ts" data-t="14:58" data-who="嘉宾" data-en="Also understand the intent of these bots. So why are these bots axing the content? Are they axing the content to train their models?" aria-label="回原文"></button>。

新发布的 [[WAF AI Traffic Monetization|WAF AI Traffic Monetization]] 让卖家基于这些信息直接变现。如果你用 CloudFront（AWS 的内容分发网络），加一层 WAF、点几下就能开始收费，源站零改动、SDK 零改动，发布者保留 100% 的收入，没有交易费或订阅费 <button class="pd-ts" data-t="16:49" data-who="嘉宾" data-en="So then we are able to monetize using the X402, and the publishers get paid as well. So important to note is, again, there is no SDK change, no changes at the origin." aria-label="回原文"></button>。定价维度可以很细：

- **按路径**：/blog、/research、API 端点可以定不同费率；
- **按身份**：与 Anthropic 这类组织建立了关系的验证机器人，可以对它们采用与未验证机器人不同的定价 <button class="pd-ts" data-t="17:24" data-who="嘉宾" data-en="And you know the identity of these bots. Again, if you make some kind of relationship with the bots, companies, organizations, maybe you make a relation with Anthropic, then you can essentially have a different pricing for those bots versus different unverified bots." aria-label="回原文"></button>；
- **按意图**：训练用的抓取收一个价，搜索引用收另一个价 <button class="pd-ts" data-t="17:39" data-who="嘉宾" data-en="So think of that option. And then you can also set different pricing for intent as well. If somebody is coming here, if a bot is asking the content for, again, training, you can charge a different rate than what it's doing for a search as well." aria-label="回原文"></button>。

甚至人类可以免费、机器人收费，或各自不同——整个定价逻辑被重新构想了一遍。

## 这套东西现在跑得怎么样

目前智能体电商的真实用途：跑 LLM 推理、获取算力、网页抓取、研究智能体、智能体对智能体交易，MCP 服务也在被变现 <button class="pd-ts" data-t="18:38" data-who="嘉宾" data-en="So again, What is currently everyone using agent e-commerce for? They are using agent e-commerce to run, again, LLM inference, getting compute, web scraping, they're creating research agents to be able to, you know, serve the requests, and agent to agent as well." aria-label="回原文"></button>。来自 Coinbase 智能体市场过去 12 个月的数据：超过 1.7 亿笔交易、共 5000 万美元交易量，在 Base 上的平均结算时间 200 毫秒，每笔交易成本约十分之一美分 <button class="pd-ts" data-t="19:08" data-who="嘉宾" data-en="Again, this is the last 12 months of traffic from, again, what we're seeing on Coinbase agentic market. Where you're seeing that a $50 million volume transaction happened over 170 million transactions." aria-label="回原文"></button>。最后 Anil 把这些放进更大的图景：Bedrock AgentCore 生态——自带模型和框架、加记忆、接知识库、网页搜索、MCP 化内部 API，Runtime 里每个请求跑在隔离的微型虚拟机里 <button class="pd-ts" data-t="19:56" data-who="嘉宾" data-en="You can MCPfy your internal APIs, and then you can have many more features like being able to run evaluation on how your agents are performing. So again, you can use Runtime, which is a Bedrock Agent Code Runtime where you can bring your own agent application and serve at scale, and every request will have its own isolated micro virtual machine that is running to serve the requests." aria-label="回原文"></button>。

## 本集带走

- **机器人流量已过拐点**：发往内容网站的流量机器人已超人类，其中 95% 来自 AI 智能体；智能体撞付费墙会卡死，人类被迫手动付款，这是自主智能体的最大摩擦点。
- **微交易的正确协议是 X402**：启用 HTTP 预留至今的 402「需要付款」状态码，消费者零协议费、结算约 200 毫秒、每笔成本约十分之一美分——传统支付 0.25 美元最低费在这类交易上是 250 倍溢价，根本不可行。
- **买方的安全关键是解耦 + 藏私钥**：智能体运行在非确定性循环里，支付走独立的确定性路径；私钥托管在 KMS 保护的令牌钱包，智能体自己碰不到；用支付会话设限额和过期时间，防智能体失控花钱。
- **卖方可以在边缘把 AI 流量变成收入**：WAF 能识别 650 多种机器人、验证身份、区分「训练抓取」还是「搜索引用」，按路径/身份/意图分别定价，源站零改动、收入 100% 归发布者。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">我们正处于一个拐点：机器人流量已经超过了人类流量。</span>  
> *We see that we're at an infliction point where the bot traffic is more than the human traffic, right?*  
> <span class="qm">—— Anil Nadiminti · [01:18]</span> ^q1

> <span class="qz">而其中 95% 的机器人流量来自 AI 智能体。</span>  
> *And 95% of that bot traffic is coming from AI agents.*  
> <span class="qm">—— Anil Nadiminti · [01:27]</span> ^q2

> <span class="qz">自主智能体实际上正是在摩擦不断累积的那个点上中断了。</span>  
> *So autonomous agents actually break at that point where the friction is now building up.*  
> <span class="qm">—— Anil Nadiminti · [02:42]</span> ^q3

> <span class="qz">归根结底，订阅模式将会发生改变，从人在环中变成人在环上，或人不在环中。</span>  
> *So bottom line, the subscription model is going to change with humans in the loop to becoming humans on the loop or out of the loop.*  
> <span class="qm">—— Anil Nadiminti · [05:52]</span> ^q4

> <span class="qz">没有需要设置的 API 密钥，没有订阅，支付本身就是获取内容的凭证。</span>  
> *There is no API keys to set up, no subscriptions, and the payment is essentially the credential to be able to get the content.*  
> <span class="qm">—— Anil Nadiminti · [08:20]</span> ^q5

> <span class="qz">这一切正在以互联网的速度发生，没有任何摩擦。</span>  
> *This is happening at the speed of internet, and there is no friction.*  
> <span class="qm">—— Anil Nadiminti · [08:15]</span> ^q6

> <span class="qz">在 Base 上的平均结算时间是 200 毫秒，每笔交易的成本约为十分之一美分。</span>  
> *The average settlement time is 200 milliseconds on base with about a tenth of a cent as cost per transaction.*  
> <span class="qm">—— Anil Nadiminti · [19:13]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-13-sed-rebuilding-the-cloud-for-ai-agent-code|当 AI 智能体成为云的主要用户：Render CEO 谈云的下一次重建]]<span class="pd-rz">同公司:AWS、Stripe · 同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-10-08-a16z-building-the-cloud-for-an-agentic-world|AWS CEO 谈 GPU 荒、2200 亿资本开支与智能体时代的云]]<span class="pd-rz">同公司:AWS、Anthropic · 同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-09-01-talks-teaching-agents-to-pay-anna-spysz-stripe|让 AI 智能体替我买耳机：一场智能体商务的完整实操]]<span class="pd-rz">同公司:Stripe · 同概念:护栏 (guardrails)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同公司:Stripe、AWS · 同概念:智能体 (agent)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:Anthropic · 同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-08-20-twentyvc-20vc-spacex-buys-cursor-for-60bn-stripe|SpaceX 600亿买Cursor：AI并购的疯狂逻辑]]<span class="pd-rz">同公司:Stripe、Anthropic · 同概念:智能体 (agent)</span>

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
