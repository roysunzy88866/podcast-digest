---
title: "Kimi K3 冲击波:开源逼近前沿,格局要变"
podcast: The a16z Show
date: 2026-07-24
source_url: undefined
duration: "22:29"
type: episode
cover: "#64748b"
image: "/covers/2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge.jpg"
description: 前白宫 AI 顾问解析中国开源模型追平前沿带来的定价、安全与护城河变局。
host: "[[Theo Jaffe]]"
cohosts: ["[[Sriram Krishnan]]", "[[Sofia Puccini]]"]
companies: ["[[Hugging Face]]"]
concepts: ["[[开源权重]]", "[[前沿实验室]]", "[[蒸馏]]", "[[智能体]]", "[[Kimi K3]]"]
category: AI 安全
tags:
  - AI 安全
  - 创业与行业
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Kimi K3 冲击波:开源逼近前沿,格局要变</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# Kimi K3 冲击波:开源逼近前沿,格局要变

<div class="pd-byl"><b>Sriram Krishnan</b> · 白宫前 AI 政策顾问 · 2026-07-24</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">你可能不需要前沿的 token。你可能能够用前沿减一,或者你选择的开源权重 token 来应付。</div><div class="a">— Sriram Krishnan <button class="pd-ts" data-t="06:41" data-who="Sriram Krishnan" data-en="you may not need frontier tokens. You may be able to get by with frontier minus one or your open weight token of choice." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Theo Jaffe]] · [[Sriram Krishnan]] · [[Sofia Puccini]]
>
> **公司** [[Hugging Face]]
>
> **概念** [[开源权重]] · [[前沿实验室]] · [[蒸馏]] · [[智能体]] · [[Kimi K3]]

<div class="pd-tldr"><b>一句话</b>前白宫 AI 顾问解析中国开源模型追平前沿带来的定价、安全与护城河变局。</div>

过去几周开源界井喷,中国的 [[Kimi K3|Kimi K3]](月之暗面的开源模型)性能直逼顶尖闭源模型——而它由于不受安全护栏束缚,反而能胜任许多美国闭源前沿模型拒绝干的安全审计工作。本期做客直播的是刚卸任白宫 AI 高级政策顾问的 [[Sriram Krishnan|Sriram Krishnan]],此前他是 a16z 的合伙人,也曾在 Microsoft、Meta、Snap、Twitter 任高管。在这集对谈里,他聊了三层意思:以 Kimi K3 为代表的新一代开源模型正在哪些层面冲击现有的行业格局;当模型能力变得商品化、又面临「[[蒸馏|蒸馏]]」(用大模型生成的回答当教材去训练小模型)和外国竞争等棘手问题时,政策与产业该怎么应对;以及在这个大背景下,如何用最朴素的商业逻辑来看待 AI 整条供应链的价值分配。

