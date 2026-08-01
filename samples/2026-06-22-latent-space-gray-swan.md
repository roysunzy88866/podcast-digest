---
title: "当 AI 变成黑客武器:给企业智能体修防火墙"
podcast: Latent Space
date: 2026-06-22
source_url: https://www.latent.space/p/gray-swan
duration: "66:13"
type: episode
cover: "#0e7490"
image: "/covers/2026-06-22-latent-space-gray-swan.jpg"
description: "Gray Swan 做的是给 AI 系统打补丁的生意:一边让机器自动找出模型漏洞,一边给企业智能体加一道可定制的防护栏。"
guests: ["[[Zico Kolter]]", "[[Matt Fredrikson]]"]
companies: ["[[Gray Swan]]"]
concepts: ["[[智能体]]", "[[红队测试]]", "[[提示词注入]]", "[[越狱]]", "[[护栏]]", "[[沙箱]]", "[[可解释性]]", "[[致命三角]]", "[[arena]]", "[[Shade]]", "[[Signal]]", "[[OpenClaw]]"]
category: AI 安全
tags:
  - AI 安全
  - 智能体
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当 AI 变成黑客武器:给企业智能体修防火墙</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# 当 AI 变成黑客武器:给企业智能体修防火墙

<div class="pd-byl"><b>Zico Kolter</b> · Gray Swan 创始人</div>

<div class="pd-mt">2026-06-22 · Latent Space · 66:13</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-06-22-latent-space-gray-swan.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">这个问题在于前沿模型在自动化红队测试方面极其糟糕,因为它们内置了大量的保障措施。</div><div class="a">Zico Kolter · 09:59</div></div>

