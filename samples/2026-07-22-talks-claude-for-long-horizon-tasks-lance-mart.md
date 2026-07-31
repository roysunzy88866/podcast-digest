---
title: Claude 异步智能体架构的四块基石
podcast: 精选演讲
date: 2026-07-22
source_url: undefined
duration: "25:00"
type: episode
cover: "#64748b"
description: "从十分钟任务到自主跑十二小时,异步智能体在架构上需要做对四件事。"
guests: ["[[Lance Martin]]"]
concepts: ["[[任务视界]]", "[[Managed Agents]]", "[[测试框架]]", "[[沙箱]]", "[[验证器]]", "[[做梦]]", "[[组织级驾驭系统]]", "[[带内记忆]]", "[[CloudTag]]", "[[Claude]]"]
category: 智能体
tags:
  - 智能体
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Claude 异步智能体架构的四块基石</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# Claude 异步智能体架构的四块基石

<div class="pd-byl"><b>Lance Martin</b></div>

<div class="pd-mt">2026-07-22 · 精选演讲 · 25:00</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-22-talks-claude-for-long-horizon-tasks-lance-mart.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但是当模型只能做大约一小时的工作时，异步作为一种体验是很糟糕的。</div><div class="a">Lance Martin · 01:48</div></div>

> [!info] 关联
> **人物** [[Lance Martin]]
>
> **概念** [[任务视界]] · [[Managed Agents]] · [[测试框架]] · [[沙箱]] · [[验证器]] · [[做梦]] · [[组织级驾驭系统]] · [[带内记忆]] · [[CloudTag]] · [[Claude]]

<div class="pd-tldr"><b>一句话</b>从十分钟任务到自主跑十二小时,异步智能体在架构上需要做对四件事。</div>

要跑一个能自主工作十二个小时、甚至能处理几十万行代码库的智能体,最大的障碍早就不是模型聪不聪明,而是你怎么给它的记忆和验证做架构设计——你得给它配一套能[[做梦|做梦]]、能自我纠正的外部脑子。讲这话的人来自 Anthropic,这一集他拆解了支撑 [[Claude|Claude]] 长时程异步智能体的四大设计主题,核心是最近推出的 Cloud [[Managed Agents|Managed Agents]] 平台背后的架构思考。

所谓异步智能体(一种你派出去干活、不用全程盯着、干完或卡住才回来找你的程序),它的能力上限直接由模型的[[任务视界|任务视界]](模型能连续自主完成工作的最长时间)决定。演讲者把 Claude 的演进分成三阶段:在 Opus 3 时代,模型大概只能连续自主干十到二十分钟,那时只适合做自动补全或聊天这种你深度在环的活儿;过去一年,像 Claude Code 这种同步编码智能体兴起,模型能扛住大约一小时的活儿;直到最近几个月,模型终于能连续干十二小时以上的工作,异步这种产品形态才真正好用 [01:01]。伴随着任务视界的拉长,API 也在进化:两年前只有最基础的 Messages API(你给提示词、它给响应,只适合你自己搭[[测试框架|工作框架]]);后来发布了 Agent SDK,相当于官方把工作框架直接打包给你;而从四月起,他们推出了 Managed Agents,把工作框架连同部署基础设施全包了 [02:39]。

明白了时间视界为什么决定了产品形态,接下来要问的是:让模型长时间自主干活,架构上到底该怎么搭?

这就要讲到第一个主题:把大脑和手解耦 [03:19]。最直观的架构是把工作框架(harness,即指挥模型干活的控制程序)和[[沙箱|沙箱]](实际干活的执行环境)塞在同一个容器里。但问题在于,一旦这个容器崩溃,你整个会话连同之前的进度就全丢了。更让人脊背发凉的是安全问题:如果你把一堆系统密钥也放在这个容器里,让模型连着跑十个小时而你没在旁边盯着,这就太危险了。所以他们把架构拆成了两部分:大脑(工作框架)变成了一个无状态进程,它只负责跟一个会话对话;这个会话是一个只追加(append-only,即只往里添新内容、不修改旧内容)的事件日志;而实际干活的双手就是一堆纯粹的容器 [04:13]。大脑去指挥这些手干活,而且一个大脑可以同时管很多双手 [04:39]。这种解耦非常优雅:沙箱挂了也没事,因为进度都在那个只追加的日志里;密钥被单独存在保险库里,从不直接进沙箱。

架构有了安全感,但模型怎么保证自己长跑时不犯错?这引出了第二个主题:使用[[验证器|验证器]] [06:20]。如果你让同一个模型、在同一个上下文里既干活又给自己打分,它往往会自我感觉良好,产生各种幻觉。更好的做法是把验证这个动作分离出去,放到一个完全独立的上下文窗口里,专门为审查工作做优化。具体做法是建一个构建智能体和一个验证器智能体:验证器拿着你设定的目标或标准,不断去挑构建智能体的刺,两者形成一个循环。只有当独立验证器确认目标达成、退出循环时,任务才算结束。演讲者拿 OpenAI 发起的一个挑战打了比方:他给 Opus 4.7 和更高容量的前沿模型配上这套验证循环,让它们去搞机器学习训练实验,结果发现高容量模型配上这套循环,能自己连续迭代二十次直到完全达标 [08:57]。因为这套范式不再需要人类去来回纠正,而是把纠正的信号直接写进了环境里,模型就能自己闭环完成长程任务 [09:31]。

模型能闭环干活了,但它能像人一样积累经验、越干越好吗?这正是第三个主题自我学习的核心,答案藏在两个机制里。

