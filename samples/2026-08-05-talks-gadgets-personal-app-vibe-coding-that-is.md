---
title: "AI 想给每个人定制 App,但云架构 25 年前就走错了路"
podcast: 精选演讲
date: 2026-08-05
source_url: undefined
duration: "18:32"
type: episode
cover: "#64748b"
description: "Cloudflare Workers 之父指出,想要实现每人一个专属 App 的 AI 未来,必须抛弃为单一版本设计的传统云架构。"
guests: ["[[Kenton Varda]]"]
companies: ["[[Cloudflare Workers]]"]
concepts: ["[[智能体]]", "[[沙箱]]", "[[无服务器]]", "[[云基础设施]]", "[[vibe coding]]", "[[蓝图]]", "[[小玩意]]", "[[WorkerD]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-05-talks-gadgets-personal-app-vibe-coding-that-is#post","headline":"AI 想给每个人定制 App,但云架构 25 年前就走错了路","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-05-talks-gadgets-personal-app-vibe-coding-that-is","mainEntityOfPage":"https://talk.solomind.cc/2026-08-05-talks-gadgets-personal-app-vibe-coding-that-is","description":"Cloudflare Workers 之父指出,想要实现每人一个专属 App 的 AI 未来,必须抛弃为单一版本设计的传统云架构。","datePublished":"2026-08-05","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Kenton Varda"},{"@type":"Organization","name":"Cloudflare Workers"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"无服务器 (serverless)"},{"@type":"Thing","name":"云基础设施 (cloud infrastructure)"},{"@type":"Thing","name":"vibe coding"},{"@type":"Thing","name":"蓝图 (blueprint)"},{"@type":"Thing","name":"小玩意 (gadget)"},{"@type":"Thing","name":"WorkerD"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AI 想给每个人定制 App,但云架构 25 年前就走错了路","item":"https://talk.solomind.cc/2026-08-05-talks-gadgets-personal-app-vibe-coding-that-is"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 想给每个人定制 App,但云架构 25 年前就走错了路</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 想给每个人定制 App,但云架构 25 年前就走错了路

<div class="pd-byl"><b>Kenton Varda</b> · Cloudflare Workers 创始人 · 2026-08-05</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-05-talks-gadgets-personal-app-vibe-coding-that-is.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我的核心观点是个人 AI 代码生成打破了传统的云基础设施。</div><div class="a">— Kenton Varda <button class="pd-ts" data-t="00:37" data-who="Kenton Varda" data-en="My key point is personal AI code gen breaks traditional cloud infrastructure." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Kenton Varda]]
>
> **公司** [[Cloudflare Workers]]
>
> **概念** [[智能体]] · [[沙箱]] · [[无服务器]] · [[云基础设施]] · [[vibe coding]] · [[蓝图]] · [[小玩意]] · [[WorkerD]]

<div class="pd-tldr"><b>一句话</b>Cloudflare Workers 之父指出,想要实现每人一个专属 App 的 AI 未来,必须抛弃为单一版本设计的传统云架构。</div>

如果每个人都想让 AI 给自己定制 App,今天整个云架构的底子都得掀掉——这是我们过去 25 年跑错方向的结果。说这话的人是 [[Kenton Varda|Kenton Varda]],他造了 [[Cloudflare Workers|Cloudflare Workers]] <button class="pd-ts" data-t="07:18" data-who="Kenton Varda" data-en="Anyway, so you might be wondering at this point, who is this guy who hasn't introduced himself up on stage giving a Richard Stallman-esque rant about how we should have the freedom to modify our own software, and what does he know about cloud infrastructure?" aria-label="回原文"></button>。

他是 Cloudflare Workers 的创始人和首席工程师,这个[[无服务器|无服务器]]应用托管平台每天处理数万亿个请求 <button class="pd-ts" data-t="07:18" data-who="Kenton Varda" data-en="Anyway, so you might be wondering at this point, who is this guy who hasn't introduced himself up on stage giving a Richard Stallman-esque rant about how we should have the freedom to modify our own software, and what does he know about cloud infrastructure?" aria-label="回原文"></button>。这一集的演讲里,他讲了三件事:为什么 AI 时代必须让用户自己改软件、为什么现有[[云基础设施|云基础设施]]根本做不到、以及他为此做的一个把代码彻底关进「[[沙箱|沙箱]]」(一种隔离环境,让程序跑不出自己的地盘)的探索项目。

