---
title: 用 Cursor 重构遗留代码库：从 PHP 到 React 的完整工作流
podcast: 精选演讲
date: 2026-09-13
source_url: undefined
duration: "58:41"
type: episode
cover: "#64748b"
description: Cursor 现场工程师 Amrita 演示重构遗留代码库的完整流程：审计、规划、拆工单、云端智能体执行与自动化维护。
host: "[[Regan]]"
cohosts: ["[[Amrita]]"]
companies: ["[[Cursor]]"]
concepts: ["[[智能体]]", "[[云端智能体]]", "[[重构]]", "[[计划模式]]", "[[MCP]]", "[[PR]]", "[[测试覆盖率]]", "[[自动化]]", "[[功能开关]]", "[[harness]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-03-talks-refactoring-legacy-codebases#post","headline":"用 Cursor 重构遗留代码库：从 PHP 到 React 的完整工作流","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-03-talks-refactoring-legacy-codebases","mainEntityOfPage":"https://talk.solomind.cc/2026-09-03-talks-refactoring-legacy-codebases","description":"Cursor 现场工程师 Amrita 演示重构遗留代码库的完整流程：审计、规划、拆工单、云端智能体执行与自动化维护。","datePublished":"2026-09-13","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Regan"},{"@type":"Person","name":"Amrita"},{"@type":"Organization","name":"Cursor"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"云端智能体 (cloud agent)"},{"@type":"Thing","name":"重构 (refactoring)"},{"@type":"Thing","name":"计划模式 (plan mode)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"PR"},{"@type":"Thing","name":"测试覆盖率 (test coverage)"},{"@type":"Thing","name":"自动化 (automations)"},{"@type":"Thing","name":"功能开关 (feature flag)"},{"@type":"Thing","name":"harness"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"用 Cursor 重构遗留代码库：从 PHP 到 React 的完整工作流","item":"https://talk.solomind.cc/2026-09-03-talks-refactoring-legacy-codebases"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>用 Cursor 重构遗留代码库：从 PHP 到 React 的完整工作流</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 用 Cursor 重构遗留代码库：从 PHP 到 React 的完整工作流

<div class="pd-byl"><b>Amrita</b> · Cursor 现场工程师 · 2026-09-13</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-03-talks-refactoring-legacy-codebases.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">这是 Cursor 内部的一个巨大差异化优势——多仓库云端智能体，因为现实是，除非你有 monorepo 或者在小仓库里工作，你很可能确实希望一个仓库的上下文进入另一个仓库。</div><div class="a">— Amrita <button class="pd-ts" data-t="30:16" data-who="Amrita" data-en="So this is a huge differentiator within Cursor, multi-repo cloud agents, because the reality is, unless you have a monorepo or unless you're working in smaller repos, you probably do want context from one repo going into another." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Regan]] · [[Amrita]]
>
> **公司** [[Cursor]]
>
> **概念** [[智能体]] · [[云端智能体]] · [[重构]] · [[计划模式]] · [[MCP]] · [[PR]] · [[测试覆盖率]] · [[自动化]] · [[功能开关]] · [[harness]]

这一集是 [[Cursor|Cursor]] 官方的一场实操研讨会，主题是「用 Cursor [[重构|重构]]遗留代码库」。主讲人是 [[Amrita|Amrita]],她在加入 Cursor 做现场工程师之前是一名软件工程师，今天她用真实的 WordPress 开源仓库做演示——那里面大量组件还是 PHP 写的老代码——现场跑一遍完整的迁移流程，把 PHP 组件迁移到 React。她开场抛出的钩子很具体：同样的迁移，[[云端智能体|云端智能体]]可以合上笔记本让它自己干，一次完整迁移可能只花三四美元。

先说为什么是 Cursor。它有四种使用形态：IDE(VS Code 的一个 fork,喜欢原版调试器和扩展的人可以留下)、独立的[[智能体|智能体]]窗口(你的智能体按仓库排在旁边，是官方眼中的发展方向)、cursor CLI(适合保留 TMUX 工作流、或在 Android Studio/Xcode 这类没有原生 Cursor 方案的 IDE 里干活)，以及今天的主角 Cursor Cloud Agents——运行在远程 Linux 虚拟机上的自主智能体，你可以启动任务后合上笔记本，它继续跑，完成后用视频、截图和测试证明自己确实做完了。云端智能体还能接进 Slack(比如自动检查在线文档和实现是否脱节、开 [[PR|PR]] 供人审查)和 iOS 移动应用(可以从手机启动智能体、从本地转到云端继续处理)。

模型灵活性是另一个卖点。Cursor 聚合了各大前沿实验室的模型加开源模型(Kimi、GLM、自家的 Composer,以及刚发布的 Grok 4.6),但真正的价值在于**组合**：官方做过一个从零重建 SQLite 的案例研究，用一个更重型的模型做规划、一个更偏执行的模型写代码，总成本比单用 Fable 或单用 GPT-5.5 便宜得多。

Amrita 自己的选择是：写计划用 GPT-5.6 Sol,因为它「写得比 Grok 好」；云端批量执行用 Grok 4.6,因为她「通常避开 Anthropic 模型，它们往往比较贵」。而且模型不是全部——模型之上还有 Cursor 的 [[harness|harness]](工具执行、缓存管理、动态上下文管理、上下文组装这一层)，这才是重构大代码库时真正发力的地方。

## 第一步：用 Canvas 审计 + Plan 模式定策略

方法论一共四步：审计、规划、拆工单、云端执行，最后加一层[[自动化|自动化]]防回潮。

审计用内置的 slash canvas:一句话让它分析代码库的[[测试覆盖率|测试覆盖率]]、标出缺口、并展示迁移到 React 后应在哪里补测试。Canvas 会生成可交互的可视化——按管理后台页面列出覆盖情况、标注「建议接下来迁移的」「之后的」「已在 React 里的」，还能一句话改成柱状图。

Canvas 可以发布成链接分享给同团队的人(团队外打不开)，也能下载成 PDF。Amrita 把它当作迁移前快速「可视化代码库」的标准动作。

规划切到 [[计划模式|plan 模式]](输出是 markdown 文档，它永远不会在 plan 模式里写代码)，并让她把要求写具体：迁移遗留组件、加测试验证无回归、**画出当前架构图和迁移后的目标架构图**(Cursor 用 mermaid 画图，也可以连到 Lucidchart、FigJam 输出)。关键动作是让智能体尽早来问你：它内置 Ask Question 工具，会追问「遗留组件太模糊，范围是什么？

」,你可以配置成至少问五个问题再动笔。计划遵循存在 Confluence 里的统一模板，产出包含功能/非功能需求、高层方案、现状与目标架构图、API 设计、数据模型和 [[功能开关|feature flag]] 变更。

## 第二步：用插件把计划拆成 JIRA 工单

计划写好后，让她「把计划拆分为 JIRA 工单，发布到 Atlassian 的 WordPress 空间」。这靠的是 Cursor 的插件体系：Atlassian(Jira)、Datadog、Figma,以及新上的 Google Drive / Google Calendar / Gmail 都能直接接。

生成的每个工单自带目标、范围、验收标准、测试、依赖和备注，并自动分成多个阶段。多个不相关的任务还能开多任务模式并行处理。

## 第三步：交给云端智能体，合上笔记本

接下来是本场最有含金量的部分：在 cursor.com/agents 里，她只说「找到 WordPress 看板上所有指派给我的 JIRA 工单并全部处理，**每个工单单独开一个 PR**,并用截图或录像验证更改」。

几个关键细节：

- **多仓库**：云端智能体可以一次连多个仓库跨服务工作，官方称之为巨大差异化优势——改一个内部 SDK 的字段，所有依赖的客户端服务都能一起更新。
- **成本**：云端智能体因为跑得久、还会回传截图视频，token 消耗比本地高，所以要选便宜快的模型(Grok 4.6、Composer 2.5、GPT-5.6),一次完整迁移约三四美元。
- **环境**：首次搭建约 10-20 分钟，之后以「build」保存，后续秒起；本地的 [[MCP|MCP]](Atlassian、Datadog 等)可以直接搬进云端。
- **自我验证**：云端智能体跑在带鼠标的 Linux 虚拟机上，能自己打开应用点击测试。她展示了之前一次 PHP→React 迁移的成品视频——Cursor 自己点登录、看评论、看用户，给视频各段加标注，证明迁移没引入回归。不想等的话还有「长时间运行智能体」模式，适合依赖更新、Python 版本升级这类要跑到测完为止的活。
- **多 PR 而不是巨型 PR**:一个塞几千行的 PR 根本没法 review,正确姿势是一工单一 PR,然后在不同 PR 之间切换着看各自覆盖了什么。

Cursor 内部实际的用法：周五让 Cursor 清积压工单，周一回来 review PR;分布在不同时区的团队可以靠云端智能体异步接力——一个团队睡觉，另一个团队接上。

## 第四步：用自动化防回潮

自动化(Automations)本质上就是「被调度或被触发的云端智能体」，触发方式包括时间、事件(PR 被打开、标签变更)、Slack/Teams 新消息、自定义 webhook(常见用法：Jira 工单从 to do 拖到 in progress 就自动触发)。

Amrita 现场建了一个「feature flag 清理器」：每周扫一遍仓库，找出过去 30 天没被使用的陈旧 feature flag,和 Datadog、Sentry 交叉核对确认没有问题，提交删除的 PR 并附上确认无回归的测试，完成后 Slack 私信她 review。她点破了这步的意义：遗留代码库沦落到要大重构，往往就是因为不够主动——依赖没更新、事情没提前做。

自动化让你「防患于未然」，从被动救火变成主动维护。不想从零建的话有现成模板：补测试覆盖、扫漏洞、事件分流(他们自己 on-call 就在用类似的——凌晨三点不叫醒人，先自动初查再发简报给值班者)。

## 问答里值得记的几点

- 云环境的 API 密钥、机密、IP 允许列表都在环境设置里配置；企业数据存哪、存多久有专门文档。
- 私有网络接入：不在 AWS 用 Cloudflare Tunnel,在 AWS 用 PrivateLink,也有 Tailscale/VPN 方案；还有自托管云智能体选项，但他们更常看到安全要求最高的客户直接用托管方案。
- 团队协作风格的学习：Continual Learning 插件会往 agents.md 里写你的写作/编码风格，可做团队级；automations 则各自有 memories.md 文件，每次运行后从你的反馈中学习、越跑越好。
- 想了解 Cursor Cloud 能访问什么，有一个 Cursor Cloud MCP,可以用来诊断失败的 run 和环境配置问题。
- 本地可以用「@ chats」引用过去的对话作上下文，但这套是否延伸到云端她当场测了、表示要再确认。

## 本集带走

- **四步法**：Canvas 审计覆盖率 → plan 模式定策略(要求画现状+目标架构图)→ Atlassian MCP 拆成带验收标准的分阶段 JIRA 工单 → 云端智能体逐单执行、每单一 PR。
- **让智能体先问你**：进 plan 模式后主动让它追问范围(可配置至少五问)，比事后返工便宜得多。
- **云端选便宜快的模型**：云端跑得久、耗 token 多，规划用重型模型、执行用便宜的，SQLite 案例证明组合比单模型便宜得多。
- **永远多 PR,不搞巨型 PR**:几千行的 PR 没法 review;一工单一 PR 才能逐个核对覆盖范围。
- **用自动化消灭未来的重构**：feature flag 清理、依赖更新、漏洞扫描这类活交给定时/事件触发的智能体，遗留代码是「不够主动」攒出来的。
- **让智能体自我验证**：要求它交截图、录屏、端到端测试来证明没引入回归，你对它的信任才立得住。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">这是 Cursor 内部的一个巨大差异化优势——多仓库云端智能体，因为现实是，除非你有 monorepo 或者在小仓库里工作，你很可能确实希望一个仓库的上下文进入另一个仓库。</span>  
> *So this is a huge differentiator within Cursor, multi-repo cloud agents, because the reality is, unless you have a monorepo or unless you're working in smaller repos, you probably do want context from one repo going into another.*  
> <span class="qm">—— Amrita · [30:16]</span> ^q1

> <span class="qz">这些都是你只能在 Cursor 得到的模型，这些云端智能体能以非常快速高效的方式使用它们，而且一次完整的迁移可能只花你三四美元。</span>  
> *These are all models you can only get in Cursor because these cloud agents are able to use them in a really fast, efficient way and only cost you maybe like three or four dollars for an entire migration.*  
> <span class="qm">—— Amrita · [31:00]</span> ^q2

> <span class="qz">我还想补充的一点是，Cursor 云端智能体可能是很长一段时间以来我在任何 AI 产品中见过的最好的功能之一。</span>  
> *Some things that I do like to add is Cursor Cloud Agents is probably one of the best features I've seen for any AI product in a while.*  
> <span class="qm">—— Amrita · [47:54]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-09-03-talks-model-selection-token-efficiency|Token 都烧在哪了：Cursor 工程师教你把 AI 编程成本打下来]]<span class="pd-rz">同公司:Cursor · 同概念:harness、plan 模式 (plan mode)、智能体 (agent)、MCP</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同公司:Cursor · 同概念:plan 模式 (plan mode)、智能体 (agent)、MCP</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Cursor · 同概念:MCP、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:harness、MCP、智能体 (agent)</span>
- [[2026-08-18-lennys-i-tested-grok-bot-grok-46-and-cursor|GrokBot、Origin 与 Grok 4.6 实测]]<span class="pd-rz">同公司:Cursor · 同概念:MCP、智能体 (agent)</span>
- [[2026-08-24-pg-srini-raghavan-podcast|Freshworks CPO：用 AI PDLC 把发布周期从六个月压到两周]]<span class="pd-rz">同公司:Cursor · 同概念:MCP、智能体 (agent)</span>

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
