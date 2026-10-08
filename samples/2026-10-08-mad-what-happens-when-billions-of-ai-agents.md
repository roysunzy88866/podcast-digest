---
title: 当几十亿个AI智能体冲向你的数据库
podcast: The MAD Podcast
date: 2026-10-08
source_url: undefined
duration: "76:45"
type: episode
cover: "#64748b"
image: "/covers/2026-10-08-mad-what-happens-when-billions-of-ai-agents.jpg"
description: "数据库名师 Andy Pavlo 做客 The MAD Podcast,聊智能体时代数据库的变与不变。"
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
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-08-mad-what-happens-when-billions-of-ai-agents#post","headline":"当几十亿个AI智能体冲向你的数据库","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-08-mad-what-happens-when-billions-of-ai-agents","mainEntityOfPage":"https://talk.solomind.cc/2026-10-08-mad-what-happens-when-billions-of-ai-agents","description":"数据库名师 Andy Pavlo 做客 The MAD Podcast,聊智能体时代数据库的变与不变。","datePublished":"2026-10-08","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-10-08-mad-what-happens-when-billions-of-ai-agents.jpg","about":[{"@type":"Person","name":"Andy Pavlo"},{"@type":"Person","name":"Matt Turk"},{"@type":"Organization","name":"ClickHouse"},{"@type":"Organization","name":"Databricks"},{"@type":"Organization","name":"Neon"},{"@type":"Organization","name":"Postgres"},{"@type":"Organization","name":"Snowflake"},{"@type":"Organization","name":"TurboPuffer"},{"@type":"Organization","name":"Replit"},{"@type":"Organization","name":"Neo4j"},{"@type":"Organization","name":"SQLite"},{"@type":"Organization","name":"NVIDIA"},{"@type":"Organization","name":"Oracle"},{"@type":"Organization","name":"DuckDB"},{"@type":"Organization","name":"Anthropic"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"分支 (branching)"},{"@type":"Thing","name":"向量数据库 (vector database)"},{"@type":"Thing","name":"向量搜索 (vector search)"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"text to SQL"},{"@type":"Thing","name":"语义层 (semantic layer)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"图数据库 (graph database)"},{"@type":"Thing","name":"GPU 数据库 (GPU database)"},{"@type":"Thing","name":"HTAP"},{"@type":"Thing","name":"LLM"},{"@type":"Thing","name":"关系模型 (relational model)"},{"@type":"Thing","name":"智能体记忆 (agent memory)"},{"@type":"Thing","name":"DBA"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"当几十亿个AI智能体冲向你的数据库","item":"https://talk.solomind.cc/2026-10-08-mad-what-happens-when-billions-of-ai-agents"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当几十亿个AI智能体冲向你的数据库</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 当几十亿个AI智能体冲向你的数据库

<div class="pd-byl"><b>Andy Pavlo</b> · 卡内基梅隆大学教授 · 2026-10-08</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-08-mad-what-happens-when-billions-of-ai-agents.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">每个月都有故事说某个智能体删了点东西，导致别人丢了生产数据库。</div><div class="a">— Andy Pavlo <button class="pd-ts" data-t="00:03" data-who="Andy Pavlo" data-en="Every month there's a story where someone lost their production database because the agent deleted something." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Andy Pavlo]] · [[Matt Turk]]
>
> **公司** [[ClickHouse]] · [[Databricks]] · [[Neon]] · [[Postgres]] · [[Snowflake]] · [[TurboPuffer]] · [[Replit]] · [[Neo4j]] · [[SQLite]] · [[NVIDIA]] · [[Oracle]] · [[DuckDB]] · [[Anthropic]]
>
> **概念** [[智能体]] · [[护栏]] · [[沙箱]] · [[分支]] · [[向量数据库]] · [[向量搜索]] · [[RAG]] · [[text to SQL]] · [[语义层]] · [[MCP]] · [[图数据库]] · [[GPU 数据库]] · [[HTAP]] · [[LLM]] · [[关系模型]] · [[智能体记忆]] · [[DBA]]

[[Andy Pavlo|Andy Pavlo]] 是 Carnegie Mellon 大学的教授，他的数据库课程免费放在网上，教出了一代工程师——顺带也把 AI 模型教了出来。他最近离开学界，加入 [[ClickHouse|ClickHouse]] 创办 ClickHouse Labs。

这次他和主持人 [[Matt Turk|Matt Turk]] 聊了一个很实际的问题：当[[智能体|智能体]]开始创建、读写、甚至删除数据库时，这个世界会发生什么？

## 智能体为什么需要自己建数据库？

两年前大家谈“数据库 + AI”,想的还是[[向量数据库|向量数据库]]和检索增强。

