---
title: Justin Johnson：世界模型不只有一种，而语言模型做不到这些
podcast: The TWIML AI Podcast
date: 2026-09-02
source_url: undefined
duration: "66:01"
type: episode
cover: "#64748b"
image: "/covers/2026-09-01-twiml-world-models-and-the-future-of-spatial-a.jpg"
description: World Labs 联合创始人 Justin Johnson 拆解世界模型的三种形态——渲染器、规划器、模拟器，以及为什么当前架构还差一口气。
host: "[[Sam Charrington]]"
cohosts: ["[[Justin Johnson]]"]
companies: ["[[World Labs]]"]
concepts: ["[[世界模型]]", "[[高斯溅射]]", "[[智能体]]", "[[PoMDPs]]", "[[Marble]]", "[[RTFM]]", "[[Transformers]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/covers/2026-09-01-twiml-world-models-and-the-future-of-spatial-a.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-01-twiml-world-models-and-the-future-of-spatial-a#post","headline":"Justin Johnson：世界模型不只有一种，而语言模型做不到这些","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-01-twiml-world-models-and-the-future-of-spatial-a","mainEntityOfPage":"https://talk.solomind.cc/2026-09-01-twiml-world-models-and-the-future-of-spatial-a","description":"World Labs 联合创始人 Justin Johnson 拆解世界模型的三种形态——渲染器、规划器、模拟器，以及为什么当前架构还差一口气。","datePublished":"2026-09-02","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-01-twiml-world-models-and-the-future-of-spatial-a.jpg","about":[{"@type":"Person","name":"Sam Charrington"},{"@type":"Person","name":"Justin Johnson"},{"@type":"Organization","name":"World Labs"},{"@type":"Thing","name":"世界模型 (world model)"},{"@type":"Thing","name":"高斯溅射 (Gaussian splatting)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"PoMDPs"},{"@type":"Thing","name":"Marble"},{"@type":"Thing","name":"RTFM"},{"@type":"Thing","name":"Transformers"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Justin Johnson：世界模型不只有一种，而语言模型做不到这些","item":"https://talk.solomind.cc/2026-09-01-twiml-world-models-and-the-future-of-spatial-a"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Justin Johnson：世界模型不只有一种，而语言模型做不到这些</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Justin Johnson：世界模型不只有一种，而语言模型做不到这些

<div class="pd-byl"><b>Justin Johnson</b> · World Labs 联合创始人 · 2026-09-02</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-01-twiml-world-models-and-the-future-of-spatial-a.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">所以所有这些都是真的不像是自然地从语言建模范式中产生出来的能力。</div><div class="a">— Justin Johnson <button class="pd-ts" data-t="01:54" data-who="Justin Johnson" data-en="So all of these are capabilities that really don't feel like they're falling naturally out of the language modeling paradigm." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sam Charrington]] · [[Justin Johnson]]
>
> **公司** [[World Labs]]
>
> **概念** [[世界模型]] · [[高斯溅射]] · [[智能体]] · [[PoMDPs]] · [[Marble]] · [[RTFM]] · [[Transformers]]

这一集是 [[Sam Charrington|Sam Charrington]] 和 [[World Labs|World Labs]] 联合创始人 [[Justin Johnson|Justin Johnson]] 聊[[世界模型|世界模型]]到底是什么。Justin 同时也是密歇根大学的计算机科学副教授。

很多人觉得语言模型做大了自然就能理解世界——Justin 认为不是。语言模型能做的事是处理文本，但「理解空间、预测环境变化、在世界中行动」这些能力，不太可能从语言建模范式里自然涌现出来。这也不是说需要完全推翻重来，而是世界模型需要处理的问题本质上不同——比如一个 3D 世界可能轻松吃掉几千万个 token，这种量级的上下文在语言模型里是极端情况，在世界模型里是日常 <button class="pd-ts" data-t="61:49" data-who="Justin Johnson" data-en="But, you know, maybe those are not, you could do a lot with language without needing that big of a context. Um, but nowadays, but if you want to talk about worlds, like, you know, I need to generate, you know, model, maybe lots and lots of high dimensional images or lots and lots of space in 3D." aria-label="回原文"></button>。

## 世界模型到底在说什么

Justin 指出，现在「世界模型」这个术语至少被三个不同的群体在用，说的是三件不同的事：

**隐式世界模型**：模型内部隐含地建模了世界的某些规律，但它输出的还是文本或图像。比如一个视频模型能生成极其逼真、物理正确的水流视频，那它内部一定隐含地对流体力学做了某种建模，但它并不显式地告诉你那些规律是什么。

**强化学习里的世界模型**：这个术语最早来自强化学习文献，和 POMDP（部分可观测马尔可夫决策过程，一种把「[[智能体|智能体]]—世界」交互形式化的数学框架）绑定。在这个框架里，世界有一个内部状态，智能体采取动作后状态会转移，智能体只能拿到状态的低维投影（即「观测」，比如人眼看到的图像）。世界模型在这个语境下的原始定义是：输入当前状态和动作，预测下一个状态。

**生成式世界模型**：图像模型生成图像，视频模型生成视频，那世界模型就应该生成世界——一个你可以走进去、可以导航、自洽的人工环境。这也是过去一年学术文献里「世界模型」最常指代的东西。

Justin 认为这三条路都有价值，但用同一个词称呼不同系统造成了混乱，社区需要更好的术语。还有一个更极端的设想——**世界模型作为「理论构建者」**：不只是生成像素或预测状态，而是像物理学家一样构建紧凑、强大的解释性理论（比如引力定律、流体力学方程）。Justin 直说「这个真的非常非常难，我不知道有谁找到了好的切入点」。

## 显式 3D vs 隐式像素：两条技术路线

做图形化的世界模型，有一个顶层分叉：你要不要在中间显式地表示 3D？

**显式路线——[[高斯溅射|高斯溅射]]（Gaussian Splatting）**。高斯溅射本质上是一个 3D 点云，每个点有位置、颜色、不透明度、大小，还有球谐函数来描述从不同角度看颜色怎么变。

它之所以在过去几年火了，核心原因是**可微性好**——所有东西都是平滑的、部分透明的，参数微调时输出也连续变化，梯度可以干净地回传到神经网络里。相比之下，传统的三角网格（游戏和特效用了几十年的标准表示）有尖锐的不连续性，和神经网络不兼容。World Labs 的产品 [[Marble|Marble]] 走的就是这条路：用户输入一张图片或文本，模型先生成 360 度全景图，再把它「提升」成 3D 高斯溅射世界，用户可以导航。

**隐式路线——直接生成像素**。没有中间的 3D 表示，模型直接实时吐出视频帧。World Labs 的 [[RTFM|RTFM]]（实时帧模型）就是这条路。

Justin 强调一个容易混淆的点：**高斯溅射本身只是一种表示，不是世界模型**。早期 Meta 等公司做的经典高斯溅射是「重建」——拍几千张照片然后拟合一个点云，这里没有在大数据上训练过的大模型，没有可泛化的知识。Marble 的区别在于：高斯溅射是一个在大规模数据上训练的生成模型的**输出**，模型本身才是世界模型。

两条路线怎么选？Justin 认为不是谁优于谁，而是工程约束问题：算力预算低、要嵌入式运行、要构造上保证一致性→高斯溅射；能砸大量数据和算力、追求无限扩展→隐式像素路线。一致性（你转开再转回来，世界不变）在显式路线里是构造保证的，在隐式路线里靠数据和训练「学出来」。

## 三类世界模型：渲染器、规划器、模拟器

World Labs 的团队把这些纷繁的世界模型工作统一回了 POMDP 框架，发现几乎所有东西都可以归入三类，取决于模型在「智能体—动作—状态—观测」循环里输出什么：

- **渲染器（Renderer）**：输出观测（像素/视频）。比如 Genie、RTFM。用户给动作，模型告诉你世界看起来什么样。
- **规划器（Planner）**：输出动作。比如机器人策略模型——输入现实世界的观测，输出机器人该做的动作。和渲染器几乎是对偶关系。
- **模拟器（Simulator）**：输出或操作状态。这是最棘手的一个。Marble 其实跨越了渲染器和模拟器的边界：用户看到的是像素（渲染器），但模型真正输出的是高斯溅射这种显式状态表示，你可以测距离、插物体、做渲染以外的事。

Justin 认为，最终这些不会是割裂的三类系统。它们问的是同一组根本问题——世界可能什么样、如何响应动作、如何演化——所以会融合成**统一世界模型**：一个共享主干，根据需要切换输出头，有时输出像素，有时输出动作，有时输出状态。但他也坦承，现在还没到那一步。

## 当前架构够用吗

Transformer 本身很强，Justin 不认为需要推翻它。他看到两个更紧迫的进化方向：

**损失函数**：扩散、rectified flow、离散自回归——这是生成模型训练目标的演化，比架构变化更关键。

**超长上下文**：这是世界模型和语言模型的真正分水岭。语言模型里百万 token 是极端情况，但 3D 世界建模很容易就需要几千万 token 的上下文——每个 token 可能是一小块视频、一小束高斯溅射、或一小块 3D 空间。怎么让 Transformer 在这种长度下高效工作，是必须解决的问题。

至于几何深度学习、对称性这些「把物理先验硬塞进架构」的思路，Justin 持谨慎态度：深度学习的教训反复是——用简单表征，把规模堆上去；硬编码的假设（比如人体对称）可能帮你走 80% 的路，但最终会崩溃。

> 【背景】POMDP 全称 Partially Observable Markov Decision Process（部分可观测马尔可夫决策过程），是强化学习中描述智能体在不确定环境下做决策的经典数学框架。转写稿中写作 "PoMDPs" / "partially observed markup decision processes"，为 ASR 识别错误。
> 【背景】World Labs 由 Justin Johnson 与李飞飞共同创立，转写稿中提到 "World Labs" / "WoltLabs"（ASR 识别偏差），指同一公司。

## 本集带走
- **「世界模型」至少有三层含义**：隐式世界知识、RL 里的状态预测器、生成可导航 3D 环境。用同一个词聊不同东西是当前混乱的根源。
- **高斯溅射 ≠ 世界模型**：经典高斯溅射只是从照片重建点云，没有可泛化知识；只有当它是大模型的输出时，才涉及世界模型。
- **高斯溅射的核心优势是可微性**：相比三角网格的尖锐不连续，高斯溅射平滑且部分透明，梯度可以干净回传，和神经网络天然兼容。
- **显式 3D vs 隐式像素是工程取舍，不是对错**：要便宜且构造一致→高斯溅射；要靠规模无限扩展→隐式像素。两条路 World Labs 都在走。
- **渲染器、规划器、模拟器三类世界模型终将融合**：它们问的是同一组关于世界的问题，未来大概率是统一模型+不同输出头，按需切换模式。
- **Transformer 不需要被推翻，但超长上下文是世界模型的刚需**：几千万 token 的上下文在 3D 世界建模里是日常，这不是锦上添花，是基本问题。

<div class="pd-sec pd-sec-q">全部金句 <span>2 条</span></div>

> <span class="qz">所以所有这些都是真的不像是自然地从语言建模范式中产生出来的能力。</span>  
> *So all of these are capabilities that really don't feel like they're falling naturally out of the language modeling paradigm.*  
> <span class="qm">—— Justin Johnson · [01:54]</span> ^q1

> <span class="qz">我想了解关于世界的一些事情。而且即使我可以生成任何种类或任何结构的视频，我也没有学到我想知道的关于世界的事情。</span>  
> *I wanted to learn something about the world. And even if I can generate video of any kind or of any structure, I didn't learn what I wanted about the world.*  
> <span class="qm">—— Justin Johnson · [11:12]</span> ^q2

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-04-yc-waymo-co-ceo-dmitri-dolgov-move-fast-and|Waymo 谈物理 AI 的七条实战教训]]<span class="pd-rz">同概念:世界模型 (world model)、智能体 (agent)、transformers、模拟器 (simulator)</span>
- [[2026-07-31-yc-alexandr-wang-this-is-a-once-in-a-civili|Scale AI 创始人 Alexandr Wang:AI 时代,最稀缺的不是智能而是愿景]]<span class="pd-rz">同公司:Meta · 同概念:智能体 (agent)</span>
- [[2026-08-18-trainingdata-rich-sutton-and-khurram-javed-why-ai-mod|Rich Sutton：LLM 不是全部智能，真正的AI必须持续学习]]<span class="pd-rz">同概念:智能体 (agent)、强化学习 (reinforcement learning)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-04-a16z-fei-fei-li-the-race-to-build-world-model|Atlas:让 AI 预测世界的下一个视角]]<span class="pd-rz">同嘉宾:Justin Johnson · 同公司:World Labs · 同概念:Marble、世界模型 (world model)</span>
- [[2025-11-16-lennys-the-godmother-of-ai|AI 教母李飞飞:从 ImageNet 到空间智能]]<span class="pd-rz">同公司:World Labs · 同概念:Marble</span>
- [[2026-07-28-a16z-fei-fei-li-on-spatial-intelligence-and-r|李飞飞谈空间智能:机器人不需要完美,需要的是反事实推理]]<span class="pd-rz">同公司:World Labs · 同概念:Marble</span>

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
