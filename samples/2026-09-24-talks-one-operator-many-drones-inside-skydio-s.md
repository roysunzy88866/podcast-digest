---
title: 当无人机变成基础设施：给机队下指令的人
podcast: 精选演讲
date: 2026-09-30
source_url: undefined
duration: "20:38"
type: episode
cover: "#64748b"
description: Skydio 演讲者现场演示用键盘同时指挥三架无人机自主执行任务，讲清无人机基础设施背后的自主系统、世界模型与云端智能体编排。
guests: ["[[Suchet Bargoti]]"]
companies: ["[[Skydea]]"]
concepts: ["[[无人机基础设施]]", "[[智能体]]", "[[自主性]]", "[[强化学习]]", "[[世界模型]]", "[[VLM]]", "[[端到端训练]]", "[[机坞]]", "[[学习飞轮]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-24-talks-one-operator-many-drones-inside-skydio-s#post","headline":"当无人机变成基础设施：给机队下指令的人","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-24-talks-one-operator-many-drones-inside-skydio-s","mainEntityOfPage":"https://talk.solomind.cc/2026-09-24-talks-one-operator-many-drones-inside-skydio-s","description":"Skydio 演讲者现场演示用键盘同时指挥三架无人机自主执行任务，讲清无人机基础设施背后的自主系统、世界模型与云端智能体编排。","datePublished":"2026-09-30","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Suchet Bargoti"},{"@type":"Organization","name":"Skydea"},{"@type":"Thing","name":"无人机基础设施 (drones infrastructure)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"自主性 (autonomy)"},{"@type":"Thing","name":"强化学习 (reinforcement learning)"},{"@type":"Thing","name":"世界模型 (world model)"},{"@type":"Thing","name":"VLM"},{"@type":"Thing","name":"端到端训练 (end to end)"},{"@type":"Thing","name":"机坞 (dock)"},{"@type":"Thing","name":"学习飞轮 (learning flywheel)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"当无人机变成基础设施：给机队下指令的人","item":"https://talk.solomind.cc/2026-09-24-talks-one-operator-many-drones-inside-skydio-s"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当无人机变成基础设施：给机队下指令的人</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 当无人机变成基础设施：给机队下指令的人

<div class="pd-byl"><b>Suchet Bargoti</b> · Skydio · 2026-09-30</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-24-talks-one-operator-many-drones-inside-skydio-s.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">界面会变得非常高层。它可以是一个小的 Slack 机器人,说:嘿,这里发生了事,要不要派架无人机过去?你甚至可能不知道无人机已经起飞了。</div><div class="a">— Suchet Bargoti <button class="pd-ts" data-t="04:45" data-who="Suchet Bargoti" data-en="The interface becomes really high level. It could be a little slack bot that says, hey, something's happened here. Why don't we go send a drone? And you might not even know that the drone launched." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Suchet Bargoti]]
>
> **公司** [[Skydea]]
>
> **概念** [[无人机基础设施]] · [[智能体]] · [[自主性]] · [[强化学习]] · [[世界模型]] · [[VLM]] · [[端到端训练]] · [[机坞]] · [[学习飞轮]]

这一集是一场现场演示:演讲者站在台上,用一台笔记本和键盘,同时指挥三架分布在加州、科罗拉多的无人机自主飞行——一架在城市上空巡查、追踪车辆,一架响应电力线火情,第三架从总部起飞。他合上电脑说:就算我现在关机,一切也会在幕后安全完成。说这话的人是美国最大无人机制造商 Skydio 的人,他们做的事叫「[[无人机基础设施|无人机基础设施]]」——数千架无人机停放在全国各地的[[机坞|机坞]]站里,服务电力公司、公共安全部门和建筑公司。

这不是概念演示,全是生产系统。有三个真实场景:

- **电力巡检**:客户在发电站旁部署机坞做日常巡逻,无人机发现一根电线杆正从内部燃烧——随时可能倒下引发火灾,不派人到现场根本发现不了。
- **警方追踪**:旧金山警局用无人机跟丢被偷的车。车里的人在换车牌、贴车膜,全程不知道自己被跟踪。警方因此可以战略性地选最安全的位置、在恰当时机介入,而不是来一场危险的高速追车。
- 规模上:机坞部署在阿拉斯加的严寒和德克萨斯的酷热里,可靠性要做到 99.9999%(靠模拟测试验证);如今约 1600 万人生活在距这套基础设施两英里半径内。

## 为什么「一人一机」的模式撑不住

十五年前无人机是爱好者玩具,十年前变成装在卡车里的工具——但模式一直是「一个专职飞手配一台无人机」。演讲者自己考过认证,他说飞好一台无人机要好几个小时,戴上 FPV(第一人称视角)设备更难。问题是:911 报警电话和警报越多,这个模式就越崩溃,它无法扩展。

所以他们在做的转换是:从「第一人称操控」变成「多[[智能体|智能体]]指挥视图」——你带着一个目标指挥整个机队,不用管飞行本身。未来的界面可能只是一个 Slack 机器人说「这里出事了,派架无人机过去?

」,你甚至不知道无人机已经起飞了。安全不再由飞手决定,而由自主系统决定。

## 可靠性从哪来:全栈掌控 + 学习飞轮

Skydio 的行业优势在于同时掌控硬件、软件、云和用户界面。自主飞行需要「很多个九」的可靠性:视觉系统要在高海拔、多云、高速、雨天都看清环境并正确行动;城市里的 GPS 很烂,要稳健导航;还要在大量遮挡下持续跟踪目标。

关键机制是一个[[学习飞轮|学习飞轮]],类似 Google 街景:每次飞行都记录数据,回来脱敏(确保不留私人信息、客户清楚共享了什么),然后把「我们指令是这样、无人机却那样做了」的偏差回馈给[[强化学习|强化学习]]系统,重新训练、评估、再部署。而且[[自主性|自主性]]分两层——即时的自主动作在无人机边缘端完成,云端则放 GPU 和推理引擎,承担更重的计算和长期规划。这带来一个新问题:云端智能体能不能用,取决于传上去的数据质量,所以他们投入大量精力在低带宽下把视频编码成更小体积、解码后仍保持高质量。

## 系统里的三种「模型」

**[[世界模型|世界模型]](以地图为载体)**:和 Waymo 类似——有世界地图,做局部感知加全局规划,不能靠撞墙绕路。他们把建筑数据、电线和道路的矢量数据等先验信息合并成可规划的地图,无人机随时知道这张地图。地图会过时,但机队就是「天空中的眼睛」:有无人机飞过发现一个此前未知的新工地,降落提交数据后,下一次迭代全机队都用上更新后的地图。

**跟踪与感知模型**:更传统的机器学习推理,能跟踪被建筑物遮挡的物体——隐式表示是「它跑到楼后面,可能从另一边出来,我该移动位置跟上」。五年前这要手动工程化,现在用强化学习和[[端到端训练|端到端]]方法,不用穷举边界情况就能应对雨雪昼夜、纯视觉条件。算力也分层:边缘端跑轻量跟踪,云端跑更重的模型如 [[VLM|VLM]](视觉语言模型),响应速率只有 7 到 10 赫兹、延迟 1 到 2 秒,但足够做「往哪边移动」的大方向决策。

**智能体 + 工具**:对基础设施客户做大量语义推理——无人机接到「去看这条线,出问题了」的指令后,要到达、理解场景、在场景内行动。实际案例:用户输入「找白色吉普车」,VLM 在画面里找到目标,然后自己调用无人机 API 和跟踪跟随工具完成任务——没有任何专门编码的规则,思路就是给智能体它需要的所有工具,让它根据无人机状态和上下文自己做决策。

## 端到端的诱惑与边界

长期愿景当然是自动驾驶社区常说的那个:给原始传感器数据,直接出完美动作。他们在用强化学习大量测试这条路。

但物理系统的现实是:完全端到端的系统,出了问题难以观测、可靠性难以保证——这在今天非常困难。所以他们的策略是弄清楚端到端流程中哪些环节应该换成世界模型表示,判断标准很实际:凡是总要说「这段我得手动工程化、得专门编码、得写这些规则」的地方,比如搜救(找树,找不到就看下面,再打开热成像,还没有就去那边看)——他们正试图摆脱代码里所有这些 if 语句和分支策略,让智能体拿着高级工具去执行高层指令。

除了四旋翼,他们也在做更小体积的四旋翼,并开始研究固定翼,全部面向基础设施场景:从任何地方发射、任何地方回收,系统暴露基础交互 API,云端智能体接入并做决策——最终让人与无人机协作时可以「非常高层地思考」。

## 本集带走

- **「一人一机」是扩展瓶颈**:飞手是稀缺技能,报警和警报一多模式就崩;出路是把第一人称操控换成带目标的机队级指挥,安全由自主系统兜底。
- **分层自主**:即时动作放无人机边缘端,重计算和长期规划放云端;云端智能体的价值上限取决于上行数据质量——低带宽下的视频编码优化是实打实的投资项。
- **用机队养地图**:地图必然过时,但整支机队每次飞行都在发现现实与地图的差异,回传后全队下一次迭代即用上最新版。
- **端到端不是信仰,是取舍**:可观测性和可靠性保证是端到端的硬伤;凡是需要写 if 分支的地方(如搜救),就该交给带工具的智能体而不是手写规则。
- **学习飞轮是护城河**:记录每次飞行的「指令 vs 实际行为」偏差,脱敏后回灌强化学习,每次任务都让系统更稳。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">界面会变得非常高层。它可以是一个小的 Slack 机器人,说:嘿,这里发生了事,要不要派架无人机过去?你甚至可能不知道无人机已经起飞了。</span>  
> *The interface becomes really high level. It could be a little slack bot that says, hey, something's happened here. Why don't we go send a drone? And you might not even know that the drone launched.*  
> <span class="qm">—— Suchet Bargoti · [04:45]</span> ^q1

> <span class="qz">今天,每个人都需要成为一名专职飞手,我经历过认证流程,还要考虑安全标准。但你可以想象,几年之后,安全将由自主系统来决定。</span>  
> *Today, everyone needs to be a dedicated pilot. I went through a certification exercise. I need to think about the safety standards here, but you can imagine in a few years' time, the safety is gonna be determined by the autonomous system.*  
> <span class="qm">—— Suchet Bargoti · [04:32]</span> ^q2

> <span class="qz">而今天,大约有 1600 万人生活在距离这套基础设施两英里半径的范围内。</span>  
> *And today we have about 16 million people living within two miles radius of this infrastructure.*  
> <span class="qm">—— Suchet Bargoti · [07:29]</span> ^q3

> <span class="qz">进来的 911 报警电话越多、能进来的警报越多,这其实无法扩展。</span>  
> *The more 911 calls that come in, the more alerts that can come in, it doesn't really scale.*  
> <span class="qm">—— Suchet Bargoti · [08:20]</span> ^q4

> <span class="qz">所以我们正在重新思考:如何把最初的第一人称操控模式,转换成一种更具战略性的多智能体视图,让你可以带着一个目标指挥整个机队,而不用担心飞行本身。</span>  
> *So we're kind of rethinking as to what this means in terms of this initial first-person viewing engagement with these systems to how do we convert this to a most strategic multi-agent view that you can kind of command the entire fleet with an objective in mind without having to worry about the flight.*  
> <span class="qm">—— Suchet Bargoti · [08:26]</span> ^q5

> <span class="qz">这是一个学习飞轮:我们出去、收集数据、执行任务再回来,这样每次飞行都可以记录数据,有点像 Google 街景——我们要对数据做脱敏,确保不留私人信息。</span>  
> *This is a learning flywheel that we're getting out there, we're collecting data, we're operating, and we're coming back and doing that so that each flight we can log the data, kind of like Google Street View where we need to think about sanitizing that data, make sure there's no private information left there.*  
> <span class="qm">—— Suchet Bargoti · [10:41]</span> ^q6

> <span class="qz">我们正试图摆脱代码里所有这些 if 语句和分支策略,而是让智能体拥有一些高级工具,能够对无人机下达这些非常高级的指令。</span>  
> *We're trying to get away from having to have all these if statements in the code and these branching strategies and kind of let the agent have some high-level tools to be able to instruct these very high-level commands for the drone.*  
> <span class="qm">—— Suchet Bargoti · [19:10]</span> ^q7

> <span class="qz">它找到目标后,就能访问让无人机跟踪跟随的工具——这不需要对规则做任何专门编码,而是用更智能体的方式:给智能体它需要的所有工具,让它根据无人机状态和可用的信息与上下文自己做决策。</span>  
> *It finds something, then it has access to the tools that allow the drone to track and follow, and that's without any specific coding of that rules, but instead having a more sort of agentic, giving the agents all the tools that it needs to be able to understand the drone state and make decisions given the information and the context that's available there.*  
> <span class="qm">—— Suchet Bargoti · [17:21]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-04-yc-waymo-co-ceo-dmitri-dolgov-move-fast-and|Waymo 谈物理 AI 的七条实战教训]]<span class="pd-rz">同概念:世界模型 (world model)、智能体 (agent)、端到端 (end-to-end)</span>
- [[2026-09-01-twiml-world-models-and-the-future-of-spatial-a|Justin Johnson：世界模型不只有一种，而语言模型做不到这些]]<span class="pd-rz">同概念:世界模型 (world model)、智能体 (agent)、强化学习 (reinforcement learning)</span>
- [[2026-07-09-talks-a-conversation-with-replit-s-president-a|从快倒闭到剑指十亿美元ARR:Replit Agent的生死豪赌]]<span class="pd-rz">同概念:智能体 (agent)、自主性 (autonomy)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-27-lennys-pricing-and-scaling-your-ai-product-madh|AI 定价的黄金象限：别把 20% 的价值白送]]<span class="pd-rz">同概念:智能体 (agent)、自主性 (autonomy)</span>
- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同概念:智能体 (agent)</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:智能体 (agent)</span>

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
