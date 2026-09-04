---
title: "Atlas:让 AI 预测世界的下一个视角"
podcast: The a16z Show
date: 2026-09-04
source_url: undefined
duration: "44:24"
type: episode
cover: "#64748b"
description: "World Labs 联合创始人李飞飞、Justin Johnson、Ben Mildenhall 详解新世界模型 Atlas:如何用「新视角预测」统一 3D 重建与生成,以及它对机器人与空间智能的意义。"
host: "[[Justin Johnson]]"
cohosts: ["[[Martin Casado]]"]
companies: ["[[World Labs]]"]
concepts: ["[[Atlas]]", "[[空间智能]]", "[[新视角预测]]", "[[世界模型]]", "[[3D 重建]]", "[[缩放定律]]", "[[Marble]]", "[[Nerf]]", "[[高斯泼溅]]", "[[相机位姿]]", "[[真实到仿真]]", "[[机器人策略]]", "[[AI 完备性]]", "[[神经仿真器]]", "[[动态]]"]
category: 创业与行业
tags:
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-04-a16z-fei-fei-li-the-race-to-build-world-model#post","headline":"Atlas:让 AI 预测世界的下一个视角","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-04-a16z-fei-fei-li-the-race-to-build-world-model","mainEntityOfPage":"https://talk.solomind.cc/2026-09-04-a16z-fei-fei-li-the-race-to-build-world-model","description":"World Labs 联合创始人李飞飞、Justin Johnson、Ben Mildenhall 详解新世界模型 Atlas:如何用「新视角预测」统一 3D 重建与生成,以及它对机器人与空间智能的意义。","datePublished":"2026-09-04","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Justin Johnson"},{"@type":"Person","name":"Martin Casado"},{"@type":"Organization","name":"World Labs"},{"@type":"Thing","name":"Atlas"},{"@type":"Thing","name":"空间智能 (spatial intelligence)"},{"@type":"Thing","name":"新视角预测 (new view prediction)"},{"@type":"Thing","name":"世界模型 (world model)"},{"@type":"Thing","name":"3D 重建 (3D reconstruction)"},{"@type":"Thing","name":"缩放定律 (scaling law)"},{"@type":"Thing","name":"Marble"},{"@type":"Thing","name":"Nerf"},{"@type":"Thing","name":"高斯泼溅 (Gaussian splats)"},{"@type":"Thing","name":"相机位姿 (camera pose)"},{"@type":"Thing","name":"真实到仿真 (real to sim)"},{"@type":"Thing","name":"机器人策略 (robotics policy)"},{"@type":"Thing","name":"AI 完备性 (AI completeness)"},{"@type":"Thing","name":"神经仿真器 (neural simulators)"},{"@type":"Thing","name":"动态 (dynamics)"}],"articleSection":"创业与行业"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"创业与行业","item":"https://talk.solomind.cc/tags/创业与行业"},{"@type":"ListItem","position":3,"name":"Atlas:让 AI 预测世界的下一个视角","item":"https://talk.solomind.cc/2026-09-04-a16z-fei-fei-li-the-race-to-build-world-model"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Atlas:让 AI 预测世界的下一个视角</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Atlas:让 AI 预测世界的下一个视角

<div class="pd-byl"><b>Justin Johnson</b> · World Labs 联合创始人 · 2026-09-04</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-04-a16z-fei-fei-li-the-race-to-build-world-model.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们说的是大约 50 倍、100 倍的削减。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="00:21" data-who="嘉宾" data-en="We're saying like 50, 100x reduction." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Justin Johnson]] · [[Martin Casado]]
>
> **公司** [[World Labs]]
>
> **概念** [[Atlas]] · [[空间智能]] · [[新视角预测]] · [[世界模型]] · [[3D 重建]] · [[缩放定律]] · [[Marble]] · [[Nerf]] · [[高斯泼溅]] · [[相机位姿]] · [[真实到仿真]] · [[机器人策略]] · [[AI 完备性]] · [[神经仿真器]] · [[动态]]

一家公司发布了新模型,只靠三台普通手机拍的视频,就能复现《黑客帝国》里需要数百台相机、绿幕和昂贵标定才能拍出的「子弹时间」镜头——时间冻结、相机绕着飞。这一集是 a16z 的 [[Martin Casado|Martin Casado]] 与 [[World Labs|World Labs]] 的三位联合创始人对谈:李飞飞([[空间智能|空间智能]]概念的提出者)、[[Justin Johnson|Justin Johnson]] 和 Ben Mildenhall([[Nerf|Nerf]] 的创造者,从图像做 [[3D 重建|3D 重建]]的顶尖学者),聊他们刚发布的下一代[[世界模型|世界模型]] [[Atlas|Atlas]],以及一个更大的假设:下一个 token 预测造就了语言模型,那「[[新视角预测|新视角预测]]」能不能成为空间智能的等价物?

