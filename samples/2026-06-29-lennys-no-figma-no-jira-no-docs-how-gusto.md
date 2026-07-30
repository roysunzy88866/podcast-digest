---
title: "Gusto CTO 的极简实验:5 人 10 周凭感觉编程造出 AI 产品"
podcast: "Lenny's Podcast"
date: 2026-06-29
source_url: https://www.lennysnewsletter.com/p/no-figma-no-jira-no-docs-how-gusto
duration: "51:49"
type: episode
cover: "#6366f1"
image: "/covers/2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto.jpg"
description: 大公司 CTO 用无文档、无会议、无 PM 的极简流程带 5 人团队开发新 AI 产品。
host: "[[Claire Vo]]"
cohosts: ["[[Eddie Kim]]"]
companies: ["[[Gusto]]"]
concepts: ["[[联合创始人]]", "[[vibe coding]]", "[[永久 Zoom]]", "[[智能体]]", "[[垃圾桶法]]", "[[Cloudflare Worker]]", "[[Vercel AI SDK]]", "[[Claude Code]]"]
category: AI 编程
tags:
  - AI 编程
  - 产品方法
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Gusto CTO 的极简实验:5 人 10 周凭感觉编程造出 AI 产品</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# Gusto CTO 的极简实验:5 人 10 周凭感觉编程造出 AI 产品

<div class="pd-byl"><b>Eddie Kim</b> · Gusto CTO</div>

<div class="pd-mt">2026-06-29 · Lenny's Podcast · 51:49</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们把一切都归零了。我们没有会议,没有技术规格,没有 Figma。我们没有用来追踪故事或工作的 Jira 看板。我们没有站会,没有回顾会。</div><div class="a">Eddie Kim · 10:08</div></div>

> [!info] 关联
> **人物** [[Claire Vo]] · [[Eddie Kim]]
>
> **公司** [[Gusto]]
>
> **概念** [[联合创始人]] · [[vibe coding]] · [[永久 Zoom]] · [[智能体]] · [[垃圾桶法]] · [[Cloudflare Worker]] · [[Vercel AI SDK]] · [[Claude Code]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/no-figma-no-jira-no-docs-how-gusto)

<div class="pd-tldr"><b>一句话</b>大公司 CTO 用无文档、无会议、无 PM 的极简流程带 5 人团队开发新 AI 产品。</div>

本集嘉宾是 [[Eddie Kim|Eddie Kim]],[[Gusto|Gusto]] 的 CTO 兼联合创始人。他在这家公司带领着上千人的研发团队,但他这次来分享的,是一个完全跳出常规管理框架的故事:他如何凭着一次航班延误时的直觉编程(指完全凭借人的直觉和感觉引导 AI 写代码,而不做细致规划),带着 4 个工程师和 1 个设计师,在短短 10 周内从零打造出了一条全新的 AI 产品线。整个对话将围绕这条主线展开:先看这套反常规的工作法(无文档、无会议、[[永久 Zoom|永久 Zoom]]),再听他们砍掉了哪些繁文缛节,接着剖析背后的极简技术栈,最后探讨这种模式对大团队和领导者的启发。

### 灵感与起点:航班延误催生的原型

故事始于二月份的一次度假返程。Eddie 从马德里飞回旧金山时,在伦敦转机航班延误,意外获得了一段长达五小时的机场停留时间 <button class="pd-ts" data-t="05:32" data-who="Eddie Kim" data-en="and I just barely missed my flight from London to San Francisco and I had this like five hour And I was like, hey, now I have like five hours to like waste." aria-label="回原文"></button>。他当时正在把玩 Cloud Code,于是掏出电脑,试图把脑海里酝酿已久的一个产品想法具象化。等他落地旧金山时,这个最终演变为 Gusto [[联合创始人|Co-Founder]](联合创始人版,一款 AI [[智能体|智能体]]助手)的产品原型已经初步成型 <button class="pd-ts" data-t="06:31" data-who="Eddie Kim" data-en="with it. And by the time I had actually landed in San Francisco, I had this like prototype of what ultimately became Gusto co-founder." aria-label="回原文"></button>。

