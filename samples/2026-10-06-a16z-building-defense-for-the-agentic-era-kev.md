---
title: 当网络攻击从人类速度变成机器速度，防御也必须自动化
podcast: The a16z Show
date: 2026-10-06
source_url: undefined
duration: "49:03"
type: episode
cover: "#64748b"
description: Mandiant 创始人 Kevin Mandia 讲 AI 如何重塑攻防两端，以及他的新公司 Armaden 在做什么。
host: "[[David George]]"
cohosts: ["[[Kevin Mandia]]"]
companies: ["[[Armiden]]", "[[Mandiant]]"]
concepts: ["[[智能体]]", "[[零日漏洞]]", "[[红队测试]]", "[[渗透测试]]", "[[自主防御]]", "[[开源模型]]", "[[护栏]]", "[[杀伤链]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-06-a16z-building-defense-for-the-agentic-era-kev#post","headline":"当网络攻击从人类速度变成机器速度，防御也必须自动化","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-06-a16z-building-defense-for-the-agentic-era-kev","mainEntityOfPage":"https://talk.solomind.cc/2026-10-06-a16z-building-defense-for-the-agentic-era-kev","description":"Mandiant 创始人 Kevin Mandia 讲 AI 如何重塑攻防两端，以及他的新公司 Armaden 在做什么。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"David George"},{"@type":"Person","name":"Kevin Mandia"},{"@type":"Organization","name":"Armiden"},{"@type":"Organization","name":"Mandiant"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"零日漏洞 (zero day)"},{"@type":"Thing","name":"红队测试 (red teaming)"},{"@type":"Thing","name":"渗透测试 (pen testing)"},{"@type":"Thing","name":"自主防御 (autonomous defense)"},{"@type":"Thing","name":"开源模型 (open models)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"杀伤链 (kill chains)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"当网络攻击从人类速度变成机器速度，防御也必须自动化","item":"https://talk.solomind.cc/2026-10-06-a16z-building-defense-for-the-agentic-era-kev"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当网络攻击从人类速度变成机器速度，防御也必须自动化</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 当网络攻击从人类速度变成机器速度，防御也必须自动化

<div class="pd-byl"><b>Kevin Mandia</b> · Armiden 创始人 · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-06-a16z-building-defense-for-the-agentic-era-kev.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我不想错过 AI 的换班时刻——我在安全领域干了 30 年，而这整个该死的行业即将发生巨变。</div><div class="a">— Kevin Mandia <button class="pd-ts" data-t="00:22" data-who="Kevin Mandia" data-en="I don't want to sit out the AI shift change when I've done 30 years in security and the whole damn thing's about to change." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[David George]] · [[Kevin Mandia]]
>
> **公司** [[Armiden]] · [[Mandiant]]
>
> **概念** [[智能体]] · [[零日漏洞]] · [[红队测试]] · [[渗透测试]] · [[自主防御]] · [[开源模型]] · [[护栏]] · [[杀伤链]]

做了 30 年网络安全的 [[Kevin Mandia|Kevin Mandia]]，对 AI 带来的变化有一句很直接的话：他过去做的一切都过时了，剩下的一切都是新的。

他是 [[Mandiant|Mandiant]] 的创始人，那家公司最终卖给了 Google。如今他重新出山，担任 Armaden 的首席执行官，做的事情听起来有点反直觉：

用 AI 持续攻击客户的网络，帮他们赶在真正的攻击者之前找到漏洞。

## 为什么攻击者会占先机？

AI 攻击和人类攻击完全是两回事。

人类黑客进了一个网络，会从 A 点到 B 点再到 C 点，一条路一条路地走，因为资源有限，必须挑最可行的路径。

AI 不用挑，它可以同时探索上千条路径 <button class="pd-ts" data-t="06:35" data-who="嘉宾" data-en="Speed, ridiculous. What AI does in a microsecond would take 70 humans. They can't even do it." aria-label="回原文"></button>。

Mandia 说，AI 一微秒能做到的事，相当于 70 个人类的工作，而且人类根本做不到——**这不是程度的差别，是本质的差别**。

他自己内部的测试里，AI 一旦拿到内网权限，扩散速度“令人震惊”：人类还在键盘上一个一个操作，它已经同时做了一千件事 <button class="pd-ts" data-t="23:57" data-who="嘉宾" data-en="This thing just does a thousand things at once. It's just everywhere. And you're like, whoa, okay, done." aria-label="回原文"></button>。

还有一个变化：AI 会让原本技术很差的攻击者显得很强。以前只有国家级黑客才有的能力，未来可能人人都能用。

