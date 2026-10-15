---
title: "95%爱因斯坦，5%憨豆先生：AI为什么还不能放心自动化"
podcast: The MAD Podcast
date: 2026-10-16
source_url: undefined
duration: "67:35"
type: episode
cover: "#64748b"
image: "/covers/2026-10-15-mad-95-einstein--5-mr--bean-jevs-creator-on.jpg"
description: TypeSafe 创始人 Diogo Almeida 讲解他创造的模型 JEV、RLHF 的历史与缺陷，以及为什么可靠性才是 AI 落地的关键。
host: "[[Matt Turk]]"
cohosts: ["[[Diogo Almeida]]"]
companies: ["[[TypeSafe]]", "[[OpenAI]]"]
concepts: ["[[Jev]]", "[[机器原生 AI]]", "[[分类器]]", "[[System 1 模型]]", "[[RLHF]]", "[[RLVR]]", "[[RLCD]]", "[[基准测试]]", "[[ChatGPT]]", "[[RSI]]", "[[AI 寒冬]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/covers/2026-10-15-mad-95-einstein--5-mr--bean-jevs-creator-on.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-15-mad-95-einstein--5-mr--bean-jevs-creator-on#post","headline":"95%爱因斯坦，5%憨豆先生：AI为什么还不能放心自动化","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-15-mad-95-einstein--5-mr--bean-jevs-creator-on","mainEntityOfPage":"https://talk.solomind.cc/2026-10-15-mad-95-einstein--5-mr--bean-jevs-creator-on","description":"TypeSafe 创始人 Diogo Almeida 讲解他创造的模型 JEV、RLHF 的历史与缺陷，以及为什么可靠性才是 AI 落地的关键。","datePublished":"2026-10-16","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-10-15-mad-95-einstein--5-mr--bean-jevs-creator-on.jpg","about":[{"@type":"Person","name":"Matt Turk"},{"@type":"Person","name":"Diogo Almeida"},{"@type":"Organization","name":"TypeSafe"},{"@type":"Organization","name":"OpenAI"},{"@type":"Thing","name":"Jev"},{"@type":"Thing","name":"机器原生 AI (machine-native AI)"},{"@type":"Thing","name":"分类器 (classifier)"},{"@type":"Thing","name":"System 1 模型 (System 1)"},{"@type":"Thing","name":"RLHF"},{"@type":"Thing","name":"RLVR"},{"@type":"Thing","name":"RLCD"},{"@type":"Thing","name":"基准测试 (benchmarks)"},{"@type":"Thing","name":"ChatGPT"},{"@type":"Thing","name":"RSI"},{"@type":"Thing","name":"AI 寒冬 (AI winter)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"95%爱因斯坦，5%憨豆先生：AI为什么还不能放心自动化","item":"https://talk.solomind.cc/2026-10-15-mad-95-einstein--5-mr--bean-jevs-creator-on"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>95%爱因斯坦，5%憨豆先生：AI为什么还不能放心自动化</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 95%爱因斯坦，5%憨豆先生：AI为什么还不能放心自动化

<div class="pd-byl"><b>Diogo Almeida</b> · TypeSafe 创始人 · 2026-10-16</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-15-mad-95-einstein--5-mr--bean-jevs-creator-on.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们去年就可能已经实现 AGI 了。</div><div class="a">— Diogo Almeida <button class="pd-ts" data-t="05:51" data-who="Diogo Almeida" data-en="We could have had AGI last year." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Matt Turk]] · [[Diogo Almeida]]
>
> **公司** [[TypeSafe]] · [[OpenAI]]
>
> **概念** [[Jev]] · [[机器原生 AI]] · [[分类器]] · [[System 1 模型]] · [[RLHF]] · [[RLVR]] · [[RLCD]] · [[基准测试]] · [[ChatGPT]] · [[RSI]] · [[AI 寒冬]]

一个月前，几乎没人听说过 [[Jev|JEV]]。发布三周后，它的宣传片播放量已达数千万，公司随即完成了一轮大规模融资，估值飙升。

JEV 是一种全新的模型，连不少业内人士也说不清它到底是什么。

这次采访里，创始人 [[Diogo Almeida|Diogo Almeida]]——[[RLHF|RLHF]] 技术的共同发明人之一、[[OpenAI|OpenAI]] 前研究员——用大白话讲清了它。

## AI 看起来很聪明，为什么自动化还是做不成？

Diogo 对现状的判断很尖刻：AI「不可思议，同时又不可思议地令人失望」。

他形容今天的模型是 95% 的爱因斯坦加 5% 的憨豆先生——问题是它不会告诉你现在处于哪 5%，那你敢把什么事交给它全自动处理？<button class="pd-ts" data-t="00:22" data-who="嘉宾" data-en="I literally thought it would take a week. You can now express things that you couldn't express in software before. I think that the future will be unbelievably sci-fi." aria-label="回原文"></button>

他的证据很日常：邮件日程助理这件看起来 LLM 理应解决的小事，至今没有真正被解决。

用大模型的方案，是把你的偏好写成一大段自然语言指令。模型写出来的邮件永远像模像样，但会犯细微的判断错误。

你只能不停往指令里加补丁：投资人这样处理、销售邮件那样处理……复杂度一高，错误率也跟着高。

最后出一次错——比如漏掉一位重要投资人的会面——你就只能把整个系统拆掉，换回人类助理。<button class="pd-ts" data-t="18:04" data-who="嘉宾" data-en="So LLMs, to my understanding, still have not solved this problem. I don't know if anyone has solved this with a JEV-like system yet, but I can compare and contrast the differences of it." aria-label="回原文"></button>

## JEV 到底是什么：把智能变成“聪明的 if 语句”

**JEV 不输出文字，而是输出概率**。你问“这封邮件紧急吗？”它返回一个分数，比如 0.85。你的程序设定：高于 0.9 就触发某个动作。

文字生成这一最慢、最贵的环节被整个砍掉了，所以它又快又便宜。

Diogo 更愿意叫它“[[机器原生 AI|机器原生 AI]]”：不是聊天框旁边那个主角光环的助手，而是能嵌进软件内部的智能。

软件的强大，来自把可靠的小组件层层组合起来。

JEV 输出概率、可以被精确测量和调阈值，就像代码里的轨道，保证系统不会跑偏。<button class="pd-ts" data-t="19:39" data-who="嘉宾" data-en="And that is what combining, like, you know, System 1 models with code will enable you to do. Because code is kind of like, you know, the roller coaster tracks. You don't go off the rails." aria-label="回原文"></button>

概率输出还有个实际好处：不同公司对错误的容忍度不同。迪士尼对内容审核的容忍度，和做角色扮演的 Character AI 完全不同。

把分数交给开发者，让他们自己定阈值，比模型替你做非黑即白的决定强得多。<button class="pd-ts" data-t="23:20" data-who="嘉宾" data-en="It doesn't make sense to just have a discrete decision. The most powerful way to empower developers is to give them back as much information as you can so they can then choose for their application what is the threshold." aria-label="回原文"></button>

## “只是个分类器”？他认为这是夸奖

有人贬低 JEV“不过是个[[分类器|分类器]]”。Diogo 的回应是：**分类器不是过时的老技术，而是一种接口**——把智能装进软件分支里的形状。

Facebook、TikTok、Google 的核心都是分类器。而且通用分类器是“AI 完全”问题：如果一个分类器做到完美，它几乎能推出任何能力。<button class="pd-ts" data-t="46:37" data-who="嘉宾" data-en="In what way, and I know you've embraced the fact that you're in some ways a classifier, so in what way are you a classifier and in what way do people that say that you're a classifier miss the entire point?" aria-label="回原文"></button>

> 【背景】“AI 完全”指难度等同于实现通用人工智能的问题。

## 他发明了 RLHF，现在却指它是问题根源

Diogo 2020 年底在 OpenAI 参与 RLHF（基于人类反馈的强化学习）的研发。他承认 RLHF 成就了 [[ChatGPT|ChatGPT]]，但指出它的本质是“让模型擅长聊天、讨人喜欢”。

代价是：模型变得谄媚、风格重复、不敢说“不知道”，而且在判断上比预训练模型更笨。

更糟的是，它大幅抬高了世人对 AI 的预期——大家觉得什么都能自动化了，实际上并没有。<button class="pd-ts" data-t="34:00" data-who="嘉宾" data-en="And that decoupling is, I think, quite harmful to the world. And that to me was my biggest worry here. So like, you know, no one, you know, like the expectations for pre-trained models were very different, but because RLHF models are so pleasing to humans and they seem so smart, it makes people think like, holy smokes, a lot of stuff can be automated." aria-label="回原文"></button>

后来的 [[RLVR|RLVR]]（基于可验证奖励的强化学习）让模型在数学和编程上突飞猛进，刷爆各种测试榜单。

但 Diogo 说，这也没改变自动化的现状，因为现实中的决策不是能简单打分的数学题。<button class="pd-ts" data-t="36:51" data-who="嘉宾" data-en="But I just worry about the lack of automation and empirically RLVR hasn't really changed automation. Yeah. So RLVR doesn't help us in the problem we're discussing because it focuses on rewarding the final solution." aria-label="回原文"></button>

所以 [[TypeSafe|TypeSafe]] 自己发明了新的一整套训练方法和数据——这些数据在世界上原本不存在，必须自建。

他强调，**最大的突破从来不是某个算法，而是找到正确的任务本身**：ChatGPT 之所以是飞跃，是因为定义了“指令遵循的聊天”这个任务。<button class="pd-ts" data-t="43:42" data-who="嘉宾" data-en="So for RLHF is, to me, a task. Making models good at instruction following in chat is a task itself. It has its own shape of data, its own algorithms, its own compute, etc." aria-label="回原文"></button>

## 三周内被全行业模仿，他在乎吗？

Cloudflare、Databricks、微软、OpenAI 都在几周内推出了类似产品。

Diogo 说，他当初启动这个项目时也以为一周就能做完，第一周确实做出了界面很像的东西——但蠢得令人尴尬，根本不健壮。

他猜测这些模仿者“在可靠性上落后我们好几年”，但想先实际测一测再下结论。<button class="pd-ts" data-t="54:00" data-who="嘉宾" data-en="Like, I don't want to punch down too much, but I will, like, describe my take of things. When I first started this project, I literally thought it would take a week." aria-label="回原文"></button>

他还批评[[基准测试|基准测试]]“毫无用处”，最伤害的恰恰是那些没时间亲自试用的用户。

唯一让他网开一面的是 OpenAI 的 Decision API，因为它没附基准分数。<button class="pd-ts" data-t="58:03" data-who="嘉宾" data-en="And actually, I do want to shout out OpenAI's Decision API. For better or for worse, they did not include benchmarks, so they are a lot better than everyone else in my books." aria-label="回原文"></button>

## 不是造上帝，是造产品

关于未来，Diogo 持有两个不太主流的判断。

第一，他不相信递归自我改进（AI 自己改进 AI）正在发生——他见过神经网络架构搜索时代一模一样的狂热和一模一样的退场，现实世界有收益递减规律。<button class="pd-ts" data-t="63:33" data-who="嘉宾" data-en="On the RSI comment, I think I've just been in the field long enough to see this dance happen many, many times. People see small percentage gains and then they extrapolate it to like the absolute moon when the reality is Amdahl's Law occurs." aria-label="回原文"></button>

第二，他不再担心 [[AI 寒冬|AI 寒冬]]会因“AI 在自动化上毫无用处”而发生——因为他相信 JEV 这类模型会改变这一点。

聊天机器人让人觉得神奇，可奇怪的是它们对世界的改变如此之小：

每年都有知名公司尝试用聊天机器人自动化得来速点餐然后失败。这才是他要解决的真问题。<button class="pd-ts" data-t="65:48" data-who="嘉宾" data-en="Like chatbots are kind of feel magical and it's kind of weird how little they've changed the world. So you'd expect, you know, if you bottled up this intelligence and made it super cheap, you could put it everywhere." aria-label="回原文"></button>

公司 T 恤上印着他们的口号：造产品，不造上帝。<button class="pd-ts" data-t="48:45" data-who="嘉宾" data-en="And to the God point, you have like this awesome saying, which was actually also on the t-shirt of your launch video saying, prod, not God, which… We're building prod, not God." aria-label="回原文"></button>

## 本集带走

- AI 强在直觉式判断（[[System 1 模型|系统 1]]），但不可靠的 5% 使它难以自动化任何事
- JEV 砍掉文字生成，直接输出概率，快而便宜，可精确控制阈值，能嵌进软件
- RLHF 让模型讨人喜欢，但也带来谄媚和不可靠，抬高了世人对自动化的预期
- 最大突破来自定义对任务，而非算法；模仿者拿到了接口，没拿到可靠性
- Diogo 不信递归自我改进，但相信“可靠的智能无处不在”会让未来非常科幻

<div class="pd-sec pd-sec-q">全部金句 <span>14 条</span></div>

> <span class="qz">我们去年就可能已经实现 AGI 了。</span>  
> *We could have had AGI last year.*  
> <span class="qm">—— Diogo Almeida · [05:51]</span> ^q1

> <span class="qz">AI 令人惊叹，同时也令人极其失望。</span>  
> *AI is incredible and also incredibly underwhelming.*  
> <span class="qm">—— Diogo Almeida · [04:44]</span> ^q2

> <span class="qz">第一，我不觉得我们懂什么营销。</span>  
> *Number one, I don't think we know shit about marketing.*  
> <span class="qm">—— Diogo Almeida · [07:19]</span> ^q3

> <span class="qz">产品才是关键。融资往往就像一场自我游戏。</span>  
> *The product is the thing. The fundraising is tends to be like an ego game.*  
> <span class="qm">—— Diogo Almeida · [08:10]</span> ^q4

> <span class="qz">而我的论点是，AI 就是擅长系统 1，而这本身就极其有价值。</span>  
> *And my claim is that AI is just good at System 1, and that is extremely valuable on its own.*  
> <span class="qm">—— Diogo Almeida · [12:06]</span> ^q5

> <span class="qz">据我所知，我们离解决系统 2 的参差不齐还差得很远。</span>  
> *And as far as I can tell, we have not come even close to solving the jaggedness of System 2.*  
> <span class="qm">—— Diogo Almeida · [12:12]</span> ^q6

> <span class="qz">随着复杂度上升，错误率会变得越来越高越来越高，因为你只是在祈祷，模型，请别犯那些错误。</span>  
> *And as the complexity rises, the error rates get higher and higher and higher because you're just praying, model, please don't make those mistakes.*  
> <span class="qm">—— Diogo Almeida · [17:32]</span> ^q7

> <span class="qz">它只是智能的另一种形状。</span>  
> *It's just a different shape of intelligence.*  
> <span class="qm">—— Diogo Almeida · [26:39]</span> ^q8

> <span class="qz">因为模型被训练成取悦人类并在这一过程中听起来自信，作为 RLHF 流程的一部分，这就是为什么你会遇到你提到过的那些问题，比如谄媚、过度拒绝。</span>  
> *So because the models were trained to please humans and sound confident as part of that process of our LHF, then that's why you end up with issues like sycophancy over refusal that you alluded to.*  
> <span class="qm">—— Matt Turk · [31:35]</span> ^q9

> <span class="qz">RLVR 碾压每一个基准测试，因为从构造上说，RLVR 差不多就是你想碾压基准测试时任务本身的形状。</span>  
> *Like RLVR crushes every benchmark because by construction RLVR is kind of the shape of the task if you wanted to crush benchmarks.*  
> <span class="qm">—— Diogo Almeida · [36:18]</span> ^q10

> <span class="qz">我喜欢的描述方式是 95% 的爱因斯坦，5% 的憨豆先生。而如果它不告诉你在什么时候是憨豆先生，那你怎么去自动化任何东西？</span>  
> *The way I like to describe it is 95% Einstein, 5% Mr. Bean. And if it doesn't tell you when it's the Mr. Bean, then how are you going to automate anything?*  
> <span class="qm">—— Diogo Almeida · [37:22]</span> ^q11

> <span class="qz">但为了知道数据应该长什么样，你首先需要任务。</span>  
> *But in order to even know what the data should look like, you need the task.*  
> <span class="qm">—— Diogo Almeida · [43:09]</span> ^q12

> <span class="qz">而且说实话，我认为预训练就是一个浪费资源的巨大垃圾堆火灾。</span>  
> *And honestly, I think pre-training is a giant dumpster fire of wasting resources.*  
> <span class="qm">—— Diogo Almeida · [45:48]</span> ^q13

> <span class="qz">他们一直试图在数据中心里建造他们的神，而不是解决真实的问题、观察真实的世界，看看真实的自动化到底完成了多少。</span>  
> *And they keep trying to build their god in a data center rather than solving real problems and see the real world and see how little automation truly is getting done.*  
> <span class="qm">—— Diogo Almeida · [48:27]</span> ^q14

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-06-twiml-why-jev-is-changing-how-we-build-with-ai|AI 为什么这么聪明，却干不了保险核保？]]<span class="pd-rz">同嘉宾:Diogo Almeida · 同公司:OpenAI、TypeSafe · 同概念:JEV、RLCD、RLHF、RLVR、分类器 (classifier)、ChatGPT</span>
- [[2026-09-28-a16z-ai-can-write-code-why-isnt-software-bett|AI 这么聪明,自动化去哪儿了?Jev 把智能装进软件本身]]<span class="pd-rz">同嘉宾:Diogo Almeida · 同公司:TypeSafe、OpenAI · 同概念:JEV、RLHF、分类器 (classifier)、ChatGPT</span>
- [[2026-09-30-howiai-openai-dev-day-2026-the-releases-that-ac|OpenAI Dev Day 全复盘:从智能体 Dot 到 8 倍速 Astra]]<span class="pd-rz">同公司:OpenAI · 同概念:ChatGPT、JEV</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-21-latent-jev|Jev 背后的人:Diogo 谈为什么 AI 应该像数据库而不是同事]]<span class="pd-rz">同嘉宾:Diogo Almeida · 同公司:OpenAI、TypeSafe · 同概念:JEV、RLCD、RLHF、RLVR、系统 1 (System 1)</span>
- [[2025-06-22-lennys-the-quiet-architect-peter-deng|Peter Deng：产品不必是最重要的东西]]<span class="pd-rz">同公司:OpenAI · 同概念:ChatGPT</span>
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当写代码变便宜,OpenAI Codex负责人说「品味」成了最贵的资源]]<span class="pd-rz">同公司:OpenAI · 同概念:ChatGPT</span>

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
