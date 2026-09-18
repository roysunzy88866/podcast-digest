---
title: 应用公司如何低成本建自己的AI研究实验室：Harvey 的实战手册
podcast: 精选演讲
date: 2026-09-18
source_url: undefined
duration: "29:16"
type: episode
cover: "#64748b"
description: Harvey 联合创始人 Gabe 分享应用层公司如何借力前沿生态系统，构建基准数据集、与实验室合作后训练、并在生产环境大规模部署模型。
host: "[[Gabe Pereyra]]"
companies: ["[[Harvey]]"]
concepts: ["[[后训练]]", "[[基准测试]]", "[[合成数据]]", "[[开源模型]]", "[[智能体]]", "[[RL 环境]]", "[[模型路由]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-11-talks-how-harvey-built-a-research-lab-on-a-bud#post","headline":"应用公司如何低成本建自己的AI研究实验室：Harvey 的实战手册","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-11-talks-how-harvey-built-a-research-lab-on-a-bud","mainEntityOfPage":"https://talk.solomind.cc/2026-08-11-talks-how-harvey-built-a-research-lab-on-a-bud","description":"Harvey 联合创始人 Gabe 分享应用层公司如何借力前沿生态系统，构建基准数据集、与实验室合作后训练、并在生产环境大规模部署模型。","datePublished":"2026-09-18","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Gabe Pereyra"},{"@type":"Organization","name":"Harvey"},{"@type":"Thing","name":"后训练 (post-training)"},{"@type":"Thing","name":"基准测试 (benchmark)"},{"@type":"Thing","name":"合成数据 (synthetic data)"},{"@type":"Thing","name":"开源模型 (open source models)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"RL 环境 (RL environments)"},{"@type":"Thing","name":"模型路由 (model routing)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"应用公司如何低成本建自己的AI研究实验室：Harvey 的实战手册","item":"https://talk.solomind.cc/2026-08-11-talks-how-harvey-built-a-research-lab-on-a-bud"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>应用公司如何低成本建自己的AI研究实验室：Harvey 的实战手册</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 应用公司如何低成本建自己的AI研究实验室：Harvey 的实战手册

<div class="pd-byl"><b>Gabe Pereyra</b> · Harvey 联合创始人兼总裁 · 2026-09-18</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-11-talks-how-harvey-built-a-research-lab-on-a-bud.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果你是一家应用层公司，与前沿实验室竞争是一场不公平的游戏。有富有的团队，有贫穷的团队，然后还有我们这些应用层的。</div><div class="a">— Gabe Pereyra <button class="pd-ts" data-t="00:51" data-who="Gabe Pereyra" data-en="And it's an unfair game competing with the Frontier Labs if you're an application layer company. There are rich teams, there are poor teams, and then there's us in the application layer." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Gabe Pereyra]]
>
> **公司** [[Harvey]]
>
> **概念** [[后训练]] · [[基准测试]] · [[合成数据]] · [[开源模型]] · [[智能体]] · [[RL 环境]] · [[模型路由]]

应用层公司想自己做模型研究，和前沿实验室（那些拥有海量资金、人才、算力和数据的顶尖 AI 公司）竞争，看起来是一场不公平的游戏。这一集的演讲者是 Gabe，[[Harvey|Harvey]] 的联合创始人兼总裁，早年做过 DeepMind 的研究科学家。

Harvey 是服务大型律所和企业法务的 AI 公司。他的核心主张是：靠「前沿生态系统」，应用公司今天也能做出前沿水平的智能——这套打法分为三步：建基准和数据、与实验室合作做[[后训练|后训练]]、在生产环境把模型服务好。

## 第一步：先建基准，专家引导合成数据

