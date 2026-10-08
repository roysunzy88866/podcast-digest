---
title: 知识该放哪？提示词、记忆还是微调？
podcast: 精选演讲
date: 2026-10-07
source_url: undefined
duration: "20:01"
type: episode
cover: "#64748b"
description: Anant Srivastava 讲企业 AI 系统的架构决策：提示词管行为、记忆管事实、微调管反射。
guests: ["[[Anant Srivastava]]"]
concepts: ["[[提示词]]", "[[记忆]]", "[[权重]]", "[[微调]]", "[[RAG]]", "[[智能体]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-04-talks-stop-fine-tuning-to-fix-retrieval-proble#post","headline":"知识该放哪？提示词、记忆还是微调？","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-04-talks-stop-fine-tuning-to-fix-retrieval-proble","mainEntityOfPage":"https://talk.solomind.cc/2026-10-04-talks-stop-fine-tuning-to-fix-retrieval-proble","description":"Anant Srivastava 讲企业 AI 系统的架构决策：提示词管行为、记忆管事实、微调管反射。","datePublished":"2026-10-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Anant Srivastava"},{"@type":"Thing","name":"提示词 (prompt)"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"权重 (weights)"},{"@type":"Thing","name":"微调 (fine-tuning)"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"智能体 (agent)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"知识该放哪？提示词、记忆还是微调？","item":"https://talk.solomind.cc/2026-10-04-talks-stop-fine-tuning-to-fix-retrieval-proble"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>知识该放哪？提示词、记忆还是微调？</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 知识该放哪？提示词、记忆还是微调？

<div class="pd-byl"><b>Anant Srivastava</b> · 2026-10-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-04-talks-stop-fine-tuning-to-fix-retrieval-proble.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">今天,我要论证的是:大多数企业团队是靠偶然做出这个决策的。</div><div class="a">— Anant Srivastava <button class="pd-ts" data-t="00:53" data-who="Anant Srivastava" data-en="Today, I'm going to argue that this is a decision that most enterprise teams make by accident." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Anant Srivastava]]
>
> **概念** [[提示词]] · [[记忆]] · [[权重]] · [[微调]] · [[RAG]] · [[智能体]]

企业 AI 系统里，真正难的工程问题往往不是模型本身。模型只是吃进文字、吐出文字，而你的知识散落在文件、数据库和接口里。

[[Anant Srivastava|Anant Srivastava]] 在这场演讲里提出一个核心观点：

知识如何到达模型——是放进[[提示词|提示词]]、放进检索和[[记忆|记忆]]层，还是通过[[微调|微调]]写进模型[[权重|权重]]——大多数团队是稀里糊涂决定的，而这不是一条越爬越高的梯子，而是3种工具，对应3种不同的工作。

## 团队是怎么意外做出架构决策的？

路径一很常见：模型答错了，先改提示词；还不对，就去查检索系统；再不行，干脆微调模型。

更隐蔽的是路径二：即使没人明确升级方案，团队其实每天都在做这类决策。改一次提示词，就把一部分行为放进了提示词；

索引一份文档，就把一部分知识放进了记忆；挑一批训练样本，就把一些东西烧进了模型权重。

这些都是架构决策，只是没人这么称呼它。

他举了一个自己见过的真实剧本：一个内部客服助手上线后，产品经理改提示词调语气；

客服团队往检索系统里加退款政策文档；工程师把产品目录整个塞进提示词；

最后机器学习团队用半年前的客服工单微调模型。

每一步单看都合理，但当新产品目录上线、替换掉提示词里的旧目录后，助手仍然报出根本不存在的产品名——因为旧目录在微调时渗进了模型权重。

这就是那个意外：**架构是被半年里的日常工作一点点堆出来的，不是设计出来的**。

没有人为整体负责，也没人问过那个诊断性的问题——这个东西到底该放在哪。

## 提示词的职责：行为、语气、人设

**提示词该放的是行为类内容：语气、人设、做事方式**——特点是体量小、稳定、便于随时修改。

提示词不该存事实。

把产品目录塞进提示词，等于白白给模型塞上下文、为此付费，而且上下文太长还会碰到迷失在中间的问题——模型对放在长文本中部的信息视而不见。

判断标准很简单：这段知识是不是小而稳定，而且讲的是该怎么表现而不是该知道什么。

比如一个 SaaS 产品的客服代理：专业语气、失败3次后转人工、给出具体下一步——这些每次对话都一样，就该住在提示词里。

## 记忆的职责：大、常变、可引用

记忆（包括通过检索增强接入的外部知识库，和代理自己对用户的记忆）该放的是当前、庞大、可引用的知识。

当前，指变化速度比你微调的节奏还快；庞大，指塞不进提示词；可引用，指生产系统的答案必须能指出来源。

记忆不该承担行为，更不该指望靠堆上下文来补推理能力。「如果模型连推理3份文档都做不到，给它50份也没用」。

推理不行，该换模型。

另外，凡是涉及权限控制的知识——这个用户不能看那个用户的数据——必须放记忆层，因为只有在那里才能控制谁看到什么。

好的例子是代码助手：它可以访问公司全部代码仓库。==你会微调模型去记住代码吗==？不会，代码天天在变。

你会把整个代码库塞进提示词吗？也不会。这里他给了两条实操建议：用基于抽象语法树的代码感知分块来做切分；

给每个代码块做反规范化处理，标注它属于哪个仓库、谁能提交——用元数据过滤，才能取到真正需要的块，而不是返回一堆检索糊，把模型都搞糊涂。

## 微调的职责：只固化不再变化的东西

权重里该放什么？答案出人意料地简单：已经停止变化的东西。决定性的唯一指标是变化速度。

但要小心，问题往往比「没人会拿价格表去微调」更隐蔽。

一个常见翻车现场：内部文档助手答得不好，团队决定教它领域知识，于是拿文档、操作手册和流程规范去微调。

结果模型开始输出过时的信息。其实那本来是个检索问题——模型缺的是对的文档片段，团队却去微调了模型。

他的建议直白：如果模型答不对，去修检索问题，别急着自己去微调模型。

反过来的正例是内容审核、理赔处理这类模糊难题：起步时用前沿模型给建议，人工纠错。

一段时间后模式浮现——中间一大块变得稳定，人工改判率趋平；剩下一条仍有争议的边缘地带需要人。

那个稳定的中心，才是可以拿去微调的素材。微调之后还要监控漂移：中心一旦移动，麻烦就来了。

医疗理赔编码是个更具体的例子。Mount Sinai 和 IMO Health 的场景里，医生笔记要映射到 ICD-10 编码，共约 70000 个编码。

编码本身是事实、偶尔还会变、还得海量训练数据才学得动——不该微调。

该微调的是反射：让模型熟悉输入的格式、 reflexively 在格式之间做出正确选择。

微调前先问自己两个问题之一：是模型能力不够，还是为了省钱？

很多时候不是能力问题——前沿模型已经很强，通常是为了成本：有了稳定的模式，可以用小模型微调后便宜地跑量。

## 三者不是梯子，而是一个循环

一张表总结：提示词管行为，记忆管知道什么，权重管怎么推理。

但架构不止是静态分工，还是流动的。

上下文窗口里的信息会产生信号，有些沉淀为记忆；新会话开始时，记忆又被取出、注入上下文。

随着系统运行，那些模型应该条件反射式掌握的格式和模式，会从记忆沉淀到微调；

而微调完成后，模型已经内化了格式，你就不用每次都检索示例塞给它了——什么值得检索也随之改变。

久而久之这成了循环：代理靠干活本身，越干越熟练。

他的结论是：**模型是容易的部分，真正要造的是模型外面那层挽具**——把对的信息放到对的地方，并让它们流动起来。

## 本集带走

- 知识放哪里要按职责判断：提示词放行为，记忆放事实，微调固化已停止变化的模式和反射。
- 决定微调与否的核心指标是变化速度；答案不对先修检索，别急着微调。
- 涉及权限控制的知识必须留在记忆层，才能控制谁看到什么。
- 架构是循环不是梯子：上下文沉淀为记忆，稳定的模式沉淀为权重，微调后又改变该检索什么。
- 每次改提示词、索引文档、挑训练样本，都是在做架构决策——只是大多数团队没意识到。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">今天,我要论证的是:大多数企业团队是靠偶然做出这个决策的。</span>  
> *Today, I'm going to argue that this is a decision that most enterprise teams make by accident.*  
> <span class="qm">—— Anant Srivastava · [00:53]</span> ^q1

> <span class="qz">嗯,因为当你用支持工单微调时,产品目录已经泄漏进权重里了。</span>  
> *Well, the product catalog leaked into the weights when you fine-tuned it on your support tickets.*  
> <span class="qm">—— Anant Srivastava · [04:23]</span> ^q2

> <span class="qz">没有人负责它,意思是每个人都拥有它的一部分。</span>  
> *Nobody owned it, meaning everybody owned a piece of it.*  
> <span class="qm">—— Anant Srivastava · [04:49]</span> ^q3

> <span class="qz">prompt 的错误职责是存储事实。</span>  
> *The wrong job for the prompt is to store facts.*  
> <span class="qm">—— Anant Srivastava · [05:31]</span> ^q4

> <span class="qz">通常,你会微调你的模型去学习反射,而不是事实。</span>  
> *You'd fine-tune your model to learn reflexes, not facts, typically.*  
> <span class="qm">—— Anant Srivastava · [09:43]</span> ^q5

> <span class="qz">微调的诊断标准是:信息是否已经停止变化?</span>  
> *Fine-tuning is, has the information stopped changing?*  
> <span class="qm">—— Anant Srivastava · [16:18]</span> ^q6

> <span class="qz">所以我想以这句话作结:模型是容易的部分。</span>  
> *So what I would like to conclude with is the model is the easy part.*  
> <span class="qm">—— Anant Srivastava · [19:31]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-24-mad-who-feeds-the-gpus--inside-ais-hidden-30|300亿美元的隐形公司：VastData 要做 AI 时代的操作系统]]<span class="pd-rz">同概念:RAG、智能体 (agent)、权重 (weights)、推理 (inference)</span>
- [[2026-08-29-talks-agents-are-where-microservices-were-in-2|Navan 架构师谈生产环境智能体：从运行时到护栏的实战分层]]<span class="pd-rz">同概念:RAG、智能体 (agent)、记忆 (memory)</span>
- [[2026-09-26-talks-long-horizon-agents-need-experiments-not|给 AI 村庄装上自动研究循环：长时程智能体的实验配方]]<span class="pd-rz">同概念:RAG、智能体 (agent)、记忆 (memory)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-29-latent-thariq|Anthropic 的 Thariq 谈 Claude Code：提示词、CloudMods 与给前沿踩刹车]]<span class="pd-rz">同概念:提示词 (prompt)、智能体 (agent)、推理 (inference)</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:提示词 (prompt)、智能体 (agent)</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:智能体 (agent)、记忆 (memory)</span>

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
