---
title: "一千人公司里的五人小队:Eddie Kim 怎么用 Claude Code 花10周造出 Gusto Co-Founder"
podcast: "Lenny's Podcast"
date: 2026-07-20
source_url: https://www.lennysnewsletter.com/p/no-figma-no-jira-no-docs-how-gusto
duration: "51:49"
type: episode
cover: "#6366f1"
image: "/covers/2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto.jpg"
description: "Gusto 联合创始人 Eddie Kim 讲述他用 4 个工程师加 1 个设计师,靠永久 Zoom 和 Claude Code 砍掉所有文档,10 周造出 Co-Founder 的全过程。"
host: "[[Claire Vo]]"
cohosts: ["[[Eddie Kim]]"]
companies: ["[[Gusto]]"]
concepts: ["[[联合创始人]]", "[[vibe coding]]", "[[永久 Zoom]]", "[[智能体]]", "[[垃圾桶法]]", "[[Cloudflare Worker]]", "[[Vercel AI SDK]]", "[[Claude Code]]"]
category: AI 编程
tags:
  - AI 编程
  - 产品方法
socialImage: "https://talk.solomind.cc/covers/2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto#post","headline":"一千人公司里的五人小队:Eddie Kim 怎么用 Claude Code 花10周造出 Gusto Co-Founder","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto","mainEntityOfPage":"https://talk.solomind.cc/2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto","description":"Gusto 联合创始人 Eddie Kim 讲述他用 4 个工程师加 1 个设计师,靠永久 Zoom 和 Claude Code 砍掉所有文档,10 周造出 Co-Founder 的全过程。","datePublished":"2026-07-20","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto.jpg","isBasedOn":"https://www.lennysnewsletter.com/p/no-figma-no-jira-no-docs-how-gusto","about":[{"@type":"Person","name":"Claire Vo"},{"@type":"Person","name":"Eddie Kim"},{"@type":"Organization","name":"Gusto"},{"@type":"Thing","name":"联合创始人 (co-founder)"},{"@type":"Thing","name":"vibe coding"},{"@type":"Thing","name":"永久 Zoom (perma-zoom)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"垃圾桶法 (trashcan method)"},{"@type":"Thing","name":"Cloudflare Worker"},{"@type":"Thing","name":"Vercel AI SDK"},{"@type":"Thing","name":"Claude Code"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"一千人公司里的五人小队:Eddie Kim 怎么用 Claude Code 花10周造出 Gusto Co-Founder","item":"https://talk.solomind.cc/2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>一千人公司里的五人小队:Eddie Kim 怎么用 Claude Code 花10周造出 Gusto Co-Founder</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 一千人公司里的五人小队:Eddie Kim 怎么用 Claude Code 花10周造出 Gusto Co-Founder

<div class="pd-byl"><b>Eddie Kim</b> · Gusto CTO · 2026-07-20</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我现在称之为软件工程的垃圾桶法,在那里你实际上可以丢弃所有代码,就像开始一个 slash V2 分支并从头开始重建它。</div><div class="a">— Claire Vo <button class="pd-ts" data-t="00:57" data-who="Claire Vo" data-en="I call this the trashcan method of software engineering right now, where you can actually trash all the code, start like a slash V2 branch and rebuild it from scratch." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Claire Vo]] · [[Eddie Kim]]
>
> **公司** [[Gusto]]
>
> **概念** [[联合创始人]] · [[vibe coding]] · [[永久 Zoom]] · [[智能体]] · [[垃圾桶法]] · [[Cloudflare Worker]] · [[Vercel AI SDK]] · [[Claude Code]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/no-figma-no-jira-no-docs-how-gusto)

一家一千多人的公司,四名工程师加一名设计师,不用技术规格、不用 Figma、不开站会——十天半个月交付了一条全新的产品线。这事 [[Gusto|Gusto]] 的联合创始人 [[Eddie Kim|Eddie Kim]] 真做出来了,他说靠的是一句指令就能跑起来的 [[Claude Code|Claude Code]],以及一种把好代码直接丢进垃圾桶的底气 <button class="pd-ts" data-t="00:29" data-who="Eddie Kim" data-en="It's really not that scary and complicated. Co-founder was primarily built by five folks over the course of 10 weeks from initial idea, zero code to a tier one launch at Gusto." aria-label="回原文"></button>。

