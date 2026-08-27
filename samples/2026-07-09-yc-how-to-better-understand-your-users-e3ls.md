---
title: 点图：看透单个用户行为的可视化工具
podcast: Y Combinator Startup Podcast
date: 2026-08-28
source_url: undefined
duration: "13:39"
type: episode
cover: "#64748b"
image: "/covers/2026-07-09-yc-how-to-better-understand-your-users-e3ls.jpg"
description: "Dave（曾在 Google Photos 和 Bump 工作的创业者）讲了一个叫\"点图\"的方法，用二维网格逐天追踪每个用户的行为，从汇总指标里看不出的问题一眼就能发现。"
concepts: ["[[点图]]", "[[DAU]]", "[[队列留存曲线]]"]
category: 增长与销售
tags:
  - 增长与销售
socialImage: "https://talk.solomind.cc/covers/2026-07-09-yc-how-to-better-understand-your-users-e3ls.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-09-yc-how-to-better-understand-your-users-e3ls#post","headline":"点图：看透单个用户行为的可视化工具","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-09-yc-how-to-better-understand-your-users-e3ls","mainEntityOfPage":"https://talk.solomind.cc/2026-07-09-yc-how-to-better-understand-your-users-e3ls","description":"Dave（曾在 Google Photos 和 Bump 工作的创业者）讲了一个叫\"点图\"的方法，用二维网格逐天追踪每个用户的行为，从汇总指标里看不出的问题一眼就能发现。","datePublished":"2026-08-28","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-07-09-yc-how-to-better-understand-your-users-e3ls.jpg","about":[{"@type":"Thing","name":"点图 (dot plot)"},{"@type":"Thing","name":"DAU"},{"@type":"Thing","name":"队列留存曲线 (cohort retention curves)"}],"articleSection":"增长与销售"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"增长与销售","item":"https://talk.solomind.cc/tags/增长与销售"},{"@type":"ListItem","position":3,"name":"点图：看透单个用户行为的可视化工具","item":"https://talk.solomind.cc/2026-07-09-yc-how-to-better-understand-your-users-e3ls"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>点图：看透单个用户行为的可视化工具</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 点图：看透单个用户行为的可视化工具

<div class="pd-byl">2026-08-28</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-09-yc-how-to-better-understand-your-users-e3ls.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我看到的创始人犯的最大错误之一是依赖汇总用户指标，而不是理解单个用户如何使用他们的产品。</div><div class="a">— SPEAKER_01 <button class="pd-ts" data-t="00:09" data-who="SPEAKER_01" data-en="One of the biggest mistakes I see founders make is relying on aggregate user metrics instead of understanding how any individual users use their product." aria-label="回原文"></button></div></div>

> [!info] 关联
> **概念** [[点图]] · [[DAU]] · [[队列留存曲线]]

Dave 做过一款叫 Bump 的产品，后来在 Google Photos 负责用户增长。他说创始人最容易犯的一个错误，就是只看 [[DAU|DAU]]（日活跃用户数）、MAU 这类汇总指标——这些数字把所有用户搅在一起，只要有增长，曲线就往右上走，但你根本不知道单个用户到底在怎么用你的产品、用了什么功能、使用频率和节奏如何 <button class="pd-ts" data-t="00:09" data-who="Unknown" data-en="One of the biggest mistakes I see founders make is relying on aggregate user metrics instead of understanding how any individual users use their product. In my last video, I talked about cohort retention curves and how you can use those to separate groups of users and track what they do over time throughout using your product." aria-label="回原文"></button>。

他推荐的工具叫[[点图|点图]]。做法很简单：画一个二维网格，像电子表格一样，每一行是一个用户，每一列是一个时间单位（通常用天）。

然后选一个你认为代表产品核心价值的事件——比如音乐应用就是"听一首歌"，照片应用就是"分享一张照片"——用户在哪天做了这件事，就在对应格子里放一个点。用户第一天使用的那天，可以在点外面加个圆圈做标记 <button class="pd-ts" data-t="01:35" data-who="Unknown" data-en="So today I want to tell you about a tool that we came to in my startup that allows you to understand what's going on with individual users while also giving you a big picture view of how your entire product is performing." aria-label="回原文"></button>。

这样做出来的图，GitHub 贡献图本质上就是同一种东西，只是 GitHub 把天数按周环绕排列 <button class="pd-ts" data-t="05:17" data-who="Unknown" data-en="And you can kind of go as deep as you want on this. This idea of dot plots might be familiar to some of you. You've probably seen it at the top of GitHub pages." aria-label="回原文"></button>。

点图的价值在于让人脑自动识别模式。Dave 举了个 Spotify 的例子：画完点图后，能清楚看到一批用户只在工作日用，另一批只在周末用——这是 DAU 图表完全看不出来的差异。

知道这个之后就可以追问：哪类用户更有价值？产品是不是该针对不同场景做不同设计 <button class="pd-ts" data-t="04:03" data-who="Unknown" data-en="Okay, so let's look at this example I've just drawn. For our Spotify app, what do we see? What patterns have emerged now that we can see individual users and their own behavior?" aria-label="回原文"></button>？

更进一步，可以用不同符号代表不同功能。比如搜索标 S、加入播放列表标 P。如果发现某个用户加入播放列表之后，连续很多天都在活跃，就能推断播放列表功能可能是驱动高频使用的因果因素，而不只是相关 <button class="pd-ts" data-t="09:11" data-who="Unknown" data-en="And you might start to see patterns. Where specific features maybe drive behaviors in the product that you actually want. Let's just say for the sake of argument that we see this one user here that joined a public playlist." aria-label="回原文"></button>。

除了追踪行为，还可以编码用户状态：iPhone 还是 Android、哪个国家、什么收入水平，用不同颜色或符号标注，然后按属性排序——比如只看 iOS 用户，或者只看某天刚注册的用户。当这种图铺满一整页的时候，人脑会注意到你事先根本想不到去查的模式 <button class="pd-ts" data-t="05:28" data-who="Unknown" data-en="They've just wrapped the days around per week. Another thing you can do is instead of just tracking user actions, you can track user state. So was this user using an iPhone or an Android phone?" aria-label="回原文"></button>。

Dave 说这个思路他最早是从 Max Levchin（PayPal 创始人之一）那里听到的。PayPal 当年有欺诈问题，不知道该找什么模式，就建了一个可视化工具把所有交易画出来，让人盯着屏幕看。

人类虽然说不清具体规则，但能一眼看出"那个东西不一样，可能是欺诈"，然后再去深挖 <button class="pd-ts" data-t="06:41" data-who="Unknown" data-en="In a way that you would never have figured out on your own a priori. This is actually an idea that I remember hearing about 10 years ago from Max Levchin, one of the founders of PayPal." aria-label="回原文"></button>。点图的逻辑一样：先看到异常模式，再去追问原因 <button class="pd-ts" data-t="07:17" data-who="Unknown" data-en="And then they would go and dig into that. It's kind of the same idea with dot plots. You can look at these charts and figure out, huh." aria-label="回原文"></button>。

他画了个对比：同样那批用户，DAU 图表就是一条几乎不动的小折线，告诉你"没增长、有几个用户"，仅此而已。但点图给了你丰富得多的理解——你能推断出用户的生活习惯、使用场景 <button class="pd-ts" data-t="07:29" data-who="Unknown" data-en="And then you can go dig into it a lot deeper. So to illustrate the point I was talking about where dot plots give you a lot more granularity about what's going on with the users, let's draw the DAU graph for these users." aria-label="回原文"></button>。

点图在早期特别好用，因为用户少，所有人所有天的行为能一屏看完。但 Dave 说它在 Google Photos 也用过，当时用户远超十亿，做法是对用户群抽样，打印出几十张点图——"这是法国的 iOS 用户""这是美国年收入超过 8 万美元的网页用户"——团队花一整天坐在办公室看图、找结论 <button class="pd-ts" data-t="09:52" data-who="Unknown" data-en="That's really great. But it actually does scale to when you have thousands or millions or billions of users. This is a tool that we used at Google Photos when we had well more than a billion users." aria-label="回原文"></button>。

B2B 产品同样适用。他举了最近一期 YC 里一家公司的例子：签了一个大客户，年合同 8 万美元，买了 10 个席位，后来流失了。

如果当时有点图，他们会看到：10 个席位只有 3 个被激活过，而且没人每周用超过两天，使用非常零星。真实原因是当初推动采购的那个内部支持者离职了，新人一来就问"为什么要用这个"，然后取消了续约。点图上这些信号早就有了，但公司没看到 <button class="pd-ts" data-t="10:50" data-who="Unknown" data-en="Turns out that dot plots could be really useful to you too. Let me give you a specific example. I worked with a company in the most recent YC batch that had a very name brand customer that signed up and bought their product." aria-label="回原文"></button>。

两个常见误用：第一是选错事件，比如选"打开应用"或"登录"，这些不代表用户获得了真正价值，看着满屏点但没信息量；要选真正创造价值的行为，比如听歌、分享照片 <button class="pd-ts" data-t="11:57" data-who="Unknown" data-en="So there's a few ways you can misuse dot plots. The number one thing is to just chart the wrong event. A lot of founders might want to populate their dot plot with the easiest way to populate it so it feels good and you see a lot of dots." aria-label="回原文"></button>。第二是时间粒度太粗，比如用"周"做单位，细节就被抹掉了，建议至少用天，甚至更细 <button class="pd-ts" data-t="12:25" data-who="Unknown" data-en="Listen to a song, share a photo, something like that that's a real event. The other mistake you can make is picking a time period that's too wide. Sometimes founders want to make it look better and they pick weeks, like week one, week two, week three." aria-label="回原文"></button>。

Dave 说在用户数到几百之前，点图可以是你唯一的仪表板。技术上没什么复杂的，就是解析日志填进二维网格，现在的 AI 编码工具十来分钟能写出来 <button class="pd-ts" data-t="12:41" data-who="Unknown" data-en="It's way harder to figure out what's actually going on unless you look at it at the day or maybe even like sub-day granularity. So I would go so far as to say until you have hundreds of users, the dot plot could be your only dashboard." aria-label="回原文"></button>。他建议点图和[[队列留存曲线|队列留存曲线]]配合使用：留存曲线告诉你用户群整体是否在留住，点图告诉你他们具体怎么用、为什么留或为什么走 <button class="pd-ts" data-t="13:03" data-who="Unknown" data-en="This is a thing that modern AI coding tools can whip up in like 10 minutes. These are best used in conjunction with cohort retention curves. Cohort retention curves teach you in aggregate whether groups of users that you acquire stick with you over time." aria-label="回原文"></button>。

> 【背景】Dave 指的是 Dave Morin，Bump 联合创始人，后加入 Google 负责 Google+ 等产品，这些身份信息未在转写稿中出现。YC 指 Y Combinator，全球知名的创业加速器。

## 本集带走

- **选一个代表价值的事件做点**：不是"登录""打开应用"，而是"听歌""分享照片""处理发票"这类真正说明用户在用你产品核心能力的行为
- **时间粒度至少到天**：用周做单位会抹掉使用节奏的细节，看不出问题
- **用不同符号编码功能和状态**：搜索标 S、播放列表标 P，设备/地区/收入用颜色区分，然后按属性排序，让模式自己浮现
- **B2B 也用点图盯席位激活**：买了 10 个席位的客户如果只有 3 个激活、使用零星，合同就有危险——别等续约时才吃惊
- **早期用户少时，点图当唯一仪表板**：所有用户所有天的行为一屏看完，比任何汇总指标都有信息量

<div class="pd-sec">全部金句 <span>3 条</span></div>

> <span class="qz">我看到的创始人犯的最大错误之一是依赖汇总用户指标，而不是理解单个用户如何使用他们的产品。</span>  
> *One of the biggest mistakes I see founders make is relying on aggregate user metrics instead of understanding how any individual users use their product.*  
> <span class="qm">—— SPEAKER_01 · [00:09]</span> ^q1

> <span class="qz">如果你有一定程度的增长，那些图表往往会呈上升趋势，即使用户实际上并没有享受使用你的产品。</span>  
> *And if you have any amount of growth, those graphs tend to be going up and to the right, even if users aren't actually enjoying using your product.*  
> <span class="qm">—— SPEAKER_01 · [01:14]</span> ^q2

> <span class="qz">所以我想冒昧地说，在你拥有数百名用户之前，点图可能是你唯一的仪表板。</span>  
> *So I would go so far as to say until you have hundreds of users, the dot plot could be your only dashboard.*  
> <span class="qm">—— SPEAKER_01 · [12:41]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**换个口味**

- [[2025-09-28-lennys-a-4-step-framework-for-building-delightf|Nesrine：产品愉悦感不是彩纸，是增长策略]]<span class="pd-rz">同公司:Spotify</span>
- [[2026-04-12-lennys-hard-truths-about-building-in-the-ai-era|Keith Rabois：别招大厂高管，别做客户调研]]<span class="pd-rz">同公司:PayPal</span>
- [[2026-04-22-beyondcoding-oss-expert-why-world-class-engineers-get|开源贡献的真正门槛：不是代码，是认知负荷]]<span class="pd-rz">同公司:GitHub</span>

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
  // 故再兜一条 history.length>1(站内点进必有返回历史)。命中「直开」给 body 打 .pd-direct,CSS 切显隐。
  function direct(){
    var ref = document.referrer || '';
    var fromSite = (ref.indexOf(location.origin) === 0) || history.length > 1;
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
