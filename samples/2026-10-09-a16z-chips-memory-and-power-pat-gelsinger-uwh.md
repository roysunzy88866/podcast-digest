---
title: 芯片设计变快了，瓶颈却跑到别处去了：Pat Gelsinger 谈 AI 硬件的下一个战场
podcast: The a16z Show
date: 2026-10-09
source_url: undefined
duration: "54:02"
type: episode
cover: "#64748b"
description: 前 Intel CEO、VMware 掌门人 Pat Gelsinger 做客 a16z，聊 AI 时代芯片设计、内存、光网络和电力的新瓶颈。
guests: ["[[Pat Gelsinger]]"]
companies: ["[[Intel]]", "[[VMware]]", "[[Playground Global]]", "[[NVIDIA]]", "[[OpenAI]]", "[[Anthropic]]"]
concepts: ["[[HBM]]", "[[记忆]]", "[[推理]]", "[[智能体]]", "[[虚拟化]]", "[[能源容量]]", "[[光网络]]"]
category: 创业与行业
tags:
  - 创业与行业
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-09-a16z-chips-memory-and-power-pat-gelsinger-uwh#post","headline":"芯片设计变快了，瓶颈却跑到别处去了：Pat Gelsinger 谈 AI 硬件的下一个战场","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-09-a16z-chips-memory-and-power-pat-gelsinger-uwh","mainEntityOfPage":"https://talk.solomind.cc/2026-10-09-a16z-chips-memory-and-power-pat-gelsinger-uwh","description":"前 Intel CEO、VMware 掌门人 Pat Gelsinger 做客 a16z，聊 AI 时代芯片设计、内存、光网络和电力的新瓶颈。","datePublished":"2026-10-09","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Pat Gelsinger"},{"@type":"Organization","name":"Intel"},{"@type":"Organization","name":"VMware"},{"@type":"Organization","name":"Playground Global"},{"@type":"Organization","name":"NVIDIA"},{"@type":"Organization","name":"OpenAI"},{"@type":"Organization","name":"Anthropic"},{"@type":"Thing","name":"HBM"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"虚拟化 (virtualization)"},{"@type":"Thing","name":"能源容量 (energy capacity)"},{"@type":"Thing","name":"光网络 (optical)"}],"articleSection":"创业与行业"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"创业与行业","item":"https://talk.solomind.cc/tags/创业与行业"},{"@type":"ListItem","position":3,"name":"芯片设计变快了，瓶颈却跑到别处去了：Pat Gelsinger 谈 AI 硬件的下一个战场","item":"https://talk.solomind.cc/2026-10-09-a16z-chips-memory-and-power-pat-gelsinger-uwh"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>芯片设计变快了，瓶颈却跑到别处去了：Pat Gelsinger 谈 AI 硬件的下一个战场</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 芯片设计变快了，瓶颈却跑到别处去了：Pat Gelsinger 谈 AI 硬件的下一个战场

<div class="pd-byl"><b>Pat Gelsinger</b> · Playground Global 普通合伙人 · 2026-10-09</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-09-a16z-chips-memory-and-power-pat-gelsinger-uwh.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">每当你拥有让某件事变容易的技术，那就意味着瓶颈转移到了别的地方。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="00:17" data-who="嘉宾" data-en="Whenever you have the technology to make something easy, that means the bottleneck moves somewhere else." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Pat Gelsinger]]
>
> **公司** [[Intel]] · [[VMware]] · [[Playground Global]] · [[NVIDIA]] · [[OpenAI]] · [[Anthropic]]
>
> **概念** [[HBM]] · [[记忆]] · [[推理]] · [[智能体]] · [[虚拟化]] · [[能源容量]] · [[光网络]]

[[Pat Gelsinger|Pat Gelsinger]] 18 岁进 [[Intel|Intel]]，从技术员一路做到 486 处理器的架构师，后来执掌 Intel 和 [[VMware|VMware]]。现在他是 [[Playground Global|Playground Global]] 的普通合伙人。

在这期对谈里，他和 a16z 的两位投资人聊了一个核心问题：

AI 让芯片设计变容易了，但造芯片、供电、连网却越来越难——接下来卡住整个行业的会是什么？

## AI 能三个月设计出芯片，但你要再等九个月才能用

Pat 回忆，486 时代他们没有现成工具，只能自己发明硬件描述语言、自己写编译器、和伯克利教授合作搞出最早的自动布线。

那是现代芯片设计软件产业的起点。

他判断今天正处在类似的转折点：AI 工具已经能完成大量逻辑设计。

假设他和主持人一起创业做芯片，三个月就能拿出很棒的设计。