拿着这个原型,他找到了几位经常交流的资深工程师和设计师 Katie,简单碰头后,他们决定在一个名为 Anchor Week 的季度内部聚会(在丹佛办公室)上,用一块白板把产品形态画出来 <button class="pd-ts" data-t="09:33" data-who="Eddie Kim" data-en="This particular one was in March in Denver, Colorado, in our office up there. And so we just reserved a room that Thursday, I think it was like March 20th or something like that." aria-label="回原文"></button>。有意思的是,如今上线的 Co-Founder 产品的核心概念,竟然与当时白板上的潦草涂鸦惊人地一致——包括任务、任务运行产生的图表和文档资产,以及聊天和建议任务等功能 <button class="pd-ts" data-t="12:22" data-who="Eddie Kim" data-en="and that's exactly what we have in CoFounder today. We have assets, so tasks runs can produce these charts or documents or markdown files. We call those in this whiteboard here assets, but eventually those got renamed to artifacts." aria-label="回原文"></button>。

> 【背景】Gusto 是一家主打薪资发放和人力资源服务的知名科技公司。在本集提到的 Co-Founder 是他们新推出的 AI 助手产品。

### 颠覆常规:无文档、无会议,只留一个 24 小时 Zoom

白板画完后,真正的开发过程更是颠覆了传统大公司的做法。Eddie 团队最大的特点是由「他们没做的事」来定义的:没有会议、没有技术规格文档、没有 Figma 设计稿、没有用来追踪进度的 Jira 看板,甚至连每日站会和复盘会都没有 <button class="pd-ts" data-t="10:10" data-who="Eddie Kim" data-en="by like what we didn't do versus what we did we actually just zeroed everything out we had no meetings we had no tech specs We had no figmas." aria-label="回原文"></button>。整个 10 周期间,他们产出的唯一文档就是那张白板的照片。

他们唯一保留的协作机制,是一个 24 小时全天候开着的永久 Zoom(一个随时保持开启的 Zoom 视频会议室) <button class="pd-ts" data-t="10:27" data-who="Eddie Kim" data-en="We had nothing. The only thing we decided to keep was a 24-7 perma-zoom, which is basically a Zoom room that we just keep because everybody's remote" aria-label="回原文"></button>。大家远程办公,谁有需要就进去找人,或者干脆在里面待一天安静写代码。由于没有项目经理的角色,团队五个人人人都是 PM。他们的决策方式极其干脆:写完一个功能,丢到永久 Zoom 里讨论,有意义就当场代码审查并合并,没意义就直接删掉 <button class="pd-ts" data-t="13:27" data-who="Eddie Kim" data-en="the team how did you approach product decisions across this team of five yeah I would say everybody was kind of a product manager we would We would build features and we would go in that permazoom and sort of share it with each other." aria-label="回原文"></button>。

这种做法的底层逻辑是:写代码的成本已经低到可以忽略不计。主持人 [[Claire Vo|Claire Vo]] 将其称为「[[垃圾桶法|垃圾桶法]]」——如果你觉得一段功能代码写得不对,甚至不用费劲去修补,直接全删掉、另起一个 V2 分支从头再来,在商业成本上也完全划得来 <button class="pd-ts" data-t="14:50" data-who="Claire Vo" data-en="And whereas I think you couldn't do that, you know, six months ago. Yeah, I call this the trashcan method of software engineering right now where you build code and you're like actually literally OK with throwing it in" aria-label="回原文"></button>。Eddie 分享了一个真实案例:他最初在机场写出的原型其实是他的心血,但当工程师建议用 TypeScript 重写时,他虽然不舍,还是同意删掉自己的代码从头开始,事后证明这是最正确的决定 <button class="pd-ts" data-t="15:43" data-who="Eddie Kim" data-en="The cost of the code just is is so low. Yeah, I have a funny story about that because this prototype that I brought to the team," aria-label="回原文"></button>。

### 极简技术栈与就地雕刻法

对于如何构建智能体产品,许多人觉得高深莫测,但 Eddie 团队的技术栈简单得令人咋舌:他们只用 [[Cloudflare Worker|Cloudflare Worker]](一种在云端运行的轻量级代码执行环境)来跑实际的智能体循环,再加上 [[Vercel AI SDK|Vercel AI SDK]](一套帮助快速搭建 AI 应用的工具包),仅此而已 <button class="pd-ts" data-t="17:44" data-who="Eddie Kim" data-en="that architecture our stack is surprisingly simple we build on we use cloudflare worker for the actual agent loop and versell ai sdk that's it we don't have any other harness on top of" aria-label="回原文"></button>。Eddie 强调,以前大家觉得做 AI 需要复杂的记忆或规划框架,但对他们来说,所谓「记忆」不过就是一个往数据库里写数据的简单工具。复杂的脚手架已经不再需要了 <button class="pd-ts" data-t="18:15" data-who="Eddie Kim" data-en="you know, memory to us is a tool that writes to a database column called memory. And that simple, right? Everything is just like all the harnesses and things that we used to build like to" aria-label="回原文"></button>。

