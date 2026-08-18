---
title: 别只盯着敲代码：GitHub Next 用 Markdown 重塑自动化与协作
podcast: 精选演讲
date: 2026-08-08
source_url: undefined
duration: "21:30"
type: episode
cover: "#64748b"
description: "AI 帮你敲代码只占你工作的 5%,GitHub Next 展示了如何用智能体工作流和协作原型解决剩下的 95%。"
guests: ["[[Idan Gazit]]"]
companies: ["[[GitHub Next]]", "[[Copilot]]", "[[ACE]]", "[[Dependabot]]"]
concepts: ["[[GitHub Actions]]", "[[markdown]]", "[[护栏]]", "[[提示词注入]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-08-talks-realtime-multiplayer-automation-and-you#post","headline":"别只盯着敲代码：GitHub Next 用 Markdown 重塑自动化与协作","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-08-talks-realtime-multiplayer-automation-and-you","mainEntityOfPage":"https://talk.solomind.cc/2026-08-08-talks-realtime-multiplayer-automation-and-you","description":"AI 帮你敲代码只占你工作的 5%,GitHub Next 展示了如何用智能体工作流和协作原型解决剩下的 95%。","datePublished":"2026-08-08","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Idan Gazit"},{"@type":"Organization","name":"GitHub Next"},{"@type":"Organization","name":"Copilot"},{"@type":"Organization","name":"ACE"},{"@type":"Organization","name":"Dependabot"},{"@type":"Thing","name":"GitHub Actions"},{"@type":"Thing","name":"markdown"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"提示词注入 (prompt injection)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"别只盯着敲代码：GitHub Next 用 Markdown 重塑自动化与协作","item":"https://talk.solomind.cc/2026-08-08-talks-realtime-multiplayer-automation-and-you"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>别只盯着敲代码：GitHub Next 用 Markdown 重塑自动化与协作</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 别只盯着敲代码：GitHub Next 用 Markdown 重塑自动化与协作

<div class="pd-byl"><b>Idan Gazit</b> · 2026-08-08</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-08-talks-realtime-multiplayer-automation-and-you.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">即使你是一个拥有十亿代币的人,即使你有 10 个终端没日没夜地运行 Fable,机会成本仍然存在,它就是一切。</div><div class="a">— Idan Gazit <button class="pd-ts" data-t="01:34" data-who="Idan Gazit" data-en="Even if you're a token billionaire, even if you have 10 terminals running Fable night and day, then opportunity cost is still there, it's everything." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Idan Gazit]]
>
> **公司** [[GitHub Next]] · [[Copilot]] · [[ACE]] · [[Dependabot]]
>
> **概念** [[GitHub Actions]] · [[markdown]] · [[护栏]] · [[提示词注入]]

<div class="pd-tldr"><b>一句话</b>AI 帮你敲代码只占你工作的 5%,GitHub Next 展示了如何用智能体工作流和协作原型解决剩下的 95%。</div>

一项针对 100 名开发者、长达数千小时的纵向研究发现,双手放在键盘上敲击代码的时间,其实只占程序员全部工作的 5%。说这话的人是 Idan,他负责 [[GitHub Next|GitHub Next]],这是 GitHub 探索未来软件开发方式的实验室团队。既然 AI 已经把打字补全这件事解决得差不多了,那么剩下 95% 的理解、协作和决策工作该怎么提效?

在这场分享中,Idan 代表 GitHub Next 介绍了他们正在探索的两个方向。首先是智能体工作流(Agentic Workflows),探讨的是在后 AI 时代,那些需要一定基础判断的自动化任务应该怎么做;其次是名为 [[ACE|ACE]] 的协作原型,它展示了在 AI 与人共同实时参与的开发环境下,未来的协同写代码界面会是什么样子。最后,他抛出了一个引人深思的观点:随着我们越来越擅长给智能体定目标,未来的关系可能会发生倒置——不再是人调用 AI,而是智能体在需要人手时主动拍拍你的肩膀。

先从第一个主题自动化说起。AI 刚起步时,带来的是个人生产力的飙升:大模型帮你补全代码,智能体替你跑腿拿数据。

但 Idan 指出,最大的价值永远不在于把一个人复制成多个人,而是让一群人能共同做到更多。每一次工业革命都源于自动化,但从某种角度看,庞大的软件行业至今仍停留在前工业时代,因为过去我们拥有的自动化只有死板的启发式规则(比如确保每行代码末尾有分号)。现在,AI 终于能帮我们自动化掉那些需要基本判断和智能的工作,从而把人省下来去打磨真正的手艺和产品功能。

顺着这个思路,GitHub Next 做出了 Agentic Workflows。Idan 在台上拿自己的个人网站做了演示。

他的网站是用 Astro 框架建的,而 Astro 每个月会疯狂发布大量新版本,导致他常年疲于奔命地升级依赖。[[Dependabot|Dependabot]](一种自动检测依赖是否过期的工具)只能提醒他有新版本,但不会帮他改那些因升级而报错的代码。于是,他想要一个超级 Dependabot。

他不想写复杂的逻辑,而是直接用 [[Copilot|Copilot]] 生成了一个智能体工作流。这个工作流的本质,就是一份纯 [[markdown|Markdown]] 文档。

文档里用人类自然语言像给初级开发者发 Slack 消息一样写下任务步骤,比如每天检查新版本、看变更日志、应用升级、发起拉取请求(PR)。Copilot 会把这三行英文指令自动梳理成一份完整的执行手册,并将 Markdown 重新编译成底层的 Actions 工作流——在开发者的视角里,Markdown 就是源代码,而底层的 YAML 完全是编译产物,人根本不需要看 <button class="pd-ts" data-t="06:50" data-who="Idan" data-en="Review the change log and the upgrade guide, apply the upgrade, and then create a pull request. I didn't ask for any of this that explicitly, but it turns out that Copilot's pretty good at sussing out my little three-line message into a full playbook." aria-label="回原文"></button>。

光有指令还不够,如果让智能体在后台自己跑活儿,就必须给它们套上确定性的安全[[护栏|护栏]]。Idan 强调,绝不能仅仅在提示词里对智能体说别干什么,因为外部坏人可以轻易使用[[提示词注入|提示词注入]](一种通过恶意输入篡改 AI 指令的攻击手法),把智能体带向意想不到的方向,这无异于引狼入室 <button class="pd-ts" data-t="07:37" data-who="Idan" data-en="That's not enough, because somebody else can prompt inject the agent and take it in a direction that you don't expect. So any of the guardrails, if you're prompting the guardrails at the agent, you're effectively letting the fox loose in the henhouse." aria-label="回原文"></button>。

因此,真正的护栏必须是系统层面、确定性的规定:它能读什么文件、能用什么网络请求、能不能买比特币。更进一步,他明确规定智能体只能发起单个 PR,且被允许什么也不做。允许它什么都不干听起来很傻,但在充斥着自动化的未来世界里,人类最不想要的就是无意义的噪音和拒绝服务。

GitHub Next 还为开发者准备了一整套现成的工作流库。比如可以自动遍历 Python 错误追踪、判断 bug 究竟是出在第一方还是第三方代码的 Issue 分类员;GitHub 内部也用这套东西在自己的单体仓库里揪出 N 加 1 查询(一种因频繁查询数据库导致性能问题的代码缺陷) <button class="pd-ts" data-t="10:46" data-who="Idan" data-en="Internally, GitHub has actually used this as the basis for spiking out our own internal issue triager or for hunting down N plus one queries in our monolith. Or all kinds of things." aria-label="回原文"></button>。Idan 断言,在你睡觉时于后台默默跑着的自动化程序,终将成长为一个比交互式 AI 还要庞大的商业品类。

说完了自动化流程,接下来看协作。当下的软件开发之所以仍显低效,是因为虽然我们可以一起制定计划、一起审查代码,但最耗时的构建环节往往是大家在各自的显示器前孤独敲击。更要命的是,当 AI 加速了开发过程后,一点小小的理解错位就会像滚雪球一样,浪费掉大量消耗算力与真金白银的代码工作。

为了解决这个问题,GitHub Next 做了 ACE——一个看起来有点像 Slack 的实时多人协作原型界面。它的本质区别在于:所有的操作都在云端。

每一个聊天会话,实际上都是云端的一个微型编辑器,并挂载着代码仓库的一个分支。这意味着团队成员可以直接在云端开一个对话窗口,一边讨论需求,一边安装依赖或启动开发服务器。

而 ACE 真正的杀手锏在于,它可以直接把聊天记录转化为行动。工程师之间的讨论往往冗长且充满反复:我们试试方案 A 吧,等等,我想到了个边缘情况,还是改用方案 B。

在传统的开发模式下,开发者必须自己从这堆长篇大论中梳理出最终状态,再下发给 AI 去执行。而在 ACE 中,因为它能实时看到你和队友的完整对话上下文,你只需轻描淡写地回复一句:去做吧,AI 就会自动从讨论中提取出那个最终的共识方案并直接落地 <button class="pd-ts" data-t="16:47" data-who="Idan" data-en="That it's going to just respond to the fact that we had a discussion about colors, and AI is also really good at fishing out that final state. Very frequently, what do engineering conversations sound like?" aria-label="回原文"></button>。

除了能直接读懂聊天记录,ACE 还把协作的焦点锚定在了文档上。当需求变得复杂时,你可以让 AI 先出一份纯 Markdown 格式的计划文档。

队友可以直接在这份计划上协同修改——比如 Russ 建议加个全部时间,你删掉了今天选项——随后再次召唤 AI 执行。Idan 认为,未来我们甚至不再直接敲代码,而是通过共同编辑这些捕捉了系统真相的 Markdown 文档,然后让 AI 去负责把这些文档变成现实。

工具变了,人怎么办?这正是下一个话题。

当我们把目标设定和具体执行的工作大量交给 AI 时,我们实际上正在经历一场与智能体关系的奇怪倒置。我们越是擅长清晰地阐明目标,模型就越不需要我们的手把手指导;而当它们能够敏锐地发现需求定义不清晰的地方时,它们会反过来要求我们给出澄清 <button class="pd-ts" data-t="19:34" data-who="Idan" data-en="The better that we get at articulating our goals to the agents, the less they need us. And as the models get better, they're also good at spotting underspecified behaviors and then asking us to clarify." aria-label="回原文"></button>。最终,界面会进化到让智能体能够监听一切,并在需要物理双手时主动召唤人类来帮忙。

## 本集带走

最后收个尾,这一集值得带走的核心是三句话。第一,编写代码只占开发者 5% 的时间,既然 AI 已经帮我们解决了打字补全的问题,接下来的重心必须转向攻克剩下 95% 的部分——如何帮我们在庞大系统中快速导航、梳理需求并达成共识。

第二,要用自然语言驱动后台自动化,通过类似 Markdown 文档的智能体工作流,你只需下达意图,配合确定性的安全权限护栏,就能让 AI 在你睡觉时安全地承担起升级依赖、分类 Issue 等繁杂脏活。第三,未来的代码协作模式将围绕对话和共享文档展开,不再是人向 AI 下达指令,而是 AI 从人类的实时讨论中自动提取结论并直接执行,人类最终甚至会成为被 AI 随时召唤的那双手。

<div class="pd-sec">全部金句 <span>8 条</span></div>

> <span class="qz">即使你是一个拥有十亿代币的人,即使你有 10 个终端没日没夜地运行 Fable,机会成本仍然存在,它就是一切。</span>  
> *Even if you're a token billionaire, even if you have 10 terminals running Fable night and day, then opportunity cost is still there, it's everything.*  
> <span class="qm">—— Idan Gazit · [01:34]</span> ^q1

> <span class="qz">最大的价值不是来自把我复制成更多的我。</span>  
> *The greatest value doesn't come from multiplying me into more me.*  
> <span class="qm">—— Idan Gazit · [02:39]</span> ^q2

> <span class="qz">把我们庞大的软件行业想象成前工业时代是很可笑的,但在某种程度上确实是,因为到目前为止我们拥有的唯一自动化就是启发式的,比如确保每行末尾有一个分号。</span>  
> *It's funny to think about our giant software industry as being pre-industrial, but on some level it is, because until now the only automations that we had were heuristics, like make sure there's a semicolon at the end of every line.*  
> <span class="qm">—— Idan Gazit · [02:57]</span> ^q3

> <span class="qz">所以走得更快意味着一个小小的错位可能滚雪球成大量浪费的工作,而且那工作消耗代币,代币现在要花真金白银。</span>  
> *So going faster means that a small misalignment can snowball into a ton of wasted work, and that work costs tokens, and tokens cost real money now.*  
> <span class="qm">—— Idan Gazit · [04:15]</span> ^q4

> <span class="qz">这在 AI 之前是不可能的事情,用启发式方法也不可能,但现在成为可能。</span>  
> *That's something that was not possible before AI, not possible with heuristics, but is possible now.*  
> <span class="qm">—— Idan Gazit · [12:55]</span> ^q5

> <span class="qz">我们实际上相信这将成为一个比交互式 AI 更大的类别,因为那些在你睡觉时在后台运行的自动化程序,那才是关键所在。</span>  
> *We actually believe that this is gonna be a bigger category than interactive AI because automations that run in the background while you sleep, that's the ballgame.*  
> <span class="qm">—— Idan Gazit · [13:08]</span> ^q6

> <span class="qz">我们正在经历与我们和智能体关系的这种奇怪的倒置。</span>  
> *We're going through this weird inversion of our relationship with the agents.*  
> <span class="qm">—— Idan Gazit · [19:24]</span> ^q7

> <span class="qz">而且每当它们需要一双人手时,它们可以要求我们成为那双手。</span>  
> *And then whenever they need a pair of hands, they can ask us to be the pair of hands.*  
> <span class="qm">—— Idan Gazit · [19:42]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-07-09-beyondcoding-cracked-solo-dev-why-the-fastest-enginee|氛围编码 vs 氛围工程：智能体时代谁被淘汰]]<span class="pd-rz">同公司:Copilot · 同概念:护栏 (guardrails)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Slack · 同概念:提示词注入 (prompt injection)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:护栏 (guardrails)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同概念:护栏 (guardrails)、提示词注入 (prompt injection)</span>
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|把 AI 当员工来管理:Claire Vo 的九个智能体生活实战]]<span class="pd-rz">同概念:提示词注入 (prompt injection)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同概念:护栏 (guardrails)</span>

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
