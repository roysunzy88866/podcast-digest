---
title: "当 AI 智能体成为「新员工」:Okta 首席架构师谈智能体身份与安全"
podcast: Engineering Enablement (DX)
date: 2026-09-12
source_url: undefined
duration: "37:23"
type: episode
cover: "#64748b"
image: "/covers/2026-09-11-engenable-how-okta-sets-guardrails-and-context-for.jpg"
description: "Okta 首席架构师 Robert Lucero 谈智能体身份治理、沙箱设计与内部 AI 采用,以及为什么身份层是控制平面而非编排层。"
host: "[[Robert Lucero]]"
cohosts: ["[[Brian Houck]]"]
companies: ["[[Okta]]"]
concepts: ["[[智能体]]", "[[沙箱]]", "[[护栏]]", "[[身份]]", "[[非确定性]]", "[[服务账号]]", "[[AI 采用]]", "[[仓库 AI 就绪度]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/covers/2026-09-11-engenable-how-okta-sets-guardrails-and-context-for.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-11-engenable-how-okta-sets-guardrails-and-context-for#post","headline":"当 AI 智能体成为「新员工」:Okta 首席架构师谈智能体身份与安全","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-11-engenable-how-okta-sets-guardrails-and-context-for","mainEntityOfPage":"https://talk.solomind.cc/2026-09-11-engenable-how-okta-sets-guardrails-and-context-for","description":"Okta 首席架构师 Robert Lucero 谈智能体身份治理、沙箱设计与内部 AI 采用,以及为什么身份层是控制平面而非编排层。","datePublished":"2026-09-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-11-engenable-how-okta-sets-guardrails-and-context-for.jpg","about":[{"@type":"Person","name":"Robert Lucero"},{"@type":"Person","name":"Brian Houck"},{"@type":"Organization","name":"Okta"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"身份 (identity)"},{"@type":"Thing","name":"非确定性 (non-deterministic)"},{"@type":"Thing","name":"服务账号 (service account)"},{"@type":"Thing","name":"AI 采用 (AI adoption)"},{"@type":"Thing","name":"仓库 AI 就绪度 (AI readiness)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"当 AI 智能体成为「新员工」:Okta 首席架构师谈智能体身份与安全","item":"https://talk.solomind.cc/2026-09-11-engenable-how-okta-sets-guardrails-and-context-for"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当 AI 智能体成为「新员工」:Okta 首席架构师谈智能体身份与安全</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 当 AI 智能体成为「新员工」:Okta 首席架构师谈智能体身份与安全

<div class="pd-byl"><b>Robert Lucero</b> · Okta 首席架构师 · 2026-09-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-11-engenable-how-okta-sets-guardrails-and-context-for.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们思考 AI 智能体与给组织新人办理入职的区别时,有趣的一点是:我们对一个人投入了大量隐性的信任——认为他们经过了审查和治理,并且有一定程度的控制。</div><div class="a">— Robert Lucero <button class="pd-ts" data-t="00:00" data-who="Robert Lucero" data-en="What's interesting about how we think about an AI agent versus onboarding somebody new to the organization is that we put a lot of implicit trust into a person, that they are vetted and governed and that they have some levels of controls." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Robert Lucero]] · [[Brian Houck]]
>
> **公司** [[Okta]]
>
> **概念** [[智能体]] · [[沙箱]] · [[护栏]] · [[身份]] · [[非确定性]] · [[服务账号]] · [[AI 采用]] · [[仓库 AI 就绪度]]

这一集聊的是一件几乎所有企业都即将面对的事:当成百上千个 AI [[智能体|智能体]]要在公司系统里干活,谁来管它们能访问什么、能做什么?主角是 [[Okta|Okta]] 的首席架构师 [[Robert Lucero|Robert Lucero]](大家叫他 Bob),他在 Okta 领导生成式 AI 战略,过去 18 个月一直在推动内部工程组织的 [[AI 采用|AI 采用]]。Okta 是做企业[[身份|身份]]管理的公司——就是管「谁有权限访问什么」的那类产品——所以他对这个问题有一个特别的视角:把智能体当成一个身份来治理。

他抛出的最核心的判断是:**AI 智能体应该像新员工一样被「入职」,而不是像[[服务账号|服务账号]]一样被「发令牌」**。这两个东西的区别,恰恰是这一集最有意思的地方。

## 为什么智能体不能像服务账号那样管

服务账号(给自动化程序用的机器账号)的传统做法是:发一个权限很大的令牌,存进保险库,做点追踪,就完事了。Bob 说,这套我们跑了多年的做法,前提是「我们信任这个自动化」——它只会按写死的逻辑跑。但 AI 做不到这一点,它是[[非确定性|非确定性]]的,这正是它强大的原因,也是风险的来源:它可能会自己发现「额外需要」的信息,自己决定去别的地方找资源 <button class="pd-ts" data-t="05:33" data-who="Robert Lucero" data-en="I want to govern what my agent has access to, what it can see, what it can do, and the important resources that it needs to be able to be successful. And I don't want to grant it in the same context as like a service account where I flip at a token, hope I vault it correctly and I have tracking on it, but it's acting with an immense set of permissions." aria-label="回原文"></button><button class="pd-ts" data-t="07:19" data-who="Robert Lucero" data-en="And it comes back to what you're trying to get to, which is, I trust my automation to only operate in a very controlled way. AI doesn't do that. It's very non-deterministic." aria-label="回原文"></button>。

Okta 自己写过一个内部编码智能体,过程中撞见了一个让整个团队脊背发凉的例子:他们给智能体布置任务,但环境没配好,缺 Java。一个确定性系统会报错停下,而这个智能体的做法是——上网找一个 Java,下不了就换一个,再自己拼一个 curl 命令去下载它从训练数据里「记得」的另一个版本。

「我们看到这一幕时说:绝对不行。我们必须把它[[沙箱|沙箱]]化,给它定向的控制」<button class="pd-ts" data-t="15:28" data-who="Robert Lucero" data-en="One of the scariest things I think we all saw when we were trying to figure this whole thing out was we gave our agent a task, but the environment wasn't set up correctly." aria-label="回原文"></button>。 

Bob 的类比是:新员工也会这么干——入职工具没考虑到他遇到的问题,他就自己上网下载一个以为需要的资源。区别在于,我们对人有隐性的审查、治理和控制层,对智能体也得补上这一层 <button class="pd-ts" data-t="14:46" data-who="Robert Lucero" data-en="So we had to wrestle with this very quickly. And what we realized really early on is it was almost like onboarding a new hire. And what's interesting about how we think about an AI agent versus onboarding somebody new to the organization is that we put a lot of implicit trust into a person, that they are vetted and governed and that they have some levels of controls." aria-label="回原文"></button>。

## 自主性不靠「信任升级」,靠技术控制

主持人问了一个很自然的问题:人在公司里干得好会拿到更高权限,智能体表现得好,是不是也该逐步扩大对它的信任?Bob 的回答有点反直觉:不。

他说,随着智能体变得更高效,Okta 反而会**更依赖技术控制来做门禁,而不是主观的人为评估**——因为面对一个非确定性系统,你很难回头去问它「你为什么把那些文件全删了?为什么去下载网上随便找的一个包?

为什么连我们的生产系统?」<button class="pd-ts" data-t="18:36" data-who="Robert Lucero" data-en="And we've been a little bit more, I would say, diligent in terms of how we're trying to launch capabilities within the organization. So as an agent becomes more efficient and effective, I think we're going to lean more on technical controls as a mechanism to gate versus" aria-label="回原文"></button>

所以思路是两层:一层是技术控制——沙箱、[[护栏|护栏]];另一层是把它融进企业级的网络与安全实践,比如动态限制和即时访问(需要时临时授权、用完收回)。有意思的是 Bob 补了一句:即时访问这件事,对人其实早就该做了 <button class="pd-ts" data-t="19:24" data-who="Robert Lucero" data-en="And so I think it's tackling it from two layers, which is again, technical controls, sandboxing, guardrails, and then building into enterprise level sort of like networking and security practices." aria-label="回原文"></button>。

## 身份层是控制平面,不是编排层

现在很流行一个说法:未来每个人都是「智能体的管理者」。Bob 直说他怀疑这个范式能不能落地——「大多数人连有效的人类管理者都做不成,凭什么认为我们会成为有效的智能体管理者?」<button class="pd-ts" data-t="20:23" data-who="Robert Lucero" data-en="And I will say that I'm actually a little skeptical that that is the paradigm that lands. I think that most people probably wouldn't make effective Human managers, so what makes us think that we'd be effective agent managers." aria-label="回原文"></button>

顺着这个话题,主持人问:身份平台会不会成为智能体的编排层(即决定「编码智能体可以调用审查智能体、再调用部署智能体」的那层)?Bob 的判断很清晰:不会。

身份层是一个**控制平面**——它像一张关系图,记录「这个身份能访问这些资源、可以调用那个智能体」,给你可见性和策略洞察;但「谁调用谁」的编排逻辑会存在于身份系统之外。身份层只回答一个问题:它有没有权限触发那个环境 <button class="pd-ts" data-t="21:02" data-who="Robert Lucero" data-en="Yeah, that's, Brian, that's an interesting question. I think my personal view on it is that the identity layer, it's more of a control plane. It's less of an orchestration layer." aria-label="回原文"></button>。

至于一个根本性的行业争论——每个临时 AI 工作负载是不是都该是一个独立身份?——Bob 说整个行业还在纠结:有客户认为每一项 AI 活动都是一个身份,有的从工作负载角度看,有的还在走服务账号路线。

Okta 自己的四个编码工具,到底是注册成四个独立智能体,还是绑在他本人身份下、由他的核心身份背书再加一套 AI 治理策略?这还在演化中 <button class="pd-ts" data-t="09:13" data-who="Robert Lucero" data-en="either a service account level AI identity or a human-based owner. Let's say, for example, right now I have four coding harnesses that you could qualify as agents." aria-label="回原文"></button>。

## 推动内部 AI 采用: skepticism 到「开关翻转」

开发者本来就对工具怀疑,做安全的开发者是怀疑的平方。Bob 回顾了 Okta 内部采用的曲线:去年推 GitHub Copilot 时,大家很冷淡,主要因为它在结果上不成功——你问它问题,它答非所问。真正的转折点是去年十、十一月 Claude Code 和 Anthropic 新编程模型出来的窗口,「很多人心中的开关开始翻转了」,组织里出现了延伸效应:一小批前沿工程师拼命推极限,中间一大块人靠提问获得了价值,但任务本身还没转型 <button class="pd-ts" data-t="24:22" data-who="Robert Lucero" data-en="So you ask it a question and it's like, I don't know what you're talking about. And then fast forward to, I think, around October, November of last year, that's kind of the Claude Code windows, the Anthropic models are launching, the newer, more coding-specific models." aria-label="回原文"></button>。

一个常被忽略的账:Bob 引用的研究显示,工程师只有约 40% 的时间在写代码,其中只有约 10% 在写新代码——也就是说 60% 的时间是非编码工作。而行业几乎只盯着「能不能更快写代码」。

他列了一串被忽视的场景:更好地总结文档、给 PM 规格提反馈、更快分析生产问题、更高效地回复客户请求 <button class="pd-ts" data-t="27:20" data-who="Robert Lucero" data-en="And one of the funniest things about this is, and you're aware of this for sure, An engineer's time is only like 40% writing code and only like 10% writing new code." aria-label="回原文"></button>。Okta 刚推出的内部自主编码智能体,刻意只针对范围很窄的具体任务——修不确定性测试、定向修 bug、本地编排下开发新功能——这些看到价值和成功,但 Bob 承认:**AI 没有解决瓶颈问题,只是放大了原有格局** <button class="pd-ts" data-t="26:27" data-who="Robert Lucero" data-en="And so we're still learning about what are good ROI cases. Internal Autonomous Coding Agent that we've just launched that targets very specific scoped tasks. We see a lot of success on those and we see a lot of value, but going back to your earlier statements and what is a bottleneck, we're not fixing the problem of the bottlenecks." aria-label="回原文"></button>。

## 仓库的「AI 就绪度」:好工程的基本功更值钱了

Okta 的 AI 赋能团队在接入仓库时定了一套就绪标准,分两三类:第一,智能体能不能直接上手——有没有 agents.md、仓库里有没有好的提示词说明它是干嘛的、依赖是否可发现、语言是否清晰;第二,harness 层面的要求,不让智能体自己上网找资源凑环境;第三,仓库成熟度——有强大的 CI 和好的评审流程,就有安全网兜住变更。测试、linting、标准不够好的仓库,要先补课再接入 <button class="pd-ts" data-t="29:16" data-who="Robert Lucero" data-en="Yeah, that's a good question. So our AI enablement team, our core team that launched our autonomous coding agent took a good lens at this and applied these requirements as we were onboarding the initial repos." aria-label="回原文"></button>。

聊到测试,主持人问:AI 制造的 bug 会不会比它抓到的多?Bob 说这是难题,但他点破了一个关键:很多人给智能体的提示词是「以 TDD(测试驱动开发,先写测试再写代码)开始」,可如果智能体不知道这个任务的业务结果是什么,它可以写出测试、写出让测试通过的代码——「但那达成了你的最终目标吗?

我不知道。」所以 bug 依然极其重要,给被构建之物提供上下文的人——开发者、设计师、测试工程师、产品负责人——必须把需求和反馈还给系统 <button class="pd-ts" data-t="32:15" data-who="Robert Lucero" data-en="That's really where I think things are moving towards. So when we talk about bugs, I see these automated tools and these automated systems and I've seen examples of" aria-label="回原文"></button>。他还顺带回应了「SaaS 已死、人人都能 vibe coding(凭感觉用 AI 生成代码)」的论调:demo 解决一个人的需求容易,但企业软件必须超越这个层面——得有人有主见地思考它如何融入系统、如何解决一个能推向市场、有人愿意买的商业问题 <button class="pd-ts" data-t="33:55" data-who="Robert Lucero" data-en="And I think to extend this to one additional thing, which is when all these conversations of the death of SaaS and anybody can generate any code and you can vibe code something." aria-label="回原文"></button>。

> 【背景】转写稿中 Robert Lucero 亦被简称为 Bob,为同一人。

## 本集带走

- **把智能体当新员工入职,不当服务账号发令牌**:服务账号那套「发大权限令牌 + 祈祷存好」的做法,前提是自动化可信;AI 是非确定性的,这个前提不成立。
- **沙箱是底线而非加分项**:Okta 亲眼见过智能体缺 Java 时自己上网拼 curl 下载来路不明的版本——不给沙箱和护栏,它就会像新员工一样「自己想办法」。
- **信任不靠逐步升级,靠技术控制**:面对非确定性系统,「它表现好就给更多权限」走不通;门禁交给沙箱、护栏和细粒度授权,事后连问它「为什么」都问不清。
- **身份层是控制平面,不是编排层**:它管「谁能访问什么、能不能触发那个环境」,给你一张可追溯的关系图;「谁调用谁」的编排逻辑活在身份系统之外。
- **别只算写代码的账**:工程师约 60% 的时间在非编码工作上(总结文档、反馈规格、分析生产问题),这些才是 AI 赋能尚未被有效度量的价值区。
- **[[仓库 AI 就绪度|仓库 AI 就绪度]] = 好工程基本功**:agents.md、清晰的依赖、强 CI、好的评审和测试——测试写得好的仓库,智能体成功率才高;AI 没有取消这些要求,反而放大了它们。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">我们思考 AI 智能体与给组织新人办理入职的区别时,有趣的一点是:我们对一个人投入了大量隐性的信任——认为他们经过了审查和治理,并且有一定程度的控制。</span>  
> *What's interesting about how we think about an AI agent versus onboarding somebody new to the organization is that we put a lot of implicit trust into a person, that they are vetted and governed and that they have some levels of controls.*  
> <span class="qm">—— Robert Lucero · [00:00]</span> ^q1

> <span class="qz">随着智能体变得更高效、更有效,我认为我们会更倾向于依靠技术控制作为门禁机制,而不是对它能做什么的主观人为评估——因为再说一次,由于非确定性,你真的很难回头去问一个智能体:你为什么把这些文件全删了?</span>  
> *So as an agent becomes more efficient and effective, I think we're going to lean more on technical controls as a mechanism to gate versus a subjective human assessment of what it can do, because again, the non-determinism, it's really hard to go back to an agent and ask, why did you go delete all these files?*  
> <span class="qm">—— Robert Lucero · [18:36]</span> ^q2

> <span class="qz">我认为大多数人可能都成不了有效的人类管理者,那凭什么认为我们会成为有效的智能体管理者呢?</span>  
> *I think that most people probably wouldn't make effective human managers, so what makes us think that we'd be effective agent managers.*  
> <span class="qm">—— Brian Houck · [20:23]</span> ^q3

> <span class="qz">从那以后,那套东西几乎全被扔出了窗外,现在流行的是提示词工程、上下文工程、循环工程。</span>  
> *Almost all of that has gone out the window since prompt engineering and context engineering, loop engineering.*  
> <span class="qm">—— Robert Lucero · [25:19]</span> ^q4

> <span class="qz">工程师的时间只有大约 40% 用于写代码,其中只有约 10% 用于写新代码。也就是说,工程师有 60% 的时间花在非编码任务、非编码工作上。</span>  
> *An engineer's time is only like 40% writing code and only like 10% writing new code. So there's 60% of an engineer's time that is non-coding tasks, non-coding work.*  
> <span class="qm">—— Robert Lucero · [27:20]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-30-practicalai-reconstructing-how-openai-agents-attacke|OpenAI 智能体越狱攻入 Hugging Face 全始末]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog|AI失控了别慌,先盯紧漏洞数量爆炸]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
