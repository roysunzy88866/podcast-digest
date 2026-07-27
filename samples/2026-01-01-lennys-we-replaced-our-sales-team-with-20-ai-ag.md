---
title: 1.2 个人 + 20 个 AI 智能体：SaaStr 的极简销售实验
podcast: "Lenny's Podcast"
date: 2026-01-01
source_url: https://www.lennysnewsletter.com/p/we-replaced-our-sales-team-with-20-ai-agents
duration: "102:07"
type: episode
cover: "#6366f1"
image: "/covers/2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag.jpg"
description: SaaStr 创始人用 20 个智能体替代约 10 人销售团队，详解 AI 落地 GTM 的实战经验。
host: "[[Lenny]]"
cohosts: ["[[Jason Lemkin]]"]
companies: ["[[SaaStr]]", "[[Replit]]", "[[Vercel]]", "[[Salesforce]]", "[[Artisan]]", "[[Qualified]]", "[[Delphi]]"]
concepts: ["[[智能体]]", "[[编排]]", "[[go-to-market]]", "[[前置部署工程师]]", "[[剧本]]", "[[AI 泡沫]]", "[[CRM]]"]
category: 增长与销售
tags:
  - 增长与销售
  - 智能体
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/">跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><span class="soon" title="必读页归 C13c">最热</span></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>1.2 个人 + 20 个 AI 智能体：SaaStr 的极简销售实验</span></a><div class="pd-acts"></div></div></header></div>

# 1.2 个人 + 20 个 AI 智能体：SaaStr 的极简销售实验

<div class="pd-mt">2026-01-01 · Lenny's Podcast · 102:07 · <a class="mcat" href="./tags/%E5%A2%9E%E9%95%BF%E4%B8%8E%E9%94%80%E5%94%AE">增长与销售</a> · <a class="mcat" href="./tags/%E6%99%BA%E8%83%BD%E4%BD%93">智能体</a></div>

<div class="pd-play"><audio controls preload="metadata" src="/audio/2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我真的无法每年付给一个初级 SDR 15 万美元结果他们却辞职。</div><div class="a">Jason Lemkin · 08:18</div></div>

