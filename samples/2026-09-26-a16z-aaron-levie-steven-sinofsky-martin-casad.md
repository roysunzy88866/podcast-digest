---
title: 当AI agent满网跑，安全怎么办？三位老将吵了一期
podcast: The a16z Show
date: 2026-10-12
source_url: undefined
duration: "55:49"
type: episode
cover: "#64748b"
description: Box创始人Aaron Levie、前微软高管Steven Sinofsky与a16z合伙人Martin Casado激辩AI安全、监管与agent时代的权限重构。
host: "[[Martin Casado]]"
guests: ["[[Steven Sinofsky]]", "[[Aaron Levie]]"]
concepts: ["[[智能体]]", "[[智能体集群]]", "[[节奏控制]]", "[[X 风险]]", "[[GDPR]]", "[[多级安全]]", "[[概率化编程]]", "[[regulation]]"]
category: AI 安全
tags:
  - AI 安全
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-26-a16z-aaron-levie-steven-sinofsky-martin-casad#post","headline":"当AI agent满网跑，安全怎么办？三位老将吵了一期","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-26-a16z-aaron-levie-steven-sinofsky-martin-casad","mainEntityOfPage":"https://talk.solomind.cc/2026-09-26-a16z-aaron-levie-steven-sinofsky-martin-casad","description":"Box创始人Aaron Levie、前微软高管Steven Sinofsky与a16z合伙人Martin Casado激辩AI安全、监管与agent时代的权限重构。","datePublished":"2026-10-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Martin Casado"},{"@type":"Person","name":"Steven Sinofsky"},{"@type":"Person","name":"Aaron Levie"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体集群 (agent swarms)"},{"@type":"Thing","name":"节奏控制 (pacing)"},{"@type":"Thing","name":"X 风险 (X-risk)"},{"@type":"Thing","name":"GDPR"},{"@type":"Thing","name":"多级安全 (multi-layer security)"},{"@type":"Thing","name":"概率化编程 (probabilistic programming)"},{"@type":"Thing","name":"regulation"}],"articleSection":"AI 安全"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 安全","item":"https://talk.solomind.cc/tags/AI 安全"},{"@type":"ListItem","position":3,"name":"当AI agent满网跑，安全怎么办？三位老将吵了一期","item":"https://talk.solomind.cc/2026-09-26-a16z-aaron-levie-steven-sinofsky-martin-casad"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当AI agent满网跑，安全怎么办？三位老将吵了一期</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 当AI agent满网跑，安全怎么办？三位老将吵了一期

<div class="pd-byl"><b>Aaron Levie</b> · Box 创始人 · 2026-10-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-26-a16z-aaron-levie-steven-sinofsky-martin-casad.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">问题在于，欧洲将会在这方面领跑，因为他们没有什么可失去的。</div><div class="a">— Martin Casado <button class="pd-ts" data-t="00:47" data-who="Martin Casado" data-en="The problem is that Europe is going to lead with that because they have nothing to lose." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Steven Sinofsky]] · [[Aaron Levie]] · [[Martin Casado]]
>
> **概念** [[智能体]] · [[智能体集群]] · [[节奏控制]] · [[X 风险]] · [[GDPR]] · [[多级安全]] · [[概率化编程]] · [[regulation]]

有一篇谈AI安全的文章引发了科技圈一整轮争论。这期a16z播客把三个人拉到一起：[[Aaron Levie|Aaron Levie]]、[[Steven Sinofsky|Steven Sinofsky]]和[[Martin Casado|Martin Casado]]。三人共识不少，但吵得更凶。

核心分歧不在该不该做安全，而在怎么谈安全、该不该让政府插手。

## pacing是个伪命题？

Dario那篇文章的基本主张——更好的沙箱、更好的测试、更严格的安全治理——三位嘉宾其实都认同。

Aaron Levie说，任何前沿实验室都该用最安全的方式构建，没有企业信任，AI根本扩散不了 <button class="pd-ts" data-t="02:22" data-who="Aaron" data-en="Maybe I'll say one thing that we probably all agree with and then we can figure out where we maybe kind of fracture off. I think we would agree that any AI lab Right now at the frontier should be building in the safest way possible with the highest degree of governance and security and whatever your definition of alignment is." aria-label="回原文"></button>。

但Martin Casado有两个更尖锐的意见。

