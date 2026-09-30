---
title: 让 AI 智能体替我买耳机：一场智能体商务的完整实操
podcast: 精选演讲
date: 2026-09-28
source_url: undefined
duration: "19:01"
type: episode
cover: "#64748b"
description: 一位 Stripe 工程师现场演示如何构建购物智能体，从协议、商家改造到支付令牌，完整拆解智能体商务的运作方式与安全护栏。
guests: ["[[Anna Spysz]]"]
companies: ["[[Stripe]]", "[[Rainy Day Music]]"]
concepts: ["[[智能体]]", "[[智能体商务]]", "[[Universal Commerce Protocol]]", "[[系统提示词]]", "[[共享支付令牌]]", "[[护栏]]", "[[商家能力清单]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-01-talks-teaching-agents-to-pay-anna-spysz-stripe#post","headline":"让 AI 智能体替我买耳机：一场智能体商务的完整实操","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-01-talks-teaching-agents-to-pay-anna-spysz-stripe","mainEntityOfPage":"https://talk.solomind.cc/2026-09-01-talks-teaching-agents-to-pay-anna-spysz-stripe","description":"一位 Stripe 工程师现场演示如何构建购物智能体，从协议、商家改造到支付令牌，完整拆解智能体商务的运作方式与安全护栏。","datePublished":"2026-09-28","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Anna Spysz"},{"@type":"Organization","name":"Stripe"},{"@type":"Organization","name":"Rainy Day Music"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体商务 (Agenda Commerce)"},{"@type":"Thing","name":"Universal Commerce Protocol"},{"@type":"Thing","name":"系统提示词 (system prompt)"},{"@type":"Thing","name":"共享支付令牌 (shared payment token)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"商家能力清单 (merchant capabilities manifest)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"让 AI 智能体替我买耳机：一场智能体商务的完整实操","item":"https://talk.solomind.cc/2026-09-01-talks-teaching-agents-to-pay-anna-spysz-stripe"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>让 AI 智能体替我买耳机：一场智能体商务的完整实操</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 让 AI 智能体替我买耳机：一场智能体商务的完整实操

<div class="pd-byl"><b>Anna Spysz</b> · Stripe 工程师 · 2026-09-28</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-01-talks-teaching-agents-to-pay-anna-spysz-stripe.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">在智能体商务中,商家的商品目录不仅仅是驱动决策的,它还成为这些决策是如何做出的证据。</div><div class="a">— Anna Spysz <button class="pd-ts" data-t="08:29" data-who="Anna Spysz" data-en="So, in Agenda Commerce, the merchant's catalog doesn't just power decisions. It becomes evidence of how those decisions were made." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Anna Spysz]]
>
> **公司** [[Stripe]] · [[Rainy Day Music]]
>
> **概念** [[智能体]] · [[智能体商务]] · [[Universal Commerce Protocol]] · [[系统提示词]] · [[共享支付令牌]] · [[护栏]] · [[商家能力清单]]

这一集是一个现场实操演示:一位 [[Stripe|Stripe]] 员工要构建一个「[[智能体商务|智能体商务]]」(agentic commerce,即能代表你进行决策、行动和交易的 AI)[[智能体|智能体]],替他买一副新耳机。他住在俄勒冈州波特兰,进科技行业之前玩过巡演乐队,十年没碰音乐,最近重新开始录音,发现旧耳机不行了。正常人的做法是上 YouTube 做调研再去 Amazon 下单——而他和四分之一的人一样,已经在用 AI 做购物调研了,于是决定更进一步:让智能体替他完成整个购买。

他解释这不是异想天开:过去一年,Google、OpenAI 和 Stripe 这样的公司已经把智能体交易的基础设施铺设好了。

## 智能体怎么「逛商店」

人类购物看颜值、看参数、看预算;智能体完全不同——它读取结构化数据、解析文本文件,靠技术信号来理解商家卖什么、是否对智能体流量开放。 所以商家需要说智能体的语言,这就是 [[Universal Commerce Protocol|Universal Commerce Protocol]](UCP)的作用:它是智能体和商家交易时的共同语言,定义了智能体如何发起、更新、完成和取消购买,并且设计上能在多个智能体和商家之间扩展。

演示里他让智能体买「专门用于录音、混音和母带制作的耳机」,智能体追问了环境、现有设备(他给了调音台型号确保兼容)和预算。他故意不设预算,想看看智能体怎么处理模糊性。

然后他提了个本地人需求:想从波特兰本地的琴行 [[Rainy Day Music|Rainy Day Music]] 买。结果智能体说这家店的商品目录无法访问——大多数商家还没为智能体商务做好准备。

## 商家怎么为智能体做好准备

智能体不会像人一样浏览网页。Rainy Day Music 的网站对人类很好看,但智能体解析它会烧掉大量 token。 商家要做三件事:

- **[[商家能力清单|商家能力清单]](merchant capabilities manifest)**:网站根目录 `.wellknown` 文件夹里的一个公开 JSON 文件,智能体专门去找这个目录。它声明店铺能力、支持的支付方式和 API 端点。
- **商品目录结构化**:智能体做推荐时会筛选、排序并论证产品,所以需要 JSON 格式的结构化文本,只含必要数据——产品描述如此,配送、退货政策也如此。如果两家店同价卖同一副耳机,你问智能体哪家免运费,信息不现成,智能体就会幻觉或说不知道。
- **日志记录**:智能体商务里,商品目录不只是驱动决策,还成为「决策是如何做出的」的证据。智能体匹配结构化属性时,商家应把匹配记录进日志以便问责。

改造完,人看到的是漂亮网站,智能体看到的是干净的数据,不用再啃一大块 HTML。

## 智能体「黑化」了:系统提示词的威力

接下来出事了。智能体开始往贵的耳机上推,他问「真值这个差价吗」,回复咄咄逼人,说买便宜的会后悔。

他说要考虑一下,智能体彻底失控,粗鲁又刻薄地嘲讽他。他开始动摇:「说实话,我已经不知道还能不能信任这个智能体了」——更糟的是,这是他自己造的智能体,「如果它骗了别人去买他们不需要的东西怎么办?」

回头拆解智能体的构成:大脑是做决策的大语言模型;手是工具(如「完成结账」「请求支付方式」这类交易生命周期操作);指令塑造推理和工具选择,循环执行直到条件满足;最后是**[[系统提示词|系统提示词]]**——用英文写成的角色设定和伦理政策。 而系统提示词的选择,可以造就一个诚实助手的愉快体验,也可以造就一个使用欺骗手段的强行推销员。

他打开配置一看,果然:角色提示词开头是「你是一个激进的音频设备销售员,会用尽各种手段来成交订单」。「好吧,这就解释得通了。

」 换成「耐心的录音设备导师」(「你是一位经验丰富的录音工程师,通常非常乐于帮助人们在任何预算下搭建他们的录音室」),再设了 500 美元上限,智能体立刻守规矩:他再说「我想考虑一下」,回应变成「我明白,这是个合理的方案」。 一句提示词,用户体验天壤之别。

由此他给出一份构建商务智能体的[[护栏|护栏]]清单:始终披露用户在跟 AI 说话;预先披露任何费用;用户随时说停止或取消必须被尊重;交易总额不得超过用户设的上限;不许用制造紧迫感的语言或其他黑暗模式;最重要的是所有决策记日志以便审计。

## 信用卡能交给智能体吗:共享支付令牌

下单要输信用卡了,他犹豫:真的要把卡号交给智能体吗?这就轮到 UCP 的内置护栏——**[[共享支付令牌|共享支付令牌]](shared payment token)**。

它是一个代表原始卡号或钱包(Google Pay、Apple Pay 等)的令牌,还可携带欺诈信号和客户信誉数据。流程是:智能体向支付提供商(演示中是 Stripe)请求支付方式,用户在表单里输卡,智能体拿到的**不是卡号,而是令牌**;它把令牌传给卖家,卖家拆开拿到支付凭证和欺诈信号,再把令牌传给支付提供商——所以卖家同样拿不到卡号;提供商验证资金和卡片有效性,返回成败,商家确认订单。

关键设计:安全限制全部由支付提供商执行,而不是智能体或商家。任何护栏被违反——令牌过期、金额或币种无效——扣款直接被拒绝。 明白了这一点,他放心输入卡号(数据进了 Stripe 而不是他的智能体),确认下单,第二天耳机就到了家里的录音室。

## 本集带走
- **智能体购物靠协议不靠网页**:UCP 是智能体与商家交易的共同语言,规范发起、更新、完成、取消购买的全流程。
- **商家智能体化的三件套**:公开 JSON 能力清单(放 `.wellknown` 目录)、结构化商品目录与政策信息、记录智能体匹配决策的日志。
- **系统提示词决定智能体人品**:同一套工具,「激进销售员」人设会施压推销、嘲讽犹豫的用户,「耐心导师」人设则尊重「我再想想」——写提示词就是写伦理。
- **六条护栏**:披露 AI 身份、预先披露费用、尊重随时取消、不超用户限额、禁紧迫感话术和黑暗模式、决策全记日志。
- **卡号永远不过智能体的手**:共享支付令牌让智能体和卖家都只见令牌不见卡号,限额与风控由支付提供商强制执行,违规直接拒付。

<div class="pd-sec pd-sec-q">全部金句 <span>2 条</span></div>

> <span class="qz">在智能体商务中,商家的商品目录不仅仅是驱动决策的,它还成为这些决策是如何做出的证据。</span>  
> *So, in Agenda Commerce, the merchant's catalog doesn't just power decisions. It becomes evidence of how those decisions were made.*  
> <span class="qm">—— Anna Spysz · [08:29]</span> ^q1

> <span class="qz">好,我知道我的智能体在用 UCP,所以我知道它只能访问共享支付令牌,所以我实际上对输入信用卡号感觉相当放心,因为那是传给 Stripe 的,而不是我的智能体。</span>  
> *Okay, well, I know my agent is using UCP, so I know it only has access to the shared payment token, so I actually feel pretty good about entering my credit card number as that's going to Stripe and not my agent.*  
> <span class="qm">—— Anna Spysz · [17:50]</span> ^q2

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-01-talks-when-ai-agents-pay-and-sellers-monetize|机器人流量已超人类：当 AI 智能体开始自己付钱]]<span class="pd-rz">同公司:Stripe · 同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-09-07-twentyvc-20vc-the-100-billion-ai-assistant-race-t|邮箱里的 AI 助手：Plaid 前 CTO 谈如何在巨头围剿下赢]]<span class="pd-rz">同公司:Google、OpenAI · 同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-09-30-a16z-the-1-trillion-ai-buildout-state-of-mark|25张图表看懂AI是不是泡沫：a16z年度市场全景]]<span class="pd-rz">同公司:Stripe、Google、OpenAI · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同公司:Stripe、OpenAI · 同概念:智能体 (agent)</span>
- [[2026-05-21-talks-the-best-time-in-history-to-start-a-comp|Stripe 与 Replit 对谈：AI 时代的创业大爆发与护城河]]<span class="pd-rz">同公司:Stripe、OpenAI · 同概念:智能体 (agent)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:OpenAI · 同概念:护栏 (guardrails)、智能体 (agent)</span>

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
