---
title: 代码量暴涨8倍后，工程管理怎么办？
podcast: "Lenny's Podcast"
date: 2026-07-20
source_url: https://www.lennysnewsletter.com/p/building-the-most-ai-pilled-engineering
duration: "98:42"
type: episode
cover: "#6366f1"
image: "/covers/2026-06-21-lennys-building-the-most-ai-pilled-engineering.jpg"
description: Fiona Fung 分享在 AI 时代如何带领 Claude Code 团队重塑工程文化、调试流程与评估体系。
host: "[[Lenny]]"
cohosts: ["[[Fiona Fung]]"]
companies: ["[[Anthropic]]", "[[Facebook Marketplace]]"]
concepts: ["[[Claude Code]]", "[[Co-work]]", "[[智能体]]", "[[验证]]", "[[测试驱动开发]]", "[[潜在需求]]", "[[结对编程]]", "[[Visual Studio]]", "[[准时制]]", "[[IC]]", "[[内部试用]]"]
category: 组织与领导力
tags:
  - 组织与领导力
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-06-21-lennys-building-the-most-ai-pilled-engineering.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-06-21-lennys-building-the-most-ai-pilled-engineering#post","headline":"代码量暴涨8倍后，工程管理怎么办？","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-06-21-lennys-building-the-most-ai-pilled-engineering","mainEntityOfPage":"https://talk.solomind.cc/2026-06-21-lennys-building-the-most-ai-pilled-engineering","description":"Fiona Fung 分享在 AI 时代如何带领 Claude Code 团队重塑工程文化、调试流程与评估体系。","datePublished":"2026-07-20","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-06-21-lennys-building-the-most-ai-pilled-engineering.jpg","isBasedOn":"https://www.lennysnewsletter.com/p/building-the-most-ai-pilled-engineering","about":[{"@type":"Person","name":"Lenny"},{"@type":"Person","name":"Fiona Fung"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"Facebook Marketplace"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"Co-work"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"验证 (verification)"},{"@type":"Thing","name":"测试驱动开发 (test-driven development)"},{"@type":"Thing","name":"潜在需求 (latent demand)"},{"@type":"Thing","name":"结对编程 (pairwise programming)"},{"@type":"Thing","name":"Visual Studio"},{"@type":"Thing","name":"准时制 (just in time)"},{"@type":"Thing","name":"IC"},{"@type":"Thing","name":"内部试用 (dogfooding)"}],"articleSection":"组织与领导力"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"组织与领导力","item":"https://talk.solomind.cc/tags/组织与领导力"},{"@type":"ListItem","position":3,"name":"代码量暴涨8倍后，工程管理怎么办？","item":"https://talk.solomind.cc/2026-06-21-lennys-building-the-most-ai-pilled-engineering"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>代码量暴涨8倍后，工程管理怎么办？</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 代码量暴涨8倍后，工程管理怎么办？

<div class="pd-byl"><b>Fiona Fung</b> · Anthropic工程负责人 · 2026-07-20</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-06-21-lennys-building-the-most-ai-pilled-engineering.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">没关系，我有这样一句话：犯新的错误。犯错没关系，只要犯新的错，这样我们就能不断学习。因为如果你追求零错误，那大概意味着你行动不够快，或者有点太谨慎了。</div><div class="a">— Fiona Fung <button class="pd-ts" data-t="11:28" data-who="Fiona Fung" data-en="it's okay to like I have this saying make new mistakes like it's okay to make mistakes just make new ones so that we're always learning because if you aim to make zero mistakes like that probably means you're not you know moving fast enough or being a little bit too cautious" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Lenny]] · [[Fiona Fung]]
>
> **公司** [[Anthropic]] · [[Facebook Marketplace]]
>
> **概念** [[Claude Code]] · [[Co-work]] · [[智能体]] · [[验证]] · [[测试驱动开发]] · [[潜在需求]] · [[结对编程]] · [[Visual Studio]] · [[准时制]] · [[IC]] · [[内部试用]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/building-the-most-ai-pilled-engineering)

[[Anthropic|Anthropic]] 的工程师现在平均每季度产出的代码量，是 2025 年时的八倍。过去，软件必须刻进光盘、赶上硬性截止日期才能发行；如今，编码本身不再是瓶颈，真正稀缺的是时间、[[验证|验证]]能力与雄心。负责 [[Claude Code|Claude Code]] 和 Co-work 团队的 [[Fiona Fung|Fiona Fung]] 在这集访谈里，讲了她是如何重塑工程评估标准、重塑调试流程、重塑招人标准，以及在角色边界全面模糊的时代如何维系团队文化的。