第一，**pacing（给AI发展定节奏）这个词本身站不住脚**。它和安全是两回事——你可以很慢地造核武器，慢不让人觉得安心 <button class="pd-ts" data-t="05:05" data-who="Martin" data-en="And then I have this quibble, but it really bothers me because I'm a pedant, which is, I think pacing is the wrong way to describe this. For one, it is orthogonal to security, right?" aria-label="回原文"></button>。

而且节奏相对于什么？实验室从来没公布过时间表，没有参照物就谈不上快慢。

Sinofsky补了一刀：这就像媒体报道苹果的iPhone延期——延期自什么？没人知道那产品存在 <button class="pd-ts" data-t="08:21" data-who="Steven" data-en="It also just seems disingenuous, too. It's complete nonsense. Like, you can't claim, this is like when the press reports on Apple's latest iPhone is late." aria-label="回原文"></button>。

第二，也是Martin最在意的：实验室嘴上说pacing，实际是全速奔跑——融了史上最多的钱，增长史上最快 <button class="pd-ts" data-t="08:58" data-who="Steven" data-en="I see. They've been at a dead run. They've raised more money than ever before." aria-label="回原文"></button>。这种言行不一，反而给了[[regulation|监管]]者借口。

## 10%灭绝概率是政治炸弹

播客里反复出现一个具体矛盾：有员工说AI有10%的概率导致人类灭绝，而Dario在电视采访里表示自己同意的比不同意多。

Martin的逻辑很直接：如果实验室内部最懂行的人真信这个，那答案只有一个——把技术收归国有，用核武器级别的管控 <button class="pd-ts" data-t="07:00" data-who="Martin" data-en="So if... A constituency within the labs that are the most knowledgeable people believe this stuff has existential risk, the answer is to nationalize it and actually put controls that we know that work, right?" aria-label="回原文"></button>。

历史上，银行、电力、生物安全四级实验室，凡是被视为关键基础设施的，最终都走向了实质上的国有化或极端监管。

而如果他们其实不信——Martin说私下沟通里，最清醒的人大多不信——那这就是个人力资源问题：

为了留住员工、安抚内部焦虑，就拿灭绝风险当筹码，去换取全国性的技术封锁，这个交换太荒唐了 <button class="pd-ts" data-t="07:22" data-who="Martin" data-en="Now, if they don't actually believe that, and in the private conversations I have, the most sensible people don't, it's a small fraction that do, this is an HR problem." aria-label="回原文"></button>。

Sinofsky补了句很妙的话：「文章很讲理，但氛围不对。」

你不能一边谈物种灭绝，一边拿出一份四平八稳的工程清单，两边人都会觉得你在敷衍 <button class="pd-ts" data-t="04:16" data-who="Steven" data-en="But it's a slowdown that obviously allows acceleration of your diffusion because you wouldn't be able to have any of the AI be diffused if nobody would trust using it." aria-label="回原文"></button>。

## 政府不是你许愿的池子

Sinofsky讲了一段亲身历史：Bill Gates跟Bill Clinton打高尔夫，回头微软照样被反垄断诉讼，Bill还纳闷——我这不就是该做的事吗？ <button class="pd-ts" data-t="19:30" data-who="Steven" data-en="Like, we had no idea what was happening to us. And there's, you know, there's Bill Gates playing golf with Bill Clinton, and then we get slapped with Andy Dreslau from his administration." aria-label="回原文"></button>。

科技行业一百多年来每轮技术浪潮都要重新学一遍这个教训：**你没法跟政府聊出一个你想要的监管结果**。

政府的产出永远是妥协，要么不够，要么过头，没有例外。他预测，下一届（2028年）大选将成为AI公投 <button class="pd-ts" data-t="12:19" data-who="Steven" data-en="Well, the next election will 100% be a referendum on AI. So, like, it has to happen that 2028 is, like, the AI election. And you can basically run on—the problem is, like, it's not obvious who would run on the pro-AI story because it's going to be too nebulous to tell that story." aria-label="回原文"></button>。

而麻烦在于，主张发展AI的一方处于守势——辩论词汇全是对方选的：pause、swarms、rogue（暂停、蜂群、失控），没有一个词是支持AI的人发明的 <button class="pd-ts" data-t="12:59" data-who="Steven" data-en="So, like, the whole debate is— It's pause, it's swarms, it's rogue. Every word has been chosen by the people who don't want to do AI." aria-label="回原文"></button>。

