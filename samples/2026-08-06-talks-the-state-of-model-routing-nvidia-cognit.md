---
title: "不靠一个模型打天下:多模型路由的早期探索与实战权衡"
podcast: 精选演讲
date: 2026-08-06
source_url: undefined
duration: "48:02"
type: episode
cover: "#64748b"
description: "几位实战派拆解模型路由:大模型当总指挥、小模型打配合,是降本增效的核心打法。"
host: "[[Tane]]"
cohosts: ["[[Carter]]", "[[Walden]]"]
companies: ["[[Cognition]]", "[[OpenRouter]]", "[[NVIDIA]]"]
concepts: ["[[模型路由]]", "[[智能体]]", "[[上下文压缩]]", "[[RL]]", "[[蒸馏]]", "[[KV 缓存]]", "[[Fusion]]", "[[FlexTron]]", "[[Devon]]", "[[Nemotron]]", "[[sidekick]]", "[[幻觉探测头]]", "[[OpenClaw]]", "[[开源模型]]", "[[前沿模型]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-06-talks-the-state-of-model-routing-nvidia-cognit#post","headline":"不靠一个模型打天下:多模型路由的早期探索与实战权衡","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-06-talks-the-state-of-model-routing-nvidia-cognit","mainEntityOfPage":"https://talk.solomind.cc/2026-08-06-talks-the-state-of-model-routing-nvidia-cognit","description":"几位实战派拆解模型路由:大模型当总指挥、小模型打配合,是降本增效的核心打法。","datePublished":"2026-08-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Tane"},{"@type":"Person","name":"Carter"},{"@type":"Person","name":"Walden"},{"@type":"Organization","name":"Cognition"},{"@type":"Organization","name":"OpenRouter"},{"@type":"Organization","name":"NVIDIA"},{"@type":"Thing","name":"模型路由 (model routing)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"上下文压缩 (context compaction)"},{"@type":"Thing","name":"RL"},{"@type":"Thing","name":"蒸馏 (distillation)"},{"@type":"Thing","name":"KV 缓存 (KV cache)"},{"@type":"Thing","name":"Fusion"},{"@type":"Thing","name":"FlexTron"},{"@type":"Thing","name":"Devon"},{"@type":"Thing","name":"Nemotron"},{"@type":"Thing","name":"sidekick"},{"@type":"Thing","name":"幻觉探测头 (hallucination probes)"},{"@type":"Thing","name":"OpenClaw"},{"@type":"Thing","name":"开源模型 (open source models)"},{"@type":"Thing","name":"前沿模型 (frontier models)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"不靠一个模型打天下:多模型路由的早期探索与实战权衡","item":"https://talk.solomind.cc/2026-08-06-talks-the-state-of-model-routing-nvidia-cognit"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>不靠一个模型打天下:多模型路由的早期探索与实战权衡</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 不靠一个模型打天下:多模型路由的早期探索与实战权衡

<div class="pd-byl"><b>Walden</b> · Cognition 联合创始人 · 2026-08-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-06-talks-the-state-of-model-routing-nvidia-cognit.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我认为实际上这是一种非常反直觉的动态,更智能的模型实际上在委派工作方面变得越来越擅长。</div><div class="a">— Walden <button class="pd-ts" data-t="03:54" data-who="Walden" data-en="I think actually there's this really unintuitive dynamic where smarter models actually get better and better at delegating work." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Tane]] · [[Carter]] · [[Walden]]
>
> **公司** [[Cognition]] · [[OpenRouter]] · [[NVIDIA]]
>
> **概念** [[模型路由]] · [[智能体]] · [[上下文压缩]] · [[RL]] · [[蒸馏]] · [[KV 缓存]] · [[Fusion]] · [[FlexTron]] · [[Devon]] · [[Nemotron]] · [[sidekick]] · [[幻觉探测头]] · [[OpenClaw]] · [[开源模型]] · [[前沿模型]]

<div class="pd-tldr"><b>一句话</b>几位实战派拆解模型路由:大模型当总指挥、小模型打配合,是降本增效的核心打法。</div>

最顶尖的前沿大模型,其实比小模型更擅长把活儿派出去——你用一群便宜的小模型协同干活,算下来反而比单用大模型效果更好、成本更低。这正是目前 AI 应用落地里最炙手可热的技术方向:[[模型路由|模型路由]](一种根据任务和预算,把请求分发给不同大小、不同特长模型的调度机制)。

