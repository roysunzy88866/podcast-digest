---
title: 用 20 个 AI 智能体替代 10 人销售团队：SaaStr 创始人的前沿实战
podcast: "Lenny's Podcast"
date: 2026-01-01
source_url: https://www.lennysnewsletter.com/p/we-replaced-our-sales-team-with-20-ai-agents
duration: "102:07"
host: "[[Lenny]]"
cohosts: ["[[Jason Lemkin]]"]
companies: ["[[SaaStr]]", "[[Salesforce]]", "[[Replit]]", "[[Vercel]]", "[[Delphi]]", "[[Artisan]]", "[[Qualified]]", "[[Agentforce]]"]
concepts: ["[[智能体]]", "[[前线部署工程师]]", "[[提示词]]", "[[幻觉]]"]
tags:
  - AI 销售智能体
  - GTM 变革
  - 团队重组
  - AI 取代人工
  - B2B 创业
---

# 用 20 个 AI 智能体替代 10 人销售团队：SaaStr 创始人的前沿实战

> [!info] 关联
> **主持**:[[Lenny]]
>
> **联合主持**:[[Jason Lemkin]]
>
> **涉及公司**:[[SaaStr]] · [[Salesforce]] · [[Replit]] · [[Vercel]] · [[Delphi]] · [[Artisan]] · [[Qualified]] · [[Agentforce]]
>
> **概念**:[[智能体]] · [[前线部署工程师]] · [[提示词]] · [[幻觉]]
>
> **来源**:[Lenny's Podcast](https://www.lennysnewsletter.com/p/we-replaced-our-sales-team-with-20-ai-agents)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

当 AI 销售智能体能 7x24 小时工作，中庸的销售人员将被加速淘汰，未来的组织将走向极度精简。

[[Jason Lemkin|Jason Lemkin]] 是全球最大的 B2B 创始人社区 [[SaaStr|SaaStr]] 的创始人。在今年的万人年度大会现场，他高薪聘请的两名核心销售在现场直接辞职——这已经是他职业生涯中组建的第八个销售团队了。受够了反复招聘的 Jason 当机立断，宣布不再在销售岗位上招聘人类，而是把团队彻底换成了 AI [[智能体|智能体]] [07:43 Jason Lemkin]。在这一集访谈中，他详尽拆解了自己用「1.2 个人类 + 20 个 AI 智能体」运营八位数营收业务的完整实战经验。全文将沿着四个部分展开：第一部分讲他为什么要做这次团队大换血，以及 AI 销售智能体最基础的工作原理；第二部分盘点他正在使用的几个核心智能体及他的选品逻辑；第三部分谈这场变革对每个销售从业者的职业影响；最后给出具体的落地行动建议。

## 从「不再招人」到 AI 接管：变革的起点与智能体基础

说完了开头那段戏剧性的团队大换血背景，接下来我们来看看他具体是怎么做的。Jason 现在的团队配置是：一名全职 AE（客户经理）、花 20% 时间管理智能体的兼职首席 AI 官 Amelia，外加 20 个 AI 智能体 [12:30 Jason Lemkin]。以前需要 8 到 9 个人类完成的活，现在他们做到了相近的净生产力，而且因为软件可以无限扩展，整体效率得到了质的提升 [09:20 Jason Lemkin]。

很多人一听到 AI 智能体（Agent，指能自主感知环境、做出决策并执行任务的 AI 程序）觉得很玄乎，但 Jason 强调，销售智能体的底层并不神秘，本质上就是一堆 API（应用程序接口，软件之间对话的通道）拼接在一起 [35:26 Jason Lemkin]。它之所以能工作，关键不在于模型本身多神奇，而在于你如何「训练」它。

Jason 分享了让一个销售智能体从零上线的标准五步法 [25:36 Jason Lemkin]：
1. **摄取**：把你的网站链接、维基百科、培训文档甚至招股说明书上传给它。所谓的「摄取」就是让它把你的数据读进去，做些你不需要懂的处理（比如 RAG 检索增强和向量化）[25:49 Jason Lemkin]。
2. **训练**：它会把摄取的内容转成各种问题来问你。你不断回答这些问题，它就会越来越好 [26:05 Jason Lemkin]。
3. **测试与纠错**：在它刚开始发邮件时，一定会说蠢话或者产生「[[幻觉|幻觉]]」（AI 一本正经胡说八道的术语）。你必须每天花一两个小时去纠正它的错误 [26:39 Jason Lemkin]。
4. **产出**：坚持纠错 30 天后，智能体就会变得相当不错了。
5. **提效**：当它跑通后，你能把繁杂的话术浓缩成一个极致的[[提示词|提示词]]（Prompt，即一串描述你希望 AI 做什么的文本指令）[28:07 Jason Lemkin]。Jason 把自己三个不同智能体的成熟提示词直接喂给新产品，当天就跑出了很好的效果。

## 核心智能体大盘点与「谁帮你最多」的选品逻辑

了解了基础原理，接下来看看他在真实的 GTM 中部署了哪些关键智能体。Jason 强调，在 AI 时代，像发冷邮件、打陌生电话这些经典的销售战术本身依然有效，只是把它们串起来的「老剧本」不灵了 [14:32 Jason Lemkin]。

目前他跑通的核心智能体主要有以下几个：
- **通用问答与支持智能体**：这是他最早用 [[Delphi|Delphi]] 做的数字分身（Digital Jason）。它原本只是用来回答创始人问题的，但后来它不仅自动包揽了以往人类要两周才回的客服支持邮件，甚至还在无人干预的情况下，独自搞定了一笔 7 万美元的赞助 [08:02 Jason Lemkin]。
- **出站销售智能体**：专门用于向 40 万名流失或潜在用户发邮件召回。他们用了 YC 孵化的创业公司 [[Artisan|Artisan]] 的产品，发了 6 万封邮件，回复率很高 [33:10 Jason Lemkin]。
- **入站销售智能体**：负责在网站上拦截、审核那些主动找上门的线索。他们用了 [[Qualified|Qualified]]（一家由 [[Salesforce|Salesforce]] 前 CMO 创立的公司）的产品。它在周六晚上 11 点自主搞定了赞助商，而且 24 小时无休 [34:23 Jason Lemkin]。
- **沉睡线索激活智能体**：专门去重新联系那些被人类销售嫌佣金少、主动放弃跟进的线索。他们用了 Salesforce 的 [[Agentforce|Agentforce]] 产品，竟然拿到了高达 70% 的回复率 [38:47 Jason Lemkin]。

那么，面对市面上海量的智能体工具，到底该怎么选？Jason 给出了他最具反直觉的选品逻辑：**不要只挑功能最强的，要挑「谁愿意派工程师来手把手帮你上线」的**。

他强调，在底层，市面上这些顶尖的 AI GTM 工具其实大同小异，底层调用的甚至都是 Claude 4 模型 [35:23 Jason Lemkin]。既然必须花一个月来训练它，那么如果没有供应商的协助，光靠你自己是很难搞定的。所以，挑选工具时，你必须在评估矩阵里加上关键的一列：**谁会派 Forward Deployed Engineer（[[前线部署工程师|前线部署工程师]]，简称 FDE，指供应商派来驻场帮你把产品真正跑通的人）？** [36:01 Jason Lemkin]

Jason 当初选 Artisan，不是因为它最知名，而是因为它的团队最愿意提供帮助。这正是初创公司的巨大机会：大厂也许软件做得好，但如果你能像初创公司这样，派 FDE 像顾问一样坐在客户公司里，确保智能体在开出的支票兑现前就 100% 能跑起来，客户根本无法拒绝 [67:17 Jason Lemkin]。

## 「有人格魅力」已不再是护城河：从业者的生死分水岭

工具变了，用工具的人怎么办？这正是我们要探讨的下一个话题：这场变革对销售从业者意味着什么。

Jason 给出了极其冷酷的预判：
- **SDR（销售开发代表）与 BDR（业务开发代表）将大面积消亡**。那些刚毕业只会发邮件、做线索资格认定的初级岗位，在 AI 面前毫无价值，明年就会灭绝 [19:44 Jason Lemkin]。
- **AE（客户经理）将面临减半与提效**。目前大多数 AI 工具还无法完全搞定复杂的销售谈判，但未来几年，AE 的工作量会大幅萎缩 [20:48 Jason Lemkin]。

更致命的是，很多平庸的销售赖以生存的最大护城河——「我是一个有人格魅力、会搞关系的人」——在 AI 时代将彻底失效 [70:22 Jason Lemkin]。Jason 一针见血地指出，ChatGPT 现在就是地球上最好的心理治疗师，它比大多数打工人更懂倾听、更像一个「有人格魅力的人」[74:33 Jason Lemkin]。

真正的分水岭在于你懂不懂产品。如果你对你所卖的产品的技术异议一无所知，只会处关系，你就会被 AI 淘汰。而那些真正懂产品、知道怎么管理智能体的人，将获得超能力。Jason 预测，未来的顶级 SDR 年薪应该达到 25 万美元，但他们的职责不再是自己打电话，而是像在 [[Vercel|Vercel]] 公司一样，每个人管理 10 个 AI 智能体 [39:39 Jason Lemkin]。

## 终极建议与未来职场法则

那么，无论是高管还是基层员工，到底该如何在这场洪流中自救并脱颖而出？Jason 给出了落地的操作指南。

如果你是**总监或高管**：马上选一个最让你头疼的环节（比如客服支持或线索分发），挑一个主流的智能体供应商，**自己亲自下场跑通它**。自己上传数据，自己测试纠错，把训练和编排的全流程走一遍 [24:01 Jason Lemkin]。Jason 警告说，他见过太多规模数百亿美元的上市公司，幻想着买个工具直接扔给年轻的 SDR 团队去鼓捣，结果注定是零回报 [24:49 Jason Lemkin]。

如果你是**普通从业者**：不要抗拒组织引入的 AI 工具。拥抱那些能让你产能翻倍的智能体，因为现在像 Momentum 和 Attention 这样的 AI RevOps（营收运营）工具，能实时把你每天的一举一动自动同步进 CRM（客户关系管理系统）[61:18 Jason Lemkin]。Jason 团队里有个老销售，就是在上线这种全透明监控工具的当天，因为过去 30 天啥也没干被当场揭穿而引咎辞职的 [61:36 Jason Lemkin]。

对于创始人，Jason 给了一个假期作业：用浏览器的无痕模式，用一个全新的 Gmail 邮箱，去走一遍你自己产品的购买流程。去体验一下你们糟糕的客服回复速度和销售跟进效率，挑出那个让你流泪的环节，然后买个智能体去修好它 [85:30 Jason Lemkin]。

最后，面对大家最担心的「AI 会不会导致人类大量失业」，Jason 给出了相当宏观的判断：真正的危机不是裁员，而是当有人离职后，公司不再招人填补——他原话是那些增长缓慢的公司「仍然需要人，不需要那么多，但它们仍然需要人」[82:11 Jason Lemkin]，言下之意空出的岗位会被 AI 顶上。而对于那些真正掌握 AI 的人来说，最好的时代才刚开始，因为你甚至不需要会写代码，就能在 150 天内用 [[Replit|Replit]] 构建出 12 个被使用上百万人次的工具 [81:03 Jason Lemkin]。

## 本集带走

1. **销售智能体绝不是「一键启动」的魔法**。它在底层只是 API 的堆砌，真正的核心壁垒在于持续一个月的「数据摄取与人工纠错训练」。谁能得到供应商 FDE（前线部署工程师）最得力的保姆式协助，谁才能成功。
2. **「我是一个有人格魅力的人」不再是销售的职业护城河**。AI 可以比大多数打工人更具同理心。未来的高薪销售不靠自己打电话，而是靠管理 10 个 AI 智能体来产生以往数十倍的产能。
3. **AI 对就业市场的真实冲击是「不再补员」**。大规模裁员往往只是借口，未来的常态是员工离职后不再招人，而是由 1.2 个人类加上 20 个智能体，继续维系八位数的营收。

## 金句(中英对照 · 过机器闸门三联校验)

> 那种大学毕业后被雇佣来发邮件和回复入站邮件，也许当天晚些时候或第二天才回复他们的初级 SDR，我们不需要他们了。  
> *The classic SDR junior kid that is hired out of college to send emails and respond to inbound emails and maybe get back to them later that day or the next day, we don't need them.*  
> —— Jason Lemkin · [19:27] ^q1

> 基于邮件节奏的 SDR 明年将被 AI 取代 90%。  
> *The email-based cadence SDR will be 90% displaced by AI next year.*  
> —— Jason Lemkin · [19:49] ^q2

> AI 正在取代人们今天不想做的工作，并且它正在挤出中游和平庸的人。  
> *AI is replacing the jobs people don't want to do today, and it is displacing the mid-pack and the mediocre.*  
> —— Jason Lemkin · [13:50] ^q3

> 我们应该有年薪 25 万美元的 SDR，但他们应该像……在 Vercel，他们会管理 10 个智能体，而不是 10 个人。  
> *We should have $250,000 a year SDRs, but they'd be like ... At Vercel, they'd be managing 10 agents, not 10 people.*  
> —— Jason Lemkin · [00:39] ^q4

> 净生产力大约是一样的。它不是更好，也不是更差，但它更高效得多而且它可以扩展，因为软件可以扩展。  
> *The net productivity is about the same. It's not better, it's not worse, but it's so much more efficient and it scales because software scales.*  
> —— Jason Lemkin · [09:16] ^q5

> 做编排者或首席 AI 人员对于懒人来说不是一份好工作，因为智能体从不睡觉。  
> *Being the orchestrator or the chief AI person is not a good job for lazy people because the agents never sleep.*  
> —— Jason Lemkin · [40:55] ^q6

> 所以请注意，如果你是一个创业公司甚至是 Salesforce 或 HubSpot，也许在未来 12 个月内关闭这些交易，因为窗口可能会关闭，人们会说，听着，那是我见过的最酷的智能体。我对之前的五个感到筋疲力尽。  
> *So just be aware, if you're a startup or even Salesforce or HubSpot, maybe close those deals in the next 12 months, because the window may close where people say, Listen, that's the coolest agent I've ever seen. I'm exhausted from the last five.*  
> —— Jason Lemkin · [41:43] ^q7

> 如果你什么都没有，它也不必改变世界。如果你真的什么都不做，然后开始做一些高 ROI 的事情，你就会得到回报。  
> *If you have nothing, it doesn't have to change the world. If you're literally doing nothing and you start to do something that's high ROI, you're going to get return.*  
> —— Jason Lemkin · [33:50] ^q8

> 挑选那个让你在喝热红酒时哭得最厉害的事情，去买那个智能体并修复它。  
> *Pick the thing that makes you cry the most over your mold wine and go buy that agent and fix it.*  
> —— Jason Lemkin · [86:02] ^q9

> 我们在销售领域雇佣人类这件事已经结束了。完毕。  
> *We're done with hiring humans in sales. We're done.*  
> —— Jason Lemkin · [07:50] ^q10

> 我甚至不会写代码 Lenny，但在过去 150 天里，我在 Replit 上构建了 12 个应用程序，被使用了 100 万次。  
> *I can't even code Lenny, and I've built 12 apps on Replit in the last 150 days used by a million times.*  
> —— Jason Lemkin · [80:56] ^q11

> ChatGPT 是地球上我们最好的治疗师。它是一个有人缘的人。  
> *ChatGPT is our best therapist on planet Earth. It's a people person.*  
> —— Jason Lemkin · [74:33] ^q12

## 相关单集

- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同公司:Vercel · 同概念:智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的 AI 工作预测:智能体接管工作,但人类不会失业》]] —— 同概念:前线部署工程师 (Forward Deployed Engineer)、智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同公司:Replit · 同概念:智能体 (agent)
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《估值 150 亿的隐形 AI 公司 Applied Intuition:给自动驾驶卡车的焦虑开一剂务实药方》]] —— 同概念:智能体 (agent)
- [[2026-03-22-lennys-the-art-of-influence-jessica-fain|《别怪高管不懂你：产品经理的向上影响力心法》]] —— 同概念:智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被淘汰，构建者迎来黄金期》]] —— 同概念:智能体 (agent)
- [[2026-04-23-lennys-how-anthropics-product-team-moves|《对话 Anthropic 产品负责人 Cat Wu:AI 时代 PM 如何跟上「每周发布」的疯狂节奏》]] —— 同概念:智能体 (agent)
- [[2026-04-26-lennys-snapchat-ceo-why-distribution-is|《Snap CEO Evan Spiegel:在AI时代,做最会创新的公司》]] —— 同概念:智能体 (agent)
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《专访 Satya Nadella:智能体时代的平台逻辑与企业护城河》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人：别想从零颠覆世界，靠复制才能创新》]] —— 同概念:智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《给 AI 智能体装上「安全带」:Gray Swan 的攻防实战》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《Databricks 的智能体时代布局：统一调度、开源治理与数据库重写》]] —— 同概念:智能体 (agent)
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|《OpenAI Codex lead on the new shape of product work | Andrew Ambrosino》]] —— 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《No Figma. No Jira. No docs. How Gusto built a new product line with Claude Code | Eddie Kim (CTO)》]] —— 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《AI 基础设施如何为智能体重新设计:Modal 联合创始人的方法》]] —— 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:智能体 (agent)
- [[2025-11-20-lennys-slack-founder-stewart-butterfield|《把自家产品骂成「一坨狗屎」：Stewart Butterfield 的产品哲学》]] —— 同公司:Salesforce
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《在指数级增长公司做增长：Anthropic 增长负责人的打法》]] —— 同概念:智能体 (agent)

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
