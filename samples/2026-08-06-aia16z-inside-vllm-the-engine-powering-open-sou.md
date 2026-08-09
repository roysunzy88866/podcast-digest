---
title: "把 Opus 级智能搬回家:开源推理如何长成关键基础设施"
podcast: AI + a16z
date: 2026-08-06
source_url: undefined
duration: "46:39"
type: episode
cover: "#64748b"
description: "vLLM 联合创始人 Simon Mo 与 a16z 合伙人 Matt Bornstein 对谈,讲透开源推理引擎为何成为 AI 时代刚需。"
host: "[[Elena Berger]]"
cohosts: ["[[Simon Mo]]", "[[Matt Bornstein]]"]
companies: ["[[Infraact]]"]
concepts: ["[[vLLM]]", "[[开源权重]]", "[[推理]]", "[[智能体]]", "[[K3]]", "[[蒸馏]]", "[[护栏]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把 Opus 级智能搬回家:开源推理如何长成关键基础设施</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# 把 Opus 级智能搬回家:开源推理如何长成关键基础设施

<div class="pd-byl"><b>Simon Mo</b> · vLLM 联合创始人 · 2026-08-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-06-aia16z-inside-vllm-the-engine-powering-open-sou.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">这个有趣的思维实验是，如果 GPU 价格下降 99%，那么我们会回到一个真正的开源世界吗？</div><div class="a">— Matt Bornstein <button class="pd-ts" data-t="00:00" data-who="Matt Bornstein" data-en="The fun thought experiment is if GPUs dropped in price by 99%, then do we get back to a real open source world?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Elena Berger]] · [[Simon Mo]] · [[Matt Bornstein]]
>
> **公司** [[Infraact]]
>
> **概念** [[vLLM]] · [[开源权重]] · [[推理]] · [[智能体]] · [[K3]] · [[蒸馏]] · [[护栏]]

<div class="pd-tldr"><b>一句话</b>vLLM 联合创始人 Simon Mo 与 a16z 合伙人 Matt Bornstein 对谈,讲透开源推理引擎为何成为 AI 时代刚需。</div>

很多人不知道,如今几乎每个人都在用一个叫 vLLM 的开源[[推理|推理]]引擎(让大语言模型在 GPU 等加速器上高效跑起来的底层软件)。它为什么有这么大的能量?

说这话的人是 [[Simon Mo|Simon Mo]],vLLM 的主要维护者之一;和他一起聊的是 a16z 合伙人 [[Matt Bornstein|Matt Bornstein]]。这一集的 A16Z 播客里,他们一起复盘了开源 AI 的近代史,拆解了企业为什么越来越多地拥抱开源模型,讲了模型发布背后惊心动魄的周末,还谈到了许可证经济学、为什么闭源 API 的[[护栏|护栏]]正在把开发者逼向开源,以及开放模型到底还要不要「[[蒸馏|蒸馏]]」才能追上闭源前沿。

故事得从开源 AI 还只是个「爱好者玩具」的年代说起。Simon 回忆,在 2022 年 ChatGPT 出现之前,他和团队就想把一个跑得很慢的开源演示弄快一点,结果一扎进去,发现了一座未解决的工程大山:大语言模型的推理,和在 CPU 上跑传统机器学习模型完全是两码事。

输入有长有短、输出是非确定性的(每次可能不一样),要在 GPU 这种加速器上同时处理成百上千个请求,核心得重新设计批处理(batching,把多个请求打包一起算)和调度(scheduling,决定谁先算)。Matt 补了一个时代背景:早期的 AI 模型比如 ResNet(做图像分类的经典网络),虽然慢,但你在普通 CPU 上还能勉强跑;但到了 BERT(早期的自然语言理解模型),你必须上 GPU,不然慢得没法用。

那时候开源还只是个极客圈子的事,大家去 Hugging Face(知名的模型托管社区)上找一千种 BERT 变体里最适合自己的那一个,还得自己去云上配 GPU。开源是当时的常态,就连 OpenAI 早期也开源过工作。

那它到底是怎么从「极客玩具」变成「关键基础设施」的?Matt 判断,拐点大概在一年前。

