---
title: 一次交互就够了：Google DeepMind 的新 API 到底想解决什么
podcast: 精选演讲
date: 2026-10-06
source_url: undefined
duration: "16:54"
type: episode
cover: "#64748b"
description: Google DeepMind 开发者体验团队的 Ivan 介绍了全新的 Interactions API 和 Managed Agents。
guests: ["[[Ivan Leo]]"]
companies: ["[[Google DeepMind]]"]
concepts: ["[[Interactions API]]", "[[Managed Agents]]", "[[智能体]]", "[[函数调用]]", "[[沙箱]]", "[[Gemini API]]", "[[anti-gravity]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-03-talks-an-interaction-is-all-you-need-ivan-leo#post","headline":"一次交互就够了：Google DeepMind 的新 API 到底想解决什么","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-03-talks-an-interaction-is-all-you-need-ivan-leo","mainEntityOfPage":"https://talk.solomind.cc/2026-10-03-talks-an-interaction-is-all-you-need-ivan-leo","description":"Google DeepMind 开发者体验团队的 Ivan 介绍了全新的 Interactions API 和 Managed Agents。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Ivan Leo"},{"@type":"Organization","name":"Google DeepMind"},{"@type":"Thing","name":"Interactions API"},{"@type":"Thing","name":"Managed Agents"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"函数调用 (function calling)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"Gemini API"},{"@type":"Thing","name":"anti-gravity"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"一次交互就够了：Google DeepMind 的新 API 到底想解决什么","item":"https://talk.solomind.cc/2026-10-03-talks-an-interaction-is-all-you-need-ivan-leo"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>一次交互就够了：Google DeepMind 的新 API 到底想解决什么</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 一次交互就够了：Google DeepMind 的新 API 到底想解决什么

<div class="pd-byl"><b>Ivan Leo</b> · Google DeepMind 开发者体验 · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-03-talks-an-interaction-is-all-you-need-ivan-leo.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果你有一个真正强大的模型，你会发现，随着模型变得越来越强大，很多脚手架已经消失了。</div><div class="a">— Ivan Leo <button class="pd-ts" data-t="02:18" data-who="Ivan Leo" data-en="If you have a really capable model, you'll find that as we've got models that become more and more capable, a lot of the scaffolding has fallen away." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Ivan Leo]]
>
> **公司** [[Google DeepMind]]
>
> **概念** [[Interactions API]] · [[Managed Agents]] · [[智能体]] · [[函数调用]] · [[沙箱]] · [[Gemini API]] · [[anti-gravity]]

[[Google DeepMind|Google DeepMind]] 开发者体验团队的 Ivan 在一场演讲中，介绍了刚发布的 [[Interactions API|Interactions API]] 和 [[Managed Agents|Managed Agents]]。他借用著名论文的标题打了个比方：an interaction is all you need——一次交互就够了。

这篇演讲讲清楚了 AI 应用开发正在从一问一答走向长时间自主干活的[[智能体|智能体]]，以及平台方为此重新设计了什么。

## 从讲笑话到自主干活，模型用法变了什么

Ivan 先回顾了历程。最早就是单次交互：你发一句讲个笑话，模型回一个笑话。

后来模型要接进各种应用，就必须可靠，于是有了 function calling——模型输出结构化的 JSON 对象，就像注册网站时浏览器发给后端的用户名密码一样，后端能直接处理 <button class="pd-ts" data-t="01:03" data-who="嘉宾" data-en="And so to do so, we invented function calling, where models could create Individual JSON objects with predictable structures. Think like how when you want to register for a website, your web page sends a JSON payload to the back end with a username and a password, and that enables the back end server to say, OK, we have a new user, and now we can actually create a new account." aria-label="回原文"></button>。

现在又进入新阶段：模型手里有多个工具，能调用、能反思结果、能和环境互动，最后才给出答案。

很多人把智能体简化成「一个语言模型在循环里跑」，Ivan 说这在大多数情况下是对的——模型越强，外围的脚手架越少。

最新的模型已经不再用单独的读文件改文件工具，而是直接用 bash 一把梭 <button class="pd-ts" data-t="02:25" data-who="嘉宾" data-en="If you have a really capable model, you'll find that as we've got models that become more and more capable, a lot of the scaffolding has fallen away. A lot of models, for example, the latest Opus models or Fable models, are now just immediately just using a bash tool instead of individually specialized tools like an edit file or a read file tool like we used to do." aria-label="回原文"></button>。