第一个机制叫[[带内记忆|带内记忆]](in-band memory,即模型在执行任务的线路上实时写记忆) [11:04]。你只要给模型一个文件系统作为记忆目录,它就能边干边记。演讲者发现,像 Sonnet 3.5 这种稍早的模型,写出来的记忆往往是很差劲的战术碎片;但更新的模型,比如 4.6,已经能写出非常有战略性的笔记 [11:25]。他用一个开源基准测试说明:高容量模型的关键优势在于它们多了一个蒸馏(distillation,即从具体信息中提炼出可复用的抽象规律)步骤 [12:44]。

但只靠边干边记会出大问题,于是有了第二个机制:做梦 [13:22]。在漫长任务中,模型有时会写下一些局部最优(只对当前这一步有用)甚至是完全错误的记忆。演讲者拿玩宝可梦游戏举了个极其生动的例子:Claude 写错了一条关于位置的记忆,结果导致游戏角色一直走错位,次次掉进陷阱门。在五次测试中,只靠带内记忆的模型五次全掉坑。而引入做梦机制后——也就是在离线状态下,回头审视之前所有的记忆和运行轨迹,找出并修正这些错误——模型就能纠正偏差,顺利过关 [14:20]。所以,带内写记忆会犯错,而做梦这个离线过程就是用来纠错的,它俩缺一不可。

把记忆和架构都解决了,最后一个主题是关于整个组织的协作:我们将走向[[组织级驾驭系统|组织级驾驭系统]](org-level harness,即整个团队共享而非单兵使用的智能体工作框架) [16:09]。他们发布了 [[CloudTag|CloudTag]],大家第一反应是不就是个 Slackbot(运行在聊天软件里的机器人)嘛。但演讲者强调,它的精髓不在于接入了 Slack,而在于底下的那套多人共享系统:它有自己独立的身份和凭证,不绑定某一个用户;它能访问整个组织的上下文,而不只是你本地的上下文 [17:09]。这带来的好处是颠覆性的:新人入职第一天就能用上配置最完善的工作框架;它能在你动手做实验前去查别人是不是已经做过了;它甚至能主动巡视组织里的动态,在关键时刻主动提醒你该注意什么,而不是被动等你提问 [17:24]。未来,这种能被组织里许多人同时引导、在更长时间跨度上自主运作的智能体,将成为主流 [19:02]。

## 本集带走

最后收个尾,这一集值得带走的是这几层意思。第一,长跑智能体的根基在于把大脑和手解耦,把状态变成只追加的日志,把密钥锁进单独的保险库,这样既不怕崩溃又安全。第二,别让模型自己给自己打分,把验证器单独拎出来,让构建和验证形成一个循环,这是实现自主长跑的通用原语。第三,模型的记忆系统也分两半:边干边记的带内机制负责捕捉信息,但难免会写错或者只顾眼前;离线的做梦机制则负责审视全局、修正错误。第四,未来的智能体不再是单打独斗,而是带有独立身份的组织级驾驭系统,新人第一天就能用上全套工具,它甚至能主动巡视全局、给你未问先答的提醒。

<div class="pd-sec">全部金句 <span>4 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">但是当模型只能做大约一小时的工作时，异步作为一种体验是很糟糕的。</span>  
> *But when models can only do like an hour of work, async as an experience is kind of bad.*  
> <span class="qm">—— Lance Martin · [01:48]</span> ^q1

> <span class="qz">因为发生的事情是，与其将转向编码到我作为人类身上，不如将信号编码到环境中。</span>  
> *Because what happens is instead of encoding steering into me as the human, you're encoding the signal into the environment.*  
> <span class="qm">—— Lance Martin · [09:31]</span> ^q2

> <span class="qz">因为那最终并没有建立苦涩教训，在这个意义上，模型可以学会管理自己的内存，比你可以提前为模型凭直觉设计这些内存类型要好得多。</span>  
> *Because that ends up being not very bitter lesson built in the sense that models can learn to manage their own memory much better than you can intuit these memory types for the model ahead of time.*  
> <span class="qm">—— Lance Martin · [23:02]</span> ^q3

> <span class="qz">这是非常经典的苦涩教训药丸，但模型可以推理它们自己的内存和上下文结构，比你可以为它们规定一种构建自己内存的方式要好得多。</span>  
> *This is very classically bitter lesson pill, but models can reason about their own memory and context structure much better than you can prescribe for them a way to structure their own memories.*  
> <span class="qm">—— Lance Martin · [23:50]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]] —— 同概念:沙箱 (sandbox)、Claude
- [[2026-07-09-talks-the-golden-age-of-ai-engineering-alexand|OpenAI 开发者日：从结对编程到指挥智能体大军]] —— 同公司:OpenAI · 同概念:工作框架 (harness)
- [[2026-05-21-latent-space-daytona|Daytona:为智能体造一台像笔记本一样的计算机]] —— 同概念:沙箱 (sandbox)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-03-01-lennys-the-design-process-is-dead|AI 时代的设计大洗牌:对话 Anthropic 设计负责人 Jenny Wen]] —— 同公司:Anthropic · 同概念:Claude
- [[2026-07-26-lennys-anthropics-first-technical-pm-on|Anthropic 产品负责人:评估是新的 PRD,不反驳你的 AI 才是好 AI]] —— 同公司:Anthropic · 同概念:Claude
- [[2026-07-28-yc-sam-altman-never-a-better-time-to-do-a-s|Sam Altman 谈 AI 时代的创业法则:被全世界当成白痴是最大优势]] —— 同公司:OpenAI · 同概念:沙箱 (sandbox)

</div>
</div>

*本集关键词:异步智能体 · 长时程任务 · 架构设计 · 记忆机制 · 自我验证*

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
