---
title: Vercel CEO：AI 时代，写代码的人要变成什么
podcast: 精选演讲
date: 2026-10-12
source_url: undefined
duration: "97:48"
type: episode
cover: "#64748b"
description: Vercel 创始人 Guillermo Rauch 聊 AI 编程工作流、公司如何用好智能体，以及被大家忽视的软件安全问题。
companies: ["[[Vercel]]", "[[fx]]", "[[v0]]", "[[Claude Code]]"]
concepts: ["[[智能体]]", "[[沙箱]]", "[[推理]]", "[[vibe coding]]", "[[供应链攻击]]", "[[网络安全]]", "[[评估]]", "[[技术债务]]", "[[Rust]]", "[[libheif]]", "[[DeepSecBench]]", "[[DeepSec]]", "[[程序员应该知道的延迟数字]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-02-talks-vercel-ceo-reveals-his-agentic-engineeri#post","headline":"Vercel CEO：AI 时代，写代码的人要变成什么","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-02-talks-vercel-ceo-reveals-his-agentic-engineeri","mainEntityOfPage":"https://talk.solomind.cc/2026-10-02-talks-vercel-ceo-reveals-his-agentic-engineeri","description":"Vercel 创始人 Guillermo Rauch 聊 AI 编程工作流、公司如何用好智能体，以及被大家忽视的软件安全问题。","datePublished":"2026-10-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Organization","name":"Vercel"},{"@type":"Organization","name":"fx"},{"@type":"Organization","name":"v0"},{"@type":"Organization","name":"Claude Code"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"vibe coding"},{"@type":"Thing","name":"供应链攻击 (supply chain attacks)"},{"@type":"Thing","name":"网络安全 (cybersecurity)"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"技术债务 (tech debt)"},{"@type":"Thing","name":"Rust"},{"@type":"Thing","name":"libheif"},{"@type":"Thing","name":"DeepSecBench"},{"@type":"Thing","name":"DeepSec"},{"@type":"Thing","name":"程序员应该知道的延迟数字 (Latency Numbers That Every Programmer Should Know)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Vercel CEO：AI 时代，写代码的人要变成什么","item":"https://talk.solomind.cc/2026-10-02-talks-vercel-ceo-reveals-his-agentic-engineeri"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Vercel CEO：AI 时代，写代码的人要变成什么</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Vercel CEO：AI 时代，写代码的人要变成什么

<div class="pd-byl">2026-10-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-02-talks-vercel-ceo-reveals-his-agentic-engineeri.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果我们把越来越多的开发生命周期迁移到沙箱里，我们就可以根除供应链攻击。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="00:25" data-who="嘉宾" data-en="We could eradicate supply chain attacks if we move more and more of this development lifecycle to sandboxes." aria-label="回原文"></button></div></div>

> [!info] 关联
> **公司** [[Vercel]] · [[fx]] · [[v0]] · [[Claude Code]]
>
> **概念** [[智能体]] · [[沙箱]] · [[推理]] · [[vibe coding]] · [[供应链攻击]] · [[网络安全]] · [[评估]] · [[技术债务]] · [[Rust]] · [[libheif]] · [[DeepSecBench]] · [[DeepSec]] · [[程序员应该知道的延迟数字]]

[[Vercel|Vercel]] 的创始人兼 CEO 来做客。Vercel 靠前端部署工具起家，如今在 AI 基础设施上全面下注。这场访谈信息量很大：

从他的个人编程工作流，到怎么判断一家公司会不会被 AI 甩开，再到一个大多数人还没认真对待的安全隐患。

> 【背景】这位嘉宾指 Guillermo Rauch，Vercel 创始人兼 CEO。

## AI 写代码时代，人的优势在哪？

Guillermo 的判断是：杠杆正在往上移一层。

你不再亲自写每一行代码，而是去编排一组[[智能体|智能体]]、设计软件工厂、决定把算力和模型花在什么问题上。

但他对人的价值很乐观。原因很简单：买单的终究是人，而人买的从来不只是功能，还有故事、品牌和品味。

他说，我们总以为自己决策很理性，但很多时候「我们买的是故事、氛围、品牌和口味」<button class="pd-ts" data-t="01:22" data-who="嘉宾" data-en="I'm a huge believer in our taste and our creativity as human beings because we're usually appealing to other human beings and we love to buy the stories and products and services from other human beings." aria-label="回原文"></button>。

编程也不会像种地那样消失。

他引用了自己一条表现很好的推文：工作时写软件，下班回家写软件放松，还和孩子、妻子一起写。

对很多人来说，写代码是创作媒介，这个需求拿不走——就像没人种地了，但阳台种菜的人反而多了。

## 新模型发布时，有一个可以捡钱的窗口

他给了一个具体建议：维护一份清单，记下今天所有模型都做不到的事。每次新模型发布，就拿清单去试。

**原来做不到的事一旦变成做得到，往往就是一门新生意**——某个功能的成本突然降一个数量级，或者某个体验突然变得可能。

另一个被低估的能力是[[评估|评估]]。

很多人用模型全凭网上流传的说法：读了某条推文就改了提示词，从没验证过结果是不是真的变好了。

他反问：==你有没有一套自己的评估集，帮你在这个每周都有新模型的世界里找方向==？<button class="pd-ts" data-t="08:11" data-who="嘉宾" data-en="And so I think there is a whole space of evaluation, whether it is that you can become a voice that helps other people through public evaluation, make sense of what models are best for what." aria-label="回原文"></button>

## 判断一家公司 AI 用得好不好：看修复延迟

他提出了一个很硬的衡量标准：从客户报告一个问题，到这个问题被修好、上线，中间隔多久？

用户在 Reddit 抱怨、打客服电话、发邮件说网络坏了——公司能不能用高质量的智能体响应？能不能自动启动事故调查？

问题明确可修的，能不能自动修掉、自动发布？「**那个能在 30 分钟内修好一切的公司，会摧毁要花两天才能修好的公司**。」<button class="pd-ts" data-t="16:07" data-who="嘉宾" data-en="Because if you go from first principles, business is a product that gets better over time. Totally. And unless you have a super small addressable market, it's like that business that can just fix everything in sub 30 minutes is going to destroy a business that takes two days." aria-label="回原文"></button>

当然不是所有反馈都能自动化。他举了个例子：

有用户反馈 Vercel 的导航让他困惑，但这条反馈没法直接变成提示词，还得产品负责人跟他来回沟通、要更多视频，再靠人的判断转成产品决策。

反馈越模糊，人越不可或缺。

## 速度快不等于方向对：迭代要有速度，更要有方向

他区分了两个词：iteration speed 和 iteration velocity。速度是你产出多快——花了多少 token、合了多少个代码请求。

但速度这个词本身不含方向，「**你可以一直合并代码请求，一路合并到毁灭**」<button class="pd-ts" data-t="18:03" data-who="嘉宾" data-en="And that's why, you know, when I hear about how many tokens you spend, token maxing, and when I hear about how many PRs you land, good for you, good metrics, but velocity implies speed in a direction." aria-label="回原文"></button>。

一位创业者的例子让他印象深刻：想法不错，但她在同时自建邮件服务和支付网关。

AI 让人觉得自己什么都能做，但正确的做法恰恰相反——挑少数几个你有超额优势的问题，把所有 token 都砸进去。

同时做 20 件事，结果就是 20 件平庸。

还有一个正在发生的现象：很多人发布速度飞快，但打开网站一看是一堆 AI 生成的粗糙产物。

他说，看到这种东西你会自动走神，因为「你能一次生成，我也能一次生成」<button class="pd-ts" data-t="20:16" data-who="嘉宾" data-en="I think people are really not like, it's almost like you're tuning out a bit when you see something that looks like it was just regurgitated by the LLM because, okay, what is the value add?" aria-label="回原文"></button>——没有增值，就没有价值。

## 他自己的工具：一个 11 兆的小命令行

Vercel 内部不强制规定用什么工具，但他个人的选择很有性格：

他一直是命令行和 NeoVim 用户，所以自然走向了 [[Claude Code|Claude Code]]，现在用的是 Vercel Labs 出的命令行工具 [[fx|fx]]。

这个工具体现了一种反潮流的哲学：极小、极快。安装包在磁盘上只占 11 兆，启动速度接近一个普通的 shell。

他刻意抵制给工具加界面的诱惑——很多工具一开始又小又快，慢慢膨胀，最后背着一堆插件变得笨重。

更妙的是它同时是一个可以被嵌入其他程序的库。

当年做 [[v0|v0]] 产品时，90% 的工程时间花在搭建智能体的运行框架上；如今用这套库，100 行代码就能拼出一个迷你 v0。

他还有个叫智能体探究（agentic inquiry）的习惯：

让智能体去试用 Vercel 的新技术，试着搞坏它、找竞态条件、量延迟，然后让它反过来反思——Vercel 在这个实验里本可以做得更好吗？<button class="pd-ts" data-t="31:12" data-who="嘉宾" data-en="A good example is when we announced drives, I had an agent go and try to break it, try to find race conditions, try to measure latency, try to compare it with alternatives." aria-label="回原文"></button>

## 工程师还需要懂底层吗？

现在流行一种论调：不用再读代码了，一切交给 AI。他明确反对。

他的立场是中间派：不必逐行读代码，但每次做完一件事，要弄明白刚才发生了什么。

**AI 反而让懂底层的人更值钱**——如果你从汇编到上层都理解整个技术栈，又擅长用 AI，你就是不可阻挡的<button class="pd-ts" data-t="51:43" data-who="嘉宾" data-en="That person is more valuable because they're going to use, I mean, unless, sadly, there's a category of those people that are anti-AI, maybe a little bit of like the ego of like how well they understood the previous world." aria-label="回原文"></button>。

他喜欢用一张经典表格举例：[[程序员应该知道的延迟数字|程序员应该知道的延迟数字]]。比如一个网络包从加州到荷兰再回来，大约要 150 毫秒。

他甚至拿这个当面试题，很多人会答错一个数量级。为什么有用？

如果 AI 部署的系统页面加载要 1 秒，你至少知道该往哪逼：「再快一点，再快一点。」

## 被严重低估的炸弹：老代码里的漏洞

这是全场最值得普通读者记住的部分。他指出，人类几十年写下的代码里，潜伏的漏洞数量几乎无法估量。

原因在于：**写正常路径的代码很容易，穷举所有边界情况在认知上极其耗费心力**，所以人写的代码几乎都没做全。

他讲了 OpenAI 被黑的事：起因是一个叫 [[libheif|libheif]] 的开源图像编码库，用 C 和 C++ 写的，里面藏着一个远程代码执行漏洞。

这个库嵌在 Slack、Next.js、OpenAI、Discourse 的图像处理流程里——一个小库，波及大半个互联网。

更糟的是，攻防的天平在倾斜。

他们发布的 [[DeepSecBench|DeepSecBench]] 基准显示，有些便宜的小模型找漏洞的效率高得吓人——坏演员也能用它们批量扫描开源代码找漏洞。

他的建议：赶紧自查，并考虑把关键库迁到 [[Rust|Rust]] 这类内存安全语言。

## 从笔记本到云端，是必然，但别走极端

智能体搬到云端跑不可避免：代码库太大、本地内存和 CPU 不够、并行需要多个[[沙箱|沙箱]]，而且云端能隔离[[供应链攻击|供应链攻击]]的伤害范围。

他甚至说，把开发生命周期更多搬进沙箱，理论上可以彻底消灭供应链攻击<button class="pd-ts" data-t="25:31" data-who="时代相近段落 Unknown" data-en="Because, like, most agents are very bloated, you know, with endless pre-ship skills, plug-ins. What comes to mind is Py, that's probably the closest minimal agent." aria-label="回原文"></button>——因为云端可以严格监控网络流量，恶意软件偷了数据也发不出去。

但他坚持保留拉回本地的选项：有时你就是要在显微镜下看一个程序怎么和系统互动，最低延迟地盯着它。

CLI 的价值也在这里——离金属越近越好。

## 如果 2026 年从零创业，先想清楚你要讲什么故事

被问到假设自己今天白手起家会怎么做，他的答案不是先选赛道，而是先想：我要向世界讲一个什么故事？

因为今天什么都能做出来，选题反而成了稀缺能力。

他还提醒：AI 并没有让人变闲。实际发生的是人们工作更拼了——投入的是创意、提示词、验证和评估的努力。

所以还是要选一个你真心在乎的问题。然后，「把野心放大 10 倍或 100 倍。

你能触达的人比你想象的多，能做的比你想的快，做得也比你想的好。」<button class="pd-ts" data-t="96:48" data-who="嘉宾" data-en="So I think you should still pick a problem that you feel very personally convicted about. And I think the other piece of advice is that you can 10x or 100x the ambition." aria-label="回原文"></button>

## 本集带走

- 新模型发布时，拿一份以前做不到的事的清单去试，窗口期里藏着生意机会。
- 衡量公司 AI 化程度的硬指标：从用户报告问题到修复上线的延迟。
- 速度不等于方向，把 token 集中砸在少数有优势的问题上，别同时开 20 条战线。
- 不必逐行读代码，但每次做完要理解发生了什么；懂整个技术栈又会用 AI 的人最值钱。
- 老代码里的安全漏洞几乎无法估量，而便宜的模型正在让批量找漏洞成为可能——这件事大多数人还没当回事。

<div class="pd-sec pd-sec-q">全部金句 <span>13 条</span></div>

> <span class="qz">如果我们把越来越多的开发生命周期迁移到沙箱里，我们就可以根除供应链攻击。</span>  
> *We could eradicate supply chain attacks if we move more and more of this development lifecycle to sandboxes.*  
> <span class="qm">—— 嘉宾 · [00:25]</span> ^q1

> <span class="qz">我认为是我们人类保持掌控的能力，我的意思是创意上的掌控，对网络安全风险的掌控，以及最终对如何让智能体为我们工作的掌控。</span>  
> *I think our ability to stay in control as humans and by that I mean creative control, control over the risks on cybersecurity, control over how we make the agents work for us ultimately.*  
> <span class="qm">—— 嘉宾 · [00:37]</span> ^q2

> <span class="qz">但很多时候，我们实际上是在为故事、氛围、品牌、风味和品味买单。</span>  
> *But a lot of the time we're actually buying into the stories and the vibes and the brands and the flavors and the tastes.*  
> <span class="qm">—— 嘉宾 · [01:27]</span> ^q3

> <span class="qz">真的会有回报，因为当一个模型发布时，几乎就像人们在探索它的潜在空间，发现什么是可能的。</span>  
> *It really pays off because when a model drops, it's almost like people are exploring its latent space and discovering what's possible.*  
> <span class="qm">—— 嘉宾 · [06:28]</span> ^q4

> <span class="qz">现在这里面有很多红利，非常讽刺，因为模型如此易用，你只用英语提示它们，然而它们又有一门精通之道。</span>  
> *There's a lot of alpha right now in which is super ironic because models are so easy to use that you just prompt them in English and yet there's a mastery to them.*  
> <span class="qm">—— 嘉宾 · [07:44]</span> ^q5

> <span class="qz">而模型会乐意在某件没用的事情上花 30 分钟，在某件人类工程师在更大的情境下会直接跳过的小事上。</span>  
> *The model will happily spend 30 minutes on something useless, something small that a human engineer will just skip given the broader circumstance.*  
> <span class="qm">—— 嘉宾 · [09:24]</span> ^q6

> <span class="qz">而他们很可能会被这些更自主、更有信念地行动的组织套圈。</span>  
> *And they're probably going to get lapped by these organizations that are moving more autonomously and with more conviction.*  
> <span class="qm">—— 嘉宾 · [11:30]</span> ^q7

> <span class="qz">除非你的可触达市场非常小，否则那种能在 30 分钟内修复一切的商业，将会摧毁那种需要两天的商业。</span>  
> *And unless you have a super small addressable market, it's like that business that can just fix everything in sub 30 minutes is going to destroy a business that takes two days.*  
> <span class="qm">—— 嘉宾 · [16:07]</span> ^q8

> <span class="qz">你可能在不停地 PR、PR、PR、PR，一直 PR 到湮灭。</span>  
> *You could be PRing, PRing, PRing, PRing into oblivion.*  
> <span class="qm">—— 嘉宾 · [18:03]</span> ^q9

> <span class="qz">是的，因为如果你同时在做 20 件事，你会在所有这些事情上都很平庸。</span>  
> *Yeah, because if you're doing 20 things at once, you're going to be mediocre in all of them.*  
> <span class="qm">—— 嘉宾 · [19:26]</span> ^q10

> <span class="qz">还在于文件系统基本上就是你所需要的一切。</span>  
> *It's also the fact that the file system is basically all you need.*  
> <span class="qm">—— 嘉宾 · [28:10]</span> ^q11

> <span class="qz">单单这一点，我认为就是更好的、带引号的「智能体工程」，而不是「去做吧，别犯错，请自动合并，让我们继续堆一座巨大的 slop 山」。</span>  
> *That alone is just, I think, better, quote unquote, agentic engineering than just do it, make no mistakes, please auto-merge and let's keep building a huge pile of slop.*  
> <span class="qm">—— 嘉宾 · [54:13]</span> ^q12

> <span class="qz">我觉得一件会让很多拥抱极端 vibe coding 的人栽跟头的事是：如果我是一家企业，我需要对你的产品的安全画像建立非常强的信心。</span>  
> *I think something that will backfire for a lot of people that are embracing extreme vibe coding is that if I'm an enterprise, I need to build very strong conviction in the security profile of your product.*  
> <span class="qm">—— 嘉宾 · [56:49]</span> ^q13

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Claude Code · 同概念:Rust、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-09-14-talks-agents-without-code-skills-yaml-and-file|智能体就只是文件：当配置取代 Python]]<span class="pd-rz">同公司:Vercel · 同概念:智能体 (agent)、沙箱 (sandbox)、评估 (evals)</span>
- [[2026-09-14-talks-how-we-solved-agent-building-andrew-qu-v|Vercel 构建「每桌一个智能体」：从失败的多智能体到文件系统智能体]]<span class="pd-rz">同公司:Claude Code、Vercel · 同概念:智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-20-talks-prototyping-as-leadership-how-a-cto-ship|管理者日程突然能写代码了：CTO 的通宵智能体工作流]]<span class="pd-rz">同公司:Claude Code · 同概念:智能体 (agent)、沙箱 (sandbox)、评估 (evals)</span>
- [[2026-09-29-latent-thariq|Anthropic 的 Thariq 谈 Claude Code：提示词、CloudMods 与给前沿踩刹车]]<span class="pd-rz">同概念:推理 (inference)、智能体 (agent)、沙箱 (sandbox)、评估 (evals)</span>
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同公司:Claude Code · 同概念:智能体 (agent)、评估 (evals)</span>

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
