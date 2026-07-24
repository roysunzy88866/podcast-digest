---
title: 用 1.2 个人加 20 个 AI 智能体，替换 10 人销售团队
podcast: "Lenny's Podcast"
date: 2026-01-01
source_url: https://www.lennysnewsletter.com/p/we-replaced-our-sales-team-with-20-ai-agents
duration: "102:07"
host: "[[Lenny]]"
cohosts: ["[[Jason Lemkin]]"]
companies: ["[[SaaStr]]", "[[Artisan]]", "[[Qualified]]", "[[Agentforce]]", "[[Salesforce]]", "[[Delphi]]", "[[Replit]]", "[[Bolt]]", "[[Lovable]]", "[[Vercel]]", "[[Palantir]]"]
concepts: ["[[智能体]]", "[[前线部署工程师]]", "[[SDR]]", "[[AE]]"]
tags:
  - AI 替代销售
  - 智能体部署与编排
  - GTM 自动化
  - B2B 销售革命
  - 前线部署工程师
---

# 用 1.2 个人加 20 个 AI 智能体，替换 10 人销售团队

> [!info] 关联
> **主持**:[[Lenny]]
>
> **联合主持**:[[Jason Lemkin]]
>
> **涉及公司**:[[SaaStr]] · [[Artisan]] · [[Qualified]] · [[Agentforce]] · [[Salesforce]] · [[Delphi]] · [[Replit]] · [[Bolt]] · [[Lovable]] · [[Vercel]] · [[Palantir]]
>
> **概念**:[[智能体]] · [[前线部署工程师]] · [[SDR]] · [[AE]]
>
> **来源**:[Lenny's Podcast](https://www.lennysnewsletter.com/p/we-replaced-our-sales-team-with-20-ai-agents)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

SaaStr 创始人亲历：AI 智能体已能持平 10 人销售团队的业绩，不拥抱它就会被淘汰。

[[Jason Lemkin|Jason Lemkin]] 是全球最大的 B2B 创始人社区 [[SaaStr|SaaStr]] 的创始人，每年举办万人规模的大会，有八位数的年收入。过去一年半里，他把自己公司约 10 人的销售团队（包括负责外呼寻找客户的 [[SDR|SDR]]、负责审核线索的 BDR，以及负责成交的 [[AE|AE]]），换成了 1.2 个人类加 20 个 AI [[智能体|智能体]]（能自主执行销售、客服等任务的程序）[07:43 Jason Lemkin]。

> 【背景】SDR（Sales Development Representative）指通过发邮件、打电话等方式寻找潜在线索的初级销售；BDR 通常负责审核入站线索的质量；AE（Account Executive）是真正负责把交易谈成的客户经理。

这场转变并不是因为业绩不好——业务的净产出和以前差不多——而是因为他实在厌倦了在高价雇人后遭遇员工离职。他想看看，用 AI 智能体「突破极限」到底能把团队带到哪一步。全文脉络如下：先讲他为什么要用 AI 替换人类、销售行业的哪些岗位最危险；再拆解他具体部署了哪些智能体、核心成功因素是什么；最后给从业者和创业公司各开一剂「在 AI 时代怎么活下去并赢」的药方。

## 销售行业的旧打法全废了，但好线索从没有这么多

说完了他的大致背景，先来看他为什么要彻底重构团队。Jason 观察到，在 AI 时代，B2B 公司的处境发生了极端的两极分化 [17:14 Jason Lemkin]。

在低端（增长慢的传统 SaaS 公司），需求枯竭，大家只能靠涨价榨取存量客户。在高端（像 [[Vercel|Vercel]]、[[Replit|Replit]]、ElevenLabs 这种爆发式增长的 AI 公司），需求多到根本服务不过来。他举了个极端的例子：[[Bolt|Bolt]] 在六个月内从零做到 5000 万美元营收，销售团队一半的精力花在「决定回复哪些线索」上，因为他们从竞争对手 [[Lovable|Lovable]] 那儿抢来一个七位数的大单，原因仅仅是 Lovable 的人没回电话 [15:49 Jason Lemkin]。

更反常的是，整个市场进入了一种罕见的「全员采购」状态。传统上，每年大概只有 3% 到 5% 的潜在客户在市场上买东西；但现在，由于高层被 AI 的巨大投资回报率（ROI）倒逼，许多类别中有超过 50% 的客户同时在市场上找方案 [18:13 Jason Lemkin]。所以，不管你是增长太快缺人手，还是增长停滞需要砍成本，2026 年你都有极强动力用 AI 智能体来突破现有的销售极限。

那么，这对销售职业本身意味着什么？Jason 给出了非常具体的预判：那种刚大学毕业、每天按固定节奏群发邮件的初级 SDR，明年会被 AI 取代 90%；而审核入站线索的 BDR（比如等一两天才回复客户问「你是做什么的」的人）明年应该直接灭绝 [19:49 Jason Lemkin]。

但并不是所有岗位都末日临头。负责真正成交的 AE（客户经理），明年大概 70% 的工作还是安全的，但再往后会降到只有 40% 到 50% 安全 [20:48 Jason Lemkin]。原因很简单：如果一个智能体比人类更懂产品，且价格没什么可谈的，客户其实更愿意直接和聪明的 AI 聊天。

这里引出一个所有人都在问的元问题：如果入门级的 SDR 和 AE 都没了，销售行业的新人从哪儿起步？Jason 坦言这是整个 AI 时代的共同困境（就像很多公司宁愿要熟练工也不愿带新人）。但他强调：**那些真正懂产品、知道怎么管理和「编排」智能体的人，会变得更有价值；而那些只知道混日子的「平庸者」将被加速淘汰。** 他特别指出，那种自称「我很会搞人际关系」却一问产品技术三不知的销售，日子到头了 [70:42 Jason Lemkin]。

## 具体怎么部署：他的四类智能体与选型秘诀

工具变了，人怎么办？这正是他接下来讲的核心实操。Jason 把自己公司的智能体生态全公开在 SaaStr.ai/agents 上，主要分四类：

第一类是通用数字分身。他用 [[Delphi|Delphi]] 做了一个「Digital Jason」，把自己写过的上万篇文章全喂进去。它起初只是为了陪创始人聊天，结果客户开始拿它问活动退票、折扣等客服问题，它甚至自己在没人管的情况下谈下了一笔 7 万美元的赞助 [08:05 Jason Lemkin]。这成了他用智能体做客服支持的起点。

> 【背景】Delphi 是一款制作「数字分身」的应用，能摄取一个人所有的公开内容并模仿其语气交流。

第二类是 Outbound（出站/外呼）智能体。他选了 YC 孵化的 [[Artisan|Artisan]]，向过去积累的 40 万联系人发邮件拉新，发了约 6 万封，效果很好 [33:12 Jason Lemkin]。

第三类是 Inbound（入站）智能体。他选了 [[Qualified|Qualified]]，把它做成网站上的一个对话气泡。有人在周六晚上 11 点想赞助，智能体直接接待并拿下了单子 [34:24 Jason Lemkin]。

第四类是老线索唤醒。他很早接入了 [[Salesforce|Salesforce]] 的 [[Agentforce|Agentforce]]，专门拿去对付「那些销售员懒得跟、认为佣金太低的线索」，结果达到了 70% 的回复率 [38:50 Jason Lemkin]。

这里有个非常关键的选型秘诀。Jason 强调，这些智能体在底层调的其实都是差不多的 API（比如都在用 Claude 4），因此选谁的区别不在于功能列表 [35:26 Jason Lemkin]。关键在于：**哪家供应商愿意派 Forward Deployed Engineer（[[前线部署工程师|前线部署工程师]]，简称 FDE）手把手帮你把模型调好。** 他曾经接触一家供应商，开价要先收 10 万美元才肯帮忙；而 Artisan 和 Qualified 愿意下场陪他一起干，所以他选了后者。

> 【背景】Forward Deployed Engineer（FDE）指供应商派去客户现场、专门负责把产品部署跑通的技术人员。

对于初创公司，这也是个巨大的销售启示：不要只卖一个空壳软件让客户自己琢磨。你需要派人坐在客户旁边，确保智能体在客户付款前就能真正跑起来、出业绩，这在 AI 时代是唯一的制胜法 [65:10 Jason Lemkin]。

## 训练智能体很难，但远没你想的那么高深

选好了工具，接下来是最关键的「训练」环节，这也是他反复强调没人能逃避的苦活。Jason 发现，很多人对 AI 存在致命误解：以为买了个工具、按下开关，它就会像魔法一样自动卖货。他跟一家市值超百亿美元的上市 B2B 公司开会，发现他们打算把未训练的智能体直接扔给 20 岁的初级 SDR 去「自己摸索」，全场 20 个人里没有一个人亲手上手过 [24:54 Jason Lemkin]。他指出：零工作直接开启智能体，是 100% 的失败率 [57:12 Jason Lemkin]。

真正的训练其实并不神秘，就是把流程反过来做：
1. **喂基础数据**：把你的官网链接、Wiki 文档、培训手册传给它，这叫「摄取」。
2. **角色扮演与纠错**：它每天会发一些练习邮件，有时候会产生「幻觉」（说错话）。你每天花一两个小时去纠正它。
3. **复制最强员工**：把你团队里金牌销售的最好邮件文案，上传给它当模板。让 AI 基于此进行 A/B 测试（同时试验多种方案看哪个好），它甚至能帮你生成三封你那封最好邮件的变体 [43:37 Jason Lemkin]。

只要坚持做 30 天，到第 30 天它就会变得相当好 [26:46 Jason Lemkin]。

有了这套方法，他做出了一个重要的性能反直觉判断：**你不需要拥有庞大的数据库也能用智能体。** 很多小公司说「我只有 300 个客户」，但 Jason 反问：「那访问过你网站的累计有多少人？你 HubSpot（客户管理系统）里躺着的废弃线索有多少？」往往一查有几万人，人类根本碰不过来，这正是智能体大显身手的地方 [36:48 Jason Lemkin]。

此外，**你也不需要 12 年的内容积累才能训练它**，只要有几个月的优质内容加上后期的持续补充就够了 [37:48 Jason Lemkin]。即便只有几百万美元营收的小公司也能从中获益。

## 管理员的新角色：编排官

既然部署了一个又一个智能体，谁来管它们？Jason 介绍了他团队里那「0.2 个人类」——兼职首席 AI 官 Amelia 的日常。

现在有 20 个智能体整晚、整周末地连轴转工作，Amelia 每周必须花 10 到 15 个小时专门审查它们的输出 [40:40 Jason Lemkin]。因为多个智能体同时在跑，必须有人足够聪明，去把客户库切分好（比如谁归入站管、谁归出站管、谁归唤醒管），否则它们就会互相冲突，把整个系统搞得一团糟 [56:25 Jason Lemkin]。这是一个全新的岗位：智能体编排官。Jason 建议从内部提拔那些喜欢在数据前一坐就是几小时、懂营销懂数据的「极客」，而不是指望传统销售出身的人 [54:54 Jason Lemkin]。

## 给每个人的生存指南与行动号召

聊了这么多「道」与「术」，他最后给出了针对不同人群的明确建议：

**如果你是领导者/VP**：别等了，现在就挑一个最痛的环节，选一个供应商，亲自下场搞训练、摄取数据、编排流程。如果你能自己把一个智能体跑通并投产，你就会成为市场上极度抢手的人才 [26:59 Jason Lemkin]。

**如果你是初级员工**：拥抱团队正在用的 AI 工具。当 AI 自动帮你排满了日程，别抱怨，去接纳它，这会让你的效率翻倍。Jason 提到一个反面案例：他们曾推出一款能自动追踪所有销售举动的 RevOps 工具，结果一个老员工在上线当天就辞职了，因为他三十天啥也没干，彻底露馅了 [61:29 Jason Lemkin]。未来你的一切都会全透明。

最后，Jason 抛出了一个极具情绪感染力的年终总结式建议：**在假期里，用浏览器的「无痕模式」假装新客户，去体验一下你自家公司的产品。** 试试你的客服多久回消息、试试销售联系有多费劲。「挑出那个让你气得想哭的环节，去买个智能体把它修好。」

> 【背景】RevOps（Revenue Operations，营收运营）指统筹管理公司销售、市场等各环节营收流程的岗位或工具。

不过，Jason 对行业的长期前景依然极度乐观：AI 领导者们的增长太猛了（比如有公司靠 AI 把单个销售的年产出从三五十万美元拉升到了 300 万到 500 万美元 [60:38 Jason Lemkin]），所以整个行业其实需要比以往更多的人类来填坑——只不过，新坑留给的是那些掌握了 AI 工具的超级人类，而不是还在装「会搞关系」的旧人类。

## 本集带走

1. **不亲自训练的智能体等于废铁**：AI 智能体无法开箱即用。哪怕底层模型再强，不经过上传最佳销售话术、每日纠错和 30 天的持续打磨，它的成功率就是零。亲自上手「训练、摄取、编排」，是领导者明年不被淘汰的唯一出路。
2. **选型不看功能看部署帮扶**：各家底层调用的模型大同小异。决定成败的关键是供应商愿不愿意派人手把手帮你调通产品。对初创公司来说，派人入驻客户现场确保「上线即出业绩」，是抢占大公司市场的终极武器。
3. **「只会搞关系」不再是护城河**：明年起，发邮件的 SDR 和审核线索的 BDR 将基本灭绝。能活下来并拿高薪的，是那些真正懂产品、懂技术异议、能指挥 10 个智能体的超级个体。

## 金句(中英对照 · 过机器闸门三联校验)

> 我们在销售领域雇佣人类这件事已经结束了。  
> *We're done with hiring humans in sales.*  
> —— Jason Lemkin · [07:50] ^q1

> AI 正在取代人们今天不想做的工作，并且正在取代中游和平庸的人。  
> *AI is replacing the jobs people don't want to do today, and it is displacing the midpack and the mediocre.*  
> —— Jason Lemkin · [00:31] ^q2

> 所有的策略都有效。是那些剧本在 AI 时代有点坏了。  
> *All the plays work. It's the playbooks that are kind of broken in the age of AI.*  
> —— Jason Lemkin · [14:30] ^q3

> 基于邮件节奏的 SDR 明年将被 AI 取代 90%。  
> *The email-based cadence SDR will be 90% displaced by AI next year.*  
> —— Jason Lemkin · [19:49] ^q4

> 如果你在等你的团队的人去做，如果你在等一家代理机构去做，我认为你会失业。  
> *If you're waiting for people on your team to do it, if you're waiting for an agency to do it, I think you're going to be out of a job.*  
> —— Jason Lemkin · [28:26] ^q5

> 我们成交了一个七位数的交易，是我们从 Lovable 那里抢来的，因为 Lovable 没人回电话给他们。  
> *We closed a seven figure deal we stole from Lovable because no one called them back at Lovable.*  
> —— Jason Lemkin · [15:50] ^q6

> 你可能拥有的最好的初创公司也许就是今天你正在工作的那家。  
> *The best startup you're ever going to have probably is the one you're working at today.*  
> —— Jason Lemkin · [97:11] ^q7

> 在 AI 行得通的任何地方，需求是无穷无尽的。  
> *AI works, the demand is inexhaustible.*  
> —— Jason Lemkin · [16:42] ^q8

> 你会为你的支持有多糟糕而哭泣。  
> *You're going to cry how bad your support is.*  
> —— Jason Lemkin · [85:56] ^q9

> 总的来说，我们将需要比以往更多的销售和进入市场专业人士，因为赢家增长得太快了，即使他们效率更高，他们也比以往更需要人类。  
> *Net net, we're going to need more sales and go-to-market professionals than ever because the winners are growing so quickly that even if they're more efficient, they will need more human beings than ever.*  
> —— Jason Lemkin · [76:29] ^q10

## 相关单集

- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同公司:Bolt、Lovable、Replit · 同概念:智能体 (agent)
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|《把销售当产品做：用 AI 重构 GTM 团队的实战指南》]] —— 同公司:Vercel · 同概念:SDR、智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《The AI paradox: More automation, more humans, more work | Dan Shipper》]] —— 同概念:前线部署工程师 (Forward Deployed Engineer)、智能体 (agent)
- [[2026-02-26-lennys-ai-is-critical-for-humanitys-survival|《AI is critical for humanity’s survival: Cisco president on the AI revolution | Jeetu Patel》]] —— 同概念:智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《From skeptic to true believer: How OpenClaw changed my life | Claire Vo》]] —— 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《Why half of product managers are in trouble | Nikhyl Singhal (Meta, Google)》]] —— 同概念:智能体 (agent)
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《Why cultivating agency matters more than cultivating skills in the AI era | Max Schoening (Head of Product, Notion)》]] —— 同概念:智能体 (agent)
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella：Microsoft Build特别跨界对谈》]] —— 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《The hidden pattern behind successful products | Mark Pincus (founder of Zynga)》]] —— 同概念:智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《What happens after coding is solved? | Fiona Fung (Manager of the Claude Code and Cowork Teams)》]] —— 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《神话之后的红队评估 — Zico Kolter与Matt Fredrikson，Gray Swan》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《为什么前沿生态必须开放》]] —— 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《No Figma. No Jira. No docs. How Gusto built a new product line with Claude Code | Eddie Kim (CTO)》]] —— 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《为什么 AI 基础设施必须为「Agent 体验」进化》]] —— 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:智能体 (agent)
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《Netflix CPTO on AI and the future of product and tech roles | Elizabeth Stone》]] —— 同概念:智能体 (agent)
- [[2025-11-20-lennys-slack-founder-stewart-butterfield|《把自家产品骂成「一坨狗屎」：Stewart Butterfield 的产品哲学》]] —— 同公司:Salesforce

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
