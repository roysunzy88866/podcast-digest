---
title: 下一代游戏引擎不会有使用手册
podcast: 精选演讲
date: 2026-09-23
source_url: undefined
duration: "19:13"
type: episode
cover: "#64748b"
description: 前 Unity 工程师 Arturo 介绍他开发的工具 Nereu：用日常游戏语言描述需求就能做游戏，以及背后的资产标签系统设计思路。
guests: ["[[Arturo Nunez]]"]
companies: ["[[Nereu]]", "[[Unity]]"]
concepts: ["[[资产标签系统]]", "[[实体组件系统]]", "[[智能体]]", "[[LLM]]", "[[细节层级]]", "[[视觉模型]]", "[[世界模型]]", "[[Claude Code]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-18-talks-the-next-game-engine-won-t-have-a-manual#post","headline":"下一代游戏引擎不会有使用手册","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-18-talks-the-next-game-engine-won-t-have-a-manual","mainEntityOfPage":"https://talk.solomind.cc/2026-08-18-talks-the-next-game-engine-won-t-have-a-manual","description":"前 Unity 工程师 Arturo 介绍他开发的工具 Nereu：用日常游戏语言描述需求就能做游戏，以及背后的资产标签系统设计思路。","datePublished":"2026-09-23","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Arturo Nunez"},{"@type":"Organization","name":"Nereu"},{"@type":"Organization","name":"Unity"},{"@type":"Thing","name":"资产标签系统 (Asset Tag System)"},{"@type":"Thing","name":"实体组件系统 (Entity Component System)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"LLM"},{"@type":"Thing","name":"细节层级 (level of details)"},{"@type":"Thing","name":"视觉模型 (vision model)"},{"@type":"Thing","name":"世界模型 (world model)"},{"@type":"Thing","name":"Claude Code"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"下一代游戏引擎不会有使用手册","item":"https://talk.solomind.cc/2026-08-18-talks-the-next-game-engine-won-t-have-a-manual"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>下一代游戏引擎不会有使用手册</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 下一代游戏引擎不会有使用手册

<div class="pd-byl"><b>Arturo Nunez</b> · Nereu 开发者 · 2026-09-23</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-18-talks-the-next-game-engine-won-t-have-a-manual.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">近年来,我觉得这变得更像是生产更多、试图卖得更多,而不是做游戏的手艺本身。</div><div class="a">— Arturo Nunez <button class="pd-ts" data-t="06:26" data-who="Arturo Nunez" data-en="In recent years, I think it's become more about producing more and trying to sell more rather than the craft of making games." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Arturo Nunez]]
>
> **公司** [[Nereu]] · [[Unity]]
>
> **概念** [[资产标签系统]] · [[实体组件系统]] · [[智能体]] · [[LLM]] · [[细节层级]] · [[视觉模型]] · [[世界模型]] · [[Claude Code]]

这一集要聊的是：为什么下一代游戏引擎不会有使用手册。说这话的人叫 Arturo，他在 [[Unity|Unity]]（知名游戏引擎公司）工作了将近 10 年，见过太多人做游戏时一遍又一遍地在同样的事情上挣扎——所以他自己做了一个叫 [[Nereu|Nereu]] 的工具。

开场他先演示了它现在的样子：他对着助手说「我想添加一个机器人」，工具就从资产库里找出符合条件的机器人模型；再说「让它用 WASD 移动、加上动画」，角色就能动了；接着描述「加一些建筑」「下点雨」「加一个跟随角色的摄像机」——几分钟后，一个能玩的游戏场景就成了。全程没写一行代码，没导入一个模型，只用了「玩过游戏的人都懂」的语言来描述自己想要什么。

## 为什么做游戏这么难

用常规工具做到演示里那一步非常难。做游戏需要懂编程、3D 建模、渲染、音乐、动画等一大堆技能：要么有一个互相补足的大团队，要么每个人身兼多职——而说实话，很难找到一个人既擅长游戏设计、又擅长渲染、还擅长实时镜头构图。

而且技术上行还不够：游戏必须好玩，不好玩就没人玩。Arturo 认为乐趣应该既属于玩家、也属于开发者，但近年来行业越来越偏向「生产更多、卖更多」，而不是做游戏本身的手艺。他想让更多人不用沮丧、不用花两三年做出东西才发现卖不出去，就能享受做游戏的过程——对很多人来说，做游戏只是一种创意出口，就像玩乐高。

现在明明有强大的引擎（Unreal、Unity），也有强大的 [[LLM|LLM]] 和[[智能体|智能体]]，为什么依然难？他的判断是：我们只是在两个世界之间搭了一座桥，这并不最优——你仍然得用引擎的词汇、代码的词汇去提问，否则 LLM 就会失控乱来、一遍遍重复造轮子。比如「我想要一个跟随角色的镜头」，结果本质每次都一样，但 LLM 每次都从头造一遍。

## 资产标签系统（ATS）：把上下文从引擎翻转到游戏设计

他的解法是把这个理念翻转过来：默认上下文不该在游戏引擎上，而该在游戏设计上。在当前引擎里，想控制一个角色，你需要导入 mesh、配置渲染器、动画器、刚体、碰撞体、音源，再写移动逻辑和游戏规则——其中大部分是市面上每个游戏、每个角色都有的样板代码，但开发者还得去读懂那些组件和成百上千个滑块是干嘛的。

Nereu 的目标则是：一切都只是资产。一切都要渲染、大多数时候都有物理，而你只需要**加标签来描述资产在游戏中的意图**——「我要这个成为角色、能被动画化、能二段跳」「收集金币时增加分数」。这正是新手教程里那种语言：「按 A 跳跃，空中再按一次做二段跳」——他认为那就该是我们做游戏该用的语言。

这套东西叫 ATS（[[资产标签系统|资产标签系统]]，Asset Tag System），源自游戏开发里的[[实体组件系统|实体组件系统]]（Entity Component System，一种面向数据的设计：用组件描述对象，再由系统去查询并处理所有带某组标签的对象）——比如系统查询所有同时带 vehicle、player、drivable 标签的对象，让它们可以被驾驶。妙处在于可以复用：一栋建筑本来不动，但没什么能阻止你给它加上 vehicle 和 drivable 标签，于是你就有了一栋能开的车，可以放进马里奥赛车风格的游戏里。

AI 助手（叫 Bibi）的作用就是帮你摆脱卡壳：你问「怎么让车动起来」，它知道有哪些可用的工具和标签，直接应用到资产上。实现上，用户输入查询，系统用场景上下文加上额外信息（游戏里的资产类型、用户描述的想做的游戏类型）构建 prompt，然后智能体执行调用、增删标签。引擎里**故意不内置脚本系统**——虽然它就是跑在浏览器里的 JavaScript，想扩展的人可以扩展，但对大多数用户不该需要。

最难的部分是什么？Arturo 说，是把各种游戏分解成这些标签和系统——游戏类型太多、同一个游戏有很多种描述方式，还有「情绪氛围」这类东西：想做平台跳跃但有恐怖感？

那就牵扯到后期处理效果和光照。这些就是他们正在分解、用来驱动引擎的东西。

## 他怎么用 AI 造出这个引擎

这是他第一次以这样的速度构建这种规模的东西，基本每天和 AI 一起工作（用 [[Claude Code|Claude Code]] 或类似工具）：把脑子里的想法和 Claude 讨论；专注做光照时，就去找行业内专注光照的朋友提问，把答案带回来再构建工具；然后大胆做减法——「我觉得我们不需要这个设置、这个功能，我没见过多少用户用它」——以此简化引擎。构建的同时，他们把每个新工具的定义喂给助手，所以助手始终知道所有可用工具。产品现在处于封闭 Alpha 阶段，一批用户在用、给反馈，然后回到起点迭代。

一个值得分享的工程细节是**上下文的组装**。资产库有大约 6000-7000 个资产，不可能手动打标签——他只有名字和 3D 文件，所以对每个资产截图，用[[视觉模型|视觉模型]]来描述打标。

日常则主要靠 LLM。问题是整个场景喂给 LLM 上下文会爆炸：演示场景里约有 100 个资产，其中大部分是可以忽略的草。他们借用了一个游戏开发圈众所周知的思路——[[细节层级|细节层级]]（Level of Details，游戏里离镜头近的物体用高精度模型渲染、太远的就用一个立方体代替，玩家察觉不到）：用户点击骑士时，它周围的东西优先级高，就把它们的标签和标签上的具体设置值完整喂给模型；稍远的东西只说「这个位置有个玩家」，不发送全部上下文；用户继续移动和修改时再动态更新。

## 一键生成不是目标；世界模型是另一种媒介

收尾时他明确了一个边界：他**不想**一键生成没人会玩的游戏，觉得那没有意义——行业里确实有那种需求，但 Nereu 的理念是让人们享受制作过程、把游戏分享给家人朋友，并在过程中学会游戏设计的语言（不一定是编程——有用户说因此理解了以前不懂的编程概念，但那不是最初目标）。

对于用[[世界模型|世界模型]]（即时生成游戏画面的另一类技术路线）做游戏，他的判断是：那会是一种**不同的媒介**，即使我们也叫它电子游戏——如今游戏必须每秒渲染 60 帧，要用世界模型在 4K 分辨率下实时做到、还要模拟物理，他认为还很遥远。但他觉得正在发生的一切很令人兴奋。

最后他说，做这个工具本身非常有趣：想测试什么时，就拉进来一个宇航员和一只恐龙让它们到处走走——这像极了大约 20 年前把他带入游戏开发行业的那种乐趣。职业生涯里他曾越来越失望，觉得「这不再有趣了」，现在他又找回了乐趣，想分享给更多人。

## 本集带走

- **换掉提问的词汇**：别用引擎和代码的词汇跟 LLM 对话（否则它反复造轮子），用玩游戏的人本来就会的语言描述意图——「能二段跳」「吃到金币加分」「镜头跟着角色」。
- **用标签替代样板配置**：把每个资产只是当「资产」，用意图标签（player/vehicle/drivable/animated…）描述它，系统层负责查询和执行——标签可自由组合，随时能造出「能开的建筑」这种意外玩法。
- **上下文按距离分级**：借鉴游戏里细节层级的思路，用户正在操作的对象给完整标签和设置值，远处对象只给一句话摘要，动态更新——避免整个场景撑爆 LLM 上下文。
- **视觉模型批量打标**：几千个资产不用手动标注，截图喂给视觉模型生成描述即可。
- **AI 时代的做减法**：和 Claude 讨论方案、向领域专家要输入、构建后把工具定义同步给助手，同时果断砍掉没用户用的设置来简化引擎。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">近年来,我觉得这变得更像是生产更多、试图卖得更多,而不是做游戏的手艺本身。</span>  
> *In recent years, I think it's become more about producing more and trying to sell more rather than the craft of making games.*  
> <span class="qm">—— Arturo Nunez · [06:26]</span> ^q1

> <span class="qz">之所以难,是因为我觉得我们只是在两个世界之间搭一座桥,而这并不是最优的,你仍然需要知道该用什么词汇去问,用引擎的词汇、用代码的词汇。</span>  
> *It's hard because I think we're just building a bridge between two worlds, and it's not optimal, and you still need to know kind of like what to ask in the vocabulary of an engine, in the vocabulary of code.*  
> <span class="qm">—— Arturo Nunez · [07:04]</span> ^q2

> <span class="qz">默认情况下,上下文是在游戏引擎上,而不是在游戏设计这部分,而我认为我们应该把这个理念翻转过来。</span>  
> *By default, the context is on the game engine rather than on the game design part, and I think we should flip that idea.*  
> <span class="qm">—— Arturo Nunez · [07:42]</span> ^q3

> <span class="qz">我不想让我们去一键生成没人会玩的游戏,我觉得那没有意义。</span>  
> *I don't want us to one-shot games that nobody is going to play, and I don't see the point in that.*  
> <span class="qm">—— Arturo Nunez · [16:49]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-08-talks-anthropic-s-cca-exam-as-a-field-guide-fo|别迷信大上下文：拆解 Claude 认证架构师考试的反模式]]<span class="pd-rz">同概念:Claude Code、LLM、智能体 (agent)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)、prompt</span>
- [[2025-09-07-lennys-how-ai-is-reshaping-the-product-role|PM的生存法则：AI时代别当瓶颈，去抢活干]]<span class="pd-rz">同概念:LLM、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)、prompt</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:LLM、智能体 (agent)、prompt</span>
- [[2026-08-12-beyondcoding-wes-bos-how-developers-stand-out-when-ai|当所有人都在用智能体写代码，你靠什么脱颖而出：与 Wes 聊开发者的当下]]<span class="pd-rz">同概念:LLM、智能体 (agent)、Claude Code</span>

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
