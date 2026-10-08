---
title: "智能体怎么付钱、怎么花钱:Metronome 讲透按量计费与智能体商务"
podcast: 精选演讲
date: 2026-09-27
source_url: undefined
duration: "17:38"
type: episode
cover: "#64748b"
description: "Metronome 联合创始人 Andrew Garvin 演示用自然语言让智能体搭建一套复刻 Lovable 的计费系统,并提出智能体的三种角色框架。"
guests: ["[[Andrew Garvin]]"]
companies: ["[[Metronome]]", "[[Stripe]]", "[[Stripe Projects]]", "[[OpenAI]]", "[[Anthropic]]", "[[Lovable]]", "[[HubSpot]]"]
concepts: ["[[智能体]]", "[[编码智能体]]", "[[vibe coding]]", "[[按用量定价]]", "[[沙箱]]", "[[skills 文件]]", "[[智能体商务]]", "[[无头化]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-28-talks-how-to-avoid-disaster-when-vibe-coding-a#post","headline":"智能体怎么付钱、怎么花钱:Metronome 讲透按量计费与智能体商务","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-28-talks-how-to-avoid-disaster-when-vibe-coding-a","mainEntityOfPage":"https://talk.solomind.cc/2026-08-28-talks-how-to-avoid-disaster-when-vibe-coding-a","description":"Metronome 联合创始人 Andrew Garvin 演示用自然语言让智能体搭建一套复刻 Lovable 的计费系统,并提出智能体的三种角色框架。","datePublished":"2026-09-27","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Andrew Garvin"},{"@type":"Organization","name":"Metronome"},{"@type":"Organization","name":"Stripe"},{"@type":"Organization","name":"Stripe Projects"},{"@type":"Organization","name":"OpenAI"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"Lovable"},{"@type":"Organization","name":"HubSpot"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"编码智能体 (coding agent)"},{"@type":"Thing","name":"vibe coding"},{"@type":"Thing","name":"按用量定价 (usage-based pricing)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"skills 文件 (skills files)"},{"@type":"Thing","name":"智能体商务 (agentic commerce)"},{"@type":"Thing","name":"无头化 (headlessness)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"智能体怎么付钱、怎么花钱:Metronome 讲透按量计费与智能体商务","item":"https://talk.solomind.cc/2026-08-28-talks-how-to-avoid-disaster-when-vibe-coding-a"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>智能体怎么付钱、怎么花钱:Metronome 讲透按量计费与智能体商务</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 智能体怎么付钱、怎么花钱:Metronome 讲透按量计费与智能体商务

<div class="pd-byl"><b>Andrew Garvin</b> · Metronome 联合创始人 · 2026-09-27</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-28-talks-how-to-avoid-disaster-when-vibe-coding-a.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们的理念是提供更加详细、更清晰的错误信息,让智能体能够自我纠正。</div><div class="a">— Andrew Garvin <button class="pd-ts" data-t="06:53" data-who="Andrew Garvin" data-en="Our perspective is to have much more verbose and clear errors so that the agent can self-correct." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Andrew Garvin]]
>
> **公司** [[Metronome]] · [[Stripe]] · [[Stripe Projects]] · [[OpenAI]] · [[Anthropic]] · [[Lovable]] · [[HubSpot]]
>
> **概念** [[智能体]] · [[编码智能体]] · [[vibe coding]] · [[按用量定价]] · [[沙箱]] · [[skills 文件]] · [[智能体商务]] · [[无头化]]

这一集是一场现场演示:[[Metronome|Metronome]] 的联合创始人 [[Andrew Garvin|Andrew Garvin]] 上台,展示怎么在几分钟内,用一句自然语言让[[编码智能体|编码智能体]]搭起一套完整的计费系统。Metronome 是按用量计费领域的头部平台——就是帮 [[OpenAI|OpenAI]]、[[Anthropic|Anthropic]] 这类公司处理所有 API 调用的计量和账单的公司,他们从这些公司还没有任何收入之前就开始合作了。

今年早些时候,Metronome 被 [[Stripe|Stripe]] 收购,这是 Stripe 历史上最大的一笔交易。这场演示就是收购后和 Stripe 团队一起做的,主题一句话概括:如何在 [[vibe coding|vibe coding]](用自然语言指挥 AI 写代码)一个计费引擎时避免灾难。

