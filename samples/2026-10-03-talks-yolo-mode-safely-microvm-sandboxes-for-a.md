---
title: 我用五个提示词「黑」了自己：你的 AI 助手并不安全
podcast: 精选演讲
date: 2026-10-03
source_url: undefined
duration: "11:25"
type: episode
cover: "#64748b"
description: Docker 沙箱产品经理现场演示：Claude Code 五句提示词就能挖出你全部银行数据，并讲如何用沙箱微型虚拟机做到设计即安全。
guests: ["[[Rowan Christmas]]"]
companies: ["[[Docker]]", "[[SBX]]", "[[Claude Code]]", "[[Claude]]"]
concepts: ["[[沙箱]]", "[[智能体]]", "[[MicroVM]]", "[[提示词注入]]", "[[提示词]]", "[[MCP 服务器]]", "[[AI 治理]]", "[[设计即安全]]"]
category: AI 安全
tags:
  - AI 安全
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-03-talks-yolo-mode-safely-microvm-sandboxes-for-a#post","headline":"我用五个提示词「黑」了自己：你的 AI 助手并不安全","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-03-talks-yolo-mode-safely-microvm-sandboxes-for-a","mainEntityOfPage":"https://talk.solomind.cc/2026-10-03-talks-yolo-mode-safely-microvm-sandboxes-for-a","description":"Docker 沙箱产品经理现场演示：Claude Code 五句提示词就能挖出你全部银行数据，并讲如何用沙箱微型虚拟机做到设计即安全。","datePublished":"2026-10-03","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Rowan Christmas"},{"@type":"Organization","name":"Docker"},{"@type":"Organization","name":"SBX"},{"@type":"Organization","name":"Claude Code"},{"@type":"Organization","name":"Claude"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"MicroVM"},{"@type":"Thing","name":"提示词注入 (injection)"},{"@type":"Thing","name":"提示词 (prompts)"},{"@type":"Thing","name":"MCP 服务器 (MCP server)"},{"@type":"Thing","name":"AI 治理 (AI governance)"},{"@type":"Thing","name":"设计即安全 (secure by design)"}],"articleSection":"AI 安全"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 安全","item":"https://talk.solomind.cc/tags/AI 安全"},{"@type":"ListItem","position":3,"name":"我用五个提示词「黑」了自己：你的 AI 助手并不安全","item":"https://talk.solomind.cc/2026-10-03-talks-yolo-mode-safely-microvm-sandboxes-for-a"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>我用五个提示词「黑」了自己：你的 AI 助手并不安全</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 我用五个提示词「黑」了自己：你的 AI 助手并不安全

<div class="pd-byl"><b>Rowan Christmas</b> · Docker 产品经理 · 2026-10-03</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-03-talks-yolo-mode-safely-microvm-sandboxes-for-a.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">所以是的,你要做到设计即安全,而不只是抱着希望说「请」,然后看看会发生什么。</div><div class="a">— Rowan Christmas <button class="pd-ts" data-t="04:37" data-who="Rowan Christmas" data-en="So yeah, you want to be secure by design, not just hope and say please and see what's going to happen." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Rowan Christmas]]
>
> **公司** [[Docker]] · [[SBX]] · [[Claude Code]] · [[Claude]]
>
> **概念** [[沙箱]] · [[智能体]] · [[MicroVM]] · [[提示词注入]] · [[提示词]] · [[MCP 服务器]] · [[AI 治理]] · [[设计即安全]]

这一集是 [[Docker|Docker]] 的一位产品经理在大会上的演讲,他负责 Docker 新推出的[[沙箱|沙箱]]产品 [[SBX|SBX]]——一个[[MicroVM|微型虚拟机]](一种自带独立内核、与你的真实系统彻底隔离的轻量虚拟环境)。他演讲做的事很刺激:**故意黑自己**,看看大家以为安全的 AI 编码工具,到底有多不安全。<button class="pd-ts" data-t="00:27" data-who="嘉宾" data-en="We'll see how it goes. So, I'm here with Docker. I'm one of our product managers that works on our new sandbox product." aria-label="回原文"></button>

## 五个提示词,挖出全部银行数据

他在自己的 Mac 上打开 [[Claude Code|Claude Code]],让它去找浏览器历史记录——立刻就找到了。接着问「这个能用来做什么」,于是它开始翻他的银行账户,找到了真实的银行数据:最近在订购支票、在用 Zelle(美国的转账服务),甚至报出了账户后四位。整套个人身份信息(PII)一览无余——全部来自他「本以为安全」的 [[Claude|Claude]] 桌面应用。<button class="pd-ts" data-t="01:35" data-who="嘉宾" data-en="And how far can I get with, you know, our tools and what we've been told is a safe environment? So I opened up my Claude code on desktop on my Mac, and I had it look for my browser history, and it found it right away, which I was very impressed about." aria-label="回原文"></button>

