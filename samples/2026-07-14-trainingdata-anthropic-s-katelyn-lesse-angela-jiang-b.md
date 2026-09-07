---
title: Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」
podcast: Training Data
date: 2026-09-08
source_url: undefined
duration: "48:23"
type: episode
cover: "#64748b"
image: "/covers/2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b.jpg"
description: Anthropic 平台负责人 Caitlin 与 Angela 拆解 Claude 开发者平台的知识、执行、协调三层抽象，并主张下一个创新前沿是给 token 分配不同工作的「策略」。
companies: ["[[Anthropic]]", "[[Claude]]"]
concepts: ["[[Messages API]]", "[[Claude Managed Agents]]", "[[Claude Tag]]", "[[策略]]", "[[智能体]]", "[[harness]]", "[[上下文工程]]", "[[提示词缓存]]", "[[技能]]", "[[记忆]]", "[[评估]]", "[[MCP]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/covers/2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b#post","headline":"Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b","mainEntityOfPage":"https://talk.solomind.cc/2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b","description":"Anthropic 平台负责人 Caitlin 与 Angela 拆解 Claude 开发者平台的知识、执行、协调三层抽象，并主张下一个创新前沿是给 token 分配不同工作的「策略」。","datePublished":"2026-09-08","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b.jpg","about":[{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"Claude"},{"@type":"Thing","name":"Messages API"},{"@type":"Thing","name":"Claude Managed Agents"},{"@type":"Thing","name":"Claude Tag"},{"@type":"Thing","name":"策略 (strategies)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"上下文工程 (context engineering)"},{"@type":"Thing","name":"提示词缓存 (prompt caching)"},{"@type":"Thing","name":"技能 (skills)"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"MCP"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」","item":"https://talk.solomind.cc/2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」

<div class="pd-byl">2026-09-08</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但下一层是关于，好，如果 token 并不是真正可互换的，你需要给它们分配不同的工作，比如这个 token 负责建议、那个负责执行，这个在「做梦」、那个在执行，诸如此类，你会想开始组合这些协同配合的编排式策略</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="11:34" data-who="嘉宾" data-en="But the next one is about, okay, if tokens aren't really fungible and you need to give them different jobs, like maybe this token is advising versus this token is executing, this token is dreaming versus this token is executing, so on and so forth, you want to start composing these kind of orchestrated strategies that go together" aria-label="回原文"></button></div></div>

> [!info] 关联
> **公司** [[Anthropic]] · [[Claude]]
>
> **概念** [[Messages API]] · [[Claude Managed Agents]] · [[Claude Tag]] · [[策略]] · [[智能体]] · [[harness]] · [[上下文工程]] · [[提示词缓存]] · [[技能]] · [[记忆]] · [[评估]] · [[MCP]]

这一集聊的是 [[Anthropic|Anthropic]] 的平台团队——既是对外的开发者 API(大家构建应用时接入 [[Claude|Claude]] 智能的那一层)，也是对内支撑 Anthropic 自家产品的基础设施。两位主角 Caitlin 和 Angela 负责这套平台，主持人称它是「世界上最重要的开发者平台之一」。

团队有两个北极星：对内给自家团队最大杠杆、让他们快速发布产品；对外是「业务在哪里，我们就在哪里」——深度集成 AWS、Google 等云厂商，让任何构建者都能用 Claude 做定制软件。Angela 的一句话点出了背景判断：定制软件的「最后一公里」以前在经济上不可能，现在理论上应该非常容易实现 <button class="pd-ts" data-t="02:04" data-who="Angela" data-en="They're a separate solar system, so it's fine. But on the internal side, like we really want to provide is like literally as much leverage as possible for our internal teams to be able to ship like AGI-pilled products." aria-label="回原文"></button>。

最有信息量的一个钩子是：在他们看来，**token 并不是完全可互换的**——你可以让这个 token 执行任务、让那个 token 提供建议、让另一个「做梦」(探索)，围绕这个思路组合出的东西，他们叫「[[策略|策略]]」(strategies)。这是全集反复出现的核心概念。

## 平台是一个三层蛋糕

一年多前，平台基本只有一个 [[Messages API|Messages API]]——无状态、一问一答 <button class="pd-ts" data-t="06:14" data-who="Caitlin" data-en="How do you think about the, I guess, the layer cake of abstractions above that? Yeah, if you look back, so when I joined Anthropic around a year ago, the platform was basically just the Messages API." aria-label="回原文"></button>。随着模型越来越擅长长时间运行、处理更多上下文，他们发现客户和自己都在反复解决同样的问题，于是开始把基础能力打包成更高阶的抽象。Angela 给出的框架是这个「蛋糕」有三层 <button class="pd-ts" data-t="09:13" data-who="Angela" data-en="We'd love to hear. Yeah, I think maybe one framing I would give for some of the constructs that Caitlin was talking about is like, and this is a bit of an oversimplification, but effectively there's approximately like three layers of this cake." aria-label="回原文"></button>:

- **知识层**：懂得怎么用 Claude——Messages API 的具体参数形状(体现模型设计：怎么思考、怎么尊重参数、怎么做工具调用)、标准化的工具、以及 skills 和 memory(把不同时点可注入的上下文标准化)。
- **执行层**：让 Claude 真正干活——编辑多个系统里的文件、输出结果，这需要基础设施：有治理和安全的沙箱(隔离运行环境)、可恢复的会话存储、prompt 缓存、上下文窗口管理。这一层的具象产品是 **[[Claude Managed Agents|Claude Managed Agents]]**:一个通用但高性能的 harness([[harness|工具套件]])，托管了这些枯燥但关键的细节。
- **协调层**：就是上面说的「策略」——一个「元 harness」,给不同 token 分配不同工作(建议、执行、做梦、评分)，编排组合。这是路线图的方向：抽象会越来越多地从知识层走向执行层、再走向协调层。

## 不执着于「跑在我的基础设施上」

一个可能反直觉的开放姿态：对执行层，他们并不坚持你必须用他们的沙箱和存储。他们推出了自托管沙箱，并与 Modal、Vercel、Cloudflare 甚至 Amazon 的新微型虚拟机合作，让这些都能即插即用；还推出 [[MCP|MCP]] tunnels,让你能穿透防火墙调用自己内网的 MCP 服务器 <button class="pd-ts" data-t="16:11" data-who="Caitlin" data-en="Yeah, so maybe in using Angela's kind of layered cake that we talked about a little bit earlier, you'll see that on some pieces of this, like execution, for example, what we've done within something like Claude Managed Agents, and I think over time you'll see us try to make this a little bit more modular," aria-label="回原文"></button>。

重要的是「如何把[[智能体|智能体]]组合起来的架构」这件事上他们有强烈观点，底层跑在谁的机器上不重要。生态上他们还推动标准(skills、MCP),甚至在安全互操作上做标准制定——比如联合防范网络攻击和欺诈。Angela 的类比：AI 像电，之所以是变革性技术，是因为它能接入一切、人人可访问，而这靠的是标准和生态，不是任何一家能独自做到的。

## 选垂直赛道的两个框架

第一个是「展示新的形态因子」：产品不一定冲着最大市场去，而是展示「还有这种做法」。例子是 Claude Design——不搞传统的所见即所得设计系统集成，而是纯粹让 Claude 生成代码来做设计，早期实验发现它真能做到 <button class="pd-ts" data-t="17:13" data-who="Angela" data-en="And we think that that generally is a thing that works really well. Yeah, I think on the kind of like verticals where we might build products, you know, I think we kind of have like two frames here." aria-label="回原文"></button>。

很多这类内部项目「酷两周就换下一个」，甚至从不发布。第二个框架才是正经看 TAM(总可用市场)，且他们偏好 **token 密集**的领域——判断标准是：一轮结束后，你是「做完了就走」，还是「太爽了，我要做更多」？

编程显然是后者，所以他们也在金融、法律这类有迭代流动的领域做垂直化(如 Claude for Financial Services),同时提供从 Messages API 到 Managed Agents 到插件的不同接入深度。[[Claude Tag|Claude Tag]] 则是把企业内部智能体平台(如 Shopify、Square 都自建的那种)打包成一个现成产品。

## Claude Tag 不是「一个 Slack 机器人」

发布时有很多「不过是个 Slack 机器人」的嘲讽。Angela 的回应：在 Slack 里 @ 它只是接口，不是重点；重点是引擎盖下的[[上下文工程|上下文工程]]和架构，好让「Tag 就是能直接用」<button class="pd-ts" data-t="23:46" data-who="Angela" data-en="But that's not really the important part. The important part is all the kind of context engineering and architecture that we put underneath the hood so that tag just works." aria-label="回原文"></button>。

它的体验目标是「像一个同事」：你入职，它进入你的频道，主动、弄清楚了什么有用、帮你把事办成——问它怎么提交报销单就行，不用再到处找人。他们形容这是一个**组织级别的 harness**(org-level harness)。

> 【背景】「org-level harness」(组织级别的 harness)这一说法借自 Andrej Karpathy(前特斯拉 AI 总监、OpenAI 创始成员)对智能体的评论。

## harness 到底该做什么：删掉引导，让它跑更久

关于最佳实践，Caitlin 很直白：prompt 缓存——去做，能省很多钱；保持上下文窗口干净(清掉旧工具调用、用程序化方式调用工具)；然后是 evals([[评估|评测]])<button class="pd-ts" data-t="27:29" data-who="Caitlin" data-en="I'm surprised we got this far into this thing before one of us said the word evals, but you need evals to make sure that what you're trying to accomplish is performance." aria-label="回原文"></button>。但她认为这些底层细节「没那么多汁可榨」，有趣的创新在更高一层：同一个 token,可以花在执行上，也可以花在反思过去的会话并把经验写进[[记忆|记忆]]、向更大的模型请教以指导小模型、或者执行后由评分器打分决定重试。

Angela 补充了底层逻辑：两年前 harness 是脚手架，要砌两面墙逼模型走直线；现在模型非常「可引导」，引导直接写进 prompt 就行——**如果你的 harness 是为引导设计的，那部分可以删掉**。harness 该做的是允许模型跑得更久，比如走完 B 再走 C、F、Z 再回来汇报 <button class="pd-ts" data-t="28:53" data-who="Angela" data-en="But I don't know that there's necessarily so much juice to squeeze in a lot of cases out of that layer as compared to a layer higher than that. Yeah, and one of the reasons for that, I think, is it has to do with the generations of the models." aria-label="回原文"></button>。

那有没有通用 harness?他们的观点是**没有**——但通用的部分(prompt 缓存这类)不必自己持有；真正值得自己掌控的是模型与你的执行之间的**验证逻辑**，在法律、金融这种出错有后果的领域，微调这最后一点会带来巨大差异，甚至决定用户最终用谁的产品 <button class="pd-ts" data-t="30:36" data-who="Angela" data-en="Our opinion is yes. I don't think there's a general harness. I think there are some capabilities that are obviously very general and they tend to be very useful." aria-label="回原文"></button>。

至于上下文，她认为有点被过度炒作了：任何 harness 都能处理很多上下文，有独家数据当然有优势，但那不算 harness 层面的护城河 <button class="pd-ts" data-t="32:10" data-who="Angela" data-en="And then I think it's going to be about like some of these kind of like higher order strategies on how well you're able to actually like allocate your token budget." aria-label="回原文"></button>。他们想达到的终点是：你直接告诉智能体「这是我要的结果，这是我要花的预算」，预备、开始 <button class="pd-ts" data-t="33:41" data-who="Caitlin" data-en="You can do a whole bunch of different things, MCP servers and things like this. And I think where we want to get to is a point where you can literally just tell an agent, here's the outcome I want and here's the budget that I want to spend, like ready, set, go." aria-label="回原文"></button>。

## 从最先进的用户身上学到的

最有意思的创新发生在「上下文与连接层」：有客户在不同模型和平台上各自构建了最擅长的智能体，然后在一个智能体之上暴露 MCP server,让另一个智能体能调用它上面的工具——跨平台协作，跑通了；有医疗公司在跟连 API 都没有的老系统打交道，用 computer use(让模型操作电脑界面)做自动化；还有客户为整个后台办公搭建了自创的上下文流水线。另外，使用量的行业趋势在变：编程之外，制造业正在兴起——他们有产品经理专门飞到底特律去了解客户。

## 从 token 狂飙到 token 理性化

对于「token maxing 之后是 token rationalization」的说法，他们认为这是自然周期，但关键警告是：**不要停止 AI 使用**——那是错误的举动 <button class="pd-ts" data-t="39:29" data-who="Angela" data-en="And in that world, it is kind of hard to manage because these things are, again, they're very token hungry, ultimately. And so what we try to encourage our customers is you don't want to stop the innovation." aria-label="回原文"></button>。很多公司的 AI 支出是通过影子 IT 爆发的，员工就是想用，不知不觉半个组织都装上了 Claude Code。

正确的做法不是设一刀切的上限，而是构建按任务复杂度路由的架构：难题路由到大模型，简单任务路由到便宜模型。路由只会在 Claude 模型家族内部做——他们有一个强信念：harness 和智能体层应该针对你用的模型家族来调校，行业也正从「换个模型插进同一个 harness」往上走一层、改为插整个绑定模型家族的智能体(如 Vercel 的做法)。Caitlin 用在 Stripe 时的类比：当年他们盯着 AWS 账单，发现配置不当的后台任务狂烧 CPU,就设护栏找到它、客气地请工程师关掉——AI 成本治理也会走到这一步，但要从侧面看「同样成果能不能用更聪明的策略、更低成本达成」，而不是把创新掐死。

## 接下来：把「策略」做成产品

未来两个月他们在构建「让你能组合策略」的能力。Angela 给了一个具体例子：做一个 bug 猎捕智能体，通常只有两个杠杆——换更大的模型、或让它跑更久；但实验发现还有第三个杠杆，回报大得多：**best-of-n**(并行跑多个、取最好的结果)。

说说容易、论文很多，但真正建成并投入生产非常难，要自建一堆自定义 harness——「我们看到这就是 alpha 所在，而且它很难」<button class="pd-ts" data-t="43:38" data-who="Angela" data-en="Is there anything that you guys are excited about building over the next two months that you can share a hint at what might come next? Yeah, I mean, I know we said this word like 20 million times, I apologize, but we really are trying to build ways for you to compose strategies." aria-label="回原文"></button>,所以他们的哲学是：回报大且难的东西，就把它做简单给你用。一年前谈的「智能体蜂群」其实就是策略的一种。同时他们也在补「基本门槛」：企业级安全合规控制、平台更模块化(想单独用记忆就用记忆)、以及给周末开发者更开放、更可折腾的体验。

## 本集带走

- **用「三层蛋糕」定位你该建什么**：知识(skills、memory、API 参数)→ 执行(harness + 沙箱、会话存储等托管基础设施)→ 协调(策略)。普通企业不必自己爬山，直接用高阶打包产品；AI 原生初创才需要从原语玩起。
- **底层细节别过度打磨**：prompt 缓存、清理上下文窗口、写 evals 就是最主要的最佳实践，这层能榨的价值有限；值得自己掌控的是**验证逻辑**(尤其法律、金融)和 token 预算分配策略。
- **删掉引导型脚手架**：模型已经足够可引导，只让 harness 做「允许它跑更久」的事，把精力放到元层——反思写记忆、大小模型协作、执行后评分重试、best-of-n。
- **控制成本的正确姿势**：不要一刀切封顶(那会扼杀创新)，按任务复杂度路由到大小模型，事后审视「同样成果有无更省的路径」。
- **接口会不断换，上下文工程才是护城河**：Claude Tag 表明，智能体会直接长在 Slack、WhatsApp 这些人类协作形态里，比拼的是引擎盖下的架构。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">但下一层是关于，好，如果 token 并不是真正可互换的，你需要给它们分配不同的工作，比如这个 token 负责建议、那个负责执行，这个在「做梦」、那个在执行，诸如此类，你会想开始组合这些协同配合的编排式策略</span>  
> *But the next one is about, okay, if tokens aren't really fungible and you need to give them different jobs, like maybe this token is advising versus this token is executing, this token is dreaming versus this token is executing, so on and so forth, you want to start composing these kind of orchestrated strategies that go together*  
> <span class="qm">—— 嘉宾 · [11:34]</span> ^q1

> <span class="qz">我们实际上并不执着于说，你应该在我们的基础设施上运行这些东西。</span>  
> *We actually aren't precious about, you should run these things on our infrastructure.*  
> <span class="qm">—— 嘉宾 · [16:11]</span> ^q2

> <span class="qz">所以对这一年的 AI 开发来说很棒的东西，很可能对下一年的 AI 开发来说就不那么棒了。</span>  
> *So what might be awesome for one year's worth of AI development will probably not be awesome for the next year's worth.*  
> <span class="qm">—— 嘉宾 · [17:28]</span> ^q3

> <span class="qz">而且我觉得我们想要达到的境地是，你可以直接告诉一个智能体：这是我想要的结果，这是我想要花的预算，预备、各就各位、开始。</span>  
> *And I think where we want to get to is a point where you can literally just tell an agent, here's the outcome I want and here's the budget that I want to spend, like ready, set, go.*  
> <span class="qm">—— 嘉宾 · [33:41]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-11-talks-evolution-of-agentic-surfaces-gagan-bhat|Anthropic 构建生产级智能体的教训:harness 须为模型能力演进而生]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude Managed Agents、上下文工程 (context engineering)、工具套件 (harness)、智能体 (agent)、Messages API</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude Tag、工具套件 (harness)、智能体 (agent)、记忆 (memory)</span>
- [[2026-07-13-pg-the-complete-claude-stack-for-pms|产品经理驾驭 Claude 生态：用五层架构打造专属 AI 幕僚长]]<span class="pd-rz">同公司:Claude · 同概念:MCP、技能 (skills)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-26-lennys-anthropics-first-technical-pm-on|Anthropic 产品负责人:评估是新的 PRD,不反驳你的 AI 才是好 AI]]<span class="pd-rz">同公司:Anthropic、Claude · 同概念:技能 (skills)、评测 (evals)、MCP</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Anthropic、Claude · 同概念:MCP、智能体 (agent)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic、Claude · 同概念:智能体 (agent)</span>

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
