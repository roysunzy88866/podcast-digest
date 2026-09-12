---
title: "一个有电脑的智能体:让 AI 同事团替你做产品"
podcast: 精选演讲
date: 2026-09-13
source_url: undefined
duration: "53:51"
type: episode
cover: "#64748b"
description: "SpaceX AI 产品团队的 Kevin 与 Roshan 演示 GrokBot:一支能端到端干活的 AI 同事团队,覆盖调研、PRD、设计到写码交付全流程。"
host: "[[Kevin DeFarco]]"
cohosts: ["[[Roshan]]", "[[Noah]]"]
companies: ["[[GrokBot]]", "[[SpaceX AI]]"]
concepts: ["[[智能体]]", "[[多智能体团队]]", "[[云端智能体]]", "[[例程]]", "[[记忆]]"]
category: 智能体
tags:
  - 智能体
  - 产品方法
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-03-talks-grok-bot-for-product-best-practices#post","headline":"一个有电脑的智能体:让 AI 同事团替你做产品","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-03-talks-grok-bot-for-product-best-practices","mainEntityOfPage":"https://talk.solomind.cc/2026-09-03-talks-grok-bot-for-product-best-practices","description":"SpaceX AI 产品团队的 Kevin 与 Roshan 演示 GrokBot:一支能端到端干活的 AI 同事团队,覆盖调研、PRD、设计到写码交付全流程。","datePublished":"2026-09-13","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Kevin DeFarco"},{"@type":"Person","name":"Roshan"},{"@type":"Person","name":"Noah"},{"@type":"Organization","name":"GrokBot"},{"@type":"Organization","name":"SpaceX AI"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"多智能体团队 (multiple agents)"},{"@type":"Thing","name":"云端智能体 (cloud agents)"},{"@type":"Thing","name":"例程 (routine)"},{"@type":"Thing","name":"记忆 (memory)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"一个有电脑的智能体:让 AI 同事团替你做产品","item":"https://talk.solomind.cc/2026-09-03-talks-grok-bot-for-product-best-practices"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>一个有电脑的智能体:让 AI 同事团替你做产品</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 一个有电脑的智能体:让 AI 同事团替你做产品

<div class="pd-byl"><b>Kevin DeFarco</b> · SpaceX AI 产品团队 · 2026-09-13</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-03-talks-grok-bot-for-product-best-practices.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们越来越感觉到,你想与智能体协作,而这些智能体在聊天框里并不太自在。</div><div class="a">— Roshan <button class="pd-ts" data-t="02:05" data-who="Roshan" data-en="it sort of increasingly felt that you wanted to work with agents, and those agents weren't quite at home in a chat box." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Kevin DeFarco]] · [[Roshan]] · [[Noah]]
>
> **公司** [[GrokBot]] · [[SpaceX AI]]
>
> **概念** [[智能体]] · [[多智能体团队]] · [[云端智能体]] · [[例程]] · [[记忆]]

这一集是一场产品演示:[[SpaceX AI|SpaceX AI]] 产品团队的 [[Kevin DeFarco|Kevin DeFarco]] 和 [[Roshan|Roshan]] 现场展示他们每天在用的 [[GrokBot|GrokBot]]——一个可以像同事一样私信往来、还拥有一台自己电脑的[[智能体|智能体]]产品。最颠覆的一点是:他们在直播里从一句「大家想要什么功能」出发,让一组各司其职的 AI 智能体自己完成市场调研、写 PRD、出设计稿,再拆任务写代码,把一个语音模式功能从想法推进到工程实现,全程人类只做协调和审查。

## 为什么要重新设计智能体的界面

