---
title: "No Figma. No Jira. No docs. How Gusto built a new product line with Claude Code | Eddie Kim (CTO)"
podcast: "Lenny's Podcast"
date: 2026-06-29
source_url: https://www.lennysnewsletter.com/p/no-figma-no-jira-no-docs-how-gusto
duration: "51:49"
host: "[[Claire Vo]]"
cohosts: ["[[Eddie Kim]]"]
companies: ["[[Gusto]]", "[[Cloudflare Worker]]", "[[Vercel AI SDK]]"]
concepts: ["[[联合创始人]]", "[[vibe code]]", "[[垃圾桶法]]", "[[拉取请求]]", "[[功能标志]]", "[[智能体]]", "[[智能体循环]]", "[[Cloud Code]]", "[[永久 Zoom]]"]
tags:
  - AI 时代软件开发
  - 智能体
  - 极简架构
  - 代码成本归零
  - 凭感觉编程
---

# No Figma. No Jira. No docs. How Gusto built a new product line with Claude Code | Eddie Kim (CTO)

> [!info] 关联
> **主持**:[[Claire Vo]]
>
> **联合主持**:[[Eddie Kim]]
>
> **涉及公司**:[[Gusto]] · [[Cloudflare Worker]] · [[Vercel AI SDK]]
>
> **概念**:[[联合创始人]] · [[vibe code]] · [[垃圾桶法]] · [[拉取请求]] · [[功能标志]] · [[智能体]] · [[智能体循环]] · [[Cloud Code]] · [[永久 Zoom]]
>
> **来源**:[Lenny's Podcast](https://www.lennysnewsletter.com/p/no-figma-no-jira-no-docs-how-gusto)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

Gusto 五人团队用 AI 十周从零造出智能体产品,展示了一种全新的极简、高速开发模式。

本集讲述了一个极具启发性的 AI 时代软件开发故事。[[Gusto|Gusto]] 是一家拥有超过一千名研发员工的大型企业,但其 CTO 兼联合创始人 [[Eddie Kim|Eddie Kim]] 带领一个仅由五人组成的小团队,在 10 周内从零开始构建并发布了一款全新的[[智能体|智能体]]产品「[[联合创始人|Co-Founder]]」。本期访谈拆解了他们颠覆传统的开发流程、背后的技术架构,以及 AI 如何重塑了团队的角色边界。

### 诞生于航班延误的「凭感觉编程」(Vibe Code)
故事的起点极具戏剧性。二月,Eddie 在度假返程途中因航班延误,意外在伦敦有了一段五小时的转机候机时间 [05:32 Eddie Kim]。作为一名技术领导者,他当时正在尝试使用 [[Cloud Code|Cloud Code]](一种 AI 编程工具),偶尔会在周末凭借直觉快速编写代码原型。在这无聊的五小时里,他打开电脑,用 Cloud Code 把脑海中酝酿已久的想法变成了一个原型。当他落地旧金山时,这个最终演变为 Gusto Co-Founder 的雏形诞生了 [06:31 Eddie Kim]。主持人 [[Claire Vo|Claire Vo]] 笑称,她经常听到创业者们在长假或育儿假中,一手抱娃一手用 AI 编程并做出惊人成果的故事;她预测,给员工大段不被打扰的连续时间,将成为推进产品的重要方式 [07:26 Claire Vo]。

### 推翻一切繁文缛节:Zoom 与白板足矣
带回原型后,Eddie 没有启动常规的立项流程,而是找了几个经常交流的资深工程师和一位名叫 Katie 的设计师,在一个预定好的会议室里对着白板讨论 [09:39 Eddie Kim]。这块白板画着粗糙的线框图,列出了「任务」、「资产」等核心概念——这竟然成了整个 10 周开发周期里**唯一**的文档。当有人风闻这个项目来索取文档时,Eddie 会直接回答:「我们没有任何文档」[11:19 Eddie Kim]。

这个团队砍掉了几乎所有传统研发的标配:没有会议、没有技术规格文档、没有 Figma(一种设计软件)、没有用来追踪故事的 JIRA 看板、没有站会,也没有回顾会 [10:10 Eddie Kim]。他们唯一保留的结构化工具,是一个 **24 小时开着的[[永久 Zoom|永久 Zoom]](Perma-zoom)** 房间。因为大家都是远程工作,有人会整天泡在里面安静地写代码,需要讨论时随时开口 [10:31 Eddie Kim]。

### 「垃圾桶法」:代码成本归零带来的自由
由于团队里没有头衔为「产品经理(PM)」的人,所有的产品决策都由团队成员共同完成 [13:27 Eddie Kim]。他们的工作流极其直接:用 Cloud Code 写一个功能,提交一个准备好供人类审查的[[拉取请求|拉取请求]](PR,用于向主项目提交代码修改的机制),然后在永久 Zoom 里讨论「这个功能到底有没有意义?」[14:00 Eddie Kim]。如果答案是肯定的,当场进行代码审查;如果大家觉得不需要,**就毫不犹豫地直接删掉这个已经写好的 PR**。

这种做法催生了主持人所称的「[[垃圾桶法|垃圾桶法]]」[01:00 Claire Vo]。过去,写代码成本很高,丢弃代码令人心痛;但如今代码成本极低,你甚至可以开启一个 V2 分支从零重建,这在当下是完全合理的。

Eddie 分享了一段切身体会:当工程师建议把他的原型推倒重写时,他起初很抗拒,觉得那是自己的心血。但他最终选择信任团队,删掉原代码从零开始。事后证明这是最正确的决定,而他现在对丢弃代码已经完全习以为常 [15:48 Eddie Kim]。

> 【背景】拉取请求(PR,Pull Request)是软件开发中的一种协作机制:开发者写好代码后发起 PR,其他团队成员可以在合并前对代码进行审查和讨论。

### 极简技术栈与「雕塑式」开发
作为面向大众的智能体产品,Co-Founder 的技术栈简单得令人惊讶。它仅仅构建在 [[Cloudflare Worker|Cloudflare Worker]] 和 [[Vercel AI SDK|Vercel AI SDK]] 之上,没有使用复杂的第三方记忆或规划框架。Eddie 指出,对他们来说,所谓的「记忆」只是一个向数据库「记忆」列写入数据的工具。过去那种复杂的[[智能体循环|智能体循环]]栈,现在已经不需要了 [18:26 Eddie Kim]。

在具体的开发过程中,他们采用了一种「雕塑法」。设计师 Katie 会先做出一个带有假响应的纯前端体验,通过[[功能标志|功能标志]](Feature flag,允许在不完全发布的情况下控制功能可见性的技术手段)发布到生产环境。随后,工程师在后台并行构建数据模型和真实的智能体循环。前端不变,原本的假数据会慢慢被真实的运算结果替换 [20:16 Eddie Kim]。这就像是从一块大理石开始,边在生产环境中实地雕刻边将它变成艺术品 [19:54 Eddie Kim]。

### 设计师变身高产工程师
这个流程中最引人瞩目的,是设计师 Katie 的蜕变。她不仅做设计,还直接把前端代码写到了生产环境。根据他们使用的开发统计工具 DX 的数据,Katie 的真实代码吞吐量在整个一千人的研发组织中位列第 94 百分位,这意味着她击败了绝大多数受过专业训练的软件工程师 [22:45 Eddie Kim]。

Eddie 追问 Katie 成功的原因,得到两点结论:一是她本身就对技术充满好奇心;二是团队里有三四名工程师愿意花时间与她结对审查代码、教她如何更好地向 Claude 提示,以及判断什么是好代码 [23:29 Eddie Kim]。主持人强烈赞同这一点,她认为工程团队不应把非技术人员(如设计师或 PM)的提交视为累赘,而应像对待工程代码一样优先审查它们,这种文化投资会带来巨大的长期回报 [25:24 Claire Vo]。

### 用真实场景证明价值:复杂算薪也能自动化
在演示环节,Eddie 展示了 Co-Founder 如何解决现实中的繁杂问题。他举了一家纽约按摩水疗中心的例子:这位老板过去每周必须从排班软件 MindBody 导出数据,手工录入到 Google 电子表格中,计算出热石按摩或 CBD 精油的提成奖金和小费分配,最后再手动输入到 Gusto 中运行发薪 [32:32 Eddie Kim]。

> 【背景】MindBody 是一款常用于健身房、水疗中心等预约排班的软件。

而现在,借助 Co-Founder 的连接器(可对接 QuickBooks、Google Sheets、Notion 等),老板只需用大白话在自然语言中写明计算规则(例如「每次热石追加销售加 15 美元奖金」),智能体就会自己去读取电子表格、执行计算、更新薪资系统,并在最终提交前向用户确认 [34:10 Eddie Kim]。它还可以跨渠道运行:你可以直接通过发短信问「我有没有需要批准的休假请求?」,它便会代为执行操作 [31:01 Eddie Kim]。

### 给领导者的建议:亲自动手,写到生产环境
访谈末尾,Eddie 给其他企业高管提出了强硬的建议:不要只停留在用 AI 做个原型来向团队炫耀,那会让你低估工程落地时的真实难度。高管们必须亲自下场,编写并合并真正经过审核的生产级代码 [45:35 Eddie Kim]。Eddie 自己在过去三个月里,其代码吞吐量甚至达到了全公司第 95 百分位 [46:40 Eddie Kim]。

主持人对此深表赞同:「现在是时候让硬技能再次现身了,而不是仅仅依靠领导力和感召力。」如果不亲自花时间使用这些 AI 产品,就根本无法理解它的底层原语和用户体验边界,更别提制定什么 AI 产品战略了 [47:00 Claire Vo]。这一切的根本动力,来自于 Eddie 第一次自己动手搭建 OpenClaw 个人智能体的经历——正是那段艰难但震撼的实操体验,让他真切感受到了个人智能体的潜力与痛点,进而孵化出了 Co-Founder [47:55 Eddie Kim]。

> 【背景】OpenClaw/OpenClaw 可能是对开源个人智能体项目 OpenHands 或类似产品的音译误转。Eddie 提到购买 Mac mini 且极难买到的细节,符合在本地部署大模型或智能体框架的典型特征。

## 金句(中英对照 · 过机器闸门三联校验)

> 我们没有会议,没有技术规格,没有 Figma,也没有用来追踪故事或追踪工作的 JIRA 看板。  
> *We had no meetings, we had no tech specs, we had no figmas, we had no JIRA board where we tracked stories or tracked work.*  
> —— Eddie Kim · [00:00] ^q1

> 而那个白板,我拍了一张照片,确实是我们在整个 10 周过程中产生的唯一文档。  
> *And that whiteboard, which I took a photo of, was like literally the only documentation that we ever produced in this whole 10-week process.*  
> —— Eddie Kim · [11:03] ^q2

> 平均而言,你们工程团队的 PR 是否比非工程团队的 PR 得到更快的审查?全面的人都说是的,当然是。这是一个反模式,你需要优先审查这些非工程 PR,就像审查你们的工程 PR 一样高。  
> *on average is your engineering teams PRS getting faster review than their non-engineering teams PRS and like across the board people are like yeah of course they are like that is an anti-pattern you need to prioritize reviewing these non-engineering PRS just as high as you do your engineering ones*  
> —— Claire Vo · [25:24] ^q3

> 在产品开发过程中,你可以有大得多的野心,也能承受大得多的风险。  
> *you can be a lot more ambitious and you can afford a lot more risk in your product development process.*  
> —— Claire Vo · [36:02] ^q4

> 是时候让硬技能再次现身了,而不是领导力、感召力、对齐。  
> *it's time for the hard skill to show up again, not leadership, inspiration, alignment.*  
> —— Claire Vo · [47:03] ^q5

> 如果你现在没有把你所有的时间都用来使用 AI 产品,就很难构建出优秀的 AI 产品。  
> *It's very hard to build great AI products if you are not spending all your time using AI products right now.*  
> —— Claire Vo · [47:24] ^q6

> 我发现 AI 是如此顺从,它只是默认做你想做的事,但我实际上想要它挑战我。  
> *I find that AI is so deferential and it just kind of like defaults to doing what you want to do but I actually want mind to challenge me*  
> —— Eddie Kim · [50:04] ^q7

## 相关单集

- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《Why cultivating agency matters more than cultivating skills in the AI era | Max Schoening (Head of Product, Notion)》]] —— 同公司:Figma · 同概念:智能体 (agent)、智能体循环 (agent loop)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《From skeptic to true believer: How OpenClaw changed my life | Claire Vo》]] —— 同概念:智能体 (agent)、OpenClaw
- [[2026-06-22-latent-space-gray-swan|《神话之后的红队评估 — Zico Kolter与Matt Fredrikson，Gray Swan》]] —— 同概念:智能体 (agent)、OpenClaw
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:智能体 (agent)、OpenClaw
- [[2025-11-23-lennys-a-guide-to-difficult-conversations|《别再充当团队的“答案机”：高管教练 Rachel Lockett 的领导力实战课》]] —— 同概念:Co-Founder
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把销售当产品做：用 AI 重构 GTM 团队的实战指南》]] —— 同概念:智能体 (agent)
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《用 1.2 个人加 20 个 AI 智能体，替换 10 人销售团队》]] —— 同概念:智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同概念:智能体 (agent)
- [[2026-02-26-lennys-ai-is-critical-for-humanitys-survival|《AI is critical for humanity’s survival: Cisco president on the AI revolution | Jeetu Patel》]] —— 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《Why half of product managers are in trouble | Nikhyl Singhal (Meta, Google)》]] —— 同概念:智能体 (agent)
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《The AI paradox: More automation, more humans, more work | Dan Shipper》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella：Microsoft Build特别跨界对谈》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《The hidden pattern behind successful products | Mark Pincus (founder of Zynga)》]] —— 同概念:智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《What happens after coding is solved? | Fiona Fung (Manager of the Claude Code and Cowork Teams)》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《为什么前沿生态必须开放》]] —— 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《为什么 AI 基础设施必须为「Agent 体验」进化》]] —— 同概念:智能体 (agent)
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《Netflix CPTO on AI and the future of product and tech roles | Elizabeth Stone》]] —— 同概念:智能体 (agent)
- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同公司:Figma
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《Father of the iPod and iPhone on building taste, judgment, and creativity in the AI era | Tony Fadell》]] —— 同概念:vibe code

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
