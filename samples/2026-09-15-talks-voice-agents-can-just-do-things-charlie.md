---
title: "语音智能体不一定要说话:OpenAI 的三种语音交互模式"
podcast: 精选演讲
date: 2026-09-18
source_url: undefined
duration: "15:31"
type: episode
cover: "#64748b"
description: "OpenAI 开发者体验团队的 Charlie 讲解语音转语音、语音转动作、事件转语音三种模式,并介绍 GPT Realtime 2 如何把推理带入音频媒介。"
guests: ["[[Charlie Guo]]"]
companies: ["[[OpenAI]]"]
concepts: ["[[语音智能体]]", "[[语音转语音]]", "[[语音转动作]]", "[[事件转语音]]", "[[计算机使用]]", "[[Realtime 模型]]", "[[推理能力]]", "[[工具调用]]", "[[前导语]]", "[[延迟]]", "[[转写]]", "[[护栏]]", "[[大语言模型]]", "[[AGI]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-15-talks-voice-agents-can-just-do-things-charlie#post","headline":"语音智能体不一定要说话:OpenAI 的三种语音交互模式","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-15-talks-voice-agents-can-just-do-things-charlie","mainEntityOfPage":"https://talk.solomind.cc/2026-09-15-talks-voice-agents-can-just-do-things-charlie","description":"OpenAI 开发者体验团队的 Charlie 讲解语音转语音、语音转动作、事件转语音三种模式,并介绍 GPT Realtime 2 如何把推理带入音频媒介。","datePublished":"2026-09-18","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Charlie Guo"},{"@type":"Organization","name":"OpenAI"},{"@type":"Thing","name":"语音智能体 (voice agents)"},{"@type":"Thing","name":"语音转语音 (speech-to-speech)"},{"@type":"Thing","name":"语音转动作 (speech-to-action)"},{"@type":"Thing","name":"事件转语音 (event-to-speech)"},{"@type":"Thing","name":"计算机使用 (computer use)"},{"@type":"Thing","name":"Realtime 模型 (Realtime)"},{"@type":"Thing","name":"推理能力 (reasoning)"},{"@type":"Thing","name":"工具调用 (tool calling)"},{"@type":"Thing","name":"前导语 (preambles)"},{"@type":"Thing","name":"延迟 (latency)"},{"@type":"Thing","name":"转写 (transcription)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"大语言模型 (large language models)"},{"@type":"Thing","name":"AGI"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"语音智能体不一定要说话:OpenAI 的三种语音交互模式","item":"https://talk.solomind.cc/2026-09-15-talks-voice-agents-can-just-do-things-charlie"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>语音智能体不一定要说话:OpenAI 的三种语音交互模式</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 语音智能体不一定要说话:OpenAI 的三种语音交互模式

<div class="pd-byl"><b>Charlie Guo</b> · OpenAI 开发者体验团队 · 2026-09-18</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-15-talks-voice-agents-can-just-do-things-charlie.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我差点把这次演讲命名为《语音是下一个能力过剩》，因为我认为在这个类别中有大量的东西我们本可以做，而我们现在没有做。</div><div class="a">— Charlie Guo <button class="pd-ts" data-t="04:15" data-who="Charlie Guo" data-en="I actually almost titled this talk Voice is the Next Capability Overhang because I think there is just a vast, vast amount of stuff that we could be doing in this category that we are not currently doing." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Charlie Guo]]
>
> **公司** [[OpenAI]]
>
> **概念** [[语音智能体]] · [[语音转语音]] · [[语音转动作]] · [[事件转语音]] · [[计算机使用]] · [[Realtime 模型]] · [[推理能力]] · [[工具调用]] · [[前导语]] · [[延迟]] · [[转写]] · [[护栏]] · [[大语言模型]] · [[AGI]]

「[[语音智能体|语音智能体]]必须用语音回应」——[[OpenAI|OpenAI]] 开发者体验团队的 Charlie 认为这是当前最大的误解。他在这次演讲中想让大家带走的一点是：**语音并不是语音模型回应的唯一方式**。模型已经足够智能，开始解锁一些新的设计模式 <button class="pd-ts" data-t="00:54" data-who="Charlie" data-en="What do you mean it's not supposed to talk? But I think if there's one thing that you take away from this presentation, I would like it to be the idea that speech is not the only way that a voice model has to respond." aria-label="回原文"></button>。

