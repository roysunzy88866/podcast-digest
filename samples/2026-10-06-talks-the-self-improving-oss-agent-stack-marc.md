---
title: 让 AI 自己改进 AI：Langfuse 创始人谈「自我改进的智能体」
podcast: 精选演讲
date: 2026-10-09
source_url: undefined
duration: "16:47"
type: episode
cover: "#64748b"
description: Langfuse 联合创始人 Marc Klingen 讲解团队如何从手动调优智能体，走向用智能体自动改进智能体。
guests: ["[[Marc Klingen]]"]
companies: ["[[Langfuse]]"]
concepts: ["[[智能体]]", "[[数据集]]", "[[可观测性]]", "[[自我改进智能体]]", "[[隐式信号]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-06-talks-the-self-improving-oss-agent-stack-marc#post","headline":"让 AI 自己改进 AI：Langfuse 创始人谈「自我改进的智能体」","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-06-talks-the-self-improving-oss-agent-stack-marc","mainEntityOfPage":"https://talk.solomind.cc/2026-10-06-talks-the-self-improving-oss-agent-stack-marc","description":"Langfuse 联合创始人 Marc Klingen 讲解团队如何从手动调优智能体，走向用智能体自动改进智能体。","datePublished":"2026-10-09","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Marc Klingen"},{"@type":"Organization","name":"Langfuse"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"数据集 (datasets)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"自我改进智能体 (self-improve agents)"},{"@type":"Thing","name":"隐式信号 (implicit signal)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"让 AI 自己改进 AI：Langfuse 创始人谈「自我改进的智能体」","item":"https://talk.solomind.cc/2026-10-06-talks-the-self-improving-oss-agent-stack-marc"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>让 AI 自己改进 AI：Langfuse 创始人谈「自我改进的智能体」</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 让 AI 自己改进 AI：Langfuse 创始人谈「自我改进的智能体」

<div class="pd-byl"><b>Marc Klingen</b> · Langfuse 联合创始人 · 2026-10-09</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-06-talks-the-self-improving-oss-agent-stack-marc.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我认为这是团队谈论提升自身运作层次的一年，因为越来越好的模型把下游的一切都抽象掉了。</div><div class="a">— Marc Klingen <button class="pd-ts" data-t="00:47" data-who="Marc Klingen" data-en="I think this is the year where teams talk about up-leveling, the level of where they operate themselves, where increasingly good models just abstract everything downstream." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Marc Klingen]]
>
> **公司** [[Langfuse]]
>
> **概念** [[智能体]] · [[数据集]] · [[可观测性]] · [[自我改进智能体]] · [[隐式信号]]

[[Marc Klingen|Marc Klingen]] 是开源[[可观测性|可观测性]]工具 [[Langfuse|Langfuse]] 的联合创始人。这次演讲里，他回答了一个很多团队都在问的问题：

==模型越来越强，能不能把调优[[智能体|智能体]]这件又累又枯燥的事，也交给 AI 自己做==？他的答案是可以，但人必须留在几个关键位置上。

## 做智能体应用，本质是一个循环

Klingen 说，做智能体和做普通应用不一样。它不是写完上线就结束，而是一个循环：

上线后追踪真实用户怎么用它，把问题整理成[[数据集|数据集]]，离线做实验、改实现，再评估改得有没有效，然后部署、继续观察 <button class="pd-ts" data-t="02:53" data-who="嘉宾" data-en="But this has been a lot of manual labor, because you need to look at traces, update these data sets, think about new evaluators, then make these changes, create new hypothesis." aria-label="回原文"></button>。

Langfuse 就是为此而生。

他解释，过去线上监控和数据科学实验是两套割裂的工具——数据集和线上真实情况不同步，你优化的方向就是错的。

所以需要一个把线上线下打通的新品类。

问题是，这个循环全是体力活：看追踪记录、更新数据集、想新的评估标准、提出假设、验证。

做得好的团队质量确实高，但代价是每周都要有人专门泡在数据里。

## 不同层次的循环，AI 正在逐层接管

他用了一个流行的心智模型：AI 系统是一层层嵌套的循环，最底层是预测下一个词，最顶层是人类设定方向。

2023 年只有代码补全这一层可用，2024 年多了一层，到 2025、2026 年，AI 已经能自己推理该修什么、提出修法、并验证是否有效 <button class="pd-ts" data-t="03:42" data-who="嘉宾" data-en="So what we see how we go through them one by one. High level, I just want to highlight these again possible because models improved. So when we started working on LangViers in 2023, like I mean we had GitHub Copilot, so like the lowest level or the level two." aria-label="回原文"></button>。

但人目前还守着四个关口：往数据集里加什么例子、怎么定义做得好、审查 AI 提出的改动、以及判断哪些失败模式值得管。

最后一点很微妙——智能体在生产环境里会发现各种奇怪的失败，但有些根本不重要，不值得为它过度优化。

## 一句大白话：边开飞机边画地图

为什么不能一开始就把目标定死、全自动跑？Klingen 的比喻很形象。

客户支持就是例子。老板说客户等太久、人力成本高，让 AI 全自动回复。

这是个很弱的目标，因为没人真正知道客服每天都在处理什么。

你只能在做的过程中，靠一个个错误案例搞清楚需求到底是什么。他称之为「边开飞机边组装地图」<button class="pd-ts" data-t="07:34" data-who="嘉宾" data-en="However, then, on the way of doing this, you figure things out based on error cases of what you even need to do. And that's this kind of map that you assemble the plane while you're flying it." aria-label="回原文"></button>。

