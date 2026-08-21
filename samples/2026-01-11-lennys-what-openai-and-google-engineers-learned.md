---
title: AI 产品不能照搬软件老办法：从高控制低自主开始
podcast: "Lenny's Podcast"
date: 2026-08-20
source_url: https://www.lennysnewsletter.com/p/what-openai-and-google-engineers-learned
duration: "86:18"
type: episode
cover: "#6366f1"
image: "/covers/2026-01-11-lennys-what-openai-and-google-engineers-learned.jpg"
description: 构建 AI 产品有两个本质差异：非确定性输入输出，以及自主性与控制的权衡，必须逐步放权。
host: "[[Lenny]]"
cohosts: ["[[Kiriti Badam]]", "[[Aishwarya Reganti]]"]
concepts: ["[[智能体]]", "[[非确定性]]", "[[主观能动性]]", "[[评估]]", "[[生产监控]]", "[[持续校准持续开发]]", "[[飞轮]]", "[[行为校准]]"]
category: 智能体
tags:
  - 智能体
  - 产品方法
socialImage: "https://talk.solomind.cc/covers/2026-01-11-lennys-what-openai-and-google-engineers-learned.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-01-11-lennys-what-openai-and-google-engineers-learned#post","headline":"AI 产品不能照搬软件老办法：从高控制低自主开始","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-01-11-lennys-what-openai-and-google-engineers-learned","mainEntityOfPage":"https://talk.solomind.cc/2026-01-11-lennys-what-openai-and-google-engineers-learned","description":"构建 AI 产品有两个本质差异：非确定性输入输出，以及自主性与控制的权衡，必须逐步放权。","datePublished":"2026-08-20","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-01-11-lennys-what-openai-and-google-engineers-learned.jpg","isBasedOn":"https://www.lennysnewsletter.com/p/what-openai-and-google-engineers-learned","about":[{"@type":"Person","name":"Lenny"},{"@type":"Person","name":"Kiriti Badam"},{"@type":"Person","name":"Aishwarya Reganti"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"非确定性 (non-determinism)"},{"@type":"Thing","name":"主观能动性 (agency)"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"生产监控 (production monitoring)"},{"@type":"Thing","name":"持续校准持续开发 (continuous calibration, continuous development)"},{"@type":"Thing","name":"飞轮 (flywheel)"},{"@type":"Thing","name":"行为校准 (behavior calibration)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AI 产品不能照搬软件老办法：从高控制低自主开始","item":"https://talk.solomind.cc/2026-01-11-lennys-what-openai-and-google-engineers-learned"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 产品不能照搬软件老办法：从高控制低自主开始</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 产品不能照搬软件老办法：从高控制低自主开始

<div class="pd-byl"><b>Aishwarya Reganti</b> · 2026-08-20</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-01-11-lennys-what-openai-and-google-engineers-learned.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但每次你将决策能力或自主权移交给智能体系统时，你都在某种程度上放弃了一些你的控制权。</div><div class="a">— Kiriti Badam <button class="pd-ts" data-t="10:12" data-who="Kiriti Badam" data-en="But every time you hand over decision-making capabilities or autonomy to agentic systems, you're kind of relinquishing some amount of control on your end." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Lenny]] · [[Kiriti Badam]] · [[Aishwarya Reganti]]
>
> **概念** [[智能体]] · [[非确定性]] · [[主观能动性]] · [[评估]] · [[生产监控]] · [[持续校准持续开发]] · [[飞轮]] · [[行为校准]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/what-openai-and-google-engineers-learned)

构建 AI 产品和传统软件最根本的两个差异，大多数团队在动手之前根本没想清楚。

第一个差异是[[非确定性|非确定性]]。传统软件比如预订酒店，用户走的是你设计好的按钮和表单，路径可预测。

