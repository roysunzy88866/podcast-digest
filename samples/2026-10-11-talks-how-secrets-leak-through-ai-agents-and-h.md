---
title: AI 智能体会把你的密码「说」出去——怎么堵住这个漏洞
podcast: 精选演讲
date: 2026-10-21
source_url: undefined
duration: "15:04"
type: episode
cover: "#64748b"
description: Venice AI 的开发者关系负责人 Joshua Moe 讲解了隐私保护 AI 系统的搭建思路。
host: "[[Joshua Moe]]"
companies: ["[[Venice AI]]"]
concepts: ["[[智能体]]", "[[智能体运行时]]", "[[推理]]", "[[可观测性]]", "[[可信执行环境]]", "[[机密计算]]", "[[提示词注入]]", "[[上下文窗口]]", "[[密钥]]"]
category: AI 安全
tags:
  - AI 安全
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-how-secrets-leak-through-ai-agents-and-h#post","headline":"AI 智能体会把你的密码「说」出去——怎么堵住这个漏洞","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-how-secrets-leak-through-ai-agents-and-h","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-how-secrets-leak-through-ai-agents-and-h","description":"Venice AI 的开发者关系负责人 Joshua Moe 讲解了隐私保护 AI 系统的搭建思路。","datePublished":"2026-10-21","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Joshua Moe"},{"@type":"Organization","name":"Venice AI"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体运行时 (agent runtime)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"可信执行环境 (trusted execution environment)"},{"@type":"Thing","name":"机密计算 (confidential compute)"},{"@type":"Thing","name":"提示词注入 (prompt injection)"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"密钥 (secret)"}],"articleSection":"AI 安全"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 安全","item":"https://talk.solomind.cc/tags/AI 安全"},{"@type":"ListItem","position":3,"name":"AI 智能体会把你的密码「说」出去——怎么堵住这个漏洞","item":"https://talk.solomind.cc/2026-10-11-talks-how-secrets-leak-through-ai-agents-and-h"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 智能体会把你的密码「说」出去——怎么堵住这个漏洞</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 智能体会把你的密码「说」出去——怎么堵住这个漏洞

<div class="pd-byl"><b>Joshua Moe</b> · Venice AI 开发者关系负责人 · 2026-10-21</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-how-secrets-leak-through-ai-agents-and-h.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">你只需要一次数据泄露,用户就会不再信任你,然后转向另一个提供商。</div><div class="a">— Joshua Moe <button class="pd-ts" data-t="02:00" data-who="Joshua Moe" data-en="You only need one data breach before your users stop trusting you and then move on to another provider." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Joshua Moe]]
>
> **公司** [[Venice AI]]
>
> **概念** [[智能体]] · [[智能体运行时]] · [[推理]] · [[可观测性]] · [[可信执行环境]] · [[机密计算]] · [[提示词注入]] · [[上下文窗口]] · [[密钥]]

[[Venice AI|Venice AI]] 的开发者关系负责人 [[Joshua Moe|Joshua Moe]] 讲解了隐私保护 AI 系统的搭建思路。

如果你让一个 AI [[智能体|智能体]]替你登录网站、调用外部服务，你的密码和[[密钥|密钥]]可能会一路流进大模型本身——然后被记进日志、甚至混进训练数据。

Joshua Moe 是 Venice AI 的首席开发者关系工程师，这家公司做私密、无限制的 AI 平台。

他在这场演讲里讲了一个核心问题：模型只是系统的一部分，围绕模型搭建的那一整套流程，才是泄露隐私的重灾区。

## 为什么少存数据本身就是安全策略

Moe 的出发点很直接：数据泄露几乎不可避免，出事只是时间问题。

而一次泄露就足以让用户流失，或者丢掉一个占年收 90% 的企业客户。

所以 Venice 的做法是干脆不存：不保存任何提示词和对话记录，用户在使用时留下的数字足迹基本上降到零。

逻辑很简单——**存得越少，出事时的爆炸半径越小**。

除了不存数据，他们还提供分层的隐私选项：对接 OpenAI、Claude 这类第三方服务时，会匿名化用户身份；

部分模型跑在[[可信执行环境|可信执行环境]]里，用户可以验证[[推理|推理]]过程确实是私密进行的。

## 日志是好东西，但它是泄露密码的后门

这里要解释一个行话：

[[可观测性|可观测性]]（observability），就是生产系统里的监控体系，通常分三类——追踪（一段时间内的工作记录）、指标（各种计数器）和日志（具体的消息内容）。

日志对调试很有用。但问题是，系统默认可能会把提示词和密钥一起记进日志，而这些内容里往往包含个人信息。

你以为自己在做监控，其实是在偷偷存用户的秘密。

## 密钥是怎么流进大模型的

Moe 用一个典型流程演示了泄露路径：

你用 OpenClaw 发一个请求，运行时需要密钥，就从 1Password 或 Vault 这类密码库取出，然后把密钥直接喂给大模型的推理层。

麻烦就在这里：密钥进了推理层，就「可能被用进训练数据」。你的密码，理论上可能变成模型学到的东西。

## 几个真正管用的隐私设计模式

Venice 在实践中的做法包括：