Fiona 是一位有 25 年经验的资深工程领导者。在加入 Anthropic 之前，她曾在微软主导 TypeScript 和 [[Visual Studio|Visual Studio]]（一种集成开发环境）的开发，随后在 Facebook 创立了 [[Facebook Marketplace|Facebook Marketplace]] 团队，并在 Instagram 和 Meta 主管过超过 500 人的组织。这一集 YC 的对谈里，她讲了五件事：为什么传统的代码行数和 PR 数已经失效，管理者该如何用新的例行程序（定时自动运行的[[智能体|智能体]]任务）来跟进团队工作；怎么把人员管理从“下指令”转变成“给目标、给护栏”；在角色边界全面模糊的时代如何招人和评估；在全员异步、人手一群智能体的新常态下，怎么避免工作变成一种孤独的体验；以及管理者最该担心的不是代码会不会出 bug，而是飞速扩张中怎么保住团队的文化。

说完了这集的开场背景，接下来先看 Fiona 眼里最根本的转变：既然写代码不再是瓶颈，到底什么才是新瓶颈？Fiona 指出，当不仅工程师、连设计师和产品经理都在提交代码，且整体吞吐量飙升时，最大的挑战变成了“验证”。

以前工程时间极其宝贵，还要赶着把软件印进光盘发行，所以大家做大量事前规划；现在 Claude Code 和 Co-work 把编码瓶颈打破后，重心转移到了“如何验证这 8 倍的代码真的高质量” <button class="pd-ts" data-t="08:59" data-who="Fiona Fung" data-en="you know, like we're seeing with with Cloud Code and Co-Work is coding is no longer the bottleneck." aria-label="回原文"></button>。为了跟上这种暴涨的产出，她专门在自己所有的代码仓库里挂了一个常驻的 Claude Code 远程会话。

这个实例不仅能读取所有代码，还接入了团队的各种 Slack 频道和指标仪表盘。每个月她会共享屏幕，跟团队一起让 Claude 回顾这段时间发布了哪些产品、引发了哪些事故，从中提炼出共性。她还有一句名言：“犯新的错误没关系，只要别犯同样的旧错，就说明你在快速前进” <button class="pd-ts" data-t="11:26" data-who="Fiona Fung" data-en="did it do in market or hey did we have you know like did we cause some bugs and it's okay to like I have this saying make new mistakes like it's okay to make mistakes just make new ones so that we're" aria-label="回原文"></button>。

管理者对庞杂数据的跟进方式变了，那面对每天无数的具体反馈和审查，怎么保证质量不掉线？这就引出了她最大的工作流转变。

Fiona 提到，就在一两个月前他们推出了 Routines（例行程序）功能，这彻底改变了她的日常仪式 <button class="pd-ts" data-t="13:06" data-who="Fiona Fung" data-en="see some gaps like that just used to be something I would do every morning and yeah I think maybe a month or two ago we launched routines and that's also completely" aria-label="回原文"></button>。以前她得每天早起、喝着咖啡人工去刷各个渠道的用户反馈；现在她只需设定一个 Routine，让智能体每天定时跑一遍，自动分析反馈里的主题，甚至直接把修复的 PR（代码合并请求）生成好等她醒来审查 <button class="pd-ts" data-t="37:02" data-who="Fiona Fung" data-en="kick off and then I wake up and I end up having PRs that I could review versus before which is still I can have different agents and then it's still I'm still thinking about okay now" aria-label="回原文"></button>。

她强调，这其实是[[测试驱动开发|测试驱动开发]]（TDD）的进化版：以前你得逼着自己先写测试再写代码，就像先吃讨厌的西兰花；现在你只需给出一份“什么是好”的规格说明，Claude 就能自动据此做代码审查 <button class="pd-ts" data-t="15:52" data-who="Fiona Fung" data-en="Get that into the repo and then code review can make sure it's still matching what you set up to do. Basically, it's like the evolution of test-driven development." aria-label="回原文"></button>。为了监控那些难以量化的糟糕体验，她甚至搞了一个“脏话仪表盘”，专门追踪用户因为极度沮丧而爆粗口的频率 <button class="pd-ts" data-t="48:18" data-who="Fiona Fung" data-en="experience and less frustrating. But yeah, the swear word dashboard is a fun one. This episode is brought to you by Mercury." aria-label="回原文"></button>。