但风向变了:[[Databricks|Databricks]] 收购 [[Neon|Neon]] 时披露，智能体创建的数据库[[分支|分支]]已占了绝大多数。

分支是什么？简单说，就是给生产数据库拍一个快照，让开发者(现在是智能体)在副本上随便折腾，验证没问题再上线。

现在公司让编程智能体写新功能，智能体需要[[沙箱|沙箱]]试错，分支需求自然暴涨。

更根本的是，智能体会对世界采取行动。你让它做一个应用，应用背后终究是一个数据库，所以它就得建一个。

## “每个月都有人丢掉生产数据库”

智能体也会删库。播客里提到一个公开案例：有人用 [[Replit|Replit]] 的智能体开发，结果智能体进数据库删了大量文件。<button class="pd-ts" data-t="07:39" data-who="嘉宾" data-en="It's widely publicized on X for what it's worse. There's Jason Lankin that was trying to build something with Replit, and I think the Replit agent went to the database and deleted a lot of files, which then subsequently Replit made the right adjustments." aria-label="回原文"></button>

Andy 的态度很不客气：这是“不懂数据库历史的西部荒野”。他把智能体比作幼儿：你不能让幼儿不装[[护栏|护栏]]就在楼梯上乱跑。

要不了人盯着一个个点批准，否则无法扩展到几百个智能体同时干活。<button class="pd-ts" data-t="08:32" data-who="嘉宾" data-en="Guardrails, right? It's like, you know, you wouldn't have a new child, a new toddler, and just like not put up the guardrails so they don't fall down the stairs or put their finger in the socket, right?" aria-label="回原文"></button>

他并不认为智能体需要全新的护栏：数据库暴露的接口就那么多，能约束人类就能约束智能体。

## 流量会涨多少？可能 10 到 100 倍

人类用手机每小时只能做一件事，智能体却可以 24 小时运转。

Andy 把数据库的历史分成四波：办公室电脑、互联网、手机，现在是智能体。<button class="pd-ts" data-t="12:26" data-who="嘉宾" data-en="So I would say that would be a theory. So now agents, I think, is the next chapter in the story where Now it's every human not only has a cell phone, but now they also can have maybe hundreds of agents interacting on their behalf that are then reading, writing data from a database." aria-label="回原文"></button> 每一波都带来流量暴涨，这一波可能让查询量增加 10 到 100 倍。

但有个悬而未决的问题：==智能体的查询是更浅还是更深==？

有人的观察是，智能体往往一次只读一两个表，反而比人类在 Tableau 里做复杂连接更简单。Andy 说他正在研究这个问题。

## 文件系统也是数据库？

关于[[智能体记忆|智能体记忆]]该用文件系统还是数据库，Andy 的回答干脆利落：文件系统就是数据库，一切都是数据库。

他女儿三岁时，父女俩每天在本子上记温度，然后合上本子“提交”，那也是数据库。<button class="pd-ts" data-t="15:42" data-who="嘉宾" data-en="You have a notebook, a pencil and paper, that's a database. Like when my daughter was like three, we would, you know, we're trying to teach her the importance of databases and I would make her write down, well, we'd do it together, we'd write down the temperature every day, you know, in a little line notebook and she'd close and go commit to save the data." aria-label="回原文"></button>

区别在保障。数据库系统能提供安全性和多智能体之间的共享状态，这是普通文件做不到的。

他的结论：所有东西都应该放进数据库系统。

## 让智能体选数据库？先搞定“新 SEO”

有个有趣的细节：两家数据库公司找过 Andy,问怎么让智能体推荐自家产品而不是 [[Postgres|Postgres]]。<button class="pd-ts" data-t="19:09" data-who="嘉宾" data-en="And I will say, I can't say who, I've had two database companies ask me how to get their database to be recommended first by an agent over Postgres. And I was like, that's not, first of all, that's not what I do." aria-label="回原文"></button>

他拒绝了——这本质上是一种针对模型的搜索引擎优化。

因为模型是用网上的人类文字训练的，所以如今你让智能体从零建应用，十有八九会推荐 Postgres。

Andy 自己的烦恼恰好相反：他问数据库问题，模型引用回来的是他自己的课件。

他甚至得专门声明“不要引用 Andy Pavlo 或 Carnegie Mellon”,结果模型转头引用了另一所大学——用的还是他的课件。

## 自然语言转 SQL,终于能用了？

从 70 年代起就有人做“说人话生成 SQL”,一直没成。

现在有转机：一家大银行告诉 Andy,现成工具的准确率只有 60%,但投入多年时间和数百万美元构建丰富的[[语义层|语义层]]后，做到了 99.5%。<button class="pd-ts" data-t="24:24" data-who="嘉宾" data-en="So like, of course, it's going to regurgitate the correct answer. I actually was talking to somebody from a very large bank yesterday who said they now have a text-to-SQL interface, but in the initial implementation of it, they were doing something off the shelf and then they further refined it a little bit further in-house, but it was about 60% accuracy, meaning like the LLM or the agent could produce the right SQL query to produce the right answer 60% of the time." aria-label="回原文"></button>

