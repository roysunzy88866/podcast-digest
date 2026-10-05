---
title: MCP 并不烂，烂的是你的智能体
podcast: 精选演讲
date: 2026-10-06
source_url: undefined
duration: "18:23"
type: episode
cover: "#64748b"
description: Apify 创始人兼 CEO Jan Cern 反驳「MCP 已死」论，拆解智能体滥用上下文才是真问题，并发布 MCP 的通用 CLI 客户端 MCPC。
guests: ["[[Jan Čurn]]"]
companies: ["[[Appify]]", "[[Anthropic]]", "[[Cloudflare]]"]
concepts: ["[[MCP]]", "[[CLI]]", "[[harness]]", "[[子智能体]]", "[[渐进式工具发现]]", "[[CodeMode]]", "[[工具调用]]", "[[沙箱]]", "[[上下文窗口]]", "[[MCPC]]", "[[Connector Evals]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-02-talks-mcp-doesn-t-suck-your-agent-does-jan-urn#post","headline":"MCP 并不烂，烂的是你的智能体","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-02-talks-mcp-doesn-t-suck-your-agent-does-jan-urn","mainEntityOfPage":"https://talk.solomind.cc/2026-10-02-talks-mcp-doesn-t-suck-your-agent-does-jan-urn","description":"Apify 创始人兼 CEO Jan Cern 反驳「MCP 已死」论，拆解智能体滥用上下文才是真问题，并发布 MCP 的通用 CLI 客户端 MCPC。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jan Čurn"},{"@type":"Organization","name":"Appify"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"Cloudflare"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"CLI"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"子智能体 (sub-agent)"},{"@type":"Thing","name":"渐进式工具发现 (Progressive Tool Discovery)"},{"@type":"Thing","name":"CodeMode"},{"@type":"Thing","name":"工具调用 (tool calling)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"MCPC"},{"@type":"Thing","name":"Connector Evals"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"MCP 并不烂，烂的是你的智能体","item":"https://talk.solomind.cc/2026-10-02-talks-mcp-doesn-t-suck-your-agent-does-jan-urn"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>MCP 并不烂，烂的是你的智能体</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# MCP 并不烂，烂的是你的智能体

<div class="pd-byl"><b>Jan Čurn</b> · Apify 创始人兼 CEO · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-02-talks-mcp-doesn-t-suck-your-agent-does-jan-urn.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">所以基本上，上下文是一个传递敏感信息或大数据的非常糟糕的地方。</div><div class="a">— Jan Čurn <button class="pd-ts" data-t="04:26" data-who="Jan Čurn" data-en="So basically, context is a really bad place to pass sensitive value or like large data." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jan Čurn]]
>
> **公司** [[Appify]] · [[Anthropic]] · [[Cloudflare]]
>
> **概念** [[MCP]] · [[CLI]] · [[harness]] · [[子智能体]] · [[渐进式工具发现]] · [[CodeMode]] · [[工具调用]] · [[沙箱]] · [[上下文窗口]] · [[MCPC]] · [[Connector Evals]]

这一集是一场技术演讲，标题就叫「[[MCP|MCP]] 并不烂，烂的是你的智能体」。主角是 Jan Cern,Apify 的创始人兼 CEO。

MCP 是 [[Anthropic|Anthropic]] 差不多两年前推出的一个标准，用来安全地把工具和资源接入 AI 智能体，现在 Claude、ChatGPT 都在用它，社区里已有大约 1 万到 1.5 万个 MCP 服务器。

但去年风向突变，网上骂声一片——「MCP 是错误的抽象」「MCP 是个错误」「感谢上帝 MCP 死了」，连 Gary Tan 都说「说实话 MCP 很烂」。

Cern 要回答的问题就是：这些骂声到底站不站得住脚？

> 【背景】Gary Tan 是 Y Combinator 的总裁兼 CEO。

## 骂得最凶的「吃上下文」，其实是实现者的锅

被引用最多的问题是 MCP 吃上下文。早期智能体的做法确实很朴素：

接了 10 个 MCP 服务器就注册 100 个工具，你还没提问，三分之一的[[上下文窗口|上下文窗口]]就被工具定义占掉了；

之后每次调用工具，结果又塞回上下文，越滚越长、准确性下降、成本飙升。

但 Cern 的关键论点是：**这不是 MCP 协议的问题，是 [[harness|harness]](智能体的执行框架)的问题**。

MCP 规范对「该怎么设计 harness」只字未提，完全留给实现方——把工具定义无脑全量塞进上下文，是你构建智能体时的失职。

## 三个解法，各有短板

**解法一：[[子智能体|子智能体]]**——把占用上下文的任务委托给一个新的子智能体去跑，不污染主上下文窗口。

但 token 的钱照付，问题只是往后推了一点；

而且上下文本来就是传递敏感信息或大数据的糟糕场所——工具返回的密码会留在上下文里，可能被后续调用或应用滥用。

**解法二：[[渐进式工具发现|渐进式工具发现]]**——去年年底先由 Anthropic、随后 Cursor 引入。

Claude 里加了一个叫 Tool Search Tool 的工具，帮你找到其他工具、只在需要时才把那一两个加进上下文，而不是常驻 100 个。

省下大量上下文，更快更便宜。简单得让人难受——人们居然现在才这么做。

**解法三：[[CodeMode|CodeMode]]**——也是去年年底由 [[Cloudflare|Cloudflare]] 引入，思路是把 MCP 工具不当函数、而当代码来对待。

模型很擅长用 grep 这类工具在代码里导航、找定义，自然也能导航工具描述。

事实证明**模型写代码、调代码比调用工具更在行，因为[[工具调用|工具调用]]是一种人工构造，真实训练数据里根本不存在，那些数据得合成出来喂给模型**。

可惜 Cloudflare 的实现绑死自家平台，除了示例没多少人真在用。

## CLI 凭什么被拿来比？

骂 MCP 的人大多捧 [[CLI|CLI]]。Cern 承认 CLI 有三个天生的优势：

第一，智能体从不把整个 CLI 加载进上下文，它默认就是渐进式的，只在需要时调用，而且基本 Linux 命令它早就背熟了；

第二，智能体默认把 CLI 当代码跑——你要运行 CLI 就得有[[沙箱|沙箱]]或机器这类运行时，等于 CodeMode 从第一天就自带，而 MCP 是慢慢长出来的；

第三，Shell 从 1969 年的 Unix 一路优化至今，那个 80 列 25 行的黑盒子，每个字节都经过 40 年打磨只传达最重要的信息——它是为人类优化的，但智能体也很喜欢，AI 实验室甚至能从 Shell 使用中合成无限量的训练数据。

但 CLI 有个致命短板：**它是没有标准输出协议的本地黑盒**。

你想给企业里的 CLI 做插桩监测，得去猜它底层用的是 API 还是 WebSockets;你也没法往里注入凭证。所以 CLI 只适合本地接口，远程访问还得靠 MCP。

## 结论：MCP 加 CLI,而不是二选一

于是 Cern 提出分工：

MCP 负责标准远程访问，CLI 负责本地智能体接口——MCP 的全部协议特性，通过一个所有智能体都已经会的工具调用(叫 Bash)来暴露。

会话、授权这些复杂性全部藏在 Bash 背后，智能体不用操心。

落地就是他们发布的 **[[MCPC|MCPC]]**——MCP 的通用 CLI 客户端，始于十二月的业余项目(那个月被称为「Claude 之冬」)。

它是 MCP 协议之上的一层轻量包装，没有 LLM;支持 STDIO 本地进程和远程服务器，登录凭证存进本地 OS 钥匙串；

帮助信息专为智能体优化，让它无需外部技能就能上手。

每条命令都有 `--json` 选项返回纯 JSON,可以用 JQ 和管道把多个调用串成代码序列；

支持 MCP 协议的新功能——服务器指令(大多数客户端连这个基本原语都不支持)、异步任务(`--task`,任务在服务器端跑、稍后取结果)、会话持久化(设置一次，Claude Code、Codex 共用同一套配置)。

最近还加了 X402 支持，用来管理本地钱包。

为了验证效果，他们建了一个叫 [[Connector Evals|Connector Evals]] 的评测框架—— usual 的评测比智能体(TerminalBench 比 Codex 和 Claude Code 谁强)，他们反过来比连接器。

初步结果：同样用 Claude Code 配 Sonnet 5,MCPC 和 CLI 表现相当接近，原始 MCP 虽然完成得更快，但 token 消耗明显更多。

演讲收尾就是标题本身：「请别再说 CLI 比 MCP 好了，因为 MCP 加 CLI 才是最好的。」

> 【背景】MCP 指 Model Context Protocol,Anthropic 于 2024 年底发布的智能体-工具交互开放标准；文中 OpenClaw、Peter Levels、Gary Tan 等批评言论均为演讲者现场引用的社区推文。

## 本集带走

- **「MCP 吃上下文」是 harness 的锅，不是协议的锅**：MCP 规范对 harness 设计只字未提，全量注册工具定义是智能体实现的失职。
- **三种解法按成熟度选**：子智能体隔离上下文但 token 照付、敏感数据仍过上下文；渐进式工具发现(Tool Search Tool)只按需加载一两个工具；CodeMode 把工具当代码，因为模型写代码天然比调用工具强——工具调用是合成出来的能力，训练数据里本不存在。
- **CLI 的优势是「天生」的**：渐进式、默认当代码跑、Shell 被 40 年训练数据打磨过；但它没有输出协议、不能注入凭证，远程场景离不开 MCP。
- **最优解是组合**：MCP 管标准远程访问，CLI(通过 Bash 工具)管本地接口，把会话、授权的复杂性藏在单个工具调用背后。
- **评测可以反过来做**：不比智能体，比连接器——Connector Evals 初步显示 MCPC≈CLI,原始 MCP 更费 token。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">所以基本上，上下文是一个传递敏感信息或大数据的非常糟糕的地方。</span>  
> *So basically, context is a really bad place to pass sensitive value or like large data.*  
> <span class="qm">—— Jan Čurn · [04:26]</span> ^q1

> <span class="qz">子智能体只是把这个问题往后推了一点，但并没有消除它。</span>  
> *And sub-agents only push that problem a little further but still don't remove it.*  
> <span class="qm">—— Jan Čurn · [04:32]</span> ^q2

> <span class="qz">如果你很少用到那 100 个工具，为什么要一直把它们全部放进上下文呢？通常你大概只需要一两个。</span>  
> *Why would you add all the 100 tools in your context all the time if you rarely need them? Typically, you just need maybe one or two.*  
> <span class="qm">—— Jan Čurn · [05:17]</span> ^q3

> <span class="qz">模型在编写和调用代码方面比调用工具更好，因为工具调用基本上是一种人工构造，我们必须教会 LLM 去做这件事。</span>  
> *Models are better at writing and calling code than calling tools because tool calling is an artificial construct, basically, that we have to teach the LLMs to do.*  
> <span class="qm">—— Jan Čurn · [06:28]</span> ^q4

> <span class="qz">那里的每一个字节、每一个字符都经过了 40 年的优化，只传达最重要的信息。</span>  
> *Every byte, every character there is optimized over 40 years to convey only the most important information.*  
> <span class="qm">—— Jan Čurn · [08:55]</span> ^q5

> <span class="qz">所以基本上，MCP 的全部复杂性都藏在单个工具调用 Bash 背后，你不需要操心会话、授权，什么都不用管。</span>  
> *So basically the full complexity of MCP is hidden behind single tool call, Bash, and you don't need to worry about the sessions, authorization, all out, nothing.*  
> <span class="qm">—— Jan Čurn · [10:34]</span> ^q6

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
