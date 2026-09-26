---
title: Snowflake 内部销售 AI 助手复盘：一百万个问题换来的教训
podcast: 精选演讲
date: 2026-09-26
source_url: undefined
duration: "20:21"
type: episode
cover: "#64748b"
description: Snowflake 负责销售团队内部 AI 工具的负责人复盘其 go-to-market 智能体（已回答超一百万个问题）的构建方法与踩坑教训。
guests: ["[[Sait Izmit]]"]
companies: ["[[Snowflake]]", "[[Cowork]]"]
concepts: ["[[智能体]]", "[[MCP]]", "[[变革管理]]", "[[语义视图]]", "[[反馈回路]]"]
category: 智能体
tags:
  - 智能体
  - 组织与领导力
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-26-talks-building-gtm-ai-agents-lessons-from-depl#post","headline":"Snowflake 内部销售 AI 助手复盘：一百万个问题换来的教训","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-26-talks-building-gtm-ai-agents-lessons-from-depl","mainEntityOfPage":"https://talk.solomind.cc/2026-08-26-talks-building-gtm-ai-agents-lessons-from-depl","description":"Snowflake 负责销售团队内部 AI 工具的负责人复盘其 go-to-market 智能体（已回答超一百万个问题）的构建方法与踩坑教训。","datePublished":"2026-09-26","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Sait Izmit"},{"@type":"Organization","name":"Snowflake"},{"@type":"Organization","name":"Cowork"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"变革管理 (change management)"},{"@type":"Thing","name":"语义视图 (semantic views)"},{"@type":"Thing","name":"反馈回路 (feedback loop)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Snowflake 内部销售 AI 助手复盘：一百万个问题换来的教训","item":"https://talk.solomind.cc/2026-08-26-talks-building-gtm-ai-agents-lessons-from-depl"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Snowflake 内部销售 AI 助手复盘：一百万个问题换来的教训</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Snowflake 内部销售 AI 助手复盘：一百万个问题换来的教训

<div class="pd-byl"><b>Sait Izmit</b> · Snowflake 高管 · 2026-09-26</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-26-talks-building-gtm-ai-agents-lessons-from-depl.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">用户信任极难赢得，却能在一夜之间失去。</div><div class="a">— Sait Izmit <button class="pd-ts" data-t="03:31" data-who="Sait Izmit" data-en="User trust is earned extremely hard, and it's lost overnight." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sait Izmit]]
>
> **公司** [[Snowflake]] · [[Cowork]]
>
> **概念** [[智能体]] · [[MCP]] · [[变革管理]] · [[语义视图]] · [[反馈回路]]

这一集是一位 [[Snowflake|Snowflake]] 高管的演讲——他负责公司销售团队的内部 AI 工具，团队在去年 9 月上线了一个内部 go-to-market 助手（帮销售做数据分析、回答业务问题的[[智能体|智能体]]），到演讲时已回答超过一百万个问题，每周约 4 万个。这个智能体构建在 Snowflake 自家的 [[Cowork|Cowork]] 平台上，他们是自家产品的「零号客户」。

最反直觉的一点：他们给销售写智能体之前，先打开电子表格、对照销售流程写下 150 个销售真会问的问题，然后一测——准确率只有 50%，全组沮丧。而他们的应对不是补数据冲覆盖率，而是砍问题面、保质量。以下是他分享的核心打法。

## 质量是第一优先级：宁答 50 题 95% 对，不答 100 题 70% 对

他反复强调这是团队最「虔诚」的原则。用户信任极难赢得、却一夜之间就能失去——放一个自由聊天框在那里，用户前五个问题如果体验好，就会回来；体验不好，你要花十倍功夫才可能赢回他们，甚至永远赢不回来。

所以团队有句口号：「质量是 P 减一」。他们从小处起步，甚至 60% 的数据是上线之后六七个月里才陆续编辑的。今天这个系统已长成庞然大物：15 个[[语义视图|语义视图]]、85 张表、3000 列数据、五六个 [[MCP|MCP]] 连接、接近 20 个技能。

## 分阶段发布：试点 → 10% beta → 正式发布

不能一上来就发布给所有人，因为「我们要确保赢得那前五个问题」。他们的每个产品都走三步：

- **试点**：拉组织里最「AI 原生」、愿意给反馈的人进来，目标是证明准确性、磨平粗糙边缘。
- **10% beta（600 人）**：验证 MVP 是否成立。此时会涌入海量「能不能接这个数据」的请求，要看需求在哪里集中出现——那些集中点不接上，就不是真 MVP。这一阶段的核心指标是留存率：他们结束时周活用户回访留存率超过 70%。
- **GA 正式发布**。

