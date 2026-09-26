---
title: RAMP 的 GTM 编排实验：一句话意图，全渠道自动执行
podcast: 精选演讲
date: 2026-09-26
source_url: undefined
duration: "19:37"
type: episode
cover: "#64748b"
description: RAMP 产品与销售增长工程负责人 Armand 讲解如何搭建 go-to-market 编排：统一数据底座加后台智能体，让一句意图自动分发到外呼、广告、网页等各渠道。
guests: ["[[Arman Vaziri]]"]
companies: ["[[Ramp]]"]
concepts: ["[[go-to-market 编排]]", "[[智能体]]", "[[持久化执行]]", "[[CDP]]", "[[MCP]]", "[[护栏]]"]
category: 增长与销售
tags:
  - 增长与销售
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-26-talks-the-building-blocks-of-gtm-orchestration#post","headline":"RAMP 的 GTM 编排实验：一句话意图，全渠道自动执行","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-26-talks-the-building-blocks-of-gtm-orchestration","mainEntityOfPage":"https://talk.solomind.cc/2026-08-26-talks-the-building-blocks-of-gtm-orchestration","description":"RAMP 产品与销售增长工程负责人 Armand 讲解如何搭建 go-to-market 编排：统一数据底座加后台智能体，让一句意图自动分发到外呼、广告、网页等各渠道。","datePublished":"2026-09-26","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Arman Vaziri"},{"@type":"Organization","name":"Ramp"},{"@type":"Thing","name":"go-to-market 编排 (go-to-market orchestration)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"持久化执行 (durable execution)"},{"@type":"Thing","name":"CDP"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"护栏 (guardrails)"}],"articleSection":"增长与销售"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"增长与销售","item":"https://talk.solomind.cc/tags/增长与销售"},{"@type":"ListItem","position":3,"name":"RAMP 的 GTM 编排实验：一句话意图，全渠道自动执行","item":"https://talk.solomind.cc/2026-08-26-talks-the-building-blocks-of-gtm-orchestration"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>RAMP 的 GTM 编排实验：一句话意图，全渠道自动执行</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# RAMP 的 GTM 编排实验：一句话意图，全渠道自动执行

<div class="pd-byl"><b>Arman Vaziri</b> · 2026-09-26</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-26-talks-the-building-blocks-of-gtm-orchestration.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">每个人都在不同的真相源上运营，这使得要跨这些不同的 go-to-market 团队和渠道分发协调一致的行动，实际上是不可能的。</div><div class="a">— Arman Vaziri <button class="pd-ts" data-t="02:53" data-who="Arman Vaziri" data-en="Everybody's operating off of a different source of truth, and that makes it effectively impossible to go and distribute some coordinated action across these different go-to-market teams and channels." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Arman Vaziri]]
>
> **公司** [[Ramp]]
>
> **概念** [[go-to-market 编排]] · [[智能体]] · [[持久化执行]] · [[CDP]] · [[MCP]] · [[护栏]]

===正文===
这一集讲的是 [[Ramp|RAMP]](一家企业支出管理公司)怎么把 go-to-market(即产品进入市场、触达客户的整套打法)变成「描述一句意图，系统自动执行」。说话的人叫 Armand,他在 RAMP 领导产品和销售驱动增长工程团队。

他说的「[[go-to-market 编排|go-to-market 编排]]」目标很直接：你只需描述一个动作——比如「向东海岸建筑公司里打高尔夫的人推一个试用激励」——系统就能自动拉出这批受众、生成外呼序列和文案、做付费广告和网页的创意素材，甚至在应用内弹通知，全渠道同时执行 <button class="pd-ts" data-t="02:02" data-who="Armand" data-en="So really specifically, I'm a golfer. Suppose I want to offer golfers at East Coast construction companies an incentive to try ramp, talk to sales, whatever. And we want to be able to go and spin up an audience of golfers at East Coast construction companies, spin up an incentive." aria-label="回原文"></button>。他举的这个「送高尔夫球」的例子不是空想，他后来透露这个活动实际效果非常好 <button class="pd-ts" data-t="16:09" data-who="Armand" data-en="If we want to be able to say, here is a playbook, here's how you sell procurement, here's how you sell to construction, or here are wacky experiment ideas that we have, like offering Pro V1s to golfers, which is actually" aria-label="回原文"></button>。

## 瓶颈不在想法，在协调

