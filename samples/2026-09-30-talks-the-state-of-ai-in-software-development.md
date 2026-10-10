---
title: 20万工程师的真实数据：AI 到底给开发者提速了多少
podcast: 精选演讲
date: 2026-10-02
source_url: undefined
duration: "18:59"
type: episode
cover: "#64748b"
description: DX 副 CTO Justin Riach 基于约 20 万工程师的平台数据，讲 AI 对开发速度、质量、度量方法的真实影响。
guests: ["[[Justin Reock]]"]
companies: ["[[DX]]"]
concepts: ["[[智能体]]", "[[开发者体验]]", "[[DORA]]", "[[PR 大小]]", "[[METR]]", "[[代码生成]]"]
category: AI 编程
tags:
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-30-talks-the-state-of-ai-in-software-development#post","headline":"20万工程师的真实数据：AI 到底给开发者提速了多少","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-30-talks-the-state-of-ai-in-software-development","mainEntityOfPage":"https://talk.solomind.cc/2026-09-30-talks-the-state-of-ai-in-software-development","description":"DX 副 CTO Justin Riach 基于约 20 万工程师的平台数据，讲 AI 对开发速度、质量、度量方法的真实影响。","datePublished":"2026-10-02","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Justin Reock"},{"@type":"Organization","name":"DX"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"开发者体验 (developer experience)"},{"@type":"Thing","name":"DORA"},{"@type":"Thing","name":"PR 大小 (PR size)"},{"@type":"Thing","name":"METR"},{"@type":"Thing","name":"代码生成 (code generation)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"20万工程师的真实数据：AI 到底给开发者提速了多少","item":"https://talk.solomind.cc/2026-09-30-talks-the-state-of-ai-in-software-development"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>20万工程师的真实数据：AI 到底给开发者提速了多少</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 20万工程师的真实数据：AI 到底给开发者提速了多少

<div class="pd-byl"><b>Justin Reock</b> · DX 副 CTO · 2026-10-02</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-30-talks-the-state-of-ai-in-software-development.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">即使工程师从模型那里得到的是 100% 准确的即时代码——事实并非如此——你仍然只是在攻击整个价值流中大约 14% 到 16% 的部分。</div><div class="a">— Justin Reock <button class="pd-ts" data-t="15:04" data-who="Justin Reock" data-en="Even if engineers are getting like 100% accurate instant code coming from the models, which they are not, you would still only be attacking anywhere from maybe 14 to 16% of the overall value stream." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Justin Reock]]
>
> **公司** [[DX]]
>
> **概念** [[智能体]] · [[开发者体验]] · [[DORA]] · [[PR 大小]] · [[METR]] · [[代码生成]]

用 AI 写代码到底让工程师变快了多少？说这话有分量的人是 Justin Riach——[[开发者体验|开发者体验]]研究平台 [[DX|DX]] 的副 CTO,他们的平台由做过 [[DORA|DORA]] 指标、Space 框架的那批人打造，这次分享基于约 20 万名工程师的数据。他的答案会泼一盆冷水：速度指标在涨，但中位数只有 7.7%,没有一家公司跑出 2 倍提升；而更麻烦的是，工程师**感觉**自己快了很多，实际数据却几乎没动。

## 速度：指标在涨，感知在虚胖

先看部署频率(DORA 四个关键指标之一，衡量交付速度的方向性指标)：稳步上升，虽然近期略有趋缓——早期一部分激增只是因为人们更频繁地提交 PR。这个指标只覆盖从创建 PR 到部署上线这一段，不反映回退率、缺陷率、变更失败率。分地区看，北美持续上行，欧洲最近一个季度有所回落，可能与 token 支出能力和监管差异有关。

但最扎眼的是「感知交付速率」：工程师觉得自己快了约 4.5%——考虑到一整年的巨额 AI 投入，这个数字低得反常。Justin 拿出那个出了名有缺陷的 [[METR|METR]] 研究做参照：16 名工程师的实际生产率下降了约 19%,感知却上升了约 20%,感知与现实的差距高达 40%。