## 发布才是真正的战斗：变革管理

「这是很多产品失败的地方」。发布两周后管理层就失望：为什么没人用？他的回答是：组织里只有 20% 的人真正试用过产品——人们连五分钟都不肯花，那不是产品的错；试了不回来才是我的问题。

所以他在[[变革管理|变革管理]]上大幅投入：把 60%、70% 的时间花在销售会议上做演示、搭仪表盘看哪些团队采用了、让表现好的团队经理「有面子」、从销售负责人那里拿到支持去推动团队试用。他说得非常重：「如果你没做这件事，我们今天可能只有一半的成果」。工程师容易忽略：很多 AI 项目不是败在技术，而是败在激活环节。

## 「惊艳感坍塌」：只做第一波，一两个月内就会被颠覆

成功上线几个月后，用户从走廊里夸你，变成回来抱怨「这个做不了了」「我看到别的 AI 产品能做」——他称之为「惊艳墙效应的坍塌」：你很酷，然后变成习惯，再变成基线，用户一夜之间就会切换到更好的产品。

所以产品要一波接一波地抬门槛，他们看到的是这样一条演进路线：
1. **和你的数据对话**——从几百个仪表盘和对分析师的依赖里解放出来；
2. **自动化工作流**——靠 MCP 连接和集成，销售用智能体监控收件箱和 Slack、起草客户回复存进 Gmail、审阅后发出；
3. **团队自助构建**——过去市场团队永远排在 IT 积压任务里，现在他们能自己建团队技能、自定义仪表盘、应用、自动化和告警；
4. **超个性化**——结合客户实时情境，为每个销售甚至每个客户定制。

## 不追求完美架构：80% 的 PRD 和现在对不上

他见过很多大企业客户还在「试图购买那套完美的架构」、反复测试框架——但他们不构建、不上线、不学习。而他自己的团队恰恰相反：首次上线时智能体指令长达九页，版本靠一个 Google Doc 管理，就这样发给了 6000 人。之后才逐步补上 CI/CD、评估基础设施（单元测试、路由测试）、技能库、渐进式披露等。

如今对比项目初期的 PRD 和架构图，「80% 都对不上」。他们的冲刺里 60%-70% 是加新功能、提质量，30%-40% 是用新技术不断重新架构。他的建议：别过度投资当前架构、别搞六到九个月的超级架构项目，用今天的现有技术栈在几周甚至几天内交付，坦然接受持续重架构——你等待越久，竞争对手就多拿三四个月的客户。

## 投资日志：反馈回路是指数增长的来源

最后一条强烈建议：投资你的日志。他们用 LLM 对 120 万个问题做大规模分类（技术上很有趣、数据科学家很爱做），得到极细的主题细分，能实时看到功能缺口——用户问了答不上、对智能体爆粗口、重复提问的位置。

这个日志对销售赋能是座金矿：过去要每周访谈约 100 个销售才能摸清话题变化和知识缺口，现在问一个问题、一两分钟就有答案；再接上 Confluence、Jira、Slack、PRD，几分钟内自动生成作战卡和销售赋能文档，再喂回智能体。他们还能发现销售组织里不同团队在从不同角度瞄准相似客户账户却互不知情，然后主动撮合。他说，头几个功能最难做，但一旦开始挖掘日志，「曲棍球杆式的指数增长就真的开始发生了，非常神奇」。

## 本集带走

- **质量重于覆盖面**：宁答 50 题 95% 对，不答 100 题 70% 对。前五个问题的体验决定用户回不回来，信任丢了要花十倍力气赢回。
- **先写 150 个真实问题再动手**：对照销售流程列出卖家的真实问题，用它们当验收标准，而不是先堆数据源。
- **分阶段发布**：试点磨精度 → 10% beta 验证 MVP 和留存（他们做到 70%+ 回访留存）→ 再正式发布。
- **变革管理占大头**：发布后 60-70% 的时间投入销售会议、演示、团队仪表盘和销售负责人背书——很多 AI 项目败在激活，不是败在技术。
- **警惕惊艳感坍塌**：用户满意时就要保持警惕，规划一两个月后的下一波功能；只做「和数据对话」这一层，很快会被切换掉。
- **别追完美架构**：别搞六到九个月的长期项目，几周几天交付，接受持续重架构（他们的冲刺 30-40% 时间在重架构）。
- **投资日志[[反馈回路|反馈回路]]**：用 LLM 分类用户问题，实时发现缺口、自动生成销售赋能材料、做团队撮合——这是增长曲线翘起来的地方。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">用户信任极难赢得，却能在一夜之间失去。</span>  
> *User trust is earned extremely hard, and it's lost overnight.*  
> <span class="qm">—— Sait Izmit · [03:31]</span> ^q1

