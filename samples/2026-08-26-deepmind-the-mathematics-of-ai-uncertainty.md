---
title: AI 最缺的不是智商，是「知道自己不知道」
podcast: "Google DeepMind: The Podcast"
date: 2026-08-27
source_url: undefined
duration: "44:35"
type: episode
cover: "#64748b"
image: "/covers/2026-08-26-deepmind-the-mathematics-of-ai-uncertainty.jpg"
description: Zubin Gharemani（剑桥大学教授、Google DeepMind Frontier AI 联合负责人）认为，真正智能的系统必须能表示和更新自身的不确定性，而不是假装无所不知。
host: "[[Zubin Gharemani]]"
companies: ["[[Google DeepMind]]"]
concepts: ["[[不确定性]]", "[[贝叶斯规则]]", "[[大语言模型]]", "[[语义熵]]", "[[GenCast]]", "[[AlphaFold]]"]
category: AI 安全
tags:
  - AI 安全
socialImage: "https://talk.solomind.cc/covers/2026-08-26-deepmind-the-mathematics-of-ai-uncertainty.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-26-deepmind-the-mathematics-of-ai-uncertainty#post","headline":"AI 最缺的不是智商，是「知道自己不知道」","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-26-deepmind-the-mathematics-of-ai-uncertainty","mainEntityOfPage":"https://talk.solomind.cc/2026-08-26-deepmind-the-mathematics-of-ai-uncertainty","description":"Zubin Gharemani（剑桥大学教授、Google DeepMind Frontier AI 联合负责人）认为，真正智能的系统必须能表示和更新自身的不确定性，而不是假装无所不知。","datePublished":"2026-08-27","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-08-26-deepmind-the-mathematics-of-ai-uncertainty.jpg","about":[{"@type":"Person","name":"Zubin Gharemani"},{"@type":"Organization","name":"Google DeepMind"},{"@type":"Thing","name":"不确定性 (uncertainty)"},{"@type":"Thing","name":"贝叶斯规则 (Bayes' rule)"},{"@type":"Thing","name":"大语言模型 (large language model)"},{"@type":"Thing","name":"语义熵 (semantic entropy)"},{"@type":"Thing","name":"GenCast"},{"@type":"Thing","name":"AlphaFold"}],"articleSection":"AI 安全"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 安全","item":"https://talk.solomind.cc/tags/AI 安全"},{"@type":"ListItem","position":3,"name":"AI 最缺的不是智商，是「知道自己不知道」","item":"https://talk.solomind.cc/2026-08-26-deepmind-the-mathematics-of-ai-uncertainty"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 最缺的不是智商，是「知道自己不知道」</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 最缺的不是智商，是「知道自己不知道」

<div class="pd-byl"><b>Zubin Gharemani</b> · 2026-08-27</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-26-deepmind-the-mathematics-of-ai-uncertainty.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但缺失的是，我们并没有真正做到我所说的，即对概率的仔细表示。我们实际上有点希望模型能很好地表示概率，因为我们在足够多的数据上训练了它们。</div><div class="a">— Zubin Gharemani <button class="pd-ts" data-t="15:20" data-who="Zubin Gharemani" data-en="But what's missing is we're not really doing what I said, which is the careful representation of probabilities. We're actually sort of hoping that the models represent probabilities okay because we've trained them on enough data." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Zubin Gharemani]]
>
> **公司** [[Google DeepMind]]
>
> **概念** [[不确定性]] · [[贝叶斯规则]] · [[大语言模型]] · [[语义熵]] · [[GenCast]] · [[AlphaFold]]

