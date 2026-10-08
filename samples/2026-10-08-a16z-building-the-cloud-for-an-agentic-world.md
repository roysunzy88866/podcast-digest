---
title: AWS CEO 谈 GPU 荒、2200 亿资本开支与智能体时代的云
podcast: The a16z Show
date: 2026-10-08
source_url: undefined
duration: "56:05"
type: episode
cover: "#64748b"
description: "AWS CEO Matt Garman 做客 a16z 播客，谈 GPU 容量怎么分、2200 亿美元资本开支、自研芯片 Trainium,以及智能体如何倒逼云重构。"
host: "[[Raguraguram]]"
cohosts: ["[[Matt Garman]]"]
companies: ["[[AWS]]", "[[Amazon]]", "[[Anthropic]]", "[[OpenAI]]"]
concepts: ["[[智能体]]", "[[GPU]]", "[[Trainium]]", "[[Graviton]]", "[[Bedrock]]", "[[沙箱]]", "[[Firecracker]]", "[[推理]]", "[[评估]]", "[[护栏]]", "[[开放权重]]", "[[SageMaker]]", "[[尾部延迟]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-08-a16z-building-the-cloud-for-an-agentic-world#post","headline":"AWS CEO 谈 GPU 荒、2200 亿资本开支与智能体时代的云","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-08-a16z-building-the-cloud-for-an-agentic-world","mainEntityOfPage":"https://talk.solomind.cc/2026-10-08-a16z-building-the-cloud-for-an-agentic-world","description":"AWS CEO Matt Garman 做客 a16z 播客，谈 GPU 容量怎么分、2200 亿美元资本开支、自研芯片 Trainium,以及智能体如何倒逼云重构。","datePublished":"2026-10-08","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Raguraguram"},{"@type":"Person","name":"Matt Garman"},{"@type":"Organization","name":"AWS"},{"@type":"Organization","name":"Amazon"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"OpenAI"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"GPU"},{"@type":"Thing","name":"Trainium"},{"@type":"Thing","name":"Graviton"},{"@type":"Thing","name":"Bedrock"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"Firecracker"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"评估 (eval)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"开放权重 (open weights)"},{"@type":"Thing","name":"SageMaker"},{"@type":"Thing","name":"尾部延迟 (tail latencies)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AWS CEO 谈 GPU 荒、2200 亿资本开支与智能体时代的云","item":"https://talk.solomind.cc/2026-10-08-a16z-building-the-cloud-for-an-agentic-world"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AWS CEO 谈 GPU 荒、2200 亿资本开支与智能体时代的云</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AWS CEO 谈 GPU 荒、2200 亿资本开支与智能体时代的云

<div class="pd-byl"><b>Matt Garman</b> · AWS CEO · 2026-10-08</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-08-a16z-building-the-cloud-for-an-agentic-world.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们最近宣布，未来几年将购买 200 万块 NVIDIA GPU。</div><div class="a">— Matt Garman <button class="pd-ts" data-t="00:34" data-who="Matt Garman" data-en="We recently announced we're going to be buying 2 million NVIDIA GPUs over the next couple of years." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Raguraguram]] · [[Matt Garman]]
>
> **公司** [[AWS]] · [[Amazon]] · [[Anthropic]] · [[OpenAI]]
>
> **概念** [[智能体]] · [[GPU]] · [[Trainium]] · [[Graviton]] · [[Bedrock]] · [[沙箱]] · [[Firecracker]] · [[推理]] · [[评估]] · [[护栏]] · [[开放权重]] · [[SageMaker]] · [[尾部延迟]]

这一集的主角是 [[Matt Garman|Matt Garman]]——[[AWS|AWS]] 的 CEO,也是 EC2(亚马逊的云服务器服务)的第一位负责人，2005 年 AWS 还是个内部项目时他就在做用户分析了。

他和 a16z 的投资人聊了一场信息量极大的对话：

史上最大规模的基础设施建设是怎么回事，以及当写代码的从人变成[[智能体|智能体]]，云本身要怎么变。

先甩个钩子：[[Amazon|Amazon]] 今年的资本开支是 2200 亿美元，未来几年还要买入 200 万块 NVIDIA [[GPU|GPU]],而且「我们不预计很快放缓，因为需求实在太庞大了」。

这是任何公司在单一年度从未有过的最大支出。

## 初创公司是 AWS 的命脉，这不是客气话

Garman 在 2005 年的商学院实习项目就是分析 AWS 最吸引谁，答案是初创公司。

这笔账 AWS 算得很清楚：今天大约 30-40% 的 AWS 收入，来自那些在 AWS 生命周期中曾是初创公司的企业。