当然，这是“有无限钱的银行”才玩得起的。普通人下载开箱即用的工具，达不到这个水平。

## AI 能写出整个数据库吗？

能。一年前，智能体还做不完 Carnegie Mellon 的数据库课程项目；[[Anthropic|Anthropic]] 发布 Opus 4 之后，智能体几乎不用提示就能完成全部作业。<button class="pd-ts" data-t="29:38" data-who="嘉宾" data-en="Yeah, the old adage from database systems is that it takes 10 years, but it's a system. You can build the first 90% in three years and then the remaining 10% takes the next seven years." aria-label="回原文"></button>

数据库圈有句老话：做一个数据库要 10 年，前 3 年做 90%,后 7 年磨剩下的 10%。但现在，只要引导得当，可以“氛围编程”出一个数据库系统。

数据也印证了这点：

Andy 维护着一个“数据库的数据库”网站，每晚抓取开源数据库的提交记录，发现超过 60% 的开源数据库系统有来自智能体的提交。<button class="pd-ts" data-t="30:37" data-who="嘉宾" data-en="And at this point, I think like... Over 60% of the open source database systems have commits coming from agents. And so does that, beyond the writing, also apply to the running of it?" aria-label="回原文"></button>

数据库自身的调优也在被 AI 接管。他之前创业做自动调优，最大瓶颈是缺训练数据；

大模型出现后，靠网上浩瀚的调优文章就能达到 85% 的效果，15 分钟出结果，而自训练模型要几小时。

他还发现，大量用户的数据库一直跑在云厂商的出厂默认配置上——AI 来摘这些低垂的果实，收益立竿见影。

## 为什么他去了 ClickHouse

美国大学的科研经费不如从前，而 ClickHouse 允许他做真正的、可能失败的纯研究——这在此前接触的公司里从没出现过。<button class="pd-ts" data-t="43:30" data-who="嘉宾" data-en="And then when I talked to the ClickHouse people, It almost seemed too good to be true because I was like, hey, you know, you know, they're like, hey, come do research with us." aria-label="回原文"></button>

他形容这次合作像说唱组合 Run the Jewels:两个各自成名的人凑在一起，就像第一次把花生酱和果酱抹在一起。

顺带一提，2016 年 ClickHouse 刚发布时，Andy一度怀疑它是假的：列式存储、向量化执行、压缩，一个开源系统凭空全都会，太好了不像真的。

后来证明是真的，而那套架构如今已是行业标配。

## 图数据库和向量数据库，还值得看好吗？

Andy 对[[图数据库|图数据库]]火力全开。

他打赌：如果 2030 年图数据库市场超过关系型数据库，他就穿上“我爱图数据库”的T恤当证件照，用到去世那天。<button class="pd-ts" data-t="60:40" data-who="嘉宾" data-en="I say I have an outstanding bet with somebody on Hacker News where they said that by the year 2030, the graph database market was going to be, was going to overcome the larger in the relational database market." aria-label="回原文"></button> 他的依据是：

**图遍历本质上是表的自连接**，SQL 标准在 2023 年已加入属性图查询，在服务器端做遍历，关系型数据库完全可以跑赢专门的图数据库。

向量数据库不会消失，但护城河不大——当年一年之内所有数据库厂商都加上了向量索引。

活得好的路径有两条：变成像 Postgres 那样的通用系统，或者像 Elasticsearch 那样做旁挂的专门系统。他点名 [[TurboPuffer|TurboPuffer]] 是目前做得最好的那家。

## 本集带走

- 智能体可能带来 10 到 100 倍的数据库查询量增长，但它们的查询模式是否与人类不同，尚无定论。
- 自然语言转 SQL 需要重金打造语义层才能达到 99.5% 的准确率；超过 60% 的开源数据库已含有智能体写的代码。
- 图数据库被 Andy 看衰：SQL 新标准已支持图查询，专用图数据库没有性能优势；向量数据库则需转型求存。
- 数据库的底层架构不会推倒重来，竞争的胜负手在周边：开发体验、数据接入、可观测性这些“脚手架”上的东西。

<div class="pd-sec pd-sec-q">全部金句 <span>13 条</span></div>

> <span class="qz">每个月都有故事说某个智能体删了点东西，导致别人丢了生产数据库。</span>  
> *Every month there's a story where someone lost their production database because the agent deleted something.*  
> <span class="qm">—— Andy Pavlo · [00:03]</span> ^q1

