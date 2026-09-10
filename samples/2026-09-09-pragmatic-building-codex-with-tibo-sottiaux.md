---
title: "Codex 负责人亲述:OpenAI 内部如何造编程智能体"
podcast: The Pragmatic Engineer
date: 2026-09-10
source_url: undefined
duration: "73:20"
type: episode
cover: "#64748b"
description: "OpenAI Codex 团队负责人 Thibaut 讲述 Codex 的诞生:为何用 Rust、为何开源不绑自家模型、harness 与模型如何协同进化,以及合并进 ChatGPT 背后的工程挑战。"
host: "[[Tibo Sottiaux]]"
companies: ["[[Codex]]", "[[OpenAI]]", "[[ChatGPT]]", "[[ChatGPT work]]"]
concepts: ["[[harness]]", "[[智能体]]", "[[Rust]]", "[[开源]]", "[[沙箱]]", "[[代码审查]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-09-pragmatic-building-codex-with-tibo-sottiaux#post","headline":"Codex 负责人亲述:OpenAI 内部如何造编程智能体","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-09-pragmatic-building-codex-with-tibo-sottiaux","mainEntityOfPage":"https://talk.solomind.cc/2026-09-09-pragmatic-building-codex-with-tibo-sottiaux","description":"OpenAI Codex 团队负责人 Thibaut 讲述 Codex 的诞生:为何用 Rust、为何开源不绑自家模型、harness 与模型如何协同进化,以及合并进 ChatGPT 背后的工程挑战。","datePublished":"2026-09-10","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Tibo Sottiaux"},{"@type":"Organization","name":"Codex"},{"@type":"Organization","name":"OpenAI"},{"@type":"Organization","name":"ChatGPT"},{"@type":"Organization","name":"ChatGPT work"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"Rust"},{"@type":"Thing","name":"开源 (open source)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"代码审查 (code review)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"Codex 负责人亲述:OpenAI 内部如何造编程智能体","item":"https://talk.solomind.cc/2026-09-09-pragmatic-building-codex-with-tibo-sottiaux"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Codex 负责人亲述:OpenAI 内部如何造编程智能体</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Codex 负责人亲述:OpenAI 内部如何造编程智能体

<div class="pd-byl"><b>Tibo Sottiaux</b> · OpenAI Codex 团队负责人 · 2026-09-10</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-09-pragmatic-building-codex-with-tibo-sottiaux.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果你把所有东西都写在同一个代码库里、同一种语言里,那不可避免地你会写得有点草率,你会把不该纠缠的东西纠缠在一起。</div><div class="a">— Tibo Sottiaux <button class="pd-ts" data-t="19:54" data-who="Tibo Sottiaux" data-en="And if you write everything in the same code base, in the same language, it's like inevitably you're going to be a little bit sloppy and you're going to intertwine things more than you should." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Tibo Sottiaux]]
>
> **公司** [[Codex]] · [[OpenAI]] · [[ChatGPT]] · [[ChatGPT work]]
>
> **概念** [[harness]] · [[智能体]] · [[Rust]] · [[开源]] · [[沙箱]] · [[代码审查]]

这一集聊的是 [[OpenAI|OpenAI]] 的编程[[智能体|智能体]] [[Codex|Codex]]——它是怎么起步的、为什么做成了今天这个样子。主角是 Thibaut,他在 Codex 作为产品立项时就在场,并从那时起一直领导着更广的 Codex 团队。

他的经历有点意思:大学学应用数学,在比利时做过医药供应链优化的创业公司,2015 年进 Google,做过让网页更快的产品(两年后被砍掉,他从中学会「永远质疑你项目的影响力」),后来转去 DeepMind 做研究基础设施——在那里,他参与给一个内部大语言模型搭了套聊天界面,比 [[ChatGPT|ChatGPT]] 早了约一年,在 DeepMind 内部像野火一样传播,但因为 DeepMind 没有产品化条件没能对外发布。2024 年他加入 OpenAI,恰逢推理模型发布前夕,随后开始做 Codex 的前身。

## 为什么反直觉地用 Rust 写 Codex

当时模型对 [[Rust|Rust]] 并不在分布内——也就是写 Rust 不如写 Python、TypeScript 好。但 Thibaut 团队从第一性原理出发,把「智能体核心」和「产品界面」当成两个不同的东西:核心要稳健、安全、为效率和规模而工程化。

