---
title: 每天 1000 个注册用户撑不住人工客服：Assembly AI 造了个「数字员工」Joey
podcast: 精选演讲
date: 2026-10-07
source_url: undefined
duration: "16:08"
type: episode
cover: "#64748b"
description: "Assembly AI 前置部署工程师 Matt Lawler 讲述如何用 Claude Agent SDK 打造解决 80% 工单的 AI 支持机器人 Joey。"
host: "[[Matt Lawler]]"
companies: ["[[Assembly AI]]", "[[Railway]]"]
concepts: ["[[Joey]]", "[[前向部署工程师]]", "[[语音智能体]]", "[[Claude Agent SDK]]", "[[RAG]]", "[[ClaudeMD]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-04-talks-we-built-an-ai-support-agent-that-resolv#post","headline":"每天 1000 个注册用户撑不住人工客服：Assembly AI 造了个「数字员工」Joey","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-04-talks-we-built-an-ai-support-agent-that-resolv","mainEntityOfPage":"https://talk.solomind.cc/2026-10-04-talks-we-built-an-ai-support-agent-that-resolv","description":"Assembly AI 前置部署工程师 Matt Lawler 讲述如何用 Claude Agent SDK 打造解决 80% 工单的 AI 支持机器人 Joey。","datePublished":"2026-10-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Matt Lawler"},{"@type":"Organization","name":"Assembly AI"},{"@type":"Organization","name":"Railway"},{"@type":"Thing","name":"Joey"},{"@type":"Thing","name":"前向部署工程师 (Forward Deployed Engineer)"},{"@type":"Thing","name":"语音智能体 (voice agent)"},{"@type":"Thing","name":"Claude Agent SDK"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"ClaudeMD"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"每天 1000 个注册用户撑不住人工客服：Assembly AI 造了个「数字员工」Joey","item":"https://talk.solomind.cc/2026-10-04-talks-we-built-an-ai-support-agent-that-resolv"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>每天 1000 个注册用户撑不住人工客服：Assembly AI 造了个「数字员工」Joey</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 每天 1000 个注册用户撑不住人工客服：Assembly AI 造了个「数字员工」Joey

<div class="pd-byl"><b>Matt Lawler</b> · Assembly AI 前置部署工程师 · 2026-10-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-04-talks-we-built-an-ai-support-agent-that-resolv.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我鼓励你把你作为前置部署工程师所掌握的知识拿来,尝试把自己从这份工作中自动化出去。</div><div class="a">— Matt Lawler <button class="pd-ts" data-t="03:57" data-who="Matt Lawler" data-en="I would encourage you to take that knowledge that you have as an FTE and try to automate yourself out of a job." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Matt Lawler]]
>
> **公司** [[Assembly AI]] · [[Railway]]
>
> **概念** [[Joey]] · [[前向部署工程师]] · [[语音智能体]] · [[Claude Agent SDK]] · [[RAG]] · [[ClaudeMD]]

每天大约有 1,000 个新客户注册你的 API,而你只有一个入职工程师——这是 [[Assembly AI|Assembly AI]](一家做语音 AI 基础设施的公司,训练自己的语音转文字模型,Fireflies 之类的会议记录工具用的就是他们的转写)当时面临的处境。

说这话的是 [[Matt Lawler|Matt Lawler]],Assembly AI 的[[前向部署工程师|前置部署工程师]](Forward Deployed Engineer,一种深入客户现场、直接在客户代码仓库里提交代码、负责从技术到商务全流程的角色)。

至少在演讲两天前,他还是公司唯一的 onboarding 工程师。「尽管我很想每天和 1,000 个新注册用户都聊一聊,但这根本不可行。」<button class="pd-ts" data-t="02:29" data-who="Matt Lawler" data-en="So Assembly, at our current moment, we see around 1,000 API signups every single day, which is somewhat of the theme of why we were focusing on automation and wanting to build kind of a new support bot for our team, because at least until like two days ago, I was the only onboarding engineer at Assembly AI." aria-label="回原文"></button>

