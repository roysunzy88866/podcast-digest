---
title: 当 AI 会写代码，工程师的最后一项技能是“做对的东西”
podcast: 精选演讲
date: 2026-10-08
source_url: undefined
duration: "55:10"
type: episode
cover: "#64748b"
description: 开发者教育者 Kent C. Dodds 主张：智能体拉平了实现门槛后，工程师的核心价值转向产品工程——判断该构建什么，并讲了他验证想法的具体方法。
guests: ["[[Kent C. Dodds]]"]
concepts: ["[[智能体]]", "[[产品工程师]]", "[[实现]]", "[[mom test]]", "[[验证]]", "[[最小切片]]", "[[变通办法]]"]
category: AI 编程
tags:
  - AI 编程
  - 产品方法
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-05-talks-build-the-right-thing-product-engineerin#post","headline":"当 AI 会写代码，工程师的最后一项技能是“做对的东西”","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-05-talks-build-the-right-thing-product-engineerin","mainEntityOfPage":"https://talk.solomind.cc/2026-10-05-talks-build-the-right-thing-product-engineerin","description":"开发者教育者 Kent C. Dodds 主张：智能体拉平了实现门槛后，工程师的核心价值转向产品工程——判断该构建什么，并讲了他验证想法的具体方法。","datePublished":"2026-10-08","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Kent C. Dodds"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"产品工程师 (product engineer)"},{"@type":"Thing","name":"实现 (implementation)"},{"@type":"Thing","name":"mom test"},{"@type":"Thing","name":"验证 (validation)"},{"@type":"Thing","name":"最小切片 (smallest slice)"},{"@type":"Thing","name":"变通办法 (workaround)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"当 AI 会写代码，工程师的最后一项技能是“做对的东西”","item":"https://talk.solomind.cc/2026-10-05-talks-build-the-right-thing-product-engineerin"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当 AI 会写代码，工程师的最后一项技能是“做对的东西”</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 当 AI 会写代码，工程师的最后一项技能是“做对的东西”

<div class="pd-byl"><b>Kent C. Dodds</b> · 开发者教育者 · 2026-10-08</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-05-talks-build-the-right-thing-product-engineerin.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">当 AI 智能体拉平了实现层面的竞技场——而它们正在积极这样做——差异化的关键就变成了构建正确的东西。</div><div class="a">— Kent C. Dodds <button class="pd-ts" data-t="10:56" data-who="Kent C. Dodds" data-en="When AI agents level the implementation playing field, which they are actively doing, then the differentiator becomes building the right thing." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Kent C. Dodds]]
>
> **概念** [[智能体]] · [[产品工程师]] · [[实现]] · [[mom test]] · [[验证]] · [[最小切片]] · [[变通办法]]

这一集是 [[Kent C. Dodds|Kent C. Dodds]] 的一场工作坊演讲。

Kent 做了十几年软件开发，2019 年起全职做开发者教育，专门帮有经验的工程师加速获取新经验——他自己的课程就教 React、测试、全栈这些具体技术。

而今年他经历了两次“存在主义危机”： Christmas 假期里用[[智能体|智能体]]写代码时，他意识到这东西写得比自己好——那还有谁需要上他的 React 课？

他自己承认：“你不需要知道 useState 是什么，谁还在乎那些东西？”

由此他提出全场核心论点：**当 AI 智能体拉平了[[实现|实现]]层面的竞技场（它们正在这么做），差异化的关键就变成了构建正确的东西** <button class="pd-ts" data-t="10:56" data-who="Kent C. Dodds" data-en="This is the thesis. When AI agents level the implementation playing field, which they are actively doing, then the differentiator becomes building the right thing." aria-label="回原文"></button>。

他打了比方：

过去工程师像神箭手，产品经理说“射中那个靶子”，你考虑风速、瞄准、命中——现在箭被换成了自动追踪装置，谁都能轻松命中。

