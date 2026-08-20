---
title: OpenAI 内部怎么用 AI 写代码：从巫师比喻到一人独角兽的二阶效应
podcast: "Lenny's Podcast"
date: 2026-02-12
source_url: https://www.lennysnewsletter.com/p/engineers-are-becoming-sorcerers
duration: "79:37"
type: episode
cover: "#6366f1"
description: "OpenAI 工程负责人揭示内部 95% 工程师日常用 Codex 写代码，以及他对一人公司生态、脚手架被模型吃掉等趋势的判断。"
host: "[[Sherwin Wu]]"
cohosts: ["[[Lenny]]"]
companies: ["[[Codex]]", "[[OpenAI]]"]
concepts: ["[[智能体]]", "[[vibe coding]]", "[[脚手架]]", "[[业务流程自动化]]", "[[API]]"]
category: AI 编程
tags:
  - AI 编程
  - 组织与领导力
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-02-12-lennys-engineers-are-becoming-sorcerers#post","headline":"OpenAI 内部怎么用 AI 写代码：从巫师比喻到一人独角兽的二阶效应","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-02-12-lennys-engineers-are-becoming-sorcerers","mainEntityOfPage":"https://talk.solomind.cc/2026-02-12-lennys-engineers-are-becoming-sorcerers","description":"OpenAI 工程负责人揭示内部 95% 工程师日常用 Codex 写代码，以及他对一人公司生态、脚手架被模型吃掉等趋势的判断。","datePublished":"2026-02-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"isBasedOn":"https://www.lennysnewsletter.com/p/engineers-are-becoming-sorcerers","about":[{"@type":"Person","name":"Sherwin Wu"},{"@type":"Person","name":"Lenny"},{"@type":"Organization","name":"Codex"},{"@type":"Organization","name":"OpenAI"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"vibe coding"},{"@type":"Thing","name":"脚手架 (scaffolding)"},{"@type":"Thing","name":"业务流程自动化 (business process automation)"},{"@type":"Thing","name":"API"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"OpenAI 内部怎么用 AI 写代码：从巫师比喻到一人独角兽的二阶效应","item":"https://talk.solomind.cc/2026-02-12-lennys-engineers-are-becoming-sorcerers"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>OpenAI 内部怎么用 AI 写代码：从巫师比喻到一人独角兽的二阶效应</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# OpenAI 内部怎么用 AI 写代码：从巫师比喻到一人独角兽的二阶效应

<div class="pd-byl"><b>Sherwin Wu</b> · OpenAI 工程负责人 · 2026-02-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-02-12-lennys-engineers-are-becoming-sorcerers.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">为了实现一人独角兽公司，可能会有另外一百家小型初创公司在构建定制软件。</div><div class="a">— Sherwin Wu <button class="pd-ts" data-t="00:22" data-who="Sherwin Wu" data-en="To enable a one person billion dollar startup, there might be a hundred other small startups building bespoke software." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sherwin Wu]] · [[Lenny]]
>
> **公司** [[Codex]] · [[OpenAI]]
>
> **概念** [[智能体]] · [[vibe coding]] · [[脚手架]] · [[业务流程自动化]] · [[API]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/engineers-are-becoming-sorcerers)

<div class="pd-tldr"><b>一句话</b>OpenAI 工程负责人揭示内部 95% 工程师日常用 Codex 写代码，以及他对一人公司生态、脚手架被模型吃掉等趋势的判断。</div>

[[OpenAI|OpenAI]] 内部，95% 的工程师每天用 [[Codex|Codex]] 写代码，100% 的 PR 由 Codex 审查。用得多的工程师比不常用的多开 70% 的 PR，而且这个差距还在拉大 <button class="pd-ts" data-t="04:16" data-who="Sherwin Wu" data-en="What we do track though is at this point, the vast majority of engineers use Codex on a daily basis. So 95% of engineers use Codex. 100% of our PRs are reviewed by Codex daily as well." aria-label="回原文"></button>。这不是某个前沿实验，而是已经跑起来的日常。

## 工程师变成巫师，但别学《魔法师的学徒》

Sherwin 用了一个来自 MIT 经典教材 SICP（被圈内人称为"巫师书"）的比喻：程序员就是巫师，编程语言是咒语，你念一句，计算机替你办事。这本 1980 年的书预言的东西，现在真的发生了——你告诉 Codex 你要什么，它就去干 <button class="pd-ts" data-t="09:19" data-who="Sherwin Wu" data-en="But the thing that was memorable for me about that book, so I kind of read it in college. The very beginning of it kind of describes programming as a discipline and draws this metaphor to basically like sorcery." aria-label="回原文"></button>。

