---
title: 智能体时代的数据库：Andy Pavlo 谈 AI 如何重写数据库规则
podcast: The MAD Podcast
date: 2026-10-08
source_url: undefined
duration: "76:45"
type: episode
cover: "#64748b"
image: "/covers/2026-10-08-mad-what-happens-when-billions-of-ai-agents.jpg"
description: 卡内基梅隆大学教授、ClickHouse Labs 创始人 Andy Pavlo 解析智能体如何改变数据库：护栏、10-100 倍流量、自调优与图数据库败局。
host: "[[Andy Pavlo]]"
cohosts: ["[[Matt Turk]]"]
companies: ["[[ClickHouse]]", "[[Databricks]]", "[[Neon]]", "[[Postgres]]", "[[Snowflake]]", "[[TurboPuffer]]", "[[Replit]]", "[[Neo4j]]", "[[SQLite]]", "[[NVIDIA]]", "[[Oracle]]", "[[DuckDB]]", "[[Anthropic]]"]
concepts: ["[[智能体]]", "[[护栏]]", "[[沙箱]]", "[[分支]]", "[[向量数据库]]", "[[向量搜索]]", "[[RAG]]", "[[text to SQL]]", "[[语义层]]", "[[MCP]]", "[[图数据库]]", "[[GPU 数据库]]", "[[HTAP]]", "[[LLM]]", "[[关系模型]]", "[[智能体记忆]]", "[[DBA]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/covers/2026-10-08-mad-what-happens-when-billions-of-ai-agents.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-08-mad-what-happens-when-billions-of-ai-agents#post","headline":"智能体时代的数据库：Andy Pavlo 谈 AI 如何重写数据库规则","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-08-mad-what-happens-when-billions-of-ai-agents","mainEntityOfPage":"https://talk.solomind.cc/2026-10-08-mad-what-happens-when-billions-of-ai-agents","description":"卡内基梅隆大学教授、ClickHouse Labs 创始人 Andy Pavlo 解析智能体如何改变数据库：护栏、10-100 倍流量、自调优与图数据库败局。","datePublished":"2026-10-08","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-10-08-mad-what-happens-when-billions-of-ai-agents.jpg","about":[{"@type":"Person","name":"Andy Pavlo"},{"@type":"Person","name":"Matt Turk"},{"@type":"Organization","name":"ClickHouse"},{"@type":"Organization","name":"Databricks"},{"@type":"Organization","name":"Neon"},{"@type":"Organization","name":"Postgres"},{"@type":"Organization","name":"Snowflake"},{"@type":"Organization","name":"TurboPuffer"},{"@type":"Organization","name":"Replit"},{"@type":"Organization","name":"Neo4j"},{"@type":"Organization","name":"SQLite"},{"@type":"Organization","name":"NVIDIA"},{"@type":"Organization","name":"Oracle"},{"@type":"Organization","name":"DuckDB"},{"@type":"Organization","name":"Anthropic"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"分支 (branching)"},{"@type":"Thing","name":"向量数据库 (vector database)"},{"@type":"Thing","name":"向量搜索 (vector search)"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"text to SQL"},{"@type":"Thing","name":"语义层 (semantic layer)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"图数据库 (graph database)"},{"@type":"Thing","name":"GPU 数据库 (GPU database)"},{"@type":"Thing","name":"HTAP"},{"@type":"Thing","name":"LLM"},{"@type":"Thing","name":"关系模型 (relational model)"},{"@type":"Thing","name":"智能体记忆 (agent memory)"},{"@type":"Thing","name":"DBA"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"智能体时代的数据库：Andy Pavlo 谈 AI 如何重写数据库规则","item":"https://talk.solomind.cc/2026-10-08-mad-what-happens-when-billions-of-ai-agents"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>智能体时代的数据库：Andy Pavlo 谈 AI 如何重写数据库规则</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 智能体时代的数据库：Andy Pavlo 谈 AI 如何重写数据库规则

<div class="pd-byl"><b>Andy Pavlo</b> · 卡内基梅隆大学教授 · 2026-10-08</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-08-mad-what-happens-when-billions-of-ai-agents.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">每个月都有故事说某个智能体删了点东西，导致别人丢了生产数据库。</div><div class="a">— Andy Pavlo <button class="pd-ts" data-t="00:03" data-who="Andy Pavlo" data-en="Every month there's a story where someone lost their production database because the agent deleted something." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Andy Pavlo]] · [[Matt Turk]]
>
> **公司** [[ClickHouse]] · [[Databricks]] · [[Neon]] · [[Postgres]] · [[Snowflake]] · [[TurboPuffer]] · [[Replit]] · [[Neo4j]] · [[SQLite]] · [[NVIDIA]] · [[Oracle]] · [[DuckDB]] · [[Anthropic]]
>
> **概念** [[智能体]] · [[护栏]] · [[沙箱]] · [[分支]] · [[向量数据库]] · [[向量搜索]] · [[RAG]] · [[text to SQL]] · [[语义层]] · [[MCP]] · [[图数据库]] · [[GPU 数据库]] · [[HTAP]] · [[LLM]] · [[关系模型]] · [[智能体记忆]] · [[DBA]]

数据库学界最接近「神」的人聊了聊[[智能体|智能体]]怎么把数据库世界搅得天翻地覆。

说话的人是 [[Andy Pavlo|Andy Pavlo]],卡内基梅隆大学教授,他的免费课程教会了一整代工程师(也顺带「教会」了 AI 模型——他问模型数据库问题时,模型引用的结果就是他自己),最近他加入 [[ClickHouse|ClickHouse]] 创立了 ClickHouse Labs。

全集最反直觉的一点:**智能体时代数据库需要的不是新发明,而是那些被新人们遗忘的老功夫**。

「对不了解数据库历史的人来说,这就是个蛮荒西部」,他说,「多年来我们一直有能力确保人们不做蠢事,比如删掉一张表——这些控制手段一直存在,只是每个人都想重新发明轮子。」

## 向量数据库的时代结束了,但向量搜索没有

两年前「数据库+AI」等于[[向量数据库|向量数据库]]和 [[RAG|RAG]](用相似性搜索给大模型补上下文)。

Andy 认为向量数据库其实 2016 年就有了,只是 ChatGPT 爆火后正好派上用场。但它的护城河从来不大:「归根结底,它只是一个索引。

一年之内,几乎每个数据库厂商都有自己的向量索引,现在这已经成了标准入场筹码。」

你仍然会用[[向量搜索|向量搜索]]增强智能体,只是不再需要一个只能干这个的专门数据库。

例外是超专精玩家:「我所知道的做得非常好的那家向量数据库公司是 [[TurboPuffer|TurboPuffer]],他们高度专精于以远超其他所有人的性价比做向量搜索。」

## 智能体正在创建海量数据库,而且会闯祸

智能体和数据库关系最大的变化是「[[分支|分支]]」:给生产数据库做快照副本,让编码智能体在副本上改 schema、跑测试,验证过了再上线,不碰生产。

[[Databricks|Databricks]] 收购 [[Neon|Neon]] 时有个数据:智能体创建的数据库分支比例从 30% 涨到 80%。

但没有[[护栏|护栏]]就会出事——那个著名的案例:有人用 [[Replit|Replit]] 构建应用,Replit 智能体跑进数据库删了大量文件。

「每个月都有故事说某人的生产数据库没了,因为智能体删了不该删的东西。」

他的药方很朴素:把智能体当刚学步的幼儿,用分支建[[沙箱|沙箱]]、设好权限。

人们偷懒用全公司同一个密码、再把密码给智能体,之后还纳闷为什么出事。

体量层面他预判「冲击数据库的查询数量会有潜在的 10 到 100 倍增长」——人类只在醒着时操作,一次做一件事,智能体 24 小时不间断,每人可以带数百个。

但说实话,他也不知道智能体的查询模式和人类相比是更复杂还是更浅:有人说智能体的 SQL 一次只读一两张表,远不如 BI 工具里的复杂连接。

「这还有待观察,这也是我正在研究的东西。」

## 「一切都是数据库」:文件系统 vs 数据库之争是个伪问题

被问到[[智能体记忆|智能体记忆]]该用文件系统还是数据库,他的回答斩钉截铁:「什么是文件系统?它就是一个数据库,对吧?

一切都是数据库。」 一个目录加一堆 JSON 文件是数据库,他女儿三岁时每天在笔记本上记温度、「合上本子提交保存」也是数据库。

真正的区别只在于保障:「数据库系统提供了文件系统也能提供的某些保障,而跨多个智能体的共享状态就是其中之一。」

智能体输入的上下文反正都是人类可读文本,来源无所谓——但 [[SQLite|SQLite]] 那种安全保证,文件系统给不了。

「说到底,每个人都应该把所有东西放进数据库系统里。」

至于模型会推荐什么数据库:几乎总是 [[Postgres|Postgres]],因为预训练数据集里全是它。

他透露有两家数据库公司问过他,怎么让智能体优先推荐自家产品而不是 Postgres——「这基本上就像 SEO,去找那些构建模型的人谈,别来找我。」

## 图数据库:「没有任何理由让人真的想用它们」

这是全集火力最猛的一段。

Andy 在 Hacker News 上和人有个赌局:如果 2030 年[[图数据库|图数据库]]市场超过关系型数据库,他就穿「我爱图数据库」的 T 恤、印在驾照上、挂官网直到死。

「现在是 2026 年,还剩四年。这不会发生。我非常有把握。」

他的论据:图遍历本质上就是对表做自连接,关系型数据库只要把遍历放在服务器端做(SQL 2023 标准已加入属性图查询,[[Oracle|Oracle]] 已支持),就能轻松跑赢 [[Neo4j|Neo4j]]——「说你比 Neo4j 快,就好比说你比某个坐轮椅的人跑得快。」

## AI 给数据库:从 vibe code 整个数据库到 15 分钟调优

反向呢?「智能体基本上可以实现任何你现在想构建的数据库系统。」

一年前智能体还完不成他 CMU 课程的完整项目(Opus 4 发布后「打开了闸门」——课程材料全开源在 GitHub 上,训练数据管够)。

数据库圈的老话是「三年做出前 90%,剩下 10% 再花七年」,而他认为现在「人们可以用 vibe coding 构建出整个数据库系统,肯定有公司正在这么做」。

他的「数据库的数据库」追踪开源项目的提交,超过 60% 的开源数据库系统已有智能体联署的提交。

他十年前的「自动驾驶数据库」项目(Peloton)当时卡在缺训练数据——生产库上不能乱试,预发布环境硬件和负载又从不一样。

[[LLM|LLM]] 改变了这一点:它们读遍了网上所有调优博客、文档和最佳实践。

「LLM 能让你走完大约 85% 的路,」而且定制模型要训练几小时才出的最优配置,LLM 15 分钟就能给出「足够好」的答案——对大多数人足够了。

一个扎心的发现:太多人跑的是云平台的默认配置,「他们会告诉我们,哦,我们以为 Amazon 在帮我们调优。我说,不,他们没有。」

## HTAP、GPU 数据库与市场的「停滞」

Databricks 收购 Neon、[[Snowflake|Snowflake]] 和 ClickHouse 都加 Postgres 服务——交易型(OLTP)与分析型(OLAP)正在合流。Andy 的判断:该不该都做?该。

但「两引擎一份数据」的理想 [[HTAP|HTAP]] 架构几十年没起飞,原因是组织而非工程:「公司里运营侧的人不想要那种操作做得还行、分析也做得还行的东西,他们想要最好的操作型数据系统——不管好坏,现在那就是 Postgres。」

先做分析、后加事务(Databricks、ClickHouse 路线)是他眼中更聪明的打法,虽然「我无法证明为什么」。

[[GPU 数据库|GPU 数据库]]曾有一轮(2010 年代)因「必须把整个数据库塞进显存」而熄火,如今 [[NVIDIA|NVIDIA]] 吞并了一批苦苦挣扎的玩家、全力押注,ClickHouse 也在研究。

他持保留态度:「GPU 是所有硬件里最贵、最难拿到的,现在你要说你的整个设备都跑在 GPU 上?至少短期内我不知道这说不说得通。」

他自己在新硬件上的履历也确实惨——为 Intel Optane 持久内存做的研究,产品线被砍;为存内处理芯片做的研究,公司被 Qualcomm 收购后项目被砍。

对市场「停滞」的说法,他的回应是参照系错了:相对于 AI,一切都显得停滞——「就好比抓一只猎豹,喂一堆可卡因,再塞进法拉利。

人们开发这些东西的速度简直是疯了。」

但数据库的根本不会变:「数据的形态不会发生巨变,以至于要求我们推翻关于数据库的全部已知。

就像你不会为了替换一加一等于二而发明一套新的算术。[[关系模型|关系模型]]本身就是表示数据的基础。」

一个疯狂的畅想:不再为每个应用配通用数据库,而是「为这一件事 vibe code 一个完全契合的数据系统」并让高度特化可持续——这可能是下一个大的研究问题。

至于他为什么离开学术界去 ClickHouse Labs:美国科研经费不再,而且「现在招一个博士生意味着什么——当智能体差不多能产出东西、和我这个教授一起写论文的时候」。

ClickHouse 允许他做真研究、失败也没关系,而且能在真实生产系统上验证想法——「而不是我写完论文后指望有人来采纳」。

## 本集带走

- **给智能体配护栏,用的是老办法**:分支(生产库快照副本)+ 权限控制,让智能体在沙箱里改代码、跑测试,验证后再上线——别重新发明轮子,数据库几十年的保护机制直接暴露给智能体就行。
- **别用全公司同一个密码跑智能体**:最常见的灾难根源不是技术,是偷懒的权限管理。
- **智能体记忆:直接上数据库**:文件系统也是数据库但缺保障;跨多智能体共享状态、SQLite 式的安全写入,数据库系统都原生提供。
- **[[text to SQL|text-to-SQL]] 可行但要砸钱**:裸用现成工具约 60% 准确率;一家大银行投入多年和数百万美元建[[语义层|语义层]]后做到 99.5%——可行,但不便宜。
- **LLM 调优数据库能到 85%**:15 分钟出「足够好」的配置;先检查自己是不是还在跑云平台默认配置——那是最大的低垂果实。
- **图数据库别赌**:图遍历就是服务器端自连接,SQL 标准已支持属性图查询;Andy 押 2030 年图数据库市场不会超过关系型。
- **数据库公司的胜负手在数据库外面**:底层架构大家已经趋同(Snowflake/Vectorwise 那一套成了基本门槛),真正拉开差距的是 UI、开发者体验、数据摄取和互操作。

<div class="pd-sec pd-sec-q">全部金句 <span>15 条</span></div>

> <span class="qz">每个月都有故事说某个智能体删了点东西，导致别人丢了生产数据库。</span>  
> *Every month there's a story where someone lost their production database because the agent deleted something.*  
> <span class="qm">—— Andy Pavlo · [00:03]</span> ^q1

> <span class="qz">就好比，你知道，抓一只猎豹，喂一堆可卡因，然后塞进一辆法拉利。</span>  
> *It's just like, you know, taking a cheetah, giving a bunch of cocaine and putting in a Ferrari.*  
> <span class="qm">—— Andy Pavlo · [00:09]</span> ^q2

> <span class="qz">但它的护城河并没有那么大，因为归根结底，它只是一个索引。</span>  
> *But like the moat, if you will, wasn't that big because at the end of the day, it's just an index.*  
> <span class="qm">—— Andy Pavlo · [03:31]</span> ^q3

> <span class="qz">这些控制手段是存在的，只是每个人都想重新发明轮子，然后人们就吃了苦头，才学会去做那些过去早就做过的事。</span>  
> *Those controls exist, it's just everyone wants to re-event the wheel and people learn the hard way of just doing what's already been done in the past.*  
> <span class="qm">—— Andy Pavlo · [08:11]</span> ^q4

> <span class="qz">人们会偷懒，整个公司、整个组织用同一个密码，然后又把同一个密码给了智能体，之后还纳闷为什么智能体开始做不该做的事。</span>  
> *People get lazy, they use the same password across entire company, organization, and then they give the same password to the agent and now wonder why the agent started doing things they shouldn't do.*  
> <span class="qm">—— Andy Pavlo · [09:31]</span> ^q5

> <span class="qz">所以我认为冲击数据库的查询数量将会有潜在的 10 到 100 倍增长。</span>  
> *So I think there's going to be potentially a 10 to 100x increase in volume in the number of queries that are going to hit up against databases.*  
> <span class="qm">—— Andy Pavlo · [13:51]</span> ^q6

> <span class="qz">所以说到底，每个人都应该把所有东西放进数据库系统里。</span>  
> *So at the end of the day, everybody should be putting everything in a database system.*  
> <span class="qm">—— Andy Pavlo · [16:47]</span> ^q7

> <span class="qz">但他们说，通过提供一个更丰富的语义层、一个上下文层，投入了好几年的时间以及数百万数百万美元，他们能把准确率提高到 99.5% 左右，这太疯狂了。</span>  
> *But they said through this, providing a more rich semantic layer, a context layer, over multiple years and millions and millions of dollars to make this work, they were able to get it up to like 99.5%, which is insane.*  
> <span class="qm">—— Andy Pavlo · [24:51]</span> ^q8

> <span class="qz">所以，是的，我认为智能体非常有能力，当然要有足够的 token，再加上足够的引导，人们可以用 vibe coding 构建出整个数据库系统。</span>  
> *So, yeah, no, I, I, I think that the agents are very capable, you know, with enough tokens, of course, and then with enough guidance, people can, you can build, Vibecode, entire database system.*  
> <span class="qm">—— Andy Pavlo · [29:45]</span> ^q9

> <span class="qz">超过 60% 的开源数据库系统的提交来自智能体。</span>  
> *Over 60% of the open source database systems have commits coming from agents.*  
> <span class="qm">—— Andy Pavlo · [30:37]</span> ^q10

> <span class="qz">我们的模型通常需要训练好几个小时——前提是你有足够的训练数据——才能产生最完美的最优配置，但 LLM 只要 15 分钟就能产出一个足够好的东西，而对大多数人来说这就够了。</span>  
> *Our models oftentimes would take hours and hours to train, assuming you had enough training data, to produce the pristine optimal configuration, but the elements can come in just like in 15 minutes, produce something that was good enough, and that's good enough for most people.*  
> <span class="qm">—— Andy Pavlo · [34:31]</span> ^q11

> <span class="qz">我非常有把握（2030 年图数据库市场不会超过关系型数据库）。</span>  
> *I'm pretty comfortable.*  
> <span class="qm">—— Andy Pavlo · [60:50]</span> ^q12

> <span class="qz">说你比 Neo4j 快，就好比说你比某个坐轮椅的人跑得还快，对吧？</span>  
> *That's like, like Neo4j is like saying you're faster than Neo4j is like saying I'm faster than, you know, somebody maybe like that's, you know, that's in a wheelchair, right?*  
> <span class="qm">—— Andy Pavlo · [61:25]</span> ^q13

> <span class="qz">所以，图数据库，我认为，是个糟糕的主意。</span>  
> *So, like, graph database is, I think, a horrible idea.*  
> <span class="qm">—— Andy Pavlo · [62:12]</span> ^q14

> <span class="qz">我不认为数据的形态会发生巨变，以至于要求我们把关于数据库的已知知识全部推翻。</span>  
> *I don't think there's gonna be a massive change in what data looks like that requires us to throw everything away that we've known about databases.*  
> <span class="qm">—— Andy Pavlo · [70:17]</span> ^q15

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-18-talks-total-recall-agent-memory-and-harness-en|模型是租的，harness 才是你的：拆解智能体的七层框架]]<span class="pd-rz">同公司:Oracle · 同概念:MCP、RAG、智能体 (agent)、智能体记忆 (agent memory)、语义层 (semantic layer)</span>
- [[2026-09-03-sed-moving-beyond-rag-with-precomputed-conte|把上下文当资产预编译：Pinecone Nexus 如何重做智能体检索]]<span class="pd-rz">同概念:LLM、RAG、向量数据库 (vector database)、智能体 (agent)、语义层 (semantic layer)、MCP</span>
- [[2026-06-24-latent-space-databricks|Databricks 的反击：重写数据库、统一智能体与开放的执念]]<span class="pd-rz">同公司:Databricks、Neon、Snowflake · 同概念:HTAP、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:Anthropic、NVIDIA · 同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-27-doac-the-man-who-calls-bs-on-ai-ai-is-the-wor|Ed Zitron：生成式 AI 是一场万亿级骗局]]<span class="pd-rz">同公司:Anthropic、NVIDIA · 同概念:LLM、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-10-01-uncapped-uncapped-58--david-george-from-a16z-e3pl|一切都会成功：a16z 投资人 David 的 AI 全栈乐观主义]]<span class="pd-rz">同公司:Anthropic、Databricks、Replit、NVIDIA、Snowflake</span>

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