但靶子从来不是生来平等的，**知道哪个靶子值得射，才是差异化的关键** <button class="pd-ts" data-t="10:15" data-who="Kent C. Dodds" data-en="Because of, well, actually, this has always been the case, all the targets are not created equal. And so knowing which one of those targets is the valuable thing to hit, that's the differentiator." aria-label="回原文"></button>。

## “把工单变成实现”的工程师，看起来非常像智能体

实现已经商品化了，稀缺资源从“能不能做出来”变成了“值不值得做”。Kent 引用了他播客里多位嘉宾的判断：

OpenCode 的创造者 Dax Rad 说，新的编码智能体能力默认都会流向“做错误的事情”——产品从好变坏的速度比以往任何时候都快，因为智能体不会喊“等等，我们把系统搞得太臃肿了”，放慢脚步、有意识决定往产品里加什么，是人的责任 <button class="pd-ts" data-t="19:11" data-who="Kent C. Dodds" data-en="Like, I think that we're expanding the system too bad or whatever. They might in the future, but no, like, it is our responsibility to slow down and be intentional about what we're adding to our product so it doesn't bloat up to something too ridiculous." aria-label="回原文"></button>。

Cloudflare 产品高管 Rita Kozlov 补充：

原型很快就能做出“看起来能用”的表面，但不可扩展、没处理边界情况——[[产品工程师|产品工程师]]的用武之地是看着原型说“我要扔掉它，用我的系统思维两小时重写一遍”，因为知道自己会凌晨两点被叫起来修问题，你就会认真打造智能体的游乐场。

Aaron Francis 的警告最扎心：“你可以极其快速地做错误的事情，还感觉自己取得了巨大的进展”——陷得越深越停不下来，沉没成本谬误。

Wayne Allen 那句话值得记：

产品关注点是“做对的东西”，工程关注点是“把东西做对”，而**后者是前者的下游**——确保上游的价值判断传导下来，符合工程师自己的利益。

## 产品工程师 vs 产品经理：界限在哪

Kent 强调他不是让所有工程师转行做 PM。产品工程师的工作是**把对客户需求的理解与正在做出的技术选择连接起来**：

定数据模型和工作流形态、可观测性、约束、故障模式、[[最小切片|最小切片]] <button class="pd-ts" data-t="21:46" data-who="Kent C. Dodds" data-en="Okay, so your job as a product engineer is to connect the customers, the understanding what the customer needs to the technical choices that are being made so that you don't paint yourself into a corner and you don't overbuild." aria-label="回原文"></button>。

区分两者的第一要素是技术专长和对系统的理解——你真正了解可用的原语（数据类型、定时任务系统、基础设施的限制），所以需求进来时，你能判断它是塞进现有架构，还是值得扩展系统。

发明“用户体验”一词的 Don Norman 讲过一个更根本的原则：

三里岛核事故后他研究得出，操作员聪明且有能力，问题出在系统上——**“用户错误是不存在的”**，系统设计者要为系统负责。

还有一个工程直觉：架构变更很贵。“不就几百万个 token 的事吗”——但真正的成本在于它对团队其他人和用户的影响。

如果你理解产品、第一次就做对选择，你就是更值得雇的人。

## 怎么验证一个想法：The Mom Test

工作坊用现场生成的点子做实操：一个解决大会工作坊排队的应用。

Kent 的核心方法是《The Mom Test》（书名源自“你妈会说你任何点子都好”，所以别去问喜欢你的人）：

- **别让用户评估你的想法、别替你诊断问题**。最常见的错误是拿着自己的解决方案去问“如果它已经和应用集成了会不会更方便”——对方还没认同这是个值得解决的问题，你就在推销方案了。
- **别问未来问题**。“你愿意付多少钱？”通常只会换来想赶紧结束对话的人敷衍的“是”。书里管这叫“钓恭维”。
- **问过去的具体行为**：“跟我说说上次这种情况发生时的事”“当时你用什么[[变通办法|变通办法]]？”“那样做让你付出了什么代价？”“多久发生一次？”Don Norman 说别泛泛问“问题是什么”，用户只会告诉你症状和同样不成形的解决方案。
- **金子般的信号**：对方已经在花大量精力和金钱用变通办法绕这个问题——这是问题值得解决的有力证据；反过来，“我不记得上次是什么时候了，后来就放弃了”也是信号，只是不是你要的那个。

