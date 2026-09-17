---
title: Vercel 构建「每桌一个智能体」：从失败的多智能体到文件系统智能体
podcast: 精选演讲
date: 2026-09-17
source_url: undefined
duration: "17:24"
type: episode
cover: "#64748b"
description: Vercel 软件总监 Andrew 讲述内部数据智能体 D0 的迭代历程：多智能体架构撞墙后转向文件系统方案，评估分翻倍，并最终催生开源智能体框架 Eve。
guests: ["[[Andrew Qu]]"]
companies: ["[[Vercel]]"]
concepts: ["[[智能体]]", "[[Eve]]", "[[Claude Code]]", "[[Opus 4.5]]", "[[沙箱]]", "[[文件系统智能体]]", "[[技能]]", "[[Snowflake]]", "[[语义层]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-14-talks-how-we-solved-agent-building-andrew-qu-v#post","headline":"Vercel 构建「每桌一个智能体」：从失败的多智能体到文件系统智能体","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-14-talks-how-we-solved-agent-building-andrew-qu-v","mainEntityOfPage":"https://talk.solomind.cc/2026-09-14-talks-how-we-solved-agent-building-andrew-qu-v","description":"Vercel 软件总监 Andrew 讲述内部数据智能体 D0 的迭代历程：多智能体架构撞墙后转向文件系统方案，评估分翻倍，并最终催生开源智能体框架 Eve。","datePublished":"2026-09-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Andrew Qu"},{"@type":"Organization","name":"Vercel"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"Eve"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"Opus 4.5"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"文件系统智能体 (file system agent)"},{"@type":"Thing","name":"技能 (skill)"},{"@type":"Thing","name":"Snowflake"},{"@type":"Thing","name":"语义层 (semantic layer)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Vercel 构建「每桌一个智能体」：从失败的多智能体到文件系统智能体","item":"https://talk.solomind.cc/2026-09-14-talks-how-we-solved-agent-building-andrew-qu-v"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Vercel 构建「每桌一个智能体」：从失败的多智能体到文件系统智能体</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Vercel 构建「每桌一个智能体」：从失败的多智能体到文件系统智能体

<div class="pd-byl"><b>Andrew Qu</b> · Vercel 软件总监 · 2026-09-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-14-talks-how-we-solved-agent-building-andrew-qu-v.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">与其每张桌子上一台计算机， 我们能不能做到每张桌子上一个智能体？</div><div class="a">— Andrew Qu <button class="pd-ts" data-t="02:05" data-who="Andrew Qu" data-en="instead of a computer on every desk, could we potentially have an agent on every desk?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Andrew Qu]]
>
> **公司** [[Vercel]]
>
> **概念** [[智能体]] · [[Eve]] · [[Claude Code]] · [[Opus 4.5]] · [[沙箱]] · [[文件系统智能体]] · [[技能]] · [[Snowflake]] · [[语义层]]

把公司内部的数据查询全交给 AI，最直观的做法是把不同环节拆给不同的[[智能体|智能体]]——一个规划、一个写 SQL、一个做报告。[[Vercel|Vercel]] 的软件总监 Andrew 在一场短演讲里讲了他走过的完整弯路：他们先做了精细的多智能体流水线，上线后反馈却是「糟透了」；最后靠一个反直觉的简单方案翻倍了评估分数，并把它做成了一个新框架 [[Eve|Eve]](他称之为「智能体的 Next.js」)，两周前刚发布。

事情始于大约一年前。 Andrew 和 Vercel 的 CTO 有个想法： Bill Gates 曾设想每张桌子上、每个家庭里都有一台计算机， 那能不能做到「每张桌子上一个智能体」？ 

当时智能体基本只用于编码， 他们想探索在设计、产品管理等职能上的扩展。 他走访了市场、销售、财务、法务等各个部门， 问「你最讨厌工作中的什么」， 最打动他的用例来自数据团队： 这个精简的团队跟不上 Vercel 的增长速度， 每当市场或销售的人对客户、产品有疑问， 数据科学团队就得放下手头所有事， 写查询、处理、分析、给建议——这对生产力的杀伤力非常大。

**第一版： 一个超级提示词。** 最朴素的做法是把 [[Snowflake|Snowflake]](数据仓库)的 schema 导出来贴进 system prompt, 附上问题， 模型生成 SQL 后自己手动复制粘贴去运行。 

他只是想验证： 今天的模型在给定 decent 结构的情况下， 能不能写出有效的 SQL。 结论是： 模型还没那么好， 但可以通过提示词工程、更好的上下文和护栏让它运作得好一点。

**第二版： 多智能体流水线 D0。** 他们把数据科学家的真实工作流拆成阶段——处理问题、探索[[语义层|语义层]]弄清 join 模式、执行 SQL、失败或开销太大就重来、最后做报告和可视化——映射成串联的智能体： 查询智能体把查询传给规划智能体， 再到执行智能体等。 

