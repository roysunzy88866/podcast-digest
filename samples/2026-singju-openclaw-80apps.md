---
title: "OpenClaw创始人：为何80%的应用将消失"
podcast: SingjuPost 转录
date: 2026-07-14
source_url: https://singjupost.com/openclaw-creator-why-80-of-apps-will-disappear-transcript/
duration: "NaN:NaN"
guests: ["[[Raphael Schaad]]", "[[Peter Steinberger]]"]
companies: ["[[Codex]]", "[[Claude Code]]"]
concepts: ["[[OpenClaw]]", "[[智能体]]", "[[MCP]]", "[[提示注入]]", "[[CLI]]", "[[护城河]]"]
tags:
  - 个人智能体
  - 本地运行
  - AI 编码
  - 智能体交互
  - 模型护城河
---

# OpenClaw创始人：为何80%的应用将消失

> [!info] 关联
> **嘉宾**:[[Raphael Schaad]] · [[Peter Steinberger]]
>
> **涉及公司**:[[Codex]] · [[Claude Code]]
>
> **概念**:[[OpenClaw]] · [[智能体]] · [[MCP]] · [[提示注入]] · [[CLI]] · [[护城河]]
>
> **来源**:[SingjuPost 转录](https://singjupost.com/openclaw-creator-why-80-of-apps-will-disappear-transcript/)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-singju-openclaw-80apps.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

OpenClaw 作者谈运行在本地的个人 AI 智能体如何吞掉多数 App、用 CLI 取代 MCP,以及他作为独立开发者的构建哲学。

[[Peter Steinberger|Peter Steinberger]] 做的开源项目 [[OpenClaw|OpenClaw]](一个跑在你自己电脑上的个人 AI [[智能体|智能体]],GitHub 仓库几乎一夜之间冲到超过 16 万颗星)最近在互联网上彻底爆了（[[Raphael Schaad|Raphael Schaad]]）。他自己也形容「这简直太狂野了,我不知道一个人怎么能吸收所有这些」,坦言收到了「非常酷的东西」也收到了「非常糟糕的东西」,但显然击中了某种激发情绪、让人感兴趣的东西（Peter Steinberger）。

> 【背景】OpenClaw 此前用过多个名字,在访谈中 Peter 提到它曾叫 CloudBot;项目名是「第五个名字」[00:20]。Peter 在访谈中常把自己那个有独特性格的个人智能体称为「Motty」[04:50]。

## 为什么是它起飞:本地运行 = 无所不能

很多人在做 AI 甚至个人助手,Peter 认为 OpenClaw 的最大不同在于「它实际上是在你的电脑上运行的」——他目前看到的所有东西都在云端跑,只能做几件事;而如果直接跑在你的电脑上,「它可以做每一件该死的事情」（Peter Steinberger）。主持人接得很干脆:「这台机器可以做你能用这台机器做的任何事」（Raphael Schaad）。Peter 举例:可以连你的烤箱、特斯拉、灯、Sonos,甚至控制他床的温度——「ChatGPT 做不到」（Peter Steinberger）。

> 【背景】Peter 是资深 iOS/macOS 开发者,访谈里提到他为此「复出」,早先还花两个月做过一个叫 Wipe Tunnel 的项目。

本地 + 全盘数据 = 能给你惊喜。他讲了个故事:一位朋友装了 OpenClaw,让它「浏览我的电脑并对我去年做一个叙述」,结果它翻到了一年多前他自己都忘了的每周日录音文件,做出了非常好的叙述。仅仅因为它能搜索整台电脑,就能在很多方面给你惊喜（Peter Steinberger）。

## 从「人-机」到「机-机」再到「机雇人」

主持人把镜头拉远:我们正从人与机器人的交互,转移到机器人与机器人的交互,甚至机器人代表你去雇佣其他人类来完成现实世界里的任务（Raphael Schaad）。Peter 觉得这是自然的下一步:比如要订餐厅,你的机器人会直接联系餐厅的机器人去谈判,更高效;如果对方是老式餐厅不接受机器人,你的机器人就去找个人类帮忙打电话、甚至去排队（Peter Steinberger）。他进一步想象:未来你可能有多个专精的机器人,一个管私生活、一个管工作、甚至一个「关系机器人」——「我们还太早了,还有很多事情我们真的没弄清楚它是否真的有效。但我觉得我们现在已经在时间线上了」（Peter Steinberger）。

主持人顺势点出过去十天左右涌现的范式转变:「似乎每个人都在追逐某种集中的上帝智能。而在过去十天左右涌现出来的似乎是群体智能和社区智能」（Raphael Schaad）。Peter 从人类分工类比:一个人造不出 iPhone、上不了太空、甚至可能找不到食物;但作为群体我们分工,作为更大的社会分工更细。「我们已经拥有专精于某些事情的 AI。即使它是通用智能,如果它实际上也是专用智能呢?」（Peter Steinberger）。

## Aha 时刻:模型自己写出了创作者没预想的方案

主持人请他重现那个「哇,这做的事情比我实际想象的要多得多」的时刻（Raphael Schaad）。

Peter 回忆:最初那个「非常烂的原型」只花了他一小时,就是在连接 WhatsApp 和 [[Claude Code|Claude Code]] 的依赖之间加了点「胶水」,会慢但能跑。后来他想要图像(让模型发自拍、创建图片发回来)又加了几个小时（Peter Steinberger）。转折发生在马拉喀什一次生日派对:网不好但 WhatsApp 能用,他就大量拿它翻译、解释照片,觉得「真的太有用了」,而且模型「说我的语言、有点小傲娇、很有趣」（Peter Steinberger）。

真正的震撼时刻:他走着给模型发了条语音,发完才反应过来「等等,这不可能工作。我没建那个」（Peter Steinberger）。输入指示器闪了十秒,模型回复了。他问它怎么做到的,模型还原了自己的思路:你发的消息没有文件后缀,所以我看了头部,发现是 Opus 格式,用 FFMPEG 转成 WAV;想转录但没装 Whisper,于是找了找,发现一个 OpenAI 的密钥,就用 curl 把它发给 OpenAI,拿回文本——全程大概九秒（Peter Steinberger）。

> 【背景】Opus 是一种音频编码格式;FFMPEG 是处理音视频的经典命令行工具;Whisper 是 OpenAI 的语音识别模型;curl 是命令行下发送网络请求的常用工具。模型在这段里靠「看头部判断格式 + 找现成工具 + 找现成密钥」自己拼出了一条链路。

Peter 强调,这些具体步骤他「没有构建或预料到任何那些具体的事情」（Raphael Schaad）。他的结论是:编码模型之所以能做到,是因为「编码真的就像创造性问题解决,它很好地映射回现实世界」——这是一种既能写代码、也能做现实任务的抽象技能。模型甚至聪明到不去本地装 Whisper,因为它知道那要下载几分钟,而「我没耐心」,于是选了最聪明的办法。就是那一刻他被彻底钩住了（Peter Steinberger）。

## 多数 App 会消失,但记忆才是护城河

主持人抛出大问题:当电脑能做这些你没预料到的事,应用程序会不会消失?Peter 的判断:「它们中的 80% 会消失」（Peter Steinberger）。理由是:凡是「基本上只是管理数据」的应用,都能被智能体以更自然的方式管理。比如不需要健身应用,因为智能体已经知道你在做错误决定(比如在 Smashburger),你不评论它就自动追踪、拍照就归档,还会顺手改进你的健身计划;也不需要待办应用,你说一句它就提醒。只有那些「实际上有传感器」的应用也许能活下来（Peter Steinberger）。

那模型公司呢?Peter 一方面承认大模型公司有[[护城河|护城河]],「因为它们最终提供 token」——大家抱怨用掉太多 token,其实是因为你太爱用它（Peter Steinberger）。但他同时指出模型护城河没那么牢:每次新模型一发布大家都惊叹「太好了」,一个月后就习惯了,然后觉得它变差了;其实模型还是那个平均水准,只是你的期望被拉高了。「在可预见的未来,大公司仍然在硬件方面有护城河」（Peter Steinberger）。

> 【背景】Peter 在这里把「quantize(量化)」口误说成了「quanticize」;量化是一种压缩模型体积的技术,常被怀疑是模型「变笨」的元凶。他打趣说其实公司「什么也没做」,是你适应了新标准。

主持人追问:App 要走、模型大脑可替换,那剩下的价值在哪——是记忆的存储,还是硬件?（Raphael Schaad）。Peter 把矛头指向「数据孤岛」:每家公司都想把你绑在它的数据孤岛里,「绝对没有别的公司可以提取你的记忆的方法」;而 OpenClaw 的美妙之处在于「它有点像把数据抓过来,因为终端用户需要访问权限」（Peter Steinberger）。主持人补了一句:这些记忆就是你自己机器上的一堆 markdown 文件（Raphael Schaad）。Peter 也承认这些文件超级敏感——「人们使用智能体不仅是为了解决问题,而且非常快地为了个人解决问题」（Peter Steinberger）,他自己就有不想被泄露的东西（Peter Steinberger）。

## 公开 Demo 的疯狂玩法:把无限制的机器人放进 Discord

为了让更多人「体验到」OpenClaw(他觉得光靠推文解释不清楚它的厉害之处（Peter Steinberger）),Peter 做了件挺疯的事:创建了一个 Discord,把自己的机器人没有任何安全限制地放进去,让公众进来交互、看他用它构建软件,甚至尝试[[提示注入|提示注入]](通过伪装输入来诱导 AI 偏离原定指令的攻击手法)来黑它。「我的智能体会嘲笑他们」（Peter Steinberger）。安全靠的是系统提示词锁定:机器人「只听我的,但响应所有人」（Peter Steinberger）。

> 【背景】这段里的 Codex 指 OpenAI 推出的命令行编码智能体,与 Claude Code(Anthropic 推出的同类命令行编码智能体)是当下两大主流,后文 Peter 反复对比这两者。

他的系统是「非常有机」地长出来的:先后建了 identity MD、SOL MD 等各种文件;到一月才开始让别人更容易安装。他让 [[Codex|Codex]] 帮他基于自己的配置生成模板,产物被形容为「面包」——「人们开玩笑说 Codex 感觉像面包」,「新机器人跟我拥有的相比太无聊了」。于是他让 Motty「用你的性格注入那些模板」,之后出来的东西「实际上很有趣」（Peter Steinberger）。

他特别提到那个唯一不开源的文件——SOL MD。灵感来自 Anthropic 的一项研究:有人发现模型权重里隐藏着一段文本,模型自己并不「记得」学过,但它已经「铭刻在权重里」,现在被称为「Constitution」（Peter Steinberger）。

> 【背景】Anthropic 是 Claude 系列模型的公司,「Constitution/宪法」在这里指模型训练中写入价值观与行为准则的做法,使模型在推理时自然体现这些原则而不需要显式记忆。

Peter 觉得这极其迷人,于是和自己的智能体一起创建了 SOL MD,写下核心价值——「我们想要什么样的人机交互、什么对我重要、什么对模型重要」。有些部分他自己也觉得有点像 mumbo jumbo(含糊其辞的空话),但有些部分对「模型如何反应和响应文本、让它感觉很自然」非常有价值。至今「没有人攻破那一个文件」（Peter Steinberger）。

## 构建哲学:Codex 而非 Claude Code、拒绝 work tree、不做 MCP

主持人注意到 Peter 在好几点上都挺反向,请他展开讲讲怎么构建（Raphael Schaad）。

**选 Codex 不选 Claude Code**。「全世界都在用 Claude Code,我不觉得我可以用 Claude Code 构建任何东西」。他爱 Codex,因为「它在决定更改什么之前浏览了更多的文件」,对熟练驾驶员来说不用做那么多伪装就能得到好输出（Peter Steinberger）。

> 【背景】Claude Code 与 Codex 都是让 AI 直接在命令行/本地仓库里改代码的工具;Git work tree 是 Git 的一种机制,能让同一仓库的多个工作树并存以并行处理多条分支,近年在 AI 编码工具里被频繁采用。

**Codex 很慢,那就开十个一起跑**。「它非常慢。所以我有时同时使用 10 个——也许那个屏幕上 6 个,那里 2 个,那里 2 个」（Peter Steinberger）。

**拒绝 work tree,只用多个仓库副本**。Peter 说同步切换十个 Codex 已经够复杂了,所以要把其他复杂度降到最低。在他脑子里「main 总是可发布的」,于是他干脆把同一仓库克隆成多个副本,都停在 main 上,这样不用纠结分支命名、不用处理 work tree 带来的各种限制。「我不喜欢使用 UI,因为这又增加了复杂度……我只关心同步和文本」（Peter Steinberger）。代码他大多「看到它飞过」,只有遇到棘手的才会细看。

**故意不做 [[MCP|MCP]] 支持,用 [[CLI|CLI]] 取代**。这是最反潮流的一招。「我很高兴我甚至没有构建 MCP 支持。OpenClaw 非常成功,里面没有 MCP 支持」(只带一个小星号:他写了个技能,用自己的工具 MakePorter 把 MCP 转成 CLI 来用)（Peter Steinberger）。

> 【背景】MCP(Model Context Protocol)是 Anthropic 提出的一套让大模型调用外部工具/数据的协议,被视为给 AI「插外设」的标准;CLI 是 Unix 命令行工具的统称,也是程序员最熟悉的交互方式。

他的理由是:「你不需要它」。这样还能即用即插、不用像 Codex 或 Claude Code 那样改配置就重启整套东西。他直接开火:「现在你看 Anthropic——他们构建了一个工具调用搜索功能,一些为 MCP 定制的东西,那是测试版,因为它太棘手了。不,只需要 CLI。机器人真的擅长 Unix。你可以想要多少就有多少,它就能工作」（Peter Steinberger）。

主持人替他总结:「这有点回到——你只是给它人类喜欢用的同样的工具,而不是专门为机器人发明东西」（Raphael Schaad）。Peter 一锤定音:「没有理智的人类会尝试手动调用 MCP……那就是未来」（Peter Steinberger）。

## 金句(中英对照 · 过机器闸门三联校验)

> 看起来每个人都在追逐某种集中的上帝智能。而在过去十天左右涌现出来的似乎是群体智能和社区智能。  
> *It seems like everyone was chasing sort of the centralized God intelligence. And what has sort of emerged over the past 10 days or so is sort of the swarm intelligence and the community intelligence.*  
> —— Raphael Schaad · 来自原文 ^q1

> 即使它是通用智能,如果它实际上也是专用智能呢?  
> *Even though it’s generalized intelligence, what if it actually is also specialized intelligence?*  
> —— Peter Steinberger · 来自原文 ^q2

> 所以公司试图把你绑定到他们的数据孤岛。  
> *So the companies try to bind you to their data silo.*  
> —— Peter Steinberger · 来自原文 ^q3

> 不,只需要 CLI。机器人真的擅长 Unix。你可以想要多少就有多少,它就能工作。  
> *No, just have CLIs. The bot really is good at Unix. You can have as many as you want and it just works.*  
> —— Peter Steinberger · 来自原文 ^q4

> 没有理智的人类会尝试手动调用 MCP。  
> *No sane human tries to call MCP manually.*  
> —— Peter Steinberger · 来自原文 ^q5

> 必须是一个来自离硅谷很远的某个小国家的独行侠带给我们这一切。  
> *it had to be a loner from some tiny country far away from Silicon Valley to bring all of this upon us.*  
> —— Raphael Schaad · 来自原文 ^q6

## 相关单集

- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《From skeptic to true believer: How OpenClaw changed my life | Claire Vo》]] —— 同公司:Claude Code、ChatGPT · 同概念:OpenClaw、智能体 (agent)、MCP
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《The AI paradox: More automation, more humans, more work | Dan Shipper》]] —— 同公司:Claude Code、Codex · 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《Why half of product managers are in trouble | Nikhyl Singhal (Meta, Google)》]] —— 同公司:Codex · 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《神话之后的红队评估 — Zico Kolter与Matt Fredrikson，Gray Swan》]] —— 同概念:OpenClaw、智能体 (agent)
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《Head of Growth (Anthropic): “Claude is growing itself at this point” | Amol Avasare》]] —— 同公司:Claude Code · 同概念:MCP
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《What happens after coding is solved? | Fiona Fung (Manager of the Claude Code and Cowork Teams)》]] —— 同公司:Claude Code · 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《No Figma. No Jira. No docs. How Gusto built a new product line with Claude Code | Eddie Kim (CTO)》]] —— 同概念:智能体 (agent)、OpenClaw
- [[2026-04-26-lennys-snapchat-ceo-why-distribution-is|《Snapchat CEO: Why distribution has become the most important moat | Evan Spiegel》]] —— 同概念:护城河 (moat)
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《Why cultivating agency matters more than cultivating skills in the AI era | Max Schoening (Head of Product, Notion)》]] —— 同概念:智能体 (agent)
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella：Microsoft Build特别跨界对谈》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《为什么前沿生态必须开放》]] —— 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《为什么 AI 基础设施必须为「Agent 体验」进化》]] —— 同概念:智能体 (agent)
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《Netflix CPTO on AI and the future of product and tech roles | Elizabeth Stone》]] —— 同概念:智能体 (agent)
- [[2026-02-26-lennys-ai-is-critical-for-humanitys-survival|《AI is critical for humanity’s survival: Cisco president on the AI revolution | Jeetu Patel》]] —— 同概念:智能体 (agent)
- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同公司:Claude Code
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《The hidden pattern behind successful products | Mark Pincus (founder of Zynga)》]] —— 同概念:智能体 (agent)

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