但他更想强调的是《幻想曲》里《魔法师的学徒》那一面：Mickey 拿到魔法师的帽子，让扫帚干活，自己跑去睡觉，结果扫帚失控、水淹一切。现在很多工程师同时开 10 到 20 个 Codex 线程，确实像在施法，但你需要有足够的经验和判断力确保模型不脱轨——这不是"设好就不管"的事，杠杆率极高，但也需要你盯着 <button class="pd-ts" data-t="10:22" data-who="Sherwin Wu" data-en="It is now literally incantations because you can tell Codex, you can tell Cursor exactly what you want to do and then it will go do it for you. And I particularly like the wizard and the sorcery analogy because I think our current state is starting to move towards kind of like The Sorcerer's Apprentice from Fantasia where Mickey Mouse is like, he finds the Sorcerer's hat and he tries to do all these things." aria-label="回原文"></button>。

## 智能体不干活，大概率是你给的上下文不够

OpenAI 内部有个极端实验：一个团队维护 100% 由 Codex 生成的代码库，并且**不给自己留逃生舱**——遇到[[智能体|智能体]]搞不定的问题，不能说"算了我自己写" <button class="pd-ts" data-t="13:05" data-who="Sherwin Wu" data-en="There's a particularly interesting team that we have internally. So there's a team that's actually doing an experiment right now with an OpenAI where they are basically maintaining a 100% Codex written code base." aria-label="回原文"></button>。这个团队遇到的和你一样：想让它做某个功能，但它就是做不出来。

他们发现的核心问题不是模型能力不够，而是**上下文和信息给得不够**。要么是你描述得太模糊，要么是智能体拿不到它需要的背景知识。解决办法是把原来只存在于工程师脑子里的"部落知识"编码进代码库——通过代码注释、代码结构本身、或者 .md 文件、Skills 等额外资源，让模型能自己找到该知道的东西 <button class="pd-ts" data-t="14:04" data-who="Sherwin Wu" data-en="And I actually think we're going to be publishing a blog post from some of our learnings here, but a lot of fascinating paradigms and best practices are falling out of this." aria-label="回原文"></button>。

代码审查这边，Codex 把一个 10 到 15 分钟的任务压到了 2 到 3 分钟：它先审一遍，把建议都列好，人来看的时候只需关注 30% 而不是 100%。小的 PR 甚至不需要人审，Codex 本身就是那双"够聪明的第二双眼睛" <button class="pd-ts" data-t="16:26" data-who="Sherwin Wu" data-en="Codex is really good at reviewing code. So actually one thing that we've noticed that 5.2 in particular has gotten extremely strongly adept at is reviewing code and especially when you kind of steer it in the right direction." aria-label="回原文"></button>。CI 流程里遇到 lint 错误之类的问题，Codex 直接打补丁、重启流程，工程师几乎不需要介入 <button class="pd-ts" data-t="17:10" data-who="Sherwin Wu" data-en="And so that's something that we've heavily leaned into. The general CI process and the post kind of push and deployment process has also been heavily automated via Codex internally at this point." aria-label="回原文"></button>。

## AI 让好人更好、让优秀的人卓越，管理者该把时间押注在哪

Codex 让顶尖表现者的产出进一步拉开差距。Sherwin 的管理哲学因此更极端：**把超过 50% 的时间花在前 10% 的人身上**，确保他们没有阻碍、感到被赋权 <button class="pd-ts" data-t="32:13" data-who="Sherwin Wu" data-en="Yeah. I think a lot of the lessons that I've learned here, I don't know how specific it is to the OpenAI API or some of our enterprise products in particular. I think my management philosophy has obviously changed over time, but I think it's probably stayed the same more than it's changed over time." aria-label="回原文"></button>。他引用《人月神话》的类比——虽然软件工程不像手术那样只有一个人动刀，但管理者应该让每个工程师感觉自己就是主刀医生，而你就是那个递手术刀、帮他扫清一切障碍的团队 <button class="pd-ts" data-t="32:48" data-who="Sherwin Wu" data-en="One of these principles is what I talked to you about before, which is spending a lot of time with top performers, like actually spending... And to be very concrete, it's like more than 50% of your time with your top performers, with maybe your top 10% performers, and really, really trying your best to empower them." aria-label="回原文"></button>。