但 AI 产品的输入端是自然语言，同一个意图用户有无数种说法；输出端你调用的 LLM 本身就是个概率性的黑盒，对提示词措辞极其敏感。输入不可控、输出不可控、中间过程也不完全可理解——你要拿一个三面都不确定的东西，去交付一个确定的结果，这就是 AI 产品" messy"的根源，而[[智能体|智能体]]系统让这个问题更严重 <button class="pd-ts" data-t="08:18" data-who="Aishwarya Reganti" data-en="There are tons of similarities of building AI systems and software systems as well, but then there are some things that kind of fundamentally change the way you build software systems versus AI systems." aria-label="回原文"></button>。

第二个差异是[[主观能动性|主观能动性]]（agency）与控制的权衡。每多给 AI 一点自主决策权，你就多放弃一点控制权。问题在于，很多人直接跳到"全自主智能体"，结果要么系统做出危险决策，要么根本不可控 <button class="pd-ts" data-t="10:01" data-who="Aishwarya Reganti" data-en="And that's where we talk about the second difference, which is the agency control trade-off. What we mean by that, and I'm kind of shocked so many people don't talk about this." aria-label="回原文"></button>。

## 从高控制、低自主开始，逐步放权

正确做法是像训练爬山一样：不从山顶开始，从最小影响、人类全程把关的地方起步，建立信心后再逐步增加 AI 的自主权 <button class="pd-ts" data-t="11:39" data-who="Aishwarya Reganti" data-en="Is there anything else you want to add there before we get into that? Yeah, it's definitely one of the key points that this kind of distinction needs to exist in your mind when you're starting to build." aria-label="回原文"></button>。

以客户支持为例，分三步走：

**V1——路由分类**：智能体只负责把工单分到正确部门。即便分错了，人类可以立刻纠正，风险极低。这步的真正价值是暴露你企业的数据有多乱——分类法层级错乱、死节点没人维护，这些"隐藏债务"不亲自建一版你根本看不见 <button class="pd-ts" data-t="51:26" data-who="Aishwarya Reganti" data-en="And one example that we give is that of the customer support agent, where you can break it down into three versions. The first version is just routing, which is your agent able to classify and route a particular ticket to the right department?" aria-label="回原文"></button>。

**V2——副驾驶建议**：路由跑稳之后，让智能体根据标准操作流程生成回复草稿，人类改完再发。这步的关键收益是你免费拿到了人类行为日志——草稿被改了什么、删了什么——直接喂进改进[[飞轮|飞轮]] <button class="pd-ts" data-t="53:41" data-who="Aishwarya Reganti" data-en="And along the way, you also figure out that you probably are dealing with a ton of data issues that you need to fix and make sure that your data layer is good enough for the agent to function." aria-label="回原文"></button>。

**V3——端到端处理**：当草稿被采纳率很高、新错误模式趋于零时，才让智能体直接回复客户，甚至执行退款、提工单等操作 <button class="pd-ts" data-t="54:31" data-who="Aishwarya Reganti" data-en="And then we say, post that, once you've figured out that those drafts look good and most of the times maybe humans are not making too many changes, they're using these drafts as is." aria-label="回原文"></button>。

同样的逻辑适用于其他场景：编码助手 V1 只做行内补全，V2 生成测试让人类审，V3 才自主提 PR；营销助手 V1 起草文案，V2 跑多步Campaign，V3 才跨渠道 A/B 测试自动优化 <button class="pd-ts" data-t="18:04" data-who="Unknown" data-en="So a few more examples that you shared in your post that I'll just read. So say you're building a coding assistant, V1 would be just suggest inline completion and boilerplate snippets." aria-label="回原文"></button>。

判断能不能进入下一阶段的标志不是时间表，而是"意外率"——如果你连续校准一两天，没看到新的错误模式、用户行为稳定了，才适合往上走。但要注意，换了底层模型（比如从 GPT-4o 切到 5）或者用户行为本身演变了（比如开始问更深层的问题），校准就得重来 <button class="pd-ts" data-t="58:18" data-who="Aishwarya Reganti" data-en="Is there anything else before we go into different topic around this framework specifically that you think is important for people to know? I think one of the most common questions we get is, how do I know if I need to go to the next stage or if this is calibrated enough?" aria-label="回原文"></button>。

