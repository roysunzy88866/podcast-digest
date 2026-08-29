---
title: 微软 CTO 谈智能体网络：MCP 就像 AI 时代的 HTTP
podcast: "AI & I"
date: 2026-08-12
source_url: undefined
duration: "28:01"
type: episode
cover: "#64748b"
description: Kevin Scott 系统阐述智能体网络的架构、安全与软件工艺的未来。
host: "[[Kevin Scott]]"
companies: ["[[Microsoft]]"]
concepts: ["[[智能体]]", "[[智能体网络]]", "[[MCP]]", "[[康威定律]]"]
category: 智能体
tags:
  - 智能体
  - 产品方法
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-12-aiandi-microsoft-s-vision-for-an-internet-made#post","headline":"微软 CTO 谈智能体网络：MCP 就像 AI 时代的 HTTP","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-12-aiandi-microsoft-s-vision-for-an-internet-made","mainEntityOfPage":"https://talk.solomind.cc/2026-08-12-aiandi-microsoft-s-vision-for-an-internet-made","description":"Kevin Scott 系统阐述智能体网络的架构、安全与软件工艺的未来。","datePublished":"2026-08-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Kevin Scott"},{"@type":"Organization","name":"Microsoft"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体网络 (agentic web)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"康威定律 (Conway)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"微软 CTO 谈智能体网络：MCP 就像 AI 时代的 HTTP","item":"https://talk.solomind.cc/2026-08-12-aiandi-microsoft-s-vision-for-an-internet-made"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>微软 CTO 谈智能体网络：MCP 就像 AI 时代的 HTTP</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 微软 CTO 谈智能体网络：MCP 就像 AI 时代的 HTTP

<div class="pd-byl"><b>Kevin Scott</b> · 微软 CTO · 2026-08-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-12-aiandi-microsoft-s-vision-for-an-internet-made.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">你知道，有个叫 Conway 的人说过，编译器中的阶段或处理步骤的数量将由你参与编译器工作的团队数量来决定。</div><div class="a">— Kevin Scott <button class="pd-ts" data-t="07:30" data-who="Kevin Scott" data-en="you know, this guy Conway said that the number of stages or passes in your compiler is going to be dictated by the number of teams you have working on the compiler." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Kevin Scott]]
>
> **公司** [[Microsoft]]
>
> **概念** [[智能体]] · [[智能体网络]] · [[MCP]] · [[康威定律]]

微软的 CTO 认为，随着[[智能体|智能体]]数量的爆发，真正的问题已经从模型推理能力，转移到如何为智能体建立一个像互联网一样运作的生态系统。在这个生态里，智能体需要拥有持久的记忆，更要能代替你使用工具、去各大系统里查询信息或做出改动。

为了让这一切真正发生，必须有统一的标准协议来支撑 <button class="pd-ts" data-t="03:53" data-who="Kevin" data-en="We've just discovered as all of these agents have emerged over the past year and so like both the number of agents and like the amount of time that people are spending doing stuff inside of these agents or with these agents is that there's a bunch of other stuff other than reasoning that has to get sorted out in order to make them as useful as they should be so you know the things that i was talking about um" aria-label="回原文"></button>。这正是他在微软内部大力推动底层系统改造的根本原因。

## 建设智能体网络：MCP 是智能体时代的 HTTP
去年行业的焦点还集中在缩放定律（认为模型越大性能越好）上，事实证明这些定律今天依然在起作用。但今年的核心已经变成了「[[智能体网络|智能体网络]]」(agentic web) <button class="pd-ts" data-t="03:11" data-who="Kevin" data-en="Thank you so much for joining us. And then the other thing, too, is that... We've just discovered as all of these agents have emerged over the past year and so like both the number of agents and like the amount of time that people are spending doing stuff inside of these agents or with these agents is that there's a bunch of other stuff other than reasoning that has to get sorted out in order to make them as useful as they should be so you know the things that i was talking about um" aria-label="回原文"></button>。

