---
title: 产品里的智能体为什么总“瞎”：Harmonic 的上下文可见性法则
podcast: 精选演讲
date: 2026-08-07
source_url: undefined
duration: "16:18"
type: episode
cover: "#64748b"
description: 智能体做产品最大的坑：脱离消息列表和机具共享的 UX，对模型完全不可见。
companies: ["[[Harmonic]]", "[[Scout]]"]
concepts: ["[[智能体]]", "[[Deep Agents]]", "[[前沿模型]]", "[[harness]]", "[[上下文]]", "[[渐进式披露]]", "[[工具]]", "[[文件系统]]"]
category: 智能体
tags:
  - 智能体
  - 产品方法
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-07-talks-how-harmonic-4x-d-user-retention-by-buil#post","headline":"产品里的智能体为什么总“瞎”：Harmonic 的上下文可见性法则","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-07-talks-how-harmonic-4x-d-user-retention-by-buil","mainEntityOfPage":"https://talk.solomind.cc/2026-08-07-talks-how-harmonic-4x-d-user-retention-by-buil","description":"智能体做产品最大的坑：脱离消息列表和机具共享的 UX，对模型完全不可见。","datePublished":"2026-08-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Organization","name":"Harmonic"},{"@type":"Organization","name":"Scout"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"Deep Agents"},{"@type":"Thing","name":"前沿模型 (frontier model)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"上下文 (context)"},{"@type":"Thing","name":"渐进式披露 (progressive disclosure)"},{"@type":"Thing","name":"工具 (tools)"},{"@type":"Thing","name":"文件系统 (file system)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"产品里的智能体为什么总“瞎”：Harmonic 的上下文可见性法则","item":"https://talk.solomind.cc/2026-08-07-talks-how-harmonic-4x-d-user-retention-by-buil"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>产品里的智能体为什么总“瞎”：Harmonic 的上下文可见性法则</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 产品里的智能体为什么总“瞎”：Harmonic 的上下文可见性法则

<div class="pd-byl">2026-08-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-07-talks-how-harmonic-4x-d-user-retention-by-buil.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">自从我们切换到 deep agents 以来，我们从第一周到第四周的留存率提高了四倍。</div><div class="a">— SPEAKER_00 <button class="pd-ts" data-t="01:30" data-who="SPEAKER_00" data-en="We have four times the retention from week one to week four since we switched over to deep agents." aria-label="回原文"></button></div></div>

> [!info] 关联
> **公司** [[Harmonic]] · [[Scout]]
>
> **概念** [[智能体]] · [[Deep Agents]] · [[前沿模型]] · [[harness]] · [[上下文]] · [[渐进式披露]] · [[工具]] · [[文件系统]]

<div class="pd-tldr"><b>一句话</b>智能体做产品最大的坑：脱离消息列表和机具共享的 UX，对模型完全不可见。</div>

给[[智能体|智能体]]做个产品界面，你满怀期待地把搜索结果和可视化图表渲染得漂漂亮亮，用户一问“为什么这家公司排在左边”，智能体却当场死机，回了一句“我不知道”。这恰恰是创业生态数据库 [[Harmonic|Harmonic]] 在打造其 AI 助手 [[Scout|Scout]] 时，踩过并最终趟平的坑。

这一集里，Harmonic 团队分享了他们如何从早期繁杂的解析图架构，全面切换到[[前沿模型|前沿模型]]加 Deep Agents（一种帮模型管理[[上下文|上下文]]、调用[[工具|工具]]的智能体框架）的组合。你会听到三块内容：首先是他们抛弃旧架构后，如何用 50 个工具让智能体执行长链路复杂任务；接着是核心痛点——智能体偏爱代码和结构化数据，而非技术用户根本不想看这些，如何调和这种张力？最后是本集精华：他们提炼出的一套 UX 设计法则，即如何通过“[[渐进式披露|渐进式披露]]”，确保前端展示的任何东西都不会对模型“隐形”。

说完了这一集的来龙去脉，来看看 Scout 是怎么脱胎换骨的。大概一年半前，Scout 1.0 采用的是一个复杂的 LangGraph 查询解析图。