## 三种正在涌现的模式

Charlie 把当前的语音交互归纳为三类：**[[语音转语音|语音转语音]]、[[语音转动作|语音转动作]]、[[事件转语音|事件转语音]]**。他说了两个前提：第一，这些模式并不新鲜——打电话查电影放映时间的热线可以算是语音转语音的雏形，车载 GPS 导航则是事件转语音的老前辈；第二，它们可以混搭，最好的产品往往是把几种模式组合起来 <button class="pd-ts" data-t="01:21" data-who="Charlie" data-en="And I think models are getting intelligent enough and capable enough that they're starting to open up some new modes of design. There's actually three kind of modes that I kind of see emerging these days, right?" aria-label="回原文"></button>。

**语音转语音**大家都熟：用户说话、模型回话。典型场景有语言学习的实时练习与辅导(模型能听到重音和情绪并给出反馈)、「礼宾体验」(其实就是客户支持++,做出比电话树愉快得多、甚至比中等水平人工客服更 pleasant 的支持体验)，以及几乎零[[延迟|延迟]]的实时翻译——他预计明年 OpenAI 的主题演讲就会在直播的同时实时配多语言配音 <button class="pd-ts" data-t="02:32" data-who="Charlie" data-en="They're not meant to be mutually exclusive, and I think as we'll see in a little bit, the best products exist in a way that combines all of these modes. So speech to speech, everybody knows it, hopefully everybody loves it." aria-label="回原文"></button>。

**语音转动作**是他认为**探索最不充分**的领域——他差点把演讲命名为《语音是下一个能力过剩》。用户说话、模型调用工具，至少有三类应用 <button class="pd-ts" data-t="04:05" data-who="Charlie" data-en="It wouldn't shock me if at next year's keynote they live-streamed it from the main stage but also dubbed it in real time across multiple languages. The second category is speech to action." aria-label="回原文"></button>:

- **表单填写**：互联网上太多东西就是填表。如果不用花一小时填政府文件，而是说五分钟话就能完成 90%、再快速检查一遍，这会影响「互联网相当大的一块 GDP」。
- **创意工具**：Charlie 说自己会说「软件这门语言」，所以能让 Codex(OpenAI 的编码智能体)精确实现想要的东西，但做音乐、绘画时做不到——「我的品味超出了我的能力」。把语音接进创作工具，就能磕磕绊绊地「vibe 作曲、vibe 绘画」。
- **[[计算机使用|计算机使用]]**：可推广的终极形态。如果模型已经好到能做人类在电脑上做的一切，为什么还要跟一个应用、一个终端对话，而不是直接跟整台电脑对话？

具体到开发者怎么落地：现代 Web 应用已经把功能暴露成了「名词和动词」——API 端点、React hooks——每一个都可以相对容易地转换成暴露给模型的工具，用户就能用语音驱动你现有的软件(当然仍需[[护栏|护栏]]和安全检查)<button class="pd-ts" data-t="06:46" data-who="Charlie" data-en="If you're building a modern web application, you already expose so much of it as nouns and verbs. And if you think about all the verbs that you have, you have API endpoints, you have React hooks," aria-label="回原文"></button>。而且回应不必靠说话：通知、弹窗、改按钮颜色、高亮文本、Codex 应用里那个替你点击的「幽灵光标」动画，都是几十年积累的沟通方式。

**事件转语音**:模型接收事件、主动与用户交谈，目前仍非常早期。他看到的两条主线是**免手/免屏体验**(做饭时问食谱应用「现在怎么样了」)和**主动触达**——开发者不会把所有日志都显示出来，更不会都念出来，但可以把语音构想成一条递进路径的最高层：先让界面动一动，再弹窗，都不奏效才开口说话 <button class="pd-ts" data-t="08:42" data-who="Charlie" data-en="The other category is proactive outreach, right, where you, the model needs to be able to tell you something or get your attention in a way that you might not be looking at, right." aria-label="回原文"></button>。

