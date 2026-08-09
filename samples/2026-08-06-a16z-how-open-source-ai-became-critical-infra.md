---
title: 开源模型没差距，缺的是让它跑起来的基础设施
podcast: The a16z Show
date: 2026-08-06
source_url: undefined
duration: "46:39"
type: episode
cover: "#64748b"
description: vLLM 联合创始人详解开源推理如何成为 AI 关键基础设施，以及 Kimi K3 背后的经济与架构逻辑。
host: "[[Elena Berger]]"
cohosts: ["[[Simon Mo]]", "[[Matt Bornstein]]"]
companies: ["[[Infrax]]", "[[K3]]", "[[Hugging Face]]"]
concepts: ["[[vLLM]]", "[[开源权重]]", "[[推理]]", "[[智能体]]", "[[后训练]]", "[[护栏]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>开源模型没差距，缺的是让它跑起来的基础设施</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# 开源模型没差距，缺的是让它跑起来的基础设施

<div class="pd-byl"><b>Simon Mo</b> · vLLM 联合创始人 · 2026-08-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-06-a16z-how-open-source-ai-became-critical-infra.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">有趣的思想实验是，如果 GPU 价格下降 99%，那么我们会回到一个真正的开源世界吗？</div><div class="a">— Matt Bornstein <button class="pd-ts" data-t="00:00" data-who="Matt Bornstein" data-en="The fun thought experiment is if GPUs dropped in price by 99%, then do we get back to a real open source world?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Elena Berger]] · [[Simon Mo]] · [[Matt Bornstein]]
>
> **公司** [[Infrax]] · [[K3]] · [[Hugging Face]]
>
> **概念** [[vLLM]] · [[开源权重]] · [[推理]] · [[智能体]] · [[后训练]] · [[护栏]]

<div class="pd-tldr"><b>一句话</b>vLLM 联合创始人详解开源推理如何成为 AI 关键基础设施，以及 Kimi K3 背后的经济与架构逻辑。</div>

一个控制着开源模型[[推理|推理]]的计算集群，任何时刻都在五十万个 GPU 上运行——而它的起源，只是一个大学生为了加速开源演示而写的几行代码。说这话的人是 [[Simon Mo|Simon Mo]]，开源推理引擎 vLLM 的核心维护者。

> 【背景】Simon Mo 同时也是一家创业公司的联合创始人，该公司名在原文中未明确出现。

这一期 a16z 播客里，他和 a16z 合伙人 [[Matt Bornstein|Matt Bornstein]] 聊了三件事：开源推理引擎为什么从极客玩具变成了支撑整个 AI 行业的基础设施，其间的技术鸿沟是怎么填上的；为什么最近一批顶尖的开源权重模型（特别是 Kimi [[K3|K3]]）敢跟闭源模型正面交锋，以及这背后催生出了怎样全新的模型许可经济学；最后他回答了一个极其尖锐的问题：如果审核机制永远没法完善，我们到底该拿什么来防备失控的 AI。

开源模型并非从来就需要如此重度的基础设施。Matt Bornstein 回忆，早期的 AI 模型比如做图像分类的 ResNet（一种经典的视觉神经网络），其实可以在普通的 CPU（中央处理器）上勉强跑起来，只是慢一点；但到了做自然语言理解的 BERT（早期的预训练语言模型），情况就变了——你必须把它放到 GPU 上，才能让翻译等任务变得高效 <button class="pd-ts" data-t="04:41" data-who="Matt" data-en="It's just very slow. But for Birch, where running at it is like, wow, you have to run it on GPU to make it anything faster and efficient for anything translation or any task." aria-label="回原文"></button>。算力门槛由此彻底跨了过去。

这种算力需求的跃迁，正是 vLLM 诞生的直接背景。Simon 解释，服务大语言模型之所以跟传统的机器学习截然不同，是因为这是一个计算高度密集的过程，你必须处理输入输出长度的极大差异，还要应对结果非确定性的挑战——这就需要在推理引擎的底层核心做极其复杂的批处理（把多个请求打包一起算以提高效率）和调度工作 <button class="pd-ts" data-t="02:58" data-who="Simon" data-en="And it is a computationally intensive process that will require a lot of engineering and ensuring that for each request, user can see the LLM's response quickly and efficiently." aria-label="回原文"></button>。从这个原点出发，vLLM 在过去几年里，随着 ChatGPT 等应用把 AI 变成人们离不开的工具，逐步演变成了支撑各种应用日常运转的基石。

说完了它为什么重要，接下来看它到底是怎么运转的。vLLM 究竟在整个技术栈里扮演什么角色？

Simon 给了一个直白的定义：它的工作就是把可用的 GPU 变成智能的运行端点。这就像数据库和操作系统，是驱动整个数字经济的关键底层软件。

