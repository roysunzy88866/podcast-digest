---
title: PM 如何用 Claude 把生产力提升 10 倍：全栈实战
podcast: Product Growth Podcast
date: 2026-07-13
source_url: https://www.news.aakashg.com/p/the-complete-claude-stack-for-pms
duration: "93:20"
type: episode
cover: "#64748b"
image: "/covers/2026-07-13-pg-the-complete-claude-stack-for-pms.jpg"
description: "从模型选型到构建个人幕僚长智能体,用 Claude 全栈打造 PM 生产力引擎。"
host: "[[Aakash Gupta]]"
cohosts: ["[[Jyothi Nookula]]"]
companies: ["[[Claude]]"]
concepts: ["[[Claude Code]]", "[[智能体]]", "[[对抗性智能体]]", "[[mcp]]", "[[知识库]]", "[[技能]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
---

# PM 如何用 Claude 把生产力提升 10 倍：全栈实战

<div class="pd-mt">2026-07-13 · Product Growth Podcast · 93:20 · <a class="mcat" href="./tags/%E6%99%BA%E8%83%BD%E4%BD%93">智能体</a> · <a class="mcat" href="./tags/AI%20%E7%BC%96%E7%A8%8B">AI 编程</a></div>

<div class="pd-play"><audio controls preload="metadata" src="/audio/2026-07-13-pg-the-complete-claude-stack-for-pms.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

> [!info] 关联
> **主持**:[[Aakash Gupta]]
>
> **联合主持**:[[Jyothi Nookula]]
>
> **涉及公司**:[[Claude]]
>
> **概念**:[[Claude Code]] · [[智能体]] · [[对抗性智能体]] · [[mcp]] · [[知识库]] · [[技能]]
>
> **来源**:[Product Growth Podcast](https://www.news.aakashg.com/p/the-complete-claude-stack-for-pms)

## 一句话 TLDR

从模型选型到构建个人幕僚长智能体,用 Claude 全栈打造 PM 生产力引擎。

产品经理(PM) Jyothi 曾在内部黑客马拉松中击败了 30 个工程团队夺冠,她的武器是 [[Claude|Claude]] 和「[[对抗性智能体|对抗性智能体]]」(adversarial agents)。本集她从零开始,手把手教不熟悉技术的读者如何利用整个 Claude 生态系统将日常生产力提升 10 倍。全文将按 Claude 的五层架构展开:前两层讲怎么选对工具,中间两层讲怎么通过定时任务和私有[[知识库|知识库]]把繁杂工作自动化,最后一层讲怎么用 Claude 代码构建自我纠错的[[智能体|智能体]],并在结尾谈谈这一切将如何重塑 PM 这个职业本身 [00:04 [[Jyothi Nookula|Jyothi Nookula]]]。

> 【背景】Claude 是 Anthropic 公司推出的 AI 大模型。本集反复提到 plot code / clod,均为语音转写时对「Claude Code」(Anthropic 的终端/IDE 编程工具)或「Claude」的误听,为符合读者认知,导读正文直接使用正确名称 Claude / Claude Code。

## 第一、二层:选对模型与交互界面

很多人以为 AI 就是一个聊天框,但要用好 Claude,得先懂它的底层结构。栈的最底层是模型,Claude 目前主要有三个模型:Haiku(速度快、成本低,适合大批量简单分类任务)、Sonnet(性价比最高,Jyothi 日常 90% 的工作都用它,比如起草 PRD 或做竞品分析),以及 Opus(擅长复杂推理和长线规划)。但 Opus 有时容易陷入「幻觉卡死模式」,在一个局部思路上原地打转,这时就得关掉重开,或者退回用 Sonnet [07:14 Jyothi Nookula]。

模型之上是第二层——交互界面。界面不仅指浏览器里的 cloud.ai,还包括桌面应用、手机端、Chrome 插件以及集成在 VS Code 里的 [[Claude Code|Claude Code]] 扩展。理解针对哪个场景该用哪个界面,是一项能让你效率提升 10 倍的核心 PM [[技能|技能]] [00:04 Jyothi Nookula]。例如,网页版无法直接碰你电脑里的本地文件;而桌面应用可以接入你的本地系统,随时跑一些自动化任务;Chrome 插件则可以用来做竞品调研,甚至模拟真实用户去点击你的产品网页,做基础的用户体验测试 [12:35 Jyothi Nookula]。

界面与底层模型的分工明确了,接下来就是怎么让它们真正替你干活。而这,正是通过自动化和「技能」来实现的。

## 第三层:用定时任务与技能把繁杂工作外包

说完了底层模型和界面,我们进入第三层:知识库与自动化。这部分是大多数 PM 投入不足的地方。Jyothi 主要通过桌面应用里的 co-work(协作自动化功能区)来安排定时任务 [06:09 Jyothi Nookula]。她搭建了四个核心自动化任务:每日早晨简报、每日站会简报、每日结束总结,以及「幕僚长」任务。

以早晨简报为例,她把 Claude 接入 Google Calendar、Gmail、Google Drive 和 Jira 等系统。每天早上 9 点,Claude 自动拉取今天的日历事件、需要关注的 Jira 任务和邮件,并严格按照她设定的「400 字以内、只给事实不打鸡血、绝不捏造截止日期」的规则生成一份简报 [16:29 Jyothi Nookula]。这就像雇佣了一个全天候的幕僚长,它替代了过去人们需要用 Make 等传统自动化工具一个个连线、拼框的复杂操作,现在只需用自然语言下达指令即可 [22:08 Jyothi Nookula]。

除了定时任务,「技能(Skills)」是第三层的另一大杀器。Jyothi 展示了一个用于「综合分析客户访谈」的技能文件。技能本质上是一套带步骤的指南剧本,告诉 Claude 遇到这类任务该怎么做。

> 【背景】传统 AI 工具调用时,会把所有工具的说明全塞进上下文窗口,极其消耗记忆。Skill 技术采用了「渐进式披露(progressive disclosure)」机制:一开始只往上下文里塞 50 个词的简短描述。当模型在思考时,如果发现这个技能对当前问题有用,才会把完整指令加载进内存。

这意味着技能不会轻易塞爆上下文窗口。Jyothi 强调,虽然可以用 AI 帮你写技能文件,但人工注入自己的领域知识(比如你想用什么模板输出)至关重要,因为研究表明 AI 自动生成的技能文件效果往往不如人工写的 [30:42 Jyothi Nookula]。

当自动化任务和技能都搭建好后,工具算是用明白了。但如果想让 AI 真正懂你的公司、懂你身边的人,还得往下走一步——给它建一个「大脑」。

## 知识库与 MCP:给 AI 装上专属大脑

工具能跑了,可它依然不认识你的同事,也不懂公司的政治格局。这正是建立私有知识库(KB)要解决的问题。为了打造一个真正懂她的「幕僚长」,Jyothi 用 Claude Code 写了一个架构,把日常摄入的文档(如战略图、PRD、会议记录)提取成结构化数据存入本地文件夹 [34:29 Jyothi Nookula]。

这个知识库里不仅有会议摘要,还自动维护着人物档案:记录每个同事的沟通风格、决策方式,以及他们与 Jyothi 的关系是「强力盟友」还是「摩擦点」[41:29 Jyothi Nookula]。以前开完会,她把会议记录一扔,幕僚长不仅会自动总结,还会给出战略提醒:「这个人擅长 X,你应该让他做你的盟友」,甚至会警告「这件事极其敏感,你在通知某个人之前,必须先知会另外几个人」[39:02 Jyothi Nookula]。这种深刻的组织理解,让 AI 真正变成了私人高参。

> 【背景】MCP(Model Context Protocol,模型上下文协议)是让外部数据源或工具与 AI 大模型安全通信的开放标准。

为了随时随地调用这个存放在本地的知识库,Jyothi 把它部署成了一个本地 [[mcp|MCP]] 服务器。这样做的好处是数据极其隐私(离开公司时直接带走电脑即可),同时你在桌面端开个聊天窗口,就能直接问它:「我明天要见经理,该注意什么?」AI 会从知识库里翻出经理的风格(比如「他是个习惯先说不的人,别铺垫,直接切入正题」)给你建议 [47:33 Jyothi Nookula]。

有了自动化的工作流,又给 AI 装上了懂人情的「大脑」,基础设施已经彻底搭好。接下来的终极问题是:能不能让 AI 自己去测试、去迭代,甚至自己攻击自己?

## 第五层:用 Claude Code 打造自我进化的对抗智能体

一切铺垫就绪,我们终于来到了本集开篇的那个悬念:Jyothi 是怎么赢下黑客马拉松的?答案是用 Claude Code 构建了一个对抗性智能体评估器。

这套系统借鉴了 GAN(生成式对抗网络)的思想。简单来说,你先写一个执行任务的「生成器智能体」(比如一个客服机器人),然后再写一个「对抗智能体」(红队测试员)。对抗智能体的唯一任务,就是想尽办法去攻击、诱导、破坏生成器智能体。如果生成器没顶住,它的系统提示词就会被自动打回重写,直到它能扛住所有对抗攻击为止 [78:07 Jyothi Nookula]。

现场演示中,Jyothi 设置了及格线(平均分大于 8 分,最多迭代 5 次)。在测试一个较弱的支持机器人时,第一轮它得了 8.52 分,但在面对「格式冲突攻击」时屈服了,没通过测试。系统自动打回,改进提示词后,在第三次迭代中拿到了 9.08 分,成功过关 [90:45 Jyothi Nookula]。这种自动化的红队测试循环,正是她夺冠的秘密武器。

工具越来越强大,未来 PM 这个岗位本身会怎样?这正是最后一个话题。

## PM 的未来:成为会构建的「AI Builder」

工具变了,对人的要求也变了。Jyothi 观察到,行业里正在出现一种名为「AI Builder」或「技术团队成员」的新角色,工程师、PM、设计师的界限正在合并。以前 1 个 PM 配 8 个工程师,以后可能是 2 个 PM 配 1 个工程师。PM 自己就能拉着 Claude Code 去处理用户反馈、写代码、提 PR [73:23 Jyothi Nookula]。

在最近的求职面试中,Jyothi 发现面试流程变了。除了传统的「产品直觉」和「行为面试」,现在多了一轮「AI 基础」和一轮「实战写代码」。面试官会让你打开 IDE,现场用 Claude 把一个想法写出来。他们不仅看你写得快不快,更看你在面对 AI 时,是全盘盲信第一版结果,还是会仔细审视边界情况,像牧羊犬一样把 AI 引导到正确的方向上 [76:36 Jyothi Nookula]。

Jyothi 给转型者的建议是:别只做一锤子买卖的项目,要把平时用 vibe coding(纯凭直觉用自然语言让 AI 写代码)做出来的小玩意儿当成真正的产品去做,找真实用户来用,收集反馈不断迭代。现在的核心壁垒不再是「会不会写代码」,而是你有没有「品味」去发现问题,并判断什么是好产品 [80:00 Jyothi Nookula]。

## 本集带走

1. **模型与界面要分层对待**:Opus 擅长深度推理但容易卡在死胡同里,日常 90% 的活儿用 Sonnet 性价比最高;同理,需要碰本地文件的自动化任务别用网页版,交给桌面应用或 Claude Code 扩展。
2. **AI 不只是聊天机器人,装上「大脑」才能懂人情世故**:利用 MCP 把本地文档、会议纪要变成私有知识库,AI 就能从「只会写总结的机器」变成提醒你「这个同事很敏感,发邮件前先知会他」的私人战略顾问。
3. **别盲信 AI 的第一版输出**:未来的核心竞争力是「品味」。代码谁都能让 AI 写,但能否敏锐发现问题、给 AI 设定严格的护栏、甚至构建一个对抗智能体去自我纠错,才是区分普通 PM 和 AI Builder 的关键。

## 金句(中英对照 · 过机器闸门三联校验)

> 我认为这是大多数 PM 投入不足的一层,正是这一层让 Claude 从一个通用的聊天机器人变成真正了解你的上下文。  
> *the layer that i think most pms under invest in it's this layer that makes claude go from being a generic chatbot to actually knowing your context*  
> —— Jyothi Nookula · [06:05] ^q1

> 现在构建变得容易了,品味才是我们需要培养的重要东西。  
> *building is easy now taste is what is important for us to develop*  
> —— Jyothi Nookula · [79:57] ^q2

> 以前一个产品经理配八个工程师,现在变成了两个产品经理配一个工程师,所以角色也在迅速合并。  
> *previously if you see one product manager works with eight engineers now it's like two product managers one engineer so the roles are also like collapsing quickly*  
> —— Jyothi Nookula · [73:53] ^q3

> 我是不是把 AI 告诉我的第一件事就当作『这很棒』然后直接收尾,还是我在审视这些事情并说『好吧这很好,但是这种边缘情况怎么办』  
> *am I just taking the first thing that the AI tells me as like this is great and wrapping it up or am I looking through things to say okay this is good but what about this edge case*  
> —— Jyothi Nookula · [76:59] ^q4

> 不要把它们当成项目来做,要把它们当成产品。去你所在的领域发现问题,找那些足够棘手、让你想去构建解决方案的问题,去构建解决方案,然后看看还有谁想要这样的东西,让他们来用你的产品。  
> *don't build them as projects treat them as products like find problems in your area find problems that are finicky enough for you to want to go build a solution go build solution and see who else wants something like this have them come and use your product*  
> —— Jyothi Nookula · [81:18] ^q5

> 这就是你不仅仅是在构建一个智能体,你实际上是在构建另一个评估器,用不同的方式去攻破这个智能体。  
> *this is where you're not just building an agent you're actually building another evaluator to go break this agent in different ways*  
> —— Jyothi Nookula · [91:25] ^q6

## 相关单集

- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:Claude Code、MCP、智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《Gusto CTO 的极简实验:5 人 10 周凭感觉编程造出 AI 产品》]] —— 同概念:Claude Code、智能体 (agent)、vibe coding
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同概念:Claude Code、智能体 (agent)
- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同公司:Claude · 同概念:Claude Code
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得》]] —— 同概念:Claude Code、智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《Dan Shipper 的未来工作预测：别等 AI 末日，用 Codex 重塑一切》]] —— 同概念:Claude Code、智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同概念:Claude Code、智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏》]] —— 同公司:Claude · 同概念:智能体 (agent)、红队测试 (red teaming)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《Zynga 创始人 Mark Pincus：想做出伟大产品，先学会「合法地抄袭」》]] —— 同公司:Claude · 同概念:智能体 (agent)
- [[2026-07-09-pg-pm-guide-ai-design|《用 AI 武装技术型 PM：Codex 工作流全解析》]] —— 同概念:智能体 (agent)、MCP
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织》]] —— 同概念:智能体 (agent)
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|《1.2 个人 + 20 个 AI 智能体：SaaStr 的极简销售实验》]] —— 同概念:智能体 (agent)
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《1500 亿美元的隐形 AI 公司创始人：恐惧源于无知，最好的工作是独自安静地完成》]] —— 同概念:智能体 (agent)
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《对话 Notion 产品负责人 Max:AI 时代的产品方法论与人的主观能动性》]] —— 同概念:智能体 (agent)
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella 谈 AI 时代平台逻辑:私有评估是最大 IP》]] —— 同概念:智能体 (agent)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《iPod之父Tony Fadell：反直觉的产品课》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《Databricks 的智能体平台与数据库「圣杯」：Reynold Xin 与 Matei Zaharia 的技术蓝图》]] —— 同概念:智能体 (agent)
- [[2026-06-24-pg-company-os-jz|《AI 时代的产品团队：Laurel CPO 的公司操作系统与「超级个体」实战》]] —— 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《从避战大模型到押注智能体：Modal 的推理基础设施进化史》]] —— 同概念:智能体 (agent)
- [[2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge|《Sriram Krishnan：Kimi K3 将改写 AI 行业版图》]] —— 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被迫转行，一半人迎来复兴》]] —— 同公司:Claude · 同概念:智能体 (agent)
- [[2025-12-07-lennys-surge-ai-edwin-chen|《Surge AI 创始人 Edwin Chen:我们教模型追逐多巴胺,而非真理》]] —— 同公司:Claude
- [[2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for|《Adam Mosseri：AI 时代的团队重组与产品品味》]] —— 同概念:vibe coding

*本集关键词:AI 基础设施 · 智能体 · 产品经理 · 工作流自动化 · 红队测试*

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
