---
title: AI 会写代码了，那它能替人运维系统吗？
podcast: The a16z Show
date: 2026-10-17
source_url: undefined
duration: "59:51"
type: episode
cover: "#64748b"
description: Grepr CEO Jad Naous 与 a16z 合伙人 Martin Casado 对谈：AI 写代码效率暴涨之后，能不能接管真正的生产系统。
host: "[[Jad Naous]]"
companies: ["[[Grepper]]"]
concepts: ["[[Claude Code]]", "[[智能体]]", "[[AI 编程]]", "[[运维]]", "[[可观测性]]", "[[语法与语义]]", "[[分布式系统]]", "[[根因排查]]", "[[过度配置]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-16-a16z-ai-can-write-the-code-can-it-run-the-sys#post","headline":"AI 会写代码了，那它能替人运维系统吗？","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-16-a16z-ai-can-write-the-code-can-it-run-the-sys","mainEntityOfPage":"https://talk.solomind.cc/2026-10-16-a16z-ai-can-write-the-code-can-it-run-the-sys","description":"Grepr CEO Jad Naous 与 a16z 合伙人 Martin Casado 对谈：AI 写代码效率暴涨之后，能不能接管真正的生产系统。","datePublished":"2026-10-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jad Naous"},{"@type":"Organization","name":"Grepper"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"AI 编程 (AI for coding)"},{"@type":"Thing","name":"运维 (operations)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"语法与语义 (semantics)"},{"@type":"Thing","name":"分布式系统 (distributed systems)"},{"@type":"Thing","name":"根因排查 (root cause)"},{"@type":"Thing","name":"过度配置 (over-provision)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AI 会写代码了，那它能替人运维系统吗？","item":"https://talk.solomind.cc/2026-10-16-a16z-ai-can-write-the-code-can-it-run-the-sys"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 会写代码了，那它能替人运维系统吗？</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 会写代码了，那它能替人运维系统吗？

<div class="pd-byl"><b>Jad Naous</b> · Grepr CEO · 2026-10-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-16-a16z-ai-can-write-the-code-can-it-run-the-sys.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">长期以来，运行分布式集群的一个肮脏秘密就是靠人工来管理它。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="00:44" data-who="嘉宾" data-en="The dirty secret for the longest time of running a distributed cluster was just human beings managing it." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jad Naous]]
>
> **公司** [[Grepper]]
>
> **概念** [[Claude Code]] · [[智能体]] · [[AI 编程]] · [[运维]] · [[可观测性]] · [[语法与语义]] · [[分布式系统]] · [[根因排查]] · [[过度配置]]

AI 写代码这件事已经基本成了：[[Jad Naous|Jad Naous]] 用它把过去要 6 个月的项目压到 10 天。

但代码写完只是开始——真正难的，是让一个由无数服务器、日志、流量组成的系统在生产环境里稳定跑下去。

这一期 The a16z Show 里，a16z 的一位普通合伙人找来了老同学、Grepr 的 CEO Jad Naous,两人从斯坦福读博时就认识，一个成了风险投资人，一个成了系统工程师。

他们聊的正是这道分界线：AI 为什么擅长写代码，却未必擅长运行系统。

## 一个 10 人团队，怎么用 AI 干出 20 人的活

Jad 的公司只有 10 个人，做的却是[[分布式系统|分布式系统]]这种硬核生意。他描述了自己现在的工作流：用 Windows 加 WSL(在 Windows 里跑 Linux),主力工具是 [[Claude Code|Claude Code]],模型用 Opus 5.5。

他会同时开三四个会话窗口，让一个负责实现的[[智能体|智能体]]去问一个扮演技术负责人的智能体：==这个设计合理吗==？

帮我审一下这段代码。两个智能体互相迭代，最后产出一套代码和设计文档，他作为人来把关。

他的经验是：**越是好的工程师，从 AI 那里得到的放大效应越大**。

差的工程师并不会因为 AI 变好，因为 AI 不会替你处理复杂度——你得自己能把问题拆开、讲清楚，模型才能干活 <button class="pd-ts" data-t="13:58" data-who="嘉宾" data-en="No, no. It always ends up being like you have to really understand ultimately the setup because the more complexity that your brain can handle, the more you can break down the tasks and kind of assign them." aria-label="回原文"></button>。

他甚至发现，好的工程师在用 AI 的过程中，反过来被 AI 训练了：

学会怎么跟它说话、什么时候该拦住它别乱开 20 个子智能体烧掉所有配额 <button class="pd-ts" data-t="11:56" data-who="嘉宾" data-en="And what I've noticed is that really good engineers are able to somehow put it into their workflows in a way where the AI starts training them. Oh, interesting. In terms of like how to talk to it, how to get the best out of it." aria-label="回原文"></button>。

## 效率提升有多夸张？6 个月变 10 天

最有说服力的例子是他最近做的一个叫 auto-promotion 的功能：把日志里杂乱的字段自动拆成数据湖里独立的列，让查询变快。

这事牵扯元数据系统、多写入方协调，非常复杂。他一个人用 AI 做完，花了大约 10 天。放到以前，他说，**一个人得干大约 6 个月** <button class="pd-ts" data-t="24:41" data-who="嘉宾" data-en="And that took maybe about 10 days. In previous days, that would have taken maybe about six months for a single person. Wow." aria-label="回原文"></button>。

而且这是正式上线的生产代码，不是玩具。

## 写代码和运行系统，是两回事

Martin 的疑问从这里开始。他说自己是个简单的思考者：这些模型说到底是输入一个分布，输出一个分布。

人类写过的所有代码是一个相对规整的分布，所以模型学得会。

但生产环境里的故障是另一回事——重尾分布、极端情况、没人见过的状态组合。

他说，程序每加一个比特，系统可能进入的状态就翻一倍，很快就「比宇宙里的原子还多」<button class="pd-ts" data-t="33:08" data-who="嘉宾" data-en="I mean, it feels like, you know, this is a ridiculous statement, but it's actually kind of true. It's like every time you add a bit to a program, the state space of like what it can do operationally increases by a factor of two." aria-label="回原文"></button>。

Jad 承认这确实是硬问题，但他给出了另一条路。

行业里常见的做法是等警报响了、指标飙了，再让 AI 回头去复杂的系统里找根因——这很难。

Grepr 反过来做：扫描全部日志，一旦出现从没见过的新模式，就把这个信号抛给 AI。

AI 不需要预测未来，只需要知道有东西变了，然后去跑假设、查代码、做实验，一步步把问题收窄 <button class="pd-ts" data-t="35:49" data-who="嘉宾" data-en="Because the goal is not actually having the agent try to predict, but have it get a signal that something changed deterministically. Oh, that's something I see, I see." aria-label="回原文"></button>。

Martin 一下就抓住了要害：坏状态的组合可能是天文数字，但排查问题的步骤序列是有限的——这正是可以教给模型的。

Jad 说，对，这就是让 AI 接管人的调试角色。他透露，有几次他们忽略了系统的警告，后来那些都真的变成了生产事故 <button class="pd-ts" data-t="32:37" data-who="嘉宾" data-en="We ran it in a couple of our customers' environments. And there was a couple of cases where we ignored it, and those turned into production incidents. Really?" aria-label="回原文"></button>。

## 系统史的铁律：别预测，堆资源

Martin 搬出了计算机系统的历史：

每当人们想做聪明的虚拟内存管理、自适应路由，结果总是失败，最后大家都选择超配资源——多买内存、多铺带宽，用钱换简单。

混沌工程那波浪潮也没真做成。[[运维|运维]]的肮脏秘密长期以来就是靠人在管 <button class="pd-ts" data-t="33:35" data-who="嘉宾" data-en="Like the chaos engineering stuff never really worked. And we've always kind of relied, you know, actually the dirty secret for the longest time of running like a distributed cluster was just human beings managing it." aria-label="回原文"></button>。

他的判断是：写代码这类问题，**解的空间和训练数据分布一致，AI 会像野火一样蔓延**；

而那些解的空间是真实世界的问题，会难得多、慢得多。

自动驾驶就是例子——从 DARPA 挑战赛到今天，花了 20 年和 1700 亿美元投资，单位经济性还不如 Uber <button class="pd-ts" data-t="53:38" data-who="嘉宾" data-en="And so what are the other next stages, the next areas that you think are kind of like lined up right after code? I mean, my sense is You know, AI is going to continue to take off in a wildfire for a constrained domain, where the solution space is in a constrained domain, right?" aria-label="回原文"></button>。

Jad 更乐观一点，但也承认 Martin 说到一个关键：也许有些东西是计算不可化约的，必须真跑一遍才能知道答案。

不过 AI 可以自己去设计实验、规划执行，去获取它需要的信息——相当于模拟一个科学家 <button class="pd-ts" data-t="49:31" data-who="嘉宾" data-en="Why do you have to, like, just think about it in terms of, hey, it'll have to answer the question, like, now, as opposed to being able to simulate and, sorry, being able to plan its own execution to gain the information that it needs in order to be able to... Yeah, maybe that's where we're going, yeah." aria-label="回原文"></button>。

## 一个尴尬的商业真相：客户只想省钱

节目最后 Jad 讲了个 funny story。他们去跟客户讲：我们有 AI 帮你提升系统可靠性。客户说：等等，回去——你说能省 90% 的 Datadog 账单？

我就要买这个，AI 的事先不用 <button class="pd-ts" data-t="57:51" data-who="嘉宾" data-en="They're like, wait, wait, wait, wait, wait. Rollback, you said you can save 90% of our Datadog bills? Yeah." aria-label="回原文"></button>。

原因不难理解：写代码的价值一目了然，就是工程效率，是公司账上最大的一笔开销之一。

而运维的价值很难定价——省下一次故障值多少钱？这大概也解释了为什么 AI 在代码领域突飞猛进，在运维领域还停在早期。

## 本集带走

- 好工程师从 AI 获得的杠杆最大，差工程师并不会自动变好；用 AI 本身是一门需要学的手艺，甚至是在被 AI 反向训练。
- 用智能体当技术负责人互相审代码、开三四个会话窗口并行，一个人加 AI 可以把 6 个月的生产级项目压到 10 天。
- 写代码(语法)和系统实际运行的行为(语义)是两回事；AI 能学会前者，后者依赖真实世界的负载和状态。
- 运维 AI 的可行路径：不靠预测，而是检测什么变了，让 AI 跑假设、做实验、逐步收窄问题——把人做调试的步骤序列交给模型。
- 解的空间与训练数据分布一致的领域(代码、图像)AI 会狂飙；面对真实世界分布的问题(自动驾驶、运维)则更难、更慢，最终由经济均衡决定成败。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">长期以来，运行分布式集群的一个肮脏秘密就是靠人工来管理它。</span>  
> *The dirty secret for the longest time of running a distributed cluster was just human beings managing it.*  
> <span class="qm">—— 嘉宾 · [00:44]</span> ^q1

> <span class="qz">AI 现在能写出数量惊人的生产代码，但写软件和运行软件是两个非常不同的问题。</span>  
> *AI can now write remarkable amounts of production code, but writing software and running it are two very different problems.*  
> <span class="qm">—— 嘉宾 · [00:58]</span> ^q2

> <span class="qz">当答案并不已经包含在 AI 被训练时所用的世界里时，AI 能走多远？</span>  
> *How far can AI go when the answer isn't already contained in the world it was trained on?*  
> <span class="qm">—— 嘉宾 · [01:56]</span> ^q3

> <span class="qz">而我注意到的是，真正优秀的工程师能够以某种方式把它融入自己的工作流，让 AI 开始反过来训练他们。</span>  
> *And what I've noticed is that really good engineers are able to somehow put it into their workflows in a way where the AI starts training them.*  
> <span class="qm">—— Jad Naous · [11:43]</span> ^q4

> <span class="qz">然后当我们开始往团队里招更多人时，普通工程师和真正优秀工程师之间的差距直接翻了 10 倍。</span>  
> *And then as we started hiring more people into the team that disparity between you know okay engineers and really good engineers just multiplied 10x.*  
> <span class="qm">—— Jad Naous · [13:28]</span> ^q5

> <span class="qz">就是说，如果你是个好工程师，你就只是变成一个更好的好工程师。并不是有些差工程师突然变成了好工程师。</span>  
> *So like if you're a good engineer, you're just a better good engineer. It's not like there's some like bad engineers all of a sudden became good engineers.*  
> <span class="qm">—— 嘉宾 · [13:50]</span> ^q6

> <span class="qz">你知道的，这就是为什么那些方案不管用，因为回溯到一个根因实际上是非常成问题的，所以我们做的反而是反过来的，就是我们能不能先弄清楚你的环境里有没有什么发生了变化的东西</span>  
> *It's you know that's why those don't work because like backtracking into a root cause is actually very problematic and so instead what we're doing is doing it the other way around which is can we actually start by figuring out if there's something different in your environment that has changed*  
> <span class="qm">—— Jad Naous · [31:13]</span> ^q7

> <span class="qz">你知道，所以我就觉得，系统的历史就是你不去预测东西，你过度配置，因为你预测不了。</span>  
> *You know, so I just feel like the history of systems is that you don't predict stuff, you over-provision because you can't.*  
> <span class="qm">—— 嘉宾 · [39:04]</span> ^q8

> <span class="qz">然后花了 20 年和 1700 亿美元的投资，结果单位经济效益还不如 Uber，对吧？</span>  
> *And it took 20 years and $170 billion of investment to get to worse unit economics than Uber, right?*  
> <span class="qm">—— 嘉宾 · [54:38]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-13-talks-when-to-build-your-own-agent-harness-har|拥有你自己的智能：Harness、Eval 与数据飞轮]]<span class="pd-rz">同概念:Claude Code、可观测性 (observability)、智能体 (agent)</span>
- [[2026-09-03-talks-tethered-our-agents-are-us-shu-fang-two|给智能体系上绳索:Two Sigma 让云端 AI 以你的身份安全运行]]<span class="pd-rz">同概念:Claude Code、可观测性 (observability)、智能体 (agent)</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)、可观测性 (observability)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同公司:Datadog · 同概念:可观测性 (observability)、智能体 (agent)</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>

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
