---
title: Electric James：智能体不是计算，是数据
podcast: Scaling DevTools
date: 2026-08-27
source_url: undefined
duration: "11:42"
type: episode
cover: "#64748b"
description: Electric 的 James 主张把智能体从沙箱容器里搬出来，建模为数据层中的持久化日志，实现无服务器的协作式多智能体运行时。
host: "[[James]]"
companies: ["[[Electric]]"]
concepts: ["[[Electric Agents]]", "[[智能体]]", "[[沙箱]]", "[[会话日志追踪]]", "[[多智能体系统]]", "[[Managed Agents]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-27-devtools-james-arthur-from-electricsql-agents-are#post","headline":"Electric James：智能体不是计算，是数据","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-27-devtools-james-arthur-from-electricsql-agents-are","mainEntityOfPage":"https://talk.solomind.cc/2026-08-27-devtools-james-arthur-from-electricsql-agents-are","description":"Electric 的 James 主张把智能体从沙箱容器里搬出来，建模为数据层中的持久化日志，实现无服务器的协作式多智能体运行时。","datePublished":"2026-08-27","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"James"},{"@type":"Organization","name":"Electric"},{"@type":"Thing","name":"Electric Agents"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"会话日志追踪 (session log)"},{"@type":"Thing","name":"多智能体系统 (multi-agent systems)"},{"@type":"Thing","name":"Managed Agents"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Electric James：智能体不是计算，是数据","item":"https://talk.solomind.cc/2026-08-27-devtools-james-arthur-from-electricsql-agents-are"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Electric James：智能体不是计算，是数据</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Electric James：智能体不是计算，是数据

<div class="pd-byl"><b>James</b> · 2026-08-27</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-27-devtools-james-arthur-from-electricsql-agents-are.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">所以我们的论点是智能体不是计算。</div><div class="a">— James <button class="pd-ts" data-t="01:01" data-who="James" data-en="So our thesis is that agents are not compute." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[James]]
>
> **公司** [[Electric]]
>
> **概念** [[Electric Agents]] · [[智能体]] · [[沙箱]] · [[会话日志追踪]] · [[多智能体系统]] · [[Managed Agents]]

现在主流跑[[智能体|智能体]]的方式是给它一台电脑——丢进 Docker 容器或[[沙箱|沙箱]]，让它跑 bash、grep、操作文件系统。[[James|James]] 认为这完全是反模式，原因有两个。

第一是[[会话日志追踪|会话日志]]和决策痕迹全埋在黑盒里。你在本地用 Claude 做研究、派生子智能体，子智能体的会话日志就藏在你电脑某个隐藏文件夹的 JSON Lines 文件里。

搬到线上沙箱也一样——你总不能 SSH 进沙箱去翻日志。过去二十年企业把 Web 服务搬上云，自然就接上了 Prometheus、Datadog 这些可观测性工具；但智能体却以黑盒容器的方式部署，跟标准 Web 基础设施完全脱节 <button class="pd-ts" data-t="04:21" data-who="James" data-en="And so they need a file system and they do bash and grep and these types of tool calls. And so that's why when you think of how do I bring an agent online, you kind of take that harness and you put it into like a Docker container or a sandbox or a VM of some sort." aria-label="回原文"></button>。

第二，更根本的问题是：把智能体建模为计算，逻辑上就不对 <button class="pd-ts" data-t="05:45" data-who="James" data-en="But kind of agents are sort of weirdly being deployed as these like sort of black box containers. So one thing is the kind of fragmentation, but then the other thing is more just that it models agents as compute." aria-label="回原文"></button>。

James 的核心论点是：智能体不是计算，是数据 <button class="pd-ts" data-t="05:52" data-who="James" data-en="So one thing is the kind of fragmentation, but then the other thing is more just that it models agents as compute. And so the key thing about agents that we see is that agents are not compute, they are data." aria-label="回原文"></button>。一个智能体到底是什么？

不是那个跑着两 GB 内存的虚拟机——智能体就是它的会话日志。你未来会有海量的智能体：每个工作流里的每一步、每次客户互动、每个你需要协作的对象都可能对应一个智能体。

如果每个都当虚拟机跑，效率低得离谱 <button class="pd-ts" data-t="06:01" data-who="James" data-en="Well... what we see it more as is like the agent is the session log so say you have an agent and that could be like an agent that is doing a process in a kind of pr work in a ci workflow or it could be you have an agent like for a pr or it could be an agent for like an object in this room and like you're just going to have a huge number of agents for everything it's like every step in every work process every customer interaction every like touch point that you could work with" aria-label="回原文"></button>。更关键的是，如果你把智能体等同于它所在的计算资源，那计算一停，智能体就不存在了。

但你实际需要的是：跟一个智能体聊完了，把它休眠或缩放到零；过一阵子回来，继续同一个会话，甚至分叉出一条新分支。这意味着智能体在不运行的时候也必须存在——它活在数据层的持久化存储里，不在计算层里 <button class="pd-ts" data-t="06:44" data-who="James" data-en="And also if you model the agent as compute and if you then kill the compute, well, the agent isn't there. But you obviously need this model where you'd be like, okay, I'm interacting with this agent, I'm kind of finished, so let's like hibernate it or kind of scale it down." aria-label="回原文"></button>。

那不给智能体电脑，工具调用怎么执行？答案是拆分：把智能体逻辑和工具调用执行分开 <button class="pd-ts" data-t="07:39" data-who="James" data-en="You want isolation and you do need like tool call execution. But if you think if you look at this more sort of managed agent pattern what you can do is separate the agent logic from the tool call execution." aria-label="回原文"></button>。

打个比方，你要让智能体生成一份数据报告，你不会让它"幻觉"出一个 CSV 文件，而是向数据库发一条 SQL 查询，让数据平台执行查询计划、导出真实数据。同理，文件操作、grep 之类的事情，可以用仿真层来代替真正的文件系统——对智能体来说看起来像在用电脑，实际背后是正规的在线系统在执行 <button class="pd-ts" data-t="08:13" data-who="James" data-en="Do you get your agent to hallucinate out the CSV file or do you send a SQL query to a database, which is actually just like a normal data system or data platform that's running under your control that actually exports out the data by executing the query plan?" aria-label="回原文"></button>。智能体逻辑本身可以跑在一个轻量的函数里（比如边缘函数），不绑定笨重的容器 <button class="pd-ts" data-t="08:43" data-who="James" data-en="And so that's the switch where you go, you don't have a sandbox which bundles it all together. You can just have, you can have like a function, like a VA isolate or however you do like a Cloudflare worker or an edge function that is capable of running expressive agent logic, including things like code mode and code execution." aria-label="回原文"></button>。

James 指出，Anthropic 的 Managed Agents 论文和 Cloudflare 的 Project Think 论文，其实都收敛到了同一个架构：托管在线智能体、智能体逻辑与工具执行分离、会话日志做持久化 <button class="pd-ts" data-t="09:26" data-who="James" data-en="create an artifact or query a data system that should go back into like traditional data platform stuff because then also you can kind of monitor it and ensure quality and that's sort of deterministic software that you can control so that's this architecture where in a way more scalable managed online agents move to agents and functions separated from the tool call execution with the durability in the session log" aria-label="回原文"></button>。[[Electric|Electric]] 做的是从数据层提供这套原语，让开发者不用被锁定在某个特定平台上 <button class="pd-ts" data-t="09:36" data-who="James" data-en="And if you read the kind of Anthropic Managed Agents paper, if you read the Cloudflare Project Think paper, this is the architecture which they and others have all converged on." aria-label="回原文"></button>。

他们已经发布了 [[Electric Agents|Electric Agents]]，一个开源的协作式多智能体运行时。用法很简单——跑一下快速入门就拿到运行时，把智能体定义成类似请求处理函数的形式，可以用 Vercel AI SDK、TanStack AI、Mastra 等任何框架写智能体代码，加一层运行时垫片就能接入，自动获得协调和数据连线的能力 <button class="pd-ts" data-t="10:35" data-who="James" data-en="There's a whole bunch of quick starts, examples, patterns. and it may sound like quite big sort of conceptual stuff but it's actually just very very simple you just like run the quick start and it just gives you this like run time and then you just define entities as if you would like a bit like you define like functions they're like almost like request handlers and you can use whatever AI engineering frameworks and tools that you want to" aria-label="回原文"></button>。

## 本集带走
- **智能体 = 会话日志，不是虚拟机**：把它当数据持久化到数据层，不运行时也能存在、能恢复、能分叉。
- **拆开智能体逻辑和工具执行**：智能体代码跑轻量函数，工具调用走后端正规系统（数据库查询、仿真层等），别绑死在沙箱容器里。
- **会话日志不能埋在黑盒里**：智能体上线部署必须接入可观测性，决策痕迹要可查询——这跟过去二十年 Web 服务上云是同一个道理。
- **这个架构不是 Electric 一家在推**：Anthropic Managed Agents、Cloudflare Project Think 都收敛到了同一方向，Electric 的差异在于从数据层提供开源原语、不锁定平台。

<div class="pd-sec">全部金句 <span>7 条</span></div>

> <span class="qz">所以我们的论点是智能体不是计算。</span>  
> *So our thesis is that agents are not compute.*  
> <span class="qm">—— James · [01:01]</span> ^q1

> <span class="qz">我们认为智能体是数据层中的日志。</span>  
> *We think of agents as logs in the data layer.*  
> <span class="qm">—— James · [01:12]</span> ^q2

> <span class="qz">我们认为多智能体系统是一个分布式数据问题。</span>  
> *We think of multi-agent systems as a distributed data problem.*  
> <span class="qm">—— James · [01:15]</span> ^q3

> <span class="qz">因为你认为你需要给智能体一台电脑，是啊，呃，我们认为这更像是一种反模式</span>  
> *because you think you need to give the agent a computer yeah uh and we see that as more of an anti-pattern*  
> <span class="qm">—— James · [04:30]</span> ^q4

> <span class="qz">所以关于智能体，我们要看到的关键点是智能体不是计算，它们是数据。</span>  
> *And so the key thing about agents that we see is that agents are not compute, they are data.*  
> <span class="qm">—— James · [05:52]</span> ^q5

> <span class="qz">而且，如果你把智能体建模为计算，然后你终止了计算，那么智能体就不在了。</span>  
> *And also if you model the agent as compute and if you then kill the compute, well, the agent isn't there.*  
> <span class="qm">—— James · [06:37]</span> ^q6

> <span class="qz">所以当你把智能体看作逻辑实体时，你意识到即使它们不运行时它们也是存在的，这就是为什么如果你把它们建模为计算，那就完全错了，因为它们并不存在于计算中。</span>  
> *And so when you think of agents as like logical entities, you realize that they exist even when they're not running, which is why if you model them as compute, it's just wrong because they don't live in the compute.*  
> <span class="qm">—— James · [07:03]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag：把智能体从终端搬进 Slack 的多人协作实验]]<span class="pd-rz">同公司:Anthropic · 同概念:托管智能体 (managed agents)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-11-talks-evolution-of-agentic-surfaces-gagan-bhat|Anthropic 构建生产级智能体的教训:harness 须为模型能力演进而生]]<span class="pd-rz">同公司:Anthropic · 同概念:会话日志 (session log)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-02-19-lennys-head-of-claude-code-what-happens|Claude Code 负责人：写代码已被解决，下一步是什么]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog|AI失控了别慌,先盯紧漏洞数量爆炸]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、Claude</span>

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
  // 故再兜一条 history.length>1(站内点进必有返回历史)。命中「直开」给 body 打 .pd-direct,CSS 切显隐。
  function direct(){
    var ref = document.referrer || '';
    var fromSite = (ref.indexOf(location.origin) === 0) || history.length > 1;
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
