---
title: 生成很便宜，审阅很贵：别再让 AI 垃圾代码上线了
podcast: 精选演讲
date: 2026-10-14
source_url: undefined
duration: "17:08"
type: episode
cover: "#64748b"
description: G2i 工程经理 Gabriel Martinez 讲 AI 时代的「代码垃圾」：为什么生成代码越快，人的判断越不能省。
guests: ["[[Gabriel Martinez]]"]
companies: ["[[Rails]]"]
concepts: ["[[垃圾话]]", "[[智能体]]", "[[评估]]", "[[vibe coding]]", "[[约定]]", "[[认知开销]]", "[[ORC]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-09-talks-generation-is-cheap-review-is-expensive#post","headline":"生成很便宜，审阅很贵：别再让 AI 垃圾代码上线了","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-09-talks-generation-is-cheap-review-is-expensive","mainEntityOfPage":"https://talk.solomind.cc/2026-10-09-talks-generation-is-cheap-review-is-expensive","description":"G2i 工程经理 Gabriel Martinez 讲 AI 时代的「代码垃圾」：为什么生成代码越快，人的判断越不能省。","datePublished":"2026-10-14","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Gabriel Martinez"},{"@type":"Organization","name":"Rails"},{"@type":"Thing","name":"垃圾话 (slop)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"评估 (evaluation)"},{"@type":"Thing","name":"vibe coding"},{"@type":"Thing","name":"约定 (conventions)"},{"@type":"Thing","name":"认知开销 (cognitive overhead)"},{"@type":"Thing","name":"ORC"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"生成很便宜，审阅很贵：别再让 AI 垃圾代码上线了","item":"https://talk.solomind.cc/2026-10-09-talks-generation-is-cheap-review-is-expensive"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>生成很便宜，审阅很贵：别再让 AI 垃圾代码上线了</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 生成很便宜，审阅很贵：别再让 AI 垃圾代码上线了

<div class="pd-byl"><b>Gabriel Martinez</b> · G2i 工程经理 · 2026-10-14</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-09-talks-generation-is-cheap-review-is-expensive.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">Slop 就是生成速度超过判断速度时产生的结果。</div><div class="a">— Gabriel Martinez <button class="pd-ts" data-t="00:41" data-who="Gabriel Martinez" data-en="Slop is what happens when generation outruns judgment." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Gabriel Martinez]]
>
> **公司** [[Rails]]
>
> **概念** [[垃圾话]] · [[智能体]] · [[评估]] · [[vibe coding]] · [[约定]] · [[认知开销]] · [[ORC]]

在一场演讲里，自称垃圾管理员的工程经理 [[Gabriel Martinez|Gabriel Martinez]](Gabo)花了十几分钟讲一个让他愤怒的话题：

[[垃圾话|slop]]——AI 大量生成、但没人真正理解就合并上线的代码。他不是反对 AI,而是反对判断力的缺席。

## slop 到底是什么？

slop 不是AI 写的代码。Gabo 的定义是：思考还没结束，产出看起来就已经完成了。歧义靠猜来解决，取舍靠碰运气，没人真正负责。

**产出有了，理解没发生**。

真正的危险不在于机器做了坏选择，而在于工程师根本没意识到有选择要做——没碰到歧义，没感到约束，没发现那个本会改变设计的边界情况。

软件是选择的记录，看不到选择就没法拥有它，不拥有它就不是在做工程，只是按合并按钮 <button class="pd-ts" data-t="00:51" data-who="Gabo" data-en="I don't mean to define it as some concrete objective thing that can easily be sniffed out, although there are tells. Slop is output that looks finished before the thinking is finished." aria-label="回原文"></button>。

## 写代码的成本在降，理解代码的成本没降

他提醒：每一行代码都是负债，最好的代码是不写代码。**AI 让写代码更便宜，但理解一个软件程序的成本没有降**。

系统里的主要流程、边界、数据模型、产品行为，还是得有人懂。

一个已经很乱的系统，AI 不会救你，只会把这团泥球滚得更大更快。

## 一小时做出来的原型，骗了所有局外人

现在任何人都能一小时凭感觉编程出一个可点击的原型。

问题在于，不住在代码库里的人——老板、产品、客户——会把它当成「难的部分已经做完了」的证据。

**他们看不到的是最后一公里**：读代码、测行为、承担取舍、发现遗漏的需求、判断这东西配不配进系统 <button class="pd-ts" data-t="06:32" data-who="Gabo" data-en="And that the UX isn't complete garbage. They're not at all thinking about the most time-consuming bits, the human parts, the last mile, where the judgment lives." aria-label="回原文"></button>。

SQLite 的创造者说过，别人提交的代码不是免费的，那是要求你替他测试、文档、维护 25 年。

## 生成便宜，评估昂贵

这是全场最核心的一句：「Generation is cheap, but evaluation is expensive」——生成很便宜，[[评估|评估]]很贵 <button class="pd-ts" data-t="10:19" data-who="Gabo" data-en="And that is the part that we need to be honest about. Generation is cheap, but evaluation is expensive. If AI produces more than humans can possibly evaluate, it has not accelerated the team." aria-label="回原文"></button>。如果 AI 产出的东西多到人评不过来，它就不是在加速团队，而是在制造瓶颈。

他见过最平庸的例子：给 10 条要点，拿回来 20 页文档，文辞漂亮，但你得花几小时判断里面有没有真正的思考。

模糊的任务变成巨大的代码变更，真正的工作只是被转移给了审阅者。

## 慢的人看起来在输，其实在赢

坏工程师不抠细节、不细化规格，产出反而更快；认真的人显得慢。

这种焦虑会传染——Gabo 坦言自己也曾因为周围人合并得太快，放弃了平时的审查细致度。

激励机制只奖励把代码合进去，就会出事。奖励应该围绕产出价值、优雅务实的设计、清晰的测试。

## 60 年的软件智慧并没有被 AI 作废

可组合的代码、好的模式、扎实的实践依然重要。

AI 能把机器码到 Ruby 一路的抽象再推一层，但不能取消「理解系统如何组装在一起」的需要。

他的解法是压缩审阅面：画图不是装饰性文档，而是让人能看懂系统的形状——服务边界、数据流、状态转换、失败模式；

主流程做成可审阅的表面，实现细节推到叶子。

[[认知开销|认知开销]]是每个工程师改代码前都要交的税，AI 不免税，还会加重它——除非有[[约定|约定]]管着。

## 约定越死，AI 越好用

[[Rails|Rails]] 是他心中的标杆：框架用约定激进地砍掉决策面，一件事只有一种正确做法。

他离开 Rails 4 年后回来，发现事实标准还是那些模式，立刻就能上手。

这种只有一条路的环境特别适合 AI 开发，因为 agent 不会被几十种竞争方案搞糊涂。

答案就是：约定、标准、写清楚的流程、小的可审阅单元、清晰的完成定义。**路越明显，slop 越无处藏身** <button class="pd-ts" data-t="14:07" data-who="Gabo" data-en="The answer to this is conventions, standards, documented flows, small reviewable surfaces, and clear ownership boundaries and definitions of done. The more obvious the path, the less room there is for slop to hide." aria-label="回原文"></button>。

他们团队把这些经验做成了 [[ORC|ORC]]:不是用更多 agent 解决问题，更不是把工程判断自动化掉，而是把拆任务、管上下文、对比方案这些反复出现的人肉流程固化进工作流。

目标不是更快地凭感觉编程，而是带着判断的编排。

## 本集带走

- slop 的本质是思考没做完、产出看起来已完成；危险在于工程师没意识到有选择要做。
- 生成便宜、评估昂贵：AI 产出超过人的评估能力时，就变成瓶颈而非加速。
- 代码行数永远是垃圾指标，烧 token 多少同样不代表产出——60 年的软件智慧没被 AI 作废。
- 原型速成会骗住局外人，让他们以为难的部分已经结束；真正的工作在最后一公里。
- 死板约定 + 小审阅面 + 清晰图示，是对抗 slop、也更适合 agent 的工程方式。

<div class="pd-sec pd-sec-q">全部金句 <span>17 条</span></div>

> <span class="qz">Slop 就是生成速度超过判断速度时产生的结果。</span>  
> *Slop is what happens when generation outruns judgment.*  
> <span class="qm">—— Gabriel Martinez · [00:41]</span> ^q1

> <span class="qz">Slop 是那种在思考还没完成之前就看起来已经完工的产出。</span>  
> *Slop is output that looks finished before the thinking is finished.*  
> <span class="qm">—— Gabriel Martinez · [00:55]</span> ^q2

> <span class="qz">危险在于工程师从未意识到那里原本存在一个需要做的选择。</span>  
> *The danger is that the engineer never noticed that there was a choice to make.*  
> <span class="qm">—— Gabriel Martinez · [01:16]</span> ^q3

> <span class="qz">但软件就是一份选择记录——技术选择、产品选择、运维选择、面向用户的选择。</span>  
> *But software is a record of choices, technical choices, product choices, operational choices, user-facing choices.*  
> <span class="qm">—— Gabriel Martinez · [01:35]</span> ^q4

> <span class="qz">而如果我们不为它们负责，我们就不是在真正地做工程。</span>  
> *And if we do not own them, we are not really engineering.*  
> <span class="qm">—— Gabriel Martinez · [01:46]</span> ^q5

> <span class="qz">在一个一切皆有可能的世界里，决定构建什么比以往任何时候都更重要。</span>  
> *In a world where anything is possible, deciding what to build is more important than ever.*  
> <span class="qm">—— Gabriel Martinez · [02:56]</span> ^q6

> <span class="qz">创建代码的成本在下降，但理解一个软件程序的成本并没有。</span>  
> *The cost of creating code is falling, but the cost of understanding a software program is not.*  
> <span class="qm">—— Gabriel Martinez · [03:13]</span> ^q7

> <span class="qz">AI 可以生成代码，但它无法神奇地给一个混乱的系统带来连贯性。</span>  
> *AI can generate code, but it cannot magically give a messy system coherence.*  
> <span class="qm">—— Gabriel Martinez · [03:49]</span> ^q8

> <span class="qz">但如果系统已经是一团泥球，智能体并不能把你从泥潭中拯救出来。</span>  
> *But if the system is already a big ball of mud, the agent does not rescue you from the mud.*  
> <span class="qm">—— Gabriel Martinez · [04:01]</span> ^q9

> <span class="qz">但问题在于，不生活在代码库里的利益相关者常常把那个原型体验为「难的部分已经结束了」的证据。</span>  
> *But the problem is that stakeholders that do not live in the codebase often experience that prototype as evidence that the hard part is over.*  
> <span class="qm">—— Gabriel Martinez · [05:59]</span> ^q10

> <span class="qz">他们完全没想到最耗时的部分，也就是人的部分、最后一公里，判断力所在的地方。</span>  
> *They're not at all thinking about the most time-consuming bits, the human parts, the last mile, where the judgment lives.*  
> <span class="qm">—— Gabriel Martinez · [06:32]</span> ^q11

> <span class="qz">如果激励驱使人们尽快提交 PR,那我们迟早会遭到残酷的清醒。</span>  
> *And if incentives are driving people to get PRs in, then we're going to be in for a rude awakening.*  
> <span class="qm">—— Gabriel Martinez · [08:29]</span> ^q12

> <span class="qz">人类根本不可能完全理解这么大的改动中所有重要的部分。</span>  
> *There's no way in hell that a human can fully understand all the important bits of a change that big.*  
> <span class="qm">—— Gabriel Martinez · [08:51]</span> ^q13

> <span class="qz">生成是便宜的，但评估是昂贵的。</span>  
> *Generation is cheap, but evaluation is expensive.*  
> <span class="qm">—— Gabriel Martinez · [10:19]</span> ^q14

> <span class="qz">60 年的软件智慧并没有被 AI 作废。</span>  
> *60 years of software wisdom hasn't been invalidated by AI.*  
> <span class="qm">—— Gabriel Martinez · [11:28]</span> ^q15

> <span class="qz">认知开销是每个工程师在做出有意义的改动之前都必须支付的一笔税。</span>  
> *Cognitive overhead is a tax every engineer has to pay before they can make a meaningful change.*  
> <span class="qm">—— Gabriel Martinez · [13:23]</span> ^q16

> <span class="qz">未来是带有判断力的编排。</span>  
> *The future is orchestration with judgment.*  
> <span class="qm">—— Gabriel Martinez · [16:51]</span> ^q17

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2025-10-06-talks-agents-for-complex-software-engineering|Vibe debugging：代码生成之后，生产环境才是真正的硬仗]]<span class="pd-rz">同概念:vibe coding、智能体 (agent)、评估 (evaluation)</span>
- [[2026-02-08-lennys-getting-paid-to-vibe-code|不会写代码的人如何成为全职 vibe coder]]<span class="pd-rz">同概念:vibe coding、智能体 (agent)</span>
- [[2026-02-12-lennys-engineers-are-becoming-sorcerers|OpenAI 内部怎么用 AI 写代码：从巫师比喻到一人独角兽的二阶效应]]<span class="pd-rz">同概念:vibe coding、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-03-lennys-ive-run-75-businesses-andrew-wilkinson|Andrew Wilkinson：别追咖啡馆，去找没人要的钓鱼洞]]<span class="pd-rz">同概念:vibe coding、智能体 (agent)</span>
- [[2026-06-16-devtools-swyx-aie|AI Engineer 大会背后的社区逻辑与创业生存法则]]<span class="pd-rz">同概念:vibe coding、智能体 (agent)</span>
- [[2026-07-09-talks-a-conversation-with-replit-s-president-a|从快倒闭到剑指十亿美元ARR:Replit Agent的生死豪赌]]<span class="pd-rz">同概念:vibe coding、智能体 (agent)</span>

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
