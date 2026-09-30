---
title: 软件工程正在变成「工厂工程」：Warp 创始人的自动化开发全景
podcast: 精选演讲
date: 2026-10-01
source_url: undefined
duration: "20:19"
type: episode
cover: "#64748b"
description: Warp 创始人 Zach Lloyd 主张软件工程将变成工厂工程，并详解智能体软件工厂的完整构建方法。
guests: ["[[Zach Lloyd]]"]
companies: ["[[Warp]]"]
concepts: ["[[智能体]]", "[[软件工厂]]", "[[开源]]", "[[代码审查]]", "[[规范]]", "[[CI-CD]]", "[[计算机使用]]", "[[循环]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-27-talks-software-engineering-is-becoming-factory#post","headline":"软件工程正在变成「工厂工程」：Warp 创始人的自动化开发全景","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-27-talks-software-engineering-is-becoming-factory","mainEntityOfPage":"https://talk.solomind.cc/2026-09-27-talks-software-engineering-is-becoming-factory","description":"Warp 创始人 Zach Lloyd 主张软件工程将变成工厂工程，并详解智能体软件工厂的完整构建方法。","datePublished":"2026-10-01","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Zach Lloyd"},{"@type":"Organization","name":"Warp"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"软件工厂 (software factory)"},{"@type":"Thing","name":"开源 (open source)"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"规范 (spec)"},{"@type":"Thing","name":"CI/CD"},{"@type":"Thing","name":"计算机使用 (computer use)"},{"@type":"Thing","name":"循环 (loop)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"软件工程正在变成「工厂工程」：Warp 创始人的自动化开发全景","item":"https://talk.solomind.cc/2026-09-27-talks-software-engineering-is-becoming-factory"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>软件工程正在变成「工厂工程」：Warp 创始人的自动化开发全景</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 软件工程正在变成「工厂工程」：Warp 创始人的自动化开发全景

<div class="pd-byl"><b>Zach Lloyd</b> · Warp 创始人 · 2026-10-01</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-27-talks-software-engineering-is-becoming-factory.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我现在仍然在频繁地发布产品，但过去六个月里我一行代码都没写。</div><div class="a">— Zach Lloyd <button class="pd-ts" data-t="00:40" data-who="Zach Lloyd" data-en="I am still shipping frequently, but I haven't written a line of code in the last six months." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Zach Lloyd]]
>
> **公司** [[Warp]]
>
> **概念** [[智能体]] · [[软件工厂]] · [[开源]] · [[代码审查]] · [[规范]] · [[CI-CD]] · [[计算机使用]] · [[循环]]

这场演讲的主角是 [[Zach Lloyd|Zach Lloyd]]——他曾担任 Google 首席工程师、负责 Google Docs 套件的工程工作，现在是 [[Warp|Warp]] 的创始人。Warp 是一个[[开源|开源]]的[[智能体|智能体]]开发环境，公司以终端起家，现在是一个内置了智能体的终端，GitHub 星标超过 60,000,有超过 800,000 名活跃开发者。他开场就抛出一个有点惊人的事实：他仍然在频繁发布产品，但**过去六个月里一行代码都没写**。

他的核心论点是：**软件工程这门学科，将会变成某种更像「工厂工程」的东西**——软件工程师最终会成为构建和管理这些「[[软件工厂|软件工厂]]」的人。

## 开发正在经历的三个阶段

回顾过去几年：第一段是聊天和 AI 自动补全的时代(Cursor、Copilot);现在处于第二段——**交互式智能体**，你坐在电脑前指挥 Claude Code 或 Warp 做事；而他预测，未来六个月到一年内，我们将更多走向第三段：**自动化**。

现场举手调查很有代表性：几乎所有人都在用智能体构建、且同时用多个；不到一半的人在云端运行智能体；而内部搭好了覆盖整个软件开发生命周期的自动化系统的，只有少数人。他认为，**每一个有相当规模的项目最终都会有这样一套系统**。

## 软件工厂长什么样

这套系统就是一个大循环，他叫它「软件工厂」，其实也可以直接叫软件开发生命周期。想法从顶部进来，然后：

- **分诊(triage)**:智能体逐个查看进来的 issue,判断如果简单且明确无歧义，就直接实现——这是让工厂真正转起来的关键；如果 issue 很难，就进入下一步。
- **写[[规范|规格说明]](spec)**:他推荐让智能体写两份——**产品规格**(描述你要构建的产品的不变性)和**技术规格**(描述架构和代码的形状)。
- **实现**：云端运行的编码智能体产出 diff,用什么编码智能体都行。
- **评审**：这「在很多方面是最痛苦的部分」——大家都已经厌倦审阅智能体生成的垃圾代码了。他的做法是让智能体先做[[代码审查|代码审查]]，随时间推移，这变成一种风险管理练习：什么时候引入人类来审代码。
- **验证**：比如 [[计算机使用|computer use]]——如果你在构建 UI,让计算机实际操作智能体生成的代码，产出视频和截图；CI/CD 照常用。
- **监控**：代码发布后智能体并不停下，它们要观察已发布的东西有没有崩溃、有没有被使用，并把监控输出反馈到工厂顶端，循环往复。

