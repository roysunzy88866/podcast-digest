---
title: Token 都烧在哪了：Cursor 工程师教你把 AI 编程成本打下来
podcast: 精选演讲
date: 2026-09-12
source_url: undefined
duration: "60:27"
type: episode
cover: "#64748b"
description: Cursor 现场工程师 Santi Garza 拆解 AI 编程的计费机制与模型选择，讲透如何用更精确的提示和路由器大幅省 token、提效率。
host: "[[Santi Garza]]"
cohosts: ["[[Martin]]"]
companies: ["[[Cursor]]"]
concepts: ["[[智能体]]", "[[token]]", "[[harness]]", "[[上下文窗口]]", "[[提示词]]", "[[缓存]]", "[[压缩]]", "[[模型选择]]", "[[专门化模型]]", "[[路由器]]", "[[计划模式]]", "[[提问模式]]", "[[规则]]", "[[技能]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-03-talks-model-selection-token-efficiency#post","headline":"Token 都烧在哪了：Cursor 工程师教你把 AI 编程成本打下来","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-03-talks-model-selection-token-efficiency","mainEntityOfPage":"https://talk.solomind.cc/2026-09-03-talks-model-selection-token-efficiency","description":"Cursor 现场工程师 Santi Garza 拆解 AI 编程的计费机制与模型选择，讲透如何用更精确的提示和路由器大幅省 token、提效率。","datePublished":"2026-09-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Santi Garza"},{"@type":"Person","name":"Martin"},{"@type":"Organization","name":"Cursor"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"token"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"提示词 (prompt)"},{"@type":"Thing","name":"缓存 (cache)"},{"@type":"Thing","name":"压缩 (compaction)"},{"@type":"Thing","name":"模型选择 (model selection)"},{"@type":"Thing","name":"专门化模型 (specialized model)"},{"@type":"Thing","name":"路由器 (Cursor Router)"},{"@type":"Thing","name":"计划模式 (plan mode)"},{"@type":"Thing","name":"提问模式 (Ask Mode)"},{"@type":"Thing","name":"规则 (rules)"},{"@type":"Thing","name":"技能 (skills)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"Token 都烧在哪了：Cursor 工程师教你把 AI 编程成本打下来","item":"https://talk.solomind.cc/2026-09-03-talks-model-selection-token-efficiency"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Token 都烧在哪了：Cursor 工程师教你把 AI 编程成本打下来</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Token 都烧在哪了：Cursor 工程师教你把 AI 编程成本打下来

<div class="pd-byl"><b>Santi Garza</b> · Cursor 现场工程师 · 2026-09-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-03-talks-model-selection-token-efficiency.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我喜欢用的一个类比是：如果模型是引擎，那 harness 本质上就是引擎周围的那辆车。</div><div class="a">— Santi Garza <button class="pd-ts" data-t="03:50" data-who="Santi Garza" data-en="The analogy I like to use is that if the model is the engine, the harness is essentially the car around the engine." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Santi Garza]] · [[Martin]]
>
> **公司** [[Cursor]]
>
> **概念** [[智能体]] · [[token]] · [[harness]] · [[上下文窗口]] · [[提示词]] · [[缓存]] · [[压缩]] · [[模型选择]] · [[专门化模型]] · [[路由器]] · [[计划模式]] · [[提问模式]] · [[规则]] · [[技能]]

一家全球头部科技公司的 COO 公开说，他们四个月就烧光了整年的 AI 预算。这是 [[Cursor|Cursor]] 现场工程师（field engineer，负责给客户做技术支持、教客户用好 AI 构建）[[Santi Garza|Santi Garza]] 在这节 [[token|token]] 优化与[[模型选择|模型选择]]工作坊开头讲的故事——他自己说自己最重要的工作，就是让用户真正成为「如何最好地用 AI 构建」方面的专家。而这节课最反直觉的一点是：让[[智能体|智能体]]不乱花钱的最大杠杆，不是换更便宜的模型，而是你提问的方式——同样一个任务，好 prompt 和坏 prompt 的成本差 10 到 12 倍。

## 智能体的构造：模型是引擎，harness 是车

先拆解计费单位。token 是模型输入输出的基本单位，最接近「一个词」，平均一个词对应一到两个 token；图像和大文件同样会被 token 化。

你在 Cursor 里发一个提示后，真正干活的是两层：模型是引擎，[[harness|harness]]（围绕模型的整套调度框架）是引擎周围的那辆车。harness 负责提示管理、拼凑上下文、协调工具调用（MCP、文件读取、API 请求等），并和模型来回通信。同一个引擎装进两辆调校不同的车，性能天差地别——Cursor 会针对每一个模型单独调校 harness <button class="pd-ts" data-t="03:50" data-who="Santi" data-en="So when you prompt a cursor, for example, the first thing that's going to happen is the harness is going to do some prompt management and take a look at your prompt, but also try to piece together all the context that might be needed for the model to properly service your request." aria-label="回原文"></button>。