所以 AWS 有意给「两个人在车库里」的公司留资源——不只是为了生意，还因为初创公司是 AWS 学习的对象：

银行五年后才会想要的能力，初创公司今天就在要。

变了的是体量：以前的初创公司拿 1000 万美元融资慢慢迭代，现在第一天估值就是 10 亿美元、手握 2 亿美元融资。

没变的是他们的焦虑——规模化之后架构怎么办、安全怎么办。这也是他们选 AWS 而不是 Neocloud(新兴 GPU 云厂商)的原因。

## GPU 怎么分：故意不把所有卡卖给大实验室

最稀缺的 GPU,前沿实验室恨不得全吞掉，AWS 怎么平衡？

Garman 说得很直白：他们其实可以把每一块 GPU 都卖给 [[Anthropic|Anthropic]]、[[OpenAI|OpenAI]]、Meta 这些大客户然后收工，但选择不这么做，因为要养整个生态系统。

于是 AWS 有意做分配：大实验室拿大头，但给初创公司留出容量。

结果大约 60% 的 GPU 申请最终以某种形式被批准——有时晚一点、有时换个区域、有时配置略有不同。

至于泡沫担忧，他的回答靠的是客户数据：去问客户「以今天的能力和成本，你有正向回报吗」，几乎每个人都说是。

「没有哪种泡沫会让他们停止在这上面花钱。」

加上 AWS 客户集中度极低——单一客户最高只占个位数百分比，而一些 Neocloud 对一两个客户的集中度能到 30%-60%。

## 约束永远在移动：没有唯一的瓶颈，只有最新的瓶颈

被问到未来几年最严重的瓶颈是什么，Garman 引用了本科读过的《目标》(The Goal)：永远没有唯一的约束，永远只有最新的那个。

解决一个，下一个立刻顶上——电力解决了可能是内存，再是 TSMC 产能、HBM、网络组件，甚至供应链里一个连接器的小故障。

而且约束还有位置属性：某地电力过剩不代表德国够用，容量并非完全可互换。

这个规模也逼出了以前从不需要的规划：

15 年前缺电就找电力公司要几十兆瓦，现在必须自己出资建电力项目、可再生能源项目——过去 10 年 AWS 每年都是最大的可再生能源采购方之一，规划要往前看 20 年，需求预测从多个季度变成了提前好几年。

## 自研芯片：从「卸载卡」长出来的 Trainium

AWS 做芯片不是拍脑袋，是迭代出来的。十三四年前客户抱怨「虚拟化税」(虚拟化损耗了本该有的服务器性能)，想要裸金属性能。

AWS 先把网络虚拟化卸载到一张卡上，后来找到一家在卸载卡上放了 ARM 内核的公司(即 Annapurna 团队，后被收购)，让虚拟化全部走卡上的 API——这就是 Nitro。

再往下想：这些 ARM 内核能不能直接做成服务器？于是有了 [[Graviton|Graviton]]。

如今 AWS 每年部署的 Graviton 机器比任何其他类型都多：便宜 20%、性能好 20%,前 100 大客户里 90% 以上都在用。

有客户整个集群迁移后服务器数量直接砍半。Garman 说这是「客户降低账单最简单的一条路」。

五六年前看到 AI 算力要起势，又做了 [[Trainium|Trainium]],现在第三代 Trainium 3 已在市，容量卖到了明年年底。

名字带 Train(训练)，但 Garman 坦言他们「不太擅长起名字」——实际上 Trainium 从绝对性能和性价比看可能是当下市场上最好的[[推理|推理]]芯片之一，[[Bedrock|Bedrock]](aws 的模型托管服务)上的大部分推理流量就跑在它上面，Anthropic 和 OpenAI 都有基于它构建的协议。

## 智能体正在改写云的设计假设

这是全集最有前瞻性的部分：当用户从人变成智能体，很多「好东西」反而成了负担。

比如生产级 Aurora 数据库要有五个九的持久性，但很多智能体是「建一个数据库、干点活、然后让它消失」——五个九对这种瞬态用例是过度工程。

AWS 不想做「不可靠选项」，而是思考如何两者兼得：能快速创建随手扔掉，也能长成大型生产库。

还有一些以前根本不存在的「新构建块」：计算[[沙箱|沙箱]]、网关、智能体权限(与人的权限分开)。

智能体的权限不该是「给它你的一切」，而是严格限定时间范围、只够做一个任务、细粒度到「它在这个沙箱里能干什么」。

他们自家的 [[Firecracker|Firecracker]](微型虚拟机)意外成了行业标配——大量沙箱创业公司都在用它，虽然它诞生之初不是为智能体设计的。

易用性也在为智能体重构：

