---
title: 一个月2500个代码合并是怎么做到的：专访pstack作者Potato
podcast: 精选演讲
date: 2026-10-11
source_url: undefined
duration: "65:34"
type: episode
cover: "#64748b"
description: Cursor(现SpaceX AI)工程师Potato讲述他如何用验证、环境和自动化循环，让AI代理自己写代码、自己审查、自己合并。
host: "[[Poteto]]"
companies: ["[[Cursor]]"]
concepts: ["[[pstack]]", "[[智能体]]", "[[技能]]", "[[验证]]", "[[信任阶梯]]", "[[内环与外环]]", "[[确定性]]", "[[lint 规则]]", "[[协调者智能体]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-03-talks-live-poteto-creator-of-pstack-on-shippin#post","headline":"一个月2500个代码合并是怎么做到的：专访pstack作者Potato","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-03-talks-live-poteto-creator-of-pstack-on-shippin","mainEntityOfPage":"https://talk.solomind.cc/2026-10-03-talks-live-poteto-creator-of-pstack-on-shippin","description":"Cursor(现SpaceX AI)工程师Potato讲述他如何用验证、环境和自动化循环，让AI代理自己写代码、自己审查、自己合并。","datePublished":"2026-10-11","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Poteto"},{"@type":"Organization","name":"Cursor"},{"@type":"Thing","name":"pstack"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"技能 (skills)"},{"@type":"Thing","name":"验证 (verification)"},{"@type":"Thing","name":"信任阶梯 (trust ladder)"},{"@type":"Thing","name":"内环与外环 (inner loop)"},{"@type":"Thing","name":"确定性 (deterministic)"},{"@type":"Thing","name":"lint 规则 (lint)"},{"@type":"Thing","name":"协调者智能体 (coordinator agent)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"一个月2500个代码合并是怎么做到的：专访pstack作者Potato","item":"https://talk.solomind.cc/2026-10-03-talks-live-poteto-creator-of-pstack-on-shippin"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>一个月2500个代码合并是怎么做到的：专访pstack作者Potato</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 一个月2500个代码合并是怎么做到的：专访pstack作者Potato

<div class="pd-byl"><b>Poteto</b> · Cursor（现SpaceX AI）工程师 · 2026-10-11</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-03-talks-live-poteto-creator-of-pstack-on-shippin.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">而是变成了你能否以智能体能理解并真正执行的方式，清晰地表达你的意图和目标。</div><div class="a">— Poteto <button class="pd-ts" data-t="07:22" data-who="Poteto" data-en="It becomes your ability to express your intent and your goals in a clear way that the agent can understand and actually carry out." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Poteto]]
>
> **公司** [[Cursor]]
>
> **概念** [[pstack]] · [[智能体]] · [[技能]] · [[验证]] · [[信任阶梯]] · [[内环与外环]] · [[确定性]] · [[lint 规则]] · [[协调者智能体]]

他叫Potato,前Meta React团队成员，现供职于[[Cursor|Cursor]](现已更名为SpaceX AI),也是开源[[技能|技能]]库[[pstack|pstack]]的作者。

他不久前在X上发了一场演讲，讲自己一个月向生产环境提交了2500个拉取请求，浏览量约300万。

这次对谈基本围绕那场演讲展开：信任是怎么一步步攒起来的，人从流水线上退出来之后还剩什么工作。

## 为什么要盯着一个AI代理看？因为你自己成了瓶颈

Potato的故事从倦怠期的一个副业项目开始。

当时他用AI写代码，却发现自己在花好几个小时盯着、反复纠正一个代理的输出，像个“监工”。

后来加入Cursor做代理窗口的性能优化，同样的问题又出现了：

他泡在火焰图和内存快照里，自己成了代理和Chrome开发者工具之间的“人肉代理”。

他的解法是把职业判断变成代理能用的东西——写代码的流程、[[验证|验证]]的习惯、踩过的坑。

在他的经验里，哪怕是最新最强的模型，也倾向于抄近路、挑简单的做。

所以他构建的很多技能，核心都是一件事：**让简单的事恰好就是正确的事**。<button class="pd-ts" data-t="06:07" data-who="嘉宾" data-en="Because I think agents, from my experience, even the frontier ones, tend to tend to take shortcuts. They tend to do the easy thing." aria-label="回原文"></button>

## 领域专家贬值了吗？恰恰相反

主持人问了个流行问题：AI这么强，行业知识是不是不值钱了？Potato的判断相反。

**模型越强，瓶颈越不在代理这边，而在你能不能把意图和目标讲清楚**、让代理真正执行到位。

一个医生或律师，只要懂点技术、会用代理，加上自己脑子里清晰的愿景，就能做出很好的产品。<button class="pd-ts" data-t="08:23" data-who="嘉宾" data-en="If they have a clear enough vision in their head and they can articulate it in a way that the agent can build it, I think that that is really the bottleneck these days is the transfer of your intent and your vision to the agent." aria-label="回原文"></button>

这也是两人共同痴迷语言的原因。

Potato举例说，让代理消灭“同义反复的测试”(tautological tests)——一个词就压缩了大量意图，代理会抓住这个词反复强化。

而主持人是戏剧专业出身，研究莎士比亚多年，他感叹现在是自然语言和编程语言的交汇点，本质上全是沟通。

## 别叫软件工厂，叫米其林厨房

Potato不喜欢“软件工厂”这个词——不是因为不准确，而是工厂让人联想到流水线和廉价，联想不到品质和手艺。

他更愿意用米其林厨房来打比方。

在家做饭，你一个人切菜、备料、收拾，是单人秀。突然全家挤进厨房，你多半会崩溃。而主厨的位置完全不同：

他不亲自炒每道菜，却要操心什么时候订食材、怎么储存、怎么备料——他既是厨房的技术负责人，也是厨房的CEO。

今天的工程师正走向这个位置：代码是代理写的，但最终结果和你的名誉绑在一起。代码库、技能、环境，就是新时代的食材。<button class="pd-ts" data-t="14:15" data-who="嘉宾" data-en="And so the Michelin kitchen metaphor to me works really well in that regard because as a chef, if you become a chef, you're in a position where you're not necessarily cooking all the food yourself anymore, but you are thinking..." aria-label="回原文"></button>

## 最重要的一个技能：让代理自己验证自己的工作

Potato反复强调，就算不用pstack,工具箱里也必须有一个技能——验证(verification)。

意思很简单：给代理装上“手和眼睛”，让它自己运行代码、像真人用户一样点来点去、调试、抓取快照。

代理看不到自己工作的结果，就无从迭代；能看到了，它就形成了一个闭环，人从环里退了出去。

有了闭环，他就能做“爬山”：定一个评分标准，让代理不断尝试改进。

他说**验证是pstack里最重要的技能**，也是他入职Cursor后写的第一个技能。

团队内部如今每个应用都有一个自动维护的验证技能，已经成了关键基础设施。

## 判断留给AI,机械的活写成脚本

验证技能里藏着一个更深的原则：把[[确定性|确定性]]的部分从代理手里拿走。

比如把代码从一种模式机械地迁移到另一种，根本不需要代理每次重新发明做法——早期没有命令行工具时，每个代理都“重建整个世界”，各干各的，上次能用的脚本这次就扔了。

Potato把这些确定性的部分封装成技能内部的命令行工具，代理只负责需要判断的那部分。

他的总结是：**充分利用确定性和非确定性，让代理在它擅长的非确定性部分发光**。<button class="pd-ts" data-t="24:11" data-who="嘉宾" data-en="That's another core thing or one of my core principles that I like to think about is how do I make very efficient use of determinism and non-determinism and let agents shine at the non-deterministic parts because that's what they're trained to do." aria-label="回原文"></button>

## 环境是新的护城河：让写烂代码变得不可能

他还有个更狠的做法：把错误变成不可能。

每看到代理犯一次错，就退一步想——怎么把这条教训变成一条lint规则，让代码库从物理上杜绝这种写法？

他内部建了一个叫Dune的框架，自称“内部版Next.js”,配上极其严格的lint规则：每个功能有自己的目录，代码库里做一件事往往只有一条路。

GrokBot最早由8个至少一万行的巨型文件组成，被迫拆散后，才有了这套结构。

这也呼应了他对好代码库的定义：**一个容易改东西而不出乱子的代码库**。它既解放了代理的心智，也解放了人的。

## 2500个拉取请求到底从哪来？

答案是：不是他手动开的2500个对话。关键在内外两个循环。内循环是代理工程师们写代码；外循环是Slack、X、邮件、Linear这些外部信息源。

以前他自己当搬运工，把外面的bug报告、功能请求人肉搬给代理。

现在他用GrokBot订阅这些渠道，发现bug就自动发给Cursor的Projects功能——一种云端协调者代理，像参谋长，自己不干活，负责分派和监督一群子代理。

假设一口气涌进30个相关问题，协调者会琢磨怎么分派最有效率，还不会丢掉问题之间的关联——多个相似的bug报告放在一起看，反而更容易发现真正的病根在上游。<button class="pd-ts" data-t="43:55" data-who="嘉宾" data-en="It can actually do a bunch of different topologies of agents and it will sort of figure out the best way to efficiently distribute the tasks to your team of agents." aria-label="回原文"></button>

另一个技巧来自读代码本身：React有很多坑，他让一个代理持续找坏模式，但不许修，只许往一份文档里追加。

过几天他翻一翻，发现全是一类问题——先攒缓冲区，再看大方向，比一个bug派一个代理去修高效得多。

## 睡觉时代理自己合并代码，早上起来抽查

最惊人的部分：他的代理现在自己合并拉取请求。

开启“全自动模式”后，每个拉取请求会触发一群验证代理——它们真的把应用跑起来，像真人一样乱点乱试(他称之为fuzzing),找回归、找bug,发现问题自己修，修完再来一轮，直到达标才落盘。

这很耗token,可以调节验证强度。他现在的日常是早上看提交历史，发现问题就回滚、改lint规则。

他说第一次打开“黑暗工厂”模式很吓人，生怕半夜搞出事故，但如今他睡得比以前好多了。

而且这不是Karpathy最初定义的那种“忘记代码存在”的vibe coding——恰恰相反，代码和环境是一切的核心。<button class="pd-ts" data-t="51:47" data-who="嘉宾" data-en="It takes a lot of time and effort to think about your code and where you see your agents failing and thinking very thoughtfully, intentionally, and setting up guardrails and constraints so that they do the right thing by default." aria-label="回原文"></button>

## 什么样的工作能这么干？可验证的才行

主持人追问：医疗、法律、金融里很多改动是“单行道”——错了没法回滚，怎么办？Potato坦诚回答：**一切取决于验证质量**。

工作可验证的领域，单行道某种程度上能变双行道；

软件工程和数学(比如写证明)恰好是可验证性较强的领域，而很难程序化验证的领域确实难走到这一步。

他预测未来会出现更多面向代理的编程语言，还点名了一个叫Bend的语言，它把编程和形式化证明结合在一起。

## 想开始的人：去翻你和代理的历史对话

技能本质上就是用文字写下来的流程。

两个人都说，最好的素材是你的历史对话记录——那些你不得不出手纠正代理的时刻，就是技能的原材料。

Potato在pstack里有个叫recall的技能，就是因为他做虚拟化时bug太多，每次开新对话都想把旧对话里的上下文带过来，干脆把这个流程压缩成了技能。

他建议每个人都该有自己的一套刀：厨师换餐厅，刀是随身带的。<button class="pd-ts" data-t="61:06" data-who="嘉宾" data-en="I think that... PSAC and your skills are very complementary. I totally agree with you that a skill is really much just process." aria-label="回原文"></button>

## 本集带走

- 验证是第一技能：让代理能自己运行、点击、检查代码，它才能自我迭代，人也才能从环里退出去。
- 把确定性工作写成脚本和命令行工具，判断性的工作才留给AI——各自干各自擅长的事。
- 环境即护城河：代理每犯一次错，就想办法把它变成lint规则或代码库结构，让这种错再也发生不了。
- 规模化靠两个循环：外循环自动从Slack等渠道收集信息，内循环用协调者代理分派任务，人只在早上抽查。
- 领域专家不是贬值而是升值——瓶颈已经从“会不会写代码”变成“能不能把意图讲清楚”。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">而是变成了你能否以智能体能理解并真正执行的方式，清晰地表达你的意图和目标。</span>  
> *It becomes your ability to express your intent and your goals in a clear way that the agent can understand and actually carry out.*  
> <span class="qm">—— Poteto · [07:22]</span> ^q1

> <span class="qz">所以我构建的很多 skills 都是围绕：怎么让简单的事变成正确的事？</span>  
> *So a lot of the skills that I've built have been around, how do I make the easy thing the right thing?*  
> <span class="qm">—— Poteto · [06:13]</span> ^q2

> <span class="qz">你如何搭建你的技能、你的环境、你的代码库，我认为这些最终才是打造产品的新食材。</span>  
> *And how you set up your skills, your environment, your code base, I think are ultimately the new ingredients that go into building product.*  
> <span class="qm">—— Poteto · [15:00]</span> ^q3

> <span class="qz">你会在我构建的很多其他技能里看到这一点，就是我尝试把确定性的部分提取出来变成代码，只把真正需要判断力的部分留给智能体。</span>  
> *And you'll see this in a lot of the other skills that I've built, is like I try to extract out the deterministic parts and turn that into code and just leave only the parts that actually require judgment to the agent.*  
> <span class="qm">—— Poteto · [21:46]</span> ^q4

> <span class="qz">这是我喜欢思考的另一个核心的事情，或者说是我的核心原则之一，就是如何非常高效地利用确定性和非确定性，让智能体在非确定性的部分大放异彩，因为那就是它们被训练来做的。</span>  
> *That's another core thing or one of my core principles that I like to think about is how do I make very efficient use of determinism and non-determinism and let agents shine at the non-deterministic parts because that's what they're trained to do.*  
> <span class="qm">—— Poteto · [23:50]</span> ^q5

> <span class="qz">是的，我几乎觉得工程师的新工作真的是把时间花在环境上。</span>  
> *Yeah, I almost feel like the new job of the engineer is really to spend time on the environment.*  
> <span class="qm">—— Poteto · [26:14]</span> ^q6

> <span class="qz">关于这一点，我要说的最后一个大要点是，我实现 2000 个 PR 的大突破，是从问题出发倒推：我怎样才能达到让我的智能体自己合并自己的代码的地步？</span>  
> *And really the big, the last thing I'll say to this is like the big unlock for me for getting to 2,000 PRs is starting from the question and working backwards of how do I get to the point where my agent can merge its own code?*  
> <span class="qm">—— Poteto · [39:37]</span> ^q7

> <span class="qz">而这也正是拥有类似参谋长智能体的真正好处：它除了真正做执行之外，还能看到整片森林。</span>  
> *And that's also really the benefit of having something like a chief of staff agent is it can see the forest in addition to actually doing the execution.*  
> <span class="qm">—— Poteto · [48:52]</span> ^q8

> <span class="qz">然后你思考如何去纠正环境，而不是那一个智能体。</span>  
> *And then you think about how to course correct the environment, not that single agent.*  
> <span class="qm">—— Poteto · [50:23]</span> ^q9

> <span class="qz">正是这两件事的结合，让我可以走开，然后说，智能体们，去把你们的东西合并了吧。</span>  
> *It's the combination of these two things that allow me to step away and say, agents, go off and merge your thing.*  
> <span class="qm">—— Poteto · [53:50]</span> ^q10

> <span class="qz">所以我在很大程度上把技能，尤其是当智能体变得更强大时，看作是在真正地编码工作流。</span>  
> *So I largely think of skills, especially as agents get more capable, as really encoding workflows.*  
> <span class="qm">—— Poteto · [63:45]</span> ^q11

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-09-03-talks-model-selection-token-efficiency|Token 都烧在哪了：Cursor 工程师教你把 AI 编程成本打下来]]<span class="pd-rz">同公司:Cursor · 同概念:技能 (skills)、智能体 (agent)、上下文窗口 (context window)</span>
- [[2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo|Datadog 4000 人AI赋能实战：删掉上下文反而更好]]<span class="pd-rz">同公司:Cursor · 同概念:智能体 (agent)、技能 (skills)</span>
- [[2026-08-07-yc-how-to-design-in-the-agent-era-e3n42jd|别让 AI 默认审美毁了你的产品:Paper 如何用 HTML 重新定义设计工具]]<span class="pd-rz">同公司:Cursor · 同概念:智能体 (agent)、React</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-07-twentyvc-20vc-the-100-billion-ai-assistant-race-t|邮箱里的 AI 助手：Plaid 前 CTO 谈如何在巨头围剿下赢]]<span class="pd-rz">同公司:Cursor、Meta · 同概念:智能体 (agent)</span>
- [[2025-07-27-lennys-pricing-and-scaling-your-ai-product-madh|AI 定价的黄金象限：别把 20% 的价值白送]]<span class="pd-rz">同公司:Cursor · 同概念:智能体 (agent)</span>
- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:技能 (skills)、智能体 (agent)</span>

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