软件分发的痛点是他展开论述的起点。在传统的开发模式下,开发者高高在上地写好一个 App 发给所有人 <button class="pd-ts" data-t="01:18" data-who="Kenton Varda" data-en="Think about the way that software is produced and distributed today. You have a developer in an ivory tower who builds an app and then sends it down to the people, the users who use the app." aria-label="回原文"></button>。

用户不满足,就提需求;产品经理把需求扔进 JIRA(一款项目管理软件)里再也不管 <button class="pd-ts" data-t="01:47" data-who="Kenton Varda" data-en="Your app is literally unusable without it. And so then the developer's representative, the product manager, takes these feature requests and files them into JIRA where they are never seen again." aria-label="回原文"></button>。就算排上日程去开发,为了满足各路用户的碎需求,代码里塞满了判断逻辑,最后变成一团乱麻,逼得开发者只能推倒重写 <button class="pd-ts" data-t="02:09" data-who="Kenton Varda" data-en="And then that feature request goes onto the roadmap and the developer works on it. And the developer is implementing all these features, features that, you know, each one is only used by a small subset of users." aria-label="回原文"></button>。

AI 的出现似乎给了条出路:开发者只管把干净的初版扔出来,用户缺啥功能,直接让自己的 AI [[智能体|智能体]]现场写一个加进去 <button class="pd-ts" data-t="03:34" data-who="Kenton Varda" data-en="So, AI seems to present a new alternative to this. What if the developer could Create their app, the first version of their app, give it to the users, and the users, if they need a new feature, could say, I could ask their AI agent to write that feature just for them, add it to the app." aria-label="回原文"></button>。但这个想法一落地就撞上了两堵墙。

第一堵是移动端的应用商店。Apple 和 Google 在过去 15 年里把系统管得死死的,封禁了绝大多数人,让你搞到一把枪都比给自己的手机装个未经签名的软件容易 <button class="pd-ts" data-t="04:28" data-who="Kenton Varda" data-en="You've got Apple and Google for the past 15 years gatekeeping their systems to the point where there's five companies that can build mobile apps now because everyone else has been banned." aria-label="回原文"></button>。唯一的出路是 Web,但这里横着第二堵墙——过去 25 年的云架构 <button class="pd-ts" data-t="05:07" data-who="Kenton Varda" data-en="It's not the security disaster that Apple and Google keep telling us would happen. So you can build whatever you want on the web, but there's a different problem on the web, which is that for the past 25 years of cloud architecture, we've been running in the wrong direction." aria-label="回原文"></button>。

说完了为什么移动端被封死,接下来就是为什么 Web 也出了问题。今天的 Web 应用都跑在开发者的服务器上,全世界的用户连过来,跑的都是同一个经过核准的版本 <button class="pd-ts" data-t="05:25" data-who="Kenton Varda" data-en="When you distribute a web app, You run it on your own server. Put it on your server and then users send requests to your server where the one version of your app, the one blessed version, runs for every single user." aria-label="回原文"></button>。

开发者是省心了,但这从根上剥夺了用户自己改软件的可能 <button class="pd-ts" data-t="05:46" data-who="Kenton Varda" data-en="That's why we've done it is so the developer can make sure things stay updated and everyone's on the same version. But it obviously means that users cannot customize their apps." aria-label="回原文"></button>。市面上绝大多数 [[vibe coding|vibe coding]](指用自然语言指挥 AI 随手写代码)平台瞄准的正是这种旧架构,所以方向全错了 <button class="pd-ts" data-t="05:55" data-who="Kenton Varda" data-en="So... You know, last year, vibe coding comes along, and we have all these vibe coding platforms out there, and most of them are targeting web apps because that's the easy thing to target, but they're all targeting this existing infrastructure, which is actually not the right way to do it." aria-label="回原文"></button>。

既然旧路不通,他又是怎么做的呢?这就引出了他在 Workers 基础上做的探索项目。