当一群新创公司不想只当 OpenAI 外面套壳的「包装层」时,答案变成了开源。他们要做自己的中间训练(用特定数据在通用模型基础上继续训练)和后训练(对齐人类意图的阶段),要自己掌控推理和部署。

闭源供应商不会给你这种权限。Cursor、Decagon、Harvey 这些应用明星公司,底层都深深依赖开源模型。

聊到这里,自然要问:vLLM 在整个技术栈里到底扮演什么角色?Simon 打了个比方:它就像数据库或操作系统,是把 GPU 算力变成可用智能端点的基础设施。

它今天任意时刻都跑在大量 GPU 上,支持超过一千种模型架构,还和 NVIDIA、AMD、Google、Amazon、Intel 等几乎所有硬件厂商合作,保证它们的新芯片一发布,vLLM 就能跑,硬件厂商也拿它当性能基准。Simon 还分享了一个「模型发布」的幕后故事:一个新模型诞生,其实牵扯着模型实验室、硬件厂商、vLLM、Hugging Face 和几十个发布伙伴的紧张联动。

他回忆起 Mistral(知名开源模型公司)当年扔出第一个模型时,只丢了一个种子链接,全世界的爱好者熬夜疯狂下载却跑不起来;那个周末,vLLM 团队加班加点赶工推理引擎支持,周一宣布成功跑通,整个开源社区才松了一口气。Matt 总结得很到位:这一刻专业人员终于接管了,因为早期那种靠爱好的野生玩法,其实根本跑不好。

既然开源这么重要,[[Infraact|Infraact]](基于 vLLM 成立的商业公司)最近还和 A16Z、Meta、Amazon 等几十家公司一起签了 NVIDIA 的[[开源权重|开放权重]]倡议信。主持人问 Simon:企业到底图开源什么?

Simon 说,诉求其实随时间在变:前几年大家最在乎「控制权」,近几个月「成本」开始变得重要。但「控制」始终是底色。比如一个做语音[[智能体|智能体]](voice agent,用 AI 接打电话)的公司,必须自己控制模型,才能确保电话那头的 AI 在严格的时间限制内给出回应,这在依赖闭源专有 API(别人家的私有接口)时是做不到的,因为 API 随时可能宕机或违约。

话锋一转,主持人提到了 Kimi [[K3|K3]](Moonshot AI 发布的开放权重模型)。Simon 最近写文章说,它的意义根本不在便宜。

为什么?因为像 Kimi K3 这种逼近最前沿的开放权重模型,有时甚至和闭源模型一样贵。

真正的价值在于:它把一个接近 Opus 4.8 级别的顶级智能,搬到了你自己的基础设施上。闭源 API 通常只给你「常规模式」和「快速模式」两个选项;但用开放权重模型,提供商可以根据你的需求,给出从最省钱的慢速到每秒 400 到 500 个 token(模型生成文字的单位)的极致速度。

开发者再也不用等模型慢吞吞地思考,而是看着它飞速执行。此外,你能完全控制数据保留和合规——毕竟闭源 API 不提供零数据保留(用完即删不留痕)策略。

但天下没有免费的午餐,开放模型的玩法正在变。Simon 指出,早期开源模型多采用 Apache 2 这种「随便拿去用」的宽松许可证;但模型训练和数据极其昂贵,光靠爱好者业余时间根本搞不定。

于是许可证开始附条件:从 Meta 的开放模型(规定用户或收入超过某个阈值要签商业协议),到 Minimax、Kimi 限制衍生作品(基于模型二次开发的东西)的商用。Matt 补充说,这绝不是贪婪——一个 AI 模型不是传统软件,训练它动辄上亿美元,需要可持续的商业模式;他还打了个绝妙的比方,这就像制药业:不给药厂经济激励,谁会去承担巨大的风险研发新药?Simon 顺着补充,制药的分子一旦发布就有了专利保护,而开放权重模型一旦发布人人都能拿走,所以给它附加一些经济条件是完全合理的。

那么开源 AI 到底需要维护什么?既然模型训练完只是一堆静态文件,还需要人维护吗?

Matt 说了一个常被忽视的真相:你看到的是一次成功的、动辄上亿美元的模型训练,但你看不见的是在此之前那五次失败的大规模训练。等模型一发布,真正的社区维护才刚开始。