但问题来了：设计完，晶圆厂生产要三个月，先进封装又要三个月，还得装进机架——「Nothing's a chip anymore, it's a rack.」现在没有芯片这回事了，单位是机架。<button class="pd-ts" data-t="10:58" data-who="Pat Gelsinger" data-en="You know, and then I have to put it into a rack scale solution because nothing's a chip anymore. It's a rack. Yeah, so we're nine months." aria-label="回原文"></button>

等到能用，九个月过去了。

而 AI 工作负载变化极快，一年半后你当初的理解已经过时。他举了 Graphcore 的例子：设计不差，但世界往前走了。

**所以制造和规模化，成了比设计更大的瓶颈**。

## 内存是个糟糕但最好的选择，30 年来第一次要变天

Pat 对现在 AI 芯片标配的 [[HBM|HBM]] 内存评价很不客气：「HBM is a hideous memory. It's just the best one that we've got.」——HBM 是个糟糕的内存，只是我们手里最好的一个。<button class="pd-ts" data-t="12:15" data-who="Pat Gelsinger" data-en="And, you know, for that, as I've described, HBM is a hideous memory. It's just the best one that we've got. We were asking about that." aria-label="回原文"></button>

位密度差、功耗高、发热集中，而 AI 恰恰是吃内存带宽的工作负载。

他说，过去 30 年真正的主流新内存是零——数来数去只有 DRAM、SRAM、Flash。他个人经历过至少 5 种没能上市的新内存架构，包括 Intel 的 Optane——我们把它杀了。

但情况变了：三大内存厂商都进了全球市值前 20，整个行业市值 4 年涨了约 2.5 万亿美元。有了钱和需求，突破终于可能发生。

他提到铁电材料等新方向，还透露自己刚投了一家还在隐身期的新内存公司。「Memory innovation for the first time in 30 years is nigh upon us.」<button class="pd-ts" data-t="26:58" data-who="Pat Gelsinger" data-en="But I think memory innovation for the first time in 30 years is nigh upon us. Yeah, yeah. It's amazing what a couple of $10 billion of market cap can do." aria-label="回原文"></button>

## 芯片会叠多高？答案是三四层，不是十六层

内存和计算必须更紧密地叠在一起，但叠加层数不是越多越好。

层数越多，每一层的良率要求就得指数级上升，一颗碎裂的芯片芯无论如何救不回来。

Pat 的判断是：**三四层是甜蜜点，内存堆叠两到四层就够了**，加上供电、信号布线层，整个封装大概八层厚就到头了。

而且「我们工程师正在变成水管工」——供电、散热、液冷，全是管道活。

他也不看好两个流行方案：一是用光纤把内存拉远（访问大内存池时功耗浪费太多）；

二是存内计算（把计算塞进内存里），因为这个想法已经转了 25 到 30 年，还会再转 25 到 30 年。

对光纤，他倒是铁杆支持者——用于所有输入输出。「I declared the death of copper about 25 years ago.」他 25 年前就宣判了铜线的死刑。「Eventually I'll be right.」总有一天我会说对的。<button class="pd-ts" data-t="35:13" data-who="Pat Gelsinger" data-en="I declared the death of copper about 25 years ago. Eventually, I'll be right. You're still right." aria-label="回原文"></button>

## 一百家 AI 芯片公司？这阵仗不会持久

市面上现在大约有一百家 AI [[推理|推理]]加速芯片公司。**Pat 认为这是暂时的，会回归集中**，理由有三个。

第一，他不相信大规模的专用化。

工作负载本身还在快速迁移：今天大家为预填充和译码分别做专用芯片，明天推理模型又想要更像 CPU 的东西。

为某个切面专门优化的芯片，两三年后可能就对不上需求了。

第二，一百家不可能都赢。芯片要成，需要资本、需要负载、需要规模，市场逻辑决定了会整合。

第三，赢家会挑赢家。[[OpenAI|OpenAI]]、[[NVIDIA|NVIDIA]]、[[Anthropic|Anthropic]] 这样的大玩家会选中某些方案并投入软件生态去扶持。

不过主持人也提出了反面观点：过去指令集难写编译器，所以只能标准化到一两种架构；

现在 AI 代理一晚上就能写出优化内核，异构硬件的编程门槛大幅降低。

Pat 承认这会改变瓶颈位置，但一年半的制造周期加上动辄数百亿的资本开支，仍然会把多样性压回去——而且大公司会把异构性藏到自己的架构里面。

他举例说 NVIDIA 收购 Grok 之后，两年后没人会分得清那是什么，它就变成 NVIDIA 架构的一部分。

## 最硬的瓶颈是电：能源容量就是经济容量