它把用户的自然语言拆成各个语义部分，分别路由给自定义搜索语言和嵌入（一种把文本转化为向量的技术）去处理 <button class="pd-ts" data-t="02:12" data-who="" data-en="And the concept here was basically how do we take a natural language query someone's looking up, show me all the fintech SaaS companies in New York that have raised money in the last two months." aria-label="回原文"></button>。图里的每个节点都有各自的模型和评估，需要疯狂调优，维护成本极高 <button class="pd-ts" data-t="02:34" data-who="" data-en="And each one of these nodes in LangGraph had their own models, had their own evals. We would tweak them like crazy to make sure that they were passing the evals and required a ton of maintenance." aria-label="回原文"></button>。

后来前沿模型能力提升，他们果断切换到了 Deep Agents。新架构变得极其精简，核心就是一个工具调用循环：模型在中间，外围是通过中间件挂载的一堆工具 <button class="pd-ts" data-t="02:51" data-who="" data-en="So the graph is a lot simpler here. Essentially, we have just a tool call loop in the middle. You have the model." aria-label="回原文"></button>。他们给智能体配了 50 个连接生态的工具，从搜索实体到操作用户 CRM 应有尽有，智能体不仅能准确选对工具，还能极好地执行复杂的组合任务 <button class="pd-ts" data-t="03:33" data-who="" data-en="So we found that using frontier models and the harness Giving it a bunch of tools, even 50 tools, it's able to kind of choose the right tool, execute really complicated, long composite tasks really well." aria-label="回原文"></button>。

架构变简单了，Deep Agents 的上下文管理也立了大功。为什么这点如此关键？

当用户执行一次公司搜索，返回的结果可能包含上千家公司，每家又嵌套着团队和融资信息，实际响应轻轻松松就能达到上万行 <button class="pd-ts" data-t="04:14" data-who="" data-en="If you're conducting a company search where there's 1,000 results coming back, each one of those companies might have nested team members and funding information and all this other stuff." aria-label="回原文"></button>。如果直接把这些塞进传给模型的消息列表里，上下文很快就会爆炸。

Deep Agents 的核心优势就是管理上下文：当消息列表变长时它会自动运行压缩；对于返回数千行的工具调用，它会启用工具调用驱逐机制，把结果转存到[[文件系统|文件系统]]里，只返回给模型一个轻量级的指针，模型可以按需读取，从而不被海量数据污染 <button class="pd-ts" data-t="04:32" data-who="" data-en="So deep agents, I think one of the core benefits of it is it handles, it basically manages context. So if the messages list gets long, it'll run compaction, so it can keep going pretty much infinitely." aria-label="回原文"></button>。正是这种强大的支撑，让 Scout 从第一周到第四周的用户留存率翻了四倍 <button class="pd-ts" data-t="01:30" data-who="" data-en="You know, metrics are fun. We have four times the retention from week one to week four since we switched over to deep agents. But we've also gotten some really great qualitative feedback." aria-label="回原文"></button>。

底层[[harness|机具]]（harness，即管理和调度模型、工具与上下文的框架）的能力这么强，新的张力又出现了：这些智能体天生喜欢代码 <button class="pd-ts" data-t="06:08" data-who="" data-en="And the central tension that we found is that these agents love things that feel like code. Like the models are trained on coding tasks, tool calling, structured JSON." aria-label="回原文"></button>。它们被海量编码任务和结构化 JSON 训练过，动不动就往对话里输出 XML 或文件路径。

但 Harmonic 的绝大多数用户是 VC 机构里的非技术人员。他们要的是可以直接点击的公司列表和漂亮的交互界面。要打造一款真正好用的产品，就必须调和这种张力：既要给模型自由推理和行动的主观能动性，又要构建高度可预测的交互式 UX <button class="pd-ts" data-t="06:47" data-who="" data-en="Most of our users are non-technical, so we had to basically fight this tension of how do we leverage the full benefit of this harness that is extremely capable with a correct model and then build it into a product that is generally useful to people without compromising some of that power." aria-label="回原文"></button>。

要理解怎么调和这种张力，就必须明白机具与模型之间的“上下文契约”。你可以这样理解：每次调用模型，你传入的都只是一个消息列表 <button class="pd-ts" data-t="07:12" data-who="" data-en="So the way I think about the context that the harness manages, it basically has a contract with the model. The model is always just getting a list of messages, assistant message, human messages, tool messages." aria-label="回原文"></button>。