做过从玩具到数据中心规模项目的人都知道,早期决定非常关键。他们团队有一批很强的 Rust 工程师,而且 Rust 静态编译验证的特性对智能体反而友好——编译器本身就是一层即时反馈。

更重要的设计原则是:智能体与产品干净分离,「如果你把所有东西写在同一个代码库、同一种语言里,不可避免会写得草率,把不该纠缠的东西纠缠在一起,然后阻止之后的进一步创新」<button class="pd-ts" data-t="19:54" data-who="Thibaut" data-en="It was a very important principle. And if you write everything in the same code base, in the same language, it's like inevitably you're going to be a little bit sloppy and you're going to intertwine things more than you should." aria-label="回原文"></button>。Rust 的边界在物理上强制了这种分离。

## 为什么开源、为什么允许接别家模型

在所有大实验室里,Codex 是独一无二的:CLI、SDK 全[[开源|开源]]。理由很直接:你在造一个编码智能体,它自然会指向它自己,能靠社区改进它、从中学到很多;而且他们判断如果自己成功了,开源和代码的角色本身都会变,「如果你不亲眼见证问题,就很难解决它们」<button class="pd-ts" data-t="21:22" data-who="Thibaut" data-en="And so being part of that community seemed important instead of divorced from it. I think, you know, it's hard to solve problems if you don't sort of like witness them yourself." aria-label="回原文"></button>。

诚实的代价也有:别人可能在你发布前就把你公开开发的功能抄走(「有点难过,但这是游戏的一部分」);被随机贡献淹没,要应付这笔「额外的税」;跨仓库工作要划人为边界。好处是新员工入职前就看过仓库和 PR,上手极快。

同样反直觉的是,Codex 不绑定 OpenAI 模型。Thibaut 的逻辑:开源之下,任何人 fork 加 10 行代码就能接别家模型,逼人用 fork 只会给自己制造负担——「为什么不一开始就支持呢」。

而且用户明天可能想试新模型,强迫人家换整套环境很蠢,挡掉这类反馈更亏。「为什么要强迫你彻底改变你的整个环境,就为了试一个新模型?」<button class="pd-ts" data-t="26:31" data-who="Thibaut" data-en="You want to try that. Why force you to go and completely change your setup just to try a new model? And then we benefit from the feedback that we didn't get, which is maybe there's something that you liked about that model." aria-label="回原文"></button> 底层态度是:靠最好的模型、最好的产品赢,不靠锁定赢。

## harness 与模型:拐杖会不断消失

他给了一个理解 Codex 演进的关键框架:「[[harness|harness]] 总是比模型领先一点」<button class="pd-ts" data-t="36:27" data-who="Thibaut" data-en="Yeah, this is a good question. So the harness, in a sense, is always a little bit ahead of the model. Oh, really?" aria-label="回原文"></button>。所谓 harness(围绕模型的工具与执行框架),角色是给模型配「拐杖」:护栏、安全、效率、可控性,还有每轮注入上下文的开发者消息。

早期模型不会主动跑测试,你得提醒;后来训练模型学会反思你真正想要什么,这些提示就不需要了。所以随时间推移,开发者消息在缩减,harness 也在缩减。

团队的工作方式是研究与工程协同设计:发现弱项或想做新功能时,先问这是 harness 层改还是模型层改,模型层多快能修——如果一个月内模型能解决,可能根本不在 harness 里动手。他给开发者的忠告:「如果你在搭建一个一万行的代码拐杖来绕过模型的缺陷,那你很可能在做错误的事情」<button class="pd-ts" data-t="42:29" data-who="Thibaut" data-en="Care about the models and where they're going. If you're doing something and you're building like this 10,000 lines of code crutch to work around the model flaws, you're probably doing the wrong thing." aria-label="回原文"></button>。

反馈分析也全程用智能体完成:跨编程、金融、营销等所有使用场景归纳主题、排优先级。

## 内部怎么开发软件:评审、维护、架构都变了

OpenAI 内部 Codex 默认接入一切——Slack、所有文档、所有代码。新人最常听到的一句话是「你问过 Codex 了吗」。团队刻意在公开频道工作、宽权限开放文档,就是为了让智能体能推理所有上下文。

[[代码审查|代码评审]]的分工正在重划。他们早早就和研究部门做了代码评审模型,能深挖三四层依赖、发现文档本身是错的这类需要人类数小时才能抓到的逻辑错误,现在这能力已并入主线模型:「当我们做基准测试时,它们在代码评审上是超越人类的」<button class="pd-ts" data-t="47:53" data-who="Thibaut" data-en="Spot these mistakes by doing deep verification are just part of the mainline models. When we benchmark them, it's like they're superhuman in code review. And this is not just true for correctness." aria-label="回原文"></button>。