> <span class="qz">但是比如说护城河，如果你愿意这么叫的话，并没有那么大，因为归根结底，它只是一个索引。</span>  
> *But like the moat, if you will, wasn't that big because at the end of the day, it's just an index.*  
> <span class="qm">—— Andy Pavlo · [03:31]</span> ^q2

> <span class="qz">而在一年之内，几乎每一个数据库厂商都有了他们自己的向量索引。现在这已经变成了某种意义上的标准入场筹码。</span>  
> *And within a year, pretty much every single database vendor had their own vector index. And now it's become sort of standard table stakes.*  
> <span class="qm">—— Andy Pavlo · [03:35]</span> ^q3

> <span class="qz">多年来，我们一直有能力确保人们不做不该做的事，比如那些蠢事，像删掉一张表或者删除记录。这些控制手段是存在的，只是每个人都想重新发明轮子，然后人们就吃了苦头，才学会去做那些过去早就做过的事。</span>  
> *For years, we've had the capabilities to make sure people don't do things they shouldn't be doing, like stupid things like dropping a table or deleting records. Those controls exist, it's just everyone wants to re-event the wheel and people learn the hard way of just doing what's already been done in the past.*  
> <span class="qm">—— Andy Pavlo · [08:03]</span> ^q4

> <span class="qz">人们会偷懒，整个公司、整个组织用同一个密码，然后又把同一个密码给了智能体，之后还纳闷为什么智能体开始做不该做的事。</span>  
> *People get lazy, they use the same password across entire company, organization, and then they give the same password to the agent and now wonder why the agent started doing things they shouldn't do.*  
> <span class="qm">—— Andy Pavlo · [09:31]</span> ^q5

> <span class="qz">所以我认为将会潜在地有 10 到 100 倍的流量增长，体现在将冲击数据库的查询数量上。</span>  
> *So I think there's going to be potentially a 10 to 100x increase in volume in the number of queries that are going to hit up against databases.*  
> <span class="qm">—— Andy Pavlo · [13:51]</span> ^q6

> <span class="qz">所以说到底，每个人都应该把所有东西放进数据库系统里。</span>  
> *So at the end of the day, everybody should be putting everything in a database system.*  
> <span class="qm">—— Andy Pavlo · [16:47]</span> ^q7

> <span class="qz">我要说的是，我不能说是谁，有两家数据库公司问过我，怎么让智能体在推荐时优先推荐他们的数据库而不是 Postgres。</span>  
> *And I will say, I can't say who, I've had two database companies ask me how to get their database to be recommended first by an agent over Postgres.*  
> <span class="qm">—— Andy Pavlo · [18:58]</span> ^q8

> <span class="qz">这基本上就像 SEO。怎么让智能体学会，嘿，我应该用我的数据库 X 而不是 Postgres。</span>  
> *It's basically like SEO. How do you get the agent to learn like, hey, I should use my database X instead of Postgres.*  
> <span class="qm">—— Andy Pavlo · [19:20]</span> ^q9

> <span class="qz">我还没见过任何基准测试表明图数据库——原生图数据库——能在那些关系型数据库系统拥有正确的 SQL 或 API 构造、从而让你完全在服务器端做图遍历、不用来回往返的情况下，胜过关系型数据库系统。</span>  
> *I have not seen any benchmarks that show graph databases, the native graph databases, outperform the relational databases systems when those related systems have the right constructs in SQL or the API so that you can do graph traversal all on the server side and not go back and forth.*  
> <span class="qm">—— Andy Pavlo · [22:23]</span> ^q10

> <span class="qz">是的，数据库系统领域有句老话：需要十年，但它是一个系统。你可以在三年里构建出前 90%，然后剩下的 10% 要花接下来七年。</span>  
> *Yeah, the old adage from database systems is that it takes 10 years, but it's a system. You can build the first 90% in three years and then the remaining 10% takes the next seven years.*  
> <span class="qm">—— Andy Pavlo · [29:34]</span> ^q11

> <span class="qz">我们的模型通常需要训练好几个小时——前提是你有足够的训练数据——才能产生最完美的最优配置，但 LLM 只要 15 分钟就能进来，产出一个足够好的东西，而对大多数人来说这就够了。</span>  
> *Our models oftentimes would take hours and hours to train, assuming you had enough training data, to produce the pristine optimal configuration, but the elements can come in just like in 15 minutes, produce something that was good enough, and that's good enough for most people.*  
> <span class="qm">—— Andy Pavlo · [34:31]</span> ^q12

> <span class="qz">超过 60% 的开源数据库系统的提交来自智能体。</span>  
> *Over 60% of the open source database systems have commits coming from agents.*  
> <span class="qm">—— Andy Pavlo · [30:37]</span> ^q13

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
