---
title: 当命令行的使用者变成人工智能助手
podcast: 精选演讲
date: 2026-10-14
source_url: undefined
duration: "18:00"
type: episode
cover: "#64748b"
description: Airbyte 工程师 Pedro 讲解如何为智能体设计 MCP 服务器和命令行工具，而不是为人。
guests: ["[[Pedro Lopez]]"]
companies: ["[[Airbyte]]"]
concepts: ["[[MCP]]", "[[CLI]]", "[[智能体]]", "[[上下文存储]]", "[[OAuth]]", "[[技能]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-09-talks-designing-clis-for-agents-not-humans-ped#post","headline":"当命令行的使用者变成人工智能助手","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-09-talks-designing-clis-for-agents-not-humans-ped","mainEntityOfPage":"https://talk.solomind.cc/2026-10-09-talks-designing-clis-for-agents-not-humans-ped","description":"Airbyte 工程师 Pedro 讲解如何为智能体设计 MCP 服务器和命令行工具，而不是为人。","datePublished":"2026-10-14","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Pedro Lopez"},{"@type":"Organization","name":"Airbyte"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"CLI"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"上下文存储 (context store)"},{"@type":"Thing","name":"OAuth"},{"@type":"Thing","name":"技能 (skills)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"当命令行的使用者变成人工智能助手","item":"https://talk.solomind.cc/2026-10-09-talks-designing-clis-for-agents-not-humans-ped"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当命令行的使用者变成人工智能助手</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 当命令行的使用者变成人工智能助手

<div class="pd-byl"><b>Pedro Lopez</b> · Airbyte 工程师 · 2026-10-14</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-09-talks-designing-clis-for-agents-not-humans-ped.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">所以 MCP 和 CLI，我们构建它们的方式是，它们是接入我们平台的薄而统一的接口，而不是平台的重实现。</div><div class="a">— Pedro Lopez <button class="pd-ts" data-t="03:04" data-who="Pedro Lopez" data-en="So the MCP and the CLI, the way that we've structured things is that they are thin, unified interfaces into our platform, not re-implementations of the platform." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Pedro Lopez]]
>
> **公司** [[Airbyte]]
>
> **概念** [[MCP]] · [[CLI]] · [[智能体]] · [[上下文存储]] · [[OAuth]] · [[技能]]

[[Airbyte|Airbyte]] 是一家做数据搬运起家的公司：把 Zendesk、Stripe、GitHub 这些工具里的数据，接到你的分析流程里。

现在他们往前走了一步，把这些数据做成一个[[上下文存储|上下文存储]]，供人工智能[[智能体|智能体]]查询和调用。

工程师 Pedro 在这场演讲里分享的，是他们为智能体提供两套入口——[[MCP|MCP]] 和命令行工具——时踩过的坑。

## 智能体需要哪三种能力？

Pedro 说，不管什么接口，都要覆盖三件事 <button class="pd-ts" data-t="01:48" data-who="嘉宾" data-en="And so we have a couple of different interfaces by which you can access this context store. One is our SDK, which is more usable if you are building your own agents and your tools." aria-label="回原文"></button>。

第一，管理产品里的核心资源，比如组织、工作区、连接器。

第二，也是最要紧的：安全地授权第三方服务，但不能把你的账号密码暴露给智能体。

第三，能查、能写、能动手——既要搜索数据，也要能对那些系统执行操作。

他们的原则是：这两套接口都做薄，只是平台的统一入口，不在外面重新实现一遍平台。

平台每天部署 10 次以上，接口必须跟着随时更新，靠 OpenAPI 规格说明作为唯一事实来源 <button class="pd-ts" data-t="03:30" data-who="嘉宾" data-en="And everything kind of sits on top of our shared platform and APIs. And because we deploy a lot, our platform changes like over 10 times a day, we want to keep these things up to date as we go." aria-label="回原文"></button>。

## MCP：给不想碰代码的人用

MCP（模型上下文协议）是让 ChatGPT、Claude 这类智能体直接调用外部工具的标准方式。

对普通用户来说它足够友好：在应用商店点一下安装，或者贴一个网址就能连上。

演示里，Pedro 问了两个问题：「我有哪些连接器？」以及「==找出 5 个有 Zendesk 工单的付费客户==」。

智能体自动去上下文存储里查，把 Zendesk 的工单数据和 Stripe 的付费数据交叉比对，给出了答案。

经验教训有 3 条。一是工具数量要少：连接器再多，也只暴露描述和执行两个工具，靠逐步发现来展开能力，别把上下文塞爆 <button class="pd-ts" data-t="05:49" data-who="嘉宾" data-en="So let's go into kind of some lessons learned while building this MCP and things that you might want to keep in mind if you're doing something similar. So one thing that we decided to do after a trial and error is to keep the tool count small." aria-label="回原文"></button>。

二是认证要走 [[OAuth|OAuth]]：协议和主流客户端都押注在 OAuth 上，想用其他令牌方式会处处碰壁。

而且用户期待 MCP 像手机应用一样，登录一次长期可用，而不是像网页那样反复登录 <button class="pd-ts" data-t="07:55" data-who="嘉宾" data-en="So that is very important. And two, users actually expect to have long-lived sessions through these MTP servers, unlike a web app where you might be OK with having to sign in again a couple of times." aria-label="回原文"></button>。

三是一条反面经验：协议里的 elicitation 机制（服务器主动向用户要信息）看上去正合适，但各家客户端支持程度参差不齐。

Claude Desktop 就直接告诉他不支持 URL 模式。最后他们只好自己实现授权链接，绕开协议 <button class="pd-ts" data-t="10:04" data-who="嘉宾" data-en="So this is an example from Claude Desktop where it just is telling me, hey, I don't support URL mode elicitation. I can't do that. And so we have to go back to doing our own thing and not using the spec for that kind of thing." aria-label="回原文"></button>。

Pedro 的总结是：MCP 有规范是一回事，客户端实际支持什么，是另一回事。

## 命令行工具：换一套设计思路

命令行工具面向技术用户，但真正的使用者往往是智能体本身。

Pedro 的核心观点是：要为智能体设计命令行，**很多对人类友好的设计，恰恰是智能体的障碍** <button class="pd-ts" data-t="11:18" data-who="嘉宾" data-en="So on the design side for CLIs, I think one important thing to keep in mind is to design those CLIs with agents in mind. Some of the things that might be helpful for users when you're making a CLI are going to be like blockers for agents." aria-label="回原文"></button>。

第一，输入输出都用 JSON。人类喜欢一堆旗标参数，但智能体更擅长直接构造 JSON，出错更少。

输出也是 JSON 的好处在于，可以用管道把结果交给 JQ 这类工具去筛选、裁剪——这正是命令行的传统强项 <button class="pd-ts" data-t="11:29" data-who="嘉宾" data-en="And we'll get into that a little bit more. The first design decision here that we made was take JSON in and return JSON out. For humans, it's very nice to specify a bunch of flags to work with CLIs, but when it comes to these more complicated" aria-label="回原文"></button>。

第二，命名要前后一致。命令用名词加动词的结构，比如 connectors list、connectors create，那 workspace 也必须是 workspace list。这样智能体不用翻文档就知道该怎么做。

还有个反直觉的建议：

如果发现智能体反复调错同一个命令，别怪它笨，把它的错误用法变成正式命令——这说明你的设计不够直白 <button class="pd-ts" data-t="13:23" data-who="嘉宾" data-en="And it's easy for them to know the right way to do things without having to read a bunch of documentation. And another interesting fact here is if you see agents making the same mistake over and over, calling the wrong command a bunch of times, consider making that your contract." aria-label="回原文"></button>。

第三，技能（[[技能|skills]]）要随命令行一起发布。智能体怎么知道这台机器上装了你的工具？靠技能描述来发现。

但也别把说明全塞进技能里，拆成多个参考文件，让智能体按需加载。

第四，绝对不能有交互式提问。传统命令行经常停下来等你输入确认，智能体会直接卡死在那里。

所有配置都得走环境变量、配置文件，提前准备好 <button class="pd-ts" data-t="15:39" data-who="嘉宾" data-en="You have to expose things either through flags or, in the case of credentials, environment variables and config files so that things can be set up out of band and you don't have to wait for that whenever you're invoking the CLI." aria-label="回原文"></button>。

## 那到底选哪个？

Pedro 的答案：**各有各的位置** <button class="pd-ts" data-t="17:13" data-who="嘉宾" data-en="And so really, I think both have their place. I think MCPs are great for those non-technical users, be able to quickly prototype things, build one-off reports, and even leverage that MCP ecosystem to have things talk to each other." aria-label="回原文"></button>。

MCP 适合非技术用户，快速做原型、跑一次性报表，生态里各个工具还能互相打通。

但限制也实在：Claude 对服务器和工具描述有 2KB 的大小限制，工具运行时长也有限，长时间任务不好做。

命令行没有这些限制，反而危险——没有上限时，智能体可能陷入循环一直空转。

另外命令行需要考虑版本管理，不像托管的 MCP 服务器永远是最新的。

一句话：临时的事交给 MCP，长任务、超长输出、要用管道和文件的地方，交给命令行。

## 本集带走

- 接口要做薄，都压在共享平台和 OpenAPI 规格之上，才能跟得上每天 10 次以上的部署节奏。
- MCP 的规范和客户端的实际支持是两回事， elicitation 这类新特性落地前别指望它。
- 为智能体设计命令行：JSON 进出、命名严格一致、绝不交互提问。
- 智能体反复犯同一个错，说明的是你的接口设计有问题，改接口比改智能体容易。
- MCP 与命令行各有定位：前者快速易装，后者擅长长任务和 Unix 管道。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">所以 MCP 和 CLI，我们构建它们的方式是，它们是接入我们平台的薄而统一的接口，而不是平台的重实现。</span>  
> *So the MCP and the CLI, the way that we've structured things is that they are thin, unified interfaces into our platform, not re-implementations of the platform.*  
> <span class="qm">—— Pedro Lopez · [03:04]</span> ^q1

> <span class="qz">但我们发现，真正有效的是把它保持得很窄，用渐进式发现来了解连接器可用的所有能力，并真正限制你塞进去的上下文数量。</span>  
> *But instead what we found is really keeping it narrow, using progressive discovery of all of the capabilities that the connector has available and really limiting the amount of context that you shove into*  
> <span class="qm">—— Pedro Lopez · [06:30]</span> ^q2

> <span class="qz">技术上讲，你可以通过 MCP 使用其他认证机制，但如果你用 bearer auth 或类似的东西，你会非常难受，因为规范非常偏重 OAuth，而且所有的客户端，至少是主流的那些，都非常倾向于把 OAuth 作为安装该连接器的更好用户体验。</span>  
> *And technically, you can use other authentication mechanisms through MCP, but you're really going to have a hard time if you do like bearer auth or anything like that, because the spec is really heavy on OAuth, and all of the clients, the main ones at least, are really leaning towards the OAuth as a better UX for installing that connector.*  
> <span class="qm">—— Pedro Lopez · [07:15]</span> ^q3

> <span class="qz">当你制作一个 CLI 时，一些可能对用户有帮助的东西，反而会成为智能体的阻碍。</span>  
> *Some of the things that might be helpful for users when you're making a CLI are going to be like blockers for agents.*  
> <span class="qm">—— Pedro Lopez · [11:18]</span> ^q4

> <span class="qz">这里另一个有趣的事实是，如果你看到智能体一遍又一遍地犯同样的错误，多次调用错误的命令，考虑把那个（错误的）用法变成你的契约。</span>  
> *And another interesting fact here is if you see agents making the same mistake over and over, calling the wrong command a bunch of times, consider making that your contract.*  
> <span class="qm">—— Pedro Lopez · [13:23]</span> ^q5

> <span class="qz">让智能体能够极其简单地撞见正确的使用方式。</span>  
> *Make it dead simple for agents to stumble across the right way to use things.*  
> <span class="qm">—— Pedro Lopez · [13:33]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-11-ainativedev-the-background-check-you-can-39-t-run-on|给 AI 智能体做“背景调查”：为什么身份是智能体安全的第一道坎]]<span class="pd-rz">同概念:CLI、MCP、OAuth、智能体 (agent)</span>
- [[2026-07-13-pg-the-complete-claude-stack-for-pms|产品经理驾驭 Claude 生态：用五层架构打造专属 AI 幕僚长]]<span class="pd-rz">同概念:MCP、skills、智能体 (agent)</span>
- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:MCP、skills、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|SaaS 不会死,PM 迎来黄金期:Dan Shipper 的 AI 工作预测]]<span class="pd-rz">同概念:CLI、智能体 (agent)</span>
- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>
- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>

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
