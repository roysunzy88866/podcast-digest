---
title: 非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品
podcast: "Lenny's Podcast"
date: 2026-07-20
source_url: https://www.lennysnewsletter.com/p/the-non-technical-pms-guide-to-building-with-cursor
duration: "75:08"
type: episode
cover: "#6366f1"
image: "/covers/2026-01-18-lennys-the-non-technical-pms-guide-to-building.jpg"
description: 产品经理 Zevi 分享他零代码基础靠 AI 独立造产品的全套工作流：从建 CTO 聊天项目、自定义六大 /command 指令，到指挥不同模型互相评审代码。
host: "[[Lenny]]"
cohosts: ["[[Zevi Arnovitz]]"]
companies: ["[[Cursor]]", "[[Bolt]]", "[[Lovable]]", "[[Linear]]"]
concepts: ["[[Claude Code]]", "[[Composer]]", "[[Codex]]", "[[智能体]]", "[[斜杠命令]]", "[[同行评审]]"]
category: AI 编程
tags:
  - AI 编程
  - 职业与个人成长
socialImage: "https://talk.solomind.cc/covers/2026-01-18-lennys-the-non-technical-pms-guide-to-building.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-01-18-lennys-the-non-technical-pms-guide-to-building#post","headline":"非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-01-18-lennys-the-non-technical-pms-guide-to-building","mainEntityOfPage":"https://talk.solomind.cc/2026-01-18-lennys-the-non-technical-pms-guide-to-building","description":"产品经理 Zevi 分享他零代码基础靠 AI 独立造产品的全套工作流：从建 CTO 聊天项目、自定义六大 /command 指令，到指挥不同模型互相评审代码。","datePublished":"2026-07-20","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-01-18-lennys-the-non-technical-pms-guide-to-building.jpg","isBasedOn":"https://www.lennysnewsletter.com/p/the-non-technical-pms-guide-to-building-with-cursor","about":[{"@type":"Person","name":"Lenny"},{"@type":"Person","name":"Zevi Arnovitz"},{"@type":"Organization","name":"Cursor"},{"@type":"Organization","name":"Bolt"},{"@type":"Organization","name":"Lovable"},{"@type":"Organization","name":"Linear"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"Composer"},{"@type":"Thing","name":"Codex"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"斜杠命令 (/commands)"},{"@type":"Thing","name":"同行评审 (peer review)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品","item":"https://talk.solomind.cc/2026-01-18-lennys-the-non-technical-pms-guide-to-building"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品

<div class="pd-byl"><b>Zevi Arnovitz</b> · Meta 产品经理 · 2026-07-20</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-01-18-lennys-the-non-technical-pms-guide-to-building.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果普通的 ChatGPT 是一个 CTO，那它会是一个顺从你最愚蠢主意的 CTO。</div><div class="a">— Zevi Arnovitz <button class="pd-ts" data-t="11:31" data-who="Zevi Arnovitz" data-en="If regular ChatGPT was a CTO, that would be the CTO who goes along with your dumbest ideas." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Lenny]] · [[Zevi Arnovitz]]
>
> **公司** [[Cursor]] · [[Bolt]] · [[Lovable]] · [[Linear]]
>
> **概念** [[Claude Code]] · [[Composer]] · [[Codex]] · [[智能体]] · [[斜杠命令]] · [[同行评审]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/the-non-technical-pms-guide-to-building-with-cursor)

一个连代码都怕看的人，完全靠自己把一个能赚钱的产品造了出来——用的是一套普通人就能照抄的 AI 编程工作流。说这话的人是 Zevi，他在 Meta 当产品经理，完全没有技术背景，却靠着 [[Cursor|Cursor]] 和 [[Claude Code|Claude Code]] 独立做出了一个在赚钱的产品 <button class="pd-ts" data-t="01:11" data-who="Zevi Arnovitz" data-en="Yeah, that's true, but also when else in history could you get out of school and just build a startup on your own? Today, my guest is Zevi Arnovitz. Zevi is a PM at Meta." aria-label="回原文"></button>。