播客嘉宾 Michael 在做身份认证平台 WorkOS 之前采访了大量客户，问“没有解决方案你正在损失什么”，据此决定做成托管而非本地部署——因为安全问题必须立即推送修复，不能等用户升级 NPM 包。

反例是 Wayne 在澳大利亚房地产公司的教训：

团队为“全澳大利亚的人同时登录”做了整整一年微服务，花掉 120 万澳元（约 90 万美元），结果**一个人都没用**。

他的复盘：本来两周就能上线个简版、手动做集成、快速测市场。

## 每个产品决策都在塑造系统

理解请求从哪来，决定你做什么技术权衡：这是一次性实验还是业务核心？值得花一年吗？没有它业务会倒闭吗？

答案不同，投入完全不同。而且验证不只是 PM 的工作——如果功能请求没附带“为什么存在”的验证，产品工程师应该回去问 PM 要答案。

现场问答里 Kent 还给了两条：招聘产品工程师时，他完全不会做禁止用智能体的编程挑战——“你到底雇他们是来干什么的？”

；替代方案是给一个例子，问候选人会提哪些问题找到核心问题、以及从核心问题出发有哪些系统层面的影响。

至于“所有工程师都该成为产品工程师吗”——他说得很直白：

如果你的全部工作就是听别人指示然后变成代码实现，随着智能体变得更能干，这部分相当容易被取代 <button class="pd-ts" data-t="36:31" data-who="Kent C. Dodds" data-en="I don't want to be alarmist or whatever, It does seem like if all you're doing is listening to somebody tell you what to do and then turning that into a code implementation, that part seems like it's pretty replaceable." aria-label="回原文"></button>。

## 本集带走

- **稀缺资源变了**：实现已商品化，价值从“能不能做出来”转向“值不值得做”——这从“最重要的工程师”时代就一直重要，只是现在人人必须会。
- **验证想法只问过去、不问未来**：“上次发生是什么时候？你当时怎么替代的？付出了什么代价？”绝不谈自己的方案，绝不问“你愿意付多少钱”。
- **对方已有的变通投入是金子**：他们已经在花时间花钱绕过这个问题 = 值得做；他们记不得、早放弃了 = 别做。
- **把原型扔掉重写是一种能力**：表面能用的原型 ≠ 可扩展的系统，愿意为它负责（凌晨两点被叫起来的是你）才配做技术选型。
- **先上线最小切片**：两周上线加手动集成，好过一年微服务换零用户；Instagram 当初砍掉签到只留分享照片，就是同一个道理。
- **面试别考禁用 AI 的编程题**：考“你怎么找到核心问题、它带来哪些系统影响”，才是产品工程师要的技能。===金句===
10:56 | Kent C. Dodds
EN | When AI agents level the implementation playing field, which they are actively doing, then the differentiator becomes building the right thing.
ZH | 当 AI 智能体拉平了实现层面的竞技场——而它们正在积极这样做——差异化的关键就变成了构建正确的东西。

10:40 | Kent C. Dodds
EN | It's the last skill that the last software engineer needs. It's the last thing that you need to learn.
ZH | 它是最后一个软件工程师所需要的最后一项技能，是你需要学习的最后一样东西。

10:20 | Kent C. Dodds
EN | And so knowing which one of those targets is the valuable thing to hit, that's the differentiator.
ZH | 所以，知道那些靶子中哪一个是值得命中的有价值靶子，这才是差异化的关键。