现在的 AI 最大的问题不是答错，而是答错时跟答对一样自信——你反驳它一句，它马上改口说「对不起，我错了」，这说明它根本不是在推理，只是在模仿推理的语气 <button class="pd-ts" data-t="20:30" data-who="Unknown" data-en="It's sort of faking it, right? And you can tell it's faking it because then if you push back and you say something silly like, no, I think you're wrong. Then it might respond, oh, sorry, yes, I was wrong, right?" aria-label="回原文"></button>。[[Zubin Gharemani|Zubin Gharemani]] 过去 30 年一直在研究怎么让机器拥有「知道自己不知道」的能力，他认为这不仅是人类特质，而是任何智能系统在现实世界做决策的基本前提 <button class="pd-ts" data-t="01:18" data-who="Unknown" data-en="Why? Well, you know, if you think about intelligence, One of the most important parts of intelligence is decision making." aria-label="回原文"></button>。

## 为什么不确定性是智能的刚需

从细菌到人类到机器人，所有智能体都在[[不确定性|不确定性]]下做决策——感官有限、无法预测未来，所以任何智能系统必须能做三件事：表示不确定性、根据新证据更新不确定性、然后在不确定性下做出好的决策 <button class="pd-ts" data-t="01:55" data-who="Unknown" data-en="We can't predict the future. And so fundamentally, to build an intelligent system, you need a system that can represent uncertainty, that can update its uncertainty, and then can use that to make good decisions under uncertainty." aria-label="回原文"></button>。不确定性分两种：一种是世界本身的随机性（比如行人往哪边转），另一种是你遇到了从没见过的场景（比如冰雹天马突然跳到自动驾驶车前面）<button class="pd-ts" data-t="02:14" data-who="Unknown" data-en="Because actually, I mean, there's two different types of uncertainty, I guess, right? There's the uncertainty of just the inherent randomness of the world. There's a pedestrian in a normal, typical street, and you just don't know which way they're going to turn." aria-label="回原文"></button>。后一种情况下，系统需要意识到「这个情况我没见过」，然后做出保守决策比如减速——但现在的 AI 做不到这一点 <button class="pd-ts" data-t="03:17" data-who="Unknown" data-en="A certain self-awareness, if we can use those terms, a self-awareness about its uncertainty. So it needs to be able to know the situation that it's in is something that is unusual or it hasn't seen before." aria-label="回原文"></button>。

## 贝叶斯思维：用概率把「不知道」讲清楚

Zubin 的核心框架来自[[贝叶斯规则|贝叶斯规则]]（一种用概率来更新信念的数学方法）：你先有先验信念（比如侦探案里觉得管家最可疑），然后观察到新证据（凶器在食品储藏室被发现），把先验乘以似然再归一化，就得到后验信念——你的知识状态更新了 <button class="pd-ts" data-t="16:10" data-who="Unknown" data-en="Just explain for anybody who hasn't come across this before, just explain to us what that actually means. Yeah, so Bayes' rules is fascinating and very simple concept from probability theory." aria-label="回原文"></button>。每获得一条新证据，当前的后验就变成新的先验，循环往复。

这个过程既描述了人类感知（听到树叶响，结合「我在哥斯达黎加」的先验，判断可能是美洲豹），也描述了学习本身（模型参数从不确定到逐渐确定）<button class="pd-ts" data-t="18:05" data-who="Unknown" data-en="And through that application of Bayes' rule, we can model both perception, like I open my eyes, I see something, then I see more things, and I know it's not a jaguar that's following me in Costa Rica, but you can also model what learning is." aria-label="回原文"></button>。人类在意识层面其实很不擅长估计概率（卡尼曼和特沃斯基早就证明了），但在感知层面——那些关乎生存的无意识判断——我们天然在做贝叶斯推断 <button class="pd-ts" data-t="06:28" data-who="Unknown" data-en="And that process of combining information has been modeled by cognitive scientists and psychologists and neuroscientists through the language of probabilistic inference, basically." aria-label="回原文"></button>。

## 大语言模型为什么「装」自信

