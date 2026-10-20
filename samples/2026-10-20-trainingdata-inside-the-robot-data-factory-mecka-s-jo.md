---
title: 给机器人补课：一家公司如何把人类变成“数据工厂”
podcast: Training Data
date: 2026-10-20
source_url: undefined
duration: "44:38"
type: episode
cover: "#64748b"
description: Mecka 创始人 Josh Gao 讲述如何给人类装上传感器、采集第一人称数据，来教会机器人理解物理世界。
host: "[[Josh Gao]]"
companies: ["[[Mecca]]"]
concepts: ["[[数据工厂]]", "[[自我中心数据]]", "[[遥操作]]", "[[力觉数据]]", "[[UMI 数据]]", "[[机器人基础模型]]", "[[世界模型]]"]
category: 创业与行业
tags:
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-20-trainingdata-inside-the-robot-data-factory-mecka-s-jo#post","headline":"给机器人补课：一家公司如何把人类变成“数据工厂”","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-20-trainingdata-inside-the-robot-data-factory-mecka-s-jo","mainEntityOfPage":"https://talk.solomind.cc/2026-10-20-trainingdata-inside-the-robot-data-factory-mecka-s-jo","description":"Mecka 创始人 Josh Gao 讲述如何给人类装上传感器、采集第一人称数据，来教会机器人理解物理世界。","datePublished":"2026-10-20","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Josh Gao"},{"@type":"Organization","name":"Mecca"},{"@type":"Thing","name":"数据工厂 (data factory)"},{"@type":"Thing","name":"自我中心数据 (egocentric data)"},{"@type":"Thing","name":"遥操作 (teleoperation)"},{"@type":"Thing","name":"力觉数据 (force data)"},{"@type":"Thing","name":"UMI 数据 (UMI data)"},{"@type":"Thing","name":"机器人基础模型 (robotics foundation models)"},{"@type":"Thing","name":"世界模型 (world models)"}],"articleSection":"创业与行业"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"创业与行业","item":"https://talk.solomind.cc/tags/创业与行业"},{"@type":"ListItem","position":3,"name":"给机器人补课：一家公司如何把人类变成“数据工厂”","item":"https://talk.solomind.cc/2026-10-20-trainingdata-inside-the-robot-data-factory-mecka-s-jo"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>给机器人补课：一家公司如何把人类变成“数据工厂”</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 给机器人补课：一家公司如何把人类变成“数据工厂”

<div class="pd-byl"><b>Josh Gao</b> · Mecka 创始人 · 2026-10-20</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-20-trainingdata-inside-the-robot-data-factory-mecka-s-jo.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">机器人技术领域的大问题在于，我们没有 LLM 曾有的互联网那样的冷启动的奢侈条件。</div><div class="a">— Josh Gao <button class="pd-ts" data-t="01:57" data-who="Josh Gao" data-en="The big problem across robotics is that we don't have the luxury of the cold start that LLMs had with the internet." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Josh Gao]]
>
> **公司** [[Mecca]]
>
> **概念** [[数据工厂]] · [[自我中心数据]] · [[遥操作]] · [[力觉数据]] · [[UMI 数据]] · [[机器人基础模型]] · [[世界模型]]

大语言模型走运：互联网上有现成的几万亿词可用。

机器人没这个福气——它需要的是像素、动作和逻辑，这些数据得花钱、花人力去采集。

[[Josh Gao|Josh Gao]] 创办的 Mecka 就是为机器人补上这一课的公司：生产采集硬件、组织全球的采集者、再把数据清洗后授权给[[机器人基础模型|机器人基础模型]]公司。

这期 Training Data 播客里，他和投资人 Sonya 聊了[[数据工厂|数据工厂]]怎么运转、机器人离进你家厨房还有多远。

## 为什么“第一人称数据”是个大赌注

机器人看世界的方式和人不一样，但可以教它用人的视角看。

所谓“以自我为中心的数据”，就是人戴着相机、以第一人称视角录下自己做饭、打扫、干活的过程 <button class="pd-ts" data-t="08:49" data-who="嘉宾" data-en="Why did you decide to bet the company on it at the beginning? Egocentric data is pretty much video data from humans demonstrating and doing tasks from a first person POV." aria-label="回原文"></button>。

当初行业主流是[[遥操作|遥操作]]——人操控机器人做示范——但很难规模化。

Josh 的想法简单：**人形机器人和人长得一样，为什么不把成千上万人变成一支采集车队**，像 Tesla 用路上跑的车那样学习 <button class="pd-ts" data-t="09:43" data-who="嘉宾" data-en="And I think some of our early intuitions were that Humans and robots share a lot of similarities. Humanoids were just starting to take off." aria-label="回原文"></button>？

最早的试验品是一个手机应用，找来一堆华人叔叔阿姨录自己做家务的视频。如今已进化成整套自研硬件。

## 光有视频不够，还得知道“用了多大力”

