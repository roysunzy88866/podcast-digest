---
title: "让开,别挡模型:Google Antigravity 的智能体团队打法"
podcast: 精选演讲
date: 2026-10-01
source_url: undefined
duration: "18:52"
type: episode
cover: "#64748b"
description: "Google Antigravity 工程负责人 Kevin Howell 讲述智能体优先产品理念:子智能体、Sidecar、生成式 UI 三大原语,如何让产品随模型能力一起进化。"
guests: ["[[Kevin Hou]]"]
companies: ["[[antigravity]]", "[[Gemini]]", "[[Google DeepMind]]"]
concepts: ["[[智能体]]", "[[子智能体]]", "[[生成式 UI]]", "[[边车]]", "[[随智能扩展]]", "[[智能体编排]]", "[[Agent Manager]]", "[[权限系统]]", "[[评估分析]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-27-talks-get-out-of-the-model-s-way-kevin-hou-goo#post","headline":"让开,别挡模型:Google Antigravity 的智能体团队打法","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-27-talks-get-out-of-the-model-s-way-kevin-hou-goo","mainEntityOfPage":"https://talk.solomind.cc/2026-09-27-talks-get-out-of-the-model-s-way-kevin-hou-goo","description":"Google Antigravity 工程负责人 Kevin Howell 讲述智能体优先产品理念:子智能体、Sidecar、生成式 UI 三大原语,如何让产品随模型能力一起进化。","datePublished":"2026-10-01","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Kevin Hou"},{"@type":"Organization","name":"antigravity"},{"@type":"Organization","name":"Gemini"},{"@type":"Organization","name":"Google DeepMind"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"子智能体 (sub-agent)"},{"@type":"Thing","name":"生成式 UI (generative UI)"},{"@type":"Thing","name":"边车 (Sidecar)"},{"@type":"Thing","name":"随智能扩展 (scaling with intelligence)"},{"@type":"Thing","name":"智能体编排 (agent orchestration)"},{"@type":"Thing","name":"Agent Manager"},{"@type":"Thing","name":"权限系统 (permission systems)"},{"@type":"Thing","name":"评估分析 (eval analysis)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"让开,别挡模型:Google Antigravity 的智能体团队打法","item":"https://talk.solomind.cc/2026-09-27-talks-get-out-of-the-model-s-way-kevin-hou-goo"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>让开,别挡模型:Google Antigravity 的智能体团队打法</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 让开,别挡模型:Google Antigravity 的智能体团队打法

<div class="pd-byl"><b>Kevin Hou</b> · Antigravity 工程负责人 · 2026-10-01</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-27-talks-get-out-of-the-model-s-way-kevin-hou-goo.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">想象你执教阿根廷队,比赛进行到第 89 分钟,而你的队里有 Messi。</div><div class="a">— Kevin Hou <button class="pd-ts" data-t="00:44" data-who="Kevin Hou" data-en="Imagine you are coaching Argentina and you're in the 89th minute and you have Messi on your team." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Kevin Hou]]
>
> **公司** [[antigravity]] · [[Gemini]] · [[Google DeepMind]]
>
> **概念** [[智能体]] · [[子智能体]] · [[生成式 UI]] · [[边车]] · [[随智能扩展]] · [[智能体编排]] · [[Agent Manager]] · [[权限系统]] · [[评估分析]]

Google 的[[智能体|智能体]]编程产品 Antigravity 是什么?讲这些的是 Kevin Howell,Antigravity 工程团队其中一部分的负责人,这是他第五次在 AI Eng 演讲。

开场他打了个比方:你执教阿根廷队,第 89 分钟,队里有 Messi——你会跑什么战术?「把球交给 Messi,然后让开。」LLM 不再只是角色球员,如果你在它周围构建合适的产品,它可以成为你的明星球员;而要让明星球员发挥,你必须**让开、不挡在模型的道路上**。<button class="pd-ts" data-t="00:43" data-who="嘉宾" data-en="So are there any World Cup fans out there? Woo! Imagine you are coaching Argentina and you're in the 89th minute and you have Messi on your team." aria-label="回原文"></button><button class="pd-ts" data-t="00:57" data-who="嘉宾" data-en="It's called give Messi the ball and get the heck out of the way. LLMs aren't just role players anymore. They can be your star player if you build the right product around them." aria-label="回原文"></button><button class="pd-ts" data-t="01:05" data-who="嘉宾" data-en="They can be your star player if you build the right product around them. And to let your star player cook, you have to get out of the model's way. You might want to get this slide." aria-label="回原文"></button>

## 核心理念:随智能扩展

Kevin 从 2022 年起构建开发者工具,他说所有经验教训里最突出的一条,就是「[[随智能扩展|随智能扩展]]」:随着模型变得更好,你的产品也应该变得更好,你所服务的模型的前沿能力,应该在用户的产品体验中清晰可见。<button class="pd-ts" data-t="03:06" data-who="嘉宾" data-en="And the one thing that has stood above all other lessons that I've talked about is the idea of scaling with intelligence. This means that as the model gets better, so should your product." aria-label="回原文"></button><button class="pd-ts" data-t="03:10" data-who="嘉宾" data-en="This means that as the model gets better, so should your product. And the frontier edge of whatever model you are serving should be apparent inside of your user's product experience." aria-label="回原文"></button>

他用自己的经历画出了这条进化线:2022 年做自动补全和聊天侧边栏,基于 embeddings、规则文件、AST 语法树解析,应用里的一切都是确定性的——因为那才是模型能处理的;2024 年智能体登上舞台,带来 MCP、自定义工具、[[权限系统|权限系统]]这些新原语;2025 年 Antigravity 推出 [[Agent Manager|Agent Manager]](一个管理和编排多个智能体的平台),许多产品效仿这种形态,催生了 skills、hooks、artifacts 等原语。<button class="pd-ts" data-t="03:30" data-who="嘉宾" data-en="So for those of you that follow me on X or hear me just yap generally for the last four years, you'll know that I've been working on a number of these sort of transformations year over year over year." aria-label="回原文"></button><button class="pd-ts" data-t="03:46" data-who="嘉宾" data-en="This was based on embeddings, rules files, AST syntax tree parsing, basically everything inside of that app is deterministic, because that's all that the model could really handle." aria-label="回原文"></button><button class="pd-ts" data-t="03:59" data-who="嘉宾" data-en="With it came new primitives, like MCPs, custom tools, and permission systems. And with 2025, we introduced Antigravity's Agent Manager with many other products following suit in that similar form factor, with users managing many agents at once in parallel." aria-label="回原文"></button>

但这条路不好走。他坦言「随智能扩展」真的不容易——要拿走用户喜爱且熟悉的东西,把他们引导向一条**潜在的**(他强调这是个关键词)更好的路径,非常难,而且他们不是 100% 都对。他举了两个挨骂的例子:一是给 AI 终端权限,当年大家都怕模型删光整个代码库,但随着模型变好、加上权限系统这些原语的投入,用户构建得更快、发布得更多,而且是安全地做到的;二是从 Windsurf 移除聊天侧边栏、只留智能体,用户对他大喊大叫——但如今回看,多步骤的智能体式研究与执行已成为新范式。<button class="pd-ts" data-t="04:29" data-who="嘉宾" data-en="Before we answer this question, I want to take you back to some of these battle scars that are a little bit closer to home. Scaling with intelligence really is not easy." aria-label="回原文"></button><button class="pd-ts" data-t="04:47" data-who="嘉宾" data-en="We aren't right 100% of the time, but there are two that jumped to mind when I was putting together the slides for this talk. The first one is giving AI a terminal." aria-label="回原文"></button><button class="pd-ts" data-t="05:17" data-who="嘉宾" data-en="So we were able to overcome this, and as models got smarter, they were able to make better decisions about what they should and should not run in your terminal." aria-label="回原文"></button><button class="pd-ts" data-t="05:33" data-who="嘉宾" data-en="So a lot of users were yelling at our team because we took away something that was very dear to them, the chat sidebar, and replaced it with only an agent. Now, at the time, this is something that was familiar and rather difficult to swallow." aria-label="回原文"></button>

## 今天的战役:IDE 之于 Agent Manager,如调试器之于 IDE

Antigravity 2.0 把智能体管理器和 IDE 拆成两个独立应用。Kevin 给出的判断是:IDE 之于智能体管理器,就像调试器之于 IDE——你不总需要调试器,但需要深入抽象栈更下一层时,有它很有帮助。他们的预测是:[[智能体编排|智能体编排]]——你可以叫它智能体团队、蜂群、软件工厂——就是未来,他们愿意押注这个未来。<button class="pd-ts" data-t="05:53" data-who="嘉宾" data-en="What is going on today? So we decoupled the agent manager from the IDE, and with antigravity 2.0, we split them into separate applications. We believe that the IDE is to the agent manager what the debugger was to the IDE." aria-label="回原文"></button><button class="pd-ts" data-t="06:06" data-who="嘉宾" data-en="We believe that the IDE is to the agent manager what the debugger was to the IDE. You don't always need a debugger, but it definitely is helpful to have it if you need to go a layer beneath and go one step deeper into that abstraction stack." aria-label="回原文"></button><button class="pd-ts" data-t="06:14" data-who="嘉宾" data-en="You don't always need a debugger, but it definitely is helpful to have it if you need to go a layer beneath and go one step deeper into that abstraction stack. And our prediction is that this idea of agent orchestration, you can call it agent teams, you can call it swarms, you can call it software factories, is the future, and we're willing to bet on that future." aria-label="回原文"></button>

由此提出了 2026 时代的三个新原语:[[子智能体|子智能体]]、[[生成式 UI|生成式 UI]]、Sidecar。<button class="pd-ts" data-t="06:26" data-who="嘉宾" data-en="And our prediction is that this idea of agent orchestration, you can call it agent teams, you can call it swarms, you can call it software factories, is the future, and we're willing to bet on that future." aria-label="回原文"></button>

## 原语一:动态子智能体,与「智能体团队」

在 [[Google DeepMind|Google DeepMind]] 内部做产品的优越之处,是产品与模型之间有直接关系——Kevin 说,多亏了 Antigravity 产品,[[Gemini|Gemini]] 已经学会了如何管理一个智能体团队;多智能体系统在任务分解、协作上还有很大提升空间,但他们已拿到很好的先发优势。今年四月发布的 Gemini 3.5 Flash 把这些能力推向市场,它不仅擅长执行任务,还非常擅长**领导团队**,更快更便宜,推动了智能与速度成本之间的 Pareto 曲线。<button class="pd-ts" data-t="07:04" data-who="嘉宾" data-en="The answer is kind of both, right? And the privilege of being inside of Google DeepMind is that we do have that relationship between the product and the model. So you remember the crux of antigravity 1.0 is to manage agents in parallel, to put the human in the driver's seat." aria-label="回原文"></button><button class="pd-ts" data-t="07:23" data-who="嘉宾" data-en="And if you remember my last talk, I talked a lot more about this research product flywheel. And now, as promised, because of the antigravity product, Gemini has now learned a thing or two about how to manage a team of agents." aria-label="回原文"></button><button class="pd-ts" data-t="08:01" data-who="嘉宾" data-en="Gemini 3.5 Flash was launched back in April, and this brought to market a lot of those capabilities that we had been working on in the background with Antigravity." aria-label="回原文"></button>

具体怎么用?输入斜杠命令 `/teamwork`,就进入一个新模式:你指定任务,越具体越好,但智能体的沟通风格是信息不够时它会主动向你要;一切清楚后,领导智能体会管理一个**任意规模**的团队来完成工作。

Kevin 的比喻是复仇者联盟——前端工程师、后端工程师、基础设施专家、QA、设计,每个子智能体承担专业化角色,动态生成、可独立运行,甚至可以选用与主智能体不同的模型,而选模型的正是主智能体。「再说一次,我们是在用智能进行扩展。」<button class="pd-ts" data-t="08:21" data-who="嘉宾" data-en="And putting this all together, we were really excited to announce agent teams in public preview inside of Antigravity. All you have to do is simply type the slash command, slash teamwork, and you'll see a new mode where you can enter and unleash a swarm of agents onto the task at hand." aria-label="回原文"></button><button class="pd-ts" data-t="08:35" data-who="嘉宾" data-en="You as a user will specify your task. The more specific you are, the better, though the nature of these agentic communication styles is that if it needs something more, it can actually ask you for more." aria-label="回原文"></button><button class="pd-ts" data-t="09:07" data-who="嘉宾" data-en="A bunch of specialized roles, front-end engineers, back-end engineers, infrastructure specialists, QA design, the list goes on and on and on, and there are infinite possibilities for what each of those sub-agents could take on." aria-label="回原文"></button><button class="pd-ts" data-t="09:18" data-who="嘉宾" data-en="And it can even actually select a different model from what the main agent is using, and this is done so by that main agent. Again, we are scaling with intelligence." aria-label="回原文"></button>

最酷的一个方面是它能用生成式 UI:用 Flash 这样快的模型,你问「我的任务状态是什么?」事情几乎瞬间发生——你说「给我看一个看板」,它就生成看板;你想要 Chrome 调试器那样的时间线,它也能即时生成,因为 UI 是按需生成的。<button class="pd-ts" data-t="09:21" data-who="嘉宾" data-en="Again, we are scaling with intelligence. And one of the coolest aspects of this is that it can use generative UI. With a model that is as fast as Flash, things can happen nearly instantaneously if you ask, hey, what is the status of my task?" aria-label="回原文"></button><button class="pd-ts" data-t="09:40" data-who="嘉宾" data-en="It can show you a timeline like that. And all these things are generated on the fly because it's able to generate UI on demand. So some of the projects that the system has implemented, we've built a photo editor." aria-label="回原文"></button>

这个系统的实战战绩:他们用智能体团队构建过照片编辑器(浏览器内直接编辑 raw 照片)和一个消息应用,每个动用数百个子智能体、运行近半天。而「英雄任务」是从零构建一个完整的操作系统内核,还在上面运行了 Doom。

数据是:93 个子智能体、12 小时、15,000 次请求、20 亿 token、成本低于 1,000 美元。Kevin 为这个里程碑自豪,因为它证明往这类问题里投入更多智能、更多子智能体,Gemini 3.5 Flash 这样的模型就能以强大、可扩展、还算负担得起的方式完成——当然,没人会每天花几千美元去构建操作系统内核,尽管这是可能的。<button class="pd-ts" data-t="10:07" data-who="嘉宾" data-en="And each of these took hundreds of sub-agents and took almost half a day to run. But to really put it through its paces, one of the hero runs that we did was actually building an entire OS kernel." aria-label="回原文"></button><button class="pd-ts" data-t="10:46" data-who="嘉宾" data-en="Obviously, we're not going to spend thousands and thousands of dollars to build an OS kernel every day, though it is possible. And some of the stats out of this, it took 93 sub-agents over the course of 12 hours, made 15,000 requests, 2 billion tokens, and it was under $1,000, which was one of the really cool aspects of this project." aria-label="回原文"></button><button class="pd-ts" data-t="10:23" data-who="嘉宾" data-en="This is something that we got to show off at Google I.O., but we built a complete OS kernel from scratch and actually played Doom on it, and my colleague Varun was able to demo this at Google I.O." aria-label="回原文"></button>

## 内部实战:把研究员的评估分析自动化 90%

第二个例子是他们团队内部在用的:自动化研究任务。他们在 Gemini 内部工作,帮 Gemini 在编码和智能体任务上变得更好,内部版 Antigravity 研究人员、工程师、非技术人员都能用;一旦理解了它提供的原语,它就成了自动化自己工作流的强大方式。<button class="pd-ts" data-t="11:17" data-who="嘉宾" data-en="So agent teams are just that first example, and I want to show you another example that our team uses internally that sort of demonstrates some of these new primitives." aria-label="回原文"></button><button class="pd-ts" data-t="11:29" data-who="嘉宾" data-en="And this is where the real magic starts happening with the product. We have an internal version of Antigravity that researchers, engineers, non-technical folks can use." aria-label="回原文"></button>

典型场景是并排[[评估分析|评估分析]]:取一组任务跑多次 rollout,得到对照和实验两张表,你不仅要弄清差异是什么,还要弄清差异的原因、以及如何迭代出更好的下一版。传统上这是大量 Jupyter Notebook 的手工苦力。而现在,研究员只需用自然语言向智能体提问——这个已被注入 skills、理解了 Google 庞大 monorepo 代码库的智能体——就能把工作流的 90% 自动化,处理数字、返回差值。<button class="pd-ts" data-t="11:42" data-who="嘉宾" data-en="And when they understand the primitives that Antigravity offers, it becomes a very, very powerful way to automate your own workflows. So we'll take the example of side-by-side eval analysis." aria-label="回原文"></button><button class="pd-ts" data-t="12:14" data-who="嘉宾" data-en="Now, you'll look at the control, you'll look at the experiment, and then you'll have to figure out not only what the difference was, but perhaps what are the reasons for those differences and how can we actually iterate from there and make a better version for the next experiment." aria-label="回原文"></button><button class="pd-ts" data-t="12:26" data-who="嘉宾" data-en="Now, traditionally, this was a lot of Jupyter Notebook elbow grease, essentially, but when you start working with the new primitives in 2026, you end up with a lot cleaner of a workflow." aria-label="回原文"></button>

真正酷的是它多做的那一步:它启动一个研究专家智能体,针对差值可能的原因提出 100 个假设,然后为**每个假设**分裂出一个子智能体并行深挖,汇总回单一响应,交给研究员一份可审阅的报告——而且不止于报告,它还组装出生成式 UI,让你下拉筛选、分段切片,真正丰富地与数据交互。过去你要手工构建异步智能体池、设置评判器、用胶带拼数据管道,现在这些全部建立在子智能体图、生成式 UI 这些新原语之上:一个非常手动的流程,现在只需几分钟;用户要做的只是加载一个技能文件,然后开始提问。<button class="pd-ts" data-t="12:47" data-who="嘉宾" data-en="Now what's really cool here is instead of just taking that delta then handing it back to the user, it went the extra step. It spun up for a research agent specialist that proposes 100 different hypotheses over why those deltas might occur." aria-label="回原文"></button><button class="pd-ts" data-t="13:13" data-who="嘉宾" data-en="And what's really cool is that it doesn't stop at just the report. It actually puts together a generative UI for you to look through, interact, select dropdowns, filter, segment, slice, and actually interact richly with that data." aria-label="回原文"></button><button class="pd-ts" data-t="13:40" data-who="嘉宾" data-en="So what used to be a very manual process, now it takes minutes. So what used to be hand engineering, you'd have to build your own async pool of agents, you'd have to set up your judges, you'd have to tape together data pipelines." aria-label="回原文"></button><button class="pd-ts" data-t="13:56" data-who="嘉宾" data-en="You have a sub-agent graph that is completely dynamic. The generative UI comes in at the end to richly convey the findings in a way that the user best understands or maybe caters to their learning style." aria-label="回原文"></button>

## 原语二与三:Sidecar 和生成式 UI

Sidecar 是 Antigravity 带来的新插件协议,本质就是一个 sidecar 进程——一个长驻的工具,负责监听:让模型能监听外部世界,并为可能发生的事设置自己的触发器,比如短信、web hooks、cron 任务、对接 GitHub PR,不胜枚举。它是一个通用的插件原语;Antigravity 已经在基于时间的场景中使用它,计划任务 cron 概念就来自它,规范会在今年夏天晚些时候发布,供大家在这个原语之上构建。<button class="pd-ts" data-t="15:10" data-who="嘉宾" data-en="And now the second is this new concept. We've alluded to it slightly in the past, but it's called Sidecars. This is a new plug-in protocol that we're bringing to Antigravity." aria-label="回原文"></button><button class="pd-ts" data-t="15:23" data-who="嘉宾" data-en="The naming sort of reflects what's going on under the hood. But it's a long-lived utility. And it's responsible for listening." aria-label="回原文"></button><button class="pd-ts" data-t="15:42" data-who="嘉宾" data-en="But this is a generic plug-in primitive. Antigravity already uses sidecars for things that are time-based. This is where the scheduled task cron concept comes from." aria-label="回原文"></button><button class="pd-ts" data-t="15:52" data-who="嘉宾" data-en="But under the hood, this is all this new sidecar primitive. So we'll be releasing the spec for this so that you all can build on top of this new primitive later this summer." aria-label="回原文"></button>

生成式 UI 则更激进。Kevin 的原话是:他们假设**人类编写的专用 UI 已经有点过时了**。Antigravity 上的 Gemini Flash 跑出接近每秒 900 个 token,比很多其他前沿模型的体验快 10 倍——几秒钟内,你脑子里的想法就能变成提示词、再变成一个完美嵌入对话视图的用例;而且不依赖模板或 HTML 文件,UI 是内联渲染的,可以是玩 Doom,也可以是柱状图、表格,任何你想比 markdown 或对话更进一步交互的东西。<button class="pd-ts" data-t="16:05" data-who="嘉宾" data-en="And the third and final primitive is generative UI. So we hypothesize that human-written specialized UIs are kind of dead. Gemini Flash on anti-gravity clocks in at almost 900 tokens a second." aria-label="回原文"></button><button class="pd-ts" data-t="16:12" data-who="嘉宾" data-en="So we hypothesize that human-written specialized UIs are kind of dead. Gemini Flash on anti-gravity clocks in at almost 900 tokens a second. This is 10x faster than a lot of the other Frontier model experiences." aria-label="回原文"></button><button class="pd-ts" data-t="16:29" data-who="嘉宾" data-en="And in a matter of seconds, you're able to go from whatever you were thinking inside of your head into a prompt into a use case that is designed and embedded inside of your conversation view perfectly." aria-label="回原文"></button>

他把这比作 Steve Jobs 发布 iPhone 时为移除键盘辩护的那句名言:每台手机都有键盘,不管你需不需要;控制按钮固定在塑料里,对每个应用都一模一样。以类似的方式,他们把产品构建成随智能体的需求动态扩展,跳过沉重的基础设施和机械化的 UI,换来一种「不固定在塑料里」的产品体验。<button class="pd-ts" data-t="16:58" data-who="嘉宾" data-en="And generative UI in many ways reminds me of the quote that the late Steve Jobs said when unveiling the iPhone. He justifies the removal of the keyboard and says, they all have these keyboards." aria-label="回原文"></button><button class="pd-ts" data-t="17:10" data-who="嘉宾" data-en="And they all have these control buttons that are fixed in plastic and are the same for every application. In an analogous way, we built our product to dynamically scale with the needs of the agent." aria-label="回原文"></button>

## 给构建者的建议

子智能体、Sidecar 触发器、生成式 UI,是驱动 Antigravity 的最新原语。Kevin 的收尾建议:他们尽力不挡路、让模型尽情发挥;如果你在围绕智能体构建产品,应该问自己——我的产品里有哪些原语,它们如何随模型的智能而扩展?

现在发布功能已经很容易,关键是**决定到底要加哪些功能**,好让你的产品能随下一个模型的发布而扩展——那 inevit地会更快、更好、更便宜。有了正确的原语,你可能会对模型能做到的事情感到惊讶。<button class="pd-ts" data-t="17:27" data-who="嘉宾" data-en="And that creates a product experience that is not fixed in plastic. So sub-agents, sidecar triggers, and generative UI are the latest primitives that are powering anti-gravity." aria-label="回原文"></button><button class="pd-ts" data-t="17:45" data-who="嘉宾" data-en="We've tried our best to stay out of the way and let the model cook, and if you're building a product around an agent, you should consider what are the primitives that are in my product, and how might they scale with the model's intelligence?" aria-label="回原文"></button><button class="pd-ts" data-t="18:02" data-who="嘉宾" data-en="We all are familiar with shipping features is now quite easy with all of these new tools, and it's about deciding what features to actually add so that your product can scale with the next release of the next model, which will inevitably be faster, better, and cheaper." aria-label="回原文"></button>

## 本集带走

- **「随智能扩展」是产品演进的第一性原理**:模型每变强一档,产品形态就该跟着换——确定性工具(2022)→ 智能体+权限系统(2024)→ 并行管理多智能体(2025)→ 智能体编排(2026)。拿走用户熟悉的东西换更优路径,会挨骂,但模型进步会证明你是对的。
- **智能体团队的用法**:`/teamwork` 进入,主智能体动态生成专业化子智能体(前端/后端/QA/设计等),并行执行、各子智能体可自选模型;跑一个 OS 内核的实测数据是 93 个子智能体、12 小时、20 亿 token、不到 1,000 美元。
- **评估分析也能被智能体团队吃掉**:研究员用自然语言提问即可自动化 90% 的对比分析,系统自动生成 100 个假设、每个假设派一个子智能体并行验证,最后以可交互的生成式 UI 交付报告——过去要手工搭智能体池、评判器和数据管道。
- **Sidecar 让模型「长出耳朵」**:一个长驻监听进程,可对接短信、web hooks、cron、GitHub PR 等外部事件并设置触发器,今年夏天发布规范,是个通用的插件原语。
- **生成式 UI 取代预制界面**:Flash 近 900 token/秒的速度让 UI 可以按需内联生成——就像 iPhone 砍掉固定键盘,界面不再「固定在塑料里」。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">想象你执教阿根廷队,比赛进行到第 89 分钟,而你的队里有 Messi。</span>  
> *Imagine you are coaching Argentina and you're in the 89th minute and you have Messi on your team.*  
> <span class="qm">—— Kevin Hou · [00:44]</span> ^q1

> <span class="qz">这个战术叫「把球交给 Messi,然后赶紧让开」。</span>  
> *It's called give Messi the ball and get the heck out of the way.*  
> <span class="qm">—— Kevin Hou · [00:53]</span> ^q2

> <span class="qz">LLM 不再只是角色球员了。</span>  
> *LLMs aren't just role players anymore.*  
> <span class="qm">—— Kevin Hou · [00:57]</span> ^q3

> <span class="qz">要让你的明星球员发挥,你必须让开,不要挡在模型的道路上。</span>  
> *And to let your star player cook, you have to get out of the model's way.*  
> <span class="qm">—— Kevin Hou · [01:05]</span> ^q4

> <span class="qz">你所服务的任何模型的前沿能力,应该在你用户的产品体验中清晰可见。</span>  
> *And the frontier edge of whatever model you are serving should be apparent inside of your user's product experience.*  
> <span class="qm">—— Kevin Hou · [03:10]</span> ^q5

> <span class="qz">要拿走用户喜爱且熟悉的东西,把他们引导向一条潜在——这是个关键词——更好的路径,真的非常难。</span>  
> *It's really hard to take away something that users love and are familiar with to lead them down potentially, and that's a big keyword, a better path.*  
> <span class="qm">—— Kevin Hou · [04:31]</span> ^q6

> <span class="qz">我们相信,IDE 之于智能体管理器,就像调试器之于 IDE。</span>  
> *We believe that the IDE is to the agent manager what the debugger was to the IDE.*  
> <span class="qm">—— Kevin Hou · [06:01]</span> ^q7

> <span class="qz">我们的预测是,这种智能体编排的理念——你可以称之为智能体团队、蜂群或软件工厂——就是未来,我们愿意押注于那个未来。</span>  
> *And our prediction is that this idea of agent orchestration, you can call it agent teams, you can call it swarms, you can call it software factories, is the future, and we're willing to bet on that future.*  
> <span class="qm">—— Kevin Hou · [06:14]</span> ^q8

> <span class="qz">而且 Flash 现在不仅擅长执行任务,它实际上非常擅长领导团队。</span>  
> *And Flash now isn't just good at executing tasks, it's actually really good at leading teams.*  
> <span class="qm">—— Kevin Hou · [08:01]</span> ^q9

> <span class="qz">研究人员只需用自然语言询问智能体相关评估,就能将这个工作流程的 90% 自动化。</span>  
> *So researchers were able to automate 90% of this workflow by simply asking the agent about the evals in question using natural language.*  
> <span class="qm">—— Kevin Hou · [12:26]</span> ^q10

> <span class="qz">所以我们假设,人类编写的专用 UI 已经有点过时了。</span>  
> *So we hypothesize that human-written specialized UIs are kind of dead.*  
> <span class="qm">—— Kevin Hou · [16:05]</span> ^q11

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Gemini · 同概念:智能体 (agent)</span>
- [[2026-08-13-talks-continual-learning-how-ai-agents-get-bet|经验差距：让智能体越用越聪明]]<span class="pd-rz">同概念:子智能体 (sub-agent)、智能体 (agent)</span>
- [[2026-08-22-talks-the-agent-behind-the-curtain-building-th|Warp 如何打造云端智能体平台：把复杂性挡在用户之前]]<span class="pd-rz">同概念:子智能体 (sub-agent)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-12-beyondcoding-wes-bos-how-developers-stand-out-when-ai|当所有人都在用智能体写代码，你靠什么脱颖而出：与 Wes 聊开发者的当下]]<span class="pd-rz">同概念:智能体 (agent)、生成式 UI (generative UI)</span>
- [[2026-09-21-talks-the-dark-arts-of-skill-engineering-paul|技能工程的九种黑暗艺术：把 Skill 从提示词做成 Harness 扩展]]<span class="pd-rz">同公司:Gemini · 同概念:子智能体 (sub-agent)</span>
- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同概念:智能体 (agent)</span>

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
