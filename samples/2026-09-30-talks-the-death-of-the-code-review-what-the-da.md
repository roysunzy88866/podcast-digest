---
title: 代码评审未死：人类从引擎变飞行员
podcast: 精选演讲
date: 2026-10-03
source_url: undefined
duration: "24:19"
type: episode
cover: "#64748b"
description: NPM 联合创始人、Arise AI 开发者关系负责人 Laurie 梳理行业如何应对 AI 时代的代码评审瓶颈：评审正从人工逐行阅读变成系统工程。
guests: ["[[Laurie Voss]]"]
companies: ["[[GitHub]]", "[[Cursor]]", "[[OpenAI]]", "[[Anthropic]]", "[[Cognition]]", "[[Bun]]"]
concepts: ["[[代码审查]]", "[[智能体]]", "[[提示词注入]]", "[[基准测试]]", "[[误报]]", "[[生产环境]]"]
category: AI 编程
tags:
  - AI 编程
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-30-talks-the-death-of-the-code-review-what-the-da#post","headline":"代码评审未死：人类从引擎变飞行员","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-30-talks-the-death-of-the-code-review-what-the-da","mainEntityOfPage":"https://talk.solomind.cc/2026-09-30-talks-the-death-of-the-code-review-what-the-da","description":"NPM 联合创始人、Arise AI 开发者关系负责人 Laurie 梳理行业如何应对 AI 时代的代码评审瓶颈：评审正从人工逐行阅读变成系统工程。","datePublished":"2026-10-03","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Laurie Voss"},{"@type":"Organization","name":"GitHub"},{"@type":"Organization","name":"Cursor"},{"@type":"Organization","name":"OpenAI"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"Cognition"},{"@type":"Organization","name":"Bun"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"提示词注入 (prompt injection)"},{"@type":"Thing","name":"基准测试 (benchmark)"},{"@type":"Thing","name":"误报 (false positives)"},{"@type":"Thing","name":"生产环境 (production)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"代码评审未死：人类从引擎变飞行员","item":"https://talk.solomind.cc/2026-09-30-talks-the-death-of-the-code-review-what-the-da"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>代码评审未死：人类从引擎变飞行员</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 代码评审未死：人类从引擎变飞行员

<div class="pd-byl"><b>Laurie Voss</b> · Arise AI 开发者关系负责人 · 2026-10-03</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-30-talks-the-death-of-the-code-review-what-the-da.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">开启自主智能体的开发者多写了 741% 的代码，但实际发布的软件只多了 30%。</div><div class="a">— Laurie Voss <button class="pd-ts" data-t="01:47" data-who="Laurie Voss" data-en="The developers who turned on autonomous agents wrote 741% more code, but only 30% more software shipped." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Laurie Voss]]
>
> **公司** [[GitHub]] · [[Cursor]] · [[OpenAI]] · [[Anthropic]] · [[Cognition]] · [[Bun]]
>
> **概念** [[代码审查]] · [[智能体]] · [[提示词注入]] · [[基准测试]] · [[误报]] · [[生产环境]]

AI [[智能体|智能体]]让写代码的速度暴涨，但人类读代码的速度一分没变——这一集是 Arise AI 开发者关系负责人 Laurie(此前是 NPM Inc. 的联合创始人)在一次技术大会上，讲[[代码审查|代码评审]]怎么被 AI 重构。她甩出的第一个数字就很扎眼：三位经济学家追踪了超过 10 万名 [[GitHub|GitHub]] 开发者，开启自主智能体的开发者多写了 **741%** 的代码，但实际发布的软件只多了 **30%**——写代码快了近八倍，上线只多了三分之一，而研究者直言：评审就是瓶颈 <button class="pd-ts" data-t="01:47" data-who="Laurie" data-en="Recently, three economists tracked more than 100,000 GitHub developers, matched them against telemetry that showed exactly when each one started using AI. The developers who turned on autonomous agents wrote 741% more code, but only 30% more software shipped." aria-label="回原文"></button>。

## 「多评审」行不通，数字早就说了

