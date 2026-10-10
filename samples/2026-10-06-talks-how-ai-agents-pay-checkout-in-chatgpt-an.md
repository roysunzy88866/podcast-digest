---
title: 当AI替你下单：PayPal 讲解智能体购物里的支付怎么完成
podcast: 精选演讲
date: 2026-10-10
source_url: undefined
duration: "14:33"
type: episode
cover: "#64748b"
description: PayPal 高级工程师 Sam Parsons 演讲，拆解 ChatGPT 和 Google AI 模式里的购物支付如何落地。
guests: ["[[Sam Parsons]]"]
companies: ["[[PayPal]]", "[[OpenAI]]", "[[Google]]", "[[ChatGPT]]"]
concepts: ["[[智能体]]", "[[智能体商务]]", "[[智能体商务协议]]", "[[Universal Commerce Protocol]]", "[[MCP 应用]]", "[[分词]]", "[[即时结账]]", "[[外部结账]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-06-talks-how-ai-agents-pay-checkout-in-chatgpt-an#post","headline":"当AI替你下单：PayPal 讲解智能体购物里的支付怎么完成","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-06-talks-how-ai-agents-pay-checkout-in-chatgpt-an","mainEntityOfPage":"https://talk.solomind.cc/2026-10-06-talks-how-ai-agents-pay-checkout-in-chatgpt-an","description":"PayPal 高级工程师 Sam Parsons 演讲，拆解 ChatGPT 和 Google AI 模式里的购物支付如何落地。","datePublished":"2026-10-10","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Sam Parsons"},{"@type":"Organization","name":"PayPal"},{"@type":"Organization","name":"OpenAI"},{"@type":"Organization","name":"Google"},{"@type":"Organization","name":"ChatGPT"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体商务 (agentic commerce)"},{"@type":"Thing","name":"智能体商务协议 (agentic commerce protocol)"},{"@type":"Thing","name":"Universal Commerce Protocol"},{"@type":"Thing","name":"MCP 应用 (MCP app)"},{"@type":"Thing","name":"分词 (tokenization)"},{"@type":"Thing","name":"即时结账 (instant checkout)"},{"@type":"Thing","name":"外部结账 (external checkout)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"当AI替你下单：PayPal 讲解智能体购物里的支付怎么完成","item":"https://talk.solomind.cc/2026-10-06-talks-how-ai-agents-pay-checkout-in-chatgpt-an"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当AI替你下单：PayPal 讲解智能体购物里的支付怎么完成</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 当AI替你下单：PayPal 讲解智能体购物里的支付怎么完成

<div class="pd-byl"><b>Sam Parsons</b> · PayPal 高级工程师 · 2026-10-10</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-06-talks-how-ai-agents-pay-checkout-in-chatgpt-an.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>



> [!info] 关联
> **人物** [[Sam Parsons]]
>
> **公司** [[PayPal]] · [[OpenAI]] · [[Google]] · [[ChatGPT]]
>
> **概念** [[智能体]] · [[智能体商务]] · [[智能体商务协议]] · [[Universal Commerce Protocol]] · [[MCP 应用]] · [[分词]] · [[即时结账]] · [[外部结账]]

越来越多的购物将发生在 [[ChatGPT|ChatGPT]]、[[Google|Google]] 这类 AI 对话界面里——用户不再打开商家的网站。那支付环节怎么办？

[[PayPal|PayPal]] 企业支付部门(原名 Braintree)的资深工程师 [[Sam Parsons|Sam Parsons]] 在一场演讲中，展示了商家如何接到来自 AI [[智能体|智能体]]的付款。

他讲了三条路径，核心信息是：PayPal 正在为商家搭建桥梁，让它从许多不同的入口收钱。<button class="pd-ts" data-t="00:12" data-who="Sam Parsons" data-en="Okay, so I'm gonna talk to you about agentic commerce with PayPal Enterprise Payments. So this is about how do we accept payments from agents, kind of maybe a human in the loop, maybe not, for merchants." aria-label="回原文"></button>

## ChatGPT 里怎么买东西？

先解释两个概念。[[OpenAI|OpenAI]] 搞了一个[[智能体商务协议|智能体商务协议]]，Google 联合其他方搞了一个[[Universal Commerce Protocol|通用商务协议]]。Parsons 说，你去翻规范会发现，两者几乎一模一样。

演示的场景是这样的：用户在 ChatGPT 里搜索想订酒店。

商家通过一个 [[MCP 应用|MCP 应用]]展示商品——所谓 MCP 应用，就是内嵌了网页界面的 MCP 服务器，包含 HTML 和 JavaScript,可以被 ChatGPT、Claude 等智能体渲染出来。

这个界面的外观、内容完全由商家控制，不是 ChatGPT 的默认界面。<button class="pd-ts" data-t="03:29" data-who="Sam Parsons" data-en="They get to control that experience. So it's inside of, say, ChatGPT, but the merchant gets to control it. They get to control the look, the feel." aria-label="回原文"></button>

用户决定购买时，点击结账，ChatGPT 会弹出官方的[[即时结账|即时结账]]界面。

用户输入信用卡号(或者用已存储的)，后台随即完成[[分词|令牌化]]——意思是把真实的卡号换成一张不可直接消费的凭证，这样传给谁都不会泄露敏感信息，也不增加商家的合规负担。<button class="pd-ts" data-t="06:02" data-who="Sam Parsons" data-en="And behind the scenes, that'll be tokenized with PayPal. So if you're kind of not familiar with payments, tokenization means where the user exchanges a real payment credential that's transactable, say your credit card number." aria-label="回原文"></button>

商家最后收到这个令牌，像处理普通 PayPal 令牌一样扣款。结算、退款、拒付、合规，全都照旧。

对商家来说，这单在系统里会被标记为来自 ChatGPT 的交易。<button class="pd-ts" data-t="08:20" data-who="Sam Parsons" data-en="And all of those transactions, when processed, they get attributed to the source where they came from. So this would show up within PayPal Enterprise Payments as a ChatGPT transaction that occurred." aria-label="回原文"></button>

这些令牌还被多重限制：只能给指定商家使用，有最高金额上限，有币种，有有效期——不能永远用下去。<button class="pd-ts" data-t="08:03" data-who="Sam Parsons" data-en="And what's kind of happening behind the scenes here is these tokens are constrained in a number of ways. One of them is with the merchant, so that this can only be processed on a given merchant." aria-label="回原文"></button>

## Google AI 模式里，商家连界面都不用做

在 Google AI 模式里流程略有不同。用户想买跑步鞋，智能体通过通用商务协议在商家那边创建一个会话。

用户决定结账时，由 Google Pay 完成令牌化，再把令牌交回商家扣款。

关键区别在于：商家在 Google AI 模式下不需要做任何界面，不用建 MCP 应用。

你只需要在自己的配置文件里声明，我的交易要经由 PayPal 企业支付处理，附上商家 ID 和客户端密钥，然后搭好接收结账请求的接口就行。<button class="pd-ts" data-t="10:00" data-who="Sam Parsons" data-en="One of the things to note here is in Google AI mode, the merchant doesn't create An MCP app. They don't create an experience." aria-label="回原文"></button>

换句话说，Google 这条路对商家来说更省事，但体验由 Google 主导；ChatGPT 那条路，商家能自己设计商品展示。

## 第三条路：商家完全掌控，跳出对话框结账

如果商家既不想绑定 ChatGPT 也不想绑定 Google,还有一条路：

自己做一个 MCP 应用，展示商品卡片和购买按钮，用户点击后跳转到一个[[外部结账|外部结账]]页面完成支付，然后页面再自动更新应用里的订单状态。

演示用的是 Claude。

这条路的代价是多一步跳转，摩擦稍微大一点，但**商家对整个体验、支付方式拥有完全控制权**。<button class="pd-ts" data-t="12:12" data-who="Sam Parsons" data-en="So that gives you a lot more control, but there is a little bit more friction that's introduced in this mode because you're not doing the actual checkout inside of your agent." aria-label="回原文"></button>

Parsons 还提到，MCP 应用有个叫 elicitation 的新特性即将普及，以后这类外部验证可以更无缝地嵌在对话里完成。<button class="pd-ts" data-t="13:22" data-who="Sam Parsons" data-en="MCP apps has a new feature. It's not supported in most of the major ones yet that is called elicitation. And so you can do that maybe a little bit more seamlessly as far as requesting that external validation in an iframe or something." aria-label="回原文"></button>

## 本集带走

- OpenAI 和 Google 分别推出的两套[[智能体商务|智能体商务]]协议，规范内容几乎相同。
- 令牌化让卡号不出现在流转环节，令牌有商家、金额、币种、有效期等多重限制。
- ChatGPT 路径：商家做 MCP 应用控制商品展示，结账用 ChatGPT 官方即时结账。
- Google AI 模式路径：商家不做界面，只提供商品数据和支付接口。
- 第三条路：MCP 应用加外部结账页，商家控制力最强，但用户多一步跳转。

<div class="pd-sec pd-sec-q">全部金句 <span>0 条</span></div>



<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-07-twentyvc-20vc-the-100-billion-ai-assistant-race-t|邮箱里的 AI 助手：Plaid 前 CTO 谈如何在巨头围剿下赢]]<span class="pd-rz">同公司:ChatGPT、Google、OpenAI、Claude · 同概念:智能体 (agent)</span>
- [[2026-09-14-eyeonai-the-hidden-algorithm-that-decides-which|当 AI 决定买什么软件：G2 的「信任层」生意]]<span class="pd-rz">同公司:ChatGPT、OpenAI、Claude、Google · 同概念:智能体 (agent)</span>
- [[2026-10-05-a16z-the-top-100-consumer-ai-apps-whos-actual|一半美国人在用 AI，只有 4.5% 在付钱：消费级 AI 的钱到底在哪]]<span class="pd-rz">同公司:ChatGPT、OpenAI、Claude、Google · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-15-mos-let-s-kill-sh-t-axios-ceo-on-simplifying|Axios CEO Jim VandeHei：直面、删除、放大——AI 时代的简化生存法]]<span class="pd-rz">同公司:ChatGPT、Google、OpenAI、Claude · 同概念:智能体 (agent)</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同公司:ChatGPT、Google · 同概念:智能体 (agent)</span>
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当写代码变便宜,OpenAI Codex负责人说「品味」成了最贵的资源]]<span class="pd-rz">同公司:ChatGPT、OpenAI · 同概念:智能体 (agent)</span>

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
