---
title: "没有暗GPU:一位基金经理拆解AI泡沫论与棋局"
podcast: The a16z Show
date: 2026-09-07
source_url: undefined
duration: "31:37"
type: episode
cover: "#64748b"
description: Atreides 管理合伙人兼 CIO Gavin Baker 对比 2000 年电信泡沫，论证当前 AI 不是泡沫，并拆解 NVIDIA、Google TPU、模型公司与 SaaS 的竞争格局。
host: "[[Gavin Baker]]"
cohosts: ["[[David George]]"]
companies: ["[[NVIDIA]]", "[[Google]]", "[[OpenAI]]", "[[Anthropic]]", "[[Broadcom]]", "[[AMD]]", "[[Gemini]]", "[[ChatGPT]]", "[[Cursor]]"]
concepts: ["[[TPU]]", "[[SaaS]]", "[[缩放定律]]", "[[推理]]", "[[RL]]", "[[GPU]]", "[[ASIC]]"]
category: 创业与行业
tags:
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-14-a16z-is-ai-a-bubble-gavin-baker-on-data-cente#post","headline":"没有暗GPU:一位基金经理拆解AI泡沫论与棋局","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-14-a16z-is-ai-a-bubble-gavin-baker-on-data-cente","mainEntityOfPage":"https://talk.solomind.cc/2026-07-14-a16z-is-ai-a-bubble-gavin-baker-on-data-cente","description":"Atreides 管理合伙人兼 CIO Gavin Baker 对比 2000 年电信泡沫，论证当前 AI 不是泡沫，并拆解 NVIDIA、Google TPU、模型公司与 SaaS 的竞争格局。","datePublished":"2026-09-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Gavin Baker"},{"@type":"Person","name":"David George"},{"@type":"Organization","name":"NVIDIA"},{"@type":"Organization","name":"Google"},{"@type":"Organization","name":"OpenAI"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"Broadcom"},{"@type":"Organization","name":"AMD"},{"@type":"Organization","name":"Gemini"},{"@type":"Organization","name":"ChatGPT"},{"@type":"Organization","name":"Cursor"},{"@type":"Thing","name":"TPU"},{"@type":"Thing","name":"SaaS"},{"@type":"Thing","name":"缩放定律 (scaling laws)"},{"@type":"Thing","name":"推理 (reasoning)"},{"@type":"Thing","name":"RL"},{"@type":"Thing","name":"GPU"},{"@type":"Thing","name":"ASIC"}],"articleSection":"创业与行业"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"创业与行业","item":"https://talk.solomind.cc/tags/创业与行业"},{"@type":"ListItem","position":3,"name":"没有暗GPU:一位基金经理拆解AI泡沫论与棋局","item":"https://talk.solomind.cc/2026-07-14-a16z-is-ai-a-bubble-gavin-baker-on-data-cente"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>没有暗GPU:一位基金经理拆解AI泡沫论与棋局</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 没有暗GPU:一位基金经理拆解AI泡沫论与棋局

<div class="pd-byl"><b>Gavin Baker</b> · Atreides 管理合伙人兼 CIO · 2026-09-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-14-a16z-is-ai-a-bubble-gavin-baker-on-data-cente.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">NVIDIA 最大的竞争对手，不是 AMD,不是 Broadcom,肯定不是 Marvell,也不是 Intel,而是 Google。</div><div class="a">— David George <button class="pd-ts" data-t="08:15" data-who="David George" data-en="So NVIDIA's biggest competitor, it's not AMD, it's not Broadcom, it's certainly not Marvell, it's not Intel, it's Google." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Gavin Baker]] · [[David George]]
>
> **公司** [[NVIDIA]] · [[Google]] · [[OpenAI]] · [[Anthropic]] · [[Broadcom]] · [[AMD]] · [[Gemini]] · [[ChatGPT]] · [[Cursor]]
>
> **概念** [[TPU]] · [[SaaS]] · [[缩放定律]] · [[推理]] · [[RL]] · [[GPU]] · [[ASIC]]

