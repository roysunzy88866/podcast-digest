---
title: 浏览器自动化标准背后的故事：Selenium、WebDriver 与测试哲学
podcast: Software Engineering Daily
date: 2026-10-05
source_url: undefined
duration: "52:11"
type: episode
cover: "#64748b"
description: Selenium/WebDriver 长期贡献者、BrowserStack 开发者布道负责人 David Burns 谈浏览器自动化标准如何诞生、该怎么测试，以及 AI 写代码的风险。
host: "[[Josh Goldberg]]"
cohosts: ["[[David Burns]]"]
companies: ["[[BrowserStack]]"]
concepts: ["[[Selenium]]", "[[WebDriver]]", "[[WebDriver BiDi]]", "[[W3C]]", "[[开源]]", "[[无障碍性]]", "[[vibe coding]]", "[[可观测性]]", "[[OpenTelemetry]]"]
category: AI 编程
tags:
  - AI 编程
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-01-sed-the-state-of-browser-testing#post","headline":"浏览器自动化标准背后的故事：Selenium、WebDriver 与测试哲学","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-01-sed-the-state-of-browser-testing","mainEntityOfPage":"https://talk.solomind.cc/2026-10-01-sed-the-state-of-browser-testing","description":"Selenium/WebDriver 长期贡献者、BrowserStack 开发者布道负责人 David Burns 谈浏览器自动化标准如何诞生、该怎么测试，以及 AI 写代码的风险。","datePublished":"2026-10-05","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Josh Goldberg"},{"@type":"Person","name":"David Burns"},{"@type":"Organization","name":"BrowserStack"},{"@type":"Thing","name":"Selenium"},{"@type":"Thing","name":"WebDriver"},{"@type":"Thing","name":"WebDriver BiDi"},{"@type":"Thing","name":"W3C"},{"@type":"Thing","name":"开源 (open source)"},{"@type":"Thing","name":"无障碍性 (accessibility)"},{"@type":"Thing","name":"vibe coding"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"OpenTelemetry"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"浏览器自动化标准背后的故事：Selenium、WebDriver 与测试哲学","item":"https://talk.solomind.cc/2026-10-01-sed-the-state-of-browser-testing"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>浏览器自动化标准背后的故事：Selenium、WebDriver 与测试哲学</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 浏览器自动化标准背后的故事：Selenium、WebDriver 与测试哲学

<div class="pd-byl"><b>David Burns</b> · 2026-10-05</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-01-sed-the-state-of-browser-testing.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">问题就来了，人们会凭感觉把他们的生产数据库搞垮，然后就直接被扔掉了。</div><div class="a">— David Burns <button class="pd-ts" data-t="41:12" data-who="David Burns" data-en="The problem then comes is that people will vibe their production database into the ground and like it just gets thrown away." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Josh Goldberg]] · [[David Burns]]
>
> **公司** [[BrowserStack]]
>
> **概念** [[Selenium]] · [[WebDriver]] · [[WebDriver BiDi]] · [[W3C]] · [[开源]] · [[无障碍性]] · [[vibe coding]] · [[可观测性]] · [[OpenTelemetry]]

自动化浏览器测试是无数网页开发者天天依赖的基础技术——一份测试能以同样的方式驱动 Chrome、Firefox 和 Safari,背后是多年标准化工作的成果。

这一集的主角 [[David Burns|David Burns]] 就是亲历者：他是 [[Selenium|Selenium]] 和 [[WebDriver|WebDriver]] 的长期贡献者，在 Mozilla 待了十年，现在担任 [[BrowserStack|BrowserStack]] 的开发者布道与[[开源|开源]]负责人。

他从南非长大、学了计算机科学加工业心理学的奇怪组合讲起，2006 年左右在一家初创公司当第一个 QA 招聘，晚上因为妻子是音乐家不在家，就开始给刚起步的 Selenium 做开源贡献——就此一路做到了标准组织的深处。

## WebDriver 标准是怎么来的

转折点发生在瑞士的一场 Google 测试自动化大会(GTAC)上：Opera 来了一个人，展示了他把 Selenium 移植进 Opera 浏览器的成果。

在场的人觉得这太棒了，每个有浏览器的公司都应该这么做，而那位 Opera 的人说，实现它的路径就是进入标准制定。

当时浏览器对自身的自动化测试大量依赖手工，又慢又容易出错——有个 Internet Explorer 的 QA 纠结于「完美还是够好」，盯着两张图片找半个像素的差异，浪费了海量时间。

于是 David 和 WebDriver 的创造者 Simon Stewart、后来加入团队的 Andreas Tolfsen 一起开始构建规范。

制定标准最难的不是「点击」「输入」这类简单操作，而是那些看起来无法定义的东西：你怎么知道一个元素真的在页面上？

要等多久？