从第一性原理看，Pat 认为美国过去 10 到 15 年里，关停煤电的速度和新增可再生能源一样快，全国[[能源容量|能源容量]]基本持平。

而「In a AI digital age, energy capacity equals economic capacity.」**在 AI 数字时代，能源容量就等于经济容量**。<button class="pd-ts" data-t="43:59" data-who="Pat Gelsinger" data-en="Because in a AI digital age, energy capacity equals economic capacity. So essentially my economic capacity as a nation, flat for 15 years if you buy that thesis, which I think is very, you know, provable." aria-label="回原文"></button>

最近五年情况略有好转，能源容量大约以每年 4% 的速度增长，但远不够。

燃气轮机的交付周期要八年，可再生能源供应链深度依赖中国，上一座美国核电站并网还是 20 年前的事。

他的预言相当直接：会看到越来越多数据中心项目违约，因为电到不了位。==为什么建新数据中心、买一百万块 GPU，如果供不上电==？

Oracle 已经是第一个信号。

出路包括核电（Playground 投了做核能运营的公司）、800 伏直流数据中心、氮化镓功率转换器件，甚至他投的超导公司 Snowcat——有机会把功耗特性改善一千倍。

「Power's cool again」，电力又变酷了。

## 如果重造 VMware：给智能代理用的虚拟化

对谈最后回到两人共同的老东家 VMware。Pat 提出一个开放问题：当主要用户从人变成 AI 代理，[[虚拟化|虚拟化]]的每个环节都需要重做。

==谁来管理成群的代理==？谁来给它们建安全配置、管性能、做迁移？相当于要有代理版的 vMotion。

而人这一端也没消失——人要定政策、定宪法、看仪表盘。

设计约束彻底变了：让代理好用、安全、可抽象，而不是伺候硬件和人。这会是下一层计算体系里诞生一批新公司的地方。

## 本集带走

- AI 把芯片设计从一年压缩到几个月，但制造、封装、上机架仍要九个月，工作负载早变了——规模化成了新瓶颈
- HBM 内存糟糕但别无选择，30 年来第一次，资本和需求同时到位，新内存技术可能真正破局
- 一百家 AI 芯片公司是暂时现象，会因工作负载迁移、资本整合和大客户选边而收敛
- 能源是 AI 的硬上限：数据中心项目将因缺电而违约，核电和高压直流供电是主要出路
- 下一代的 VMware，可能是为 AI 代理而非人类设计的虚拟化层

<div class="pd-sec pd-sec-q">全部金句 <span>17 条</span></div>

> <span class="qz">每当你拥有让某件事变容易的技术，那就意味着瓶颈转移到了别的地方。</span>  
> *Whenever you have the technology to make something easy, that means the bottleneck moves somewhere else.*  
> <span class="qm">—— 嘉宾 · [00:17]</span> ^q1

> <span class="qz">现在已经没有什么东西是一块芯片了，而是一个机架。</span>  
> *Nothing's a chip anymore, it's a rack.*  
> <span class="qm">—— Pat Gelsinger · [00:22]</span> ^q2

> <span class="qz">从历史上看，任何行业从来都没有过一百家相互竞争的处理器厂商。</span>  
> *Historically, there have not been a hundred competing processor vendors in any industry ever.*  
> <span class="qm">—— 嘉宾 · [00:53]</span> ^q3

> <span class="qz">所以，我可以三个月就把这东西设计出来，但实际上我没法在九个月内把它大规模做成真正的硅片。</span>  
> *So, I can design the thing in three months, but I can't actually get it into real silicon at scale for nine months.*  
> <span class="qm">—— Pat Gelsinger · [10:20]</span> ^q4

> <span class="qz">而且，正如我所说，HBM 是一种糟糕的内存，它只是我们目前拥有的最好的选择。</span>  
> *And, you know, for that, as I've described, HBM is a hideous memory. It's just the best one that we've got.*  
> <span class="qm">—— Pat Gelsinger · [12:12]</span> ^q5

> <span class="qz">你知道，它们不会全都赢，它们不会全都赢，因为归根结底，你必须在这些东西上获得规模。</span>  
> *And you know, they're not all going to win and they're not all going to win because at the end of the day, you have to get scale on these things.*  
> <span class="qm">—— Pat Gelsinger · [18:09]</span> ^q6

> <span class="qz">所以我认为，说会有上百家这样的东西，是有点违背逻辑的。</span>  
> *So I think it sort of defies logic that you're going to have a hundred of these things.*  
> <span class="qm">—— Pat Gelsinger · [18:20]</span> ^q7

