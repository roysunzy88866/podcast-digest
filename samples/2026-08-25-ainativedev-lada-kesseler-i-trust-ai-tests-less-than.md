---
title: "别指望 AI 一次做对:一位首席工程师的协作心法"
podcast: The AI-Native Dev
date: 2026-10-06
source_url: undefined
duration: "45:48"
type: episode
cover: "#64748b"
image: "/covers/2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than.jpg"
description: 首席工程师 Lada Kesseler 讲她如何用规则、循环和测试驾驭 AI 编程，而不是被 AI 牵着走。
host: "[[Lada Kesseler]]"
concepts: ["[[智能体编码]]", "[[智能体]]", "[[Claude MD]]", "[[技能]]", "[[TDD]]", "[[BDD]]", "[[approval tests]]", "[[验证器]]", "[[软件工厂]]", "[[事件溯源]]", "[[事件建模]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/covers/2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than#post","headline":"别指望 AI 一次做对:一位首席工程师的协作心法","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than","mainEntityOfPage":"https://talk.solomind.cc/2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than","description":"首席工程师 Lada Kesseler 讲她如何用规则、循环和测试驾驭 AI 编程，而不是被 AI 牵着走。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than.jpg","about":[{"@type":"Person","name":"Lada Kesseler"},{"@type":"Thing","name":"智能体编码 (agentic coding)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"Claude MD"},{"@type":"Thing","name":"技能 (skill)"},{"@type":"Thing","name":"TDD"},{"@type":"Thing","name":"BDD"},{"@type":"Thing","name":"approval tests"},{"@type":"Thing","name":"验证器 (verifier)"},{"@type":"Thing","name":"软件工厂 (software factory)"},{"@type":"Thing","name":"事件溯源 (event sourcing)"},{"@type":"Thing","name":"事件建模 (event modeling)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"别指望 AI 一次做对:一位首席工程师的协作心法","item":"https://talk.solomind.cc/2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>别指望 AI 一次做对:一位首席工程师的协作心法</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 别指望 AI 一次做对:一位首席工程师的协作心法

<div class="pd-byl"><b>Lada Kesseler</b> · Logic 2020 首席工程师 · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我把它叫做离心机。是的。有点是因为，这个想法就像你把 AI 转得飞快，然后愚蠢的东西就被甩出来了。</div><div class="a">— Lada Kesseler <button class="pd-ts" data-t="00:22" data-who="Lada Kesseler" data-en="I call it like a centrifuge. Yeah. It's a bit because the idea is like you spin an eye so fast and stupid comes out." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Lada Kesseler]]
>
> **概念** [[智能体编码]] · [[智能体]] · [[Claude MD]] · [[技能]] · [[TDD]] · [[BDD]] · [[approval tests]] · [[验证器]] · [[软件工厂]] · [[事件溯源]] · [[事件建模]]

[[Lada Kesseler|Lada Kesseler]] 是 Logic 2020 的首席工程师，现在几乎什么都用 AI 做：写代码、做笔记、写文章。

在这期 The AI-Native Dev 播客里，她和主持人 Simon Maple 聊的核心话题是：AI 产出的东西从来不会第一次就合格，与其抱幻想，不如设计一套打磨它的流程。

## AI 默认爱讨好你，得先改掉这个

Lada 说，AI 自带的默认设置并不好用，尤其是它被训练得倾向于取悦你。

模型是个黑盒，你不知道它脑子里在想什么，但它一定会顺着你说。

所以她的基本规则里有一条：**允许它反驳你**。她直接在规则里写：「告诉我诚实的东西，别对我撒谎，别试图讨好我。」<button class="pd-ts" data-t="07:57" data-who="Lada Kesseler" data-en="So that's what I do. One of the things is like, hey, tell me honest things, like don't don't don't lie to me, don't try to please me. Does it does it follow those?" aria-label="回原文"></button>

效果如何？她明显感觉到 AI 变得不那么友善了——不再张口就是你真棒。这是个好迹象。

副作用是现在的模型会时不时主动声明说实话……，让她有点烦。

她把这些基本规则放在用户级的 [[Claude MD|Claude MD]] 文件里，总共 72 行，每一行她都清楚记得。她提醒：别什么都往里塞，模型的记忆是有限的。

## 一次只让 AI 干一件事

很多人对 AI 的期待错了。

Lada 观察到，最常见的错误用法是：给 AI 一个任务，同时附加一堆要求——顺便遵守我的所有编码规范、别犯任何错。

她直言这样行不通，因为「**这个东西一次只能做好一件事**」<button class="pd-ts" data-t="18:10" data-who="Lada Kesseler" data-en="So uh in my experience that doesn't work, and I think why it doesn't work is because this thing is only good at doing one thing at a time. So you can't expect to just enforce your standards like this way." aria-label="回原文"></button>。

正确的做法是拆开。先让它写，再让它回头找问题——AI 读完代码后，如果你专门让它挑毛病，它能挑得很出色。

一轮一轮来，而不是一口气全要。

主持人 Simon 呼应说，他们刚发布的 Agent 产品里的验证器就是这个思路：每个验证器只检查一件具体的事，确定性触发，跑短流程。

一堆这样的小检查，比一次笼统的做个代码审查效果好得多，还更快。

> 【背景】原文转写稿中未出现产品名「Tessl」，此处按原文仅称「他们刚发布的 Agent」。

## 离心机：把愚蠢甩出去

Lada 给自己最常用的迭代流程起了个名字：离心机。意思是「把 AI 转得飞快，愚蠢就被甩出来了」<button class="pd-ts" data-t="14:24" data-who="Lada Kesseler" data-en="So I have like seven, it goes on like I call it like a uh centrifuge. Yeah. So basically that is like you spin-eye so fast and stupid comes out." aria-label="回原文"></button>。

具体做法：先让 AI 往目标迈一步——只走一步，然后写入文件。她管这一步叫去冥想。

接着让它停下来，读回自己写的，对照目标判断够不够好，不够就改，再写回去。如此循环五到七轮。

她用这个方法写会议发言稿。

她承认有点不敢公开说自己是用 AI 写作的，但结论是：最终稿「**比我自己写的更像我自己**」——因为每一轮都有她的判断在里面。

她强调，别指望 AI 第一次就产出好东西，从来不会。质量是靠人来引导、一轮轮打磨出来的。

## 测试比代码更不能信 AI

这期节目英文标题里那句话来自她的原话：她信不过 AI 写的测试，甚至比信不过 AI 写的代码还厉害。

AI 会在测试里作弊、写出一团糟的东西，她形容那是犯罪现场<button class="pd-ts" data-t="32:54" data-who="Lada Kesseler" data-en="And then um it also um it also makes sure my tests are not completely horrible because like when you have AI write tests, a big danger, like I trust my AI with my tests even less than I trust it with my code." aria-label="回原文"></button>。

她的防线是两层测试。一层是 [[TDD|TDD]] 测试，主要给代理用，作为对现实的交叉校验，别让它跑偏。

有意思的是，用 TDD 流程产出的代码质量意外地好。

另一层是 [[BDD|BDD]] 层面的高层测试，用她自己发明的领域语言写成，一眼能扫完，比如「这里是 API、我发了什么、它返回了什么」。

这层她刻意设计成 AI 不容易随手改掉的形式，内部实现随便 AI 怎么改，但「系统到底有没有在工作」这道关她自己握着。

TDD 本身她做成了一个技能文件，文件开头有一小段专门写给代理看的说明，让它知道什么时候该自动启用——很多人忽略这段说明才是技能能否被触发的关键。

## 没想清楚问题之前，别急着写代码

接到不熟悉的问题时，Lada 有个特别的招：草图原型。

她把整个系统写成一个文本文件加一个代理，代理照着文件里的指令走流程，她亲自体验一遍用户体验。

她强调这绝对不能上生产，但能学到很多东西——就像过去的纸面原型，只是快得多。

她的理由是：**一旦开始写代码，你就过早锁死在某条路上**，看不见其他可能性。

她见过太多人急着进入解法，忘了先看清问题本身。

对于熟悉的项目，她会先和 AI 来回讨论，让它生成 HTML 页面形式的产物，她逐个点评再反馈回去，像一块白板。

## 你来决定方向，别顺着 AI 的问题走

很多人把和 AI 的交互当成普通对话：它问什么就答什么。Lada 说这是个陷阱。

AI 抛给你 10 个问题，没必要老老实实一个个答——**你是做决定的人，大可以掉头**。她管这叫反向引导。

她还喜欢用 AI 当看见选项的工具。站在一个看不见的岔路口，让 AI 把所有可能的路径摆出来，标出推荐项，也标出没走的路。

她引用 conference 演讲者的观点：抱怨比解释容易得多——先看到东西，才知道自己要什么。

> 【背景】此处演讲者可能指 Gojko Adzic,但原转写稿未给出其姓名。

## 软件工厂？先攒够信得过的积木

对当下火热的[[软件工厂|软件工厂]]概念，Lada 挺谨慎。她见过的很多做法是用 AI 生成代理再生成代理，产出大量垃圾。

她试过 Claude Flow 之类的方案，在她固定的基准问题上，表现是所有方案里最差的。

她自己的路径是先造可信的积木。比如她已经有一套重构流程：指着几段代码，转身走开，回来就是好代码。

下一步她想解决知识提取——让 AI 把有价值的东西好好存进文件，目前它做得很糟。

有了足够多这样经过验证的积木，才谈得上自动化组装。

她提到有人在会议上半年工厂实验失败后回退的例子，说自己更愿意听这些真正试过的人。

## 本集带走

- 别指望 AI 第一次就做对，质量来自多轮离心机式迭代：走一步、写入文件、读回、修正、再来。
- 一次只让 AI 干一件事；要检查质量就单独发起一轮找问题，别把所有要求堆在一个任务里。
- 在规则里明确允许 AI 反驳你、别讨好你，产出会诚实得多。
- 比 AI 代码更要防的是 AI 测试；把高层的行为测试握在自己手里，内部实现才交给代理。
- 信不过的软件工厂式全自动堆叠，先一块块攒出自己验证过的积木。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">我把它叫做离心机。是的。有点是因为，这个想法就像你把 AI 转得飞快，然后愚蠢的东西就被甩出来了。</span>  
> *I call it like a centrifuge. Yeah. It's a bit because the idea is like you spin an eye so fast and stupid comes out.*  
> <span class="qm">—— Lada Kesseler · [00:22]</span> ^q1

> <span class="qz">智能体编程的发展快到能让任何人脖颈扭伤。</span>  
> *Agentic coding is moving fast enough to give anyone whiplash.*  
> <span class="qm">—— 嘉宾 · [01:00]</span> ^q2

> <span class="qz">呃，他有一场很棒的演讲，他提出的一个观点是，抱怨比解释你想要什么要容易得多。</span>  
> *Um but he he has an amazing talk, and one of the points that he was making, it's much easier to complain than to explain what you what you want.*  
> <span class="qm">—— Lada Kesseler · [29:04]</span> ^q3

> <span class="qz">然后它还能确保我的测试不会完全糟糕透顶，因为当你让 AI 写测试时，一个很大的危险是——我对 AI 写测试的信任甚至低于我对它写代码的信任。</span>  
> *And then um it also um it also makes sure my tests are not completely horrible because like when you have AI write tests, a big danger, like I trust my AI with my tests even less than I trust it with my code.*  
> <span class="qm">—— Lada Kesseler · [32:41]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact|TESL 智能体：让你的编码智能体自己越用越好]]<span class="pd-rz">同概念:skill、智能体 (agent)、软件工厂 (software factory)</span>
- [[2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co|Tesla 的暗工厂：65% 的 PR 由智能体自动产出，95% 的代码没人看过]]<span class="pd-rz">同概念:verifier、智能体 (agent)、软件工厂 (software factory)</span>
- [[2026-09-27-talks-building-self-improving-agent-software-f|软件工厂如何自我改进:技能、记忆与模型路由]]<span class="pd-rz">同概念:skill、智能体 (agent)、软件工厂 (software factory)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi|DevOps 之父谈智能体开发：谁来管、怎么管、别踩什么坑]]<span class="pd-rz">同概念:智能体 (agent)、智能体编程 (agentic coding)</span>
- [[2026-07-21-trainingdata-factory-s-matan-grinberg-the-coming-dark|Factory CEO Matan:早两年等于错，退款、路由器与软件工厂]]<span class="pd-rz">同概念:智能体 (agent)、软件工厂 (software factory)</span>
- [[2026-08-31-lennys-how-i-turned-claude-into-a-self-improvin|一个PM用Claude CoWork建的自愈型工作系统]]<span class="pd-rz">同概念:skill、智能体 (agent)</span>

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