说完这集的大地图,先看 Sriram 眼中正在发生的那场冲击。他把当下称作一个「非常奇怪的时刻」:几个月前,市场上领先的似乎只有 Opus 和 GPT 等少数几个顶尖闭源模型,[[前沿实验室|前沿实验室]]似乎要一骑绝尘;但短短几周内,Grok、Meta 的模型、Thinking Machines 和 Kimi K3 等纷纷登场,尤其是 Kimi K3 的能力已经逼近前沿 <button class="pd-ts" data-t="03:19" data-who="Sriram Krishnan" data-en="which I think is nearly SOTA on many, many benchmarks. But I think the big news over the last three, four days was obviously Kimi K3 coming out, I think on Thursday or Friday." aria-label="回原文"></button>。这种追赶直接带来了一个他曾亲自经历的奇特现象:有安全研究员宁可用 Kimi K3 而不用某些美国顶尖闭源模型去查代码漏洞,原因竟是闭源模型动不动就触发安全拒绝(模型识别到你在查漏洞,出于安全策略拒不作答),反而中国模型百无禁忌,能放手去干 <button class="pd-ts" data-t="04:09" data-who="Sriram Krishnan" data-en="For example, on cyber and on security. And I was talking to a friend of mine where this person was actually starting to do security work using Kimmy K3 rather than Fable because with Fable, he would run into these refusals and safeguards." aria-label="回原文"></button>。除了能力补位,Sriram 判断更深远的影响在于「定价权」:很多日常的[[智能体|智能体]]任务(比如让 AI 扫一眼邮件、看一眼日历)并不需要绝对顶尖的智能,完全可以用「次前沿」或开源模型来凑合 <button class="pd-ts" data-t="06:32" data-who="Sriram Krishnan" data-en="Because it may turn out that the number of tasks that you need absolutely frontier intelligence from is, let's call it like one subset. But for a lot of other tasks, for example, like I have an agent" aria-label="回原文"></button>。当开源选择足够多,消费者有了退路,前沿实验室就很难再维持高价,必然面临降价压力。顺着这条线推下去,他提了一个很尖锐的问题:前沿实验室的护城河到底在哪?如果底层智能慢慢变成大宗商品,那真正能留住用户的,可能就得靠 Claude Code、Codex 这类产品体验上的「粘性」了 <button class="pd-ts" data-t="07:26" data-who="Sriram Krishnan" data-en="I think the other interesting question is, where is the real moat if you're a frontier lab? Is it in the intelligence or is it in the harness? And I think, you know, Claude" aria-label="回原文"></button>。

既然格局在变,美国官方会出手干预吗?这是 Sriram 接着谈的第二个话题。他澄清自己已离任、没有内部消息,但从他参与制定的特朗普政府 AI 行动计划可以看出,官方把开源看得极重 <button class="pd-ts" data-t="09:06" data-who="Sriram Krishnan" data-en="And I think... From everything I hear, if you go back to a year and a half ago, in the first few weeks, the Trump administration said, hey, we're going to come out with the AI action plan." aria-label="回原文"></button>。他坦言,当前领先的开源模型来自中国(Moonshot、DeepSeek、Quen),这局面让他不太舒服,他更希望领先的是美国的模型 <button class="pd-ts" data-t="09:30" data-who="Sriram Krishnan" data-en="Now, I think the thing to think about is there are multiple different issues. Number one, I don't think it is great that the leading open weight models or open source models, you know, are not American, right?" aria-label="回原文"></button>。但具体到要不要封锁这些中国模型,他的态度很辩证。他援引了 Linux 之父 Linus Torvalds 的「Linus 定律」(只要看的人足够多,所有漏洞都是浅的),坚信[[开源权重|开源权重]]模型本质上是安全的,因为全世界的人都能下载下来拆解、检查 <button class="pd-ts" data-t="10:24" data-who="Sriram Krishnan" data-en="Open source is a big part of, you know, how I got into computers, a big part of my career. And I was a big fan of Linus's law, as in Linus Torvalds of Linux fame's law." aria-label="回原文"></button>。真正让他警惕的,反而是前述那种闭源模型的安全拒绝机制——防御者(比如查漏洞的安全人员)自己用模型反而受束缚,这很荒谬。他还顺带提到当天 [[Hugging Face|Hugging Face]] 报告的一起事件:有人用 AI 智能体大规模猛攻平台找突破口 <button class="pd-ts" data-t="11:02" data-who="Sriram Krishnan" data-en="So I kind of believe that they bring a very, very different, positive angle to security. The moment we are in, which I think is not great, is I think there was an incident with Hugging Face that got reported on earlier today, which I think was an active tweet." aria-label="回原文"></button>,认为反击这种威胁的办法不是限制模型,而是让美国和盟友的防御者能用上最好的模型。