> <span class="qz">今天，你知道，写一个优化的 kernel，我认为 Calapeño 是一个很好的例子，但他们基本上说，你看，人类已经无法真正为这个东西编程了，但一个智能体群一夜之间就能做到。</span>  
> *Today, you know, writing an optimized kernel for, I mean, I think Calapeño was a great example, but they basically said, look, humans can't really program this thing anymore, but an agent swarm overnight can do it.*  
> <span class="qm">—— 嘉宾 · [20:27]</span> ^q8

> <span class="qz">那么过去 30 年里，我们到底有过多少种主要的新内存？零。</span>  
> *And exactly how many major new memories have we had over the last 30 years? Zero.*  
> <span class="qm">—— Pat Gelsinger · [23:17]</span> ^q9

> <span class="qz">但我认为三十年来的首次存储创新即将到来。</span>  
> *But I think memory innovation for the first time in 30 years is nigh upon us.*  
> <span class="qm">—— Pat Gelsinger · [26:55]</span> ^q10

> <span class="qz">而每比特通信的飞焦耳相对而言差了大约一千倍。</span>  
> *The femtojoules per bit of communication is comparatively a thousand times worse.*  
> <span class="qm">—— Pat Gelsinger · [33:35]</span> ^q11

> <span class="qz">我大约 25 年前就宣告了铜的死亡。最终，我会是对的。</span>  
> *I declared the death of copper about 25 years ago. Eventually, I'll be right.*  
> <span class="qm">—— Pat Gelsinger · [35:10]</span> ^q12

> <span class="qz">你知道，实际上，我本来就不应该建造 NVL 72。这是一项工程奇迹，但也是一场制造噩梦，对吧？</span>  
> *You know, in reality, I should have never built an NVL 72. You know, it's an engineering marvel and it's a manufacturing nightmare, right?*  
> <span class="qm">—— Pat Gelsinger · [36:47]</span> ^q13

> <span class="qz">因为在 AI 数字时代，能源容量等于经济容量。</span>  
> *Because in a AI digital age, energy capacity equals economic capacity.*  
> <span class="qm">—— Pat Gelsinger · [43:53]</span> ^q14

> <span class="qz">而且我认为你会看到越来越多的数据中心项目出现违约，因为能源不会到位。</span>  
> *And I think you're going to see more and more defaults happening on many of those data center projects because the energy won't be there.*  
> <span class="qm">—— Pat Gelsinger · [45:28]</span> ^q15

> <span class="qz">顺便说一下，作为工作负载演进的另一个特征，我确实认为训练和推理的分离未来会变得不那么明显，而不是更明显。</span>  
> *By the way, as another characteristic of workload evolution, I do think the separation of training and inferencing is going to become less so going forward, not more so.*  
> <span class="qm">—— Pat Gelsinger · [40:41]</span> ^q16

> <span class="qz">人类比智能体有耐心得多。</span>  
> *Humans are a lot more patient than agents.*  
> <span class="qm">—— 嘉宾 · [51:13]</span> ^q17

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「创业与行业」挖下去**

- [[2026-08-18-iltb-ben-thompson-on-big-tech-china-and-the-a|Ben Thompson:美国赢得 AI 竞赛反而是危险的]]<span class="pd-rz">同公司:Anthropic、Intel、NVIDIA、OpenAI · 同概念:推理 (inference)</span>
- [[2026-09-05-twentyvc-20vc-how-to-build-your-own-data-center-w|每块 GPU 多付 10 万美元插队：Speechify 创始人的算力账与战略悔棋]]<span class="pd-rz">同公司:Anthropic、NVIDIA、OpenAI · 同概念:推理 (inference)、智能体 (agent)</span>
- [[2026-09-10-newcomer-zavain-dar-on-hugging-face--nvidia--why|从 Hugging Face 到中国药企：NVIDIA 的开源终局与 AI 制药的未来]]<span class="pd-rz">同公司:Anthropic、NVIDIA、OpenAI · 同概念:推理 (inference)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-10-08-doac-ai-safety-whistleblower-700-ai-agents-at|700 个 AI 智能体联手攻击公司，只为掩盖自己作弊]]<span class="pd-rz">同公司:Anthropic、OpenAI、NVIDIA · 同概念:智能体 (agent)、推理 (inference)</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同公司:Anthropic · 同概念:内存创新 (memory)、智能体 (agent)、推理 (inference)</span>
- [[2026-08-13-talks-how-unify-cut-its-ai-agent-costs-95-in-t|9亿美元管道背后:Unify CTO 谈怎么把销售智能体的成本打下来]]<span class="pd-rz">同公司:OpenAI、Anthropic · 同概念:内存创新 (memory)、智能体 (agent)</span>

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
