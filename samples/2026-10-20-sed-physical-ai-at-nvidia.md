---
title: "机器人脑子里装的是什么:NVIDIA 工程师讲透物理 AI"
podcast: Software Engineering Daily
date: 2026-10-21
source_url: undefined
duration: "56:39"
type: episode
cover: "#64748b"
description: NVIDIA 机器人生态负责人 Amit Goel 讲解物理 AI 如何看世界、做规划、控制马达，以及普通开发者如何入门。
host: "[[Matt Merrill]]"
cohosts: ["[[Amit Goel]]"]
companies: ["[[NVIDIA]]", "[[Hugging Face]]", "[[Boston Dynamics]]", "[[1X]]"]
concepts: ["[[物理 AI]]", "[[世界模型]]", "[[模仿学习]]", "[[强化学习]]", "[[推理模型]]", "[[护栏]]", "[[真实到仿真]]", "[[Cosmos]]", "[[Jetson]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-20-sed-physical-ai-at-nvidia#post","headline":"机器人脑子里装的是什么:NVIDIA 工程师讲透物理 AI","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-20-sed-physical-ai-at-nvidia","mainEntityOfPage":"https://talk.solomind.cc/2026-10-20-sed-physical-ai-at-nvidia","description":"NVIDIA 机器人生态负责人 Amit Goel 讲解物理 AI 如何看世界、做规划、控制马达，以及普通开发者如何入门。","datePublished":"2026-10-21","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Matt Merrill"},{"@type":"Person","name":"Amit Goel"},{"@type":"Organization","name":"NVIDIA"},{"@type":"Organization","name":"Hugging Face"},{"@type":"Organization","name":"Boston Dynamics"},{"@type":"Organization","name":"1X"},{"@type":"Thing","name":"物理 AI (physical AI)"},{"@type":"Thing","name":"世界模型 (world model)"},{"@type":"Thing","name":"模仿学习 (imitation learning)"},{"@type":"Thing","name":"强化学习 (reinforcement learning)"},{"@type":"Thing","name":"推理模型 (reasoning model)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"真实到仿真 (real-to-sim)"},{"@type":"Thing","name":"Cosmos"},{"@type":"Thing","name":"Jetson"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"机器人脑子里装的是什么:NVIDIA 工程师讲透物理 AI","item":"https://talk.solomind.cc/2026-10-20-sed-physical-ai-at-nvidia"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>机器人脑子里装的是什么:NVIDIA 工程师讲透物理 AI</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 机器人脑子里装的是什么:NVIDIA 工程师讲透物理 AI

<div class="pd-byl"><b>Amit Goel</b> · NVIDIA 机器人生态负责人 · 2026-10-21</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-20-sed-physical-ai-at-nvidia.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但物理 AI 实际上需要三台计算机。</div><div class="a">— Amit Goel <button class="pd-ts" data-t="24:59" data-who="Amit Goel" data-en="But physical AI requires actually three computers." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Matt Merrill]] · [[Amit Goel]]
>
> **公司** [[NVIDIA]] · [[Hugging Face]] · [[Boston Dynamics]] · [[1X]]
>
> **概念** [[物理 AI]] · [[世界模型]] · [[模仿学习]] · [[强化学习]] · [[推理模型]] · [[护栏]] · [[真实到仿真]] · [[Cosmos]] · [[Jetson]]

过去几年，AI 改变的主要是数字世界，尤其是软件行业。

[[Amit Goel|Amit Goel]] 认为，AI 对物理世界的长期影响可能更深远——让汽车自己开、让工厂自己跑、让机器人走进仓库和家庭。

他在 [[NVIDIA|NVIDIA]] 工作了 15 年，现在负责机器人生态和边缘 AI 产品。在 Software Engineering Daily 这期节目里，他从头讲清楚了[[物理 AI|物理 AI]] 到底是怎么运转的。

## 物理 AI 和大语言模型差在哪?

区别一句话：**大语言模型处理的是比特，物理 AI 处理的是原子**。<button class="pd-ts" data-t="03:18" data-who="Amit Goel" data-en="Yeah, the big difference between LLMs or in general digital AI and physical AI is that You're working with atoms. And what that means is you are dealing with sensors, you're looking at spatial information, 3D information, you're looking at videos, you're understanding dynamics of the world." aria-label="回原文"></button>