团队做 GrokBot 的出发点是:智能体在聊天框里并不自在。聊天框适合问答,但产品经理的工作是跨技术栈、跨部门协调的「总经理式」工作,远超一问一答的形式 <button class="pd-ts" data-t="02:03" data-who="Roshan" data-en="And I think a few themes emerged. One of those first ones is that it sort of increasingly felt that you wanted to work with agents, and those agents weren't quite at home in a chat box." aria-label="回原文"></button>。他们还观察到两点:一是让智能体能验证自己的工作和输出,会带来显著更好的结果,自然延伸就是给它一个自己的环境;二是照看多个智能体线程非常累,内部很多工程师自建过「协调者智能体」,但从来没有被一流地产品化过 <button class="pd-ts" data-t="03:12" data-who="Roshan" data-en="The other thing that was a really sort of emerging theme is that agents really need their own environments to get work done. We actually saw a lot of this with cloud agents early on, where giving agents the ability to verify their work and verify their output results in dramatically better outcomes." aria-label="回原文"></button>。

于是整个产品的设计简报浓缩成一句话:能不能像同事一样与智能体协作,而不是像使用软件一样?同事的特质被拆成四条:把工具串起来产出结果、有长期[[记忆|记忆]]和例行程序、能独立干活(有自己的电脑和软件)、消息往来要轻松有趣——像在 Slack 上快速刷屏加表情包那样 <button class="pd-ts" data-t="04:09" data-who="Roshan" data-en="That goes on in a normal workday. And I think we increasingly just started to think of ourselves as, well, what if we could work with our agents more like colleagues versus working with them more like software?" aria-label="回原文"></button>。

GrokBot 由此被简化为两件事:一个拥有电脑的智能体,和一支可以交给真正工作的 AI 队友。这些队友端到端完成任务,卡住时会回来找你 <button class="pd-ts" data-t="05:59" data-who="Roshan" data-en="And I want to simplify this after all of those words into two things. So if there's sort of two things that you're using when you're talking about GrokBot or when you're talking about it with your friends and colleagues, the first is that it's an agent with a computer." aria-label="回原文"></button>。

## 一支各司其职的 AI 团队

演示中他们展示了自己的日常团队:Cora 是幕僚长,负责分清轻重缓急、屏蔽干扰、自动回复;Emily 是工程经理,受过训练「不写代码」——像好的工程经理一样,她管理一支从 SpaceX AI 历史代码和顶尖工程师技能中学出来的工程师团队 <button class="pd-ts" data-t="10:11" data-who="Kevin" data-en="Emily is an engineering manager. Emily has been coached and taught not to actually write code like a good engineering manager, but instead to manage a team of engineers." aria-label="回原文"></button>;Ashley 是数据分析师,直连数据湖和数据仓库,随时私信问她任何数据问题;PM Pete 负责写 RFC 和产品需求文档、跨智能体协调;设计师 Pixel 接入了 Figma 和一套设计系统,灵感来自 Lenny newsletter 里一位设计师公开的设计体系;还有负责招聘的 Ray。

为什么是多个智能体而不是一个?四个理由:对应真实组织里的专家分工;可引用性——数据问题找 Ashley、设计问题找 Pixel,不用想;每个智能体有自己的「范围记忆」,你在工作中分别调教它们;还能并行运行。Roshan 的体会很直白:他试过只用一个智能体,「我的大脑根本受不了」<button class="pd-ts" data-t="14:25" data-who="Roshan" data-en="And so I know we talked a lot about that colleague analogy, but I think that one, it really helps for me. I've tried having just one agent and like my brain can't handle it." aria-label="回原文"></button>。

## 实战:从一句话到能跑的功能

整场演示走了一遍完整流程:

**注意力清单**。Kevin 把 GrokBot 想象成坐在肩膀上的助手:遍历收件箱、Slack 讨论串和 Notion 更新,整理出「我的注意力实际在哪里」,再与优先级清单做对比,看清时间投向和优先级的偏离 <button class="pd-ts" data-t="07:41" data-who="Kevin" data-en="And we can talk about those in the chat and Q&amp;A at the end. One of the things that I've found, Grokbot, to be very helpful with is keeping me focused. So I have this concept of the attention list, which is not necessarily what are my strict priorities going into the week or the day, but more like where is my attention?" aria-label="回原文"></button>。还可以把它变成主动的——「每小时整理一次我的收件箱,清掉不需要关注的东西」,底层会自动创建一个 routine(定时重复、原生具备智能体能力的自动化任务)。

