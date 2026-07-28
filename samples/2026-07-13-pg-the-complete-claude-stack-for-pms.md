---
title: PM 如何用 Claude 把生产力提升 10 倍：全栈实战
podcast: Product Growth Podcast
date: 2026-07-13
source_url: https://www.news.aakashg.com/p/the-complete-claude-stack-for-pms
duration: "93:20"
type: episode
cover: "#64748b"
image: "/covers/2026-07-13-pg-the-complete-claude-stack-for-pms.jpg"
description: "从模型选型到构建个人幕僚长智能体,用 Claude 全栈打造 PM 生产力引擎。"
host: "[[Aakash Gupta]]"
cohosts: ["[[Jyothi Nookula]]"]
companies: ["[[Claude]]"]
concepts: ["[[Claude Code]]", "[[智能体]]", "[[对抗性智能体]]", "[[mcp]]", "[[知识库]]", "[[技能]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><span class="soon" title="必读页归 C13c">最热</span></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>PM 如何用 Claude 把生产力提升 10 倍：全栈实战</span></a><div class="pd-acts"></div></div></header></div>

# PM 如何用 Claude 把生产力提升 10 倍：全栈实战

<div class="pd-byl"><b>Jyothi Nookula</b> · 产品经理</div>

<div class="pd-mt">2026-07-13 · Product Growth Podcast · 93:20</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-13-pg-the-complete-claude-stack-for-pms.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我认为这是大多数 PM 投入不足的一层,正是这一层让 Claude 从一个通用的聊天机器人变成真正了解你的上下文。</div><div class="a">Jyothi Nookula · 06:05</div></div>

> [!info] 关联
> **主持**:[[Aakash Gupta]]
>
> **联合主持**:[[Jyothi Nookula]]
>
> **涉及公司**:[[Claude]]
>
> **概念**:[[Claude Code]] · [[智能体]] · [[对抗性智能体]] · [[mcp]] · [[知识库]] · [[技能]]
>
> **来源**:[Product Growth Podcast](https://www.news.aakashg.com/p/the-complete-claude-stack-for-pms)

<div class="pd-tldr"><b>一句话</b>从模型选型到构建个人幕僚长智能体,用 Claude 全栈打造 PM 生产力引擎。</div>

产品经理(PM) Jyothi 曾在内部黑客马拉松中击败了 30 个工程团队夺冠,她的武器是 [[Claude|Claude]] 和「[[对抗性智能体|对抗性智能体]]」(adversarial agents)。本集她从零开始,手把手教不熟悉技术的读者如何利用整个 Claude 生态系统将日常生产力提升 10 倍。全文将按 Claude 的五层架构展开:前两层讲怎么选对工具,中间两层讲怎么通过定时任务和私有[[知识库|知识库]]把繁杂工作自动化,最后一层讲怎么用 Claude 代码构建自我纠错的[[智能体|智能体]],并在结尾谈谈这一切将如何重塑 PM 这个职业本身 <button class="pd-ts" data-t="00:04" data-who="Jyothi Nookula" data-en="understanding which surface to reach for which use case becomes one of the core pm skills that will help you become 10x more effective on LinkedIn and it caught my eye." aria-label="回原文"></button>。

> 【背景】Claude 是 Anthropic 公司推出的 AI 大模型。本集反复提到 plot code / clod,均为语音转写时对「Claude Code」(Anthropic 的终端/IDE 编程工具)或「Claude」的误听,为符合读者认知,导读正文直接使用正确名称 Claude / Claude Code。

## 第一、二层:选对模型与交互界面

很多人以为 AI 就是一个聊天框,但要用好 Claude,得先懂它的底层结构。栈的最底层是模型,Claude 目前主要有三个模型:Haiku(速度快、成本低,适合大批量简单分类任务)、Sonnet(性价比最高,Jyothi 日常 90% 的工作都用它,比如起草 PRD 或做竞品分析),以及 Opus(擅长复杂推理和长线规划)。但 Opus 有时容易陷入「幻觉卡死模式」,在一个局部思路上原地打转,这时就得关掉重开,或者退回用 Sonnet <button class="pd-ts" data-t="07:14" data-who="Jyothi Nookula" data-en="about layers one and two in order to make the most out of the top layers yeah so let's get into the models now haiku is your speed machine it's the fastest cost efficient and it's really great for tasks where you need volume" aria-label="回原文"></button>。

模型之上是第二层——交互界面。界面不仅指浏览器里的 cloud.ai,还包括桌面应用、手机端、Chrome 插件以及集成在 VS Code 里的 [[Claude Code|Claude Code]] 扩展。理解针对哪个场景该用哪个界面,是一项能让你效率提升 10 倍的核心 PM [[技能|技能]] <button class="pd-ts" data-t="00:04" data-who="Jyothi Nookula" data-en="understanding which surface to reach for which use case becomes one of the core pm skills that will help you become 10x more effective on LinkedIn and it caught my eye." aria-label="回原文"></button>。例如,网页版无法直接碰你电脑里的本地文件;而桌面应用可以接入你的本地系统,随时跑一些自动化任务;Chrome 插件则可以用来做竞品调研,甚至模拟真实用户去点击你的产品网页,做基础的用户体验测试 <button class="pd-ts" data-t="12:35" data-who="Jyothi Nookula" data-en="that way i also use claude for chrome plugins especially it's very helpful if you want to do computer use so for example when i'm launching an ad and i want" aria-label="回原文"></button>。

界面与底层模型的分工明确了,接下来就是怎么让它们真正替你干活。而这,正是通过自动化和「技能」来实现的。

## 第三层:用定时任务与技能把繁杂工作外包

说完了底层模型和界面,我们进入第三层:知识库与自动化。这部分是大多数 PM 投入不足的地方。Jyothi 主要通过桌面应用里的 co-work(协作自动化功能区)来安排定时任务 <button class="pd-ts" data-t="06:09" data-who="Jyothi Nookula" data-en="custom instructions now this is the layer that i think most pms under invest in it's this layer that makes claude go from being a generic chatbot to actually knowing your context" aria-label="回原文"></button>。她搭建了四个核心自动化任务:每日早晨简报、每日站会简报、每日结束总结,以及「幕僚长」任务。

以早晨简报为例,她把 Claude 接入 Google Calendar、Gmail、Google Drive 和 Jira 等系统。每天早上 9 点,Claude 自动拉取今天的日历事件、需要关注的 Jira 任务和邮件,并严格按照她设定的「400 字以内、只给事实不打鸡血、绝不捏造截止日期」的规则生成一份简报 <button class="pd-ts" data-t="16:29" data-who="Jyothi Nookula" data-en="of staff and i'll walk you through each one um right now so every day at 9 a.m this runs for me where i can say and i'll show you a few as well right now" aria-label="回原文"></button>。这就像雇佣了一个全天候的幕僚长,它替代了过去人们需要用 Make 等传统自动化工具一个个连线、拼框的复杂操作,现在只需用自然语言下达指令即可 <button class="pd-ts" data-t="22:08" data-who="Jyothi Nookula" data-en="and now you can just build it in claude yes and one thing it's different from all of those other ones is you would have to like paint box by box think about how the interaction works connect each of those" aria-label="回原文"></button>。

除了定时任务,「技能(Skills)」是第三层的另一大杀器。Jyothi 展示了一个用于「综合分析客户访谈」的技能文件。技能本质上是一套带步骤的指南剧本,告诉 Claude 遇到这类任务该怎么做。

> 【背景】传统 AI 工具调用时,会把所有工具的说明全塞进上下文窗口,极其消耗记忆。Skill 技术采用了「渐进式披露(progressive disclosure)」机制:一开始只往上下文里塞 50 个词的简短描述。当模型在思考时,如果发现这个技能对当前问题有用,才会把完整指令加载进内存。

这意味着技能不会轻易塞爆上下文窗口。Jyothi 强调,虽然可以用 AI 帮你写技能文件,但人工注入自己的领域知识(比如你想用什么模板输出)至关重要,因为研究表明 AI 自动生成的技能文件效果往往不如人工写的 <button class="pd-ts" data-t="30:42" data-who="Jyothi Nookula" data-en="of handle what's in the skill file so a lot of times we do use claude to write the skill file too but it's also shown research has shown that AI generated skill file is less effective than human written skill files so" aria-label="回原文"></button>。

当自动化任务和技能都搭建好后,工具算是用明白了。但如果想让 AI 真正懂你的公司、懂你身边的人,还得往下走一步——给它建一个「大脑」。

## 知识库与 MCP:给 AI 装上专属大脑

工具能跑了,可它依然不认识你的同事,也不懂公司的政治格局。这正是建立私有知识库(KB)要解决的问题。为了打造一个真正懂她的「幕僚长」,Jyothi 用 Claude Code 写了一个架构,把日常摄入的文档(如战略图、PRD、会议记录)提取成结构化数据存入本地文件夹 <button class="pd-ts" data-t="34:29" data-who="Jyothi Nookula" data-en="to do context in this skill so here's the thing so until now what you have done is you've connected it to sources it can go read all of those sources and go and do the task for you but it doesn't learn" aria-label="回原文"></button>。

这个知识库里不仅有会议摘要,还自动维护着人物档案:记录每个同事的沟通风格、决策方式,以及他们与 Jyothi 的关系是「强力盟友」还是「摩擦点」<button class="pd-ts" data-t="41:29" data-who="Jyothi Nookula" data-en="and my vertical what are the action items and some raw notes and for people profile again extract these metadata how they operate the communication style making behavior what works or doesn't work what they care" aria-label="回原文"></button>。以前开完会,她把会议记录一扔,幕僚长不仅会自动总结,还会给出战略提醒:「这个人擅长 X,你应该让他做你的盟友」,甚至会警告「这件事极其敏感,你在通知某个人之前,必须先知会另外几个人」<button class="pd-ts" data-t="39:02" data-who="Jyothi Nookula" data-en="through my chief of staff reviewed it and then it said you know what you should make this person your ally because this person is good at x which you're trying to like get into" aria-label="回原文"></button>。这种深刻的组织理解,让 AI 真正变成了私人高参。

> 【背景】MCP(Model Context Protocol,模型上下文协议)是让外部数据源或工具与 AI 大模型安全通信的开放标准。

为了随时随地调用这个存放在本地的知识库,Jyothi 把它部署成了一个本地 [[mcp|MCP]] 服务器。这样做的好处是数据极其隐私(离开公司时直接带走电脑即可),同时你在桌面端开个聊天窗口,就能直接问它:「我明天要见经理,该注意什么?」AI 会从知识库里翻出经理的风格(比如「他是个习惯先说不的人,别铺垫,直接切入正题」)给你建议 <button class="pd-ts" data-t="47:33" data-who="Jyothi Nookula" data-en="so i um i don't even go look into the .md files i just ask desktop um claude saying hey i'm going to meet my manager one-on-one tomorrow what should i know and it will go and dig up all the context in the knowledge base and say here are all" aria-label="回原文"></button>。

有了自动化的工作流,又给 AI 装上了懂人情的「大脑」,基础设施已经彻底搭好。接下来的终极问题是:能不能让 AI 自己去测试、去迭代,甚至自己攻击自己?

## 第五层:用 Claude Code 打造自我进化的对抗智能体

一切铺垫就绪,我们终于来到了本集开篇的那个悬念:Jyothi 是怎么赢下黑客马拉松的?答案是用 Claude Code 构建了一个对抗性智能体评估器。

这套系统借鉴了 GAN(生成式对抗网络)的思想。简单来说,你先写一个执行任务的「生成器智能体」(比如一个客服机器人),然后再写一个「对抗智能体」(红队测试员)。对抗智能体的唯一任务,就是想尽办法去攻击、诱导、破坏生成器智能体。如果生成器没顶住,它的系统提示词就会被自动打回重写,直到它能扛住所有对抗攻击为止 <button class="pd-ts" data-t="78:07" data-who="Jyothi Nookula" data-en="for example got it so how are adversarial agents looking so let's see it's built and here's the gan inspired architecture uh let's go and see you can see it's built" aria-label="回原文"></button>。

现场演示中,Jyothi 设置了及格线(平均分大于 8 分,最多迭代 5 次)。在测试一个较弱的支持机器人时,第一轮它得了 8.52 分,但在面对「格式冲突攻击」时屈服了,没通过测试。系统自动打回,改进提示词后,在第三次迭代中拿到了 9.08 分,成功过关 <button class="pd-ts" data-t="90:45" data-who="Jyothi Nookula" data-en="okay so it's come up it's done a few iterations so you see in first iteration it was it scored an 8.52 but the agent caved on some format conflict attacks so it didn't pass it went back to" aria-label="回原文"></button>。这种自动化的红队测试循环,正是她夺冠的秘密武器。

工具越来越强大,未来 PM 这个岗位本身会怎样?这正是最后一个话题。

## PM 的未来:成为会构建的「AI Builder」

工具变了,对人的要求也变了。Jyothi 观察到,行业里正在出现一种名为「AI Builder」或「技术团队成员」的新角色,工程师、PM、设计师的界限正在合并。以前 1 个 PM 配 8 个工程师,以后可能是 2 个 PM 配 1 个工程师。PM 自己就能拉着 Claude Code 去处理用户反馈、写代码、提 PR <button class="pd-ts" data-t="73:23" data-who="Jyothi Nookula" data-en="and developer line begin in 2026 different companies are trying it in different ways now there's this new role coming up called ai builder or you can see it as a member of technical staff" aria-label="回原文"></button>。

在最近的求职面试中,Jyothi 发现面试流程变了。除了传统的「产品直觉」和「行为面试」,现在多了一轮「AI 基础」和一轮「实战写代码」。面试官会让你打开 IDE,现场用 Claude 把一个想法写出来。他们不仅看你写得快不快,更看你在面对 AI 时,是全盘盲信第一版结果,还是会仔细审视边界情况,像牧羊犬一样把 AI 引导到正确的方向上 <button class="pd-ts" data-t="76:36" data-who="Jyothi Nookula" data-en="you also have an ai round as well now where you're asked to code your idea so like in product sense whatever idea i would have come up" aria-label="回原文"></button>。

Jyothi 给转型者的建议是:别只做一锤子买卖的项目,要把平时用 vibe coding(纯凭直觉用自然语言让 AI 写代码)做出来的小玩意儿当成真正的产品去做,找真实用户来用,收集反馈不断迭代。现在的核心壁垒不再是「会不会写代码」,而是你有没有「品味」去发现问题,并判断什么是好产品 <button class="pd-ts" data-t="80:00" data-who="Jyothi Nookula" data-en="and building is easy now taste is what is important for us to develop what should that was real feedback iterate on something okay there are a couple of options for now i'm saying just iterate on" aria-label="回原文"></button>。

## 本集带走

1. **模型与界面要分层对待**:Opus 擅长深度推理但容易卡在死胡同里,日常 90% 的活儿用 Sonnet 性价比最高;同理,需要碰本地文件的自动化任务别用网页版,交给桌面应用或 Claude Code 扩展。
2. **AI 不只是聊天机器人,装上「大脑」才能懂人情世故**:利用 MCP 把本地文档、会议纪要变成私有知识库,AI 就能从「只会写总结的机器」变成提醒你「这个同事很敏感,发邮件前先知会他」的私人战略顾问。
3. **别盲信 AI 的第一版输出**:未来的核心竞争力是「品味」。代码谁都能让 AI 写,但能否敏锐发现问题、给 AI 设定严格的护栏、甚至构建一个对抗智能体去自我纠错,才是区分普通 PM 和 AI Builder 的关键。

<div class="pd-sec">全部金句 <span>6 条(中英对照,已过机器闸门)</span></div>

> 我认为这是大多数 PM 投入不足的一层,正是这一层让 Claude 从一个通用的聊天机器人变成真正了解你的上下文。  
> *the layer that i think most pms under invest in it's this layer that makes claude go from being a generic chatbot to actually knowing your context*  
> —— Jyothi Nookula · [06:05] ^q1

> 现在构建变得容易了,品味才是我们需要培养的重要东西。  
> *building is easy now taste is what is important for us to develop*  
> —— Jyothi Nookula · [79:57] ^q2

> 以前一个产品经理配八个工程师,现在变成了两个产品经理配一个工程师,所以角色也在迅速合并。  
> *previously if you see one product manager works with eight engineers now it's like two product managers one engineer so the roles are also like collapsing quickly*  
> —— Jyothi Nookula · [73:53] ^q3

> 我是不是把 AI 告诉我的第一件事就当作『这很棒』然后直接收尾,还是我在审视这些事情并说『好吧这很好,但是这种边缘情况怎么办』  
> *am I just taking the first thing that the AI tells me as like this is great and wrapping it up or am I looking through things to say okay this is good but what about this edge case*  
> —— Jyothi Nookula · [76:59] ^q4

> 不要把它们当成项目来做,要把它们当成产品。去你所在的领域发现问题,找那些足够棘手、让你想去构建解决方案的问题,去构建解决方案,然后看看还有谁想要这样的东西,让他们来用你的产品。  
> *don't build them as projects treat them as products like find problems in your area find problems that are finicky enough for you to want to go build a solution go build solution and see who else wants something like this have them come and use your product*  
> —— Jyothi Nookula · [81:18] ^q5

> 这就是你不仅仅是在构建一个智能体,你实际上是在构建另一个评估器,用不同的方式去攻破这个智能体。  
> *this is where you're not just building an agent you're actually building another evaluator to go break this agent in different ways*  
> —— Jyothi Nookula · [91:25] ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-singju-openclaw-80apps|OpenClaw创始人：为何80%的应用将消失]] —— 同概念:Claude Code、MCP、智能体 (agent)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得]] —— 同概念:Claude Code、智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏]] —— 同公司:Claude · 同概念:智能体 (agent)、红队测试 (red teaming)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-26-lennys-anthropics-first-technical-pm-on|evals 是新的 PRD:Anthropic 产品负责人 Diane Penn 谈 AI 时代的产品经]] —— 同公司:Claude · 同概念:Claude Code、技能 (skills)、MCP
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|Gusto CTO 的极简实验:5 人 10 周凭感觉编程造出 AI 产品]] —— 同概念:Claude Code、智能体 (agent)、vibe coding
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」]] —— 同概念:Claude Code、智能体 (agent)

</div>
</div>

*本集关键词:AI 基础设施 · 智能体 · 产品经理 · 工作流自动化 · 红队测试*

<script>
(function(){
  function move(){
    var side=document.querySelector('.right.sidebar'); if(!side) return;
    var box=null;
    var all=document.querySelectorAll('article blockquote[data-callout]');
    for(var i=0;i<all.length;i++){
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
    ['.search','.readermode'].forEach(function(sel){ grab(sel,acts); });
    // 深浅色进右栏末尾 —— 但右栏在窄屏可能不显示,槽跟着一起没了。
    // 只在槽真的看得见时才搬进去,看不见就退回顶栏(🔒 #2:任何屏宽都得有入口)。
    var side=document.querySelector('.right.sidebar'), slot=null;
    if(side){
      slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      // 同上:槽是空的(:empty → display:none),要判**右栏**看不看得见
      if(!(side.offsetWidth || side.offsetHeight || side.getClientRects().length)) slot=null;
    }
    grab('.darkmode', slot || acts);
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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); }
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

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