一个鲜为人知但极重要的事实：**模型有失忆症**。它不记得你上一轮说了什么，每一轮都要把全部上下文重新喂回去——这件事 harness 替你做了，但代价是你要为每轮重复读入的上下文付费 <button class="pd-ts" data-t="06:27" data-who="Santi" data-en="This is a little known fact, but extremely important. So models have amnesia. What I mean by that is that they don't remember what you just said in the previous turn." aria-label="回原文"></button>。

[[上下文窗口|上下文窗口]]接近 90% 时，harness 会自动[[压缩|压缩]]（compaction，即总结旧对话腾空间）：前缀（系统[[提示词|提示词]]、[[规则|规则]]、工具定义）和最新提问不动，被压缩的是中间的对话历史。反复压缩几次，对话就变得很模糊，重要细节会丢 <button class="pd-ts" data-t="08:35" data-who="Santi" data-en="So what happens actually, I promised you we'd peek under the hood, I'll tell you exactly what happens. So essentially the context that gets served up to the model is made up of, you can think of it as being made up of three main parts." aria-label="回原文"></button>。

## 四种 token，价格差百倍

token 分四种：输入 token（喂进模型的）、输出 token（模型生成的，更贵，因为要真算）、[[缓存|缓存]]写入和缓存读取。缓存系统让重复读入的对话历史走便宜的缓存读取——但缓存按前缀匹配，会话中途改一条规则就会击穿缓存；换模型提供商也会重建缓存，不过 Santi 说实际影响只是很小的一次波动，不必因此不换模型 <button class="pd-ts" data-t="39:16" data-who="Santi" data-en="Great question. So I'll give you the real answer first, and then I'll give you the practical answer. The real answer is that it basically has to rebuild the cache and the context." aria-label="回原文"></button>。

价格量级（每百万 token）：Claude Fable 输入 10 美元、输出 50 美元；Opus 输入 5 美元；Grok 4.6 输入 2 美元；Composer 2.5 输入只要 50 美分 <button class="pd-ts" data-t="10:38" data-who="Santi" data-en="You can see I've kind of ordered it from most expensive to least expensive. But Claude Fable, which is a very powerful model from Anthropic, you get billed $10 for every million tokens." aria-label="回原文"></button>。

还有一个迷思要破除：**智能体的动作不花 token**。它在代码库里用 grep 搜索上下文、tab 补全、耗时很长的操作，都不额外收钱；唯一花钱的是进出模型的内容——思考、读、写 <button class="pd-ts" data-t="13:13" data-who="Santi" data-en="All right, let's talk about what actually consumes tokens. So, you know, there's a myth that every single action that the agent takes costs tokens. It's actually not true." aria-label="回原文"></button>。

## 怎么选模型：没有一个模型赢所有类别

前沿模型的领先者去年换了六次主人，今年更快，所以 Santi 认为锁定单一提供商是危险的。他给六个模型的判断：

- **Grok 4.6**：帕累托前沿（分数和成本的最佳组合），不到 7 美元能拿到 70% 的表现，正好和 Fable 差不多，是唯一做到这一点或接近这个水平的模型。
- **Claude Fable**：非常贵，但高度复杂、涉及面广、要拉大量文件的问题值得用它——复杂调试、视觉类工作往往结果更好。
- **Opus**：别因为 Fable 更新就忘了它，写作、执行、沟通类任务有时比 Fable 还好，写文案、计划很出色。
- **GPT 5.6 Sol**：擅长规划和读代码库；Luna 不是很强但每美元的性价比还行，这个阶段他更推荐 Grok 或 Composer。
- **Composer 2.5**：他用得最多的模型。它是软件工程专用的[[专门化模型|专门化模型]]，快且高效——通用推理模型的贵在于你为「教你怎么烤鸡、给你感情建议」的参数付费，Composer 则把参数集中在软件工程上，你为更多你用到的参数付费 [17:43-21:12 Santi]。

用户可调的旋钮有三个：**努力程度**（effort level，越高模型思考循环越多、越烧 token）；**Fast 模式**（不是让模型算得更快，而是插队到队列最前面、降低首 token 时间，GPT 系约贵 5 倍，只建议演示或时间紧迫时用）；以及**自动[[路由器|路由器]]**。Cursor Router 用分类器和海量使用数据把请求路由到最合适的模型，有 cost / balance / intelligence 三档，balance 是默认推荐。

