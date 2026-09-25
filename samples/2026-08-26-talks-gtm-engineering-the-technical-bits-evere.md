---
title: GTM 工程：让销售像工程团队一样两周发布一次
podcast: 精选演讲
date: 2026-09-26
source_url: undefined
duration: "18:46"
type: episode
cover: "#64748b"
description: Clay 的 Everett 讲解 GTM 工程（用工程方法搭建销售营销体系）的四大技术难题：数据层、编排、智能体与执行。
guests: ["[[Everett Berry]]"]
companies: ["[[Clay]]"]
concepts: ["[[GTM 工程]]", "[[智能体]]", "[[编排]]", "[[数据层]]", "[[瀑布式查询]]"]
category: 智能体
tags:
  - 智能体
  - 增长与销售
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-26-talks-gtm-engineering-the-technical-bits-evere#post","headline":"GTM 工程：让销售像工程团队一样两周发布一次","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-26-talks-gtm-engineering-the-technical-bits-evere","mainEntityOfPage":"https://talk.solomind.cc/2026-08-26-talks-gtm-engineering-the-technical-bits-evere","description":"Clay 的 Everett 讲解 GTM 工程（用工程方法搭建销售营销体系）的四大技术难题：数据层、编排、智能体与执行。","datePublished":"2026-09-26","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Everett Berry"},{"@type":"Organization","name":"Clay"},{"@type":"Thing","name":"GTM 工程 (GTM engineering)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"编排 (orchestration)"},{"@type":"Thing","name":"数据层 (data layer)"},{"@type":"Thing","name":"瀑布式查询 (waterfalling)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"GTM 工程：让销售像工程团队一样两周发布一次","item":"https://talk.solomind.cc/2026-08-26-talks-gtm-engineering-the-technical-bits-evere"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>GTM 工程：让销售像工程团队一样两周发布一次</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# GTM 工程：让销售像工程团队一样两周发布一次

<div class="pd-byl"><b>Everett Berry</b> · Clay · 2026-09-26</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-26-talks-gtm-engineering-the-technical-bits-evere.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">在我看来，这是第一批真正能够反映 AI 进展的角色之一。</div><div class="a">— Everett Berry <button class="pd-ts" data-t="01:41" data-who="Everett Berry" data-en="And in my opinion, it's one of the first roles that actually is an index on the advances that we're making in AI." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Everett Berry]]
>
> **公司** [[Clay]]
>
> **概念** [[GTM 工程]] · [[智能体]] · [[编排]] · [[数据层]] · [[瀑布式查询]]

这一集聊的是一个正在爆发的新角色——[[GTM 工程|GTM 工程]]：用数据管道、[[编排|编排]]系统和[[智能体|智能体]]，把销售与营销（Go-To-Market，简称 GTM，即「产品怎么卖出去」这件事）当成工程问题来做。说话的人是 Everett，来自 [[Clay|Clay]]——一家给 GTM 团队提供数据与自动化基础设施的公司。

他的核心观察是：GTM 团队现在可以像产品和工程团队一样快速交付了。他合作过的最优秀的 GTM 团队，推进 GTM 结构变更的节奏几乎和工程团队发版一样快——在 Clay，每两周就向团队推送新数据、新自动化、新营销活动，不断迭代，跟上工程团队的速度 <button class="pd-ts" data-t="00:45" data-who="Everett" data-en="It's arosen out of a couple factors, but one of the main motivating ones is that GTM teams have kind of realized that it is now possible to ship as fast as a product and engineering team." aria-label="回原文"></button>。

在他看来，GTM 工程的核心就是「消除那些历史上一直阻碍 GTM 团队借助技术快速交付的制约因素」<button class="pd-ts" data-t="01:19" data-who="Everett" data-en="So to do this, you need a couple fundamentals in place. And in my view, GTM engineering at its heart is really about removing the constraints that have historically stopped GTM teams from shipping at speed using technology." aria-label="回原文"></button>。这个角色已经爆发式增长：他敢说大多数先进的 GTM 团队都在招 GTM 工程师；而且这是第一批真正能反映 AI 进展的角色之一——模型越强，GTM 工程师在组织里的杠杆和价值就越大 <button class="pd-ts" data-t="01:41" data-who="Everett" data-en="So I would venture to say that most advanced GTM teams are now hiring GTM engineers or looking for this role. And in my opinion, it's one of the first roles that actually is an index on the advances that we're making in AI." aria-label="回原文"></button>。他把这个领域分成四个技术区块：数据、编排、智能体、执行。