拿鸡蛋要轻，拧瓶盖要巧——这些是力道，视频拍不出来。

目前的替代方案是在手腕上装相机，观察手和物体接触的瞬间，但这终究是绕路 <button class="pd-ts" data-t="11:01" data-who="嘉宾" data-en="How important is capturing force data and how do you think about getting that? I think some of the substitutes for force data that we've seen would be approaches like wrist cameras currently across both humans and robots and being able to see the contact time between the hand and the different objects that you interact with." aria-label="回原文"></button>。

Josh 认为[[力觉数据|力觉数据]]会极其重要。==问题是市面上根本买不到能可靠记录日常用力大小的手套==，Mecka 只能自己设计生产 <button class="pd-ts" data-t="13:50" data-who="嘉宾" data-en="And that is that a lot of the things that we have to distribute into the world didn't exist until we designed and produced this hardware. Even across tactile gloves is a fantastic example." aria-label="回原文"></button>。

## 数据工厂到底怎么运转？

两条路并行。对个人，下载应用、注册职业，系统派发任务——整理卧室、做早餐、收拾干净——就能开始贡献数据换钱 <button class="pd-ts" data-t="12:36" data-who="嘉宾" data-en="And so through direct mobile apps, can you sign up from anywhere in the world? Can you start contributing? Can you register which profession you're in?" aria-label="回原文"></button>。

对企业，Mecka 建了一支商务团队，按“人类所有体力劳动”的图谱去签面包店、电路板产线等各种场所。

它会维护一张岗位热力图，发现哪类数据稀缺，就专门去补。

真苦的是后台：

硬件要自己造，要分发到成千上万个家庭和企业，有的地方专门拉了 100 千兆的上传专线，来应付几百拍字节的原始数据 <button class="pd-ts" data-t="14:27" data-who="嘉宾" data-en="And that becomes this logistics of distributing into these thousands of homes, thousands of businesses to collect that, to upload that. We've had to set up these 100 gigabyte upload lines in a lot of the places that we operate in just to sustain the hundreds of petabytes of data that we have to deal with at this point." aria-label="回原文"></button>。

## 想赚钱的人多了，造假也来了

质量是移动靶。真实世界的边缘情况层出不穷，上周管用的标准这周可能就失效。

**最被低估的问题是欺诈：有人录下 YouTube 上“在麦当劳打工”的第一人称视频**，冒充自己的贡献提交上来 <button class="pd-ts" data-t="17:10" data-who="嘉宾" data-en="And so when you are, you're coming across very creative and- Like people are sending generated videos or what? Yeah, very creative people where I think at one point we have folks recording YouTube videos like POV working at McDonald's and trying to submit that as contribution pretty much." aria-label="回原文"></button>。

对策是自动检测启发式规则加快速升级机制，还要派人到采集现场亲眼看。激励模型也得设计好，让人愿意认真干活。

## 中介的利润会不会被挤没？

Josh 不担心。

他解释，付给贡献者的钱在整个成本里并不是大头，**护城河在于用对的硬件、运营和软件，大规模产出可验证的高质量数据** <button class="pd-ts" data-t="17:48" data-who="嘉宾" data-en="You have to figure out an incentive model that actually incentivizes people to create good contribution. How do you think about your right to earn a margin long-term?" aria-label="回原文"></button>。

而且产品会升级：从路边中餐馆的数据，逐步走向米其林餐厅；从普通网球爱好者，走向接近 Federer 水准的动作数据。

越难的东西越稀缺。

## 机器人离“会叠衣服”还有多远？

先看一组对比：两年前学界最大的第一人称数据集 Ego4D 是 4000 小时，现在已经进入数百万小时时代 <button class="pd-ts" data-t="19:31" data-who="嘉宾" data-en="And how much data do you think is going to be collected over the next few years? I think we finally entered a world where we are in millions of hours of data. And coming from the world where Ego4D of 4,000 hours two years ago, where we were then, is a huge step up." aria-label="回原文"></button>。听起来很多？

Tesla 为解决“加速和转向”两个自由度，花了十多年、靠上百万辆车，积累的视频远不止几百万小时。

而机器人一只手就有几十个自由度。

Josh 的框架是不搞“一夜成功”：**先解锁约束强、有现成操作规范的任务，比如产线上的抓取和包装**，“一两年内能做到” <button class="pd-ts" data-t="23:12" data-who="嘉宾" data-en="We spent about a year and a half plus trying to solve, and I think it will absolutely get solved in the near term. A lot of these pick and place, these packaging tasks that you see on assembling lines that had to be manipulation bots that couldn't be solved by traditional robotics, we will get there within the next year or two." aria-label="回原文"></button>。

叠衣服他花了一年多还没完全攻克，但相信近期会解决。家庭反而是最难、最需要谨慎的环境——机器人绝不能摔到婴儿身上。

## 会被 AGI 实验室碾压吗？