他的解法不是招人,而是造了一个「团队成员」:一个叫 [[Joey|Joey]] 的 AI 支持机器人。

结果相当惊人——上线第一周,端到端解决率就从 10% 冲到 80%,每月成本只有大约 700 美元的 token 和基础设施费。

更关键的是这个数字没有注水:「除非你经过 Joey 并让他升级,否则你无法直接联系到人工。

所以他现在实际上为我们处理 100% 的入站工单。」

<button class="pd-ts" data-t="08:38" data-who="Matt Lawler" data-en="You cannot reach a human directly unless you go through Joey and you tell him to escalate. So he actually does handle 100% of these inbound tickets for us now. And he only escalates 20% of them to a human for the right reasons." aria-label="回原文"></button> 只有 20% 的对话会升级给真人,而且升级的理由都是真正需要人的:费率变更、数据退出、签协议这类需要法务介入的事。

## 先买现成的,为什么不行的教训

团队最初的直觉和很多公司一样:买个现成的支持机器人,指向文档,让它替我们回答简单问题。

结果它只解决了约 10% 的对话——一天 1,000 个对话,机器人接管 100 个,团队仍要处理 900 个工单。

更要命的是没法迭代:拿不到 system prompt、拿不到工具、拿不到 [[RAG|RAG]](检索增强生成,让模型先搜资料再回答)基础设施,每次要改点什么,供应商就回一句「这个在路线图上」。

所以「我们想自己造一个」<button class="pd-ts" data-t="05:15" data-who="Matt Lawler" data-en="And that didn't quite work for us. So we wanted to build our own. So we built another member of our team rather than hiring one, and we named him Joey." aria-label="回原文"></button>。

## Joey 的架构:四块拼图

Joey 构建在 [[Claude Agent SDK|Claude Agent SDK]] 之上,能管理自己的基础设施、有文件系统、能写代码和调试、能调用工具、甚至能给自己增加新能力——所以他更像一个 FDE 在运作,而不是主流网站上那种标准聊天机器人。

架构有四个主要部分:

1. **文档即本地 Markdown。** 用过 Claude 的人都知道 Markdown 是它的好朋友。团队把全部文档以 Markdown 形式检出进仓库,每次文档系统更新,文件自动同步给 Joey——新功能、变更日志、定价、网站主要页面全都包含。一个副产品:就算整个文档站挂了,客户找 Joey 依然能拿到最新内容的实时解答。而且 Joey 能看到每个文件的 URL,可以给客户引用来源,方便对方复核。

2. **检索用 Voyage 的嵌入。** 让 Joey 一开始就拿到最相关的文档,不用花时间搜索、能更快给出答案。因为文档全在本地,遇到需要串联多个资源的问题,他还能以智能体方式深度搜索自己的文件系统。

** 里面全是护栏和「如何与客户打交道」的建议。

每次发现 Joey 体验不好或答错了,团队就大规模更新这个文件——「之后在他进行的每一次对话中,他都能表现得更好。」

<button class="pd-ts" data-t="11:49" data-who="Matt Lawler" data-en="And this is what we majorly update whenever we see that he had a bad experience with a customer or gave a wrong answer. We ship an update to this ClaudeMD, and now for every conversation that he has going forward, he's able to be better." aria-label="回原文"></button> 这是他们主要的迭代手段。

4. **部署在 [[Railway|Railway]] 上,追求迭代速度。** 不想起 EC2、不想换实例类型,全扔给 Railway:发现 Joey 在 Slack 上有糟糕对话,快速写个 PR 部署,30 秒内新版本上线。Matt 说他们有过这样的经历:实时监控一场对话、发现 bug、部署修复,同一会话的剩余部分已经被修复版验证——客户根本不知道幕后发生了什么。

## 造出来之后:不能做的事就是路线图

