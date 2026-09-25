---
title: "用 Notion 卖 Notion:把 GTM 蛛网重造成一个系统"
podcast: 精选演讲
date: 2026-09-26
source_url: undefined
duration: "21:05"
type: episode
cover: "#64748b"
description: "Notion GTM 工程团队工程师分享如何用四层架构和智能体,把散落几十个工具的客户运营重建成一个人类与智能体共用的决策系统。"
guests: ["[[Flora Liu]]"]
companies: ["[[Notion]]", "[[Temporal]]", "[[Gong]]", "[[Snowflake]]"]
concepts: ["[[GTM]]", "[[智能体]]", "[[多智能体工作流]]", "[[上下文层]]", "[[Signal]]", "[[自建还是购买]]"]
category: 智能体
tags:
  - 智能体
  - 增长与销售
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-26-talks-ai-in-gtm-at-notion-flora-liu#post","headline":"用 Notion 卖 Notion:把 GTM 蛛网重造成一个系统","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-26-talks-ai-in-gtm-at-notion-flora-liu","mainEntityOfPage":"https://talk.solomind.cc/2026-08-26-talks-ai-in-gtm-at-notion-flora-liu","description":"Notion GTM 工程团队工程师分享如何用四层架构和智能体,把散落几十个工具的客户运营重建成一个人类与智能体共用的决策系统。","datePublished":"2026-09-26","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Flora Liu"},{"@type":"Organization","name":"Notion"},{"@type":"Organization","name":"Temporal"},{"@type":"Organization","name":"Gong"},{"@type":"Organization","name":"Snowflake"},{"@type":"Thing","name":"GTM"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"多智能体工作流 (multi-agent workflow)"},{"@type":"Thing","name":"上下文层 (context layer)"},{"@type":"Thing","name":"Signal"},{"@type":"Thing","name":"自建还是购买 (build or buy)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"用 Notion 卖 Notion:把 GTM 蛛网重造成一个系统","item":"https://talk.solomind.cc/2026-08-26-talks-ai-in-gtm-at-notion-flora-liu"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>用 Notion 卖 Notion:把 GTM 蛛网重造成一个系统</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 用 Notion 卖 Notion:把 GTM 蛛网重造成一个系统

<div class="pd-byl"><b>Flora Liu</b> · Notion GTM 工程团队工程师 · 2026-09-26</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-26-talks-ai-in-gtm-at-notion-flora-liu.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">营销用一套工具运行,销售用另一套,客户运营用第三套,但他们都在各自独立地观察同一位客户并各自独立地做决策。</div><div class="a">— Flora Liu <button class="pd-ts" data-t="03:09" data-who="Flora Liu" data-en="Marketing runs on one set of tools, sales on another, customer ops on a third, but all of them are looking at a customer independently and making decisions separately." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Flora Liu]]
>
> **公司** [[Notion]] · [[Temporal]] · [[Gong]] · [[Snowflake]]
>
> **概念** [[GTM]] · [[智能体]] · [[多智能体工作流]] · [[上下文层]] · [[Signal]] · [[自建还是购买]]

大多数公司的 [[GTM|GTM]](进入市场,即获客到成单的全流程)是一张工具的蛛网:营销一套工具、销售一套、客户运营第三套,靠备注、提案、合同来回传递拼接。一年前,你问这位来自 [[Notion|Notion]] 产品增长团队、后来转入 GTM 工程团队的工程师,她会告诉你搭建 GTM 系统是个营销运营问题;而今天,她认为这是她做过的最有趣的分布式系统问题之一。触发转变的契机很偶然:Notion CEO Ivan 寒假做了款电子游戏,回来后坚信软件工程可以应用于许多以前难以驾驭或成本过高的问题——加上[[智能体|智能体]]技术让执行能力飙升,那些昂贵、耗时、以前无解的"意大利面条式"流程,现在可以被理顺了。

## 问题:一段客户旅程,三套割裂系统

Notion 的业务在自助增长和销售辅助之间流转,客户也不断在两种模式间移动。问题是:客户体验到的是一段旅程,内部却由互不联通的系统支撑,充斥人为错误和认知负担。

数据散落在 Salesforce、[[Gong|Gong]]、Outreach、Zoom Info,产品使用数据在 [[Snowflake|Snowflake]],而十年间最重要的上下文躺在备注和会议文档里。更麻烦的是员工各自在部门内用 MCP 和自己的智能体创新——「单部门模式」:营销为营销做工具,销售为销售做工具,每个工具只覆盖客户旅程的一小块。

真正跨系统自动化时撞上三堵墙:数据质量(一个错误的账户映射就足以让销售失去信任)、数据延迟(每个供应商加一跳,导致「基于昨天的世界做自动化」)、以及最关键的——结构化与非结构化数据的割裂。最重要的客户事实往往只在备注里:「关键支持者刚离职」「别再联系这个客户」「他们被法务卡住了」。自动化看不到这些,就可能酿成灾难性错误。

## 架构:四个问题、四层循环,人类和智能体在同一个环上

