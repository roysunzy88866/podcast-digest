---
title: 智能体缺的那一层：让 AI 顺畅访问开放网络的抓取基建
podcast: 精选演讲
date: 2026-09-26
source_url: undefined
duration: "14:42"
type: episode
cover: "#64748b"
description: Oxylabs 的 Giedrus 讲解如何用网页抓取基础设施，解决 AI 智能体访问网站时被验证码拦截、成本失控的问题。
guests: ["[[Giedrius Šteimantas]]"]
companies: ["[[Oxylabs]]"]
concepts: ["[[智能体]]", "[[网页抓取]]", "[[浏览器自动化]]", "[[验证码]]", "[[大语言模型]]", "[[token]]", "[[Fast Search API]]", "[[Web Scraper API]]", "[[Playwright MCP]]", "[[无头浏览器]]", "[[地理定位]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-26-talks-the-missing-layer-in-agentic-ai-giedrius#post","headline":"智能体缺的那一层：让 AI 顺畅访问开放网络的抓取基建","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-26-talks-the-missing-layer-in-agentic-ai-giedrius","mainEntityOfPage":"https://talk.solomind.cc/2026-08-26-talks-the-missing-layer-in-agentic-ai-giedrius","description":"Oxylabs 的 Giedrus 讲解如何用网页抓取基础设施，解决 AI 智能体访问网站时被验证码拦截、成本失控的问题。","datePublished":"2026-09-26","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Giedrius Šteimantas"},{"@type":"Organization","name":"Oxylabs"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"网页抓取 (web scraping)"},{"@type":"Thing","name":"浏览器自动化 (browser automation)"},{"@type":"Thing","name":"验证码 (CAPTCHA)"},{"@type":"Thing","name":"大语言模型 (large language model)"},{"@type":"Thing","name":"token"},{"@type":"Thing","name":"Fast Search API"},{"@type":"Thing","name":"Web Scraper API"},{"@type":"Thing","name":"Playwright MCP"},{"@type":"Thing","name":"无头浏览器 (headless browser)"},{"@type":"Thing","name":"地理定位 (geolocation)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"智能体缺的那一层：让 AI 顺畅访问开放网络的抓取基建","item":"https://talk.solomind.cc/2026-08-26-talks-the-missing-layer-in-agentic-ai-giedrius"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>智能体缺的那一层：让 AI 顺畅访问开放网络的抓取基建</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 智能体缺的那一层：让 AI 顺畅访问开放网络的抓取基建

<div class="pd-byl"><b>Giedrius Šteimantas</b> · Oxylabs · 2026-09-26</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-26-talks-the-missing-layer-in-agentic-ai-giedrius.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">客户只需要为成功的结果付费。</div><div class="a">— Giedrius Šteimantas <button class="pd-ts" data-t="11:36" data-who="Giedrius Šteimantas" data-en="Customers only pay for successful results." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Giedrius Šteimantas]]
>
> **公司** [[Oxylabs]]
>
> **概念** [[智能体]] · [[网页抓取]] · [[浏览器自动化]] · [[验证码]] · [[大语言模型]] · [[token]] · [[Fast Search API]] · [[Web Scraper API]] · [[Playwright MCP]] · [[无头浏览器]] · [[地理定位]]

一个 AI 购物助手的点子听起来很美好：聊天机器人跟你聊穿搭、帮你挑商品，然后一个购物[[智能体|智能体]]拿着提示词去网上找货、下单。说这个故事的人是 Giedrus,来自[[网页抓取|网页抓取]]公司 [[Oxylabs|Oxylabs]]——过去十年他们帮大模型公司拿训练数据，现在把同一套基建用来帮 AI 智能体访问网络。

他朋友就是这么搭了个购物智能体，结果跑起来不是遇到商品页，而是一墙[[验证码|验证码]]；他全程用[[浏览器自动化|浏览器自动化]](用程序模拟真人操作浏览器)，又慢又贵又不可靠，最后做出一个「不能用、还烧钱」的产品。Giedrus 一眼看出问题：他缺了一层——一个能让智能体在开放网络上自由运作的基础设施层。

修好它靠的是抓取行业的三条老原则：**① 只有绝对必要时才用浏览器；② 先验证内容再喂给模型——HTTP 返回 200 不代表拿到的是有效内容；③ 内容越轻量越好**——网页里塞满 JavaScript、CSS、HTML,大量字节毫无价值。

## 发现阶段：别用浏览器逛，直接搜

朋友的流程分四步：发现(在哪些网站能买到)→ 决策(核实价格、库存、描述后选品)→ 用户确认 → 执行购买。发现阶段他用的是一份预定义的大零售商清单，再拿浏览器自动化去逐个查它们的搜索页。问题一大串：工具没有「隐身能力」(绕过网站反爬检测)，动不动被验证码拦住、整个流程中断，还得加重试机制，每笔交易的成本根本没法预测；清单是死的，选品范围被锁死；网站 JavaScript 太重，又慢又贵；而且很多电商按用户地理位置显示库存和尺码，发现阶段拿不到[[地理定位|地理定位]]，就算流程跑通，结账时商品也常常缺货。

他的替代方案：给智能体一个搜索工具([[Fast Search API|Fast Search API]]),让它自己上网搜。智能体制定一批扇出查询(同时发多个搜索请求)，再从结果里挑相关 URL。这个 API 每次响应是紧凑的 JSON、不到 2,000 个 [[token|token]],平均响应不到 700 毫秒，价格低且可预测——最关键的是，所有这些零售网站早就被搜索引擎索引过了，根本不需要自己用浏览器去翻。

## 决策阶段：先验证内容，别浪费 token

到了决策阶段，智能体要访问那些 URL,确认价格、库存、描述。朋友还是用浏览器，而且并行开了很多个——并行本身没错，但很多页面打开是验证码，热门零售商几乎全军覆没，智能体手上只剩寥寥几个选择。

好在他可观测性做得好，发现了问题；Giedrus 见过的大多数客户根本检测不到失败：他们只检查内容大小和 HTTP 状态码，就把巨大的 HTML 直接喂给大模型。模型当然分得清验证码和真页面，但那是要花 token 的——开 10 个网站只有 3 个有效，10 个全喂进去，就是白白浪费 70% 的 token。

「在我看来这有点疯狂。」

他第一反应是压缩输出，但很快意识到方向错了：问题不在压缩，在于内容本身无效——压缩之前得先确保内容有效。 于是他遵循抓取第一原则，完全抛开浏览器，改用 [[Web Scraper API|Web Scraper API]] 重建这一阶段，收获一串好处：

- **只返回有效内容**：遇到验证码或封锁，请求会带着明确的错误信息失败，你就知道别把它送进模型；
- **轻量 REST API**(一种简单的网络接口)，可并行跑数百个请求；支持 Markdown 输出，不用把原始 HTML 塞给模型；
- 网站如果是动态的(需要渲染 JavaScript),底层自动跑完整浏览器；
- 支持地理定位，结果能本地化，和后面购买环节对得上；
- **只为成功的结果付费**——「不治愈，不收费」，爬取失败就没有成本，而且失败得很响亮，你能立刻知道。

## 购买阶段：这次真的必须用浏览器

轮到执行购买时，原则要反过来用了——「这次你绝对需要使用浏览器」：要填表单、做输入，内容高度动态。 这一步他跟朋友的实现差不多，都是 [[Playwright MCP|Playwright MCP]](让大模型操控浏览器的一套工具协议)加浏览器加大模型。朋友的老毛病又来了：访问——一路被验证码折磨到崩溃，流程根本没法自动化。

修复却出奇地简单：把浏览器换成 Oxylabs 的[[无头浏览器|无头浏览器]](不带界面的后台浏览器)，对 Playwright MCP 来说就是即插即用的替换。换上之后，智能体获得了多年反爬经验在浏览器源码层面做好的隐身处理、开箱即用的住宅代理(用真实家庭网络的 IP 访问，不易被识别为机器)，以及最关键的地理定位——购买环节看到的价格、库存、尺码，和验证环节本地化的结果一致。 

跑起来，它真的能从提示词里选出正确尺码、加入购物车、完成购买。「砰，我们就有了一个智能体，指挥着一套由多年网页爬取经验加固的强大基础设施。」

## 本集带走

- **浏览器是最后手段，不是默认选项**：搜索、抓取静态页面这类活，用轻量 API 又快又便宜；只有需要填表单、交互的环节(如结账)才真的上浏览器。
- **先把内容验证了再喂模型**：HTTP 200 ≠ 有效内容。开 10 个网站只有 3 个有效却全喂给模型，等于浪费 70% 的 token。用「失败时明确报错」的工具，让无效内容在进模型前就被挡掉。
- **给智能体搜索而非固定清单**：搜索引擎早就索引了全网，让智能体自己扇出查询，选品范围不再被预定义列表锁死。
- **地理定位要贯穿全流程**：电商按位置显示库存和尺码，发现、验证、购买三个环节用同一套地理定位，否则结账时才发现缺货。
- **可观测性是救命稻草**：只查状态码和内容大小的监控会漏掉验证码失败——朋友正是因为看得见失败才发现了问题。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">客户只需要为成功的结果付费。</span>  
> *Customers only pay for successful results.*  
> <span class="qm">—— Giedrius Šteimantas · [11:36]</span> ^q1

> <span class="qz">不治愈，不收费。</span>  
> *No cure, no pay.*  
> <span class="qm">—— Giedrius Šteimantas · [11:45]</span> ^q2

> <span class="qz">当我们尝试打开 10 个网站，只有 3 个返回有效内容，却把全部 10 个都喂给模型时，这就是个问题。</span>  
> *And when we attempt to open 10 websites, but only three return valid content, but feed all of the 10 to the model, it is a problem.*  
> <span class="qm">—— Giedrius Šteimantas · [09:30]</span> ^q3

> <span class="qz">HTTP 响应 200 并不意味着一切正常。</span>  
> *HTTP response 200 does not mean that we are good to go.*  
> <span class="qm">—— Giedrius Šteimantas · [03:23]</span> ^q4

> <span class="qz">网站上充满了 JavaScript、CSS、HTML，其中有大量字节根本不提供任何价值。</span>  
> *Websites are full of JavaScript, CSS, HTML, and there's a lot of bytes that do not deliver any value whatsoever.*  
> <span class="qm">—— Giedrius Šteimantas · [03:30]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi|DevOps 之父谈智能体开发：谁来管、怎么管、别踩什么坑]]<span class="pd-rz">同概念:token、智能体 (agent)、可观测性 (observability)</span>
- [[2026-07-21-trainingdata-factory-s-matan-grinberg-the-coming-dark|Factory CEO Matan:早两年等于错，退款、路由器与软件工厂]]<span class="pd-rz">同概念:token、智能体 (agent)</span>
- [[2026-08-22-talks-give-the-agent-a-budget-not-a-token-sach|给智能体预算，而不是令牌：Anthropic 的智能体安全上生产之道]]<span class="pd-rz">同概念:token、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-02-08-lennys-getting-paid-to-vibe-code|不会写代码的人如何成为全职 vibe coder]]<span class="pd-rz">同概念:token、智能体 (agent)</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:智能体 (agent)、可观测性 (observability)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:智能体 (agent)、可观测性 (observability)</span>

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
