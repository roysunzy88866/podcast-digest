---
title: "知识该放提示词、记忆还是权重?别靠偶然做架构决策"
podcast: 精选演讲
date: 2026-10-07
source_url: undefined
duration: "20:01"
type: episode
cover: "#64748b"
description: "一位 AI 工程演讲者论证:企业 AI 系统中知识该进提示词、记忆还是权重,不该靠逐级试错偶然决定,并给出诊断框架与循环架构。"
guests: ["[[Anant Srivastava]]"]
concepts: ["[[提示词]]", "[[记忆]]", "[[权重]]", "[[微调]]", "[[RAG]]", "[[智能体]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-04-talks-stop-fine-tuning-to-fix-retrieval-proble#post","headline":"知识该放提示词、记忆还是权重?别靠偶然做架构决策","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-04-talks-stop-fine-tuning-to-fix-retrieval-proble","mainEntityOfPage":"https://talk.solomind.cc/2026-10-04-talks-stop-fine-tuning-to-fix-retrieval-proble","description":"一位 AI 工程演讲者论证:企业 AI 系统中知识该进提示词、记忆还是权重,不该靠逐级试错偶然决定,并给出诊断框架与循环架构。","datePublished":"2026-10-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Anant Srivastava"},{"@type":"Thing","name":"提示词 (prompt)"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"权重 (weights)"},{"@type":"Thing","name":"微调 (fine-tuning)"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"智能体 (agent)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"知识该放提示词、记忆还是权重?别靠偶然做架构决策","item":"https://talk.solomind.cc/2026-10-04-talks-stop-fine-tuning-to-fix-retrieval-proble"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>知识该放提示词、记忆还是权重?别靠偶然做架构决策</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 知识该放提示词、记忆还是权重?别靠偶然做架构决策

<div class="pd-byl"><b>Anant Srivastava</b> · 2026-10-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-04-talks-stop-fine-tuning-to-fix-retrieval-proble.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">今天,我要论证的是:大多数企业团队是靠偶然做出这个决策的。</div><div class="a">— Anant Srivastava <button class="pd-ts" data-t="00:53" data-who="Anant Srivastava" data-en="Today, I'm going to argue that this is a decision that most enterprise teams make by accident." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Anant Srivastava]]
>
> **概念** [[提示词]] · [[记忆]] · [[权重]] · [[微调]] · [[RAG]] · [[智能体]]

对于大多数企业级 AI 系统来说,真正有趣的工程问题不是模型本身——模型无非是消费 token、产出 token。

你的知识存在于文件、数据库和 API 里,关键架构决策是:这些知识如何到达推理?

是放进[[提示词|提示词]]或上下文,通过检索或[[记忆|记忆]]层,还是用[[微调|微调]]这类模型适配手段。

这一集的演讲者提出一个尖锐的判断:**大多数企业团队是靠偶然做出这个决策的**——知识放哪里不是被设计出来的,而是六个月正常产品工作累积出来的。

**为什么会是偶然?两种机制。

** 显而易见的一种是团队逐级升级:模型答得不对,最简单的做法是去修提示词;还错,去看看记忆系统或检索系统;再不行,「那我们微调一下模型吧」。

另一种更隐蔽:即使不主动升级的团队,其实每天都在做这些决策——你对提示词的每一次编辑、你索引的每一份文档、你固化进训练集的每一个样本,全都是架构决策,但没有一个被当成架构决策来对待。

**一场真实的事故**:一个内部支持助手刚发布,几周后产品经理改提示词修语气,又几周后支持团队把退款政策文档加进检索系统,然后一位工程师把产品目录塞进了提示词,最后机器学习团队用过去六个月的支持工单微调了模型。

每一步看起来都没问题。

但当新产品目录发布、大家顺手把它更新进提示词时,[[智能体|智能体]]却在报一些根本不存在的产品名——因为旧产品目录已经在你用支持工单微调时**泄漏进了[[权重|权重]]**。

没人负责整体,等于每个人都只拥有一块;没人问过那个诊断性问题:这个东西应该放在哪里?

## 提示词:管行为,不管事实

提示词的职责是行为、语气、智能体的角色设定——那些**小、稳定、可编辑**的东西。

它的错误职责是存储事实:把产品目录塞进提示词,是在不必要地给模型提供上下文并为之付出代价,而且 token 太多会撞上「迷失在中间」问题(模型对长上下文中段的信息利用率下降)。

诊断标准:这个知识是否小、稳定,并且是关于「如何表现」而非「知道什么」?

好的例子是面向 SaaS 产品的客户支持智能体:专业语气、三次失败后转人工、给出具体下一步——这些不随查询和用户变化,正属于提示词。

注意这里的提示词不只是 system prompt,包括你为模型撰写的一切指令(MD 文件之类也算)。

## 记忆:管最新的、大量的、可溯源的知识

记忆的职责是让模型立足于**当前、大量、可溯源**的知识:「当前」指变化比你能微调的速度还快;「大量」指放不进提示词;「可溯源」指生产级系统需要能指出知识的来源。

这里的记忆既包括智能体记忆(关于交互者的知识),也包括用 [[RAG|RAG]] 检索的外部记忆(由外部应用管理的企业知识)。

记忆的错误职责是硬塞行为或指望它帮模型推理——图谱式 RAG 顶多帮一点,如果模型推不动两三个文档,给它 50 个文档的上下文也没用。

诊断标准:知识是不是太大放不下?变化是不是比重新训练还快?是否按用户或仓库划定了范围、需要访问控制?

有访问控制的知识必须放记忆,因为这样你才能控制谁看到什么。

好例子是能访问组织所有代码仓库的代码助手:你不会微调模型去学代码(它一直在变),也不会把整个代码库塞进提示词——通常你微调模型是让它学**反射,而不是事实**。

构建代码 RAG 时,要用基于 AST(代码语法树)的、能感知代码结构的分块,并给每个代码块打上元数据:属于哪个仓库、哪些用户有提交权限——否则你会制造一锅「RAG 糊糊」,从数据库返回大量代码块把模型搞糊涂。

## 权重:只放停止变化的东西

什么属于权重?**停止变化的东西**——唯一依据是变化速率。

而且必须有非常充分的理由才去重新训练;搞错了就会把一个还在移动的边界冻结住。

反例:内部文档助手答不对,团队决定用运行手册和流程文档微调模型来「教会它这个领域」——但运行手册和流程是事实,属于外部记忆;答不对其实是检索问题,该修的是检索,不是微调(微调完你得到的是过时信息)。

另一个反例:医疗理赔编码(ICD-10 这类把医生笔记映射到编码的体系,有 7 万个编码)——你会微调模型去学它们吗?

不会,那是事实和知识,而且微调需要大量训练数据;你微调的是**反射**:理解输入格式、在多种格式间做出正确选择。

正例:内容审核或理赔处理这类困难、模糊的问题。

先用前沿模型做推荐、人来纠正(尽管纠正得不一致),一段时间后模式浮现——会出现一个相当稳定的「核心」和一个仍需人工的「争议边缘」,人工覆盖率在某个点之后趋于平缓。

那个稳定的核心就是可以微调的东西,但微调后必须持续监控核心有没有漂移。

微调的诊断标准:**信息是否已停止变化?人是否已收敛?

** 更重要的是,你得有这两个理由之一:是因为模型能力不够,还是为了省成本?

很多时候不是能力问题——前沿模型已经很强,通常归根结底是成本:如果你的工作模式清晰,可以用小模型微调后低成本跑大量请求。

## 一张表和一套循环架构

如果只能记住一样东西,就是这张「透镜」表:提示词关于行为,记忆关于知道什么和事实,权重关于如何推理。

可以拿你当前的 AI 系统对照它来做决策(当然允许例外)。

更进一步,这三者不该是静态划分,而要**循环流转**:提示词/上下文窗口里的信息生成信号,其中一些沉淀为持久化记忆;新会话启动时,记忆又被提取进提示词;而智能体系统运行一段时间后会浮现检索模式和「模型应该反射性知道」的格式,这些从记忆转入微调(记忆→权重);微调完成后又反过来改变什么值得检索——模型已反射性掌握笔记和 ICD 编码的格式后,你就不必每次从记忆里检索示例喂给它了(权重→记忆)。

整个系统因此形成一个循环,智能体通过做它的工作而在工作中变得更好。

结语一句话:**模型是容易的部分**。

你在模型周围构建的 harness——帮你在正确的位置存储正确的信息、并让信息在三者之间循环流转的那一层——才是你必须构建的关键架构。

## 本集带走

- **别靠升级路径做架构**:修提示词→改检索→微调的逐级试错,会让知识在不知不觉中「泄漏进权重」;每一次提示词编辑、文档索引、训练样本选择,都要当成架构决策来问「这该放在哪里」。
- **提示词放行为**:小、稳定、关于「如何表现」的内容(语气、角色、流程规则);事实和产品目录塞进提示词是花钱买「迷失在中间」。
- **记忆放事实**:太大放不下、变化比微调快、需要按用户/仓库做访问控制的知识;RAG 要做代码感知分块 + 元数据过滤,否则产出「RAG 糊糊」。
- **权重只放停止变化的东西**:用「信息是否停止变化、人是否收敛」判断;微调只该为两个理由——能力缺口或省成本(用小模型微调后低成本跑量);微调后持续监控漂移。
- **三者要成循环**:上下文沉淀为记忆、模式从记忆转入权重、微调反过来减少检索——围绕模型建 harness,而不是围着模型修修补补。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">今天,我要论证的是:大多数企业团队是靠偶然做出这个决策的。</span>  
> *Today, I'm going to argue that this is a decision that most enterprise teams make by accident.*  
> <span class="qm">—— Anant Srivastava · [00:53]</span> ^q1

> <span class="qz">你的架构是累积出来的,不是被设计出来的。这就是那场事故。</span>  
> *Your architecture was accumulated. It was not designed. That is the accident.*  
> <span class="qm">—— Anant Srivastava · [04:36]</span> ^q2

> <span class="qz">提示词的错误职责是存储事实。</span>  
> *The wrong job for the prompt is to store facts.*  
> <span class="qm">—— Anant Srivastava · [05:31]</span> ^q3

> <span class="qz">因为如果你的模型无法对两三个或五个文档进行推理,那它也无法对你提供的 50 个文档进行推理。</span>  
> *Because if your model cannot reason over two or three or five documents, it won't be able to reason over 50 that you provide.*  
> <span class="qm">—— Anant Srivastava · [08:33]</span> ^q4

> <span class="qz">通常,你会微调你的模型去学习反射,而不是事实。</span>  
> *You'd fine-tune your model to learn reflexes, not facts, typically.*  
> <span class="qm">—— Anant Srivastava · [09:43]</span> ^q5

> <span class="qz">以及所有这些——因为正是这些能帮助你获取你需要的精确数据,而不是制造一锅 RAG 糊糊,从数据库返回大量代码块然后让模型感到困惑。</span>  
> *And all that, because that is what is going to help you get the exact data that you need versus creating a rag mush where you are returning a lot of chunks back from the database and then confusing the model.*  
> <span class="qm">—— Anant Srivastava · [10:42]</span> ^q6

> <span class="qz">而你最终很可能呈现这样一种模式:有一个你仍然需要人的争议边缘,但有一个相当稳定的核心。</span>  
> *And you will most likely emerge in a pattern where you have a contested edge where you still need humans, but a center which is pretty stable.*  
> <span class="qm">—— Anant Srivastava · [14:42]</span> ^q7

> <span class="qz">很多时候,问题不在于能力。前沿模型的能力相当强,通常归根结底是成本。</span>  
> *And a lot of times, it's not capability. Frontier models are quite capable. It usually comes down to cost.*  
> <span class="qm">—— Anant Srivastava · [16:37]</span> ^q8

> <span class="qz">这可能会有例外,但提示词更多是关于行为,记忆是关于要知道什么和事实,而权重是关于如何推理。</span>  
> *There can be exceptions to this, but prompt is more about behavior, memory is about what to know and facts, and weights are about how to reason.*  
> <span class="qm">—— Anant Srivastava · [17:20]</span> ^q9

> <span class="qz">所以我想以这句话作结:模型是容易的部分。</span>  
> *So what I would like to conclude with is the model is the easy part.*  
> <span class="qm">—— Anant Srivastava · [19:31]</span> ^q10

> <span class="qz">你在模型周围构建的东西——模型周围的 harness,它帮助你在正确的位置存储正确的信息并让它们之间循环流转——这才是你必须构建的关键架构。</span>  
> *What you build around the model, the harness around the model that helps you store the right information at the right place and circulate among them is the key architecture that you've got to build.*  
> <span class="qm">—— Anant Srivastava · [19:38]</span> ^q11

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-24-mad-who-feeds-the-gpus--inside-ais-hidden-30|300亿美元的隐形公司：VastData 要做 AI 时代的操作系统]]<span class="pd-rz">同概念:RAG、智能体 (agent)、权重 (weights)、推理 (inference)</span>
- [[2026-08-29-talks-agents-are-where-microservices-were-in-2|Navan 架构师谈生产环境智能体：从运行时到护栏的实战分层]]<span class="pd-rz">同概念:RAG、智能体 (agent)、记忆 (memory)</span>
- [[2026-09-26-talks-long-horizon-agents-need-experiments-not|给 AI 村庄装上自动研究循环：长时程智能体的实验配方]]<span class="pd-rz">同概念:RAG、智能体 (agent)、记忆 (memory)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-29-latent-thariq|Anthropic 的 Thariq 谈 Claude Code：提示词、CloudMods 与给前沿踩刹车]]<span class="pd-rz">同概念:提示词 (prompt)、智能体 (agent)、推理 (inference)</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:提示词 (prompt)、智能体 (agent)</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:智能体 (agent)、记忆 (memory)</span>

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