Joey 做不到的事,反过来给了团队一张极清晰的扩展清单。他不能发 BAA(医疗数据的商业伙伴协议)?给他一个可参考的链接。

他不能谈定价?现在可以直接跟 Joey 谈判——你告诉他你需要多少小时,他会真给你报一个费率,然后你可以跟他砍价。

团队在持续把这些升级项逐个自动化。

## 元层面:用 Joey 吃自己的狗粮

造 Joey 还有一个目的:Assembly 做语音,客户构建[[语音智能体|语音智能体]],那 Joey 本身就该是个语音智能体。

本周他们把自家的语音智能体 API 集成进了 Joey——语音进、语音出,一条 WebSocket 连接串起语音转文字、LLM、文字转语音,实时低延迟,自动处理停顿、打断、插话,还自带语音不用另找供应商。

现场演示里,Matt 用语音问 Joey「我要做医疗记录产品,得先签 BAA,你能办吗」,Joey 查完给出完整回答:可以自己签标准协议,但需要先有绑定卡片的付费账户,且签了会自动退出模型训练——这种对话在两年前必须由真人处理,客户还得等一条模板回复。

Matt 认为这里面有一层对 FDE 特别重要的东西:理解客户在构建什么的最好方式,是自己亲手构建同样的产品。

「我撞过完全相同的墙……我必须搞清楚如何处理延迟、轮次转换、打断处理。

我对如何与想用我们语音智能体 API 的客户合作,有了好得多的同理心,因为我真的用过它。」

<button class="pd-ts" data-t="14:48" data-who="Matt Lawler" data-en="Any new feature that you launch, any new product that you offer, you need to be teaching your customers with all the knowledge that you've built from actually using and building and trying to ship the same product." aria-label="回原文"></button> 你在跟 Joey 聊怎么构建语音智能体时,你已经在体验这个产品本身了。

他的收尾建议:如果你是 FDE,试着独立构建你的客户正在构建的完全相同的产品,别只是等他们来求助、等着替他们清障。

同时,把每天接不住的客户需求自动化掉——「你不该成为良好客户体验的瓶颈」<button class="pd-ts" data-t="04:12" data-who="Matt Lawler" data-en="If you want to serve your customers better, if you want to work with them more, and if you want to deliver a better customer experience at scale, you can't be the bottleneck to having a good customer experience." aria-label="回原文"></button>,而你暂时自动化不了的部分,就是你团队下一步该做什么的清单。

## 本集带走

- **先自建再优化**:现成支持机器人只解决 10% 的对话,且拿不到 system prompt、工具和 RAG 就无法迭代;自己造才有完全控制权。Joey 用 Claude Agent SDK 搭建,第一周就把解决率做到 80%,月成本约 700 美元。
- **把业务知识喂成 Markdown 文件**:全部文档本地检出、自动同步,再加一个约 30,000 行的 [[ClaudeMD|ClaudeMD]] 记录护栏和踩坑经验——每次答错就更新它,让之后所有对话都变好。
- **部署平台选「改起来最快」的**:Railway 上写完 PR 30 秒上线,快到可以边看对话边修 bug,客户无感。
- **机器人做不到的事 = 你的路线图**:不能发 BAA 就给它链接,不能谈价就给它报价逻辑;升级给人工的 20% 就是下一批要自动化的清单。
- **FDE 要亲手造客户造的东西**:自己撞一遍延迟、打断处理的墙,才能给客户真正有用的建议——而且顺手做出了产品演示。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">我鼓励你把你作为前置部署工程师所掌握的知识拿来,尝试把自己从这份工作中自动化出去。</span>  
> *I would encourage you to take that knowledge that you have as an FTE and try to automate yourself out of a job.*  
> <span class="qm">—— Matt Lawler · [03:57]</span> ^q1

