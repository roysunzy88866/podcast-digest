---
title: AI 智能体就跑在你的笔记本电脑上：致命三重威胁
podcast: 精选演讲
date: 2026-10-16
source_url: undefined
duration: "20:25"
type: episode
cover: "#64748b"
description: Coder 公司工程师 Michael Patterson 在 AI 工程师大会上讲解「致命三重威胁」——为什么让 AI 智能体直接跑在员工电脑上迟早出事。
guests: ["[[Michael Patterson]]"]
companies: ["[[Coder]]"]
concepts: ["[[Claude Code]]", "[[OpenClaw]]", "[[致命三角]]", "[[提示词注入]]", "[[上下文投毒]]", "[[特权升级]]", "[[影子 AI]]", "[[云开发环境]]", "[[模型代理]]", "[[智能体防火墙]]", "[[护栏]]", "[[可观测性]]"]
category: AI 安全
tags:
  - AI 安全
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-10-talks-the-lethal-trifecta-is-already-on-your-l#post","headline":"AI 智能体就跑在你的笔记本电脑上：致命三重威胁","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-10-talks-the-lethal-trifecta-is-already-on-your-l","mainEntityOfPage":"https://talk.solomind.cc/2026-10-10-talks-the-lethal-trifecta-is-already-on-your-l","description":"Coder 公司工程师 Michael Patterson 在 AI 工程师大会上讲解「致命三重威胁」——为什么让 AI 智能体直接跑在员工电脑上迟早出事。","datePublished":"2026-10-16","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Michael Patterson"},{"@type":"Organization","name":"Coder"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"OpenClaw"},{"@type":"Thing","name":"致命三角 (lethal trifecta)"},{"@type":"Thing","name":"提示词注入 (prompt injection)"},{"@type":"Thing","name":"上下文投毒 (context poisoning)"},{"@type":"Thing","name":"特权升级 (privilege escalation)"},{"@type":"Thing","name":"影子 AI (shadow AI)"},{"@type":"Thing","name":"云开发环境 (cloud development environments)"},{"@type":"Thing","name":"模型代理 (model proxy)"},{"@type":"Thing","name":"智能体防火墙 (agent firewall)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"可观测性 (observability)"}],"articleSection":"AI 安全"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 安全","item":"https://talk.solomind.cc/tags/AI 安全"},{"@type":"ListItem","position":3,"name":"AI 智能体就跑在你的笔记本电脑上：致命三重威胁","item":"https://talk.solomind.cc/2026-10-10-talks-the-lethal-trifecta-is-already-on-your-l"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 智能体就跑在你的笔记本电脑上：致命三重威胁</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 智能体就跑在你的笔记本电脑上：致命三重威胁

<div class="pd-byl"><b>Michael Patterson</b> · Coder 公司工程师 · 2026-10-16</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-10-talks-the-lethal-trifecta-is-already-on-your-l.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">问题不是会不会,而是什么时候,你会因为在那台笔记本电脑上运行智能体而遭遇某种安全事件。</div><div class="a">— Michael Patterson <button class="pd-ts" data-t="06:34" data-who="Michael Patterson" data-en="It's not if, it's when you're going to have some kind of security incident by having an agent on that laptop." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Michael Patterson]]
>
> **公司** [[Coder]]
>
> **概念** [[Claude Code]] · [[OpenClaw]] · [[致命三角]] · [[提示词注入]] · [[上下文投毒]] · [[特权升级]] · [[影子 AI]] · [[云开发环境]] · [[模型代理]] · [[智能体防火墙]] · [[护栏]] · [[可观测性]]

AI 智能体是 2025 年的主角，[[Claude Code|Claude Code]]、[[OpenClaw|OpenClaw]] 这类工具让开发效率飞起。

但 [[Michael Patterson|Michael Patterson]] 提醒所有人：这些智能体正跑在你的笔记本电脑上，而你的电脑上既有敏感数据，又连着互联网。

他说，这不是会不会出事的问题，而是什么时候出事。

## 什么是致命三重威胁？

这个词由 Simon Ellison 提出，指智能体的三层攻击面 <button class="pd-ts" data-t="05:14" data-who="Patterson" data-en="So what is the lethal trifecta? The lethal trifecta was a term coined by Simon Ellison, and it's essentially three layers, three threat layers to the attack surface." aria-label="回原文"></button>。第一层：智能体能接触私有数据——个人文件、凭证、公司知识产权、数据库。

第二层：它能连上互联网，可以把数据传出去。第三层：它还能从网上下载东西。

