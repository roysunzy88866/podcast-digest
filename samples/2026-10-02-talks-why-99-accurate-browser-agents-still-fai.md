---
title: "浏览器智能体上生产：为什么每步 99% 成功率还不够"
podcast: 精选演讲
date: 2026-10-06
source_url: undefined
duration: "16:29"
type: episode
cover: "#64748b"
description: BrowserBase 软件工程师 Derek Megan 讲浏览器智能体从演示走向生产的方法：为什么没有部分得分，以及如何用确定性工具压缩模型责任来构建可靠系统。
guests: ["[[Derek Meegan]]"]
companies: ["[[Browserbase]]"]
concepts: ["[[浏览器智能体]]", "[[智能体]]", "[[工具调用]]", "[[计算机使用]]", "[[无障碍树]]", "[[可观测性]]", "[[模型成本]]", "[[反机器人机制]]", "[[技能]]", "[[重试]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-02-talks-why-99-accurate-browser-agents-still-fai#post","headline":"浏览器智能体上生产：为什么每步 99% 成功率还不够","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-02-talks-why-99-accurate-browser-agents-still-fai","mainEntityOfPage":"https://talk.solomind.cc/2026-10-02-talks-why-99-accurate-browser-agents-still-fai","description":"BrowserBase 软件工程师 Derek Megan 讲浏览器智能体从演示走向生产的方法：为什么没有部分得分，以及如何用确定性工具压缩模型责任来构建可靠系统。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Derek Meegan"},{"@type":"Organization","name":"Browserbase"},{"@type":"Thing","name":"浏览器智能体 (browser agent)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"工具调用 (tool call)"},{"@type":"Thing","name":"计算机使用 (computer use)"},{"@type":"Thing","name":"无障碍树 (accessibility tree)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"模型成本 (model costs)"},{"@type":"Thing","name":"反机器人机制 (antibots)"},{"@type":"Thing","name":"技能 (skill)"},{"@type":"Thing","name":"重试 (retry)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"浏览器智能体上生产：为什么每步 99% 成功率还不够","item":"https://talk.solomind.cc/2026-10-02-talks-why-99-accurate-browser-agents-still-fai"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>浏览器智能体上生产：为什么每步 99% 成功率还不够</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 浏览器智能体上生产：为什么每步 99% 成功率还不够

<div class="pd-byl"><b>Derek Meegan</b> · BrowserBase 软件工程师 · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-02-talks-why-99-accurate-browser-agents-still-fai.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">成本的累积是持续的,而价值的实现是终点式的。</div><div class="a">— Derek Meegan <button class="pd-ts" data-t="04:41" data-who="Derek Meegan" data-en="Cost accumulation is continuous, while value realization is terminal." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Derek Meegan]]
>
> **公司** [[Browserbase]]
>
> **概念** [[浏览器智能体]] · [[智能体]] · [[工具调用]] · [[计算机使用]] · [[无障碍树]] · [[可观测性]] · [[模型成本]] · [[反机器人机制]] · [[技能]] · [[重试]]

跑通一次[[浏览器智能体|浏览器智能体]]的演示很容易——一个网站、一次运行、好天气、你在旁边盯着、双手合十祈祷。

但生产环境是成千上万次无人值守的运行，网站随时会变，模型也可能就是状态不佳。

这一集讲的就是「演示与生产之间隔着什么」，主角是 BrowserBase 的软件工程师 Derek Megan。他抛出的核心难题是：

每一步独立成功率高达 99% 的[[智能体|智能体]]，如果一条任务轨迹要走 100 步，整体成功率只剩 36% 左右——而解决办法出人意料地朴素：

**把能从模型手里拿走的步骤，统统拿走**。

## 先搞清楚智能体怎么跟网页打交道

把模型的输出想象成一个概率分布：

输入 token 代表页面状态、总体目标和已完成的步骤，模型在可能动作的分布里挑出最可能的那个，然后这个动作被转换成结构化的[[工具调用|工具调用]]，确定性地执行去操作浏览器 <button class="pd-ts" data-t="01:28" data-who="嘉宾" data-en="So first, how agents interact with the web. I like to think about the output of a model as a probability distribution. You receive input tokens." aria-label="回原文"></button>。

难点在于浏览器的「接口」有很多层：

进出的网络请求、DOM(页面的 HTML 表示)、截图、[[无障碍树|无障碍树]](页面的语义文本表示)，还有浏览器状态——存储、cookies、控制台、URL、标签页等等，底层还有一个动态代码执行运行时，可以写任意 JavaScript 或 CDP 来操作浏览器 <button class="pd-ts" data-t="02:00" data-who="嘉宾" data-en="You have several distinct layers. You have requests flowing in and out of the browser. You have the document object model, or the HTML representation of the page." aria-label="回原文"></button>。

业界主流的接入策略有三种 <button class="pd-ts" data-t="02:34" data-who="嘉宾" data-en="How do you wire these together? Typically in industry, there's three main strategies. Number one is creating a textual representation of the browser." aria-label="回原文"></button>:

1. **文本表示**：把页面的 HTML 状态和无障碍树拼成一种混合文本表示喂给模型；
2. **[[计算机使用|computer use]]**:用一系列页面截图来表示浏览器；
3. **解除定制工具("de-harnessing")**:不给模型配专门工具，而是给它一个动态执行环境，让它直接对着浏览器写任意代码——这种方式正越来越流行。

实践中，大多数生产系统用的是第一种、第二种，或第一种与后两种的组合 <button class="pd-ts" data-t="03:08" data-who="嘉宾" data-en="And finally, and becoming increasingly popular, is de-harnessing your agent, removing tailor-made tools in favor of dynamic execution environments where the agent can write arbitrary code against the browser." aria-label="回原文"></button>。

## 三种任务轨迹，生产聚焦「事务性工作流」

按「智能体程度」从低到高，他把浏览器任务分成三类 <button class="pd-ts" data-t="03:21" data-who="嘉宾" data-en="Now let's think about the type of agentic trajectories on the browser. And here I define three, spanning across a spectrum of agenticness. From least agentic, we have purpose-built browser trajectories that are specially made to complete a single task." aria-label="回原文"></button>:

- **专用轨迹**：为完成单一任务特制，智能体程度最低；
- **中间态**：把浏览器当作服务更大目标的实现细节，比如深度研究、竞品分析；
- **即时浏览器自动化**：事先不知道任务是什么，用户随时丢来一个任意任务——智能体程度最高。

大规模场景下真正要面对的，主要是**事务性工作流**：

要端到端完成一个工作单元，本质上是「事务」——要么整个完成，要么整个不算。

## 核心难题：成本持续累积，价值只在终点兑现

这是全场的题眼：**成本的累积是持续的，而价值的实现是终点式的** <button class="pd-ts" data-t="04:41" data-who="嘉宾" data-en="And I think it comes down to a key interaction. Cost accumulation is continuous, while value realization is terminal. Each step in your trajectory, you're incurring some incremental costs." aria-label="回原文"></button>。

轨迹中的每一步都在产生增量成本、累积增量失败风险，但只有所有步骤全部完成，你才拿到价值。

一句话：**浏览器智能体没有部分得分**。

那个 99% 的思想实验就由此而来：每步独立成功率 99%、轨迹 100 步，整体成功率按连乘只剩约 36% <button class="pd-ts" data-t="05:22" data-who="嘉宾" data-en="Take this thought experiment for an example. You have a browser agent where each step has an independent success rate of 99%. If your browser trajectory spans 100 steps, the overall success rate at scale starts to look like 36%, only about a third of the time." aria-label="回原文"></button>。

照这个数学推下去似乎「永远别用浏览器智能体」——但他认为这个动态是真实的，数学却不是全部的故事 <button class="pd-ts" data-t="06:05" data-who="嘉宾" data-en="Thankfully, that's not the subject of my talk today. I think this dynamic is real, but the math isn't the whole story. And so it's time to take a step back." aria-label="回原文"></button>。

## 退一步想：利润 = 收入 − 成本

他提出的价值框架简单到近乎被忽视：

利润等于收入减成本，你的智能体只是账目上的又一个项目，**它带给你的必须多于它索取的** <button class="pd-ts" data-t="06:30" data-who="嘉宾" data-en="And to illustrate the value that I wish agents to deliver, I'll propose a simple equation, perhaps not used enough by many of us. And this equation is profit equals revenue minus costs." aria-label="回原文"></button>。

关键在客户视角：BrowserBase 的客户往往不是为自己自动化网页，而是**代表他们的用户**在网页上执行操作。

所以浏览器智能体真正交付的，是「为你的客户重复地完成任务」<button class="pd-ts" data-t="07:14" data-who="嘉宾" data-en="Oftentimes, they're not automating the web for their own needs, but instead performing actions on the web on their customers' behalf. And so a browser agent actually gives you a task completed for your customer repeatedly." aria-label="回原文"></button>。要衡量的三个维度，按重要性排序是：**性能、成本、可维护性** <button class="pd-ts" data-t="07:41" data-who="嘉宾" data-en="And so we'll look across three dimensions and in order of importance. First is performance, second is cost, and third is maintainability. And when we think about performance, this is the primary measure of success that we want to focus on." aria-label="回原文"></button>。

性能是首要的成功标准——一旦确认智能体能完成任务，成本和可维护性就只是优化问题，而优化问题可以靠工程解决 <button class="pd-ts" data-t="08:02" data-who="嘉宾" data-en="Because once we know a browser agent is performance, it can complete the task we asked it to do, then cost and maintainability simply become optimization problems." aria-label="回原文"></button>。

### 性能：看产物，按交易算账，允许重试

事务型轨迹里的「成功」必须落到**具体的产物**上：

付账单看确认邮件、下订单看订单 ID 或收据、提交表单看系统里能确定性查到的新记录 <button class="pd-ts" data-t="08:13" data-who="嘉宾" data-en="So the first thing we need to ask is what success actually looks like. And success in these transactional browser trajectories look like some kind of concrete artifact that the run leaves behind." aria-label="回原文"></button>。

衡量正确率有两种方式。朴素做法是按每次运行算——假设单次成功率 50%,听着很糟；

但如果允许针对每笔交易最多[[重试|重试]]四次，每笔交易的成功率会迅速攀升到 94% <button class="pd-ts" data-t="08:58" data-who="嘉宾" data-en="Its probability of success on any run is 50%. Yet, if you permit that agent to retry for a particular transaction, maybe up to four retries, your per transaction success rate quickly climbs to 94%." aria-label="回原文"></button>。

客户并不在乎你重试了几次，只在乎工作流是否可靠完成。结论：**允许重试，按每笔交易而非每次运行来衡量成功** <button class="pd-ts" data-t="09:25" data-who="嘉宾" data-en="The customer does not care necessarily how many retries you perform, but rather that the workflow was completed successfully and reliably. In short, permit retries and measure success against a per transaction basis." aria-label="回原文"></button>。

### 成本与可维护性

成本分两块：

每次运行的成本(如今主要是[[模型成本|模型成本]]——随着开源模型工程演进，智能的成本面临巨大下行压力，模型成本占比会越来越小)和基础设施算力，再加上集成与工具的开销 <button class="pd-ts" data-t="09:39" data-who="嘉宾" data-en="Next, we'll explore costs and we'll break costs down into two dimensions. The first is per run, which today is predominantly model costs. But as engineering evolves in the open source landscape for models, there is an incredible downward price pressure on the cost of intelligence." aria-label="回原文"></button>。

可维护性则需要投入[[可观测性|可观测性]]——不光看智能体怎么决策，还要看浏览器里实际发生了什么；

加上开发者介入修复的时间，以及随网站变化、模型进步而做的重新评估 <button class="pd-ts" data-t="10:10" data-who="嘉宾" data-en="And last is additional integration and tooling. Then when we think about maintenance over time, we need to invest in observability, not only in how the agent made decisions, but what actually transpired in the browser." aria-label="回原文"></button>。

长期持久性有四大风险：一是**环境会反击**([[反机器人机制|反机器人机制]]，网络对智能体并不友好)；

二是**任务会变**(底层工作在智能体脚下偏移，但这受益于模型能力提升——模型更能理解用户意图、走偏时自行纠偏)；

三是**更好的方法出现**(经典难题：今天在自动化网页，明天网站出了 API 怎么办——但对绝大多数用例，API 短期内不会出现)；

四是**模型跑偏**(模型天生非确定性，每次运行可能不走关键路径)<button class="pd-ts" data-t="10:56" data-who="嘉宾" data-en="What are the risk factors to the durability of these over time? Well, first and foremost, the environment can fight back. Antibots, and just generally, we understand the web as not the friendliest place for your agent." aria-label="回原文"></button>。

## 实战：健康保险门户自动化，逐步压缩模型责任

来到演讲核心——一个真实任务的高层架构：登录健康保险门户并下载一份福利说明(explanation of benefits)。

每一步改造都必须撬动成本、性能或可维护性这三个杠杆之一 <button class="pd-ts" data-t="12:32" data-who="嘉宾" data-en="This task is automating a health insurance portal. Every step we take in creating this dynamic system should influence one of these key levers, cost, performance, or maintainability." aria-label="回原文"></button>。

**从最小系统开始**：请求进来，智能体在浏览器上执行操作——这是「能跑起来」的最低配置 <button class="pd-ts" data-t="12:46" data-who="嘉宾" data-en="So first, we'll start with a lowly agent. The goal of this agent is to log in and download an explanation of benefits. A request comes in, the agent performs the action on the browser, and this is the minimum necessary system you need to just do something." aria-label="回原文"></button>。

**第一刀：把复杂操作封装成工具**。下载文件需要以编程方式与页面交互，还要把文件从存储取回智能体运行时。

于是创建一个工具，在一个事务里完成这一切——不再让模型在运行中临时做决策，而是把整个复杂操作封装成单次工具调用 <button class="pd-ts" data-t="13:19" data-who="嘉宾" data-en="So you create a tool that does this all in one transaction. Instead of the model needing to make decisions on the fly, you encapsulate a complex operation into a single tool call." aria-label="回原文"></button>。

**第二刀：给它确定性的验证手段**。

再给它一个 OCR 工具，确定性地从下载的文档中提取实体，与记录系统比对——现在智能体有了一个确定性机制，能权威地知道自己到底做没做对 <button class="pd-ts" data-t="13:36" data-who="嘉宾" data-en="This can be done by giving it another tool. This tool is an OCR tool that deterministically extracts entities from the document and compares that against the system of record." aria-label="回原文"></button>。

**第三刀：把认证从模型手里拿走**。

门户的业务逻辑可能有模糊性，但认证流程永远不会变，而且同一门户上的许多业务操作都要复用同一套认证。

把认证逻辑抽离出模型的责任，改成无服务器认证函数——又一次减少了智能体要走的步数，换来更低的单位成本、更高的性能、更易维护，还能跨多个工作流复用 <button class="pd-ts" data-t="14:10" data-who="嘉宾" data-en="And you want to reuse the same authentication mechanism for many business operations on the same portal. So you pull that authentication logic out from the responsibility of the model." aria-label="回原文"></button>。

**第四刀：写一份「[[技能|技能]]」**。此时智能体的责任已被压缩到只剩真正必要的模糊区域。

为它起草一份 skill——形式上非常类似过去给人类用的标准操作程序(SOP),只不过是写给智能体的，让智能体更贴近关键路径走 <button class="pd-ts" data-t="14:46" data-who="嘉宾" data-en="We've contained the responsibility of the agent to only the area of ambiguity necessary, so we draft a skill. These skills look very similar to a standard operating procedure that we would have humans use in the past, except this standard operating procedure is for an agent, and it allows the agent to follow the critical path more closely." aria-label="回原文"></button>。

回到开场那个概率分布的视角：

如果关键路径被明确列在技能里，智能体知道自己在第二步、下一步该走第三步，那它走第三步的概率就更大——**模糊性从决策过程中被消除了** <button class="pd-ts" data-t="15:08" data-who="嘉宾" data-en="At the beginning of the talk, we discussed how the output of an agent can be thought of like a probability distribution. So if we introduce the critical path to the agent, it knows it's at step two and knows that it needs to take step three because we have outlined it in this skill, then it's more likely to take that step three." aria-label="回原文"></button>。

最终架构：

请求进来 → 无服务器认证函数完成认证 → 浏览器交给智能体运行时 → 智能体按技能导航门户 → 调用确定性下载函数 → 文件交给验证工具 → 权威地知道轨迹成功还是失败 <button class="pd-ts" data-t="15:33" data-who="嘉宾" data-en="We have actually a pretty complex system. A request comes in. A serverless authentication function authenticates the browser." aria-label="回原文"></button>。

系统的本质就一句话：

**把那些根本不需要由智能体承担的步骤，从模型的责任里拿走**——步数减少了，结果不打折，系统因此更可维护、性能更好，浏览器智能体的难题也就被克服了 <button class="pd-ts" data-t="15:57" data-who="嘉宾" data-en="The agent navigates the portal using the skill provided, calls a deterministic download function, provides that downloaded file to a verify tool, and can know authoritatively whether its trajectory succeeded or failed." aria-label="回原文"></button>。

## 本集带走

- **没有部分得分是浏览器智能体的根本难题**：成本和风险逐累积，价值只在任务全部完成时兑现——每步 99% 成功率的 100 步任务，整体成功率仅约 36%。
- **按每笔交易衡量成功，放开了重试**：单次 50% 成功率的智能体，允许四次重试后每笔交易成功率可达 94%;客户不在乎重试次数，只在乎结果。
- **成功必须是可查的产物**：确认邮件、订单 ID、系统里的新记录——给智能体配一个确定性验证工具(如 OCR 提取实体比对记录系统)，它就能权威地知道自己做没做对。
- **不断压缩模型的责任范围**：复杂操作封装成单次工具调用、不变的认证抽成复用函数、模糊路径写成给智能体的「技能」(类似人类 SOP)——每拿走一步，就少一分累积风险。
- **三个杠杆按重要性排**：性能达标后，成本和可维护性只是工程优化问题；长期则要盯住四大风险——反机器人、任务漂移、API 替代、模型跑偏。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">成本的累积是持续的,而价值的实现是终点式的。</span>  
> *Cost accumulation is continuous, while value realization is terminal.*  
> <span class="qm">—— Derek Meegan · [04:41]</span> ^q1

> <span class="qz">这就是说,对于浏览器智能体来说,没有部分得分,而绝大多数网页自动化都属于这一类。</span>  
> *That's all to say that with browser agents, there is no partial credit, and the vast majority of web automations fall into this category.*  
> <span class="qm">—— Derek Meegan · [05:01]</span> ^q2

> <span class="qz">如果你的浏览器轨迹跨越 100 步,那么整体成功率在大规模下开始看起来像 36%,只有大约三分之一的时候。</span>  
> *If your browser trajectory spans 100 steps, the overall success rate at scale starts to look like 36%, only about a third of the time.*  
> <span class="qm">—— Derek Meegan · [05:28]</span> ^q3

> <span class="qz">这一切是说,你的智能体只是又一个账目项目,你的智能体应该带给你的多于它索取的。</span>  
> *And this is all to say that your agent is just another line item and that your agent should give you more than it takes.*  
> <span class="qm">—— Derek Meegan · [06:40]</span> ^q4

> <span class="qz">然而,如果你允许该智能体针对某笔交易进行重试,也许最多四次重试,你的每笔交易成功率会迅速攀升到 94%。</span>  
> *Yet, if you permit that agent to retry for a particular transaction, maybe up to four retries, your per transaction success rate quickly climbs to 94%.*  
> <span class="qm">—— Derek Meegan · [08:58]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-05-sourcery-john-collison--stripe-ai-agents-will-rew|Stripe 联创 John Collison:智能体商务是一次彻底的重构]]<span class="pd-rz">同公司:Browserbase · 同概念:computer use、智能体 (agent)</span>
- [[2026-05-27-devtools-cloudflare-devs|Cloudflare 三人聊：让模型直接写代码，别再堆工具了]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)、工具调用 (tool call)</span>
- [[2026-09-21-howiai-how-warp-ships-2-000-prs-a-month-with-ai|Warp CEO 的软件工厂：2000 个 PR 一个月，人成了瓶颈]]<span class="pd-rz">同概念:computer use、智能体 (agent)、可观测性 (observability)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)</span>
- [[2026-06-24-pg-company-os-jz|Laurel 产品负责人：怎么用 GitHub 把全公司的工作流变成 AI 技能]]<span class="pd-rz">同概念:技能 (skill)、智能体 (agent)</span>
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当写代码变便宜,OpenAI Codex负责人说「品味」成了最贵的资源]]<span class="pd-rz">同概念:computer use、智能体 (agent)</span>

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
