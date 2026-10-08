---
title: 当AI智能体成为云的大客户：AWS CEO Matt Garman 谈2200亿美元的豪赌
podcast: The a16z Show
date: 2026-10-08
source_url: undefined
duration: "56:05"
type: episode
cover: "#64748b"
description: "AWS CEO Matt Garman 做客 a16z,聊2200亿美元资本开支、GPU 分配、自研芯片 Trainium,以及智能体如何重造云计算。"
host: "[[Raguraguram]]"
cohosts: ["[[Matt Garman]]"]
companies: ["[[AWS]]", "[[Amazon]]", "[[Anthropic]]", "[[OpenAI]]"]
concepts: ["[[智能体]]", "[[GPU]]", "[[Trainium]]", "[[Graviton]]", "[[Bedrock]]", "[[沙箱]]", "[[Firecracker]]", "[[推理]]", "[[评估]]", "[[护栏]]", "[[开放权重]]", "[[SageMaker]]", "[[尾部延迟]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-08-a16z-building-the-cloud-for-an-agentic-world#post","headline":"当AI智能体成为云的大客户：AWS CEO Matt Garman 谈2200亿美元的豪赌","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-08-a16z-building-the-cloud-for-an-agentic-world","mainEntityOfPage":"https://talk.solomind.cc/2026-10-08-a16z-building-the-cloud-for-an-agentic-world","description":"AWS CEO Matt Garman 做客 a16z,聊2200亿美元资本开支、GPU 分配、自研芯片 Trainium,以及智能体如何重造云计算。","datePublished":"2026-10-08","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Raguraguram"},{"@type":"Person","name":"Matt Garman"},{"@type":"Organization","name":"AWS"},{"@type":"Organization","name":"Amazon"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"OpenAI"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"GPU"},{"@type":"Thing","name":"Trainium"},{"@type":"Thing","name":"Graviton"},{"@type":"Thing","name":"Bedrock"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"Firecracker"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"评估 (eval)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"开放权重 (open weights)"},{"@type":"Thing","name":"SageMaker"},{"@type":"Thing","name":"尾部延迟 (tail latencies)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"当AI智能体成为云的大客户：AWS CEO Matt Garman 谈2200亿美元的豪赌","item":"https://talk.solomind.cc/2026-10-08-a16z-building-the-cloud-for-an-agentic-world"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当AI智能体成为云的大客户：AWS CEO Matt Garman 谈2200亿美元的豪赌</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 当AI智能体成为云的大客户：AWS CEO Matt Garman 谈2200亿美元的豪赌

<div class="pd-byl"><b>Matt Garman</b> · AWS CEO · 2026-10-08</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-08-a16z-building-the-cloud-for-an-agentic-world.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">它们实际上非常在意尾部延迟，这很有意思，因为人并不总是关心 P999 的 S3 延迟，但智能体确实在意，并且会被它卡住。</div><div class="a">— Matt Garman <button class="pd-ts" data-t="08:25" data-who="Matt Garman" data-en="They actually care a lot about tail latencies, which is interesting, where people don't always care about the P999 S3 latency, like agents do care and get blocked by that." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Raguraguram]] · [[Matt Garman]]
>
> **公司** [[AWS]] · [[Amazon]] · [[Anthropic]] · [[OpenAI]]
>
> **概念** [[智能体]] · [[GPU]] · [[Trainium]] · [[Graviton]] · [[Bedrock]] · [[沙箱]] · [[Firecracker]] · [[推理]] · [[评估]] · [[护栏]] · [[开放权重]] · [[SageMaker]] · [[尾部延迟]]

[[Matt Garman|Matt Garman]] 是 [[AWS|AWS]] 的 CEO。他 2005 年在商学院实习时就参与了 AWS 的早期分析项目，后来成为 EC2 的第一任总经理。

如今 AWS 已是规模庞大的云计算巨头，在这期 a16z 播客里，他罕见地详细谈了这家公司如何看待 AI 带来的巨变——从基础设施、芯片到组织方式。

> 【背景】AWS 当前年收入约 1690 亿到 1700 亿美元、增速约 37% 为公开财报数据，节目原文中未提及具体数字。

## 为什么说智能体的工作流在 AWS 上跑得更好?

Garman 的核心判断是:云的客户正在从人变成[[智能体|智能体]]。

过去开发者用图形界面点点点,现在越来越多的代码是智能体写的,数据库是智能体选的,部署也是智能体完成的。

这对云提出了新要求。

比如智能体特别在意尾延迟——S3 存储服务千分之一的极端慢请求,人类用户可能察觉不到,智能体却会被卡住。

再比如,智能体常常需要建一个数据库、用一下、马上销毁,传统为生产系统设计的五个九高可用在这里是过度设计。

他的说法是:「**智能体的工作流往往在 AWS 上跑得比任何地方都好**」<button class="pd-ts" data-t="00:39" data-who="嘉宾" data-en="We recently announced we're going to be buying 2 million NVIDIA GPUs over the next couple of years. You got CapEx the same as what, 200 or something? $220 billion for 26." aria-label="回原文"></button>。

为此 AWS 做了不少改造。以前注册账户要配信用卡、定义网络和权限,现在用 Gmail 就能登录,30 秒内可用,而且以后要扩展时不用迁移。

他们还在测试一个叫 AWS Context 的服务,帮智能体跨数据湖找数据。

## 智能体需要全新的积木

Garman 强调,这不只是把旧服务换个用法,而是要造全新的基础组件:计算[[沙箱|沙箱]]、网关、专门给智能体的权限体系。

你不能把管理员权限整个丢给一个智能体,而应该给它有时限、限定任务范围的细粒度权限。

有意思的是,AWS 十年前发明的轻量级虚拟机技术 [[Firecracker|Firecracker]],现在被大量沙箱创业公司使用——本来不是为智能体设计的,却意外地合适,因为它启动快、安全边界清晰。

## 头部实验室把 GPU 吃光了,小公司怎么办?

这是所有创业公司都在问的问题。答案很直接:AWS 是刻意不把货全部卖给大客户的。

「**我们本可以把每一个 [[GPU|GPU]] 都卖给头部实验室然后收工,但我们选择不这样做**」<button class="pd-ts" data-t="18:31" data-who="嘉宾" data-en="And so what we do is we actually do allocate and we basically say, okay, we're going to keep, you're right, we could sell every single GPU or AI accelerator we had to probably just the big frontier labs and call it a day." aria-label="回原文"></button>。

他估计,对收到的算力请求,AWS 最终会以某种形式对约 60% 说是——可能晚一点、换个区域、或换个配置。

关于泡沫的质疑,他有两点回应:一是 AWS 客户分散,单一客户占比是个位数百分比,不像某些新型云厂商集中在个别大客户;二是企业客户今天就已经在拿到正向回报,「你去问客户,几乎每个人都说,是的,有正回报」<button class="pd-ts" data-t="22:18" data-who="嘉宾" data-en="You go talk to the customers and you say, at the capability today and the cost today, are you seeing positive returns to your business? And almost to a person, they'll say like, oh yeah." aria-label="回原文"></button>。

## 瓶颈不是芯片,而是电力和盖楼的人

供应链的约束像打地鼠。「**从来不存在单一的约束,只有最新的那个约束**」<button class="pd-ts" data-t="27:23" data-who="嘉宾" data-en="And so it turns out there's never one constraint. There's always just the latest constraint. And so you have to think about all of them." aria-label="回原文"></button>。

这个月可能是电力,下个月可能是内存、HBM、台积电产能、网络部件,甚至连接器。

最有趣的变化是电力。

15 年前要更多电,跟电力公司要几十兆瓦就行;现在 AWS 得自己掏钱建电站——太阳能、核能项目都做,连续多年是全球最大的可再生能源采购方之一,规划要看 20 年。

盖数据中心的建筑工人也成了稀缺资源。

## 从网卡到 Graviton 再到 Trainium:自研芯片的故事

AWS 的芯片之路是一步步蹭出来的。

先是发现虚拟化开销太大,把网络虚拟化卸载到一张卡上;然后发现一家叫 Annapurna 的小公司,他们的卸载卡上有 ARM 核心,于是收购了这家公司,做出了 Nitro 卡,能理直气壮地告诉客户「我们无法访问你的虚拟机」。

后来干脆把卸载卡上的 ARM 核心做成服务器,就是 [[Graviton|Graviton]]。

它比同类便宜 20%、性能好 20%,前 100 大客户中 90% 以上都在用,有客户整体迁移后服务器数量减半。

AI 时代的答案是 [[Trainium|Trainium]]。名字叫训练芯片,但 Garman 坦言「我们起名字确实很差」——它现在可能是市面上最好的[[推理|推理]]芯片,性能和性价比都出众。

[[Bedrock|Bedrock]] 上大部分推理流量都跑在 Trainium 上,[[Anthropic|Anthropic]] 和 [[OpenAI|OpenAI]] 都签了协议基于它构建,产能已经卖到明年年底前后。

## 企业用智能体,卡在两件事上

Garman 观察到,企业现在建的智能体大多简单、非自主、有人类把关。要规模化,得解决两个问题。

第一是思维方式。企业总想让智能体照搬现有流程——Bob 做五步,就让智能体做同样五步。

但真正的价值在于换一种解法:智能体可以大规模并行,同时试 50 种方案。

要从零开始想计算机怎么解决这个问题,而不是复制人怎么解决。

第二是信任。客户不敢放手,是怕智能体误删生产数据库。

[[评估|评测]]、持续测试、防漂移,这些企业今天都不会做,我认为目前没有人真正擅长解决这些问题<button class="pd-ts" data-t="43:34" data-who="嘉宾" data-en="All of those things are problems that enterprises don't know how to solve today. I don't know if anyone really is great at solving these today. It's why you've seen so many FDE teams kind of spin up and AWS's and our partners are really leaning into the FDE motion to go and help." aria-label="回原文"></button>。

AWS 的做法是派前沿开发工程团队驻场 45 天,教会客户自己动手,然后离开——不是做永远收费的咨询生意。

## 在 AWS 内部,工程师已经变成「管理智能体团队的人」

AWS 自己的用法可能最能说明未来。

他们把内部 AI 工具 [[Amazon|Amazon]] Q(节目里读作 Quick)推给了每一个 Amazon 员工:HR 团队用智能体把过去几周的团队规划工作压缩到几小时,财务团队用智能体拉取各地税务规则做合规检查。

变化最大的是软件开发。

AWS 内部有所谓前沿团队,「**不是代码补全,真的是智能体优先,智能体写所有代码,你只是在管理一个智能体团队**」<button class="pd-ts" data-t="53:21" data-who="嘉宾" data-en="And it's, you know, it's not code completion. It really is... Agent first, the agents write all of the code." aria-label="回原文"></button>。

新产品推出的速度因此大幅加快。

组织也在变:过去 10 个人长期守一个产品,现在三四个人快速建完就转到下一个项目。

Garman 承认还没有标准答案,但员工其实喜欢——能更快做出更多东西。

## 本集带走

- 云的客户正从人变成智能体:更低延迟、秒级开通、可随时销毁的资源、专门的智能体权限和沙箱,是新的设计原则。
- Trainium 虽名为训练芯片,实际可能是市面上性价比最好的推理芯片,Bedrock 大部分推理流量跑在其上。
- 企业落地智能体的两大障碍:照搬旧流程的思维方式,以及缺乏评测和信任机制——AWS 用 45 天驻场培训代替长期咨询。
- AWS 内部已进入智能体写全部代码、工程师管理智能体团队的阶段,新产品交付速度显著加快。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">它们实际上非常在意尾部延迟，这很有意思，因为人并不总是关心 P999 的 S3 延迟，但智能体确实在意，并且会被它卡住。</span>  
> *They actually care a lot about tail latencies, which is interesting, where people don't always care about the P999 S3 latency, like agents do care and get blocked by that.*  
> <span class="qm">—— Matt Garman · [08:25]</span> ^q1

> <span class="qz">结果发现 Trainium 从绝对性能和性价比的角度来看，可能是目前市场上最好的推理芯片。</span>  
> *It turns out that Terranium is actually maybe the best inference chip on the market right now from an absolute performance and cost performance point of view.*  
> <span class="qm">—— Matt Garman · [38:03]</span> ^q2

> <span class="qz">但我认为这是我们差异化的部分，也是需要认真考虑的超级重要的事情，因为让数据回传给模型提供商，我认为是一件危险的事。</span>  
> *But I think it's a differentiating piece for us and it's a super important thing to think about because having that data go back into the model provider I think is a dangerous thing.*  
> <span class="qm">—— Matt Garman · [47:01]</span> ^q3

> <span class="qz">因为你看，到了某个时候，客户将需要机器速度的安全，而不是人类速度，不是像报警之后有人进去查看那种速度。</span>  
> *Because look, at some point, customers are going to need security at machine speed, not at human speed, not at like an alarm, someone goes in, look at it.*  
> <span class="qm">—— Matt Garman · [50:43]</span> ^q4

> <span class="qz">智能体优先，智能体写所有的代码。你只是在管理一个智能体团队，并驱动它们。</span>  
> *Agent first, the agents write all of the code. You're just managing a team of agents and driving that.*  
> <span class="qm">—— Matt Garman · [53:22]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-08-doac-ai-safety-whistleblower-700-ai-agents-at|700 个 AI 智能体联手攻击公司，只为掩盖自己作弊]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)、推理 (inference)</span>
- [[2026-09-05-twentyvc-20vc-how-to-build-your-own-data-center-w|每块 GPU 多付 10 万美元插队：Speechify 创始人的算力账与战略悔棋]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:GPU、推理 (inference)、智能体 (agent)</span>
- [[2026-09-25-latent-openrouter|OpenRouter 创始人：「套壳论」最愚蠢，代币经济需要新警长]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:开放权重模型 (open weights)、推理 (inference)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-27-doac-the-man-who-calls-bs-on-ai-ai-is-the-wor|Ed Zitron：生成式 AI 是一场万亿级骗局]]<span class="pd-rz">同公司:Anthropic、OpenAI、Amazon · 同概念:GPU、推理 (inference)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-09-29-latent-thariq|Anthropic 的 Thariq 谈 Claude Code：提示词、CloudMods 与给前沿踩刹车]]<span class="pd-rz">同公司:Anthropic、OpenAI · 同概念:推理 (inference)、智能体 (agent)、沙箱 (sandbox)</span>

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