[[大语言模型|大语言模型]]本质上在做下一个 token 的概率预测，概率确实在它内部，但它是「隐式」散布在数十亿参数的激活值里的，没有一个显式的「我对这句话有多大把握」的表示 <button class="pd-ts" data-t="15:35" data-who="Unknown" data-en="But not thinking about it in an explicit way. Yeah, if you look in a giant neural network, you can't really find the explicit representation of, say, the probability that, you know, it thinks something or other, right?" aria-label="回原文"></button>。训练范式也没把「校准置信度」当优先事项——训练数据里混着无数不同人的不同信念，模型学到的是一锅大杂烩 <button class="pd-ts" data-t="21:10" data-who="Unknown" data-en="Why do they struggle with that so much? They struggle because the paradigm for training them hasn't prioritized that." aria-label="回原文"></button>。所以你问它「你多确定」，它回答你时其实还是在做 next token prediction，并不是在计算自己的置信度 <button class="pd-ts" data-t="20:09" data-who="Unknown" data-en="And it might say something back, but it's really doing next token prediction. It doesn't have an explicit representation of how confident it is in that statement." aria-label="回原文"></button>。

有一个方向是从模型内部提取「[[语义熵|语义熵]]」——生成 token 之前的概率分布，熵低说明确定（比如「埃菲尔铁塔在巴黎」），熵高说明不确定 <button class="pd-ts" data-t="23:23" data-who="Unknown" data-en="How might that work? I think you can take the internals of a particular model and try to infer from that its degree of belief. So before it answers, before it produces a token in a large language model, you actually have a probability distribution over all possible next tokens." aria-label="回原文"></button>。但 Zubin 认为这本质上还是在靠数据频率「装」，就像通过给计算器看大量加法例子来造计算器，而不是让它真正做运算——你希望 AI 真正推理世界，而不是在训练数据里查频率 <button class="pd-ts" data-t="25:05" data-who="Unknown" data-en="I'll give you the analogy of a calculator. It's like trying to build the calculator just by showing it examples of addition and multiplication. But imagine you never show it a particular number, then it might not generalize that particular number." aria-label="回原文"></button>。

## 真正做到的案例：天气预报和 AlphaFold

[[Google DeepMind|Google DeepMind]] 的 [[GenCast|GenCast]] 天气预报模型是一个正面例子。它用扩散模型（一种在时间维度上操纵概率分布的方法）生成预报集合，不是跑一次说「明天晴天」，而是跑很多次得到一条概率分布曲线——比如预测飓风路径，给你的是所有可能路径的分布，几小时后拿到新观测数据就更新这个分布 <button class="pd-ts" data-t="26:45" data-who="Unknown" data-en="Tell me a bit about that. Yeah, so we've developed a whole series of state-of-the-art weather forecasting models at Google DeepMind. And if you look at the GenCast model, sort of very recent model, one of the key features it has, it can predict sort of weather over 15 days." aria-label="回原文"></button>。

[[AlphaFold|AlphaFold]] 也类似：蛋白质预测结果按模型的确信程度做颜色编码，物理学上本身就摇摆不定的区域和模型预测不确定的区域都显式标出来 <button class="pd-ts" data-t="30:15" data-who="Unknown" data-en="So that we can get better calibrated forecasts. I think the other example that really manages to get this uncertainty idea right is AlphaFold, where the protein prediction is color-coded by how sure the model is that that's the correct folding, right?" aria-label="回原文"></button>。这两个例子的反直觉之处在于：你给系统加入了不确定性表示，预测反而更准确了 <button class="pd-ts" data-t="29:20" data-who="Unknown" data-en="Thank you for joining us. I think there's something quite delightfully counterintuitive about that, that you add in uncertainty to the system and it makes the predictions more accurate." aria-label="回原文"></button>。

## 为什么不用贝叶斯？因为算不动

