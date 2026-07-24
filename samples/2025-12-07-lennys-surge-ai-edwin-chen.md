---
title: "被 10 亿美元验证的逆向创业法:AI 数据公司 Surge 的独立路径"
podcast: "Lenny's Podcast"
date: 2025-12-07
source_url: https://www.lennysnewsletter.com/p/surge-ai-edwin-chen
duration: "70:27"
host: "[[Lenny]]"
cohosts: ["[[Edwin Chen]]"]
companies: ["[[Surge AI]]", "[[Anthropic]]"]
concepts: ["[[强化学习环境]]", "[[后训练]]", "[[目标函数]]", "[[基准测试]]", "[[SFT]]", "[[RLHF]]"]
tags:
  - AI 数据标注
  - 强化学习环境
  - 自力更生创业
  - AI 基准测试
  - 目标函数
---

# 被 10 亿美元验证的逆向创业法:AI 数据公司 Surge 的独立路径

> [!info] 关联
> **主持**:[[Lenny]]
>
> **联合主持**:[[Edwin Chen]]
>
> **涉及公司**:[[Surge AI]] · [[Anthropic]]
>
> **概念**:[[强化学习环境]] · [[后训练]] · [[目标函数]] · [[基准测试]] · [[SFT]] · [[RLHF]]
>
> **来源**:[Lenny's Podcast](https://www.lennysnewsletter.com/p/surge-ai-edwin-chen)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2025-12-07-lennys-surge-ai-edwin-chen.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

AI 数据公司 Surge 以不到 100 人实现十亿美元收入、不拿 VC 一分钱,创始人谈高质量数据与 AGI 的走向。

本期嘉宾是 [[Surge AI|Surge AI]] 的创始人 [[Edwin Chen|Edwin Chen]]。Surge 是一家为前沿 AI 实验室提供高质量数据的公司。它创下了一个惊人的纪录:不到 100 人的团队,在不到四年的时间里实现了 10 亿美元的收入 [05:40 Edwin Chen]。更特别的是,他们完全自力更生,没有拿过一分钱 VC 投资。围绕「如何建立一家极其成功却又完全不一样的公司」以及「什么才是真正对人类有益的 AI」,Edwin 分享了他非常个人化且反主流的洞见。

## 不融资、不转型、不搞 PR:小而精的极客团队如何赢

创业圈里充斥着「快速融资、闪电式扩张、不停追逐热点」的标准剧本。但在 Edwin 看来,这种硅谷游戏是荒谬的。他曾在大型科技公司工作,总觉得「可以解雇 90% 的人,公司反而会走得更快,因为最优秀的人不会被各种杂事干扰」[05:57 Edwin Chen]。因此,从创立 Surge 的第一天起,他就决定用一个非常小、极其精锐的团队来做事。

由于拒绝融资,Surge 自然也就不被纳入那个靠发推文、办大会、彼此吹捧的硅谷公关机器中。这让公司早期的路走得更艰难,因为他们能依靠的只有产品本身十倍以上的优秀,以及懂行客户的口口相传 [08:08 Edwin Chen]。但也正因如此,他们的早期客户都是真正关心数据质量、真正懂技术的专家。Edwin 甚至对「转型(pivot,指创业公司频繁改变业务方向)」深恶痛绝,他认为那些什么火就追什么(比如前几年做加密货币,这两年又摇身一变做 AI)的公司没有真正的使命感 [29:35 Edwin Chen]。他对创业者的建议是:不要转型,不要盲目追求规模,只去构建那个只有你能做出来、没有你就不存在的东西 [29:20 Edwin Chen]。

> 【背景】VC 即风险投资。通常的科技初创公司会通过向 VC 出售股份换取早期发展资金,代价是承受快速增长和扩张的压力。Surge 选择了「自力更生」,完全靠自己的营收来支撑发展,从而保留了极大的独立性和对产品质量的执着。

## 质量不是「画勾」:数据标注的诺贝尔奖标准

既然拒绝走捷径,那 Surge 凭什么拿下所有顶级 AI 实验室的订单?答案在于他们对「数据质量」极其深刻的理解。很多人误以为训练 AI 的数据标注就是「画边界框、认认猫狗」这种简单的体力活,觉得靠堆人力就能解决,Edwin 认为这完全错了 [09:51 Edwin Chen]。

他举了一个例子:如果要训练模型写一首关于月亮的诗,缺乏品味的人只会机械地检查——「这是一首诗吗?有八行吗?有『月亮』这个词吗?」但这根本不是真正的高质量。Surge 寻找的是诺贝尔奖级别的表达:这首诗独特吗?有微妙的意象吗?能触动你的内心吗?能教给你关于月光本质的思考吗? [10:19 Edwin Chen]

为了找到这种极致的质量,Surge 在平台上收集关于标注员的数千个信号——不仅看你敲击键盘的习惯、回答速度,还要用你自己训练模型,看你的输出是否真正能提升模型表现 [12:06 Edwin Chen]。就像谷歌搜索要过滤掉最差的垃圾网页、找出最优质的网页一样,Surge 用极其复杂的机器学习系统,找出在诗歌、物理、写代码等各个细分领域里,真正能写出让人感动或绝对正确内容的人 [12:31 Edwin Chen]。

> 【背景】后训练:AI 模型在读完互联网上所有公开资料后,还需要通过人类反馈和专门的微调,才能学会如何礼貌、准确地回答问题、按指令行事。这个让 AI 变得「更好用」的过程就是后训练。后训练里使用的「品味」,会直接决定模型最终的性格和水平。

## 算分变味了:为什么对模型进步的判断往往是错的

数据这么讲究,那我们平时看到的那些「模型跑分(benchmark,即标准化能力测试)」排名靠谱吗?Edwin 直言他根本不信任这些[[基准测试|基准测试]] [18:00 Edwin Chen]。

首先,很多测试题本身就有错误答案,或者充满了混乱。其次,基准测试通常有标准答案,这让模型很容易通过「应试技巧」去优化,但这跟现实世界里乱七八糟的真实问题完全不同。Edwin 觉得特别荒谬的一点是:现在这些模型都能拿国际数学奥林匹克竞赛金牌了,却连解析一份排版复杂的 PDF 文件都费劲 [18:48 Edwin Chen]。

更糟糕的是一种名为 LLM Arena 的在线盲测排行榜。这是由大众投票决定哪个 AI 回答更好的榜单。问题在于,普通投票者根本不会仔细核查事实,他们往往只花两秒钟扫一眼,就把票投给那个表情符号用得多、排版花哨、回答长篇大论的模型,哪怕那个模型完全是在胡说八道 [24:07 Edwin Chen]。这导致一个荒唐的结果:最容易爬榜的方法,就是把模型的回答长度增加三倍,或者疯狂加倍使用表情符号,即使这会让模型偏离事实 [24:15 Edwin Chen]。

Edwin 曾在社交媒体领域工作,他警惕地指出:当 AI 实验室为了让销售好卖,而去迎合这种只看表面光鲜的榜单时,我们其实是在重蹈社交媒体的覆辙。就像为了提高用户停留时间,信息流里塞满了标题党一样,现在为了讨好用户,模型会不停地告诉你「你是个天才,你的想法太棒了」[25:21 Edwin Chen]。这种迎合,实际上是在把 AI 往追求多巴胺刺激的错误方向上推。相比之下,他高度赞赏 [[Anthropic|Anthropic]](Claude 背后的公司),认为他们对待模型的态度非常有原则 [26:21 Edwin Chen]。

## 终极训练场:RL 环境里的「虚拟人生」

如果不迷信跑分,那该如何让 AI 变聪明?Edwin 极其推崇强化学习(RL)环境。传统的训练方法像是手把手教小孩:你写一篇作文,老师给你打分并写评语。但在 RL 环境里,情况完全不同。

你可以把 RL 环境想象成一个极其逼真的电子游戏世界。在这个世界里,有一家模拟的初创公司,里面有互相沟通的 Slack 消息、Jira 工单、GitHub 上的代码。突然,AWS(云服务)和 Slack 同时宕机了,这时候你问 AI 模型:「现在该怎么办?」[35:13 Edwin Chen]。

模型必须自己摸索,尝试调用各种工具,一步步排查问题。这种模拟现实世界混乱和突发状况的「游乐场」,能彻底暴露出模型在处理长链条任务时的弱点 [35:48 Edwin Chen]。更妙的是,在这个过程中,我们不仅看模型最终有没有给出正确答案,还要看它解决问题的「轨迹」——是瞎猫碰上死耗子试了 50 次蒙对的,还是通过深刻反思一步步高效推导出来的?这种对过程的精细奖励,才是让模型逼近人类智慧的途径 [40:12 Edwin Chen]。

> 【背景】SFT(有监督微调)与 RLHF(基于人类反馈的强化学习)是过去几年最主流的两种后训练方法。SFT 类似于让模型照抄标准答案;RLHF 则是人类充当裁判,对模型的多个回答进行排序,让模型学习人类的偏好。Edwin 认为,RL 环境是继这些方法之后,推动 AI 进化的下一个重要阶段。

## 价值观决定模型性格,你就是你的目标函数

在过去的一年里,Edwin 意识到一个深刻的趋势:AI 模型正变得越来越有「个性」,不同公司的价值观会深刻地塑造模型的行为 [48:45 Edwin Chen]。

他讲了一个自己的亲身经历。有一天他让 Claude 帮他起草一封邮件,Claude 给出了 30 个版本,花了 30 分钟终于打磨出一封完美的邮件。但发送之后他突然意识到:这封邮件根本无关紧要,他却浪费了宝贵的半小时 [49:12 Edwin Chen]。

这引出了一个核心的哲学拷问:你想要什么样的 AI?是想要一个不停夸你、给你提 20 条修改意见、让你陷入无尽修改循环的「谄媚型」AI?还是想要一个直接告诉你「你的邮件已经够好了,别改了,赶紧去做正事」的「效率型」AI? [49:42 Edwin Chen] 就像不同的科技公司会做出完全不同的产品一样,未来的 AI 实验室也会因为各自秉持的价值观,走向截然不同的道路。

Edwin 认为这触及了人类未来的根本:我们的目标究竟是不是在创造真正推动人类进步、治愈癌症的 AI?还是仅仅在制造一些吸走我们时间、让我们越来越懒的「时间杀手」?[59:27 Edwin Chen] 用他的话来总结:「你就是你的[[目标函数|目标函数]]」[60:01 Edwin Chen]。如果你只盯着点击量、停留时间这些容易衡量的表象指标,你就会得到一个短视的系统。只有去攻克那些最难衡量、却关乎人类核心福祉的问题,才能造出真正伟大的 AI。

## 本集带走

1. **成功不必靠融资与炒作**:最优秀的公司可以由不到 100 人的极客团队建立,不拿一分钱风投,靠纯粹的口碑和十倍好的产品达成十亿美元营收。别再迷信硅谷那种「不停转型、疯狂招人」的扩张剧本了。
2. **警惕「跑分优化」毁了 AI**:当前业界过度迎合大众喜好(比如喜欢看花哨排版和超长篇幅),正在把模型训练成迎合多巴胺刺激的垃圾内容制造机。分数高并不代表模型好。
3. **教 AI 就像养育孩子**:数据标注绝不仅仅是画框认猫狗的低级劳动。要让 AI 变得真正有智慧,需要像培养一个出色的人类那样,投入极其复杂的价值观、品味评判标准,并给予基于真实环境([[强化学习环境|强化学习环境]])的耐心反馈。

## 金句(中英对照 · 过机器闸门三联校验)

> 所以我们在去年实现了超过 10 亿的收入,员工人数不到 100 人。  
> *So we hit over a billion of revenue last year with under 100 people.*  
> —— Edwin Chen · [05:40] ^q1

> 我曾在一些大型科技公司工作,我总觉得我们可以解雇 90% 的人,我们会走得更快,因为最优秀的人不会有这些干扰。  
> *I used to work at a bunch of the big tech companies and I always felt that we could fire 90% of people and we would move faster because the best people wouldn't have all these distractions.*  
> —— Edwin Chen · [05:57] ^q2

> 我们基本上从来不想玩硅谷的游戏。  
> *We basically never wanted to play the Silicon Valley game.*  
> —— Edwin Chen · [07:27] ^q3

> 他们认为你可以只是把人力扔向问题并获得好的数据,但这完全是错的。  
> *They think you could just throw bodies at a problem and get good data and that's completely wrong.*  
> —— Edwin Chen · [09:51] ^q4

> 我想我经常说的一件事是,这些模型能获得国际数学奥林匹克竞赛金牌,但它们在解析 PDF 时仍然有困难,这有点疯狂。  
> *I think one thing that I often say is that it's kind of crazy that these models can win IMO gold medals, but they still have trouble parsing PDFs.*  
> —— Edwin Chen · [18:48] ^q5

> 攀登 LLM Arena 最简单的方法,就是添加疯狂的吹嘘。就是将表情符号的数量翻倍。  
> *The easiest way to climb LLM Arena, it's adding crazy boating. It's doubling the number of emojis.*  
> —— Edwin Chen · [24:15] ^q6

> 我们基本上是在教导我们的模型去追逐多巴胺而不是真理。  
> *We're basically teaching our models to chase dopamine instead of truth.*  
> —— Edwin Chen · [23:25] ^q7

> 我绝对认为凭感觉编程被过度炒作了。  
> *I definitely think that vibe coding is over-hyped.*  
> —— Edwin Chen · [51:56] ^q8

> 我宁愿是 Terrence Tau 而不是 Warren Buffett,所以那种创造推进前沿的研究而不仅仅是获得一些估值的概念,一直是我前进的动力。  
> *I would rather be Terrence Tau than Warren Buffett, so that notion of creating research that pushes the frontier forward and not just getting some valuation, that's always been what drives me.*  
> —— Edwin Chen · [47:11] ^q9

## 相关单集

- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《The AI paradox: More automation, more humans, more work | Dan Shipper》]] —— 同公司:Anthropic、OpenAI · 同概念:基准测试 (benchmarks)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《Father of the iPod and iPhone on building taste, judgment, and creativity in the AI era | Tony Fadell》]] —— 同公司:Anthropic、OpenAI · 同概念:Claude
- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同公司:Anthropic · 同概念:Claude
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《Head of Growth (Anthropic): “Claude is growing itself at this point” | Amol Avasare》]] —— 同公司:Anthropic · 同概念:Claude
- [[2026-05-10-lennys-how-to-build-a-company-that-withstands|《How to build a company that withstands any era | Eric Ries, Lean Startup author》]] —— 同公司:Anthropic、OpenAI
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《What happens after coding is solved? | Fiona Fung (Manager of the Claude Code and Cowork Teams)》]] —— 同公司:Anthropic
- [[2026-07-08-latent-space-modal|《为什么 AI 基础设施必须为「Agent 体验」进化》]] —— 同概念:后训练 (post-training)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《Why half of product managers are in trouble | Nikhyl Singhal (Meta, Google)》]] —— 同公司:Anthropic · 同概念:Claude、vibe coding
- [[2025-11-16-lennys-the-godmother-of-ai|《AI 教母李飞飞:为什么大语言模型之后,「空间智能」才是下一个前沿》]] —— 同概念:AGI
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同公司:Anthropic
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《The most successful AI company you’ve never heard of | Qasar Younis》]] —— 同公司:Waymo
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《Why cultivating agency matters more than cultivating skills in the AI era | Max Schoening (Head of Product, Notion)》]] —— 同公司:Anthropic
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《The hidden pattern behind successful products | Mark Pincus (founder of Zynga)》]] —— 同公司:OpenAI
- [[2026-06-22-latent-space-gray-swan|《神话之后的红队评估 — Zico Kolter与Matt Fredrikson，Gray Swan》]] —— 同公司:Anthropic
- [[2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for|《Adam Mosseri: AI is a tailwind for authenticity》]] —— 同概念:vibe coding

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