对管理员：把 auto 设为组织级政策（软性默认或强制锁定），团队报告一夜之间省 30% 到 60% <button class="pd-ts" data-t="25:56" data-who="Santi" data-en="The reason people find such gains around bug fixing and feature development, et cetera, is because we've, like I said, tuned every harness for the job. Last thing I'll say is that for, again, for admins in the room, if you employ this as a kind of an org-wide policy, we see overnight teams save 30% to 60%, literally overnight, just by making this like a policy." aria-label="回原文"></button>。他个人仍鼓励工程师自己换模型找感觉，「能切换模型、获得一些主观能动性，非常有帮助」，但软性默认至少能防止有人卡在最贵的模型上两周。

## 今天最大的提示：先规划好这一杆

Santi 称这是全场最有价值的一条：用智能体之前先规划。太容易犯的懒是直接说「修复 auth」「加个功能」——AI 推断力很强，但读不了你的心思。后果有两层：模型要大范围扫描代码库猜你在说什么；猜错了你来回纠正，而**从那一刻起，所有失败的尝试都作为上下文行李在每一轮被带着走**，持续烧钱，且模型每轮都要重新搞明白「我们决定不走那条路了」——就像高尔夫进了长草区，出来要多费好几杆 [26:23-28:45 Santi]。

配套技巧：

- **具体性**：「修复空值检查，在这个文件这一行」远好于「修复 auth」；哪怕不知道细节，说「.edu 地址的用户登录失败」也足够有用。
- **锚点**：@ 提及具体文件或文件夹，把范围限定住，智能体就不用爬整个代码库。实战中同样的任务，模糊 prompt 的成本约是带锚点 prompt 的 10 倍 <button class="pd-ts" data-t="30:42" data-who="Santi" data-en="So that's a vague prompt. In this case, it costs like 10x as much to figure this one out as the prompt on the right, which has a couple of important anchors for the agent." aria-label="回原文"></button>。
- **错误日志只贴关键的三行或二十行**，别把几百行的整个文件粘进去——那是每轮都背着的上下文。
- **每轮限定一个任务**；告诉智能体成功标准（测试全过、符合规格），它会更专注、更容易一次成型。
- **每个任务开新聊天**。「永远养着一个聊天」是 AI 开发最大的罪过——你以为留住的细节早被压缩没了，新上下文也没空间；需要旧上下文时，@ 引用过去的聊天，那只是一个高效指针，不会全量载入 <button class="pd-ts" data-t="34:54" data-who="Santi" data-en="Okay, a couple more tips and tricks. Start a new chat per task. One of the greatest sins in AI development, which I see even experts doing sometimes, is like nursing a chat forever." aria-label="回原文"></button>。

## 黄金路径与演示

几条现成的工作流：小而直接的任务——指明范围、文件或组件，一个 prompt 用 Composer 打发；模糊或不熟悉的领域——先 Ask Mode（完全只读、不会写代码跑命令的安全[[提问模式|提问模式]]）做侦察，再 Plan Mode（类似和 PM、设计师、工程师开需求会，会出澄清问题和技术规格），最后构建；构建功能——拉全上下文、进计划模式、拆子任务，之后可轻松用多任务模式；重构——先测试驱动开发，没测试就让智能体先建测试套件，重构前后测试全过才算完；难缠的 bug——用 debug 模式，它用确定性测试逼你先复现 bug、捕获日志，而不是像智能体天性那样瞎猜「我修好了」但 bug 还在 [36:50-38:52 Santi]。

演示里的真实账单：同一个功能，规划用 Grok 花 0.66 美元，构建用 Composer 花 0.12 美元；而之前让 Fable 直接实现花了 32 美元。悬停 usage 页面还能看到 token 具体烧在哪 <button class="pd-ts" data-t="56:38" data-who="Santi" data-en="So for example, This run right here was when I asked Fable to implement the feature. It cost me $32, which I then compared to the Composer run, which cost me $0.12." aria-label="回原文"></button>。

模型搭配的经验法则（他回应观众提问）：asking（侦察提问）用 Composer，planning 用 Grok 或 Opus 这类扎实的通用推理模型（规划要权衡利弊，值得用贵的，而且循环短、花不了多少），build out 通常回到 Composer；唯一在构建阶段用通用大模型的情况，是任务极复杂、中途要做关键决策——这时把上下文窗口开到一百万，用最强的模型，通常值得 <button class="pd-ts" data-t="58:41" data-who="Santi" data-en="Maybe just to highlight this one, Jonathan mentioned, sorry if I missed this, but is it better to use plan mode with a more expensive model than use a more efficient model for implementation like Composer 2.5?" aria-label="回原文"></button>。

## 本集带走

