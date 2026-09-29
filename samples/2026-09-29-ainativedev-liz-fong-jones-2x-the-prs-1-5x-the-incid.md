---
title: AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识
podcast: The AI-Native Dev
date: 2026-09-30
source_url: undefined
duration: "49:37"
type: episode
cover: "#64748b"
image: "/covers/2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid.jpg"
description: Honeycomb 技术院士 Liz Fong-Jones 谈 AI 放大组织既有实践：PR 量翻倍后如何用自动审查、分类器与可观测性兜住质量与事故。
host: "[[Simon Maple]]"
cohosts: ["[[Liz Fong-Jones]]"]
companies: ["[[Honeycomb]]", "[[Google]]", "[[Shopify]]", "[[Autobot]]", "[[Anthropic]]"]
concepts: ["[[Claude]]", "[[代码审查]]", "[[股权占比]]", "[[可观测性]]", "[[遥测]]", "[[智能体]]", "[[功能开关]]", "[[SRE]]", "[[CI-CD]]", "[[事故]]", "[[事故响应中的 AI]]", "[[垃圾话]]", "[[系统提示词]]", "[[平台工程]]", "[[MCP]]", "[[Linux 内核]]"]
category: AI 编程
tags:
  - AI 编程
  - 组织与领导力
socialImage: "https://talk.solomind.cc/covers/2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid#post","headline":"AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid","mainEntityOfPage":"https://talk.solomind.cc/2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid","description":"Honeycomb 技术院士 Liz Fong-Jones 谈 AI 放大组织既有实践：PR 量翻倍后如何用自动审查、分类器与可观测性兜住质量与事故。","datePublished":"2026-09-30","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid.jpg","about":[{"@type":"Person","name":"Simon Maple"},{"@type":"Person","name":"Liz Fong-Jones"},{"@type":"Organization","name":"Honeycomb"},{"@type":"Organization","name":"Google"},{"@type":"Organization","name":"Shopify"},{"@type":"Organization","name":"Autobot"},{"@type":"Organization","name":"Anthropic"},{"@type":"Thing","name":"Claude"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"股权占比 (ownership)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"遥测 (telemetry)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"功能开关 (feature flag)"},{"@type":"Thing","name":"SRE"},{"@type":"Thing","name":"CI/CD"},{"@type":"Thing","name":"事故 (incident)"},{"@type":"Thing","name":"事故响应中的 AI (root cause analysis)"},{"@type":"Thing","name":"垃圾话 (slop)"},{"@type":"Thing","name":"系统提示词 (system prompt)"},{"@type":"Thing","name":"平台工程 (platform engineering)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"Linux 内核 (Linux kernel)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识","item":"https://talk.solomind.cc/2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识

<div class="pd-byl"><b>Liz Fong-Jones</b> · Honeycomb 技术院士 · 2026-09-30</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">你给一枚没有转向或制导的火箭加火箭燃料，它就只会转圈直到爆炸</div><div class="a">— Liz Fong-Jones <button class="pd-ts" data-t="09:34" data-who="Liz Fong-Jones" data-en="you add rocket you know, rocket fuel to a rocket that has no steering or guidance and just go in circles until it blows up" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Simon Maple]] · [[Liz Fong-Jones]]
>
> **公司** [[Honeycomb]] · [[Google]] · [[Shopify]] · [[Autobot]] · [[Anthropic]]
>
> **概念** [[Claude]] · [[代码审查]] · [[股权占比]] · [[可观测性]] · [[遥测]] · [[智能体]] · [[功能开关]] · [[SRE]] · [[CI-CD]] · [[事故]] · [[事故响应中的 AI]] · [[垃圾话]] · [[系统提示词]] · [[平台工程]] · [[MCP]] · [[Linux 内核]]

这一集聊的是：当 AI 让代码产出速度翻倍，工程组织拿什么接得住？主角是 [[Liz Fong-Jones|Liz Fong-Jones]]——[[Honeycomb|Honeycomb]] 的技术院士，职业生涯从 [[Google|Google]] 的 [[SRE|SRE]](Site Reliability Engineer,负责系统可靠性的工程师)起步，管过 Bigtable 的 SRE 团队，后来做 DevRel 和 field CTO,是可靠性领域的老将 <button class="pd-ts" data-t="02:35" data-who="Liz Fong-Jones" data-en="Tell us a little bit about uh the journey that you that you've been on. Yeah, I think over the course of my career I focused on being a generalist in the field of reliability, and I focused on up-leveling the teams I work with." aria-label="回原文"></button>。她抛出的核心判断一句话就能说清：

**AI 会放大你现有的实践——让功能失调的组织更失调，让高[[股权占比|主人翁意识]]的组织更快。** <button class="pd-ts" data-t="07:06" data-who="上下文见主持人引述" data-en="Now, one of the things that I actually completely agree with here, actually, so uh it it's you you your line was AI amplifies your existing practices, it makes a dysfunctional org more dysfunctional and a high ownership org faster." aria-label="回原文"></button>

## 方向比速度重要

Liz 解释，决定一个组织高效还是低效的首要力量是**主人翁意识(ownership)**:开发者把自己的贡献视为引以为豪、愿意端到端负责、乐于署名的东西。可靠性实践糟糕的组织，根源往往就是缺这个——否则谁会放着生产环境里的坏代码不管？

她拿 [[Shopify|Shopify]] CEO Toby 举例子：12 个月前喊「我们是 AI 优先组织，人人都要用 AI」,一周前就开始哀叹工程师往生产环境乱扔 [[垃圾话|slop]] 炸弹(AI 生成的低质量代码)。「如果你告诉人们没有主人翁意识也要跑得更快、谁在乎后果，这是完全可以预见的后果。

」她打了个比方：给一枚没有转向和制导的火箭加燃料，只会转圈直到爆炸。所以别指望 AI 修复你已有的问题——它只会放大，你得先修好，再让 AI 加速。

## AI 复制你代码库里的模式

AI 就绪的仓库长什么样？Liz 给出的判断很直接：**AI 会复制你代码库中已有的模式。

如果有五种做事方式，AI 会困惑，然后创造出第六、第七种**。所以要先在组织内对齐「怎么做事」，把常见模式为 AI 和新员工一起编码下来，再配上快速(五分钟级而非三小时级)的 CI/CD、好的[[可观测性|可观测性]]和真正有意义的测试(不是「空热量测试」)。

有意思的是，这些全是 AI 出现之前就该做的「吃蔬菜」式基本功。但 AI 改变了两件事：一是必要性空前提高，因为代码量在涨；二是容易度也空前提高——**机器永远不会无聊，让它们给代码库添加[[遥测|遥测]](telemetry,系统运行时上报的数据)、丰富事件和属性，只要你指示，它们就乐意干**。连 Honeycomb 这样注释质量本来就高的代码库，也被 AI 往平均线拉回——大量低价值注释冒出来，所以「如何防范 AI 把代码库变糟」成了新课题。

## Autobot:从写 PR 转向审 PR

Honeycomb 的数据：三个月内，每天合并的 pull request 从 30 个涨到 70 个。但 Liz 纠正了归因：内部机器人 [[Autobot|Autobot]] 每天只产出约 5 个 PR,它真正的角色是**这些 PR 的 100% 审查者**。它做得好到开发者不再需要在变更里找琐碎 bug。

Autobot 最初是「盒装 [[Claude|Claude]] Code」,自动处理分解好的线性小工单；后来团队看到 [[Anthropic|Anthropic]] 的 Claude Code Reviews 一次要 20-30 美元、跑 10-20 分钟，于是把项目转向审查——**瓶颈从来不是产出代码，而是人类的审查注意力**。他们的实验：约 20% 的 PR 经自动审查直接落地、不经人工。现在他们在考虑用专门做是/否判断的小模型做分类器，把 PR 分成「自动审查后可安全合并」和「需人工审查」两类——关键不是省钱省时，而是那个置信度分数。

但代价是真实的：PR 翻倍后，初期变更失败率看似在降，长期一平均——**PR 翻倍，[[事故|事故]] 1.5 倍**。「你能要求人类处理的事故数量是有限度的。」

## 理解系统：数据 vs 理解

Liz 对遥测和可观测性划了条硬线：数据 vs 理解，「百分之百，每一天」。人类不必亲自写代码、甚至不必亲自写查询，但**检查查询的输出、内化故障怎么发生、如何防止再发生，是人类必须做的**。她还要求在开发周期里就让语言模型自己测试它产出的遥测：查一遍开发环境，确认属性真的在、真的能检测到积压和排队。

事故场景能走多远？她的答案很条件化：**当且仅当你有可用的自动回滚、可用的[[功能开关|特性开关]]、可用的可观测性**，AI [[智能体|智能体]]才能接近「自动定位并修复」。

可观测性和可控制性在控制理论里是对偶的——两者都有，你才有能力不必凌晨两点起床。没有这些，智能体只是在往飞镖盘上乱扔飞镖，制造的混乱可能比解决的还多。

所以关键不是信任 AI,是信任 AI 所运行其中的系统。而且别给智能体「杀死生产环境随机 Pod」的权力——给它中止发布、回滚发布的安全工具。

## 「Claude 干的」不是借口

出了事算谁的？Honeycomb 的 AI 价值观是「名字在上面，你就拥有它」。

Liz 举了个自己翻车的例子：她让 AI 助手分析数据，助手轻率断言没有 partition ID 遥测字段，还凭空编出一套「需要新建字段」的说法，她签了字——结果字段一直都在，白白浪费 token 和一位 principal engineer 五分钟审查时间。「你可以说怪 Claude,但我应该对输出更怀疑，是我签字确认的，那是我的责任。」问责不是追究过错，而是谁负责清理、谁负责加固系统让这事不再发生；爆炸半径要小，而不是幻想故障永不发生。

那如果未来 AI 全流程构建、测试、审查、部署呢？Liz 的回答：不管新闻怎么说，**不存在完全自动化的递归自我改进，总有某种程度的人类引导**——即使机器自己开工单、解决、上线、调试，仍然有一个人拥有那个系统[[系统提示词|提示词]]、为配额付费、期望结果。

流程负责人要对结果负责，时不时抽查 PR、做评估、调提示词。「只要人类还在为它付费，人类就有权检查结果。

想完全放手？把支票簿交给我。」

## 开源：先提 issue,再谈代码

面对 AI slop 淹没维护者，Liz 的立场：bug 报告永远有价值(格式良好、说清预期与实际)，但**外部 PR 应由维护者自行决定**——有了写好的 bug 报告，维护者可以让自己的智能体按自己偏好的风格写修复，何必信任别人的智能体？检查别人的工作可能和自己动手一样费劲。

她甚至提到用 AI 打 AI:让智能体针对提交的 PR 出测验，答不上基本问题就不许提交——「你在用 slop 对抗 slop」。她自己的正面案例：借助 Claude 搞清楚 ARM64 开发机无法启动新版 [[Linux 内核|Linux 内核]]的 bug,六行补丁走正常审查流程，两个多月后合入上游。

她还点出一个结构性问题：谁来为自动审查和分诊的 token 买单？Linux 内核的审查机器人 Sashiko 由 Google 全额付费，但更小的项目真的在苦苦挣扎。

不过形势变了——以前推广可观测性是「预算？什么预算？」，现在是「不实现可观测性你的 AI 工作就会失败」「好，给你钱」。

## 本集带走

- **先修组织再上 AI**:AI 不修复问题只放大问题；没有主人翁意识的团队跑得越快，slop 炸弹越多。
- **对齐代码库模式**：AI 复制现有模式，五种做法会变成七种；把好模式编码下来，配上快速 CI/CD 和真实测试。
- **瓶颈在审查不在产出**：让机器人 100% 初审 PR,把人类注意力留给设计模式和复杂变更；分类器决定哪些可自动合并。
- **盯紧事故倍数**：PR 翻倍，事故约 1.5 倍；人类能处理的事故量有上限，去风险化必须跟上。
- **给机器人安全的工具，而非危险的判断权**：自动回滚、特性开关、可观测性齐备，AI 修复才靠谱；回滚按钮安全到「最资浅开发者都不会用出事故」的程度，才能交给机器人。
- **签字即担责**：「Claude 干的」不是借口，流程负责人要对结果负责、抽查、调优；标准对 AI PR 不放松。
- **开源贡献先 issue 后 PR**:bug 报告永远欢迎，大方向变更先与维护者讨论，别发一万行的 PR。

<div class="pd-sec pd-sec-q">全部金句 <span>14 条</span></div>

> <span class="qz">你给一枚没有转向或制导的火箭加火箭燃料，它就只会转圈直到爆炸</span>  
> *you add rocket you know, rocket fuel to a rocket that has no steering or guidance and just go in circles until it blows up*  
> <span class="qm">—— Liz Fong-Jones · [09:34]</span> ^q1

> <span class="qz">AI 会复制你代码库中已有的模式。如果你有五种不同的做事方式，AI 会变得非常困惑，然后创造出第六种、第七种做事方式。</span>  
> *AI copies existing patterns that exist in your code base. If you have five different ways of doing something, AI will become very confused and it will create six ways or seven ways in ways of doing it.*  
> <span class="qm">—— Liz Fong-Jones · [11:13]</span> ^q2

> <span class="qz">因为机器永远不会感到无聊，让它们给你的代码库添加遥测是一件很棒的事情</span>  
> *because the machines never get bored, it's a great thing to do to have them add telemetry to your code base*  
> <span class="qm">—— Liz Fong-Jones · [13:24]</span> ^q3

> <span class="qz">Autobot 每天大概只产出这些拉取请求中的五个。所以它并不是拉取请求的主要创作者，它是这些拉取请求 100% 的审查者</span>  
> *the Autobot is producing maybe five of those pull requests per day. So it's not the majority creator of the pull requests, it is the 100% reviewer of those pull requests*  
> <span class="qm">—— Liz Fong-Jones · [14:34]</span> ^q4

> <span class="qz">任何真正的生产系统恐怕都不应该是一个黑暗工厂，至少在目前这个阶段是如此</span>  
> *any real production system should probably not be a dark factory, at least at this time*  
> <span class="qm">—— Liz Fong-Jones · [15:46]</span> ^q5

> <span class="qz">你的车里有了自适应巡航控制，并不意味着你可以完全放开方向盘</span>  
> *just because you have adaptive cruise control in your car doesn't mean that you can fully let go of the wheel*  
> <span class="qm">—— Liz Fong-Jones · [16:11]</span> ^q6

> <span class="qz">我们发布的 pull request 翻了一倍，而我们看到的事故是原来的 1.5 倍</span>  
> *we were shipping twice as many pull requests and we are seeing you know 1.5 times as many incidents*  
> <span class="qm">—— Liz Fong-Jones · [23:24]</span> ^q7

> <span class="qz">我们应该对齐的是方向是否正确，而不是这个实现是否完全正确</span>  
> *that's the thing that we should be aligning on is is the direction correct and not, you know, is this implementation exactly correct*  
> <span class="qm">—— Liz Fong-Jones · [24:46]</span> ^q8

> <span class="qz">如果你没有这些东西，你的智能体就只是在猜测、往飞镖盘上乱扔飞镖，它们造成的混乱可能比它们实际解决的还多</span>  
> *If you don't have those things, your agents are just guessing and throwing darts at the dartboard, and they might cause more chaos than they actually solve.*  
> <span class="qm">—— Liz Fong-Jones · [28:55]</span> ^q9

> <span class="qz">我们正在意识到无法规模化扩展的主要事情，就是让人类去点「是」</span>  
> *the main thing that we are realizing does not scale is having humans click yes*  
> <span class="qm">—— Liz Fong-Jones · [32:21]</span> ^q10

> <span class="qz">我认为错误在于过度信任自己在时间压力和压力下做决策的能力</span>  
> *I think the mistake is overtrusting your ability to make decisions under time pressure and stress*  
> <span class="qm">—— Liz Fong-Jones · [33:14]</span> ^q11

> <span class="qz">那你为什么要信任别人的智能体呢？检查别人的工作，可能和自己动手做一样费工夫</span>  
> *why should you trust someone else's agent where it might be just as much work to check the work over as if you had done it yourself?*  
> <span class="qm">—— Liz Fong-Jones · [40:20]</span> ^q12

> <span class="qz">你是在用 slop 对抗 slop,对吧？</span>  
> *You're using slop to fight slop, right?*  
> <span class="qm">—— Liz Fong-Jones · [41:16]</span> ^q13

> <span class="qz">仅仅因为你能做某件事、能给别人发一个一万行的 pull request,并不意味着你应该这么做</span>  
> *Just because you can do something and send someone a 10,000 line pull request does not mean you should.*  
> <span class="qm">—— Liz Fong-Jones · [43:42]</span> ^q14

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Anthropic、GitHub · 同概念:代码审查 (code review)、提示词 (system prompt)、智能体 (agent)、Claude</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude、MCP、智能体 (agent)</span>
- [[2026-05-27-devtools-cloudflare-devs|Cloudflare 三人聊：让模型直接写代码，别再堆工具了]]<span class="pd-rz">同概念:MCP、可观测性 (observability)、智能体 (agent)、Claude</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-11-practicalai-zero-trust-for-ai-agents|Anthropic 零信任框架：智能体安全的六层防御]]<span class="pd-rz">同公司:Anthropic · 同概念:MCP、可观测性 (observability)、智能体 (agent)</span>
- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude、MCP、智能体 (agent)</span>
- [[2026-08-22-talks-give-the-agent-a-budget-not-a-token-sach|给智能体预算，而不是令牌：Anthropic 的智能体安全上生产之道]]<span class="pd-rz">同公司:Anthropic · 同概念:CI/CD、智能体 (agent)、特性开关 (feature flag)</span>

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
