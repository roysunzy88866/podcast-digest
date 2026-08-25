---
title: Ryan Carson：怎么管一群AI智能体干活
podcast: "Lenny's Podcast"
date: 2026-08-25
source_url: undefined
duration: "44:11"
type: episode
cover: "#6366f1"
description: Ryan Carson 分享他用 Devon 等云端智能体管理成群编码 agent 的具体方法——文件夹分优先级、Watchdog 自动巡检、视频验证合并 PR。
host: "[[Ryan Carson]]"
cohosts: ["[[Claire]]"]
companies: ["[[Devon]]", "[[Codex]]", "[[Claude Code]]"]
concepts: ["[[智能体]]", "[[云端智能体]]", "[[后台智能体]]", "[[剧本]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-24-lennys-i-spent-20000-on-devin-in-a-month#post","headline":"Ryan Carson：怎么管一群AI智能体干活","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-24-lennys-i-spent-20000-on-devin-in-a-month","mainEntityOfPage":"https://talk.solomind.cc/2026-08-24-lennys-i-spent-20000-on-devin-in-a-month","description":"Ryan Carson 分享他用 Devon 等云端智能体管理成群编码 agent 的具体方法——文件夹分优先级、Watchdog 自动巡检、视频验证合并 PR。","datePublished":"2026-08-25","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Ryan Carson"},{"@type":"Person","name":"Claire"},{"@type":"Organization","name":"Devon"},{"@type":"Organization","name":"Codex"},{"@type":"Organization","name":"Claude Code"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"云端智能体 (cloud agent)"},{"@type":"Thing","name":"后台智能体 (background agent)"},{"@type":"Thing","name":"剧本 (playbook)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"Ryan Carson：怎么管一群AI智能体干活","item":"https://talk.solomind.cc/2026-08-24-lennys-i-spent-20000-on-devin-in-a-month"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Ryan Carson：怎么管一群AI智能体干活</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Ryan Carson：怎么管一群AI智能体干活

<div class="pd-byl"><b>Ryan Carson</b> · 2026-08-25</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-24-lennys-i-spent-20000-on-devin-in-a-month.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我认为未来几乎 100% 是云端智能体。</div><div class="a">— Ryan Carson <button class="pd-ts" data-t="09:46" data-who="Ryan Carson" data-en="I think the future is pretty much 100% cloud agents." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Ryan Carson]] · [[Claire]]
>
> **公司** [[Devon]] · [[Codex]] · [[Claude Code]]
>
> **概念** [[智能体]] · [[云端智能体]] · [[后台智能体]] · [[剧本]]

[[Ryan Carson|Ryan Carson]] 现在几乎所有工程工作都在 [[Devon|Devon]]（一个云端编码[[智能体|智能体]]）里完成，屏幕上同时开着 10 到 15 个线程。他一个月在 Devon 上花了 20,000 美元，后来找 Cognition 要到了每月等额的免费额度 <button class="pd-ts" data-t="09:56" data-who="Ryan Carson" data-en="So I started looking at that and was really impressed. So now I went all in, so much so I spent, at one point I was spending $5,000 on Devon, and then it went up to $20,000 one month." aria-label="回原文"></button>。他的核心判断是：未来几乎 100% 是[[云端智能体|云端智能体]]，还在本地做工程的人需要睁眼看看了 <button class="pd-ts" data-t="09:46" data-who="Ryan Carson" data-en="You really need to open your eyes. I think the future is pretty much 100% cloud agents. There's going to be some local dev." aria-label="回原文"></button>。

## 用文件夹管智能体的优先级