## 质量：波动剧烈，且出现一个反常的张力

变更失败率(DORA 质量指标，越低越好)变得非常波动：有的公司恶化了 2 个百分点——听起来不多，但行业基准约是 4%,等于多交付了 50% 的缺陷。Justin 强调这种分化模式在没有 AI 时也存在，根源在发布流水线和自动化测试；AI 改变的是振幅，把它推到了前所未有的极端。

更反常的是两个通常同步的定性指标分道扬镳了：代码可维护性感知上升了近 4%,而变更信心——「我相信我推上线的改动不会弄坏东西」——下降了 6%。张力就在这里：[[智能体|智能体]]和助手让我更容易理解和修改眼前的代码，但我更怕弄坏东西了，比一年前更怕。

原因之一是 [[PR 大小|PR 大小]]在可测量地膨胀：一年内平均从 44 行涨到 72 行，接近翻倍。多个因素叠加：模型被训练得倾向输出相对平庸的代码(平均律)；构建流水线要跑 45 分钟，没人愿意为四个函数开四个 PR 各等一轮，干脆全塞进一个。

但每多一行代码就多一个潜在 bug、一个潜在漏洞，还增加评审负担。连锁反应是：「我能做小的增量改动」这项开发体验驱动因素下降了 10%,是过去一年跌得最狠的之一——而增量交付恰恰是易回滚、易评审的基础。

## 谁在用，谁受益

初级工程师用 AI 最多——这不奇怪，新人需要忘掉的东西更少，一毕业就在用这类工具。但有意思的是：对同样的用例，初级开发者消耗的 token 明显更多(学习曲线)，而最终的时间节省，初级和 staff 级以上工程师基本持平——资深工程师更容易发现幻觉、理解改动周边的架构。小公司在时间节省上领先，因为组织复杂度更低、流水线更简单。

## 怎么度量：别扔掉老指标

「花了 1000 万 token 钱，我们的 10 倍生产力在哪？」——今年所有组织都得回答这个问题。

Justin 的核心主张：**不要抛弃已建立信任的基础指标**，AI 度量要做的是看 AI 如何影响这些指标。方法是把用户分组，在 PR 周期时间、PR 大小、评审推回这些基础指标上做组间对比。他给出一个三维度框架：使用率(日活/周活)→ 影响力(使用率上升后哪些业务指标在动)→ 成本(「上一次炒作周期过了 15 年我们还没搞清云成本，这次更贵，必须度量」)。

另外要度量平台的 AI 就绪度——「2024 年我们给每人配了编程助手，2025 年开始建智能体，现在才发现基础设施根本没准备好」。清单包括：清晰结构化的文档、关系直白的数据结构、模块化代码、可靠的本地 CI、不飘忽的测试套件。

听着耳熟？这就是过去的「良好开发者体验」——对人类有益的对智能体也有益，颇具悖论意味的是，我们可能终于要做那些欠了几十年的投资了。

## 代码生成从来不是瓶颈

为什么要把 AI 整合进整个软件交付生命周期？因为即使模型给出 100% 准确的即时代码——事实并非如此——你也只是在攻击整个价值流中约 14% 到 16% 的部分。

他们近期开展的一项研究：速度指标中位数增长仅 7.7%,平均 13%,最好的公司也只有 70% 上下。**没有人达到 2 倍、5 倍、10 倍。** 因为 AI 省下的时间，仍被会议缠身、上下文切换、开发环境摩擦这些非 AI 因素吃掉。

正如约束理论的 Ellie Goldratt 会说的：在非瓶颈环节节省的一小时毫无价值。得找到瓶颈、修掉瓶颈。几个正在这么做的案例：

- **Zapier**:用智能体生态处理站会摘要等行政开销，站会从每周五次减到两次，工程师入职缩到约两周(行业基准一个月以上)。最关键的是：每位工程师带来约 15% 的额外价值创造后，他们反而以公司史上最大规模在招人——单个工程师产能更高、回报更高，多招人就是竞争优势。Justin 点评：这是吞吐量和创新能力的故事，不是替换人头的故事。
- **FAIR**:每周约 3000 次由 PR 触发的自动化代码审查，只查表面问题，结果留在 PR 评论里，下一个人工审查者一眼知道智能体看过什么。
- **Spotify**:为 SRE 建了智能体，从 runbook 和事件上下文里汇总修复步骤推进沟通频道，事故发生时即刻有上下文，省掉几分钟的排查。