这一集 [[NVIDIA|NVIDIA]] 的小组讨论里,四位一线操盘手围坐拆解了这个话题:做 AI 软件工程师 [[Devon|Devon]] 的 [[Cognition|Cognition]] 联合创始人 [[Walden|Walden]],讲了他怎么用前沿大模型当"监工"、小模型当"苦力",把智能成本砍掉四成;[[OpenRouter|OpenRouter]] 的 Alex 透露了路由器爆火的意外转折,以及大模型做外部编排还是小模型做编排的关键取舍;NVIDIA 的 [[Carter|Carter]] 和 Tanay 则从底层算力、模型[[蒸馏|蒸馏]](把大模型的知识浓缩进小模型的技术)和模型互补性出发,补充了硬件和训练视角的洞察。你会听到一场非常前沿、充满踩坑经验的方法论碰撞。

聊完了这四位的来头,先把目光聚焦在 Walden 刚发布的成果上。Cognition 做了一件反直觉的事:他们把 Fable 级别(前沿级别)模型的智能成本降低了 40% <button class="pd-ts" data-t="04:34" data-who="Walden" data-en="Still feel like and still have a frontier model in their system while getting all these cost benefits. So yeah, we're reducing the cost of Fable level intelligence by 40%." aria-label="回原文"></button>。

怎么做到的?不是硬去压缩模型,而是分摊任务。他们让昂贵的 Fable 模型只做规划和拍板这种"高难度动作",然后把具体的执行工作,委派给一个便宜得多的小型[[开源模型|开源模型]] <button class="pd-ts" data-t="04:37" data-who="Walden" data-en="So yeah, we're reducing the cost of Fable level intelligence by 40%. The way we do that is we allow Fable to still do the planning and the hard decision making, but delegate a lot of the work to an implementation model." aria-label="回原文"></button>。

为什么这招不仅没掉链子,反而更全面?反直觉的地方就在这里:便宜的小模型按 token(模型处理的基本计费和运作单位)算钱更便宜,所以你可以在同样的预算下,让小模型撒开了跑。

比如,与其让大模型凭借有限的上下文去一条路摸到底,不如直接派生出三个子[[智能体|智能体]]去并行探索整个代码库,挖得反而更深 <button class="pd-ts" data-t="05:01" data-who="Walden" data-en="Because you're delegating the work to another model, you can let that model go at the task with much more depth and intensity than you might otherwise. You can spin off three sub-agents to go and explore the code base, and maybe that's actually more comprehensive than if you had just let Fable explore the code base itself." aria-label="回原文"></button>。谭毅(Tanay)也把这套逻辑拉到了一个更本质的维度:模型的能力是"参差不齐"的 <button class="pd-ts" data-t="05:48" data-who="Tanay" data-en="But also if you think about the budget of if you were to say the frontier model costs this amount per token and the smaller model is this amount per token and it's significantly cheaper, then you can use a lot more tokens from the smaller model still within the budget that it would have been from the frontier model." aria-label="回原文"></button>。

编码本身就是一个大筐,里面装着数据可视化、模型构建等千差万别的细分活儿。一个在通用编码跑分上傲视群雄的模型,未必在某个具体的子任务上打得过专精的小模型。所以路由的本质,就是摸透每个模型在不同子任务上的脾气,然后把它们编排在一起套利 <button class="pd-ts" data-t="06:42" data-who="Tanay" data-en="So it's not necessary that model A, if scores higher on a coding benchmark, is just plain better at every task there is. So routing is a task of intimately understanding the behavior and strengths and weaknesses of different models and then applying them thusly." aria-label="回原文"></button>。

方法论听起来很美,但真要让一群大小模型协同干活,第一个致命的坑就是上下文(模型思考所需的背景信息)爆炸。一旦多个模型一起上阵,最糟糕的情况就是读同一个文件、每个模型都要收一遍钱,成本瞬间翻三倍 <button class="pd-ts" data-t="11:23" data-who="Walden" data-en="So I think the context here is it's actually very easy to actually create a system that's more expensive as soon as you're running multiple models together. Because, oh, no, this one file read, now every one of these models is now reading this one file read." aria-label="回原文"></button>。

Walden 他们花大力气解决的,就是默认情况下只把上下文喂给小模型。而那个处于监视地位的大模型,只需知道小模型读了什么、大概在想什么就行 <button class="pd-ts" data-t="11:37" data-who="Walden" data-en="The trick that we spend a lot of our time on is most of the context by default will only be going to one model. So most of the context, let's say, will be going to the small model." aria-label="回原文"></button>。