14:06 | Kent C. Dodds
EN | So, the premise here is AI changes the scarce resource. It's no longer scarce to do implementation. That is a commoditized thing now.
ZH | 立足点在这里：AI 改变了稀缺资源。做实现不再是稀缺的了，那现在是一件已经商品化的事情。

14:54 | Kent C. Dodds
EN | So we're moving from can we build it to is it worth building.
ZH | 我们正从“我们能不能构建它”转向“它是否值得构建”。

17:13 | Kent C. Dodds
EN | If that's you, you look an awful lot like an agent to me.
ZH | 如果那就是你——只是拿一张工单把它变成实现——在我看来你非常像一个智能体。

17:33 | Kent C. Dodds
EN | So a product engineer is able to recognize that you can still fail after finishing the implementation if it doesn't produce customer value.
ZH | 一名产品工程师能够认识到：即使完成了实现，如果它不能产生客户价值，你仍然可能是失败的。

18:47 | Kent C. Dodds
EN | He says that the default place for our new coding agent abilities to go to is work on the wrong things. Products go from good to bad faster than ever.
ZH | 他说，我们新的编码智能体能力默认都会流向“做错误的事情”。产品从好变坏的速度比以往任何时候都快。

19:11 | Kent C. Dodds
EN | They might in the future, but no, like, it is our responsibility to slow down and be intentional about what we're adding to our product so it doesn't bloat up to something too ridiculous.
ZH | 智能体将来可能会这么做，但现在不会——所以，放慢脚步、有意识地决定往产品里加什么，以免它膨胀得过于荒谬，这是我们的责任。

20:52 | Kent C. Dodds
EN | And Aaron Francis, you can do the wrong thing incredibly fast and feel like you're making a ton of progress.
ZH | Aaron Francis 说：你可以极其快速地做错误的事情，还感觉自己取得了巨大的进展。

31:32 | Kent C. Dodds
EN | And in particular, if you're entering a space that's already overcrowded, you want to niche down as well on that target audience.
ZH | 尤其是，如果你要进入一个已经过度拥挤的领域，你还要在那个目标受众上进一步细分收窄。

42:36 | Kent C. Dodds
EN | You do not want to ask them future questions. Nobody can tell the future.
ZH | 你不要问他们关于未来的问题。没有人能预知未来。

44:26 | Kent C. Dodds
EN | If they're already putting a bunch of effort and paying a bunch of money to solve this problem with some work around, that's a really good opportunity.
ZH | 如果他们已经在投入大量精力、花大量钱用某种变通办法来解决这个问题，那就是一个非常好的机会。

50:26 | Kent C. Dodds
EN | The problems that are really worth solving are the ones where people will just run through the glass cutting themselves and they're like, I made it!
ZH | 真正值得解决的问题，是那些人们会直接冲破玻璃、划伤自己，然后说「我做到了！」的问题。

47:04 | Kent C. Dodds
EN | So like not only did they not have to handle every person in Australia, they didn't even have to handle one person in Australia. Nobody ended up using this thing.
ZH | 所以说他们不仅不用处理澳大利亚的每一个人，他们甚至连澳大利亚的一个人都不用处理——最终没有人使用这个东西。

47:13 | Kent C. Dodds
EN | So he told me that something he learned from that is we probably could have launched something in two weeks, not a year, and done the integration manually.
ZH | 所以他告诉我，他从中学到的是：我们本来也许可以两周内上线点什么，而不是一年，然后手动完成集成。

25:38 | Kent C. Dodds
EN | And it's just so clear to me that these people are so excited about their solution that they've totally lost the plot of the problem that they're trying to solve for users.
ZH | 对我来说非常清楚的是，这些人对自己的解决方案兴奋过头，以至于完全迷失了他们本来要为用户解决的问题的主线。

32:49 | Kent C. Dodds
EN | Like, how awful is it to work at your company that I can't use an AI agent? Goodness.
ZH | 在你们公司工作得有多糟糕啊，我连 AI 智能体都不能用？天哪。

