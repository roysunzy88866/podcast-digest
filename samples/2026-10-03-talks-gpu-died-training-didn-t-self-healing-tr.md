---
title: GPU 坏了，训练不用停：Crusoe 的自愈式训练平台
podcast: 精选演讲
date: 2026-10-06
source_url: undefined
duration: "16:34"
type: episode
cover: "#64748b"
description: Crusoe 的三位工程师讲解如何用 Slurm 加 Kubernetes 搭建大规模训练集群，让 GPU 故障自动修复、训练自动续跑。
host: "[[Young]]"
cohosts: ["[[Nikhil]]", "[[Connor]]"]
companies: ["[[Crusoe]]"]
concepts: ["[[Slurm]]", "[[Kubernetes]]", "[[AutoClusters]]", "[[Crusoe Managed Slurm]]", "[[GPU 故障]]", "[[多节点训练]]", "[[推理]]", "[[checkpoint]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-03-talks-gpu-died-training-didn-t-self-healing-tr#post","headline":"GPU 坏了，训练不用停：Crusoe 的自愈式训练平台","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-03-talks-gpu-died-training-didn-t-self-healing-tr","mainEntityOfPage":"https://talk.solomind.cc/2026-10-03-talks-gpu-died-training-didn-t-self-healing-tr","description":"Crusoe 的三位工程师讲解如何用 Slurm 加 Kubernetes 搭建大规模训练集群，让 GPU 故障自动修复、训练自动续跑。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Young"},{"@type":"Person","name":"Nikhil"},{"@type":"Person","name":"Connor"},{"@type":"Organization","name":"Crusoe"},{"@type":"Thing","name":"Slurm"},{"@type":"Thing","name":"Kubernetes"},{"@type":"Thing","name":"AutoClusters"},{"@type":"Thing","name":"Crusoe Managed Slurm"},{"@type":"Thing","name":"GPU 故障 (GPU failure)"},{"@type":"Thing","name":"多节点训练 (multi-node training)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"checkpoint"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"GPU 坏了，训练不用停：Crusoe 的自愈式训练平台","item":"https://talk.solomind.cc/2026-10-03-talks-gpu-died-training-didn-t-self-healing-tr"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>GPU 坏了，训练不用停：Crusoe 的自愈式训练平台</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# GPU 坏了，训练不用停：Crusoe 的自愈式训练平台

<div class="pd-byl"><b>Connor</b> · Crusoe 开发者布道师 · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-03-talks-gpu-died-training-didn-t-self-healing-tr.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>



> [!info] 关联
> **人物** [[Young]] · [[Nikhil]] · [[Connor]]
>
> **公司** [[Crusoe]]
>
> **概念** [[Slurm]] · [[Kubernetes]] · [[AutoClusters]] · [[Crusoe Managed Slurm]] · [[GPU 故障]] · [[多节点训练]] · [[推理]] · [[checkpoint]]

在几千块 GPU 上训练大模型，**GPU 出故障不是意外，而是必然**。

[[Crusoe|Crusoe]] 是一家提供 GPU 云服务的公司，三位工程师 [[Connor|Connor]]、[[Young|Young]] 和 [[Nikhil|Nikhil]] 在这场演讲里讲了他们的做法：

把高性能计算调度器 [[Slurm|Slurm]] 跑在 [[Kubernetes|Kubernetes]] 上，再加上一套叫 [[AutoClusters|AutoClusters]] 的自动修复系统，GPU 坏了不用人管，训练 15 分钟内恢复。

## 训练为什么偏爱 Slurm?

Slurm 是 20 多年前大学和实验室的研究人员为高性能计算造的调度器。它天生适合[[多节点训练|多节点训练]]任务：

要跑一个分布在多台机器上的训练，各个节点之间需要紧密的集合通信，还要有帮派调度（所有节点要么一起启动、要么不启动）、拓扑感知（知道哪些机器离得近）这些能力，Slurm 全都有 <button class="pd-ts" data-t="02:47" data-who="Young" data-en="SLURM was built by the researchers for the researchers, universities, labs over 20 years ago, built for high-performance computing, which, as we've observed with our customers and others that are using SLURM today, translates very well to modern AI, specifically around training workloads." aria-label="回原文"></button>。

研究人员也熟悉它。写个脚本，用 sbatch、srun 命令提交任务，和在实验室里干活一模一样。

## 但 Slurm 有三个短板

第一个是太静态。今天的 AI 工作负载很杂：训练、后训练、评测、[[推理|推理]]，资源需求变化很快，而 Slurm 的分区划分传统上是固定的 <button class="pd-ts" data-t="04:14" data-who="Young" data-en="Kind of limits you to how you need to be able to be more dynamic around the resources that you have. Slurm traditionally is pretty static and it's partitioning and other functionalities." aria-label="回原文"></button>。

第二个是运维负担。GPU 会坏，发现坏节点、排空它、重新排队任务，这些事 Slurm 有工具能做，但要么靠人工，要么自己写自动化脚本。

第三个是可观测性。Slurm 知道任务失败了，但说不清为什么失败——是 GPU 坏了，还是网络抖动？这就得靠监控体系来补。

## 为什么把 Slurm 搬到 Kubernetes 上？

另一方面，Kubernetes 是云上的操作系统，生态成熟，自带自愈、负载均衡、自动扩缩容。

很多客户的情况是：推理团队用 Kubernetes，训练团队用 Slurm，两套基础设施并行，运维和成本都翻倍 <button class="pd-ts" data-t="07:24" data-who="Nikhil" data-en="And with how fast everyone's trying to get to the next best model and next best product, Teams get set up with the tools they're familiar with, and you end up with two separate infrastructure stacks, which has its own host of extra operational burdens and extra costs." aria-label="回原文"></button>。

Crusoe 的方案是在他们的托管 Kubernetes 服务 CMK 之上构建托管 Slurm（底层用了 Slinky，即 SkedMD 开源的在 Kubernetes 上跑 Slurm 的项目）。

对研究人员来说，它就是一个普通的 Slurm 集群：拿到 IP 地址、SSH 登录、照常提交任务，根本不用知道底下是 Kubernetes <button class="pd-ts" data-t="08:11" data-who="Nikhil" data-en="So the benefit is, for the Slurm users, it's just another Slurm cluster. They just need an IP address. They can SSH with their user." aria-label="回原文"></button>。

对平台团队来说，Slurm 只是一个普通服务，复用现有的监控和值班体系。

一个额外的好处：所有 GPU 在同一个池子里，可以灵活调配。

比如推理流量高峰时把训练集群的部分 GPU 划给推理，流量下来、GPU 闲置时，再拿去跑更大规模的训练 <button class="pd-ts" data-t="09:15" data-who="Nikhil" data-en="It enables more interesting tooling and dynamic availability, like when you need to burst your inference service when you're reaching high users, high number of users." aria-label="回原文"></button>。

## GPU 真坏了，会发生什么？

AutoClusters 处理的关键场景之一是 XID79 错误——某块 GPU 完全不可用。**整个流程是全自动的** <button class="pd-ts" data-t="10:03" data-who="Connor" data-en="So Connor is going to walk through that and show a demo of how that works. So this is an overview of what exactly happens when AutoClusters detects a critical hardware error, in this case an XID79 error, where one of the GPUs is completely unusable." aria-label="回原文"></button>：

1. 用户收到通知，但不需要做任何事；
2. Slurm 操作器把坏节点标记为下线，取消正在跑的任务，进程收到终止信号，有最多两分钟时间保存检查点或输出日志；
5. 新节点上线后，任务重启，加载检查点，从断点继续训练。

## 现场演示：全程不到 15 分钟

Connor 做了现场演示：在两个 A100 节点上跑 PyTorch 训练，然后人为触发一个 XID79 错误。GPU 利用率立刻掉下来，节点替换随即启动。

从检测到硬件错误、换上健康节点，AutoClusters 只花大约 5 分钟，其余时间是应用层加载模型和检查点，**端到端总停机时间不到 15 分钟** <button class="pd-ts" data-t="12:18" data-who="Connor" data-en="And so we know that that GPU has gone offline and auto-clusters node replacement starts immediately. And the full process from detecting a critical hardware error to getting a healthy node back into the node pool takes roughly five minutes with auto-clusters." aria-label="回原文"></button>。

对比一下没有这套系统的情形：工程师半夜被叫起来，花几个小时排查问题。

## 一条命令建好整个环境

过去把 Slurm 和 Kubernetes 融在一起很麻烦。

Crusoe 宣布了一键 Slurm：一条命令就配好 Kubernetes 集群、Slurm 控制器、登录节点和存储，再加一条命令就能加上 GPU 节点池，AutoClusters 默认开启 <button class="pd-ts" data-t="13:25" data-who="Connor" data-en="Now historically, creating this type of environment has been challenging to merge both Slurm and Kubernetes. And so we're really excited to announce what we call one-click Slurm, where everything that we've talked about in this presentation, this entire environment can be provisioned with just a single command." aria-label="回原文"></button>。

核心想法可以归结为一句话：

**故障不可避免，基础设施的架构应该保证关键错误发生时，所有该做的事都自动完成**，让工程师专注于应用本身，而不是半夜爬起来修机器 <button class="pd-ts" data-t="16:00" data-who="Connor" data-en="And so the core idea here is that failures are inevitable. And so in today's AI landscape, the architecture of infrastructure should be designed in a way so that when there is a critical error, all the right actions are handled autonomously and engineers can focus on building their application and not worrying about the infrastructure." aria-label="回原文"></button>。

## 本集带走

- 在几千块 GPU 的规模上，[[GPU 故障|GPU 故障]]是常态，人工修复不可持续
- Slurm 提供高性能调度，但缺自动化修复和可观测性；Kubernetes 正好补上
- 把 Slurm 跑在 Kubernetes 上，研究人员照常用 sbatch，平台团队照常用现有监控，两边都不用改工作流
- AutoClusters 全自动换掉坏节点，从故障到恢复训练，全程不到 15 分钟
- GPU 统一在一个节点池里，可以在训练和推理之间动态调配，避免闲置浪费

<div class="pd-sec pd-sec-q">全部金句 <span>0 条</span></div>



<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-08-latent-space-modal|不只做推理：Modal 如何跨界多节点训练与智能体云]]<span class="pd-rz">同概念:Kubernetes、推理 (inference)</span>
- [[2026-10-03-twentyvc-20vc-the-future-of-datacentres-what-you|卖数据中心、卖 GPU、再卖 token:Crusoe 的 AI 算力生意经]]<span class="pd-rz">同公司:Crusoe · 同概念:推理 (inference)</span>
- [[2026-09-03-talks-tethered-our-agents-are-us-shu-fang-two|给智能体系上绳索:Two Sigma 让云端 AI 以你的身份安全运行]]<span class="pd-rz">同概念:Kubernetes、推理 (inference)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-20-a16z-hugging-faces-ceo-on-open-source-ai-mode|Hugging Face CEO：开源 AI 更安全，下一阶段属于模型路由]]<span class="pd-rz">同概念:推理 (inference)</span>
- [[2026-07-27-twentyvc-20vc-leading-anthropic-s-first-ever-roun|主导投资 Anthropic 的人：风投的游戏规则已经彻底变了]]<span class="pd-rz">同概念:推理 (inference)</span>
- [[2026-07-28-yc-sam-altman-never-a-better-time-to-do-a-s|Sam Altman 谈 AI 时代的创业法则:被全世界当成白痴是最大优势]]<span class="pd-rz">同概念:推理 (inference)</span>

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