机具的职责，就是确保这个列表不触及容量上限或发生上下文腐烂（context rot，即上下文过长导致模型理解能力下降）。因此，消息列表里的内容模型一定看得见；而被机具卸载到外围的内容，则必须通过工具按需取用。

这就引出了本集最核心的法则：对于最终呈现给用户的 UX，模型必须有“渐进式可见性”——要么直接放在消息列表里，要么提供工具让模型能一步步去探查。否则，在模型眼里它就是彻底不存在的 <button class="pd-ts" data-t="08:23" data-who="" data-en="if it's pulling out a file it returns a pointer to the file saying you can access it at this this path and it will give tools to kind of read chunks in at a time so the concept of progressive disclosure you have kind of a an initial like lightweight one-liner of what what exists and some tools and then the model can kind of choose to build up context in chunks as needed" aria-label="回原文"></button>。

模型为什么必须“看得见”界面上的东西？拿可视化图表举例。

模型自己就很擅长吐出 HTML 或 SVG 代码来做行业图谱。这时候，绝对不能用那种“掩耳盗铃”的错误做法：即暴露一个叫“渲染数据”的工具，前端拦截后渲染图表，只给模型返回一句“执行成功 true” <button class="pd-ts" data-t="09:43" data-who="" data-en="So you pass in some arguments, and then it would return something like success true or some sort of no op. The problem with this is it knows, or it would call that to one in the front end, would intercept that call and render something based on that data." aria-label="回原文"></button>。

这种做法灾难性的后果在于，一旦用户指着屏幕问“为什么这家公司放在左侧？”，模型会彻底宕机，因为它根本不知道前端干了什么 <button class="pd-ts" data-t="10:00" data-who="" data-en="But if the user says, why is that company on the left-hand side, it doesn't have any context on what the front end is doing because it's completely outside of the purview of the harness." aria-label="回原文"></button>。

正确的做法是，让模型的输出直接留在消息列表里，用类似 XML 的标签包裹住图表代码。前端照常拦截并渲染出漂亮的界面，但最关键的是，模型对图表的全貌一清二楚。用户让它“把背景色换掉”，它完全有能动性去修改 <button class="pd-ts" data-t="10:53" data-who="" data-en="So you could do something, basically prompt the agent to use some sort of delimiter, in this case an XML tag, HTML visualization that wraps whatever HTML it's going to use to print out the visualization." aria-label="回原文"></button>。

图表这种小东西留在消息列表里没问题，但搜索公司返回的成千上万条结果该怎么办？同样的道理，最幼稚的做法是“发后即忘”（fire and forget）：模型触发搜索，前端立刻渲染出并列的结果列表，但结果信息压根没传回给模型 <button class="pd-ts" data-t="12:09" data-who="" data-en="And by the way, when I say naive, this is what we did at the beginning, and it caused a bunch of issues. The model would trigger a search. It would call some sort of search service." aria-label="回原文"></button>。

用户如果问“第二家公司的 CEO 是谁”，模型毫无上下文，也无法建立上下文。更好的解法是，让工具返回一个搜索 ID 和结果计数，模型据此通过工具去抓取前 10 条结果来建立认知 <button class="pd-ts" data-t="12:51" data-who="" data-en="A better approach here would be to create a tool that returns some sort of identifier and then tools to explore that artifact a bit. So the model would call something like start company search." aria-label="回原文"></button>。

而最优雅的“原生解法”，则是把 Deep Agents 的文件系统当作智能体、前端以及各种后台进程的共享存储空间 <button class="pd-ts" data-t="13:43" data-who="" data-en="So this is the better version. The best version is a DeepAgent's native version, which is basically using the file system as a shared storage space for basically the agent, the front end, and any other kind of deterministic processes that you want to run." aria-label="回原文"></button>。模型可以触发一个后台搜索智能体，持续将排序好的数万条结果写入共享文件系统；前端实时读取并渲染这些结果；与此同时，如果用户提问，主智能体能随时使用 `grep` 或 `ls`（文件查找与列表指令）读取特定片段来作答。三方完美和谐 <button class="pd-ts" data-t="14:45" data-who="" data-en="We expose an API to render the results directly from there. So then everything is kind of in harmony. The front end can view the results as they come in, like up to tens of thousands of results, ranked, sorted, with annotations." aria-label="回原文"></button>。

## 本集带走