没有好的[[基准测试|基准测试]]（benchmark，用来客观衡量模型能力的标准化考题）就没法训练模型——这是整条链路的地基。Harvey 今年发布了三个数据集：Legal Agent Bench（大律所初级律师任务的分类体系，涵盖起草基金设立文件、判例法研究等复杂任务）、一个教会[[智能体|智能体]]做法务谈判的合同数据集，以及他最兴奋的大型尽调（尽职调查，收购前对目标公司的全面审查）数据集——最大的数据室（data room，交易中所有合同与文件的总集）有 8000 万 tokens，是已发布的最大的 RL 环境（[[RL 环境|强化学习环境]]，让模型在其中反复练习并打分的场景）之一。

最大的难题：Harvey 服务顶级律所，客户数据受特权保护、极度敏感，不能拿来训练——连放进自己的模型都不行。今年真正跑通的办法是**领域专家引导[[合成数据|合成数据]]生成**。

核心团队的 Brendan 打了个类比：就像工程师现在不再手写代码而是 vibe code（用自然语言引导 AI 写代码），Harvey 的律师也开始这样「引导」数据生成。Gabe 的弟弟是 Harvey 的律师，他培训了其他律师使用编码模型，能生成极其逼真的训练与评测数据集。

Q&A 里他讲了最巧的一个案例：法律训练数据以前是无解的——公开的只有最终成果（比如购买协议），输入数据全不公开，而且真实数据室可能有一万份合同、必须相互契合，让律师手工造假数据室根本不现实。律所的 Julio 想出的办法是**从评分标准（rubric）倒着生成**：先埋好数据室里所有的问题（哪些合同对不上、哪份缺失）、检查项和场景，再据此生成整套数据，用 Mercor 和 Snorkel 把合同做得逼真。

这样模型生成尽调备忘录后，就能对照检查「我们埋的问题你抓住了几个」。这破解了以前的死循环：律所说「先证明给我看」，Harvey 说「给我们数据」，律所说「不行」——现在不需要客户数据就能证明了。

注意他说了：**合成数据还不够好，但它是入门方式**。之后与 Mercor、Snorkel 合作放大流程、构建更大的训练集。数据集变大后评估成本飙升——尽调数据集有超过一千个单元测试、用「LLM 当裁判」给模型输出打分，做大模型 rollout 非常烧钱，所以还要和 LangChain 等合作把这些环境做高效。

开源这些数据集当时有争议，但理由很硬：除非很多人在你的数据集上训练，否则你不知道它好不好。他引自己在 Google Brain 和 DeepMind 的经验：最好的数据集都是开放的（ImageNet、CIFAR、MNIST），问题会被暴露出来。他们收到大量 pull request 和建议，越来越多实验室发布新模型时在他们数据集上做基准，而且「最重要的是，Elon 转发推文了」。

## 第二步：与多家实验室合作做后训练

为什么现在做后训练（post-training，在预训练模型基础上用自己的数据继续调教）值得了？因为过去预训练进步太快，你做的后训练很快被下一个预训练模型吸收掉；但现在 Kimi3、GLM 5.2、Nemotron 等开源基础模型已经足够强，针对特定任务后训练能逼近前沿智能——不是通用前沿智能，但在具体任务上有竞争力。

入门方式是和实验室合作：他们有现成的专业知识、基础设施和配方；如果你跟他们合作还得不到更好结果，多半是你的数据集有问题。具体合作包括：与 Fireworks 训练 GLM 5.1 使用顾问模型、与 Base 10 做 KV 压缩、与 Engram 做企业搜索与公司知识、与 Trajectory 训练 Nemotron、与 Applied Compute 做 Vault 产品。

**为什么要同时和多家实验室合作，而不是只挑一家？**因为研究项目比内部加单家实验室的带宽多，每家押注方向不同、研究思路不同、想训的[[开源模型|开源模型]]也不同——合作越多学到越多。

而且现在自己做后训练也前所未有地容易：Tinker 这样的 API、Fireworks 和 Base 10 建好的基础设施，加上后训练人才越来越多。受 Cursor 启发，这些努力的终局是打造他们自己版本的 Composer 1——把合成数据、Mercor 扩展、实验室合作打包成一个能与闭源模型并肩部署的自有模型。