最新的多模态大模型在机器人任务上表现亮眼，有人担心专业机器人公司会被“苦涩的教训”碾过去。

Josh 不惊讶：训练配方里本来就加进了大量机器人数据，泛化是意料之中的事 <button class="pd-ts" data-t="40:48" data-who="嘉宾" data-en="Is that fair? It's actually quite expected when you think about it. Very interesting." aria-label="回原文"></button>。

他判断**通用模型会擅长很多事，但针对特定任务的专门模型可以做到“四个 9”级别的可靠性**，两者会并存。

未来的方向是全能模型：输入可以是力觉、像素，甚至极端情况下的气味，输出是动作或语音 <button class="pd-ts" data-t="38:34" data-who="嘉宾" data-en="I like the approach, a lot of the models converging towards an omnimodel approach, and where you can feed it any type of input that is the observation, whether it is force, pixel, even smell in a very extreme case." aria-label="回原文"></button>。

## 本集带走

- 机器人训练数据的配方已初步收敛：约百万小时的人体多模态数据、数万小时 [[UMI 数据|UMI 数据]]，再加少量最后一段的遥操作和同环境数据，但触觉、仿真等新料还会入锅 <button class="pd-ts" data-t="32:58" data-who="嘉宾" data-en="I think what we're seeing is a convergence across what that recipe might be today. And that does look like some version of a million hours of human data across egocentric and different types of modalities." aria-label="回原文"></button>。
- Mecka 的壁垒不在贡献者网络，而在自研硬件、质量门控和端到端运营。
- 机器人落地是渐进的：先工业场景和有操作规范的受限任务，家庭最后。
- 数据工厂的隐形敌人是造假者——连第一人称打工视频都有人盗来交差。
- Josh 的十年预言：机器人的数量会比人多许多倍，包括会跳过小溪的“豹犬马”。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">机器人技术领域的大问题在于，我们没有 LLM 曾有的互联网那样的冷启动的奢侈条件。</span>  
> *The big problem across robotics is that we don't have the luxury of the cold start that LLMs had with the internet.*  
> <span class="qm">—— Josh Gao · [01:57]</span> ^q1

> <span class="qz">所以我认为，本着同样的思路，人脑只靠 20 瓦就能运转。</span>  
> *And so I think in the same vein for us, that is the human brain runs on just 20 watts.*  
> <span class="qm">—— Josh Gao · [05:04]</span> ^q2

> <span class="qz">为什么我们不能把人类变成 Tesla 那种车队式的学习，让所有人都能为理解世界物理特性并为其提供基础数据做出贡献？</span>  
> *Why couldn't we turn humans into this fleet-style learning that Tesla has to be able to all contribute into understanding and ground the physics of the world?*  
> <span class="qm">—— Josh Gao · [09:50]</span> ^q3

> <span class="qz">说到底，我们是在给人类加装传感器，这是更广义的类别。</span>  
> *And ultimately, we're sensorizing humans, and that's the broader category.*  
> <span class="qm">—— Josh Gao · [10:34]</span> ^q4

> <span class="qz">我们不得不在我们运营的很多地方架设这些 100 GB 的上传线路，仅仅是为了支撑此时我们必须处理的数百 PB 的数据。</span>  
> *We've had to set up these 100 gigabyte upload lines in a lot of the places that we operate in just to sustain the hundreds of petabytes of data that we have to deal with at this point.*  
> <span class="qm">—— Josh Gao · [14:27]</span> ^q5

> <span class="qz">我们最终是在创造尚不存在的数据，这不同于当你在过滤互联网内容的时候。</span>  
> *We're ultimately creating data that doesn't exist yet versus when you're filtering through the internet.*  
> <span class="qm">—— Josh Gao · [16:59]</span> ^q6

> <span class="qz">所以相对而言，我们距离最终必须达到的水平还有好几个数量级。</span>  
> *So relatively, we're still many orders of magnitudes away from where we have to be ultimately.*  
> <span class="qm">—— Josh Gao · [20:06]</span> ^q7

> <span class="qz">很多这类抓取和放置、你在装配线上看到的那些包装任务，必须是操作机器人才能做、传统机器人学解决不了的任务，我们会在未来一两年内达到那个水平。</span>  
> *A lot of these pick and place, these packaging tasks that you see on assembling lines that had to be manipulation bots that couldn't be solved by traditional robotics, we will get there within the next year or two.*  
> <span class="qm">—— Josh Gao · [23:12]</span> ^q8

> <span class="qz">我们在公司全员大会上开的一个玩笑是：如果有一天 Mecca 能帮忙部署一台开采小行星的机器人，那我们大概就干得相当不错了。</span>  
> *A joke that we make in some of our all hands in the company would be if one day Mecca was able to help deploy a robot that mines an asteroid, we've probably done a pretty good job.*  
> <span class="qm">—— Josh Gao · [29:23]</span> ^q9
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