David 说这归结为「在某种程度上标准化一个有意义的等待，而不试图解决停机问题」——停机问题是图灵提出的著名不可解问题，自动化不可能绕过它去判断「程序会不会永远跑下去」。

还有「可见」的定义：CSS 有 Z-index,但仅凭 DOM 布局方式，其他元素照样能覆盖在上面，不做逐像素检查就极难判定。

大量精力正是花在解决这些「用户不必自己解决」的难题上，并留出扩展机制——比如浏览器权限弹窗(摄像头、麦克风)这种难测的东西，现在可以通过规范内的 WebDriver API 扩展出去测试。

WebDriver 就是描述如何向浏览器发送和接收命令的标准(点击、这个元素可见吗)；Selenium、WebDriver.io、Playwright 等一票工具都建在它之上。

它们的共同福利是不用再操心「怎么跟浏览器对话」——当年跟 Firefox 说话要靠内置扩展，跟 Internet Explorer 说话要做 COM interop,从 Java、Python 到 Ruby 一路越做越糟。

而现在的工作重心在 [[WebDriver BiDi|WebDriver BiDi]](BiDi 即双向，bi-directional),让脚本与浏览器之间的通信从单向请求变成双向事件流。

## 大公司为什么该回馈开源

有人问：怎么说服一个高管，雇人去维护连竞争对手都受益的开源？

David 的答案是从风险说起：「所有人都停止为这些项目做贡献的风险是什么？我觉得这是最大的风险」。他举了一个真实教训：

2020 年疫情期间，一个 node 包的作者失业了，向依赖他的社区请求资助，没人给钱，于是他给所有包下了毒、删光了代码。

而更深一层的理由是企业责任——你需要照好让你赚钱的东西，尤其 AI 时代供应链攻击会越来越普遍；

参与进去帮忙保障安全，送出去一些东西，换来的是业务尽可能无风险。

人脉也是回报：如果 BrowserStack 的产品在 Chrome 上出 bug,他可以直接找到 Chrome 的人请对方优先处理——互相反馈 bug,自己受益，其他人也受益。

## 测试哲学：每条关键路径一个扎实测试

David 的核心建议是：**先写一个测试，从那里逐步扩展，理想情况下每条关键路径只有一个测试**。

如果系统架构想清楚了，[[可观测性|可观测性]]、遥测、日志这些保护层本来就在，一个「能登录并完成 X」的测试就足够覆盖关键路径。

反例是他见惯的「测试圣诞树/沙漏」：15 个大致做同样事情的测试，每个一分钟，平白等 15 分钟。要平衡的是三件事：速度、正确性、风险。

浏览器启动在算力上极其昂贵——如今浏览器本质上就是操作系统，「你每次都相当于在启动一台电脑，而且是一台电脑里再套一台电脑」——所以把端到端测试压缩到那 100 个真正重要的，是唯一划算的做法。

## 无障碍测试：别只盯着大棒

对[[无障碍性|无障碍测试]]，David 主张讲「胡萝卜」而不是「大棒」(诉讼合规是棒，好处是胡萝卜)。关键洞见：

很多无障碍功能本来就是生产力功能——IDE 里不碰鼠标完成所有操作、开车时手机读出短信并语音回复，这些都是围绕无障碍需求构建、然后惠及所有人的。

只要把「用户多快能到达他要去的地方」做好，无障碍就顺带解决了。

而且残障人群的消费能力和你我一样，放弃无障碍就是放弃那块市场——和他反驳「只测 Chrome 就行」是同一个逻辑。

规范层面，正在构建中的 Accessibility Test Driver(AT Driver)与 AxeCore 这类「读 DOM 推断问题」的工具不同：

它试图驱动屏幕阅读器、再由屏幕阅读器驱动浏览器，目标是让 Linux、Mac、Windows 上千差万别的屏幕阅读器有统一的标准方式，从而提升 Chrome、Firefox、Safari 之间的互操作性。

## 标准慢，反而是对的

被问到规范制定太慢的挫败感，David 的回答反直觉：「但这种慢反而让它变得正确。

因为如果你把事情做得太快，就会引发其他问题」。他举例：

浏览器间通信的一个规范已到第三个迭代，前两版快但错得多——Firefox 打不到 Chrome，连同浏览器之间都打不通；

第三版慢了很多，但更正确了。

而 Selenium 的竞争者 Playwright、Cypress 从未深度参与规范制定，这正是 WebDriver 试图弥补的方向：给浏览器加新功能，自动就能获得对应的 WebDriver 测试。

> 【背景】这里说的浏览器间通信规范，通常指 WebRTC（网页实时通信）。

## AI 时代的测试会更重要

David 今年做过一个关于 [[vibe coding|vibe coding]](只写提示词、凭感觉拿到代码)和 vibe testing 的演讲，他的警告很直接：

人们会「凭感觉把生产数据库搞垮」——Replit 出过事故后加了护栏，用户转用 Claude 又不给护栏，数据库照样被删。

