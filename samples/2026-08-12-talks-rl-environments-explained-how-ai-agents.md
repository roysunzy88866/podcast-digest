---
title: "RL 环境:让模型学会用你电脑上所有工具的数据生意"
podcast: 精选演讲
date: 2026-09-18
source_url: undefined
duration: "26:17"
type: episode
cover: "#64748b"
description: "Mercor 联合创始人 Brendan 讲解 RL 环境的构成、构建方法、定价逻辑,以及应用层公司如何借它训练属于自己的模型。"
host: "[[Brendan Foody]]"
companies: ["[[Mercor]]"]
concepts: ["[[RL 环境]]", "[[后训练]]", "[[验证器]]", "[[合成数据]]", "[[超长时程]]", "[[虚拟同事]]", "[[RLHF]]", "[[智能体数据时代]]", "[[基座模型]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-12-talks-rl-environments-explained-how-ai-agents#post","headline":"RL 环境:让模型学会用你电脑上所有工具的数据生意","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-12-talks-rl-environments-explained-how-ai-agents","mainEntityOfPage":"https://talk.solomind.cc/2026-08-12-talks-rl-environments-explained-how-ai-agents","description":"Mercor 联合创始人 Brendan 讲解 RL 环境的构成、构建方法、定价逻辑,以及应用层公司如何借它训练属于自己的模型。","datePublished":"2026-09-18","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Brendan Foody"},{"@type":"Organization","name":"Mercor"},{"@type":"Thing","name":"RL 环境 (RL environments)"},{"@type":"Thing","name":"后训练 (post-training)"},{"@type":"Thing","name":"验证器 (verifiers)"},{"@type":"Thing","name":"合成数据 (synthetic data)"},{"@type":"Thing","name":"超长时程 (Ultra Long Horizon)"},{"@type":"Thing","name":"虚拟同事 (virtual coworkers)"},{"@type":"Thing","name":"RLHF"},{"@type":"Thing","name":"智能体数据时代 (agentic data)"},{"@type":"Thing","name":"基座模型 (base model)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"RL 环境:让模型学会用你电脑上所有工具的数据生意","item":"https://talk.solomind.cc/2026-08-12-talks-rl-environments-explained-how-ai-agents"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>RL 环境:让模型学会用你电脑上所有工具的数据生意</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# RL 环境:让模型学会用你电脑上所有工具的数据生意

<div class="pd-byl"><b>Brendan Foody</b> · Mercor 联合创始人 · 2026-09-18</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-12-talks-rl-environments-explained-how-ai-agents.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">这就好比让一个人给自己的作业打分。</div><div class="a">— Brendan Foody <button class="pd-ts" data-t="05:12" data-who="Brendan Foody" data-en="It's as if you would be asking a human to grade their own homework." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Brendan Foody]]
>
> **公司** [[Mercor]]
>
> **概念** [[RL 环境]] · [[后训练]] · [[验证器]] · [[合成数据]] · [[超长时程]] · [[虚拟同事]] · [[RLHF]] · [[智能体数据时代]] · [[基座模型]]

这一集聊的是当下 AI 数据行业最热的方向:[[RL 环境|RL 环境]](让模型在模拟真实工作场景中反复练习、从打分中学习的训练环境)。主角是 [[Mercor|Mercor]] 的 Brendan——这家公司四个月内收入运行率从 10 亿美元涨到 20 亿美元,是各大前沿实验室和应用公司最大的智能体数据供应商,客户从 Harvey、Sierra、Cognition 到 RAMP <button class="pd-ts" data-t="00:00" data-who="嘉宾" data-en="Mercore, I think you guys grew from a $1 to a $2 billion revenue run rate in the last four months or so. So it's companies off to the races, and I think you are just so front and center to how companies are thinking about post-training their own models, building their own intelligence." aria-label="回原文"></button>。

先落地背景。数据市场 2020 年起步于众包时代:人工标注输入输出做监督微调,或从几个模型回答里挑更好的做 [[RLHF|RLHF]]。

2024 年起风向大转——低技能众包让位给「[[智能体数据时代|智能体数据时代]]」:找全世界技能最高的专家(软件工程师、律师、医生、银行家),组队为下一代模型构建前沿评测和 RL 环境。Mercor 的第一个大项目是 DeepResearch,被视为最早的知名 RL 智能体 <button class="pd-ts" data-t="00:42" data-who="嘉宾" data-en="So I'll be talking about RL environments. Starting out, I figured it's helpful to give a little bit of the background on the history of the data market and how that history ties into Mercor's origin story, where things really started in 2020 in the era of crowdsourcing data for behavior cloning." aria-label="回原文"></button>。

## RL 环境到底是什么:世界、应用、任务三件套

一个 RL 环境包含三部分 <button class="pd-ts" data-t="02:59" data-who="嘉宾" data-en="And of course, how this technology that started in the Frontier Labs is now getting disseminated to the application layer and all of the products that all of you are building as you work on your company." aria-label="回原文"></button>:
- **世界**:一个真实项目里会有的全部材料——消息、幻灯片、文档、表格等;
- **应用**:热门软件的高保真克隆版(如 Salesforce、ServiceNow、Microsoft 365),智能体可以通过 MCP、CLI 或 CUA 与之交互;
- **任务**:提示词加[[验证器|验证器]](可以是评分细则或单元测试),既用于评测也用于训练。

前沿实验室要自动化你笔记本上的一切,瓶颈就是如何覆盖经济中「所有世界、所有应用、所有任务」的完整分布 <button class="pd-ts" data-t="03:36" data-who="嘉宾" data-en="Verifiers could be rubrics or unit tests that can be used either for eval or training. And the barrier for Frontier Labs to automate everything that you can do on your laptop using Claude is how do they cover the full distribution of all of the worlds, all of the apps, and all of the tasks in the economy." aria-label="回原文"></button>。这件事规模惊人:劳动统计局的职业分类有 205 个领域,每个领域还要配上对应的应用、场景和任务。仅今年第二季度,Mercor 人才网络的专家投入就达 250 万小时,且增速还在加快 <button class="pd-ts" data-t="04:12" data-who="嘉宾" data-en="And so I put a graph here of the amount of expert hours of throughput from our talent network over the last 24 months. And it's a pretty crazy trajectory with respect to 2.5 million hours in Q2 alone." aria-label="回原文"></button>。

## 为什么大多数领域离不开人:模型没法给自己的作业打分

核心论点:**在大多数领域,只有人类能衡量智能的前沿** <button class="pd-ts" data-t="04:51" data-who="嘉宾" data-en="How do we have all of the apps corresponding to all of those jobs, all the different scenarios, all the tasks is this enormous build out. Only humans can measure the frontier in most domains, not every domain." aria-label="回原文"></button>。例外是数学这类有干净模拟环境的领域——对错一目了然,模型能从答案直接学习。

但像「做一份幻灯片」这种任务,模型极难可靠地识别自己哪里犯了错——「就好比让一个人给自己的作业打分」<button class="pd-ts" data-t="05:12" data-who="嘉宾" data-en="But in most domains like building a slide deck, the model has an incredibly hard time identifying reliably where it made its own mistake. It's as if you would be asking a human to grade their own homework." aria-label="回原文"></button>。所以需要人类像教授给论文定评分标准那样,创建评分细则。

构建验证器难在:你得理解完整的问题空间——哪 10 种幻灯片都是好路径?可能犯的几十种错误是什么?如何捕捉全部可能解的验证器?<button class="pd-ts" data-t="05:50" data-who="嘉宾" data-en="And then building these verifiers is hard because anytime you're building this slide deck, you need to understand the full problem space of what are the 10 different slide decks that could be a good path to go down?" aria-label="回原文"></button>

一个已开源的真实例子是法律环境:让顶级律所(如 Latham and Watkins)的律师写下自己经办过的真实项目场景,构建完整的数据室大纲(消息、邮件、文件及大小),渲染进 Google Workspace 克隆版里,再出题让模型作答——比如依据《石油与石油法》评估某两家公司间的最大总责任 <button class="pd-ts" data-t="06:37" data-who="嘉宾" data-en="And data is often the most differentiating factor. This is one that we published as a legal environment where we have lawyers from top law firms like Latham and Watkins write out a scenario of a real project that they worked on in their big law job." aria-label="回原文"></button>。专家再制定评分标准,要确保展开 100 条模型轨迹时打分全部准确——这在技术上极具挑战,需要大量研究和智能体质控 <button class="pd-ts" data-t="08:01" data-who="嘉宾" data-en="And making sure that these rubric criteria avoid reward hacking, and effectively align with the when you roll out 100 trajectories, making sure all of those scores are accurate is incredibly technically challenging." aria-label="回原文"></button>。

## 后训练真见效:1800 个任务,公司法从 4.7% 到 26.6%

环境建好后真能涨分。在一个 1800 个任务、约 50 万算力的[[后训练|后训练]]运行中(基座是 GLM 4.7),公司法成绩从 4.7% 提到 26.6%,而且**泛化到了没有数据室的 GDPVal 和 Apex V1 上**,在另一些基准上也有小幅提升 <button class="pd-ts" data-t="09:24" data-who="嘉宾" data-en="are pretty dramatic. Corporate law going from 4.7% to 26.6%. But notice that this is just the Apex agents data set we gave it, and it actually generalized incredibly well to GDPVal and Apex V1, which doesn't have these data rooms, even just seeing nominal gains and some other benchmarks as well." aria-label="回原文"></button>。

一个重要变量:GLM 5.2 和 Kimi K3 已登上 Mercor 的排行榜。Brendan 认为这给应用层公司在具体垂直领域实现前沿智能奠定了基础,「并不遥远」<button class="pd-ts" data-t="08:37" data-who="嘉宾" data-en="And as we can see, one of the big changes over the last few months is that GLM 5.2 and Kimi K3 are on the leaderboard. And so that is a huge opportunity for all of you because that gives us the foundation to actually achieve frontier intelligence and all of the specific applications and verticals that you're focusing on that's not too far away." aria-label="回原文"></button>。

他断言:Cursor 证明了应用层公司能造出行业领先的模型,未来 12 个月会出现几十个这样的例子——**公司拥有自己的智能,这将是护城河的关键来源** <button class="pd-ts" data-t="10:18" data-who="嘉宾" data-en="And I believe that Over the next 12 months, there's going to be dozens of examples just like that, where companies own their own intelligence, and that is the key source of the modes that they're building." aria-label="回原文"></button>。因为 AI 战略的三大支柱是算力、算法/研究员、数据集,而数据往往是最具差异化的那个 <button class="pd-ts" data-t="06:21" data-who="嘉宾" data-en="These are, of course, ones that we have open sourced and published to the world, but now that's all starting to get disseminated. to the application layer companies that are building and owning their own intelligence as they realize that the three core pillars of their AI strategy are their compute, their algorithms or researchers, and the data sets they build." aria-label="回原文"></button>。

## 数据怎么卖:三种模式和定价逻辑

Mercor 的三种售卖方式 <button class="pd-ts" data-t="10:37" data-who="嘉宾" data-en="A couple of examples of ways to curate high-quality data sets. The general three that we see most that I'm happy to talk about and send people links to is, first, by task is the most common." aria-label="回原文"></button>:
1. **按任务定制**(最常见):客户看中某种数据形态就说「每个任务付 2000 美元,给我扩到这个规模」。某些前沿实验室每月购买 5 万个任务;任务极复杂,有的要人类花长达一个月完成;
2. **现成数据**:Mercor 已投入数亿美元自建数据集卖给多个客户——新实验室尤其倾向这个,因为 10 家实验室各建一套没意义;
3. **只提供专家**:按小时计费,已非重点。Harvey 当年就是这么起步的(雇了一些律师),但客户最终都会转向技能型数据产品。

定价方法有两条线:一是**从客户目标往回推**——想在排行榜上到前沿,这事对你值多少钱?比如 NVIDIA 可能愿意花 10 亿美元拥有一个前沿开源模型;二是**成本加成**——一个要 10 小时人工、时薪 150 美元的任务,成本基础就是 1500 美元,再按差异化和前沿程度加利润率。任务单价从 50 美元到 10000 美元不等 <button class="pd-ts" data-t="12:50" data-who="嘉宾" data-en="So there's so many different ways. I mean, the most natural would be our customers care about model improvement, right? And so our customers have a given goal of they want to be at the frontier on a given leaderboard." aria-label="回原文"></button>。

## 数据质量的两个维度,以及「合成数据」的正名

「数据质量」其实指两件事 <button class="pd-ts" data-t="14:33" data-who="嘉宾" data-en="Second one was sort of, how do we compare the judgment of preference labels to the autograders? So they correspond, which is generally when people say data quality, they're referring to two things." aria-label="回原文"></button>:一是**真实性**——环境是否反映真实律师工作场景的分布,这正是专家写大纲、主导数据整理的原因;二是**验证器的准确性**——方法是「轨迹分析」:对目标模型展开 10 条轨迹打分,智能体质控系统加人工审查,确保评分与「让人类给这 100 条轨迹排名」的结论一致 <button class="pd-ts" data-t="15:51" data-who="嘉宾" data-en="And so you want to make sure that the way this rubric is doing the scoring is the same as if we were to just have human stack rank those hundred trajectories. And so what we do for that is a process called trajectory analysis, where we roll out 10 trajectories of the model that we're focused on improving." aria-label="回原文"></button>。

关于[[合成数据|合成数据]],Brendan 认为外界有很多误解:RLVR 本质上就是押注合成数据——展开一堆合成的模型轨迹而非让人写 SFT,打分后让模型从中学习 <button class="pd-ts" data-t="16:38" data-who="嘉宾" data-en="Go ahead. So the fascinating thing is I think that there's been a lot of misinterpretation of what people mean when they say synthetic data because like RLVR is a bet on synthetic data." aria-label="回原文"></button>。模型也深度参与填充环境和创建任务,就像律师写备忘录该用 Claude 一样。

但人类不可替代,因为「几乎从定义上说,你需要人类来衡量模型能力前沿之外的东西」——让模型自己评判自己的法律备忘录好坏,噪音太大、没有清晰信号 <button class="pd-ts" data-t="17:47" data-who="嘉宾" data-en="But the reason that humans are still an essential component of the process that's incredibly differentiated is that you need humans almost definitionally to measure what is beyond the frontier of the model capabilities." aria-label="回原文"></button>。这也是为什么最离不开人的环节是**任务创建**:让模型(比如要改进的那个模型本身)写自己错在哪的评分标准,大约一半对一半错,这种噪音量级从训练角度看完全行不通 <button class="pd-ts" data-t="21:59" data-who="嘉宾" data-en="It might get like half of them right and half of them wrong. And that amount of noise is unworkable from a training standpoint. And so that's the reason that the process that requires humans the most is the task creation." aria-label="回原文"></button>。例外:网络防御领域可以用攻击者/防御者智能体互搏做验证器,人只需架构真实环境 <button class="pd-ts" data-t="23:11" data-who="嘉宾" data-en="Is there a way to scale that up? I actually think cyber is one where you don't necessarily always need humans for the verifiers because you can have an attacker and defender agent." aria-label="回原文"></button>;弱模型也可以从强模型(如 Kimi K3)创建的任务中蒸馏学习。

## 挑基座模型的土办法:Pass@1 和 Pass@16 的差距

怎么判断数据集对某个[[基座模型|基座模型]]有没有训练价值?看 **Pass@16 与 Pass@1 的差距**(Pass@1 = 一次尝试就做对;Pass@16 = 展开 16 条轨迹里至少对一次):最理想是单次失败、但 16 次里能对上一两次——模型就能高效学习;如果 16 条全错、再展开 100 条才对一条,那基本没指望 <button class="pd-ts" data-t="24:31" data-who="嘉宾" data-en="Pass it 16 and the Pass it 1. If you have a model where you roll out 16 trajectories and it gets all of them totally wrong, it's sort of hopeless that the model is going to learn from that for the most part." aria-label="回原文"></button>。

## 往后看:超长时程和虚拟同事

两个最大的演变方向 <button class="pd-ts" data-t="19:58" data-who="嘉宾" data-en="And so there's going to continue to be this giant scale up of diversity across all three of these categories on a going forward basis, but there's going to be some changes to maybe name two of those changes that we're thinking about the most." aria-label="回原文"></button>:一是**[[超长时程|超长时程]]**——现在智能体大多没被训练做超过 10 小时的事,要开始为人类需要 100 甚至 1000 小时的任务构建训练;二是**[[虚拟同事|虚拟同事]]**——Brendan 喜欢问人:你工作中多大比例的任务需要与他人互动?多数人说 60-70%,但评估里衡量模型与人互动能力的只占约 1%,存在巨大的现实差距 <button class="pd-ts" data-t="20:38" data-who="嘉宾" data-en="Some people say a lot more, some people say a little bit less. But then if you map that on to what percentage of evals measure how well the models can interact with other people, it's like 1%." aria-label="回原文"></button>。

## 本集带走

- **RL 环境 = 世界 + 应用克隆 + 任务(提示词+验证器)**:想给自家领域做后训练,先盘清这个领域的真实材料、常用软件、任务类型各自长什么样。
- **模型打不了自己的分**:凡是没有干净验证信号的领域(做幻灯片、写法律备忘录),评分标准必须由超越模型前沿的人类专家来定;你的模型自己写「我错在哪」,一半对一半错,没法用于训练。
- **小数据也能大涨分,关键是泛化**:1800 个任务、约 50 万算力,让公司法从 4.7% 涨到 26.6%,还泛化到没训练过的基准上——垂直环境的杠杆比想象大。
- **挑基座看 Pass@1/Pass@16 差距**:单次全错、偶尔能对的数据集才有训练价值;16 条全错的组合基本无解。
- **下一个前沿**:超过 10 小时的超长时程任务,以及衡量「与他人协作」的评估(现实中六七成工作需要人际互动,现有评估只覆盖约 1%)。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">这就好比让一个人给自己的作业打分。</span>  
> *It's as if you would be asking a human to grade their own homework.*  
> <span class="qm">—— Brendan Foody · [05:12]</span> ^q1

> <span class="qz">在接下来的 12 个月里,将会出现几十个类似的例子,公司拥有自己的智能,而这正是他们所构建的护城河的关键来源。</span>  
> *Over the next 12 months, there's going to be dozens of examples just like that, where companies own their own intelligence, and that is the key source of the modes that they're building.*  
> <span class="qm">—— Brendan Foody · [10:18]</span> ^q2

> <span class="qz">像 NVIDIA 这样的公司,他们可能愿意花十亿美元拥有一个前沿开源模型。</span>  
> *NVIDIA, they're probably willing to pay a billion dollars to have a frontier open source model.*  
> <span class="qm">—— Brendan Foody · [13:14]</span> ^q3

> <span class="qz">我们的任务价格从 50 美元到 10000 美元不等。</span>  
> *We have tasks that range from $50 to $10,000.*  
> <span class="qm">—— Brendan Foody · [14:00]</span> ^q4

> <span class="qz">有趣的地方在于,我认为人们对「合成数据」的含义有很多误解,因为 RLVR 本质上就是一场对合成数据的押注。</span>  
> *So the fascinating thing is I think that there's been a lot of misinterpretation of what people mean when they say synthetic data because like RLVR is a bet on synthetic data.*  
> <span class="qm">—— Brendan Foody · [16:38]</span> ^q5

> <span class="qz">但人类仍然是这个过程中不可或缺且极具差异化的一部分,原因在于,几乎从定义上说,你需要人类来衡量模型能力前沿之外的东西。</span>  
> *But the reason that humans are still an essential component of the process that's incredibly differentiated is that you need humans almost definitionally to measure what is beyond the frontier of the model capabilities.*  
> <span class="qm">—— Brendan Foody · [17:33]</span> ^q6

> <span class="qz">比如现在,智能体大多没有被训练去执行超过 10 小时的事情。</span>  
> *Like right now, agents mostly aren't trained to do things that are over 10 hours.*  
> <span class="qm">—— Brendan Foody · [20:01]</span> ^q7

> <span class="qz">但如果把这一点对应到评估中,有多大比例的评估衡量模型与他人互动的能力,那大概是 1%。</span>  
> *But then if you map that on to what percentage of evals measure how well the models can interact with other people, it's like 1%.*  
> <span class="qm">—— Brendan Foody · [20:38]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-11-talks-how-harvey-built-a-research-lab-on-a-bud|应用公司如何低成本建自己的AI研究实验室：Harvey 的实战手册]]<span class="pd-rz">同公司:Harvey · 同概念:RL 环境 (RL environments)、合成数据 (synthetic data)、后训练 (post-training)</span>
- [[2025-12-02-talks-powering-the-ai-law-firm-with-harvey|Harvey 联合创始人 Gabe：产品就是模型，AI 律所的五年赌注]]<span class="pd-rz">同公司:Harvey · 同概念:RL 环境 (RL environments)、后训练 (post-training)</span>
- [[2026-07-25-twentyvc-20vc-mercor-cpo-on-revenue-concentration|Mercor CPO:开源模型蚕食不了数据生意]]<span class="pd-rz">同公司:Mercor · 同概念:RL 环境 (RL environments)、合成数据 (synthetic data)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-21-latent-jev|Jev 背后的人:Diogo 谈为什么 AI 应该像数据库而不是同事]]<span class="pd-rz">同概念:RLHF、合成数据 (synthetic data)</span>
- [[2025-12-07-lennys-surge-ai-edwin-chen|10亿收入不到100人:数据公司 Surge AI 如何逆行塑造 AI 未来]]<span class="pd-rz">同概念:后训练 (post-training)、合成数据 (synthetic data)</span>
- [[2026-07-30-cogrev-is-offense-or-defense-dominant-far-ai-s|AI 安全排行榜：谁扛住了越狱，谁没有]]<span class="pd-rz">同概念:后训练 (post-training)</span>

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
