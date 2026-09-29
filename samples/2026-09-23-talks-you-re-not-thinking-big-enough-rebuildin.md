---
title: 用 AI 让牛自己「搬家」：把 LLM 塞进牧场轮牧
podcast: 精选演讲
date: 2026-09-29
source_url: undefined
duration: "18:08"
type: episode
cover: "#64748b"
description: Firecrawl 增长团队工程师 Cody 主张用 LLM 自动化草饲畜牧的牧场轮换，讲解轮牧瓶颈与解法。
guests: ["[[Cody Menefee]]"]
companies: ["[[Firecrawl]]", "[[OpenPasture]]", "[[Holter]]", "[[NoFence]]", "[[Pasture Bird]]"]
concepts: ["[[LLM]]", "[[上下文]]", "[[轮牧]]", "[[vibe coder]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-23-talks-you-re-not-thinking-big-enough-rebuildin#post","headline":"用 AI 让牛自己「搬家」：把 LLM 塞进牧场轮牧","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-23-talks-you-re-not-thinking-big-enough-rebuildin","mainEntityOfPage":"https://talk.solomind.cc/2026-09-23-talks-you-re-not-thinking-big-enough-rebuildin","description":"Firecrawl 增长团队工程师 Cody 主张用 LLM 自动化草饲畜牧的牧场轮换，讲解轮牧瓶颈与解法。","datePublished":"2026-09-29","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Cody Menefee"},{"@type":"Organization","name":"Firecrawl"},{"@type":"Organization","name":"OpenPasture"},{"@type":"Organization","name":"Holter"},{"@type":"Organization","name":"NoFence"},{"@type":"Organization","name":"Pasture Bird"},{"@type":"Thing","name":"LLM"},{"@type":"Thing","name":"上下文 (context)"},{"@type":"Thing","name":"轮牧 (rotational grazing)"},{"@type":"Thing","name":"vibe coder"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"用 AI 让牛自己「搬家」：把 LLM 塞进牧场轮牧","item":"https://talk.solomind.cc/2026-09-23-talks-you-re-not-thinking-big-enough-rebuildin"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>用 AI 让牛自己「搬家」：把 LLM 塞进牧场轮牧</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 用 AI 让牛自己「搬家」：把 LLM 塞进牧场轮牧

<div class="pd-byl"><b>Cody Menefee</b> · Firecrawl 增长团队工程师 · 2026-09-29</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-23-talks-you-re-not-thinking-big-enough-rebuildin.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我今天来真的就是想挑战你们:除了在又一家公司为另一个 SaaS 方案再做又一个 MCP 之外,还有其他问题值得解决。</div><div class="a">— Cody Menefee <button class="pd-ts" data-t="04:17" data-who="Cody Menefee" data-en="And I really am just here to challenge you that there are other problems to solve than just another MCP for another SaaS solution at another company." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Cody Menefee]]
>
> **公司** [[Firecrawl]] · [[OpenPasture]] · [[Holter]] · [[NoFence]] · [[Pasture Bird]]
>
> **概念** [[LLM]] · [[上下文]] · [[轮牧]] · [[vibe coder]]

这场演讲聊的不是软件，而是牛和草。说话的人叫 Cody,在 [[Firecrawl|Firecrawl]] 的增长团队——但他自我定位是「你们大多数人害怕的那种 [[vibe coder|vibe coder]]」:整天用 AI 智能体写代码,不背语法、不精通任何语言,周末照样能搞出东西。

他没有农业资历,却在纳什维尔的住宅区后院偷偷养过 10 只火鸡,还把它们装上特斯拉车顶开了三小时送去加工厂,车顶玻璃至今留着一道裂痕。他差点真去当农民,但发现靠种地赚钱太难,于是转向:不亲自养殖,而是想办法把畜牧业本身规模化。

他开场就说「你们想得不够大」:开发者社区花了太多时间在「为造软件的人造软件」上循环——又一家公司、又一个 SaaS、又一个 MCP。他想挑战的是:还有真实世界的物理问题值得解决。

## 瓶颈:轮牧太费人工

他的前提是:牲畜应该待在草地上,这对动物、消费者、农民和生态都更好。但目前 97% 的肉牛仍在饲养场育肥,只有 3% 在牧场。

为什么?劳动力是瓶颈。

