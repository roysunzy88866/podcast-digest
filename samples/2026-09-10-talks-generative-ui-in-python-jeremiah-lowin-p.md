---
title: 把互联网装进智能体：FastMCP 作者用 Python 造 UI 的古怪实验
podcast: 精选演讲
date: 2026-09-12
source_url: undefined
duration: "17:28"
type: episode
cover: "#64748b"
description: "FastMCP 框架作者讲解 MCP Apps 与其开源 UI 框架 Prefab：让纯 Python 工程师不写 JavaScript,就能为 MCP 服务器构建交互界面，直至让智能体实时生成整个 UI。"
guests: ["[[Jeremiah Lowin]]"]
companies: ["[[FastMCP]]", "[[Prefab]]"]
concepts: ["[[MCP Apps]]", "[[MCP]]", "[[智能体]]", "[[沙箱]]", "[[生成式 UI]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-10-talks-generative-ui-in-python-jeremiah-lowin-p#post","headline":"把互联网装进智能体：FastMCP 作者用 Python 造 UI 的古怪实验","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-10-talks-generative-ui-in-python-jeremiah-lowin-p","mainEntityOfPage":"https://talk.solomind.cc/2026-09-10-talks-generative-ui-in-python-jeremiah-lowin-p","description":"FastMCP 框架作者讲解 MCP Apps 与其开源 UI 框架 Prefab：让纯 Python 工程师不写 JavaScript,就能为 MCP 服务器构建交互界面，直至让智能体实时生成整个 UI。","datePublished":"2026-09-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jeremiah Lowin"},{"@type":"Organization","name":"FastMCP"},{"@type":"Organization","name":"Prefab"},{"@type":"Thing","name":"MCP Apps"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"生成式 UI (generative UI)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"把互联网装进智能体：FastMCP 作者用 Python 造 UI 的古怪实验","item":"https://talk.solomind.cc/2026-09-10-talks-generative-ui-in-python-jeremiah-lowin-p"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把互联网装进智能体：FastMCP 作者用 Python 造 UI 的古怪实验</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 把互联网装进智能体：FastMCP 作者用 Python 造 UI 的古怪实验

<div class="pd-byl"><b>Jeremiah Lowin</b> · Prefect 创始人兼 CEO · 2026-09-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-10-talks-generative-ui-in-python-jeremiah-lowin-p.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们不是在试图从零开始构建一个前端。我们是在试图用一堆世界级的、设计精良的组件来组合出一个前端。</div><div class="a">— Jeremiah Lowin <button class="pd-ts" data-t="06:10" data-who="Jeremiah Lowin" data-en="We are not trying to build a frontend from scratch. We are trying to compose a frontend from a bunch of world-class, well-designed components." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jeremiah Lowin]]
>
> **公司** [[FastMCP]] · [[Prefab]]
>
> **概念** [[MCP Apps]] · [[MCP]] · [[智能体]] · [[沙箱]] · [[生成式 UI]]

这一集讲的是[[智能体|智能体]]时代一个很新的玩法：让用户直接和工具的界面打交道，而这一切界面居然可以完全用 Python 写出来。演讲者是 [[FastMCP|FastMCP]] 的作者——FastMCP 是目前最流行的构建 [[MCP|MCP]] 服务器的 Python 框架之一，他所在的公司是 Prefect。他自称要分享的是「我写过的最古怪的软件之一」。

> 【背景】演讲者为 Jeremiah Lowin,Prefect 创始人兼 CEO、FastMCP 框架作者。此身份信息来自世界知识，转写稿中未出现其姓名。

## 先搞懂 MCP Apps:绕过智能体的直连界面

要理解他做的东西，得先知道 [[MCP Apps|MCP Apps]] 是什么。MCP(智能体调用外部工具的协议)里，典型流程是：用户向智能体提请求，智能体调用托管在 MCP 服务器上的某个工具，结果返回智能体的上下文窗口，再由智能体组织一段回复给用户。也就是说，用户和 MCP 服务器之间从来没有直接连接，一切都要「经过智能体的大脑」。

