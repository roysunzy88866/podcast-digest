---
title: 给医疗理赔智能体套上 X12 护栏
podcast: 精选演讲
date: 2026-09-24
source_url: undefined
duration: "20:06"
type: episode
cover: "#64748b"
description: 一位医疗科技从业者讲解如何在保险理赔流程中安全可靠地部署智能体执行层：用 X12 标准当护栏、警惕保险公司的“假真值”、在自由推理与硬编码之间找平衡。
guests: ["[[Vasant Kearney]]"]
concepts: ["[[智能体]]", "[[X12]]", "[[harness]]", "[[护栏]]", "[[记忆]]", "[[多模态]]", "[[EHR]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-19-talks-healthcare-s-agent-bytecode-x12-as-the-h#post","headline":"给医疗理赔智能体套上 X12 护栏","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-19-talks-healthcare-s-agent-bytecode-x12-as-the-h","mainEntityOfPage":"https://talk.solomind.cc/2026-08-19-talks-healthcare-s-agent-bytecode-x12-as-the-h","description":"一位医疗科技从业者讲解如何在保险理赔流程中安全可靠地部署智能体执行层：用 X12 标准当护栏、警惕保险公司的“假真值”、在自由推理与硬编码之间找平衡。","datePublished":"2026-09-24","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Vasant Kearney"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"X12"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"多模态 (multimodal)"},{"@type":"Thing","name":"EHR"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"给医疗理赔智能体套上 X12 护栏","item":"https://talk.solomind.cc/2026-08-19-talks-healthcare-s-agent-bytecode-x12-as-the-h"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>给医疗理赔智能体套上 X12 护栏</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 给医疗理赔智能体套上 X12 护栏

<div class="pd-byl"><b>Vasant Kearney</b> · 2026-09-24</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-19-talks-healthcare-s-agent-bytecode-x12-as-the-h.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但如果你把整个系统硬编码，说我们要抛弃这整个智能体流程，你就限制了自己，或者你的代码会膨胀到完全无法管理。</div><div class="a">— Vasant Kearney <button class="pd-ts" data-t="10:54" data-who="Vasant Kearney" data-en="But if you hard code your whole system, you say we're going to throw out this whole agentic process, you limit yourself or your code can explode to be just unmanageable." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Vasant Kearney]]
>
> **概念** [[智能体]] · [[X12]] · [[harness]] · [[护栏]] · [[记忆]] · [[多模态]] · [[EHR]]

这一集是一场技术大会演讲，主题是医疗领域的[[智能体|智能体]]工作流——具体说，是怎么让 AI 智能体安全、可靠地替医疗机构跟保险公司打交道。演讲者一开场就点明目标：**把与保险交互的总体成本降下来，同时改善患者体验**。他提醒在座的技术人：我们喜欢为技术本身兴奋，但任何方案都必须扎根在这两点之一上，否则就没有意义 <button class="pd-ts" data-t="01:16" data-who="嘉宾" data-en="If we're working in healthcare and we're doing some agentic workflows, we have to keep in mind the goal. And that goal, at least from my perspective, is to drive the overall cost down." aria-label="回原文"></button>。

## 执行层：模型从“会说”到“会做”

演讲者先快速回顾了 AI 的演进——从神经元、卷积神经网络，到 transformer,再到聊天界面的大语言模型，最后到今天的智能体执行层(Claude Code、Codex 这类工具，以及他所在机构的内部系统)。所谓**智能体执行层，就是模型采取行动的能力**：查询数据库、探索数据模式、结合数据查代码，甚至进行真正的保险交易、打电话、查看网页门户、对接 [[EHR|EHR]](电子健康档案)系统 <button class="pd-ts" data-t="06:25" data-who="嘉宾" data-en="This can take on a lot of different forms. It is the ability of this model to take actions. So it might be you're starting out with database queries." aria-label="回原文"></button>。

这里有个关键区分：其中一些行动有**写入**的影响——比如智能体在操作桌面、对接不同的 PMS(诊所管理系统)时，至少会产生用户日志。这是安全设计的起点。