**调研与数据**。Pete 扫遍 Reddit、X、内部 Slack 和用户访谈数据库,汇总功能请求;同时 Ashley 并行回答市场规模问题——语音产品约 480 亿美元的 TAM、自家产品的语音周活跃占比。

一个实用技巧:总是要求智能体附上引用来源,方便核查底层数据 <button class="pd-ts" data-t="25:01" data-who="Kevin" data-en="Very cool. And one very useful pro tip is to always ask the agent to bring in citations. And so that way you can inspect." aria-label="回原文"></button>。Kevin 特别强调,这一切的前提是数据工程团队用 GrokBot 整理出的干净数据集和规范数据表——智能体的可信度建立在好的数据地基上。

**PRD 与设计**。Pete 带着写 PRD 的技能和模板起草文档,并在群聊里直接拉 Pixel 进来做设计。这里有个关键观察:智能体非常擅长提示其他智能体——你不用复制粘贴上下文,它们在幕后自行共享;而每个智能体仍保留自己的记忆,比如你教过 Pixel「总是用深色模式」,即使发消息的是 Pete,Pixel 也照样遵守,偏好设定一次、处处生效 <button class="pd-ts" data-t="29:40" data-who="Roshan" data-en="Amazing. Yeah, I think anybody who spent a lot of time thinking about how best to prompt agents, one of the things you learn is agents are actually very good at prompting other agents and working with other agents." aria-label="回原文"></button>。

**工程实现**。人类把 Pete 和 Emily 拉进一个群聊说「同步一下,开始构建」,Emily 随后自主把 PRD 拆解成技术任务、给工程师团队派工单,还自己拉人协调、形成「任务+审查者」的范式——没人教她这么做,这是长期调教自然长出来的。

GrokBot 能派生[[云端智能体|云端智能体]]去做编码任务,本质上是让一个管理者智能体去编排几十上百个编码线程。中途 Emily 还反过来给人类派了个任务:一个需要人工登录授权的审批——智能体会尽量代表你主动推进,但遇到权限问题会回来找你 <button class="pd-ts" data-t="35:44" data-who="Kevin" data-en="Very cool. And we will let them work together down here. And what Emily is going to do as a next step is actually distribute this work." aria-label="回原文"></button>。

## 记忆、例程与「收回控制权」

上下文管理是这个产品区别于其他智能体平台的地方:每个智能体有一台持久电脑,能执行代码、存文件,愿景是你永远不必操心上下文。Kevin 和幕僚长的对话已经连续运行了好几个月,智能体记得最近的、忘掉掉出路线图的旧事,而且随时间越用越聪明 <button class="pd-ts" data-t="48:14" data-who="Kevin" data-en="They, you know, have their own computer, they have a persistent computer, they can kind of execute code in that environment, execute tasks in that environment, save files to disk." aria-label="回原文"></button>。[[例程|例程]]则让分析变成被动日常:新功能上线后让 Ashley 每小时发安装数据简报,指标下滑时直接在聊天里追问归因,不用再盯着仪表盘刷新。

关于人的角色,Roshan 的总结是:把苦活和低复杂度工作卸给智能体,自己守住「最后一公里」——审查研究、打磨文档、代码审查。真正的变化是能启动和管理比以前多得多的工作,因为他能委派得比以前多得多;他不想去操心底层的 GitOps,只想做那个思考「下一步构建什么」的产品人 <button class="pd-ts" data-t="42:41" data-who="Roshan" data-en="And so I feel like it is a really important step in the process here. But I think what's really changed with something like this is that I can kick off a lot more work than I used to." aria-label="回原文"></button>。内部数据也印证了方向:如今相当大比例的合并 PR,是由 GrokBot 里的同事通过云端智能体发起的 <button class="pd-ts" data-t="51:28" data-who="Kevin" data-en="And so really the connection to cloud agents and having a really great coding harness alongside a autonomous colleague has been really magical. And we've seen a significant number of our merge pull requests these days are now coming from colleagues in GrokBot actually initiating the work with cloud agents." aria-label="回原文"></button>。

