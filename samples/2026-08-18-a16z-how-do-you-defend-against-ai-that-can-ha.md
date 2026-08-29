---
title: 当签名已死：AI智能体如何击穿传统网络安全
podcast: The a16z Show
date: 2026-08-18
source_url: undefined
duration: "21:50"
type: episode
cover: "#64748b"
description: 网络安全建来防人和恶意软件，但AI智能体两样都不是，传统防线正在失效。
host: "[[Max]]"
cohosts: ["[[Nick Warner]]", "[[Joel de la Garza]]"]
companies: ["[[Hugging Face]]", "[[NEO]]", "[[Cotool]]"]
concepts: ["[[智能体]]", "[[护栏]]", "[[签名]]", "[[行为检测]]", "[[推理]]", "[[开放权重]]"]
category: AI 安全
tags:
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-18-a16z-how-do-you-defend-against-ai-that-can-ha#post","headline":"当签名已死：AI智能体如何击穿传统网络安全","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-18-a16z-how-do-you-defend-against-ai-that-can-ha","mainEntityOfPage":"https://talk.solomind.cc/2026-08-18-a16z-how-do-you-defend-against-ai-that-can-ha","description":"网络安全建来防人和恶意软件，但AI智能体两样都不是，传统防线正在失效。","datePublished":"2026-08-18","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Max"},{"@type":"Person","name":"Nick Warner"},{"@type":"Person","name":"Joel de la Garza"},{"@type":"Organization","name":"Hugging Face"},{"@type":"Organization","name":"NEO"},{"@type":"Organization","name":"Cotool"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"签名 (signatures)"},{"@type":"Thing","name":"行为检测 (behavior-based approaches)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"开放权重 (open weights)"}],"articleSection":"AI 安全"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 安全","item":"https://talk.solomind.cc/tags/AI 安全"},{"@type":"ListItem","position":3,"name":"当签名已死：AI智能体如何击穿传统网络安全","item":"https://talk.solomind.cc/2026-08-18-a16z-how-do-you-defend-against-ai-that-can-ha"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当签名已死：AI智能体如何击穿传统网络安全</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 当签名已死：AI智能体如何击穿传统网络安全

<div class="pd-byl"><b>Nick Warner</b> · 2026-08-18</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-18-a16z-how-do-you-defend-against-ai-that-can-ha.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们在捍卫 AI，同时也在防御 AI。</div><div class="a">— Nick Warner <button class="pd-ts" data-t="00:37" data-who="Nick Warner" data-en="We're defending AI and we're also defending from AI." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Max]] · [[Nick Warner]] · [[Joel de la Garza]]
>
> **公司** [[Hugging Face]] · [[NEO]] · [[Cotool]]
>
> **概念** [[智能体]] · [[护栏]] · [[签名]] · [[行为检测]] · [[推理]] · [[开放权重]]

网络安全过去几十年只防两样东西：人和恶意软件。AI [[智能体|智能体]](能自主执行多步任务的程序)两样都不是，这意味着整个防御体系的地基被动摇了。<button class="pd-ts" data-t="06:16" data-who="Nick Warner" data-en="How are you guys thinking about defending and playing in this kind of world where the automated attacks need an automated response? Yeah, I think part of the challenge with the existing security tools that are out there is they really were built to tackle two things." aria-label="回原文"></button>

最讽刺的现实是：模型供应商设的[[护栏|护栏]]，反而让防御者更难干活。蓝队(企业安全防御团队)在处理漏洞报告时，问的问题跟攻击者几乎一模一样——"这段代码哪里有漏洞？

怎么利用？能不能验证？