Martin最大的担忧很具体：欧洲会把[[GDPR|GDPR]]那套搬到AI上——每次AI接触一个第三方产品，都弹一个同意提示，像汽车里的安全气囊警告贴纸。

没人读，人人麻木，然后监管者说这还不够，再加强 <button class="pd-ts" data-t="41:41" data-who="Martin" data-en="Yeah. And... AI will be fine." aria-label="回原文"></button>。

而美国15年前放弃了科技反垄断的主导权，欧洲没什么可输的，就会抢先定规则 <button class="pd-ts" data-t="42:43" data-who="Martin" data-en="And unfortunately, because the U.S. about 15 years ago stopped leading in tech antitrust. The problem is that Europe is going to lead with that because they have nothing to lose." aria-label="回原文"></button>。

## 互联网的历史教了什么？

三人有一段共识性的回顾：

早期互联网病毒横行，已造成几百亿美元的经济损失，有的病毒搞掉了 10% 的互联网基础设施，医院都瘫痪过 <button class="pd-ts" data-t="23:44" data-who="" data-en="I think there's another problem, which is we're all trying to predict what's bad, which is not how we've normally done things. Like, by this time on the internet, we'd taken out like tens of billions of dollars of like economic, well, we've caused tens of billions of dollars of economic damage." aria-label="回原文"></button>。

Windows 95 装完盘就可能中蠕虫 <button class="pd-ts" data-t="24:07" data-who="" data-en="How do we, yeah, okay, okay, okay, okay. So we had, I mean, I remember a time you, like, I remember when you would buy your CD of Windows 95, and by the time it was done installing," aria-label="回原文"></button>，直到 2001 年你都无法联网装一台不被感染的 PC <button class="pd-ts" data-t="24:24" data-who="" data-en="This was the reality. The reality of the PC until 2001 was you could not install a PC connected to the network without getting infected. Viruses were everywhere." aria-label="回原文"></button>。按他们的说法，真的应该在 97 年左右就把互联网封掉 <button class="pd-ts" data-t="24:00" data-who="" data-en="We've had words that took out 10% of the infrastructure, the internet infrastructure, which was running critical infrastructure. We had hospitals go down. We really should have blocked the internet in like 97." aria-label="回原文"></button>。

Martin在斯坦福读博时发现实验室示波器变卡，一查网络流量——设备里跑着一个老版本Windows CE，被人入侵后拿来当成人网站服务器了 <button class="pd-ts" data-t="45:17" data-who="Martin" data-en="Like, I even remember, like, this is at Stanford during our PhD. I remember the oscilloscope was kind of janky. I'm like, what's going on with this oscilloscope?" aria-label="回原文"></button>。

那个年代翻开任何一块石头底下都有人入侵过什么东西，但最终大多是良性收场。

关键区别在于：**过去制定政策时，手里有一堆具体的损害数据**。而现在的AI监管是在预测尚未发生的坏事，这几乎做不好。

1986年的《计算机欺诈与滥用法》就是因为两伙黑客入侵了NASA和Livermore用的系统——一个黑客还住在Sinofsky宿舍里——花了两年半才通过，条款非常具体 <button class="pd-ts" data-t="25:54" data-who="Steven" data-en="Perfect, perfect point. Because if you look, in 1986, the Computer Crime and Fraud Act got signed. It was out of a very, very specific scenario, which was two groups of hackers broke into GTE TeleMail." aria-label="回原文"></button>。

今天需要的可能是这种基于事实模式的立法，而不是哲学层面的灭绝辩论。

## 真正的新风险：满网跑的agent

播客最有信息量的部分，是三人离开监管争论，谈具体的技术风险：**当AI agent开始在企业内部网络里活动，现有安全模型基本作废**。

原因是：过去信息安全能凑合，靠的是员工95%到99%的时间会做对的事，恶意员工万里挑一 <button class="pd-ts" data-t="35:47" data-who="Steven" data-en="Yeah, I mean, we, you kind of got by with, with information security, like, to some extent, on the fact that most people will do the right thing 95 to 99 percent of the time." aria-label="回原文"></button>。

