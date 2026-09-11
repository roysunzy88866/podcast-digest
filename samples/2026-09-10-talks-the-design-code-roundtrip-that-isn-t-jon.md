---
title: 设计-代码往返并不存在：一位 30 年老兵的实测与漂移警告
podcast: 精选演讲
date: 2026-09-12
source_url: undefined
duration: "18:34"
type: episode
cover: "#64748b"
description: ReWeaver AI 创始人 Jonathan Gordon 用五种工具配置实测「设计↔代码往返」，揭示 AI 时代的漂移问题与确定性护栏方案。
guests: ["[[Jonathan Gordon]]"]
companies: ["[[ReWeaver AI]]"]
concepts: ["[[设计-代码往返]]", "[[引导漂移]]", "[[确定性护栏]]", "[[vibe coding]]", "[[无障碍性]]", "[[技术债务]]", "[[溯源信息]]", "[[设计系统]]", "[[LLM]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-10-talks-the-design-code-roundtrip-that-isn-t-jon#post","headline":"设计-代码往返并不存在：一位 30 年老兵的实测与漂移警告","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-10-talks-the-design-code-roundtrip-that-isn-t-jon","mainEntityOfPage":"https://talk.solomind.cc/2026-09-10-talks-the-design-code-roundtrip-that-isn-t-jon","description":"ReWeaver AI 创始人 Jonathan Gordon 用五种工具配置实测「设计↔代码往返」，揭示 AI 时代的漂移问题与确定性护栏方案。","datePublished":"2026-09-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jonathan Gordon"},{"@type":"Organization","name":"ReWeaver AI"},{"@type":"Thing","name":"设计-代码往返 (design code round trip)"},{"@type":"Thing","name":"引导漂移 (drift)"},{"@type":"Thing","name":"确定性护栏 (deterministic guardrails)"},{"@type":"Thing","name":"vibe coding"},{"@type":"Thing","name":"无障碍性 (accessibility)"},{"@type":"Thing","name":"技术债务 (tech debt)"},{"@type":"Thing","name":"溯源信息 (provenance)"},{"@type":"Thing","name":"设计系统 (design system)"},{"@type":"Thing","name":"LLM"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"设计-代码往返并不存在：一位 30 年老兵的实测与漂移警告","item":"https://talk.solomind.cc/2026-09-10-talks-the-design-code-roundtrip-that-isn-t-jon"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>设计-代码往返并不存在：一位 30 年老兵的实测与漂移警告</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 设计-代码往返并不存在：一位 30 年老兵的实测与漂移警告

<div class="pd-byl"><b>Jonathan Gordon</b> · ReWeaver AI 创始人 · 2026-09-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-10-talks-the-design-code-roundtrip-that-isn-t-jon.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">因为随时间推移的漂移就是新的技术债。</div><div class="a">— Jonathan Gordon <button class="pd-ts" data-t="14:28" data-who="Jonathan Gordon" data-en="Because drift over time is the new tech debt." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jonathan Gordon]]
>
> **公司** [[ReWeaver AI]]
>
> **概念** [[设计-代码往返]] · [[引导漂移]] · [[确定性护栏]] · [[vibe coding]] · [[无障碍性]] · [[技术债务]] · [[溯源信息]] · [[设计系统]] · [[LLM]]

这一集是 [[ReWeaver AI|ReWeaver AI]] 创始人 [[Jonathan Gordon|Jonathan Gordon]] 的一场演讲，主题听起来有点「扫兴」：**那个大家以为已经被 AI 解决的「[[设计-代码往返|设计-代码往返]]」，其实并不存在**。所谓设计-代码往返(design-code round trip),指的是设计与工程之间双向的完整闭环——设计能变成代码、代码能回到设计，全程没有任何保真度损失，并且带着持久的[[溯源信息|溯源信息]]，确切知道每个元素来自哪里。

先说主角是谁。Jonathan 过去 30 多年一直在构建和设计编码工具、开发者工具和 IDE,而且作为设计师，他花了大量时间和设计、工程团队泡在一起，研究怎么把「设计交接给代码」这件事做好。

他的结论很坦白：这从来不是一门完美的科学。他和工程师谈判、请他们喝酒、交朋友，把东西交付到了客户手里——**但闭环从未闭合，因为工程有工程的需求(技术约束)，设计有设计的愿景，目标从一开始就分叉了**。

## AI 让他以为闭环有救了，结果被 innerHTML 一盆冷水浇醒

然后 AI 和 [[LLM|LLM]] 出现了。在他看来，这意味着某种根本性的变化：现在有一个智能，既理解设计意图，同一个智能还能写代码。

他心想，也许终于能以推理的速度闭合这个闭环了。于是他 all in——从 2025 年开始全力 [[vibe coding|vibe coding]](凭感觉和 AI 对话写代码、不细看代码本身)，Cursor 甚至给他发邮件说他的使用量位居前 0.1%,他自嘲「我需要多花点时间在户外」。

转折发生在他彻底沉浸在 vibe 里的一天。一大墙文字滚过，他全不在意，直到瞥见一条 innerHTML 语句——他记得很久以前 innerHTML 就是个安全漏洞，可以向其中注入内容。

他拦住 LLM 问「你刚才做了什么？」,对方还非常自豪地解释了一遍。

他只好让它撤销重来。那一刻他意识到：也许不能盲目往前冲，**也许我现在需要看一看代码了**。而这一生他看过很多代码——他进去看了，然后发现了问题。

## 业界宣称「往返已解决」，他试了五种工具配置：并没有

当业界开始宣称已经解决了往返问题——包括那个从 Claude Code 直接生成 Figma 画板的著名演示(他强调这不是对 Anthropic 或 Figma 的抨击，「那简直是魔法」)——他像审视 vibe coding 一样深入挖了下去。

他现场演示了自己构建的 harness(测试框架)：左边是 AI 生成的代码，右边是 Figma 或 Sketch 里的设计(用什么源头并不重要)。从任一侧出发、带上一个 prompt,调用 LLM 就能往另一侧更新——比如「拿这个表单，从它构建一个[[设计系统|设计系统]]」，代码和运行时里的设计系统都真的建出来了，还带着跳回 Figma 的链接。他加了 company 字段和橙色按钮，代码更新、设计也更新，「这太棒了」。

但真正的杀手锏是那个「Show Drift」按钮——这是 ReWeaver AI 的代码首次公开亮相。点下去，会同时从代码和设计两侧生成一份问题清单，跨多个维度：设计质量、代码质量、性能、design tokens 等等。

他现场演示了一个无障碍问题：某元素没有 ARIA live region(一种让屏幕阅读器播报内容的无障碍机制)，盲人用户就收不到关于它的播报。ReWeaver 发现它、说能修、然后修掉了。

谈到无障碍他动了真感情：他在微软做过无障碍工作，当 LLM 刚问世时他非常沮丧，因为生成的代码开箱即无障碍不达标。「我当时想，什么，模型没有在无障碍方面接受过训练？」——随即他想起了 20 年前工程师需要接受无障碍培训的岁月，**「所以现在我们又来了一遍，只不过这次是在无障碍方面训练 LLM,而不是工程师」**。

他认真试过五种不同的工具配置，做双向的代码↔设计往返，结论是「结果不太顺利」：从未真正实现完整往返，大量有损问题——绑定丢失、设计的修改保留了但代码没有。他不说我们永远到不了那一步，但即使到了，他也怀疑能否完全到达。所以他说，不该说「也许」需要像 ReWeaver 这样的工具——**我们确实需要，来帮我们看见[[引导漂移|漂移]]**。

## 核心洞见：漂移就是新的技术债，解法是确定性护栏

这整段经历凸显了一个他从构建开发者工具的过去带来的判断：**开发者工具在本质上是确定性的**——你写代码、编译、得到 AST,每次运行结果相同。但当你把 AI 放进流程的中间、前面或末端，你不再必然得到相同的结果。

于是他给出了本集最扎心的一句判断：当下的漂移在写代码时就会浮现，但**随时间推移累积的漂移，是你接下来六个月要承受的痛苦，「因为随时间推移的漂移就是新的[[技术债务|技术债]]」——而且它会壮丽地堆满你的代码库**。应对方法：你需要看代码、找到漂移、修复漂移，而做法是在 AI 周围设置**确定性的护栏**——AI 仍然在那里，但被护栏围着。

他还做了一个对照实验：在一个 UI 足够复杂的代码库上跑 12 次迭代。纯 AI 主导、全程 LLM,起步只有 30% 的保真度(真正的像素级完美)，且会逐渐退化；叠加[[确定性护栏|确定性护栏]](发现问题、修复问题)后大幅提升——但到不了 100%,因为「那 10% 是人类判断，人类决策」。

**人仍然在这个等式里。**

他进一步指出三个盲区：其一是模型本身——非确定性、概率性，当下就有漂移。而今天的现状是「我们被锁定在 AI 上」：设计到代码靠 AI,代码到设计靠 AI,循环、聊天机器人、跨工具链的工作流，还始终有 token 成本要留意。在这个世界里，**「智能体在掌控，人类在环路中」**。

## 他要提出的替代方案：人类掌控，而非人类在环路中

他想提出点不一样的。理想中的往返应该是什么样：完全双向、两个方向都能编辑、无损、所有界面都被保留(从代码到设计再回来，不会有奇怪的东西坏掉)、**溯源信息被携带**——你在 Figma 里看到这个按钮想改它，就得知道是哪一行代码写出了它。核心是确定性的调和：护栏知道有修复方案就修，不知道就明确告诉你「这里有问题，但需要你来修」。

具体到产品：ReWeaver 的核心是九个维度的确定性护栏，作为顶层的软件质量与生产就绪度维度——其中设计一致性是核心(代码与设计系统不一致就得修)，[[无障碍性|无障碍性]]单列一个维度(他承认「也许这有点自私，但我认为这是核心」)，AI 代码生成治理也是关键一环。值得注意的是 **ReWeaver 自己不写代码**：你说「应用修复」，它替你写，你能看到代码被写出来，也随时可以说「算了，撤销」或干脆忽略。而且它用全本地 LLM,零额外 token 成本，想接 Claude 也随你。

所有这些背后是一条核心原则：**人类始终掌控**——掌控成本、掌控代码、掌控设计，「因为这就是我们几十年来一直在做的事。我们一直在掌控。

我们不需要失去控制」。他不否认「人类在环路中」也不错，但「人类掌控」是更有理想主义追求的目标。因为归根结底：你需要的，其实就是你得到的——他管这叫 Winniwig(What You Need Is What You Get)。

最后是行动号召：现在就可以在 reweaver.ai/playground 用自己的 AI 生成代码跑扫描，页面还有个小挑战——**如果你能让 AI 生成出足够低 PDR(生产漂移比)得分的代码，就能拿到 beta 前排席位**。beta 计划七月中旬放出，他在找早期用户帮他把产品做得更好。

## 本集带走

- **别信「往返已解决」的宣传**：实测五种工具配置，双向设计↔代码往返仍会大量有损——绑定丢失、一侧改动另一侧没跟上。真要用，先在自己的真实项目里验证。
- **随时间累积的漂移是新的技术债**：单次生成的漂移当场能看见，但反复迭代堆下来的漂移会在几个月后压垮代码库，必须主动检测和管理。
- **用确定性护栏围住 AI**:开发者工具天生是确定性的，AI 是概率性的；在 AI 周围加确定性的检查与调和(发现问题就修、修不了就明确报告)，能把保真度从约 30% 大幅拉高。
- **到不了 100% 是故意的**：最后约 10% 是人类判断和决策，工具应该把问题亮出来让能力保留在人手里，而不是替你拍板。
- **无障碍问题又回来了**：LLM 生成的代码开箱即无障碍不达标，就像 20 年前工程师需要培训一样，现在要靠工具和护栏去训练/约束模型。
- **选工具看三件事**：是否携带溯源信息(设计里的按钮能否定位到代码)、是否有额外 token 成本(本地方案可做到零)、以及人类是否始终掌控每一步修改。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">因为随时间推移的漂移就是新的技术债。</span>  
> *Because drift over time is the new tech debt.*  
> <span class="qm">—— Jonathan Gordon · [14:28]</span> ^q1

> <span class="qz">从某种意义上说，现在我们有一个理解设计意图的智能，而同一个智能也能写代码。</span>  
> *In a sense, now we have one intelligence that understands design intent and the same intelligence can write code.*  
> <span class="qm">—— Jonathan Gordon · [03:26]</span> ^q2

> <span class="qz">所以在这个世界里，智能体在掌控，人类在环路中。</span>  
> *So in this world, the agents are in control and the humans in the loop.*  
> <span class="qm">—— Jonathan Gordon · [14:01]</span> ^q3

> <span class="qz">你到不了 100,因为那 10% 是人类判断，人类决策。</span>  
> *You can't get to 100 because that 10% is human judgment, human decision making.*  
> <span class="qm">—— Jonathan Gordon · [13:27]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-07-13-twentyvc-20vc-wix-s-founder-on-what-wall-st-gets|Wix CEO Avishai:SaaS 末日下,我们凭什么值钱]]<span class="pd-rz">同概念:LLM、vibe coding、Claude Code</span>
- [[2026-09-10-talks-one-designer-ai-hundreds-of-deliverables|一个设计师 + AI：如何撑起 7000 人大会的全部设计]]<span class="pd-rz">同公司:Figma · 同概念:LLM、设计系统 (design system)</span>
- [[2025-07-06-lennys-the-base44-bootstrapped-startup-success|一个人六个月做出八千万美元公司]]<span class="pd-rz">同概念:LLM、vibe coding</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-24-pg-srini-raghavan-podcast|Freshworks CPO：用 AI PDLC 把发布周期从六个月压到两周]]<span class="pd-rz">同公司:Figma · 同概念:设计系统 (design system)、Cursor、LLM</span>
- [[2025-10-23-lennys-al-engineering-101-with-chip-huyen|Chip Huyen：别追 AI 新闻了，真正提升 AI 产品的是这些事]]<span class="pd-rz">同概念:vibe coding、Cursor</span>
- [[2025-07-03-lennys-ive-run-75-businesses-andrew-wilkinson|Andrew Wilkinson：别追咖啡馆，去找没人要的钓鱼洞]]<span class="pd-rz">同概念:vibe coding</span>

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