工具变了，人和组织架构该怎么跟着变？这正是下一个话题。

Fiona 在招聘时，如今专门寻找两类人：一类是具有产品直觉的创意构建者，另一类是专门解决硬核技术难题的深度系统专家 <button class="pd-ts" data-t="17:09" data-who="Lenny" data-en="And so I'll read what you said there and I want to hear more here. So the two profiles that you now look for when you're hiring are creative builders with product sense and deep systems experts for the hard parts." aria-label="回原文"></button>。不仅如此，她还要求团队里的每个管理者，上任的第一步必须是先做回 [[IC|IC]]（独立贡献者） <button class="pd-ts" data-t="49:48" data-who="Lenny" data-en="to how teams operate and I think is something that has worked really well for you. One is making every manager start as an IC and then just every manager has to continue being an IC part time," aria-label="回原文"></button>。

Fiona 自己在 Meta 管过 500 人的大组织，但刚加入 Anthropic 时，她也是从写代码的 IC 做起的 <button class="pd-ts" data-t="53:04" data-who="Fiona Fung" data-en="I started out, like it was for a very short amount of time, but actually this was my journey between Microsoft and Meta." aria-label="回原文"></button>。她认为，如果管理者不亲手用自己团队造的工具，就会彻底失去对产品质感的最直观触感。

不管仪表盘多漂亮，如果没有“狗粮”（[[内部试用|内部试用]]）的切身体验，你提出的反馈只会让人觉得脱离实际 <button class="pd-ts" data-t="64:06" data-who="Fiona Fung" data-en="your teams and and and reports I love it um yeah I think it's it's really and and this has worked for me um it's just been a really good way for me to keep a pulse on you know anytime you build" aria-label="回原文"></button>。有意思的是，这种工作模式的转变也带来了副作用：大家都埋头跟自己的智能体干活，工作变得极其孤独。为了对抗这种疏离感，她发起了“[[结对编程|结对编程]]午餐”，让大家能互相偷师别人是怎么用 Claude Code 的 <button class="pd-ts" data-t="56:49" data-who="Fiona Fung" data-en="So recently we started maybe like a pairwise programming lunch. Because what we also learned was on Cloud Code, everybody uses Cloud Code and Co-Work. Everybody uses the flow so differently." aria-label="回原文"></button>。

团队角色变了，那更宏观的评估体系和规划体系是不是也失灵了？Fiona 觉得，单纯去量代码行数或是纠结 Token 最大化，本质上都是在把“动静”误当成“进步” <button class="pd-ts" data-t="41:29" data-who="Fiona Fung" data-en="to to do like all of this you know there was another saying I really like don't first take motion for progress because if you're measuring like you know like tool" aria-label="回原文"></button>。

她更关心的，是输出到底有没有转化为最终的业务结果。她举了早期做 Facebook Marketplace 时的例子：最初按区域扩张时，他们死盯“卖家数量”这个门槛，结果发现某个地区卖家不多，但少数几个强力卖家就完美满足了当地人的需求，逼着他们反过来去修正原先设死的指标 <button class="pd-ts" data-t="43:06" data-who="Fiona Fung" data-en="thing we would keep an eye on is kind of like number of sellers and I remembered after launching to our first region I'm like how in this area the number of sellers" aria-label="回原文"></button>。

这种怀疑既有框架的态度也延伸到了团队管理上：她彻底废除了半年期的路线图规划，改成了极其轻量级的 JIT（[[准时制|准时制]]）月度规划，最多每周大家碰一次头，确认一下本月优先级有没有变 <button class="pd-ts" data-t="84:41" data-who="Fiona Fung" data-en="yeah I call it JIT planning now like just in time planning so it is like around like because yeah I think six months was too long so now for sure some projects will take more than a month but we try to do like a month planning like really" aria-label="回原文"></button>。因为变化实在太快，任何重流程都会迅速沦为拖累团队的“税”。

说完了内部流程的重构，最后回到一个更基础的问题：在这个旧规则飞速失效的世界里，到底是什么支撑着团队不散架？Fiona 坦言，真正让她夜里睡不着的不是什么高深的技术难题，而是团队文化的维系 <button class="pd-ts" data-t="78:09" data-who="Fiona Fung" data-en="you up at night you know the thing that keeps me up at night probably um is how we so you know we talked about kind of like cloud code and co-work team culture that's and the team culture is really important" aria-label="回原文"></button>。