而现在，「你的员工是一段软件」——是成千上万个不知疲倦、不会无聊、还会犯错的漫游无人机 <button class="pd-ts" data-t="34:39" data-who="Steven" data-en="Which I do think brings up a super interesting point, which I'm going to bridge, which is just that... I think the thing that people really aren't wrapping their heads around and are using the language that's really confusing is just that what AI can do is it can try all of those things in a very short time." aria-label="回原文"></button>。Sinofsky形容它们是roaming drones，量级乘上一万 <button class="pd-ts" data-t="35:15" data-who="Steven" data-en="But swarms literally look like a denial of service attack. And so now we need a whole layer internally that just is tracking way more about what authentications are being done, what APIs are being done." aria-label="回原文"></button>。

后果很具体：没人觉得内部的GitHub或财务报销工具会被拒绝服务攻击，但一群agent同时涌向这些服务，看起来就是拒绝服务攻击。

企业需要一整套新层面，追踪每一次认证、每一次API调用 <button class="pd-ts" data-t="34:36" data-who="Steven" data-en="Which I do think brings up a super interesting point, which I'm going to bridge, which is just that... I think the thing that people really aren't wrapping their heads around and are using the language that's really confusing is just that what AI can do is it can try all of those things in a very short time." aria-label="回原文"></button>。

Aaron Levie指出现有系统太粗糙：现在的agent要么每动一步都问你，要么就能删掉你整台电脑。

你要给它的可能是「这个文件夹可读写、那个只可读」的细粒度控制，操作系统根本没为此设计 <button class="pd-ts" data-t="40:32" data-who="Aaron" data-en="Yeah, well, yeah, we're, I mean, there's probably every layer of the stack has to evolve a bit in this. Like, even the, like, lack of granular nature of, like, you know, you have these modes of, like, the agent will either ask you every single time, you know, if you want to, you know, give it permission to do something or the exact opposite of, like, it can just, like, delete your entire computer." aria-label="回原文"></button>。

Martin反而觉得这是机会：[[多级安全|多级安全]]这些老研究早就在论文里了，当年没人用是因为太难用。

现在用系统的是AI，不嫌麻烦——说不定是操作系统的一次复兴，用AI帮忙把安全内建的系统重新造一遍 <button class="pd-ts" data-t="37:17" data-who="Martin" data-en="So here's the thing. I don't think there's a technical limitation here. Like, these threat models are very well understood and have been in the literature for a long time." aria-label="回原文"></button>。

## 创新中心正在移出实验室

最后聊到一个信号：一款模型能力层面的创新在实验室之外爆发，可能是ChatGPT之后 adoption 最快的一次 <button class="pd-ts" data-t="49:52" data-who="Martin" data-en="And so for all of the use cases that are not talking to a chatbot but are actually trying to put it in traditional software, this is a great fit. And so this has probably been the fastest adoption of an AI model since ChatGPT." aria-label="回原文"></button>。

原理用大白话讲：

过去语言模型是文本进、文本出，你把它塞进传统软件时得在提示词里硬塞格式要求，模型还经常不理你，特别别扭。

新思路是：模型可以读文本，但输出时不生成文本，而是从你给的选项里挑一个——快得多、便宜得多、还更准 <button class="pd-ts" data-t="49:14" data-who="Martin" data-en="But the thing is, generating text kind of ignores it, and it's just been super janky. And so what Jeff basically said is, listen, you know, generating the text is a very expensive thing, but it's also kind of, you know, it's more complicated than you need." aria-label="回原文"></button>。

这恰好补上了软件工程里等了多年的缺口。

Sinofsky兴奋地补充：这其实是[[概率化编程|概率化编程]]的回归。

上世纪六七十年代，计算机科学的半壁江山就是概率if语句和模拟——比如导弹打靶要建模风向。

后来被会计式确定性计算取代了。现在if语句又变成如果有80%的概率<button class="pd-ts" data-t="51:04" data-who="Steven" data-en="And that's exactly simulation. And it turns out there's like 50 years of computer science research in literally like probabilistic if statements. And so suddenly the coolest place to be in computer science is going to be in probabilistic programming, which was like all of computer science in the 1960s and 70s." aria-label="回原文"></button>。那些尘封的研究可以拿回来重新用了。

更宏观的判断是：

当一个平台长到足够大，创新就会从平台层移到平台之外——就像苹果社区说的Sherlocking，外面世界的新点子变成平台的功能。

