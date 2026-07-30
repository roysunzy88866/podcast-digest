---
title: "Cloud Code 创始人 Boris：删掉 80% 系统提示，把模型当生物养"
podcast: Y Combinator Startup Podcast
date: 2026-07-28
source_url: undefined
duration: "36:04"
type: episode
cover: "#64748b"
image: "/covers/2026-07-28-yc-boris-cherny-building-claude-code-e3mkr7.jpg"
description: 对话揭示 Opus 5 已能不被提示词注入、自主连跑数月;构建智能体产品的核心是放手让模型做并验证。
host: "[[Boris Cherny]]"
concepts: ["[[Cloud Code]]", "[[Opus 5]]", "[[智能体]]", "[[提示词注入]]", "[[系统提示词]]", "[[产品冗余]]", "[[动态工作流]]", "[[测试时计算]]", "[[消融]]", "[[例程]]", "[[实证心态]]", "[[验证]]", "[[Bunn]]", "[[沙箱]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Cloud Code 创始人 Boris：删掉 80% 系统提示，把模型当生物养</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# Cloud Code 创始人 Boris：删掉 80% 系统提示，把模型当生物养

<div class="pd-byl"><b>Boris Cherny</b></div>

<div class="pd-mt">2026-07-28 · Y Combinator Startup Podcast · 36:04</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-28-yc-boris-cherny-building-claude-code-e3mkr7.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">你实际上从 Cloud Code 中删除了超过 80% 的系统提示词。</div><div class="a">SPEAKER_00 · 03:53</div></div>

> [!info] 关联
> **人物** [[Boris Cherny]]
>
> **概念** [[Cloud Code]] · [[Opus 5]] · [[智能体]] · [[提示词注入]] · [[系统提示词]] · [[产品冗余]] · [[动态工作流]] · [[测试时计算]] · [[消融]] · [[例程]] · [[实证心态]] · [[验证]] · [[Bunn]] · [[沙箱]]

<div class="pd-tldr"><b>一句话</b>对话揭示 Opus 5 已能不被提示词注入、自主连跑数月;构建智能体产品的核心是放手让模型做并验证。</div>

Boris 是 Claude Code（一款给 Claude 赋予完整终端权限的[[智能体|智能体]]编程工具，本集转写稿中常被语音识别误写为 [[Cloud Code|Cloud Code]]）的创造者。在本集对谈中,他首先回顾了 [[Opus 5|Opus 5]] 的几项核心突破,随后抛出了贯穿全篇的实操主张:不要用过期的提示词和旧的工作流去束缚新一代模型,而要像对待一个有生命的同事那样去使用它。本文将顺着这条主线,带你从模型的新能力、[[系统提示词|系统提示]]的精简、能力的深度挖掘,一直看到任务编排的终极杠杆和未来工程师的生存法则。

## Opus 5 的两大跨越:超长任务与攻克提示词注入

Boris 开篇指出,相比于过去最好的成绩只有个位数或百分之十几,Opus 5 将 ARC AGI 3（一种评估人工智能推理能力的基准测试）的成绩做到了 30% [00:33]。但这只是性能提升的冰山一角。他认为真正让该模型拉开差距的,是两项其他模型未曾具备的新能力。

第一项是极其惊人的任务耐力。当 Opus 5 结合 Auto Mode(自动模式)时,它不需要任何外部脚手架辅助,就能自主连续运行几天、几周甚至几个月不停歇 [01:39]。它内在知道需要完成什么任务,并会自己一直做下去。

第二项是克服了长期困扰 AI 行业的[[提示词注入|提示词注入]](Prompt Injection,指恶意指令藏在文本中诱导模型执行危险操作)。Boris 表示,他们结合了三年的对齐研究、一个针对所有流量运行的提示词注入分类器,以及自动模式分类器这三层防护。其中,分类器能够直接观察到当提示词注入发生时,模型内部哪些神经元会亮起 [03:00]。目前他们聘请了安全研究人员进行红队测试,也举办了竞赛,但已经无人能成功对 Opus 5 实施提示词注入。

## 既然模型变强了,那就狠心删掉 80% 的系统提示

说完了模型为什么强大,接下来是他怎么给模型松绑。既然模型能力大幅提升,过去的补丁就成了累赘。Boris 透露,随着 Opus 5 的发布,他们删除了 Claude Code 中超过 80% 的系统提示 [03:53]。

他解释说,过去系统提示里的很多内容,都是为了纠正模型本该知道却不知道的行为。如今 Opus 5 本身已经足够聪明,直接就能做到,不再需要生硬的指令纠正。为了弄清楚提示到底有没有用,他们采用了[[消融|消融]](Ablation,一种在研究中逐个删减组件以测试其影响的方法):删掉整个系统提示,然后逐行加回来测试每一行的单独影响 [06:24]。有趣的是,他们发现没有这些提示时,模型实际上还要更聪明一点 [05:27]。

Boris 强烈建议所有构建智能体产品的人,在每次新模型发布时都要有按下删除键的勇气:删掉过期的代码、系统提示、技能和钩子,看看模型现在的真实表现 [07:18]。

## 核心心法:解除产品束缚,让模型放手去做

工具变了,人怎么办?这正是下一个话题。既然我们要不断删掉旧规则,那如何挖出模型的新潜能?Boris 提出了[[产品冗余|产品冗余]](Product Overhang)的概念:模型在今天就已经具备了诸多超乎想象的能力,只是往往没有合适的产品让它发挥出来,甚至现有的产品设计反而在阻碍模型 [11:46]。这种阻碍,他称之为束缚。

Boris 指出了构建 AI 产品的一个常见误区:人们倾向于给出极其细致、死板的指令(比如规定必须按第一步、第二步、第三步执行)。但他认为,对于现代模型,正确的做法是走向更高层次:只描述任务、设定护栏(安全边界)和退出标准,然后就放手让模型去做,过一会儿再回来看成果 [15:39]。

他举了一个生动的例子:Bun(一种 JavaScript 运行时)原本是用 Zig(一种底层系统编程语言)编写的,手动管理内存很容易导致内存泄漏。团队原本只是让 Claude 做模糊测试来寻找漏洞。后来团队成员决定让模型尝试把整个代码库从 Zig 重写成 Rust。结果,模型在 11 天内、仅凭一个提示词并借助[[动态工作流|动态工作流]],一次性重写了超过 10 万行的整个代码库。Boris 惊叹,这如果由最好的工程师手工来做,肯定需要超过一年时间,而且现在已经投入了 Claude Code 的生产环境中 [16:46]。

而[[验证|验证]](Verification),是放手让模型去做时的单一最重要环节。Boris 分享了他个人的一个实验:他想把基于 Electron 框架的桌面应用重写为原生应用。于是他在 Slack 中给模型下达了指令,让模型自己在虚拟机里运行旧版、截图,并与正在重写的新版进行像素级的对比,要求它做完之前绝对不能停 [22:04]。这个任务已经连续运行了超过两周。模型甚至自己决定建立了一个 Slack 频道,每隔几分钟就直播发布一次它的进度截图 [23:13]。

## 走向极端:数以千计的智能体与测试时计算

听完单次任务能持续两周的惊人案例,你可能会问:还能更夸张吗?这正是下一个话题——如何把这种能力放大成工程师级别的杠杆。Boris 透露,要发挥模型的最大威力,应该尝试同时编排成百上千个智能体。

最简单的方法是使用 Cloud Code 的全新功能动态工作流(Dynamic Workflows)。只需说一句使用工作流,系统就会在 Bun 运行时的[[沙箱|沙箱]](一种隔离的安全执行环境)内启动虚拟机,并让模型自动编排成百上千个智能体 [25:48]。这本质上是一种全新的[[测试时计算|测试时计算]](Test Time Compute,指模型在生成最终答案前用于思考和推理的计算资源)形式。动态工作流会像代数一样,将任务分解为按顺序或并行执行的智能体群,分阶段完成复杂的分析或开发工作 [26:58]。

另一种方法则是循环与[[例程|例程]]。循环是本地运行,而例程是运行在云端、即使你合上笔记本也会持续执行的重复性任务 [28:06]。Boris 表示,他们现在每天都会运行 20 到 30 个这样的例程来维护 Claude Code 自己的代码库。例如,其中有一项名为抽象警察:模型每天会扫描所有代码库,找出那些功能重复、理应合并的代码抽象,并自动提交合并请求 [29:37]。

通过这种方式,他们每天有数百甚至数千个智能体在运行,承担了过去几十甚至上百名工程师才能完成的繁重维护工作。这让人类工程师终于可以解脱出来,专心去做他们真正想做的事:发布新产品、与用户交流 [30:28]。

## 编程已被攻克?未来属于掌握实证心态的构建者

既然模型包揽了脏活累活,Boris 顺势提出了一个大胆判断:编程已经被解决了(对于他所做的那类编码而言)[31:02]。虽然他补充说,在非常底层的深度系统代码、分布式系统,或是精确到像素的 UI 验证上,模型仍有挣扎,但举手投足间,现场已经有相当一部分观众表示自己超过 50% 的代码完全是由智能体编写的 [31:44]。

那么,当人人都能让模型写代码时,是什么区分了顶尖的构建者?Boris 给出的答案是:[[实证心态|实证心态]](Empirical Mindset)[32:04]。他指出,忘掉你在课堂上学到的计算机科学理论,忘掉你对过去旧模型的固有认知。现在最好的技能不再是死板的提示词工程,而是像对待一个活生生的同事那样:给它一个看似太难的任务,给它验证自身工作的工具,观察它在哪里卡壳,然后通过提供更好的上下文或工具来修复它 [24:00]。

在被问及在 AI 编码时代,计算机专业的学生还应该学什么时,Boris 回忆起自己初中时为了在数学考试中作弊,在 TI-83 计算器上自学 BASIC 语言写求解器的经历 [33:53]。他的建议是:不要只学计算机科学本身。去学习如何把它应用起来——去培养商业感、学做数据科学、学习如何与用户沟通。当把这些传统硬技能与 AI 结合起来时,才是真正具有巨大价值的地方 [34:54]。

## 本集带走

1. **永远敢于按下删除键**:新模型的能力已经质变,过去为了修补模型缺陷而堆砌的系统提示词和旧代码往往成了阻碍。用消融的方法删除它们,只观察模型当下的真实表现,基于实证来调整。
2. **任务编排是新杠杆**:通过动态工作流和云端例程,你可以让模型每天自动调度数千个智能体并行工作。这正是全新的测试时计算,能够替代几十名工程师完成代码维护和基础开发。
3. **别过度指导,要放手验证**:不要给模型塞细致入微的死指令,而是给高层次的任务和验证标准。让它运行两周、自我检查和迭代,它带来的惊喜将远超你的想象。

<div class="pd-sec">全部金句 <span>3 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">你实际上从 Cloud Code 中删除了超过 80% 的系统提示词。</span>  
> *You actually deleted over 80% of the system prompt from Cloud Code.*  
> <span class="qm">—— SPEAKER_00 · [03:53]</span> ^q1

> <span class="qz">所以是的，我们删除了 80% 的系统提示词。</span>  
> *So yeah, we deleted 80% of the system prompt.*  
> <span class="qm">—— Boris Cherny · [04:51]</span> ^q2

> <span class="qz">所以它变得非常像，它不是一门理论科学，它变成了一门实证科学。</span>  
> *So it's just like very much become, it's not a theoretical science, it's become an empirical science.*  
> <span class="qm">—— Boris Cherny · [32:22]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构]] —— 同概念:智能体 (agent)、验证 (verification)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」]] —— 同概念:智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|Dan Shipper 的未来工作预测：别等 AI 末日，用 Codex 重塑一切]] —— 同概念:智能体 (agent)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-22-latent-space-gray-swan|让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏]] —— 同概念:提示词注入 (prompt injection)、智能体 (agent)、沙箱 (sandbox)、Cloud Code
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得]] —— 同概念:提示词注入 (prompt injection)、智能体 (agent)
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Anthropic产品负责人Kat Wu：在AGI边缘做产品的PM生存指南]] —— 同概念:智能体 (agent)、系统提示 (system prompt)

</div>
</div>

*本集关键词:智能体编程 · 模型能力挖掘 · 任务编排 · AI 安全 · 实证心态*

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
    ['.search','.readermode'].forEach(function(sel){ grab(sel,acts); });
    // 深浅色进右栏末尾 —— 但右栏在窄屏可能不显示,槽跟着一起没了。
    // 只在槽真的看得见时才搬进去,看不见就退回顶栏(🔒 #2:任何屏宽都得有入口)。
    var side=document.querySelector('.right.sidebar'), slot=null;
    if(side){
      slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      // 同上:槽是空的(:empty → display:none),要判**右栏**看不看得见
      if(!(side.offsetWidth || side.offsetHeight || side.getClientRects().length)) slot=null;
    }
    grab('.darkmode', slot || acts);
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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); }
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