这一集 [[Lenny|Lenny]] 的对谈里，他讲了几件事：他怎么从一个完全不懂代码的普通人，一步步学会指挥 AI 写代码、建起一整套严密的开发流程；怎么把自己想象成跟不同的「人形模型」协作，让它们互相审查代码；以及当 AI 真的让写代码变得容易之后，产品经理和初级从业者到底该担心什么，又该怎么抓住机会。在访谈的后半段，他还分享了自己怎么用 AI 准备大厂面试，并在最后讲了讲他一路走来的职业心得。

想了解他的工作流，得先看他对 AI 工具的认知是怎么一步步进化的。Zevi 接触 AI 编程的起点是他在日本旅行时看到了别人用 AI 构建应用的视频，当时感觉就像有人走过来告诉他「你现在有超能力了」<button class="pd-ts" data-t="06:40" data-who="Zevi Arnovitz" data-en="I think it was either Greg Isenberg or Riley Brown and they were basically building apps using, it was either Bolt or Lovable, just using AI. And it was like a crazy moment for me because I was watching this and it basically felt like someone came up to me and said, &quot;Hey Zevi, there's this cool new technology you should check out." aria-label="回原文"></button>。

回到家后他立刻开了账号开始动手。但他很快发现，当时那些主打 vibe coding（跟着感觉走的 AI 编程方式）的工具太急于写代码——你刚提个想法，它立刻就开始敲代码了 <button class="pd-ts" data-t="09:16" data-who="Zevi Arnovitz" data-en="The first thing I noticed was that these products were built in a way where, and when I say these products, I mean Bolt and Lovable, were built in a way where they were super eager to write code." aria-label="回原文"></button>。在项目初期这很爽，可一旦要处理像接入支付、改数据库这种复杂逻辑，上来就写代码往往会酿成灾难级的 bug。

为了对付这种「过度积极」的毛病，他给自己造了一个虚拟的 CTO（首席技术官）。具体做法是在 ChatGPT 或 Claude 里专门建一个项目，给系统提示词定下规矩：你是对技术全权负责的人，你要挑战我，不许当讨好者 <button class="pd-ts" data-t="10:13" data-who="Zevi Arnovitz" data-en="So basically what I did was I created a CTO with the custom prompt of it being the complete technical owner of the project. So I told it, &quot;I own the problem. I own how we want the users to feel." aria-label="回原文"></button>。

他强调，普通的 ChatGPT 其实会是个最糟糕的 CTO，因为它太喜欢附和你。有一次他问一个框架是不是跟另一个相似，对方明明八竿子打不着，ChatGPT 也会顺着他说「完全一样」，被戳穿后甚至说「我以为你在瞎编，我就跟着你即兴发挥」<button class="pd-ts" data-t="11:22" data-who="Zevi Arnovitz" data-en="And it said the most terrifying and hilarious thing. He goes, &quot;Oh, I'm sorry. I thought you were just making this up and I was riffing with you.&quot;" aria-label="回原文"></button>。有了这个会反驳、会问问题的虚拟 CTO，他才算是有了技术上的主心骨。

有了这个爱挑刺的 CTO 当大后方，他接着梳理出了一套非常严密的实战开发流程。他强烈建议同样是外行者要慢慢来，把接触代码当成一种暴露疗法：先从简单的聊天项目起步，然后过渡到开箱即用的建站工具，最后再进阶到 Cursor 这种专业的开发环境 <button class="pd-ts" data-t="12:44" data-who="Zevi Arnovitz" data-en="And the second thing is if you're non-technical like me, code is terrifying. It's the scariest thing in the world to look at, and I look at it as kind of like exposure therapy." aria-label="回原文"></button>。