而且当被攻击的一方发现“是模型在打我”时，归因会变得困难——背后是哪个国家？是哪个人？线索会变模糊 <button class="pd-ts" data-t="10:30" data-who="嘉宾" data-en="Yeah, because of the volume, yeah. When you start using models, over time, what it's gonna be is, on the defensive side, we're gonna say, we're being attacked by these models, but we're not sure who's behind them, those attacks." aria-label="回原文"></button>。

## 国家级攻击是狙击，AI 攻击是蜂群

Mandia 处理过大量国家级攻击。他说国家级的间谍活动像“狙击枪”：目标很集中，比如就盯着 30 家国防承包商，打得很深、很安静。

AI 攻击更像“无人机蜂群”：更吵、更粗糙，但覆盖更全面，也更有效 <button class="pd-ts" data-t="09:02" data-who="嘉宾" data-en="When they go hard at that, kind of think of it as that sniper round. With AI, I think it becomes more like a drone swarm. It becomes a little bit different in the cyber domain." aria-label="回原文"></button>。

他判断现在还只是第一局。**限制不是能力，而是成本和匿名性**——一旦犯罪分子能匿名、便宜地拿到算力，攻击会大规模出现。

他认为那些说“放慢模型、担心网络安全风险”的声音已经太迟了：[[开源模型|开源模型]]已经足够好，这些攻击就在眼前。

## 用 AI 攻击自己，是最好的防御

Armaden 的核心思路是：**好的防守需要有一个强大的进攻方来陪练**。

就像想拥有顶级防守的橄榄球队，需要训练场上有一个全明星进攻组不断冲击你 <button class="pd-ts" data-t="11:29" data-who="嘉宾" data-en="But first, I can tell you this. You don't have a defense unless you have a great offense to go up against. You know what I mean?" aria-label="回原文"></button>。

具体做法叫“超级攻击”：

派出一大群 AI 代理去扫你的网络，把每个服务、每条路径、每台设备都摸清楚，最后可能拿到几个 TB 的元数据，相当于给网络做了一个“攻击者视角的双胞胎”。

之后不用一直全量攻击，而是像心跳一样定期轮询：有什么变了？新上了什么应用？新接入了什么机器？哪里变了就打哪里 <button class="pd-ts" data-t="12:10" data-who="嘉宾" data-en="So thinking back to our, like you want to be able to do it continuously and that's the complexity. So we do a thing called a hyper attack, you know, and David, that's just a fancy word for we throw..." aria-label="回原文"></button>。

效果用数字说话：

从 2026 年 1 月至今，Armaden 在客户的生产环境里找到了 90 多个[[零日漏洞|零日漏洞]]——不是源代码审查发现的，而是从互联网黑盒打入，客户里不乏财富 500 强企业 <button class="pd-ts" data-t="17:07" data-who="嘉宾" data-en="It'll exhaust all routes all the time. And it's like, all I can tell you is Armiden since January of this year, in 2026, we have found over 90 zero days at customer sites, all in production." aria-label="回原文"></button>。

Mandia 说，通常 48 小时内就会给客户的首席安全官打电话：我们在你的隔离区拿到了远程代码执行权限。

## 传统的渗透测试会被取代

在 Mandia 看来，传统[[渗透测试|渗透测试]]只是“卫生检查”：扫已知的漏洞，列出一大堆清单，但无法证明你真的可被利用，还会制造大量误报。

Armaden 的方式是真的把漏洞利用走通——拿到远程代码执行、取到数据，没有误报。

AI 攻击还能做人类渗透测试做不了的事：找出定制应用里的逻辑漏洞（而不是代码漏洞），穷尽所有路径。

以前大家不这么做红队演练，纯粹是因为太贵、太缺人。**AI 把这个成本问题解决了，渗透测试这个品类会被慢慢取代**。

有趣的一点：

他们的团队测试了开源模型和最先进的闭源模型，让模型走完 20 条人类真实执行过的完整攻击链，所有模型都只走通了 8 条——开源和闭源的差距在网络安全领域比想象中小 <button class="pd-ts" data-t="30:52" data-who="嘉宾" data-en="And we had no model go through the entire kill chains of more than eight. So that's where it's eight out of 20. And here's what's weird, by the way, we tested the open weight ones and the most advanced closed models, and they all found eight." aria-label="回原文"></button>。

## 无人防守的下一步：自动响应

Armaden 的第二步叫 Armaden Blue。逻辑很简单：只告诉客户“你有漏洞，再见”是不够的。

发现可利用的风险后，要和防火墙、终端防护这些防御系统联动，以机器速度加上补偿性控制——像战场上的紧急包扎，先止血 <button class="pd-ts" data-t="21:02" data-who="嘉宾" data-en="And I likened it to, you know, kind of field dressing in war. Someone gets shot. You patch it up, but that's not the hospital." aria-label="回原文"></button>。