在 AI 时代这更重要了：当工程师能疯狂输出 PR 时，卡住他们的通常不是写代码本身，而是组织和流程层面的阻碍。管理者如果能提前看到这些弯角并清掉，价值巨大 <button class="pd-ts" data-t="34:27" data-who="Sherwin Wu" data-en="And so the example that I give is looking around corners and unblocking people, especially from an organizational perspective, is extremely, extremely useful. And again, going back to the AI conversations, even more important nowadays, right?" aria-label="回原文"></button>。他甚至觉得可以让连着公司内部知识的 ChatGPT 去扫描 Slack 和文档，主动告诉你"这个工程师下周可能会被什么卡住" <button class="pd-ts" data-t="35:28" data-who="Sherwin Wu" data-en="Yeah, that's actually a really good point. I haven't tried this yet, but I wonder what would happen if I ask ChatGPT hooked up to company knowledge, what are the active blockers?" aria-label="回原文"></button>。

另一个趋势：管理者可能管更大的团队。现在软件工程的最佳实践是六到八人，但有了 AI 工具帮管理者理解团队在干什么、掌握组织上下文，这个数字可能会显著扩大 <button class="pd-ts" data-t="22:16" data-who="Sherwin Wu" data-en="My sense is I think managers will be able to manage much larger teams in this world, kind of like how software engineers are managing 20 to 30 Codexes. My sense of these tools will allow managers, people managers to be higher leveraged and it will allow them to manage teams of way more than the current best practice of, I think it's like six to eight for software engineering." aria-label="回原文"></button>。

## 一人独角兽的二阶效应：B2B SaaS 的黄金时代

"一人十亿美元初创公司"这个说法本身不新鲜，但 Sherwin 认为人们没算清楚它的二阶和三阶效应 <button class="pd-ts" data-t="24:30" data-who="Sherwin Wu" data-en="Just like what's an example of something you think are like, okay, we're not realizing this yet. So one of my favorite kind of phrases or things that have come out of this whole AI wave is the idea of the one person billion dollar startup." aria-label="回原文"></button>。

第一层：如果一个人能杠杆到十亿美元，那创办任何一家公司都变容易了。第二层：会有大量小公司涌现——不是为了自己做独角兽，而是给那些一人公司做定制软件。

比如可能有 10 到 20 家单人公司专门做播客和 Newsletter 的客服工具，那个"一人独角兽"买他们的服务就行 <button class="pd-ts" data-t="30:02" data-who="Sherwin Wu" data-en="And actually, I think my view on it is slightly different, which is I think that Lenny's Podcast might end up becoming a billion dollar startup, but what I think might happen is instead of you kind of being the one person who has to dispatch an AI to solve and fix those support tickets, I think what might end up happening is there might be a whole smattering of other startups that are building software and super tailored towards what you might need." aria-label="回原文"></button>。所以结果可能是：1 家十亿美元公司，100 家一亿美元公司，数万家一千万美元公司。对个人来说，一千万美元的业务已经足够终身无忧了 <button class="pd-ts" data-t="26:53" data-who="Sherwin Wu" data-en="And so I think that's a really interesting trend to kind of see because as it gets easier and easier to build software, as it's easier and easier to run a company, you might actually just end up seeing way more of these startups." aria-label="回原文"></button>。

第三层效应更激进：如果大量公司变成只有一两个人的微型公司，VC 生态会变。那种能带来 100 倍、1000 倍回报的风险投资级标的可能会变少，取而代之的是大量对 VC 不友好但对个人极好的小生意 <button class="pd-ts" data-t="27:29" data-who="Sherwin Wu" data-en="And again, all of these, as you get to the further and further out predictions, I think there's a lot of uncertainty. I think if we end up moving to this world where you end up with these kind of micro companies building software that works for one or two people who own the company and are working there, I think the startup ecosystem will change." aria-label="回原文"></button>。

## 负 ROI 的 AI 部署，几乎都是同一个反模式

Sherwin 观察到很多公司的 AI 部署可能是负 ROI，根源几乎一样：**纯自上而下，没有自下而上的采用** <button class="pd-ts" data-t="41:07" data-who="Sherwin Wu" data-en="And so there's like a lot of these last mile intricacies of work that needs to really be done in a bottoms-up fashion. And so my sense is a lot of these AI deployments don't have bottoms-up adoption." aria-label="回原文"></button>。高管说"我们要 AI-first"，买了工具，写进绩效考核，但一线员工根本不知道怎么用，环顾四周也没人会用，没有可以学习的人。