> 【背景】Cursor 是目前最火的 AI 代码编辑器之一；Claude Code 是 Anthropic 推出、能直接在终端环境里执行操作的 AI 编程[[智能体|智能体]]。现在，他主要在 Cursor 里跑 Claude Code，并给这套工具链配上了自己写的六大自定义指令，完整步骤是：创建问题、探索阶段、制定计划、执行计划、代码评审、[[同行评审|同行评审]]，最后是更新文档 <button class="pd-ts" data-t="16:10" data-who="Zevi Arnovitz" data-en="So basically when I'll do this is if I'm working on a big project and I suddenly come across a bug or have an idea that I don't want to work on right now, but I want to work on later, I'll do this really quick and Claude's main goal is to quickly capture what I'm thinking about." aria-label="回原文"></button>。

这几步听起来玄乎，但核心逻辑非常巧妙。以第一步「创建问题」为例，他在开发途中突然想到什么点子，只要一句话，Claude 就会问几个简短的问题，然后自动连上项目管理工具，把需求写成一张规范的工单 <button class="pd-ts" data-t="22:10" data-who="Zevi Arnovitz" data-en="It's a nice to have feature. So now basically what Claude is going to do is it's going to use MCP, which is basically a technology that was created by Anthropic, which gives AI the ability to use tools." aria-label="回原文"></button>。

等他过几天有空了，再用「探索阶段」指令把这张工单拉回来，这时 Claude（也就是他眼中的 CTO）会仔细读代码、理清现状，然后反过来向他确认范围和细节，就像一个工程经理在跟你对齐需求 <button class="pd-ts" data-t="24:31" data-who="Zevi Arnovitz" data-en="So it's both for the CTO to deeply understand the problem that we're trying to solve and also understand the current state of the code base, what files need to be affected, and how is the best way to implement this technically." aria-label="回原文"></button>。确认完才动用模板写出一份带状态追踪的计划文件 <button class="pd-ts" data-t="29:30" data-who="Zevi Arnovitz" data-en="So basically what I'm going to do now is I'm going to go and do /create plan and while Claude is doing this, I'm going to show really quick what this looks like." aria-label="回原文"></button>。

从制定计划到真正把功能做出来，Zevi 展示了一种外行管内行的高级玩法：别死盯着一个模型，把不同模型的长处拼起来用。他会把计划拆成前端和后端：用 [[Composer|Composer]]（一种编码模型）去跑通基本的逻辑，因为它快得离谱，几分钟就能干完原本要花几天的活 <button class="pd-ts" data-t="31:05" data-who="Zevi Arnovitz" data-en="So now I think we're going to do this with Cursor just because Composer is so freaking fast. So what we can do is basically just say execute and then we can tag the file." aria-label="回原文"></button>；涉及界面的部分则交给 Gemini 去做，因为设计感极好 <button class="pd-ts" data-t="30:35" data-who="Zevi Arnovitz" data-en="Gemini 3 that just came out is unbelievable at UI. So a lot of times, I'll split the plan into backend and front end, and then I'll have Gemini just read the plan and do the front end." aria-label="回原文"></button>。

整个过程他就像一个懂调度的包工头，手里攥着不同的模型各司其职。他还提到，现在只要一台普通的笔记本电脑，所有这些原本遥不可及的顶级模型和能力，就全在你手边了 <button class="pd-ts" data-t="34:59" data-who="Zevi Arnovitz" data-en="And there is just no boundaries. You can use all of these just on your regular MacBook or regular laptop. And I have these moments, I call them time machine moments, which is basically this week, for instance, I was prepping for the podcast using Claude with a project." aria-label="回原文"></button>。

工具变了，人怎么办？这正是下一个话题：当 AI 写代码变得如此容易时，懂业务但不懂代码的人该怎么保证质量？

Zevi 坦言，他很难靠自己肉眼抓到代码里的错。于是他想出了一个绝招——让不同的 AI 模型互相挑刺，也就是同行评审（peer review）<button class="pd-ts" data-t="39:55" data-who="Zevi Arnovitz" data-en="But what's even cooler and something that I'm really proud of is I will usually do multiple reviews and I'll have Codex, which is ChatGPT's competitor to Claude Code, as well as cursor open, and I will have each of them review the code." aria-label="回原文"></button>。