智能体若想真正有用，它得有身份，能去查询一堆系统并声明：「为了完成你交代的这件事，我需要接触这些系统，请求这些权限。」<button class="pd-ts" data-t="10:56" data-who="Kevin" data-en="So, like, we need agents to have identities so that you can build entitlement systems so you can say this agent is acting on behalf of this person and like they are entitled to see these resources in this system." aria-label="回原文"></button>。

这就要求所有系统的激励必须对齐。Kevin 认为，就像 HTTP 协议奠定了早期互联网的基础，[[MCP|MCP]] 正在智能体网络中发挥一模一样的作用 <button class="pd-ts" data-t="05:27" data-who="Kevin" data-en="And so I think that is the big story this year. It's like you've seen the first glimmers of like real progress with like super awesome, simple open protocols like MCP that are serving the same purpose in this agentic web as HTTP does on the Internet and where you have." aria-label="回原文"></button>。

MCP（一种简单的开放协议）解决了一个至关重要的问题：它让内容提供方能轻易把自己的网站或 API 接入智能体，也让平台方不必重复造轮子。

## 打破组织架构的壁垒
一旦缺乏标准协议和服务，组织内部的开发就会陷入低效。Kevin 引用了著名的[[康威定律|康威定律]]：编译器里的处理步骤数量，往往取决于你们有多少个参与开发的团队——你最终交付的其实是你的组织架构图 <button class="pd-ts" data-t="07:30" data-who="Kevin" data-en="All of these things are very, very, very important. You know, this guy Conway said that the number of stages or passes in your compiler is going to be dictated by the number of teams you have working on the compiler." aria-label="回原文"></button>。

他在微软内部极力推动所有系统讲同一种标准协议，就是为了让公司数千名开发者在构建企业智能体时，不至于因为部门壁垒而交付出一个极其割裂的产品 <button class="pd-ts" data-t="07:12" data-who="Kevin" data-en="And like, even if you sort of scope it down narrowly to enterprise agents, like one of the things as CTO that I've been pushing for at Microsoft is like, I want all of our" aria-label="回原文"></button>。

## 关于开放与安全的伪命题
有人质疑，MCP 这样的开放系统缺乏像互联网「同源策略」那样的原生安全机制，无法像封闭的应用商店那样保证安全。

Kevin 直言这是一种错误的二分法 <button class="pd-ts" data-t="12:50" data-who="Kevin" data-en="I think it might be a false dichotomy. There is, you know, like a thing that you have in these open systems where they are permissionless. And like there's a real advantage in having permissionless innovation." aria-label="回原文"></button>。开放系统的最大红利，是创造者无需任何人的许可就能把创新分发给受众，去掉了复杂的把关人 <button class="pd-ts" data-t="13:09" data-who="Kevin" data-en="So like the thing that... As an individual that excites me most about what's happening right now is the extent to which you can go innovate and build things without having to seek someone's permission, where you have to have them grant you permission for distributing your things to other people and having all of these complicated gatekeeping things that are sitting in between you who are the person who had the idea and the people who might benefit from it." aria-label="回原文"></button>。他认为，利用现有的 AI 能力，你完全可以在开放系统中拥有强大的安全性——比如当智能体察觉到异常行为时，它可以调动多种通信方式和资源，去三角测量、判断这是合法还是非法操作 <button class="pd-ts" data-t="15:14" data-who="Kevin" data-en="We'll see you next time. Like, a whole bunch of your communication modalities, like being able to, like, notice that something funky is going on and then, like, you know, using a bunch of resources to triangulate, like, whether that's legit activity or illegitimate activity." aria-label="回原文"></button>。

## 软件工程的技艺与选择
作为写了 41 年代码的老程序员，同时也是个老木匠，Kevin 对「工艺」有极深的执念。他认为，不管你是程序员还是木匠，只要热爱这事，就必然会对使用的工具和材料有极其强烈的看法 <button class="pd-ts" data-t="16:49" data-who="Kevin" data-en="I love the fact that my people, and like when I say my people, I mean makers writ large, so software engineers or mechanical engineers or woodworkers or potters or, you know, just sort of pick your thing where people are trying to create things from raw materials or nothing." aria-label="回原文"></button>。