MCP Apps 是今年一月推出的协议扩展，改变的就是这一点：智能体调用工具后，工具返回的不再是一段发给智能体的文本，而是一套完整的 HTML、CSS、JavaScript——一个真正的 UI,直接呈现给用户。用户可以在界面上订餐厅、换机票座位、浏览会议日程，智能体促成了这一切，但交互是人与界面直接完成的。用演讲者的话说，这相当于「把互联网装进你的智能体」。

## 痛点：Python 工程师不会写前端

MCP Apps 出现后，作为 FastMCP 作者，他的第一反应是：怎么把这个能力交付给用户？麻烦在于，FastMCP 用户主要是 Python 工程师，而且多在企业里工作。要给他们交付前端和 UI,总不能「假装我们要用 Python 发布 React——那是行不通的」。

他认真想了这些用户到底需要什么，答案改变了整个方案的性质：他们不需要完全品牌化的消费级自定义 UI,他们的职责是在组织内共享和收集信息——做表格、收表单、分享图表。这个约束反而成了突破口。

于是有了开源项目 [[Prefab|Prefab]]:一个「限定范围的 UI 构建框架」，专门用于通过智能体交付上述这类界面。它的核心思路是：**不是从零构建前端，而是用一堆世界级的、设计精良的组件组合出前端**——护栏就来自这里，用户不是在做任意的事情，而是把一个结构良好的前端交到他人面前。

## Prefab 怎么用 Python 写 UI

具体做法上，Prefab 主要靠 Python 的上下文管理器(一种用缩进块组织代码的语法结构)：把组件作为上下文管理器层层嵌套，UI 的结构就在代码里自然呈现出来。他做了一个有趣的类比：FastMCP 的核心创新可以简化为「用一个装饰器构建了整个 MCP 服务器」，那么对 Prefab 就可以说「用一个上下文管理器构建了整个 UI」。每个 UI 组件是一个可实例化、可参数化的类，渲染出来就是漂亮的现代风格组件；再配合响应式变量(Rx 类)，可以在代码任意位置引用数据并在组件间绑定，自动编译成对应的 JavaScript 实现——客户端交互性全程不用手写一行 JS。

底层管道是：Python DSL 构建 UI 的声明式表示 → 序列化为 JSON 协议 → 由一个 React 应用渲染为真正的 MCP 应用。**关键在中间那个 JSON**:因为 UI 有了可序列化的表示，它可以由智能体生成、发给智能体、由人生成再让智能体修改——这一中间表示解锁了一切。Python DSL 反而是事后自然长出来的产物。

一个能说明成熟度的细节：Prefab 发布了约 130 到 140 个组件，而它的文档 100% 用 Prefab 自己渲染——文档里每个示例的 Python 代码都在被实时渲染，点击就能进 playground 改代码、实时看到 UI 更新。

## 在 MCP 服务器里的三种用法(由浅入深)

**第一种：交互式工具。** 通常 MCP 工具返回的结果只给智能体，用户完全摸不着。

用 Prefab 只需改一行：工具函数结尾不返回 Python 字典，而是返回一个 Prefab 组件(比如数据表)。FastMCP 会自动检测到、自动推断你要返回 MCP 应用，把 HTML/CSS/渲染器全套备好。

用户问「给我看看团队名录」，弹出的就是一个支持搜索、筛选、排序、分页的完整交互表格。旁边想再加个饼图？导入网格和饼图、用上下文管理器组合进去即可——「一行代码，一个显著的大变化」，复杂性保持增量式。

**第二种：带后端的完整应用。** 写一个类作为 FastMCP 应用，用 app.ui 装饰入口函数返回基础 UI,再用 app.tools 装饰后端方法——UI 里就能直接引用它们，比如一个按钮把表单数据写进数据库。

他特别点名了上传场景：因为只有智能体有权访问 MCP 服务器，很多人在服务器上建了上传工具，却忘了必须由智能体实际调用，结果干的活是「世界上最昂贵的复制粘贴」——你给智能体一兆字节的文本，它一个字符一个字符地重新打字进 MCP。MCP 应用让文件绕过智能体直接进服务器，Prefab 把它做成了一行代码的上传组件。

