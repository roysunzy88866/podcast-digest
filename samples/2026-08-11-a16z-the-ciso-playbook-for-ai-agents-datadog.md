---
title: "AI失控了别慌,先盯紧漏洞数量爆炸"
podcast: The a16z Show
date: 2026-08-11
source_url: undefined
duration: "22:41"
type: episode
cover: "#64748b"
description: "Datadog CISO 分享 AI 时代的内部安全实践:放手用工具,管好权限和意图。"
host: "[[Joel de la Garza]]"
cohosts: ["[[Emilio Escobar]]"]
companies: ["[[Datadog]]"]
concepts: ["[[智能体]]", "[[沙箱]]", "[[泄露的凭证]]", "[[权限]]", "[[软件供应链]]", "[[漏洞]]"]
category: AI 安全
tags:
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog#post","headline":"AI失控了别慌,先盯紧漏洞数量爆炸","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog","mainEntityOfPage":"https://talk.solomind.cc/2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog","description":"Datadog CISO 分享 AI 时代的内部安全实践:放手用工具,管好权限和意图。","datePublished":"2026-08-11","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Joel de la Garza"},{"@type":"Person","name":"Emilio Escobar"},{"@type":"Organization","name":"Datadog"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"泄露的凭证 (credentials)"},{"@type":"Thing","name":"权限 (permissioning)"},{"@type":"Thing","name":"软件供应链 (software supply chain)"},{"@type":"Thing","name":"漏洞 (vulnerabilities)"}],"articleSection":"AI 安全"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 安全","item":"https://talk.solomind.cc/tags/AI 安全"},{"@type":"ListItem","position":3,"name":"AI失控了别慌,先盯紧漏洞数量爆炸","item":"https://talk.solomind.cc/2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI失控了别慌,先盯紧漏洞数量爆炸</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# AI失控了别慌,先盯紧漏洞数量爆炸

<div class="pd-byl"><b>Emilio Escobar</b> · Datadog CISO · 2026-08-11</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我从来不赞同这个想法,哦,如果我阻止这些东西,没人会使用它们。</div><div class="a">— Emilio Escobar <button class="pd-ts" data-t="02:56" data-who="Emilio Escobar" data-en="I never subscribed to the idea of, oh, if I block these things, nobody's going to use them." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Joel de la Garza]] · [[Emilio Escobar]]
>
> **公司** [[Datadog]]
>
> **概念** [[智能体]] · [[沙箱]] · [[泄露的凭证]] · [[权限]] · [[软件供应链]] · [[漏洞]]

<div class="pd-tldr"><b>一句话</b>Datadog CISO 分享 AI 时代的内部安全实践:放手用工具,管好权限和意图。</div>

彭博社正在大肆渲染 AI 已经失控、世界末日,但在 [[Datadog|Datadog]](一家云监控公司)负责安全的高管 [[Emilio Escobar|Emilio Escobar]] 看来,如果不被 AI 模型攻击,也会被带有真实恶意的人类攻击——他根本不恐慌,只担心另一个更棘手的现实问题 <button class="pd-ts" data-t="00:55" data-who="Emilio Escobar" data-en="My thesis 10 years ago was that security engineers will become real engineers, so maybe now is the time. AI is changing the security landscape on both sides. Attackers have more capable tools, but security teams are also figuring out how to use those same capabilities to their advantage." aria-label="回原文"></button>。

在这一集 A16Z 的对谈里,Emilio 和主持人 Joel 聊了 AI 普及后企业安全的具体打法。Datadog 内部有 98% 的员工都在用某种 AI 工具,他不赞成封锁工具,而是选择放开使用,把精力放在重构[[权限|权限]]控制上;面对编程[[智能体|智能体]]可能带来的恶意代码和[[泄露的凭证|凭证]]泄露风险,他的团队干脆自己动手,造了一个能读懂代码「意图」的 AI 评判程序,卡在所有智能体的动作前面当守卫。最后他还抛出了一个略显反直觉的观点:相比担心 AI 本身有多可怕,真正让他头疼的,是 AI 找[[漏洞|漏洞]]的效率太高,将导致待修漏洞的数量直接爆炸。

