---
title: 
podcast: 
date: undefined
source_url: https://www.lennysnewsletter.com/p/the-ai-paradox-dan-shipper
duration: "94:04"
host: "[[Lenny]]"
cohosts: ["[[Dan Shipper]]"]
companies: ["[[Every]]", "[[Codex]]", "[[Claude Code]]", "[[Anthropic]]", "[[OpenAI]]"]
concepts: ["[[智能体]]", "[[前向部署工程师]]", "[[编码智能体]]", "[[高级工程师基准]]", "[[自动化]]", "[[SaaS]]"]
tags:
  - AI 与工作未来
  - 智能体生态
  - 编码智能体
  - SaaS 生存论
  - 驾驭模型
---

# undefined

> [!info] 关联
> **主持**:[[Lenny]]
>
> **联合主持**:[[Dan Shipper]]
>
> **涉及公司**:[[Every]] · [[Codex]] · [[Claude Code]] · [[Anthropic]] · [[OpenAI]]
>
> **概念**:[[智能体]] · [[前向部署工程师]] · [[编码智能体]] · [[高级工程师基准]] · [[自动化]] · [[SaaS]]
>
> **来源**:[undefined](https://www.lennysnewsletter.com/p/the-ai-paradox-dan-shipper)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-05-24-lennys-the-ai-paradox-dan-shipper.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

Every 创始人预测:AI不会引发失业潮,SaaS将继续繁荣,而PM与设计师将迎来黄金时代。

一年前,[[Every|Every]](一家专注于 AI 与商业写作内容的公司)的创始人 [[Dan Shipper|Dan Shipper]] 在播客里随口提出一个观点:人们严重低估了用 [[Claude Code|Claude Code]]([[Anthropic|Anthropic]] 推出的命令行[[编码智能体|编码智能体]])来做非技术类工作(如整理硬盘、修文件)的潜力。事后证明他完全正确。正因为他的公司全员都是极客,每天都在把玩最新模型,这种「活在未来」的状态让他对 AI 趋势有着敏锐的嗅觉 [03:51 Dan Shipper]。

在这一集里,Dan 应主持人 [[Lenny|Lenny]] 之邀,系统地给出了他对未来一年工作方式演变的几大「反主流」预测。两人约定一年后(2027年5月)再由 Lenny 为这些预测打分复盘 [10:17 Dan Shipper]。整场对话大致分为三个板块:**我们将如何工作、工作形态会如何重塑、以及谁会在未来最吃香。**

> 【背景】文中出现的 Codex、Cowork、Claude Code、Cursor 均指当前主流的 AI 编码智能体或其桌面端/云端衍生应用;CLI 指命令行界面,是早期程序员通过纯文本与计算机交互的方式;PRD 指产品需求文档。

---

### 一、未来的工作模式:一台电脑、两个智能体

Dan 认为,我们未来的工作方式将分化为两条并行的主线 [11:21 Dan Shipper]:

**第一条线:公司级的「超级[[智能体|智能体]]」**
之前业界曾畅想「每个人都拥有一个专属的个人智能体,形成平行的组织架构图」。Dan 坦言他原本也深信这一点,但现实很快打脸:个人智能体太容易出 bug,且需要不断维护上下文,大多数员工根本没时间或耐心去 SSH(远程登录)到服务器里瞎折腾 [14:16 Dan Shipper]。

他发现了一个底层规律:为了让一个智能体真正有用,它背后**必须有一个具体的人去关心它、盯紧它的产出**。一旦切断这种「人际连接」,智能体很快就会沦为无用的摆设 [14:38 Dan Shipper]。因此,目前最务实的模式是:公司设立专门的「[[前向部署工程师|前向部署工程师]](forward deployed engineer,指深入业务前线、负责把 AI 智能体调教好供全公司使用的工程师)」团队,集中维护一个全公司共用的超级智能体(比如 Shopify 的 River)。未来随着模型越来越聪明,智能体才会慢慢向下分化,变成个人专属 [15:10 Dan Shipper]。这类通过 Slack 沟通交流、处理异步任务的场景,将成为企业内部 AI 应用的主阵地。

**第二条线:取代浏览器的「本地编码智能体」**
这是 Dan 最激动的一条预测。他发现,与其像业界设想的那样「把 AI 塞进浏览器里」,不如反过来——**把你常用的本地智能体(如 [[Codex|Codex]] 桌面版)里面放进一个浏览器** [23:17 Dan Shipper]。

这样一来,智能体能直接读取你电脑上的所有信息,你也能在一个窗口里和它无缝协作。Dan 分享了自己的实战:他打开 Codex 内嵌的浏览器,直接在里面用自己开发的 Markdown 编辑器 Proof 写稿,Codex 就在一旁实时「注视」并协助他;他还能让 Codex 去搜集过去四年的法律文档、自动分类回复邮件,让他连续十天保持收件箱清空 [21:34 Dan Shipper]。

---

### 二、SaaS 不会死,反而会更繁荣

既然大部分工作都在 Codex 或 Claude Code 的环境里完成,这是否意味着传统的 [[SaaS|SaaS]] 软件要完蛋了?Dan 的回答截然相反:「我认为 SaaS 末日论是很愚蠢的,我现在就会买入 SaaS 股票。」 [37:09 Dan Shipper]

他解释了一个极其关键的「二阶效应」:当用户在 SaaS 网站里直接调用本地智能体工作时,消耗的是**用户自己的 token(模型调用的计费单位)**,而不是 SaaS 厂商的 [24:25 Dan Shipper]。这不仅大幅挽救了 SaaS 厂商因硬塞 AI 功能而流失的利润率,更带来了指数级的使用量——因为背后有成千上万的智能体在疯狂调用这些 SaaS 工具 [38:26 Dan Shipper]。

不过,这也给 SaaS 产品提出了全新的设计挑战:未来的软件需要同时适配「人类」和「智能体」。产品得具备极快的请求并发处理能力、清晰的操作日志,甚至要能承接智能体自动发来的、包含完整复现步骤的 Bug 报告 [29:19 Dan Shipper]。此外,那些仅适用于纯文本终端(CLI)的交互将逐渐式微,Dan 断言:「CLI 时代结束了。我们速通了 CLI 时代。」 [31:25 Dan Shipper] 未来将回归图形界面(GUI),让人和智能体能在同一个屏幕上协同操作。

---

### 三、自动化是个谎言:AI 越强,越需要人来「驾驭」

尽管[[自动化|自动化]]能力在飙升,Dan 也在疯狂招人,他甚至断言所谓的「AI 岗位末日」根本不存在 [73:11 Dan Shipper]。为什么会这样?他提出了几个极其反直觉的观察:

**1. 自动化依然需要「保姆」**
Dan 提出了「自动化是个谎言」的观点:每当你自动化一项任务,为了确保它不出错,就必须派一个真人去监督它 [39:15 Dan Shipper]。这就催生了一个全新的核心岗位——前向部署工程师。他们每天都在 Slack 里像哄小孩一样和内部智能体对话,确保它运作正常 [55:12 Dan Shipper]。

**2. 基准测试掩盖了真实工作量**
业界常拿模型能独立完成 17 小时任务来自嗨,但 Dan 亲自做了一个「[[高级工程师基准|高级工程师基准]]」:让 AI 去重写一个烂代码库。结果显示,直到 GPT 5.5 才勉强考了 62 分,而真正的高级工程师能拿 80-90 分 [42:26 Dan Shipper]。Dan 指出,大部分模型只会按字面意思去给一堆烂代码打补丁,而真正的高级工程师会直接跳出来说:「这代码就是一坨狗屎,必须重写。」 [44:37 Dan Shipper]

这种「发现问题本质并重构」的判断力,是目前的基准测试无法衡量、模型也无法自发产生的。因此,「驾驭模型」就成了未来每个人最核心的竞争力:也就是在新模型出来时,保持好奇,不断去翻开石头看 AI 能不能解决你工作里的新问题 [78:10 Dan Shipper]。

---

### 四、谁在未来最吃香?PM、全栈设计师与战略家

当「写代码」本身被彻底商品化后,到底谁会迎来黄金时代?Dan 给出了他的答案:

**首先是产品经理(PM)**。Dan 团队里有一位名叫 Marcus 的 PM。他懂点技术,但本质上是产品Sense极强的人。借助 AI 编码工具,Marcus 现在能自己写代码、疯狂提交 PR(代码合并请求),发布速度比谁都快,完全不需要去排期求工程师 [69:01 Dan Shipper]。

**其次是全栈设计师**。过去设计师有很多绝妙的交互创意,但苦于工程师不愿配合实现。现在,他们可以直接自己动手,把设计直接变成可运行的 PR [71:06 Dan Shipper]。不过,Dan 也指出,尽管 AI 能生成海量内容,但也因此陷入了千篇一律的「廉价感(slop)」。真正能从中脱颖而出、凸显巨大价值的,恰恰是人类的**原创创意** [71:41 Dan Shipper]。

**最后,在对外沟通上,我们将越来越习惯阅读由 AI 生成的邮件与战略规划,并乐在其中。** 因为对于多数人来说,手动写一封平铺直叙的邮件或战略文档既枯燥又低效。只要作者能掌控核心思想,AI 生成的行文反而更得体。Dan 甚至考虑在未来的邮件里直接标明「这封信由 GPT 5.5 生成」 [65:36 Dan Shipper]。

---

### 结语:一切都没变,但一切都变了

访谈临近尾声,Lenny 感叹这期节目展现了一种奇妙的「双面性」:一方面,我们依然在收发邮件、使用 Slack、购买 SaaS 软件,很多表层的东西根本没变;但另一方面,底层每个角色的实质——无论是工程师写代码,还是 PM 做规划——都已被彻底颠覆 [81:04 Dan Shipper]。

Dan 最后给出了他非常诗意的人生建议,也是他应对 AI 焦虑的良药:当你面对 AI 带来的巨变与困难时,试着从一个「宽敞与力量」的位置去应对它,而不是陷入 David Goggins 式的硬抗;去把玩 AI,在生活和工作中找到那个「哇,我简直不敢相信 AI 替我做到了这个」的快乐瞬间 [90:30 Dan Shipper]。

## 金句(中英对照 · 过机器闸门三联校验)

> 模型总体上所做的是,它们让昨天的人类能力变得廉价。  
> *What models do in general is they make yesterday's human competence cheap.*  
> —— Dan Shipper · [73:51] ^q1

> 我认为 SaaS 末日是很愚蠢的。  
> *I think the SaaSpocalypse is dumb.*  
> —— Dan Shipper · [01:17] ^q2

> 我同时既极其 AI 化,又非常看好人类。  
> *I'm simultaneously extremely AI pilled and very bullish on humans.*  
> —— Dan Shipper · [00:24] ^q3

> 我现在会买入 SaaS 股票。  
> *I would buy SaaS stocks right now.*  
> —— Dan Shipper · [01:19] ^q4

> 智能体做的是增加 SaaS 的用户数量,而不是摆脱它。  
> *What agents do is increase the number of users of SaaS, not get rid of it.*  
> —— Dan Shipper · [01:20] ^q5

> AI 末日并不是真正的趋势。  
> *The AI jobpocalypse is not really a thing.*  
> —— Dan Shipper · [00:10] ^q6

> 你的公司在 AI 方面的发展只能达到你的 CEO 在 AI 方面的发展程度,而且这是你不能委托的事情。  
> *Your company's only going to go as far as your CEO goes in AI and it's not something you can delegate.*  
> —— Dan Shipper · [59:28] ^q7

## 相关单集

- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《2026-05-03-lennys-why-cultivating-agency-matters-more》]] —— 同公司:Claude Code、Anthropic、GitHub、Notion、OpenAI · 同概念:SaaS、智能体 (agent)、vibe coding
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同公司:Claude Code、Codex · 同概念:智能体 (agent)、命令行界面 (CLI)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella：Microsoft Build特别跨界对谈》]] —— 同公司:GitHub · 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《神话之后的红队评估 — Zico Kolter与Matt Fredrikson，Gray Swan》]] —— 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《为什么 AI 基础设施必须为「Agent 体验」进化》]] —— 同公司:Ramp · 同概念:智能体 (agent)
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《为什么前沿生态必须开放》]] —— 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto》]] —— 同概念:智能体 (agent)
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《2026-07-19-lennys-netflix-cpto-on-ai-and-the-future》]] —— 同概念:智能体 (agent)
- [[2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for|《2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for》]] —— 同概念:vibe coding

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