跨职能团队(客户体验、RevOps、产品、工程、销售)头脑风暴后发现,每个工作流都能归结为四个问题,直接成了系统架构的四层:Know(关于每个客户的可信上下文)→ Decide(选出唯一的下一个最佳步骤)→ Act(发出具体动作:生命周期邮件、应用内提示、或交给销售的任务)→ Learn(观察结果、反馈回决策,形成循环)。

但最关键的设计不在架构图里:人类和智能体在同一个循环上运行。智能体做大规模重复工作——收集上下文、调研、起草建议;人类提供判断——决定下一步、审核建议、维护客户关系。她特别强调:不是在业务之上再盖一个 AI 层,而是让智能体作为同一个系统里的「另一个操作者」运作。

三个关键实现取舍:
- **智能体不直接对客户说话**。销售辅助工作流里,人类默认在环中、批准智能体做的一切。

这也有安全考量:潜在客户填的表单被视为不受信任的用户输入,中间有智能体时尤其要守住信任边界。
- **路由与资格判定成为一等原语**。

资格规则过去散落在邮件工具和销售系统各处,现在收拢到一处供全代码库消费;再由单一分类器路由客户该做什么,防止重复发送、保证沟通连贯。
- **只拥有[[上下文层|上下文层]],其余全租**。精简团队不自建邮件服务商或 Clay 这样的数据增强服务;但「我们对客户的理解最透彻,所以不会放弃这一点」,拒绝外包上下文层——通用工具无法捕捉他们晦涩的数据模型,他们也不要一个无法调试的上下文层。

## 怎么做:三个原语搭出系统

**第一个原语是可信的统一客户视图**。所有供应商数据摄取进 Snowflake(数据仓库),跑每日转换(部分实时),产出一小组建模的、带版本的实体:账户、联系人、工作区、资格和事实,带清晰的来源归属和时间戳。

再发布到 DynamoDB(键值存储)做成反规范化的按键寻址画像,智能体毫秒级查询、无需 join;智能体生成的研究片段、摘要笔记也用同一套 ID 做键,下游系统一次读全。然后全部接进 Notion——于是 GTM 团队不再开七个标签页,直接用 Notion 探索上下文、调查账户,甚至直接发任务到 Nooks 或 Outreach。

字面意义上,「我们在用 Notion 来发展 Notion」。因为没建 AI 层,人类、工作流、智能体跑在同一份事实上。

**第二个原语是[[Signal|信号]](signal):把客户事件变成行动的单元**。一个信号 = 一个重要到足以改变客户下一步的单个事件。

有的是用户驱动的(触达 AI 用量上限、主动联系销售),有的完全不是——公司融资、招聘动向、技术栈变更。正是外部信号让他们从被动应对变成主动出击。

信号服务监控客户画像,判断行动是否可用、该归谁,然后发出任务——给人的直接落进销售代表的 Notion 数据库。有趣的是:如果某客户没有信号,营销组件接管——预测引擎推荐最相关的产品功能,自动发生命周期邮件和应用内提示推动采用。

**销售工作流的落地:跟随最优秀的销售,把最重复的部分编码成持久的[[多智能体工作流|多智能体工作流]]**。每个信号变成 [[Temporal|Temporal]](一种工作流编排服务,负责重试、去重、断点续跑)上的一个工作流,一次运行会涉及数据富化、网页搜索、草稿生成——每步都是可能失败的网络调用,Temporal 让他们专注写顺序逻辑,且一个格式错误的转录不会拖垮整批。

冷外联信号:研究子智能体并发做网页调研 → 起草三封邮件并打分 → 评审智能体挑最高分、必要时修改,循环改进后落入销售任务。跟进电话场景:解析 Gong 转录,提取 MEDDICC 要素(指标、经济买家、决策标准、计划、支持者),起草有据可依的跟进。每个 LLM 步骤都被追踪以评估质量。

**第三层是让系统自我改进的验证循环**。每个行动都是一条决策日志,每个结果回溯到导致它的决策。

朴素做法是数据分析师人工来查;重建版是把互动历史直接接回决策层,由系统决定继续话题、推进下一步还是转向。这些循环让系统自我修复、持续改进。

## 效果与边界:人是主消费者,智能体正在从边缘走向中心

在共享客户视图里,销售代表一天从已排好优先级的任务框开始,外联邮件草稿已预先调研好,人类仍在环中、加上自己的判断和「销售独门秘诀」,但不再从白纸开始。这不只提升单个代表的效率,目标是**抬高整个团队的下限**:新代表可以从中学习 Notion 的销售流程、哪些信号重要、哪些 playbook 有效,成长中的代表从最强代表的模式中学习,不必每课靠人手把手传。

[[自建还是购买|自建还是购买]]?她的答案是逐层决策:内部智能体比大多数人假设的更便宜、更快,所以在自己数据最厚的地方先建,再租用可泛化的部分;编排、邮件、CRM 这类供应商做得好的不碰,上下文层坚决自持。效果方面还很早期,但初步迹象积极:过去 13 周企业销售代表的合格商机有所增加;生命周期营销侧,收到基于上下文推荐的用户,采取下一步行动的可能性高出 63%。