物理 AI 的输入是传感器、三维空间信息、视频，输出的是要在真实世界里执行的动作。

其实它早就存在：Nest 温控器、根据路况调整的红绿灯、旧金山街上跑的 Waymo 无人车，都是某种形式的物理 AI。

以前的物理 AI 都是为一个场景专门做的。

现在变化在于，就像大语言模型把情感分析、翻译、摘要统一成了一个通用模型，物理 AI 也在走向一个模型理解多种任务的时代。

## 世界模型：先预测，再行动

核心概念叫[[世界模型|世界模型]]。输入是当前世界的状态——摄像头画面、电机数据、语音指令、文字提示；输出是对未来的预测。<button class="pd-ts" data-t="06:13" data-who="Amit Goel" data-en="Yeah, so the way to think about the world model is in the context of what are the inputs and what are the outputs, right? So for a world model, the inputs are observations of the current state of the world." aria-label="回原文"></button>

比如一辆车可以问：我现在是这个速度，周围是这个情况，==接下来 5 秒世界会变成什么样==?

机器人可以问：我要拿起那个东西，该往左还是往右，要不要弯腰?

世界模型还能反过来用：我打算做这个动作，先告诉我做了之后世界会怎样——这样就能提前判断这个动作对不对。

视频数据量极大，15 分钟视频就是好几个吉字节，所以世界模型处理的输入比文本模型大好几个数量级。<button class="pd-ts" data-t="19:19" data-who="Amit Goel" data-en="For over 10 years, they've been embedding senior Latin American engineers directly into US engineering teams in under 10 days at up to 40% less than local hiring." aria-label="回原文"></button>

## 机器人脑子里的 100 毫秒

==从摄像头拍到画面到电机执行命令，中间发生了什么==?

先把所有传感器数据同步——相机这一帧对应着当时每个电机的状态、姿态传感器的读数，融合在一起，连同历史帧一起输入模型。

然后是两个环节。第一步是规划：一个自回归模型根据当前观察和任务目标，推理下一步该干什么。第二步是生成动作：

一台机器人可能要同时控制 30 到 40 个电机，而且电流是连续信号，必须每毫秒都输出，这和逐字生成文本完全是两码事。<button class="pd-ts" data-t="14:51" data-who="Amit Goel" data-en="A sequence of text versus the current for 50 motors that you have to send it at every millisecond. So the frequency at which the output must be generated is very different for a robotic and a physical AI model." aria-label="回原文"></button>

所以是两个模型配合：规划的那个跑得慢一点，控制电机的那一个跑得飞快。

[[Cosmos|Cosmos]] 3 就采用了双塔设计——一个推理塔、一个动作塔，两个模型共享同一个潜在空间，像两个进程共享内存一样，通信带宽极高，虽然工作频率不同，却始终看着同一份上下文。<button class="pd-ts" data-t="18:11" data-who="Amit Goel" data-en="The same thing we are doing at the model level now, right? Where in the latent space, we can share the information and the context between these two models. So they can operate, although they're operating in different frequencies, they can share the same context." aria-label="回原文"></button>

打个比方：一个是画图纸的建筑师，一个是照图施工的执行者。

## 训练物理 AI 需要三台计算机

做大语言模型的开发者习惯了一切都在一个 GPU 集群上完成。物理 AI 不行。

**它需要三台不同的计算机**：一台训练模型；

一台跑物理模拟器，用来生成数据或做[[强化学习|强化学习]]——这个模拟器最好用带光线追踪核心的 GPU,才能仿真传感器；

第三台是部署用的，藏在机器人身体里的小计算机。<button class="pd-ts" data-t="25:03" data-who="Amit Goel" data-en="But physical AI requires actually three computers. You need a computer for training the model, you need a computer where you do simulation either to create data or to do reinforcement learning post-training." aria-label="回原文"></button>

数据管线也得重做。

视频、电机指令、文字标注要并行读取，原来为文本训练搭的管线根本喂不饱 GPU,于是 NVIDIA 做了一个叫 Curator 的工具来处理海量视频。<button class="pd-ts" data-t="23:23" data-who="Amit Goel" data-en="So that's on the data side of things. On the hardware side of things, when it comes to training these models, as you know with LLMs also, there are multiple phases, right?" aria-label="回原文"></button>

