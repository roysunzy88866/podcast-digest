---
title: "给患者打电话之前,先让 AI 在仿真里跑几万遍:Euphonia 的医疗 AI 安全栈"
podcast: 精选演讲
date: 2026-09-24
source_url: undefined
duration: "18:55"
type: episode
cover: "#64748b"
description: "Euphonia 研究工程师 Jared 讲解临床语音 AI「Dora」如何用仿真患者、LLM 裁判和提示词自动优化,在患者接到电话前证明产品安全。"
guests: ["[[Jared Joselowitz]]"]
companies: ["[[Euphonia]]", "[[DORA]]"]
concepts: ["[[智能体]]", "[[Matrix]]", "[[Patbot]]", "[[BevJudge]]", "[[模拟]]", "[[judge]]", "[[提示词优化器]]", "[[成本矩阵]]", "[[医疗器械监管]]"]
category: AI 安全
tags:
  - AI 安全
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-19-talks-shipping-ai-to-a-million-patients-withou#post","headline":"给患者打电话之前,先让 AI 在仿真里跑几万遍:Euphonia 的医疗 AI 安全栈","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-19-talks-shipping-ai-to-a-million-patients-withou","mainEntityOfPage":"https://talk.solomind.cc/2026-08-19-talks-shipping-ai-to-a-million-patients-withou","description":"Euphonia 研究工程师 Jared 讲解临床语音 AI「Dora」如何用仿真患者、LLM 裁判和提示词自动优化,在患者接到电话前证明产品安全。","datePublished":"2026-09-24","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jared Joselowitz"},{"@type":"Organization","name":"Euphonia"},{"@type":"Organization","name":"DORA"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"Matrix"},{"@type":"Thing","name":"Patbot"},{"@type":"Thing","name":"BevJudge"},{"@type":"Thing","name":"模拟 (simulation)"},{"@type":"Thing","name":"judge"},{"@type":"Thing","name":"提示词优化器 (prompt optimizer)"},{"@type":"Thing","name":"成本矩阵 (cost matrix)"},{"@type":"Thing","name":"医疗器械监管 (medical device)"}],"articleSection":"AI 安全"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 安全","item":"https://talk.solomind.cc/tags/AI 安全"},{"@type":"ListItem","position":3,"name":"给患者打电话之前,先让 AI 在仿真里跑几万遍:Euphonia 的医疗 AI 安全栈","item":"https://talk.solomind.cc/2026-08-19-talks-shipping-ai-to-a-million-patients-withou"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>给患者打电话之前,先让 AI 在仿真里跑几万遍:Euphonia 的医疗 AI 安全栈</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 给患者打电话之前,先让 AI 在仿真里跑几万遍:Euphonia 的医疗 AI 安全栈

<div class="pd-byl"><b>Jared Joselowitz</b> · Euphonia 研究工程师 · 2026-09-24</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-19-talks-shipping-ai-to-a-million-patients-withou.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">交付给患者,会把你通常发布时依赖的那些常规安全网全部拿走。</div><div class="a">— Jared Joselowitz <button class="pd-ts" data-t="00:58" data-who="Jared Joselowitz" data-en="So shipping to patients takes away the normal safety nets you would normally ship with." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jared Joselowitz]]
>
> **公司** [[Euphonia]] · [[DORA]]
>
> **概念** [[智能体]] · [[Matrix]] · [[Patbot]] · [[BevJudge]] · [[模拟]] · [[judge]] · [[提示词优化器]] · [[成本矩阵]] · [[医疗器械监管]]

一通 AI 打给白内障术后患者的随访电话里,患者问「我能不能去游泳」,AI 得回答「术后一个月内别游」。这种电话已经在英国 20 家医院打了约 20 万通,接下来两年还要扩展到一百万名患者。

做这件事的公司是总部位于英国的 [[Euphonia|Euphonia]],台上分享的是他们科学团队的研究工程师 Jared——他原来在南非学电气工程,几年前转行做 AI。他的团队负责 [[DORA|Dora]] 背后的安全与评估技术栈,一句话概括他们的工作:**在患者真正听到之前,证明这个产品是安全的**。

为什么这件事这么难?因为交付给患者,意味着常规软件发布的那几道安全网全部失效:你**不能在患者身上做 A/B 测试**——把患者随机分进更差的变体是不道德的、通常还是违法的;你**不能回滚**——Dora 一旦说了什么,话就说出去了,没有撤销;而且**模型卡救不了你**——不能像模型供应商那样声称「某个基准 92%」,在事后审查里这不构成辩护。

Dora 是一个语音 AI [[智能体|智能体]],给患者打真正的临床电话——术后随访、术前检查,这些本该由临床医生亲自打的电话。它一旦开始问症状、给建议、答问题,法律上就成了**医疗器械**,必须受监管。

