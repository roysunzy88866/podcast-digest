---
title: Google DeepMind 发布 Interactions API 与 Managed Agents：一次调用搞定智能体
podcast: 精选演讲
date: 2026-10-06
source_url: undefined
duration: "16:54"
type: episode
cover: "#64748b"
description: Google DeepMind 开发者体验团队的 Ivan 介绍全新 Interactions API 与 Managed Agents：服务端状态管理、多模态统一调用、持久化沙箱与令牌安全代理如何让智能体开发大幅简化。
guests: ["[[Ivan Leo]]"]
companies: ["[[Google DeepMind]]"]
concepts: ["[[Interactions API]]", "[[Managed Agents]]", "[[智能体]]", "[[函数调用]]", "[[沙箱]]", "[[Gemini API]]", "[[anti-gravity]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-03-talks-an-interaction-is-all-you-need-ivan-leo#post","headline":"Google DeepMind 发布 Interactions API 与 Managed Agents：一次调用搞定智能体","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-03-talks-an-interaction-is-all-you-need-ivan-leo","mainEntityOfPage":"https://talk.solomind.cc/2026-10-03-talks-an-interaction-is-all-you-need-ivan-leo","description":"Google DeepMind 开发者体验团队的 Ivan 介绍全新 Interactions API 与 Managed Agents：服务端状态管理、多模态统一调用、持久化沙箱与令牌安全代理如何让智能体开发大幅简化。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Ivan Leo"},{"@type":"Organization","name":"Google DeepMind"},{"@type":"Thing","name":"Interactions API"},{"@type":"Thing","name":"Managed Agents"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"函数调用 (function calling)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"Gemini API"},{"@type":"Thing","name":"anti-gravity"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Google DeepMind 发布 Interactions API 与 Managed Agents：一次调用搞定智能体","item":"https://talk.solomind.cc/2026-10-03-talks-an-interaction-is-all-you-need-ivan-leo"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Google DeepMind 发布 Interactions API 与 Managed Agents：一次调用搞定智能体</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Google DeepMind 发布 Interactions API 与 Managed Agents：一次调用搞定智能体

<div class="pd-byl"><b>Ivan Leo</b> · Google DeepMind 开发者体验 · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-03-talks-an-interaction-is-all-you-need-ivan-leo.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果你有一个真正强大的模型，你会发现，随着模型越来越强大，很多脚手架已经消失了。</div><div class="a">— Ivan Leo <button class="pd-ts" data-t="02:18" data-who="Ivan Leo" data-en="If you have a really capable model, you'll find that as we've got models that become more and more capable, a lot of the scaffolding has fallen away." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Ivan Leo]]
>
> **公司** [[Google DeepMind]]
>
> **概念** [[Interactions API]] · [[Managed Agents]] · [[智能体]] · [[函数调用]] · [[沙箱]] · [[Gemini API]] · [[anti-gravity]]

这一集是 [[Google DeepMind|Google DeepMind]] 开发者体验团队的 Ivan 的一场产品发布演讲，讲的是全新的 [[Interactions API|Interactions API]] 和 [[Managed Agents|Managed Agents]](托管[[智能体|智能体]])——Google 希望用它们解决一个核心痛点：

过去调用模型要面对一堆端点、嵌套极深的数据结构，连 Google 自己做第一方集成都被坑过，现在想用一个统一接口把文本、图像、音频、智能体全部打通。

演讲开场先回顾了与模型交互方式的演进：最早是一次性对话(发消息、得回复)；

模型变强后，为了让它们可靠地嵌进应用，发明了[[函数调用|函数调用]]——模型按可预测的结构生成 JSON 对象，后端据此执行操作；

而现在模型能推理、能长时间自主运行，智能体时代到来。

Ivan 对智能体的定义很干脆：很多人把它简化成「一个在循环里运行的语言模型」，大多数情况下这是对的——模型越强，脚手架越少。

比如最新的 Opus 模型或 Fable 模型，已经直接用一个 bash 工具，而不是像以前那样给它们配上编辑文件、读取文件等一堆专用工具。

## Interactions API:一个调用，全模态统一

Interactions API 要解决的是工作负载的巨变：

通过 [[Gemini API|Gemini API]],你既有轻量的图像模型(Nano Banana)、快模型(Gemini 3.5 Flash),也有会跑三分钟以上的 Deep Research 深度研究智能体——以前这些靠一堆不同的端点、嵌套很深的数据对象，消费起来非常困难。

第一个核心设计是**服务端状态**。新的 Gemini 系列模型有一个叫 thought signatures 的机制：

每次调用工具、给出响应，模型都会传回一串不透明的数字，必须原样传回去，否则性能会下降。

以前开发者要手动管理这串东西，有初创公司仅仅因为误加了一个空白字符就丢失了整个缓存。

现在 API 返回一个 interaction ID,你只要在下一轮的 previous interaction ID 参数里把它传回来，所有上下文——包括那些 thought signatures——自动保留。

这不只是省事，它解锁了跨模态、跨模型的组合玩法。团队演示：

先用一张照片生成你站在威尼斯的图像，拿到 interaction ID 塞回 client.interactions.create,换成周三刚发布的 Omni flash 模型，就能在同样的上下文和图像信息上直接生成视频——一个初始调用派生出多个 interaction,再汇成一段视频。

整个流程就是两次 API 调用。

数据结构也重新设计了。

