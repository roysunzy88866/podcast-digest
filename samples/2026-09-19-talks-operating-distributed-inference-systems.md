---
title: "推理已成一个分布式系统问题:Meta 讲透大规模推理的编排之道"
podcast: 精选演讲
date: 2026-09-21
source_url: undefined
duration: "19:29"
type: episode
cover: "#64748b"
description: Meta 推理基础设施工程师 Nishan Gupta 与 Naman Ahuja 讲解如何运营大规模分布式推理系统：瓶颈不在模型而在编排层。
guests: ["[[Nishant Gupta]]", "[[Naman Ahuja]]"]
concepts: ["[[推理]]", "[[智能体]]", "[[微服务]]", "[[GPU]]", "[[KVCache]]", "[[批处理]]", "[[可观测性]]", "[[控制平面]]", "[[调度]]", "[[级联失败]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-19-talks-operating-distributed-inference-systems#post","headline":"推理已成一个分布式系统问题:Meta 讲透大规模推理的编排之道","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-19-talks-operating-distributed-inference-systems","mainEntityOfPage":"https://talk.solomind.cc/2026-09-19-talks-operating-distributed-inference-systems","description":"Meta 推理基础设施工程师 Nishan Gupta 与 Naman Ahuja 讲解如何运营大规模分布式推理系统：瓶颈不在模型而在编排层。","datePublished":"2026-09-21","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Nishant Gupta"},{"@type":"Person","name":"Naman Ahuja"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"微服务 (microservices)"},{"@type":"Thing","name":"GPU"},{"@type":"Thing","name":"KVCache"},{"@type":"Thing","name":"批处理 (batching)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"控制平面 (control plane)"},{"@type":"Thing","name":"调度 (scheduling)"},{"@type":"Thing","name":"级联失败 (cascading failures)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"推理已成一个分布式系统问题:Meta 讲透大规模推理的编排之道","item":"https://talk.solomind.cc/2026-09-19-talks-operating-distributed-inference-systems"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>推理已成一个分布式系统问题:Meta 讲透大规模推理的编排之道</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 推理已成一个分布式系统问题:Meta 讲透大规模推理的编排之道

<div class="pd-byl"><b>Nishant Gupta</b> · Meta 推理基础设施工程师 · 2026-09-21</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-19-talks-operating-distributed-inference-systems.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">推理流量已经超过了世界上最大的微服务,而且其增长速度是我们见过的任何工作负载中最快的。</div><div class="a">— Nishant Gupta <button class="pd-ts" data-t="00:43" data-who="Nishant Gupta" data-en="The inference traffic already outpaces the largest microservices in the world, and the rate of growth is fastest of any workload we have ever seen." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Nishant Gupta]] · [[Naman Ahuja]]
>
> **概念** [[推理]] · [[智能体]] · [[微服务]] · [[GPU]] · [[KVCache]] · [[批处理]] · [[可观测性]] · [[控制平面]] · [[调度]] · [[级联失败]]

这一集是 AI Engineering World Fair 的一场演讲，主角是 Meta 负责效率、训练和[[推理|推理]]基础设施的工程师 Nishan Gupta 和 [[Naman Ahuja|Naman Ahuja]],主题是：当推理(模型上线后真正响应用户请求的过程)达到生产规模，它就不再只是「调用一个模型」，而是一个经典的分布式系统问题。他们给出的核心判断是：推理流量已经超过世界上最大的[[微服务|微服务]]，而且是见过的一切工作负载中增长最快的 <button class="pd-ts" data-t="00:43" data-who="Nishan Gupta" data-en="It's a foundational hyperscale infrastructure workload, which is growing at a tremendous rate. The inference traffic already outpaces the largest microservices in the world, and the rate of growth is fastest of any workload we have ever seen." aria-label="回原文"></button>。AI 正走在云计算当年那条「价值沿栈上移」的老路上——云时代价值从虚拟机移到了 Kubernetes 这类[[调度|调度]]编排层，AI 也在重演，只是把十年的演化压缩进了最近几年，现在正在实时涌现的正是编排层 <button class="pd-ts" data-t="01:24" data-who="Nishan Gupta" data-en="The orchestration layer is what actually captured the value and the complexity. AI is on the exact same trajectory, but just compressed into the last few years instead of a decade." aria-label="回原文"></button>。

## 智能体把容量规划彻底打乱了

传统 Web 服务时代，容量大致随用户数线性增长：用户翻倍、请求翻倍、机器翻倍，容量规划基本是拉个电子表格的事。但在[[智能体|智能体]]服务里，容量等于用户数 × 每用户调用次数 × token 数。

一个聊天机器人每轮可能只调一次模型，co-pilot 是 10 到 20 次，研究智能体是 50 次，而无人值守的自主工作负载是数千次调用 <button class="pd-ts" data-t="02:41" data-who="Nishan Gupta" data-en="In this new agentic serving, capacity is scaling with number of users time, number of calls per users times number of tokens, which varies depending on the model, the optimizations, the hardware SKU you have." aria-label="回原文"></button>。结论：**不能用规划微服务的方式来规划智能体的容量**，必须做工作负载感知的调度和准入控制 <button class="pd-ts" data-t="02:55" data-who="Nishan Gupta" data-en="And now it's thousands of such calls for autonomous workloads with no human in the loop. The key takeaway that you cannot plan capacity for the agents the same way we did for microservices." aria-label="回原文"></button>。

## 推理服务与微服务的五个本质差异

- **请求形态**：微服务假设请求短而均匀；LLM 请求的 token 数从 50 到 10 万不等，且 pre-fill(预填充，处理输入)和 decode(解码，逐字生成)两阶段计算特征截然不同。
- **[[批处理|批处理]]**：微服务最多在负载均衡层批一下；LLM 服务必须做持续的 in-flight 批处理(生成过程中不断把新请求塞进当前批次)，否则吞吐量直接崩一个数量级。
- **状态**：微服务大多无状态；LLM 有巨大的每请求状态 [[KVCache|KVCache]](模型生成时缓存的中间计算结果)，建起来贵，扔掉更贵。
- **扩展单元**：微服务跑在廉价 CPU 上；推理必须跑 [[GPU|GPU]]——贵 100 倍、获取慢 10 倍，不能随意超额配置。
- **故障模式**：微服务崩了重启即可；模型从冷到热启动耗时巨大，一张正在 decode 的 GPU 挂掉会丢弃数千个在途 token 并引发队列积压 <button class="pd-ts" data-t="04:20" data-who="Nishan Gupta" data-en="However, for modern inferencing, we're required to run on GPUs, which are 100 times more expensive, which are 10 times slower to acquire, and we cannot over-provision them casually." aria-label="回原文"></button>。

## 智能在模型，经济性在基础设施

一个 prompt 进来，幕后要走一长串步骤：网关 → 路由 → 缓存查找 → 调度器(选 GPU 集群和硬件，NVIDIA、AMD 或自研芯片)→ 服务运行时(vLLM、SGLang 等)→ 按 SLO(服务质量目标)流式返回。这些步骤里**只有一步需要模型，其余全部是基础设施**——「智能可能存在于模型中，但经济性、可靠性和用户体验全都在基础设施里」<button class="pd-ts" data-t="05:31" data-who="Nishan Gupta" data-en="Other steps require infrastructure. The intelligence might lie in the model, but the economics, the reliability, and the user experience are all in the infrastructure." aria-label="回原文"></button>。

而且这些层之间深度耦合：路由层的一个决策会改变缓存命中率，缓存命中改变批处理组成，批处理改变 GPU 利用率，GPU 利用率又改变自动扩缩容决策 <button class="pd-ts" data-t="06:18" data-who="Nishan Gupta" data-en="What is new is the combination and the coupling between them. A decision at the routing layer can change the cache hit rate at the model layer, which can change the batch composition, which can change the GPU utilization, which can change the auto-scaling decision because of the change in GPU utilization." aria-label="回原文"></button>。所以排查性能回退必须从上到下看整个技术栈，找到瓶颈到底在哪一层再投入资源。

## 一次推理就是一次分布式事务

推理的行为像分布式事务：图里每个箭头都是一跳网络，每一跳都可能重试、超时、回退甚至失败，各自有 SLO,还在向用户流式返回 <button class="pd-ts" data-t="07:41" data-who="Nishan Gupta" data-en="And then we extreme the response back to the user according to the SLO profiles of time to first token and time between each token, and while making sure the throughput is what the user desired." aria-label="回原文"></button>。麻烦在于部分结果语义：如果已经给用户流了 200 个 token,突然 GPU 主机被抢占，你不能简单重试。所以**可靠性没法只建在边缘，必须是[[控制平面|控制平面]]的属性**——因为只有控制平面看得到整个工作流 <button class="pd-ts" data-t="08:19" data-who="Nishan Gupta" data-en="We have to think about it holistically. This is why reliability, we cannot build reliability at the edge. It has to be a property of the control plane because the control plane is the one which sees the whole workflow." aria-label="回原文"></button>。

## 调度器要感知七个轴

传统微服务装箱看三四个维度就够了；推理调度器至少要感知七个轴：GPU 类型(集群里 H100、B200 等异构硬件混布、网络拓扑各异)、HBM 显存余量、KVCache 状态、模型权重是否已加载预热、租户优先级(多租户各有 SLO)、工作流上下文、延迟预算。工作流上下文尤其关键：调度器得知道请求 R 处于五分钟工作流的第三步、前两步已经花了 X 加 Y 美元——第三步失败整个工作流就作废，前面的算力全浪费。所以工作流感知编排会直接改变准入决策、优先级和重试策略 <button class="pd-ts" data-t="10:09" data-who="Nishan Gupta" data-en="A concrete example might be that the skiller needs to be aware that request R is at step three of a five-minute workflow, and step one and two has already spent X plus Y dollar." aria-label="回原文"></button>。

## 优化的四象限框架

Nishan 分享了一个他自己常用的框架，把所有推理优化分进四个象限：①**避免工作**——用前缀缓存、响应缓存、语义缓存整个跳过；②**共享工作**——用批处理让多个请求共享计算，包括投机解码(让小模型先猜、大模型来验)这类技术；③**移走工作**——路由到更小的模型、更便宜的区域或离用户更近的地方；④**延迟工作**——通过准入控制和排队等更好的时机，需要理解请求优先级并实现截止时间感知调度。这个框架可迁移到任何技术栈：不管你用 vLLM、SGLang 还是 TensorRT,每项技术都能归入四个象限之一 <button class="pd-ts" data-t="11:25" data-who="Nishan Gupta" data-en="Can we wait for a better moment through admission control and queuing, which requires us to understand the priority classes of these requests and implemented deadline-aware scheduling?" aria-label="回原文"></button>。

成本上也是同一个道理：成本不只是 GPU 和模型，还有重试、存储、失败、网络和开发运维。别只优化每 token 成本或每请求成本，**要优化每个成功任务的成本**——那才是用户真正关心的 <button class="pd-ts" data-t="12:22" data-who="Nishan Gupta" data-en="So, it's not important to optimize just cost per token or cost per request. We have to optimize cost per successful task because this is what actually users care about." aria-label="回原文"></button>。

## 级联失败：故障从来不是 GPU 挂了

故障故事的重头从来不是某张 GPU 被抢占，而是随之而来的反馈循环：GPU 退化 → 延迟上升 → 客户端重试 → 队列加深 → 健康 GPU 饱和 → 更多重试 → 整个区域故障。智能体应用还有个变数：KVCache 扔不得，不能随意重启或路由到别的集群——冷池必须先预热才能接流量，期间热池得扛下全部请求 <button class="pd-ts" data-t="13:03" data-who="Nishan Gupta" data-en="So a GPU can degrade, the latency can rise, the client retries, the queue depth increases, the healthy GPUs will saturate, which will follow more retries, more full regional failures." aria-label="回原文"></button>。所以环路断路器必须刻意设计：路由层熔断器、直接拒绝而非排队的准入控制、跟队列深度(而非 CPU/内存利用率)挂钩的负载卸载，以及重试预算。

## 可观测性与不可能三角

Naman 接棒讲运营视角：推理达到生产规模后，运营问题变成「平台如何知道接下来该做什么」，[[可观测性|可观测性]]就是向控制回路提供输入信号——遥测、分析、驱动调度和路由的决策，循环往复 <button class="pd-ts" data-t="15:34" data-who="Naman Ahuja" data-en="And that's where observability comes into play. It's not just about dashboards. It's about how to provide input signal to the control loop." aria-label="回原文"></button>。关键指标有四个：首 token 时间(多快拿到第一个响应)、利用率比率(瓶颈是内存还是计算)、每美元成功数(平台是否高效在交付)、端到端延迟。

而延迟、成本、吞吐量之间存在类似 CAP 定理的权衡，不可能三者兼得：加大批次提升吞吐和成本效率但伤尾延迟；投机解码改善延迟但增加每 token 成本；换小模型降延迟降成本但质量下降，失败重试又把成本抬回去 <button class="pd-ts" data-t="16:33" data-who="Naman Ahuja" data-en="If I increase the batch size, I improve the throughput and cost efficiency, but I may hurt tail latency. If I use speculative decoding, I may improve latency, but there are some extra compute." aria-label="回原文"></button>。每个服务决策都是在这三角里挪位置，运营工作就是一个优化问题。

## 结论：推理需要自己的控制平面

路由、批处理、缓存、调度、可靠性正在汇聚成一个逻辑层，他们称之为 Inference Control Plane(推理控制平面)。这正对应 Kubernetes 当年把 VM 管理变成控制平面的转变：模型正在成为资源，GPU、KVCache、token、延迟、成本都是被调度的对象。

无论这层是自建、开源还是买供应商的，关键设计假设是：**这一层必将存在** <button class="pd-ts" data-t="17:19" data-who="Naman Ahuja" data-en="Let's call it Inference Control Plane. We used to manage VM before in distributed system. We have auto-scaling schedulers." aria-label="回原文"></button>。他们分享了几个运营教训：基础设施瓶颈通常先于模型瓶颈出现；堆 GPU 不能真正解决弹性问题，只是掩盖；同一套机群的交付效率取决于你怎么调度和批处理；自动控制回路胜过手动流程。

AI 基础设施的第一阶段是更好的模型，当前阶段是更快的推理，**下一阶段是编排**——GPU、内存、缓存都只是需要被调度和控制的资源。早点理解这一点的团队会为未来构建基础设施。收尾一句话：基础设施不再是一个容量问题，而是一个编排问题 <button class="pd-ts" data-t="19:21" data-who="Naman Ahuja" data-en="The teams that understand this early on will build infrastructure for the future. So the closing idea is infrastructure is no longer a survey problem. It's an orchestration problem." aria-label="回原文"></button>。

## 本集带走

- **容量规划公式变了**：智能体时代容量 = 用户数 × 每用户调用次数 × token 数，聊天机器人每轮 1 次调用、co-pilot 10-20 次、自主工作负载数千次，照微服务的老办法规划必炸。
- **别只优化每 token 成本，优化每个成功任务的成本**——用户只关心任务成没成，这也是平台真正的效率指标。
- **优化思路先过四象限**：避免(缓存跳过)、共享(批处理)、移走(路由到更便宜更近处)、延迟(准入控制排队)，任何技术都能归类，便于看清新优化与旧技术如何叠加。
- **可靠性必须是控制平面的属性**：推理像分布式事务，已流出的部分结果让简单重试失效，熔断、准入拒绝、按队列深度的负载卸载、重试预算都要刻意设计。
- **记住四指标 + 三角权衡**：首 token 时间、利用率比率、每美元成功数、端到端延迟；延迟/成本/吞吐量类似 CAP,不可兼得，每个决策都是挪位置。
- **押注推理控制平面**：这层是云计算「价值上移到编排」剧本的重演，模型、GPU、KVCache、延迟、成本都会成为被调度的资源。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">推理流量已经超过了世界上最大的微服务,而且其增长速度是我们见过的任何工作负载中最快的。</span>  
> *The inference traffic already outpaces the largest microservices in the world, and the rate of growth is fastest of any workload we have ever seen.*  
> <span class="qm">—— Nishant Gupta · [00:43]</span> ^q1

> <span class="qz">AI 正走在完全相同的轨迹上,只是被压缩到了最近几年而不是十年。</span>  
> *AI is on the exact same trajectory, but just compressed into the last few years instead of a decade.*  
> <span class="qm">—— Nishant Gupta · [01:24]</span> ^q2

> <span class="qz">关键的要点是:你不能用我们规划微服务的方式来规划智能体的容量。</span>  
> *The key takeaway that you cannot plan capacity for the agents the same way we did for microservices.*  
> <span class="qm">—— Nishant Gupta · [02:55]</span> ^q3

> <span class="qz">智能可能存在于模型中,但经济性、可靠性和用户体验全都在基础设施里。</span>  
> *The intelligence might lie in the model, but the economics, the reliability, and the user experience are all in the infrastructure.*  
> <span class="qm">—— Nishant Gupta · [05:31]</span> ^q4

> <span class="qz">推理需要它自己的控制平面。</span>  
> *Inference needs its own control plane.*  
> <span class="qm">—— Naman Ahuja · [17:05]</span> ^q5

> <span class="qz">所以收尾的观点是,基础设施不再是一个容量问题。</span>  
> *So the closing idea is infrastructure is no longer a survey problem.*  
> <span class="qm">—— Naman Ahuja · [19:21]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-25-iltb-neil-movva-making-ai-10x-cheaper-invest|把 token 压到最便宜：一家「代币工厂」的算力拾荒术]]<span class="pd-rz">同概念:GPU、KVCache、推理 (inference)、智能体 (agent)</span>
- [[2026-08-07-thepeel-the-18x-midas-lister-betting-3b-on-ai-an|Mayfield 管理合伙人 Navin:AI 投资的泡沫数学与蓝海打法]]<span class="pd-rz">同概念:GPU、推理 (inference)、智能体 (agent)</span>
- [[2026-09-04-talks-open-models-change-the-economics-of-ai|Ollama CEO：开源模型正吃掉企业 80-90% 的 token]]<span class="pd-rz">同概念:GPU、推理 (inference)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-12-bigtech-here-s-how-the-ai-bubble-bursts-with-pau|AI 投资泡沫的崩盘剧本:为什么万亿美元建数据中心注定亏钱]]<span class="pd-rz">同公司:Meta · 同概念:GPU、推理 (inference)</span>
- [[2026-08-27-doac-the-man-who-calls-bs-on-ai-ai-is-the-wor|Ed Zitron：生成式 AI 是一场万亿级骗局]]<span class="pd-rz">同概念:GPU、推理 (inference)、智能体 (agent)</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)</span>

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