他演示的起点是 [[Stripe Projects|Stripe Projects]]——一个刚发布的编排器:一条命令就能帮你开通 Stripe 账户,连带配好后端服务(Vercel、Postgres),在这个例子里还有一个 Metronome 计费[[智能体|智能体]],全部通过 CLI 完成。Stripe 内部观察到,CLI 的使用量在过去五六个月里呈指数级增长——背后就是编码智能体在大量调用它。

现场他真的敲了一条命令,然后只输入了一句自然语言:"在 Metronome 中创建一个模仿 [[Lovable|Lovable]] 定价模式的演示计费引擎"。Lovable 的定价核心是一种纯积分模式:用户预付积分、每月自动充值,积分分多种类型限定不同用途(构建额度、计划模式额度、云端额度、AI 网关额度),超支了周期结束再出账单。这种预付积分自动充值模式,是 OpenAI 几年前通过 Metronome 推出后,逐渐成为自助服务市场的主导模式。

为什么计费这件事需要专门"避免灾难"?Garvin 给了两个理由。

第一,Metronome 是一个非常复杂、很深的产品,没有引导的话,编码智能体有很多地方会踩坑——所以他们的投入方向是一套可扩展、可移植、易安装的 [[skills 文件|skills 文件]],给正在调用自家 API 的智能体提供上下文,从根上消除上手摩擦。第二,错误信息本身也要为智能体重新设计:他们的理念是提供更详细、更清晰的报错,让智能体能够自我纠正,开发者体验团队正在专门挖掘更多失败场景来补这个,尤其是初始化和设置阶段。

一个很关键的边界:他们的目标**不是**让客户在没有人在环的情况下操作整个系统。计费系统业务关键、背后有深厚的业务逻辑,所以他们推荐的做法是把编码智能体当作加速器,先进入测试模式和测试环境——演示里搭的全部是[[沙箱|沙箱]]体验,不会推上生产。

而且计费场景的"测试"不只是能看到合同、看到客户被开通,还必须看到真实用量流动:他们的 skills 文件会引导智能体把用量真正灌进 Metronome,让你看到"如果上线了,一个真实客户会长什么样"——发票、积分扣减、用量曲线一应俱全。整件事的难度上限,就是那句自然语言,没有更复杂的了。

演示之外,这一集最有价值的是一个思考框架:当产品团队都在说"为智能体而构建"时,要先把这句话解码开,智能体其实扮演三种不同角色——

**智能体作为产品**:公司把智能体本身当产品卖,它可能烧出高额 token 账单,所以你必须能对它做用量计量——这也是[[按用量定价|按用量定价]]走红的直接原因。

**智能体作为买家**:Stripe Projects 演示的就是这个——智能体字面意义上在采购自己的 Stripe 实例和其他后端服务。对你的业务来说,重点是让你的服务对那些在开放网络上构建应用的智能体**可被发现**:Vercel、Hugging Face 等公司已经在 Stripe Projects 环境里做这件事,每天都有新提供商入驻。Stripe 在 B2C 侧做的是[[智能体商务|智能体商务]],Metronome 场景则是 B2B,多个层面同时在展开。

**智能体作为用户**:这是 Metronome 现在起飞的最大原因。他们和 [[HubSpot|HubSpot]] 合作几年了,HubSpot 正在把整个业务从按席位模式转为按积分模式——从 EMEA 开始大幅降低席位价、叠加积分制。

根本原因是:在一个智能体可以操作你整个系统的世界里,为"一个人类坐席"付费的逻辑就不成立了。他们把这叫[[无头化|无头化]](headlessness),Salesforce 等公司也谈过,而 Metronome 是字面上正在看到这件事发生。一个佐证:上周他在 Andreessen 的 demo day 上,五家演示公司全是面向销售的智能体,专门去操作 SAP 这类平台、跑发票流程——在这种世界里,平台的所有价值可能都归属于"一个用户",而那个用户是智能体,所以基于用量的定价模式必不可少。

顺着这个趋势,他预计企业端的编程智能体(Cognition、Cursor、OpenAI、Anthropic 这些)会越来越多采用承诺消费(commit)结构——就像云服务商过去十年做的那样:预付承诺、后付承诺、针对特定客户类型的特定方案。积分模式只是起点,销售主导和企业环境的扩展方案才是接下来铺开的方向。

