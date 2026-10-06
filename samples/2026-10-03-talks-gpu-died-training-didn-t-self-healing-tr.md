---
title: "在 Kubernetes 上跑 Slurm:让 GPU 故障自动自愈"
podcast: 精选演讲
date: 2026-10-06
source_url: undefined
duration: "16:34"
type: episode
cover: "#64748b"
description: "Crusoe 团队讲解如何在 Kubernetes 之上构建托管 Slurm,让数千卡训练集群在 GPU 故障时自动检测、替换节点、恢复训练，全程无需人工干预。"
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
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-03-talks-gpu-died-training-didn-t-self-healing-tr#post","headline":"在 Kubernetes 上跑 Slurm:让 GPU 故障自动自愈","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-03-talks-gpu-died-training-didn-t-self-healing-tr","mainEntityOfPage":"https://talk.solomind.cc/2026-10-03-talks-gpu-died-training-didn-t-self-healing-tr","description":"Crusoe 团队讲解如何在 Kubernetes 之上构建托管 Slurm,让数千卡训练集群在 GPU 故障时自动检测、替换节点、恢复训练，全程无需人工干预。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Young"},{"@type":"Person","name":"Nikhil"},{"@type":"Person","name":"Connor"},{"@type":"Organization","name":"Crusoe"},{"@type":"Thing","name":"Slurm"},{"@type":"Thing","name":"Kubernetes"},{"@type":"Thing","name":"AutoClusters"},{"@type":"Thing","name":"Crusoe Managed Slurm"},{"@type":"Thing","name":"GPU 故障 (GPU failure)"},{"@type":"Thing","name":"多节点训练 (multi-node training)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"checkpoint"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"在 Kubernetes 上跑 Slurm:让 GPU 故障自动自愈","item":"https://talk.solomind.cc/2026-10-03-talks-gpu-died-training-didn-t-self-healing-tr"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>在 Kubernetes 上跑 Slurm:让 GPU 故障自动自愈</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 在 Kubernetes 上跑 Slurm:让 GPU 故障自动自愈

<div class="pd-byl"><b>Connor</b> · Crusoe 开发者布道师 · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-03-talks-gpu-died-training-didn-t-self-healing-tr.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">你不需要搭建一套全新的基础设施栈、新的可观测性工具、新的值班团队、新的 runbook,都不需要。</div><div class="a">— Nikhil <button class="pd-ts" data-t="08:30" data-who="Nikhil" data-en="You don't need to set up an entirely new infrastructure stack, new observability tools, new on-call teams, new runbooks, nothing like that." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Young]] · [[Nikhil]] · [[Connor]]
>
> **公司** [[Crusoe]]
>
> **概念** [[Slurm]] · [[Kubernetes]] · [[AutoClusters]] · [[Crusoe Managed Slurm]] · [[GPU 故障]] · [[多节点训练]] · [[推理]] · [[checkpoint]]

训练大模型时，数千块 GPU 里坏几块几乎是必然的——而在这规模下靠工程师手动修，完全撑不住。

这一集是 [[Crusoe|Crusoe]] 的开发者布道师 [[Connor|Connor]] 和同事 [[Nikhil|Nikhil]]、[[Young|Young]] 的技术分享，讲他们如何在 [[Kubernetes|Kubernetes]] 之上搭 [[Slurm|Slurm]],让 GPU 硬件故障从「半夜爬起来 debug 几小时」变成「五分钟自动换好节点、训练自己接着跑」。

## Slurm 强在哪，又差在哪

Young 先讲了为什么业界训练还是离不开 Slurm(20 多年前为高校实验室高性能计算打造的作业调度系统)。它对训练负载非常合适：

[[多节点训练|多节点训练]]需要在各个 rank 之间做紧密的集合通信，Slurm 现成就有 gang scheduling(把一组节点同时腾出来再一起开跑)、拓扑感知、用于集群验证的 prologue/epilogue,研究人员用熟悉的 sbatch、srun 命令就能跑。

但对现代 AI 工作负载，它有三个短板:

- **太静态**。今天的 AI 不只是训练，还有后训练、评估、[[推理|推理]]，加上 GPU 容量紧张，资源需要动态调配——而 Slurm 的分区等功能传统上相当死板。
- **运维负担重**。GPU 确实会坏。你得检测坏节点、排空节点、绕过它们，要么手动要么自己写自动化脚本，这些全是额外负担。
- **可观测性差**。Slurm 知道任务失败了，但说不清为什么失败——网络抖动、交换机问题都可能导致性能下降，排查要靠别的工具。