## 数据：给市场造一个「完美虚拟副本」

数据是 GTM 的命脉。目标是创建一个「市场的完美虚拟副本」——你瞄准的理想客户、客户公司和上下文 <button class="pd-ts" data-t="02:38" data-who="Everett" data-en="And more than most teams within a company, data is the lifeblood of GTM. And the core goal that I think we're trying to accomplish with our data is to create a perfect virtual copy of the market, the ideal customers, the accounts, the context that you're going after." aria-label="回原文"></button>。

难在哪？客户公司永远处于变化中：可能被收购、开新办公室、发新产品；而你自己也在改变它的状态——你在营销、销售、约会议；公司本身还在招人裁人，给你提供信号。所以要管理一个不断变化的对象，而你需要的数据一开始并不全在自己手里 <button class="pd-ts" data-t="03:05" data-who="Everett" data-en="The problem, though, that makes this challenging is that accounts at least exist in a state of constant change. As an organization, a company might be getting acquired." aria-label="回原文"></button>。

具体做法：拿到一个 CRM（客户关系管理系统）后，第一步是往客户公司记录里填入相关联系人，再叠加第三方信息——主要看四类：账户层级结构、firmographics（描述公司规模等企业属性的数据）、technographics（描述对方用什么技术的数据），然后在这些之上创建信号，判断哪些公司值得打、哪些正处于市场活跃期 <button class="pd-ts" data-t="04:24" data-who="Everett" data-en="And so in a brand new CRM or a CRM that I'm going into, the first thing that I am doing is actually filling up the account with relevant contacts, and then I'm layering in third-party information that is gonna help me figure out which accounts to target and which ones are in market." aria-label="回原文"></button>。

关键障碍：GTM 领域有数百家数据供应商，但没有任何一家能覆盖你想要的全部信息。所以核心技术是 **waterfalling（[[瀑布式查询|瀑布式查询]]）**——依次查询多个供应商来补全信息。

比如只用 Forager 拿某组国家的电话号码只能拿到一半，必须叠加其他供应商；这不仅适用于电话号码，GTM 里大多数数据点都是如此 <button class="pd-ts" data-t="05:04" data-who="Everett" data-en="And so the key technique here is called waterfalling. This is where I'm going to actually go and look into multiple providers to try to fill in all the information that I need." aria-label="回原文"></button>。而且无论自己还是供应商，都要对这些数据源跑 evals（评测）才能拿到最准的信息 <button class="pd-ts" data-t="05:26" data-who="Everett" data-en="And that's not only true for phone numbers, but for most of the other data points that we care about within GTM. And so either you or the vendor that you're using needs to run evals against these data providers in order to obtain the most accurate information." aria-label="回原文"></button>。

还有三个坑：①第三方信息之外还要纳入第一方信息并保持最新，但持续更新数据非常贵，必须**有选择地**挑字段更新；②如果跑了信号程序，信息还会不断被推送进来；③多个第三方来源对同一家公司的呈现不一致，需要做**实体消解**（把不同来源里的记录认成同一家公司）<button class="pd-ts" data-t="05:35" data-who="Everett" data-en="And so either you or the vendor that you're using needs to run evals against these data providers in order to obtain the most accurate information. And so not only do I need to sync in third-party information to my data layer, I also need to incorporate first-party information, and I need to keep that constantly up to date." aria-label="回原文"></button>。没有这一层，自动化 GTM 打法根本执行不了。

## 编排：让几十个工具对世界的看法一致

GTM 团队通常用着几十个工具：序列器（自动按节奏发触达消息的工具）、拨号器、CRM、数据仓库、通话笔记、Slack……而每个工具「对世界的看法都不一样」，编排就是把它们全部保持同步 <button class="pd-ts" data-t="06:46" data-who="Everett" data-en="And in most cases, the view of the world that those tools have is different depending on where you look. And so orchestration, in my view, is really the act of keeping all that up to date." aria-label="回原文"></button>。

