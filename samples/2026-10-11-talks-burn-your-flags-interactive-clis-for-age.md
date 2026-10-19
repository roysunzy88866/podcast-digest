---
title: 当AI代理遇上命令行工具：一场「烧掉参数」的实验
podcast: 精选演讲
date: 2026-10-19
source_url: undefined
duration: "53:28"
type: episode
cover: "#64748b"
description: PayPal 开发者工具负责人 Mark Lummus 和技术负责人 Navinkumar Patil 办了一场工作坊，让听众改造一个交互式命令行工具，好让 AI 代理能用它点咖啡。
guests: ["[[Mark Lummus]]"]
concepts: ["[[智能体]]", "[[CLI]]", "[[交互式命令行]]", "[[无障碍设计]]", "[[Tmux]]", "[[IPC 侧信道]]", "[[上下文注入]]", "[[确定性]]", "[[Claude Code]]", "[[Claude Agent SDK]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-burn-your-flags-interactive-clis-for-age#post","headline":"当AI代理遇上命令行工具：一场「烧掉参数」的实验","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-burn-your-flags-interactive-clis-for-age","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-burn-your-flags-interactive-clis-for-age","description":"PayPal 开发者工具负责人 Mark Lummus 和技术负责人 Navinkumar Patil 办了一场工作坊，让听众改造一个交互式命令行工具，好让 AI 代理能用它点咖啡。","datePublished":"2026-10-19","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Mark Lummus"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"CLI"},{"@type":"Thing","name":"交互式命令行 (interactive CLI)"},{"@type":"Thing","name":"无障碍设计 (accessibility)"},{"@type":"Thing","name":"Tmux"},{"@type":"Thing","name":"IPC 侧信道 (IPC side channels)"},{"@type":"Thing","name":"上下文注入 (context injection)"},{"@type":"Thing","name":"确定性 (deterministic)"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"Claude Agent SDK"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"当AI代理遇上命令行工具：一场「烧掉参数」的实验","item":"https://talk.solomind.cc/2026-10-11-talks-burn-your-flags-interactive-clis-for-age"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当AI代理遇上命令行工具：一场「烧掉参数」的实验</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 当AI代理遇上命令行工具：一场「烧掉参数」的实验

<div class="pd-byl"><b>Mark Lummus</b> · PayPal 开发者工具负责人 · 2026-10-19</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-burn-your-flags-interactive-clis-for-age.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果你试图创建能预测所有可能流程的 flag，flag 就会成倍增加。</div><div class="a">— Mark Lummus <button class="pd-ts" data-t="03:19" data-who="Mark Lummus" data-en="Flags multiply if you try to create flags that predict all the possible flows." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Mark Lummus]]
>
> **概念** [[智能体]] · [[CLI]] · [[交互式命令行]] · [[无障碍设计]] · [[Tmux]] · [[IPC 侧信道]] · [[上下文注入]] · [[确定性]] · [[Claude Code]] · [[Claude Agent SDK]]

命令行界面（[[CLI|CLI]]）是最老的电脑操作方式：不点鼠标，直接敲命令。

[[Mark Lummus|Mark Lummus]] 职业生涯开始时，一切都靠命令行——串口连上电脑，打开终端，开始打字。后来图形界面统治了一切，命令行一度像是慢慢死去。

但 AI 代理出现了。代理干活的本质，就是不停地调用命令行工具，[[Claude Code|Claude Code]]、Codex 这些产品的走红让命令行迎来第二春。

而这场工作坊讨论的是一个更具体的问题：[[交互式命令行|交互式命令行]]工具，人类用着顺手，AI 代理却会用得一团糟。

## 交互式命令行为什么会让代理悄悄失败

交互式命令行指的是那种会向你提问的工具：

你运行它，它弹出一个问题，你用方向键选答案，它再根据你的选择问下一个问题。

这种设计对人很友好，因为下一个问题可以基于你上一个回答动态变化，安全护栏也内置在一问一答的流程里。

问题在于，代理运行这种工具时会安静地失败。

人类看到的是问题菜单，代理看到的是不断重绘的屏幕；运行环境丢失了界面状态，没有报错，没有提示，什么都没有 <button class="pd-ts" data-t="02:57" data-who="Mark" data-en="But if they run an interactive CLI, that may be bad because not all harnesses handle interaction very well. And if they don't handle it very well, they'll fail quietly." aria-label="回原文"></button>。

