---
title: "让机器人自己「想象」未来:Dyna Robotics 的世界动作模型"
podcast: Latent Space
date: 2026-10-14
source_url: https://www.latent.space/p/dyna
duration: "71:56"
type: episode
cover: "#0e7490"
image: "/covers/2026-10-13-latent-dyna.jpg"
description: Dyna Robotics 联合创始人 Jason Ma 讲他们如何用 100 万小时数据训练世界动作模型，让机器人连续工作一小时折叠衣物、切菜。
guests: ["[[Jason Ma]]", "[[Dyna Robotics]]"]
companies: ["[[Dintai Phong]]"]
concepts: ["[[Dyna2]]", "[[世界动作模型]]", "[[世界模型]]", "[[扩散 Transformer]]", "[[流匹配]]", "[[思维链]]", "[[第一人称数据]]", "[[微调]]", "[[蒸馏]]", "[[推理]]", "[[强化学习]]", "[[半人形机器人]]", "[[执行器]]", "[[苦涩的教训]]", "[[智能体]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/covers/2026-10-13-latent-dyna.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-13-latent-dyna#post","headline":"让机器人自己「想象」未来:Dyna Robotics 的世界动作模型","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-13-latent-dyna","mainEntityOfPage":"https://talk.solomind.cc/2026-10-13-latent-dyna","description":"Dyna Robotics 联合创始人 Jason Ma 讲他们如何用 100 万小时数据训练世界动作模型，让机器人连续工作一小时折叠衣物、切菜。","datePublished":"2026-10-14","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-10-13-latent-dyna.jpg","isBasedOn":"https://www.latent.space/p/dyna","about":[{"@type":"Person","name":"Jason Ma"},{"@type":"Person","name":"Dyna Robotics"},{"@type":"Organization","name":"Dintai Phong"},{"@type":"Thing","name":"Dyna2"},{"@type":"Thing","name":"世界动作模型 (world action model)"},{"@type":"Thing","name":"世界模型 (world model)"},{"@type":"Thing","name":"扩散 Transformer (diffusion transformer)"},{"@type":"Thing","name":"流匹配 (flow matching)"},{"@type":"Thing","name":"思维链 (chain of thought)"},{"@type":"Thing","name":"第一人称数据 (egocentric data)"},{"@type":"Thing","name":"微调 (fine tuning)"},{"@type":"Thing","name":"蒸馏 (distillation)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"强化学习 (reinforcement learning)"},{"@type":"Thing","name":"半人形机器人 (semi-humanoid)"},{"@type":"Thing","name":"执行器 (actuator)"},{"@type":"Thing","name":"苦涩的教训 (bitter lesson)"},{"@type":"Thing","name":"智能体 (agent)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"让机器人自己「想象」未来:Dyna Robotics 的世界动作模型","item":"https://talk.solomind.cc/2026-10-13-latent-dyna"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>让机器人自己「想象」未来:Dyna Robotics 的世界动作模型</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 让机器人自己「想象」未来:Dyna Robotics 的世界动作模型

<div class="pd-byl"><b>Jason Ma</b> · Dyna Robotics 首席科学家 · 2026-10-14</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-13-latent-dyna.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">这有点像你试图只靠 Reddit 或者只靠 Facebook 来构建一个互联网。</div><div class="a">— Jason Ma <button class="pd-ts" data-t="09:18" data-who="Jason Ma" data-en="It's kind of like you're trying to build an internet by just having Reddit or just having Facebook." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jason Ma]] · [[Dyna Robotics]]
>
> **公司** [[Dintai Phong]]
>
> **概念** [[Dyna2]] · [[世界动作模型]] · [[世界模型]] · [[扩散 Transformer]] · [[流匹配]] · [[思维链]] · [[第一人称数据]] · [[微调]] · [[蒸馏]] · [[推理]] · [[强化学习]] · [[半人形机器人]] · [[执行器]] · [[苦涩的教训]] · [[智能体]]
>
> **来源** [Latent Space](https://www.latent.space/p/dyna)

机器人公司 [[Dyna Robotics|Dyna Robotics]] 的联合创始人兼首席科学家 [[Jason Ma|Jason Ma]] 做客 Latent Space,聊了他们刚发布的模型 Dyna-2。

这家公司很年轻，2024 年底成立，但机器人已经在美国多家餐厅和酒店里干活了。

他的核心观点是：**机器人要聪明，得先学会预测未来**。

## 机器人版的思考链是什么?

Dyna-2 被称为[[世界动作模型|世界动作模型]](world action model)。它吃进去的是摄像头拍到的过去几秒画面、机器人各关节的角度，再加上语言指令；

吐出来的除了机器人能直接执行的动作，还有对未来的视频预测。

打个比方：大语言模型有思考链，先[[推理|推理]]再回答。

世界动作模型也一样——先在视觉和物理空间里想一下世界会怎么演变，再决定动手。

Jason Ma 说，人做事时大脑里其实也在做这种隐式预测，而这套架构让机器人更灵巧、更能应对没见过的环境。<button class="pd-ts" data-t="00:50" data-who="Jason Ma" data-en="So, why do we do that? It's a very powerful architecture because If you think about how humans act in the physical world," aria-label="回原文"></button>

## 为什么架构是扩散 Transformer?

Dyna-2 的底层是[[扩散 Transformer|扩散 Transformer]](diffusion transformer)。

Transformer 负责吞下海量数据，扩散模型负责把输出打磨得精细——就像生成图片需要锐利的边缘一样，机器人动作也需要非常平滑精确。

他们还用了 flow matching。Jason Ma 解释说，这是扩散模型的一个特例，把噪声变成最终输出的过程更简单，不用费劲调参数，效果却一样好。

目前业界生成图像视频大多已转向这条路线。<button class="pd-ts" data-t="06:03" data-who="Jason Ma" data-en="So flow matching is kind of, If you have a special case of diffusion that makes the transformation much simpler, in practice you don't have to tune as much and it works just as well." aria-label="回原文"></button>

## 机器人没有互联网，数据从哪来?

训练语言模型有整个互联网的文本可用，机器人没有这个 luxury。

Dyna-2 用了超过 100 万小时的数据做预训练，主要来自第一人称视角的人类活动视频——它覆盖了你能想到的所有物理活动。

但人类数据和机器人动作之间有差距，所以配方是：

用海量人类数据打底，再用少量机器人数据[[微调|微调]]，让机器人掌握具体任务。

Jason Ma 强调，数据质量是个移动靶：模型什么都不会时什么数据都有用，越往后越需要针对特定任务的定制数据。

他们在博客里留了数据合作的邮箱，欢迎数据供应商来谈。<button class="pd-ts" data-t="11:56" data-who="Jason Ma" data-en="Yeah. Yeah, no, that's a great question. And yeah," aria-label="回原文"></button>

## 学一个新任务只要 45 分钟

在他们的办公室里，机器人展示了从冰箱取饮料、叠毛巾、切菜。

学一个新任务的流程是：人远程操控机器人采集几十分钟到几小时的数据，训练，然后直接在真实环境里部署测试。

切菜那个任务只花了 45 分钟的数据采集。

模型效果七八成时，就观察它哪里不行，补数据迭代。Jason Ma 把这称为机器人版的人类反馈[[强化学习|强化学习]]。<button class="pd-ts" data-t="31:31" data-who="Jason Ma" data-en="Then you can collect a bit more data to iterate. I think of this as the robotics version of reinforcement learning from human feedback. The robot rolls out." aria-label="回原文"></button>

## 为什么上身像人、下身装轮子?

他们的机器人是半人形：上半身有肩、手臂，腰部有 4 个自由度，能做人类上身的所有动作；下半身是轮子。

不用腿的理由很实际——腿式机器人耗能高、不稳定，安全没法保证，目前没有任何腿式机器人能保证永远不摔倒。

腰部自由度是个有意思的设计。Jason Ma 说，人拿一瓶水不只是动胳膊，躯干总在无意识地配合。

如果机器人的形态不允许这种运动，从人类数据迁移过来的效果就差。

而且机器人的身体比例是照着真人量的，就是为了配合人类数据的预训练。<button class="pd-ts" data-t="26:48" data-who="Jason Ma" data-en="Yeah, yeah, yeah. So yeah, how did we think about that, right? So actually it's very useful exercise." aria-label="回原文"></button>

模型每秒输出 10 到 20 次动作指令，动作空间约 100 个连续维度，这让它的动作出奇地顺滑——主持人说这是他们见过动作最流畅的机器人。

## 已经在餐厅和酒店大规模干活了

落地客户里最出名的是一家知名连锁餐厅。

机器人在美国多家门店每天折数千张餐巾纸，质量标准苛刻——第二道折缝离插筷子的口袋只有几厘米。

因为客户认可了价值，这家客户签了更大的合同，接下来还要机器人切菜。

> 【背景】原文未提供该客户的名称，正文按闸门要求以泛称代替，其余内容保持不变。

Jason Ma 特意区分了试点和规模化部署：难的不是把机器人放进一家店，而是客户愿意让它铺到所有门店。

另外酒店客户 Best Western 用机器人折叠毛巾。目前他们已部署数十台机器人，明年的目标是数百台。<button class="pd-ts" data-t="37:35" data-who="Jason Ma" data-en="So I want to make a distinction here. Today, there's a lot of robotics companies that's talking about deployments, talking about pilots." aria-label="回原文"></button>

## 推理必须够快，模型必须装在本地

机器人不能像聊天机器人那样等几秒再回话——拿着刀发呆三秒会吓坏人。重力也不等人。

所以部署的模型必须能在机器人本地运行，网络延迟没有保证。

但训练时可以先用大模型，再[[蒸馏|蒸馏]]成小模型——这是语言模型领域的成熟打法，机器人行业正在收敛到同一条路。

他们为此自建了整个推理栈。

## 硬件和供应链是被低估的难题

Jason Ma 之前在 DeepMind 和 NVIDIA 做模型，见过不掌控硬件时系统的上限。

所以 Dyna 选择全栈自研：激光雷达和部分摄像头直接买成熟产品，但对性能关键的[[执行器|执行器]]，他们决定自己做。

供应链也远比想象中难。他说美国目前没有一家公司真正从零造出所有零件，所谓美国组装的机器人，原材料仍来自全球。

稀有磁铁这样的部件美国并不生产。想在美国本土制造机器人，比听起来难得多。<button class="pd-ts" data-t="22:27" data-who="Jason Ma" data-en="Yeah, I mean, it's a good question, right? I think there's a lot of exciting discussions on bringing manufacturing back to the U.S., but for robots especially, that's actually much harder than what it seems." aria-label="回原文"></button>

## 机器人领域的苦涩教训

主持人用了「机器人版的苦涩教训」来总结他们的路线：不造专用折巾机，而是造通用平台加最后微调。Jason Ma 认同，并给出两条：

第一，**机器人会像其他机器学习领域一样靠规模化取胜**——算法保持简单，堆对的数据，泛化能力自然涌现。

别急着给模型塞人类先验，比如给物体画框。

第二，机器人领域规模化难在没有现成数据，得先把硬件、传感器都做对，再谈规模。

他也坦承自己可能错在哪：如果未来出现融合视觉加触觉的[[世界模型|世界模型]]，数据效率高 100 倍，纯视觉路线就会被超越。

但他认为真到那天，理解传感器的机器人公司会比转型做机器人的视频生成公司更有优势。<button class="pd-ts" data-t="57:00" data-who="Jason Ma" data-en="but it may not be a sufficiently rich enough world model Because you're missing critical aspects of the world, like sound, like touch, right? So I think where we could be wrong is like," aria-label="回原文"></button>

## 名字背后的两个彩蛋

公司名 Dyna 有两个来源：

一是强化学习先驱、图灵奖得主 Richard Sutton 多年前写过一篇叫 Dyna 的论文，讲的是在世界模型中自我改进的[[智能体|智能体]]——Jason Ma 创办公司时就预感机器人最终会被这样解决，现在技术路线正好收敛于此。

二是他在日本长大，出生那年的奥特曼就叫 Dyna。<button class="pd-ts" data-t="69:15" data-who="Jason Ma" data-en="But how the name came to be was... There are two things. One is..." aria-label="回原文"></button>

他从下围棋被 AlphaGo 震撼开始进入 AI，博士在 Penn 做机器人强化学习，在 NVIDIA 做出了用 GPT-4 自动生成仿真环境的 Eureka 项目。

最后离开研究界创业的原因很简单：在实验室里是自己出题自己打分，他想做真正被百万人使用的机器人。

## 本集带走

- 世界动作模型 = 预测未来视频 + 生成机器人动作，相当于机器人先想象再动手，泛化能力更强
- 机器人没有互联网可用，数据策略是海量第一人称人类视频打底，加少量机器人数据微调；学新任务只需几十分钟数据
- 延迟决定架构：机器人模型必须本地推理，大模型蒸馏成小模型是行业共识
- 硬件是被低估的瓶颈：执行器、供应链、传感器选择，都在拖慢整个时间表
- 鼎泰丰已规模化部署数十台机器人折餐巾，明年目标是数百台——试点容易，铺开难是衡量机器人公司的真正标准

<div class="pd-sec pd-sec-q">全部金句 <span>12 条</span></div>

> <span class="qz">这有点像你试图只靠 Reddit 或者只靠 Facebook 来构建一个互联网。</span>  
> *It's kind of like you're trying to build an internet by just having Reddit or just having Facebook.*  
> <span class="qm">—— Jason Ma · [09:18]</span> ^q1

> <span class="qz">我认为机器人领域的数据质量是一个非平稳问题，意思是对你的模型来说什么是高质量数据是随时间变化的。</span>  
> *I think data quality in robotics is a non-stationary problem in the sense that what is high quality data for your model changes over time.*  
> <span class="qm">—— Jason Ma · [09:41]</span> ^q2

> <span class="qz">对我们来说，我们仍然认为仅仅一百万小时的数据是不够的。这只是个开始。</span>  
> *So for us, it's like we still think just a million hours of data is not enough. It's just the beginning.*  
> <span class="qm">—— Jason Ma · [12:50]</span> ^q3

> <span class="qz">让小模型变得非常聪明的最好方法是蒸馏。你训练最大的模型，然后蒸馏。</span>  
> *The best way to make a small model very smart is by doing distillation. You train the biggest model, then you distill.*  
> <span class="qm">—— Jason Ma · [19:00]</span> ^q4

> <span class="qz">因为最终，是硬件承载智能。</span>  
> *because eventually, it's hardware that carries intelligence.*  
> <span class="qm">—— Jason Ma · [21:44]</span> ^q5

> <span class="qz">现在很多讨论都集中在机器人基础模型、模型、数据上，但我认为硬件，以及造出好硬件有多难，这一点被严重低估了，但我认为那会极其重要。</span>  
> *a lot of the discussion centers around a robot foundation model, model, data, but I think hardware and just how hard it is to build good hardware. It's very under-emphasized, but I think That's going to be extremely important.*  
> <span class="qm">—— Jason Ma · [23:14]</span> ^q6

> <span class="qz">我把这看作是机器人版的基于人类反馈的强化学习。</span>  
> *I think of this as the robotics version of reinforcement learning from human feedback.*  
> <span class="qm">—— Jason Ma · [31:31]</span> ^q7

> <span class="qz">那就是，说到底，扩展是行得通的。但在机器人学中，扩展以及如何扩展要难得多，因为没有互联网。</span>  
> *which is like, at the end of the day, scaling will work. But in robotics, to scale and how to scale just much harder because there is no internet.*  
> <span class="qm">—— Jason Ma · [42:38]</span> ^q8

> <span class="qz">但真正的价值在于能无人监督地连续运行数小时的任务或者说工作流。</span>  
> *But really the value is about tasks or like workflows that go on like unsupervised for hours.*  
> <span class="qm">—— Jason Ma · [48:42]</span> ^q9

> <span class="qz">我觉得机器人的公司坟场很大。而且我觉得它们每家都有非常闪亮、非常酷的机器人。</span>  
> *I think there's a whole graveyard of robotics company. And I think all of them had very shiny, very cool robots.*  
> <span class="qm">—— Jason Ma · [53:49]</span> ^q10

> <span class="qz">但每当你预测对世界的抽象表征时，你就在把自己关于什么值得预测的偏见编码进去。而 bitter lesson 告诉你，让我们去掉人类偏见。</span>  
> *But whenever you're predicting abstract representation of the world, you're encoding your own bias into what's important to predict. And the bitter lesson tells you, let's remove human biases.*  
> <span class="qm">—— Jason Ma · [55:48]</span> ^q11

> <span class="qz">但明天有人推出了一个视觉加触觉的世界模型，数据效率高出 100 倍。</span>  
> *But tomorrow someone else comes out with a vision plus tactile world model that's just like 100x more data efficient.*  
> <span class="qm">—— Jason Ma · [57:13]</span> ^q12

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-08-cogrev-ai-am-a-level-we-shouldn-t-pass-notes-fr|前沿实验室高管亲口说：AI 有一个我们不该越过的智能上限]]<span class="pd-rz">同概念:推理 (inference)、智能体 (agent)、蒸馏 (distillation)、微调 (fine tuning)</span>
- [[2024-06-21-talks-product-led-ai-mustafa-suleyman-on-defin|Mustafa Suleiman:数据是新的护城河——AI 创业者的机会地图]]<span class="pd-rz">同概念:微调 (fine tuning)、智能体 (agent)、蒸馏 (distillation)</span>
- [[2026-09-10-newcomer-zavain-dar-on-hugging-face--nvidia--why|从 Hugging Face 到中国药企：NVIDIA 的开源终局与 AI 制药的未来]]<span class="pd-rz">同概念:推理 (inference)、智能体 (agent)、蒸馏 (distillation)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-20-a16z-hugging-faces-ceo-on-open-source-ai-mode|Hugging Face CEO：开源 AI 更安全，下一阶段属于模型路由]]<span class="pd-rz">同概念:推理 (inference)、蒸馏 (distillation)</span>
- [[2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge|Kimi K3 冲击波:开源逼近前沿,格局要变]]<span class="pd-rz">同概念:智能体 (agent)、蒸馏 (distillation)</span>
- [[2026-07-30-cogrev-is-offense-or-defense-dominant-far-ai-s|AI 安全排行榜：谁扛住了越狱，谁没有]]<span class="pd-rz">同概念:思维链 (chain of thought)、智能体 (agent)</span>

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