几年前他们就发现：公司里不缺点子——产品、数据、工程、销售人人都有好想法，**瓶颈是想法之后的一切**：怎么拉受众、怎么说服一堆人遵守你的策略和赋能材料 <button class="pd-ts" data-t="01:13" data-who="Armand" data-en="Everybody across product and data and engineering and go to market have really good ideas for things that they want to do. And the bottleneck is everything after that." aria-label="回原文"></button>。具体卡在三个地方：①数据乱，每个系统各有一套「真相」，跨团队协同根本不可能；②销售代表整天连轴开会、做外呼，被琐事埋没，实验和创意根本铺不开；③协调成本高，写提案、做材料、说服大家用，速度怎么都快不过「以月为单位」<button class="pd-ts" data-t="02:41" data-who="Armand" data-en="And probably more than just this one sentence. So a few years ago, we kind of identified a few fundamental challenges here. As was previously mentioned, the necessary data for this was just messy, inconsistent across systems, right?" aria-label="回原文"></button>。

## 第一块地基：自建客户数据平台

要编排，先得有统一的数据底座。RAMP 在内部自建了一个 [[CDP|CDP]](客户数据平台，把散落各处的客户数据汇成一份)：接入 CRM 数据、产品数据、富化数据、网站数据、购买信号(既有内部建模的「这个客户很可能用采购产品」，也有融资公告这类外部信号)，还有邮件、会议、电话、页面浏览等交互数据 <button class="pd-ts" data-t="05:59" data-who="Armand" data-en="An internal customer data platform at RAMP where we're effectively doing your very traditional things. We're going to take CRM data, product data, enrichment data, web data, buying signals, whether it's things that are internally modeled like" aria-label="回原文"></button>。

实时事件(比如邮件)进 Kafka topic 再回流到 Postgres 数据库，保证事务性和各实体之间的引用完整性，并记录每条数据的来源与时间；大量销售数据本质是非结构化的——通话记录、邮件、笔记——所以他们对这些数据做嵌入(把文本转成可搜索的向量)，让跨内容搜索成为可能 <button class="pd-ts" data-t="07:13" data-who="Armand" data-en="As well as starting to embed a lot of this data, right? So much sales data is just inherently unstructured, right? You have like call transcripts, you have emails, you have notes, and the ability to kind of search across that is really valuable." aria-label="回原文"></button>。因为 RAMP 的可触达市场几乎是全美国，预计算、预摄取这些富化数据非常关键；离线侧则用 DBT 和 Snowflake 做批处理，再回灌到同一层 <button class="pd-ts" data-t="07:50" data-who="Armand" data-en="Really important for us. And then, as previously mentioned, a ton of work has gone into the offline piece of this with DBT, Snowflake, pulling everything into our warehouse, doing a lot of offline batch compute, and then piping that in via reverse CTL back into the same layer." aria-label="回原文"></button>。

## 第二块：一个会前简报案例

他们的战术是**先为一个团队解决，再横向扩展**——大家的痛点高度重叠：都想要自动化外呼、都想要会前准备 <button class="pd-ts" data-t="08:08" data-who="Armand" data-en="Next, more tactically, the way we tend to approach these problems is solve for one team first, then scale horizontally. As I mentioned before, you have a very overlapping set of problems that exist." aria-label="回原文"></button>。第一个落地产品是给客户经理(AM)的会前简报：每晚后台派出一组[[智能体|智能体]]，按账户逐个生成会议准备材料，整合「这次谈什么、客户想解决什么、有没有未关闭的工单、产品使用情况如何」这些背景，让 AM 在连轴转的会里有备而来 <button class="pd-ts" data-t="09:36" data-who="Armand" data-en="And how can we pull this together for AM so that they can go in prepared and kind of manage the operational piece of just being in back-to-back-to-back meetings all day?" aria-label="回原文"></button>。

技术上有个关键设计：他们围绕[[持久化执行|持久化执行]](durable execution,即任务状态被持久保存、挂了能接着跑而不是从头重来)搭了一套系统，基于 Temporal 构建——每次工具调用和模型调用都是一条 activity,worker 挂掉可以从断点恢复全部状态，而不是把整条线程重新处理一遍 <button class="pd-ts" data-t="10:22" data-who="Armand" data-en="That's pretty agnostic to the trigger that comes in. Everything is represented as a durable thread built around temporal, representing each tool call and model call as an activity." aria-label="回原文"></button>。不同智能体按配置访问不同工具集，还有 human-in-the-loop(暂停执行、等人类输入、再恢复)的工具。