一个自然的答案是让一部分人专职评审。但这行不通：二十年前 Cisco 的一项研究(10 个月、2500 次评审、320 万行代码)发现，评审者一次读超过 400 行代码就基本发现不了缺陷，一小时超过 450 行效率就断崖式下跌。算一下账：一个智能体提交的 1 万行 pull request(代码合并申请)，按这个速度要三四个工作日才能获得一次真正的人工评审——而这只是十几个并行智能体中的一个的产出 <button class="pd-ts" data-t="03:54" data-who="Laurie" data-en="They took 3.2 million lines of code. And the study says that reviewers stop finding defects effectively if they try to read more than 400 lines of code in one sitting and their effectiveness completely falls off a cliff if they try to review more than 450 lines of code in an hour." aria-label="回原文"></button>。

那跳过人类呢？[[OpenAI|OpenAI]] 今年 2 月公布了一个内部项目：从空仓库开始，三名工程师、五个月、约一百万行代码、1500 个合并的 pull request,全部由智能体编写，连「审查智能体的智能体」也是智能体写的。

他们的原话是：人类可以审查 pull request,但这不是必须的 <button class="pd-ts" data-t="05:50" data-who="Laurie" data-en="What they said was, humans may review pull requests but they are not required to. We've pushed almost all review effort towards being handled agent to agent. I think the interesting thing about the OpenAI experiment is that they did not tell us what the product did and they did not release an open source product saying, and this is how we did it and this is how you should do it, which suggests to me that there are still holes in that strategy." aria-label="回原文"></button>。但 Laurie 指出一个耐人寻味的细节：他们既没说这个产品是干什么的，也没开源方法论——说明这套策略仍有漏洞。

## 「测试通过」不等于「可合并」

问题出在：业界多年用「测试通过」当质量代理指标，而它不准。研究团队 Meter 今年 3 月请来四名开源项目维护者，审查那些已通过 Sweebench(一种代码能力[[基准测试|基准测试]])评分器的 PR——结果只有约一半真的够格合并，失败不在正确性，而在代码质量和悄悄破坏其他代码的改动 <button class="pd-ts" data-t="07:21" data-who="Laurie" data-en="And they got the open source reviewers to look at exactly the same PR and say, is it really good enough to merge? And it was only good enough to merge about half of the time." aria-label="回原文"></button>。[[Cognition|Cognition]](Devon 的开发商)今年 6 月发布了围绕「你会合并这个吗」构建的 Frontier Code 基准：同一模型，在 SweeBench Pro 上 88 分，在 Frontier Code 最难的部分只有 29 分，差了 51 分；GPT 5.5 在同一组测试上不到 6% <button class="pd-ts" data-t="08:44" data-who="Laurie" data-en="And what they found was that Fable 5, before it got pulled and then un-pulled, scores 88% on SweeBench Pro, but only 29% on the hardest slice of Frontier Code. So the same model on the same surface with the same job does 51 points less well if you're asking not does it pass the tests, but whether or not you would actually merge the result." aria-label="回原文"></button>。

投资人 Sarah Guo 点破了背后机制：编译器和测试套件是「免费的验证器」，凡是能廉价验证的东西，模型都能靠训练刷到超越为止。所以一旦有人写出可靠的「可合并性」标准，它会立刻变成前沿模型的训练信号——**谁写下了今天的评审标准，谁就是在书写明年的默认模型行为** <button class="pd-ts" data-t="10:18" data-who="Laurie" data-en="The moment somebody comes up with reliable tests for those, the big models will be trained on them. And whoever writes today's review standard is writing next year's default model behavior." aria-label="回原文"></button>。2024 年 OpenAI 用 Critic GPT(专挑模型所写代码 bug 的评审模型)已经验证过这条路：人机组合既胜过模型也胜过单独的人类，模型几乎立刻变好。

## 已经上线的自动化评审，长什么样

这不是纸上谈兵：GitHub 的 Copilot 评审员已完成 6000 万次评审，占 GitHub 全部代码评审的五分之一以上——已是全球最大代码托管平台上的主流默认 <button class="pd-ts" data-t="11:24" data-who="Laurie" data-en="GitHub is Copilot's reviewer has done 60 million reviews and now accounts for more than one in five code reviews on all of GitHub. So machine review of pull requests is the mainstream default on the world's largest code host." aria-label="回原文"></button>。[[Cursor|Cursor]] 公开了架构细节，里面全是实战经验：

