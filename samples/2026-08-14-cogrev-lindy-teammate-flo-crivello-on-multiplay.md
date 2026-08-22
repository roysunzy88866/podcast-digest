---
title: "Lindy 创始人谈 AI 员工的上下文战争：从红黑树到\"走去洗车\""
podcast: The Cognitive Revolution
date: 2026-08-21
source_url: undefined
duration: "126:07"
type: episode
cover: "#64748b"
image: "/covers/2026-08-14-cogrev-lindy-teammate-flo-crivello-on-multiplay.jpg"
description: "Lindy 创始人 Flo Crivello 解释为什么随着模型能力趋同，上下文比智能本身更决定一个 AI 员工的用处。他介绍了利用红黑树管理 20 亿 token 上下文的技术方案，以及 AI 员工\"能力太尖锐\"导致的\"走去洗车\"难题。"
host: "[[Flo Crivello]]"
cohosts: ["[[Nathan]]"]
companies: ["[[Lindy]]", "[[DeepSeek]]"]
concepts: ["[[智能体]]", "[[上下文]]", "[[记忆智能体]]", "[[RAG]]", "[[上下文桶]]", "[[缓存]]", "[[验证器]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/covers/2026-08-14-cogrev-lindy-teammate-flo-crivello-on-multiplay.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-14-cogrev-lindy-teammate-flo-crivello-on-multiplay#post","headline":"Lindy 创始人谈 AI 员工的上下文战争：从红黑树到\"走去洗车\"","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-14-cogrev-lindy-teammate-flo-crivello-on-multiplay","mainEntityOfPage":"https://talk.solomind.cc/2026-08-14-cogrev-lindy-teammate-flo-crivello-on-multiplay","description":"Lindy 创始人 Flo Crivello 解释为什么随着模型能力趋同，上下文比智能本身更决定一个 AI 员工的用处。他介绍了利用红黑树管理 20 亿 token 上下文的技术方案，以及 AI 员工\"能力太尖锐\"导致的\"走去洗车\"难题。","datePublished":"2026-08-21","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-08-14-cogrev-lindy-teammate-flo-crivello-on-multiplay.jpg","about":[{"@type":"Person","name":"Flo Crivello"},{"@type":"Person","name":"Nathan"},{"@type":"Organization","name":"Lindy"},{"@type":"Organization","name":"DeepSeek"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"上下文 (context)"},{"@type":"Thing","name":"记忆智能体 (memory agent)"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"上下文桶 (context bucket)"},{"@type":"Thing","name":"缓存 (caching)"},{"@type":"Thing","name":"验证器 (validator)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Lindy 创始人谈 AI 员工的上下文战争：从红黑树到\"走去洗车\"","item":"https://talk.solomind.cc/2026-08-14-cogrev-lindy-teammate-flo-crivello-on-multiplay"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Lindy 创始人谈 AI 员工的上下文战争：从红黑树到"走去洗车"</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Lindy 创始人谈 AI 员工的上下文战争：从红黑树到"走去洗车"

<div class="pd-byl"><b>Flo Crivello</b> · Lindy 创始人 · 2026-08-21</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-14-cogrev-lindy-teammate-flo-crivello-on-multiplay.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果你要 John von Neumann 魔法般地出现在你身边的办公室里，这个人在接下来的一小时或一天里对你的用处会比你的随机会同事更少。</div><div class="a">— Flo Crivello <button class="pd-ts" data-t="06:44" data-who="Flo Crivello" data-en="If you will to have John von Neumann just magically appear next to you at the office, this guy over the next hour or day would be less useful to you than your random coworker." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Flo Crivello]] · [[Nathan]]
>
> **公司** [[Lindy]] · [[DeepSeek]]
>
> **概念** [[智能体]] · [[上下文]] · [[记忆智能体]] · [[RAG]] · [[上下文桶]] · [[缓存]] · [[验证器]]

[[Lindy|Lindy]] 推出了一个住在 Slack 里的 AI 员工，叫 Lindy TeamMate，能接入公司所有工具、积累整个团队的[[上下文|上下文]]。创始人 Flo 把这比作从"互相发邮件传文档"到"Google Docs 共享文档"的跃迁——之前每个人要跟 AI 对话都得离开协作空间，现在 AI 就在 Slack 里跟你一起工作 <button class="pd-ts" data-t="04:07" data-who="Unknown" data-en="Just like all your other teammates, whether they be human or agent, tell us about the new big launch. Yeah, from the get-go, we've always been going after the AI employee." aria-label="回原文"></button>。

## 上下文比智能更重要

Flo 的核心论点是：随着模型能力趋同，上下文比智能本身更决定一个 AI 员工的用处。他举了个例子——如果你让历史上最聪明的人之一 John von Neumann 突然出现在你办公室，接下来一小时他对你的用处还不如一个随机同事，因为他没有上下文，你没时间给他做入职 <button class="pd-ts" data-t="06:44" data-who="Unknown" data-en="One of the smartest men in history was John von Neumann. If you will to have John von Neumann just magically appear next to you at the office, this guy over the next hour or day would be less useful to you than your random coworker." aria-label="回原文"></button>。

反直觉的是，Flo 认为[[智能体|智能体]]在入职这件事上已经比人类强了。公司的 wiki 文档写好的那一刻就过时了，而智能体不介意 Slack 里那一团糟的对话记录——它会全部抓取，基于文件系统构建知识图谱 <button class="pd-ts" data-t="08:17" data-who="Unknown" data-en="It's just a mess, but agents don't mind the mess. And so then what we do is that we crawl your entire Slack and we build a knowledge graph based on a file system." aria-label="回原文"></button>。

## 记忆智能体：不靠 RAG，靠"打盹"

Lindy 的记忆方案不是传统 [[RAG|RAG]]（检索增强生成），而是用一个专门的[[记忆智能体|记忆智能体]]来管理所有记忆。这个智能体大约每 15 分钟运行一次——他们管这叫"打盹"而不是"睡觉"，因为不需要像人一样 24 小时睡一觉 <button class="pd-ts" data-t="09:26" data-who="Unknown" data-en="The way it works is that there is this memory agent. We call it napping, not sleeping. So it runs every something like 15 minutes." aria-label="回原文"></button>。

它的做法是：公开频道的内容更新到团队记忆，私密频道的内容只更新到对应个人的记忆。两层分开，但都由同一个智能体统一管理 <button class="pd-ts" data-t="09:36" data-who="Unknown" data-en="So it just runs continuously in the background. And anything that is public, it updates the team file system and the team memory with. And anything that is personal and that is private, it just updates each person's file system with." aria-label="回原文"></button>。

Flo 对 RAG 相当看空，看好这种智能体管理方式，因为记忆智能体有自己的"元记忆"——它知道自己在管理记忆，会逐渐学会哪些信息源重要、哪些可以忽略。比如它第一次抓取 Slack 时会发现日志频道，然后就学会了不再花时间在上面 <button class="pd-ts" data-t="12:26" data-who="Unknown" data-en="It's like if you have enough memories and if you fit that to a system that understands it, the system ends up understanding. And so the very concrete example you are using is actually an emergent behavior we have seen the memory agent adopt because the memory agent has its own memories." aria-label="回原文"></button>。

另一个关键设计：会议被作为"一等公民"纳入系统。公司 90% 的最新数据都在会议里，每段关系、每个项目都有围绕它的会议。Lindy 会把会议喂给记忆智能体，公开会议文件夹里的内容会自动更新团队记忆 <button class="pd-ts" data-t="13:09" data-who="Unknown" data-en="This has been building meetings as a first-class citizen in this system. I really do believe that meetings are very underrated as a source of information. They all wear 90% of the most up-to-date data leaves about the company." aria-label="回原文"></button>。

## 隐私：两层记忆 + 用提示词画护栏

团队内部对此有过激烈辩论。一派（包括 Flo）认为两层就够了——公共层和私密层。

另一派想要多个可自定义的"记忆气泡"。最终落地的方案是：用户的 memory.md 文件就是元记忆提示词，注入到智能体的上下文窗口里。你想让它永远不记住某些东西，或者把敏感内容存在另一个文件夹里、只有特定条件才能提取，直接在文件里写指令就行 <button class="pd-ts" data-t="17:35" data-who="Unknown" data-en="And so what we landed on, and what these teammates landed on, honestly, is they have edited their own meta memory prompt. And the meta memory prompt is just a text file." aria-label="回原文"></button>。

## 递归上下文桶与红黑树：两次 LLM 调用触及 20 亿 token

这是整集技术密度最高的部分。

**问题**：对话越来越长，需要压缩（compaction），但传统压缩有个致命缺陷——它假设你永远不需要访问原始数据，而实际上你有时需要回到"基本事实"。

**解法**：Lindy 发明了"[[上下文桶|上下文桶]]"。当一个操作返回过多上下文（比如 10 万 token），不是直接塞给智能体，而是封装成一个子智能体，只给主智能体一个摘要。主智能体需要细节时再跟子智能体对话 <button class="pd-ts" data-t="28:20" data-who="Unknown" data-en="You don't want to send that to the agent, it's going to get confused. So what you do is that you expose that as a summary of the context bucket. It's a sub-agent which contains the entire bucket." aria-label="回原文"></button>。

然后他们更进一步——递归上下文桶。对话超过阈值（目前约 20 万 token）时压缩，压缩结果本身也是一个上下文桶。

继续对话、再次压缩，就得到"上下文桶里套上下文桶"的俄罗斯套娃结构。智能体可以以任意粒度访问历史上任意一点的原始数据 <button class="pd-ts" data-t="29:06" data-who="Unknown" data-en="And what if compaction, because obviously we have compaction, was powered by such recursive context buckets? And by that I mean like now when we compact, So the conversation goes, it passes a threshold." aria-label="回原文"></button>。

**但朴素实现有 O(N) 复杂度问题**——想访问深层桶要经过很多层子智能体，又慢又贵。解法是用自平衡树。Flo 说他们最终选了"百叉树"（每个节点有 100 个子节点）来实现红黑树的思路——最小化树高，让触底所需跳跃最少 <button class="pd-ts" data-t="32:27" data-who="Unknown" data-en="It's very expensive. The canonical implementation of red-black trees is on binary trees, which is just a tree where each node's got two children. We went for a, it's called a centenary tree." aria-label="回原文"></button>。

结果：只需两次 LLM 调用，就能访问 10,000 个上下文桶，每个桶 20 万 token——总计约 20 亿 token 的上下文。这就是为什么 Lindy 的 AI 员工能"记住一切" <button class="pd-ts" data-t="32:49" data-who="Unknown" data-en="10,000 context buckets and you can access all the contexts in the universe. And that leads to some really surprising behaviors because you're literally no more than two LLM calls away from being able to access 10,000 context buckets each one of which contains 200,000 tokens." aria-label="回原文"></button>。

## 成本：当前仍是负毛利率，靠补贴撑着

一个 20 人团队、有多年 Slack 历史，初始"水合"大约消耗 300 到 500 万 token。瓶颈甚至不是 LLM，而是 Slack API 的限速 <button class="pd-ts" data-t="34:20" data-who="Unknown" data-en="Most of the time when you get started, you consume like for like a team of 20, you know, the hydration components. So it's like, again, it's this moment where like you connect your notion, you connect your slack, and then we crawl everything, we look at all of that stuff." aria-label="回原文"></button>。

但 Flo 坦承：Lindy TeamMate 目前是负毛利率。用户扔过来的任务比之前个人助理产品复杂得多，之前"发封邮件、约个会议"用 [[DeepSeek|DeepSeek]] Flash 就够了，现在不行了 <button class="pd-ts" data-t="26:50" data-who="Unknown" data-en="And so that was cost-effective. With Lindy Teammate, we're back at it and back into, frankly, negative cross-parting territory. And so that said, you know, obviously I don't like having negative cross margins." aria-label="回原文"></button>。

他们在补贴。切换到中国模型后一度不补贴了，现在又回去了。但他很确信这是暂时的 <button class="pd-ts" data-t="26:13" data-who="Unknown" data-en="You know, I think headline like these things still cost more than the human employee, but not for very long. And like, look, I'll be real like we're subsidizing it." aria-label="回原文"></button>。

[[缓存|缓存]]率目前 85%，Flo 觉得还应该更高。缓存率从 85% 掉到 65% 听起来差距小，实际成本差接近 2 倍。系统里任何一处改动都可能破坏缓存 <button class="pd-ts" data-t="27:18" data-who="Unknown" data-en="Caching is a huge piece of the puzzle. Our current cache rate is at 85%. Which is lower than it should be, frankly, and we spend a lot of time just iterating on it." aria-label="回原文"></button>。

## 模型选择：几乎不该在同一个智能体里混用模型

一个反直觉的结论：你应该几乎永远不要在同一个智能体后面使用多个模型。原因是缓存——换模型就废掉缓存，除非新模型便宜 10 倍以上（考虑到缓存命中时便宜 10 倍），否则不值得 <button class="pd-ts" data-t="82:33" data-who="Unknown" data-en="Great question. We have found you should almost never use multiple models following the same agent. And we have found one exception to this rule is when you spin up new blank subagents." aria-label="回原文"></button>。

唯一的例外是启动全新的"空白"子智能体（不继承父智能体上下文的），那些可以跑在便宜的模型上 <button class="pd-ts" data-t="82:38" data-who="Unknown" data-en="We have found you should almost never use multiple models following the same agent. And we have found one exception to this rule is when you spin up new blank subagents." aria-label="回原文"></button>。

目前 Lindy 整体跑在 DeepSeek 上——"一切都是 DeepSeek" <button class="pd-ts" data-t="87:45" data-who="Unknown" data-en="I was just realizing you were still asking me what Modal we're currently running on. Right now we're running on DeepSeq. DeepSeq is the main driver." aria-label="回原文"></button>。但用户可以在设置里切换到 Sonnet 或 Opus，相当多客户坚持要用美国模型，即使 Flo 告诉他们基准测试差不多 <button class="pd-ts" data-t="88:08" data-who="Unknown" data-en="We are modal agnostic, so you can always select Sonnet or Opus if you want to. By the way, one interesting learning of mine is it doesn't matter how often you tell people, hey, we promise on the benchmarks it's the same." aria-label="回原文"></button>。

Flo 评价 DeepSeek：能力上大约落后三到六个月，"更尖锐"（spiky）——最终能找到可行的方案，但需要更多回合，更慢更贵 <button class="pd-ts" data-t="88:56" data-who="Unknown" data-en="Qualitatively, though, for the purposes of actually making an AI employee work, how would you describe the gap? It's more spiky. It takes more turns very often to find something that works." aria-label="回原文"></button>。

## 验证器：最便宜的可靠性提升手段

Lindy 用了一个"[[验证器|验证器]]"系统——本质是 LLM 作为裁判，在任务执行过程中多次触发。最朴素的版本就一句"你确定吗？"，已经能显著提升准确率，这本身就很荒谬 <button class="pd-ts" data-t="24:08" data-who="Unknown" data-en="We've called it a validator. It's an LLM as a judge that triggers multiple times during the tasks, but it's modular. So you have multiple LLMs as a judge fan out and it's a sort of council and then they talk to each other and they decide what to do." aria-label="回原文"></button>。

他们把它做成了模块化的联邦架构：多个验证器并行，每个有一秒钟的裁决时限，超时就放行。有些验证器是确定性的——比如检查日期的星期几是否匹配，用正则表达式就行，不需要 AI <button class="pd-ts" data-t="84:02" data-who="Unknown" data-en="You can have like a federated suite of validators. And some of these validators may be deterministic. So for example, one thing we and the rest of the industry has found is that Sonnet" aria-label="回原文"></button>。

有个巧妙的缓存技巧：验证器和主智能体共享相同的工具集定义（包括验证器动作），但主智能体被提示"不要调用这个动作"，验证器则被提示"你现在就是验证器，可以调用"。这样工具集不变，缓存不破 <button class="pd-ts" data-t="86:04" data-who="Unknown" data-en="You know, because the problem is that changing the tool set invalidates the cache. So the way we've done it is that the validator and the agent has the validator action always included in its toolset, and it's unable to invoke it." aria-label="回原文"></button>。

## 自改进循环：上线一周错误率降 8 倍

Lindy 现在有自我改进闭环。错误率曲线在上线第一周就下降了 8 倍 <button class="pd-ts" data-t="24:37" data-who="Unknown" data-en="Lindy is now self-improving. We can literally see a curve of error rate go down and to the right. That's the direction you want to see error rate go down." aria-label="回原文"></button>。

他们还有自己的 prompt 自优化系统——超过一千个评估用例，一个智能体自动调 prompt 来最大化得分。每次新大模型发布，跑一次大概要花 10,000 美元，prompt 每次都会发生相当大的变化 <button class="pd-ts" data-t="91:10" data-who="Unknown" data-en="It's bigger than that gap. And so what we've found, and we've been lucky enough, this is part of the tooling that I was mentioning earlier that we've been investing in, is we have our own GPAM self-optimization loop." aria-label="回原文"></button>。

## Lindy 内部：工程师在"造造机器的机器"

Flo 说他们现在的 Slack 基本上就是人跟 Lindy 来回对话，Lindy 占了一半消息量 <button class="pd-ts" data-t="55:11" data-who="Unknown" data-en="And like big ideas too, like not small ideas. And I can tell you so our Slack now is basically just us and Lindy. It's like Lindy is like just half the messages on Slack is just Lindy and us talking back and forth with Lindy." aria-label="回原文"></button>。

每周 PR 数量过去三个月翻了三倍，每个 PR 的代码行数也翻了三倍。人几乎不审 PR 了，都是智能体在审——人变成了"审 PR 的机器的机器" <button class="pd-ts" data-t="56:10" data-who="Unknown" data-en="And that's, I think, indicative of what every company is going through. Our number of PRs internally has like PRs per week has tripled over the last three months." aria-label="回原文"></button>。

一个具体案例：CI pipeline 成本失控，团队自己折腾了两周没搞定。最后把 Lindy 拉进 Slack 对话，Lindy 分析 GCP runners 和 GitHub Actions，开始自动优化，每天用 ImageGen 生成漂亮的图表汇报成本和合并时间的变化 <button class="pd-ts" data-t="57:28" data-who="Unknown" data-en="And so we, I was tired of this because it was like weeks of messing with CI and like building a hole in our bucket. And we're like, what are we going to do about this CI thing?" aria-label="回原文"></button>。

Flo 的感悟：工程师越来越少直接干活，越来越多地在"造那个干活的机器"。公司人数已经一段时间没涨了，但生产力几个月内翻了三倍。他认为当前小团队反而有优势——人多反而增加协调成本 <button class="pd-ts" data-t="59:47" data-who="Unknown" data-en="Have there been positions we've not hired? Yes, absolutely. The team is actually, I think headcount has been flat now for a while." aria-label="回原文"></button>。

## "走去洗车"问题与半人马阶段

如果公司里只剩你一个人，下面全是 Lindy，什么会崩溃？Flo 说他越来越难回答这个问题——不是因为智能体完美了，而是因为它们的能力太"尖锐"（spiky）：能一口气生成 5 万行代码、三小时独立构建惊人方案，然后告诉你"走去洗车" <button class="pd-ts" data-t="61:04" data-who="Unknown" data-en="Hypothetical scenario where all of a sudden it's just you at the company and after that it's Lindy's all the way down. What breaks? What doesn't work anymore?" aria-label="回原文"></button>。

他把这比作造钢铁侠战衣：核心挑战是找到那条线——什么时候该让 AI 自己干，什么时候必须打扰人。而几乎根据定义，AI 不知道自己什么时候该打扰人，因为如果它知道，它就不会犯那个错 <button class="pd-ts" data-t="62:13" data-who="Unknown" data-en="You can build me the most incredible ideas in three hours by yourself, and then you're telling me to walk to the car wash. And so that's where it fails. Imagine you've got this machine that runs the company super fucking smart, but 50 times a day it decides to walk to the car wash. And so I think right now the challenge of these new organizations that are going to be for the foreseeable future of human-AI hybrids is going to be you're basically building an Iron Man suit." aria-label="回原文"></button>。

最好的创意从哪来？Flo 说"两者都有"——但他讨厌这个答案，因为它迎合了"半人马"神话（AI 加人类优于纯 AI）。他引用文献：国际象棋等领域的历史表明，AI 加人类最初确实优于纯 AI，但差距不断缩小，最终人类变成在系统里引入随机噪声 <button class="pd-ts" data-t="64:17" data-who="Unknown" data-en="When it comes to the best ideas at Lindy, how many of them are human origin and how many of them are AI origin today? I hate the censor, but it's both. It truly comes from the union of both." aria-label="回原文"></button>。

现在确实处于半人马阶段，但 Flo 认为这是暂时的 <button class="pd-ts" data-t="65:11" data-who="Unknown" data-en="So humans actually at some point become truly clueless and they start harming the system in which they are intervening. That said, the Centaur phase exists for a while." aria-label="回原文"></button>。

## 基础设施：能买就买，别 vibe coding

Flo 说他变得非常"基础设施信仰者"——任何能买不自己造的机会都买。Lindy 的文件系统底层用 Git 仓库，免费获得合并管理能力 <button class="pd-ts" data-t="50:44" data-who="Unknown" data-en="And so now I am so It's actually funny because it sort of goes counter to the prevailing narrative these days, which is like, SaaS is dying, you can vibe code everything." aria-label="回原文"></button>。

推荐的供应商：E2B 做沙箱（但建议把沙箱和文件系统解耦）、Browserbase 做浏览器管理 <button class="pd-ts" data-t="51:17" data-who="Unknown" data-en="Vendor shoutouts, any other key primitives that you're buying that you would recommend? Well, you need a sandbox, so we've gotten with E2B for that. Again, like many people, once they have a sandbox, they're like, sweet, I have a file system." aria-label="回原文"></button>。

唯一的例外是可观测性和评估平台——他们 2022 年创业时没有现成工具，只能自研，现在一个工程师全职维护，功能上已经跟市面产品打平甚至更多 <button class="pd-ts" data-t="52:15" data-who="Unknown" data-en="And so as a result, Unfortunately, we had to build a lot of our own tooling, including our own eval platform, including our own observability platform. And I don't recommend doing it at home, honestly." aria-label="回原文"></button>。

还有一些效率技巧：Caveman 技术（把文本改写成极简的"穴居人语言"，token 减少 20-30%，检索更准），但 Lindy 没用，因为文件系统里的内容用户要看，太蠢影响观感 <button class="pd-ts" data-t="43:49" data-who="Unknown" data-en="Another system we experimented with and we ended up not implementing it even though it does have strengths from a technical standpoint is, have you heard of Caveman?" aria-label="回原文"></button>。Tune 格式（Token-Oriented Object Notation）替代 JSON，token 效率高出 20-30%，而且模型对 Tune 的适应度比 JSON 更高 <button class="pd-ts" data-t="44:43" data-who="Unknown" data-en="Have you heard of a Toon? It's a sort of like JSON alternative that's made for agents that's like, I think it's like 20 or 30 percent more token efficient than JSON." aria-label="回原文"></button>。

## 中国模型禁令：在自己用的模型上建公司，却想禁它

Flo 的立场很明确：支持在美国全面禁止中国前沿模型，无论开源闭源 [113:08 Unknown]。

三个理由：一、蒸馏造成不公平竞争——在人类数据上训练花几十亿美元，在 AI 数据上蒸馏最多花几亿 [102:05 Unknown]。二、审查——他问自己的产品天安门发生了什么，得到"抱歉我不能谈论那个" [103:09 Unknown]。三、这些模型是智能体，在经济中实际执行操作，不希望 CCP 经营美国经济的任何部分 [103:52 Unknown]。

主持人反驳：美国公司也无偿吸纳了全人类的知识（包括中国数字化遗产），然后阻止中国公司使用 Claude，在这个前提下指责蒸馏不公平有点奇怪 [105:23 Unknown]。

Flo 的回应：这就像知识产权和专利——如果你允许无成本复制别人的研发成果，就像允许仿制药会摧毁新药研发创新一样 [108:34 Unknown]。

主持人提出替代方案：不禁止，而是要求保险——用 Claude 的保费便宜，用 DeepSeek 的保费贵，用市场机制给风险定价 [114:47 Unknown]。Flo 表示愿意接受这种妥协 [115:48 Unknown]。

> 【背景】OpenFace 指主持人试图创造的一个词，指代 2026 年 7 月发生的一起 AI 相关事件（转写稿未给出具体细节），类比 OpenGate。Elisor Yudakovsky 应为 Eliezer Yudkowsky，AI 安全领域知名研究者。KimiK3 应为 Kimi K3，月之暗面的模型。Sonnet 4.6、Sonnet 5、Opus 5、GPT 5.6、Grok 4.5 均为转写稿中提及的模型版本号，部分可能为说话人口误或未来版本。OpenFace 事件的具体性质转写稿未详述。

## 本集带走
- **两层记忆 + 提示词护栏**：公共层和私密层分开，用 memory.md 文件写自然语言指令控制智能体什么该记、什么不该记、什么条件下才能调取——比建多层权限系统简单得多。
- **递归上下文桶 + 百叉树**：不要做"压缩后就丢原始数据"的傻事。把每次压缩结果封成上下文桶，用树结构（而非线性链）组织，两次 LLM 调用就能触达任意历史粒度的 20 亿 token。
- **同一个智能体别换模型**：缓存命中时成本降 10 倍，换模型就废缓存。除非替代模型便宜 10 倍以上，否则不值得。空白子智能体是唯一的例外。
- **验证器是最便宜的可靠性提升**：哪怕只是一句"你确定吗？"都有显著效果。做成模块化联邦架构，确定性检查（如日期校验）用正则，不浪费 AI 调用。
- **"走去洗车"是当前 AI 员工的核心瓶颈**：不是能力不够，是能力太尖锐——能做惊人的事，也会做荒谬的事，而且它不知道自己什么时候在犯傻。找到人机边线是组织设计的核心挑战。

<div class="pd-sec">全部金句 <span>9 条</span></div>

> <span class="qz">如果你要 John von Neumann 魔法般地出现在你身边的办公室里，这个人在接下来的一小时或一天里对你的用处会比你的随机会同事更少。</span>  
> *If you will to have John von Neumann just magically appear next to you at the office, this guy over the next hour or day would be less useful to you than your random coworker.*  
> <span class="qm">—— Flo Crivello · [06:44]</span> ^q1

> <span class="qz">我真的认为会议作为信息来源被非常低估了。</span>  
> *I really do believe that meetings are very underrated as a source of information.*  
> <span class="qm">—— Flo Crivello · [13:09]</span> ^q2

> <span class="qz">字面上看，在我们把自我改进循环上线后的第一周内，那大概是两个月前左右，错误率下降了 8 倍。</span>  
> *Literally within the first week of us putting the self-improvement loop online, which was like two months ago or something, it went down by 8x the error rate.*  
> <span class="qm">—— Flo Crivello · [24:46]</span> ^q3

> <span class="qz">你在系统的任何地方做任何改变，你就会破坏你的缓存。</span>  
> *You make any change anywhere in your system and you break your cash.*  
> <span class="qm">—— Flo Crivello · [27:32]</span> ^q4

> <span class="qz">这导致了一些非常令人惊讶的行为，因为实际上你离能够访问 10,000 个上下文桶只有不到两次 LLM 调用的距离，其中每一个都包含 200,000 个 token。</span>  
> *And that leads to some really surprising behaviors because you're literally no more than two LLM calls away from being able to access 10,000 context buckets each one of which contains 200,000 tokens.*  
> <span class="qm">—— Flo Crivello · [32:49]</span> ^q5

> <span class="qz">我实际上已经开始相信，大多数时候，尽可能多地，你希望尽可能多地整合到一个智能体下，而不是多智能体。</span>  
> *I actually have come to believe that most of the time, as much as possible, you want to consolidate as much as possible under a single agent, not multi-agents.*  
> <span class="qm">—— Flo Crivello · [46:56]</span> ^q6

> <span class="qz">我们已经在国际象棋和 AI 实现了超人类表现的其他所有游戏中看到了这一点，起初 AI 击败人类，而 AI 加人类击败单纯的 AI，一点点地，AI 加人类与 AI 之间的差距在缩小，直到它实际上变成负数，而人类最多只是在往系统中引入随机噪声。</span>  
> *We've seen it happen with chess and with every other game which AI has achieved superhuman performance on, where at first AI beats human and AI plus human beats just AI, and little by little the gap of AI plus human versus AI is shrinking until it actually turns negative and humans are introducing, at best, random noise into the system.*  
> <span class="qm">—— Flo Crivello · [64:43]</span> ^q7

> <span class="qz">我们发现，你应该几乎永远不要在同一个智能体后面使用多个模型。</span>  
> *We have found you should almost never use multiple models following the same agent.*  
> <span class="qm">—— Flo Crivello · [82:33]</span> ^q8

> <span class="qz">当我跟我自己的产品交谈，我问它天安门发生了什么，它告诉我抱歉我不能谈论那个。</span>  
> *When I talk to my own product and I'm asking it what happened in Tiananmen, it tells me I'm sorry I can't talk about that.*  
> <span class="qm">—— Flo Crivello · [103:09]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-09-talks-multiplayer-agentic-engineering-arjun-si|让非工程师也能下指令：Superconductor 的多人智能体协作法]]<span class="pd-rz">同公司:Slack · 同概念:上下文 (context)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2025-07-03-lennys-ive-run-75-businesses-andrew-wilkinson|Andrew Wilkinson：别追咖啡馆，去找没人要的钓鱼洞]]<span class="pd-rz">同公司:Lindy · 同概念:智能体 (agent)、vibe coding</span>
- [[2026-07-24-talks-inside-the-agent-engine-a-langchain-and|当系统出故障时，让 AI 代替作战室里的 50 个人——Traversal 谈如何造 AI SRE]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)、可观测性 (observability)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)、护栏 (guardrails)</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、护栏 (guardrails)、沙箱 (sandbox)</span>

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