非结构化数据这边，分块、嵌入后放进 TurboPuffer(一个向量数据库)，智能体用向量搜索、属性搜索、关键词搜索的组合，把信息限定在特定账户范围内拉取——而不是把整个语料库塞进上下文，那样既低效又贵 <button class="pd-ts" data-t="11:43" data-who="Armand" data-en="We have some set of batch jobs that are pulling in enablement materials, product knowledge, playbooks. Chunking them, embedding them, putting them in TurboPuffer, and it allows you to kind of, or allows agents to go and search, like, what do I care about?" aria-label="回原文"></button>。他们还建了技能库让每个人自定义自己的智能体：不同人关心的简报格式和信息不同，允许用文本表达偏好交给智能体，这对推动采用非常关键 <button class="pd-ts" data-t="12:16" data-who="Armand" data-en="And similarly, we've gone and built a skill library to allow people to customize their agents. Getting back to the meeting brief example, different people have different formats that they care about, they have different information that they care about, and allowing them to kind of represent that in text, giving that to the agent to pull it together has been very valuable for getting adoption." aria-label="回原文"></button>。

## 第三块：同一套能力，员工也能用

地基搭好后，扩展就是顺水推舟：会议简报之外，他们加了会后跟进、自动 CRM 更新——智能体从会议记录里发现「聊到了一个扩张机会」，就预填好创建该机会所需的全部信息，销售点个头就直接落地 <button class="pd-ts" data-t="13:11" data-who="Armand" data-en="Meetings are super important. We want to be able to generate things like post-meeting follow-ups and things like automatic CRM updates, which can pull in the transcript and say, hey, we discussed this potential expansion opportunity." aria-label="回原文"></button>。复制到其他团队(比如面向售前的 AE)主要工作只是换技能、换数据集成：邮件、通话转写嵌入、自定义指令是可泛化的，但售前需要更多第三方数据而非产品数据 <button class="pd-ts" data-t="13:30" data-who="Armand" data-en="Let me go and pre-fill all the information needed to create that opportunity, get a thumbs up from a rep, and just make it happen. And similarly, we want to extend it horizontally to other teams, which is mainly an exercise of creating specific skills, data integrations, and just data ingestion itself, where we can say, okay, email, call transcript embeddings, custom instructions, generalizable, but if we're building this for AEs who are handling pre-sales opportunities," aria-label="回原文"></button>。

更有意思的一步：他们搭了所谓 GTM [[MCP|MCP]],把后台智能体用的同一套工具开放给全体员工，谁都能接上去聊天、搭自己的自动化——而且员工真的搭了大量东西 <button class="pd-ts" data-t="14:19" data-who="Armand" data-en="And similarly, we've built this in a way where employees have access to the same tools and skills that are being used for the background agents that we're creating." aria-label="回原文"></button>。这产生了复利效应：员工连上 MCP,等于在告诉公司「我有这个问题、我这么解」，公司就可以直接把它产品化，分发给所有有类似问题的人；员工连提示词、技能、甚至自己 vibe coding 的成果都一并贡献出来，极大降低了产品化成本 <button class="pd-ts" data-t="14:57" data-who="Armand" data-en="This is just a glimpse into some of the analytics that we've done, taking the reasoning generated by the MCP tool calls that are being executed remotely. And this compounds because when people go and build their own thing and they go and connect to our MCP, they're basically telling us, here is a problem that I have." aria-label="回原文"></button>。

## 终局：多渠道编排

Armand 强调，前面那些垂直构建正是多团队、多渠道分发的地基 <button class="pd-ts" data-t="15:40" data-who="Armand" data-en="So now you're probably wondering, what about that golf example that I had mentioned at the beginning, the orchestration problem? The point that I'm trying to convey by talking about all these specific things that we're doing is that these vertical builds that we're creating are the foundation of multi-team, multi-channel distribution." aria-label="回原文"></button>。像高尔夫那个实验，意图导入内部应用 Ramp Revenue 后，自动给 SDR 生成受众名单和个性化外呼文案，生成落地页和广告创意，渠道负责人审核签字后即可上线。智能体还能同时持有多个候选活动，做经典的「多臂老虎机」平衡——探索新玩法与稳收已知回报之间取舍 <button class="pd-ts" data-t="17:40" data-who="Armand" data-en="Agents can go and hold context on multiple things that are options. We can go and execute this campaign or that campaign or that experiment and balance the Traditional multi-armed bandit problem of exploring new possibilities versus being safe and going into just known returns." aria-label="回原文"></button>;并内置[[护栏|护栏]]管理合规规则、参与规则，具备情境意识，避免对同一批人重复轰炸 <button class="pd-ts" data-t="17:55" data-who="Armand" data-en="Traditional multi-armed bandit problem of exploring new possibilities versus being safe and going into just known returns. And then we can build in guardrails as well to go and effectively manage compliance rules, rules of engagement, being context-aware, making sure we're not doing the same thing over and over again." aria-label="回原文"></button>。

