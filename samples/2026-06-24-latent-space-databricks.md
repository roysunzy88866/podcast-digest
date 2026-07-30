---
title: Databricks 的反击：重写数据库、统一智能体与开放的执念
podcast: Latent Space
date: 2026-06-24
source_url: https://www.latent.space/p/databricks
duration: "68:43"
type: episode
cover: "#0e7490"
image: "/covers/2026-06-24-latent-space-databricks.jpg"
description: "Matei 与 Reynold 讲解如何用开源打赢数据之战,以及智能体时代的新架构。"
guests: ["[[Matei Zaharia]]", "[[Reynold Xin]]"]
companies: ["[[Databricks]]", "[[Snowflake]]", "[[MosaicML]]", "[[Neon]]"]
concepts: ["[[Omnigen]]", "[[LTAP]]", "[[HTAP]]", "[[Dream Engine]]", "[[智能体]]", "[[云沙箱]]", "[[上下文策略]]", "[[CDC]]", "[[第二系统综合征]]", "[[Spark]]"]
category: 智能体
tags:
  - 智能体
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Databricks 的反击：重写数据库、统一智能体与开放的执念</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# Databricks 的反击：重写数据库、统一智能体与开放的执念

<div class="pd-byl"><b>Matei Zaharia</b> · Databricks 联合创始人</div>

<div class="pd-mt">2026-06-24 · Latent Space · 68:43</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-06-24-latent-space-databricks.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我让一个智能体去调试某个东西,它花了 500 美元,因为它决定读取大量日志文件并消耗大量 token。</div><div class="a">Matei Zaharia · 21:04</div></div>