## 第三步：先把服务基础设施建好，再谈训练

Gabe 特别强调：别把应用公司想成「调一个模型端点的聊天产品」。Harvey 在 60 个国家运营、多个产品界面、客户各有模型偏好，仅闭源模型就要大规模服务：每个模型家族部署多个模型、跨提供商设备选方案（fallback）以保证 SLA。这套基础设施必须在考虑后训练**之前**就位——后训练模型和普通模型走的是同一套评测与监控体系。

新模型（开源、闭源、自训）投不投产，靠一套分级闸门：投产前有实验室基准快速判断它是不是前沿模型、法律领域哪些方面强；有人工并排对比；每个产品界面有关键用户旅程和自动化产品测试（因为通用能力强的模型未必适配具体产品）；再加人工产品测试，以及成本、延迟、区域可用性的启发式规则。投产后：大变更做 A/B 测试、追踪用户参与度、看正常运行时间和 token 效率，以及他称之为「愤怒的客户邮件」的产品反馈。

闸门的作用 Q&A 里有精彩说明：基准上表现不好的模型不太可能走得更远；但基准也会漏——模型可能在基准上过拟合，放进通用助手类产品、一超出分布就崩了。各阶段闸门就位后，哪里出问题会变得很明显。他还点明了一个前提：Harvey 是先用闭源模型找到产品市场契合、产品被生产环境使用多年，才建立起「端到端有效」的信心——后训练只是这个庞大系统的一个小输入，自训模型就当作「另一个新模型」喂进系统。

## 投入训练前，先做两个简单的开源替换

在服务模型之前还有更轻的起点：①**天真替换**——找产品里不需要最大模型的地方直接换开源模型，比如生成引用的部分换成 GLM 5.2，白拿成本或性能收益，顺便练出开源+闭源混合服务的能力；②**[[模型路由|模型路由]]**（按查询特征把不同请求分发给不同模型）——不能整体替换的地方，让特定查询路由到开源模型。

做完这些，后训练飞轮就转起来了：生产环境服务开源模型、收集反馈信号（注意他的警告：「收集反馈」绝不等于在客户数据上训练，而是从用户测试等渠道获得信号来指导未来数据集构建）。

## 尚未解决的三个难题

Q&A 中他坦承最大的开放问题：①**分布不匹配**——合成的尽调数据集再逼真也是「面向未来」的，产品实际用法五花八门（比如起草邮件），模型在尽调上强但换个任务可能就不行，而不看客户数据就没法弥合这个差距；②**长上下文管理**——8000 万 token 的数据室，模型目前管不好这种复杂环境，性能差距仍然很大；③**持续学习才是终局**——不是构建最好的法律模型，而是帮每家律所把系统定制成自己的工作方式：律所每处理一个客户事务、AI 系统就变好一点，同时保护客户数据。这是技术、运营和 AI 三重挑战。

## 与通用产品的竞争：从个人生产力到组织生产力

被问到如何与 Codex、Claude Code 这类通用产品竞争时，他的答案是**极度垂直**：通用产品聚焦个人生产力，而大律所的问题是「我有一万个客户项目要都做好、还要赚钱」——单个项目要做六个月、协调全所二三十人和所有外部方，越来越像「编排人类和智能体的项目管理」；组织层面则是一千个项目间的资源分配、计费与报价；财富 500 强客户更是同时对接一千家律所。这些是水平产品不会去做的东西。

招人方面他也承认犯过错：创业初期凭在实验室的人脉去挖人，但对方拿着一亿美元以上的薪酬包，规模完全不匹配。现在两个变化让事情可行：越来越多博士生和不愿去大实验室的人出现；更关键的是 Tinker、Fireworks 这类 API 让你不必自建训练和服务基础设施——他以前的室友曾在 OpenAI 负责后训练，是他共事过最好的研究员之一，而那种「训练+服务基建全要自建」的稀缺人才需求已经不存在了，人才池因此打开。

