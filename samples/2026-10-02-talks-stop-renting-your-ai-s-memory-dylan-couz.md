---
title: 前沿正在回家：把超级智能的记忆装进你自己的口袋
podcast: 精选演讲
date: 2026-10-03
source_url: undefined
duration: "14:58"
type: episode
cover: "#64748b"
description: Quadrants 开发者关系工程师 Dylan Cousin 论证 AI 的记忆应归属个人：本地向量存储让模型记住你的一切，且无人能关停。
guests: ["[[Dylan Couzon]]"]
companies: ["[[Quadrants]]"]
concepts: ["[[记忆]]", "[[向量搜索]]", "[[嵌入]]", "[[开放权重模型]]", "[[超级智能]]", "[[推理]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-02-talks-stop-renting-your-ai-s-memory-dylan-couz#post","headline":"前沿正在回家：把超级智能的记忆装进你自己的口袋","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-02-talks-stop-renting-your-ai-s-memory-dylan-couz","mainEntityOfPage":"https://talk.solomind.cc/2026-10-02-talks-stop-renting-your-ai-s-memory-dylan-couz","description":"Quadrants 开发者关系工程师 Dylan Cousin 论证 AI 的记忆应归属个人：本地向量存储让模型记住你的一切，且无人能关停。","datePublished":"2026-10-03","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Dylan Couzon"},{"@type":"Organization","name":"Quadrants"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"向量搜索 (vector search)"},{"@type":"Thing","name":"嵌入 (embeddings)"},{"@type":"Thing","name":"开放权重模型 (OpenWeight)"},{"@type":"Thing","name":"超级智能 (superintelligence)"},{"@type":"Thing","name":"推理 (inference)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"前沿正在回家：把超级智能的记忆装进你自己的口袋","item":"https://talk.solomind.cc/2026-10-02-talks-stop-renting-your-ai-s-memory-dylan-couz"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>前沿正在回家：把超级智能的记忆装进你自己的口袋</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 前沿正在回家：把超级智能的记忆装进你自己的口袋

<div class="pd-byl"><b>Dylan Couzon</b> · 开发者关系工程师 · 2026-10-03</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-02-talks-stop-renting-your-ai-s-memory-dylan-couz.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">在一个版本里,超级智能存在于别人的数据中心,你按 token 付费。在另一个版本里,它是你的。</div><div class="a">— Dylan Couzon <button class="pd-ts" data-t="00:47" data-who="Dylan Couzon" data-en="In one, superintelligence lives in someone else's data center, and you pay by the token. In the other, it's yours." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Dylan Couzon]]
>
> **公司** [[Quadrants]]
>
> **概念** [[记忆]] · [[向量搜索]] · [[嵌入]] · [[开放权重模型]] · [[超级智能]] · [[推理]]

这一集是一场大会演讲,标题叫《前沿正在回家》。演讲者是 [[Quadrants|Quadrants]] 的开发者关系工程师 Dylan Cousin,他做的是一个直接[[嵌入|嵌入]]应用、跑在你本地的[[向量搜索|向量搜索]]引擎(向量搜索:把文字、图片变成一串数字,靠数字之间的距离来判断"语义像不像"的检索方式)。他的核心主张一句话就能说完:比我们所有人都聪明的[[超级智能|超级智能]]几年内就会出现,"何时出现"是个无聊的问题,真正的问题是——**它归属于谁**。<button class="pd-ts" data-t="00:31" data-who="嘉宾" data-en="So what do I mean by that? And somewhere in the next few years, something smarter than all of us is going to exist. We've spent years asking when, but I think when is kind of the boring question." aria-label="回原文"></button>

他摆出两个版本:一个版本里,超级智能住在别人的数据中心,你按 token 付费,随时可能被关掉、限速、夺走;另一个版本里,它是你的——从你的生活中学习,上下文私密,没人能动它。第二个版本就是他说的"前沿正在回家"。<button class="pd-ts" data-t="00:47" data-who="嘉宾" data-en="I think the real one is who it belongs to, because there are two versions of this. In one, superintelligence lives in someone else's data center, and you pay by the token." aria-label="回原文"></button>

## 桌面上的前沿模型,却只是个"聪明的陌生人"

硬件这一半其实已经到家了。他给出一个具体数字:今天一台 **2500 美元以下**的机器,就能运行"基本上是去年"的前沿模型,而开放权重的模型正在快速逼近,差距每个季度都在缩小。说实话,不是绝对最前沿,"但近得惊人"。

可这并没有带来预期中的里程碑感。他的解释是:**一个模型本身只是一个聪明的陌生人**——强大,但不是你的。让它成为"你的"的,是它知道的关于你的一切,而这一部分还没有回家。

更扎心的是现状的技术栈:算力是租的,模型是租的,运行框架是租的,连那个本应随岁月复利、本应"成为你"的部分,也是租的。他说,如果不解决这个,我们这代人能触及的最强大技术,最终归属的是**持有租约的人**,而不是它本为之而建的人。

## 租用的真实代价:三种失控

 renting 的代价体现在三个层面。第一是**被下架**:上个月,一道政府命令切断了对两个旗舰模型 Fable 和 Mythos 5 的全部访问,面向所有客户。

对比一下已经坐在你桌面上的权重——没人能伸手进你的机器把它们关掉。 第二是**悄悄变差**:即使模型保持在线,提供商会淘汰旧版本、在经济吃紧时给剩下的版本限速;而你自己拥有的权重,不改变就永远不变。 

第三是**补贴会消失**:现在人们不再写提示词,而是在智能体循环里跑好几个小时,一个任务烧掉的 token 可能是一条聊天消息的数千倍——有开发者在 200 美元的套餐上每月烧掉超过 5000 美元的算力。"那是补贴,而补贴最终会消失。"

## 更深一层:拥有推理给你自主,拥有记忆才给你连续

他指出,即使自己跑模型,也只解决了问题的一半。**拥有[[推理|推理]]给你的是自主性——没人能夺走模型;但拥有[[记忆|记忆]]给你的才是连续性**——而连续性恰恰是每家大厂都在打包起来再卖回给你的东西。

去年,每家前沿实验室都发布了记忆功能。他点破:不是因为模型变聪明了,而是因为模型在会话之间**什么都不携带**——那个空缺才是真正的产品。一个起点简单但持续学习你的系统,永远比一个起点惊艳却把你忘得一干二净的系统**感觉**更聪明。

## 记忆到底是什么:三个动词,不是更大的提示词

他给记忆下了个工程化的定义:它不是一个更大的提示词,而是一个有三个动词的系统——**写入、检索、遗忘**,和你大脑实际做的三件事一样。

针对"为什么不干脆把所有东西扔进一个大文件夹"的反驳,他的回答是:检索到正确的记忆,胜过倾倒所有内容然后祈祷模型自己找到。检索给你一样提示词给不了的东西——**控制**:可以按主题过滤,可以按新近度和频率衰减,可以让相关性随时间漂移,"就像人类记忆实际运作的那样"。

而且他说,这块基础设施多年前就备好了:2016 年就有了 HNSW(一种高效的近邻搜索索引结构),嵌入(把内容转成向量)从 2019 年起就能在本地跑。"超级智能的记忆这一面从来不是难的部分,我们只是没把它指向自己。"

他引用 Carpathy 的比喻,这是全场最好记的一句:**模型是 CPU,上下文窗口是 RAM,记忆是磁盘**。RAM 快,但会话一结束就清空;磁盘才是跨越每一次对话都记得你的东西。而现在,地球上几乎每一个 AI 助手的"磁盘",都在别人的数据中心里——离被重塑或搬走,只差一次服务条款的更改。

## 现场演示:一架完全离线、能记住所见一切的无人机

接下来是本集最具体的部分——一个现场演示。他笔记本上跑着一段无人机飞过民宅的视频,识别完全离线:用 YOLO(一个目标检测模型)检测画面里的物体并打标签,再把图片和标签转成嵌入,写入本地向量库,为这架"第一次出门、什么都不懂"的无人机构建实时记忆。

几组实打实的数字:现场已经识别了 **92 个不同物体**、写入超过 **300 个向量**;整个记忆加引擎的占用只有 **15 MB**。点一下画面里的咖啡桌,不到一毫秒,就能调出这架无人机见过的每一张咖啡桌——带图像、首次/最后出现的时间戳、定义,甚至被见过几次。全程无任何网络连接。

还有云同步的可选能力:一群无人机或机器人可以共享一个云端的"蜂群思维"——一个学到,全体都学到。他说这只是用无人机举例,同样适用于聊天机器人、你打电话咨询的智能体、代码助手。

关键的推论在后面:给一个模型建几周这样的记忆,"那个陌生人就消失了"。它记得你的纠正、你的偏好、那些你只需要碰一次的死胡同。

**一个仅仅"还算不错"但永远不会忘记你、并在多年间不断复利的模型,在实践中会开始显得超人——不是因为模型变了,而是因为它从未停止学习你。**

而且这套记忆是可移植的:换推理模型、换硬件都不重要,只要保留同一个嵌入模型,那个文件夹就成了永久资产——一辈子的上下文,从一台设备跟到另一台。

## 再往前一步:给你的"一整天"装上磁盘

他说这可以远远超出笔记本和无人机。把同样的记忆对准你的一整天:工牌放哪儿了?

她女儿叫什么?白板上写了什么?

我们见面时放的那首歌是什么?——"每一个都只是一次检索查询。"你刚看到的是无人机记住物体,把它扩展到你看到和听到的一切,这不是科幻,就是今天已经在出货的智能眼镜。

**那不是一个更聪明的你,是一个不会遗忘的你。**而此刻,这些设备没有一个共享一份你真正拥有的记忆。

他警告:前沿模型今天已经在构建关于你的索引——你的关系、你的习惯、你的全部内心生活,而且无论你是否选择加入,这个索引都在生成。"唯一的问题是:你是拥有它,还是在租用通向你自身的访问权。"

最后一个想法:拥有记忆不等于据为己有。可以自愿把存储的一部分共享出去——想象一个家庭,每人戴着记录自己一天的眼镜,彼此独立,但汇入一个全家共同拥有的蜂群思维。放大来看:与其让一家公司的超级智能服务数十亿个一模一样的人,你会得到数千个小型私人超级智能,每一个由一段人生、一个家庭、一个团队塑造而成。

但同一机制是双刃剑——记忆可以在有同意时被共享,也可以在无同意时被提取。所以他强调:**它必须从本地开始,共享必须始终是自愿加入,绝不能是默认。**

## 收尾

他把结论留给听众:未来几年,超级智能会出现,这部分基本已成定局;未成定局的是它属于谁——"那才是现在值得去打的仗,趁架构仍未尘埃落定"。今晚回家,别只是试用一个工具——把那个陌生人带回家,给它记忆,然后想象五年后的它:一个永远不会遗忘你的私人心智,没人能关掉,它对你的了解超过以往任何系统,**因为你是唯一一个训练过它的人**。

"那不是一个缩小的超级智能,那是唯一值得想要的那一个。"

## 本集带走

- **"何时"不重要,"归属谁"才重要**:超级智能大概率出现,真正的分野是它跑在别人的数据中心按 token 付费,还是跑在你自己的硬件上。
- **2500 美元就能买下"去年的前沿"**:硬件不是瓶颈;模型本体也不是——缺的是随你复利的那份记忆。
- **租用 AI 有三种失控**:模型可被政府命令下架、可被厂商悄悄降级或淘汰、低价套餐是终将消失的补贴。
- **记住 Carpathy 的比喻**:模型是 CPU,上下文窗口是 RAM,记忆是磁盘——现在几乎所有人的"磁盘"都在别人的云上,一次服务条款更改就能被重塑。
- **记忆 = 写入、检索、遗忘三个动词**:别把一切塞进大文件夹祈祷模型找到;可控的检索(按主题过滤、按时间衰减)才是正解。
- **共享必须是 opt-in**:记忆能带来蜂群思维式的共享智能,同一机制也能被无同意地提取——所以先本地、共享自愿,应该由你决定谁能得到你的连续性。

<div class="pd-sec pd-sec-q">全部金句 <span>16 条</span></div>

> <span class="qz">在一个版本里,超级智能存在于别人的数据中心,你按 token 付费。在另一个版本里,它是你的。</span>  
> *In one, superintelligence lives in someone else's data center, and you pay by the token. In the other, it's yours.*  
> <span class="qm">—— Dylan Couzon · [00:47]</span> ^q1

> <span class="qz">因为一个模型本身只是一个聪明的陌生人。它很强大,但它不是你的。</span>  
> *Because a model on its own is just a brilliant stranger. It's powerful, but it isn't yours.*  
> <span class="qm">—— Dylan Couzon · [02:29]</span> ^q2

> <span class="qz">而那个本应成为"你"的部分,那个本应随岁月复利的部分,也是租的。</span>  
> *And the part that's supposed to become you, the thing that should compound over the years, also rented.*  
> <span class="qm">—— Dylan Couzon · [02:57]</span> ^q3

> <span class="qz">如果我们不解决这个问题,我们任何人在有生之年能触及的最强大的技术,最终将归属于持有租约的人,而不是它本为之而建的人们。</span>  
> *If we don't fix that, the most powerful technology any of us will ever touch ends up owned by whoever holds the lease, not the people it was built for.*  
> <span class="qm">—— Dylan Couzon · [03:04]</span> ^q4

> <span class="qz">拥有推理给你的是自主性,没有人能把模型夺走。但拥有记忆给你的是连续性。</span>  
> *Owning inference gives you autonomy. Nobody can take the model away. But owning memory gives you continuity.*  
> <span class="qm">—— Dylan Couzon · [04:39]</span> ^q5

> <span class="qz">而连续性正是每家大厂都在试图打包起来再卖回给你的东西。</span>  
> *And continuity is exactly what every major lab is trying to package up and sell back to you.*  
> <span class="qm">—— Dylan Couzon · [04:46]</span> ^q6

> <span class="qz">那个空缺才是真正的产品。</span>  
> *That gap is the actual product.*  
> <span class="qm">—— Dylan Couzon · [05:01]</span> ^q7

> <span class="qz">一个起点简单但持续学习你的系统,永远会比一个起点惊艳却把你忘得一干二净的系统感觉更聪明。</span>  
> *A system that starts simple and keeps learning you will always feel smarter than one that starts brilliant but forget everything about you.*  
> <span class="qm">—— Dylan Couzon · [05:04]</span> ^q8

> <span class="qz">模型是 CPU,上下文窗口是内存(RAM),而记忆是磁盘。</span>  
> *The model is the CPU, the context window is the RAM, and the memory is the disk.*  
> <span class="qm">—— Dylan Couzon · [06:46]</span> ^q9

> <span class="qz">而现在,对于地球上几乎每一个 AI 助手来说,磁盘都在别人的数据中心里。</span>  
> *And right now, for almost every AI assistant on Earth, the disk is in someone else's data center.*  
> <span class="qm">—— Dylan Couzon · [07:01]</span> ^q10

> <span class="qz">超级智能的记忆这一面从来都不是难的部分。我们只是把它指向了我们自己。</span>  
> *The memory side of superintelligence was never the hard part. We were just pointing it at ourselves.*  
> <span class="qm">—— Dylan Couzon · [06:16]</span> ^q11

> <span class="qz">一个仅仅还算不错但永远不会忘记你、并在多年间不断复利的模型,在实践中开始显得超人。</span>  
> *A model that's merely good but never forgets you and keeps compounding over the years starts to feel superhuman in practice.*  
> <span class="qm">—— Dylan Couzon · [11:12]</span> ^q12

> <span class="qz">那不是一个更聪明的你。那是一个不会遗忘的你。</span>  
> *It's not a smarter you. It's a you that doesn't forget.*  
> <span class="qm">—— Dylan Couzon · [12:25]</span> ^q13

> <span class="qz">唯一的问题是你是拥有它,还是在租用通向你自身的访问权。</span>  
> *The only question is whether you own it or if you're renting access to yourself.*  
> <span class="qm">—— Dylan Couzon · [12:54]</span> ^q14

> <span class="qz">然后想象五年后的那份记忆——不是一个聊天机器人,而是一个永远不会遗忘你的私人心智,没有任何人能把它关掉,而且它对你的了解超过以往任何系统,因为你是唯一一个训练过它的人。</span>  
> *Then picture that memory five years from now, not a chatbot, a private mind that never forgets you, that nobody can switch off, and that knows you better than any system ever has, because you were the only one who ever trained it.*  
> <span class="qm">—— Dylan Couzon · [14:32]</span> ^q15

> <span class="qz">那不是一个缩小的超级智能。那是唯一值得想要的那一个。</span>  
> *That's not a smaller superintelligence. That's the only one worth wanting.*  
> <span class="qm">—— Dylan Couzon · [14:48]</span> ^q16

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-25-talks-distill-the-llm-don-t-serve-it-search-pe|LLM 重造 DoorDash 搜索与推荐:四个基础组件]]<span class="pd-rz">同概念:嵌入 (embeddings)、记忆 (memory)</span>
- [[2026-10-09-a16z-chips-memory-and-power-pat-gelsinger-uwh|芯片设计变快了，瓶颈却跑到别处去了：Pat Gelsinger 谈 AI 硬件的下一个战场]]<span class="pd-rz">同概念:推理 (inference)、记忆 (memory)</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同概念:记忆 (memory)、推理 (inference)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-27-mad-ai-could-take-over-in-2029--is-it-alread|超级智能为什么危险：Ryan Greenblatt 的推演与解法]]<span class="pd-rz">同概念:推理 (inference)、超级智能 (superintelligence)</span>
- [[2026-09-30-sourcery-imec-says-todays-ai-will-look-ancient-in|GPU 之后是什么：内存短缺、光子学与摩尔定律的尽头]]<span class="pd-rz">同概念:推理 (inference)、记忆 (memory)</span>
- [[2026-07-28-yc-sam-altman-never-a-better-time-to-do-a-s|Sam Altman 谈 AI 时代的创业法则:被全世界当成白痴是最大优势]]<span class="pd-rz">同概念:推理 (inference)、智能体 (agents)</span>

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