把牧场做对,意味着「[[轮牧|轮牧]]」:把草场划成一个个围场(paddock,用围栏隔出的一小块放牧区),每块的草够牛吃一天,然后每天移动牛群,让草轮流休养,牧场效能会随时间提升。但这是大量体力活——每天要挪围栏、赶动物、送水、做记录。

为什么不能让牛随便吃?因为牛只挑爱吃的草、反复踩踏某些区域,牧场质量会迅速退化。而且草有生长周期:割太短恢复很慢,长太老又变苦牛不爱吃,要让草保持在「幼年期甜点区间」,牛群就得不断移动又不断回来。

## 已有方案差了「眼睛」

市场上已有虚拟围栏公司:一家叫 Halter(获得 Peter Thiel 20 亿美元估值的投资)和一家叫 [[NoFence|NoFence]]。它们给动物戴上连 GPS 卫星的项圈,让你画出虚拟边界、远程移动牛群。

但有个关键缺口:你得知道该把牛移到哪儿。这不是一门精确的科学——草每天长势都不一样,受干旱、降雨、放牧压力影响。

如今这个决策靠农民走到草地上,用眼睛看草,凭直觉决定下一步。所以核心问题变成:**如何取代农民在牧场上的眼睛**。

Cody 评估了几条路:
- **无人机正射影像图**:图像保真度高,但要教农民飞无人机、有视线内飞行等监管问题,且目前世界上没有任何司法管辖区批准自主无人机用于这类应用——是个大瓶颈。
- **卫星**:他目前最喜欢的选项。

有一家叫 Planet 的公司每天以 1 米×1 米分辨率拍整个地球,但卫星太高,有些决策需要的信息分辨不出来。
- **参照物相机**:他朋友在密苏里林肯大学做研究助理,思路是在树旁放个追踪相机加测量装置,以参照物判断草的高度、观察草长回来的情况。

## 把 LLM 放进循环中心

如果草情数据和项圈问题都解决了,就可以把一个 [[LLM|LLM]] 放进循环中间,做自主放牧:由它每天给出「牛群下一个最佳位置」的建议。这是多变量分析——输入包括牛群 GPS 位置、昨天在哪、明天可能去哪、当地干旱状况、全农场的草高;而且决策分多层次:某头牛的最佳位置、牛群相对牧场的最佳位置、相对整个生态系统的位置。

这些因素互相反馈,优化整幅图景后,你就能**在更少的英亩上养更多的牛**——这才是草饲系统能与饲养场模式竞争、实现规模化的方式。

要做成这件事,他认为有三个主要阻碍:

1. **知识库**:大量关于何时移、为何移、怎么移的知识,全锁在 YouTube 视频里——密苏里、田纳西、肯塔基那些老农民每天移动牛群、边做边讲。他用 Firecrawl 抓取这些视频和存档中的研究论文,建了开源项目 [[OpenPasture|OpenPasture]] 来存放,供农民使用。
2. **可视化层**:要用传感器替代农民的直觉,弄清两件事——生物量(有多少植被可供食用)和牧场的生物多样性。过度放牧会让草场过度偏向某些冷季草、暖季草或豆科植物;理想状态是一片均衡多样的牧场,牛从草本身获得全部宏量和微量营养素,不用补充干草和矿物,整个系统无需人工干预。
3. **开放的项圈**:他对 Halter、NoFence 有强烈不满——要用它们的软件就必须买它们的项圈,且不许接入你自己的软件。商业上他理解,行业上这很碍事。他想在软件层创新,把 LLM 预测的 GPS 位置推到项圈上。所以这是一次行动号召:「我需要有人给我做一个开放的项圈,API 开放、专利开放,让我们在软件层竞争。」他还提到农民对 John Deere 和「维修权」问题的普遍敌意。

## 不止牛:叠加物种

这套轮牧逻辑还能叠加物种。一家叫 [[Pasture Bird|Pasture Bird]] 的公司(让 Cody 对这个想法着迷的催化剂)把鸡舍装上大轮子,自动化移动,每 24 小时在牧场上爬行移动一个自身宽度。鸡是杂食动物,营养靠谷物饲料补充,所以可以这样机械化;鸡粪里的氮又成了草的肥料。

