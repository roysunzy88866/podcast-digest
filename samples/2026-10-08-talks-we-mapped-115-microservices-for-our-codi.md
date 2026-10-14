---
title: 115 个微服务画成一张图，让 AI 编程助手不再瞎猜
podcast: 精选演讲
date: 2026-10-14
source_url: undefined
duration: "17:16"
type: episode
cover: "#64748b"
description: Postman 工程师 Kamalakannan Nandagopal 讲他们如何构建 API 上下文图谱，大幅提升编程智能体的实战表现。
guests: ["[[Kamalakannan Nandagopal]]"]
companies: ["[[Postman]]"]
concepts: ["[[编码智能体]]", "[[上下文图]]", "[[微服务]]", "[[API]]", "[[代码搜索]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-08-talks-we-mapped-115-microservices-for-our-codi#post","headline":"115 个微服务画成一张图，让 AI 编程助手不再瞎猜","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-08-talks-we-mapped-115-microservices-for-our-codi","mainEntityOfPage":"https://talk.solomind.cc/2026-10-08-talks-we-mapped-115-microservices-for-our-codi","description":"Postman 工程师 Kamalakannan Nandagopal 讲他们如何构建 API 上下文图谱，大幅提升编程智能体的实战表现。","datePublished":"2026-10-14","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Kamalakannan Nandagopal"},{"@type":"Organization","name":"Postman"},{"@type":"Thing","name":"编码智能体 (coding agent)"},{"@type":"Thing","name":"上下文图 (context graph)"},{"@type":"Thing","name":"微服务 (microservices)"},{"@type":"Thing","name":"API"},{"@type":"Thing","name":"代码搜索 (code search)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"115 个微服务画成一张图，让 AI 编程助手不再瞎猜","item":"https://talk.solomind.cc/2026-10-08-talks-we-mapped-115-microservices-for-our-codi"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>115 个微服务画成一张图，让 AI 编程助手不再瞎猜</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 115 个微服务画成一张图，让 AI 编程助手不再瞎猜

<div class="pd-byl"><b>Kamalakannan Nandagopal</b> · Postman 资深工程师 · 2026-10-14</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-08-talks-we-mapped-115-microservices-for-our-codi.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">当我们审视这个问题时，我们意识到，在分布式系统和微服务架构中，API 就是你的上下文层。</div><div class="a">— Kamalakannan Nandagopal <button class="pd-ts" data-t="04:01" data-who="Kamalakannan Nandagopal" data-en="And when we looked at this, what we realized is in a distributed systems and microservices architecture, APIs are the context layer for you." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Kamalakannan Nandagopal]]
>
> **公司** [[Postman]]
>
> **概念** [[编码智能体]] · [[上下文图]] · [[微服务]] · [[API]] · [[代码搜索]]

[[Kamalakannan Nandagopal|Kamalakannan Nandagopal]] 是 [[Postman|Postman]] 的资深工程师。Postman 不只有那个测试接口的桌面应用，它的云端功能背后跑着 115 个以上的[[微服务|微服务]]、数千个 REST 接口。

他这场演讲讲的是一件事：

AI 编程助手在真实的大系统里经常抓瞎，而把整个系统的 [[API|API]] 关系画成一张上下文图谱，可能就是解药。

## 编程智能体很强，但真实系统不是单仓库

编程助手的进化路径大家都不陌生：

先是 Copilot 时代的行级自动补全，然后是 Composer、Claude Code 时代的整库重构和一次性修 bug，现在是能端到端干活的全自动智能体——自己改代码、验证、发合并请求，甚至审核别人的合并请求。

但 Nandagopal 指出，智能体擅长的是全新项目或单个项目内的小修小补。

生产系统复杂得多：微服务拆得到处都是、部署在多个环境、代码散落在几百个仓库里。

**智能体缺的不是写代码的能力，而是对整个系统的理解**。

## 文档、技能、记忆，都不够用

想给智能体补上下文，通常有几条路，但各有短板。

文档是第一选择，但开发者讨厌写文档，全靠大模型自己生成和维护的文档，研究显示质量会随时间快速退化，还是需要人来把关。

技能和 MCP(一种给智能体接外部工具的协议)好不好用，完全取决于喂给它的上下文。

智能体记忆听起来不错——把老员工脑子里的隐性经验存进智能体——但目前它基本绑在单个用户身上，团队之间怎么共享这些记忆，业界还没有成熟做法。

有意思的是，转机来自公司另一头。

Postman 的市场团队在搭建面向客户的商业智能体时，已经把多来源的杂乱数据整理成结构化的中央上下文层，用检索加知识图谱的管线喂给各个智能体。

工程团队看了之后意识到：在微服务架构里，API 就是天然的上下文层。

## 把整个系统画成一张图，每条数据都落到代码行

于是他们开始构建 Postman 的 [[上下文图|API 上下文图谱]]：

盘点生产环境里的每一个微服务，找出每个服务暴露的每个接口，一路追到实现它的具体代码行；

再画出服务之间怎么互相调用、前端和命令行工具怎么连后端、数据怎么一路流向数据库和缓存。

最后用大模型把这些全部索引成一个集中的上下文图层。

有一条铁律：

**图谱里的每个数据点必须锚定在硬事实上**——要么是代码库里实实在在的一行代码，要么是生产环境遥测里的真实调用链。<button class="pd-ts" data-t="05:34" data-who="嘉宾" data-en="We gave all of this data and we indexed all of this data using LLM to produce a centralized and effective context graph layer. But one key principle that we had in mind always was every single data point that landed on the context graph always had to be grounded down in a hard truth." aria-label="回原文"></button>

图谱建好之后，熟悉的架构模式自动浮现出来：中心是一团紧耦合的核心服务，属于最关键的层级；

边缘则挂着几个臃肿不堪的大服务。

## 效果如何？拿真实的合并请求来测

测法很实在：

从 Postman 自己的代码仓库里挑真实的合并请求和设计讨论，还原开发者的意图和最终决定，做成评测题，再拿事后真实采纳的决策当标准答案。

对比对象包括接了图谱的 Postman 智能体、只靠 GitHub [[代码搜索|代码搜索]]的通用智能体，以及把图谱当作技能提供的 Claude Code。

第一类场景是 API 发现：想知道某个功能该调哪个接口。现实系统里几百个接口，好几个可能干的是同一件事。

这是纯搜索任务，图谱方案明显胜过代码搜索。

## 那个加一个字段的经典事故，智能体能兜住

真正精彩的是 API 设计与重构场景。

Nandagopal 讲了个每个开发者都眼熟的故事：功能上线前，依赖方突然说，能不能在接口里加个自由格式的 JSON 字段，以后用。

开发者没时间细想，加上，再留个待办说两周后来定结构。

功能顺利上线，两周后回来一看——那个本该只传一个属性的字段，现在传着 15 个属性，可能有 5 个、10 个服务都在往里塞东西，没人说得清每个调用方传的数据长什么样。

这类分析对人类极难：

找到每个调用方就不现实，生产日志常常因隐私拿不到细节，就算看清了数据形状，也不知道对方为什么这么传。

但**接了图谱的 Postman 智能体几乎完美解决**——因为它不仅知道每个调用方是谁，还能下钻到每处实现的具体代码，理解上下文，很快梳理出每个调用方传的独特数据形状 <button class="pd-ts" data-t="11:11" data-who="嘉宾" data-en="And the thing that helped in this case is, first of all, the context graph having an awareness of every single consumer of an API. But not just that, but having the drill down or the ground truth" aria-label="回原文"></button>。

纯代码搜索的表现很差；Claude Code 配合技能稍好，但折腾几轮之后就放弃，等着用户来救。

第三类是影响评估：改一个接口会波及谁？要出 V3 接口，先得弄清 V2 被怎么用。

这里图谱不仅质量高，token 消耗还只有代码搜索的一半甚至三分之一。

## 图谱会过期，过期就没信任

但不是每次都赢。有一个评测让智能体分析某个合并请求影响的下游服务，结果惨败，分数低、token 还烧得猛。

调查后发现原因很简单：写评测和跑评测之间隔了一段时间，期间出现了新的调用方。

结论很直白——**图谱不仅要建，还得持续同步**，任何延迟都会造成结果偏差；结果一有偏差，开发者立刻失去信任，然后就不用了。<button class="pd-ts" data-t="13:05" data-who="嘉宾" data-en="And when we investigated into it and then tried to understand why it was failing, what we realized was that there were new consumers between the time where the eval was written and the time the evaluation was run." aria-label="回原文"></button>

检测新增的接口和依赖很重要，检测被删掉的同样重要。

==这事儿有多普遍==？

他们回头看流量最高的 10 个仓库的合并请求，约 75% 都会影响到 API——要么改接口的外部行为，要么接入新接口，都可能引发下游连锁反应。<button class="pd-ts" data-t="13:34" data-who="嘉宾" data-en="Not only detecting new APIs and new dependencies, detecting removals of APIs and removal of dependencies is equally important and that can also lead to confusions and problems." aria-label="回原文"></button>

## 意外收获：让智能体做全公司架构体检

图谱在手，就能问以前问不了的问题。

他们让 Postman 智能体对整个工程生态做端到端的架构评审，它产出了一份 21 页的报告，列出了所有薄弱环节：

可能导致事故的循环依赖、标志着技术债的高风险长期迁移、等着出事的单点故障、实现和遥测对不上的盲区，还给 CEO、CTO 和资深工程师分别列了行动清单。<button class="pd-ts" data-t="14:27" data-who="嘉宾" data-en="So this is where the light bulb moment happened for us. When we asked the Postman agent to do this, it produced a 21-page engineering report going through every single weakness and points of vulnerability." aria-label="回原文"></button>

Nandagopal 称这是他们的灵光一现时刻。

下一步，他们想把业务语义层接进来，并让图谱能回答更深的为什么：

这个数据模型为什么存在、为什么用这个接口而不用那个——这些答案会直接改善后续的编程决策。

## 本集带走

- 编程智能体在单仓库里很强，在跨几百个仓库的分布式系统里缺的是上下文，而 API 是微服务架构天然的上下文层。
- Postman 为 115 个以上微服务建了 API 上下文图谱，每个数据点都锚定在具体代码行或生产调用链上，不靠猜。
- 用真实合并请求做评测：在 API 发现、设计重构和影响评估场景，图谱方案在质量和 token 效率上都大幅胜过纯代码搜索。
- 图谱必须持续更新，一旦与事实脱节，结果出错，开发者信任随之崩塌。
- 约 75% 的合并请求会影响 API;图谱还能让智能体产出 21 页的全公司架构体检报告，找出循环依赖、单点故障等问题。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">当我们审视这个问题时，我们意识到，在分布式系统和微服务架构中，API 就是你的上下文层。</span>  
> *And when we looked at this, what we realized is in a distributed systems and microservices architecture, APIs are the context layer for you.*  
> <span class="qm">—— Kamalakannan Nandagopal · [04:01]</span> ^q1

> <span class="qz">所以智能体的能力只取决于给它们的上下文。</span>  
> *So agents are only as good as the context that they're given.*  
> <span class="qm">—— Kamalakannan Nandagopal · [04:30]</span> ^q2

> <span class="qz">但如果你把文档完全交给 LLM 来编写和维护，研究指出，纯由 LLM 维护和编写的文档往往会随时间呈指数级退化。</span>  
> *But if you offload documentation purely to LLMs to author and maintain, research points out that purely LLM-maintained and written documentation tends to degrade exponentially over time.*  
> <span class="qm">—— Kamalakannan Nandagopal · [02:26]</span> ^q3

> <span class="qz">但我们都知道，skills 和 MCP 的效果只取决于提供给它们的上下文。</span>  
> *But we all know skills and MCPs are only as good as the context that they're provided to.*  
> <span class="qm">—— Kamalakannan Nandagopal · [02:44]</span> ^q4

> <span class="qz">但我们心中始终坚守的一个关键原则是：每一条落到上下文图谱上的数据点，都必须扎根于一个硬事实。</span>  
> *But one key principle that we had in mind always was every single data point that landed on the context graph always had to be grounded down in a hard truth.*  
> <span class="qm">—— Kamalakannan Nandagopal · [05:34]</span> ^q5

> <span class="qz">两周后，开发者回来发现，那个本应发送一个属性的特定属性，现在已经有 15 个属性了。</span>  
> *Two weeks later, the developer comes back and finds out that that one particular property, which is supposed to send one attribute, now has 15 attributes.*  
> <span class="qm">—— Kamalakannan Nandagopal · [09:57]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-08-20-talks-prototyping-as-leadership-how-a-cto-ship|管理者日程突然能写代码了：CTO 的通宵智能体工作流]]<span class="pd-rz">同公司:Claude Code · 同概念:编码智能体 (coding agent)</span>
- [[2026-09-10-talks-the-spatial-harness-bringing-agents-to-t|把画布交给智能体：TLDraw 的空间协作实验]]<span class="pd-rz">同公司:Claude Code · 同概念:编码智能体 (coding agent)</span>
- [[2026-09-27-talks-orchestras-not-factories-how-the-fastest|管弦乐团而非工厂：编码智能体时代的六条构建者原则]]<span class="pd-rz">同公司:Claude Code · 同概念:编码智能体 (coding agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-12-a16z-why-companies-are-becoming-a-series-of-l|A16Z 消费投资合伙人 Anish Acharya：别怕“永久下层”，公司正在变成一串循环]]<span class="pd-rz">同公司:Claude Code · 同概念:编码智能体 (coding agent)</span>
- [[2026-10-08-talks-turning-agent-memory-into-skills-that-wo|让智能体的记忆变成真正能用的技能]]<span class="pd-rz">同概念:API 上下文图谱 (context graph)、智能体记忆 (agent memory)</span>
- [[2025-06-08-lennys-inside-mercado-libre-sebastian-barrios|MercadoLibre 的 18000 人工程团队怎么管]]<span class="pd-rz">同概念:微服务 (microservices)</span>

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
