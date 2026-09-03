---
title: 数据库60年 vs 智能体18个月：MongoDB 谈检索与记忆
podcast: The Cognitive Revolution
date: 2026-09-03
source_url: undefined
duration: "95:28"
type: episode
cover: "#64748b"
image: "/covers/2026-09-01-cogrev-write-change-recall-forget-mongodb-s-pet.jpg"
description: MongoDB AI 现场 CTO Pete Johnson 从数据库简史讲到智能体记忆：RAG 的起落、token 成本、遗忘为何最难，以及嵌入模型为何远未商品化。
host: "[[Nathan]]"
cohosts: ["[[Pete Johnson]]"]
companies: ["[[MongoDB]]", "[[Voyage AI]]"]
concepts: ["[[智能体]]", "[[智能体记忆]]", "[[RAG]]", "[[嵌入模型]]", "[[向量搜索]]", "[[上下文化分块]]", "[[重排序器]]", "[[token 最大化]]", "[[混合搜索]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/covers/2026-09-01-cogrev-write-change-recall-forget-mongodb-s-pet.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-01-cogrev-write-change-recall-forget-mongodb-s-pet#post","headline":"数据库60年 vs 智能体18个月：MongoDB 谈检索与记忆","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-01-cogrev-write-change-recall-forget-mongodb-s-pet","mainEntityOfPage":"https://talk.solomind.cc/2026-09-01-cogrev-write-change-recall-forget-mongodb-s-pet","description":"MongoDB AI 现场 CTO Pete Johnson 从数据库简史讲到智能体记忆：RAG 的起落、token 成本、遗忘为何最难，以及嵌入模型为何远未商品化。","datePublished":"2026-09-03","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-01-cogrev-write-change-recall-forget-mongodb-s-pet.jpg","about":[{"@type":"Person","name":"Nathan"},{"@type":"Person","name":"Pete Johnson"},{"@type":"Organization","name":"MongoDB"},{"@type":"Organization","name":"Voyage AI"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体记忆 (agentic memory)"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"嵌入模型 (embedding model)"},{"@type":"Thing","name":"向量搜索 (vector search)"},{"@type":"Thing","name":"上下文化分块 (contextualized chunking)"},{"@type":"Thing","name":"重排序器 (re-ranker)"},{"@type":"Thing","name":"token 最大化 (token maxing)"},{"@type":"Thing","name":"混合搜索 (hybrid search)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"数据库60年 vs 智能体18个月：MongoDB 谈检索与记忆","item":"https://talk.solomind.cc/2026-09-01-cogrev-write-change-recall-forget-mongodb-s-pet"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>数据库60年 vs 智能体18个月：MongoDB 谈检索与记忆</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 数据库60年 vs 智能体18个月：MongoDB 谈检索与记忆

<div class="pd-byl"><b>Pete Johnson</b> · MongoDB AI 现场 CTO · 2026-09-03</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-01-cogrev-write-change-recall-forget-mongodb-s-pet.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我甚至敢说，我们的教育系统有一种偏见，一种历史偏见，即「汝当永远规范化」。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="15:50" data-who="嘉宾" data-en="I'll go as far as to say, like, our education system has a bias, a historical bias, that thou shalt always normalize." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Nathan]] · [[Pete Johnson]]
>
> **公司** [[MongoDB]] · [[Voyage AI]]
>
> **概念** [[智能体]] · [[智能体记忆]] · [[RAG]] · [[嵌入模型]] · [[向量搜索]] · [[上下文化分块]] · [[重排序器]] · [[token 最大化]] · [[混合搜索]]

这个播客的主持人 [[Nathan|Nathan]] 请来了一位和 SQL 同岁的嘉宾:[[Pete Johnson|Pete Johnson]],30 年技术老兵、[[MongoDB|MongoDB]] 的 AI 现场 CTO(Field CTO,即直接面向客户做技术布道与落地的 CTO 角色)。他 1970 年 2 月出生，而 SQL 的奠基论文正是 1970 年 6 月由 IBM 研究员 E.F. Codd 写下的。这一集从数据库历史一路讲到[[智能体记忆|智能体记忆]]，核心论点只有一个：[[智能体|智能体]]的性能——尤其是算上成本之后的性能——很大程度上取决于检索做得好不好。

## 从 1970 年的一次磁盘读取讲起

Pete 用「稀缺资源决定设计」串起 60 年数据库史。1970 年，应用是部门级的、朝九晚五、周末可以停机，而三大硬件里存储最贵，于是「规范化」(把数据拆到多张表、任何一份事实只存一次，教科书里的第一、第三范式就是干这个的)成了铁律——他甚至直言这是「教育系统的历史偏见：汝当永远规范化」。

到 2007 年 MongoDB 提交第一行代码时，世界有了互联网、云和 iPhone,47 年摩尔定律之后磁盘不再稀缺，稀缺的变成了时间：应用不能停机、用户遍布全球。于是出现了反规范化的设计——地址在两条记录里各存一份，看似浪费磁盘，换来的是一次磁盘读取搞定，而不是三次。

这就是 NoSQL 快的根源。他还纠正了一个常见误解：MongoDB 不是无模式(schemaless),而是「模式灵活」(schema flexible)——同一个集合里可以放不同形状的 JSON 文档，改起来不用承受 SQL 改生产表结构那种级联痛苦 <button class="pd-ts" data-t="21:32" data-who="Pete Johnson" data-en="So let me, so first let me push back on one thing you just said. Most people think that we're schemaless, and that's not actually true. It's not that we're schemaless, it's that we're schema flexible." aria-label="回原文"></button>。

## 检索质量成了第三根杠杆

MongoDB 的检索能力是逐步长出来的：2020 年，他们注意到客户总在自己集群旁边自建 Lucene 服务器做关键词检索，于是推出 Atlas Search;后来发现「向量不过是一个浮点数数组」，在灵活 schema 上加个属性、建个索引，[[向量搜索|向量搜索]]就顺理成章；再往后是[[混合搜索|混合搜索]]——元数据预过滤 + 词法搜索 + 向量搜索，三种杠杆在一次查询里组合。今年新发布的 Rank Fusion 和 Score Fusion,把向量搜索和词法搜索合并成一次 API 调用，在后端按排名或分数归并结果；配套的 $Rerank 则把「把结果送去[[重排序器|重排序器]](把初筛结果重新排序、提升相关性的小模型)」也变成一次调用。

他给这套思路的玩笑总结是：「开发者分两种，爱 MongoDB 的，和还没试过的。」

嵌入这块，2025 年收购的 [[Voyage AI|Voyage AI]] 提供了几个实打实的减负功能：一是「[[上下文化分块|上下文化分块]]」(contextualized chunking)——传统做法里分块太小丢上下文、太大丢检索精度，开发者得反复试三四轮找平衡，而 Voyage 让你把「想要的那句原文」和「上下文」作为两段一起传入，返回一个兼顾两者的向量，分块更小、检索质量反而更高；二是「马特廖什卡」(Matryoshka,即俄罗斯套娃式)结构——想从 1024 维降到 512 维，不必把全量语料重跑一遍嵌入，直接砍掉后 512 个浮点数就能开始测试；三是一月份推出的共享嵌入空间，小、中、大、nano 四个模型互相兼容，可以用大模型嵌入语料、开发期用免费 nano 查询来省 token 成本。还有 auto embeddings:指定集合、属性和模型，文档一变，向量、索引自动更新。

## 嵌入模型没有商品化

Pete 最反共识的判断是：[[嵌入模型|嵌入模型]]远未商品化。「大多数人认为嵌入模型已经商品化了，这不是事实。

」他给出的参照：Hugging Face 的 [[RAG|RAG]] 基准(RTAB)上 Voyage 模型常年居首，相比常见的云厂商默认选项，检索质量差距可达 14%——而 14% 的差距可能就是幻觉和正确答案的区别。Anthropic 自己没有嵌入模型，推荐的就是 Voyage。另外在嵌入模型之上加一个重排序器，通常还能再白拿 5-10% 的检索质量提升。

## 智能体记忆：写入、更改、召回、遗忘

Pete 把 LLM 应用架构的演进讲成补短板的历史：ChatGPT 刚出来时只是「查询进上下文、结果出来」；因为模型只在公开数据上训练，要注入企业专有数据就得靠 RAG(检索增强生成)；2025 年靠工具和 MCP 解决了知识截止日期问题(能查实时信息了)；再后来智能体开始循环执行，但每次传给 LLM 的上下文窗口都是全新的——这时候就需要记忆。早期做法粗暴：短期记忆是把本会话所有响应塞进上下文，长期记忆是把过去三天所有会话也塞进去。

两个副作用：一是 [[token 最大化|token 最大化]]烧钱(Uber 今年早些时候 13 周烧光全年 token 预算上了头条)，二是有学术研究表明上下文最开头和最末尾各约 7K token 最重要，中间那一大坨只会「把 LLM 搅浑」。所以方向变成了「为这一轮循环选出刚好的那 20 万 token」——更聪明的短期/长期记忆，加上新出现的「分类记忆」(比如公司特有的 100 个术语里，只取这一轮相关的 5 个)。

至于维护，他引用同事的话总结成四个动作：「写入、更改、召回、遗忘」——而遗忘是目前最难的部分，记忆有半衰期。他提醒应用作者现在有两个职责：给记忆系统一个 token 预算去取「最好的那 50K token」,以及把答案送回去让记忆系统整理入库。

架构警告：别用多遍 LLM 调用来做分类和压缩语料，那样 token 照样失控——该用便宜的嵌入器和重排序器干的活，别让 LLM 干。数据太多的场景也可以混合：图结构走两到六层，到叶子节点再做向量检索，零售客户按商品类目分层就是这么做的。他觉得做得很漂亮的例子是 Eleven Labs:每个客户多个小型智能体的「微智能体」架构，配合各自的上下文记忆。

## 自建还是购买：先选对问题

今年他跑了七个国家、聊了约一百个客户，大致三个阵营：买一个工具许可证就宣布「AI 战略完成」的；做过 POC 但在 ROI 上挣扎的——他的判断是「多半是选错了问题」。选问题的三问：你业务当前的前 10-15 个问题是什么？

哪些你有好数据？哪些已有现成指标？

没有基线指标就永远不知道 AI 有没有用。呼叫中心是典型的低垂果实：单次通话成本、话务量早就有数，数字一跳就能归因。

相反，「代码行数多五倍」这种炫耀在他看来是个糟糕的指标。而糟糕的数据质量和安全态势不会被 AI 解决，只会被 AI 放大。

眼下财富 500 强大多在做「有人类在环」的面向员工的用例——KPI 现成、风险可控；工资泄露给同事尴尬，客户数据串了可是要副总裁坐飞机去救火的。至于行业成熟度，他的判断很清醒：「我们建数据库建了 60 年，建智能体才 18 个月，还没人知道所有答案。

」智能体领域还没有自己的 LAMP 技术栈，没有 React 和 Angular——但会有的。MongoDB 自己也在适应：MCP 服务器、以及六到八个打包好的「智能体技能」——把数据建模、运维优化的 playbook 做成 markdown 文件直接喂给智能体。

## 世界不只有硅谷

最让主持人意外的观察：Pete 今年聊过的两个最成熟的客户，一个在墨西哥城，一个在圣保罗——而且他们起初都以为美国对手比自己先进，事实恰恰相反。他的解释不是美国公司保守，而是获取途径民主化了：几乎每个国家都有超大规模云的数据中心，模型、向量库、嵌入、重排序的获取门槛比云时代和移动时代低得多，地理壁垒正在消失。

## 本集带走

- **检索决定成本调整后的智能体性能**：别再无脑拉满上下文——开头和结尾各约 7K token 最重要，中间多是噪音；给记忆系统一个 token 预算，让它取「刚好的那一段」。
- **嵌入模型不是商品**：换嵌入模型有高达 14% 的检索质量差距，可能就是幻觉与正确答案之差；加重排序器通常再白拿 5-10%。
- **分块别再手调了**：上下文化分块让你把「目标原文 + 上下文」一起传入，更小的分块换来更高的检索质量；Matryoshka 结构让降维度不用重跑全量语料。
- **记忆系统四动作**：写入、更改、召回、遗忘——最难的是遗忘，记忆有半衰期；分类压缩的活交给便宜的嵌入器和重排序器，别用多遍 LLM 调用。
- **选问题先看指标**：挑业务前 10-15 个问题中「有好数据、已有度量」的(如呼叫中心)，没有基线就证明不了 ROI;代码行数是坏指标。
- **别等标准答案**：智能体才 18 个月，没有 LAMP 堆栈可抄，边做边摸索是常态。

<div class="pd-sec pd-sec-q">全部金句 <span>14 条</span></div>

> <span class="qz">我甚至敢说，我们的教育系统有一种偏见，一种历史偏见，即「汝当永远规范化」。</span>  
> *I'll go as far as to say, like, our education system has a bias, a historical bias, that thou shalt always normalize.*  
> <span class="qm">—— 嘉宾 · [15:50]</span> ^q1

> <span class="qz">大多数人认为我们是 schemaless 的，但这实际上并不正确。不是说我们是 schemaless 的，而是说我们是 schema 灵活的。</span>  
> *Most people think that we're schemaless, and that's not actually true. It's not that we're schemaless, it's that we're schema flexible.*  
> <span class="qm">—— 嘉宾 · [21:32]</span> ^q2

> <span class="qz">有两种开发者：一种是爱 MongoDB 的，另一种是还没试过我们的。</span>  
> *there's two kinds of developers. There's those that love MongoDB and there's ones that haven't tried us.*  
> <span class="qm">—— 嘉宾 · [32:53]</span> ^q3

> <span class="qz">当你翻转这个剧本时，结果是你可以用更小的分块大小获得更好的检索质量，否则这是不可能的。</span>  
> *When you flip that script, it turns out you can get better retrieval quality with a smaller chunk size, which otherwise is not possible.*  
> <span class="qm">—— 嘉宾 · [41:34]</span> ^q4

> <span class="qz">在未来三年构建 AI 智能体的开发者，会超过过去三年的总和。</span>  
> *more developers will build AI agents in the next three years than did in the last three years.*  
> <span class="qm">—— 嘉宾 · [42:10]</span> ^q5

> <span class="qz">大多数人认为嵌入模型已经商品化了，但这不是事实。根据你选择什么样的嵌入模型，你在检索质量上可能会有非常巨大的差别。</span>  
> *Most people think embedding models are commoditized, and that is not true. There is a very big difference that you can get in retrieval quality based on what embedding model you choose.*  
> <span class="qm">—— 嘉宾 · [50:00]</span> ^q6

> <span class="qz">Anthropic 在市面上没有嵌入模型。他们推荐我们。</span>  
> *Anthropic does not have an embedding model in market. They recommend us.*  
> <span class="qm">—— 嘉宾 · [50:09]</span> ^q7

> <span class="qz">有几项学术研究表明，最开头的 7K 和最末尾的 7K token 是最重要的，而中间的那些东西最终只会在 LLM 试图想出答案时把它搅浑、让它困惑。</span>  
> *There's a couple academic studies that show that like the first 7K and like the last 7K tokens are the most important and the stuff that's in between can end up just muddying and confusing the LLM as it's trying to come up with an answer.*  
> <span class="qm">—— 嘉宾 · [56:56]</span> ^q8

> <span class="qz">我们构建智能体才差不多 18 个月，老兄。还没人知道所有的答案，我们都在某种程度上共同摸索。</span>  
> *We've been building agents for like 18 months, man. Like nobody knows all the answers yet. We're all sort of collectively figuring it out.*  
> <span class="qm">—— 嘉宾 · [61:15]</span> ^q9

> <span class="qz">写入、更改、回忆、遗忘。因为这些记忆是有半衰期的，对吧？</span>  
> *Write, change, recall, forget. Because these things have a half-life to them, right?*  
> <span class="qm">—— 嘉宾 · [62:37]</span> ^q10

> <span class="qz">我会担心任何这样的记忆架构：它不依赖成本更低的嵌入器和重排序器，而是依赖 LLM 的多遍处理来帮你分类并缩小数据语料库。</span>  
> *I would worry about any memory architecture that instead of relying on lower costs embedders and re-rankers is relying on multiple passes of the LLM to help you categorize and shrink the corpus of data*  
> <span class="qm">—— 嘉宾 · [66:35]</span> ^q11

> <span class="qz">像糟糕的数据质量和糟糕的安全态势这类问题不会被 AI 解决，它们会被 AI 放大。</span>  
> *Things like bad data quality and bad security posture don't get solved by AI, they get amplified by AI.*  
> <span class="qm">—— 嘉宾 · [68:54]</span> ^q12

> <span class="qz">任何做这行有一段时间的人都知道，代码行数是一个很糟糕的指标。</span>  
> *Anybody who's been doing it any length of time knows that lines of code is a terrible metric.*  
> <span class="qm">—— 嘉宾 · [69:59]</span> ^q13

> <span class="qz">目前还没有智能体的 LAMP 技术栈，不像我们在 Web 开发领域那样。我们会到达那一步的。</span>  
> *There's no LAMP stack for agents yet in the way that we have with web development. We will get there.*  
> <span class="qm">—— 嘉宾 · [70:56]</span> ^q14

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-17-talks-every-company-should-have-a-brain-garry|用 Markdown 组建一支军队:Y Combinator 掌门人的 AI 原生公司蓝图]]<span class="pd-rz">同概念:RAG、智能体 (agent)</span>
- [[2026-07-24-talks-how-bridgewater-built-an-ai-analyst-that|桥水内部版 AI 分析师 PAT:把数小时研究压到几分钟]]<span class="pd-rz">同概念:RAG、智能体 (agent)</span>
- [[2026-08-14-cogrev-lindy-teammate-flo-crivello-on-multiplay|Lindy 创始人谈 AI 员工的上下文战争：从红黑树到"走去洗车"]]<span class="pd-rz">同概念:RAG、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)</span>
- [[2026-02-15-lennys-sequoia-ceo-coach-why-its-never-been|Brian Halligan：CEO 的实战手册]]<span class="pd-rz">同公司:MongoDB · 同概念:智能体 (agent)</span>
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)</span>

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