在 OpenAI、Anthropic 这些公司疯狂扩张、前所未有地招人的当下，她最看重的是一种“单团队”心态——谁快撞线了，必须回头看有没有队友需要搭把手。为了做到这点，她极其反感管理者粉饰太平。

她的噩梦就是那种嘴上说着“一切都好”、实则像“房间着火了还在喝咖啡的狗”一样死扛的经理 <button class="pd-ts" data-t="82:09" data-who="Fiona Fung" data-en="everything's fine I'm like oh my gosh I'm not doing fine I know this thing's like like it's that that whole like you know how there was this meme of the dog drinking" aria-label="回原文"></button>。面对这个让很多人恐惧 AI 的时代，Fiona 的解法很实在：与其害怕，不如问自己“哪怕只做一件事，什么是你能控制的”。她自己就是靠这个信条，在互联网泡沫破裂、学费无着的至暗时刻，靠周末去银行当柜员蹚出了一条路。

## 本集带走

最后收个尾，这一集值得带走的是几条实操性极强的管理心得。第一，既然代码量在飙升，管理者与其死盯代码行数或 PR 数，不如把重心彻底转到验证上，把规格说明和验收标准喂给智能体，让它们去挡掉平庸的错误，甚至把日常的反馈巡检都交给定时运行的例行程序。

第二，在角色边界全面模糊的时代，真正的护城河不是招只会写代码的人，而是招那种“创意构建者”和“深度系统专家”，并且逼着所有管理者必须亲手写代码、试用自家产品，别脱离一线的泥土味。第三，旧时代那种长达半年、充满仪式感的重规划已经失效了，拥抱轻量级的准时制月度规划，甚至不妨大胆砍掉那些让团队痛苦但又不再产出价值的流程。最后，不管智能体多强悍，真正决定团队上限的依然是文化，是那种允许你坦诚说出“这事搞砸了”的心理安全感，以及在狂飙突进中依然愿意伸手拉队友一把的本能。

<div class="pd-sec">全部金句 <span>4 条</span></div>

> <span class="qz">没关系，我有这样一句话：犯新的错误。犯错没关系，只要犯新的错，这样我们就能不断学习。因为如果你追求零错误，那大概意味着你行动不够快，或者有点太谨慎了。</span>  
> *it's okay to like I have this saying make new mistakes like it's okay to make mistakes just make new ones so that we're always learning because if you aim to make zero mistakes like that probably means you're not you know moving fast enough or being a little bit too cautious*  
> <span class="qm">—— Fiona Fung · [11:28]</span> ^q1

> <span class="qz">客户会以你没有意图的方式使用你的产品，无论好坏。</span>  
> *Customers will use your product in ways that you did not intend for good or for bad.*  
> <span class="qm">—— Fiona Fung · [34:28]</span> ^q2

> <span class="qz">不要首先把动静误认为是进步，因为如果你在衡量比如工具用户使用情况，那么你衡量的是行动，但它真的实现了你的最终结果吗？</span>  
> *don't first take motion for progress because if you're measuring like you know like tool user usage then you're you're measuring the action but is it really making whatever the end outcome of yours*  
> <span class="qm">—— Fiona Fung · [41:29]</span> ^q3

> <span class="qz">然后在生活中，你知道，在一个你可以成为任何事物的世界里，可能最好是保持友善。</span>  
> *And then in life you know probably in a world where you can be anything be kind*  
> <span class="qm">—— Fiona Fung · [93:06]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「组织与领导力」挖下去**

- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>
- [[2026-08-02-lennys-this-cpo-regrets-that-product-management|让最资深的人回去写文档:Whatnot CPO 的 PM 新法则]]<span class="pd-rz">同公司:Anthropic · 同概念:IC</span>
- [[2025-10-26-lennys-how-block-is-becoming-the-most-ai-native|Block CTO：代码质量与产品成功毫无关系，打造 AI 原生公司靠的是组织重组]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-02-19-lennys-head-of-claude-code-what-happens|Claude Code 负责人：写代码已被解决，下一步是什么]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude Code、智能体 (agent)、潜在需求 (latent demand)</span>
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同公司:Anthropic · 同概念:Claude Code、Co-Work、智能体 (agent)</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同公司:Anthropic、Slack · 同概念:Claude Code、智能体 (agent)</span>

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
  // 故再兜一条 history.length>1(站内点进必有返回历史)。命中「直开」给 body 打 .pd-direct,CSS 切显隐。
  function direct(){
    var ref = document.referrer || '';
    var fromSite = (ref.indexOf(location.origin) === 0) || history.length > 1;
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
