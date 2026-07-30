---
title: 评估取代 PRD：前 Meta/Google PM 演示如何实时构建智能体评估
podcast: Product Growth Podcast
date: 2026-07-28
source_url: https://www.news.aakashg.com/p/how-to-build-your-first-eval
duration: "56:47"
type: episode
cover: "#64748b"
image: "/covers/2026-07-28-pg-how-to-build-your-first-eval.jpg"
description: 前 Meta/Google PM 深入演示如何从零构建智能体评估，通过临床基因组学案例揭示垂直 AI 产品的核心难点。
host: "[[Daniel McKinnon]]"
cohosts: ["[[Akash]]"]
companies: ["[[Gamoff Labs]]"]
concepts: ["[[评估]]", "[[PRD]]", "[[智能体]]", "[[测试框架]]", "[[全基因组测序]]", "[[离线评估]]", "[[金发姑娘]]"]
category: 产品方法
tags:
  - 产品方法
  - 智能体
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>评估取代 PRD：前 Meta/Google PM 演示如何实时构建智能体评估</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# 评估取代 PRD：前 Meta/Google PM 演示如何实时构建智能体评估

<div class="pd-byl"><b>Daniel McKinnon</b> · 前 Meta/Google PM</div>

<div class="pd-mt">2026-07-28 · Product Growth Podcast · 56:47</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-28-pg-how-to-build-your-first-eval.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但如果你看看现在生成式人工智能的所有头条新闻，它不是质量保证，它是智能体。</div><div class="a">Daniel McKinnon · 09:55</div></div>