"——结果触发模型拒绝回答。<button class="pd-ts" data-t="03:34" data-who="Max Pollard" data-en="Can you validate this, right? And so part of the side effect of these model providers doing their job is, as a defender, I may not be able to respond effectively." aria-label="回原文"></button> [[Hugging Face|Hugging Face]] 在那次事件中就碰到了这个窘境，好在他们有开源基因，能回退到不受护栏约束的[[开放权重|开源权重]]模型来应急。<button class="pd-ts" data-t="03:45" data-who="Max Pollard" data-en="Now, for Hugging Face specifically, They had the luxury of having open-weight and open-source kind of in their DNA. And so they were able to, when they saw these cyber refusals or these guardrails being triggered, fall back to GLM 5.2 in their case, but could have been KMEK3 or a QEN model, something that isn't going to have those guardrails in place." aria-label="回原文"></button> 甚至还有离谱的误报：有款安全工具叫 Vectra，碰巧跟一种兽药同名，安全人员用它时就触发了生物武器过滤器，直接被拒。<button class="pd-ts" data-t="05:27" data-who="Max Pollard" data-en="Now, as is the case with any kind of guardrail-based system, you will run into false positives, right? We noticed a very fun one maybe a quarter ago where there's a security tool out there called Vectra." aria-label="回原文"></button>

## 签名和行为检测为什么都撑不住了

传统的安全防御经历了两代：第一代靠[[签名|签名]](已知攻击的特征码)，第二代靠[[行为检测|行为检测]](先定义软件"正常"该怎么跑，再抓异常)。这两代在智能体面前都在崩塌。<button class="pd-ts" data-t="15:11" data-who="Nick Warner" data-en="For sure. And if you look at the evolution of cyber defenses, it went from signature-based approaches to dynamic behavior-based approaches. But at the end of the day, those behavior-based approaches made one sort of upfront bet, which is you could determine how software should behave, and you would look for anomalous behavior against that." aria-label="回原文"></button>

签名已经没用了。智能体的攻击方式不是固定的恶意代码，而是通过精心构造的提示词让模型做坏事——这属于全新的攻击类别，没有签名可匹配。<button class="pd-ts" data-t="07:05" data-who="Nick Warner" data-en="But there's also sort of the I'm going to use a payload that gets the model to do something malicious, right? And that's sort of like the category of attacks that are completely new." aria-label="回原文"></button> <button class="pd-ts" data-t="13:22" data-who="Max Pollard" data-en="Things like using static detection rules for everything. Signatures are probably dead. It's great for the minefield." aria-label="回原文"></button>

行为检测也失效了。行为检测的前提是你能预定义软件的正常行为，但智能体软件的行为本身就是不可预测的——它根据上下文自主决定下一步做什么，你没法提前画出一个"正常"的边界。<button class="pd-ts" data-t="15:18" data-who="Nick Warner" data-en="And if you look at the evolution of cyber defenses, it went from signature-based approaches to dynamic behavior-based approaches. But at the end of the day, those behavior-based approaches made one sort of upfront bet, which is you could determine how software should behave, and you would look for anomalous behavior against that." aria-label="回原文"></button> 以前的安全假设是"通过发布者和设计意图就能知道软件会做什么"，这个假设永远过去了。<button class="pd-ts" data-t="16:07" data-who="Nick Warner" data-en="And believe it or not, like... From a security perspective, most of those questions aren't currently answered because there was this assumption that you could know what software would do by its publisher or by its intended design." aria-label="回原文"></button>

连比较新的欺骗技术(比如在开发者设备上放假的 AWS 密钥当蜜罐)也被智能体搞坏了：销售代表让智能体部署东西，智能体自己去找 AWS 密钥，正好找到蜜罐，欺骗系统就报了一堆假警报。<button class="pd-ts" data-t="13:57" data-who="Max Pollard" data-en="And then even some of the more modern techniques like deception, right, that work really well, you know, we're starting to see problems with, right? Hey, you know, there's a honeypot on a developer's device that contains AWS keys." aria-label="回原文"></button>

## 智能体涌入企业：攻击面爆炸

