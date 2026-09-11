---
title: 把网站装进 ChatGPT：Indeed 的 MCP Apps 实战三条铁律
podcast: 精选演讲
date: 2026-09-11
source_url: undefined
duration: "15:25"
type: episode
cover: "#64748b"
description: Indeed 的 AI 平台工程师 Dustin Mahalik 分享为 Claude、ChatGPT 构建 MCP Apps 的实战经验：先给模型数据，再谈 UI。
guests: ["[[Dustin Mihalik]]"]
companies: ["[[Indeed]]"]
concepts: ["[[MCP Apps]]", "[[MCP]]", "[[CareerScout]]", "[[Claude]]", "[[ChatGPT]]", "[[结构化内容]]", "[[update model context]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-09-talks-mcp-apps-give-the-model-data-give-the-us#post","headline":"把网站装进 ChatGPT：Indeed 的 MCP Apps 实战三条铁律","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-09-talks-mcp-apps-give-the-model-data-give-the-us","mainEntityOfPage":"https://talk.solomind.cc/2026-09-09-talks-mcp-apps-give-the-model-data-give-the-us","description":"Indeed 的 AI 平台工程师 Dustin Mahalik 分享为 Claude、ChatGPT 构建 MCP Apps 的实战经验：先给模型数据，再谈 UI。","datePublished":"2026-09-11","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Dustin Mihalik"},{"@type":"Organization","name":"Indeed"},{"@type":"Thing","name":"MCP Apps"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"CareerScout"},{"@type":"Thing","name":"Claude"},{"@type":"Thing","name":"ChatGPT"},{"@type":"Thing","name":"结构化内容 (structured content)"},{"@type":"Thing","name":"update model context"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"把网站装进 ChatGPT：Indeed 的 MCP Apps 实战三条铁律","item":"https://talk.solomind.cc/2026-09-09-talks-mcp-apps-give-the-model-data-give-the-us"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把网站装进 ChatGPT：Indeed 的 MCP Apps 实战三条铁律</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 把网站装进 ChatGPT：Indeed 的 MCP Apps 实战三条铁律

<div class="pd-byl"><b>Dustin Mihalik</b> · Indeed 的 AI 平台工程师 · 2026-09-11</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-09-talks-mcp-apps-give-the-model-data-give-the-us.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">除非你自己试过，否则你会惊讶：要让 Claude 或 ChatGPT 输出链接真的很难，因为它们不想让你离开它们的环境。</div><div class="a">— Dustin Mihalik <button class="pd-ts" data-t="02:02" data-who="Dustin Mihalik" data-en="you'd actually be surprised, unless you've tried to do this yourself, that it's really hard to get Claude or ChatGPT to link to things, because they don't want you to leave their environment." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Dustin Mihalik]]
>
> **公司** [[Indeed]]
>
> **概念** [[MCP Apps]] · [[MCP]] · [[CareerScout]] · [[Claude]] · [[ChatGPT]] · [[结构化内容]] · [[update model context]]

把自家网站塞进 [[ChatGPT|ChatGPT]] 或 [[Claude|Claude]] 的聊天窗口里，听起来像拖拽一下就完事——[[Indeed|Indeed]]（全球排名第一的求职网站）做 AI 平台的 Dustin Mahalik 告诉你：不是。他和团队在为 Claude、ChatGPT 和自家求职智能体 [[CareerScout|CareerScout]] 构建 [[MCP Apps|MCP Apps]]（让第三方应用以 UI 组件形式嵌入聊天界面的规范）时踩过一堆坑，总结出几条铁律 <button class="pd-ts" data-t="00:48" data-who="Dustin Mahalik" data-en="Occasionally my team gets cool projects to work on because we have relationships with the vendors. MCP Apps is one of those and MCP Connectors. So this is a little bit of like practical MCP Apps." aria-label="回原文"></button>。

## 第一个坑：聊天窗口容不下「品牌」

最基本的文本版 [[MCP|MCP]] 调用效果其实不错——搜「Austin 的咖啡师」，Claude 能给出像样的职位列表。但问题很明显：没有 Indeed 的品牌、没有申请按钮、没有详情页，Claude 只是说「这些是 Austin 的一些工作」<button class="pd-ts" data-t="01:36" data-who="Dustin Mahalik" data-en="So this is a job search which is basically, you know, I'm looking for a barista in Austin, and this is a text-based response. And this works pretty well. As we kind of discussed, there's no branding here." aria-label="回原文"></button>。

更反直觉的是：**要让 Claude 或 ChatGPT 输出链接非常难**，因为它们不想让用户离开自己的环境。这说得通，但结果是「这是互联网上某处的五份工作，没有链接」——糟糕的用户体验。

他们花了「荒谬的小时数」跑 evals（评估测试）才让 Claude 稳定地带链接。有了 MCP Apps 和 apps SDK，这些就能自己控制了：申请按钮、置顶要突出的内容、点「查看详情」弹出职位信息的弹窗，用户不用离开聊天环境，对双方都是双赢 <button class="pd-ts" data-t="02:02" data-who="Dustin Mahalik" data-en="How we can control things. And you'd actually be surprised, unless you've tried to do this yourself, that it's really hard to get Claude or ChatGPT to link to things, because they don't want you to leave their environment." aria-label="回原文"></button>。

## 铁律一：给用户看的，也要给模型看

最朴素的接法是：继续调用现有 API 加载数据，把界面塞进聊天框。这会让 UI 变成模型的黑盒——模型调用了一个工具，工具展示了些东西，但**模型完全不知道展示的是什么**。用户追问「讲讲第一个结果」或「给这些公司排名」时，模型一脸懵 <button class="pd-ts" data-t="03:32" data-who="Dustin Mahalik" data-en="You really wanna think about how you are representing the data, how you're making it available to the user. So if you do a very naive thing, which is you still call your existing APIs for loading data, then it basically becomes a black box to the model, right?" aria-label="回原文"></button>。

所以第一条规则：**任何展示给用户的内容，也必须作为数据提供给模型**。他见过不少 MCP Apps 只是往页面注入 HTML 再调 API，结果就是给模型造了个大黑盒。具体做法靠 MCP 规范里的[[结构化内容|结构化内容]]（structured content，做纯文本 MCP 时本来就会返回的那部分）加资源 URI（指向 HTML 所在位置），两者都要返回、且必须保持同步——API 加了新字段，给模型的数据也要跟着加 <button class="pd-ts" data-t="04:08" data-who="Dustin Mahalik" data-en="The model has no idea what data is being displayed. So the very first rule for me building MCP apps, anything that you show to the user also needs to be provided as data to the model." aria-label="回原文"></button>。

## 铁律二：用户的每次交互，也要告诉模型

做到第一条还不够。模型拿到了数据，但仍会像平时那样用文字把内容复述一遍，和你的 UI 重复。

解法是更新工具描述，开头写一句「结果已作为 UI 组件自动展示给用户」——就这么简单一句，就能覆盖相当多的情况，让模型只给个简短摘要，而不是整套文字版展示。当然，UI 里显示什么、模型显示什么之间总有点拉锯，只能靠描述去引导 <button class="pd-ts" data-t="05:30" data-who="Dustin Mahalik" data-en="So you end up with like here's your display and then here's the model doing basically the same thing that it would normally do. So what you need to do is you need to update your description in order to tell it that you're gonna be displaying stuff in your MCP app." aria-label="回原文"></button>。

紧接着的坑是可交互部件：用户点了「查看详情」弹出大段职位描述，或者从返回的 10 个职位里点了某一个——模型照样不知道你在看什么，「给这个职位写封求职信」这种请求就无从下手 <button class="pd-ts" data-t="06:25" data-who="Dustin Mahalik" data-en="So that's one of the next things that you're gonna want to do once you're providing both data and API access. The next thing is there's these interactable pieces, right?" aria-label="回原文"></button>。

解法是 MCP Apps 规范里的 [[update model context|update model context]] 方法：把用户交互信息以字符串形式传给模型。它只支持单个字符串，要追踪多个事件就得往里追加。官方文档的购物车例子就是这么做：把总价和所有商品写进去，用户才能问「我购物车里有什么」<button class="pd-ts" data-t="07:25" data-who="Dustin Mahalik" data-en="And once again, MCP app spec has a pretty easy way to handle it. There's this update model context method, which lets you pass in a string that is, so for MCP apps, there's a single string." aria-label="回原文"></button>。

## 铁律三（优先级最高）：数据处理与 UI 渲染分离

做到前两条，模型「看得见」了，但还有个致命问题。他举了个硬核搜索的例子：找某职位、愿搬去多个城市、只看薪资最高的、排除某些行业——这类任务文本版 MCP 表现极好，Claude 会做十几次搜索、过滤、汇总成一张漂亮的表格。但一旦声明「结果会显示在 UI 里」，Claude 就只调用一次工具，心想「结果已经展示了」，不再深挖——用户不想要 10 个轮播组件，Claude 也注意到已经展示过，就不肯再调了 <button class="pd-ts" data-t="08:33" data-who="Dustin Mahalik" data-en="The thing that I usually do, I don't give Claude my easy problems to solve. I give Claude my really hard problems to solve. If I just wanted to do one search, I would go to the web and do one search." aria-label="回原文"></button>。

所以规则三，**优先于其他所有规则**：把数据处理和 UI 渲染分开（这个措辞他直接从 OpenAI Apps SDK 文档里「偷」来的）。具体做法：职位搜索做成纯文本 MCP，Claude 想调多少次调多少次；另做一个渲染工具（render jobs widget），接受一列职位 ID。

Claude 可以搜出 100 个职位、过滤到 5 个，再只把这 5 个交给渲染。工具描述里写明「必须始终先调用搜索工具之一拿到数据再渲染」即可 <button class="pd-ts" data-t="10:06" data-who="Dustin Mahalik" data-en="to show 10 different carousels. And so what you really want to do, and this is rule three, this supersedes all the other rules, which is basically you want to separate your data processing from your UI rendering." aria-label="回原文"></button>。

这套「探索数据 → 选择渲染」的拆分思路几乎能套进任何行业：电商的应用场景、地图（先找出五个地址再传入渲染）等等 <button class="pd-ts" data-t="12:25" data-who="Dustin Mahalik" data-en="Like, I want the model to be able to explore this data, and then I want it to turn around and choose to be able to render it, right? Like, there's examples of, you know," aria-label="回原文"></button>。

## 渲染工具还能让模型发挥创造力

文本版交互里模型常会说「我选这个是因为……

」，这可以搬进 UI：给渲染工具加个参数，让模型传入 ID 外加一个「为什么这是好匹配」的理由，或者让它高亮职位描述里最值得看的一段。渲染工具设计得越有想象力，模型能注入的个性就越多，用户体验就越好 <button class="pd-ts" data-t="12:41" data-who="Dustin Mahalik" data-en="If you've got a map, maybe you want to come up with five different addresses and then you pass in addresses. The other thing that you can do is you can let the model be a lot more creative." aria-label="回原文"></button>。

## 总原则：数据先行，UI 是副作用

关键要点听起来和直觉相反：构建 MCP Apps 时，**先想数据、再想 UI**。不是「我怎么把 UI 塞进 ChatGPT」，而是「我想给模型什么数据、想让它能对这些数据做什么」——渲染只是模型探索数据的副产品 <button class="pd-ts" data-t="13:34" data-who="Dustin Mahalik" data-en="So you can get really creative with your render tools to be able to give some extra character that the model can inject into those so that you've got a much better experience for the user." aria-label="回原文"></button>。

工具设计上走「小而可组合」路线：两三种搜索方式就做两三个搜索工具，渲染工具也可以拆成一个渲染职位列表、一个高亮单个职位。描述保持简单以免模型过载，但给了模型自由探索、自由组合的灵活性 <button class="pd-ts" data-t="14:15" data-who="Dustin Mahalik" data-en="You look at and see what data do I want to give to the model, what data do I want it to be able to do, and then rendering is a side effect of that, or it's a result of the model exploring the data." aria-label="回原文"></button>。

## 本集带走

- **别只调老 API 塞 UI**：模型看不到你的界面就是黑盒，追问必翻车。展示给用户的每个数据，都要同步给模型（结构化内容 + 资源 URI，且保持同步）。
- **用工具描述划清分工**：写明「结果已作为 UI 自动展示」，模型就不会再用文字复述一遍。
- **交互状态也要上报**：用户点了哪条、弹窗里是什么，用 update model context 传给模型——它只收一个字符串，多事件靠追加。
- **数据和渲染必须拆开**：搜索工具纯文本、随便多调；渲染工具只收 ID。否则模型调一次就收工，不再深挖。
- **先数据后 UI**：想清楚给模型什么数据、让它能做什么，渲染是探索的副产品。
- **小工具 + 简单描述**：多个窄搜索工具配一两个渲染工具，给模型组合自由，又不让它过载。
- **让渲染工具有个性**：让模型传入推荐理由或高亮段落，UI 体验立刻上一档。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">除非你自己试过，否则你会惊讶：要让 Claude 或 ChatGPT 输出链接真的很难，因为它们不想让你离开它们的环境。</span>  
> *you'd actually be surprised, unless you've tried to do this yourself, that it's really hard to get Claude or ChatGPT to link to things, because they don't want you to leave their environment.*  
> <span class="qm">—— Dustin Mihalik · [02:02]</span> ^q1

> <span class="qz">任何你展示给用户的东西，也需要作为数据提供给模型。</span>  
> *anything that you show to the user also needs to be provided as data to the model.*  
> <span class="qm">—— Dustin Mihalik · [04:13]</span> ^q2

> <span class="qz">我不会把简单的问题丢给 Claude 去解决，我把真正难的问题丢给 Claude 去解决。</span>  
> *I don't give Claude my easy problems to solve. I give Claude my really hard problems to solve.*  
> <span class="qm">—— Dustin Mihalik · [08:26]</span> ^q3

> <span class="qz">你要在关注 UI 之前先关注数据</span>  
> *you want to focus on the data before you focus on the UI*  
> <span class="qm">—— Dustin Mihalik · [13:39]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-10-talks-generative-ui-in-python-jeremiah-lowin-p|把互联网装进智能体：FastMCP 作者用 Python 造 UI 的古怪实验]]<span class="pd-rz">同概念:MCP、MCP Apps、Claude</span>
- [[2026-07-13-pg-the-complete-claude-stack-for-pms|产品经理驾驭 Claude 生态：用五层架构打造专属 AI 幕僚长]]<span class="pd-rz">同概念:Claude、MCP</span>
- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:Claude、MCP</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-22-aiandi-how-every-s-team-used-ai-to-ship-its-big|一封邮件睡出一万七千美金：Every 的 Builder Pack 内幕]]<span class="pd-rz">同概念:Claude、MCP</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:ChatGPT、Claude</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:ChatGPT、Claude</span>

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
