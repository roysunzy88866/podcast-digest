---
title: "AI 智能体不该握着钥匙干活:Docker 工程师的沙箱安全课"
podcast: 精选演讲
date: 2026-10-10
source_url: undefined
duration: "18:04"
type: episode
cover: "#64748b"
description: "Docker 工程师 Jim Clark 讲解如何用沙箱、MCP 网关和零凭据原则,让 AI 智能体安全地长时间工作。"
guests: ["[[Jim Clark]]"]
companies: ["[[Docker]]"]
concepts: ["[[智能体]]", "[[沙箱]]", "[[MCP]]", "[[MCP 网关]]", "[[harness]]", "[[泄露的凭证]]", "[[渐进式披露]]", "[[XAA]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-06-talks-how-many-credentials-should-your-ai-agen#post","headline":"AI 智能体不该握着钥匙干活:Docker 工程师的沙箱安全课","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-06-talks-how-many-credentials-should-your-ai-agen","mainEntityOfPage":"https://talk.solomind.cc/2026-10-06-talks-how-many-credentials-should-your-ai-agen","description":"Docker 工程师 Jim Clark 讲解如何用沙箱、MCP 网关和零凭据原则,让 AI 智能体安全地长时间工作。","datePublished":"2026-10-10","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jim Clark"},{"@type":"Organization","name":"Docker"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"MCP 网关 (gateway)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"泄露的凭证 (credentials)"},{"@type":"Thing","name":"渐进式披露 (progressive disclosure)"},{"@type":"Thing","name":"XAA"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AI 智能体不该握着钥匙干活:Docker 工程师的沙箱安全课","item":"https://talk.solomind.cc/2026-10-06-talks-how-many-credentials-should-your-ai-agen"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 智能体不该握着钥匙干活:Docker 工程师的沙箱安全课</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 智能体不该握着钥匙干活:Docker 工程师的沙箱安全课

<div class="pd-byl"><b>Jim Clark</b> · Docker 工程师 · 2026-10-10</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-06-talks-how-many-credentials-should-your-ai-agen.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">所以在每个单独的时间点，我们都不会出现既能读取疯狂未过滤的上下文、又能用我们的工具做事情的危险组合。</div><div class="a">— Jim Clark <button class="pd-ts" data-t="08:26" data-who="Jim Clark" data-en="So at each individual point, we don't have a dangerous combination of both being able to read in crazy unfiltered context and do things with our tools." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jim Clark]]
>
> **公司** [[Docker]]
>
> **概念** [[智能体]] · [[沙箱]] · [[MCP]] · [[MCP 网关]] · [[harness]] · [[泄露的凭证]] · [[渐进式披露]] · [[XAA]]

半年前,大多数人还坐在电脑前,对 AI [[智能体|智能体]]的每个请求点是、是、是。现在,智能体开始独立跑几小时的长任务。

[[Jim Clark|Jim Clark]] 是 [[Docker|Docker]] 的工程师,他用一场简短的演讲回答了一个关键问题:不盯着智能体的时候,怎么保证它不闯祸?

## 为什么现在必须操心 AI 安全?

Jim 的判断标准很简单:一个设计好的任务,应该不需要他给多少监督,智能体就能自己啃下来。

但放手越多,担心就越多——==智能体拿着你的工具和权限,到底会干出什么==?<button class="pd-ts" data-t="01:46" data-who="嘉宾" data-en="And as I get more and more accustomed to them doing longer running things, I sort of decide that my metric for me having designed a problem that an agent can sink its teeth into is that I don't really need to give it a lot of supervision." aria-label="回原文"></button>

他把问题拆成三层:智能体的工作框架(harness)、干活的[[沙箱|沙箱]],以及连接外部工具的 [[MCP|MCP]]。

工作框架其实很笨:收进上下文,吐出工具调用,一个循环而已。真正危险的是它手里的资源和工具。

> 【背景】MCP(Model Context Protocol)是一种开放协议,让 AI 智能体连接外部工具和数据源,比如 Notion、GitHub 的接口。

## 新闻编辑室的比喻:把危险能力拆开

Jim 用报纸编辑室做比喻。

记者跑出去到处搜集信息,但不能直接发文;核查员核对事实,但不需要上网;撰稿人拿到的是核查过的材料,才有发布权限。

三个角色分开,谁也不掌握全部权力。<button class="pd-ts" data-t="05:59" data-who="嘉宾" data-en="The first one is a newsroom analogy. So if you've got a newspaper reporter, they go out in the world, they find cool stories, find cool information, they bring it back." aria-label="回原文"></button>

对应到智能体:研究员沙箱可以随便上网,但没有写入公司系统的工具;事实核查员能查内部数据库,但完全断网;发布环节才拿到 Notion 或发布工具的接口。

整个流程合起来能力很强,但**任何单个沙箱里,都不会同时出现读任意内容和能对外操作这两种危险组合**。<button class="pd-ts" data-t="08:26" data-who="嘉宾" data-en="But we break it up into logical sandboxes. So at each individual point, we don't have a dangerous combination of both being able to read in crazy unfiltered context and do things with our tools." aria-label="回原文"></button>

## 沙箱大小,应该由任务意图决定

Jim 讲了他自己搭建编程智能体的做法。任务可能跑一小时,但真正需要提交代码、用签名密钥的时间可能只有两分钟。

那为什么密钥要在沙箱里待满一小时?<button class="pd-ts" data-t="09:16" data-who="嘉宾" data-en="But the amount of time that my agent is actually committing is almost nothing. In an hour, it might need, say, my Git signing keys for like two minutes of that time." aria-label="回原文"></button>

他的原则:**沙箱按任务意图建模**。这一步不做提交,就不该有提交签名密钥;这一步不需要网络,就该彻底断网。

能力随需给,用完就收回。

> 【背景】沙箱指隔离的运行环境,限制程序能访问的文件、网络和工具。

## 所有 MCP 流量走一个网关

Docker Sandbox 产品的核心设计,是在每个沙箱里放一个网关端点(类似 mcpgateway.docker.internal 的内部地址)。所有工具调用、所有资源获取,都从这个单一关口进出。<button class="pd-ts" data-t="10:30" data-who="嘉宾" data-en="And then we're just putting a little gateway endpoint into that. And that gateway endpoint funnels all MCP traffic. So imagine it's something like an internal URL, mcpgateway.docker.internal, or something like this, that every single agent harness has, and all traffic, all resources that you need to pull in, all tool calls, move through this one single gateway." aria-label="回原文"></button>

好处有两个。第一,网关成了控制点:哪个沙箱能用哪些工具、资源和提示,由沙箱配置说了算。

第二,各种工作框架都变得 MCP 无关——不用在 Codex 里配一遍、Claude Code 里再配一遍,框架本身成了沙箱的一个可替换参数。<button class="pd-ts" data-t="11:23" data-who="嘉宾" data-en="The configuration of the sandbox controls what you can do inside of that sandbox with things like MCP. Another nice thing is suddenly all your harnesses are MCP agnostic." aria-label="回原文"></button>

这就是他演讲标题的答案:==沙箱里应该放多少[[泄露的凭证|凭据]]==?

「正确答案永远是零。」<button class="pd-ts" data-t="12:05" data-who="嘉宾" data-en="In fact, I would say that a maxim that you can use here is how many credentials should be in a sandbox? Well, I mean, the right answer is always zero. They should just never be in there." aria-label="回原文"></button>

凭据不进沙箱,智能体犯错的爆炸半径就被压到最小。真正需要授权时,走另一条路。

## 零凭据怎么授权?复用公司的现有体系

Docker、Anthropic 和 Okta 正在合作推动一个叫 [[XAA|XAA]](Cross-App Application)的方案。

思路是:公司早就有了单点登录和身份管理,Notion、GitHub、Slack 这些服务早就接好了——但智能体至今够不着它们。<button class="pd-ts" data-t="12:24" data-who="嘉宾" data-en="And the blast radius of an agent doing something incorrect if there are absolutely no credentials in there is reduced. So one of the things that Docker, Anthropic, Okta are all partnering on is a new thing called XAA, Cross App Application." aria-label="回原文"></button>

做法是沙箱和网关定义智能体的身份,也就是它代表谁在干活。

拿这个身份去和公司已有的身份提供商交换声明,换回一个授权许可(新版 MCP 规范里的新概念)。

没有疯狂的同意弹窗,公司就能集中管理智能体对所有内部服务的访问——把已有投资直接复用。<button class="pd-ts" data-t="14:05" data-who="嘉宾" data-en="We're leveraging all this existing investment that these corporate networks already have. But suddenly, without any crazy consent screens, yeah, you can do that, yeah, you can do that, yeah, you can do that, we can centralize the administration of what an agent now does with all these existing resource servers." aria-label="回原文"></button>

## 渐进式披露,顺便省上下文

一个完整工作流可能用 50 个 MCP,但每个沙箱不需要装着全部 50 个。Jim 借用了[[渐进式披露|渐进式披露]]的说法:工具和资源按需逐步给进去。<button class="pd-ts" data-t="14:31" data-who="嘉宾" data-en="So the MCP gateways, I like to think are, we're starting to talk about progressive disclosure, it's a term we learned from skills. I like to think we're starting to use this, now we're able to progressively disclose tools and resources and MCPs into these sandboxes using very, very similar principles." aria-label="回原文"></button>

这还有个附带好处:上下文体积更小。

编排器的职责也随之清晰——接到任务,先问需要什么能力,再决定放进哪个沙箱、配哪些工具、给什么网络规则。<button class="pd-ts" data-t="15:09" data-who="嘉宾" data-en="Let them represent what you're actually trying to do in this task. So I like this picture because suddenly we start to think about orchestrators as one of their jobs is to go, well, what am I doing?" aria-label="回原文"></button>

Jim 说,这一切本质上是把智能体容器化,也解释了他为什么在 Docker 做这件事。现场可以通过 brew install SBX 装到这个工具。<button class="pd-ts" data-t="17:31" data-who="嘉宾" data-en="It's available today. Anyone just brew install SBX. Everything I've been talking about today is this tool SBX." aria-label="回原文"></button>

## 本集带走

- 沙箱里应该放多少凭据?答案永远是零,凭据由网关按需授权。
- 把危险能力拆开:能读任意内容的能力和能对外操作的能力,永远不要出现在同一个沙箱里。
- 沙箱大小由任务意图决定:这一步用不到的权限,就不该出现在沙箱里。
- 所有 MCP 流量走单一网关,形成控制点,还让各种工作框架可以随意替换。
- Docker、Anthropic、Okta 合作推进 XAA,复用公司已有的单点登录体系给智能体授权,无需重复配置。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">所以在每个单独的时间点，我们都不会出现既能读取疯狂未过滤的上下文、又能用我们的工具做事情的危险组合。</span>  
> *So at each individual point, we don't have a dangerous combination of both being able to read in crazy unfiltered context and do things with our tools.*  
> <span class="qm">—— Jim Clark · [08:26]</span> ^q1

> <span class="qz">如果你的智能体知道你想做什么的意图，那就用那个意图来建模你赋予它的能力。</span>  
> *If your agents know the intent of what you're trying to do, then use that intent to model the capabilities that you give to that.*  
> <span class="qm">—— Jim Clark · [09:58]</span> ^q2

> <span class="qz">而且如果里面绝对没有任何凭证，一个智能体做出错误行为的爆炸半径就缩小了。</span>  
> *And the blast radius of an agent doing something incorrect if there are absolutely no credentials in there is reduced.*  
> <span class="qm">—— Jim Clark · [12:12]</span> ^q3

> <span class="qz">给你的智能体解决问题的空间，但让单个沙箱表达任务的意图。</span>  
> *Give your agents room to solve problems, but let individual sandboxes represent the intent of the task.*  
> <span class="qm">—— Jim Clark · [14:56]</span> ^q4

> <span class="qz">我们习惯于考虑建模能力、为任务构建合适的沙箱、把任务放进去，而现在我们开始看到，这个个体循环更安全，因为它拥有的访问权限比整个工作流实际拥有的要少。</span>  
> *We get used to thinking about modeling capabilities, building the right sandbox for the task, putting the task in, and now we're starting to see that this individual loop is safer because it has less access than the entire workflow effectively has.*  
> <span class="qm">—— Jim Clark · [15:54]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-20-talks-unlock-agent-autonomy-the-runtime-for-ai|解锁智能体自主性：安全才是下一个瓶颈]]<span class="pd-rz">同公司:Docker · 同概念:MCP、智能体 (agent)、智能体 harness (harness)、沙箱 (sandbox)</span>
- [[2026-08-11-talks-evolution-of-agentic-surfaces-gagan-bhat|Anthropic 构建生产级智能体的教训:harness 须为模型能力演进而生]]<span class="pd-rz">同公司:Anthropic · 同概念:凭据 (credentials)、智能体 (agent)、智能体 harness (harness)、沙箱 (sandbox)</span>
- [[2026-08-28-talks-ai-native-organisations-run-on-skills-ho|AI 原生组织如何运行在 Skills 之上]]<span class="pd-rz">同公司:Anthropic · 同概念:MCP、智能体 harness (harness)、沙箱 (sandbox)、渐进式披露 (progressive disclosure)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-29-latent-thariq|Anthropic 的 Thariq 谈 Claude Code：提示词、CloudMods 与给前沿踩刹车]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、智能体 harness (harness)、沙箱 (sandbox)</span>
- [[2026-10-03-talks-yolo-mode-safely-microvm-sandboxes-for-a|我用五个提示词「黑」了自己：你的 AI 助手并不安全]]<span class="pd-rz">同公司:Docker、SBX · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog|AI失控了别慌,先盯紧漏洞数量爆炸]]<span class="pd-rz">同概念:凭据 (credentials)、智能体 (agent)、沙箱 (sandbox)</span>

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