这一集是 a16z 的炉边谈话：主持人 [[David George|David George]] 对坐 [[Gavin Baker|Gavin Baker]]——Atreides Management 的管理合伙人兼首席投资官，硅谷圈里 AI 大新闻出来时大家都会去他那找解读的人。开场主持人先甩数据：美国现有约一万亿美元数据中心，未来五年还要再建三到四万亿；但 [[Google|Google]] 的 token 处理量 17 个月涨了 150 倍。那么，现在是 AI 泡沫吗？

## 不算泡沫，因为「没有暗着的 GPU」

Gavin 的答案很干脆：不认为今天是泡沫，判据来自他亲历的 2000 年电信泡沫。当年泡沫的定义物是「暗光纤」——铺进地下却没点亮的光纤，没有两端的光学器件和交换机，它毫无用处。

泡沫顶峰时，美国已铺设的光纤里 97% 是暗的。对比今天：**没有暗着的 [[GPU|GPU]]**——读任何技术论文都知道，训练运行中最大的问题之一是 GPU 被「跑融化了」。

再看两个硬指标：估值上，思科当年峰值市盈率 150-180 倍，[[NVIDIA|NVIDIA]] 现在约 40 倍；回报上，最大的 GPU 买家全是上市公司，加大资本开支以来它们的投入资本回报率(ROIC,即每投一块钱赚回多少)提升了约 10 个百分点——到目前为止，AI 支出的回报是实实在在正面的。另外买单的人也有底气：为资本开支出钱的这些公司每年合计产生约 3000 亿美元自由现金流，账上还有 5000 亿美元现金。

主持人补充：现在点亮一吉瓦的算力要花三四百亿美元(NVIDIA 芯片)，但那是个以每年 3000 亿速度增长的约 8000 亿美元缓冲。Larry Page 在内部说过「宁愿破产也不输掉这场竞赛」，这种心态在 Google 必然存在，Meta 或许也是——这是一场被看作关乎存亡的竞赛。

## 「循环交易」被夸大了

对争议最大的「循环交易」(比如 NVIDIA 投资客户、客户再拿钱买 NVIDIA 芯片)，Gavin 承认客观上在发生——钱是可替代的，NVIDIA 没法禁止 [[OpenAI|OpenAI]] 拿投资款去买自家芯片——但规模非常小。驱动力不是融资需要，而是竞争：NVIDIA 最大的对手不是 [[AMD|AMD]]、[[Broadcom|Broadcom]] 或 Intel,而是手握 [[TPU|TPU]] 芯片的 Google。

TPU 是今天唯一能替代 NVIDIA 训练的芯片，可能也是最好的[[推理|推理]]替代品；而且 Google 还有 DeepMind 和 [[Gemini|Gemini]]——过去两三个月 Gemini 抢下了 15-20 个百分点的流量份额(还不算搜索摘要)，按实际流量算 Google 可能已超过 OpenAI 和 [[Anthropic|Anthropic]]。当 Google 对 Anthropic 说「我帮你融资、给你芯片」时，NVIDIA 出于竞争很难不回应。Jensen 所做的每一步都是完全理性的；他和 Elon 是 Gavin 见过最好的两位 CEO。

## 模型层：现在像 Netscape 时代，别急着下注应用

Gavin 提醒保持谦逊：如果说 [[ChatGPT|ChatGPT]] 之于 AI 相当于 Netscape Navigator 之于互联网，那这个时间点上 Google 还没成立、Zuckerberg 还在上初中。AI 到底是颠覆性创新还是持续性创新，也还没定论——数据、算力资金、分发渠道这些要素，今天的大科技公司全都绰绰有余，只要执行得当，AI 对 Mag-7 的很多成员可能反而是「持续性创新」；但它是生死攸关的，执行不好下场就是 IBM。对 Google 而言，「ChatGPT 就是珍珠港」。

