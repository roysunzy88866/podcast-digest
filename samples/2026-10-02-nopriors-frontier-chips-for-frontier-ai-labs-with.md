---
title: 内存带宽才是 AI 芯片的下一个战场：Fractile 创始人 Walter 的押注
podcast: No Priors
date: 2026-10-04
source_url: undefined
duration: "35:36"
type: episode
cover: "#64748b"
image: "/covers/2026-10-02-nopriors-frontier-chips-for-frontier-ai-labs-with.jpg"
description: 全栈 AI 芯片公司 Fractile 创始人 Walter Goodwin 解释为什么推理速度被内存带宽卡住、他和 GPU 阵营的结构性差异，以及为什么芯片设计周期可以被 AI 压缩到 2.5 年。
guests: ["[[Walter Goodwin]]"]
companies: ["[[Fractile]]", "[[NVIDIA]]", "[[Broadcom]]", "[[TSMC]]"]
concepts: ["[[推理]]", "[[内存带宽]]", "[[ASIC]]", "[[HBM]]", "[[SRAM]]", "[[DRAM]]", "[[LLM]]", "[[MOE]]", "[[Flash Attention 之前的注意力]]", "[[缩放定律]]", "[[芯片设计]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/covers/2026-10-02-nopriors-frontier-chips-for-frontier-ai-labs-with.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-02-nopriors-frontier-chips-for-frontier-ai-labs-with#post","headline":"内存带宽才是 AI 芯片的下一个战场：Fractile 创始人 Walter 的押注","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-02-nopriors-frontier-chips-for-frontier-ai-labs-with","mainEntityOfPage":"https://talk.solomind.cc/2026-10-02-nopriors-frontier-chips-for-frontier-ai-labs-with","description":"全栈 AI 芯片公司 Fractile 创始人 Walter Goodwin 解释为什么推理速度被内存带宽卡住、他和 GPU 阵营的结构性差异，以及为什么芯片设计周期可以被 AI 压缩到 2.5 年。","datePublished":"2026-10-04","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-10-02-nopriors-frontier-chips-for-frontier-ai-labs-with.jpg","about":[{"@type":"Person","name":"Walter Goodwin"},{"@type":"Organization","name":"Fractile"},{"@type":"Organization","name":"NVIDIA"},{"@type":"Organization","name":"Broadcom"},{"@type":"Organization","name":"TSMC"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"内存带宽 (memory bandwidth)"},{"@type":"Thing","name":"ASIC"},{"@type":"Thing","name":"HBM"},{"@type":"Thing","name":"SRAM"},{"@type":"Thing","name":"DRAM"},{"@type":"Thing","name":"LLM"},{"@type":"Thing","name":"MOE"},{"@type":"Thing","name":"Flash Attention 之前的注意力 (attention)"},{"@type":"Thing","name":"缩放定律 (scaling laws)"},{"@type":"Thing","name":"芯片设计 (chip design)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"内存带宽才是 AI 芯片的下一个战场：Fractile 创始人 Walter 的押注","item":"https://talk.solomind.cc/2026-10-02-nopriors-frontier-chips-for-frontier-ai-labs-with"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>内存带宽才是 AI 芯片的下一个战场：Fractile 创始人 Walter 的押注</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 内存带宽才是 AI 芯片的下一个战场：Fractile 创始人 Walter 的押注

<div class="pd-byl"><b>Walter Goodwin</b> · Fractile 创始人兼 CEO · 2026-10-04</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-02-nopriors-frontier-chips-for-frontier-ai-labs-with.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">它相当于芯片领域的前沿模型——如果你能找到一种办法，在结构上切分出三到六个月的优势，你将会赢下所有那些部署。</div><div class="a">— Walter Goodwin <button class="pd-ts" data-t="00:30" data-who="Walter Goodwin" data-en="It's the equivalent of the frontier model for the chip space is if you can just find a way to structurally carve out a three to six months advantage, you will be winning all of those deployments." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Walter Goodwin]]
>
> **公司** [[Fractile]] · [[NVIDIA]] · [[Broadcom]] · [[TSMC]]
>
> **概念** [[推理]] · [[内存带宽]] · [[ASIC]] · [[HBM]] · [[SRAM]] · [[DRAM]] · [[LLM]] · [[MOE]] · [[Flash Attention 之前的注意力]] · [[缩放定律]] · [[芯片设计]]

这一集是芯片创业公司 [[Fractile|Fractile]] 的创始人兼 CEO [[Walter Goodwin|Walter Goodwin]] 和 No Priors 主持人 Sarah 的对谈。Fractile 做的是给世界上最大的模型用的「非常快的[[推理|推理]]芯片」（推理=模型部署后实际响应用户的阶段）。

Walter 抛出的核心判断是：AI 芯片竞争的下一张牌不是算力，而是[[内存带宽|内存带宽]]——过去 20 年浮点运算扩展了约一百万倍，内存带宽只提升了大约 40 倍 <button class="pd-ts" data-t="29:30" data-who="Walter" data-en="We get to explore, for instance, internally, these kinds of ideas of scaling laws for bandwidth, basically. The scaling laws, traditionally, we think of them as flop scaling laws." aria-label="回原文"></button>。谁能从廉价的 [[DRAM|DRAM]] 内存里榨出激进的高带宽，谁就掌握了把大模型跑快的关键。

## 市面上全是「同一颗芯片」

现在 AI 专用芯片（[[ASIC|ASIC]]，为特定任务定制的芯片）看似琳琅满目，实则千篇一律：Google 的 TPU、Meta 的 MTIA、Microsoft 的 Maya、OpenAI 的 Jalapeno，最后大多都是和少数几家「ASIC 交付厂商」（最大的是市值两万亿美元的 [[Broadcom|Broadcom]]）合作完成；而且全都用 [[HBM|HBM]] 高带宽内存、都押张量核心做矩阵乘法、都在 [[TSMC|TSMC]] 做同样的先进封装 <button class="pd-ts" data-t="02:46" data-who="Walter" data-en="Yeah, I'd say there's a kind of extraordinary zoo now of options available. And if you look across this kind of entire space of kind of AI ASICs, one of the things that I think is very striking is there's a lot of relatively identikit chips out there." aria-label="回原文"></button>。

Fractile 的差异化在于「全栈」：从架构层（理解工作负载、设计电路意图）到前端设计（写代码描述芯片逻辑），再到物理设计、工艺、和代工厂打交道——甚至自己做强封装。这样一条链，行业里通常只留给少数公司，因为后端要做的事会让你「每周飞台湾或韩国」<button class="pd-ts" data-t="04:28" data-who="Walter" data-en="And this is kind of a structural thing. There's just not that many teams that have decided we're going to build from what you might call the kind of the architecture layer, the front end design layer, which mostly looks like kind of writing code, but also all the way down to what we call kind of physical design, the process technology, the kind of foundry interactions, the stuff that essentially has you flying back and forth to Taiwan or Korea every week." aria-label="回原文"></button>。Fractile 约 150 人，每个环节都精简，但换来一个敏捷闭环：行业交接模式下，你做到某一步就交给合作伙伴，之后「在某种程度上受制于那个合作伙伴的表现」<button class="pd-ts" data-t="09:44" data-who="Walter" data-en="And so you get to a certain level and then you hand off to another partner. And to some extent, you're kind of at the mercy of how that other partner then behaves." aria-label="回原文"></button>。

## 技术押注：从 SRAM 转向「便宜内存的高带宽」

公司头两年，Fractile 走的是把 [[SRAM|SRAM]]（和计算电路同在一块硅片上的超高速小容量内存）直接与算力放在一起、换取极高带宽的路线，借此做到每秒数千 token 的速度 <button class="pd-ts" data-t="11:07" data-who="" data-en="It lives on the same piece of silicon as your logic. And so you have this extremely high bandwidth between your compute where you're running the maths as you run these models and let's say the weights of your model or the KV cache of this model as you're rolling it out." aria-label="回原文"></button>。但 2023 年底到 2024 年，他们开始担心这种架构路线的可扩展性——因为随 AI 增长的不只是模型参数，还有上下文长度（模型一次能「记住」的对话长度），SRAM 的低容量装不下 <button class="pd-ts" data-t="11:36" data-who="Walter" data-en="But I think one of the things that we started to worry about towards the end of 2023 and certainly in 2024 was the scalability of this approach. And I think there are two things that grow with AI today." aria-label="回原文"></button>。

于是过去几年他们转而和内存厂商、代工厂做合作项目，目标是：既有 GPU/TPU 上那种大容量低成本 DRAM 的可扩展性，又有 SRAM 路线的速度优势。新平台计划明年下半年量产爬坡 <button class="pd-ts" data-t="12:30" data-who="Walter" data-en="So for the past couple of years, we've been involved in these kind of Skunkworks projects to move away from SRAM, looking at how we can get, for instance, much, much, much higher bandwidth to DRAM memories." aria-label="回原文"></button>。Walter 强调，数据中心规模跑推理的经济性，最终坍缩为一个数字：**每 GB 内存的成本** <button class="pd-ts" data-t="14:50" data-who="Walter" data-en="Because when you look at what it looks like to run inference at data center scale for thousands of users, the economics actually collapsed down to essentially a kind of cost per gigabyte of the memory that you're employing." aria-label="回原文"></button>。

他还点破了一个行业错配：现有快速推理芯片「带宽超高但容量低得难以置信」，所以今天它们实际跑不了长上下文注意力，要切回 GPU 做 <button class="pd-ts" data-t="14:01" data-who="Walter" data-en="And if you look at the sort of technical detail of how they actually get employed and deployed today, they're not running long context attention. You still flip back to a GPU to do that." aria-label="回原文"></button>。而速度真正撬动局面的地方，不是「响应更快的聊天机器人」——他借用亨利·福特的话说，那是快速推理领域的「更快的马」——而是让长时间运行的智能体、让数万亿参数模型以每秒数千 token 从容运行 <button class="pd-ts" data-t="13:24" data-who="Walter" data-en="The snappier chatbot is kind of the faster horses of kind of fast inference. The place where the ability to take a multi-trillion parameter model and run it comfortably at many thousands of tokens per second in our view is a kind of" aria-label="回原文"></button>。

## 芯片能造多快？物理瓶颈是真的，但设计周期可以压缩

模型大约每两周就出一个新版本，芯片怎么办？Walter 的清醒剂是：找这些模型的共同点。

「新的 [[LLM|LLM]] 迫切希望拥有比现在高出几个数量级的内存带宽」——这一条永远成立 <button class="pd-ts" data-t="16:39" data-who="Walter" data-en="So, you know, it's always the case that a new LLM desperately wants to have orders of magnitude more bandwidth to memory in order to run faster. It remains the case today that these LLMs tend to be auto-aggressive, very low batch as you generate text with this sort of fundamental trade-off again between throughput efficiency and cost and the speed that you can serve these models at." aria-label="回原文"></button>。同时他也承认会面临更大冲击：开源中国模型前沿的[[Flash Attention 之前的注意力|注意力机制]]每隔几周就在变，稀疏度、[[MOE|MOE]] 的稀疏程度都在churn。

关于「AI 能不能把[[芯片设计|芯片设计]]从架构师意图直接压缩成最终版图文件（GDS2）」，Sarah 转述某顶级半导体 CEO 的私下预测是 10 年。Walter 的启发式：**把时间除以四，再减一点** <button class="pd-ts" data-t="23:39" data-who="Walter" data-en="A heuristic that has been successful over the past couple of years is to just always question your logical assumption and then divide it by four on timescale. So there is a world in which 10 years seems like a very sensible timeframe for that, but I would divide it by four and I probably subtract a bit from that." aria-label="回原文"></button>。

但他不认为几周出一颗全新芯片会成为现实：代工流片周期即使加急也要三到五个月，且一颗芯片需要三到五年的摊销窗口才是合理的财务决策 <button class="pd-ts" data-t="19:28" data-who="Walter" data-en="You have to have really a kind of three to five year amortization window for that chip to make it a sensible financial decision. And so there's these sort of two things that are in tension in which I guess I believe two slightly conflicting things at the same time." aria-label="回原文"></button>。压缩设计周期的真正价值是**更多射门机会**——手里始终握着一批滚动的、随时可以触发量产的押注。

他算了一笔账：[[NVIDIA|NVIDIA]] 系统里有六到九颗自家定制芯片协同工作，小公司必须靠 AI 生产力补上这个差距；「如果你能结构性地切出三到六个月的优势，你会赢下所有那些部署」——这就是芯片领域的「前沿模型」逻辑 <button class="pd-ts" data-t="22:39" data-who="Walter" data-en="And we see this in Frontier Labs, right? It's the equivalent of the Frontier model for the chip space is if you can just find a way to structurally carve out a three to six months advantage." aria-label="回原文"></button>。具体瓶颈在布局布线这类工具上：它们用传统算法解决 NP 难问题，一跑就是好几天，AI 加速思考之后，这些「试错环节」就成了新的瓶颈，值得用近似模型去打穿 <button class="pd-ts" data-t="25:05" data-who="Walter" data-en="So the RSI work, yes, we can now have extreme intelligence that is guiding our experiments, but now we're just experiment bottlenecked, we're compute time bottlenecked." aria-label="回原文"></button>。

## 带宽有自己的缩放定律

Fractile 宣称单芯片带宽可达 HBM 方案的 25 倍。这不只是跑现有模型更快——它反过来牵引模型架构：MoE（混合专家模型）理想上应该做得越来越稀疏（从 1/16 稀疏到 1/256），能省大量算力，但在今天 HBM 芯片上这么稀疏会带宽瓶颈、算力利用率极低；有了带宽，就能「用更少的算力达到同样智能水平」<button class="pd-ts" data-t="30:35" data-who="Walter" data-en="And so there are these areas where even as you build for today's world, you get to kind of look at where you can unlock greater capability. And with LLMs today, it's very similar actually with attention." aria-label="回原文"></button>。「20 年里算力扩展了约一百万倍、带宽只提升约 40 倍」——扩展落后者，就是全局吞吐的乘数因子。

## 市场结构：为什么前沿实验室需要第三方芯片

当下所有大规模部署者都在买多个平台，第一方自研芯片「主要目的是压低付给 NVIDIA 的价格」——因为这些芯片架构上并不提供别人做不到的新能力，本质是议价博弈和产能控制 <button class="pd-ts" data-t="32:24" data-who="Walter" data-en="And there may be some truth to that as well, because those efforts are kind of architecturally quite similar, right? So it's a bet that is not on enabling a fundamental capability that those other chips cannot enable." aria-label="回原文"></button>。而能带来新能力的芯片不同：每个想在前沿部署 AI 的人都需要「把模型快几个数量级」的方案——前沿实验室靠高端智能窗口活着，否则「我们所有人都会一直在用 Kimi 模型」<button class="pd-ts" data-t="33:11" data-who="Walter" data-en="Otherwise, we'd all be using Kimi models all the time. And so as you do have this pressure from behind from open source, It does become clearly even more important for folks that want to deploy at the frontier to have every aspect of what that means." aria-label="回原文"></button>，身后有开源追赶，就必须既有最好的权重、又有最快的部署。

最后一个结构性判断：为什么第三方芯片玩家不会被实验室收编？因为实验室在玩不对称博弈——假如你全押某款专有芯片，对手发现了只在它自家芯片上有效的计算突破，你可能在九个月内部署完之前就死掉。所以前沿玩家必须彼此部署相同平台，而把深度差异化押注的风险留给芯片玩家 <button class="pd-ts" data-t="34:27" data-who="Walter" data-en="And I think that comes down to the kind of asymmetric game that all of these labs and frontier players have to play, where they're exposed to an enormous risk if they go all in on a hardware bet." aria-label="回原文"></button>。

## 本集带走

- **推理经济学=每 GB 内存成本**：跑得快的路线不止 SRAM 一条；谁能给便宜的 DRAM 带来激进带宽，谁就同时拿下速度与规模。
- **模型万变，带宽刚需不变**：每两周一个新模型不用慌——「新 LLM 迫切需要数量级更多的内存带宽」是几乎唯一的公共项。
- **设计周期除以四**：架构师意图到成品文件的预测，别信 10 年，按「除以四再减一点」估；但流片 3-5 个月、芯片要 3-5 年摊销的物理/财务约束仍然真实。
- **AI 提效的正确姿势是补瓶颈**：设计流程里跑几天的布局布线等 NP 难环节，才是 AI 加速后卡脖子的一段，值得做近似替代。
- **前沿实验室需要中立供应商**：全押单一专有芯片是九个月内可能致命的不对称风险，所以第三方前沿芯片玩家会长期存在。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">它相当于芯片领域的前沿模型——如果你能找到一种办法，在结构上切分出三到六个月的优势，你将会赢下所有那些部署。</span>  
> *It's the equivalent of the frontier model for the chip space is if you can just find a way to structurally carve out a three to six months advantage, you will be winning all of those deployments.*  
> <span class="qm">—— Walter Goodwin · [00:30]</span> ^q1

> <span class="qz">响应更快的聊天机器人，差不多就是快速推理领域里的「更快的马」。</span>  
> *The snappier chatbot is kind of the faster horses of kind of fast inference.*  
> <span class="qm">—— Walter Goodwin · [13:21]</span> ^q2

> <span class="qz">经济性实际上坍缩为本质上一个东西：你所使用的内存的每 GB 成本。</span>  
> *the economics actually collapsed down to essentially a kind of cost per gigabyte of the memory that you're employing*  
> <span class="qm">—— Walter Goodwin · [14:42]</span> ^q3

> <span class="qz">新的 LLM 迫切希望拥有比现在高出几个数量级的内存带宽，以便运行得更快。</span>  
> *a new LLM desperately wants to have orders of magnitude more bandwidth to memory in order to run faster*  
> <span class="qm">—— Walter Goodwin · [16:33]</span> ^q4

> <span class="qz">另一个，我认为我们不能失去的，是需要进行非常深思熟虑、在架构上微妙的下注，因为你最终真正造出来的芯片仍然需要有三年以上的使用寿命。</span>  
> *There is also, I think, what we don't lose is the need to place really thoughtful and subtle bets architecturally because the chip you actually end up making does still need to have a three year plus useful lifespan.*  
> <span class="qm">—— Walter Goodwin · [19:42]</span> ^q5

> <span class="qz">另一部分，我认为这对 AI 实验的递归自我改进同样成立：当驱动实验的思考的智能水平越来越高、而实验因此成为瓶颈时，我认为我们会做更多的思考。</span>  
> *The other part there, and I think this is true of RSI for AI experiments as well, is as our intelligence levels on the thinking that then drives that experiment gets higher and higher, And as that experiment therefore becomes the bottleneck, I think we do more thinking.*  
> <span class="qm">—— Walter Goodwin · [26:57]</span> ^q6

> <span class="qz">今天有个有点像笑话的说法：那些第一方自研努力，它们的主要目的是压低人们付给 NVIDIA 的价格。</span>  
> *There's a bit of a joke today that the sort of first party efforts, their primary purpose is to reduce the price that people pay NVIDIA.*  
> <span class="qm">—— Walter Goodwin · [32:12]</span> ^q7

> <span class="qz">在我部署足够多的那款芯片、从而也获得那种 5 倍计算效率提升之前的九个月里，我可能会死掉。</span>  
> *I could die in the nine months before I get to deploy enough of that chip that I've also now gained that kind of 5X in computational efficiency.*  
> <span class="qm">—— Walter Goodwin · [34:43]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-25-iltb-neil-movva-making-ai-10x-cheaper-invest|把 token 压到最便宜：一家「代币工厂」的算力拾荒术]]<span class="pd-rz">同公司:NVIDIA、TSMC、AMD、Cerebrus · 同概念:推理 (inference)</span>
- [[2026-09-19-twentyvc-20vc-anti-data-centres-is-a-chinese-psyo|推理才是赚钱的生意：Positron 联合创始人谈内存墙、缓存暴利与「守住前沿」之争]]<span class="pd-rz">同公司:NVIDIA · 同概念:推理 (inference)、缩放定律 (scaling laws)</span>
- [[2026-10-01-practicalai-open-models-and-the-future-of-physical-a|NVIDIA 开放模型与物理 AI:世界模型为什么是关键拼图]]<span class="pd-rz">同公司:NVIDIA · 同概念:LLM、推理 (inference)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-a16z-is-ai-a-bubble-gavin-baker-on-data-cente|没有暗GPU:一位基金经理拆解AI泡沫论与棋局]]<span class="pd-rz">同公司:Broadcom、NVIDIA、AMD · 同概念:ASIC、缩放定律 (scaling laws)</span>
- [[2026-09-15-uncapped-uncapped-57--andrew-feldman-from-cerebra|一颗餐盘大的芯片：Cerebras 创始人讲晶圆级豪赌]]<span class="pd-rz">同公司:NVIDIA、TSMC、Cerebrus · 同概念:推理 (inference)</span>
- [[2026-08-18-iltb-ben-thompson-on-big-tech-china-and-the-a|Ben Thompson:美国赢得 AI 竞赛反而是危险的]]<span class="pd-rz">同公司:NVIDIA、TSMC · 同概念:推理 (inference)</span>

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
