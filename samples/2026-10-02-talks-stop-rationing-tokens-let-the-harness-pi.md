---
title: token 无限量供应：用自动选模型省下 2.5 倍成本的编码智能体
podcast: 精选演讲
date: 2026-10-04
source_url: undefined
duration: "17:58"
type: episode
cover: "#64748b"
description: Cast.AI 联合创始人 Laurent 与工程负责人 Zilvinas 讲解他们的 Kimchi 编码智能体：自动按任务结果选模型，成本降 2.5 倍、token 用量不设限。
host: "[[Zilvinas]]"
cohosts: ["[[Laurent]]"]
companies: ["[[Kimchi]]", "[[Cast.AI]]", "[[Anthropic]]", "[[Claude]]"]
concepts: ["[[编码智能体]]", "[[token]]", "[[harness]]", "[[沙箱]]", "[[开源]]", "[[Kubernetes]]"]
category: AI 编程
tags:
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-02-talks-stop-rationing-tokens-let-the-harness-pi#post","headline":"token 无限量供应：用自动选模型省下 2.5 倍成本的编码智能体","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-02-talks-stop-rationing-tokens-let-the-harness-pi","mainEntityOfPage":"https://talk.solomind.cc/2026-10-02-talks-stop-rationing-tokens-let-the-harness-pi","description":"Cast.AI 联合创始人 Laurent 与工程负责人 Zilvinas 讲解他们的 Kimchi 编码智能体：自动按任务结果选模型，成本降 2.5 倍、token 用量不设限。","datePublished":"2026-10-04","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Zilvinas"},{"@type":"Person","name":"Laurent"},{"@type":"Organization","name":"Kimchi"},{"@type":"Organization","name":"Cast.AI"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"Claude"},{"@type":"Thing","name":"编码智能体 (coding agent)"},{"@type":"Thing","name":"token"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"开源 (open source)"},{"@type":"Thing","name":"Kubernetes"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"token 无限量供应：用自动选模型省下 2.5 倍成本的编码智能体","item":"https://talk.solomind.cc/2026-10-02-talks-stop-rationing-tokens-let-the-harness-pi"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>token 无限量供应：用自动选模型省下 2.5 倍成本的编码智能体</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# token 无限量供应：用自动选模型省下 2.5 倍成本的编码智能体

<div class="pd-byl"><b>Laurent</b> · Cast.AI 联合创始人 · 2026-10-04</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-02-talks-stop-rationing-tokens-let-the-harness-pi.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">就好比,嘿,你可以用你的笔记本,电池能撑一小时,而且一天只能充一次电。限制开发者的 token 用量就是这种感觉。</div><div class="a">— Laurent <button class="pd-ts" data-t="01:44" data-who="Laurent" data-en="It's like, hey, you can use your laptop. You have an hour battery. And you can only charge once a day. That's how it feels to limit the amount of token for a developer." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Zilvinas]] · [[Laurent]]
>
> **公司** [[Kimchi]] · [[Cast.AI]] · [[Anthropic]] · [[Claude]]
>
> **概念** [[编码智能体]] · [[token]] · [[harness]] · [[沙箱]] · [[开源]] · [[Kubernetes]]

这一集是一场大会演讲,主角是两位:[[Laurent|Laurent]],[[Cast.AI|Cast.AI]] 的联合创始人兼总裁;[[Zilvinas|Zilvinas]],负责 [[Kimchi|Kimchi]] 编码平台整个工程团队的负责人。他们聊的是一件所有用 AI 写代码的团队都头疼的事:token 成本失控。

钩子是两个真实的数字。印度有一家公司,仅一个月就在 [[Anthropic|Anthropic]] 上花了 5 亿美元;Uber 的 CTO 发推说,过去四个月用掉了 Anthropic 一整年的全部预算。

企业的应对方式是限制开发者的 token 用量——但 Laurent 说,这种限制对开发者的感觉,就好比给你一台笔记本,电池只撑一小时,而且一天只能充一次电。Kimchi 的立场恰恰相反:管理者的工作不是阻止开发者用[[编码智能体|编码智能体]],而是让 token 无限量供应、而且便宜。

