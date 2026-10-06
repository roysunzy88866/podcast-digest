---
title: Meta 用毫秒级数据丈量工程师：AI 时代代码不再是货币
podcast: Engineering Enablement (DX)
date: 2026-10-02
source_url: undefined
duration: "46:44"
type: episode
cover: "#64748b"
image: "/covers/2026-10-02-engenable-how-meta-reduced-diff-authoring-time-by.jpg"
description: "Meta 软件工程研究员 Moritz Beller 讲解 diff 编写时间（DAT）指标：毫秒级追踪开发时间、A/B 实验验证工具价值，以及 AI 让 DAT 同比降超 40% 的发现。"
host: "[[Brian Hook]]"
cohosts: ["[[Moritz Beller]]"]
companies: ["[[Meta]]", "[[Microsoft Research]]"]
concepts: ["[[diff 编写时间]]", "[[DDM]]", "[[A-B 实验]]", "[[智能体]]", "[[测试]]", "[[TDD]]", "[[开发者生产力]]", "[[React Forget 编译器]]", "[[Mind the Gap]]", "[[意图]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-10-02-engenable-how-meta-reduced-diff-authoring-time-by.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-02-engenable-how-meta-reduced-diff-authoring-time-by#post","headline":"Meta 用毫秒级数据丈量工程师：AI 时代代码不再是货币","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-02-engenable-how-meta-reduced-diff-authoring-time-by","mainEntityOfPage":"https://talk.solomind.cc/2026-10-02-engenable-how-meta-reduced-diff-authoring-time-by","description":"Meta 软件工程研究员 Moritz Beller 讲解 diff 编写时间（DAT）指标：毫秒级追踪开发时间、A/B 实验验证工具价值，以及 AI 让 DAT 同比降超 40% 的发现。","datePublished":"2026-10-02","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-10-02-engenable-how-meta-reduced-diff-authoring-time-by.jpg","about":[{"@type":"Person","name":"Brian Hook"},{"@type":"Person","name":"Moritz Beller"},{"@type":"Organization","name":"Meta"},{"@type":"Organization","name":"Microsoft Research"},{"@type":"Thing","name":"diff 编写时间 (diff authoring time)"},{"@type":"Thing","name":"DDM"},{"@type":"Thing","name":"A/B 实验 (A-B experiments)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"测试 (testing)"},{"@type":"Thing","name":"TDD"},{"@type":"Thing","name":"开发者生产力 (developer productivity)"},{"@type":"Thing","name":"React Forget 编译器 (React forget compiler)"},{"@type":"Thing","name":"Mind the Gap"},{"@type":"Thing","name":"意图 (intent)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Meta 用毫秒级数据丈量工程师：AI 时代代码不再是货币","item":"https://talk.solomind.cc/2026-10-02-engenable-how-meta-reduced-diff-authoring-time-by"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Meta 用毫秒级数据丈量工程师：AI 时代代码不再是货币</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Meta 用毫秒级数据丈量工程师：AI 时代代码不再是货币

<div class="pd-byl"><b>Moritz Beller</b> · Meta 软件工程研究员 · 2026-10-02</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-02-engenable-how-meta-reduced-diff-authoring-time-by.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我想说，直到最近，Meta 的货币是代码。</div><div class="a">— Moritz Beller <button class="pd-ts" data-t="04:55" data-who="Moritz Beller" data-en="I would say until quite recently, the currency at Meta was code." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Brian Hook]] · [[Moritz Beller]]
>
> **公司** [[Meta]] · [[Microsoft Research]]
>
> **概念** [[diff 编写时间]] · [[DDM]] · [[A-B 实验]] · [[智能体]] · [[测试]] · [[TDD]] · [[开发者生产力]] · [[React Forget 编译器]] · [[Mind the Gap]] · [[意图]]

这一集聊的是一件很多工程师没想过的事：**写代码的时间到底能不能被精确测量，测出来又能改变什么**。主角是 [[Moritz Beller|Moritz Beller]]——[[Meta|Meta]] 的软件工程研究员，常年研究[[测试|测试]]、开发者工作流和 AI 辅助编程。他在 Meta 主导了一个叫 **[[diff 编写时间|diff 编写时间]]（DAT, Diff Authoring Time）** 的指标，最反直觉的一点是：AI 普及后，Meta 全公司写 diff 的时间同比下降超过 40%，但 diff 数量和 diff 大小反而在涨——人花在写代码上的时间少了，产出的东西却更多了。

## 什么是 diff 编写时间

diff 相当于 pull request：一个自包含的代码变更，加上变更摘要和测试计划，评审者可以多轮评论。Moritz 说，直到最近，「Meta 的货币是代码」——diff 是公司运转和讨论的核心单位，所以业务方自然想知道：这个核心活动到底花了多少时间。

DAT 衡量的是人**主动**花在工程上的时间：撰写、评审、准备、测试 diff。它经历了从粗糙到精细的演进：最早只是按日取平均值，但发现这留下太多空白——如果某天有人用了某个功能、有人没用，取平均就得不到干净信号，**没法做受控的 [[A-B 实验|A/B 实验]]**。于是他们做到了毫秒级保真：任何一个时刻你有没有在改 diff、在改哪个 diff，都能知道。

> 【背景】A/B 实验指把用户随机分成两组、各用不同版本对比效果，是互联网产品验证改动的标准方法。Meta 的产品团队天天在做，而 DAT 的意义是把这种科学方法搬到了「内部开发工具本身」的验证上。

## DAT 拿来干什么：实验、汇报、心智

**第一个用途是 A/B 实验。** Moritz 给了一个扎实案例：React 团队做了个叫 React Forget 的编译器，把 UI 里手工维护缓存（记忆化）这件事变成编译器自动完成。

对比使用编译器的 diff 和手写缓存的 diff，**DAT 大约减少了 30%**。这个节省幅度大得出乎意料，直接影响了组织的规划——结论是应该把更多投入放在框架和工具的基础性变革上，而不是对 UI 做微优化。这跟产品端「改个按钮几个像素就带来巨大提升」的路径完全相反，DAT 实验里从没见过那种小改动大收益的情况。

**第二个用途是领导层汇报**：在团队或公司层面监控指标，有没有意外的严重退化，有没有达成既定目标。DAT 还支持对 diff 分类——创新、维持业务、还技术债。不同团队的分布理应不同：基础设施团队的 diff 大多是内部性质很正常；但产品功能团队如果大部分 diff 是内部的，就说明有问题了。

**第三个是心智层面的**：即使开发者不直接用 DAT，它也培养了「像科学家一样开发」的思维方式。Moritz 强调，**DAT 从未被用于绩效评估**——它从未出现在评估绩效的工具里，这是有意的选择。Meta 的「效率之年」是 2022 年，而 DAT 的开发恰恰始于那一年，「这显然不是巧合」。

## 怎么防钻空子：成对看指标

单看任何一个速度指标都能被钻空子：你可以把 diff 切碎来刷数量。所以 Meta 从不单看 DAT，而是成对地看 **DAT 和 [[DDM|DDM]]（每位开发者每月的 diff 数）**：你可以轻松把 DDM 翻倍，只要把每个 diff 的 DAT 减半——但最终产物一样，这正是要避免的。

理论上评估的是你交付的影响，用 10 个还是 20 个 diff 完成并不重要。加上吞吐量、diff 大小、时长这个三角会自然相互制衡——想提升其中一项，其他项就会动。

## AI 的冲击：时间省了 40%，产出却在涨

这是全集中最重磅的数据。AI 普及后，**Meta 全公司 DAT 同比下降超过 40%，同时 DDM 大幅增长，diff 也变得更大**——排除了「diff 变小了所以省时间」的解释。

Moritz 说这是公司层面的信号，干净而强烈，能把时间线上的事件对应到图表的反应上，非常清楚；而以前个别团队的类似波动多半只是噪音。这个量级与微软的研究（每小时活跃编码产出的 pull request 增加约 40%）高度吻合。

那省下来的时间去哪了？Moritz 给的是「有依据的猜测」而非科学结论：**大头是收集上下文**。

而且很多传统上不算编码的活动——比如写规格说明——现在应该被视为编码的邻近部分。有趣的是，花在写提示词上的时间并不多：早期流行「把所有信息塞进提示词」，现在更高效的做法是**只放链接，让[[智能体|智能体]]自己去检索**。

一个意外发现：**最初观察到资深开发者的 DAT 下降得比初级更快**——资深者更会用 AI 工具，这让人意外，但已在业界得到印证。不过随着时间推移，这个差距已经有所拉平。

主持人 Brian 提出此后对话的主线：既然生成一行代码的成本骤降，「**代码不再是货币，[[意图|意图]]才是**——我们该关心的是想法的吞吐量，以及输入系统的想法是否真的等于 diff 里产出的东西，还是中间存在漂移」。Moritz 用 DAT 第八版的亲身经历佐证了警惕的必要：实现者没写设计文档，结果 Moritz 花了远多得多时间去审查、从代码细节里反推设计——「**也许正因为我们可以跳过架构这一步，我们才更不应该跳过**」。

## 测试：更容易了，也更危险了

另一项研究《开发人员何时、如何以及为什么不在 IDE 里测试》的核心发现是：很多开发者根本不做测试。AI 时代这把双刃剑更锋利了——一方面加测试变得非常容易，让智能体加几个测试就行；另一方面**全绿的测试可能给你虚假的安全感**：智能体做的和你要求的之间可能有偏差，甚至不是偏差，只是你规格说明写得不够明确，本来就可以有不同解读。

Brian 追加的担忧更尖锐：以前不在意测试的人，现在也没有能力验证「智能体写的测试是不是对的测试」。Moritz 认为靠「再扔一个不同模型不同框架的智能体去检查」不是答案，并暗示某种 [[TDD|TDD]]（测试驱动开发，先写测试再写实现）在 AI 时代的复活可能有价值。

## 重新跑一遍 Mind the Gap 会怎样

对话回到两人的渊源：Moritz 早年在微软研究院做了 **[[Mind the Gap|Mind the Gap]]** 研究，第一次把「客观遥测数据」和「开发者自我感知的生产力」放在同一项研究里互相补短。核心发现：**编码时间与自我感知生产力相关性最强**——而当年微软开发者的核心开发时间并不是一天中的头号活动，提交编码可能只占一天的 13%~15%，让很多开发者沮丧。另一个出名的预测因子是**前一晚睡得好不好**；在后续未发表的研究里他们用 Fitbit 手表量化了睡眠质量。

> 【背景】Moritz 在微软研究院的导师是 Thomas Zimmermann（原文未提及此名，为背景补充）。

如果今天重跑，Moritz 说必须加入智能体行为的度量：你如何与并行的智能体协作、你对它们信任多少——「几乎每家大型科技公司都已经经历过一次由智能体导致的宕机」，全信和全不信之间可能存在一个最佳信任度。他也预期传统的「坏日子成因」不会变：健康问题、环境问题、**开不完的对齐会议**依然存在，但会新增第四类——「我在使用智能体的这套设置下，满意度如何、认知上是否过载」，而且这是相对于同行的比较基准。

## 仍然测不了的东西

最后 Moritz 给出他认为软件工程最缺度量的一块：**人际互动**——你怎么和同事协作、怎么为项目争取资源。Brian 补了一个扎心的数据点：有组织仅仅取消了低质量会议，获得的吞吐量提升**比采用 AI 还大**；但他的另一项研究《双城记》又发现，预测开发者自我报告生产力的最佳指标，是会议前后是否经常进行非正式闲聊——这比网速还准。结论不是取消所有会议：**不是所有协作都是坏的，坏的协作才是坏的**。

Moritz 还警告了 AI 时代的新风险：因为重做太容易，「同一件事被不同人重复做好几遍」，公司层面需要机制让人意识到「Brian 也在做生产力指标，也许 Brian 和 Moritz 该聊聊」——已实现的东西如果没有被消化，就等于没有价值。

## 本集带走

- **速度指标必须成对看**：DAT（单个 diff 的主动时间）配 DDM（每月 diff 数）再加大小维度，三者互相制衡，切碎 diff 刷指标的路就被堵死了。
- **用 A/B 实验验证开发工具**：[[React Forget 编译器|React Forget 编译器]]让 DAT 降约 30%——实验结果大得出乎意料，才值得把资源投到框架级变革而非微优化。
- **AI 的净效果是真实的**：Meta 公司级 DAT 同比降超 40%，diff 数量和大小同时上涨，这是排除了噪音的强信号；省下的时间主要流向了收集上下文，而非写提示词。
- **全绿的测试不等于正确**：智能体产出与你的意图之间可能存在漂移或规格歧义；跳过架构设计，反而要在代码审查里付出更高代价把设计反推出来。
- **意图正在取代代码成为货币**：该衡量的是想法的吞吐量和意图→产出的保真度，同时警惕认知过载、重复建设和「坏协作」这些新的隐性成本。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">我想说，直到最近，Meta 的货币是代码。</span>  
> *I would say until quite recently, the currency at Meta was code.*  
> <span class="qm">—— Moritz Beller · [04:55]</span> ^q1

> <span class="qz">不像其他被展示在绩效评估工具里的指标，diff 编写时间从未出现在那里，这是我们有意的选择。</span>  
> *Unlike other metrics that were surfaced in the tools that were used to assess performance, diff authoring time never appeared in there, and that was a conscious choice in our part.*  
> <span class="qm">—— Moritz Beller · [19:23]</span> ^q2

> <span class="qz">我们看到的基本上是，我们的 DAT 同比下降了超过 40%。</span>  
> *And so what we've seen there is basically our year over year DAT is down by over 40%.*  
> <span class="qm">—— Moritz Beller · [21:32]</span> ^q3

> <span class="qz">而现在，真正地，意图才是我们所关心的货币。</span>  
> *And now, really, intent is the currency we care about.*  
> <span class="qm">—— Brian Hook · [25:11]</span> ^q4

> <span class="qz">所以，也许正因为我们可以跳过架构这一步，我们才更不应该跳过，对吧？</span>  
> *And so maybe just because we can skip the architecture step, we shouldn't, right?*  
> <span class="qm">—— Moritz Beller · [29:09]</span> ^q5

> <span class="qz">而现在很多研究相继再次证实，对许多开发者来说，提交编码的时间可能只占一天中的 13%、14%、15%。</span>  
> *And now lots of studies have sort of come along and reconfirmed that, yeah, time submit coding, like, you know, may only be 13, 14, 15% of the day for many developers.*  
> <span class="qm">—— Brian Hook · [31:58]</span> ^q6

> <span class="qz">那可能会引诱你产生一种虚假的安全感，比如「嘿，智能体确实做了我们要求的事」，但实际上它做的和我们要求它做的之间真的存在偏差。</span>  
> *That might, you know, lure you into false sense of security of like, hey, the agent actually did what we are asking, but there really was a drift in what it did versus what we asked it to do.*  
> <span class="qm">—— Moritz Beller · [40:04]</span> ^q7

> <span class="qz">一个组织实际上所做的只是取消了低质量会议，而他们从中获得的吞吐量提升比采用 AI 还要大。</span>  
> *A organization, effectively, all they did was cancel their low quality meetings and they had a bigger throughput gain from that than they did from adopting AI.*  
> <span class="qm">—— Brian Hook · [43:59]</span> ^q8

> <span class="qz">这比他们网络连接的质量更能预测一个开发者的生产力。</span>  
> *That was more predictive of a developer's productivity than the quality of their internet connections.*  
> <span class="qm">—— Brian Hook · [45:50]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-31-yc-alexandr-wang-this-is-a-once-in-a-civili|Scale AI 创始人 Alexandr Wang:AI 时代,最稀缺的不是智能而是愿景]]<span class="pd-rz">同公司:Meta · 同概念:智能体 (agent)</span>
- [[2026-08-11-twist-zuck-s-ai-manifesto-is-a-data-center-pr|扎克伯格 6500 字 AI 宣言：远见还是数据中心公关？]]<span class="pd-rz">同公司:Meta · 同概念:智能体 (agent)</span>
- [[2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than|别指望 AI 一次做对：离心机工作法]]<span class="pd-rz">同概念:TDD、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-15-twentyvc-20growth-how-to-build-a-100m-growth-engi|SaaS增长该抄电商作业：付费广告立刻开打]]<span class="pd-rz">同公司:Meta · 同概念:智能体 (agent)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Meta · 同概念:智能体 (agent)</span>
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同公司:Meta · 同概念:智能体 (agent)</span>

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