**先拥抱工具,再重构权限**

聊起 AI 工具的普及,Emilio 分享了 Datadog 的真实数据:两年前他们小心翼翼地试水,给 Cursor(一种 AI 编程工具)发了 50 个许可证看大家用不用,结果一下子铺开了。现在全公司上下 98% 的员工,无论是工程师还是销售营销,都在用各种 AI 工具。

他的核心态度很明确:试图阻止员工用新工具是从来没成功过的,与其变成一个天天说「不」的部门,不如放开手脚让大家用 <button class="pd-ts" data-t="02:54" data-who="Emilio Escobar" data-en="And some of the things that we're worried about as we deploy, well, first you start with the data. What are we worried about the data? And I never subscribed to the idea of, oh, if I block these things, nobody's going to use them." aria-label="回原文"></button>。针对非技术人员,他甚至给全员都配了 ChatGPT 许可证,哪怕员工拿去找炖牛肉食谱他也不在乎,因为通过签零数据保留协议,他直接从根上避免了数据泄露的「哦,糟糕」时刻 <button class="pd-ts" data-t="03:01" data-who="Emilio Escobar" data-en="That's never worked. So on the non-developer side, like we just got ChatGPT licenses for everyone. And it was like, whoever wants it gets it." aria-label="回原文"></button>。

工具放开了,真正的麻烦却出在权限管理上。Emilio 发现,AI 会强行「扁平化」组织架构。

以前公司以为靠数据仓库里的表级和行级权限,就能保证比如商业销售看不到企业大客户的薪酬数据;但现在,哪怕销售不懂 SQL(一种数据库查询语言),只要跟智能体说句话,智能体就会自动写出 SQL 语句绕过既定路径,把数据翻出来 <button class="pd-ts" data-t="05:35" data-who="Emilio Escobar" data-en="Which normally you want to keep those things separate and what have you. And the agent just took out the SQL to do it. Yeah, yeah, yeah." aria-label="回原文"></button>。为了应对这种越权,他的 IT 团队搞了基于角色的 MCP 服务器,把数据访问权跟岗位绑定死,再让员工拿着工具去调用 <button class="pd-ts" data-t="05:50" data-who="Emilio Escobar" data-en="So we've been obviously improving all of that. And then luckily my IT group is what we've done is now we're at the point where we have role-based MCP servers as well." aria-label="回原文"></button>。

**面对智能体越权:隔离[[沙箱|沙箱]]与瞬时令牌**

解决了普通人看数据的问题,真正的硬骨头是开发者手里的编程智能体。Emilio 担心的是这些智能体能调用什么工具、能拉取什么二进制文件、以及最致命的——它们怎么拿到凭证。因为开发者现在已经是外部攻击者的首要目标,一旦智能体掌握的令牌被劫持,攻击者就能顺着构建蠕虫病毒,甚至逃逸到生产环境中去 <button class="pd-ts" data-t="07:19" data-who="Emilio Escobar" data-en="The second thing is we know the threat has expanded. Developers are now the main target for attackers. Absolutely." aria-label="回原文"></button>。

他的应对之策是物理隔离加瞬时授权。他们做了一个开源沙箱(sandbox,一种与主系统隔离的安全运行环境),智能体在其中运行时,绝对碰不到本地目录里的任何静态密钥文件。

那智能体要干活怎么认证?他们开发了专门的 CLI(命令行接口)工具,当智能体需要连 GitHub 时,不是去读静态文件,而是调用特定工具获取一个临时的短效令牌,用完即毁 <button class="pd-ts" data-t="06:47" data-who="Emilio Escobar" data-en="The credentials get injected into the agent the moment it needs it. And the beauty of it is we already have CLI tool that will give you these ephemeral tokens to these things." aria-label="回原文"></button>。