> <span class="qz">如果你想规模化交付更好的客户体验,你就不能成为良好客户体验的瓶颈。</span>  
> *If you want to deliver a better customer experience at scale, you can't be the bottleneck to having a good customer experience.*  
> <span class="qm">—— Matt Lawler · [04:07]</span> ^q2

> <span class="qz">于是我们「造」了另一个团队成员而不是去雇一个,我们给他起名叫 Joey。</span>  
> *So we built another member of our team rather than hiring one, and we named him Joey.*  
> <span class="qm">—— Matt Lawler · [05:18]</span> ^q3

> <span class="qz">如果我们整个文档网站现在挂了,你也可以去找 Joey,仍然能得到关于我们最新发布内容的实时解答,而无需我们团队真正介入。</span>  
> *If our entire doc site was down right now, you could go to Joey and still get live answers on all the newest stuff that we've shipped without our team having to actually get involved.*  
> <span class="qm">—— Matt Lawler · [06:46]</span> ^q4

> <span class="qz">实际上有几次,我们实时监控一场对话,发现了一个 bug,部署了修复,然后在会话的剩余时间里它就被验证有效了,而那个客户甚至不需要知道我们在幕后发布了那个修复。</span>  
> *We've actually had times where we've actually monitored a live conversation, caught a bug, deployed a fix, and then it's been proved for the rest of the session, and that customer doesn't even have to know that we shipped that fix behind the scenes.*  
> <span class="qm">—— Matt Lawler · [07:42]</span> ^q5

> <span class="qz">在部署这个构建的第一周内,我们就把端到端解决率从 10% 提升到了 80%,而且用的是相当朴素的实现。</span>  
> *So we went from 10% to 80% end-to-end resolution rate in just the first week of deploying this build with a pretty naive implementation.*  
> <span class="qm">—— Matt Lawler · [08:09]</span> ^q6

> <span class="qz">而且我们总共只花了大约每月 700 美元的 token 和基础设施成本就做到了这一切。</span>  
> *And we did that all for around $700 a month in both token and infrastructure costs.*  
> <span class="qm">—— Matt Lawler · [08:17]</span> ^q7

> <span class="qz">最好的部分是,Joey 还不能做到的事情,为我们提供了一个非常清晰的清单,告诉我们需要做什么才能继续扩展我们的团队。</span>  
> *And so the best part is whatever Joey can't do yet gives us a very clear list of what we need to do to continue to scale our team.*  
> <span class="qm">—— Matt Lawler · [08:57]</span> ^q8

> <span class="qz">理解你的客户在构建什么,最好的方式就是你自己真正去构建他们的同样产品。</span>  
> *The best way to understand what your customers are building is to actually build their same product yourself.*  
> <span class="qm">—— Matt Lawler · [10:11]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-26-talks-long-horizon-agents-need-experiments-not|给 AI 村庄装上自动研究循环：长时程智能体的实验配方]]<span class="pd-rz">同概念:RAG、护栏 (guardrails)</span>
- [[2025-10-23-lennys-al-engineering-101-with-chip-huyen|Chip Huyen：别追 AI 新闻了，真正提升 AI 产品的是这些事]]<span class="pd-rz">同概念:RAG</span>
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|用 20 个 AI 智能体换掉 8 人销售团队：SaaStr 创始人的前沿实战]]<span class="pd-rz">同概念:前置部署工程师 (Forward Deployed Engineer)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-05-22-talks-mastering-claude-code-in-30-minutes|Claude Code 实战技巧：从提问到并行]]<span class="pd-rz">同概念:ClaudeMD</span>
- [[2025-09-14-lennys-the-ultimate-guide-to-aeo-ethan-smith|AEO实战指南：如何让产品出现在ChatGPT答案里]]<span class="pd-rz">同概念:RAG</span>
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|SaaS 不会死,PM 迎来黄金期:Dan Shipper 的 AI 工作预测]]<span class="pd-rz">同概念:前置部署工程师 (Forward Deployed Engineer)</span>

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
