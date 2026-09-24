---
title: 企业还没为 AI 智能体做好准备：四条架构原则补上缺口
podcast: 精选演讲
date: 2026-09-24
source_url: undefined
duration: "18:54"
type: episode
cover: "#64748b"
description: "Anthropic 前置部署工程师 Christopher Lovejoy 与 Anterior 工程副总裁 Saul,讲解医疗企业部署 AI 智能体的四条架构原则。"
guests: ["[[Christopher Lovejoy]]", "[[Saul Howard]]"]
concepts: ["[[智能体]]", "[[审计轨迹]]", "[[交易日志]]", "[[对象存储]]", "[[零信任]]", "[[提示词注入]]", "[[PHI]]", "[[评估]]", "[[POC]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-19-talks-why-your-enterprise-tech-stack-isn-t-rea#post","headline":"企业还没为 AI 智能体做好准备：四条架构原则补上缺口","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-19-talks-why-your-enterprise-tech-stack-isn-t-rea","mainEntityOfPage":"https://talk.solomind.cc/2026-08-19-talks-why-your-enterprise-tech-stack-isn-t-rea","description":"Anthropic 前置部署工程师 Christopher Lovejoy 与 Anterior 工程副总裁 Saul,讲解医疗企业部署 AI 智能体的四条架构原则。","datePublished":"2026-09-24","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Christopher Lovejoy"},{"@type":"Person","name":"Saul Howard"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"审计轨迹 (audit trail)"},{"@type":"Thing","name":"交易日志 (transaction log)"},{"@type":"Thing","name":"对象存储 (object storage)"},{"@type":"Thing","name":"零信任 (zero trust)"},{"@type":"Thing","name":"提示词注入 (prompt injection)"},{"@type":"Thing","name":"PHI"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"POC"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"企业还没为 AI 智能体做好准备：四条架构原则补上缺口","item":"https://talk.solomind.cc/2026-08-19-talks-why-your-enterprise-tech-stack-isn-t-rea"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>企业还没为 AI 智能体做好准备：四条架构原则补上缺口</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 企业还没为 AI 智能体做好准备：四条架构原则补上缺口

<div class="pd-byl"><b>Christopher Lovejoy</b> · Anthropic 前置部署工程师 · 2026-09-24</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-19-talks-why-your-enterprise-tech-stack-isn-t-rea.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">你的智能体可以持有令牌，并在使用点上使用这些令牌访问数据，而不允许数据在系统中随意流动。</div><div class="a">— Saul Howard <button class="pd-ts" data-t="12:03" data-who="Saul Howard" data-en="Your agents can bear tokens and use those tokens to access the data at the point of use and not allow data to flow around the system as it likes." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Christopher Lovejoy]] · [[Saul Howard]]
>
> **概念** [[智能体]] · [[审计轨迹]] · [[交易日志]] · [[对象存储]] · [[零信任]] · [[提示词注入]] · [[PHI]] · [[评估]] · [[POC]]

把 AI [[智能体|智能体]]卖进医疗健康企业，最难的往往不是把 AI 做准，而是把它送进生产环境。这一集的两位主角都常年深耕企业级医疗 AI:[[Christopher Lovejoy|Christopher Lovejoy]] 是 Anthropic 的前置部署工程师(嵌入企业内部、帮它们用 AI 智能体拿到价值)，Saul 是纽约公司 Anterior 的工程副总裁，专门向美国健康保险公司卖智能体式 AI。

他们从一个所有人都熟悉的场景讲起：企业 [[POC|POC]](概念验证)。你定了客户和用例，规划范围、定好指标，派两个工程师干四周——然后 AI 表现符合预期，又快又便宜，汇报会上人人兴奋：财务想知道对预算的影响，首席医疗官急着夸自家 AI 有多准，销售负责人问什么时候能在官网写上「由 AI 驱动」。

但所有人都默认「难的部分已经做完了」。第二天一开会，真实的问题才涌出来：[[审计轨迹|审计轨迹]]在哪？

敏感数据怎么流转？谁在批准智能体的决策？

不可信数据能操纵模型吗？怎么连进 Epic、Salesforce 这些系统？他们选了四个最要命的问题，逐一给出架构答案。

## 审计轨迹：不是日志，是法庭证据

对程序员来说，审计轨迹听起来像 Datadog 里的开发日志。但在真实企业的安全框架(如 SOC2、HITRUST、HIPAA)下，它必须是智能体每一个动作、每一次数据访问、每一项授权的完整记录。

一个直观的检验标准：如果智能体的决策上了法庭，你能不能拿出一条可辩护的证据链？这在医疗场景完全可能发生。

答案是借鉴金融行业的**[[交易日志|交易日志]]**模式：一条只追加、带时间戳的不可变事件记录，作为全系统唯一的事实来源——即使你有多个智能体并行运行，也只有这一个真相。这样架构之后，可审计性不再是要专门做的事，而是从数据存储范式中自然长出来的：回溯任何时间点、看清系统当时的确切状态，是做不到「不」的。

权衡在哪？写入变得极简单(扔一个事件就行)，读取变难(要重放所有事件才能重构视图)，可以用缓存和快照缓解。而且他们发现医疗场景反而受益：事后常有新事件改变对医疗旅程的解读，你需要同一个时间点的不同视图——所有视图都是事件日志的临时计算投影，想怎么看就怎么算。

## 敏感数据：模式驱动的对象存储 + 零信任

医疗数据是 [[PHI|PHI]](受保护健康信息)，有法律红线：智能体和人一样，不能访问任何非当前旅程绝对必需的数据；有的客户甚至不让数据离开自己的本地 VPC(云上的私有网络环境)。这类数据很复杂——有时结构化有时不结构化、单条轻松超过一兆、访问控制严格。

他们的方案是**模式驱动的[[对象存储|对象存储]]**(按预定义数据形状来存的大对象存储)，与事件日志分离：事件只存「发生了什么」，只包含指向数据 blob 的引用，真正的医疗数据以不可变方式存在对象存储里。这个分离带来三个好处：

- **可观测性不碰隐私**：开发者可以回溯调试、看清智能体每一步为什么这么做——但只能看到数据的「形状」，拿不到数据本身。
- **[[零信任|零信任]]落地**：对象存储成为执行零信任原则的地方，智能体持令牌、在使用点凭令牌取数据，数据不许在系统里随意流动。
- **缓解[[提示词注入|提示词注入]]**(攻击者借不可信数据操纵智能体)：他们称之为「致命三要素」的解法——架构上保证持有一个智能体无法在同一进程里又摸到这份数据又摸到那份，把约束直接消灭在结构里。

## 人工升级：把人也当成一种「智能体」

上报机制很难预判——可能是 AI 不确定时上报，也可能是规则触发(治疗超过阈值必须由临床医生批准)。而且 LLM 吞得下海量上下文，人不行。

他们的模式：在平台层面强制一个更宽泛的「智能体」定义，**把人类和 LLM 都囊括在内**。任何 LLM 能执行的动作，人类也能执行。

于是动作链上任何一点都可以升级给人类，人做完这一步，下游根本不在乎上游是人还是 LLM 干的。共享的上下文定义还能分别映射成两种呈现：给智能体的 prompt,或给人的 UI。

## Evals:前三条原则的免费副产品

Evals(评估，衡量模型/系统表现好坏的测试)公认难做：LLM 不是确定性的，难以锁定哪处改动导致了输出变化；离线数据集未必代表生产数据；数据还会随时间漂移。而前面三条原则让他们几乎不加东西就拿到了有效的隐私保护 [[评估|evals]]:

- **重放**：回到事件序列的任何时刻，看到系统完整状态，微调 prompt、换模型、改代码，精确看到直接影响。
- **人机对比**：因为人类与智能体等价，任何任务都可以让人和 LLM 各做一遍，差异就是 eval 分数。
- **生产数据上跑而不暴露**：对象存储让 evals 能直接在生产数据上跑、甚至在客户环境内部跑，敏感数据从不需要来到智能体工作的地方。

## 本集带走

- **审计别事后补**：用金融式的不可变交易日志(只追加、带时间戳、全系统唯一事实来源)，可审计性从存储范式中自然产生；代价是读取变难，用缓存/快照缓解。
- **数据与事件分离**：事件只存引用，数据进不可变的模式驱动对象存储——可观测性不碰 PHI、零信任令牌有落点、提示词注入的约束在架构层面被消灭。
- **把人纳入「智能体」定义**：任何 LLM 动作人类也能执行，升级上报变得随处可行、下游无感。
- **evals 是副产品不是附件**：重放任意时刻 + 人机同题对比 + 在生产数据上评估而不暴露数据。
- **最大的坑**：拿着高准确率的 POC 往上垒，遇到需求再bolt上安全、审计、evals——最后得到一个脆弱、难泛化的东西。正确做法是从第一天就把可投产的企业级约束当架构原则，反向构建回 POC 的准确率。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">你的智能体可以持有令牌，并在使用点上使用这些令牌访问数据，而不允许数据在系统中随意流动。</span>  
> *Your agents can bear tokens and use those tokens to access the data at the point of use and not allow data to flow around the system as it likes.*  
> <span class="qm">—— Saul Howard · [12:03]</span> ^q1

> <span class="qz">一种在这里能运作得很好的模式是，如果你在平台中强制执行一个更宽泛的 agent 定义，把 LLM 和人类都囊括在内，那么你就可以做到让任何 LLM 能执行的动作，人类也能执行。</span>  
> *One pattern that can work very well here is if in your platform you enforce a wider definition of agent which encompasses both LLMs and humans, then you can make it such that any action that can be taken by an LLM could also be taken by a human.*  
> <span class="qm">—— Christopher Lovejoy · [13:49]</span> ^q2

> <span class="qz">实际上几乎作为副产品就给了你有效的隐私保护的 evals,而不需要在架构旁边额外加上什么东西。</span>  
> *Actually give you effective privacy preserving evals almost as a byproduct without needing to kind of bolt something onto the side of your architecture.*  
> <span class="qm">—— Christopher Lovejoy · [15:42]</span> ^q3

> <span class="qz">其次，你有这种人类与智能体的等价性，这意味着对于任何任务，你可以让智能体——也就是 LLM 智能体——和人类都执行它，而你们的差异就是你的 eval。</span>  
> *Secondly, you have this human agent equivalency, which means that for any task, you could get both the agent, the LLM agent, and the human to perform it, and your difference is your eval.*  
> <span class="qm">—— Christopher Lovejoy · [16:16]</span> ^q4

> <span class="qz">我想说的是，我见过走错路的地方，是拿着最初的那个 POC——那个展现出巨大前景、比如展现出高准确率的单点解决方案——然后试图从它向上构建，在遇到企业需求时再把它们绑上去。</span>  
> *And I'd say the takeaway is that where I've seen it go wrong is taking that initial POC, that point solution that showed so much promise and that showed the high accuracy, for example, and then trying to build up from it, strapping on the enterprise requirements as you come across them.*  
> <span class="qm">—— Saul Howard · [17:56]</span> ^q5

> <span class="qz">而我见过走得好的地方是，如果你从一开始就认真对待一个可投产的、规模化企业系统的约束，把那些当作你要构建一切的架构原则，然后用你的新原语反向构建，重新达到那个 POC 的准确率。</span>  
> *But where I've seen it go well is if you take the constraints of a production-ready scaled enterprise system seriously from the beginning and treat those as the architectural principles that you're going to build everything upon and then build back up towards that POC accuracy using your new primitives.*  
> <span class="qm">—— Saul Howard · [18:32]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-06-11-practicalai-zero-trust-for-ai-agents|Anthropic 零信任框架：智能体安全的六层防御]]<span class="pd-rz">同公司:Anthropic · 同概念:提示词注入 (prompt injection)、智能体 (agent)、零信任 (zero trust)、可观测性 (observability)</span>
- [[2025-09-07-lennys-how-ai-is-reshaping-the-product-role|PM的生存法则：AI时代别当瓶颈，去抢活干]]<span class="pd-rz">同概念:evals、智能体 (agent)、LLM</span>
- [[2025-09-21-lennys-from-managing-people-to-managing-ai-juli|Julie Zhuo：管理者的核心技能，就是驾驭AI的技能]]<span class="pd-rz">同概念:evals、智能体 (agent)、可观测性 (observability)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:evals、智能体 (agent)、LLM、可观测性 (observability)</span>
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同公司:Anthropic · 同概念:evals、智能体 (agent)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:evals、智能体 (agent)、可观测性 (observability)</span>

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