36:14 | Kent C. Dodds
EN | Well, in my estimation, if you're not a product engineer, if you don't have product sense or design sense, that's going to be really easy to replace you as the agents continue to get competent.
ZH | 在我看来，如果你不是产品工程师，没有产品感或设计感，那么随着智能体持续变得更能干，你会非常容易被取代。

45:16 | Kent C. Dodds
EN | But the software engineer who really talks to people and understands their problems is the one who's gonna build a system that can solve those problems better.
ZH | 但真正与人交谈并理解他们问题的软件工程师，才是那个能构建出更好地解决这些问题的系统的人。

<div class="pd-sec pd-sec-q">全部金句 <span>17 条</span></div>

> <span class="qz">当 AI 智能体拉平了实现层面的竞技场——而它们正在积极这样做——差异化的关键就变成了构建正确的东西。</span>  
> *When AI agents level the implementation playing field, which they are actively doing, then the differentiator becomes building the right thing.*  
> <span class="qm">—— Kent C. Dodds · [10:56]</span> ^q1

> <span class="qz">所以，知道那些靶子中哪一个是值得命中的有价值靶子，这才是差异化的关键。</span>  
> *And so knowing which one of those targets is the valuable thing to hit, that's the differentiator.*  
> <span class="qm">—— Kent C. Dodds · [10:15]</span> ^q2

> <span class="qz">立足点在这里：AI 改变了稀缺资源。做实现不再是稀缺的了，那现在是一件已经商品化的事情。</span>  
> *So, the premise here is AI changes the scarce resource. It's no longer scarce to do implementation. That is a commoditized thing now.*  
> <span class="qm">—— Kent C. Dodds · [14:03]</span> ^q3

> <span class="qz">我们正从“我们能不能构建它”转向“它是否值得构建”。</span>  
> *So we're moving from can we build it to is it worth building.*  
> <span class="qm">—— Kent C. Dodds · [14:51]</span> ^q4

> <span class="qz">如果那就是你——只是拿一张工单把它变成实现——在我看来你非常像一个智能体。</span>  
> *If that's you, you look an awful lot like an agent to me.*  
> <span class="qm">—— Kent C. Dodds · [17:13]</span> ^q5

> <span class="qz">一名产品工程师能够认识到：即使完成了实现，如果它不能产生客户价值，你仍然可能是失败的。</span>  
> *So a product engineer is able to recognize that you can still fail after finishing the implementation if it doesn't produce customer value.*  
> <span class="qm">—— Kent C. Dodds · [17:33]</span> ^q6

> <span class="qz">他说，我们新的编码智能体能力默认都会流向“做错误的事情”。产品从好变坏的速度比以往任何时候都快。</span>  
> *He says that the default place for our new coding agent abilities to go to is work on the wrong things. Products go from good to bad faster than ever.*  
> <span class="qm">—— Kent C. Dodds · [18:41]</span> ^q7

> <span class="qz">智能体将来可能会这么做，但现在不会——所以，放慢脚步、有意识地决定往产品里加什么，以免它膨胀得过于荒谬，这是我们的责任。</span>  
> *They might in the future, but no, like, it is our responsibility to slow down and be intentional about what we're adding to our product so it doesn't bloat up to something too ridiculous.*  
> <span class="qm">—— Kent C. Dodds · [19:11]</span> ^q8

> <span class="qz">Aaron Francis 说：你可以极其快速地做错误的事情，还感觉自己取得了巨大的进展。</span>  
> *And Aaron Francis, you can do the wrong thing incredibly fast and feel like you're making a ton of progress.*  
> <span class="qm">—— Kent C. Dodds · [20:47]</span> ^q9

> <span class="qz">尤其是，如果你要进入一个已经过度拥挤的领域，你还要在那个目标受众上进一步细分收窄。</span>  
> *And in particular, if you're entering a space that's already overcrowded, you want to niche down as well on that target audience.*  
> <span class="qm">—— Kent C. Dodds · [31:32]</span> ^q10