贝叶斯方法的「魔法」在于：一行公式同时解决持续学习（不会灾难性遗忘，因为新知识是跟旧知识合并更新而不是覆盖）和数据效率问题 <button class="pd-ts" data-t="37:57" data-who="Unknown" data-en="Which absolutely links back to the idea of Bayesian thinking that we were talking about earlier, because the reason why humans, animals are able to do that is because we have this updating system in our minds of incorporating evidence with existing knowledge." aria-label="回原文"></button>。但诅咒也在此——精确贝叶斯更新是计算上的难题，理论上可能要等数百万年才能出结果 <button class="pd-ts" data-t="25:34" data-who="Unknown" data-en="I mean, what is it that makes it so hard to do? It is genuinely hard because it's computationally hard. So essentially, I would argue we had all the ingredients of AI" aria-label="回原文"></button>。

80 年代人们因此放弃了这条路，转向纯数据驱动。Zubin 认为现在算力今非昔比（他本科时那台 65,000 个处理器的并行超级计算机，比不上现在口袋里的手机 <button class="pd-ts" data-t="41:43" data-who="Unknown" data-en="I think we can revisit some of these ideas with the compute power that we have now. You know, the giant state-of-the-art supercomputer, parallel connection machine computer that I used in my undergraduate years is actually slower than the Pixel phone that I have in my pocket." aria-label="回原文"></button>），可以重新审视这些想法，但怎么近似得又快又好，仍然是开放问题 <button class="pd-ts" data-t="41:37" data-who="Unknown" data-en="Yeah, yeah. I think we can revisit some of these ideas with the compute power that we have now. You know, the giant state-of-the-art supercomputer, parallel connection machine computer that I used in my undergraduate years is actually slower than the Pixel phone that I have in my pocket." aria-label="回原文"></button>。

## 规模派 vs 架构派

当前 AI 领域有两大阵营：一派认为只要更多数据、更多算力就能解决一切；另一派（包括 Zubin）认为真正智能需要架构创新，而不确定性是缺失的关键拼图 <button class="pd-ts" data-t="00:42" data-who="Unknown" data-en="Today, as a professor at Cambridge and co-lead of Frontier AI at Google DeepMind, Zubin finds himself at the heart of another interesting debate. On the one side are those who are hoping that pure scale will be the answer to ever-improving AI," aria-label="回原文"></button>。Zubin 不否认规模派有道理——模型在很多有用的事情上确实做得不错 <button class="pd-ts" data-t="35:39" data-who="Unknown" data-en="Yeah, I think that is a view that a lot of people have in the field. They're not completely wrong, just like I'm not completely right, in that the models are actually pretty good at a lot of useful things." aria-label="回原文"></button>。但问题出在长尾场景：当你把模型推到它没见过的角落，过度自信就会变成危险，尤其是自动驾驶、医疗诊断这类高后果决策场景 <button class="pd-ts" data-t="36:00" data-who="Unknown" data-en="The problem is that when you stretch them in the long tail of sort of unusual things, then you can uncover some gaps. And also, I think when the decisions, if you're just interacting with a chatbot, the decisions may not be so consequential, but if we're trying to build" aria-label="回原文"></button>。

> 【背景】Zubin Gharemani 的姓氏在转写稿中未完整出现，开头旁白念的是「Zubin Gharemani」，但正文全程被主持人称为「Stephen」——应为同一人，本集按转写稿称 Zubin / Stephen。他在 2015 年发表于 Nature 的论文与 Hinton 的深度学习 foundational papers 出现在同一期。

## 本集带走

