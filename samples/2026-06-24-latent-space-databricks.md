---
title: Databricks 的智能体平台与数据库「圣杯」：Reynold Xin 与 Matei Zaharia 的技术蓝图
podcast: Latent Space
date: 2026-06-24
source_url: https://www.latent.space/p/databricks
duration: "68:43"
type: episode
cover: "#0e7490"
image: "/covers/2026-06-24-latent-space-databricks.jpg"
description: 两位创始人详解智能体平台 Omnigen、打通交易与分析的 LTAP，以及从零重写的数据库引擎。
guests: ["[[Matei Zaharia]]", "[[Reynold Xin]]"]
companies: ["[[Databricks]]", "[[Snowflake]]", "[[MosaicML]]", "[[Neon]]"]
concepts: ["[[Omnigen]]", "[[LTAP]]", "[[HTAP]]", "[[Dream Engine]]", "[[智能体]]", "[[云沙箱]]", "[[上下文策略]]", "[[CDC]]", "[[第二系统综合征]]", "[[Spark]]"]
category: 智能体
tags:
  - 智能体
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Databricks 的智能体平台与数据库「圣杯」：Reynold Xin 与 Matei Zaharia 的技术蓝图</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# Databricks 的智能体平台与数据库「圣杯」：Reynold Xin 与 Matei Zaharia 的技术蓝图

<div class="pd-byl"><b>Matei Zaharia</b> · Databricks 联合创始人</div>

<div class="pd-mt">2026-06-24 · Latent Space · 68:43</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-06-24-latent-space-databricks.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我让一个智能体去调试某个东西,它花了 500 美元,因为它决定读取大量日志文件并消耗大量 token。</div><div class="a">Matei Zaharia · 21:04</div></div>