单独占一层问题不大，占两层在企业环境里完全不可接受。三层全占？「**不是会不会出事，而是什么时候出事**」<button class="pd-ts" data-t="06:34" data-who="Patterson" data-en="Having all three, it's basically not acceptable. It's not if, it's when you're going to have some kind of security incident by having an agent on that laptop. And so here I've got a couple of attack scenarios." aria-label="回原文"></button>。

而今天跑在无数员工笔记本电脑上的智能体，三层全占。

## 智能体是怎么被骗干坏事的？

一种典型手法叫[[提示词注入|提示词注入]]：攻击者在智能体信任的信息源里埋入恶意指令——报错信息、工单、持续集成日志，都行。

智能体会把这些当成可信指令照做。

还有上下文污染：往文档、数据里塞恶意内容，智能体读到就会照着执行。更麻烦的是[[特权升级|权限提升]]：

智能体为了干活往往拿到很高权限，被注入后可能删表、上传不该传的数据，甚至把公司知识产权发到公网上。

Patterson 讲了一个真实故事：有人在 Twitter 上发帖说智能体编程改变了他的人生，不到两天又发帖——智能体删掉了他的生产数据库 <button class="pd-ts" data-t="01:58" data-who="Patterson" data-en="This was the future for him. And then I think less than 24 hours later, or two days later, he posts on Twitter again and says, Agentec AI just destroyed my product, deleted my production database, and how can anyone ever use Agentec AI?" aria-label="回原文"></button>。

## 员工偷偷用 AI，比禁用更危险

很多公司不敢上智能体，安全团队不批。

但 Patterson 说，员工确实能从 AI 中获得实际好处，**你不让他们用，他们就用自己的个人订阅**，偷偷装在笔记本电脑上——这叫[[影子 AI|影子 AI]]。

公司完全看不到这些智能体在干什么，而智能体干坏事的速度非常快。

行业里还出现了新词Ninja AI：影子 AI 的规模化版本，一群智能体同时在组织里搞破坏，等发现时已经太晚 <button class="pd-ts" data-t="11:47" data-who="Patterson" data-en="And usually, agentic AI can do a lot of damage really fast. We're starting to see a new term in the industry called Ninja AI, which is shadow AI at scale, where you're not just having one agent breaking stuff," aria-label="回原文"></button>。

## 三道防线：隔离、代理、防火墙

怎么防？Patterson 给出三招。

第一，别让智能体跑在笔记本电脑上，放到云端远程开发环境里。

安全团队先审核过这个环境，智能体只能碰里面的代码、凭证和数据。

这还顺带解决了另一个麻烦：新项目装依赖、配环境太折腾，云端环境开箱即用，人和智能体都能直接开工。

第二，加一个[[模型代理|模型代理]]。

智能体每次调用大模型前都先过这道关卡，所有流量被记录，还能剥掉提示词注入、拦住不小心贴进提示词的信用卡号等敏感数据 <button class="pd-ts" data-t="18:48" data-who="Patterson" data-en="And it can sanitize, it can strip injections. If you have like, if you accidentally put credit card data into a prompt, you don't want that going to the LLM provider." aria-label="回原文"></button>。

第三，[[智能体防火墙|智能体防火墙]]。在进程层面盯着智能体：它要是想执行删仓库、删数据表这类命令，直接拒绝 <button class="pd-ts" data-t="19:19" data-who="Patterson" data-en="So on that remote environment that goes to the proxy, It runs, if that agent, for whatever reasons, runs GH repo delete or drop this table, you want some kind of agentic firewall that's looking at the process logs and saying, do not run this." aria-label="回原文"></button>。

## 落地前，每个人都在担心什么

Patterson 每周都和首席安全官聊一两次。他们的态度很一致：想让大家在 AI 高速路上开快车，但必须有[[护栏|护栏]]——出了事，背锅的是安全团队。

平台团队担心[[可观测性|可观测性]]：

怎么看到智能体的每一次调用，又不会被警报淹没——警报一多，大家就不看了，真正要命的事反而漏掉。

开发者也有顾虑：AI 写的代码带来技术债和漏洞，而且万一智能体闯祸，最后总要有人担责。

Patterson 的建议是：慢一点没关系，**先想清楚架构，确认每一层都有人看得见智能体在做什么** <button class="pd-ts" data-t="20:09" data-who="Patterson" data-en="Make sure that you've got some way of seeing everything that that agent does. It's okay to go slow so that you can think about your architecture, know what your infrastructure actually needs." aria-label="回原文"></button>。

## 本集带走

