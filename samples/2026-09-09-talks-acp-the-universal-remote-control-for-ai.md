---
title: AI 的通用遥控器：为什么智能体行业还需要一个 ACP 协议
podcast: 精选演讲
date: 2026-09-11
source_url: undefined
duration: "10:50"
type: episode
cover: "#64748b"
description: Block 工程师、MCP 维护者 Alex Hancock 提出 ACP(智能体客户端协议)，解决客户端被锁定在单一 harness 的问题。
guests: ["[[Alex Hancock]]"]
companies: ["[[Block]]", "[[Goose]]", "[[Zed]]", "[[JetBrains]]"]
concepts: ["[[ACP（智能体客户端协议）]]", "[[MCP]]", "[[harness]]", "[[智能体]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-09-talks-acp-the-universal-remote-control-for-ai#post","headline":"AI 的通用遥控器：为什么智能体行业还需要一个 ACP 协议","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-09-talks-acp-the-universal-remote-control-for-ai","mainEntityOfPage":"https://talk.solomind.cc/2026-09-09-talks-acp-the-universal-remote-control-for-ai","description":"Block 工程师、MCP 维护者 Alex Hancock 提出 ACP(智能体客户端协议)，解决客户端被锁定在单一 harness 的问题。","datePublished":"2026-09-11","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Alex Hancock"},{"@type":"Organization","name":"Block"},{"@type":"Organization","name":"Goose"},{"@type":"Organization","name":"Zed"},{"@type":"Organization","name":"JetBrains"},{"@type":"Thing","name":"ACP（智能体客户端协议） (agent client protocol)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"智能体 (agent)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AI 的通用遥控器：为什么智能体行业还需要一个 ACP 协议","item":"https://talk.solomind.cc/2026-09-09-talks-acp-the-universal-remote-control-for-ai"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 的通用遥控器：为什么智能体行业还需要一个 ACP 协议</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 的通用遥控器：为什么智能体行业还需要一个 ACP 协议

<div class="pd-byl"><b>Alex Hancock</b> · Block 工程师 · 2026-09-11</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-09-talks-acp-the-universal-remote-control-for-ai.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">MCP 最强大的地方不在于 MCP 本身的任何特性，而在于所有人都在使用 MCP。</div><div class="a">— Alex Hancock <button class="pd-ts" data-t="02:45" data-who="Alex Hancock" data-en="And the most powerful thing about MCP is not anything about MCP itself, but it's that everyone uses MCP." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Alex Hancock]]
>
> **公司** [[Block]] · [[Goose]] · [[Zed]] · [[JetBrains]]
>
> **概念** [[ACP（智能体客户端协议）]] · [[MCP]] · [[harness]] · [[智能体]]

这一集是一个短演讲，主角是 [[Alex Hancock|Alex Hancock]]——[[Block|Block]](旗下有 Cash App、Square 和 Tidal)的软件工程师，他维护开源[[智能体|智能体]]项目 [[Goose|Goose]](最初是 Block 内部项目，后开源并捐赠给 Linux 基金会)，同时也是 [[MCP|MCP]](模型上下文协议，即智能体调用工具的开放标准)的 Rust SDK 维护者 <button class="pd-ts" data-t="00:35" data-who="Alex Hancock" data-en="Okay, so a little bit about me before we start. I am a software engineer at Block, which is the parent company of Cash App and Square and Tidal. We have a few different things going on now." aria-label="回原文"></button>。他开场还开了个玩笑：上一位演讲者说 MCP 客户端维护者还没实现对「任务」的支持是因为聪明，而他本人就是维护者，「我可以告诉你们，其实只是因为我(懒)」<button class="pd-ts" data-t="00:19" data-who="Alex Hancock" data-en="Today I'm going to talk about universal remote control for AI. And before I start, I just want to say the previous speaker said that MCP client maintainers haven't implemented support for tasks because they're smart." aria-label="回原文"></button>。

## 问题：智能体被「专用遥控器」锁死

市面上有很多优秀的 [[harness|harness]](来自各大实验室、不同公司，也有很多基于开放标准的)，但它们的**接口往往是自定义或专用的**。最糟的情况是：某个 harness 只有一个客户端应用能控制它 <button class="pd-ts" data-t="01:51" data-who="Alex Hancock" data-en="is often custom or bespoke. And in the worst case, it's like you might have some harnesses where there's literally only one client application you can use to control that harness, right?" aria-label="回原文"></button>。他用 web 打比方：这就好比你每连一个网站都得换一个特定浏览器或协议——那样根本不会有开放 web <button class="pd-ts" data-t="02:12" data-who="Alex Hancock" data-en="And I think this has a couple issues with it, but the analogy that I'll make with the web is it would be like if you had to use one browser or one given protocol to connect to every website, right?" aria-label="回原文"></button>。

而标准的意义在于创造生态和市场。在智能体领域，智能体「走出去干活」这一环已经有好标准了——MCP,全球有成千上万个 server,所有智能体都能连上去操作别的系统。

但 MCP 最强大的地方不在协议本身的任何特性，**而在于所有人都在用它** <button class="pd-ts" data-t="02:45" data-who="Alex Hancock" data-en="We've all benefited as a community from having MCP. And the most powerful thing about MCP is not anything about MCP itself, but it's that everyone uses MCP. And that's why we have thousands or tens of thousands of servers around the world, and all the agents can connect to them and go and do things in those other systems." aria-label="回原文"></button>。缺的是另一环：**客户端软件如何给智能体分配任务、告诉它做什么、并拿到进展更新——这块还没有标准** <button class="pd-ts" data-t="03:02" data-who="Alex Hancock" data-en="And that's why we have thousands or tens of thousands of servers around the world, and all the agents can connect to them and go and do things in those other systems." aria-label="回原文"></button>。

## 方案：ACP

ACP(Agent Client Protocol,智能体客户端协议)由编辑器公司发起——[[Zed|Zed]] 和 [[JetBrains|JetBrains]] 组队提出，让客户端能控制 harness。他们的动机很直接：在编辑器里只写一个高质量客户端实现，就能控制任何 harness、发送任务、拿结果、看文件改动 <button class="pd-ts" data-t="03:49" data-who="Alex Hancock" data-en="And it makes sense if you put yourself in their shoes, right? What they wanted to be able to do is write a single high-quality client implementation in an editor, maybe in Zed or in IntelliJ or something like that, and be able to control any harness with that single client implementation, sending tasks, getting results back," aria-label="回原文"></button>。Goose 团队发现它**相对中立、没有太多编辑器特有的功能**，所以用途远不止编辑器，可以推广到更广的客户端软件 <button class="pd-ts" data-t="04:18" data-who="Alex Hancock" data-en="But we saw this on the Goose team, and we think that there is a much broader utility than just editors, right? So it's relatively neutral, and it doesn't have many editor-specific features." aria-label="回原文"></button>。

它的设计要点：

- **连接带能力协商**：客户端和 harness 建立连接(带一组能力声明)，然后创建会话；会话里可以发送用户消息，智能体回以文本、图片、音频或进展更新 <button class="pd-ts" data-t="04:29" data-who="Alex Hancock" data-en="And so we think that this can be spread to a wider range of client software. To go into a little bit more depth about ACP's design and what you can do with it, it lets you establish connections between clients and agent harnesses that have a given set of capabilities associated with the connection, and then you can make sessions." aria-label="回原文"></button>。
- **透明与授权**：工具被调用时会推送通知(说明调了什么工具、元数据是什么)；还能发**权限请求**，让客户端向用户展示「这个工具调用要不要执行」<button class="pd-ts" data-t="05:02" data-who="Alex Hancock" data-en="The agent can then respond to those with text, more images or audio, text, et cetera, or updates about what's going on. So, like, if a tool is called, it can send a tool call notification and explain what tool was called and what the metadata was." aria-label="回原文"></button>。
- **简单且可扩展**：用 JSON RPC 消息，不局限于原生协议，可以加自定义方法(惯例是加下划线前缀)<button class="pd-ts" data-t="05:23" data-who="Alex Hancock" data-en="And it's pretty simple in its design. It uses JSON RPC messages. And the thing we like about it most is that it's extensible as well, so you're not limited to just what's in the vanilla protocol." aria-label="回原文"></button>。他特别看重这一点：如果 Codex、Goose 等各家团队都加自定义方法，大家就能看到生态里涌现出什么，哪些值得走上标准化轨道纳入协议本身——**让协议由使用方式和社区来塑造** <button class="pd-ts" data-t="05:44" data-who="Alex Hancock" data-en="And the thing I like about this is that if enough harness projects or client projects adopt this, We can start to see what we're all doing that's the same, right?" aria-label="回原文"></button>。

## 现场演示

他打开 Zed 编辑器，对一个单 HTML 文件项目问「介绍一下这个项目」，底层智能体是 Goose,走 Goose 的 ACP 接口，能看到它流式返回文本和工具调用信息 <button class="pd-ts" data-t="06:17" data-who="Alex Hancock" data-en="So I'm gonna open Zed and I just have a really simple project here Where I'll say, tell me about this project. And so this is a single HTML file." aria-label="回原文"></button>。然后用**同一个智能体、换一个基于终端的第三方客户端**(来自 Poolside AI),得到完全相同的体验——harness 侧只需一个实现，任何客户端都能用 <button class="pd-ts" data-t="06:48" data-who="Alex Hancock" data-en="This is one from a company called Poolside AI. I'll say, tell me about this project in the same project. And so this is a terminal-based client getting exactly the same experience from the same agent, one implementation on the harness side, and you can now use any client, right?" aria-label="回原文"></button>。

他还展示了本地之外的远程能力。他们接手时 ACP 还没有远程支持，于是补上了 HTTP 传输(含 WebSocket 升级)，消息和协议语义不变 <button class="pd-ts" data-t="07:25" data-who="Alex Hancock" data-en="Agents are going to be running in the cloud. And so when we came to this project, we saw that it did not have remote support yet. So we specified an HTTP transport." aria-label="回原文"></button>。他昨晚用 vibe coding(用自然语言让 AI 生成程序)随手写了个客户端，连到同一进程发指令——代码可以跑在容器里或云端，消息和库完全一样，本地远程轻松切换 <button class="pd-ts" data-t="08:48" data-who="Alex Hancock" data-en="So this is a client. Just to show how easy it is to create clients for this, I just vibe-coded this last night, and I'll say, write a poem. So this is, again, connecting to that same process on my machine." aria-label="回原文"></button>。

## 四层技术栈全部可远程化

Goose 团队把智能体技术栈拆成四个组件：客户端(用户用的应用或无头应用)、harness(工具调用循环)、工具(通常就是 MCP)、模型 <button class="pd-ts" data-t="07:45" data-who="Alex Hancock" data-en="And so now the messages are the same, the protocol semantics are the same, but there's a new transport that is just landing now that enables remote. The way we think about this on the Goose team, the agentic stack, is there's sort of these four important components, right?" aria-label="回原文"></button>。现在 MCP 有远程传输，模型的 API 本来就是远程端点，再补上 ACP 的远程传输——**四个组件都可以随意挪位置**：可以全在一台机器上，harness 和客户端分开，模型或工具单独远程 <button class="pd-ts" data-t="08:20" data-who="Alex Hancock" data-en="And the models have kind of all had remote endpoints like responses APIs for a long time. Now you have the flexibility to move all of these four components around." aria-label="回原文"></button>。在标准上对齐并做好传输方案，正是能自由移动这套技术栈的关键 <button class="pd-ts" data-t="08:34" data-who="Alex Hancock" data-en="The tools could be the only thing that's remote. Aligning on standards and making sure that they have good transport stories is what's going to let us move all the pieces of this agentic stack around." aria-label="回原文"></button>。

## 意义：客户端生态与市场

现有生态已经有编辑器、桌面应用、移动应用、终端工具等各类客户端在接 ACP <button class="pd-ts" data-t="09:37" data-who="Alex Hancock" data-en="There's a number of clients and agent servers already out there. This ranges from editors, desktop applications, mobile applications, terminal-based things. There's a proliferation." aria-label="回原文"></button>。他设想的前景：人们可以做**个人客户端**，按自己喜欢的方式编排智能体；可以为特定业务领域或某家公司定制客户端；也可以做白标客户端对接所有 harness <button class="pd-ts" data-t="09:47" data-who="Alex Hancock" data-en="There's a proliferation. I think the use cases are potentially huge if we get some interoperability going here because people can make personal clients. That's exactly how you want it, orchestrating your agents." aria-label="回原文"></button>。更重要的是，一旦开辟出这个新类别、有了市场和多种选择，用户就能用脚投票，开发者会在**用户体验质量**上竞争，整体推高使用 AI 的体验 <button class="pd-ts" data-t="10:10" data-who="Alex Hancock" data-en="You could customize a white label client and have it work with all the harnesses. And I also think if we make a new category here, We're going to see quality of the clients go up, right?" aria-label="回原文"></button>。

## 本集带走

- **行业的缺口在「遥控」这一环**：MCP 解决了智能体出去调工具的标准，但客户端怎么给智能体派任务、收更新，此前各家都是自定义接口，最糟时一个 harness 只配一个客户端。
- **ACP 是 Zed 和 JetBrains 发起的开放标准**：设计极简(JSON RPC)、带能力协商、支持工具调用通知和权限请求，还允许加下划线前缀的自定义方法——协议进化靠社区实际用法推动。
- **补上 HTTP 远程传输后，四层技术栈(客户端/harness/工具/模型)每一层都可以独立远程部署**，本地和远程用同一套消息和库，切换零成本。
- **一次 harness 实现，处处可接入**：Goose 在 Zed 和终端客户端上给出完全相同的体验；想接入可以自己做客户端或给 harness 加支持，ACP 官网有入门指引。

<div class="pd-sec pd-sec-q">全部金句 <span>2 条</span></div>

> <span class="qz">MCP 最强大的地方不在于 MCP 本身的任何特性，而在于所有人都在使用 MCP。</span>  
> *And the most powerful thing about MCP is not anything about MCP itself, but it's that everyone uses MCP.*  
> <span class="qm">—— Alex Hancock · [02:45]</span> ^q1

> <span class="qz">比如 Codex 团队有自定义方法，Goose 团队有自定义方法，Klein 团队也有，无论谁，我们都能看到生态里涌现出什么，哪些值得走上标准化轨道纳入协议本身——让这个东西由使用方式塑造、由社区塑造。</span>  
> *Like if the Codex team has some custom methods, the Goose team has some custom methods, the Klein team has some custom methods, whoever, we can see what emerges in the ecosystem and what makes sense to get on a standards track and bring into the protocol itself so that this is sort of shaped by usage and shaped by the community.*  
> <span class="qm">—— Alex Hancock · [05:47]</span> ^q2

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2025-10-26-lennys-how-block-is-becoming-the-most-ai-native|Block CTO：代码质量与产品成功毫无关系，打造 AI 原生公司靠的是组织重组]]<span class="pd-rz">同公司:Block、Goose · 同概念:MCP、智能体 (agent)</span>
- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:harness、MCP、智能体 (agent)</span>
- [[2026-09-03-talks-refactoring-legacy-codebases|用 Cursor 重构遗留代码库：从 PHP 到 React 的完整工作流]]<span class="pd-rz">同概念:harness、MCP、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:harness、智能体 (agent)</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>
- [[2026-09-10-talks-design-at-the-speed-of-adjectives-paul-b|用形容词驾驭 AI 设计:Impeccable 的控制哲学]]<span class="pd-rz">同概念:harness、智能体 (agent)</span>

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