模型实验室正在到达那个临界点，**下一步最有意思的事，会发生在模型周围的软件里** <button class="pd-ts" data-t="54:03" data-who="Steven" data-en="And I think that what's so cool is that It is happening outside the models, because that's what I think is just going to happen, which is the center of innovation has just moved." aria-label="回原文"></button>。

## 本集带走

- pacing没有参照物：实验室从没公布过时间表，谈快慢是空话，而实际上钱和增长都在全速前进。
- 灭绝风险不能既当招聘筹码又当监管借口——真信就该国有化，不信就别拿它吓政府。
- 历史上成功的科技立法都基于已发生的具体损害；对还没出事的AI做预测性监管，往往两头不讨好。
- AI agent等于上万台不知疲倦的漫游无人机，企业内部员工大体可信的安全假设被彻底推翻，细粒度权限和内部API追踪必须重建。
- 创新中心正从模型实验室移向周边软件，读文本、选选项式的接口和概率化编程的回归是最新信号。

<div class="pd-sec pd-sec-q">全部金句 <span>19 条</span></div>

> <span class="qz">问题在于，欧洲将会在这方面领跑，因为他们没有什么可失去的。</span>  
> *The problem is that Europe is going to lead with that because they have nothing to lose.*  
> <span class="qm">—— Martin Casado · [00:47]</span> ^q1

> <span class="qz">早期互联网充斥着病毒、蠕虫和安全故障。我们没有停止构建它。我们学会了如何让它更安全。</span>  
> *The early internet was riddled with viruses, worms, and security failures. We didn't stop building it. We learned how to make it safer.*  
> <span class="qm">—— 嘉宾 · [00:58]</span> ^q2

> <span class="qz">现在，如果他们实际上并不相信那一点——在我私下的谈话中，最有理智的人并不相信，只有一小部分人相信——那这就是一个人力资源问题。</span>  
> *Now, if they don't actually believe that, and in the private conversations I have, the most sensible people don't, it's a small fraction that do, this is an HR problem.*  
> <span class="qm">—— Steven Sinofsky · [07:12]</span> ^q3

> <span class="qz">所以你没法给进度踩刹车，因为根本没人知道它本来应该在什么时候完成。</span>  
> *So you can't pace it because nobody knows when it was supposed to finish in the first place.*  
> <span class="qm">—— Martin Casado · [08:15]</span> ^q4

> <span class="qz">如果你是那个最害怕因为你的产品而让一切走向何种结局的人，那就别做了。不要做。</span>  
> *If you are the most afraid of how everything is going to go because of your product, just stop. Don't do it.*  
> <span class="qm">—— Martin Casado · [09:36]</span> ^q5

> <span class="qz">而这是对政府运作方式的百分之百的彻底误解，事实是，当你和政府交谈时，他们其实知道这些东西是怎么运作的，他们知道他们只是在听你说话，他们在听所有人说话，没有人会得到自己想要的，因为他们知道，要在我们的体制里做成任何事情，那就是一种妥协。</span>  
> *And it's a complete 100% misunderstanding of how government works, which is when you talk to the government, they actually know how these things work, and they know they're just listening to you, and they're listening to everyone, and no one is gonna get what they want, because they know in order to do anything in our system, it's a compromise.*  
> <span class="qm">—— Martin Casado · [10:54]</span> ^q6

> <span class="qz">嗯，下一次选举百分之百会是一场关于 AI 的公投。</span>  
> *Well, the next election will 100% be a referendum on AI.*  
> <span class="qm">—— Aaron Levie · [12:14]</span> ^q7

> <span class="qz">它是防御性的，而且我们一个词汇都没占。</span>  
> *It's defensive, and we own none of the vocabulary.*  
> <span class="qm">—— Martin Casado · [12:53]</span> ^q8

> <span class="qz">只是我觉得一旦你说它是非零的，对于灾难性的东西，唯一的答案就是你必须把它国有化。</span>  
> *It's just that I think once you say it's non-zero, the only answer, of like catastrophic, the only answer is you have to nationalize it.*  
> <span class="qm">—— Martin Casado · [16:17]</span> ^q9

> <span class="qz">有很多对科技行业积压的情绪，最后可能全都汇入 AI 监管。</span>  
> *There's a lot of pent-up energy against tech that could end up just all siphoning into AI regulation.*  
> <span class="qm">—— Aaron Levie · [23:30]</span> ^q10