这是 How I AI 播客的一集,主持人 [[Claire Vo|Claire Vo]] 请来了 Gusto 的 CTO 兼联合创始人 Eddie Kim。Gusto 是一家做薪资和人力资源服务的公司。

这一集里,Eddie 完整复盘了他怎么带着五个人在十周内造出 Gusto [[联合创始人|Co-Founder]] 这个[[智能体|智能体]]产品。你会听到四块内容:这个产品怎么从一次航班的五小时延误里偶然诞生;他们怎么把传统开发流程里的文档、会议、排期全砍掉;一个原本不写代码的设计师怎么成了团队里代码产出前百分之六的「奇才」;以及作为高管,该怎么带头下场,自己用 AI 工具去造生产级的代码。

说起这个产品的起点,Eddie 讲了一个特别有意思的细节。二月份他从马德里飞旧金山,在伦敦转机,前一趟航班延误,刚好错过下一趟,硬生生在机场多待了五个小时 <button class="pd-ts" data-t="05:15" data-who="Eddie Kim" data-en="of just came about because I was actually on vacation in February and I was flying back from Madrid my flight had a layover in London and the flight from Madrid to London was delayed" aria-label="回原文"></button>。

这五个小时里,他掏出电脑,用当时刚开始流行的 Cloud Code(一种凭感觉编程的工具),把脑子里酝酿已久的一个想法直接写出了原型。等飞机落地旧金山,他已经拿着一个能用的演示版本了 <button class="pd-ts" data-t="06:31" data-who="Eddie Kim" data-en="with it. And by the time I had actually landed in San Francisco, I had this like prototype of what ultimately became Gusto co-founder." aria-label="回原文"></button>。

主持人 Claire 顺势抛出一个观察:她身边好几个朋友,都是在休育儿假或者长途飞行的时候,用 AI 编程工具做出了惊人成果 <button class="pd-ts" data-t="07:18" data-who="Claire Vo" data-en="Just a little bit more time off. Parental leave and long flights. That is where I have heard the vibe coding magic happens over and over again." aria-label="回原文"></button>。这背后的逻辑其实很直白——只要给技术人一段不开会、不被打断的整块时间,他们就能靠这些新工具,把产品往前推一大步。

这段孤军奋战的假期搞出了原型,但真正变成产品,还得靠团队。接下来就是 Eddie 怎么把这五个人攒到一起的。

三月份公司有个叫 Anchor Week 的季度聚会,高级主管和资深技术骨干会在丹佛办公室碰头 <button class="pd-ts" data-t="09:15" data-who="Eddie Kim" data-en="That's pretty cool. And then so we have at our company this thing called Anchor Week, which happens quarterly. We all like kind of the senior leaders and senior ICs across the company," aria-label="回原文"></button>。Eddie 把几个对这个想法感兴趣的资深工程师和设计师叫到一个屋子里,在白板上画了一版粗糙的界面草图。这块白板,成了整个十周开发过程里,团队产出的唯一一份「文档」 <button class="pd-ts" data-t="11:05" data-who="Eddie Kim" data-en="And that whiteboard, which I took a photo of, was like literally the only documentation that we ever produced" aria-label="回原文"></button>。

Eddie 对这套流程最自豪的,反而是他们「没做」的事。这五个人砍掉了所有传统开发流程里的标配:没有技术规格文档,没有 Figma 设计稿,不用 Jira(一种追踪任务的软件)看板,不开站会,也不开项目回顾会 <button class="pd-ts" data-t="10:10" data-who="Eddie Kim" data-en="by like what we didn't do versus what we did we actually just zeroed everything out we had no meetings we had no tech specs We had no figmas." aria-label="回原文"></button>。

