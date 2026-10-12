---
title: 软件工厂：从报错到上线，代码不再靠人手写
podcast: 精选演讲
date: 2026-10-12
source_url: undefined
duration: "18:12"
type: episode
cover: "#64748b"
description: Factory 工程师 Davis Palmie 讲解如何搭建「软件工厂」，让 AI 从报错信号一路自动跑到生产代码。
guests: ["[[Davis Palmie]]"]
companies: ["[[Factory]]"]
concepts: ["[[软件工厂]]", "[[智能体]]", "[[智能体就绪度]]", "[[模型无关]]", "[[古德哈特定律]]", "[[护栏]]", "[[开源模型]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-07-talks-the-software-factory-from-bug-report-to#post","headline":"软件工厂：从报错到上线，代码不再靠人手写","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-07-talks-the-software-factory-from-bug-report-to","mainEntityOfPage":"https://talk.solomind.cc/2026-10-07-talks-the-software-factory-from-bug-report-to","description":"Factory 工程师 Davis Palmie 讲解如何搭建「软件工厂」，让 AI 从报错信号一路自动跑到生产代码。","datePublished":"2026-10-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Davis Palmie"},{"@type":"Organization","name":"Factory"},{"@type":"Thing","name":"软件工厂 (software factory)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体就绪度 (agent readiness)"},{"@type":"Thing","name":"模型无关 (model agnostic)"},{"@type":"Thing","name":"古德哈特定律 (Goodhart's law)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"开源模型 (open source models)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"软件工厂：从报错到上线，代码不再靠人手写","item":"https://talk.solomind.cc/2026-10-07-talks-the-software-factory-from-bug-report-to"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>软件工厂：从报错到上线，代码不再靠人手写</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 软件工厂：从报错到上线，代码不再靠人手写

<div class="pd-byl"><b>Davis Palmie</b> · Factory 工程师 · 2026-10-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-07-talks-the-software-factory-from-bug-report-to.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">曾经，自动补全感觉很有魔力，而现在，往好了说，它只是我们记忆中一种古雅的东西。</div><div class="a">— Davis Palmie <button class="pd-ts" data-t="01:32" data-who="Davis Palmie" data-en="Now, autocomplete used to feel magical, and now, at best, it's a quaint thing we remember." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Davis Palmie]]
>
> **公司** [[Factory]]
>
> **概念** [[软件工厂]] · [[智能体]] · [[智能体就绪度]] · [[模型无关]] · [[古德哈特定律]] · [[护栏]] · [[开源模型]]

[[Davis Palmie|Davis Palmie]] 是 [[Factory|Factory]] 的技术团队成员，此前联合创办过投资团队[[智能体|智能体]]平台 Lumetric，也在大型咨询公司带过创新团队。

这段演讲里，他回答了一个很多人关心的问题：当 AI 写的代码比人还多，软件工程师和公司该怎么办？

他的答案是一套他称为[[软件工厂|软件工厂]]的系统。

## AI 编程经历了哪三个阶段？

Davis 把 AI 编程的演进分成三步。第一步是自动补全，工程师仍然牢牢掌控一切。

第二步，AI 能生成整个文件，工程师变成了一个有判断力的复制粘贴者。

第三步，智能体出现了——它们能自己收集上下文、调用工具、调试自己的输出。<button class="pd-ts" data-t="01:11" data-who="嘉宾" data-en="First, we had tab autocomplete, next token prediction, and the engineer was still firmly in the driver's seat. Then AI could generate entire files. And the software engineer became a bit of a discerning copy-paster." aria-label="回原文"></button>

他提醒大家注意 AI 攀登抽象阶梯的速度：从词元到文件，再到上下文，现在是整个系统。

而每次升级，工程师都变得更有价值，而不是更不值钱。

现在正处在转折点：工程师从亲手敲代码，转向管理智能体，最终把这些智能体组织成一个系统——这就是软件工厂。

## 写代码从来不是瓶颈，真正的瓶颈是什么？

「编码是最容易的部分。」Davis 说，它从来不是瓶颈。真正的痛点在别处：一个代码合并请求的中位审核时间是多久？

复现一个用户报的漏洞要多久？谁来保证文档跟代码同步、跟战略会议同步？谁来维护测试套件？<button class="pd-ts" data-t="05:01" data-who="嘉宾" data-en="Everyone across all your teams will have a shared responsibility for the pillars of the software factory. Coding was the easy part. This actually was never the bottleneck." aria-label="回原文"></button>

在很多公司，测试团队、工程团队、产品团队像是各自待在不同的大洲。

如果去拉数据，从代码写完到真正上线的时间，远超写代码本身的时间。

文档过期、死代码堆积、团队之间层层沟通——这些对人类工程师已经够难了，对智能体更是致命。

所以搭建软件工厂的核心任务，是让智能体能打通所有这些环节，理解组织内部的细微信号。

## 软件工厂到底长什么样？

它是一组智能体，负责从输入信号到生产部署的全流程。

智能体不再只是写代码，它要分拣故障、做计划、创建和更新文档、执行代码、审核、测试、发布上线，然后监控这次发布。<button class="pd-ts" data-t="06:35" data-who="嘉宾" data-en="So this brings us to the software factory, which is the system of agents that will take you from input signal to production deployment. Your agent's not just coding anymore." aria-label="回原文"></button>

Davis 的建议是别一口吃成胖子。

先从窄而可验证的任务开始，比如故障分拣：让智能体读一条报警，拉取相关的追踪信息，发到 Slack 里，但让工程师来决定下一步。

随着正确诊断越来越多，团队才会逐渐信任这套系统。每个环节都要有明确归属和监控，跑顺了再考虑让整个流水线闭环。

## 企业最担心的四个问题，怎么回答？

第一个问题：怎么防止成本失控？他的回答是不要锁死在单一模型上，每个任务用够用的最便宜模型。

他引用 Factory 首席执行官的比喻：「如果你孩子需要代数家教，你肯定能找到比爱因斯坦便宜的人。」<button class="pd-ts" data-t="02:52" data-who="嘉宾" data-en="So if you have AI systems that are producing more code than humans, there are some big questions that everyone is rightly asking. First, how can I prevent massive cost overruns?" aria-label="回原文"></button>

第二个问题：怎么保证用上当下最强的模型？

他认为押对一匹马本身就是个伪命题，尤其[[开源模型|开源模型]]越来越强，应该动态路由、按需选择。第三个问题：软件工程师会怎样？

角色会演变，产品和工程的边界在模糊，工程师负责建造和维护这个产出代码的系统，并设定方向。

第四个问题：组织会怎样变？团队边界模糊，信息不能有孤岛——这对人如此，对智能体尤其如此。

## 软件工厂的三条原则

第一，不绑定模型。他举例说，GPT 5.2 在代码审核上能达到最新 Opus 模型同样的效果，价格只有一半；

开源替代方案能把成本砍到原来的十分之一到三十分之一。<button class="pd-ts" data-t="08:14" data-who="嘉宾" data-en="Now, we feel pretty strongly that your software factory should have a few key principles. First, it should be model agnostic. Obviously, different models excel at different tasks and with very different cost efficiencies." aria-label="回原文"></button>

第二，部署模式要自主可控。从全托管到自带机器再到完全物理隔离，公司不该为了迁就 AI 部署而妥协安全架构。

第三，要打通整个软件开发生命周期：

文档变了应该反过来影响代码，规划目标应该决定测试什么，而不是靠战略、产品、工程、测试团队之间的层层传话。

任何一个支柱薄弱，整个系统就薄弱。

## 怎么判断你的公司准备好了没有？

Factory 有个概念叫[[智能体就绪度|智能体就绪度]]，从八个维度评估：有没有代码检查和格式化工具？构建命令是否文档齐全？

单元测试和集成测试是否完备？有没有说明文档？开发环境能否干净复现？代码是否模块化、边界清晰？

出问题时多久能查到原因？有没有主动做安全扫描、防止密钥泄漏？<button class="pd-ts" data-t="13:35" data-who="嘉宾" data-en="Unblocking these is not only going to help your agents, but it's also going to help your engineering teams. At Factory, we have the concept of agent readiness. And we evaluate this based on eight pillars." aria-label="回原文"></button>

Davis 的结论很妙：如果智能体和人类工程师要走同一条路，把路铺好就有双倍价值。

而且搭建工厂的过程本身，会把你组织里的隐性知识、手工流程和过时信息全都暴露出来——解决这些，对人对机器都有好处。

## 别考核代码量，要考核结果

「**衡量结果，而不是词元**。」Davis 说，代码行数和生成的词元数都是可以刷的指标，和实际产出没有关系。

大公司搞词元排行榜，只会鼓励挥霍——这是[[古德哈特定律|古德哈特定律]]的现场演绎：

一旦你考核词元用量，工程师就会优化词元用量，它就不再是好指标了。<button class="pd-ts" data-t="16:31" data-who="嘉宾" data-en="And knowing if your agents are executing well comes down to measuring the right things. Basically, you want to measure outcomes, not tokens. Lines of code and tokens generated are gameable metrics." aria-label="回原文"></button>

Factory 推荐的指标是：从信号到上线的时间、人工干预次数、中位修复时间、代码的货架期、每个合并请求的成本。

最终用户不关心你在 AI 上花了多少钱，只关心能不能感受到实实在在的改进。

## 工程师会被取代吗？

不会。Davis 说得很直接：精确的执行不能弥补糟糕的设计，从来都不能。架构、战略、方向设定，仍然离不开人。

工程师不会被取代，但判断力和优先级排序能力，现在比机械的实现技能更重要。<button class="pd-ts" data-t="15:39" data-who="嘉宾" data-en="It never has. You still heavily need humans in the loop for architecture, for strategy, and for setting direction. Engineers will not be replaced." aria-label="回原文"></button>

智能体处理不了一切，总会有[[护栏|护栏]]要收紧、代码要偏移，人要作为验证关口站在工厂里。

但就像我们不必再往机器里喂打孔卡一样，代码也不必再靠手写。团队设定战略和风险参数，剩下的交给智能体执行。

## 本集带走

- AI 编程从补全到整个文件再到智能体系统，每次抽象升级都让工程师更值钱，而非被淘汰
- 写代码从来不是瓶颈，审核、复现漏洞、文档同步、团队沟通才是
- 搭建软件工厂要从小而可验证的任务（如故障分拣）开始，逐步建立团队信任，最后才闭环
- 不锁定单一模型，按任务选性价比最高的模型，是控制 AI 成本的关键
- 考核要看结果（上线时间、修复时间、人工干预次数），不要看词元消耗量

<div class="pd-sec pd-sec-q">全部金句 <span>17 条</span></div>

> <span class="qz">曾经，自动补全感觉很有魔力，而现在，往好了说，它只是我们记忆中一种古雅的东西。</span>  
> *Now, autocomplete used to feel magical, and now, at best, it's a quaint thing we remember.*  
> <span class="qm">—— Davis Palmie · [01:32]</span> ^q1

> <span class="qz">但抽象阶梯上的每一次上移都让工程师更有价值，而不是更没价值。</span>  
> *But each move up the abstraction ladder has made engineers more valuable, not less.*  
> <span class="qm">—— Davis Palmie · [01:55]</span> ^q2

> <span class="qz">工程师正在从敲代码转向治理智能体。</span>  
> *Engineers are going from typing code to governing agents.*  
> <span class="qm">—— Davis Palmie · [02:07]</span> ^q3

> <span class="qz">正如我们 CEO 喜欢说的，如果你的孩子需要一位代数家教，你肯定能找到比 Albert Einstein 便宜的人。</span>  
> *As our CEO likes to say, if your kid needs a algebra tutor, you can definitely find someone cheaper than Albert Einstein.*  
> <span class="qm">—— Davis Palmie · [03:29]</span> ^q4

> <span class="qz">嗯，我们认为必须押对马是个伪选择，尤其是在开源模型日益有效的情况下。</span>  
> *Well, we think that having to back the right horse is a false choice, especially with the increasing effectiveness of open source models.*  
> <span class="qm">—— Davis Palmie · [03:47]</span> ^q5

> <span class="qz">编码是容易的部分。</span>  
> *Coding was the easy part.*  
> <span class="qm">—— Davis Palmie · [05:01]</span> ^q6

> <span class="qz">如果你拉取你的 Dora 指标，从代码写完到进入生产环境的时间，我敢打赌它远远超过实际做那些工程改动所花的时间。</span>  
> *If you pull your Dora metric, the time from code written to time in production, I would bet dwarfs the time actually making those engineering changes.*  
> <span class="qm">—— Davis Palmie · [05:38]</span> ^q7

> <span class="qz">但一旦你能把这个系统的输出回连到输入信号，那时你就解锁了组织的自我改进。</span>  
> *But once you can tie the output of this system back to the input signal, that's when you unlock organizational self-improvement.*  
> <span class="qm">—— Davis Palmie · [07:55]</span> ^q8

> <span class="qz">举例来说，我们发现你在代码审查上用 GPT 5.2 可以达到和最新 Opus 模型相同的性能，但价格只有一半。</span>  
> *We found, for instance, that you can achieve the same performance on code review with GPT 5.2 as with the latest Opus models, but at half the price.*  
> <span class="qm">—— Davis Palmie · [08:25]</span> ^q9

> <span class="qz">现在如果你看看开源替代品，可以把你的成本砍到便宜 10 到 30 倍。</span>  
> *And now if you look at the open source alternatives, that can slash your costs down to 10 to 30x cheaper.*  
> <span class="qm">—— Davis Palmie · [08:36]</span> ^q10

> <span class="qz">不被锁定在单一实验室，意味着你解锁了 LLM 的整条帕累托前沿。</span>  
> *Not being locked into a single lab means you unlock the entire Pareto frontier of LLMs.*  
> <span class="qm">—— Davis Palmie · [08:51]</span> ^q11

> <span class="qz">用技术术语来说，你的软件工厂应该保守地把这种痛苦从 O(N) 降到 O(1)。</span>  
> *In tech terms, your software factory should take this pain from O of N to O of 1 conservatively.*  
> <span class="qm">—— Davis Palmie · [11:37]</span> ^q12

> <span class="qz">而这个标准应该确保每个人都被拉到最高标准，而不是最低的共同标准。</span>  
> *And this standard should make sure that everyone is pulled to the highest bar, not the lowest common denominator.*  
> <span class="qm">—— Davis Palmie · [11:59]</span> ^q13

> <span class="qz">如果你的智能体和你的人类工程师要走同样的路，那么把路铺好就是双倍有用的。</span>  
> *If your agents and your human engineers are going to walk the same roads, paving them well is doubly useful.*  
> <span class="qm">—— Davis Palmie · [14:35]</span> ^q14

> <span class="qz">但现在，判断力和优先级排序已经胜过了机械式的实现技能。</span>  
> *But judgment and prioritization now beat mechanical implementation skill.*  
> <span class="qm">—— Davis Palmie · [15:49]</span> ^q15

> <span class="qz">基本上，你要衡量的是结果，而不是 token。</span>  
> *Basically, you want to measure outcomes, not tokens.*  
> <span class="qm">—— Davis Palmie · [16:31]</span> ^q16

> <span class="qz">而在于谁能从这些花费中获得最高杠杆的成果。</span>  
> *It's about who can get the highest leverage outcomes from that spend.*  
> <span class="qm">—— Davis Palmie · [17:06]</span> ^q17

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-08-19-pragmatic-from-chrome-devtools-to-ai-engineering|Addy Osmani：从造浏览器到对抗认知投降]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、软件工厂 (software factory)</span>
- [[2025-10-06-talks-agents-for-complex-software-engineering|Vibe debugging：代码生成之后，生产环境才是真正的硬仗]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-06-09-ainativedev-ryan-lopopolo-openai-39-s-framework-for|Harness 工程：让智能体零人工写代码的实操]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-27-talks-what-it-actually-takes-to-build-a-softwa|软件工厂：让智能体闭环造软件，而不只是写代码]]<span class="pd-rz">同公司:Factory · 同概念:开源模型 (open source models)、智能体 (agent)、软件工厂 (software factory)</span>
- [[2026-07-21-trainingdata-factory-s-matan-grinberg-the-coming-dark|Factory CEO Matan:早两年等于错，退款、路由器与软件工厂]]<span class="pd-rz">同公司:Factory · 同概念:智能体 (agent)、软件工厂 (software factory)</span>
- [[2026-08-19-bigtech-nick-bostrom-worries-about-ai-existentia|Nick Bostrom：智能体破笼之后，我们还能驾驭AI吗]]<span class="pd-rz">同概念:开源模型 (open source models)、智能体 (agent)、护栏 (guardrails)</span>

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