> <span class="qz">我们真的应该在 97 年左右就把互联网封掉。</span>  
> *We really should have blocked the internet in like 97.*  
> <span class="qm">—— Aaron Levie · [24:00]</span> ^q11

> <span class="qz">而智能体集群完全颠覆了这一点，因为它们就是一群到处游荡的无人机。</span>  
> *And agent swarms completely flip that because these are just roaming drones.*  
> <span class="qm">—— Aaron Levie · [36:11]</span> ^q12

> <span class="qz">所以也许现在操作系统、网络和计算机语言会迎来一次复兴。而且我们应该回到那些旧的研究，我们应该开始重建那些在设计上就是安全的系统。</span>  
> *So maybe now is going to be a renaissance in operating systems and network and computer languages. And we should like go back to the old research and we should kind of start rebuilding systems that are secure by design.*  
> <span class="qm">—— Steven Sinofsky · [37:46]</span> ^q13

> <span class="qz">比如，你知道为了互联网我们不得不改变技术栈里的多少东西吗？全部！</span>  
> *Like, you know how much of the stack we had to change for the internet? Everything!*  
> <span class="qm">—— Steven Sinofsky · [38:10]</span> ^q14

> <span class="qz">如果你要是问我，就像我走进来时写在笔记上的，我最大的恐惧就是欧洲认定 GDPR 是有史以来最好的东西，然后他们要直接给 AI 套上 GDPR。</span>  
> *If you ask me, like, walking in, like, what I wrote down on my note, like, was my biggest fear is that Europe decides that GDPR was the best thing ever, and they're gonna just GDPR AI.*  
> <span class="qm">—— Martin Casado · [41:29]</span> ^q15

> <span class="qz">所以如果你在 1910 年就成立了 FAA，你根本不会有任何机会。</span>  
> *And so if you had started the FAA in 1910, you would never have a chance.*  
> <span class="qm">—— Martin Casado · [47:40]</span> ^q16

> <span class="qz">所以突然之间，计算机科学里最酷的地方将变成概率编程，而这就像是 1960 和 70 年代计算机科学的全部内容。</span>  
> *And so suddenly the coolest place to be in computer science is going to be in probabilistic programming, which was like all of computer science in the 1960s and 70s.*  
> <span class="qm">—— Martin Casado · [51:10]</span> ^q17

> <span class="qz">而然后当然，这可能会从根本上改变软件的性质，使它更具随机性。</span>  
> *And then, of course, this could change the nature of software fundamentally to make it more stochastic.*  
> <span class="qm">—— Steven Sinofsky · [53:53]</span> ^q18

> <span class="qz">它发生在模型之外，因为我认为这就是将要发生的事，也就是创新的中心已经转移了。</span>  
> *It is happening outside the models, because that's what I think is just going to happen, which is the center of innovation has just moved.*  
> <span class="qm">—— Martin Casado · [54:03]</span> ^q19

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 安全」挖下去**

- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同概念:智能体 (agent)、生存风险 (X-risk)</span>
- [[2026-09-21-a16z-ai-safety-language-is-destroying-the-deb|AI出问题不是“恶魔附身”，是软件有bug]]<span class="pd-rz">同嘉宾:Steven Sinofsky · 同公司:Microsoft</span>
- [[2026-10-04-lennys-openais-head-of-chatgpt-were-entering|OpenAI Codex 负责人 Tibo:互联网上大多数操作将交给智能体]]<span class="pd-rz">同公司:ChatGPT · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-27-a16z-steven-sinofsky-ai-doesnt-need-new-rules|Steven Sinofsky：AI监管为什么急不得]]<span class="pd-rz">同嘉宾:Steven Sinofsky · 同概念:监管 (regulation)</span>
- [[2026-09-15-trainingdata-box-s-aaron-levie-on-reinventing-yoursel|Box 创始人 Erin Levy：套壳的逆袭与应用层的万亿机会]]<span class="pd-rz">同嘉宾:Aaron Levie · 同概念:智能体 (agent)</span>
- [[2026-09-07-twentyvc-20vc-the-100-billion-ai-assistant-race-t|邮箱里的 AI 助手：Plaid 前 CTO 谈如何在巨头围剿下赢]]<span class="pd-rz">同公司:Apple、ChatGPT · 同概念:智能体 (agent)</span>

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