整个团队唯一的「基础设施」,就是一个全天候挂着的[[永久 Zoom|永久 Zoom]] 会议。大家平时就挂着这个会议,有人喜欢在里面静静干活,有人遇到问题就随时跳进来找人讨论 <button class="pd-ts" data-t="10:27" data-who="Eddie Kim" data-en="We had nothing. The only thing we decided to keep was a 24-7 perma-zoom, which is basically a Zoom room that we just keep because everybody's remote" aria-label="回原文"></button>。

没有文档和会议,那产品决策怎么做?Eddie 的方法是「[[垃圾桶法|垃圾桶法]]」:写代码的成本已经被 AI 拉得极低,所以遇到犹豫要不要做的功能,直接让 Cloud Code 写一版完整的代码,提交一个准备好评审的拉取请求,然后团队在 Zoom 里讨论:这到底是不是我们要的?

如果不是,立刻关掉删掉 <button class="pd-ts" data-t="13:27" data-who="Eddie Kim" data-en="the team how did you approach product decisions across this team of five yeah I would say everybody was kind of a product manager we would We would build features and we would go in that permazoom and sort of share it with each other." aria-label="回原文"></button>。主持人 Claire 非常认同这个做法,她进一步把这个思路拆成了两种模式:一种是通过 PR 来验证单个小功能,另一种是 V1 版本上线收到反馈后,干脆把整个代码库丢掉,从零开始写 V2 版本。因为 AI 让写代码的边际成本变得太低,这种「推倒重来」在经济上完全划算 <button class="pd-ts" data-t="14:50" data-who="Claire Vo" data-en="And whereas I think you couldn't do that, you know, six months ago. Yeah, I call this the trashcan method of software engineering right now where you build code and you're like actually literally OK with throwing it in" aria-label="回原文"></button>。

说完了这套「没有规矩的规矩」,接下来是这套流程里最硬核的技术细节。Eddie 坦言,这个智能体产品的技术栈简单到让人难以置信。

他们只用了 [[Cloudflare Worker|Cloudflare Worker]](一种云端无服务器运行环境)来跑智能体的主循环,再加上 [[Vercel AI SDK|Vercel AI SDK]](一个开发套件),就没有别的了 <button class="pd-ts" data-t="17:44" data-who="Eddie Kim" data-en="that architecture our stack is surprisingly simple we build on we use cloudflare worker for the actual agent loop and versell ai sdk that's it we don't have any other harness on top of" aria-label="回原文"></button>。主持人 Claire 自己也是开发智能体的,她补了一句大实话:别被「构建智能体」这个词吓到,它本质上就是一个跑在云端、能查文件、能用工具的 SDK,随时可以换底层的语言模型,真没那么玄乎 <button class="pd-ts" data-t="18:39" data-who="Claire Vo" data-en="So it's good to hear that, you know, people get really intimidated by the idea of building an agent. And I'm like, literally, it's an agent SDK running somewhere in the cloud." aria-label="回原文"></button>。

既然连技术栈都这么简单,那开发流程是不是也该变变?接下来就是这套打法最反常识的地方:让设计师去写生产环境的代码。

团队里的设计师 Katie,开始时只是用一个假的、写死响应的纯前端页面放到生产环境里当占位符。接着,工程师并行开发真正的后台功能,再一点点把这个「假骨架」替换成真实运转的代码,像雕琢大理石一样逐渐成形 <button class="pd-ts" data-t="20:10" data-who="Eddie Kim" data-en="a piece of art over time and we're doing that in production in place so one of the really cool things that we did which I would highly recommend is Katie our designer she actually shipped started" aria-label="回原文"></button>。

Eddie 拿团队的代码统计工具一查,结果让人大跌眼镜:这位没有任何软件工程背景的设计师,在过去三个月里的代码产出量,在整个一千人的研发组织里排在前百分之六 <button class="pd-ts" data-t="22:37" data-who="Eddie Kim" data-en="into this incredible engineer And I was just looking at our PR stats, which we use this tool called DX for it. She, across our entire R&amp;D org," aria-label="回原文"></button>。Eddie 专门去问了 Katie 怎么做到的。