NVIDIA 研究团队的 Jim Fan 常开玩笑说，他很羡慕做大语言模型的朋友——人家的问题是 GPU 不够，他的问题是传感器数据丢一半、同步没做、线缆动不动就断。<button class="pd-ts" data-t="26:01" data-who="Amit Goel" data-en="He often jokes like, I'm always envious of my friends in the LLM world. Their problem is I don't have more GPUs. And my problem is like, okay, first of all, the data that I got, like half of the sensor data is missing, the synchronization is not there." aria-label="回原文"></button>

## 机器人怎么学新任务？看人做

一条路是[[模仿学习|模仿学习]]：

派很多人在不同环境里做同一个任务，收集数据，让模型见过足够多的变化，真实世界就落在它见过的分布里。

但真实世界的分布是无限的，总会有没见过的情况。

所以第二条路是配一个[[推理模型|推理模型]]——它从互联网上的文本和视频里学到常识，遇到陌生情况，能判断这最接近哪类已知场景，再决定怎么办。<button class="pd-ts" data-t="27:28" data-who="Amit Goel" data-en="So one way to do this is you have a lot of people collecting data in different environments, in different factories, bringing the data of doing the tasks in different environments and training the model so that it now has seen enough distribution so that the real world falls somewhere within that distribution." aria-label="回原文"></button>

机器人本是为工厂设计的，训练时却要喂它家里、户外、各种地方的数据，这样它才能泛化——不然工厂里来了一只猫它就懵了。

波士顿街上有背包客背着摄像头和激光雷达到处走，那是在采集真实世界，把真实场景转成模拟环境(所谓 real-to-sim),再在里面做光照变化、道路变窄等增强，用来微调模型。<button class="pd-ts" data-t="31:40" data-who="Amit Goel" data-en="And what they are doing is capturing the real world and passing it into a model that can create a 3D representation of that world, what we like to call real-to-sim." aria-label="回原文"></button>

## 文本模型会胡说，机器人胡说怎么办?

文本模型幻觉顶多让人笑，机器人幻觉可能伤人。对策有好几层。

可以在模拟环境里大量制造极端场景，给机器人的策略打分，看它出不出格。

可以在规划那个脑子上加[[护栏|护栏]]，跟给大语言模型加约束一样。

还可以在旁边放一个独立监视的 AI,只观察不行动，发现不对就接管。<button class="pd-ts" data-t="35:13" data-who="Amit Goel" data-en="And the third thing that we are also thinking about is when it comes to safety and actions is you have to have some level of redundancy, some level of external element that is observing and verifying." aria-label="回原文"></button>

最有意思的是反事实能力：

世界模型不是只会模仿正确做法，而是能在行动前推演出 10 种不同未来，逐一打分，选最安全、最接近目标的那个执行。

NVIDIA 自动驾驶团队发布的推理模型 Alpamayo 就有这个能力。<button class="pd-ts" data-t="36:48" data-who="Amit Goel" data-en="They can simulate, if you look at the work that we published recently with our self-driving car team called Alpamayo, it's a reasoning model. And within that, it can reason, it can predict 10 different futures and choose one of them, right?" aria-label="回原文"></button>

不同地方的可接受行为也不同——波士顿和湾区、更别提别的国家的驾驶习惯，开放模型的好处就是可以按本地规矩微调。

## 花一千美元，周末就能上手

Cosmos 3 Edge 是个 40 亿参数的世界模型，能塞进机器人当大脑，实时跑在一台护照大小的 [[Jetson|Jetson]] Tor 计算机上，算力有 2000 teraops。

[[1X|1X]] 和 [[Boston Dynamics|Boston Dynamics]] 的人形机器人都由这台小电脑驱动。<button class="pd-ts" data-t="44:05" data-who="Amit Goel" data-en="It can run real-time on a Jetson Tor, which is, you know, a computer which is the size of a passport that has 2,000 teraops of compute. Did you say the size of a passport?" aria-label="回原文"></button>

> 【背景】原文转写为「Jetson Tor」，应指 NVIDIA 的 Jetson AGX Thor——护照大小、算力 2000 teraops 的机器人计算机。

==普通人怎么入门==？先用笔记本电脑(带 4090 显卡)下载模拟器和现成模型，在模拟里玩起来。

然后花几百美元买一只机械臂——SO101 是创客圈最流行的型号，可以 3D 打印，也可以买套件自己装。