商业模型上别指望 [[SaaS|SaaS]] 式利润率：由于[[缩放定律|缩放定律]](模型能力随算力投入可预测提升的规律)和《苦涩的教训》，前沿实验室的毛利率在结构上就会更低，在缩放定律和测试时算力的重要性改变之前，看不到毛利率接近 SaaS 或互联网时代水平的可能。

推理能力(让模型先「想」再答)则根本性地改变了这些公司的经济性。推理出现之前 Gavin 常说：一个没有独占数据和互联网级分发的前沿模型，是「历史上贬值最快的资产」；而推理改变了这一点——庞大的用户群通过后训练阶段的强化学习([[RL|RL]])喂回数据，解锁了每个伟大消费互联网公司核心的那个飞轮：好产品带来用户，用户让算法更好，算法让产品更好。

这个飞轮在 AI 里还没真正转起来，但「眯起眼睛能看到它在转」。另一件让他抓狂的事：说「GPT-5 宣告 scaling 失败」是错的——GPT-5 是个更小的模型，设计目标是对 OpenAI 和微软运行起来更经济，不是更强，任何把它和缩放定律挂钩的说法都是疯狂的。

## SaaS 公司：别怕毛利率下降，那是成功的勋章

Gavin 曾说过应用层 SaaS 可能归零，现在观点更细致了：服务碎片化 SMB 客户的 SaaS 可能出大赢家。他最想敲打的是那些死守毛利结构的老牌 SaaS——很多零售商当年面对 Amazon 犯的关键错误，就是看着 Amazon 的利润率说「我们不想做那门生意」，25 年后 Amazon 零售利润率非常健康。

**鉴于 AI 更耗算力的本质，在 AI 上成功却不承受毛利率压力，从定义上讲是不可能的**。先例也有：微软从本地永久授权转向更低利润率的云模式，之后十年股价相当不错。

他甚至说，把毛利率下降看作成功的标志而不是耻辱。他惊讶于为什么没有一家上市的编程公司试着和 [[Cursor|Cursor]] 竞争——哪怕用现有业务的利润养着 AI 产品盈亏平衡运行，你也有一个机会；Cursor 已有一万亿 token,等编程 token 积累够了就真的追不上了。Figma 上市时主动宣布会激进分发 AI 工具、毛利率会下降，市场反应反而很好。

消费端，他判断推出 AI 浏览器的 AI 原生公司「可能会后悔」：Chrome 有约 50 亿用户，Google 也在诉讼中不敢轻举妄动，完全可以等别人跑三到六个月再跟进，做得还更好。押注反对拥有庞大现有用户基础的公司，很难。

## 芯片战：NVIDIA vs Google TPU,大部分自研 ASIC 会失败

芯片格局 Gavin 判断为一场双雄对决：NVIDIA 对 Google TPU。NVIDIA 已不只是半导体公司——先是 CUDA 使其成为软件公司，然后是机架级方案的系统公司，如今靠 scale-up/scale-out/scale-across 网络架构成为「数据中心级」公司；网络、fabric、软件全都重要。

不被广泛认识的一点：Broadcom 和 AMD 实际上在联合走向市场——Broadcom 对 Meta 这类公司的说辞是：给你用以太网做的开放标准 fabric 对抗 NVIDIA 的 NVLink + InfiniBand/以太网组合，再给你造你自己的「TPU 版本」(那是 Google 花了三代才调通的)，如果 [[ASIC|ASIC]] 不行还可以直接插 AMD。但 Gavin 认为未来三年会看到一批高知名度的 ASIC 项目被取消，尤其如果 Google 开始对外卖 TPU——传闻 Anthropic 想买数百亿美元的 TPU。

Amazon 的 Annapurna 团队是超大规模厂商里最有才华的硅芯片团队，其新一代芯片应会远好于上一代——毕竟 Google 也是三代才把 TPU 做对。AMD 则永远是那个必要的第二供应商。

> 【背景】Trainium 是 Amazon 自研 AI 芯片系列；正文所说「新一代远好于上一代」即指 Trainium 3 相对 Trainium 2。

## 商业模式与机器人：一切走向「按结果付费」