**第三种：完全[[生成式 UI|生成式 UI]]。** 他向 Claude 说「开始流式输出你能想到的最有趣的 UI」,智能体把 UI 的协议表示流式传过来，系统实时修复、渲染已到达的部分——你甚至不需要自己定义 UI,只要把官方提供的能力共享给智能体，它就能给你造任何东西。

## 意外发现：流 Python 比流 JSON 省 70%

生成式 UI 跑起来后，他们发现原方案(智能体流式传 JSON)可以优化：**UI 的 Python 表示比 JSON 表示小约 70%**。于是现在改为直接把 Python 代码流式传输，在[[沙箱|沙箱]]中执行、在服务器端转成 JSON 再渲染——在 token 效率、成本和延迟上都带来巨大收益。

Prefab 已完全内置进 FastMCP:装上可选组件、导入、返回，当天下午就能在自己的服务器上玩起来。文档在 prefab.prefect.io,完整库开源于 GitHub。

## 本集带走

- **MCP Apps 改变了交互模型**：工具结果不再进智能体上下文，而是以完整 HTML/CSS/JS 的形式直达用户，用户直接与界面交互；七月版协议还会让智能体也能操作这个界面(比如和它下棋)。
- **约束越窄，方案越美**：不做通用前端框架、不做品牌化消费级 UI,只做表格/表单/图表这类组织内信息工具，Python 写 UI 才变得可行——「组合前端」而非「构建前端」。
- **可序列化的 UI 表示是一切的钥匙**：UI 有了 JSON 中间表示，人和智能体就能互相生成、修改界面；生成式 UI 由此而来。
- **让智能体搬文件是最贵的复制粘贴**：大文件上传应走 MCP 应用直连，别让智能体逐字符转述。
- **一个反直觉的工程发现**：流式传输 Python 代码、在沙箱执行再转 JSON,比直接流 JSON 小约 70%,省 token 也降延迟。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">我们不是在试图从零开始构建一个前端。我们是在试图用一堆世界级的、设计精良的组件来组合出一个前端。</span>  
> *We are not trying to build a frontend from scratch. We are trying to compose a frontend from a bunch of world-class, well-designed components.*  
> <span class="qm">—— Jeremiah Lowin · [06:10]</span> ^q1

> <span class="qz">当我们约束这个问题，并记住我们是在组合一个 UI 而不是构建一个 UI 时，它就合理多了。</span>  
> *It makes a lot more sense when we constrain the problem and remember that we're composing a UI rather than building it.*  
> <span class="qm">—— Jeremiah Lowin · [09:20]</span> ^q2

> <span class="qz">这遵循了我们 Prefect 的很多软件都努力坚持的一个原则，那就是一行代码，一个显著的大变化。</span>  
> *So this follows a principle that we really try to hold in a lot of our software at Prefect, which is one line of code, one big noticeable change.*  
> <span class="qm">—— Jeremiah Lowin · [11:49]</span> ^q3

> <span class="qz">却忘了智能体必须实际调用它，而最终你做的事情就是世界上最昂贵的复制粘贴操作。</span>  
> *Forget that the agent has to actually call it, and what you end up doing is the world's most expensive copy-paste operation.*  
> <span class="qm">—— Jeremiah Lowin · [13:57]</span> ^q4

> <span class="qz">我们最终发现，UI 的 Python 表示比 JSON 表示小大约 70%。</span>  
> *What we ended up discovering is that the Python representation of a UI is about 70% smaller than the JSON representation.*  
> <span class="qm">—— Jeremiah Lowin · [16:12]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-05-27-devtools-cloudflare-devs|Cloudflare 三人聊：让模型直接写代码，别再堆工具了]]<span class="pd-rz">同概念:MCP、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-14-thepeel-re-founding-a-company-for-the-ai-era--sh|Merge的"二次创业"：从SaaS集成到AI连接基础设施]]<span class="pd-rz">同概念:MCP、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-13-pg-the-complete-claude-stack-for-pms|产品经理驾驭 Claude 生态：用五层架构打造专属 AI 幕僚长]]<span class="pd-rz">同公司:Claude · 同概念:MCP、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Claude · 同概念:MCP、智能体 (agent)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog|AI失控了别慌,先盯紧漏洞数量爆炸]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
