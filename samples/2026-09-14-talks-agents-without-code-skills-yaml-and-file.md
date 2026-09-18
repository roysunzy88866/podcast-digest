---
title: 智能体就只是文件：当配置取代 Python
podcast: 精选演讲
date: 2026-09-17
source_url: undefined
duration: "18:12"
type: episode
cover: "#64748b"
description: Google 工程师现场用三种方式构建同一个 GitHub PR 审查智能体，逐步删掉代码、换成文件，展示智能体工程的下一步。
guests: ["[[Philipp Schmid]]"]
companies: ["[[Gemini]]", "[[Google]]", "[[Cursor]]", "[[LangChain]]", "[[Vercel]]"]
concepts: ["[[智能体]]", "[[沙箱]]", "[[harness]]", "[[函数调用]]", "[[上下文窗口]]", "[[评估]]", "[[JSON schema]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-14-talks-agents-without-code-skills-yaml-and-file#post","headline":"智能体就只是文件：当配置取代 Python","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-14-talks-agents-without-code-skills-yaml-and-file","mainEntityOfPage":"https://talk.solomind.cc/2026-09-14-talks-agents-without-code-skills-yaml-and-file","description":"Google 工程师现场用三种方式构建同一个 GitHub PR 审查智能体，逐步删掉代码、换成文件，展示智能体工程的下一步。","datePublished":"2026-09-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Philipp Schmid"},{"@type":"Organization","name":"Gemini"},{"@type":"Organization","name":"Google"},{"@type":"Organization","name":"Cursor"},{"@type":"Organization","name":"LangChain"},{"@type":"Organization","name":"Vercel"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"函数调用 (function calling)"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"JSON schema"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"智能体就只是文件：当配置取代 Python","item":"https://talk.solomind.cc/2026-09-14-talks-agents-without-code-skills-yaml-and-file"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>智能体就只是文件：当配置取代 Python</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 智能体就只是文件：当配置取代 Python

<div class="pd-byl"><b>Philipp Schmid</b> · Google 工程师 · 2026-09-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-14-talks-agents-without-code-skills-yaml-and-file.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">在欧洲的 AI Engineer 大会上，Cursor 做了一个很棒的演讲，讲他们如何用 200 行 agent 文件替换了大约 12000 行 TypeScript 代码来实现类似的东西。</div><div class="a">— Philipp Schmid <button class="pd-ts" data-t="15:25" data-who="Philipp Schmid" data-en="So at AI engineer in Europe, Cursor did a great talk on how they replaced roughly 12,000 lines of TypeScript code with 200 lines agent files to create something similar." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Philipp Schmid]]
>
> **公司** [[Gemini]] · [[Google]] · [[Cursor]] · [[LangChain]] · [[Vercel]]
>
> **概念** [[智能体]] · [[沙箱]] · [[harness]] · [[函数调用]] · [[上下文窗口]] · [[评估]] · [[JSON schema]]

这一集来自一场开发者大会的分享(大会第四天、主题演讲前的最后一场)，主角是 [[Google|Google]] 的一位工程师。他要论证一个正在发生的转变：**[[智能体|智能体]](agent,让大模型在循环中反复调用工具、直到完成目标的程序)的编写方式，正在从「写 Python 代码」变成「写文件」**。他的演示方式很直接：用三种不同方法构建同一个 GitHub PR 审查智能体，每换一版就删掉一部分代码——最后代码几乎全没了，剩下的全是文件。

**第一版：原始 Python 循环，什么都自己写**

大约一年到一年半以前，写智能体基本等于用 Python 写一个循环：定义 [[JSON schema|JSON schema]](告诉模型能调用哪些工具的格式说明)、写 Python 函数、检查 LLM 输出是[[函数调用|函数调用]]还是文本、匹配类型、调用工具、处理错误、来回往复。演示里这一版有 agent 主文件、系统指令文件、工具的 JSON schema 定义，外加用 GitHub API 手写的工具实现。

跑起来能用，但局限明显：让agent做没定义过的事，它只会说「我做不到」。这一版里你必须亲手做的事很多——执行循环、工具路由、写 schema、写工具代码、管理状态。

**第二版：交给智能体框架，删掉循环和 schema**

然后智能体框架(如 ADK)出现，把样板代码抽象掉了：工具循环、函数调用、重试、错误处理都由框架的 agent 类接管，JSON schema 也不用写了——框架直接从 Python 函数的签名即时生成 schema 供模型用。这一版的 agent 文件消失了，系统提示词和工具实现还在。但问题依旧：工具还是得自己用 Python 写，你得非常明确地声明 agent 能做什么；问它旧金山天气，它还是答「我没有天气 API 的权限」。

**第三版：远程智能体 + 云端[[沙箱|沙箱]]，代码彻底消失**

关键转折在 Google I/O 上发布的 anti-gravity 远程 agent([[Gemini|Gemini]] API 上的新能力)。它带来一个 `environment` 参数：agent 可以访问一个托管的、隔离的云端沙箱(一套隔离的远程 Linux 环境)，在里面跑 bash 命令、读写文件、执行工具。

于是演示的第三版里，整个 source 目录都没了，只剩下一个 agents 文件夹：一个 agents.md 文件写系统指令，一个 Bash 脚本负责「GitHub CLI 没装就第一轮自动装上」。你不再为「读 PR、取 diff」写专门工具，只告诉 agent:你有 GitHub CLI、有 Bash、有文件系统，觉得有用就用。

效果立竿见影：agent 自己探索沙箱、发现 CLI 没装、装上、然后用它审查 PR;问旧金山天气，它直接调内置的 Google 搜索，查到当天约 20 摄氏度——**通用工具 + 模型自己的知识，胜过一堆精心定义的专用工具**。

后端发生的事很简单：就一次 API 调用。Google 启动云沙箱、加载 agents.md 和 skills,模型在 API 和沙箱之间自己做所有循环——调函数、拿结果、再调。服务端还替你管着会话状态、[[上下文窗口|上下文窗口]]和压缩(对话太长时自动压缩上下文，你不用管)。

**安全与复用的设计细节**

沙箱里的 agent 看不到你的凭据：Google 在沙箱外面包了一层网络代理，agent 向外发请求时代理才注入你定义的令牌，agent 只知道「我能调 GitHub API」。你还可以限制它能访问哪些域名(留空即全部默认放开)，以及用 GitHub 仓库、GCS bucket 或内联文件作为 sources 提供代码。另外还有 agents API:把你自定义的系统指令、环境、凭据注册成一个带 ID 的 agent,之后像调 Gemini 模型一样调它，现有代码全部复用。

**行业在验证同一个方向**

演讲者引用了几个例子：[[Cursor|Cursor]] 在欧洲 AI Engineer 大会上分享，他们用 200 行 agent 文件替换了约 12000 行 TypeScript 代码——原本是硬编码的 Git Worktrees(并行开多个工作目录的 Git 机制)编排逻辑，换成一个 skill 加 markdown 文件就搞定了。Manos 去年六个月内重构了五次 [[harness|harness]](驱动 agent 运行的底层框架)，[[LangChain|LangChain]] 一年内重新架构 OpenDeep Research 三次，[[Vercel|Vercel]] 移除了 80% 的工具，换来更少步骤、更快响应、更好准确率。

他总结的判断很锋利：**模型能力越强，能删的编排代码越多；如果你的 harness 随模型进步反而越来越复杂，你大概率是在过度工程化。**

**扩展方式也变了：加文件，不改代码**

以前给 agent 加个安全扫描功能，要写 Python 函数、定义新 schema、注册进工具列表。现在只写一个 SkillsMD 文件(说明用哪个 CLI 工具)，或者往环境里放一个 CLI 工具就行——不改一行代码，由 agent 自己决定怎么用。文件还能让 agent 学习和自我积累：让它在会话里记住某条规则或偏好，它就写进磁盘、下个会话复用；长会话中途要开新任务，把交接信息写进文件，让 agent 之后接手。

**最后的行动清单**

不要和模型对抗：不要事无巨细地替模型规定每一步执行路径，给通用工具，让模型自己探索出解法。管好属于你的部分：领域指令、工作流、尤其是 [[评估|evals]](评估)，定义干净的工具，验证结果。

以及「为删除而构建」——模型越好，能删的代码越多，设计时就该预期这一点。现场观众扫二维码即可进 AI Studio 试用 anti-gravity harness,API 免费额度在做了。

## 本集带走
- **三条演进线**：手写 Python 循环 → 框架接管循环和 schema → 远程 agent + 云沙箱接管一切；你的代码从几百行减到只剩配置文件。
- **通用工具优先于专用工具**：与其为每个场景写工具，不如给 agent Bash、文件系统和 GitHub CLI,加上一句「装好 CLI」的引导脚本——连查天气这种没定义过的任务它也能自己解决。
- **凭据安全靠代理注入**：agent 在沙箱里永远看不到你的令牌，代理在它外发请求时才注入；还能按域名限制网络访问。
- **扩展 = 加文件**：新能力写成一个 SkillsMD 或放一个 CLI 进环境，不改代码；偏好和交接也可以让 agent 自己写进文件。
- **判断 harness 是否健康的标准**：模型变强时你的编排代码在变少还是变多？变多就是在过度工程化。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">在欧洲的 AI Engineer 大会上，Cursor 做了一个很棒的演讲，讲他们如何用 200 行 agent 文件替换了大约 12000 行 TypeScript 代码来实现类似的东西。</span>  
> *So at AI engineer in Europe, Cursor did a great talk on how they replaced roughly 12,000 lines of TypeScript code with 200 lines agent files to create something similar.*  
> <span class="qm">—— Philipp Schmid · [15:25]</span> ^q1

> <span class="qz">一个明显的趋势是，随着模型能力提升，我们可以移除编排代码；但如果你的 harness 在模型进步时反而变得更复杂，你很可能是在过度工程化你的 harness。</span>  
> *An obvious trend that with better model capabilities, we can remove orchestration code, but if your harness is getting more complex as the model improves, you are most likely overengineering your harness.*  
> <span class="qm">—— Philipp Schmid · [16:05]</span> ^q2

> <span class="qz">智能体就只是文件。</span>  
> *Agents are just files.*  
> <span class="qm">—— Philipp Schmid · [16:30]</span> ^q3

> <span class="qz">我们不应该和模型对抗。</span>  
> *We should not fight the model.*  
> <span class="qm">—— Philipp Schmid · [17:07]</span> ^q4

> <span class="qz">我们应该停止微管理执行路径，给智能体提供通用的工具，让模型去探索。</span>  
> *Like, we should stop micromanaging the execution paths, provide general tools to the agent, and let the model explore.*  
> <span class="qm">—— Philipp Schmid · [17:08]</span> ^q5

> <span class="qz">掌管属于你的部分：专注于你的领域指令、工作流，尤其专注于 evals,定义干净的工具，验证结果，真正做到为删除而构建。</span>  
> *Own what is yours, meaning focus on your domain instructions, focus on the workflows, focus especially on the evals, define clean tools, and verify the outcomes, and really build to delete.*  
> <span class="qm">—— Philipp Schmid · [17:16]</span> ^q6

> <span class="qz">我们在过去已经见过很多很多次：模型越好，我们能移除的代码就越多，我们需要改变的东西也越多。</span>  
> *Like, we have seen in the past many, many times, the better the model gets, the more code we can remove, and the more things we need to change.*  
> <span class="qm">—— Philipp Schmid · [17:27]</span> ^q7

> <span class="qz">LangChain 一年内重新架构了他们的 OpenDeep Research 三次，还有 Vercel 移除了 80% 的工具，以实现更少的步骤、更快的响应和更好的准确性。</span>  
> *LangChain has re-architected their OpenDeep research three times a year, and then also Vercel has removed 80% of their tools to achieve fewer steps, faster responses, and better accuracy.*  
> <span class="qm">—— Philipp Schmid · [15:54]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同公司:LangChain、Google · 同概念:harness、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-13-talks-when-to-build-your-own-agent-harness-har|拥有你自己的智能：Harness、Eval 与数据飞轮]]<span class="pd-rz">同公司:LangChain · 同概念:evals、harness、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-13-talks-how-unify-cut-its-ai-agent-costs-95-in-t|9亿美元管道背后:Unify CTO 谈怎么把销售智能体的成本打下来]]<span class="pd-rz">同概念:evals、harness、智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-a16z-is-ai-a-bubble-gavin-baker-on-data-cente|没有暗GPU:一位基金经理拆解AI泡沫论与棋局]]<span class="pd-rz">同公司:Cursor、Gemini、Google</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:evals、harness、智能体 (agent)</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同公司:Google、Cursor · 同概念:智能体 (agent)</span>

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