平台转移叠加商业模式转移时机会最大。客户支持(如 a16z 投的 Decagon)是最容易的首个案例：文本数据多、LLM 擅长文本、跑 RL 就能对齐「客户满意、首次通话解决」这类可验证的奖励。

更广的趋势是：人类本来就按结果获得报酬，AI 增强乃至取代一部分人类后，也会走向按结果付费。广告模式里那种「广告主系统性地高估自己留住 Google 带来的客户」的低效率，会被按结果付费挤压掉——这也是 Google 从不做市场平台的原因。至于人人讨论的联盟佣金，Gavin 设想自己的 AI 会是一个懂他、喜欢他的 Grok 版本，度假时帮他订到最好价格的房间，然后收一笔联盟佣金。

机器人「非常真实」，格局会是 Tesla 对阵中国厂商，就像汽车业。人形与非人形之争已经结束：人形能从看 YouTube 视频学习，人也更容易穿动捕服给它示范——看 50 台 Optimus 做 50 种不同任务的视频很震撼，而他认识的每个机器人专家都印象极深。

他最后对时间线的吐槽：Karpathy 因为说 AGI 还有十年而被描绘成怀疑论者——「开什么玩笑，十年？」

## 本集带走

- **判断 AI 泡沫的一个硬指标**：有没有「暗算力」。2000 年 97% 的光纤是暗的，今天 GPU 不够用；最大买家 ROIC 实际提升了约 10 个百分点，估值(NVIDIA 约 40 倍)也远低于思科当年的 150-180 倍。
- **芯片格局是双雄对决**：NVIDIA(芯片+软件+系统+网络的全栈)对 Google TPU,Broadcom 和 AMD 联手服务自研芯片阵营；未来三年预计一批高知名度 ASIC 项目会被取消。
- **别用 SaaS 毛利率框架套 AI**:缩放定律决定了前沿模型毛利结构性更低；应用层公司主动接受毛利下降反而是「有人真在用 AI」的勋章，微软转云是先例。
- **老牌 SaaS 的窗口正在关闭**：用现有业务的利润养 AI 产品盈亏平衡运行、全力铺开，还有机会追；编程 token 积累到一定量级后(Cursor 已一万亿)就追不上了。
- **推理改变了模型公司经济性**：大用户群通过 RL 后训练解锁消费互联网式的增长飞轮，Anthropic、XAI、OpenAI 都受益。
- **未来按结果付费**：从客户支持到个人 AI 助理带联盟佣金，广告模式中「广告主系统性多付钱」的低效率会被挤压掉。

<div class="pd-sec pd-sec-q">全部金句 <span>13 条</span></div>

> <span class="qz">NVIDIA 最大的竞争对手，不是 AMD,不是 Broadcom,肯定不是 Marvell,也不是 Intel,而是 Google。</span>  
> *So NVIDIA's biggest competitor, it's not AMD, it's not Broadcom, it's certainly not Marvell, it's not Intel, it's Google.*  
> <span class="qm">—— David George · [08:15]</span> ^q1

> <span class="qz">我怀疑按实际流量计算，Google 今天比 OpenAI、Anthropic 或任何公司都大。</span>  
> *I suspect on an actual traffic basis, Google is bigger than OpenAI, Anthropic, anyone today.*  
> <span class="qm">—— David George · [09:00]</span> ^q2

> <span class="qz">如果说 ChatGPT 之于 AI,就像 Netscape Navigator 之于互联网——在互联网繁荣的这个时间点，Google 还没有创立。</span>  
> *And say that ChatGPT is to AI as Netscape Navigator was to the internet. At this point in the internet boom, Google had not been founded.*  
> <span class="qm">—— David George · [10:46]</span> ^q3

> <span class="qz">这是我认为基础设施层在这类新技术浪潮的初期往往可能是一个安全所在的原因之一。</span>  
> *It's one reason I think the infrastructure layer is often maybe a safe place to be at the beginning of one of these new technology waves.*  
> <span class="qm">—— David George · [11:11]</span> ^q4