## 本集带走
- **给智能体写"skills 文件"而不是文档**:把自家复杂 API 的上下文做成可移植、易安装的技能文件,让编码智能体不踩坑;报错也要为智能体重写——足够详细清晰,它才能自我纠正。
- **人留在环里,智能体进沙箱**:业务关键的系统(如计费)不该让智能体直接上生产;正确姿势是让智能体在测试环境搭出完整演练——包括灌入模拟用量,看真实客户会长什么样。
- **"为智能体构建"先拆成三种角色**:智能体是产品(要能计量它的 token 消耗)、是买家(让你的服务对智能体可发现)、是用户(席位逻辑失效,转向用量/积分定价)——不同角色对应完全不同的产品动作。
- **定价模式的演进方向**:预付积分自动充值已是自助服务主导模式;企业端的编程智能体正在复制云厂商的承诺消费结构(预付/后付承诺 + 按客户类型的定制方案)。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">我们的理念是提供更加详细、更清晰的错误信息,让智能体能够自我纠正。</span>  
> *Our perspective is to have much more verbose and clear errors so that the agent can self-correct.*  
> <span class="qm">—— Andrew Garvin · [06:53]</span> ^q1

> <span class="qz">从产品开发的角度看,我们的目标并不是让客户在没有人在环的情况下操作整个系统。</span>  
> *The goal that we have from a product development standpoint is not to have a customer operate the entire system without a human in the loop.*  
> <span class="qm">—— Andrew Garvin · [07:18]</span> ^q2

> <span class="qz">如果智能体可以成为产品并烧出高额的 token 账单,那么你能够对此进行计量就很重要。</span>  
> *If the agent can be the product and run up a token bill, it's important for you to be able to meter on that.*  
> <span class="qm">—— Andrew Garvin · [10:00]</span> ^q3

> <span class="qz">再说一次,在那个世界里,拥有基于用量的定价模式很重要,因为有可能所有的价值基本上都归属于你平台的一个用户,在这个案例中就是一个智能体。</span>  
> *And again, in that world, it's important for you to have a usage-based pricing model because you have the possibility of essentially all of the value accruing to essentially one user of your platform, which in this case would be an agent.*  
> <span class="qm">—— Andrew Garvin · [11:40]</span> ^q4

> <span class="qz">所有企业端编程智能体的情况——想想 Cognition 或 Cursor 或 OpenAI 和 Anthropic 自己——是他们开始采用更多承诺消费结构,就像云服务商们过去 10 年所做的那样。</span>  
> *What's happening with all the coding agents in the enterprise, think like Cognition or Cursor or OpenAI and Anthropic themselves, is that they are starting to adopt more commit structures like the CSPs have done for the past 10 years.*  
> <span class="qm">—— Andrew Garvin · [12:23]</span> ^q5

> <span class="qz">再说一次,我们指导智能体构建这个的方式,只是用自然语言描述来复刻 Lovable 的定价模式。没有比这更难的东西了。</span>  
> *And again, the way that we coached the agent to be able to build this was just describing a natural language to replicate lovable's pricing model. It was nothing more difficult than that.*  
> <span class="qm">—— Andrew Garvin · [15:41]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-05-sourcery-john-collison--stripe-ai-agents-will-rew|Stripe 联合创始人：AI 智能体会重造互联网的商业逻辑]]<span class="pd-rz">同公司:Metronome、Stripe · 同概念:智能体 (agent)、智能体商务 (agentic commerce)、编码智能体 (coding agent)</span>
- [[2026-08-17-a16z-stripes-ai-strategy-build-more-not-less|Stripe 内部实战：把工程师变成创始人，让智能体一周提交 7000 个 PR]]<span class="pd-rz">同公司:Stripe、Stripe Projects、Metronome · 同概念:智能体 (agent)、智能体商务 (agentic commerce)</span>
- [[2026-09-12-a16z-why-companies-are-becoming-a-series-of-l|A16Z 消费投资合伙人 Anish Acharya：别怕“永久下层”，公司正在变成一串循环]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:智能体 (agent)、编码智能体 (coding agent)、vibe coding</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同公司:OpenAI、Stripe、Anthropic · 同概念:按用量定价 (usage-based pricing)、智能体 (agent)</span>
- [[2026-09-09-productpodcast-bolt-ceo-on-turning-ai-prototypes-into-p|解散会议前一个月上线 Bolt:一夜从 50 万到 550 万美元 ARR]]<span class="pd-rz">同公司:Anthropic、Lovable · 同概念:vibe coding、按用量定价 (usage-based pricing)、智能体 (agent)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