每个智能体有非常专用的 system prompt, 工具作用域精确限定在其功能上， 比如规划智能体只有「读实体 YAML」和「搜索 schema」两个工具。 这版确实更好了： 摆脱了复制粘贴 SQL, 真正做到了从问题到答案的端到端闭环。

**撞墙与转折。** 但这种架构开始碰壁， 他们得出结论： 你真正需要的是一个拥有全部超大上下文的单一智能体， 让它自己管理自己的记忆——因为在流水线里， 下一个智能体能拿到的只有一份摘要和上一步的小片段， 它无法回顾和反思整个过程。 

改成单个 mega-agent(内部时而规划、时而执行、时而汇报， max steps 设 100)后， 最大的改进是： 遇到执行或 join 错误时， 它能回头去探索更多、读更多内容， 弄清楚自己哪里做错了。 他们相当有信心——评估集能搞定 30% 了——于是分发给了少数受信任的成员。

**最初的反馈： 糟透了。** 他们完全没能预料到用户会问的那些问题， 而靠人工手动梳理这些场景， 看不出是一种可扩展的做法。

真正的转折来自外部： [[Opus 4.5|Opus 4.5]] 和 [[Claude Code|Claude Code]] 发布了。 Andrew 的原话是， 和他们手工培育的智能体相比， 「Claude Code 加 Opus 4.5 基本上就是 AGI」——它几乎毫不卡壳地回答了他们大部分问题。 

退一步分析为什么好这么多， 他们意识到最大的解锁就是： **它只是一个文件系统**。 工具集极其精简——列文件、读文件、运行 bash——没有一套死板规定的工具， 而是放任模型去探索涌现行为， 用的是智能体在训练中被充分打磨过的那几样工具。

**第三版： [[文件系统智能体|文件系统智能体]]， 评估分翻倍。** 他们按 Claude Code 的风格重建 D0: 智能体跑在[[沙箱|沙箱]]里， 把整个语义层倾倒进沙箱， 它可以随意 bash、读文件、写文件， 上面只撒几样 Vercel 特有的工具。 

Andrew 称这是「有史以来最大的解锁」， 评估分数基本翻了一倍。 实现非常简单： 给它一个 bash 工具(Vercel 在 NPM 上有 bash tool 辅助包)， 附加到沙箱， 再把文件挂上去供它读写执行。 这段经历还催生了一篇博客文章， 发布那一周占了 Vercel.com 流量的 70%。

**Skills: 让每次运行不再从零开始。** 铺开到全公司后， 每天涌来成千上万条查询——客户指标、销售指标、NPM 下载量。 

他们发现大量查询形态相同： 聚合就那么几种做法、查产品就那么几种、查账单就那么几种。 于是建了一个定期任务， 拿最近的查询自动提炼成 [[技能|skill]]。 

现在大约有 100 个 skill, 从聚合到查询特定人群的具体数据都有。 这非常有效， 因为每次新的智能体运行本来几乎从零开始， 除了语义层和系统提示词没有任何预置上下文； 有了 skill, 一开局就自带大量前人已经做过的上下文知识。

**从 D0 到 Eve: 智能体的 Next.js。** 构建 D0 的每一步都有 Vercel 的员工 fork 出去造自己的智能体， 他们于是想： 能不能让今天的人直接从最后的洞见出发， 不必从简单提示词或第一性原理重新发明？ 

两周前他们发布了开源框架 Eve(eve.dev)。 灵感直接来自 Next.js 的「文件系统即基础设施」——按约定写文件， 框架自动声明它们该去哪。 

构建智能体也应该这么简单： 只需创建 skills 文件夹、tools 文件夹、channels 文件夹， 框架就知道怎么把它变成智能体。 在 Eve 的模型里， 智能体 = 运行时 + 渠道： 运行时里有持久性、隔离执行、模型调用和连接； 可以插入开源适配器(Postgres、OpenAI 的 response API、Docker 等)， 也能一键部署到 Vercel——workflows 负责持久性， Sandbox 负责安全执行， 刚发布的 Vercel Connect 负责生成短生命周期 OIDC 令牌的连接， 部署后开箱即得可观测性(所有运行、工具调用、每一步、预估成本和优化建议)。 构建 Eve 的同时， 他们用 Eve 重写了整个 D0——从幕后复杂的代码结构， 变成一堆系统指令、几个 skill、几个工具的简单文件系统。

**效果与主张。** 合作公司 Aura 用 Eve 从零重建了他们的服务测试智能体(访问网站、安装、试用)， 相比现成的 Claude Code, 步骤更少、成功率更高、洞察更好。 

Andrew 的核心主张是： 他们之前实测过许多资金充足的垂直智能体创业公司(接管你的 Snowflake 跑查询那种)， 但真正让智能体好用的， 是它拥有大量非常具体的公司知识——比如 Vercel 是一家 Web 公司， 什么该查、什么东西链接到什么， 这些理解深得多。 现成的智能体值得一试， 但想要最大收益， 应该自己构建、尽可能多塞进公司特定知识。 