管十几个并发线程，他的方法极其朴素——文件夹加一张纸。在 Devon 里建 P0、P1、P2 文件夹，P0 放无论如何今天都要推进的事（通常是新功能），P1 往下排，还有一个单独的 Bug 文件夹放需要快速修复的问题 <button class="pd-ts" data-t="12:17" data-who="Ryan Carson" data-en="And you'll notice... I've got bugs, right? I've got P0, P1, P2." aria-label="回原文"></button>。同时手边放一张物理纸，写上本周优先事项，用来锚定自己别被线程里的噪音带跑 <button class="pd-ts" data-t="12:49" data-who="Ryan Carson" data-en="I've got eight screens concurrently open, right? And so the way I stay focused is by also having this piece of paper which has weekly priorities on it. Okay, so it's all about weekly." aria-label="回原文"></button>。

他强调，现在工程师的核心技能不是写代码，而是管理智能体——怎么排优先级、怎么分派、哪里该精细管控、哪里该放手。这些跟管人的管理技能直接对应 <button class="pd-ts" data-t="16:04" data-who="Ryan Carson" data-en="The reason why I think folks of a certain level of experience are like ready to cook right now with AI is all those management skills that you have developed over your career can be applied right here." aria-label="回原文"></button>。

## Watchdog：让智能体替你巡检业务

客户多了之后，他造了一个叫 Watchdog 的[[剧本|剧本]]（ playbook），专门解决"我不知道业务里现在到底发生了什么"的焦虑 <button class="pd-ts" data-t="17:02" data-who="Ryan Carson" data-en="So Watchdog, what it does, and this is multiple iterations, everybody. So what you want is, like, when that moment where you feel like, I need to know what's going in the business right now." aria-label="回原文"></button>。运作方式：针对每个客户账号，智能体会进去查自上次巡检以来的所有活动——Sentry 错误在哪、用户在哪里碰到 UX 问题、哪些问题已经被修了、哪些有开放 PR 但没合并——然后列出排名前三的问题，附带修复状态 <button class="pd-ts" data-t="16:58" data-who="Ryan Carson" data-en="Oh, my God, how do you keep track of it? So Watchdog, what it does, and this is multiple iterations, everybody. So what you want is, like, when that moment where you feel like, I need to know what's going in the business right now." aria-label="回原文"></button>。他觉得烦躁的时候跑一次 Watchdog，就能快速掌握全局。

## 编码智能体不只写代码

Ryan 认为人们严重低估了云端编码智能体的能力边界。Devon 在他手里不只是写代码——还帮他做报价、运营文档、客户分流 <button class="pd-ts" data-t="23:10" data-who="Ryan Carson" data-en="And in fact, Devin runs DealDesk for me. So Devin's doing quoting, custom quoting for me, like setting out operations, documentation, customer triage." aria-label="回原文"></button>。

他的思路是：想象一个既了解你整个代码库、又能写代码解决任何业务问题的人，你会让他干什么？就该这么用这些智能体 <button class="pd-ts" data-t="23:25" data-who="Ryan Carson" data-en="So Devin's doing quoting, custom quoting for me, like setting out operations, documentation, customer triage. Like, I always think, you know, what would you do with somebody who both knew your code base and could write code to solve anything in your business?" aria-label="回原文"></button>。

## 两个工具的分工：Codex 管前端打磨，Devon 管后台和验证

他同时用 [[Codex|Codex]] 和 Devon，分工明确。需要大量前端 UI 磨、需要低延迟、需要人在旁边随时干预的场景，用 Codex 配合 Goal（一种让智能体自主执行多步任务的机制）和浏览器，边写边看边改 <button class="pd-ts" data-t="24:58" data-who="Ryan Carson" data-en="I'll take the subsidy. That, you know, plus goal really, really is good for when you have this kind of, I've got a feature, it's a lot of front-end UI, I just need you to grind for a lot and I need to be here and kind of hold your hand." aria-label="回原文"></button>。后台自动修 Bug、一次性小需求、运营类工作，丢给 Devon <button class="pd-ts" data-t="26:33" data-who="Ryan Carson" data-en="Those are kind of what I'm using Codex for. When I'm using background agents, it's a lot of like auto fixes on bugs. Why not like when I'm on calls with customers and they say, oh, do you have this MCP?" aria-label="回原文"></button>。