## 按每个 token 定价是错觉,要按任务算钱

他们整套方案建立在一所大学白皮书的一个发现上:同一个任务、同样质量的前提下,各模型的真实成本差异巨大。看每 token 单价,模型都挺便宜;但看「完成同一个任务要花多少钱」,差别惊人——某模型每百万 token 只要 3.5 美元,看起来便宜,完成整个任务却要 705 美元;另一个每 token 成本 1.5,任务成本是 148 美元。

由此他们的产品思路是:造一个自动化的框架(harness,即调度和包装模型调用的执行框架),基于任务的结果,在合适的时机为任务挑合适的模型。

## 用了三个月:成本省 2.5 倍,token 反而多用 1.5 倍

结果是他们自己内部的真实数据:300 名员工(三分之二是开发者)用了三个月编码智能体,相比直接用 [[Claude|Claude]] 节省了 2.5 倍成本。图表上,紫线是本应支付给 Claude 的按日账单,蓝线是实际支付的——结果相同,但 token 数量增加了 1.5 倍,给 Claude 的成本却下降了 1.5 倍。Laurent 强调这正是管理该做的事:因为成本被压下来了,团队才敢真正不限量地用。

更反直觉的是模型选择的演变。Laurent 说,人类不可能盯着这种变化随时去测试、适应一个新模型,但一个痴迷于 token 成本的自动化智能体会。

## Ferment:长任务自动跑,评分不到 B 不算完成

Zilvinas 接着讲实现。他们最初就是因为半年前 Claude 账单飙升,才不得不给自己造这个框架。

其中有个叫 Ferment 的构造,专为长时间运行的任务设计——这类任务平均每两三个小时才需要人类介入一次。流程是:你回答框架问的一堆问题,它把任务分解成里程碑,自主编码超过两小时;构建坏了就改了重建,反复「发酵」;周期结束会给出输出评分。

关键机制是:一个成果(artifact)只有在评分至少达到 B 级时才被视为完成;如果你不满意,可以让智能体回去修,争取拿到 A。也就是说,框架看的是结果,并根据结果质量来优化 token 开销。目前它有意止步于 staging 环境(预发布环境)——他们仍认为上线生产前需要人类把关,但终极目标是直接看生产指标和可观测性数据自动发布。

## 读代码已经不够了,Teleport 让任务在你合上笔记本后继续跑

Zilvinas 提出一个判断:随着智能体工程越来越多,变更集里的代码改动多到难以逐行阅读——想象产品经理提交了一个 2000 行的 PR,你要审查的不只是差异,还有他想达成的意图和给智能体的规格说明。所以光读代码不够了。

于是他们造了 Kimchi Teleport:合上笔记本,任务被传送到远程环境的[[沙箱|沙箱]]里继续跑,沙箱跑在超大规模云厂商(这个例子是 Google)的 [[Kubernetes|Kubernetes]] 集群里,本地感觉完全一样,只是不跑在你的电脑上。这个点子来自同事在飞机上写代码时设备断了、工作全丢的经历。效果:62% 的工程师现在写代码只用 Teleport——回家了它在跑,在路上它在跑,度假不看它它还在跑。

## Studio:给团队用的看板,谁有空谁「接单」

Teleport 偏个人用,他们又做了 Kimchi Studio——「给团队和企业的 Teleport」。它把所有正在运行的智能体会话可视化为一块看板:任务计划可以给同事、产品经理审阅,避免提示词执行到生产环境才发现需求是错的;进行中的会话如果请求审阅,团队里任何人都能说「我来接」,回答完它回到进行中,直到下一个进入审阅。一个五到十人的团队可以同时挂很多会话,按看板风格流转——哪些在评审、哪些进行中、哪些在 backlog。

最后是可用性:harness 完全[[开源|开源]];Studio 和 Teleport 需要一个 Google 账号,五分钟能装好,想开多少会话就开多少。

## 本集带走

