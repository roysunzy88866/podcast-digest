---
title: "零冷启动:把 AI 应用跑在离用户最近的边缘"
podcast: 精选演讲
date: 2026-10-16
source_url: undefined
duration: "22:18"
type: episode
cover: "#64748b"
description: "Akamai 开发者布道师 Thorsten Hans 讲解如何用 Spin 和 Akamai Functions,把 MCP 服务器和 AI 代理部署到全球边缘节点。"
guests: ["[[Thorsten Hans]]"]
companies: ["[[Spin]]", "[[Akamai Functions]]", "[[WASMCP]]", "[[Akamai]]"]
concepts: ["[[智能体]]", "[[MCP]]", "[[WebAssembly]]", "[[冷启动]]", "[[沙箱]]", "[[边缘原生架构]]", "[[内存快照]]", "[[键值存储]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-10-talks-zero-cold-starts-serverless-ai-agents-on#post","headline":"零冷启动:把 AI 应用跑在离用户最近的边缘","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-10-talks-zero-cold-starts-serverless-ai-agents-on","mainEntityOfPage":"https://talk.solomind.cc/2026-10-10-talks-zero-cold-starts-serverless-ai-agents-on","description":"Akamai 开发者布道师 Thorsten Hans 讲解如何用 Spin 和 Akamai Functions,把 MCP 服务器和 AI 代理部署到全球边缘节点。","datePublished":"2026-10-16","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Thorsten Hans"},{"@type":"Organization","name":"Spin"},{"@type":"Organization","name":"Akamai Functions"},{"@type":"Organization","name":"WASMCP"},{"@type":"Organization","name":"Akamai"},{"@type":"Thing","name":"智能体 (agents)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"WebAssembly"},{"@type":"Thing","name":"冷启动 (cold start)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"边缘原生架构 (Edge Native Architectures)"},{"@type":"Thing","name":"内存快照 (memory snapshot)"},{"@type":"Thing","name":"键值存储 (key value store)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"零冷启动:把 AI 应用跑在离用户最近的边缘","item":"https://talk.solomind.cc/2026-10-10-talks-zero-cold-starts-serverless-ai-agents-on"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>零冷启动:把 AI 应用跑在离用户最近的边缘</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 零冷启动:把 AI 应用跑在离用户最近的边缘

<div class="pd-byl"><b>Thorsten Hans</b> · Akamai 开发者布道师 · 2026-10-16</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-10-talks-zero-cold-starts-serverless-ai-agents-on.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">你可以把 WebAssembly 之于容器，理解为容器之于虚拟机的关系。</div><div class="a">— Thorsten Hans <button class="pd-ts" data-t="02:59" data-who="Thorsten Hans" data-en="You can think of WebAssembly as containers relate to virtual machines." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Thorsten Hans]]
>
> **公司** [[Spin]] · [[Akamai Functions]] · [[WASMCP]] · [[Akamai]]
>
> **概念** [[智能体]] · [[MCP]] · [[WebAssembly]] · [[冷启动]] · [[沙箱]] · [[边缘原生架构]] · [[内存快照]] · [[键值存储]]

你写了一个 AI 代理或 [[MCP|MCP]] 服务器,自己也用得挺顺。但用户如果在另一个大洲,请求要跨洋往返,体验就崩了。

这是 [[Akamai|Akamai]] 高级开发者布道师 [[Thorsten Hans|Thorsten Hans]] 在这场 20 分钟演讲里要解决的问题:用 [[WebAssembly|WebAssembly]] 把 AI 应用部署到全球分布的边缘节点,做到零[[冷启动|冷启动]]。

## 传统部署 AI 应用,慢在哪?

传统架构绑定在某个区域的服务器上。离服务器近的用户觉得快,远的用户延迟就高,体验参差不齐 <button class="pd-ts" data-t="00:46" data-who="嘉宾" data-en="They are no different than any other kind of application, so they obviously demand super-fast response time so that we can deliver the best possible user experience." aria-label="回原文"></button>。

更大的麻烦是冷启动。如果你**用容器或虚拟机,遇到流量突增需要快速扩容时,冷启动可能要几秒甚至几分钟** <button class="pd-ts" data-t="01:25" data-who="嘉宾" data-en="Depending on where you deploy your MCPs or your agents, it might be fast for a subset of your global audience, but others might experience a way lower latency and resulting in a way worse user experience." aria-label="回原文"></button>。

解决办法之一是提前多备机器,但闲置机器既烧钱又不环保。

用云厂商的高级托管方案,又往往被专有开发套件锁死,以后想迁移,又贵又麻烦。

## 关键武器:WebAssembly,容器的容器

Hans 的方案是服务端 WebAssembly。他打了个比方:WebAssembly 之于容器,就像容器之于虚拟机——体积更小、分发更快、随处可跑 <button class="pd-ts" data-t="02:59" data-who="嘉宾" data-en="And this is done by adopting WebAssembly on the server-side. You can think of WebAssembly as containers relate to virtual machines. So they are binaries, super tiny in size, easy to distribute, super fast to run, and portable." aria-label="回原文"></button>。

具体到工具链,是两个东西的组合:一个是 CNCF 开源项目 [[Spin|Spin]],负责开发,提供命令行工具、运行时和各语言的开发套件,支持 Rust、TypeScript、Python 等所有能编译成 WebAssembly 的语言;另一个是 [[Akamai Functions|Akamai Functions]],负责运行——一个全球分布的托管平台,号称零冷启动,平均每次请求的冷启动不到半毫秒 <button class="pd-ts" data-t="05:10" data-who="嘉宾" data-en="So every application that you deploy to Akamai Functions is cold started per request that hits your endpoint. And on average, we can cold start in less than half a millisecond." aria-label="回原文"></button>。

部署也简单:不用写 Terraform,一条命令,应用就全球分布了。

它还自带[[键值存储|键值存储]],本地开发时用 SQLite 模拟,部署后自动换成全球分布的存储,不用改配置 <button class="pd-ts" data-t="11:53" data-who="嘉宾" data-en="Decision.rs if we go to the bottom of the file you can see this is slightly different syntax but the same meaning right I have to define my tools and if we go to line 15 or so yes list decisions you can see over here that I use" aria-label="回原文"></button>。

## 写 MCP 服务器,只管业务逻辑

演讲里演示了工具 wasmcp。

它把 MCP 服务器里那些和业务无关的活——比如用 OAuth2 做用户认证——都做成了现成组件,你只管实现自己的工具、资源和提示词 <button class="pd-ts" data-t="07:06" data-who="嘉宾" data-en="Everything else, all those non-functional requirements that we have to tackle, right? Like, for example, authenticating users using OAuth2 and OIDC, that's done by WASMCP and we can take ready-to-use components off the shelf and compose a final MCP server component together and run that on SPIN or on Akamai functions." aria-label="回原文"></button>。

流程很短:用脚手架生成项目,写好工具定义和一个分发函数,然后编译成 WebAssembly 组件,再组装成完整的 MCP 服务器,本地跑在 localhost 上,用 MCP Inspector 一测就能通。

接着是重头戏:**一条 `spin akamai deploy`,把编译产物上传,自动分发到全球所有服务区域**,每个区域确认能跑、健康检查通过后,给你生成一个公开网址——全程大约 60 秒 <button class="pd-ts" data-t="14:17" data-who="嘉宾" data-en="So we get that URL, so we are globally distributed in roughly 60 seconds. Let's move over to a client. I use Z over here, but that works with any client that basically supports MCP." aria-label="回原文"></button>。

把这个地址填进任何支持 MCP 的客户端,就能调用里面的工具了。

演示里,IDE 里的 AI 识别出用户意图,自动调用记录决策和列出决策两个工具,数据都存在那个内置键值存储里。

## AI 代理也能这么部署

代理的逻辑类似,但不用额外工具,直接拿常用的 Vercel AI SDK 写就行。

演示的游戏代理可以抛硬币、掷骰子,背后调用一台带独立 GPU 的 Linode 实例上跑的大语言模型。

这里有个有意思的技术细节:解释型语言(如 JavaScript)编译成 WebAssembly 时,会把解释器、你的代码和所有依赖一起加载,然后拍一张[[内存快照|内存快照]]存下来。

结果是,**WebAssembly 版的 JavaScript 应用在冷启动和运行性能上,反而比原生 JavaScript 应用更快** <button class="pd-ts" data-t="18:27" data-who="嘉宾" data-en="This has one advantage, that not just the runtime is hot, also all the dependencies are loaded, and then we take a memory snapshot, write that to WASM, store that on disk, meaning" aria-label="回原文"></button>。

实际效果如何?

请求响应头里能看到,用户从 Santa Clara 进入网络,被路由到最近的 LAX 节点,整个流程——收到请求、跑业务逻辑、调用大模型、生成回答、返回用户——大约 820 毫秒 <button class="pd-ts" data-t="20:20" data-who="嘉宾" data-en="So roughly 820 milliseconds is what we could achieve with a full loop through the LLM by taking our agent and deploying it to Akamai functions. OK. So the developer workflow is always the same, no matter if you build any kind of line of business application, if you build an MCP, or if you build an agent, you implement" aria-label="回原文"></button>。

## 为什么值得在意?

Hans 总结了三点:可移植,Spin 应用能跑在任何符合 WASI 标准的运行时上,不被单一厂商锁死;全走开放标准,Spin 归 CNCF,WebAssembly 归 ByteCode Alliance;以及快——不只是响应快,上市也快,因为基础设施和非功能性需求都不用自己操心 <button class="pd-ts" data-t="21:02" data-who="嘉宾" data-en="So, final or key takeaways from my point are portability. You can take those spin apps and run them on any WESI-compliant runtime. Akamai Functions is one runtime and it's the globally distributed runtime." aria-label="回原文"></button>。

当然,这是一场厂商演讲,Akamai Functions 是他们的产品,数字都来自演讲者本人。但「用 WebAssembly 做边缘部署」这个思路本身,值得做 AI 应用的人了解。

## 本集带走

- 传统区域绑定的架构让全球用户延迟参差不齐,容器冷启动可能长达数秒到几分钟
- WebAssembly 体积小、启动快、可移植,Spin + Akamai Functions 把它用于服务端,号称平均冷启动不到半毫秒
- wasmcp 把 MCP 服务器的认证等非业务功能做成现成组件,开发者只写工具逻辑
- 一条部署命令,约 60 秒即可把应用分发到全球边缘节点,并自动生成公开地址
- JavaScript 编译成 WebAssembly 后,因内存快照机制,冷启动反而比原生更快

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">你可以把 WebAssembly 之于容器，理解为容器之于虚拟机的关系。</span>  
> *You can think of WebAssembly as containers relate to virtual machines.*  
> <span class="qm">—— Thorsten Hans · [02:59]</span> ^q1

> <span class="qz">平均而言，我们的冷启动时间不到半毫秒。</span>  
> *And on average, we can cold start in less than half a millisecond.*  
> <span class="qm">—— Thorsten Hans · [05:10]</span> ^q2

> <span class="qz">每一个用 JavaScript 编写的 WebAssembly 应用在冷启动和运行时性能方面都比原生 JavaScript 应用更快。</span>  
> *That every WebAssembly application written in JavaScript is faster than a native JavaScript application when it comes to cold starts and runtime performance.*  
> <span class="qm">—— Thorsten Hans · [18:27]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-05-27-devtools-cloudflare-devs|Cloudflare 三人聊：让模型直接写代码，别再堆工具了]]<span class="pd-rz">同概念:MCP、沙箱 (sandbox)</span>
- [[2026-08-14-thepeel-re-founding-a-company-for-the-ai-era--sh|Merge的"二次创业"：从SaaS集成到AI连接基础设施]]<span class="pd-rz">同概念:MCP、沙箱 (sandbox)</span>
- [[2026-08-20-talks-unlock-agent-autonomy-the-runtime-for-ai|解锁智能体自主性：安全才是下一个瓶颈]]<span class="pd-rz">同概念:MCP、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-28-yc-sam-altman-never-a-better-time-to-do-a-s|Sam Altman 谈 AI 时代的创业法则:被全世界当成白痴是最大优势]]<span class="pd-rz">同概念:智能体 (agents)、沙箱 (sandbox)</span>
- [[2026-08-31-pmf-he-sold-his-8-figure-business-to-bet-on|三次找到产品市场匹配：一个创始人的实战手册]]<span class="pd-rz">同概念:MCP、智能体 (agents)</span>
- [[2026-10-08-talks-how-a-remote-company-builds-ai-fluency-e|1400 人分布在全球 82 国，这家公司怎么让员工学会用 AI]]<span class="pd-rz">同概念:MCP、智能体 (agents)</span>

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
