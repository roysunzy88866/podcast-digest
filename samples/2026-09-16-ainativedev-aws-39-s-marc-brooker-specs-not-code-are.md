---
title: AWS 杰出工程师：智能体时代，难的不是写代码，是写规格
podcast: The AI-Native Dev
date: 2026-09-17
source_url: undefined
duration: "56:48"
type: episode
cover: "#64748b"
image: "/covers/2026-09-16-ainativedev-aws-39-s-marc-brooker-specs-not-code-are.jpg"
description: AWS VP 兼杰出工程师 Marc Brooker 谈智能体时代的 on call、复盘与边界：难的部分正从写代码移向写规格。
host: "[[Simon Maple]]"
guests: ["[[Marc Brooker]]"]
companies: ["[[AWS]]", "[[Strands]]", "[[Agent Core]]", "[[Dogwood]]"]
concepts: ["[[智能体]]", "[[on call]]", "[[事后分析]]", "[[智能体政策]]", "[[规范]]", "[[Oracle]]", "[[测试]]", "[[智能体记忆]]", "[[RAG]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-09-16-ainativedev-aws-39-s-marc-brooker-specs-not-code-are.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-16-ainativedev-aws-39-s-marc-brooker-specs-not-code-are#post","headline":"AWS 杰出工程师：智能体时代，难的不是写代码，是写规格","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-16-ainativedev-aws-39-s-marc-brooker-specs-not-code-are","mainEntityOfPage":"https://talk.solomind.cc/2026-09-16-ainativedev-aws-39-s-marc-brooker-specs-not-code-are","description":"AWS VP 兼杰出工程师 Marc Brooker 谈智能体时代的 on call、复盘与边界：难的部分正从写代码移向写规格。","datePublished":"2026-09-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-16-ainativedev-aws-39-s-marc-brooker-specs-not-code-are.jpg","about":[{"@type":"Person","name":"Simon Maple"},{"@type":"Person","name":"Marc Brooker"},{"@type":"Organization","name":"AWS"},{"@type":"Organization","name":"Strands"},{"@type":"Organization","name":"Agent Core"},{"@type":"Organization","name":"Dogwood"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"on call"},{"@type":"Thing","name":"事后分析 (postmortem)"},{"@type":"Thing","name":"智能体政策 (agentic policy)"},{"@type":"Thing","name":"规范 (specification)"},{"@type":"Thing","name":"Oracle"},{"@type":"Thing","name":"测试 (testing)"},{"@type":"Thing","name":"智能体记忆 (agentic memory)"},{"@type":"Thing","name":"RAG"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AWS 杰出工程师：智能体时代，难的不是写代码，是写规格","item":"https://talk.solomind.cc/2026-09-16-ainativedev-aws-39-s-marc-brooker-specs-not-code-are"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AWS 杰出工程师：智能体时代，难的不是写代码，是写规格</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AWS 杰出工程师：智能体时代，难的不是写代码，是写规格

<div class="pd-byl"><b>Marc Brooker</b> · AWS 杰出工程师 · 2026-09-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-16-ainativedev-aws-39-s-marc-brooker-specs-not-code-are.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们从几十年来对心理学、运营和操作员的研究中知道的一件事是：人类是非常糟糕的监督者。</div><div class="a">— Marc Brooker <button class="pd-ts" data-t="25:20" data-who="Marc Brooker" data-en="Well, one of the things that we know from you know decades of research into psychology and operations and operators is that humans are really bad supervisors." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Marc Brooker]] · [[Simon Maple]]
>
> **公司** [[AWS]] · [[Strands]] · [[Agent Core]] · [[Dogwood]]
>
> **概念** [[智能体]] · [[on call]] · [[事后分析]] · [[智能体政策]] · [[规范]] · [[Oracle]] · [[测试]] · [[智能体记忆]] · [[RAG]]

这一集的主角是 [[Marc Brooker|Marc Brooker]]——他在 [[AWS|AWS]] 待了 18 年，现在是 VP 兼杰出工程师，最近几年专注[[智能体|智能体]] AI 的基础设施，深度参与了 AWS [[Agent Core|Agent Core]](一套在云端构建智能体的工具套件)，并负责开源智能体框架 [[Strands|Strands]]。而开场最有分量的一句话来自主持人的提问背景：他做过 15 年 [[on call|on call]](生产系统值班)，读过上万行级别的 3000 到 4000 份[[事后分析|复盘报告]](postmortem,事故后的分析文档)。一个写了半辈子底层系统的人，怎么看智能体接管软件开发的未来？

## on call 不会被取代，但值班的内容在变

Brooker 的判断是：机械重复的部分会被自动化掉，这不是新鲜事。15 年前，单台主机故障还会把人呼叫起来，后来 autoscaling(自动扩缩容)和负载均衡器健康检查替我们把这些处理掉了。AI 正在做同一件事——日志抓取、钻取指标这类日常调查，AWS 的 DevOps 智能体已经做得很棒 <button class="pd-ts" data-t="09:04" data-who="Marc Brooker" data-en="And so we automated those away. And we're seeing exactly the same thing with with AI, with the basic um the basic investigations of on-call, the the log scraping, the diving into metrics and so on." aria-label="回原文"></button>。

剩下的是真正有意思的推理：为什么系统表现成这样？我们在大规模故障里看到了什么？

自动化今天还回答不了这些问题 <button class="pd-ts" data-t="00:26" data-who="Marc Brooker" data-en="With the basic investigations of on call, the the log scraping, the diving into metrics and so on, you know, if you look at something like AWSS DevOps agent, it's great at doing that kind of automation of, let's say, the more day-to-day aspects of on-call." aria-label="回原文"></button>。主持人的愿景是：凌晨 3 点被叫醒时，智能体已经翻完了日志、找出了可能的根因，把决策所需的信息摆在面前——这正是行业正在逼近的形态。

## 4000 份复盘教会他的事

读几千份复盘，最大的收获是「一种深深的谦卑感」：工程师天性乐观，这是好事，但看过系统怎么失败之后，你会带着「我知道这肯定会出问题，只是不知道怎么出、什么时候出」的心态写代码 <button class="pd-ts" data-t="10:53" data-who="Marc Brooker" data-en="So as a typical developer trying to build, what what did the postmortems really open up for you? Well, one of them is a deep sense of humility. Uh you know, as as engineers, we uh we tend to be optimistic, which is great." aria-label="回原文"></button>。

一个具体的例子是亚稳态失效(metastable failure):大系统出事宕机后，直接原因修好了，系统却卡在稳定的宕机状态里起不来。理解这类失效的唯一途径，就是盯着真实事故问：是什么把系统踢进这种状态？

是什么让它起不来？是什么最终带来了恢复？<button class="pd-ts" data-t="12:24" data-who="Marc Brooker" data-en="And I think a lot of our understanding of that, and certainly personally a lot of my understanding of that, has been come come from looking at real-world incidents, looking at when that happens, and then analyzing the dynamics of the system during those times." aria-label="回原文"></button> 这些知识没法纯靠理论推出来。

智能体能不能学复盘？Brooker 说非常现实，而且就是当前前沿正在发生的。路径有四条：把复盘放进训练集；给智能体一个语义搜索工具(「给我看类似这样的事故，当时是怎么恢复的」)；让智能体写自己的记忆(「试了 X 没用，试了 Y 成功了」)；最有趣的是程序性记忆——智能体把自己走过的每一步编码成一段代码、做成工具存起来，下次直接拿来用 <button class="pd-ts" data-t="15:17" data-who="Marc Brooker" data-en="Increasingly, agents are also seeing, hey, I did this step and this step and this step. I could encode all of those into a piece of code and build myself a tool and put that tool in my memory, this kind of procedural memory, um, and and remember that and just pull that off the shelf when I need it." aria-label="回原文"></button>。

更深一层，Amazon 一直坚持「谁构建、谁值班」，就是为了让生产经验直接流回开发。Brooker 押注的是：未来的编程智能体，也能和运维智能体以完全相同的方式从生产经验中学习——共享记忆、共享工具，甚至请开发智能体当专家顾问来评审软件设计。但他说，行业在这条路上，比优化单个部件要早期得多 <button class="pd-ts" data-t="17:16" data-who="Marc Brooker" data-en="And so when we get into the agent world, what we want is that our coding agents, our development agents, our software building agents, are learning from production experience in exactly the same way that uh operations automation agents are." aria-label="回原文"></button>。

## 给智能体立规矩：确定性的边界

客户最常见的痛苦是：demo 做得很炫，董事会很兴奋，但没人敢让它进生产——怎么让客户信任一个代表他们干活的智能体？<button class="pd-ts" data-t="21:15" data-who="Marc Brooker" data-en="Um what I will say is a lot of the you know, my focus here is on what I'm hearing from from customers uh and what I'm hearing from from developers. And one of the very common themes that I hear from customers is um, hey, we built this awesome agent." aria-label="回原文"></button>

Brooker 的答案是「[[智能体政策|智能体政策]]」：清晰、确定性地定义智能体能做什么、不能做什么、能按什么顺序做。传统授权语言(把人类权限管起来的那套)不够用，因为人靠判断力补足了规则管不到的地方，智能体没有。所以 AWS 刚发布了 [[Dogwood|Dogwood]],一种专门语言，用数学上的确定性描述智能体的行为边界 <button class="pd-ts" data-t="22:18" data-who="Marc Brooker" data-en="You know, what of that belongs to the environment and the harness and uh and the containment of the agent versus what of that belongs in the prompt, what uh tool descriptions, etc." aria-label="回原文"></button>。

这里有个反直觉的洞见：让人类盯着智能体、坏事发生时按红色按钮，是行不通的。几十年心理学和运营研究证明，人类是非常糟糕的监督者 <button class="pd-ts" data-t="25:20" data-who="Marc Brooker" data-en="Yeah. Well, one of the things that we know from you know decades of research into psychology and operations and operators is that humans are really bad supervisors." aria-label="回原文"></button>。

80 年代的经典论文《自动化的讽刺》就指出：系统越好，失效模式越怪异越罕见，人类监督者越难识别和正确反应。所以唯一的出路是把人从回路里拉出来——别让人类在每个代码生成任务后说「是、是、是」，因为根本没人会真的那么干 <button class="pd-ts" data-t="26:08" data-who="Marc Brooker" data-en="And so I think the only solution to this is that autonomy, right? Pull the human out of the loop, make them not watch the loop go round and push the button when something bad happens." aria-label="回原文"></button>。

那边界从哪来？三种方式：把常识编码进策略(智能体只该在自己工作的仓库里做 push,跑去别的仓库 push 多半是坏的)；自然语言转策略(「它可以读我硬盘上任何东西，除了机密文档文件夹」被自动可靠地转成策略)；以及走遍公司，把现有规范编码成策略。直接写策略语言的会是少数，绝大多数人在自然语言层面说「什么是好的」。

政策来源大约是 50-50:一半来自组织和法务、安全团队(客户内容怎么处理，每个开发者的智能体都必须遵守)，一半来自个人(我的智能体能不能删我文档文件夹里的文件？安全团队不在乎，我在乎)。而且政策必须动态、情境化——写后端 Rust 时可以规定「Clippy(代码检查工具)不满意不许提交」，写 15 分钟就扔的 demo 原型时就什么都不用设 <button class="pd-ts" data-t="30:31" data-who="Marc Brooker" data-en="Um and, you know, especially as we get down to individual developers, we know that across the industry, and and and certainly, you know, even within teams and within organizations, development practices vary." aria-label="回原文"></button>。

## 难的部分是规格，测试成了最重要的环节

Brooker 提出的「智能体软件开发假说」核心是：软件构建中难的部分是[[规范|规格构建]](specification)——把你要的东西描述得足够完整。一旦规格写下来，可靠、高效实现的构建和维护，会随着时间推移完全自动化 <button class="pd-ts" data-t="33:14" data-who="Marc Brooker" data-en="Um and it describing what you want in sufficient detail that it is, let's say, a complete description of what you want. Once you have that specification, once you have that what you want written down, my belief is that we're going to see the building and maintenance of reliable, efficient implementations of that software become over time entirely automated." aria-label="回原文"></button>。先从封闭规格开始(「实现这种文件格式」)，再扩展到更大、有更多 UI 和复杂交互的系统。

那难的部分只是被搬家了吗？主持人问得尖锐。

Brooker 承认：创建 oracle(判定「做出来的东西对不对」的标准)和规格，就是人类工作大量所在之处。实现 GZIP 这种东西可以完全形式化，给客户做 UI 就不行，得用更开放式的评估——生产指标、客户反馈、甚至对同一数据库引擎的两个实现做模糊[[测试|测试]]对比。

所以他下了个重磅判断：「在某种意义上，测试现在是软件开发中最重要的部分。它从来都不是大多数开发者眼中耀眼的东西，但现在，思考如何构建一个能判断这段软件好不好的测试，真的就处于软件开发的前沿。」<button class="pd-ts" data-t="35:07" data-who="Marc Brooker" data-en="I think that is where the you know where where a huge amount of the human the human work comes in is is creating those oracles, creating those specifications. Um and you know, in some sense uh testing uh is is now the most important part of software development." aria-label="回原文"></button> 他还嫌当前的规约驱动开发(如 Kiro 团队做的)混淆了声明式需求和实现细节——规格和测试应该聚焦「软件的输出什么样子算好」，而不是内部怎么实现；作为系统构建者，他不想关心用什么语言，他要的是伟大的决策被更自动地做出 <button class="pd-ts" data-t="39:34" data-who="Marc Brooker" data-en="Like there's still, oh well, you know, I want to build this in this language or for this kind of UI, or um and ultimately, um I don't want to care about those things as a system builder." aria-label="回原文"></button>。

## 一条清晰的个人边界：AI 能写我的代码，不能写我的博客

Brooker 至今不让 AI 写博客里的一个字，但很乐意让它写代码。他的解释是意图的区别：五年前他会说，大多数代码的目的是与人类沟通；而现在，随着人类退出代码层、进入规约层，「代码正越来越多地变成纯粹的实现载体，而不是沟通载体」<button class="pd-ts" data-t="40:56" data-who="Marc Brooker" data-en="And so I was always, you know, very big on comments, very big on naming things carefully, very big on writing code in a way that communicates especially the intent of the code." aria-label="回原文"></button>。

博客则不同，背后是一份社会契约：我花大量时间深入思考这些文字，读者花时间深入理解它们。「如果我用 Claude 五分钟写一篇博客，然后 1 万人各花 10 分钟读它，我投入的努力和读者投入的努力之间存在巨大的不对称——我认为那是不公平的。」<button class="pd-ts" data-t="41:50" data-who="Marc Brooker" data-en="Whereas if I get Claude to write a blog post for me in you know five minutes, and then let's say 10,000 people read it and they each take, you know, each spend 10 minutes reading it, there's this huge asymmetry between the amount of effort that I'm putting in and the amount of effort that my readers are putting in." aria-label="回原文"></button> 如果你想分享 AI 对某个想法的看法，那就做成互动的：把提示词发给我，我们一起追问——别落在那个尴尬的中间地带，去掉了人类的用心，又没加上互动性。

对工作文档他有一条实用的分界线：把 Claude 当扩写器(「把这个提示词变成六页文档」)是浪费读者时间；当上下文提供者(「加一段本周业务指标」)完全没问题——因为新信息是你提供的，形式和你本来会手动做的一模一样 <button class="pd-ts" data-t="45:09" data-who="Marc Brooker" data-en="I think for those, you know, kind of work documents, uh, you know, if I could get Claude to write succinctly, you know, just describe the context, pull in the business context and so on for me, I would feel quite um uh you know, feel quite comfortable with that." aria-label="回原文"></button>。至于个人博客，那是一件手艺活，他想留住它。

## 团队今天就能做的：把反馈信号做清晰

不同成熟度的团队该干的事不一样。刚起步的团队，别眼高手低：在 agents.md 文件里写下「什么是好的」，是人们现在会翻白眼但被证明非常有效的东西；「Clippy 满意并通过所有测试之前不许发布代码」这种门禁，开销极小、效果极大——很多团队却急着跳去做参数化记忆 <button class="pd-ts" data-t="48:19" data-who="Marc Brooker" data-en="Um and I think a lot of teams early on try and jump to the end and say, oh, I'm gonna do parametric memory or something, when you know you can't ship code until Clippy is happy with it and it passes all the tests, um, is a very effective thing with very little uh very little um overhead." aria-label="回原文"></button>。

往上走，关键是个体记忆解决不了的问题：智能体的记忆没法在团队间传播。所以现在流行「智能体 wiki」模式——让团队智能体维护一个小 wiki,记录「什么是好的」，在智能体之间共享；还有像 AWS Context 这样的工具，让智能体把环境上下文建成形式化图，连回记忆和文档，在整个组织范围共享。他特别提醒：人们嘲笑 [[RAG|RAG]](用语义搜索检索组织内部资料)过时了，「但底线是，让智能体对我组织中的信息进行语义搜索，仍然是一种非常强大的技术」<button class="pd-ts" data-t="50:23" data-who="Marc Brooker" data-en="And again, you know, people sort of roll their eyes at RAG and be like, oh, well, that's so 2004 or 2024. Um but the bottom line is that giving uh agent semantic search over the information in my organization is still a super powerful technique." aria-label="回原文"></button>。

## 为什么要给年轻人留梯子

给初级工程师的建议是：负责一个项目，和客户交谈，承担一个截止日期——这些恰恰是高级工程师过去常常把持的任务。他们该交出来吗？

Brooker 的回答是：必须交。「软件行业未来十年会在重要性和经济影响上大幅增长，但如果我们把梯子抽掉，让软件工程师群体变得越来越灰白，就不会有那种增长。

」<button class="pd-ts" data-t="52:31" data-who="Marc Brooker" data-en="Uh you know, I I I think the the software industry is gonna grow, you know, just a huge amount in importance and and and economic impact over the next decade. And and the bottom line is we're we're not going to do that growth, and we're not gonna have that growth if we pull up the ladder and and you know the the community of software engineers just gets grayer and grayer." aria-label="回原文"></button> 经验和深厚专长仍然极重要，但行业的成功取决于能不能把理论新鲜、实践空白的毕业生快速带上手。这将是未来组织的巨大差异化因素。而且这批 AI 原生的年轻人没有旧包袱，带来的是纯新的视角——连老手都该向他们学习。

## 本集带走

- **自动化分界线**：机械重复的 on call 调查(日志、指标)交给智能体，人类留给「为什么系统会这样」的深层推理。
- **让智能体学复盘有四条路**：进训练集、语义搜索复盘库、写自己的记忆、把走过的步骤固化成工具(程序性记忆)。
- **别靠人盯智能体**：人类是糟糕的监督者，系统越好越盯不住；用确定性的策略边界(如 Dogwood)把「什么算好」编码成围栏，来源一半组织、一半个人，且要随任务动态调整。
- **把功力花在规格和测试上**：难的部分正从实现移向「写清你要什么 + 定义判定对错的标准」；测试现在是软件开发最前沿的部分。
- **用 AI 的分寸**：当上下文提供者可以，当扩写器不行；文字背后是作者与读者之间的努力对称契约。
- **反馈信号从最笨的开始**：agents.md + 测试门禁，再上共享的团队智能体 wiki 和组织级语义搜索，别一步跳到参数化记忆。

<div class="pd-sec pd-sec-q">全部金句 <span>14 条</span></div>

> <span class="qz">我们从几十年来对心理学、运营和操作员的研究中知道的一件事是：人类是非常糟糕的监督者。</span>  
> *Well, one of the things that we know from you know decades of research into psychology and operations and operators is that humans are really bad supervisors.*  
> <span class="qm">—— Marc Brooker · [25:20]</span> ^q1

> <span class="qz">但我认为，通过观察真实系统如何失败——包括我们自己的和全行业的系统——并真正试图提取出「是什么把系统踢进了这种状态」，我们学到的东西多得多。</span>  
> *But I think we've learned a huge amount more by looking at how real systems fail, both you know, our own and systems across the industry, and really trying to extract like, what was it that kicked the system into this state?*  
> <span class="qm">—— Marc Brooker · [12:30]</span> ^q2

> <span class="qz">智能体可以帮你深挖这些问题，帮你找到可能驱动客户那些感知的指标，但通常不太擅长真正理解这项工作的端到端上下文。</span>  
> *And so, you know, agents can help you dig into those and can help you find um uh find the uh the the metrics that might be driving those perceptions from customers or driving those anecdotes, um, but generally aren't as good at really understanding the end-to-end context of the work.*  
> <span class="qm">—— Marc Brooker · [19:28]</span> ^q3

> <span class="qz">我们的客户想要的，是一些能非常清晰、非常确定性地思考的方法：如何给智能体建一个盒子，说「我信任这个智能体做这件事、这件事和这件事，但它没有任何权限去做那些事」。</span>  
> *And what our customers are asking for is ways to think very clearly, very deterministically about how to build a box around agents and say, I'm gonna trust this agent to do this thing, this thing, and this thing, but it is not going to have any access to do you know these things.*  
> <span class="qm">—— Marc Brooker · [22:18]</span> ^q4

> <span class="qz">所以我认为唯一的解决方案就是自主性，对吧？把人类从回路中拉出来，让他们不用看着回路转圈、在坏事发生时按下按钮。</span>  
> *And so I think the only solution to this is that autonomy, right? Pull the human out of the loop, make them not watch the loop go round and push the button when something bad happens.*  
> <span class="qm">—— Marc Brooker · [26:05]</span> ^q5

> <span class="qz">但它本质上归结为这样一个想法：软件构建中难的部分，我要说是——规格构建。</span>  
> *Um but it essentially it comes down to this idea that the hard part of software building is um I'm gonna say specification building.*  
> <span class="qm">—— Marc Brooker · [32:43]</span> ^q6

> <span class="qz">一旦你有了那个规格、把想要的东西写下来，我的信念是：我们会看到，这套软件可靠、高效实现的构建和维护，会随着时间推移变得完全自动化。</span>  
> *Once you have that specification, once you have that what you want written down, my belief is that we're going to see the building and maintenance of reliable, efficient implementations of that software become over time entirely automated.*  
> <span class="qm">—— Marc Brooker · [33:14]</span> ^q7

> <span class="qz">而且你知道，在某种意义上，测试现在是软件开发中最重要的部分。</span>  
> *Um and you know, in some sense uh testing uh is is now the most important part of software development.*  
> <span class="qm">—— Marc Brooker · [35:07]</span> ^q8

> <span class="qz">我想要的是伟大的决策被做出——但是让伟大的决策被更自动地做出。</span>  
> *I I I want you know great decisions to be made, but great decisions to be made more automatically.*  
> <span class="qm">—— Marc Brooker · [39:34]</span> ^q9

> <span class="qz">我认为这已经改变了，并且在整个行业迅速改变：随着人类从代码层退出、进入规约层，随着大量编码工作变得完全自动化，代码正越来越多地变成纯粹的实现载体，而不是沟通载体。</span>  
> *I think that's changed and is very quickly changing across the industry as humans get out of that code level into more of that kind of specification level, as a lot of that coding becomes fully automated, is code is turning more and more into purely an implementation vehicle rather than a communication vehicle.*  
> <span class="qm">—— Marc Brooker · [40:56]</span> ^q10

> <span class="qz">而如果我用 Claude 五分钟为我写一篇博客文章，然后假设一万人来读、每人各花 10 分钟读它，那么我投入的努力和读者投入的努力之间就存在巨大的不对称。我认为那是不公平的。</span>  
> *Whereas if I get Claude to write a blog post for me in you know five minutes, and then let's say 10,000 people read it and they each take, you know, each spend 10 minutes reading it, there's this huge asymmetry between the amount of effort that I'm putting in and the amount of effort that my readers are putting in. And I think that is unfair.*  
> <span class="qm">—— Marc Brooker · [41:50]</span> ^q11

> <span class="qz">所以区别也许在于：如果你把 Claude 当扩写器用——「这是一个提示词，把它变成一份六页的文档」——我认为那是在浪费读者的时间；而如果你把 Claude 当上下文提供者用——比如「加一段本周业务指标」——我觉得那没问题。</span>  
> *And so maybe the distinction there is if you're using Claude as an expander, right, saying, here's a prompt, turn it into a six-page document, I think that's a waste of the reader's time. However, if you're using Claude as a context provider, right, like add a paragraph with the business metrics for this week, I think that's fine.*  
> <span class="qm">—— Marc Brooker · [45:09]</span> ^q12

> <span class="qz">而且很多团队早期会试图直接跳到最后，说「哦，我要做参数化记忆之类的」——而其实「Clippy 满意并通过所有测试之前不许发布代码」就是一件非常有效、开销非常小的事情。</span>  
> *Um and I think a lot of teams early on try and jump to the end and say, oh, I'm gonna do parametric memory or something, when you know you can't ship code until Clippy is happy with it and it passes all the tests, um, is a very effective thing with very little uh very little um overhead.*  
> <span class="qm">—— Marc Brooker · [47:53]</span> ^q13

> <span class="qz">底线是：如果我们把梯子抽掉、让软件工程师这个群体变得越来越灰白，我们就不会有那种增长。</span>  
> *And and the bottom line is we're we're not going to do that growth, and we're not gonna have that growth if we pull up the ladder and and you know the the community of software engineers just gets grayer and grayer.*  
> <span class="qm">—— Marc Brooker · [52:31]</span> ^q14

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-01-cogrev-write-change-recall-forget-mongodb-s-pet|数据库60年 vs 智能体18个月：MongoDB 谈检索与记忆]]<span class="pd-rz">同概念:RAG、智能体 (agent)、智能体记忆 (agentic memory)</span>
- [[2026-07-17-talks-every-company-should-have-a-brain-garry|用 Markdown 组建一支军队:Y Combinator 掌门人的 AI 原生公司蓝图]]<span class="pd-rz">同概念:RAG、智能体 (agent)</span>
- [[2026-07-24-talks-how-bridgewater-built-an-ai-analyst-that|桥水内部版 AI 分析师 PAT:把数小时研究压到几分钟]]<span class="pd-rz">同概念:RAG、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同公司:AWS · 同概念:智能体 (agent)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:智能体 (agent)、oracle（判定标准） (oracle)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:智能体 (agent)、规格构建 (specification)</span>

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