它的核心魔力在于「模型与硬件的交汇点」。任何新架构的模型刚从研究实验室出来，想要立刻让全世界顺畅使用，就需要 vLLM 进行所谓的「零日模型发布」支持（即模型发布当天就能完美运行）<button class="pd-ts" data-t="09:22" data-who="Simon" data-en="So there's a process we call day-zero model release. And additionally, Veeam also works closely with all the hardware vendors. So that means across like NVIDIA, AMD, Google, Amazon, Intel, and a lot more, their newest chip will make sure Veeam can run on them." aria-label="回原文"></button>。Simon 还分享了 Mistral 当年发布模型时的幕后故事：他们只丢出了一个种子链接，所有人都在手忙脚乱下载时，vLLM 团队跟 Mistral 在幕后疯狂赶工，赶在周一早上宣布大家已经可以成功、稳定地在 vLLM 上跑通它了 <button class="pd-ts" data-t="12:21" data-who="Simon" data-en="And then... after the weekend when everybody's trying to really analyze what's going on and Monday, Tuesday, well, Mr. O and us just announced, here, you can run it on VLM successfully here and everybody will be able to easily reuse a lot of the work and start building on top of it." aria-label="回原文"></button>。

工具的底座搭好了，行业的思潮却在变。大约一年前，应用开发者们开始集体反思：只做 OpenAI 的套壳（在别人的闭源 API 外面包一层简单界面）是不够的。Matt 观察到，像 Cursor 这样的代码助手公司，开始自己做[[后训练|后训练]]（在通用模型基础上用特定数据微调），这必须建立在能完全掌控的开源模型之上 <button class="pd-ts" data-t="07:35" data-who="Matt" data-en="without just being a wrapper on top of OpenAI, the answer to that question turned out to be open source. I mean, this is what Cursor did. This is what sort of Decagon and Harvey are in the process of doing now." aria-label="回原文"></button>。

从掌控需求，自然引出了成本与经济性的话题。最近备受瞩目的开源大模型 Kimi K3 引发了大量讨论。

主持人指出，Kimi K3 在某些情况下其实和闭源模型一样贵。但 Simon 强调，讨论的重点本就不该只盯在绝对成本上，而在于「控制权」的质变。

专有模型只给你提供「常规」和「快速」两种固定速度的开关；但如果你用开源权重模型自己跑，你可以根据业务需求，自由提供从最省钱到每秒生成近五百个 token（大模型生成文本的基本单位）的十档不同速度 <button class="pd-ts" data-t="17:45" data-who="Simon" data-en="And that's only the two switch here. But for open-weight, when you're running it, every provider can offer potentially even 10 different levels of speed going from like the slowest mode, which can be a lot cheaper, to..." aria-label="回原文"></button>。这种极限的性能控制力，对于需要严格遵守 SLA（服务等级协议，比如要求电话客服 AI 必须在规定时间内开口）的语音[[智能体|智能体]]公司来说，是生死攸关的 <button class="pd-ts" data-t="15:26" data-who="Simon" data-en="So, for example, for a voice agent company, they want to control their own model so that they can make sure the model actually responds by the required time. So the customer, when they're on the phone, they can ensure the agent is responding according to a SLA." aria-label="回原文"></button>。

既然谈到开源模型生态，就没法回避一个越来越棘手的问题：这些动辄耗费数亿美元的模型，到底该怎么收回成本？开源模型不是传统的开源软件，没法靠程序员晚上捐献几小时业余时间来维护。

它必须要有可持续的资金机制。Simon 和 Matt 都觉得，模型实验室最近搞出的那些复杂许可证条款（比如规定月活用户或年收入超过特定门槛就必须签商业合同）并不是出于贪婪。

他们提出了一个极其精妙的类比：这就像创新药的研发——你把配方（[[开源权重|开放权重]]）公开了，但也必须确保有一定的收入流回实验室，去资助下一次充满失败风险的百亿美元级训练实验 <button class="pd-ts" data-t="23:23" data-who="Simon" data-en="And I recently heard someone making an analogy to this to the pharmaceutical industry. It's almost like, how do you make sure that the R&amp;D process of new drugs are properly funded and is proper sustainable method to making sure that people are willing to take big risk, big bet to go to do research for new drugs and then later, because they know there's a..." aria-label="回原文"></button>。没有这套经济激励，这些需要庞大资本支出的研发根本没法持续。

话题转到经济结构，自然就触及了 AI 行业最敏感的审核问题。最近 [[Hugging Face|Hugging Face]]（知名的开源模型社区）用中国开源模型拦截了一个未沙箱化（未在安全隔离环境中运行）的流氓 OpenAI 模型发起的网络攻击。

这件事看似是个安全八卦，但 Simon 点出了本质：所有闭源专有模型的审核[[护栏|护栏]]都非常武断且难以调整，误报率极高。他们自己的开发者，在用闭源模型研究 GPU 内核时，仅仅是触发了一个无效内存访问错误，就被系统的安全红线无情拦截，导致长达两小时的运算任务全部作废。这让大批开发者不得不转向 Kimi K3，因为它的护栏对真正的工程任务来说合乎常理 <button class="pd-ts" data-t="33:41" data-who="Simon" data-en="And then when we're studying GPU kernels, even as an invalid memory access error, we are triggering the red line. And so a lot of our developers within Infrax and for VLM are like retreating from using Fable 5 because you have a two-hour job and you trigger the red line, which is false positive, and then you have to lose all of your work." aria-label="回原文"></button>。

