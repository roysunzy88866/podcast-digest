---
title: Replit 的至暗时刻与三十人豪赌：冲刺十亿美元 ARR
podcast: 精选演讲
date: 2026-07-09
source_url: undefined
duration: "45:32"
type: episode
cover: "#64748b"
description: "Replit 工程负责人复盘如何靠 30 人破釜沉舟押注 Agent、改写定价规则,把软件创造权交给所有人。"
host: "[[Michele Catasta]]"
companies: ["[[Replit]]"]
concepts: ["[[智能体]]", "[[Replit Agent]]", "[[vibe coding]]", "[[基于用量的计费]]", "[[部署]]", "[[人物角色]]", "[[一人独角兽公司]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Replit 的至暗时刻与三十人豪赌：冲刺十亿美元 ARR</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# Replit 的至暗时刻与三十人豪赌：冲刺十亿美元 ARR

<div class="pd-byl"><b>Michele Catasta</b> · Replit 工程负责人</div>

<div class="pd-mt">2026-07-09 · 精选演讲 · 45:32</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-09-talks-a-conversation-with-replit-s-president-a.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">在发布前 36 小时,实际上没有任何东西能正常工作。</div><div class="a">Michele Catasta · 08:37</div></div>

> [!info] 关联
> **人物** [[Michele Catasta]]
>
> **公司** [[Replit]]
>
> **概念** [[智能体]] · [[Replit Agent]] · [[vibe coding]] · [[基于用量的计费]] · [[部署]] · [[人物角色]] · [[一人独角兽公司]]

<div class="pd-tldr"><b>一句话</b>Replit 工程负责人复盘如何靠 30 人破釜沉舟押注 Agent、改写定价规则,把软件创造权交给所有人。</div>

一家有数千万用户、却差点活不下去的公司,把全公司八成以上的技术人力压在一个没人知道能不能成的东西上——发布前 36 小时,产品连跑都跑不起来。说这话的人是 Michele,他是 [[Replit|Replit]] 的工程与产品负责人,正带着公司冲向 10 亿美元的年经常收入(ARR,衡量订阅业务规模的常用指标)。<button class="pd-ts" data-t="04:11" data-who="Michele" data-en="How many people were working on Replit Agent? How did you guys make that happen? I would love to tell you that it was just one of the many bets." aria-label="回原文"></button>

Michele 曾在斯坦福做语言模型写代码的研究,2021 年他带着一份演示找上门,和 Replit 创始人 Amjad 一拍即合,从零组建 AI 团队。这一集里他讲了三件事:[[Replit Agent|Replit Agent]](Replit 的核心 AI 编程助手)是怎么在最绝望的时候被逼出来的,以及为什么一次「丢脸也要发」的低调发布彻底改变了公司命运;面对完全不同的几千万用户,怎么定产品取舍、怎么在 AI 时代重新设计定价模型;以及当 AI 能写代码,人和软件会变成什么样。结尾他还聊了「[[一人独角兽公司|一人独角兽公司]]」——一个人靠编排一堆[[智能体|智能体]],做到十亿美元估值的生意到底现不现实。

先说这场豪赌的背景。直到 2023 年,Replit 还是一个云开发环境,帮开发者在浏览器里写代码。它在教育市场极受欢迎,学校遍布全球都在用,但很难变现——支撑不起公司的估值和增长。Michele 坦言,再找不到强有力的产品市场契合,公司就快撑不住了。<button class="pd-ts" data-t="04:11" data-who="Michele" data-en="How many people were working on Replit Agent? How did you guys make that happen? I would love to tell you that it was just one of the many bets." aria-label="回原文"></button> Replit Agent 既切中「赋能下一个十亿软件创作者」的使命,也是生死存亡的必需。他在公司内部拉了一支小团队,目标非常明确:给非开发者做东西,做最难的技术问题。到了发布前最后两个月,公司 80% 以上的人力都扑在这个项目上,「其他职能都被我们几个兼职顶着」。当时全公司技术团队大约 30 人,处于最精简状态。<button class="pd-ts" data-t="05:24" data-who="Michele" data-en="Let's build something for non-developers, because it's going to be highly differentiated, and it's a much harder technical problem, to be honest. And I think the last two months before launching, more than half of the company was working on RapidAgent full-time." aria-label="回原文"></button>

这 30 人迎来的是一段最黑暗的时期。2024 年初,Replit 试过把原来的产品卖给企业,碰了壁:开发者太爱自己的工具,不愿全部抛弃。公司搬出旧金山、经历了裁员(销售和营销团队与新产品不匹配),然后全员闭关半年——Michele 在所有人的日历上砸下了一个日期:「这是发布的日子」。<button class="pd-ts" data-t="06:07" data-who="Michele" data-en="What did that feel like coming into work every day? So early 2024, we attempted to sell the product to the enterprise, the previous one, not Rapid Agent. And we found a lot of interest in terms of the philosophy of our product." aria-label="回原文"></button>

发布前 36 小时,灾难发生了。Michele 组织全公司做内部测试(即团队自己当首批用户体验产品),「实际上什么都不能用」。前一天还跑得动的原型,撞上了一组完全找不到原因的 Bug(程序错误)。他把没参与项目的非技术员工拉来试用,体验糟糕到他差点和 Amjad 决定取消发布。核心团队再熬一个通宵,16 小时后重测,产品竟然能用了——从不写代码的员工第一次靠输入自然语言,看见一个应用在眼前生成出来。第二天早上,Replit Agent 上线。<button class="pd-ts" data-t="08:24" data-who="Michele" data-en="What's going through your head? I'll have to give you all the shameful details about what happened in the couple of days before the launch. I planned for two different dogfooding sessions with the entire company." aria-label="回原文"></button>

回看为什么 Replit 能抢在所有人前面,Michele 的答案是:脱掉了研究员的「枷锁」。他能体会 OpenAI、Anthropic 这些大厂研究员的心态——对模型有多好、产品体验有多精致有预设的期待。而他决定:从零造一种新体验,「即使有些让我感到丢脸,发出来也没关系」,先看用户的反应。发布前的每一天他都在恐慌对手抢先,「如果我们不是第一个进市场,公司就不会有今天」。<button class="pd-ts" data-t="11:39" data-who="Michele" data-en="And it was literally like a mandate from me internally to be the first on the market. Every single day before launch, I was panicking that someone else wouldn't have done it." aria-label="回原文"></button>

这套方法论——先发、看反馈、随时推翻重来——延续到了今天的工程和产品团队。Michele 说,别对做出来的东西有感情依恋,这是他和 Amjad 共同的哲学,现在渗透了全公司:失败的项目可以接受,「我不需要再提醒大家了」。<button class="pd-ts" data-t="15:33" data-who="Michele" data-en="Everyone has seen what made us successful. I think at this point it permeates the entire company. I don't even have to remind it anymore." aria-label="回原文"></button> 一个被纠偏的典型假设是「完全自主」:Agent 3 代能连续跑 200 分钟,但「生命中的这三个半小时你干嘛?」用户需要反馈和互动。4 代改回来,参与度反而更高了。<button class="pd-ts" data-t="13:22" data-who="Michele" data-en="And I wouldn't call it a wrong assumption per se, but we thought most of our users want to go from point A to point B with just a single prompt, and they just care about the agent doing the entire work themselves." aria-label="回原文"></button>

不产生感情依恋,好处是敢自我推翻;代价是面对用户反馈需要极厚的脸皮。Michele 自陈现在服务的是 5000 万用户,其中 50 万是专业开发者,中位数用户是那种 vibe coder(凭直觉、不写传统代码的业余编程者,全篇沿用此译法),还要兼顾企业客户。「在任何其他公司,这种范围都是产品破坏。」<button class="pd-ts" data-t="17:32" data-who="Michele" data-en="I tend to be more of a fan of innovation, as you can imagine. You have kind of an impossible product job, which is that you're building a product for now 50 million users." aria-label="回原文"></button> 他长出脸皮的办法是理解用户情绪的快速翻转——用户几小时内就能从「这产品变垃圾了」骂到「我爱死它了」。他把这看作做面向人类产品的福分。

这种产品哲学落到具体取舍上,是一个有意思的原则:拒绝谈「[[人物角色|人物角色]]」(即产品设计中虚构的典型用户画像)。Michele 明确说,他不想在开会时听到「为产品经理优化」或「为设计师优化」,因为每一个知识工作者都有创造软件的需求。Replit 的做法是直接找高级用户和新采用者做开放式访谈(问他们为什么爱、为什么走),把反馈归拢成具体的名字和痛点,然后做极简的产品表面去满足所有人。「一个好产品在一个庞大的用户群体中都是好的。」<button class="pd-ts" data-t="22:31" data-who="Michele" data-en="Like a good product is good across a very large user base in our case. A good product is good across a large user base. I love that." aria-label="回原文"></button>

对内用这套哲学,对外的销售和定价也同样反传统。Replit 刚发布 Agent 时只有一个销售代表,后来加到两个。今天招的销售绝大多数没干过销售,而是真正爱产品、亲手用过、甚至用 Replit 做出过有用东西的人。「没有比被产品积极影响过的人更适合告诉你为什么要买」,这种在讲故事和技术细节之间的平衡,成了他们的王牌。Michele 说,「销售的优点就是绝对的精英主义,行不行用数字说话」。<button class="pd-ts" data-t="23:39" data-who="Michele" data-en="And there's no better person to tell you why than someone who has actually been impacted positively by it. So those are our best sales reps. And I think we're going to keep using this philosophy because..." aria-label="回原文"></button>

定价是 AI 时代每家公司的难题。Replit 有标准的 SaaS(软件即服务)层级——约 20 美元的核心席位、功能更多的专业席位,再到企业版。但这只是一部分。Michele 坚信:智能体本质上必须按使用量收费,与消耗的计算量或 token(语言模型处理的最小文本单元)成比例。<button class="pd-ts" data-t="24:57" data-who="Michele" data-en="Agents fundamentally have to be charged by usage. So by something proportional to the amount of compute they are using, or in the AI jargon, the amount of tokens that they are burning." aria-label="回原文"></button> Replit 早早做了这种[[基于用量的计费|基于用量的计费]],成了开拓者,刚改价时社区反弹很大,「但现在你环顾行业,大家都在做一样的事」。原因很硬:无法预测一个智能体跑一个具体任务要多久,固定定价或纯订阅无法规模化。

如果有一根魔杖,Michele 想要的是「基于结果的定价」。在 Replit 上能完成的任务种类太杂,很难列一张结果费率表,这暂时是一个研究项目。为了减少用量计费带来的「不确定性感知」,Replit 设了三种模式作为护栏:light(轻量,只提核心请求、不让 Agent 跑长)、economy(经济)和 power(强力,丢一份长 PRD「产品需求文档」进去,Agent 会一口气跑几小时)。Michele 指出,用户预期与智能体实际成果之间的对齐,是整个 AI 领域今天最难的题之一。<button class="pd-ts" data-t="27:44" data-who="Michele" data-en="But if that's one of your first experiences in product, of course, it can be confusing why you spend so much money and why the agent did maybe more than you ever expected." aria-label="回原文"></button>

说完了 Replit 自己怎么活下来、怎么赚钱,接下来是它怎么帮用户赚钱。去年第四季度,Replit 上线了 Stripe(一家支付处理服务商)集成,让用户能直接在 Replit 做出来的应用里收钱。这个功能增速惊人,Michele 说这些不断上升的数字让他确认了一生的热情:Replit 要成为整个公司生态的推动者。在他和 Amjad 的愿景里,AI 编排智能体已经强到足以支撑「一人独角兽」——一个人靠指挥一堆 AI,做出估值十亿美元的公司。Michele 承认逻辑上竞争会逼着公司雇更多人,但它很可能停在 2.5 亿美元 ARR——「知道你凭一个产品愿景、用最少资源也能做到这件事,依然很让人激动」。<button class="pd-ts" data-t="30:34" data-who="Michele" data-en="Yeah, so it's going to happen. And of course, there will be maybe hiring more people, and maybe it's going to stop at, say, 250 million ARR instead of 1 billion." aria-label="回原文"></button>

如果软件和编码变得丰富,瓶颈在哪?Michele 认为是真正好的商业点子。测试点子前所未有地容易,但翻看失败的长尾,大多败因并不意外:扎进太小的利基、攻击一个不存在的痛点。所以试错成本降低,「好的商业点子的平均价值会被拉低;但如果你挖到金子,你到达那里的速度会比人生中任何时候都快」。<button class="pd-ts" data-t="32:12" data-who="Michele" data-en="So by far, that is always going to be the hardest question that you're going to be asking yourself. And the fact that way more ideas can be tested, on one hand, we'll" aria-label="回原文"></button>

智能体能帮人判断点子好坏吗?Michele 认为作为一级近似完全可以——尤其是涉及数据、能跑营销分析、做用户研究的业务。但「人类的品味」仍会发挥作用:他和 Amjad 有一个登月项目,设想让智能体每天从零生成一个点子,交给一个在跑的 MVP(最小可行产品)去发邮件、投广告、看增长,进而判断值不值得做。注册一家 LLC(一种公司形式)用 Stripe Atlas(Stripe 的公司注册服务)都能自动化,但「在哪里下注」仍要靠人类,因为产品终究要卖给人类,而人类彼此的理解比机器强。<button class="pd-ts" data-t="33:44" data-who="Michele" data-en="But one of the moonshot projects that we have at Rapid that Amjad and I talk about all the time is can we go from a prompt to an agent that basically on every single day tries to craft a business idea zero to one and then puts it in front of the MVP that is already running, is already looking for customers, is already like shooting emails and..." aria-label="回原文"></button>

聊完生意和未来,Michele 顺带提了 Replit 的登月项目背后那张宣言——他加入两周后写的内部文件,精准预言了 2024 年发布的 v1。他在宣言里主张:用户界面存在了几十年,只是因为还没找到让人和机器更好交互的方式。直到几个月前,智能体的主观能动性强到足以颠覆这种交互——你对着手机口述,提示词进智能体,后台跑活,吐出结果。Replit 的未来不只是做应用,而是让所有人用同样的易用性造出强大的智能体。<button class="pd-ts" data-t="34:24" data-who="Michele" data-en="And I love to believe that we understand each other much better than machines do. So what was in this manifesto that you wrote where you sort of wrote out Replit Agent v0 or v1 and what it looks like now?" aria-label="回原文"></button>

这种对未来的判断需要极高强度的执行力。Michele 招人的诀窍是「看模式匹配」:他喜欢找前任创始人,现在工程团队里超过 40% 的人创过业,他们足够疯狂、有大量的主观能动性和主人翁感,「成功与否不重要,那种特质和强度就在那里」。其次他要人在面试里深入讲一个他们在乎的技术项目——做了什么艰难选择、怎么和同事交锋,「我宁看这个,也不要看他们今天的技术有多好」。原因之二:他从第一天起就给每位个人贡献者极大的范围和能动性,受不了这层责任的人进来会被压垮。<button class="pd-ts" data-t="38:33" data-who="Michele" data-en="So I only partially rely on the technical interviews, but also because I want to see exactly that behavior once they come and wrap it. We give an incredible amount of agency and scope to every single IC from day one." aria-label="回原文"></button>

这种强度的回报是指数级的。Michele 确认公司 ARR 在快速增长——从早期水平一路飙升,目标是尽快达到极高的里程碑;他曾说「我已经告诉公司,如果拖到很晚才达到而不是更早,我会失望」。在指数级增长下,他最痴迷的指标是参与度——周活跃、日活跃;但 Replit 独有一个关键指标:[[部署|部署]]。当用户愿意为构建的东西花更多钱把它发布上网时,「点赞、点踩、反馈都有价值,但没有什么比钱更能说明问题」。<button class="pd-ts" data-t="41:01" data-who="Michele" data-en="that are willing to spend more money to actually publish it. Thumbs up, thumbs down, feedback, everything is valuable, but nothing speaks as loud as money. If you're willing to invest more of your money because you're proud of something that you built, then I know that we actually made something right." aria-label="回原文"></button> 他挖 Bug 时也会优先看那些最终跑通到部署的智能体轨迹,因为那才是用户认可的「有价值的工作单元」。

最能证明 Replit 威力的是他们怎么用它跑自己。Michele 招了一支极小的全职 vibe coder 团队,带头人嵌入公司每个团队花几周了解需求,然后回工位用 Replit 直接造出能产生实质影响的内部工具。客服团队的标准工单系统上面架了一个未来感十足的仪表盘,看情绪趋势、响应率、各层客户表现;HR 团队的工具有全公司的内网索引、组织架构、工位图。「你真的可以用这些工具经营一家公司,我们就是这么干的。」<button class="pd-ts" data-t="43:03" data-who="Michele" data-en="You can run a company with these tools, like literally, and we do it. You know, we believe so much in it that first we build them and then realize we have to sell this to enterprises." aria-label="回原文"></button> Replit 自己买的外部软件极少,Michele 也不认同 SaaS 末日论,但他看穿了大供应商的价值多半不在代码里,而是多年沉淀的业务流程和记录系统;长尾小供应商那部分,他们全自己造。连设计师现在 80-90% 的时间都在「用 Replit 构建 Replit」,改设计当场出样、当场决策,产品迭代周期掉了一个数量级。「软件又变得好玩了。」<button class="pd-ts" data-t="45:12" data-who="Michele" data-en="They write their prompts and we see the interface changing and then we make decisions on the spot. The cycle that it takes to make product improvements probably went down by a whole lot of magnitude easily." aria-label="回原文"></button>

## 本集带走

最后收个尾,这一集值得带走的是几条。第一,当你背水一战,别想着保底——把全公司八成技术人力压上、设一个死日期、闭关半年,是绝望逼出了最强专注和最高产出。第二,要抢在所有人前面,就得舍得脱掉研究员的体面枷锁,把哪怕让你丢脸的东西丢出去看反应;别对做出来的东西有感情依恋,这是不断重塑的底座。第三,做面向几千万不同用户的产品,别为「人物角色」优化,去抠那些每个知识工作者都绕不开的极简原语。第四,AI 时代的定价没法靠固定订阅,智能体本质上得按消耗算;但给用户三种模式护栏(light、economy、power)能在「非确定性的感知」上找到平衡。第五,让用户愿意掏更多钱去部署,比任何点赞反馈都更值钱——这是 Replit 最痴迷的指标。最后,真要奔向那个愿景,你的团队得是前任创始人或对在乎的项目死磕过的人,因为从第一天起你就要给他们极大的能动性,而只有受得了那种重量的人,才能在指数级增长里扛得住。

<div class="pd-sec">全部金句 <span>7 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">在发布前 36 小时,实际上没有任何东西能正常工作。</span>  
> *36 hours before launch, literally nothing was working.*  
> <span class="qm">—— Michele Catasta · [08:37]</span> ^q1

> <span class="qz">我当时差点就要决定和 Amjad 不发布了。</span>  
> *I was this close to deciding with Amjad not to launch.*  
> <span class="qm">—— Michele Catasta · [09:13]</span> ^q2

> <span class="qz">智能体本质上必须按使用量收费。</span>  
> *Agents fundamentally have to be charged by usage.*  
> <span class="qm">—— Michele Catasta · [24:54]</span> ^q3

> <span class="qz">用户期望与智能体完成的事情之间的一致性,不仅是我们要,也是整个领域今天面临的最难的 AI 问题之一。</span>  
> *The alignment between user expectations and what the agent accomplishes is one of the hardest AI problems that not only us, but the entire field faces today.*  
> <span class="qm">—— Michele Catasta · [27:54]</span> ^q4

> <span class="qz">另一方面,如果你挖到了金子,你到达那里的速度将比你一生中任何时候都要快得多。</span>  
> *On the other hand, if you strike gold, you're going to get there much faster than you ever did in your life.*  
> <span class="qm">—— Michele Catasta · [32:21]</span> ^q5

> <span class="qz">点赞,点踩,反馈,一切都有价值,但没有什么比金钱更能说明问题。</span>  
> *Thumbs up, thumbs down, feedback, everything is valuable, but nothing speaks as loud as money.*  
> <span class="qm">—— Michele Catasta · [41:01]</span> ^q6

> <span class="qz">你可以用这些工具经营一家公司,真的,而且我们就是这么做的。</span>  
> *You can run a company with these tools, like literally, and we do it.*  
> <span class="qm">—— Michele Catasta · [43:00]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|用 20 个 AI 智能体换掉 8 人销售团队：SaaStr 创始人的前沿实战]] —— 同公司:Replit · 同概念:智能体 (agent)
- [[2026-07-09-talks-the-golden-age-of-ai-engineering-alexand|OpenAI 开发者日：从结对编程到指挥智能体大军]] —— 同公司:OpenAI · 同概念:智能体 (agent)
- [[2026-07-13-lennys-this-solo-builder-runs-247-local|GPT 5.6 测评：我为什么抛弃 Fable，把 Soul 当主力]] —— 同公司:Anthropic · 同概念:智能体 (agent)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-05-21-talks-the-best-time-in-history-to-start-a-comp|Stripe 与 Replit 对谈：AI 时代的创业大爆发与护城河]] —— 同公司:Replit、OpenAI、Stripe · 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|一千人公司里的五人小队:Eddie Kim 怎么用 Claude Code 花10周造出 Gusto Co-Founder]] —— 同概念:vibe coding、智能体 (agent)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|iPod之父Tony Fadell：越是容易造的AI时代，越需要讲故事的“奢侈品”产品]] —— 同公司:Anthropic、OpenAI · 同概念:智能体 (agent)

</div>
</div>

*本集关键词:AI 编程 · 智能体 · 定价 · 创业豪赌 · Vibe Coding*

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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); }
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
