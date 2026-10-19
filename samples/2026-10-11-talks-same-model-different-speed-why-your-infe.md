---
title: 同一个模型，速度差三倍：推理服务商到底重要在哪
podcast: 精选演讲
date: 2026-10-19
source_url: undefined
duration: "12:45"
type: episode
cover: "#64748b"
description: FriendliAI 创始工程师 Yunmo 讲解为什么开源模型已经够好，真正的差距在推理层。
host: "[[Yunmo]]"
companies: ["[[Friendly AI]]"]
concepts: ["[[开放权重模型]]", "[[推理]]", "[[智能体]]", "[[投机解码]]", "[[KV 缓存]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-same-model-different-speed-why-your-infe#post","headline":"同一个模型，速度差三倍：推理服务商到底重要在哪","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-same-model-different-speed-why-your-infe","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-same-model-different-speed-why-your-infe","description":"FriendliAI 创始工程师 Yunmo 讲解为什么开源模型已经够好，真正的差距在推理层。","datePublished":"2026-10-19","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Yunmo"},{"@type":"Organization","name":"Friendly AI"},{"@type":"Thing","name":"开放权重模型 (openweight models)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"投机解码 (speculative decoding)"},{"@type":"Thing","name":"KV 缓存 (KVCache)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"同一个模型，速度差三倍：推理服务商到底重要在哪","item":"https://talk.solomind.cc/2026-10-11-talks-same-model-different-speed-why-your-infe"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>同一个模型，速度差三倍：推理服务商到底重要在哪</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 同一个模型，速度差三倍：推理服务商到底重要在哪

<div class="pd-byl"><b>Yunmo</b> · FriendliAI 创始工程师 · 2026-10-19</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-same-model-different-speed-why-your-infe.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">GLM 5.2 在这个任务上便宜了 5.6 倍以上，而在需要多次迭代的智能体式工作流中，这个差距会迅速累积。</div><div class="a">— Yunmo <button class="pd-ts" data-t="02:48" data-who="Yunmo" data-en="So GLM 5.2 was more than 5.6 times cheaper for this task, and in agent-style workflows where you need to iterate multiple times, the gap compounds quickly." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Yunmo]]
>
> **公司** [[Friendly AI]]
>
> **概念** [[开放权重模型]] · [[推理]] · [[智能体]] · [[投机解码]] · [[KV 缓存]]

开源模型这两年悄悄跨过了一道门槛。

在编码、[[推理|推理]]、[[智能体|智能体]]这些基准测试里，像 GLM 5.2 这样的[[开放权重模型|开放权重模型]]，已经和头部闭源模型打成平手，在某些排行榜上甚至排到了 Claude Opus 4.8 前面 <button class="pd-ts" data-t="01:28" data-who="嘉宾" data-en="For example, in coding, reasoning, and agentic benchmarks, models like GNM 5.2 are competing in the same tier as the leading proprietary models. So as you can see from this code arena reader board, GNM 5.2 is ranked even higher than Claude Opus 4.8." aria-label="回原文"></button>。

FriendliAI 的创始工程师 [[Yunmo|Yunmo]] 在这场演讲里说，==问题已经不再是模型够不够好，而是你能不能在生产环境里又快又稳地跑它==。

他用两个现场演示讲清了这件事。

## 同样的任务，价格差 5.6 倍

他先让 GLM 5.2 和 Claude Opus 4.8 各自写一个塔防游戏。两个模型都做出了能玩的成品：有地图，炮塔会在射程内攻击敌人，一个提示词就搞定了。

但看成本，差距就出来了：GLM 5.2 完成这个任务便宜了 5.6 倍以上 <button class="pd-ts" data-t="02:48" data-who="嘉宾" data-en="The difference becomes very clear. So GLM 5.2 was more than 5.6 times cheaper for this task, and in agent-style workflows where you need to iterate multiple times, the gap compounds quickly." aria-label="回原文"></button>。而且在需要反复迭代的智能体工作流里，这个差距会迅速累加。

**模型质量的竞争，正在变成“你跑得起什么”的竞争**。

## 换个服务商，同一个模型快了 3 倍

更有意思的对比是：模型相同、任务相同、只换服务商。他用 GLM 5.2 加同一套编码智能体流程，做一个消除类小游戏。

FriendliAI 跑完用了不到 2 分钟，另一家服务商花了 3 分多钟 <button class="pd-ts" data-t="04:02" data-who="嘉宾" data-en="So when you see this, the left side is friendly AI. It generates the game within two minutes. Another provider needs more than three minutes." aria-label="回原文"></button>。用户在编码智能体里感受到的体验差异，就是这么来的。

**差异来自整个推理技术栈**：缓存系统、路由策略、调度器、量化方案、GPU 内核，全都拼在一起才决定最终体验。

## 为什么输入越长，缓存越值钱

现代智能体应用有个特点：输入很长（动辄超过 1 万个词元），输出很短。

而且大量输入是重复的——很多真实负载里，50% 到 90% 的词元在不同请求间完全一样 <button class="pd-ts" data-t="05:45" data-who="嘉宾" data-en="And more importantly, a large portion of the inputs are repeated across requests. In many real workloads, like 50% to 80% to 90% of the tokens are identical across different requests." aria-label="回原文"></button>。

处理这些输入（预填充阶段）是计算成本的大头。如果每次都从头算一遍重复部分，就是在浪费时间和显卡算力。

**解法是复用缓存**，但要真正跑起来，需要两个机制。

一是缓存感知路由：缓存分散在各台机器上，路由器必须把请求送到已经持有相关缓存的那台，否则复用就白搭。

二是缓存分级：缓存极其占内存，长上下文下甚至可能超过模型本身。

所以热数据放显存，温数据放内存，冷数据下沉到硬盘，系统动态搬运 <button class="pd-ts" data-t="07:07" data-who="嘉宾" data-en="So we treat cache as a hierarchy, like hot cache stays in GPU memory, worm cache is in CPU RAM, and cordial cache can be offloaded to NVMe or the disk spaces. The system dynamically offloads less used blocks and prepares them when they need it." aria-label="回原文"></button>。

## 投机解码：先猜后验，白拿速度

标准的大模型解码一次只生成一个词元，显卡经常吃不饱。

[[投机解码|投机解码]]换了个思路：一次先猜出多个候选词元，让主模型一遍验证。**猜中的等于白送，输出质量完全不变** <button class="pd-ts" data-t="07:59" data-who="嘉宾" data-en="And speculative decoding changes the shape of this problem. So instead of generating one token and stopping, it proposes multiple candidates' tokens ahead. Then the target model validates those candidates in a single pass, and if the tokens are accepted, they are free." aria-label="回原文"></button>。

猜法有两条路。用小模型猜，命中率高但费算力；用提示词里的模式猜，开销小但只在输出长得像上下文时好用。

FriendliAI 的做法是混合策略，运行时根据负载动态切换，而且草稿模型还能根据真实流量持续自我改进 <button class="pd-ts" data-t="09:26" data-who="嘉宾" data-en="So we also think about speculation as something we can improve over time. So with self evolving speculation, draft model can adapt based on the real serving traffic." aria-label="回原文"></button>。

## 快还不够，得稳

平均很快但时不时超时、报错、限流的服务，用户体验照样崩。

智能体尤其脆弱：一个任务要调好多次模型，中间任何一次失败，整条流程可能作废 <button class="pd-ts" data-t="10:14" data-who="嘉宾" data-en="So this becomes even more important for agent workloads. As you know, agent may need multiple model cores to complete one task. And if just one call face in the middle, the entire workflow can be invalidated." aria-label="回原文"></button>。

所以 FriendliAI 不只优化延迟，而是把错误率、在线时长一起优化。他们展示的数据是 GLM 5.1 Pro 服务在线时长超过 99.9% <button class="pd-ts" data-t="10:34" data-who="嘉宾" data-en="We optimize the full API experiences, including the error rate, uptime, all those things together. And this OpenAI snapshot for GLM 5.1 Pro shows that friendly AI is not only the fast, but it's also highly reliable with over 99.9% uptime." aria-label="回原文"></button>。

他也提醒了一句实在话：所有推理服务商都说自己快，也都在某个基准、某种条件下快过。

**唯一算数的基准，是你自己的工作负载**——你的提示词、词元长度、流量模式和延迟要求 <button class="pd-ts" data-t="11:10" data-who="嘉宾" data-en="But for your application, the only benchmark that really matters is your own workload. So your prompt, your token lengths, your traffic patterns, and your latency expectation." aria-label="回原文"></button>。

## 本集带走

- 开放权重模型已在编码、推理等任务上追平头部闭源模型，成本还低数倍。
- 模型相同、服务商不同，同一个任务耗时能差 3 倍以上——差距在整套推理技术栈。
- 智能体请求间 50%–90% 的输入词元是重复的，缓存复用是提速关键。
- 投机解码靠“先猜后验”提高生成速度，且不改变输出质量。
- 挑服务商别只看厂商基准，拿自己的真实负载去测。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">GLM 5.2 在这个任务上便宜了 5.6 倍以上，而在需要多次迭代的智能体式工作流中，这个差距会迅速累积。</span>  
> *So GLM 5.2 was more than 5.6 times cheaper for this task, and in agent-style workflows where you need to iterate multiple times, the gap compounds quickly.*  
> <span class="qm">—— Yunmo · [02:48]</span> ^q1

> <span class="qz">而是你能负担得起在大规模下运行什么。</span>  
> *It is about what you can afford to run at scale.*  
> <span class="qm">—— Yunmo · [03:05]</span> ^q2

> <span class="qz">在许多真实的工作负载中，大约 50% 到 80% 到 90% 的 tokens 在不同请求之间是完全相同的。</span>  
> *In many real workloads, like 50% to 80% to 90% of the tokens are identical across different requests.*  
> <span class="qm">—— Yunmo · [05:45]</span> ^q3

> <span class="qz">对于大模型和长上下文，KVCache 的大小可能超过模型权重。</span>  
> *For large models and long contacts, KVCache size can exceed model weights.*  
> <span class="qm">—— Yunmo · [06:56]</span> ^q4

> <span class="qz">可靠性本身就是速度的一部分。</span>  
> *Reliability is part of speed.*  
> <span class="qm">—— Yunmo · [09:51]</span> ^q5

> <span class="qz">但对你的应用来说，唯一真正重要的基准是你自己的负载。</span>  
> *But for your application, the only benchmark that really matters is your own workload.*  
> <span class="qm">—— Yunmo · [11:05]</span> ^q6

> <span class="qz">Kilocode 是最大的 coding agent 平台之一，每周处理数万亿 token。</span>  
> *So Kilocode is one of the largest coding agent platform processing several trillions of tokens every week.*  
> <span class="qm">—— Yunmo · [11:51]</span> ^q7

> <span class="qz">Friendly AI 快了大约七倍，而且错误率显著更低。</span>  
> *Friendly AI was over like seven times faster and had a significantly lower error rate.*  
> <span class="qm">—— Yunmo · [12:14]</span> ^q8
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
