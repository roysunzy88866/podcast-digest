---
title: 把上下文当资产预编译：Pinecone Nexus 如何重做智能体检索
podcast: Software Engineering Daily
date: 2026-09-21
source_url: undefined
duration: "55:31"
type: episode
cover: "#64748b"
description: Pinecone 工程副总裁 Jörg 与 Kevin Ball 深聊为什么 RAG 不够用，以及如何把上下文预计算成带元数据、权限和版本的一等公民资产。
host: "[[Kevin Ball]]"
cohosts: ["[[Yorg Shad]]"]
companies: ["[[Pinecone]]", "[[Nexus]]"]
concepts: ["[[RAG]]", "[[物化视图]]", "[[上下文]]", "[[向量数据库]]", "[[知识图谱]]", "[[语义层]]", "[[元数据]]", "[[智能体]]", "[[LLM]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-03-sed-moving-beyond-rag-with-precomputed-conte#post","headline":"把上下文当资产预编译：Pinecone Nexus 如何重做智能体检索","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-03-sed-moving-beyond-rag-with-precomputed-conte","mainEntityOfPage":"https://talk.solomind.cc/2026-09-03-sed-moving-beyond-rag-with-precomputed-conte","description":"Pinecone 工程副总裁 Jörg 与 Kevin Ball 深聊为什么 RAG 不够用，以及如何把上下文预计算成带元数据、权限和版本的一等公民资产。","datePublished":"2026-09-21","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Kevin Ball"},{"@type":"Person","name":"Yorg Shad"},{"@type":"Organization","name":"Pinecone"},{"@type":"Organization","name":"Nexus"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"物化视图 (materialized view)"},{"@type":"Thing","name":"上下文 (context)"},{"@type":"Thing","name":"向量数据库 (vector database)"},{"@type":"Thing","name":"知识图谱 (knowledge graph)"},{"@type":"Thing","name":"语义层 (semantic layer)"},{"@type":"Thing","name":"元数据 (metadata)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"LLM"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"把上下文当资产预编译：Pinecone Nexus 如何重做智能体检索","item":"https://talk.solomind.cc/2026-09-03-sed-moving-beyond-rag-with-precomputed-conte"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把上下文当资产预编译：Pinecone Nexus 如何重做智能体检索</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 把上下文当资产预编译：Pinecone Nexus 如何重做智能体检索

<div class="pd-byl"><b>Yorg Shad</b> · Pinecone 工程副总裁 · 2026-09-21</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-03-sed-moving-beyond-rag-with-precomputed-conte.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">在大多数情况下，已经不再是由人来写代码了。理想情况下，我有一份规格说明，代码是从它生成的。</div><div class="a">— Yorg Shad <button class="pd-ts" data-t="24:45" data-who="Yorg Shad" data-en="So it's not someone writing code anymore in most cases. Ideally, I have a spec. I have a spec from where the code is generated." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Kevin Ball]] · [[Yorg Shad]]
>
> **公司** [[Pinecone]] · [[Nexus]]
>
> **概念** [[RAG]] · [[物化视图]] · [[上下文]] · [[向量数据库]] · [[知识图谱]] · [[语义层]] · [[元数据]] · [[智能体]] · [[LLM]]

这一集聊的是检索技术的前沿：把大模型接到自己数据上的标准做法 [[RAG|RAG]]（检索增强生成，即[[智能体|智能体]]在查询时临时去[[向量数据库|向量数据库]]搜相关内容）遇到了什么瓶颈，以及怎么换个思路解决。主角是 [[Pinecone|Pinecone]] 的工程副总裁 Jörg——他做了近 20 年数据库系统，从 Hadoop 时代的分布式查询优化、SAP HANA，到早期 Kubernetes、图数据库的 CTO，再到现在主持开发了 Pinecone 的新产品 [[Nexus|Nexus]]，一个「知识引擎」。主持人是资深工程师 [[Kevin Ball|Kevin Ball]]。

> 【背景】Jörg 曾担任图数据库 ArangoDB 的 CTO。

钩子是这么一个观察：智能体每次回答问题，都在现场重复同样的检索和整理工作——而这件事本可以做一次就存下来，像数据库里的**[[物化视图|物化视图]]**(把查询结果预先算好存起来的表)。

## RAG 的瓶颈：每个问题都从头查一遍

Jörg 认为生成式 AI 的价值来自把它和你自己的数据结合——要么因为隐私不能共享，要么对任务足够特殊。早期的 RAG 模式很好用：向量数据库做语义的稠密检索，再配上稀疏检索和全文搜索，智能体需要信息就去查相似内容。

但实践中发现，智能体拿到检索结果后往往还要做一遍整理——类似 ETL(抽取、转换、加载)的清洗加工——而且**这份工作在每个查询上都即时重做一遍**。这就是 Nexus 想切进去的那一层：与其每次现场拼装，不如预先算好一份有意义的[[上下文|上下文]]。

更大的问题在可靠性上。「[[LLM|LLM]] 或智能体本质上是概率性系统，它们在即时做选择。」如果你问「去年收入是多少」，你希望答案随时间保持一致，而不是因为每次检索到的条件不同、年度营收取值不同而波动。<button class="pd-ts" data-t="08:51" data-who="Jörg" data-en="If we go back to what we said about Rack, if I'm doing that at each individual query, I'm doing it over and over again. LLMs or agents, therefore, they're just probabilistic systems." aria-label="回原文"></button>

## 上下文是一等公民：有权限、有版本、有血缘

Nexus 的核心动作是**把上下文当作系统里独立的实体**，像数据库对待表一样对待它。这带来三层好处：

**权限**。Jörg 举了个很实际的例子：机密财务数据不能给任何 LLM,但你可以为它构建一个只含月度聚合、不含敏感明细的物化视图，让智能体只能通过这个接口访问。上下文可以分个人级(我最近一小时在做的任务)、部门级(整个财务团队共享)、公司级，针对一个具体任务再把几份组装成一组「元上下文」。

**可复现**。预先整理好的上下文让同样的查询得到一致的结果。

**血缘与审计**。因为上下文是策展出来的资产，你能追查它是两天前 UTC 下午 2 点的某个数据集生成的，也能解释为什么某条信息在里面。Jörg 回忆自己做特征存储时，曾花很多个夜晚重建血缘追踪来调试生产问题——现在这个能力是自带的。<button class="pd-ts" data-t="09:27" data-who="Jörg" data-en="So I think that kind of reproducibility is another important piece, which makes it more reliable. And with that, I think I'm also getting in addition, I'm kind of getting, this might be more just an enterprise concern by itself, but I'm also getting this audit trails, I'm getting lineage trails." aria-label="回原文"></button>

## 一份上下文里到底装了什么

关键认知是：**知识上下文不必是单一表示**。Nexus 里的一份上下文同时包含：一个向量索引(可做相似性搜索)、一个带 schema 的结构化部分、以及[[元数据|元数据]]。

策展时他们会识别数据中有意义的实体(日期、人名等)——Jörg 说这本质上是在构建一个「廉价版的[[知识图谱|知识图谱]]」：不是严格的图，而是靠嵌入和相似性搜索撑起来的模糊关系网络。旁边还有元数据：新鲜度、血缘信息，以及指向**[[语义层|语义层]]**(把业务术语定义清楚的层)的引用——「年度收入」到底是按日历年还是偏移的财政年算，这类定义必须写明，不能靠智能体猜。<button class="pd-ts" data-t="17:17" data-who="Jörg" data-en="So having like very well-defined terms so that I actually know if I'm talking yearly revenue, what is the definition of that field? What do we mean by yearly? Are we following calendar years or are we having like an offset fiscal year for some startups?" aria-label="回原文"></button>

元数据还有个妙用：**让智能体自己挑对的信息**。LLM 是很好的规划者，只要工具不太多，它很擅长选对工具；上下文的描述同样可以结构化——里面有什么、新鲜度如何。想取最新销售数字时，如果元数据显示这份上下文两周没更新了，LLM 就知道该换一个。<button class="pd-ts" data-t="13:54" data-who="Jörg" data-en="Imagine, for example, you're trying to get the latest sales numbers from a context and you know that a context last has been updated two weeks ago. Then probably this is a sign that this is not very much up-to-date and this meta-information in the context metadata will give the LLM a really good indication it might not want to use that." aria-label="回原文"></button>

## 策展怎么做：规格说明 → 生成的代码 → 版本化

物化流程分两种模式。一种是通用型：分析数据集、抽取关键实体、建结构化视图，什么问题都可能被问到。另一种更聚焦：如果事先知道要回答哪些问题(比如用户带着几个具体问题来)，策展就有了方向，少量示例问题还能被放大成更大的评测集，用于质量的维护和迭代——「基本上就是一个不断迭代改进的步骤」，并且要保证数据集更新后这些检查仍然成立。<button class="pd-ts" data-t="25:43" data-who="Jörg" data-en="And just by having like a few short examples, we can actually generate a larger dataset for quality, maintenance, and iteration. And I think once you have that, it's basically an iteration step." aria-label="回原文"></button>

Jörg 用了一个很形象的类比：就像过去读书时有人坐在那里给文档划重点、用不同颜色标记关键概念，再把它们提取出来存成另一种格式——「只是如今这一步由智能体来做」。

值得注意的一点：策展程序本身也是被生成的——现在大多数情况已不再由人写代码。「理想情况下，我有一份规格说明，代码从它生成。」<button class="pd-ts" data-t="24:48" data-who="Jörg" data-en="So it's not someone writing code anymore in most cases. Ideally, I have a spec. I have a spec from where the code is generated." aria-label="回原文"></button> 早期策展步骤就是一个 Python 程序；给它做版本化非常关键，因为数据集会随时间演变，策展逻辑也要跟着迭代，旧版本还能帮智能体生成新的策展代码。

## 怎么暴露给智能体：数据 + 元数据的配对

Nexus 设计了自己的查询语言 NoQL——不只是 SQL 式的取数，智能体可以在查询里插入元数据要求，还能**指定输出 schema**:我要的价格必须是美元、必须是低于一万的正数，系统会自动强制执行这些约束。响应端同样返回数据加元数据的组合，比如「答案是五，但我只有 10% 的把握」——这两个事实一起返回才有价值。

Jörg 认为智能体和人类消费数据的方式有一个本质区别：人发一条查询、拿一个结果就走；智能体能迭代，可以围绕低置信度的结果重新规划。「希望它不去用那条 5% 置信度的信息，但它可以利用这个元信息，为下一步做出不同的决策，而不是只得到一句『没有相关信息』。」<button class="pd-ts" data-t="33:44" data-who="Jörg" data-en="What is my next planning step? Hopefully, it's not going to use the information, but it can use that meta information to actually take a different decision for its next step going forward rather than just getting like, oh, no information available around that, right?" aria-label="回原文"></button> 这里有个治理视角的分歧：不信任智能体时，你可以设硬约束——「信心低于 50% 的东西，干脆不要给智能体」；信任它时，反而应该给得越多越好。

这也回应了成本问题：多轮循环的 token 开销很大，而且 LLM 要同时处理的抽象层越多，既贵又不可靠。预策展的价值正在于**把发现类的子循环从运行时挪走**——提前做一次贵的，之后每次交互都少一层迭代。

## 离线持续策展与标准化展望

策展不是一次性的。Jörg 描绘了一个很务实的图景：初始数据没变，但每晚闲置的 GPU 集群可以拿来持续打磨已策展好的上下文——折叠或扩展知识图谱、用图机器学习找新连接、按贝叶斯方式更新边的置信度。

更妙的是，**进来的问题本身就是新数据**：「我获得了更多数据，不是靠初始数据变化，而是靠观察进来的问题，这样我就知道我可能需要回答什么。」<button class="pd-ts" data-t="46:56" data-who="Jörg" data-en="using graph machine learning to identify new connections, try to group things into certain clusters, and actually keep curating it, potentially also a Bayesian approach with additional questions I've seen come in." aria-label="回原文"></button> 冲突和不完美数据也可以这样处理：标出「这个数据集有冲突」本身就是有价值的信息；学到某个数据源最近两天不可靠，就在策展规则里忽略最近两天。

由于上下文有接口抽象，内部表示可以随意演进——换 schema、做反规范化，消费者看到的接口不变，就像 Docker 容器或小型数据产品。至于这一层会不会标准化成独立的抽象层：Jörg 认为眼下垂直整合端到端的好处太多(元数据不重复、不脱同步，血缘好追)，标准化至少还要两年迭代，大概率从查询/响应的格式开始，顺着技术栈往下走。

## 本集带走

- **RAG 的隐藏成本在检索之后的整理**：智能体每个查询都在现场重复做一遍 ETL 式加工，而且概率性检索让同一问题答案漂移。把它预计算成物化视图式的「上下文」，可复现、可审计。
- **上下文要当成一等公民管理**：有权限(个人/部门/公司级，敏感数据只暴露聚合视图)、有版本、有血缘追踪——这几十年数据库系统工程积累的好处，直接搬过来用。
- **一份上下文 = 多模态组合**：向量索引 + 结构化 schema + 实体关系(廉价版知识图谱)+ 元数据(新鲜度、语义层定义)，元数据让智能体自己判断该不该用这份信息。
- **策展流程也要版本化**：规格说明 → (生成的)策展代码 → 策展产物；少量示例问题可放大成评测集持续迭代质量，数据集演进时代码跟着改、旧版本可回溯。
- **给智能体的接口应该是「数据 + 元数据」的配对**：让查询能指定输出格式和约束，让响应带上置信度——低置信度信息即使不可用，元信息也能帮智能体换一个规划方向。
- **策展可以离线持续做**：夜间闲置算力用来打磨上下文，进来的真实问题就是最宝贵的策展信号。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">在大多数情况下，已经不再是由人来写代码了。理想情况下，我有一份规格说明，代码是从它生成的。</span>  
> *So it's not someone writing code anymore in most cases. Ideally, I have a spec. I have a spec from where the code is generated.*  
> <span class="qm">—— Yorg Shad · [24:45]</span> ^q1

> <span class="qz">实际上，我想要一个约束：任何我信心低于 50% 的东西，干脆不要给智能体。</span>  
> *I actually, I want like a constraint, like anything where I'm less than 50% certain, don't even give out to the agent.*  
> <span class="qm">—— Yorg Shad · [33:20]</span> ^q2

> <span class="qz">我们需要为智能体提供好得多的语义，因为人们只是把那些放在脑子里，但智能体需要它们就在那里触手可及。</span>  
> *we need much better semantics for agents because people just put that in their heads, but agents need it right there.*  
> <span class="qm">—— Kevin Ball · [55:18]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-16-talks-pinecone-2-0-edo-liberty-pinecone|给智能体一个「知识层」：让 AI 不再是入职第一天的聪明新员工]]<span class="pd-rz">同公司:Nexus、Pinecone · 同概念:RAG、智能体 (agent)、NoQL</span>
- [[2026-09-18-talks-total-recall-agent-memory-and-harness-en|模型是租的，harness 才是你的：拆解智能体的七层框架]]<span class="pd-rz">同概念:RAG、智能体 (agent)、语义层 (semantic layer)、MCP</span>
- [[2026-08-14-cogrev-lindy-teammate-flo-crivello-on-multiplay|Lindy 创始人谈 AI 员工的上下文战争：从红黑树到"走去洗车"]]<span class="pd-rz">同概念:RAG、上下文 (context)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-12-beyondcoding-wes-bos-how-developers-stand-out-when-ai|当所有人都在用智能体写代码，你靠什么脱颖而出：与 Wes 聊开发者的当下]]<span class="pd-rz">同概念:LLM、智能体 (agent)、上下文 (context)</span>
- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同公司:Pinecone · 同概念:智能体 (agent)</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)</span>

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