- 第一版评审员对每个 diff 跑八轮评审、还打乱顺序反复跑，为的是过滤[[误报|误报]]——一个把好代码标成坏代码的评审员会被直接无视。北京大学团队独立验证了这招：多轮评审、保留一致结论，质量最多提升 44% <button class="pd-ts" data-t="12:22" data-who="Laurie" data-en="A team at Peking University tested the same idea independently. Run several review passes, keep what they agree on, and they found that it raised review quality by up to 44%." aria-label="回原文"></button>。
- 重建后他们最有趣的发现：模型倾向看着代码说「看起来不错，发布吧」——跟人类一个德行。他们不得不明说：**不要默认信任代码，要假设它有问题** <button class="pd-ts" data-t="12:54" data-who="Laurie" data-en="And my favorite detail from their rebuild was that they had to tell the model to be more suspicious of the code. The model tended to look at the code and say, well, that looks good to me, so ship it, which is exactly what a human would do in that situation." aria-label="回原文"></button>。
- 评审正与修复融合：Cursor 的评审员现在会自己生成修复智能体、写好补丁交回 diff 供人批准。

但所有这些厂商的成功指标都是同一个：有没有人类接受了我的答案？也就是说，**人还是要评审这些评审**。那能彻底去掉吗？

## 跳过人类的两次实验，代价都摆在台面上了

[[Anthropic|Anthropic]] 的 Nicholas Carlini 让 16 个智能体用 Rust 从零写了能编译 Linux 内核的 C 编译器，约 2000 个会话、全程无人审批——但审查代码、验证代码的系统全是他手工写的。用他自己的警告说：很容易看到测试通过就以为完事了，而很少真的完事 <button class="pd-ts" data-t="15:48" data-who="Laurie" data-en="It was automated testing with tests that took a human to write them. Carlini's own warning when he wrote about it was that it is easy to watch the tests pass and assume that the job is done and that it rarely is." aria-label="回原文"></button>。

[[Bun|Bun]](现为 Anthropic 一部分)六天把上百万行代码从 Zig 移植到 Rust,测试套件 99.8% 通过——但有人细查后发现移植代码里有 13,044 个 unsafe 块(Rust 中作者「断言」而非「证明」内存安全的地方)，同等规模的人类代码只有约 74 个，多了三个数量级。测试能验证公共接口行为，验证不了这 1.3 万个它从没设计过要找的隐患 <button class="pd-ts" data-t="16:43" data-who="Laurie" data-en="But there are some big caveats on that BUN experiment. Somebody looked carefully at the ported code and it has 13,044 unsafe blocks in a comparable human-written" aria-label="回原文"></button>。

最有分量的反悔来自 Dexter Horthy:他花了六个月到处讲「别评审代码，直接发布」，去年还在大会上公开这么宣传；今年 3 月他在台上收回：「我错了。请、请去读代码。

我们不读代码试了大约六个月，结局不好，不得不把系统的大部分拆掉重做。」<button class="pd-ts" data-t="19:01" data-who="Laurie" data-en="And in March this year, on stage, he took that back. He said, I was wrong. Please, please read the code." aria-label="回原文"></button>

## 人的角色没消失，是在往栈的上层走

Laurie 的结论：代码评审没死，但正在被重构为工程化系统，人类从逐行读代码的「引擎」变成「飞行员」。人类检查点存活在可预测的地方：正确性无法廉价检验处、爆炸半径大处、以及必须有人签字担责处 <button class="pd-ts" data-t="20:04" data-who="Laurie" data-en="It is moving around, but it is surviving in predictable places. One is where correctness isn't cheaply checkable. Another is where the blast radius is large." aria-label="回原文"></button>。

而且去掉人还有安全代价：Anthropic 自家的自动化安全审查器，readme 里明写着「未针对[[提示词注入|提示词注入]]攻击加固」——审查器能被它正在审查的代码说服而放弃结论。今年 3 月的研究复现了这一点：披着无害提交信息的漏洞代码骗过自动审查智能体的成功率是 88%,骗过人类的只有 35%。

**把人拿出去，你不只是失去一个审查者，是失去了那个难以被欺骗的东西** <button class="pd-ts" data-t="21:26" data-who="Laurie" data-en="The same attempts sent to a human reviewer passed only 35% of the time. So you take the human out of the loop, you don't just lose a reviewer, you lose the thing that was hard to fool." aria-label="回原文"></button>。更糟的是，领域连「怎么给评分者打分」都没共识——于是一旦合并前全是机器，[[生产环境|生产环境]]就成了最后一个屹立不倒的审查者：观察代码上线后实际做了什么 <button class="pd-ts" data-t="22:07" data-who="Laurie" data-en="Researchers disagree on how to review quality at all, which leaves one reviewer that you can't automate and you can't skip, which is production. Once the pre-merge review is all machines, watching what the code actually does becomes the last reviewer standing." aria-label="回原文"></button>。