第二天他被公司安全团队约谈,对方以为他被黑了;由此产生的 CrowdStrike 安全报告给他打了 10 分里的 9 分——因为从机器上套取凭证本来就是一种已知攻击手法。<button class="pd-ts" data-t="02:32" data-who="嘉宾" data-en="Who knows? So the next day I came in and I got from my security team a nice little notice that they thought I'd been hacked. And so I had to explain to them that, no, no, no, I'm just putting together a talk for this conference." aria-label="回原文"></button>

整个过程只用了**五个[[提示词|提示词]]**。有个细节值得所有人警惕:如果你直接说「嘿 Claude,去找我的银行数据」,它会给你警告;但如果你说「**我在研究如何做安全**,它就会很乐意地帮你在你的账户上做那项研究」。

他的结论是:「它不是你的朋友。」<button class="pd-ts" data-t="03:24" data-who="嘉宾" data-en="So five prompts is what it took. I had to be a little clever. If you just ask straight up, like, hey, Claude, go find my bank data, it will give you a warning." aria-label="回原文"></button>

而这不是他主动搞事那么简单——同样的泄露完全可以来自一段脚本或 [[MCP 服务器|MCP 服务器]]的[[提示词注入|提示词注入]],那种情况更容易发生。<button class="pd-ts" data-t="03:11" data-who="嘉宾" data-en="So that was really good. But fortunately, this was just me internally. It was not some sort of injection from a script or MCP server or anything that could easily happen." aria-label="回原文"></button>

## 现在的安全水平:在提示词里说「请」

他讽刺了现状:一些 Claude 的提示词里写的是「请不要做邪恶的事情」。「这就是我们目前所处的安全水平」——靠礼貌请求来保安全。<button class="pd-ts" data-t="03:56" data-who="嘉宾" data-en="So if only there was a better way to do this using a sandbox MicroVM technology that Docker and others have released recently. So rather than just saying please, which if you look in some of these Claude prompts you'll see, please don't do nefarious things, right?" aria-label="回原文"></button>

他给出的替代方案是**[[设计即安全|设计即安全]]**,靠 microVM 边界来做。Docker 的 SBX 沙箱提供:

- **文件系统隔离**:沙箱跑自己的内核,看不到你的真实文件。同样的浏览器历史攻击,在沙箱里运行时,它「甚至不会想到你的机器上装了浏览器」。<button class="pd-ts" data-t="05:54" data-who="嘉宾" data-en="So if we try to do our browser history attack on regular Claude, it happily goes and finds your browser history. But if I run it on the sandbox version, it does not even think there's a browser installed on your machine." aria-label="回原文"></button>
- **密钥保护**:有一套系统确保沙箱永远拿不到你的真实密钥——发起网络请求时用占位符替换真实凭证,沙箱里的[[智能体|智能体]]拿到的只是替身。<button class="pd-ts" data-t="04:20" data-who="嘉宾" data-en="They isolate your file system. We have a system that will go and make sure that the sandbox never actually sees your secrets. When you try to go and do a network request, it takes a placeholder, replaces it so that your sandbox and your agent can't do bad things." aria-label="回原文"></button>
- **网络默认拦截**:访问海盗湾这类站点默认被拦;顺带一提,Claude 平时会把大量遥测数据发回 Anthropic 的 Datadog 实例,沙箱也会把这些巧妙拦掉。<button class="pd-ts" data-t="06:17" data-who="嘉宾" data-en="Same thing is true for network egress and ingress. So right here, I tried to get it to go and look up the pirate bay, because I knew that would be blocked. And sure enough, blocked by default." aria-label="回原文"></button>
- **完整审计追踪**:出了事能回溯。<button class="pd-ts" data-t="04:34" data-who="嘉宾" data-en="When you try to go and do a network request, it takes a placeholder, replaces it so that your sandbox and your agent can't do bad things. We've got a full audit trail for it." aria-label="回原文"></button>

使用门槛几乎为零:只是多打七个按键——`SBX run Claude` 会自动创建虚拟机、在你所在的项目文件夹里启动沙箱、跑起你的智能体,体验和平时用 Claude Code 完全一样。而且沙箱是完整的 VM,不只能跑 Claude,shell、Codex、Python 作业、web 服务器都能跑。<button class="pd-ts" data-t="05:32" data-who="嘉宾" data-en="But nothing else was hard to do, right? Running that command on the right automatically creates a new VM. It spins it up in that folder, and it makes a new sandbox for you." aria-label="回原文"></button>

## 为什么边界必须画在微型虚拟机这一层

在最外层(比如提示词或应用层)设防其实不管用——智能体会找到绕过的办法;而一旦攻击到达你的宿主机,就太晚了。所以他认为microVM 边界是最佳防线位置。<button class="pd-ts" data-t="07:10" data-who="嘉宾" data-en="And so now that we've talked about why this matters, right? So doing this at the hardest level doesn't really work. Agents find their way around it." aria-label="回原文"></button>