Gabe 用《点球成金》收尾：连胜 20 场不重要，赢得总冠军才重要——「但如果我们用这个预算、这支队伍赢了，我们就改变了整个游戏。」他认为前沿生态系统给了所有应用公司同样的机会。

## 本集带走

- **顺序别乱**：基准 → 数据 → 服务基建 → 开源替换/路由 → 后训练飞轮。服务与评测基建要在后训练之前就位，自训模型当成「另一个新模型」走同一套闸门。
- **训练数据没有？从评分标准倒着造**：先埋好任务里所有问题与检查项，再据此生成逼真输入数据，破解「要数据才证明、要证明才给数据」的死循环。
- **领域专家 + vibe code 式引导**可以批量产合成数据；它不够好但是起点，再用 Mercor/Snorkel 放大规模。
- **开源你的基准**：很多人用才能暴露问题，还能让实验室在新模型发布时帮你跑分。
- **别只签一家实验室**：各家押注不同、配方不同，合作越多学越多；Tinker/Fireworks 这类 API 又让你能逐步自训。
- **最轻的起步**：先找产品里不需要最强模型的地方直接换开源模型，再上模型路由——练出混合服务能力后再谈后训练。
- **小心基准过拟合**：基准只是闸门之一，通用产品表现、参与度、成本延迟、客户反馈都要看。

<div class="pd-sec pd-sec-q">全部金句 <span>13 条</span></div>

> <span class="qz">如果你是一家应用层公司，与前沿实验室竞争是一场不公平的游戏。有富有的团队，有贫穷的团队，然后还有我们这些应用层的。</span>  
> *And it's an unfair game competing with the Frontier Labs if you're an application layer company. There are rich teams, there are poor teams, and then there's us in the application layer.*  
> <span class="qm">—— Gabe Pereyra · [00:51]</span> ^q1

> <span class="qz">但今天，利用前沿生态系统，我认为你可以与前沿实验室竞争，并构建前沿智能。</span>  
> *But today, using the Frontier ecosystem, I think you can compete with the Frontier Labs and build Frontier Intelligence.*  
> <span class="qm">—— Gabe Pereyra · [01:37]</span> ^q2

> <span class="qz">如果你没有一个好的基准测试，你就无法训练模型。而如果你不能训练模型，你就不需要在生产环境中部署它们。</span>  
> *If you don't have a good benchmark, you can't train models. And if you can't train models, you don't need to serve them in production.*  
> <span class="qm">—— Gabe Pereyra · [02:07]</span> ^q3

> <span class="qz">我们与最大的律师事务所和企业合作，他们的法律数据极其敏感，受特权保护。所以你不能把它放进通用模型里——我们甚至不能把它放进我们自己的模型里。</span>  
> *We work with the largest law firms and enterprises, and their legal data is incredibly sensitive. It's privileged. And so you can't put it in generic models. We can't even put it in our models.*  
> <span class="qm">—— Gabe Pereyra · [03:21]</span> ^q4

> <span class="qz">就像现在的工程师不再写代码，而是 vibe code 并引导这些编码模型一样，我们也开始做同样的事情。</span>  
> *the same way that engineers now don't write code, they vibe code and guide these coding models, we're starting to do the same thing.*  
> <span class="qm">—— Gabe Pereyra · [03:48]</span> ^q5

> <span class="qz">过去做后训练是不值得的，因为模型通过预训练提升得太快，你做的任何后训练很快就会被下一个预训练模型吸收掉。</span>  
> *In the past, it wasn't worth doing post-training because the models were improving so quickly from pre-training that any post-training you did quickly got absorbed by the next pre-trained model.*  
> <span class="qm">—— Gabe Pereyra · [06:04]</span> ^q6

> <span class="qz">也许不是通用的前沿智能，但如果你有一个具体的任务，比如像我们这样，它们是有竞争力的。</span>  
> *Maybe not general frontier intelligence, but if you have a specific task like us, They are competitive.*  
> <span class="qm">—— Gabe Pereyra · [06:29]</span> ^q7

