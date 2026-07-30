---
title: "别再微管理 Claude:Claude Code 造物主的智能体实战心法"
podcast: Y Combinator Startup Podcast
date: 2026-07-28
source_url: undefined
duration: "36:04"
type: episode
cover: "#64748b"
image: "/covers/2026-07-28-yc-boris-cherny-building-claude-code-e3mkr7.jpg"
description: "从删掉八成系统提示词到用一句指令指挥数千个智能体跑两周,Opus 5 时代的编程范式已全然翻新。"
host: "[[Boris Cherny]]"
concepts: ["[[Cloud Code]]", "[[Opus 5]]", "[[智能体]]", "[[提示词注入]]", "[[系统提示词]]", "[[产品冗余]]", "[[动态工作流]]", "[[测试时计算]]", "[[消融]]", "[[例程]]", "[[实证心态]]", "[[验证]]", "[[Bunn]]", "[[沙箱]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>别再微管理 Claude:Claude Code 造物主的智能体实战心法</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# 别再微管理 Claude:Claude Code 造物主的智能体实战心法

<div class="pd-byl"><b>Boris Cherny</b></div>

<div class="pd-mt">2026-07-28 · Y Combinator Startup Podcast · 36:04</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-28-yc-boris-cherny-building-claude-code-e3mkr7.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">字面意义上，就是在提示词注入发生时，观察模型大脑中亮起的神经元。</div><div class="a">Boris Cherny · 03:00</div></div>

> [!info] 关联
> **人物** [[Boris Cherny]]
>
> **概念** [[Cloud Code]] · [[Opus 5]] · [[智能体]] · [[提示词注入]] · [[系统提示词]] · [[产品冗余]] · [[动态工作流]] · [[测试时计算]] · [[消融]] · [[例程]] · [[实证心态]] · [[验证]] · [[Bunn]] · [[沙箱]]

<div class="pd-tldr"><b>一句话</b>从删掉八成系统提示词到用一句指令指挥数千个智能体跑两周,Opus 5 时代的编程范式已全然翻新。</div>

把十几万行代码、整个底层运行时从一种语言换写成另一种语言,最顶尖的工程师要干一年多——Boris 的团队靠 Claude 给出一句指令,让它自己跑了十一天就干完了,而且已经上线。说这话的人是 Boris,Claude Code 就是他造的。

这一集 YC 的对谈里,他围绕刚发布的 [[Opus 5|Opus 5]] 讲了四件事:新模型到底强在哪,为什么一发布他反而敢删掉 Claude Code 八成的[[系统提示词|系统提示]]词;怎么从下死指令换成给目标、给护栏、放手让模型自己干自己验;怎么用[[动态工作流|动态工作流]]同时指挥成百上千个[[智能体|智能体]],把几十名工程师的维护活全包掉;以及,如果编程真被解决了,工程师和学生该学什么。带着这张地图,我们挨个过一遍。

先说新模型 Opus 5。它最反直觉的能力,不是某个单项跑分变高,而是它能连着跑很久很久 [01:31]。Boris 说,配上 Auto Mode,它可以连跑几天、几周甚至几个月不停,因为它自己知道要把任务干完。更关键的是,这个模型似乎终于做到了业内多年没解决的安全难题:无法被[[提示词注入|提示词注入]](攻击者诱导模型执行删除文件等恶意指令)[01:54]。为了实现这一点,他们把三层防线叠在一起:三年对齐研究训练出的模型本身,加上基于 Anthropic 机械可解释性研究做的提示词注入分类器——这套系统真能看到模型脑子里有神经元在提示词注入时亮起来 [02:45],最后再加一层 Auto Mode 分类器。三层一叠,他们自己搞红队测试、办比赛都攻不破了。

既然模型变这么聪明,Claude Code 的系统提示词(告诉模型怎么行动的初始指令)就成了累赘。Boris 做的第一件事就是删——这次新模型发布,他一口气删掉了八成以上的系统提示词 [03:53]。原因很简单:以前塞进提示词里的东西,多半是在打补丁,纠正模型本来该懂却不懂的行为。现在 Opus 5 本身变聪明了,补丁不仅没用,反而碍事。他们甚至做了个内部叫 simple mode 的实验功能,把所有提示词全删光去跑,发现模型反而表现得更聪明一点 [05:09]——当然,作为给普通用户用的产品,有些提示词还是得留着,好让它更符合人的使用习惯。

这种删了再加的思路,不只用在提示词上,整套工具和代码他们都一直在删删改改。他们用研究里叫 ablation([[消融|消融]]实验:把系统里某部分去掉,看它对整体的影响)的方法,把整个系统提示词删光,再一行行加回来,看每一行到底有没有用 [06:19]。他们的建议很直接:做智能体产品的人,每次新模型一发布,就得敢于全删重来;普通用户用 Claude Code,也得每六个月把旧的配置全删了,看看光靠新模型自己能干到什么地步 [07:18]。

旧代码删了,该怎么重建?这就要换一套全新的干活思路了。Boris 说,别一上来就去猜模型需要什么指令。先删,再用。用的时候观察它在哪反复栽跟头,只有真确认它在这个点上反复犯傻,你才把针对这点的指令加回去 [08:36]。这背后的核心,是他反复强调的一个认知转变:别把模型当成一套你写好规则的系统,要把它当成一个活物 [09:21]。它每一代都有自己的脾气,你得花时间观察它,用做科学实验一样的心态去试错、看结果、再调整。连评估集他们都是攒着用,直到模型把某项测试刷到满分、测不出差距了就扔掉换新的 [10:33]。

顺着这个思路,Boris 抛出了他认为当下最大的机会所在,他管它叫 product overhang([[产品冗余|产品冗余]]:模型明明已经具备了某种能力,却因为现有产品的形式太死板,没法把这个能力真正用出来)[11:23]。他说,模型今天能做到的,远比大家意识到得多。一两年前做 Claude Code 的起点就是这个:当时最好的同类产品还在做单行代码补全、做个只能读不能写的对话框,而 Sonnet 3.5(Anthropic 当时推出的模型)其实已经能写整个文件了。他做的,就是给模型一个终端的完整权限,把手脚放开,产品就成了 [12:29]。

那今天的产品冗余在哪?Boris 说,去给模型派那种你觉得难到离谱的活。他用了一个活生生的例子:Bun 是一个开源的 JavaScript 运行时(程序跑代码的基础环境),原本是用 Zig(一种需要手动管内存、很容易出内存泄漏的底层编程语言)写的。Bun 团队本来只让 Claude 去模糊测试(自动找代码漏洞)找内存泄漏。后来团队里的 Jared 干脆说,咱直接让模型把整个运行时从 Zig 重写成 Rust 吧 [16:46]。他写好了测试用例(用来[[验证|验证]]代码写得对不对的自动检查)作为衡量标准,用了一个叫动态工作流的功能,给了模型一句指令,就让它自己去干了。结果它连跑了十一天,把十几万行的底层代码全换了,而且现在 Claude Code 跑的就是这套新代码 [18:01]。这在以前,顶尖工程师干也得一年以上。

Boris 说,别再像以前那样下死指令了。很多人用 Claude,非要把步骤拆成一二三四五,要求它必须这么做。正确做法是上移一个层次:你给个高难目标,给好护栏(安全边界)和退出标准(怎么算干完了),然后就放手让它干 [15:39]。现在的提示词工程,关键不在于怎么把指令写得花哨,而在于怎么给模型配好自己验证结果的工具。他举了自己的实验:他想把用 Electron(一个网页技术做桌面软件的框架)写的桌面应用,用 Swift(macOS 原生开发语言)重写一遍。他只是开了个叫 Claude Tag 的内部测试产品(在 Slack 里直接使唤 Claude),让它自己在云端开个 Mac 虚拟机,跑两个版本,一个像素一个像素地截图对比,对不上就别停 [22:04]。这个任务一跑就是两个多星期,到现在还在后台跑着,还自己在 Slack 里开个频道,每隔几分钟发张进度截图。

像这样能干上几个星期的任务,以及怎么真正实现用成百上千个智能体产生巨大杠杆,就要靠工具的升级了。说完了任务怎么派,接下来就是怎么调度它们。Claude Code 有个叫动态工作流的新功能。你只需说一句用工作流,它就会在 Bun 运行时里开个虚拟机当[[沙箱|沙箱]](隔离的安全运行环境),然后自动编排出大批智能体去干活 [26:03]。Boris 的老本是函数式编程,他把这套机制设计成了一套智能体的代数:有些环节并行跑,跑完交给下一批智能体验证总结,然后再展开一层。他把它定义为一种全新的[[测试时计算|测试时计算]](模型在生成回答时投入的算力)扩展方式 [27:13]。

第二种调度方式叫循环和[[例程|例程]]。循环是本地的定时任务,例程是跑在云端的。这就是不共享上下文、但能反复执行的活。Boris 说,他们现在已经让 Claude 自己维护自己的代码库了 [28:38]。每天有二三十个例程自动跑:比如有一句话提示的死代码清理员,每天用静态分析自动提删改请求;有自动发布已经全量灰度的实验功能的;有专门给缺测试的代码补测试、删掉以前模型写的废测试的;还有他最喜欢的抽象警察——专门去各个代码库里找那些其实是一回事、却被重写了好几遍的代码,把它们合并成一个 [29:36]。每天几百上千个智能体在后台干这些活,顶替了几十上百个工程师的维护工作量,工程师就能省下精力去发布新产品、跟用户聊天。

工具变了,人怎么办?这正是最后一个话题。主持人追问:既然编程基本上被解决了,什么样的人才能脱颖而出?Boris 先做了个限定:对普通的业务代码,编程确实算被解决了;但对深层系统代码、分布式系统、偏差一个像素都不行的 UI 验证,Claude 依然会挣扎 [31:07]。不过对于剩下的大部分活,真正能拉开差距的,是一种彻底转向实证主义(基于实际观察和实验,而非死守理论)的心态 [32:07]。你得忘掉过去对老模型的成见,忘掉课堂上学的那套死板的系统工程理论,重新去观察这个活物,看它哪里做不好,再去补上。

至于还在学校学计算机的学生该学什么,Boris 讲了自己的故事:他初中时为了数学考试作弊,在 TI-83 计算器上自学写了第一门 BASIC 程序 [33:17]。数学变难了,他就去学更底层的汇编语言继续写求解器。编程对他从来都是解决实际问题的工具。所以他的建议很实在:别只啃计算机科学理论,要去学怎么把东西做出来。去学怎么做产品设计、怎么建立商业直觉、怎么做数据科学、怎么去跟真实的用户交谈。只有把这些能直接解决现实问题的硬技能,和计算机科学结合起来,才是真正有价值的东西。

## 本集带走
最后收个尾,这一集值得带走的是几个硬核判断。第一,新模型一发布,先敢删。那些为旧模型打的补丁和死指令,如今多半在拖后腿,删掉看它真实的表现。第二,别把任务拆成死步骤,像对待同事一样,给它目标、护栏和验证标准,然后放手,它能连着跑上两个星期去完成。第三,真正的杠杆不是让一个模型写代码,而是用动态工作流或定时例程,编排成百上千个智能体同时干活,把繁琐的维护活全包了,人省下来去做发布产品、跟用户聊天这些真正需要人的事。第四,忘掉你脑子里那套旧的系统工程理论,转向实证主义,去观察、去试错。最后,对还在读书的人来说,别只学写代码,去学怎么应用它——学设计、学商业、学怎么跟用户交谈,这些才是让你不被替代的真正壁垒。

<div class="pd-sec">全部金句 <span>6 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">字面意义上，就是在提示词注入发生时，观察模型大脑中亮起的神经元。</span>  
> *where it's literally, we're looking at neurons in the model's brain that light up when prompt injection happens.*  
> <span class="qm">—— Boris Cherny · [03:00]</span> ^q1

> <span class="qz">只有当你看到它反复在同一件事上绊倒时，你才应该把它加回去。</span>  
> *And only when you see it repeatedly stumble on the same thing, that's when you add it back.*  
> <span class="qm">—— Boris Cherny · [08:36]</span> ^q2

> <span class="qz">通常，我们只是让 eval 饱和，然后我们必须把它扔掉，我们必须想出一个新的 eval。</span>  
> *Very often, we just saturate the eval, and then we have to throw it away, and we have to come up with a new eval.*  
> <span class="qm">—— Boris Cherny · [10:36]</span> ^q3

> <span class="qz">它运行了11天。它重写了整个代码库。</span>  
> *And it ran for 11 days. And it rewrote the entire code base.*  
> <span class="qm">—— Boris Cherny · [18:01]</span> ^q4

> <span class="qz">验证，我认为，可能是人们做不对的单一最重要的事情，大体上。</span>  
> *And the verification, I think, is probably the single most important thing that people do not get right, largely.*  
> <span class="qm">—— Boris Cherny · [20:51]</span> ^q5

> <span class="qz">忘掉你在课堂上学到的关于计算机科学理论的所有东西。</span>  
> *forget everything that you learned about computer science theory in class.*  
> <span class="qm">—— Boris Cherny · [32:11]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|代码量暴涨8倍后，工程管理怎么办？]] —— 同概念:智能体 (agent)、验证 (verification)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]] —— 同概念:智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|SaaS 不会死,PM 迎来黄金期:Dan Shipper 的 AI 工作预测]] —— 同概念:智能体 (agent)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-22-latent-space-gray-swan|让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏]] —— 同概念:提示词注入 (prompt injection)、智能体 (agent)、沙箱 (sandbox)、Cloud Code
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|把 AI 当员工来管理:Claire Vo 的九个智能体生活实战]] —— 同概念:提示词注入 (prompt injection)、智能体 (agent)
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]] —— 同概念:智能体 (agent)、系统提示 (system prompt)

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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); }
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
