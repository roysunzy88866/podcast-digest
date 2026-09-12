---
title: 把画布交给智能体：TLDraw 的空间协作实验
podcast: 精选演讲
date: 2026-09-12
source_url: undefined
duration: "18:32"
type: episode
cover: "#64748b"
description: TLDraw 产品工程师 Max Schraich 演示为什么无限画布是和智能体协作的好地方，以及他们怎么让 LLM 学会看懂、操作 2D 空间。
guests: ["[[Max Drake]]"]
companies: ["[[TLDraw]]"]
concepts: ["[[智能体]]", "[[多智能体协调]]", "[[编码智能体]]", "[[Claude Code]]", "[[Canvas]]", "[[Fairies]]", "[[Agent Starter Kit]]", "[[TechTree 应用]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-10-talks-the-spatial-harness-bringing-agents-to-t#post","headline":"把画布交给智能体：TLDraw 的空间协作实验","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-10-talks-the-spatial-harness-bringing-agents-to-t","mainEntityOfPage":"https://talk.solomind.cc/2026-09-10-talks-the-spatial-harness-bringing-agents-to-t","description":"TLDraw 产品工程师 Max Schraich 演示为什么无限画布是和智能体协作的好地方，以及他们怎么让 LLM 学会看懂、操作 2D 空间。","datePublished":"2026-09-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Max Drake"},{"@type":"Organization","name":"TLDraw"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"多智能体协调 (multi-agent coordination)"},{"@type":"Thing","name":"编码智能体 (coding agent)"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"Canvas"},{"@type":"Thing","name":"Fairies"},{"@type":"Thing","name":"Agent Starter Kit"},{"@type":"Thing","name":"TechTree 应用 (TechTree)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"把画布交给智能体：TLDraw 的空间协作实验","item":"https://talk.solomind.cc/2026-09-10-talks-the-spatial-harness-bringing-agents-to-t"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把画布交给智能体：TLDraw 的空间协作实验</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 把画布交给智能体：TLDraw 的空间协作实验

<div class="pd-byl"><b>Max Drake</b> · TLDraw 产品工程师 · 2026-09-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-10-talks-the-spatial-harness-bringing-agents-to-t.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>



> [!info] 关联
> **人物** [[Max Drake]]
>
> **公司** [[TLDraw]]
>
> **概念** [[智能体]] · [[多智能体协调]] · [[编码智能体]] · [[Claude Code]] · [[Canvas]] · [[Fairies]] · [[Agent Starter Kit]] · [[TechTree 应用]]

这一集是 [[TLDraw|TLDraw]] 的产品工程师 Max Schraich 的现场演讲，主题是「[[Canvas|画布]]上的[[智能体|智能体]]」。TLDraw 你可能用过——它是一个免费的无限画布白板应用，总部在伦敦；但它更重要的身份是为很多无限画布体验提供动力的 SDK 引擎——想把画布部分做对(选择、缩放、箭头这些)其实非常难，所以 Replit 全新的智能体画布功能就构建在 TLDraw 之上 <button class="pd-ts" data-t="02:03" data-who="Max Schraich" data-en="It's where I work. But the last thing that TL Draw is, which is, I think, in my opinion, the most important, is it's the Infinite Canvas SDKs that powers this app." aria-label="回原文"></button>。

开场他先现场演示了一个「极限测试」：让智能体读同事 Spencer 发来的邮件链接，找到 Notion 文档里的规格说明，然后在 TLDraw 桌面应用上把那个演示构建出来——全程不用人碰键盘。这个演示直到演讲结束还在跑，他坦言「它已经跑了 13 分钟了…

…它通常快得多」<button class="pd-ts" data-t="15:23" data-who="Max Schraich" data-en="Alright, it hasn't built the fluid simulation yet. It's been working for 13 minutes. That's actually fine." aria-label="回原文"></button>。

## 为什么智能体天生不会「看」画布

[[Claude Code|Claude Code]] 这类[[编码智能体|编码智能体]]之所以好用，是因为它们工作的媒介——写代码——本质上就是它们被训练的媒介：文本进、文本出 <button class="pd-ts" data-t="04:17" data-who="Max Schraich" data-en="So before we talk about agents on the canvas, really quickly I want to talk about agents not on the canvas. I'm sure you guys have all used an app that looks like this, Claude Code, and I'm gonna really oversimplify here, but basically part of the reason why these apps are so good and why they work is because the medium in which they're working" aria-label="回原文"></button>。而画布完全是另一回事：他问观众有没有试过让智能体对齐一个 UI 元素，结果发现它们完全做不到。智能体在 2D 空间中工作和理解 2D 空间非常非常糟糕，要让它做到需要大量工程工作 <button class="pd-ts" data-t="04:45" data-who="Max Schraich" data-en="Again, oversimplifying, but that's essentially how they work. I don't know if you guys have ever tried to get your agents to do UI stuff and tried to get them to align something, found that they could not do that whatsoever, because it turns out agents are really, really bad at working in 2D space and understanding 2D space, and it actually requires a lot of engineering work to get them to..." aria-label="回原文"></button>。

## 第一步：教会 LLM 「看懂」画布(Teach 项目)

TLDraw 做的第一个项目叫 Teach,核心是教会 LLM 如何同时通过截图和画布的 JSON 数据来理解画布上实际有什么——「这不是一个简单的问题」<button class="pd-ts" data-t="06:08" data-who="Max Schraich" data-en="This is, And so the work behind this, it's a single-shot prompt, but we basically, we tell the agent how to interpret both via screenshots and via the data what is actually on the canvas, like what it's looking at, which is actually, you know, it's not a trivial problem." aria-label="回原文"></button>。演示很有说服力：他在画布上画了几根蜡烛和一个鼠标形状，只说一句「让鼠标吹灭蜡烛」，模型就自己造出了风和烟、摆对了位置——而这些全都是普通形状，不是什么特殊的鼠标图形。这是单次提示词完成的。

## 第二步：从单次提示到智能体式工作(Agent Starter Kit)

单次提示不够，他们又做了 MIT 许可的 TLDraw [[Agent Starter Kit|Agent Starter Kit]],把「看懂画布」包进一个让智能体自主工作的框架。演示：画布上有一只小猫，他让智能体「在画布其他地方找到猫的朋友，带一只过来，她最喜欢的颜色是红色」。智能体自己缩放视图去侦察画布上有什么、给自己列了待办目标——就像你问编码智能体「这个东西定义在代码库哪里」，它会自己搜索找到一样 <button class="pd-ts" data-t="07:23" data-who="Max Schraich" data-en="So you can see the view of the agent. There's some potential friends over here and if you read the, and basically what's going on is that the agent has kind of like, we've given it a prompt and using the information it has about the canvas, it's going to kind of like make some goals for itself." aria-label="回原文"></button>。

## 第三步：Fairies——多智能体在画布上协作

接下来是 [[Fairies|Fairies]] 项目：每个「小仙子」是一个智能体，在画布上以可爱的形象出现(可以换帽子、换颜色，甚至有个「腿长滑块」——他强调这不傻，当多个智能体同时在画布上工作时，分清哪个是哪个很重要)。最关键的演示是[[多智能体协调|多智能体协调]]：他全选了几只小仙子，相当于开了一个「智能体群聊」，然后说「我 10 分钟后有董事会会议，把我 2025 财年的财务数据画成备忘录」。结果：一只小仙子自动成为「编排者」，写出了计划、把任务分配出去，然后等待其他小仙子完成，完成后会被通知去审查 <button class="pd-ts" data-t="11:03" data-who="Max Schraich" data-en="Yeah, so that one's bored, that one's waiting. So this is the orchestrator ferry. What it's done is it's assigned the task, and now it's waiting for the other ones to start and finish it." aria-label="回原文"></button>。

他点出这套交互的真正价值：如果有 10 个智能体在干活，你不需要去读聊天记录才知道发生了什么——**直接看智能体在画布上的状态就行** <button class="pd-ts" data-t="10:35" data-who="Max Schraich" data-en="And again, the animations are kind of cute and funny but it's actually really important. I don't have to read a chat or go through, you know, imagine if I have 10 agents working." aria-label="回原文"></button>。画布上让人类协作舒服的一切(光标、视口、实时同步)，同样让它成为与智能体协作的绝佳场所 <button class="pd-ts" data-t="03:54" data-who="Max Schraich" data-en="You can see your collaborators' cursors and selections and viewports. And I think all of the things that make just the Canvas in general a really great place for interacting with and collaborating with your colleagues also make it a really great place for interacting and collaborating with agents." aria-label="回原文"></button>。

## 跳出画布：TechTree 和「拿桌面应用当窗口管理器」

Fairies 的局限是「被困在画布里」——整个 harness 必须是画布 harness,很难和真实世界的东西配合。于是两个延伸：

**[[TechTree 应用|TechTree 应用]]**：TLDraw 内部接近发布时会抛弃所有任务管理软件，手画一张巨大的依赖图。他做了个原型，让依赖图里的每个任务节点都是一个可启动的编码智能体，自主干活、开 PR、合并，而且多人协作——同事可以直接进来加任务、看进度。代码全是智能体写的，他自己一行没写。

**桌面应用即脚本环境**：TLDraw 桌面应用在本地运行，暴露出编辑器实例，带一个服务器，让任何智能体(比如 Claude Code)直接对着编辑器写纯 JavaScript——相当于把桌面应用变成脚本环境。同事的玩法更野：把 TLDraw 桌面应用当窗口管理器，让 Claude Code(它能访问真实电脑)画矩形、写 AppleScript 去真的移动窗口，甚至用真实窗口玩 Pong。他的结论是：你能拿到画布的全部基础元素、做出那些奇怪的空间界面，同时让智能体在真实世界里工作、访问真实数据 <button class="pd-ts" data-t="17:28" data-who="Max Schraich" data-en="It's usually much faster. But I think this stuff is so cool because this lets you do all of the weird spatial interfaces that you can do on the canvas. You get all of the primitives of the canvas." aria-label="回原文"></button>。

## 本集带走

- **智能体搞不定 2D 空间，但可以教**：编码智能体好用是因为「文本进、文本出」正好匹配训练媒介；要让它们在画布上工作，得同时喂截图和结构化数据(JSON),教它理解看到的是什么、以及它的动作会怎么改变画布。
- **画布是比聊天窗口更好的智能体界面**：多个智能体并行干活时，不用读任何聊天记录，直接看画布上的状态、任务、动画就知道谁在干嘛、谁在等谁。
- **多智能体协调可以在画布上自然涌现**：全选一组智能体当「群聊」发指令，就能让其中一只自动成为编排者，分配任务、等待完成、再审查。
- **画布不必是牢笼**：把桌面应用暴露成脚本环境，智能体既拥有画布的空间界面原语，又能操作真实文件、真实窗口——从白板工具变成能干实事的临时 UI。
- **画布本身就该是「和智能体协作的场所」**：这是他的核心主张——远程办公时代我们已经在画布上和人协作，和智能体协作也应该是同一件事。

> 【背景】TLDraw 是一家总部在伦敦的公司，旗下有同名无限画布白板应用，并向第三方提供构建画布类产品的 SDK;Replit、幻灯片设计器等产品都基于它构建。

<div class="pd-sec pd-sec-q">全部金句 <span>0 条</span></div>



<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-12-a16z-why-companies-are-becoming-a-series-of-l|A16Z 消费投资合伙人 Anish Acharya：别怕“永久下层”，公司正在变成一串循环]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)、编码智能体 (coding agent)</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)、沙箱 (harness)</span>
- [[2026-07-21-trainingdata-factory-s-matan-grinberg-the-coming-dark|Factory CEO Matan:早两年等于错，退款、路由器与软件工厂]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)、沙箱 (harness)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)、ChatGPT</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>

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