Katie 的回答很简单:一是自己本身对技术好奇,二是团队里有三四个工程师愿意花时间,坐在她旁边,教她怎么给 AI 写提示词,教她怎么判断 AI 生成的代码好坏 <button class="pd-ts" data-t="23:18" data-who="Eddie Kim" data-en="And her answer was basically twofold. One is that she's not an engineer, she's not a software developer," aria-label="回原文"></button>。Eddie 强调,很多工程师觉得指导非技术人员写代码是拖慢进度,但只要短期投点资,这种做法的长期回报极其惊人 <button class="pd-ts" data-t="24:08" data-who="Eddie Kim" data-en="and yeah that's true in the short term but like now I think once you make that investment you have a support event software developer around her or any designer I think dividends dividends pay off really really quickly this makes" aria-label="回原文"></button>。

Claire 对此深有感触,她建议所有工程团队:把审查非工程师提交的 PR,放到和审查工程师 PR 一样高的优先级上 <button class="pd-ts" data-t="25:12" data-who="Claire Vo" data-en="to their non-engineering partners and this is a stress test I give to a lot of teams because I hear a lot of teams being really overwhelmed by code review" aria-label="回原文"></button>。Eddie 透露,这个小团队拉取请求的中位审查时间,只有九分钟 <button class="pd-ts" data-t="26:05" data-who="Eddie Kim" data-en="And our priority has always been PR reviews. I think we did an analysis and I think our median PR review time was nine minutes. On this team?" aria-label="回原文"></button>。

聊完了具体的团队和技术,最后还有两个高管们最关心的话题。既然要推广这种新做法,就得面对一个现实问题:普通员工没有联合创始人的特权,怎么给他们「破坏规矩」的底气?

Eddie 坦承,自己作为高管,天然就有权打破公司既有的流程;但如果是其他团队想这么干,领导者必须主动、明确地给他们授权,甚至要下死命令:如果你们在这个项目里写了文档或者画了 Figma,反而要挨批 <button class="pd-ts" data-t="41:25" data-who="Eddie Kim" data-en="difference here that like applies to this particular project that may not apply to others. Right. And it's," aria-label="回原文"></button>。Claire 还分享了她听过的最极端的实验:Coinbase 的一个工程团队直接禁止工程师碰 AI 生成的代码,只能修改输入的提示词,以此逼迫大家适应新的工作方式 <button class="pd-ts" data-t="42:37" data-who="Claire Vo" data-en="Yeah. This reminds me of what my friend Chinton at Coinbase did is he actually, he does these extreme experiments with his engineering team." aria-label="回原文"></button>。

> 【背景】Coinbase 是一家知名的加密货币交易平台。

第二个话题是给所有高管的硬核建议:别再只做战略规划了,必须亲自下场写代码。Eddie 在这十周里,几乎是进入了全职写代码的状态,自己的代码产出量也排进了全公司的前百分之九十五 <button class="pd-ts" data-t="46:30" data-who="Eddie Kim" data-en="in like merging real reviewed like high quality code and in my case I kind of took it to an extreme where I like went into almost icy mode for the past 10 weeks and I was like literally building I'm like 95th percentile on DDX" aria-label="回原文"></button>。

他说,高管如果只停留在做个原型给团队看,就会严重低估把一个产品真正做成生产级所需的工作量。Claire 也赞同:如果你自己不整天泡在 AI 工具里使用它,你根本做不好 AI 产品的战略。Eddie 还专门提到,Gusto Co-Founder 这个产品最核心的灵感——跨平台通过 SMS 和 Slack 与用户交互——就是他自己在家折腾 OpenClaw(一种个人 AI 智能体)时,切身感受到多渠道通信的巨大威力才悟出来的 <button class="pd-ts" data-t="47:49" data-who="Eddie Kim" data-en="Yeah, I think so. One thing like that I'll disclose is that the original, original idea for Gusto co-founder came" aria-label="回原文"></button>。