他会同时打开另外几个工具，让它们各自审一遍刚写的代码，然后把挑出的毛病统一丢回给负责干活的 Claude，并附带指令：「你是这个项目的主管，其他团队主管看了你的代码提出了这些问题。你别全信，解释清楚为啥他们说得不对，或者你自己改掉」<button class="pd-ts" data-t="40:21" data-who="Zevi Arnovitz" data-en="The /command is basically saying, &quot;You're the dead lead on this project. Other team leads within the company have looked at your code and reviewed it and found these issues.&quot;" aria-label="回原文"></button>。有时候，Claude 甚至会反驳说「这事都提三回了，这不是 bug，就是这么设计的」<button class="pd-ts" data-t="43:17" data-who="Zevi Arnovitz" data-en="So I'll do peer review a bunch of times and I'll have other models review other models code and kind of have them fight it out basically. Sometimes Claude Code will get really sassy and be like, &quot;This has been raised for the third time." aria-label="回原文"></button>。

Zevi 的这套观察建立在他一个非常有趣的认知上：他把不同的模型当成性格迥异的同事来看待 <button class="pd-ts" data-t="40:58" data-who="Zevi Arnovitz" data-en="Each model has such distinct characteristics. So let's say Claude, she would be the perfect CTO. She's very communicative." aria-label="回原文"></button>。在他眼里，Claude 就像个完美的 CTO——聪明、沟通好、有主见但愿意合作；[[Codex|Codex]]（某款 GPT 编码模型）则像个穿着连帽衫躲在黑屋子里的绝顶黑客，平时一声不吭，只有遇到最难搞的 bug 时去敲他的门，两小时后出来丢下一句「修好了」就完事 <button class="pd-ts" data-t="41:31" data-who="Zevi Arnovitz" data-en="So I use Codex 5.1 Max, whatever. I don't know, they're not the best at naming models, but GPT's model. I always imagine it as like the best coder within the company who comes to the office with a hoodie and sandals and sits in a dark room." aria-label="回原文"></button>；而 Gemini 像个疯狂的艺术家，设计出来的东西绝美，但你看它中途的操作步骤（比如第一反应是先把仪表盘整个删掉）会吓出冷汗 <button class="pd-ts" data-t="42:13" data-who="Zevi Arnovitz" data-en="And let's say Gemini is like a crazy scientist who's super artsy, super talented at designing, but if you sit next to it and watch it work, it's terrifying. You would fire that person instantly." aria-label="回原文"></button>。让这些性格各异的「同事」互相制衡，就是他解决外行看不懂代码的最佳方案。

流程跑完并不算结束，Zevi 还有一套持续进化的机制来更新工具的认知。每次发现 Claude 搞砸了某个任务，他不会单纯去修补，而是逼着它做复盘：问它「是你系统提示词或工具里的什么毛病，导致你犯了这种错？

」<button class="pd-ts" data-t="46:31" data-who="Zevi Arnovitz" data-en="But I've learned over time that updating documentation and tooling is one of the biggest hacks for productivity. So when Claude will fail to do something or I'll see this really bad bug that shows that Claude really didn't understand something, I'll ask it, &quot;What in your system prompt or tooling made you make this mistake?&quot;" aria-label="回原文"></button>。问清楚后，他会立刻把这些反思更新进文档里，确保同样的错误绝对不再犯。久而久之，他的这套系统提示词和辅助文档就变得越来越聪明，这也是他认为区分普通 AI 使用者和高手的分水岭 <button class="pd-ts" data-t="47:20" data-who="Zevi Arnovitz" data-en="And also using AI, this is probably one of the biggest unlocks. Going back to your prompts, understanding what was not good enough, iterating on them and then seeing how AI's responses get better, I think that's probably one of the most important things and one of the things that divides between people who are okay with using AI and the people who actually know how to use it." aria-label="回原文"></button>。