## 持续校准、持续开发（CCCD）框架

把上面的思路做成可执行的开发流程，就是 CCCD 框架，可以理解为 AI 版的 CI/CD <button class="pd-ts" data-t="46:00" data-who="Unknown" data-en="We've been talking for almost an hour already, and we haven't even covered your extremely powerful software development workflow for building AI products that you two developed that you teach in your course, that you basically combined all the stuff we've been talking about into a step-by-step approach to building AI products." aria-label="回原文"></button>。

**右侧——持续开发**：先界定能力边界，把"期望输入长什么样、期望输出长什么样"整理成数据集。这个动作本身就有价值——你会发现团队里 PM、工程师、领域专家对"产品该怎么表现"根本没对齐。然后设定评估指标（不是"做不做 [[评估|evals]]"，而是你想盯哪些维度），部署并跑指标 <button class="pd-ts" data-t="48:08" data-who="Aishwarya Reganti" data-en="And that's where we came up with this idea of continuous calibration, continuous development. The idea is pretty simple, which is we have this right side of the loop, which is continuous development, where you scope capability and curate data, essentially get a data set of what your expected inputs are and what your expected outputs should be looking at." aria-label="回原文"></button>。

**左侧——持续校准**：上线后你会发现用户行为超出你预想的数据集范围。评估指标能抓到你已知的错误，但抓不到"涌现出来的新错误模式"。这时要做的是：分析行为、发现新模式、修复具体的 bug，同时为系统性问题设计新的评估指标，反馈回开发侧 <button class="pd-ts" data-t="49:10" data-who="Aishwarya Reganti" data-en="And then you go about deploying, run your evaluation metrics. And the second part is the continuous calibration, which is the part where you understand what behavior you hadn't expected in the beginning, right?" aria-label="回原文"></button>。

关键认知：评估指标只能抓已知的错，生产环境监控才能暴露未知的错。两者都做，但不要迷信任何一个能"解决一切"——社区里"evals 万能"和"全是 vibe coding"都是错误的二分法 <button class="pd-ts" data-t="33:47" data-who="Kiriti Badam" data-en="How far does that take people in solving a lot of the problems that you talk about? In terms of what is going on in the community, I feel there's just this false dichotomy of this either evals is going to solve everything or online monitoring or production monitoring is going to solve everything." aria-label="回原文"></button>。

而且"evals"这个词已经被语义扩散了：数据标注公司说的 evals 是专家写错误分析笔记，PM 说的 evals 是定义产品行为，有人说的 evals 其实是跑 LM Arena 看模型排行——这些是流程里完全不同的环节 <button class="pd-ts" data-t="38:45" data-who="Unknown" data-en="Now, step back as a beginner and kind of think what are evals? Why is everyone saying evals? And these are actually different parts of the process and nobody is wrong in the sense that yes, these are evals, but when a data labeling company is telling you that our experts are writing evals, they're actually referring to error analysis or experts just leading notes on what should be right." aria-label="回原文"></button>。

## 成功公司的三个维度

技术框架之外，能跑出来的公司有三个共性 <button class="pd-ts" data-t="25:43" data-who="Unknown" data-en="So we could just maybe start with, what are other ways that companies do this well, build AI products successfully? I almost think of it as like a success triangle with three dimensions that's never always technical." aria-label="回原文"></button>：

**领导者必须亲自动手重建直觉**。Rackspace 的 CEO 每天凌晨 4 点到 6 点专门追 AI 最新动态，周末做 vibe coding，然后把问题带回来跟专家讨论。