这种失败是沉默且不可见的。

## 为什么不能靠加参数解决

常见的修复办法是加命令行参数，把所有可能的答案都变成一个开关。

这对简单场景没问题：流程事先已知、一遍跑完、各选项互相独立。

但如果答案取决于上下文、取决于实时变化的环境——比如命令行先调一个接口，再根据返回结果决定问什么——**参数就会爆炸式增长，根本没法穷举** <button class="pd-ts" data-t="04:03" data-who="Mark" data-en="Over here on the left, we see a sample CLI. It's interactive. The CLI's opened an interactive prompt, an error key prompt." aria-label="回原文"></button>。

而且代理不是自动化脚本。自动化脚本什么都不懂，所有决策都是预先定好的；

代理会推理、会反问、会重试、会后退，最重要的是能走决策树——只要你给它一棵 <button class="pd-ts" data-t="05:19" data-who="Mark" data-en="You really can't use flags for those situations. Now, an agent is not like an automation script. An automation script knows nothing." aria-label="回原文"></button>。

## 关键洞察：把代理当成无障碍的新读者

Mark 给出的框架很妙：我们已经有一套成熟的方法论，叫[[无障碍设计|无障碍设计]]——让软件对有不同能力的人可用。

现在只需把这套方法映射到代理身上：**同一套纪律，换一位读者** <button class="pd-ts" data-t="06:01" data-who="Mark" data-en="It's called accessibility. And so if you map what we do for humans to what we need to do for agents, then the solutions become apparent. It's the same discipline with a new reader." aria-label="回原文"></button>。

别再假装代理和人类有相同的能力，承认差异，方案自然浮现。

## 工作坊：让代理用命令行点咖啡

实验的主角叫 Barista 9000，一个接咖啡订单的命令行工具，直接交给代理跑必然失败。

规则很简单：改这个工具，让代理能用它点咖啡，成绩上传到服务器排行榜。赢家抱走一台 Mac Mini。

他们强调，用最前沿的大模型开最高推理档确实能硬闯过去，但真正有趣的挑战是：

==能不能让 Haiku 或 Sonnet 这个级别更快更便宜的模型跑通== <button class="pd-ts" data-t="16:03" data-who="Mark" data-en="We'll try to assist you as best we can. You know, we had a little bit of a debate internally. There are some great models out there." aria-label="回原文"></button>——毕竟团队现在都得掂量 token 预算。

Navinkumar 随后分享了几个好点子（他特意不叫最佳实践，因为这个领域太新，大家都在摸索）。

## 三个好点子：Tmux、侧信道、上下文注入

第一个是 [[Tmux|Tmux]]。它是一个终端复用工具，能在多个分屏会话里跑程序。

让代理配合 Tmux 的 help、send keys、capture pane 这几个命令，就能绕过交互界面去操控工具，跑多个代理时还能各自开会话互不打扰 <button class="pd-ts" data-t="26:09" data-who="Navinkumar" data-en="Meanwhile, you can start working, I mean, you'll continue working with the CLI that you have, but as a first hint, you know, it's a good idea to start using Tmux." aria-label="回原文"></button>。

第二个是 [[IPC 侧信道|IPC 侧信道]]。他把这个概念讲得很直白：就像给网站加一个接口——网站给人看视觉界面，接口给机器返回结构化数据。

命令行也一样：给人看交互菜单，给代理开一条专门的数据通道。

比如 `barista-brew --ask` 返回一段机器可读的输入格式，代理拿到就能直接填答案 <button class="pd-ts" data-t="30:10" data-who="Navinkumar" data-en="Read state send input as a data. So we have the barista brew hyphen hyphen agent. Now this is the command that will help you run" aria-label="回原文"></button>。

第三个是[[上下文注入|上下文注入]]。把环境信息直接喂给代理：

比如库存里燕麦奶只剩两加仑，就告诉代理该向用户确认用量、要不要换备选——这类动态场景在纯人类交互里不存在，正是代理的用武之地 <button class="pd-ts" data-t="32:22" data-who="Navinkumar" data-en="So this is where we call this as context injection comes in play. You provide context in such a way that, let me take an example. You are actually low on oatmeal." aria-label="回原文"></button>。

## 赢家的招数：让代理自己造工具