监管归结为三个问题:你的软件做什么?可能出什么错?你怎么保证不出错?

## 从「什么会伤害患者」出发,而不是从功能出发

他们的起点是伤害本身。Dora 可能漏掉危险信号症状,比如突然失明或剧烈疼痛;可能被患者问到一个医学问题后当场编造答案;也可能患者明显很痛苦,它却毫无察觉地继续往下说。这类有记录的危害有二三十、甚至四十种,他们必须确保每一种都不会在现实中发生。

常规软件的做法是灰度发布:先给 5% 的用户上线,盯仪表盘,出问题就回滚。这套打法很好,但它成立有一个隐藏前提——**你能承受「只错一瞬间」**。

仪表盘变红,意味着已经有一位真实患者受了伤害;那 5% 可能是几百上千名患者接触到了未经证实的改动。而通话一旦发生,人已经受到伤害,回滚毫无意义。反应式闭环在这里彻底失效。

他们从其他高可靠行业找答案,最直接的是自动驾驶:不是开着车到处撞墙再「总结教训」,而是先在[[模拟|仿真]]里跑几百万英里,再让真人上车。Jared 的判断很直接:「仿真是我们唯一能选择的真正合乎伦理的选项」。你不可能把刚才那些危害第一次尝试就跑在真人身上。

## Matrix:没有真实患者的临床对话仿真

他们为临床问诊构建了仿真框架 **[[Matrix|Matrix]]**。核心是重现真实的临床对话，但里面没有真实患者：用一个 LLM 扮演患者，叫 **[[Patbot|Patbot]]**。不用真人演员是因为演员没法规模化——想快速迭代、同时模拟各种场景，雇人太慢。

> 【背景】该工作以论文形式发布于 arXiv 预印本平台。

每次测试先定义一个**场景**,精确设定这个「患者」该做什么——比如追问对方是人类还是 AI——然后 Patbot 和 Dora 对话,生成模拟对话。关键在于场景植根于真实临床工作流,不是抽象情境。

那怎么证明 Patbot 本身够逼真?机械的假患者做出来的测试毫无价值。

他们做了两层验证:先是脚本遵循检查——让它做某件事,它做没做,这能过滤掉不听指令的弱模型;然后做了一项 **PPI 研究**(患者与公众参与研究):给真实患者并排看两段对话,一段是真人医生与真人患者的,一段是 Dora 与 Patbot 在 Matrix 里的,问哪边的患者是真人。结果比工程师预想的难分辨得多——四组对话里有三组,多数人认为**模拟患者更逼真**。

更有意思的发现是:根本不存在「单一的逼真患者」,有人啰嗦、有人直截了当,他们要的就是模拟全部这些不同人格。这个测试证明的是:Patbot 已经足够逼真,可以用于仿真。

## BevJudge:达到专家水平的 LLM 裁判

有了成千上万条模拟对话,工程师当然不能一条条人肉去读——既不规模化,而且他们不是临床医生,看不出危害是否真的发生了。于是用另一个 LLM 当裁判,叫 **[[BevJudge|BevJudge]]**:输入模拟对话、一组预期行为、以及与临床医生讨论过的危害场景,输出通过/不通过,失败时还给原因,形成「触发了哪些危害、哪里出了问题」的结构化输出。

裁判本身也要验证。他们建了一个 240 例的语料库,带「有没有危害」的真值,请来自 10 个临床专科的 10 位医生来标注,再让裁判做同样的事。

结果:裁判至少与真实专家临床医生持平,甚至略好——写论文时用的顶级模型是 Gemini 2.5 Pro,F1 达到 0.96,更重要的是**敏感度接近完美**。敏感度为什么关键?

医疗上你宁愿误报不存在的危害,也绝不漏报真实存在的危害。一个达到专家水平的自动化裁判,正是让整套流程可规模化的关键。

## 提示词自动优化:把「几天」压到「一小时」

打分不等于改进产品。八个月前他们还是手动做提示词工程,但提示词脆弱性(轻微改动就能大幅影响模型表现的现象)太荒谬了:仅仅改变格式就曾让基准成绩波动 76 个百分点,重排少样本(few-shot)示例的顺序能把模型从接近随机(约 50%)翻到接近最先进水平——手动调优在这种环境下既主观、不可复现,又极其耗时。

他们转向[[提示词优化器|提示词优化器]],用得最多的是 **GEPA**(Genetic Pareto,出自做 DSPy 的同一批人)。流程:先定义「什么是好」的指标,把数据喂进去,它告诉你哪些样例失败;然后让一个强 LLM 反思失败、自动更新提示词;反复循环,保留「帕累托前沿」(一批互有优劣的最优提示词),直到预算耗尽。手动提示词工程要几小时到几天,这个流程 30 分钟到一小时出优化后的提示词,而且**可复现**,有清晰的审计轨迹和反馈回路;出了问题就纯粹变成一个数据科学问题——数据路由、特征工程、和临床医生一起定义指标。

