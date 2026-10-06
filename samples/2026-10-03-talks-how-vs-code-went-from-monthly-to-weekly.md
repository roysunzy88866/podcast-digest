---
title: VS Code 周更背后：小团队如何用智能体重塑整个发布系统
podcast: 精选演讲
date: 2026-10-06
source_url: undefined
duration: "19:13"
type: episode
cover: "#64748b"
description: VS Code 团队成员讲述如何借 AI 从月度发布改为每周发布：让代码库为智能体做好准备、自动代码评审与错误修复，以及更快学习产品反馈的完整方法。
guests: ["[[Harald Kirschner]]"]
companies: ["[[VS Code]]", "[[Copilot CI]]"]
concepts: ["[[智能体]]", "[[agents.md]]", "[[代码存活率]]", "[[MCP]]", "[[playwright]]", "[[TypeScript Go]]", "[[代码审查]]", "[[评估]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-03-talks-how-vs-code-went-from-monthly-to-weekly#post","headline":"VS Code 周更背后：小团队如何用智能体重塑整个发布系统","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-03-talks-how-vs-code-went-from-monthly-to-weekly","mainEntityOfPage":"https://talk.solomind.cc/2026-10-03-talks-how-vs-code-went-from-monthly-to-weekly","description":"VS Code 团队成员讲述如何借 AI 从月度发布改为每周发布：让代码库为智能体做好准备、自动代码评审与错误修复，以及更快学习产品反馈的完整方法。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Harald Kirschner"},{"@type":"Organization","name":"VS Code"},{"@type":"Organization","name":"Copilot CI"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"agents.md"},{"@type":"Thing","name":"代码存活率 (code survival)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"playwright"},{"@type":"Thing","name":"TypeScript Go"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"评估 (evals)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"VS Code 周更背后：小团队如何用智能体重塑整个发布系统","item":"https://talk.solomind.cc/2026-10-03-talks-how-vs-code-went-from-monthly-to-weekly"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>VS Code 周更背后：小团队如何用智能体重塑整个发布系统</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# VS Code 周更背后：小团队如何用智能体重塑整个发布系统

<div class="pd-byl"><b>Harald Kirschner</b> · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-03-talks-how-vs-code-went-from-monthly-to-weekly.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但一旦你让智能体撞上这个，你有 10 个智能体、20 个智能体在运行并撞上同一个瓶颈，你 CI-CD 中任何缓慢的部分都会被复合放大。</div><div class="a">— Harald Kirschner <button class="pd-ts" data-t="07:24" data-who="Harald Kirschner" data-en="But once you hit that with agents, you have 10 agents, 20 agents running and hitting the same bottleneck, any slow part of your CI-CD will compound." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Harald Kirschner]]
>
> **公司** [[VS Code]] · [[Copilot CI]]
>
> **概念** [[智能体]] · [[agents.md]] · [[代码存活率]] · [[MCP]] · [[playwright]] · [[TypeScript Go]] · [[代码审查]] · [[评估]]

这一集的演讲者来自 [[VS Code|VS Code]] 团队,做的是 VS Code 和 [[Copilot CI|Copilot CI]] 相关的工作。

他讲的核心不是「怎么把[[智能体|智能体]]装进产品」,而是一个更少人聊的话题:**怎么用智能体来构建产品本身**。

这个团队规模很小,却要向超过 5000 万用户交付软件——而过去一年,多亏了 AI,他们把延续了 10 多年的月度发布周期改成了每周发布。

最有说服力的一个数字:团队很早就开始跟踪「[[代码存活率|代码存活率]]」——智能体写的代码中真正被提交的百分比,用来衡量智能体产出了多少被扔掉的垃圾。

GPT 4.1 起步时只有 55%,但随着框架(harness,即模型外面套的那层工具环境)的改进和新模型的出现,Claude Opus 4.6 已经达到 86%。

这个增长直接反映了开发者对 AI 代码的信任在上升 <button class="pd-ts" data-t="01:13" data-who="嘉宾" data-en="And that's a very small team shipping to over 50 million users. What happened is over the past year is we started tracking already early on this code survival metrics in VS Code." aria-label="回原文"></button>。

但成功本身带来了新问题:VS Code 是 GitHub 上最大的开源项目之一,AI 帮人提交 issue 后,issue 数量暴涨,质量参差;团队自己和社区开的 PR 也变多——有意思的是,社区 PR 被合并的数量反而在上升,而不是像所有人以为的那样涌进一堆垃圾 PR。

演讲者的核心主张是:**这不只是「日常多用 AI」,而是要演进整个软件交付系统,让 AI 在全流程中发挥作用**。

他把这条路拆成三层:更快地写代码(容易)、有质量地写代码(变难)、更快地学习——最后这层是大多数人错过的。

## 第一步:把代码库改造成智能体能干活的地方

最快出代码的阶段其实不难——总有那种「100 倍工程师」搭好 [[MCP|MCP]] 插件系统疯狂产出。真正的地基是让代码库「为智能体做好准备」:

