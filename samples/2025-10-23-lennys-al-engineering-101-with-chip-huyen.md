---
title: Chip Huyen：别追 AI 新闻了，真正提升 AI 产品的是这些事
podcast: "Lenny's Podcast"
date: 2025-10-23
source_url: https://www.lennysnewsletter.com/p/al-engineering-101-with-chip-huyen
duration: "82:31"
type: episode
cover: "#6366f1"
image: "/covers/2025-10-23-lennys-al-engineering-101-with-chip-huyen.jpg"
description: 拆解构建 AI 应用最常见的认知陷阱，把精力放回数据准备、评估和系统思维。
host: "[[Chip Huyen]]"
cohosts: ["[[Lenny]]"]
companies: ["[[Cursor]]"]
concepts: ["[[后训练]]", "[[强化学习]]", "[[评估]]", "[[RAG]]", "[[数据准备]]", "[[测试时计算]]", "[[系统思维]]", "[[采样策略]]", "[[监督微调]]", "[[多模态]]", "[[vibe coding]]"]
category: 智能体
tags:
  - 智能体
  - 产品方法
socialImage: "https://talk.solomind.cc/covers/2025-10-23-lennys-al-engineering-101-with-chip-huyen.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2025-10-23-lennys-al-engineering-101-with-chip-huyen#post","headline":"Chip Huyen：别追 AI 新闻了，真正提升 AI 产品的是这些事","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2025-10-23-lennys-al-engineering-101-with-chip-huyen","mainEntityOfPage":"https://talk.solomind.cc/2025-10-23-lennys-al-engineering-101-with-chip-huyen","description":"拆解构建 AI 应用最常见的认知陷阱，把精力放回数据准备、评估和系统思维。","datePublished":"2025-10-23","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2025-10-23-lennys-al-engineering-101-with-chip-huyen.jpg","isBasedOn":"https://www.lennysnewsletter.com/p/al-engineering-101-with-chip-huyen","about":[{"@type":"Person","name":"Chip Huyen"},{"@type":"Person","name":"Lenny"},{"@type":"Organization","name":"Cursor"},{"@type":"Thing","name":"后训练 (post-training)"},{"@type":"Thing","name":"强化学习 (reinforcement learning)"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"数据准备 (data preparation)"},{"@type":"Thing","name":"测试时计算 (test time compute)"},{"@type":"Thing","name":"系统思维 (system thinking)"},{"@type":"Thing","name":"采样策略 (sampling strategy)"},{"@type":"Thing","name":"监督微调 (supervised fine-tuning)"},{"@type":"Thing","name":"多模态 (multimodality)"},{"@type":"Thing","name":"vibe coding"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Chip Huyen：别追 AI 新闻了，真正提升 AI 产品的是这些事","item":"https://talk.solomind.cc/2025-10-23-lennys-al-engineering-101-with-chip-huyen"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Chip Huyen：别追 AI 新闻了，真正提升 AI 产品的是这些事</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Chip Huyen：别追 AI 新闻了，真正提升 AI 产品的是这些事

<div class="pd-byl"><b>Chip Huyen</b> · 2025-10-23</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2025-10-23-lennys-al-engineering-101-with-chip-huyen.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我就会说，好吧，如果改进不多，那你为什么要花那么多时间去辩论那些对你的性能没有多大影响的事情？</div><div class="a">— Chip Huyen <button class="pd-ts" data-t="06:10" data-who="Chip Huyen" data-en="I was like, Okay, if it's not much improvement, then why do you want to spend so much time debating something that doesn't make that much difference to your performance?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Chip Huyen]] · [[Lenny]]
>
> **公司** [[Cursor]]
>
> **概念** [[后训练]] · [[强化学习]] · [[评估]] · [[RAG]] · [[数据准备]] · [[测试时计算]] · [[系统思维]] · [[采样策略]] · [[监督微调]] · [[多模态]] · [[vibe coding]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/al-engineering-101-with-chip-huyen)

<div class="pd-tldr"><b>一句话</b>拆解构建 AI 应用最常见的认知陷阱，把精力放回数据准备、评估和系统思维。</div>

很多团队不断追问「如何跟上最新 AI 新闻」「该选哪个技术栈」——但 [[Chip Huyen|Chip Huyen]] 拿出的对比清单很扎心：人们以为能提升 AI 应用的，是追最新动态、换框架、纠结数据库；而**真正**提升应用的，是和用户交谈、准备更好的数据、优化端到端工作流、写更好的提示词 <button class="pd-ts" data-t="05:11" data-who="Lenny" data-en="What people think will improve AI apps, staying up to date with the latest AI news, adopting the newest agentic framework, agonizing about what vector databases to use, constantly evaluating what model is smarter, fine-tuning a model." aria-label="回原文"></button>。如果你纠结的两个技术方案对最终性能影响很小，就不值得花大量时间去辩论 <button class="pd-ts" data-t="06:10" data-who="Chip Huyen" data-en="Right? I was like, &quot;Okay, if it's not much improvement, then why do you want to spend so much time debating something that doesn't make that much difference to your performance?&quot;" aria-label="回原文"></button>。

## 预训练、后训练与「采样」被低估的力量
模型本质上是在编码语言的统计信息：模型读了海量数据后，就能基于已输入的内容，预测下一个最可能出现的词（token，介于字符与词之间的语言单位）<button class="pd-ts" data-t="10:07" data-who="Chip Huyen" data-en="So, it's a way of encoding statistical information. So when language modeling, when you train a large amount of data, you see a lot of languages, a lot of domains." aria-label="回原文"></button>。**预训练**（Pre-training）用大规模数据提升模型的「通用能力容量」；但如今大家面临的瓶颈是，互联网上的高质量文本数据已经基本被耗尽，各家实验室获取的预训练数据高度同质化 <button class="pd-ts" data-t="15:03" data-who="Chip Huyen" data-en="And people text data max out. I think a lot of people are doing with other data like audios and videos, and everyone's trying to think of what is the new source of data, but where like post-trading, but middle course of this is more of everyone have very similar pre-training data, is that post-training is where they make a big difference nowadays." aria-label="回原文"></button>。因此，真正拉开差距的战场转移到了**[[后训练|后训练]]**（Post-training）。

后训练的一种常见方式是**[[监督微调|监督微调]]**：让专家写出高质量的问答范例，或者让已有的大模型生成答案，再训练小模型去模仿（这个过程也叫蒸馏）<button class="pd-ts" data-t="07:54" data-who="Chip Huyen" data-en="But right from what I heard, so I think it's like one is, supervised fine-tuning when you have demonstration data, and you have a bunch of experts, &quot;Okay, here's a prompt, and here is what the answer should be like.&quot;" aria-label="回原文"></button>。另一种方式是[[强化学习|强化学习]]，通过收集信号来奖励模型的正确输出。信号可以是人类反馈（让人类在两个回答中做相对比较，比打绝对分数更容易），也可以是可验证的奖励（比如做数学题，答案等于特定数值才算对）<button class="pd-ts" data-t="16:44" data-who="Chip Huyen" data-en="You can, okay, this one one's better than the other. And we do that is because as humans, we tend to, it's very hard to give a concrete score, but it's easier to do comparisons." aria-label="回原文"></button>。

此外，**[[采样策略|采样策略]]**（决定模型是永远选概率最高的词，还是选一些概率稍低但更有创意的词）是一个能极大提升性能、却被极度低估的杠杆 <button class="pd-ts" data-t="12:44" data-who="Chip Huyen" data-en="So I think my sampling strategy, I think is something extremely important. It can have you boost a performance in a huge way and very, very underrated. Okay, awesome." aria-label="回原文"></button>。

## 评估（Evals）：不是写不写，而是投资回报率
围绕[[评估|评估]]（evals，指衡量 AI 产品表现的方法）有个争论：有些顶尖公司主张凭感觉（vibe check），有些则追求严密测试。Chip Huyen 给出了非常务实的判断框架：**算投资回报率** <button class="pd-ts" data-t="25:13" data-who="Chip Huyen" data-en="So the traffic keeps increasing, people seem happy, people keep buying stuff and now here's our engineer coming like, &quot;Okay, we need eval for it.&quot; And it was like, &quot;Okay, how much effort do we need to go into eval?&quot;" aria-label="回原文"></button>。如果你的产品已经运转、用户在增长，抽调两名工程师花大量时间写评估，可能只把指标从 80% 提升到 85%；但如果把同样的精力用来上线一个全新功能，收益往往大得多 <button class="pd-ts" data-t="25:33" data-who="Chip Huyen" data-en="And the engineer would be like, &quot;Oh, maybe you can improve it from 80% to 82%, 85%.&quot; And it was like, &quot;Okay, but [inaudible 00:25:35] that two engineers and we going to launch a new feature, then it could give me so much more improvement.&quot;" aria-label="回原文"></button>。所以，非核心功能做到「足够好」就行。但如果你在运营大规模业务、出错会带来灾难性后果，或者产品本身就以准确率为核心竞争力，那你就必须对评估极其严苛 <button class="pd-ts" data-t="26:38" data-who="Chip Huyen" data-en="So yeah, so I do think eval is very, very important if you have, if you operate a scale and where failures can have catastrophic consequences. Then you do need to be very tyrannical about what you put in front of the users, understand different failure modes, what could go wrong and also maybe in a space when that it's a feature, the product is a competitive advantage." aria-label="回原文"></button>。

评估的数量也没有标准答案，核心是「覆盖度」。比如评估一个**深度研究**应用，你不能只看最终报告。

你要拆解它的每一步：它生成的搜索查询够多样吗？抓取的网页有重叠吗？

有相关性吗？每一步都需要不同的评估方法 <button class="pd-ts" data-t="31:06" data-who="Chip Huyen" data-en="[inaudible 00:31:06] different webpages. Okay, how much of them overlapping... Are we doing both the breadth, getting a lot of page, but also, do we have depth and also do you have relevance because if we come up with a search query, it's completely irrelevant to the original prompt." aria-label="回原文"></button>。

## RAG 的最大性能提升不在选数据库，而在数据准备
[[RAG|RAG]]（检索增强生成）就是为模型提供相关的外部上下文来辅助回答 <button class="pd-ts" data-t="32:46" data-who="Chip Huyen" data-en="I mean, obviously. So I think that's what RAG is, as a simplest sense, it's just providing the model with a relevant context so that it can answer the questions." aria-label="回原文"></button>。很多人在 RAG 上纠结该用什么向量数据库，但 Chip Huyen 观察到，决定答案纯质量的最大因素是**[[数据准备|数据准备]]**（当然，如果你对延迟有极致要求，数据库依然重要）<button class="pd-ts" data-t="34:39" data-who="Chip Huyen" data-en="Okay, so maybe before I go to the next thing, I just want to say this data preparations for RAG is extremely important. And I would say this in a lot of the companies that I have seen, that's the biggest performance, in their RAG solutions coming from better data preparations, not agonizing over what [inaudible 00:34:51] databases to use because [inaudible 00:34:53] database, of course is very important to care about things like latency or if you have very specific access patterns like read-heavy or write-heavy, of course, it's like it matters." aria-label="回原文"></button>。

具体怎么做数据准备？
- **切块设计**：文档切块不能太长（否则抓取不到足够多样的上下文），也不能太短（导致每个块信息量不足）<button class="pd-ts" data-t="35:28" data-who="Chip Huyen" data-en="Because if it's sort of think about it's a context you want to maximize, maybe you can, it's very simple example. You want to retrieve a thousand words. So if a data chunk is long, then it's more likely to contain more relevant metadata so it can retrieve more." aria-label="回原文"></button>。


- **改写文档格式**：有人直接把播客内容重写成「问答（Q&A）」格式，大幅提升了检索效果 <button class="pd-ts" data-t="36:19" data-who="Chip Huyen" data-en="Somebody was telling me just a very big performance they got is that from rewriting their data in the question-answering format. Instead of having... So they have a podcast instead of just chunking the podcast, you just reframe, rewrite it into here's a question, here's answers and produce a lot of them." aria-label="回原文"></button>。
- **为 AI 加注释**：人类专家看文档有常识和上下文，但 AI 没有。

比如文档写着某个参数输出是 1 或 -1，人类懂尺度，AI 却不知所云。加上一层专门给 AI 看的注释，能让它真正理解信息 <button class="pd-ts" data-t="37:17" data-who="Chip Huyen" data-en="As a library said okay, the output of this one is maybe talking for, I don't know, some crazy term, maybe some temperature or something on the graph. It should be like one zero or minus one." aria-label="回原文"></button>。

## 公司引入 AI：生产力难衡量，人才结构剧变
企业内部引入 AI 工具（比如编码智能体）最大的痛点是很难衡量生产力 <button class="pd-ts" data-t="43:36" data-who="Chip Huyen" data-en="The main thing is it's really hard to measure productivity again. So I talk to a lot of people on their website. First of all, [inaudible 00:43:40] is coding." aria-label="回原文"></button>。Chip Huyen 经常抛给管理层一个问题：你是宁愿给团队买很贵的编码智能体订阅，还是多招一个人头（head count）？基层主管往往选人头，因为扩充编制对他们在组织内的成长更有利；但高管会选 AI 助手，因为他们更关心实际的业务指标 <button class="pd-ts" data-t="44:28" data-who="Chip Huyen" data-en="Would you rather give everyone on the team very expensive coding agent subscriptions or you get an extra headcount? Let's say maybe and almost everyone could say the managers could say headcount." aria-label="回原文"></button>。

> 【背景】head count 指企业正式员工的招聘名额/编制。

不同水平的工程师从 AI 工具中的获益也不同。一家公司做了随机试验：把工程师分为高、中、低三档，只给各组一半人使用编码工具 [[Cursor|Cursor]]。

结果发现：表现最好的高级工程师获益最大（因为他们最懂如何解决问题，能把 AI 当作无限兵力的初级工程师）；表现最差的人则完全无感 <button class="pd-ts" data-t="46:30" data-who="Chip Huyen" data-en="So they give half of each group access to Cursor. And then [inaudible 00:46:31] noticed over time it was like, okay, something funny. The group that get the biggest performance boost, in his opinion, he was very close to his team." aria-label="回原文"></button>。不过也有公司反馈，资深工程师恰恰是最抗拒 AI 的群体，因为他们对代码标准更有主见 <button class="pd-ts" data-t="47:30" data-who="Chip Huyen" data-en="It was like, okay, but AI code, [inaudible 00:47:30] code just sucks. So just very, very resistant in using it. So I don't know, I haven't quite been able to reconcile very different reports on that yet." aria-label="回原文"></button>。为此，有公司直接重组了工程团队：让高级工程师专注写规范、把关代码审查；让初级工程师和 AI 产出代码 <button class="pd-ts" data-t="50:12" data-who="Chip Huyen" data-en="So they actually restructured engineering org so that they get more senior engineers should be more in the peer review because they get writing guidelines on what is a good engineering practices, what is the process would be like." aria-label="回原文"></button>。

但 Chip Huyen 指出，**[[系统思维|系统思维]]**（理解各个组件如何协同工作、全局定位问题根源）是 AI 难以替代的核心能力。她举了自己部署应用时的例子：AI 遇到报错，只会不停地在代码、环境变量、语言之间盲目试错；但真正的问题其实是她所在的付费层级不支持该功能——AI 缺乏跳出局部、审视全局系统的能力 <button class="pd-ts" data-t="54:22" data-who="Chip Huyen" data-en="So I feel like, okay, so the issue with [inaudible 00:54:22] was just trying to focus on fixing things from a different component versus the issue is from a different component." aria-label="回原文"></button>。

## 接下来会发生什么：界限模糊、推理计算与多模态
未来几年组织结构会大改：工程、产品、营销等原本泾渭分明的职能会打通（因为评估需要同时懂架构和用户），大量非核心的外包职能会被 AI 自动化替代 <button class="pd-ts" data-t="58:11" data-who="Chip Huyen" data-en="So yeah, I think one big change I see just in organizational structure. I think this a lot of value plays in... So before we have a lot of disjointed teams. We have very clear engineering team, product team, but then there's a question of who should write eval?" aria-label="回原文"></button>。同时，基础模型那种跨代际的狂飙突进可能会放缓，真正的提升将来自后训练阶段和应用构建 <button class="pd-ts" data-t="60:24" data-who="Chip Huyen" data-en="Another thing in terms of AI, I think there's, I'm not sure how true this is. I guess, I'm also on the camp of thinking that it has merit, is a camp of okay, base models we have probably not quite maxed out, but we're unlikely to see really, really strong, crazily strong model." aria-label="回原文"></button>。

一个非常关键的趋势是**[[测试时计算|测试时计算]]**（test time compute，指把更多算力花在让模型做推理和生成上，而不是花在训练上）。比如面对一个数学题，让模型生成四个答案，做「多数投票」；或者让模型在给出最终答案前，先生成更多「思考」的内容。基础模型本身没变，但花更多算力去探索和思考，就能得到好得多的结果 <button class="pd-ts" data-t="67:05" data-who="Chip Huyen" data-en="And I guess, I feel about discussion of should I spend more compute on pre-training or fine-training or inference because inference and people thought I was just like test time compute." aria-label="回原文"></button>。

## 面对工具，却不知道该造什么？
很多团队手握能写代码、做设计的强大 AI 工具，却陷入了「想法危机」——不知道该构建什么 <button class="pd-ts" data-t="69:16" data-who="Chip Huyen" data-en="And one thing that I noticed, a lot of people just don't know what you built. And it shocked me why I feel like we are in some kind of an idea crisis, right? Now, we have all this really cool tools to have." aria-label="回原文"></button>。Chip Huyen 的实用建议是：花一周时间关注自己的日常工作，留意那些让你感到沮丧、烦躁的瞬间，问一句「这事能不能换个方式做？」<button class="pd-ts" data-t="70:12" data-who="Chip Huyen" data-en="And usually what we think of is like, okay, one tip is go look from the last week. For a week, just pay attention to what you do and what frustrates you. And when something frustrates you, think about, is there anything we can do?" aria-label="回原文"></button>。解决自己的小痛点，就是学习和应用 AI 最好的切入点。

## 本集带走
- **别陷入技术选型的陷阱**：如果两个技术方案对最终性能影响很小，就不值得花时间去辩论。先评估「最优方案」与「非最优方案」的差距到底有多大。
- **后训练与采样策略更重要**：预训练数据已被耗尽，真正拉开模型差距的是后训练；同时，调整采样策略（权衡最高概率与创意）能极大提升性能且经常被忽视。
- **评估（eval）看投资回报率**：不是所有功能都要写严密评估。非核心功能做到「足够好」就行；但如果是高风险的大规模业务或以准确率为卖点的核心功能，就必须严苛对待评估。
- **RAG 的核心是数据准备**：别纠结向量数据库。重点应放在：合理设计切块大小、将文档改写为问答格式、为 AI 补充人类常识性的注释。
- **重组工程团队**：适应 AI 时代的做法是，让资深工程师专注系统架构设计与代码审查，让初级工程师与 AI 负责产出代码。
- **用系统思维破局**：AI 在处理定义明确的局部任务时很强，但在跨组件排查故障时容易盲目试错。全局理解系统如何协同运作，是无法被替代的能力。
- **用「测试时计算」提升效果**：同样的基础模型，如果在推理时生成多个备选答案进行投票，或让它生成更多思考过程，就能显著提升最终表现。
- **从日常沮丧中找点子**：不知道用 AI 做什么？观察自己工作中最让人烦躁的小痛点，造个小工具解决它。

<div class="pd-sec">全部金句 <span>4 条</span></div>

> <span class="qz">我就会说，好吧，如果改进不多，那你为什么要花那么多时间去辩论那些对你的性能没有多大影响的事情？</span>  
> *I was like, Okay, if it's not much improvement, then why do you want to spend so much time debating something that doesn't make that much difference to your performance?*  
> <span class="qm">—— Chip Huyen · [06:10]</span> ^q1

> <span class="qz">所以我认为采样策略是极其重要的。它可以让你以巨大的方式提升性能，而且非常、非常被低估。</span>  
> *So I think my sampling strategy, I think is something extremely important. It can have you boost a performance in a huge way and very, very underrated.*  
> <span class="qm">—— Chip Huyen · [12:40]</span> ^q2

> <span class="qz">在某个时刻，我们在互联网数据上实际上已经有点达到极限了。</span>  
> *At some point, we are actually have kind of maxed out on the internet data.*  
> <span class="qm">—— Chip Huyen · [14:58]</span> ^q3

> <span class="qz">在这个中间过程中，既然每个人都有非常相似的预训练数据，那后训练就是如今他们做出大差异的地方。</span>  
> *where like post-trading, but middle course of this is more of everyone have very similar pre-training data, is that post-training is where they make a big difference nowadays.*  
> <span class="qm">—— Chip Huyen · [15:10]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2025-08-24-lennys-inside-handshake-garrett-lord|Handshake：靠学生网络四个月做到五千万ARR]]<span class="pd-rz">同嘉宾:Lenny · 同概念:后训练 (post-training)</span>
- [[2025-09-07-lennys-how-ai-is-reshaping-the-product-role|PM的生存法则：AI时代别当瓶颈，去抢活干]]<span class="pd-rz">同嘉宾:Lenny · 同概念:评估 (evals)</span>
- [[2025-09-25-lennys-why-ai-evals-are-the-hottest-new-skill|做 evals 不是写单元测试，是从看数据开始的错误分析]]<span class="pd-rz">同嘉宾:Lenny · 同概念:评估 (evals)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-12-07-lennys-surge-ai-edwin-chen|10亿收入不到100人:数据公司 Surge AI 如何逆行塑造 AI 未来]]<span class="pd-rz">同嘉宾:Lenny · 同公司:ChatGPT · 同概念:后训练 (post-training)、vibe coding</span>
- [[2025-09-14-lennys-the-ultimate-guide-to-aeo-ethan-smith|AEO实战指南：如何让产品出现在ChatGPT答案里]]<span class="pd-rz">同嘉宾:Lenny · 同公司:ChatGPT · 同概念:RAG</span>
- [[2025-11-09-lennys-the-enterprise-sales-playbook-1m-to-10m|企业销售里没有中端市场：把 10K 交易做到 100K 的实战打法]]<span class="pd-rz">同嘉宾:Lenny · 同公司:Cursor</span>

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