这背后依赖的核心技术叫[[上下文压缩|上下文压缩]],也就是把一大堆冗长的历史记录,浓缩成模型能看懂的精华再传回去 <button class="pd-ts" data-t="12:03" data-who="Walden" data-en="And actually, a lot of these problems already have been well-studied in many domains already, like context compaction is something you already have to solve if you want to do really long-running agents." aria-label="回原文"></button>。谭毅从代码的底层结构补充了一个视角:压缩天然是有损的,但代码库本身就像硬盘,你可以让模型只记住关键表征,真要细节了再去文件系统里捞 <button class="pd-ts" data-t="22:06" data-who="Tanay" data-en="ASTs and context compression representations. Compaction in its very nature is lossy, right? So just like headroom is there, RTK is there, right?" aria-label="回原文"></button>。

Alex 也点破了大家容易忽略的现实:别信那些号称百万上下文窗口的宣传,模型在超过 20 万 token 后,智能水平就会掉下悬崖 <button class="pd-ts" data-t="32:16" data-who="Alex" data-en="All these model providers, they advertise some insane context window, like a million tokens. I would never recommend using these models past 200K tokens, under 100K if you can." aria-label="回原文"></button>。压缩更多时候不是为了省吞吐量,而是为了保住模型的智商。

工具和编排逻辑有了,人该怎么把这套路由系统真正跑通?说完了技术机制,接下来是怎么把它做成产品。

Alex 透露了一个极具时代特征的细节:OpenRouter 的自动路由器其实躺了快两年没人用。直到今年一月左右 [[OpenClaw|OpenClaw]] 爆火,路由需求才迎来了拐点 <button class="pd-ts" data-t="26:47" data-who="Alex" data-en="So we've been doing, we've had an auto router for like two years almost. But when we launched it, there was like no adoption of it. People really wanted to use specific models." aria-label="回原文"></button>。

为什么?因为这类智能体应用每 10 分钟就会发一次心跳去检测客户端是否存活,如果你把昂贵的 Opus 设为默认模型,光维持心跳就会烧掉一大笔冤枉钱 <button class="pd-ts" data-t="27:14" data-who="Alex" data-en="And then around January this year, with OpenClaw, it exploded. And the reason it exploded is because there was this fundamental idiosyncrasy in OpenClaw where it sends heartbeats every 10 minutes to your model of choice just to see if the client was still active." aria-label="回原文"></button>。这就逼着系统必须学会:简单的维持指令交给最便宜的模型,复杂的高难度任务才交给[[前沿模型|前沿模型]]。

这就引出了更深一层的架构辩论:到底谁来当这个系统的总指挥?是让大模型做编排,还是让小模型做编排?

Alex 给出了实战结论:对于深度研究这类任务,他们发现让最聪明的模型当"包装模型"(在外层做总控)效果最好 <button class="pd-ts" data-t="17:38" data-who="Alex" data-en="Basically, it's kind of early to... I think the results that we published, which are a couple weeks ago, which were focused on deep research, not coding, we had the smart model be the wrapper model, be the outer model, and we got the best results from doing that." aria-label="回原文"></button>。Walden 则更进一步,为了省下昂贵的缓存命中成本,他们抛弃了传统的"主智能体+子智能体"结构,搞出了一个叫"助手"的机制。

它是一个持续带着运行上下文的智能体,所有缓存的 token 成本能便宜 10 倍,大模型和小模型还能随时互换主次位置 <button class="pd-ts" data-t="18:42" data-who="Walden" data-en="So we don't use subagents. We use what we call a sidekick, which is one subagent that continually has a running context. So the main agent doesn't need to re-provide context from earlier." aria-label="回原文"></button>。除了来回切换,Cognition 甚至在用强化学习(通过奖励信号让模型自己试错学规律的方法)专门训练大模型如何更好地去委派任务,他们认为这是多模型编排下一步的巨大提升 <button class="pd-ts" data-t="19:20" data-who="Walden" data-en="Actually, I think there's a lot of literature out there on how you RL one model to do a task end-to-end. How can you RL a model to also be good at collaboration?" aria-label="回原文"></button>。

那么,这种让模型来回路由、切换的成本边界到底在哪?谭毅和 Carter 从硬件底层补全了最后一块拼图。

