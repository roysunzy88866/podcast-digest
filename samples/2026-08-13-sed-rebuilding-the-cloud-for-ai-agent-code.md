---
title: 当 AI 智能体成为云的主要用户：Render CEO 谈云的下一次重建
podcast: Software Engineering Daily
date: 2026-10-03
source_url: undefined
duration: "49:40"
type: episode
cover: "#64748b"
description: Render 创始人兼 CEO Anurag Gohl 对谈 Sean Falconer，讲为什么 Kubernetes 逼每家公司自建内部平台，以及智能体成为一等用户后云该怎么变。
host: "[[Anurag Gohl]]"
cohosts: ["[[Sean Falconer]]"]
companies: ["[[Render]]", "[[Stripe]]", "[[AWS]]", "[[Temporal]]", "[[Heroku]]", "[[Base44]]"]
concepts: ["[[Kubernetes]]", "[[智能体]]", "[[MCP]]", "[[持久化执行]]", "[[裸金属]]", "[[护栏]]", "[[基础设施即代码]]", "[[DevOps]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-13-sed-rebuilding-the-cloud-for-ai-agent-code#post","headline":"当 AI 智能体成为云的主要用户：Render CEO 谈云的下一次重建","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-13-sed-rebuilding-the-cloud-for-ai-agent-code","mainEntityOfPage":"https://talk.solomind.cc/2026-08-13-sed-rebuilding-the-cloud-for-ai-agent-code","description":"Render 创始人兼 CEO Anurag Gohl 对谈 Sean Falconer，讲为什么 Kubernetes 逼每家公司自建内部平台，以及智能体成为一等用户后云该怎么变。","datePublished":"2026-10-03","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Anurag Gohl"},{"@type":"Person","name":"Sean Falconer"},{"@type":"Organization","name":"Render"},{"@type":"Organization","name":"Stripe"},{"@type":"Organization","name":"AWS"},{"@type":"Organization","name":"Temporal"},{"@type":"Organization","name":"Heroku"},{"@type":"Organization","name":"Base44"},{"@type":"Thing","name":"Kubernetes"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"持久化执行 (durable execution)"},{"@type":"Thing","name":"裸金属 (bare metal)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"基础设施即代码 (infrastructure as code)"},{"@type":"Thing","name":"DevOps"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"当 AI 智能体成为云的主要用户：Render CEO 谈云的下一次重建","item":"https://talk.solomind.cc/2026-08-13-sed-rebuilding-the-cloud-for-ai-agent-code"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当 AI 智能体成为云的主要用户：Render CEO 谈云的下一次重建</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 当 AI 智能体成为云的主要用户：Render CEO 谈云的下一次重建

<div class="pd-byl"><b>Anurag Gohl</b> · Render 创始人兼 CEO · 2026-10-03</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-13-sed-rebuilding-the-cloud-for-ai-agent-code.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">是的，我在 Stripe 期间，工程团队一直有大约 15% 到 20% 仅仅是在管理 AWS 上的 VM 以及围绕它的所有复杂性，存储和网络。</div><div class="a">— Anurag Gohl <button class="pd-ts" data-t="02:18" data-who="Anurag Gohl" data-en="Yeah, so at all times when I was at Stripe, around 15 to 20% of the engineering team was simply managing VMs on AWS and all the complexity around that, storage and networking." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Anurag Gohl]] · [[Sean Falconer]]
>
> **公司** [[Render]] · [[Stripe]] · [[AWS]] · [[Temporal]] · [[Heroku]] · [[Base44]]
>
> **概念** [[Kubernetes]] · [[智能体]] · [[MCP]] · [[持久化执行]] · [[裸金属]] · [[护栏]] · [[基础设施即代码]] · [[DevOps]]

这一集聊的是一件正在悄悄发生的事：云是被人类开发者的习惯塑造的，但现在越来越多的代码由 LLM 生成、越来越多的服务由 AI [[智能体|智能体]]启动和关闭——云是否需要为机器操作者重建？主角是 [[Anurag Gohl|Anurag Gohl]]，[[Render|Render]] 的创始人兼 CEO，Render 是一个帮应用开发者托管部署的云平台。

他是 [[Stripe|Stripe]] 的第八号员工，亲眼看着顶级工程团队把 15% 到 20% 的工程师耗在「只是让 [[AWS|AWS]] 上的虚拟机能跑起来」上，这段经历直接催生了 Render。而他最反直觉的判断是：**AI 智能体不会拯救 AWS，反而会抛弃它**——因为智能体永远倾向于用最省 token、步骤最少的方式达成结果，而在 AWS 上做同一件事要多配几千个变量、多几十倍出错机会。

## Stripe 都逃不掉的云复杂性问题

Anurag 在 Stripe 期间，工程团队始终有 15% 到 20% 在管理 AWS 上的虚拟机、存储、网络和负载均衡——而且随着规模增长，这件事从不变简单，只会不断招人。他的推理是：Stripe 是世界上最好的工程组织之一，连它都解决不了这个问题，那这个问题必然影响所有人。

到了 2016、2017 年容器化兴起，大家以为能解脱，结果只是换了个更复杂的依赖：[[Kubernetes|Kubernetes]](一套编排容器的系统，管着你的应用怎么部署、扩容、联网)。他列出的清单很具体：应用一变大，你就要配服务间通信规则、CI/CD(持续集成/持续部署，代码推送后自动测试上线)要按特定方式运作、某些环境要保护、某些服务不能暴露到公网、全套可观测性要跟上。

而且出事时你必须理解 Kubernetes 底层才能定位——「是这个网络策略变更导致了这个 DNS 错误」。即使在所谓「托管 Kubernetes」上，你还是要手写大量 YAML(一种描述配置的文本格式)来描述 Kubernetes 的内部概念本身。

应用增长后还会撞上从没见过的瓶颈：突然内部 DNS 流量爆炸，CoreDNS(集群内部域名解析服务)不工作了，谁来管？只能你自己去研究怎么配。再往下一层还有虚拟机打补丁、节点池配置、为 Kubernetes 喜欢的冗余容量买单——很多公司最终在大量闲置的 Kubernetes 容量上花掉远超必要的钱。

他还有一个尖锐观察：**每一家跑在 Kubernetes 上的公司，最终都会自建某种版本的内部 PaaS(平台即服务)，而且长得都差不多**。为什么坚持自己造？

一半是「我们以前就这么干」的惯性，一半是代际因素——很多人就是用 AWS 的工具学会云的，Kubernetes 只是我们最终陷入的状态。就像早期的 Auth(登录鉴权)，每家公司每个工程师都写了八遍，直到有服务把它接走。

## 为什么现在是拐点：DevOps 团队被压垮了

这个多年不变的局面正在快速崩塌，动力是 AI。「有这么多更多的人在用 AI 构建更多的应用程序，以至于用 [[DevOps|DevOps]] 团队静态管理集群这整个理念正在崩塌」——DevOps 团队在各处被拉扯到超出负荷，光是核心应用都跟不过来，其他所有人还在排队等「我还有个应用想搭起来」。主持人 Sean 补了一个很好的结构解释：传统开发流程里「写代码」是最慢的环节，其他环节可以跟着慢；现在代码生成被压缩了，慢下来变成瓶颈的恰恰是平台运维。

这也解释了 Render 的增长数据：过去两年的增长超过了之前六年的总和，而且现在来的客户很多**已经有现成的 DevOps 团队**——两年前不是这样的。

## PaaS 的天花板问题与「复杂度渐进式披露」

对 PaaS 最经典的批评是「公司总会长大到超出它，最后还是得自己去拧旋钮」。Anurag 的回应分两层。

第一，对市面上大多数应用，你真的不需要 Kubernetes；Render 的打法是持续抬高平台上限，「确保你永远不会超出这个平台」。证据是 OpenAI 和 Stripe 都是 Render 的客户，还有 [[Base44|Base44]]——世界上最大的 vibe coding 平台之一，web 应用的全部计算都跑在 Render 上，被 Wix 收购、能用 Wix 内部可访问 AWS 的庞大 DevOps 团队之后，仍然选择留在 Render。反例是 [[Heroku|Heroku]]:内存拿不到超过 14 GB、应用每 24 小时强制重启、自助版没有私有网络、数据不能存磁盘——太多原因让你很快就得搬走。

第二层是产品方法论，他称之为**复杂度的渐进式披露**——像电子游戏一样，第一关只给你有限操作，熟练了再解锁。具体做法：有个复杂客户想要「像用 AWS 那样起一台虚拟机装东西」，Render 用一次 API 调用就能做到，但因为大多数用户不需要，这个控制项只放在 REST API 里、不上仪表盘。核心原则是：想清楚谁需要某个东西、他们使用的表面积有多大，把功能以完全产品化、完全受支持的方式暴露出来，但不必让每个人都时刻面对它。

他还划了一条清晰的边界：Render 是为**应用工程师**构建的，不是为 DevOps 人员；如果你在造数据库这类要深入底层的基础设施公司，「那你就不应该用 Render」。但如果你在做标准的 AI 原生公司或 SaaS,「有 95% 的概率你不需要去用 AWS」。

## 让智能体成为一等用户：MCP、护栏与撤销机制

现在很多人在用 Claude 或 Codex 管理 Render 部署，Render 为此提供了 skills 和 [[MCP|MCP]] server(MCP 是让 AI 模型调用外部工具的标准协议)，复杂性被隐藏得更远——智能体甚至可以自己生成 Render 的[[基础设施即代码|基础设施即代码]]格式 blueprints,用户不需要知道 blueprint 长什么样。MCP server 暴露的关键能力是拉取日志、部署数据和指标来排查失败的部署，很多用户在「快速推代码、看结果」的开发循环里靠它调试，Claude 能把部署和生产环境发生的事关联起来。主持人也印证了这个趋势：在 Confluent,MCP server 的头号用途除了探索数据就是调试，甚至有客户把「对智能体调试的支持」写进采购合同。

但智能体操作基础设施需要全新的安全设计。Anurag 给了两个具体机制：

- **延迟删除做撤销**：智能体要删一个没人用的数据库，可以告诉它「已删除」，但实际把数据库保留 30 分钟到 24 小时，期间任何人都可下恢复命令。
- **基础设施即代码当回滚手段**：智能体删了挂自定义域名的 web 服务、流量瞬间归零怎么办？Render 的 blueprints 让你几行代码定义所有服务，把服务原样加回来——和「代码改动引发 bug 就回滚改动」是同一个逻辑。

进一步的[[护栏|护栏]]正在构建：识别出用户是智能体后，可以设规则——达到某个严重程度或成本水平，就必须有人类在环里批准。成本护栏尤其重要，「你不会想要不小心启动了什么东西，结果突然收到一笔巨额账单，只因为某个智能体做了一个不一定正确的决定」。

至于仪表盘会不会被智能体接口取代？他的答案是不会，两边都在加大投入：为特定工作流设计的、信息密集的可视化视图，往往比通过 Claude 或文本化的 MCP 更高效；开发者只是多了一个界面，写代码时用 MCP,出了事还是会进仪表盘看全量指标和日志。

## 下注 bare metal:为了控制，不只是成本

一处时间线更正：客户工作负载迁到 [[裸金属|bare metal]](裸金属，直接跑在物理机而非虚拟机上)是大约一个月前才开始的，此前一直在准备。驱动力是安全而非省钱：云端越来越多代码是不受信任的，必须跑在 micro VM(微型虚拟机，极轻量的隔离环境)里，而像 Firecracker 这类 micro VM 配 KVM hypervisor(虚拟机监控器)时，直接跑在裸金属上比嵌套在虚拟机里性能好得多。

自有机 metal 换来的是深度控制：自己调整 hypervisor、按 Render 自己的工作负载特性控制机器的各个元素；长远看甚至想做机架级放置——把应用和数据库放同一机架，而这是 AWS 给不了的。而且 AWS 的 metal 机器只有一种规格，没法更大也没法更小。

## Render Workflows:AI 时代逼出来的持久化执行

应用的本质变了。过去异步任务简单到「发一封邮件、处理一笔支付」，现在一个智能体应用，第一个请求拉 10 条记录、下一个拉 400 条；任务可能是网页抓取、无头浏览器，或者要 128 GB 内存的数据处理——异步任务变得极度多样和异构，用传统后台 worker 加队列来搭已经非常吃力。这就是[[持久化执行|持久化执行]](把一串任务的状态保住、失败可重试、跨任务延续)在过去一年终于火起来的原因。

Render Workflows 的做法：用代码定义任务(Render SDK 触发)，Render 替你处理全部执行——不用搭 worker、不用搭队列，按任务执行时间收费，内存可以定义到任务级别。他直接对比 [[Temporal|Temporal]](最流行的持久化执行框架)：Temporal 学习曲线非常陡，你必须改造应用去匹配它的工作方式，可你需要的可能只是重试、可观测性和一个任务序列；而且 Temporal 不帮你管算力，你还是得自己设计 worker 池——「你的 worker 池应该多大？

一直运行着但有没有被利用？」——和 Kubernetes 是同一类问题。

Workflows 是端到端自研，没 fork 任何东西，底层状态管理主要靠 Postgres,部分用了 Redis。他判断持久化执行会变成像 Postgres 一样的云基础原语：「无论你用哪家云，你都必须有这么一个原语，因为这是人们构建应用的一种全新模式」。

## 为什么智能体会抛弃低层云

这集的核心论点收束在这里。有人说「智能体会让 AWS 变得好用」，Anurag 不担心：「我认为智能体会倾向于以最省 token 的方式达成某个结果。

它们是结果驱动的」。在 Render 上启动一个 web 服务是一次调用、确定性强；在 AWS 上同一个目标，智能体要决定起什么 VM、选什么套餐、接一堆线，每一步都要等资源起来，甚至可能要先拉起一整个 Kubernetes 集群——步骤越多，任何一步出错的概率越大，和用户的来回确认也越多。token 经济在加速这个判断：「token 的免费午餐时代已经结束了」，公司在新闻里一个月烧光全年 token 预算还说不清 ROI,必然会寻找不那么贪婪吞 token 的替代方案。

往前看三到五年，他的愿景是：云端运行大量即时生成、无人审阅的代码，因此一切都要跑在沙箱里，治理需求全面上升——而今天的云因为「人类信任人类」根本不存在全面治理；新的内核漏洞每周都在出现，「除非你自己拥有 AI 驱动的防护，否则你真的无法防范 AI 驱动的漏洞利用」；供应链攻击之后，还会有尚未被发明的、攻击基础设施栈另一部分的动态网络攻击。他的结语很坦率：「云会变得更加可怕，但我只是希望这一切最终还能正常运转。」

最后一个值得记住的数据点：Render 截至 6 月每周有超过 40 万开发者注册，平台上运行着接近 1000 万个活跃服务，正经历史上最快的营收增长。新用户的构成在变：一大批「能看懂伪代码、能看懂 Claude 在干什么」的准技术人员涌进来，还有人在用 Claude 和 Codex 自学编程——产品经理是典型：有技术底子、读过计算机科学、但没以写代码为职业，现在他们在构建以前不可能构建的应用。「软件开发者的定义正在扩展」，而这些新开发者是在一种新的云上被训练出来的，不是当年的 AWS。

## 本集带走

- **手写 YAML 管理基础设施的模式正在瓦解**：Stripe 这样的顶级团队曾把 15-20% 的工程师耗在管 AWS 上，而 AI 让应用生成速度快过 DevOps 团队的承载极限——这正推动团队从自建 Kubernetes 迁向高层平台。
- **判断要不要低层控制，看你在造什么**：应用公司(SaaS、AI 原生)大概率不需要碰 VM 和 Kubernetes;造数据库等基础设施的公司才需要深入到底层。
- **产品上用「复杂度渐进式披露」**：简单需求给默认体验，复杂控制放进 API 层按需暴露——不逼所有人面对全部复杂度，也不设死天花板把客户赶走。
- **给智能体设计基础设施要三件事**：可回滚(延迟删除、基础设施即代码快速重建)、成本护栏(超阈值要求人类批准)、快(构建部署越快，智能体越偏好你)。
- **智能体选工具的标准是省 token、步骤少、确定性强**：一次 API 调用比在低层云上配几千个变量、几十步操作更有竞争力——这是高层平台的结构性机会。
- **持久化执行正在成为云的基础原语**：AI 应用的异步任务高度异构(抓取、浏览器、大内存计算)，传统 worker+队列已不够用，按任务定义资源和重试的模式会像 Postgres 一样普及。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">是的，我在 Stripe 期间，工程团队一直有大约 15% 到 20% 仅仅是在管理 AWS 上的 VM 以及围绕它的所有复杂性，存储和网络。</span>  
> *Yeah, so at all times when I was at Stripe, around 15 to 20% of the engineering team was simply managing VMs on AWS and all the complexity around that, storage and networking.*  
> <span class="qm">—— Anurag Gohl · [02:18]</span> ^q1

> <span class="qz">你可以赋予应用开发者与世界上最有成就的世界级内部 DevOps 团队同等的能力，而且可以以一种对他们来说完全自助的方式做到。</span>  
> *You could give application developers the same powers that they would get from the most accomplished world-class internal DevOps team, and you could do it in a way that was entirely self-serve for them.*  
> <span class="qm">—— Anurag Gohl · [03:57]</span> ^q2

> <span class="qz">你不能真正用 AI 来构建你的 Kubernetes YAML,因为 AI 会犯错，而当它犯错时你必须能够理解，因为某个东西会在凌晨 2 点停止工作，然后 AI 其实没办法告诉你</span>  
> *You can't really build your Kubernetes YAMLs using AI because AI makes mistakes and you have to understand when it does make a mistake because something will stop working at 2 a.m. at night and then AI won't really be able to tell you*  
> <span class="qm">—— Anurag Gohl · [08:36]</span> ^q3

> <span class="qz">因为那东西就是你用 AI 写的，你完全不知道它是怎么工作的，而在有东西宕机的时候，你肯定不想用 vibe coding 的方式来搞你的基础设施。</span>  
> *Because you just wrote it with AI, you have no idea how the thing works, and then you don't really want to be vibe coding your infrastructure when something's down.*  
> <span class="qm">—— Anurag Gohl · [08:51]</span> ^q4

> <span class="qz">部分原因是——很抱歉我又要提到 AI——有这么多更多的人在用 AI 构建更多的应用程序，以至于用 DevOps 团队静态管理你的集群这整个理念正在崩塌。</span>  
> *Partly because, and I'm sorry to bring up AI again, but so many more people are building so many more applications with AI that this whole notion of statically managing your cluster using a DevOps team is breaking down.*  
> <span class="qm">—— Anurag Gohl · [10:50]</span> ^q5

> <span class="qz">是的，很多人都在谈论围绕这些东西的护栏，但我认为从基础设施角度，成本方面也需要护栏，因为你不会想要不小心启动了什么东西，结果突然收到一笔巨额账单，只因为某个智能体做了一个不一定正确的决定。</span>  
> *Yeah, I mean, a lot of people talk about guardrails around these things, but I think from infrastructure, guardrails around the cost as well, because you don't want to accidentally spin up something that suddenly you have a huge bill for because some agent made a decision that was not necessarily the right decision.*  
> <span class="qm">—— Sean Falconer · [22:56]</span> ^q6

> <span class="qz">智能体也总会更倾向于 Render 这样的更高层系统来启动一个 web 服务或启动一个工作流，因为试图在 AWS 上做这件事会花更长时间，因为你必须把一堆东西接线到一起，而每个东西都要花一段时间才能起来。</span>  
> *Agents will always prefer higher level systems like Render to spin up a web service or spin up a workflow because trying to do that on AWS will take much longer because you have to wire up a bunch of things together and each thing takes a while to come up.*  
> <span class="qm">—— Anurag Gohl · [40:40]</span> ^q7

> <span class="qz">问题，因为我们今天已经看到每周都有一个新内核漏洞被披露，而除非你自己拥有 AI 驱动的防护，否则你真的无法防范 AI 驱动的漏洞利用。</span>  
> *issues because again we're seeing that today a new kernel exploit is coming out every week and you really can't protect yourselves against AI-driven exploits unless you have AI-driven protections yourself.*  
> <span class="qm">—— Anurag Gohl · [44:37]</span> ^q8

> <span class="qz">所以很多新开发者实际上是在一种新的云上被训练出来的，而不是像当年的 AWS。</span>  
> *So many new developers are really being trained on a new kind of cloud as opposed to AWS back in the day.*  
> <span class="qm">—— Anurag Gohl · [48:06]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-26-talks-the-building-blocks-of-gtm-orchestration|RAMP 的 GTM 编排实验：一句话意图，全渠道自动执行]]<span class="pd-rz">同公司:Temporal · 同概念:MCP、护栏 (guardrails)、持久化执行 (durable execution)、智能体 (agent)</span>
- [[2026-09-01-talks-when-ai-agents-pay-and-sellers-monetize|机器人流量已超人类：当 AI 智能体开始自己付钱]]<span class="pd-rz">同公司:AWS、Stripe · 同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-09-14-eyeonai-the-hidden-algorithm-that-decides-which|当 AI 决定买什么软件：G2 的「信任层」生意]]<span class="pd-rz">同公司:Claude · 同概念:MCP、护栏 (guardrails)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Render、Claude、Codex · 同概念:MCP、智能体 (agent)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同公司:Codex · 同概念:护栏 (guardrails)、智能体 (agent)、MCP</span>
- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同公司:Claude · 同概念:MCP、智能体 (agent)、Kubernetes</span>

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