> [!info] 关联
> **主持**:[[Lenny]]
>
> **联合主持**:[[Jason Lemkin]]
>
> **涉及公司**:[[SaaStr]] · [[Replit]] · [[Vercel]] · [[Salesforce]] · [[Artisan]] · [[Qualified]] · [[Delphi]]
>
> **概念**:[[智能体]] · [[编排]] · [[go-to-market]] · [[前置部署工程师]] · [[剧本]] · [[AI 泡沫]] · [[CRM]]
>
> **来源**:[Lenny's Podcast](https://www.lennysnewsletter.com/p/we-replaced-our-sales-team-with-20-ai-agents)

<div class="pd-tldr"><b>一句话</b>SaaStr 创始人用 20 个智能体替代约 10 人销售团队，详解 AI 落地 GTM 的实战经验。</div>

[[Jason Lemkin|Jason Lemkin]] 是 [[SaaStr|SaaStr]]（全球最大的 B2B 创始人社区之一）的创始人。今年五月，在一场大型年度活动上，他的两名高薪销售人员在活动现场直接辞职。这已经是他第三次经历团队流失了。他当即决定：「我们在销售领域雇佣人类这件事已经结束了」<button class="pd-ts" data-t="07:43" data-who="Jason Lemkin" data-en="They just quit on site. And this is like the third time I've done this, like the eighth team I've built, and I turned to Amelia, our chief AI officer, and I said, &quot;We're done with hiring humans in sales." aria-label="回原文"></button>。如今，SaaStr 的销售团队从曾经的约 10 个人，变成了「1.2 个人类」（一名全职 AE 加上花 20% 时间管理[[智能体|智能体]]的首席 AI 官）和 20 个 AI 智能体，而净生产力与原来持平 <button class="pd-ts" data-t="12:53" data-who="Jason Lemkin" data-en="Now you have 1.2 humans and you said 20 agents. 20 agents. Yeah." aria-label="回原文"></button>。本集访谈是一份极其具体的实操手册：智能体在销售中能做什么、人类该如何适应，以及为什么你必须亲自动手部署一个智能体。全文脉络如下：先看 GTM（go-to-market，[[go-to-market|推向市场]]）的哪些环节被智能体改变；接着拆解 SaaStr 真实部署的智能体与选型逻辑；然后是如何训练智能体并保证邮件质量；最后是对销售个人、初创公司的行动指南与职业预判。

## GTM 智能体到底改变了什么：不是策略失效，是剧本过时了

要理解智能体对销售的影响，得先看清当下 B2B 市场的两极分化。

Jason 指出，传统的销售「策略」（plays，如外拓邮件、播客、线下活动）依然有效，真正失效的是旧的「[[剧本|剧本]]」（playbooks，即教人怎么执行的照搬流程）<button class="pd-ts" data-t="14:30" data-who="Jason Lemkin" data-en="I want to spend time on the different agents you've built, but first of all, just kind of zooming out, having gone through this experience, how do you see the world of go-to market changing next year in the coming years?" aria-label="回原文"></button>。如今的 B2B 市场出现了前所未有的两极分化：一头是增长飞快的 AI 领导者（如 [[Vercel|Vercel]]、[[Replit|Replit]]、ElevenLabs），它们面临的是海量线索处理不过来；另一头是增长停滞的传统 SaaS 公司。这两类公司都有极强的动力用 AI 来提效——前者为了处理溢出的需求，后者为了无情地压缩成本 <button class="pd-ts" data-t="16:14" data-who="Jason Lemkin" data-en="And then this world where nothing seems to be working, it's just because the demand has evaporated. So both ends have an incentive in 2026 to push the limits for AI for go-to market." aria-label="回原文"></button>。

更反常的是，当前是一个「所有人同时都在采购」的罕见窗口期。Jason 观察到，过去一年里某个类别中潜在的采购客户比例从传统的 3%-5% 飙升到了 50% 以上，因为各家公司高管都在强推 AI 转型 <button class="pd-ts" data-t="17:52" data-who="Jason Lemkin" data-en="Because there's a lot of push from the top of like, we need to adopt AI, we need to be more productive- Now, everyone, not the traditional ... The traditional metric was in most categories, three to 5% of prospects would be in market a year." aria-label="回原文"></button>。他提醒，这是一个会结束的「[[AI 泡沫|AI 泡沫]]版本」，但在它结束前，需求端的狂热彻底改变了销售运转的方式 <button class="pd-ts" data-t="18:56" data-who="Jason Lemkin" data-en="Why are Harvey and the others and the Goro are doing ... I mean, they're great tools, but everyone is like, we need to automate how we review contracts and documents with AI now." aria-label="回原文"></button>。

市场逻辑变了，那具体的销售岗位会怎样？顺着这个思路，我们进入他对各种销售角色的具体预测。

## 销售职业的未来：入门岗被清洗，精英被放大

如果你问销售职业的未来是什么，Jason 的预测极其冷酷。

首当其冲的是 SDR（销售开发代表，通常负责发掘和初步联系潜在客户）。那种刚大学毕业、主要靠发邮件做「节奏触达」的初级 SDR，他认为明年将被 AI 取代 90% <button class="pd-ts" data-t="19:44" data-who="Jason Lemkin" data-en="We're not going to need most of them. SDRs that knock on doors in a lot of industries aren't going to be displaced. The email-based cadence SDR will be 90% displaced by AI next year." aria-label="回原文"></button>。而负责审核进站线索的 BDR（业务开发代表）更是「明年应该灭绝」<button class="pd-ts" data-t="19:56" data-who="Jason Lemkin" data-en="The email-based cadence SDR will be 90% displaced by AI next year. People have different nomenclature. I call BDRs, folks that qualify leads coming in, the contact needs that we see." aria-label="回原文"></button>。原因很简单：让客户等一两天，只为了让一个不了解产品的 21 岁年轻人来问「你是做什么的」，这在 AI 时代毫无道理。他自己的智能体已经能在网站上静默完成资格审核，并直接安排好与销售的会议 <button class="pd-ts" data-t="20:16" data-who="Jason Lemkin" data-en="How much are you willing to pay me? Maybe I'll set up a call with Lenny later this week.&quot; There is no need to do that with AI." aria-label="回原文"></button>。

至于负责实际成交的 AE（Account Executive，客户经理），Jason 预测他们 70% 的工作明年还安全，但长期看会降至 40%-50% <button class="pd-ts" data-t="20:48" data-who="Jason Lemkin" data-en="I'm guessing with your ... Now the AE, the classic human doing the sales, most of the tools aren't there yet for the most part. I think 70% of their jobs will be safe by the end of next year, but I think it will decline to 40 or 50." aria-label="回原文"></button>。只要价格谈判空间不大，且智能体比人更懂产品，智能体也能自己完成交易。

> 【背景】SDR、BDR、AE 都是 B2B 科技销售中常见的岗位划分。SDR 多侧重外拓发冷邮件，BDR 侧重处理进站线索审核，AE 则负责接手成熟线索并完成最终签约收款。

这意味着一个严峻的元问题：如果不再有入门级的 SDR/AE，销售职业的晋升梯队怎么建？Jason 坦言，这一趋势已在全行业发生——公司宁愿要懂行的熟手配 AI，也不愿从零培养新人。那些真正懂产品、且知道如何「管理和[[编排|编排]]」智能体的人将变得极度抢手；而只靠「我擅长跟人打交道」却对产品技术一无所知的平庸销售，正在迅速被淘汰 <button class="pd-ts" data-t="54:11" data-who="Jason Lemkin" data-en="And people are posting on LinkedIn that they want to hire these GTM engineers or... I don't think that role exists today. I worry when I see these roles. I think today, and listen, if we get together in 18 months, we'll update this because the world's changing so fast." aria-label="回原文"></button>。

岗位会被重塑，那具体该怎么把智能体加进你的业务里？这正是他接下来分享的实战历程。

## 从客服到外拓：SaaStr 的智能体部署之路

在 SaaStr 真实部署智能体时，Jason 走过了一条循序渐进的路，并总结出了最关键的避坑指南。

他的第一个重要忠告是：**不要自己建，去采购**。即使他是 Replit（一款让不懂代码的人也能用自然语言开发应用的工具）的前 1% 高级用户，自己也绝不建议公司自建 GTM 智能体。原因是在 AI 时代，工具迭代速度极快，自建的东西几个月就会过时，除非你是 Vercel 这种有顶尖全职工程团队的公司 <button class="pd-ts" data-t="29:04" data-who="Jason Lemkin" data-en="But two caveats are things at the top. I built a lot of stuff in Replit. We can talk about it for fun." aria-label="回原文"></button>。

SaaStr 采购部署的第一个突破，其实始于「客服支持」。Jason 用 [[Delphi|Delphi]]（一款制作数字人克隆的工具）做了个「数字 Jason」。他原本只想做知识问答，结果发现用户开始拿它问活动退款、折扣等客服问题，甚至直接通过它成交了一笔 7 万美元的赞助 <button class="pd-ts" data-t="07:59" data-who="Jason Lemkin" data-en="Even if it doesn't quite work. And I knew from this Delphi, this general agent that it would sort of work because going into annual, this general agent, this Digital Jason closed a 70K sponsorship on its own." aria-label="回原文"></button>。这让他意识到，如果你还没开始，做 7x24 小时无死角响应的支持智能体是最佳切入点 <button class="pd-ts" data-t="32:22" data-who="Jason Lemkin" data-en="And then it did this thing where it sold sponsorship on its own. So one place to start if you haven't started is in support. And you don't have to buy Sierra and you don't have to buy DecaCon necessarily and you don't have to buy Finn, but one potential place to start is can you do great 24/7 support?" aria-label="回原文"></button>。

随后他们扩展到了外拓和进站线索处理：
- **外拓**：他们选了 YC 孵化的 [[Artisan|Artisan]]，向曾经参会但流失的用户发送了约 6 万封邮件，效果显著 <button class="pd-ts" data-t="34:02" data-who="Jason Lemkin" data-en="So we did that one. We trained it. It's great." aria-label="回原文"></button>。
- **进站审核**：他们选了 [[Qualified|Qualified]]（一家由 [[Salesforce|Salesforce]] 前 CMO 创立的公司）。以前没人愿意半夜去回邮件，现在智能体可以在周六晚上 11 点直接把高意向的赞助商转化掉 <button class="pd-ts" data-t="34:16" data-who="Jason Lemkin" data-en="We don't want to have this depressing experience where a salesperson quits and it's two weeks later until they talk to...&quot; So we used this vendor called Qualified, which was founded by the ex CMO of Salesforce that does a lot now, but mostly focused on Qualified stuff." aria-label="回原文"></button>。

为什么选这两家？Jason 揭示了一个反直觉的采购标准：**底层技术上大家都在拼装 API（程序接口），大同小异，关键看哪家能给你提供最多的手把手帮助** <button class="pd-ts" data-t="35:17" data-who="Jason Lemkin" data-en="But the key to the first two, and if you're going to pick an agent, is they offered to help the most. At the end of the day, Lenny, these are all running on Claude 4." aria-label="回原文"></button>。他强调，这些工具都需要拿你最好的销售话术去「喂养」并花一个月时间不断纠错，如果供应商不提供一位 FDE（Forward Deployed Engineer，[[前置部署工程师|前置部署工程师]]）陪你调试，你根本没法上线。很多最好的供应商甚至会主动拒掉那些他们判定无法帮成功的客户 <button class="pd-ts" data-t="36:33" data-who="Jason Lemkin" data-en="And so that's what I learned is, you have this partner, the FDE and the vendor, and a lot of them actually might not take your business if they don't think they can help you." aria-label="回原文"></button>。

既然提到了客户线索，很多人会质疑：「SaaStr 有 40 万联系人，我没有这么大的数据库怎么办？」Jason 打消了这个疑虑：哪怕你只有 300 个付费客户，你的 [[CRM|CRM]]（客户关系管理系统）里也可能躺着几万个曾访问过网站但无人跟进的线索。只要你的线索多到人类销售懒得全部去碰，你就可以从 AI 中受益 <button class="pd-ts" data-t="37:11" data-who="Jason Lemkin" data-en="How many leads do you have? How many folks in your database? How many folks have you tried to reach out before?" aria-label="回原文"></button>。

部署了智能体，发出了成千上万封邮件，怎么保证这些邮件不变成令人厌恶的垃圾信息？这是下一个必须解决的问题。

## 训练与质量：如何让智能体写出不招人烦的邮件？

很多人对 AI 销售邮件的印象是「糟糕透顶」。Jason 认为，问题出在你没用对方法训练它。

他给出了让智能体写出好邮件的秘方：**拿你团队里最顶尖的销售或营销人员发过的最好邮件，直接用作智能体的模板** <button class="pd-ts" data-t="42:36" data-who="Jason Lemkin" data-en="It's a really, really, really good question. Maybe the two biggest learnings. Take your best person on your sales team, your best marketer you have, take their email copy and use that as the template for your AI." aria-label="回原文"></button>。在他被 Adobe 收购时，当时的销售 leader Sam Blond 发现团队里很多老销售的邮件写得惨不忍睹。既然平庸的人类本来就在发烂邮件，那只要把顶尖高手的模板喂给智能体，再配合网站访客数据做轻度个性化（比如知道对方在用什么竞品），AI 写出来的邮件水平其实远超平庸的人类 <button class="pd-ts" data-t="44:11" data-who="Jason Lemkin" data-en="And then if it has any data on Lenny, it can pull data and it can lightly personalize that email. And even better, a lot of these products track all the visitors to your website." aria-label="回原文"></button>。他甚至建议，你可以直接让大模型帮你写三个变体，然后做 A/B 测试（对比测试哪种效果更好），智能体非常擅长做这类变体测试 <button class="pd-ts" data-t="43:37" data-who="Jason Lemkin" data-en="Train the agent on it and let it iterate an A/B test from that. Agents are really good at A/B testing. They're really good at creating variants." aria-label="回原文"></button>。

很多人会纠结：发邮件时要不要告诉对方这是 AI？Jason 团队发了数十万封邮件后得出的结论是：**没人在乎**。只要邮件能提供价值，且能秒回，创始人甚至会回复说「哈哈我知道你是 AI，但这封挺好，我们聊聊吧」<button class="pd-ts" data-t="45:24" data-who="Jason Lemkin" data-en="It wasn't as great as you said on stage, but it was pretty good.&quot; But do you tell people it's an AI or do you hide it? And what we learned from sending hundreds of thousands is it doesn't matter." aria-label="回原文"></button>。

不过，即使智能体再聪明，如果没有人盯着它们，这套系统也会瞬间崩塌。这正是接下来要谈的「编排者」角色。

## 最关键的新角色：AI 编排官与暗藏的隐患

智能体不能自己管自己，SaaStr 的 20 个智能体背后，是那个至关重要的「1.2 个人类」。

那「0.2 个人类」指的是 Amelia——SaaStr 的首席 AI 官。她每周要花 10 到 15 个小时审查这 20 个智能体的输出 <button class="pd-ts" data-t="40:40" data-who="Jason Lemkin" data-en="It's well-trained. We have so many agents going and so many emails that Amelia has to spend 10 to 15 hours a week reviewing the outputs. And it's exhausting because agents work all night and they work weekends and they work on Christmas." aria-label="回原文"></button>。这绝非一份轻松的差事。Jason 强调，智能体 7x24 小时永不停歇，连圣诞节都在疯狂发邮件，这意味着作为编排者，你必须时刻盯着它们有没有「胡言乱语」（即模型产生的幻觉或事实错误）。如果没人每天花一两小时去纠偏，这些智能体就会给客户报错活动日期，或者发出极度尴尬的邮件 <button class="pd-ts" data-t="40:24" data-who="Jason Lemkin" data-en="Because right now, when we did Delphi in the beginning, when I copied you with Delphi, even me, I spent almost an hour a day training it in the beginning because when we started to use it for support, it had an initial... it started telling people the wrong dates, and we could talk about why." aria-label="回原文"></button>。

> 【背景】这里的「编排」（orchestration）指的是：一个人统筹协调多个 AI 智能体的分工。比如要给客户发邮件，编排者要确保「流失客户唤醒智能体」和「进站审核智能体」不要同时去骚扰同一个客户。

那么去哪找这种「AI 编排官」？Jason 给招聘者的忠告是：**今天，你大概率招不到这样的人，只能从内部提拔**。不要指望从传统销售里找，你要找的是懂数据、懂营销、对工具有热情、每天愿意坐在屏幕前看数据的「书呆子」<button class="pd-ts" data-t="54:21" data-who="Jason Lemkin" data-en="I think today, 95% of 100, you've got to promote someone internally. It's got to be a nerd, someone that likes marketing and sales and is quant. A lot of B2C people are frankly good at this stuff because in B2C, sales and marketing are kind of the same thing." aria-label="回原文"></button>。如果你能把自己团队里一个曾在 Replit 自己写过应用的人提拔起来做编排，你就能在 2026 年的竞争中遥遥领先。

搭建好团队和工具后，新的隐患也随之浮现。Jason 提出了一个常被忽视的预警：**客户的流程变更疲劳**。现在采购智能体顺风顺水，但到了明年，当一家企业已经被塞了五个需要人盯着调试的智能体后，他们可能会对你的新产品说「我真的受不了了，别再卖给我了」<button class="pd-ts" data-t="41:47" data-who="Jason Lemkin" data-en="And so just be aware, if you're a startup or even Salesforce or HubSpot, maybe close those deals in the next 12 months, because the window may close where people say, &quot;Listen, that's the coolest agent I've ever seen." aria-label="回原文"></button>。因此，对于初创公司来说，趁现在这扇窗还开着，必须赶紧把单子签下来。

理解了整个系统的运作逻辑和风险后，我们该如何把这些洞察转化为对个人职业和公司战略的具体行动？

## 本集带走

1. **亲自动手部署一个，别当旁观者**：如果你是 VP 或管理者，不要指望外包或丢给底下人。选一个痛点（客服或 SDR），挑一家提供 FDE 帮扶的头部供应商，花一个月亲自做数据导入（摄取）、训练、测试和纠错。做过一个，你就能成为就业市场上最抢手的人 <button class="pd-ts" data-t="23:48" data-who="Jason Lemkin" data-en="If someone's listening to this like, &quot;Oh man, my job is in trouble. What should I focus on?&quot; It's going to sound simple." aria-label="回原文"></button>。对于初级人员，不要抗拒公司引入 AI，成为团队里最会用智能体的人，你的产出能翻十倍 <button class="pd-ts" data-t="60:09" data-who="Jason Lemkin" data-en="The advice for the junior folks is to embrace it. Whatever tools your organization is using, become the best person at working with that agent and you'll automatically get more efficient." aria-label="回原文"></button>。
2. **「只会搞人际关系」不再是护城河**：如果你在科技销售岗，只会陪人聊天但不懂产品技术细节，你正在被淘汰。未来的高薪属于能一人管理 10 个智能体的超级个体，他们的年产值将是现在的十倍 <button class="pd-ts" data-t="69:33" data-who="Jason Lemkin" data-en="At the high end, it's cultural. We just don't want 200 reps running around Vercel or Replit that don't know what the product does. Just the company owner, three to five million per rep is a lot different than three to 500,000." aria-label="回原文"></button>。
3. **别自己造轮子，但要留心部署疲劳**：除非你是 Vercel，否则别自己建 GTM 智能体，去买。但作为初创公司创始人，你要明白客户对「业务流程变更」的忍受度是有上限的，现在趁热卖，未来窗口会因客户过载而关闭 <button class="pd-ts" data-t="41:31" data-who="Jason Lemkin" data-en="Salesforce, they just want to get their commission. It doesn't really matter what you pay for an app for a customer as long as it's fair. It's all the work to change the way you do your business." aria-label="回原文"></button>。

<div class="pd-sec">全部金句 <span>10 条(中英对照,已过机器闸门)</span></div>

> 我真的无法每年付给一个初级 SDR 15 万美元结果他们却辞职。  
> *I just can't pay a junior SDR $150,000 a year to quit.*  
> —— Jason Lemkin · [08:18] ^q1

> 基于邮件节奏的 SDR 明年将被 AI 取代 90%。  
> *The email-based cadence SDR will be 90% displaced by AI next year.*  
> —— Jason Lemkin · [19:49] ^q2

> AI 正在取代人们今天不想做的工作，并且它正在挤出中游和平庸的人。  
> *AI is replacing the jobs people don't want to do today, and it is displacing the mid-pack and the mediocre.*  
> —— Jason Lemkin · [13:50] ^q3

> 如果 Lenny 很棒，而另一个供应商更好但不会帮你，那就别做。  
> *if Lenny rocks and the other vendor is better and won't help you, don't do it.*  
> —— Jason Lemkin · [36:14] ^q4

> 做编排者或首席 AI 人员对于懒人来说不是一份好工作，因为智能体从不睡觉。  
> *Being the orchestrator or the chief AI person is not a good job for lazy people because the agents never sleep.*  
> —— Jason Lemkin · [40:55] ^q5

> 业务流程变更归根结底，这么多创始人搞错了这一点，99% 的销售人员，他们不在乎业务流程变更。  
> *Business process change at the end of the day, and so many founders get this wrong, and 99% of sales folks, they don't care about business process change.*  
> —— Jason Lemkin · [41:23] ^q6

> 拿你销售团队里最好的人，你拥有的最好的营销人员，拿他们的邮件文案并把它用作你的 AI 的模板。  
> *Take your best person on your sales team, your best marketer you have, take their email copy and use that as the template for your AI.*  
> —— Jason Lemkin · [42:40] ^q7

> 对于 AI GTM 来说「足够好」的门槛，并没有我们想象的那么高。  
> *the bar for good enough for AI GTM, it's not as high as we think.*  
> —— Jason Lemkin · [47:16] ^q8

> 我认为今天，在 100 分里，你有 95 分必须从内部提拔某人。  
> *I think today, 95% of 100, you've got to promote someone internally.*  
> —— Jason Lemkin · [54:20] ^q9

> 总的来说，我们将需要比以往更多的销售和 go-to-market 专业人士，因为赢家增长得太快了，即使他们效率更高，他们也比以往更需要人类。  
> *Net net, we're going to need more sales and go-to-market professionals than ever because the winners are growing so quickly that even if they're more efficient, they will need more human beings than ever.*  
> —— Jason Lemkin · [76:29] ^q10

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「增长与销售」挖下去**

- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织]] —— 同公司:Vercel · 同概念:推向市场 (go-to market)、智能体 (agent)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|Dan Shipper 的未来工作预测：别等 AI 末日，用 Codex 重塑一切]] —— 同概念:前置部署工程师 (Forward Deployed Engineer)、智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」]] —— 同公司:Replit · 同概念:智能体 (agent)
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|1500 亿美元的隐形 AI 公司创始人：恐惧源于无知，最好的工作是独自安静地完成]] —— 同概念:智能体 (agent)

</div>
</div>

*本集关键词:AI 销售 · GTM 自动化 · 智能体部署 · 销售职业前景 · AI 时代创业*

<script>
(function(){
  function move(){
    var side=document.querySelector('.right.sidebar'); if(!side) return;
    var box=null;
    var all=document.querySelectorAll('article blockquote[data-callout]');
    for(var i=0;i<all.length;i++){
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
  function adopt(){
    var acts=document.querySelector('.pd-top .pd-acts'); if(!acts) return;
    ['.search','.darkmode','.readermode'].forEach(function(sel){
      var el=document.querySelector('#quartz-body > .sidebar '+sel) || document.querySelector('.sidebar '+sel);
      if(el && el.parentElement!==acts) acts.appendChild(el);
    });
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
  function all(){ topbar(); move(); adopt(); graph(); }
  document.addEventListener('nav', all);
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

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