> 【背景】主持人 Claire Vo 提到 Anthropic 的 Claude Code(一款强大的命令行 AI 编程助手),并分享了她个人的提示词策略:当 AI 跑偏时,比起生硬命令,礼貌且留有余地的提示词能鼓励 AI 提出更好的反驳建议 <button class="pd-ts" data-t="50:04" data-who="Eddie Kim" data-en="if this is true but I think there's a actual like practical benefit of it I find that AI is so deferential and it just kind of like defaults to doing what you want" aria-label="回原文"></button>。

在具体的产品打磨上,他们采用了一种「就地雕刻」的开发模式。设计师 Katie 会先用纯前端代码搭一个带有假数据的界面,并直接发布到真实的线上环境中(隐藏在功能开关后) <button class="pd-ts" data-t="20:12" data-who="Eddie Kim" data-en="the really cool things that we did which I would highly recommend is Katie our designer she actually shipped started shipping to production like a faked experience essentially so it had like the UI" aria-label="回原文"></button>。随后,工程师在后台并行构建真实的数据模型和智能体循环。随着代码推进,原本写死的假数据会被逐渐替换成真实的业务响应。就像雕刻家对着一块大理石一点点凿出艺术品,他们是在线上的真实环境里,把一个粗糙的演示原型一点点「唤醒」成成熟的产品。

这种对生产环境的极度拥抱,带来了一种奇特的「设计师变开发者」现象。设计师 Katie 在这种模式下爆发出惊人的战斗力。据 Eddie 透露,在使用 DX(一款工程效率分析工具)统计的全公司代码合并吞吐量中,Katie 位居第 94 百分位——这意味着她超越了公司绝大多数受过专业训练的工程师 <button class="pd-ts" data-t="22:45" data-who="Eddie Kim" data-en="She, across our entire R&amp;D org, she is in the 94th percentile of true throughput, which is a measure of like how many PRs you're landing into production." aria-label="回原文"></button>。她的秘诀在于对技术的好奇心,以及一个极度包容的工程师团队:工程师们愿意花时间与她结对编程、审查她的代码,而不是抱怨「非技术人员写代码拖慢了进度」。团队甚至将非工程人员的 PR(拉取请求,提交代码修改的申请)审查时间中位数硬生生控制在了 9 分钟 <button class="pd-ts" data-t="26:05" data-who="Eddie Kim" data-en="And our priority has always been PR reviews. I think we did an analysis and I think our median PR review time was nine minutes. On this team?" aria-label="回原文"></button>。

### 从 Demo 到落地:真实业务的打通

说完了开发模式,接下来看看他们到底做出了什么。在直播演示中,Eddie 展示了 Co-Founder 与传统 Gusto 软件(被戏称为 Gusto 经典版)的联动。它不仅拥有接入 Gusto 底层数据的智能体,更重要的是,它支持通过 SMS 短信或 Slack 直接与用户对话 <button class="pd-ts" data-t="30:30" data-who="Eddie Kim" data-en="not just through the web, but actually we want people to primarily talk to it through SMS or or Slack, actually." aria-label="回原文"></button>。这对于随时奔波在手机端的小企业主来说极具实用性。

一个真实的客户案例是一家纽约的按摩水疗中心。老板每周需要从排班软件 MindBody 导出数据,手动在表格里计算每位按摩师 60 分钟与 90 分钟按摩的单量、热石疗法或 CBD 油的提成,还要把集中起来的小费拆算给每个人,最后再人工把这些结果录入 Gusto 发工资 <button class="pd-ts" data-t="32:26" data-who="Eddie Kim" data-en="But I want to show something that's a little bit more interesting and more complex. So this actually came from a real customer and this particular customer that we have is a massage spa." aria-label="回原文"></button>。Eddie 在 Co-Founder 中通过连接器接入了表格,只需用自然语言告诉 AI 提成规则(比如「每推销一次热石加 15 美元」),AI 就会自动拉取数据、完成计算、更新系统,并在最后一步征询确认后提交 payroll(薪资发放) <button class="pd-ts" data-t="34:00" data-who="Eddie Kim" data-en="So I wrote here like, hey, Gusto Co-Founder, I need you to run my payroll. Look at this spreadsheet that's called Export from MindBody. and here's how I calculate it you know for every hot stone upsell add $15 a bonus" aria-label="回原文"></button>。这把繁琐的「前置工作」彻底自动化了。