## Atlas 是什么:输入几个视角,预测任意新视角

Atlas 是他们的新世界模型,有三个基本能力:生成、重建、模拟。最核心的设计是一条:它做的是「新视角预测」——给定一个场景的若干视角或文字描述,这些输入进入一个「空间上下文」,隐式地描述出你想谈论的那个世界;然后你可以把一台虚拟相机指向空间和时间中的任意一点,Atlas 会理解那个世界从这个位置看起来应该是什么样。

与外面众多自称「世界模型」的视频模型的关键区别在于:Atlas 里放入的每一帧都带有空间锚定的含义——每张图都关联一个三维[[相机位姿|相机位姿]](相机在 3D 空间中的位置与朝向)。这意味着重建可以达到极高精度:给它房间四个角落的视角,它会精确复刻房间里的一切,而不是去猜另一个角落里有什么、事物之间是什么关系。反过来,你也可以拿两张来自不同 AI 生成或真实地点的照片,精确定位布景,执导出完全受控的穿越镜头——这和视频模型那种「老虎机式」反复重碰的文本控制完全不同。

## 第一次把生成与重建放进同一个模型

历史上,重建和生成是计算机视觉里两个独立的子领域,各有专门的任务和模型。李飞飞强调,这是第一次实现「像素生成与像素重建的统一」——计算机视觉领域存在超过半个世纪,博士论文 countless 篇写在重建或新视角合成上,学术会议也分成生成、识别、重建几条赛道;Atlas 通过锚定在视点与视点估计上,把这两件事优雅地统一了。

为了做到这一点,架构上有几个关键改动:模型从预训练起就是原生多模态的——文本、图像、视频,而且把相机位姿当作模型的原生输入,还把 3D(以深度图的形式,即记录每个位置空间结构的图)作为原生模态,这在预训练阶段之前没人做过。

## 稀疏重建:从 300 张照片降到 3 张

Ben 解释了为什么这是一次量级飞跃。传统「稠密重建」更接近科学或医学成像:想出现在重建里的每一样东西,都至少要有它的三四个视角。

哪怕是麦克风底下、桌底、植物叶子之间这种位置也得覆盖——训练有素的人扫一个房间要几分钟,普通消费者第一次可能要一小时,扫多房间环境有人花过两小时;一个房间通常要拍两三百张照片。而 Atlas 要做的是把它降到大概三张——50 到 100 倍的缩减。

到了这个规模,整个权衡被颠覆:你可以回头用已有的图像、网上找的素材、随手拍的旧视频,让那些原本绝不会被视为「可重建」的素材以 3D 活过来。Ben 把自己以前从没成功过的旧采集扔进系统,第一次看到了重建;或者把 2000 张图的多房间采集砍到三四十个输入,飞越效果看起来基本一样。

为什么少了视角也能补上?李飞飞举了个被低估的演示:斯坦福四方院,只用 3 到 25 张全部站在地面拍摄的照片重建,但展示时是从空中视角飞越——你看到的一切都是生成的,却遵循重建的法则。

逻辑在于:经典重建需要多视角做三角测量,而任何输入视角里没拍到的像素,在重建里就是一个洞;填补这些洞本质上是一个生成式过程。哪怕是让 Ben 这个世界专家拿 DSLR 拍几百张,也总会漏掉东西,所以模型必须有生成能力去想象、填缝。

Justin 用 LLM 的「上下文窗口」类比这件事:当年大家从 128k 卷到百万 token 上下文,人人都懂把上下文拉长的价值;但图像和视频模型这一侧,从来没有人以同样的原则推进过——没人把一小时的视频放进去、做大海捞针式的帧检索。而重建其实就等于「用超长上下文做生成」:往里倾倒大量视角,模型据此构建这个世界的连续体。上一代产品 [[Marble|Marble]] 有根本性阻碍——塞不进几张图;Atlas 可以拿 64 张图的采集对整栋房子做穿行飞览,一切都是被看到、几乎被看到、或从未见到之处略微外推所锚定的。

## 「它太神奇了」:缩放定律与那个 Slack 消息

主持人问:着手做的时候,你们知道会成功吗?三位都表达了对[[缩放定律|缩放定律]]的完全信念——每次把模型做大、训练更久、放上更多芯片,它都显著变好。

