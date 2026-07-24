---
title: "AI 教母李飞飞:为什么大语言模型之后,「空间智能」才是下一个前沿"
podcast: "Lenny's Podcast"
date: 2025-11-16
source_url: https://www.lennysnewsletter.com/p/the-godmother-of-ai
duration: "79:30"
host: "[[Lenny]]"
cohosts: ["[[Dr. Fei-Fei Li]]"]
companies: ["[[World Labs]]", "[[Marble]]"]
concepts: ["[[ImageNet]]", "[[空间智能]]", "[[世界模型]]", "[[AGI]]", "[[具身智能]]", "[[深度学习]]", "[[苦涩的教训]]", "[[神经网络]]"]
tags:
  - AI 简史
  - 世界模型
  - 空间智能
  - 具身智能
  - 创始人经验
---

# AI 教母李飞飞:为什么大语言模型之后,「空间智能」才是下一个前沿

> [!info] 关联
> **主持**:[[Lenny]]
>
> **联合主持**:[[Dr. Fei-Fei Li]]
>
> **涉及公司**:[[World Labs]] · [[Marble]]
>
> **概念**:[[ImageNet]] · [[空间智能]] · [[世界模型]] · [[AGI]] · [[具身智能]] · [[深度学习]] · [[苦涩的教训]] · [[神经网络]]
>
> **来源**:[Lenny's Podcast](https://www.lennysnewsletter.com/p/the-godmother-of-ai)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2025-11-16-lennys-the-godmother-of-ai.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

从ImageNet破冰AI寒冬,到创立World Labs打造世界模型,李飞飞梳理AI70年脉络并指向下一代空间智能。

本期嘉宾是斯坦福大学教授李飞飞。她被外界称为「AI 教母」——早在 2000 年读博期间就进入了当时仍处于「寒冬」的 AI 领域;2006 年起主导创建的 [[ImageNet|ImageNet]] 数据集,被视为后来[[深度学习|深度学习]]爆发、乃至 ChatGPT 诞生的技术起点;她曾出任 Google Cloud 首席 AI 科学家、斯坦福人工智能实验室主任,也是斯坦福以人为中心的人工智能研究所(HAI)的联合创始人。最新动态是:她创立了 [[World Labs|World Labs]] 公司,并在本期播客上线之际发布了世界首个大型[[世界模型|世界模型]] [[Marble|Marble]]。本期对话沿着一条清晰的脉络展开:先从 AI 的早期历史讲起,为什么 ImageNet 会在当时成为破局的关键;再落到当下——为什么仅靠语言模型不够,「[[空间智能|空间智能]]」是她眼中下一个核心前沿;最后是她对每一个普通人发出的提醒:无论你是艺术家、护士还是农民,在 AI 时代你都有角色,因为这终究是一项关乎人的技术。

## AI 简史:从 50 年代到深度学习爆发

李飞飞首先把时间线拉回到 AI 研究的起点。这个领域的探索可以追溯到 50 年代——当时计算机科学家们开始尝试用算法和程序,让机器去完成以往只有人类认知才能做到的事。1956 年的达特茅斯研讨会上,后来加入斯坦福的 John McCarthy 教授正式创造了「人工智能」这个词。此后的几十年间,研究人员尝试过逻辑系统、专家系统和早期[[神经网络|神经网络]]等各种路径 [12:31 Fei-Fei Li]。

到了 80 年代末到 21 世纪初这大约 20 年间,业界迎来了「机器学习」的起步期——把计算机编程和统计学习结合起来。这个转变带来了一个关键认知:纯粹基于规则写死的程序,根本无法覆盖人类想要机器具备的海量认知能力;必须让机器自己去「学习」模式——比如你给它看过三只猫,它不能只认识这三只,还得能认出第四只、第五只 [13:23 Fei-Fei Li]。李飞飞正是在 2000 年进入加州理工学院攻读博士,成为第一批机器学习研究人员,专攻神经网络。但那时整个领域还处在公众不关注、经费不充裕的「AI 寒冬」里 [14:43 Fei-Fei Li]。

## ImageNet 的诞生:打破 AI 寒冬的那簇火花

在寒冬中做研究,李飞飞抓住了「物体识别」这个她称为「北极星」的问题——因为人类在世界中感知、推理和互动,几乎都是在「物体」这个层面上进行的,比如你要拿起一个茶壶,你是把它当作一个整体对象来互动,而不是当成一堆瓷分子 [15:37 Fei-Fei Li]。但研究过程中她撞上了一堵墙:无论用什么数学模型(神经网络也好,贝叶斯网络也好),都苦于没有足够的数据来训练。她由此提出了一个在当时被整个领域忽视的洞见:动物和人类的进化、学习,本质上都是一个依赖海量经验的「大数据」过程 [17:00 Fei-Fei Li]。

于是她和学生们在 2006、2007 年左右启动了 ImageNet 项目。雄心大到近乎「妄想」:几个研究生和一个教授,想抓取整个互联网上关于物体的图像。他们最终精心整理了 1500 万张图像,分类出 22000 个概念(借鉴了语言学家在 WordNet 上的词典编纂工作),并开源给整个研究社区,还举办了年度挑战赛 [18:07 Fei-Fei Li]。

真正的引爆点发生在 2012 年。多伦多大学的 Geoff Hinton 教授带领团队参加 ImageNet 挑战赛,用 ImageNet 的大数据加上两张买来的游戏 GPU,成功训练出第一个能大幅推进物体识别的神经网络算法。李飞飞把这三样东西——大数据、神经网络、GPU——称为现代 AI 的「黄金配方」[18:42 Fei-Fei Li]。即使到了 ChatGPT 时代,技术底层依然是这三样,只不过数据变成了互联网规模的文本、网络架构更复杂、GPU 变成了成千上万张。

> 【背景】2012 年夺冠的算法是 AlexNet,由 Geoff Hinton 的学生 Alex Krizhevsky 和 Ilya Sutskever 合著,被公认为深度学习时代的真正开端。主持人后文提及的 AlexNet 即指此。

## 从「脏词」到万物:九年间世界变了天

回到「AI 寒冬」的语境,李飞飞分享了一个让现在的人很难想象的细节:大约 2015 年到 2016 年那会儿,有科技公司会刻意避免在对外宣传中使用「AI」这个词——因为他们不确定这对品牌是不是个「脏词」 [21:28 Fei-Fei Li]。而到了 2017 年左右,硅谷的科技公司才开始把「AI 公司」当作品牌标签往自己身上贴 [22:20 Fei-Fei Li]。主持人也感慨:短短九年后的今天,已经没有公司敢不自称 AI 公司了。

> 【背景】李飞飞是Twitter(现 X)的前董事会成员,也曾在 2018 年在《纽约时报》撰文呼吁建立以人为本的 AI 发展框架,并在美国国会就 AI 议题作证。

顺着历史讲到这里,主持人抛出了一个当下最热的争议:既然有了 ChatGPT,我们离所谓的 [[AGI|AGI]](通用人工智能)还有多远?

## AGI 之争:我们还有多远

面对「我们离 AGI 多远」这个问题,李飞飞给了一个很干脆的回应:她不知道有没有人真正定义过 AGI [24:17 Fei-Fei Li]。她举了个例子——「机器能赚取薪水养活自己」算 AGI 吗?作为一名科学家,她进入这个领域是被「机器能否像人类一样思考和行动」这个大胆问题所吸引的,这始终是她的北极星;从这个角度看,她不觉得 AI 和 AGI 有什么本质区别 [25:02 Fei-Fei Li]。她的判断是:**AGI 更多是一个营销术语,而不是科学术语** [25:47 Fei-Fei Li]。

她更在意的是一个更具体的技术问题:仅靠现在堆数据、堆 GPU、做大模型,够吗?她的回答是:**绝对不够,我们还需要更多创新** [26:44 Fei-Fei Li]。她举了两个极具说服力的例子来证明 AI 还差得远:第一,给模型看几个办公室房间的视频让它数椅子——这是蹒跚学步的小孩都能做到的,但现在的 AI 做不到;第二,给 AI 喂哪怕比牛顿当时还全的天体数据,它也推不出一套 17 世纪的物体运动定律 [29:25 Fei-Fei Li]。更别提情感智能——学生和老师谈动力、谈困惑时那种深度的情感认知,今天的对话机器人完全给不了。

> 【背景】李飞飞提及的 Demis 是 DeepMind 联合创始人 Demis Hassabis,他也是图灵奖得主。她提到与斯坦福自然语言处理同事 Percy Liang 和 Chris Manning 的讨论,这两位是该领域的顶尖学者。

## 世界模型与空间智能:语言之后的下一块拼图

既然光靠语言模型无法触及这些天花板,缺的是什么?这正是李飞飞这些年最核心的判断:我们需要发展「空间智能」和「世界模型」。

她的思路是这样的:人类不仅用语言理解世界,很大程度上我们是用空间、感知、物理常识来应对世界的。想象一个非常混乱的火灾或交通事故现场,救援人员怎么分工协作——这背后是大量对物体、空间、态势的自发理解,光靠语言是灭不了火的 [32:36 Fei-Fei Li]。在她做机器人研究的过程中,她越来越确信:连接语言智能、视觉智能、机器人技术的那个关键枢纽,就是理解三维世界的空间智能 [33:25 Fei-Fei Li]。

那到底什么是世界模型?李飞飞给了一个最直白的解释:它是一个能让任何人通过一段提示(无论是一句话还是一张图),在脑海中创造出整个世界,并且可以走进去浏览、拿起物体、改变环境,甚至让机器人在里面规划路径、整理厨房的底层模型 [35:15 Fei-Fei Li]。它不是一段平面的视频,而是一个可推理、可交互、可创造的 3D 世界的基础设施 [36:00 Fei-Fei Li]。

> 【背景】李飞飞在 2024 年做过关于空间智能与世界模型的 TED 演讲。她创立的 World Labs 公司拥有四位联合创始人:Justin Johnson、Christoph Lassner 和 Ben Mildenhall。

## Marble 登场:世界模型能用来做什么

理解了「空间智能」这个判断,就很好理解她这次发布的产品了。Marble 是 World Labs 推出的首款产品,建立在其前沿模型之上——李飞飞团队花了一年多时间,做出了世界首个能真正生成可探索 3D 世界的生成模型 [49:15 Fei-Fei Li]。你输入一句话或一张图,它就能生成一个你可以走进去、四处走动的完整世界。

主持人玩过之后惊呼「这太疯狂了」,还提到一个有趣的细节:在世界渲染出完整纹理之前,你能先看到引导你进入世界的「点阵」效果——像极了电影《黑客帝国》里的体验。李飞飞透露,这个点阵并非模型本身的输出,而是工程师们专门做的功能可视化,目的是引导用户进入,没想到让这么多人感到愉悦 [51:46 Fei-Fei Li]。

那么,它和能生成视频的 AI 工具(如 VO3 等其他视频生成模型)有什么本质不同?李飞飞的回答是:世界不是被动观看视频流。视频是平面的、一次性的;而空间智能要创造的是有真实 3D 结构、能深度互动的世界 [57:46 Fei-Fei Li]。事实上,World Labs 几周前也发布了世界上首个能在单张 H100 GPU 上实时演示的视频生成技术,视频生成只是其能力的一部分 [59:41 Fei-Fei Li]。

目前已经涌现出不少真实的落地场景:
- **电影虚拟制作**:与索尼合作的虚拟制作公司用它拍摄场景,把制作时间缩短了 40 倍 [53:59 Fei-Fei Li]。
- **机器人仿真**:研究者可以用它快速生成多样化的合成环境数据,用来训练机器人,而不用人工搭建每一个资产 [54:36 Fei-Fei Li]。
- **心理治疗**:有心理学团队找到他们,想用 Marble 快速生成各种沉浸式场景(比如凌乱或整洁),用于研究精神病患大脑的反应,甚至用于恐高症等暴露疗法 [55:35 Fei-Fei Li]。

## 为什么「苦涩教训」在机器人领域不灵

主持人代投资人 Ben Horowitz 提了一个很硬核的技术问题:在 AI 史上著名的「苦涩教训」(由图灵奖得主 Richard Sutton 提出,指在算法演进史上,简单模型加海量数据最终总会赢过复杂模型加少量数据)为什么在机器人领域可能不奏效?

李飞飞的回答非常务实。首先她澄清:对当年做 ImageNet 的她来说,这其实是「甜美的教训」,因为她本就是押注大数据的 [42:01 Fei-Fei Li]。但机器人的困境有两个特殊性:第一,**获取带动作的数据太难了**。语言模型的训练数据是文本,输出的也是文本,目标函数和训练数据完美对齐;但你希望机器人输出的是「动作」,而我们在网上抓取的网络视频里,恰恰缺乏 3D 世界中的真实动作数据。得靠遥操作数据、合成数据来补 [43:09 Fei-Fei Li]。第二,**机器人是物理系统**。她提醒:机器人比大语言模型更接近自动驾驶汽车——不仅需要大脑,还需要物理身体、供应链、成熟的应用场景。从 2005 年到 2006 年斯坦福的自动驾驶车原型,到今天的 Waymo,花了 20 年还没完全落地 [46:00 Fei-Fei Li]。而自动驾驶汽车只是在二维平面上跑的金属盒子,目标是「不碰到任何东西」;机器人是在三维世界里跑的三维事物,目标是「去接触并操作物体」,难度是数量级的提升 [46:22 Fei-Fei Li]。

## 创始人的清醒与给年轻人的建议

World Labs 成立仅一年多,团队约 30 人,以研究人员和工程师为主。李飞飞坦言,作为创始人最让她「偏执」的是 AI 领域极其激烈的竞争格局——无论在模型、技术还是人才上,甚至某些人才的成本之高都超乎想象 [64:19 Fei-Fei Li]。

回顾自己为何总能身处 AI 发展的中心(从普林斯顿到斯坦福、从领导 SAIL 到加入 Google),李飞飞给出的答案不是精于算计,而是「智力上的无畏」[66:05 Fei-Fei Li]。她当年放弃快到手的终身教职去斯坦福重启,就是看中那里的人;成为 SAIL 首位女性主任时也没纠结失败的可能。她对应届生的一个观察是:很多人在挑选工作时过度纠结等式的每一个细枝末节,却忘了最重要的三个问题——你的激情在哪里?你是否认同使命?你是否信任这个团队 [69:27 Fei-Fei Li]。

> 【背景】李飞飞提到的 Jeff Dean 是 Google 首席科学家,「Jeff Hinton」指的即是前文提到的深度学习先驱 Geoff Hinton。

## AI 关乎每一个人

回到这期播客最开始的那句「AI 没有任何人工的成分,它由人创造,也影响人」,李飞飞在结尾对每一个不在科技圈的普通人发出了真诚的呼吁。无论你是中学老师、护士、即将退休的农民,还是年轻的艺术家,在 AI 时代都有你的角色 [75:56 Fei-Fei Li]。没有任何技术应该剥夺人类的尊严,人类尊严和主观能动性应该处于技术开发、部署和治理的核心。如果你是艺术家,把 AI 当作讲故事的独特工具;如果你是护士,AI 能通过智能摄像头或机器人辅助帮你减轻过劳;如果你是即将退休的农民,作为公民你依然可以对 AI 的应用发声 [76:22 Fei-Fei Li]。

## 本集带走
1. **AGI 更像营销术语而非科学术语。** 仅靠「堆更多数据、更多 GPU、更大的当前模型」到一定阶段会遇到天花板,要实现真正的突破(如抽象推理、科学发现),AI 依然需要底层范式上的根本性创新。
2. **空间智能是语言模型之后的下一块核心拼图。** 人类对世界的理解不只在语言层面,更在三维的空间、物理与感知层面;要做出能在真实世界行动的机器人或[[具身智能|具身智能]],缺少的正是这种可交互、可推理的世界模型。
3. **AI 的最终落点是人。** 这是一项文明级的技术,其发展、部署与治理,都必须把人类尊严与主观能动性置于核心;无论你的职业是什么,你都不是旁观者。

## 金句(中英对照 · 过机器闸门三联校验)

> 作为科学家而非技术专家,我觉得 AGI 更多是一个营销术语,而不是科学术语。  
> *I feel AGI is more a marketing term than a scientific term as a scientist than technologist.*  
> —— Dr. Fei-Fei Li · [25:47] ^q1

> 人类历史上没有哪一个深刻的科学学科到达了一个说我们完成了、我们不再创新的境地,而人工智能是——如果说不是人类文明中——最年轻的学科之一,就科学和技术而言,我们还在挠皮毛。  
> *There's not a single deeply scientific discipline in human history that has arrived at a place that says we're done, we're done innovating and AI is one of the, if not the youngest discipline in human civilization in terms of science and technology, we're still scratching the surface.*  
> —— Dr. Fei-Fei Li · [27:01] ^q2

> 让我们给人工智能所有的数据,包括牛顿没有的天体的现代仪器数据,把它给它,并只是让人工智能创建 17 世纪的那套物体运动定律方程。  
> *Let's give AI all the data including modern instruments data of celestial bodies, which Newton did not have, and give it to that and just ask AI to create the 17th century set of equations on the laws of bodily movements.*  
> —— Dr. Fei-Fei Li · [29:25] ^q3

> 同时,我在做很多机器人研究,我意识到连接额外智能的关键,除了语言化身的 AI,也就是机器人,连接视觉智能,是关于理解世界的空间智能感。  
> *In the meantime, I was doing a lot of robotics research and it dawned on me that the linchpin of connecting the additional intelligence, in addition to language embodied AI, which are robotics, connecting visual intelligence, is the sense of spatial intelligence about understanding the world.*  
> —— Dr. Fei-Fei Li · [33:26] ^q4

> 所以机器人比大型语言模型更接近自动驾驶汽车。  
> *So robots are closer to self-driving cars than a large language model.*  
> —— Dr. Fei-Fei Li · [45:22] ^q5

> 我是一个在智力上非常无畏的人,我必须说当我雇佣年轻人时,我会寻找这一点,因为我认为如果一个人想要做出改变,这是一个非常重要的品质,那就是当你想要做出改变时,你必须接受你正在创造新事物或正在潜入新事物。  
> *I'm an intellectually very fearless person, and I have to say when I hire young people, I look for that because I think that's a very important quality if one wants to make a difference, is that when you want to make a difference, you have to accept that you're creating something new or you're diving into something new.*  
> —— Dr. Fei-Fei Li · [66:05] ^q6

## 相关单集

- [[2025-12-07-lennys-surge-ai-edwin-chen|《被 10 亿美元验证的逆向创业法:AI 数据公司 Surge 的独立路径》]] —— 同概念:AGI
- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同公司:Figma
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《From skeptic to true believer: How OpenClaw changed my life | Claire Vo》]] —— 同公司:ChatGPT
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《Why cultivating agency matters more than cultivating skills in the AI era | Max Schoening (Head of Product, Notion)》]] —— 同公司:Figma

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
