---
title: Google Earth 之父的下一站：给真实世界建一个 4D 模型
podcast: Beyond Coding
date: 2026-09-09
source_url: undefined
duration: "41:28"
type: episode
cover: "#64748b"
image: "/covers/2026-09-02-beyondcoding-why-robots-need-a-different-map-google-e.jpg"
description: Niantic Spatial CTO、Google Earth 背后工程师 Brian McClendon 讲述如何把世界建成可查询的 4D 模型，以及 AI 时代的工程法则。
host: "[[Brian McClendon]]"
companies: ["[[Niantic Spatial]]", "[[Google Earth]]", "[[Google Maps]]"]
concepts: ["[[四维世界模型]]", "[[视觉定位]]", "[[Gaussian Splats]]", "[[仿真到真实]]", "[[数字分身]]", "[[自检机制]]", "[[智能体工程]]", "[[AI]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/covers/2026-09-02-beyondcoding-why-robots-need-a-different-map-google-e.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-02-beyondcoding-why-robots-need-a-different-map-google-e#post","headline":"Google Earth 之父的下一站：给真实世界建一个 4D 模型","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-02-beyondcoding-why-robots-need-a-different-map-google-e","mainEntityOfPage":"https://talk.solomind.cc/2026-09-02-beyondcoding-why-robots-need-a-different-map-google-e","description":"Niantic Spatial CTO、Google Earth 背后工程师 Brian McClendon 讲述如何把世界建成可查询的 4D 模型，以及 AI 时代的工程法则。","datePublished":"2026-09-09","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-02-beyondcoding-why-robots-need-a-different-map-google-e.jpg","about":[{"@type":"Person","name":"Brian McClendon"},{"@type":"Organization","name":"Niantic Spatial"},{"@type":"Organization","name":"Google Earth"},{"@type":"Organization","name":"Google Maps"},{"@type":"Thing","name":"四维世界模型 (4D model)"},{"@type":"Thing","name":"视觉定位 (visual positioning)"},{"@type":"Thing","name":"Gaussian Splats"},{"@type":"Thing","name":"仿真到真实 (sim-to-real)"},{"@type":"Thing","name":"数字分身 (digital twin)"},{"@type":"Thing","name":"自检机制 (self-checking)"},{"@type":"Thing","name":"智能体工程 (agentic engineering)"},{"@type":"Thing","name":"AI"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Google Earth 之父的下一站：给真实世界建一个 4D 模型","item":"https://talk.solomind.cc/2026-09-02-beyondcoding-why-robots-need-a-different-map-google-e"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Google Earth 之父的下一站：给真实世界建一个 4D 模型</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Google Earth 之父的下一站：给真实世界建一个 4D 模型

<div class="pd-byl"><b>Brian McClendon</b> · Niantic Spatial CTO · 2026-09-09</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-02-beyondcoding-why-robots-need-a-different-map-google-e.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">而如果你能成功地把你的问题空间设计成有利于 AI 的方式，你就会很快得到一个人类还没想到的解决方案。</div><div class="a">— Brian McClendon <button class="pd-ts" data-t="27:43" data-who="Brian McClendon" data-en="And if you can successfully design your problem space in a way that's conducive to AI, you're going to get a solution quickly that humans hadn't thought of yet." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Brian McClendon]]
>
> **公司** [[Niantic Spatial]] · [[Google Earth]] · [[Google Maps]]
>
> **概念** [[四维世界模型]] · [[视觉定位]] · [[Gaussian Splats]] · [[仿真到真实]] · [[数字分身]] · [[自检机制]] · [[智能体工程]] · [[AI]]

把一栋建筑、一座城市乃至整个世界数字化，不只是拍一张快照——而是要造一个能回答「1 月 3 日这里是什么样」的时光机。说这话的人是 [[Brian McClendon|Brian McClendon]],他做了十几年 [[Google Maps|Google Maps]]、是 [[Google Earth|Google Earth]] 背后的工程师，现在担任 [[Niantic Spatial|Niantic Spatial]] 的 CTO。这一集他聊的正是他们的核心目标：**对世界的四维视图**——3D 空间加上第四维「时间」。

## 从一张照片定位到半米以内

Niantic Spatial 刚落地的核心能力是[[视觉定位|视觉定位]]：给这个空间建一张视觉定位地图后，你在这个空间里拍的**任何一张照片**，都能通过特征匹配定位出你在哪里——误差正负几厘米、角度误差几分之一度；宏观上「半米、半度，轻松做到」。

这套能力的关键要素是数据采集方式的剧变。过去要靠带 LiDAR(激光雷达)的测量扫描仪，推着三脚架在空间里慢慢走；如今拿一台 360 相机走五分钟，就能建出同样精确的 3D 重建模型——既能进 VR/AR 逛，又能直接生成定位地图。

真正的跃迁来自机器学习模型。他们训练的 FMVS 深度模型能从单张照片估算出足够精确的深度，让以前「以那种输入密度根本无法重建」的东西变得可重建。更妙的是，这激活了几十年积攒的旧数据遗产：「我们可以拿 20 年前的照片和视频，做一些 20 年前不可能做到的重建」——用旧视频构建 3D 模型。

## 4D 模型要解决什么

「Google Earth 就是世界的一个快照」——为人类看地图，这个任务基本做完了，McClendon 自己的评价是「Google Earth 已经足够好了」。但城市、工厂、建筑工地真正的需求不是看，而是**回答**：两个日期之间什么变了？

那个水泥搅拌机为什么从 A 区挪到了 C 区？这起事故为什么发生？

具体场景他举了建筑工地：现有公司只是拍下第一天、第二天，让你拖滑块肉眼对比——「人们其实并不想那样做」。他们想要的是一份自动报告：「水泥搅拌机在第二天期间的某个时候从 A 区移到了 C 区」；再把这些变化提炼分类，哪些琐碎无关、哪些是完全违反安全规定、需要立即纠正。

这背后的方法论是：把企业积攒多年的一堆杂乱照片，组织成**可以当数据库来查询的东西**，而不是一堆照片。

## 给机器人造仿真训练场

地图是从为人类服务延伸到为机器人服务的。McClendon 的教训来自 Google Maps 时代：人眼能容忍一定误差，但「机器人非常字面化」，做不对就会绊倒、穿墙。而当前机器人训练的最大瓶颈恰是 sim-to-real([[仿真到真实|仿真到真实]])：只在计算机生成的仿真环境里训练，机器人被微调得太贴合仿真，「送到真实世界，突然之间事情就对不上了」。

他们的解法是用 [[Gaussian Splats|Gaussian Splats]](一种新的 3D 渲染技术：不用三角形网格贴图，而是用一个个大小可变、记录了「每个视角下颜色」的元素来还原场景，反光、透明效果都更逼真)把真实房间精确捕捉、重建，打包成 USDZ 文件——内含 splat 本体加碰撞检测网格——一键下载进 NVIDIA 的 Isaac 机器人仿真器，让机器人在「和真实世界视觉一致」的环境里训练。

## AI 只擅长「可自检」的问题——所以要把问题设计成可自检的

这是本集最值得工程师带走的观点。「那些可以自我检验的问题，[[AI|AI]] 可以持续钻研」；但 AI 解读视觉信息相当糟糕——「如果你只是说，这是一张图片，它有什么问题，它们在这方面就非常糟糕」。所以打造好的 AI 问题求解器有两面：找到问题，以及在解这一侧**构建[[自检机制|自检机制]]**——测试数据集加标准答案，「在你用这个数据集取得成功之前，你就还没完成」。

由此引申到工作方式：「并不是所有问题都能在短期内被 AI 解决，但其中一部分可以。而如果你能成功地把你的问题空间设计成有利于 AI 的方式，你就会很快得到一个人类还没想到的解决方案」。主持人把它总结为新一代「[[智能体工程|智能体工程]]」的关键能力：用钩子或测试集让 AI 自我验证，输出才有可靠性。

更进一步，他认为软件开发的形态会因此改变：不再朝目标随机推进，而是**优先挑选那些答案可知、容易解决的问题做**，「直到 AI 变得足够聪明，你再抬高门槛」。

## 长期愿景与未解难题

现实的难点是规模化：给一个房间建 4D 模型是「一台机器、一个程序员加大量苦工」的事，但 Rancho Cordova 市有约 50 平方公里要覆盖，「他们甚至不知道自己拍的照片都在哪里」——大规模采集、组织、建模是下一批未解问题。

而终点线令人神往：正如大语言模型从人类知识里挖出了人类没见过的洞见，物理世界组织方式中也藏着尚未被发现的洞见。他举了 Earth Engine 的例子：有了全世界所有河流 30 年的卫星数据，有人第一次**通用地**解决了河流蜿蜒问题——「这个话题此前只有零星的攻击，从未被系统性地攻克过」。

他相信 4D 世界模型会在每一个信息层级上催生同类成果。Google 做过的最大「时光机」是 1984 年以来每 10 米一个像素的卫星影像；「我们想做的，是每 10 厘米一个像素」。终局是让 AI 具备查询真实世界的能力。

## 本集带走

- **让 AI 干活先造自检机制**：AI 只能在「可自我检验」的问题上持续钻研；给它测试集和标准答案，答不出就是没完成——这是让智能体输出可靠的前提。
- **把问题空间设计得对 AI 友好**：挑答案可知的子问题先做，能很快得到人类没想到的解；AI 变强后再逐步抬高问题难度。
- **旧数据是新资产**：新的深度估算模型让 20 年前的照片、视频都能做 3D 重建——历史影像从死库存变成可用数据。
- **刷 token 没用，要懂每个模型擅长什么**：各代模型在某些类别上「上下跳动」而非逼近完美；也别盲目开三个模型互相打——它们可能一起相信同一个幻觉。
- **别为用 AI 而用 AI**:一是学不到东西，二是 AI 有根本性盲区，你可能花光所有钱去对抗它们。

> 【背景】Gaussian Splats 技术由 2023 年 SIGGRAPH 论文提出；McClendon 在访谈中口述为「2024 年」并称论文来自 SIGGRAPH,本集以其口述为准。Niantic Spatial 是 Niantic 拆分出的地理空间技术公司，《宝可梦 GO》开发商 Niantic 的姊妹公司。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">而如果你能成功地把你的问题空间设计成有利于 AI 的方式，你就会很快得到一个人类还没想到的解决方案。</span>  
> *And if you can successfully design your problem space in a way that's conducive to AI, you're going to get a solution quickly that humans hadn't thought of yet.*  
> <span class="qm">—— Brian McClendon · [27:43]</span> ^q1

> <span class="qz">我认为 AI 在总体上有一个特点，就是那些可以自我检验的问题，AI 可以持续钻研。</span>  
> *One of the things that I think AI has in general is that problems that are self-checkable, AIs can grind on.*  
> <span class="qm">—— Brian McClendon · [26:40]</span> ^q2

> <span class="qz">你也不应该盲目地同时开三个让它们互相争斗，因为它们很容易让自己全都相信同一个幻觉。</span>  
> *And you shouldn't just blindly turn on three of them fighting each other because they can easily all convince themselves of the same hallucination.*  
> <span class="qm">—— Brian McClendon · [37:35]</span> ^q3

> <span class="qz">真实世界不像那个仿真那么清晰锐利。</span>  
> *The world is not as sharp and crisp as that simulation.*  
> <span class="qm">—— Brian McClendon · [16:12]</span> ^q4

> <span class="qz">我们可以拿 20 年前的照片和视频，做一些 20 年前不可能做到的重建。</span>  
> *We can take photos and video from 20 years ago and do reconstructions that were not possible 20 years ago.*  
> <span class="qm">—— Brian McClendon · [08:25]</span> ^q5

> <span class="qz">如果数字孪生做得足够好，我们将能够把世界表征到这样的程度：你不会知道自己并不在那里。</span>  
> *If the digital twin gets good enough, we will be able to represent the world enough that you won't know that you're not there.*  
> <span class="qm">—— Brian McClendon · [32:46]</span> ^q6

> <span class="qz">因此我觉得你会发现，我们将不再朝着目标终点随机地开发软件，而是会为那些容易解决的问题做优化，直到 AI 变得足够聪明，你再抬高门槛说：好，现在也许你可以瞄准这么高的目标了。</span>  
> *And so I think that you'll find that we're going to start developing software not in a random line towards the target of destination, but we are going to optimize for those problems that are easy to solve until AI gets smart enough that you raise the bar and say, okay, now maybe you can go aim at this high.*  
> <span class="qm">—— Brian McClendon · [39:39]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-31-doac-top-white-house-advisor-why-big-tech-wan|David Freeberg：美国正在走向社会主义，但AI能开另一扇门]]<span class="pd-rz">同概念:AI</span>
- [[2026-09-06-a16z-your-ai-doctor-is-coming-julie-yoo-yemlp|为什么医疗是 AI 受益最大的行业: Julie Yu 的判断]]<span class="pd-rz">同概念:AI</span>
- [[2025-07-31-lennys-he-saved-openai-bret-taylor|Bret Taylor：智能体是新应用，软件要按结果定价]]<span class="pd-rz">同公司:Google Maps</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-10-16-lennys-why-ai-makes-design-craft-and-quality-th|Figma CEO Dylan Field:想赢,产品就得有品味]]<span class="pd-rz">同概念:AI</span>
- [[2025-11-02-lennys-the-making-of-canva|Canva 创始人 Melanie Perkins:先想象未来,再一步步把它造出来]]<span class="pd-rz">同概念:AI</span>
- [[2026-01-29-lennys-marc-andreessen-the-real-ai-boom|Marc Andreessen：AI 是现代炼金术，为什么你不是在失业而是在变贵]]<span class="pd-rz">同概念:AI</span>

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
