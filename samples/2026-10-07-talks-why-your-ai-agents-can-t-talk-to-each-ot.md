---
title: AI 智能体为什么还聊不到一起？有人做了个“聊天室”
podcast: 精选演讲
date: 2026-10-13
source_url: undefined
duration: "16:55"
type: episode
cover: "#64748b"
description: Bend 联合创始人兼首席技术官 Vlad Luzin 讲了智能体之间通信的难题，以及他们的解决方案。
guests: ["[[Vlad Luzin]]"]
companies: ["[[Bend]]"]
concepts: ["[[智能体]]", "[[多智能体系统]]", "[[循环工程]]", "[[对抗性智能体]]", "[[单智能体瓶颈]]", "[[MCP]]", "[[A2A 协议]]", "[[分布式系统]]", "[[运行时绑定]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-07-talks-why-your-ai-agents-can-t-talk-to-each-ot#post","headline":"AI 智能体为什么还聊不到一起？有人做了个“聊天室”","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-07-talks-why-your-ai-agents-can-t-talk-to-each-ot","mainEntityOfPage":"https://talk.solomind.cc/2026-10-07-talks-why-your-ai-agents-can-t-talk-to-each-ot","description":"Bend 联合创始人兼首席技术官 Vlad Luzin 讲了智能体之间通信的难题，以及他们的解决方案。","datePublished":"2026-10-13","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Vlad Luzin"},{"@type":"Organization","name":"Bend"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"多智能体系统 (multi-agent system)"},{"@type":"Thing","name":"循环工程 (loop engineering)"},{"@type":"Thing","name":"对抗性智能体 (adversarial agents)"},{"@type":"Thing","name":"单智能体瓶颈 (single agent bottleneck)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"A2A 协议 (A2A)"},{"@type":"Thing","name":"分布式系统 (distributed systems)"},{"@type":"Thing","name":"运行时绑定 (runtime binding)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AI 智能体为什么还聊不到一起？有人做了个“聊天室”","item":"https://talk.solomind.cc/2026-10-07-talks-why-your-ai-agents-can-t-talk-to-each-ot"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 智能体为什么还聊不到一起？有人做了个“聊天室”</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 智能体为什么还聊不到一起？有人做了个“聊天室”

<div class="pd-byl"><b>Vlad Luzin</b> · Bend 联合创始人兼首席技术官 · 2026-10-13</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-07-talks-why-your-ai-agents-can-t-talk-to-each-ot.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">AI 将代表我们做工作，它们将不得不互相交谈，以便代表我们解决任务。</div><div class="a">— Vlad Luzin <button class="pd-ts" data-t="01:02" data-who="Vlad Luzin" data-en="AI will be doing work on our behalf and they will have to talk to each other in order to solve tasks on our behalf." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Vlad Luzin]]
>
> **公司** [[Bend]]
>
> **概念** [[智能体]] · [[多智能体系统]] · [[循环工程]] · [[对抗性智能体]] · [[单智能体瓶颈]] · [[MCP]] · [[A2A 协议]] · [[分布式系统]] · [[运行时绑定]]

你大概已经用上了 AI [[智能体|智能体]]：让 Claude 写代码，再让另一个会话审查。

但你有没有想过，==为什么这些智能体不能自己组个群聊，把活儿分工干完==？

[[Vlad Luzin|Vlad Luzin]] 是 [[Bend|Bend]] 公司的联合创始人和首席技术官，在一场开发者活动上，他讲清了这个问题的来龙去脉，并发布了自家产品。

## 未来的工作方式：智能体自己开会

Vlad 的判断很直接：**未来属于 AI 之间的通信**——企业内部的 AI 之间、企业之间的 AI 之间、消费者和企业的 AI 之间。

智能体会替我们干活，而要干活，它们就必须互相交流。

他描绘的场景是这样的：智能体分布在世界各地、随时在线。

它们收到任务后，可以在注册表里查找同伴，把对方拉进一个对话空间，委派任务，收集信息，再汇报给你。

整个过程像开一场远程会议——只不过参会的全是 AI。

## 你以为在用多个智能体，其实你是台“路由器”

现在很多开发者的做法，Vlad 称之为“[[对抗性智能体|对抗式智能体]]”：开两个会话干同一件事，一个写代码，一个审查代码。

问题在于，两个会话之间不通信，来回搬运信息的是你自己。

他的比喻是：你就是思科路由器和交换机，在两个有状态的智能体之间转发数据包。

更进一步的做法叫“[[循环工程|循环工程]]”（loop engineering）：把人工转发换成一段开源的 Python 或 TypeScript 脚本，让脚本自动在几个智能体之间来回递话。

思路没变，只是路由器从人换成了代码。

==为什么要费这么大劲开多个智能体==？

因为 Transformer 架构有先天限制，也就是“[[单智能体瓶颈|单智能体瓶颈]]”：确认偏误、注意力稀释、上下文碎片化、记忆衰退。

上下文窗口再大——100 万、200 万个词元——性能也救不回来。

## 现有的两条路，都走不通

既然要多智能体协作，最现成的办法似乎是接到聊天平台上：Slack、Teams、Discord、WhatsApp、Telegram。Anthropic 还发过 Slack 智能体。

但 Vlad 算了笔账：把智能体接入 Telegram 要 5 步，Discord 7 步，Slack 8 步，WhatsApp 11 步——全是手工操作，你得啃文档才能配好。

而且就算配好了，得到的也只是一个能跟你一个人说话的智能体：它没法跟其他智能体对话，也没法跟别人对话。

“你的智能体仍然被关在数字版的单独监禁里。”

另一条路是协议：[[MCP|MCP]]、ACP、[[A2A 协议|A2A]] 等。**Vlad 认为这些协议的抽象层级太低**。MCP 是无状态调用，你没法回头问刚才那个智能体发生了什么；

A2A 是单向的、客户端-服务器模式，想双向就得两头都实现；串起一堆接口调用，你会撞上超时。

而且服务发现、任务队列这些关键能力都还缺位，得自己补。

他的结论是：照这条路做下去，你是在搭流水线调度，不是在建[[多智能体系统|多智能体系统]]，“把时间浪费在无聊透顶的事情上”。

## 真正的拦路虎：分布式系统

让两个智能体互相对话，本质上是[[分布式系统|分布式系统]]问题。

而分布式系统本身就难做——先忘掉智能体，光是确定性软件就已经够头疼了，再加上智能体这种不确定性的“微服务”，麻烦翻倍。

==具体要解决什么==？Vlad 列了几项：传输层必须实时、有序（因为大语言模型要求消息按顺序到达），要处理重试；

要处理持久化和恢复，因为智能体所在的进程随时可能崩溃；

还有一个全新的难题叫“[[运行时绑定|运行时绑定]]”——想把一个 LandGraph 和一个 Codex 连起来，你得把线程 ID、会话 ID、执行 ID、运行 ID 互相映射好，否则它们没法为同一个目标协作。

再往上，你不能让开发者去管 IP、端口、URL，得抽象到对话、参与者、频道、消息路由这个层面。

最后，企业还要治理：身份认证、可观测性——不光要看到消息从 A 传到了 B，还要看到 B 收到消息之后调用了哪些工具。

Vlad 半开玩笑地说：这些问题不解决，“大家领着全民基本收入躺在沙滩上”的美好未来就不会来。

## Bend 的答案：一个全球协作层

接着 Vlad 发布了 Bend 的产品：一个面向所有智能体的全球交互与协作层，支持任何平台、语言、环境。

它不是点对点，而是多方互联；人类也能加入，照样可以和自己的智能体对话。

底层内置了注册表（智能体自动互相发现）、持久化、频道、消息过滤、安全和可观测性。

现场演示里，两个用户、两台浏览器接入平台。

一个 LangGraph 智能体被启动，几秒钟后它的“智能体名片”就出现在另一个用户的账户里，从此双方知道彼此的存在。更进一步的演示：

一个 Codex 智能体想连接 Vlad 在自己 Mac 上跑的个人助理，需要发送联系人请求，双方都同意才能进入对方的注册表——像加好友一样。

连上之后，两个完全有状态、部署在世界任意角落的智能体就能实时协作。

而且因为其中一方属于 Vlad，他对整个对话有完全的可见性，没有任何对话能绕开他。

他的智能体也能随时把他本人拉进对话，人类在环。

## 循环工程，不用写 50 万行代码

最后一段演示：用户 Mike 同时跑着接入平台的 Codex 和终端里的 Claude Code。

Claude 会话接入平台后获得身份和名片，然后自己创建对话空间，邀请 Codex 和 Mike 加入，开始分工做一个网站——一个干活，一个审查，卡住了就把人叫进来帮忙。

这就是前面说的“循环工程”，但用 Vlad 的话说，不需要“50 万行 Python 或 TypeScript 代码”来让智能体互相递话。

演讲以玩笑收尾：展位上来了喜欢“编排”却不喜欢“协作”的兽人，把周边纪念品全偷走了，欢迎大家领把剑帮忙把它们打回去。

## 本集带走

- 多智能体协作的瓶颈不在模型能力，而在 Transformer 的单智能体局限：上下文再大也躲不开注意力稀释和记忆衰退。
- 聊天平台为人类设计，主动阻止机器人互相对话；MCP、A2A 等协议抽象层级太低，缺状态、缺发现、缺队列。
- 智能体互联本质是分布式系统问题，难点包括实时有序传输、崩溃恢复、运行时绑定和跨系统的可观测性。
- Bend 发布的全球协作层让智能体自动互相发现、双向授权后进入对话空间，人类可随时以参与者身份加入。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">AI 将代表我们做工作，它们将不得不互相交谈，以便代表我们解决任务。</span>  
> *AI will be doing work on our behalf and they will have to talk to each other in order to solve tasks on our behalf.*  
> <span class="qm">—— Vlad Luzin · [01:02]</span> ^q1

> <span class="qz">你基本上就是一个 Cisco 路由器和交换机，在这两个有状态的智能体之间传递数据包。</span>  
> *You are basically a Cisco router and a switch moving packets between these two stateful agents.*  
> <span class="qm">—— Vlad Luzin · [02:40]</span> ^q2

> <span class="qz">所以一百万 token 或两百万 token 的上下文，在性能方面不会帮到你。</span>  
> *So one million tokens or two million tokens, context will not help you in terms of the performance.*  
> <span class="qm">—— Vlad Luzin · [03:56]</span> ^q3

> <span class="qz">所以基本上，你的智能体仍然独自处在一种数字式的单独监禁之中。</span>  
> *So basically your agents are still alone in a kind of digital solitary confinement.*  
> <span class="qm">—— Vlad Luzin · [05:18]</span> ^q4

> <span class="qz">它们是为人类构建的，而且它们会主动阻止你把一个机器人连接到另一个机器人。</span>  
> *They are built for humans, and they actively block you from connecting a bot to a bot.*  
> <span class="qm">—— Vlad Luzin · [07:21]</span> ^q5

> <span class="qz">你需要超越所有这些技术细节，上升到一个不同的抽象层次：对话、参与者、频道或房间，以及以智能体为一等公民而定制的消息路由。</span>  
> *You need to rise above all of the technical details to a different level of abstraction, conversation, participants, channels or rooms, message routing that is tailored to agents as the first citizens.*  
> <span class="qm">—— Vlad Luzin · [09:17]</span> ^q6

> <span class="qz">但这是不需要 50 万行你需要搬过来的 Python 或 TypeScript 代码的 loop engineering,那样你的智能体才能真正互相提示工作。</span>  
> *But it's loop engineering without 500,000 lines of a Python or TypeScript code that you need to bring over so your agents can actually prompt each other for work.*  
> <span class="qm">—— Vlad Luzin · [15:45]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-30-talks-your-agents-are-in-solitary-confinement|别再当智能体的路由器：多智能体通信为什么这么难]]<span class="pd-rz">同嘉宾:Vlad Luzin · 同概念:A2A、MCP、分布式系统 (distributed systems)、循环工程 (loop engineering)、智能体 (agent)</span>
- [[2026-07-13-pg-the-complete-claude-stack-for-pms|产品经理驾驭 Claude 生态：用五层架构打造专属 AI 幕僚长]]<span class="pd-rz">同概念:MCP、对抗式智能体 (adversarial agents)、智能体 (agent)、Claude Code</span>
- [[2026-08-29-talks-agents-are-where-microservices-were-in-2|Navan 架构师谈生产环境智能体：从运行时到护栏的实战分层]]<span class="pd-rz">同概念:A2A、MCP、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:循环工程 (loop engineering)、智能体 (agent)</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>
- [[2026-08-19-pragmatic-from-chrome-devtools-to-ai-engineering|Addy Osmani：从造浏览器到对抗认知投降]]<span class="pd-rz">同概念:循环工程 (loop engineering)、智能体 (agent)</span>

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
