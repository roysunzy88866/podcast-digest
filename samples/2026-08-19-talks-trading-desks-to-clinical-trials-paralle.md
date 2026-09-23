---
title: 垂直 AI 创业的七步配方：护城河不是模型，是领域专业知识
podcast: 精选演讲
date: 2026-09-24
source_url: undefined
duration: "19:41"
type: episode
cover: "#64748b"
description: 对冲基金与医药科技双料工程师 Ayush Bhardwaj 讲解垂直行业 AI 智能体的完整构建配方，以及为什么 LLM 当裁判救不了你。
guests: ["[[Ayush Bhardwaj]]"]
companies: ["[[Allos]]"]
concepts: ["[[智能体]]", "[[应用垂直 AI]]", "[[专有数据]]", "[[可观测性]]", "[[错误分析]]", "[[基于人类反馈的强化学习]]", "[[LLM 当裁判]]", "[[监督微调]]", "[[基于可验证奖励的强化学习]]", "[[人在回路]]", "[[提示词]]", "[[护城河]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-19-talks-trading-desks-to-clinical-trials-paralle#post","headline":"垂直 AI 创业的七步配方：护城河不是模型，是领域专业知识","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-19-talks-trading-desks-to-clinical-trials-paralle","mainEntityOfPage":"https://talk.solomind.cc/2026-08-19-talks-trading-desks-to-clinical-trials-paralle","description":"对冲基金与医药科技双料工程师 Ayush Bhardwaj 讲解垂直行业 AI 智能体的完整构建配方，以及为什么 LLM 当裁判救不了你。","datePublished":"2026-09-24","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Ayush Bhardwaj"},{"@type":"Organization","name":"Allos"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"应用垂直 AI (applied vertical AI)"},{"@type":"Thing","name":"专有数据 (proprietary data)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"错误分析 (error analysis)"},{"@type":"Thing","name":"基于人类反馈的强化学习 (reinforcement learning from human feedback)"},{"@type":"Thing","name":"LLM 当裁判 (LLM as a judge)"},{"@type":"Thing","name":"监督微调 (supervised fine-tuning)"},{"@type":"Thing","name":"基于可验证奖励的强化学习 (reinforcement learning via verifiable rewards)"},{"@type":"Thing","name":"人在回路 (human in the loop)"},{"@type":"Thing","name":"提示词 (prompt)"},{"@type":"Thing","name":"护城河 (moat)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"垂直 AI 创业的七步配方：护城河不是模型，是领域专业知识","item":"https://talk.solomind.cc/2026-08-19-talks-trading-desks-to-clinical-trials-paralle"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>垂直 AI 创业的七步配方：护城河不是模型，是领域专业知识</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 垂直 AI 创业的七步配方：护城河不是模型，是领域专业知识

<div class="pd-byl"><b>Ayush Bhardwaj</b> · 对冲基金与医药科技双料工程师 · 2026-09-24</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-19-talks-trading-desks-to-clinical-trials-paralle.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">每个人都在把智能体放进生产环境，如今甚至 15 岁的孩子都在这么做。该问的问题是它们是否真的有效。</div><div class="a">— Ayush Bhardwaj <button class="pd-ts" data-t="03:17" data-who="Ayush Bhardwaj" data-en="Everyone is putting agents into production, even like 15-year-old kids these days. The question to ask is whether they actually work." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Ayush Bhardwaj]]
>
> **公司** [[Allos]]
>
> **概念** [[智能体]] · [[应用垂直 AI]] · [[专有数据]] · [[可观测性]] · [[错误分析]] · [[基于人类反馈的强化学习]] · [[LLM 当裁判]] · [[监督微调]] · [[基于可验证奖励的强化学习]] · [[人在回路]] · [[提示词]] · [[护城河]]

在金融做应用 AI 的工程师跳去医药行业，本以为会进入一个完全不同的世界——结果核心工作一模一样。说这话的人是 [[Ayush Bhardwaj|Ayush Bhardwaj]]，他先后在对冲基金和医药科技公司 [[Allos|Allos]] 做应用 AI，还去聊了法律 AI、房地产科技（proptech，用技术做房地产生意）的同行，发现大家在用非常相似的方式构建他称之为「[[应用垂直 AI|应用垂直 AI]]」的东西——即为某一个特定行业、模拟该行业中某个人的工作而构建的 AI（比如 Google Translate 是通用应用 AI，而用 AI 研发药物就是垂直的）<button class="pd-ts" data-t="01:03" data-who="嘉宾" data-en="And my experience is from the hedge fund and the pharma tech company. Delving deep into the recipe, I'll just take you through, what do I even mean by Applied Vertical AI?" aria-label="回原文"></button>。

先回答一个他收到最多的提问：真的有人在把[[智能体|智能体]]放进生产环境吗？他说这是问错方向的问题——如今连 15 岁的孩子都在把智能体上线，**真正该问的是它们是否真的有效**：是否赚钱或省钱、是否证明了自己的 ROI（投入产出比）<button class="pd-ts" data-t="03:15" data-who="嘉宾" data-en="So before, again, dive into that, I received a few reach outs saying, are people actually putting agents into production? And I was like, this is such a wrong question to ask." aria-label="回原文"></button>。从他的经验看，他待过的两家公司里，智能体都做到了。

## 七步配方：前四步是「简单部分」

**第一步，表述问题**。很多初创公司栽在贪多上——你必须挑一个非常窄的任务。

比如在金融领域，不要问「帮我找出三大值得投资的市场机会」，而是先选市场（美股）、再选行业（IT），然后让它按资本支出或 AI 投入这类具体参数给股票排名<button class="pd-ts" data-t="04:17" data-who="嘉宾" data-en="A good example for this could be, let's say, if you build something in finance. You won't ask it to like, hey, can you fetch me top three market opportunities that I could invest in?" aria-label="回原文"></button>。构建更多智能体不用交税，为什么要让单个智能体什么都干？

**第二步，识别数据**。他怎么强调都不为过：人人都有新闻、投行报告、学术论文（ArcGZ 预印本服务器、PubCam 这些公开来源），但让你的应用比 ChatGPT 或 Claude 更好的，是**[[专有数据|专有数据]]**——贵、而且没人卖给你，只能自己整理。

好消息是组织干了几年积累的非结构化数据，用 LLM 工作流一夜之间就能结构化<button class="pd-ts" data-t="05:43" data-who="嘉宾" data-en="So you need to curate it by yourself. Imagine your organization has been working for three years, right? They already have a lot of data." aria-label="回原文"></button>。金融行业最好的专有数据是交易论点（什么交易成功了、为什么成功）；制药则是**失败实验**的数据——成功的数据能拿到，失败的相对难拿<button class="pd-ts" data-t="06:10" data-who="嘉宾" data-en="Proprietary data that finance industry has, it's the trade theses, which is like what trade work and why it worked. And in pharma, it is the data for failed experiments." aria-label="回原文"></button>。

**第三步，写[[提示词|提示词]]建模问题**，理念是把「一个人如何解决这项工作」编码成多个步骤，像建一个心智模型<button class="pd-ts" data-t="06:35" data-who="嘉宾" data-en="So while writing prompt, what we should aim is to model it after the person who you are trying to replace. I mean, that's the hypothesis, but yeah, no offense, we're not trying to replace anyone with AI, but that's the ideology behind writing prompts, encode how a person would solve this job into multiple steps." aria-label="回原文"></button>。**第四步，[[可观测性|可观测性]]**——查看追踪记录、理解应用在做什么、调试它。

然后他坦白：以上全是简单部分，一屏代码就装下了，传说中的 10 倍工程师几分钟就能搞定。真正的坎在下一步。

## 迭代：垂直 AI 项目悄悄死掉的地方

做完前四步，你该迭代了——但你很可能**没法判断它是否有效**。他不是交易员，也没有生物或化学博士，看不懂自己智能体的输出。

类比一下：工程师能立刻看出 Sonnet 5 写的代码很烂，因为你受了一辈子的训练、有判断编程好坏的心智模型；但预测交易论点或做制药的特定任务时，你没有同样的心智模型<button class="pd-ts" data-t="08:20" data-who="嘉宾" data-en="You can instantly tell that Sonnet 5 sucks because you have your own training. You understand, okay, this code is not great code, whereas some X model that's a Fayetteville 5, you see, okay, this is great, but not as great as the hype is because you have been trained for this for life." aria-label="回原文"></button>。表面上你构建完了、可以上线开卖了，但没人会买——就像你不会用一个更差的编程模型一样。这是很多垂直 AI 项目悄然死去的地方<button class="pd-ts" data-t="08:44" data-who="嘉宾" data-en="But you just do not have the same kind of mental model when it comes to predicting trade theses or doing really specific tasks that vertical AI industry does. And this is also the place where a lot of vertical AI projects quietly die." aria-label="回原文"></button>。

他试过用 LLM as a judge（让 [[LLM 当裁判|LLM 当裁判]]来评估输出）自救，他直说这是非常愚蠢的错误：LLM 本质上只是预测下一个最可能的词，它会用行话蒙混过关，不理解 alpha（超额收益）是什么、不理解如何真正创造价值，而人类能立刻分辨什么是扯淡<button class="pd-ts" data-t="09:14" data-who="嘉宾" data-en="So I thought I could LLM as a judge my way out of it. And this was a really, really stupid mistake, to be honest, because what LLM is essentially doing, it's predicting the next probable word." aria-label="回原文"></button>。

更深一层的原因有两个。**其一，模型无法自我验证**：[[基于可验证奖励的强化学习|基于可验证奖励的强化学习]]（RL，用「标准答案」训练模型的方法）在数学和代码上很有效，因为代码能编译、题目有答案；但在这些领域没法建模，任何误差都会逐步复合放大<button class="pd-ts" data-t="09:42" data-who="嘉宾" data-en="I'll just try to delve a bit more deeper on why you can just iterate. So first thing is that model cannot verify itself specifically in these fields because reinforcement learning via verifiable rewards is really good at math and code because you have like answer keys." aria-label="回原文"></button>。

**其二，数据从来就不存在**：持仓超一亿美元的机构管理人依法每季度公开多头持仓，一旦申报、回报率就下降，因为所有人都能逆向工程、夺走他们的[[护城河|护城河]]；制药依法须披露每一项临床试验（无论成败），但约三分之一的公司从不这么做，2026 年 FDA 不得不公开提醒约 2,000 个申办方不要隐匿不利结果<button class="pd-ts" data-t="10:27" data-who="嘉宾" data-en="And I'll explain to you why. So any institutional manager holding over $100 million in qualifying U.S. equities are forced to publicly file their holdings, long position holdings, every quarter." aria-label="回原文"></button>。他们藏着这些数据，因为它像下金蛋的鸡——所以 OpenAI 和 Anthropic 都没有，你也雇不起交易员来做标注（保密协议多、人家挣得更多）<button class="pd-ts" data-t="11:28" data-who="嘉宾" data-en="Why would they sell their chicken? So naturally neither OpenAI nor Anthropic has this data because it's like gate-capped. You just cannot hire a trader for $100 an hour and have them annotate that stuff because they're like lots of NDAs and they definitely earn more." aria-label="回原文"></button>。

## 解法：雇用你想卖货给的那个人

没有别的绕开的办法。在对冲基金这很容易，用户就是他老板（交易员）；在制药初创则很别扭——一群年轻工程师得承认「我们需要一个资深科学家进来告诉我们该做什么」。雇了之后，工具的轨迹真的变了：向大药企推介时，对方开始喜欢他们的工具，因为它说的是行业的语言，而不是满是行话的 LLM 语言<button class="pd-ts" data-t="12:41" data-who="嘉宾" data-en="When we pitched to the other pharma companies, the big ones, the big pharma, they started liking our tools because it kind of spoke their language versus the normal jargon-ish LLM language." aria-label="回原文"></button>。

雇来用户之后，让他做什么？**构建学习循环**。

领域专家从最底层做起：打磨提示词（别让 LLM 直接干，改成问一个非常具体的查询）、帮你整理数据（就像工程师知道哪些会议是胡扯的、哪些论文网站靠谱，制药专家和交易员知道哪些来源更可靠）、并把「他们会怎么想一个问题」的思路拆解成步骤——分解问题、逐步打磨、最后做判断<button class="pd-ts" data-t="12:50" data-who="嘉宾" data-en="You try to build a learning loop out of it. The domain expert can start at a very, very low level, the ground level, where they just think about prompts. OK, I mean, let's not ask LLM to do this." aria-label="回原文"></button>。在行业里摸爬滚打到顶层的人，他们的判断正在变成智能体<button class="pd-ts" data-t="13:46" data-who="嘉宾" data-en="Try to curate, like decompose a problem, gradually refine, and then finally judge. So the person who sort of has lived to the complete of the industry that they're trying to revolutionize, their judgment is now turning into agents." aria-label="回原文"></button>。

落到技术上，他有几档方法，按 ROI 从低到高爬梯子：[[监督微调|监督微调]]（模型模仿人类示范）；RLHF（[[基于人类反馈的强化学习|基于人类反馈的强化学习]]，用人类偏好训练奖励模型）；评分标准做奖励（人类写评分标准、AI 据此给自己打分改进，但可能陷入回音室）；而**最便宜、ROI 最高的是[[错误分析|错误分析]]**——直接分析可观测性日志，弄清模型哪里出错就纠正它，不用碰任何模型权重<button class="pd-ts" data-t="14:44" data-who="嘉宾" data-en="This is because a human can just create a rubric, and then AI will just grade itself based on that rubric and improve its own processes. But again, there is a slight chance that you might run into an echo chamber with rubrics as rewards, and the cheapest of all, and I think the highest ROI is the error analysis, whereas the observability part that you set up earlier, you just analyze the logs plain and simple." aria-label="回原文"></button>。之后再逐步上到 RLHF 这个他眼中的行业黄金标准。但它有成本：GLM 5.2 微调完，新的更强模型一发布（比如 Alibaba Cloud 或 DeepSeq 发布新模型），你就得跟着重新微调<button class="pd-ts" data-t="15:35" data-who="嘉宾" data-en="But certainly there are some pitfalls of it. Like, for example, now there's GLM 5.2, right? You fine-tuned it, right?" aria-label="回原文"></button>。

这个循环永不停止：雇更多用户、更多查询、范围和数据扩大，到某个时点你在生成自己的数据——循环里的练习本身就在产出记录「什么有效、什么无效」的疯狂数据集。等你确信应用确实能交付超越 Claude 和 ChatGPT 的 alpha，就上线收钱<button class="pd-ts" data-t="16:11" data-who="嘉宾" data-en="That exercise itself is generating a very, I would say, a crazy data set of what works and what does not work. And this loop never stops. Once you feel confident enough in your application, you just ship it, provide it to the external paying users, and then you see the magic of it, that it actually works." aria-label="回原文"></button>。

## 两个反直觉判断

**关于「89% 的企业智能体没到生产环境」**（Stanford AI Index 报告数据），他不同意：每个 AI 都能到生产环境，只是没跑起来或没证明自身成本合理<button class="pd-ts" data-t="16:30" data-who="嘉宾" data-en="So I just pulled this stat from Stanford AI index report, because it's a really nice report that gives you an idea of what the state of AI is. And this says like 80%, 89% of enterprise AI agents never reach production." aria-label="回原文"></button>。金融和制药不会等你说「也许两年后能行」——不能立刻赚钱，立刻请出门。

**关于 [[人在回路|human in the loop]]（人机协作中由人把关）**：他说还早，金融和制药如今其实是「AI in the loop」——一切由专家完成，AI 负责省时间。AI 可以给交易员五个候选交易论点，但哪个在市场上行得通，判断仍在交易员手里；挑候选药物同理<button class="pd-ts" data-t="17:46" data-who="嘉宾" data-en="One more interesting thing. So HITL is like kind of a thing. Everyone is like, yeah, let's add human in the loop." aria-label="回原文"></button>。

模型要做出好决策需要的是因果而非相关，正如 Jan Laken 所说这些模型只是「技术统计、不是真实世界模型」。他把那一步称为「AGI 线」——到了那一步，才会有 vibe coding 出来的药物<button class="pd-ts" data-t="18:39" data-who="嘉宾" data-en="They need to do causation. And as Jan Laken puts it, these are like tech statistics, not real world models. You cannot just pattern match with past and use future to predict to it." aria-label="回原文"></button>。

## 本集带走

- **任务要窄**：先选市场、再选行业、再定具体参数，一个智能体只干一件非常具体的事；多建智能体没有「税」。
- **护城河是专有数据 + 领域知识**：模型、基础设施、大会上推销的一切都是大宗商品——你有人人都有；真正没人卖给你的，是互联网上不存在的行业数据和自己培育的领域专业知识<button class="pd-ts" data-t="19:10" data-who="嘉宾" data-en="So a final takeaway that I would call if there's one thing you are taking away from this talk, this is it. Model, infra, ecosystem, everyone selling you tons of stuff at this conference is just commodity." aria-label="回原文"></button>。
- **雇用你的用户**：没有别的办法让工具说行业的语言；让专家打磨提示词、筛选数据源、拆解思考步骤。
- **别用 LLM 当裁判**：评估垂直领域的输出，从分析日志做错误分析开始（不碰权重、ROI 最高），再逐步爬到 RLHF。
- **金融与制药目前是 AI in the loop**：AI 省时间、专家做最终判断，而且这两个行业只认立刻到账的 ROI。

<div class="pd-sec pd-sec-q">全部金句 <span>10 条</span></div>

> <span class="qz">每个人都在把智能体放进生产环境，如今甚至 15 岁的孩子都在这么做。该问的问题是它们是否真的有效。</span>  
> *Everyone is putting agents into production, even like 15-year-old kids these days. The question to ask is whether they actually work.*  
> <span class="qm">—— Ayush Bhardwaj · [03:17]</span> ^q1

> <span class="qz">我上次查的时候，构建更多 AI 智能体是不用交税的。那你为什么要让你的单个智能体什么都做呢？</span>  
> *Last I checked, there was no tax on building more AI agents. So why do you want your single agent to do everything?*  
> <span class="qm">—— Ayush Bhardwaj · [04:49]</span> ^q2

> <span class="qz">让你的应用更好的，是你的专有数据。</span>  
> *It is your proprietary data.*  
> <span class="qm">—— Ayush Bhardwaj · [05:34]</span> ^q3

> <span class="qz">而人类却可以立刻分辨什么是扯淡，什么不是。</span>  
> *And whereas a human can just tell it instantly what's bullshit and what's not.*  
> <span class="qm">—— Ayush Bhardwaj · [09:32]</span> ^q4

> <span class="qz">而他们把它藏起来，因为对他们来说这就像一只下金蛋的鸡。他们为什么要卖掉自己的鸡？</span>  
> *And they hide it because for them it's like a chicken laying golden eggs. Why would they sell their chicken?*  
> <span class="qm">—— Ayush Bhardwaj · [11:22]</span> ^q5

> <span class="qz">你要雇用那个你想把产品卖给他的人，因为说实话，没有别的绕开的办法。</span>  
> *You hire the person who you want to sell it to because there is, to be honest, no other way around.*  
> <span class="qm">—— Ayush Bhardwaj · [11:57]</span> ^q6

> <span class="qz">那些在自己试图颠覆的行业里摸爬滚打到顶层的人，他们的判断现在正在变成智能体。</span>  
> *So the person who sort of has lived to the complete of the industry that they're trying to revolutionize, their judgment is now turning into agents.*  
> <span class="qm">—— Ayush Bhardwaj · [13:46]</span> ^q7

> <span class="qz">每个 AI 都能到达生产环境，只是它没能跑起来，或者没能证明自身的成本合理。</span>  
> *Every AI reaches production, but it just fails to work or justify its own cost.*  
> <span class="qm">—— Ayush Bhardwaj · [16:37]</span> ^q8

> <span class="qz">它必须一落地就能跑。如果不能，立刻请出门。</span>  
> *It has to hit the ground running. And if it does not, show on the road instantly.*  
> <span class="qm">—— Ayush Bhardwaj · [17:02]</span> ^q9

> <span class="qz">模型、基础设施、生态系统，这个大会上向你推销一大堆东西的每个人，都只是大宗商品。</span>  
> *Model, infra, ecosystem, everyone selling you tons of stuff at this conference is just commodity.*  
> <span class="qm">—— Ayush Bhardwaj · [19:10]</span> ^q10

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2025-09-25-lennys-why-ai-evals-are-the-hottest-new-skill|做 evals 不是写单元测试，是从看数据开始的错误分析]]<span class="pd-rz">同概念:LLM 当裁判 (LLM as a judge)、智能体 (agent)、错误分析 (error analysis)</span>
- [[2026-08-13-talks-how-unify-cut-its-ai-agent-costs-95-in-t|9亿美元管道背后:Unify CTO 谈怎么把销售智能体的成本打下来]]<span class="pd-rz">同概念:human in the loop、LLM 当裁判 (LLM as a judge)、智能体 (agent)</span>
- [[2026-09-07-twentyvc-20vc-the-100-billion-ai-assistant-race-t|邮箱里的 AI 助手：Plaid 前 CTO 谈如何在巨头围剿下赢]]<span class="pd-rz">同公司:ChatGPT、Claude · 同概念:护城河 (moat)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:可观测性 (observability)、提示词 (prompt)、智能体 (agent)</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同公司:ChatGPT · 同概念:提示词 (prompt)、智能体 (agent)</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同公司:ChatGPT · 同概念:护城河 (moat)、智能体 (agent)</span>

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
