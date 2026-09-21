---
title: 推理才是赚钱的生意：Positron 联合创始人谈内存墙、缓存暴利与「守住前沿」之争
podcast: The Twenty Minute VC
date: 2026-09-19
source_url: undefined
duration: "71:41"
type: episode
cover: "#64748b"
image: "/covers/2026-09-19-twentyvc-20vc-anti-data-centres-is-a-chinese-psyo.jpg"
description: Positron AI 联合创始人 Thomas Somers 解释 AI 推理的硬件经济学：为什么推理是内存受限、缓存 token 利润有多离谱，以及他为何反对「守住前沿」。
host: "[[Thomas Sohmers]]"
cohosts: ["[[Harry Stebbings]]"]
companies: ["[[Positron]]", "[[Anthropic]]", "[[OpenAI]]", "[[NVIDIA]]"]
concepts: ["[[推理]]", "[[内存墙]]", "[[KV 缓存]]", "[[token]]", "[[上下文长度]]", "[[智能体]]", "[[守住前沿]]", "[[数据中心]]", "[[量化]]", "[[缩放定律]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/covers/2026-09-19-twentyvc-20vc-anti-data-centres-is-a-chinese-psyo.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-19-twentyvc-20vc-anti-data-centres-is-a-chinese-psyo#post","headline":"推理才是赚钱的生意：Positron 联合创始人谈内存墙、缓存暴利与「守住前沿」之争","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-19-twentyvc-20vc-anti-data-centres-is-a-chinese-psyo","mainEntityOfPage":"https://talk.solomind.cc/2026-09-19-twentyvc-20vc-anti-data-centres-is-a-chinese-psyo","description":"Positron AI 联合创始人 Thomas Somers 解释 AI 推理的硬件经济学：为什么推理是内存受限、缓存 token 利润有多离谱，以及他为何反对「守住前沿」。","datePublished":"2026-09-19","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-19-twentyvc-20vc-anti-data-centres-is-a-chinese-psyo.jpg","about":[{"@type":"Person","name":"Thomas Sohmers"},{"@type":"Person","name":"Harry Stebbings"},{"@type":"Organization","name":"Positron"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"OpenAI"},{"@type":"Organization","name":"NVIDIA"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"内存墙 (memory wall)"},{"@type":"Thing","name":"KV 缓存 (KV cache)"},{"@type":"Thing","name":"token"},{"@type":"Thing","name":"上下文长度 (context length)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"守住前沿 (pacing the frontier)"},{"@type":"Thing","name":"数据中心 (data center)"},{"@type":"Thing","name":"量化 (quantization)"},{"@type":"Thing","name":"缩放定律 (scaling laws)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"推理才是赚钱的生意：Positron 联合创始人谈内存墙、缓存暴利与「守住前沿」之争","item":"https://talk.solomind.cc/2026-09-19-twentyvc-20vc-anti-data-centres-is-a-chinese-psyo"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>推理才是赚钱的生意：Positron 联合创始人谈内存墙、缓存暴利与「守住前沿」之争</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 推理才是赚钱的生意：Positron 联合创始人谈内存墙、缓存暴利与「守住前沿」之争

<div class="pd-byl"><b>Thomas Sohmers</b> · Positron 联合创始人 · 2026-09-19</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-19-twentyvc-20vc-anti-data-centres-is-a-chinese-psyo.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">从 2014 年，也就是新 AI 时代非常早期的阶段，到 2024 年，GPUs 的 flops 提升了大约 120 倍</div><div class="a">— Thomas Sohmers <button class="pd-ts" data-t="07:43" data-who="Thomas Sohmers" data-en="between 2014, just very early innings of the new AI era till 2024, you had about 120x improvement in the flops of GPUs." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Thomas Sohmers]] · [[Harry Stebbings]]
>
> **公司** [[Positron]] · [[Anthropic]] · [[OpenAI]] · [[NVIDIA]]
>
> **概念** [[推理]] · [[内存墙]] · [[KV 缓存]] · [[token]] · [[上下文长度]] · [[智能体]] · [[守住前沿]] · [[数据中心]] · [[量化]] · [[缩放定律]]

这一集聊的是支撑整个 AI 经济的底层：[[推理|推理]]基础设施——也就是模型训练完之后、每天给全世界用户生成回答所需要的硬件。主角是 Thomas Somers,推理芯片公司 [[Positron|Positron]] AI 的联合创始人兼董事长，他们刚以 50 亿美元估值完成 8.75 亿美元的 C 轮融资。他在这集里毫不保留：从「[[内存墙|内存墙]]」讲到 [[Anthropic|Anthropic]] 的 API 毛利率，再到他为什么总体上反对「[[守住前沿|守住前沿]]」(pace the frontier,即最大的模型提供商提议放慢前沿模型研发节奏)的整个方向。

## 推理和训练是两种完全不同的活

训练从底层看是计算受限的问题：flops(每秒浮点运算次数)越多越好，因为有全部训练数据在手，可以大规模并行碾压。但推理是生成式的——你不知道往下第五个词是什么，每个 [[token|token]] 都必须按顺序、没有预知地自回归生成，而每生成一个 token 都要完整读一遍模型权重。所以推理是重度内存受限的问题，没法像训练那样并行 [05:05-07:03 Thomas Somers]。

这就是「内存墙」的体现：这个词在 AI 热潮前就有，但过去十年它变成了尖锐矛盾。从 2014 到 2024,单块 [[NVIDIA|NVIDIA]] GPU 的 flops 提升了约 120 倍，内存带宽却只提升 17 倍 <button class="pd-ts" data-t="07:41" data-who="Thomas Somers" data-en="And while that has been able to result in greater raw compute, flops, et cetera, the improvement of the memory technology is not kept up at the same rate. So roughly speaking, between 2014, just very early innings of the new AI era till 2024, you had about 120x improvement in the flops of GPUs." aria-label="回原文"></button>。原因是芯片上的 SRAM(静态内存)单元过去约 15 年基本没随摩尔定律缩小，而且 2010 年代的主流模型(CNN 时代)本来就是计算受限的，整个行业没有动机去优化内存——直到 transformer 和 GPT-3 证明堆参数真的有用 [08:42-10:39 Thomas Somers]。

## 缓存 token 是印钞机

token 经济里最被低估的事实：处理一个缓存命中的 token,成本只有真正重新计算的千分之一量级，而几乎所有提供商都在向用户收缓存写入费(费率比普通输入还高)和缓存读取费(看似便宜，实则利润惊人)[11:05-11:56 Thomas Somers]。这解释了为什么据报道 Anthropic 的 API 业务毛利高达 80 个点。

Thomas 对此并不惊讶，且相信竞争会把利润率压下来；他更惊讶的是还有人认为 [[OpenAI|OpenAI]]、Anthropic 是「烧钱将死」的生意——如果他们停止训练，一夜之间就能巨额盈利 [12:32-12:53 Thomas Somers]。他开玩笑说，「守住前沿」的讨论像是 IPO 前降成本的好借口，但他不认为任何人真需要这么做。

## 为什么他反对「守住前沿」

Thomas 有两大担忧。一是推动暂停等于给卢德派(反对新技术的人)递弹药，助长那些想彻底叫停技术的力量。二是他最担心的 AI 结局：技术和能力集中在少数人手里——「让矩阵乘法变得需要合法许可」，会把人类拖回启蒙运动之前的水平；大玩家会成为新的领主和国王，其他所有人重回农奴 [14:03-15:23 Thomas Somers]。

至于 Motive,他毫不客气：除了 Dario 和 Anthropic 内部的大多数「真信徒」，其他人支持放缓各有算盘——Zuck 想让对手去做合规、Sam 有理由不 IPO、Elon 想要追赶时间 [15:26-15:44 [[Harry Stebbings|Harry Stebbings]] / Thomas Somers 认同]。更天真的是以为西方能单方面踩刹车：「除非全球 AI 社区一起踩，否则你没法守住前沿，而我不认为普京会签字。」<button class="pd-ts" data-t="18:39" data-who="Harry Stebbings, Thomas Somers 表示同意" data-en="Because to me, I just didn't get it. You can't pace the frontier unless the global AI community paces the frontier, and I don't see Putin signing up. Agreed." aria-label="回原文"></button> 他还批评西方以为领先太多不可能被追上，就像为上一场战争建军。

## 反数据中心情绪是战略自杀

政治光谱上最让他害怕的：反[[数据中心|数据中心]]成了左右两派几乎团结一致的议题——「我认为这几乎完全是一场中国的心理战」<button class="pd-ts" data-t="21:35" data-who="Thomas Somers" data-en="And I would say I probably appreciate Zuck or Dario's comments infinitely more than a random politician and not just random, the quote unquote leading politicians that don't actually understand the technology." aria-label="回原文"></button>。理由：早期流传的数据中心用水数据大量是错的，现代数据中心多为闭环液冷，高尔夫球场的用水量高出几个数量级；而中国一边坐看西方基于虚假信息内耗，一边狂建吉瓦级新发电容量和巨型数据中心。更荒谬的是监管：数据中心其实不可能从已分配给民宅的电力里取电，新建的数据中心自带发电能力，本可以接入电网压低所有人的电价，却被挡在外面；电力公司还在游说反对新增发电容量，因为更多容量会降价 [25:41-26:40 Thomas Somers]。

## KV 缓存：推理经济的真正杠杆

[[KV 缓存|KV 缓存]](把模型内部随对话生成的两个中间矩阵存下来、避免对已处理内容重复计算)是推理省钱的核心。关键发现：业界最有价值的工作负载恰好高度可缓存——Semi-Analysis 基于 Claude Code 会话的 AgentX 基准显示，[[智能体|智能体]]编码会话中约 96% 的 token 都是缓存命中的 [39:05-39:35 Thomas Somers]。

这带来一个残酷的内存权衡：GPT-4 级别的模型权重约 900 GB,但长上下文下单个用户会话可达上百 GB——只要 50 个用户，用户上下文就超过模型权重本身 [39:54-40:36 Thomas Somers]。所以业界用分层存储：活跃会话放加速器内存，刚离开的放主机内存(约 4-10 倍容量)，更久远的放 NVMe 闪存乃至慢速 SSD。压缩则靠[[量化|量化]](用更少的比特表示数值)：从 FP16 压到约 4.5 比特/值是先进水平，朴素压缩会让基准掉 20-30%,先进方案能控制在 1% 以内的损失 [37:27-38:31 Thomas Somers]。

## 上下文长度才是智能体真正的瓶颈

Thomas 认为要做出能接管整个程序员团队的智能体，主要限制不是模型能力，而是它能装下多少上下文。百万 token 现在是常态，但离装下大代码库还很远；有 1000 万 token 上下文才够装多个大代码库并交叉启发 <button class="pd-ts" data-t="58:47" data-who="Thomas Somers" data-en="But the reality is, and to go back to your previous question of everyone does want greater context length. If I had 10 million token context length, I think that would be enough for holding multiple of our largest code bases and really have that cross-pollination happen between them for an agentic coding model." aria-label="回原文"></button>。

难点是二次方增长的内存成本，而破解方向——线性注意力、稀疏注意力——主要由中国的模型实验室做出，因为他们被出口管制卡住了最高端芯片，只能在算法上创新：DeepSeek 的多头潜在注意力(MLA)大幅压缩 KV 缓存，gated DeltaNet 能把注意力部分耗时砍约 75% [56:42-57:50 Thomas Somers]。但他提醒：MLA 不是免费午餐，会付出模型能力代价——这也是为什么没有一家美国大厂在用 [58:02-58:30 Thomas Somers]。另外，宣称支持长上下文和真正用好它是两回事：GPT 5.6 在「大海捞针」长上下文测试里只有约 70% 正确率，GPT 6 Astra 超过 95% [59:56-60:06 Thomas Somers]。

## 别再只看 token 价格

token 价格指数从五年前每百万 60 美元跌破 1 美元，但 Thomas 认为真正的信号是质量：五年前的 token 今天没人肯花一分钱，现在一美元买到的 token 价值高出天文数字——单位智能的价值可能接近千倍增长，而不只是 60 倍降价 [60:33-62:27 Thomas Somers]。定价方式也在变:Greg Brockman 说 OpenAI 不会用 token 定价太久，想转向按有效结果计费；Thomas 认为 token 计价因好算成本和利润率会长期保留，但若未来出现超人类的虚拟员工模型，OpenAI 可能干脆按每年几百万美元收「不限量使用权」。

## 他的亲身震撼：AI 走通芯片设计全流程

每次新模型发布，Thomas 都试着让模型完成一个芯片设计任务：从加密模块的规格出发，写 Verilog(硬件描述语言)，走完整个 RTL 到 GDS 流程，得到理论上可流片的设计。过去所有模型都在中途大量失败——因为 EDA 工具(芯片设计软件)是 90 年代设计的，文档根本不在公开网上。

而 GPT 6 Astra 用台积电工艺，50 多个小时跑完全流程并在超过 1 千兆赫兹的频率下满足时序；同样的事交给一个新人，跑通要一周，优化到位还要一到两周 [51:43-53:32 Thomas Somers]。他还说 GPT 6 Astra 就是 AGI,最初 24 小时的体验堪比 2022 年第一次用 ChatGPT;并透露他 2022 年就在 NeurIPS 现场看 Sam 和 Ilia 发布 ChatGPT——当时零宣传，只是一句顺带提及 [49:02-49:29 Thomas Somers]。

## 本集带走

- **训练堆算力，推理拼内存**：训练可以并行碾压，推理每个 token 都要读全部权重——「内存墙」(flops 涨 120 倍、带宽只涨 17 倍)是推理成本问题的根源。
- **缓存是利润命脉**：缓存命中的 token 成本只有约千分之一，智能体编码场景命中率高达 96%——模型厂商高毛利和你的账单结构都由它决定。
- **「AI 烧钱将死」是误读**：训练费用是大头，停训即大幅盈利；真正的宏观风险不是公司债，而是主权债务与货币贬值。
- **反数据中心情绪建立在对用水量的误传上**：现代数据中心多为闭环液冷，且自带发电能力本可压低电网价格，限制接入才是推高电价的原因。
- **更长上下文 = 更强智能体**：百万 token 远不够装大代码库；中国实验室的线性/稀疏注意力创新(MLA、gated DeltaNet)在破解二次方成本，但都付出能力代价。
- **看模型进步别只盯价格**：token 降 60 倍的同时质量涨了约百倍——单位智能价值可能接近千倍提升，按「每个有效结果」计费才是趋势方向。

<div class="pd-sec pd-sec-q">全部金句 <span>14 条</span></div>

> <span class="qz">从 2014 年，也就是新 AI 时代非常早期的阶段，到 2024 年，GPUs 的 flops 提升了大约 120 倍</span>  
> *between 2014, just very early innings of the new AI era till 2024, you had about 120x improvement in the flops of GPUs.*  
> <span class="qm">—— Thomas Sohmers · [07:43]</span> ^q1

> <span class="qz">处理一个缓存命中的 token 基本是免费的。它的成本是真正重新计算并生成那个 token 的千分之一量级</span>  
> *both processing a cash token is essentially free. It's one one thousandth of the cost, you know, order of magnitude of actually having to recompute and generate that token.*  
> <span class="qm">—— Thomas Sohmers · [11:25]</span> ^q2

> <span class="qz">这也解释了为什么据报道 Anthropic 目前在 API 业务上有 80 个点的毛利润率</span>  
> *there's a reason why Anthropic is reported to have 80 points of gross margin right now on API business.*  
> <span class="qm">—— Thomas Sohmers · [12:03]</span> ^q3

> <span class="qz">如果他们停止训练，他们会一夜之间实现巨额盈利</span>  
> *if they stopped training, they'd be massively profitable overnight.*  
> <span class="qm">—— Thomas Sohmers · [12:49]</span> ^q4

> <span class="qz">技术能力的集中，让矩阵乘法变得需要合法许可，这会把我们倒退到前——不只是工业革命之前，而是启蒙运动之前的能力水平</span>  
> *the concentration of technological capability, making it legal to do matrix multiplications is like the thing that will set us back to pre, not just industrial revolution, it's like pre-enlightenment capabilities.*  
> <span class="qm">—— Thomas Sohmers · [14:46]</span> ^q5

> <span class="qz">如果技术本身被限制在只有那些人手里，那么他们就会成为新的领主和国王，其他所有人重新沦为农奴</span>  
> *if the technology itself is restricted to just those, then they're going to be the new lords and kings and everyone else is back to serfs.*  
> <span class="qm">—— Thomas Sohmers · [15:14]</span> ^q6

> <span class="qz">除非全球 AI 社区一起守住前沿，否则你没法守住前沿，而我不认为普京会签字加入</span>  
> *You can't pace the frontier unless the global AI community paces the frontier, and I don't see Putin signing up.*  
> <span class="qm">—— Harry Stebbings · [18:39]</span> ^q7

> <span class="qz">它现在已经成为左右两派几乎团结一致的议题——反数据中心。我认为这几乎完全是一场中国的心理战</span>  
> *it's now become a almost unifying issue on left and right about being anti-data centers. I think that is almost entirely a Chinese psyop.*  
> <span class="qm">—— Thomas Sohmers · [21:40]</span> ^q8

> <span class="qz">而我们只是不允许它们接入电网。而它们实际上本可以降低所有人的价格</span>  
> *And we're just not allowing them to hook up to the grid. Where they could actually be lowering the prices for everyone.*  
> <span class="qm">—— Thomas Sohmers · [26:22]</span> ^q9

> <span class="qz">贯穿这些整个会话的所有 token 里，大约有 96% 是被缓存的</span>  
> *about 96% of all the tokens that go through these entire sessions are cached.*  
> <span class="qm">—— Thomas Sohmers · [39:29]</span> ^q10

> <span class="qz">只要在服务上有 50 个用户，仅仅是这些单独的用户会话，就会超过你试图存储的模型权重</span>  
> *with just 50 users on your service, the user context, just those individual sessions end up being greater than the model weights that you're trying to store.*  
> <span class="qm">—— Thomas Sohmers · [40:27]</span> ^q11

> <span class="qz">gated DeltaNet 及其衍生版本，通过这种机制，你在注意力部分花费的总时间可以减少大约 75%</span>  
> *gated DeltaNet and its derivative versions where you can have like a 75% decrease in the total time you're spending on the attention portion with this mechanism.*  
> <span class="qm">—— Thomas Sohmers · [57:38]</span> ^q12

> <span class="qz">比起那个 60 比 1,我更在意的是，五年前 60 美元的那个 token，今天没有人愿意花一分钱</span>  
> *the thing I care a lot more about than just that 60 to one is the fact that a $60 token five years ago, no one would pay a cent for today.*  
> <span class="qm">—— Thomas Sohmers · [60:33]</span> ^q13

> <span class="qz">把那两到三周压缩到两天多一点，这仍然令人瞠目结舌</span>  
> *So compressing that two to three weeks down to two days and change, it's still mind-boggling.*  
> <span class="qm">—— Thomas Sohmers · [53:26]</span> ^q14

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-05-twentyvc-20vc-how-to-build-your-own-data-center-w|每块 GPU 多付 10 万美元插队：Speechify 创始人的算力账与战略悔棋]]<span class="pd-rz">同嘉宾:Harry Stebbings · 同公司:Anthropic、NVIDIA、OpenAI · 同概念:推理 (inference)、智能体 (agent)</span>
- [[2026-09-21-twentyvc-20vc-why-ai-cannot-replace-humans-in-ent|「数百万个爱因斯坦」还没法雇：UiPath 创始人拆穿 AI 转型的真瓶颈]]<span class="pd-rz">同嘉宾:Harry Stebbings · 同公司:Anthropic、NVIDIA、OpenAI · 同概念:推理 (inference)、智能体 (agent)</span>
- [[2026-07-20-twentyvc-20vc-are-openai-and-anthropic-overvalued|「智能是数据的派生物」：Fireworks 创始人 Lin Kuo 的专用智能宣言]]<span class="pd-rz">同嘉宾:Harry Stebbings · 同公司:Anthropic、NVIDIA · 同概念:token、推理 (inference)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-27-doac-the-man-who-calls-bs-on-ai-ai-is-the-wor|Ed Zitron：生成式 AI 是一场万亿级骗局]]<span class="pd-rz">同公司:Anthropic、NVIDIA、OpenAI · 同概念:token、推理 (inference)、智能体 (agent)</span>
- [[2026-08-12-bigtech-here-s-how-the-ai-bubble-bursts-with-pau|AI 投资泡沫的崩盘剧本:为什么万亿美元建数据中心注定亏钱]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:token、推理 (inference)、数据中心 (data center)</span>
- [[2026-08-20-twentyvc-20vc-spacex-buys-cursor-for-60bn-stripe|SpaceX 600亿买Cursor：AI并购的疯狂逻辑]]<span class="pd-rz">同嘉宾:Harry Stebbings · 同公司:Anthropic、OpenAI · 同概念:推理 (inference)、智能体 (agent)</span>

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
