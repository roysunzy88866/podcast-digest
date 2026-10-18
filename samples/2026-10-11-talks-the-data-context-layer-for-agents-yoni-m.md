---
title: 为什么AI写SQL不出错，分析结果却是错的？
podcast: 精选演讲
date: 2026-10-18
source_url: undefined
duration: "106:02"
type: episode
cover: "#64748b"
description: 初创公司 Typedef 的两位工程师讲解「数据上下文层」：AI 智能体缺的不是模型能力，而是数据背后的语义。
guests: ["[[Yoni Michael]]"]
companies: ["[[TypeDef]]", "[[Quadrant]]", "[[Neo4j]]", "[[Mattermost]]"]
concepts: ["[[数据上下文层]]", "[[粒度]]", "[[智能体]]", "[[评测]]", "[[上下文工程]]", "[[上下文图谱]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-the-data-context-layer-for-agents-yoni-m#post","headline":"为什么AI写SQL不出错，分析结果却是错的？","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-the-data-context-layer-for-agents-yoni-m","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-the-data-context-layer-for-agents-yoni-m","description":"初创公司 Typedef 的两位工程师讲解「数据上下文层」：AI 智能体缺的不是模型能力，而是数据背后的语义。","datePublished":"2026-10-18","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Yoni Michael"},{"@type":"Organization","name":"TypeDef"},{"@type":"Organization","name":"Quadrant"},{"@type":"Organization","name":"Neo4j"},{"@type":"Organization","name":"Mattermost"},{"@type":"Thing","name":"数据上下文层 (data context layer)"},{"@type":"Thing","name":"粒度 (grain)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"评测 (evals)"},{"@type":"Thing","name":"上下文工程 (context engineering)"},{"@type":"Thing","name":"上下文图谱 (context graph)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"为什么AI写SQL不出错，分析结果却是错的？","item":"https://talk.solomind.cc/2026-10-11-talks-the-data-context-layer-for-agents-yoni-m"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>为什么AI写SQL不出错，分析结果却是错的？</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 为什么AI写SQL不出错，分析结果却是错的？

<div class="pd-byl"><b>Yoni Michael</b> · Typedef 联合创始人 · 2026-10-18</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-the-data-context-layer-for-agents-yoni-m.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">核心结论是：模型并不是瓶颈。模型的能力会持续增长，但让这些智能体真正有效所缺失的上下文才是关键所在。</div><div class="a">— Yoni Michael <button class="pd-ts" data-t="01:54" data-who="Yoni Michael" data-en="The punchline is like the model isn't the bottleneck. The model is going to continue to grow in capabilities, but the missing context to make these agents actually effective is the important part in this." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Yoni Michael]]
>
> **公司** [[TypeDef]] · [[Quadrant]] · [[Neo4j]] · [[Mattermost]]
>
> **概念** [[数据上下文层]] · [[粒度]] · [[智能体]] · [[评测]] · [[上下文工程]] · [[上下文图谱]]

> 【背景】Typedef 是一家做数据基础设施的初创公司，两位分享者分别是联合创始人 Yoni Michael 和创始工程师 Brandon Callender。

Typedef 做的事情，一句话概括：让 AI [[智能体|智能体]]能够安全、可靠地操作企业数据系统。他们为此建了一套叫[[数据上下文层|数据上下文层]]的基础设施。

这场两小时的工作坊，前半场讲理念，后半场现场演示。

最核心的一个判断是：模型本身不是瓶颈——真正缺的，是让智能体理解数据的上下文。

## 为什么SQL 跑通了不等于答案对了

Yoni 先抛出一个反直觉的观察：

今天的编码智能体写 SQL 已经很好了，但在数据任务上经常失败，原因不是不会写代码，而是不懂数据是什么意思。

他举了个例子。某天管道的行数一夜之间涨了 40%,你问智能体为什么。

它会写出完全合法的 SQL,跑出漂亮图表，然后告诉你：看起来是数据变多了。

但真实原因可能是上游某个字段把一对一的关联变成了一对多，每一行被悄悄复制了——数据量没变，行数翻倍了。

智能体分不清这两种情况，因为每一行代表什么这个信息根本不在数据里。

数据行话里这叫 grain（[[粒度|粒度]]）：一行到底是每个客户每月还是每个客户每周？

粒度一旦悄悄改变，下游所有求和都会错，而 SQL 照样编译通过、照样跑 <button class="pd-ts" data-t="06:32" data-who="Yoni" data-en="And so if the grain is customer by month and I accidentally turn it into customer by week, then every downstream sum after that can become wrong, even though the SQL compiles and everything runs correctly, right?" aria-label="回原文"></button>。

## 两个显而易见的方案，为什么都不行

那就给智能体更多上下文呗？Yoni 分析了两个直觉方案，都不够。

第一个：把代码给它。把整个 dbt 项目或 Airflow 逻辑塞给智能体。

问题是这样每次都要从头重新推导一遍上下文，是概率性的，受上下文窗口限制，而且每次新会话都得重来，既贵又脆弱。

第二个：给它数据库访问权限。

它能看到行、能抽样数据，但它只读得懂数字，读不懂含义——「它能看到数据，但不理解数字背后的意思」<button class="pd-ts" data-t="08:43" data-who="Yoni" data-en="So it can read the numbers but not necessarily explain it, right? And so the first situation is one can read the code but doesn't actually have memory to be able to persist the knowledge of the context that you spent a lot of time going back and forth and helping build up." aria-label="回原文"></button>。

两个方案都没有一个持久的、可信赖的系统模型。这就是 Typedef 想补的缺口。

## 把「老员工脑子里的知识」变成可查询的图

Yoni 总结了决定答案对错的四个事实，它们都散落在各处：

每行代表什么（粒度）、一个关联是否安全、一个指标到底怎么定义的、模型之间谁依赖谁。

关键思路是：把这些原本只存在于老员工脑子里、散落在文档和 Slack 里的部落知识，变成可计算、可查询的东西。

具体做法是一张图：节点是各种数据资产，边表示它们之间的关系，每次代码提交时原子地增量更新。

为什么用图而不是一堆文档？

因为智能体可以一次遍历就把需要的那一小块子图拉出来，不用每次重读整个项目，也避免了往提示词里硬塞内容。

这个图能扩展到 500 个模型以上 <button class="pd-ts" data-t="15:07" data-who="Yoni" data-en="And it avoids things like prompt stuffing or context stuffing. And it scales way past 500 models because you're not rereading the project every time you're trying to build the context layer, right?" aria-label="回原文"></button>。

构建原则也很有讲究：**能确定性计算的绝不交给大模型**。粒度、血缘关系直接从 SQL 解析到抽象语法树算出来；

关联键是否唯一靠实际分析表数据验证；大模型只负责最后的命名、分类和总结——给图上的节点起人类能懂的名字。

## 效果：任务成功率高出约 35 个百分点

光说不练没用。

他们的[[评测|评测]]方法是把真实生产级的数据工程任务放进隔离环境里反复跑，对比同一个模型在有和没有这个上下文层时的表现。

结果是：**配备了数据上下文层之后，任务成功率高出接近 35 个百分点** <button class="pd-ts" data-t="22:02" data-who="Yoni" data-en="It's able to read and across these really complex changes and the task success rate goes up tremendously. It's almost 35 points higher when it's armed with the data context layer." aria-label="回原文"></button>。

Brandon 补充了他们评测用的语料：

选了 [[Mattermost|Mattermost]] 开源的 dbt 项目，有大约 300 多个模型，模拟数据后往里面注入 bug,让智能体去找根因、修问题——而不是用那种 30 个模型的玩具示例。

他们还提到业界已有类似基准，比如 ADEbench。

## Brandon 的现场实验：你造了好工具，智能体根本不用

Brandon 的下半场是全场最好玩的部分。

他在一个开源代码库上现场搭了一个代码图谱：每个类型、函数都有真实身份和位置，关系是带类型的边。

同样叫 posting list 的类型在两个文件里都有，文本搜索分不清，图谱一查就能区分，还能一次算出「改了这个函数会炸掉什么」。

然后是那个残酷的发现：他把这套酷炫的图工具交给智能体，智能体转头就去用最土的文本搜索了。

「**我们给了它预计算好的、可遍历的代码模型，它还是去跑了 grep**」<button class="pd-ts" data-t="58:52" data-who="Brandon" data-en="So when you give this agent this tool, and you give it this agent this tool, and you give it alongside all the existing tools the agent already has, and you know, we have this really cool tool, we've seen it do this amazing stuff, and it ran grep anyway." aria-label="回原文"></button>。

原因在于模型的训练：

太多场景里正确答案就是搜索加读文件，这是它的肌肉记忆，你光做一个更好的工具斗不过它的反射。

## 怎么破？把图工具伪装成搜索工具

Brandon 的解法很务实：别硬拗，顺着模型的习惯来。

把工具名字里那堆查询图谱之类的花哨叫法去掉，就叫 search。模型看到 search 就会习惯性地做多关键词搜索。

返回结果的格式也照着 ripgrep 的样子来，因为模型天天在处理这种输出，闭着眼都会用。Brandon 自己承认这算某种妥协，但管用。

还有一条硬要求：你的工具第一次调用就必须给足有价值的结果。

模型一旦调了搜索返回空，它不会反思关键词，只会认定这工具坏了，转头回文本搜索的怀抱，再也不回来。

## 评测的关键指标：不是单次对，而是次次对

Brandon 的评测结论也很反直觉。单次测试里，图谱智能体和文本搜索智能体打平，甚至搜索还略占便宜。

但把同一批问题跑 5 遍看每次都对的比例，图谱智能体的稳定性是对方的约两倍，而且平均少用约 3.1 倍的 token <button class="pd-ts" data-t="68:37" data-who="Brandon" data-en="We can see that over the course of all our different runs, on average, the Graph approach took about 3.1 times fewer tokens. The last part is, okay, how do we actually get the agent to use the graph?" aria-label="回原文"></button>。

核心教训是：**不要看单次准确率，要看确定性**。对生产系统来说，跑 10 次对 10 次比跑 1 次碰对更重要。

另一条实战经验：用评测来量化工具的被采用率。他最初没在提示词里引导时，工具使用率只有 34%;改了提示词后提到 72%。

这些数字只有靠评测才能看见。

## 最后的清醒剂：别太相信自己的记分牌

Brandon 坦白了一段翻车经历：

他有一版评测结果显示图谱赢了，想深挖原因时才发现，自己做的工具返回的文件路径偶尔是错的，模型顺着错误路径读了错文件，居然阴差阳错答对了。

分数看起来对，底下埋着大问题。

他的建议是：永远去读完整的执行轨迹，不要只看记分牌。修法从来不是把数字调高，而是出更难的题、加固评测环境。

他还提醒，智能体会作弊——会从分支名里看出这是测试然后钻空子，评测环境必须防住这一手。

「一个只有三分之一时间会被用到的优雅工具，只是一个三分之一个工具」<button class="pd-ts" data-t="82:13" data-who="Brandon" data-en="The number that actually matters was how do you actually make sure that your agent is using the new tooling and so you really want to make sure that you're getting your adoption numbers up and that you're measuring your adoption of the tools because that's really what's going to get you the last part of the way." aria-label="回原文"></button>。这句大概是对整场工作坊最好的总结。

## 本集带走

- AI 在数据任务上失败的根因不是不会写 SQL,而是不知道每行数据代表什么、改动会破坏什么——语义不在数据里，要单独建成可查询的图谱。
- 构建原则：能确定性计算的（粒度、血缘、关联键唯一性）绝不交给大模型；大模型只做命名、分类和总结。
- 给智能体造好工具只是开始，模型有训练出来的肌肉记忆，得把工具伪装成它熟悉的样子（比如就叫 search、返回 ripgrep 格式），否则它照样去文本搜索。
- 评测看的不是单次准确率而是稳定性；Typedef 的基准显示，配上上下文层后任务成功率高出近 35 个百分点，Brandon 的实验里图谱方案稳定性翻倍、token 少用约 3.1 倍。
- 永远读完整执行轨迹再相信评测分数，智能体会想方设法在评测里作弊。

<div class="pd-sec pd-sec-q">全部金句 <span>18 条</span></div>

> <span class="qz">核心结论是：模型并不是瓶颈。模型的能力会持续增长，但让这些智能体真正有效所缺失的上下文才是关键所在。</span>  
> *The punchline is like the model isn't the bottleneck. The model is going to continue to grow in capabilities, but the missing context to make these agents actually effective is the important part in this.*  
> <span class="qm">—— Yoni Michael · [01:54]</span> ^q1

> <span class="qz">智能体将会成为这些数据系统的核心操作者。</span>  
> *Agents are going to be core operators of these data systems.*  
> <span class="qm">—— Yoni Michael · [03:14]</span> ^q2

> <span class="qz">而数据恰恰是这样一个地方：如果一个智能体自信地犯错——这经常发生——可能真的会造成很大损失，对吧？</span>  
> *And the data is exactly where if an agent is confidently wrong, which it oftentimes is, it can actually end up costing a lot of money, right?*  
> <span class="qm">—— Yoni Michael · [02:46]</span> ^q3

> <span class="qz">所以这就是为什么合法的 SQL 是不够的，对吧？当你试图让智能体变得有效时，语义实际上非常、非常重要。</span>  
> *So this is why valid SQL isn't enough, right? The semantics are actually very, very important when you're trying to get an agent to be effective.*  
> <span class="qm">—— Yoni Michael · [07:38]</span> ^q4

> <span class="qz">而智能体根本无法区分一次真实的数据飙升和一次真正的粒度变更，因为粒度并不在数据本身里。</span>  
> *And the agent literally cannot tell a real spike, like a real data spike, and differentiate between that and an actual grain change because the grain isn't in the data itself.*  
> <span class="qm">—— Yoni Michael · [07:12]</span> ^q5

> <span class="qz">大概有四个事实决定一个答案是否正确，而它们没有任何一个被写在智能体能读到或推断出来的任何地方。</span>  
> *There are four facts, let's say, that decide whether an answer is right, and none of them are actually written down anywhere that the agent can read or infer.*  
> <span class="qm">—— Yoni Michael · [09:17]</span> ^q6

> <span class="qz">我们经常谈论的一个关键原则是：你首先要尽可能保持确定性，然后只在需要解决歧义或做那些模型真正擅长的事情时才使用 LLM。</span>  
> *And the key principle here that we talk about a lot is like you want to always be as deterministic as possible first and then only use LLMs when you're trying to resolve ambiguity or do things that models are actually really good at.*  
> <span class="qm">—— Yoni Michael · [12:45]</span> ^q7

> <span class="qz">所以关键在于这一切都发生在起飞前，对吧？它不是在构建时，也不是在生产事故中。它在实际行动之前就知道影响范围。</span>  
> *So the key part is this all happens pre-flight, right? It's not at build time, it's not in a production incident. It knows a blast radius before it actually even acts on it.*  
> <span class="qm">—— Yoni Michael · [18:51]</span> ^q8

> <span class="qz">这就是一次语法层面的重构和一次人类真正可以信任的变更之间的界线。</span>  
> *And that's the line between like a syntactic refactor and a change that a human can actually trust.*  
> <span class="qm">—— Yoni Michael · [20:55]</span> ^q9

> <span class="qz">配备了数据上下文层之后，成功率几乎高出 35 个百分点。</span>  
> *It's almost 35 points higher when it's armed with the data context layer.*  
> <span class="qm">—— Yoni Michael · [22:02]</span> ^q10

> <span class="qz">第二件事是，存储证据，而不是结论。</span>  
> *The second thing is store evidence, not conclusion.*  
> <span class="qm">—— Yoni Michael · [23:35]</span> ^q11

> <span class="qz">我们发现，一个经过精选的工具集永远胜过一堆现成 MCP 的大杂烩。</span>  
> *So what we found is a curated-type toolset always beats a buffet of just off-the-shelf MCPs.*  
> <span class="qm">—— Yoni Michael · [24:21]</span> ^q12

> <span class="qz">智能体的好坏取决于你给它的上下文，而构建那个上下文实际上才是真正的工作。</span>  
> *Agent is only as good as the context you give it, and that building that context is in fact the actual job.*  
> <span class="qm">—— 嘉宾 · [27:27]</span> ^q13

> <span class="qz">真正的目标是让它具有高得多的确定性，对吧？因为我们正在尽力把尽可能多的确定性应用到这个非常不确定的系统上。</span>  
> *The real goal is to have it be a lot more deterministic, right? Because we're trying to apply as much determinism as we can to this very non-deterministic system.*  
> <span class="qm">—— 嘉宾 · [31:09]</span> ^q14

> <span class="qz">你可以做出更好的工具，但智能体的肌肉记忆不会让它去用它。</span>  
> *You can make a better tool, but the agent's muscle memory isn't gonna let it use it.*  
> <span class="qm">—— 嘉宾 · [59:54]</span> ^q15

> <span class="qz">一个只有三分之一时间会被用到的优雅工具，就只是一个三分之一大小的工具，而你从更好的工具中能获得的每一项能力，都被这个数字所限制。</span>  
> *An elegant tool that gets reached for a third of the time is just a third of a tool and every capability that you can get from better tools is gated by this number.*  
> <span class="qm">—— 嘉宾 · [82:13]</span> ^q16

> <span class="qz">永远不要相信你自己的记分板。</span>  
> *Never trust your own scoreboard.*  
> <span class="qm">—— 嘉宾 · [85:06]</span> ^q17

> <span class="qz">如果你的智能体 100% 通过了你的 eval，那你的 eval 太简单了。你的智能体应该接近于无法通过你的 evals。</span>  
> *If your agent's passing your eval 100%, your eval's too easy. Your agent should be close to failing your evals.*  
> <span class="qm">—— 嘉宾 · [70:22]</span> ^q18
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
