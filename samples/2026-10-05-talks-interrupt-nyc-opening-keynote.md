---
title: "拥有你的智能:LangChain 的三大支柱与全新发布"
podcast: 精选演讲
date: 2026-10-08
source_url: undefined
duration: "32:03"
type: episode
cover: "#64748b"
description: "LangChain 在 Interrupt 纽约大会的主题演讲:为什么企业要「拥有自己的智能」,以及围绕运行时、可观测性、智能层的一系列新发布。"
companies: ["[[LangChain]]", "[[LangSmith]]", "[[LangGraph]]", "[[DeepAgents]]"]
concepts: ["[[智能体]]", "[[harness]]", "[[拥有你的智能]]", "[[评估]]", "[[轨迹数据]]", "[[trace]]", "[[微调]]", "[[后训练]]", "[[决策模型]]", "[[护栏]]", "[[模型路由]]", "[[LLM 网关]]", "[[红队测试]]", "[[可观测性]]", "[[governance]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-05-talks-interrupt-nyc-opening-keynote#post","headline":"拥有你的智能:LangChain 的三大支柱与全新发布","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-05-talks-interrupt-nyc-opening-keynote","mainEntityOfPage":"https://talk.solomind.cc/2026-10-05-talks-interrupt-nyc-opening-keynote","description":"LangChain 在 Interrupt 纽约大会的主题演讲:为什么企业要「拥有自己的智能」,以及围绕运行时、可观测性、智能层的一系列新发布。","datePublished":"2026-10-08","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Organization","name":"LangChain"},{"@type":"Organization","name":"LangSmith"},{"@type":"Organization","name":"LangGraph"},{"@type":"Organization","name":"DeepAgents"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"拥有你的智能 (owning your intelligence)"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"轨迹数据 (trajectory)"},{"@type":"Thing","name":"trace"},{"@type":"Thing","name":"微调 (fine-tuning)"},{"@type":"Thing","name":"后训练 (post-training)"},{"@type":"Thing","name":"决策模型 (decision model)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"模型路由 (model routing)"},{"@type":"Thing","name":"LLM 网关 (LLM gateway)"},{"@type":"Thing","name":"红队测试 (red teaming)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"governance"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"拥有你的智能:LangChain 的三大支柱与全新发布","item":"https://talk.solomind.cc/2026-10-05-talks-interrupt-nyc-opening-keynote"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>拥有你的智能:LangChain 的三大支柱与全新发布</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 拥有你的智能:LangChain 的三大支柱与全新发布

<div class="pd-byl">2026-10-08</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-05-talks-interrupt-nyc-opening-keynote.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">模型本身正在变得有些商品化,真正起作用的是围绕模型的这一切,尤其是数据。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="03:32" data-who="嘉宾" data-en="the models themselves are becoming somewhat commoditized and it's all of this stuff around the model, in particular the data" aria-label="回原文"></button></div></div>

> [!info] 关联
> **公司** [[LangChain]] · [[LangSmith]] · [[LangGraph]] · [[DeepAgents]]
>
> **概念** [[智能体]] · [[harness]] · [[拥有你的智能]] · [[评估]] · [[轨迹数据]] · [[trace]] · [[微调]] · [[后训练]] · [[决策模型]] · [[护栏]] · [[模型路由]] · [[LLM 网关]] · [[红队测试]] · [[可观测性]] · [[governance]]

这一集是 [[LangChain|LangChain]] 在其开发者大会 Interrupt(首次在纽约举办)上的开场主题演讲。

核心话题是一个正在业内流行的说法——「[[拥有你的智能|拥有你的智能]]」(owning your intelligence):公司不再只是调用别人的模型,而是在模型内部和周围构建大量领域专属的东西,让 AI 真正成为自己产品的护城河。

演讲抛出的核心判断是:**模型本身正在商品化,真正的差异化在模型之外——尤其是数据**:无论是你喂给模型的实际上下文,还是你烘焙进执行框架里的领域专属逻辑。

「拥有智能」之所以此刻爆发,有三个原因:token 成本大幅上升,企业要掌控 ROI;开源权重模型越来越好,既能省钱又能定制;以及上面这条——模型趋同,周边才是壁垒。

## 三个支柱:可控、复利、治理

LangChain 把「拥有智能」拆成三个核心支柱:

**第一,开放且可控的 harness**(harness 即执行框架——把模型和领域上下文接线连接、让模型在正确的时间看到正确上下文的那一层)。

它必须是**模型中立的**:这既是进攻——最好的新模型一出来(无论来自 OpenAI、Anthropic 还是 TypeSafe),你能立刻切换过去;也是防御——不被单一供应商锁定、任其涨价。

控制手段包括开源的 [[LangGraph|LangGraph]](用有向图编排[[智能体|智能体]]流程)、新的 [[DeepAgents|DeepAgents]],以及往核心智能体循环里注入决策的 middleware。

**第二,复利式增长**。

发布一个智能体离成功还很远,关键是把用户使用中的错误和经验不断喂回去——人工改代码改 prompt 也好,用记忆或 prompt 优化工具自动化也好。

演讲里最有力的一句方法论是:**如果你能比任何人都更好地定义你的领域里什么算「好」,你就能为那个领域构建出最好的智能体**——具体做法就是用 evals([[评估|评估]]集)定义「好」,然后在 evals 上爬山。

**第三,[[governance|治理]]**。这对内部智能体尤其关键:你得知道有多少智能体在跑、能控成本、能管权限——不同的人只能访问他该访问的东西。

支撑这三支柱的组织形态也变了:核心平台工程师做底座,其外是「智能体工程师」——数据科学家、工程师、机器学习工程师的奇怪混合体,一种全新技能组合;最外圈是领域专家,他们往往才是最该决定「什么算好」的人,所以平台必须能触达非开发者。

流程上则是「构建→测试→部署→监控」,再把监控所得带回构建的迭代闭环。

## 运行时:智能体三件套 + 新发布

一个智能体由三部分组成:**业务逻辑**(指令、工具、技能、钩子——金融智能体和法律智能体的技能截然不同,这是你要提供的)、**harness**、以及**基础设施**(持久执行、安全访问工具、运行智能体写的代码——很多非编码智能体也在写代码、访问模型)。

DeepAgents 是最新的开源开箱即用 harness,大量借鉴编码智能体的做法:带文件系统和沙箱的执行环境、用压缩做上下文管理,但目的是让你构建领域专属智能体。

而 **Managed Deep Agents** 把 harness 和托管基础设施合成一个——你只提供业务逻辑就能上生产,演讲称之为「公司 harness」,让组织内部构建和共享智能体变得非常容易。

本次新发布三件事:一是**认证原语**——内部智能体最难的恰恰是认证:智能体连 Notion 或 Jira 时,是以用户身份还是固定服务身份连接?

新引入 connections(工具级认证)、agent identity(整体定义为用户权限还是服务权限)、channels(比如 Slack 共享频道里你和同事都发消息,用谁的认证、对哪些运行生效,全部内置处理)。

二是**用户级记忆**——此前只有智能体级记忆,现在能记住每个个别用户的偏好。

三是**内置工具**——通过 parallel 接入网页搜索,不用再单独申请 API 密钥。

另一个新物种是**[[决策模型|决策模型]]**。

周末刚发布的 Jev 是个新型模型:你发给它一个状态和一串问题,它对问题评分——布尔值、分数或分类选择都行——**它不能生成文本,但能做决策**。

虽受限,用处很大:评估(智能体运行中实时评分、实时抓错)、[[护栏|护栏]](传统护栏的致命缺点是加延迟,低延迟护栏就非常强大)、以及[[模型路由|模型路由]](选哪个模型、加载哪些技能或工具)。

JEV 发布后开源决策模型已大规模爆发,[[LangSmith|LangSmith]] 网关除了 Jev 还托管了一个开源决策模型 semif。

**LangSmith [[LLM 网关|LLM 网关]]**(一两个月前 beta)的主张很直接:出于治理和成本控制,你应该把**所有** AI 流量——包括 Codex、Claude Code、Cursor 这些编码智能体的——都路由到统一网关。

核心功能:按团队、用户、API 密钥设消费限额;速率限制;模型出错时回退到其他提供商;即将推出的**有状态回退**——发现 Anthropic 宕机,接下来 10 到 30 分钟直接切 OpenAI,不用再试。

格式上统一规范为 OpenAI 和 Anthropic 消息格式,也支持直接透传以第一时间用上新功能。

## 可观测性:轨迹成为核心原语

[[可观测性|可观测性]]是复利循环的燃料,而 **trace**([[trace|追踪记录]])是这个循环的核心——它是记录系统,展示智能体每一步做了什么。

原有三级原语:run 是一次 LLM 调用,trace 是智能体的一次调用,thread 是多轮交互下的一系列 trace。

但现在有了更有用的标准:**trajectory([[轨迹数据|轨迹]])**——如今大多数智能体都是在循环里跑 LLM、编译出一个消息列表,这个列表是标准格式,可以到处复用。

LangSmith trajectories 带来三大好处:调试快得多——数千次迭代的复杂 trace 原本很难解析,新 UI 把冗长的工具调用压缩展示,像用编码智能体一样一眼扫过;标注简单了——看得清才好留反馈;以及**让[[后训练|后训练]]模型容易得多**——后端解析各种 SDK 和编码智能体传来的复杂格式,统一暴露成标准 trajectory,可直接用于[[微调|微调]]。

微调 = 数据 + 推理训练基础设施,LangSmith 要把两者接起来:新发布的 **SmithTune CLI** 让你选择 traces、筛出相关部分、预处理成微调就绪的数据,然后传入 Fireworks 或 Base 10 做实际训练,再评估,产出优化过的模型。

存储层是自研的 SmithDB——专为智能体工作负载打造,摄取、存储、查询都快得多。

另发布了 **LangSmith custom apps**:可以理解为 lovable,但针对你已经在 LangSmith 上的数据——对话式生成完全自定义的可视化应用,LangChain 甚至开源了自己的设计系统供底层编码智能体使用,且内置团队共享与 RBAC/ABAC 权限边界。

## 智能层:Engine v2 替 AI 工程师干活

最上层是 **LangSmith Engine**:一个坐在追踪记录之上的后台引擎,基本做了 AI 工程师会做的所有事——看问题、聚类、建看板、用代码修复、加评估器、往数据集加样本。

本次发布的 Engine v2 三个亮点:

- **主动验证修复**:Engine 在 trace 里发现问题后,会在你的部署上起一个预览分支,确认问题真实存在,做出修复、再起分支验证修复有效,然后把全部证据打包成一个 issue 呈现给你。
- **[[红队测试|红队测试]]**:以前 Engine 只能从真实流量里被动发现问题,现在它能主动模拟各种问题和假设去打你的部署,识别哪些产生坏结果——学到了不该学的、产出了坏结果、偏离了品牌调性——然后标记给你。这也解决了「创建评估集非常痛苦」的老问题,而且可以在智能体上线之前就用。
- **性能与成本**:更善于发现和修复问题,同时便宜了很多。

Engine 已扫描超过 7000 万条 trace、检测出超过 21,000 个问题,被很多增长最快的 AI 公司用来压缩迭代周期——演讲强调:**构建智能体时,迭代周期就是一切**。

Engine v2 即刻上线,自托管版(自带密钥)将随一两周内的 v17 发布。

收尾回到主线:运行时(开源 + 托管部署)、可观测性与评估(trajectory 更智能体原生、custom apps 更可定制、数据用于调优)、智能层(扫描 trace 和红队只是开始)——这一切都是为了帮你构建领域专属智能体,真正拥有你的智能。

## 本集带走

- **模型会趋同,周边定胜负**:把差异化押在数据、上下文和烘焙进 harness 的领域逻辑上,而不是押在某个模型上。
- **harness 必须模型中立**:新模型一出立刻能切换——既是进攻也是防御,避免被单一供应商锁价。
- **用 evals 定义「好」,再爬山**:谁能更好地定义自己领域里什么算最好,谁就能构建那个领域最好的智能体;智能体的成功靠发布后「监控→回灌构建」的复利循环。
- **决策模型是新物种**:不能生成文本、只做决策的模型,适合评估、低延迟护栏和路由——别用前沿大模型干这些小事。
- **所有 AI 流量走统一网关**:包括编码智能体的流量,才能做成本限额、速率限制和有状态的供应商回退。
- **trajectory 是新标准格式**:统一轨迹让调试、人工标注、微调数据三者共用同一份消息列表。
- **让引擎替你迭代**:自动发现、验证、修复、红队测试,把「迭代周期就是一切」的循环压到最短。

<div class="pd-sec pd-sec-q">全部金句 <span>2 条</span></div>

> <span class="qz">模型本身正在变得有些商品化,真正起作用的是围绕模型的这一切,尤其是数据。</span>  
> *the models themselves are becoming somewhat commoditized and it's all of this stuff around the model, in particular the data*  
> <span class="qm">—— 嘉宾 · [03:32]</span> ^q1

> <span class="qz">如果你能比任何人都更好地定义对你的领域来说什么更好、什么是最好,你就能为那个领域构建出最好的智能体。</span>  
> *If you can define what better and what best looks like for your domain better than anyone else, you will be able to build the best agent for that domain.*  
> <span class="qm">—— 嘉宾 · [06:32]</span> ^q2

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-13-talks-when-to-build-your-own-agent-harness-har|拥有你自己的智能：Harness、Eval 与数据飞轮]]<span class="pd-rz">同公司:DeepAgents、LangChain · 同概念:harness(执行框架) (harness)、可观测性 (observability)、智能体 (agent)、评估 (evals)、微调 (fine-tuning)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同公司:LangChain · 同概念:harness(执行框架) (harness)、后训练 (post-training)、护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-09-14-talks-agents-without-code-skills-yaml-and-file|智能体就只是文件：当配置取代 Python]]<span class="pd-rz">同公司:LangChain、Cursor · 同概念:harness(执行框架) (harness)、智能体 (agent)、评估 (evals)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:harness(执行框架) (harness)、可观测性 (observability)、智能体 (agent)、评估 (evals)、护栏 (guardrails)</span>
- [[2026-09-29-latent-thariq|Anthropic 的 Thariq 谈 Claude Code：提示词、CloudMods 与给前沿踩刹车]]<span class="pd-rz">同公司:Anthropic · 同概念:harness(执行框架) (harness)、智能体 (agent)、评估 (evals)、沙箱 (sandbox)</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)、评估 (evals)</span>

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
