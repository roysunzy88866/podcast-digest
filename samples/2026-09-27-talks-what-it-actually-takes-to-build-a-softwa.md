---
title: 软件工厂：让智能体闭环造软件，而不只是写代码
podcast: 精选演讲
date: 2026-10-01
source_url: undefined
duration: "22:27"
type: episode
cover: "#64748b"
description: factory.com 的 Teresa 讲解企业级「软件工厂」：智能体编队如何自主完成从信号收集到测试迭代的整个软件生命周期，以及模型路由、验证与上下文管理的落地做法。
guests: ["[[Tereza Tížková]]"]
companies: ["[[Factory]]"]
concepts: ["[[软件工厂]]", "[[智能体]]", "[[编码智能体]]", "[[模型路由]]", "[[缓存]]", "[[任务]]", "[[验证]]", "[[验证者]]", "[[上下文膨胀]]", "[[计算机使用]]", "[[开源模型]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-27-talks-what-it-actually-takes-to-build-a-softwa#post","headline":"软件工厂：让智能体闭环造软件，而不只是写代码","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-27-talks-what-it-actually-takes-to-build-a-softwa","mainEntityOfPage":"https://talk.solomind.cc/2026-09-27-talks-what-it-actually-takes-to-build-a-softwa","description":"factory.com 的 Teresa 讲解企业级「软件工厂」：智能体编队如何自主完成从信号收集到测试迭代的整个软件生命周期，以及模型路由、验证与上下文管理的落地做法。","datePublished":"2026-10-01","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Tereza Tížková"},{"@type":"Organization","name":"Factory"},{"@type":"Thing","name":"软件工厂 (software factory)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"编码智能体 (coding agent)"},{"@type":"Thing","name":"模型路由 (routing)"},{"@type":"Thing","name":"缓存 (caching)"},{"@type":"Thing","name":"任务 (missions)"},{"@type":"Thing","name":"验证 (validation)"},{"@type":"Thing","name":"验证者 (validators)"},{"@type":"Thing","name":"上下文膨胀 (context bloat)"},{"@type":"Thing","name":"计算机使用 (computer use)"},{"@type":"Thing","name":"开源模型 (open source models)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"软件工厂：让智能体闭环造软件，而不只是写代码","item":"https://talk.solomind.cc/2026-09-27-talks-what-it-actually-takes-to-build-a-softwa"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>软件工厂：让智能体闭环造软件，而不只是写代码</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 软件工厂：让智能体闭环造软件，而不只是写代码

<div class="pd-byl"><b>Tereza Tížková</b> · 2026-10-01</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-27-talks-what-it-actually-takes-to-build-a-softwa.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">软件工厂不只是一个编码智能体，甚至不是一群编码智能体，哪怕上千个也不算——因为生成代码、写代码，相比其他所有环节，是容易的部分。</div><div class="a">— Tereza Tížková <button class="pd-ts" data-t="02:59" data-who="Tereza Tížková" data-en="Software Factory is not just coding agent, and it's not even a swarm of coding agents, even thousands of agents, because generating code, writing code, that's the easy part compared to all the others." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Tereza Tížková]]
>
> **公司** [[Factory]]
>
> **概念** [[软件工厂]] · [[智能体]] · [[编码智能体]] · [[模型路由]] · [[缓存]] · [[任务]] · [[验证]] · [[验证者]] · [[上下文膨胀]] · [[计算机使用]] · [[开源模型]]

「[[软件工厂|软件工厂]]」这个词人人都在讲，但真正在造的人很少。说这话的人是 Teresa,来自 [[Factory|factory]].com——一家长期研究这个概念、如今已给 EY、Adobe 这类企业把软件工厂跑在生产环境里的公司。她给软件工厂下的定义是：以自主方式开发软件的**整个闭环**——不只是生成代码，还包括收集信号、对用户反馈和日志做出反应、排优先级、编排执行、[[验证|验证]]测试，然后持续迭代并积累新知识 <button class="pd-ts" data-t="01:27" data-who="Teresa" data-en="But finally, the technology is catching up, and it's possible to build this in production for enterprises like EY or Adobe. I would define the software factory as the whole loop, the whole life cycle of developing software with autonomy, which doesn't mean just coding and generating code, by that I mean collecting all the signals, reacting to user feedback, to logs, prioritizing what's important, then orchestrating it all, executing, validating, doing really good testing in production, and then iterating on all this, while also continuously improving in the process and gaining" aria-label="回原文"></button>。

为什么现在才可能？她给出的历史背景是：从 ChatGPT 发布之初就有这个想法，2023 年就有 auto-GPT、BabyAGI 这些迭代概念，但当时行不通——LLM 幻觉严重、上下文长度和推理质量不够，也缺少让[[智能体|智能体]]在隔离环境中真正干活的基础设施 <button class="pd-ts" data-t="02:30" data-who="Teresa" data-en="This is just some history, and by history I mean 2023 in AI, so the software factory wasn't really possible before, even though we always had this idea from the beginning of ChatGPT launch and others, we had this idea of the continuous loop, there was auto-GPT, baby AGI, already with the concepts of iterating on the software, but it didn't work before." aria-label="回原文"></button>。

## 它不是一个编码智能体，甚至不是一千个

Teresa 特意强调软件工厂「不是什么」：它不只是一个[[编码智能体|编码智能体]]，甚至不是一群、哪怕上千个编码智能体——因为相比其他环节，**写代码是容易的部分**。工程师本来就不把大部分时间花在写代码上，挑战全在剩下的部分 <button class="pd-ts" data-t="02:55" data-who="Teresa" data-en="So all this kind of led to why the software factory is the paradigm that's starting to be popular now and actually useful. I like to define things by what they are not, so I want to say Software Factory is not just coding agent, and it's not even a swarm of coding agents, even thousands of agents, because generating code, writing code, that's the easy part compared to all the others." aria-label="回原文"></button>。它也不是买一套咨询方案：她认为你得真正从零开始重建组织，而不是请一家咨询公司往组织中间扔个东西 <button class="pd-ts" data-t="03:29" data-who="Teresa" data-en="And it's also not just some consultancy or just some abstract strategy that someone will try to sell you and to your organization. I think the approaches are, of course, different, but we believe you should really rebuild your organization from ground up to be ready to become a software factory." aria-label="回原文"></button>。

构建软件工厂有三条原则。**第一是中立(agnostic)**:不绑定特定 LLM,跨 Slack、GitHub 等已有环境工作，兼容组织现有的工作方式和订阅，因为新模型、新基准层出不穷，预测谁是赢家太难，不如对所有选项保持开放 <button class="pd-ts" data-t="04:07" data-who="Teresa" data-en="As I said, they will be testing, validating, iterating, and it all can end up as a big chaos. So you need to be mindful, and I would say the three important things is being agnostic in the software factory, so being independent of LLM choices, of how you already work as the organization." aria-label="回原文"></button>。

**第二是自主**：给智能体正确的信任、权限和治理，让它长时间运行——有预测说智能体将来能跑一年以上无须人在环，听着宏大，但他们的长时间会话已经能构建东西并连续运行数周了 <button class="pd-ts" data-t="04:20" data-who="Teresa" data-en="So you need to be mindful, and I would say the three important things is being agnostic in the software factory, so being independent of LLM choices, of how you already work as the organization." aria-label="回原文"></button>。**第三是持续改进**：像对待新入职员工一样，给智能体好的代码库理解、结构、文档，让它们在这个过程中积累知识并在「团队」内分享 <button class="pd-ts" data-t="04:45" data-who="Teresa" data-en="So it's not that crazy. And third thing, always improving. So same as human organization, you need to onboard any new people in your team by giving them good code base, understanding, good structure, documentation, and also let them improve in the process and gain new knowledge and share it within the team." aria-label="回原文"></button>。

## 模型路由：省钱之外还有可靠性

中立原则下的第一个实操是[[模型路由|模型路由]]。她引用 Coinbase CEO 发推的图表：他们 token 用量持续增长，但在 AI 上的开销却降下来了——靠的是不再强推所有人默认用前沿模型、用[[缓存|缓存]]避免每次重复预填充(即每次都重新处理一遍已有上下文)、支出不设上限但花钱多就要看到结果，以及在 LLM 之间做智能路由 <button class="pd-ts" data-t="05:48" data-who="Teresa" data-en="Then there's the topic of being agnostic to models. This is a topic of a lot of discussions recently, and this chart is from CEO of Coinbase, who tweeted about how they started saving money in their organization on AI, but without reducing the token spend." aria-label="回原文"></button>。

factory 做的「自动模型路由」分四步：分配[[任务|任务]](组织可以给市场、销售、工程师配不同的默认模型和权限)；**分类**——这是路由的魔法，要看提示词结构、代码库、任务难度、用了哪些工具，给任务难度打分类；然后设一个「够用」的阈值，选**阈值之上最便宜的模型**开工 <button class="pd-ts" data-t="08:06" data-who="Teresa" data-en="First, you just assign the task, and you don't really need to do anything, but as an organization, you can, for example, give different permissions and different default models to different people, which is very useful, like marketing or sales or engineers can have different default models." aria-label="回原文"></button>。发布后的问题很多：路由错了怎么办？

会不会更慢？她的回答是：关键是分类要做好、别太频繁切换；就算任务中途切到更强的模型，总体上你多半还是更快，依然划算 <button class="pd-ts" data-t="09:03" data-who="Teresa" data-en="So I think these are all valid questions, and that's why it's so difficult to build a good router. You need to basically classify it very well, and the challenge is not to need to switch too often, but even if you're switching in the middle of the task to a more difficult model, you still overall are faster probably, because it's still worth" aria-label="回原文"></button>。

而且路由不只是省钱——[[开源模型|开源模型]]通常更快，一个模型提供商挂了可以自动切到另一个 <button class="pd-ts" data-t="07:13" data-who="Teresa" data-en="The important thing is it decides first what model is most optimal, and then it can switch to a different model if it's failing the task or in case of any troubles, but it usually doesn't happen." aria-label="回原文"></button>。她称自己的基准很保守：能省 25%,甚至可能更多 <button class="pd-ts" data-t="07:36" data-who="Teresa" data-en="This is our benchmark, which is very conservative. I prefer conservative benchmarks, but I think the direction is clear. You can say, for example, 25%, but even more probably." aria-label="回原文"></button>。

关于缓存她还有个鲜明观点：开放模型同样能在专用算力上托管并享受缓存红利，所以「把缓存折扣传导给用户」不是技术挑战，只是定价决策 <button class="pd-ts" data-t="09:41" data-who="Teresa" data-en="Open models can do this as well. I think people sometimes forget this, and you can just host open models as well on dedicated compute, and you can take the same advantage of the caching." aria-label="回原文"></button>。

## 自主性的核心：怎么定义「完成」

循环(loop)这个概念早就存在，现在只是升级到了智能体语境。真正的问题不是循环本身，而是**你如何定义循环里的「完成」** <button class="pd-ts" data-t="10:34" data-who="Teresa" data-en="You probably heard about the RLHF loop and specifying the tasks and splitting to subtasks for agents. This is a known concept, and the question is not the loop itself, but the question is how you define what it means to be done in the loop." aria-label="回原文"></button>。

她举了个同事的例子：做一个智能体循环来 3D 打印公司 logo——以前编程里循环有明确的退出标准，现在的标准变得开放，任务高度非确定性，验证任务是否真的达成就成了最难的部分 <button class="pd-ts" data-t="10:47" data-who="Teresa" data-en="This is one example from my colleague. He made a loop of agents building 3D printing of our logo. I think here you can see what is the challenge of the loops, because before in programming, loops had clear criteria of what it means to be done." aria-label="回原文"></button>。还有一个坑：如果你用错误的方式写「完成」的标准，智能体会想方设法**通过你的测试**，而不是真正完成你要的事——靠作弊过关 <button class="pd-ts" data-t="11:46" data-who="Teresa" data-en="So it's still not solved, and there are problems like cheating. For example, if you write what it means to be done in the wrong way, the agent can try to pass your tests, but not really verify what you need to do and accomplish, but instead try to solve just passing your tests, so cheating by that." aria-label="回原文"></button>。

factory 的解法叫 **missions**(任务)：智能体的长时间运行会话，主智能体做编排者(orchestrator),写下「完成意味着什么」的条件，然后把工作派给工作者(workers)智能体，[[验证者|验证者]]审查后反馈回起点，循环迭代直到完成，甚至能跑几周 <button class="pd-ts" data-t="12:12" data-who="Teresa" data-en="We just call it missions because we send the agent to the mission. And the missions work in the loop and iterating on task until it's done. And they can do it even for weeks." aria-label="回原文"></button>。一个真实客户任务运行了 16 小时，其中**验证环节占了整个流程的 40%**——可见验证有多重要 <button class="pd-ts" data-t="12:34" data-who="Teresa" data-en="So this is one example, a real mission from our customers that run 16 hours. And just to see how important is the validation as well, it takes even 40% of the whole process." aria-label="回原文"></button>。

一个反直觉的设计：工作者智能体是**按顺序**干活的，不是集群或并行——每个完成一部分传给下一个。他们发现这样能保持更新鲜的上下文，像人类请同事交叉验证代码一样「头脑清醒」；不过每个工作者内部仍可以有并行的子智能体干小事，比如查网络、构建文件 <button class="pd-ts" data-t="12:55" data-who="Teresa" data-en="And what is interesting or worth noting is that they work in a sequence. So they don't work in a swarm or parallel. The agents work in sequence and everyone accomplishes something and passes it to the next one." aria-label="回原文"></button>。

验证者也分两种：「审查验证者」严格检查代码库、linter、类型、测试；更有意思的是「用户测试验证者」——它不管代码怎么写的，直接在自己的虚拟计算机里点击各种东西，真刀真枪地确认能用。她见过工程师迁移代码库时，别家产品生成的产物只是看起来不错、实际点不动；真正去点击检查的智能体能发现这种「只是好看」的假结果 <button class="pd-ts" data-t="14:04" data-who="Teresa" data-en="It's a really rigorous check of the code. But the second I think is really interesting is User Testing Validator, and that's the one who is really in the arena trying the things." aria-label="回原文"></button>。这也得益于[[计算机使用|计算机使用]](computer use)和智能体持久虚拟机环境的进步 <button class="pd-ts" data-t="15:07" data-who="Teresa" data-en="I think this is one cool thing that was also allowed by the progress in computer use and the persistent environments, virtual machines for agents, which also wasn't here before or wasn't that great, but now it's really great, so it's allowing to go in the arena as an agent." aria-label="回原文"></button>。

## 持续改进：上下文膨胀与代码库就绪度

长任务绕不开的问题：企业平均用几百种工具——Figma、Notion、Gmail、Drive、Slack——每种都有 schema、参数、描述，智能体容易[[上下文膨胀|上下文膨胀]]、选错相似名字的工具，或者填满上下文窗口被迫压缩丢信息 <button class="pd-ts" data-t="16:03" data-who="Teresa" data-en="And that's very valid because enterprises especially, they use hundreds tools They use Figma, Notion, Gmail, Drive, Slack, like hundreds of tools on average. So all these have specification in the code." aria-label="回原文"></button>。factory 的「延迟上下文引擎」(deferred context engine)做法是逐步披露：智能体一开始只拿到简短的工具清单和描述，真正需要时才调用并完整加载——没有任何东西被删掉，只是需要之前不可见。工具越多省得越多，规模化能省 50% 以上的 token <button class="pd-ts" data-t="17:22" data-who="Teresa" data-en="Once you use more and more tools, the more actually you save, it really scales and you can save 50% of tokens or more. OK, another thing which is tricky and was surprising for me for the first time is that when adopting AI, you either succeed big or you can fail big the same way." aria-label="回原文"></button>。

第二个让她第一次遇到时都惊讶的事：**采用 AI 是幂律分布——要么大赢，要么同样幅度地大输**。如果代码库没有结构、没有文档，转型软件工厂反而会让代码退化，而且混乱会复利式累积、难以回头；只用 AI 的人和认真想过再上的人之间，生产力差距巨大且在扩大 <button class="pd-ts" data-t="17:32" data-who="Teresa" data-en="OK, another thing which is tricky and was surprising for me for the first time is that when adopting AI, you either succeed big or you can fail big the same way." aria-label="回原文"></button>。

Stanford 的数据也显示，没有结构化代码库和良好文档时 AI 可能让代码变糟 <button class="pd-ts" data-t="17:58" data-who="Teresa" data-en="And there is a big and growing gap in productivity between those who just adopted AI versus those who actually thought about it a bit more. There is another data from Stanford about, yeah, without structured code base and being ready and documenting well, the AI can make your code worse." aria-label="回原文"></button>。factory 的应对是「智能体就绪度」检查——开发环境可复现性、测试质量、文档完备度、代码风格、linter,即你为保持代码库整洁本来就该做的一切；大客户会走完整个检查，再按推荐行动修复 <button class="pd-ts" data-t="18:22" data-who="Teresa" data-en="We have something as a part of the software factory. We have something called agent readiness, and it's a framework. I don't like the word framework, but take it as a hygiene check of your code base and things you should do because there is actually a nice correlation between how your code base is looking and all the details there and how good you're going to adopt the AI and end up productive instead of with a messy code base." aria-label="回原文"></button>。

第三个痛点：你总在向智能体重复「我希望事情怎么做」，感觉它没听懂——就像新员工要靠观察才能学会那些没写成条文的规矩 <button class="pd-ts" data-t="19:45" data-who="Teresa" data-en="And I think this is, again, nice parallel with human organizations and teams, because when you join a new company, there are a lot of rules that are not really codified anywhere." aria-label="回原文"></button>。factory 的解法是插件(打包可复用的技能和上下文)和自动更新的 auto-wiki <button class="pd-ts" data-t="19:58" data-who="Teresa" data-en="I think this is a big challenge for agents as well. And one thing we launched for that is plugins, which are, like, packaged reusable skills and context and the things behind the scenes that you can really codify." aria-label="回原文"></button>。

## 那人类去哪

Teresa 的回答是乐观的：人类只是又向上抽象了一层——就像我们最早是「人肉计算机」，后来有了编程语言把细节写成条文，再后来有了编程智能体把一部分外包出去，现在轮到我们管理编排者、工作者、验证者组成的智能体团队，只负责监控和决定**构建什么** <button class="pd-ts" data-t="20:45" data-who="Teresa" data-en="I think we actually had Before, the same experience of us as humans abstracting some levels up, and we actually started ourselves as human computers. We actually were the computers doing all the most detailed stuff at the beginning." aria-label="回原文"></button>。她相信 AI 抢走的不是那些酷的部分，而是烦人的部分——对齐、会议、到处要上下文和同步状态，这些都可以外包给你的软件工厂 <button class="pd-ts" data-t="21:48" data-who="Teresa" data-en="And by this continuous cycle of autonomous software, I think we can actually achieve that. This is one warning chart, or if someone thinks AI will take the cool stuff from us, I believe actually it will take the annoying stuff, and in enterprises and organizations, you already spend a lot on alignments, on the meetings." aria-label="回原文"></button>。她最后的收尾：去摸摸草，让你的智能体替你构建吧 <button class="pd-ts" data-t="22:22" data-who="Teresa" data-en="Okay, so this is it. Thank you so much. Go touch some grass and let your agents build for you." aria-label="回原文"></button>。

## 本集带走

- **别把软件工厂等同于编码智能体**：写代码是容易的部分，难的是信号收集、优先级、编排、验证、迭代这个闭环；想引入它就得从零重建组织，不是买套咨询方案。
- **保持中立 + 上自动模型路由**：按任务难度分类，选「够用」的最便宜模型；省钱只是其一，还换来速度和容灾——一个提供商挂了自动切换。
- **先定义好「完成」再放智能体进循环**：标准写得不好，智能体会靠通过测试来作弊；验证要占流程的足够比重(一个 16 小时的真实任务里占了 40%)。
- **验证者要「进竞技场」**：让智能体在自己没写过的代码之外、真的在虚拟机里点一遍产品，别只看代码层面对不对。
- **先做代码库卫生检查再上 AI**:结构化代码库、好测试、好文档——采用 AI 是幂律，代码库没准备好会越用越糟。
- **上下文靠延迟披露管理**：工具只给短清单，用到时再全量加载，规模化能省一半以上 token。

<div class="pd-sec pd-sec-q">全部金句 <span>13 条</span></div>

> <span class="qz">软件工厂不只是一个编码智能体，甚至不是一群编码智能体，哪怕上千个也不算——因为生成代码、写代码，相比其他所有环节，是容易的部分。</span>  
> *Software Factory is not just coding agent, and it's not even a swarm of coding agents, even thousands of agents, because generating code, writing code, that's the easy part compared to all the others.*  
> <span class="qm">—— Tereza Tížková · [02:59]</span> ^q1

> <span class="qz">我们相信，你应该真正从头开始重建你的组织，为成为软件工厂做好准备。</span>  
> *We believe you should really rebuild your organization from ground up to be ready to become a software factory.*  
> <span class="qm">—— Tereza Tížková · [03:31]</span> ^q2

> <span class="qz">选预测能完成你任务的最便宜模型，然后就开工。</span>  
> *Cheapest model that is predicted to accomplish your task, and then you go.*  
> <span class="qm">—— Tereza Tížková · [08:34]</span> ^q3

> <span class="qz">即使你在任务中途切换到更强的模型，总体上你多半还是更快，因为这依然是值得的。</span>  
> *Even if you're switching in the middle of the task to a more difficult model, you still overall are faster probably, because it's still worth*  
> <span class="qm">—— Tereza Tížková · [09:10]</span> ^q4

> <span class="qz">问题不在于循环本身，而在于你如何定义在循环中什么叫「完成」。</span>  
> *The question is not the loop itself, but the question is how you define what it means to be done in the loop.*  
> <span class="qm">—— Tereza Tížková · [10:36]</span> ^q5

> <span class="qz">我们实际上发现，这样做最终会有更新鲜的上下文，算是「头脑清醒」——就像人类有其他同事来验证他们的代码一样。</span>  
> *We actually found that if you do this, you end up with more fresh context and kind of fresh heads, same with when with humans have like other colleagues verifying their code.*  
> <span class="qm">—— Tereza Tížková · [13:04]</span> ^q6

> <span class="qz">重要的一点是，验证者评判的是他们自己没写过的代码。</span>  
> *Important thing is the validators judge code that they didn't write.*  
> <span class="qm">—— Tereza Tížková · [13:39]</span> ^q7

> <span class="qz">一旦你使用越来越多的工具，实际上省得就越多，它真的能扩展，你可以节省 50% 的 token 甚至更多。</span>  
> *Once you use more and more tools, the more actually you save, it really scales and you can save 50% of tokens or more.*  
> <span class="qm">—— Tereza Tížková · [17:12]</span> ^q8

> <span class="qz">采用 AI 时，你要么大获成功，要么以同样的方式大败。这有点像幂律分布。</span>  
> *When adopting AI, you either succeed big or you can fail big the same way. It's a bit of power law.*  
> <span class="qm">—— Tereza Tížková · [17:27]</span> ^q9

> <span class="qz">如果你的代码库没准备好，没有结构化的代码库和所有重要的东西，那么转型成软件工厂反而可能让你变得更糟，让你的代码不断退化。</span>  
> *If your code base is not ready, if you don't have structured code base and all important things, then adopting or turning into a software factory can actually make you end up worse and make your code degrading.*  
> <span class="qm">—— Tereza Tížková · [17:34]</span> ^q10

> <span class="qz">作为人类，我们应该决定软件里构建什么，而不是怎么构建——因为那交由智能体来做。</span>  
> *We should be, as humans, deciding what to build in the software, not how to build it, because that's up for the agents.*  
> <span class="qm">—— Tereza Tížková · [21:32]</span> ^q11

> <span class="qz">我实际上相信，AI 会夺走的是那些烦人的部分——在企业和组织里，你早就已经在对齐上、在会议上花了很多时间。</span>  
> *I believe actually it will take the annoying stuff, and in enterprises and organizations, you already spend a lot on alignments, on the meetings.*  
> <span class="qm">—— Tereza Tížková · [21:55]</span> ^q12

> <span class="qz">去摸摸草，让你的智能体替你构建吧。</span>  
> *Go touch some grass and let your agents build for you.*  
> <span class="qm">—— Tereza Tížková · [22:22]</span> ^q13

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-21-howiai-how-warp-ships-2-000-prs-a-month-with-ai|Warp CEO 的软件工厂：2000 个 PR 一个月，人成了瓶颈]]<span class="pd-rz">同概念:智能体 (agent)、编码智能体 (coding agent)、计算机使用 (computer use)、软件工厂 (software factory)</span>
- [[2026-07-21-trainingdata-factory-s-matan-grinberg-the-coming-dark|Factory CEO Matan:早两年等于错，退款、路由器与软件工厂]]<span class="pd-rz">同公司:factory · 同概念:智能体 (agent)、软件工厂 (software factory)</span>
- [[2026-09-27-talks-software-engineering-is-becoming-factory|软件工程正在变成「工厂工程」：Warp 创始人的自动化开发全景]]<span class="pd-rz">同概念:智能体 (agent)、计算机使用 (computer use)、软件工厂 (software factory)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-20-talks-prototyping-as-leadership-how-a-cto-ship|管理者日程突然能写代码了：CTO 的通宵智能体工作流]]<span class="pd-rz">同概念:智能体 (agent)、编码智能体 (coding agent)、计算机使用 (computer use)</span>
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当写代码变便宜,OpenAI Codex负责人说「品味」成了最贵的资源]]<span class="pd-rz">同概念:智能体 (agent)、计算机使用 (computer use)、ChatGPT</span>
- [[2026-08-19-bigtech-nick-bostrom-worries-about-ai-existentia|Nick Bostrom：智能体破笼之后，我们还能驾驭AI吗]]<span class="pd-rz">同概念:开源模型 (open source models)、智能体 (agent)</span>

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