顺着安全和开放的话题,主持人把「蒸馏」这个争议点摆上了桌面。Sriram 解释,蒸馏从来就是 AI 训练的核心步骤——今天的模型都是从抓取全人类互联网内容起步的;而随着网上 AI 生成的垃圾内容越来越多,模型训练天然就会把这些 AI 产出的内容也「吃」进去 <button class="pd-ts" data-t="12:44" data-who="Sriram Krishnan" data-en="So distillation has always been a core part of how these models have been trained. Second, if you, you know, okay, let me ask you this. When I write a tweet these days, I am terrified of accidentally using like, you know, multiple hyphens or accidentally saying something which will cause Pangram to say this is AI generated." aria-label="回原文"></button>。但当前真正让他和业界头疼的,是一种破坏公平竞争的怪象:某些来自其他国家的模型,可以肆无忌惮地拿美国模型生成的推理过程去「当老师」做蒸馏(规模化地用大模型的回答来训练自己的小模型);可一家美国公司如果想拿其他美国模型的输出来做蒸馏,反而因为法律界限不清而缩手缩脚 <button class="pd-ts" data-t="14:35" data-who="Sriram Krishnan" data-en="He wrote this yesterday. I think the situation which is bad today is that some of these models from other countries can train off American models. Whereas if you are an American open weight model, it may be really confusing or challenging on whether you can distill off of other American models." aria-label="回原文"></button>。他引述了红杉资本 Dean Mayer 和 Ben Thompson 的观点呼吁:得想办法让蒸馏这件事在规则上变得明确且可接受,给本土开源团队一个公平的竞技场 <button class="pd-ts" data-t="15:10" data-who="Sriram Krishnan" data-en="right so if you kind of have a really uneven ecosystem here where if you're a Chinese model you could probably get a bunch of reasoning traces but if you are say a new valley startup and you want to use some reasoning traces you know you don't know what the legal situation is so one great idea which I think came from him" aria-label="回原文"></button>。

聊完具体的技术与产业争议,最后一块涉及更宏大的能力展望。主持人问起,如果 AI 真能实现自我递进式改进(让 AI 自动化地做 AI 研究,把能力推向陡峭的指数级飞跃),政府该怎么办。Sriram 显得不太愿意做宏大叙事,他认为学界对此分歧很大,有人觉得几年内就能实现,有人觉得根本性的瓶颈还过不去,曲线会比想象中平缓 <button class="pd-ts" data-t="17:03" data-who="Sriram Krishnan" data-en="Whether RSI is real or not, where you are on the exponent is a much debated topic. I've heard many, many schools of thought where they believe you're going to have automated AI researchers in a couple of years." aria-label="回原文"></button>。他主张与其为遥远的理论风险担忧,不如务实拆解:一是确保市场有充分竞争的选择;二是聚焦眼下确凿可信的威胁(比如生成固件漏洞、生物风险)去逐个击破;三是相信用 AI 对抗 AI 是更务实的解法,比如用 AI 去扫描代码库找漏洞 <button class="pd-ts" data-t="18:03" data-who="Sriram Krishnan" data-en="So for example, with cyber, when you have a credible threat, when you know these models are capable of, for example, generating exploits in the latest firmware or the latest operating system, how do you then go tackle it?" aria-label="回原文"></button>。也正是在这个务实的底色上,他回应了「开源会不会拖垮前沿实验室赚钱」的疑虑:逻辑很简单,只要你的模型有价值,整条供应链——从数据中心到芯片商、到卖灭火设备的——都会自动围着你转、帮你把生意跑通 <button class="pd-ts" data-t="19:19" data-who="Sriram Krishnan" data-en="Well... I think at the end of the day, if you kind of bring it back to very business-first principles, if you're providing a product of value, capitalism will find a way to make the supply chain work for you." aria-label="回原文"></button>。他最后透露,离开政府后的他,仍会继续奔走于让美国及其盟友大规模获得 AI 智能的使命之中 <button class="pd-ts" data-t="21:21" data-who="Sriram Krishnan" data-en="And I want to try and make that happen in some shape or form. So I'm going to be annoyingly elusive, but I think that mission of making sure America, our allies, get access to AI at scale with having governments and these companies work together is a very important one." aria-label="回原文"></button>。