目前人类仍是 GTM 数据的主要消费者,智能体在边缘帮忙;她预期智能体将很快成为系统内的一等消费者,从起草走向在护栏内行动。现在就为人类和智能体的协作搭好上下文底座,是在为团队未来的冲刺铺路。

## 本集带走

- **动手之前,先跟随你最优秀的销售**。看着他们开电脑、数他们开多少标签页——那是混乱,但那也是规格说明。把平庸的流程编码进去,得到的只能是平庸的智能体。
- **从最清晰可读的工作流起步**:有文档、有重复的那种,自动化成功率最高。
- **有风险的地方让人留在环中**:智能体做重复劳动,人类批准并加判断,别让智能体直接对客户说话。
- **把 GTM 建模成原语**——实体、上下文、触发器、动作、资格规则——陌生的领域就变成可以工程化的系统。
- **默认 headless,为智能体作为「操作者」而非「副驾驶」设计**。人类和智能体若不能从同一个底座读取,你就是在造两个终将漂移的系统。对他们来说,那个底座是 Notion。

<div class="pd-sec pd-sec-q">全部金句 <span>10 条</span></div>

> <span class="qz">营销用一套工具运行,销售用另一套,客户运营用第三套,但他们都在各自独立地观察同一位客户并各自独立地做决策。</span>  
> *Marketing runs on one set of tools, sales on another, customer ops on a third, but all of them are looking at a customer independently and making decisions separately.*  
> <span class="qm">—— Flora Liu · [03:09]</span> ^q1

> <span class="qz">每个供应商都增加了一跳,这种滞后导致我们基于过时的数据行动,这意味着我们在基于昨天的世界做自动化。</span>  
> *Every vendor added a hop, and this lag was causing us to act on stale data, and that meant we were automating on yesterday's world.*  
> <span class="qm">—— Flora Liu · [04:51]</span> ^q2

> <span class="qz">我们发现,与其在我们的业务之上构建一个 AI 层,我们设计了架构,让智能体能够作为与人类在同一个系统中的另一个操作者来运作。</span>  
> *We found that instead of building an AI layer on top of our business, we designed our architecture so that the agent can operate as another operator within the same system as humans.*  
> <span class="qm">—— Flora Liu · [07:09]</span> ^q3

> <span class="qz">从非常字面的意义上说,我们在用 Notion 来发展 Notion。</span>  
> *In a very literal sense, we are using Notion to grow Notion.*  
> <span class="qm">—— Flora Liu · [11:13]</span> ^q4

> <span class="qz">人类仍然在循环中,并且实际上加入了自己的判断、品味和销售独门秘诀,但他们不再是从一张白纸开始。</span>  
> *The human is still in the loop and actually adds their own judgment and taste and sales secret sauce, but they're no longer starting from a blank slate.*  
> <span class="qm">—— Flora Liu · [16:31]</span> ^q5

> <span class="qz">我们拒绝外包上下文层,因为那是我们的优势所在。</span>  
> *We refuse to outsource the context layer because that's where our edge is.*  
> <span class="qm">—— Flora Liu · [18:02]</span> ^q6

> <span class="qz">而在生命周期营销方面,收到基于上下文的推荐的用户,采取下一步行动的可能性高出 63%。</span>  
> *And on the lifecycle marketing side, users who received context-aware recommendations were 63% more likely to take the next step.*  
> <span class="qm">—— Flora Liu · [19:06]</span> ^q7

> <span class="qz">那是一片混乱,但那也是规格说明。</span>  
> *And that was a chaos, but it was also the spec.*  
> <span class="qm">—— Flora Liu · [19:44]</span> ^q8

> <span class="qz">所以如果你把一个平庸的流程编码进去,你就会得到一个平庸的智能体。</span>  
> *And so if you encode a mediocre process, you get a mediocre agent.*  
> <span class="qm">—— Flora Liu · [19:47]</span> ^q9

> <span class="qz">最后但同样重要的是,默认做成无头(headless)的,并且为智能体作为操作者而设计,而不仅仅是副驾驶。</span>  
> *Last but not least, be headless by default and design for agents as operators and not just copilots.*  
> <span class="qm">—— Flora Liu · [20:13]</span> ^q10

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同公司:Snowflake · 同概念:信号 (signal)、智能体 (agent)、护栏 (guardrails)</span>
- [[2025-09-16-talks-evaluating-agents-with-braintrust|Braintrust CEO Ankur Goyal:做 AI 评估的纪律八年不变，但玩法正在剧变]]<span class="pd-rz">同公司:Notion · 同概念:智能体 (agent)、护栏 (guardrails)</span>
- [[2026-06-24-latent-space-databricks|Databricks 的反击：重写数据库、统一智能体与开放的执念]]<span class="pd-rz">同公司:Snowflake · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同公司:Snowflake · 同概念:智能体 (agent)</span>
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|Vercel COO 谈用 AI 重构销售：10 个 SDR 缩减到 1 个]]<span class="pd-rz">同公司:Gong · 同概念:智能体 (agent)</span>
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|别管金句，去捣鼓东西：Notion 产品负责人谈 AI 时代的产品与品味]]<span class="pd-rz">同公司:Notion · 同概念:智能体 (agent)</span>

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
