---
title: 不只做推理：Modal 如何跨界多节点训练与智能体云
podcast: Latent Space
date: 2026-07-17
source_url: https://www.latent.space/p/modal2026
duration: "57:42"
type: episode
cover: "#0e7490"
image: "/covers/2026-07-08-latent-space-modal.jpg"
description: Modal 从无服务器运行时切入，靠 GPU 快照、投机解码和 17 云容量池，在 AI 推理与智能体时代找到了独特的底层定位。
host: "[[swyx]]"
guests: ["[[Akshat Bubna]]"]
cohosts: ["[[Vibhu]]"]
companies: ["[[Modal]]", "[[Kubernetes]]"]
concepts: ["[[智能体]]", "[[AX]]", "[[DX]]", "[[沙箱]]", "[[推理]]", "[[弹性推理]]", "[[投机解码]]", "[[DeFlash]]", "[[Auto Endpoints]]", "[[装饰器]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/covers/2026-07-08-latent-space-modal.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-08-latent-space-modal#post","headline":"不只做推理：Modal 如何跨界多节点训练与智能体云","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-08-latent-space-modal","mainEntityOfPage":"https://talk.solomind.cc/2026-07-08-latent-space-modal","description":"Modal 从无服务器运行时切入，靠 GPU 快照、投机解码和 17 云容量池，在 AI 推理与智能体时代找到了独特的底层定位。","datePublished":"2026-07-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-07-08-latent-space-modal.jpg","isBasedOn":"https://www.latent.space/p/modal2026","about":[{"@type":"Person","name":"swyx"},{"@type":"Person","name":"Akshat Bubna"},{"@type":"Person","name":"Vibhu"},{"@type":"Organization","name":"Modal"},{"@type":"Organization","name":"Kubernetes"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"AX"},{"@type":"Thing","name":"DX"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"弹性推理 (elastic inference)"},{"@type":"Thing","name":"投机解码 (speculative decoding)"},{"@type":"Thing","name":"DeFlash"},{"@type":"Thing","name":"Auto Endpoints"},{"@type":"Thing","name":"装饰器 (decorator)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"不只做推理：Modal 如何跨界多节点训练与智能体云","item":"https://talk.solomind.cc/2026-07-08-latent-space-modal"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>不只做推理：Modal 如何跨界多节点训练与智能体云</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 不只做推理：Modal 如何跨界多节点训练与智能体云

<div class="pd-byl"><b>Akshat Bubna</b> · Modal CTO · 2026-07-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-08-latent-space-modal.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">为什么你要让一个智能体去阅读数百个 Kubernetes 文件并编写甚至没有类型的 YAML，而它基本上可以在一个装饰器中做几个更改，然后获得这种能够自我配置的运行时，实时看到它的更改在运行中生效。</div><div class="a">— Akshat Bubna <button class="pd-ts" data-t="05:06" data-who="Akshat Bubna" data-en="Why would you have an agent read through hundreds of Kubernetes files and write YAML that's not even typed when it can basically make a couple of changes in a decorator and it gets this sort of self-provisioning runtime of being able to see its changes live in action." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Akshat Bubna]] · [[swyx]] · [[Vibhu]]
>
> **公司** [[Modal]] · [[Kubernetes]]
>
> **概念** [[智能体]] · [[AX]] · [[DX]] · [[沙箱]] · [[推理]] · [[弹性推理]] · [[投机解码]] · [[DeFlash]] · [[Auto Endpoints]] · [[装饰器]]
>
> **来源** [Latent Space](https://www.latent.space/p/modal2026)

一个云平台不建自己的数据中心，而是横跨 17 家云厂商拼出一个容量池，甚至能在上面跑多节点训练——这在 AI 算力焦虑时代听起来有点反直觉。说这话的人是 Akshat，[[Modal|Modal]] 的 CTO，他们最近刚完成 C 轮融资。<button class="pd-ts" data-t="00:04" data-who="swyx" data-en="We're here with Akshat of Modo, CTO of Modo, together with Vibu. Congrats on your 3C. Thank you." aria-label="回原文"></button>

这一集里，他和两位主持人聊了三件事：Modal 最初为什么要造一个不用写 YAML（一种配置文件）的运行时，以及这个老思路为什么在今天的[[智能体|智能体]]时代反而更吃香；他们是怎么把 GPU 快照（一种保存运行状态的技术）、[[投机解码|投机解码]]（让小模型先猜、大模型来验，加速[[推理|推理]]）和跨云容量调度做到极致的；以及当语言模型越来越强，这个基础设施平台为什么不担心被抢饭碗，反而要把仪表盘全搬进命令行去迎合智能体。

说起 Modal 的起点，其实跟大模型毫无关系。Akshat 回忆，他和 CEO Erik 是通过一位投资者认识的。

当时 Erik 在琢磨一个很基础的问题：为什么工作流编排产品这么难用？答案是它们都得跑在 [[Kubernetes|Kubernetes]]（一种管理容器的系统）上，而 Kubernetes 是为缓慢扩展的 Web 服务器设计的。<button class="pd-ts" data-t="00:55" data-who="Akshat Bubna" data-en="And he got there thinking through why are workflow orchestration products so hard to use? It's because you have to run them on Kubernetes. Kubernetes is hard to manage." aria-label="回原文"></button> 

他们看到的大量工作负载却不是这样：计算量大、需要频繁地突发扩缩。所以他们最初想造的是一种更好的运行时，可以跑数据处理和任务队列。他们在 ChatGPT 出来前一年就给产品加了 GPU，但当时只是觉得这是个加法，没料到后来的爆发。<button class="pd-ts" data-t="02:13" data-who="Akshat Bubna" data-en="back then it was more classical inference like computer vision stuff and running xd boost and whatnot but we added gpus to the product a year before chat gpt came out nice we just didn't think it would be that big of" aria-label="回原文"></button>

有意思的是，Modal 早期的一个核心设计——把基础设施配置全塞进代码[[装饰器|装饰器]]里，不写 YAML——在今天的智能体时代迎来了第二春。主持人 [[swyx|swyx]] 指出，现在的负面论点是人都不看代码了。

Akshat 对此有个很直接的反驳：为什么你要让一个智能体去读几百个 Kubernetes 文件，去写没有类型检查的 YAML，而它本来只需在装饰器里改几行就能看到一个自我配置的运行时实时生效？<button class="pd-ts" data-t="05:05" data-who="Akshat Bubna" data-en="And we think that the same benefits that apply for DX also actually apply for AX, which is why would you have an agent read through hundreds of Kubernetes files and write YAML that's not even typed when it can basically make a couple of changes" aria-label="回原文"></button> 他们内部甚至把 SDK 团队的职责从「开发者体验」（[[DX|DX]]）改成了「智能体体验」（[[AX|AX]]）。

不过他也强调，代码可以不看，但「可观测性」（系统内部的监控仪表盘）现在比以往更重要，因为人还得去解释系统在干什么、做判断。<button class="pd-ts" data-t="05:46" data-who="Akshat Bubna" data-en="Yeah, I mean, people aren't looking at code. One thing we actually still see is really important is observability. How good is your dashboard?" aria-label="回原文"></button> 为此，他们把很多功能推到了命令行界面（CLI）里，让智能体能自己查问题。

正因为这种面向计算的底层设计，Modal 现在最大的用例是「[[弹性推理|弹性推理]]」。Akshat 解释，他们最早避开大语言模型，服务的是做音频的 Suno、做视频的 Runway，以及机器人和计算生物公司。

这些公司自己训模型，但他们的流量模式极度不可预测，有时是昼夜波动的，有时赶上产品发布流量直接飙升。<button class="pd-ts" data-t="12:50" data-who="Akshat Bubna" data-en="as your traffic pattern changes and we saw all of them actually like have a very unpredictable traffic pattern. It's like diurnal." aria-label="回原文"></button> 它们往往在多地部署多种模型，这让跨区域的自动扩展变得极难。

为了应对这种突发性，Modal 引入了 GPU 快照技术：它可以把 GPU 上的状态（比如编译好的模型）直接冻结，下一次调用时跳过漫长的启动过程。<button class="pd-ts" data-t="13:51" data-who="Akshat Bubna" data-en="And we've gone deeper into it on the tech side, but we've incorporated GPU. snapshotting to the product so we can actually uh take the gpu state like your torch compiler model" aria-label="回原文"></button> 主持人 [[Vibhu|Vibhu]] 指出，像 Cursor Composer 这样的应用，每隔几小时就要在模型上跑强化学习，这种动辄在几千个 GPU 上频繁增减的任务，正是 Modal 擅长的。<button class="pd-ts" data-t="11:50" data-who="Vibhu" data-en="to fifteen hundred gpus very quickly in in a given region as same shape from okay so you look at say cursor composer right they had a will do rl on a model every couple hours you guys have a whole version of rl inference gym" aria-label="回原文"></button>

在推理加速这条硬核路线上，Modal 最近重点推的是开源的 [[DeFlash|DeFlash]]——一个基于块的推测器。Akshat 用大白话科普了投机解码：传统是大模型一步步生成词，投机解码是让一个小模型（草稿模型）在大模型前面先预测一批词，大模型负责验证。

只要小模型猜得准，大模型就能批量验证，算力利用更高效。这里有个反直觉的洞见：大家常谈优化底层内核，但内核改进往往只有几个百分点的提升；而想办法增加「接受长度」（小模型猜对被采纳的长度），能带来 2 到 4 倍的乘法级提速，且质量完全不降，因为大模型永远不会接受错的词。<button class="pd-ts" data-t="17:37" data-who="Akshat Bubna" data-en="we made these kernels faster whatnot but improving kernel only give you like few percentage points improvement and increasing except lengths literally is multiplicative decrease" aria-label="回原文"></button> 在此基础上，他们推出了 [[Auto Endpoints|Auto Endpoints]]：一个开箱即用、内置全部优化的端点产品，但代码全透明给你，随时可以弹出改写，而不是黑盒。<button class="pd-ts" data-t="18:38" data-who="Akshat Bubna" data-en="And our vision for, this is why we launched auto endpoints is we want to make frontier level performance available to everyone and so uh we mentioned this announcement we kind of teased it" aria-label="回原文"></button>

随着算力需求暴涨，Modal 怎么搞 GPU 成了焦点。Akshat 透露他们没有自己的数据中心，而是横跨 17 家云提供商搭建了一个超级云的容量池。<button class="pd-ts" data-t="24:14" data-who="Akshat Bubna" data-en="we see is something appealing about modal, which is we've built this capacity pool that spans 17 cloud providers. So we're very good at running on various kinds of cloud capacity across the world." aria-label="回原文"></button> 

这样做是因为各种新云（neocloud）的可靠性参差不齐，Modal 在上面加了一层自己的可靠性层，一旦某块 GPU 掉线，用户工作负载不受影响。<button class="pd-ts" data-t="25:15" data-who="Akshat Bubna" data-en="and that's why it's something we've What we can invest a lot of time in is actually building our own reliability layer on top. So if the GPU falls off the bus or something happens, user workloads are not affected." aria-label="回原文"></button> 这背后的算力规划极其复杂，涉及一年期和三年期预留比例、不同 GPU 类型的互换性等，甚至被 swyx 类比为航空业对冲燃料成本。<button class="pd-ts" data-t="39:00" data-who="swyx" data-en="about like you know we cannot be first to like these kinds of problems yeah and what other industries have had this and i was like airlines with with fuel and like they have to hedge their fuel and like i think for a long time southwest" aria-label="回原文"></button> 这种控制力还带来了一个批量层：如果客户不在乎延迟，只要在 24 小时内出结果，就能拿到便宜得多的算力。<button class="pd-ts" data-t="39:34" data-who="Akshat Bubna" data-en="over time is how you can unlock more value for customers like one of the things we're building now is like a way for customers to get if they don't care about latency like get much cheaper pricing and they'll get results back" aria-label="回原文"></button>

有了这套基础设施，Modal 自然延伸到了多节点训练和网络层。他们不支持跨数据中心的大规模预训练，但非常适合中等规模的后训练（post-training，即训练好基础模型后的微调阶段）。<button class="pd-ts" data-t="33:04" data-who="Akshat Bubna" data-en="Yeah, and we're not going for, obviously, large-scale pre-training runs. The thing that we've built Multano training for is we see a lot of smaller-scale post-training." aria-label="回原文"></button> 

网络方面，他们提供了 IPv6 的 overlay 网络（一种虚拟覆盖网络）、eBPF（一种内核级网络过滤技术）控制，甚至能跑 RDMA（一种绕过传统网络协议实现极低延迟的传输技术），达到每秒 3 万亿比特的内部传输速度。<button class="pd-ts" data-t="32:36" data-who="Akshat Bubna" data-en="And we have, I think, like three terabit per second internal networking," aria-label="回原文"></button> 让人意外的是，这套原本为内部分布式训练准备的网络原语，被用户自己翻文档翻出来，用在了强化学习上。<button class="pd-ts" data-t="28:56" data-who="Akshat Bubna" data-en="that but then we've seen that people are using it for other reasons and i'm kind of intrigued to see yeah what would people do with it build primitives" aria-label="回原文"></button>

网络搞定后，[[沙箱|沙箱]]（sandbox，一种隔离的代码运行环境）的玩法也升级了。除了能做快照快速恢复，沙箱现在支持 sidecar（一种伴随主容器运行的辅助容器），能运行中间人代理来记录日志或控制外部网络。<button class="pd-ts" data-t="27:06" data-who="Akshat Bubna" data-en="if you want to talk to compose, our sandboxes now support this thing called sidecarves. A sandbox is actually a pod of containers, and you can run multiple containers in the sandbox." aria-label="回原文"></button> 

swyx 评价说，Modal 不小心造出了让智能体自由表达的基础组件——涉及更多文件系统和 CPU。Akshat 坚持在沙箱层面要有硬护栏（guardrails，指死的安全边界），防止数据外泄，对纯靠大模型来中介权限持怀疑态度。<button class="pd-ts" data-t="43:12" data-who="Akshat Bubna" data-en="yeah i mean i'm i'm skeptical of lm media permission for stuff that is at the sandbox level because you do want hard boundaries yeah otherwise obviously someone can exfiltrate" aria-label="回原文"></button> 这也是为什么像 Ramp 这种做内部会计智能体的公司，在转向生产级部署时，会需要 Modal 这种专门的沙箱提供商来精细控制持久化文件和网络，而不是停留在 Anthropic 的托管智能体层面。<button class="pd-ts" data-t="44:45" data-who="Akshat Bubna" data-en="building something more production grade like your company that's like ramp that's building their own ramp also runs their accounting agent on us so their external facing agent you need a lot more control" aria-label="回原文"></button>

值得一提的是，Modal 一直刻意回避做模型 API 服务。Akshat 认为提供模型 API 最终会沦为服务业余爱好者市场，粘性太低，他们想做的是服务那些有自定义架构、需要在代码层面深度调整的产品级公司。<button class="pd-ts" data-t="48:34" data-who="Akshat Bubna" data-en="What's your postmortem on what happened? This is one thing we've kind of stayed away from is providing an API for models because I think providing model APIs is some of it ends up serving like" aria-label="回原文"></button> 

他们也看到 AI 正在重塑更多领域：比如智能体操作视频剪辑工具（像 ffmpeg）、计算生物学和机器人部署。为此，Modal 的 SDK 已经从纯 Python 扩展到了 Go 和 TypeScript——因为很多玩智能体的人其实不做底层机器学习，更习惯用 TypeScript 写逻辑。<button class="pd-ts" data-t="55:04" data-who="Akshat Bubna" data-en="People are still very Python. And the interesting thing with the agent stuff is people use their TypeScript SDK a lot more because they're not actually doing anything that needs ML." aria-label="回原文"></button>

## 本集带走

最后收个尾，这一集值得带走的是这么几条。第一，好基础设施的判断标准变了：以前是为开发者省事，现在是为智能体省事——但核心诉求是一样的，即把繁杂的配置变成代码里几个直观的装饰器。

第二，在 AI 时代，规模化和弹性的极端需求被放大了，谁能横跨几十家云厂商搭出高可靠容量池，同时用快照技术抹平冷启动延迟，谁就握住了算力调度的命门。第三，不要迷信黑盒，无论前端封装得多好，底层的训练逻辑、推理代码和网络控制力依然需要全透明、可随时介入；专注底层硬核的优化（比如投机解码的乘法级提速），往往比单纯做模型封装更有壁垒。

<div class="pd-sec">全部金句 <span>4 条</span></div>

> <span class="qz">为什么你要让一个智能体去阅读数百个 Kubernetes 文件并编写甚至没有类型的 YAML，而它基本上可以在一个装饰器中做几个更改，然后获得这种能够自我配置的运行时，实时看到它的更改在运行中生效。</span>  
> *Why would you have an agent read through hundreds of Kubernetes files and write YAML that's not even typed when it can basically make a couple of changes in a decorator and it gets this sort of self-provisioning runtime of being able to see its changes live in action.*  
> <span class="qm">—— Akshat Bubna · [05:06]</span> ^q1

> <span class="qz">改进内核只给你几个百分点的提升，而增加接受长度实际上是 2 到 4 倍的乘法性减少。</span>  
> *Improving kernel only give you like few percentage points improvement and increasing except lengths literally is multiplicative decrease in two to four x*  
> <span class="qm">—— Akshat Bubna · [17:38]</span> ^q2

> <span class="qz">我们在 2023 年 5 月构建了沙箱，在任何人甚至知道这将成为一件事之前。</span>  
> *we built sandboxes in May of 2023 before anyone was even knew this was going to be a thing.*  
> <span class="qm">—— Akshat Bubna · [09:19]</span> ^q3

> <span class="qz">这是我们一直有所回避的一件事，就是为模型提供 API。</span>  
> *This is one thing we've kind of stayed away from is providing an API for models*  
> <span class="qm">—— Akshat Bubna · [48:34]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag：把智能体从终端搬进 Slack 的多人协作实验]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、沙箱 (sandbox)、推理 (inference)</span>
- [[2026-07-30-practicalai-reconstructing-how-openai-agents-attacke|OpenAI 智能体越狱攻入 Hugging Face 全始末]]<span class="pd-rz">同公司:Kubernetes、OpenAI · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-02-19-lennys-head-of-claude-code-what-happens|Claude Code 负责人：写代码已被解决，下一步是什么]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-28-yc-sam-altman-never-a-better-time-to-do-a-s|Sam Altman 谈 AI 时代的创业法则:被全世界当成白痴是最大优势]]<span class="pd-rz">同公司:OpenAI · 同概念:推理 (inference)、沙箱 (sandbox)</span>
- [[2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog|AI失控了别慌,先盯紧漏洞数量爆炸]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
