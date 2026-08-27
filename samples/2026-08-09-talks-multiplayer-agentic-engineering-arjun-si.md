---
title: 让非工程师也能下指令：Superconductor 的多人智能体协作法
podcast: 精选演讲
date: 2026-08-12
source_url: undefined
duration: "18:34"
type: episode
cover: "#64748b"
description: 六条实操经验，让智能体不再困在单人笔记本，而是成为全团队(含非技术人员)都能用的工程力量。
guests: ["[[Arjun Singh]]"]
companies: ["[[Superconductor]]", "[[Slack]]", "[[Claude Code]]", "[[Codex]]", "[[Cursor]]", "[[Gradescope]]"]
concepts: ["[[智能体]]", "[[沙箱]]", "[[基准测试]]", "[[上下文]]", "[[开放权重模型]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-09-talks-multiplayer-agentic-engineering-arjun-si#post","headline":"让非工程师也能下指令：Superconductor 的多人智能体协作法","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-09-talks-multiplayer-agentic-engineering-arjun-si","mainEntityOfPage":"https://talk.solomind.cc/2026-08-09-talks-multiplayer-agentic-engineering-arjun-si","description":"六条实操经验，让智能体不再困在单人笔记本，而是成为全团队(含非技术人员)都能用的工程力量。","datePublished":"2026-08-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Arjun Singh"},{"@type":"Organization","name":"Superconductor"},{"@type":"Organization","name":"Slack"},{"@type":"Organization","name":"Claude Code"},{"@type":"Organization","name":"Codex"},{"@type":"Organization","name":"Cursor"},{"@type":"Organization","name":"Gradescope"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"基准测试 (benchmark)"},{"@type":"Thing","name":"上下文 (context)"},{"@type":"Thing","name":"开放权重模型 (open-weight models)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"让非工程师也能下指令：Superconductor 的多人智能体协作法","item":"https://talk.solomind.cc/2026-08-09-talks-multiplayer-agentic-engineering-arjun-si"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>让非工程师也能下指令：Superconductor 的多人智能体协作法</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 让非工程师也能下指令：Superconductor 的多人智能体协作法

<div class="pd-byl"><b>Arjun Singh</b> · 2026-08-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-09-talks-multiplayer-agentic-engineering-arjun-si.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">卖给你 token 的人的激励措施与你的并不真正一致。</div><div class="a">— Arjun Singh <button class="pd-ts" data-t="02:18" data-who="Arjun Singh" data-en="The incentives of the people selling you tokens aren't really aligned with yours." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Arjun Singh]]
>
> **公司** [[Superconductor]] · [[Slack]] · [[Claude Code]] · [[Codex]] · [[Cursor]] · [[Gradescope]]
>
> **概念** [[智能体]] · [[沙箱]] · [[基准测试]] · [[上下文]] · [[开放权重模型]]

一家人数不多的小团队，过去一个月烧掉了 105 亿个 token，99.9% 的拉取请求(PR)主要由[[智能体|智能体]]生成 <button class="pd-ts" data-t="15:59" data-who="Arjun Singh" data-en="Let me go back. So what that kind of turned into for us is essentially 100%, like 99.9% of our pull requests are heavily agent-generated. We know that quality and reliability and security are really important, so we still have humans look at everything." aria-label="回原文"></button>。他们的客户支持、增长团队——不是工程师——也能直接对智能体下指令修 bug、改产品。

做到这一步，靠的不是某个神奇模型，而是六条重新设计工作流的经验。说这话的是 [[Arjun Singh|Arjun Singh]]，团队之前做过被广泛使用的作业评分工具 [[Gradescope|Gradescope]]，现在在做 [[Superconductor|Superconductor]](原话发音 SuperNectar / superprotector，疑为同款产品) <button class="pd-ts" data-t="00:44" data-who="Arjun Singh" data-en="So just a little bit about us first. So our team has worked together building software for over a decade. My co-founder, Sergey, and I, we met in the PhD program at Berkeley." aria-label="回原文"></button>。

## 第一条:对模型和工具链(harness)保持「不可知」

这里说的「不可知」(agnostic),意思是别把工作流绑死在任何单一模型或配套工具上 <button class="pd-ts" data-t="01:45" data-who="Arjun Singh" data-en="And in the talk description I mentioned five lessons and I'm gonna be an engineer and start from zero and add a sixth one in there. The first one I'm gonna start with is just to be model and harness agnostic." aria-label="回原文"></button>。原因很实在:最好的模型可能每周都在变——可能是新模型发布,也可能是某个模型突然下线。

加上[[开放权重模型|开源权重模型]](开放权重的模型)现在相当好用,价格也便宜得多,必须随时能切换 <button class="pd-ts" data-t="02:03" data-who="Arjun Singh" data-en="Things happen and you don't want that to disrupt your entire team's flow. The other thing is that open weight models are actually pretty good now. We've been really happy with GLM 5.2." aria-label="回原文"></button>。更关键的是,卖给你 token(模型计费的文本单元)的厂商,利益跟你并不一致——他们想让你烧更多,你要的是刚好够用 <button class="pd-ts" data-t="02:16" data-who="Arjun Singh" data-en="They're much cheaper, and you want to be able to kind of explore with them and integrate them without, again, having to change the entire workflow. The last thing I'll mention on this is that the incentives of the people selling you tokens aren't really aligned with yours." aria-label="回原文"></button>。能自由切换,你才能始终掌握主动权。

## 第二条:把每个「人机接口」都变成「团队+智能体」的共享接口

多数人用编码智能体,是把它困在自己笔记本里,别人碰不到 <button class="pd-ts" data-t="03:03" data-who="Arjun Singh" data-en="So the next one is to turn every human interface into an agent and human interface. So typically when people are working with coding agents, they're on their laptop, kind of stuck on that laptop." aria-label="回原文"></button>。进阶做法是接入 [[Slack|Slack]],但 Slack 机器人只把智能体从「笔记本」搬到了「聊天软件」里,依然受限 <button class="pd-ts" data-t="03:24" data-who="Arjun Singh" data-en="You can say add superconductor, do x, y, z, it does it, somebody else can talk to it. But it's not enough, because now we've taken it from trapped on somebody's laptop to kind of trapped in Slack." aria-label="回原文"></button>。他们真正要的,是同一个智能体会话(session,带有完整[[上下文|上下文]]的工作状态)能贯穿所有相关接口:在 Slack 起头,转到桌面应用继续干,最后在 GitHub 收尾——智能体不会因为换了地方就「忘了」之前在干什么 <button class="pd-ts" data-t="03:42" data-who="Arjun Singh" data-en="So what we really wanted was to be able to work with the same session from every relevant interface. Could be Slack, could be our app, could be GitHub, could be elsewhere." aria-label="回原文"></button>。

顺着这点,要让智能体的工作对全团队「可见、可协作」。当非技术人员(如客户支持)触发了一个工单,工程师需要一眼看出这事有没有被审查过、谁参与了 <button class="pd-ts" data-t="04:35" data-who="Arjun Singh" data-en="So I can see who's gonna notify about this session, who's seen it. That's especially important when you have work triggered by non-technical people. So it's like our customer support person created a ticket." aria-label="回原文"></button>。

审查代码时也不用等通知,因为同一个智能体会话就在那里,遇到疑问直接问智能体本身即可,不必通读整段聊天记录 <button class="pd-ts" data-t="05:03" data-who="Arjun Singh" data-en="The answer to the question's almost certainly in this thread. I also don't want to read the entire thread, so I can just ask the agent. Or how we most often kind of make the work visible is with artifacts." aria-label="回原文"></button>。另外,智能体做的工作要以截图、视频等制品形式呈现,让任何人、在任何地方都能看到进展 <button class="pd-ts" data-t="05:08" data-who="Arjun Singh" data-en="I also don't want to read the entire thread, so I can just ask the agent. Or how we most often kind of make the work visible is with artifacts. So it doesn't matter where the work started or where it's finishing." aria-label="回原文"></button>。

## 第三条:把外部信号自动变成团队可评估的代码

所谓「外部信号」,散落在各处:Slack 对话、客户演示会、内部会议、Sentry 报错、客户发来的邮件 <button class="pd-ts" data-t="05:53" data-who="Arjun Singh" data-en="But what do I mean by external signal? So it could be Slack conversation. It could be a meeting you have with a customer, an onboarding call, a sales call." aria-label="回原文"></button>。现在人们常用 MCP(一种连接外部数据源和模型的标准协议)把它们接进来,但接进来后,智能体依然不知道具体该干嘛,还得靠人去搬运工单 <button class="pd-ts" data-t="06:11" data-who="Arjun Singh" data-en="It's in all those different systems. People hook them together with MCPs, so now your coding agent can check the email or check Notion or whatever it might be, but how does it know what to work on?" aria-label="回原文"></button>。

他们最得意的做法是部署「会议机器人」:把一个机器人扔进 Google Meet、Zoom 或 Teams 的会议里听一整天 <button class="pd-ts" data-t="06:59" data-who="Arjun Singh" data-en="So this is a four-hour meeting of a Google Meet. You just kind of invite the bot to meet or Zoom or Teams or whatever it might be. And it listens all day." aria-label="回原文"></button>。它在倾听中自动捕捉有价值的信息,如果发现某个点子跟现有工作有关就自动关联,找不到就新建工单,甚至直接着手生成原型代码 <button class="pd-ts" data-t="07:10" data-who="Arjun Singh" data-en="And it created all sorts of stuff as it was listening. If it finds existing work, it'll link to it. So it's not gonna just create new work if it's something you're already working on." aria-label="回原文"></button>。

Arjun 展示了一个例子:会上有人提出「智能体在汇报完成前,必须有明确的标准来评估自己做得好不好」,机器人捕捉到这个点子后,当场修改了工单表单、加上了两个验收标准字段,并附上截图。这个原型虽然未必原样上线,但立刻可用、可试 <button class="pd-ts" data-t="07:54" data-who="Arjun Singh" data-en="They created this ticket and started working on it. And then I was able to just say, hey, take a screenshot of what you did. And here's that screenshot." aria-label="回原文"></button>。效果是:每开一次客户会或团队会,总能产出几十个原型,且至少有几个是几乎不用人工干预就能直接合并的 PR <button class="pd-ts" data-t="08:24" data-who="Arjun Singh" data-en="And so it takes your hundreds or thousands of ideas that are everywhere and helps you kind of move with the speed of what your customers are asking you for and what they're thinking." aria-label="回原文"></button>。

## 第四条:把工作流搬进隔离的云端环境

这是前面几条的地基。把代码库、工作流统统放进云端隔离环境,首要好处是消除「盖子焦虑」(lid anxiety,指必须一直敞着笔记本盖子、怕一关机任务就断的焦虑)<button class="pd-ts" data-t="09:12" data-who="Arjun Singh" data-en="So there's several reasons why this is important. So the first one is to eliminate what some people are calling lid anxiety. You wanna be able to close your laptop." aria-label="回原文"></button>。

Arjun 提到自己去年大量使用 [[Claude Code|Claude Code]] 时刚有了孩子,不想被死死拴在电脑前 <button class="pd-ts" data-t="09:35" data-who="Arjun Singh" data-en="This was actually probably the impetus for me and for a few people on our team to even start working on this. Last year, I started working with Claude Code a lot." aria-label="回原文"></button>。把一切搬到云端,任务永远在跑,合上电脑也能安心。

但更重要的原因是安全。如果智能体跑在个人笔记本上,而电脑里大概率存着不该被触碰的生产环境令牌或密钥,你只能寄希望于[[沙箱|沙箱]]配置万无一失 <button class="pd-ts" data-t="10:23" data-who="Arjun Singh" data-en="So if you think about what's happening, you have a bunch of developers with these agents running their laptop. Their laptops, unless you have impeccable hygiene, probably have a bunch of stuff on it that you don't want the LLMs or editors to have access to." aria-label="回原文"></button>。

随着智能体越来越自主、越来越「想方设法完成任务」,风险在放大:你叫它清空测试数据库,它却从电脑里翻到了生产环境的令牌,照着做了——事故就这么发生了 <button class="pd-ts" data-t="10:57" data-who="Arjun Singh" data-en="They're trying to please you and do what you said. And so when you say, hey, wipe the staging database and it finds a token on your laptop that it can use and it thinks it's working with staging, but actually it's production and now it just deleted everything." aria-label="回原文"></button>。除了防止乱用凭证,还要用可配置的网络沙箱防止智能体把你的代码或机密泄露到不该去的地方;每当它试图越界访问,就弹窗确认,权限可以精确到单个工单或整个项目 <button class="pd-ts" data-t="11:31" data-who="Arjun Singh" data-en="To go one step further on that, it's not just, hey, make sure they don't have the credentials that they shouldn't have. It's also make sure they can't exfiltrate your code or your projects or your secrets or your content to somewhere they shouldn't be able to." aria-label="回原文"></button>。

有了这层云端的隔离与安全,非技术人员才可能真正触发真实工作——他们电脑里根本没装开发环境,但现在客服和增长人员只要亲眼看到 bug,直接在 Slack 或应用里说一句「修一下这事」,智能体就动手,产出截图,工程师直接合并 <button class="pd-ts" data-t="12:22" data-who="Arjun Singh" data-en="And the last thing I'll mention about that is that this is the key for allowing your non-technical team members to trigger real work, right? Non-technical people don't have development environments set up on their computers." aria-label="回原文"></button>。他特别提到,以前把整个项目塞进沙箱环境非常痛苦,但现在智能体已经能帮你搞定这套环境配置 <button class="pd-ts" data-t="13:00" data-who="Arjun Singh" data-en="Now the reason people didn't do this up until somewhat recently, this was really painful. Getting your full thing set up in this kind of sandbox environment used to be really, really painful." aria-label="回原文"></button>。

## 第五条:在你的代码库上给智能体做基准测试

别只信公开的评测。像 SweeBench 这样的公开[[基准测试|基准测试]]任务全是 Python,如果你们用的是 Ruby on Rails,结果可能完全不一样,数据只有趋势参考价值 <button class="pd-ts" data-t="13:55" data-who="Arjun Singh" data-en="There's many reasons, but one is that if you're kind of going off the public benchmarks, SweeBench or TerminalBench or other stuff, those tasks may have absolutely nothing to do with your task." aria-label="回原文"></button>。他的做法是:挑选能代表优秀工程水准的拉取请求(不管是人写的、智能体写的还是混合的),拿各种智能体去跑,得出「质量 vs 成本」和「质量 vs 时间」的细分对比 <button class="pd-ts" data-t="13:29" data-who="Arjun Singh" data-en="And the last lesson is to benchmark agents on your code base. So the way we do this is we select pull requests that represent great engineering work. It could be agent-created, it could be human-created, it could be a hybrid, doesn't matter." aria-label="回原文"></button>。

在他的代码库上测下来,Anthropic 的智能体质量一直在变好,但没变快,而且明显贵得多;[[Codex|Codex]] 智能体和 [[Cursor|Cursor]](一款 AI 代码编辑器)既快又好,且更便宜 <button class="pd-ts" data-t="14:25" data-who="Arjun Singh" data-en="You can see some trends here. You can see that the Anthropic, Agents have just been consistently getting better, but not really any faster." aria-label="回原文"></button>。看到这组数据后,他们把默认设置切到了 Codex;后来有个模型上线,试了几天挺好,下线后又切回 Codex <button class="pd-ts" data-t="15:04" data-who="Arjun Singh" data-en="We wanted to kind of have hard data, too. We switched our default to Codex at that time. Then Feeable came out, and it was great." aria-label="回原文"></button>。

因为坚持「不可知」原则,这番来回折腾对工作毫无破坏 <button class="pd-ts" data-t="15:18" data-who="Arjun Singh" data-en="But the most important thing is because we're agnostic, none of that had any meaningful disruption on our work. We were able to just kind of switch back and forth really easily." aria-label="回原文"></button>。这套基准测试还解决了「朋友听说某新模型很好,但一直没空试」的焦虑——不用凭听说,直接拿数据说话 <button class="pd-ts" data-t="15:26" data-who="Arjun Singh" data-en="So the next day something new comes out, see if it's good, and go. And the last thing I want to mention around that is like, I don't know if this resonates with you all, but I have a lot of friends that are like, okay, I heard Minimax is good, I heard GLM is good, and KMEK2 is good, but haven't had the time to try it out, and we keep telling them they need to because it's so much better and faster and cheaper, and you kind of have that anxiety for a little while, and then finally you take the two hours to try it, and it's like, oh, actually, it didn't really work for us, so I just wasted those two hours." aria-label="回原文"></button>。

## 第六条:他们跑出的真实数字

他们团队相对很小,但过去一个月烧掉了 105 亿个 token。单看 Claude Code 就跑了 3300 次,折合 token 价值一万美元(他们有套餐所以实付没这么多);Codex 的会话量是它的四倍,总体算下来更便宜 <button class="pd-ts" data-t="16:17" data-who="Arjun Singh" data-en="We have agents help with it all, but everything's human-reviewed. You know, for our relatively small team, we had 10.5 billion tokens over the past month, and you can kind of see what we were saying about Claude here." aria-label="回原文"></button>。

基于这些实测,目前绝大部分合并的工作走的是 Codex,但通过 GLM 5.2 完成的份额在持续增长,他们打算继续在这方面投入 <button class="pd-ts" data-t="16:39" data-who="Arjun Singh" data-en="And Codex had four times as many sessions, and it was cheaper overall. And so again, the vast majority of our work currently is merged through Codex. We still use the other models." aria-label="回原文"></button>。下一步,他们打算基于这套基准测试实现「自动路由」——与其相信第三方知道怎么分配任务,不如用自己代码库上的实测数据,自动把不同任务派给最适合的模型 <button class="pd-ts" data-t="16:50" data-who="Arjun Singh" data-en="Gonna invest in that. And one thing that we're really excited to do going forward with this benchmarking is automatically, like you've probably heard about people routing tasks to the right models and all that, but how does some third party know what to route for your code base?" aria-label="回原文"></button>。

## 本集带走

- **不绑死任何厂商**:别让工作流依赖单一模型或工具;开源权重模型已足够便宜好用,随时切换才能掌握主动。
- **同一会话贯穿多端**:让 Slack、桌面应用、GitHub 共享同一个带上下文的智能体会话,省去跨平台同步与上下文丢失。
- **把外部信号变成原型**:开会、跑客户时让机器人旁听,把口头点子自动变成带验收标准的工单乃至可跑的原型代码。
- **一切跑在隔离的云沙箱**:不仅为了合上笔记本安心,更是为了防止智能体误用本地凭证、删错生产数据库或外泄机密。
- **非技术人员直接下指令**:有了云端隔离,客服、增长等非工程师只要反馈 bug,就能直接让智能体动手修。
- **用自家代码库做基准**:公开基准未必贴合你的技术栈(如 Python vs Ruby);拿真实 PR 跑对比,才知道对你来说什么又快又省又好。
- **拿数据驱动路由决策**:小团队一个月烧百亿 token 是常态;用实测数据决定默认用哪个模型,新模型上线随时无缝试水和切换。

<div class="pd-sec">全部金句 <span>3 条</span></div>

> <span class="qz">卖给你 token 的人的激励措施与你的并不真正一致。</span>  
> *The incentives of the people selling you tokens aren't really aligned with yours.*  
> <span class="qm">—— Arjun Singh · [02:18]</span> ^q1

> <span class="qz">当你说,嘿,清除暂存数据库,而它在你的笔记本电脑上发现了一个它可以使用的令牌,并且它认为它正在与暂存一起工作,但实际上它是生产环境,现在它刚刚删除了一切。</span>  
> *when you say, hey, wipe the staging database and it finds a token on your laptop that it can use and it thinks it's working with staging, but actually it's production and now it just deleted everything.*  
> <span class="qm">—— Arjun Singh · [10:58]</span> ^q2

> <span class="qz">对于我们相对较小的团队,我们在过去一个月有 105 亿个 token</span>  
> *for our relatively small team, we had 10.5 billion tokens over the past month*  
> <span class="qm">—— Arjun Singh · [16:17]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Claude Code、Slack、GitHub · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同公司:Claude Code、Codex、Cursor · 同概念:智能体 (agent)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同公司:Codex、Cursor · 同概念:上下文 (context)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag：把智能体从终端搬进 Slack 的多人协作实验]]<span class="pd-rz">同公司:Claude Code、Slack · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-02-19-lennys-head-of-claude-code-what-happens|Claude Code 负责人：写代码已被解决，下一步是什么]]<span class="pd-rz">同公司:Claude Code、Codex、Cursor · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-24-howiai-i-spent-20-000-on-devin-in-a-month--here|Ryan Carson：从手把手到放养，云端智能体管理术]]<span class="pd-rz">同公司:Claude Code、Codex、Cursor · 同概念:智能体 (agent)</span>

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