如今 Vercel 内部已有大约 20 个还算有产品市场契合度的智能体： 从确定该联系谁的营销复盘， 到法务看到新合同时的首轮红线标注， 再到数据科学智能体。 数据团队的生产力从未如此之高——他们终于有时间去优化 Snowflake 性能、补齐缺失的数据源， 而不是整天写查询。

## 本集带走
- **多智能体流水线往往是弯路**： 阶段拆分后， 下游智能体只拿到上游的摘要和小片段， 无法回顾反思； 改成单个大上下文智能体、让它自己管理状态， 错误时能回头探索， 才是关键一步。
- **文件系统 + 极简工具是最强 unlock**: 列文件、读文件、bash 这几样模型被充分训练过的工具， 加上一个装满语义层的沙箱， 比「为每个功能定制专用工具」效果好得多——评估分直接翻倍。
- **用 skill 沉淀重复查询**： 每天成千上万条查询其实形态有限， 用定期任务把高频查询自动提炼成 skill(他们约 100 个)， 让每次智能体运行带着现成上下文开局， 而不是从零开始。
- **自己造智能体， 塞进公司知识**： 现成垂直智能体通用但浅， 真正的价值在大量公司特定的知识(什么该查、什么链接什么)——这是买不到的， 只能自己构建积累。
- **想上手 Eve**: eve.dev 克隆模板即可开始， skills/tools/channels 各建一个文件夹， 按约定声明， 支持自托管或部署到 Vercel(自带可观测性)。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">与其每张桌子上一台计算机， 我们能不能做到每张桌子上一个智能体？</span>  
> *instead of a computer on every desk, could we potentially have an agent on every desk?*  
> <span class="qm">—— Andrew Qu · [02:05]</span> ^q1

> <span class="qz">我们在一旁感叹： 哇， 和我们之前的东西相比， Claude Code 加 Opus 4.5 基本上就是 AGI 了。</span>  
> *we on the side were like, wow, Claude Code and Opus 4.5 is basically AGI compared to what we had before.*  
> <span class="qm">—— Andrew Qu · [07:50]</span> ^q2

> <span class="qz">我们意识到， 最大的解锁就是： 它只是一个文件系统。</span>  
> *we realized that the big unlock was that it was just a file system.*  
> <span class="qm">—— Andrew Qu · [08:09]</span> ^q3

> <span class="qz">Claude Code 并没有被给予一套非常死板规定的工具， 它某种程度上就是被放任自由， 去探索涌现行为。</span>  
> *Claude Code was not giving a very prescriptive set of tools. It was sort of just letting it go wild and explore emergent behavior.*  
> <span class="qm">—— Andrew Qu · [08:34]</span> ^q4

> <span class="qz">我写这篇文章的那一周， 它占了我们 Vercel.com 流量的 70%。</span>  
> *And the week that I wrote this, it was responsible for 70% of our Vercel.com traffic.*  
> <span class="qm">—— Andrew Qu · [10:00]</span> ^q5

> <span class="qz">于是我们真的在想： 如果我们为智能体构建一个 Next.js 会怎样？</span>  
> *And so we actually thought, what if we built the Next.js for agents?*  
> <span class="qm">—— Andrew Qu · [12:04]</span> ^q6

> <span class="qz">但我们发现， 真正让智能体好用的， 是它拥有大量非常具体的公司知识。</span>  
> *But we found out that what really makes this agent good is it has a lot of very specific company knowledge.*  
> <span class="qm">—— Andrew Qu · [15:31]</span> ^q7

> <span class="qz">如果你真的想获得最大的收益， 你应该真正尝试构建自己的智能体， 并尽可能多地加入公司特定的知识。</span>  
> *if you really want to get the most juice out of a squeeze, you should really try to build your own agent and add in as much company-specific knowledge as you can.*  
> <span class="qm">—— Andrew Qu · [15:55]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-17-sed-scaling-agent-workloads-at-vercel|把智能体从「桌上的宠物」搬进云端：Vercel 开源框架 Eve]]<span class="pd-rz">同公司:Vercel · 同概念:Eve、智能体 (agent)、沙箱 (sandbox)、Next.js</span>
- [[2026-08-05-lennys-build-an-ai-code-review-bot-in-30|用 AI 审 AI：Vercel 搭建自动批准 PR 机器人实操]]<span class="pd-rz">同公司:Vercel · 同概念:Eve、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-09-07-howiai-build-your-own-company-brain-the-enterpr|Stripe 内部公司大脑 Kai：让上万人放心把工作交给智能体的治理术]]<span class="pd-rz">同概念:skill、智能体 (agent)、沙箱 (sandbox)、Claude Code</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同公司:Vercel · 同概念:Snowflake、智能体 (agent)</span>
- [[2026-08-07-yc-how-to-design-in-the-agent-era-e3n42jd|别让 AI 默认审美毁了你的产品:Paper 如何用 HTML 重新定义设计工具]]<span class="pd-rz">同公司:Vercel · 同概念:Claude Code、智能体 (agent)</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>

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
