---
title: 工程领导者的AI工具购买真相
podcast: Scaling DevTools
date: 2026-08-22
source_url: undefined
duration: "12:35"
type: episode
cover: "#64748b"
description: Dave Fletcher 揭示工程领导者购买 AI 工具的真相：超过一半人对 AI 持中立或消极态度，且痛点仍是速度、可靠性而非 AI 本身。向这类受众推销时，大口号会失效，需转向解决代码生成后的部署与审查瓶颈，并利用线下渠道突围。
host: "[[Ken]]"
cohosts: ["[[Dave Fletcher]]"]
companies: ["[[Lead Dev]]"]
concepts: ["[[AI 编码工具]]", "[[可观测性]]", "[[CI-CD]]", "[[技术债务]]", "[[AI 优先]]", "[[DevTools]]"]
category: 增长与销售
tags:
  - 增长与销售
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-20-devtools-dave-fletcher-from-leaddev-what-engineer#post","headline":"工程领导者的AI工具购买真相","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-20-devtools-dave-fletcher-from-leaddev-what-engineer","mainEntityOfPage":"https://talk.solomind.cc/2026-08-20-devtools-dave-fletcher-from-leaddev-what-engineer","description":"Dave Fletcher 揭示工程领导者购买 AI 工具的真相：超过一半人对 AI 持中立或消极态度，且痛点仍是速度、可靠性而非 AI 本身。向这类受众推销时，大口号会失效，需转向解决代码生成后的部署与审查瓶颈，并利用线下渠道突围。","datePublished":"2026-08-22","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Ken"},{"@type":"Person","name":"Dave Fletcher"},{"@type":"Organization","name":"Lead Dev"},{"@type":"Thing","name":"AI 编码工具 (AI coding tools)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"CI/CD"},{"@type":"Thing","name":"技术债务 (tech debt)"},{"@type":"Thing","name":"AI 优先 (AI-first)"},{"@type":"Thing","name":"DevTools"}],"articleSection":"增长与销售"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"增长与销售","item":"https://talk.solomind.cc/tags/增长与销售"},{"@type":"ListItem","position":3,"name":"工程领导者的AI工具购买真相","item":"https://talk.solomind.cc/2026-08-20-devtools-dave-fletcher-from-leaddev-what-engineer"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>工程领导者的AI工具购买真相</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 工程领导者的AI工具购买真相

<div class="pd-byl"><b>Dave Fletcher</b> · 2026-08-22</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-20-devtools-dave-fletcher-from-leaddev-what-engineer.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">工程师，工程领导者在最好的情况下也是一群持怀疑态度的人。</div><div class="a">— Dave Fletcher <button class="pd-ts" data-t="04:14" data-who="Dave Fletcher" data-en="Engineers, engineering leaders are a skeptical bunch at the best times." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Ken]] · [[Dave Fletcher]]
>
> **公司** [[Lead Dev]]
>
> **概念** [[AI 编码工具]] · [[可观测性]] · [[CI-CD]] · [[技术债务]] · [[AI 优先]] · [[DevTools]]

超过一半的工程领导者正在购买 [[AI 编码工具|AI 编码工具]]，但如果你把"[[AI 优先|AI 优先]]"写进营销话术，很大一部分买家会直接关上门——只有略超过一半的人对 AI 持积极看法，而工程领导者这个群体本身就是出了名的"废话探测器"很强的人。<button class="pd-ts" data-t="02:00" data-who="Unknown" data-en="And it will be, it will surprise no one. Well over half of them are buying AI coding tools at the moment. And then there's a, and that's our intent window is the next 12 months." aria-label="回原文"></button> <button class="pd-ts" data-t="04:21" data-who="Unknown" data-en="And engineers, engineering leaders are a skeptical bunch at the best times. And particularly around AI, they have very strong bullshit detectors. And so..." aria-label="回原文"></button> <button class="pd-ts" data-t="04:49" data-who="Unknown" data-en="Many of the dev tools that we've got as customers have gone strong on AI-first messaging, and that can be quite a dangerous thing to do with our audience. Only a little over half of them have a positive view of AI." aria-label="回原文"></button>

真正让他们掏钱的底层痛点没变：速度、可靠性、[[技术债务|技术债务]]。AI 实施根本排不进前三。

代码生成被自动化之后，痛苦转移到了下游——把代码弄进生产环境、保证可靠性、应对安全审查。所以资深管理层（VP、总监）除了看 AI 编码工具，同样在大量采购[[可观测性|可观测性]]、CI/CD、QA 和测试工具，几乎和 AI 编码工具一样多。<button class="pd-ts" data-t="05:05" data-who="Unknown" data-en="And so a large chunk of the buyers are going to start putting barriers up if you're leading with big AI first claims. The thing that we're seeing in the research strongly is that the underlying pain points haven't changed that much." aria-label="回原文"></button> <button class="pd-ts" data-t="03:05" data-who="Unknown" data-en="And I think that's just a sign of the times that we're in. That is where the pain is being felt downstream from the code generation that has largely been automated." aria-label="回原文"></button> <button class="pd-ts" data-t="02:52" data-who="Unknown" data-en="And a really interesting difference is when we look at the more senior members of our audience, so VPs, directors, and what we see there is, sure, they're reporting that they are buying AI coding tools, but also we've seen downstream tooling" aria-label="回原文"></button>

那怎么跟他们沟通才有效？别喊"2 倍提速、10 倍提速"这种口号，会被笑出去。