到今年年底，50% 的企业应用将具备智能体特征，剩下的一半明年也会赶紧跟上。<button class="pd-ts" data-t="10:28" data-who="Nick Warner" data-en="Yeah, and the thing we're really starting to see, which is wild to think about, is companies now for the last year, from a cybersecurity defender perspective, have really been obsessing over how do I lock down software from the AI labs companies, which do great things, but also introduce new risk." aria-label="回原文"></button> 平均一家企业环境里有六七千个独立的软件片段，想象一下几千个软件实例在未来几年内全部变成智能体——而且企业对这些智能体用了什么后端模型、设了什么护栏，几乎没有任何审查和理解。<button class="pd-ts" data-t="10:50" data-who="Nick Warner" data-en="And there's even less vetting and understanding around what agentic processes, what backend AI models they're going to be using, what guardrails they install and put in." aria-label="回原文"></button> 问题只会更复杂。

对蓝队来说，另一个现实困境是模型选择。现在大概三条路：锁死单一模型提供商(比如用 Codex 或 Claude Code)、买传统厂商加个 AI 壳(模型支持不透明)、或者自己托管开源权重(一块 H100 一年 25 万美元，大多数团队负担不起)。<button class="pd-ts" data-t="08:47" data-who="Max Pollard" data-en="And so... Today, those teams have probably two or three options, right? You can roll with Codex or Claude Code and lock yourself into a specific model provider." aria-label="回原文"></button> 蓝队真正需要的是灵活性——能快速切换模型、在新模型发布时有升级路径，同时清楚知道什么会变好、什么需要调整。<button class="pd-ts" data-t="08:02" data-who="Max Pollard" data-en="And so is the value proposition you guys are working on, I get the refusals part of it and rounding around kind of the refusals, but it's also making sure you pick the right tool for the job." aria-label="回原文"></button>

## 防御者的新武器

不过也不是全盘被动。同样的 AI 能力也在给防御者赋能。

[[NEO|NEO]] 如果在五七年前做现在的事，得雇几百个威胁研究员、花几年建软件分类体系；现在用数千个智能体自动化执行，几周几个月就搞定了。<button class="pd-ts" data-t="18:59" data-who="Nick Warner" data-en="And so it's really this dual prong mission that we're on. But for us as a company, if we were trying to build what we built five, seven years ago, we'd have to hire hundreds of threat researchers, spend years building out this taxonomy of software." aria-label="回原文"></button> 权力的天平最终会重新向防御者倾斜，只是现在还在剧变期。<button class="pd-ts" data-t="19:17" data-who="Nick Warner" data-en="We were able to do that in weeks and months. And so I think that's just sort of how reality plays out, is that the balance of power always sort of shifts back, I think, in the favor of the defender." aria-label="回原文"></button>

这就像当年第一批漏洞扫描工具出现，催生了"脚本小子"(下载现成工具就能去黑人的新手)一样——AI 正在把攻击门槛压到新低，但同时也给了防御者以前根本建不出来的工具。<button class="pd-ts" data-t="19:29" data-who="Max Pollard" data-en="But we're going through that sea change right now. Absolutely. I mean, to me, it feels like, you know, way back when the first vulnerability scanning tools were coming out." aria-label="回原文"></button> 一个有点讽刺的处境是：我们在防御 AI，也在防御来自 AI 的攻击，双线作战。<button class="pd-ts" data-t="18:51" data-who="Nick Warner" data-en="But I think, you know, even for us at NEO, what's really interesting is that the tools we're being provided with from the AI labs and frontier models give us incredible armament in building the right type of tools to defend." aria-label="回原文"></button>

## 本集带走
- **蓝队问的问题跟攻击者一样**：防御者分析漏洞时触发模型护栏是真实痛点，解法是保持模型选择的灵活性，能回退到不受限制的开源模型。
- **签名已死，行为检测的前提被推翻**：智能体软件行为不可预测，"先定义正常再抓异常"这条路走不通了，需要全新的防御范式。
- **连蜜罐都会被智能体"误踩"**：智能体会自主寻找资源(比如密钥)，导致欺骗类安全工具产生大量误报，这不是配置问题，是根本性的冲突。
- **企业智能体化速度远超安全团队的审查能力**：六七千个软件片段即将变成智能体，但对它们用了什么模型、有什么护栏几乎零可见——可见性和控制权是下一步的关键。
- **AI 同时是攻击面的创造者和防御工具的赋能者**：防御者用智能体自动化构建安全能力(如软件分类)，能以前所未有的速度和规模做以前做不到的事。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">我们在捍卫 AI，同时也在防御 AI。</span>  
> *We're defending AI and we're also defending from AI.*  
> <span class="qm">—— Nick Warner · [00:37]</span> ^q1