指标也不是一个扁平的准确率,而是**[[成本矩阵|成本矩阵]]**。以危险信号为例:信号存在且你抓到了,是好的;漏掉了,可能是灾难性的;信号不存在却误报,只是让患者多答几个问题,轻微恼人而已。

所以可以给发现红旗更高奖励、漏掉红旗更低奖励,直接为敏感度优化;想换临床医生关心的其他指标?重新编译一遍提示词就行。

## 分阶段赢得真实世界的入场券

Jared 明确承认仿真的边界:模拟患者再逼真也不是真患者,在模拟里通过所有测试,并不能证明 Dora 真的帮助了现实中的某个人。「模拟是内循环——快、免费、可以在任何真人暴露前跑成千上万次;但真实患者是外循环,那才是唯一真正的证明所在。

模拟是必要的,但不充分」。它只是**赢得谨慎尝试的资格**。

跨越是分阶段的,每一阶段为下一阶段赢得资格:模拟通过后做用户测试,然后基于真实患者做有监督的临床评估(每一步都必须有临床医生参与),之后才做仍被监控的部署——而给系统多大自主权,取决于你握有多少证据;证据越多,独立性越多。底层还有一条硬规矩:每一次通话、每个数据集、每个固定版本的提示词、每条评判结论,都能追溯到它所应对的那个具体危害。「你交付的不是模型,而是证据」——这才是面对监管时真正的交付物。

于是替代「上线-观察-回滚」的完整飞轮是:拿真实通话数据,加上现实中未必出现的合成边缘案例(罕见症状、错误转写等),用 GEPA 拿到优化提示词,过 Matrix 这个仿真安全闸门,不过就重做数据或重新标注,满意后做带门禁的部署。每次部署和每通新电话都产生更多数据,系统因此持续改进。

## 换模态,不换框架

这套框架的延展性在语音上已经验证过。进入语音会出现新失败模式:比如反馈性回应(对话中「嗯」「好的」这类附和)和打断——智能体正说到安全建议的一半,比如「你必须避免强光」,患者插进来一个跑题的问题,较弱的模型通常就忘了安全建议,直接答下一个问题,甚至就此停住等患者继续。

这些 Matrix 都能捕捉。核心原则是:「失败模式会变,框架不会」——照旧黑盒系统、写下新危害、模拟并评判,语音只是同一个安全案例里的新模块,转向任何模态都不用从头再来。

## 本集带走

- **安全网失效时要换打法,不是换强度**:当用户是患者,A/B 测试不道德、回滚不可能、仪表盘变红等于有人已受伤害——反应式发布的前提(能承受错一瞬间)整个崩塌,必须前置到仿真。
- **从危害清单开始,并主动制造罕见危险案例**:列出产品可能伤害用户的所有方式(他们有几十种),别等罕见但危险的情况自然发生,合成出来测。
- **每一个自动化环节都要独立验证**:假患者用「真人辨真假」测试验证逼真度,[[judge|LLM 裁判]]对照 10 位专科医生的标注验证(此集达到专家水平、敏感度近满分)——裁判和被测系统一样需要被审。
- **评估指标就是你的成本函数**:不是扁平准确率,而是给「漏报危险」和「误报危险」赋不同代价的成本矩阵,想优化什么就重新编译提示词。
- **模拟赢得资格,真实才是证明**:模拟是内循环,真实用户是外循环;分阶段跨越(仿真→用户测试→有监督临床评估→受监控部署),自主权随证据增长。
- **交付给监管的不是模型,是证据**:每次通话、每个提示词版本、每条评判结论都追溯到具体危害。
- **失败模式会变,框架不会**:换模态(如文本转语音)只需补新的危害清单,仿真-评判-优化的循环照用,不用从头再来。

<div class="pd-sec pd-sec-q">全部金句 <span>15 条</span></div>

> <span class="qz">交付给患者,会把你通常发布时依赖的那些常规安全网全部拿走。</span>  
> *So shipping to patients takes away the normal safety nets you would normally ship with.*  
> <span class="qm">—— Jared Joselowitz · [00:58]</span> ^q1

> <span class="qz">而且非常重要的一点是,模型卡救不了你。</span>  
> *And very importantly, the model card won't save you.*  
> <span class="qm">—— Jared Joselowitz · [01:17]</span> ^q2

> <span class="qz">你不能像一些模型供应商那样声称某个基准达到了 92%,在事后审查中这不是一种辩护。</span>  
> *You can't claim like some model vendors said that they have 92% on some benchmark. It's not a defense at a post-instant review.*  
> <span class="qm">—— Jared Joselowitz · [01:21]</span> ^q3