- 存哈希不存原文。 比如限流需要识别用户，就存一个哈希值，能认出这个人，但不留任何个人数据。
- 密钥分半保管。 加密密钥拆成两半——读的一半和写的一半。攻击者必须同时拿到两半才能解密，连公司团队自己的账号被盗也拿不到完整数据。
- 可撤销的句柄。 句柄就是一个授权对象：拿着它就能访问数据库，收走它就立刻失去权限。这对管理 JSON Web Token 和会话密钥特别重要。

## 给智能体瘦身，安全性和性能一起涨

很多智能体会从服务器上拉来一堆工具，可能有 15、20 个，其实只用到 1 个。

但每多一个工具就多一份风险——密钥可能在某次工具调用中，被恶意服务器悄悄抽走。

Moe 建议在智能体前面加一层分类器，专门检测[[提示词注入|提示词注入]]攻击，可以用大模型来做，也可以用向量搜索。

收紧工具范围还有个意外好处：[[上下文窗口|上下文窗口]]越空，智能体表现越好。窗口快装满时，性能会明显下降。

## 最关键的改动：别让密钥碰模型

这是整场演讲的核心架构思路。常规做法是密钥跟着请求进推理层。

Moe 的方案反过来：**把密码库绑在[[智能体运行时|智能体运行时]]上，而不是推理层上**。

这样一来，运行时变成了纯粹的执行层，可以被当成确定性的流程来严格管控——所有在模型那一层做不到的安全措施，都可以在这里做。

比如智能体要登录一个网站，凭据留在执行层处理，而不是把密码直接喂给模型。这时你才敢说这套系统是私密且安全的。

> 【背景】推理层指大模型负责思考的部分；运行时指执行具体动作（调接口、开浏览器）的程序。确定性意味着行为可预测、可审计。

## 沙箱不是万能药

用沙箱和虚拟机（比如 Firecracker、AWS EC2 的 VPC）能显著提升安全性。

但 Moe 提醒，这治不了百病：只要智能体还能访问互联网，它仍然可能通过外部接口把数据泄露出去。

所以**持续监控权限才是根本**。

他的个人建议是自己搭智能体运行时——自己加监控步骤、自己定义工具，「拥有执行层和推理层」。

## 硬件级隐私：让确实没偷看可以被证明

最后 Moe 介绍了[[机密计算|机密计算]]：在硬件层面建一个可信执行环境，推理过程在私密环境里完成。

Venice 的做法是每次请求后返回一个证明（attestation），用户可以用验证器核实这次推理真的跑在隔离环境里。

这意味着你可以在密码学意义上证明一个智能体是被完全隔离的——**不是相信服务商的承诺，而是自己验证**。

他也坦承还有没解决的问题：端到端加密的工具调用，要在加密和易用的接口体验之间找平衡，仍是个进行中的难题。

## 本集带走

- 一次数据泄露就可能毁掉用户信任，少存数据是缩小事故影响范围最直接的办法。
- 智能体系统里，密钥常常被直接喂给大模型，可能混入日志甚至训练数据。
- 核心解法：把密码库绑在执行层而不是推理层，让模型永远碰不到密钥。
- 收窄智能体的工具范围，既降低泄露风险，也提升性能——上下文窗口越空，表现越好。
- 沙箱有用但不万能，监控权限才是根本；有条件的话，自己搭智能体运行时。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">你只需要一次数据泄露,用户就会不再信任你,然后转向另一个提供商。</span>  
> *You only need one data breach before your users stop trusting you and then move on to another provider.*  
> <span class="qm">—— Joshua Moe · [02:00]</span> ^q1

> <span class="qz">存储更少的用户数据可以直接缩小发生的安全事件的波及范围。</span>  
> *storing less user data directly reduces the blast radius of a security incident that happens.*  
> <span class="qm">—— Joshua Moe · [02:26]</span> ^q2

> <span class="qz">我们不存储任何提示词或对话,正如我们之前提到的,这意味着你在我们网站上留下的数字足迹基本上降为零。</span>  
> *we don't store any prompts or conversations, of course, as we mentioned previously, which means that any digital footprint incurred in your site is essentially reduced to zero.*  
> <span class="qm">—— Joshua Moe · [02:43]</span> ^q3

> <span class="qz">所以如果你从密码库中取出那个 API 密钥,然后把它作为智能体的一部分发送出去,可能发生的情况是,它会在工具调用中通过智能体被泄露给某个由恶意行为者托管的网络服务器。</span>  
> *So if you pull that API key in from your password vault and then you send it as part of the agent, what can happen is that it gets exfiltrated through the agent on a tool call to whatever web server is being hosted by a bad actor, for instance.*  
> <span class="qm">—— Joshua Moe · [09:05]</span> ^q4

> <span class="qz">当你接近上下文窗口的极限时,性能实际上可能会显著下降。</span>  
> *when you reach near the limits of your context window, performance can actually degrade considerably.*  
> <span class="qm">—— Joshua Moe · [10:26]</span> ^q5

> <span class="qz">通过保持一个空的或接近空的上下文窗口,我们可以确保智能体发挥出最佳水平。</span>  
> *By keeping an empty or near empty context window, we can make sure that the agent is performing at its best.*  
> <span class="qm">—— Joshua Moe · [10:35]</span> ^q6

> <span class="qz">你可以在密码学层面完全隔离推理层上的一个智能体,并且能证明这一点。</span>  
> *you can fully isolate an agent at the reasoning layer cryptographically and prove it.*  
> <span class="qm">—— Joshua Moe · [13:49]</span> ^q7
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