> <span class="qz">不，对我来说，ChatGPT 对 Google 来说就是珍珠港事件，我们将看到他们如何应对。</span>  
> *No, to me, ChatGPT was Pearl Harbor for Google, and we're going to see how they responded.*  
> <span class="qm">—— David George · [12:36]</span> ^q5

> <span class="qz">鉴于我们刚才讨论的内容，在 AI 领域取得成功却不承受毛利率压力，从定义上讲是不可能的。</span>  
> *It is definitionally impossible, given what we just discussed, to succeed in AI without gross margin pressure.*  
> <span class="qm">—— David George · [15:53]</span> ^q6

> <span class="qz">把毛利率下降看作是成功的标志，而不是耻辱的标记，或者值得恐惧的东西。</span>  
> *And look at declining gross margins kind of has a mark of success rather than a badge of shame or something to be feared.*  
> <span class="qm">—— David George · [16:37]</span> ^q7

> <span class="qz">我想说的一点是，我确实认为，押注反对那些今天拥有庞大现有用户基础的公司是很难的。</span>  
> *And the one thing I would say is I do think it's tough to bet against the companies with large existing user bases today.*  
> <span class="qm">—— David George · [20:46]</span> ^q8

> <span class="qz">也没有互联网规模的分发能力，你就是历史上贬值最快的资产。</span>  
> *And internet scale distribution, you're the fastest depreciating asset in history.*  
> <span class="qm">—— David George · [21:11]</span> ^q9

> <span class="qz">而那个飞轮，在 AI 领域还没真正转起来，但你眯起眼睛可以看到它在转。</span>  
> *And that, it's not quite spinning yet in AI, but you can squint and see it.*  
> <span class="qm">—— David George · [21:37]</span> ^q10

> <span class="qz">任何把 GPT-5 和缩放定律联系起来的说法都是疯狂的。</span>  
> *Any reference to GPT-5 and scaling laws is crazy.*  
> <span class="qm">—— David George · [22:48]</span> ^q11

> <span class="qz">从根本上说，人类是按结果获得报酬的，很多 AI 会增强人类，但可能也会取代一部分人类，而这将涉及按结果付费。</span>  
> *Humans were fundamentally paid based on outcomes, and a lot of AI will be augmenting humans, but probably also replacing some humans, and that will involve being paid for outcomes.*  
> <span class="qm">—— David George · [27:31]</span> ^q12

> <span class="qz">在接下来三年里，我认为你会看到一批高知名度的 ASIC 项目被取消，尤其是如果 Google 开始对外销售 TPU 的话，这在 X 上已经传遍了。</span>  
> *In the next three years, I think you'll see a bunch of high-profile ASIC programs canceled, especially if Google starts selling TPUs externally, which has been all over X.*  
> <span class="qm">—— David George · [24:45]</span> ^q13

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「创业与行业」挖下去**

- [[2026-08-05-bigtech-how-the-ai-bet-pays-off-ai-lab-strategy|红杉合伙人 David Cahn：AI 需赚回 4 万亿，这场棋局没有中间态]]<span class="pd-rz">同公司:Anthropic、Google、NVIDIA、OpenAI、Amazon、Meta、Microsoft · 同概念:TPU、SaaS</span>
- [[2026-05-31-lennys-a-rational-conversation-on-where|AI 会改变一切，但也「只和互联网一样大」]]<span class="pd-rz">同公司:Anthropic、Gemini、Google、OpenAI、Meta</span>
- [[2026-08-25-a16z-the-new-economics-of-ai-martin-casado-st|AI 如何把工程问题变回资本问题]]<span class="pd-rz">同公司:Anthropic、Google、OpenAI、Microsoft · 同概念:缩放定律 (scaling laws)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-01-a16z-daniel-litt-the-mathematicians-guide-to|AI解数学题≠理解数学]]<span class="pd-rz">同公司:Anthropic、ChatGPT、OpenAI · 同概念:RL、推理 (reasoning)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:缩放定律 (scaling laws)</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Anthropic、Cursor、OpenAI</span>

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