他认为 AI 越普及化，糟糕的情况会越严重，因为大量安全知识是「你我从构建软件中获得的经验」：

C/C++ 里别在变量交给垃圾回收器后还去访问它、要检查身份验证、别把 API 密钥硬编码……

从没写过软件的人没有这些被反复灌输的直觉。所以他的建议是：**初级工程师应该少用 AI**,把它更多当作审查备份；

每个人都该有机会做原型，但原型进生产前必须重写或至少过安全检查。另一个铁律：「AI 会产生幻觉。

那不是可能会产生幻觉，它就是会产生幻觉」——只有回头审查过，你才分辨得出真假。

他自己在推进的方向是把**可观测性**接进测试：

[[OpenTelemetry|OpenTelemetry]](跨应用创建调用追踪的标准)已经存在八九年，但几乎没人把它放进测试里——如果一个测试从「访问网站」一路追踪穿过整个应用，失败时你就有完整的状态和入口数据，可以精确复现「那个人是怎么操作的」，而不是对着日志干瞪眼。

他强调不需要改任何规范，一切能力都是现成的，只是没人讲清楚怎么上手。

## 本集带走

- **测试从一/start**:先写一个测试，然后每条关键路径只保留一个扎实测试；靠架构里的可观测性、遥测、日志兜住其余，而不是堆 15 个重复测试。
- **别造 DSL 式的流式 API**:David 早年给自己公司构建了一个流式(fluent)DSL,调试时发现「到处都是点」，每层都要单步穿过去才能找到真问题——好看但难用，别犯。
- **用风险说服高管回馈开源**：最大的风险是维护者断供后项目被「下毒」(2020 年 node 包作者删码事件)；企业责任之外，供应链安全在 AI 时代只会更重要。
- **把无障碍当生产力讲**：Tab 键可达、语音交互这些无障碍功能同时就是效率功能，讲收益比讲合规诉讼有效得多。
- **慢的规范才正确**：浏览器间通信规范前三版快而错、第三版慢而对；别指望标准化跟上工具的速度。
- **AI 时代测试是护栏**：AI 一定会幻觉，生产数据库被 vibe coding 删掉的事故会越来越多；初级工程师应少用 AI 以积累安全直觉，原型上线前必须重写或过安全检查。
- **把追踪接进测试**：用 OpenTelemetry 的追踪键贯穿端到端测试，失败时能精确复现入口数据，不用再「不知道从哪开始查」。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">问题就来了，人们会凭感觉把他们的生产数据库搞垮，然后就直接被扔掉了。</span>  
> *The problem then comes is that people will vibe their production database into the ground and like it just gets thrown away.*  
> <span class="qm">—— David Burns · [41:12]</span> ^q1

> <span class="qz">我虽然喜欢 AI,但我觉得初级工程师应该少用它，把它更多当作一个备份来审查他们的东西，问一句，嘿，你有没有考虑过这个那个问题，对吧？</span>  
> *And I think while I like AI, I kind of feel like junior engineers should be using it a lot less, more of a backup to review their stuff and go, hey, did you think about this problem, that problem, right?*  
> <span class="qm">—— David Burns · [43:44]</span> ^q2

> <span class="qz">那不是可能会产生幻觉，它就是会产生幻觉。</span>  
> *That's not a maybe hallucinate, it will hallucinate.*  
> <span class="qm">—— David Burns · [45:21]</span> ^q3

> <span class="qz">我就想，哇，流式 API 简直是最糟糕的，对吧？因为到处都是点。</span>  
> *And I was like, wow, Fluent APIs are literally the worst, right? Because everything's a dot.*  
> <span class="qm">—— David Burns · [07:03]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2025-10-06-talks-agents-for-complex-software-engineering|Vibe debugging：代码生成之后，生产环境才是真正的硬仗]]<span class="pd-rz">同概念:OpenTelemetry、vibe coding、可观测性 (observability)、护栏 (guardrails)</span>
- [[2026-05-06-beyondcoding-what-separates-cracked-software-engineer|2026 工程师生存指南：Reddit 热帖直答]]<span class="pd-rz">同概念:vibe coding、开源 (open source)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:vibe coding、可观测性 (observability)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-27-twentyvc-20vc-leading-anthropic-s-first-ever-roun|主导投资 Anthropic 的人：风投的游戏规则已经彻底变了]]<span class="pd-rz">同概念:可观测性 (observability)、开源 (open source)</span>
- [[2026-09-30-bigtech-sap-ceo-ai-won-t-kill-software-but-it-wi|SAP CEO:单靠 LLM 跑不动企业,商业 AI 只差几个月]]<span class="pd-rz">同概念:vibe coding、开源 (open source)</span>
- [[2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi|DevOps 之父谈智能体开发：谁来管、怎么管、别踩什么坑]]<span class="pd-rz">同概念:可观测性 (observability)、护栏 (guardrails)</span>

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
