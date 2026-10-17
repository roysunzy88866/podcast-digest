---
title: "别再租用智能:开源模型怎么训练到部署一把抓"
podcast: 精选演讲
date: 2026-10-17
source_url: undefined
duration: "18:57"
type: episode
cover: "#64748b"
description: Fireworks AI 应用机器学习团队负责人 Jatishree 讲解企业如何从闭源模型迁移到开源模型，并持续训练优化。
host: "[[Jatishree]]"
companies: ["[[Fireworks]]", "[[Cursor]]", "[[Vercel]]", "[[GenSpark]]"]
concepts: ["[[开源模型]]", "[[推理]]", "[[微调]]", "[[智能体]]", "[[投机解码]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-stop-renting-intelligence-the-train-to-d#post","headline":"别再租用智能:开源模型怎么训练到部署一把抓","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-stop-renting-intelligence-the-train-to-d","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-stop-renting-intelligence-the-train-to-d","description":"Fireworks AI 应用机器学习团队负责人 Jatishree 讲解企业如何从闭源模型迁移到开源模型，并持续训练优化。","datePublished":"2026-10-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jatishree"},{"@type":"Organization","name":"Fireworks"},{"@type":"Organization","name":"Cursor"},{"@type":"Organization","name":"Vercel"},{"@type":"Organization","name":"GenSpark"},{"@type":"Thing","name":"开源模型 (open source models)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"微调 (fine tune)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"投机解码 (speculative decoding)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"别再租用智能:开源模型怎么训练到部署一把抓","item":"https://talk.solomind.cc/2026-10-11-talks-stop-renting-intelligence-the-train-to-d"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>别再租用智能:开源模型怎么训练到部署一把抓</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 别再租用智能:开源模型怎么训练到部署一把抓

<div class="pd-byl"><b>Jatishree</b> · 2026-10-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-stop-renting-intelligence-the-train-to-d.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果开源模型不能超越或比肩闭源模型的质量，那么差异化的关键就在于你如何定制、训练和改进这些开源模型，使其性能和质量达到闭源模型的水平。</div><div class="a">— Jatishree <button class="pd-ts" data-t="01:49" data-who="Jatishree" data-en="if open source models don't beat or match the quality of closed source models, the differentiating factor comes from how you customize, train, and improve these open source models to match the performance and quality of closed source models." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jatishree]]
>
> **公司** [[Fireworks]] · [[Cursor]] · [[Vercel]] · [[GenSpark]]
>
> **概念** [[开源模型]] · [[推理]] · [[微调]] · [[智能体]] · [[投机解码]]

在演讲一开始，[[Jatishree|Jatishree]](可以叫她 Jett)先问观众两个问题：有多少人在用 ChatGPT 或 Anthropic 这样的闭源模型？又有多少人觉得账单涨得太快了？

举手的人不少。她在 [[Fireworks|Fireworks]] 带领应用机器学习团队的一部分，这次演讲讲的就是这条迁移路：

闭源模型太贵，[[开源模型|开源模型]]质量不够，中间的差距怎么补上。

## 开源模型真的能上生产了吗？

她先给出当前 AI 生态的 3 个基本事实。第一，开源模型大体上已经可以在生产环境使用了，比如 GLM 5.2,尤其在编程场景里表现好。

第二，**如果开源模型本身追不上闭源模型，那胜负手就在于你怎么定制、训练、持续改进它** <button class="pd-ts" data-t="01:52" data-who="嘉宾" data-en="Two, if open source models don't beat or match the quality of closed source models, the differentiating factor comes from how you customize, train, and improve these open source models to match the performance and quality of closed source models." aria-label="回原文"></button>。

第三，整个技术栈正在从“部署一次就完事”变成一个持续循环：训练、部署、拿到新数据再训练 <button class="pd-ts" data-t="02:04" data-who="嘉宾" data-en="Two, if open source models don't beat or match the quality of closed source models, the differentiating factor comes from how you customize, train, and improve these open source models to match the performance and quality of closed source models." aria-label="回原文"></button>。

Fireworks 做的事，就是让这个循环又便宜又顺畅。规模也不小：平台每天服务约 30 万亿个 token,支持全球超过 10000 家公司，每秒处理约 20 万个请求 <button class="pd-ts" data-t="03:12" data-who="嘉宾" data-en="And before we also talk about inference and training, I just wanted to give you a quick overview of how inference looks like, especially at scales, and what are the kind of production impact that we have seen among some of our customers and user base itself." aria-label="回原文"></button>。