> 【背景】OpenClaw 是用户可以在本地或家用设备上部署的个人 AI 智能体框架。

## 本集带走

最后收个尾,这一集值得带走的是几句话。第一,当写代码的成本被 AI 拉到足够低,文档和会议就成了拖慢进度的负担,试试用全天候的 Zoom 加直接丢进垃圾桶的 PR 来替代传统的开发流程。

第二,给非技术人员——比如设计师和产品经理——配 AI 工具和愿意带他们的工程师,他们能爆发出你想象不到的生产力。第三,作为高管,如果你想真正理解 AI 能做什么,做出正确的战略决策,就必须亲自下场,用这些工具去写、去改、去发布生产环境的代码。最后,不要让审批流程和季度规划毁了团队的热情,十个五人小队同时去试错,哪怕全军覆没,成本也远低于一次传统的失败立项,而一旦跑通一个,就能改变公司的轨迹。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">我现在称之为软件工程的垃圾桶法,在那里你实际上可以丢弃所有代码,就像开始一个 slash V2 分支并从头开始重建它。</span>  
> *I call this the trashcan method of software engineering right now, where you can actually trash all the code, start like a slash V2 branch and rebuild it from scratch.*  
> <span class="qm">—— Claire Vo · [00:57]</span> ^q1

> <span class="qz">我想我们的中位数 PR 审查时间是九分钟。</span>  
> *I think our median PR review time was nine minutes.*  
> <span class="qm">—— Eddie Kim · [26:06]</span> ^q2

> <span class="qz">也许文档是存在的,但它们是给智能体的,不是给人类的。</span>  
> *maybe docs exist, but they're for the agents, not for the humans.*  
> <span class="qm">—— Claire Vo · [44:19]</span> ^q3

> <span class="qz">如果你真的写了文档或做了 Figma,你会受到警告,因为我们明确不希望你们做那个,对</span>  
> *if you actually produce a doc or figma like you will get a slap on the wrist because we explicitly don't want you to do that right*  
> <span class="qm">—— Eddie Kim · [42:15]</span> ^q4

> <span class="qz">是时候让硬技能再次现身了,而不是领导力、感召力、对齐。</span>  
> *it's time for the hard skill to show up again, not leadership, inspiration, alignment.*  
> <span class="qm">—— Claire Vo · [47:03]</span> ^q5

> <span class="qz">即使你把这个乘以 10,即使那也不是一个千人在 R&D 公司的巨大投资。我想你可能会有两三个那样的,有意义地改变业务的轨迹。</span>  
> *even if you multiply this by 10, even that's not a big investment across a company of a thousand in R&D. You're going to have like two or three of those, I think, meaningfully change the trajectory of the business.*  
> <span class="qm">—— Eddie Kim · [36:14]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|SaaS 不会死,PM 迎来黄金期:Dan Shipper 的 AI 工作预测]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)、OpenClaw</span>
- [[2026-07-13-pg-the-complete-claude-stack-for-pms|产品经理驾驭 Claude 生态：用五层架构打造专属 AI 幕僚长]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)、vibe coding</span>
- [[2026-08-12-beyondcoding-wes-bos-how-developers-stand-out-when-ai|当所有人都在用智能体写代码，你靠什么脱颖而出：与 Wes 聊开发者的当下]]<span class="pd-rz">同概念:vibe coding、智能体 (agent)、Claude Code</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|把 AI 当员工来管理:Claire Vo 的九个智能体生活实战]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)、OpenClaw</span>
- [[2026-singju-openclaw-80apps|OpenClaw 创始人 Peter Steinberger：让智能体直接接管你的整台电脑]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)、OpenClaw</span>
- [[2025-07-03-lennys-ive-run-75-businesses-andrew-wilkinson|Andrew Wilkinson：别追咖啡馆，去找没人要的钓鱼洞]]<span class="pd-rz">同概念:vibe coding、智能体 (agent)</span>

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