## 本集带走

- **感知和现实差距巨大**：工程师觉得自己快了，聚合数据几乎持平；METR 研究里感知与实际差了约 40%。度量 AI 收益必须看客观指标，不能靠问卷感受。
- **盯住 PR 大小**：平均 44 行涨到 72 行，每多一行就多一个潜在 bug 和评审负担——这可能是今年最值得盯的单一指标。
- **度量方法：老指标 + 分组对比**：不扔掉 DORA 等已验证的基础指标，把 AI 用户分组后在这些指标上做组间比较，三个维度依次是使用率、影响力、成本。
- **别只攻[[代码生成|代码生成]]**：它只占价值流的 14-16%;中位数提速 7.7%、无人到 2 倍的根因是会议、切换、环境摩擦这些真瓶颈没被碰。
- **平台就绪度 = 欠了几十年的开发体验债**：好文档、模块化代码、稳定测试既利于人也利于智能体，现在是补课的理由。
- **学 Zapier 的态度**：人均多创造 15% 价值后加大招聘——AI 是吞吐量放大器，不是人头替代方案。

<div class="pd-sec pd-sec-q">全部金句 <span>13 条</span></div>

> <span class="qz">即使工程师从模型那里得到的是 100% 准确的即时代码——事实并非如此——你仍然只是在攻击整个价值流中大约 14% 到 16% 的部分。</span>  
> *Even if engineers are getting like 100% accurate instant code coming from the models, which they are not, you would still only be attacking anywhere from maybe 14 to 16% of the overall value stream.*  
> <span class="qm">—— Justin Reock · [15:04]</span> ^q1

> <span class="qz">没有人达到 2 倍，没有人达到 5 倍，没有人达到 10 倍。</span>  
> *Nobody hit 2x, nobody hit 5x, nobody hit 10x.*  
> <span class="qm">—— Justin Reock · [15:40]</span> ^q2

> <span class="qz">正如约束理论、《目标》的作者、《凤凰项目》灵感来源的 Ellie Goldratt 会告诉我们的那样：在非瓶颈环节节省的一小时是毫无价值的。</span>  
> *And as Ellie Goldratt from the theory of constraints and the goal and inspiration for the Phoenix project would tell us that an hour saved on something that isn't the bottleneck is worthless.*  
> <span class="qm">—— Justin Reock · [16:09]</span> ^q3

> <span class="qz">我现在比一年前更害怕弄坏东西。</span>  
> *I'm more afraid now of breaking things than I was a year ago.*  
> <span class="qm">—— Justin Reock · [06:49]</span> ^q4

> <span class="qz">这背后有多种原因，但确实值得一提：每多一行代码，就多一个潜在的 bug、一个潜在的漏洞。</span>  
> *So there's multiple reasons for this, but it really bears mentioning that every extra line of code is a potential bug, a potential vulnerability.*  
> <span class="qm">—— Justin Reock · [08:00]</span> ^q5

> <span class="qz">现在就像，好吧，现在先把东西弄出来，而被生成的代码本质上会是平庸的，因为这是平均律。</span>  
> *Now it's like, well, now let's get the thing out and the code that's being generated is gonna be essentially mediocre because it's law of averages.*  
> <span class="qm">—— Justin Reock · [07:34]</span> ^q6

> <span class="qz">所以在感知生产率与实际生产率之间大约有 40% 的差距。</span>  
> *So there was like a 40% spread in perception of productivity versus actual productivity.*  
> <span class="qm">—— Justin Reock · [04:25]</span> ^q7