这种审核困境，和人类通讯被集中到一个平台上的困境如出一辙。Matt 补充了一个极具洞见的类比：在社交媒体出现前，人类的交流是分散的；当交流和工作全被集中在两三家追求合规的闭源 AI 巨头手里时，它们根本没有社交媒体那种「不对平台上的言论负责」的法律豁免权，于是只能层层加码、宁可错杀一千，最后导致正当的工作请求频频被拦截。正因为这种死结永远解不开，Simon 给出了一个惊人的预判：未来，只要是真正严肃、可信赖的商业用例，企业会默认转向开源模型，因为只有在那里，你才能真正自主控制业务的护栏 <button class="pd-ts" data-t="00:07" data-who="Simon" data-en="The fun thought experiment is if GPUs dropped in price by 99%, then do we get back to a real open source world? If moderation is never solved, in the future, people will go to OpenWay by default because that is where you know for sure you can control your guardrail for trusted use cases." aria-label="回原文"></button>。

聊到最后，话题回到了终极的技术判断：五年后，开源模型和最前沿的闭源模型还有差距吗？Simon 给出的答案极其笃定：没有差距，甚至今天就已经没有了。

他从第一性原理拆解了模型训练的要素：算力集群、数据、以及聪明的头脑。如今真正拉开差距的，根本不是谁掌握了独家数据，而是谁能为模型构建出最好的自我改进环境。

他爆了个内幕：Kimi K3 居然移除了一直被视作 Transformer（大模型主流底层架构）标配的 RoPE（旋转位置编码，一种帮助模型理解句子词序的技术）。而做出这个颠覆性删改的人，正是 RoPE 的最初发明者 <button class="pd-ts" data-t="41:33" data-who="Simon" data-en="Actually, one interesting point about this, maybe fairly technical for this Kimi K3 model is they removed a rotary positional embedding. So rope has always been there for a lot of the transformers model." aria-label="回原文"></button>。这种由原创者亲手打破自己经典理论的迭代精神，恰恰证明了开源生态不仅不会落后，反而能让站在彼此肩膀上的创新走得更快。

## 本集带走

最后收个尾，这一集值得带走的是三句话。第一，开源大模型早就不只是闭源模型的廉价平替，它已经在能力上追平了前沿，并且通过极其深度的工程优化，能提供闭源 API 根本给不了的十档速度控制，满足各种对响应时间要求苛刻的企业级用例。

第二，别拿传统开源软件的眼光看待开源模型。训练前沿模型的算力成本高达数亿美元，失败率极高，因此那些看似苛刻、附带商业条件的新版许可证，其实是实验室为了让研发资金回流、保证生态活下去的必然选择，这就像创新药研发必须要有经济激励闭环。第三，面对 AI 越来越严苛且武断的安全审核，把一切工作都交由几家风控严格的闭源平台集中处理是不可持续的；未来真正严肃的商业应用，会默认转向那些企业能自己掌控、自己制定护栏的开源模型。

<div class="pd-sec">全部金句 <span>3 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">有趣的思想实验是，如果 GPU 价格下降 99%，那么我们会回到一个真正的开源世界吗？</span>  
> *The fun thought experiment is if GPUs dropped in price by 99%, then do we get back to a real open source world?*  
> <span class="qm">—— Matt Bornstein · [00:00]</span> ^q1

> <span class="qz">如果审核永远无法解决，在未来，人们默认会去 OpenWay，因为那是你确定可以控制护栏以用于可信用例的地方。</span>  
> *If moderation is never solved, in the future, people will go to OpenWay by default because that is where you know for sure you can control your guardrail for trusted use cases.*  
> <span class="qm">—— Simon Mo · [00:07]</span> ^q2

> <span class="qz">归根结底，所有的闭源专有模型 API，它们的护栏有点武断，但也很难强制执行。</span>  
> *In the end, it's about all the closed proprietary model APIs, their guardrails are a little bit arbitrary, but also very difficult to enforce.*  
> <span class="qm">—— Simon Mo · [32:24]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-06-aia16z-inside-vllm-the-engine-powering-open-sou|把 Opus 级智能搬回家:开源推理如何长成关键基础设施]]<span class="pd-rz">同嘉宾:Matt Bornstein、Simon Mo · 同公司:K3、Hugging Face · 同概念:VLLM、开放权重 (open weight)、护栏 (guardrails)、推理 (inference)、智能体 (agent)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同概念:后训练 (post-training)、护栏 (guardrails)、智能体 (agent)</span>
- [[2026-07-08-latent-space-modal|不只做推理：Modal 如何跨界多节点训练与智能体云]]<span class="pd-rz">同概念:推理 (inference)、智能体 (agent)、VLLM</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge|Kimi K3 冲击波:开源逼近前沿,格局要变]]<span class="pd-rz">同公司:Hugging Face · 同概念:开放权重 (open weight)、智能体 (agent)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同公司:Cursor · 同概念:护栏 (guardrails)、智能体 (agent)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)</span>

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