## 本集带走

- **停止逐个审查 PR**:对 2026 年来说它是错误的抽象层级。把你的判断力投入更高层——审查系统、规则、评测集——把「好」的定义、公司上下文、领域知识编纂成代码，再让智能体在上面全力运转。
- **别把「测试通过」当「可合并」**：测试套件之外存在测试找不到的上下文(谁在依赖这个模块、没人承认的定时任务)，这些恰恰是评审的真正价值所在。
- **自动化评审的头号敌人是误报**：多轮评审、只保留一致结论是被反复验证有效的做法；并明确告诉模型「默认怀疑代码」。
- **跳过人类评审的实验，代价是已知的**：Carlini 的编译器靠的是人写的验证系统，Bun 的 Rust 里藏着 1.3 万个 unsafe 块，Dexter Horthy 公开收回了自己的主张。
- **机器评审有安全软肋**：自动审查器可被提示词注入骗过(88% vs 人类的 35%),安全敏感场景的人工关卡短期去不掉；上线后的生产行为观测，是合并前全机器化之后最后的人工检查点。

<div class="pd-sec pd-sec-q">全部金句 <span>17 条</span></div>

> <span class="qz">开启自主智能体的开发者多写了 741% 的代码，但实际发布的软件只多了 30%。</span>  
> *The developers who turned on autonomous agents wrote 741% more code, but only 30% more software shipped.*  
> <span class="qm">—— Laurie Voss · [01:47]</span> ^q1

> <span class="qz">该研究指出，评审者一次读超过 400 行代码就基本发现不了缺陷，一小时超过 450 行效率就完全断崖式下跌。</span>  
> *And the study says that reviewers stop finding defects effectively if they try to read more than 400 lines of code in one sitting and their effectiveness completely falls off a cliff if they try to review more than 450 lines of code in an hour.*  
> <span class="qm">—— Laurie Voss · [03:54]</span> ^q2

> <span class="qz">OpenClaw 的创造者 Peter Steinberger 说，你不应该再去提示编码智能体了，你应该去设计那些提示你的智能体的循环。</span>  
> *Peter Steinberger, who is the creator of OpenClaw, says that you shouldn't be prompting coding agents anymore, you should be designing the loops that prompt your agents.*  
> <span class="qm">—— Laurie Voss · [04:53]</span> ^q3

> <span class="qz">这里的赌注是，循环设计可以替代检查。</span>  
> *The bet there is that loop design substitutes for inspection.*  
> <span class="qm">—— Laurie Voss · [06:21]</span> ^q4

> <span class="qz">在她谈论这件事的文章里，她讲清楚了模型为什么在生成代码上进步得这么快——因为编译器是一个免费的验证器。</span>  
> *In the essay where she was talking about this, she made clear why models got so good so fast at generating code, and that is because a compiler is a free verifier.*  
> <span class="qm">—— Laurie Voss · [09:36]</span> ^q5

> <span class="qz">所以一个可合并性的基准，如果我们能做出来的话，不仅仅是一种度量，它会立刻成为前沿模型的训练信号——也就是可维护性、范围纪律、回归安全性这些。</span>  
> *So a benchmark of mergeability, if we could make one, wouldn't only be a measurement, it would immediately become a training signal for the frontier models, which means maintainability, scope, discipline, regression safety.*  
> <span class="qm">—— Laurie Voss · [09:59]</span> ^q6

> <span class="qz">谁写下了今天的评审标准，谁就是在书写明年的默认模型行为。</span>  
> *And whoever writes today's review standard is writing next year's default model behavior.*  
> <span class="qm">—— Laurie Voss · [10:18]</span> ^q7

> <span class="qz">所以对拉取请求的机器评审，已经是全球最大代码托管平台上的主流默认做法。</span>  
> *So machine review of pull requests is the mainstream default on the world's largest code host.*  
> <span class="qm">—— Laurie Voss · [11:24]</span> ^q8

> <span class="qz">多轮这一招不断被重新发现，因为误报正是杀死一个评审员的东西，而且它确实有效。</span>  
> *The multi-pass trick keeps getting rediscovered because false positives are the thing that kill a reviewer, and it actually works.*  
> <span class="qm">—— Laurie Voss · [12:30]</span> ^q9