> 【背景】Eddie 提到他在做 Co-Founder 之前,曾受到 OpenClaw 的启发(这是一款需要自行部署本地硬件的开源个人智能体)。他发现这玩意儿虽然理念震撼,但购买硬件、自行配置的门槛极高。正是这种切身体验,促使他把 Co-Founder 做成全云端运行,并把短信变成了第一交互入口 <button class="pd-ts" data-t="47:49" data-who="Eddie Kim" data-en="Yeah, I think so. One thing like that I'll disclose is that the original, original idea for Gusto co-founder came" aria-label="回原文"></button>。

### 领导者的觉悟:撸起袖子下场写生产代码

模式跑通了,但这对于 Gusto 这样上千人的大团队意味着什么?Eddie 坦言,这种「无法无天」的做法之所以能成,很大程度上是因为他联合创始人的特殊身份——他有特权打破公司定下的规章制度。如果是普通团队敢跳过文档和设计稿,早就被警告了 <button class="pd-ts" data-t="41:30" data-who="Eddie Kim" data-en="as one of the company's co-founder was, was part of this. Right. So I had like kind of the permission to, you know, break all the rules that we created at Gusto." aria-label="回原文"></button>。因此,要在全公司推广,领导者不能仅仅口头授权,必须下达极其明确的指令:不仅允许大家用这种方式,甚至要明令禁止他们产出文档或 Figma。

Claire 对此深表赞同,并提到了一个极端的管理实验:要求工程师删掉本地的 IDE(代码编辑器),或者规定工程师不许碰 AI 生成的代码,只能通过修改输入提示词来调整结果 <button class="pd-ts" data-t="42:37" data-who="Claire Vo" data-en="Yeah. This reminds me of what my friend Chinton at Coinbase did is he actually, he does these extreme experiments with his engineering team." aria-label="回原文"></button>。

最后,对于高管和领导者,Eddie 给出了最核心的建议:不要只停留在拿 AI 做原型来给团队提需求的阶段,必须亲自下场,去合并真正经过审查的生产级代码。Eddie 自己在过去三个月里,一直保持在全公司工程产出排名的第 95 百分位。他要通过亲身走完开发的全流程,来证明自己不是在站着说话不腰疼 <button class="pd-ts" data-t="46:20" data-who="Eddie Kim" data-en="So I think my advice is don't just stop there if you're a leader right actually be hands-on in like merging real reviewed like high quality code and in my case I kind" aria-label="回原文"></button>。

Claire 补充道,这是对所有高管的硬技能大考:在这个时代,如果不把所有时间花在亲自使用和构建 AI 产品上,就无法真正理解它的能力边界,所谓的「AI 产品战略」只能是纸上谈兵 <button class="pd-ts" data-t="47:00" data-who="Claire Vo" data-en="This is just the moment where everybody has to be hands-on. And I tell a lot of executives like, sorry, bud, it's time for the hard skill to show up again," aria-label="回原文"></button>。

## 本集带走
1. **代码成本归零重塑流程**:当写代码的成本降到极低时,传统的文档和排期管理可以被「垃圾桶法」取代(直接全删重写)。用 24 小时 Zoom 替代各种会议,让代码本身成为讨论的载体。
2. **拥抱非工程人员的代码**:给非技术人员(如设计师)提供耐心审查其代码的工程文化,能释放出惊人的生产力,他们的产出效率甚至可能超过大部分职业工程师。
3. **高管必须下场:沉浸式下场**。领导者不能只拿 AI 写 Demo,必须去亲自维护生产级代码。只有亲历从原型到上线的全部痛苦,才能制定出贴合现实的 AI 产品策略。

<div class="pd-sec">全部金句 <span>8 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">我们把一切都归零了。我们没有会议,没有技术规格,没有 Figma。我们没有用来追踪故事或工作的 Jira 看板。我们没有站会,没有回顾会。</span>  
> *just zeroed everything out we had no meetings we had no tech specs we had no figmas. we had no JIRA board where we track stories or tracked work. We had no stand-ups, no retros.*  
> <span class="qm">—— Eddie Kim · [10:08]</span> ^q1