> <span class="qz">如果他们已经在投入大量精力、花大量钱用某种变通办法来解决这个问题，那就是一个非常好的机会。</span>  
> *If they're already putting a bunch of effort and paying a bunch of money to solve this problem with some work around, that's a really good opportunity.*  
> <span class="qm">—— Kent C. Dodds · [44:26]</span> ^q11

> <span class="qz">真正值得解决的问题，是那些人们会直接冲破玻璃、划伤自己，然后说「我做到了！」的问题。</span>  
> *The problems that are really worth solving are the ones where people will just run through the glass cutting themselves and they're like, I made it!*  
> <span class="qm">—— Kent C. Dodds · [50:26]</span> ^q12

> <span class="qz">所以说他们不仅不用处理澳大利亚的每一个人，他们甚至连澳大利亚的一个人都不用处理——最终没有人使用这个东西。</span>  
> *So like not only did they not have to handle every person in Australia, they didn't even have to handle one person in Australia. Nobody ended up using this thing.*  
> <span class="qm">—— Kent C. Dodds · [46:56]</span> ^q13

> <span class="qz">所以他告诉我，他从中学到的是：我们本来也许可以两周内上线点什么，而不是一年，然后手动完成集成。</span>  
> *So he told me that something he learned from that is we probably could have launched something in two weeks, not a year, and done the integration manually.*  
> <span class="qm">—— Kent C. Dodds · [47:05]</span> ^q14

> <span class="qz">对我来说非常清楚的是，这些人对自己的解决方案兴奋过头，以至于完全迷失了他们本来要为用户解决的问题的主线。</span>  
> *And it's just so clear to me that these people are so excited about their solution that they've totally lost the plot of the problem that they're trying to solve for users.*  
> <span class="qm">—— Kent C. Dodds · [25:16]</span> ^q15

> <span class="qz">在我看来，如果你不是产品工程师，没有产品感或设计感，那么随着智能体持续变得更能干，你会非常容易被取代。</span>  
> *Well, in my estimation, if you're not a product engineer, if you don't have product sense or design sense, that's going to be really easy to replace you as the agents continue to get competent.*  
> <span class="qm">—— Kent C. Dodds · [36:14]</span> ^q16

> <span class="qz">但真正与人交谈并理解他们问题的软件工程师，才是那个能构建出更好地解决这些问题的系统的人。</span>  
> *But the software engineer who really talks to people and understands their problems is the one who's gonna build a system that can solve those problems better.*  
> <span class="qm">—— Kent C. Dodds · [45:19]</span> ^q17

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-05-27-devtools-cloudflare-devs|Cloudflare 三人聊：让模型直接写代码，别再堆工具了]]<span class="pd-rz">同公司:Cloudflare · 同概念:智能体 (agent)</span>
- [[2026-09-27-talks-no-that-s-not-a-software-factory-ryan-co|WorkOS 的软件工厂：别只盯着 AI 写了多少代码]]<span class="pd-rz">同公司:WorkOS · 同概念:智能体 (agent)</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-27-talks-what-it-actually-takes-to-build-a-softwa|软件工厂：让智能体闭环造软件，而不只是写代码]]<span class="pd-rz">同概念:想法验证 (validation)、智能体 (agent)</span>
- [[2026-08-26-talks-how-ai-agents-let-gtm-teams-scale-justin|Cloudflare 销售运营的 AI 三支柱：让市场进入团队效率翻倍]]<span class="pd-rz">同公司:Cloudflare · 同概念:智能体 (agent)</span>
- [[2026-09-02-bigtech-cloudflare-ceo-we-re-ready-to-block-mill|AI机器人流量已超人类：Cloudflare CEO谈网络的下一场豪赌]]<span class="pd-rz">同公司:Cloudflare · 同概念:智能体 (agent)</span>

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