除了写代码和做副业，Zevi 还把这种 AI 优先的思维用在了找工作和自我提升上。在准备 Meta 的产品经理面试时，他立刻在 Claude 里建了个专属的教练项目 <button class="pd-ts" data-t="59:14" data-who="Zevi Arnovitz" data-en="So Meta reached out and said they'd like me to interview. Straight away, I opened up a project within Claude. I started looking online for all the best information out there, things that I resonated with." aria-label="回原文"></button>。

他会把网上的优质面试框架喂给 AI，让 AI 当评委跟他做模拟面试；他甚至用无代码工具给自己做了个游戏，专门训练自己答产品细分题的手感 <button class="pd-ts" data-t="59:43" data-who="Zevi Arnovitz" data-en="I would mock interview with, and this was amazing. Also, I created a game in Base44, which helped me ... I was really struggling with segmentation within the product questions, so thinking of the correct segments." aria-label="回原文"></button>。他还在网上扒出一个不断更新的真实面试题库，用 AI 浏览器跑数据分析，找出最高频的题目来优先准备 <button class="pd-ts" data-t="61:27" data-who="Zevi Arnovitz" data-en="So I'll mock with AI. Also, I did something really cool where there's a question bank online free by Louis Lynn, which basically is an always updating bank of questions that people are asked in real interviews." aria-label="回原文"></button>。不过他也强调，AI 模拟终究只能带你到一定水平，在 LinkedIn 上找真人做实战模拟面试才是真正的大杀器 <button class="pd-ts" data-t="60:17" data-who="Zevi Arnovitz" data-en="So basically, I think Ben talks about this a bunch, so I don't just go read Ben's stuff, but just creating a project and feeding it with all the best information on the internet and then mocking a bunch." aria-label="回原文"></button>。

聊到使用 AI 是否会让人变懒、手艺退步这个普遍焦虑时，Zevi 非常不以为然。他认为，把 AI 当成外包你思考的工具，或者甩锅的借口，那才会产出垃圾 <button class="pd-ts" data-t="55:41" data-who="Zevi Arnovitz" data-en="And I just think this is like that really smart person that has context or your mentor or whatever, but is just always available and doesn't judge you and can really help you." aria-label="回原文"></button>。

但只要你真的拿准主意、对自己的产出负责，AI 就是一个永远在线、绝不嘲笑你的超级导师。对初级从业者来说，这意味着你可以借助它在副业里演练更高层级的操盘，这种机会在以前是完全不存在的 <button class="pd-ts" data-t="56:13" data-who="Zevi Arnovitz" data-en="I think if you use these intentionally and really take the time to understand how to use AI in the correct way, it's one of the biggest game changers that will make you much better as a PM." aria-label="回原文"></button>。

## 本集带走

最后收个尾，这一集值得带走的是几句实在话。第一，不懂代码真的不再是造产品的绝对阻碍了，但前提是你要会做规划——别急着让模型上来就写，给它设定角色、拆好步骤、定好护栏。

第二，外行管内行的高级玩法不是苦学语法，而是当个会调度的包工头：让 Claude 做规划、让 Composer 闷头敲代码、让 Gemini 搞设计，再让它们互相开评审会挑刺。第三，模型会犯错不可怕，可怕的是你不让它长记性，每次搞砸了都逼它复盘并更新进文档里，它才真的能越用越顺。最后 Zevi 还提醒大家，别光感叹别人多厉害，打开电脑，开个项目，你自己也完全可以动手做事了。

<div class="pd-sec">全部金句 <span>7 条</span></div>

> <span class="qz">如果普通的 ChatGPT 是一个 CTO，那它会是一个顺从你最愚蠢主意的 CTO。</span>  
> *If regular ChatGPT was a CTO, that would be the CTO who goes along with your dumbest ideas.*  
> <span class="qm">—— Zevi Arnovitz · [11:31]</span> ^q1