输出统一用强类型的 output.type 划分：是音频就解析音频，是图像就处理图像；想换模态，还是同一个 client.interactions.create 方法，只改响应模态和生成配置。

工具使用上，以前不能混搭的内置工具现在可以组合：

比如让智能体同时用 Google Search(与 Google 相同的网页索引)、URL context 工具(从指定网页抓取信息)和一个自定义工具，模型自主推理该查什么，一次 API 调用里全部完成——模型因此能超越训练截止日期，实时访问整个互联网。

这一切背后是新的 steps 数据模型，取代原来的 outputs 数组，用类型判别符标清每一步模型输出了什么、调了哪些函数。

## Managed Agents:开箱即得的持久化沙箱智能体

第二个发布是把 [[anti-gravity|anti-gravity]](已统一用在 Google 全套产品里的智能体 harness,即包裹模型、给它工具和环境的执行框架)开放为远程托管智能体。

过去你自己做一个编码智能体，要先调优 harness、再找[[沙箱|沙箱]]提供商、自己管基础设施、还要想怎么在多次运行之间保留上下文。

现在一次 API 调用，就得到一个持久化沙箱，可以反复访问。

和 Interactions API 对应，这里也有第二个原语——**环境 ID**:只要保留它返回的环境 ID,调用就会被路由回原来的那个沙箱，你装过的包、创建过的文件，模型每一轮都能访问。

两个 ID 加起来：interaction ID 保上下文不穿缓存，环境 ID 保沙箱状态，你完全不用管持久化，只需几行代码。

这不是只能干轻活。

演示里模型消耗超过 200 万 token,一次 API 调用分析完一个黑客松仓库——里面包含一门从零构建的自定义 DSL(领域专用语言)、一个网页、一大堆模式定义和一个跑在 HUD 里的强化学习训练循环。

对个人开发者最实用的一点：云上跑的就是你 anti-gravity IDE 里那个智能体。

你在本地调好的技能(skill)打包成一个文件夹，通过 sources 上传到 .agents 文件夹，本地和云端就是同一个 harness、同一套提示词、同样的技能。

## 安全：中间人代理注入令牌

企业最关心的问题——智能体泄露凭据怎么办——Google 的方案是一个中间人代理：

智能体发出的每个出站调用都经过它，Google 查看请求头并按需替换内容。

演示里是转换所有发往 GitHub API 的调用、动态注入令牌——模型即使被提示词注入(攻击者诱导模型泄露信息)也永远看不到令牌本身，它只是执行针对 GitHub API 的代码，令牌从不暴露。

## 调优与上线

智能体调好之后，有两种方式固化为「命名智能体」：一是用一组固定的配置文件和网络源冻结一个；

二是与智能体迭代式聊天、把环境调到你满意，再把整个环境冻结成智能体。

目前支持多达 1,000 个命名智能体，而且存储和沙箱都不收费，只按模型用量付费。

周边配套：

开源了一个 Gemini API CLI,本地测试模型，调好后自动打包上传、直接创建智能体;还发布了一个 Interactions API 迁移技能，喂给你的编码智能体就能自动完成迁移——Ivan 提到一个常见痛点：

让 Gemini 写代码，它总在用 Gemini 2.5 Flash 或 2.0 这些旧版本，这个技能会保持模型列表和方法随时更新。

## 本集带走

- **两个 ID 管住全部状态**：interaction ID 保留对话上下文(不还 thought signatures 性能会掉)、环境 ID 路由回同一个持久化沙箱——自己不用写任何状态持久化代码。
- **跨模态组合只需改参数**：同一个 client.interactions.create 方法，改响应模态就能从图像切到音频再到视频，interaction ID 一传，上下文跨模型复用。
- **智能体安全靠代理注入凭据**：出站调用经中间人代理动态注入令牌，模型被提示词注入也拿不到 token。
- **本地技能直接上云**：anti-gravity 本地调好的技能打包成文件夹上传，云端跑的就是同一个智能体；最多 1,000 个命名智能体免存储费。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">如果你有一个真正强大的模型，你会发现，随着模型越来越强大，很多脚手架已经消失了。</span>  
> *If you have a really capable model, you'll find that as we've got models that become more and more capable, a lot of the scaffolding has fallen away.*  
> <span class="qm">—— Ivan Leo · [02:18]</span> ^q1

> <span class="qz">因此，即使模型以某种方式被提示词注入并泄露了你的 GitHub API 令牌，它实际上也永远不会看到这个令牌。</span>  
> *And so even if the model is somehow prompt injected and leaks your GitHub API token, it's never actually going to see the token.*  
> <span class="qm">—— Ivan Leo · [14:10]</span> ^q2

> <span class="qz">你不需要为沙箱付费。你只需要为模型付费。</span>  
> *You don't pay for the sandbox. You only pay for the model.*  
> <span class="qm">—— Ivan Leo · [15:17]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同概念:Managed Agents、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-27-devtools-james-arthur-from-electricsql-agents-are|别给智能体一台电脑：Electric 的“智能体即数据”新架构]]<span class="pd-rz">同概念:Managed Agents、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-09-14-talks-agents-without-code-skills-yaml-and-file|智能体就只是文件：当配置取代 Python]]<span class="pd-rz">同概念:函数调用 (function calling)、智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog|AI失控了别慌,先盯紧漏洞数量爆炸]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-20-talks-prototyping-as-leadership-how-a-cto-ship|管理者日程突然能写代码了：CTO 的通宵智能体工作流]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