## 在 Kubernetes 上跑 Slurm:两拨人都不用改习惯

Nikhil 讲了他们的解法：[[Crusoe Managed Slurm|Crusoe Managed Slurm]] 直接建在 Kubernetes(云的操作系统，有成熟的自愈、负载均衡、自动扩缩容生态)之上。

他们的 Slurm operator(CSO)统一管理 Slurm 用户、分区、配置和存储——一条命令就建好集群。好处是双向的：

- **对 Slurm 用户**：这就是又一个 Slurm 集群，一个 IP 地址、SSH 上去就能用，他们甚至不需要知道底下跑着 Kubernetes。
- **对平台团队**：Slurm 只是接入现有基础设施的又一个服务，不用搭新栈、新可观测性工具、新值班团队、新 runbook。

而且所有 GPU 在一个集群里，资源就能动态流转：推理高峰时从训练集群抽硬件过去；

用户负载下降、GPU 闲下来时，正好加大训练或跨更多卡做一次大规模 hero run——Nikhil 强调，这只有把所有东西放进同一套基础设施栈才做得到。

## AutoClusters:从故障到恢复训练，全自动

Connor 演示了核心的自动修复流程。当一块 GPU 出现 XID79 错误(该 GPU 完全不可用的严重硬件错误)时：

- 用户收到通知，但**无需任何操作**；
- Slurm operator 把该节点标记为 down,取消正在运行的作业；进程收到 sigterm 信号，有最多两分钟保存 [[checkpoint|checkpoint]] 或刷新日志；
- 被取消的作业自动重新排队；
- [[AutoClusters|AutoClusters]] 确认该节点没有带「禁止自动替换」标签的 pod,然后把 Kubernetes 节点 cordon(封锁不再调度)并 drain(排空)；
- 坏节点从节点池移除，从备用容量换上一个健康节点，全程记录在案；
- 新节点上线后，Slurm 作业自动启动，加载模型和 checkpoint,训练从断点继续。

Demo 里，从检测到错误到健康节点回池大约**五分钟**，加上应用层加载模型和 checkpoint,端到端不到 15 分钟，GPU 利用率恢复正常。

Connor 的原话：这比让一名工程师半夜登录、花几小时 debug 要好得多。

## 本集带走

- **故障不可避免，架构该负责**：与其指望人不出错，不如把基础设施设计成出错时所有正确动作自主完成，工程师专心写应用。
- **Slurm 管调度，Kubernetes 管弹性**：两者结合后系统状态保持同步——坏节点被自动 cordon,信号直接传给 Slurm operator,训练团队照用 sbatch/srun,平台团队照用原有的遥测和可观测性。
- **checkpoint + 自动重排队是自愈的另一半**：节点替换只花五分钟，训练能无缝恢复靠的是 sigterm 宽限期内存 checkpoint、取消的作业自动重新排队。
- **动态调度价值等于省真金白银**：同一套栈里训练和推理可以互相借硬件，闲时 GPU 立刻投入更大规模的训练。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">你不需要搭建一套全新的基础设施栈、新的可观测性工具、新的值班团队、新的 runbook,都不需要。</span>  
> *You don't need to set up an entirely new infrastructure stack, new observability tools, new on-call teams, new runbooks, nothing like that.*  
> <span class="qm">—— Nikhil · [08:30]</span> ^q1

> <span class="qz">当你的用户负载下降、GPU 都闲着时，那正是加大训练作业、或者跨更多 GPU 做一次更大规模 hero run 的完美时机。</span>  
> *When your user load goes down, you have all these GPUs sitting idle. That's the perfect time to up your training job or do a larger hero run across more GPUs.*  
> <span class="qm">—— Nikhil · [09:22]</span> ^q2

> <span class="qz">基础设施的架构应该被设计成：当出现严重错误时，所有正确的操作都自主完成，工程师可以专注于构建他们的应用，而不用担心基础设施。</span>  
> *The architecture of infrastructure should be designed in a way so that when there is a critical error, all the right actions are handled autonomously and engineers can focus on building their application and not worrying about the infrastructure.*  
> <span class="qm">—— Connor · [16:04]</span> ^q3

> <span class="qz">使用 auto-clusters,从检测到严重硬件错误到把一个健康节点重新纳入节点池的完整过程大约需要五分钟。</span>  
> *And the full process from detecting a critical hardware error to getting a healthy node back into the node pool takes roughly five minutes with auto-clusters.*  
> <span class="qm">—— Connor · [12:18]</span> ^q4

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
