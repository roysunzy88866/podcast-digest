---
title: "会自己造工具的智能体:AWS 元工具化实战"
podcast: 精选演讲
date: 2026-10-06
source_url: undefined
duration: "20:20"
type: episode
cover: "#64748b"
description: AWS 工程师 Sandy 演示 StrandsAgents 框架如何让智能体在运行时自己编写工具、生成子智能体，甚至修复自身代码。
guests: ["[[Sandhya Subramani]]"]
companies: ["[[AWS]]"]
concepts: ["[[智能体]]", "[[StrandsAgents]]", "[[元工具化]]", "[[系统提示词]]", "[[运行时]]", "[[沙箱]]", "[[护栏]]", "[[评估]]", "[[多智能体系统]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-04-talks-agents-that-write-their-own-tools-at-run#post","headline":"会自己造工具的智能体:AWS 元工具化实战","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-04-talks-agents-that-write-their-own-tools-at-run","mainEntityOfPage":"https://talk.solomind.cc/2026-10-04-talks-agents-that-write-their-own-tools-at-run","description":"AWS 工程师 Sandy 演示 StrandsAgents 框架如何让智能体在运行时自己编写工具、生成子智能体，甚至修复自身代码。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Sandhya Subramani"},{"@type":"Organization","name":"AWS"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"StrandsAgents"},{"@type":"Thing","name":"元工具化 (MetaTooling)"},{"@type":"Thing","name":"系统提示词 (system prompt)"},{"@type":"Thing","name":"运行时 (runtime)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"多智能体系统 (multi-agentic systems)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"会自己造工具的智能体:AWS 元工具化实战","item":"https://talk.solomind.cc/2026-10-04-talks-agents-that-write-their-own-tools-at-run"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>会自己造工具的智能体:AWS 元工具化实战</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 会自己造工具的智能体:AWS 元工具化实战

<div class="pd-byl"><b>Sandhya Subramani</b> · AWS 工程师 · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-04-talks-agents-that-write-their-own-tools-at-run.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果这个元工具或元智能体能派生出工具和智能体，它也能修改和删除。我想让它删除我的数据吗？</div><div class="a">— Sandhya Subramani <button class="pd-ts" data-t="17:11" data-who="Sandhya Subramani" data-en="If this meta tooling or this meta agent can spin off tools and agents, it can also modify and delete. Do I want it to delete my data?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sandhya Subramani]]
>
> **公司** [[AWS]]
>
> **概念** [[智能体]] · [[StrandsAgents]] · [[元工具化]] · [[系统提示词]] · [[运行时]] · [[沙箱]] · [[护栏]] · [[评估]] · [[多智能体系统]]

一个[[智能体|智能体]]在生产环境里跑着，突然遇到一个没被编程覆盖的场景——订国内机票的应用，用户却要订印度飞香港。

按老办法，你得把它停下来、自己修、再重启，来回两周。

这一集的讲者 Sandy（[[AWS|AWS]] 工程师）展示的是另一条路：智能体自己发现问题、自己写工具、自己修复自己。

他现场演示了一个“空”智能体——只有 [[系统提示词|system prompt]]，三个工具文件全是空的，严格来说什么能力都没有——你让它算个复杂数学方程，它当场写出一个数学计算器工具，然后在**不重启**的情况下立刻调用它给你答案；

再让它数一个单词里的字符数，它又当场造出一个字符计数器。

这套思路 Sandy 称为 MetaTooling（[[元工具化|元工具化]]），底层是 AWS 开源并维护的智能体框架 [[StrandsAgents|StrandsAgents]]。它的卖点是“框架与模型解耦”：

明天出了新的最先进 LLM，你不用重写 system prompt、不用改架构，换个模型就行，可以拿同一套架构直接试验不同模型的表现。

构建元工具化智能体只需要三样东西：

**三种工具 + 一份 system prompt**。Editor 让智能体能写文件；shell 让它看到自己在哪、代码库在哪；

load 工具让它在[[运行时|运行时]]从目录动态加载刚生成的工具——这个功能最初只是个配置开关（`load_tools_from_directory=True`），后来团队干脆把它也做成了一个工具。

而 system prompt 的职责是教会智能体“一个好工具长什么样”：

用 `@add_tool` 装饰器（一种标记函数身份的语法）声明工具、工具规范怎么写、写到哪个目录，并且**先检查工具是否已存在，不存在才写新的**，避免重复造轮子。

全部接起来就一行代码：system prompt 加三个工具。你说“给你自己创建五个随机工具”，它就真的创建五个并开始使用。

**它还能写出自己的智能体。** Sandy 介绍三种智能体协作模式：

Swarm（多个子智能体并行分工协作）、graph（一个子智能体的输出交接给下一个）、workflow（以上组合，并行子智能体互相调用、形成节点和图）。

这些结构同样可以由智能体自己创建。

演示里他只说了一句“帮我规划去夏威夷的行程”——没提任何“去创建智能体”的指令——智能体自己把它拆成航班智能体、活动智能体、行程智能体三个子智能体，调了三次 editor 把它们写出来，然后调用它们给出主要机场、最佳海滩和行程建议。

用户改口“我不要夏威夷了”，它就更新自己刚写的智能体重来。

Sandy 指出它目前做不到的是访问实时信息，因为没给它接真实世界 API 的工具——但假设加上，你问天气，它就会自己写一个能随时抓取任意地点最新天气的工具。

出错时它也能自我修复：跑崩了它识别到“我出错了，让我修复自己”，去修自己刚写的那个工具或智能体。

**能力越大，[[护栏|护栏]]越重要。** Sandy 强调这是完全自主的行为，因此需要两层保障。[[评估|评估]]（evals）有八种，覆盖四个层面：

会话层看最终目标达没达成（说订机票是不是真订了）；trace 层看单次回答有没有编造（问余额，答 500 美元，是真的吗）；

工具层看用没用对工具、参数对不对（账户 ID 到底是不是 123）；多智能体层看子智能体调用顺序对不对、智能体间通信是否达标。

护栏则有四种，第一种最关键：

把**代码执行环境**[[沙箱|沙箱]]化——不是那种“智能体在一个容器里与世隔绝”的典型沙箱，而是它生成的代码运行的环境本身被隔离，保证它不会写错地方、删掉你倾尽心血构建的东西。

Strands 几周前刚发布了这个功能。再叠加工具权限约束、访问控制、可观测性和遥测数据，你才敢说“我可以放心让它自己思考”。

这个方向指向的是**自我改进、自我进化的智能体**。

Sandy 给了个有力的注脚：StrandsAgents 是他们三年前在内部建的，当时“智能体”甚至还不算一个概念，后来因为太好用了干脆开源。

Python 版本的 Strands，**自己写出了 TypeScript 版本的 Strands**——它真的更新了自己的源代码。“到某个时候，我确信它们会接管世界，我会处于危险之中。

但在那之前，我觉得这太不可思议了。”

## 本集带走

- **元工具化最小配方**：三个工具（editor 写文件、shell 看环境、load 动态加载）+ 一份 system prompt（教它工具长什么样、写到哪、先查重再造），一行代码就能跑起来。
- **关键开关是运行时加载**：`load_tools_from_directory` 让智能体刚写完的工具不用重启立刻可用——这是“边跑边自愈”的前提。
- **拆子智能体不用你设计**：告诉它“拆成两到四个子智能体”，它按航班/活动/行程这类职责自己拆、自己写、自己调用，Swarm/graph/workflow 三种模式都可由智能体自建。
- **上生产前先建评估**：四个层面都要看——最终目标达成、单次回答没编造、工具和参数用对、多智能体协作顺序正确。
- **护栏第一步是沙箱化代码执行环境**：隔离的不是智能体本身，而是它生成代码的运行环境，防止它写错、删错地方。
- **术语先说清**：投机解码这类概念不在本集，本集的核心词是“元工具化”——让智能体把“造工具、造智能体”本身当作工具来调用。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">如果这个元工具或元智能体能派生出工具和智能体，它也能修改和删除。我想让它删除我的数据吗？</span>  
> *If this meta tooling or this meta agent can spin off tools and agents, it can also modify and delete. Do I want it to delete my data?*  
> <span class="qm">—— Sandhya Subramani · [17:11]</span> ^q1

> <span class="qz">而且它能解决比最初被教会的更多的能力。这是自我改进智能体和自我进化智能体的开端。</span>  
> *And it can solve more capabilities than it has been initially taught to. This is the starting of self-improving agents and the self-evolving agents.*  
> <span class="qm">—— Sandhya Subramani · [18:53]</span> ^q2

> <span class="qz">到某个时候，我确信它们会接管世界，而我会处于危险之中。但在那之前，我觉得这太不可思议了。</span>  
> *At some point, I'm convinced they will take over the world and I'm going to be at risk. But until then, I think this is incredible.*  
> <span class="qm">—— Sandhya Subramani · [19:03]</span> ^q3

> <span class="qz">然后 strands 的 Python 版本自己写出了 strands 的 TypeScript 版本。</span>  
> *And the Python version of strands wrote by itself the TypeScript version of strands.*  
> <span class="qm">—— Sandhya Subramani · [19:49]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2025-09-16-talks-evaluating-agents-with-braintrust|Braintrust CEO Ankur Goyal:做 AI 评估的纪律八年不变，但玩法正在剧变]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、评估 (evals)</span>
- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同概念:system prompt、智能体 (agent)、评估 (evals)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-20-talks-prototyping-as-leadership-how-a-cto-ship|管理者日程突然能写代码了：CTO 的通宵智能体工作流]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)、评估 (evals)</span>

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