所以**目标本身是移动的，人必须留在设定方向的循环里**，否则 AI 会朝着错误的方向狂奔。

## 全自动不如人守关键点

他画了一张投入产出图：纯手动投入时间巨大但质量高；纯全自动几乎不花时间，但风险是「产生大量 token，却没什么意义」<button class="pd-ts" data-t="08:49" data-who="嘉宾" data-en="And this is how you can get to, I'd say, success with your agent application. If you fully automate it, I would say you don't really need to invest any time because you're just like, I don't know, Codex, Goal Mode, your way to success, or like you add higher level loops on top of it, but you also risk that like it produces a lot of tokens, but it doesn't really make sense." aria-label="回原文"></button>。

理想的中间态是：人只在最重要的步骤介入——定方向、改数据集和评估标准——其余枯燥的底层循环全部自动化。

而且**质量反而可能更高：人看数据受限于自己的耐心，AI 能翻完多得多的错误案例**。

信号也不必都靠人工标注。用户骂客服机器人、点这不对、内部审核员改写草稿，这些[[隐式信号|隐式信号]]都能自动流进改进循环。

## 一个真实案例：自动写更新日志的智能体

Langfuse 自己的工程团队用 AI 多、发布多，但更新文档和对外宣传跟不上。于是他们做了个「更新日志写作智能体」：

看到代码合并，就自动起草文档和日志的修改，提交成 GitHub 上的 PR，人审核通过或提修改意见，智能体再迭代 <button class="pd-ts" data-t="11:24" data-who="嘉宾" data-en="However, then the question is, is how we communicate good? Because if we communicate badly about what we've released, then we kind of sabotage our releases if we misrepresent, for example, what has even been released." aria-label="回原文"></button>。

他们用编码智能体去分析这个写作智能体的表现，发现了具体问题：

事实准确，但清晰度低，而且会泄漏内部行话——客户不知道什么叫摄取管道，这些实现细节应该翻译成用户听得懂的语言。

接下来就是自动闭环：

智能体据此提议更新数据集和评估标准（专门测试是否泄漏行话），再提出新的实现方式，在更新后的数据集上做回测。

结果是 v2 版本在格式合规和准确性上持平，在用户友好语言上明显改善——正增量，合并上线 <button class="pd-ts" data-t="14:24" data-who="嘉宾" data-en="And agent came up with a new implementation where we see the v2 candidate. We are still doing on format compliance and accuracy in the same way as we did before." aria-label="回原文"></button>。

Klingen 说，这套跑法门槛不高：收集生产信号、记录详细执行轨迹，然后让智能体按天或按周定时循环处理新数据。

信号来源可以是用户反馈，也可以是应用内的人工标注。

## 两个连带的技术判断

这套玩法带来两个变化。一是数据系统要抗读：Langfuse 过去以写入为主（接收追踪和评估数据），现在 AI 能消化海量数据，读取量暴涨 <button class="pd-ts" data-t="16:08" data-who="嘉宾" data-en="And I think what's interesting here is it drives the need for a very scalable data system because you'll want to have agents really loop on this data and produce lots of queries." aria-label="回原文"></button>。

二是数据层必须自己拥有：

一年前的追踪记录现在成了有价值的上下文，不能被锁在会采样、会短期删除的商业系统里——要长期保留、不采样。

## 本集带走

- 做智能体应用是一个循环：线上追踪、离线实验、评估、部署、再学习，线上线下数据必须打通。
- AI 已能自动提出修复方案、维护数据集和评估标准，但人应守住方向设定和改动审查这几个关口。
- 目标是移动的——边开飞机边画地图，全自动有朝着错误方向优化的风险。
- 隐式信号（用户抱怨、人工改写、审核意见）可以自动喂进改进循环，不必全靠人工标注。
- 自我改进的智能体需要可扩展、可长期持有、以读为主的数据层。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">我认为这是团队谈论提升自身运作层次的一年，因为越来越好的模型把下游的一切都抽象掉了。</span>  
> *I think this is the year where teams talk about up-leveling, the level of where they operate themselves, where increasingly good models just abstract everything downstream.*  
> <span class="qm">—— Marc Klingen · [00:47]</span> ^q1

> <span class="qz">但实际上，你维护的是你所优化的边界。</span>  
> *But really, you maintain the boundary of what you optimize against.*  
> <span class="qm">—— Marc Klingen · [05:38]</span> ^q2

> <span class="qz">第二点，你真的会想拥有自己的数据层，因为现在比如一年前的轨迹就是有价值的上下文，你不会想让它们被锁在某个更商业化的系统里或类似的东西里。</span>  
> *And two, you want to really own the data layer because now the traces of, for example, a year ago are interesting context, and you don't want them to be locked up in a more commercial system or something where*  
> <span class="qm">—— Marc Klingen · [16:20]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-06-talks-why-building-an-eval-platform-is-harder|为什么做一个评估平台比看起来难得多]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)、编码智能体 (coding agent)</span>
- [[2025-09-21-lennys-from-managing-people-to-managing-ai-juli|Julie Zhuo：管理者的核心技能，就是驾驭AI的技能]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)</span>
- [[2026-05-27-devtools-cloudflare-devs|Cloudflare 三人聊：让模型直接写代码，别再堆工具了]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)</span>
- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)</span>

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