## 小公司怎么办

有人问小公司或刚起步的公司怎么学。他的回答：先找你能围绕它做自动化的非常具体的用例，解决真实存在的具体问题。

三年前他们只有两个人，做的就是用 GPT 3.5 往外呼序列里塞个性化文案这种小事；在做这些的过程中自然理解了它如何运作、如何扩展到其他团队。现实是你不可能花一年去搭一套完美架构——把各个垂直解决方案拼起来、粘在一起就行 <button class="pd-ts" data-t="18:56" data-who="Armand" data-en="I think a few people before have mentioned something similar, but I would go and find the very specific use cases that you can build automation around and just solve really specific problems that exist first." aria-label="回原文"></button>。

## 本集带走

- **瓶颈是协调不是想法**：好点子不缺，缺的是拉受众、做材料、说服执行的整套下盘；工程上先建一致的数据底座(CDP + 嵌入搜索)，再谈自动化。
- **先服务一个团队，再横向复制**：选一个重叠度高的痛点(如会前准备)打透，扩展到其他团队时主要工作只是换技能和数据集成。
- **持久化执行是后台智能体的关键**：把每次工具/模型调用做成可恢复的 activity,worker 挂了从断点接着跑，不从头重算。
- **把后台智能体的工具原样开放给员工**：同一套工具既跑自动化又能被员工自用，员工的自建方案反过来成为产品化的来源。
- **编排的形态**：一句意图 → 自动生成受众/文案/创意/落地页 → 渠道负责人签字 → 多渠道执行，配上护栏和探索/收益的平衡。
- **小公司路径**：别想完美架构，从一个具体用例(哪怕只是 GPT 3.5 写外呼文案)开始，拼凑垂直方案再粘合。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">每个人都在不同的真相源上运营，这使得要跨这些不同的 go-to-market 团队和渠道分发协调一致的行动，实际上是不可能的。</span>  
> *Everybody's operating off of a different source of truth, and that makes it effectively impossible to go and distribute some coordinated action across these different go-to-market teams and channels.*  
> <span class="qm">—— Arman Vaziri · [02:53]</span> ^q1

> <span class="qz">这会产生复利效应，因为当人们去构建自己的东西并连接到我们的 MCP 时，他们基本上是在告诉我们：这是我的一个问题。</span>  
> *And this compounds because when people go and build their own thing and they go and connect to our MCP, they're basically telling us, here is a problem that I have.*  
> <span class="qm">—— Arman Vaziri · [14:57]</span> ^q2

> <span class="qz">现实是你不可能花一年去构建某种完美无缺的复杂系统架构，所以你必须把各个垂直解决方案拼凑起来，然后把它们粘在一起。</span>  
> *The reality is that you can't spend a year going and building some really complicated system architecture that is perfect, so you have to like piece together the vertical solutions and then stick them together.*  
> <span class="qm">—— Arman Vaziri · [19:25]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「增长与销售」挖下去**

- [[2026-09-14-eyeonai-the-hidden-algorithm-that-decides-which|当 AI 决定买什么软件：G2 的「信任层」生意]]<span class="pd-rz">同概念:MCP、护栏 (guardrails)、智能体 (agent)</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>
- [[2026-08-26-talks-how-ai-agents-let-gtm-teams-scale-justin|Cloudflare 销售运营的 AI 三支柱：让市场进入团队效率翻倍]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-06-03-talks-pioneering-agentic-applications-with-dec|三位 AI 智能体公司 CEO 圆桌：从 Copilot 到智能体，还要几年？]]<span class="pd-rz">同概念:MCP、护栏 (guardrails)、智能体 (agent)、human in the loop</span>
- [[2026-07-13-eyeonai-inside-the-enterprise-browser-rebuilding|企业浏览器 Island：给智能体戴上企业级护栏]]<span class="pd-rz">同概念:MCP、护栏 (guardrails)、智能体 (agent)</span>
- [[2026-07-31-talks-building-deep-agents-and-deploying-in-pr|把智能体推向生产环境:为什么标准基础设施不够用]]<span class="pd-rz">同概念:护栏 (guardrails)、持久化执行 (durable execution)、human in the loop、MCP</span>

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