## 客户拿到了什么真实收益？

几个具体案例。编程工具 [[Cursor|Cursor]] 的 Composer 2 模型在 Fireworks 上训练和托管，[[推理|推理]]速度达到 13 倍提升。[[Vercel|Vercel]] 在平台上做[[微调|微调]]和托管，延迟改善 40 倍 <button class="pd-ts" data-t="04:16" data-who="嘉宾" data-en="We help them actually fine tune and also host the model on our platform. And they see a 40x latency improvement. And another big use case study is actually GenSpark." aria-label="回原文"></button>。

[[GenSpark|GenSpark]] 主要靠提示词来设计系统，从闭源切到开源时质量是最大瓶颈，Fireworks 帮他们做了强化微调(行话叫 RFT,即用评估函数给模型输出打分、让模型朝高分方向改进)，包括清洗数据集、定义评估函数，最终质量提升了 12% <button class="pd-ts" data-t="04:47" data-who="嘉宾" data-en="We helped them clean the data set, define evaluator functions, And at the end of the RFP training job itself, we saw that there was 12% quality improvement for the GemSpark use case." aria-label="回原文"></button>。

她还提到公司已融资约 3.27 亿美元，团队约 200 人 <button class="pd-ts" data-t="05:11" data-who="嘉宾" data-en="Also, we are a trusted platform among all our other customers and user base as well, and we have raised around 327 million CDC a while ago, and we are about 200 people working at Fireworks." aria-label="回原文"></button>。

## 推理快 40 倍，靠的是自己写底层代码

模型跑在 GPU 上，中间隔着一层叫 CUDA 内核的翻译层。Fireworks 自研了推理引擎 FireAttention,**连这层翻译代码都是自己写的** <button class="pd-ts" data-t="05:30" data-who="嘉宾" data-en="At Fireworks, we have our own inference engine called FireAttention. So you have a model, you have GPUs, and the way the model sits on top of the GPUs is through a translation layer called CUDA kernels." aria-label="回原文"></button>。客户带着明确目标来：

多少输入 token、多少输出 token、多高的缓存命中率、要达到什么延迟，平台就针对这个具体负载优化整个推理栈，用更便宜的价格达标。

此外也用上了[[投机解码|投机解码]](先让小模型猜、大模型验证，从而加速)、解耦和量化等业界常见技术，客户还能在平台上训练自己的草稿模型来进一步提速。

## 训练产品分三档，从一键到全自定义

第一档是训练代理，适合刚入行的产品经理和开发者。

在界面上挂上数据集、描述目标，代理会自己选模型、清洗数据、调超参数，还会给出训练计划、准确率和 F1 分数，最后推荐下一步动作 <button class="pd-ts" data-t="07:35" data-who="嘉宾" data-en="And our training product itself comes in three different flavors for different segments within our customer and user base, one being the training agent. This is very popular among our product managers and builders that got into this AI inferencing and training field very recently." aria-label="回原文"></button>。

不过它目前不支持强化微调。

第二档是托管训练，也是最受欢迎的：选模型、传数据、填超参数、点一个按钮。

训练过程中有面板实时显示损失曲线，还能把观测数据导出到 Weights & Biases <button class="pd-ts" data-t="08:26" data-who="嘉宾" data-en="The next flavor, also one of our most popular flavors among our customer and user base, is managed training. And this is what most of our customers use today. They can use a managed training platform, one, through API, and second, through the UI itself." aria-label="回原文"></button>。

第三档是训练 API,给资深机器学习工程师自定义训练循环和损失函数用的 <button class="pd-ts" data-t="09:32" data-who="嘉宾" data-en="And the third and the kind of the most advanced flavor of training that we offer is the training API itself. And the training API is very popular among some of the ML engineers within different organizations or within our customer base." aria-label="回原文"></button>。三档产品都支持监督微调、强化微调和 DPO。

## 训练完到上线，只差一次点击

**平台的核心是一个数据飞轮**：训练、部署、监控、收集反馈、再训练。为了让这个轮子转得顺，平台提供了几项能力。