[[记忆|记忆]]是另一个核心概念。Claude Code 这类工具用本地记忆、直接写桌面，但在企业级医疗场景里不能这么做——他们把记忆放在数据库里，以获得逻辑上的隔离 <button class="pd-ts" data-t="07:23" data-who="嘉宾" data-en="And then the next concept is memory. So Claude Code or Codex, they use local memory, they write to your desktop. In enterprise healthcare, we can't really do this, so we do memory in a database, just so we have that logical separation." aria-label="回原文"></button>。

## 换新模型 ≠ 系统会更好

一个容易踩的坑：当你引入更强、参数更多的新模型时，**不能只是替换模型然后假设系统会变好**。新模型在某些 eval 上按指标衡量确实更好，但这不等于它在你设计的系统里的所有场景都更好——“所以你真的必须从头重做所有事情”，确保 eval、测试、验证全部就位，才能引入新模型而不弄坏系统 <button class="pd-ts" data-t="07:50" data-who="嘉宾" data-en="An important concept here is that when you're introducing new and improved better models, more sophisticated, more parameters, You can't just replace the model and assume it's going to be better." aria-label="回原文"></button>。

## 支票的教训：细节全在 harness 里

演讲者用兑现支票作类比：手写数字识别早就解决了，但你不能因此就说“可以自动存支票转账了”——真做起来，你得识别支票上的各种字符、确保它与基础设施的其他部分对得上、确保钱进对账户。理赔也一样：从资格认定到让保险公司把钱打进医疗服务提供方的账户，中间是**一大堆微小的 AI 步骤**，每一步都必须在严格的限制内安全运作 <button class="pd-ts" data-t="03:21" data-who="嘉宾" data-en="So let's think back to some of the earlier examples of getting really excited about some AI technology and then realizing it has all these little bits and pieces which make it a lot more trickier than maybe is obvious at first." aria-label="回原文"></button>。

他把围绕智能体推理的所有“螺母和螺栓”——记忆、工具、检查、权限、交接、eval——统称为 **harness([[护栏|护栏]]装置)**，在医疗理赔语境下，这个 harness 的核心就是 **[[X12|X12]]** <button class="pd-ts" data-t="08:31" data-who="嘉宾" data-en="You can introduce these new models and not break your system. So this concept of harness, different groups have different definitions of this. So I'm gonna use a super broad definition here, which is like all the different nuts and bolts that surround this." aria-label="回原文"></button>。

## LLM 在约束里反而如鱼得水

X12 是医疗保险行业的电子数据交换标准——一套规则体系，是你和保险公司沟通内容之间的底层契约。演讲者的观察很有意思：就像 COBOL、TypeScript 这些约束严格的语言一样，**LLM 在被约束时工作得最好**——取值清晰、有限、可预测，而 X12 恰恰就是这种东西 <button class="pd-ts" data-t="09:20" data-who="嘉宾" data-en="So just like we have these old school languages or formats like Cobalt or other stricter, maybe strict languages, TypeScript, LLMs really thrive. They work well and when they're confined, they have clear limited values that they can predict." aria-label="回原文"></button>。

理赔流程可能涉及约 50 个步骤，而且很多是[[多模态|多模态]]的(要处理图像)。这带来两个问题：一是贵、耗时长；二是**每一步都是引入错误的机会**，错误会沿着系统往下传播。所以有一个“有依据、可以被拒绝”的东西非常重要——有严格的护栏，就能在出现错误时拒绝它 <button class="pd-ts" data-t="10:27" data-who="嘉宾" data-en="So if you have a really strict guardrails, you can reject something that happens that's incorrect. So with your reasoning over, let's say, the previous example, 50 steps, and they're multimodal." aria-label="回原文"></button>。

反过来，如果把整个系统硬编码、抛弃智能体流程，你的代码会膨胀到无法管理，需要一个庞大的工程团队。所以核心是**在“完全自由的智能体推理”和“硬编码”之间找平衡**。

他们的做法是引入分层的记忆：伙伴级、组织级和用户级的记忆。比如多站点医疗组织里的人往往日复一日做同样的事，用户提几个词，系统就能推断“他通常做资格验证，通常在这个上下文里做” <button class="pd-ts" data-t="11:22" data-who="嘉宾" data-en="So what we want to do is strike this balance between what we should be completely free, like with just pure agentic reasoning and execution and what is hard-coded." aria-label="回原文"></button>。

