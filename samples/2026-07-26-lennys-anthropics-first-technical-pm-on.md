---
title: "evals 是新的 PRD:Anthropic 产品负责人 Diane Penn 谈 AI 时代的产品经"
podcast: "Lenny's Podcast"
date: 2026-07-26
source_url: https://www.lennysnewsletter.com/p/anthropics-first-technical-pm-on
duration: "93:48"
type: episode
cover: "#6366f1"
image: "/covers/2026-07-26-lennys-anthropics-first-technical-pm-on.jpg"
description: "从 Claude 2 到 Fable,她详述了模型开发、产品迭代、实验室运作和 PM 新职能。"
host: "[[Dianne Penn]]"
cohosts: ["[[Lenny]]"]
companies: ["[[Anthropic]]"]
concepts: ["[[Claude]]", "[[Claude Code]]", "[[评估]]", "[[涌现能力]]", "[[金门大桥版 Claude]]", "[[前沿模型]]", "[[技能]]", "[[PRD]]", "[[智能体]]", "[[Labs]]"]
category: 产品方法
tags:
  - 产品方法
  - 职业与个人成长
---

# evals 是新的 PRD:Anthropic 产品负责人 Diane Penn 谈 AI 时代的产品经

<div class="pd-mt">2026-07-26 · Lenny's Podcast · 93:48 · <a class="mcat" href="./tags/%E4%BA%A7%E5%93%81%E6%96%B9%E6%B3%95">产品方法</a> · <a class="mcat" href="./tags/%E8%81%8C%E4%B8%9A%E4%B8%8E%E4%B8%AA%E4%BA%BA%E6%88%90%E9%95%BF">职业与个人成长</a></div>

<div class="pd-play"><audio controls preload="metadata" src="/audio/2026-07-26-lennys-anthropics-first-technical-pm-on.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">所以我们确实会写一些产品文档和 PRD,但我们在团队中其实有句说法,评估就是新的 PRD。</div><div class="a">Dianne Penn · 41:36</div></div>