比赛结果是两位赢家。

Bonk 用基于 [[Claude Agent SDK|Claude Agent SDK]] 的代理，先让代理复用已有的评测技能，自动造出了一个[[确定性|确定性]]的命令行求解器，再放在 Tmux 里反复轰炸接口，最快一次响应只要约 29 毫秒 <button class="pd-ts" data-t="47:31" data-who="Bonk" data-en="Sorry, I should have asked for another microphone for the room for questions. Yeah, so Bonk is just an agent thing built on top of Claude Agent SDK. It built the whole thing." aria-label="回原文"></button>。

另一位 Danny 自称完全不会写代码，只是个氛围编程者：

在 VS Code 里开着 Claude Code，把问题描述丢给它，让它自己修，修到 49.98 分，再让它复制一份想办法冲 49.99 分 <button class="pd-ts" data-t="49:16" data-who="Danny" data-en="Yeah, how'd you build it? Yeah, so I don't know anything about coding at all. I'm using, I'm basically a vibe coder, and I have a couple agents, and I just said, hey, here's the problem, read it, and then fix it and fix it, so I just have, yeah, Claude Code up on VSC." aria-label="回原文"></button>。这场面本身就说明了很多。

## 命令行工具该给谁设计

Mark 对确定性那段点评值得记住：

如果命令行工具是给大模型用的，**那它就该是确定性的**——大模型已经是不确定的那一方了，工具应该是一把小而锋利的刀，每次同样输入都给同样输出。

别在工具里再造一个代理，然后把工具交给另一个代理，那样没人知道会发生什么 <button class="pd-ts" data-t="41:55" data-who="Mark" data-en="I actually like the idea of the determinism in the CLI. And the reason is that if the CLI is a tool to be used by an LLM, then you absolutely want it to be deterministic." aria-label="回原文"></button>。

> 【背景】Claude Code 和 Codex 是让 AI 代理直接操作命令行完成编程任务的产品；Haiku 和 Sonnet 是 Anthropic 的两个较便宜、较快的模型档位。

## 本集带走

- 交互式命令行对 AI 代理会沉默失败：代理看到的是屏幕重绘，不是问题，且无任何报错。
- 加参数解决不了动态流程；代理和自动化脚本不同，它能走决策树——前提是你给它一棵。
- 把代理适配视为无障碍设计的延伸：同一套纪律，换一位新读者。
- 三个起点：让代理用 Tmux 操控会话、给代理开机器可读的侧信道、用上下文注入喂环境信息。
- 给代理用的工具应该是确定性的小工具；不确定性的部分交给大模型本身。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">如果你试图创建能预测所有可能流程的 flag，flag 就会成倍增加。</span>  
> *Flags multiply if you try to create flags that predict all the possible flows.*  
> <span class="qm">—— Mark Lummus · [03:19]</span> ^q1

> <span class="qz">我们如何能保留护栏和指引，同时不再假装智能体和人类拥有相同的能力？</span>  
> *How might we keep the guardrails and the guidance and stop pretending that agents and humans have the same abilities?*  
> <span class="qm">—— Mark Lummus · [06:23]</span> ^q2

> <span class="qz">现在 help 非常重要，因为当今世界的每一个 AI 智能体在开始使用某个命令之前都依赖 help 命令。</span>  
> *Now help is really important because every AI agent in today's world relies on the help command before it even starts using that command.*  
> <span class="qm">—— 嘉宾 · [26:25]</span> ^q3

> <span class="qz">同样的 prompt，换了一个大脑。</span>  
> *Same prompt with a different brain now.*  
> <span class="qm">—— 嘉宾 · [31:43]</span> ^q4

> <span class="qz">原因是，如果 CLI 是一个要被 LLM 使用的工具，那你绝对希望它是确定性的。</span>  
> *And the reason is that if the CLI is a tool to be used by an LLM, then you absolutely want it to be deterministic.*  
> <span class="qm">—— Mark Lummus · [41:55]</span> ^q5

> <span class="qz">所以你不会想在 CLI 里内置一个智能体，然后把这个 CLI 交给另一个智能体，因为你不知道会得到什么结果。</span>  
> *So you don't want to build an agent into the CLI and then hand that CLI off to another agent because you don't know what you're gonna get.*  
> <span class="qm">—— Mark Lummus · [42:30]</span> ^q6
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