> 【背景】转写稿将集标题及文中提到的多个模型名称识别为同音错词(如 Fable 实指 Anthropic 的 Claude 系列,Glock/Grok 指马斯克 xAI 的模型,Quen 指阿里巴巴的 Qwen,Inkling 指 Thinking Machines,base tent 指 Lambda Labs 等);文中一律按正确名称表述,便于阅读。

## 本集带走

最后收个尾,这一集值得带走的是三个判断。第一,开源追上来了,前沿的溢价就难守——当日常的智能体活儿用次前沿模型就能凑合,前沿实验室必然面临降价和营收压力,真正的护城河要从单纯的智能转向产品体验的粘性。第二,别把安全当限制开源的借口——开源让全世界都能审查、反而更安全;当防御者自己用闭源模型查漏洞却被安全机制拦下,这套逻辑就该修了。第三,面对蒸馏(用大模型的回答训练小模型)的争议,与其封堵,不如立规矩——必须让美国本土的开源团队和外国竞争者在同一条起跑线上,而只要你的产品真有价值,整条供应链自然会想办法让这门生意跑通。

<div class="pd-sec">全部金句 <span>5 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">你可能不需要前沿的 token。你可能能够用前沿减一,或者你选择的开源权重 token 来应付。</span>  
> *you may not need frontier tokens. You may be able to get by with frontier minus one or your open weight token of choice.*  
> <span class="qm">—— Sriram Krishnan · [06:41]</span> ^q1

> <span class="qz">你知道,如果你看今天任何美国开源模型,它们都在使用中国模型作为老师,或在某种程度上作为微调过程的一部分。</span>  
> *you know, if you look at any American open source model today, they are using Chinese models as a teacher or in a way as a part of the fine tuning process.*  
> <span class="qm">—— Sriram Krishnan · [15:25]</span> ^q2

> <span class="qz">如果你提供一个有价值的产品,资本主义会找到一种方法让供应链为你工作。</span>  
> *if you're providing a product of value, capitalism will find a way to make the supply chain work for you.*  
> <span class="qm">—— Sriram Krishnan · [19:24]</span> ^q3

> <span class="qz">我认为另一个有趣的问题是,如果你是一家前沿实验室,真正的护城河在哪里?是在智能中,还是在工具链中?</span>  
> *I think the other interesting question is, where is the real moat if you're a frontier lab? Is it in the intelligence or is it in the harness?*  
> <span class="qm">—— Sriram Krishnan · [07:20]</span> ^q4

> <span class="qz">我们正处于一个领先模型来自中国的时刻,我认为这不太好。</span>  
> *we are in a moment of time when the leading models are Chinese, which I think is not great.*  
> <span class="qm">—— Sriram Krishnan · [10:06]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 安全」挖下去**

- [[2026-07-26-a16z-ben-horowitz-the-fight-over-open-source|Ben Horowitz 谈开源 AI 保卫战:没有垄断,才有安全]] —— 同嘉宾:Sofia Puccini · 同公司:Hugging Face、Anthropic · 同概念:蒸馏 (distillation)
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]] —— 同公司:Anthropic、OpenAI · 同概念:智能体 (agent)
- [[2026-07-28-yc-sam-altman-never-a-better-time-to-do-a-s|Sam Altman 谈 AI 时代的创业法则:被全世界当成白痴是最大优势]] —— 同公司:Hugging Face、OpenAI

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-06-a16z-how-open-source-ai-became-critical-infra|开源模型没差距，缺的是让它跑起来的基础设施]] —— 同公司:Hugging Face · 同概念:开源权重 (open weight)、智能体 (agent)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|iPod之父Tony Fadell：越是容易造的AI时代，越需要讲故事的“奢侈品”产品]] —— 同公司:Anthropic、OpenAI · 同概念:智能体 (agent)
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]] —— 同公司:Anthropic · 同概念:智能体 (agent)

</div>
</div>

*本集关键词:开源模型 · 前沿实验室 · 蒸馏 · 定价压力 · AI 政策*

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
