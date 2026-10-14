---
title: 把 Codex 塞进《毁灭战士》：OpenAI 开源了智能体的「发动机」
podcast: 精选演讲
date: 2026-10-14
source_url: undefined
duration: "17:49"
type: episode
cover: "#64748b"
description: OpenAI 开发者体验工程师 Dominik Kundel 讲解如何基于开源的 Codex harness 和 app server 协议，快速搭建自己的智能体客户端。
guests: ["[[Dominik Kundel]]"]
companies: ["[[Codex]]", "[[OpenAI]]"]
concepts: ["[[应用服务器]]", "[[智能体控制框架]]", "[[ACP（智能体客户端协议）]]", "[[动态工具]]", "[[开发者指令]]", "[[Codex CLI]]", "[[Codex Exec]]", "[[沙箱]]", "[[智能体]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-09-talks-building-on-the-codex-harness-dominik-ku#post","headline":"把 Codex 塞进《毁灭战士》：OpenAI 开源了智能体的「发动机」","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-09-talks-building-on-the-codex-harness-dominik-ku","mainEntityOfPage":"https://talk.solomind.cc/2026-10-09-talks-building-on-the-codex-harness-dominik-ku","description":"OpenAI 开发者体验工程师 Dominik Kundel 讲解如何基于开源的 Codex harness 和 app server 协议，快速搭建自己的智能体客户端。","datePublished":"2026-10-14","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Dominik Kundel"},{"@type":"Organization","name":"Codex"},{"@type":"Organization","name":"OpenAI"},{"@type":"Thing","name":"应用服务器 (app server)"},{"@type":"Thing","name":"智能体控制框架 (agent harness)"},{"@type":"Thing","name":"ACP（智能体客户端协议） (agent client protocol)"},{"@type":"Thing","name":"动态工具 (dynamic tools)"},{"@type":"Thing","name":"开发者指令 (developer instructions)"},{"@type":"Thing","name":"Codex CLI"},{"@type":"Thing","name":"Codex Exec"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"智能体 (agent)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"把 Codex 塞进《毁灭战士》：OpenAI 开源了智能体的「发动机」","item":"https://talk.solomind.cc/2026-10-09-talks-building-on-the-codex-harness-dominik-ku"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把 Codex 塞进《毁灭战士》：OpenAI 开源了智能体的「发动机」</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 把 Codex 塞进《毁灭战士》：OpenAI 开源了智能体的「发动机」

<div class="pd-byl"><b>Dominik Kundel</b> · OpenAI 开发者体验工程师 · 2026-10-14</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-09-talks-building-on-the-codex-harness-dominik-ku.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我在想怎么能在 Doom 里面运行 Codex，而不是在 Codex 里面运行 Doom。</div><div class="a">— Dominik Kundel <button class="pd-ts" data-t="12:08" data-who="Dominik Kundel" data-en="I thought about how can I actually run Codex inside of Doom rather than running Doom inside of Codex." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Dominik Kundel]]
>
> **公司** [[Codex]] · [[OpenAI]]
>
> **概念** [[应用服务器]] · [[智能体控制框架]] · [[ACP（智能体客户端协议）]] · [[动态工具]] · [[开发者指令]] · [[Codex CLI]] · [[Codex Exec]] · [[沙箱]] · [[智能体]]

[[Dominik Kundel|Dominik Kundel]] 在 [[OpenAI|OpenAI]] 负责 [[Codex|Codex]] 的开发者体验。这场 18 分钟的演讲讲了一件事：

Codex 的底层 harness 和包装它的 [[应用服务器|app server]] 协议都已开源，任何人都可以在它之上构建自己的[[智能体|智能体]]界面——哪怕是在电子游戏里。

## 什么是 Codex 的 app server？

app server 是一个包装 Codex harness 的协议，思路类似 agent client protocol（ACP）：**你写的应用作为客户端，通过消息和 Codex 服务端交互，发送指令、接收事件**。

