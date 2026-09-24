---
title: 模型一换代系统就崩？evals 才是你该押注的持久资产
podcast: 精选演讲
date: 2026-09-24
source_url: undefined
duration: "23:52"
type: episode
cover: "#64748b"
description: Braintrust 现场 CTO Ameya Bhattavdekar 梳理 AI 应用架构五代演进，主张 evals 必须随每次架构换代同步重写。
guests: ["[[Ameya Bhatawdekar]]"]
companies: ["[[Braintrust]]"]
concepts: ["[[评估]]", "[[智能体]]", "[[RAG]]", "[[React]]", "[[工具调用]]", "[[pass at k]]", "[[pass wedge K]]", "[[记忆系统]]", "[[飞轮]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-20-talks-your-agent-evolved-your-evals-didn-t-ame#post","headline":"模型一换代系统就崩？evals 才是你该押注的持久资产","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-20-talks-your-agent-evolved-your-evals-didn-t-ame","mainEntityOfPage":"https://talk.solomind.cc/2026-08-20-talks-your-agent-evolved-your-evals-didn-t-ame","description":"Braintrust 现场 CTO Ameya Bhattavdekar 梳理 AI 应用架构五代演进，主张 evals 必须随每次架构换代同步重写。","datePublished":"2026-09-24","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Ameya Bhatawdekar"},{"@type":"Organization","name":"Braintrust"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"React"},{"@type":"Thing","name":"工具调用 (tool calling)"},{"@type":"Thing","name":"pass at k"},{"@type":"Thing","name":"pass wedge K"},{"@type":"Thing","name":"记忆系统 (memory system)"},{"@type":"Thing","name":"飞轮 (flywheel)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"模型一换代系统就崩？evals 才是你该押注的持久资产","item":"https://talk.solomind.cc/2026-08-20-talks-your-agent-evolved-your-evals-didn-t-ame"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>模型一换代系统就崩？evals 才是你该押注的持久资产</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 模型一换代系统就崩？evals 才是你该押注的持久资产

<div class="pd-byl"><b>Ameya Bhatawdekar</b> · Braintrust 现场 CTO · 2026-09-24</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-20-talks-your-agent-evolved-your-evals-didn-t-ame.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">架构跟随模型更新，而你的 evals 必须跟随你的架构。</div><div class="a">— Ameya Bhatawdekar <button class="pd-ts" data-t="04:41" data-who="Ameya Bhatawdekar" data-en="And so, you know, architecture follows model updates and your evals have to follow your architecture." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Ameya Bhatawdekar]]
>
> **公司** [[Braintrust]]
>
> **概念** [[评估]] · [[智能体]] · [[RAG]] · [[React]] · [[工具调用]] · [[pass at k]] · [[pass wedge K]] · [[记忆系统]] · [[飞轮]]

这一集是 [[Braintrust|Braintrust]] 的现场 CTO Ameya Bhattavdekar 的演讲。Braintrust 是一个可观测性平台（帮 AI 团队看清自己系统哪里出了问题的工具），他讲的主题是：过去三年，AI 应用架构换了一代又一代，每换一代，你原来建的[[评估|评估]]体系（evals，用来验证系统是否可靠的那套测试）就作废一层——而 evals 恰恰才是你手里最该长期投资的资产 <button class="pd-ts" data-t="22:11" data-who="嘉宾" data-en="to continually not only get new failure examples for known failure modes, but more importantly, as they make these systemic architectural changes, they're able to also understand the new ways in which your system is going to fail and build out effective datasets from production data." aria-label="回原文"></button>。

钩子在这里：demo 很容易搭，生产级很难做——这不是因为你当初建错了，而是因为你周围的一切变得太快。模型每隔几个月出一个新版本，每次都不是渐进升级，而是「阶跃式变化」：更擅长调用工具、处理超长上下文、生成能安全执行的代码、[[记忆系统|记忆系统]]变得实用 <button class="pd-ts" data-t="02:01" data-who="嘉宾" data-en="The data that your application works with changes, and all of those things require you to continually make changes to your applications. And so if you look at the rate at which the models have evolved over the last couple of years, it's truly astonishing." aria-label="回原文"></button>。

旧系统是围绕旧模型的局限设计的——你写了一大堆补丁逻辑去兜底模型不会调工具、会出错的问题。新模型一来，这些补丁反而成了拦路石：不彻底重构架构，你根本吃不到新能力 <button class="pd-ts" data-t="03:29" data-who="嘉宾" data-en="Well, the models, the previous system that you built was built with some assumptions around the existing limitations and the constraints that the models had, right?" aria-label="回原文"></button>。而架构一动，你的 evals 也必须跟着动，因为每个新能力都带来新的出错面 <button class="pd-ts" data-t="04:26" data-who="嘉宾" data-en="But that means that you also now have to update your evals, the way you ensure that your system is going to operate reliably, right? Because every new unlock is potentially also giving you new surface area where things can go wrong." aria-label="回原文"></button>。

## 五代架构：每一代怎么坏，evals 就怎么变

他用一个贯穿全场的例子来讲：一个 SRE [[智能体|智能体]]（运维智能体），既能读信息，也能动手——回滚一次部署，或者升级给人处理、呼叫我一个人。它有读工具也有写工具 <button class="pd-ts" data-t="05:13" data-who="嘉宾" data-en="And so, what I want to talk about is on the subsequent slides, I'll share a bunch of notional evals, but I want them to be grounded in a real agent. In this case, we are going to look at this SRE agent." aria-label="回原文"></button>。

**第一代：单次提示词。** 一个输入、一次模型调用、一个输出。

评估只看最终答案：准不准、有没有幻觉、是不是引用了过时的训练知识。做法是攒一个黄金数据集，定义好几套评分标准，对着答案打分。够用，但很窄——没有[[工具调用|工具调用]]、没有编排、没有检索 <button class="pd-ts" data-t="05:40" data-who="嘉宾" data-en="So, let's see how this system would have evolved through the various generations of AI architectures. So, let's start with the simplest case, right? This is how a lot of AI applications started about three years ago." aria-label="回原文"></button>。

**第二代：链（Chain），典型是 [[RAG|RAG]]。** 调模型之前先跑一组步骤：解析用户输入 → 检索信息 → 拼上下文 → 交给模型综合出答案。

失败点一下子多了：解析器可能提错信息、检索可能拿错上下文、模型可能在长上下文里犯迷糊（早期模型窗口虽大但推理不动，即「上下文堆塞」问题）。所以你必须对每个环节分别做 eval，才能定位哪里出了错 <button class="pd-ts" data-t="06:57" data-who="嘉宾" data-en="It's just a simple call to the model. But the next iteration of this was the chain. This is where you started doing a set of steps before you actually made the model call, right?" aria-label="回原文"></button>。

**第三代：[[React|ReAct 循环]]。** 2023 年中后期到 24 年初，ReAct 论文火了：让模型在循环里跑，自己发起工具调用、看返回结果、推理出下一步，循环到满足用户意图或耗尽迭代预算。

想法很好——系统不再被钉死在固定工作流里，能自我编排。但那个年代的模型撑不住：参数写错、调错工具、出现「上下文坍塌」。想法没兑现承诺 <button class="pd-ts" data-t="08:14" data-who="说话人" data-en="Like, it did things a very specific way all the time, right? And so in late, mid-late 2023, early 24, the React paper became really popular. And so folks were looking at building" aria-label="回原文"></button>。

**第四代：工作流图。** 模型控制不住怎么办？

把控制权拿回来，固化到系统里——把编排、执行、规划逻辑写成图或状态机，模型只在节点层面干活。可靠性和可预测性大幅提升，24 年底、25 年初大量生产系统是这么建的。

但代价是：系统只为特定的一组意图设计，一旦用户需求超出编排范围，系统就在接缝处崩裂；你只能往图里加特殊分支去兜，失败面越堆越多——分支一致性、节点间契约、分类节点自己犯错。evals 也随之膨胀：除了整体编排，还要做节点级 eval，还要测分支逻辑和重试循环 <button class="pd-ts" data-t="09:46" data-who="嘉宾" data-en="you know dealing with long contexts so you had things like context collapse and so while the idea was like really really exciting it fell short of delivering on the actual promise." aria-label="回原文"></button>。

**第五代（现在）：回到循环，但这次模型扛住了。** 25 年中后期，Anthropic 和 OpenAI 推出的一些惊人的新模型能力让工具调用变得极其可靠，规划更准、能管长时程任务、偏了能自己拉回正轨。

基于图的系统反而吃不到这些新能力，于是大家回头重造 ReAct 循环，这次真的能用了 <button class="pd-ts" data-t="13:09" data-who="嘉宾" data-en="And so a lot of systems are now implemented using certain frameworks and they were now in production. But then Anthropic and OpenAI launched some amazing new model capabilities mid-late 25." aria-label="回原文"></button>。但新问题是方差：同一个输入跑几次，轨迹截然不同，只是答案都对。

eval 的单位不再是「跑一次」，而是「跑 k 次看分布」——由此出现了两个新指标：[[pass at k|pass at k]]（同一 eval 跑 k 次至少成功一次吗？衡量能力上限）和 pass wedge k（k 次里成功几次？

衡量可靠性）。一个 pass at k 很高的系统，要靠 pass wedge k 才能判断它到底可不可靠 <button class="pd-ts" data-t="14:32" data-who="嘉宾" data-en="They could make those tool calls, they could figure out the next step, and then they could essentially go in and fulfill the user intent. But the way they worked was very, it had a high degree of variance." aria-label="回原文"></button>。

再往后，系统已经不是「循环里的模型」而是「产品化系统」：外围多了记忆系统（跨会话存取经验）、代码执行沙箱（安全地跑模型生成的代码）、MCP 和技能目录（让模型接入外部能力的扩展机制）、技能仓库。你如果还拿着上一代的 evals，对这些新面就是部分覆盖——系统在新解锁的地方怎么脆弱，你根本看不见 <button class="pd-ts" data-t="16:07" data-who="嘉宾" data-en="Right? And then, more recently, what we've seen is there's a big shift from your system is not just a model running in a loop, right? It becomes a product system." aria-label="回原文"></button>。

## 飞轮人人都懂，多数团队就是不做

模式很清楚：模型创新 → 架构换代 → evals 必须跟着换代。归根结底，evals 是那种描述「系统应该如何运作」的持久资产，代际转换时它是你的保险：保证原来正常的东西没坏，同时新能力确实解锁了 <button class="pd-ts" data-t="18:14" data-who="嘉宾" data-en="Right? Because ultimately, it's the evals that are sort of your durable asset that describe how your system is supposed to work. And as you go through these generational shifts, that's a good way to ensure that your system, your users experience your system in a way that things that were working are not broken, but it's unlocked a bunch of new capability." aria-label="回原文"></button>。

配套的是那条著名的[[飞轮|飞轮]]：从生产环境采集数据 → 反哺 evals → 让 evals 反映真实世界。Ameya 说他和很多团队聊过，大家都嘴上接受，实践中大量团队并不执行——evals 基本是静态的，于是逐渐失效 <button class="pd-ts" data-t="19:04" data-who="嘉宾" data-en="And this is the way that, you know, teams that are doing a great job at building and shipping and improving their AI systems, they follow this workflow pretty religiously." aria-label="回原文"></button>。

尤其代际转换时，你需要的机制不只是抓你「预料到」的失败（那些你已在 evals 里定义了什么算好），更要照亮「没预料到」的新失败类型——系统一定会以你没想过的新方式坏掉 <button class="pd-ts" data-t="19:47" data-who="嘉宾" data-en="And especially as you go through this generational shift, it's really important that you need a mechanism to not only harvest data from production in a way that shows you failures that" aria-label="回原文"></button>。

Braintrust 对此的做法是一个叫 Topics 的功能：对所有生产数据做聚类分析，自动浮现你没设护栏、也没写 eval 覆盖的新失败类别，团队据此扩展 eval 集合。这样既持续拿到已知失败模式的新案例，更能在架构大改时看清新失败方式，从生产数据建出有效数据集 <button class="pd-ts" data-t="20:29" data-who="嘉宾" data-en="Shine a light on things that are broken in ways that you had anticipated but also broken in a way in ways that you had not anticipated and this is really important." aria-label="回原文"></button>。

## 本集带走

- **换模型 ≠ 换零件**：旧系统里兜底模型缺陷的补丁逻辑，正是吃不到新能力的原因；要吃到新解锁，就得重新架构，而不是 drop-in 替换。
- **架构每次换代，evals 同步重写**：单次调用查答案 → 链式查每个环节 → 图架构加节点级、分支、重试 eval → 循环架构看 k 次分布。拿旧 eval 测新架构 = 系统性盲区。
- **循环架构用两个指标分开看**：pass at k 量能力（k 次至少成一次），pass wedge k 量可靠性（k 次成几次）；能力高不等于可靠。
- **别让 evals 静态化**：飞轮（生产数据 → 新 eval 用例）人人都认可但多数人不执行，不执行它 evals 就在悄悄失效。
- **专门防「没想到的失败」**：用聚类分析之类的手段在生产数据里找未预期的新失败类别——系统一定会以你没预料到的方式坏。
- **这是长期战**：模型不会放缓、没到平台期，未来几个月到几年你都要对 AI 智能体做大量「手术」，健壮的 evals 纪律是管理代际变化的根本 <button class="pd-ts" data-t="22:11" data-who="嘉宾" data-en="to continually not only get new failure examples for known failure modes, but more importantly, as they make these systemic architectural changes, they're able to also understand the new ways in which your system is going to fail and build out effective datasets from production data." aria-label="回原文"></button>。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">架构跟随模型更新，而你的 evals 必须跟随你的架构。</span>  
> *And so, you know, architecture follows model updates and your evals have to follow your architecture.*  
> <span class="qm">—— Ameya Bhatawdekar · [04:41]</span> ^q1

> <span class="qz">你接过控制权，并把这种控制固化到你在模型周围构建的系统中。</span>  
> *You take the control and you bake that control into the system that you're building around the model.*  
> <span class="qm">—— Ameya Bhatawdekar · [09:51]</span> ^q2

> <span class="qz">你期望某一套应用或用户交互能很好地工作，因为它们可以由你设计好的编排来完成，但当用户意图需要超出编排所规定范围的其他事情时，系统就会开始在接缝处崩裂。</span>  
> *You expect a certain set of applications or user interactions to work well because they can be fulfilled by the orchestration that you have designed, but when the user intent requires other things to happen beyond what's specified in the orchestration, the system can start breaking at the seams.*  
> <span class="qm">—— Ameya Bhatawdekar · [10:55]</span> ^q3

> <span class="qz">因为归根结底，evals 才是那种描述你的系统应该如何运作的持久资产。</span>  
> *Because ultimately, it's the evals that are sort of your durable asset that describe how your system is supposed to work.*  
> <span class="qm">—— Ameya Bhatawdekar · [18:14]</span> ^q4

> <span class="qz">在接下来的几个月、几年里，你将会对你的 AI 智能体做大量的「手术」。</span>  
> *You'll be doing a lot of surgery on your AI agents in the coming months, years.*  
> <span class="qm">—— Ameya Bhatawdekar · [22:36]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2025-09-16-talks-evaluating-agents-with-braintrust|Braintrust CEO Ankur Goyal:做 AI 评估的纪律八年不变，但玩法正在剧变]]<span class="pd-rz">同公司:Braintrust · 同概念:智能体 (agent)、评估 (evals)</span>
- [[2026-01-11-lennys-what-openai-and-google-engineers-learned|AI 产品不能照搬软件老办法：从高控制低自主开始]]<span class="pd-rz">同概念:智能体 (agent)、评估 (evals)、飞轮 (flywheel)</span>
- [[2025-09-21-lennys-from-managing-people-to-managing-ai-juli|Julie Zhuo：管理者的核心技能，就是驾驭AI的技能]]<span class="pd-rz">同概念:智能体 (agent)、评估 (evals)、可观测性 (observability)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同公司:Braintrust · 同概念:智能体 (agent)、评估 (evals)、可观测性 (observability)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:智能体 (agent)、评估 (evals)、可观测性 (observability)</span>
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同概念:智能体 (agent)、评估 (evals)</span>

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