人类介入的位置，就是循环里那些「卡住」的节点：审查规格、参与代码评审、审查产品。

## 工厂的基础设施与自我改进

如果想自己搭，工厂车间本质上是**一张步骤的图**，定义你的产品的软件如何被构建。完整形态包括：多种把工作送入工厂的输入渠道(任务追踪器、Slack、终端/IDE、监控系统)；一个分配工作的控制平面；实际干活的地方——云端沙箱，以及选定 harness 和模型；最后非常重要的是，在工厂之下建一个**数据平面**，让智能体记住自己做过什么、学习、随时间改进。

而工厂最关键的能力是**自我改进**，靠的是循环(loop)。最常见的如「技能循环」：工厂智能体在运行技能，同时有**观察者智能体**看这些技能用得怎么样。他举的例子：如果代码审查智能体留了评论、你团队一位资深工程师去修正了那些评论，观察者智能体就该看到这个过程，为下一次运行改进代码审查智能体。

还有工厂思维：**你不仅要构建产品，还要构建「构建产品的东西」**。要像工厂工程师一样度量效率——发布了多少软件，在人类时间和 token 成本上花了多少——并持续改进。他预测软件工厂会像 CI/CD 一样，变成每家公司的标配。

## 开源是通往工厂的路径

他岔开讲了一段开源，因为 Warp 开源的主要原因之一就是**建一座公开的工厂**：他们做了个网站 build.warp.dev,展示所有流经系统的问题单、处于什么状态、哪些智能体和贡献者在处理——他称之为「规模化运行的原型工厂」，运转得还不完美但确实在运转。

他的判断是：构建软件越来越便宜，推论是克隆软件变得轻而易举，光靠产品本身很难做成软件生意。初创公司没有分发、生态、品牌、数据护城河、资本这些优势，他建议的突围方式之一就是**公开构建**——它帮你建生态、增光品牌、创建社区，传统痛点(嘈杂的 issue、潦草的 PR、代码审查地狱)如今可以用自动化(也就是软件工厂)来管理。

(他补充：Warp 是花了五年闭源开发才迈出这一步的。)

## 工程师的位置与「品味」问题

每个人都会写更少的代码、发布更多东西。如果你的快乐在于写代码，这可能让人沮丧；但如果你的快乐在于发布产品，「现在是有史以来最好的时代」。他把这看作一种**元工程**：如何把你的智能体系统工程成最好的工程——仍然是一整套非常酷的工程挑战。

有人问工厂比喻是不是在机械化、去人性化，他的回答是：这一切背后唯一重要的是**你是不是在构建有用的东西**——如果工厂不停生产没人关心的垃圾，那有什么意义？人的品味、人的产品感觉、人在无法自动化的环节进行引导，绝对不可或缺。这正是他现在自己做的主要工作：弄清楚客户想要什么。

> 【背景】Warp 的开源 GitHub 仓库里有分诊、写规格等各类工厂智能体的搭建示例，演讲中他强调不强制使用 Warp 平台，目的是展示从工厂理论到落地的完整做法。

## 本集带走

- **工厂的核心循环可以照抄**：想法进来 → 智能体分诊(简单明确的直接实现)→ 难的先让智能体写产品规格 + 技术规格 → 编码智能体产出 diff → 智能体先审代码、人类再介入 → computer use / CI 验证 → 监控结果反馈回顶端。
- **自动化覆盖全生命周期是终局**：分类、写规格、实现、评审全部进循环；每个有规模的项目最终都会有，就像今天的 CI/CD。
- **工厂要配「自我改进」**：设观察者智能体盯技能运行效果(如资深工程师修正代码审查评论的场景)，自动改进技能，工厂才越转越准。
- **建底层的数据平面**：让智能体记住做过什么、持续学习——这是工厂区别于一次性运行的关键。
- **别什么都自己造**：简单版本容易搭，但要真正可扩展，多数组织应该专注核心产品，而不是自建基础设施。
- **开源是初创公司的突围策略**：产品之外要靠生态、品牌、社区建立优势，而开源的传统痛点如今可以用工厂自动化解决。
- **最重要的能力变了**：不是写代码的速度，而是适应力、批判性思维、学习速度，以及理解底层系统、能读懂智能体产出的代码和规格的能力。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">我现在仍然在频繁地发布产品，但过去六个月里我一行代码都没写。</span>  
> *I am still shipping frequently, but I haven't written a line of code in the last six months.*  
> <span class="qm">—— Zach Lloyd · [00:40]</span> ^q1

