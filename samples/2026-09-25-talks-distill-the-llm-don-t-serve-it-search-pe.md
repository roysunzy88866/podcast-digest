---
title: "LLM 重造 DoorDash 搜索与推荐:四个基础组件"
podcast: 精选演讲
date: 2026-09-30
source_url: undefined
duration: "22:01"
type: episode
cover: "#64748b"
description: "DoorDash 资深机器学习工程师 Raghav 讲解团队如何用监督信号、语义 ID、记忆、内容生成四个组件,把 LLM 的推理蒸馏进搜索与推荐系统。"
guests: ["[[Raghav Saboo]]"]
companies: ["[[DoorDash]]"]
concepts: ["[[LLM]]", "[[语义理解]]", "[[分级相关性]]", "[[语义 ID]]", "[[记忆]]", "[[嵌入]]", "[[检索]]", "[[排名]]", "[[蒸馏]]", "[[查询改写]]", "[[目录语义]]", "[[冷启动]]", "[[个性化合集]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-25-talks-distill-the-llm-don-t-serve-it-search-pe#post","headline":"LLM 重造 DoorDash 搜索与推荐:四个基础组件","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-25-talks-distill-the-llm-don-t-serve-it-search-pe","mainEntityOfPage":"https://talk.solomind.cc/2026-09-25-talks-distill-the-llm-don-t-serve-it-search-pe","description":"DoorDash 资深机器学习工程师 Raghav 讲解团队如何用监督信号、语义 ID、记忆、内容生成四个组件,把 LLM 的推理蒸馏进搜索与推荐系统。","datePublished":"2026-09-30","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Raghav Saboo"},{"@type":"Organization","name":"DoorDash"},{"@type":"Thing","name":"LLM"},{"@type":"Thing","name":"语义理解 (semantic understanding)"},{"@type":"Thing","name":"分级相关性 (graded relevance)"},{"@type":"Thing","name":"语义 ID (semantic ID)"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"嵌入 (embeddings)"},{"@type":"Thing","name":"检索 (retrieval)"},{"@type":"Thing","name":"排名 (ranking)"},{"@type":"Thing","name":"蒸馏 (distill)"},{"@type":"Thing","name":"查询改写 (query reformulation)"},{"@type":"Thing","name":"目录语义 (catalog semantics)"},{"@type":"Thing","name":"冷启动 (cold start)"},{"@type":"Thing","name":"个性化合集 (personalized collections)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"LLM 重造 DoorDash 搜索与推荐:四个基础组件","item":"https://talk.solomind.cc/2026-09-25-talks-distill-the-llm-don-t-serve-it-search-pe"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>LLM 重造 DoorDash 搜索与推荐:四个基础组件</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# LLM 重造 DoorDash 搜索与推荐:四个基础组件

<div class="pd-byl"><b>Raghav Saboo</b> · DoorDash 资深机器学习工程师 · 2026-09-30</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-25-talks-distill-the-llm-don-t-serve-it-search-pe.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">对于像 DoorDash 这样的市场平台来说,真正的瓶颈是语义理解。</div><div class="a">— Raghav Saboo <button class="pd-ts" data-t="00:53" data-who="Raghav Saboo" data-en="In this case, for a marketplace like DoorDash, the real bottleneck is semantic understanding." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Raghav Saboo]]
>
> **公司** [[DoorDash]]
>
> **概念** [[LLM]] · [[语义理解]] · [[分级相关性]] · [[语义 ID]] · [[记忆]] · [[嵌入]] · [[检索]] · [[排名]] · [[蒸馏]] · [[查询改写]] · [[目录语义]] · [[冷启动]] · [[个性化合集]]

这一集是 [[DoorDash|DoorDash]] 资深机器学习工程师 Raghav 的技术演讲,他负责搜索和个性化方向。DoorDash 早已不只是送餐——生鲜杂货、零售、宠物、礼品都在做,目标是「抓住每一个可购物的时刻」。

他的核心论断是:**要构建有效的发现(discovery)体验,真正的瓶颈是[[语义理解|语义理解]]**——即在给定上下文下,弄清楚一件商品对用户意味着什么、购物者到底想干什么。而历史上大家一直把这些当「参与度优化」问题来处理,[[LLM|LLM]] 提供了一个全新的杠杆 <button class="pd-ts" data-t="00:50" data-who="Raghav" data-en="So I'll start off today with a simple claim. The claim is that to build effective discovery, In this case, for a marketplace like DoorDash, the real bottleneck is semantic understanding." aria-label="回原文"></button>。

一个典型场景:用户刚领养了一只小狗,问「这周我需要准备些什么」。她可能先搜幼犬粮,然后这个查询会展开成一系列改写、进入其他需求的合集页、再到笼子、牵引绳、训练垫这些互补商品,一路到结账,而且可能横跨多个会话、好几天。

要捕捉这整条弧线很难,因为它横跨多个模型。Raghav 给出的答案是四个基础组件(原语):**监督信号、[[目录语义|目录语义]]、语义个性化、可控内容生成**——一套共享表示的系统,用 LLM 把顾客旅程映射起来 <button class="pd-ts" data-t="02:55" data-who="Raghav" data-en="And this is where the four primitives I will cover come in. Specifically supervision, catalog semantics, semantic personalization, and steerable content generation, as we heard previously as well." aria-label="回原文"></button>。

## 第一个组件:用 LLM 造「可规模化的推理监督信号」

[[检索|检索]]和[[排名|排序]]系统需要被教会「对某个任务来说,什么才叫好」。经典例子:用户搜「无麸质意面」,如果只按参与度排序,卖得火的普通意面、甚至只是沾了「无麸质」关键词的无麸质白面包都会冒出来——但都不是正确答案。真正想要的是**[[分级相关性|分级相关性]]**:真正的无麸质意面是高相关,鹰嘴豆意面是合理替代品,普通意面虽然畅销但违背了用户的约束 <button class="pd-ts" data-t="03:50" data-who="Raghav" data-en="But neither of these are clearly the right answer. What we actually want is graded relevance. A true gluten-free pasta should be a high relevance item." aria-label="回原文"></button>。

问题在于信号来源:人工标注昂贵、慢、还容易过时(目录变化很快);行为信号量足但被曝光、位置、价格、促销和旧模型的选择带偏。缺的是一个**可规模化的推理信号**,这正是 LLM 能补的 <button class="pd-ts" data-t="04:33" data-who="Raghav" data-en="and previous model choices. So the missing signal is a scalable reasoning signal. This is where LLMs are very useful as they offer a way to produce that supervision for such tasks." aria-label="回原文"></button>。

他们的流水线是:先人工构建一个高质量的查询-商品对种子集,用 0/1/2 三级相关性量表打标;对可疑案例做审计——比如人工标了「不相关」但加购/转化表现很好的商品,就发给更强的 LLM 用更细粒度的提示词重新评估;再和查询-类目模型调和,如果查询映射到的有效类目里确实包含这个商品,就相应调整标签。最终得到精度很高的黄金数据集,再用它**微调一个轻量级 LLM 做打标器**,离线跑全量目录,生成全量分级标注。

这些标签成为检索和排序系统**共享的训练目标**。Raghav 点出这个模式的核心:**离线用一次昂贵的推理,然后[[蒸馏|蒸馏]]进可以廉价、快速服务的模型** <button class="pd-ts" data-t="06:10" data-who="Raghav" data-en="This pattern has been pretty important for us over the past few years. Use expensive reasoning once offline, then distill it into models that can be served cheaply and quickly." aria-label="回原文"></button>。

## 检索与排序怎么吃下这些标签

标准[[嵌入|嵌入]](把文本压缩成语义向量)在电商规模下会迅速模糊相关性区分:仅仅「相关」的商品和真正「匹配」的商品在向量空间里挤在一起,分不清精确匹配、替代品和互补品。他们的解法是**两阶段对比学习**,用同一套分级标签训练:第一阶段用双塔编码器加多级监督对比损失做全局几何形态塑造;第二阶段用基础模型去挖「困难负样本」——模型排得过高的负例和排得过低的正例,重新打标后做课程式训练。

第一阶段后相关与中度相关还有重叠,第二阶段后就区分开了。这是他们最大的杠杆之一:相关性 NDCG 提升 2.3%,下游业务指标同步改善 <button class="pd-ts" data-t="08:00" data-who="Raghav" data-en="We've improved NDCG of relevance by 2.3%, and that's also been true with our downstream business metrics. And we did the same exercise with our ranking models as well, distilling LLM reasoned labels into our rankers, however, combining this with business and engagement objectives." aria-label="回原文"></button>。

排序模型同样把 LLM 标签蒸馏进去:在点击、加购、转化的参与度塔旁边**新加一个「序数相关性塔」**,因为共享底层,语义相关性在同一次反向传播中被蒸馏进去;再用一个价值函数在不同界面上微调参与度与相关性的权衡 <button class="pd-ts" data-t="08:31" data-who="Raghav" data-en="And this prediction sits right alongside existing engagement towers, click, add to cart, and conversion. And since they share the same bottom layers, the semantic fit and relevance fit gets distilled in the same backward pass, and our model is able to predict probability of relevance across the different levels." aria-label="回原文"></button>。注意他们**不是用 LLM 替换检索排序系统,而是把推理蒸馏进生产级架构**——这样既保留业务和系统目标,又能快速试验、可扩展地改进 <button class="pd-ts" data-t="09:06" data-who="Raghav" data-en="Now, these two examples are part of a larger theme of our work across similar projects. Where it seems right, we're not replacing the retrieval and ranking system with an LLM, but rather distilling the reasoning and understanding into some production ranking architecture." aria-label="回原文"></button>。

## 第二个组件:语义 ID——几十亿商品的通用「语言」

在商店-商品粒度上,DoorDash 的目录有几十亿个商品。SKU ID 在语义上什么也不说明;人工整理的类目体系又太粗太僵——辣酱在类目里可能只有「酱/辣酱」一层,完全说不出是是拉差、Franks 还是 Tabasco。

于是他们引入**[[语义 ID|语义 ID]]**:一段短的层级化编码,前缀捕捉粗粒度邻域、后面的 token 捕捉更细的区分,而且细粒度可控。效果是零标签就能从数据中涌现出结构:各种辣酱共享相同的前缀,然后按特色自动分成墨西哥、加勒比、韩国辣酱 <button class="pd-ts" data-t="11:24" data-who="Raghav" data-en="So for example in the map over on the slide you'll see hot sauces and the structure emerging from the data with zero labels. Each one share the same first and second prefix in this ID sequence but then split by speciality." aria-label="回原文"></button>。

这套编码可以被所有下游模型使用,解锁了四件事:①跨类目关系——薯片、莎莎酱、牛油果酱在类目树上各在一支,但语义邻域相近,说明它们在某个购物任务里属于一起;②[[冷启动|冷启动]]——新商品用 ngram 和字节对编码转成稀疏 ID 特征,可扩展地加进模型;③长尾覆盖——稀疏商品直接从语义近邻继承信号,不必等销量和曝光;④反向审计——用学习出的语义标注反过来检查人工标注的质量 <button class="pd-ts" data-t="12:47" data-who="Raghav" data-en="And then lastly, nice to have is the fact that we can actually also do a reverse audit. So we can audit our catalog and how well our human labels agree with these semantically learned labels." aria-label="回原文"></button>。

实际收益:它把 MRR 提升 4% 到 5%,并转化为可观的转化率收益。另一个 Raghav 特别喜欢的应用是**[[查询改写|查询改写]]**——是拉差可以关联到蒜蓉辣椒酱或 sambal oelek;因为这些改写映射到以目录为依据的语义邻域,推荐给用户的查询相关性大大提高。他强调:如果改写出的查询在 DoorDash 上没有库存,那就毫无意义——语义 ID 让查询图始终「落地」在真实目录上 <button class="pd-ts" data-t="13:51" data-who="Raghav" data-en="Ultimately, if these are queries that we don't have inventory for on DoorDash, they're meaningless. And with the addition of semantic IDs in this query graph, we were actually able to see pretty massive MRR gains as well for this piece of work." aria-label="回原文"></button>。

## 第三个组件:把「记忆」搬进推荐系统

下一个问题是消费者上下文:系统知道购物者什么,这些知识能否跨模型复用?用户嵌入有用,但解释不了用户**为什么**有某些意图和偏好;而且 LLM 没法直接用嵌入向量——你可以分词训练模型去学,但他们发现,有一个**显式的、LLM 原生的对应形式**非常有用 <button class="pd-ts" data-t="14:54" data-who="Raghav" data-en="Additionally, LLMs cannot readily use these embeddings. You could tokenize and train these models to learn it, but oftentimes, having some explicit LLM-native counterpart is very useful, and that's what we have found." aria-label="回原文"></button>。

他们把推荐系统套用智能体语境里已经很成熟的「[[记忆|记忆]]」概念,分三种时间尺度:**长期记忆**从订单、搜索、浏览、客服互动中捕捉持久偏好;**实时上下文**捕捉会话内信息,如购物车状态、进行中的搜索;**明示偏好**来自智能体互动——比如 AskDoordash 这种产品里用户显式说出的约束和偏好 <button class="pd-ts" data-t="15:44" data-who="Raghav" data-en="And then we have stated preferences. which come from agentic interactions, so something like AskDoordash, for example, where consumers are able to explicitly state their constraints and preferences as well." aria-label="回原文"></button>。

长期记忆用「记忆块」表示,结构化设计允许随了解加深不断加新维度:饮食偏好、用餐偏好、替代品偏好等,并且与下游系统解耦、下游无需重新解释。记忆以三种形式实体化:人类可读的紧凑文本;记忆块的嵌入向量(喂给检索排序);以及图/树/层级结构——比如把消费者和提取出的记忆概念连成**上下文图**。

图特别适合购物旅程,因为消费者-商品交互稀疏且需要多跳,上下文图能把此前没有关系的记忆概念连起来,在细粒度类目层级上尤其有效——基于图的嵌入检索已经胜过他们原有的基于类目体系的嵌入 <button class="pd-ts" data-t="17:40" data-who="Raghav" data-en="And it's particularly helpful at fine-grained taxonomy levels. In our case, we're seeing for retrieval using graph-based embeddings outperforming our existing taxonomy-based embeddings." aria-label="回原文"></button>。目前这个记忆框架用在三处:[[个性化合集|个性化合集]]、AskDoordash 的智能体个性化会话、以及作为特征喂进检索排序模型 <button class="pd-ts" data-t="18:10" data-who="Raghav" data-en="Second is agentic personalization, so AskDoordash, for example, uses this to personalize its sessions for you. And third, in retrieval and ranking models, as I said, we encode these memory blocks and feed them as features in downstream models as well." aria-label="回原文"></button>。

## 第四个组件:可控内容生成,把三者拼起来

四个组件最终拼成一张图:语义 ID、记忆块、LLM 分级相关性共同输入多个模型(LLM、小语言模型、传统模型),生成不同输出形态——排序后的语义 ID 列表、轮播标题、副文案,落在 DoorDash 的各个界面上 <button class="pd-ts" data-t="18:37" data-who="Raghav" data-en="So... All of these inputs, semantic IDs, memory blocks, and graded relevance or LLM supervision feed into multiple models, be it LLMs or small language models or traditional models." aria-label="回原文"></button>。

最直接的例子是门店页面的**个性化合集**。过去 DoorDash 的合集是固定库或按属性生成;现在是一个离线 LLM 流程,输入消费者记忆和语义 ID,合成从标题、副标题到实际商品的完整合集。

关键在**可控性**:能针对场合和时刻按需为不同消费者构建——有植物基偏好的用户看到「植物基食品货架」,只养猫的家庭看到猫粮货架,会话显示在补货就偏向食品杂货常备品 <button class="pd-ts" data-t="20:23" data-who="Raghav" data-en="For cat-only households, it can generate cat-drive food rows. And if a session indicates that a person is going through pantry restocking, it can bias towards pantry staples." aria-label="回原文"></button>。服务时因为全是离线批量生成的,仍复用现有检索排序栈做商品填充和合集排序。早期测试显示宠物品类下单率提升接近 1%、活跃用户提升 0.6% <button class="pd-ts" data-t="20:37" data-who="Raghav" data-en="And our early tests show that consumers are feeling the benefits of these tailored experiences. An example is within our pets vertical, we've been able to drive close to 1% order rate increases and 0.6% in active users." aria-label="回原文"></button>。

## 三个总结要点

Raghav 最后给出三条:**第一,发现是语义理解问题**,不只是参与度,LLM 让我们能推理商品含义和购物者意图;**第二,把 LLM 推理蒸馏成基础组件**——离线捕获为标签、语义 ID、记忆,让更小更快的模型去服务,「在线的 LLM 调用往往不是你所需要的产品架构」;**第三,共享表示创造大量用例**——一旦有了这些组件,检索、排序、内容生成都能被它们支撑 <button class="pd-ts" data-t="21:35" data-who="Raghav" data-en="Third, shared representations create many use cases. Once you have these primitives, they can power retrieval, ranking, content generation, et cetera. So last but not least, thank you, and thank you to all the collaborators at DoorDash." aria-label="回原文"></button>。

## 本集带走

- **缺的信号是「可规模化的推理信号」**:人工标注贵且过时,行为信号带偏;用 LLM 离线生成分级相关性标签,是补这块的杠杆。
- **先贵后便宜**:用强 LLM + 人工种子集造黄金数据,微调轻量打标器跑全量目录——昂贵推理只用一次,蒸馏进能廉价在线服务的模型。
- **蒸馏而非替换**:不拿 LLM 直接换掉检索排序系统,而是把推理灌进生产架构(如新增相关性塔),保住业务指标和系统性能。
- **语义 ID 是跨模型的共享货币**:层级编码前缀管粗、后缀管细,冷启动、长尾、查询改写、跨类目关系全都吃它,还能反向审计人工标注。
- **记忆要「LLM 可用」**:嵌入 LLM 用不了,显式文本化的记忆块(长期/会话/明示偏好三时间尺度)才能同时喂给传统模型和 LLM。
- **内容生成放在离线**:个性化合集全部批量离线生成,在线仍走原有检索排序栈——可控、可复用、不拖慢服务。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">对于像 DoorDash 这样的市场平台来说,真正的瓶颈是语义理解。</span>  
> *In this case, for a marketplace like DoorDash, the real bottleneck is semantic understanding.*  
> <span class="qm">—— Raghav Saboo · [00:53]</span> ^q1

> <span class="qz">离线使用一次昂贵的推理,然后把它蒸馏进可以廉价、快速地提供服务的模型中。</span>  
> *Use expensive reasoning once offline, then distill it into models that can be served cheaply and quickly.*  
> <span class="qm">—— Raghav Saboo · [06:10]</span> ^q2

> <span class="qz">挑战在于,在电商规模下,标准嵌入很快会模糊掉相关性的区分。</span>  
> *The challenge is standard embeddings at e-commerce scale quickly collapse the relevance distinction.*  
> <span class="qm">—— Raghav Saboo · [06:23]</span> ^q3

> <span class="qz">在合适的地方,我们不是用 LLM 替换检索和排序系统,而是把推理和理解蒸馏进某种生产级排序架构。</span>  
> *Where it seems right, we're not replacing the retrieval and ranking system with an LLM, but rather distilling the reasoning and understanding into some production ranking architecture.*  
> <span class="qm">—— Raghav Saboo · [09:06]</span> ^q4

> <span class="qz">归根结底,如果这些查询在 DoorDash 上没有库存,它们就毫无意义。</span>  
> *Ultimately, if these are queries that we don't have inventory for on DoorDash, they're meaningless.*  
> <span class="qm">—— Raghav Saboo · [13:45]</span> ^q5

> <span class="qz">把推理离线捕获为标签、语义 ID、记忆,然后让更小更快的模型来服务它。</span>  
> *Capture reasoning offline as labels, semantic IDs, memory, and then let smaller and faster models serve it.*  
> <span class="qm">—— Raghav Saboo · [21:16]</span> ^q6

> <span class="qz">在线的 LLM 调用往往不是你所需要的产品架构。</span>  
> *The online LLM call is often not the product architecture you need.*  
> <span class="qm">—— Raghav Saboo · [21:26]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-25-talks-why-llm-recommenders-will-be-ai-s-bigges|Tokens 进、互动出：推荐系统正在像 LLM 一样扩展]]<span class="pd-rz">同公司:DoorDash · 同概念:LLM、语义 ID (semantic ID)</span>
- [[2026-09-15-talks-tolan-voice-first-ai-companion-paula-doz|Tolan 如何做语音优先的 AI 陪伴体]]<span class="pd-rz">同概念:检索 (retrieval)、记忆 (memory)、LLM</span>
- [[2026-08-19-aiandi-the-ai-alien-companion-app-that-39-s-bri|LLM 是新的叙事媒介:AI 伴侣 Tolan 的故事工程学]]<span class="pd-rz">同概念:LLM、记忆 (memory)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-19-aiandi-the-ai-alien-companion-app-that-s-bringi|Portola：当AI变成即兴演员，不是助手]]<span class="pd-rz">同概念:LLM、记忆 (memory)</span>
- [[2025-05-22-talks-mastering-claude-code-in-30-minutes|Claude Code 实战技巧：从提问到并行]]<span class="pd-rz">同概念:LLM</span>
- [[2025-07-06-lennys-the-base44-bootstrapped-startup-success|一个人六个月做出八千万美元公司]]<span class="pd-rz">同概念:LLM</span>

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