但李飞飞说,具体的架构选择和数据配比才是魔鬼所在;她看着 Justin 的团队从「不知道要多久」到「有生命迹象」再到「哇,这会成功」。「我不确定它会这么好、这么快地奏效」——用新架构、新范式预训练一个新模型,第一个周期就成功,这件事本身是疯狂的。

内幕故事:初夏的某一天,一个比最终 Atlas 还小的模型,被喂进视点生成——就是 Nerf 论文里那张著名的花园桌子,一夜之间 Ben 发了一条 Slack:相机从桌子底下、带着足球飞穿过去。那天早上三个人对视一眼:「就是它了。」五秒之内做了决定——从来没有人见过这样的结果。

至于扩展是不是到头了:不,基本还在起点,不改架构也还有很大空间;当前的瓶颈主要是训练算力——博客里展示的模型是被发布截止日期倒推出来的,不是被规模或数据限制的。

## 用例:创意管线与「可编辑的 3D 状态」

创意工作者是既有用户群。有趣的是,用户已经在用 Marble「曲线」实现新视角预测:放一张图进去得到 3D 场景,再从不同视点截图——Atlas 直接把这条链路生成式地做了。Justin 指出,没有人用单体模型完成整个创作任务,大家的流程是多阶段的:故事板、情绪板、关键帧、剪辑;而真正的价值在于提供「持久的 3D 状态」——几十年来人们习惯了舞台、道具、场景元素这种持久的状态性,而不是「生成一个、扔掉一个、只留提示词」的短暂模式。

再往工业和设计延伸:为会议搭展位、建筑、施工——世上太多东西需要先经过费力的虚拟设计,而其中最艰巨、劳动密集的部分就是把口头反馈、草图映射回 3D 表示。「开个会拿反馈,然后回去改一周」,只因软件是几十年前的产物,从来没变得像玩乐高、做陶艺那样直观。这正是 AI 能真正解锁价值的地方。

## 机器人:真实到仿真的数据瓶颈

李飞飞解释了对机器人的意义。他们收购了原名为 Cinex 的公司,其关键技术是「[[真实到仿真|真实到仿真]]、仿真到真实」的系统:训练机械臂做工业布线,需要大量数据训练[[机器人策略|机器人策略]],再评估、再部署;过去靠稠密重建来还原环境——极其痛苦、耗时、费人,严重拖慢仿真到真实的速度,Atlas 就是这条路的下一代技术。

她把视野拉远:当下机器人领域最大的问题是数据,总有一天会变成芯片,但现在就是数据——因为收集机器人运行其中的真实世界数据太难,而且还要做「随机化」:同一个环境,线缆要能朝不同方向弯、盒子要有不同大小颜色位置,这必须经过真实到仿真的流程才能凑够数据。

Ben 补充了一个根本差异:生成代码、图像、视频,模型产出的是静态工件,网上有的是样本;而机器人策略是一个要走进真实世界、做出动作、追求目标的东西,世界不会总按你期望的方式回应。所以训练时策略必须暴露于部署中一切可能出错的情况——这正是仿真的关键。

经典路线是人类设计师在物理引擎里写显式代码穷举场景;另一条更数据驱动的路线,是训练「[[神经仿真器|神经仿真器]]」——一个学出来的、理解世界将如何回应动作的模型,用它当仿真床来训练机器人策略。这是 Atlas 非常有趣的未来方向。

## 动态:架构已支持,雏形已在模型里

领域专家给的一条反馈是:很棒,但需要更多[[动态|动态]]——世界得会动。回应是:动态显然会来,而且雏形已经有了。上一代 Marble 从根本上就是静态的,动态能力都没法处理,这写死在架构和训练里;Atlas 的架构从一开始就支持动态,训练数据也包含动态——仔细看发布的视频,水里有波浪、航拍里有小车在动。

有意思的是,从多视角重建 3D 时动态本是麻烦事,两者看似矛盾。他们的论点恰恰相反:即使在最终想要静态输出的情况下,最好的做法也是让模型在预训练中接触尽可能多的动态与静态内容,让模型自己学会把动态分解出去;之后再在后训练中聚焦静态。预训练检查点里已经有大量潜在动态。

## AI 完备:下一视角预测是下一 token 预测的等价物

收尾回到最大的假设。Justin 引入「[[AI 完备性|AI 完备性]]」的概念(与图灵完备性类比):如果一个 AI 任务在其最普遍的意义上被解决,就能解决任何智能问题,它就是 AI 完备的。