难点在于各系统的数据需求截然不同：有的要实时、一次一条记录；有的要几十万条、一天更一次；员工数一直在变、总部地址很少变，不能所有字段同时更新；还要能把单一系统的信息扇出到多个系统。分布式设置下故障也时刻发生——这是个相当复杂的数据工程问题 <button class="pd-ts" data-t="07:36" data-who="Everett" data-en="The problem with orchestration is all of these different systems have different data needs. So some systems need kind of like real-time updates, one record at a time." aria-label="回原文"></button>。

一个经典难题：系统之间还会绕过你自行同步。比如 Salesforce 和序列器在独立于你的编排系统互相同步，你在 CRM 里建了联系人，必须等它同步到序列器之后才能对它采取行动——于是不得不引入等待和循环来检查信息是否就绪 <button class="pd-ts" data-t="08:33" data-who="Everett" data-en="A classic example of this is when I'm working with these different systems, usually they are not fully orchestrated, which means that one system is talking to each other while I'm trying to talk to both of those systems at the same time." aria-label="回原文"></button>。

Clay 迭代多次后的答案：用**基于图的方式**看编排，配一系列通用节点——跑智能体的节点、做工具调用的节点、处理条件逻辑的节点、跑代码的节点，以及实际执行 MapReduce（把任务扇出再收回结果）的节点。不管买还是自建，他认为这就是搭这件事的现代方式 <button class="pd-ts" data-t="08:58" data-who="Everett" data-en="This creates some difficult problems where you actually need to introduce things like waits and loops to check if information is ready. So Clay, we've iterated on this problem quite a bit, and we've ended up in a place where we are basically taking a graph-based view of the orchestration problem with a series of general-purpose nodes that are executing various things." aria-label="回原文"></button>。

## 智能体：每个账户一个长期运行的智能体

[[数据层|数据层]]和编排层就位后，系统已经相当复杂：多个信号在发生、数据要更新、智能体和销售代表在行动、会议和反馈在产生。今天的现状是靠销售代表手动梳理这一切，而过去一年最大的进展是可以用智能体接管这些上下文 <button class="pd-ts" data-t="10:24" data-who="Everett" data-en="And then I have meetings that are happening and feedback that's occurring. And so the state of the world today is that we are relying on sales reps in a lot of cases to manually sort through this." aria-label="回原文"></button>。

但 GTM 场景对智能体有三个特殊约束：①要构建**运行数周或数月**的长期智能体，在整个交易周期内追踪账户状态；②错误容忍度极低——成果很多是客户沟通，弄错会带来灾难性后果；③智能体做的是非结构化工作，却要推进 CRM 这种高度结构化的系统，映射极其重要 <button class="pd-ts" data-t="10:45" data-who="Everett" data-en="However, if you use agents, you actually run into some of the same problems that you are dealing with if you just use LLMs. So in GTM in particular, we are trying to build very long-running agents, agents that run over a course of weeks or months that keep track of the state of an account throughout a deal cycle." aria-label="回原文"></button>。

他们验证过的最强架构：**为每个账户配一个智能体，维护该账户的持久状态**。因为它大部分时间在休眠，需要用智能触发器或心跳机制唤醒；醒来后从数据层和编排层摄取账户当前上下文；因为它在替人做决策，还要允许对它反馈。

最前沿的是学习阶段——智能体处理账户时更新自己对「什么有效」的看法。他坦言这块在 GTM 里还没完全解决，持续学习和「下一步最佳行动建议」正是他们正在攻的前沿问题 <button class="pd-ts" data-t="11:19" data-who="Everett" data-en="And so the mapping of what the agent is producing is super important. So the architecture that we've landed on for this that I think is most powerful is an agent that exists for each account and maintains a persistent state of that account." aria-label="回原文"></button>。

实操建议：**把智能体更新的字段，和确定性系统、人工更新的字段分开**——CRM 里专设给智能体用的字段 <button class="pd-ts" data-t="12:33" data-who="Everett" data-en="And then critically, I'm also updating different values in my CRM that are just for the agents. So I always recommend separating the fields that agents are updating from the fields that deterministic systems are updating or that people are updating." aria-label="回原文"></button>。时机也是学问：比如丢单智能体按时间触发，失去一个账户后不会立刻追，而是等一段时间再攻 <button class="pd-ts" data-t="12:58" data-who="Everett" data-en="And this agent is triggered on a time basis. So if we lose an account, we're not gonna kind of like immediately go after that account again. We're going to wait for a little bit of time in order to attack it again." aria-label="回原文"></button>。