> <span class="qz">你不能撤销一通电话。Dora 一旦说了,话就说出去了,没有回滚。</span>  
> *You can't undo a call. Once Dora says it, it's been said, and there is no rollback.*  
> <span class="qm">—— Jared Joselowitz · [01:12]</span> ^q4

> <span class="qz">但这里有一个隐藏假设:这套打法之所以有效,是因为你能承受「只错一瞬间」。</span>  
> *But there's a hidden assumption here that it only works because you can afford to be wrong for an instant.*  
> <span class="qm">—— Jared Joselowitz · [04:47]</span> ^q5

> <span class="qz">靠盯仪表盘,仪表盘变红就意味着已经有一位真实患者受到了伤害。</span>  
> *By watching the dashboards, the dashboards are just going to, going red means that a patient was actually hurt.*  
> <span class="qm">—— Jared Joselowitz · [05:15]</span> ^q6

> <span class="qz">仿真是我们唯一能选择的、真正合乎伦理的选项。</span>  
> *Simulation is only the real ethical option we can go with.*  
> <span class="qm">—— Jared Joselowitz · [06:01]</span> ^q7

> <span class="qz">四组对话里有三组,多数人实际上认为模拟患者更逼真。</span>  
> *In three out of the four, the majority of people actually thought that the simulated patient was more realistic.*  
> <span class="qm">—— Jared Joselowitz · [08:51]</span> ^q8

> <span class="qz">结果显示,我们的裁判至少与真正的专家临床医生不相上下,甚至可能略好一些。</span>  
> *The results showed that our judge is at least on par, if not slightly better, than the real expert clinicians.*  
> <span class="qm">—— Jared Joselowitz · [10:22]</span> ^q9

> <span class="qz">你宁愿把不存在的危害误报出来,也不愿意漏报真正存在的危害。</span>  
> *You would rather over-call hazards that aren't there than under-call hazards that are there.*  
> <span class="qm">—— Jared Joselowitz · [10:52]</span> ^q10

> <span class="qz">仅仅是格式上的变化,就曾被观察到能让基准成绩波动 76 个百分点;而重排少样本示例的顺序,能把模型在某些基准上从接近随机(约 50%)翻转到接近最先进水平。</span>  
> *Formatting changes alone have been seen to swing benchmark by 76 percentage points, and reordering few-shot examples flips a model from near-random, so near 50%, to near-state-of-the-art on some benchmarks.*  
> <span class="qm">—— Jared Joselowitz · [11:37]</span> ^q11

> <span class="qz">模拟是内循环——快、免费、可以在任何真人暴露前跑成千上万次;但真实患者是外循环,那才是唯一真正的证明所在。</span>  
> *Simulation is the inner loop. It's fast. It's free. You can do thousands of runs before anyone actually real is exposed. But real patients are the outer loop, and that's where the only real proof is.*  
> <span class="qm">—— Jared Joselowitz · [15:40]</span> ^q12

> <span class="qz">所以模拟是必要的,但并不充分。</span>  
> *So simulation is necessary, but it's not sufficient.*  
> <span class="qm">—— Jared Joselowitz · [15:51]</span> ^q13

> <span class="qz">重要的是,在试图通过监管时,你交付的不是模型,而是证据。</span>  
> *The important thing is that you don't ship the model, you ship the evidence when trying to regulate.*  
> <span class="qm">—— Jared Joselowitz · [16:48]</span> ^q14

> <span class="qz">失败模式会变,框架不会。</span>  
> *The failure modes change. The framework doesn't.*  
> <span class="qm">—— Jared Joselowitz · [18:15]</span> ^q15

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 安全」挖下去**

- [[2025-06-03-talks-pioneering-agentic-applications-with-dec|三位 AI 智能体公司 CEO 圆桌：从 Copilot 到智能体，还要几年？]]<span class="pd-rz">同概念:智能体 (agent)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同概念:智能体 (agent)</span>
- [[2026-06-11-practicalai-zero-trust-for-ai-agents|Anthropic 零信任框架：智能体安全的六层防御]]<span class="pd-rz">同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-01-twentyvc-20vc-the-best-ai-companies-have-unique-d|让 AI 像人一样犯错：Simile 创始人的模拟人类生意]]<span class="pd-rz">同概念:仿真 (simulation)、智能体 (agent)</span>
- [[2024-06-21-talks-product-led-ai-mustafa-suleyman-on-defin|Mustafa Suleiman:数据是新的护城河——AI 创业者的机会地图]]<span class="pd-rz">同概念:智能体 (agent)</span>
- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同概念:智能体 (agent)</span>

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
