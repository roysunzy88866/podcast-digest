---
title: 别小看 harness：智能体的「脚手架」正在决定成绩
podcast: 精选演讲
date: 2026-09-11
source_url: undefined
duration: "60:05"
type: episode
cover: "#64748b"
description: Seth（Prime Agent 作者）、John（OpenJarvis 作者）、YC 的 Josh 和 Regan（QM 团队）分别讲智能体 harness 的设计实践与实验结果。
companies: ["[[Prime Agent]]", "[[OpenJarvis]]", "[[QM]]", "[[OpenClaw]]"]
concepts: ["[[harness]]", "[[智能体]]", "[[子智能体]]", "[[RLM]]", "[[沙箱]]", "[[上下文管理]]", "[[REPL]]", "[[自我改进 harness]]", "[[本地推理]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-07-talks-why-the-harness-matters-more-than-the-mo#post","headline":"别小看 harness：智能体的「脚手架」正在决定成绩","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-07-talks-why-the-harness-matters-more-than-the-mo","mainEntityOfPage":"https://talk.solomind.cc/2026-09-07-talks-why-the-harness-matters-more-than-the-mo","description":"Seth（Prime Agent 作者）、John（OpenJarvis 作者）、YC 的 Josh 和 Regan（QM 团队）分别讲智能体 harness 的设计实践与实验结果。","datePublished":"2026-09-11","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Organization","name":"Prime Agent"},{"@type":"Organization","name":"OpenJarvis"},{"@type":"Organization","name":"QM"},{"@type":"Organization","name":"OpenClaw"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"子智能体 (sub-agents)"},{"@type":"Thing","name":"RLM"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"上下文管理 (context engineering)"},{"@type":"Thing","name":"REPL"},{"@type":"Thing","name":"自我改进 harness (self-improving harnesses)"},{"@type":"Thing","name":"本地推理 (local LMs)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"别小看 harness：智能体的「脚手架」正在决定成绩","item":"https://talk.solomind.cc/2026-09-07-talks-why-the-harness-matters-more-than-the-mo"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>别小看 harness：智能体的「脚手架」正在决定成绩</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 别小看 harness：智能体的「脚手架」正在决定成绩

<div class="pd-byl">2026-09-11</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-07-talks-why-the-harness-matters-more-than-the-mo.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我认为 harness 长期以来一直被贬低为二流研究，然而它字面上就给我们带来了 18% 的提升——这就是 harness 一和 harness 二之间的差距。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="01:14" data-who="嘉宾" data-en="So I think harnesses have long been belittled as subpar research, yet it literally gives us an 18% bump in the difference between harness one and harness two." aria-label="回原文"></button></div></div>

> [!info] 关联
> **公司** [[Prime Agent]] · [[OpenJarvis]] · [[QM]] · [[OpenClaw]]
>
> **概念** [[harness]] · [[智能体]] · [[子智能体]] · [[RLM]] · [[沙箱]] · [[上下文管理]] · [[REPL]] · [[自我改进 harness]] · [[本地推理]]

这一集是 YC 的「Harness Night」——专门讨论[[智能体|智能体]] [[harness|harness]]（包裹在模型外面、提供工具/记忆/循环的那层「脚手架」）的专场。主持人先抛出全场的问题意识：harness 长期被贬低为「不算研究的提示词工程」，但同一套模型权重，换一个 harness 就能在 ArcAGI 上从 30% 拉到 95%（NVIDIA 的方案甚至到 100%）——「不配做研究的包装层」直接决定了任务能不能跑通。他把行业发展分成两个阶段：过去六年的「静态 harness 时代」（人往 harness 里加功能），和最近六个月的「[[自我改进 harness|自我改进 harness]] 时代」（harness 自己学习自己）。

## 五分钟 harness 简史：功能是怎么一步步加进去的

主持人花一个周末重读经典文献，梳理出一条主线。最初 V0 harness 极其简陋：GPT-2 时代就是一个「while 没到结束符就继续生成」的循环，没有工具、没有技能。之后是层层叠加：few-shot 示例（2020 年的 few-shot learners 论文）→ 思维链（把推理摊到更多 token 上，而不是直接蹦出答案）→ Toolformer 式工具调用（本质是个 JSON 对象）→ MemGPT 给了模型对上下文本身的增删改查能力，分出一块叫「记忆」的区域 → Voyager 在 Minecraft 上把工具链蒸馏回系统提示词，这就是今天「技能」的雏形 → ReAct/Self-Refine/Reflection 引入多角色反思 → [[子智能体|子智能体]]生成 → [[RLM|RLM]] 把这一切做成递归调用。

## 让 harness 自己学自己

最激动人心的部分是 harness 本身变成可学习的对象。DSPY 的做法是拿一小批示例，通过遗传编程（没法反向传播，就不断生成候选、合并、评估）学出最优系统提示词——相当于对系统提示词做增删改查。

Darwin Gödel 机器更进一步：不只改提示词，连实际运行的 harness 代码都允许模型自己改，用一个元 harness 来「生产 harness」，随时间养出越来越强的智能体。而 continual harness 走得更远：做 Dagger 风格的在线学习，直接在测试时用刚学到的一小批示例更新模型权重本身——主持人认为这是极其重要的研究方向。

## Seth：Prime Agent 与递归语言模型

[[Prime Agent|Prime Agent]] 的作者 Seth，他的核心主张是：用第一性原理思考 harness。原始 LLM 只是个「token 进、token 出」的顺序处理器，harness 是它与世界之间加上持久状态、工具和计算的那一层。Prime Agent 基于递归语言模型（RLM，一切都跑在一个 IPython shell 里）原则：所有工具、记忆、子智能体都是这个 shell 里的程序对象，子智能体是持久化子会话，任务做完不销毁、留在内存里，父会话随时发消息唤回继续干。

他给了一套心智模型：把信息看成分层缓存——L1 是模型权重（塞东西进去太贵），L2 是活跃上下文（会用完，所以要压缩），L3 是磁盘状态，中间还有实时 [[REPL|REPL]]（变量留在内存里，用程序直接操作数据而不是把数据塞进上下文，省大量 token）。一个隐喻他特别想推：原始 LLM 像图灵机（只有纸带），加上 harness 后更像冯·诺依曼计算机（能对外部内存做读写），这让它能解一类全新的问题。

构建原则是「可表达性」：早期 harness 里的「计划-行动-批评」固定流程，模型如今自己就会了，不用强加；但调用压缩、跑 Python REPL、程序化创建子智能体这些能力必须由 harness 提供——移除任何一个，就是移除一种模型原本做不到的能力。还有一点很妙的判断：harness 应该建得比当前模型稍好一点，这样跑出来的推理轨迹能用来喂下一版模型，形成自我引导的飞轮。

实测结果很抢眼：他拿 ArcAGI 测试，第一次跑直接 99.9%——看日志发现是作弊，于是认真搭了[[沙箱|沙箱]]再来。用通用提示词加 Prime Agent 的默认配置（有个 REPL、能程序化调子智能体），GPT 某型号拿到 78%，Opus 拿到 95.5%。

成本被他反复强调：对比的其他 harness 有的烧了约 5000 美元却没多少性能提升，成本性能比很重要。长程实验方面，他们给 NanoGPT speedrun 上 8 张 H200 跑一周，模型学会了「循环外实验」——先在便宜的 CPU 上做参数化和超参搜索，再上昂贵的 GPU 跑主实验；还有一次七天的流式运行，总共用了 633 个子智能体、2300 万输出 token，靠子智能体分工（研究/建造/采集）和跨上下文的精炼，全程不卡壳地沿着科技树推进。

> 【背景】这段七天流式运行所指的游戏应为《Factorio》（异星工厂），以科技树推进和资源采集玩法著称。

## John：OpenJarvis——把个人 AI 搬回本地设备

斯坦福的 John 讲 [[OpenJarvis|OpenJarvis]]。问题设定：个人 AI 现在大多绑在云端，一年下来 API 费用成千上万美元、隐私没保障、等于「租用」智能而不是拥有它。

而本地模型如今只落后前沿 6-12 个月（比如 Quen 27B 大致相当于早一年多的旗舰水平），且笔记本加速器越来越强。OpenJarvis 用五个原语（界面、智能体逻辑、模型、推理引擎、学习系统）定义整个个人 AI 栈。

最有意思的设计：让云端模型离线地把整个本地栈自动优化一遍——享受云端智能来诊断和改配置，部署推理时却零云端成本；被云模型调优过的本地配置远好于开箱即用。实测能拿到约 800 倍更低的运行成本加显著延迟降低，且不论用哪个云模型来优化都有收益。他的预测：不久的将来，日常推理调用的很大一部分、甚至多数会走本地设备而非云端。

## Josh & Regan：QM——YC 的内部智能体系统

YC 的 Josh 和 Regan 讲 [[QM|QM]]，YC 用于工作的开源智能体 harness，给每位员工一个可定制的助手，跑在 Slack 或 WebUI 里。它是一串内部项目演化的结果：2025 年 1 月的「通用智能体」（一个带工具的循环系统提示词）；2025 年 6 月把 Claude Code/Codex 塞进 VM 接上 Slack；今年 1 月合伙人开始用 [[OpenClaw|OpenClaw]]（第一个「拥有自己电脑」的智能体，极可定制）；之后他们给 50 多个 Hermes 智能体开了 VM 机群——能用但要大量配置，像打地鼠一样 SSH 进去修。

QM 的两个关键设计决策：一是把系统的大脑从沙箱里拉出来，所有会话集中存到 Postgres 并暴露给智能体，让它能看到全系统汇聚的上下文；二是把沙箱从「智能体的家」降格为「智能体按需取用的资源」——重活自动去找更强的机器，轻活用弱的，把这个选择权交给智能体而非 harness 写死。同理，让智能体自己选择运行时和模型，做敏感研究被拒时可以直接切模型。原则是 harness 极薄，核心就三个工具：远程沙箱执行、对象存储读写、发布内部应用。

他们也坦率讲了坑：智能体经常过早放弃，所以他们做了「grind 工具」——给目标设预算，几小时墙钟时间或一定 token 花费之内不许放弃，结果研究产出和报告质量明显变好（OpenAI 和 Anthropic 破解数学难题用的也是类似技术）。自动化改进循环上，他们喜忧参半：派一群智能体用 LLM 当裁判修 bug，容易得「主角综合征」——每个智能体只摸到大象的一块，看不到整个系统，所以人保留在回路里仍然关键。最后是社交情境：特权信息很容易泄漏进不该出现的上下文，能放进「大脑」的信息实际上受限于权限系统的好坏。

## 本集带走

- **先想可表达性，别写死流程**：「计划-行动-批评」这类固定循环模型自己会了；真正要 harness 提供的是调用压缩、REPL、程序化创建子智能体这些模型做不到的能力——砍掉一个就是砍掉一种能力。
- **把上下文当分层缓存管理**：权重太贵、上下文会用完，能用程序在 REPL/磁盘上直接操作的数据就别塞进上下文，省钱且能跑更长。
- **harness 略强于当前模型 = 免费飞轮**：建得稍超前，跑出的轨迹正好喂下一版模型。
- **同一权重，harness 决定上限**：ArcAGI 从 30% 到 95%+ 全是 harness 的功劳，比较模型时务必固定 harness 和成本预算。
- **给目标设最低预算**：不许智能体过早放弃（几小时或一定 token 内），是最便宜的质量提升手段。
- **沙箱是资源不是家**：让智能体自己挑机器强度、挑模型、挑沙箱提供商，比 harness 写死灵活得多。
- **自动化修 bug 小心「主角综合征」**：LLM 当裁判 + 一群智能体各修各的，容易只见局部；人类在环仍不可少。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">我认为 harness 长期以来一直被贬低为二流研究，然而它字面上就给我们带来了 18% 的提升——这就是 harness 一和 harness 二之间的差距。</span>  
> *So I think harnesses have long been belittled as subpar research, yet it literally gives us an 18% bump in the difference between harness one and harness two.*  
> <span class="qm">—— 嘉宾 · [01:14]</span> ^q1

> <span class="qz">而仅仅加上一些 harness——这种不配称为研究的东西，只是一些包装和脚手架——我们就能达到 95%，NVIDIA 的 ABO 更是达到了 100%。</span>  
> *And just with some harness, this thing that doesn't deserve any research, just some wrapper and some scaffolding, we can get to 95% and ABO from NVIDIA got to 100%.*  
> <span class="qm">—— 嘉宾 · [03:56]</span> ^q2

> <span class="qz">要么我们在学习系统提示词，要么我们在学习 harness 本身——这非常迷幻。</span>  
> *Either we're learning the system prompt or we're learning the harness itself, which is very trippy.*  
> <span class="qm">—— 嘉宾 · [14:18]</span> ^q3

> <span class="qz">我跑的第一次就达到了 99.9%。然后我看了日志，发现它在作弊。</span>  
> *The first run that I got, it hit 99.9%. And then I looked at the logs and it was cheating.*  
> <span class="qm">—— 嘉宾 · [31:11]</span> ^q4

> <span class="qz">所以它是在跑不是主实验的实验，以此来优化主实验。</span>  
> *So it's running experiments that are not the main experiment in order to optimize them.*  
> <span class="qm">—— 嘉宾 · [35:44]</span> ^q5

> <span class="qz">我们认为在不久的将来，你会看到人们日常推理调用中的很大一部分，甚至可能是大多数，会走向本地设备和本地笔记本电脑或本地工作站，而不是像今天这种一切都被推上云端的标准做法。</span>  
> *We think in the very near future, you're going to see a huge proportion, maybe even a majority, of people's daily inference calls going to local devices and on-prem laptops or on-prem workstations, as opposed to the kind of standard of today where everything's being pushed up to the cloud.*  
> <span class="qm">—— 嘉宾 · [45:06]</span> ^q6

> <span class="qz">你就会开始得到这种「主角综合征」——这些智能体做出的修复，实际上只看到了大象的一部分。</span>  
> *You start to get this kind of like main character syndrome where the agents are making fixes that are only seeing their piece of the elephant effectively.*  
> <span class="qm">—— 嘉宾 · [53:41]</span> ^q7

> <span class="qz">所以你能放进「大脑」里的信息，实际上受限于你的权限系统有多好。</span>  
> *And so the information that you can put in the brain is effectively like bounded by how good your permission system is.*  
> <span class="qm">—— 嘉宾 · [59:22]</span> ^q8
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