- 致命三重威胁：智能体同时能接触私有数据、能连外网、能下载内容——三层全占，出事只是时间问题。
- 提示词注入和上下文污染能让智能体执行恶意指令，权限过高时会删库、泄露知识产权。
- 公司不让用 AI，员工就用影子 AI偷偷用，风险更大、更不可见。
- 三道防线：云端隔离环境、模型代理（记录并过滤所有调用）、智能体防火墙（拦截危险命令）。
- AI 安全本质上和传统安全实践没有区别，别因为 AI 强大就放权。

> 【背景】Coder 成立于 2017 年，做远程开发环境，开源自托管，服务大型银行、对冲基金和政府机构。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">问题不是会不会,而是什么时候,你会因为在那台笔记本电脑上运行智能体而遭遇某种安全事件。</span>  
> *It's not if, it's when you're going to have some kind of security incident by having an agent on that laptop.*  
> <span class="qm">—— Michael Patterson · [06:34]</span> ^q1

> <span class="qz">所以任何一种提示词注入或上下文投毒都可以在不知不觉中提升那个智能体的权限,让它能做它不该做的事。</span>  
> *And so any one of these prompt injections or context poisoning can unwittingly, escalate the privilege of that agent so it can do things that it shouldn't do.*  
> <span class="qm">—— Michael Patterson · [07:47]</span> ^q2

> <span class="qz">而我们以为因为 AI 太强大了,我们可以随便给它它需要的一切,它不会犯同样的错误。</span>  
> *And we think that because AI is so powerful, we can just give it whatever it needs, and it's not going to make the same kind of mistakes.*  
> <span class="qm">—— Michael Patterson · [09:42]</span> ^q3

> <span class="qz">这是个真实的问题,因为一旦你把 AI 装到笔记本上,用的是个人订阅,企业就不知道发生了什么。</span>  
> *It's a real problem because once you get AI on your laptop, you're using your personal subscription, the enterprise doesn't know what's happening.*  
> <span class="qm">—— Michael Patterson · [11:33]</span> ^q4

> <span class="qz">而是大量智能体在一个组织里做很多事,直到太迟了才发现一大堆东西已经被搞坏了,而之前没人知道。</span>  
> *You've got multitudes of agents doing lots of things at an organization that no one knows until it's too late that a whole lot of stuff has gotten broken.*  
> <span class="qm">—— Michael Patterson · [11:56]</span> ^q5

> <span class="qz">仍然有一场圣战正在进行,一些最有技术能力的人还没有被说服 AI 能比他们更好地写代码。</span>  
> *There is still a holy war happening where some of the most technical people are not quite converted that AI can do code better than them.*  
> <span class="qm">—— Michael Patterson · [14:47]</span> ^q6

> <span class="qz">他们担心更多的技术债、更多的代码膨胀、更多的安全漏洞,以及把大部分时间花在修复 AI 垃圾上,而不是自己直接做。</span>  
> *They're worried about more technical debt, more code bloat, more security vulnerabilities, and spending most of their time fixing AI slop versus just doing it themselves.*  
> <span class="qm">—— Michael Patterson · [14:56]</span> ^q7

> <span class="qz">因为归根结底,当智能体真的做了我们没预料到的事情时,总要有人负责。</span>  
> *Because at the end of the day, someone is going to be accountable when an agent actually does something that we didn't expect it to do.*  
> <span class="qm">—— Michael Patterson · [15:18]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 安全」挖下去**

- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同概念:OpenClaw、护栏 (guardrails)、提示词注入 (prompt injection)、致命三要素 (lethal trifecta)</span>
- [[2026-09-03-talks-tethered-our-agents-are-us-shu-fang-two|给智能体系上绳索:Two Sigma 让云端 AI 以你的身份安全运行]]<span class="pd-rz">同概念:Claude Code、可观测性 (observability)、提示词注入 (prompt injection)</span>
- [[2026-10-10-talks-ai-agents-don-t-read-your-policy-docs-th|AI 智能体不读你的政策文档，它们只会调用你的接口]]<span class="pd-rz">同概念:可观测性 (observability)、影子 AI (shadow AI)、提示词注入 (prompt injection)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|把 AI 当员工来管理:Claire Vo 的九个智能体生活实战]]<span class="pd-rz">同概念:Claude Code、OpenClaw、提示词注入 (prompt injection)</span>
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|SaaS 不会死,PM 迎来黄金期:Dan Shipper 的 AI 工作预测]]<span class="pd-rz">同概念:Claude Code、OpenClaw、Codex</span>
- [[2026-06-09-ainativedev-ryan-lopopolo-openai-39-s-framework-for|Harness 工程：让智能体零人工写代码的实操]]<span class="pd-rz">同概念:护栏 (guardrails)、提示词注入 (prompt injection)、Codex</span>

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