以前注册 AWS 账户要定义 VPC、IAM 角色、绑信用卡——这些对大客户至关重要，但对「想立刻部署」的智能体是拦路虎。

现在新账户可以用 Gmail 注册、30 秒内启动运行，默认配置都在幕后处理，而且之后需要时可以直接在原账户上补齐，不需要迁移。

一个有趣的细节：智能体非常在意[[尾部延迟|尾部延迟]](最慢那一小部分请求的延迟)——人不关心 P999 的 S3 延迟，智能体会被它卡住。

Garman 说这正是智能体化工作流在 AWS 上表现最好的原因之一。

还有新的 AWS Context 服务，给智能体建一个上下文层，让它们能跨多个数据湖找数据——人不会这么访问数据，智能体乐意。

## 企业用智能体的两道坎：别复制流程，学会信任

Garman 看到大多数企业已经建的智能体相对简单、非自主、人在回路里。他给出的第一个建议很反直觉：

别让智能体复刻 Bob 的五步流程最后人工检查——要退一步问「智能体怎么用不同的方式完成这件事」。

它可以大规模并行、同时试 50 种方法。真正的价值在从空白画布出发重新解决问题，不在复制现状。

第二道坎是信任：怎么确保智能体不会删掉生产数据库？怎么配[[护栏|护栏]]、权限、是否有人在回路？

企业还普遍不会做 eval([[评估|评测]]系统)——持续的测试循环、数据打标签、生产环境度量与回测防漂移，这些「今天没有谁真的特别擅长」。

这正是 AWS 重投 FDE(驻场工程师团队)的原因，但他们的打法刻意区别于传统咨询：

45 天内教会客户自己做 eval、标注数据，然后离开——「客户不想在未来五年里受制于一支外部团队」。

数据安全上，Bedrock 的差异化就一句话：保证数据永不离开你的 VPC(你的云内私有网络)，模型提供商永远看不到你的提示词。

企业从概念验证走向生产时，绝大多数落在 Bedrock 上，这是重要原因。

而对想用[[开放权重|开放权重模型]](权重公开可下载的模型)做后训练、微调的企业——Garman 认为这是个令人兴奋的场景，专有数据混进去蒸馏出更便宜更好的模型——今天大多数人已经在 AWS 的 [[SageMaker|SageMaker]] 上做了。

安全反而是 AI 的机会：AWS 刚推出 Continuum 服务，用强大的模型帮客户找漏洞、并基于对客户环境的了解排出优先级。

他的判断：「客户终将需要机器速度的安全，而不是人类速度。」

## AWS 自己内部：智能体写所有代码，工程师管智能体团队

Continuum 本身就是 AWS 内部做法的对外输出。更激进的在开发侧：

AWS 内部有所谓的「前沿团队」，做的是智能体式开发——「不是代码补全，智能体写所有的代码，你只是在管理一个智能体团队并驱动它们」。

效果是过去一年新功能推出的速度「涡轮加速」。

全公司层面，每位 Amazon 员工都用上了 Amazon Quick:HR 团队用智能体把过去一群人干几周的团队规划压缩成一个人几小时；

财务团队用智能体从各处拉税务规则保合规。最让 Garman 兴奋的是：过去被软件开发阻塞的业务线员工，现在能自己解除阻塞。

组织怎么变？他没有答案，只有实验：

比如过去一个产品能力由 10 人团队长期负责，现在三四个人就能很快建好——那就应该把人挪到新问题上去。

如何在维护已建系统与保持敏捷调动之间平衡，是 AWS 正在摸索的事。

## 本集带走

- **GPU 分配是刻意设计**：AWS 明知能全部卖给大实验室，仍有意为初创公司保留容量；约 60% 的申请最终以某种形式获批——被拒不等于没戏，换个区域或配置可能就拿到了。
- **判断泡沫看客户 ROI**:几乎所企业客户在当前能力和成本下都获得了正向回报，「没有哪种泡沫会让他们停止花钱」；加上 AWS 单一客户占比仅个位数，风险结构与高集中度的 Neocloud 完全不同。
- **瓶颈是移动的**：电力、内存、TSMC 产能、HBM、连接器……解决一个就冒出下一个；规划云容量要在所有环节同时下注，而不是押注单一瓶颈何时解除。
- **降低云账单最简单的一条路**：迁移到 Graviton——便宜 20%、性能好 20%,有客户整体迁移后服务器数量砍半。
- **别让智能体复刻人工流程**：真正值钱的用法是让智能体大规模并行、用完全不同的方式解决问题，而不是「Bob 的五步它再走一遍」。
- **企业落地智能体的最大短板是 eval**:持续测试循环、数据标注、生产回测这些能力普遍缺失——这也是 FDE 服务存在的理由，好的 FDE 应该 45 天教会你自己干然后撤走。
- **智能体时代云要重做假设**：瞬态资源(建完就删的数据库)、亚 30 秒开户、智能体专用权限与沙箱、尾部延迟敏感——这些是云厂商正在重写的底层设计。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">我们最近宣布，未来几年将购买 200 万块 NVIDIA GPU。</span>  
> *We recently announced we're going to be buying 2 million NVIDIA GPUs over the next couple of years.*  
> <span class="qm">—— Matt Garman · [00:34]</span> ^q1