这不是让他写代码，而是他过去 15 年积累的产品直觉在 AI 时代需要推倒重来——他必须承认自己可能是"房间里最笨的人" <button class="pd-ts" data-t="26:28" data-who="Unknown" data-en="But now with AI in the picture, those intuitions will have to be relearned and leaders have to be vulnerable to do that. I used to work with the CEO of now Rackspace, Gagan." aria-label="回原文"></button>。CEO 不深入，下面工程师再使劲也推不动 <button class="pd-ts" data-t="32:10" data-who="Unknown" data-en="There's a lot there that resonates so deeply with other conversations I've been having on this podcast. One is just for a company to be successful at seeing a lot of impact from AI, the founder-CEO has to be deep into it." aria-label="回原文"></button>。

**文化上要赋能，不要制造 FOMO**。领域专家是 AI 产品成功的关键——你得靠他们判断 AI 行为对不对。

但如果公司氛围是"不学 AI 就被淘汰"，专家会拒绝配合，因为觉得你在取代他们。正确的叙事是"AI 让你 10 倍效率" <button class="pd-ts" data-t="28:04" data-who="Unknown" data-en="And again, I work with enterprises where AI is not their main thing and they need to bring in AI into their processes just because a competitor is doing it. And just because it does make sense because there are use cases that are very ripe." aria-label="回原文"></button>。

**技术上要痴迷工作流，不是痴迷 AI 本身**。没有一个真实工作流是"丢一个智能体进去就搞定"的。

永远是：ML 模型做一部分、确定性代码做一部分、人类做一部分。你得把工作流拆清楚，为每个子问题选对工具 <button class="pd-ts" data-t="29:35" data-who="Unknown" data-en="I think folks that are successful are incredibly obsessed about understanding their workflows very well and augmenting parts that could be ripe for AI versus the ones that might need human in the loop somewhere, et cetera." aria-label="回原文"></button>。

一个判断标准：如果有人卖你"一键智能体，两三天见效"，这纯粹是营销。企业数据和基础设施太乱了，即使数据层和基础设施层都很好，替换一个关键工作流也至少要四到六个月 <button class="pd-ts" data-t="30:42" data-who="Unknown" data-en="It's about, have you built the right flywheels in place so that you can improve over time? When someone comes up to me and says, &quot;We have this one click agent, it's going to be deployed in your system.&quot;" aria-label="回原文"></button>。

## 本集带走

- **从高控制、低自主起步**：先让 AI 做风险最低的事（比如分类路由），人类全程把关，确认行为可控后再逐步放权，不要第一天就上全自主智能体
- **每一步都在喂飞轮**：V2 副驾驶阶段让 AI 起草、人类修改，修改记录本身就是免费的训练信号——不要跳过这一步直接到 V3
- **评估只抓已知错，[[生产监控|生产监控]]抓未知错**：两者都要做，不要迷信任何一个能单独解决问题
- **先对齐"产品该表现成什么样"**：动手前花时间把期望输入输出整理成数据集，你会发现团队内部根本没对齐
- **换模型要重新校准**：底层模型变了或用户行为演变了，之前积累的校准可能全部失效
- **CEO 必须亲自用**：不是写代码，是重建被 AI 颠覆的直觉——领导者不深入，AI 转型不可能自下而上成功
- **四到六个月是底线**：任何人承诺"一键智能体几天见效"都是营销，企业数据混乱度决定了这个周期

<div class="pd-sec">全部金句 <span>9 条</span></div>

> <span class="qz">但每次你将决策能力或自主权移交给智能体系统时，你都在某种程度上放弃了一些你的控制权。</span>  
> *But every time you hand over decision-making capabilities or autonomy to agentic systems, you're kind of relinquishing some amount of control on your end.*  
> <span class="qm">—— Kiriti Badam · [10:12]</span> ^q1

> <span class="qz">在我们看到的所有这些 AI 进展中，一个容易的、滑坡式的错误就是只考虑解决方案的复杂性，而忘记你试图解决的问题。</span>  
> *In all this advancements of the AI that we are seeing, one easy, slippery slope is to just keep thinking about complexities of the solution and forget the problem that you're trying to solve.*  
> <span class="qm">—— Aishwarya Reganti · [21:00]</span> ^q2

