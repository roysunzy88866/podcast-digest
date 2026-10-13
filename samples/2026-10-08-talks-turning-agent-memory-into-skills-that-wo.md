---
title: 让智能体的记忆变成真正能用的技能
podcast: 精选演讲
date: 2026-10-13
source_url: undefined
duration: "18:31"
type: episode
cover: "#64748b"
description: Neo4j 产品经理 Will Lyon 讲解如何把智能体的记忆从「可检索」升级为「可行动」的知识图与技能。
guests: ["[[Will Lyon]]"]
companies: ["[[Neo4j]]"]
concepts: ["[[智能体]]", "[[智能体记忆]]", "[[上下文图]]", "[[知识图谱]]", "[[推理记忆]]", "[[技能]]", "[[APE]]", "[[NAMS]]", "[[技能蒸馏]]", "[[技能治理]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-08-talks-turning-agent-memory-into-skills-that-wo#post","headline":"让智能体的记忆变成真正能用的技能","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-08-talks-turning-agent-memory-into-skills-that-wo","mainEntityOfPage":"https://talk.solomind.cc/2026-10-08-talks-turning-agent-memory-into-skills-that-wo","description":"Neo4j 产品经理 Will Lyon 讲解如何把智能体的记忆从「可检索」升级为「可行动」的知识图与技能。","datePublished":"2026-10-13","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Will Lyon"},{"@type":"Organization","name":"Neo4j"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体记忆 (agent memory)"},{"@type":"Thing","name":"上下文图 (context graph)"},{"@type":"Thing","name":"知识图谱 (knowledge graph)"},{"@type":"Thing","name":"推理记忆 (reasoning memory)"},{"@type":"Thing","name":"技能 (skills)"},{"@type":"Thing","name":"APE"},{"@type":"Thing","name":"NAMS"},{"@type":"Thing","name":"技能蒸馏 (skill distillation)"},{"@type":"Thing","name":"技能治理 (skill governance)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"让智能体的记忆变成真正能用的技能","item":"https://talk.solomind.cc/2026-10-08-talks-turning-agent-memory-into-skills-that-wo"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>让智能体的记忆变成真正能用的技能</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 让智能体的记忆变成真正能用的技能

<div class="pd-byl"><b>Will Lyon</b> · Neo4j 产品经理 · 2026-10-13</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-08-talks-turning-agent-memory-into-skills-that-wo.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">有时我觉得我们可能处于某种失忆循环中，对吧？我们的智能体经历推理阶段、行动，成功完成了一些任务，但随后就有点忘记了它们学到的东西。</div><div class="a">— Will Lyon <button class="pd-ts" data-t="00:41" data-who="Will Lyon" data-en="Sometimes I feel like we're in maybe like an amnesiac loop, right? Where our agents go through this reasoning phase, acting, they successfully complete some task, but then kind of forget what they've learned." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Will Lyon]]
>
> **公司** [[Neo4j]]
>
> **概念** [[智能体]] · [[智能体记忆]] · [[上下文图]] · [[知识图谱]] · [[推理记忆]] · [[技能]] · [[APE]] · [[NAMS]] · [[技能蒸馏]] · [[技能治理]]

[[智能体|智能体]]跑完一个任务，学到的东西常常转头就忘。

[[Neo4j|Neo4j]] 的产品经理 [[Will Lyon|Will Lyon]] 在这场演讲里说，今天的记忆系统大多只是把文本存起来、用时捞回来，但这远远不够——智能体需要的是能行动的知识，最好还能把经验自动沉淀成可复用的[[技能|技能]]。

## 为什么能想起来不等于会用

现在的记忆系统基本一个套路：把文本切成小块存起来，检索时找最相关的几块塞进上下文，指望智能体自己想明白。

问题是，**回忆不等于可行动的知识**。

一个典型麻烦是缺少统一的同一事物表示。

比如 Nguyen 医生，在不同对话里可能被叫成 Robert N. Nguyen、心脏科医生、Nguyen 大夫——系统不知道这是同一个人。

所以智能体需要的知识必须是连接的、有类型的、可追溯的，而不只是可检索的 <button class="pd-ts" data-t="01:39" data-who="嘉宾" data-en="One challenge we run into is, for example, we don't have a canonical representation of a thing. If we have three different ways that we refer to Dr. Nguyen, Robert N, the cardiologist, depending on the context of this discussion," aria-label="回原文"></button>。

## 记忆分三种，推理过程也要存下来

Neo4j 把[[智能体记忆|智能体记忆]]看成一个连接的图，分短期、长期和[[推理记忆|推理记忆]]三类。前两种好理解：对话消息和从中抽出的实体。

第三种是他们特别强调的——**把智能体的推理过程当作一等公民存下来**。

具体说，就是记录决策痕迹：每个决策关联着证据、调用了哪些工具、结果如何，甚至烧了多少 token、花了多少时间 <button class="pd-ts" data-t="04:41" data-who="嘉宾" data-en="An agent decided. And this is typically represented as decision traces, right? So every decision that our agent makes is linked to the reasoning grounded in evidence, right?" aria-label="回原文"></button>。

这样，成百上千个共享同一批工具的智能体，就能互相学习经验，共享一张[[上下文图|上下文图]]。

## 从记忆图里蒸馏出技能

光有记忆还不够，下一步是把经验变成技能。

技能是 Anthropic 提出的开放标准：一段描述加上渐进式披露的详细文档，打包后可以在不同智能体间复用。

但技能也有老毛病——都是文本，说不清是不是在谈同一件事。

Neo4j 研究团队为此发表了名为 [[APE|APE]] 的研究，把技能表示成带严格模式的类型化执行图，每一步是一个节点 <button class="pd-ts" data-t="08:38" data-who="嘉宾" data-en="And so to address some of these challenges that we're seeing with skills, some folks on the Neo4j research team have done some interesting research and published some work on APE, Graph Representation for Learning and Governing Agent Skills." aria-label="回原文"></button>。

**在 SkillsBench 基准测试上，这套方法让任务完成率显著提升**。

他们的思路是：从某个工作范围的记忆图出发（一段对话、某个实体周围的子图），蒸馏出一个技能。

要求很明确：步骤要有真实数据支撑、流程确定性、可长期治理——底层数据变了，技能要能感知到过期了。

## 光有依据还不够，还得检查跑没跑题

**技能生成前有几道启发式检查**。覆盖度：技能里的步骤和描述是否处处有数据支撑。

连贯性更有意思：如果发现喂进去的内容横跨多个主题，系统会建议你拆成多个技能。

治理上，用社区发现这类图算法判断主题混杂，配合一个技能注册表，随时给任何智能体发最新版本，并标记过期或漂移的技能 <button class="pd-ts" data-t="12:02" data-who="嘉宾" data-en="And with dynamic loading, you can think of having sort of like a governed skills registry that allows us to retrieve For any agent, the most recent up-to-date skill, understand if that skill may have been stale or drifted, right?" aria-label="回原文"></button>。

整个生成管线有 7 个阶段，大部分是确定性步骤，大模型只负责合成部分描述文本 <button class="pd-ts" data-t="13:16" data-who="嘉宾" data-en="I won't go through this in detail. The one thing that we're trying to point out here is that most of these steps are deterministic. We're really only leveraging an LLM here for synthesizing some of the claims, generating some of the text that we use for" aria-label="回原文"></button>。

## 免费服务已上线，现场演示了一遍

这些想法做成了 Neo4j Agent Memory Service（简称 [[NAMS|NAMS]]），属于 Neo4j Labs 项目，目前免费，任何人都可以注册试用。它提供 REST API 和 MCP 工具，后台自动做实体抽取、[[技能蒸馏|技能蒸馏]]和治理。

现场演示中，Lyon 用一个医疗本体（就诊、医生这类实体）导入了一批对话，然后从一段患者接诊对话蒸馏技能：

系统自动抽出了从接诊到病历归档的全部步骤，每一步都关联着真实的工具调用和实体，最后打包成标准的技能文件 <button class="pd-ts" data-t="16:51" data-who="嘉宾" data-en="This guy. So here's one that we ran previously. This was run on a patient intake conversation." aria-label="回原文"></button>。

一句话总结这场演讲：

智能体的记忆不该只是越堆越多的文本，而应该是一张结构化的图——既能追溯每个决策的来龙去脉，也能把成功经验自动提炼成别人能直接用的技能。

## 本集带走

- 只做检索的记忆不够用：智能体需要连接、有类型、可追溯的知识，核心难题是给同一事物建立统一表示。
- 推理记忆是关键一环：把决策、工具调用、成本等决策痕迹存进图里，多个智能体可以互相学习。
- 技能可以从记忆图里自动蒸馏：以图的方式表示技能（Neo4j 的 APE 研究），在基准测试中显著提高了任务完成率。
- 技能需要治理：底层数据变化时能检测到技能过期，用连贯性检查决定是否拆分。
- Neo4j 的 NAMS 服务目前免费开放，把这些模式做成了可试用的产品。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">有时我觉得我们可能处于某种失忆循环中，对吧？我们的智能体经历推理阶段、行动，成功完成了一些任务，但随后就有点忘记了它们学到的东西。</span>  
> *Sometimes I feel like we're in maybe like an amnesiac loop, right? Where our agents go through this reasoning phase, acting, they successfully complete some task, but then kind of forget what they've learned.*  
> <span class="qm">—— Will Lyon · [00:41]</span> ^q1

> <span class="qz">所以，智能体真正需要的是既相互连接、有类型、又可追溯的知识，而不仅仅是可检索的。</span>  
> *So really, agents need knowledge that is both connected, typed, and traceable, right? Not just retrievable.*  
> <span class="qm">—— Will Lyon · [01:53]</span> ^q2

> <span class="qz">这不仅能让单个智能体下次做完全相同的事情时变得更好，更要想想那些拥有成百上千个智能体、它们可以访问某种共享工具组的系统。</span>  
> *This is important not just so that a single agent can get better the next time you do it to do the exact same thing, but rather think about systems where you have hundreds or thousands of agents that have some shared grouping of tools that they have access to.*  
> <span class="qm">—— Will Lyon · [05:16]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-08-mad-what-happens-when-billions-of-ai-agents|当几十亿个AI智能体冲向你的数据库]]<span class="pd-rz">同公司:Neo4j、Anthropic · 同概念:智能体 (agent)、智能体记忆 (agent memory)、MCP</span>
- [[2026-08-21-talks-building-blocks-for-uber-s-software-fact|Uber 的智能体软件工厂:70% 的 PR 已经由 AI 写]]<span class="pd-rz">同概念:上下文图 (context graph)、技能 (skills)、智能体 (agent)</span>
- [[2026-10-03-talks-i-built-a-personal-ai-agent-on-a-raspber|把 AI 助手挂在脖子上：一块树莓派的随身记忆实验]]<span class="pd-rz">同公司:Neo4j · 同概念:智能体 (agent)、智能体记忆 (agent memory)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、MCP</span>
- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、MCP</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)</span>

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
