---
title: "智能体自己造工具、自己修 Bug:AWS 工程师现场演示"
podcast: 精选演讲
date: 2026-10-06
source_url: undefined
duration: "20:20"
type: episode
cover: "#64748b"
description: AWS 的 Sandhya Subramani 演示了一个能在运行中自己写工具、自己造子智能体、甚至自己修 Bug 的智能体框架。
guests: ["[[Sandhya Subramani]]"]
companies: ["[[AWS]]"]
concepts: ["[[智能体]]", "[[StrandsAgents]]", "[[元工具化]]", "[[系统提示词]]", "[[运行时]]", "[[沙箱]]", "[[护栏]]", "[[评估]]", "[[多智能体系统]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-04-talks-agents-that-write-their-own-tools-at-run#post","headline":"智能体自己造工具、自己修 Bug:AWS 工程师现场演示","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-04-talks-agents-that-write-their-own-tools-at-run","mainEntityOfPage":"https://talk.solomind.cc/2026-10-04-talks-agents-that-write-their-own-tools-at-run","description":"AWS 的 Sandhya Subramani 演示了一个能在运行中自己写工具、自己造子智能体、甚至自己修 Bug 的智能体框架。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Sandhya Subramani"},{"@type":"Organization","name":"AWS"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"StrandsAgents"},{"@type":"Thing","name":"元工具化 (MetaTooling)"},{"@type":"Thing","name":"系统提示词 (system prompt)"},{"@type":"Thing","name":"运行时 (runtime)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"多智能体系统 (multi-agentic systems)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"智能体自己造工具、自己修 Bug:AWS 工程师现场演示","item":"https://talk.solomind.cc/2026-10-04-talks-agents-that-write-their-own-tools-at-run"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>智能体自己造工具、自己修 Bug:AWS 工程师现场演示</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 智能体自己造工具、自己修 Bug:AWS 工程师现场演示

<div class="pd-byl"><b>Sandhya Subramani</b> · AWS 工程师 · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-04-talks-agents-that-write-their-own-tools-at-run.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">让我写一个工具来数你想要的字符数，因为它显然知道自己没有这个能力。</div><div class="a">— Sandhya Subramani <button class="pd-ts" data-t="04:00" data-who="Sandhya Subramani" data-en="Let me write a tool to count the number of characters you want, because clearly it knows that it does not have the capability to do it." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sandhya Subramani]]
>
> **公司** [[AWS]]
>
> **概念** [[智能体]] · [[StrandsAgents]] · [[元工具化]] · [[系统提示词]] · [[运行时]] · [[沙箱]] · [[护栏]] · [[评估]] · [[多智能体系统]]

你的 Claude Code、Cursor 当然也能写代码。但你有没有想过：如果一个系统已经在生产环境跑着，突然报错了怎么办？

现在的做法通常是把服务停掉，人工修复，重启，折腾一圈。

[[Sandhya Subramani|Sandhya Subramani]] 在 [[AWS|AWS]] 的这场演讲里展示的是另一条路——[[智能体|智能体]]在运行中发现出错，自己写工具把自己修好 <button class="pd-ts" data-t="01:12" data-who="嘉宾" data-en="I need to fix myself. And it realizes what it can do to fix itself, writes its own tools, all writes its own agents, and fixes itself. How cool would that be, right?" aria-label="回原文"></button>。她管这个思路叫 MetaTooling。

## 一个什么都不会的智能体，怎么自己学会计算？

开场演示很有冲击力。她跑起一个智能体，工具目录是空的——理论上它什么都做不了，甚至该胡说八道才对。

然后她输入一个数学问题，智能体发现没有现成工具，就当场写了一个计算器工具，写完立刻用，不用重启程序。

接着她又随手输入一段字符，让它数有几个字母，智能体又当场写了个字符计数工具 <button class="pd-ts" data-t="03:36" data-who="嘉宾" data-en="So now it's calling that math calculator tool that it just wrote by itself and it's giving me the answer. Not just that, right? So let's say I give it something completely out of the blue and I say, cool, whatever." aria-label="回原文"></button>。

关键在于：**这些能力不是预先编好的，是智能体在被问到的那一刻自己造出来的**。

## 实现只需要三个工具加一段提示词

背后的框架叫 Strands Agents,是 AWS 开源的智能体运行框架，你可以接入自己的模型。换新模型时不用重写架构，直接替换就行 <button class="pd-ts" data-t="06:22" data-who="嘉宾" data-en="Another cool part, because this is a harness, is the fact that if, let's say, tomorrow there's a new state-of-the-art LLM that comes out, You don't have to rewrite all of your system prompt." aria-label="回原文"></button>。

实现 MetaTooling 只需要三样东西：

编辑器工具(让它能写文件)、命令行工具(让它知道环境里有什么)、加载工具(让它能动态加载刚写好的工具)。

再加一段系统提示词，告诉它一个好工具长什么样、该写到哪个目录、以及一条重要规则——先检查工具是否已存在，不存在才新写 <button class="pd-ts" data-t="09:09" data-who="嘉宾" data-en="And I'm also telling it, always check if it exists or not. Only if it doesn't exist, then write a new tool. And I'm telling it." aria-label="回原文"></button>。

核心代码只要五行。

## 只会订国内机票？用户要飞国际，它自己想办法

为什么这有用？

她举了个例子：假设你的应用只会订国内机票，突然有个用户要从印度飞香港，传统智能体会直接放弃——它没被训练过这个。

你是想让用户吃个报错，还是等工程团队排期两周？**有了自我造工具的能力，智能体可以当场补上这块短板** <button class="pd-ts" data-t="10:18" data-who="嘉宾" data-en="But let's say you have one user who's saying, no, no, I want a flight ticket from, I don't know, India to Hong Kong. And your agent gives up because it's not been explicitly programmed to do that, or it's not been trained to have access to be able to do that." aria-label="回原文"></button>。

## 它不光造工具，还能造出一支小团队

更进一步：智能体能不能写别的智能体？可以。

演讲里她只输入了一句「帮我在夏威夷规划行程」，智能体自己拆解任务，创建了三个子智能体——航班、活动、行程——分别写好再调用它们，最后给出包含主要机场和最佳海滩的完整规划 <button class="pd-ts" data-t="13:16" data-who="嘉宾" data-en="Here, I'm going to be printing out, I'm going to be creating these into three focus sub-agents. The flight agent, the activities agent, the itinerary agent, and it's calling the editor tool three times, one for each of these." aria-label="回原文"></button>。

如果给它接上实时数据的接口，它还能自己写一个查天气的工具。

要是让它改目的地，**它会自己更新已有的智能体，而不是推倒重来**。

在更长的演示环节里，她甚至会故意把系统弄坏，让智能体自己发现报错、自己修复。

## 能量越大，越得拴住：评估和护栏不可少

但 Sandhya 反复强调，**这种自主性风险很高**。一个能创建工具和智能体的系统，理论上也能改写和删除你的东西。她列出两层保障。

第一层是[[评估|评估]]。框架内置 8 类评估：任务层面看最终目标有没有达成；对话层面看回答是否有帮助、是不是编造的；

工具层面看有没有用对工具、参数填没填错；[[多智能体系统|多智能体系统]]里还要看子智能体的调用顺序和相互通信是否正常 <button class="pd-ts" data-t="16:49" data-who="嘉宾" data-en="You want to make sure that it's calling the different tools and the different sub-agents in the right sequence. And you also want to take a deeper dive into what the message is, the inter-agent communication looks like, and if that's up to the mic." aria-label="回原文"></button>。

第二层是四类[[护栏|护栏]]：

环境隔离(把执行代码的环境本身[[沙箱|沙箱]]化，而不是只隔离智能体)、限制可用工具、限制权限和访问者，以及完整的可观测性——所有遥测数据都要留痕 <button class="pd-ts" data-t="17:29" data-who="嘉宾" data-en="Four different types of guardrails. The first one is your environment. We need to make sure that we're sandboxing the environment." aria-label="回原文"></button>。

## 最有趣的一件事：开源框架自己写了自己的另一个版本

结尾有个彩蛋。Strands Agents 三年前诞生于 AWS 内部，后来开源，先有 Python 版本。然后，Python 版本的 Strands 自己写出了 TypeScript 版本 <button class="pd-ts" data-t="19:49" data-who="嘉宾" data-en="And we wrote the Python version of strands. And the Python version of strands wrote by itself the TypeScript version of strands. So it did update its own source code." aria-label="回原文"></button>。

也就是说，这个关于「智能体更新自己源代码」的愿景，已经真实发生过一次了。

Sandhya 的结论是：**这是自我改进、自我进化的智能体的起点**。她还开玩笑说，总有一天它们会接管世界——但在那之前，这一切精彩得很。

## 本集带走

- MetaTooling 的核心：智能体在[[运行时|运行时]]自己写工具、自己加载使用，不需要重启或人工干预
- 实现只需三件套——编辑器、命令行、加载工具——加一段定义好工具模板的系统提示词
- 智能体还能自我拆解任务，创建并调用子智能体，形成多智能体协作
- 自主性带来风险：必须配套 8 类评估和沙箱、权限、工具限制、可观测性四类护栏
- Strands Agents 的 Python 版本已亲手写出了自己的 TypeScript 版本——自更新代码不再是设想

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">让我写一个工具来数你想要的字符数，因为它显然知道自己没有这个能力。</span>  
> *Let me write a tool to count the number of characters you want, because clearly it knows that it does not have the capability to do it.*  
> <span class="qm">—— Sandhya Subramani · [04:00]</span> ^q1

> <span class="qz">现在你的重点不仅仅是构建一个能完成工作的好的智能体系统，你可能还想开始考虑编写自愈代码，考虑创建一个能审视自身、查看有哪些 bug 并自我修复的智能体。</span>  
> *So now your focus is not just building a good agentic system that can get the job done, you would also maybe want to start thinking about healing, writing self-healing code, about creating an agent that can sort of go over itself, look at what bugs are there and fix itself.*  
> <span class="qm">—— Sandhya Subramani · [14:20]</span> ^q2

> <span class="qz">如果这个元工具或元智能体能派生出工具和智能体，它也能修改和删除。</span>  
> *If this meta tooling or this meta agent can spin off tools and agents, it can also modify and delete.*  
> <span class="qm">—— Sandhya Subramani · [17:11]</span> ^q3

> <span class="qz">而且它能解决比最初被教会的更多的能力。这是自我改进智能体和自我进化智能体的开端。</span>  
> *And it can solve more capabilities than it has been initially taught to. This is the starting of self-improving agents and the self-evolving agents.*  
> <span class="qm">—— Sandhya Subramani · [18:53]</span> ^q4

> <span class="qz">我们写了 Strands 的 Python 版本。然后 Strands 的 Python 版本自己写出了 Strands 的 TypeScript 版本。</span>  
> *And we wrote the Python version of strands. And the Python version of strands wrote by itself the TypeScript version of strands.*  
> <span class="qm">—— Sandhya Subramani · [19:45]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-08-a16z-building-the-cloud-for-an-agentic-world|当AI智能体成为云的大客户：AWS CEO Matt Garman 谈2200亿美元的豪赌]]<span class="pd-rz">同公司:AWS · 同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-10-05-talks-interrupt-nyc-opening-keynote|模型不再是护城河，谁在围绕模型建「自己的智能」]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、评估 (evals)、沙箱 (sandbox)</span>
- [[2026-10-08-mad-what-happens-when-billions-of-ai-agents|当几十亿个AI智能体冲向你的数据库]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)、LLM</span>

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