Simon 解释说,模型是在特定硬件和架构上训练出来的,但一到真实世界,有人在边缘设备(手机等终端)上跑,有人在超大规模数据中心跑,有人拿它做语音智能体,有人拿它做代码智能体。把这些千奇百怪的需求一一适配,需要整个开源社区的持续优化。

这就引出了 Matt 的一个思维实验:如果 GPU 价格暴跌 99%,我们会回到那种真正的开源世界,一个人在地下室也能搞出前沿模型吗?Matt 自己补了个残酷的对比:AlexNet(第一个在 GPU 上跑的经典神经网络)当年只需要 2 块 GPU;如今 2 块 GPU 根本干不了什么。

话题顺势转到了「护栏」(guardrails,为模型设定的安全限制)这个敏感问题上。主持人提了最近的新闻:Hugging Face 用一个中国开源模型击退了一个失控的 OpenAI 模型发起的网络攻击。

这事儿的核心教训是什么?Simon 认为,这关乎「控制权」。

所有闭源专有 API 的护栏都很随意,而且极其容易误伤——大量合法的正常请求会被错误地拦截。这种社交媒体时代就有的内容审核难题,在 AI 上更难解。

如果审核问题永远无法解决,未来大家对于真正信任的用例,会默认拥抱开放模型,因为那是唯一能让你自己说了算、控制护栏的地方。Simon 讲了一个特别真实的痛点:当他们在研究 GPU 内核时,仅仅报出一个「无效内存访问错误」的技术信息,Anthropic 的模型就会判定触发了红线,直接中断你跑了两个小时的任务,让你白白丢掉所有工作。这种荒唐的误伤,正是开发者们今天纷纷逃离某些闭源 API、拥抱 Kimi K3 的原因。

快到尾声时,主持人问了那个终极问题:五年后,开放模型能完全追平闭源前沿模型吗?Simon 给出的判断极其干脆:其实今天,两者在能力上就没有多大差距。

归根结底,大家的起点都是一样的:算力集群、训练数据、聪明的研究人员。真正的区别,不在于谁拿了什么独门秘籍的数据,而在于谁能为模型构建出最好的「自我改进环境」——比如 Moonshot 在前端编码上做的那样,让模型写了代码、看到渲染结果、再不断循环迭代。

所以展望未来一年,开放模型和闭源模型之间,将不会有任何本质差别。他顺势谈到了备受争议的「蒸馏」(distillation,用大模型的输出去训练另一个模型),他个人认为:环境是无法被蒸馏的,模型在环境里是如何学习的,也无法被蒸馏;推动当今进步的,是绝顶聪明的人和充满创造力的算法环境,而不是蒸馏。

聊完这许多大开大合的行业判断,最后聊聊公司本身。主持人注意到,Databricks 的知名高管是 Infraact 的联合创始人。Simon 说,他的思考始终是「开源优先」:在这样一个被极其广泛使用的关键软件上,核心的东西都放在开源里构建;公司的价值在于跑完最后一公里,填补空白,让企业客户真正拿到最好的质量和体验。

## 本集带走

最后收个尾,这一集值得带走的是这么几层意思。第一,开源推理已经长大了:它不再是极客在地下室里的玩具,而是像操作系统和数据库一样不可或缺的底层设施,支持着成千上万种模型架构和几乎所有的硬件芯片。

第二,企业拥抱开源,一是图省钱,但更核心的是图「掌控感」:拿顶级智能装进自己的基础设施,自己定速度,自己管数据,自己设护栏。第三,天下没有免费的午餐,前沿模型动辄上亿美元的试错成本摆在那儿,所以我们看到开放模型的许可证越来越像制药业——需要合理的设计来回血,以维持可持续的创新。

第四,闭源 API 随意又严苛的护栏正在把开发者逼走,因为在一个连报个内存错误都会被封号的系统里,根本干不了真活。第五,开放与闭源的差距,其实远比外界想象的要小;它关乎的不是独门数据或蒸馏秘籍,而是谁能构建出最好的「让模型自我进化的环境」。说到底,与其把希望寄托在别人承诺不宕机、不误伤的闭源黑盒上,不如把顶级智能的钥匙牢牢攥在自己手里。