最后收个尾，这一集值得带走的是一条核心判断与三个实操心法。核心判断是：智能体本质上就是模型加上机具，当你想把它变成产品加上 UX 时，UX 必须遵守机具与模型共享上下文的底层规则。

第一个心法，模型对展示给用户的任何产物都必须具备“渐进式可见性”。你要么把它放在消息列表里，要么给它配套工具去读取，否则界面上渲染得再绚丽，在模型眼里也是一片虚无。

第二个心法，绝对不要用“只返回成功”的工具去糊弄模型，这会彻底切断模型的能动性。你要么让产出物留在对话流里，要么让前端和模型都能从同一个文件系统里去读写数据。第三，如果你在设计时发现自己总在对模型说“相信我，用户会看到这个效果，你别管了”，赶紧停下——这说明有东西脱离了模型的感知边界，你需要回到第一性原则，重新梳理上下文的流动。

> 【背景】Harmonic 是一家提供创业生态实时数据库的公司，宣称追踪了数千万家公司和数亿从业者。LangChain 是一家专注于大语言模型应用开发的公司，其开源框架被广泛用于构建智能体工作流。

<div class="pd-sec">全部金句 <span>5 条</span></div>

> <span class="qz">自从我们切换到 deep agents 以来，我们从第一周到第四周的留存率提高了四倍。</span>  
> *We have four times the retention from week one to week four since we switched over to deep agents.*  
> <span class="qm">—— SPEAKER_00 · [01:30]</span> ^q1

> <span class="qz">我们发现的核心张力在于，这些智能体喜欢看起来像代码的东西。</span>  
> *The central tension that we found is that these agents love things that feel like code.*  
> <span class="qm">—— SPEAKER_00 · [06:03]</span> ^q2

> <span class="qz">这是在确保模型拥有主观能动性来自由推理和行动与构建一个 UX 之间的张力，这个 UX 需要具有很好的交互性，具有以可预测和确定性方式渲染的丰富元素。</span>  
> *the tension between making sure the model has agency to reason and act freely with building a UX that's kind of nicely interactive, has rich elements that are rendered in a predictable and deterministic way.*  
> <span class="qm">—— SPEAKER_00 · [06:47]</span> ^q3

> <span class="qz">如果你正在构建一个 UX，并且有一些东西与对话并排很好渲染，但它既不存在于消息列表中，也没有被机具卸载并提供发现它的方式，那么它对智能体来说本质上就是不可见的。</span>  
> *if you're building a UX and you have something that's nicely rendered side by side with the conversation, but it doesn't exist either in the message list or offloaded by the harness with a way to discover it, it'll be essentially invisible to the agent.*  
> <span class="qm">—— SPEAKER_00 · [08:32]</span> ^q4

> <span class="qz">智能体根本不知道实际发生了什么，因为它基本上只是向虚空发射东西，然后得到一些成功消息。</span>  
> *The agent has no idea what actually happens because it's kind of just firing something into the void, getting back some success message.*  
> <span class="qm">—— SPEAKER_00 · [09:53]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-24-talks-inside-the-agent-engine-a-langchain-and|当系统出故障时，让 AI 代替作战室里的 50 个人——Traversal 谈如何造 AI SRE]]<span class="pd-rz">同概念:上下文 (context)、文件系统 (file system)、智能体 (agent)、机具 (harness)、deep agents</span>
- [[2026-07-31-talks-building-deep-agents-and-deploying-in-pr|把智能体推向生产环境:为什么标准基础设施不够用]]<span class="pd-rz">同公司:LangChain · 同概念:deep agents、文件系统 (file system)、机具 (harness)、LangGraph、中间件 (middleware)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同公司:LangChain · 同概念:智能体 (agent)、机具 (harness)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)</span>
- [[2026-08-12-bigtech-here-s-how-the-ai-bubble-bursts-with-pau|AI 投资泡沫的崩盘剧本:为什么万亿美元建数据中心注定亏钱]]<span class="pd-rz">同概念:前沿模型 (frontier model)、机具 (harness)</span>

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
  // 故再兜一条 history.length>1(站内点进必有返回历史)。命中「直开」给 body 打 .pd-direct,CSS 切显隐。
  function direct(){
    var ref = document.referrer || '';
    var fromSite = (ref.indexOf(location.origin) === 0) || history.length > 1;
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
