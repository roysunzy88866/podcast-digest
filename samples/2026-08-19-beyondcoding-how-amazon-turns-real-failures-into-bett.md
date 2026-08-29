---
title: 模型路由为什么还没解决：Amazon Nova 负责人的实话
podcast: Beyond Coding
date: 2026-08-19
source_url: undefined
duration: "45:10"
type: episode
cover: "#64748b"
image: "/covers/2026-08-19-beyondcoding-how-amazon-turns-real-failures-into-bett.jpg"
description: "新模型没好两倍成本却翻倍，模型路由远未解决，瓶颈已从工程工时转向\"做对东西\"。"
host: "[[Michael Giannangelli]]"
companies: ["[[Nova]]"]
concepts: ["[[模型路由]]", "[[评估]]", "[[智能体]]", "[[RLGym]]", "[[迁移]]"]
category: 智能体
tags:
  - 智能体
  - 产品方法
socialImage: "https://talk.solomind.cc/covers/2026-08-19-beyondcoding-how-amazon-turns-real-failures-into-bett.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-19-beyondcoding-how-amazon-turns-real-failures-into-bett#post","headline":"模型路由为什么还没解决：Amazon Nova 负责人的实话","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-19-beyondcoding-how-amazon-turns-real-failures-into-bett","mainEntityOfPage":"https://talk.solomind.cc/2026-08-19-beyondcoding-how-amazon-turns-real-failures-into-bett","description":"新模型没好两倍成本却翻倍，模型路由远未解决，瓶颈已从工程工时转向\"做对东西\"。","datePublished":"2026-08-19","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-08-19-beyondcoding-how-amazon-turns-real-failures-into-bett.jpg","about":[{"@type":"Person","name":"Michael Giannangelli"},{"@type":"Organization","name":"Nova"},{"@type":"Thing","name":"模型路由 (model routing)"},{"@type":"Thing","name":"评估 (eval)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"RLGym"},{"@type":"Thing","name":"迁移 (migration)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"模型路由为什么还没解决：Amazon Nova 负责人的实话","item":"https://talk.solomind.cc/2026-08-19-beyondcoding-how-amazon-turns-real-failures-into-bett"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>模型路由为什么还没解决：Amazon Nova 负责人的实话</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 模型路由为什么还没解决：Amazon Nova 负责人的实话

<div class="pd-byl"><b>Michael Giannangelli</b> · Amazon Nova 负责人 · 2026-08-19</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-19-beyondcoding-how-amazon-turns-real-failures-into-bett.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">新模型发布了，它可能并没有好两倍，但成本却是两倍。</div><div class="a">— Michael Giannangelli <button class="pd-ts" data-t="05:59" data-who="Michael Giannangelli" data-en="A newer model comes out and it is maybe not twice as good, but the costs are twice as much." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Michael Giannangelli]]
>
> **公司** [[Nova]]
>
> **概念** [[模型路由]] · [[评估]] · [[智能体]] · [[RLGym]] · [[迁移]]

新模型发布了，能力可能没好两倍，但成本却是两倍 <button class="pd-ts" data-t="05:59" data-who="Michael" data-en="Insane right now. A newer model comes out and it is maybe not twice as good, but the costs are twice as much. We're now moving into, I feel like a state, especially at enterprise, where we look at what is the most effective outcome per kind of token slash cost." aria-label="回原文"></button>。这是他的判断。他说企业界正在经历一个转向：从"给我最好的模型"变成"每个 token 花出去，产出到底够不够" <button class="pd-ts" data-t="06:04" data-who="Michael" data-en="A newer model comes out and it is maybe not twice as good, but the costs are twice as much. We're now moving into, I feel like a state, especially at enterprise, where we look at what is the most effective outcome per kind of token slash cost." aria-label="回原文"></button>。

> 【背景】Michael 指 Amazon Nova 产品负责人 Michael Giannangeli。

## 模型路由：听起来简单，实际远未解决

理论上，[[模型路由|模型路由]]就是根据任务自动把请求分给合适的模型——简单任务用小模型省钱省延迟，难的才上大模型。但 Michael 的原话是："我认为这远未成为一个已解决的问题" <button class="pd-ts" data-t="07:45" data-who="Michael" data-en="Where you can automatically get routed to the right model for your task. I don't think that's anywhere near a solved problem yet. There's still a lot of room there." aria-label="回原文"></button>。

核心困难不在技术实现，在于你没法衡量"好"长什么样。[[评估|评估]]是多维度的：准确性、推理是否正确、输出是否合理、延迟、成本 <button class="pd-ts" data-t="09:49" data-who="Michael" data-en="And it's multi-dimensional. There's the accuracy of, is it using the right tool? Is reasoning done right?" aria-label="回原文"></button>。

构建一个稳健的评估本身就不容易，而更麻烦的是模型进步太快——你两个月前建好的评估，可能所有模型都跑到 100% 了，这个评估就饱和了，对路由来说毫无价值 <button class="pd-ts" data-t="10:33" data-who="Michael" data-en="And then of course, like I mentioned before, models keep getting better. And so you may have had an eval that worked well two months ago, but as the models get better, now maybe that eval's saturated and all of the models are meeting that." aria-label="回原文"></button>。他举了 [[Nova|Nova]] 2 发布时的例子：他们针对多轮多工具使用建了一个评估，早期准确率大概 50%，发布后几个月就全满了 <button class="pd-ts" data-t="11:06" data-who="Michael" data-en="Do you have an example of when you've signaled that an eval just doesn't make sense anymore, it needs to be deprecated? Many, many examples in this case, but I'll use one from around the time of like Nova 2 launch." aria-label="回原文"></button>。编码基准也一样，SweeBench 去年还是标准，转眼模型就冲到 70%、80%、90%，不再有区分度 <button class="pd-ts" data-t="11:51" data-who="Michael" data-en="And the same thing for coding. Many of the coding benchmarks that were on the model cards for models last year, SweeBench was a good example. That was the benchmark." aria-label="回原文"></button>。

所以模型路由需要持续迭代评估，每次新模型出来都要重新校准——"这让人精疲力竭" <button class="pd-ts" data-t="08:36" data-who="Michael" data-en="And then iterating again when a new model comes out. And that's exhausting. It's a lot of effort." aria-label="回原文"></button>。

## 评估怎么建：从真实失败模式出发

Michael 区分了两类东西：评估和公共基准。基准是给外界看信号的，比如"这个模型在[[迁移|迁移]]或 Web 应用上还行"，但非常窄，现实里未必适用 <button class="pd-ts" data-t="14:34" data-who="Michael" data-en="Then you have the public benchmarks. The benchmarks are things that give a signal to customers like, okay, this model is probably decent at migrations or it's decent at building a web app." aria-label="回原文"></button>。真正有用的是评估，而且必须扎根于真实失败模式 <button class="pd-ts" data-t="14:18" data-who="Michael" data-en="And that's not to mention the benchmark. So the way that I think about it is you have the evals, which are most useful because those are grounded in real failure modes, real things that you're seeing from customers, real things that you're running into yourself." aria-label="回原文"></button>。

他们的做法是：每次模型失败——不管是客户反馈还是自己用的时候碰到的——只要不是一次性问题，就建一个评估来衡量它，然后证明模型在这个失败模式上确实改进了 <button class="pd-ts" data-t="13:21" data-who="Michael" data-en="And we continually add more and more evals. So one way you can think about this is every time the model fails, whether that's getting feedback from a customer, whether that's me just kind of messing around with it on my own, an engineer doing something, and we get a failure mode, if that is more than a one-off, so if I'm getting the signal from" aria-label="回原文"></button>。评估列表会越来越大，饱和了再删，他们在谈的是数百个评估的规模 <button class="pd-ts" data-t="14:11" data-who="Michael" data-en="And then as they start to saturate, then you start to remove some. But we're talking hundreds of evals. Yeah." aria-label="回原文"></button>。

数据来源呢？他们不在客户数据上训练，除非有明确许可 <button class="pd-ts" data-t="16:44" data-who="Michael" data-en="So you are right. We do not train on customer data without explicit permission and sharing and all of those things. Where we really focus most is where we have the most visibility, and that's the internal use cases." aria-label="回原文"></button>。

真正的高可见度来源是内部用例——亚马逊员工用 Claude Code、Kiro 等工具时，可以选择加入追踪，他们能识别出模型做错的轨迹，围绕这些建评估，再转成训练数据，形成闭环 <button class="pd-ts" data-t="17:07" data-who="Michael" data-en="So one thing that my team and I have What we've built is visibility into failure modes within usage for Amazon employees. Of course, this is all opt-in and all of that, but for things like Claude Code, Kiro, we're able to identify traces where something has gone wrong, where the model's not doing what they wanted, and then we can build the evals around those." aria-label="回原文"></button>。Michael 认为这是大公司的一个真实优势：Anthropic、OpenAI、Mistral 没有那么多内部使用数据可以挖 <button class="pd-ts" data-t="18:01" data-who="Michael" data-en="I feel like that's a big edge where you have your internal use cases that you can actually validate upon. Like Amazon has that, Google has that, some new organizations like Anthropic, OpenAI, Mistral, they don't have that as much." aria-label="回原文"></button>。

## RLGyms：让模型在模拟环境里试错学习

> 【背景】RL 即强化学习(Reinforcement Learning)，Gym 指训练环境。

[[RLGym|RLGym]] 的思路是建一个模拟环境，模型在里面尝试任务、失败、学一点、再试，通过反复试错变强 <button class="pd-ts" data-t="35:01" data-who="Michael" data-en="What are RLGyms? So basically, the idea is that it's a simulated environment where a model can try something, fail at it, learn a little bit, try again, fail again, and get better through this trial." aria-label="回原文"></button>。结构和评估很像——都有任务、harness、工具、验证器——但区别在于评估只衡量好不好，RLGym 还让模型从失败中学习，生成的数据直接用于训练 <button class="pd-ts" data-t="36:36" data-who="Michael" data-en="But where I think we add more value now is taking real environments, so things that customers are trying to do right now with models where they're not as good, even the best models are maybe only doing something accurate." aria-label="回原文"></button>。

例子不限于 LeetCode 式的编程题。Michael 说现在更有价值的方向是拿真实环境来建——客户正在用模型做但模型还不太行的事情，比如某些迁移任务，最好的模型可能只有 10% 的准确率 <button class="pd-ts" data-t="36:24" data-who="Michael" data-en="Yeah, it's definitely one example. But where I think we add more value now is taking real environments, so things that customers are trying to do right now with models where they're not as good, even the best models are maybe only doing something accurate." aria-label="回原文"></button>。

具体领域包括迁移、DevOps、渗透测试、漏洞检测 <button class="pd-ts" data-t="36:52" data-who="Michael" data-en="So there's this signal that the model can get where it's able to try that task and then get better at it over time. Everything from migrations to DevOps to pen testing to vulnerability detection, all of that, we're building gems to try and improve our models on those tasks." aria-label="回原文"></button>。资源有限，所以有优先级：选对客户重要、对业务重要、且亚马逊有独特数据的领域，DevOps 就是一个例子 <button class="pd-ts" data-t="37:17" data-who="Michael" data-en="Do you have a priority ranking where you're saying okay vulnerability management number one or migration specifically because of the potential business cases behind it?" aria-label="回原文"></button>。

## 迁移会变成自主的吗？

长远看，Michael 认为迁移这类任务会 mostly autonomous（大部分自主完成），不需要太多人在回路里 <button class="pd-ts" data-t="40:24" data-who="Michael" data-en="I think longer term. Things like migrations will be mostly autonomous. I don't think there's going to be as much need for the human in the loop." aria-label="回原文"></button>。理由很直白：工程师本来就不喜欢做迁移 <button class="pd-ts" data-t="40:31" data-who="Michael" data-en="I don't think there's going to be as much need for the human in the loop. And it's also, those are generally tasks that engineers don't love. I don't know too many engineers that really enjoy doing migrations." aria-label="回原文"></button>。随着上下文窗口变大、harness 变好，[[智能体|智能体]]会跑越来越广的迁移任务 <button class="pd-ts" data-t="42:42" data-who="Michael" data-en="Yeah, trust typically is not really something you can leapfrog, but there are, I think, movements that we can now leapfrog. Like previously, when we're talking about AI and people that haven't really worked with agents, they might still think AI equals lying code completion." aria-label="回原文"></button>。

但现实比"一对一翻译代码"复杂得多。老代码库可能 20 到 40 年前的，人们想在迁移的同时做现代化——业务逻辑还合理吗？

要整合吗？要重写吗？

这就无限复杂了 <button class="pd-ts" data-t="41:09" data-who="Michael" data-en="And that's already happening to a certain degree, but it's only going to get better. The problem typically with migrations is that like a one-on-one migration conceptually makes sense, but because we're talking about code bases that are from like 40, 30, 20 years ago, even before I was completely in the industry or even alive, people want to modernize in parallel to migrating, which makes it infinitely more complex because then you're like, okay, this business logic, does it still make sense?" aria-label="回原文"></button>。所以信任需要时间建立。

Michael 描述了一条渐进线：从人做所有事，到人交出更多任务，到五五开，到人只在关键节点检查 <button class="pd-ts" data-t="41:47" data-who="Michael" data-en="And I think it will take time to earn that trust as well. So one thing that I see with the agents broadly is that it takes time to go from, okay, the human is doing everything to now the human is handing off more of the task to now maybe it's 50-50 to now the human is only checking in at the very end or making sure at certain really important points to the agent is doing everything." aria-label="回原文"></button>。"我们还远没到智能体做所有事的阶段，但正沿着这条线移动" <button class="pd-ts" data-t="42:11" data-who="Michael" data-en="So one thing that I see with the agents broadly is that it takes time to go from, okay, the human is doing everything to now the human is handing off more of the task to now maybe it's 50-50 to now the human is only checking in at the very end or making sure at certain really important points to the agent is doing everything." aria-label="回原文"></button>。

还有一个数学问题：即使智能体单轮 90% 准确，多轮下来可靠性会急剧下降 <button class="pd-ts" data-t="43:48" data-who="Michael" data-en="And it's hard to get these things super accurate. Even if you have an agent that's 90% accurate on a single turn, if there are multiple turns, That rate of reliability just drops." aria-label="回原文"></button>。所以到"完全不用操心"或者"比人强"的程度，还需要时间 <button class="pd-ts" data-t="44:02" data-who="Michael" data-en="That rate of reliability just drops. And so it's going to take time to get to the point where we're very, very confident that these agents are going to get everything right, that you don't have to worry about it, or at least be better than a human." aria-label="回原文"></button>。

## 瓶颈转移：从工程工时到"做对东西"

Michael 说现在瓶颈已经不在工程工时了 <button class="pd-ts" data-t="23:14" data-who="Michael" data-en="So you can do a lot more with less. Right now, the bottleneck has shifted. It's no longer the engineering hours like it may have been in the past." aria-label="回原文"></button>。真正的问题是：你在构建对的东西吗？

你迭代得够快吗？你从一线拿到反馈了吗？你能闭环然后快速发布吗 <button class="pd-ts" data-t="23:23" data-who="Michael" data-en="It's no longer the engineering hours like it may have been in the past. It's really, are you building the right thing? And then are you iterating on that really fast?" aria-label="回原文"></button>？

所以产品角色的价值没有消失。智能体让每个人都更高效，你可以用更少的人做更多事 <button class="pd-ts" data-t="23:04" data-who="Michael" data-en="It really depends. I think that the agents and generally AI makes everyone more effective. So you can do a lot more with less." aria-label="回原文"></button>，但"做对东西"这件事仍然需要人。

他认为界限在模糊——他自己上周就发了第一行生产代码——但角色不会完全合并，PM、工程师、设计师各有帮助团队跑更快的作用 <button class="pd-ts" data-t="23:58" data-who="Michael" data-en="That's one thing that I try to really focus on. But it's not just a PM thing. Engineers that are product-minded can be very good at that as well." aria-label="回原文"></button>。他的建议很简单：快速发布，不需要完美，拿到真实反馈再迭代 <button class="pd-ts" data-t="25:26" data-who="Michael" data-en="How do they tackle handling that? I think the best way of doing that is to ship fast. It doesn't have to be perfect." aria-label="回原文"></button>。不是 MVP 变更小了，而是你能更快到达 MVP <button class="pd-ts" data-t="27:46" data-who="Michael" data-en="So if my goal is here, and typically my MVP would kind of be somewhere in between to go live with and to get feedback faster, do you think we've moved that timeline up so the MVPs are now smaller to be able to go live quicker?" aria-label="回原文"></button>。

对于个人，他的建议是保持平衡：大部分精力聚焦在你在构建的目标上，但留 10% 到 20% 的时间尝试新东西 <button class="pd-ts" data-t="32:04" data-who="Michael" data-en="I think it is a balance because it can be very, very easy to just get pulled in a thousand different ways. I think it's important to remain focused on what you're building towards, but also at least spend some amount of time, maybe that's 10%, maybe it's 20%, experimenting with new things." aria-label="回原文"></button>。不要对这些模型或工具能做什么产生假设，因为每天都有新模型出来，实际能力可能已经超出你的认知 <button class="pd-ts" data-t="32:18" data-who="Michael" data-en="I think it's important to remain focused on what you're building towards, but also at least spend some amount of time, maybe that's 10%, maybe it's 20%, experimenting with new things." aria-label="回原文"></button>。

## 本集带走

- **模型路由的核心难题是评估，不是路由本身**：你先得能多维度衡量"好"，而评估会随模型进步迅速饱和，需要持续重建。
- **评估要从真实失败模式出发，不是公共基准**：基准窄且容易过时；每次非一次性失败都该建一个评估来追踪改进。
- **RLGym 的价值在真实环境，不在练习题**：拿客户实际在做但模型还差的场景（迁移、DevOps、安全）建模拟环境，让模型试错学习，比 LeetCode 式任务有价值得多。
- **多轮任务可靠性是数学问题**：单轮 90% 准确率，多轮下来可靠性会骤降——这是自主智能体还不能"放手"的根本原因之一。
- **瓶颈已从工程工时转向"做对东西"**：快速发布、拿真实反馈、闭环迭代，比追求完美重要得多。
- **留 10-20% 时间试新东西**：不要对模型能力形成固化假设，每天出新模型，你的认知可能已经落后了。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">新模型发布了，它可能并没有好两倍，但成本却是两倍。</span>  
> *A newer model comes out and it is maybe not twice as good, but the costs are twice as much.*  
> <span class="qm">—— Michael Giannangelli · [05:59]</span> ^q1

> <span class="qz">所以你可能有一个两个月前运作良好的评估，但随着模型变得更好，现在也许那个评估已经饱和了，所有的模型都达到了那个标准。</span>  
> *And so you may have had an eval that worked well two months ago, but as the models get better, now maybe that eval's saturated and all of the models are meeting that.*  
> <span class="qm">—— SPEAKER_02 · [10:33]</span> ^q2

> <span class="qz">所以现在那个评估对于模型路由来说毫无价值。</span>  
> *So now that eval is worthless for model routing.*  
> <span class="qm">—— SPEAKER_02 · [10:45]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:智能体 (agent)、评估 (eval)</span>
- [[2026-07-24-talks-inside-the-agent-engine-a-langchain-and|当系统出故障时，让 AI 代替作战室里的 50 个人——Traversal 谈如何造 AI SRE]]<span class="pd-rz">同概念:智能体 (agent)、评估 (eval)</span>
- [[2026-07-28-pg-how-to-build-your-first-eval|eval 会取代 PRD 吗?AI 产品经理的新工作法门]]<span class="pd-rz">同概念:智能体 (agent)、评估 (eval)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic、Claude Code、OpenAI · 同概念:智能体 (agent)</span>
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同公司:Claude Code、Codex · 同概念:智能体 (agent)</span>
- [[2026-02-12-lennys-engineers-are-becoming-sorcerers|OpenAI 内部怎么用 AI 写代码：从巫师比喻到一人独角兽的二阶效应]]<span class="pd-rz">同公司:Codex、OpenAI · 同概念:智能体 (agent)</span>

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