**造一个专治「恶意意图」的 AI 法官**

> 【背景】Datadog 允许第三方给自家监控智能体贡献代码集成,且 Emilio 提到市面上有专门交易智能体「技能(skills)」的应用市场。这成了他下决心造安全工具的契机。

光管住凭证还不够,智能体还会去外部市场拉取第三方技能,怎么判断这些代码有没有藏毒?由于人工审核代码的流程根本扩展不动,Emilio 的团队被逼着造出了一个名为「法官(judge)」的内部工具,专门用大模型来评估一段代码背后的「意图」<button class="pd-ts" data-t="07:55" data-who="Emilio Escobar" data-en="And then one of the things that which we can talk about is my team built out of a necessity A judge that evaluates using AILMs, that evaluates the intent. Behind a piece of code, I'm not talking CVEs, vulnerabilities, or anything like that." aria-label="回原文"></button>。

这可不是查普通的漏洞,「伤害(harm)」在这里是个故意留得模糊的词。有意思的是,后来业界发生了[[软件供应链|软件供应链]]劫持和 IDE 扩展投毒事件,把这个法官扔去一扫,居然精准揪出了恶意注入的代码片段。

后来它不仅能查代码,扫文档也做得特别好。于是 Datadog 索性把它插在了所有智能体的必经之路上,智能体想拉取任何新技能,都得先过法官这一关 <button class="pd-ts" data-t="09:00" data-who="Emilio Escobar" data-en="So we're like, huh. I wonder how it will do with markdown files. And it actually does pretty well." aria-label="回原文"></button>。他们确实在各大应用市场里揪出了不少恶意技能。

防止智能体作恶,关键得防住「奖励机制的错位」。Emilio 打了个绝妙的比方:智能体有它的奖励结构,如果你奖励它修好树,它可能直接把生病的树砍了来交差 <button class="pd-ts" data-t="10:44" data-who="Emilio Escobar" data-en="So if a code is meant to solve the bug, but it gets rewarded on that, but it doesn't care if it's actually doing something else outside of that. The tree is sick, so to make it healthy, it cuts it down." aria-label="回原文"></button>。

映射到软件里就是:智能体可能为了让你在凌晨四点不再收到数据库宕机的传呼报警,干脆把数据库关了。你必须盯紧它怎么理解你的提示词。有意思的是,这套本为了内部安全搞的东西,被产品团队看上了,正在评估如何做成商业产品 <button class="pd-ts" data-t="11:25" data-who="Emilio Escobar" data-en="So the cool thing is that we do this internally because we have to. And then the product team goes like, wait a minute, that actually become a thing. Let's explore." aria-label="回原文"></button>。

**安全工程师将真正变成工程师**

聊到市面上普遍存在的安全焦虑,Emilio 觉得很多大公司的安全团队都在消极等待商业方案来救命。但他觉得没必要非得招传统的「安全人员」,那些因为 AI 工具普及而多出空闲的开发者,正是转岗做安全的绝佳人选 <button class="pd-ts" data-t="13:37" data-who="Emilio Escobar" data-en="But here's my kind of argument. Do you really need a security person to do it? No, and I think some of the best security people didn't start as security people." aria-label="回原文"></button>。

他在 10 年前就断言安全工程师会成为真正的工程师,现在开发软件和安全岗之间的薪资差正在缩小,这种人才结构的洗牌正好到了时候。主持人也感叹,现在的开发者并不是不关心安全,而是过去安全团队塞给他们的「必须修复一千个无关紧要的扫描漏洞」这种活儿,实在太糟糕了 <button class="pd-ts" data-t="16:02" data-who="Joel de la Garza" data-en="if only because they don't want to have to keep fixing things and so like I've noticed that there is this this front of mind security thing for engineers which is great it's like I think I think we've made a lot of progress in that regard yeah and I well I actually have a a little bit more of a uh of a um maybe fiery take on that I think developers have always cared about security" aria-label="回原文"></button>。