在问答环节,团队谈了路线图:一是拓宽入口——当天早上刚发布 Android 应用,任何设备、任何地点都能启动这套引擎,灵感来了从零到原型非常快;二是给智能体更多工具和连接器,让团队能承担更复杂的工作。已有的 skills 和智能体上下文系统都能迁移过来,还有一个独特玩法:在智能体的电脑上录一段工作流,它就能从你的操作中学习 <button class="pd-ts" data-t="45:43" data-who="Kevin" data-en="Yeah, I can start out with that one. Really, I think we want GrokBot to be the platform for you to do your most useful work. And so the brief really is those two things that we showed at the beginning, which is focusing on giving you a really useful agentic colleague." aria-label="回原文"></button>。

## 本集带走

- **给智能体一台电脑,而不是一个聊天框**:能验证自己输出、有独立环境和持久记忆的智能体,产出质量显著更高。
- **按职能拆分多个智能体**:专家分工、可引用性、各自的范围记忆、可并行,比一个全能智能体更好用——一个人的大脑管不过来所有上下文。
- **把重复动作固化成例程**:收件箱分诊、新功能小时级数据简报,让分析从「盯仪表盘」变成被动推送,指标异常随时在聊天里追问。
- **设定一次偏好,处处生效**:调教每个智能体的行为规范(如设计偏好、图表格式),它们在跨智能体协作中也会遵守。
- **人类守住审查这一公里**:委派调研、写档、编码,自己专注审查研究、打磨 PRD 和代码审查——能启动的工作量才是真正被放大的东西。
- **数据地基决定智能体上限**:干净的数据集、规范数据表、防常见查询错误的技能,是可信洞察的前提。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">我们越来越感觉到,你想与智能体协作,而这些智能体在聊天框里并不太自在。</span>  
> *it sort of increasingly felt that you wanted to work with agents, and those agents weren't quite at home in a chat box.*  
> <span class="qm">—— Roshan · [02:05]</span> ^q1

> <span class="qz">如果我们可以更像同事一样与智能体协作,而不是更像软件一样使用它们,会怎么样？</span>  
> *what if we could work with our agents more like colleagues versus working with them more like software?*  
> <span class="qm">—— Roshan · [04:12]</span> ^q2

> <span class="qz">如果说你和别人谈论 GrokBot 时只讲两件事,第一件就是:它是一个拥有电脑的智能体。</span>  
> *So if there's sort of two things that you're using when you're talking about GrokBot or when you're talking about it with your friends and colleagues, the first is that it's an agent with a computer.*  
> <span class="qm">—— Roshan · [05:59]</span> ^q3

> <span class="qz">他们端到端地完成任务,卡住时会回来找你,而且他们运作起来就像同事一样。</span>  
> *They finish jobs end to end, they come back when they're stuck, and they function just like colleagues.*  
> <span class="qm">—— Roshan · [06:28]</span> ^q4

> <span class="qz">所以从上下文的角度来说,这里的愿景是:你应该永远不必操心上下文。</span>  
> *And so I would say from a context perspective, the vision here is that you should never have to worry about context.*  
> <span class="qm">—— Roshan · [48:14]</span> ^q5

> <span class="qz">我认为这里的目标是,这些是非常长时间运行的智能体——比如我和我的幕僚长的对话已经运行了好几个月。</span>  
> *And I think the goal here is that these are very sort of incredibly long running agents like my conversation with my chief of staff has been running for months.*  
> <span class="qm">—— Roshan · [48:29]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:智能体 (agent)、记忆 (memory)、MCP</span>
- [[2026-08-18-lennys-i-tested-grok-bot-grok-46-and-cursor|GrokBot、Origin 与 Grok 4.6 实测]]<span class="pd-rz">同公司:GrokBot · 同概念:智能体 (agent)、MCP</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同概念:智能体 (agent)、记忆 (memory)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:智能体 (agent)、记忆 (memory)</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同概念:智能体 (agent)、MCP</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:智能体 (agent)</span>

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