## 执行：最难的一环，本质是「在窄利润空间里不犯错」

数据、编排、决策都就位后，还得真正触达客户。而不幸的是，信息传达和执行是 GTM 工程里最难的问题之一 <button class="pd-ts" data-t="13:36" data-who="Everett" data-en="So now that we have a data layer that contains the perfect copy of the virtual world, we have an orchestrated system that's sharing context with all of our systems, we have agents that are making decisions and reasoning about what to do, we actually need to get in front of customers and execute our messaging." aria-label="回原文"></button>。

数据很残酷：冷邮件效果逐年变差；LinkedIn 的效果可以是冷邮件的三到四倍，冷电话和冷邮件大致相当；Smart Lead 跨约两千万封邮件的统计显示，回复率只有 0.5% 到 1%——对 100 个联系人做序列触达，大概只有一个回复 <button class="pd-ts" data-t="14:05" data-who="Everett" data-en="If you look at the far left here, I actually think these are pretty elevated rates for some of these, but the relative differences between these channels is correct." aria-label="回原文"></button>。这意味着智能体执行的风险极高：**如果智能体在做错误的事，你就错失了那个利润空间，而大多数 GTM 团队正是在那里取得成功的** <button class="pd-ts" data-t="14:30" data-who="Everett" data-en="So what that means is, of course, if we've got 100 contacts that we're sequencing, maybe one of them will reply. And so that really raises the stakes for agentic execution within GTM because if your agents are doing the wrong things, then you're missing out on the margin, which is where most GTM teams are having success." aria-label="回原文"></button>。

执行还要解决一些非常人性化的难题：是**代表销售代表发邮件**（比如 everett.clay.com 直接联系客户），还是让智能体自己发？用代表的名义发，一旦方式不对、回复不达标，公司整体域名声誉就受损——所以常见做法是用多个域名联系客户，但这又要求把那些域名上的回复路由回主域名，让销售代表能处理 <button class="pd-ts" data-t="14:49" data-who="Everett" data-en="The other thing with execution is you have to solve some very human problems. So for example, do you email on behalf of the rep or do you let the agent do the emailing?" aria-label="回原文"></button>。

这还只是邮件：多渠道触达的协调同样棘手——电话序列上接通并约到会议后，就得抑制邮件序列，可能还要把人从生命周期营销活动里退订。这些协调也可以用智能体来解 <button class="pd-ts" data-t="15:23" data-who="Everett" data-en="And that's just email. There's also multi-channel outreach, which is tricky as well because you then have to, for example, if you get a call connection and a meeting booked on your call sequence, you then need to suppress your email sequence and maybe unenroll someone from a lifecycle marketing campaign." aria-label="回原文"></button>。Clay 的做法是：一部分账户用代表收件箱代理发送；更多账户用多域名触达，再解决路由问题 <button class="pd-ts" data-t="15:50" data-who="Everett" data-en="So the coordination of the execution of all of this is also a hard problem and also something that we can use agents to help resolve. So here's a look at one way that we're tackling this." aria-label="回原文"></button>。

## 问答：最难的是「人和智能体的接口」

现场提问中，他说组织内推这些变更最难的一点，是**人和智能体之间的接口**：智能体最强的用法是接手销售代表原先的推理与决策层，于是经常出现代表觉得「我该做点不一样的」、或者根本不知道智能体已经做了某件事的情况。归根结底最终还是人来跟潜在客户通话——把自动化系统和人的动作衔接顺畅，可能是最难的问题 <button class="pd-ts" data-t="17:18" data-who="Everett" data-en="Just curious as to what your biggest challenge is putting out these new changes within the org. I think one of the harder problems is probably the interface between the human and the agent." aria-label="回原文"></button>。另一个问题问这是否只针对外呼：他答所有方面都涵盖，编排问题在 inbound（客户主动找上门）里尤其突出——路由要做对、账户资质认定要做对、还要理解随之而来的历史上下文 <button class="pd-ts" data-t="18:21" data-who="Everett" data-en="And my other question is that this is mainly for outbound or inbound as well is included in this? For everything, yeah. So like the orchestration problem is pretty acute in inbound." aria-label="回原文"></button>。