> <span class="qz">通常，如果你和他们合作却没能得到更好的结果，那很可能是你的数据集有问题。</span>  
> *And usually, if you work with them and you're not able to get better results, there's probably something you're doing wrong with your data set.*  
> <span class="qm">—— Gabe Pereyra · [06:50]</span> ^q8

> <span class="qz">然后我们称之为产品反馈。我称之为愤怒的客户邮件。</span>  
> *And then we call it product feedback. I call it angry customer emails.*  
> <span class="qm">—— Gabe Pereyra · [11:40]</span> ^q9

> <span class="qz">我认为我们选择法律领域的原因之一是，如果你只是构建一个这些顶级律所正在处理的真实客户案件，前沿模型仍然做不了这个。</span>  
> *And I think part of why we picked the legal domain is if you just build a realistic client matter that these top firms are working on, like the frontier model still can't do this.*  
> <span class="qm">—— Gabe Pereyra · [19:19]</span> ^q10

> <span class="qz">你可以有一个在我们基准测试上表现非常好的模型，但它们在某种程度上过拟合了，然后你把它放进一个更通用的助手类产品里，当你超出分布范围时它就有点崩溃了。</span>  
> *you can have a model that does very well on our benchmarks but they've overfit to some degree and then you put it in a more generic assistant like product and it kind of falls apart for when you go out of distribution*  
> <span class="qm">—— Gabe Pereyra · [22:29]</span> ^q11

> <span class="qz">但我认为找到某种形式的持续学习——这里的终局不是让我们构建最好的法律模型，而是帮助每家律所或企业客户把它定制成他们所做工作的类型。</span>  
> *But I think figuring out some form of continual learning is I think the endgame here is not for us to build the best legal model. It's for us to help every law firm or enterprise customer customize it to the type of work they're doing.*  
> <span class="qm">—— Gabe Pereyra · [26:15]</span> ^q12

> <span class="qz">就是你如何以一种水平产品不会去做的方式，极度垂直地深入你自己的领域？</span>  
> *is how do you just go hyper-vertical into your domain in a way that the horizontal products won't?*  
> <span class="qm">—— Gabe Pereyra · [29:05]</span> ^q13

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2025-12-02-talks-powering-the-ai-law-firm-with-harvey|Harvey 联合创始人 Gabe：产品就是模型，AI 律所的五年赌注]]<span class="pd-rz">同公司:Harvey、DeepMind · 同概念:后训练 (post-training)、强化学习环境 (RL environments)、智能体 (agent)</span>
- [[2024-06-21-talks-product-led-ai-mustafa-suleyman-on-defin|Mustafa Suleiman:数据是新的护城河——AI 创业者的机会地图]]<span class="pd-rz">同公司:DeepMind · 同概念:后训练 (post-training)、开源模型 (open source models)、智能体 (agent)</span>
- [[2026-08-12-talks-rl-environments-explained-how-ai-agents|RL 环境:让模型学会用你电脑上所有工具的数据生意]]<span class="pd-rz">同公司:Harvey · 同概念:合成数据 (synthetic data)、后训练 (post-training)、强化学习环境 (RL environments)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-12-07-lennys-surge-ai-edwin-chen|10亿收入不到100人:数据公司 Surge AI 如何逆行塑造 AI 未来]]<span class="pd-rz">同概念:后训练 (post-training)、基准测试 (benchmark)、合成数据 (synthetic data)</span>
- [[2026-07-30-cogrev-is-offense-or-defense-dominant-far-ai-s|AI 安全排行榜：谁扛住了越狱，谁没有]]<span class="pd-rz">同概念:后训练 (post-training)、智能体 (agent)</span>
- [[2026-08-19-bigtech-nick-bostrom-worries-about-ai-existentia|Nick Bostrom：智能体破笼之后，我们还能驾驭AI吗]]<span class="pd-rz">同概念:开源模型 (open source models)、智能体 (agent)</span>

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
