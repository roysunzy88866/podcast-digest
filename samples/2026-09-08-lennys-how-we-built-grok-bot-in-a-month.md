---
title: Grok Bot 如何三周引爆全球：从零孵化「有电脑的同事」
podcast: "Lenny's Podcast"
date: 2026-09-08
source_url: https://www.lennysnewsletter.com/p/how-we-built-grok-bot-in-a-month
duration: "82:40"
type: episode
cover: "#6366f1"
image: "/covers/2026-09-08-lennys-how-we-built-grok-bot-in-a-month.jpg"
description: Grok Bot 产品负责人 Roman Ugarte 讲述这个爆款 AI 产品的从零孵化过程：云原生、每个 bot 一台电脑、 ruthless 做减法，以及两次决定成败的早期抉择。
host: "[[Roman Ugarte]]"
companies: ["[[Grok Bot]]", "[[Cursor]]", "[[SpaceXAI]]", "[[OpenClaw]]"]
concepts: ["[[智能体]]", "[[机器人]]", "[[计算机使用]]", "[[云计算]]"]
category: 智能体
tags:
  - 智能体
  - 产品方法
socialImage: "https://talk.solomind.cc/covers/2026-09-08-lennys-how-we-built-grok-bot-in-a-month.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-08-lennys-how-we-built-grok-bot-in-a-month#post","headline":"Grok Bot 如何三周引爆全球：从零孵化「有电脑的同事」","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-08-lennys-how-we-built-grok-bot-in-a-month","mainEntityOfPage":"https://talk.solomind.cc/2026-09-08-lennys-how-we-built-grok-bot-in-a-month","description":"Grok Bot 产品负责人 Roman Ugarte 讲述这个爆款 AI 产品的从零孵化过程：云原生、每个 bot 一台电脑、 ruthless 做减法，以及两次决定成败的早期抉择。","datePublished":"2026-09-08","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-08-lennys-how-we-built-grok-bot-in-a-month.jpg","isBasedOn":"https://www.lennysnewsletter.com/p/how-we-built-grok-bot-in-a-month","about":[{"@type":"Person","name":"Roman Ugarte"},{"@type":"Organization","name":"Grok Bot"},{"@type":"Organization","name":"Cursor"},{"@type":"Organization","name":"SpaceXAI"},{"@type":"Organization","name":"OpenClaw"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"机器人 (bot)"},{"@type":"Thing","name":"计算机使用 (computer use)"},{"@type":"Thing","name":"云计算 (cloud)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Grok Bot 如何三周引爆全球：从零孵化「有电脑的同事」","item":"https://talk.solomind.cc/2026-09-08-lennys-how-we-built-grok-bot-in-a-month"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Grok Bot 如何三周引爆全球：从零孵化「有电脑的同事」</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Grok Bot 如何三周引爆全球：从零孵化「有电脑的同事」

<div class="pd-byl"><b>Roman Ugarte</b> · Grok Bot 产品负责人 · 2026-09-08</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-08-lennys-how-we-built-grok-bot-in-a-month.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">让我对开发 Grok Bot 感到如此兴奋的是，这是我第一次在非编码任务上感觉自己可以真正把工作委托给 AI，不用再去想它，回来的时候事情已经完成了。</div><div class="a">— Roman Ugarte <button class="pd-ts" data-t="01:00" data-who="Roman Ugarte" data-en="What made me so excited to work on Grok Bot is it was the first time for non-coding tasks that I felt like I could truly delegate work to AI, not have to think about it, and I would come back and it's done." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Roman Ugarte]]
>
> **公司** [[Grok Bot]] · [[Cursor]] · [[SpaceXAI]] · [[OpenClaw]]
>
> **概念** [[智能体]] · [[机器人]] · [[计算机使用]] · [[云计算]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/how-we-built-grok-bot-in-a-month)

一个上线才三周的产品，聚会现场几百人站席全满，被称为「当下世界上最火的 AI 产品」——这就是 [[Grok Bot|Grok Bot]]。聊它的人叫 [[Roman Ugarte|Roman Ugarte]]，他是 [[Cursor|Cursor]] 的第 15 号员工，做过两年增长，最近帮助孵化了 Grok Bot，现在负责它的产品工作。他有两条早期决定，当时没人觉得显而易见，事后看却是这款产品成功的全部关键。

## 从零开始，一个月做出内测版

Grok Bot 不是 Cursor 里加出来的功能，而是一次完全从零的构建。Roman 说，团队长期觉得不该只做开发者的产品，于是内部组建了一个极小的团队，「钻进山洞」约一个月，唯一目标是做一个把[[智能体|智能体]]带给全公司的知识工作产品。从第一行代码到内部原型，只用了大约一个月。

回头看，Roman 认为小团队、与公司完全隔绝是速度的关键——字面意义上的独立办公区、私有 Slack 频道。因为每天要做大量微观决策，如果是一大群人围着六到十二个月的长期愿景讨论，根本到不了最终的落点。

为什么不直接做进 Cursor？这个决定当时争议很大。

原因是编程产品对非技术用户有品牌联想、令人望而生畏，而且竞品那种「一个界面塞多个标签页」的做法，用户能感觉到这不是关于工作该怎么运作的单一愿景，而是「三个不同愿景共享一块屏幕」——有点像把组织架构图直接发布给用户，大家的反应是负面的。控制体验的每一个像素、保持一个一致愿景，对成功贡献很大。

内测上线后的推广动作也很「土」但有效：开了一场全员大会，然后核心团队在约两周内**手动引导了两三百个用户**，每次 20 分钟坐在电话旁。最初几次相当痛苦——电脑启动不了、用户极度困惑——但正因为核心团队在现场，第二天就修，绝不允许同样的问题发生第二次。

## 「不诱导证人」：让用户自己发明用法

手动引导的另一个目的是发现真实用法。内部最早流行的是每人开五到十个 bot，各管一条工作线；到第二周末，Slack 里开始出现有人「提拔」表现最突出的 bot 为「幕僚长」，之后主要跟幕僚长对话，由它把任务分发给其他 bot、管理整个团队。还有好玩的截图：被提拔的 bot 问自己能不能加薪、token 预算会不会更高。

团队注意到了这个模式，但在早期访问计划中刻意「不诱导证人」——不明说该建幕僚长 bot、该怎么管理其他 bot，而是看外部用户会不会自己走到那一步。很多人确实走到了，团队这才在产品里轻微鼓励这个模式，但保持它不是单向门。

## 做减法：unship、「Grok Bot 可以」而不是「Grok Bot 有了」

内部测试的三周里，最大的两件事都是减法和修可用性。一是大规模下线（unship）：他们曾把模型的内部思考、存储的记忆这类调试用的可见性工具塞进产品，发布前被极其激进地裁掉。团队现在的方向是「无情地简化，把用户不需要主动思考的一切抽象掉」。

二是用一个非常实际的纪律来过滤工作：任何在做的东西，先问「它的上线推文是什么」——如果写不出一条能打动用户的推文，也许就不该做。他们还刻意把句式从「Grok Bot 有了（新按钮/新下拉菜单/新集成）」改成「**Grok Bot 可以（…

…）**」——用更贴近人的方式描述能力，逼着团队思考「能给 bot 哪些工具和能力」，而不是「能往产品里加什么」。

一个典型例子是自动化设置。竞品的做法是进侧边栏、按加号、选触发事件、选动作，非常笨拙，结果人们根本不会设置多少自动化。

Grok Bot 的做法是直接用自然语言：「请每天早上 8 点提醒我」，然后你永远不用看到创建自动化的界面。现在平台上 99% 的自动化都是这样构建的。

## 两个关键决定：全在云端 + 每个 bot 一台自己的电脑

被问「Codex 和 Cowork 技术上也能做这些，你们到底做对了什么」，Roman 给出两个早期决定。

第一，**永远不让用户思考本地和云**：工作流在哪跑？电脑必须开着吗？

从手机启动还要连着家里的电脑吗？Grok Bot 很早就决定一切都在云端——bot 是一个拥有自己电脑的持久同事，在任何交互入口状态一致，可以发消息、从手机启动，将来可以从任何地方打电话叫它干活。

第二，更进一步：**这些 bot 要有自己的电脑**。一是很多工具没有支持良好的 MCP（让 AI 接入外部工具的标准协议）或 API，销售团队用的很多工具就是如此，而人类工作本来也不是通过 API 完成的——我们点像素、往输入框打字，bot 也得有这些基线能力。

二是他觉得现在是个将来回头看会觉得奇怪的的时刻：「你给超级智能的新同事做入职培训，却让它和你共用一台电脑、共用凭证、不断互相绊倒——这太疯狂了。」

「有自己的电脑」带来的反馈循环非常具体：销售团队会报上来 10 到 20 个「鼠标点不到 Salesforce 仪表盘那个位置」的具体案例，基础设施一修复，第二天就收到销售团队如潮水般的感谢——过去七天一直失败的工作流终于能用了。这比看仪表盘上数字缓慢爬升实在得多。

另外一点反直觉的立场：**不给用户看内部机制**。不展示工具调用、每一次点击、长长的思维链文本流。

理由是队友式的类比——你不会要求人类队友逐秒汇报按了哪个按钮。有用户反馈想看 bot 的待办清单，这个会考虑；但没有任何人想要文本流，这反而验证了方向。

## 从 OpenClaw 吸收什么、再补上什么

Roman 坦承 Grok Bot 从 [[OpenClaw|OpenClaw]] 那类产品吸收了很多。OpenClaw 做对两件事：一是证明即使按当前模型能力，只要给 bot 访问你工作所用工具的权限，它就能走完大部分路——很多人觉得 AI 笨，其实是「被错误的用法拖累」；二是把 AI 更看作同事、队友，一个能访问你生活、延伸你的实体。

Grok Bot 补上的是规模化：家里架 VPN 加一台 Mac mini 的 hacky 方案无法扩展到数百万用户，更不会是企业采用的方式。同时把粗糙边缘磨平，移除高级用户才懂的抽象——怎么让用户甚至不需要知道什么是 skill、永远不用输入斜杠命令。

## 北极星：每个决策都问「人类队友会怎么做」

产品的北极星是：少从 SaaS 产品的角度思考，多从「打造有用的 AI 队友」思考。当一场产品辩论两边都有道理时，跳出来问「一个人会怎么做这件事？

这个情境下你希望队友怎么做？」——答案往往清晰且全屋一致。比如语音体验：人类协作里，「Slack 来回沟通到一定时候，直接开个五分钟临时会议、共享屏幕、挂断后继续异步」是核心模式，而目前没有任何 AI 产品做对了这件事。

关于工作与个人会不会分成两个助手，Roman 的判断是：用户确实需要分离、企业也有常识性理由，但这两件事「实际上不是不同的问题集合」，产品形态几乎相同——他的直觉是一个产品就能同时承载，这也是他们想建的东西。

## 增长打法和 Cursor 的生存之道

Go-to-market 上他们复用编程领域的模式：早期采用者先在个人场景（晚上周末的副业项目）感受到「体验未来」的顿悟时刻，回到工作就无法忍受旧方式、反向要求公司采用。现在 X 上已经有 Grok Bot 控制扫地机器人、帮 Tesla 充电桩谈判省钱的例子，下一步就是推动它进入真实的企业系统——bot 在复杂组织里怎么工作、组织级记忆长什么样，还是未解之题。

至于 Cursor 为什么能在 OpenAI、Anthropic 夹击下持续赢，Roman 的答案是文化：从不自满、从不觉得已经赢了；「如果我们不能每六个月彻底重塑自己——最近感觉比那还短——我们就会输。」当年一起做 AI 编程的十几二十家竞争对手，如今没有一个还在前沿，不是决策错了或资源不够，而是「文化上无法快速行动、无法在当下变化时跟上当下」。两条反复被讲到的价值观：一是「删除产品」——为补模型能力不足而搭的脚手架式功能，会随时间被移除，要敢于做让小部分用户不满的艰难决定；二是「直接去做」——不是请求许可的文化，看到该做的事就去做、自己去拉资源。

对护城河的讨论，他的回答很反主流：如果 Cursor 当年从战略图表倒推护城河，不会有今天。真正的魔力是「痴迷于今天就造出有用的东西」——看到三个月后模型能解决的事，就想办法用工程把它拉到今天实现，三个月后再把这些全删掉，再为下一个三个月构建。护城河（分发、数据）是这个过程的副产品。

## 怎么上手：给上下文，然后问它

给新手的建议刻意避开 hacky 技巧（他们的理念是那些东西不该存在）：第一，像给新同事做入职一样，把 Slack、邮箱、公司记录等工具的访问权给它；然后**问 Grok Bot 它能为你做什么**。Roman 自己的第一个任务就是「过一遍我的 Slack 和邮箱，建议五件你能接走的事」，它建议的五件里有两件真有价值——不是「起草一封邮件」，而是「完成一大块工作」——他立刻派生了两个 bot 去做。这是他最大的震撼时刻。

进阶玩法：让 bot 之间协作。他给自己建了一个 QA 测试员 bot，里面装着 Grok Bot，测试桌面版新构建时让它跑十个关键工作流、写入一份记录所有历史测试结果的文档并对比。

还有把 Grok Bot 当「信息吞噬者」：挂在 Slack 和邮件上，被告知你的角色和关注点，重要的事直接通知、其余进每日汇总；他自己更进一步，接上了 X 上所有提及 Grok Bot 的内容、内部上下文、QA 测试器和消息服务，形成永远在线的幕僚长。已有用户给 bot 授权「紧急时呼叫我」——前提是你足够信任它没有误报。他认为 AI 的下一个转变就是 bot 比你更主动。

## 本集带走

- **两个决定成就 Grok Bot**：一切运行在云端（不用想本地/云、设备是否开机），且每个 bot 拥有自己的电脑（能像人一样点像素、填表单，而不只靠 API）。
- **手动引导两三百个早期用户**：核心团队亲自坐镇每一次 20 分钟引导，痛苦的问题第二天必须修；同时「不诱导证人」，让用户自己发明出幕僚长管理模式后再在产品里鼓励。
- **用减法做产品**：每项工作先问「上线推文是什么」；说「Grok Bot 可以」而不是「Grok Bot 有了」；自动化这类能力直接用自然语言定义，99% 的用户永远不需要见到配置界面。
- **招聘自动化别从筛简历开始**：把「候选人的完整宇宙」匹配到具体业务问题——比如每天自动盯会议官网、下载新论文 PDF、找出未追踪的作者、查内部人脉、请求引荐。
- **六个月彻底重塑一次自己**：Cursor 的生存之道是不自满、敢删除脚手架式旧功能；护城河是「把三个月后的未来拉到今天」的副产品，不是规划出来的。
- **新手第一招**：接好邮箱和 Slack 等工具后，直接问 Grok Bot「你能替我接走哪五件事」——它会给出整块工作的答案，而不只是一封邮件草稿。

<div class="pd-sec pd-sec-q">全部金句 <span>10 条</span></div>

> <span class="qz">让我对开发 Grok Bot 感到如此兴奋的是，这是我第一次在非编码任务上感觉自己可以真正把工作委托给 AI，不用再去想它，回来的时候事情已经完成了。</span>  
> *What made me so excited to work on Grok Bot is it was the first time for non-coding tasks that I felt like I could truly delegate work to AI, not have to think about it, and I would come back and it's done.*  
> <span class="qm">—— Roman Ugarte · [01:00]</span> ^q1

> <span class="qz">一旦你开始突破「这是带有一组连接的 AI 聊天」的框架，转向「这是一个有电脑的同事」，它就直接抬高了你会想到交给 AI 的事情的上限。</span>  
> *Once you start breaking out of, this is AI chat with a set of connections instead to, this is a colleague with a computer, it just raises the ceiling of what you would think to give to AI.*  
> <span class="qm">—— Roman Ugarte · [00:43]</span> ^q2

> <span class="qz">我认为我们现在正处于一个非常奇怪的时刻，将来回头看我们会说：我很惊讶很多人就是这样与 AI 一起工作的——你在给这些超级智能的新同事、这些 AI 机器人做入职培训，却让它们和你共用同一台电脑。</span>  
> *I think we're in a really weird moment right now that I think we're going to look back on and be like, I'm surprised that this is the way that a lot of people worked with AI, where you're onboarding these super intelligent new colleagues, these AI bots, and you're asking them to share the same computer that you have.*  
> <span class="qm">—— Roman Ugarte · [32:21]</span> ^q3

> <span class="qz">而如果你在现有范式中投入了大量沉没成本，从零开始创造一个新东西是非常痛苦的。</span>  
> *And if you have a lot of sunk cost in that existing paradigm, it's very painful to create a new thing from scratch.*  
> <span class="qm">—— Roman Ugarte · [35:05]</span> ^q4

> <span class="qz">在很多人们认为 AI 很笨、或者可能没有承诺的那么有影响力的地方，我认为很多情况都是它只是被错误的使用方式所拖累的结果。</span>  
> *In a lot of the places where people think AI is dumb or maybe not as impactful as it's been promised, a lot of that I think is downstream of it just being harnessed in the wrong way.*  
> <span class="qm">—— Roman Ugarte · [36:50]</span> ^q5

> <span class="qz">但从某种意义上说，这并不是火箭科学，不需要你是个天才。你只需要问这个问题：你会希望从一个人类队友那里得到什么，我们能否推动 AI 以类似的方式表现？</span>  
> *But in some ways it's not a rocket science, doesn't require you being a genius. You just need to ask the question of what would you want from a human teammate and can we push AI to behave in a similar way?*  
> <span class="qm">—— Roman Ugarte · [41:21]</span> ^q6

> <span class="qz">你仍然在做那件事，感觉也是那样，它同样压在你身上——而不是真正地给同事来一记不看人的传球，然后说：「你可以搞定，这是背景信息，放手去干吧。」</span>  
> *You're still doing the thing and it feels that way and it's weighing on you in the same way versus truly throwing a no look pass to a colleague and being like, "You got this, here's the context, go off and run."*  
> <span class="qm">—— Roman Ugarte · [62:59]</span> ^q7

> <span class="qz">如果我们作为公司不能每六个月彻底重塑自己——最近感觉甚至比那更短——对我们优先事项、核心产品、用户感受进行非常重大的彻底重塑，我们就会输。</span>  
> *And if we as a company can't completely reinvent ourselves every six months, which recently it's felt even shorter than that, of complete very significant reinventions of our priorities, the core product, what users feel, we're going to lose.*  
> <span class="qm">—— Roman Ugarte · [68:49]</span> ^q8

> <span class="qz">而且我认为值得注意的是，这些竞争对手没有一个现在站在 AI 编程的前沿，这在很大程度上不是因为它们做出了任何错误的决定或缺乏资源，而是因为在文化上无法快速行动、无法在当下变化时改变以跟上当下。</span>  
> *And I think it's notable that none of those competitors are at the forefront of AI coding right now in large part, not because of any incorrect decisions that they made or any lack of resources on their part, but this cultural inability to move quickly and to change to meet the moment as the moment's changing.*  
> <span class="qm">—— Roman Ugarte · [69:38]</span> ^q9

> <span class="qz">我认为真正造就 Cursor 之魔力的，是对今天就构建一个有用的东西的痴迷。</span>  
> *I think what really created the magic of Cursor was an obsession with building a useful thing today.*  
> <span class="qm">—— Roman Ugarte · [73:14]</span> ^q10

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-02-lennys-grok-bot-vs-openclaw-how-i-replaced|从 OpenClaw 全面迁往 GrokBot：一位创业者的一线实战报告]]<span class="pd-rz">同公司:Cursor、OpenClaw · 同概念:智能体 (agent)</span>
- [[2026-09-03-twentyvc-20vc-nvidia-crushes-quarter-and-buys-hug|NVIDIA 962亿美元季度背后：智能体时代的资本与生存法则]]<span class="pd-rz">同公司:Cursor、Anthropic、OpenAI、Salesforce · 同概念:智能体 (agent)</span>
- [[2026-09-07-twentyvc-20vc-the-100-billion-ai-assistant-race-t|邮箱里的 AI 助手：Plaid 前 CTO 谈如何在巨头围剿下赢]]<span class="pd-rz">同公司:Cursor、Anthropic、Codex、OpenAI · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|SaaS 不会死,PM 迎来黄金期:Dan Shipper 的 AI 工作预测]]<span class="pd-rz">同公司:OpenClaw、Codex、Cowork、Cursor · 同概念:智能体 (agent)</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Cursor、Anthropic、Codex、OpenAI · 同概念:智能体 (agent)</span>
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当写代码变便宜,OpenAI Codex负责人说「品味」成了最贵的资源]]<span class="pd-rz">同公司:Codex、OpenAI · 同概念:智能体 (agent)、计算机使用 (computer use)</span>

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