安全检查是全 OpenAI 所有 PR 的强制项,标出严重漏洞会直接阻止合并,全自动。评审里「正确性」这层被自动化拿走了,留下的是关于意图的讨论——你到底想做什么、值不值得做——而且这种讨论不必发生在代码旁边。他有个「盒子与不变量」的心智模型:你们就该约定清楚盒子做什么、必须满足哪些不变量(资源、数据访问、安全),至于盒子内部,「可以是字面意义上的任何东西」,你不需要在意。

维护这口锅也轻了。依赖升级这种没人爱干但又关乎安全的事,模型横扫代码库几小时搞定。

更重要的是重构和重架构曾是要几年的昂贵工程,现在被极度加速——「犯错的成本在下降」<button class="pd-ts" data-t="53:03" data-who="Thibaut" data-en="And I think this is also super, super accelerated now. So the cost of mistakes, I would say, is going down. But then at the same time," aria-label="回原文"></button>。于是软件工程的老规则反而更值钱:好的抽象、画出正确的盒子形状,让盒子内改动不影响其余系统。还有一点很震撼:以前一个产品一年才慢慢加到几十上百个工程师,「突然你有一百个智能体在为这个东西做贡献」的事,现在一个周末就能发生——软件生命周期被整体压缩了。

## 合并进 ChatGPT:表面轻描淡写,底下全是工程

Codex 出现在 ChatGPT 应用里,用户看着平平无奇,实际是两个完全不同技术栈的合并:ChatGPT 完全托管、云端、为规模和效率而建;Codex 完全本地。合并的目标是让本地智能体的能力变成云版本,服务数亿用户且高效到能纳入 20 美元的 plus 套餐。

云端那台机器意外地强大:有互联网访问、非常宽容,有用户让它在里面装 Blender 做 3D 建模,甚至训练另一个模型。整个合并过程里,Codex 自己充当了「记者」——它读得到所有 Slack 讨论和文档,把团队关于怎么合并、怎么命名、work 开关对不对的激烈辩论全程记录了下来。方向是完全统一:「你要构建的是一个统一的产品,让你接触到同样的智能,但是以你想使用的方式来使用它」<button class="pd-ts" data-t="64:57" data-who="Thibaut" data-en="You shouldn't feel like you can do something in Codex that you can't do in ChatGPT or vice versa. What we're trying to build is one unified product that gives you access to the same intelligence, but in the way that you want to use it." aria-label="回原文"></button>。

## 他本人怎么用:日程像俄罗斯方块,却干得更多

Peter Steinberger 让主持人问他:日程表像俄罗斯方块,你怎么还这么愉快?答案是把大量工作移到手机上的 [[ChatGPT work|ChatGPT work]]:开会间隙用语音听写派任务、提问题,配一整套自定义技能和指令,让它按他能高效消化的风格产出报告和代码探索。

「我有的任何问题,都能在 30 分钟内得到答案」——Slack、Notion、Google Docs 里的公开信息全在 Codex 射程内。周末他还会做代码探索和原型:醒来想到一个想法,一天之内做出东西给人看、被批评、给团队启发,然后把它从脑子里清空,继续干别的。

## 本集带走

- **架构分离要靠物理边界强制**:Codex 把智能体核心(Rust)和产品界面分开,同一代码库必然长出纠缠, Languages 边界是护栏不是装饰。
- **harness 是暂时性拐杖**:凡是你在 harness 里绕模型缺陷写的补丁,下一版模型大概率会自己学会——与其堆一万行拐杖代码,不如判断该等模型还是该动手。
- **评审重点从代码转向意图**:正确性、安全类评审已被超越人类的模型接管(OpenAI 已强制拦截带安全漏洞的 PR),人该谈的是「要做什么、值不值得做」以及盒子的不变量。
- **好抽象在 AI 时代更值钱**:重构成本暴跌、犯错成本下降,但画出正确的盒子边界决定了你能不能让改动锁在盒子内。
- **个人杠杆的极限在被重写**:语音听写 + 接入全部工作上下文的个人智能体,把「任何问题 30 分钟内得到答案」变成日常;想法到原型可以压缩到一天。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">如果你把所有东西都写在同一个代码库里、同一种语言里,那不可避免地你会写得有点草率,你会把不该纠缠的东西纠缠在一起。</span>  
> *And if you write everything in the same code base, in the same language, it's like inevitably you're going to be a little bit sloppy and you're going to intertwine things more than you should.*  
> <span class="qm">—— Tibo Sottiaux · [19:54]</span> ^q1