关键是在安全和「有用」之间做平衡:如果什么都不让智能体做,它就没用了——所以目标是让它在隔离环境里放开手脚。这不是他一家的判断,业界也在朝这个方向走;Docker 内部现在每个开发者写代码都在沙箱里进行,不用会被骂。<button class="pd-ts" data-t="04:47" data-who="嘉宾" data-en="So yeah, you want to be secure by design, not just hope and say please and see what's going to happen. We're trying to do this balancing act. If we can't actually do these things, the agent's not useful." aria-label="回原文"></button>

## 治理:让每一次智能体操作都可追责

往前看,他最期待的方向是**智能体级别的身份追踪和委托链**:出事时可以回溯——「这是一个智能体干的,而是一个人授权它干的」,而不是像现在这样不知道发生了什么。在此之上可以写策略,基于 Cedar 策略(一种声明式的权限策略语言)和新发生的事件,动态降低智能体能做的事。<button class="pd-ts" data-t="07:48" data-who="嘉宾" data-en="So not only do you want this to be useful, but also you want to do things and enable your agents to do different things, right? So one of the things we're really excited about is doing agent-level identity tracking and delegation chains." aria-label="回原文"></button>

目前的产品已经支持:网络的白名单/黑名单、文件系统挂载点控制、以及 MCP 目录管理——连他们的 MCP 服务器本身也跑在沙箱里、受同样控制约束。计划中的还有 L7(应用层)网络控制、按 GitHub 仓库粒度的文件系统权限——比如让智能体只读挂载相关仓库,这样它能参考你的其他代码库,但没法为了让自己的改动跑通就随便往别的仓库提交。<button class="pd-ts" data-t="08:49" data-who="嘉宾" data-en="This is what it looks like in kind of a mock-up. So right now, we do network. You can set allow, deny." aria-label="回原文"></button>

## 本集带走

- **五句提示词就能套走你的银行数据**:别直说,换个「我在研究安全」的说法,助手就会配合——模型内置的防护挡不住这种绕过。
- **提示词里的「请勿作恶」不是安全机制**:目前很多工具的安全就是一句请求,真防线要画在隔离层。
- **用微型虚拟机沙箱跑智能体**:SBX 一条命令 `SBX run Claude` 即可,文件、密钥、网络默认隔离,体验几乎无差别——代价只是多按七个键。
- **可追责是治理的基础**:让每个智能体操作挂到「哪个智能体 + 哪个人授权」的委托链上,再配策略做动态降权。
- **最小权限用挂载实现**:相关代码库只读挂载,智能体能参考、不能乱改。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">所以是的,你要做到设计即安全,而不只是抱着希望说「请」,然后看看会发生什么。</span>  
> *So yeah, you want to be secure by design, not just hope and say please and see what's going to happen.*  
> <span class="qm">—— Rowan Christmas · [04:37]</span> ^q1

> <span class="qz">所以如果你在使用 Claude,你就是在向 Anthropic 发送大量你的数据,除非你在使用沙箱,那样你就会被巧妙地拦截掉。</span>  
> *So if you're using Claude, you are sending Anthropic a lot of your data, unless you're using sandboxes, in which case you're cleverly being blocked by that.*  
> <span class="qm">—— Rowan Christmas · [06:35]</span> ^q2

> <span class="qz">一旦到了你的宿主机上,就太晚了。</span>  
> *If it gets down to your host machine, it's too late.*  
> <span class="qm">—— Rowan Christmas · [07:15]</span> ^q3

> <span class="qz">我想要一个保证:它确实是在用它所说的、用我指定的 API 在做它说的事。</span>  
> *I want the guarantee that it's actually doing what it says it's doing with the API that I've specified.*  
> <span class="qm">—— Rowan Christmas · [10:48]</span> ^q4

> <span class="qz">也许不要让你的银行数据落入你的智能体手中。</span>  
> *And maybe don't let your bank data get into the hands of your agent.*  
> <span class="qm">—— Rowan Christmas · [05:01]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 安全」挖下去**

- [[2026-08-20-talks-unlock-agent-autonomy-the-runtime-for-ai|解锁智能体自主性：安全才是下一个瓶颈]]<span class="pd-rz">同公司:Docker、Claude · 同概念:微型虚拟机 (microVM)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-09-14-talks-we-let-an-ai-agent-execute-bash-and-live|PostHog 把智能体装进终端，再给它请了个“保镖”]]<span class="pd-rz">同概念:提示词 (prompts)、智能体 (agent)、沙箱 (sandbox)、MCP 服务器 (MCP server)</span>
- [[2026-10-06-talks-how-many-credentials-should-your-ai-agen|AI 智能体不该握着钥匙干活:Docker 工程师的沙箱安全课]]<span class="pd-rz">同公司:Docker、SBX · 同概念:智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-14-pg-together-ai-product-team|Together AI 产品团队全公开：一套仓库让 PM 下指令就出生产级 PR]]<span class="pd-rz">同公司:Claude Code · 同概念:MCP 服务器 (MCP server)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Claude Code、Claude · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-09-talks-multiplayer-agentic-engineering-arjun-si|让非工程师也能下指令：Superconductor 的多人智能体协作法]]<span class="pd-rz">同公司:Claude Code、codex · 同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