## 本集带走

- **GTM 可以像工程团队一样发版**：最先进的团队以两周为周期推送新数据、新自动化、新活动，前提是先补齐数据、编排、智能体、执行四块地基。
- **数据补全靠瀑布式查询**：没有一家数据供应商能覆盖全部，按供应商依次查询补齐；对数据源跑评测、只挑关键字段更新（更新很贵）、跨来源做实体消解。
- **编排用图 + 通用节点**：智能体节点、工具调用节点、条件逻辑节点、代码节点、MapReduce 扇出节点；特别小心系统间的隐式同步——CRM 建了联系人要等它同步到序列器才能行动，用等待和循环检查就绪。
- **每个账户一个持久智能体**：长期休眠、靠触发器/心跳唤醒、醒来摄取账户上下文；智能体专用字段与人工/确定性字段在 CRM 里分开；允许对智能体反馈，持续学习仍是前沿。
- **执行端容错极低**：冷邮件回复率仅 0.5%-1%，智能体做错就错失利润空间；用多域名保护主域名声誉、解决回复路由、多渠道间做好抑制与退订协调。
- **最难的是人机接口**：让销售代表知道智能体做了什么、并保留人做不同决定的衔接，是落地时最痛的问题。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">在我看来，这是第一批真正能够反映 AI 进展的角色之一。</span>  
> *And in my opinion, it's one of the first roles that actually is an index on the advances that we're making in AI.*  
> <span class="qm">—— Everett Berry · [01:41]</span> ^q1

> <span class="qz">我认为我们用数据想要实现的核心目标，是创建一个市场的完美虚拟副本——你正在瞄准的理想客户、客户公司和上下文。</span>  
> *And the core goal that I think we're trying to accomplish with our data is to create a perfect virtual copy of the market, the ideal customers, the accounts, the context that you're going after.*  
> <span class="qm">—— Everett Berry · [02:38]</span> ^q2

> <span class="qz">我们为此确定的最强大的架构，是为每个账户都存在一个智能体，并维护该账户的持久状态。</span>  
> *So the architecture that we've landed on for this that I think is most powerful is an agent that exists for each account and maintains a persistent state of that account.*  
> <span class="qm">—— Everett Berry · [11:19]</span> ^q3

> <span class="qz">所以，你知道，LinkedIn 的效果可以是冷邮件的三到四倍。</span>  
> *So, you know, LinkedIn can be three to four times more effective than cold email.*  
> <span class="qm">—— Everett Berry · [14:05]</span> ^q4

> <span class="qz">所以这真正提高了 GTM 中智能体执行的风险——如果你的智能体在做错误的事情，你就会错失那个利润空间，而大多数 GTM 团队正是在那里取得成功的。</span>  
> *And so that really raises the stakes for agentic execution within GTM because if your agents are doing the wrong things, then you're missing out on the margin, which is where most GTM teams are having success.*  
> <span class="qm">—— Everett Berry · [14:30]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|用 20 个 AI 智能体换掉 8 人销售团队：SaaStr 创始人的前沿实战]]<span class="pd-rz">同公司:Salesforce · 同概念:智能体 (agent)、编排 (orchestration)、CRM</span>
- [[2026-09-03-twentyvc-20vc-nvidia-crushes-quarter-and-buys-hug|NVIDIA 962亿美元季度背后：智能体时代的资本与生存法则]]<span class="pd-rz">同公司:Clay、Salesforce · 同概念:智能体 (agent)</span>
- [[2026-07-29-productpodcast-how-to-know-your-ai-feature-actually-wor|n8n 创始人 Jan:把代码送出去,反而做到 1 亿欧元 ARR]]<span class="pd-rz">同概念:智能体 (agent)、编排 (orchestration)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同概念:智能体 (agent)、编排 (orchestration)</span>
- [[2026-02-15-lennys-sequoia-ceo-coach-why-its-never-been|Brian Halligan：CEO 的实战手册]]<span class="pd-rz">同公司:Clay · 同概念:智能体 (agent)</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:智能体 (agent)、评测 (evals)</span>

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