别把它当成又一个让 AI 部署网页应用的平台,它的逻辑更像 Google Docs 这样的办公套件 <button class="pd-ts" data-t="08:46" data-who="Kenton Varda" data-en="So what I want you to understand about this environment This is not like your typical vibe coding environment where you're deploying apps to a web page. You need to think about it more like an office suite." aria-label="回原文"></button>。在 Google Docs 里你面对的是一个个文档,在这里你面对的是一个个「gadget」([[小玩意|小玩意]])——每个小玩意就是一份自带代码的独立 App <button class="pd-ts" data-t="09:11" data-who="Kenton Varda" data-en="This is the same thing, except instead of documents, you have gadgets. And each gadget is an application with code. They can all be different code." aria-label="回原文"></button>。你可以自己动手 vibe coding,也可以从别人导出的「[[蓝图|蓝图]]」(Blueprint)里直接复制代码实例化一个 <button class="pd-ts" data-t="09:54" data-who="Kenton Varda" data-en="But we also have this concept over here of blueprints. And a blueprint is someone made a gadget and they decided that it was useful and they took a blueprint of it, which is just taking the code, exporting the code without the data, which they can then share with someone else and then other people can instantiate gadgets from these blueprints." aria-label="回原文"></button>。

这些小玩意最反直觉的地方,在于极度克制的实例化逻辑:你想要十份不同的幻灯片,就得实例化十个独立的小玩意,一个对应一份 <button class="pd-ts" data-t="10:59" data-who="Kenton Varda" data-en="So an important point here is that when I instantiate this app, it is only for one slide deck. If I want multiple slide decks, I make multiple instances of the gadget, one for each." aria-label="回原文"></button>。这么做只有一个目的——确保每个小玩意都只为你当下的这件事服务,进而让平台能直接从底层接管分享和权限控制,彻底杜绝单个 App 自己犯安全错误 <button class="pd-ts" data-t="11:13" data-who="Kenton Varda" data-en="And the reason for that is that all gadgets are shareable and you can collaborate with other people on them. And the sharing model is implemented by the platform instead of by the app itself." aria-label="回原文"></button>。他自己在做演讲幻灯片时,就把需求扔给 Claude,让智能体去读懂代码,自己顺手把「居中」「插入 SVG(一种矢量图格式)」这些原本没有的功能给加上 <button class="pd-ts" data-t="12:39" data-who="Kenton Varda" data-en="And so what I did is I gave Claude a link to this document, this Google Doc, where I had described all of the gadgets that I wanted, or all the slides that I wanted in my" aria-label="回原文"></button>。

功能让 AI 随便加,不怕出乱子吗?这正是整套架构最精妙的地方。

每一个 App 的前端界面都跑在一个设置严格的内容安全策略的 iframe(网页中的隔离区块)沙箱里,它碰不到任何外部信息 <button class="pd-ts" data-t="14:18" data-who="Kenton Varda" data-en="And the answer to that is it doesn't really matter because of the way this environment is set up. So the UI that you see for the app here is running inside a null origin iframe sandbox with content security policy set so that it basically cannot talk to anything, any of the rest of the world, can't access any cookies, so on." aria-label="回原文"></button>;而它的后端代码则跑在服务器端隔离的动态 worker 沙箱里 <button class="pd-ts" data-t="15:01" data-who="Kenton Varda" data-en="And through that post message channel, we set up a Captain Web RPC session, which forwards onto the server and all the way back to the server code for this gadget, which is this code here, which is written as a durable object on Cloudflare Workers." aria-label="回原文"></button>。前后端被彻底切断与外界的联系,只能在一个封闭通道里互相对话 <button class="pd-ts" data-t="15:23" data-who="Kenton Varda" data-en="So now we've set up this environment where there's a vibe-coded client and a vibe-coded server, and they can only talk to each other and produce the UI for the user." aria-label="回原文"></button>。