一是热加载，训练出新版本后可以直接替换线上权重，不宕机——这个功能最初就是为 Cursor 定制的，后来开放给了所有用户 <button class="pd-ts" data-t="12:52" data-who="嘉宾" data-en="And this has become really popular, especially when we were training models for Cursor. And this was actually a feature we implemented specifically for Cursor and then we thought would be useful for general public while they were training models as well." aria-label="回原文"></button>。

二是数值保真：很多客户在 A 平台训练、B 平台部署，因为底层系统不兼容，模型质量会莫名下降。

Fireworks 把训练和推理放在同一平台，保证训练完部署不会出现数值差异 <button class="pd-ts" data-t="13:28" data-who="嘉宾" data-en="Another thing that makes it easier to train on our platform is the numerical fidelity. So a lot of the time, customers use Platform A for training and host on Platform B." aria-label="回原文"></button>。

> 【背景】Fireworks AI 是一家提供大模型推理与训练服务的平台公司，客户在自己的数据上定制开源模型并部署上线。

## 本集带走

- 开源模型已基本具备生产能力，真正的差距在于定制和持续训练
- Fireworks 每天服务约 30 万亿 token,支持超 10000 家公司，客户案例包括 Cursor(13 倍推理提速)和 Vercel(40 倍延迟改善)
- 自研推理引擎 FireAttention 连 CUDA 内核都自己写，可针对单一负载做深度优化
- 训练产品分三档：训练代理、托管训练、训练 API,覆盖从新手到资深工程师
- 热加载、同平台数值保真、一键部署，让“训练—部署—再训练”的循环转得更顺

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">如果开源模型不能超越或比肩闭源模型的质量，那么差异化的关键就在于你如何定制、训练和改进这些开源模型，使其性能和质量达到闭源模型的水平。</span>  
> *if open source models don't beat or match the quality of closed source models, the differentiating factor comes from how you customize, train, and improve these open source models to match the performance and quality of closed source models.*  
> <span class="qm">—— Jatishree · [01:49]</span> ^q1

> <span class="qz">目前在生产环境中大规模运行，我们每天服务约 30 万亿 token,而且还在增长。</span>  
> *So today in production at scale, we serve about 30 trillion tokens and it's increasing.*  
> <span class="qm">—— Jatishree · [03:12]</span> ^q2

> <span class="qz">我确信随着 GLM 5.2 的发布，现在这个数字大概每天至少增加了 5 万亿 token。</span>  
> *I'm sure this has pretty much kind of increased by about at least 5 trillion tokens a day now with the GLM 5.2 release.*  
> <span class="qm">—— Jatishree · [03:22]</span> ^q3

> <span class="qz">由于我们拥有的 fire retention 引擎，它能够实现 13 倍更快的推理。</span>  
> *It is able to achieve 13x faster inference because of the fire retention engine that we have.*  
> <span class="qm">—— Jatishree · [03:59]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-17-twentyvc-20vc-horizontal-vs-vertical-agents-who-w|LangChain 创始人：智能体为什么还这么难做，钱又会流向哪里]]<span class="pd-rz">同公司:Fireworks · 同概念:开源模型 (open source models)、推理 (inference)、智能体 (agent)</span>
- [[2026-08-22-twentyvc-20vc-the-ai-bubble-will-burst-half-the-n|Insight 创始人 Jerry Murdock：AI 泡沫何时破裂，谁会死掉]]<span class="pd-rz">同公司:Fireworks、Cursor · 同概念:开源模型 (open source models)、智能体 (agent)、推理 (inference)</span>
- [[2026-07-08-latent-space-modal|不只做推理：Modal 如何跨界多节点训练与智能体云]]<span class="pd-rz">同概念:投机解码 (speculative decoding)、推理 (inference)、智能体 (agent)、Kubernetes</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-20-twentyvc-20vc-spacex-buys-cursor-for-60bn-stripe|SpaceX 600亿买Cursor：AI并购的疯狂逻辑]]<span class="pd-rz">同公司:Cursor · 同概念:推理 (inference)、智能体 (agent)</span>
- [[2026-08-07-yc-how-to-design-in-the-agent-era-e3n42jd|别让 AI 默认审美毁了你的产品:Paper 如何用 HTML 重新定义设计工具]]<span class="pd-rz">同公司:Cursor、Vercel · 同概念:智能体 (agent)</span>
- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同公司:Vercel · 同概念:智能体 (agent)</span>

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