OpenAI 自己的 Codex 应用、VS Code 扩展等第一方界面都跑在它上面，第三方的 Xcode、JetBrains 集成，以及 Theo 的 T3 Code、RemoteX 等开源项目也一样 <button class="pd-ts" data-t="02:32" data-who="嘉宾" data-en="In terms of how it works, the App Server protocol is a JSON RPC-style protocol that we actually use to power the Codex app, the IDE extension, our VS Code extension, so all of our first-party interfaces, but also third-party ones." aria-label="回原文"></button>。

甚至有人用它做了个插件，让你在 Claude Code 里调用 Codex。

关键信息：harness 和 app server 都是开源的，Apache 2 许可，可以随意复刻修改，还能接到任何兼容 responses API 的模型上，包括 LM Studio 或 Olama 这类本地方案。

## 事件一大堆，但都很实在

Kundel 现场演示了一个自制的事件查看器，截获真实 Codex 应用和 app server 之间的全部通信。

你会看到线程启动、配置读取、流式返回的数据增量等一连串事件，乍看吓人，其实大部分含义直白。

目前协议有超过 120 种客户端消息，还在持续增加：初始化、线程管理、设置目标、列插件、文件搜索、修改文件系统，全都可以调用 <button class="pd-ts" data-t="05:40" data-who="嘉宾" data-en="In fact, we have right now over 120 different client messages that we continuously add more to. And this goes from everything from initialization, where you're able to configure some of the more specific things to your client over thread modifications and turns, which are sort of the things that you would assume are the most classic things, but also stuff like setting a goal if you want to implement your own version of goal mode, and listing plugins, doing all of the different other aspects that you might see in the app, all the way to things like file search and modifying the file system." aria-label="回原文"></button>。

而且它比 ACP 更深入——不只是通用协议，还能通过协议细粒度配置底层智能体本身。

用户还能用自己的 ChatGPT 订阅登录，消耗自己的 Codex 额度。

## 想定制智能体？两件武器

一是[[开发者指令|开发者指令]]（developer instructions）：在 Codex 的系统提示词后面追加内容，而不是重写。

官方推荐这么做，因为原本的提示词针对各个模型做过大量调优，自己另起炉灶会丢掉这些积累 <button class="pd-ts" data-t="07:21" data-who="嘉宾" data-en="But we generally recommend that you actually append to that using the developer instructions. That way, you're still leveraging all of the work that we put into tweaking the prompts for the individual models while still customizing it for your specific use case of the harness." aria-label="回原文"></button>。

二是[[动态工具|动态工具]]：

你可以直接定义新函数给智能体用，还能标记为延迟加载——不塞进系统提示词占上下文，而是让 Codex 需要时通过工具搜索去找到它们 <button class="pd-ts" data-t="08:06" data-who="嘉宾" data-en="And you can actually mark them as deferred loading, which means that rather than injecting them into the system prompt, It allows Codex to use a tool search tool, which we'll cover more tomorrow in the other session, but it allows it to find these tools through tool search rather than polluting the overall context window." aria-label="回原文"></button>。

每个线程还能单独改配置，换模型、换服务商，甚至精细控制[[沙箱|沙箱]]能访问哪些网络连接和文件。

## 真没必要自己从头学

用起来出乎意料地简单。app server 就打包在 [[Codex CLI|Codex CLI]] 里，同一个二进制文件，装了 CLI 就能直接启动。可以让 Codex 帮你生成特定版本的 TypeScript 绑定或 JSON schema。

官方还新出了 Python SDK，替你处理生命周期管理。

不过 Kundel 打趣说，在场都是 AI 工程师，多数人大概会选第二条路：直接让 Codex 自己写。它实现这个协议非常拿手，指个文档方向就行。

他自己就用这个方法让 Codex 用 Visual Basic 写了个 Windows 原生客户端，基本一次成型 <button class="pd-ts" data-t="11:25" data-who="嘉宾" data-en="And it did it largely in one shot. So you can build really impressive applications with this in a fairly short amount of time without you having to learn all the nitty-gritty parts of building an agent." aria-label="回原文"></button>。

## 在《毁灭战士》里写代码

最放飞的部分：Kundel 没有把《毁灭战士》塞进 Codex，而是反过来，**把 Codex 塞进了《毁灭战士》**。