下一个 token 预测被普遍认为是 AI 完备的——经典例子来自 Ilya:一本悬疑小说读到最后一句「而凶手是——」,预测下一个 token,就逼着模型具备全部推理能力。而新视角预测同样如此:你可以有一部电影的所有帧,然后凶手走出来那一刻,准确预测走出来的是谁。

李飞飞给了演化视角的收束:新视角预测正是演化必须解决的问题——自然给了动物眼睛,却没给树眼睛。为什么?

因为当你移动时,你才会看到新的视点。所以三位非常坚定地相信:下一个视点预测,就是下一个 token 预测在空间智能中的等价物。

## 本集带走

- **Atlas 的底层原语是「新视角预测」**:输入若干带相机位姿的视角(最少可到一张),模型构建隐式的空间上下文,然后从任意空间时间点渲染出该世界的样子——这与 LLM 的下一 token 预测、视频模型的下一帧预测并列。
- **生成与重建第一次统一进一个模型**:经典重建需要多视角三角测量、拍不到就是洞;Atlas 用生成能力填缝,把房间重建所需照片从两三百张降到约三张(50-100 倍缩减),旧照片、旧视频、网图都能变 3D。
- **架构层面的关键创新**:预训练起就原生处理文本、图像、视频、相机位姿和深度图多模态;每次放大模型、延长训练、增加芯片都显著变好,且当前瓶颈是算力而非数据,扩展远未到头。
- **对机器人,核心价值在「真实到仿真」的数据瓶颈**:机器人策略训练需要覆盖一切出错场景的数据加条件随机化,神经仿真器(用 Atlas 这类模型充当可学习的仿真床)是通往这条路的下一站。
- **终极假设**:如果下一 token 预测是语言智能的 AI 完备任务,那么生成式的下一视角预测就是空间智能的等价物——移动者才需要预测新视角,这正是演化给动物眼睛而不给树眼睛的原因。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">我们说的是大约 50 倍、100 倍的削减。</span>  
> *We're saying like 50, 100x reduction.*  
> <span class="qm">—— 嘉宾 · [00:21]</span> ^q1

> <span class="qz">并不清楚的是,用新架构和新范式预训练一个新模型的第一个周期,第一个周期就奏效是疯狂的。</span>  
> *It's not clear that the first cycle of pre-training a new model with a new architecture and a new paradigm, the first cycle of that working is insane.*  
> <span class="qm">—— Justin Johnson · [22:32]</span> ^q2

> <span class="qz">但一切都有瓶颈,我认为持续扩展这个东西的主要瓶颈实际上是训练算力。</span>  
> *But everything has a bottleneck, and I think the main bottleneck on continuing to scale this thing is actually training compute.*  
> <span class="qm">—— Justin Johnson · [23:04]</span> ^q3

> <span class="qz">总有一天会变成芯片,但目前是数据。</span>  
> *One day it'll be chips, but for now it's data.*  
> <span class="qm">—— 嘉宾 · [31:00]</span> ^q4

> <span class="qz">所以我们非常坚定地相信,下一个视点预测就是下一个 token 预测的等价物。</span>  
> *So we do believe very strongly that next viewpoint prediction is the equivalent of next token prediction.*  
> <span class="qm">—— 嘉宾 · [43:15]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「创业与行业」挖下去**

- [[2025-11-16-lennys-the-godmother-of-ai|AI 教母李飞飞:从 ImageNet 到空间智能]]<span class="pd-rz">同公司:World Labs · 同概念:Marble、空间智能 (spatial intelligence)</span>
- [[2026-07-28-a16z-fei-fei-li-on-spatial-intelligence-and-r|李飞飞谈空间智能:机器人不需要完美,需要的是反事实推理]]<span class="pd-rz">同公司:World Labs · 同概念:Marble、空间智能 (spatial intelligence)</span>
- [[2026-08-03-yc-patrick-collison-what-if-you-succeed-e3m|Patrick Collison：AI时代该怎么创业]]<span class="pd-rz">同概念:Atlas</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-01-twiml-world-models-and-the-future-of-spatial-a|Justin Johnson：世界模型不只有一种，而语言模型做不到这些]]<span class="pd-rz">同公司:World Labs · 同概念:Marble、世界模型 (world model)</span>
- [[2026-06-04-practicalai-breaking-down-the-2026-stanford-ai-index|Stanford AI Index 报告十大要点速览]]<span class="pd-rz">同概念:世界模型 (world model)</span>
- [[2026-08-04-yc-waymo-co-ceo-dmitri-dolgov-move-fast-and|Waymo 谈物理 AI 的七条实战教训]]<span class="pd-rz">同概念:世界模型 (world model)</span>

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
