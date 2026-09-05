---
title: Cloudflare 三人聊：让模型直接写代码，别再堆工具了
podcast: Scaling DevTools
date: 2026-09-02
source_url: undefined
duration: "16:48"
type: episode
cover: "#64748b"
description: Cloudflare 的 Sunil Pai 和 Matt Carey 聊 code mode、MCP 和编码智能体的趋势：减少静态工具暴露，让模型自己写代码来调用一切。
host: "[[Sunil Pai]]"
guests: ["[[Thomas Ankcorn]]", "[[Matt Carey]]"]
companies: ["[[Cloudflare]]", "[[pie]]"]
concepts: ["[[code mode]]", "[[MCP]]", "[[智能体]]", "[[沙箱]]", "[[可观测性]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-05-27-devtools-cloudflare-devs#post","headline":"Cloudflare 三人聊：让模型直接写代码，别再堆工具了","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-05-27-devtools-cloudflare-devs","mainEntityOfPage":"https://talk.solomind.cc/2026-05-27-devtools-cloudflare-devs","description":"Cloudflare 的 Sunil Pai 和 Matt Carey 聊 code mode、MCP 和编码智能体的趋势：减少静态工具暴露，让模型自己写代码来调用一切。","datePublished":"2026-09-02","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Sunil Pai"},{"@type":"Person","name":"Thomas Ankcorn"},{"@type":"Person","name":"Matt Carey"},{"@type":"Organization","name":"Cloudflare"},{"@type":"Organization","name":"pie"},{"@type":"Thing","name":"code mode"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"可观测性 (observability)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Cloudflare 三人聊：让模型直接写代码，别再堆工具了","item":"https://talk.solomind.cc/2026-05-27-devtools-cloudflare-devs"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Cloudflare 三人聊：让模型直接写代码，别再堆工具了</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Cloudflare 三人聊：让模型直接写代码，别再堆工具了

<div class="pd-byl"><b>Sunil Pai</b> · Cloudflare · 2026-09-02</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-05-27-devtools-cloudflare-devs.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">过去三十年里，我们被告知永远不要执行一段随机代码。这意味着科技树的整个分支一直未被探索。</div><div class="a">— Matt Carey <button class="pd-ts" data-t="07:11" data-who="Matt Carey" data-en="For the last thirty years, we have been told to never evaluate a random code. Yeah. Which means there's this entire branch of the tech tree that's been, like, unexplored." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Thomas Ankcorn]] · [[Matt Carey]] · [[Sunil Pai]]
>
> **公司** [[Cloudflare]] · [[pie]]
>
> **概念** [[code mode]] · [[MCP]] · [[智能体]] · [[沙箱]] · [[可观测性]]

这集是 AI Engineers Europe 大会上的路边闲聊，主角是 [[Cloudflare|Cloudflare]] 的 [[Sunil Pai|Sunil Pai]] 和 [[Matt Carey|Matt Carey]]，两位都在做跟 AI 编程相关的基础设施——简单说就是让模型能安全地写代码、执行代码。

最颠覆的一个点：过去三十年，程序员被教导"永远不要执行一段随机代码"；但现在，让模型直接写代码然后跑起来，反而成了解锁下一代交互方式的关键。

## Code Mode：别堆工具，让模型写代码

所谓 [[code mode|code mode]]，核心思路就一句：不要给模型暴露一堆静态工具（读文件、写文件、调 API 各一个），而是只给一个"代码工具"，让模型自己写代码去完成所有操作 <button class="pd-ts" data-t="05:57" data-who="Sunil Pai" data-en="Yeah. Yeah. But that's also something about how you've been doing, like, code mode and the MCP's that, Matt, you felt of, like, that kind of simple interface. I guess, like, the idea of code mode is that we just let the model write code, and we try and reduce the amount of static tools that we expose to the model because everyone adds context normally in in each agent. And instead of that, we just expose normally that one code tool or, like, you can name it whatever you want. And just let the model write code against an API and external service, like, whatever you want. Just let the model write code." aria-label="回原文"></button>。

这个想法最早从一篇论文来的——当时模型写 Python 能力还很差，所以效果一般。但现在基础模型能力上来了，通过工具调用让模型写代码这条路变得非常可行 <button class="pd-ts" data-t="07:29" data-who="Sunil Pai" data-en="For the last thirty years, we have been told to never evaluate a random code. Yeah. Which means there's this entire branch of the tech tree that's been, like, unexplored. So this is, like, day one for, like, code mode, and we we suspect that there's no way that it remains a Cloudflare only thing. I suspect every provider is going to be this." aria-label="回原文"></button>。

Matt 认为这背后有一个更大的趋势：下一批十亿用户跟系统交互的方式，不是点 UI，也不是调 API，而是直接写代码。他举了个例子——有人给你 500 张婚礼照片让你加标题，程序员会写个脚本调视觉模型跑一遍，普通用户以前没这个能力，现在有了。

那这段代码在哪儿安全执行？这就是 code mode 要解决的问题 <button class="pd-ts" data-t="06:55" data-who="Matt Carey" data-en="100%. We were just talking about this, that the next billion, trillion users, they don't interact with you either via UI or even via tool calls. The things that they want to do is to write code against your system. The thing I was talking about in my talk that I said in my talk yesterday was, as programmers, this is already how we interact with computers. Like, the example I like giving is, somebody gives you 500 photos from a wedding, and says, can you just label this and give captions to all of it?" aria-label="回原文"></button>。

他判断这不会是 Cloudflare 独有的东西，每个云提供商最终都会做类似的事 <button class="pd-ts" data-t="07:29" data-who="Matt Carey" data-en="For the last thirty years, we have been told to never evaluate a random code. Yeah. Which means there's this entire branch of the tech tree that's been, like, unexplored. So this is, like, day one for, like, code mode, and we we suspect that there's no way that it remains a Cloudflare only thing. I suspect every provider is going to be this." aria-label="回原文"></button>。

## MCP + 持久沙箱：把你的家变成智能体的后端

Thomas 在会上兴奋地展示了另一个玩法：通过 [[MCP|MCP]]（一种让 AI 模型连接外部工具的协议），把家里的树莓派变成 Claude 的持久[[沙箱|沙箱]]——不是临时开个容器跑完就销毁，而是一台一直在线的、你真实的设备 <button class="pd-ts" data-t="03:05" data-who="Sunil Pai" data-en="And then the second thing is being able to, like, remote bash into your home lab and stick that behind MCP and play it in your Clord code is really powerful. Have a open source package for Barry that lets you do this secured by Cloudflare, but it's kind of use that as inspiration and, like, expose all your computers at home to Clord and, like, build things." aria-label="回原文"></button>。

Sunil 当场开玩笑说"要不要试试在上面跑个磁盘操作工具"，结果 Thomas 真试了，能用 <button class="pd-ts" data-t="03:25" data-who="Sunil Pai" data-en="He's like, oh, yeah. I was like, what what could it do that, like, quad code can't or whatever he said? No. No. No. But it's like, it's persistent. Like, I can just leave, go on to another machine, do everything, and it's like, it's still there. It's still there. And I was like, oh, we should we should we should test that. We should make a we should try and slot fork DD, the the disk library in should we just try slot fork that in in Zig and just, like, do that like, do something silly with that?" aria-label="回原文"></button>。Matt 还说他们正试图让这种编码[[智能体|智能体]]直接跑在 Cloudflare Worker 上，连容器都不需要 <button class="pd-ts" data-t="04:16" data-who="Matt Carey" data-en="Not to put the kettle on. Just when she wants to plug her laptop in. So I'm on top of my pie from the USB C connection. I'm like, no. So hopefully, that doesn't happen today when I'm showing people it." aria-label="回原文"></button>。

## 做可观测性的人悟到了什么

Thomas 在 Cloudflare 负责[[可观测性|可观测性]]（就是监控系统的状态和性能），他的日常工作要跨很多内部仓库改代码。他说现在用编码智能体提 PR 变得特别容易，困难的部分反而变成了"怎么让仓库维护者信任你、愿意合并你的 PR" <button class="pd-ts" data-t="08:20" data-who="Thomas Ankcorn" data-en="Yeah. So working on observability at Cloudflare is interesting. You get have to touch, like, a a ton of different repos at Cloudflare. You have to add things to work a d r runtime. You have to add things to our control planes." aria-label="回原文"></button>。

Matt 把这串起来：code mode 写代码、MCP 连外部服务、可观测性看结果——这三样拼在一起就是一个闭环，能实现自愈、自调整的基础设施，不用再担心谁半夜三点改错配置 <button class="pd-ts" data-t="10:30" data-who="Matt Carey" data-en="I love steak, bro. Okay. Amazing. And then just kind of tying it together, like, the MCVs with and code mode with observability, that's something that's like where there's, like, massive amounts of data and context and stuff. Like, is there something that you kind of think about together, and, like, are there any things that" aria-label="回原文"></button>。

## 别过度工程化，做蠢东西

三个人反复强调一件事：现在这个阶段，别过度设计。Sunil 说他在加入 Cloudflare 之前做的所有东西，都在"替模型补能力"，因为当时模型不够好，每过几个月就得推倒重来。现在模型基础能力够强了，应该尽量保持东西简单、可解释 <button class="pd-ts" data-t="13:54" data-who="Sunil Pai" data-en="You gave me that advice on a very specific question I had, like, yesterday. You were like, don't overengineer this. Just like, their models are gonna get better. You're gonna have to throw it away. And" aria-label="回原文"></button>。

Thomas 更直接：看到别人做了个很聪明的东西，别去复刻，去做一个更蠢的版本然后发出来——他自己就做了一个 Matt 的 MCP 服务器的"蠢版本"，很不安全但不该用，但就是能用 <button class="pd-ts" data-t="12:51" data-who="Thomas Ankcorn" data-en="I feel like there's lots of interesting stuff that's that you guys are working on or thinking about that a lot of others are not. Build dumb things. Yeah. If someone builds something and you go, wow. That's so smart. How could I build it?" aria-label="回原文"></button>。

Matt 想看到更多原创的、有勇气的消费级产品，而不是又一个 B2B SaaS <button class="pd-ts" data-t="14:19" data-who="Matt Carey" data-en="I I think pretty much everything I ever built before joining Cloudflare, I ever engineered for the models because they they just weren't good enough in that moment. It's very hard to build something and just, like, know that you're gonna finish it, and it's not gonna work. And that feels like a really weird moment. But I think now the foundation of models are so good that actually if it doesn't work, you should be trying to find a way to make it work while still keeping it as light as possible." aria-label="回原文"></button>。他自己的副业是个 AI 驱动的派对猜凶游戏，Sunil 则在会上看到一个用天花板摄像头追踪参会者、投影成《模拟人生》画面的演示，觉得酷毙了 <button class="pd-ts" data-t="15:14" data-who="Matt Carey" data-en="wanna see some more consumer stuff. Like, it is quite sad when you see someone, oh, and now we we built, like, b to b SaaS for dogs. It's like, please build something really cool." aria-label="回原文"></button><button class="pd-ts" data-t="15:30" data-who="Sunil Pai" data-en="Like, there there is so much wacky stuff around. Well, I gotta get you to try my whodunit party game. I I have an AI driven it's basically Clue, but with AI, and you you you have to find out who the murderer is. It's so fun. I'm having, like, a lot." aria-label="回原文"></button>。

> 【背景】MCP 全称 Model Context Protocol，是 Anthropic 推出的开放协议，让 AI 模型能标准化地连接外部工具和数据源。本集转写稿未展开解释该缩写。
> 【背景】"pie"和"Pis"均为转写稿对"Pi"的误写，Pi 是一个开源编码智能体工具，以终端界面（TUI）流畅、代码库极小著称。

## 本集带走

- **code mode 的核心是"少暴露工具，多让模型写代码"**：只给一个代码执行接口，让模型自己写代码去调 API、操作文件，比堆一堆专用工具更灵活。
- **持久沙箱比临时容器更有想象空间**：通过 MCP 把真实设备（比如家中的树莓派）暴露给编码智能体，它能持续存在、跨会话保持状态，能做临时沙箱做不到的事。
- **现在做 AI 项目，往简单了做**：模型每几个月就升级一代，过度工程化的东西很快就会被淘汰；保持轻量、可解释，反而活得更久。
- **可观测性 + code mode + MCP = 自愈基础设施的闭环**：模型写代码改配置、MCP 连接各种服务、可观测性验证结果，三者串起来就能自动发现和修复问题。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">过去三十年里，我们被告知永远不要执行一段随机代码。这意味着科技树的整个分支一直未被探索。</span>  
> *For the last thirty years, we have been told to never evaluate a random code. Yeah. Which means there's this entire branch of the tech tree that's been, like, unexplored.*  
> <span class="qm">—— Matt Carey · [07:11]</span> ^q1

> <span class="qz">现在你可以轻松地说，嘿，给这个仓库提个 PR 做 x、y 和 z，容易到困难的部分变成了被信任去为这些仓库做贡献。</span>  
> *now the ability to go, like, hey. Make a PRT this repo doing x, y, and zed is so easy that then the hard part has become being trusted to contribute to these repos*  
> <span class="qm">—— Thomas Ankcorn · [08:28]</span> ^q2

> <span class="qz">Cloudflare 在大规模上做很多事情，但我们现在必须忍受我们自己的规模反作用于我们。就像行星计算机将开始攻击自己。</span>  
> *Cloudflare does a lot of things at scale, but we now have to tolerate our own scale back at us. It's like the planetary computer is going to start attacking itself.*  
> <span class="qm">—— Matt Carey · [10:48]</span> ^q3

> <span class="qz">让我担心的是，拥有数亿美元的 AI 研究人员正在新西兰买房。好像有什么末日要来，他们正往地球最边缘跑。</span>  
> *it's worrying me that AI researchers with hundreds of millions of dollars are buying houses in New Zealand. Like, there's some an apocalypse coming, and they were going to the farthest edge of the planet.*  
> <span class="qm">—— Matt Carey · [14:44]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-06-16-devtools-swyx-aie|AI Engineer 大会背后的社区逻辑与创业生存法则]]<span class="pd-rz">同公司:Cloudflare · 同概念:code mode、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-14-thepeel-re-founding-a-company-for-the-ai-era--sh|Merge的"二次创业"：从SaaS集成到AI连接基础设施]]<span class="pd-rz">同概念:MCP、智能体 (agent)、沙箱 (sandbox)、可观测性 (observability)</span>
- [[2026-06-11-practicalai-zero-trust-for-ai-agents|Anthropic 零信任框架：智能体安全的六层防御]]<span class="pd-rz">同概念:MCP、可观测性 (observability)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同公司:Claude · 同概念:MCP、智能体 (agent)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