- **写 [[agents.md|agents.md]]**:足够轻量、给智能体一张代码库地图(去哪看、怎么走)。它是活文档,要随智能体犯的错不断演进。那些在开发者体验上投入过的团队在这里收益最大——好文档和上手指南,智能体同样会读、同样受益。
- **把专家知识做成技能(skill)**:VS Code 早期就把无障碍最佳实践整体注入成一个所有人共用的技能,由无障碍负责人评审维护。以前这类事得把唯一的专家拉进来给反馈,现在专业知识被编码进了每个人的工具里。
- **检验标准很接地气**:「我一个 PM 能不能在 VS Code 仓库里有效地 vibe coding?」演讲者本人就这么干——年初他为了加 Ask Questions 工具提交了一个很粗糙的大 PR,几周内团队就基于它打磨出设计精良的正式体验。粗糙的原型铺好了地基,解锁了所有人的参与和讨论。

## 巨大的一步:切换到 TypeScript Go

任何构建慢、linting 慢、CI-CD 慢的代码库,人类还能靠切出去评审别的 PR 来消化等待;但当你有 10 个、20 个智能体同时撞上同一个瓶颈,**CI-CD 里任何慢的环节都会被复合放大**。

切到 [[TypeScript Go|TypeScript Go]](官方用 Go 语言重写的 TypeScript 编译器)给他们的构建带来了 10 倍提升——在智能体跑自动化 PR、依赖 CI-CD 循环拿反馈改进代码的规模下,这是质的差别。

## 让智能体「看见」UI:两个反馈循环

智能体写 UI 的通病:它说「看起来完美」,你打开一看全是错位——即使最新的模型也逃不掉。

演讲者反复强调的头号投资:**如果你的智能体不能直接使用你的产品来获得「一切是否正常」的反馈循环,这是最值得做的投资**,每次做 UI 都有回报。

他们做了两件事:

- **组件浏览器**:每次代码变更自动运行,截取 VS Code 中每个组件的截图并标出差异。改一个组件的连锁反应(别的东西移位、图标消失)立刻现形;评审 PR 时也能直接看到改动效果——以前他们要求每个开发者至少附上截图或视频,现在全自动了。
- **自我纠错循环**:VS Code 本质是跑在 Electron 里的网页应用(全是 HTML),所以可以用 [[playwright|Playwright]](浏览器自动化工具)做「slash launch」技能——让智能体打开 VS Code,按指定场景点击走一遍,沿途拿日志,自己验证修复前后是否有效。你点一下 launch 就去做下个任务,等它验证完再回来。类似方案在别的平台也有,演讲者举例 Xcode MCP:不用打开 Xcode 就能创建 iOS 应用、点开、截图,反馈循环非常紧密。

## 代码评审:先机器后人类

GitHub Copilot 的自动[[代码审查|代码评审]],他们起初并不信服,但几个月里它大幅改进,现在已经是**强制项**:每个 PR 都会被自动评审,而且可以按仓库风险调低、中、高三档力度,权衡成本收益。

关键规矩是:**评审的评论没全部解决之前,人类根本不看这个 PR**。

## 守住质量:智能体分诊 issue 和错误堆栈

更快地交付之后,必须守住质量。

因为用户装的是二进制,出了问题恢复成本极高,他们还放弃了以前的「YOLO 式发布」(发布日一切测完直接推给 100% 用户),改成分阶段发布,过程中监控错误日志和 issue——像 Web 应用的良好公民一样,因为已安装应用的回滚代价太大。

issue 侧:AI 帮不同语言背景的用户提交了更好的 issue,但量也爆炸了。

现在 AI 负责过滤垃圾、充实内容、翻译,并为每个 issue 指派领域负责人;同时保留人工反馈层——他们做了个 Chrome 扩展,让人类能修正智能体分诊的错误(比如标记重复 issue),这些修正再回流到上游的智能体工作里。

演讲者特别提醒:**让智能体干活的同时,一定要设计人类反馈的回路**。

更成体系的是错误堆栈流水线,全程自建工具、不用外部服务:每天收集约 510 亿条原始遥测数据,过滤出带完整堆栈的错误,指纹化分组分桶,最后每天产出约 10 个自动提交并指派给错误负责人的 issue,而且**自动创建 PR 尝试修复**。

演示的案例里,智能体自己查明了根因(某个取消请求不在 RPC 协议里),开好 PR,人只需要合并。

「你不在乎错误,你只想要一个更稳定的代码库。」

整条链是:智能体 + 确定性系统做分诊 → 提交 issue → 移交给多智能体系统生成 PR → 修复大部分自动落地,仅保留人工批准。

## 最被忽视的一层:更快地学习

「更快更好地打造产品」——写更多代码时,大多数人错过的恰恰是运用产品品味和产品学习。他们的做法:

- **VSC bench 自建[[评估|评测]]**:作为智能体化产品,必须有随手可用、极易扩展的产品评测。想加新评测场景?提交一个 GitHub issue,智能体从模板接手帮你搭好框架——来自 issue、客户对话等各渠道的开发者场景都能低成本收进评测,然后离线爬坡优化,再做在线实验。
- **理解你的评测至关重要**:他们做过一个实验,评测场景简单到只是「写一个含 hello world 的文件」,仅仅为了端到端测评测框架。结果同样一个五个字符的文件,最贵的模型消耗了 70 倍的 token——而且还不是开最高推理档的模型。了解模型在你的框架里如何反应,是极其重要的练习。
- **每日原型对话**:演讲者大量做原型,但大多不打算合入主仓库——原型是用来开对话的。团队现在开每日冲刺,小 squad、小工作流聚焦小块领域:今天给你看想法和样子,明天带着更新后的原型回来继续聊。从月度周期到每周再到每日,原型解锁了更深入的体验讨论。

## 本集带走

- **先看代码存活率**:跟踪智能体代码被提交的百分比(他们从 55% 做到 86%),这是衡量「AI 真的提效了还是只是生成了更多垃圾」最直接的单一指标。
- **给智能体修路,比催它跑得快更值钱**:agents.md 活文档、专家知识做成 skill、把 CI-CD 里每个慢环节提速(他们靠 TypeScript Go 拿到 10 倍构建提升)——因为智能体并行运行时,慢的部分会被复合放大。
- **让智能体能直接使用你的产品**:UI 截图对比的组件浏览器 + Playwright 式的自我验证循环,每次做 UI 都有回报。
- **评审流程改成「机器先行」**:自动评审强制覆盖、按风险调力度、评论未解决前人类不看 PR。
- **给智能体配人工纠错回路**:自动分诊 issue 和错误堆栈(他们做到每天自动提交 issue 并自动开修复 PR),但必须留一条人类能修正并回流的路。
- **别只调你和智能体的协作,要调它怎么拿到反馈**:自建易扩展的评测(一个 issue 就能加场景)、用小原型驱动每日对话——更快的学习才是 AI 时代真正的瓶颈。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">但一旦你让智能体撞上这个，你有 10 个智能体、20 个智能体在运行并撞上同一个瓶颈，你 CI-CD 中任何缓慢的部分都会被复合放大。</span>  
> *But once you hit that with agents, you have 10 agents, 20 agents running and hitting the same bottleneck, any slow part of your CI-CD will compound.*  
> <span class="qm">—— Harald Kirschner · [07:24]</span> ^q1

> <span class="qz">对我们来说，TypeScript Go 让我们的构建获得了 10 倍的提升，在智能体运行的自动化 PR 的规模下，以及它们需要那个 CI-CD 循环来获取反馈以改进代码的情况下，这是一个巨大的提升。</span>  
> *And for us, TypeScript Go was a 10 times improvement in our builds, which at the scale of automatic PRs running with agents and them needing that CI, CD loop for feedback to improve the code is a massive improvement.*  
> <span class="qm">—— Harald Kirschner · [07:36]</span> ^q2

> <span class="qz">如果你的智能体无法直接使用你的应用程序、你的产品来获得「一切是否正常工作」的反馈循环，那么这是一项非常值得的投资，每次你做 UI 工作时都会有回报。</span>  
> *If your agent cannot use your application, your product directly to get this feedback loop of is it all working, then that's a really big investment that pays off every time you work on UI.*  
> <span class="qm">—— Harald Kirschner · [08:48]</span> ^q3

> <span class="qz">但对我们来说，review 完成之后，在所有评论都被解决和处理完之前，人类甚至不会去看 PR。</span>  
> *But for us, after a review is done, humans will not even look at PR until all the comments are resolved and addressed.*  
> <span class="qm">—— Harald Kirschner · [11:53]</span> ^q4

> <span class="qz">你不在乎错误，你只想要一个更稳定的代码库。</span>  
> *You don't care about errors, you just want to get a more stable code base.*  
> <span class="qm">—— Harald Kirschner · [14:59]</span> ^q5

> <span class="qz">同样一个五个字符的文件，最贵的模型消耗了 70 倍的 token。</span>  
> *The same five character file took the most expensive model 70x more tokens.*  
> <span class="qm">—— Harald Kirschner · [17:18]</span> ^q6

> <span class="qz">找出你的瓶颈在哪里，以真正更高质量地发布、更快地发布、更快地学习，然后修复下一个瓶颈。</span>  
> *Find out where your bottlenecks are to actually ship higher quality, ship faster, and learn faster, and fix that next bottleneck.*  
> <span class="qm">—— Harald Kirschner · [18:39]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:MCP、智能体 (agent)、评测 (evals)</span>
- [[2026-08-11-talks-circleback-ceo-ali-haghani-why-your-comp|Circleback 创始人 Ali：把公司记忆和运营流程全部交给智能体]]<span class="pd-rz">同概念:代码评审 (code review)、智能体 (agent)、评测 (evals)</span>
- [[2026-09-17-sed-scaling-agent-workloads-at-vercel|把智能体从「桌上的宠物」搬进云端：Vercel 开源框架 Eve]]<span class="pd-rz">同概念:MCP、智能体 (agent)、评测 (evals)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同概念:MCP、代码评审 (code review)、智能体 (agent)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同公司:VS Code · 同概念:Playwright、智能体 (agent)、MCP</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:智能体 (agent)、评测 (evals)</span>

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