> <span class="qz">我认为你必须去这些团队并说,我们希望你们以这种方式工作,你们不做任何文档,不做 Figma,不做技术规格。</span>  
> *I think you actually have to go to these teams and say, we want you to work in this way, where you don't do any docs, no figmas, no tech specs.*  
> <span class="qm">—— Eddie Kim · [41:53]</span> ^q2

> <span class="qz">如果你真的写了文档或做了 Figma,你会受到警告,因为我们明确不希望你们做那个</span>  
> *if you actually produce a doc or figma like you will get a slap on the wrist because we explicitly don't want you to do that*  
> <span class="qm">—— Eddie Kim · [42:15]</span> ^q3

> <span class="qz">我认为如果你现在没有把所有时间都用来使用 AI 产品,就很难构建出优秀的 AI 产品。</span>  
> *I think it's very hard to build great AI products if you are not spending all your time using AI products right now.*  
> <span class="qm">—— Claire Vo · [47:24]</span> ^q4

> <span class="qz">即便这样,对于一家拥有上千名研发人员的公司来说,这也不是一笔大投资。我认为,只要有两三个这样的项目,就能有意义地改变企业的轨迹。</span>  
> *even that's not a big investment across a company of a thousand in R&D. You're going to have like two or three of those, I think, meaningfully change the trajectory of the business.*  
> <span class="qm">—— Eddie Kim · [36:17]</span> ^q5

> <span class="qz">平均而言,你们工程团队的 PR 是否比非工程团队的 PR 得到更快的审查?全面的人们都说是的,当然是。这是一个反模式,你需要优先审查这些非工程的 PR,就像你审查工程 PR 一样高</span>  
> *on average is your engineering teams PRS getting faster review than their non-engineering teams PRS and like across the board people are like yeah of course they are like that is an anti-pattern you need to prioritize reviewing these non-engineering PRS just as high as you do your engineering ones*  
> <span class="qm">—— Claire Vo · [25:24]</span> ^q6

> <span class="qz">你不要碰 agent 代码的输出。你只能碰输入。你只能重新提示。你不能重写代码。</span>  
> *you don't touch the outputs of agent code. You only get to touch the inputs. You only get to reprompt. You don't get to rewrite the code.*  
> <span class="qm">—— Claire Vo · [42:56]</span> ^q7

> <span class="qz">这其实是一个很有趣的模型,也许文档是存在的,但它们是给智能体的,不是给人类的。</span>  
> *And that's actually a very interesting model where maybe docs exist, but they're for the agents, not for the humans.*  
> <span class="qm">—— Claire Vo · [44:15]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|Dan Shipper 的未来工作预测：别等 AI 末日，用 Codex 重塑一切]] —— 同概念:Claude Code、智能体 (agent)、OpenClaw
- [[2026-07-13-pg-the-complete-claude-stack-for-pms|PM 如何用 Claude 把生产力提升 10 倍：全栈实战]] —— 同概念:Claude Code、智能体 (agent)、vibe coding
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」]] —— 同概念:Claude Code、智能体 (agent)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得]] —— 同概念:Claude Code、智能体 (agent)、OpenClaw
- [[2026-singju-openclaw-80apps|OpenClaw创始人：为何80%的应用将消失]] —— 同概念:Claude Code、智能体 (agent)、OpenClaw
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Anthropic产品负责人Kat Wu：在AGI边缘做产品的PM生存指南]] —— 同概念:Claude Code、智能体 (agent)

</div>
</div>

*本集关键词:AI 产品开发 · 直觉编程 · 极简技术栈 · 高管下场 · 无文档工作法*

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
    ['.search','.readermode'].forEach(function(sel){ grab(sel,acts); });
    // 深浅色进右栏末尾 —— 但右栏在窄屏可能不显示,槽跟着一起没了。
    // 只在槽真的看得见时才搬进去,看不见就退回顶栏(🔒 #2:任何屏宽都得有入口)。
    var side=document.querySelector('.right.sidebar'), slot=null;
    if(side){
      slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      // 同上:槽是空的(:empty → display:none),要判**右栏**看不看得见
      if(!(side.offsetWidth || side.offsetHeight || side.getClientRects().length)) slot=null;
    }
    grab('.darkmode', slot || acts);
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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); }
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
