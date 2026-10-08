---
title: MCP没有问题，你的智能体才有问题
podcast: 精选演讲
date: 2026-10-06
source_url: undefined
duration: "18:23"
type: episode
cover: "#64748b"
description: Apify创始人Jan Čurn为饱受批评的MCP辩护，并发布了命令行客户端MCPC，把MCP和CLI的优点合二为一。
guests: ["[[Jan Čurn]]"]
companies: ["[[Appify]]", "[[Anthropic]]", "[[Cloudflare]]"]
concepts: ["[[MCP]]", "[[CLI]]", "[[harness]]", "[[子智能体]]", "[[渐进式工具发现]]", "[[CodeMode]]", "[[工具调用]]", "[[沙箱]]", "[[上下文窗口]]", "[[MCPC]]", "[[Connector Evals]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-02-talks-mcp-doesn-t-suck-your-agent-does-jan-urn#post","headline":"MCP没有问题，你的智能体才有问题","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-02-talks-mcp-doesn-t-suck-your-agent-does-jan-urn","mainEntityOfPage":"https://talk.solomind.cc/2026-10-02-talks-mcp-doesn-t-suck-your-agent-does-jan-urn","description":"Apify创始人Jan Čurn为饱受批评的MCP辩护，并发布了命令行客户端MCPC，把MCP和CLI的优点合二为一。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jan Čurn"},{"@type":"Organization","name":"Appify"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"Cloudflare"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"CLI"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"子智能体 (sub-agent)"},{"@type":"Thing","name":"渐进式工具发现 (Progressive Tool Discovery)"},{"@type":"Thing","name":"CodeMode"},{"@type":"Thing","name":"工具调用 (tool calling)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"MCPC"},{"@type":"Thing","name":"Connector Evals"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"MCP没有问题，你的智能体才有问题","item":"https://talk.solomind.cc/2026-10-02-talks-mcp-doesn-t-suck-your-agent-does-jan-urn"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>MCP没有问题，你的智能体才有问题</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# MCP没有问题，你的智能体才有问题

<div class="pd-byl"><b>Jan Čurn</b> · Apify 创始人兼 CEO · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-02-talks-mcp-doesn-t-suck-your-agent-does-jan-urn.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">MCP 就已经用 100 个工具占满了你的上下文。可能你三分之一的上下文就这么没了，却什么工作都没做。</div><div class="a">— Jan Čurn <button class="pd-ts" data-t="03:00" data-who="Jan Čurn" data-en="MCP would already eat 100 tools in your context. Maybe one third of your context would be gone without actually doing any work." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jan Čurn]]
>
> **公司** [[Appify]] · [[Anthropic]] · [[Cloudflare]]
>
> **概念** [[MCP]] · [[CLI]] · [[harness]] · [[子智能体]] · [[渐进式工具发现]] · [[CodeMode]] · [[工具调用]] · [[沙箱]] · [[上下文窗口]] · [[MCPC]] · [[Connector Evals]]

[[MCP|MCP]]是[[Anthropic|Anthropic]]在近两年前推出的标准，用来让AI智能体安全地连接各种工具。

去年它一度是AI圈的宠儿，现在市面上大约有1万到1.5万个MCP服务器，Claude和ChatGPT都在用它接入工具。可与此同时，骂它的声音也越来越多。

Apify创始人兼CEO [[Jan Čurn|Jan Čurn]]这场演讲要回答的问题是：==MCP真的像大家说的那么糟吗==？

## 大家为什么骂MCP？

网上流传的批评相当狠。有人说「MCP是个错误，命令行万岁」，有人说MCP基本没用，连Gary Tan都说说实话，MCP很糟糕。

Čurn把最常被引用的一条批评拿出来分析：MCP太吃上下文了。

这确实是真的。早期智能体接入MCP的方式很天真：10个服务器、每个10个工具，就把100个工具全部塞进上下文。

你还没开始提问，三分之一的上下文已经被吃掉了。

之后每次调用工具、每次返回结果，上下文还在继续膨胀，越变越长，准确度下降，费用飙升。

但Čurn指出，**这是智能体的问题，不是协议的问题**。MCP规范里对智能体该怎么设计只字未提——那是实现者自己的责任 <button class="pd-ts" data-t="03:28" data-who="嘉宾" data-en="But that's not the problem of MCP. That's the problem of the harness. And if you look at the MCP specification, what it says about how you should design the harness, it says absolutely nothing." aria-label="回原文"></button>。

## 业界已有的三种补救办法

第一种是把任务分给[[子智能体|子智能体]]，让它们各自处理，不污染主上下文。

但代价是代币费用照样要付，而且敏感信息（比如密码）还是会留在某个上下文里，可能被其他[[工具调用|工具调用]]滥用。

第二种叫[[渐进式工具发现|渐进式工具发现]]，去年年底由Anthropic和Cursor先后推出。

思路简单得让人心疼：不要一次把100个工具全塞进去，而是用一个工具搜索工具，需要哪个再加载哪个。

通常你只需要一两个工具，这样能省下大量上下文 <button class="pd-ts" data-t="05:04" data-who="嘉宾" data-en="So how about we put those tools into the context progressively, only when you need them, right? So for example, Anthropic in Claude introduced this tool, just called Tool Search Tool." aria-label="回原文"></button>。

第三种是[[Cloudflare|Cloudflare]]推出的[[CodeMode|CodeMode]]：别把MCP工具当函数塞进上下文，把它们当代码。

因为模型读代码、写代码的能力很强，训练数据里有海量代码可以学。

相比之下，工具调用是人造的概念，训练数据里本来没有，得靠合成数据硬教 <button class="pd-ts" data-t="06:28" data-who="嘉宾" data-en="Because it turns out Models are better at writing and calling code than calling tools because tool calling is an artificial construct, basically, that we have to teach the LLMs to do." aria-label="回原文"></button>。

问题是，这些方案大多数MCP客户端根本不支持。协议进化了很多，客户端还停留在黑暗时代。

## 命令行为什么天生就强？

很多人主张用命令行（[[CLI|CLI]]）取代MCP，理由其实站得住脚。

智能体从不把整个命令行的帮助文档全塞进上下文，而是按需查询——相当于天生就自带渐进式发现。

运行命令行必须通过shell，而shell本身就是代码——相当于天生就自带CodeMode。

更关键的是，智能体对shell熟得不能再熟。Unix从1969年就有了，那个80列25行的黑终端，是40多年优化的结果，每个字节都在传达最重要的信息。

智能体的训练数据里见过无数shell用法，AI实验室还能合成无限的shell训练数据 <button class="pd-ts" data-t="09:26" data-who="嘉宾" data-en="Plus, for AI labs, you can actually synthesize infinite amount of training data from using Shell. You can just pipe different commands together, explore the commands, extract information from your manual pages, and basically feed this all to the models." aria-label="回原文"></button>。

但命令行也有硬伤：它是个本地黑盒，没有标准的传输协议。企业没法监控它用了什么接口，也没法给它注入凭证。

**所以远程接入的场景，MCP依然是更好的选择**——你见不到哪个智能体用命令行做远程连接器。

## MCPC：把两个世界的优点合起来

Čurn的方案是：远程访问用MCP，本地操作用CLI。于是他做了[[MCPC|MCPC]]，一个通用的MCP命令行客户端。

这个项目最初只是一个业余项目，后来成了市面上功能最全的同类工具。

它的思路是把MCP的全部复杂性藏在一个所有智能体都会用的工具调用背后——bash。会话管理、授权、认证，统统不用操心。

每条命令都支持--json参数，输出纯JSON，可以用JQ之类的工具把多次调用串成脚本，完全不浪费上下文代币 <button class="pd-ts" data-t="11:49" data-who="嘉宾" data-en="It needs to support code mode all the way. And actually, every command in MCPC has an option to run with dash dash JSON, which returns just pure JSON representation of the data." aria-label="回原文"></button>。

现场演示里，MCPC连接了本地的Filesystem服务器和远程的Apify服务器。登录认证走浏览器，凭证安全地存在操作系统的钥匙串里。

会话是持久化的，设置一次，Claude Code和Codex等智能体可以共用同一套配置。

它还支持MCP协议的新特性，比如异步任务：加个--task参数，任务在服务器上跑，你可以先去干别的，回头再取结果。

Čurn提到，大多数客户端连协议里的instructions（服务器自我说明）这种基本原语都不支持 <button class="pd-ts" data-t="14:05" data-who="嘉宾" data-en="Actually, MCP protocol has instructions where server kind of explains what it does. But most clients still don't support this basic primitive, which is kind of crazy." aria-label="回原文"></button>。最近他们还加了X402支持，可以用来管理本地钱包。

## 实测：MCPC表现如何？

为了比较不同接入方式的优劣，Apify做了一个叫[[Connector Evals|Connector Evals]]的评测框架。

一般的基准测试（比如TerminalBench）比较的是不同智能体谁更强，他们反过来，固定用Claude Code加Sonnet 5，比较不同的连接器——原生CLI、原生MCP、MCPC——哪个更高效。

初步结果显示，MCPC和原生CLI表现相当，而原生MCP虽然有时完成得更快，但消耗的代币更多 <button class="pd-ts" data-t="17:49" data-who="嘉宾" data-en="And you can see that, for example, this is chart, the X is the time, how long did it take to finish the task, and Y chart is at the cost of tokens, right? And you can see that MCPC and CLI are actually performing pretty similarly, while raw MCP finished faster for whatever reason, but actually consumed more tokens." aria-label="回原文"></button>。

所以Čurn的结论是：别再说CLI比MCP好了。**MCP加CLI，才是最好的组合**。

## 本集带走

- MCP被骂吃上下文，但那是智能体实现得差，不是协议本身的问题——MCP规范根本不管智能体怎么设计。
- 命令行天生自带渐进式发现和代码模式，加上智能体对shell极其熟悉，这是它受欢迎的真正原因。
- 命令行是本地黑盒，没有标准传输协议；远程接入场景，MCP依然是更合适的选择。
- Apify开源的MCPC把MCP包装成命令行，隐藏全部协议复杂性，支持持久会话、渐进式工具搜索、异步任务等新特性。
- Apify的Connector Evals框架初步测试显示：MCPC与原生CLI表现相当，原生MCP消耗代币更多。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">MCP 就已经用 100 个工具占满了你的上下文。可能你三分之一的上下文就这么没了，却什么工作都没做。</span>  
> *MCP would already eat 100 tools in your context. Maybe one third of your context would be gone without actually doing any work.*  
> <span class="qm">—— Jan Čurn · [03:00]</span> ^q1

> <span class="qz">如果你很少用到那 100 个工具，为什么要一直把它们全部放进上下文呢？</span>  
> *Why would you add all the 100 tools in your context all the time if you rarely need them?*  
> <span class="qm">—— Jan Čurn · [05:17]</span> ^q2

> <span class="qz">模型在编写和调用代码方面比调用工具更好，因为工具调用基本上是一种人工构造，我们必须教会 LLM 去做这件事。</span>  
> *Models are better at writing and calling code than calling tools because tool calling is an artificial construct, basically, that we have to teach the LLMs to do.*  
> <span class="qm">—— Jan Čurn · [06:28]</span> ^q3

> <span class="qz">它在现实世界中不存在，不在真实训练数据中。这些数据必须被合成出来并放进模型里。</span>  
> *It doesn't exist in the real world, in real training data. Those have to be synthesized and put into the model.*  
> <span class="qm">—— Jan Čurn · [06:39]</span> ^q4

> <span class="qz">所以大多数智能体仍然生活在黑暗时代，它们不支持这些功能，你知道的，大多数 MCP 客户端也是如此。</span>  
> *So still, most agents are living in the dark ages, and they don't support these features, you know, and most MCP clients.*  
> <span class="qm">—— Jan Čurn · [07:03]</span> ^q5

> <span class="qz">那里的每一个字节、每一个字符都经过了 40 年的优化，只传达最重要的信息。</span>  
> *Every byte, every character there is optimized over 40 years to convey only the most important information.*  
> <span class="qm">—— Jan Čurn · [08:55]</span> ^q6

> <span class="qz">所以请不要再说什么 CLI 比 MCP 好了，因为 MCP 加 CLI 才是最好的。</span>  
> *So please stop saying CLI is better than MCP because MCP plus CLI is the best.*  
> <span class="qm">—— Jan Čurn · [18:18]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-28-talks-ai-native-organisations-run-on-skills-ho|AI 原生组织如何运行在 Skills 之上]]<span class="pd-rz">同公司:Anthropic · 同概念:harness、MCP、上下文窗口 (context window)、子智能体 (sub-agent)、沙箱 (sandbox)</span>
- [[2026-05-27-devtools-cloudflare-devs|Cloudflare 三人聊：让模型直接写代码，别再堆工具了]]<span class="pd-rz">同公司:Cloudflare · 同概念:MCP、沙箱 (sandbox)</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同公司:Anthropic · 同概念:harness、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-21-talks-the-dark-arts-of-skill-engineering-paul|技能工程的九种黑暗艺术：把 Skill 从提示词做成 Harness 扩展]]<span class="pd-rz">同公司:Anthropic · 同概念:harness、MCP、子智能体 (sub-agent)</span>
- [[2026-09-29-latent-thariq|Anthropic 的 Thariq 谈 Claude Code：提示词、CloudMods 与给前沿踩刹车]]<span class="pd-rz">同公司:Anthropic · 同概念:harness、沙箱 (sandbox)</span>
- [[2026-10-02-talks-stop-rationing-tokens-let-the-harness-pi|token 无限量供应：用自动选模型省下 2.5 倍成本的编码智能体]]<span class="pd-rz">同公司:Anthropic · 同概念:harness、沙箱 (sandbox)</span>

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