> <span class="qz">我们似乎正在速通之前发生过的每一个技术周期。</span>  
> *We seem to be speedrunning every technology cycle that's ever happened before this one.*  
> <span class="qm">—— Joel de la Garza · [00:51]</span> ^q2

> <span class="qz">是的，你知道，我认为我们最近读到的很多事情体现的就是，在模型的思维中，目的证明手段是正当的。</span>  
> *Yeah, you know, and I think what a lot of these things that we've read about recently embody is the end justifies the means in the mind of the model.*  
> <span class="qm">—— Nick Warner · [07:08]</span> ^q3

> <span class="qz">我认为人们已经了解到，无论 AI 实验室在这些东西周围设置了什么护栏，你都不能依赖模型来阻止自己或理解上下文。</span>  
> *And I think what people have learned is that regardless of guardrails that the AI labs are putting around these things, you can't rely on models to stop themselves or to understand context.*  
> <span class="qm">—— Nick Warner · [07:16]</span> ^q4

> <span class="qz">签名大概已经死掉了。</span>  
> *Signatures are probably dead.*  
> <span class="qm">—— Joel de la Garza · [13:22]</span> ^q5

> <span class="qz">但认为你能达到零漏洞也是一种失败的方法。</span>  
> *But to think that you're going to get to zero there is also kind of a failed approach.*  
> <span class="qm">—— Max · [13:42]</span> ^q6

> <span class="qz">但归根结底，那些基于行为的方法做了一个 upfront 的赌注，即你可以确定软件应该如何表现，然后你会寻找针对那个的异常行为。</span>  
> *But at the end of the day, those behavior-based approaches made one sort of upfront bet, which is you could determine how software should behave, and you would look for anomalous behavior against that.*  
> <span class="qm">—— Nick Warner · [15:18]</span> ^q7

> <span class="qz">从安全角度来看，这些问题大多目前还没有答案，因为以前有一个假设，即你可以通过软件的发布者或其预期设计来知道软件会做什么。</span>  
> *From a security perspective, most of those questions aren't currently answered because there was this assumption that you could know what software would do by its publisher or by its intended design.*  
> <span class="qm">—— Nick Warner · [16:07]</span> ^q8

> <span class="qz">所以我认为这大概就是现实的演绎方式，权力的天平总是会转移回，我认为，有利于防御者的一方。</span>  
> *And so I think that's just sort of how reality plays out, is that the balance of power always sort of shifts back, I think, in the favor of the defender.*  
> <span class="qm">—— Nick Warner · [19:17]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 安全」挖下去**

- [[2026-07-30-practicalai-reconstructing-how-openai-agents-attacke|OpenAI 智能体越狱攻入 Hugging Face 全始末]]<span class="pd-rz">同公司:Hugging Face · 同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-07-26-a16z-ben-horowitz-the-fight-over-open-source|Ben Horowitz 谈开源 AI 保卫战:没有垄断,才有安全]]<span class="pd-rz">同公司:Hugging Face · 同概念:开源权重 (open weights)、护栏 (guardrails)</span>
- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-06-a16z-how-open-source-ai-became-critical-infra|开源模型没差距，缺的是让它跑起来的基础设施]]<span class="pd-rz">同公司:Hugging Face · 同概念:护栏 (guardrails)、推理 (inference)、智能体 (agent)</span>
- [[2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi|DevOps 之父谈智能体开发：谁来管、怎么管、别踩什么坑]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-07-08-latent-space-modal|不只做推理：Modal 如何跨界多节点训练与智能体云]]<span class="pd-rz">同概念:推理 (inference)、智能体 (agent)</span>

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