> <span class="qz">我把它看作像一种暴露疗法。如果你看到我在 Claude 或 Cursor 中工作的样子，你可能很兴奋开始使用那些，但我真的推荐从一个 GPT 项目慢慢开始，漂亮的 UI，超级简单，然后也许升级到 Bolt 或 Lovable，然后去用 Cursor 的浅色模式，慢慢地，逐渐地，慢慢进入直到你打开一个终端，去全暗色模式，去全开发者模式。</span>  
> *I look at it as kind of like exposure therapy. I think if you see this where I'm working like in Claude or in Cursor, you might be excited to start using those, but I would really recommend starting slow with a GPT project, beautiful UI, super simple, then maybe graduate to like a Bolt or a Lovable, and then go to Cursor in light mode, slowly, slowly, gradually ease in until you open a terminal, go full dark mode, go full dev.*  
> <span class="qm">—— Zevi Arnovitz · [12:47]</span> ^q2

> <span class="qz">我认为这就是单纯的 vibe coding 和顺其自然与真正构建严肃应用之间的巨大区别。</span>  
> *I think this is the big difference between just vibe coding and going along with the vibes and really building serious apps.*  
> <span class="qm">—— Zevi Arnovitz · [28:18]</span> ^q3

> <span class="qz">所以当 Claude 未能做某事，或者我看到这个非常糟糕的错误，表明 Claude 真的没有理解某些东西时，我会问它，“是什么在你的系统提示或工具中导致你犯了这种错误？”</span>  
> *So when Claude will fail to do something or I'll see this really bad bug that shows that Claude really didn't understand something, I'll ask it, "What in your system prompt or tooling made you make this mistake?"*  
> <span class="qm">—— Zevi Arnovitz · [46:31]</span> ^q4

> <span class="qz">我认为头衔将会崩塌，责任将会崩塌，每个人都将只是在构建。</span>  
> *I think titles are going to collapse and responsibilities are going to collapse and everyone's just going to be building.*  
> <span class="qm">—— Zevi Arnovitz · [52:45]</span> ^q5

> <span class="qz">在那一刻我明白了，他们对我是 10 倍 PM 零期望，但对我的期望是做一个 10 倍学习者。</span>  
> *I understood in that moment that they had zero expectation of me being a 10X PM, but the expectation of me was being a 10X learner.*  
> <span class="qm">—— Zevi Arnovitz · [64:34]</span> ^q6

> <span class="qz">不是你会被 AI 取代。你会被一个更擅长使用 AI 的人取代。</span>  
> *It's not that you will be replaced by AI. You'll be replaced by someone who's better at using AI than you.*  
> <span class="qm">—— Lenny · [00:54]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-08-09-talks-multiplayer-agentic-engineering-arjun-si|让非工程师也能下指令：Superconductor 的多人智能体协作法]]<span class="pd-rz">同公司:Cursor · 同概念:Claude Code、Codex、智能体 (agent)</span>
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|SaaS 不会死,PM 迎来黄金期:Dan Shipper 的 AI 工作预测]]<span class="pd-rz">同公司:Cursor · 同概念:Claude Code、Codex、智能体 (agent)</span>
- [[2026-08-24-lennys-i-spent-20000-on-devin-in-a-month|Ryan Carson：从手把手到管理成群智能体]]<span class="pd-rz">同公司:Cursor · 同概念:Claude Code、Codex、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-24-howiai-i-spent-20-000-on-devin-in-a-month--here|Ryan Carson：从手把手到放养，云端智能体管理术]]<span class="pd-rz">同公司:Cursor · 同概念:Claude Code、Codex、智能体 (agent)</span>
- [[2026-singju-openclaw-80apps|OpenClaw 创始人 Peter Steinberger：让智能体直接接管你的整台电脑]]<span class="pd-rz">同概念:Claude Code、Codex、智能体 (agent)</span>
- [[2026-02-19-lennys-head-of-claude-code-what-happens|Claude Code 负责人：写代码已被解决，下一步是什么]]<span class="pd-rz">同公司:Anthropic、Cursor · 同概念:Claude Code、智能体 (agent)、Codex</span>

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