PR 合并流程上，他写了一个叫"Land PR"的剧本：智能体做完 PR 后自动触发 Devon 内置的代码审查，最多跑两轮找 Bug 和未解决的评论；然后智能体在浏览器里录一段带字幕的视频演示，附带测试清单（红/绿），他看一眼视频说"通过"，就合并 <button class="pd-ts" data-t="28:35" data-who="Ryan Carson" data-en="And then I trigger it. And then what it does is it basically makes sure that, number one, it runs a fresh Devon review on the PR. And Devon review is like an actual product inside of Devon, which is another reason why I think people should just pick..." aria-label="回原文"></button>。

[[Claude Code|Claude Code]] 他也用，但只限一个场景：创建和延续设计系统（把 Figma 或示例站点拆成可复用的设计令牌），这方面 Claude 目前无可替代 <button class="pd-ts" data-t="36:36" data-who="Ryan Carson" data-en="So I can tell you what I did. I think Claude Designs Create a design system is like unmatched right now." aria-label="回原文"></button>。但他受不了 Claude 的输出格式，血压会升高，所以设计令牌建好后就导出给 Codex 去实际构建组件 <button class="pd-ts" data-t="37:53" data-who="Ryan Carson" data-en="Yeah, that's exactly what I did. I mean, my problem with Claude, infinite tokens, very intelligent. My blood boils reading Claude output." aria-label="回原文"></button>。

## 别让智能体决定做什么产品

两人都反复强调一点：代码产出量和可商业化产品之间存在严重错配 <button class="pd-ts" data-t="20:51" data-who="Ryan Carson" data-en="Yeah, for stuff. And so I do think there's this like mismatch between the quantity of output of code and like commercializable product. Amen." aria-label="回原文"></button>。前沿模型离"知道该发布什么"还差得远，自动改进循环在产品层面基本是个笑话 <button class="pd-ts" data-t="20:13" data-who="Ryan Carson" data-en="And two, I don't think it actually adds value. I agree. I actually think we're nowhere near any frontier model having the intelligence to know what to ship." aria-label="回原文"></button>。

Ryan 找到产品市场契合点的方式极其传统——发邮件冷启动、跟潜在客户开 Google Meet、然后直接去人家办公室坐着聊 <button class="pd-ts" data-t="21:11" data-who="Ryan Carson" data-en="I think what is happening is people are not getting out of their chair enough and actually talking to real people. So the way I figured out PMF for Untangle was I went outbound with an email." aria-label="回原文"></button>。他说因为 AI 让我们能 shipped so much，反而让人不愿意从椅子上站起来去跟真人说话了 <button class="pd-ts" data-t="21:31" data-who="Ryan Carson" data-en="But then step two is as soon as we landed them as a customer, I was like, can I come to your office? And I just want to sit and I want to talk and I want to, and this is all like obvious product stuff, but I think because we can ship so much and build so much digital product, we're not getting out of our chairs enough." aria-label="回原文"></button>。

## 招人：不看简历，看你怎么管智能体

Ryan 招第一个工程师的方式：在 Twitter 发帖子，要求候选人录一段全屏桌面视频，展示自己用智能体为一个已有应用构建新功能的完整过程。不聊天、不开会，只看视频里你作为一个智能体管理者有多好 <button class="pd-ts" data-t="40:25" data-who="Ryan Carson" data-en="But I think this is interesting. So what I decided to do is I basically on Twitter, I was like, okay, we're hiring our first engineer. You got to be like super duper duper AI forward, you know, of course." aria-label="回原文"></button>。

第二阶段再给 Devon 权限让他们做真实项目，同样录视频。他打算入职后也主要通过观察智能体输出来管理这个人 <button class="pd-ts" data-t="41:24" data-who="Ryan Carson" data-en="And then I'm going to hire them. And then I'm just going to watch their agent output. And that's how I'm going to manage them." aria-label="回原文"></button>。