遥控它采集数据、传到 [[Hugging Face|Hugging Face]]、训练策略、部署到机械臂上。预算 1000 美元、花几天时间，就能有自己的第一个物理 AI 模型动起来。<button class="pd-ts" data-t="47:04" data-who="Amit Goel" data-en="Format it, publish it to Hugging Face, train a policy, convert it, deploy it onto the small Jetson, and let the robot do its thing. And all of that, I would say, for you to get started, if you have a good computer, a thousand dollars budget, take a couple of days, and you can have your first physical AI model doing things." aria-label="回原文"></button>

挑硬件的诀窍：先选模型，再找和这个模型配套测试过的硬件，别自己去做适配。

## 五年之后：不再想机器人的身体，而是想它能干什么

Amit Goel 的两个预测：一，**机器人会从单一用途走向多功能**，提到机器人时你想的不再是那个身体，而是那件能帮你干一堆事的东西。

二，编程机器人不再需要博士学位——演示一遍，或者遥控它做一两次，它就会了。今天听起来像魔法，五年后可能就是日常。<button class="pd-ts" data-t="51:00" data-who="Amit Goel" data-en="You don't think about a brain that can do 10 things for you. You think about the body, not the brain. I think in five years from now, I expect that we will have robotic embodiments that are going to be capable of doing multiple things." aria-label="回原文"></button>

> 【背景】NVIDIA 是生产 GPU 和 AI 计算硬件的公司；Hugging Face 是开放的机器学习模型分享平台;1X、Boston Dynamics 是做机器人的公司；Waymo 是 Alphabet 旗下的自动驾驶公司。

## 本集带走

- 物理 AI 和数字 AI 的本质区别：输入输出都是真实世界的原子，不是文本比特，数据量大几个数量级，且必须在设备上实时响应。
- 世界模型是物理 AI 的核心：它能预测未来、规划路径、做反事实推演——行动前先在脑内模拟 10 种结果再选最安全的。
- 双塔架构让机器人同时会想和会动：低频的推理塔做规划，高频的动作塔控制多个电机，两者共享潜在空间，像两个进程共享内存。
- 训练物理 AI 需要 3 台计算机：训练集群、物理模拟器、机器人身上的小型边缘计算机，这是和大语言模型完全不同的基础设施。
- 入门门槛已大幅降低：1000 美元预算、一台好电脑加一只几百美元的开源机械臂，几天就能跑起第一个物理 AI 模型。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">但物理 AI 实际上需要三台计算机。</span>  
> *But physical AI requires actually three computers.*  
> <span class="qm">—— Amit Goel · [24:59]</span> ^q1

> <span class="qz">无论你在真实世界收集多少数据，真实世界的分布是无限的。</span>  
> *However much data you collect in the real world, the real world has an infinite distribution.*  
> <span class="qm">—— Amit Goel · [27:57]</span> ^q2

> <span class="qz">这就是世界模型最大的价值所在，你知道，它们可以做反事实推演。</span>  
> *That's the biggest value of the world models is, you know, they can do counterfactuals.*  
> <span class="qm">—— Amit Goel · [36:32]</span> ^q3

> <span class="qz">只要更多能接触到这些模型的人怀着正确的意图，他们在数量上就会超过怀着不良意图接触到这项技术的人。</span>  
> *As long as we have more people who have access to them with the right intention, they will outnumber the people who will have access to this with a bad intention.*  
> <span class="qm">—— Amit Goel · [38:58]</span> ^q4

> <span class="qz">我认为如果这些模型是开放的，你可以对它们进行内省，也可以对它们进行引导。</span>  
> *I think if these models are open, you can introspect them and you can steer them.*  
> <span class="qm">—— Amit Goel · [41:13]</span> ^q5

> <span class="qz">它可以在 Jetson Tor 上实时运行，那是一台护照大小的计算机，拥有 2000 teraops 的算力。</span>  
> *It can run real-time on a Jetson Tor, which is, you know, a computer which is the size of a passport that has 2,000 teraops of compute.*  
> <span class="qm">—— Amit Goel · [43:55]</span> ^q6

> <span class="qz">实体形态只是一个附属品。</span>  
> *The embodiment is just an artifact.*  
> <span class="qm">—— Amit Goel · [51:24]</span> ^q7
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
