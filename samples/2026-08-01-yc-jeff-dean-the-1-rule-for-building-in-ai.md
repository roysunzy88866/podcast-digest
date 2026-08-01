---
title: "Jeff Dean 谈 AI 的下一个突破:推理硬件、上下文工程与自动化科学"
podcast: Y Combinator Startup Podcast
date: 2026-08-01
source_url: undefined
duration: "57:05"
type: episode
cover: "#64748b"
description: "从 TPU 起源到智能体编排,拆解 AI 的性能瓶颈、创始人机会与未来自动化实验循环。"
host: "[[Jeff Dean]]"
concepts: ["[[MapReduce]]", "[[TPU]]", "[[AlphaFold]]", "[[智能体]]", "[[推理]]", "[[上下文工程]]", "[[多智能体系统]]", "[[延迟]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Jeff Dean 谈 AI 的下一个突破:推理硬件、上下文工程与自动化科学</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# Jeff Dean 谈 AI 的下一个突破:推理硬件、上下文工程与自动化科学

<div class="pd-byl"><b>Jeff Dean</b></div>

<div class="pd-mt">2026-08-01 · Y Combinator Startup Podcast · 57:05</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-01-yc-jeff-dean-the-1-rule-for-building-in-ai.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">可能有一点是人们没有完全意识到,拥有基于智能体的系统的可能性有多大,这些系统不仅可以针对你关心的问题运行一两个小时,而且在某些问题领域,并在底层具备高能力模型的情况下,你可以让它们运行几天或几周,并完成非常、非常复杂的任务。</div><div class="a">— Jeff Dean <button class="pd-ts" data-t="04:55" data-who="Jeff Dean" data-en="Probably one thing is people don't quite realize how possible it is to have agent-based systems that can run not just for an hour or two hours on a problem you care about, but for some problem domains and with highly capable models underlying them, you can get them to run for days or weeks and do really, really complicated tasks." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jeff Dean]]
>
> **概念** [[MapReduce]] · [[TPU]] · [[AlphaFold]] · [[智能体]] · [[推理]] · [[上下文工程]] · [[多智能体系统]] · [[延迟]]

<div class="pd-tldr"><b>一句话</b>从 TPU 起源到智能体编排,拆解 AI 的性能瓶颈、创始人机会与未来自动化实验循环。</div>

移动一份数据所消耗的能量,是真正对它进行一次数学计算的 1000 倍。在 AI 系统里,这个隐藏的物理鸿沟悄悄决定了我们模型训练的规则、产品[[延迟|延迟]]的底线,甚至决定了哪些天马行空的架构能成为现实。说出这句话的人是 [[Jeff Dean|Jeff Dean]],他亲手构建了 [[MapReduce|MapReduce]]、Bigtable、TensorFlow 和 [[TPU|TPU]],奠定了现代大规模计算的基础。

在这一集对谈里,他回溯了 Google 历史上几次关键的「餐巾纸数学」——也就是在纸背上快速估算成本与算力极限,如何催生了 TPU;并分享了当下 AI 系统的核心权衡:与其死磕模型大小,不如死磕数据搬运成本与延迟。他还聊了为什么[[上下文工程|上下文工程]](一种通过精准组织外部信息、检索和工具给模型下指令的方法)是每个普通开发者都能上手的杠杆;以及怎么给[[智能体|智能体]]写好规格说明、用多智能体搜索防止它们跑偏。最后,他给未来的 AI 创始人指了一条明路:去寻找那些通用模型成功率只有 0% 到 1% 的垂直领域,以及那些能用自动化实验循环去加速的科学问题。

先从他对 AI 系统底层的判断说起。在 Jeff Dean 看来,AI 的未来不在于通用计算设备,而在于专用化。通用模型越来越强是不争的事实,但智能体真正普及的瓶颈是延迟——没人喜欢干等回复。GPU 或 TPU 这类通用计算设备为了兼容各种任务,做出了很多妥协。Jeff Dean 指出,如果你针对特定问题打造专用硬件,哪怕它除了低精度密集线性代数(机器学习的核心数学运算)之外什么都干不了,只要把数据搬运和计算的能耗降下来,就能把延迟降低 20 到 30 倍 <button class="pd-ts" data-t="08:12" data-who="Jeff Dean" data-en="if you build a specialized chip for low precision dense linear algebra and can't do anything else, that turns out to be really useful for machine learning inference, even though it can't run Chrome or Word or whatever." aria-label="回原文"></button>。这就是 TPU 的起源故事:当年为了不让语音识别把服务器机群翻倍撑爆,他从第一性原理出发,做了一块只算矩阵乘法的专用芯片 <button class="pd-ts" data-t="07:39" data-who="Jeff Dean" data-en="And yeah, it turned out that... we realized that we needed some better solution than running on CPUs at the time. And so we came up with TPUs, which are sort of very specialized for essentially low precision, dense linear algebra, which is at the heart of nearly all of the modern machine learning algorithms we use today." aria-label="回原文"></button>。

硬件的物理限制,又直接塑造了软件架构。回到开头那 1000 倍能量差的鸿沟,因为移动数据太贵,我们才不得不使用「批处理」(把大量数据打包一起送进处理器),以此来分摊搬运成本 <button class="pd-ts" data-t="13:08" data-who="Jeff Dean" data-en="And it shapes a lot of aspects of what we do in machine learning. because if you didn't have that 1,000x difference, then you wouldn't have to do batching, but you have to do batching of many examples or maybe many tokens at once in order to amortize that data movement so that you can not pay 1,000x slowdown, but pay 1,000x divided by batch size energy cost." aria-label="回原文"></button>。但对于极低延迟要求的[[推理|推理]]任务来说,攒一大堆数据再算并不现实,这就为未来的推理专用硬件留下了巨大的创新空间。

说完了底层硬件的瓶颈,接下来的问题是:在模型本身之外,应用层有什么杠杆?

答案就是「上下文工程」<button class="pd-ts" data-t="16:42" data-who="Jeff Dean" data-en="And it might kind of get consolidated into what people call context engineering, right? Yeah, I mean, I think the model is really only one piece of what you're trying to do, which is build an overall system that can solve really interesting problems." aria-label="回原文"></button>。以前人们以为 AI 进步就是堆参数、堆数据,把成万亿的 token 搅成一锅参数汤。但模型直接看到的「实际上下文」要比那些模糊的训练记忆清晰得多。所谓上下文工程,就是给模型配备清晰的检索记录、工具使用指南和拆解好的任务大纲。Jeff Dean 和同事 Sanjay 就亲自写过一套技能,教模型如何自我迭代测试基准、修改底层库代码,让智能体像顶级工程师一样自动优化系统性能 <button class="pd-ts" data-t="20:59" data-who="Jeff Dean" data-en="And so we wrote a skill that basically taught the model how to do most of those things. in various sequences so that it could actually do self-improving benchmark measurement, benchmark code changes, measure the performance improvement, and then iterate on that." aria-label="回原文"></button>。

工具变强了,但智能体经常跑到第 30 步就彻底崩溃,这又该怎么办?

这正是编排[[多智能体系统|多智能体系统]]要解决的痛点。智能体之所以会跑偏,是因为脱离了训练数据的「舒适区」<button class="pd-ts" data-t="23:20" data-who="Jeff Dean" data-en="And as soon as you get a little bit off the distribution of things it knows how to do, then like most machine learning models, its performance will suddenly start to degrade." aria-label="回原文"></button>。应对方法是采用推理时计算搜索:不依赖单打独斗,而是让多个智能体去尝试不同路径,再引入另一个模型作为「评估器」进行打分,果断放弃那些看起来不靠谱的方向 <button class="pd-ts" data-t="23:58" data-who="Jeff Dean" data-en="I think having multi-agent systems where you have multiple agents trying different approaches and you can evaluate, you have maybe another model or another agent that's evaluating which ones of those seem promising is another way to kind of" aria-label="回原文"></button>。此外,想管理成百上千个智能体,关键是写出极度清晰的设计文档或规格说明 <button class="pd-ts" data-t="32:03" data-who="Jeff Dean" data-en="Yeah, I mean, I think it's, you'll have a lot more success when working with your virtual agents if you can clearly specify what it is you want. And the clearer you are on what it is you want, the more the agent will have sort of guidelines and sort of rules of, you know, an outline of what it is trying to accomplish." aria-label="回原文"></button>。Jeff Dean 举了个例子:今天用模型把一整套软件从 Python 翻译成 Go 效果极好,原因就在于源代码本身就是一份没有歧义的完美规格书 <button class="pd-ts" data-t="33:22" data-who="Jeff Dean" data-en="that says what the system is supposed to do. And so if you have a Python implementation of something and you want a Go implementation of it, that is something that the models seem incredibly capable of doing these days because it can sort of take all the tests that are in Python, make sure they pass in the Go version, translate the tests to Go, compare behavioral differences between the implementations until there aren't any." aria-label="回原文"></button>。

既然通用模型和智能体编排越来越强,初创公司和普通人还有机会吗?这正是下一个话题。

Jeff Dean 坦言,大厂的通用模型会覆盖绝大多数通用场景,但小团队在两类问题上大有可为 <button class="pd-ts" data-t="26:08" data-who="Jeff Dean" data-en="Yeah, I mean, I think obviously Google and our Gemini models and our hardware infrastructure are really trying to build very general models that can do almost anything." aria-label="回原文"></button>。第一,是掌握着通用模型看不到的独家数据(比如用户极度私人的信息);第二,是像 [[AlphaFold|AlphaFold]](预测蛋白质结构的专用模型)那样,在一个垂直科学领域用专有数据训练出高精度的利基模型 <button class="pd-ts" data-t="30:30" data-who="Jeff Dean" data-en="Can you tell us more about what are some of these domains? Yeah, I mean, I think, like, if you look at my colleague's work on, say, AlphaFold, that was a very specific model for protein folding, and it was highly successful." aria-label="回原文"></button>。他给出了一个非常具体的试金石:去测试通用模型在你那个领域的成功率——如果是 0% 或 1%,放心去干;如果已经能做到 20%,说明能力已经开始萌芽,一年后大概率会被大模型吞掉 <button class="pd-ts" data-t="28:46" data-who="Jeff Dean" data-en="that's maybe not a great sign because that's probably a sign that the capability is starting to be present in those models and with more training data or larger scale models or whatever, it's likely to get better." aria-label="回原文"></button>。

放手让智能体去写代码,创始人真正稀缺的技能又是什么?是品味。

Jeff Dean 将其比作选研究课题:执行再完美,如果一开始选了个无聊的问题,也是白费力气。品味就是那种知道「什么事情值得做」的高层智慧,这需要丰富的经验和不断做思想实验 <button class="pd-ts" data-t="34:11" data-who="Jeff Dean" data-en="having incredibly good taste in what you ask your agents to work on, right? That is the crux of, you know, from my background, a research problem. You know, a researcher can have all the tools and all the techniques, but often most of the battle is what problem are you gonna spend your time on?" aria-label="回原文"></button>。比如他常做一个疯狂假设:如果芯片制造放弃追求零错误,允许晶体管每天出错 20 次,而是像大规模分布式系统那样靠冗余路径来兜底,芯片设计和制造会有什么不同?<button class="pd-ts" data-t="38:34" data-who="Jeff Dean" data-en="So what would, basically an interesting thought experiment is what would happen if you tried to build a system out of transistors that might have 20 errors per day rather than one every million years." aria-label="回原文"></button> 很多时候现行标准都有其历史合理性,但偶尔推翻一个常理,就能诞生下一个 MapReduce 或 TPU <button class="pd-ts" data-t="40:30" data-who="Jeff Dean" data-en="You know, I think the... The origin of MapReduce is another good example. We had worked, you know, Sanjay and myself and a number of other colleagues had worked on various iterations of the crawling and indexing system at Google." aria-label="回原文"></button>。

这种从第一性原理出发的思考,最后指向了他眼中最激动人心的未来:用 AI 自动化科学方法本身。

实验、评估、得出结果——这是科学方法的基础。Jeff Dean 认为下一个大趋势,是让 AI 接管整个实验循环。就像他的同事将一个需要跑一整晚的量子化学模拟器,训练成了一个速度快 30 万倍的神经网络近似模型,一顿午饭的功夫就能筛选 1000 万个分子构型 <button class="pd-ts" data-t="45:17" data-who="Jeff Dean" data-en="the expensive simulator and then use it to train a neural approximation to the simulator. So this is now a validation device, but instead of it taking a night, they made something that was 300,000 times faster and nearly as accurate as running the full scale simulator." aria-label="回原文"></button>。当你把这个极速实验循环搭配上智能体拆解子问题的能力,机器就能递归地自我改进。在这个未来里,我们真正要优化的,是「每单位算力能换来多少次新发现」<button class="pd-ts" data-t="47:34" data-who="Jeff Dean" data-en="And then they will go run lots of experiments, see which ones work, and then those will get incorporated at a much more rapid rate. And, you know, effectively you want to optimize, you know, your discoveries per unit of compute input." aria-label="回原文"></button>。

## 本集带走

最后收个尾,这一集值得带走的是几条清晰的判断。第一,AI 的瓶颈在底层硬件,而硬件的关键是能耗与延迟:只要移动数据的成本远高于计算成本,通过专用化降低延迟、优化批处理,就会是产生质变的突破口。第二,别只盯着模型大小,上下文工程才是应用层的杠杆,把工具和检索指南写清楚,人人都能让模型像资深工程师一样干活。第三,智能体跑偏是常态,解决办法是多开几条路并行试错,用一个专门的模型来当裁判做评估。第四,对于想创业的人,去找那些大模型成功率只有 1% 的领域,或者借助独有的小众数据训一个高精度利基模型;当 AI 能写所有代码时,挑对问题的高层智慧和品味,才是创始人真正的护城河。最后,用 AI 自动跑通极速实验循环,将从根本上改变我们做科学与工程的方式,我们真正该追求的终极指标,是每单位算力能换来多少次真实的新发现。

<div class="pd-sec">全部金句 <span>8 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">可能有一点是人们没有完全意识到,拥有基于智能体的系统的可能性有多大,这些系统不仅可以针对你关心的问题运行一两个小时,而且在某些问题领域,并在底层具备高能力模型的情况下,你可以让它们运行几天或几周,并完成非常、非常复杂的任务。</span>  
> *Probably one thing is people don't quite realize how possible it is to have agent-based systems that can run not just for an hour or two hours on a problem you care about, but for some problem domains and with highly capable models underlying them, you can get them to run for days or weeks and do really, really complicated tasks.*  
> <span class="qm">—— Jeff Dean · [04:55]</span> ^q1

> <span class="qz">那个系统在几年后生产出了一款芯片,其能效比当时的 CPU 和 GPU 高 30 到 80 倍,而且延迟也要低得多,比如低 20 到 30 倍。</span>  
> *that system produced a chip a couple of years later that was 30 to 80 times more energy efficient than CPUs and GPUs of the day, and also much, much lower latency, like 20 to 30x lower latency.*  
> <span class="qm">—— Jeff Dean · [08:12]</span> ^q2

> <span class="qz">如果你真正理解了数据,你应该能够非常好地压缩它。</span>  
> *if you truly understand the data, you should be able to compress it really well.*  
> <span class="qm">—— Jeff Dean · [15:55]</span> ^q3

> <span class="qz">所以,你知道,要寻找模型成功率为 0% 或 1% 的东西,而不是 20%。</span>  
> *So, you know, look for something where the model succeeds 0% or 1% of the time, not 20%.*  
> <span class="qm">—— Jeff Dean · [28:46]</span> ^q4

> <span class="qz">一个研究员可以拥有所有的工具和所有的技术,但往往大部分战斗在于你要把时间花在什么问题上?</span>  
> *a researcher can have all the tools and all the techniques, but often most of the battle is what problem are you gonna spend your time on?*  
> <span class="qm">—— Jeff Dean · [34:18]</span> ^q5

> <span class="qz">所以基本上,一个有趣的思想实验是,如果你尝试构建一个系统,使用每天可能有 20 个错误的晶体管,而不是每百万年一个。</span>  
> *So what would, basically an interesting thought experiment is what would happen if you tried to build a system out of transistors that might have 20 errors per day rather than one every million years.*  
> <span class="qm">—— Jeff Dean · [38:28]</span> ^q6

> <span class="qz">所以现在这是一个验证设备,但它不是需要一整晚,他们做出来的东西速度快了 30 万倍,而且几乎和运行全尺寸模拟器一样准确。</span>  
> *So this is now a validation device, but instead of it taking a night, they made something that was 300,000 times faster and nearly as accurate as running the full scale simulator.*  
> <span class="qm">—— Jeff Dean · [45:17]</span> ^q7

> <span class="qz">如果你想想我们现在的大规模模型,它们看到的数据量可能是人类到 18 岁时所见数据的一千倍。</span>  
> *If you think about our large scale models today, they probably see a thousand times as much data as a human does by the age of 18.*  
> <span class="qm">—— Jeff Dean · [56:00]</span> ^q8

*本集关键词:AI 硬件 · 上下文工程 · 多智能体 · 延迟与能耗 · AI 创业*

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