- **按「任务成本」选模型,别按 token 单价**:每 token 便宜的模型,做完同一个任务可能贵好几倍(705 美元 vs 148 美元)。比较模型必须锁死「同任务、同质量」。
- **成本压下来才有资格谈「不限量」**:省 2.5 倍的同时 token 用量涨 1.5 倍,说明团队用得更狠了——这是管理者该追求的方向,而不是设限额。
- **长任务要有客观验收线**:任务拆里程碑、自动构建自检,输出评分不到 B 不算完成;验收标准先于自动化存在,智能体才能放心跑两三个小时不等人。
- **任务跑在云端沙箱而不是本地**:合上笔记本工作不中断,本地只做「感觉一样」的接口;团队再看板共享会话,谁有空谁接手审阅。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">就好比,嘿,你可以用你的笔记本,电池能撑一小时,而且一天只能充一次电。限制开发者的 token 用量就是这种感觉。</span>  
> *It's like, hey, you can use your laptop. You have an hour battery. And you can only charge once a day. That's how it feels to limit the amount of token for a developer.*  
> <span class="qm">—— Laurent · [01:44]</span> ^q1

> <span class="qz">我们的工作不是阻止开发者使用编码智能体,而是确保他们可以随心所欲、尽其所愿地使用它,完全不受限制。</span>  
> *Our job is not to prevent the developer to use Coding Agent. Our job is to make sure they can use it as much as they want for as long as they want in a completely unlimited fashion.*  
> <span class="qm">—— Laurent · [02:17]</span> ^q2

> <span class="qz">你觉得我们会作为人类盯着这个看吗?绝对不会。但一个自主的框架、一个痴迷于 token 成本的自动化编码智能体,就会做到这一点。</span>  
> *Do you think we look at this as human? Absolutely not. But an autonomous harness, an automated coding agent that is obsessed with token costs is going to do just that.*  
> <span class="qm">—— Laurent · [06:46]</span> ^q3

> <span class="qz">我们仍然认为在进入生产环境之前需要有一个小小的人类在环中,至少目前是这样。我们都知道终极未来是要避免这一点。</span>  
> *We still believe there's like some little human that needs to be in the loop before going to the production, at least at this point. We all know that the ultimate future is to avoid that.*  
> <span class="qm">—— Zilvinas · [10:25]</span> ^q4

> <span class="qz">我们所相信的是,仅仅阅读代码已经不够了。</span>  
> *What we believe is that reading code is not enough anymore.*  
> <span class="qm">—— Zilvinas · [11:01]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-07-27-talks-boris-cherny-we-cut-80-of-claude-code-s|Claude Code 造物主 Boris:删掉 80% 系统提示词，让模型跑两周不停]]<span class="pd-rz">同公司:Anthropic · 同概念:框架（harness） (harness)、沙箱 (sandbox)、Claude Code</span>
- [[2026-08-28-talks-ai-native-organisations-run-on-skills-ho|AI 原生组织如何运行在 Skills 之上]]<span class="pd-rz">同公司:Anthropic · 同概念:框架（harness） (harness)、沙箱 (sandbox)</span>
- [[2026-08-28-talks-how-to-avoid-disaster-when-vibe-coding-a|智能体怎么付钱、怎么花钱:Metronome 讲透按量计费与智能体商务]]<span class="pd-rz">同公司:Anthropic · 同概念:沙箱 (sandbox)、编码智能体 (coding agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-04-strictlyvc-equity-replay-menlo-ventures-matt-murphy|领投人拆解 Anthropic：三年登顶的增长秘方]]<span class="pd-rz">同公司:Anthropic、Claude · 同概念:Token 成本 (token)、框架（harness） (harness)、Claude Code</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同公司:Anthropic · 同概念:框架（harness） (harness)、沙箱 (sandbox)、Claude Code</span>
- [[2026-07-22-talks-claude-for-long-horizon-tasks-lance-mart|Claude 异步智能体架构的四块基石]]<span class="pd-rz">同公司:Claude、Anthropic · 同概念:框架（harness） (harness)、沙箱 (sandbox)</span>

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