但持久记忆有个副作用——**偏见**。也许那个人今天不想做和昨天一模一样的事，而你却引导他去做和昨天一模一样的事。所以必须取得平衡，并确保任何用户都能跳出这个模式 <button class="pd-ts" data-t="12:05" data-who="嘉宾" data-en="Where another user, they probably mean that. So we want to be really careful here because as you introduce memory, you also, persistent memory across chats, across days, you also introduce bias." aria-label="回原文"></button>。

## 神来之笔：打电话也是一笔 X12 交易

理赔生命周期里每一步都有对应的 X12 事务：预约时有资格查询，治疗时涉及保险覆盖的范围，影像资料(有时 X 光片本身就是证据文件)对应 275 事务，提交理赔，最后是付款入账。

演讲者分享了一个他承认“事后回想很显然”的洞见：**你打电话给保险公司，归根结底就是一笔 X12 交易**。你说“我在问这个病人的资格”——那就是一个 270 资格请求；你查理赔状态——那也有 X12 依据。所以当智能体操作桌面、操作浏览器、对接影像系统时，每一步背后都可以落到一个标准化的 X12 事务上(银行 ACH 不是 X12,但同样是结构化交易)<button class="pd-ts" data-t="13:35" data-who="嘉宾" data-en="Maybe you find it's interesting or not. But if you're calling an insurance company That boils down to a transaction, an x12 transaction." aria-label="回原文"></button>。

这样做还有一个美妙之处：**这些事务全部是公开的标准，不是你自己的 schema**。如果让智能体自己给你生成一个 schema,你会得到各种乱七八糟的东西；但建立在公开标准上，一个新来的工程师也能立刻看懂整个系统 <button class="pd-ts" data-t="15:05" data-who="嘉宾" data-en="If you look up any of these transactions, they're all public. The beautiful thing about this is this is not my schema. If you ask agents to make a schema for you, you're going to get all sorts of stuff." aria-label="回原文"></button>。

## 保险公司没有“真值”这回事

这是全场最反直觉的部分。保险公司给你的 X12,**不等于就是真的**。

保险公司告诉你一件事时，信息可能来自不同团队——他们的网页浏览器、电话系统、X12 层、FHIR 接口，甚至可能是外包给另一家公司做的。所以必须理解：**这里没有 ground truth(真值)** <button class="pd-ts" data-t="16:12" data-who="嘉宾" data-en="And we have to understand that there's no ground truth. They also, within all these systems, they can all actually agree on the wrong information as well. Like let's say they all say this patient is covered." aria-label="回原文"></button>。

更糟的是，所有这些系统还可能**对错误的信息达成一致**：打电话、查网页、查 X12,三个渠道都说“这个病人有覆盖”，你给病人做了治疗，然后理赔被拒——理由是病人在那段时间没有被覆盖 <button class="pd-ts" data-t="16:12" data-who="嘉宾" data-en="And we have to understand that there's no ground truth. They also, within all these systems, they can all actually agree on the wrong information as well. Like let's say they all say this patient is covered." aria-label="回原文"></button>。

他们的应对方式：不管信息是不是以 X12 的形式来的，**把所有事务都归结为自己内部的“半正确 X12”——在下游证据证明它不正确之前，先当它是正确的**。而任何来自保险公司的信息，任何时候都可能是错的、之后都可能被更新。

演讲者半开玩笑地说：“所以祝你好运吧。” <button class="pd-ts" data-t="16:42" data-who="嘉宾" data-en="So they can all disagree, but sometimes you'll learn some idiosyncrasies of these different pairs that some of these systems are more reliable than others. But regardless of if it originates as an X12 or not, you can boil all those transactions down to your own internal semi-correct X12." aria-label="回原文"></button>

