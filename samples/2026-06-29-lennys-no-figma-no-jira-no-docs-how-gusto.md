---
title: "Gusto CTO 的极简实验:5 人 10 周凭感觉编程造出 AI 产品"
podcast: "Lenny's Podcast"
date: 2026-06-29
source_url: https://www.lennysnewsletter.com/p/no-figma-no-jira-no-docs-how-gusto
duration: "51:49"
host: "[[Claire Vo]]"
cohosts: ["[[Eddie Kim]]"]
companies: ["[[Gusto]]"]
concepts: ["[[联合创始人]]", "[[vibe coding]]", "[[永久 Zoom]]", "[[智能体]]", "[[垃圾桶法]]", "[[Cloudflare Worker]]", "[[Vercel AI SDK]]", "[[Claude Code]]"]
tags:
  - AI 产品开发
  - 直觉编程
  - 极简技术栈
  - 高管下场
  - 无文档工作法
---

# Gusto CTO 的极简实验:5 人 10 周凭感觉编程造出 AI 产品

> [!info] 关联
> **主持**:[[Claire Vo]]
>
> **联合主持**:[[Eddie Kim]]
>
> **涉及公司**:[[Gusto]]
>
> **概念**:[[联合创始人]] · [[vibe coding]] · [[永久 Zoom]] · [[智能体]] · [[垃圾桶法]] · [[Cloudflare Worker]] · [[Vercel AI SDK]] · [[Claude Code]]
>
> **来源**:[Lenny's Podcast](https://www.lennysnewsletter.com/p/no-figma-no-jira-no-docs-how-gusto)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

大公司 CTO 用无文档、无会议、无 PM 的极简流程带 5 人团队开发新 AI 产品。

本集嘉宾是 [[Eddie Kim|Eddie Kim]],[[Gusto|Gusto]] 的 CTO 兼联合创始人。他在这家公司带领着上千人的研发团队,但他这次来分享的,是一个完全跳出常规管理框架的故事:他如何凭着一次航班延误时的直觉编程(指完全凭借人的直觉和感觉引导 AI 写代码,而不做细致规划),带着 4 个工程师和 1 个设计师,在短短 10 周内从零打造出了一条全新的 AI 产品线。整个对话将围绕这条主线展开:先看这套反常规的工作法(无文档、无会议、[[永久 Zoom|永久 Zoom]]),再听他们砍掉了哪些繁文缛节,接着剖析背后的极简技术栈,最后探讨这种模式对大团队和领导者的启发。

### 灵感与起点:航班延误催生的原型

故事始于二月份的一次度假返程。Eddie 从马德里飞回旧金山时,在伦敦转机航班延误,意外获得了一段长达五小时的机场停留时间 [05:32 Eddie Kim]。他当时正在把玩 Cloud Code,于是掏出电脑,试图把脑海里酝酿已久的一个产品想法具象化。等他落地旧金山时,这个最终演变为 Gusto [[联合创始人|Co-Founder]](联合创始人版,一款 AI [[智能体|智能体]]助手)的产品原型已经初步成型 [06:31 Eddie Kim]。

拿着这个原型,他找到了几位经常交流的资深工程师和设计师 Katie,简单碰头后,他们决定在一个名为 Anchor Week 的季度内部聚会(在丹佛办公室)上,用一块白板把产品形态画出来 [09:33 Eddie Kim]。有意思的是,如今上线的 Co-Founder 产品的核心概念,竟然与当时白板上的潦草涂鸦惊人地一致——包括任务、任务运行产生的图表和文档资产,以及聊天和建议任务等功能 [12:22 Eddie Kim]。

> 【背景】Gusto 是一家主打薪资发放和人力资源服务的知名科技公司。在本集提到的 Co-Founder 是他们新推出的 AI 助手产品。

### 颠覆常规:无文档、无会议,只留一个 24 小时 Zoom

白板画完后,真正的开发过程更是颠覆了传统大公司的做法。Eddie 团队最大的特点是由「他们没做的事」来定义的:没有会议、没有技术规格文档、没有 Figma 设计稿、没有用来追踪进度的 Jira 看板,甚至连每日站会和复盘会都没有 [10:10 Eddie Kim]。整个 10 周期间,他们产出的唯一文档就是那张白板的照片。

他们唯一保留的协作机制,是一个 24 小时全天候开着的永久 Zoom(一个随时保持开启的 Zoom 视频会议室) [10:27 Eddie Kim]。大家远程办公,谁有需要就进去找人,或者干脆在里面待一天安静写代码。由于没有项目经理的角色,团队五个人人人都是 PM。他们的决策方式极其干脆:写完一个功能,丢到永久 Zoom 里讨论,有意义就当场代码审查并合并,没意义就直接删掉 [13:27 Eddie Kim]。

这种做法的底层逻辑是:写代码的成本已经低到可以忽略不计。主持人 [[Claire Vo|Claire Vo]] 将其称为「[[垃圾桶法|垃圾桶法]]」——如果你觉得一段功能代码写得不对,甚至不用费劲去修补,直接全删掉、另起一个 V2 分支从头再来,在商业成本上也完全划得来 [14:50 Claire Vo]。Eddie 分享了一个真实案例:他最初在机场写出的原型其实是他的心血,但当工程师建议用 TypeScript 重写时,他虽然不舍,还是同意删掉自己的代码从头开始,事后证明这是最正确的决定 [15:43 Eddie Kim]。

### 极简技术栈与就地雕刻法

对于如何构建智能体产品,许多人觉得高深莫测,但 Eddie 团队的技术栈简单得令人咋舌:他们只用 [[Cloudflare Worker|Cloudflare Worker]](一种在云端运行的轻量级代码执行环境)来跑实际的智能体循环,再加上 [[Vercel AI SDK|Vercel AI SDK]](一套帮助快速搭建 AI 应用的工具包),仅此而已 [17:44 Eddie Kim]。Eddie 强调,以前大家觉得做 AI 需要复杂的记忆或规划框架,但对他们来说,所谓「记忆」不过就是一个往数据库里写数据的简单工具。复杂的脚手架已经不再需要了 [18:15 Eddie Kim]。

> 【背景】主持人 Claire Vo 提到 Anthropic 的 Claude Code(一款强大的命令行 AI 编程助手),并分享了她个人的提示词策略:当 AI 跑偏时,比起生硬命令,礼貌且留有余地的提示词能鼓励 AI 提出更好的反驳建议 [50:04 Eddie Kim]。

在具体的产品打磨上,他们采用了一种「就地雕刻」的开发模式。设计师 Katie 会先用纯前端代码搭一个带有假数据的界面,并直接发布到真实的线上环境中(隐藏在功能开关后) [20:12 Eddie Kim]。随后,工程师在后台并行构建真实的数据模型和智能体循环。随着代码推进,原本写死的假数据会被逐渐替换成真实的业务响应。就像雕刻家对着一块大理石一点点凿出艺术品,他们是在线上的真实环境里,把一个粗糙的演示原型一点点「唤醒」成成熟的产品。

这种对生产环境的极度拥抱,带来了一种奇特的「设计师变开发者」现象。设计师 Katie 在这种模式下爆发出惊人的战斗力。据 Eddie 透露,在使用 DX(一款工程效率分析工具)统计的全公司代码合并吞吐量中,Katie 位居第 94 百分位——这意味着她超越了公司绝大多数受过专业训练的工程师 [22:45 Eddie Kim]。她的秘诀在于对技术的好奇心,以及一个极度包容的工程师团队:工程师们愿意花时间与她结对编程、审查她的代码,而不是抱怨「非技术人员写代码拖慢了进度」。团队甚至将非工程人员的 PR(拉取请求,提交代码修改的申请)审查时间中位数硬生生控制在了 9 分钟 [26:05 Eddie Kim]。

### 从 Demo 到落地:真实业务的打通

说完了开发模式,接下来看看他们到底做出了什么。在直播演示中,Eddie 展示了 Co-Founder 与传统 Gusto 软件(被戏称为 Gusto 经典版)的联动。它不仅拥有接入 Gusto 底层数据的智能体,更重要的是,它支持通过 SMS 短信或 Slack 直接与用户对话 [30:30 Eddie Kim]。这对于随时奔波在手机端的小企业主来说极具实用性。

一个真实的客户案例是一家纽约的按摩水疗中心。老板每周需要从排班软件 MindBody 导出数据,手动在表格里计算每位按摩师 60 分钟与 90 分钟按摩的单量、热石疗法或 CBD 油的提成,还要把集中起来的小费拆算给每个人,最后再人工把这些结果录入 Gusto 发工资 [32:26 Eddie Kim]。Eddie 在 Co-Founder 中通过连接器接入了表格,只需用自然语言告诉 AI 提成规则(比如「每推销一次热石加 15 美元」),AI 就会自动拉取数据、完成计算、更新系统,并在最后一步征询确认后提交 payroll(薪资发放) [34:00 Eddie Kim]。这把繁琐的「前置工作」彻底自动化了。

> 【背景】Eddie 提到他在做 Co-Founder 之前,曾受到 OpenClaw 的启发(这是一款需要自行部署本地硬件的开源个人智能体)。他发现这玩意儿虽然理念震撼,但购买硬件、自行配置的门槛极高。正是这种切身体验,促使他把 Co-Founder 做成全云端运行,并把短信变成了第一交互入口 [47:49 Eddie Kim]。

### 领导者的觉悟:撸起袖子下场写生产代码

模式跑通了,但这对于 Gusto 这样上千人的大团队意味着什么?Eddie 坦言,这种「无法无天」的做法之所以能成,很大程度上是因为他联合创始人的特殊身份——他有特权打破公司定下的规章制度。如果是普通团队敢跳过文档和设计稿,早就被警告了 [41:30 Eddie Kim]。因此,要在全公司推广,领导者不能仅仅口头授权,必须下达极其明确的指令:不仅允许大家用这种方式,甚至要明令禁止他们产出文档或 Figma。

Claire 对此深表赞同,并提到了一个极端的管理实验:要求工程师删掉本地的 IDE(代码编辑器),或者规定工程师不许碰 AI 生成的代码,只能通过修改输入提示词来调整结果 [42:37 Claire Vo]。

最后,对于高管和领导者,Eddie 给出了最核心的建议:不要只停留在拿 AI 做原型来给团队提需求的阶段,必须亲自下场,去合并真正经过审查的生产级代码。Eddie 自己在过去三个月里,一直保持在全公司工程产出排名的第 95 百分位。他要通过亲身走完开发的全流程,来证明自己不是在站着说话不腰疼 [46:20 Eddie Kim]。

Claire 补充道,这是对所有高管的硬技能大考:在这个时代,如果不把所有时间花在亲自使用和构建 AI 产品上,就无法真正理解它的能力边界,所谓的「AI 产品战略」只能是纸上谈兵 [47:00 Claire Vo]。

## 本集带走
1. **代码成本归零重塑流程**:当写代码的成本降到极低时,传统的文档和排期管理可以被「垃圾桶法」取代(直接全删重写)。用 24 小时 Zoom 替代各种会议,让代码本身成为讨论的载体。
2. **拥抱非工程人员的代码**:给非技术人员(如设计师)提供耐心审查其代码的工程文化,能释放出惊人的生产力,他们的产出效率甚至可能超过大部分职业工程师。
3. **高管必须下场:沉浸式下场**。领导者不能只拿 AI 写 Demo,必须去亲自维护生产级代码。只有亲历从原型到上线的全部痛苦,才能制定出贴合现实的 AI 产品策略。

## 金句(中英对照 · 过机器闸门三联校验)

> 我们把一切都归零了。我们没有会议,没有技术规格,没有 Figma。我们没有用来追踪故事或工作的 Jira 看板。我们没有站会,没有回顾会。  
> *just zeroed everything out we had no meetings we had no tech specs we had no figmas. we had no JIRA board where we track stories or tracked work. We had no stand-ups, no retros.*  
> —— Eddie Kim · [10:08] ^q1

> 我认为你必须去这些团队并说,我们希望你们以这种方式工作,你们不做任何文档,不做 Figma,不做技术规格。  
> *I think you actually have to go to these teams and say, we want you to work in this way, where you don't do any docs, no figmas, no tech specs.*  
> —— Eddie Kim · [41:53] ^q2

> 如果你真的写了文档或做了 Figma,你会受到警告,因为我们明确不希望你们做那个  
> *if you actually produce a doc or figma like you will get a slap on the wrist because we explicitly don't want you to do that*  
> —— Eddie Kim · [42:15] ^q3

> 我认为如果你现在没有把所有时间都用来使用 AI 产品,就很难构建出优秀的 AI 产品。  
> *I think it's very hard to build great AI products if you are not spending all your time using AI products right now.*  
> —— Claire Vo · [47:24] ^q4

> 即便这样,对于一家拥有上千名研发人员的公司来说,这也不是一笔大投资。我认为,只要有两三个这样的项目,就能有意义地改变企业的轨迹。  
> *even that's not a big investment across a company of a thousand in R&D. You're going to have like two or three of those, I think, meaningfully change the trajectory of the business.*  
> —— Eddie Kim · [36:17] ^q5

> 平均而言,你们工程团队的 PR 是否比非工程团队的 PR 得到更快的审查?全面的人们都说是的,当然是。这是一个反模式,你需要优先审查这些非工程的 PR,就像你审查工程 PR 一样高  
> *on average is your engineering teams PRS getting faster review than their non-engineering teams PRS and like across the board people are like yeah of course they are like that is an anti-pattern you need to prioritize reviewing these non-engineering PRS just as high as you do your engineering ones*  
> —— Claire Vo · [25:24] ^q6

> 你不要碰 agent 代码的输出。你只能碰输入。你只能重新提示。你不能重写代码。  
> *you don't touch the outputs of agent code. You only get to touch the inputs. You only get to reprompt. You don't get to rewrite the code.*  
> —— Claire Vo · [42:56] ^q7

> 这其实是一个很有趣的模型,也许文档是存在的,但它们是给智能体的,不是给人类的。  
> *And that's actually a very interesting model where maybe docs exist, but they're for the agents, not for the humans.*  
> —— Claire Vo · [44:15] ^q8

## 相关单集

- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同概念:Claude Code、智能体 (agent)、OpenClaw
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的未来工作预测：别等 AI 末日，用 Codex 重塑一切》]] —— 同概念:Claude Code、智能体 (agent)、OpenClaw
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:Claude Code、智能体 (agent)、OpenClaw
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同概念:Claude Code、智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同概念:Claude Code、智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏》]] —— 同概念:智能体 (agent)、OpenClaw
- [[2026-07-08-latent-space-modal|《从避战大模型到押注智能体：Modal 的推理基础设施进化史》]] —— 同公司:DX · 同概念:智能体 (agent)
- [[2025-11-23-lennys-a-guide-to-difficult-conversations|《别再充当团队的“答案机”：高管教练 Rachel Lockett 的领导力实战课》]] —— 同概念:Co-Founder
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同概念:智能体 (agent)
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《1.2 个人 + 20 个 AI 智能体：SaaStr 的极简销售实验》]] —— 同概念:智能体 (agent)
- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同概念:Claude Code
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《1500 亿美元的隐形 AI 公司创始人：恐惧源于无知，最好的工作是独自安静地完成》]] —— 同概念:智能体 (agent)
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《对话 Notion 产品负责人 Max:AI 时代的产品方法论与人的主观能动性》]] —— 同概念:智能体 (agent)
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella 谈 AI 时代平台逻辑:私有评估是最大 IP》]] —— 同概念:智能体 (agent)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《iPod之父Tony Fadell：反直觉的产品课》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人 Mark Pincus：想做出伟大产品，先学会「合法地抄袭」》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《Databricks 的智能体平台与数据库「圣杯」：Reynold Xin 与 Matei Zaharia 的技术蓝图》]] —— 同概念:智能体 (agent)
- [[2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for|《Adam Mosseri：AI 时代的团队重组与产品品味》]] —— 同概念:vibe coding
- [[2025-12-07-lennys-surge-ai-edwin-chen|《Surge AI 创始人 Edwin Chen:我们教模型追逐多巴胺,而非真理》]] —— 同概念:vibe coding
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被迫转行，一半人迎来复兴》]] —— 同概念:智能体 (agent)

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