> <span class="qz">但事实证明，对人类有益的东西对智能体也有益，所以颇具悖论意味的是，我们可能终于要做那些过去几十年我们就该做的投资了。</span>  
> *But it turns out that what's good for humans is also good for agents, so we may finally, paradoxically, be making those investments that we should have been making over the last couple of decades.*  
> <span class="qm">—— Justin Reock · [14:09]</span> ^q8

> <span class="qz">我喜欢这么说：在 2024 年，我们给每个人配备了编程助手。在 2025 年，我们开始构建智能体。现在我们意识到，我们的基础设施根本没为这些东西做好准备。</span>  
> *I like to say that in 2024, we gave everybody a coding assistant. In 2025, we started building agents. Now we're realizing that our infrastructure wasn't ready for any of this.*  
> <span class="qm">—— Justin Reock · [13:31]</span> ^q9

> <span class="qz">有个挺合理的笑话是：距离上一次大型炒作周期已经过去 15 年了，我们仍在试图搞清楚云成本，但这些东西正变得相当昂贵。</span>  
> *It's a fair joke that we're 15 years after the last major hype cycle and we're still trying to figure out cloud costs, but this stuff is getting pretty expensive.*  
> <span class="qm">—— Justin Reock · [12:35]</span> ^q10

> <span class="qz">这是一个吞吐量的故事。这是一个创新能力提升的故事。这不是一个替换人力的故事。</span>  
> *This is a throughput story. This is an increased innovative capacity story. This is not a headcount replacement story.*  
> <span class="qm">—— Justin Reock · [17:36]</span> ^q11

> <span class="qz">但这个故事里我最喜欢的部分是，他们看到每位工程师带来了大约 15% 的额外价值创造，所以他们的招聘规模超过了公司整个历史上任何时期，因为他们认识到了这里的真相：他们从单个工程师身上获得了更多产能，从单个工程师身上获得了更好的投资回报，而招聘更多工程师将提升他们的竞争优势。</span>  
> *But my favorite part about this story is that they're seeing about a 15% additional value creation per engineer, so they are hiring more than they have in the history of their entire company because they realize the truth here, that they're getting more capacity per single engineer, they're getting a better return on investment per single engineer, and hiring more engineers will improve their competitive edge.*  
> <span class="qm">—— Justin Reock · [17:14]</span> ^q12

> <span class="qz">所以就原始的时间节省和这方面的总体产出而言，在更多使用这项技术的初级工程师与更容易发现幻觉、理解所做改动周边架构的 staff 工程师之间，差距相当平。</span>  
> *So in terms of like raw time savings and the aggregate output of this, it's pretty flat between junior engineers who are using the tech more and staff engineers who have an easier time spotting hallucinations, understanding the architecture around the changes they're making and things like that.*  
> <span class="qm">—— Justin Reock · [10:04]</span> ^q13

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2025-10-06-talks-agents-for-complex-software-engineering|Vibe debugging：代码生成之后，生产环境才是真正的硬仗]]<span class="pd-rz">同概念:代码生成 (code generation)、智能体 (agent)</span>
- [[2026-10-06-talks-move-fast-and-don-t-break-things-scaling|快速迭代，但别把数据库搞挂]]<span class="pd-rz">同概念:开发者体验 (developer experience)、智能体 (agent)</span>
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|一千人公司里的五人小队:Eddie Kim 怎么用 Claude Code 花10周造出 Gusto Co-Founder]]<span class="pd-rz">同公司:DX · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-08-latent-space-modal|不只做推理：Modal 如何跨界多节点训练与智能体云]]<span class="pd-rz">同公司:DX · 同概念:智能体 (agent)</span>
- [[2026-08-19-talks-shipping-ai-to-a-million-patients-withou|给患者打电话之前,先让 AI 在仿真里跑几万遍:Euphonia 的医疗 AI 安全栈]]<span class="pd-rz">同概念:DORA、智能体 (agent)</span>
- [[2025-10-19-lennys-how-to-measure-ai-developer-productivity|AI时代衡量开发者生产力：Nicole Forsgren 谈怎么测才不撒谎]]<span class="pd-rz">同公司:DX · 同概念:DORA</span>

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