木工界至今还在争论用数控（CNC）工具的人算不算「真木工」，软件界也有类似的鄙视链。Kevin 承认自己极其固执，至今还在用极为古老的 VI 编辑器写代码，哪怕他深知这在拖慢效率——但他这么做的核心逻辑是：作为创造者，他有权选择看重过程还是看重结果 <button class="pd-ts" data-t="19:33" data-who="Kevin" data-en="But sometimes people are going to make different choices because they value something different than you do. If you value the process more than you value the outcome, sometimes you'll make" aria-label="回原文"></button>。有时你看重过程，就会固执己见；有时你只想尽快拿到结果，就会动用最强大的工具。

他的建议很简单：当工具发生变革时，保持开放心态。他曾因为各种复杂原因死活不愿学 3D 打印机，拖了很久，学会后深感后悔——因为这对几乎所有的制造工作都太有用了 <button class="pd-ts" data-t="20:24" data-who="Kevin" data-en="I can't even tell you the number of times where I have looked at a new technology in some other non-software dimension of making. That came along where I'm like, like, I don't want to learn, like 3D printers." aria-label="回原文"></button>。保持好奇，多去尝试，好用就用，不好用就不用 <button class="pd-ts" data-t="20:46" data-who="Kevin" data-en="And for a whole variety of complicated reasons, like I didn't let myself be curious about that, which is odd. And so, you know, just like be curious, try stuff. Like, and if it works for you, use it." aria-label="回原文"></button>。

## 智能体不会一家独大
针对未来会不会出现「一个智能体统御一切」的局面，Kevin 认为不可能，智能体注定会百花齐放 <button class="pd-ts" data-t="21:01" data-who="Kevin" data-en="Or, like, how do you see that ecosystem shaping up? Yeah, look, I think it's going to be a lot of different agents. I mean, like, and it's good to have a lot of agents." aria-label="回原文"></button>。

开发者的乐趣之一就在于拥有选择权，去尝试各种不同的工具，甚至做些非理性的组合。他预判，目前最有趣的初创公司，正是依靠对具体痛点的细腻理解去打造专用智能体产品。只要你对用户的问题理解足够透，用户对你的容错率其实非常高 <button class="pd-ts" data-t="23:36" data-who="Kevin" data-en="Thank you for watching. Like, what we've seen is if you've got some kind of nuanced understanding of what someone needs, like, people have, like, high tolerance and, like, high interest in, like, giving things a try." aria-label="回原文"></button>。

## 一年后的预测：别拿成本当借口观望
距离上一届 Build 大会仅仅过了一年，如果你还在拿「技术还不够好、稍微有点贵」当借口推迟入场，一年后你将被远远甩在身后。因为每一年，所有的能力都在变强，所有的成本都在变得更低 <button class="pd-ts" data-t="24:31" data-who="Kevin" data-en="Yeah, I think people who are still like hanging on to these ideas that, oh, like the technology is not ready yet because like I, you know, I tried to do something and it was like marginally too expensive or like it was marginally capable of doing the thing that I wanted to do." aria-label="回原文"></button>。

到明年，智能体的使用范式也会发生质变。现在人们还是输入提示词然后干等结果；到明年，你可以直接让智能体「去把这事搞定」。

它会自动去调用外部系统、等待响应、完成多轮整合，可能在一段不短的时间后，才回来告诉你：「这是我目前做到的程度，接下来交给你了。」 <button class="pd-ts" data-t="26:06" data-who="Kevin" data-en="Thank you so much for joining us. Right now, most of what people do is like they sort of sit down like they got a thing they want to do, like they issue the prompts like and they wait until, you know, the thing comes back and like, you know, do something with that response." aria-label="回原文"></button>