说完了怎么做隔离,接下来是这套架构最硬核的底气:就算代码里满是安全漏洞,在它面前也根本不算事。因为这个环境里的代码根本没有任何秘密可偷,什么跨站脚本攻击在这种物理隔绝面前都是毫无意义的 <button class="pd-ts" data-t="15:30" data-who="Kenton Varda" data-en="And so if you have an XSS bug, it actually doesn't end up mattering because these can't leak anything. They're prevented from doing so. And basically, there is no security bug you can have in this code that matters." aria-label="回原文"></button>。他还顺带澄清了一个常见的误区:这一切都不需要启动庞大的容器,也不用配数据库,完全跑在 Cloudflare 的无服务器环境里 <button class="pd-ts" data-t="16:35" data-who="Kenton Varda" data-en="A lot of people don't know this, but you can actually build complex apps on workers. There are no containers involved here. There's just dynamic workers." aria-label="回原文"></button>。

这套系统甚至不依赖云端服务器,它跑在开源的 [[WorkerD|WorkerD]] 运行时上,完全能在你自己的笔记本甚至地下室里离线运转 <button class="pd-ts" data-t="16:53" data-who="Kenton Varda" data-en="And furthermore, all of this is actually running locally on my laptop, which is why it doesn't matter that the internet didn't work. So this is all running on WorkerD, which is our open source runtime." aria-label="回原文"></button>。虽然 Kenton 在演讲结尾略带抱歉地表示,因为 Cloudflare 内部最近几周对这个项目燃起了极大的热情,CTO Dane 叫停了他原本打算当场开源的计划,决定更慎重地打磨发布 <button class="pd-ts" data-t="17:50" data-who="Kenton Varda" data-en="In the last couple of weeks, there's been a lot of excitement inside Cloudflare, and this has become a more serious project. And so last Thursday, Dane, our CTO, pulled me into a room and said, Kenton," aria-label="回原文"></button>,但这套让用户彻底掌控自己软件的架构,已经勾勒出了 AI 时代应用该有的样子。

## 本集带走

最后收个尾,这一集值得带走的是三句话。第一,AI 带来的真正颠覆不是代码写得多快,而是让每个用户都能拥有为自己量身定制的软件,但这套愿景和今天「开发者管服务器、所有人跑同一版本」的云架构水火不容。

第二,想要真正安全地放手让 AI 现场改软件,唯一的出路是重写隔离规则,把每个独立实例的前后端都死死锁在无法与外界通信的沙箱里,这样代码里就算全是漏洞也漏不出任何东西。第三,未来的个人应用不该像一个个沉重的容器,而该像办公套件里的文档一样轻量,加上彻底的开源本地化,让算力和数据真正回到每个人的手里。

<div class="pd-sec">全部金句 <span>3 条</span></div>

> <span class="qz">我的核心观点是个人 AI 代码生成打破了传统的云基础设施。</span>  
> *My key point is personal AI code gen breaks traditional cloud infrastructure.*  
> <span class="qm">—— Kenton Varda · [00:37]</span> ^q1

> <span class="qz">在美国,搞到一把枪几乎比获得你自己手机的访问权限以安装未签名的软件还要容易。</span>  
> *And it's almost easier in the United States to buy a gun than it is to get access to your own phone to install unsigned software.*  
> <span class="qm">—— Kenton Varda · [04:28]</span> ^q2

> <span class="qz">所以你可以在网络上构建你想要的任何东西,但网络有一个不同的问题,那就是在过去的 25 年云架构中,我们一直在错误的方向上奔跑。</span>  
> *So you can build whatever you want on the web, but there's a different problem on the web, which is that for the past 25 years of cloud architecture, we've been running in the wrong direction.*  
> <span class="qm">—— Kenton Varda · [05:07]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2025-07-03-lennys-ive-run-75-businesses-andrew-wilkinson|Andrew Wilkinson：别追咖啡馆，去找没人要的钓鱼洞]]<span class="pd-rz">同概念:vibe coding、智能体 (agent)</span>
- [[2026-05-21-latent-space-daytona|Daytona:为智能体造一台像笔记本一样的计算机]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|一千人公司里的五人小队:Eddie Kim 怎么用 Claude Code 花10周造出 Gusto Co-Founder]]<span class="pd-rz">同概念:vibe coding、智能体 (agent)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog|AI失控了别慌,先盯紧漏洞数量爆炸]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
