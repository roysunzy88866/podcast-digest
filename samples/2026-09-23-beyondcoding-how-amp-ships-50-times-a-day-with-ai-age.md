---
title: 一天上线 50 次、不用代码评审：Amp 工程师的 AI 协作法
podcast: Beyond Coding
date: 2026-10-11
source_url: undefined
duration: "48:24"
type: episode
cover: "#64748b"
image: "/covers/2026-09-23-beyondcoding-how-amp-ships-50-times-a-day-with-ai-age.jpg"
description: Amp 工程师 Dario Hamidi 讲述他们如何取消拉取请求、一天部署 50 次，并用 AI 智能体处理每天几十条错误报告。
host: "[[Dario Hamidi]]"
companies: ["[[AMP]]"]
concepts: ["[[智能体]]", "[[pull request]]", "[[Orb]]", "[[智能体工程]]", "[[泄露的凭证]]", "[[认知负荷]]", "[[云端智能体]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/covers/2026-09-23-beyondcoding-how-amp-ships-50-times-a-day-with-ai-age.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-23-beyondcoding-how-amp-ships-50-times-a-day-with-ai-age#post","headline":"一天上线 50 次、不用代码评审：Amp 工程师的 AI 协作法","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-23-beyondcoding-how-amp-ships-50-times-a-day-with-ai-age","mainEntityOfPage":"https://talk.solomind.cc/2026-09-23-beyondcoding-how-amp-ships-50-times-a-day-with-ai-age","description":"Amp 工程师 Dario Hamidi 讲述他们如何取消拉取请求、一天部署 50 次，并用 AI 智能体处理每天几十条错误报告。","datePublished":"2026-10-11","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-23-beyondcoding-how-amp-ships-50-times-a-day-with-ai-age.jpg","about":[{"@type":"Person","name":"Dario Hamidi"},{"@type":"Organization","name":"AMP"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"pull request"},{"@type":"Thing","name":"Orb"},{"@type":"Thing","name":"智能体工程 (agentic engineering)"},{"@type":"Thing","name":"泄露的凭证 (credentials)"},{"@type":"Thing","name":"认知负荷 (cognitive load)"},{"@type":"Thing","name":"云端智能体 (cloud agents)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"一天上线 50 次、不用代码评审：Amp 工程师的 AI 协作法","item":"https://talk.solomind.cc/2026-09-23-beyondcoding-how-amp-ships-50-times-a-day-with-ai-age"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>一天上线 50 次、不用代码评审：Amp 工程师的 AI 协作法</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 一天上线 50 次、不用代码评审：Amp 工程师的 AI 协作法

<div class="pd-byl"><b>Dario Hamidi</b> · Amp 工程师 · 2026-10-11</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-23-beyondcoding-how-amp-ships-50-times-a-day-with-ai-age.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我甚至敢说，即使你今天没有用 AI，如果你在你的组织里取消 pull request，你也可以获得两位数百分比甚至三位数百分比的生产力提升。</div><div class="a">— Dario Hamidi <button class="pd-ts" data-t="01:59" data-who="Dario Hamidi" data-en="And I would even go as far as saying, even if you're not using AI today, you can get double-digit percentage, if not triple-digit percentage gains in productivity if you get rid of pull requests in your organization." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Dario Hamidi]]
>
> **公司** [[AMP]]
>
> **概念** [[智能体]] · [[pull request]] · [[Orb]] · [[智能体工程]] · [[泄露的凭证]] · [[认知负荷]] · [[云端智能体]]

Amp 是一家只有 20 人左右的软件公司，团队每天往生产环境部署大约 50 次，中间没有任何[[pull request|拉取请求]]（pull request，即代码提交后等别人审阅再合并的传统流程）。

工程师 [[Dario Hamidi|Dario Hamidi]] 在 Beyond Coding 播客里解释了他们为什么敢这么做，以及围绕 AI [[智能体|智能体]]踩过的坑。

## 为什么说该取消拉取请求了？

Dario 的说法很直接：不管你用不用 AI，取消拉取请求都能让生产力提升两位数甚至三位数的百分比 <button class="pd-ts" data-t="01:00" data-who="嘉宾" data-en="Hilton, for the stay. You can get double-digit percentage, if not triple-digit percentage gains in productivity if you get rid of pull requests in your organization." aria-label="回原文"></button>。

理由是拉取请求本质上来自互不信任的环境——就像网上一个陌生人想改你的项目，你当然要先检查他改了什么。

但在一个互相信任的团队里，这套流程反而成了枷锁。

更实际的问题是：没人真的认真审查。理想情况下，审阅者应该把分支拉下来、跑起来、亲手点一遍，但这成本太高，没人做。

于是拉取请求挂在那里好几天，双方都想赶紧合并，审查变成走过场。

而万一发现架构方向错了，那已经是所有工作都做完之后——最糟糕的发现问题的时机。

## 直接入主干的团队，靠什么保持信心？

Dario 建议，如果明天宣布所有拉取请求自动关闭、想发布就必须直接推送到主干，会发生什么？

大家会自己做更多验证——比如让智能体展示截图、录像，证明功能真的能跑。

他还点出一个心理变化：

想开拉取请求这个念头本身就是信号，通常意味着你害怕改动会弄坏东西，而恐惧往往来自改动太大。

取消拉取请求后，人们自然会拆成小块提交，因为小块是安全的。

想试的团队可以做两周实验：不开拉取请求，所有人直接推主干。照常讨论、照常帮同事看代码，只是不阻塞发布。

第一周会很痛苦，第二周大家就会爱上小块提交。

他的观察是：**有没有拉取请求，质量没差别，差别在交付速度** <button class="pd-ts" data-t="08:27" data-who="嘉宾" data-en="I think based on my experience now having worked with pull requests and without pull requests that It doesn't change the quality, whether you have pull requests or whether you don't have pull requests." aria-label="回原文"></button>。

而且正因为随时能发版，出了错误报告也能用同样的速度修掉，哪怕只是回滚一次提交。

## 智能体权限：调严了挨骂，调松了也挨骂

去年 Amp 解决过一个非常头疼的问题：智能体的每个工具调用要不要用户批准？

结果发现，不管怎么选，用户永远是一半对一半地不满意——管得太严，有人抱怨不安全；

放得太开，有人抱怨干点小事要点 10 次批准。

Dario 的结论是：**这根本不是产品决策问题，而是沟通问题** <button class="pd-ts" data-t="12:12" data-who="嘉宾" data-en="Yeah. So ultimately what I learned from this experience is that it was actually just a communication problem. Like there is no product decision that you can make that will satisfy everyone." aria-label="回原文"></button>。正确做法是让用户自己选择阵营，再给每个阵营配好合理的默认值。

Amp 内部干脆不做逐条批准。原因不是模型完美，而是他们把环境里的“锋利边缘”都磨掉了：

就算智能体想删生产数据库，数据库连接本身就没有删除权限，到那里就结束了。

## 出事的团队，都是在“抛刀杂耍”

那些被智能体删掉生产数据库的案例，Dario 的比喻是：他们在抛刀杂耍 <button class="pd-ts" data-t="14:47" data-who="" data-en="Yeah, and part of your job is to create an environment in which you can trust the agents. I mean, to take a maybe very extreme image is like the person whose production database got deleted, they were juggling with knives." aria-label="回原文"></button>。

往往是刚接触 Cursor、Lovable 这类工具的新手，被这些工具突然带来的可能性兴奋到了，就照着智能体的建议照做，不知道要先配置行级安全。

有经验的开发者会说，我们换个不抛刀的玩法行不行？

原则是：**什么该归模型层管，什么该归周围确定性的系统管，这是[[智能体工程|智能体工程]]的核心技能** <button class="pd-ts" data-t="16:41" data-who="嘉宾" data-en="So that's the thing that I think You need to learn about just like what parts belong into the model layer and what parts belong into like everything that's deterministic and around it." aria-label="回原文"></button>。

不想让智能体推代码，去配置 GitHub 权限；不想让它写生产数据库，就只给它只读[[泄露的凭证|凭证]]。

## Orb：不花钱的待机虚拟机

Amp 现在力推的方案叫 [[Orb|orb]]——本质是虚拟机，但不只是虚拟机：

不运行就不计费，彼此互联，每个 orb 自带一个可以点开的门户页面，直接预览正在开发的应用 <button class="pd-ts" data-t="18:44" data-who="嘉宾" data-en="What's an orb? And it's not just a VM. It's a VM that" aria-label="回原文"></button>。

可以一口气开 100 个，睡一觉它们就都停了。这解决了并行开发的经典痛点：

没人愿意手动管理 Git worktree、解决端口冲突、为不同分支各起一套数据库——每个 orb 就是一套独立的小环境。

有人把 orb 当成“开了外挂的上下文窗口”：一个项目一个 orb，一个月回去一次，架构决策、项目背景全都在里面。

## 最难的两个问题：凭证和状态

远程执行环境里，凭证很麻烦。把密钥写进 orb 的文件里最省事，但 orb 长期存在，密钥会一直躺在磁盘上。

理想方案是短时效凭证，但极少有服务商允许你创建只活 7 天或 25 分钟的 API 密钥 <button class="pd-ts" data-t="21:56" data-who="嘉宾" data-en="So you're like, okay, well, maybe you should use short-lived secrets. So yes, even if you resurrect that orb two months later, the secret isn't valid anymore. But then you quickly realize that very few providers allow you to mint API keys that live only for 30 days or seven days or 25 minutes or whatever." aria-label="回原文"></button>，「创建 API 密钥」流程里根本没有这个选项 <button class="pd-ts" data-t="22:11" data-who="嘉宾" data-en="But then you quickly realize that very few providers allow you to mint API keys that live only for 30 days or seven days or 25 minutes or whatever. It's not a thing." aria-label="回原文"></button>。

> 【背景】节目之外的一个常见折中是用 1Password 的服务账户：智能体只拿到一个短时令牌，密钥本身不落盘。

状态管理同样琐碎：

3 个浏览器标签页连着同一个智能体会话，每个标签页是一个身份，底下又挂着来来去去的 WebSocket 连接——合上笔记本电脑、地铁过隧道，连接都会断。

听起来简单，做起来每个细节都要做决定。Amp 的经验是先发出去、拿到反馈，才知道一半的方案根本不用考虑。

## 一天 70 条错误报告，怎么消化？

Amp 发版太频繁，用户反馈也多——每天 60 到 70 条错误报告，比如“渐进式网页应用的图标在安卓上很难看”。

他们把报告功能做进了产品本身，智能体可以直接读取。

Dario 现在每天开工时说一句话：把所有未解决的问题过一遍，按标准挑 10 个分给我；

每个问题开一个 orb 去分类——追问用户、提出修复方案，或者判定不是问题。

他只负责逐个检查方案并推进，连给用户的邮件都可以直接从 Amp 里发 <button class="pd-ts" data-t="39:16" data-who="嘉宾" data-en="So I can start my day with things like Go through all of the open issues, assign 10 issues to me based on the following criteria. Then for each of those issues, create an orb that is triaging the issue and determining the next action, like follow up with the user to get more information, propose a fix, or don't fix it because it's not an actual issue." aria-label="回原文"></button>。

有个例子：用户想要 shell 补全脚本。智能体写完，Dario 看了一眼觉得可能慢，让它量一下——按一下补全要 600 毫秒。

换个实现方式，降到 30 毫秒，顺手又加上了 PowerShell 支持，四种 shell 的补全脚本就都有了。

放在两年前，这种需求根本不值得做；现在全程后台跑，几乎不花他精力。

## 警惕一种新型过劳

Dario 提醒，智能体时代[[认知负荷|认知负荷]]没有上限了——“你想把自己烧干完全可以” <button class="pd-ts" data-t="43:06" data-who="嘉宾" data-en="I mean, there is no... There is no ceiling anymore for cognitive load. You can completely fry yourself if you want to." aria-label="回原文"></button>。

他提到网上流传的“AI 精神崩溃”案例：有人不停让智能体干活、不停做决定，一直干到凌晨 4 点。

所以用智能体来降低自己的认知负荷，本身就是新的必修课。

另一个反直觉的提醒：以前开发成本高，你会先问“这真是个问题吗、值得修吗”；

现在做方案太容易，反而容易跳过这个问题直接动手。他说，还是得先退一步，问清楚用户到底想干什么 <button class="pd-ts" data-t="44:49" data-who="嘉宾" data-en="Have the agent go through the bug reports, categorize them. In many cases, that's the thing I had to want to say, instead of jumping straight to a solution, because, oh, we have agents now, it's easy to build a solution." aria-label="回原文"></button>。

## 本集带走

- 取消拉取请求、直接推主干，能显著提升交付速度，且质量不会因此下降；小块提交本身就是安全保障。
- 信任智能体的关键不在模型，而在环境：不给数据库删除权限、不在 GitHub 给推送权限，磨掉锋利边缘。
- Orb 这类按需计费的远程环境让大规模并行开发变得便宜，不用再手动管理 worktree 和端口冲突。
- 大批量重复工作（如每日错误报告分诊）可以交给智能体批量处理，人只做判断和把关。
- 开发变快之后，更要保留“这值得做吗”这个旧问题；认知负荷管理是智能体时代的新技能。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">我甚至敢说，即使你今天没有用 AI，如果你在你的组织里取消 pull request，你也可以获得两位数百分比甚至三位数百分比的生产力提升。</span>  
> *And I would even go as far as saying, even if you're not using AI today, you can get double-digit percentage, if not triple-digit percentage gains in productivity if you get rid of pull requests in your organization.*  
> <span class="qm">—— Dario Hamidi · [01:59]</span> ^q1

> <span class="qz">所以如果你感到有打开一个 pull request 的冲动，那对你来说是一个信号，说明有什么地方不对劲。</span>  
> *So if you feel the desire to open up a pull request, that's a signal to you that something is off.*  
> <span class="qm">—— Dario Hamidi · [04:02]</span> ^q2

> <span class="qz">质量不会改变，无论你有没有 pull request。</span>  
> *It doesn't change the quality, whether you have pull requests or whether you don't have pull requests.*  
> <span class="qm">—— Dario Hamidi · [08:27]</span> ^q3

> <span class="qz">现在，人类才是瓶颈，因为他们注意力有限，因为有这么多并行的工作在进行。</span>  
> *Now, humans are the bottleneck with their limited attention because so much parallel work is going on.*  
> <span class="qm">—— Dario Hamidi · [34:51]</span> ^q4

> <span class="qz">认知负荷已经没有上限了。</span>  
> *There is no ceiling anymore for cognitive load.*  
> <span class="qm">—— Dario Hamidi · [43:06]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-09-27-talks-ai-generated-code-is-already-competing-w|AI 生成的代码到底行不行：百万 PR 数据给出的答案]]<span class="pd-rz">同概念:拉取请求 (pull request)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:GitHub · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-09-talks-multiplayer-agentic-engineering-arjun-si|让非工程师也能下指令：Superconductor 的多人智能体协作法]]<span class="pd-rz">同公司:Cursor · 同概念:智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog|AI失控了别慌,先盯紧漏洞数量爆炸]]<span class="pd-rz">同概念:凭证 (credentials)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-11-talks-evolution-of-agentic-surfaces-gagan-bhat|Anthropic 构建生产级智能体的教训:harness 须为模型能力演进而生]]<span class="pd-rz">同概念:凭证 (credentials)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-09-03-changelog-forking-cal-com-to-closed-source|开源的钟摆摆向另一边：Cal.com 联合创始人 Pierre 谈 AI 时代的安全崩塌]]<span class="pd-rz">同公司:GitHub · 同概念:拉取请求 (pull request)、智能体 (agent)</span>

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
