---
title: AI 为什么这么聪明，却干不了保险核保？
podcast: The TWIML AI Podcast
date: 2026-10-07
source_url: undefined
duration: "90:09"
type: episode
cover: "#64748b"
image: "/covers/2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai.jpg"
description: TypeSafe 联合创始人 Diogo Almeida 讲 Jev 背后的想法：AI 不该为人写字，该为软件做决定。
host: "[[Sam Charrington]]"
cohosts: ["[[Diogo Almeida]]"]
companies: ["[[TypeSafe]]", "[[OpenAI]]"]
concepts: ["[[Jev]]", "[[可靠性]]", "[[RLHF]]", "[[RLCD]]", "[[RLVR]]", "[[后训练]]", "[[校准]]", "[[分类器]]", "[[harness]]", "[[智能体]]", "[[Claude Code]]", "[[OpenClaw]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/covers/2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai#post","headline":"AI 为什么这么聪明，却干不了保险核保？","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai","mainEntityOfPage":"https://talk.solomind.cc/2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai","description":"TypeSafe 联合创始人 Diogo Almeida 讲 Jev 背后的想法：AI 不该为人写字，该为软件做决定。","datePublished":"2026-10-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai.jpg","about":[{"@type":"Person","name":"Sam Charrington"},{"@type":"Person","name":"Diogo Almeida"},{"@type":"Organization","name":"TypeSafe"},{"@type":"Organization","name":"OpenAI"},{"@type":"Thing","name":"Jev"},{"@type":"Thing","name":"可靠性 (reliability)"},{"@type":"Thing","name":"RLHF"},{"@type":"Thing","name":"RLCD"},{"@type":"Thing","name":"RLVR"},{"@type":"Thing","name":"后训练 (post-training)"},{"@type":"Thing","name":"校准 (calibration)"},{"@type":"Thing","name":"分类器 (classifier)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"OpenClaw"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AI 为什么这么聪明，却干不了保险核保？","item":"https://talk.solomind.cc/2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 为什么这么聪明，却干不了保险核保？</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 为什么这么聪明，却干不了保险核保？

<div class="pd-byl"><b>Diogo Almeida</b> · TypeSafe 联合创始人兼 CEO · 2026-10-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我用来介绍 Jev 的电梯演讲就是：那些该死的自动化到底都在哪儿。</div><div class="a">— Diogo Almeida <button class="pd-ts" data-t="01:47" data-who="Diogo Almeida" data-en="The elevator pitch I use for Jev is just where the f*** is all the automation." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sam Charrington]] · [[Diogo Almeida]]
>
> **公司** [[TypeSafe]] · [[OpenAI]]
>
> **概念** [[Jev]] · [[可靠性]] · [[RLHF]] · [[RLCD]] · [[RLVR]] · [[后训练]] · [[校准]] · [[分类器]] · [[harness]] · [[智能体]] · [[Claude Code]] · [[OpenClaw]]

三周前，[[Diogo Almeida|Diogo Almeida]] 的公司 [[TypeSafe|TypeSafe]] 发布了模型 [[Jev|Jev]]，迅速成为 AI 圈热议的话题。

有人耸耸肩说这不就是个[[分类器|分类器]]，也有人发现它快、便宜、好用，几天之内开源仿制品就冒了出来，[[OpenAI|OpenAI]] 也跟着发布了类似产品。

但 Almeida 说，这些讨论大多没抓到重点。他曾在 OpenAI 工作四年半，参与过 InstructGPT 和 [[RLHF|RLHF]]——就是把语言模型变成今天聊天助手的那套技术。

这一次，他想回答的问题很直白：「自动化到底在哪儿？」

## AI 好到超人的事和烂到没法用的事，为什么同时存在？

Almeida 的观察是：今天的 AI 在两件事上分裂得厉害。一边是 ChatGPT、DeepResearch、[[Claude Code|Claude Code]] 这些超人级的表现；

另一边是最简单的数据录入、保险核保、客服换信用卡，AI 烂到根本没法用，尽管背后有巨大的商业动力 <button class="pd-ts" data-t="02:02" data-who="嘉宾" data-en="I think AI is just so unbelievably smart, yet so unbelievably useless at the kinds of things you'd really expect it to be useful for. And most people, as far as I can tell, don't really have an answer on why there's like this entire bucket of stuff where AI is not just good, it's like super humanly good, like ChatGPT, DeepResearch, Claude Code." aria-label="回原文"></button>。

他去 Anthropic 官网试过他们的客服[[智能体|智能体]]：扔常见问题给你很在行，但要办点实际的事就不行了。

他的解释是：整个现代 AI 只有一个工具——预测下一个词的 Transformer，外加一堆让它越来越会生成文字的机制。

文字是给人看的，而会计、客服这些工作需要的是给计算机消费的离散决定。

他甚至说，AI 实验室很有动力不诚实回答这个问题 <button class="pd-ts" data-t="04:28" data-who="嘉宾" data-en="Like there's a lot of nuance into that where it really begs some questions that I don't think people in the field are really ready to answer and are very incentivized." aria-label="回原文"></button>。

## 机器学习的铁律：你优化什么，就得到什么

他给出的答案是「你优化什么，就得到什么」。

现有语言模型都在为字符串优化，字符串是给人看的；而自动化需要的是精确的、[[校准|校准]]过的决策。两者完全是两回事 <button class="pd-ts" data-t="05:18" data-who="嘉宾" data-en="So you get what you optimize for and... Basically all the string LLMs have been optimized for strings and strings are meant to be consumed by humans or other LLMs." aria-label="回原文"></button>。

有人会说模型的强弱是锯齿状的。他反问：你见过 ChatGPT 无缘无故骂你吗？

没有——因为 RLHF 的奖励机制让某些错误变得极易惩罚，模型在这些地方就超级可靠 <button class="pd-ts" data-t="07:02" data-who="嘉宾" data-en="Have you ever seen ChatGPT respond to you rudely or like insulting you for no reason? Not if I didn't tell it to do that. Exactly." aria-label="回原文"></button>。**所以锯齿不是天生的，是优化方向决定的**。

从业者其实有很大的主动权，只是很多人没意识到。

顺带一提，他不太认同 Sutton 那篇著名的苦涩的教训（算力比算法重要）。他认为数据比算力重要，而比数据更重要的是选对任务。

RLHF 之所以带来巨大飞跃，是因为有人先想出了让人类在两个回答之间选偏好这个全新任务，然后从零造出了互联网上根本不存在的数据 <button class="pd-ts" data-t="12:10" data-who="嘉宾" data-en="So when I refer to RLHF, this is a task that is being done. And before RLHF existed, there was literally no human feedback data on the internet of the shape that we were looking for because we had to create it." aria-label="回原文"></button>。

## 就是个分类器？那是对它最好的夸奖

Jev 发布后，一批机器学习老兵撇嘴：这不就是分类器、逻辑回归吗？

Almeida 的回应是：分类器本来就不是什么炫技的东西，它是有用性的形状——Meta、Google 靠一堆分类器运转。

**如果有人说 Jev 是一个零样本通用分类器，他会当成最高的赞美** <button class="pd-ts" data-t="25:35" data-who="嘉宾" data-en="Probably mostly classifiers. So there's nothing wrong with classifiers. I actually think if someone told us that we were a zero-shot general classifier for anything, that would be the greatest compliment I've ever been given for Jev." aria-label="回原文"></button>。

他的类比是：相当于随手给每个开发者配了一支 2019 年的机器学习工程团队，你想一个任务，它当场就建好了，而且质量更高。

真正的分歧不在界面，而在智能。用小模型或嵌入向量加分类器去模仿 Jev 的接口，你得到的就是那种东西的智能水平。

他说自己当初以为这个项目一周就能做完，结果发现模型看似什么都会，唯独不擅长做决策 <button class="pd-ts" data-t="30:48" data-who="嘉宾" data-en="I thought it would have taken a week because I've post-trained so many models for so many different things. And models are, they seem to be very, very general at a lot of stuff, but apparently not decision-making, which I've learned the hard way." aria-label="回原文"></button>。

## 不要智能体外壳，把控制权还给程序员

Jev 对开发者的形态是：给它一组可能的决策和输入，它告诉你选哪个，还给出每个选项的概率。Almeida 喜欢把它叫智能的 SQL<button class="pd-ts" data-t="37:35" data-who="嘉宾" data-en="I also like the description of sequel for intelligence. You know, or like it's a combination, right? Like system, there's the interface, which then the model, and we are kind of made both." aria-label="回原文"></button>。

他甚至拒绝[[harness|harness]]（智能体外壳）这个概念，认为那是无马马车式的思维——硬把智能包装成人的样子。

他的核心主张是：**概率应该原样交给用户，让程序员根据自己业务的成本和收益来设阈值**。

现在的大模型 API 没有这些旋钮，你只能在系统提示里苦苦哀求请别随便退款——这在他看来是工程上的疯狂。

他举例说，OpenAI 当年模型拒绝率过高需要回滚，其实就是模型内部做了一个拒绝还是不拒绝的决定，但没有任何可调阈值 <button class="pd-ts" data-t="51:09" data-who="嘉宾" data-en="So there does exist queries by construction that if you refresh it several times, it will sometimes refuse and sometimes not refuse. That is insane behavior from an engineering point of view, right?" aria-label="回原文"></button>。

## 概率凭什么可信？因为 RLHF 反而毁掉了校准

关于概率校准的难题，他透露了一点：

那些互联网的压缩包（预训练模型）其实校准得不错，**真正毁掉校准的是 RLHF 和 [[RLVR|RLVR]]**——为了把文字写好，模型需要极端的过度自信，概率分布完全被扭曲了 <button class="pd-ts" data-t="56:36" data-who="嘉宾" data-en="As far as we can measure, decently calibrated. They're not perfectly calibrated, but they are way, way more calibrated than RLHF models are. Actually, RLHF and RLVR destroy the calibration of the models immensely because in order to output strings well, you actually need extreme overconfidence." aria-label="回原文"></button>。

[[RLCD|RLCD]] 的思路是用校准决策作为强化学习目标，从原始模型这个好底子出发，一路训练得越来越准。

他也承认 Jev 还很早期，应该被当成早期的 ChatGPT看待，决策能力大概强于不做推理的 RLHF 模型，但还比不上最强的推理模型 <button class="pd-ts" data-t="68:05" data-who="嘉宾" data-en="It should be treated like an early ChatGPT. And I would guess that in terms of like overall robustness, The RLHF models are very bad at decision-making, so I would guess that R models would be less good at decision-making than the biggest RLVR models, but a lot better than the non-reasoning RLHF models." aria-label="回原文"></button>。

## 未来的智能体，可能长得完全不一样

他写过一篇博客叫《KVCache Rules Everything Around Me》，论点是今天智能体的很多设计，其实是被上下文缓存很贵这个约束逼出来的。

他的面试题是：==如果 KV 缓存不存在，你会怎么设计一个编程智能体==？

一旦假设你能在飞快又便宜地获取可靠智能，扇出、过滤、重排、在上下文里做层级检索，全都成为可能 <button class="pd-ts" data-t="78:52" data-who="嘉宾" data-en="I did actually share a write-up I had, I actually have a blog post related to this, called KVCache Rules Everything Around Me. Like C-A-C-H-E. Somehow no one on the internet has said cache rules everything around me beforehand with a C-A-C-H-E. And I can't believe I was the first one to say this." aria-label="回原文"></button>。

他猜测未来是混合形态：从今天的魔法 while 循环起步，软件逻辑一点点加上去，直到变成真正的软件多一点、魔法少一点。

对于一次性任务，直接丢给大语言模型碰运气完全合理；

但想要一个能在后台永远跑下去的依赖，上轨道不是缺陷，而是自动化的前提 <button class="pd-ts" data-t="86:02" data-who="嘉宾" data-en="If you want it to be closed away in the box and run in the background and have it be a dependency that you just call forever, that's the kind of thing where it makes sense to really engineer that system upfront." aria-label="回原文"></button>。

## 本集带走

- AI 聪明却没用的根源，在于现有模型全是为给人看的字符串优化的，而自动化需要的是给软件消费的校准决策。
- Jev 的价值不在快和便宜，而在于换了优化目标：输出概率、暴露可调阈值，把决策权交还给程序员。
- 分类器不是贬义词——它是把智能装进软件的标准形状，Meta 和 Google 都靠它运转。
- RLHF 和 RLVR 为了生成流畅文字，反而摧毁了模型的概率校准；预训练模型本身底子不错。
- 今天的智能体架构被 KV 缓存的成本深深塑造；假设智能又快又便宜又可靠，智能体可以设计成完全不同的样子。

<div class="pd-sec pd-sec-q">全部金句 <span>41 条</span></div>

> <span class="qz">我用来介绍 Jev 的电梯演讲就是：那些该死的自动化到底都在哪儿。</span>  
> *The elevator pitch I use for Jev is just where the f*** is all the automation.*  
> <span class="qm">—— Diogo Almeida · [01:47]</span> ^q1

> <span class="qz">我觉得 AI 智慧得令人难以置信，但在你真正期望它有用的那些事情上，却又无用得令人难以置信。</span>  
> *I think AI is just so unbelievably smart, yet so unbelievably useless at the kinds of things you'd really expect it to be useful for.*  
> <span class="qm">—— Diogo Almeida · [01:52]</span> ^q2

> <span class="qz">至少 AI 实验室非常有动机不去诚实地回答这个问题。</span>  
> *At least the AI labs are very incentivized to not answer that truthfully.*  
> <span class="qm">—— Diogo Almeida · [04:28]</span> ^q3

> <span class="qz">所以我对这个答案及其细微之处的看法是：你为什么而优化，就得到什么——这对所有机器学习的事情都成立，说真的，对世界上所有的事情大概都成立。</span>  
> *So my take on the answer and the nuance of it is that you get what you optimize for, which is just true of all things ML, kind of true of all things in the world, really.*  
> <span class="qm">—— Diogo Almeida · [04:55]</span> ^q4

> <span class="qz">基本上所有强大的 LLM 都是为字符串优化的，而字符串是供人类或其他 LLM 消费的。</span>  
> *Basically all the string LLMs have been optimized for strings and strings are meant to be consumed by humans or other LLMs.*  
> <span class="qm">—— Diogo Almeida · [05:18]</span> ^q5

> <span class="qz">你知道，同样是 0% 的准确率，但你永远不会得到「把脸在键盘上乱按」这种情况，因为优化中的这种不对称性。</span>  
> *You know, it's the same 0% accuracy, but you never get the mashing your face on the keyboard because of the asymmetry in the optimization.*  
> <span class="qm">—— Diogo Almeida · [07:53]</span> ^q6

> <span class="qz">而且我认为人们没有意识到 AI 从业者在设定他们期望的目标清单并植入模型方面有多大的主观能动性。</span>  
> *And I don't think people realize how much of an agency that AI practitioners have in setting their menu of desiderata into the model.*  
> <span class="qm">—— Diogo Almeida · [08:22]</span> ^q7

> <span class="qz">但我相信，数据比算力重要得多。</span>  
> *But I believe that data matters a lot more than compute.*  
> <span class="qm">—— Diogo Almeida · [10:02]</span> ^q8

> <span class="qz">而比数据更重要的是，你需要正确的任务。</span>  
> *And more important than data is you need the right task.*  
> <span class="qm">—— Diogo Almeida · [10:09]</span> ^q9

> <span class="qz">所以我认为真正能创造一个新任务的人其实寥寥无几，这就是「你优化什么就得到什么」的那部分。</span>  
> *So it's actually a rare few that I think can actually make a new task, and that is the you get what you optimize for part of it.*  
> <span class="qm">—— Diogo Almeida · [10:36]</span> ^q10

> <span class="qz">而在 RLHF 出现之前，互联网上确实根本不存在我们所要寻找的那种形态的人类反馈数据，因为我们不得不去创造它。</span>  
> *And before RLHF existed, there was literally no human feedback data on the internet of the shape that we were looking for because we had to create it.*  
> <span class="qm">—— Diogo Almeida · [12:10]</span> ^q11

> <span class="qz">我关于科幻的论点，尤其是和 LLM 相关的，我觉得这往往就是如今人们说 AI 时的意思，因为它似乎是智能的最大压缩，同时却有着最少的实用性。</span>  
> *My argument with sci-fi is especially related to LLMs, which I think tends to be what people mean by AI these days, because it seems to be like the greatest compression of intelligence while having like the least utility.*  
> <span class="qm">—— Diogo Almeida · [16:08]</span> ^q12

> <span class="qz">同时我也把自动驾驶看作一项巨大的工程胜利，而不一定是 AI 胜利。</span>  
> *And also I see self-driving as a ginormous engineering win, not necessarily an AI win.*  
> <span class="qm">—— Diogo Almeida · [16:46]</span> ^q13

> <span class="qz">我觉得这里愤世嫉俗的循环是：做一个 demo，融一笔种子轮或 A 轮，说你会把它做可靠，最后却从来没有把它做可靠，然后转而做一个 human-in-the-loop 版本的东西，而不是真正把这个任务自动化。</span>  
> *My cynical loop here is make a demo, raise a seed or series A, say that you're going to make it reliable, never end up making that reliable, pivot into a human-in-the-loop version of this thing instead of actually automating the task.*  
> <span class="qm">—— Diogo Almeida · [17:33]</span> ^q14

> <span class="qz">那大约是六年前的事了，而客服仍然没有被解决。</span>  
> *That is now roughly six years ago, and customer service is still not solved.*  
> <span class="qm">—— Diogo Almeida · [19:13]</span> ^q15

> <span class="qz">人们不断尝试自动化得来速却不断失败，对此没有什么好的解释，除非得来速比未解的数学难题还难。</span>  
> *People keep trying and failing to automate drive-throughs and there's no good answer for that other than maybe drive-throughs are harder than unsolved math.*  
> <span class="qm">—— Diogo Almeida · [19:41]</span> ^q16

> <span class="qz">而且总体来说，获得更高可靠性的方法是放大聚焦。</span>  
> *And in general, the way to get higher reliability is to zoom in.*  
> <span class="qm">—— Diogo Almeida · [21:26]</span> ^q17

> <span class="qz">但北极星一直是：如果 AI 真正、真正地为「对软件有用」而优化，它会长什么样？</span>  
> *But the North Star has always been, what does AI look like if it's really, really optimized for being useful for software?*  
> <span class="qm">—— Diogo Almeida · [23:09]</span> ^q18

> <span class="qz">它们就是「有用性」的形态本身。</span>  
> *They are literally the shape of usefulness.*  
> <span class="qm">—— Diogo Almeida · [25:15]</span> ^q19

> <span class="qz">我其实觉得，如果有人告诉我们，我们做的是「针对任何东西的零样本通用分类器」，那会是 Jev 得到过的最高赞美。</span>  
> *I actually think if someone told us that we were a zero-shot general classifier for anything, that would be the greatest compliment I've ever been given for Jev.*  
> <span class="qm">—— Diogo Almeida · [25:37]</span> ^q20

> <span class="qz">而我相信他们在思想上相当正确，但他们一直被拖累，因为模型是为字符串优化的，而不是为他们想要的东西优化的，也就是程序化的使用。</span>  
> *And I believe that they're intellectually quite correct, but they've been hobbled by the models being optimized for strings instead of them being optimized for the thing that they want, which is programmatic use.*  
> <span class="qm">—— Diogo Almeida · [27:23]</span> ^q21

> <span class="qz">而我的团队一直让我别再跟人讲这个，因为这会让我们更有可能遇到竞争。</span>  
> *And my team has been telling me to stop telling this to people because it makes it more likely we have competition.*  
> <span class="qm">—— Diogo Almeida · [28:19]</span> ^q22

> <span class="qz">我觉得人们就是没意识到他们是在为智能付费。</span>  
> *I think people just don't get that they're paying for intelligence.*  
> <span class="qm">—— Diogo Almeida · [28:53]</span> ^q23

> <span class="qz">我担心的是，如果人们玩的是这个模型的糟糕版本，他们可能会被整个子类别坑到，然后说：嘿，这类东西就是垃圾。</span>  
> *I worry that if people play with bad versions of the model, they might actually get burned by the whole subgenre and say like, hey, like, like this kind of stuff is crap.*  
> <span class="qm">—— Diogo Almeida · [31:03]</span> ^q24

> <span class="qz">你知道吗，我想成为的标杆是，让 AI 可靠到无聊透顶，就像 SQL 那样。</span>  
> *You know, like, I want to be a paragon of making AI so reliable that it's boring, like SQL.*  
> <span class="qm">—— Diogo Almeida · [32:26]</span> ^q25

> <span class="qz">而且，我再怎么强调都不为过，可靠性才是人们付费买的东西。</span>  
> *And also, I cannot emphasize enough, reliability is what people are paying for.*  
> <span class="qm">—— Diogo Almeida · [32:58]</span> ^q26

> <span class="qz">说到这个，如果你想听一个关于我的有趣又尴尬的事，就是当时我有了这个想法、那个 aha 时刻击中我的时候，我在 OpenAI 写了一份文档，题目是「我们本来去年就能拥有 AGI」。</span>  
> *On that note, if you want a fun, embarrassing thing about me, is at the time I had this idea and the aha hit me, I wrote a document in OpenAI entitled, titled, maybe not entitled, titled, we could have had AGI last year.*  
> <span class="qm">—— Diogo Almeida · [33:38]</span> ^q27

> <span class="qz">如果我们用我们这点预算能做出比全世界其他人都更好的预训练，那全世界其他人都彻底完蛋了。</span>  
> *If we could pre-train better than the rest of the world with the budget we've had, then the rest of the world is totally cooked.*  
> <span class="qm">—— Diogo Almeida · [43:39]</span> ^q28

> <span class="qz">你知道，指数级增长的资源换来有争议的线性收益，看起来是非常次线性的。</span>  
> *You know, exponentially more resources for debatably linear gains seems very sublinear.*  
> <span class="qm">—— Diogo Almeida · [43:57]</span> ^q29

> <span class="qz">发表 RLHF 对世界来说可能是件好事。</span>  
> *Publishing RLHF was probably really good for the world.*  
> <span class="qm">—— Diogo Almeida · [48:01]</span> ^q30

> <span class="qz">任何 function calling API 都不应该存在，而不带一个针对函数本身的逻辑偏置。</span>  
> *No function calling API should exist without a logic bias for the function itself.*  
> <span class="qm">—— Diogo Almeida · [49:35]</span> ^q31

> <span class="qz">所以对我来说，RLCD 就是把正确的接口暴露给构建者，让他们可以获得想要的属性，而不只是对着 system message 祈祷。</span>  
> *So to me RLCD is about exposing the right interface to builders so that they can get the properties they want without just praying to the system message.*  
> <span class="qm">—— Diogo Almeida · [50:16]</span> ^q32

> <span class="qz">一个 ML API 的产品本身有很多门道，大多数人没有意识到，因为他们无脑地追随 MAU、月活用户之类的东西的梯度。</span>  
> *There's a lot to the product of an ML API that most people don't realize because they mindlessly follow the gradient of things like MAUs, monthly active users.*  
> <span class="qm">—— Diogo Almeida · [52:13]</span> ^q33

> <span class="qz">实际上，RLHF 和 RLVR 极大地破坏了模型的校准，因为要想把字符串输出好，你实际上需要极度过度自信。</span>  
> *Actually, RLHF and RLVR destroy the calibration of the models immensely because in order to output strings well, you actually need extreme overconfidence.*  
> <span class="qm">—— Diogo Almeida · [56:42]</span> ^q34

> <span class="qz">它并不像其他模型那样处于收益递减的极端平台期。</span>  
> *And it is not in the extreme plateau of diminishing returns like other models are.*  
> <span class="qm">—— Diogo Almeida · [69:10]</span> ^q35

> <span class="qz">我的猜测是，当他们最终把它放进分发中时，就发生了这种情况，因为你优化什么就会得到什么。</span>  
> *My guess is this is what happened when they finally put it in distribution because you get what you optimize for.*  
> <span class="qm">—— Diogo Almeida · [70:48]</span> ^q36

> <span class="qz">如果你的系统消息里有你整套业务算法，而逻辑却运行在别人的服务器上，这是很奇怪的。</span>  
> *It's weird for the logic to be running on someone else's server if your system message has your whole business algorithm on it.*  
> <span class="qm">—— Diogo Almeida · [74:03]</span> ^q37

> <span class="qz">而我愿意这样想：总有一天智能会像数据库一样，当你在代码中需要智能时就直接调用它。</span>  
> *And I like to think of it as like one day intelligence will be like databases where you just call it when you need it, when you need intelligence within your code.*  
> <span class="qm">—— Diogo Almeida · [74:25]</span> ^q38

> <span class="qz">KVCache 有点像到处使用全局变量，但如果你能对自己的状态聪明一些呢？</span>  
> *The KVCache is a little bit similar to having global variables everywhere, but what if you could be smart about your state?*  
> <span class="qm">—— Diogo Almeida · [80:48]</span> ^q39

> <span class="qz">慢慢地加入越来越多的逻辑，因为要在像 Claude Codes 和 Codexes 这样的东西里添加额外的 harness 逻辑非常困难，因为它们的核心循环就是一个 while 循环。</span>  
> *That slowly add more and more logic because it's very hard to add additional harness logic into like the Claude codes and codexes because their core loop is just a while loop.*  
> <span class="qm">—— Diogo Almeida · [82:37]</span> ^q40

> <span class="qz">而且待在轨道上是一个特性，你知道的，你不会想去一个没有轨道的游乐园，或者至少没有轨道、安全带和所有那些东西你就玩不了最好玩的项目，对吧？</span>  
> *And it is a feature to be on the rails, you know, like you don't want to go an amusement park that doesn't have its rails, or at least you can't do the most fun stuff without like the rails and the seatbelts and all of that, right?*  
> <span class="qm">—— Diogo Almeida · [86:24]</span> ^q41

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-28-a16z-ai-can-write-code-why-isnt-software-bett|AI 这么聪明,自动化去哪儿了?Jev 把智能装进软件本身]]<span class="pd-rz">同嘉宾:Diogo Almeida · 同公司:TypeSafe、OpenAI · 同概念:Jev、RLHF、分类器 (classifier)、可靠性 (reliability)、Claude Code</span>
- [[2026-08-29-twentyvc-20vc-is-anthropic-s-coding-business-wort|最便宜的模型反而是最便宜的：Factory CTO 谈 AI 定价陷阱]]<span class="pd-rz">同公司:OpenAI、Anthropic · 同概念:harness、后训练 (post-training)、智能体 (agent)</span>
- [[2026-10-05-a16z-the-top-100-consumer-ai-apps-whos-actual|一半美国人在用 AI，只有 4.5% 在付钱：消费级 AI 的钱到底在哪]]<span class="pd-rz">同公司:OpenAI、Anthropic · 同概念:OpenClaw、智能体 (agent)、ChatGPT</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-21-latent-jev|Jev 背后的人:Diogo 谈为什么 AI 应该像数据库而不是同事]]<span class="pd-rz">同嘉宾:Diogo Almeida · 同公司:OpenAI、TypeSafe · 同概念:Jev、RLCD、RLHF、RLVR、校准 (calibration)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:OpenAI、Anthropic · 同概念:Claude Code、智能体 (agent)、后训练 (post-training)</span>
- [[2026-07-30-cogrev-is-offense-or-defense-dominant-far-ai-s|AI 安全排行榜：谁扛住了越狱，谁没有]]<span class="pd-rz">同公司:OpenAI、Anthropic · 同概念:后训练 (post-training)、智能体 (agent)</span>

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