把反刍动物和鸡叠起来还有额外好处:牛先吃掉草的顶端,鸡跟在后面从牛粪里啄食寄生虫,整个农场的寄生虫负荷下降,药费随之减少;长期还会得到更强健的种畜,需要更少干预,放着吃草就行。

## 本集带走

- **轮牧是草饲畜牧的核心,但劳动力是瓶颈**:把草场划成围场、每天移动牛群,能让草轮流休养、持续高产,但每天挪围栏、赶牛、送水的活没人爱干。
- **虚拟围栏项圈(GPS 项圈画虚拟边界、远程移牛)已有公司在做,缺的是「眼睛」**:远程决策需要知道草的高度和长势,而今天的解法还是农民用肉眼+直觉。
- **LLM 适合这类「无标准答案」的问题**:下一块草场该去哪,不存在确定性算法能算出的最优解,只有基于多变量(草高、干旱、牛群位置)的最佳猜测——让 LLM 给建议、人来做确认,就能突破农民个人劳动力的上限。
- **数据收集本身就是头号问题**:Cody 用 Firecrawl 抓 YouTube 老农民的经验视频和研究论文,建了开源知识库 OpenPasture——「给智能体它们所需的[[上下文|上下文]]」正是通用问题。
- **开放生态的呼吁**:现有虚拟围栏公司软硬件捆绑,他呼吁有人做专利和 API 都开放的项圈,让创新发生在软件层。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">我今天来真的就是想挑战你们:除了在又一家公司为另一个 SaaS 方案再做又一个 MCP 之外,还有其他问题值得解决。</span>  
> *And I really am just here to challenge you that there are other problems to solve than just another MCP for another SaaS solution at another company.*  
> <span class="qm">—— Cody Menefee · [04:17]</span> ^q1

> <span class="qz">我需要有人给我做一个项圈。它得是开放的,API 也得是开放的。</span>  
> *I need someone to make me a caller. I need it to be open. The APIs need to be open.*  
> <span class="qm">—— Cody Menefee · [13:57]</span> ^q2

> <span class="qz">我听到很多工程师谈论如何把 LLM 变成确定性流程,而我的主张是:有很多问题是确定性算法无法解决的。</span>  
> *I hear a lot of engineers talk about how we turn LLMs into deterministic processes, and my contention is actually there's a lot of problems that you can't solve with deterministic algorithms.*  
> <span class="qm">—— Cody Menefee · [16:22]</span> ^q3

> <span class="qz">头号问题实际上就是给智能体提供它们所需的上下文:收集数据、打包数据,然后以一种 LLM 可以推理的方式呈现出来。</span>  
> *The number one problem is actually just giving the agents the context they need, gathering the data, packaging that data, and then presenting it in a way that the LLN can reason over.*  
> <span class="qm">—— Cody Menefee · [17:15]</span> ^q4

> <span class="qz">我整天都在用 AI 智能体,我没有任何语法是背下来的。</span>  
> *I use AI agents all day long. I don't have any syntax memorized.*  
> <span class="qm">—— Cody Menefee · [02:01]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-03-sed-moving-beyond-rag-with-precomputed-conte|把上下文当资产预编译：Pinecone Nexus 如何重做智能体检索]]<span class="pd-rz">同概念:LLM、上下文 (context)</span>
- [[2026-09-15-talks-tolan-voice-first-ai-companion-paula-doz|Tolan 如何做语音优先的 AI 陪伴体]]<span class="pd-rz">同概念:上下文 (context)、LLM</span>
- [[2025-09-07-lennys-how-ai-is-reshaping-the-product-role|PM的生存法则：AI时代别当瓶颈，去抢活干]]<span class="pd-rz">同概念:LLM</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-12-beyondcoding-wes-bos-how-developers-stand-out-when-ai|当所有人都在用智能体写代码，你靠什么脱颖而出：与 Wes 聊开发者的当下]]<span class="pd-rz">同概念:LLM、上下文 (context)</span>
- [[2025-05-22-talks-mastering-claude-code-in-30-minutes|Claude Code 实战技巧：从提问到并行]]<span class="pd-rz">同概念:LLM</span>
- [[2025-07-06-lennys-the-base44-bootstrapped-startup-success|一个人六个月做出八千万美元公司]]<span class="pd-rz">同概念:LLM</span>

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