但一个智能体光有模型不够，还需要记忆和执行环境。

他说，**如果你要造一个写代码的智能体，却不给它一个能真正执行代码的环境，它什么都干不了** <button class="pd-ts" data-t="03:02" data-who="嘉宾" data-en="If you're building a coding agent, but you don't give it an environment where it can actually execute code, for example, it's not going to be able to do anything." aria-label="回原文"></button>。

## Interactions API:用一个入口调用所有模型和智能体

问题在于：==现在的 [[Gemini API|Gemini API]] 里既有 Nano Banana 这样的图像模型，也有 Deep Research== 这种一跑就是 3 分钟以上、自己去查资料再交出深度报告的智能体。

开发者要通过一堆不同的接口去调用它们，而且老接口返回的数据嵌套极深，连 Google 自己做内部集成都觉得麻烦 <button class="pd-ts" data-t="04:48" data-who="嘉宾" data-en="Now, it's pretty difficult then to think about consuming models and agents through a whole bunch of these different endpoints. Additionally, for a lot of the older kind of API endpoints, a lot of the data was in very deeply nested objects." aria-label="回原文"></button>。

Interactions API 就是解决这个问题的：一个入口，统一支持所有模型和智能体。

第一个核心设计是服务端状态。

新版 Gemini 模型会在响应里传回一串不透明的思维签名数字，很多开发者手动管理时容易出错——Ivan 说他们接触过一些初创公司，就因为多打了一个空格，缓存就失效了 <button class="pd-ts" data-t="05:49" data-who="嘉宾" data-en="For a lot of people, manually managing this was very difficult. And sometimes when we talk to different startups, we found that they would lose their cash just with a single white space that they mistakenly added in." aria-label="回原文"></button>。

现在只要把上一轮返回的 interaction ID 原样传回去，所有上下文都自动保留。对新的 Gemini 模型来说，不传回思维签名会导致性能下降。

另一个改进是输出结构。以前取个音频结果要一层层往下挖嵌套对象，Ivan 说他自己都背不出来；

现在每一段输出都有明确的类型标记，是音频就按音频处理 <button class="pd-ts" data-t="07:52" data-who="嘉宾" data-en="I can't even remember it off the top of my head. But now every single bit of the outputs that come out are clearly demarcated by a strong type. If it's an audio, as you see over here, all you've got to do is just parse it and handle it accordingly." aria-label="回原文"></button>。

工具调用也支持混搭：同一个请求里可以让模型用 Google 搜索、读网页、再调用你自定义的工具。

现场演示了一个案例：用一张照片，先生成你在威尼斯等多个国家版本的图像，每次生成都是一个交互；

再用同一个 interaction ID 调新发布的 Omni 模型，把这些图串成视频。

## Managed Agents:不用自己搭沙箱的远程智能体

第二个发布是 Managed Agents，基于 Google 内部统一使用的 [[anti-gravity|anti-gravity]] 智能体框架。

Ivan 说，过去你要造一个写代码的智能体，得先调教框架，再找[[沙箱|沙箱]]服务商，管基础设施，还得想办法在多次运行之间保留上下文 <button class="pd-ts" data-t="10:16" data-who="嘉宾" data-en="If you wanted to build a coding agent in the past, you would first have to tune the harness. Then you have to find a sandbox provider, manage the infrastructure, and then kind of figure out a way how to preserve the context, especially in between runs." aria-label="回原文"></button>。

现在**一次 API 调用，你就得到一个持久沙箱，可以把它当成自己的开发环境反复使用**。演示中，他们让智能体分析一个 GitHub 仓库：

它自己列出文件、逐个读取、最后生成报告，全程在远程沙箱里自主完成，不需要人工干预 <button class="pd-ts" data-t="10:47" data-who="嘉宾" data-en="We then pass it over in an API call over to the anti-gravity agent, and it then boots up A remote sandbox and then starts investigating what the repository's about." aria-label="回原文"></button>。

