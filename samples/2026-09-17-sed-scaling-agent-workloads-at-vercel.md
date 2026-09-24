---
title: 把智能体从「桌上的宠物」搬进云端：Vercel 开源框架 Eve
podcast: Software Engineering Daily
date: 2026-09-17
source_url: undefined
duration: "51:07"
type: episode
cover: "#64748b"
description: Vercel 技术团队成员 Andrew Barba 与产品负责人 Char Dara 讲解云原生智能体框架 Eve：用 Markdown 和目录定义智能体，自动编译成基础设施。
host: "[[Andrew Barba]]"
cohosts: ["[[Shar Dara]]", "[[Kevin Ball]]"]
companies: ["[[Vercel]]"]
concepts: ["[[Eve]]", "[[DZero]]", "[[智能体]]", "[[评估]]", "[[技能]]", "[[MCP]]", "[[沙箱]]", "[[记忆]]", "[[工作流]]", "[[无服务器函数]]", "[[Next.js]]", "[[子智能体]]", "[[权限]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-17-sed-scaling-agent-workloads-at-vercel#post","headline":"把智能体从「桌上的宠物」搬进云端：Vercel 开源框架 Eve","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-17-sed-scaling-agent-workloads-at-vercel","mainEntityOfPage":"https://talk.solomind.cc/2026-09-17-sed-scaling-agent-workloads-at-vercel","description":"Vercel 技术团队成员 Andrew Barba 与产品负责人 Char Dara 讲解云原生智能体框架 Eve：用 Markdown 和目录定义智能体，自动编译成基础设施。","datePublished":"2026-09-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Andrew Barba"},{"@type":"Person","name":"Shar Dara"},{"@type":"Person","name":"Kevin Ball"},{"@type":"Organization","name":"Vercel"},{"@type":"Thing","name":"Eve"},{"@type":"Thing","name":"DZero"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"技能 (skills)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"工作流 (workflow)"},{"@type":"Thing","name":"无服务器函数 (serverless functions)"},{"@type":"Thing","name":"Next.js"},{"@type":"Thing","name":"子智能体 (sub-agents)"},{"@type":"Thing","name":"权限 (permissions)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"把智能体从「桌上的宠物」搬进云端：Vercel 开源框架 Eve","item":"https://talk.solomind.cc/2026-09-17-sed-scaling-agent-workloads-at-vercel"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把智能体从「桌上的宠物」搬进云端：Vercel 开源框架 Eve</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 把智能体从「桌上的宠物」搬进云端：Vercel 开源框架 Eve

<div class="pd-byl"><b>Andrew Barba</b> · Vercel 技术团队成员 · 2026-09-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-17-sed-scaling-agent-workloads-at-vercel.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">一个经典的例子是：你几乎永远不想要一个接收用户 ID 作为输入的工具调用。</div><div class="a">— Andrew Barba <button class="pd-ts" data-t="41:20" data-who="Andrew Barba" data-en="So the classic example is you almost never want a tool call that takes in a user ID, for example." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Andrew Barba]] · [[Shar Dara]] · [[Kevin Ball]]
>
> **公司** [[Vercel]]
>
> **概念** [[Eve]] · [[DZero]] · [[智能体]] · [[评估]] · [[技能]] · [[MCP]] · [[沙箱]] · [[记忆]] · [[工作流]] · [[无服务器函数]] · [[Next.js]] · [[子智能体]] · [[权限]]

这一集聊的是 [[Vercel|Vercel]] 新开源的云原生[[智能体|智能体]]框架 [[Eve|Eve]]。两位主角都来自 Vercel：[[Andrew Barba|Andrew Barba]] 是技术团队成员，Char Dara 是 Eve 的产品负责人，两人此前曾一起领导 Vercel 的计费团队，今年二月开始做 Eve。

主持人 [[Kevin Ball|Kevin Ball]] 的第一个问题就戳中要害：现在的智能体大多是「一人一进程」——你在自己电脑上跑一个 Claude Code、Codex 之类的东西。可一旦智能体要服务一个企业，成千上万个请求同时到达，每个会话都要隔离、持久、可恢复，这套本地模式就撑不住了 <button class="pd-ts" data-t="00:00" data-who="主持人" data-en="Most AI agent setups today are built around a single session, where one user interacts with one agent at a time. However, that model breaks down when an agent has to serve a business, where thousands of requests can arrive at once and each session needs to be isolated, durable, and recoverable." aria-label="回原文"></button>。

Andrew 用一个例子说明「云原生」到底意味着什么：拿一个 OpenClaw 和一个 Eve 智能体，让一千个人在同一时刻发提示词——OpenClaw 会垮，Eve 会横向扩展、快速并行拉起这些 harness（承载模型、连接工具的运行壳），会话互相隔离、可恢复、可重试，背后一整套机制兜底。它既能做万人企业的内部智能体，也能支撑一家把智能体当主产品的 B2C 公司 <button class="pd-ts" data-t="04:35" data-who="Andrew" data-en="Great, great question. The example I love to give is, you know, let's take an OpenClaw and let's take an Eve agent and let's let a thousand people send a prompt at the exact same time and what, you know, what's going to happen." aria-label="回原文"></button>。

## Eve 是怎么来的：从内部数据智能体 DZero 长出来的框架

Eve 并非凭空设计。Vercel 内部最早的全员智能体是一个叫 [[DZero|DZero]] 的数据智能体——你问它「有多少月活用户」，它靠一整层语义文件（Markdown、YAML 规范文件）来理解各种缩写和术语的含义。

团队发现：把 DZero 稳定跑在 Vercel 上要手工搭一大堆系统，而 DZero 下面这一大层，之后每个智能体都会需要；同时 DZero 的功能大部分本来就来自文本文件 <button class="pd-ts" data-t="05:51" data-who="Andrew" data-en="And what were the things you said, hey, this is actually something brand new, we got to solve this? It started from our own data agent that we built inside Vercel." aria-label="回原文"></button>。于是有了两个激进的决定：一，用声明式文件系统定义智能体；二，最初干脆「没有代码」——Eve 纯粹是英文、Markdown、文本文件。

所以 Eve 的形态 literally 就是一个目录。最简单的 Eve 智能体可以只是一个 `instructions.md` 文件——放进一个指令文件，你就得到一个按原始训练状态运行、云端托管的前沿模型，团队自嘲称之为「盒装 ChatGPT」<button class="pd-ts" data-t="08:41" data-who="Andrew" data-en="And so, yeah, it's, of course, a framework because the grammar behind EVE and our slots, those are all compiled down into this manifest, and that manifest is basically the infrastructure as code that you kind of just referenced where we're provisioning things based on what you have." aria-label="回原文"></button>。你写的配置会编译成一个 manifest（清单文件），本质是基础设施即代码：加了 skills 就配[[沙箱|沙箱]]，定义了 schedules 就配定时事件基础设施，平台只供给你实际用到的东西。

## 核心原语：instructions、skills、tools、connections、channels

Andrew 逐一拆解了 Eve 的构建块。instructions 是智能体的身份；skills 是「渐进式披露」机制——你只给模型一个「何时该用」的提示，模型擅长判断自己什么时候需要进一步了解某件事，再自己去拉取额外上下文，DZero 有大约 90% 都是 skills <button class="pd-ts" data-t="09:19" data-who="Andrew" data-en="Like what are the different primitives you have to play with here? Yeah, great question. So yeah, instructions is the identity, of course." aria-label="回原文"></button>；tools 用于跑确定性代码、从外部拉确定性数据，比如 Postgres 数据库或 OpenAPI 连接；connections 是 tools 的特化版，专用于 [[MCP|MCP]]（一种让模型接入外部工具服务的协议），丢进去一个 MCP URL 就自动暴露那些工具。

再往上是 channels——智能体的所有调用入口。默认是一个 HTTP 路由，接 [[Next.js|Next.js]] 应用用的就是它；更有意思的是 Slack、Teams、GitHub 这类渠道，Eve 支持这些平台的所有第一方事件，并给出带倾向性的默认交互方式 <button class="pd-ts" data-t="10:38" data-who="Andrew" data-en="I think that's kind of like the brain and the operations of Eve. Then the next layer that is fairly critical is how do you invoke it, right? You need to start the agent somehow, and this is what we call channels." aria-label="回原文"></button>。还有 sub-agents（[[子智能体|子智能体]]），最简单的用途是上下文管理——把不想塞爆父智能体的大任务分出去独立处理再汇报；但在 Vercel 内部它被玩出了组织结构：整个团队拥有一个子智能体，比如 DZero 本身就是另一个智能体的子智能体、由数据团队拥有，还有一个懂 Eve 全部构建知识的 help Eve 智能体，全公司都能调用 <button class="pd-ts" data-t="11:44" data-who="Andrew" data-en="But sub-agents also enable completely different ways of kind of building teams around agents. So like internally in Vercel, We use sub-agents where literally entire teams own a sub-agent." aria-label="回原文"></button>。

## Evals 做成一等公民，测试套件本身就是一整套 evals

Char 特别兴奋的一点是 evals（[[评估|评测]]）在 Eve 里是一等公民原语。Eve 支持两类：偏确定性的——发一个查询、断言某个工具被调用了，比如天气智能体收到「天气如何」就该调用 Get Weather；以及 LLM as judge——让模型对响应打分，比如 DZero 可以对生成的 SQL 做评分，确认它查的是正确的表 <button class="pd-ts" data-t="13:04" data-who="Andrew" data-en="What does that whole lifecycle look like? Yeah, so we have two different types of evals. So the first type is more deterministic, it's probably more what you're familiar with, where you're looking for conditions to be met, and these are fairly deterministic things." aria-label="回原文"></button>。Eve 里的 eval 就是一个 define eval 函数，拿到一个测试函数接口，能通过 prompt 启动轮次、触发 human in the loop，等于智能体的完整编程接口。

最能说明问题的是他们自己的用法：Eve 仓库的测试套件就是一整套 evals——他们用自己的 eval 框架测试 Eve 本身，「这基本上就是我们敢于一天多次发布新版本的信心来源」<button class="pd-ts" data-t="14:26" data-who="Andrew" data-en="So you can start turns via prompts, you can trigger things like human in the loop, and so basically all the functionality of Eve, you can programmatically write and set up an eval, and you can do as much or little with it as you want." aria-label="回原文"></button>。

主持人 KBall 追问了一个前沿方向：能不能把 evals 从「护栏」（确保所信为真）推进到「把 prompt 变成优化函数」——用 evals 定义期望结果，再让模型在循环里迭代演化智能体。Andrew 坦言没从这个角度想过，但给了个实践性的答案：因为 Eve 包内附带了对 LLM 友好的文档并「提示」你该用 evals 测试，如果你用编码智能体来构建 Eve 智能体，它迭代时就会自己写并运行 evals；他没见过它先写 eval 再写实现，但「你应该能拿到非常接近那个的东西」<button class="pd-ts" data-t="15:37" data-who="Andrew" data-en="Does this make it easier to create that optimization loop? Well, yeah, this is really interesting. So I had never thought about it in this way." aria-label="回原文"></button>。

这里还有个普适经验：模型训练数据里的框架版本都是旧的，而 Eve 对模型来说完全不存在，所以他们花大力气让包自带 LLM 友好文档，还把 changelog 打进包里——智能体发现自己用的是 0.2 版、changelog 已经到 0.5，就直接看 diff。对一个 pre-1.0、每周都在破坏兼容性的框架，这是让用户升级时「不发火」的主要手段 <button class="pd-ts" data-t="19:35" data-who="Andrew" data-en="So, like, how did you design those to make that work well? Yeah, two things. So, our scaffolding includes an agents.md file, which, of course, points to the docs." aria-label="回原文"></button>。

## 权限与安全：多层设计，连「看得到什么」都能按人切换

因为一开始就瞄准企业市场，[[权限|权限]]在很早就内置了。频道层先解决「你是谁」——Slack 场景下就是工作区 ID 加用户 ID；你在 Eve 里写代码的任何地方都拿到一个 context 对象，告诉你这一轮的当前用户是谁、发起这一轮的用户是谁——两者可以不是同一个人，不同的人可以在不同时间跟进 <button class="pd-ts" data-t="22:05" data-who="Andrew" data-en="So for Slack, for example, the who are you is going to be your workspace ID plus your Slack user ID. And Eve was designed to be multiplayer from the beginning. And so we give you things like, and so basically, everywhere you write code in Eve, you have a context object." aria-label="回原文"></button>。更细一层是工具审批：你只需声明某个工具「总是要求审批」，审批消息会以人机协同的形式渲染在调用来源的渠道上——从 Slack 进来就在 Slack 里渲染，从 SMS 进来就是另一种形态；提问的人、请求审批的人、给审批的人都可以不是同一个人，怎么处理由你写代码决定。

最有意思也最难的一层是「怎么看得到该看的」：DZero 能访问 Vercel 的整个数据湖，CEO Guillermo 能查的数据我未必该查。Eve 为此提供了一个叫 DefineDynamic 的高级 API，可以根据当前调用者动态解析出不同的工具集、连接集——我是发起人时就字面意义上不暴露某个工具 <button class="pd-ts" data-t="23:45" data-who="Andrew" data-en="And so, yeah, so approvals are baked in. And then the last piece, which I think is maybe most interesting and something that we haven't even necessarily solved ourselves yet, Vercel, but you hinted at, is how can you see what you're supposed to see?" aria-label="回原文"></button>。Andrew 承认连 Vercel 自己都还没完全解决这层问题。

## 谁在用：从挠自己的痒处开始

Char 介绍了采用情况：最初瞄准企业是因为需求都来自那里，加上「挠自己的痒处」——Vercel 内部所有智能体都跑在 Eve 上，现在有数百个。发布后很快有数千外部用户采用，不止企业客户，hobby 和 pro 用户都有，用例从企业自动化业务职能，一直到爱好者周末搭一个 iMessage 多人游戏智能体 <button class="pd-ts" data-t="25:05" data-who="Char" data-en="And what is the sort of rollout and usage look like? Yeah. As Barbara said, we did initially target enterprise, given that that was where most of the requests came from." aria-label="回原文"></button>。

职能分布最初偏工程，后来 go-to-market 团队把所有东西都搬上了 Eve，市场部用它做内容创作和社交媒体自动化，产品团队把文档喂给智能体回答内外部问题、有时直接在 Slack 上分享给客户。非工程团队用法上浮出三种模式：最常见的对话式智能体（主要走 Slack，Vercel 是一家 Slack 公司）；后台智能体（跑报告然后发到 Slack 或邮件）；以及智能体驱动的 web 应用——前端是普通应用，背后由智能体驱动，GTM 团队是这种的大用户 <button class="pd-ts" data-t="28:05" data-who="Char" data-en="Or do their agents look very similar to the engineering-developed agents? Yeah, there are three types I've seen, I would say. The most common one is the conversational agents where the agent is channeled through Slack mostly." aria-label="回原文"></button>。应用侧的真实例子：一个开源 CRM，用户添加线索的姓名和邮箱后，后台智能体自己去研究线索并完成整个流程；还有一个 AI 音乐制作工具，你设定节拍、智能体与你在站点上协作完成音乐 <button class="pd-ts" data-t="30:34" data-who="Char" data-en="And so yeah, it works with your front-ends the way any of your other back-ends would. On the application side, we've actually seen some really cool examples of our users shipping web apps with Eve." aria-label="回原文"></button>。

## 基础设施：会话即工作流，15 分钟超时怎么跑出无限时长

云端规模化最硬核的部分在这。Eve 构建在 Vercel 的 workflow 之上——Andrew 说这基本上是他们版本的 Temporal（一个把长流程做成可持久化、可恢复的[[工作流|工作流]]的系统）。建模方式是：单个工作流就是单个 Eve 会话，每个会话与其他会话完全隔离；一千个会话和一个会话对你来说不该有区别，「云应该替你做这件事」<button class="pd-ts" data-t="35:31" data-who="Andrew" data-en="Like how does Eve handle that? Yeah, so I mean, it really started where we knew we wanted to build EVE on top of workflow, which is basically our version of Temporal, I think a lot of people are familiar with." aria-label="回原文"></button>。

一个巧妙的细节：Eve 跑在[[无服务器函数|无服务器函数]]上，而这类函数历来有 15 分钟超时，智能体显然会跑得更久。Eve 的解法是——每次调用一个工具，就切换到另一个函数继续这个工作流，因为每次工具调用本来就是一个同步中断点。今天他们实际上为每一个步骤都切换新函数，只要工作流足够快，你感觉不到，智能体因此可以实际无限期运行下去 <button class="pd-ts" data-t="36:21" data-who="Andrew" data-en="And then we do some clever things. So we run on serverless functions, which historically have 15-minute timeouts. These agents obviously can run for a lot longer than 15 minutes." aria-label="回原文"></button>。

与 Next.js 的整合是明确主张：Next 有 pages 目录和新的 app 目录，Eve 的 agent 目录被设计成「必须开箱即用」，可以就放在你的 Next.js 应用旁边；但也可以独立部署、通过 HTTP 连接——Eve 返回一个持久化流，能驱动任何 UI。他们内部对它的定位很干脆：「EVE 是一个后端框架，不是前端框架」<button class="pd-ts" data-t="29:28" data-who="Andrew" data-en="How does this integrate with the rest of the development lifecycle? Yeah, so we wanted a pretty opinionated story with Next.js, right? So Next has the pages directory and then more recently the app directory." aria-label="回原文"></button>。发消息时还可以指定输出 schema，Eve 会生成一个 SubmitResult 工具来验证 schema，产出不符就回提示让模型重做，于是你可以「用智能体方式生成」UI 需要的那种形状的数据。

## 记忆与自我进化：Andrew 当前最大的工作

持久化[[记忆|记忆]]是 Andrew 说自己「现在正在做的最大的一件事」，全部以 PR 形式开放。设计上是一个一等公民的 Memory 目录，里面可定义多个记忆槽位（slot）：比如一个全局槽位、一个只属于你个人的槽位、甚至频道加用户的槽位，智能体据此有多个记忆库可读写。关键护栏是确定性：经典反例是你几乎永远不想要一个接收用户 ID 作为参数的工具调用——你不想让智能体去「猜」用户 ID；绑定到记忆槽位的工具把身份在底层注入函数调用，它就猜不错了 <button class="pd-ts" data-t="40:37" data-who="Andrew" data-en="Can we define what you mean when you say, like, oh, we're going to define a few slots for this? Oh yeah, I use it specifically in memory. So yeah, when I generally say slots, I'm talking about basically our top-level directories, right?" aria-label="回原文"></button>。

暴露机制采用了 provider（提供者）模式：Eve 确定性地调用三个函数——recall（回忆）、save（保存）和 tools——provider 想怎么做完全随意。随框架发布的文件 provider 极简：recall 把记忆文件整个作为上下文返回，save 完全不实现，工具只有「添加记忆」和「遗忘记忆」，改动后重新存到 blob 存储。

而第三方 SuperMemory 这类 provider 形态完全不同：它们可能不暴露任何工具，而是在确定性的 save 时机拿走消息历史、自己跑一个智能体流程决定存什么，recall 也是基于入站消息做智能体检索 <button class="pd-ts" data-t="42:23" data-who="Andrew" data-en="What does that look like? Yeah, so we took a stance here where we have this concept called provider. And the provider can give whatever tools it wants." aria-label="回原文"></button>。recall 在循环每一轮都会被调用，还在 compaction（上下文压缩）之后再次调用——因为压缩不保证保留你的记忆，像 SuperMemory 可以检查压缩后的内容决定是否重新注入。默认注入方式是追加 user 角色（避免打破提示词缓存），也可改成 system 角色，代价是每次增删都打破缓存。

自我进化则是另一条路：不像 Hermes 那类可以就地改自己代码再重启的东西，Eve 选择深度依托 Git——做一个可定义的编码子智能体，给它配好带代码库的沙箱和提示词，目标实际上是「让它对自身开 PR」<button class="pd-ts" data-t="39:31" data-who="Andrew" data-en="But for other things, you literally have to write code to go make it happen in EVE. And for now, we're going to lean pretty heavily into Git, right? Like our customers are using Git." aria-label="回原文"></button>。主持人和 Andrew 都认可这个模型的好处：监督级别完全由你配置——想让它自行合并就建自动化，想全走重度人工审查也一样配置。

## 愿景与边界

Andrew 的愿景是一条设计原则：「我们要押注模型会变得更聪明」。他们见过很多智能体框架纵向膨胀、代码越来越多、最后变成一堆确定性工作流 API、不太像智能体了；Eve 反向选择横向走——给模型提供更多东西（目录结构、skills、文档），让它自己做对决策 <button class="pd-ts" data-t="48:00" data-who="Andrew" data-en="What are you excited about? Yeah, for me, I mean, one of the very early principles behind Eve was we're going to bet on the models getting smarter. And the way we designed the framework was really meant to take advantage of this." aria-label="回原文"></button>。

Char 的说法更激进：「创建公司就是在构建智能体」。EVE 比你的公司注册证书更根本——智能体早于你的网站、域名甚至公司注册；你从智能体开始，它逐步为你构建软件工厂，包括完整的软件开发生命周期，你的工作是微调那座工厂，而 EVE 有望成为公司未来的大脑 <button class="pd-ts" data-t="48:55" data-who="Char" data-en="And we think EVE is going to take advantage of that in a great way. Awesome. What about you, Shar?" aria-label="回原文"></button>。

主持人立刻追问了 lock-in 问题。Andrew 回应：已有客户在 Kubernetes 上甚至自己的硬件上跑 Eve，靠的是 workflow 里「world」的抽象——只要能为你的基础设施定义一个 world（他们自己测试就跑 Postgres world、本地 world 等多种），就能自托管。记忆、自我进化这类能力的关键是尽早定好适配器契约——比如动态调度在 Vercel 上是一等公民，但自托管得自己引入实现——不能等它在 Vercel 上跑通之后才事后补 <button class="pd-ts" data-t="49:36" data-who="Andrew" data-en="That's kind of where we're heading. Well, that makes me think immediately, what's the hosting story outside of Vercel? I mean, obviously it's great that you guys can manage all of this and all this sort of thing, but if I'm building my company on top of this, I want to know that I can move it where I need to move it whenever that might happen." aria-label="回原文"></button>。

开源贡献模式上还有个真实的尴尬：测试套件要调用模型、真实部署项目、用一堆密钥，所以外部贡献的 PR 没法直接跑测试——他们得小心拉进沙箱确认无恶意，再以合著者名义用自己账号重新提交才能跑。他们内部甚至有 Eve 智能体每天分析这些 PR、挑出该接纳的。而整个 EVE 团队从三月到七月中旬其实只有两个人全职，刚又招了四人，现在工程侧约六人 <button class="pd-ts" data-t="46:09" data-who="Andrew" data-en="So actually, that's kind of an interesting question. So this is a Vercel project. You all are open sourcing it, it looks like." aria-label="回原文"></button>。

## 本集带走

- **一个 instructions.md 就是一个智能体**：Eve 用目录结构声明式定义智能体，配置编译成基础设施即代码，加 skills 得沙箱、加 schedules 得定时事件——平台只供给你用到的。
- **skills 是渐进式披露**：不用把所有上下文塞给模型，只给「何时该用」的提示，模型自己决定何时深入拉取；DZero 九成内容都是 skills。
- **evals 当测试套件用**：Eve 用自己的 eval 框架测 Eve，一天多次发版靠它兜底；确定性断言（工具被调用）+ LLM as judge（给 SQL 打分）两级都要有。
- **会话即工作流**：每个会话对应一个可持久化、可恢复的工作流；靠「每次工具调用切换新函数」绕过无服务器 15 分钟超时，智能体可无限期运行。
- **权限分层做**：频道层认身份、context 对象区分提问者与发起者、工具审批随渠道渲染、DefineDynamic 按调用者切换工具集——核心原则是把权限做成智能体之下的确定性层，别让模型猜用户 ID。
- **记忆用 provider 模式解耦**：Eve 只确定性调用 recall/save/tools 三个钩子，简单文件 provider 和 SuperMemory 式的服务端智能体检索可以共存；默认追加注入以免打破提示词缓存。
- **自我进化走 Git 开 PR**：智能体改自己靠编码子智能体对自身仓库开 PR，监督级别（自合并到全人工审查）由你配置。
- **押模型变聪明，不押框架变厚**：框架横向走（给模型更多材料），避免长成满是确定性的工作流 API。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">一个经典的例子是：你几乎永远不想要一个接收用户 ID 作为输入的工具调用。</span>  
> *So the classic example is you almost never want a tool call that takes in a user ID, for example.*  
> <span class="qm">—— Andrew Barba · [41:20]</span> ^q1

> <span class="qz">对我来说，Eve 背后很早期的一条原则就是：我们要押注模型会变得更聪明。</span>  
> *Yeah, for me, I mean, one of the very early principles behind Eve was we're going to bet on the models getting smarter.*  
> <span class="qm">—— Andrew Barba · [48:00]</span> ^q2

> <span class="qz">我们见过的很多其他智能体框架是纵向扩展的——代码看起来越堆越多。</span>  
> *I think a lot of other agent frameworks that we had seen, they scaled vertically where they just appeared to get more and more code.*  
> <span class="qm">—— Andrew Barba · [48:11]</span> ^q3

> <span class="qz">所以这个想法是：Eve 比你的公司注册证书更根本。</span>  
> *So the idea is that EVE is more fundamental than your certificate of incorporation.*  
> <span class="qm">—— Shar Dara · [49:03]</span> ^q4

> <span class="qz">你的智能体早于你的网站、你的域名，甚至早于注册公司。</span>  
> *So your agent predates your websites, your domain name, and even incorporating the company.*  
> <span class="qm">—— Shar Dara · [49:09]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同公司:Vercel · 同概念:MCP、技能 (skills)、智能体 (agent)、记忆 (memory)、评测 (evals)</span>
- [[2026-09-14-talks-how-we-solved-agent-building-andrew-qu-v|Vercel 构建「每桌一个智能体」：从失败的多智能体到文件系统智能体]]<span class="pd-rz">同公司:Vercel · 同概念:Eve、智能体 (agent)、沙箱 (sandbox)、Next.js</span>
- [[2026-08-05-lennys-build-an-ai-code-review-bot-in-30|用 AI 审 AI：Vercel 搭建自动批准 PR 机器人实操]]<span class="pd-rz">同公司:Vercel · 同概念:Eve、智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-20-talks-prototyping-as-leadership-how-a-cto-ship|管理者日程突然能写代码了：CTO 的通宵智能体工作流]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)、评测 (evals)</span>
- [[2026-07-26-lennys-anthropics-first-technical-pm-on|Anthropic 产品负责人:评估是新的 PRD,不反驳你的 AI 才是好 AI]]<span class="pd-rz">同概念:技能 (skills)、评测 (evals)、MCP</span>
- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同公司:Vercel · 同概念:智能体 (agent)</span>

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