## 本集带走

最后收个尾,这一集值得带走的是三个很务实的判断。第一,别试图把控安全入口,直接放开让大家用工具,把精力花在重构数据权限和物理沙箱上,强过天天当说不的部门。

第二,与其人海战术查代码,不如让 AI 审 AI,搞懂智能体动作背后的「意图」,卡在技能拉取和代码输出的必经之路上当法官。第三,与其恐慌模型变邪恶,不如正视 AI 带来的真正危机——当找漏洞的效率爆炸、漏洞数量翻千倍时,现有的修复框架根本接不住,这套过时的合规游戏才是最该被重构的地方。

<div class="pd-sec">全部金句 <span>7 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">我从来不赞同这个想法,哦,如果我阻止这些东西,没人会使用它们。</span>  
> *I never subscribed to the idea of, oh, if I block these things, nobody's going to use them.*  
> <span class="qm">—— Emilio Escobar · [02:56]</span> ^q1

> <span class="qz">树病了,所以为了让它健康,它把树砍倒了。</span>  
> *The tree is sick, so to make it healthy, it cuts it down.*  
> <span class="qm">—— Joel de la Garza · [10:44]</span> ^q2

> <span class="qz">我 10 年前的论点是安全工程师将成为真正的工程师,所以也许现在就是那个时候了。</span>  
> *My thesis 10 years ago was that security engineers will become real engineers, so maybe now is the time.*  
> <span class="qm">—— Joel de la Garza · [14:35]</span> ^q3

> <span class="qz">我认为问题在于我们希望他们做的那个版本的安全工作只是糟糕的。</span>  
> *I think the problem has been that the version of security that we want them to do is just crappy.*  
> <span class="qm">—— Emilio Escobar · [16:02]</span> ^q4

> <span class="qz">我的看法是,如果它不是一个 AI 模型,那将是某人或某物怀着真正的恶意意图去做这件事。</span>  
> *The way I see it is if it's not an AI model, it's going to be somebody or something with actual malicious intent doing it.*  
> <span class="qm">—— Emilio Escobar · [18:02]</span> ^q5

> <span class="qz">所以那个,你必须修复你环境中的每一个 CVE 到现在你将在你的环境中获得一千倍的更多 CVE。</span>  
> *you must fix every CVE that's in your environment to now you're going to get a thousand X more CVEs in your environment.*  
> <span class="qm">—— Emilio Escobar · [20:15]</span> ^q6

> <span class="qz">任何试图把控安全入口的尝试都失败了。</span>  
> *Any attempt to gatekeep security fails.*  
> <span class="qm">—— Joel de la Garza · [21:33]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 安全」挖下去**

- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-07-a16z-the-reality-of-ai-powered-cyberattacks-t|AI模型正在学会黑入一切：软件供应链已成最薄弱环节]]<span class="pd-rz">同概念:软件供应链 (software supply chain)、凭证 (credentials)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Datadog、GitHub · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-05-21-latent-space-daytona|Daytona:为智能体造一台像笔记本一样的计算机]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-08-latent-space-modal|不只做推理：Modal 如何跨界多节点训练与智能体云]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
    // 只搬搜索;阅读模式不并进顶栏(设计稿详情页顶栏只有分享+收藏,用户 2026-08-01 拍板摘掉)。
    ['.search'].forEach(function(sel){ grab(sel,acts); });
    // 深浅色进右栏末尾 —— 但右栏在窄屏可能不显示,槽跟着一起没了。
    // 只在槽真的看得见时才搬进去,看不见就退回顶栏(🔒 #2:任何屏宽都得有入口)。
    var side=document.querySelector('.right.sidebar'), slot=null;
    if(side){
      slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      // 同上:槽是空的(:empty → display:none),要判**右栏**看不看得见
      if(!(side.offsetWidth || side.offsetHeight || side.getClientRects().length)) slot=null;
    }
    grab('.darkmode', slot || acts);
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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); }
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