这里的关键原语是两个 ID：interaction ID 保存上下文，environment ID 让你每次都能路由回原来那个沙箱。装过的包、建过的文件，只要把 ID 传回去就都在 <button class="pd-ts" data-t="12:06" data-who="嘉宾" data-en="And the model has the exact same files right where we left it. Any sort of packages you install, any sort of files you throw and create, the model has access to it through each and every turn as long as it passes back the interaction ID and the environment ID." aria-label="回原文"></button>。

能力上限也不低。

他们展示了一次运行，模型烧掉超过 200 万个 token，分析了一个黑客松项目——有人从零写了一门编程语言，包含自定义 DSL、网页、各种 schema 和跑在 HUD 里的强化学习训练循环 <button class="pd-ts" data-t="12:21" data-who="嘉宾" data-en="This isn't just a sort of constraint to very simple task with the managed agent. What you're seeing over here is a run where the model burnt over 2 million tokens trying to analyze a repository that we got for a hackathon where someone built from scratch an entire programming language to code reinforcement learning environments." aria-label="回原文"></button>。

## 安全和规模化：最多 1000 个命名智能体

企业最担心的是安全问题：==智能体要是把网络凭证泄出去了怎么办==？他们的方案是一个中间人代理。

模型发出的每个请求都会经过代理，代理可以动态替换请求头里的内容。

比如对 GitHub API 的调用，代理会动态注入 token——**即使模型被提示注入攻击诱导泄露，它也根本接触不到 token 本身** <button class="pd-ts" data-t="14:18" data-who="嘉宾" data-en="And so even if the model is somehow prompt injected and leaks your GitHub API token, it's never actually going to see the token. It's only going to execute code that will run against the GitHub API, and your token is never exposed." aria-label="回原文"></button>。

配置好的智能体可以冻结成命名智能体，目前支持最多 1000 个。存储和沙箱都不收费，你只为模型调用付费 <button class="pd-ts" data-t="15:09" data-who="嘉宾" data-en="Once you're happy with that, it makes it very easy for you to scale up your workloads. At this point, we support up to 1,000 named agents, which means that you can have all these different configurations." aria-label="回原文"></button>。

最后还有两个配套工具：开源的 Gemini API CLI,可以本地测试模型、迭代智能体，满意后一键打包上传；

以及一个 Interactions API 迁移技能包，喂给你喜欢的编程智能体，就能避免它迁移时还固执地用旧版模型。

## 本集带走

- 智能体的本质越来越接近一个强模型在循环里跑，模型越强，外围脚手架越少
- Interactions API 用一个入口统一调用所有模型和智能体，interaction ID 让上下文和服务端状态自动保留
- outputs 的嵌套结构被 steps 数据模型取代，每步输出都有明确类型标记，多模态管线更好搭了
- Managed Agents 提供持久远程沙箱，environment ID 路由回原环境，烧掉 200 万 token 的仓库分析也能一次调用完成
- 安全靠中间人代理动态注入凭证，模型永远接触不到 token;命名智能体最多 1000 个，只按模型调用付费

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">如果你有一个真正强大的模型，你会发现，随着模型变得越来越强大，很多脚手架已经消失了。</span>  
> *If you have a really capable model, you'll find that as we've got models that become more and more capable, a lot of the scaffolding has fallen away.*  
> <span class="qm">—— Ivan Leo · [02:18]</span> ^q1

> <span class="qz">有时我们与不同的初创公司交流时，发现他们仅仅因为误加了一个空白字符就会丢失缓存。</span>  
> *And sometimes when we talk to different startups, we found that they would lose their cash just with a single white space that they mistakenly added in.*  
> <span class="qm">—— Ivan Leo · [05:49]</span> ^q2

> <span class="qz">这一切都归结于我们新的 steps 数据模型——我们不再处于“向模型发送单条消息并得到一个响应”的世界，而是会有非常复杂的东西，比如异步工具调用、模型之间协同工作。</span>  
> *And all this boils down to the new steps data model that we have, where instead of a world where we have a single message sent to a model and a response, we're going to have very complex things like async tool calls, models working together.*  
> <span class="qm">—— Ivan Leo · [09:04]</span> ^q3

> <span class="qz">因此，即使模型以某种方式被提示词注入并泄露了你的 GitHub API 令牌，它实际上也永远不会看到这个令牌。</span>  
> *And so even if the model is somehow prompt injected and leaks your GitHub API token, it's never actually going to see the token.*  
> <span class="qm">—— Ivan Leo · [14:10]</span> ^q4

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
