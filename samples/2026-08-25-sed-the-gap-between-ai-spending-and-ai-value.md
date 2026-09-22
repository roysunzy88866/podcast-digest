---
title: "企业AI为什么卡壳:只有6%的大公司真正跑通了"
podcast: Software Engineering Daily
date: 2026-09-22
source_url: undefined
duration: "54:24"
type: episode
cover: "#64748b"
description: "Scale AI 企业AI负责人 Emily Hsu(前 Google 11年、Google Brain 早期成员)拆解企业AI在哪三层失灵,以及那6%成功的公司做对了什么。"
host: "[[Kevin Ball]]"
cohosts: ["[[Emily Hsu]]"]
companies: ["[[Scale.ai]]", "[[Google]]"]
concepts: ["[[企业 AI]]", "[[智能体]]", "[[评估]]", "[[实体消解]]", "[[人在回路]]", "[[基准测试]]", "[[校准]]", "[[数据基础]]", "[[Frontier Labs]]", "[[前向部署工程师]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-25-sed-the-gap-between-ai-spending-and-ai-value#post","headline":"企业AI为什么卡壳:只有6%的大公司真正跑通了","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-25-sed-the-gap-between-ai-spending-and-ai-value","mainEntityOfPage":"https://talk.solomind.cc/2026-08-25-sed-the-gap-between-ai-spending-and-ai-value","description":"Scale AI 企业AI负责人 Emily Hsu(前 Google 11年、Google Brain 早期成员)拆解企业AI在哪三层失灵,以及那6%成功的公司做对了什么。","datePublished":"2026-09-22","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Kevin Ball"},{"@type":"Person","name":"Emily Hsu"},{"@type":"Organization","name":"Scale.ai"},{"@type":"Organization","name":"Google"},{"@type":"Thing","name":"企业 AI (enterprise AI)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"评估 (evaluation)"},{"@type":"Thing","name":"实体消解 (entity resolution)"},{"@type":"Thing","name":"人在回路 (human-in-the-loop)"},{"@type":"Thing","name":"基准测试 (benchmark)"},{"@type":"Thing","name":"校准 (calibration)"},{"@type":"Thing","name":"数据基础 (data foundation)"},{"@type":"Thing","name":"Frontier Labs"},{"@type":"Thing","name":"前向部署工程师 (Forward Deployed Engineers)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"企业AI为什么卡壳:只有6%的大公司真正跑通了","item":"https://talk.solomind.cc/2026-08-25-sed-the-gap-between-ai-spending-and-ai-value"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>企业AI为什么卡壳:只有6%的大公司真正跑通了</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 企业AI为什么卡壳:只有6%的大公司真正跑通了

<div class="pd-byl"><b>Emily Hsu</b> · Scale AI 企业AI负责人 · 2026-09-22</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-25-sed-the-gap-between-ai-spending-and-ai-value.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">每一次模型迭代——我们称之为数据飞轮——理解模型的差距在哪里、如何贡献数据、训练它,这整个工程实践基本上由工程团队掌握,而他们并没有业务接触。</div><div class="a">— Emily Hsu <button class="pd-ts" data-t="08:35" data-who="Emily Hsu" data-en="Every model iteration, which we call data flywheel, understanding where the model gaps are and how to contribute data, train it, the whole engineering practice is pretty much owned by the engineering team who actually do not have the business exposure." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Kevin Ball]] · [[Emily Hsu]]
>
> **公司** [[Scale.ai]] · [[Google]]
>
> **概念** [[企业 AI]] · [[智能体]] · [[评估]] · [[实体消解]] · [[人在回路]] · [[基准测试]] · [[校准]] · [[数据基础]] · [[Frontier Labs]] · [[前向部署工程师]]

企业在 AI 上花了大钱,却普遍拿不到相称的回报——员工个人都在用聊天机器人和编码辅助,但组织层面几乎没变化。[[Scale.ai|Scale AI]] 最近的一份研究报告给出的数字是:大型企业里真正把 AI 整合进业务、看到收益的只有 6%。

说这话的人是 [[Emily Hsu|Emily Hsu]],Scale AI 的[[企业 AI|企业 AI]] 负责人,此前在 [[Google|Google]] 干了 11 年,是 Google Brain 早期成员,做过 Vertex 调优、[[评估|评估]]、[[智能体|智能体]]引擎等云 AI 产品的工程负责人,更早之前是 Vanderbilt 大学的教授。既给前沿实验室供数据、又下到企业里做部署,这个位置让她看得格外清楚。

## 第一层失灵:前沿模型的靶子根本没对准企业

模型开发团队对企业需求的接触非常有限。每一次模型迭代——也就是数据飞轮:找模型差距、补数据、再训练——整个工程实践都掌握在没有业务接触的工程团队手里。结果就是大家极度以[[基准测试|基准测试]]为导向,能力支柱是数学、推理、代码、对话、多轮安全,而「企业」这一项在所有前沿实验室的排行榜上,到 2025 年已经缩成一个非常窄的支柱。

模型知道很多人类智力层面的知识,但具体到企业里:职业需求是什么、运营工作流是什么、哪些政策是超临界的关键——既没有评估标准,训练模型的人也没有这方面的直觉知识。能力差距的根本原因之一就在这里:企业世界的复杂性没有被很好地捕捉并呈现给实验室的开发者。

而且「企业」是一个词,却不像「数学」「代码」那么简单——光是医疗健康,就有医疗机构、医疗中心、保险公司、制药公司,医疗机构里还分大型学术医疗中心和社区医疗,它们对 AI 的需求和「可接受的 AI 服务」标准完全不同。数学和代码之所以进步快,恰恰因为亲手做的人真正理解它们、也容易定义「什么是对的」,可验证奖励的强化学习因此大放异彩;企业领域连北极星都还没立起来。

## 第二层失灵:二十年数字化欠下的账

就算模型没问题,应用和智能体还得和企业环境集成:怎么通过认证访问正确的数据、怎么读懂企业服务背后那些表名各异的 API 和数据模式、怎么把企业内部的部落知识(只有老员工脑子里有、没写下来的经验)作为上下文喂给智能体——这些都是不简单的问题。

更深的一层是过去二十年数字化的遗留。那波数字化里,信息的接收端是人,而人极其灵活:给我一份 PDF、一份手写笔记,不完美我也能看懂。

Emily 举了与 Mayo Clinic 合作遇到的例子:大家以为电子病历都按 FHIR 标准数字化了,但总有病人不在网络内,带着几百页打印成 PDF 的历史病历来看病。人能糊弄过去的事,智能体糊弄不过去——现在必须回头重新审视:一个智能体能应付过去吗?

也许不能。这些碎片化信息成了 AI 方案加速部署的真实障碍。

## 第三层失灵:人在用,但组织没接住

去企业问 AI 采用率,如果算上用 Claude Code、GPT 这些个人工具的人,采用率高得惊人——但没人是在协调一致的企业工作流里用的,只是各用各的提升个人效率。这带来两个问题:一是大量 IP 泄露,员工的提问和追问里含着企业机密、判断和隐性知识,全都流向了前沿实验室;二是这些极有价值的数字资产根本没被捕获、没在组织内沉淀成知识库,下一个接手项目的人继承不了前人积累。主持人 [[Kevin Ball|Kevin Ball]] 点破了另一个现象:只把个人生产力提升丢进组织、不重新思考组织本身,最终只会被下一个没提速的层级卡住瓶颈,组织层面的提升远低于预期。

技术问题的解法其实在人的手里。如果领导层不认可 ROI,团队就没有清晰的成功标准,人们很容易在一份惊艳的 demo 处停步不前——东西被丢在无人问津的角落,永远不进入产品化。所以最重要的是高层先在北极星成功指标上达成一致,再倒推出技术路线图。

## 那 6% 的赢家做对了什么

报告先严格定义了「成功」:项目从试点真正进入生产环境、并与工作流做了有意义整合(用具体的使用指标衡量)。Emily 强调他们做的是相关性而非因果归因——像做机器学习一样捕捉共同属性。三条共性:

**一、[[数据基础|数据基础]]是先决条件。** 不意外,但绕不过去:没有数据,AI 什么都做不了。

这是个先有鸡还是先有蛋的问题,不过 AI 以正确方式进场后也能反哺——比如[[实体消解|实体消解]](把不同表里对同一企业实体的不同命名对齐)这个老问题,大语言模型凭预训练的词汇知识做得比传统方法好得多,先把数据资产归一化、标准化、关联起来,下一层智能体才能在其上释放更多能力。这是个迭代过程,但基础必须先打牢。

**二、变革管理前置。** 早期就有高层背书、承诺变革管理、投入员工培训资源(个人工具和企业工作流 AI 的步骤和界面都不一样),让员工参与共同开发、把 AI 当成工作流里的副驾驶——这样采用成功率会大幅提高。

**三、内外专长结合。** 只买产品,即使配定制咨询团队,仍要面对与工作流和企业上下文集成的问题;全部自建,内部团队通常缺少对 AI 技术的深入理解。6% 的赢家是战略性地把内部领域知识(这个东西什么时候有用、怎么用、什么结果能真正改变工作流和决策)与外部专业伙伴的 AI 模型、应用开发、系统开发专长结合起来。

## 评估:非确定性世界里的「单元测试」

Emily 称这是她最喜欢的话题。评估有三个要素:评估对象(智能体本身,加上它运行的环境——连接的工具、服务 API、后端数据库、文件系统、知识库,换了环境结果就变,这就是健壮性问题)、测试用例集(像软件测试一样覆盖正常路径、典型情况和边缘情况,她以患者安全分诊智能体为例:正面案例要命中上百条安全标准的各类事件,还要设计负面案例、困难负面案例、证据缺失的歧义场景)、以及输出的好坏判定与非确定性下的稳健性。

最难的一环是环境:行业里由真实数据支撑的评估环境极为有限——真实企业数据有隐私和法律约束,不用真实数据,数据内部复杂的依赖关系又无法真实还原。目前的折中是用性质相似、语义域相近的过期数据做匿名化,寻找代理数据来构建相似环境。但 Emily 坦承:模拟与真实之间的差距始终存在,这仍是开放研究问题。

## 人在回路:先是责任,再谈信任

智能体进企业后,有一个长期不变的基础:谁来为输出和决策负责?不能说「这是 AI 干的」——人类要长久地为 AI 的决策和工作成果承担责任。

战术层面则是分阶段的:在智能体于生产环境积累足够信任之前,人始终在回路里——模糊情况由人分诊、高风险操作由人确认、AI 产出的洞见由人审查是否符合业务政策。随着信任建立、产品成熟,再逐步自动化高置信度的操作,用初期较高的监督成本换可靠可信的部署。

这里还有个开放问题:AI 与人之间的认知界面到底是什么?现在的工具动不动就弹「确认」,确认多了人会疲劳,之后就不再能做正确判断了。

研究方向是[[校准|校准]]——让 AI 知道什么节点才真正需要人类输入、它自己什么时候不确定。大语言模型的默认界面根本不暴露置信度,token 级的 logits 分布(模型输出前每个候选词的概率分布,能看出模型是笃定还是摇摆)或许能延伸到智能体和任务层面的校准置信度——目前仍是开放研究,而 Emily 认为随着生产化和人机协作加深,人们应该在这里投入更多。

## 本集带走

- **先立北极星,再谈技术**:领导层不在 ROI 和成功指标上达成一致,项目就会停在 demo 阶段、永远不产品化。
- **数据烂摊子绕不过去**:没有数据 AI 无事可做;先用 AI 做实体消解这类基础工作把数据资产归一化,上层智能体才有地基——这是迭代,不是一次到位。
- **别只发个人工具**:员工各用各的 AI 意味着 IP 泄露加知识流失;要把提问和解决方案沉淀成组织知识库。
- **买还是建是假问题**:内部领域知识(什么时候有用、怎么用)配上外部 AI 开发专长,才是 6% 赢家的共同姿势。
- **找到正确的试点用例起步**:要真正有价值(不是玩具)、有数据和资源就绪、内外专长能支撑落地——第一个成功试点会复利式滚向生产上线。
- **评估学软件测试**:定义评估对象和环境、策略性覆盖正例/负例/困难负例/歧义场景,再接受模拟与真实之间永远有差距、靠生产环境里的信任积累来补。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">每一次模型迭代——我们称之为数据飞轮——理解模型的差距在哪里、如何贡献数据、训练它,这整个工程实践基本上由工程团队掌握,而他们并没有业务接触。</span>  
> *Every model iteration, which we call data flywheel, understanding where the model gaps are and how to contribute data, train it, the whole engineering practice is pretty much owned by the engineering team who actually do not have the business exposure.*  
> <span class="qm">—— Emily Hsu · [08:35]</span> ^q1

> <span class="qz">但如果你只是把一堆个人生产力的提升丢进一个组织,而不重新思考你的组织,你往往最终只是被下一个没有同步提速的层级卡住瓶颈。</span>  
> *But if you just drop a bunch of individual productivity improvements into an organization without rethinking about your organization, you often end up just bottlenecked on the next layer that didn't speed up the same amount.*  
> <span class="qm">—— Kevin Ball · [21:09]</span> ^q2

> <span class="qz">第一个是可能存在大量 IP 泄露,因为当你与个人工具交互时,你所有的查询、所有的问题,其中有大量企业机密信息。</span>  
> *The first one is there could be a lot of IP leakage, because when you interact with an individual tool, all the queries you have, all the questions you have, there are a lot of enterprise confidential information.*  
> <span class="qm">—— Emily Hsu · [22:21]</span> ^q3

> <span class="qz">而当人们习惯了只与个人生产力工具交互时,所有这些数字资产、所有这些隐性知识实际上都没有被捕获,也没有在组织内共享。</span>  
> *And when people are actually getting used to just interacting with the individual productivity tools, all this digital asset, all this implicit knowledge are actually not captured and shared across the organization.*  
> <span class="qm">—— Emily Hsu · [23:08]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-07-grit-the-ai-race-has-a-leaderboard-arena-ceo|Arena CEO:现实是唯一可信的裁判，开源正在改写规则]]<span class="pd-rz">同概念:基准测试 (benchmark)、智能体 (agent)、评估 (evaluation)</span>
- [[2026-08-27-nopriors-rethinking-legacy-data-infrastructure-wi|数据成了企业唯一的护城河：AI时代的数据基建怎么做]]<span class="pd-rz">同公司:Google · 同概念:数据基础 (data foundation)、智能体 (agent)</span>
- [[2026-09-11-twist-the-pentagon-wants-equity-in-ai-startups|不到10人管7个SaaS:让智能体替你做营销的实操系统]]<span class="pd-rz">同公司:Google · 同概念:人在回路 (human-in-the-loop)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同公司:Google · 同概念:智能体 (agent)</span>
- [[2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge|Kimi K3 冲击波:开源逼近前沿,格局要变]]<span class="pd-rz">同概念:Frontier Labs、智能体 (agent)</span>
- [[2026-08-15-twentyvc-20growth-how-to-build-a-100m-growth-engi|SaaS增长该抄电商作业：付费广告立刻开打]]<span class="pd-rz">同公司:Google · 同概念:智能体 (agent)</span>

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