在整个患者旅程里，这些证据可能就是影像本身——比如一次 CBCT(锥形束 CT)的图像和切片，可能就是保险公司索要的证据。而理赔单的本质是一张**收据和合同**：你在声明“我做了这项工作”，它被密封发出，现在球在保险公司的场地上——他们该付钱了 <button class="pd-ts" data-t="18:00" data-who="嘉宾" data-en="Well, those images and slices of those images might be the evidence that they're asking for. So ultimately, if you're delivering that treatment, you're sending that claim, that claim is like a receipt of what you did." aria-label="回原文"></button>。理赔的推进也有明确的节点：999 确认语法无误、状态更新确认收到、没收到就打电话核实、最后是 835 付款收据(EOB)<button class="pd-ts" data-t="18:29" data-who="嘉宾" data-en="So that is your ultimate like contract of you're saying you did this work, it's sealed, and now the ball is within the insurance company's court. And just a little bit about this progression of the claim from you're sending it, you're getting some acknowledgment." aria-label="回原文"></button>。

## 完全被 AI 说服，同时对 AI 保持怀疑

收尾时演讲者给了态度层面的忠告。他说自己“完全被 AI 说服了”(fully AI-pilled),但正因为如此，**引入大语言模型、小模型时，必须用一种非常怀疑、保守的方式**。“这些东西会犯错”——甚至不该说它们犯错，**是我们在设计它们时犯了错，我们可能会把它们设置成注定失败** <button class="pd-ts" data-t="19:09" data-who="嘉宾" data-en="But I think that LLMs, I'm fully AI-pilled, right? But we want to make sure that we introduce large language models, small, tiny models in a very skeptical, conservative way." aria-label="回原文"></button>。

最后是成本这条底线：不要用性能过强、价格过贵的模型。如果一个每天要做一千次的常规任务，交付一次的成本变得超级昂贵，那就完全背离了“把总体成本降下来”这个最初的目标 <button class="pd-ts" data-t="19:37" data-who="嘉宾" data-en="So we have to be very skeptical of them. And we have to use them in a way that's also cost effective. You can't throw, I mean, you don't want to use an overpowered, overexpensive model, because then if you're going back to," aria-label="回原文"></button>。

## 本集带走

- **先定目标再动手**：医疗智能体的一切设计都要扎根于两件事——降低保险交互成本、改善患者体验，为技术而技术没有意义。
- **用 X12 当智能体的护栏**：LLM 在严格约束下表现最好；把打电话、查门户、传影像这些交互统统归结为标准 X12 事务，错误可以被护栏识别并拒绝。
- **用公开标准替代自造 schema**:X12 事务定义全是公开的，新工程师和智能体都能立刻理解，不要让智能体自己发明 schema。
- **假设保险公司会给你错的信息**：电话、门户、X12 可能互相矛盾，甚至一致地错；维护一份自己内部的“半正确 X12”,等下游证据来推翻它。
- **换新模型必须重做验证**：eval 变好不等于你的系统变好，引入新模型前把测试和验证全部重建。
- **持久记忆要留逃生口**：用户记忆能提效，但会把人锁死在昨天的习惯里，必须保证用户能随时跳出。
- **既被 AI 说服、又对 AI 怀疑**：错误往往是我们自己设计出来的；每天跑一千次的任务尤其要用够用、便宜的小模型，别为常规操作买单贵模型。

<div class="pd-sec pd-sec-q">全部金句 <span>1 条</span></div>

> <span class="qz">但如果你把整个系统硬编码，说我们要抛弃这整个智能体流程，你就限制了自己，或者你的代码会膨胀到完全无法管理。</span>  
> *But if you hard code your whole system, you say we're going to throw out this whole agentic process, you limit yourself or your code can explode to be just unmanageable.*  
> <span class="qm">—— Vasant Kearney · [10:54]</span> ^q1

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-14-talks-no-memory-no-harness-why-the-database-is|AI 让个人更快，却没让团队更快：智能体记忆才是真瓶颈]]<span class="pd-rz">同概念:harness（护栏装置） (harness)、护栏 (guardrails)、智能体 (agent)、记忆 (memory)、Codex</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同概念:harness（护栏装置） (harness)、智能体 (agent)、记忆 (memory)、Claude Code、护栏 (guardrails)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同概念:harness（护栏装置） (harness)、护栏 (guardrails)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、Codex</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:harness（护栏装置） (harness)、智能体 (agent)、护栏 (guardrails)</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:智能体 (agent)、记忆 (memory)</span>

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
