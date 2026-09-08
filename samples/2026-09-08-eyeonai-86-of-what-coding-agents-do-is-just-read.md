---
title: 把 100 万 token 用出 5 万的体验：SubQuadratic 的稀疏注意力
podcast: Eye On A.I.
date: 2026-09-09
source_url: undefined
duration: "54:37"
type: episode
cover: "#64748b"
image: "/covers/2026-09-08-eyeonai-86-of-what-coding-agents-do-is-just-read.jpg"
description: SubQuadratic 联合创始人兼 CTO Alex 讲解稀疏注意力如何打破 Transformer 的二次方计算瓶颈，让数百万 token 上下文真正可用、可负担。
host: "[[Alexander Whedon]]"
companies: ["[[SubQuadratic]]"]
concepts: ["[[稀疏注意力]]", "[[上下文工程]]", "[[智能体]]", "[[RAG]]", "[[预训练]]", "[[DeepSeek Sparse Attention]]", "[[KVCache]]", "[[transformer]]", "[[Opus 4.6]]", "[[Flash Attention 之前的注意力]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/covers/2026-09-08-eyeonai-86-of-what-coding-agents-do-is-just-read.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-08-eyeonai-86-of-what-coding-agents-do-is-just-read#post","headline":"把 100 万 token 用出 5 万的体验：SubQuadratic 的稀疏注意力","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-08-eyeonai-86-of-what-coding-agents-do-is-just-read","mainEntityOfPage":"https://talk.solomind.cc/2026-09-08-eyeonai-86-of-what-coding-agents-do-is-just-read","description":"SubQuadratic 联合创始人兼 CTO Alex 讲解稀疏注意力如何打破 Transformer 的二次方计算瓶颈，让数百万 token 上下文真正可用、可负担。","datePublished":"2026-09-09","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-08-eyeonai-86-of-what-coding-agents-do-is-just-read.jpg","about":[{"@type":"Person","name":"Alexander Whedon"},{"@type":"Organization","name":"SubQuadratic"},{"@type":"Thing","name":"稀疏注意力 (sparse attention)"},{"@type":"Thing","name":"上下文工程 (context engineering)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"预训练 (pre-training)"},{"@type":"Thing","name":"DeepSeek Sparse Attention"},{"@type":"Thing","name":"KVCache"},{"@type":"Thing","name":"transformer"},{"@type":"Thing","name":"Opus 4.6"},{"@type":"Thing","name":"Flash Attention 之前的注意力 (attention)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"把 100 万 token 用出 5 万的体验：SubQuadratic 的稀疏注意力","item":"https://talk.solomind.cc/2026-09-08-eyeonai-86-of-what-coding-agents-do-is-just-read"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把 100 万 token 用出 5 万的体验：SubQuadratic 的稀疏注意力</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 把 100 万 token 用出 5 万的体验：SubQuadratic 的稀疏注意力

<div class="pd-byl"><b>Alexander Whedon</b> · SubQuadratic 联合创始人兼CTO · 2026-09-09</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-08-eyeonai-86-of-what-coding-agents-do-is-just-read.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">据我们所知，我们是唯一做过稳健的数百万 token 预训练的人。</div><div class="a">— Alexander Whedon <button class="pd-ts" data-t="11:26" data-who="Alexander Whedon" data-en="As far as we know, we are the only people to do robust multi-million token pre-training." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Alexander Whedon]]
>
> **公司** [[SubQuadratic]]
>
> **概念** [[稀疏注意力]] · [[上下文工程]] · [[智能体]] · [[RAG]] · [[预训练]] · [[DeepSeek Sparse Attention]] · [[KVCache]] · [[transformer]] · [[Opus 4.6]] · [[Flash Attention 之前的注意力]]

这一集聊的是大模型最基础的一个数学瓶颈：注意力(模型在处理文本时，让每个 token 和其他所有 token 互相关照的机制)的成本随上下文长度平方增长——上下文翻倍，算力大约贵四倍。主角是 Alex,[[SubQuadratic|SubQuadratic]] 的联合创始人兼 CTO,做了约十年语言模型，从 [[transformer|Transformer]] 出现之前的 LSTM 时代就开始了。他和团队的做法是：不换掉注意力，而是让它只算「重要的那一小部分」——而且他们认为，这会改变的不只是成本，还有企业用 AI 的整个方式。

最抓人的一个数字：他们用代码基准测试前沿模型时发现，**86% 的步骤其实是在「读」——做[[上下文工程|上下文工程]]，真正干活只占最后 14%** <button class="pd-ts" data-t="07:03" data-who="Alex" data-en="Thinking about the fact that when we've done benchmarking of Frontier Models with SweetBench Pro, we found that... 86% of the steps were actually read steps, just trying to do that context engineering before the execution review, which was only the last 14%." aria-label="回原文"></button>。换句话说，今天的[[智能体|智能体]]大部分精力不是在解决问题，而是在想办法把上下文塞小、塞对。SubQuadratic 想干掉的就是这一步。

## 注意力的平方税，和动态稀疏注意力

1000 个 token 就有 100 万个两两关系，100 万个 token 就是 1 万亿级的关系，全算一遍就是平方级开销。[[稀疏注意力|稀疏注意力]](只对部分 token 关系跑注意力)的思路是：其实不需要全部。

但历史上的做法都是固定模式——比如滑动窗口注意力只看最近的 1000 个 token,靠固定公式决定看谁。问题是「第一个和第七个 token 是否相关」高度依赖内容，固定模式没法稳健地对语言建模 <button class="pd-ts" data-t="12:29" data-who="Alex" data-en="So, I mean, I feel like I kind of buried the lead on that with one of my earlier answers, but I mean, the problem with sparse attention historically has been that they're fixed pattern mechanisms, like sliding window attention, look at the last 1000 tokens that are closest, or before and after." aria-label="回原文"></button>。

[[DeepSeek Sparse Attention|DeepSeek Sparse Attention]] 是个转折：用一个单独的预测模型动态挑出重要的 token 关系，证明动态选择可以不牺牲质量。但它有个致命伤——那个选择模型本身用的是全注意力，又把平方问题带回来了；在 52000 token 时，它的算力就已经超过整个模型里稀疏注意力层的总和，而且差距还在扩大 <button class="pd-ts" data-t="04:39" data-who="Alex" data-en="And so you still have the quadratic problem. In fact, that separate selection model uses more compute than the sparse attention layers in the full model at just 52,000 tokens and then continuously grows to an even larger differential." aria-label="回原文"></button>。

SubQuadratic 的独特之处：**一个模型同时做选择和生成**，不用单独的选择机制，也没有全注意力的成本。具体怎么挑 token 是他们高度专有的部分，Alex 只肯说到「创造性地利用输入的一些早期信息，且不产生全对全比较」的程度 <button class="pd-ts" data-t="15:39" data-who="Alex" data-en="Yeah. I mean, that's the highly proprietary part that we have. But I would say, I guess I could say we creatively use some early information on the inputs in a way that doesn't create all-to-all comparisons." aria-label="回原文"></button>。

效果是每个输入得到不同的注意力图，超级便宜、超级快，而且动态。官方数字：在 B200/B300 上比之前的 Flash Attention 快约 40 倍、计算量少 64 倍，都是在 100 万 token 规模下 <button class="pd-ts" data-t="14:05" data-who="Alex" data-en="We leverage the fact that we can do this dynamic selection to achieve high-quality results while also having efficiency differentials. We are around 40 times faster than flash of tension before on B200s and B300s." aria-label="回原文"></button>。

## 长上下文的真正瓶颈不是窗口大小，是智能

Alex 强调他们追的不只是窗口大小，而是四个维度：**大小、智能、成本、延迟**。现实很尴尬：直到近期 [[Opus 4.6|Opus 4.6]] 开放 100 万 token 通用访问之前，前沿模型的可用上下文基本停在 256k 以内；很多企业实际只用到 10 万 token 甚至更少， coding 场景里很多人把压缩限制设在 40 万 token——因为他们感觉再往上质量就开始打折 <button class="pd-ts" data-t="09:16" data-who="Alex" data-en="So yeah, the intelligence within the context window is a very important topic. If we just take a step back and think about what frontier context has looked like historically, we didn't get frontier models with more than a 256,000 token context window until March when the Opus 4.6 general access, 1 million token general access came available." aria-label="回原文"></button>。

更深一层是**对齐问题**：用户希望模型怎么用 100 万 token,今天根本没有被稳健地理解。没有足够多的企业应用真正吃满过 100 万窗口，长上下文的人类偏好基准也不存在。

他们的实测例子：给一篇新闻文章问「最重要的三个洞见」，模型给的三个技术上没错，但不是用户关心的那三个 <button class="pd-ts" data-t="36:42" data-who="Alex" data-en="So we found, for example, people will tell us that On a news article, they'll ask, what are the top three insights from here? And the model will give three top insights that are technically accurate, but they're not the three they cared about." aria-label="回原文"></button>。Alex 的判断是这个问题没法靠提示词解决——太复杂、太微妙，必须先通过训练，用 RL 在海量问题上展现用户偏好，之后才轮到提示词层面 <button class="pd-ts" data-t="37:30" data-who="Alex" data-en="And impromptability is still a bit lacking also for these types of problems. And I think to some extent like this problem can't be solved at the the prompt level because it's just so complex and nuanced like we do we do actually need to solve this through training first where we see a very wide number of problems that" aria-label="回原文"></button>。

## RAG 不是终结，是被改造

主持人问：能把知识库全塞进上下文窗口，[[RAG|RAG]](检索增强生成，先搜资料再回答的架构)是不是就完了？Alex 认可方向但嫌「终结」太极端——是**改造**：今天文档被切成每 400 token 一块、只取前 10 条搜索结果，都是为了迁就上下文成本。

有了便宜的长上下文，你可以用跨多页的大块、取前 50 条、甚至并行跑 20 路搜索全倒进窗口 <button class="pd-ts" data-t="17:06" data-who="Alex" data-en="What we're looking to do is simplify the way that people build products with RAG or, you know, agentic workflows. Examples are today a lot of documents are chunks that don't necessarily need to be chunked." aria-label="回原文"></button>。如果确有 4 亿 token,还是需要某种方式处理，但「不要把一切压缩到 10 万 token 以内」 <button class="pd-ts" data-t="18:04" data-who="Alex" data-en="If you have 400 million tokens, there still needs to be some way for the model to process that data. We're saying like don't compress everything into 100,000 tokens or less." aria-label="回原文"></button>。

落到编码上最直观:Opus 4.6 平均要 66 步解一道 SuBench Pro 题，其中绝大部分是找代码。如果能直接把代码全放进窗口、或花三四步摸清重点、每步在上下文上更激进，六七步就够——总 token 反而更少，还不会漏细节 <button class="pd-ts" data-t="18:25" data-who="Alex" data-en="You can now pull a lot more context and do a lot more work with every single step in your agent workflow. Like I mentioned before, if we're talking about coding problems, Opus 4.6 required an average of 66 steps to tackle C-Bunch Pro problems." aria-label="回原文"></button>。副产品是智能体更便宜、更快、泛化更好：每加一个搜索引擎或路由逻辑，都是在收窄系统能做的事；上下文工程这一步占了今天人力和资本投入的绝大部分，去掉它，进入门槛会大幅下降 <button class="pd-ts" data-t="30:24" data-who="Alex" data-en="Yeah, I think that will, a couple things will happen. One is we will have systems that can generalize better because every time you add a search engine or a vector database, which is a search engine, or some conditional logic to route between the steps, this human curation really limits the ability of that system to do a lot of different things." aria-label="回原文"></button>。

## 预训练才是杠杆

为什么非要自己训模型？因为后训练(在[[预训练|预训练]]之后用标注数据微调行为的阶段)创造价值的能力，受限于预训练做得够不够——没在代码上大量预训练，就很难后训练出擅长代码的模型 <button class="pd-ts" data-t="20:31" data-who="Alex" data-en="And it's largely seen as a requirement to extract additional capabilities in the post-training phase. And so research has largely suggested that your ability to create value in the post-training phase is limited by the pre-training that you've done." aria-label="回原文"></button>。而在大上下文上做大规模训练，对二次方成本的模型来说贵得离谱——这正是他们做 SSA(他们的稀疏注意力机制)的最初动机。

据他们所知，他们是唯一做过稳健的数百万 token 预训练的团队 <button class="pd-ts" data-t="11:26" data-who="Alex" data-en="was that it is cost prohibitive to do large scale training on large contexts. As far as we know, we are the only people to do robust multi-million token pre-training." aria-label="回原文"></button>。证据在 sub-Q 1.1 小模型的技术报告里：一个用大量 100 万 token 输入做预训练的变体，后训练也基本只到 100 万 token,却能外推出 1200 万 token 的检索类问题——后训练阶段从没见过超过 100 万的东西 <button class="pd-ts" data-t="21:14" data-who="Alex" data-en="And in fact, this is something we showed in our technical report for our sub-Q 1.1 small model. We actually have a model variant where we pre-trained the model with one million token inputs up to one million, but a lot of one million token pre-training." aria-label="回原文"></button>。这就是预训练的力量：让模型外推到远超见过的范围。

## 落地：安全、金融，和一个不对称的现实

关于安全：长上下文推理确实能更快发现代码库里的漏洞、包括原本发现不了的，对防御方价值很大。但从外部攻破产品是另一回事——那是迭代测试和知识问题：软件叠着约 20 层开源组件，攻击者测的是已知漏洞在不在，而由于大家都用同一批组件，导致大部分威胁的漏洞数量比想象中少 <button class="pd-ts" data-t="23:32" data-who="Alex" data-en="That is, some of our design partnerships have leaned in that direction. I don't think that long-conducts reasoning specifically provides nearly as much an advantage for being able to find the holes in a product from the outside because it's more about iterative tests." aria-label="回原文"></button>。他也很愿意和开源社区合作，去扫那些「不缺速度、缺视角广度」的老漏洞。

设计伙伴的用例排序：第一是非结构化文档处理与分析，第二是知识型产品，其中金融最突出——PDF 结构难解析、表格难处理、数据散布几百页，某些方面比代码还难。他们的评测显示：代码问答的简单和中等问题各家都接近满分，但金融文档分析很容易造出一个 50 万 token 下远低于 50% 的评测集——**长推理能力今天在各垂直领域间非常不对称** <button class="pd-ts" data-t="40:25" data-who="Alex" data-en="All these challenges that I think make these problems harder than code in some ways. So I guess the TLDR here is that long reasoning capability today is very asymmetric across verticals." aria-label="回原文"></button>。商业模式上他们反过来定价：希望输入 token 便宜到让人感觉免费，想用什么上下文就用什么上下文 <button class="pd-ts" data-t="45:32" data-who="Alex" data-en="Oh, sorry, a lot cheaper still. To make it, we really want people to feel like the input tokens are free, like just consider the context that you need to for your problem." aria-label="回原文"></button>;未来几个月开放完全普遍访问，届时会有免费层和分级定价。

## 下一步：12 个月换一次算法范式，和会洗衣服的机器人

两条长期线。一是**自动研究**：他们已经讨论了一年到一年半，想做出「模型提出架构变体 → 生成实验验证 → 跑实验 → 看结果 → 提出下一轮」的飞轮，目标把算法范式更替从每九年一次压缩到每 12 个月一次，最终完全取代 Transformer 或注意力机制 <button class="pd-ts" data-t="49:15" data-who="Alex" data-en="It is about the algorithm itself. We want to move from shifting the algorithmic paradigm every nine years to doing it every 12 months. So we want to replace transformers or attention entirely." aria-label="回原文"></button>。过程中他们确实在用 LLM 帮忙想点子，但 Alex 直说：只靠 LLM 到不了，它们今天还不够、创造力也不足 <button class="pd-ts" data-t="47:15" data-who="Alex" data-en="I don't think you can get there with just an LLM. They're not enough today. I don't think they're creative enough either, but they're definitely super helpful." aria-label="回原文"></button>。

二是**机器人**。现在的机器人智能相当于 2019 年的语言模型：每个任务要用几千个昂贵样本专门训练。

他想要一个 GPT-3 式的时刻——比如给 10 分钟视频让模型在上下文中学会一个任务，那约等于 400 万 token 的输入，人们连在云端都难做到，而机器人只有手机大小的显存，需要 100 倍以上的内存削减。这也是为什么他们还在做让 [[KVCache|KVCache]](缓存上下文以加速推理的显存开销，数百万 token 时可能比模型权重本身还大)完全不必要的非注意力算法。团队目前不到 50 人，核心研究最初由寥寥几个人完成。

## 本集带走

- **智能体 86% 的步骤是在「读」**：上下文工程吞掉了绝大部分算力和延迟，便宜的长上下文能把它压到几步，总 token 反而更省。
- **稀疏注意力的分水岭是「动态」**：固定模式(滑窗)建模不了语言；DeepSeek 证明动态选择可行但用了全注意力、平方问题依旧；单模型边生成边选择才两全。
- **大窗口 ≠ 大上下文智能**：企业实际只用约 10 万 token,40 万是常见的质量止损点；长上下文的用户偏好要靠 RL 训练解决，提示词层面解决不了。
- **RAG 会被改造而非淘汰**：更大的块、前 50 条检索、20 路并行搜索——以前因为上下文成本不敢做的事都值得重做一遍。
- **预训练决定外推上限**：100 万 token 预训练 + 100 万内后训练，能外推到 1200 万 token 的检索任务。
- **长推理能力极不对称**：代码接近饱和，金融文档在 50 万 token 下可以远低于 50%——评测和机会都在后者。
- **输入 token 应该免费**：上下文成本的下降会改变产品设计的前提，就像当年带宽成本下降改变互联网产品一样。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">据我们所知，我们是唯一做过稳健的数百万 token 预训练的人。</span>  
> *As far as we know, we are the only people to do robust multi-million token pre-training.*  
> <span class="qm">—— Alexander Whedon · [11:26]</span> ^q1

> <span class="qz">研究在很大程度上表明，你在后训练阶段创造价值的能力，受限于你所做过的预训练。</span>  
> *And so research has largely suggested that your ability to create value in the post-training phase is limited by the pre-training that you've done.*  
> <span class="qm">—— Alexander Whedon · [20:31]</span> ^q2

> <span class="qz">我们在编码方面有意走得慢一些，因为我们已经意识到编码在多大程度上是一场预算游戏——你有多少数据预算？</span>  
> *We are intentionally moving a little bit more slowly on the coding side because we've kind of realized like how much coding is like a budget game, like how much data budget do you have?*  
> <span class="qm">—— Alexander Whedon · [27:49]</span> ^q3

> <span class="qz">一个是我们会有泛化能力更好的系统，因为每当你增加一个搜索引擎、或向量数据库(它就是一种搜索引擎)、或某种步骤间的路由逻辑，这种人工整理就真的限制了系统做很多不同事情的能力。</span>  
> *One is we will have systems that can generalize better because every time you add a search engine or a vector database, which is a search engine, or some conditional logic to route between the steps, this human curation really limits the ability of that system to do a lot of different things.*  
> <span class="qm">—— Alexander Whedon · [30:24]</span> ^q4

> <span class="qz">我们希望随着时间的推移，一百万 token 在智能水平、成本、延迟等方面，感觉起来像五万 token。</span>  
> *We want a million tokens to feel like 50,000 tokens in terms of intelligence, cost, latency, et cetera, over time.*  
> <span class="qm">—— Alexander Whedon · [31:20]</span> ^q5

> <span class="qz">管理上下文的能力——不只是在两小时的会话里，而是跨越数周或数月的工作——我认为这将是关键的，而且需要比今天长得多的上下文推理能力。</span>  
> *The ability to manage context, not just through a two-hour session, but across weeks or months of work is something that I think will be critical and will also require much longer context reasoning than we have today.*  
> <span class="qm">—— Alexander Whedon · [32:19]</span> ^q6

> <span class="qz">为此，我们真的希望人们觉得输入 token 是免费的——只管为你的问题考虑所需要的上下文就好。</span>  
> *To make it, we really want people to feel like the input tokens are free, like just consider the context that you need to for your problem.*  
> <span class="qm">—— Alexander Whedon · [45:32]</span> ^q7

> <span class="qz">我不认为只靠一个 LLM 就能做到。它们今天还不够，我也不认为它们有足够的创造力，但它们确实非常有帮助。</span>  
> *I don't think you can get there with just an LLM. They're not enough today. I don't think they're creative enough either, but they're definitely super helpful.*  
> <span class="qm">—— Alexander Whedon · [47:11]</span> ^q8

> <span class="qz">我们想把算法范式的更替从每九年一次，缩短到每 12 个月一次。</span>  
> *We want to move from shifting the algorithmic paradigm every nine years to doing it every 12 months.*  
> <span class="qm">—— Alexander Whedon · [49:15]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-17-talks-every-company-should-have-a-brain-garry|用 Markdown 组建一支军队:Y Combinator 掌门人的 AI 原生公司蓝图]]<span class="pd-rz">同概念:RAG、上下文工程 (context engineering)、智能体 (agent)</span>
- [[2025-07-31-lennys-he-saved-openai-bret-taylor|Bret Taylor：智能体是新应用，软件要按结果定价]]<span class="pd-rz">同概念:上下文工程 (context engineering)、智能体 (agent)</span>
- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:上下文工程 (context engineering)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-09-talks-velocity-sickness-what-happens-when-your|速度病：当团队 10 倍速写代码却推不出产品，怎么治]]<span class="pd-rz">同概念:上下文工程 (context engineering)、智能体 (agent)</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:智能体 (agent)、上下文工程 (context engineering)</span>
- [[2026-07-30-cogrev-is-offense-or-defense-dominant-far-ai-s|AI 安全排行榜：谁扛住了越狱，谁没有]]<span class="pd-rz">同概念:智能体 (agent)、后训练 (post-training)</span>

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