这些背后还有一个更大的主题：**可访问性**。Charlie 认识好几位在职业生涯中失去手部灵巧的开发者，他们本以为编程生涯结束了，但[[大语言模型|大语言模型]]、编码智能体和语音智能体来了之后，他们生成的代码比以前多了几个数量级 <button class="pd-ts" data-t="09:13" data-who="Charlie" data-en="And underlying both of these categories, and I think this whole presentation is this broader theme of accessibility. On a personal note, I know multiple developers who, over the course of their careers, lost mobility in their hands, lost dexterity in their fingers, and for many of them, they thought their career as a programmer was more or less over." aria-label="回原文"></button>。

## 为什么是现在:Realtime 模型的技术转向

传统语音智能体是**链式**构建：说话 → [[转写|转录]] → 发给语言模型 → 调工具 → 生成文本 → 合成音频 → 播放。而 OpenAI 的 [[Realtime 模型|Realtime 模型]]系列在幕后**不做任何转录**——它以原生音频作为 token 训练，音频进、音频出，行业整体也在朝这个连续流式音频的方向走，连回合制抽象都在放开 <button class="pd-ts" data-t="11:15" data-who="Charlie" data-en="And some time ago, OpenAI decided on a different approach. The real-time model family does not do any transcription behind the scenes. It is trained on native audio as tokens, so you send audio in and you get audio back out." aria-label="回原文"></button>。

这么做的原因：转录会丢失大量信息。语调、节奏、情感冲击、对方是否想打断你、背景噪音——这些都是模型理解时非常重要的上下文。更量化的理由是，ChatGPT 最早的两个语音模式用链式方法构建，延迟显著高于用原生方法的高级语音模式 <button class="pd-ts" data-t="12:14" data-who="Charlie" data-en="You know, impact, you lose, like, whether they're trying to interrupt you, you lose background noise, all of this stuff, which is really important context for the model to understand." aria-label="回原文"></button>。

在此背景下他介绍了 GPT Realtime 2(几个月前发布)，最大的亮点是**把[[推理能力|推理]]带入音频媒介**——像文本模型一样可以在说话之前先思考，你可以给它更多推理预算来得到更好的回答。它还支持并行[[工具调用|工具调用]]，而思考加调用会增加延迟，于是又加了**[[前导语|前导语]]**：提示模型在思考或调用工具前先给用户提个醒——就像打电话给旅行代理时，对方会说「我去查一下机票价格，给我几秒钟」<button class="pd-ts" data-t="13:18" data-who="Charlie" data-en="And that's why we also added preambles. Preambles are a way that you can prompt the model to give the user a heads up if it's going to be thinking or if it's going to be calling tools." aria-label="回原文"></button>。此外它有更长上下文、更好的领域理解、更自然的声音、更强的可引导性，还支持唤醒词(可以给它起名字，比如演讲现场的「Marin」)。

## 怎么开始

Charlie 最后给的建议是：构建语音智能体时，**不要从「我想构建什么样的语音智能体」这个问题开始，而要从「语音和音频在这个交互中的角色是什么」开始** <button class="pd-ts" data-t="14:37" data-who="Charlie" data-en="But I think the kind of final thing that I want to leave you with here is when building voice agents, not to start with the question of like, what kind of voice agent am I trying to build?" aria-label="回原文"></button>。这个问题会引出一连串后续：模型能感知什么？

有什么上下文？有哪些工具、哪些该安全正确地执行？

现在沟通还是等待？用视觉通知还是音频？

他的收尾判断：「我相信 [[AGI|AGI]] 将是被说出来的，而不是被打出来的」<button class="pd-ts" data-t="15:19" data-who="Charlie" data-en="And so taken together, I hope everybody in here can start to build some much richer experiences with voice Because, like others have said, I do believe that AGI will be spoken, not typed." aria-label="回原文"></button>。

## 本集带走

