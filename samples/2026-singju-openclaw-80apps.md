---
title: "OpenClaw创始人：为何80%的应用将消失"
podcast: SingjuPost 转录
date: 2026-07-14
source_url: https://singjupost.com/openclaw-creator-why-80-of-apps-will-disappear-transcript/
type: episode
cover: "#64748b"
image: "/covers/2026-singju-openclaw-80apps.jpg"
description: "OpenClaw 作者谈运行在本地的个人 AI 智能体如何吞掉多数 App、用 CLI 取代 MCP,以及他作为独立开发者的构建哲学。"
guests: ["[[Raphael Schaad]]", "[[Peter Steinberger]]"]
companies: ["[[Codex]]", "[[Claude Code]]"]
concepts: ["[[OpenClaw]]", "[[智能体]]", "[[mcp]]", "[[提示注入]]", "[[CLI]]", "[[护城河]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>OpenClaw创始人：为何80%的应用将消失</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# OpenClaw创始人：为何80%的应用将消失

<div class="pd-byl"><b>Peter Steinberger</b> · OpenClaw创始人</div>

<div class="pd-mt">2026-07-14 · SingjuPost 转录</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-singju-openclaw-80apps.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">看起来每个人都在追逐某种集中的上帝智能。而在过去十天左右涌现出来的似乎是群体智能和社区智能。</div><div class="a">Raphael Schaad</div></div>

> [!info] 关联
> **人物** [[Raphael Schaad]] · [[Peter Steinberger]]
>
> **公司** [[Codex]] · [[Claude Code]]
>
> **概念** [[OpenClaw]] · [[智能体]] · [[mcp]] · [[提示注入]] · [[CLI]] · [[护城河]]
>
> **来源** [SingjuPost 转录](https://singjupost.com/openclaw-creator-why-80-of-apps-will-disappear-transcript/)

<div class="pd-tldr"><b>一句话</b>OpenClaw 作者谈运行在本地的个人 AI 智能体如何吞掉多数 App、用 CLI 取代 MCP,以及他作为独立开发者的构建哲学。</div>

[[Peter Steinberger|Peter Steinberger]] 做的开源项目 [[OpenClaw|OpenClaw]](一个跑在你自己电脑上的个人 AI [[智能体|智能体]],GitHub 仓库几乎一夜之间冲到超过 16 万颗星)最近在互联网上彻底爆了（[[Raphael Schaad|Raphael Schaad]]）。他自己也形容「这简直太狂野了,我不知道一个人怎么能吸收所有这些」,坦言收到了「非常酷的东西」也收到了「非常糟糕的东西」,但显然击中了某种激发情绪、让人感兴趣的东西（Peter Steinberger）。

> 【背景】OpenClaw 此前用过多个名字,在访谈中 Peter 提到它曾叫 CloudBot;项目名是「第五个名字」[00:20]。Peter 在访谈中常把自己那个有独特性格的个人智能体称为「Motty」[04:50]。

## 为什么是它起飞:本地运行 = 无所不能

很多人在做 AI 甚至个人助手,Peter 认为 OpenClaw 的最大不同在于「它实际上是在你的电脑上运行的」——他目前看到的所有东西都在云端跑,只能做几件事;而如果直接跑在你的电脑上,「它可以做每一件该死的事情」（Peter Steinberger）。主持人接得很干脆:「这台机器可以做你能用这台机器做的任何事」（Raphael Schaad）。Peter 举例:可以连你的烤箱、特斯拉、灯、Sonos,甚至控制他床的温度——「ChatGPT 做不到」（Peter Steinberger）。

> 【背景】Peter 是资深 iOS/macOS 开发者,访谈里提到他为此「复出」,早先还花两个月做过一个叫 Wipe Tunnel 的项目。

本地 + 全盘数据 = 能给你惊喜。他讲了个故事:一位朋友装了 OpenClaw,让它「浏览我的电脑并对我去年做一个叙述」,结果它翻到了一年多前他自己都忘了的每周日录音文件,做出了非常好的叙述。仅仅因为它能搜索整台电脑,就能在很多方面给你惊喜（Peter Steinberger）。

## 从「人-机」到「机-机」再到「机雇人」

主持人把镜头拉远:我们正从人与机器人的交互,转移到机器人与机器人的交互,甚至机器人代表你去雇佣其他人类来完成现实世界里的任务（Raphael Schaad）。Peter 觉得这是自然的下一步:比如要订餐厅,你的机器人会直接联系餐厅的机器人去谈判,更高效;如果对方是老式餐厅不接受机器人,你的机器人就去找个人类帮忙打电话、甚至去排队（Peter Steinberger）。他进一步想象:未来你可能有多个专精的机器人,一个管私生活、一个管工作、甚至一个「关系机器人」——「我们还太早了,还有很多事情我们真的没弄清楚它是否真的有效。但我觉得我们现在已经在时间线上了」（Peter Steinberger）。

主持人顺势点出过去十天左右涌现的范式转变:「似乎每个人都在追逐某种集中的上帝智能。而在过去十天左右涌现出来的似乎是群体智能和社区智能」（Raphael Schaad）。Peter 从人类分工类比:一个人造不出 iPhone、上不了太空、甚至可能找不到食物;但作为群体我们分工,作为更大的社会分工更细。「我们已经拥有专精于某些事情的 AI。即使它是通用智能,如果它实际上也是专用智能呢?」（Peter Steinberger）。

## Aha 时刻:模型自己写出了创作者没预想的方案

主持人请他重现那个「哇,这做的事情比我实际想象的要多得多」的时刻（Raphael Schaad）。

Peter 回忆:最初那个「非常烂的原型」只花了他一小时,就是在连接 WhatsApp 和 [[Claude Code|Claude Code]] 的依赖之间加了点「胶水」,会慢但能跑。后来他想要图像(让模型发自拍、创建图片发回来)又加了几个小时（Peter Steinberger）。转折发生在马拉喀什一次生日派对:网不好但 WhatsApp 能用,他就大量拿它翻译、解释照片,觉得「真的太有用了」,而且模型「说我的语言、有点小傲娇、很有趣」（Peter Steinberger）。

真正的震撼时刻:他走着给模型发了条语音,发完才反应过来「等等,这不可能工作。我没建那个」（Peter Steinberger）。输入指示器闪了十秒,模型回复了。他问它怎么做到的,模型还原了自己的思路:你发的消息没有文件后缀,所以我看了头部,发现是 Opus 格式,用 FFMPEG 转成 WAV;想转录但没装 Whisper,于是找了找,发现一个 OpenAI 的密钥,就用 curl 把它发给 OpenAI,拿回文本——全程大概九秒（Peter Steinberger）。

> 【背景】Opus 是一种音频编码格式;FFMPEG 是处理音视频的经典命令行工具;Whisper 是 OpenAI 的语音识别模型;curl 是命令行下发送网络请求的常用工具。模型在这段里靠「看头部判断格式 + 找现成工具 + 找现成密钥」自己拼出了一条链路。

Peter 强调,这些具体步骤他「没有构建或预料到任何那些具体的事情」（Raphael Schaad）。他的结论是:编码模型之所以能做到,是因为「编码真的就像创造性问题解决,它很好地映射回现实世界」——这是一种既能写代码、也能做现实任务的抽象技能。模型甚至聪明到不去本地装 Whisper,因为它知道那要下载几分钟,而「我没耐心」,于是选了最聪明的办法。就是那一刻他被彻底钩住了（Peter Steinberger）。

## 多数 App 会消失,但记忆才是护城河

主持人抛出大问题:当电脑能做这些你没预料到的事,应用程序会不会消失?Peter 的判断:「它们中的 80% 会消失」（Peter Steinberger）。理由是:凡是「基本上只是管理数据」的应用,都能被智能体以更自然的方式管理。比如不需要健身应用,因为智能体已经知道你在做错误决定(比如在 Smashburger),你不评论它就自动追踪、拍照就归档,还会顺手改进你的健身计划;也不需要待办应用,你说一句它就提醒。只有那些「实际上有传感器」的应用也许能活下来（Peter Steinberger）。

那模型公司呢?Peter 一方面承认大模型公司有[[护城河|护城河]],「因为它们最终提供 token」——大家抱怨用掉太多 token,其实是因为你太爱用它（Peter Steinberger）。但他同时指出模型护城河没那么牢:每次新模型一发布大家都惊叹「太好了」,一个月后就习惯了,然后觉得它变差了;其实模型还是那个平均水准,只是你的期望被拉高了。「在可预见的未来,大公司仍然在硬件方面有护城河」（Peter Steinberger）。

> 【背景】Peter 在这里把「quantize(量化)」口误说成了「quanticize」;量化是一种压缩模型体积的技术,常被怀疑是模型「变笨」的元凶。他打趣说其实公司「什么也没做」,是你适应了新标准。

主持人追问:App 要走、模型大脑可替换,那剩下的价值在哪——是记忆的存储,还是硬件?（Raphael Schaad）。Peter 把矛头指向「数据孤岛」:每家公司都想把你绑在它的数据孤岛里,「绝对没有别的公司可以提取你的记忆的方法」;而 OpenClaw 的美妙之处在于「它有点像把数据抓过来,因为终端用户需要访问权限」（Peter Steinberger）。主持人补了一句:这些记忆就是你自己机器上的一堆 markdown 文件（Raphael Schaad）。Peter 也承认这些文件超级敏感——「人们使用智能体不仅是为了解决问题,而且非常快地为了个人解决问题」（Peter Steinberger）,他自己就有不想被泄露的东西（Peter Steinberger）。

## 公开 Demo 的疯狂玩法:把无限制的机器人放进 Discord

为了让更多人「体验到」OpenClaw(他觉得光靠推文解释不清楚它的厉害之处（Peter Steinberger）),Peter 做了件挺疯的事:创建了一个 Discord,把自己的机器人没有任何安全限制地放进去,让公众进来交互、看他用它构建软件,甚至尝试[[提示注入|提示注入]](通过伪装输入来诱导 AI 偏离原定指令的攻击手法)来黑它。「我的智能体会嘲笑他们」（Peter Steinberger）。安全靠的是系统提示词锁定:机器人「只听我的,但响应所有人」（Peter Steinberger）。

> 【背景】这段里的 Codex 指 OpenAI 推出的命令行编码智能体,与 Claude Code(Anthropic 推出的同类命令行编码智能体)是当下两大主流,后文 Peter 反复对比这两者。

他的系统是「非常有机」地长出来的:先后建了 identity MD、SOL MD 等各种文件;到一月才开始让别人更容易安装。他让 [[Codex|Codex]] 帮他基于自己的配置生成模板,产物被形容为「面包」——「人们开玩笑说 Codex 感觉像面包」,「新机器人跟我拥有的相比太无聊了」。于是他让 Motty「用你的性格注入那些模板」,之后出来的东西「实际上很有趣」（Peter Steinberger）。

他特别提到那个唯一不开源的文件——SOL MD。灵感来自 Anthropic 的一项研究:有人发现模型权重里隐藏着一段文本,模型自己并不「记得」学过,但它已经「铭刻在权重里」,现在被称为「Constitution」（Peter Steinberger）。

> 【背景】Anthropic 是 Claude 系列模型的公司,「Constitution/宪法」在这里指模型训练中写入价值观与行为准则的做法,使模型在推理时自然体现这些原则而不需要显式记忆。

Peter 觉得这极其迷人,于是和自己的智能体一起创建了 SOL MD,写下核心价值——「我们想要什么样的人机交互、什么对我重要、什么对模型重要」。有些部分他自己也觉得有点像 mumbo jumbo(含糊其辞的空话),但有些部分对「模型如何反应和响应文本、让它感觉很自然」非常有价值。至今「没有人攻破那一个文件」（Peter Steinberger）。

## 构建哲学:Codex 而非 Claude Code、拒绝 work tree、不做 MCP

主持人注意到 Peter 在好几点上都挺反向,请他展开讲讲怎么构建（Raphael Schaad）。

**选 Codex 不选 Claude Code**。「全世界都在用 Claude Code,我不觉得我可以用 Claude Code 构建任何东西」。他爱 Codex,因为「它在决定更改什么之前浏览了更多的文件」,对熟练驾驶员来说不用做那么多伪装就能得到好输出（Peter Steinberger）。

> 【背景】Claude Code 与 Codex 都是让 AI 直接在命令行/本地仓库里改代码的工具;Git work tree 是 Git 的一种机制,能让同一仓库的多个工作树并存以并行处理多条分支,近年在 AI 编码工具里被频繁采用。

**Codex 很慢,那就开十个一起跑**。「它非常慢。所以我有时同时使用 10 个——也许那个屏幕上 6 个,那里 2 个,那里 2 个」（Peter Steinberger）。

**拒绝 work tree,只用多个仓库副本**。Peter 说同步切换十个 Codex 已经够复杂了,所以要把其他复杂度降到最低。在他脑子里「main 总是可发布的」,于是他干脆把同一仓库克隆成多个副本,都停在 main 上,这样不用纠结分支命名、不用处理 work tree 带来的各种限制。「我不喜欢使用 UI,因为这又增加了复杂度……我只关心同步和文本」（Peter Steinberger）。代码他大多「看到它飞过」,只有遇到棘手的才会细看。

**故意不做 [[mcp|MCP]] 支持,用 [[CLI|CLI]] 取代**。这是最反潮流的一招。「我很高兴我甚至没有构建 MCP 支持。OpenClaw 非常成功,里面没有 MCP 支持」(只带一个小星号:他写了个技能,用自己的工具 MakePorter 把 MCP 转成 CLI 来用)（Peter Steinberger）。

> 【背景】MCP(Model Context Protocol)是 Anthropic 提出的一套让大模型调用外部工具/数据的协议,被视为给 AI「插外设」的标准;CLI 是 Unix 命令行工具的统称,也是程序员最熟悉的交互方式。

他的理由是:「你不需要它」。这样还能即用即插、不用像 Codex 或 Claude Code 那样改配置就重启整套东西。他直接开火:「现在你看 Anthropic——他们构建了一个工具调用搜索功能,一些为 MCP 定制的东西,那是测试版,因为它太棘手了。不,只需要 CLI。机器人真的擅长 Unix。你可以想要多少就有多少,它就能工作」（Peter Steinberger）。

主持人替他总结:「这有点回到——你只是给它人类喜欢用的同样的工具,而不是专门为机器人发明东西」（Raphael Schaad）。Peter 一锤定音:「没有理智的人类会尝试手动调用 MCP……那就是未来」（Peter Steinberger）。

<div class="pd-sec">全部金句 <span>6 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">看起来每个人都在追逐某种集中的上帝智能。而在过去十天左右涌现出来的似乎是群体智能和社区智能。</span>  
> *It seems like everyone was chasing sort of the centralized God intelligence. And what has sort of emerged over the past 10 days or so is sort of the swarm intelligence and the community intelligence.*  
> <span class="qm">—— Raphael Schaad · 来自原文</span> ^q1

> <span class="qz">即使它是通用智能,如果它实际上也是专用智能呢?</span>  
> *Even though it’s generalized intelligence, what if it actually is also specialized intelligence?*  
> <span class="qm">—— Peter Steinberger · 来自原文</span> ^q2

> <span class="qz">所以公司试图把你绑定到他们的数据孤岛。</span>  
> *So the companies try to bind you to their data silo.*  
> <span class="qm">—— Peter Steinberger · 来自原文</span> ^q3

> <span class="qz">不,只需要 CLI。机器人真的擅长 Unix。你可以想要多少就有多少,它就能工作。</span>  
> *No, just have CLIs. The bot really is good at Unix. You can have as many as you want and it just works.*  
> <span class="qm">—— Peter Steinberger · 来自原文</span> ^q4

> <span class="qz">没有理智的人类会尝试手动调用 MCP。</span>  
> *No sane human tries to call MCP manually.*  
> <span class="qm">—— Peter Steinberger · 来自原文</span> ^q5

> <span class="qz">必须是一个来自离硅谷很远的某个小国家的独行侠带给我们这一切。</span>  
> *it had to be a loner from some tiny country far away from Silicon Valley to bring all of this upon us.*  
> <span class="qm">—— Raphael Schaad · 来自原文</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得]] —— 同公司:Claude Code · 同概念:OpenClaw、智能体 (agent)
- [[2026-07-13-pg-the-complete-claude-stack-for-pms|PM 如何用 Claude 把生产力提升 10 倍：全栈实战]] —— 同公司:Claude Code · 同概念:MCP、智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏]] —— 同公司:Codex · 同概念:OpenClaw、智能体 (agent)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|Dan Shipper 的未来工作预测：别等 AI 末日，用 Codex 重塑一切]] —— 同公司:Claude Code、Codex · 同概念:CLI、OpenClaw、智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」]] —— 同公司:Claude Code、Codex · 同概念:智能体 (agent)
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当代码不再是瓶颈,品味和策展成为产品团队的稀缺力]] —— 同公司:Codex、ChatGPT · 同概念:智能体 (agent)

</div>
</div>

*本集关键词:个人智能体 · 本地运行 · AI 编码 · 智能体交互 · 模型护城河*

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
    ['.search','.readermode'].forEach(function(sel){ grab(sel,acts); });
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
