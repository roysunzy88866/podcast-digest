---
title: "Jev 决策模型:9 美分分析 2000 个 PR 的用法全解"
podcast: How I AI
date: 2026-09-28
source_url: undefined
duration: "26:22"
type: episode
cover: "#64748b"
image: "/covers/2026-09-28-howiai-jev-for-beginners-how-to-use-it-and-what.jpg"
description: "How I AI 主播 Claire 演示 TypeSafe 新模型 Jev:这个只做决策、便宜到离谱的小模型怎么分类海量数据、搭配大模型解锁产品。"
companies: ["[[TypeSafe]]", "[[ChatPRD]]"]
concepts: ["[[Jev]]", "[[LLM]]", "[[Astra]]", "[[Codex]]", "[[Claude Code]]", "[[分类与切分]]", "[[聚类]]", "[[实时]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/covers/2026-09-28-howiai-jev-for-beginners-how-to-use-it-and-what.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-28-howiai-jev-for-beginners-how-to-use-it-and-what#post","headline":"Jev 决策模型:9 美分分析 2000 个 PR 的用法全解","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-28-howiai-jev-for-beginners-how-to-use-it-and-what","mainEntityOfPage":"https://talk.solomind.cc/2026-09-28-howiai-jev-for-beginners-how-to-use-it-and-what","description":"How I AI 主播 Claire 演示 TypeSafe 新模型 Jev:这个只做决策、便宜到离谱的小模型怎么分类海量数据、搭配大模型解锁产品。","datePublished":"2026-09-28","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-09-28-howiai-jev-for-beginners-how-to-use-it-and-what.jpg","about":[{"@type":"Organization","name":"TypeSafe"},{"@type":"Organization","name":"ChatPRD"},{"@type":"Thing","name":"Jev"},{"@type":"Thing","name":"LLM"},{"@type":"Thing","name":"Astra"},{"@type":"Thing","name":"Codex"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"分类与切分 (classification)"},{"@type":"Thing","name":"聚类 (clustering)"},{"@type":"Thing","name":"实时 (real-time)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"Jev 决策模型:9 美分分析 2000 个 PR 的用法全解","item":"https://talk.solomind.cc/2026-09-28-howiai-jev-for-beginners-how-to-use-it-and-what"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Jev 决策模型:9 美分分析 2000 个 PR 的用法全解</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Jev 决策模型:9 美分分析 2000 个 PR 的用法全解

<div class="pd-byl">2026-09-28</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-28-howiai-jev-for-beginners-how-to-use-it-and-what.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但如果你当过软件工程师,软件工程 90% 的工作就是做这些事情,返回一个选择、给某样东西打分、路由、说是或否。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="07:06" data-who="嘉宾" data-en="But if you've been a software engineer, this is like 90% of software engineering is like doing these things, returning a choice, scoring something, routing, saying yes or no." aria-label="回原文"></button></div></div>

> [!info] 关联
> **公司** [[TypeSafe]] · [[ChatPRD]]
>
> **概念** [[Jev]] · [[LLM]] · [[Astra]] · [[Codex]] · [[Claude Code]] · [[分类与切分]] · [[聚类]] · [[实时]]

这一集是 How I AI 的「[[Jev|Jev]] 周」第一期,主角就是主播本人 Claire——她也是 [[ChatPRD|ChatPRD]](一个 AI 产品经理助手应用)的开发者。最近新模型扎堆发布,但她最想聊的是 [[TypeSafe|TypeSafe]] 刚推出的 Jev:一个快速、便宜、不做「系统一决策」的模型。她说这是她最近体验过的模型里用例爆发最多的一个,过去一周用它完成了她认为价值几十万甚至上百万美元的工作,而 Jev 的 token 花费不到 10 美元(很多还被补贴,比如 Vercel 的 AI gateway 上目前免费)。

## Jev 是什么:文本进,类型安全的值出

Claire 用 TypeSafe 博客里的一张表来解释:左边是普通 [[LLM|LLM]],右边是 Jev 这样的模型。两者都接收文本输入(Jev 不收图像,但收图像的文字描述),区别在输出——标准 LLM 是文本进、文本出,返回字符串;Jev 是文本进、返回「类型安全的值」,也就是从你预先定义好的选项里挑一个返回,比如「是这个或那个」「是或否」「一到十分」,非常简单 <button class="pd-ts" data-t="03:00" data-who="Claire" data-en="So if I were to explain JEV to you, I would go to this table on the TypeSafe blog post announcing JEV, and it basically compares normal LLMs on the left, JEV style LLMs on the right." aria-label="回原文"></button>。

但它便宜和快到什么程度?其他模型每百万输出 tokens 可能收几美分到几百美元;Jev 只按输入 tokens 收费——因为它几乎什么都不输出——每百万输入 tokens 只要 4 美分 <button class="pd-ts" data-t="04:09" data-who="Claire" data-en="JEV only charges you on input tokens because it barely outputs anything. And it is four cents per million input tokens. It is like dirt, freaking cheap." aria-label="回原文"></button>。

它擅长的是做决策,所以被称为「决策模型」:你给它一个决策,它做出一个决策。需要「聪明的 if 语句」的场景它都行——该往左还是往右?

好的交给这个人、坏的转客服?它还很擅长给数据[[分类与切分|分类]]、跑[[实时|实时]]场景——快到你可以把一个 LLM 放进实时循环里,用其他模型性能根本不够 <button class="pd-ts" data-t="05:21" data-who="Claire" data-en="So it is fast, fast, fast. So you can put an LLM in a real time loop in a way that was not performant enough with these other models. I do want to explain exactly what Jev outputs." aria-label="回原文"></button>。

## 它只返回三种东西

Jev 的返回值只有三种(文档里的 primitives 和 cookbooks 里的模式最值得看):**choice**——给它文本和一个选项列表,它挑一个,比如「约会该穿什么」的选项里有连衣裙、牛仔裤、运动服,它可能选连衣裙;**score**——打分,比如把 bug 分为外观问题、功能损坏还是阻塞,自动做严重度分诊;**null**——一种布尔变体,告诉你一个问题的答案是「是」的可能性,比如「Claire 是播客主持人吗」会返回约 99% 的「是」<button class="pd-ts" data-t="06:59" data-who="Claire" data-en="That I am a podcaster. Okay. So this is how, you know, you would think about the three things that can return." aria-label="回原文"></button>。

听起来简单,但 Claire 点破:如果你当过软件工程师,软件工程 90% 的工作就是这些事——返回一个选择、给东西打分、路由、说是或否 <button class="pd-ts" data-t="07:06" data-who="Claire" data-en="And again, very simple. But if you've been a software engineer, this is like 90% of software engineering is like doing these things, returning a choice, scoring something, routing, saying yes or no." aria-label="回原文"></button>。她自己用它做的头一件事,就是对海量、难分类但高价值的非结构化数据做分类 <button class="pd-ts" data-t="07:21" data-who="Claire" data-en="And so it is just so, so, so powerful. And the number one thing I have been using it for is classification of vast sets of unstructured data that would have been annoying to classify but is very high value." aria-label="回原文"></button>。

## 三个任何人都能跑的分析用例

**给 PR 分类，回答「我们的工程精力花在哪了」。** 这就是她说的「三年前我真愿意花 10 万美元买的东西」<button class="pd-ts" data-t="07:54" data-who="Claire" data-en="This is one CTOs, VPs of product, you know, chief product officers, listen up. This is the one that three years ago I would have paid truly $100,000 for. So what I had Jev do is look at thousands of PRs." aria-label="回原文"></button>。

她连接 GitHub 拉下所有 PR，用 Jev 做两两配对判断：PR A 和 PR B 是不是在处理同一个主题？注意 Jev 不会告诉你主题是什么，只会说「相关/不相关」——她靠这种海量判断做[[聚类|聚类]]。

先在营销站上跑，112 个 PR 只花 1.1 美分；再在 ChatPRD 上跑：约两分钟分析了 1,700 个 PR、找出 17,000 对可匹配项，主题由 Gemini Flashlight(一个便宜的大模型)标注，总共花了整整 9 美分 <button class="pd-ts" data-t="09:33" data-who="Claire" data-en="Again, it ran very, very, very fast and very cheap, but then I ran it on my ChatPRD app, which has about 2,000 PRs on it to date in this calendar year. Because it has a lot more PRs, it cost me a lot more money, and by a lot more money, I mean nine whole cents." aria-label="回原文"></button>。结果直接回答了董事会总在问的问题：将近 30% 的 PR 精力投入在平台安全和基础设施上，其余分布在对话式 AI 可靠性、数据与集成、文档编辑和原型设计等方向，还能看到各方向的投入随月份上升。

**分析你本地的 [[Claude Code|Claude Code]] / [[Codex|Codex]] 会话。** 这些会话都存在本地,可以直接对它们跑同样的分类分析。

Claire 发现一月她几乎全在做工程任务,到九月工程任务已不到 40%,更多时间花在智能体协作、用 Codex 做视频、客户交付上。她说,对你桌面上这些 LLM 完全能解析的数据做元分析,基本不花钱,却能拿到以前很难获得的洞察 <button class="pd-ts" data-t="12:42" data-who="Claire" data-en="And so if you think about this, it is just super useful to do meta-analysis on All this data that's sitting on your desktop that LLMs can totally parse, it will cost you basically no money and give you a lot of insight that I think previously would have been hard to get." aria-label="回原文"></button>。

**清理 Gmail。** 第三例她没展示(涉及隐私),但做法很简单:给定邮件主题行和摘要片段,让 Jev 分类、打分「这封能不能删」,速度很快,产出干净的标签后再让另一个模型处理。

## 用法核心:Jev 加一个 LLM 搭档

单用 Jev 还行,Jev 配上一个 LLM 搭档就超级强大 <button class="pd-ts" data-t="13:27" data-who="Claire" data-en="is okay. Jev with an LLM buddy is super powerful. So what I like to do with Jev is I like to take a big corpus of information, tag it, categorize it, cluster it, filter it, and then apply really precise AI actions to the right clusters." aria-label="回原文"></button>。她的套路是:拿一大堆信息语料,用 Jev 打标签、分类、聚类、过滤,再对正确的聚类应用精确的 AI 操作——比如只把高严重性 bug 交给大模型深度分诊,或者把「确定可删」的邮件过滤掉、用智能体处理剩下的 <button class="pd-ts" data-t="13:31" data-who="Claire" data-en="Jev with an LLM buddy is super powerful. So what I like to do with Jev is I like to take a big corpus of information, tag it, categorize it, cluster it, filter it, and then apply really precise AI actions to the right clusters." aria-label="回原文"></button>。

最大的一次实战是 ChatPRD 的「产品洞察图谱」:她想吸进全公司的信号数据、给出有趣洞察,用尽各种前沿模型都没做成——数据里细微差别太多,原型花了几千甚至上万美元。她说这次是用 Jev 攻克了,但关键不是 Jev 全包,而是她分清了两类活:分类、聚类、映射这些交给 Jev;分析、战略、洞察提取交给「大脑大的」[[Astra|Astra]];内容生成交给 Sol 或 Luna 这类模型。现在系统拉进约 1,100 个原始数据源——PR、支持工单、Granola 对话、Linear 工单——做了超过 20 万次分类和成对分组,Jev 那边只花了约 4 美元(Astra 那边贵得多),产出「客户说的想要」和「实际在做的事」之间的差距及趋势,把这个产品功能变成了更赚钱的业务 <button class="pd-ts" data-t="17:53" data-who="Claire" data-en="It's cost me a lot more on the Astra side. But I just think like thinking through where classification, like super smart classification clustering decisions could unlock really complex products and how you might use, as I'm showing here, JEV alongside some smarter models, it's like really blowing my mind right now." aria-label="回原文"></button>。

## 两个一个下午做出来的实时应用

**观众信号仪表盘。** 她接上 YouTube V3 API,拉下播客全部约 4,500 条评论,用 Jev 分类正面/负面/中性、识别哪些包含未来剧集点子(找到 58 条),再用 Astra 生成仪表盘:按集看情感(有一期 61% 正面、一期 80% 正面)、观众请求看板,还用 Jev 做了针对评论的实时搜索——输入「slop」能瞬间扫完全部 4,400 条找出相关评论。但她特别提醒别被疯传 demo 骗了:背后要把结果分批、打分、再把高分推上去,不是随手把 Jev 插中间就能秒评 4,400 条 <button class="pd-ts" data-t="21:52" data-who="Claire" data-en="So there is some architecture here. I don't want to pretend like Jev, you just like slap Jev in the middle and evaluate all 4,400 that quickly. But you can imagine this is very" aria-label="回原文"></button>。

**语音情绪变色引言机。** 一个接收语音的实时应用:OpenAI 实时语音 API 进来一句话,Jev 给一组预设的十六进制颜色值打分选最高分,再从引言 API 的预设过滤器里选、按情感打分,屏幕上立刻显示匹配情绪的颜色和引言。

演示里「我今天恋爱了」「等不及周末了」都立刻选对了颜色和引言。本地跑还有延迟,可以靠缓存优化,但足以说明这类实时体验能怎么做。

## 本集带走

- **判断该不该用 Jev**:需要生成内容(写代码、聊天)用标准 LLM;需要「聪明的 if 语句」——分类、打分、路由、是或否——用 Jev,它每百万输入 tokens 只要 4 美分、几乎不输出。
- **记住三种返回值**:choice(从选项里挑)、score(严重度/评分)、null(「是」的概率),软件工程里大部分判断逻辑都能拆成这三样。
- **先聚类、再让大模型精修**:用 Jev 做海量「相关/不相关」判断形成聚类,用便宜大模型标注主题,只把高价值的聚类交给贵的模型深挖——9 美分就能搞清 2,000 个 PR 的精力分布。
- **今天就能跑的两个分析**:对你本地的 Claude Code/Codex 会话做分类,看自己的时间都花哪了;对 YouTube 评论或 Gmail 做同款分类过滤。
- **实时玩法要先做架构**:分批、打分、推高分组,别指望把 Jev 随手插中间就能秒级评估全部数据。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">但如果你当过软件工程师,软件工程 90% 的工作就是做这些事情,返回一个选择、给某样东西打分、路由、说是或否。</span>  
> *But if you've been a software engineer, this is like 90% of software engineering is like doing these things, returning a choice, scoring something, routing, saying yes or no.*  
> <span class="qm">—— 嘉宾 · [07:06]</span> ^q1

> <span class="qz">这就是三年前我真的愿意花 10 万美元买的东西。</span>  
> *This is the one that three years ago I would have paid truly $100,000 for.*  
> <span class="qm">—— 嘉宾 · [07:54]</span> ^q2

> <span class="qz">因为它的 PR 多得多,所以花的钱也多得多,所谓多得多,我是指整整 9 美分。</span>  
> *Because it has a lot more PRs, it cost me a lot more money, and by a lot more money, I mean nine whole cents.*  
> <span class="qm">—— 嘉宾 · [09:33]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-09-30-howiai-openai-dev-day-2026-the-releases-that-ac|OpenAI Dev Day 全复盘:从智能体 Dot 到 8 倍速 Astra]]<span class="pd-rz">同概念:Astra、Codex、Jev</span>
- [[2026-09-30-lennys-jev-8-real-use-cases-for-the-fastest|又快又免费的 Jev：让 AI 变成「最聪明的函数」]]<span class="pd-rz">同概念:Jev、LLM、实时 (real-time)</span>
- [[2025-05-22-talks-mastering-claude-code-in-30-minutes|Claude Code 实战技巧：从提问到并行]]<span class="pd-rz">同概念:Claude Code、LLM</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-28-a16z-ai-can-write-code-why-isnt-software-bett|AI 这么聪明,自动化去哪儿了?Jev 把智能装进软件本身]]<span class="pd-rz">同公司:TypeSafe · 同概念:Jev、Claude Code、Codex</span>
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|把 AI 当员工来管理:Claire Vo 的九个智能体生活实战]]<span class="pd-rz">同公司:ChatPRD · 同概念:Claude Code</span>
- [[2026-singju-openclaw-80apps|OpenClaw 创始人 Peter Steinberger：让智能体直接接管你的整台电脑]]<span class="pd-rz">同概念:Claude Code、Codex</span>

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