- **别默认语音智能体必须说话**：回应可以走通知、弹窗、界面状态变化、光标动画——语音只是递进路径的最高一层，前面还有动画和弹窗。
- **给现有软件加语音层比想象容易**：把已有的 API 端点、React hooks 转换成暴露给模型的工具，用户就能用语音驱动现有应用；剩下的工作主要是护栏和安全检查。
- **语音转动作是最被低估的方向**：表单填写、创意工具、计算机使用都有大量空白，尤其是「品味超出能力」的人可以用语音驱动创作工具。
- **原生音频优于链式转录**：转录丢掉语调、节奏、打断意图和背景噪音，且延迟更高；行业在向连续流式音频进出走。
- **设计前的关键问题**：先问「语音在这个交互里的角色是什么」，再依次想清楚感知、上下文、工具、时机与方式。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">我差点把这次演讲命名为《语音是下一个能力过剩》，因为我认为在这个类别中有大量的东西我们本可以做，而我们现在没有做。</span>  
> *I actually almost titled this talk Voice is the Next Capability Overhang because I think there is just a vast, vast amount of stuff that we could be doing in this category that we are not currently doing.*  
> <span class="qm">—— Charlie Guo · [04:15]</span> ^q1

> <span class="qz">所以我认为表单填写虽然看起来可能无聊，却影响着互联网相当大的一块 GDP。</span>  
> *And so I think that one is, though it may seem boring, affects a significant GDP of the internet.*  
> <span class="qm">—— Charlie Guo · [05:07]</span> ^q2

> <span class="qz">如果我没能力准确表达出我追求的审美，又不会用 Photoshop 或 Ableton,我就处于一种品味超出能力的状态。</span>  
> *And so if I don't have the ability to articulate the exact aesthetic that I'm looking for, and if I don't know how to use Photoshop or Ableton, I'm left in this state where my taste exceeds my capability.*  
> <span class="qm">—— Charlie Guo · [05:34]</span> ^q3

> <span class="qz">这就引出了一个问题：如果模型已经好到能做人类在电脑上做的一切事情，那我为什么还要和一个应用对话？</span>  
> *It raises the question of, look, if the models are just getting good enough to do everything on a computer that a human can do, why am I talking to an app?*  
> <span class="qm">—— Charlie Guo · [06:07]</span> ^q4

> <span class="qz">每个开发者的软件中都有无穷无尽的通知和事件，但任何头脑正常的开发者都不会说「我应该展示所有这些日志」，更不会说「我应该把所有这些日志都念出来」</span>  
> *Has an endless amount of notifications and events happening in their software, but no developer in their right mind would sort of say, I should show all of these logs, nor would they say, I should speak all of these logs*  
> <span class="qm">—— Charlie Guo · [08:44]</span> ^q5

> <span class="qz">然后编码智能体和语音智能体来了，现在他们在给定的一天或一个月内生成的代码比以前多了几个数量级。</span>  
> *Then came coding agents and voice agents, and now they generate orders of magnitude more code than they previously did on a given day or month.*  
> <span class="qm">—— Charlie Guo · [09:30]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-14-a16z-greg-brockman-on-why-openai-says-were-en|OpenAI 总裁 Greg Brockman：我们已进入 AGI 时代，而真正的瓶颈不是模型]]<span class="pd-rz">同公司:OpenAI · 同概念:AGI、计算机使用 (computer use)、ChatGPT</span>
- [[2026-09-15-talks-realtime-voice-agents-with-frontier-inte|让语音智能体又快又聪明：Elise AI 的级联架构]]<span class="pd-rz">同概念:工具调用 (tool calling)、语音智能体 (voice agents)、转录 (transcription)</span>
- [[2026-06-09-ainativedev-ryan-lopopolo-openai-39-s-framework-for|Harness 工程：让智能体零人工写代码的实操]]<span class="pd-rz">同公司:OpenAI · 同概念:护栏 (guardrails)、Codex、计算机使用 (computer use)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当写代码变便宜,OpenAI Codex负责人说「品味」成了最贵的资源]]<span class="pd-rz">同公司:OpenAI · 同概念:计算机使用 (computer use)、ChatGPT、Codex</span>
- [[2026-07-14-a16z-is-ai-a-bubble-gavin-baker-on-data-cente|没有暗GPU:一位基金经理拆解AI泡沫论与棋局]]<span class="pd-rz">同公司:OpenAI · 同概念:推理 (reasoning)、ChatGPT</span>
- [[2026-09-05-yc-paul-graham-on-startups--ambition--and-g|PG 炉边谈话：创业的核心从来没变过]]<span class="pd-rz">同公司:OpenAI · 同概念:AGI、ChatGPT</span>

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