## 本集带走
- **底层逻辑对标互联网**：智能体网络要真正运转，需要像 HTTP 对互联网那样的标准协议支撑，目前 MCP 正在承担这个历史角色。
- **警惕组织架构外溢**：如果没有统一协议，各部门闭门造车，你交付的产品架构最终只会镜像公司的组织架构图（康威定律）。
- **开放与安全不冲突**：开放系统的无需许可能带来最大创新；通过赋予 AI 去跨模态验证异常行为，开放架构同样能实现强大的安全性。
- **分清过程与结果**：对工具有强烈偏好是工匠的本能，但必须想清楚你在乎的是打磨过程，还是拿到最终结果，据此选择合适的工具。
- **对新工具保持开放**：不要因为傲慢或偏见拒绝新工具，早拥抱像 3D 打印、AI 辅助编程这类变革性技术，能极大提升产出。
- **别拿成本当观望借口**：技术的性价比每年都在跃升，现在以「太贵、不够完美」为由拒绝入局，一年后将被彻底甩开。

<div class="pd-sec">全部金句 <span>5 条</span></div>

> <span class="qz">你知道，有个叫 Conway 的人说过，编译器中的阶段或处理步骤的数量将由你参与编译器工作的团队数量来决定。</span>  
> *you know, this guy Conway said that the number of stages or passes in your compiler is going to be dictated by the number of teams you have working on the compiler.*  
> <span class="qm">—— Kevin Scott · [07:30]</span> ^q1

> <span class="qz">作为个人，现在发生的事情中最让我兴奋的是，你可以去创新和构建东西而无需寻求某人许可的程度。</span>  
> *As an individual that excites me most about what's happening right now is the extent to which you can go innovate and build things without having to seek someone's permission,*  
> <span class="qm">—— Kevin Scott · [13:09]</span> ^q2

> <span class="qz">我确切知道那样做是在次优化我做事情的一部分，但我还是做了这个决定，因为我可以自己选择。</span>  
> *I know for sure that that is sub-optimizing a part of what I'm doing, but I make the decision anyway because I get to choose.*  
> <span class="qm">—— Kevin Scott · [18:13]</span> ^q3

> <span class="qz">我认为任何把这些当作等待开始的借口的人，都将远远落后，因为一切都会变得更便宜，一切都会变得更有能力，每一年都是如此。</span>  
> *I think anyone who is using those as excuses to wait to get started are going to be super behind because everything's going to get cheaper and everything's going to get more capable every year.*  
> <span class="qm">—— Kevin Scott · [24:32]</span> ^q4

> <span class="qz">你某种程度上是在押注失败，而押注失败与押注乐观的成本相比，那里的差别真的很大。</span>  
> *You're sort of betting on failure and the cost of betting on failure versus betting on optimism is a real big difference there.*  
> <span class="qm">—— Kevin Scott · [25:21]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2025-10-26-lennys-how-block-is-becoming-the-most-ai-native|Block CTO：代码质量与产品成功毫无关系，打造 AI 原生公司靠的是组织重组]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>
- [[2026-06-03-latent-space-satya-2026|Satya Nadella:别只盯着模型,私有评估和智能体才是企业的护城河]]<span class="pd-rz">同公司:Microsoft · 同概念:智能体 (agent)</span>
- [[2026-07-13-pg-the-complete-claude-stack-for-pms|产品经理驾驭 Claude 生态：用五层架构打造专属 AI 幕僚长]]<span class="pd-rz">同概念:MCP、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-20-twentyvc-20vc-spacex-buys-cursor-for-60bn-stripe|SpaceX 600亿买Cursor：AI并购的疯狂逻辑]]<span class="pd-rz">同公司:Microsoft · 同概念:智能体 (agent)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同概念:智能体 (agent)、缩放定律 (scaling laws)</span>
- [[2026-02-15-lennys-sequoia-ceo-coach-why-its-never-been|Brian Halligan：CEO 的实战手册]]<span class="pd-rz">同公司:Microsoft · 同概念:智能体 (agent)</span>

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