> <span class="qz">但现在有了 AI，这些直觉必须重新学习，领导者必须变得脆弱去做这件事。</span>  
> *But now with AI in the picture, those intuitions will have to be relearned and leaders have to be vulnerable to do that.*  
> <span class="qm">—— Kiriti Badam · [26:20]</span> ^q3

> <span class="qz">截至今天，这并不是关于成为竞争对手中第一个拥有智能体的公司。而是关于，你是否建立了合适的飞轮，以便你可以随着时间的推移而改进？</span>  
> *As of today, it's not about being the first company to have an agent among your competitors. It's about, have you built the right flywheels in place so that you can improve over time?*  
> <span class="qm">—— Kiriti Badam · [30:33]</span> ^q4

> <span class="qz">我可能会甚至会说，如果有人向你兜售一键式智能体，那纯粹是营销。</span>  
> *I probably will go as far to say that if someone's selling you one click-agents, it's pure marketing.*  
> <span class="qm">—— Kiriti Badam · [31:35]</span> ^q5

> <span class="qz">所以我觉得评估很重要，生产监控很重要，但是只有其中一个能为你解决问题的这种观点，在我看来是完全不屑一顾的。</span>  
> *So I feel evals are important, production monitoring is important, but this notion of only one of them is going to solve things for you that is completely dismissible in my opinion.*  
> <span class="qm">—— Aishwarya Reganti · [37:48]</span> ^q6

> <span class="qz">我认为 Martin Fowler 在某个时候在 2000 年代有这个术语叫语义扩散，这基本上意味着一个人提出了一个术语，每个人都开始用他们自己的定义来糟蹋它，然后你就会失去它的实际定义。</span>  
> *I think Martin Fowler at some point had this term called semantic diffusion back in the 2000s, which kind of means that someone comes up with a term, everybody starts butchering it with their own definitions and then you kind of lose the actual definition of it.*  
> <span class="qm">—— Kiriti Badam · [39:30]</span> ^q7

> <span class="qz">如今构建真的非常便宜。设计更昂贵，真的在思考你的产品，你要构建什么。它真的会解决一个痛点吗？什么是如今更有价值的？</span>  
> *Building is really cheap today. Design is more expensive, really thinking about your product, what you're going to build. Is it going to really solve a pain point? Is what is way more valuable today?*  
> <span class="qm">—— Kiriti Badam · [64:53]</span> ^q8

> <span class="qz">而你在整个组织中或你自己的生活经验中建立的那种知识，我觉得那种痛苦就是转化为公司护城河的东西。</span>  
> *And that kind of knowledge that you built across the organization or across your own lived experiences, I feel that pain is what translates into the moat of the company.*  
> <span class="qm">—— Aishwarya Reganti · [73:40]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2025-09-07-lennys-how-ai-is-reshaping-the-product-role|PM的生存法则：AI时代别当瓶颈，去抢活干]]<span class="pd-rz">同概念:evals、主观能动性 (agency)、智能体 (agent)</span>
- [[2025-09-21-lennys-from-managing-people-to-managing-ai-juli|Julie Zhuo：管理者的核心技能，就是驾驭AI的技能]]<span class="pd-rz">同概念:evals、智能体 (agent)</span>
- [[2025-09-25-lennys-why-ai-evals-are-the-hottest-new-skill|做 evals 不是写单元测试，是从看数据开始的错误分析]]<span class="pd-rz">同概念:evals、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当写代码变便宜,OpenAI Codex负责人说「品味」成了最贵的资源]]<span class="pd-rz">同公司:ChatGPT、OpenAI · 同概念:主观能动性 (agency)、智能体 (agent)</span>
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同概念:evals、智能体 (agent)</span>
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|别管金句，去捣鼓东西：Notion 产品负责人谈 AI 时代的产品与品味]]<span class="pd-rz">同概念:主观能动性 (agency)、智能体 (agent)</span>

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