> <span class="qz">软件工程这门学科将会变成某种更像工厂工程的东西。</span>  
> *the discipline of software engineering is going to become something more like factory engineering.*  
> <span class="qm">—— Zach Lloyd · [01:36]</span> ^q2

> <span class="qz">克隆软件正变得轻而易举。</span>  
> *It's becoming trivial to clone software.*  
> <span class="qm">—— Zach Lloyd · [05:24]</span> ^q3

> <span class="qz">如果你以为只要构建并发布一个出色的产品就能做成一门出色的软件生意，你多半不会成功。</span>  
> *if you think that you're going to build a great software business just by building and shipping a great product, you're probably not going to succeed.*  
> <span class="qm">—— Zach Lloyd · [06:09]</span> ^q4

> <span class="qz">它可以让你从在 hacker news 上被痛骂，变成，嗯，被容忍。</span>  
> *It can take you from being, like, hated on hacker news to, like, tolerated.*  
> <span class="qm">—— Zach Lloyd · [06:55]</span> ^q5

> <span class="qz">而且我预测，每家公司、每个开源项目，核心处都会有一个软件工厂，就像 CI/CD 变成「哦，你当然得有那个」一样。</span>  
> *And I predict that every company, every open source project, will have at its core a software factory, kind of like the way that CICD became just like, oh, of course you have that.*  
> <span class="qm">—— Zach Lloyd · [08:43]</span> ^q6

> <span class="qz">就是说，我想大家可能已经有点厌倦审阅智能体生成的垃圾代码了。</span>  
> *Like, I expect that people are a little bit tired of reviewing agentic slop.*  
> <span class="qm">—— Zach Lloyd · [11:08]</span> ^q7

> <span class="qz">我会让一个智能体先做代码审查，然后随着时间推移，这变成一种风险管理练习，比如，什么时候引入人类来做代码审查？</span>  
> *I would have an agent do code review first, and then it becomes, over time, like a risk management exercise of, like, when do you bring in humans to do code review?*  
> <span class="qm">—— Zach Lloyd · [11:14]</span> ^q8

> <span class="qz">但如果你的快乐在于发布产品，那现在是有史以来最好的时代，而这正是我找到快乐的地方。</span>  
> *But if your joy is in shipping product, like, it's never been a better time, and this is actually where I find my joy.*  
> <span class="qm">—— Zach Lloyd · [15:33]</span> ^q9

> <span class="qz">所以在座的每个人都会写更少的代码，但会发布更多东西，这会是一种权衡。</span>  
> *So everyone in here is gonna code less, but they're gonna ship more, and that's gonna be a trade-off.*  
> <span class="qm">—— Zach Lloyd · [15:43]</span> ^q10

> <span class="qz">而我认为，人的品味、人的投入、人的产品感觉，人在那些无法自动化的环节进行引导，是绝对不可或缺的。</span>  
> *And I think that human taste, human input, human product sense, humans guiding at those touch points where you can't automate stuff is absolutely essential.*  
> <span class="qm">—— Zach Lloyd · [19:49]</span> ^q11

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-21-howiai-how-warp-ships-2-000-prs-a-month-with-ai|Warp CEO 的软件工厂：2000 个 PR 一个月，人成了瓶颈]]<span class="pd-rz">同嘉宾:Zach Lloyd · 同公司:Warp · 同概念:computer use、代码审查 (code review)、智能体 (agent)、软件工厂 (software factory)</span>
- [[2026-09-22-ainativedev-dexter-horthy-why-we-stopped-trusting-ai|软件工厂的教训：不读代码的四五个月后，我们重写了整个产品]]<span class="pd-rz">同概念:代码审查 (code review)、智能体 (agent)、规格说明 (spec)、软件工厂 (software factory)</span>
- [[2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact|TESL 智能体：让你的编码智能体自己越用越好]]<span class="pd-rz">同概念:代码审查 (code review)、智能体 (agent)、软件工厂 (software factory)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同概念:CI/CD、代码审查 (code review)、智能体 (agent)</span>
- [[2026-04-22-beyondcoding-oss-expert-why-world-class-engineers-get|开源贡献的真正门槛：不是代码，是认知负荷]]<span class="pd-rz">同概念:开源 (open source)、智能体 (agent)</span>
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当写代码变便宜,OpenAI Codex负责人说「品味」成了最贵的资源]]<span class="pd-rz">同概念:computer use、智能体 (agent)</span>

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