- **不确定性不是弱点，是智能的前提**：任何在现实世界做决策的系统都必须能表示「我不知道」，否则就是带着绝对自信犯错。
- **贝叶斯更新的核心循环**：先验信念 → 观察证据 → 乘以似然 → 归一化得到后验 → 后验变新先验，循环往复。这个框架同时描述了感知和学习。
- **大语言模型的自信是「装的」**：它没有显式的置信度表示，问你「你确定吗」时还是在做 next token prediction，所以你一反驳它就改口。
- **语义熵是从内部读不确定性的一个方向，但有天花板**：它依赖训练数据中的频率信号，不是真正的推理。
- **天气预报和 AlphaFold 是已经落地的好例子**：用概率分布（集合预报、颜色编码）显式表达不确定性，结果反而更准。
- **贝叶斯方法的瓶颈是计算**：理论上完美，但精确计算不可行，80 年代因此被放弃；现在算力暴涨，怎么高效近似是关键开放问题。
- **长尾场景是试金石**：日常对话里过度自信只是烦人，在自动驾驶和医疗诊断里就是危险——这才是「知道自己不知道」真正不可替代的地方。

<div class="pd-sec">全部金句 <span>5 条</span></div>

> <span class="qz">但缺失的是，我们并没有真正做到我所说的，即对概率的仔细表示。我们实际上有点希望模型能很好地表示概率，因为我们在足够多的数据上训练了它们。</span>  
> *But what's missing is we're not really doing what I said, which is the careful representation of probabilities. We're actually sort of hoping that the models represent probabilities okay because we've trained them on enough data.*  
> <span class="qm">—— Zubin Gharemani · [15:20]</span> ^q1

> <span class="qz">这就像试图仅仅通过向它展示加法和乘法的例子来构建计算器。但想象一下你从未向它展示过一个特定的数字，那么它可能无法泛化那个特定的数字。而且你不想伪造一个计算器。你想要一个真正进行计算的计算器。</span>  
> *It's like trying to build the calculator just by showing it examples of addition and multiplication. But imagine you never show it a particular number, then it might not generalize that particular number. And you don't want to fake a calculator. You want a calculator that actually calculates.*  
> <span class="qm">—— Zubin Gharemani · [25:05]</span> ^q2

> <span class="qz">我认为这点非常令人愉悦地反直觉，你向系统加入了不确定性，而它让预测更准确。</span>  
> *I think there's something quite delightfully counterintuitive about that, that you add in uncertainty to the system and it makes the predictions more accurate.*  
> <span class="qm">—— SPEAKER_01 · [29:20]</span> ^q3

> <span class="qz">你知道，我在本科时使用的那个巨大的最先进的超级计算机，并行连接机器计算机，实际上比我口袋里的 Pixel 手机还要慢。</span>  
> *You know, the giant state-of-the-art supercomputer, parallel connection machine computer that I used in my undergraduate years is actually slower than the Pixel phone that I have in my pocket.*  
> <span class="qm">—— Zubin Gharemani · [41:43]</span> ^q4

> <span class="qz">对于我认为所有重要的问题，我宁愿拥有一个知道自己不知道的 AI 系统，也不愿拥有一个傲慢和过度自信的 AI 系统。</span>  
> *And for, I think, all problems that matter, I would rather have an AI system that knows when it doesn't know than an AI system that is arrogant and overconfident.*  
> <span class="qm">—— Zubin Gharemani · [43:41]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**换个口味**

- [[2026-08-01-yc-jeff-dean-the-1-rule-for-building-in-ai|Jeff Dean 谈 AI 原生时代的创业经：找零个正确的甜点]]<span class="pd-rz">同概念:AlphaFold</span>
- [[2026-08-08-bigtech-demis-steps-down-apple-s-memory-problem|巨头财报季:AI 军备竞赛下的供应链、会计戏法与路线分歧]]<span class="pd-rz">同公司:Google DeepMind</span>
- [[2026-07-29-trainingdata-building-the-automated-agi-lab-core-auto|Transformer 已见顶?OpenAI 与 Google 双雄离职造新架构]]<span class="pd-rz">同概念:transformer、持续学习 (continual learning)</span>

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
  // 故再兜一条 history.length>1(站内点进必有返回历史)。命中「直开」给 body 打 .pd-direct,CSS 切显隐。
  function direct(){
    var ref = document.referrer || '';
    var fromSite = (ref.indexOf(location.origin) === 0) || history.length > 1;
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
