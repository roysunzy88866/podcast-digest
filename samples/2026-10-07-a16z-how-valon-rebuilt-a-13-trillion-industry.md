---
title: "一切都是服务:从零重写 13 万亿的房贷老基建"
podcast: The a16z Show
date: 2026-10-07
source_url: undefined
duration: "40:19"
type: episode
cover: "#64748b"
description: "Valen 联合创始人 Linda Du 与 Andrew Wang 讲述如何把互联网诞生前设计的抵押贷款服务系统从零重写、把几十年法规变成代码,以及 AI 带来的新可能。"
host: "[[Linda Du]]"
cohosts: ["[[Angela Strange]]", "[[Andrew Wang]]"]
companies: ["[[Valen]]"]
concepts: ["[[抵押贷款服务]]", "[[智能体]]", "[[记录系统]]", "[[代管账户]]", "[[变革管理]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-07-a16z-how-valon-rebuilt-a-13-trillion-industry#post","headline":"一切都是服务:从零重写 13 万亿的房贷老基建","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-07-a16z-how-valon-rebuilt-a-13-trillion-industry","mainEntityOfPage":"https://talk.solomind.cc/2026-10-07-a16z-how-valon-rebuilt-a-13-trillion-industry","description":"Valen 联合创始人 Linda Du 与 Andrew Wang 讲述如何把互联网诞生前设计的抵押贷款服务系统从零重写、把几十年法规变成代码,以及 AI 带来的新可能。","datePublished":"2026-10-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Linda Du"},{"@type":"Person","name":"Angela Strange"},{"@type":"Person","name":"Andrew Wang"},{"@type":"Organization","name":"Valen"},{"@type":"Thing","name":"抵押贷款服务 (mortgage servicing)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"记录系统 (system of record)"},{"@type":"Thing","name":"代管账户 (escrow)"},{"@type":"Thing","name":"变革管理 (change management)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"一切都是服务:从零重写 13 万亿的房贷老基建","item":"https://talk.solomind.cc/2026-10-07-a16z-how-valon-rebuilt-a-13-trillion-industry"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>一切都是服务:从零重写 13 万亿的房贷老基建</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 一切都是服务:从零重写 13 万亿的房贷老基建

<div class="pd-byl"><b>Andrew Wang</b> · Valen 联合创始人 · 2026-10-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-07-a16z-how-valon-rebuilt-a-13-trillion-industry.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">抵押贷款是现存未被颠覆的行业中排名前三的。</div><div class="a">— Angela Strange <button class="pd-ts" data-t="00:00" data-who="Angela Strange" data-en="Mortgage is top three in terms of undisrupted industries that exist." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Linda Du]] · [[Angela Strange]] · [[Andrew Wang]]
>
> **公司** [[Valen]]
>
> **概念** [[抵押贷款服务]] · [[智能体]] · [[记录系统]] · [[代管账户]] · [[变革管理]]

[[抵押贷款服务|抵押贷款服务]](mortgage servicing,即房贷发放后长达几十年的收款、代管税费保险、催收、逾期处理等运营工作)是现存最未被颠覆的行业之一:这是 13 万亿美元的消费债务,主要运行在一家在位巨头的遗留系统上,而那套系统架构于 20 世纪 60 年代——比互联网还早 <button class="pd-ts" data-t="00:30" data-who="Linda Du" data-en="Not just with the way that servicing should be done generally, but customer specific. It's $13 trillion of consumer debt that basically runs on a single incumbent that built their legacy system before the internet was invented." aria-label="回原文"></button><button class="pd-ts" data-t="09:22" data-who="Andrew Wang" data-en="Being able to offer that right experience, really automated and really give comfort to the homeowners in their time of need, that is really important for a servicer and that ultimately builds the best customer relationship." aria-label="回原文"></button>。

聊这件事的人是 [[Valen|Valen]] 的两位联合创始人:[[Linda Du|Linda Du]] 和 [[Andrew Wang|Andrew Wang]],主持人是 a16z 普合伙人 [[Angela Strange|Angela Strange]]。

Valen 的选择极其激进:不是给旧系统做软件,而是自己先变成一家持牌房贷服务商,把整套基础设施从零写一遍,如今再把这套操作系统卖给整个行业。

Andrew 入行的起点有点意外:他完全没有金融背景,当初被抵押贷款吸引,是因为里面居然有大量随机微积分(用数学描述随机波动的分支)。

结果入职后发现,提前还款模型里的数学「全靠拍脑袋」,猜个数字就行。

真正让他看到机会的是对账:在 Soros 做投资时,他发现行业里海量资金、海量分录,账从来对不上,只好自己写对账系统。

用他自己的话总结:「数学变成了系统,系统变成了痛点,于是就有了今天的我们」<button class="pd-ts" data-t="02:24" data-who="Andrew Wang" data-en="And so my general interest in finance was actually just in math. And what people don't really know about mortgages, which is just like a very random esoteric fact, is that it's actually a place where there's a lot of stochastic calculus." aria-label="回原文"></button><button class="pd-ts" data-t="03:40" data-who="Andrew Wang" data-en="Maybe I would say it started off with math. Math became systems, systems became pain, and here we are today. Excellent." aria-label="回原文"></button>。

## 糟糕体验的根源在管道

按时还款的普通人感觉不到差别,但一旦生活出事,旧系统的缺陷就暴露无遗。

遗留系统只保存房贷当下的「快照」,不以足够的保真度记录完整历史——比如借款人去世后子女想接管贷款、要申报州税、要查之前的记录,系统直接告诉你:历史被切断了,你没有权限 <button class="pd-ts" data-t="05:58" data-who="Andrew Wang" data-en="So here's an example of this. One of the key problems with some of the legacy systems is that they don't really model and really capture all of the context associated with the life of the mortgage." aria-label="回原文"></button>。

再比如房贷中的 escrow([[代管账户|代管账户]],按月预留税费和保险、每年统一支付):如今保险费和税费暴涨,法规和投资者标准本允许把涨幅摊到 36 个月,但旧系统只会按一年硬算,于是任何变通都要走人工审批 <button class="pd-ts" data-t="08:06" data-who="Andrew Wang" data-en="Yeah, there's all sorts of variations of this, again. One of them is there is this concept of the escrow when it comes to mortgages. It basically contains both taxes and insurance that need to be paid over time." aria-label="回原文"></button>。

Linda 的判断很直接:你可以有全世界最好的客服团队和最有同理心的呼叫中心,但如果[[记录系统|记录系统]]本身有缺陷、算错了钱,不修基础设施就修不好房主的体验 <button class="pd-ts" data-t="09:58" data-who="Andrew Wang" data-en="It's like the problem will happen five years later when someone's trying to make their escrow payment and it compounds. And so that's the part where it's like you can have the world's best customer experience team and the most empathetic call center agent in the world." aria-label="回原文"></button>。

而现有软件老到什么程度?

它架构出来的时候,数据模型根本无法为今天的世界建模,问题不会当周爆发,而是五年后 someone 交代管款时以复利方式引爆 <button class="pd-ts" data-t="09:34" data-who="Andrew Wang" data-en="And I think it's hard for people to conceptualize how old the existing software is because you have to think about it like when these technology systems were architected, this was the 1960s." aria-label="回原文"></button>。

## 为什么选了最痛的一条路

起步时他们认真权衡过三条路:一、做软件卖给在位者——行不通,行业监管太重,没有服务商敢用全新系统,而且就算签下大客户,也只能按对方现有的做法定制,「十年后一觉醒来,你重建了一个遗留系统,只是带了个很漂亮的 UI」<button class="pd-ts" data-t="11:17" data-who="Andrew Wang" data-en="But really, option one, which is just building, you know, a traditional normal software company, it doesn't work for mortgage because it's so heavily regulated that no servicer is going to use a de novo system." aria-label="回原文"></button>;二、收购整合再注入技术——会被迫做出错误的平台设计决策,还有 IP 问题;三、自己办服务商、软件从零写起,软件随着业务从一笔贷款长到近百万笔一起演进 <button class="pd-ts" data-t="10:27" data-who="Andrew Wang" data-en="And the flip side of these technologically behind incumbent-driven large industries is they can be very hard to break into, right? And so, you know, we had three options." aria-label="回原文"></button>。

这条路最痛的部分是牌照:很多审批有先有鸡还是先有蛋的问题——比如纽约州要求你拿执照前先盈利。

他们从 only 需要州执照的 non-QM 贷款(一种不符合政府标准贷款条件的贷款类型)切入,而加州还要求你有房地产经纪资格,并证明五年以上横跨催收、客服、付款处理、逾期、止赎各环节的经验。

各种审批层层叠加,业内预计最少三到五年。

他们的「纪录」是:三年拿到纽约审批——然后发现自己始终没拿到在纽约开展业务的许可;申请被漏审一次,时钟就往回重置三到六个月,Andrew 甚至为此跑去监管机构的收发室,亲手把丢失的申请包裹找出来 <button class="pd-ts" data-t="13:25" data-who="Andrew Wang" data-en="For context, mortgage servicing and many of these licenses have pretty much chicken and egg problems. One of the key requirements is if they tell you, you actually need to be profitable before you get a license." aria-label="回原文"></button><button class="pd-ts" data-t="15:43" data-who="Andrew Wang" data-en="Because I'll give you the classic one, which, by the way, is a funny one. We actually got the approval for New York in a record time of, I want to say, three years." aria-label="回原文"></button>。

把法规变成代码,则是另一场苦役:联邦层面的 RESPA、TILA、FDCPA、GLBA、TCPA,外加 50 个州各自的房贷、催收、止赎、隐私、代管法规。

做法像「重构整个法律代码库」——很多州的法条相互衍生,你要抽象出一个能统一处理的框架。

COVID 期间 Andrew 每天读法规、做标注、画示意图,一天 18 小时,连续六个月,之后还有五六年测试验证。痛苦本身成了护城河 <button class="pd-ts" data-t="17:03" data-who="Andrew Wang" data-en="But what we ended up doing was reading every single regulation. So there's a whole bunch of federal regulations. There's, you know, RESPA, there's TILA, there's FDCPA, there's GLBA, there's TCPA." aria-label="回原文"></button><button class="pd-ts" data-t="17:56" data-who="Andrew Wang" data-en="But what really worked for us, quite honestly, was the fact that COVID happened. And when COVID happened, I spent 18 hours a day For six months straight, just every day sitting there reading regulation and like annotating and basically coming up with the schematics." aria-label="回原文"></button>。

## 先做服务商,再卖软件

自己运营服务商解决了企业销售最难的两件事:安全性(这套技术六七年里通过了每个州的审查和 Fannie Mae、Freddie 等所有审计)和紧迫性。

服务商业务的单位经济性就是产品:效率就是利润。

结果是效率约为同业三倍,把一个盈亏平衡的生意变成 70%-80% 营业利润率的生意,再让利给客户——「当你降价时,你就能让市场屈服」,持有房贷资产的资产管理公司都是经济动物 <button class="pd-ts" data-t="19:26" data-who="Andrew Wang" data-en="And that just requires the technology, you know, being good. From a software perspective, we think about it internally as it's really, you always have to balance safety and urgency." aria-label="回原文"></button><button class="pd-ts" data-t="20:43" data-who="Andrew Wang" data-en="So we are about three times as efficient. And so you take this breakeven business and you turn it into sort of a 70%, 80% operating margin business. And that margin is what we used initially to create that urgency." aria-label="回原文"></button>。

第一个大客户签约后,另外五个大块头主动打电话来问「你们卖软件是认真的吗」,飞轮就转起来了。

而在规模约 2000 亿美元未偿本金(UPB)时,他们按 A 轮融资演示文稿里那 60 页的「接管计划」,把 Valen Mortgage 卖给了 Carrington,全面转向软件。

理由是:留着自己做服务商,技术和超额收益都只归自己,「你其实什么都没有改变,你没有修复核心基础设施的问题」<button class="pd-ts" data-t="21:48" data-who="Linda Du" data-en="Like, you guys, like, you know, are selling this thing and say, this is always what we've been meaning to do, but we actually share our Series A deck with our... Well, to be fair, you had an incredibly detailed Series A deck." aria-label="回原文"></button><button class="pd-ts" data-t="22:24" data-who="Linda Du" data-en="But for us, it always came back to, every conversation ended with, we actually want to change the industry. And the thing is, is that if you keep it as a servicer, you're keeping all of the technology and the alpha for yourself." aria-label="回原文"></button>。

市场验证了判断:作为软件公司正式推向市场六个月内,签下超过 2 亿美元的合同;最近 Rhythm 确认转移 400 万笔贷款给 Valen——几乎是市场的 10%,史无前例的服务权转移。

Linda 强调,不是他们自己宣布达到产品市场契合,「是市场判定我们达到了」<button class="pd-ts" data-t="34:11" data-who="Linda Du" data-en="I would say actually in some ways, Andrew and I didn't decide that we hit product market fit. The market decided that we hit product market fit. And so just to give you a sense of just sort of the pent up demand in the industry, I think within six months of us officially going to market as a software company, we signed over $200 million of deals." aria-label="回原文"></button><button class="pd-ts" data-t="33:37" data-who="Angela Strange" data-en="So you built the servicer, recently announced, sold the servicer to sell the software platform. And then just recently, Rhythm confirmed that they're going to transfer 4 million loans over to Valen, which I think is the largest servicing transfer." aria-label="回原文"></button>。

## AI 之后:指挥智能体军团

公司创立时生成式 AI 还没跑通,如今这套干净的数据本体成了 AI 的地基。

以前只能自动化明确确定性的小片段;现在几十个[[智能体|智能体]]可以做代管账分析等任何人手任务,连长尾的复杂场景也能编排。

Andrew 举了个例子:灾难发生时,服务商要给受影响房主逐一致电、确认还款能力、提供救助方案——传统做法是打印电子表格、把贷款清单分给几组人「自己搞定」;现在可以在产品里直接编排一组智能体去打电话、跑工作流,还能先模拟试运行 <button class="pd-ts" data-t="23:29" data-who="Andrew Wang" data-en="What is possible today that wouldn't have been in your Series A pitch deck? How beautiful of a problem setup mortgage servicing is for what's about to happen, both with AI, but just like overall enterprise and infrastructure in society, which is to say, what is possible today is you can have these extraordinarily complex cases and you can actually research and basically provide the right set of information to the operators so that they're more and more in a world where they're effectively operating little mini armies of agents." aria-label="回原文"></button><button class="pd-ts" data-t="24:40" data-who="Andrew Wang" data-en="The only way to do that today as a normal servicer is you basically print out a spreadsheet and you hand a list of loans to one group of people and hand another list of loans to another people and you say, I want you to do A, I want you to do B, and I want you to go figure it out." aria-label="回原文"></button>。

更重要的是「冠军挑战者」式实验:拿 100 笔贷款试不同策略、不同通知,看哪种结果更好——这在依赖培训人类客服的时代根本不可能。

这把行业从千篇一律的同质化,变成每家服务商都能按自己的方式处理具体场景 <button class="pd-ts" data-t="26:30" data-who="Andrew Wang" data-en="You know, automate a much, much higher percentage of tasks, the long tail, the really complex scenarios. But really beyond that, it's that you can orchestrate a very wide variety of scenarios for your agents to handle." aria-label="回原文"></button>。

这套能力也指向更大的版图。Linda 的核心论断:「一切都是服务」——它是支撑一切涉及资金流动、监管和运营的底层关键基础设施。

往旁边一步是商业地产(服务商能拿到租户的财务数据,可以像 Toast 用平台做小企业贷那样切入);再宽一步是医疗:炙手可热的收入周期管理公司,「不过就是医院的贷款服务」,顺手能拿到全部电子病历。

他们先选房贷,因为它最粘、最难、最复杂——先啃最硬的,其余的「从这里开始就变容易了」<button class="pd-ts" data-t="30:46" data-who="Linda Du" data-en="Maybe I'll start off with a little known fact, which is servicing is like the nexus of all these different highly regulated enterprises. The fun fact I always like to go through with people is that people think servicing must be residential or maybe loan servicing." aria-label="回原文"></button><button class="pd-ts" data-t="31:39" data-who="Linda Du" data-en="But if you take another step and you say, okay, let me think about this even more broadly, then you even have things like, You know healthcare where there's revenue cycle management companies people get very excited about those type of companies and it turns out revenue cycle management is just servicing for hospitals and their claims and you know they're handling their patients and the data that you get from that is you know effectively all electronic medical records." aria-label="回原文"></button><button class="pd-ts" data-t="33:15" data-who="Linda Du" data-en="It's the underlying critical infrastructure that supports basically anything that has money movements, some sort of regulation, and then an operational component." aria-label="回原文"></button>。

给企业客户部署 AI 的最大教训来自[[变革管理|变革管理]]。Andrew 说:「六年前我会告诉你这是个技术问题。

我今天知道,这是一个变革管理问题」——面对成千上万员工、每层各有目标函数的组织,「变革在大规模下真的非常难」,但这正是 AI 时代未来十年最大的价值驱动因素。

能在这种角色里胜出的人:高主观能动性、高模糊容忍度、对客户高同理心,既是一流的问题解决者,又擅长与人打交道 <button class="pd-ts" data-t="38:12" data-who="Andrew Wang" data-en="Six years ago, I would have told you, you know, this is a technology problem. What I know today is that this is a change management problem. And so what we've spent the last six to 12 months building is really that change management muscle of just how do you navigate organizations?" aria-label="回原文"></button><button class="pd-ts" data-t="38:47" data-who="Andrew Wang" data-en="Yeah. I would say high agency, high ambiguity, high empathy for the customer. And then the ability to kind of really think from different points of view on what the objective function is and then figure out what is the global thing that everyone's trying to do, bridge that, and then actually come up with a solution." aria-label="回原文"></button>。

至于团队,Linda 说加入 Valen 的人本可以去 OpenAI、Anthropic——他们意识到底层模型的问题自会有人解决,而他们想亲手解决这个真正重要的问题;管理团队约 75%-80% 是待了五年以上的人 <button class="pd-ts" data-t="36:04" data-who="Linda Du" data-en="Because, and I've had this conversation with so many of the people who've both joined, and I've asked people who, prior to us, actually, I forget why people were joining." aria-label="回原文"></button><button class="pd-ts" data-t="37:13" data-who="Linda Du" data-en="Really, when we look at the way that our company has been built and formed, I mean... I want to say like their entire, probably 75, 80% of our like management team is filled with people who've been here for five plus years." aria-label="回原文"></button>。

## 本集带走

- **先变从业者,再卖工具**:监管重到没人敢用新系统时,自己做持牌服务商,让技术在真实运营、真实审计里被验证,再用效率优势(同业三倍、70%-80% 利润率)降价逼市场转向。
- **法规可以当代码库重构**:几十年的联邦+50 州法规相互衍生,逐条读完、抽象出统一框架写进架构,痛苦本身构成护城河。
- **记录系统决定体验上限**:只存快照不存历史、数据模型错误,客服再有同理心也救不回被算错钱的房主。
- **AI 的增量在编排与实验**:从自动化确定性片段,到智能体打电话跑工作流、先模拟再上线、冠军挑战者式对比策略。
- **企业部署 AI 是变革管理问题**,不是技术问题;关键人才是高能动性 + 高同理心 + 双重能力强的问题解决者。

<div class="pd-sec pd-sec-q">全部金句 <span>13 条</span></div>

> <span class="qz">抵押贷款是现存未被颠覆的行业中排名前三的。</span>  
> *Mortgage is top three in terms of undisrupted industries that exist.*  
> <span class="qm">—— Angela Strange · [00:00]</span> ^q1

> <span class="qz">这是 13 万亿美元的消费者债务,基本上运行在一家单一的现有巨头身上,而这家公司的遗留系统是在互联网发明之前构建的。</span>  
> *It's $13 trillion of consumer debt that basically runs on a single incumbent that built their legacy system before the internet was invented.*  
> <span class="qm">—— Linda Du · [00:30]</span> ^q2

> <span class="qz">数学变成了系统,系统变成了痛点,于是就有了今天的我们。</span>  
> *Math became systems, systems became pain, and here we are today.*  
> <span class="qm">—— Andrew Wang · [03:40]</span> ^q3

> <span class="qz">这是一个甚至还没赶上 2000 年代技术的行业。</span>  
> *This is an industry that hasn't even caught up to 2000s technology yet.*  
> <span class="qm">—— Linda Du · [04:23]</span> ^q4

> <span class="qz">我们总是告诉团队的是,未来十年人们被招聘所看重的技能,是应用 AI 的能力。</span>  
> *And what we always tell the team is that the skill set that people will be hiring for in the next decade is the ability to apply AI.*  
> <span class="qm">—— Linda Du · [04:49]</span> ^q5

> <span class="qz">但如果从根本上讲,因为记录系统有缺陷,你被收取了错误的金额,那么不修复基础设施你就无法修复那个房主的体验。</span>  
> *But if fundamentally you were charged the wrong amount of money because the system of record was flawed, then you can't fix that homeowner experience without fixing the infrastructure.*  
> <span class="qm">—— Linda Du · [10:06]</span> ^q6

> <span class="qz">所以你就要冒这样的风险:十年后一觉醒来,你重建了一个遗留系统,只是带了一个非常漂亮的 UI。</span>  
> *And so you just run the risk that you wake up 10 years from now and you rebuild the legacy system. With like a really pretty UI.*  
> <span class="qm">—— Linda Du · [11:30]</span> ^q7

> <span class="qz">所以归根结底,当你降价时,你就能让市场屈服。</span>  
> *And so at the end of the day, it's like when you lower price, it's like you can get the market to capitulate.*  
> <span class="qm">—— Linda Du · [19:18]</span> ^q8

> <span class="qz">不,但这就像 Jensen 那句话:你的竞争对手不是 AI,而是比你更快用上 AI 的竞争对手。</span>  
> *No, but it's like Jensen's quote of it's not like AI that's your competition, it's your competition using AI faster.*  
> <span class="qm">—— Angela Strange · [20:22]</span> ^q9

> <span class="qz">于是你把这个盈亏平衡的生意,变成一个大约 70%、80% 营业利润率的生意。</span>  
> *And so you take this breakeven business and you turn it into sort of a 70%, 80% operating margin business.*  
> <span class="qm">—— Linda Du · [20:43]</span> ^q10

> <span class="qz">它真的把这个世界从一个高度同质化的世界,变成了一个专业化得多、真正有风味驱动的世界。</span>  
> *It really turns the world from one that is really commoditized to one that is much more specialized and really flavor driven.*  
> <span class="qm">—— Andrew Wang · [25:31]</span> ^q11

> <span class="qz">我和 Andrew 并不是我们自己判定我们达到了产品市场契合。是市场判定我们达到了产品市场契合。</span>  
> *Andrew and I didn't decide that we hit product market fit. The market decided that we hit product market fit.*  
> <span class="qm">—— Linda Du · [34:07]</span> ^q12

> <span class="qz">六年前,我会告诉你,这是一个技术问题。我今天知道的是,这是一个变革管理问题。</span>  
> *Six years ago, I would have told you, you know, this is a technology problem. What I know today is that this is a change management problem.*  
> <span class="qm">—— Linda Du · [38:08]</span> ^q13

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-26-talks-building-gtm-ai-agents-lessons-from-depl|Snowflake 内部销售 AI 助手复盘：一百万个问题换来的教训]]<span class="pd-rz">同概念:变革管理 (change management)、智能体 (agent)</span>
- [[2026-09-15-trainingdata-box-s-aaron-levie-on-reinventing-yoursel|Box 创始人 Erin Levy：套壳的逆袭与应用层的万亿机会]]<span class="pd-rz">同概念:智能体 (agent)、记录系统 (system of record)</span>
- [[2026-09-16-a16z-the-ai-native-crm-pmervpt|从 2500 万用户产品到零重启：Lightfield 如何用 AI 重构 CRM]]<span class="pd-rz">同概念:智能体 (agent)、记录系统 (system of record)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-uncapped-uncapped-54--sam-blond-from-monaco-e3mlt|三次从零到大规模：Brex 前销售掌门 Sam 的增长心法与 AI 原生销售哲学]]<span class="pd-rz">同概念:智能体 (agent)、记录系统 (system of record)</span>
- [[2026-08-20-twentyvc-20vc-spacex-buys-cursor-for-60bn-stripe|SpaceX 600亿买Cursor：AI并购的疯狂逻辑]]<span class="pd-rz">同概念:智能体 (agent)、记录系统 (system of record)</span>
- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同公司:OpenAI · 同概念:智能体 (agent)</span>

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
