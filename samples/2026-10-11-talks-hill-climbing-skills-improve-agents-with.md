---
title: "不改模型,让浏览器智能体自己学会爬坡"
podcast: 精选演讲
date: 2026-10-20
source_url: undefined
duration: "51:42"
type: episode
cover: "#64748b"
description: Browserbase 的 Shubhankar Srivastava 演讲，讲如何用「执行者+老师」循环让智能体自我改进。
guests: ["[[Shubhankar Srivastava]]"]
companies: ["[[Browserbase]]", "[[Browse.sh]]"]
concepts: ["[[浏览器智能体]]", "[[智能体可靠性]]", "[[自动研究]]", "[[自动浏览循环]]", "[[技能文件]]", "[[爬山法]]", "[[可重放的环境与可验证的结果]]", "[[提示词注入]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-hill-climbing-skills-improve-agents-with#post","headline":"不改模型,让浏览器智能体自己学会爬坡","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-hill-climbing-skills-improve-agents-with","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-hill-climbing-skills-improve-agents-with","description":"Browserbase 的 Shubhankar Srivastava 演讲，讲如何用「执行者+老师」循环让智能体自我改进。","datePublished":"2026-10-20","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Shubhankar Srivastava"},{"@type":"Organization","name":"Browserbase"},{"@type":"Organization","name":"Browse.sh"},{"@type":"Thing","name":"浏览器智能体 (browser agent)"},{"@type":"Thing","name":"智能体可靠性 (reliability)"},{"@type":"Thing","name":"自动研究 (auto-research)"},{"@type":"Thing","name":"自动浏览循环 (auto-browse)"},{"@type":"Thing","name":"技能文件 (skill.md)"},{"@type":"Thing","name":"爬山法 (hill climbing)"},{"@type":"Thing","name":"可重放的环境与可验证的结果 (replayable environment)"},{"@type":"Thing","name":"提示词注入 (prompt injection)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"不改模型,让浏览器智能体自己学会爬坡","item":"https://talk.solomind.cc/2026-10-11-talks-hill-climbing-skills-improve-agents-with"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>不改模型,让浏览器智能体自己学会爬坡</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 不改模型,让浏览器智能体自己学会爬坡

<div class="pd-byl"><b>Shubhankar Srivastava</b> · Browserbase 销售工程师 · 2026-10-20</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-hill-climbing-skills-improve-agents-with.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">最重要的一点是，每次运行都是从零开始。</div><div class="a">— Shubhankar Srivastava <button class="pd-ts" data-t="05:19" data-who="Shubhankar Srivastava" data-en="And the most important thing is every run starts from zero." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Shubhankar Srivastava]]
>
> **公司** [[Browserbase]] · [[Browse.sh]]
>
> **概念** [[浏览器智能体]] · [[智能体可靠性]] · [[自动研究]] · [[自动浏览循环]] · [[技能文件]] · [[爬山法]] · [[可重放的环境与可验证的结果]] · [[提示词注入]]

[[浏览器智能体|浏览器智能体]]就是让人工智能去操作一个浏览器：点击按钮、填表、搜航班、订餐厅。

[[Shubhankar Srivastava|Shubhankar Srivastava]] 在 [[Browserbase|Browserbase]] 做销售工程师，天天帮客户把这类智能体部署到真实环境里。

他这场演讲回答了一个很实际的问题：==智能体经常卡死、被网站拦截，怎么不碰模型本身，让它变可靠==？

## 为什么智能体总在同一块石头上绊倒

演讲开头放了两个翻车现场。

一个智能体在 Google Flights 上想拖动时间筛选器，但拖动这个操作对它来说太难了，它不知道背后的网页元素和 JavaScript，反复失败。

另一个想在 OpenTable 订餐厅，直接撞上拒绝访问的拦截页。

根子上的问题，他概括得很狠：**这些智能体是从不学习的天才**<button class="pd-ts" data-t="05:53" data-who="嘉宾" data-en="And these browser agents, I call them geniuses that never learn. And some people might say, oh, why don't you fine-tune on some open table or restaurant websites?" aria-label="回原文"></button>。

模型本身很聪明，但每一次运行都从零开始，上一次踩过的坑、发现的技巧，全都留不下来。

有人会说，那针对每个网站做微调不就行了？他觉得不可行——你不能每来一个新任务就去微调一次模型。

真正缺的，是一种能从生产运行记录里持续学习的机制。

## 一个执行者，一个老师

受 Karpathy 提出的[[自动研究|自动研究]]思路启发，他们搭了一个叫auto-browse的循环：**两个智能体配对干活** <button class="pd-ts" data-t="08:33" data-who="嘉宾" data-en="And this loop essentially is two Claude Agent SDK agents. You can call one as the doer agent and one as the teacher agent. This doer agent, its job is to actually go and do the browsing." aria-label="回原文"></button>。

一个叫执行者，负责真的去操作浏览器，截图、点按钮。

另一个叫老师，不干活，只在每轮结束后翻执行者的运行记录，分析哪里对了、哪里错了。

关键在于一个叫 strategy.md 的文件。老师每轮学到的东西都写进去，比如「这个日历控件有 bug，别碰」「别用鼠标拖，直接注入 JavaScript」。

这份文件会带进下一轮，执行者照着改进，如此往复，直到收敛。

他们不告诉循环要跑几轮、要达到什么成功率、花多少算力。给一个大方向，放手让它自己磨。

这就是所谓爬坡：不换模型，靠一轮轮积累的技巧往上爬。

## 学出来的技巧，人类未必想得到

现场演示里，智能体的第一个发现就很有意思：

订商务舱机票根本不用在日历控件里点来点去，把参数直接拼进 Google Flights 的网址就行。

事后看很显然，但他说自己作为人类未必想得出这么复杂的网址写法 <button class="pd-ts" data-t="10:18" data-who="嘉宾" data-en="A query parameter and you don't really need to click around, right? The agent was smart enough in this instance to think, oh, I'm wasting so many tokens and I'm wasting so much time clicking around where I could just use Google Flight's query parameter." aria-label="回原文"></button>。

OpenTable 那个例子更夸张。第一轮被拒绝访问拦住后，老师判断这是环境层面的封锁；

第二轮它发现，只要在网址里带上经纬度和城市编号，就能绕开拦截直接拿到可用的界面，还总结出「永远别打开 /R 路径，那里必被拦」。

效果也硬：这个任务的**成本从 6.22 美元降到 0.51 美元**，耗时从 189 秒降到 27 秒 <button class="pd-ts" data-t="15:08" data-who="嘉宾" data-en="And as you can see, It sort of went from $6.22 to $0.51. The time taken went from 189 seconds to 27 seconds, and the skill it came up with was here." aria-label="回原文"></button>。Google Flights 那个任务第二轮成本降到四分之一。

不同任务改善幅度不同，他给出的数字从便宜 3 倍到 16 倍不等。

循环结束的产物是一份 skill.md 文件，把所有技巧沉淀下来，之后每次运行直接套用，不用再学。

## 把它变成「浏览器智能体的黄页」

Browserbase 把这套方法做成了产品 [[Browse.sh|Browse.sh]]：预先为比如 500 个网站生成好[[技能文件|技能文件]]，免费开放<button class="pd-ts" data-t="18:32" data-who="" data-en="We actually went ahead and created this product called Browse.sh. We were like, if we can do this for one website, we can do this for five, why not do this for, like, 500 websites and give it for free for anybody to do this?" aria-label="回原文"></button>。

他把它比作九十年代互联网普及之前的黄页——只不过查的不是商家电话，而是「如何在网络上的任何网站完成任何任务」<button class="pd-ts" data-t="18:57" data-who="说话人" data-en="This is Yellow Pages for browser agents, right? It has details about how to do any task on any website on the web. I wanted to actually show this to you all." aria-label="回原文"></button>。

技能文件本质上是纯文本，是个可移植的产物。

你可以交给 Claude Code，也可以接别的工具，它会自己判断什么时候该调哪个网站的技能。

用户甚至可以提交需求，让系统现场生成一个新技能，发邮件给你。

## 网站天天变，技能怎么保鲜

==网站一改版，技能可能就失效了==。目前的做法不是每天烧算力重跑循环，而是按需触发：

生产环境一出现失败，就启动一轮自动研究，诊断问题、自动创建拉取请求，交给人类工程师确认后更新技能 <button class="pd-ts" data-t="38:26" data-who="嘉宾" data-en="Or if it's failing at any particular point in production. So we build these loops or systems where as soon as we run into any production failure, we run an auto-research loop to see what went wrong, to heal it," aria-label="回原文"></button>。

也可以用定时任务每隔几小时抽查技能是否还正常。

安全上他们分了三层：

请求进来时先过滤，技能文件发布前过一道安全审查，基础设施层面限制浏览器能访问的网址、能执行的操作。

## 你自己的领域能不能用？

他认为这套思路不限于浏览器。

写代码的智能体每次都要重新学一遍仓库规范；研究类智能体每次都忘了该去哪个网站取数据。

核心前提是「智能体不应该每次都从零重新学你的任务」<button class="pd-ts" data-t="21:04" data-who="嘉宾" data-en="The fundamental premise is like the agent should not be relearning your tasks from zero, right? I've seen this in research agents. We run a bunch of deep research agents for our internal workflows." aria-label="回原文"></button>。

要套用这套方法，需要两个条件：一是可重放的环境，能反复从头跑；二是可验证的结果，能明确判断这轮是成是败。

编码任务两者都满足，浏览器任务基本满足；但有些知识型工作夹着大量人工介入，很难重放，就不太合适。

## 本集带走

- 智能体最大的短板不是模型不够聪明，而是每次运行都从零开始，经验留不下来。
- 执行者+老师循环配上跨轮传递的策略文件，能让智能体在不改模型的情况下自我改进。
- 学出来的技巧常出乎人的意料，比如直接拼网址参数、逆向网站接口，成本最多降到原来的十六分之一。
- 前提条件是可重放的环境加可验证的结果；网站改版后靠生产失败触发自愈循环更新技能。
- 技能文件是可移植的纯文本，Browserbase 已把它做成免费开放的 Browse.sh。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">最重要的一点是，每次运行都是从零开始。</span>  
> *And the most important thing is every run starts from zero.*  
> <span class="qm">—— Shubhankar Srivastava · [05:19]</span> ^q1

> <span class="qz">每次智能体运行都是从零开始的运行，它没有从自己的生产轨迹中学习。</span>  
> *Every agent run is a start-from-scratch run, and it's not learning from its production traces.*  
> <span class="qm">—— Shubhankar Srivastava · [05:42]</span> ^q2

> <span class="qz">这些浏览器智能体，我称之为从不学习的天才。</span>  
> *And these browser agents, I call them geniuses that never learn.*  
> <span class="qm">—— Shubhankar Srivastava · [05:50]</span> ^q3

> <span class="qz">我们只给它一个宽泛的提示词，我们拥抱苦涩教训，我们说，好吧，让执行者和教师去干吧。</span>  
> *We just give it a broad prompt, and we let the bitter lesson, we embrace the bitter lesson, and we're like, okay, let the doer and teacher go at it.*  
> <span class="qm">—— Shubhankar Srivastava · [09:21]</span> ^q4

> <span class="qz">现在，这类学习是人类永远做不到的，你只要拥抱苦涩的教训，让智能体去干活，它们就会为你找到这些技巧。</span>  
> *Now, these are the kind of learnings where a human could never have done, but you just sort of embrace the bitter lesson and let agents do the job, and they will find these tricks for you.*  
> <span class="qm">—— Shubhankar Srivastava · [15:35]</span> ^q5

> <span class="qz">他说拥有可验证的结果很重要，但你也应该有极其可反复打磨的环境或极其可反复打磨的用例。</span>  
> *He said having a verifiable outcome is important, but also you should have extremely grindable environments or extremely grindable use cases as well.*  
> <span class="qm">—— Shubhankar Srivastava · [25:54]</span> ^q6

> <span class="qz">我见过的是，有时候这些研究循环非常聪明，它们意识到根本不需要浏览器，它们直接对 API 进行逆向工程，然后直接调用 API，那是你能达到的最快速度，对吧？</span>  
> *What I've seen, sometimes these, our research loops are so smart, they realize that browsers are not needed at all, and they just reverse engineer the API, and they fire the API, and that's the fastest that you'll ever get to, right?*  
> <span class="qm">—— Shubhankar Srivastava · [40:07]</span> ^q7
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
