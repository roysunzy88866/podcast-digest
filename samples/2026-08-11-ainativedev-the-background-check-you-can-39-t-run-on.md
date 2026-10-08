---
title: 给 AI 智能体做“背景调查”：为什么身份是智能体安全的第一道坎
podcast: The AI-Native Dev
date: 2026-10-06
source_url: undefined
duration: "47:41"
type: episode
cover: "#64748b"
image: "/covers/2026-08-11-ainativedev-the-background-check-you-can-39-t-run-on.jpg"
description: "Key Card 联合创始人 Ian Livingstone 做客 The AI-Native Dev,讲清智能体时代的身份与授权难题。"
host: "[[Simon Mayfor]]"
cohosts: ["[[Ian Livingstone]]", "[[Glyfer Johnny]]"]
companies: ["[[Key Card]]"]
concepts: ["[[智能体]]", "[[身份]]", "[[使命]]", "[[会话]]", "[[非确定性]]", "[[同意疲劳]]", "[[OAuth]]", "[[MCP]]", "[[CLI]]", "[[LLM 即裁判]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/covers/2026-08-11-ainativedev-the-background-check-you-can-39-t-run-on.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-11-ainativedev-the-background-check-you-can-39-t-run-on#post","headline":"给 AI 智能体做“背景调查”：为什么身份是智能体安全的第一道坎","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-11-ainativedev-the-background-check-you-can-39-t-run-on","mainEntityOfPage":"https://talk.solomind.cc/2026-08-11-ainativedev-the-background-check-you-can-39-t-run-on","description":"Key Card 联合创始人 Ian Livingstone 做客 The AI-Native Dev,讲清智能体时代的身份与授权难题。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-08-11-ainativedev-the-background-check-you-can-39-t-run-on.jpg","about":[{"@type":"Person","name":"Simon Mayfor"},{"@type":"Person","name":"Ian Livingstone"},{"@type":"Person","name":"Glyfer Johnny"},{"@type":"Organization","name":"Key Card"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"身份 (identity)"},{"@type":"Thing","name":"使命 (mission)"},{"@type":"Thing","name":"会话 (session)"},{"@type":"Thing","name":"非确定性 (non-deterministic)"},{"@type":"Thing","name":"同意疲劳 (consent fatigue)"},{"@type":"Thing","name":"OAuth"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"CLI"},{"@type":"Thing","name":"LLM 即裁判 (LM as a judge)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"给 AI 智能体做“背景调查”：为什么身份是智能体安全的第一道坎","item":"https://talk.solomind.cc/2026-08-11-ainativedev-the-background-check-you-can-39-t-run-on"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>给 AI 智能体做“背景调查”：为什么身份是智能体安全的第一道坎</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 给 AI 智能体做“背景调查”：为什么身份是智能体安全的第一道坎

<div class="pd-byl"><b>Ian Livingstone</b> · Key Card 联合创始人 · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-11-ainativedev-the-background-check-you-can-39-t-run-on.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">这正是今天完全不存在的问题：如果你去 ABOS，让你的智能体代表你与 ABOS 交谈，ABUS 实际上完全没办法知道智能体正在执行的动作是否与你的初始请求一致。</div><div class="a">— Ian Livingstone <button class="pd-ts" data-t="23:18" data-who="Ian Livingstone" data-en="Which is the issue that doesn't exist at all today is if you go to ABOS and you ask your agent to talk to ABOS on your behalf, ABUS has actually no way to know whether you what the action that the agent is performing was aligned with what your initial request was at all." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Simon Mayfor]] · [[Ian Livingstone]] · [[Glyfer Johnny]]
>
> **公司** [[Key Card]]
>
> **概念** [[智能体]] · [[身份]] · [[使命]] · [[会话]] · [[非确定性]] · [[同意疲劳]] · [[OAuth]] · [[MCP]] · [[CLI]] · [[LLM 即裁判]]

AI [[智能体|智能体]]会替你发邮件、改数据库、花钱办事。但你怎么知道它在做的事，是你真正想让它做的？

[[Ian Livingstone|Ian Livingstone]] 是[[身份|身份]]安全创业公司 [[Key Card|Key Card]] 的联合创始人，曾创办过其他安全公司。

在这期对话里，他把“智能体的身份问题”拆开揉碎，讲给不搞安全的开发者听。

## 为什么智能体让老办法失效了？

每一轮计算平台变革都会带来新的安全问题：大型机有了多用户，就有了“谁能访问谁的文件”；

互联网带来了电子商务和加密协议；云计算带来了密钥管理。智能体也一样，但它有个前所未有的特点：不确定性。

Ian 的说法很妙：智能体基于概率分布，能推理、能猜测，这本来是功能；但从安全角度看，这恰恰也是缺陷。功能和缺陷是同一件事 <button class="pd-ts" data-t="05:12" data-who="Ian Livingstone" data-en="The bug from a security perspective is that it's non-deterministic and that it's still a feature. So the feature and the bug are the same. And so the fundamental question is how do I know that an agent is performing actions aligned with the intent of whoever set that agent to do something, right?" aria-label="回原文"></button>。

过去你给一段程序权限，它基本就照着做。智能体不一样——你让它优化数据库，它可能认为把库整个清空重 来最“优化”。

这不是它恶意，而是它没有判断对错的能力，每次运行都是一个全新语境下的全新生物。

## 人可以查背景，智能体查不了

为什么以前云计算时代不用太操心授权？

Ian 用了一个招聘的比喻：公司雇人前会做背景调查、打电话给推荐人，确认这个人值得信任。

人也有长期的声誉顾虑——被开除对他是大灾难，所以他天然有动机好好干活。

智能体完全没有这些。它不在乎后果，没有“做错事会很惨”的概念，而且每次任务都是新的上下文。

所以老逻辑——“只要确认是这个人，就给他宽泛权限”——在智能体身上彻底失效 <button class="pd-ts" data-t="14:31" data-who="Ian Livingstone" data-en="So that implicitly we can we can trust that guy is going to operate with high intent and not be malicious, right? And part is because it's the same guy that will sort of come into the next task and then S that things in the next task while the agents are basically a brand new creature every time." aria-label="回原文"></button>。

现在必须反过来：根据你派给智能体的具体任务，动态决定它能碰什么。让它总结文档？随便读。让它花钱超过 500 美元？

必须人工确认。每个组织、每个人的信任边界都不一样。

## 三层身份：你是谁、替谁干活、干什么活

Ian 把问题拆成三层。第一层是“这个智能体是谁”——它得有自己的身份，不能借你的账号乱窜。

第二层是“它替谁办事”，也就是代理关系。

第三层最有意思：任务本身也需要身份。

在 emerging 的标准里，这个概念叫“任务(mission)”——用户给智能体指派了一项任务，这个任务的描述随请求一起传给下游系统，下游就能判断：

这个请求和当初的授权匹配吗？

Ian 用信用卡拒付打比方：你让智能体替你交易，事后又不认账，系统得能拿出记录证明“你确实授权了它，而且说了最多花 500 美元”。

今天的身份体系做不到这一点——如果智能体替你访问某个服务，那个服务根本没法核对它的动作是否符合你的原始意图 <button class="pd-ts" data-t="23:18" data-who="Ian Livingstone" data-en="So that gives us a way to like think about how the concept of uh an agent's identity and their and the task they're working on travels across systems, right? Which is the issue that doesn't exist at all today is if you go to ABOS and you ask your agent to talk to ABOS on your behalf, ABUS has actually no way to know whether you what the action that the agent is performing was aligned with what your initial request was at all." aria-label="回原文"></button>。

## 别让“确认弹窗”毁掉一切

现在的工具靠什么管智能体？弹窗。每做一步都问你“确定吗？”。Ian 直言这是 consent fatigue(确认疲劳)的温床——你根本不会读弹窗，只会一路点“是” <button class="pd-ts" data-t="31:39" data-who="Ian Livingstone" data-en="And the biggest challenge we have today when it comes to age genetic security is how do we actually not end up with consent fatigue, right? Like the worst part about the yes, no allow always product dialogue is you just click yes because I'm not gonna read it." aria-label="回原文"></button>。

他的思路是：设几条铁律，比如“删除数据必须我本人批准”；其余情况，让一个“AI 当裁判”的判断系统来决定这次请求合不合理。

裁判拿不准时，再升级给人。裁判判断得越准，打断你的次数越少，信任越高，智能体能获得的自主权就越大。

这个思路有个重要的历史教训：上一代安全工具之所以部署失败，就是因为要人工手写成百上千行策略文件。

这次不能再走老路。

## 协议在变，格局未定

工具层面，生态正分裂成两大阵营：命令行工具和 [[MCP|MCP]](MCP 协议天生自带 [[OAuth|OAuth]] 支持)。有些安全方案只支持一边。

Key Card 的定位是两边通吃，再加上传统的特权访问管理——三样合一。

协议层面也有新动作:OAuth 社区新推出了 cross-app access,让智能体能以智能体的身份认证，而不是伪装成人类；

Ian 的预测是：

三年内，新协议会真正落地，智能体会让整个互联网变得“即插即用”，企业内部的信息孤岛会因身份系统升级而被打通。

驱动力来自企业——职场智能体的采用速度和回报远超家用场景，而大企业客户会拿着预算逼供应商实现安全标准。

这个模式，过去 30 年一直如此。

## 本集带走

- 智能体的不确定性既是功能也是缺陷，安全的核心问题变成：如何确保它的动作符合授权者的真实意图
- 对人可以“查背景后给宽权限”，对智能体必须按任务动态授权——任务本身需要可传递的身份
- 靠“确定吗”弹窗管理智能体会导致确认疲劳，需要硬边界加 AI 裁判的组合
- 新协议(cross-app access、Agent Auth)正在出现，但格局远未定型；企业需求是推动标准落地的最大力量
- Key Card 的做法：同时支持命令行和 MCP,让开发者从个人用起，再扩展到团队和全公司

<div class="pd-sec pd-sec-q">全部金句 <span>1 条</span></div>

> <span class="qz">这正是今天完全不存在的问题：如果你去 ABOS，让你的智能体代表你与 ABOS 交谈，ABUS 实际上完全没办法知道智能体正在执行的动作是否与你的初始请求一致。</span>  
> *Which is the issue that doesn't exist at all today is if you go to ABOS and you ask your agent to talk to ABOS on your behalf, ABUS has actually no way to know whether you what the action that the agent is performing was aligned with what your initial request was at all.*  
> <span class="qm">—— Ian Livingstone · [23:18]</span> ^q1

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-11-engenable-how-okta-sets-guardrails-and-context-for|当 AI 智能体成为「新员工」:Okta 首席架构师谈智能体身份与安全]]<span class="pd-rz">同概念:智能体 (agent)、身份 (identity)、非确定性 (non-deterministic)、沙箱 (sandbox)</span>
- [[2026-singju-openclaw-80apps|OpenClaw 创始人 Peter Steinberger：让智能体直接接管你的整台电脑]]<span class="pd-rz">同概念:CLI、MCP、智能体 (agent)</span>
- [[2026-05-27-devtools-cloudflare-devs|Cloudflare 三人聊：让模型直接写代码，别再堆工具了]]<span class="pd-rz">同概念:MCP、智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|SaaS 不会死,PM 迎来黄金期:Dan Shipper 的 AI 工作预测]]<span class="pd-rz">同概念:CLI、智能体 (agent)</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>
- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>

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