> <span class="qz">如果他们不喜欢看到的答案，你要花十倍的功夫才能赢回他们——如果你还能赢回来的话，对吧？</span>  
> *If they don't like what they see, it's 10 times more effort for you to win them back, if you can ever win them back, right?*  
> <span class="qm">—— Sait Izmit · [03:52]</span> ^q2

> <span class="qz">这个星球上没有一个人能跟得上那么多的数据。</span>  
> *There's not a single human on this planet can stay on top of that much data.*  
> <span class="qm">—— Sait Izmit · [02:23]</span> ^q3

> <span class="qz">我无能为力，如果人们连五分钟都不肯花来试用产品，那不是产品的错，对吧？</span>  
> *I cannot do anything, it's not the product's fault if people are not even taking five minutes to try the product, right?*  
> <span class="qm">—— Sait Izmit · [07:40]</span> ^q4

> <span class="qz">我想在这里传达的主要信息是，如果你只做到第一个阶段，如果你只是停留在那里，你会在一两个月内被颠覆，对吧？</span>  
> *I think the main message I want to give here is, if you just do the first stage, and if you just wait there, you will get disrupted in a month or two, right?*  
> <span class="qm">—— Sait Izmit · [11:14]</span> ^q5

> <span class="qz">如果我去看我们在项目开始时写的 PRD 和架构图，如果我和我们现在拥有的这个架构相比，80% 都对不上。</span>  
> *If I look at the PRD and the architectural diagram we wrote in the beginning of the project, if I compare it to this architecture we have now, 80% of it doesn't match.*  
> <span class="qm">—— Sait Izmit · [13:17]</span> ^q6

> <span class="qz">比如，如果你看我们的冲刺，也许 60%-70% 的工作是在添加新功能、提升质量和各种各样的事情，但有 30%-40% 的工作是我们在不断地用新技术重新架构。</span>  
> *So, like, if you look at our sprints, like, maybe 60-70% of the work we are doing is adding new features, improving quality, and all kinds of things, but 30-40% of the work is that we are constantly re-architecting with the new technology.*  
> <span class="qm">—— Sait Izmit · [13:27]</span> ^q7

> <span class="qz">头几个功能很难做出来，接下来的就容易了，然后一旦你开始挖掘你的日志，这种曲棍球杆式的指数增长就真的开始发生了，非常神奇。</span>  
> *The first features are difficult to get out, the next ones are easy, and then once you start tapping into your logs, this hockey stick exponential thing actually starts happening, and it's magical.*  
> <span class="qm">—— Sait Izmit · [16:20]</span> ^q8

> <span class="qz">如果你追求覆盖面，你会搬起石头砸自己的脚，好吗？</span>  
> *If you go for the coverage, you are going to shoot yourself in the foot, okay?*  
> <span class="qm">—— Sait Izmit · [16:43]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-26-talks-the-building-blocks-of-gtm-orchestration|RAMP 的 GTM 编排实验：一句话意图，全渠道自动执行]]<span class="pd-rz">同公司:Snowflake · 同概念:MCP、智能体 (agent)、护栏 (guardrails)</span>
- [[2025-06-03-talks-pioneering-agentic-applications-with-dec|三位 AI 智能体公司 CEO 圆桌：从 Copilot 到智能体，还要几年？]]<span class="pd-rz">同概念:MCP、智能体 (agent)、护栏 (guardrails)</span>
- [[2025-10-26-lennys-how-block-is-becoming-the-most-ai-native|Block CTO：代码质量与产品成功毫无关系，打造 AI 原生公司靠的是组织重组]]<span class="pd-rz">同公司:Snowflake · 同概念:MCP、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同公司:Snowflake · 同概念:智能体 (agent)</span>
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|SaaS 不会死,PM 迎来黄金期:Dan Shipper 的 AI 工作预测]]<span class="pd-rz">同公司:Cowork · 同概念:智能体 (agent)</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>

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