他们提到了 NVIDIA 的 [[FlexTron|FlexTron]] 技术:把一个大模型蒸馏出不同大小、不同占用空间的版本,然后根据当前任务的复杂度,在同一个模型构件里动态切换做解码的权重 <button class="pd-ts" data-t="20:23" data-who="Tanay" data-en="Oh, wow. Okay, so we have a technology called Flex Run. So we have a setup where there's a main model, then we distill it into smaller footprints, and then based on the task at hand, you can switch which model does the decoding." aria-label="回原文"></button>。更关键的是,怎么判断一个任务是否超出了小模型的能力?

谭毅抛出了一个很前沿的思路:现在有很多[[幻觉探测头|幻觉探测头]]和线性探针,可以直接读取模型内部状态的向量,以此评估模型是不是已经开始"胡说八道"或者迷失了方向 <button class="pd-ts" data-t="38:28" data-who="Tanay" data-en="So just to add on that, you have a lot of, like these days, there are a lot of hallucination probes. So probes that work on either the internal state of the models directly." aria-label="回原文"></button>,这比单纯看生成 token 的数量要准得多。同时,自托管模型和买 API 的经济学截然不同:买 API 是服务商在摊销所有人的使用情况给你定价,自托管则完全可以根据自己负载的形状,比如具体缓存多长、输入输出多少,做到极致优化并省下一大笔钱 <button class="pd-ts" data-t="36:30" data-who="Tanay" data-en="If you use some provider, they are amortizing everyone's use case and then giving you a price, right? And they have optimized, quote unquote, for general use. If you self-host, you can optimize specifically for your use, and you'll likely pay much less." aria-label="回原文"></button>。

## 本集带走

最后收个尾,这一集值得带走的是三句话。第一,多模型协同是降本增效的核心打法:让最贵的前沿模型只做规划和拍板,把高强度的探索和执行交给一群便宜的小模型去跑,算下来反而比单用大模型更全面、更便宜。

第二,别被理论上百万的上下文窗口忽悠了,模型超载会变蠢,多模型协同的生死线就在于精细的上下文管理——压缩、只给关键信息、利用廉价的缓存 token 互换主次角色。第三,路由器本身正在从一个默默无闻的底层管道,变成智能体时代的刚需产品,未来的终极形态,不仅是靠外部规则硬性调度,而是要用强化学习专门训练模型学会怎么把活儿派给最合适的另一个模型。

<div class="pd-sec">全部金句 <span>3 条</span></div>

> <span class="qz">我认为实际上这是一种非常反直觉的动态,更智能的模型实际上在委派工作方面变得越来越擅长。</span>  
> *I think actually there's this really unintuitive dynamic where smarter models actually get better and better at delegating work.*  
> <span class="qm">—— Walden · [03:54]</span> ^q1

> <span class="qz">如果你在 Opus 和 Haiku 上运行 terminal bench,Opus 的表现会好大约三倍,成本却是 Haiku 的十分之一,尽管 Haiku 每个 token 的价格要便宜得多。</span>  
> *If you run terminal bench on Opus and Haiku, Opus will do about three times better at one-tenth the cost of Haiku, even though Haiku is significantly cheaper per token.*  
> <span class="qm">—— SPEAKER_01 · [15:26]</span> ^q2

> <span class="qz">智能在某个点就会从悬崖上掉下来。</span>  
> *The intelligence just kind of falls off a cliff at some point.*  
> <span class="qm">—— Walden · [32:23]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同公司:NVIDIA · 同概念:Nemotron、前沿模型 (frontier models)、智能体 (agent)</span>
- [[2026-08-11-yc-peter-steinberger-fun-is-velocity-e3n9ea|OpenClaw 创始人复盘:被 18,000 人狂改、被舆论压垮,我学到了什么]]<span class="pd-rz">同公司:NVIDIA · 同概念:KV 缓存 (KV cache)、OpenClaw、智能体 (agent)</span>
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|把 AI 当员工来管理:Claire Vo 的九个智能体生活实战]]<span class="pd-rz">同概念:OpenClaw、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:NVIDIA · 同概念:Nemotron、智能体 (agent)</span>
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|SaaS 不会死,PM 迎来黄金期:Dan Shipper 的 AI 工作预测]]<span class="pd-rz">同概念:OpenClaw、智能体 (agent)</span>
- [[2026-06-24-pg-company-os-jz|Laurel 产品负责人：怎么用 GitHub 把全公司的工作流变成 AI 技能]]<span class="pd-rz">同概念:Devon、智能体 (agent)</span>

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