> [!info] 关联
> **人物** [[Daniel McKinnon]] · [[Akash]]
>
> **公司** [[Gamoff Labs]]
>
> **概念** [[评估]] · [[PRD]] · [[智能体]] · [[测试框架]] · [[全基因组测序]] · [[离线评估]] · [[金发姑娘]]
>
> **来源** [Product Growth Podcast](https://www.news.aakashg.com/p/how-to-build-your-first-eval)

<div class="pd-tldr"><b>一句话</b>前 Meta/Google PM 深入演示如何从零构建智能体评估，通过临床基因组学案例揭示垂直 AI 产品的核心难点。</div>

两年前，前 Meta 和 Google 产品经理 [[Daniel McKinnon|Daniel McKinnon]] 写了一篇广为流传的文章，抛出一个辛辣观点：**[[评估|评估]]将取代产品需求文档（[[PRD|PRD]]）**。两年过去，核心论点依然成立，但因为模型从简单的问答变成了执行多步任务的[[智能体|智能体]]（能够自主调用工具、推理并采取行动的 AI 系统），评估的写法已经天翻地覆。本集 Daniel 以他自己正在创业的临床基因组学领域为例，在播客中近乎实时地演示了一遍：从头构建一个真正的智能体评估，到底分几步，以及为什么这件事「看起来简单，实则极具欺骗性」。

### 为什么评估能取代 PRD？

回到最初的论点，Daniel 解释说，说评估「取代」PRD 有点辛辣，因为产品战略和特定客户依然不可或缺，那可能只需要一两句话交代清楚 <button class="pd-ts" data-t="02:04" data-who="Daniel McKinnon" data-en="without a product strategy or a particular customer, like your product is nothing. But again, that's a paragraph or even a sentence, depending on what the product is." aria-label="回原文"></button>。但过去 PRD 文档中最庞大的部分——详细规定产品在各种具体情况下应该如何运作、用户能从中获取什么价值——在 Gen AI 时代被彻底颠覆了。

原因在于，现在的 AI 产品能做的事情太多了，很难再用文字描述清楚它的行为边界。传达产品诉求最好的方式变成了**具体的例子**，而这正是评估的本质 <button class="pd-ts" data-t="02:37" data-who="Daniel McKinnon" data-en="Say, oh, this thing just does everything. And the best way to actually communicate what the product should do is through examples. And that's what an eval is." aria-label="回原文"></button>。评估就像是给模型出的一套「冷知识测验题」，它定义了产品需要做好的事情轮廓。如果模型在这些测验上表现良好，用户大概率会喜欢；如果不行，你就要改模型、改工具（harness，指包裹在模型外围、赋予其调用工具和推理能力的代码框架）或改产品。比起直接上线让真实用户承受糟糕的体验，通过[[离线评估|离线评估]]能极早地发现你想做的事到底在今天的技术下可不可行 <button class="pd-ts" data-t="03:13" data-who="Daniel McKinnon" data-en="And if not, you either need to change the model, change the harness, or change the product. It's possible that what you want to do is not possible with the models today," aria-label="回原文"></button>。

但仅仅理解这个理念还不够。要真正掌握评估，必须理解过去两年模型任务范式的剧变。

### 旧范式：饱和的问答基准

两年前，AI 的核心范式是问答（QA），人们甚至认为生成式 AI 将直接取代搜索 <button class="pd-ts" data-t="05:52" data-who="Daniel McKinnon" data-en="Claude co-work and the like. Really the core thesis two years ago was that Gen.ai was essentially a search replacement. I don't know if everyone remembers when Google's stock tanked because this was going" aria-label="回原文"></button>。当时的评估非常简单直白。以 OpenAI 当年报告 GPT-4 表现时引用的基准为例，像 MMLU、HumanEval 这些，全都是纯问答：你有一套预先准备好的问题和一个标准答案，用评分机打分就行 <button class="pd-ts" data-t="06:14" data-who="Daniel McKinnon" data-en="And you might remember a lot of these. MMLU, HellaSwag, Arc, Winograd, HumanEval. HumanEval is ironically an automated eval of Python." aria-label="回原文"></button>。如果你要做一个食谱网站生成冰淇淋配方的功能，你的离线评估就是准备 100 个关于冰淇淋的提示词，并设定好怎么打分 <button class="pd-ts" data-t="03:55" data-who="Daniel McKinnon" data-en="to make their favorite kinds of ice cream. An offline eval would be a prompt set, say 100 prompts of different ice creams that users might like." aria-label="回原文"></button>。

关键技巧在于寻找**「[[金发姑娘|金发姑娘]]」级别**的难度——不能太难也不能太简单。如果评估得分为 100%，工程团队没有优化空间；如果得分为 0%，你甚至不知道这技术今天能不能实现。留出余地，让得分大约在 50% 左右是最典型的 <button class="pd-ts" data-t="08:23" data-who="Daniel McKinnon" data-en="what is an easy prompt, and have something that scores maybe Maybe like 50% because you have to have room to run." aria-label="回原文"></button>。

> 【背景】模型在问答类任务上已经完全饱和了。今天我们不再指望模型只能回答高中物理题，而是期待它们在国际奥林匹克数学竞赛中拿金牌。

所以，如果你看看今天各大实验室（如 Anthropic 报告 Opus 4.8 进展时）使用的基准，你会发现完全不同：智能体编码（agentic coding，让 AI 像程序员一样写代码）、智能体终端操作、跨学科推理、智能体计算机使用等 <button class="pd-ts" data-t="13:05" data-who="Daniel McKinnon" data-en="but it's partially because the task is really different. You'll notice we have agentic coding, agentic terminal coding," aria-label="回原文"></button>。模型的任务不再是从用户那里拿一个提示词返回一个答案，而是接下一个需要许多步骤的任务，中间可能涉及推理（思考）、工具调用（如搜索）或更高级的操作。

这意味着编写评估的全新范式：你不再思考「问答」，而是在思考「长周期的任务」。这对评分提出了巨大挑战。

### 演示开始：临床基因组学难题

为了展示这个新范式，Daniel 用他自己的创业公司正在解决的问题进行了现场演示：衡量和提高模型在临床基因组学方面的能力 <button class="pd-ts" data-t="15:59" data-who="Daniel McKinnon" data-en="First problem. I want to measure and improve the model's ability to help with clinical genomics. This is a problem that I care deeply about." aria-label="回原文"></button>。他选择的测试模型包括 Codex（使用 GPT 5.3）、Haiku 以及 GPT 5.5。

这个领域的背景是：[[全基因组测序|全基因组测序]]已经成为新生儿重症监护病房（NICU）中针对病患婴儿的诊断绝对金标准。不幸的是，解读这份测序结果非常耗费人力，这严重限制了这项救命技术的普及 <button class="pd-ts" data-t="16:14" data-who="Daniel McKinnon" data-en="And the problem is, is that whole genome sequencing has Become the absolute gold standard in diagnostics in NICU settings, so for sick babies." aria-label="回原文"></button>。

要给基因组解读做评估，你首先必须深刻理解问题，这也正是为什么各大 AI 实验室在疯抢投资银行家、会计师和律师——垂直领域的专业背景是创建评估的绝对前提 <button class="pd-ts" data-t="17:48" data-who="Daniel McKinnon" data-en="over some real examples, but you really need to deeply understand the problem. This is why people like Anthropic and OpenAI are hiring Investment bankers, accountants," aria-label="回原文"></button>。

Daniel 首先确立了一个**简单的下限**。他选择了病因非常明确的单基因遗传病——囊性纤维化。他直接用 Codex 让 AI 在代表人类基因组的文本文件中，特定位置（7 号染色体）加上一个特定的基因缺失（变异） <button class="pd-ts" data-t="21:49" data-who="Daniel McKinnon" data-en="What I'm going to do is now I'm going to go over to a terminal window I have open here and I'm using Codex. Any of the tools will work." aria-label="回原文"></button>。然后，他把修改后的基因组文件连同囊性纤维化的症状描述喂给不同的智能体，看它们能否找出遗传原因。结果，GPT 5.3 在一分钟内就锁定了 CFTR 突变区域 <button class="pd-ts" data-t="28:36" data-who="Daniel McKinnon" data-en="you can see what's already happened with our first agent is after one minute of thinking, you've actually find the CFTR mutation pattern consistent with this deletion, right?" aria-label="回原文"></button>。下限确立了：这个任务至少是可能的。但出人意料的是，较弱的 Haiku 模型在这个看似简单的任务上失败了，它产生了幻觉，谎报了缺失 <button class="pd-ts" data-t="35:04" data-who="Daniel McKinnon" data-en="But you'll notice what Haiku says is there's 48 variants spanning the gene. So it's looking at the gene, but it fails to actually find the particular, oh, this is so interesting." aria-label="回原文"></button>。

确认了下限后，必须确立**困难的上限**，否则任务完全饱和，做评估就失去了意义。

### 探寻上限：二基因遗传病与采样

为了测试难度的天花板，Daniel 挑战了一项去年才发表在论文里的前沿难题：由两个不同基因上的杂合变异共同导致的先天性心脏病（二基因遗传病） <button class="pd-ts" data-t="33:09" data-who="Daniel McKinnon" data-en="The authors here are deciphering the digenic architecture of congenital heart disease. So what does this mean? This means congenital heart disease is if you're a baby and you're born" aria-label="回原文"></button>。

他把论文里的真实患者数据（包含两个特定的基因变异）导入基因组文件，然后让三个智能体去寻找遗传学原因。结果：GPT 5.3 的回答完全跑偏，找了一堆不相关的变异；Haiku 依然离谱 <button class="pd-ts" data-t="43:46" data-who="Daniel McKinnon" data-en="This is actually why we did it. And what you'll notice is it's totally wrong. They found multiple variants, tbx1, myhsys, jag1." aria-label="回原文"></button>。这证明，如果没有极强的外部工具支撑，目前没有模型能搞定这种级别的难题。通过这一步，上限被清晰确立了。

> 【背景】转写稿中将「digenic」（双基因）误写为 diagenic / diagenic pairs，文中已直接修正为正确拼写。

这里引出了一个关于**采样（sampling）**的技术细节：同一个提示词在模型里跑多次有意义吗？Daniel 解释说，采样在以前很重要。比如 2023 年 Google 发布 Gemini Ultra 时，在 MMLU 基准测试上用了 32 次采样，相比之下 GPT-4 只用了 5 次，这被视作一种提高准确率的取巧手段 <button class="pd-ts" data-t="42:30" data-who="Daniel McKinnon" data-en="meaning it had five samples and it picked the best one. And that's why you see five shot, three shot, three shot, 10 shot. It really is like kind of like a way" aria-label="回原文"></button>。但在今天基于他个人的经验，由于模型能力增强，多次采样产生不同答案的效应已经不那么明显了 <button class="pd-ts" data-t="43:14" data-who="Daniel McKinnon" data-en="So by sampling more times, you actually get a higher chance of getting the correct answer. So this used to be a really big thing back in the day. Today, I don't think this is a big thing." aria-label="回原文"></button>。有趣的是，在这个难题上，当 GPT 5.5 重新跑了一次后，它这次居然正确地锁定了那对致病基因——它成功搜到了那篇特定的论文并提取了结果 <button class="pd-ts" data-t="45:54" data-who="Daniel McKinnon" data-en="but we can see right now that GPT 5.5 extra high this time actually did identify this diagenic pairs and it did almost certainly find the paper." aria-label="回原文"></button>。

一旦确立了下限和上限，剩下的就像二分搜索一样，在简单、中等、困难之间不断填充提示词，最终你会得到一个电子表格，完全基于领域专业知识来驱动评估 <button class="pd-ts" data-t="44:30" data-who="Daniel McKinnon" data-en="And then you just kind of go through and it's almost like a binary search process. Process where you say easy, medium, hard, and then just assemble a list of prompts." aria-label="回原文"></button>。

### PM 的新基本功：用例子思考

明白了这套流程，我们就能回答那个最核心的问题：如果你是一个从来没做过 AI 功能的 PM，应该从哪里入手？

Daniel 的建议是：从第零天开始思考，成功是什么样子的？你不能只写一份 PRD 说「用户想要漂亮的厨房图片」，你必须明确定义什么是漂亮——不是用文字，而是用**例子**，以及一套打分的方法 <button class="pd-ts" data-t="48:50" data-who="Daniel McKinnon" data-en="And you need to translate that. You can't just write down a PRD and say they want beautiful kitchens. You have to explicitly define what a beautiful kitchen is and Not in words, in examples." aria-label="回原文"></button>。如果你在 Pinterest 要做图像生成，你得先弄懂怎么构建一个图像领域的 LLM 裁判（LLM judge，用另一个模型来给当前模型的输出打分），以此作为评估的基础。

这背后的残酷现实是：评估看似简单，本质上是提示词、回复和打分方法的组合，但它极度依赖专业直觉。所以如果你没有做过，最好找个懂行的人帮你 <button class="pd-ts" data-t="47:55" data-who="Daniel McKinnon" data-en="Yeah, that's a good question. So if you've never worked on an AI feature before, I would actually try to find somebody who has, who can help you through this." aria-label="回原文"></button>。

在访谈的最后，我们顺带探讨了 Daniel 曾在 Meta 和 Google 的工作经历。简而言之：Meta 是一种更具攻击性、由创始人绝对控制的产品主导文化；而 Google 更多是由共识驱动、由工程主导的文化 <button class="pd-ts" data-t="50:55" data-who="Daniel McKinnon" data-en="And what I would say, like my key takeaways for what Google versus Meta was like is Meta is like a much, much more aggressive culture in many ways." aria-label="回原文"></button>。这种高强度的 AI PM 经历，也自然引向了 Daniel 自己的下一步。

### 走向创业：Gamoff Labs

正是基于对评估和智能体 harness 的深刻理解，Daniel 创办了 [[Gamoff Labs|Gamoff Labs]]。公司的核心目标是让全基因组测序更容易进入全世界的每一个 NICU，无论是阿肯色州的乡村还是印度、中国的乡村 <button class="pd-ts" data-t="53:04" data-who="Daniel McKinnon" data-en="And as I hinted at during these evaluations, The core problem I want to solve is to make it much, much easier to get whole genome sequencing into every single NICU in" aria-label="回原文"></button>。这不仅仅是一个技术挑战，更是想用 AI 增强人类解读基因组的能力，从而拯救那些原本无法获得这项救命技术的新生儿。

## 本集带走

1. **评估取代 PRD 的本质**：在 AI 产品什么都能做的情况下，文字描述失效了。传达产品诉求唯一可靠的方式，是用一组具体的「问题+答案+打分标准」（即离线评估）来定义产品行为的边界。
2. **范式转移**：从做问答（QA）评估，转向做长周期的智能体任务评估。这要求你不仅要准备提示词，还要考虑模型调用工具的完整链路，并且用自动化手段对极长、极复杂的输出进行打分。
3. **寻找金发姑娘区间**：好的评估必须包含从简单到困难的任务分布，目标是找到模型得分在 25%-50% 的区间，留出优化余地；并明确找出当前模型的上限在哪里，以此决定产品该加什么护栏。
4. **垂直专业知识 > 工具模板**：写评估最大的门槛不是找什么现成的模板或软件，而是对该领域（如基因组学、法律、财务）的深度理解，这也是为什么实验室在疯抢垂直领域的专家。
5. **以具体例子定义成功**：如果你是新手 PM，做 AI 功能的第一天就该思考怎么用具体的例子（而非抽象的文字）去描述成功，并想办法把这转化为可以跑分的数据集。

<div class="pd-sec">全部金句 <span>3 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">但如果你看看现在生成式人工智能的所有头条新闻，它不是质量保证，它是智能体。</span>  
> *But if you look at all the headlines in Gen AI right now, it's not QA, it's agents.*  
> <span class="qm">—— Daniel McKinnon · [09:55]</span> ^q1

> <span class="qz">所有这一切意味着核心模型任务是什么，不再是从用户那里获取一个提示词并返回一个答案，但实际上是从用户那里获取一个需要许多、许多步骤的任务。</span>  
> *All this means is what the core model task is, is no longer to get a prompt from a user and come back with an answer, But it is actually to get a task from a user that requires many, many steps.*  
> <span class="qm">—— Daniel McKinnon · [13:20]</span> ^q2

> <span class="qz">但你必须明确定义什么是漂亮的厨房，而且不是用文字，是用例子。</span>  
> *you have to explicitly define what a beautiful kitchen is and Not in words, in examples.*  
> <span class="qm">—— Daniel McKinnon · [48:55]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「产品方法」挖下去**

- [[2026-06-24-pg-company-os-jz|Laurel 产品负责人：怎么用 GitHub 把全公司的工作流变成 AI 技能]] —— 同嘉宾:Akash · 同概念:智能体 (agent)
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]] —— 同公司:Claude Code · 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|一千人公司里的五人小队:Eddie Kim 怎么用 Claude Code 花10周造出 Gusto Co-Founder]] —— 同公司:Claude Code · 同概念:智能体 (agent)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]] —— 同嘉宾:Akash · 同公司:Codex · 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|Satya Nadella：别在一个模型上顶礼膜拜，这才是 AI 时代真正的平台逻辑]] —— 同概念:工具框架 (harness)、智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]] —— 同公司:Claude Code、Codex · 同概念:智能体 (agent)

</div>
</div>

*本集关键词:评估 · AI 产品管理 · 智能体 · 基因组学 · 离线评估*

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