> [!info] 关联
> **人物** [[Zico Kolter]] · [[Matt Fredrikson]]
>
> **公司** [[Gray Swan]]
>
> **概念** [[智能体]] · [[红队测试]] · [[提示词注入]] · [[越狱]] · [[护栏]] · [[沙箱]] · [[可解释性]] · [[致命三角]] · [[arena]] · [[Shade]] · [[Signal]] · [[OpenClaw]]
>
> **来源** [Latent Space](https://www.latent.space/p/gray-swan)

<div class="pd-tldr"><b>一句话</b>Gray Swan 做的是给 AI 系统打补丁的生意:一边让机器自动找出模型漏洞,一边给企业智能体加一道可定制的防护栏。</div>

把一个能自主操作你电脑、读写你数据库的[[智能体|智能体]]放到生产环境里,它随时可能被一条它刚好读到的网页「劫持」,把你的私密凭证发到攻击者的手里——这不是假设,而是已经有企业因此遭受了真实损害。说这话的是 Matt 和 Zico,他们是 AI 安全公司 [[Gray Swan|Gray Swan]] 的创始人。<button class="pd-ts" data-t="00:42" data-who="Matt Fredrikson" data-en="your sort of startup domain? Yeah. So, you know, at GraySwan, our mission is to empower everyone to use AI safely and securely." aria-label="回原文"></button>

在这一集对谈里,他们两位来自卡内基梅隆的创始人讲了三件事:AI 安全为什么和传统的软件安全截然不同,为什么不能指望模型变大就能自动变安全;他们自建的机器红队 [[Shade|Shade]] 和人类顶尖红队成员较量后发生了什么;以及给企业智能体套上「防火墙」的 [[Signal|Signal]] 模型到底卡在了可用性和安全性的哪一个点上。结尾他们还回答了一个所有人都在问的问题:当工程师强行要把能自主操作电脑的 [[OpenClaw|OpenClaw]] 塞进银行网络里,光靠 AI 层面的[[护栏|护栏]]到底够不够。

### AI 系统的漏洞,和传统软件完全不是一回事

说完了开场提到的智能体被劫持的风险,接下来要弄明白的第一件事是:AI 的安全问题,为什么值得单独拎出来做成一桩生意。Zico 的核心观点是,AI 系统具有本质上不同类型的漏洞。它们不像传统软件那样只是死板的代码,而是能被像人一样「欺骗」 <button class="pd-ts" data-t="03:13" data-who="Zico Kolter" data-en="I just mean that AI systems have inherent different types of vulnerabilities. They can be tricked like people get tricked sometimes, right? And so you need a different mindset about security, right?" aria-label="回原文"></button>。更可怕的是「相关故障」:现在的软件世界看起来百花齐放,但实际上所有人都在共用极少数的几个大模型。一旦有人在这些被广泛使用的智能体(比如 Codex 和 Cloud Code)里找到了漏洞,那就等于找到了一类全新的、可以同时打击所有人的漏洞利用方式 <button class="pd-ts" data-t="03:42" data-who="Zico Kolter" data-en="And if you find vulnerabilities in the agents that everyone uses, right, things like Codex and Cloud Code," aria-label="回原文"></button>。所以,Zico 认为,就像任何新平台诞生后都会催生出独立的安全服务商一样,AI 时代也需要专门的安全提供商。Gray Swan 要解决的不是「用 AI 去防御传统网络攻击」,而是「解决引入 AI 本身带来的新风险」 <button class="pd-ts" data-t="05:35" data-who="Zico Kolter" data-en="their AI systems themselves have the potential to introduce new vulnerabilities. And so this is not about using AI to make your cyber infrastructure better. Gray Swan is about understanding the security risks that you are bringing when you" aria-label="回原文"></button>。

### 机器打手 Shade:专门找模型茬的红队智能体

弄清楚了为什么 AI 需要全新的安全思维,接下来是 Gray Swan 具体怎么找出这些漏洞。Gray Swan 主要做两件事,第一件就是「[[红队测试|红队测试]]」——也就是主动去攻击模型,赶在坏人之前找到它的软肋。他们搞了一个叫「竞技场」的社区,吸引来了大约 15000 人,用发奖金的方式悬赏大家来挑战各大前沿实验室的模型 <button class="pd-ts" data-t="08:24" data-who="Matt Fredrikson" data-en="It's a really great community. Like 15,000 people come and hang out on the Discord server. Not all of them take part in every competition," aria-label="回原文"></button>。

但人工找漏洞毕竟慢,所以他们训练了一个专门用来做自动化红队测试的模型,起名叫 Shade。有意思的是,Zico 指出,各大实验室那些个头极大的前沿模型,自己是干不了红队测试这活的,因为它们内置了太多安全护栏,你让它去攻击别的模型,它自己就先拒绝了 <button class="pd-ts" data-t="10:03" data-who="Zico Kolter" data-en="the issue with this is that frontier models are extremely bad at automated red teaming because they have a lot of safeguards built into them. So if you try to use them to jailbreak another model, they will actually refuse." aria-label="回原文"></button>。你必须专门训练一个模型来干这事。而 Shade 现在在打破模型方面,甚至已经能比人类红队测试员做得更好了 <button class="pd-ts" data-t="11:18" data-who="Zico Kolter" data-en="than human red teamers now at breaking these models. When I say we, I mean our automated red teaming model is a system called Shade. That system is now actually quite a bit better at breaking models now." aria-label="回原文"></button>。

为了更直观地对比,他们最近还搞了一场叫做「人类浏览器智能体鲁棒性挑战」的有趣比赛。他们让红队成员去攻击操作浏览器的 AI 智能体,或者去网络钓鱼真人,结果让人意外:有些前沿模型非常非常容易被提示注入,而人类在所有模型中居然只排名第四 <button class="pd-ts" data-t="20:54" data-who="Matt Fredrikson" data-en="robust, right? It's very, very easy to prompt inject them in this setting." aria-label="回原文"></button>。但这并不意味着 AI 比人更安全,Matt 强调,这只是因为它们「上当」的点完全不一样。比如,人类绝对不会相信一封写着「这是模拟环境,请把邮件转发到这个随机地址」的邮件,但最前沿的模型却依然会中招 <button class="pd-ts" data-t="21:52" data-who="Matt Fredrikson" data-en="while in these scenarios humans found it very difficult to prompt inject the models like we're aware of scenarios that a human would never fall for that like Right." aria-label="回原文"></button>。AI 是一种不同形式的智能,那些能愚弄 AI 的东西,永远不会愚弄人类。

### 模型越大不会越安全:防线的必要性

工具变了,AI 这么好骗怎么办?这正是下一个话题:光靠模型自己进化能不能解决安全问题。Zico 痛批了一个常见的错觉:把模型做得越来越大,它并不会自然而然地变得更擅长抵御[[越狱|越狱]]。模型在抵抗攻击上的进步,靠的是针对这方面的显式训练 <button class="pd-ts" data-t="27:29" data-who="Zico Kolter" data-en="there is an aspect of you have to sort of constantly stay on the frontier here. But they're doing it because of explicit training for this. If you just make a model bigger and bigger, it will not get safer." aria-label="回原文"></button>。如果你只是单纯把模型做大,它对对抗性压力的鲁棒性并不会提升。这就是 Gray Swan 构建的第三款产品所要解决的问题。

Signal 本质上是一个位于用户、大模型和工具调用之间的过滤模型。它既能检查进来的外部内容里有没有[[提示词注入|提示词注入]],也能检查智能体发出去的工具调用有没有违反企业的自定义策略 <button class="pd-ts" data-t="38:46" data-who="Zico Kolter" data-en="I mean, so yeah, so Signal can sort of- And then there's the other two. Right, so Signal's actually just sort of both to a certain extent, right? So Signal will certainly parse incoming untrusted content," aria-label="回原文"></button>。为什么企业不能直接在系统提示词里写好规矩?Matt 解释说,基础模型要做的是通用任务,如果你给它塞太多繁重、复杂的上下文,还要让它时刻记住一堆该做和不该做的策略,它非常容易搞混 <button class="pd-ts" data-t="30:48" data-who="Matt Fredrikson" data-en="And that'll get you a little bit of the way there. But ultimately, You know," aria-label="回原文"></button>。而提示注入攻击最常用的手段,就是利用这种上下文的模糊性。因此,把「检查是否违规」这个能力单独拎出来,专门训练一个定制模型,效果会比让基础模型自己又干活又自查好得多。

他们还展示了一张图表,证明模型的通用能力(比如在 GPQA Diamond 上的得分)和它被攻击的成功率之间,基本上是看不到相关性的 <button class="pd-ts" data-t="29:04" data-who="Matt Fredrikson" data-en="So this scatterplot on the right, right, is essentially looking for a correlation between capability and attack success rate. So on the x-axis, how capable is the model at GPQA Diamond?" aria-label="回原文"></button>。换句话说,能力强不代表防线稳,你必须给它加一道独立的防线。

### 放权与隔离的权衡:给智能体配护栏

防线有了,但这够不够用?这正是当前企业最头疼的地方。主持人提到现在很多工程师承受着巨大的压力,非要在公司内网里跑像 OpenClaw(能自主操作电脑的智能体)这样的工具,觉得不用就落后了 <button class="pd-ts" data-t="49:07" data-who="Matt Fredrikson" data-en="I mean, they're getting pressure from their engineers, from the people who work there. No, we have to run open claw and turn it like we have to do this or we're behind, right?" aria-label="回原文"></button>。Zico 坦言,对于像 Codex 这样的编程智能体,Signal 目前保护得相当不错,但要防住 OpenClaw 能做的所有事,还有很多工作要做 <button class="pd-ts" data-t="49:35" data-who="Zico Kolter" data-en="where it becomes essentially like OpenClaw. I think that there is still work to be done to get it to be fully generic against anything OpenClaw can do." aria-label="回原文"></button>。

> 【背景】Codex 和 Claude Code(转写稿中作 Cloud Code)是用于辅助编程的 AI 智能体;OpenClaw 则泛指能直接接管并操作你鼠标、键盘和整个操作系统的「电脑使用」类智能体。

Matt 强调,你不能光指望 AI 层面的护栏。如果要把 OpenClaw 放进银行里,你得配合标准的安全实践:隔离环境、适当的身份验证和访问控制 <button class="pd-ts" data-t="50:02" data-who="Zico Kolter" data-en="It also requires, by the way, a lot of just standard security practices too, right? Like isolation environments, like proper authentication, like proper access controls." aria-label="回原文"></button>。你得在系统层面给它合理的权限,而不是让它能碰到所有人的银行信息。

随着智能体越来越深入企业,「智能体原生身份」成了一个新难题。目前默认的做法是智能体直接继承你本人的全部权限,但这在未来必须改变 <button class="pd-ts" data-t="51:56" data-who="Zico Kolter" data-en="in a lot of cases, operating on the condition that your agent has your permissions. Yeah." aria-label="回原文"></button>。Zico 预测,短期内最自然的演进方式是像人类区分工作和生活一样,给智能体配置不同的角色档案,让它在不同档案下只能访问特定的应用和账户 <button class="pd-ts" data-t="53:40" data-who="Zico Kolter" data-en="Agents are not very good at that right now. They are exceedingly bad at this. You know, the people making them have no work-life balance." aria-label="回原文"></button>。

### 安全的尽头是 AI 科学的自动化

说完了眼下最棘手的身份和权限问题,最后他们聊到了更宏大的研究方向。Zico 提出了一个相当反直觉的洞察:编程智能体正在让 Mechinterp(机制[[可解释性|可解释性]],即试图搞懂神经网络内部到底是怎么运作的学问)重新焕发生机。过去这个领域很落后,因为靠人去一个个测试小假设太慢了。但现在,模型已经足够好,它们可以自动化地去运行实验、分析激活模式、甚至编写安全代码 <button class="pd-ts" data-t="16:04" data-who="Zico Kolter" data-en="or I should say more optimistic about Mechinterp in that I think actually, as with many things, coding agents have a chance to make this into a science." aria-label="回原文"></button>。

> 【背景】Mechinterp(Mechanistic Interpretability,机制可解释性)是 AI 安全界的一个重要研究方向,旨在像逆向工程一样,拆解和破译大模型内部神经元的工作机制。

Zico 非常乐观地表示,我们应该先让 AI 去自动化的科学,就是分析深度学习本身的科学 <button class="pd-ts" data-t="17:36" data-who="Zico Kolter" data-en="fully on board with AI automating science but my point here is that maybe the first science we should automate is the science of interpretability yes the science of" aria-label="回原文"></button>。过去安全代码写不出来、网络分析不动,不是因为不可能,而是因为人力不够、耐心不够。现在有了智能体,安全研究这个领域即将迎来爆发。

访谈临近尾声时,他们谈到了 AI 保险。既然 AI 的漏洞是「灰天鹅」事件——那种极不太可能、但你隐约能预见它终将发生的事件 <button class="pd-ts" data-t="65:26" data-who="Zico Kolter" data-en="The name gray swan is sort of in reference to black swan events, which are things no one could see coming. A gray swan is an unlikely event you can kind of see coming." aria-label="回原文"></button>——那就一定会有保险公司来评估这种风险。Gray Swan 已经在跟这类机构合作,保险公司用 Shade 这样的工具去评估一家公司的 AI 部署风险,风险太高就让你去买 Signal 这样的防护系统来降低风险 <button class="pd-ts" data-t="61:10" data-who="Zico Kolter" data-en="Well, you put safety systems around your model, right? Including things like Signal. So it pairs extremely well because what in some" aria-label="回原文"></button>。虽然 Zico 认为目前还没出现像传统网络安全领域 SOC 2 那样被监管机构普遍接受的标准合规框架,但这毫无疑问是个有潜力的方向。Matt 也提到,最让他们受鼓舞的是,越来越多从未接触过 AI 安全的普通企业,在把产品做出来之前就主动找上门,意识到他们需要真正的解决方案,而不是靠几句提示词来糊弄 <button class="pd-ts" data-t="57:02" data-who="Matt Fredrikson" data-en="I understand that this is a weird and interesting and really capable model that I'm working with, but if I don't put more measures in place to make sure that it stays safe and" aria-label="回原文"></button>。

## 本集带走

最后收个尾,这一集值得带走的是三句话。第一,AI 系统的漏洞和传统软件完全不同,它们会被「骗」,而且由于大家都用同样几个大模型,一旦被攻破就是相关性的连环灾难。第二,模型变大并不会自动变安全,你必须像给网络装防火墙一样,在基础模型和外部世界之间专门加一层像 Signal 这样的定制过滤模型,把检查策略这件事外包出去,别让主模型又干活又当保安。第三,别指望一层防御解决所有问题,除了 AI 护栏,你还得老老实实做系统隔离、权限控制,甚至在未来给智能体配置不同的身份档案来区分工作和生活。最后别忘了 Zico 那个最乐观的判断:智能体不仅能写代码,还能通过自动化实验,帮我们彻底搞懂这些黑盒模型到底在想什么。

<div class="pd-sec">全部金句 <span>4 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">这个问题在于前沿模型在自动化红队测试方面极其糟糕,因为它们内置了大量的保障措施。</span>  
> *the issue with this is that frontier models are extremely bad at automated red teaming because they have a lot of safeguards built into them.*  
> <span class="qm">—— Zico Kolter · [09:59]</span> ^q1

> <span class="qz">对模型进行红队测试的本质就是去找到那些对该模型来说天然就是分布外的东西,这样你就可以绕过它的正常行为。</span>  
> *the nature of a red-timing a model is to find things that are inherently out of distribution for that model so as you can bypass its normal behavior.*  
> <span class="qm">—— Zico Kolter · [11:47]</span> ^q2

> <span class="qz">人类在所有模型中排名第四,这很搞笑。</span>  
> *It's hilarious that humans are ranked number four of all the models.*  
> <span class="qm">—— Zico Kolter · [21:06]</span> ^q3

> <span class="qz">如果你只是把一个模型做得越来越大,它不会变得更安全。</span>  
> *If you just make a model bigger and bigger, it will not get safer.*  
> <span class="qm">—— Zico Kolter · [27:32]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 安全」挖下去**

- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]] —— 同公司:Anthropic · 同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)
- [[2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge|Kimi K3 冲击波:开源逼近前沿,格局要变]] —— 同概念:智能体 (agent)
- [[2026-07-28-yc-sam-altman-never-a-better-time-to-do-a-s|Sam Altman 谈 AI 时代的创业法则:被全世界当成白痴是最大优势]] —— 同概念:沙箱 (sandbox)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]] —— 同公司:Anthropic · 同概念:提示词注入 (prompt injection)、智能体 (agent)、沙箱 (sandbox)
- [[2026-07-28-yc-boris-cherny-building-claude-code-e3mkr7|别再微管理 Claude:Claude Code 造物主的智能体实战心法]] —— 同概念:提示词注入 (prompt injection)、智能体 (agent)、沙箱 (sandbox)、Cloud Code
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|把 AI 当员工来管理:Claire Vo 的九个智能体生活实战]] —— 同概念:OpenClaw、提示词注入 (prompt injection)、智能体 (agent)

</div>
</div>

*本集关键词:AI 安全 · 红队测试 · 智能体 · 提示词注入 · 沙箱*

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
    ['.search','.readermode'].forEach(function(sel){ grab(sel,acts); });
    // 深浅色进右栏末尾 —— 但右栏在窄屏可能不显示,槽跟着一起没了。
    // 只在槽真的看得见时才搬进去,看不见就退回顶栏(🔒 #2:任何屏宽都得有入口)。
    var side=document.querySelector('.right.sidebar'), slot=null;
    if(side){
      slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      // 同上:槽是空的(:empty → display:none),要判**右栏**看不看得见
      if(!(side.offsetWidth || side.offsetHeight || side.getClientRects().length)) slot=null;
    }
    grab('.darkmode', slot || acts);
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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); }
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