> <span class="qz">今天，我们估计 AWS 大约 30-40% 的收入来自那些在 AWS 生命周期中曾是初创公司的企业。</span>  
> *Today, we estimate that maybe 30-40% of AWS revenue comes from companies that was a one-time startup in AWS's lifetime.*  
> <span class="qm">—— Matt Garman · [04:18]</span> ^q2

> <span class="qz">现在从第一天起，他们的估值就是 10 亿美元。</span>  
> *Now it's from day one, they're valued at a billion dollars.*  
> <span class="qm">—— Matt Garman · [05:34]</span> ^q3

> <span class="qz">它们实际上非常在意尾部延迟，这很有意思，因为人并不总是关心 P999 的 S3 延迟，但智能体确实在意，并且会被它卡住。</span>  
> *They actually care a lot about tail latencies, which is interesting, where people don't always care about the P999 S3 latency, like agents do care and get blocked by that.*  
> <span class="qm">—— Matt Garman · [08:25]</span> ^q4

> <span class="qz">我最近看到，我们对我们最终收到的请求，大约 60% 在某种程度上、以某种形式说了「可以」。</span>  
> *I saw recently that we say, you know, yes, in some way, shape or form to something like 60% of the requests we eventually get.*  
> <span class="qm">—— Matt Garman · [18:49]</span> ^q5

> <span class="qz">没有哪种泡沫会让他们停止在这上面花钱。</span>  
> *There's no bubble in which they stopped spending on that.*  
> <span class="qm">—— Matt Garman · [22:22]</span> ^q6

> <span class="qz">结果证明，永远不会有唯一的约束。永远只有最新的那个约束。</span>  
> *And so it turns out there's never one constraint. There's always just the latest constraint.*  
> <span class="qm">—— Matt Garman · [27:21]</span> ^q7

> <span class="qz">那个县的每个人每年少交 5000 美元的税，因为我们给那里带来的税收。</span>  
> *Everybody in that county pays $5,000 a year less in taxes because of the taxes that we bring to that.*  
> <span class="qm">—— Matt Garman · [31:28]</span> ^q8

> <span class="qz">这是客户降低账单的最简单的一条路，就是迁移到 Graviton。</span>  
> *It's been the single easiest way that customers lower their bill is to move to Graviton.*  
> <span class="qm">—— Matt Garman · [36:22]</span> ^q9

> <span class="qz">结果发现 Terranium 从绝对性能和性价比的角度来看，可能是目前市场上最好的推理芯片。</span>  
> *It turns out that Terranium is actually maybe the best inference chip on the market right now from an absolute performance and cost performance point of view.*  
> <span class="qm">—— Matt Garman · [38:03]</span> ^q10

> <span class="qz">因为你看，到了某个时候，客户将需要机器速度的安全，而不是人类速度</span>  
> *Because look, at some point, customers are going to need security at machine speed, not at human speed*  
> <span class="qm">—— Matt Garman · [50:43]</span> ^q11

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-08-doac-ai-safety-whistleblower-700-ai-agents-at|前 Anthropic 安全研究员亲述：AI 智能体如何黑了 Hugging Face,又黑了自己的东家]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)、推理 (inference)</span>
- [[2026-09-05-twentyvc-20vc-how-to-build-your-own-data-center-w|每块 GPU 多付 10 万美元插队：Speechify 创始人的算力账与战略悔棋]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:GPU、推理 (inference)、智能体 (agent)</span>
- [[2026-09-25-latent-openrouter|OpenRouter 创始人：「套壳论」最愚蠢，代币经济需要新警长]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:开放权重模型 (open weights)、推理 (inference)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-27-doac-the-man-who-calls-bs-on-ai-ai-is-the-wor|Ed Zitron：生成式 AI 是一场万亿级骗局]]<span class="pd-rz">同公司:Anthropic、OpenAI、Amazon · 同概念:GPU、推理 (inference)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-09-29-latent-thariq|Anthropic 的 Thariq 谈 Claude Code：提示词、CloudMods 与给前沿踩刹车]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:推理 (inference)、智能体 (agent)、沙箱 (sandbox)</span>

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
