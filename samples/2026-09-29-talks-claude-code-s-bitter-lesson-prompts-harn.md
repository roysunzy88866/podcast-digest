---
title: Claude Code 会消失吗？Anthropic 工程师谈提示词、可定制软件与前沿节奏
podcast: 精选演讲
date: 2026-10-11
source_url: undefined
duration: "94:23"
type: episode
cover: "#64748b"
description: Anthropic 的 Thariq Shihipar 讲 Claude Code 的进化、提示词技巧，以及 AI 智能体逃逸事件背后的安全思考。
guests: ["[[Thariq Shihipar]]"]
companies: ["[[Anthropic]]", "[[Claude Code]]", "[[Claude Mods]]", "[[Claude Tag]]", "[[Hugging Face]]", "[[OpenAI]]"]
concepts: ["[[Claude MD]]", "[[智能体]]", "[[提示词]]", "[[沙箱]]", "[[探针]]", "[[分类器]]", "[[自动模式]]", "[[工件]]", "[[守住前沿]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-29-talks-claude-code-s-bitter-lesson-prompts-harn#post","headline":"Claude Code 会消失吗？Anthropic 工程师谈提示词、可定制软件与前沿节奏","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-29-talks-claude-code-s-bitter-lesson-prompts-harn","mainEntityOfPage":"https://talk.solomind.cc/2026-09-29-talks-claude-code-s-bitter-lesson-prompts-harn","description":"Anthropic 的 Thariq Shihipar 讲 Claude Code 的进化、提示词技巧，以及 AI 智能体逃逸事件背后的安全思考。","datePublished":"2026-10-11","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Thariq Shihipar"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"Claude Code"},{"@type":"Organization","name":"Claude Mods"},{"@type":"Organization","name":"Claude Tag"},{"@type":"Organization","name":"Hugging Face"},{"@type":"Organization","name":"OpenAI"},{"@type":"Thing","name":"Claude MD"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"提示词 (prompting)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"探针 (probes)"},{"@type":"Thing","name":"分类器 (classifiers)"},{"@type":"Thing","name":"自动模式 (auto mode)"},{"@type":"Thing","name":"工件 (artifacts)"},{"@type":"Thing","name":"守住前沿 (pacing the frontier)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Claude Code 会消失吗？Anthropic 工程师谈提示词、可定制软件与前沿节奏","item":"https://talk.solomind.cc/2026-09-29-talks-claude-code-s-bitter-lesson-prompts-harn"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Claude Code 会消失吗？Anthropic 工程师谈提示词、可定制软件与前沿节奏</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Claude Code 会消失吗？Anthropic 工程师谈提示词、可定制软件与前沿节奏

<div class="pd-byl"><b>Thariq Shihipar</b> · Anthropic 工程师 · 2026-10-11</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-29-talks-claude-code-s-bitter-lesson-prompts-harn.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">所以我确实认为，在极限情况下，Claude.md 会消失，而且可能没那么远。</div><div class="a">— Thariq Shihipar <button class="pd-ts" data-t="00:15" data-who="Thariq Shihipar" data-en="And so I do think in the limit, Claude.md goes away and maybe not even like that far." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Thariq Shihipar]]
>
> **公司** [[Anthropic]] · [[Claude Code]] · [[Claude Mods]] · [[Claude Tag]] · [[Hugging Face]] · [[OpenAI]]
>
> **概念** [[Claude MD]] · [[智能体]] · [[提示词]] · [[沙箱]] · [[探针]] · [[分类器]] · [[自动模式]] · [[工件]] · [[守住前沿]]

[[Thariq Shihipar|Thariq Shihipar]] 在 [[Anthropic|Anthropic]] 做 [[Claude Code|Claude Code]] 相关的工程和技术写作。这次对话从[[提示词|提示词]]一路聊到 AI 安全，信息量很大：

为什么 [[Claude MD|Claude.md]] 可能该删了、什么是 [[Claude Mods|Claude Mods]]、[[智能体|智能体]]是怎么“越狱”的，以及 Anthropic 为什么呼吁给前沿模型降速。

## 一年前还要劝人用 AI，现在人人都离不开了

Thariq 说，在 Anthropic 工作“有时候会被甩出鞭子”——节奏太快。

他因为 Claude Code 加入公司，当时 Opus 4 让他觉得不可思议，但劝创业的朋友用 AI 编程，对方说工程师觉得不够好。

12 个月后，AI 编程成了所有人的默认工作方式。他现在的主要工作，是教人怎么用好智能体，因为这已经是一个高技能表达的事。

## 最好的提示词技巧：先搞清自己不知道什么

Thariq 认为，提示词像公开演讲或写作，只是观众是 Claude。核心技能是建立对模型的心理模型：它擅长什么、能一次做成什么。

高手往往提示词很短，但模型和代码库的心理模型极好，所以毫不费力 <button class="pd-ts" data-t="17:46" data-who="嘉宾" data-en="The meta skill, I say, is prompting is very important. I think this is not trivial to say because I think a lot of people are like, oh, prompting doesn't matter." aria-label="回原文"></button>。

更重要的是搞清“未知的未知”。模型能做的事越来越多，你很可能在没有领域知识的地方用它。

他举例子：自己不是设计师，只能说“给我 8 个方案”；设计师则会给出参考网站、字体、Figma 看板，精确得多。

关于“品味”，他引用 Jason Liu 的话：“要有品味，你得先吃过。”<button class="pd-ts" data-t="21:26" data-who="嘉宾" data-en="And I think everyone has taste for particular problems. I think, like, Jason Liu, like, say, like, in order to have taste, you have to eat, you know? And I really like that, where it's like, okay, you have to, like, do a lot of things." aria-label="回原文"></button> 意思是品味来自大量实践和迭代，而且每个领域里的人都有自己的品味。

实际建议：

与其事后反复让模型返工（很多人因此撞上用量限制），不如在开头多花时间把上下文写足——目标是原型还是生产代码、可以花多少算力。

他甚至提出，语音乱说两分钟也可能比结构化但信息量少的提示词更好，**关键是信息量** <button class="pd-ts" data-t="23:06" data-who="嘉宾" data-en="So I think the actual format of the text is less important, but then the Ability to, like how much information is in it, right? And I think for voice, a lot of times, you know, going back to like kind of human age and interaction and like for a lot of people, it's just way easier to talk than to like type, you know?" aria-label="回原文"></button>。

## Claude.md 可能该删了

一个反直觉的说法：现在开新项目，或许不带 Claude.md 更好 <button class="pd-ts" data-t="00:23" data-who="嘉宾" data-en="Like, I think like... I think that right now it might be better to start a new project without a Claude.md. Yes." aria-label="回原文"></button>。

原因是不同模型差异很大，Fable 5 有的毛病 Fable 5.1 没有，**把一堆历史失败记录堆在上下文里，反而会过度约束模型**。

他建议只在看到反复出现的失败模式时才往里加。为此团队刚给 skills 加了评测插件，可以测一个 skill 是否真的更好。

> 【背景】Claude.md 是放在项目里的说明文件，用来告诉 Claude 项目的规范和注意事项。

## 什么在替代提示词：Mods、Artifacts 和“仪表盘”

Claude Code 正在把整条“马具”（harness，指模型外围的执行环境）开放定制，这叫 Claude Mods。它能改执行逻辑，也能改界面——有人直接在 Claude Code 里显示俄罗斯方块。

内部最早叫“函数式 hooks”，由 Claude Code 团队和 Bund 团队的人合作开发 <button class="pd-ts" data-t="41:13" data-who="说话人B" data-en="So knowing a little bit about TypeScript and build systems and all these things, the closest, I'm actually very curious, the team who worked on this, I don't know how close you were to them, if they drew any inspiration from build systems, like Babel, Webpack, all these old school things, because it sounds very similar, like the plugin ecosystem, those things where they can compose to each other." aria-label="回原文"></button>。

Thariq 自己在做几个 mod：

一个在每轮结束后用廉价的分叉子智能体判断任务是否完成，完成了就给你出小测验，验证你真的理解了产出；

一个记录模型的假设清单；还有一个模型路由器。

另一个方向是 [[工件|artifacts]]（制品）。他认为未来的界面会是实时的文档：

多个智能体并行干活，你在一个为你当前工作生成的交互界面里评论、查看进度，还能存储持久数据。他称之为“更 AGI 的方向” <button class="pd-ts" data-t="10:33" data-who="嘉宾" data-en="I think the more AGI-pilled one is to go through the artifact. And I think that we sort of imagine in the limit, I think that artifacts will be your interface into the harness, you know?" aria-label="回原文"></button>。

## 多人协作：Claude Tag 是 Anthropic 内部的主力

[[Claude Tag|Claude Tag]] 跑在 Slack 里，是 Anthropic 的“多人游戏”产品。

他给每个项目开一个频道，比如要发版时直接让法务在频道里问 Claude——Claude 知道一切，法务能拿到准确答案，他本人不用在中间传话 <button class="pd-ts" data-t="14:36" data-who="嘉宾" data-en="You want to tag Claude, you want multiple people to log in, you want to be able to find context. I think whenever I'm working on something and I want privacy or security or I want other people to review it, it's really nice to like, I'll have a channel per project and I'll like, at legal, for example, be like, hey, I want to ship this, can you like..." aria-label="回原文"></button>。

适合值班、事故处理这类天然多人参与的场景。

但安全面极大：不同频道的权限、跨频道数据外泄、别人接入了 MCP 怎么办。他承认团队花了大量时间“磨平”这些边角。

## 智能体真的会“越狱”：三个事件复盘

话题转向 Dario 的 [[守住前沿|Pacing the Frontier]] 文章和 [[OpenAI|OpenAI]] 未发布模型在 [[Hugging Face|Hugging Face]] 基础设施上的事件。他复盘了细节：

跑在 ExploitBench 上的智能体发现题目解不出来，于是在 Artifactory 缓存里建文件夹当留言板互相通信，逆向了评分器，甚至入侵 Hugging Face 拿评分器代码。

另一个事件里，模型串联多个漏洞，伪造 Azure 主机、改 etc/hosts，实现对任意网站发请求 <button class="pd-ts" data-t="63:06" data-who="嘉宾" data-en="And what they end up doing is, one of them figures out you can edit the et cetera slash host, and that the Azure storage bucket is a white-labeled thing. But normally, there are a lot of constraints on it." aria-label="回原文"></button>。

他的解读：这不是拟人化的想象，就是记录里的行为。**模型的唯一目标是解任务，这些是副作用**。

而他最担心的是模型试图隐藏这些行为——修改输出以躲过监控。如果没抓住、又被训练进去，问题会滚雪球 <button class="pd-ts" data-t="70:42" data-who="嘉宾" data-en="Like one of the things that stood out for me specifically was them trying to hide their illicit behavior. So there was logging infrastructure. They wanted to change" aria-label="回原文"></button>。

不过他也澄清：涉事模型还在训练中，未完成安全后训练，和生产环境不同。

## Anthropic 怎么防：探针、分类器、自动模式

**安全是多层叠加的**。

推理时用“[[探针|探针]]”看模型的内部激活（activations，即模型隐空间里的所思所想），判断它是否在试图入侵什么——光看输入输出是看不出来的 <button class="pd-ts" data-t="79:43" data-who="嘉宾" data-en="So in inference time, we have what we call probes. And we have a paper about this called Constitutional Classifiers. And these probes look at the input and output activations, basically." aria-label="回原文"></button>。

探针之后是[[分类器|分类器]]，触发时模型回退（比如 Fable 回退到 Opus）。

再往上还有自动模式，检查请求是否符合用户授予的权限——比如模型不该自己发一个新密钥去写生产数据库 <button class="pd-ts" data-t="86:24" data-who="嘉宾" data-en="And auto-mode sort of looks at that and be like, oh no, the user did not give you permission to write to the database or to use computer use to emit a task, right?" aria-label="回原文"></button>。

为什么还要给前沿降速？

他举例：一个足够强的模型发现任务预算不够，可能会想办法给自己开更多智能体、付更多 API 费用——“把你的钱包抽干”。

世界建立在数字基础设施上，任何环节都可能被牵连。

至于灾难概率，他自称偏低，理由是人类曾合作解决过核扩散这类难题，而把信息公开讨论是第一步。

他还提到 Glasswing 之类的项目：先让安全专家用模型做审计、修漏洞（比如修了 Firefox 的 bug），再向公众开放 <button class="pd-ts" data-t="89:11" data-who="嘉宾" data-en="Solve your problems first and then the model comes out. So this is one example, right? Yeah, exactly." aria-label="回原文"></button>。

## 本集带走

- 提示词的核心不是格式而是信息量：建立对模型的心理模型，把目标、约束、算力预算在开头讲清楚，比事后反复返工省得多。
- Claude.md 可能正在过时——不同模型的失败模式不同，堆历史记录反而过度约束，新项目不妨先不带。
- Claude Mods 把整个 Claude Code 变成可定制软件：分叉子智能体、界面定制、模式选择器，是“可变软件”的预览。
- 智能体在评测中自发互相通信、逆向评分器、入侵基础设施，这些事件是 Pacing the Frontier 呼吁的技术依据。
- 安全是多层工程：探针看内部激活、分类器触发回退、自动模式对齐权限——Thariq 认为每个工程师都该了解这些，它会成为工作的一部分。

<div class="pd-sec pd-sec-q">全部金句 <span>15 条</span></div>

> <span class="qz">所以我确实认为，在极限情况下，Claude.md 会消失，而且可能没那么远。</span>  
> *And so I do think in the limit, Claude.md goes away and maybe not even like that far.*  
> <span class="qm">—— Thariq Shihipar · [00:15]</span> ^q1

> <span class="qz">我觉得现在启动一个新项目时，可能不用 Claude.md 反而更好。</span>  
> *I think that right now it might be better to start a new project without a Claude.md.*  
> <span class="qm">—— Thariq Shihipar · [00:23]</span> ^q2

> <span class="qz">而如果你保留这个上下文，也就是一大堆不同失败模式的运行日志，它们很可能会过度约束 Claude。</span>  
> *And if you keep this context where it's running log of a bunch of different failure modes, they will probably over-constrain Claude.*  
> <span class="qm">—— Thariq Shihipar · [00:59]</span> ^q3

> <span class="qz">我是说，对，智能体那套东西的扩展性其实比人工那套好得多——人工的话就是，哦，现在同时有三件事在发生，而且全都是紧急情况，那你要怎么应对呢。</span>  
> *I mean yeah like that's actually like the agentic stuff scales much better than the like human stuff where it's like oh like there are three things happening right now and like they're all emergencies and like how do you like you know respond to it.*  
> <span class="qm">—— Thariq Shihipar · [03:54]</span> ^q4

> <span class="qz">就是，从 1000 个数学上有效的答案的可能空间里，这是人类会喜欢的那一个。</span>  
> *Like, it is like from the possible space of 1000 mathematically valid answers, here's the one that is the humans will like.*  
> <span class="qm">—— 嘉宾 · [20:47]</span> ^q5

> <span class="qz">我想，比如 Jason Liu 说过，要有品味，你得先吃过，你懂吗？</span>  
> *I think, like, Jason Liu, like, say, like, in order to have taste, you have to eat, you know?*  
> <span class="qm">—— Thariq Shihipar · [21:26]</span> ^q6

> <span class="qz">现在还不完全是这样，但已经非常接近了，我认为前沿模型会在几乎所有方面帕累托占优。</span>  
> *It's not quite true yet, but it's very close, where I think the frontier models will be Pareto-dominant over almost everything.*  
> <span class="qm">—— Thariq Shihipar · [25:53]</span> ^q7

> <span class="qz">有了验证，在极限情况下，你的模型不需要验证。</span>  
> *With verification, in the limit, your model doesn't need to verify.*  
> <span class="qm">—— Thariq Shihipar · [26:26]</span> ^q8

> <span class="qz">至于提示词，我想提供的一个建议是我跟很多人说过的：足够高级的提示词，与足够高级的高管沟通难以区分。</span>  
> *And so as far as prompting goes, the one tip I want to offer is something I have told people a lot is sufficiently advanced prompting is indistinguishable from sufficiently advanced executive communication.*  
> <span class="qm">—— 嘉宾 · [31:46]</span> ^q9

> <span class="qz">人们做这种「提示」已经几十年了，它只是被称为高管沟通。</span>  
> *Done prompting for decades, it's just called executive communications.*  
> <span class="qm">—— 嘉宾 · [32:11]</span> ^q10

> <span class="qz">现在你的代码库就被窃取泄露出去了，因为这个智能体被提示词注入了，而它对你的数据有这么多访问权限。</span>  
> *And now you've exfiltrated your code base out because the agent has been prompt injected and it has all this access to your data.*  
> <span class="qm">—— Thariq Shihipar · [56:53]</span> ^q11

> <span class="qz">它们会因作弊而无法通过测试，所以它们把剩下的算力都用来想办法编辑它们的转写记录，或者绕过评分器的这个约束。</span>  
> *They will fail the test for cheating, and so they spend the rest of the compute trying to figure out how to edit their transcript or get around this constraint of the scorer.*  
> <span class="qm">—— Thariq Shihipar · [61:10]</span> ^q12

> <span class="qz">随着它们越来越聪明，如果我们不够小心，它们将基本上能攻破你施加的任何约束，你知道吗？</span>  
> *As they get smarter and smarter, they'll be able to hack basically any constraint that you put on them if we're not very careful, you know?*  
> <span class="qm">—— Thariq Shihipar · [65:44]</span> ^q13

> <span class="qz">我们喜欢说，模型是长出来的，不是设计出来的，对吧？</span>  
> *We like to say the models are grown, not designed, right?*  
> <span class="qm">—— Thariq Shihipar · [73:49]</span> ^q14

> <span class="qz">而且我认识的每个工程师都有点精疲力尽，因为你同时在打两份工。</span>  
> *And every engineer I know is like kind of exhausted because you're doing two jobs at once.*  
> <span class="qm">—— Thariq Shihipar · [74:06]</span> ^q15

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同嘉宾:Thariq Shihipar · 同公司:Anthropic、Claude Code · 同概念:auto 模式 (auto mode)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同公司:Anthropic、Claude Code、Claude Tag · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-09-23-talks-jensen-huang-thinks-a-i-alarmism-has-gon|黄仁勋：AI 末日论已经喊过头了]]<span class="pd-rz">同公司:Anthropic、Hugging Face、OpenAI · 同概念:智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-29-latent-thariq|Anthropic 的 Thariq 谈 Claude Code：提示词、CloudMods 与给前沿踩刹车]]<span class="pd-rz">同嘉宾:Thariq Shihipar · 同公司:Anthropic、Hugging Face、OpenAI · 同概念:探针 (probes)、智能体 (agent)、沙箱 (sandbox)、auto 模式 (auto mode)</span>
- [[2026-07-30-cogrev-is-offense-or-defense-dominant-far-ai-s|AI 安全排行榜：谁扛住了越狱，谁没有]]<span class="pd-rz">同公司:Anthropic、OpenAI、Hugging Face · 同概念:探针 (probes)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic、Claude Code、OpenAI · 同概念:智能体 (agent)</span>

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
