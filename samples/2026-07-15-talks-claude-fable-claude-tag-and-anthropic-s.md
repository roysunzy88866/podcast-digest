---
title: "把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude"
podcast: 精选演讲
date: 2026-07-15
source_url: undefined
duration: "51:15"
type: episode
cover: "#64748b"
description: "深入 Anthropic 内部,看 Claude Code 团队如何用自家智能体造产品,从重塑代码审查到精简系统提示词。"
host: "[[Simon Willison]]"
guests: ["[[Cat Wu]]"]
cohosts: ["[[Thariq Shihipar]]"]
companies: ["[[Anthropic]]", "[[Datadog]]"]
concepts: ["[[Claude Code]]", "[[ClaudeTag]]", "[[Fable]]", "[[Slack]]", "[[Bun]]", "[[Rust]]", "[[Gemini]]", "[[智能体]]", "[[系统提示词]]", "[[提示词]]", "[[提示词注入]]", "[[代码审查]]", "[[自动模式]]", "[[沙箱]]", "[[重写]]", "[[工作流]]", "[[团队记忆]]", "[[红队]]", "[[评估]]", "[[GitHub]]", "[[凭证注入]]", "[[远程控制]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s#post","headline":"把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s","mainEntityOfPage":"https://talk.solomind.cc/2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s","description":"深入 Anthropic 内部,看 Claude Code 团队如何用自家智能体造产品,从重塑代码审查到精简系统提示词。","datePublished":"2026-07-15","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Simon Willison"},{"@type":"Person","name":"Cat Wu"},{"@type":"Person","name":"Thariq Shihipar"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"Datadog"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"ClaudeTag"},{"@type":"Thing","name":"Fable"},{"@type":"Thing","name":"Slack"},{"@type":"Thing","name":"Bun"},{"@type":"Thing","name":"Rust"},{"@type":"Thing","name":"Gemini"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"系统提示词 (system prompt)"},{"@type":"Thing","name":"提示词 (prompt)"},{"@type":"Thing","name":"提示词注入 (prompt injection)"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"自动模式 (auto mode)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"重写 (rewrite)"},{"@type":"Thing","name":"工作流 (Workflows)"},{"@type":"Thing","name":"团队记忆 (team memory)"},{"@type":"Thing","name":"红队 (red team)"},{"@type":"Thing","name":"评估 (eval)"},{"@type":"Thing","name":"GitHub"},{"@type":"Thing","name":"凭证注入 (credential injection)"},{"@type":"Thing","name":"远程控制 (remote control)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude","item":"https://talk.solomind.cc/2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude

<div class="pd-byl">2026-07-15</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">软件工程变得越来越难,因为我们可以承担的项目的野心水平已经提高了。</div><div class="a">— Simon Willison <button class="pd-ts" data-t="03:21" data-who="Simon Willison" data-en="Software engineering is getting harder because the level of ambition of the stuff we can take on has gone up." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Cat Wu]] · [[Simon Willison]] · [[Thariq Shihipar]]
>
> **公司** [[Anthropic]] · [[Datadog]]
>
> **概念** [[Claude Code]] · [[ClaudeTag]] · [[Fable]] · [[Slack]] · [[Bun]] · [[Rust]] · [[Gemini]] · [[智能体]] · [[系统提示词]] · [[提示词]] · [[提示词注入]] · [[代码审查]] · [[自动模式]] · [[沙箱]] · [[重写]] · [[工作流]] · [[团队记忆]] · [[红队]] · [[评估]] · [[GitHub]] · [[凭证注入]] · [[远程控制]]

<div class="pd-tldr"><b>一句话</b>深入 Anthropic 内部,看 Claude Code 团队如何用自家智能体造产品,从重塑代码审查到精简系统提示词。</div>

把 [[Claude Code|Claude Code]] [[系统提示词|系统提示词]]删掉八成,反而是让模型表现更好了——说这话的人是 Thariq 和 Kat,他们在 [[Anthropic|Anthropic]] 负责 Claude Code 产品,团队内部的[[智能体|智能体]]目前靠自己处理了超过一半的 PR。

这一集的围炉谈话里,他们带着观众完整回顾了 Claude Code 诞生一年半以来的真实[[工作流|工作流]]演变,聊了四件事:日常工作怎么从盯权限提示变成管全局;上周刚发布的 [[ClaudeTag|ClaudeTag]] 如何把智能体协作塞进 [[Slack|Slack]] 让团队一起用;Anthropic 怎么用 Claude 自己做[[代码审查|代码审查]]、还顺手把最前沿模型的系统[[提示词|提示词]]删了一大半;最后探讨了在这一波浪潮里工程师怎么找定位,以及他们拿 Claude 做的出圈趣事。结尾还留了点时间回答了现场观众关于[[评估|评估]]工具和记忆机制的提问。

## 真用起来才知道:从死盯权限,到追求更高目标

Claude Code 是去年二月发布的,当时它只是模型发布时的一个附加功能。Thariq 回忆说,刚开始那会儿,用智能体干活其实挺累的:你给它一个任务,必须盯着它的一举一动,仔细阅读每一个权限提示,还得频繁地纠正它。

现在,随着新一代模型能力提升,人终于可以退后一步了。大家把繁琐的实现细节交给智能体,腾出时间去思考真正有创造性的工作 <button class="pd-ts" data-t="01:22" data-who="Thariq" data-en="How has what you do on a day-to-day basis changed in the past year, now that we have these coding agents that actually work for us? I remember when we first came out with Cloud Code and Sonnet 3.7, you would give it this task and you would have to closely monitor every single little thing that it tried to do." aria-label="回原文"></button>。

Kat 的感受更直接,他说之前试用 Opus 4 模型时,意识到自己得去 Anthropic 工作了。而面对全新的 [[Fable|Fable]] 模型,他觉得不仅是工具变快了,更是逼着人去做以前做不到的高质量工作。

他经常拿自己剪视频的例子说事:以前几天才能搞定的活,现在几个小时就得达到品牌团队的苛刻标准,因为智能体的输出质量极高,人对自己的期望也跟着水涨船高 <button class="pd-ts" data-t="02:21" data-who="Kat" data-en="So it's been amazing to see the transition and to go through this with all of you in the community. Yeah, I mean, I think I remember the first text I got about Cloud Code." aria-label="回原文"></button>。主持人也深有同感:软件工程变难了,因为能干的事更多了,野心也更大了 <button class="pd-ts" data-t="03:21" data-who="主持人" data-en="I've certainly been finding that myself. Software engineering is getting harder because the level of ambition of the stuff we can take on has gone up. I have such higher expectations of myself now that I have these tools to back me up, which is fun, but it's a lot of work." aria-label="回原文"></button>。

## 那些被推翻的工程老规矩:从半年写规范到干脆重写

工具变了,传统软件工程的方法论自然也得跟着变。Thariq 观察到一个巨大的反转:放在两年前,产品经理得花半年时间写详尽的 PRD(产品需求文档)和规范;但现在,从有想法到做出东西可能只要一周。这意味着工程师不能再光顾着埋头执行了,得把精力往前提,培养商业判断和产品品味,想清楚到底什么才值得做 <button class="pd-ts" data-t="03:49" data-who="Thariq" data-en="And so what's a piece of conventional software engineering that was true a year ago that you don't think holds anymore in this new world? I think one of the biggest shifts that we're seeing in the Eng skill set is I think two years ago, it was pretty typical for a product manager to go talk to a bunch of customers and over the course of six months align with cross-functional teams on some PRD and then write this thorough spec." aria-label="回原文"></button>。

更要命的是,在编程界有一本很经典叫《人月神话》的书,里面有条老经验叫「永远不要[[重写|重写]]」。但 Kat 觉得,现在重写反而成了好事。

代码库本身就是唯一的规格说明书,如果你有个好的测试套件,完全可以一口气让智能体跑出三个不同的实现版本,看哪个最准就留哪个。他还透露,内部已经用 [[Bun|Bun]] 和 [[Rust|Rust]] 把代码重写了,效果很好 <button class="pd-ts" data-t="05:09" data-who="Kat" data-en="Of course, for infra, there's still a very heavy emphasis on making sure all the details are right. Yeah, I think for me, it's like rewrites are now good. You know what I mean?" aria-label="回原文"></button>。

## 团队协作的正确姿势:进 Slack 当队友

明白了工具怎么改变个人习惯,接下来的问题是:怎么在团队里用?Kat 解释了刚推出一周的 ClaudeTag(它扎根在团队协作工具里)。

跟单干的 Claude Code 不一样,ClaudeTag 默认就是多人参与的。把它加进 Slack 频道后,它不只是被动等你提问,而是主动出击:你可以让它监控频道里的每一条 bug 报告,自动提 PR 修复,并艾特负责那块代码的工程师,全程不用人手动干预。它还有[[团队记忆|团队记忆]],你只要用自然语言告诉它一次偏好,以后它就都记住了 <button class="pd-ts" data-t="06:51" data-who="Thariq" data-en="What kind of things are non-engineers doing with ClaudeTag? So CloudTag is a cloud that lives in your team's collaboration tools. We launched it last week within Slack." aria-label="回原文"></button>。

这套机制带来的数字很惊人:在 Anthropic 内部,这套工具帮产品工程团队处理了高达 65% 的 PR <button class="pd-ts" data-t="07:59" data-who="Thariq" data-en="So if you always wanted to debug outages, but you don't want it to debug warnings, just tell it that in natural language in the channel, and it will remember it for you and everyone else on your team." aria-label="回原文"></button>。对非程序员来说,它也是个神器:营销团队可以直接让它克隆代码库、查功能、甚至做操作录屏 <button class="pd-ts" data-t="09:22" data-who="Kat" data-en="So as a search engine for your company is really valuable. It has all the context for your product. So you can ask it like metrics related questions." aria-label="回原文"></button>。

人在里面就像流水线作业一样顺畅:一个人让 Claude 写初版,让设计调样式,再丢给工程收尾 <button class="pd-ts" data-t="10:19" data-who="Thariq" data-en="Exactly. And a large percentage of our sessions are actually multiplayer right now. So that means maybe I say, hey, I think we should implement this new feature in co-work." aria-label="回原文"></button>。因为大家都在明面上用它,甚至无形中提升了使用水平——谁也不好意思在公开场合给智能体下个极其敷衍的指令 <button class="pd-ts" data-t="11:10" data-who="Kat" data-en="And it's actually been pretty easy for us, pretty intuitive for us to integrate CloudTag into our teams. Yeah, I think it's great for teaching people and also kind of reducing slop." aria-label="回原文"></button>。

## 如何教智能体干活:让大模型给小模型写提示词

既然智能体能包揽这么多活,那最硬核的安全和代码审查问题怎么解决?主持人抛出了一个尖锐问题:到底有没有真人审查每一行进生产的代码?

Thariq 的回答很坦诚:核心变更依然有代码所有者严格把关,但对于外层的改动,他们已经逐步让 Claude Code 自己去做代码审查了 <button class="pd-ts" data-t="15:46" data-who="Thariq" data-en="Do you have anything to add? In general, we are trying to move to a world where humans don't need to be in the loop. And so for the most critical changes to the core of Cloud Code and the cores of other products, there is always a code owner, and they do manually review all the changes." aria-label="回原文"></button>。听起来吓人,但他们花了六个多月,一步步在特定文件类型上建立信任——只要智能体审查能 100% 挡住问题,就不再需要人工插手。要是出了事故,就补上测试集,确保以后不退步 <button class="pd-ts" data-t="16:12" data-who="Thariq" data-en="But increasingly, for the changes that are at the outer layers, we actually have Cloud Code code review fully review those. That sounds pretty scary, but we've had this six-plus-month-long process to get here, and I think there are baby steps that you take to build up trust with code review." aria-label="回原文"></button>。

那怎么放心新模型不会搞砸旧模型能搞定的事?靠的是积累了大量内外评估库:把整套测试跑一遍,只要新模型严格优于旧模型,就直接替换 <button class="pd-ts" data-t="17:47" data-who="Thariq" data-en="Is that something that you have to think about much, those new model, like, how does the new model affect your intuition for what it can do and what it can't do?" aria-label="回原文"></button>。除了能力评估,他们还在搞「行为评估」,专治那些让用户抓狂的行为(比如动不动就问「我要继续吗」) <button class="pd-ts" data-t="19:32" data-who="Thariq" data-en="the bugs and pass all the tests. So that's the starting point. And that's the thing that we optimize for because it is most directly what users want." aria-label="回原文"></button>。

但这还不是最反直觉的。因为 Fable 和 Opus 4.8 这类前沿模型变聪明了,Anthropic 干脆把给 Claude Code 的系统提示词删掉了 80% <button class="pd-ts" data-t="21:22" data-who="主持人" data-en="And yeah, I think it's been a productive partnership. And so, Tariq, this morning you mentioned that the system prompt for Claude Code has been reduced by 80% because of Claude Fable." aria-label="回原文"></button>。

为什么?因为他们发现以前是在「过度约束」模型。

比如以前大家总爱在提示词里塞例子,但前沿模型本身比例子更有创造力,删掉例子反而更好;以前总爱写「不要做这个」,结果跟用户的后续指令冲突,把模型搞糊涂了 <button class="pd-ts" data-t="21:35" data-who="Thariq" data-en="What kind of things have you been able to drop? Yeah, so it wasn't just Fable. It was Opus 4.8 as well." aria-label="回原文"></button>。Thariq 还拿「验证」举了个很生动的例子:以前死板规定「改了前端就必须验证」,但如果是改了个错别字呢?

所以现在改成告诉模型「大多数时候你改了用户体验,最好在本地跑一下应用」,让它自己凭判断力决定。这种放手的底气,正是因为前沿模型有了足够的判断力——当然,针对判断力较弱的老模型,他们依然保留着完整的系统提示词 <button class="pd-ts" data-t="23:34" data-who="Thariq" data-en="Yes, this statement is 90% true, but there's a real 10% of cases where this is not true, and we didn't want to constrain the model or confuse it into thinking, hey, it should always do this." aria-label="回原文"></button>。

顺着这个话题,Kat 抛出了个很有意思的观察:现在大模型特别擅长写提示词,他自己的很多提示词都是模型写的。Claude 甚至能给一堆子智能体分配非常详尽的提示词来协同干活 <button class="pd-ts" data-t="26:19" data-who="Kat" data-en="That's something I found fascinating. I feel like a year ago, I did not trust a model to write a prompt. Today, the good models are very good at prompting." aria-label="回原文"></button>。顺着聊下去,他们还提到了如何精简工具(刻意保持工具数量少、功能界限清晰),以及为了支持多人共享身份而引入的[[凭证注入|凭证注入]](代理替换真实令牌,智能体只能用不能看)等工程细节 <button class="pd-ts" data-t="28:48" data-who="Kat" data-en="Ant-fooding is our ant version of that. But yeah, I think overall, we've been trying to trend towards fewer tools. I think the last set of tools we introduced were the task tool, I think, and try and give Cloud more general versions to do this." aria-label="回原文"></button> <button class="pd-ts" data-t="37:12" data-who="Thariq" data-en="And for all of our remote environments, we support credential injection. So if you want like quad codes to be able to access Datadog, but you don't want Cloud Code itself to hold the Datadog credential, you can set up our identity credential management system so that the Datadog credentials are only usable by the agent but not accessible by the agent." aria-label="回原文"></button>。

## 自动模式(让智能体自主连续执行任务并自行判断安全边界)是怎么保平安的

工具链理顺了,下一个绕不开的担忧就是安全。主持人坦言自己经常在 YOLO(无视警告直接跑)模式下用,很内疚又不懂怎么搞。

Thariq 解释说,Anthropic 内部几乎全员默认使用[[自动模式|自动模式]]。这个模式不是拍脑袋放权,而是配了成千上万个评估,还专门雇了外部[[红队|红队]]做对抗测试,基本上防住了[[提示词注入|提示词注入]](别人在数据里藏指令骗智能体)等主要风险 <button class="pd-ts" data-t="31:32" data-who="Thariq" data-en="But yeah, as of maybe three weeks ago, I'm defaulting to auto mode. OK. So broadly within Anthropic, almost every single person uses auto mode." aria-label="回原文"></button>。

机制上,它在每个动作发生时,用一个分类器实时评判这次操作跟你的指令上下文搭不搭,还跟[[沙箱|沙箱]](限制程序行动范围的安全环境)无缝配合,判断该不该放行网络请求 <button class="pd-ts" data-t="32:46" data-who="Kat" data-en="But for the main categories of risks that we're concerned about, like prompt injection, data exfiltration, the risks are far lower than the average human reviewer." aria-label="回原文"></button>。为了让外部信任,他们还预告未来几周会发布相关的评估报告 <button class="pd-ts" data-t="32:04" data-who="Thariq" data-en="And so we're going to publish some evals in the coming weeks. We've pretty much mitigated every attack. That is a big claim." aria-label="回原文"></button>。

## 人的价值在哪:去干更有野心的事

安全和流程都靠技术解决了,那人干嘛呢?主持人问出了一个扎心问题:很多工程师面对被模型抢走工作,有很强的失落感。

Kat 觉得,失落是真的:如果你还死守着以前的活,确实会很悲伤。解药只有一个:去做更有野心的事 <button class="pd-ts" data-t="38:38" data-who="Kat" data-en="I think that that's kind of like a constant reminder for me where I'm like, anytime I'm like, kind of slow on something, I'm like, OK, can I do it faster? Can I be more ambitious here?" aria-label="回原文"></button>。

Thariq 也说,每次他想偷懒,就会被团队提醒:还能不能干快点?还能不能再搞大点?软件工程没变简单,只是以前那些「简单」的部分被吃掉了,留给人的是更大的挑战 <button class="pd-ts" data-t="38:19" data-who="Thariq" data-en="Firstly, how has the past year and a half changed the way you think about your own craft and the value that you add? Yeah, I think for me, and I think Cat is always such a good reminder." aria-label="回原文"></button>。

从产品经理的角度看,Kat 觉得角色界限彻底模糊了:PM、工程师、设计师的活经常搅在一起,现在团队里的 PM 大多是工程师出身,缺啥补啥。有了点子没人写代码?

自己用 Claude 写个原型去说服别人。需要发周报?直接让 Workflows 自动化搞定 <button class="pd-ts" data-t="40:00" data-who="Kat" data-en="And I think now it's like, let's do it. And Cap, what does that look like from a sort of product management perspective? I feel like the product role just changes every single month." aria-label="回原文"></button>。

> 【背景】Workflows 是 Claude Code 体系下的一个功能,官方多将其定位为代码与多智能体编排工具,但在实际使用中被团队频繁用于自动化各种非编码任务。

Thariq 还分享了个有意思的细节:团队本来以为大家更喜欢直接在云端跑任务,但没想到「[[远程控制|远程控制]]」(用手机连电脑里的代码)爆火。很多人晚上把电脑插上电源、合上屏幕,然后躺在沙发上用手机指挥电脑里的 Claude 干活 <button class="pd-ts" data-t="13:06" data-who="Thariq" data-en="You rolled it out, and the engagement was off the charts, and it was something that was unlikely to be shipped that actually turned into a real product thing. I do have one." aria-label="回原文"></button>。

聊到出人意料的「高光时刻」,他们举了两个很接地气的例子。Thariq 给了 Claude 一段演讲的原始音视频和 HTML 幻灯片,它不仅自己写代码完成同步剪辑、动态追踪裁剪,还聪明地发现录像有弹窗干扰,转头去解析 HTML 源码来生成清晰的画面 <button class="pd-ts" data-t="41:59" data-who="Thariq" data-en="Thariq? Yeah, I mean, I've posted a lot about cloud video editing. But most recently, I gave a talk at the ACM agentic conference." aria-label="回原文"></button>。他们还各自用 Claude 做了些荒诞但好玩的项目:Kat 做了个有自己和朋友当角色的 2D 格斗游戏,连出招的判定框(碰撞检测)都能算出来 <button class="pd-ts" data-t="46:56" data-who="Kat" data-en="I can go while you think. I'm working on a 2D Street Fighter fighting game with me as a character and, like, my friends as well. And it uses cloud code to prompt, you know, Gemini and, honestly, the Seadance model is pretty good, like, to make, like, video animations." aria-label="回原文"></button>;Thariq 则做了一个攀岩规划应用,能自动查航班、找攀岩路线、筛选离家近的住处 <button class="pd-ts" data-t="47:47" data-who="Thariq" data-en="Mine is much more simple. I'm a big rock climber, and a lot of my friends climb. And so we have this little app that we built with Cloud Code where we just log all the projects that we're working on." aria-label="回原文"></button>。

## 观众提问时间

节目接近尾声时,现场观众抛出了两个具体问题。有人问会不会出官方的评估工具,帮大家构建测试数据集。

Thariq 坦言工具本身不是核心卡点,难点在于构建高质量评估所需的技能和经验,这是他们打算重点投入并外部分享的方向 <button class="pd-ts" data-t="49:40" data-who="Thariq" data-en="My question is that do you have a near plan to build more eval tools for us to build eval data set or anything like that and more ability tools to monitor the performance of agents and workflows?" aria-label="回原文"></button>。还有人好奇多人协作时的记忆(持久化信息)怎么设计的。Kat 解释说,目前 ClaudeTag 在每个 Slack 频道里维护一个共享的 Markdown 文件作为记忆,虽然看起来简单,但他们内部一直在做各种更优的记忆机制实验 <button class="pd-ts" data-t="50:31" data-who="Kat" data-en="So I think that's my question. Yeah, right now for CloudTag, the memory is channel-specific. So every clod in that channel has a shared memory." aria-label="回原文"></button>。

## 本集带走

最后收个尾,这一集值得带走的是这么几个实在的点。首先,写代码不再只是写代码了,变成了做产品决策——从花半年写规范,变成一周内出东西,这意味着人的核心价值得往判断力、产品品味和野心这些方向挪。

其次,别死守着以前那些老规矩,比如代码不能重写、提示词必须塞满例子。相反,把系统提示词里那些「不要做什么」删掉,给足上下文,让模型自己去判断,效果反而更好。

再者,对智能体不要光停留在提防,真正的杠杆是像 Anthropic 内部那样,通过积累大量评估和测试,把代码审查和自主运行的安全性一步步交出去,让团队成百上千个 PR 自动跑起来。最后,真碰到了失落感,别硬扛,去找个更大更野心的项目干,不管是剪视频还是做个属于自己的格斗游戏,让智能体做那些脏活累活,把人的精力省下来去体验做事情的纯粹快乐。

<div class="pd-sec">全部金句 <span>3 条</span></div>

> <span class="qz">软件工程变得越来越难,因为我们可以承担的项目的野心水平已经提高了。</span>  
> *Software engineering is getting harder because the level of ambition of the stuff we can take on has gone up.*  
> <span class="qm">—— Simon Willison · [03:21]</span> ^q1

> <span class="qz">总的来说,我们正试图迈向一个人类不需要参与其中的世界。</span>  
> *In general, we are trying to move to a world where humans don't need to be in the loop.*  
> <span class="qm">—— Cat Wu · [15:46]</span> ^q2

> <span class="qz">但对于我们担心的主要风险类别,比如提示词注入、数据窃取,风险远低于人类审核员的平均水平。</span>  
> *But for the main categories of risks that we're concerned about, like prompt injection, data exfiltration, the risks are far lower than the average human reviewer.*  
> <span class="qm">—— Cat Wu · [32:33]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-08-09-talks-multiplayer-agentic-engineering-arjun-si|让非工程师也能下指令：Superconductor 的多人智能体协作法]]<span class="pd-rz">同概念:Claude Code、Slack、智能体 (agent)、沙箱 (sandbox)、GitHub</span>
- [[2026-07-13-lennys-this-solo-builder-runs-247-local|GPT 5.6 测评：我为什么抛弃 Fable，把 Soul 当主力]]<span class="pd-rz">同公司:Anthropic · 同概念:Fable、提示词 (prompt)、智能体 (agent)</span>
- [[2026-07-28-yc-boris-cherny-building-claude-code-e3mkr7|别再微管理 Claude:Claude Code 造物主的智能体实战心法]]<span class="pd-rz">同概念:提示词注入 (prompt injection)、智能体 (agent)、沙箱 (sandbox)、系统提示词 (system prompt)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude Code、智能体 (agent)、系统提示词 (system prompt)、Slack</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude Code、智能体 (agent)、Claude</span>
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|把 AI 当员工来管理:Claire Vo 的九个智能体生活实战]]<span class="pd-rz">同概念:Claude Code、提示词注入 (prompt injection)、智能体 (agent)、Slack</span>

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
  // 故再兜一条 history.length>1(站内点进必有返回历史)。命中「直开」给 body 打 .pd-direct,CSS 切显隐。
  function direct(){
    var ref = document.referrer || '';
    var fromSite = (ref.indexOf(location.origin) === 0) || history.length > 1;
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