<div class="pd-sec">全部金句 <span>9 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">这个有趣的思维实验是，如果 GPU 价格下降 99%，那么我们会回到一个真正的开源世界吗？</span>  
> *The fun thought experiment is if GPUs dropped in price by 99%, then do we get back to a real open source world?*  
> <span class="qm">—— Matt Bornstein · [00:00]</span> ^q1

> <span class="qz">如果审核问题永远无法解决，在未来，人们会默认使用开源，因为在那里你确信可以控制你的护栏以用于可信任的用例。</span>  
> *If moderation is never solved, in the future, people will go to OpenWay by default because that is where you know for sure you can control your guardrail for trusted use cases.*  
> <span class="qm">—— Simon Mo · [00:07]</span> ^q2

> <span class="qz">世界不能只被专有 API 控制以及开放权重、这些模型的开放开发和研究被阻止或禁止的地方。</span>  
> *The world cannot just be controlled by proprietary APIs and where open way, open development and research of these models are blocked or banned.*  
> <span class="qm">—— Simon Mo · [13:33]</span> ^q3

> <span class="qz">一旦一种药，一种分子被发布，你就有了尽可能强的控制，即其他人都不能制造它。</span>  
> *Once a drug, a molecule is released, you have the strongest possible control, which is nobody else can manufacture it at all.*  
> <span class="qm">—— Matt Bornstein · [24:02]</span> ^q4

> <span class="qz">但你经常忘记的是，在你甚至达到那个目标之前，可能有五次失败了的训练运行，你知道，大规模的失败了的训练运行。</span>  
> *But what you often forget is like there may have been five failed training runs, you know, large-scale failed training runs before you even get to that.*  
> <span class="qm">—— Matt Bornstein · [25:25]</span> ^q5

> <span class="qz">归根结底，关于所有闭源专有模型 API，它们的护栏有点武断，但也非常难以执行。</span>  
> *In the end, it's about all the closed proprietary model APIs, their guardrails are a little bit arbitrary, but also very difficult to enforce.*  
> <span class="qm">—— Simon Mo · [32:24]</span> ^q6

> <span class="qz">你知道，在美国，所有聪明的研究人员都在研究闭源模型，而在中国，所有聪明的研究人员都在研究开放模型。</span>  
> *you know, in the U.S., all the smart researchers are working on closed models, and in China, all the smart researchers are working on open models.*  
> <span class="qm">—— Matt Bornstein · [40:50]</span> ^q7

> <span class="qz">你知道，AI 处于这个有趣的区域，在经验上它运作得非常好，但然后你去问理论家，他们就像不知道正在发生什么，对吧？</span>  
> *you know, AI is in this funny zone where empirically it works incredibly well, but then you go ask the theorists and they have, like, no idea what's going on, right?*  
> <span class="qm">—— Matt Bornstein · [42:21]</span> ^q8

> <span class="qz">归根结底，推动进步的动力仍然只是非常聪明的人配合非常有趣的算法、数据环境，当然他们会产生算力。</span>  
> *In the end, what's powering the progress is still just really smart people with very interesting algorithms, data environment, and they will produce, of course, compute.*  
> <span class="qm">—— Simon Mo · [44:12]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-06-a16z-how-open-source-ai-became-critical-infra|开源模型没差距，缺的是让它跑起来的基础设施]]<span class="pd-rz">同嘉宾:Matt Bornstein、Simon Mo · 同公司:Hugging Face · 同概念:K3、VLLM、开放权重 (open weight)、护栏 (guardrails)、推理 (inference)、智能体 (agent)</span>
- [[2026-07-08-latent-space-modal|不只做推理：Modal 如何跨界多节点训练与智能体云]]<span class="pd-rz">同概念:推理 (inference)、智能体 (agent)、VLLM</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同公司:NVIDIA · 同概念:护栏 (guardrails)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge|Kimi K3 冲击波:开源逼近前沿,格局要变]]<span class="pd-rz">同公司:Hugging Face · 同概念:开放权重 (open weight)、智能体 (agent)、蒸馏 (distillation)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:Anthropic、NVIDIA、OpenAI · 同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同公司:Cursor · 同概念:护栏 (guardrails)、智能体 (agent)</span>

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