> <span class="qz">为什么要强迫你彻底改变你的整个环境,就为了试一个新模型?</span>  
> *Why force you to go and completely change your setup just to try a new model?*  
> <span class="qm">—— Tibo Sottiaux · [26:31]</span> ^q2

> <span class="qz">从某种意义上说,harness 总是比模型领先一点。</span>  
> *So the harness, in a sense, is always a little bit ahead of the model.*  
> <span class="qm">—— Tibo Sottiaux · [36:27]</span> ^q3

> <span class="qz">如果你在做某件事,而且你在搭建一个一万行的代码拐杖来绕过模型的缺陷,那你很可能在做错误的事情。</span>  
> *If you're doing something and you're building like this 10,000 lines of code crutch to work around the model flaws, you're probably doing the wrong thing.*  
> <span class="qm">—— Tibo Sottiaux · [42:29]</span> ^q4

> <span class="qz">但出人意料的是,无论你是在 Codex 还是 ChatGPT 上发布,流程都很相似——尽管 ChatGPT 推向十亿活跃用户而且还在增长,你可以提交一个 PR、做一个改动,第二天甚至同一天发布,它就推向十亿用户,而且没问题。</span>  
> *But it's surprisingly a similar process, whether you ship on Codex or ChatGPT, even though ChatGPT goes out to a billion active users and growing, you can ship a PR, you can make a change and get it shipped the next day or even the same day, and it just goes out to a billion users and it's fine.*  
> <span class="qm">—— Tibo Sottiaux · [43:33]</span> ^q5

> <span class="qz">当我们做基准测试时,它们在代码评审上是超越人类的。</span>  
> *When we benchmark them, it's like they're superhuman in code review.*  
> <span class="qm">—— Tibo Sottiaux · [47:53]</span> ^q6

> <span class="qz">维护其实就像一种你随时间支付、只为让事情保持运转的税。</span>  
> *Maintenance is really like sort of like a tax that you pay over time just to keep things running.*  
> <span class="qm">—— Tibo Sottiaux · [51:35]</span> ^q7

> <span class="qz">回到那个带有不变量的盒子,如果你画出正确的形状,你就能在盒子内更快地改变东西,而不影响其余的服务或其余的基础设施。</span>  
> *Going back to having the box with invariants, if you draw the right shape, you're going to be able to change things much more quickly within the box and not affect the rest of the services or the rest of your infrastructure.*  
> <span class="qm">—— Tibo Sottiaux · [53:16]</span> ^q8

> <span class="qz">如果你无法解释你想要达成什么,如果你无法解释你的意图,如果你没有与一个社区的联结,如果你没有品味,做出出色的工作会难得多。</span>  
> *Like if you can't explain what you're trying to achieve, if you can't explain your intent, if you don't have a tie to a community, if you don't have the taste, it's going to be much harder to do great work.*  
> <span class="qm">—— Tibo Sottiaux · [70:55]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当写代码变便宜,OpenAI Codex负责人说「品味」成了最贵的资源]]<span class="pd-rz">同公司:ChatGPT、Codex、OpenAI · 同概念:智能体 (agent)</span>
- [[2026-07-09-talks-the-golden-age-of-ai-engineering-alexand|OpenAI 开发者日：从结对编程到指挥智能体大军]]<span class="pd-rz">同公司:Codex、OpenAI · 同概念:harness、智能体 (agent)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同概念:Rust、代码评审 (code review)、智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-07-twentyvc-20vc-the-100-billion-ai-assistant-race-t|邮箱里的 AI 助手：Plaid 前 CTO 谈如何在巨头围剿下赢]]<span class="pd-rz">同公司:ChatGPT、Codex、OpenAI、Google · 同概念:智能体 (agent)、护栏 (guardrails)</span>
- [[2026-08-30-lennys-ais-third-era-the-rise-of-persistent|OpenAI 产品负责人谈：AI时代怎么做产品、写文档、抬野心]]<span class="pd-rz">同公司:ChatGPT、Codex、OpenAI · 同概念:智能体 (agent)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同公司:OpenAI · 同概念:harness、智能体 (agent)、沙箱 (sandbox)、护栏 (guardrails)</span>

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