Mandia 的判断是：在 AI 时代，**检测和响应环节里不能有人类在场，因为人类太慢了**。安全运营中心里的一些流程会直接消失。

企业首席安全官的“真北”应该是有效的自主响应 <button class="pd-ts" data-t="22:26" data-who="嘉宾" data-en="You know, over time, I can tell you this, if you have humans in the detect and respond loop, you're going to be too slow. Yes. You know what I mean?" aria-label="回原文"></button>。

他和 CrowdStrike 等防御厂商都在合作这件事——这些防御平台自己也知道[[自主防御|自主防御]]必须存在。

## 大公司现在什么状态？全员戒备

Mandia 描述当下是一个“暴露窗口期”：AI 短期内对进攻方有利，所以防守方都在拼命补洞。

他观察到的情况是，攻防两边都很急——伊朗、俄罗斯的进攻方急着趁现在打进来，防守方急着把每一扇窗都堵上 <button class="pd-ts" data-t="25:17" data-who="嘉宾" data-en="There's a desperation in a moment in both directions, by the way. If you're on offense in Iran or Russia, you have a desperation in a moment of get in now. Yeah, get in now while you're dead." aria-label="回原文"></button>。

他了解的一家最尖端的公司，把相当大比例的工程师和研究团队抽出来，专门加固自己的墙。

现在的状态不像常规运营，更像作战室：首席信息官、首席安全官、产品团队、业务线全部拉进来，发现一个问题立刻围上去修。

他的原话是：没办法让下一年变得好看。

## 给创业者的经验：四件事变了

Mandia 2004 年自筹资金创办 Mandiant，一路盈利，第一年网站上的口号是“你不能只依赖预防性措施”——当年没人相信这个前提，所以也没有竞争。

今天完全不同。

他总结了几点：必须有融资，因为速度要求你在技术之外还要提前建好销售体系；

品牌很重要，而光环来自找对客户并让他们狂喜——在网络安全的例子是让大型银行满意，而不是让街角的蛋糕店满意；

还有一点，“Get customer, make customer happy, repeat”（获取客户，让客户满意，重复）——现在市场上噪音太大，唯一能让你和对手区分开的，就是客户的口碑 <button class="pd-ts" data-t="46:31" data-who="嘉宾" data-en="So I think every founder has to recognize You have to differentiate, and probably right now because of the noise in marketing more than ever before, the only way to differentiate is get customer, make customer happy and repeat." aria-label="回原文"></button>。

他认为网络安全行业未来两年里，整个技术栈都会被换掉，旧技术被拆走，新技术装进来。

对他来说，这是这个行业一辈子一次的顺风。

## 本集带走

- AI 攻击与人类攻击是本质差别：人类只能挑一条路径，AI 可以同时探索全部路径，速度相当于 70 个人类。
- Armaden 的做法是用 AI 持续“攻击”客户网络，建立元数据镜像，哪里变化就打哪里；2026 年以来已在客户生产环境找到 90 多个零日漏洞。
- 防御必须自动化：在检测和响应环节里放人类，速度上已经不成立了。
- 开源模型和闭源模型在网络安全攻击能力上差距不大，区别主要在速度和成本。
- 创业环境也变了：自筹资金慢慢做的路线行不通了，融资、销售体系、品牌都要提前建，而差异化的唯一办法是让客户替你说话。

<div class="pd-sec pd-sec-q">全部金句 <span>16 条</span></div>

> <span class="qz">我不想错过 AI 的换班时刻——我在安全领域干了 30 年，而这整个该死的行业即将发生巨变。</span>  
> *I don't want to sit out the AI shift change when I've done 30 years in security and the whole damn thing's about to change.*  
> <span class="qm">—— Kevin Mandia · [00:22]</span> ^q1

> <span class="qz">AI 在一微秒内做到的事，需要 70 个人来做。</span>  
> *What AI does in a microsecond would take 70 humans.*  
> <span class="qm">—— Kevin Mandia · [00:28]</span> ^q2

> <span class="qz">那就是有 25,000 个智能体协同行动，全部一起工作，做着非常非常聪明的事情，而不会陷入荒唐的盲目撒网。</span>  
> *Which is there's 25,000 agents on concert, all working together, doing really, really smart things without going on bizarre fishing trips.*  
> <span class="qm">—— Kevin Mandia · [05:29]</span> ^q3