- **先规划再动手**：模糊 prompt 的隐性成本是失败尝试被每一轮携带 + 模型反复猜测，好坏 prompt 实测差 10 倍以上。
- **按任务阶段换模型**：侦察用 Composer（或它做 Ask Mode 也很好）、规划用 Grok/Opus、构建用 Composer——规划贵一点是值得的投资，构建回到便宜高效的。
- **提示里给锚点和成功标准**：@ 提及文件/文件夹限定范围，贴日志只贴关键几行，每轮一个任务，测试通过即完成的判据写清楚。
- **每个任务开新聊天**，旧上下文用 @ 引用聊天（指针，不是全量载入）；永远别养一个聊三个月的对话。
- **Rules 保持简短**（每轮全量加载），不用的 MCP 服务器做审计删掉，工作流写成 skills（智能体只看标题和描述，需要才载入正文）。
- **团队层面启用 Cursor Router**：cost/balance/intelligence 三档，设为组织政策据报一夜省 30%–60%；个人玩家可去 cursor.com/evals 看各模型每任务平均成本再自己选。

<div class="pd-sec pd-sec-q">全部金句 <span>10 条</span></div>

> <span class="qz">我喜欢用的一个类比是：如果模型是引擎，那 harness 本质上就是引擎周围的那辆车。</span>  
> *The analogy I like to use is that if the model is the engine, the harness is essentially the car around the engine.*  
> <span class="qm">—— Santi Garza · [03:50]</span> ^q1

> <span class="qz">我想说，当前沿变化如此之快时，锁定只用一家提供商是有点危险的。</span>  
> *Dangerous, I would say, to lock into just one provider when the frontier is changing so quickly.*  
> <span class="qm">—— Santi Garza · [14:58]</span> ^q2

> <span class="qz">我要说，没有一个模型能在所有类别中都获胜。</span>  
> *And I'll say that no one model wins every category.*  
> <span class="qm">—— Santi Garza · [17:23]</span> ^q3

> <span class="qz">你在为你不需要的大量参数付费。</span>  
> *You're paying for a ton of parameters you don't need.*  
> <span class="qm">—— Santi Garza · [20:43]</span> ^q4

> <span class="qz">它在用五个词推断你想说什么这件事上做得非常好，但它不能读懂你的心思。</span>  
> *It does a really good job at inferring what you're trying to say with five words, but it can't read your mind.*  
> <span class="qm">—— Santi Garza · [27:09]</span> ^q5

> <span class="qz">随着时间推移，这实际上会让你花钱，因为每一轮都在喂入所有这些来自失败尝试和出错轮次的额外上下文。</span>  
> *That is actually going to cost you money over time because every turn is feeding all this extra context from failed attempts, turns gone wrong.*  
> <span class="qm">—— Santi Garza · [28:12]</span> ^q6

> <span class="qz">AI 开发中最大的罪过之一——我甚至见过专家也这么做——就是永远地养着一个聊天。</span>  
> *One of the greatest sins in AI development, which I see even experts doing sometimes, is like nursing a chat forever.*  
> <span class="qm">—— Santi Garza · [34:56]</span> ^q7

> <span class="qz">首先，你以为你保留着的所有细节，你其实没保留住。</span>  
> *First of all, all the details you think you're keeping, you're not keeping.*  
> <span class="qm">—— Santi Garza · [35:25]</span> ^q8

> <span class="qz">智能体喜欢猜测。这有点是它们 DNA 里固有的。它们是猜测者。</span>  
> *Agents like to guess. That's kind of built into their DNA. They're guessers.*  
> <span class="qm">—— Santi Garza · [38:22]</span> ^q9

> <span class="qz">我用 Composer 构建，0.12 美元。相比之下是 32 美元。</span>  
> *I built with Composer, $0.12. When compared with 32 US dollars.*  
> <span class="qm">—— Santi Garza · [57:02]</span> ^q10

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同公司:Cursor · 同概念:智能体 (agent)、规划模式 (Plan Mode)</span>
- [[2026-07-09-talks-the-golden-age-of-ai-engineering-alexand|OpenAI 开发者日：从结对编程到指挥智能体大军]]<span class="pd-rz">同概念:harness、压缩 (compaction)、智能体 (agent)</span>
- [[2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo|Datadog 4000 人AI赋能实战：删掉上下文反而更好]]<span class="pd-rz">同公司:Cursor · 同概念:智能体 (agent)、harness、token、技能 (skills)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:harness、技能 (skills)、智能体 (agent)、MCP</span>
- [[2026-07-21-trainingdata-factory-s-matan-grinberg-the-coming-dark|Factory CEO Matan:早两年等于错，退款、路由器与软件工厂]]<span class="pd-rz">同概念:harness、token、智能体 (agent)</span>
- [[2026-09-07-twentyvc-20vc-the-100-billion-ai-assistant-race-t|邮箱里的 AI 助手：Plaid 前 CTO 谈如何在巨头围剿下赢]]<span class="pd-rz">同公司:Cursor · 同概念:token、智能体 (agent)</span>

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