> <span class="qz">模型倾向于看着代码说，嗯，这在我看来不错，所以就发布吧——而这恰恰是人类在那种情况下会做的事。</span>  
> *The model tended to look at the code and say, well, that looks good to me, so ship it, which is exactly what a human would do in that situation.*  
> <span class="qm">—— Laurie Voss · [12:54]</span> ^q10

> <span class="qz">这个实验的教训是：审查并没有消失。它被重建成一个系统，而那个系统是由人类构建的。</span>  
> *Review didn't disappear is the lesson of this experiment. It got rebuilt as a system and that system is built by humans.*  
> <span class="qm">—— Laurie Voss · [18:31]</span> ^q11

> <span class="qz">他说，我错了。请、请去读代码。我们有大约六个月的时间尝试不读代码。结局并不好。我们不得不把那个系统的大部分拆掉重做。</span>  
> *He said, I was wrong. Please, please read the code. We tried not reading the code for like six months. It did not end well. We had to rip out and replace large parts of that system.*  
> <span class="qm">—— Laurie Voss · [19:01]</span> ^q12

> <span class="qz">但正在发生的是，人类的角色并没有消失，它正在向栈的上层移动，可能移动了栈的好几层——从直接检查代码，转到设计和调优那些检查代码的系统，以及设计「好」的定义。</span>  
> *But what's happening is the human role isn't disappearing, it is moving up the stack, possibly several levels of the stack, from inspecting the code directly to designing and tuning the systems that inspect the code and designing the definition of good.*  
> <span class="qm">—— Laurie Voss · [20:21]</span> ^q13

> <span class="qz">所以你把人类从环中拿掉，你不只是失去了一个审查者，你失去了那个难以被欺骗的东西。</span>  
> *So you take the human out of the loop, you don't just lose a reviewer, you lose the thing that was hard to fool.*  
> <span class="qm">—— Laurie Voss · [21:26]</span> ^q14

> <span class="qz">所以自动化审查会栽在那些以自信姿态包装的坏代码上，而以自信姿态包装的坏代码恰恰是智能体非常擅长生产的那种代码。</span>  
> *So automated reviews fall for confidently framed bad code, and confidently framed bad code is exactly the kind of code that agents are very good at producing.*  
> <span class="qm">—— Laurie Voss · [21:33]</span> ^q15

> <span class="qz">一旦合并前的审查全部由机器完成，观察代码实际做了什么就成了最后一个屹立不倒的审查者。</span>  
> *Once the pre-merge review is all machines, watching what the code actually does becomes the last reviewer standing.*  
> <span class="qm">—— Laurie Voss · [22:07]</span> ^q16

> <span class="qz">而未来几年胜出的团队，不会是生成最多代码的团队，而是那些能够拿出证据说明他们为什么信任自己所发布内容的团队。</span>  
> *And the teams that win the next few years won't be the ones that generate the most code, they'll be the ones who can say with evidence why they trust what they shipped.*  
> <span class="qm">—— Laurie Voss · [23:15]</span> ^q17

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Anthropic、Bun、GitHub · 同概念:代码评审 (code review)、提示词注入 (prompt injection)、智能体 (agent)</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Anthropic、Cursor、OpenAI · 同概念:智能体 (agent)</span>
- [[2026-07-27-talks-boris-cherny-we-cut-80-of-claude-code-s|Claude Code 造物主 Boris:删掉 80% 系统提示词，让模型跑两周不停]]<span class="pd-rz">同公司:Anthropic、Bun · 同概念:提示词注入 (prompt injection)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-03-twentyvc-20vc-nvidia-crushes-quarter-and-buys-hug|NVIDIA 962亿美元季度背后：智能体时代的资本与生存法则]]<span class="pd-rz">同公司:Anthropic、Cognition、Cursor、OpenAI · 同概念:智能体 (agent)</span>
- [[2026-08-11-yc-peter-steinberger-fun-is-velocity-e3n9ea|OpenClaw 创始人复盘:被 18,000 人狂改、被舆论压垮,我学到了什么]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:代码评审 (code review)、智能体 (agent)</span>
- [[2026-09-07-twentyvc-20vc-the-100-billion-ai-assistant-race-t|邮箱里的 AI 助手：Plaid 前 CTO 谈如何在巨头围剿下赢]]<span class="pd-rz">同公司:Anthropic、Cursor、OpenAI · 同概念:智能体 (agent)</span>

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
