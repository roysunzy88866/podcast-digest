---
title: "OpenClaw 创始人复盘:被 18,000 人狂改、被舆论压垮,我学到了什么"
podcast: Y Combinator Startup Podcast
date: 2026-08-11
source_url: undefined
duration: "41:50"
type: episode
cover: "#64748b"
image: "/covers/2026-08-11-yc-peter-steinberger-fun-is-velocity-e3n9ea.jpg"
description: OpenClaw 作者自述八个月从爆红到差点崩溃的全过程、安全维护教训与智能体开发方法。
host: "[[Peter Steinberger]]"
companies: ["[[OpenClaw]]", "[[Anthropic]]", "[[OpenAI]]", "[[NVIDIA]]"]
concepts: ["[[智能体]]", "[[开放权重模型]]", "[[代码审查]]", "[[子智能体]]", "[[KV 缓存]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/covers/2026-08-11-yc-peter-steinberger-fun-is-velocity-e3n9ea.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-11-yc-peter-steinberger-fun-is-velocity-e3n9ea#post","headline":"OpenClaw 创始人复盘:被 18,000 人狂改、被舆论压垮,我学到了什么","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-11-yc-peter-steinberger-fun-is-velocity-e3n9ea","mainEntityOfPage":"https://talk.solomind.cc/2026-08-11-yc-peter-steinberger-fun-is-velocity-e3n9ea","description":"OpenClaw 作者自述八个月从爆红到差点崩溃的全过程、安全维护教训与智能体开发方法。","datePublished":"2026-08-11","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-08-11-yc-peter-steinberger-fun-is-velocity-e3n9ea.jpg","about":[{"@type":"Person","name":"Peter Steinberger"},{"@type":"Organization","name":"OpenClaw"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"OpenAI"},{"@type":"Organization","name":"NVIDIA"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"开放权重模型 (open-weight models)"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"子智能体 (subagents)"},{"@type":"Thing","name":"KV 缓存 (KV cache)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"OpenClaw 创始人复盘:被 18,000 人狂改、被舆论压垮,我学到了什么","item":"https://talk.solomind.cc/2026-08-11-yc-peter-steinberger-fun-is-velocity-e3n9ea"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>OpenClaw 创始人复盘:被 18,000 人狂改、被舆论压垮,我学到了什么</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# OpenClaw 创始人复盘:被 18,000 人狂改、被舆论压垮,我学到了什么

<div class="pd-byl"><b>Peter Steinberger</b> · OpenClaw 创始人 · 2026-08-11</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-11-yc-peter-steinberger-fun-is-velocity-e3n9ea.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">你构建的任何东西都可以被复刻或克隆,但你的名字不能。</div><div class="a">— Peter Steinberger <button class="pd-ts" data-t="12:49" data-who="Peter Steinberger" data-en="Everything you can build can be forked or cloned, but your name cannot." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Peter Steinberger]]
>
> **公司** [[OpenClaw]] · [[Anthropic]] · [[OpenAI]] · [[NVIDIA]]
>
> **概念** [[智能体]] · [[开放权重模型]] · [[代码审查]] · [[子智能体]] · [[KV 缓存]]

一个 39 岁、本已退休的开发者,因为「恼火」花几小时做了个手机控制[[智能体|智能体]]的工具,八个月后,超过 18,000 人给这个项目提过代码,他的收件箱被记者、VC 和谩骂淹没,他差点一键删掉这整个项目。

这就是 [[OpenClaw|OpenClaw]](一个让你能通过 WhatsApp 或 Discord 等聊天软件指挥 AI 智能体执行任务的工具)的诞生与现实。这是它的创造者 Peter 的复盘。

## 灵感来自「恼火」,验证靠「给朋友玩」

Peter 的创意源泉很朴素:被日常摩擦力惹恼。2025 年初(那时 AI 智能体还很慢),他饿了,去厨房找吃的,回来发现智能体因为蠢问题卡住了。他烦的是:当时竟然没有好办法能从手机给电脑发个提示词,去看看他的智能体怎么了。

他把想法嘟囔进终端,让模型自己发挥。一小时后,他做出了一个能从手机通过 WhatsApp 中继控制电脑智能体的原型。

为了向 Twitter 上的人证明这玩意儿多神奇,他把朋友们拉进群聊体验。结果发现:技术圈外的人反而反应最强烈,有的惊叹,有的害怕,甚至因为他说「这还不适合你」而生气。

他意识到,这就是产品市场契合度。后来有人给这个 WhatsApp 中继工具发了 PR 要加 Discord 支持,他索性把它重命名为 OpenClaw,并在 Discord 上公开构建。第一晚通宵后,项目就病毒式传播了。<button class="pd-ts" data-t="05:11" data-who="Peter" data-en="And they got mad. So if that's not an indicator to have product market fit, I don't know what is. So I spent another month tweaking the details, thinking, ah, what could I do to explain the world?" aria-label="回原文"></button>

## 被爆红压垮:安全报告、配置地狱与平台依赖

热潮的代价是惨痛的。成名的冲击让他差点删库跑路:电话号码被泄露,收件箱成了瀑布,一个月收到的播客邀请比前 39 年加起来还多。但他扛住的压力不只是名声。

最致命的是「功能与配置的失控」。这是个开源项目,维护者免费干活,Peter 觉得自己没资格严格管束大家,于是不断合并新功能。

由于每个新功能都要带个配置开关以免破坏老用户的设置,最终全项目的配置排列组合膨胀到了大约 9,500 个。这导致测试根本覆盖不全,经常改崩东西。<button class="pd-ts" data-t="16:49" data-who="Peter" data-en="Because we didn't want to break everyone's setup. At our highest, I had to count that, we ended up with around 9,500 configuration options, if you count all the permutations." aria-label="回原文"></button>

接着是安全研究员的狂轰滥炸。媒体曾宣称 OpenClaw 有 20% 的技能是恶意的。

Peter 他们扫了全部 67,000 个技能,写了论文证明实际恶意率只有 0.3%。但恐慌跑得永远比辟谣快。

为了堵漏,他拼命加沙箱(隔离程序运行环境的机制)、白名单、防符号链接逃逸,甚至为了 TypeScript 缺少某些文件操作原语而去调用 Python。结果呢?用户根本不在乎这些深层的安防措施,反而抱怨更新把东西变慢了、搞坏了他们依赖的功能。<button class="pd-ts" data-t="14:11" data-who="Peter" data-en="And then the press. The press said 20% of our skills are malicious. Now, we actually wrote a paper about this." aria-label="回原文"></button>

真正让项目「受伤」的,是他过度依赖单一模型平台。OpenClaw 最初是为 Opus 模型优化的。

当 [[Anthropic|Anthropic]](该公司)提前 24 小时通知他将禁用所有人的订阅时,他根本没有足够时间转向其他模型。他得出一条血泪教训:你的依赖项的业务模式,就是你的业务模式。<button class="pd-ts" data-t="18:45" data-who="Peter" data-en="So maybe write this one down. Your dependencies business model is your business model. You know, that's all fixed now." aria-label="回原文"></button>

## 活下去的法宝:别跟一个「图个乐」的人竞争

大约在 2 月,Peter 崩溃了,发现自己同时干着两份工作,而且最糟糕的是——他自己都不用 OpenClaw 了,因为他在为了「所有人」做产品。直到他遇到了靠谱的维护者、成立了非营利组织、并获得了 [[NVIDIA|NVIDIA]] 派人接手安全工作后,他才缓过来。<button class="pd-ts" data-t="21:41" data-who="Peter" data-en="We got amazing companies as donors and I found some really good people that believe in open source and started working with me. I also need to give NVIDIA a special shout out because they were very early and they simply asked me what I need." aria-label="回原文"></button>

他重新想通了:为什么要跟别人竞争?如果别人只是为了好玩在做一件事情,你是很难竞争过他的。

因为「乐趣就是速度」:在他享受构建的那几周,产品肉眼可见地变好;在不享受的那几周,大家只是在堆砌配置选项。<button class="pd-ts" data-t="22:55" data-who="Peter" data-en="It's hard to compete with someone who's just there having fun. Fun is velocity. The weeks I enjoyed building, the product got visibly better." aria-label="回原文"></button> 他强调,开发者最该做的事是听从直觉、修复那些让你恼火的摩擦力,它可能就是下一个大事件。

## 智能体工程的现状与坑

在随后的问答中,Peter 分享了当前用 AI 写代码的实战心法。

关于工作流演进:现在他不再频繁清理会话,因为积累的上下文能帮智能体;最大的转变是让智能体做「主动工作」。比如面对新功能,他会让智能体去启动 12 个[[子智能体|子智能体]],把项目拆解、写代码、互相做[[代码审查|代码审查]]和压力测试,最后只把做完的功能交给他拍板。<button class="pd-ts" data-t="30:14" data-who="Peter" data-en="We not just have sessions that remember, we have orchestration trained into models so they really understand and know to use subagents we have computer use we have browser use like all of that together is like your perfect Q&amp;A environment like i did that yesterday where i spin up codex use 12 subagents understand my project break it down into features and then each" aria-label="回原文"></button>

关于代码审查:他现在不再读所有代码,而是把审查当作「风险管理」。改 UI 他不看怎么写的,看一眼效果对就行。但如果一个小改动(比如改拖拽)花了三小时,凭直觉就知道出问题了,才会去细看。<button class="pd-ts" data-t="31:25" data-who="Peter" data-en="I think I was really early in deciding that I don't read all the code. I see code review more as risk management. Sometimes you touch a system that is" aria-label="回原文"></button>

关于最大瓶颈:他认为是可靠性,尤其是算力管理。如果在本地跑测试开 16 个线程,10 个会话一起跑就会有两个超时。

做 Web 的云会话很容易,但一旦涉及 macOS 或调用本机依赖,99% 的工具都会失效。他现在甚至还得靠屏幕共享(Jump Desktop)连到工作室机器去跑任务,因为没有好用的系统能可靠地调度这批机器。<button class="pd-ts" data-t="35:00" data-who="Peter" data-en="Reliability. Tooling, memory, evals. Managing compute, if that makes sense." aria-label="回原文"></button>

关于「始终在线」的智能体:技术上今天就能做,卡点在于 Token 成本和调度逻辑。他早期的「心跳检查」机制太蠢:如果一小时内对整个大会话做一次心跳检查,由于 [[KV 缓存|KV 缓存]](大模型存放上下文的地方)已被清空,系统会把 60 万个 Token 重新发回服务器,花巨资做无用功。<button class="pd-ts" data-t="37:31" data-who="Peter" data-en="I mean, honestly, that's not so much a tech problem. It's more a token problem where we could do that today. But you wouldn't get very far with your subscription and not everyone is willing to spend so many tokens." aria-label="回原文"></button>

## 本集带走

- **别给开源项目无脑加功能**:合并新功能等于领养一堆你看不懂的代码,配置项一旦组合爆炸(如 9,500 个),项目就会因测试覆盖不全而崩塌。
- **警惕平台依赖**:如果你深度绑定某个闭源模型 API,对方改一次政策就能在你 24 小时内要你的命;你的依赖项的业务模式,就是你的业务模式。
- **安全加固要克制**:用户喜欢「安全」这个词,但如果你为了加沙箱和安防层,把东西变慢、改崩了用户的设置,用户只会骂你。
- **把代码审查当风险管理**:不必逐行读。凭直觉判断耗时是否异常,核心危险系统细看,无关紧要的(如 UI 实现)扫一眼即可。
- **用「子智能体」分担脑力**:面对复杂任务,启动十几个子智能体去拆解、测试和审查,人只做最后拍板的那一下。
- **乐趣是最高效的生产力**:当你为了好玩去构建时,产品进步最快;一旦变成纯责任的苦差事,产出质量直线下降。
- **做产品先找自己和朋友**:第一号用户必须是你自己,第 2 到 20 号用户找朋友;如果连你自己都对它兴奋不起来,这产品就做不下去。

<div class="pd-sec">全部金句 <span>5 条</span></div>

> <span class="qz">你构建的任何东西都可以被复刻或克隆,但你的名字不能。</span>  
> *Everything you can build can be forked or cloned, but your name cannot.*  
> <span class="qm">—— Peter Steinberger · [12:49]</span> ^q1

> <span class="qz">你的依赖项的业务模式就是你的业务模式。</span>  
> *your dependencies business model is your business model*  
> <span class="qm">—— Peter Steinberger · [18:45]</span> ^q2

> <span class="qz">很难与一个只是在那儿享乐的人竞争。</span>  
> *It's hard to compete with someone who's just there having fun.*  
> <span class="qm">—— Peter Steinberger · [22:50]</span> ^q3

> <span class="qz">第一号用户应该是你自己。</span>  
> *User number one should be you.*  
> <span class="qm">—— Peter Steinberger · [32:32]</span> ^q4

> <span class="qz">乐趣是终极驱动力,这样你才能获得最好的想法。</span>  
> *Fun is the ultimate driver so you can get the best ideas.*  
> <span class="qm">—— Peter Steinberger · [26:34]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-06-talks-the-state-of-model-routing-nvidia-cognit|不靠一个模型打天下:多模型路由的早期探索与实战权衡]]<span class="pd-rz">同公司:NVIDIA、OpenClaw · 同概念:KV 缓存 (KV cache)、智能体 (agent)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同公司:NVIDIA、Anthropic、OpenAI · 同概念:开源模型 (open-weight models)、智能体 (agent)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Anthropic · 同概念:代码审查 (code review)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-07-talks-chamath-palihapitiya-talks-ai-trump-and|Chamath 谈 AI：别信末日论，打破寡头垄断]]<span class="pd-rz">同公司:Anthropic、NVIDIA、OpenAI · 同概念:开源模型 (open-weight models)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:Anthropic、NVIDIA、OpenAI · 同概念:智能体 (agent)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:智能体 (agent)</span>

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
  // 故再兜一条 history.length>1(站内点进必有返回历史)。命中「直开」给 body 打 .pd-direct,CSS 切显隐。
  function direct(){
    var ref = document.referrer || '';
    var fromSite = (ref.indexOf(location.origin) === 0) || history.length > 1;
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