有效的做法是真正可信的教学：假设大家已经活在 AI 世界里，直接讲具体细节——你用什么技术解决了下游的新瓶颈、怎么消除以前不存在但现在卡住你的关卡。来自 Honeycomb 的 Liz Fong-Jones 前一天在台上讲的就是他们 AI 采用的具体路径，没有大数字，全是细节，这种内容才是这个受众真正吃的那一套。<button class="pd-ts" data-t="07:50" data-who="Unknown" data-en="Yeah, so it's kind of spelling out the specific challenges rather than just saying, AI, don't do that. AI, don't stop talking about 2x-ing or 10x-ing your velocity." aria-label="回原文"></button> <button class="pd-ts" data-t="06:25" data-who="Unknown" data-en="Go into the specifics. And so if you're able to stand up there and teach and say, like, okay, it's a given that we are living in an AI world, right? And it is a given that most teams are writing code with AI." aria-label="回原文"></button> <button class="pd-ts" data-t="07:16" data-who="Unknown" data-en="Just stick to the basics. We had Liz Fong-Jones from Honeycomb on stage yesterday giving a fantastic talk all about their AI adoption journey. Not big headline figures, but the specifics of how they got there." aria-label="回原文"></button>

当然，受众也有分层。纯 AI 活动上可以多聊 AI，但面对工程师还是得讲具体；跟 CIO 层面可以讲宏观收益，但跟真正的买家和工程团队打交道，大西洋两岸态度一样——都得小心。<button class="pd-ts" data-t="09:24" data-who="Unknown" data-en="And I think this is why it's really tricky for vendors to get this messaging right. If you're at an event that is pure AI, then of course you can lean into some of that messaging a bit more." aria-label="回原文"></button> <button class="pd-ts" data-t="09:48" data-who="Unknown" data-en="If you're talking to exec-level CIOs, I think they might be more receptive to some of that big benefits-led, big picture messaging. But if you're talking to buyers and engineering teams, be really careful with it." aria-label="回原文"></button>

从市场渠道看，数字渠道已经非常拥挤，很多 [[DevTools|DevTools]] 公司在转向线下——办自己的晚宴、聚会，甚至做物理外展寄东西到办公桌。这种"被腾空"的领域反而能拿到优势。

而且 DevTools 整体在回暖：两年前只有 27% 的受众说今年会增加支出，现在这个数字跳到了 36%。钱是有的，关键是去哪里见到这些人——线下是答案。<button class="pd-ts" data-t="10:13" data-who="Unknown" data-en="I mean, I'm going to say this. I think that on digital channels are getting really crowded. And so a lot of them are talking about in-person interactions." aria-label="回原文"></button> <button class="pd-ts" data-t="11:03" data-who="Unknown" data-en="We had to cut through. That's where you can get an advantage and actually it's an area that's been slightly vacated, hasn't it? And of course, you know, there's no better place than at an event, right?" aria-label="回原文"></button> <button class="pd-ts" data-t="11:31" data-who="Unknown" data-en="Two years ago, I think we had like 27% of, Yeah, two years ago we had 27% of our audience saying that they were increasing the spending this year compared to last year." aria-label="回原文"></button>

## 本集带走
- **别拿 AI 当卖点**：工程领导者的核心痛点仍然是速度、可靠性和技术债务，AI 实施排不进前三。以"AI 优先"开场会触发抵触。
- **痛苦已经转移到下游**：代码生成自动化后，瓶颈变成了部署、可靠性和安全审查——可观测性、CI/CD、QA 工具的需求和 AI 编码工具一样高。
- **用具体细节取代大口号**：别喊"10 倍提速"，直接讲你用什么方法解决了哪个具体的下游瓶颈。真实案例比宏大叙事有效得多。
- **线下渠道正在被重新重视**：数字渠道过于拥挤，自办晚宴、聚会等面对面互动反而能突围。DevTools 整体支出在增长，从 27% 升到 36%。

<div class="pd-sec">全部金句 <span>4 条</span></div>

> <span class="qz">工程师，工程领导者在最好的情况下也是一群持怀疑态度的人。</span>  
> *Engineers, engineering leaders are a skeptical bunch at the best times.*  
> <span class="qm">—— Dave Fletcher · [04:14]</span> ^q1

> <span class="qz">所以几乎同样多的人在看 monster 可观测性，就像他们看 AI 编码工具、CICD、QA 一样。</span>  
> *So almost as many of them looking at monster observability as they are AI coding tools, CICD, QA.*  
> <span class="qm">—— Dave Fletcher · [02:54]</span> ^q2

> <span class="qz">不要停止谈论将速度提高 2 倍或 10 倍。</span>  
> *Don't stop talking about 2x-ing or 10x-ing your velocity.*  
> <span class="qm">—— Dave Fletcher · [07:50]</span> ^q3

> <span class="qz">告诉我你如何利用这项技术解决你现在面临的下游问题，消除那些已成为你新瓶颈的关卡，而以前那些瓶颈是写代码或其他事情。</span>  
> *Talk to me about how you can take this technology and solve those downstream problems that you've now got, unblock the gates that have become your new bottleneck that used to be coding at something else.*  
> <span class="qm">—— Dave Fletcher · [06:52]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**换个口味**

- [[2025-09-21-lennys-from-managing-people-to-managing-ai-juli|Julie Zhuo：管理者的核心技能，就是驾驭AI的技能]]<span class="pd-rz">同概念:可观测性 (observability)</span>
- [[2026-02-26-lennys-ai-is-critical-for-humanitys-survival|管理 3 万人的 Cisco 产品总裁：AI 转型与成功的六字真言]]<span class="pd-rz">同概念:AI 优先 (AI-first)</span>
- [[2026-07-24-talks-inside-the-agent-engine-a-langchain-and|当系统出故障时，让 AI 代替作战室里的 50 个人——Traversal 谈如何造 AI SRE]]<span class="pd-rz">同概念:可观测性 (observability)</span>

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
