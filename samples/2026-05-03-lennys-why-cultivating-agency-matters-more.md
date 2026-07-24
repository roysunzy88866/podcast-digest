---
title: "前 GitHub、现 Notion 产品负责人 Max:每个项目的前 10% 现在免费了"
podcast: "Lenny's Podcast"
date: 2026-05-03
source_url: https://www.lennysnewsletter.com/p/why-cultivating-agency-matters-more
duration: "87:20"
host: "[[Max Schoening]]"
cohosts: ["[[Lenny]]"]
companies: ["[[Notion]]", "[[GitHub]]", "[[Heroku]]", "[[Figma]]"]
concepts: ["[[主观能动性]]", "[[可塑软件]]", "[[微小核心]]", "[[品味]]", "[[智能体循环]]", "[[渐进式正确性]]"]
tags:
  - AI 时代产品构建
  - 主观能动性
  - 可塑软件
  - 品味
  - 微小核心
---

# 前 GitHub、现 Notion 产品负责人 Max:每个项目的前 10% 现在免费了

> [!info] 关联
> **主持**:[[Max Schoening]]
>
> **联合主持**:[[Lenny]]
>
> **涉及公司**:[[Notion]] · [[GitHub]] · [[Heroku]] · [[Figma]]
>
> **概念**:[[主观能动性]] · [[可塑软件]] · [[微小核心]] · [[品味]] · [[智能体循环]] · [[渐进式正确性]]
>
> **来源**:[Lenny's Podcast](https://www.lennysnewsletter.com/p/why-cultivating-agency-matters-more)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-05-03-lennys-why-cultivating-agency-matters-more.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

Max 谈 AI 如何重塑产品团队角色分工、可塑软件与「只做显然好的东西」的产品哲学。

本集嘉宾是 [[Max Schoening|Max Schoening]]。他曾任 Google 产品经理、[[Heroku|Heroku]] 设计负责人,并在 [[GitHub|GitHub]] 在 Nat Friedman 手下担任设计负责人和工程师;他还是一位两次创业的创始人,现在是 [[Notion|Notion]] 的产品负责人,被主持人称为目前最成功的 AI 先行产品领导者之一。主持人开篇提问:随着 AI 变得越来越强大并被深度整合进工作流,产品团队和产品构建的发展方向正在发生什么变化?Max 的回答贯穿了一条主线——AI 让写代码变得容易,但真正的变化不在于「人人都能发布代码」,而在于它改变了我们与软件这种材料的关系,以及它呼唤一种叫做「[[主观能动性|主观能动性]]」的稀缺品质。这篇导读将沿着他的思路,从产品团队的角色变化开始,一路聊到软件质量、[[品味|品味]],以及他眼中什么样的人会在未来脱颖而出。

## 「游乐场」如何让设计师开始写代码

Max 加入 Notion 后,团队在设计聊天界面时,一开始像业界惯例那样在 [[Figma|Figma]] 里做静态设计图。但他提到,设计师 Bret Victor 有个著名演讲叫《Stop Drawing Dead Fish》——聊天的静态图就像一条死鱼,你必须去真正「感受」AI [03:31 Max Schoening]。

于是 Max 和另外两位设计师搭建了一个由非常小的代码库构成的「游乐场」,这个代码库是 LLM 友好的(也就是大语言模型非常擅长理解和操作的)。他们把聊天界面的原型制作全部转移到这个游乐场上,让设计师只需克服对终端的恐惧,就能用对话的方式迭代设计 [03:49 Max Schoening]。

Max 强调,这只是为了让人们「走上跑步机」;随着模型能力提升,这些原本只做原型的设计师和 PM,现在也开始较小程度地为生产代码库做贡献了 [04:55 Max Schoening]。这就引出了他的核心观点。

## 为什么要写代码?为了成为「材料的大师」

既然有了 AI,是不是意味着设计师和产品经理都应该去写能上线的生产代码?Max 的答案出人意料:他其实不在乎设计师写的代码是否会真正投入生产。

他真正在乎的是,用代码思考能迫使你审视你设计的「媒介」 [08:53 Max Schoening]。比如,如果一个 PM 知道如何用 Codex 或 Claude Code 调整 UI 的小细节,但不理解「[[智能体循环|智能体循环]]」是如何工作的,Max 宁愿要那种对理解智能体循环有深厚亲和力、并能设计它们的人 [09:12 Max Schoening]。

> 【背景】智能体循环(agent loop):指智能体自主进行「思考-调用工具-观察结果-再思考」的循环过程,是当前 AI 应用的核心机制。Codex 和 Claude Code 是当前流行的 AI 编码工具。

Max 认为,真正理解智能体循环的唯一途径,就是用构成它们的材料(也就是代码)去构建它们。他用了一个生动的比喻:如今的编码工具就像 90 年代的操作系统 [09:51 Max Schoening]。所以,关键不是成为交付想法的齿轮,而是成为材料的大师 [10:14 Max Schoening]。

聊完了对工具材料的具体实践,Max 把视角拉高到了一个更本质的问题:在这种新世界里,什么样的人会成功?

## 区分赢家的是「主观能动性」

当被问及是什么区分了未来会脱颖而出的人和可能落后的人时,Max 的判断是:「主观能动性」(agency,指自发采取行动、改变周围世界的能力) [10:50 Max Schoening]。

他解释说,以前人们很容易给自己找借口说「我永远做不到这个,因为我没有那个技能」。但现在,即使你技能不足,一个接近 AGI(通用人工智能)的模型也能帮你。所以真正重要的是主观能动性,而他认为这种品质在世界上分布得并不均匀 [11:09 Max Schoening]。那些拥有真正主观能动性、并理解他们周围世界是「可塑的」的人,会做得很好;而那些死守着「告诉我,作为 PM 意味着什么?」的人,会困难得多 [11:27 Max Schoening]。

Max 给想培养主观能动性的人的建议非常朴素:「制作东西」。就像史蒂夫·乔布斯那句名言——有一天你醒来,你会意识到这个世界是由并不比你聪明的人构成的 [16:23 Max Schoening]。无论是一顿家常便饭还是修改一把椅子,一旦你开始动手创造,你就会意识到「其实这没那么难」,这种觉醒会让你相信自己可以改变事物 [17:34 Max Schoening]。

> 【背景】Max 举了 Notion 员工 Brian Levin 和 Eric Lou 的例子,说明他们如何不局限于本职岗位,主动跨界承担工程、设计、甚至招聘工作,展现了高主观能动性。

顺着「世界是可塑的」这个观念,对话自然引向了 Max 长期倡导的一个理念。

## 可塑软件与被夸大的 SaaS 末日

「[[可塑软件|可塑软件]]」(malleable software)是 Max 长期倡导的理念。简单来说,就是软件应该更贴近使用它的人的利益,而不是制造它的公司的利益 [18:16 Max Schoening]。

Max 打了个比方:想象你住在一个不能重新布置客厅、厨房必须完全按照别人决定的方式设置的环境里。我们不会接受这种现实,但这正是我们在软件里面临的现状。应用就像手机上的一个个小方块,界面、数据所有权等每一层都粘合在一起。你想改动一点点行为,通常是不可能的 [18:36 Max Schoening]。

随着 AI 的出现,越来越多的人开始觉醒,意识到「我可以直接制造工具」。现在很多人每天能与 Geoffrey Litt 等研究者一起工作,思考如何让软件更具可塑性 [19:56 Max Schoening]。

> 【背景】Geoffrey Litt 是 Ink & Switch 研究实验室的研究员,该实验室长期致力于可塑软件和计算工具的研究。

那么,既然每个人都能自己做工具,SaaS(软件即服务)是不是就要走向末日了?Max 认为这种说法被「大大夸大了」 [26:51 Max Schoening]。他指出,2010 年代很多 SaaS 只是一种围绕电子表格的「非常花哨的形式」,价值恰恰在于它比电子表格可塑性更低,从而能引导用户。更重要的是「即服务」这部分:大多数人并不想维护整个软件栈。他引用 Bret Taylor 的话说,软件就像一个花园,你需要照料它 [25:37 Max Schoening]。你付费是为了获得维护和一群专家的深度思考。

Max 认为,与其重建一切,软件会变得更通用(比如回到 90 年代的文字处理器、电子表格等),但依然会以服务的形式存在;同时,针对安全等特定领域的专门工具也会继续保留,因为那是付出额外努力真正解决问题的人 [26:32 Max Schoening]。主持人也补充说,像 Anthropic 这样最前沿的 AI 公司,内部一切也都通过 Slack 运行,没人想去自己重建一个 Slack [27:32 主持人]。

理解了 SaaS 不会消亡,我们再来看看 AI 具体怎样改变了产品构建的日常。

## 前端探索变便宜,但「最后 10% 仍是 90%」

如果对比几年前,Max 的工作变化最大的是什么?他给出了一个精炼的总结:「每个项目的前 10% 现在都是免费的」[28:47 Max Schoening]。

这意味着,对大多数事情来说,写一份长长的 PRD(产品需求文档)已经没有意义了,你完全可以快速做一个简陋的版本,然后说:「这是我认为我们应该构建的演示」 [28:59 Max Schoening]。现在构建一个初创公司的第一个版本,几乎不需要费什么力气 [29:22 Max Schoening]。

但这并不代表产品构建变简单了。Max 提醒:「即使你慷慨地说前 90% 已经完成了,最后 10% 实际上仍然是 90%。那总是最难的」[29:31 Max Schoening]。不过,探索多条路径变得更便宜了。你现在可以负担得起说:「我要派 10 个智能体去探索 10 个不同的东西,然后看看我对不对」 [29:46 Max Schoening]。他们在 GitHub 做产品评审时常说「演示而不是备忘录」,现在要给人们一些可以做出反应的东西,变得容易多了 [30:00 Max Schoening]。

虽然探索变快了,但 Max 对当前「只求速度」的行业氛围有强烈的反思。

## 狂热之外:警惕代码质量与软件质量的下滑

当被问及现在最让他挣扎的是什么时,Max 毫不犹豫地指出是软件质量 [54:02 Max Schoening]。他认为,很多软件的质量并没有随着数量一同提升,行业内充斥着大量并不可靠的产品。他对那种「苹果式的、一体成型、铝制」的精工工程十分推崇,呼吁行业必须弄清楚如何回到那种状态 [54:35 Max Schoening]。他甚至直言,即使是最前沿的实验室(labs,指顶级 AI 公司)也不能幸免——它们提供的命令行工具(CLI)虽然好用,但每两周就会出现功能回归(指以前修好的 bug 又出现了),而且连一个合理的帧率渲染界面都做不到 [54:10 Max Schoening]。

在团队内部,Max 鼓励一种叫做「只做显然好的东西」(obviously good stuff)的文化,并在 Notion 散发印有这句话的贴纸。他解释说,当第一代 iPhone 问世或 ChatGPT 刚推出时,没有人会争论它们是不是「显然好」——你就是知道 [55:13 Max Schoening]。但他也强调,这绝不意味着躲进山洞里闭门造车直到完美,这必须与他另一个核心价值观「[[渐进式正确性|渐进式正确性]]」(incremental correctness,即通过高频迭代不断逼近正确)结合 [55:29 Max Schoening]。

那么,在这个 AI 帮我们写出一切的时代,人类剩下的核心工作是什么?Max 的答案是:品味。

## 品味就是「脑内虚拟机」

当 AI 负责构建时,人类的职责就是判断「这是否伟大?是否足够好?」Max 给品味下了一个非常极客的定义:品味就是在脑海中运行一台「虚拟机」——给定一个想法,你能预测某个特定的群体是否会喜欢它 [57:29 Max Schoening]。

这种能力不是天生的。Max 认为品味来源于「带反馈的迭代」(iterations with feedback) [57:18 Max Schoening]。这几乎就像训练一个模型:输入想法,观察人们的反应,再不断调整。这非常像神经网络的「反向传播」(back propagation)过程 [58:27 Max Schoening]。

所以要建立品味,就像日本的工匠画碗一样,只能通过增加「重复训练」(reps)的频率来获得 [58:42 Max Schoening]。Max 观察到,那些在软件设计中品味极高的人,通常都有需要自己全权负责的副业项目,而且总是喜欢捣鼓各种新工具 [59:13 Max Schoening]。

将品味、主观能动性与材料掌控力结合起来,Max 揭示了他眼中构建伟大产品的终极秘诀。

## 伟大产品的共性:微小却超强的核心

如果要把构建成功产品的秘诀归结为一点,Max 的洞察是:所有伟大的产品都有一个极其出色的「[[微小核心|微小核心]]」(tiny core)[60:24 Max Schoening]。

最大的陷阱之一,就是陷入「如果我只是再给产品添加一样东西,它最终就会很棒」的循环——这从来都不起作用 [61:15 Max Schoening]。Max 指出,伟大的产品都有一个微小的、像超能力一样的核心:比如 iPhone 的多点触控、GitHub 的拉取请求、Notion 的块和斜杠命令、Figma 的实时协作融合,以及 Heroku 那句简单的「Git Push Heroku master」部署命令 [61:56 Max Schoening]。Dropbox 也是个好例子,它那个小小的菜单栏图标在同步方面做得太好了,你甚至可以用它来判断有没有联网 [62:58 Max Schoening]。这些都是「一招鲜」做到了极致。

Max 还顺带抛出了一个有点淘气的「激进观点」:他认为我们已经有了全民基本收入(UBI),它叫做「知识工作」[67:52 Max Schoening]。他解释说,如果我们诚实地审视维持生活和满足感真正需要多少东西,其实比我们建立的这套庞大的工作层级体系要少得多。这番话既是个玩笑,也是一种对人性的反思——人类总是极为擅长发明新的理由,以确保自己必须留在那个工作循环里 [68:22 Max Schoening]。

## 本集带走

1. **AI 时代的分水岭不是技能,而是「主观能动性」**:当技能门槛被 AI 抹平,真正稀缺的是那种意识到「世界是由不比你聪明的人构成的」并主动去捣鼓、去改变现状的人。
2. **SaaS 末日是个伪命题,但工具会更通用**:人们不想从头维护一整套软件,「即服务」的价值在于持续的专家级维护;但软件会变得更具可塑性,不再是一个个封闭的黑盒。
3. **伟大产品源于「微小核心」,而非功能堆砌**:不要再掉进「加一个功能就会变好」的陷阱,找到那个像超能力一样的核心(如拉取请求、多点触控),并将其打磨到「显然好」的程度。
4. **品味不是玄学,它是带反馈的迭代**:在这个时代,人类的核心工作就是判断,而品味完全可以通过像训练模型一样的高频迭代来培养。

## 金句(中英对照 · 过机器闸门三联校验)

> 我认为每个项目的前 10% 现在都是免费的。  
> *I think the first 10% of every project are now free.*  
> —— Max Schoening · [28:47] ^q1

> 但我认为非常重要的一点是不要忘记,原因是成为材料的大师,而不是想法传递机制中的一个齿轮。  
> *But I think it's really important not to forget that the reason why is to become a master of the material, not a cog in the delivery mechanism for the idea.*  
> —— Max Schoening · [10:21] ^q2

> 我认为那些拥有真正主观能动性并且理解他们周围的世界是可塑的人会做得很好。  
> *And I think people who have true agency and they understand that the world around them is malleable will do great.*  
> —— Max Schoening · [11:27] ^q3

> 最大的陷阱之一是如果你陷入这个循环,如果我只是再给产品添加一件东西,它最终就会很棒。  
> *One of the biggest pitfalls is if you get into the loop of, if I just add one more thing to the product, it'll be finally great.*  
> —— Max Schoening · [01:00] ^q4

> 所有伟大的产品都有一个微小但超强的东西,一个极其出色的微小核心。  
> *All the great products have something tiny that is a superpower, one tiny core that is so exceptionally good.*  
> —— Max Schoening · [00:54] ^q5

> 我们已经有了全民基本收入。它被称为知识工作。  
> *We already have universal basic income. It's called knowledge work.*  
> —— Max Schoening · [68:01] ^q6

> 品味实际上意味着你能够在脑海中运行一台虚拟机,给定一个想法,你可以预测某个特定群体是否会喜欢它。  
> *Taste actually means you're able to run a virtual machine in your head where given an idea, you can predict for a certain in group whether they're going to like it or not.*  
> —— Max Schoening · [00:40] ^q7

> 有一天你醒来,你会意识到这个世界是由并不比你聪明的人构成的。  
> *One day you wake up and you realize the world is made up by people no smarter than you.*  
> —— Max Schoening · [00:22] ^q8

> 可塑软件的想法是,软件更接近使用它的人的利益,而不是制造它的公司的利益,也许这就是我的框架。  
> *Malleable software is the idea that software works closer to the interest of the people that use it than the interest of the corporation that makes it, maybe that's how I'd frame it.*  
> —— Max Schoening · [18:16] ^q9

> 如果他们知道如何调整 UI 的小细节,但他们不理解智能体循环是如何工作的,我会更倾向于那种对理解智能体循环如何工作有深厚亲和力并且能够设计它们的设计师或产品经理,而不是那些能编写传统软件并调整样式的人。  
> *If they know how to tweak small details of the UI, but they don't understand how an agent loop works, I would much rather take the designer or PM that deeply has an affinity for understanding how agent loops work and can design those than someone who can write traditional software and tweak styles.*  
> —— Max Schoening · [09:23] ^q10

## 相关单集

- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同嘉宾:Lenny · 同公司:Figma、Anthropic
- [[2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for|《Adam Mosseri 谈 AI 时代的产品团队重塑与 Instagram 算法真相》]] —— 同嘉宾:Lenny · 同概念:品味 (taste)
- [[2026-04-26-lennys-snapchat-ceo-why-distribution-is|《Snap CEO Evan Spiegel:在AI时代,做最会创新的公司》]] —— 同嘉宾:Lenny · 同公司:Figma · 同概念:待办任务 (jobs to be done)
- [[2025-11-16-lennys-the-godmother-of-ai|《AI 教母李飞飞:从 ImageNet 到空间智能,与首个 3D 世界模型 Marble》]] —— 同嘉宾:Lenny · 同概念:主观能动性 (agency)
- [[2025-12-07-lennys-surge-ai-edwin-chen|《Surge AI 创始人 Edwin Chen:我们教模型追逐多巴胺,而非真理》]] —— 同嘉宾:Lenny · 同公司:Anthropic
- [[2025-12-28-lennys-10-contrarian-leadership-truths|《Rippling高管Matt MacInnis:成就伟业,你必须时刻保持极度紧绷》]] —— 同嘉宾:Lenny · 同公司:Notion
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《在指数级增长公司做增长：Anthropic 增长负责人的打法》]] —— 同嘉宾:Lenny · 同公司:Anthropic
- [[2026-05-10-lennys-how-to-build-a-company-that-withstands|《《精益创业》作者 Eric Ries 新作导读：好公司为什么会「变坏」》]] —— 同嘉宾:Lenny · 同公司:Anthropic
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的 AI 工作预测:智能体接管工作,但人类不会失业》]] —— 同嘉宾:Lenny · 同公司:GitHub
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《Tony Fadell：造出 iPod 和 iPhone 的人，怎么看 AI 时代的造物法则》]] —— 同嘉宾:Lenny · 同公司:OpenAI
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同嘉宾:Lenny · 同公司:Anthropic
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《No Figma. No Jira. No docs. How Gusto built a new product line with Claude Code | Eddie Kim (CTO)》]] —— 同公司:Figma · 同概念:智能体循环 (agent loop)
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《Netflix 产品负责人谈 AI 时代：每个人都能做一切,但卓越的专长不会消失》]] —— 同嘉宾:Lenny · 同概念:主观能动性 (agency)
- [[2025-11-20-lennys-slack-founder-stewart-butterfield|《把自家产品骂成「一坨狗屎」：Stewart Butterfield 的产品哲学》]] —— 同嘉宾:Lenny
- [[2025-11-23-lennys-a-guide-to-difficult-conversations|《别再充当团队的“答案机”：高管教练 Rachel Lockett 的领导力实战课》]] —— 同嘉宾:Lenny
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同嘉宾:Lenny
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《用 20 个 AI 智能体替代 10 人销售团队：SaaStr 创始人的前沿实战》]] —— 同嘉宾:Lenny
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同嘉宾:Lenny
- [[2026-01-25-lennys-why-your-product-stopped-growing|《增长停滞怎么办？Jason Cohen 的四步诊断法》]] —— 同嘉宾:Lenny
- [[2026-02-01-lennys-dr-becky-on-the-surprising-overlap|《Dr. Becky 谈领导力:把职场当家庭,用育儿智慧管理“伪装的婴儿”》]] —— 同嘉宾:Lenny
- [[2026-02-26-lennys-ai-is-critical-for-humanitys-survival|《Cisco 高管 Jeetu Patel：如何把老牌巨头推向 AI 时代，以及他的六维制胜框架》]] —— 同嘉宾:Lenny
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《估值 150 亿的隐形 AI 公司 Applied Intuition:给自动驾驶卡车的焦虑开一剂务实药方》]] —— 同嘉宾:Lenny
- [[2026-03-22-lennys-the-art-of-influence-jessica-fain|《别怪高管不懂你：产品经理的向上影响力心法》]] —— 同嘉宾:Lenny
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同嘉宾:Lenny
- [[2026-04-12-lennys-hard-truths-about-building-in-the-ai-era|《Keith Rabois：别问客户、别信心理安全、只招「木桶」》]] —— 同嘉宾:Lenny
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被淘汰，构建者迎来黄金期》]] —— 同嘉宾:Lenny
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人：别想从零颠覆世界，靠复制才能创新》]] —— 同嘉宾:Lenny
- [[2026-07-12-lennys-how-tech-workers-actually-feel-about|《How tech workers actually feel about AI in 2026 | Annual AI sentiment survey (Noam Segal)》]] —— 同嘉宾:Lenny
- [[2026-07-08-latent-space-modal|《AI 基础设施如何为智能体重新设计:Modal 联合创始人的方法》]] —— 同概念:Kubernetes

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
