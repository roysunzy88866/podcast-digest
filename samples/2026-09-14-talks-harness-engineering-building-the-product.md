---
title: Harness 工程：把智能体部署到云端规模
podcast: 精选演讲
date: 2026-09-17
source_url: undefined
duration: "20:29"
type: episode
cover: "#64748b"
description: AWS 资深 AI 专家布道师 Mike Chambers 讲解 harness 工程：如何把智能体的记忆、工具、循环拆开，独立扩展到云端规模。
guests: ["[[Mike Chambers]]"]
companies: ["[[Bedrock AgentCore]]"]
concepts: ["[[智能体]]", "[[harness 工程]]", "[[MCP]]", "[[记忆]]", "[[多租户隔离]]", "[[可观测性]]", "[[基础设施即代码]]", "[[系统提示词]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-14-talks-harness-engineering-building-the-product#post","headline":"Harness 工程：把智能体部署到云端规模","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-14-talks-harness-engineering-building-the-product","mainEntityOfPage":"https://talk.solomind.cc/2026-09-14-talks-harness-engineering-building-the-product","description":"AWS 资深 AI 专家布道师 Mike Chambers 讲解 harness 工程：如何把智能体的记忆、工具、循环拆开，独立扩展到云端规模。","datePublished":"2026-09-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Mike Chambers"},{"@type":"Organization","name":"Bedrock AgentCore"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"harness 工程 (harness engineering)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"多租户隔离 (multi-tenant)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"基础设施即代码 (infrastructure as code)"},{"@type":"Thing","name":"系统提示词 (system prompt)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Harness 工程：把智能体部署到云端规模","item":"https://talk.solomind.cc/2026-09-14-talks-harness-engineering-building-the-product"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Harness 工程：把智能体部署到云端规模</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Harness 工程：把智能体部署到云端规模

<div class="pd-byl"><b>Mike Chambers</b> · AWS 资深 AI 专家布道师 · 2026-09-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-14-talks-harness-engineering-building-the-product.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">把一个智能体里的模型部分拿掉,剩下的所有东西,那就是 harness。</div><div class="a">— Mike Chambers <button class="pd-ts" data-t="04:54" data-who="Mike Chambers" data-en="If you take an agent, remove the model part from it and everything that you have left, that's the harness." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Mike Chambers]]
>
> **公司** [[Bedrock AgentCore]]
>
> **概念** [[智能体]] · [[harness 工程]] · [[MCP]] · [[记忆]] · [[多租户隔离]] · [[可观测性]] · [[基础设施即代码]] · [[系统提示词]]

这一集是 AWS 的资深 AI 专家开发者布道师 [[Mike Chambers|Mike Chambers]] 在 AI 工程师大会上的一场演讲,主题是 [[harness 工程|harness 工程]]——也就是「怎么给[[智能体|智能体]]套上那副缰绳」。他给出的定义很干脆:把一个智能体里的模型部分拿掉,剩下的所有东西就是 harness(挽具)——管理循环、[[记忆|记忆]]、技能、工具、[[MCP|MCP]] 连接的那一整套装具 <button class="pd-ts" data-t="04:54" data-who="Mike Chambers" data-en="So in a nutshell, and if you read those articles, and if you've had the conversations around here at this event, of course, a harness. If you take an agent, remove the model part from it and everything that you have left, that's the harness." aria-label="回原文"></button>。

他开场先立了一个区分:世上有两种智能体。一种是「我们使用的」——Claude Code、Cursor、Kiro 这类编码助手和生产力工具;另一种是「我们构建的」——自己开发、部署给大众用的智能体。

这两类要分开对待:你用的智能体尽管放开折腾(token maxing 那类玩法,想怎么烧就怎么烧),但你构建的智能体必须仔细设计,确保它对将要使用它的受众有效 <button class="pd-ts" data-t="03:33" data-who="Mike Chambers" data-en="And this still holds true. So token maxing, all that kind of stuff, go for it if that's what you want to do with an agent that you use. But with an agent that you build, think about it carefully." aria-label="回原文"></button>。这两类也会串起来——你构建的可能正是别人使用的。

**什么是 harness**

harness 原意是「控制动物的一套皮带和扣件」,把「动物」换成「模型」,意思就对了。LangChain 和 MartinFowler.com 都写过相关文章(MartinFowler 那篇是 Brigitte 写的,不是 Martin 本人),讲的是「我们使用的」编码智能体的 harness 工程。而对工程团队来说,这个概念并不陌生:团队有编码标准已经几十年了,现在他们基本上有了 harness 标准——想部署到每个人编码系统上的那套东西 <button class="pd-ts" data-t="05:35" data-who="Mike Chambers" data-en="And well set up engineering teams have got their standards that they've had. They've had coding standards for decades, but now they have basically harness standards, the things that they want to deploy to everybody's coding systems." aria-label="回原文"></button>。

在使用型智能体的语境下,harness 包括:它怎么用记忆、你希望它用的技能、工具和 MCP 服务器(让它能连文档服务器之类)。AWS 为此出了免费的 GitHub 智能体工具包,帮助在 AWS 上部署代码的开发者。

Chambers 对此充满热情的原因是:他不想再看到 slop ops(垃圾运维)。专业云开发领域过去一直反对 ClickOps(在控制台上点来点去)——点来点去适合搞清楚状况,但不是部署到生产环境的方式。同理,可以让智能体回答「现在什么情况」,但别让它直接启动 S3 桶、开 EC2 实例;要让它把[[基础设施即代码|基础设施即代码]]构建出来,由代码去完成部署——这样你仍然拥有自己在云上的部署 <button class="pd-ts" data-t="06:45" data-who="Mike Chambers" data-en="We can ask an agent what's going on, but we don't want to ask the agent to spin up an S3 bucket, get me an EC2 instance, whatever it might be. We want the agent to build up our infrastructure as code, which is going to go and do that." aria-label="回原文"></button>。

**从笔记本到云端规模:构建型智能体要考虑什么**

构建型智能体同样要管记忆、技能、MCP 工具,但远远不止这些,尤其当你要把它部署给大众。怎么管理这个循环?

怎么管理扩展、支付、记忆、身份技能、运行时、上下文管理?还有他特意留到最后、但认为应该最先说的一点:[[可观测性|可观测性]]和评估 <button class="pd-ts" data-t="07:56" data-who="Mike Chambers" data-en="And I have left it to the last thing, but it should be the first thing that I say. Observability and evaluations. Super, super important." aria-label="回原文"></button>。

把所有代码塞进一个容器直接部署?想扩展到数千用户那真不合适——必须把每个组件单独拆出来、分别横向扩展。而这,在他看来就是 harness 工程的本体 <button class="pd-ts" data-t="08:15" data-who="Mike Chambers" data-en="I need to think about each individual of these components and how I'm going to scale them out individually. And that, to me, is harness engineering. This is the serious side of stuff." aria-label="回原文"></button>。

现场演示分三步递进:

1. **本地最小智能体**:用开源的 Strands Agents SDK,十几行代码——引入 agent 和 tool 装饰器,传入 [[系统提示词|system prompt]] 和几个工具(计算器、getTime),框架替你管理循环。算 harness 吗?算是,但跑在笔记本上,没有规模。

2. **加记忆**:第二个智能体(他用 Kiro 生成)加入了 session manager,在多次调用之间维护会话状态——一种中短期记忆,长期记忆则存在文件里。演示效果:因为之前聊过,智能体知道他住在澳大利亚,被问「谁会赢世界杯」时答「澳大利亚」。

3. **上云端**:用 [[Bedrock AgentCore|Bedrock AgentCore]] 部署。他的 agentcore 命令行工具一步步引导:选 Python,选接入方式(HTTP、MCP、或 AGUI 做交互式聊天),框架随便选(任何模型都支持,不限于 Amazon 的),然后勾选长期和短期记忆——它会创建独立于智能体运行、异步连接的云基础设施来管记忆。关键卖点:代码里只需加上与 AgentCore app 的关联,就能在运行时扩展并实现[[多租户隔离|多租户隔离]]——你可以写一个只服务一个用户的智能体,然后直接扩展出去,不用自己写任何多租户代码 <button class="pd-ts" data-t="15:55" data-who="Mike Chambers" data-en="So it's got the linkage into Amazon Bedrock Agent Core app, but pretty much apart from that, that's all you need in order to be able to scale this agent out at runtime and do multi-tenant isolation." aria-label="回原文"></button>;安全和身份管理也随之大幅简化。

**激进的一步:连智能体代码都不要了**

演示的收尾最反直觉:CLI 里其实还有一个「harness」选项他没选——因为 AgentCore 已经把 harness 内置了。最简配置只是一个 JSON:指明用哪个模型、哪个 system prompt,连一行智能体代码都没有,直接 agentcore deploy 就能部署出去。他由此提出一个论断:如果「一个 system prompt 加几个 MCP 工具」就能跑,那也许 80% 的智能体用例、80% 的智能体开发基本上已经被解决了 <button class="pd-ts" data-t="18:20" data-who="Mike Chambers" data-en="I just did a system prompt and some tools and go. And there's an argument to be made that essentially if that's possible, then maybe 80% of agentic use cases, 80% of agent development's kind of solved already." aria-label="回原文"></button>。

最后他强调 AgentCore 的各能力是可组合的:已在生产环境跑得好好的智能体,如果喜欢「长期记忆由别人以无服务器方式代管」这个想法,可以只拿记忆这一块来集成,不必整体迁移 <button class="pd-ts" data-t="19:38" data-who="Mike Chambers" data-en="So you can take any of these and use any of them together or separately. If you have an agent that's running in production very happily at the moment, but you like the idea of having long-term memory managed for you serverless, then you can just take that part and integrate it." aria-label="回原文"></button>。Strands Agents SDK 则免费开源,是一个模型优先的智能体组装框架。

## 本集带走

- **先分清两种智能体**:「使用的」(Claude Code、Cursor 等)可以放开折腾;「构建的」必须为使用它的受众认真设计 harness。
- **harness = 智能体减去模型**:循环、记忆、技能、工具、MCP、运行时、上下文管理、可观测性与评估——每一块都要能独立扩展,而不是塞进一个容器。
- **别让智能体直接点云资源**:延续反对 ClickOps 的思路,让智能体生成基础设施即代码,你才仍然拥有部署。
- **多租户不必手写**:在代码里接上 AgentCore app,就能把单用户智能体直接扩展到多租户,身份和安全一并简化。
- **最简可能已够用**:一个 JSON(模型 + system prompt)加 MCP 工具就能部署——Chambers 认为这可能已覆盖 80% 的智能体开发场景。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">把一个智能体里的模型部分拿掉,剩下的所有东西,那就是 harness。</span>  
> *If you take an agent, remove the model part from it and everything that you have left, that's the harness.*  
> <span class="qm">—— Mike Chambers · [04:54]</span> ^q1

> <span class="qz">在控制台上点来点去很适合搞清楚发生了什么,但这不是你把东西部署到生产环境的方式。</span>  
> *Clicking around on the console is great for being able to figure out what's going on, but it's not how you deploy things into production.*  
> <span class="qm">—— Mike Chambers · [06:30]</span> ^q2

> <span class="qz">可以说,如果这都能做到的话,那么也许 80% 的智能体用例、80% 的智能体开发基本上已经解决了。</span>  
> *And there's an argument to be made that essentially if that's possible, then maybe 80% of agentic use cases, 80% of agent development's kind of solved already.*  
> <span class="qm">—— Mike Chambers · [18:20]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-05-27-devtools-cloudflare-devs|Cloudflare 三人聊：让模型直接写代码，别再堆工具了]]<span class="pd-rz">同概念:MCP、可观测性 (observability)、智能体 (agent)</span>
- [[2026-06-11-practicalai-zero-trust-for-ai-agents|Anthropic 零信任框架：智能体安全的六层防御]]<span class="pd-rz">同概念:MCP、可观测性 (observability)、智能体 (agent)</span>
- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:MCP、智能体 (agent)、记忆 (memory)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同公司:Claude Code · 同概念:system prompt、智能体 (agent)</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:智能体 (agent)、记忆 (memory)</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)</span>

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
