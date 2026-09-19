---
title: 每天100万份协议：DocuSign 携手 NVIDIA 把合同表格变成可用数据
podcast: 精选演讲
date: 2026-09-19
source_url: undefined
duration: "18:06"
type: episode
cover: "#64748b"
description: DocuSign 产品负责人 Haral 与 NVIDIA 产品经理 Sean 讲解两家如何用专用小模型 Nemotron Parse 攻克合同表格提取，让埋在 PDF 里的定价、条款数据可查询可用。
guests: ["[[Hiral Shah]]", "[[Sean Sodha]]"]
companies: ["[[DocuSign]]", "[[NVIDIA]]"]
concepts: ["[[Nemotron]]", "[[表格提取]]", "[[智能体]]", "[[OCR]]", "[[量化]]", "[[VLM]]", "[[开源模型]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-16-talks-your-agreements-are-a-database-you-can-t#post","headline":"每天100万份协议：DocuSign 携手 NVIDIA 把合同表格变成可用数据","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-16-talks-your-agreements-are-a-database-you-can-t","mainEntityOfPage":"https://talk.solomind.cc/2026-09-16-talks-your-agreements-are-a-database-you-can-t","description":"DocuSign 产品负责人 Haral 与 NVIDIA 产品经理 Sean 讲解两家如何用专用小模型 Nemotron Parse 攻克合同表格提取，让埋在 PDF 里的定价、条款数据可查询可用。","datePublished":"2026-09-19","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Hiral Shah"},{"@type":"Person","name":"Sean Sodha"},{"@type":"Organization","name":"DocuSign"},{"@type":"Organization","name":"NVIDIA"},{"@type":"Thing","name":"Nemotron"},{"@type":"Thing","name":"表格提取 (table extraction)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"OCR"},{"@type":"Thing","name":"量化 (quantization)"},{"@type":"Thing","name":"VLM"},{"@type":"Thing","name":"开源模型 (open source models)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"每天100万份协议：DocuSign 携手 NVIDIA 把合同表格变成可用数据","item":"https://talk.solomind.cc/2026-09-16-talks-your-agreements-are-a-database-you-can-t"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>每天100万份协议：DocuSign 携手 NVIDIA 把合同表格变成可用数据</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 每天100万份协议：DocuSign 携手 NVIDIA 把合同表格变成可用数据

<div class="pd-byl"><b>Hiral Shah</b> · DocuSign 产品高级总监 · 2026-09-19</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-16-talks-your-agreements-are-a-database-you-can-t.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">这些钱锁在协议谈判达成的价值里，没有人加以利用，没有人回头去把这些数据挖出来。</div><div class="a">— Hiral Shah <button class="pd-ts" data-t="02:19" data-who="Hiral Shah" data-en="Captured in this agreement negotiated value that no one capitalizes, no one goes back and gets that data back." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Hiral Shah]] · [[Sean Sodha]]
>
> **公司** [[DocuSign]] · [[NVIDIA]]
>
> **概念** [[Nemotron]] · [[表格提取]] · [[智能体]] · [[OCR]] · [[量化]] · [[VLM]] · [[开源模型]]

这一集聊的是一个几乎所有企业都被困住的问题：协议数据。每天签的合同、订单表、价格表里埋着大量关键信息，但它们锁在 PDF 这类非结构化格式里，没人能查、能用。说这件事的两个人，一位是 [[DocuSign|DocuSign]] 的产品高级总监 Haral,另一位是 [[NVIDIA|NVIDIA]] 的产品经理 Sean,他们来讲两家公司怎么合作解决这个问题。

先说规模有多大。DocuSign 有 190 万付费客户、10 亿用户，每天处理 100 万份协议。

他们和德勤做过一项研究：有 2 万亿美元锁在协议谈判达成的价值里，没有人去利用、没有人回头把这些数据挖出来。为什么挖不出来？

因为靠人工阅读和审查、系统彼此割裂、流程大量靠手工。法务、采购、销售团队经常花几个小时翻文档，就为了定位一个基本信息。

## 难点：表格是传统工具的死穴

企业合同里最值钱的东西——价格层级、SKU、SLA、费率卡——几乎全是表格。而传统文档提取工具和通用大模型在这里完全失败，他们试过了。原因是这些工具逐行读取文本，把表格里的概念结构全破坏了：合并单元格、没有清晰边界的内容都处理不了。

还有一个容易被忽略的复杂性：协议不是平面的，而是分层的——一份协议管辖另一份协议，你回答一个问题往往需要综合多份文档。比如问「我们和 Claude 签的合同里 total tokens 是多少？」,没人答得上来，因为答案以不同形式埋在合同里。

## 解决方案：一个小而专的提取模型

这就是 NVIDIA [[Nemotron|Nemotron]] Retriever 计划登场的地方。Nemotron 是 NVIDIA 构建世界级[[开源模型|开源模型]]的项目，连数据集、[[量化|量化]]、蒸馏、剪枝方法和配套蓝图全部开源发布。其下的 Nemotron Parse 模型专为[[表格提取|表格提取]]打造——这件事的排列组合极其庞大：嵌套表格、合并单元格、合并列、合并行，是一个非常棘手的问题。

这个模型的关键取舍在于「小」：它是 [[VLM|VLM]](视觉语言模型)，但参数量远小于通常数十亿参数的重型模型。它是一个单次推理的一体化模型：输入一份文档，直接输出语义版面、文本、阅读顺序、保留结构的表格，不再需要 YOLOX 那类分别做表格或页面元素提取的小模型拼装。

可以用 NVIDIA NIM 或 vLLM(一种高性能推理服务框架)部署。注意它的定位：它不是生成器，说到底是一个提取器。

## 演示：几秒钟把合同变成数据

在 Agreement Manager(一个组织签过的所有协议的中央存储库)里上传一份订单表，几秒钟之内就提取出一整套丰富的元数据：关键条款、商业细节自动结构化并高亮，可以点击直接跳到原文位置。NVIDIA 模型负责的部分是定价数据：把复杂表格分解成结构化的订单细节，可以下载成 CSV 给财务、采购团队用，也可以通过 API 获取。他们的客户从有 1000 份协议到有几百万份协议的都有。

## 学到的三件事

第一，为你要做的具体工作构建专用模型，是他们能把东西更快推向市场的关键。第二，模型效率：更小的模型意味着更低延迟、更低成本，才能撑住他们所说的百万级规模。

第三，速度：对比很多其他开源模型，Nemotron 每秒能提取的表格数量快了 20 倍。结论：对企业来说，更小的专用模型才是正确的路。

## 坑与边界：OCR 还要不要、性能怎么榨

观众问了一个尖锐的问题：[[OCR|OCR]] 一直是整个流程的刺，为什么不干脆从一开始就用[[智能体|智能体]]方式？Sean 的回答是把计算花在刀刃上：如果你有 PB 级文档要让它们日后可查询，就把大量计算花在前期 OCR 上，之后就不操心了；而如果只是上传一份合同做问答，那是极低延迟的用例——高吞吐和低延迟两类场景，批大小、并发度、处理技术都该不一样。Haral 补充：他们是混合架构，表格走版面理解加提取，其他字段、元数据、条款仍然走 OCR,流水线分两条路径。

性能方面，模型目前跑在 FP16,接下来有通往 FP8 和 FP4 的量化(用更低的数字精度压缩模型以提速)路径。Sean 还提到几个优化方向：多 token 生成(一次生成多个 token 而不是一个)、VLM 编码器-解码器架构的进一步优化——现在这个模型一次只生成一个 token。

不过当下的重点是准确性：先确认是否真的在为系统增加价值，再把帕累托曲线往性能端推。下一步的合作计划，是从「从页面里尽可能多提取信息」扩展到「先找到那个页面」，再走向生产规模的智能体。

## 本集带走

- **合同数据的最大痛点是表格**：定价、SLA、费率卡都在表格里，逐行读取的传统工具和通用大模型处理不了合并单元格和嵌套结构，需要保版面的专用模型。
- **专用小模型优于通用大模型**：约 9 亿参数的单次推理提取模型，比通用方案快 20 倍、成本低、延迟低，才能撑住每天百万份协议的规模。
- **计算花在哪取决于用例**：海量文档要日后可查询就把算力砸在前期处理；单份合同的即时问答则是低延迟场景——批大小、并发、技术选型全不同。
- **量化和多 token 生成是性能余量**：FP16 起步，量化到 FP8/FP4、多 token 生成都是后续提速路径；但顺序应是先把准确性做对，再推性能。

> 【背景】Coupa 是一款企业采购与支出管理软件，文中采购团队想把提取出的价格表导入 Coupa 以确保付款对账。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">这些钱锁在协议谈判达成的价值里，没有人加以利用，没有人回头去把这些数据挖出来。</span>  
> *Captured in this agreement negotiated value that no one capitalizes, no one goes back and gets that data back.*  
> <span class="qm">—— Hiral Shah · [02:19]</span> ^q1

> <span class="qz">它不是生成器。说到底它更像一个提取器。</span>  
> *It's not a generator. It's more of an extractor at the end of the day.*  
> <span class="qm">—— Sean Sodha · [07:54]</span> ^q2

> <span class="qz">为你想要做的工作构建专用模型，是我们思考方式中很大很大的一部分，这也正是我们能够加速、更快地把东西推向市场的地方。</span>  
> *So a purpose-built model for the job you're trying to do is a big, big part of how we've been thinking about, and that's kind of where we've been able to accelerate, bring things to market much faster.*  
> <span class="qm">—— Hiral Shah · [11:36]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-06-talks-the-state-of-model-routing-nvidia-cognit|不靠一个模型打天下:多模型路由的早期探索与实战权衡]]<span class="pd-rz">同公司:NVIDIA · 同概念:Nemotron、开源模型 (open source models)、智能体 (agent)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同公司:NVIDIA · 同概念:Nemotron、智能体 (agent)</span>
- [[2026-09-19-twentyvc-20vc-anti-data-centres-is-a-chinese-psyo|推理才是赚钱的生意：Positron 联合创始人谈内存墙、缓存暴利与「守住前沿」之争]]<span class="pd-rz">同公司:NVIDIA · 同概念:智能体 (agent)、量化 (quantization)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:NVIDIA · 同概念:Nemotron、智能体 (agent)</span>
- [[2026-08-19-bigtech-nick-bostrom-worries-about-ai-existentia|Nick Bostrom：智能体破笼之后，我们还能驾驭AI吗]]<span class="pd-rz">同公司:NVIDIA · 同概念:开源模型 (open source models)、智能体 (agent)</span>
- [[2026-05-21-talks-the-best-time-in-history-to-start-a-comp|Stripe 与 Replit 对谈：AI 时代的创业大爆发与护城河]]<span class="pd-rz">同概念:智能体 (agent)、开源模型 (open source models)</span>

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