> <span class="qz">但区别首先在于，AI 能做到的规模让人类望尘莫及，大到人类甚至无法理解的程度。</span>  
> *But the differences are, first and foremost, the scale of what AI can do dwarfs humans, like in ways humans don't even get.*  
> <span class="qm">—— Kevin Mandia · [06:13]</span> ^q4

> <span class="qz">开放模型已经足够好了，这些东西现在就在到来。</span>  
> *The open models are already good enough and these things are coming now.*  
> <span class="qm">—— Kevin Mandia · [07:15]</span> ^q5

> <span class="qz">一旦你能匿名获得 GPU，你就会看到多得多的犯罪攻击。</span>  
> *The minute you have anonymous availability of GPUs, you'll see far more criminal attacks.*  
> <span class="qm">—— Kevin Mandia · [07:21]</span> ^q6

> <span class="qz">无论如何，就攻击的差异和我们目前所看到的而言，我们正处在 AI 主导的攻击即将到来的临界点上，还只是第一局。</span>  
> *And so anyway, the difference in attacks and what we're seeing now, we are at the precipice, first inning still, of AI-led attacks coming.*  
> <span class="qm">—— Kevin Mandia · [07:42]</span> ^q7

> <span class="qz">技术较差、原本不太成功的攻击者，会显得成功得多。</span>  
> *Less technical, less successful, are gonna appear way more successful.*  
> <span class="qm">—— Kevin Mandia · [10:22]</span> ^q8

> <span class="qz">除非你有一个强大的进攻来对抗，否则你谈不上有防御。</span>  
> *You don't have a defense unless you have a great offense to go up against.*  
> <span class="qm">—— Kevin Mandia · [11:29]</span> ^q9

> <span class="qz">你在未来的 AI 时代真正想要的，是模型持续攻击你的压力，但你不能一直这么做。</span>  
> *What you really want in the future in the AI age is you want the constant pressure of models attacking you, but you can't do it all the time.*  
> <span class="qm">—— Kevin Mandia · [13:00]</span> ^q10

> <span class="qz">我能告诉你的是，Armiden 自今年 2026 年 1 月以来，我们在客户站点发现了超过 90 个零日漏洞，全部在生产环境中。</span>  
> *And it's like, all I can tell you is Armiden since January of this year, in 2026, we have found over 90 zero days at customer sites, all in production.*  
> <span class="qm">—— Kevin Mandia · [17:07]</span> ^q11

> <span class="qz">我们是来自互联网的黑盒攻击，针对大型软件公司发现了超过 90 个零日漏洞。</span>  
> *We are black box coming from the internet over 90 zero days in major software companies.*  
> <span class="qm">—— Kevin Mandia · [17:53]</span> ^q12

> <span class="qz">红队测试和渗透测试的区别在于，在我看来渗透测试只是一种卫生步骤。</span>  
> *And the difference between red teaming and pen testing is pen test to me is a hygiene step.*  
> <span class="qm">—— Kevin Mandia · [18:36]</span> ^q13

> <span class="qz">我宁愿要一个糟糕的补丁阻止坏人进来。</span>  
> *I'd rather have a bad patch stopping a bad guy from getting in.*  
> <span class="qm">—— Kevin Mandia · [20:17]</span> ^q14

> <span class="qz">你知道的，我可以这么告诉你：如果你在检测和响应环节中还有人工参与，你会太慢。</span>  
> *You know, over time, I can tell you this, if you have humans in the detect and respond loop, you're going to be too slow.*  
> <span class="qm">—— Kevin Mandia · [22:18]</span> ^q15

> <span class="qz">除了你的客户基础为你疯狂叫好之外，没有任何别的东西能让你差异化。</span>  
> *There is nothing else that'll differentiate you other than your customer base raving about you.*  
> <span class="qm">—— Kevin Mandia · [46:42]</span> ^q16

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、红队测试 (red teaming)</span>
- [[2026-08-17-sourcery-nikesh-arora--ceo-palo-alto-networks-pan|Palo Alto CEO 谈 AI 攻击时代:修复漏洞从 55 天压到 4 小时]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、零日漏洞 (zero day)</span>
- [[2026-09-26-twentyvc-20vc-five-predictions-for-a-world-of-age|智能体才是互联网的下一个大客户：Parallel 创始人 Parag Agrawal 谈智能体搜索]]<span class="pd-rz">同概念:开源模型 (open models)、护栏 (guardrails)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:开源模型 (open models)、护栏 (guardrails)、智能体 (agent)</span>
- [[2026-06-25-practicalai-aiuc-1-building-trust-in-ai-agents|AI 智能体怎么认证：从标准到红队测试的全流程]]<span class="pd-rz">同概念:智能体 (agent)、红队测试 (red teaming)、护栏 (guardrails)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)</span>

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
