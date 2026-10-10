---
title: 用 Codex 做菜：从截图到自动化的六步烹饪法
podcast: 精选演讲
date: 2026-10-10
source_url: undefined
duration: "67:14"
type: episode
cover: "#64748b"
description: OpenAI 开发者体验团队的 Charlie 和 Gabriel 现场演示，如何用 Codex 四分钟做出 macOS 应用、跑通 15 小时长任务。
guests: ["[[Charlie Guo]]", "[[Gabriel Chua]]"]
companies: ["[[OpenAI]]", "[[Codex]]"]
concepts: ["[[智能体]]", "[[子智能体]]", "[[线程交接]]", "[[上下文]]", "[[计算机使用]]", "[[压缩]]", "[[插件]]", "[[hooks]]", "[[自动化]]", "[[应用服务器]]", "[[goal]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-06-talks-cooking-with-codex-charlie-guo-gabriel-c#post","headline":"用 Codex 做菜：从截图到自动化的六步烹饪法","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-06-talks-cooking-with-codex-charlie-guo-gabriel-c","mainEntityOfPage":"https://talk.solomind.cc/2026-10-06-talks-cooking-with-codex-charlie-guo-gabriel-c","description":"OpenAI 开发者体验团队的 Charlie 和 Gabriel 现场演示，如何用 Codex 四分钟做出 macOS 应用、跑通 15 小时长任务。","datePublished":"2026-10-10","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Charlie Guo"},{"@type":"Person","name":"Gabriel Chua"},{"@type":"Organization","name":"OpenAI"},{"@type":"Organization","name":"Codex"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"子智能体 (subagent)"},{"@type":"Thing","name":"线程交接 (thread handoff)"},{"@type":"Thing","name":"上下文 (context)"},{"@type":"Thing","name":"计算机使用 (computer use)"},{"@type":"Thing","name":"压缩 (compaction)"},{"@type":"Thing","name":"插件 (plugins)"},{"@type":"Thing","name":"hooks"},{"@type":"Thing","name":"自动化 (automation)"},{"@type":"Thing","name":"应用服务器 (app server)"},{"@type":"Thing","name":"goal"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"用 Codex 做菜：从截图到自动化的六步烹饪法","item":"https://talk.solomind.cc/2026-10-06-talks-cooking-with-codex-charlie-guo-gabriel-c"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>用 Codex 做菜：从截图到自动化的六步烹饪法</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 用 Codex 做菜：从截图到自动化的六步烹饪法

<div class="pd-byl"><b>Charlie Guo</b> · OpenAI 开发者体验团队 · 2026-10-10</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-06-talks-cooking-with-codex-charlie-guo-gabriel-c.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">都已经是 2026 年了。我们不需要再去开发者平台点击 Create API Key，把它保存到某个地方，祈祷你真的把它保存到某处了。</div><div class="a">— Gabriel Chua <button class="pd-ts" data-t="12:09" data-who="Gabriel Chua" data-en="So it's 2026. We're not going to go to the developer platform and click Create API Key, save it somewhere, pray that you actually save it somewhere." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Charlie Guo]] · [[Gabriel Chua]]
>
> **公司** [[OpenAI]] · [[Codex]]
>
> **概念** [[智能体]] · [[子智能体]] · [[线程交接]] · [[上下文]] · [[计算机使用]] · [[压缩]] · [[插件]] · [[hooks]] · [[自动化]] · [[应用服务器]] · [[goal]]

这是一场名为 Cooking with [[Codex|Codex]] 的工作坊，两位来自 [[OpenAI|OpenAI]] 开发者体验团队的成员——Charlie 和从新加坡飞来的 Gabriel——把用 Codex 干活比作做菜。

他们一边讲，一边现场演示：让 Codex 操控浏览器下载文件、凌晨三点自己打开 Chrome 做测试、每半小时刷一遍 Slack 回复用户反馈。

整场内容可以归结为六步烹饪法。

## 大家都在用 Codex 做什么？

开场先晒了一波用户作品：有人一次会话跑出近 300 个子代理；有人用 Codex 给 Ableton 写合成器[[插件|插件]]；团队成员 Brent 让 Codex 直接驱动 Premiere 剪视频；

还有人拿它做可玩的游戏、造自动驾驶高尔夫球车。

使用场景也无处不在。有人在新干线上辗转于城市之间时切换想法，有人遛狗时刷任务。

因为 Codex 开源了[[应用服务器|应用服务器]]，一位叫 Daniel 的用户甚至把它装进了 3 台电子墨水屏设备。

## 第一步：把你的上下文喂给它

Gabriel 讲了个真实的例子。周五下午，团队还没有工作坊的演示点子，在 Slack 上讨论后决定做一个实时翻译应用。

他没写一行需求文档，只是双指按下命令键拍了张应用截图——这个功能像截图，但所有文字都嵌入其中——Slack 里整段头脑风暴的[[上下文|上下文]]就进了 Codex。

**四分零二秒后，一个他从未做过的 macOS 应用成型了**。他本人是数据科学家出身，完全不会 WebRTC 和 WebSocket。

上下文也不只是文字。记忆功能（默认关闭，可在设置里打开）能让 Codex 逐渐记住你的偏好，比如你习惯用 uv 管理 Python 包。

Pro 订阅用户还可以试试研究预览版的 Chronicle：你在看 GitHub 流水线时直接问为什么挂了，它知道你在看什么。

## 插件：把外部世界搬进厨房

插件是一个打包好的组合：技能（最佳实践）、应用（连接外部服务的配置）、以及提供工具的 MCP 服务器。

比如内置的 macOS 插件自带 AppKit 的使用最佳实践；OpenAI Developers 插件可以直接替你创建 API 密钥，不用再手动去平台复制粘贴。

Charlie 补充了一个习惯：每当他艰难地教会 Codex 一个工作流，就在对话结尾说把这个变成技能，下次直接调用，不必重来。

## 让 Codex 替你点鼠标

**很多企业软件没有 API，只有一堆按钮**。

Gabriel 演示了[[计算机使用|计算机操作]]：拍下仪表盘的应用截图，让 Codex 下载指定日期范围的提交数据和拉取请求数据。

屏幕上出现了第二个光标，自己移动、自己下载——他的手根本没碰键盘。更妙的是，macOS 上它不抢你的光标，你可以继续刷别的网页。

计算机操作有 3 种形态：完整的计算机操作适合没有程序接口的桌面软件；

Chrome 扩展最擅长借用你已登录的身份访问网站，绕开无头浏览器被验证码卡死的困境；

应用内浏览器则对本地网页应用的深度测试最友好，因为 Codex 能看得更深 <button class="pd-ts" data-t="26:33" data-who="Charlie" data-en="And it's kind of important to understand when you should reach for each one. The three that we currently have today are computer use, which you saw, the Chrome extension, which you also saw, and the in-app browser, which I think we did not demo." aria-label="回原文"></button>。

## 长任务的秘诀：目标、看板和线程协作

Gabriel 前一晚开了 4 个长任务做演示素材：

一个跑了 15 小时的现场问答网站（给 400 人的房间用，含管理员视图、参与者视图和舞台视图）、一个跑了约 7 小时的任务把研究生时代的 Julia 和 R 论文代码重写成带 Rust 后端的 Python 包、还有一个把开源表单构建器改造成内部工具。

他的做法是：

让 Codex 把目标写进 goals.markdown 文件、生成一个进度看板页面，不同里程碑自动触发代码审查和目标审计——**发现跑偏就提醒主线程**。

他甚至让远程线程指挥本地线程用 Chrome 做测试，凌晨 3 点他自己睡觉，Codex 自己完成了端到端验证。

被卡住怎么办？

有次 Codex 缺 Vercel 和 Convex 的认证权限，它标记了阻塞状态，Gabriel 醒来后通过侧线线程让它给出解决步骤——Convex 的部署密钥他拒绝贴进聊天框，Codex 便给了他一段可以安全设置密钥的命令。

## 提示词还需要工程吗？

Gabriel 的看法是：只要指令清晰就仍然重要，但**靠魔法咒语的时代过去了**。推理模型足够聪明，关键还是第一步——把上下文给清楚。

他台上那个讲究的提示词，本来就是他对着手机说了一通，再让 Codex 自己润色的。

Charlie 对 Goal 功能有个精妙的比喻：像许愿精灵——成功时无比神奇，失败时就像落入猴爪式陷阱：

它技术上做了你要的事，只是完全不是你期望的方式。所以成功标准要尽可能可验证 <button class="pd-ts" data-t="43:02" data-who="Charlie" data-en="Some examples of what people have said about compaction, to quote, did OpenAI basically solve compaction? I pretty much never had issue with 5.5 and Codex across ultra-long threads spanning many compactions." aria-label="回原文"></button>。有人用 Goal 跑了 40 小时，用原生 Swift 重写了 Doom。

## 子代理与线程交接怎么选？

两者都是分工手段，区别在于：

子代理适合你不在乎过程、只要结果的活，像分包商，模型自己决定何时委派，还能保持上下文隔离；

[[线程交接|线程交接]]适合你想全程旁观、在心里把两条线分开的场景。

Charlie 周末做游戏时就开了一个创意总监线程，再开美术、音乐、动画、机制的独立线程，并在 AGENTS.md 里规定：

完成后必须找创意总监签字才算完。

[[hooks|钩子]]则提供确定性的护栏：

在特定检查点运行固定脚本，比如每轮结束跑 Python 脚本整理仓库、检查是否误贴了 API 密钥、调用不在白名单里的工具前先拦截。

自主权越大、跑得越久，钩子越有用。

## 自动化：让 Codex 半夜自己上班

[[自动化|自动化]]的第一种是线程内的心跳：

比如用上周刚发布的 DigitalOcean 插件开通服务器，Codex 每 5 分钟检查一次是否就绪，就绪后自动给一个深度链接，点一下就配好 SSH。

第二种会开出新线程。Gabriel 现场建了一个：每半小时读一遍反馈频道的评论，分类为好评、缺陷和功能请求；

如果是缺陷或功能请求，就开出新工作树线程、修复、提拉取请求，然后请 Dom 审查——24 小时内不批准就持续提醒他。

把这些原语串起来，**就是你睡觉时运转的软件工厂**。

他甚至当场揭秘：进场时他就设了一个每 5 分钟截屏一次的自动化，让 Codex 自己评估这场 60 分钟的工作坊会不会超时。结论是：会超。

## 把 Codex 装进你自己的产品

最后一步是应用服务器协议。它是 Codex 应用、命令行工具和 VS Code 扩展的底层协议，开源。

你可以把它嵌进自己的产品，让用户用自己的 ChatGPT 订阅和额度来驱动你的产品，压缩、转向等核心能力都在——**只有依赖本地计算机的功能（如计算机操作）除外**。

Charlie 昨晚让 Codex 跑了一个新任务：给自己做一个叫 Retrodex 的复古风界面，改推理强度时还有不同的闪烁效果。

## 本集带走

- 第一步永远是给上下文：应用截图、插件、记忆、口述，都能省掉重复解释
- 提示词不靠咒语，靠把可验证的成功标准写清楚，Goal 才不会变成猴爪
- 子代理适合不在乎过程的委派，线程交接适合想全程旁观的分工
- 长任务的关键是进度看板、里程碑审查、侧线线程沟通，以及被卡住时让它自己说清怎么解锁
- 心跳自动化加线程交接，可以拼出整夜运转的软件工厂

> 【背景】Codex 是 OpenAI 推出的编程代理，能自主执行多步骤开发任务；本集为 AI Engineer 世界博览会的现场工作坊。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">都已经是 2026 年了。我们不需要再去开发者平台点击 Create API Key，把它保存到某个地方，祈祷你真的把它保存到某处了。</span>  
> *So it's 2026. We're not going to go to the developer platform and click Create API Key, save it somewhere, pray that you actually save it somewhere.*  
> <span class="qm">—— Gabriel Chua · [12:09]</span> ^q1

> <span class="qz">当我聊到那次对话的结尾时，我常常会说，嘿，把这个做成一个技能，或者更好的是，把它做成一个插件，这样下次我需要做这件事时，你只需调用插件就能把活干完，不用再重走一遍整套流程。</span>  
> *And when I get to the end of that conversation, I will often say, hey, make this a skill, or even better, make this a plugin, so that next time I need to do this, you can just invoke the plugin and get the job done, and we don't have to step through all of this work again.*  
> <span class="qm">—— Charlie Guo · [12:59]</span> ^q2

> <span class="qz">对我来说，听写是一个被严重低估的功能，因为我们说话比打字快得多。</span>  
> *I think dictation to me is a really underutilized feature because we speak so much faster than we can type.*  
> <span class="qm">—— Charlie Guo · [17:59]</span> ^q3

> <span class="qz">但提示词工程是你觉得「哦，我必须用这句咒语」的那种东西。我不认为我们现在还处于那种状态。</span>  
> *But it's prompt engineering where you see, oh, I've got to use this magic phrase. I don't think we're in that state anymore.*  
> <span class="qm">—— Gabriel Chua · [30:31]</span> ^q4

> <span class="qz">而当它运转不好时，有时我觉得自己陷入了「猴爪」式的处境：它在技术上完成了我要求它做的事情，但完全不是我所期待的方式。</span>  
> *And when it doesn't, sometimes I feel like I've entered into a monkey's paw type situation where it has done the thing technically that I asked it to do, but very much not in the way that I was expecting.*  
> <span class="qm">—— Charlie Guo · [44:09]</span> ^q5

> <span class="qz">你正在给智能体更多的自主权。它会在没有你监督或抽象监督的情况下，工作得越来越久。</span>  
> *You're giving the agent more autonomy. It's going to work longer and longer without your supervision or abstracted supervision.*  
> <span class="qm">—— Gabriel Chua · [50:11]</span> ^q6

> <span class="qz">以及我们如何想办法构建那台构建机器的机器？</span>  
> *And how do we figure out how to build the machine that builds the machine?*  
> <span class="qm">—— Charlie Guo · [64:12]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-09-30-latent-devday-2026|OpenAI DevDay 双专访：计算机使用 180 度大变样]]<span class="pd-rz">同公司:Codex、OpenAI · 同概念:上下文压缩 (compaction)、智能体 (agent)、计算机操作 (computer use)</span>
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当写代码变便宜,OpenAI Codex负责人说「品味」成了最贵的资源]]<span class="pd-rz">同公司:Codex、OpenAI · 同概念:智能体 (agent)、计算机操作 (computer use)</span>
- [[2026-07-09-talks-the-golden-age-of-ai-engineering-alexand|OpenAI 开发者日：从结对编程到指挥智能体大军]]<span class="pd-rz">同公司:Codex、OpenAI · 同概念:上下文压缩 (compaction)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-15-talks-voice-agents-can-just-do-things-charlie|语音智能体不一定要说话:OpenAI 的三种语音交互模式]]<span class="pd-rz">同嘉宾:Charlie Guo · 同公司:OpenAI、Codex · 同概念:计算机操作 (computer use)</span>
- [[2026-08-13-talks-how-unify-cut-its-ai-agent-costs-95-in-t|9亿美元管道背后:Unify CTO 谈怎么把销售智能体的成本打下来]]<span class="pd-rz">同公司:OpenAI · 同概念:子智能体 (subagent)、智能体 (agent)</span>
- [[2026-08-30-lennys-ais-third-era-the-rise-of-persistent|OpenAI 产品负责人谈：AI时代怎么做产品、写文档、抬野心]]<span class="pd-rz">同公司:Codex、OpenAI · 同概念:智能体 (agent)</span>

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
