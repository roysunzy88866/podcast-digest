---
title: 把 token 压到最便宜：一家「代币工厂」的算力拾荒术
podcast: Invest Like the Best
date: 2026-09-22
source_url: undefined
duration: "79:30"
type: episode
cover: "#64748b"
image: "/covers/2026-08-25-iltb-neil-movva-making-ai-10x-cheaper-invest.jpg"
description: SAIL Research 创始人 Neil 讲解他如何为「后台长时运行的智能体」重构推理服务：自建软件栈、拾荒式收购冷门芯片与电力，把 token 成本压到全场最低。
host: "[[Neil Movva]]"
cohosts: ["[[Patrick O'Shaughnessy]]"]
companies: ["[[SAIL Research]]", "[[NVIDIA]]", "[[AMD]]", "[[Cerebrus]]", "[[TSMC]]"]
concepts: ["[[智能体]]", "[[推理]]", "[[GPU]]", "[[KVCache]]", "[[开源]]", "[[token]]", "[[延迟]]", "[[测试时计算扩展]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/covers/2026-08-25-iltb-neil-movva-making-ai-10x-cheaper-invest.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-25-iltb-neil-movva-making-ai-10x-cheaper-invest#post","headline":"把 token 压到最便宜：一家「代币工厂」的算力拾荒术","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-25-iltb-neil-movva-making-ai-10x-cheaper-invest","mainEntityOfPage":"https://talk.solomind.cc/2026-08-25-iltb-neil-movva-making-ai-10x-cheaper-invest","description":"SAIL Research 创始人 Neil 讲解他如何为「后台长时运行的智能体」重构推理服务：自建软件栈、拾荒式收购冷门芯片与电力，把 token 成本压到全场最低。","datePublished":"2026-09-22","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-08-25-iltb-neil-movva-making-ai-10x-cheaper-invest.jpg","about":[{"@type":"Person","name":"Neil Movva"},{"@type":"Person","name":"Patrick O'Shaughnessy"},{"@type":"Organization","name":"SAIL Research"},{"@type":"Organization","name":"NVIDIA"},{"@type":"Organization","name":"AMD"},{"@type":"Organization","name":"Cerebrus"},{"@type":"Organization","name":"TSMC"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"GPU"},{"@type":"Thing","name":"KVCache"},{"@type":"Thing","name":"开源 (open source)"},{"@type":"Thing","name":"token"},{"@type":"Thing","name":"延迟 (latency)"},{"@type":"Thing","name":"测试时计算扩展 (test time compute scaling)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"把 token 压到最便宜：一家「代币工厂」的算力拾荒术","item":"https://talk.solomind.cc/2026-08-25-iltb-neil-movva-making-ai-10x-cheaper-invest"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把 token 压到最便宜：一家「代币工厂」的算力拾荒术</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 把 token 压到最便宜：一家「代币工厂」的算力拾荒术

<div class="pd-byl"><b>Neil Movva</b> · SAIL Research 创始人 · 2026-09-22</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-25-iltb-neil-movva-making-ai-10x-cheaper-invest.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">长期来看，我认为今年我们会以大概五五开的后台与实时工作负载收尾，但我看到这会走向九比一、偏向后台。</div><div class="a">— Neil Movva <button class="pd-ts" data-t="08:37" data-who="Neil Movva" data-en="Long-term, I think, you know, we're going to end this year at maybe 50-50 background and real-time workloads, but I see this going to 90-10 in favor of background." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Neil Movva]] · [[Patrick O'Shaughnessy]]
>
> **公司** [[SAIL Research]] · [[NVIDIA]] · [[AMD]] · [[Cerebrus]] · [[TSMC]]
>
> **概念** [[智能体]] · [[推理]] · [[GPU]] · [[KVCache]] · [[开源]] · [[token]] · [[延迟]] · [[测试时计算扩展]]

这一集聊的是 AI [[推理|推理]]的下一站：当[[智能体|智能体]]不再实时回答你，而是在后台一口气跑上几个小时，整个技术栈该怎么重构。主角是 [[SAIL Research|SAIL Research]] 的创始人 Neil——一个从大学起就在 [[NVIDIA|NVIDIA]] 写 [[GPU|GPU]] 内核程序的性能工程师，如今他把自己的公司叫做「代币工厂([[token|token]] factory)」:一个 API,任何人都能用它以市场上最低的价格调用开源大模型，还能在上面跑长时间运行的智能体虚拟机。他的北极星只有一条：把每 token 的成本做到全行业最低，而且要遥遥领先。

## 为什么押「后台」而不是「低延迟」

Neil 看到的市场裂缝来自一次需求转向。过去几年，Base 10、Fireworks 这些推理公司全都在卷低[[延迟|延迟]]，因为被 Cursor 这样的客户拉着走；但大约半年前起，客户要的更多是持续性、长时程任务。

他的判断很干脆：「智能体推理的未来就是长时程任务」——机器一次跑几个小时甚至几天，每秒 100 个 token 没必要，每秒 10 个只要更便宜就完全没问题。他的诀窍是不让你等待：「最好的延迟就是完全没有延迟。

当你早上醒来，工作已经在夜间完成了，你甚至不需要去请求它。」

信心的依据是[[测试时计算扩展|测试时计算扩展]]——给智能体更多时间，它会给出更好的答案。这个想法两年前就被理论化，但直到 Opus 4.5 出现才真正值得押注。

如今智能体已经能一次跑一个小时，把平均任务长度连点成线就是一条指数曲线。他预测今年后台与实时工作负载大约五五开，最终会走向九比一、偏向后台。深度研究和网络安全是当下的顶级场景：客户 ParallelWebSystems 在给整个互联网建实时索引；安全领域甚至有了个玩笑——「安全已经变成了工作量证明」，软件有多安全，取决于你花了多少钱在破解它的智能体上。

## 从 NVIDIA 学到的：每一块 GPU 里都有速度与成本的权衡

Neil 职业生涯的底色来自 NVIDIA。大学时他进了那个为机器学习改造游戏芯片的软件团队，学到了「光速」精神——对任何硬件，只追可能性的边界。

直到今天他对工程师的要求依然是：「我们追求的是 100% 光速。我不在乎相对于竞争对手的数字，只在乎绝对数字。」

关键技术事实是：GPU 本质是吞吐量机器，在你给它大批量工作时最开心；但聊天机器人场景要的是低延迟，两者在每一块 GPU 上都存在根本性权衡——像公交与小车，公交载人多、路线慢，小车直达但只载你一个。所有人都选了延迟优化，而 Neil 认为转向后台智能体后，围绕吞吐量建栈才合理，这是「未来一年最深刻的变化」。这也是他对 NVIDIA 的反主流判断之一：NVLink(把计算任务切碎分给多块 GPU 协作)是低延迟推理的必需品，但八倍硬件换不来八倍速度，是亚线性扩展，他宁可用专家并行、流水线并行等别的方案。

关于这类超低延迟硬件，他的解释很清楚：SRAM(片上快内存)速度可达每秒 21 PB,但密度只有 DRAM 的千分之一左右；这类加速器擅长放权重，却搞不定随对话不断增长的 [[KVCache|KVCache]](模型为记住上下文而存的中间状态)。所以他主张混合架构——注意力放 GPU,权重放加速器，「原罪」在于 Transformer 把一个内存受限的层和一个计算受限的层焊在了一起。

> 【背景】文中所述「超低延迟硬件」，业界代表性产品包括 Cerebras 的晶圆级加速器等。

## 拾荒者策略：没有坏芯片，只有坏定价

硬件之外，Neil 的商业打法自称为「拾荒者」：「首先我们搜寻芯片，然后再为这些芯片搜寻电力。在这两种情况下，我都不想和 Anthropic 或 OpenAI 竞价——我赢不了他们，也不想赢。

」他的信条是「没有坏芯片，只有坏定价，只要价格合适我能让任何芯片运转起来」。[[AMD|AMD]] 被人认为不如 NVIDIA,这对他「简直是悦耳的音乐」——他很乐意别人睡在这芯片上，自己去能买多少买多少。

电力端同理。如今在美国建吉瓦级数据中心几乎不可能，但 1 兆瓦的电力是充裕的——液冷之后，一兆瓦算力只需八个冰箱大小的机架。

训练要求所有算力集中一处，推理不需要，所以他乐于在全美收购分散的小算力池。他甚至愿意接受 95% 甚至 80% 在线率的数据中心，砍掉备用柴油发电机和冗余光纤：「一个只有 95% 在线率的数据中心基本不会有买家。

我就是那个买家。」因为后台运行的智能体不在乎单次回合偶尔多几分钟，客户睡得着；连风电光伏的间歇性都可以接受——天气可预测，负载挪走就行。

终极愿景是一千个小数据中心组成的大军对阵一个吉瓦巨舰：「我们想建世界上最好的钢铁厂，但通过小钢厂，而不是大型整体钢铁厂。」

## 他看到的浪费与反弹共识

他认为今天最大的浪费不在算力本身——稀疏的 MoE 模型已经很省——而在内存与调度：KVCache 每 token 存几千字节，「差了一到两个数量级」;NVIDIA 今年产出 500 万颗 Blackwell,大量 GPU 却闲置在私有池里。「看到那些 GPU 只是硅片和电力的投入却闲置在那里，我身体上都感到痛苦。」

对外部叙事他也有逆向观点。关于算力泡沫，他类比 25 年前的思科与英特尔：当年网络设备投资是投机的，而 token 买了就立即用、无法囤积，训练才是投机的，推理支出没有投机、单调递增。

关于 NVIDIA,他短期看多、但指出从 Hopper 到 Blackwell,同等精度下每瓦性能并没有提升太多；如果失去台积电，「不会那么糟」——西方最好制程最坏也就 2 倍每瓦差距，远小于芯片论坛上的喧嚣。关于闭源与开源：实验室为领先三到六个月支付巨大溢价，但他不信这个溢价能持续很久——企业部署的速度根本不是三到六个月的节奏；至于蒸馏是「盗窃」的说法，他认为信息与模型能力的扩散在根本上无法阻止，GitHub 上大量由 Claude Code 产生的代码本身就是「隐性蒸馏」。

## 本集带走

- **挑客户的本质是挑工作负载形态**：低延迟服务人类注意力(有上限)，后台任务没有人在循环中，token 消耗无上限——这是整个商业模式差异的根源。
- **把「不可接受」重新定价**：95% 在线率、非 NVIDIA 芯片、间歇性绿电、小散电力，每一项对训练都是死罪，对可容错的异步推理只是线性折价——先想清楚自己的负载容忍什么，再谈成本。
- **软件先行，榨干硬件**：手写内核已过时，「我们在白板上写内核」——人做概念设计，模型去实现；向 100% 光速看齐，只看绝对数字不看相对优势。
- **判断一个 AI 芯片创业公司，先问供应链瓶颈**：台积电晶圆、HBM、先进封装、电力——四个瓶颈各有答案才能活，因为「说到底这一切都是套利」。
- **机器能思考这件事的意义**：他相信智能需求永远存在，入口才是产品挑战；未来对任何科学问题给出确定答案的成本，可能从数百万降到数百甚至数十美元。

> 【背景】本集出自 Patrick O'Shaughnessy 的播客《Invest Like the Best》。嘉宾姓名转写稿中拼法不一(Nova / Mova),公司名亦有 SAIL/CLResearch 等写法，均指同一家推理公司。

<div class="pd-sec pd-sec-q">全部金句 <span>14 条</span></div>

> <span class="qz">长期来看，我认为今年我们会以大概五五开的后台与实时工作负载收尾，但我看到这会走向九比一、偏向后台。</span>  
> *Long-term, I think, you know, we're going to end this year at maybe 50-50 background and real-time workloads, but I see this going to 90-10 in favor of background.*  
> <span class="qm">—— Neil Movva · [08:37]</span> ^q1

> <span class="qz">在某个时候，人们开始开这个玩笑：安全已经变成了工作量证明。</span>  
> *At some point, people started to make this joke that security has become proof of work.*  
> <span class="qm">—— Neil Movva · [10:05]</span> ^q2

> <span class="qz">直到今天，我告诉我所有的工程师：我们追求的是 100% 光速。</span>  
> *To this day, I tell all my engineers, we're chasing 100% speed of light.*  
> <span class="qm">—— Neil Movva · [18:17]</span> ^q3

> <span class="qz">而其中的关键就是极其廉价的智能。</span>  
> *And the key to that is incredibly cheap intelligence.*  
> <span class="qm">—— Neil Movva · [11:49]</span> ^q4

> <span class="qz">我喜欢说：没有坏芯片，只有坏定价。</span>  
> *I like to say there's no bad chips. There's only bad pricing.*  
> <span class="qm">—— Neil Movva · [45:11]</span> ^q5

> <span class="qz">我非常乐意让他们继续睡在这芯片上，而我去能买多少就买多少。</span>  
> *I'm very happy for them to sleep on this chip and for me to buy as much as I can.*  
> <span class="qm">—— Neil Movva · [45:48]</span> ^q6

> <span class="qz">我描述我们所做的事情的方式之一是：我们会购买世界上任何地方、任何时长、任何芯片。</span>  
> *So one of the ways that I describe what we do is we will buy any chip anywhere in the world for any duration of time.*  
> <span class="qm">—— Neil Movva · [53:59]</span> ^q7

> <span class="qz">一个只有 95% 在线率的数据中心基本上不会有买家。我就是那个买家，我会买 95% 在线率的。</span>  
> *You'd have basically zero buyers for a data center that has 95% uptime. I'm that first buyer. I will buy 95% uptime.*  
> <span class="qm">—— Neil Movva · [55:02]</span> ^q8

> <span class="qz">首先，我们搜寻芯片；然后，我们再为这些芯片搜寻电力。</span>  
> *Well, first we scavenge chips and then we scavenge power for those chips.*  
> <span class="qm">—— Neil Movva · [57:44]</span> ^q9

> <span class="qz">我们想建世界上最好的钢铁厂，但它会通过小钢厂来实现，而不是通过大型整体钢铁厂。</span>  
> *We're trying to build the best steel factory in the world, but it will come through mini mills, not through large monolithic steel plants.*  
> <span class="qm">—— Neil Movva · [58:11]</span> ^q10

> <span class="qz">看到那些 GPU 只是硅片和电力的投入却闲置在那里，我身体上都感到痛苦，我想修复这个问题。</span>  
> *It pains me physically to see that those GPUs are just silicon and power going into that and it's just sitting idle and I want to fix that.*  
> <span class="qm">—— Neil Movva · [62:15]</span> ^q11

> <span class="qz">我不认为在根本上可以阻止信息或模型能力的扩散。</span>  
> *I don't think it's fundamentally possible to prevent the diffusion of information or model capabilities.*  
> <span class="qm">—— Neil Movva · [67:51]</span> ^q12

> <span class="qz">我的工作就是把 token 做到人类可能做到的最低价。</span>  
> *My job is to make the tokens as cheap as humanly possible.*  
> <span class="qm">—— Neil Movva · [69:39]</span> ^q13

> <span class="qz">机器能够思考是件不可思议的事，我们应该尽力把它交到尽可能多的人手中。</span>  
> *It's incredible that the machine can think and we should try to get that into as many hands as as many people as possible.*  
> <span class="qm">—— Neil Movva · [70:05]</span> ^q14

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-04-talks-open-models-change-the-economics-of-ai|Ollama CEO：开源模型正吃掉企业 80-90% 的 token]]<span class="pd-rz">同公司:NVIDIA · 同概念:GPU、token、推理 (inference)、智能体 (agent)</span>
- [[2026-07-20-twentyvc-20vc-are-openai-and-anthropic-overvalued|「智能是数据的派生物」：Fireworks 创始人 Lin Kuo 的专用智能宣言]]<span class="pd-rz">同公司:NVIDIA · 同概念:token、开源模型 (open source)、推理 (inference)、Anthropic、Cursor、GPU</span>
- [[2026-09-05-twentyvc-20vc-how-to-build-your-own-data-center-w|每块 GPU 多付 10 万美元插队：Speechify 创始人的算力账与战略悔棋]]<span class="pd-rz">同公司:NVIDIA · 同概念:GPU、推理 (inference)、智能体 (agent)、Anthropic、OpenAI</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-27-doac-the-man-who-calls-bs-on-ai-ai-is-the-wor|Ed Zitron：生成式 AI 是一场万亿级骗局]]<span class="pd-rz">同公司:NVIDIA · 同概念:GPU、token、推理 (inference)、Anthropic、OpenAI、智能体 (agent)</span>
- [[2026-09-15-uncapped-uncapped-57--andrew-feldman-from-cerebra|一颗餐盘大的芯片：Cerebras 创始人讲晶圆级豪赌]]<span class="pd-rz">同公司:Cerebrus、NVIDIA、TSMC、AMD · 同概念:推理 (inference)</span>
- [[2026-07-14-a16z-is-ai-a-bubble-gavin-baker-on-data-cente|没有暗GPU:一位基金经理拆解AI泡沫论与棋局]]<span class="pd-rz">同公司:AMD、NVIDIA · 同概念:GPU、Anthropic、Cursor、OpenAI</span>

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