## 本集带走
- **用文件夹给智能体线程分级**：P0/P1/P2 + 独立 Bug 文件夹，配合一张写本周优先级的纸，防止被并发线程淹没
- **造一个 Watchdog 式的巡检剧本**：让智能体定期扫每个客户账号的错误、活动和 PR 状态，汇总成"前三问题 + 修复情况"报告
- **把编码智能体当全能业务助手用**：报价、文档、客户分流都可以丢给它，别只让它写代码
- **Land PR 流程自动化**：审查跑两轮 → 浏览器录带字幕的视频演示 → 人看视频说"通过"→ 合并
- **设计系统用 Claude 起、Codex 建**：Claude 拆设计令牌，导出后交给 Codex 实际构建组件
- **产品方向不能靠智能体拍**：代码量不等于产品价值，PMF 还是得靠站起来去跟真人聊
- **招聘看"智能体管理能力"**：让候选人录全屏操作视频，直接看ta怎么跟智能体协作，比聊简历高效

<div class="pd-sec">全部金句 <span>4 条</span></div>

> <span class="qz">我认为未来几乎 100% 是云端智能体。</span>  
> *I think the future is pretty much 100% cloud agents.*  
> <span class="qm">—— Ryan Carson · [09:46]</span> ^q1

> <span class="qz">我实际上认为我们离任何具有知道发布什么的智能的前沿模型还差得很远。</span>  
> *I actually think we're nowhere near any frontier model having the intelligence to know what to ship.*  
> <span class="qm">—— Ryan Carson · [20:13]</span> ^q2

> <span class="qz">就像，我总是在想，你知道，你会怎么对待一个既了解你的代码库又能编写代码来解决你业务中任何问题的人？这就是我使用这些后台智能体的方式。</span>  
> *Like, I always think, you know, what would you do with somebody who both knew your code base and could write code to solve anything in your business? That's how I use these background agents.*  
> <span class="qm">—— Claire · [23:25]</span> ^q3

> <span class="qz">读 Claude 的输出让我血液沸腾。它实际上升高了我的血压。它让我非常焦虑。</span>  
> *My blood boils reading Claude output. It actually raises my blood pressure. It makes me so anxious.*  
> <span class="qm">—— Claire · [37:59]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同公司:Claude Code、Codex、Cursor · 同概念:智能体 (agent)</span>
- [[2026-06-24-pg-company-os-jz|Laurel 产品负责人：怎么用 GitHub 把全公司的工作流变成 AI 技能]]<span class="pd-rz">同公司:Devon · 同概念:剧本 (playbook)、智能体 (agent)、技能 (skill)</span>
- [[2026-08-09-talks-multiplayer-agentic-engineering-arjun-si|让非工程师也能下指令：Superconductor 的多人智能体协作法]]<span class="pd-rz">同公司:Claude Code、Codex、Cursor · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-24-howiai-i-spent-20-000-on-devin-in-a-month--here|Ryan Carson：从本地编码到管理成群云端智能体]]<span class="pd-rz">同嘉宾:Claire · 同公司:Claude Code、Codex、Devon · 同概念:云端智能体 (cloud agent)、剧本 (playbook)、后台智能体 (background agent)、智能体 (agent)、产品市场契合点 (product market fit)</span>
- [[2026-singju-openclaw-80apps|OpenClaw 创始人 Peter Steinberger：让智能体直接接管你的整台电脑]]<span class="pd-rz">同公司:Claude Code、Codex · 同概念:智能体 (agent)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Claude Code、OpenAI · 同概念:智能体 (agent)</span>

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
  // 故再兜一条 history.length>1(站内点进必有返回历史)。命中「直开」给 body 打 .pd-direct,CSS 切显隐。
  function direct(){
    var ref = document.referrer || '';
    var fromSite = (ref.indexOf(location.origin) === 0) || history.length > 1;
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