有效的模式是两边都有：高层支持 + 内部有一批真正兴奋的人在做知识分享和最佳实践沉淀。他的建议是找到公司里那些"技术Adjacent"的人——不一定是软件工程师，可能是支持团队的运营负责人、Excel 高手，这些人往往最先被 AI 工具点燃。围绕他们建一个内部布道团队，让他们办研讨会、做知识分享，创造兴奋感 <button class="pd-ts" data-t="41:53" data-who="Sherwin Wu" data-en="And so my recommendation for companies kind of pushing this is find, or maybe even staff a full-time team internally that is this kind of tiger team internally that can explore the full extent of the capabilities, apply to specific workflows, do the knowledge sharing, create excitement within folks who might want to use this technology." aria-label="回原文"></button>。

## 别为模型今天的状态构建产品

"模型会把你的[[脚手架|脚手架]]当早餐吃掉"——Sherwin 引用了一个他非常认同的说法 <button class="pd-ts" data-t="44:58" data-who="Sherwin Wu" data-en="So there's this quote that I read actually earlier this week, it's from an X article by this guy named Nicolas, who's the founder of a startup called Fintool, where I think he was sharing a lot of the best practices that he has learned through building AI agents for financial services, I think at his startup Fintool." aria-label="回原文"></button>。2022 年 ChatGPT 刚发布时，模型很原始，所以大家建了大量脚手架：智能体框架、向量存储、复杂的检索链。但随着模型变强，很多脚手架被吃掉了——你不再需要那么复杂的向量检索管线，直接给模型搜索工具它就能用 <button class="pd-ts" data-t="45:22" data-who="Sherwin Wu" data-en="If you rewind back to 2022, right when ChatGPT launched, these models are pretty raw and there was like all this product scaffolding and things, especially in the developer space, to basically try and steer the model and build a scaffolding around it to get it to do what you want." aria-label="回原文"></button>。

这对产品决策的含义是：**别盲目听客户的**。客户会说"我想要更好的向量存储"，因为他们在局部最优里。

如果你只追这个反馈，你也在局部最优里。你得同时看模型在往哪走，为模型的方向构建，而不是为它今天的样子 <button class="pd-ts" data-t="47:10" data-who="Sherwin Wu" data-en="And so tying this back to the like, you don't always have to listen to your customers. Because the field is changing so much at any point in time, a lot of people are kind of in this local maximum." aria-label="回原文"></button>。他看到跑得好的初创公司往往是这样的：为一种"今天实现了 80% 但即将完全解锁"的能力设计产品，等模型一到那个水平，产品突然就通了 <button class="pd-ts" data-t="49:18" data-who="Sherwin Wu" data-en="My general advice, and I've been giving this to people for a while and I think it's still true today is make sure you're building for where the models are going and not where they are today." aria-label="回原文"></button>。

具体方向上，两个他最兴奋的：一是模型能连贯执行的任务长度在快速拉长，从分钟级走向小时级，未来 12 到 18 个月可能达到六小时甚至一天级别的连贯任务，围绕这个能建的产品会完全不同 <button class="pd-ts" data-t="50:34" data-who="Sherwin Wu" data-en="As much as you can share, I know there's a lot of secrets here, that maybe you're most excited about, or you think that people should start to prepare for and however much you can share?" aria-label="回原文"></button>。二是音频——语音对语音的原生多模态模型在企业场景里被严重低估，大量商业活动是通过说话完成的 <button class="pd-ts" data-t="52:15" data-who="Sherwin Wu" data-en="So that's something that I'm really, really excited about seeing. Another thing over the next 12 to 18 months, what I think would be really cool is improvements in the multimodal models." aria-label="回原文"></button>。

## 被低估的机会：业务流程自动化

硅谷的泡沫让我们只盯着软件工程——开放式、不可重复的知识工作。但世界经济的主体是**可重复的业务流程**：客服按 SOP 走流程、公用事业公司按固定规则处理请求 <button class="pd-ts" data-t="54:18" data-who="Sherwin Wu" data-en="And so what I mean by this is, I generally delineate it as software engineering is kind of like open-ended knowledge work, right? And this is why I think tools like Codex tend to be quite good because it's exploring and you're giving it these open-ended things, but software engineering is fundamentally pretty open-ended and is not very repeatable." aria-label="回原文"></button>。

软件工程的乐趣在于"偏离"，但大量工作的价值在于"不偏离"。用 AI 去自动化这些高确定性、与业务数据深度集成的重复流程，机会比大家在 X 上讨论的大得多 <button class="pd-ts" data-t="55:07" data-who="Sherwin Wu" data-en="They're like repeatable things, repeatable operations that some manager at a company has kind of like iterated on. There's usually a standard operating procedure that people want to do and you don't want to deviate from it that much." aria-label="回原文"></button>。

## 本集带走