他用 Electron 和 Cloudflare 的 Doom WASM 渲染器搭了个应用，Codex 的界面直接渲染在游戏画面里，通过 Electron 的进程间通信连到 app server <button class="pd-ts" data-t="13:22" data-who="嘉宾" data-en="And if we actually interact with it here, we're booting up Codex. And again, this is rendered natively inside the actual video game and then passes it to the app server using Electron's IPC protocol." aria-label="回原文"></button>。

在游戏里跟 Codex 打招呼，它会回话；用动态工具给它开挂——满血满甲、全武器无限弹药，一喊就调；

问它当前目录，它真的去调 ZShell 查工作目录。「可以直接在《毁灭战士》里凭感觉写代码了。不过我不太推荐，还是 Codex 应用更好用。」<button class="pd-ts" data-t="14:27" data-who="嘉宾" data-en="It has its own workspace. So if you want, you can vibe code directly inside Doom. Not sure if I would recommend it." aria-label="回原文"></button>

## 和 Codex Exec 有什么区别？

[[Codex Exec|Codex Exec]] 是 CLI 里另一个命令，起一个非交互式界面跑任务，适合脚本化场景，比如在持续集成里自动修复 PR <button class="pd-ts" data-t="15:06" data-who="嘉宾" data-en="There's another command called Codex Exec, which spins up a non-interactive interface for you to kick off tasks. To Codex, this is great for scripting. If you're building a CI-CD implementation and you want to script certain acts like autofixing a PR, this is a great opportunity." aria-label="回原文"></button>。

但如果你要做一个完整的客户端、展示智能体状态，或者同时开很多 Codex 线程（比如跑自己的评测），**app server 才是正解**——你完全掌控 harness，不用自己琢磨怎么并行一堆 exec 调用。

## 本集带走

- Codex harness 和 app server 协议都开源（Apache 2），可复刻、可接其他模型。
- 超过 120 种客户端消息，从线程管理到沙箱控制都能调，支持用户自带 ChatGPT 订阅。
- 定制用开发者指令追加系统提示词，别急着重写；自定义工具标记延迟加载，别污染上下文窗口。
- 应用要自带一份 harness 二进制，别依赖用户装的 CLI 版本，省去大量兼容麻烦。
- 界面不必是聊天框：智能体可以塞进游戏、后台任务或任何奇怪的地方。

<div class="pd-sec pd-sec-q">全部金句 <span>2 条</span></div>

> <span class="qz">我在想怎么能在 Doom 里面运行 Codex，而不是在 Codex 里面运行 Doom。</span>  
> *I thought about how can I actually run Codex inside of Doom rather than running Doom inside of Codex.*  
> <span class="qm">—— Dominik Kundel · [12:08]</span> ^q1

> <span class="qz">第一个是，你应该真正发布你自己版本的 harness。</span>  
> *The first one is you should actually ship your own version of the harness.*  
> <span class="qm">—— Dominik Kundel · [16:05]</span> ^q2

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-09-09-pragmatic-building-codex-with-tibo-sottiaux|Codex 负责人亲述:OpenAI 内部如何造编程智能体]]<span class="pd-rz">同公司:Codex、OpenAI · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-10-06-talks-cooking-with-codex-charlie-guo-gabriel-c|用 Codex 做菜：从截图到自动化的六步烹饪法]]<span class="pd-rz">同公司:Codex、OpenAI · 同概念:app server、智能体 (agent)</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Codex、OpenAI · 同概念:智能体 (agent)、MCP</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-10-10-mos-pioneers-of-ai-openai-s-tibo-sottiaux-do|OpenAI产品负责人：不想让人类成为AI的「事后想起」]]<span class="pd-rz">同公司:Codex、OpenAI · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-09-12-a16z-why-companies-are-becoming-a-series-of-l|A16Z 消费投资合伙人 Anish Acharya：别怕“永久下层”，公司正在变成一串循环]]<span class="pd-rz">同公司:Codex、OpenAI · 同概念:智能体 (agent)、Claude Code</span>
- [[2026-09-29-talks-claude-code-s-bitter-lesson-prompts-harn|Claude Code 会消失吗？Anthropic 工程师谈提示词、可定制软件与前沿节奏]]<span class="pd-rz">同公司:OpenAI · 同概念:智能体 (agent)、沙箱 (sandbox)、Claude Code</span>

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