> [!info] 关联
> **人物** [[Matei Zaharia]] · [[Reynold Xin]]
>
> **公司** [[Databricks]] · [[Snowflake]] · [[MosaicML]] · [[Neon]]
>
> **概念** [[Omnigen]] · [[LTAP]] · [[HTAP]] · [[Dream Engine]] · [[智能体]] · [[云沙箱]] · [[上下文策略]] · [[CDC]] · [[第二系统综合征]] · [[Spark]]
>
> **来源** [Latent Space](https://www.latent.space/p/databricks)

<div class="pd-tldr"><b>一句话</b>Matei 与 Reynold 讲解如何用开源打赢数据之战,以及智能体时代的新架构。</div>

数据库界有个困扰了工程师十年的梦魇:让交易系统(管日常订单)和分析系统(管海量统计)用同一份数据,不用搬运。业界为此造出了各种妥协方案,三十年来没人真正解决。这一集里,[[Databricks|Databricks]] 的创始人们说,他们靠云原生架构转了个格式,把这事做成了。

说这话的是 [[Matei Zaharia|Matei Zaharia]] 和 [[Reynold Xin|Reynold Xin]],他们联合创立了 Databricks。在这场对谈里,他们讲了三件事:为什么编程[[智能体|智能体]]满天飞,我们却需要一个开源的「智能体操作系统」来统一管理;那个让数据工程师凌晨三点惊醒的噩梦数据管道([[CDC|CDC]]),怎么被一种叫 [[LTAP|LTAP]] 的新思路终结;以及他们为什么敢把运行了十年的核心数据库引擎推倒重写。中间还穿插了他们怎么赢下与 [[Snowflake|Snowflake]] 的关键一战,以及买下 Mosaic 之后对模型路线的重新判断。

先从最贴近当下开发者体验的智能体说起。Databricks 内部原本散落着五六个不同的智能体框架,高级工程师们各自搭了一套 vibe coding(凭感觉编程)的环境,用得很爽,但没法分享给团队。Matei 发现,不管是给程序员用的编程智能体,还是给业务用分析数据的智能体,底层碰壁的都是同一批问题:你需要一个[[云沙箱|云沙箱]](隔离的运行环境)、需要权限控制、需要历史记录来协作 <button class="pd-ts" data-t="02:22" data-who="Matei Zaharia" data-en="What led you to it? Yeah, there were actually a couple of like converging lines, which I think is a good sign that you need something new." aria-label="回原文"></button>。这促成了 Omnigens 的诞生——它是一个开源平台,核心是一个通用 API。无论你底层用的是云端运行的代码,还是别的工具,都被映射到同一个接口上 <button class="pd-ts" data-t="14:11" data-who="Matei Zaharia" data-en="Just to be clear, I would say the core of this is this common API on top of all the harnesses. So the API is basically like you've got an agent session and you can send in" aria-label="回原文"></button>。开源的好处立竿见影:周六刚发布,没几天就有了 400 个合并请求,外界自发补齐了在 Kubernetes 上运行和各种云沙箱的支持 <button class="pd-ts" data-t="11:56" data-who="Matei Zaharia" data-en="Yeah, you can look at the merge runs. I actually asked Somnijen this morning about the- 400 merge already? Yeah." aria-label="回原文"></button>。

光统一接口还不够,安全与失控是悬在智能体头上的两把刀。作为 CTO,Matei 最怕一觉醒来登上头条,说因为装了个可疑的 NPM 包把公司代码全泄露了 <button class="pd-ts" data-t="21:46" data-who="Matei Zaharia" data-en="I spend a lot of time being annoyed by coding agents and getting prompts. And also as the CTO, I don't want to end up on the front page as like I installed some weird NPM package" aria-label="回原文"></button>。传统的安全策略太死板:要么允许推送到营销网站,要么禁止。但这会造成死结——如果智能体既要读取机密文档,又要给网站写代码呢?Omnigens 的解法是「[[上下文策略|上下文策略]]」:它会记住智能体在这个会话里干过什么。如果它刚装了一个才一天的生僻包,或者刚读完了一千份机密文档,那想再往外发数据时就会被拦下;如果没干这些危险动作,也许就可以放行 <button class="pd-ts" data-t="19:20" data-who="Matei Zaharia" data-en="So the thing we decided we need is stateful or what we call contextual policies where you keep track of the state of that session. It's not like, is it allowed to push to the marketing site or not?" aria-label="回原文"></button>。同样被精确追踪的还有开销——你可以直接给子智能体下死命令:「花不准超过 5 美元,超了就停下来问我」,它读日志烧 token 到限额就会自动弹窗请示 <button class="pd-ts" data-t="21:02" data-who="Matei Zaharia" data-en="One of the states we track is how much you spent in that session. So I can, I've had like," aria-label="回原文"></button>。

把智能体的运行环境安顿好,接下来要解决的就是它们赖以生存的数据底座。这就引出了这集的重头戏:LTAP。要理解它,得先聊聊 OLTP(联机交易处理,管高并发的日常流水)和 OLAP(联机分析处理,算海量的历史数据)的分家 <button class="pd-ts" data-t="28:22" data-who="Reynold Xin" data-en="But the world of databases is effectively split into roughly two halves. There's what we call OLTP databases, which are transactional. And think of your Postgres, your MySQL, your Oracle databases." aria-label="回原文"></button>。三十年前大家做数据库的终极梦想(被称为 [[HTAP|HTAP]]),就是造一个单引擎把两者都包圆。但现实是,硬塞在一起往往两边都干不好,所以大家干脆把数据分家:用 CDC(变更数据捕获,持续把数据库的变动抽出来)把交易数据复制到专门的分析系统里 <button class="pd-ts" data-t="29:51" data-who="Reynold Xin" data-en="A lot of our customers obviously get into Databricks to run more sophisticated things. And there's this term called CDC. to change data capture." aria-label="回原文"></button>。Reynold 坦言,CDC 简直是现代社会的数字噩梦,脆弱到被工程师戏称为「持续数据损坏」,只要源头的表结构改一点,管道就会崩掉,让人半夜爬起来修 <button class="pd-ts" data-t="30:37" data-who="Reynold Xin" data-en="but one of the most fundamental operations powering modern society. But it's so brittle that a weak joke that it should be called continuous data corruption" aria-label="回原文"></button>。Databricks 的 LTAP 方案直接砍掉了中间管道:既然统一查询引擎那么难,那咱就只统一存储。只要交易数据库在写入数据湖时,顺手把行式数据(适合单条交易)转码成列式数据(适合批量分析),分析引擎就能直接去读,零延迟 <button class="pd-ts" data-t="32:00" data-who="Reynold Xin" data-en="And our whole idea of LTAP is kind of obviously a wordplay on the term HTAP. It's that we think this is HTAP done, right? HTAP wants to build a single engine for both." aria-label="回原文"></button>。

更魔幻的是,这个如此战略级的架构突变,竟然没什么正规的启动流程。Ali 和 Reynold 为「到底能不能直接写成列式格式」辩论了无数个会议。直到某天,一位工程师直接跑去敲桌子说:「我顺手做了个原型,跑通了。」他发现存储集群反正有大量闲置的 CPU,顺手拿来做个格式转换毫无压力,而且列式数据压缩率更高,写入速度反而更快 <button class="pd-ts" data-t="35:01" data-who="Reynold Xin" data-en="hey, can we actually just change that to write in column-oriented format? And we're just debating. And one day, one of our engineers was super smart came in." aria-label="回原文"></button>。这种不拿许可、直接动手干的文化,被 Matei 视为珍宝 <button class="pd-ts" data-t="36:23" data-who="Matei Zaharia" data-en="from first principle and then somebody just did it. Yeah, I mean, if you set yourself up so people do that, that'll be great. That happened a bit with Omnigent, too." aria-label="回原文"></button>。他们还把这种迭代哲学用到了 [[Dream Engine|Dream Engine]] 上。市面上主流的分析数据库引擎大多十年没推倒重来了,打满各种补丁。Databricks 雇佣了顶尖工程师,试图从零造一个新引擎。他们甚至建了个「数据库工厂」:用十年来积累的百万级数据点训练了一个机器学习模型,专门用来预测哪种算法配哪种查询跑得最快 <button class="pd-ts" data-t="45:45" data-who="Reynold Xin" data-en="Many of them have built more than two in the past. But they were still worried about this, hey, building a database engine from scratch," aria-label="回原文"></button>。为了避开软件工程里声名狼藉的「[[第二系统综合征|第二系统综合征]]」(因为野心太大而永远难产的陷阱),他们小心翼翼地规划,让新引擎能逐步接管能力,而不是硬切换 <button class="pd-ts" data-t="49:54" data-who="Reynold Xin" data-en="I feel like Databricks is doing a really good job of the incremental evolution. Do you have to hard cut to a new system at any point? We designed it in a way that it can be incremental." aria-label="回原文"></button>。

聊完系统,还得交代一下 Databricks 的两条战略岔路。第一是赢 Snowflake。两家的云架构其实差不多,但 Reynold 指出最致命的差异在于开放——Databricks 从一开始就坚持用 Parquet 等开放数据格式,而对手曾死抱专有格式 <button class="pd-ts" data-t="53:04" data-who="Reynold Xin" data-en="Probably the biggest fundamental difference. Both companies started around the same time. Both went to the cloud." aria-label="回原文"></button>。经历过被 Oracle 锁定恐惧的传统企业,特别吃这一套。第二是关于模型。当年 Databricks 买下 Mosaic(早期开源大模型团队)后,很多人以为他们要下场拼通用大模型。但 Matei 澄清,通用模型太烧钱且同质化,他们转而用专门的模型解决具体痛点,比如解析文档——专门做的视觉模型比前沿通用模型便宜 100 倍,效果反而更好 <button class="pd-ts" data-t="60:09" data-who="Matei Zaharia" data-en="And there's a few places where we're doing it. One is there are many high volume use cases where if you If you have a specialized model," aria-label="回原文"></button>。底层的核心判断是:通用智能体的推理能力越来越强,未来很多传统软件的逻辑,只要数据放对了位置,扣上个智能体就能跑出魔法 <button class="pd-ts" data-t="66:16" data-who="Reynold Xin" data-en="Going back to your original question, I think one of the theses we have is actually once you can get the data in the right place, the AI models are becoming pretty good." aria-label="回原文"></button>。

> 【背景】转写稿中提及的 Ali,指 Databricks 的 CEO Ali Ghodsi。Matei 提到的 Mosaic,是指 Databricks 在 2023 年收购的 AI 创企 MosaicML。

## 本集带走

最后收个尾,这一集值得带走的是三句话。第一,智能体要想从单机玩具变成团队基建,必须有统一的开源接口和云沙箱来管协作;而且安全不能靠简单的是非题,得靠追踪它干过啥的上下文策略来动态拦截。第二,别再为了搬运数据修管道了,把交易和分析硬揉进一个引擎是死路,但只统一底下的存储层、顺手转个格式,就能拿到那个数据库界三十年的终极梦想。第三,十年老系统难免变烂,重写不一定要等五年大爆炸,拿真实业务跑通的代码去迭代,用机器学习模型来挑算法,照样能平稳换上新引擎。说到底,在数据这件事上,开放格式永远会赢。

<div class="pd-sec">全部金句 <span>7 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">我让一个智能体去调试某个东西,它花了 500 美元,因为它决定读取大量日志文件并消耗大量 token。</span>  
> *I asked an agent to debug something and it spent $500 because it decided to read a lot of log files and burn a lot of tokens.*  
> <span class="qm">—— Matei Zaharia · [21:04]</span> ^q1

> <span class="qz">作为 CTO,我不想登上头版,就像我安装了某个奇怪的 NPM 包并泄露了所有的代码。</span>  
> *as the CTO, I don't want to end up on the front page as like I installed some weird NPM package and leaked all the code.*  
> <span class="qm">—— Matei Zaharia · [21:47]</span> ^q2

> <span class="qz">你真的需要把所有这些切成不同的碎片,并与这么多不同的供应商和平台合作,为了完成一个非常简单的可视化吗?</span>  
> *do you really need to chop all of this into different pieces and work with so many different vendors and platforms in order to get like a very simple visualization done?*  
> <span class="qm">—— Reynold Xin · [13:31]</span> ^q3

> <span class="qz">CDC 是最无聊的之一,但也是驱动现代社会的最基础的操作之一。但它是如此脆弱,以至于有一个冷笑话说它应该被称为持续数据损坏</span>  
> *CDC is one of the most boring, but one of the most fundamental operations powering modern society. But it's so brittle that a weak joke that it should be called continuous data corruption*  
> <span class="qm">—— Reynold Xin · [30:30]</span> ^q4

> <span class="qz">经过十年那样有机的演化,它就变成了一大堆像屎一样的代码。</span>  
> *after 10 years of organic evolution that way, it becomes a gigantic pile of shit.*  
> <span class="qm">—— Reynold Xin · [44:26]</span> ^q5

> <span class="qz">它可能比那些前沿模型便宜大约 100 倍,而且仍然更好。</span>  
> *It's probably like 100x cheaper than those frontier models and still better.*  
> <span class="qm">—— Matei Zaharia · [60:52]</span> ^q6

> <span class="qz">让数据到位,然后在上面附加一些智能体。魔法就会出来。但没有正确的数据,你无法真正做到这一点。</span>  
> *just get the data to be there and then slap some agent on top. Magic will come out. But without the right data, you can't really do that.*  
> <span class="qm">—— Reynold Xin · [66:37]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-05-21-latent-space-daytona|Daytona:为智能体造一台像笔记本一样的计算机]] —— 同公司:Neon · 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]] —— 同公司:Snowflake · 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|不只做推理：Modal 如何跨界多节点训练与智能体云]] —— 同概念:智能体 (agent)、Kubernetes

</div>
<div class="pd-ex">

**换个口味**

- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|Vercel COO 谈用 AI 重构销售：10 个 SDR 缩减到 1 个]] —— 同概念:智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]] —— 同概念:智能体 (agent)
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|估值150亿的隐形AI公司：我们最好的工作是独自安静地完成]] —— 同概念:智能体 (agent)

</div>
</div>

*本集关键词:智能体管理 · 开源托管底座 · LTAP与存储统一 · 数据库引擎重写 · AI与数据战略*

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