> [!info] 关联
> **人物** [[Matei Zaharia]] · [[Reynold Xin]]
>
> **公司** [[Databricks]] · [[Snowflake]] · [[MosaicML]] · [[Neon]]
>
> **概念** [[Omnigen]] · [[LTAP]] · [[HTAP]] · [[Dream Engine]] · [[智能体]] · [[云沙箱]] · [[上下文策略]] · [[CDC]] · [[第二系统综合征]] · [[Spark]]
>
> **来源** [Latent Space](https://www.latent.space/p/databricks)

<div class="pd-tldr"><b>一句话</b>两位创始人详解智能体平台 Omnigen、打通交易与分析的 LTAP，以及从零重写的数据库引擎。</div>

[[Databricks|Databricks]] 是大数据领域的一家头部公司，本次 Data AI Summit 有 3 万人亲自到场。这期访谈的两位嘉宾是 Databricks 的联合创始人 [[Reynold Xin|Reynold Xin]] 与 [[Matei Zaharia|Matei Zaharia]]（同时也是知名计算框架 [[Spark|Spark]] 的作者）。本集聊了他们最近发布的两大核心动作：第一个是关于[[智能体|智能体]]怎么管——如何为 AI 编程智能体打造一个开源的托管与安全底座（平台名为 [[Omnigen|Omnigen]]）；第二个是关于数据怎么连——如何消灭繁琐的数据管道，把交易型数据库和分析型数据库在存储层统一起来（这个技术叫 [[LTAP|LTAP]]）。全文沿着这两条主线展开，最后还聊到了他们从零重写数据库引擎的野心，以及和竞争对手 [[Snowflake|Snowflake]] 的路线之别。

## 智能体大爆发：从「各自为战」到统一底座
节目一开始，Matei Zaharia 解释了 Databricks 为什么要做智能体的管理底座。起因是他们观察到公司内部出现了几条「汇合的线索」：一方面，高级工程师们在疯狂搭建自己的编程智能体工作流，但团队之间完全没法共享；另一方面，他们自己也在做各种数据科学智能体（比如内部叫 Genie 的智能体）。大家每隔几个月就要被迫切换底层模型或框架，而且如果不能共享会话历史，智能体几乎没法用于协作 <button class="pd-ts" data-t="02:22" data-who="Matei Zaharia" data-en="What led you to it? Yeah, there were actually a couple of like converging lines, which I think is a good sign that you need something new." aria-label="回原文"></button>。

随后，Reynold Xin 讲了一个让开发者极具共鸣的痛点，直接推动了「[[云沙箱|云沙箱]]」的诞生：为了在使用智能体编程时不中断，他不得不把笔记本电脑连着手机网络，开车去赴医生预约的路上，只要一遇红灯，就赶紧看一眼电脑上的智能体跑得怎么样了。他觉得「感觉就像我们回到了编程的黑暗时代」，明明身处云时代，却还要用本地电脑死守着一个编程任务 <button class="pd-ts" data-t="06:12" data-who="Reynold Xin" data-en="And, and one of the things particularly annoying was having to keep my laptop open. I was actually driving to a doctor's appointment and I remember because I wanted" aria-label="回原文"></button>。为了让沙箱真正好用，他还给平台提了具体需求：不仅要能支持协作，还要能直接打开终端、列出文件，甚至要把 Markdown 文件渲染好，彻底甩掉其他单一用途的编辑器 <button class="pd-ts" data-t="07:41" data-who="Reynold Xin" data-en="Yeah. And also another thing I think asked was I had I still use cursor for the sole purpose of rendering markdown files." aria-label="回原文"></button>。

## 安全与开销：给智能体装上「上下文护栏」
说完了「怎么把智能体跑起来」，接下来是一个让所有企业头疼的问题——安全。这也是 Matei 在 Omnigen 里最兴奋的部分。

Matei 指出，现在很多编程智能体的安全措施极其基础，只允许你设置「是」或「否」（比如「能不能读机密文件」「能不能从 NPM 装新包」）。这种非黑即白的选项把开发者逼到了死角。真正可怕的是风险的叠加：比如智能体不仅读了机密文档，同时还把它发布到了公司公网上。为了解决这种割裂，Omnigen 引入了「[[上下文策略|上下文策略]]（contextual policies，即根据智能体会话的实时状态和历史记录来动态决定是否放行某项操作的规则）」。系统会实时跟踪智能体的一举一动，如果它刚安装了一个可疑的新包，或者一口气读了一千份机密文档，系统就会果断拦截它把数据发到网外 <button class="pd-ts" data-t="19:20" data-who="Matei Zaharia" data-en="So the thing we decided we need is stateful or what we call contextual policies where you keep track of the state of that session. It's not like, is it allowed to push to the marketing site or not?" aria-label="回原文"></button>。

除了安全，智能体「乱花钱」也是个现实问题。Matei 分享了一个真实案例：他让一个智能体去调试问题，结果它为了排查狂读日志文件、疯狂消耗 token，一个不小心就烧掉了 500 美元 <button class="pd-ts" data-t="21:04" data-who="Matei Zaharia" data-en="I've had like, I asked an agent to debug something and it spent $500 because it decided to read a lot of log files and burn a lot of tokens." aria-label="回原文"></button>。现在在他们的平台上，你可以直接给智能体划定预算，比如「只花 5 美元」，一旦超支它就会弹窗找你要授权。

更值得一提的是，Omnigen 选择了开源。Matei 坦言，如果市面上同时存在一个封闭和一个开源的智能体托管平台，长远赢的必定是开源——因为大家都能往里加库，网络效应会让它变得越来越强 <button class="pd-ts" data-t="10:54" data-who="Matei Zaharia" data-en="So that's like one of these. Another way to think about it Imagine our thing wasn't open." aria-label="回原文"></button>。事实证明，项目周六刚发布，周一就已经收到了 400 个代码合并请求，有人加上了在 Kubernetes（一种管理容器的系统）上运行的功能，有人接入了各家初创公司的云沙箱 <button class="pd-ts" data-t="11:56" data-who="Matei Zaharia" data-en="Yeah, you can look at the merge runs. I actually asked Somnijen this morning about the- 400 merge already? Yeah." aria-label="回原文"></button>。

## 打通数据库的任督二脉：LTAP 与消灭数据管道
工具和安全的底座搭好了，接下来这集最硬核的技术登场了。主持人抛出了一个行业历史：过去十年大家都在谈论 [[HTAP|HTAP]]（试图用单一数据库同时搞定交易和分析），但往往两头都做不好。Reynold Xin 顺势介绍了他们的解法——LTAP。

要理解 LTAP，得先知道数据库分两类：一类是 OLTP（处理事务的数据库，比如 Postgres，专门干快速下单、改库存的活），另一类是分析型数据库（专门用来算「每个店每天赚多少钱」）。通常，为了不把跑交易的主数据库搞崩溃，大家得用 [[CDC|CDC]]（变更数据捕获，即读取数据库的增量日志去重建状态）把数据抽出来，扔到分析系统里去算 <button class="pd-ts" data-t="27:53" data-who="Reynold Xin" data-en="Yeah, yeah. The LTAP idea is actually pretty simple. So if people have heard of the Ankur's talk about HTAP, it's effectively the world of databases." aria-label="回原文"></button>。但 Reynold Xin 吐槽，这东西太脆弱了，业内甚至有个冷笑话管它叫「持续数据损坏」，因为只要交易库稍微改个表结构，整个数据管道就会崩溃，工程师经常要在半夜三点爬起来修管道 <button class="pd-ts" data-t="30:37" data-who="Reynold Xin" data-en="but one of the most fundamental operations powering modern society. But it's so brittle that a weak joke that it should be called continuous data corruption" aria-label="回原文"></button>。

> 【背景】主持人提到「Airbyte 成为 50 亿美元的公司」靠的就是做 CDC 管道；「Elasticsearch」也常被用来做日志分析。

Databricks 的 LTAP 思路是：不要试图去合并查询引擎，而是直接合并「存储层」。只要交易数据库在底层以列式格式直接把数据写到开放数据湖里，分析引擎就能零延迟、无管道地去直接读这些数据 <button class="pd-ts" data-t="32:00" data-who="Reynold Xin" data-en="And our whole idea of LTAP is kind of obviously a wordplay on the term HTAP. It's that we think this is HTAP done, right? HTAP wants to build a single engine for both." aria-label="回原文"></button>。Reynold Xin 坦言，最开始就算他们自己也不敢相信能成，但一位工程师灵光一闪做了个原型：利用存储集群里闲置的 CPU，把行数据转码成列数据，结果发现因为列式压缩更好，写入 S3 等对象存储反而更快了 <button class="pd-ts" data-t="35:09" data-who="Reynold Xin" data-en="Wait, so prototype what? Prototype, instead of storing the data in the data lake in the role-oriented format, like Postgres pages, write them in parquet." aria-label="回原文"></button>。

主持人问：既然智能体来了，这玩意儿有啥用？Reynold Xin 讲了个顿悟时刻：他和一位澳大利亚客户吃饭，客户抱怨线上服务出故障时，智能体只能看到服务的运行日志，却没法直接钻进数据库里看看到底是谁下了什么订单导致了问题。如果有了 LTAP，智能体能同时看懂机器日志和真实的业务数据，排查问题的能力直接提升十倍 <button class="pd-ts" data-t="32:39" data-who="Reynold Xin" data-en="even though we wrote that positioning. But then last night I was having dinner with an Australian customer and they actually told me, oh, hey," aria-label="回原文"></button>。

## 文化与野心：从零重写数据库引擎
说完了现阶段的突破，Reynold Xin 还分享了一个更疯狂的计划——从零重写一个数据库引擎（团队戏称它为 [[Dream Engine|Dream Engine]]）。市面上主流的分析引擎大多都有十年历史了，经过无数次缝缝补补，已经变成了一堆「屎山代码」（Databricks 的系统也不例外）。为了彻底根治，他们决定推倒重来 <button class="pd-ts" data-t="44:00" data-who="Reynold Xin" data-en="especially on the analytics side, are kind of a decade old. Pretty much everything that have reasonable traction are about a decade old. And they all started targeting some very specific narrow use cases." aria-label="回原文"></button>。

做这事最大的风险是所谓的「[[第二系统综合征|第二系统综合征]]」：开发者在重写时往往容易好大喜功，加塞太多完美主义需求，最后永远无法发布。为了避开这个坑，Databricks 的工程师没有去拍脑袋设计算法，而是建了一座「数据库工厂」：他们拿了十年的海量真实运行轨迹，训练了一个机器学习模型。这个模型能极高保真度地预测某项算法在特定数据特征下到底跑得快不快 <button class="pd-ts" data-t="46:30" data-who="Reynold Xin" data-en="but then it backfires on the other 30%. They actually when built a more of a factory for building the database." aria-label="回原文"></button>。有了它，团队可以在开发时甚至运行时，动态选出最适合当下的算法。

如此大胆的创新，离不开公司极简的审批文化。主持人惊叹于他们这种大公司居然能允许工程师「不要先写一堆设计文档，直接做原型」。Reynold Xin 笑着说，就是在这种「直接试」的文化下，激烈的辩论才会被一行能跑通的代码迅速终结 <button class="pd-ts" data-t="36:23" data-who="Matei Zaharia" data-en="from first principle and then somebody just did it. Yeah, I mean, if you set yourself up so people do that, that'll be great. That happened a bit with Omnigent, too." aria-label="回原文"></button>。

## 路线之争：为什么是 Databricks 跑出来了
节目的最后，主持人问了一个尖锐的问题：和死对头 Snowflake 相比，你们做对的核心战略是什么？

Reynold Xin 给出了两个关键判断：一是「拥抱开放」，二是「天生为 AI 而生」。Snowflake 一开始走的是专有封闭路线，想把小部分高价值数据锁在自己的系统里做极速查询；而 Databricks 从第一天起就用 Parquet 这样的开放格式，哪怕一开始查询慢点，但客户能随意把海量数据接走。事实证明，今天所有企业都渴望开放，封闭格式已经被时代抛弃 <button class="pd-ts" data-t="56:19" data-who="Reynold Xin" data-en="But the open data format have won. Like I think now every enterprise wants to put data in open data format. But it was actually very controversial." aria-label="回原文"></button>。

而在 AI 上，Matei 补充道，Snowflake 当时觉得「我们管好高价值数据就行」，但 Databricks 最早就是干大规模数据清洗（JSON 日志等）起家的，是从数据的上游起步的。结果发现，计算任务不可避免地会往上游转移，于是顺理成章地就把分析能力做起来了 <button class="pd-ts" data-t="54:50" data-who="Matei Zaharia" data-en="It's easier to go from that bod thing that's really good at the scale and ingesting and super low cost and create versions in it that have the speed and features of" aria-label="回原文"></button>。

聊到被收购的 Mosaic 团队，既然行业有大把人在做烧钱拼算力的通用大模型，Databricks 决定把力气花在刀刃上——做专门领域的小模型。比如他们做了一个文档视觉模型，专门用来把 PDF 或 Word 转成结构化的 JSON，不仅比前沿大模型准，而且成本便宜了 100 倍 <button class="pd-ts" data-t="60:52" data-who="Matei Zaharia" data-en="And it's very competitive. It's probably like 100x cheaper than those frontier models and still better. And that's actually done by one of" aria-label="回原文"></button>。在他们看来，把数据放对位置、再放上智能体，传统软件就会被重写，「魔法」自然就会发生 <button class="pd-ts" data-t="66:36" data-who="Reynold Xin" data-en="Actually, I think many of the traditional software will be sort of rewritten. with this new paradigm, which is just get the data to be there and then slap some agent on top." aria-label="回原文"></button>。

## 本集带走
1. **智能体需要「上下文安全」**：非黑即白的权限设置已经过时，根据会话历史动态拦截高危操作的「上下文策略」，以及直接给智能体划定预算，是企业落地 AI 编程的刚需。
2. **数据层合并比查询层合并更现实**：HTAP（试图用一个引擎干所有事）妥协太多，而 LTAP 直接统一存储层、允许分析引擎零延迟直读交易数据，才是真正能消灭数据管道的解法。
3. **大公司的创新靠「直接试」**：避免「第二系统综合征」的最佳方式，是用真实数据和机器学习模型来指导系统架构重写，用跑通的原型去终结无休止的会议辩论。

<div class="pd-sec">全部金句 <span>9 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">我让一个智能体去调试某个东西,它花了 500 美元,因为它决定读取大量日志文件并消耗大量 token。</span>  
> *I asked an agent to debug something and it spent $500 because it decided to read a lot of log files and burn a lot of tokens.*  
> <span class="qm">—— Matei Zaharia · [21:04]</span> ^q1

> <span class="qz">想象一下我们的东西不是开放的。我们有某种智能体托管的东西,但它不是开放的。然后有一个开放的。从长远来看哪一个会赢?</span>  
> *Imagine our thing wasn't open. We had some kind of agent hosting thing, but it's not open. And then there is an open one. Which one is going to win in the long run?*  
> <span class="qm">—— Matei Zaharia · [10:56]</span> ^q2

> <span class="qz">CDC 是最无聊的之一,但也是驱动现代社会的最基础的操作之一。</span>  
> *CDC is one of the most boring, but one of the most fundamental operations powering modern society.*  
> <span class="qm">—— Reynold Xin · [30:30]</span> ^q3

> <span class="qz">说它应该被称为持续数据损坏,因为你可能会在你的 LTP 数据库上更改你的模式,然后 CDC 管道无法处理模式变更。</span>  
> *It should be called continuous data corruption because you might change your schema on your LTP database and then the CDC pipeline fails to handle the schema change.*  
> <span class="qm">—— Reynold Xin · [30:40]</span> ^q4

> <span class="qz">经过十年那样有机的演化,它就变成了一大堆像屎一样的代码。</span>  
> *after 10 years of organic evolution that way, it becomes a gigantic pile of shit.*  
> <span class="qm">—— Reynold Xin · [44:26]</span> ^q5

> <span class="qz">我们认为你可以通过统一存储来获得你需要的 99%。</span>  
> *We think you can get 99% of what you need by unifying the storage.*  
> <span class="qm">—— Reynold Xin · [32:05]</span> ^q6

> <span class="qz">但开放数据格式已经赢了。</span>  
> *But the open data format have won.*  
> <span class="qm">—— Reynold Xin · [56:17]</span> ^q7

> <span class="qz">它可能比那些前沿模型便宜大约 100 倍,而且仍然更好。</span>  
> *it's probably like 100x cheaper than those frontier models and still better.*  
> <span class="qm">—— Matei Zaharia · [60:52]</span> ^q8

> <span class="qz">向量数据库本不应该是一个单独的类别。</span>  
> *Vector database should have never been a separate category.*  
> <span class="qm">—— Reynold Xin · [51:18]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-05-21-latent-space-daytona|赋予AI智能体计算机——Daytona创始人Ivan Burazin]] —— 同公司:Neon · 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏]] —— 同公司:Snowflake · 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|从避战大模型到押注智能体：Modal 的推理基础设施进化史]] —— 同概念:智能体 (agent)、Kubernetes

</div>
<div class="pd-ex">

**换个口味**

- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织]] —— 同概念:智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」]] —— 同概念:智能体 (agent)
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|1500 亿美元的隐形 AI 公司创始人：恐惧源于无知，最好的工作是独自安静地完成]] —— 同概念:智能体 (agent)

</div>
</div>

*本集关键词:智能体管理 · 开源托管底座 · LTAP与存储统一 · 数据库引擎重写 · AI与数据战略*

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
    ['.search','.readermode'].forEach(function(sel){ grab(sel,acts); });
    // 深浅色进右栏末尾 —— 但右栏在窄屏可能不显示,槽跟着一起没了。
    // 只在槽真的看得见时才搬进去,看不见就退回顶栏(🔒 #2:任何屏宽都得有入口)。
    var side=document.querySelector('.right.sidebar'), slot=null;
    if(side){
      slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      // 同上:槽是空的(:empty → display:none),要判**右栏**看不看得见
      if(!(side.offsetWidth || side.offsetHeight || side.getClientRects().length)) slot=null;
    }
    grab('.darkmode', slot || acts);
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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); }
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

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
