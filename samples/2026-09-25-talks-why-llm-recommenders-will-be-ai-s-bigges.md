---
title: Tokens 进、互动出：推荐系统正在像 LLM 一样扩展
podcast: 精选演讲
date: 2026-09-30
source_url: undefined
duration: "17:50"
type: episode
cover: "#64748b"
description: Meta 推荐研究团队负责人讲为什么推荐系统的扩展方式和 LLM 一样、如何构建 LLM 推荐器，以及它为何比 AI 聊天更省 token。
guests: ["[[Devansh Tandon]]"]
companies: ["[[Meta]]", "[[Instagram]]", "[[YouTube]]", "[[Spotify]]", "[[DoorDash]]"]
concepts: ["[[推荐系统]]", "[[LLM]]", "[[语义 ID]]", "[[算力扩展]]", "[[推理]]", "[[预训练]]", "[[后训练]]", "[[微调]]", "[[思维链]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-25-talks-why-llm-recommenders-will-be-ai-s-bigges#post","headline":"Tokens 进、互动出：推荐系统正在像 LLM 一样扩展","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-25-talks-why-llm-recommenders-will-be-ai-s-bigges","mainEntityOfPage":"https://talk.solomind.cc/2026-09-25-talks-why-llm-recommenders-will-be-ai-s-bigges","description":"Meta 推荐研究团队负责人讲为什么推荐系统的扩展方式和 LLM 一样、如何构建 LLM 推荐器，以及它为何比 AI 聊天更省 token。","datePublished":"2026-09-30","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Devansh Tandon"},{"@type":"Organization","name":"Meta"},{"@type":"Organization","name":"Instagram"},{"@type":"Organization","name":"YouTube"},{"@type":"Organization","name":"Spotify"},{"@type":"Organization","name":"DoorDash"},{"@type":"Thing","name":"推荐系统 (recommendation systems)"},{"@type":"Thing","name":"LLM"},{"@type":"Thing","name":"语义 ID (semantic ID)"},{"@type":"Thing","name":"算力扩展 (scaling)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"预训练 (pre-training)"},{"@type":"Thing","name":"后训练 (post-training)"},{"@type":"Thing","name":"微调 (fine-tuning)"},{"@type":"Thing","name":"思维链 (chain of thought)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Tokens 进、互动出：推荐系统正在像 LLM 一样扩展","item":"https://talk.solomind.cc/2026-09-25-talks-why-llm-recommenders-will-be-ai-s-bigges"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Tokens 进、互动出：推荐系统正在像 LLM 一样扩展</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Tokens 进、互动出：推荐系统正在像 LLM 一样扩展

<div class="pd-byl"><b>Devansh Tandon</b> · Meta 推荐研究团队负责人 · 2026-09-30</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-25-talks-why-llm-recommenders-will-be-ai-s-bigges.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">第一个是,推荐系统的扩展方式和 LLM 一样,而且这个领域在扩展曲线上还处于非常早期的阶段。</div><div class="a">— Devansh Tandon <button class="pd-ts" data-t="00:30" data-who="Devansh Tandon" data-en="The first is that recommendation systems scale just like LLMs do, and that the field is very early in that scaling curve." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Devansh Tandon]]
>
> **公司** [[Meta]] · [[Instagram]] · [[YouTube]] · [[Spotify]] · [[DoorDash]]
>
> **概念** [[推荐系统]] · [[LLM]] · [[语义 ID]] · [[算力扩展]] · [[推理]] · [[预训练]] · [[后训练]] · [[微调]] · [[思维链]]

这一集是一场技术演讲,主题是「Tokens In, Engagement Out:训练 [[LLM|LLM]] [[推荐系统|推荐系统]]」。主角是 [[Meta|Meta]] 的 Meta Recommendations Research 团队负责人——他的团队负责训练驱动 [[Instagram|Instagram]]、Facebook 广告等 Meta 全家桶应用的前沿模型和推荐系统;来 Meta 之前他在 Google 待了很久,参与过 DeepMind 和 [[YouTube|YouTube]] 的核心机器学习团队。去年他在 AI Engineer 讲过 semantic ID 和生成式检索,这两个想法过去一年已经在 YouTube、Meta、[[Spotify|Spotify]]、[[DoorDash|DoorDash]] 等公司从研究走向了规模化生产系统 <button class="pd-ts" data-t="00:50" data-who="嘉宾" data-en="Okay, so quickly about me. I currently work at Meta on research and product. I lead a team called Meta Recommendations Research, which is this group that's training frontier models, LLMs, and recommenders that power Instagram, Facebook ads, the Meta family of apps." aria-label="回原文"></button>。

他今天要论证两件事:推荐系统的扩展方式和 LLM 一样,而且这个行业在这条扩展曲线上还非常早期;以及 LLM 推荐系统将成为 AI 最大的消费级应用之一 <button class="pd-ts" data-t="00:27" data-who="嘉宾" data-en="My talk's titled, Tokens and Engagement Out, Training LLM Recommenders. And I wanna make two big arguments today. The first is that recommendation systems scale just like LLMs do, and that the field is very early in that scaling curve." aria-label="回原文"></button>。

## 推荐系统也有自己的「扩展定律」

LLM 这波浪潮的起点是 2020 年那篇里程碑式的扩展曲线论文(当时 Dario 还在 OpenAI,Anthropic 还不存在):模型规模、数据、训练算力越大,损失就在对数线性尺度上可预测地下降——正是这条干净的曲线引发了 AI 前沿竞赛,支撑了今天的巨额资本开支 <button class="pd-ts" data-t="02:17" data-who="嘉宾" data-en="Let's start with scaling curves. So I wanted to start with this landmark scaling curve paper from 2020, which feels like a lifetime ago. This is when Dario was still at OpenAI and Anthropic didn't exist yet." aria-label="回原文"></button>。

事实证明,推荐系统遵循非常相似的幂律扩展曲线。实际上,在这一波 LLM 之前,推荐系统就是大科技公司里最大的生产级 ML 模型,至今仍服务于十亿以上日活的规模。x 轴同样是数据、算力、模型规模,y 轴是推荐质量的提升——离线评估里是净熵或 AUC 增益,上线后就是互动和收入影响 <button class="pd-ts" data-t="02:59" data-who="嘉宾" data-en="And this clean and predictable curve is what really set off the race for the AI frontier, because you can forecast what model quality and capability improvements will look like, and this is what's underwriting the massive CapEx investments and the AI build-out today." aria-label="回原文"></button>。

这不只是学术研究。来自 Meta 近期财报的真实例子:Instagram Reels 一个季度观看时长同比增长 30%,靠的优化包括简化排序架构以支持高效模型扩展、把用于训练 Instagram 的用户互动序列长度翻一番、并增加每次互动的丰富度 <button class="pd-ts" data-t="04:24" data-who="嘉宾" data-en="Here's a couple of examples I have from Meta's recent earnings reports. Instagram Reels had a strong quarter, 30% year-on-year watch time. The optimizations we made to improve the quality of recommendations included simplifying our ranking architecture to enable efficient model scaling and longer interaction histories to identify a person's interests." aria-label="回原文"></button>——这就是 LLM 幂律扩展曲线的直接对应。

驱动这一切的是一个「tokens 进、互动出」的飞轮:训练模型 → [[推理|推理]]生成更好的推荐 → 驱动用户互动和停留时长 → 转化为广告或订阅收入 → 为下一轮训练买单。扩展曲线上的每一步,就是绕这个飞轮的一圈 <button class="pd-ts" data-t="04:59" data-who="嘉宾" data-en="So these are direct parallels to the power loss scaling curves for LLMs. And I want to introduce this idea of a flywheel of tokens in engagement out, which is what's powering all of these RECS models scaling." aria-label="回原文"></button>。

## 行业正在爬的四条 S 曲线

他把推荐系统的演进分成四个范式 <button class="pd-ts" data-t="05:41" data-who="嘉宾" data-en="So we have a long way to scale these recommender systems. I want to talk about the four paradigms that I see the industry progressing through. The first S-curve was more traditional Rexys, where this S-curve focused more on feature engineering and user and content embeddings." aria-label="回原文"></button>:

1. **传统推荐系统**:聚焦特征工程和用户/内容嵌入,双塔、稀疏网络、排序器。大多数生产系统还停在这条曲线上。它不会消失,但特征工程这类工作会被智能体(而不是真正的 ML 工程师)通过自动研究来加速。
2. **LLM-inspired(受 LLM 启发)**:端到端扩展模型,代表是 HSTU 和 one-rec 论文。业界领先的推荐系统大都运营在这一层。
3. **LLM-native(LLM 原生)**:拿一个能理解、能推理的基础模型,适配到推荐任务上,代表是 Tiger 和 Plum 论文。
4. **Agentic(智能体编排)**:LLM 在一个循环中编排推荐系统——智能体规划、检索、排序、批评推荐结果,再调用模型细化后交付。他拿编码智能体做类比:LLM 原生是在提升模型核心能力(从 Opus 4.5 到 4.8),agentic 是在改进 Claude Code 或 Codex 背后的编码 harness <button class="pd-ts" data-t="06:58" data-who="嘉宾" data-en="And I think the final paradigm that I start to see emerging is agentic, where LLMs will start to orchestrate REC systems in a loop. I think there's a parallel here with coding agents." aria-label="回原文"></button>。

公司们是在这四条曲线上并行扩展的:大多数推荐今天处于 LLM-inspired、正试图毕业到 LLM-native,同时还有很多公司仍在爬传统那条曲线 <button class="pd-ts" data-t="07:37" data-who="嘉宾" data-en="Let me jump into... So here's kind of the framework of all the four RECS paradigms. I think companies are scaling across each of these curves in parallel." aria-label="回原文"></button>。

## 构建 LLM 推荐器的配方:三步、五层

配方很简单,三步:先把内容 token 化、为你的领域创建一门语言;再把 LLM 适配成既懂英语又懂这门领域语言的「双语模型」;最后用用户信息 prompt 这个模型,它会直接从内容语料库中解码出推荐 <button class="pd-ts" data-t="08:10" data-who="嘉宾" data-en="Let me shift gears a bit to share the recipe of how to actually build an LLM recommender. I think it's pretty simple. It's three steps." aria-label="回原文"></button>。

展开成一个「五层蛋糕」,从底往上 <button class="pd-ts" data-t="08:38" data-who="嘉宾" data-en="Let's go a bit deeper. This is the LLM recommender as a five-layer cake. We'll start at the bottom." aria-label="回原文"></button>:

- **[[语义 ID|Semantic ID(语义 ID)]]**:把内容语料库转换成 LLM 能理解、能推理的 token。为什么要 token 化?两个原因:一是给模型一个**稳定的表示**去学习,而不是只能死记硬背的不断变化的 hash;二是**压缩**——一个三分钟的 Instagram Reel 视频如果不压缩会是 10,000 个 token,会很快撑爆上下文窗口,必须压到大约 10 个 token <button class="pd-ts" data-t="09:51" data-who="嘉宾" data-en="I think there's two big reasons to tokenize content. The first is it gives you the stable representation for models to learn over rather than a constantly shifting hash that the model can only memorize." aria-label="回原文"></button>。做法上,相似内容共享 token 前缀:比如关于网球的几条 Reels,第一个 token 代表体育、后两个代表网球、最后一个 token 区分具体视频 <button class="pd-ts" data-t="10:24" data-who="嘉宾" data-en="And so here I have some examples of Instagram reels about tennis. You can see that the semantic token shares the prefix of the first three tokens because they're very similar reels." aria-label="回原文"></button>。这个方向已被业界大量采纳,很多团队只是把传统模型里的 hash ID 换成 SID 就看到了不错的效果。
- **基础 LLM**:开放权重模型或内部第一方模型都行。
- **[[预训练|预训练]]**:在英语和推荐 token 之间架桥。比如让模型看着「semantic ID 为 ABC 的视频」,输出它的文字描述(「温布尔登一记瞬间成为标志性画面的一击」);或者在用户交互历史里遮住部分 semantic ID,让模型学会预测——理解哪些视频是被一起观看的 <button class="pd-ts" data-t="10:42" data-who="嘉宾" data-en="You can imagine the first token representing sports and the second two tokens representing tennis and then the final token making these videos individual. Once you have a semantic ID, you can train it to understand both English and semantic ID." aria-label="回原文"></button>。
- **[[后训练|后训练]]**:把模型引向推荐任务,比如重排序——输入一堆用户信息和 30 个候选视频,LLM 排序器排出前五条。
- **表面[[微调|微调]]**:针对具体产品表面做轻量微调即可。这个范式最令人兴奋的一点是:**大部分算力在所有产品表面之间共享**,不必为每个表面从头训练单独模型 <button class="pd-ts" data-t="09:24" data-who="嘉宾" data-en="And then finally, you can just do some light surface-specific fine-tuning to deploy it on a product surface. The exciting thing about this paradigm is most of the compute is shared across all of the product surfaces, so you don't have to train individual models from scratch for every product surface." aria-label="回原文"></button>。

## 双语模型的可解释性:算法第一次能「说清楚自己为什么推荐这个」

后训练出的模型是双语的——既懂英文又懂推荐——所以你可以直接查看它的[[思维链|思维链]](模型一步步推理的过程),理解它为什么做出那样的决策:它知道用户的主题兴趣(喜剧、美食、DIY、健康),知道用户的互动风格和偏好的创作者,然后基于这条推理链重新排序 <button class="pd-ts" data-t="11:27" data-who="嘉宾" data-en="And so in a user's interaction history, you can mask some parts of the sequence, and the model learns to predict them and understand what videos are watched together in sequence." aria-label="回原文"></button>。

这打开了一种全新的产品面:用户可以用自然语言引导自己的信息流。Instagram 上的「你的算法」功能就是例子——刷 Reels 时点进去,能看到算法怎么理解你和你的兴趣,然后添加或删除兴趣、用自然语言跟它对话。

比如你添加「关注 FIFA 世界杯」这个兴趣,模型结合你的用户历史,就会解码出为你个性化的推荐(比如梅西最近踢进的那个任意球)<button class="pd-ts" data-t="12:36" data-who="嘉宾" data-en="Here's an example from your algorithm on Instagram. where users can talk to the algorithm while they're consuming content. It's a screenshot from scrolling through Reels, or when you click in, you can understand what the Instagram algorithm thinks about you and your interests, and then you can add or remove interests and talk to it in natural language." aria-label="回原文"></button>。类似的还有 Spotify 的提示词歌单、YouTube 的自定义信息流、Ask DoorDash。他判断:我们会看到从黑盒推荐算法,转向让用户对算法有更多控制权、算法变得更可交互、更可引导——用户用语言表达目标来引导算法,而不仅仅是点赞或评论 <button class="pd-ts" data-t="12:54" data-who="嘉宾" data-en="It's a screenshot from scrolling through Reels, or when you click in, you can understand what the Instagram algorithm thinks about you and your interests, and then you can add or remove interests and talk to it in natural language." aria-label="回原文"></button>。

## 最反直觉的一点:LLM 推荐器比 AI 聊天便宜 100 倍

那个「token 进、互动出」的飞轮,内容信息流和 AI 聊天应用共享的是同一个:训练 → 推理 → 互动 → 变现。这是评估任何消费应用的透镜——训练端看它把算力转化为前沿模型的能力,推理端看推理 token 能多好地转化为互动和变现 <button class="pd-ts" data-t="14:10" data-who="嘉宾" data-en="Finally, I want to talk about kind of the framework of tokens in engagement out. This flywheel that I started with of model training, inference, consumer engagement, and then monetization, this is actually the same flywheel that's shared by content feeds and the AI chat apps." aria-label="回原文"></button>。

但对比之下,LLM 推荐器在结构上**更省 token** <button class="pd-ts" data-t="14:46" data-who="嘉宾" data-en="On the inference side, how well can the inference tokens translate into engagement and then monetization. And so if you try to compare content feeds and AI chat apps, I think that LLM recommenders are actually structurally more token efficient than the AI chat." aria-label="回原文"></button>:

- 内容信息流(Instagram、Facebook、TikTok、YouTube)用的模型约 10 亿到 100 亿活跃参数;AI 聊天应用(Gemini、ChatGPT、Claude)服务的是 100 亿到 1000 亿活跃参数的大模型。
- 信息流的输出是一个语义 ID token——指向已有内容的指针,因为内容是创作者上传的,供应实际上免费;而 AI 聊天必须自己解码每一个内容 token,每一轮交互输出几千个 token,每个 token 都要在推理时由应用自己「制造」出来。

结果:生成一小时消费者互动所需的推理算力成本,内容信息流比 AI 聊天应用便宜高达 100 倍或更多——因为它们解码的是指向内容的指针,而不是内容本身 <button class="pd-ts" data-t="16:01" data-who="嘉宾" data-en="And the big difference here is that every token has to be manufactured by the app at inference time. And so what that means is if you compare these two apps on how much inference cost in compute is spent to generate an hour of consumer engagement, there's a huge structural gap where content feeds are significantly cheaper, up to 100 times or more cheaper than AI chat apps because they're decoding pointers to content rather than content itself." aria-label="回原文"></button>。

## 为什么这是最大的消费级 AI 应用之一

按日活看排名前十的应用,十分之四是内容信息流;而信息流在互动和变现两端的增长,几乎全部由推荐器和广告模型驱动——这些都将被 LLM 推荐器彻底改变 <button class="pd-ts" data-t="16:33" data-who="嘉宾" data-en="Finally, I want to kind of end with why I think LMREXIS is one of the most significant consumer AI applications. If you look at the top apps by daily active users, these are the top 10 apps, 4 out of 10 of them are content feeds." aria-label="回原文"></button>。这是一个非常大、且非常省 token 的 AI 消费级应用。接下来一年左右,他预计会看到可引导、可交互的推荐,推荐结果的解释,以及更多让用户掌控自己体验的新产品面,还有关于消费级智能体和推荐智能体的 exciting 研究 <button class="pd-ts" data-t="17:02" data-who="嘉宾" data-en="And these are going to be entirely transformed by LLM recommenders. It's a very large and very token efficient application of AI for consumer apps. We're going to see a lot of new product experiences come through with steerable and interactive recommendations, explanation of recommendations, and just putting more users in control of their experience on these apps." aria-label="回原文"></button>。

## 本集带走

- **推荐系统遵循和 LLM 一样的幂律扩展曲线**:加大模型、数据、算力,质量可预测地提升——Meta 用「互动序列翻倍」这类做法在真实产品上兑现了(Reels 观看时长同比 +30%)。
- **构建 LLM 推荐器三步走**:token 化内容造一门领域语言 → 把 LLM 训成双语模型 → 用用户信息 prompt 它直接解码推荐;大部分算力在所有产品表面间共享,不必每个表面从头训模型。
- **Semantic ID 的两大价值**:给模型稳定的可学习表示(替代只能死记的 hash ID),以及把内容压缩到约 10 个 token(否则一条三分钟视频就是上万个 token)。
- **双语模型带来可解释和可引导**:能直接读模型的思维链看懂推荐理由;用户可以用自然语言增删兴趣、引导信息流,而不只是点赞。
- **推荐器比 AI 聊天结构性省 token**:它解码的是指向创作者内容的指针,聊天应用则要自己制造每个 token——生成一小时互动的推理成本可相差 100 倍以上。
- **四个范式并行爬坡**:传统 → LLM-inspired → LLM-native → agentic;领先者在第二三层,智能体循环编排推荐(规划、检索、排序、批评)是下一个研究方向。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">第一个是,推荐系统的扩展方式和 LLM 一样,而且这个领域在扩展曲线上还处于非常早期的阶段。</span>  
> *The first is that recommendation systems scale just like LLMs do, and that the field is very early in that scaling curve.*  
> <span class="qm">—— Devansh Tandon · [00:30]</span> ^q1

> <span class="qz">这条干净且可预测的曲线真正引发了 AI 前沿竞赛,因为你可以预测模型质量和能力的提升会是什么样子,这正是当今支撑巨额资本开支和 AI 建设浪潮的基础。</span>  
> *And this clean and predictable curve is what really set off the race for the AI frontier, because you can forecast what model quality and capability improvements will look like, and this is what's underwriting the massive CapEx investments and the AI build-out today.*  
> <span class="qm">—— Devansh Tandon · [02:42]</span> ^q2

> <span class="qz">我不认为这条曲线会消失,但这里的模型开发会因为自动研究而加速,像特征工程这类事情将由智能体而不是真正的 ML 工程师来处理。</span>  
> *I don't think this curve is going to go away, but model development here will be accelerated with auto-research, and things like feature engineering will be handled by agents rather than real ML engineers.*  
> <span class="qm">—— Devansh Tandon · [06:04]</span> ^q3

> <span class="qz">这个范式令人兴奋的地方在于,大部分算力是在所有产品表面之间共享的,所以你不必为每个产品表面从头训练单独的模型。</span>  
> *The exciting thing about this paradigm is most of the compute is shared across all of the product surfaces, so you don't have to train individual models from scratch for every product surface.*  
> <span class="qm">—— Devansh Tandon · [09:24]</span> ^q4

> <span class="qz">所以我们会看到这个转变,我认为,是从黑盒推荐算法转向给用户更多对算法的控制权,让算法变得更可交互、更可引导。</span>  
> *And so we're gonna see this shift, I think, from black box recommendations algorithms to giving users more control over their algorithm and algorithms becoming more interactive and steerable.*  
> <span class="qm">—— Devansh Tandon · [12:54]</span> ^q5

> <span class="qz">我非常兴奋的是,用户可以用语言表达自己的目标来引导算法,而不仅仅是点赞或评论。</span>  
> *I'm really excited that users can direct it towards their own goals that's expressed in language rather than just likes or comments.*  
> <span class="qm">—— Devansh Tandon · [13:07]</span> ^q6

> <span class="qz">所以如果你尝试比较内容信息流和 AI 聊天应用,我认为 LLM 推荐器在结构上其实比 AI 聊天更省 token。</span>  
> *And so if you try to compare content feeds and AI chat apps, I think that LLM recommenders are actually structurally more token efficient than the AI chat.*  
> <span class="qm">—— Devansh Tandon · [14:46]</span> ^q7

> <span class="qz">存在一个巨大的结构性差距:内容信息流要便宜得多,比 AI 聊天应用便宜高达 100 倍或更多,因为它们解码的是指向内容的指针,而不是内容本身。</span>  
> *there's a huge structural gap where content feeds are significantly cheaper, up to 100 times or more cheaper than AI chat apps because they're decoding pointers to content rather than content itself.*  
> <span class="qm">—— Devansh Tandon · [16:10]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-25-talks-distill-the-llm-don-t-serve-it-search-pe|LLM 重造 DoorDash 搜索与推荐:四个基础组件]]<span class="pd-rz">同公司:DoorDash · 同概念:LLM、Semantic ID(语义 ID) (semantic ID)</span>
- [[2025-08-24-lennys-inside-handshake-garrett-lord|Handshake：靠学生网络四个月做到五千万ARR]]<span class="pd-rz">同公司:Meta · 同概念:后训练 (post-training)、预训练 (pre-training)</span>
- [[2026-08-06-a16z-how-open-source-ai-became-critical-infra|开源模型没差距，缺的是让它跑起来的基础设施]]<span class="pd-rz">同公司:Meta · 同概念:后训练 (post-training)、推理 (inference)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-12-bigtech-here-s-how-the-ai-bubble-bursts-with-pau|AI 投资泡沫的崩盘剧本:为什么万亿美元建数据中心注定亏钱]]<span class="pd-rz">同公司:Meta · 同概念:后训练 (post-training)、推理 (inference)、预训练 (pre-training)</span>
- [[2026-07-16-unsupervised-ep-91-top-ai-analyst-unpacks-todays-ai-h|Benedict Evans:AI 价值会落在哪一层?]]<span class="pd-rz">同概念:LLM、扩展定律 (scaling)</span>
- [[2026-07-30-cogrev-is-offense-or-defense-dominant-far-ai-s|AI 安全排行榜：谁扛住了越狱，谁没有]]<span class="pd-rz">同概念:后训练 (post-training)、思维链 (chain of thought)</span>

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
