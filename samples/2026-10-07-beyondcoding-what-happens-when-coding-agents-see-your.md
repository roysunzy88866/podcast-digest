---
title: 支付公司 Adyen 造了个“全知图数据库”：让智能体看清每一行代码和每一次调用
podcast: Beyond Coding
date: 2026-10-07
source_url: undefined
duration: "80:08"
type: episode
cover: "#64748b"
image: "/covers/2026-10-07-beyondcoding-what-happens-when-coding-agents-see-your.jpg"
description: Adyen 资深工程师 Matt Jones 讲述内部工具 Architect：把服务、代码、DNS、基础设施等九张图汇进 Neo4j，支撑智能体并行开发与自动修复的实战。
host: "[[Matt Jones]]"
companies: ["[[Adyen]]"]
concepts: ["[[Architect]]", "[[Neo4j]]", "[[Flink]]", "[[Kafka]]", "[[智能体]]", "[[服务图]]", "[[Atrium]]", "[[Git worktree]]", "[[MCP]]", "[[Sentinel]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-10-07-beyondcoding-what-happens-when-coding-agents-see-your.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-07-beyondcoding-what-happens-when-coding-agents-see-your#post","headline":"支付公司 Adyen 造了个“全知图数据库”：让智能体看清每一行代码和每一次调用","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-07-beyondcoding-what-happens-when-coding-agents-see-your","mainEntityOfPage":"https://talk.solomind.cc/2026-10-07-beyondcoding-what-happens-when-coding-agents-see-your","description":"Adyen 资深工程师 Matt Jones 讲述内部工具 Architect：把服务、代码、DNS、基础设施等九张图汇进 Neo4j，支撑智能体并行开发与自动修复的实战。","datePublished":"2026-10-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-10-07-beyondcoding-what-happens-when-coding-agents-see-your.jpg","about":[{"@type":"Person","name":"Matt Jones"},{"@type":"Organization","name":"Adyen"},{"@type":"Thing","name":"Architect"},{"@type":"Thing","name":"Neo4j"},{"@type":"Thing","name":"Flink"},{"@type":"Thing","name":"Kafka"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"服务图 (service graph)"},{"@type":"Thing","name":"Atrium"},{"@type":"Thing","name":"Git worktree"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"Sentinel"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"支付公司 Adyen 造了个“全知图数据库”：让智能体看清每一行代码和每一次调用","item":"https://talk.solomind.cc/2026-10-07-beyondcoding-what-happens-when-coding-agents-see-your"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>支付公司 Adyen 造了个“全知图数据库”：让智能体看清每一行代码和每一次调用</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 支付公司 Adyen 造了个“全知图数据库”：让智能体看清每一行代码和每一次调用

<div class="pd-byl"><b>Matt Jones</b> · Adyen 资深工程师 · 2026-10-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-07-beyondcoding-what-happens-when-coding-agents-see-your.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">突然之间我们把它指向了线上，每秒 700 万个 span。</div><div class="a">— Matt Jones <button class="pd-ts" data-t="19:08" data-who="Matt Jones" data-en="So all of a sudden we pointed it at live, 7 million spans a second." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Matt Jones]]
>
> **公司** [[Adyen]]
>
> **概念** [[Architect]] · [[Neo4j]] · [[Flink]] · [[Kafka]] · [[智能体]] · [[服务图]] · [[Atrium]] · [[Git worktree]] · [[MCP]] · [[Sentinel]]

这一集的主角是 [[Matt Jones|Matt Jones]]，支付公司 [[Adyen|Adyen]] 的资深工程师（staff engineer）。

他造了一个叫 [[Architect|Architect]] 的内部系统——本质上是把整个公司的技术栈放进一个超大图数据库，让工程师和[[智能体|智能体]]随时查询「什么在调用什么、代码在哪、跑在哪个机架上」。

它不对外卖，纯粹是内部工具，但它的构建过程几乎就是一份「如何为智能体重建公司知识底座」的实操手册。

## 先说灾难：测试环境全过，上线全崩

Architect 最早只叫「[[服务图|服务图]]」：他们想知道全公司到底什么在跟什么通信、有哪些没人知道的东西存在。

第一版技术选型走捷径——用 [[Kafka|Kafka]] Connect（Kafka 生态里现成的数据搬运工具）直通 [[Neo4j|Neo4j]]。

测试和 beta 环境跑得很顺，结果一指向线上：每秒 700 万个 span（链路追踪里的一次调用片段），Kafka 直接积压崩溃。

Matt 的原话是「我从没见过一个应用像 Kafka 那样放弃得那么快」。

救场的是同事推荐的 Apache [[Flink|Flink]]（一个大数据流处理框架）。Flink 让他们能把整条流水线拆成可调并行度的工作负载：

40 个 Kafka 分区就配 40 个消费者实例，队列类流量安静的段落调低并行度、把资源让给 API 和数据库流量。

关键思路是「读了不等于要存」——每秒读 700 万个 span，实际只关心 web 应用之间的调用关系，过滤聚合后每秒只往 Neo4j 写约 4000 条记录。

> 【背景】Apache Flink 底层的分布式计算引擎曾基于 Akka，后自研更名为 Pekko（Apache Pekko）。

他们还做了一个很「牛仔」的决定：把 Flink 的 checkpoint（检查点，记录流处理到哪个位置、崩溃后从哪恢复）整个关掉。

理由很直白：每秒 700 万个 span，漏掉一两个调用根本无所谓，几个小时后它大概率还会再发生。

事后看他们并不后悔——至今没观察到明显的数据缺失，而且有后端兜底任务会追踪「这周没出现、上周出现过的调用」，能区分「缺数据」还是「新流程」。

## Architect 到底是什么：一个 Neo4j 实例里的九张图

现在 Architect 是一个 Neo4j 实例里装着九个数据库，用组合查询一起查。核心几张：

- **服务图**：从所有发出 trace 的 web 应用摄取调用关系；
- **代码图**：轮询 Git，每次 head ref 变化就重建、做分析，追踪到方法级依赖；
- **DNS 图**：全量 DNS，因为「你调用的 DNS 不总是你最终得到的那一个」；
- **数据存储拓扑**：集群怎么复制、读副本在哪；
- **数据图**：所有 Postgres 数据库的 schema、表、字段、主外键；
- **基础设施图**：硬件、机架、数据中心的物理部署。

图与图之间靠特定字段关联：

服务图里「这个 web 应用跑在这台主机」+ 基础设施图里的主机 → 立刻知道这个应用跑在哪个数据中心哪一层哪个机架上。

「作为人类，我们已经能看到很多东西了。而智能体能看到的多得多。这很疯狂，也有点吓人。」

对智能体最大的价值是**省 token**：

与其让智能体翻代码自己推断依赖关系（不同模型还会推断出不同结果），不如对 Architect 做一次查询直接拿到事实。

「我们有了这个事实性的信息层……更少的 token，所有人都更开心。」

大多数智能体对 Cypher（Neo4j 的查询语言）掌握得不错，可以直接放权让它们自己写查询。

## 让智能体并行干活：Git worktree + Atrium

Matt 自己的日常：周一时并排开四五个编码智能体，规格（spec）谈好就一键应用，每个智能体进自己的 [[Git worktree|Git worktree]]（独立的工作副本，互不污染）。

为了避免它们互相踩脚，他做了个内部工具 **[[Atrium|Atrium]]**——像个聊天应用加记忆应用：

每个智能体开工前先注册、声明「我要动这些文件」，另一个智能体碰到相同文件就会看到、互相发消息、协调谁先谁后。

Atrium 最初就是个副项目：他发现多个智能体到处冲突、提交时一脸懵，于是「开了另一个智能体，说：

需要一种让所有人互相交流的方式」。

Atrium 后来还接上了 Neo4j 做智能体记忆：

为每个工作项建一个节点，把所有决策记忆挂上去，下一个智能体启动时取回记忆、带着完整上下文接着干。

这个并行能力是未来「自动修复」的地基——Architect 生成反模式报告后，问题可以进 Kafka 流，智能体跑 CLI 接手、改代码、自动创建 MR。

## 意外收获：反向赋能软件开发生命周期

因为代码图能追溯「这个类 → 被这个模块依赖 → 被那个 web 应用使用 → 处理关键支付流程」，他们把它接进了 GitLab 流水线：

工程师一改代码，就被告知「你触碰了这些关键流程」。更进一步：

支付公司旺季要代码冻结、什么都不敢动，但现在他们知道哪些代码属于高 SLA 的关键流程、哪些只是无关的小改动——关键流程冻结不放行，非关键的小 UI 改动可以照常发布，实现动态闸控。

## 怎么起步：从服务图开始，边 YOLO 边补护栏

Matt 的建议：**从服务图开始**。「服务图是骨架……

服务图是正在发生什么，代码图是如何和为什么发生，基础设施图是在哪里发生」，其余的图都是主干之间额外的答案。

而且只要有链路追踪，服务图落地门槛最低——抓 trace、过滤到只留 HTTP 调用、低流量起步慢慢积累。

整个系统不是设计出来的，是迭代出来的。「我们基本上就是 YOLO 着把它做好的」——但他们坚持一条原则：**不拥有数据**。

「我们无法保证这些数据是正确的，因为我们不拥有它。

我们只是把它抓过来拼在一起，给你展示存在于别处的数据的另一种视图。」

所以每个数据源都要挨个找拥有它的团队谈接入。

说服方式不是愿景演讲，而是先做出 POC：等团队在 Neo4j 浏览器里看到查询结果，各团队就开始「这个能做吗？那个能做吗？」思维打开了。

至于 AI 的角色：「Architect 几乎可以说是和 AI 共同编写的。」几乎每个目录都有 AgentMD，UI 有 DesignMD，决策和原则全存在 Atrium 里对智能体开放。踩过的坑也真实：

早期没框架时，两个智能体往不同方向写，90% 代码重复——后来他们把 Java 框架和模式固化，「加一种新 span 类型 = 加一个枚举 + 三个类，完事」。

还建了 skills 库；甚至纠结过某件事该用 skill 还是脚本（90% 是复制粘贴），最后选了 skill，因为「智能体写 Cypher 比我强得多」。规模化后的速度：

从一月底起基本「一个月加一张图」，每张图从找团队要数据、开防火墙、到智能体按既有框架生成新数据源（约四小时）总共一个月，还能并行做。

## 福也是祸：看见一切的代价

现在每个工程师的本地编码智能体都能查这套系统——而他们正试图收回，至少收紧成受控访问。

因为工程师开始看到自己跑在什么硬件上、DNS 查询链是四跳而不是别人的两跳、到 S3 的延迟涨了五毫秒——「每个团队被问的问题都变多了，大家都开始烦我了」。

更严肃的是安全：

一旦图里开始加入 CVE（已知漏洞编号）、渗透测试结果，就不能人人都看，需要基于权限的策略，防止坏行为者拿到不该拿的数据。

下一站是 **[[Sentinel|Sentinel]]**（Architect 的子产品）：每 20 分钟跨所有图跑一次反模式报告，比如「谁在跨数据中心对主库做 select」。

而终极形态是自动修复——报告里点一个按钮，Kafka 流水线拉起智能体克隆仓库、修代码、提 MR、分派给团队，人只需批准。Matt 说这就是终点：

「拥有既能报告什么需要修复、又能动手去修复的智能体」——这样大家都能多度几次假，在 Slack 里跟智能体说一句「现在把这个修一下」。

但他自己保留了一份警惕：如果智能体提问题、另一个智能体验证合并，恶意代码混进来的护栏在哪？

「虽然我们确实想达到人人放手不管的地步，但作为工程师，我认为我们需要保留一定程度的交互。」

## MCP 还是 API/CLI？

一个很实在的讨论：工具膨胀是真问题。

智能体一上来先列一堆工具，列表太长就不知道选哪个，还可能陷入「工具风暴」（tool storm：调用循环打转、上下文膨胀、开始幻觉）。

Matt 自己的 Gen AI 网关里 90% 的 [[MCP|MCP]] 工具都被他禁用了。

他的分界线：**结构化数据、输入输出明确 → 直接 API；探索性、说不清要问什么 → MCP 更合适**；而越来越多的场景，一个 CLI 脚本就够了，还省 token。

主持人反问「事件响应的智能体该用 MCP 还是确定性工具」时，Matt 承认没有答案、还需要测试——但他给出一条经验：

**紧急场景（「着火了，帮我查」）智能体非常好用，因为它能同时查大量数据源；可如果一开始就模糊（「好像有点不对劲，你帮我看看？」）

，结果永远模糊——它会告诉你正在发生 20 件事，而且全都是错的**。

## 本集带走

- **选图从服务图开始**：它回答「什么在调用什么」，是整个平台的骨架；代码图答「如何/为何」，基础设施图答「在哪」，其余都是加分项。
- **数据管道要「读了就扔」**：每秒 700 万 span 只保留应用间调用关系，过滤聚合后每秒仅写约 4000 条记录进 Neo4j。
- **省 token 靠事实层**：让智能体查一次图拿依赖关系，而不是各自翻代码推断——又快又准又省钱。
- **先建约定再放智能体**：固化框架和模式后，「新数据源 = 枚举 + 三个类」，智能体照抄即可；否则两个智能体各写一套、90% 重复。
- **并行智能体要会互相打招呼**：Git worktree 隔离 + Atrium 注册声明文件、协调冲突，才能五六个同时跑。
- **高风险决定可以赌，但要算赔率**：四年前做服务图是一年项目，现在从零到生产只要三四个月——「挥棒落空也就损失三四个月，不是一年」。
- **MCP 不是万金油**：输入输出明确用 API，说不清要什么用 MCP，很多场景一个 CLI 脚本更省 token、还不容易触发工具风暴。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">突然之间我们把它指向了线上，每秒 700 万个 span。</span>  
> *So all of a sudden we pointed it at live, 7 million spans a second.*  
> <span class="qm">—— Matt Jones · [19:08]</span> ^q1

> <span class="qz">说实话，我从没见过一个应用像 Kafka 那样放弃得那么快。</span>  
> *Honestly, it's like I've never seen an application give up as quick as Kafka could.*  
> <span class="qm">—— Matt Jones · [24:51]</span> ^q2

> <span class="qz">因为当我们每秒处理 700 万个 span 的时候，我们会在乎两个 web 应用之间漏掉一两个调用吗？</span>  
> *Because when we're processing 7 million spans a second, do we care if we missed one or two calls between two web apps?*  
> <span class="qm">—— Matt Jones · [26:49]</span> ^q3

> <span class="qz">所以尽管我们每秒读取 700 万个 span，我们每秒写入 Neo4j 的大约只有 4000 条记录。</span>  
> *So even though we're reading 7 million spans, we're writing something like 4,000 records a second to Neo4j.*  
> <span class="qm">—— Matt Jones · [21:36]</span> ^q4

> <span class="qz">我当时是想在一个有 20 年历史的公司、有 20 年历史的代码库里，找出那些藏在衣柜里的骷髅。</span>  
> *I was trying to find the skeletons in the closet in a 20-year-old company in a 20-year-old repo.*  
> <span class="qm">—— Matt Jones · [17:25]</span> ^q5

> <span class="qz">但我注意到，如果我不使用智能体，作为一个单独的个体，我已经跟不上了。</span>  
> *But I have noticed that if I don't use agents, I can't keep up as a single individual anymore.*  
> <span class="qm">—— 嘉宾 · [59:00]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-26-talks-the-building-blocks-of-gtm-orchestration|RAMP 的 GTM 编排实验：一句话意图，全渠道自动执行]]<span class="pd-rz">同概念:MCP、智能体 (agent)、Kafka</span>
- [[2026-09-17-cogrev-no-code-is-code-zapier-ceo-wade-foster-o|Zapier CEO Wade Foster：最强模型也只考了 40 分，你的对手不是别的公司]]<span class="pd-rz">同概念:MCP、智能体 (agent)、token</span>
- [[2025-06-03-talks-pioneering-agentic-applications-with-dec|三位 AI 智能体公司 CEO 圆桌：从 Copilot 到智能体，还要几年？]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>
- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>
- [[2026-02-08-lennys-getting-paid-to-vibe-code|不会写代码的人如何成为全职 vibe coder]]<span class="pd-rz">同概念:智能体 (agent)、token</span>

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