- **智能体干不好，先查上下文**：不是模型不行，是你给的信息不够。把"部落知识"写进代码注释、.md 文件、Skills 里，让模型能自己找到。
- **不留逃生舱才能逼出真方法**：那个 100% Codex 代码库的团队之所以能沉淀出最佳实践，正是因为他们禁止自己"撸起袖子自己写"。
- **管理者把 50% 以上的时间砸在前 10% 的人身上**：AI 时代顶尖表现者的产出会被进一步放大，你的核心工作是帮他们清掉组织和流程层面的阻碍。
- **AI 部署要自下而上，不能只靠高管令**：找到公司里最被 AI 点燃的那几个"技术Adjacent"的人，围绕他们建布道团队，别只把 AI 写进 KPI。
- **为模型的方向构建，别为今天的模型构建**：客户要"更好的脚手架"时，想想这个脚手架会不会被下一代模型吃掉。为 80% 已经实现、即将完全解锁的能力设计产品。
- **别忽略[[业务流程自动化|业务流程自动化]]**：软件工程之外的、可重复的、高确定性的企业流程，是 AI 最大的被低估机会之一。

<div class="pd-sec">全部金句 <span>10 条</span></div>

> <span class="qz">为了实现一人独角兽公司，可能会有另外一百家小型初创公司在构建定制软件。</span>  
> *To enable a one person billion dollar startup, there might be a hundred other small startups building bespoke software.*  
> <span class="qm">—— Sherwin Wu · [00:22]</span> ^q1

> <span class="qz">有一个团队实际上正在 OpenAI 内部进行一项实验，他们维护着一个 100% 由 Codex 编写的代码库。</span>  
> *There's a team that's actually doing an experiment right now within OpenAI where they are maintaining a 100% Codex-written code base.*  
> <span class="qm">—— Sherwin Wu · [00:35]</span> ^q2

> <span class="qz">在 AI 领域，听取客户的意见并不总是正确的策略。</span>  
> *Listening to customers is not always the right strategy in AI.*  
> <span class="qm">—— Lenny · [00:48]</span> ^q3

> <span class="qz">模型会把你的脚手架当早餐吃掉。</span>  
> *The models will eat your scaffolding for breakfast.*  
> <span class="qm">—— Sherwin Wu · [00:57]</span> ^q4

> <span class="qz">这里有我们这里负责科学的副总裁 Kevin Weil 的一句话，他喜欢说："这是模型有史以来最糟糕的时候。"</span>  
> *There's a quote from Kevin Weil, our VP of science here, and he likes saying, "This is the worst the models will ever be."*  
> <span class="qm">—— Sherwin Wu · [01:05]</span> ^q5

> <span class="qz">确保你是为模型的发展方向而构建，而不是为了它们今天的样子。</span>  
> *Make sure you're building for where the models are going and not where they are today.*  
> <span class="qm">—— Sherwin Wu · [01:02]</span> ^q6

> <span class="qz">所以他们实际上比那些不太使用 Codex 的工程师多开 70% 的 PR。</span>  
> *So they're actually opening 70% more PRs than the engineers who aren't using Codex as much.*  
> <span class="qm">—— Sherwin Wu · [04:47]</span> ^q7

> <span class="qz">最终结果是你拥有一个庞大的劳动力，他们并不真正理解这项技术，就像，"我知道我应该使用这个，也许它也在我的绩效评估中，但我不知道该做什么。"</span>  
> *And as an end result, you end up with a giant workforce that doesn't really understand the technology, is like, "I know I'm supposed to use this and maybe it's like on my performance review too, but I'm not sure what to do."*  
> <span class="qm">—— Sherwin Wu · [41:19]</span> ^q8

> <span class="qz">我的一般建议，我给人们这个建议已经有一段时间了，我认为今天仍然适用，那就是确保你是为模型的发展方向而构建，而不是为它们今天的状态而构建。</span>  
> *My general advice, and I've been giving this to people for a while and I think it's still true today is make sure you're building for where the models are going and not where they are today.*  
> <span class="qm">—— Sherwin Wu · [49:08]</span> ^q9

> <span class="qz">在软件工程中，独创性在于偏离，但世界上正在做的很多工作实际上只是运行这些程序和运营。</span>  
> *In software engineering, the ingenuity is in deviating, but a lot of the work being done in the world is actually just running through these procedures and operations.*  
> <span class="qm">—— Sherwin Wu · [55:14]</span> ^q10
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
  // 故再兜一条 history.length>1(站内点进必有返回历史)。命中「直开」给 body 打 .pd-direct,CSS 切显隐。
  function direct(){
    var ref = document.referrer || '';
    var fromSite = (ref.indexOf(location.origin) === 0) || history.length > 1;
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
