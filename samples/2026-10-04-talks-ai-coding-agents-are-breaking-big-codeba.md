---
title: "代码巨浪来了:谁来守住让世界运转的大代码库"
podcast: 精选演讲
date: 2026-10-07
source_url: undefined
duration: "12:13"
type: episode
cover: "#64748b"
description: "Sourcegraph CEO Dan Adler 论证:AI 编程工具正在撑坏大型企业代码库,理解超大规模代码的基础设施没人建,而这正是关键缺口。"
guests: ["[[Dan Adler]]"]
companies: ["[[Sourcegraph]]", "[[Mercari]]"]
concepts: ["[[智能体]]", "[[智能体批量变更]]", "[[代码库]]", "[[上下文窗口]]", "[[代码图]]", "[[确定性脚本]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-04-talks-ai-coding-agents-are-breaking-big-codeba#post","headline":"代码巨浪来了:谁来守住让世界运转的大代码库","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-04-talks-ai-coding-agents-are-breaking-big-codeba","mainEntityOfPage":"https://talk.solomind.cc/2026-10-04-talks-ai-coding-agents-are-breaking-big-codeba","description":"Sourcegraph CEO Dan Adler 论证:AI 编程工具正在撑坏大型企业代码库,理解超大规模代码的基础设施没人建,而这正是关键缺口。","datePublished":"2026-10-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Dan Adler"},{"@type":"Organization","name":"Sourcegraph"},{"@type":"Organization","name":"Mercari"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体批量变更 (agentic batch changes)"},{"@type":"Thing","name":"代码库 (code base)"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"代码图 (code graph)"},{"@type":"Thing","name":"确定性脚本 (deterministic scripts)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"代码巨浪来了:谁来守住让世界运转的大代码库","item":"https://talk.solomind.cc/2026-10-04-talks-ai-coding-agents-are-breaking-big-codeba"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>代码巨浪来了:谁来守住让世界运转的大代码库</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 代码巨浪来了:谁来守住让世界运转的大代码库

<div class="pd-byl"><b>Dan Adler</b> · Sourcegraph CEO · 2026-10-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-04-talks-ai-coding-agents-are-breaking-big-codeba.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">驱动世界运转的软件并不漂亮,不新,也不干净。但一切实际上都是靠它运转的。</div><div class="a">— Dan Adler <button class="pd-ts" data-t="00:40" data-who="Dan Adler" data-en="the software that runs the world is not pretty. It's not new. It's not clean. It's how everything actually works." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Dan Adler]]
>
> **公司** [[Sourcegraph]] · [[Mercari]]
>
> **概念** [[智能体]] · [[智能体批量变更]] · [[代码库]] · [[上下文窗口]] · [[代码图]] · [[确定性脚本]]

这一集是 [[Sourcegraph|Sourcegraph]] CEO [[Dan Adler|Dan Adler]] 的一场演讲,主题听上去不性感却极其承重:**拥有并维护一个庞大复杂的[[代码库|代码库]]**。

他的核心判断很反直觉:让所有开发者提速的 AI 编程工具,恰恰正在制造让大型代码库开始崩坏的条件——而这背后的问题,现在的[[智能体|智能体]]公司一个都没在解决。

他开场先把话砸实在:驱动世界运转的软件并不漂亮、也不新,但一切靠它运转 <button class="pd-ts" data-t="00:38" data-who="Dan Adler" data-en="This is a talk today about the unglamorous but load-bearing work of owning a large, complex codebase and why AI and agentic coding tools today make that job more difficult and more important than ever before." aria-label="回原文"></button>。

软件行业 72% 的就业集中在 500 人以上的大公司里,这些公司管理着数千个代码仓库和数十年的代码历史 <button class="pd-ts" data-t="00:49" data-who="Dan Adler" data-en="It's how everything actually works. 72% of software industry employment is in companies with more than 500 people. These are the large enterprises of the world." aria-label="回原文"></button>。

你的银行实时拒付、保险公司的双重保险报销比例、Amazon 告诉你袜子到货、飞机用雷达调航迹——全靠这些由数千名工程师花几十年建起来的庞大、老旧、超复杂代码库 <button class="pd-ts" data-t="01:18" data-who="Dan Adler" data-en="Most of us work in large, long-lived code bases. Those code bases are how your bank account will reject a transaction in real time if you hit your limit. They're how your insurance carrier calculates the reimbursement rate for a policyholder with dual coverage." aria-label="回原文"></button>。

## 一股代码巨浪正在扑向你的代码库

与此同时,编程智能体写代码比以往更多、更好、更快。他的原话是:「一股代码的巨浪正在向你袭来。

它正扑向你的代码库,扑向你团队中所有那些只想把头探出水面喘口气的工程师。」

<button class="pd-ts" data-t="02:12" data-who="Dan Adler" data-en="And coding agents are writing more better code today faster than we have ever seen before. A tidal wave of code is coming for you. It's coming for your code base and for all of your engineers on your team who are trying to just keep their heads above water." aria-label="回原文"></button> 每个人都在感受这股 AI 生成代码的洪流——必须去审查它、确保它对代码库是健康的,大家已经精疲力竭。

当然有代码审查智能体、有衡量代码库健康度的工具,大厂也会继续把这些能力吸纳进来,「我们会不断垒起沙袋把洪流挡在外面」<button class="pd-ts" data-t="02:49" data-who="Dan Adler" data-en="Over time, we'll keep putting sandbags down to keep this flood held back, right? We're gonna keep finding these local maxima to help ourselves sort of avoid this problem." aria-label="回原文"></button>。

但真正发生的事是:那些维持世界运转的庞大代码库,正在开始腐化 <button class="pd-ts" data-t="02:56" data-who="Dan Adler" data-en="We're gonna keep finding these local maxima to help ourselves sort of avoid this problem. But meanwhile, what's happening is that these code bases, these massive ones that keep the world running, are beginning to decay." aria-label="回原文"></button>。

数百万行代码、数万个仓库,多到塞不进一个[[上下文窗口|上下文窗口]],甚至无法实时 clone 和 grep。

具体症状包括:不同智能体在不同地方套用不同的编码规范;重复代码蔓延——你已经有能做这件事的库,但你的智能体不知道;跨服务依赖越来越脆弱;标准上的细微偏差制造出更隐蔽的潜在问题;而最重要的,是智能体每天都在 uncover 新的漏洞,需要对这些没人愿意碰的遗留代码库做持续监督和维护 <button class="pd-ts" data-t="03:17" data-who="Dan Adler" data-en="And this is causing big problems. We're publishing new features, new patches at record speed. There are different coding standards being applied in different places by different agents across the code base." aria-label="回原文"></button>。

归根结底,「问题就出在自己家里」——问题就是代码的体量本身:「正是那些让我们所有人提速、让我们比以往任何时候都更快写出更多代码的工具,也正是在制造那些会导致这些支撑我们世界运转的庞大代码库开始崩溃的条件。」

<button class="pd-ts" data-t="04:15" data-who="Dan Adler" data-en="The call is coming from inside the house, right? The very tools that are speeding all of us up and letting us write more code faster than ever are also the tools that are creating the conditions that will cause these massive code bases that run our world to begin to fail." aria-label="回原文"></button> 他举了个让人后背发凉的例子:一家排名前十的汽车制造商的技术高管,今天刚听到一位开发者说「我不知道这段代码是干什么的,AI 帮我写的」——当你写的是车辆自动驾驶代码、要管理成千上万名工程师时,这太可怕了 <button class="pd-ts" data-t="04:44" data-who="Dan Adler" data-en="I want to give my devs the best tools possible. But just today I overheard a dev say, I don't know what this code does. AI wrote it for me." aria-label="回原文"></button>。

## 智能体公司没有在解决这个问题

他深信这些代码库的所有者理应得到更好的东西:「用于查看和理解一个 5 万仓库代码库的基础设施,OpenAI、Anthropic、Cursor 以及其他公司既没有在建,也没有在卖。」

<button class="pd-ts" data-t="05:21" data-who="Dan Adler" data-en="Today's agentic dev tools are not meeting the moment for this. The infrastructure to see and understand a 50,000 repo codebase is not being built or sold by OpenAI, by Anthropic, by Cursor, by the rest of them." aria-label="回原文"></button> 原因很简单:他们的智能体在解决开发者日常的小规模问题上好得难以置信,需求增长太猛,而「这些代码库开始分崩离析这个更大的问题却被忽视了」。

他引用美国前十银行之一技术负责人的原话:「当然,Claude Code 可以做出这个修改,但我有 9 万个仓库要做这个修改。」

<button class="pd-ts" data-t="06:45" data-who="Dan Adler" data-en="Tens of trillions of dollars in assets in custody or administration. Sure, Claude Code can make this change, but I have 90,000 repositories to make it in. This is actually a specific quote about a specific supply chain vulnerability, an NPM thing." aria-label="回原文"></button> 那是一个具体的 NPM 供应链漏洞——对一家银行来说,智能体在以前所未有的速度发现并制造新漏洞,而你得到的答案是「去用 Claude Code 解决」,祝你在 9 万个仓库里好运,还得梳理出全公司生产环境里到底有哪些东西在跑。

## 理解是一个上下文问题,你 grep 不了看不见的东西

有人会说:把仓库架构写进 agents.md 不就行了?他直言这几乎没起作用。

因为 LLM 「太喜欢搜索了」——这就像新员工靠翻代码熟悉代码库,智能体就是这么构建世界模型的,「这个智能体会通过 grep、grep、grep 一路摸到对代码库的理解」<button class="pd-ts" data-t="07:32" data-who="Dan Adler" data-en="Because at the end of the day, right, what's really funny about all this is that if we know anything about LLMs, it's that they just love to search. It's like a new hire getting up to speed on the code base." aria-label="回原文"></button>。

但理解是一个上下文问题:「你没法 grep 你根本看不见的东西。」

<button class="pd-ts" data-t="07:54" data-who="Dan Adler" data-en="But understanding is a context problem. You can't grep what you literally cannot see. This is tools and infrastructure that's needed." aria-label="回原文"></button> 而用于查看、搜索并真正深入理解一个超大规模代码库的基础设施，如今的智能体构建者们并没有在建 <button class="pd-ts" data-t="08:00" data-who="" data-en="This is tools and infrastructure that's needed. And the infrastructure to go see and search and really deeply understand a 500 or 5,000 or 50,000 or half a million repo codebase is not being built by the agent builders today." aria-label="回原文"></button>。

而这需要的正是那张[[代码图|代码图]]——代码库的基础图，包括搜索，以及编译器精确的分析输出；

这是让智能体有能力有效做出修改的关键 <button class="pd-ts" data-t="08:56" data-who="Dan Adler" data-en="And we believe very deeply that building tools to give agents the ability to actually see and understand and evolve those large code bases is essential for the future." aria-label="回原文"></button>。他的一句话主张：「可见性就是基础设施。」<button class="pd-ts" data-t="09:17" data-who="Dan Adler" data-en="That is essential to give your agents the ability to go and understand how to make changes effectively. Visibility is infrastructure. And we actually built a lot on top of this, right?" aria-label="回原文"></button>

## 落地:跨几千仓库的批量变更智能体

Sourcegraph 就是围绕这个建的。

演讲当天他们刚把新的「[[智能体批量变更|智能体批量变更]]」产品发布到 beta:一个前沿智能体,让超大规模代码库的所有者从单个 prompt 出发,一次跨数百或数千个仓库执行代码变更 <button class="pd-ts" data-t="09:24" data-who="Dan Adler" data-en="We're not stopping here. Actually, just today we launched our new agentic batch changes product into beta. This is a frontier agent, and its job is to let the owner of a massive code base actually execute code changes across hundreds or thousands of repositories at once, starting with a single prompt." aria-label="回原文"></button>。

它会在整个代码库中迭代式推出变更、自我修复、响应 CI 状态和 PR 评论;在需要判断力的地方用编码智能体,在不需要的地方用[[确定性脚本|确定性脚本]];并提供追踪和可审计性,确保覆盖了所有需要打补丁的地方的 100%。

他引了早期用户 [[Mercari|Mercari]](日本的全球购物平台,成百上千个独立微服务跑在生产环境)的实战:用户用它修补一个需要正确设置环境变量的 GitHub 代码注入问题,先在两个已知有问题的仓库上跑,然后让它去探索其余代码库——结果又发现了 80 个潜在漏洞 <button class="pd-ts" data-t="10:35" data-who="Dan Adler" data-en="Here's a great quote from an early access user, actually at Mercari, a global shopping tool out of Japan, incredible company, massive code base, hundreds and hundreds of independent microservices running in production." aria-label="回原文"></button>。

然后用一个确定性脚本一次性把约 100 处风险全部一致地修补。「这就是智能体编程时代『信心』的全部含义。」<button class="pd-ts" data-t="10:56" data-who="Dan Adler" data-en="This is basically just going and doing that scan. Patching them all in one go with a sort of deterministic script that can go make sure it's making that change consistently, effectively across 100 of the places where that risk exists, that is what confidence is all about in the agentic coding era." aria-label="回原文"></button>

他结尾的两个预测值得记住:这些庞大代码库不会消失,未来的代码只会多得多的多 <button class="pd-ts" data-t="08:31" data-who="Dan Adler" data-en="If you'll let me sort of take a moment and predict the future of our industry. These massive code bases are not going away. In fact, there will be more code." aria-label="回原文"></button>;而构建工具让智能体真正能查看、理解并演进大型代码库,对行业未来至关重要。

## 本集带走

- **提速率害了代码库**:AI 写码越快,审查、规范漂移、重复代码、跨服务脆弱依赖、新漏洞的维护负担越重——问题根源是代码体量,不是模型不够好。
- **agents.md 帮不了大代码库**:智能体理解代码靠 grep 式搜索,而 5 万仓库规模根本 grep 不完——可见性(代码图 + 编译器级分析)是必须先建的基础设施。
- **批量变更要「智能体 + 确定性脚本」混合**:需要判断的地方交给智能体,机械重复的补丁用确定性脚本,再加追踪保证 100% 覆盖。
- **给自己的代码库做个体检**:你知道自己有多少仓库、多少 fork、多少份代码副本吗?有多少开发者带进来的库正跑在生产环境里而你不知道?他建议先回答这些问题。

<div class="pd-sec pd-sec-q">全部金句 <span>10 条</span></div>

> <span class="qz">驱动世界运转的软件并不漂亮,不新,也不干净。但一切实际上都是靠它运转的。</span>  
> *the software that runs the world is not pretty. It's not new. It's not clean. It's how everything actually works.*  
> <span class="qm">—— Dan Adler · [00:40]</span> ^q1

> <span class="qz">一股代码的巨浪正在向你袭来。</span>  
> *A tidal wave of code is coming for you.*  
> <span class="qm">—— Dan Adler · [02:12]</span> ^q2

> <span class="qz">正是那些让我们提速、让我们比以往更快写出更多代码的工具,也正是在制造那些会导致支撑世界运转的庞大代码库开始崩溃的条件。</span>  
> *The very tools that are speeding all of us up and letting us write more code faster than ever are also the tools that are creating the conditions that will cause these massive code bases that run our world to begin to fail.*  
> <span class="qm">—— Dan Adler · [04:15]</span> ^q3

> <span class="qz">我不知道这段代码是干什么的,是 AI 帮我写的。</span>  
> *I don't know what this code does. AI wrote it for me.*  
> <span class="qm">—— Dan Adler · [04:46]</span> ^q4

> <span class="qz">用于查看和理解一个 5 万仓库代码库的基础设施,OpenAI、Anthropic、Cursor 以及其他公司既没有在建,也没有在卖。</span>  
> *The infrastructure to see and understand a 50,000 repo codebase is not being built or sold by OpenAI, by Anthropic, by Cursor, by the rest of them.*  
> <span class="qm">—— Dan Adler · [05:21]</span> ^q5

> <span class="qz">当然,Claude Code 可以做出这个修改,但我有 9 万个仓库要做这个修改。</span>  
> *Sure, Claude Code can make this change, but I have 90,000 repositories to make it in.*  
> <span class="qm">—— Dan Adler · [06:45]</span> ^q6

> <span class="qz">如果说我们对 LLM 有任何了解的话,那就是它们太喜欢搜索了。</span>  
> *if we know anything about LLMs, it's that they just love to search.*  
> <span class="qm">—— Dan Adler · [07:26]</span> ^q7

> <span class="qz">你没法 grep 你根本看不见的东西。</span>  
> *You can't grep what you literally cannot see.*  
> <span class="qm">—— Dan Adler · [07:54]</span> ^q8

> <span class="qz">可见性就是基础设施。</span>  
> *Visibility is infrastructure.*  
> <span class="qm">—— Dan Adler · [09:17]</span> ^q9

> <span class="qz">用一个确定性脚本一次性把它们全部修补,确保它在 100 个存在该风险的地方一致、有效地完成变更——这就是智能体编程时代「信心」的全部含义。</span>  
> *Patching them all in one go with a sort of deterministic script that can go make sure it's making that change consistently, effectively across 100 of the places where that risk exists, that is what confidence is all about in the agentic coding era.*  
> <span class="qm">—— Dan Adler · [10:56]</span> ^q10

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-27-talks-how-to-generate-mergeable-code-with-a-co|智能体为什么总是新员工？给它们造一个上下文引擎]]<span class="pd-rz">同概念:上下文窗口 (context window)、智能体 (agent)、Claude Code</span>
- [[2026-09-03-talks-model-selection-token-efficiency|Token 都烧在哪了：Cursor 工程师教你把 AI 编程成本打下来]]<span class="pd-rz">同公司:Cursor · 同概念:上下文窗口 (context window)、智能体 (agent)</span>
- [[2026-09-14-talks-agents-without-code-skills-yaml-and-file|智能体就只是文件：当配置取代 Python]]<span class="pd-rz">同公司:Cursor · 同概念:上下文窗口 (context window)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-30-talks-the-death-of-the-code-review-what-the-da|代码评审未死：人类从引擎变飞行员]]<span class="pd-rz">同公司:Anthropic、Cursor、OpenAI · 同概念:智能体 (agent)、GitHub</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:智能体 (agent)、Claude Code</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Anthropic、Cursor、OpenAI · 同概念:智能体 (agent)</span>

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
