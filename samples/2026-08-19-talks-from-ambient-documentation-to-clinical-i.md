---
title: 医疗是最高风险的前沿 AI 战场：Abridge 的 clinical intelligence 之路
podcast: 精选演讲
date: 2026-09-24
source_url: undefined
duration: "21:16"
type: episode
cover: "#64748b"
description: Abridge 工程负责人 Chaitanya 讲述产品如何从临床病历写作扩展到临床决策支持，并拆解医疗场景下质量、延迟、成本三大难题的解法。
guests: ["[[Chaitanya Asawa]]"]
companies: ["[[Abridge]]"]
concepts: ["[[智能体]]", "[[临床决策支持]]", "[[评估]]", "[[LLM 评委]]", "[[评分细则]]", "[[后训练]]", "[[前沿模型]]", "[[临床记录]]", "[[EHR]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-19-talks-from-ambient-documentation-to-clinical-i#post","headline":"医疗是最高风险的前沿 AI 战场：Abridge 的 clinical intelligence 之路","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-19-talks-from-ambient-documentation-to-clinical-i","mainEntityOfPage":"https://talk.solomind.cc/2026-08-19-talks-from-ambient-documentation-to-clinical-i","description":"Abridge 工程负责人 Chaitanya 讲述产品如何从临床病历写作扩展到临床决策支持，并拆解医疗场景下质量、延迟、成本三大难题的解法。","datePublished":"2026-09-24","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Chaitanya Asawa"},{"@type":"Organization","name":"Abridge"},{"@type":"Thing","name":"智能体 (agentic)"},{"@type":"Thing","name":"临床决策支持 (clinical decision support)"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"LLM 评委 (LM judges)"},{"@type":"Thing","name":"评分细则 (rubric)"},{"@type":"Thing","name":"后训练 (post-train)"},{"@type":"Thing","name":"前沿模型 (frontier model)"},{"@type":"Thing","name":"临床记录 (clinical note)"},{"@type":"Thing","name":"EHR"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"医疗是最高风险的前沿 AI 战场：Abridge 的 clinical intelligence 之路","item":"https://talk.solomind.cc/2026-08-19-talks-from-ambient-documentation-to-clinical-i"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>医疗是最高风险的前沿 AI 战场：Abridge 的 clinical intelligence 之路</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 医疗是最高风险的前沿 AI 战场：Abridge 的 clinical intelligence 之路

<div class="pd-byl"><b>Chaitanya Asawa</b> · Abridge 工程负责人 · 2026-09-24</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-19-talks-from-ambient-documentation-to-clinical-i.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">对我们来说，我们真正把 evals 当作操作系统，当作公司的命脉。</div><div class="a">— Chaitanya Asawa <button class="pd-ts" data-t="12:47" data-who="Chaitanya Asawa" data-en="For us, we really treat evals as the operating system, the life's blood of the company." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Chaitanya Asawa]]
>
> **公司** [[Abridge]]
>
> **概念** [[智能体]] · [[临床决策支持]] · [[评估]] · [[LLM 评委]] · [[评分细则]] · [[后训练]] · [[前沿模型]] · [[临床记录]] · [[EHR]]

医生每天下午四点半就能下班、病历全部写完——这是一线临床医生描述使用 [[Abridge|Abridge]] 后的状态。做这场分享的人是 Chai(Chaitanya),Abridge 的工程负责人，领导[[临床决策支持|临床决策支持]]和[[智能体|智能体]]体验团队。

他的职业轨迹一直在 AI 创业公司：先在一家目标直指 AGI、但走神经科学与概率图模型路线的公司 Vicarious 做研究工程，之后作为最早一批工程师加入企业搜索公司 Glean,见证它从 10 人长到 1100 多人 <button class="pd-ts" data-t="02:57" data-who="Chaitanya" data-en="And then two, I want to expose you to some of the technical problems we work on and that are truly frontier AI problems that have the highest stakes. A little about me." aria-label="回原文"></button>。他一直对医疗感兴趣，最终在 AI 浪潮席卷之时加入 Abridge——这家公司在两三年内进入了美国 300 家最大的医疗系统，包括 Kaiser、Mayo Clinic、Johns Hopkins、Sutter <button class="pd-ts" data-t="04:50" data-who="Chaitanya" data-en="And the AI wave, as it's taken over the whole world, has also influenced healthcare. And as you saw towards the end of that video, a bridge in the matter of two to three years got its way into 300 of the largest health systems in the United States." aria-label="回原文"></button>。

## 为什么医疗是「困难模式」

Chai 先坦承：过去医疗领域的技术问题常被认为不够有趣，很多流程还在靠传真机运转 <button class="pd-ts" data-t="02:13" data-who="Chaitanya" data-en="Our marketing team produces really good videos and so they always hype me up. But the goal of this talk for me, and I know that we have a lot of engineers in the room, my goal is to talk about healthcare as a domain, at least I felt in the past that there was a lot of stigma around maybe the technical problems weren't as interesting in healthcare." aria-label="回原文"></button>。但数据说明问题有多严重：过去几十年几乎所有行业的成本都在随生产率提升而下降，唯独医疗的行政成本只升不降；许多医院利润率薄如刀片、甚至关门；病人背着巨额医疗债务；医生普遍倦怠，甚至不建议自己的子女从医 <button class="pd-ts" data-t="05:30" data-who="Chaitanya" data-en="But first, maybe some of the problems that inspire us as a company at a bridge. One, one of the things that we've noticed, or many people, economists have noticed over the past few decades is actually, in many other industries, you actually see the cost of a good go down." aria-label="回原文"></button>。

Abridge 的切入点是临床文档：每次就诊结束后，临床医生必须写一份 SOAP 病历(按主诉、[[评估|评估]]、计划等固定结构组织的记录)，通常每天要花约两小时，还常常是下班后的「睡衣时间」——这是医生倦怠的主要来源之一 <button class="pd-ts" data-t="07:06" data-who="Chaitanya" data-en="And there's some different variations on this depending on specialty. Typically, clinicians end up often doing, it takes like two hours a day to just write these notes, and you often do it what's known as pajama time after work itself." aria-label="回原文"></button>。而这些病历风险极高：它们既是计费依据，又是下一位医生接诊时的上下文、病人纵向医疗记录的一部分 <button class="pd-ts" data-t="07:22" data-who="Chaitanya" data-en="And that's a common source of clinician burnout, spending all this time outside of work, and it's not the most fun part of the job. However, these documents are actually extremely high stakes because these clinical notes are often used as a basis of billing, but also, which is, of course, financial things are high stakes, but also have clinical impact." aria-label="回原文"></button>。技术终于追上来，能生成高质量、且为每位医生个性化的病历——这正是 Abridge 撬开这个对技术保守行业的「楔子」。

## 核心论点：一切都围绕那场对话

公司的核心论点是：医疗的每个环节都围绕医生与患者的对话展开——计费、临床试验匹配、临床决策支持，全都由此而来。我们围绕那场「神圣的对话」建了一整套行政机器，而 Abridge 想做的就是把这一切拉回对话本身、把行政部分自动化 <button class="pd-ts" data-t="08:36" data-who="Chaitanya" data-en="But I want to show you a little about where we're going next. And the core thesis of the company is that everywhere in healthcare, everything is around the conversation." aria-label="回原文"></button>。

具体形态：诊前，系统建议讨论话题；诊中，医生可以直接用语音与 Abridge 对话——问「Nathan 有资格参加哪些临床试验」，系统回答他可能符合某项研究、大部分筛查标准已满足，但需要一份新的超声心动图确认射血分数，医生说「那就安排」，系统直接下单；诊后，患者总结、临床病历、甚至医嘱都自动生成 <button class="pd-ts" data-t="09:28" data-who="Chaitanya" data-en="So to give you a tactical example of what this looks like, and I'll play this video of where we're going from here. We've been building a solution that allows the physician to interact with Abridge directly by using their voice." aria-label="回原文"></button>。支撑这一切的是三类上下文：完整的 [[EHR|EHR]](电子病历系统)数据——既往化验、既往病历；医生与患者的实时对话——Chai 称之为医疗领域的「调试现场」，你在那里了解病人当下真正面对什么；再加上世界医学文献和临床指南作为依据 <button class="pd-ts" data-t="10:42" data-who="Chaitanya" data-en="We're able to do this all by reading all this context. We have access to all of the EHR context, so we know everything about the patient, the prior labs, the prior notes." aria-label="回原文"></button>。

## 质量、延迟、成本：三个 KPI 全是困难模式

任何智能体产品都逃不开质量、延迟、成本三个 KPI,而医疗在三个上都是困难模式：答案必须对，因为答错有真实后果、会彻底失去信任——Chai 对比自己在 Glean 时「答错了也没关系」，但医疗不行 <button class="pd-ts" data-t="11:42" data-who="Chaitanya" data-en="In healthcare, I feel that we're actually playing on hard mode for all of these three KPIs. This is a high-stakes scenario, especially when you're doing something like clinical decision support." aria-label="回原文"></button>;延迟上，你不能太晚才行动，还得在正确的时机行动才有用。他提到公司座右铭「拯救生命、节省时间、节省金钱」，恰好对应这三个 KPI <button class="pd-ts" data-t="12:25" data-who="Chaitanya" data-en="And finally, cost at the scale we're doing this at. And as an interesting aside, it actually relates to, we have a motto inside the company that our goal is to save lives, save time, save money for the hospital system and for the healthcare industry as a whole." aria-label="回原文"></button>。

**质量：evals 是公司的命脉。** 他们把评估体系当作操作系统：任何产品动手之前，先建稳健的内部基准做离线评估，再用真实世界见过的案例测试；然后分阶段推出——从信任且理解利害的临床医生 alpha 组、到 beta、再到大规模 A/B 测试；全面上线后还要持续监控 <button class="pd-ts" data-t="12:47" data-who="Chaitanya" data-en="So talking a little about quality, how do we keep that bar high? For us, we really treat evals as the operating system, the life's blood of the company. This starts from internal benchmarks and offline evaluation." aria-label="回原文"></button>。

执行方式是「专家校准的 LM judges」:临床医生遍布公司各处，但不是所有工程师都是医生，于是他们把临床医生的判断编码进 LM judges(用语言模型当评审来给输出打分)，形成反馈闭环，让任何人都能据此爬山迭代 <button class="pd-ts" data-t="13:47" data-who="Chaitanya" data-en="Again, the stakes are really high, and you cannot get away with just being like a prototype that you just ship out there and be like, yeah, I mean, I tested on a few cases and it works." aria-label="回原文"></button>。在线信号还包括医生如何编辑病历、点赞点踩、星级评分和自由文本 <button class="pd-ts" data-t="14:31" data-who="Chaitanya" data-en="And those judges, once you have that, create a feedback loop so that anyone, whether you're a clinician or not, can actually hill climb and learn from that. We also have a lot of online signals, whether how you're editing the clinical note and your typical thumbs up, thumbs down, and star ratings and other free form text." aria-label="回原文"></button>。

**评估难题：生成器-验证器差距极小。** 临床决策支持最难的地方在于，它不像数独——数独解题极难、验证极容易，所以容易构建评估并爬山；而这里，如果你有一个足够好的验证器，它本身就是你的生成器了 <button class="pd-ts" data-t="15:42" data-who="Chaitanya" data-en="So how do you tell whether or not an answer is correct? And this is a case where the generator and the verifier gap is really small. What I mean by this is in some problems in AI, such as Sudoku, it's really, really hard to generate a solution to Sudoku." aria-label="回原文"></button>。

怎么造一个「不只是语言模型本身」的可信参照？他们的做法是用大量真实临床案例，让相互独立的医生各自制定[[评分细则|评分细则]](rubric,列出好回答应包含的要素，而非唯一标准答案)，再由另一位医生仲裁整合，还有第四位临床医生做 QA <button class="pd-ts" data-t="16:55" data-who="Chaitanya" data-en="So again, I said the generator verifier gap is really small here. So what we need is we actually need human references to tell are we generating the right thing." aria-label="回原文"></button>。

有了这些细则，[[LLM 评委|LLM 评委]]就能把智能体的回答与细则要素做语义匹配，判断模型在架构、模型、搜索排序算法各层迭代时表现是否达标 <button class="pd-ts" data-t="17:41" data-who="Chaitanya" data-en="You have a rubric of what are the elements that a response should look like. Now we can actually have an LLM judge that compares our agents' responses to these rubric elements and does some basic semantic match to tell, hey, is our model performing well as we continue to hill climb whether it's our agent architecture, our models, or search ranking algorithms." aria-label="回原文"></button>。此外还有临床安全 judge、边界与对抗 judge,以及语气风格等产品向 judges——用多个信号各捕捉这个难测问题的一角 <button class="pd-ts" data-t="16:25" data-who="Chaitanya" data-en="So what we do is we tackle this by having many, many different signals. We have a clinical quality judge, which I'm going to dive deep into. And then we tackle from we have many signals from a boundary and adversarial judge." aria-label="回原文"></button>。

**成本：不是每个问题都需要前沿智能。** 他们以每年一亿次医疗对话的规模在对话中实时运行，所以成本敏感。

核心洞察：与其用一个基础模型生成病历的所有部分(现病史、既往史、评估与计划……

),不如把问题分解成更小的工作流，针对不同问题——甚至细到病历的不同章节——[[后训练|后训练]]更小的模型，成本和延迟都大幅下降 <button class="pd-ts" data-t="18:17" data-who="Chaitanya" data-en="How do we do this in a way that doesn't really break the bank for us? So one place that this problem comes up is actually in generating the clinical note. So when you're generating the clinical note, there's many different sections to it." aria-label="回原文"></button>。更关键的是数据飞轮：每年一亿次医疗对话的独特数据集，据他们所知没有别人有。「制胜权(right to win)」的逻辑是：有些问题质量已经到顶，训模型就该为了降本降延迟；而对于质量还没到顶、别人说「[[前沿模型|前沿模型]]会碾压你」的问题，只要拥有前沿实验室没有的数据、聚焦他们没聚焦的问题，就有可能跑赢前沿模型的变化速度 <button class="pd-ts" data-t="19:18" data-who="Chaitanya" data-en="And as far as we know, no one else has such a large data set. So our key insight is having a right to win in training models. There are problems where the quality is already maxed out." aria-label="回原文"></button>。

另一个省钱案例是「就诊中医嘱」：医生常在就诊中随口提到医嘱(药物或非药物)，系统在后台排队、让医生在 EHR 里确认签署。但如果每隔几秒就监听一遍有没有医嘱，成本会爆炸。他们的技巧是用一系列更便宜、更快的「闸门」先找到对话中值得触发的事件，再把工作交接给更重的模型做端到端的医嘱匹配(不只是听到医嘱，还要匹配到系统批准的、与对话相关的医嘱条目)<button class="pd-ts" data-t="19:49" data-who="Chaitanya" data-en="And that lets us still maximize quality. Another problem that I'll quickly touch on is in-visit orders. So doctors really aren't big fans of pending orders, but often they'll mention orders during the visit itself, medication or non-medication orders." aria-label="回原文"></button>。

## 医疗需要前沿 AI

Chai 想留给工程师们的最后一句话：他自己曾是担心「医疗技术到底行不行」的工程师，而 Abridge 已经在大规模上证明了这一点。医疗是一个真正需要前沿 AI、并且把它用在最高风险场景的领域 <button class="pd-ts" data-t="20:47" data-who="Chaitanya" data-en="So we have a number of different gates that are cheaper and faster that let us trigger actually larger models and hand off to them for actually doing the end-to-end work." aria-label="回原文"></button>。

## 本集带走

- **把 evals 当操作系统**：动手做产品前先建内部基准和离线评估，再走 alpha→beta→A/B→持续监控的分阶段推出；利害越高的产品，越不能「测几个 case 就上线」。
- **用 rubric 代替黄金答案**：答案变异性大的领域，让多位独立医生各写评分细则、专人仲裁、第四人 QA,再用 LLM 评委对细则要素做语义匹配——绕开「生成器-验证器差距小」的死结。
- **把领域专家的判断编码进 LM judges**:不是人人都是医生也能快速迭代——专家校准的评审形成反馈闭环，非专家也能爬山。
- **分解问题、按需用小模型**：病历按章节拆成小工作流，各训小模型，不必每个环节都上前沿级智能；成本和延迟随之大降。
- **数据「制胜权」逻辑**：拥有别人没有的独特数据、聚焦别人没聚焦的问题，就可能跑赢前沿模型的进步速度；质量已到顶的任务，训模型就为降本降延迟。
- **用便宜闸门触发重模型**：实时场景别每几秒都跑大模型，先用廉价快速的信号筛出关键事件(如医嘱被提到)，再把端到端的重活交给大模型。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">对我们来说，我们真正把 evals 当作操作系统，当作公司的命脉。</span>  
> *For us, we really treat evals as the operating system, the life's blood of the company.*  
> <span class="qm">—— Chaitanya Asawa · [12:47]</span> ^q1

> <span class="qz">但在医疗领域，如果我们答错了什么，是会有真实后果的，我们会完全失去信任。</span>  
> *But in healthcare, if we answer something incorrectly, there's actually consequences, and we entirely lose our trust.*  
> <span class="qm">—— Chaitanya Asawa · [11:57]</span> ^q2

> <span class="qz">一切都围绕对话，那场神圣的医生与患者的对话，而我们只是围绕它构建了这一整套行政机器。</span>  
> *It's all about the conversation, that sacred doctor and patient conversation, and we've just built all this administrative machinery around that.*  
> <span class="qm">—— Chaitanya Asawa · [08:57]</span> ^q3

> <span class="qz">如果我有一个非常非常好的生成器验证器，那它本身就是我的生成器了。</span>  
> *If I had a really, really good generator, verifier, then that would just be my generator itself.*  
> <span class="qm">—— Chaitanya Asawa · [16:08]</span> ^q4

> <span class="qz">我认为一个真正出色的评估系统有一个特性：它反映了你在产品中想要的行为。</span>  
> *You know, I think a really great evaluation system has a property that it reflects the behaviors that you want in your product.*  
> <span class="qm">—— Chaitanya Asawa · [14:08]</span> ^q5

> <span class="qz">我们不是每个问题都需要前沿级别的智能。</span>  
> *We don't need frontier-level intelligence for every problem.*  
> <span class="qm">—— Chaitanya Asawa · [18:49]</span> ^q6

> <span class="qz">我们的关键洞察是，如果我们拥有制胜权——也就是拥有他们可能没有的合适数据，以及聚焦于他们可能没有聚焦的问题——我们实际上有可能跑赢前沿模型的变化速度。</span>  
> *Our key insight is we can actually potentially beat the rate of change on the frontier model if we have the right to win by having the right data that they may not have and the focus on a problem that they may not be focusing on.*  
> <span class="qm">—— Chaitanya Asawa · [19:33]</span> ^q7

> <span class="qz">再说一次，利害真的非常高，你不能只是像个原型那样直接发出去，然后说，yeah,我在几个案例上测试过，它没问题，这样是行不通的。</span>  
> *Again, the stakes are really high, and you cannot get away with just being like a prototype that you just ship out there and be like, yeah, I mean, I tested on a few cases and it works.*  
> <span class="qm">—— Chaitanya Asawa · [13:39]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-07-twentyvc-20vc-the-100-billion-ai-assistant-race-t|邮箱里的 AI 助手：Plaid 前 CTO 谈如何在巨头围剿下赢]]<span class="pd-rz">同概念:前沿模型 (frontier model)、后训练 (post-train)</span>
- [[2025-07-31-lennys-he-saved-openai-bret-taylor|Bret Taylor：智能体是新应用，软件要按结果定价]]<span class="pd-rz">同概念:前沿模型 (frontier model)</span>
- [[2025-09-07-lennys-how-ai-is-reshaping-the-product-role|PM的生存法则：AI时代别当瓶颈，去抢活干]]<span class="pd-rz">同概念:评估 (evals)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-26-lennys-anthropics-first-technical-pm-on|Anthropic 产品负责人:评估是新的 PRD,不反驳你的 AI 才是好 AI]]<span class="pd-rz">同概念:前沿模型 (frontier model)、智能体 (agentic)、评估 (evals)</span>
- [[2025-05-22-talks-mastering-claude-code-in-30-minutes|Claude Code 实战技巧：从提问到并行]]<span class="pd-rz">同概念:智能体 (agentic)</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:评估 (evals)</span>

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