> [!info] 关联
> **主持**:[[Dianne Penn]]
>
> **联合主持**:[[Lenny]]
>
> **涉及公司**:[[Anthropic]]
>
> **概念**:[[Claude]] · [[Claude Code]] · [[评估]] · [[涌现能力]] · [[金门大桥版 Claude]] · [[前沿模型]] · [[技能]] · [[PRD]] · [[智能体]] · [[Labs]]
>
> **来源**:[Lenny's Podcast](https://www.lennysnewsletter.com/p/anthropics-first-technical-pm-on)

## 一句话 TLDR

从 Claude 2 到 Fable,她详述了模型开发、产品迭代、实验室运作和 PM 新职能。

主持人 [[Lenny|Lenny]] 在开篇坦言,当 [[Anthropic|Anthropic]] 刚创立时,他曾觉得在 OpenAI 遥遥领先的情况下,这家公司毫无机会 <button class="pd-ts" data-t="02:57" data-who="Lenny" data-en="Three years. I remember just feeling that, man, these guys have no chance. OpenAI is so far ahead." aria-label="回原文"></button>。但时过境迁,如今 Anthropic 的年经常性收入已达约 500 亿美元规模 <button class="pd-ts" data-t="03:11" data-who="Lenny" data-en="Things are very different now. The latest number I saw was Anthropic was making, I don't know, $50 billion in ARR. That's what companies used to go public at." aria-label="回原文"></button>。本期嘉宾是 Anthropic AI 研究和实验室团队的产品负责人 Diane Penn。她在三年多前作为首位技术产品经理加入,当时产品团队只有五名工程师 <button class="pd-ts" data-t="01:41" data-who="Lenny" data-en="Today, my guest is Diane Penn, head of product for the AI research and Labs teams at Anthropic. She joined Anthropic as the first technical product manager over three years ago, which is a lifetime in AI time." aria-label="回原文"></button>。Diane 参与了从 [[Claude|Claude]] 2 到 Fable 的每一个模型的发布,并孵化了 [[Claude Code|Claude Code]] 等核心产品 <button class="pd-ts" data-t="01:48" data-who="Lenny" data-en="She joined Anthropic as the first technical product manager over three years ago, which is a lifetime in AI time. When the product team was just five engineers, she's helped ship every model at Anthropic from Claude 2 through Fable." aria-label="回原文"></button>。本文将沿着 Diane 的讲述,带你回顾 Anthropic 的关键转折点,剖析模型迭代背后的产品逻辑,并探讨在 AI 狂飙的时代,产品经理应当如何转型与应对。

## 找到自我:从古怪的实验到押注编码
回到 Anthropic 的早期,尽管那时团队很小(整个 API 业务甚至只有一名工程师),但文化非常强大且充满初创公司的活力 <button class="pd-ts" data-t="03:58" data-who="Diane Penn" data-en="Like you said, we had five product engineers. There was one engineer for the entirety of our API business, if you believe. And I think a big portion of it was the culture was really strong." aria-label="回原文"></button>。Diane 认为一个重要的隐藏转折点,是他们推出了 Golden Gate Claude([[金门大桥版 Claude|金门大桥版 Claude]])<button class="pd-ts" data-t="05:02" data-who="Diane Penn" data-en="No. So this was actually up for about 24 hours or so. We had just published one of our early interpretability research in early 2024." aria-label="回原文"></button>。当时他们刚刚发表了关于模型可解释性的研究,发现可以通过调整模型层内的特征来表达特定主题 <button class="pd-ts" data-t="05:14" data-who="Diane Penn" data-en="We had just published one of our early interpretability research in early 2024. And one of the examples was essentially you could have what's called features of the model within the layers, which express certain types of thematics." aria-label="回原文"></button>。当他们调高与金门大桥相关的特征时,Claude 会在每一个回答中痴迷地谈论金门大桥 <button class="pd-ts" data-t="05:49" data-who="Diane Penn" data-en="And so when you actually essentially dialed up that feature, Claude would obsess about the Golden Gate Bridge. So meaning in every one of its responses, it would come back and talk about the Golden Gate Bridge." aria-label="回原文"></button>。团队在 24 小时内迅速在网站上搭建了这个体验,虽然可能只触达了 2000 人,但这让他们意识到:自己可以构建出与市面上的竞品截然不同的产品体验 <button class="pd-ts" data-t="06:38" data-who="Diane Penn" data-en="And we were really, really proud of it. I think it maybe reached only 2,000 people, to be honest. But it made us feel like, oh, we can actually bring new user experiences, showcase our research in a way that's different and authentic to us." aria-label="回原文"></button>。

> 【背景】主持人提到 Anthropic 目前的年经常性收入(ARR)约为 500 亿美元。这是衡量软件公司营收规模的一个常用财务指标。

说完了早期的探索,接下来是真正让他们确立地位的里程碑——押注编码能力。
Diane 指出,训练 Opus 3(于 2024 年初上线)是公司的一个重大时刻,证明了他们有能力打造[[前沿模型|前沿模型]](frontier model,即在能力上处于行业最前沿的模型)<button class="pd-ts" data-t="09:11" data-who="Diane Penn" data-en="Definitely when we were training and testing Opus 3, I think that was the moment when the company... I think we were less than 200 people still at that point. And it was very clear that we needed and wanted to create a frontier model." aria-label="回原文"></button>。更重要的是,他们敏锐地捕捉到了一个机会:人们开始用模型编写长篇代码,而不仅仅是代码补全 <button class="pd-ts" data-t="11:29" data-who="Diane Penn" data-en="I think competitor models like GPT-4 at the time was used a bit for coding, but it was one of many use cases. And one thing that, for example, I saw was people are starting to use these models, not just for code, not just code autocomplete, but actually writing long-form code." aria-label="回原文"></button>。尽管从训练角度看这只是个相对较小的改变,却帮助 Claude 实现了差异化,吸引了大量早期的开发者和爱好者 <button class="pd-ts" data-t="11:47" data-who="Diane Penn" data-en="And is that an opportunity for us to train Opus 3 to be better at? And it ended up being a relatively smaller change from a training perspective, but it ended up helping us differentiate in the early days competitively for users and actually bring a lot of the very early Claude enthusiasts and developers because we were providing a value that they didn't really think was possible at the time." aria-label="回原文"></button>。

一年后,Opus 4.5 的发布则带来了另一个质的飞跃。Diane 认为,Opus 4.5 的魔力在于,他们此时不仅有了一个强大的模型,还有了 Claude Code 这样的前沿产品作为载体 <button class="pd-ts" data-t="12:43" data-who="Diane Penn" data-en="Opus 4.5 was definitely another large moment. I think what was magical about Opus 4.5 is we also now not just had a model, but a vehicle, which is a great product experience like Claude Code." aria-label="回原文"></button>。团队深信,你需要前沿产品才能让人们真正感受到前沿模型的魔力 <button class="pd-ts" data-t="12:57" data-who="Diane Penn" data-en="I think what was magical about Opus 4.5 is we also now not just had a model, but a vehicle, which is a great product experience like Claude Code. One thing we say a lot on the team is you need frontier products in order to have frontier models and for people to feel the magic of frontier models." aria-label="回原文"></button>。Opus 4.5 和 Claude Code 是相互成就的——没有好产品,模型的突破无法落地;没有强模型,产品体验也无法迎来爆发式的采用 <button class="pd-ts" data-t="13:37" data-who="Diane Penn" data-en="It was actually both. I think Opus 4.5 wouldn't have had that moment without a product like Claude Code. And Claude Code, I think, wouldn't have had that type of adoption accelerated without Opus 4.5." aria-label="回原文"></button>。

## 身处指数级曲线中:拥抱适应性与涌现能力
工具变了,模型进化的速度也变了,身处其中的人该怎么办?这正是接下来要探讨的话题。
面对当下 AI 呈指数级进步的现状,Diane 强调,适应能力变得至关重要 <button class="pd-ts" data-t="15:28" data-who="Diane Penn" data-en="And so the analogy of that is I think a couple of things. Number one is adaptability becomes very important. I think we have evals, we have on the safety side, safety testing, red teaming on the capabilities and product side, new prototypes, products like Claude Code, Tag and others." aria-label="回原文"></button>。在互联网从新奇事物变成大众必需品的时期,多数人还未进入职场,而现在的 AI 变革也是如此。面对随时可能出现的新信息,与其死守原计划,不如保持敏捷,基于新信息做出更好的决策 <button class="pd-ts" data-t="15:54" data-who="Diane Penn" data-en="But it's very hard to predict the exact moment or the exact model. And so the adaptability of when you're faced with new information, how do you then make better decisions versus keeping the same plan?" aria-label="回原文"></button>。

这种无法预测的特性,源于大模型Scaling Laws(缩放定律,指模型性能随算力和数据增加而提升的规律)中描述的[[涌现能力|涌现能力]](emerging capabilities)<button class="pd-ts" data-t="17:53" data-who="Diane Penn" data-en="Is that roughly what you're describing? I think so. I think there's some really interesting graphs in the original scaling law papers." aria-label="回原文"></button>。Diane 解释道,虽然随着算力和数据增加,模型的整体损失(预测错误的概率)会呈平滑的线性下降,但在某些特定能力上,模型会表现出不连续的跳跃式突破 <button class="pd-ts" data-t="18:26" data-who="Diane Penn" data-en="What's actually also interesting in that paper is there are these very different emerging capability graphs. And so for example, as you add in more data and you train the models with more compute, you essentially see these actually discontinuous emerging capabilities jump." aria-label="回原文"></button>。比如,模型可能在某一天突然从不会算加法,变成能可靠地完成计算。这就要求团队必须依赖[[评估|评估]]来测试系统,否则这些能力跳跃可能发生了,开发者却一无所知,这也给安全性带来了巨大挑战 <button class="pd-ts" data-t="19:06" data-who="Diane Penn" data-en="And also what makes things like safety harder. Because unless you have the evals, unless you have the systems to test, these jumps might actually happen and you don't know." aria-label="回原文"></button>。

## Labs 的运作逻辑:对非连续性大押注
既然模型的发展存在不可预测的跳跃,Anthropic 内部是如何探索这些可能性的呢?答案就在他们内部的实验室团队中。
Diane 负责 [[Labs|Labs]] 团队的产品,她指出 Labs 的核心使命是:识别并拉扯那些可能不在核心路线图上的非连续性大押注(discontinuous large bets),并探索其 10 倍甚至 1000 倍的潜力 <button class="pd-ts" data-t="24:00" data-who="Diane Penn" data-en="The thesis of Labs in many ways is identifying and pulling the thread on... ... in many ways is identifying and pulling the thread on the thread of discontinuous large bets that might not be in the core roadmap, and figuring out is there a there there?" aria-label="回原文"></button>。像 Claude Code、skills([[技能|技能]])、Claude Design 和 MCP 这样的明星产品,都出自这里 <button class="pd-ts" data-t="24:29" data-who="Diane Penn" data-en="I've heard of it. Things like Claude Code, things like skills, and most recently Claude Design, MCP. The thing that we really try to emphasize within the teams is, especially right now, there are so many things that could be built." aria-label="回原文"></button>。

Labs 能够持续产出创新的关键在于其独特的团队文化。Diane 解释说,他们会对某个领域或主题持有强烈的观点,但对具体的原型实现则保持开放态度 <button class="pd-ts" data-t="24:48" data-who="Diane Penn" data-en="What does it mean then to have a discontinuous bet? And I think one approach that we're taking this year is you can be very strongly held opinion about the theme or the area, and then more weakly held about the exact prototype." aria-label="回原文"></button>。团队中有很多自驱动的工程师,他们会从零开始测试想法。Labs 的团队规模通常很小,有时一个想法仅仅从一个工程师开始 <button class="pd-ts" data-t="26:31" data-who="Diane Penn" data-en="I think Ben sets an incredible vision and pushes people to think about the 10X, 100X of the idea. And the teams, the pods within Labs is small, sometimes these ideas start with one engineer." aria-label="回原文"></button>。因为他们深知,当过于庞大的团队去追求极其模糊的宏大想法时,反而会被拖慢节奏。

## 研究团队与产品的桥梁:evals 是新的 PRD
了解了实验室的创新机制,那么在研究与产品之间,产品经理究竟扮演着什么角色?
Diane 的团队高度整合并嵌入在研究循环中,尤其是在视觉、计算机使用、编码和工具使用等直接影响用户的领域 <button class="pd-ts" data-t="29:39" data-who="Diane Penn" data-en="The way that my team works with researchers is being very integrated and embedded in those loops, particularly areas where there's a lot of impact on users. So this is things like vision, computer use, coding, agentic coding, tool use, test time compute, things where there's a direct user impact." aria-label="回原文"></button>。他们的核心工作之一,是将模糊的用户反馈转化为研究人员可操作的具体问题。例如,当用户抱怨「Claude 产生了幻觉」时,团队会深入查阅转写记录,分析失败的轨迹 <button class="pd-ts" data-t="42:51" data-who="Diane Penn" data-en="I think if you go deep enough, you might have the user walk you through their user flow, the pixels. Here, you have to sweat the tokens as much as you sweat the pixels, and so one activity we have on the team is reading the transcripts and understanding what was the trajectories of failed very deeply to then say, was this a hallucination?" aria-label="回原文"></button>。到底是工具调用的失败,还是知识检索的错误?通过这种深挖,他们能构建出标准化的评估集 <button class="pd-ts" data-t="31:14" data-who="Diane Penn" data-en="And so bring that level of detail to researchers coming up with, is this a big enough problem? Figure out things like evals to then describe what we've improved it." aria-label="回原文"></button>。

在 AI 时代,传统的产品需求文档([[PRD|PRD]])正在让位于新的工作方式。Diane 在团队中有一句名言:「evals(评估,指用于测试模型能力的数据集或任务)是新的 PRD」<button class="pd-ts" data-t="01:58" data-who="Diane Penn" data-en="She's also helped incubate and launch Claude Code, MCP, skills, Claude Design, and also core capabilities like computer use, tool use, and reasoning. It is always such a treat and so mind-expanding to get to talk to someone who's at the very center of AI and product management, it's hard to imagine someone who has seen more of where things are going than the head of product for Anthropic's research and Labs teams." aria-label="回原文"></button>。过去,产品经理通过写一页纸的 PRD 来定义工作;现在,定义工作的方式是编写能够一致地捕捉到用户痛点的评估集 <button class="pd-ts" data-t="45:48" data-who="Diane Penn" data-en="And then that actually is your eval set. And you could have essentially a prompt and a response. And if that is not working in the right golden answer that you might have, then that means that the eval essentially is beneficial because it's identifying a pain point consistently." aria-label="回原文"></button>。她分享了一个早期例子:当时大量关于「Claude 不擅长遵循指令」的反馈,深挖后发现 80% 的失败是因为 Claude 没能写出正确格式的 JSON <button class="pd-ts" data-t="45:25" data-who="Diane Penn" data-en="Going to that level of detail. And what I saw was something like 80% of what people meant in the early days for this failure was Claude would not write the right JSON." aria-label="回原文"></button>。于是,他们生成了几十个错误示例作为评估集,每次模型迭代都运行该测试,直到这个问题被彻底解决。Diane 认为,这是一种针对产品经理的测试驱动开发(test-driven development)<button class="pd-ts" data-t="46:42" data-who="Lenny" data-en="And then figuring out how to standardize it in a way that can be consumable for researchers. It's basically test-driven development for PMs is the world we're living now where you write the test first." aria-label="回原文"></button>。

> 【背景】PRD(Product Requirements Document,产品需求文档)是传统软件行业中,产品经理用来详细描述产品用途、功能和行为的规范文件。Diane 认为在 AI 产品开发中,精心设计的评估集正在承担这种定义工作的作用。当然,在需要对齐众多利益相关者或探索尚未成熟的模糊领域(如早期的计算机使用功能)时,PRD 依然有其不可替代的价值 <button class="pd-ts" data-t="48:14" data-who="Diane Penn" data-en="I think there's other cases where PRDs are really valuable. PRDs are great vehicles for getting a very large group of people aligned on a set of sources of truth about experience and set of goals." aria-label="回原文"></button>。

## 招聘与技能转变:管理者必须亲手交付
明确了新的工作方式,对从事产品工作的人又提出了哪些具体的能力要求?
Diane 指出,尽管 AI 发展迅猛,但他们团队三年来评估产品经理的招聘标准一直没变,核心就是第一性原理思维 <button class="pd-ts" data-t="40:26" data-who="Diane Penn" data-en="So what we actually look for and the traits and how we evaluate generalists like PMs, generalists like research, product managers have actually been the same. So I think some of those traits, number one is first principles thinking." aria-label="回原文"></button>。这意味着不依赖过去做 SaaS 或消费软件的经验模式,而是基于当前的技术和用户群体,重新推演用户价值的本质。

对于处于管理岗位的产品领导者,Diane 的建议非常坚决:你必须亲力亲为 <button class="pd-ts" data-t="50:32" data-who="Diane Penn" data-en="I think maybe specifically for folks who might be mid-career or folks who have been more in a managerial product leadership seat. One thing that I think I feel pretty strongly about is in order to be good managers of teams and PMs working with this technology, you have to be really hands-on yourself and have spent not just time tinkering, but actually shipping with this technology." aria-label="回原文"></button>。要管理好与这项极速变化的技术打交道的团队,管理者不能仅仅停留在战略层面,不仅要花时间去修补,还必须亲自使用技术进行端到端的交付(shipping)<button class="pd-ts" data-t="50:53" data-who="Diane Penn" data-en="One thing that I think I feel pretty strongly about is in order to be good managers of teams and PMs working with this technology, you have to be really hands-on yourself and have spent not just time tinkering, but actually shipping with this technology." aria-label="回原文"></button>。她自己也会在模型迭代时亲自负责一两个工作流,以保持对模型能力演进的真实感知 <button class="pd-ts" data-t="52:13" data-who="Diane Penn" data-en="You have to kind of walk in the shoes of your teams. And I always try to carve out a portion of time to actually own one to two work streams when we have models in order to keep my theory of mind, keep my sense of how the models are moving, how quickly it's improving, so I can help the team make decisions and make better decisions." aria-label="回原文"></button>。

此外,面对很多人对 AI 产生的大脑萎缩担忧,Diane 分享了她个人的使用哲学:在处理需要个人判断的事务时,她会先形成自己的观点,然后再把 Claude 当作一个陪练,让它在合适的时机反驳自己,以此来增强而不是替代自己的思考 <button class="pd-ts" data-t="61:43" data-who="Diane Penn" data-en="A lot of actually thinking process and writing process are tied together for me personally. And so I think there are ways where I use Claude to augment my thinking, but what I want to make sure, and maybe this is what you're describing, is Claude doesn't take over all of my thinking for me." aria-label="回原文"></button>。她甚至利用 Claude 的 skills(技能)功能,结合相关书籍的沟通原则,来辅导自己如何进行关键的高难度对话,提升作为管理者的情商(EQ)<button class="pd-ts" data-t="59:23" data-who="Diane Penn" data-en="So I love that book. And so I actually have a skill that helps me figure out, am I going in the right level of detail given the situation at hand, and actually helping me be a better manager and better supporter for the team." aria-label="回原文"></button>。

## 坚持与好奇心:面向未来的终极竞争力
说完了当下的工作方法,最后我们来看看在这个充满不确定性的时代,如何保持竞争力与内心的平衡。
Diane 认为,随着 AI 越来越聪明,人类来之不易的判断力依然是极具价值的特质 <button class="pd-ts" data-t="72:20" data-who="Diane Penn" data-en="We started to talk about making Claude and models better at judgment, especially in the last year or so. I think judgment is an area where, it's accumulation of so much nuance and so much experience." aria-label="回原文"></button>。对于如何教育下一代以适应未来,她给出的答案并非编程或特定的技术技能,而是最基础的特质:对学习的纯粹好奇心、坚持不懈的毅力,以及相信自己内在声音的勇气 <button class="pd-ts" data-t="74:27" data-who="Diane Penn" data-en="Where do you think you're going to nudge them to be successful in this wild new world that we're entering? I actually think it's a lot of the same traits you and I probably grew up with, which is curiosity for learning, persistence, believing in your own inner voice." aria-label="回原文"></button>。

面对这个高强度、高变化的行业,Diane 防止职业倦怠的秘诀在于团队文化。她强调,这不是一项个人运动。在面临关键决策或发布前夕,团队成员会展现出彻底的主人翁意识,互相支持、熬夜帮忙审查——她称之为进入一种意识融合的蜂巢思维(hive mind)<button class="pd-ts" data-t="78:54" data-who="Diane Penn" data-en="But I think one of the magical parts of Anthropic is this ability for us to figure out what are those opportunities to help each other and actually then taking the next smile of mind melding." aria-label="回原文"></button>。这种基于低自我和高度团队协作的文化,是支撑她和团队持续保持战斗力的根本 <button class="pd-ts" data-t="81:07" data-who="Diane Penn" data-en="So I think I really try to look for that when building the team, growing the team, hiring. Is this person going to care about their own ego and building out a big org or are they going to care about contributing to Anthropic and contributing to the impact of the team and orienting towards folks who are low ego, team-oriented?" aria-label="回原文"></button>。

## 本集带走
1. **评估即需求**:在模型驱动的产品开发中,精心设计的评估集正在取代传统 PRD,成为定义痛点和衡量产品改进的核心抓手。产品经理必须像测试驱动开发一样,亲自深入到细微的失败轨迹中去构建评估标准。
2. **管理者必须动手**:在 AI 时代,仅仅依靠过往经验进行管理已经失效。无论职位多高,管理者都必须亲自使用模型进行端到端的交付,才能保持对技术进步的真实感知,从而做出正确的决策。
3. **让 AI 成为你思考的陪练**:面对 AI,与其担心大脑退化,不如先形成自己的观点,然后利用 AI 的主动反驳能力来打磨和深化你的想法。AI 不应仅仅是一个顺从的执行者,更应该是能帮你得出更优结论的思考伙伴。

## 金句(中英对照 · 过机器闸门三联校验)

> 所以我们确实会写一些产品文档和 PRD,但我们在团队中其实有句说法,评估就是新的 PRD。  
> *So we do write some product documents and PRDs, but we actually have a saying on the team of evals are the new PRDs.*  
> —— Dianne Penn · [41:36] ^q1

> 但是的,我认为 Anthropic 的秘方是其文化、人们工作方式的自下而上的本质,以及这种公开实验。  
> *I think the secret sauce of Anthropic is the culture and the bottoms of nature of how people work and this experimenting in public.*  
> —— Dianne Penn · [57:32] ^q2

> 我们在团队里经常说的一件事是,你需要前沿产品才能拥有前沿模型,并让人们感受到前沿模型的魔力。  
> *One thing we say a lot on the team is you need frontier products in order to have frontier models and for people to feel the magic of frontier models.*  
> —— Dianne Penn · [12:57] ^q3

## 相关单集

- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同嘉宾:Lenny · 同公司:Anthropic · 同概念:Claude、Claude Code
- [[2026-07-13-pg-the-complete-claude-stack-for-pms|《PM 如何用 Claude 把生产力提升 10 倍：全栈实战》]] —— 同概念:Claude、Claude Code、技能 (skills)、MCP
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同嘉宾:Lenny · 同公司:Anthropic · 同概念:Claude Code
- [[2025-12-07-lennys-surge-ai-edwin-chen|《Surge AI 创始人 Edwin Chen:我们教模型追逐多巴胺,而非真理》]] —— 同嘉宾:Lenny · 同公司:Anthropic · 同概念:Claude
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同嘉宾:Lenny · 同公司:Anthropic · 同概念:Claude Code
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《Anthropic 增长负责人：用 Claude 自动化增长实验，把 PM 的活交给工程师》]] —— 同嘉宾:Lenny · 同公司:Anthropic · 同概念:PRD
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《iPod之父Tony Fadell：反直觉的产品课》]] —— 同嘉宾:Lenny · 同公司:Anthropic、OpenAI
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同嘉宾:Lenny · 同概念:Claude Code
- [[2026-05-10-lennys-how-to-build-a-company-that-withstands|《《精益创业》作者 Eric Ries 新作导读：好公司为什么会「变坏」》]] —— 同嘉宾:Lenny · 同公司:Anthropic
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的未来工作预测：别等 AI 末日，用 Codex 重塑一切》]] —— 同嘉宾:Lenny · 同概念:Claude Code
- [[2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for|《Adam Mosseri：AI 时代的团队重组与产品品味》]] —— 同嘉宾:Lenny · 同公司:Anthropic
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被迫转行，一半人迎来复兴》]] —— 同嘉宾:Lenny · 同公司:Anthropic · 同概念:Claude
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《对话 Notion 产品负责人 Max:AI 时代的产品方法论与人的主观能动性》]] —— 同嘉宾:Lenny · 同公司:Anthropic
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人 Mark Pincus：想做出伟大产品，先学会「合法地抄袭」》]] —— 同嘉宾:Lenny · 同概念:Claude
- [[2026-07-12-lennys-how-tech-workers-actually-feel-about|《科技圈情绪调查：一半人狂喜，一半人煎熬》]] —— 同嘉宾:Lenny · 同公司:Anthropic
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:Claude Code、MCP
- [[2026-07-24-bigtech-what-happens-if-ai-fails-subprime-data-c|《AI 悬崖边？数据中心次级债与 SpaceX 缩水》]] —— 同公司:Anthropic、OpenAI
- [[2025-11-16-lennys-the-godmother-of-ai|《AI 教母李飞飞:从 ImageNet 到空间智能,与首个 3D 世界模型 Marble》]] —— 同嘉宾:Lenny
- [[2025-11-20-lennys-slack-founder-stewart-butterfield|《把自家产品骂成「一坨狗屎」：Stewart Butterfield 的产品哲学》]] —— 同嘉宾:Lenny
- [[2025-11-23-lennys-a-guide-to-difficult-conversations|《别再充当团队的“答案机”：高管教练 Rachel Lockett 的领导力实战课》]] —— 同嘉宾:Lenny
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同嘉宾:Lenny
- [[2025-12-28-lennys-10-contrarian-leadership-truths|《Rippling高管Matt MacInnis:成就伟业,你必须时刻保持极度紧绷》]] —— 同嘉宾:Lenny
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《1.2 个人 + 20 个 AI 智能体：SaaStr 的极简销售实验》]] —— 同嘉宾:Lenny
- [[2026-01-25-lennys-why-your-product-stopped-growing|《增长停滞怎么办？Jason Cohen 的四步诊断法》]] —— 同嘉宾:Lenny
- [[2026-02-01-lennys-dr-becky-on-the-surprising-overlap|《育儿专家 Dr. Becky 谈职场领导力：怎么管“大号婴儿”》]] —— 同嘉宾:Lenny
- [[2026-02-26-lennys-ai-is-critical-for-humanitys-survival|《对话 Cisco CPO Jeetu Patel:大公司如何不掉队 AI 时代》]] —— 同嘉宾:Lenny
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《1500 亿美元的隐形 AI 公司创始人：恐惧源于无知，最好的工作是独自安静地完成》]] —— 同嘉宾:Lenny
- [[2026-03-22-lennys-the-art-of-influence-jessica-fain|《别只想推销：产品负责人如何真正影响高管决策》]] —— 同嘉宾:Lenny
- [[2026-04-12-lennys-hard-truths-about-building-in-the-ai-era|《Keith Rabois 的用人铁律：别招熟手、别做客户访谈、公开批评》]] —— 同嘉宾:Lenny
- [[2026-04-26-lennys-snapchat-ceo-why-distribution-is|《Snap 创始人 Evan Spiegel:做硬件、搞创新、用 AI,为什么人性比技术更重要》]] —— 同嘉宾:Lenny
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《Gusto CTO 的极简实验:5 人 10 周凭感觉编程造出 AI 产品》]] —— 同概念:Claude Code
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《Netflix 产品负责人谈 AI 时代：每个人都能做一切,但卓越的专长不会消失》]] —— 同嘉宾:Lenny
- [[2026-07-26-a16z-ben-horowitz-the-fight-over-open-source|《为什么开源是AI安全与创新的底线：Ben Horowitz谈开放权重之争》]] —— 同公司:Anthropic
- [[2026-06-22-latent-space-gray-swan|《让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏》]] —— 同公司:Anthropic · 同概念:Claude
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:计算机使用 (computer use)
- [[2026-07-08-latent-space-modal|《从避战大模型到押注智能体：Modal 的推理基础设施进化史》]] —— 同公司:Anthropic
- [[2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge|《Sriram Krishnan：Kimi K3 将改写 AI 行业版图》]] —— 同公司:Anthropic

*本集关键词:AI 产品经理 · 评估即需求 · 模型迭代 · 第一性原理 · 适应能力*

<script>
(function(){
  function move(){
    var side=document.querySelector('.right.sidebar'); if(!side) return;
    var box=null;
    var all=document.querySelectorAll('article blockquote[data-callout]');
    for(var i=0;i<all.length;i++){
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
  document.addEventListener('nav', move);
  move();
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

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
